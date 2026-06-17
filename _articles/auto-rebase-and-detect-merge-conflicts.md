---
title: "Every merge to master quietly breaks other PRs. So I built a radar for it."
slug: auto-rebase-and-detect-merge-conflicts
date: 2026-05-05
readTime: 6 min read
tags: [GitHub Actions, Git, CI/CD, DevOps]
author: Abdelrahman Saed
description: "A two-workflow radar that refreshes every open PR on each merge to master, treats mergeability as eventually consistent, and routes conflict alerts to the right person."
url: https://bnsaed.com/articles/auto-rebase-and-detect-merge-conflicts
---

# Every merge to master quietly breaks other PRs. So I built a radar for it.

*Subtitle: A merge to master is a tiny earthquake that nobody feels until later. Two workflows detect the damage immediately — and tell the right people.*

*The Self-Driving Repo · Part 4 — Conflict Management*

![A radar sweep over branch lines with conflicts pulsing red](/article-images/auto-rebase-and-detect-merge-conflicts-hero.webp)

---

Here's a failure mode so normal you've stopped noticing it: you merge a PR to `master`, and in that instant some number of *other* open PRs become un-mergeable. They were fine a second ago. Now they conflict. But nobody knows yet — the authors are working on something else, and they'll find out hours or days later when they try to merge and GitHub says no.

Multiply that by a busy `master` and a dozen open PRs and you get a slow, invisible tax: branches drifting out of sync, conflicts discovered at the worst possible moment (merge time), and a steady drip of "can you rebase?" comments.

I wanted the opposite: the *moment* `master` moves, every open PR gets refreshed against it, and anything that conflicts gets flagged and announced — immediately, while the change is still fresh in everyone's head.

## The problem

