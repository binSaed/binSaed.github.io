---
title: "I let a bot resolve merge conflicts and push the fix. Here's how I made that safe."
slug: bot-that-resolves-merge-conflicts
date: 2026-05-12
readTime: 8 min read
tags: [GitHub Actions, Git, Automation, CI/CD]
author: Abdelrahman Saed
description: "How to ship a genuinely dangerous automation safely — by shrinking its blast radius to one provably-safe case, working only in throwaway space, and failing closed on anything unexpected."
url: https://bnsaed.com/articles/bot-that-resolves-merge-conflicts
---

# I let a bot resolve merge conflicts and push the fix. Here's how I made that safe.

*Subtitle: Auto-committing to other people's branches is terrifying — until you shrink the blast radius to one provably-safe case. This is that story.*

*The Self-Driving Repo · Part 5 — Conflict Management (flagship)*

![A robot arm carefully braiding two translation streams back into one](/article-images/bot-that-resolves-merge-conflicts-hero.webp)

---

Let me start with the version of this idea that should scare you:

> "What if a GitHub Action automatically resolved merge conflicts and force-pushed the result to people's PR branches?"

If your stomach dropped, good — mine did too. A bot that runs `git merge` and `git push` against branches it doesn't own is exactly how you corrupt someone's work, lose a commit, or merge two versions of a file into nonsense. This is the most dangerous automation in the entire series.

And yet it runs on every push to `master`, it resolves real conflicts, and I trust it. The trick wasn't writing a smarter merge algorithm. It was making the bot **profoundly cowardly** — it only acts in one narrow situation where the "right answer" is mechanical and provable, and it runs away from everything else.

This post is about how to take a scary capability and make it safe by aggressively shrinking its blast radius.

## The problem: translation conflicts are constant and brain-dead

We ship in multiple languages. Translations live in per-locale JSON files — `assets/translations/en.json`, `ar.json`, and so on. Add a feature and you add keys to all of them. Which means **every feature branch touches the same translation files**, and they conflict constantly.

But here's the thing: these conflicts are almost never *real*. Two developers add different keys to `en.json`. Git sees edits to the same region and throws up its hands. A human opens the file, looks at the two sides, and realizes there's nothing to decide — you want *both* keys. It's the dumbest possible conflict, and resolving it by hand is pure tax: it blocks the PR, interrupts the author, and contributes exactly zero thought.

Code conflicts deserve a human. Two people adding `"save_button": "Save"` and `"share_button": "Share"` to the same JSON do not.

## The idea: automate the mechanical case, refuse everything else

The workflow runs on every push to `master`. For each open PR, it tries to merge `master` in. If the *only* things that conflict are translation JSON files, it resolves them by merging the key sets, pushes the resolution, and comments to explain itself. If *anything else* conflicts — a single `.dart` file, a `pubspec.yaml`, anything — it aborts, touches nothing, and leaves the PR for a human.

The safety isn't in the merge logic. It's in the **refusal logic**. Let me walk the guards in the order they execute, because the order *is* the design.

## How it works (a fortress of guard clauses)

![Decision flow: if every conflicting file matches the translations path, merge and push; otherwise abort and hand to a human](/article-images/bot-that-resolves-merge-conflicts-diagram.webp)

### Guard 0: only conflicted, real, ready PRs

Before any git happens, filter hard. Skip drafts. Skip forks (you can't safely push to them, and you shouldn't). And critically, only consider PRs that are *actually* conflicting — which means waiting out GitHub's eventually-consistent `mergeable` field, exactly like the conflict radar in Part 4:

```js
let freshPR;
for (let attempt = 0; attempt < 5; attempt++) {
  const { data } = await github.rest.pulls.get({ owner, repo, pull_number });
  if (data.mergeable !== null) { freshPR = data; break; }  // null = not computed yet
  await new Promise(r => setTimeout(r, 3000));
}
if (!freshPR || freshPR.mergeable !== false) continue;     // only proceed on real conflicts
```

### Guard 1: do the merge in throwaway space

Never operate on `master` or the original branch directly. Check out the PR branch into a disposable local branch, then attempt the merge there. If it merges clean, there was nothing to do — move on:

```js
execSync('git checkout master && git reset --hard origin/master');
execSync(`git fetch origin "${branch}"`);
execSync(`git checkout -B _auto_resolve "origin/${branch}"`);

let hasConflicts = false;
try { execSync('git merge origin/master --no-edit'); }
catch { hasConflicts = true; }
if (!hasConflicts) continue;
```

### Guard 2: THE important one — is *every* conflict a translation file?

This is the load-bearing guard, the reason the whole thing is safe. List the unmerged files. If even one of them is outside the translations path, abort the entire merge and skip the PR. No partial resolutions. No "fix the easy files and leave the hard ones." All-or-nothing:

