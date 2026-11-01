---
title: "DecTog: Deferred Deep Linking on Cloudflare Workers — Deep links and install attribution for Flutter and React Native apps, built solo on Cloudflare."
slug: dectog
date: 2026-11-01
readTime: 8 min read
tags: [Deep Linking, Cloudflare Workers, TypeScript, Flutter, React Native]
author: Abdelrahman Saed
url: https://bnsaed.com/case-studies/dectog
---

# DecTog: Deferred Deep Linking on Cloudflare Workers — Case Study

Deep links and install attribution for Flutter and React Native apps, built solo on Cloudflare.

**Role:** Creator & sole engineer · **Timeline:** 2026 — Present · **Platforms:** iOS, Android

How I built DecTog alone: deferred deep linking and install attribution on one Cloudflare Worker and D1, with Flutter and React Native SDKs on one contract.

## Context

DecTog is deep linking, deferred deep linking and install attribution for Flutter and React Native apps. A tap on a DecTog link opens the installed app on the right screen. If the app isn't installed, the tap goes through the right app store, and the new user still lands on that screen at first launch. The install is credited to the link that brought it, and the app's later events and revenue are credited to that link too.

I built it alone in 2026, alongside my day job leading mobile at iStoria. The reason was close to home: iStoria was paying thousands of dollars for its referral tracking, and Firebase Dynamic Links, the free option many Flutter apps relied on, had been shut down.

