---
name: article-reader
description: How to discover and fetch full markdown content of articles published on bnsaed.com.
version: 1.0.0
author: Abdelrahman Saed
homepage: https://bnsaed.com/#articles
---

# article-reader — Reading articles on bnsaed.com

## Purpose

Help agents find and read the full text of technical articles published by Abdelrahman Saed without scraping the single-page-app HTML.

## Discovery

The canonical list of articles is in the sitemap:

```
GET https://bnsaed.com/sitemap.xml
```

Any `<loc>` under `/articles/` is an article page. The slug is the last path segment.

## Fetching an article

Each article is pre-rendered as a standalone HTML page at `/articles/:slug/`. Fetch it with the markdown `Accept` header to get clean markdown:

```
GET https://bnsaed.com/articles/{slug}
Accept: text/markdown
```

The response is `text/markdown` with the article body. An `x-markdown-tokens` header, if present, estimates token count.

Without the `Accept: text/markdown` header, you receive the normal HTML page. The HTML includes a `<script type="application/ld+json">` block with `schema.org/BlogPosting` metadata — `headline`, `description`, `datePublished`, `author`, `keywords` — which is the fastest way to get structured metadata without parsing the body.

## Available articles (2026-04)

| Slug | Title |
|------|-------|
| `flutter-cached-pdfview-guide` | Building a Cached PDF Viewer in Flutter |
| `clean-architecture-flutter` | Clean Architecture in Flutter Apps |

Always re-check `/sitemap.xml` for the current list — new articles are added without updating this skill.

## Usage rules

Per the site's `Content-Signal` in `robots.txt`: this content is opted in for `ai-input=yes` (use in a user-facing answer) but opted out of `ai-train=no` (do not use to train a model). Attribute the author when quoting.