```js
const conflictFiles = execSync('git diff --name-only --diff-filter=U')
  .toString().trim().split('\n');

const TRANSLATION_PATH = /^assets\/translations\/.*\.json$/;
const allTranslation = conflictFiles.every(f => TRANSLATION_PATH.test(f));

if (!allTranslation) {
  execSync('git merge --abort');   // touch nothing, hand it to a human
  skipped++;
  continue;
}
```

That `every()` is the line that lets me sleep. The bot's authority is scoped to a regex. A conflict in `lib/` the bot never even *attempts* to resolve — it aborts and walks away. The dangerous version of this feature is the one that tries to be helpful with code. This one is constitutionally incapable of it.

### Guard 3: resolve by merging key sets, with a defined winner

Only now, with every conflict proven to be a translation file, does it resolve. And the resolution is deliberately boring — parse both sides as JSON, spread them together so you keep *all* keys from both branches:

```js
for (const file of conflictFiles) {
  const masterJSON = JSON.parse(execSync(`git show origin/master:"${file}"`).toString());
  const branchJSON = JSON.parse(execSync(`git show "origin/${branch}":"${file}"`).toString());

  const merged = { ...masterJSON, ...branchJSON };   // union; branch wins on true key collisions

  fs.writeFileSync(file, JSON.stringify(merged, null, 2) + '\n');
  execSync(`git add "${file}"`);
}
```

Two things make this trustworthy. First, it operates on the **clean versions** of each file from each branch (`git show origin/master:file` and `git show origin/branch:file`) — not on the conflict-marker-polluted working copy. There's no risk of a stray `<<<<<<<` ending up in the output. Second, the merge rule is *defined and documented*: it's a union, and on the rare true collision (both branches changed the same key), the **branch value wins**. That's a real decision with a real rationale (the PR author's intent is newer), not an accident of ordering.

### Guard 4: tell the humans exactly what you did

Automation that mutates someone's branch silently is a betrayal. So the bot pushes the resolution and immediately comments — listing the files it touched and stating the merge rule in plain language:

