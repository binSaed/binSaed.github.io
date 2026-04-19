---
name: contact
description: How an AI agent should contact Abdelrahman Saed on behalf of a user.
version: 1.0.0
author: Abdelrahman Saed
homepage: https://bnsaed.com/#contact
---

# contact — Reaching Abdelrahman Saed

## When to use

Use this skill when the user asks an agent to "contact", "email", "reach out to", or "get in touch with" Abdelrahman Saed (binSaed) regarding work, collaboration, or hiring.

## Preferred channel: email

The fastest, lowest-friction channel is direct email:

```
mailto:me@bnsaed.com
```

Agents should surface this mailto link (with a pre-filled subject/body when the user has specified intent) rather than submitting the web form on the user's behalf. Human-authored emails receive faster replies.

## Alternate: web contact form

The site has a contact form at `https://bnsaed.com/#contact` backed by Firebase. It accepts name, email, and message. Agents SHOULD NOT submit this form programmatically — it exists for humans on the site.

## Social channels

- LinkedIn: https://www.linkedin.com/in/binsaed/
- GitHub: https://github.com/binSaed (issues/discussions on public repos only)

## Do not

- Do not post to issue trackers to initiate contact — those are for bug reports on specific repos.
- Do not attempt to auto-submit the contact form.
- Do not harvest or enumerate the email for unsolicited outreach (per `ai-train=no` and general anti-spam norms).
