---
title: "Scaling iStoria: Offline-First Architecture for 5M+ Learners — Offline-first Flutter architecture behind story-based English learning for 5M+ learners"
slug: istoria
date: 2026-06-29
dateModified: 2026-08-31
readTime: 9 min read
tags: [Flutter, EdTech, Offline-first, Architecture, Scale]
author: Abdelrahman Saed
url: https://bnsaed.com/case-studies/istoria
---

# Scaling iStoria: Offline-First Architecture for 5M+ Learners — Case Study

Offline-first Flutter architecture behind story-based English learning for 5M+ learners

**Role:** Founding → Lead Mobile Engineer · **Timeline:** 2022 — Present · **Platforms:** iOS, Android

How I scaled iStoria to 5M+ learners — offline-first sync with conflict resolution, weekly releases, and 99.9% crash-free held at scale.

## Key metrics

- **5M+** — Learners reached
- **99.9%** — Crash-free sessions
- **50+** — Feature modules
- **800+** — PRs merged
- **75%** — Shorter release cycle
- **40K+** — Abuse accounts blocked

## Context

iStoria teaches English through short, narrated stories — listening, reading, and speaking practice wrapped in a streak-driven learning loop. Today it serves **5M+ learners across iOS and Android**.

I joined as the founding mobile engineer in 2022 and have owned the app the whole way from founding-stage build to a platform serving millions: I designed the architecture, built the offline-first data layer, ran the release process — and since June 2025 I lead the four-engineer iOS/Android squad that ships it.

This study is the honest account of that arc: what the product needed, what I personally owned, the decisions that got us here, the trade-offs they cost, and the numbers that came out the other end.

## The Challenge

The job was never a single feature. It was an architecture that could hold a demanding set of requirements *at once* — offline access, real-time audio, a fast release cadence, content protection, and a codebase a small team could keep moving in — and keep getting *faster* as it grew.

Get the platform right and every feature after it ships cheaply; get it wrong and the whole thing calcifies. The constraints below shaped every decision that followed.

## Constraints

Before any architecture, the non-negotiables the mobile app had to satisfy simultaneously:

- **Offline-first, not offline-tolerant.** Many learners study on unreliable or metered connections. Lessons, progress, and audio had to be available offline and reconcile cleanly the moment a device reconnected — never a spinner on a learner's own progress.
- **A 99.9% crash-free bar, held while shipping weekly.** A paying, education-focused audience won't forgive instability, and the roadmap demanded frequent releases. Stability and velocity had to hold *together*, not trade against each other.
- **Real-time audio at the center.** Story playback, text-to-speech, and "Read-with" speech recognition *are* the product — the data and rendering layers had to keep an audio loop responsive, not treat it as a side feature.
- **A small squad against a large surface.** Four engineers owning 50+ modules and 140+ routes meant the architecture itself had to keep everyone fast — consistency enforced by structure, not willpower.
- **Protect subscription revenue without punishing honest learners.** Piracy and account abuse threaten the catalog that funds the product; the defense had to stay invisible to legitimate users.

## My Ownership

What *I* personally owned across this arc — separate from what the product achieved. The distinction matters at this scale: outcomes below are the squad's; the rails they run on are mine.

- **Architecture direction.** I designed — and still own — the Clean Architecture, feature-modular layout: 50+ feature modules behind 140+ routes, and the `DataSource → Repository → Cubit` convention every feature follows.
- **The offline-first data layer.** I designed the PowerSync + Drift infrastructure: selective per-key sync, conflict resolution, and the schema-migration strategy serving millions of accounts. The deep dive is [Offline-First Flutter at 5M Learners](/case-studies/offline-first-sync/).
- **Release governance and CI/CD.** I own the pipeline end to end — trunk-based development, feature flags, 14 CI/CD workflows — and cut the release cycle from four weeks to one. The mechanics are in [From Four-Week Releases to Weekly](/case-studies/release-engineering/).
- **The performance program.** I drove the sustained work that took ~35% off cold start, ~60% off rendering, and ~20% off memory, tracked release-over-release through Sentry.
- **Team leadership.** Since June 2025 I lead the 4-engineer iOS/Android squad — architecture direction, the hiring bar, release governance, and quarterly roadmaps for the 5M+ user base.
- **Security.** I architected the cross-platform anti-piracy system (jailbreak / root / tamper detection plus backend behavioral analysis) and hardened the app end to end: PII masked in logs and Sentry, cleartext traffic disabled, TLS certificate validation enforced.