iStoria's referral program now runs on DecTog. Each learner shares one personal link. The server credits the invited friend's install to that learner, and a signed webhook grants the inviter's free premium days. The customer's side of that story is on [dectog.com](https://dectog.com/customers/istoria). This study is the builder's side: the architecture, the attribution logic, and the decisions I made and rejected along the way.

## The Challenge

Deferred deep linking looks like a redirect, but the hard part is matching three separate moments. The tap happens in a browser. The install happens in an app store DecTog never sees. The first launch can come minutes or hours later, in an app that knows nothing about the tap. Connecting those three moments is the whole product.

Every way of connecting them has a cost. The exact signals exist on only some platforms. The fallback is a guess. And the guesses that work best are the ones Apple's rules and EU privacy law forbid.

It also had to run for very little money, and one person had to be able to operate it.

## Constraints

The rules every design had to follow:

- **A guess must never cost anyone money.** A wrong credit pays the wrong referrer. Exact signals have to win outright, and a guessed match has to know when it isn't sure.
- **Privacy that passes App Store review.** Apple's rules forbid identifying a device from its data, even with the user's consent. That rules out raw IPs as matching keys, hardware identifiers, and advertising IDs joined to device data.
- **One person runs it.** No queue service, analytics warehouse or second database to set up, patch and pay for. I would be on call for every moving part, so there are as few as possible.
- **Two SDKs, one behaviour.** A Flutter app and a React Native app must get the same result from the same tap. Two codebases that drift apart produce bugs.
- **Cheap at scale.** The big attribution vendors charge per attributed install, which is what makes them expensive. The cost per tap had to be low enough to charge by monthly active users instead.

## My Ownership

DecTog has one engineer, so I own all of it. Every commit in the server repository and both SDK repositories is mine.

- **The server.** A TypeScript Cloudflare Worker (Hono) on a D1 database. It holds the REST API, the redirect engine, install attribution, Apple Search Ads resolution, fraud rules, webhooks, rate limiting and the scheduled jobs.
- **The SDKs.** `flutter_dectog` (Dart) and `react-native-dectog` (TypeScript, Expo-compatible), plus the shared Kotlin and Swift code underneath both.
- **The dashboard and website.** A Next.js app, exported as static files and served by the same Worker.
- **The documentation.** [docs.dectog.com](https://docs.dectog.com/), including a public log of design decisions and a page that lists what DecTog does not do.
- **The first production integration.** iStoria's referral program, from the SDK call in the app to the webhook that grants the reward.

## Architecture

### One Worker, one database

The whole service is one Cloudflare Worker and one D1 (SQLite) database. The Worker handles link taps on `<username>.dectog.com`, the SDK API under `/api/v1`, the dashboard API, the AASA and `assetlinks.json` files, and an MCP server at `/mcp`. It also serves the dashboard, which is a static Next.js export. Two scheduled jobs do the rest: a daily cleanup, and an hourly job that retries webhooks and Apple Search Ads tokens and builds the daily totals.

### Routing a tap

If the app is installed, a tap opens it through App Links or Universal Links, the Android intent fallback, or a custom URL scheme. If it isn't, the tap goes to the right store: the App Store, Google Play, Huawei AppGallery, Galaxy Store, Xiaomi GetApps or vivo. On Android, the click ID travels inside the store's install referrer. On iOS, an optional tap-to-store page copies the link to the clipboard first.

### Attribution: exact signals first, then a scored match

On first launch the SDK registers the install once, with an ID that makes retries safe. It sends every exact signal it can collect.

1. **Exact signals win.** These are the store install referrer carrying the click ID, Meta's on-device referrer, the link copied to the iOS clipboard, and the Apple Search Ads token, which the server checks with Apple. If one of these arrives late, for example because the store answered after first launch, the SDK sends it as a claim and the server upgrades the stored result.
2. **Otherwise, a scored match.** Only when no exact signal names a click does the server compare the install with the app's recent mobile web clicks. It uses a salted IP hash, device model, OS version, language and screen. It looks back 24 hours, or 2 hours when the device model is missing or the phone is on mobile data.
3. **Credit is separate from routing.** A high-confidence match gets the credit. A medium-confidence match only tells the app which screen to open. If the best matches point to different links, nobody gets credit.

### The referral flow in the app

The SDK side of iStoria's referral program is two calls:

```dart
// The inviter: one stable link per user, created with the app's SDK key.
final link = await dectog.createReferralLink(customerId: currentUser.id);
share(link.url);

// The invited friend, at sign-up. The server records the referral from the
// link the install was credited to, so a modified app can't claim a reward.
await dectog.identify(customerId: newUser.id);
```

The reward is never granted from the app. It comes from the signed `referral.converted` webhook, which the server sends only for a credited install.

### Results decided once, at write time

The server decides attribution when the install arrives and stores the result. Per-link totals go into daily summary tables in the same D1 database. There is no row per impression, no recomputed view, and no separate analytics database. Raw rows are deleted after the retention window (400 days by default), once the daily totals cover them.

### One contract, three codebases

Every API route is declared once, in one table. The OpenAPI spec and the route list are generated from it, and a test fails if a route and the table disagree. The server's API responses are saved as test files, and both SDK repositories keep synced copies. A separate file of test cases pins down how attribution behaves.

Each SDK keeps its logic in its own language on top of one shared native layer. That layer is Kotlin and Swift code for the store referrers, the clipboard and the Keychain ID, written once. The React Native repository copies it, and its CI fails on any difference. The React Native port took about 4,000 lines of TypeScript and a 400-line bridge, with no native code of its own.

## Results

### Product outcome

- **iStoria's referral program runs on DecTog in production.** It covers personal referral links, referrals recorded on the server, and signed webhooks that grant free premium days. Self-referrals from the inviter's own device or network are flagged.
- **About $5 a month on Cloudflare at a million taps a month**, worked out from measured per-operation row costs, plus any storage beyond 5 GB. Per-install pricing is what makes the big attribution vendors expensive at the same traffic.
- **2–5 ms of median CPU time** for taps, pings, events and dashboard calls in production, and about 10 ms for an install.

## Engineering Lessons

- **Keep credit separate from routing.** This was the most useful idea in the project. A user deserves to land on the right screen even when no link deserves the credit.
- **Write down what you rejected.** A decision log that records the rejected options makes the next change cheaper. The reason a design was rejected is the first thing to check before bringing it back.
- **Make cost a test.** D1 bills by rows read and written. A test that fails when an operation touches more rows means cost problems show up in code review, not on the invoice.
- **Share test cases, not wrappers.** Two SDKs written in their own languages and checked against one set of test cases beat one native SDK wrapped twice. A fix ships once per SDK, and each test suite tests real logic instead of a bridge.

## Links

- [Visit DecTog](https://dectog.com/)
- [Documentation](https://docs.dectog.com/)
- [iStoria customer story](https://dectog.com/customers/istoria)

---

By Abdelrahman Saed — <https://bnsaed.com/>. All case studies: <https://bnsaed.com/case-studies/>
