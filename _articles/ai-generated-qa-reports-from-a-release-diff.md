---
title: "The release writes its own QA test plan now"
slug: ai-generated-qa-reports-from-a-release-diff
date: 2026-05-26
readTime: 8 min read
tags: [AI in Development, CI/CD, Flutter, QA]
author: Abdelrahman Saed
description: "An AI step that reads a release diff, maps changes to features, classifies risk, and writes a tester-ready checklist — and why context engineering, not the prompt, is the real work."
url: https://bnsaed.com/articles/ai-generated-qa-reports-from-a-release-diff
---

# The release writes its own QA test plan now

*Subtitle: When a release is cut, an AI step reads the diff, maps changes to features, classifies risk, and writes a QA plan a tester can actually follow. Here's the engineering that makes it reliable, not a gimmick.*

*The Self-Driving Repo · Part 7 — AI in the Pipeline (flagship)*

![A release diff feeding an AI lens and emerging as a QA checklist](https://github.com/user-attachments/assets/b87eb64e-5275-4f2e-a554-ac2e2d06f2a6)

---

"What do we test for this release?"

That question, asked before every release, used to kick off an hour of archaeology. Someone scrolled the commit log, tried to remember what each change touched, guessed at the risky bits, and wrote a test plan from memory. The plan's quality depended entirely on how much that person happened to know about every corner of the app. Miss a subtle change in a shared module and it ships untested.

It's a perfect task to hand to a machine — *if* you can make the machine reliable. The change set is right there in git. The risk patterns are knowable. What's missing is the reading-and-reasoning, and that's now something an LLM can do well over a bounded, well-prepared input.

So the release pipeline now writes its own QA report. When a release is published, an AI agent reads the diff, maps every change to a feature area, classifies risk, and emits a tester-ready Markdown checklist — then converts it to PDF and posts it to the team. This post is about the engineering around the AI that makes it trustworthy, because the AI call is the easy 10%. The other 90% is preparation and guardrails.

## The problem

Manual release QA planning had three failure modes:

1. **It's knowledge-bound.** The plan is only as good as one person's mental model of the whole codebase. Nobody holds all of it.
2. **It's slow and reactive.** An hour of log-reading per release, done under time pressure, right when everyone wants to ship.
3. **It's inconsistent.** Different authors write different plans. No standard structure, no reliable risk lens, no guarantee the riskiest change got the most attention.

## The idea

Trigger on release publish. Compute a precise, *bounded* diff between this release tag and the previous one. Hand that to an agentic AI step with a strict template and project context. Get back a structured report. Distribute it everywhere the team already looks.

```yaml
on:
  release:
    types: [published]
  workflow_dispatch:
    inputs:
      tag: { description: 'Release tag (semver). Empty = latest.' }
```

The critical insight: **an LLM is only as good as the context you hand it, and the bounds you put around it.** Most of the workflow is not the AI call. It's the diff preparation that makes the AI call reliable.

## How it works

![Pipeline: resolve tags, prepare a bounded diff through a filter funnel, run the AI agent, verify, then PDF and distribute](https://github.com/user-attachments/assets/fb333893-882e-4348-8ae5-bf0a251395e7)

### Step 1: resolve exactly what shipped

You can't diff a release without knowing its predecessor. Resolve the current tag (from the release event, an input, or the latest), validate it's real semver, then find the previous tag by version-sorted order:

```bash
PREVIOUS=$(git tag --sort=-version:refname \
  | grep -E '^[0-9]+\.[0-9]+\.[0-9]+$' \
  | grep -xF "$CURRENT" -A1 | tail -1)
```

Defensive throughout — validate the format, confirm both tags exist, fail loudly if this looks like the first release. Garbage tag resolution means garbage diff means garbage report.

### Step 2: prepare a *bounded* diff (this is the real work)

A naive `git diff` between two releases can be tens of thousands of lines. Feed that raw to a model and you blow the context window, bury the signal, and pay for noise. So the diff is curated:

**Filter out the noise.** Generated files carry no QA signal — exclude them:

```bash
git diff --name-only "$PREVIOUS".."$CURRENT" -- 'lib/core/' 'lib/features/' \
  | grep -v '\.g\.dart$' | grep -v '\.freezed\.dart$' | grep -v '\.drift\.dart$'
```

**Cap the volume, deliberately and visibly.** Limit to the first N changed files, truncate any single diff to a few hundred lines, and cap the total context — but *announce* every truncation in the output so neither the model nor a human mistakes a clipped diff for the whole story:

```bash
if [ "$TOTAL" -gt 50 ]; then
  echo "> Note: showing 50 of $TOTAL changed files. Remaining omitted." >> "$CONTEXT"
fi
```

**Structure it.** The prepared context isn't a raw dump — it's sections: diff stats, the changed-file list, the commit log, dependency changes from the lockfile, then the actual code diffs grouped by file, then native platform changes. The model gets a *briefing*, not a haystack. This step is the difference between a useful report and a hallucinated one.

### Step 3: the AI step, on a leash

Only now does the AI run — an agentic assistant action (a GitHub Action that runs an LLM with file read/write tools) pointed at two inputs: the prepared diff and a **template document** that lives in the repo.

```yaml
- uses: <agentic-llm-action>
  with:
    prompt: |
      Read /tmp/diff_context.md and docs/release_report/TEMPLATE.md.
      Map each changed file to its feature module. Classify risk per the template.
      Test cases must be SPECIFIC to the actual code change — read the diffs.
      For fix: commits, test the original bug AND related edge cases.
      Write the report to docs/releases/<tag>_qa_report.md.
```

Three deliberate constraints keep it grounded:

- **A template, not a vibe.** `TEMPLATE.md` defines the report structure, the risk classification rules, and the feature-module mapping. The model fills a defined shape; it doesn't invent one. This is what makes the output *consistent across releases* — the reliability the manual process never had.
- **Specificity is demanded.** "Read the diffs, not just the file names." Test cases must trace to actual code changes. A generic "test the login flow" is a failure; "verify the new seek-bar offset on the audio player after the change to `player_controller.dart`" is the bar.
- **Bounded autonomy.** The agent is capped on turns and runs with `continue-on-error`, so an AI hiccup degrades gracefully instead of failing the release. A verification step right after checks the report actually exists and is non-empty — the AI is *allowed* to fail, the pipeline is not.

### Step 4: verify, convert, distribute

The pipeline doesn't trust the AI blindly. It checks the file was written and has content, and warns loudly if not:

```bash
if [ ! -s "$REPORT" ]; then echo "::error::Report not generated"; exit 1; fi
```

Then it converts the Markdown to PDF (nicer to read and share), attaches both to the GitHub Release, uploads them as build artifacts, and posts the report to team chat with the version range. The QA plan is waiting for testers before anyone thought to ask for it — in the format they want, where they already are.

## What it bought us

- **A QA plan on every release, in minutes, with zero human prompting.** It's ready before the "what do we test?" question gets asked.
- **Coverage that isn't knowledge-bound.** The agent reads *every* changed file in the bounded set — it doesn't forget the subtle change in a shared module the way a tired human does.
- **Consistency.** Same structure, same risk lens, every release, because the template enforces it.
- **Risk made explicit.** Changes are classified and the riskiest get the most test detail — around 45 minutes of pre-release archaeology eliminated per release.

## Gotchas & trade-offs

- **Context engineering is the actual product.** The AI call is a few lines; the diff filtering, capping, and structuring are the reason it works. Skimp there and you get confident nonsense.
- **It assists QA; it doesn't replace it.** The report is a *starting point* a human tester reviews and extends — especially for cross-cutting behavior no diff reveals. Sold as a replacement, it would be dangerous.
- **Truncation can hide things.** Caps are necessary, but a giant release can clip real changes. That's why every cap is announced in the output — silent truncation would be the worst outcome.
- **Generated-file exclusion is a judgment call.** It removes noise, but if your codegen output is the only place a behavior change is visible, you'd miss it. Know what you're filtering.
- **Don't fail the release on an AI wobble.** `continue-on-error` plus a hard verification step is the right shape: the report is best-effort, the release is not hostage to it.
- **Determinism isn't guaranteed.** Two runs can word things differently. For a *checklist* that's fine; don't build anything that needs byte-identical output on top of it.

## Takeaway

Putting an LLM in a pipeline isn't about the prompt — it's about everything *around* the prompt. Resolve precise inputs, curate and bound the context, constrain the model with a versioned template, demand specificity, cap its autonomy, and verify its output before you trust it. Do that and an AI step becomes a reliable colleague that reads every diff so your testers can focus on judgment. Skip it and you've automated hallucination.

Next: the repo cleans up after itself — classifying and deleting stale branches without ever touching the ones that matter.
