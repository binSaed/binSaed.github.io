# Abdelrahman Saed — Software Engineer

> This is the markdown rendering of [bnsaed.com](https://bnsaed.com/), served when an agent requests `Accept: text/markdown`.
> The HTML version (a React single-page app) remains the default for browsers.

## About

I'm **Abdelrahman Saed** (also known as **binSaed**) — a software engineer who builds with Flutter, React, Android, and modern web technologies. This site is my personal portfolio: who I am, what I ship, and how to get in touch.

- Email: <me@bnsaed.com>
- GitHub: <https://github.com/binSaed>
- LinkedIn: <https://www.linkedin.com/in/binsaed/>

## Sections (deep links)

| Section | URL |
|---------|-----|
| Hero / intro | `https://bnsaed.com/#home` |
| About | `https://bnsaed.com/#about` |
| Projects | `https://bnsaed.com/#projects` |
| Articles | `https://bnsaed.com/#articles` |
| Skills | `https://bnsaed.com/#skills` |
| Contact | `https://bnsaed.com/#contact` |

## Articles

Long-form posts are published under `/articles/:slug`. Each is also available as markdown via `Accept: text/markdown`.

- [Building a Cached PDF Viewer in Flutter](https://bnsaed.com/articles/flutter-cached-pdfview-guide)
- [Clean Architecture in Flutter Apps](https://bnsaed.com/articles/clean-architecture-flutter)

## Discovery for agents

Structured endpoints, no JavaScript required:

- `GET /sitemap.xml` — canonical list of indexable URLs
- `GET /robots.txt` — crawl rules and `Content-Signal` preferences
- `GET /.well-known/api-catalog` — RFC 9727 linkset of site resources
- `GET /.well-known/agent-skills/index.json` — agent skills discovery index
- `GET /.well-known/mcp/server-card.json` — MCP server card
- `GET /.well-known/oauth-protected-resource` — RFC 9728 (this site requires no auth)
- `POST /mcp` — MCP JSON-RPC endpoint (anonymous; tools: `list_articles`, `get_contact_info`, `get_site_metadata`)

## Content preferences

Per `robots.txt`:

```
Content-Signal: search=yes, ai-input=yes, ai-train=no
```

- **search=yes** — indexing for search is welcome.
- **ai-input=yes** — agents may use this content as input for a user-facing answer.
- **ai-train=no** — this content must not be used to train AI models.

Attribute the author when quoting.
