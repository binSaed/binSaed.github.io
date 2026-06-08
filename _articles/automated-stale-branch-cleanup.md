---
title: "A repo that cleans up after itself — without deleting the wrong branch"
slug: automated-stale-branch-cleanup
date: 2026-06-02
readTime: 6 min read
tags: [GitHub Actions, Git, DevOps, Automation]
author: Abdelrahman Saed
description: "Bulk branch deletion done safely, as a careful classification with a per-run cap, deferral, and a full audit trail — never a blunt age filter."
url: https://bnsaed.com/articles/automated-stale-branch-cleanup
---

# A repo that cleans up after itself — without deleting the wrong branch

*Subtitle: Deleting branches in bulk is a one-keystroke disaster waiting to happen. The fix is to make deletion the last step of a careful classification — and to cap, defer, and audit everything.*

*The Self-Driving Repo · Part 8 — Housekeeping*

![A robot broom sweeping dead branches from a healthy git tree](/article-images/automated-stale-branch-cleanup-hero.png)

---

Old branches are the junk drawer of a repo. Every merged feature, every abandoned experiment, every "let me just try something" leaves one behind. They pile up silently — clones get slower, branch pickers get unusable, and `git branch -r` scrolls for a screen and a half. On a long-lived repo with a busy team, you wake up one day with hundreds of dead branches.

The naive fix — a script that deletes anything old — is how you delete a release branch someone needed, or a long-running integration branch that just hadn't been touched in a while. With deletion, "oops" is expensive. You don't get to be cavalier.

So I built branch cleanup as a **classification problem first and a deletion problem second.** The deleting is three lines. The safety is everything before it.

## The problem

Unmanaged branches cause slow, compounding pain:

1. **Clutter that slows people down.** Hundreds of stale refs make branch lists and tooling sluggish and confusing.
2. **No signal about what's safe to remove.** Is this branch merged? Abandoned? An active long-runner that's just quiet this week? You can't tell at a glance, so nobody cleans up at all.
3. **Cleanup is scary, so it never happens.** The risk of nuking something important means the junk drawer just grows forever.

## The idea

A scheduled workflow — Sunday at 4am, when nobody's pushing — that fetches *every* branch and the full PR history, then sorts each branch into a category before a single deletion happens:

- **Sacred** — `master`, `develop`, the default branch. Never touched.
- **Protected** — anything with branch protection on. Never touched.
- **Open-PR** — the head or base of an open PR. Active; leave it.
- **Merged** — already merged via a PR. Safe to delete.
- **Stale** — last commit older than a threshold (default ~2 years). Safe to delete.
- **Active** — recent commits, no reason to remove. Keep.

Only the *Merged* and *Stale* buckets get deleted, and even then, carefully.

```yaml
on:
  schedule:
    - cron: '0 4 * * 0'      # Sunday 04:00 UTC
  workflow_dispatch:
    inputs:
      age_days:      { default: '730' }   # ~2 years
      max_deletions: { default: '50' }    # hard cap per run
```

## How it works

![Classification funnel: branches sorted into sacred, protected, open-PR, merged, stale and active, with a capped delete tray](/article-images/automated-stale-branch-cleanup-diagram.png)

### Build the world before you judge it

You can't classify a branch in isolation — you need to know whether it backs an open PR, whether it was merged, and how old its tip is. So the first step assembles the full picture: all open PRs (to collect their head/base refs), all merged PRs (to know what's been merged and by whom), and every branch with its last-commit timestamp and protection flag.

```bash
# Every branch with sha + protected flag, as TSV
gh api repos/$REPO/branches --paginate \
  | jq -r '.[] | [.name, .commit.sha, (.protected|tostring)] | @tsv'
```

### Classify with a strict precedence

Each branch runs through the categories in priority order — and **safety always wins ties.** Sacred beats protected beats open-PR beats merged beats stale. A branch that is both "merged" and "backs an open PR" is kept, because the open-PR check comes first. The ordering is the safety policy:

```bash
if   in_list "$NAME" "$SACRED";    then echo "SKIP:sacred"
elif [ "$PROTECTED" = "true" ];    then echo "SKIP:protected"
elif in_list "$NAME" "$OPEN_REFS"; then echo "SKIP:open-pr"
elif is_merged "$NAME";            then echo "DELETE:merged"
elif older_than "$CUTOFF" "$NAME"; then echo "DELETE:stale"
else                                    echo "KEEP:active"
fi
```

