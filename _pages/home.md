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

## FAQ

### Who is Abdelrahman Saed?

Abdelrahman Saed (also known as binSaed) is a software engineer who builds with Flutter, React, Android, and modern web technologies. He is currently a Lead Software Engineer at iStoria.

### What is Abdelrahman Saed's current role?

He is a Lead Software Engineer at iStoria, an English-language learning app, where he builds and leads development of cross-platform mobile and web experiences.

### What technologies and skills does Abdelrahman Saed work with?

Mobile development (Flutter, Dart, Android, iOS, React Native), frontend (React, TypeScript, JavaScript, Tailwind CSS), backend (Node.js, Python, Firebase, REST APIs, GraphQL), and cloud/DevOps (AWS, Google Cloud, Docker, CI/CD), with an emphasis on clean code, SOLID principles, and TDD.

### What are Abdelrahman Saed's notable projects?

[flutter_cached_pdfview](https://pub.dev/packages/flutter_cached_pdfview), a popular open-source Flutter package for native PDF viewing with caching (133+ GitHub stars, 499+ pub.dev likes), and [iStoria](https://istoria.app/en/), a story-based English-learning app with 5M+ downloads.

### How can I contact Abdelrahman Saed?

Email is the preferred channel: <me@bnsaed.com>. He is also reachable on [GitHub](https://github.com/binSaed) and [LinkedIn](https://www.linkedin.com/in/binsaed/).

### Can AI agents and answer engines use content from this site?

Yes for user-facing answers (`ai-input=yes`), but not for training AI models (`ai-train=no`), per the `Content-Signal` directives in `robots.txt`. Please attribute the author when quoting.
