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

![A release diff feeding an AI lens and emerging as a QA checklist](/article-images/ai-generated-qa-reports-from-a-release-diff-hero.png)

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

![Pipeline: resolve tags, prepare a bounded diff through a filter funnel, run the AI agent, verify, then PDF and distribute](/article-images/ai-generated-qa-reports-from-a-release-diff-diagram.png)

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

## The complete workflow

Here is the full, genericized workflow — drop it into `.github/workflows/` and replace the placeholders (`your-org`, the `PROJ` project key, `<@DISCORD_USER_ID>`, the example team, and the secret names) with your own.

### `.github/workflows/release-qa-report.yml`

````yaml
name: Release QA Report

on:
  release:
    types: [published]
  workflow_dispatch:
    inputs:
      tag:
        description: 'Release tag (e.g. 5.2.5). Must be semver without prefix. Leave empty to use latest.'
        required: false
        type: string

concurrency:
  group: release-qa-report
  cancel-in-progress: false

permissions:
  contents: write
  pull-requests: read
  issues: read

jobs:
  generate-report:
    runs-on: ubuntu-latest
    timeout-minutes: 30
    steps:
      - name: Checkout full history
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Resolve release tags
        id: tags
        shell: bash
        run: |
          if [ "$EVENT_NAME" = "release" ]; then
            CURRENT="$RELEASE_TAG"
          elif [ -n "$INPUT_TAG" ]; then
            if ! echo "$INPUT_TAG" | grep -qE '^[0-9]+\.[0-9]+\.[0-9]+$'; then
              echo "::error::Invalid tag format '$INPUT_TAG'. Expected semver (e.g. 5.2.5)"
              exit 1
            fi
            CURRENT="$INPUT_TAG"
          else
            CURRENT=$(gh release list --limit 1 --json tagName -q '.[0].tagName')
          fi

          git rev-parse "$CURRENT" > /dev/null 2>&1 || { echo "::error::Tag $CURRENT not found in repo"; exit 1; }

          PREVIOUS=$(git tag --sort=-version:refname | grep -E '^[0-9]+\.[0-9]+\.[0-9]+$' | grep -xF "$CURRENT" -A1 | tail -1)

          if [ -z "$PREVIOUS" ] || [ "$PREVIOUS" = "$CURRENT" ]; then
            echo "::error::No previous tag found before $CURRENT (is this the first release?)"
            exit 1
          fi

          git rev-parse "$PREVIOUS" > /dev/null 2>&1 || { echo "::error::Tag $PREVIOUS not found in repo"; exit 1; }

          echo "current=$CURRENT" >> "$GITHUB_OUTPUT"
          echo "previous=$PREVIOUS" >> "$GITHUB_OUTPUT"
          echo "Resolved: $PREVIOUS -> $CURRENT"
        env:
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          EVENT_NAME: ${{ github.event_name }}
          RELEASE_TAG: ${{ github.event.release.tag_name }}
          INPUT_TAG: ${{ inputs.tag }}

      - name: Collect diff data
        id: diff
        shell: bash
        run: |
          CURRENT="$TAG_CURRENT"
          PREVIOUS="$TAG_PREVIOUS"

          echo "## Diff Stats" > /tmp/diff_context.md
          echo '```' >> /tmp/diff_context.md
          git diff --stat "$PREVIOUS".."$CURRENT" >> /tmp/diff_context.md
          echo '```' >> /tmp/diff_context.md

          echo "" >> /tmp/diff_context.md
          echo "## Changed Files" >> /tmp/diff_context.md
          echo '```' >> /tmp/diff_context.md
          git diff --name-only "$PREVIOUS".."$CURRENT" >> /tmp/diff_context.md
          echo '```' >> /tmp/diff_context.md

          echo "" >> /tmp/diff_context.md
          echo "## Commit Log" >> /tmp/diff_context.md
          echo '```' >> /tmp/diff_context.md
          git log --oneline "$PREVIOUS".."$CURRENT" >> /tmp/diff_context.md
          echo '```' >> /tmp/diff_context.md

          echo "" >> /tmp/diff_context.md
          echo "## Dependency Changes (pubspec.yaml)" >> /tmp/diff_context.md
          echo '```diff' >> /tmp/diff_context.md
          git diff "$PREVIOUS".."$CURRENT" -- pubspec.yaml >> /tmp/diff_context.md 2>/dev/null || echo "No pubspec.yaml changes"
          echo '```' >> /tmp/diff_context.md

          echo "" >> /tmp/diff_context.md
          echo "## Key Code Diffs" >> /tmp/diff_context.md

          ALL_FILES=$(git diff --name-only "$PREVIOUS".."$CURRENT" -- 'lib/core/' 'lib/features/' \
            | grep -v '\.g\.dart$' | grep -v '\.freezed\.dart$' | grep -v '\.drift\.dart$')

          if [ -z "$ALL_FILES" ]; then
            echo "" >> /tmp/diff_context.md
            echo "> No lib/core or lib/features changes in this release." >> /tmp/diff_context.md
          else
            TOTAL=$(echo "$ALL_FILES" | grep -c . || true)
            if [ "$TOTAL" -gt 50 ]; then
              echo "" >> /tmp/diff_context.md
              echo "> **Note:** Showing 50 of $TOTAL changed files. Remaining files omitted." >> /tmp/diff_context.md
            fi

            echo "$ALL_FILES" | sed -n '1,50p' | while IFS= read -r f; do
              echo "" >> /tmp/diff_context.md
              echo "### $f" >> /tmp/diff_context.md
              echo '```diff' >> /tmp/diff_context.md
              DIFF=$(git diff "$PREVIOUS".."$CURRENT" -- "$f")
              LINES=$(echo "$DIFF" | wc -l)
              echo "$DIFF" | sed -n '1,500p' >> /tmp/diff_context.md
              if [ "$LINES" -gt 500 ]; then
                echo "" >> /tmp/diff_context.md
                echo "*... truncated ($LINES total lines)*" >> /tmp/diff_context.md
              fi
              echo '```' >> /tmp/diff_context.md
            done
          fi

          echo "" >> /tmp/diff_context.md
          echo "## Platform Code Diffs" >> /tmp/diff_context.md

          PLATFORM_FILES=$(git diff --name-only "$PREVIOUS".."$CURRENT" -- 'ios/' 'android/' \
            | grep -v 'Podfile\.lock$' | grep -v 'GeneratedPluginRegistrant' \
            | grep -v '\.symlinks/' | grep -v 'pubspec\.lock$' | sed -n '1,20p')

          if [ -z "$PLATFORM_FILES" ]; then
            echo "" >> /tmp/diff_context.md
            echo "> No native platform code changes in this release." >> /tmp/diff_context.md
          else
            echo "$PLATFORM_FILES" | while IFS= read -r f; do
              echo "" >> /tmp/diff_context.md
              echo "### $f" >> /tmp/diff_context.md
              echo '```diff' >> /tmp/diff_context.md
              git diff "$PREVIOUS".."$CURRENT" -- "$f" | sed -n '1,300p' >> /tmp/diff_context.md
              echo '```' >> /tmp/diff_context.md
            done
          fi

          CONTEXT_LINES=$(wc -l < /tmp/diff_context.md)
          if [ "$CONTEXT_LINES" -gt 15000 ]; then
            head -15000 /tmp/diff_context.md > /tmp/diff_context_trimmed.md
            echo "" >> /tmp/diff_context_trimmed.md
            echo "> **Warning:** Diff context truncated at 15,000 lines (original: $CONTEXT_LINES lines)." >> /tmp/diff_context_trimmed.md
            mv /tmp/diff_context_trimmed.md /tmp/diff_context.md
          fi

          echo "diff_file=/tmp/diff_context.md" >> "$GITHUB_OUTPUT"
        env:
          TAG_CURRENT: ${{ steps.tags.outputs.current }}
          TAG_PREVIOUS: ${{ steps.tags.outputs.previous }}

      - name: Configure Claude Code permissions
        shell: bash
        run: |
          mkdir -p .claude
          cat > .claude/settings.local.json <<'SETTINGS_EOF'
          {
            "permissions": {
              "allow": [
                "Bash(*)", "Read(*)", "Write(*)", "Edit(*)",
                "Glob(*)", "Grep(*)", "WebFetch(*)", "Task(*)", "ToolSearch(*)"
              ]
            },
            "hooks": {}
          }
          SETTINGS_EOF

          if [ -f .claude/settings.json ]; then
            cp .claude/settings.json .claude/settings.json.bak
            jq '.hooks = {}' .claude/settings.json > .claude/settings.json.tmp && mv .claude/settings.json.tmp .claude/settings.json
          fi

      - name: Ensure output directory
        run: mkdir -p docs/releases

      - name: Generate QA report with Claude
        id: claude
        continue-on-error: true
        uses: anthropics/claude-code-action@v1
        env:
          ANTHROPIC_BASE_URL: https://api.your-llm-provider.com
        with:
          anthropic_api_key: ${{ secrets.LLM_API_KEY }}
          github_token: ${{ github.token }}
          claude_args: '--model your-model-id --max-turns 20'
          show_full_output: true
          prompt: |
            You are generating a QA regression test report for the the Flutter mobile app.

            ## Context
            Read these two files first (in parallel):
            1. `/tmp/diff_context.md` — pre-collected diff data including code diffs for all changed files
            2. `docs/workflows/release_report/WORKFLOW.md` — report template, risk classification, and feature module mapping

            Note: `CLAUDE.md` is already loaded in your context as project instructions — do not read it again.

            ## Release Info
            - Current release: ${{ steps.tags.outputs.current }}
            - Previous release: ${{ steps.tags.outputs.previous }}
            - Jira base URL: https://your-org.atlassian.net/browse

            ## Instructions
            1. Read the two context files above. Do NOT read other files unless needed.
            2. Code diffs for all changed Dart files are already in `/tmp/diff_context.md`. Only run `git diff` for files where the diff was marked as truncated.
            3. Follow the Steps in WORKFLOW.md to analyze changes, map impacts, and classify risk.
            4. Generate the report following the Report Template in WORKFLOW.md.
            5. Write the report to: `docs/releases/${{ steps.tags.outputs.current }}_qa_report.md`
            6. Verify completeness against the Completion Verification table in WORKFLOW.md.

            ## Key Rules
            - Test cases must be SPECIFIC to the actual code change — read the diffs, not just file names.
            - For `fix:` commits, verify the original bug AND related edge cases.
            - For dependency upgrades, test the features that use the upgraded package.
            - Every Jira key (PROJ-XXXXX) must be a clickable link: [PROJ-XXXXX](https://your-org.atlassian.net/browse/PROJ-XXXXX)
            - The report must be self-contained — a tester with no context should be able to use it.
            - Full Commit Log must use 4 columns: Hash, Type, Jira, Summary. If duplicate commits represent the same logical change, keep only the one with a Jira key.

      - name: Verify report was generated
        shell: bash
        run: |
          REPORT="docs/releases/${TAG_CURRENT}_qa_report.md"

          if [ "$CLAUDE_OUTCOME" != "success" ]; then
            echo "::warning::Claude step finished with outcome: $CLAUDE_OUTCOME"
          fi

          if [ ! -f "$REPORT" ] || [ ! -s "$REPORT" ]; then
            echo "::error::Report was not generated: $REPORT"
            exit 1
          fi
        env:
          TAG_CURRENT: ${{ steps.tags.outputs.current }}
          CLAUDE_OUTCOME: ${{ steps.claude.outcome }}

      - name: Convert report to PDF
        if: always()
        shell: bash
        run: |
          REPORT_FILE="docs/releases/${TAG_CURRENT}_qa_report.md"
          if [ ! -f "$REPORT_FILE" ]; then
            echo "::warning::No report file to convert"
            exit 0
          fi

          sudo apt-get update -qq && sudo apt-get install -y -qq pandoc wkhtmltopdf > /dev/null 2>&1

          pandoc "$REPORT_FILE" \
            --pdf-engine=wkhtmltopdf \
            --metadata title="QA Report ${TAG_CURRENT}" \
            --variable margin-top=12 \
            --variable margin-bottom=12 \
            --variable margin-left=12 \
            --variable margin-right=12 \
            -o "docs/releases/${TAG_CURRENT}_qa_report.pdf" || {
            echo "::warning::PDF conversion failed, will send Markdown instead"
          }
        env:
          TAG_CURRENT: ${{ steps.tags.outputs.current }}

      - name: Upload QA report artifact
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: qa-report-${{ steps.tags.outputs.current }}
          path: |
            docs/releases/${{ steps.tags.outputs.current }}_qa_report.md
            docs/releases/${{ steps.tags.outputs.current }}_qa_report.pdf
          if-no-files-found: warn
          retention-days: 30

      - name: Upload QA report to release
        if: always()
        shell: bash
        run: |
          TAG="$TAG_CURRENT"
          MD_FILE="docs/releases/${TAG}_qa_report.md"
          PDF_FILE="docs/releases/${TAG}_qa_report.pdf"

          if ! gh release view "$TAG" --repo "$REPO" > /dev/null 2>&1; then
            echo "::warning::Release $TAG not found, skipping upload"
            exit 0
          fi

          for FILE in "$PDF_FILE" "$MD_FILE"; do
            if [ -f "$FILE" ]; then
              gh release upload "$TAG" "$FILE" --repo "$REPO" --clobber || echo "::warning::Failed to upload $(basename "$FILE")"
            fi
          done
        env:
          GH_TOKEN: ${{ github.token }}
          TAG_CURRENT: ${{ steps.tags.outputs.current }}
          REPO: ${{ github.repository }}

      - name: Send QA report to Discord
        if: always()
        shell: bash
        run: |
          if [ -z "$DISCORD_WEBHOOK_URL" ]; then
            echo "::warning::DISCORD_WEBHOOK_URL not configured, skipping"
            exit 0
          fi

          PDF_FILE="docs/releases/${TAG_CURRENT}_qa_report.pdf"
          MD_FILE="docs/releases/${TAG_CURRENT}_qa_report.md"

          if [ -f "$PDF_FILE" ]; then
            SEND_FILE="$PDF_FILE"
            SEND_NAME="${TAG_CURRENT}_qa_report.pdf"
          elif [ -f "$MD_FILE" ]; then
            SEND_FILE="$MD_FILE"
            SEND_NAME="${TAG_CURRENT}_qa_report.md"
          else
            echo "::warning::No report file to send"
            exit 0
          fi

          RELEASE_URL="$RELEASE_HTML_URL"
          if [ -z "$RELEASE_URL" ]; then
            RELEASE_URL="https://github.com/${REPO}/releases/tag/${TAG_CURRENT}"
          fi

          MSG=$(printf '📋 **QA Regression Report: %s → %s**\n🔗 %s' "$TAG_PREVIOUS" "$TAG_CURRENT" "$RELEASE_URL")
          PAYLOAD=$(jq -n --arg content "$MSG" '{content: $content}')

          curl -f -X POST \
            -F "payload_json=${PAYLOAD}" \
            -F "file=@${SEND_FILE};filename=${SEND_NAME}" \
            "$DISCORD_WEBHOOK_URL" || echo "::warning::Discord notification failed"
        env:
          DISCORD_WEBHOOK_URL: ${{ secrets.DISCORD_WEBHOOK_URL }}
          TAG_CURRENT: ${{ steps.tags.outputs.current }}
          TAG_PREVIOUS: ${{ steps.tags.outputs.previous }}
          RELEASE_HTML_URL: ${{ github.event.release.html_url }}
          REPO: ${{ github.repository }}

      - name: Job summary
        if: always()
        shell: bash
        run: |
          REPORT="docs/releases/${TAG_CURRENT}_qa_report.md"
          {
            echo "## Release QA Report: ${TAG_PREVIOUS} → ${TAG_CURRENT}"
            echo ""
            if [ -f "$REPORT" ] && [ -s "$REPORT" ]; then
              echo "Report generated successfully."
              echo ""
              head -30 "$REPORT"
            else
              echo "Report was **not** generated. Check the workflow logs."
            fi
          } >> "$GITHUB_STEP_SUMMARY"
        env:
          TAG_CURRENT: ${{ steps.tags.outputs.current }}
          TAG_PREVIOUS: ${{ steps.tags.outputs.previous }}

      - name: Upload diff context on failure
        if: failure()
        uses: actions/upload-artifact@v4
        with:
          name: diff-context-${{ steps.tags.outputs.current }}
          path: /tmp/diff_context.md
          if-no-files-found: ignore
          retention-days: 7

      - name: Cleanup
        if: always()
        run: |
          rm -f /tmp/diff_context.md
          rm -f .claude/settings.local.json
          if [ -f .claude/settings.json.bak ]; then
            mv .claude/settings.json.bak .claude/settings.json
          fi
````
