import{v as s,ad as l}from"./index-RxgQQmrs.js";const d=["istoria","offline-first-sync","release-engineering","flutter-cached-pdfview"],c=[{key:"context",label:"Context"},{key:"challenge",label:"The Challenge"},{key:"problem",label:"The Problem"},{key:"constraints",label:"Constraints"},{key:"ownership",label:"My Ownership"},{key:"solution",label:"The Solution"},{key:"architecture",label:"Architecture"},{key:"performance",label:"Performance"},{key:"tradeoffs",label:"Trade-offs"},{key:"results",label:"Results"},{key:"lessons",label:"Engineering Lessons"}],h=["problem","constraints","solution","architecture","performance","results","lessons"];function p(e){return(e.sections||h).map(r=>c.find(a=>a.key===r)).filter(Boolean)}const i=[{slug:"istoria",title:"Scaling iStoria: Offline-First Architecture for 5M+ Learners",seoTitle:"Scaling iStoria: Offline-First Architecture",shortName:"iStoria",sections:["context","challenge","constraints","ownership","architecture","tradeoffs","results","lessons"],subtitle:"Offline-first Flutter architecture behind story-based English learning for 5M+ learners",description:"How I scaled iStoria to 5M+ learners — offline-first sync with conflict resolution, weekly releases, and 99.9% crash-free held at scale.",date:"2026-06-29",dateModified:"2026-08-31",readTime:"9 min read",tags:["Flutter","EdTech","Offline-first","Architecture","Scale"],heroImage:"/project-images/istoria.webp",heroImageWidth:512,heroImageHeight:512,role:"Founding → Lead Mobile Engineer",timeline:"2022 — Present",platforms:["iOS","Android"],links:[{label:"Visit iStoria",url:"https://istoria.app/en/"}],metrics:[{value:"5M+",label:"Learners reached"},{value:"99.9%",label:"Crash-free sessions"},{value:"50+",label:"Feature modules"},{value:"800+",label:"PRs merged"},{value:"75%",label:"Shorter release cycle"},{value:"40K+",label:"Abuse accounts blocked"}],diagrams:{architecture:{id:"istoria-offline-sync",caption:"Offline-first read path — the UI never waits on the network; PowerSync reconciles the local Drift database with the backend in the background."}},context:`iStoria teaches English through short, narrated stories — listening, reading, and speaking practice wrapped in a streak-driven learning loop. Today it serves **5M+ learners across iOS and Android**.

I joined as the founding mobile engineer in 2022 and have owned the app the whole way from founding-stage build to a platform serving millions: I designed the architecture, built the offline-first data layer, ran the release process — and since June 2025 I lead the four-engineer iOS/Android squad that ships it.

This study is the honest account of that arc: what the product needed, what I personally owned, the decisions that got us here, the trade-offs they cost, and the numbers that came out the other end.`,challenge:`The job was never a single feature. It was an architecture that could hold a demanding set of requirements *at once* — offline access, real-time audio, a fast release cadence, content protection, and a codebase a small team could keep moving in — and keep getting *faster* as it grew.

Get the platform right and every feature after it ships cheaply; get it wrong and the whole thing calcifies. The constraints below shaped every decision that followed.`,constraints:`Before any architecture, the non-negotiables the mobile app had to satisfy simultaneously:

- **Offline-first, not offline-tolerant.** Many learners study on unreliable or metered connections. Lessons, progress, and audio had to be available offline and reconcile cleanly the moment a device reconnected — never a spinner on a learner's own progress.
- **A 99.9% crash-free bar, held while shipping weekly.** A paying, education-focused audience won't forgive instability, and the roadmap demanded frequent releases. Stability and velocity had to hold *together*, not trade against each other.
- **Real-time audio at the center.** Story playback, text-to-speech, and "Read-with" speech recognition *are* the product — the data and rendering layers had to keep an audio loop responsive, not treat it as a side feature.
- **A small squad against a large surface.** Four engineers owning 50+ modules and 140+ routes meant the architecture itself had to keep everyone fast — consistency enforced by structure, not willpower.
- **Protect subscription revenue without punishing honest learners.** Piracy and account abuse threaten the catalog that funds the product; the defense had to stay invisible to legitimate users.`,ownership:`What *I* personally owned across this arc — separate from what the product achieved. The distinction matters at this scale: outcomes below are the squad's; the rails they run on are mine.

- **Architecture direction.** I designed — and still own — the Clean Architecture, feature-modular layout: 50+ feature modules behind 140+ routes, and the \`DataSource → Repository → Cubit\` convention every feature follows.
- **The offline-first data layer.** I designed the PowerSync + Drift infrastructure: selective per-key sync, conflict resolution, and the schema-migration strategy serving millions of accounts. The deep dive is [Offline-First Flutter at 5M Learners](/case-studies/offline-first-sync/).
- **Release governance and CI/CD.** I own the pipeline end to end — trunk-based development, feature flags, 14 CI/CD workflows — and cut the release cycle from four weeks to one. The mechanics are in [From Four-Week Releases to Weekly](/case-studies/release-engineering/).
- **The performance program.** I drove the sustained work that took ~35% off cold start, ~60% off rendering, and ~20% off memory, tracked release-over-release through Sentry.
- **Team leadership.** Since June 2025 I lead the 4-engineer iOS/Android squad — architecture direction, the hiring bar, release governance, and quarterly roadmaps for the 5M+ user base.
- **Security.** I architected the cross-platform anti-piracy system (jailbreak / root / tamper detection plus backend behavioral analysis) and hardened the app end to end: PII masked in logs and Sentry, cleartext traffic disabled, TLS certificate validation enforced.`,architecture:`### The platform

I designed iStoria on **Clean Architecture with a feature-modular Flutter codebase** — today **50+ feature modules** behind **140+ routes** — so a small team works in isolation and the app stays navigable as it grows. Four bets carry the platform:

- **Offline-first by default.** A **PowerSync + Drift** data layer keeps a local SQLite mirror in sync with the backend, with selective per-key sync and conflict resolution, so learners never wait on the network for their own progress.
- **Reactive presentation with BLoC/Cubit.** State is modeled explicitly per feature through a \`DataSource → Repository → Cubit\` flow, with \`Either<Failure, T>\` error handling so failures are values the UI renders rather than exceptions that crash it.
- **A pipeline built for weekly shipping.** Trunk-based development, feature flags, and end-to-end CI/CD took the release cycle from **four weeks to one** — across **800+ merged PRs** — without lowering the crash-free bar.
- **Security as a first-class feature.** A cross-platform anti-piracy system plus hardened logging and transport protect both the catalog and learner data.

On top of that platform the squad ships the features learners actually touch — daily **streaks**, a social **Leaderboard**, friend **referrals**, the **iStro** AI chat companion, AI **"Read-with"** speech practice, home-screen **widgets**, **dark mode**, and a steady stream of **subscription and paywall experiments**.

### Layering

Every feature follows the same path, which keeps the codebase predictable at 50+ modules:

\`\`\`dart
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
\`\`\`

The presentation layer consumes repositories through Cubits, so widgets stay declarative and every async path resolves to a \`Left\` (failure) or \`Right\` (data) the UI can render.

### Offline-first data

The data layer pairs **PowerSync** (streaming sync against the backend) with **Drift** (typed local SQLite). Reads are served locally first; sync runs in the background with selective per-key replication and conflict resolution. Because PowerSync exposes its tables as **views**, schema changes ship as versioned migrations that drop and recreate views rather than tables.

### Audio & speech

The learning loop is audio-heavy: \`just_audio\` for story playback, \`flutter_tts\` for text-to-speech, and speech recognition powering the AI **"Read-with"** experience, with \`media_kit\` handling video. Keeping this stack responsive drove much of the performance work below.

### Monetization, analytics & experimentation

Subscriptions run through **RevenueCat**, behind a paywall that is constantly A/B-tested — family plans, returning-user redesigns, and trial and pricing variants — gated by **GrowthBook** feature flags so experiments ship dark and ramp safely. Product and stability signals fan out to Firebase, Adjust, Sentry, and Clarity. The app builds in multiple flavors (development / staging / production), so one pipeline ships the same codebase to internal and store channels.`,tradeoffs:`None of the bets above were free. The ones worth documenting:

- **Selective per-key sync over whole-database sync.** Syncing only the keys a learner actually needs keeps the local database small and saves bandwidth and battery — at the price of a more complex sync contract: per-key replication rules and PowerSync view migrations the team has to understand. Whole-database sync would have been simpler to build and costlier forever.
- **Modularity over build simplicity.** 50+ feature modules add tooling and boundary-discipline overhead — CI quality gates, review conventions, module scaffolding. The payoff is four engineers moving in parallel without stepping on each other, and a codebase where an unfamiliar module is readable in seconds. "Consistency beats cleverness" is the operating rule that makes the trade worth it.
- **Trunk-based + flags over long-lived branches.** Continuous integration is what made weekly releases safe, but it moves the risk into flag hygiene: every dark-shipped feature must be deliberately ramped or killed. A misconfigured flag replaces the merge conflict — rarer, but higher-stakes.
- **Weekly cadence as a stability investment.** The automation that made weekly shipping possible — branch protection, auto-rebasing bots, generated QA reports — took real engineering time that could have gone to features. It repaid itself: 350+ releases at a 99.9% crash-free rate, with velocity and stability holding together instead of trading off.`,results:`### Product outcome

- **5M+ learners** on iOS and Android, at a **99.9% crash-free** rate.
- **800+ merged PRs**, **350+ production releases**, and the release cycle cut **from four weeks to one**.
- **40,000+ abusive accounts auto-blocked** by the cross-platform anti-piracy system (jailbreak / root / tamper detection plus backend behavioral analysis), protecting subscription revenue.
- A sustained performance program: **~35% faster cold start**, **~60% rendering improvement**, and **~20% lower memory** — kept large stories and long sessions stable on low-end devices.
- A run of growth and AI features shipped end-to-end — daily **streaks**, a social **Leaderboard** with sharing, friend **referrals**, the **iStro** AI chat companion, AI **"Read-with"** speech practice, home-screen **widgets**, **dark mode**, quizzes, and an ongoing program of **subscription and paywall experiments**.

### My contribution

I designed the architecture and own it still. I built the offline-first data layer, the release pipeline, and the anti-piracy system; I drove the performance program behind the three numbers above; and I lead the four-engineer squad that ships all of it. The outcomes ran on rails I laid and maintain.

> **Impact measurement:** production crash telemetry (Sentry, release-over-release) and CI/CD delivery records (GitHub Actions — release counts, cycle time, merged PRs).`,lessons:`What held up under load — and what I'd weigh differently next time:

- **Offline-first is an architecture decision, not a feature.** Committing to local-first reads up front meant every feature inherited offline support for free. Retrofitting it later would have touched every data path in the app.
- **Consistency beats cleverness at 50+ modules.** One predictable \`DataSource → Repository → Cubit\` shape, applied everywhere, makes an unfamiliar module readable in seconds — worth more than any locally-optimal design only its author understands.
- **Failures as values paid for themselves.** Modeling every repository as \`Either<Failure, T>\` turned a whole class of "forgot to handle the error path" bugs into compile-time forks — a real part of holding 99.9% crash-free.
- **Release cadence is a force multiplier.** Cutting the cycle from four weeks to one didn't just ship features faster; it changed how the team plans — smaller, safer changes and much faster feedback.
- **What I'd do earlier:** invest in the module boundaries and CI quality gates from day one. Entropy compounds, and the cost of adding guardrails rises with every module you add before them.`},{slug:"offline-first-sync",title:"Offline-First Flutter at 5M Learners",subtitle:"A local-first Flutter data layer — Drift, PowerSync, and a custom offline write queue — so learners never wait on the network.",description:"How iStoria's Flutter app stays fully usable offline: local-first reads from Drift, PowerSync streaming sync, and an offline write queue replayed on reconnect.",date:"2026-06-29",readTime:"6 min read",tags:["Flutter","Offline-first","PowerSync","Drift","Architecture"],role:"Founding → Lead Mobile Engineer",timeline:"2022 — Present",platforms:["iOS","Android"],relatedArticle:{slug:"managing-large-flutter-codebases",title:"Best Practices for Managing Large Flutter Codebases"},diagrams:{architecture:{id:"istoria-offline-sync",caption:"The local-first read path: the UI reads from Drift instantly while PowerSync reconciles with the backend in the background. Writes made offline are queued and replayed on reconnect."}},metrics:[{value:"5M+",label:"Learners, offline-capable"},{value:"99.9%",label:"Crash-free sessions"},{value:"Local-first",label:"Every read"},{value:"iOS + Android",label:"One data layer"},{value:"Queued",label:"Offline writes, replayed"},{value:"10+",label:"Synced local tables"}],problem:`iStoria's learners study on the move — commutes, spotty Wi-Fi, metered data, planes. For a learning app, the worst possible moment to stall is when someone opens it to continue a lesson and the screen spins waiting on a network round-trip to fetch *their own progress*.

So "works offline" was never a feature to bolt on at the end. For 5M+ learners across iOS and Android, the app had to treat the network as something that *reconciles* state in the background — not something the UI blocks on — and do that without losing a single completed chapter when a device drops offline mid-session and comes back an hour later.`,constraints:`The hard requirements the data layer had to satisfy at once:

- **Offline-first, not offline-tolerant.** Reads of a learner's own data — chapters done, stages, streaks, level progress — must resolve *instantly* from the device, never from the network.
- **Writes must survive going offline.** Finishing a chapter on the subway can't be lost; the write has to persist locally and replay when connectivity returns.
- **Reconcile without data loss.** When an account syncs from two states, the merge has to be deterministic — no silently overwritten progress.
- **Never leak credentials to disk.** A queued offline request persisted to storage must not carry an auth token in plaintext.
- **Hold at millions.** Whatever the design, it had to stay stable at 5M+ accounts without turning the local database into a liability.`,solution:`The app is **local-first**: the source of truth the UI reads is a database *on the device*, and the network's job is to keep that database in sync in the background.

Three pieces carry it:

- **Drift** (typed, code-generated SQLite) holds the structured learner state — chapters done, chapters in progress, stages, levels, notification state — as real tables the UI reads directly.
- **PowerSync** streams changes between that local database and the backend, so the device converges on the server's state without the app ever awaiting a fetch to render.
- A custom **offline write queue** (a Dio interceptor backed by a local Hive box) captures writes made while offline and replays them automatically on reconnect.

Repositories return \`Either<Failure, T>\` — failures are values the UI renders, not exceptions that crash it — over a Clean-Architecture data flow (data source → repository → reactive controller), so every offline and online path resolves to something the UI can draw.`,architecture:`### The read path

Every read is served locally first. A repository returns cached data immediately and kicks off a background refresh it does not await, so the UI never blocks on the network — the path the diagram below traces from the widgets down to the backend.

### The offline write queue

Writes are where offline gets hard. Any write that must survive being offline opts in explicitly, and a Dio interceptor takes over when the network is gone: it persists the request to a local Hive box, returns an *optimistic* success so the UI keeps moving, and replays the queue automatically the moment connectivity is restored.

\`\`\`dart
// A write that must survive being made offline opts in explicitly.
await client.post(url, body: data, queueOffline: true);
// Offline → persisted to a local queue, optimistic success returned,
// then replayed automatically on reconnect.
\`\`\`

Two details that matter at scale: the queue **strips sensitive headers** (the auth token, API keys) before anything touches disk, so credentials are never persisted in plaintext; and it only queues requests that explicitly opted in, so a failed *read* never silently becomes a phantom *write*.

### Reconciliation

Because reads resolve against the local database and PowerSync reconciles in the background, state converges on reconnect rather than fighting the UI — the "rebuild state on reconnect" idea I dug into in my [offline-first talk](/speaking).`,performance:`The payoff is felt, not benchmarked:

- **No spinner on your own progress.** Opening the app mid-commute shows your chapters, streaks, and stages instantly, because they come from the device.
- **Writes are never lost.** Finish a lesson offline and it's captured locally and synced later — the learner never hits a failure they have to retry.
- **Bandwidth and battery saved.** The app isn't re-fetching state it already has; the network reconciles, it doesn't render.
- **Stable at 5M+.** The local-first design held a 99.9% crash-free rate across millions of accounts on real, unreliable networks.`,results:"- **5M+ learners** on iOS and Android, each fully usable offline, at a **99.9% crash-free** rate.\n- Every feature built afterward **inherited offline support for free**, because the read/write plumbing lives in the shared data layer rather than in each screen.\n- A single, consistent `Either<Failure, T>` data flow across the app — offline and error states handled by design instead of re-invented per screen.",lessons:`- **Offline-first is an architecture decision, not a feature.** Committing to local-first reads up front meant every screen inherited it. Retrofitting caching screen-by-screen later would have touched every data path in the app.
- **Make the offline write path explicit.** Opting writes in with a flag — rather than queuing everything — kept the behaviour predictable and stopped failed reads from becoming phantom writes.
- **Never persist credentials to disk.** Stripping the auth token before a queued request is stored is a small, load-bearing detail; an offline queue is an attack surface if you're careless with it.
- **Local-first changes how the UI is written.** Once reads are instant and can't really "fail" the way a network call does, the UI collapses from a minefield of loading and error states into a simple render.`},{slug:"release-engineering",title:"From Four-Week Releases to Weekly",subtitle:"Trunk-based development, a self-driving CI/CD pipeline, and feature flags — cutting the release cycle 75% without lowering the crash-free bar.",description:"Flutter release engineering at iStoria: a four-week release cycle cut to one across 350+ releases — trunk-based development, CI/CD automation, feature flags.",date:"2026-06-29",readTime:"7 min read",tags:["Flutter","CI/CD","Release Engineering","GitHub Actions","Feature Flags"],role:"Lead Mobile Engineer",timeline:"2022 — Present",platforms:["iOS","Android"],relatedArticle:{slug:"github-actions-branch-protection-guardrails",title:"The repo that rejects my own pushes to master"},diagrams:{solution:{id:"feature-flag-rollout",caption:"Feature flags decouple deploy from release: a change ships dark, ramps behind a GrowthBook flag, and can be killed instantly — no app-store round-trip."},architecture:{id:"cicd-release-pipeline",caption:"From trunk to store — CI quality gates, three build flavors, feature-flag gating, and staged rollout — kept mergeable by a suite of automation bots."}},metrics:[{value:"75%",label:"Shorter release cycle"},{value:"350+",label:"Production releases"},{value:"900+",label:"PRs reviewed"},{value:"99.9%",label:"Crash-free rate"},{value:"14",label:"CI/CD workflows"},{value:"3",label:"Build flavors"}],problem:`When I joined iStoria the mobile release cycle was **four weeks** long. A growing catalog and an ambitious roadmap needed features in front of learners far faster than that — but the audience is paying and education-focused, so speed could not come at the cost of stability. The 99.9% crash-free bar was non-negotiable.

The usual trap is to treat that as a trade-off: ship fast *or* stay stable. The job was to make them hold *together* — take the cycle from four weeks to one while a small team kept merging into a busy trunk, and keep the crash-free rate exactly where it was.`,constraints:`- **Stability can't drop.** Every acceleration had to preserve the 99.9% crash-free rate — no "move fast and break the paywall."
- **Small team, busy trunk.** A handful of engineers merging constantly means PRs drift out of date, translation files collide, and merge conflicts pile up faster than people can babysit them.
- **Two stores, three environments.** iOS and Android, plus local / staging / production builds — all from one codebase, with no hand-rolled build steps.
- **Manual chores don't scale.** Enforcing branch hygiene, rebasing PRs, chasing stale branches, and compiling release and QA reports by hand is exactly the work that gets skipped under deadline pressure and bites you at the worst time.`,solution:`Three moves turned a four-week cycle into a weekly one.

- **Trunk-based development.** Short-lived branches merge into a protected \`master\` continuously, so integration happens in small, safe increments instead of a big, scary merge every month.
- **Feature flags (GrowthBook) that decouple *deploy* from *release*.** Unfinished work ships dark behind a flag and ramps when it's ready — so a slow feature never blocks the train, and anything misbehaving is killed instantly without an app-store round-trip.
- **Three build flavors** (local / staging / production) from one codebase, so the same pipeline ships to internal testers and to the stores without divergent build logic.

The multiplier on top of all three is automation: I turned the repository itself into something that maintains its own hygiene.`,architecture:`### A self-driving pipeline

The path from a pull request to the store is a series of gates and builds, and a suite of **14 GitHub Actions workflows** keeps that path green so people don't have to.

- **Guardrails** — \`master\` is branch-protected (it rejects direct pushes, including mine), sensitive files are protected from casual edits, and every PR runs Dart static analysis as a merge gate.
- **PR hygiene, automated** — bots keep open PRs rebased on \`master\`, sweep for merge conflicts and flag the PRs that need attention, auto-resolve the translation-file conflicts a multi-language app generates constantly, and clean up stale branches on a schedule.
- **Delivery** — CI builds the iOS and Android release artifacts, uploads to the store track, and generates a release and QA report; a workflow even keeps team throughput stats current.

I wrote about the guardrail half of this at length in the **[Self-Driving Repo](/articles/github-actions-branch-protection-guardrails)** series — the point is that at scale, the repository's own hygiene *is* part of the release architecture, not a chore you do around it.`,performance:`- **Release cycle cut 75%** — from four weeks to one.
- **350+ production releases** shipped and **900+ PRs** reviewed over the period.
- **99.9% crash-free** held the entire time — velocity went up, stability did not come down.
- Feature flags meant risky changes shipped **dark and ramped safely**, so a bad experiment was a flag flip away from off, not a hotfix release away.`,results:`- A small squad shipping **weekly** into a 50+ module app at a **99.9% crash-free** rate.
- An entire category of manual release work — rebasing, conflict-chasing, branch cleanup, QA reporting — taken **off people's plates** and done more reliably by CI than by hand.
- Deploy decoupled from release: the team ships continuously and *chooses* when learners see something, instead of the store review being the release event.`,lessons:`- **Automate the repository itself.** The highest-leverage CI work wasn't building the app — it was the small, sharp jobs that keep the trunk mergeable so a busy team never drowns in hygiene.
- **Feature flags are what make trunk-based safe.** Being able to merge unfinished work dark, ramp it, and kill it instantly is what lets you integrate continuously without shipping half-done features.
- **Guardrails beat discipline.** A machine that rejects a push to \`master\` enforces the rule every time; a wiki page asking people not to does not.
- **Cadence compounds.** Cutting four weeks to one didn't just ship features sooner — it shrank every change, tightened the feedback loop, and changed how the team plans.`},{slug:"flutter-cached-pdfview",title:"flutter_cached_pdfview: Cached PDF Viewer for Flutter",seoTitle:"flutter_cached_pdfview: Cached PDF Viewer",shortName:"flutter_cached_pdfview",applicationCategory:"DeveloperApplication",software:{codeRepository:"https://github.com/binSaed/flutter_cached_pdfview",programmingLanguage:"Dart",installUrl:"https://pub.dev/packages/flutter_cached_pdfview",license:"https://opensource.org/license/mit/",offers:{"@type":"Offer",price:0,priceCurrency:"USD"},sameAs:["https://github.com/binSaed/flutter_cached_pdfview","https://pub.dev/packages/flutter_cached_pdfview"]},subtitle:"An open-source cached PDF viewer for Flutter, adopted across thousands of apps",description:"The fastest cached PDF viewer for Flutter — native rendering, on-device caching, opens instantly and works offline. 134+ stars, 501+ pub.dev likes, 57K+ downloads.",date:"2026-06-29",dateModified:"2026-07-25",readTime:"5 min read",tags:["Flutter","Dart","Open Source","PDF","Plugin"],heroImage:"/project-images/flutter-cached-pdfview.webp",heroImageWidth:1600,heroImageHeight:640,role:"Creator & maintainer",timeline:"2020 — Present",platforms:["iOS","Android"],links:[{label:"GitHub",url:"https://github.com/binSaed/flutter_cached_pdfview"},{label:"pub.dev",url:"https://pub.dev/packages/flutter_cached_pdfview"}],relatedArticle:{slug:"flutter-cached-pdfview-guide",title:"Building a Cached PDF Viewer in Flutter"},metrics:[{value:"134+",label:"GitHub stars"},{value:"501+",label:"pub.dev likes"},{value:"57K+",label:"Downloads"},{value:"100+",label:"Forks"},{value:"6 yrs",label:"Maintained"},{value:"MIT",label:"Licensed"}],diagrams:{architecture:{id:"pdfview-cache-flow",caption:"First open downloads and caches the file; every later open resolves straight to the on-device cache — instant, and offline-safe."}},problem:`Displaying remote PDFs in a mobile app sounds trivial until you ship it. The common approaches each fall short:

- **Re-downloading on every open.** Naively loading a PDF from a URL fetches the whole file again each time — slow for the user and wasteful of bandwidth and data plans.
- **No offline story.** Once the network drops, documents a user already opened are simply gone.
- **Platform fragmentation.** iOS and Android render PDFs through entirely different native components, so a consistent, performant viewer means bridging both.
- **Boilerplate everywhere.** Loading states, error handling, and cache management get re-implemented in every app that needs a PDF.

I kept solving the same problem across projects, so I built it once, properly, and open-sourced it.`,constraints:`The design had four hard requirements:

- **Zero-config correctness.** The cached, offline-capable path had to be the *default* in a few lines — not an opt-in callers assemble from parts.
- **Two native renderers, one API.** iOS and Android render PDFs through entirely different components; the public surface had to hide that split completely.
- **Small footprint.** A dependency thousands of apps embed can't ship a heavyweight PDF engine — it had to lean on what the platforms already provide.
- **Maintainable for years.** As a package others depend on, it had to survive Flutter breaking changes — null-safety, \`super.key\`, evolving cache-manager APIs — without breaking downstream apps.`,solution:`**\`flutter_cached_pdfview\`** renders remote PDFs natively while caching each downloaded file on-device — so a document opens instantly and works offline on every load after the first.

It wraps the native **\`flutter_pdfview\`** renderer with **\`flutter_cache_manager\`**, and exposes one small, declarative API over three sources — **URL, asset, and file path** — with progress placeholders, error widgets, and password-protected and gesture-zoom support built in:

\`\`\`dart
// First open downloads + caches; every later open is served from disk.
const PDF().cachedFromUrl(
  'https://example.com/doc.pdf',
  placeholder: (progress) => Center(
    child: CircularProgressIndicator(value: progress / 100),
  ),
  errorWidget: (error) => const Center(child: Text('Failed to load PDF')),
);
\`\`\`

The goal was to make the *right* behavior — cached, offline-capable, native rendering — the **default**, in a few lines, on both platforms.`,architecture:"The package is a thin, deliberate composition rather than a reinvention:\n\n- **Native rendering, not a Dart PDF engine.** It delegates pixel-level rendering to the platform components through `flutter_pdfview`, so documents look and scroll the way users expect on each OS, and the package stays small.\n- **Caching via `flutter_cache_manager`.** Remote files are downloaded once and stored in a managed on-device cache; later reads resolve straight to a local file, which is what makes repeat opens instant and offline-safe.\n- **A source abstraction.** `cachedFromUrl`, `fromAsset`, and `fromPath` unify remote, bundled, and local documents behind one widget, so callers swap sources without touching their UI.\n- **Lifecycle hooks as first-class API.** `placeholder` (download progress) and `errorWidget` are part of the public surface, so loading and failure states are handled by design rather than bolted on.\n\nIt supports **Android API 20+** and **iOS 11+**, ships under the **MIT** license, and has stayed maintained since **2020**.",performance:`The entire point of the package is performance and resilience under real-world conditions:

- **Instant repeat opens.** The first load downloads and caches the file; every subsequent open is served from disk, eliminating the network round-trip and the re-download.
- **Bandwidth saved.** Documents are fetched once, not once per view — meaningful for users on metered or slow connections.
- **Offline by consequence.** Because reads resolve to the on-device cache, previously opened PDFs keep working with no connection at all.
- **Small footprint.** Leaning on the native renderers keeps the package lightweight and avoids shipping a heavyweight PDF engine inside every app that depends on it.`,results:`The package became one of the go-to PDF solutions in the Flutter ecosystem:

- **134+ GitHub stars**, **501+ pub.dev likes**, and **57,000+ downloads**.
- **100+ forks** and contributions from the community.
- Maintained continuously since **2020**, kept current with modern Flutter (null-safety, \`super.key\`, current cache-manager APIs).
- Adopted in production document readers, e-book apps, and EdTech products — including the PDF experiences I shipped at iStoria.

A small library with an outsized footprint: a focused tool that solved a recurring problem well enough that thousands of other apps now rely on it. The companion guide below walks through using it end-to-end.`,lessons:"Three things this package reinforced:\n\n- **Compose, don't reinvent.** Wrapping `flutter_pdfview` and `flutter_cache_manager` beat writing a Dart PDF engine — smaller, faster, and it inherited native rendering quality for free.\n- **Make the right thing the default.** Adoption came from *removing* decisions: cached, offline-capable, native rendering with no configuration. Good defaults are a feature.\n- **Maintenance is the product.** Six years of staying current with Flutter is the reason apps still depend on it. Publishing a package is a commitment, not a drop."}];{const e=i.map(a=>a.slug),t=d;if(e.length!==t.length||e.some((a,o)=>a!==t[o]))throw new Error(`caseStudies.js is out of sync with caseStudyMeta.js.
  caseStudies.js: [${e.join(", ")}]
  caseStudyMeta.js: [${t.join(", ")}]
Update caseStudyMeta.js (and the worker markdown map derives from it).`)}function f(e){return i.find(t=>t.slug===e)}function n(e){return`${e}T00:00:00+00:00`}function g(e,t,r){var a;return{"@context":"https://schema.org","@type":["TechArticle","Article"],headline:`${e.title} — Case Study`,name:e.title,description:e.description,image:r,inLanguage:"en",datePublished:n(e.date),dateModified:n(e.dateModified||e.date),author:s,publisher:l,keywords:e.tags.join(", "),about:{"@type":(a=e.software)!=null&&a.codeRepository?["SoftwareApplication","SoftwareSourceCode"]:"SoftwareApplication",name:e.shortName||e.title,applicationCategory:e.applicationCategory||"EducationalApplication",operatingSystem:(e.platforms||[]).join(", "),...e.software||{}},mainEntityOfPage:{"@type":"WebPage","@id":t},url:t}}export{p as a,g as b,i as c,f as g};
