---
title: iStoria — Scaling story-based English learning to 5M+ learners
slug: istoria
date: 2026-06-29
readTime: 8 min read
tags: [Flutter, EdTech, Offline-first, Architecture, Scale]
author: Abdelrahman Saed
url: https://bnsaed.com/case-studies/istoria
---

# iStoria — Case Study

Scaling story-based English learning to 5M+ learners

**Role:** Founding → Lead Mobile Engineer · **Timeline:** 2022 — Present · **Platforms:** iOS, Android

How I helped take iStoria from founding to 5M+ learners — an offline-first Flutter architecture across a 50+ module codebase, growth features from streaks and a social leaderboard to the iStro AI companion, and a release cycle cut from four weeks to one across 800+ merged PRs.

## Key metrics

- **5M+** — Learners reached
- **99.9%** — Crash-free sessions
- **50+** — Feature modules
- **800+** — PRs merged
- **75%** — Shorter release cycle
- **30K+** — Abuse accounts blocked

## The Problem

iStoria teaches English through short, narrated stories. To make that work for **5M+ learners across iOS and Android**, the mobile app had to clear several hard constraints at once:

- **Work offline, everywhere.** Many learners study on unreliable or metered connections. Lessons, progress, and audio had to be available offline and reconcile cleanly the moment a device came back online.
- **Rich audio and speech loops.** Story playback, text-to-speech, and "Read-with" speech recognition put real-time audio at the center of the product — not as an afterthought.
- **Ship fast without breaking trust.** A growing catalog and an ambitious roadmap meant frequent releases, held against a crash-free bar that protects a paying, education-focused audience.
- **Protect premium content.** Subscriptions fund the catalog, so the app had to resist piracy and account abuse without punishing legitimate learners.
- **Stay shippable as it grows.** A founding-stage app had to scale into a large codebase that a small squad could still move quickly in.

The job was never a single feature — it was an architecture that could hold all of this at once and keep getting faster as it grew.

## The Solution

We built iStoria on **Clean Architecture with a feature-modular Flutter codebase** — today **50+ feature modules** behind **140+ routes** — so teams work in isolation and the app stays navigable as it grows.

The core bets:

- **Offline-first by default.** A **PowerSync + Drift** data layer keeps a local SQLite mirror in sync with the backend, with selective per-key sync and conflict resolution, so learners never wait on the network for their own progress.
- **Reactive presentation with BLoC/Cubit.** State is modeled explicitly per feature through a `DataSource → Repository → Cubit` flow, with `Either<Failure, T>` error handling so failures are values the UI renders rather than exceptions that crash it.
- **A pipeline built for weekly shipping.** Trunk-based development, feature flags, and end-to-end CI/CD took the release cycle from **four weeks to one** — across **800+ merged PRs** — without lowering the crash-free bar.
- **Security as a first-class feature.** A cross-platform anti-piracy system plus hardened logging and transport protect both the catalog and learner data.

On top of that platform I shipped the features learners actually touch — daily **streaks**, a social **Leaderboard**, friend **referrals**, the **iStro** AI chat companion, AI **"Read-with"** speech practice, home-screen **widgets**, **dark mode**, and a steady stream of **subscription and paywall experiments**. The rest of this case study walks through how the platform makes that pace possible.

## Architecture

### Layering

Every feature follows the same path, which keeps the codebase predictable at 50+ modules:

```dart
// DataSource → Repository → Cubit, with failures as values (dartz Either).
class StoriesRepository {
  StoriesRepository(this._remote, this._local);

  final StoriesRemoteDataSource _remote;
  final StoriesLocalDataSource _local;

  Future<Either<Failure, List<Story>>> fetchStories() async {
    try {
      final stories = await _local.cachedStories(); // offline-first read
      unawaited(_remote.refreshInBackground());      // sync, never blocks UI
      return Right(stories);
    } on CacheException catch (e) {
      return Left(CacheFailure(e.message));
    }
  }
}
```

The presentation layer consumes repositories through Cubits, so widgets stay declarative and every async path resolves to a `Left` (failure) or `Right` (data) the UI can render.

### Offline-first data

The data layer pairs **PowerSync** (streaming sync against the backend) with **Drift** (typed local SQLite). Reads are served locally first; sync runs in the background with selective per-key replication and conflict resolution. Because PowerSync exposes its tables as **views**, schema changes ship as versioned migrations that drop and recreate views rather than tables.

### Audio & speech

The learning loop is audio-heavy: `just_audio` for story playback, `flutter_tts` for text-to-speech, and speech recognition powering the AI **"Read-with"** experience, with `media_kit` handling video. Keeping this stack responsive drove much of the performance work below.

### Monetization, analytics & experimentation

Subscriptions run through **RevenueCat**, behind a paywall that is constantly A/B-tested — family plans, returning-user redesigns, and trial and pricing variants — gated by **GrowthBook** feature flags so experiments ship dark and ramp safely. Product and stability signals fan out to Firebase, Adjust, Sentry, and Clarity. The app builds in multiple flavors (development / staging / production), so one pipeline ships the same codebase to internal and store channels.

## Performance

Performance was a standing program, not a one-off cleanup. Three numbers tracked the work:

- **~35% faster cold start** — deferred and lazy initialization moved non-critical work off the launch path, so the app reaches first meaningful content sooner.
- **~60% rendering improvement** — `const` widgets, tighter rebuild scoping, and list/image optimizations cut wasted frames on the audio and catalog screens.
- **~20% lower memory** — trimming retained objects and streaming heavy media kept large stories and long sessions stable on low-end devices.

Stability held the line throughout: a **99.9% crash-free** rate, watched through Sentry with fast triage so regressions are caught release-over-release rather than in store reviews.

## Results

The architecture paid off where it counts — in reach, stability, shipping speed, and the breadth of what a small team could ship:

- **5M+ learners** on iOS and Android, at a **99.9% crash-free** rate.
- **800+ merged PRs**, **350+ production releases**, and the release cycle cut **from four weeks to one**.
- **30,000+ abusive accounts auto-blocked** by the cross-platform anti-piracy system (jailbreak / root / tamper detection plus backend behavioral analysis), protecting subscription revenue.
- A run of growth and AI features shipped end-to-end — daily **streaks**, a social **Leaderboard** with sharing, friend **referrals**, the **iStro** AI chat companion, AI **"Read-with"** speech practice, home-screen **widgets**, **dark mode**, quizzes, and an ongoing program of **subscription and paywall experiments**.

I grew from founding mobile engineer into leading a four-engineer iOS/Android squad that owns architecture, release governance, and the roadmap for the entire 5M+ user base.

## Links

- [Visit iStoria](https://istoria.app/en/)

---

By Abdelrahman Saed — <https://bnsaed.com/>. All case studies: <https://bnsaed.com/case-studies/>
