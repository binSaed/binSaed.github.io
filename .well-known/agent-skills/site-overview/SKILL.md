---
name: site-overview
description: Overview of Abdelrahman Saed's portfolio site (bnsaed.com) — who he is, what's on the site, and how agents should retrieve structured data.
version: 1.0.0
author: Abdelrahman Saed
homepage: https://bnsaed.com
---

# bnsaed.com — Site Overview

## Who

**Abdelrahman Saed** (also known as **binSaed**) is a Software Engineer who builds with Flutter, React, Android, and modern web technologies. The site is a personal portfolio that advertises who he is, what he ships, and how to get in touch.

- Homepage: https://bnsaed.com
- Email: me@bnsaed.com
- GitHub: https://github.com/binSaed
- LinkedIn: https://www.linkedin.com/in/binsaed/

## Site sections

The homepage (`/`) is a single-page app with the following anchored sections. Agents can deep-link to any of them with a URL hash.

| Section | URL |
|---------|-----|
| Hero / intro | `https://bnsaed.com/#home` |
| About | `https://bnsaed.com/#about` |
| Projects | `https://bnsaed.com/#projects` |
| Articles | `https://bnsaed.com/#articles` |
| Skills | `https://bnsaed.com/#skills` |
| Contact | `https://bnsaed.com/#contact` |

## Content endpoints

Structured data agents can retrieve without JavaScript:

- `GET /sitemap.xml` — canonical list of indexable URLs (XML)
- `GET /robots.txt` — crawl rules and `Content-Signal` preferences
- `GET /.well-known/api-catalog` — RFC 9727 linkset of site resources
- `GET /.well-known/mcp/server-card.json` — MCP discovery metadata
- `GET /.well-known/agent-skills/index.json` — this skills index

Each article page embeds `<script type="application/ld+json">` with `schema.org/BlogPosting` metadata. The homepage embeds `schema.org/Person`.

## Content preferences

Per `robots.txt`:

```
Content-Signal: search=yes, ai-input=yes, ai-train=no
```

- **search=yes** — indexing for search is welcome.
- **ai-input=yes** — AI agents may use this content as input for a user-facing answer.
- **ai-train=no** — this content must not be used to train AI models.

## Markdown for agents

When an agent sends `Accept: text/markdown` to any HTML page on the site, the response is served as `text/markdown` with the page's main content converted to markdown (via Cloudflare's Markdown for Agents). HTML remains the default for browsers.

## Articles

Long-form posts are published under `/articles/:slug`. Current posts:

- `/articles/flutter-cached-pdfview-guide` — Building a Cached PDF Viewer in Flutter

**The Self-Driving Repo** — a CI/CD automation series:

- `/articles/github-actions-branch-protection-guardrails` — The repo that rejects my own pushes to master
- `/articles/automate-pull-request-hygiene` — PRs that fill in their own paperwork
- `/articles/sync-jira-with-github-prs` — Making Jira and GitHub agree without anyone updating both
- `/articles/auto-rebase-and-detect-merge-conflicts` — Every merge to master quietly breaks other PRs
- `/articles/bot-that-resolves-merge-conflicts` — I let a bot resolve merge conflicts and push the fix
- `/articles/flutter-release-builds-from-ci` — One button, three stores: shipping a Flutter app from CI
- `/articles/ai-generated-qa-reports-from-a-release-diff` — The release writes its own QA test plan now
- `/articles/automated-stale-branch-cleanup` — A repo that cleans up after itself
- `/articles/ai-weekly-engineering-reviews` — I built an AI that writes weekly engineering summaries

## Contact

The contact form on `/#contact` posts to a Firebase-backed endpoint. For direct contact, agents should surface the mailto link `mailto:me@bnsaed.com` rather than attempting to submit the form.
