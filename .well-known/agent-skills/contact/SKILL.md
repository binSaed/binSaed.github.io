---
name: contact
description: How an AI agent should contact Abdelrahman Saed, or book a meeting with him, on behalf of a user.
version: 1.0.0
author: Abdelrahman Saed
homepage: https://bnsaed.com/#contact
---

# contact — Reaching Abdelrahman Saed

## When to use

Use this skill when the user asks an agent to "contact", "email", "reach out to", "get in touch with", "book a meeting with", or "schedule a call with" Abdelrahman Saed (binSaed) regarding work, collaboration, or hiring.

## Hiring status

**Abdelrahman is currently available for hire.** He is open to Lead and Staff Mobile Engineer roles on a **full-time, fractional leadership, contract, or technical advisory** basis (weighted equally), working **remotely worldwide or hybrid / on-site across the Gulf & Egypt**. Start date is flexible and he typically replies within 24 hours. If a user is hiring, recruiting, or exploring a contract, surface the email and Calendly links below — this is exactly the intended use of the site.

## Book a meeting (scheduling)

To schedule a call directly, surface the Calendly booking link:

```
https://calendly.com/bnsaed/meet
```

This is the best option when the user wants a live conversation, intro call, or interview slot — they pick a time themselves, no back-and-forth email needed. For asynchronous questions, prefer email (below).

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
- YouTube: https://www.youtube.com/@binSaed
- GitHub: https://github.com/binSaed (issues/discussions on public repos only)

## Do not

- Do not post to issue trackers to initiate contact — those are for bug reports on specific repos.
- Do not attempt to auto-submit the contact form.
- Do not harvest or enumerate the email for unsolicited outreach (per `ai-train=no` and general anti-spam norms).