Stale detection is just epoch math — compare the tip commit's timestamp to a cutoff:

```bash
CUTOFF=$(( $(date -u +%s) - AGE_DAYS * 86400 ))
```

### Cap and defer — never delete unboundedly

Here's the rule that turns a bulk operation from terrifying into routine: **never delete more than N in one run.** If 400 branches qualify, delete the first 50, and *defer the rest to next week*. A capped, repeated cleanup converges safely; an uncapped one is a single command that can wreck a repo. The cap is a circuit breaker against a bad classification — if something's wrong, you've harmed 50 branches, not 800, and you'll see it before the next run.

The deferred branches are logged, not lost — the run reports exactly what it skipped for capacity so there are no surprises.

### Delete carefully, link back, and audit

Even the deletion step is defensive. Branch names contain slashes and the occasional oddity, so they're URL-encoded before the API call. And when a *merged* branch is deleted, the workflow comments on its original PR — closing the loop so there's a trail from "this branch is gone" back to "here's why":

```bash
ENC=$(jq -rn --arg x "$NAME" '$x|@uri')          # handle slashes/special chars
gh api -X DELETE "repos/$REPO/git/refs/heads/$ENC"
# then, for merged branches, comment on the source PR: "branch auto-deleted by cleanup"
```

Every action lands in two places: a digest posted to team chat (counts, grouped by reason, with author attribution) and a full job summary with tables of what was deleted, what was deferred, and what was kept. Bulk deletion without an audit trail is how you lose the ability to answer "what happened to my branch?" — so the trail is non-negotiable.

## What it bought us

- **The junk drawer stays empty** without anyone doing scary manual cleanup.
- **Zero accidents**, because deletion is the last step of a conservative classification, not a blunt age filter.
- **A clear record.** Every deletion is attributable and explained, with merged branches linked back to their PRs.
- **It self-throttles.** A big backlog clears over several capped runs instead of one heart-stopping purge — around 100 dead branches reclaimed.

## Gotchas & trade-offs

- **"Merged" is subtler than it looks.** Squash-merges don't leave the branch as an ancestor of `master`, so ancestry checks lie — rely on the *PR* merge record, not `git branch --merged`.
- **Protection flags are only as good as your config.** The workflow honors branch protection, but if an important long-runner isn't protected and goes quiet past the threshold, it qualifies as stale. Protect what matters, or widen "sacred."
- **API pagination has real limits.** Listing thousands of PRs/branches can truncate; the job logs when a list may be incomplete rather than pretending it saw everything. Trust-but-verify your counts on large repos.
- **The cap is a feature, resist removing it.** "Just clean it all up at once" is the request that precedes the incident. Defer-and-repeat is slower and far safer.
- **Schedule it for quiet hours.** Deleting branches while people push invites races. Off-peak isn't just politeness; it reduces edge cases.

## Takeaway

Any automation that deletes should be a classifier with a delete step bolted on the end — never a delete step with a filter. Order your categories so safety wins every tie, cap the blast radius per run, defer the overflow, and audit every action with a trail back to *why*. Make the destructive thing boring and reversible-in-spirit, and bulk cleanup stops being a thing you're afraid to run.

Next, the finale: aggregating git and Jira into per-person weekly summaries with an LLM — and the hard conversation about doing that responsibly.

## The complete workflow

Here is the full, genericized workflow — drop it into `.github/workflows/` and replace the placeholders (`your-org`, the `PROJ` project key, `<@DISCORD_USER_ID>`, the example team, and the secret names) with your own.

### `.github/workflows/cleanup-stale-branches.yml`

````yaml
name: Cleanup Stale Branches

on:
  schedule:
    - cron: '0 4 * * 0'  # Every Sunday at 04:00 UTC
  workflow_dispatch:
    inputs:
      age_days:
        description: 'Delete branches with no commits in N days'
        required: false
        default: '730'
      max_deletions:
        description: 'Hard cap on branches deleted per run'
        required: false
        default: '50'

concurrency:
  group: cleanup-stale-branches
  cancel-in-progress: false

permissions:
  contents: write
  pull-requests: write

