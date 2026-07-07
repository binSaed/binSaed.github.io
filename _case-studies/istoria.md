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

How I took iStoria from founding to 5M+ learners — an offline-first Flutter architecture, a release cycle cut from four weeks to one, and 99.9% crash-free at scale.

## Key metrics

- **5M+** — Learners reached
- **99.9%** — Crash-free sessions
- **50+** — Feature modules
- **800+** — PRs merged
- **75%** — Shorter release cycle
- **40K+** — Abuse accounts blocked

## The Problem

iStoria teaches English through short, narrated stories. I joined as the founding mobile engineer and now lead the squad — which meant owning the mobile app the whole way from a founding-stage build to **5M+ learners across iOS and Android**.

The job was never a single feature. It was an architecture that could hold a demanding set of requirements *at once* — offline access, real-time audio, a fast release cadence, content protection, and a codebase a small team could keep moving in — and keep getting *faster* as it grew. Get the platform right and every feature after it ships cheaply; get it wrong and the whole thing calcifies. The constraints below shaped every decision that followed.

## Constraints

Before any architecture, the non-negotiables the mobile app had to satisfy simultaneously:

- **Offline-first, not offline-tolerant.** Many learners study on unreliable or metered connections. Lessons, progress, and audio had to be available offline and reconcile cleanly the moment a device reconnected — never a spinner on a learner's own progress.
- **A 99.9% crash-free bar, held while shipping weekly.** A paying, education-focused audience won't forgive instability, and the roadmap demanded frequent releases. Stability and velocity had to hold *together*, not trade against each other.
- **Real-time audio at the center.** Story playback, text-to-speech, and "Read-with" speech recognition *are* the product — the data and rendering layers had to keep an audio loop responsive, not treat it as a side feature.
- **A small squad against a large surface.** Four engineers owning 50+ modules and 140+ routes meant the architecture itself had to keep everyone fast — consistency enforced by structure, not willpower.
- **Protect subscription revenue without punishing honest learners.** Piracy and account abuse threaten the catalog that funds the product; the defense had to stay invisible to legitimate users.

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
- **40,000+ abusive accounts auto-blocked** by the cross-platform anti-piracy system (jailbreak / root / tamper detection plus backend behavioral analysis), protecting subscription revenue.
- A run of growth and AI features shipped end-to-end — daily **streaks**, a social **Leaderboard** with sharing, friend **referrals**, the **iStro** AI chat companion, AI **"Read-with"** speech practice, home-screen **widgets**, **dark mode**, quizzes, and an ongoing program of **subscription and paywall experiments**.

I grew from founding mobile engineer into leading a four-engineer iOS/Android squad that owns architecture, release governance, and the roadmap for the entire 5M+ user base.

## Lessons Learned

What held up under load — and what I'd weigh differently next time:

- **Offline-first is an architecture decision, not a feature.** Committing to local-first reads up front meant every feature inherited offline support for free. Retrofitting it later would have touched every data path in the app.
- **Consistency beats cleverness at 50+ modules.** One predictable `DataSource → Repository → Cubit` shape, applied everywhere, makes an unfamiliar module readable in seconds — worth more than any locally-optimal design only its author understands.
- **Failures as values paid for themselves.** Modeling every repository as `Either<Failure, T>` turned a whole class of "forgot to handle the error path" bugs into compile-time forks — a real part of holding 99.9% crash-free.
- **Release cadence is a force multiplier.** Cutting the cycle from four weeks to one didn't just ship features faster; it changed how the team plans — smaller, safer changes and much faster feedback.
- **What I'd do earlier:** invest in the module boundaries and CI quality gates from day one. Entropy compounds, and the cost of adding guardrails rises with every module you add before them.

## Links

- [Visit iStoria](https://istoria.app/en/)

---

By Abdelrahman Saed — <https://bnsaed.com/>. All case studies: <https://bnsaed.com/case-studies/>
