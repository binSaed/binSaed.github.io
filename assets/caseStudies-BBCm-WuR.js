import{v as r,l as a}from"./index-BdL10baq.js";const o="https://bnsaed.com",l="https://avatars.githubusercontent.com/u/33700292?v=4&s=512",h=[{key:"problem",label:"The Problem"},{key:"solution",label:"The Solution"},{key:"architecture",label:"Architecture"},{key:"performance",label:"Performance"},{key:"results",label:"Results"}],d=[{slug:"istoria",title:"iStoria",subtitle:"Scaling story-based English learning to 5M+ learners",description:"How I helped take iStoria from founding to 5M+ learners — an offline-first Flutter architecture across a 50+ module codebase, growth features from streaks and a social leaderboard to the iStro AI companion, and a release cycle cut from four weeks to one across 800+ merged PRs.",date:"2026-06-29",readTime:"8 min read",tags:["Flutter","EdTech","Offline-first","Architecture","Scale"],heroImage:"https://play-lh.googleusercontent.com/nO5vER33waTf8T7vKPo-HYHflKVldZna_yQnqeB3Hqv9smjPiP-xGBTCGXWLFNIPn00",role:"Founding → Lead Mobile Engineer",timeline:"2022 — Present",platforms:["iOS","Android"],links:[{label:"Visit iStoria",url:"https://istoria.app/en/"}],metrics:[{value:"5M+",label:"Learners reached"},{value:"99.9%",label:"Crash-free sessions"},{value:"50+",label:"Feature modules"},{value:"800+",label:"PRs merged"},{value:"75%",label:"Shorter release cycle"},{value:"30K+",label:"Abuse accounts blocked"}],problem:`iStoria teaches English through short, narrated stories. To make that work for **5M+ learners across iOS and Android**, the mobile app had to clear several hard constraints at once:

- **Work offline, everywhere.** Many learners study on unreliable or metered connections. Lessons, progress, and audio had to be available offline and reconcile cleanly the moment a device came back online.
- **Rich audio and speech loops.** Story playback, text-to-speech, and "Read-with" speech recognition put real-time audio at the center of the product — not as an afterthought.
- **Ship fast without breaking trust.** A growing catalog and an ambitious roadmap meant frequent releases, held against a crash-free bar that protects a paying, education-focused audience.
- **Protect premium content.** Subscriptions fund the catalog, so the app had to resist piracy and account abuse without punishing legitimate learners.
- **Stay shippable as it grows.** A founding-stage app had to scale into a large codebase that a small squad could still move quickly in.

The job was never a single feature — it was an architecture that could hold all of this at once and keep getting faster as it grew.`,solution:`We built iStoria on **Clean Architecture with a feature-modular Flutter codebase** — today **50+ feature modules** behind **140+ routes** — so teams work in isolation and the app stays navigable as it grows.

The core bets:

- **Offline-first by default.** A **PowerSync + Drift** data layer keeps a local SQLite mirror in sync with the backend, with selective per-key sync and conflict resolution, so learners never wait on the network for their own progress.
- **Reactive presentation with BLoC/Cubit.** State is modeled explicitly per feature through a \`DataSource → Repository → Cubit\` flow, with \`Either<Failure, T>\` error handling so failures are values the UI renders rather than exceptions that crash it.
- **A pipeline built for weekly shipping.** Trunk-based development, feature flags, and end-to-end CI/CD took the release cycle from **four weeks to one** — across **800+ merged PRs** — without lowering the crash-free bar.
- **Security as a first-class feature.** A cross-platform anti-piracy system plus hardened logging and transport protect both the catalog and learner data.

On top of that platform I shipped the features learners actually touch — daily **streaks**, a social **Leaderboard**, friend **referrals**, the **iStro** AI chat companion, AI **"Read-with"** speech practice, home-screen **widgets**, **dark mode**, and a steady stream of **subscription and paywall experiments**. The rest of this case study walks through how the platform makes that pace possible.`,architecture:`### Layering

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

Subscriptions run through **RevenueCat**, behind a paywall that is constantly A/B-tested — family plans, returning-user redesigns, and trial and pricing variants — gated by **GrowthBook** feature flags so experiments ship dark and ramp safely. Product and stability signals fan out to Firebase, Adjust, Sentry, and Clarity. The app builds in multiple flavors (development / staging / production), so one pipeline ships the same codebase to internal and store channels.`,performance:`Performance was a standing program, not a one-off cleanup. Three numbers tracked the work:

- **~35% faster cold start** — deferred and lazy initialization moved non-critical work off the launch path, so the app reaches first meaningful content sooner.
- **~60% rendering improvement** — \`const\` widgets, tighter rebuild scoping, and list/image optimizations cut wasted frames on the audio and catalog screens.
- **~20% lower memory** — trimming retained objects and streaming heavy media kept large stories and long sessions stable on low-end devices.

Stability held the line throughout: a **99.9% crash-free** rate, watched through Sentry with fast triage so regressions are caught release-over-release rather than in store reviews.`,results:`The architecture paid off where it counts — in reach, stability, shipping speed, and the breadth of what a small team could ship:

- **5M+ learners** on iOS and Android, at a **99.9% crash-free** rate.
- **800+ merged PRs**, **350+ production releases**, and the release cycle cut **from four weeks to one**.
- **30,000+ abusive accounts auto-blocked** by the cross-platform anti-piracy system (jailbreak / root / tamper detection plus backend behavioral analysis), protecting subscription revenue.
- A run of growth and AI features shipped end-to-end — daily **streaks**, a social **Leaderboard** with sharing, friend **referrals**, the **iStro** AI chat companion, AI **"Read-with"** speech practice, home-screen **widgets**, **dark mode**, quizzes, and an ongoing program of **subscription and paywall experiments**.

I grew from founding mobile engineer into leading a four-engineer iOS/Android squad that owns architecture, release governance, and the roadmap for the entire 5M+ user base.`},{slug:"flutter-cached-pdfview",title:"flutter_cached_pdfview",subtitle:"An open-source cached PDF viewer for Flutter, adopted across thousands of apps",description:"An open-source Flutter package for native, cached PDF viewing on iOS and Android — wrapping the platform renderers with on-device caching so documents open instantly and work offline. 130+ stars, 500+ pub.dev likes, 43K+ downloads.",date:"2026-06-29",readTime:"5 min read",tags:["Flutter","Dart","Open Source","PDF","Plugin"],heroImage:"https://github.com/user-attachments/assets/77ccded4-5c51-4583-9830-0f1c66e627c4",role:"Creator & maintainer",timeline:"2020 — Present",platforms:["iOS","Android"],links:[{label:"GitHub",url:"https://github.com/binSaed/flutter_cached_pdfview"},{label:"pub.dev",url:"https://pub.dev/packages/flutter_cached_pdfview"}],relatedArticle:{slug:"flutter-cached-pdfview-guide",title:"Building a Cached PDF Viewer in Flutter"},metrics:[{value:"130+",label:"GitHub stars"},{value:"500+",label:"pub.dev likes"},{value:"43K+",label:"Downloads"},{value:"100+",label:"Forks"},{value:"6 yrs",label:"Maintained"},{value:"MIT",label:"Licensed"}],problem:`Displaying remote PDFs in a mobile app sounds trivial until you ship it. The common approaches each fall short:

- **Re-downloading on every open.** Naively loading a PDF from a URL fetches the whole file again each time — slow for the user and wasteful of bandwidth and data plans.
- **No offline story.** Once the network drops, documents a user already opened are simply gone.
- **Platform fragmentation.** iOS and Android render PDFs through entirely different native components, so a consistent, performant viewer means bridging both.
- **Boilerplate everywhere.** Loading states, error handling, and cache management get re-implemented in every app that needs a PDF.

I kept solving the same problem across projects, so I built it once, properly, and open-sourced it.`,solution:`**\`flutter_cached_pdfview\`** renders remote PDFs natively while caching each downloaded file on-device — so a document opens instantly and works offline on every load after the first.

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

- **130+ GitHub stars**, **500+ pub.dev likes**, and **43,000+ downloads**.
- **100+ forks** and contributions from the community.
- Maintained continuously since **2020**, kept current with modern Flutter (null-safety, \`super.key\`, current cache-manager APIs).
- Adopted in production document readers, e-book apps, and EdTech products — including the PDF experiences I shipped at iStoria.

A small library with an outsized footprint: a focused tool that solved a recurring problem well enough that thousands of other apps now rely on it. The companion guide below walks through using it end-to-end.`}];function u(e){return d.find(t=>t.slug===e)}function n(){return{"@type":"Person","@id":`${o}/#person`,name:r.name,url:o,image:l,jobTitle:r.role,sameAs:[a.github,a.linkedin,a.stackoverflow,a.pubdev]}}function i(e){return`${e}T00:00:00+00:00`}function p(e,t,s){return{"@context":"https://schema.org","@type":"TechArticle",headline:`${e.title} — Case Study`,name:e.title,description:e.description,image:s,inLanguage:"en",datePublished:i(e.date),dateModified:i(e.dateModified||e.date),author:n(),publisher:n(),keywords:e.tags.join(", "),about:{"@type":"SoftwareApplication",name:e.title,applicationCategory:"EducationalApplication",operatingSystem:(e.platforms||[]).join(", ")},mainEntityOfPage:{"@type":"WebPage","@id":t},url:t}}export{h as C,p as a,d as c,u as g};