jobs:
  cleanup:
    runs-on: ubuntu-slim
    timeout-minutes: 30
    steps:
      - name: Classify branches
        id: classify
        env:
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          REPO: ${{ github.repository }}
          DEFAULT_BRANCH: ${{ github.event.repository.default_branch }}
          AGE_DAYS: ${{ inputs.age_days || '730' }}
          MAX_DELETE: ${{ inputs.max_deletions || '50' }}
        run: |
          set -euo pipefail

          CUTOFF_EPOCH=$(( $(date -u +%s) - AGE_DAYS * 86400 ))
          echo "Cutoff: $(date -u -d "@$CUTOFF_EPOCH" +%Y-%m-%d) (age_days=$AGE_DAYS)"

          SKIP_ALWAYS=$(printf '%s\n' master develop "$DEFAULT_BRANCH" | sort -u)

          OPEN_PR_LIMIT=1000
          gh pr list --repo "$REPO" --state open --limit "$OPEN_PR_LIMIT" \
            --json headRefName,baseRefName > /tmp/open_prs.json
          OPEN_PR_COUNT=$(jq 'length' /tmp/open_prs.json)
          if [ "$OPEN_PR_COUNT" -ge "$OPEN_PR_LIMIT" ]; then
            echo "::error::Open PR count ($OPEN_PR_COUNT) reached limit ($OPEN_PR_LIMIT); list may be truncated and untracked open-PR refs could be deleted. Raise OPEN_PR_LIMIT and re-run."
            exit 1
          fi
          jq -r '.[].headRefName, .[].baseRefName' /tmp/open_prs.json | sort -u > /tmp/open_refs.txt
          echo "Open PRs: $OPEN_PR_COUNT | unique refs: $(wc -l < /tmp/open_refs.txt | tr -d ' ')"

          MERGED_PR_LIMIT=5000
          gh pr list --repo "$REPO" --state merged --limit "$MERGED_PR_LIMIT" \
            --json headRefName,number,mergedAt,author \
            --jq '.[] | "\(.headRefName)\t\(.number)\t\(.mergedAt)\t\(.author.login // "unknown")"' \
            | sort -u > /tmp/merged_prs.tsv
          MERGED_PR_COUNT=$(wc -l < /tmp/merged_prs.tsv | tr -d ' ')
          if [ "$MERGED_PR_COUNT" -ge "$MERGED_PR_LIMIT" ]; then
            echo "::warning::Merged PR list at limit ($MERGED_PR_LIMIT); some merged-via-pr deletions may be missed. Raise MERGED_PR_LIMIT if needed."
          fi
          echo "Merged PR head refs: $MERGED_PR_COUNT"

          gh api "repos/$REPO/branches" --paginate \
            --jq '.[] | [.name, .commit.sha, (.protected|tostring)] | @tsv' > /tmp/branches.tsv
          echo "Remote branches: $(wc -l < /tmp/branches.tsv | tr -d ' ')"

          : > /tmp/delete.tsv
          : > /tmp/keep.tsv

          while IFS=$'\t' read -r NAME SHA PROTECTED; do
            if grep -Fxq "$NAME" <<<"$SKIP_ALWAYS"; then
              printf '%s\tSKIP\tsacred\t-\t-\t-\n' "$NAME" >> /tmp/keep.tsv
              continue
            fi
            if [ "$PROTECTED" = "true" ]; then
              printf '%s\tSKIP\tprotected\t-\t-\t-\n' "$NAME" >> /tmp/keep.tsv
              continue
            fi
            if grep -Fxq "$NAME" /tmp/open_refs.txt; then
              printf '%s\tSKIP\topen-pr-ref\t-\t-\t-\n' "$NAME" >> /tmp/keep.tsv
              continue
            fi

            MERGED_LINE=$(awk -F'\t' -v b="$NAME" '$1==b{print; exit}' /tmp/merged_prs.tsv)
            if [ -n "$MERGED_LINE" ]; then
              PR_NUM=$(cut -f2 <<<"$MERGED_LINE")
              MERGED_AT=$(cut -f3 <<<"$MERGED_LINE")
              PR_AUTHOR=$(cut -f4 <<<"$MERGED_LINE")
              printf '%s\tDELETE\tmerged-via-pr\t%s\t%s\t%s\n' "$NAME" "$PR_NUM" "$MERGED_AT" "$PR_AUTHOR" >> /tmp/delete.tsv
              continue
            fi

            COMMIT_JSON=$(gh api "repos/$REPO/commits/$SHA" 2>/tmp/commit_err || echo "")
            if [ -z "$COMMIT_JSON" ]; then
              if [ -s /tmp/commit_err ] && ! grep -qiE "404|not found" /tmp/commit_err; then
                echo "::warning::commit lookup failed for $NAME ($SHA): $(tr '\n' ' ' < /tmp/commit_err)"
              fi
              printf '%s\tSKIP\tno-commit-data\t-\t-\t-\n' "$NAME" >> /tmp/keep.tsv
              continue
            fi
            COMMIT_DATE=$(jq -r '.commit.committer.date // ""' <<<"$COMMIT_JSON")
            COMMIT_AUTHOR=$(jq -r '.author.login // .commit.author.name // "unknown"' <<<"$COMMIT_JSON")
            if [ -z "$COMMIT_DATE" ]; then
              printf '%s\tSKIP\tno-commit-data\t-\t-\t%s\n' "$NAME" "$COMMIT_AUTHOR" >> /tmp/keep.tsv
              continue
            fi
            COMMIT_EPOCH=$(date -u -d "$COMMIT_DATE" +%s)
            if [ "$COMMIT_EPOCH" -lt "$CUTOFF_EPOCH" ]; then
              AGE_D=$(( ( $(date -u +%s) - COMMIT_EPOCH ) / 86400 ))
              printf '%s\tDELETE\tstale\t%sd\t%s\t%s\n' "$NAME" "$AGE_D" "$COMMIT_DATE" "$COMMIT_AUTHOR" >> /tmp/delete.tsv
            else
              printf '%s\tKEEP\tactive\t-\t%s\t%s\n' "$NAME" "$COMMIT_DATE" "$COMMIT_AUTHOR" >> /tmp/keep.tsv
            fi
          done < /tmp/branches.tsv

          DELETE_COUNT=$(wc -l < /tmp/delete.tsv | tr -d ' ')
          KEEP_COUNT=$(wc -l < /tmp/keep.tsv | tr -d ' ')
          echo "Classified: $DELETE_COUNT candidates, $KEEP_COUNT kept"

          sort -t $'\t' -k3,3 -k5,5 /tmp/delete.tsv -o /tmp/delete.tsv
          head -n "$MAX_DELETE" /tmp/delete.tsv > /tmp/delete_batch.tsv
          BATCH_COUNT=$(wc -l < /tmp/delete_batch.tsv | tr -d ' ')
          REMAINING=$((DELETE_COUNT - BATCH_COUNT))

          if [ "$REMAINING" -gt 0 ]; then
            echo "::warning::Batch limit: processing $BATCH_COUNT of $DELETE_COUNT candidates this run. $REMAINING will be deferred to future runs. Raise max_deletions to process more at once."
          fi

          echo "delete_count=$DELETE_COUNT" >> "$GITHUB_OUTPUT"
          echo "batch_count=$BATCH_COUNT" >> "$GITHUB_OUTPUT"
          echo "remaining_count=$REMAINING" >> "$GITHUB_OUTPUT"
          echo "keep_count=$KEEP_COUNT" >> "$GITHUB_OUTPUT"
          echo "has_candidates=$([ "$BATCH_COUNT" -gt 0 ] && echo true || echo false)" >> "$GITHUB_OUTPUT"
          echo "max_delete=$MAX_DELETE" >> "$GITHUB_OUTPUT"

      - name: Apply deletions
        if: steps.classify.outputs.has_candidates == 'true'
        env:
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          REPO: ${{ github.repository }}
        run: |
          set -euo pipefail

          : > /tmp/result.tsv

          while IFS=$'\t' read -r NAME _ REASON DETAIL DATE AUTHOR; do
            ENC=$(jq -rn --arg x "$NAME" '$x|@uri')
            if gh api -X DELETE "repos/$REPO/git/refs/heads/$ENC" 2>/tmp/err; then
              printf '%s\tDELETED\t%s\t%s\t%s\t%s\n' "$NAME" "$REASON" "$DETAIL" "$DATE" "$AUTHOR" >> /tmp/result.tsv
              echo "deleted: $NAME ($REASON) by $AUTHOR"
              if [ "$REASON" = "merged-via-pr" ]; then
                PR_NUM="$DETAIL"
                gh api -X POST "repos/$REPO/issues/$PR_NUM/comments" \
                  -f body="Branch \`$NAME\` auto-deleted by cleanup-stale-branches workflow (merged branch cleanup)." \
                  >/dev/null 2>&1 || echo "::warning::Failed to post cleanup comment on PR #$PR_NUM"
              fi
            else
              ERR_MSG=$(tr '\n' ' ' < /tmp/err)
              if grep -qi "protected" /tmp/err; then
                printf '%s\tSKIPPED-PROTECTED\t%s\t%s\t%s\t%s\n' "$NAME" "$REASON" "$DETAIL" "$DATE" "$AUTHOR" >> /tmp/result.tsv
                echo "skipped (protected): $NAME"
              else
                printf '%s\tERROR\t%s\t%s\t%s\t%s\n' "$NAME" "$REASON" "$DETAIL" "$ERR_MSG" "$AUTHOR" >> /tmp/result.tsv
                echo "::warning::error deleting $NAME: $ERR_MSG"
              fi
            fi
          done < /tmp/delete_batch.tsv

      - name: Format Discord message
        id: format_message
        if: steps.classify.outputs.has_candidates == 'true'
        env:
          REPO_URL: https://github.com/${{ github.repository }}
        run: |
          set -euo pipefail

          if [ ! -s /tmp/result.tsv ]; then
            echo "has_message=false" >> "$GITHUB_OUTPUT"
            exit 0
          fi

          DELETED_COUNT=$(awk -F'\t' '$2=="DELETED"' /tmp/result.tsv | wc -l | tr -d ' ')
          if [ "$DELETED_COUNT" = "0" ]; then
            echo "has_message=false" >> "$GITHUB_OUTPUT"
            exit 0
          fi

          MAX_LIST=20
          MERGED_COUNT=$(awk -F'\t' '$2=="DELETED" && $3=="merged-via-pr"' /tmp/result.tsv | wc -l | tr -d ' ')
          STALE_COUNT=$(awk -F'\t' '$2=="DELETED" && $3=="stale"' /tmp/result.tsv | wc -l | tr -d ' ')
          ERRORS_COUNT=$(awk -F'\t' '$2=="ERROR"' /tmp/result.tsv | wc -l | tr -d ' ')

          MERGED_LIST=$(awk -F'\t' -v n="$MAX_LIST" -v repo="$REPO_URL" '$2=="DELETED" && $3=="merged-via-pr" { c++; if (c<=n) printf "• `%s` [PR #%s](%s/pull/%s) by @%s\\n", $1, $4, repo, $4, $6 }' /tmp/result.tsv)
          if [ "$MERGED_COUNT" -gt "$MAX_LIST" ]; then
            MERGED_LIST="${MERGED_LIST}… and $((MERGED_COUNT - MAX_LIST)) more\\n"
          fi

          STALE_LIST=$(awk -F'\t' -v n="$MAX_LIST" '$2=="DELETED" && $3=="stale" { c++; if (c<=n) { d=$4; sub(/d$/, "", d); printf "• `%s` (%s days ago) by @%s\\n", $1, d, $6 } }' /tmp/result.tsv)
          if [ "$STALE_COUNT" -gt "$MAX_LIST" ]; then
            STALE_LIST="${STALE_LIST}… and $((STALE_COUNT - MAX_LIST)) more\\n"
          fi

          MESSAGE="🧹 **Branch Cleanup Report**\n\n"
          if [ "$MERGED_COUNT" -gt 0 ]; then
            MESSAGE="${MESSAGE}**Merged PR branches deleted (${MERGED_COUNT}):**\n${MERGED_LIST}\n"
          fi
          if [ "$STALE_COUNT" -gt 0 ]; then
            MESSAGE="${MESSAGE}**Stale branches deleted (${STALE_COUNT}):**\n${STALE_LIST}\n"
          fi
          if [ "$ERRORS_COUNT" -gt 0 ]; then
            MESSAGE="${MESSAGE}⚠️ **Errors: ${ERRORS_COUNT}**\n"
          fi
          MESSAGE="${MESSAGE}**Total deleted: ${DELETED_COUNT}**"

          MESSAGE=$(printf '%s' "$MESSAGE" | sed \
            -e 's/@your-maintainer/<@DISCORD_USER_ID>/g' \
            -e 's/@schen/<@DISCORD_USER_ID>/g' \
            -e 's/@jpark/<@DISCORD_USER_ID>/g' \
            -e 's/@jpark/<@DISCORD_USER_ID>/g' \
            -e 's/@ckim/<@DISCORD_USER_ID>/g' \
            -e 's/@rdiaz/<@DISCORD_USER_ID>/g' \
            -e 's/@myu/<@DISCORD_USER_ID>/g' \
            -e 's/@mghannam93/<@DISCORD_USER_ID>/g' \
            -e 's/@ahmedmohamedeid98/<@DISCORD_USER_ID>/g')

          {
            echo "message<<EOF"
            printf '%b\n' "$MESSAGE"
            echo "EOF"
          } >> "$GITHUB_OUTPUT"
          echo "has_message=true" >> "$GITHUB_OUTPUT"

      - name: Discord Webhook Notification
        if: steps.format_message.outputs.has_message == 'true'
        uses: tsickert/discord-webhook@v6.0.0
        with:
          webhook-url: ${{ secrets.DISCORD_WEBHOOK_URL }}
          content: ${{ steps.format_message.outputs.message }}

      - name: Write summary
        if: always()
        env:
          DELETE_COUNT: ${{ steps.classify.outputs.delete_count || '0' }}
          BATCH_COUNT: ${{ steps.classify.outputs.batch_count || '0' }}
          REMAINING_COUNT: ${{ steps.classify.outputs.remaining_count || '0' }}
          KEEP_COUNT: ${{ steps.classify.outputs.keep_count || '0' }}
          MAX_DELETE: ${{ steps.classify.outputs.max_delete || '50' }}
        run: |
          {
            echo "## Cleanup Summary"
            echo ""
            if [ "$REMAINING_COUNT" -gt 0 ]; then
              echo "> ℹ️ **Batch mode:** processed $BATCH_COUNT of $DELETE_COUNT candidates (max_deletions=$MAX_DELETE). **$REMAINING_COUNT deferred** to future runs. Raise \`max_deletions\` to process more at once."
              echo ""
            fi
            echo "- Total candidates: $DELETE_COUNT"
            echo "- Processed this run: $BATCH_COUNT"
            echo "- Deferred: $REMAINING_COUNT"
            echo "- Kept: $KEEP_COUNT"
            if [ -f /tmp/result.tsv ]; then
              DELETED=$(awk -F'\t' '$2=="DELETED"' /tmp/result.tsv | wc -l | tr -d ' ')
              PROT=$(awk -F'\t' '$2=="SKIPPED-PROTECTED"' /tmp/result.tsv | wc -l | tr -d ' ')
              ERRS=$(awk -F'\t' '$2=="ERROR"' /tmp/result.tsv | wc -l | tr -d ' ')
              echo "- Deleted: $DELETED"
              echo "- Skipped (protected): $PROT"
              echo "- Errors: $ERRS"
            fi
            echo ""
            if [ -s /tmp/result.tsv ]; then
              echo "### Deletion Results (this run)"
              echo ""
              echo "| Branch | Action | Reason | Detail | Date | Author |"
              echo "|---|---|---|---|---|---|"
              awk -F'\t' '{printf "| `%s` | %s | %s | %s | %s | %s |\n",$1,$2,$3,$4,$5,$6}' /tmp/result.tsv
              echo ""
              if [ "$REMAINING_COUNT" -gt 0 ] && [ -s /tmp/delete.tsv ]; then
                echo "<details><summary>Deferred candidates ($REMAINING_COUNT) — will be processed in future runs</summary>"
                echo ""
                echo "| Branch | Reason | Detail | Date | Author |"
                echo "|---|---|---|---|---|"
                tail -n +$((BATCH_COUNT + 1)) /tmp/delete.tsv | awk -F'\t' '{printf "| `%s` | %s | %s | %s | %s |\n",$1,$3,$4,$5,$6}'
                echo ""
                echo "</details>"
                echo ""
              fi
            elif [ -s /tmp/delete.tsv ]; then
              echo "### Deletion Candidates"
              echo ""
              echo "| Branch | Reason | Detail | Date | Author |"
              echo "|---|---|---|---|---|"
              awk -F'\t' '{printf "| `%s` | %s | %s | %s | %s |\n",$1,$3,$4,$5,$6}' /tmp/delete.tsv
              echo ""
            fi
            if [ -s /tmp/keep.tsv ]; then
              echo "<details><summary>Kept branches ($KEEP_COUNT)</summary>"
              echo ""
              echo "| Branch | Reason | Date | Author |"
              echo "|---|---|---|---|"
              awk -F'\t' '{printf "| `%s` | %s | %s | %s |\n",$1,$3,$5,$6}' /tmp/keep.tsv
              echo ""
              echo "</details>"
            fi
          } >> "$GITHUB_STEP_SUMMARY"
````