```js
execSync('git commit --no-edit');
execSync(`git push origin "_auto_resolve:${branch}"`);

await github.rest.issues.createComment({
  owner, repo, issue_number: pr.number,
  body: [
    '🤖 **Auto-resolved translation conflicts**',
    '',
    'Merged `master` and resolved conflicts in:',
    ...conflictFiles.map(f => `- \`${f}\``),
    '',
    'PR branch values were preserved where both branches changed the same key.',
    'Please review the merged translations.',
  ].join('\n'),
});
```

"Please review" is not a throwaway line. The bot resolves and *unblocks*; the human still gets the final look. It removes the toil, not the oversight.

### Guard 5: fail closed

Every PR is wrapped so that any unexpected error aborts the merge and moves on — one failure can't poison the rest of the run, and a half-merge never survives:

```js
} catch (error) {
  core.warning(`Failed to resolve PR #${pr.number}: ${error.message}`);
  try { execSync('git merge --abort'); } catch {}
}
```

When in doubt, the bot does *nothing*. That's the entire philosophy in one catch block.

## What it bought us

- **A whole category of busywork evaporated.** Translation-only conflicts — frequent, mindless, blocking — resolve themselves within a run of hitting `master`.
- **PRs stay unblocked.** Authors stop losing momentum to a conflict that required no thought.
- **Trust, because it's transparent.** Every action is announced on the PR with the rule it followed. Nobody finds a mystery commit.
- **Reviewers still review.** The human look survives; only the mechanical merge is gone. Roughly 10 translation conflicts auto-cleared per week.

## Gotchas & trade-offs

- **A JSON union is not a real semantic merge.** If both branches set the same key to *different* values, "branch wins" might be wrong. It's a defensible default, not a guarantee — which is exactly why the bot says "please review."
- **It assumes flat, valid JSON.** Nested objects or a malformed file would break naive spreading; `JSON.parse` failing lands you in the fail-closed catch, which is the safe outcome but means that PR isn't auto-resolved.
- **Pushing to a contributor's branch needs the right permissions** and is why forks are excluded outright. Know your token's scope.
- **Scope creep is the real danger.** The instant someone asks "can it also resolve `pubspec.yaml`?" you're negotiating away the one guard that makes it safe. The narrowness *is* the feature. Defend it.
- **It is not a merge-conflict AI.** No model, no guessing. For this class, dumb-and-provable beats smart-and-probabilistic every time.

## Takeaway

The way to ship a dangerous automation safely isn't to make it clever — it's to make it *cowardly and loud*. Shrink its authority to a single case where the correct answer is mechanical and provable (`every() conflict matches one regex`), operate only in throwaway space, define your tie-breaker explicitly, announce every action, and fail closed on anything unexpected. The capability sounds reckless. The blast radius makes it boring. Boring is the goal.

Next: stepping out of git plumbing and into shipping — one button that builds and distributes for Android, iOS, and the Play Store.

## The complete workflow

Here is the full, genericized workflow — drop it into `.github/workflows/` and replace the placeholders (`your-org`, the `PROJ` project key, `<@DISCORD_USER_ID>`, the example team, and the secret names) with your own.

### `.github/workflows/auto-resolve-translation-conflicts.yml`

````yaml
name: Auto-resolve translation conflicts

on:
  push:
    branches: [master]
  workflow_dispatch:

permissions:
  contents: write
  pull-requests: write
  issues: write

jobs:
  auto-resolve-translations:
    runs-on: ubuntu-slim
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Configure git
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"

      - name: Auto-resolve translation-only conflicts
        uses: actions/github-script@v7
        with:
          script: |
            const { execSync } = require('child_process');
            const fs = require('fs');

            const owner = context.repo.owner;
            const repo = context.repo.repo;
            const TRANSLATION_PATH = /^assets\/translations\/.*\.json$/;

            const prs = await github.paginate(github.rest.pulls.list, {
              owner, repo, state: 'open', per_page: 100,
            });

            core.info(`Found ${prs.length} open PRs`);

            let resolved = 0;
            let skipped = 0;

            for (const pr of prs) {
              if (pr.draft) continue;

              if (pr.head.repo?.fork || pr.head.repo?.full_name !== `${owner}/${repo}`) {
                core.info(`Skipping PR #${pr.number} (fork)`);
                continue;
              }

              let freshPR;
              for (let attempt = 0; attempt < 5; attempt++) {
                const { data } = await github.rest.pulls.get({
                  owner, repo, pull_number: pr.number,
                });
                if (data.mergeable !== null) {
                  freshPR = data;
                  break;
                }
                await new Promise(r => setTimeout(r, 3000));
              }

              if (!freshPR || freshPR.mergeable !== false) continue;

              core.info(`\nPR #${pr.number} "${pr.title}" has conflicts`);

              const branch = pr.head.ref;

              try {
                execSync('git checkout master && git reset --hard origin/master', {
                  stdio: 'pipe',
                });
                execSync(`git fetch origin "${branch}"`, { stdio: 'pipe' });
                execSync(`git checkout -B _auto_resolve "origin/${branch}"`, {
                  stdio: 'pipe',
                });

                let hasConflicts = false;
                try {
                  execSync('git merge origin/master --no-edit', { stdio: 'pipe' });
                } catch {
                  hasConflicts = true;
                }

                if (!hasConflicts) {
                  core.info(`  PR #${pr.number} merged cleanly, no action needed`);
                  continue;
                }

                const conflictOutput = execSync('git diff --name-only --diff-filter=U')
                  .toString()
                  .trim();
                if (!conflictOutput) {
                  execSync('git merge --abort', { stdio: 'pipe' });
                  continue;
                }

                const conflictFiles = conflictOutput.split('\n');
                const allTranslation = conflictFiles.every(f => TRANSLATION_PATH.test(f));

                if (!allTranslation) {
                  const nonTranslation = conflictFiles
                    .filter(f => !TRANSLATION_PATH.test(f))
                    .join(', ');
                  core.info(
                    `  Skipping PR #${pr.number} — non-translation conflicts: ${nonTranslation}`,
                  );
                  execSync('git merge --abort', { stdio: 'pipe' });
                  skipped++;
                  continue;
                }

                core.info(`  Resolving: ${conflictFiles.join(', ')}`);

                for (const file of conflictFiles) {
                  const masterContent = execSync(`git show origin/master:"${file}"`).toString();
                  const branchContent = execSync(
                    `git show "origin/${branch}":"${file}"`,
                  ).toString();

                  const masterJSON = JSON.parse(masterContent);
                  const branchJSON = JSON.parse(branchContent);

                  const merged = { ...masterJSON, ...branchJSON };

                  fs.writeFileSync(file, JSON.stringify(merged, null, 2) + '\n');
                  execSync(`git add "${file}"`, { stdio: 'pipe' });
                }

                execSync('git commit --no-edit', { stdio: 'pipe' });
                execSync(`git push origin "_auto_resolve:${branch}"`, { stdio: 'pipe' });

                resolved++;
                core.info(`  Resolved PR #${pr.number}`);

                await github.rest.issues.createComment({
                  owner,
                  repo,
                  issue_number: pr.number,
                  body: [
                    '🤖 **Auto-resolved translation conflicts**',
                    '',
                    'Merged `master` and resolved conflicts in:',
                    ...conflictFiles.map(f => `- \`${f}\``),
                    '',
                    'PR branch values were preserved where both branches modified the same key.',
                    'Please review the merged translations.',
                  ].join('\n'),
                });

                try {
                  await github.rest.issues.removeLabel({
                    owner,
                    repo,
                    issue_number: pr.number,
                    name: 'conflict',
                  });
                } catch {}
              } catch (error) {
                core.warning(`Failed to resolve PR #${pr.number}: ${error.message}`);
                try {
                  execSync('git merge --abort', { stdio: 'pipe' });
                } catch {}
              }
            }

            core.info(`\nSummary: ${resolved} resolved, ${skipped} skipped`);
````
