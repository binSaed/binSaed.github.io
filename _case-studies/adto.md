---
title: "AdTo: Deferred Deep Linking and Attribution, Built Solo — Deep links and install attribution for Flutter and React Native apps, built by one engineer."
slug: adto
date: 2026-11-01
dateModified: 2026-11-15
readTime: 8 min read
tags: [Deep Linking, Install Attribution, TypeScript, Flutter, React Native]
author: Abdelrahman Saed
url: https://bnsaed.com/case-studies/adto
---

# AdTo: Deferred Deep Linking and Attribution, Built Solo — Case Study

Deep links and install attribution for Flutter and React Native apps, built by one engineer.

**Role:** Creator & sole engineer · **Timeline:** 2026 — Present · **Platforms:** iOS, Android

How I built AdTo alone: deferred deep linking and install attribution for Flutter and React Native apps, with credit for an install kept separate from routing.

## Context

AdTo is deep linking, deferred deep linking and install attribution for Flutter and React Native apps. A tap on an AdTo link opens the installed app on the screen the link points to. If the app isn't installed, the tap goes through the right app store, and AdTo tries to carry that screen through the install to the first launch. When the evidence is strong enough, the install is credited to the link that brought it, and so are the app's later events and revenue. When it isn't, the new user can still land on the right screen while no link gets the credit.

I built it alone in 2026, alongside my day job leading mobile at iStoria. The reason was close to home: iStoria was paying thousands of dollars a year for its referral tracking, and Firebase Dynamic Links, the free option many Flutter apps relied on, had been shut down.