## Architecture

### The platform

I designed iStoria on **Clean Architecture with a feature-modular Flutter codebase** — today **50+ feature modules** behind **140+ routes** — so a small team works in isolation and the app stays navigable as it grows. Four bets carry the platform:

- **Offline-first by default.** A **PowerSync + Drift** data layer keeps a local SQLite mirror in sync with the backend, with selective per-key sync and conflict resolution, so learners never wait on the network for their own progress.
- **Reactive presentation with BLoC/Cubit.** State is modeled explicitly per feature through a `DataSource → Repository → Cubit` flow, with `Either<Failure, T>` error handling so failures are values the UI renders rather than exceptions that crash it.
- **A pipeline built for weekly shipping.** Trunk-based development, feature flags, and end-to-end CI/CD took the release cycle from **four weeks to one** — across **800+ merged PRs** — without lowering the crash-free bar.
- **Security as a first-class feature.** A cross-platform anti-piracy system plus hardened logging and transport protect both the catalog and learner data.

On top of that platform the squad ships the features learners actually touch — daily **streaks**, a social **Leaderboard**, friend **referrals**, the **iStro** AI chat companion, AI **"Read-with"** speech practice, home-screen **widgets**, **dark mode**, and a steady stream of **subscription and paywall experiments**.

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

## Trade-offs

None of the bets above were free. The ones worth documenting:

- **Selective per-key sync over whole-database sync.** Syncing only the keys a learner actually needs keeps the local database small and saves bandwidth and battery — at the price of a more complex sync contract: per-key replication rules and PowerSync view migrations the team has to understand. Whole-database sync would have been simpler to build and costlier forever.
- **Modularity over build simplicity.** 50+ feature modules add tooling and boundary-discipline overhead — CI quality gates, review conventions, module scaffolding. The payoff is four engineers moving in parallel without stepping on each other, and a codebase where an unfamiliar module is readable in seconds. "Consistency beats cleverness" is the operating rule that makes the trade worth it.
- **Trunk-based + flags over long-lived branches.** Continuous integration is what made weekly releases safe, but it moves the risk into flag hygiene: every dark-shipped feature must be deliberately ramped or killed. A misconfigured flag replaces the merge conflict — rarer, but higher-stakes.
- **Weekly cadence as a stability investment.** The automation that made weekly shipping possible — branch protection, auto-rebasing bots, generated QA reports — took real engineering time that could have gone to features. It repaid itself: 350+ releases at a 99.9% crash-free rate, with velocity and stability holding together instead of trading off.

## Results

### Product outcome

- **5M+ learners** on iOS and Android, at a **99.9% crash-free** rate.
- **800+ merged PRs**, **350+ production releases**, and the release cycle cut **from four weeks to one**.
- **40,000+ abusive accounts auto-blocked** by the cross-platform anti-piracy system (jailbreak / root / tamper detection plus backend behavioral analysis), protecting subscription revenue.
- A sustained performance program: **~35% faster cold start**, **~60% rendering improvement**, and **~20% lower memory** — kept large stories and long sessions stable on low-end devices.
- A run of growth and AI features shipped end-to-end — daily **streaks**, a social **Leaderboard** with sharing, friend **referrals**, the **iStro** AI chat companion, AI **"Read-with"** speech practice, home-screen **widgets**, **dark mode**, quizzes, and an ongoing program of **subscription and paywall experiments**.

### My contribution

I designed the architecture and own it still. I built the offline-first data layer, the release pipeline, and the anti-piracy system; I drove the performance program behind the three numbers above; and I lead the four-engineer squad that ships all of it. The outcomes ran on rails I laid and maintain.

> **Impact measurement:** production crash telemetry (Sentry, release-over-release) and CI/CD delivery records (GitHub Actions — release counts, cycle time, merged PRs).

## Engineering Lessons

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
