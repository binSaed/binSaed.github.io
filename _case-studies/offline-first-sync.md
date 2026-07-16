---
title: Offline-First Flutter at 5M Learners — A local-first Flutter data layer — Drift, PowerSync, and a custom offline write queue — so learners never wait on the network.
slug: offline-first-sync
date: 2026-06-29
readTime: 6 min read
tags: [Flutter, Offline-first, PowerSync, Drift, Architecture]
author: Abdelrahman Saed
url: https://bnsaed.com/case-studies/offline-first-sync
---

# Offline-First Flutter at 5M Learners — Case Study

A local-first Flutter data layer — Drift, PowerSync, and a custom offline write queue — so learners never wait on the network.

**Role:** Founding → Lead Mobile Engineer · **Timeline:** 2022 — Present · **Platforms:** iOS, Android

How iStoria's Flutter app stays fully usable offline: local-first reads from Drift, PowerSync streaming sync, and an offline write queue replayed on reconnect.

## Key metrics

- **5M+** — Learners, offline-capable
- **99.9%** — Crash-free sessions
- **Local-first** — Every read
- **iOS + Android** — One data layer
- **Queued** — Offline writes, replayed
- **10+** — Synced local tables

## The Problem

iStoria's learners study on the move — commutes, spotty Wi-Fi, metered data, planes. For a learning app, the worst possible moment to stall is when someone opens it to continue a lesson and the screen spins waiting on a network round-trip to fetch *their own progress*.

So "works offline" was never a feature to bolt on at the end. For 5M+ learners across iOS and Android, the app had to treat the network as something that *reconciles* state in the background — not something the UI blocks on — and do that without losing a single completed chapter when a device drops offline mid-session and comes back an hour later.

## Constraints

The hard requirements the data layer had to satisfy at once:

- **Offline-first, not offline-tolerant.** Reads of a learner's own data — chapters done, stages, streaks, level progress — must resolve *instantly* from the device, never from the network.
- **Writes must survive going offline.** Finishing a chapter on the subway can't be lost; the write has to persist locally and replay when connectivity returns.
- **Reconcile without data loss.** When an account syncs from two states, the merge has to be deterministic — no silently overwritten progress.
- **Never leak credentials to disk.** A queued offline request persisted to storage must not carry an auth token in plaintext.
- **Hold at millions.** Whatever the design, it had to stay stable at 5M+ accounts without turning the local database into a liability.

## The Solution

The app is **local-first**: the source of truth the UI reads is a database *on the device*, and the network's job is to keep that database in sync in the background.

Three pieces carry it:

- **Drift** (typed, code-generated SQLite) holds the structured learner state — chapters done, chapters in progress, stages, levels, notification state — as real tables the UI reads directly.
- **PowerSync** streams changes between that local database and the backend, so the device converges on the server's state without the app ever awaiting a fetch to render.
- A custom **offline write queue** (a Dio interceptor backed by a local Hive box) captures writes made while offline and replays them automatically on reconnect.

Repositories return `Either<Failure, T>` — failures are values the UI renders, not exceptions that crash it — over a Clean-Architecture data flow (data source → repository → reactive controller), so every offline and online path resolves to something the UI can draw.

## Architecture

### The read path

Every read is served locally first. A repository returns cached data immediately and kicks off a background refresh it does not await, so the UI never blocks on the network — the path the diagram below traces from the widgets down to the backend.

### The offline write queue

Writes are where offline gets hard. Any write that must survive being offline opts in explicitly, and a Dio interceptor takes over when the network is gone: it persists the request to a local Hive box, returns an *optimistic* success so the UI keeps moving, and replays the queue automatically the moment connectivity is restored.

```dart
// A write that must survive being made offline opts in explicitly.
await client.post(url, body: data, queueOffline: true);
// Offline → persisted to a local queue, optimistic success returned,
// then replayed automatically on reconnect.
```

Two details that matter at scale: the queue **strips sensitive headers** (the auth token, API keys) before anything touches disk, so credentials are never persisted in plaintext; and it only queues requests that explicitly opted in, so a failed *read* never silently becomes a phantom *write*.

### Reconciliation

Because reads resolve against the local database and PowerSync reconciles in the background, state converges on reconnect rather than fighting the UI — the "rebuild state on reconnect" idea I dug into in my [offline-first talk](/speaking).

## Performance

The payoff is felt, not benchmarked:

- **No spinner on your own progress.** Opening the app mid-commute shows your chapters, streaks, and stages instantly, because they come from the device.
- **Writes are never lost.** Finish a lesson offline and it's captured locally and synced later — the learner never hits a failure they have to retry.
- **Bandwidth and battery saved.** The app isn't re-fetching state it already has; the network reconciles, it doesn't render.
- **Stable at 5M+.** The local-first design held a 99.9% crash-free rate across millions of accounts on real, unreliable networks.

## Results

- **5M+ learners** on iOS and Android, each fully usable offline, at a **99.9% crash-free** rate.
- Every feature built afterward **inherited offline support for free**, because the read/write plumbing lives in the shared data layer rather than in each screen.
- A single, consistent `Either<Failure, T>` data flow across the app — offline and error states handled by design instead of re-invented per screen.

## Lessons Learned

- **Offline-first is an architecture decision, not a feature.** Committing to local-first reads up front meant every screen inherited it. Retrofitting caching screen-by-screen later would have touched every data path in the app.
- **Make the offline write path explicit.** Opting writes in with a flag — rather than queuing everything — kept the behaviour predictable and stopped failed reads from becoming phantom writes.
- **Never persist credentials to disk.** Stripping the auth token before a queued request is stored is a small, load-bearing detail; an offline queue is an attack surface if you're careless with it.
- **Local-first changes how the UI is written.** Once reads are instant and can't really "fail" the way a network call does, the UI collapses from a minefield of loading and error states into a simple render.

---

By Abdelrahman Saed — <https://bnsaed.com/>. All case studies: <https://bnsaed.com/case-studies/>