iStoria's referral program now runs on AdTo. Each learner shares one personal link. When an invited friend signs up from an install credited to that link, a signed webhook tells iStoria to grant the inviter free premium days. The customer's side of that story is on [adto.app](https://adto.app/customers/istoria). This study is the builder's side: the architecture, the attribution logic, and the alternatives I rejected along the way.

## Results

- **iStoria's referral program runs on AdTo in production.** It covers personal referral links, referrals recorded on the server, and signed webhooks that grant free premium days. Self-referrals from the inviter's own device or network are flagged.
- **iStoria's referral tracking cost fell from thousands of dollars a year to a few dollars a year.** The old bill is the reason AdTo exists.
- **Every install says why it was credited.** The dashboard lists each install with how it was matched, its confidence and the fraud checks it passed or tripped, so a disputed referral can be checked.

## The Challenge

Deferred deep linking looks like a redirect, but the hard part is matching three separate moments. The tap happens in a browser. The install happens in an app store AdTo never sees. The first launch can come minutes or hours later, in an app that knows nothing about the tap. Connecting those three moments is the whole product.

Every way of connecting them has a cost. The exact signals exist on only some platforms. The fallback is a guess. And the guesses that work best are the ones Apple's rules and EU privacy law forbid.

It also had to run for very little money, and one person had to be able to operate it.

## Constraints

The rules every design had to follow:

- **Keep false credit rare, and visible.** A wrong credit pays the wrong referrer. Exact signals win outright. A scored match earns credit only at high confidence, and a tie between links credits nobody. A confident match is still a guess, so every install records how it was matched and why it was credited.
- **Privacy first, with the risk stated.** Apple's rules forbid identifying a device from its data, even with the user's consent. Matching never uses a raw IP, a hardware identifier or an advertising ID: the core SDK doesn't read advertising IDs, the server compares only a salted IP hash, and nothing is matched across accounts. The scored match still compares device traits, so the docs say plainly that it carries App Store review risk, point iOS apps to the exact signals instead, and let an app turn the scored match off.
- **One person runs it.** No queue service, analytics warehouse or second database to set up, patch and pay for. I would be on call for every moving part, so there are as few as possible.
- **Two SDKs, one behaviour.** A Flutter app and a React Native app must get the same result from the same tap. Two codebases that drift apart produce bugs.
- **Cheap at scale.** The big attribution vendors charge per attributed install, which is what makes them expensive. The cost per tap had to be low enough to charge by monthly active users instead.

## My Ownership

AdTo has one engineer. Every commit in the server and both SDK repositories is mine:

- **The server.** The API, the redirect engine, install attribution, Apple Search Ads resolution, fraud rules, webhooks and the scheduled jobs, in TypeScript.
- **The SDKs.** `flutter_adto` and `react-native-adto` (Expo-compatible), on one shared Kotlin and Swift layer.
- **Everything around them.** The dashboard and website, [the documentation](https://docs.adto.app/) with its public decision log, and iStoria's integration from the SDK call to the webhook that grants the reward.

## Architecture

### One service, one database

AdTo is one TypeScript service (Hono) and one database. The service handles link taps on `<username>.adto.app`, the SDK API under `/api/v1`, the dashboard API, the AASA and `assetlinks.json` files, and an MCP server at `/mcp`. It also serves the dashboard, which is a static Next.js export. Two scheduled jobs do the rest: a daily cleanup, and an hourly job that retries webhooks and Apple Search Ads tokens and builds the daily totals.

### Routing a tap

If the app is installed, a tap opens it through App Links or Universal Links, the Android intent fallback, or a custom URL scheme. If it isn't, the tap goes to the right store: the App Store, Google Play, Huawei AppGallery, Galaxy Store, Xiaomi GetApps or vivo. On Android, the click ID travels inside the store's install referrer. On iOS, an optional tap-to-store page copies the link to the clipboard first.

### Attribution: exact signals first, then a scored match

On first launch the SDK registers the install once, with an ID that makes retries safe. It sends every exact signal it can collect.

1. **Exact signals win.** These are the store install referrer carrying the click ID, Meta's on-device referrer, the link copied to the iOS clipboard, and the Apple Search Ads token, which the server checks with Apple. If one of these arrives late, for example because the store answered after first launch, the SDK sends it as a claim and the server upgrades the stored result.
2. **Otherwise, a scored match.** Only when no exact signal names a click does the server look at the app's recent mobile web clicks from the same salted IP hash and device family. It scores each one on device model, OS version, language and screen. It looks back 24 hours, or only 2 hours when the phone is on mobile data or when neither the device model nor the screen size can be compared.
3. **Credit is separate from routing.** A unique best match with enough agreeing signals is high confidence: it gets the credit and opens the screen. A match with too little to back it up is medium confidence, and only tells the app which screen to open. If the best matches point to different links and score too close to separate, nobody gets the credit or the routing.

### The referral flow in the app

The SDK side of iStoria's referral program is two calls:

```dart
// The inviter: one stable link per user, created with the app's SDK key.
final link = await adto.createReferralLink(customerId: currentUser.id);
share(link.url);

// The invited friend, at sign-up. The server records the referral from the
// link the install was credited to, so a modified app can't claim a reward.
await adto.identify(customerId: newUser.id);
```

The reward is never granted from the app. It comes from the signed `referral.converted` webhook, which the server sends only for a credited install.

### Results decided once, at write time

The server decides attribution when the install arrives and stores the result. Per-link totals go into daily summary tables in the same database. There is no row per impression, no recomputed view, and no separate analytics database. Raw rows are deleted after the retention window (400 days by default), once the daily totals cover them.

### One contract, three codebases

Every API route is declared once, in one table. The OpenAPI spec and the route list are generated from it, and a test fails if a route and the table disagree. The server's API responses are saved as test files, and both SDK repositories keep synced copies. A separate file of test cases pins down how attribution behaves.

Each SDK keeps its logic in its own language on top of one shared native layer. That layer is Kotlin and Swift code for the store referrers, the clipboard and the Keychain ID, written once. The React Native repository copies it, and its CI fails on any difference. The React Native port took about 4,000 lines of TypeScript and a 400-line bridge, with no native code of its own.

## Trade-offs

Two places where I turned down the safer-looking option, and what that cost.

### Crediting a confident guess

**The alternative:** credit only exact signals, and never pay a referrer for a scored match.

**Why I rejected it:** on iOS, an install with no copied link and no Apple Search Ads token has no exact signal at all. Exact-only credit would leave every one of those referrals unpaid, and the inviter would see a friend who joined and no reward.

**The cost I accepted:** a high-confidence match is still a guess, and two phones of the same model on one Wi-Fi network can fool it. Three limits keep it in check: a tie between links credits nobody, an app can stop installs that trip its fraud rules from earning credit, and an app that can't accept the risk can turn the scored match off and keep exact signals only.

### Webhook retries without a queue

**The alternative:** a managed message queue for failed webhook deliveries, which would retry within a minute.

**Why I rejected it:** it's one more service to set up, watch and pay for on every deployment, and one person runs AdTo.

**The cost I accepted:** a failed delivery waits in a database table for the hourly job, which sends up to 300 retries a run. A retry due five minutes later goes out at the next hourly run instead. The decision log says when to revisit this: when a receiver's backlog outgrows 300 an hour.

## Engineering Lessons

- **Keep credit separate from routing.** This was the most useful idea in the project. A user deserves to land on the right screen even when no link deserves the credit.
- **Write down what you rejected.** A decision log that records the rejected options makes the next change cheaper. The reason a design was rejected is the first thing to check before bringing it back.
- **Make cost a test.** Database cost follows the rows each operation reads and writes. A test counts them and fails when an operation touches more, so cost problems show up in code review, not on the invoice.
- **Share test cases, not wrappers.** Two SDKs written in their own languages and checked against one set of test cases beat one native SDK wrapped twice. A fix ships once per SDK, and each test suite tests real logic instead of a bridge.

## Links

- [Visit AdTo](https://adto.app/)
- [Documentation](https://docs.adto.app/)
- [iStoria customer story](https://adto.app/customers/istoria)

---

By Abdelrahman Saed — <https://bnsaed.com/>. All case studies: <https://bnsaed.com/case-studies/>
