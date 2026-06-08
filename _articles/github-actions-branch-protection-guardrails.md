---
title: "The repo that rejects my own pushes to master"
slug: github-actions-branch-protection-guardrails
date: 2026-04-14
readTime: 6 min read
tags: [GitHub Actions, DevOps, CI/CD, Flutter]
author: Abdelrahman Saed
description: "Two small GitHub Actions that stop accidental direct pushes to master and auto-restore build-breaking files — reversible by design, with an explicit escape hatch."
url: https://bnsaed.com/articles/github-actions-branch-protection-guardrails
---

# The repo that rejects my own pushes to master

*Subtitle: Branch protection rules are step one. Two small GitHub Actions turned "please don't do that" into "the repo won't let you."*

*The Self-Driving Repo · Part 1 — Governance*

![Guardrails — a neon shield protecting the master branch](https://github.com/user-attachments/assets/86e4a4ea-f3e6-42a9-9638-369a3865c03a)

---

Every team has the unwritten rule: **don't push straight to `master`.** And every team has the Tuesday afternoon where someone does it anyway — a fast hotfix, a muscle-memory `git push`, a rebase gone sideways — and now production history has a commit that never saw review.

You can write that rule in the README. You can put it in the onboarding doc. People will still break it, including the person who wrote it. (Hi.)

So I stopped relying on discipline and made the repo enforce itself. Two small workflows, under 200 lines combined. One guards the branch. One guards the files that quietly break everyone's build.

## The problem

Two recurring failures, both cheap individually and expensive in aggregate:

1. **Direct pushes to `master`.** Not malicious — just human. The cost isn't the one commit; it's the eroded guarantee. Once "`master` is always reviewed" stops being true, you can't trust it for releases, bisects, or rollbacks.

2. **The "innocent" file change that detonates a build.** Lockfiles (`pubspec.lock`, `Podfile.lock`), generated iOS symlinks, IDE settings, CI config. Someone commits their local `pubspec.lock` from a different Flutter version, and now CI fails for everyone until somebody figures out *why*. These files shouldn't change in a feature PR, but nothing stops them from doing so.

GitHub's built-in branch protection helps with (1), but it's coarse, it's UI-configured (not in the repo), and it doesn't address (2) at all. I wanted **guardrails as code** — versioned, reviewable, with an explicit escape hatch.

## The idea

Two push/PR-triggered workflows that don't *ask*, they *correct*:

- **`protect-master`** runs on every push to `master`. If the push isn't an allowed merge, it reverts it automatically.
- **`protect-files`** runs on PRs. If a protected path was touched, it restores that file from `master` and commits the restoration back to the PR branch.

Both share one principle: **reversible enforcement.** Nothing is blocked with a scary red X you have to beg an admin to override. The bad change is *undone*, in the open, with a commit you can read — and there's a documented way to say "yes, I really mean it."

## How it works

![Flow: a push to master checked against allowed-merge rules, then reverted if unauthorized](https://github.com/user-attachments/assets/f9ecc2a1-9997-4509-b8d1-be7162178a24)

### Guarding the branch

`protect-master` triggers on push and asks one question: *was this an allowed way to land on `master`?*

```yaml
on:
  push:
    branches: [master]
```

Allowed means one of three things: it's a PR merge, the actor is an allow-listed maintainer, or the commit explicitly opts out. The merge check is the interesting part — GitHub writes recognizable commit subjects for merges, squashes, and rebases, so a regex covers all three:

```bash
# A normal merge: "Merge pull request #123 from ..."
# A squash/rebase: subject ends with "(#123)"
if echo "$COMMIT_MSG" | grep -qE '^Merge pull request #|\(#[0-9]+\)$'; then
  echo "PR merge — allowed."
  exit 0
fi
```

If none of the allowances match, the workflow reverts the offending commit and pushes the revert:

```bash
git revert HEAD --no-edit
git push
```

I chose `git revert` over `git reset --hard` deliberately. A reset rewrites public history — the exact crime I'm trying to prevent. A revert is additive: the bad commit stays in the log, followed by a commit that undoes it. The audit trail is intact, nobody's local clone gets into a fight with the remote, and the message to the author is clear: *this landed the wrong way; here's the receipt.*

One subtlety worth knowing: `github.event.head_commit.message` only exists on push events. The whole workflow leans on that, which is fine — it's push-triggered by design — but it's the kind of thing that bites you if you copy the snippet into a PR-triggered job.

### Guarding the files

`protect-files` runs on PRs and watches a specific list of paths — lockfiles, generated native folders, IDE and CI config:

```yaml
on:
  pull_request:
    paths:
      - 'pubspec.lock'
      - 'ios/Podfile.lock'
      - 'ios/.symlinks/**'
      - '.vscode/settings.json'
      - '.github/workflows/protect-*.yml'
```

When one of those changes in a PR, the job restores the file from `master` and commits it back to the PR branch:

```bash
git fetch origin master
git checkout origin/master -- "$FILE" || true   # tolerate files absent on master
if ! git diff --cached --quiet; then
  git commit -m "chore: restore protected files from master"
  git push
fi
```

Two details make this safe to run on every PR. The `|| true` means a path that doesn't exist on `master` (a brand-new generated file) doesn't crash the job. And the `git diff --cached --quiet` guard means it only commits when something actually changed — no empty commits, no noise on the 95% of PRs that touch nothing protected.

### The escape hatch (this is the important part)

Automated enforcement without an override is a trap. Sometimes you *do* need to bump the lockfile. Sometimes the maintainer really is doing an intentional direct commit. So both workflows honor an opt-out token in the commit message:

```bash
if echo "$COMMIT_MSG" | grep -q -- '--skip-protection'; then
  echo "Opt-out flag present — skipping enforcement."
  exit 0
fi
```

Want to push a deliberate lockfile change? `git commit -m "chore: bump pods --skip-protection"`. The intent is explicit, it's in the history, and it's greppable later when you're auditing who bypassed what. The guardrail has a gate, and the gate has a name.

## What it bought us

- **`master` is trustworthy again.** Every commit on it is either a reviewed merge or an explicitly-flagged exception. Releases and rollbacks rest on that.
- **A class of "why is CI red?" mysteries disappeared.** Protected files can't drift in through a feature PR by accident.
- **Zero meetings about process.** The rule enforces itself, so I stopped being the person who pings people about their pushes. Around 5 fewer "hey can you revert that" messages a month.

## Gotchas & trade-offs

- **An auto-revert can surprise an author.** Mitigation: the revert commit message should say *why* and point to the PR flow. Surprise is a docs problem, not a reason to skip enforcement.
- **The allow-list is a single point of trust.** Keep it tiny and in code review. A long allow-list is just the original problem with extra steps.
- **`paths:` filters are easy to under-scope.** New generated artifacts appear over time; the protected list is a living thing, not set-and-forget.
- **This is not a security boundary.** A determined committer with push rights and the `--skip-protection` flag can still do anything. It's a guardrail against *accidents and drift*, not an access-control system. Branch protection rules and `CODEOWNERS` are the real perimeter; this is the seatbelt.

## Takeaway

The cheapest way to enforce a team norm isn't a doc or a nag — it's a small workflow that *reverses* the mistake and leaves a readable trail, with a named escape hatch for the times you mean it. Reversible beats blocking. Visible beats silent.

Next in the series: PRs that fill in their own context and refuse to merge when the analyzer is unhappy.
