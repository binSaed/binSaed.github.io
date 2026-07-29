---
title: "From Four-Week Releases to Weekly — Trunk-based development, a self-driving CI/CD pipeline, and feature flags — cutting the release cycle 75% without lowering the crash-free bar."
slug: release-engineering
date: 2026-06-29
readTime: 7 min read
tags: [Flutter, CI/CD, Release Engineering, GitHub Actions, Feature Flags]
author: Abdelrahman Saed
url: https://bnsaed.com/case-studies/release-engineering
---

# From Four-Week Releases to Weekly — Case Study

Trunk-based development, a self-driving CI/CD pipeline, and feature flags — cutting the release cycle 75% without lowering the crash-free bar.

**Role:** Lead Mobile Engineer · **Timeline:** 2022 — Present · **Platforms:** iOS, Android

Flutter release engineering at iStoria: a four-week release cycle cut to one across 350+ releases — trunk-based development, CI/CD automation, feature flags.

## Key metrics

- **75%** — Shorter release cycle
- **350+** — Production releases
- **900+** — PRs reviewed
- **99.9%** — Crash-free rate
- **14** — CI/CD workflows
- **3** — Build flavors

## The Problem

When I joined iStoria the mobile release cycle was **four weeks** long. A growing catalog and an ambitious roadmap needed features in front of learners far faster than that — but the audience is paying and education-focused, so speed could not come at the cost of stability. The 99.9% crash-free bar was non-negotiable.

The usual trap is to treat that as a trade-off: ship fast *or* stay stable. The job was to make them hold *together* — take the cycle from four weeks to one while a small team kept merging into a busy trunk, and keep the crash-free rate exactly where it was.

## Constraints

- **Stability can't drop.** Every acceleration had to preserve the 99.9% crash-free rate — no "move fast and break the paywall."
- **Small team, busy trunk.** A handful of engineers merging constantly means PRs drift out of date, translation files collide, and merge conflicts pile up faster than people can babysit them.
- **Two stores, three environments.** iOS and Android, plus local / staging / production builds — all from one codebase, with no hand-rolled build steps.
- **Manual chores don't scale.** Enforcing branch hygiene, rebasing PRs, chasing stale branches, and compiling release and QA reports by hand is exactly the work that gets skipped under deadline pressure and bites you at the worst time.

## The Solution

Three moves turned a four-week cycle into a weekly one.

- **Trunk-based development.** Short-lived branches merge into a protected `master` continuously, so integration happens in small, safe increments instead of a big, scary merge every month.
- **Feature flags (GrowthBook) that decouple *deploy* from *release*.** Unfinished work ships dark behind a flag and ramps when it's ready — so a slow feature never blocks the train, and anything misbehaving is killed instantly without an app-store round-trip.
- **Three build flavors** (local / staging / production) from one codebase, so the same pipeline ships to internal testers and to the stores without divergent build logic.

The multiplier on top of all three is automation: I turned the repository itself into something that maintains its own hygiene.

## Architecture

### A self-driving pipeline

The path from a pull request to the store is a series of gates and builds, and a suite of **14 GitHub Actions workflows** keeps that path green so people don't have to.

- **Guardrails** — `master` is branch-protected (it rejects direct pushes, including mine), sensitive files are protected from casual edits, and every PR runs Dart static analysis as a merge gate.
- **PR hygiene, automated** — bots keep open PRs rebased on `master`, sweep for merge conflicts and flag the PRs that need attention, auto-resolve the translation-file conflicts a multi-language app generates constantly, and clean up stale branches on a schedule.
- **Delivery** — CI builds the iOS and Android release artifacts, uploads to the store track, and generates a release and QA report; a workflow even keeps team throughput stats current.

I wrote about the guardrail half of this at length in the **[Self-Driving Repo](/articles/github-actions-branch-protection-guardrails)** series — the point is that at scale, the repository's own hygiene *is* part of the release architecture, not a chore you do around it.

## Performance

- **Release cycle cut 75%** — from four weeks to one.
- **350+ production releases** shipped and **900+ PRs** reviewed over the period.
- **99.9% crash-free** held the entire time — velocity went up, stability did not come down.
- Feature flags meant risky changes shipped **dark and ramped safely**, so a bad experiment was a flag flip away from off, not a hotfix release away.

## Results

- A small squad shipping **weekly** into a 50+ module app at a **99.9% crash-free** rate.
- An entire category of manual release work — rebasing, conflict-chasing, branch cleanup, QA reporting — taken **off people's plates** and done more reliably by CI than by hand.
- Deploy decoupled from release: the team ships continuously and *chooses* when learners see something, instead of the store review being the release event.

## Lessons Learned

- **Automate the repository itself.** The highest-leverage CI work wasn't building the app — it was the small, sharp jobs that keep the trunk mergeable so a busy team never drowns in hygiene.
- **Feature flags are what make trunk-based safe.** Being able to merge unfinished work dark, ramp it, and kill it instantly is what lets you integrate continuously without shipping half-done features.
- **Guardrails beat discipline.** A machine that rejects a push to `master` enforces the rule every time; a wiki page asking people not to does not.
- **Cadence compounds.** Cutting four weeks to one didn't just ship features sooner — it shrank every change, tightened the feedback loop, and changed how the team plans.

---

By Abdelrahman Saed — <https://bnsaed.com/>. All case studies: <https://bnsaed.com/case-studies/>