Three things were going wrong, all downstream of the same root cause (master moves, PRs don't):

1. **Stale branches.** PRs fall behind `master` and their CI results stop meaning anything — they passed against an old base.
2. **Late conflict discovery.** Authors learn about conflicts when they try to merge, which is the most disruptive possible time.
3. **Notification fatigue.** GitHub *can* tell you a PR is conflicted, but it's buried in a UI nobody watches. The signal never reaches the person who needs it.

## The idea

Two workflows working as a pair:

- **The sweep** — triggered on every push to `master`. Walk every open PR, update its branch against the new `master`, then check whether it now conflicts and label it accordingly.
- **The broadcast** — takes the conflicted PRs and posts a digest to team chat, grouped by author, so each person sees exactly their PRs that need attention.

Detection and notification are deliberately separate. The sweep maintains accurate *state* (labels on PRs). The broadcast turns that state into a *message*. Splitting them means I can re-run or reschedule the announcement without re-running the (heavier) sweep.

## How it works

![Flow: a push to master looping over PRs, polling mergeable state, labeling conflicts, then a grouped chat digest](/article-images/auto-rebase-and-detect-merge-conflicts-diagram.webp)

### Refresh everything on every merge

The sweep triggers on push to `master` and pages through all open PRs against it:

```yaml
on:
  push:
    branches: [master]
```

```js
const prs = await github.paginate(github.rest.pulls.list, {
  owner, repo, state: 'open', base: 'master', per_page: 100,
});
```

For each one, it asks GitHub to update the branch (the same "Update branch" button you click by hand, as an API call), skipping forks where you don't have permission:

```js
if (!(pr.head?.repo?.fork && !pr.maintainer_can_modify)) {
  try {
    await github.rest.pulls.updateBranch({ owner, repo, pull_number: pr.number });
  } catch (e) {
    if (e.status === 422) { /* conflict or already up to date — skip */ }
    else if (e.status === 403) { /* no permission — skip */ }
  }
}
```

The `422` handling is the bit you only learn by getting burned: `updateBranch` throws 422 both when the branch can't be fast-forwarded (a real conflict) *and* in benign "nothing to do" cases. You don't treat it as failure — you treat it as "move on and let the mergeability check below tell the truth."

### Wait for GitHub to make up its mind

Here's the trap that makes naive versions of this flaky. When you ask GitHub whether a PR is mergeable, the answer is often `null` — "I haven't computed that yet, check back." Read it too early and you'll mislabel a perfectly clean PR as conflicted.

So you poll, with backoff, until the state settles:

```js
let pr = await github.rest.pulls.get({ owner, repo, pull_number });
for (let i = 0; i < 5 && pr.data.mergeable === null; i++) {
  await new Promise(r => setTimeout(r, 2000));   // let GitHub compute
  pr = await github.rest.pulls.get({ owner, repo, pull_number });
}
const hasConflicts =
  pr.data.mergeable === false || pr.data.mergeable_state === 'dirty';
```

Treating `mergeable` as **eventually consistent** rather than a synchronous value is the single most important thing in this workflow. Everything else is bookkeeping.

Then the label is reconciled — added if conflicting, removed if not — so the `conflict` label always reflects the live state:

```js
if (hasConflicts && !hasLabel)      await addLabel('conflict');
else if (!hasConflicts && hasLabel) await removeLabel('conflict');
```

### Turn state into a message people see

The broadcast workflow reads the `conflict`-labeled PRs and builds an author → PRs map, then posts one grouped digest to team chat:

```js
const map = {};                       // author -> [pr urls]
for (const pr of conflictedPRs) {
  (map[pr.user.login] ??= []).push(pr.html_url);
}
```

Each GitHub author is translated to their chat handle so the message actually pings the right human, and a clean run gets a cheerful "no conflicts 🎉" instead of awkward silence. It also runs on a daily schedule, not just on demand — so even conflicts that appear through other paths get a regular nudge.

The reason this lands where GitHub's own notifications don't: it's **push-based, grouped, and routed.** It arrives in the tool the team already lives in, addressed to the person who can fix it, listing exactly their PRs. No dashboard to remember to check.

## What it bought us

- **Conflicts surface in seconds, not days** — right after the merge that caused them, while context is fresh.
- **PR branches stay current**, so green CI actually means "green against today's `master`."
- **The right person gets pinged**, in chat, with their specific PRs — around 10 fewer manual "please rebase" comments a week.
- **Less merge-time drama.** By the time you go to merge, you already knew (and probably already fixed) the conflict.

## Gotchas & trade-offs

- **Auto-updating branches re-triggers CI.** Refresh 20 PRs and you just queued 20 CI runs. Usually worth it (fresh results), but mind your runner minutes — you may want to scope which PRs get swept.
- **Forks need permission.** `updateBranch` only works where "maintainers can edit" is on; the workflow skips the rest rather than erroring. Know that some PRs won't be auto-refreshed.
- **`422` is overloaded.** It means both "real conflict" and "nothing to update." Don't treat it as a failure signal — let the mergeability poll be your source of truth.
- **Chat handle mapping is manual.** A GitHub-login → chat-ID table has to be maintained as people join and leave. It's the kind of small debt that silently breaks pings.
- **Don't over-notify.** A conflict digest every hour becomes wallpaper. Daily + on-merge was the right dose; tune it to your team's tolerance.

## Takeaway

A merge to `master` has a blast radius, and the cheapest time to deal with that radius is *immediately*. Refresh every PR on every merge, treat mergeability as eventually consistent (poll it, don't trust the first read), and route the result to a human in the tool they already watch. Detect fast; notify where people actually look.

Next: the flagship. What if, for one common class of conflict, the repo didn't just *detect* it — it *fixed* it and pushed the resolution for you?

## The complete workflow

Here is the full, genericized workflow — drop it into `.github/workflows/` and replace the placeholders (`your-org`, the `PROJ` project key, `<@DISCORD_USER_ID>`, the example team, and the secret names) with your own.

### `.github/workflows/update_all_prs_and_sweep.yml`

````yaml
name: Update PR branches and sweep conflict on master push
on:
  push:
    branches: [master]

permissions:
  contents: write
  pull-requests: write
  issues: write

jobs:
  update-all-prs-and-sweep:
    runs-on: ubuntu-slim
    steps:
      - uses: actions/github-script@v7
        with:
          script: |
            const owner = context.repo.owner;
            const repo = context.repo.repo;
            const base = context.ref.replace('refs/heads/', '');
            const labelName = 'conflict';

            // Ensure conflict label exists
            try { await github.rest.issues.getLabel({ owner, repo, name: labelName }); }
            catch (e) { if (e.status === 404) await github.rest.issues.createLabel({ owner, repo, name: labelName, color: 'd73a4a' }); else throw e; }

            const prs = await github.paginate(github.rest.pulls.list, { owner, repo, state: 'open', base, per_page: 100 });

            for (const p of prs) {
              // Step 1: Try to update PR branch with latest master
              if (!(p.head?.repo?.fork && !p.maintainer_can_modify)) {
                try {
                  await github.rest.pulls.updateBranch({ owner, repo, pull_number: p.number });
                  console.log(`Updated PR #${p.number}`);
                } catch (e) {
                  const status = e.status || e.response?.status;
                  if (status === 422) {
                    console.log(`Skipped updating PR #${p.number} due to conflicts or not behind`);
                  } else if (status === 403) {
                    console.log(`Skipped updating PR #${p.number} due to permissions`);
                  } else {
                    console.log(`Error updating PR #${p.number}: ${e.message}`);
                  }
                }
              } else {
                console.log(`Skipped PR #${p.number} from fork because maintainer edits are not allowed`);
              }

              // Step 2: Check for conflicts and manage label
              let pr = await github.rest.pulls.get({ owner, repo, pull_number: p.number });
              // If mergeable is null/unknown, wait briefly and retry
              for (let i = 0; i < 5 && (pr.data.mergeable === null || (pr.data.mergeable_state||'').toLowerCase() === 'unknown'); i++) {
                await new Promise(r => setTimeout(r, 2000));
                pr = await github.rest.pulls.get({ owner, repo, pull_number: p.number });
              }
              const hasConflicts = (pr.data.mergeable === false) || ((pr.data.mergeable_state||'').toLowerCase() === 'dirty');

              const { data: labels } = await github.rest.issues.listLabelsOnIssue({ owner, repo, issue_number: p.number, per_page: 100 });
              const hasLabel = labels.some(l => l.name.toLowerCase() === labelName);

              if (hasConflicts && !hasLabel) {
                await github.rest.issues.addLabels({ owner, repo, issue_number: p.number, labels: [labelName] });
                console.log(`Added conflict label to PR #${p.number}`);
              } else if (!hasConflicts && hasLabel) {
                await github.rest.issues.removeLabel({ owner, repo, issue_number: p.number, name: labelName });
                console.log(`Removed conflict label from PR #${p.number}`);
              }
            }
````

### `.github/workflows/conflict-notify.yml`

````yaml
name: List open PR authors (conflict label → map, URLs only)
on:
  workflow_dispatch:
    inputs:
      label:
        description: 'Label to filter PRs by'
        required: false
        default: 'conflict'
  schedule:
    - cron: '0 0 * * *' # daily at midnight UTC (optional)

permissions:
  contents: read
  pull-requests: read

jobs:
  list-authors:
    runs-on: ubuntu-slim
    steps:
      - name: List open PRs with label and build author→PR-URL map
        id: list_prs
        uses: actions/github-script@v6
        with:
          script: |
            const fs = require('fs');

            const owner = context.repo.owner;
            const repo = context.repo.repo;
            const targetLabel = core.getInput('label') || 'conflict';
            core.info(`Listing open PRs for ${owner}/${repo} and filtering by label "${targetLabel}"`);

            // Fetch all open PRs (handles pagination)
            const pulls = await github.paginate(github.rest.pulls.list, {
              owner,
              repo,
              state: 'open',
              per_page: 100,
            });

            core.info(`Found ${pulls.length} open PR(s)`);

            // Filter PRs that contain the target label (case-insensitive)
            const filtered = pulls.filter(p => {
              const labels = p.labels || [];
              return labels.some(l => String(l.name).toLowerCase() === String(targetLabel).toLowerCase());
            });

            core.info(`Found ${filtered.length} open PR(s) with label "${targetLabel}"`);

            // Build mapping: author -> [ "https://github.com/owner/repo/pull/NNN", ... ]
            const map = {};
            for (const p of filtered) {
              const author = p.user?.login || 'unknown';
              if (!map[author]) map[author] = [];

              const httpsUrl = p.html_url;
              // Add only the full https URL, avoid alternate @owner/repo style
              if (!map[author].includes(httpsUrl)) map[author].push(httpsUrl);
            }

            core.setOutput('mapping', JSON.stringify(map));
            core.setOutput('filtered_pr_count', String(filtered.length));
            core.setOutput('authors', JSON.stringify(Object.keys(map)));

      - name: Print mapping to job log
        run: |
          echo "Mapping (author -> [PR URLs]):"
          echo '${{ steps.list_prs.outputs.mapping }}'

      - name: Format Discord message
        id: format_message
        uses: actions/github-script@v6
        with:
          script: |
            const mapping = JSON.parse('${{ steps.list_prs.outputs.mapping }}');
            const prCount = parseInt('${{ steps.list_prs.outputs.filtered_pr_count }}');
            
            // GitHub username to Discord user ID mapping
            const discordMapping = {
              'jpark': '<@DISCORD_USER_ID>',
              'ckim': '<@DISCORD_USER_ID>',
              'your-maintainer': '<@DISCORD_USER_ID>',
              'rdiaz': '<@DISCORD_USER_ID>',
              'schen': '<@DISCORD_USER_ID>'
            };
            
            if (prCount === 0) {
              core.setOutput('message', 'No open PRs with conflicts found! 🎉');
              return;
            }
            
            let message = '⚠️ **Please solve conflicts**\n\n';
            
            for (const [author, urls] of Object.entries(mapping)) {
              const discordMention = discordMapping[author] || author;
              message += `**${discordMention}**\n`;
              for (const url of urls) {
                message += `${url}\n`;
              }
              message += '\n';
            }
            
            message += '----------------------------------';
            
            core.setOutput('message', message.trim());

      - name: Discord Webhook Action
        uses: tsickert/discord-webhook@v6.0.0
        with:
          webhook-url: ${{ secrets.DISCORD_WEBHOOK_URL }}
          content: ${{ steps.format_message.outputs.message }}
````
