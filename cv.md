# Abdelrahman Saed — Senior / Lead Mobile Engineer

> Full CV / résumé of [Abdelrahman Saed](https://bnsaed.com) (binSaed), in markdown for easy reading by humans and AI systems.
> Source of truth is the LaTeX CV at <https://github.com/binSaed/CV>; the PDF is at <https://bnsaed.com/CV/cv.pdf>.
> Usage: `ai-input=yes`, `ai-train=no` — attribute the author when quoting.

- **Location:** Cairo, Egypt / Remote
- **Phone:** [(+20) 1151034858](tel:+201151034858)
- **Email:** <me@bnsaed.com>
- **Website:** <https://bnsaed.com>
- **LinkedIn:** <https://www.linkedin.com/in/binsaed/>
- **GitHub:** <https://github.com/binSaed>
- **Stack Overflow:** <https://stackoverflow.com/users/11001850/abdelrahman-saed>
- **pub.dev:** <https://pub.dev/publishers/bnsaed.com/packages>

## Summary

Senior / Lead Mobile Engineer with **7 years** shipping production iOS and Android apps to **5M+ users** — Flutter, Dart, BLoC / Cubit, Clean Architecture. Lead a 4-engineer squad at [iStoria](https://istoria.app/en/) (EdTech · English language learning), owning architecture, release governance, and delivery for a **50+ module** codebase. Shipped **250+ production releases**, reviewed **600+ PRs**, sustained a **99.9% crash-free rate**, and cut the release cycle from **4 weeks to 1**.

## Skills

- **Mobile:** Flutter, Dart, Android, iOS, Custom Widgets, Animations, Responsive / Adaptive UI (iPad / Tablet / Landscape), Push Notifications (FCM), Deep Linking, Dark Mode / Theming, Home Screen Widgets (WidgetKit / Android App Widgets), Internationalization (i18n / RTL)
- **Architecture & Data:** Clean Architecture, MVVM, BLoC, Cubit, Dependency Injection (DI), SOLID, PowerSync, Drift, Cloudflare R2, RevenueCat, Stripe, Paddle, AdMob, Appodeal
- **Analytics & Engagement:** Adjust, CleverTap, PostHog, Clarity, Smartlook, Segment, WebEngage, MoEngage
- **DevOps & Quality:** CI/CD, GitHub Actions, Codemagic, Trunk-based Development, Feature Flags, Firebase, Sentry, A/B Testing (Remote Config + GrowthBook), Performance Profiling, Crash Budgets, Unit / Widget Testing, Integration Testing (Maestro / Patrol / Marionette), PR Automation Bots, REST, GraphQL
- **Leadership:** Architecture Ownership, Technical RFCs, Release Governance, Code Review, Mentoring

## Experience

### Lead Mobile Engineer — iStoria

**Jun 2025 – Present** · [iStoria](https://istoria.app/en/) (EdTech · English Language Learning) · Riyadh, Saudi Arabia (Hybrid)
*Stack: Flutter, Dart, BLoC, Cubit, PowerSync, Drift, Firebase, Sentry, GitHub Actions, GraphQL, REST*

- Lead a 4-engineer iOS/Android squad — defining architecture direction, hiring bar, release governance, and quarterly roadmaps balancing feature velocity against tech debt for a user base of **5M+**.
- Cut release cycle **75% (4 weeks → 1 week)** via trunk-based development, feature flags, and end-to-end CI/CD ownership (Codemagic, GitHub Actions, store releases).
- Architected modular Flutter codebase with **50+ feature modules** and **140+ routes** applying SOLID and MVVM, documented via RFCs and enforced through CI quality gates and code review.
- Led migration to [CleverTap](https://clevertap.com/) as the primary engagement platform, deprecating the previous stack with **zero data loss** for active accounts.
- Hardened production security end-to-end: PII masked in logs and Sentry breadcrumbs, Android cleartext traffic disabled, and TLS certificate validation enforced across the app.
- Cut QA turnaround by shipping internal tooling that builds APKs from any GitHub branch on demand, removing manual hand-offs from the test loop.

### Founding Mobile Engineer — iStoria

**Jan 2022 – Jun 2025** · 3 yrs 6 mos · [iStoria](https://istoria.app/en/) (EdTech · English Language Learning) · Riyadh, Saudi Arabia (Hybrid)
*Stack: Flutter, Dart, BLoC, Cubit, PowerSync, Drift, Codemagic, Firebase, Sentry, Adjust, REST, GraphQL*

- Shipped flagship growth and AI features end-to-end: **Leaderboard** with social sharing, **AI Read-with** (Google speech recognition for guided reading), and **iStro AI chat companion** guiding users through chapter journeys.
- Delivered **native Home Screen Widgets** on iOS (WidgetKit) and Android (App Widgets) for streak/daily-goal with FCM-driven updates, plus an **app-wide deep-link router** for auth, passwordless reset, marketing/coupon flows, challenges, and group invites.
- Built the engagement and retention loop powering daily active usage: **Streak** system with day-off freeze and lost-streak restore, **Badges**, **Daily Goal** tracker, social **Challenges**, and a **Referral / Invite-Friends** program.
- Achieved **99.9% crash-free rate** via crash budgets, systematic profiling, and CI quality gates blocking releases below stability thresholds.
- Designed offline-first infrastructure (PowerSync + Drift) with selective per-key sync, conflict resolution, schema migration, and data integrity guarantees for millions of active accounts.
- Drove a sustained performance program: **~35% cold-start reduction** (parallelized service providers, deferred post-first-frame SDKs, 35+ eager → lazy dependencies); **~60% rendering gains** (RepaintBoundary isolation, background JSON deserialization); **~20% memory reduction** (eliminating controller/stream leaks).
- Architected and implemented an end-to-end cross-platform anti-piracy system integrating mobile tampering, jailbreak, and root detection with backend behavioral analysis to fingerprint compromised builds, automatically blocking **30,000+ abusive accounts** and reducing credential sharing through enforced 3-device account limits.
- Expanded the supported matrix with app-wide **Dark Mode** (system-theme aware), **iPad / tablet / landscape adaptive UI**, and a **20-language i18n pipeline** (RTL incl. Arabic, Persian, Urdu) with locale-aware push notifications — all without forking the codebase.
- Migrated mobile asset delivery from **AWS CloudFront to Cloudflare R2**, coordinating cutover across mobile, backend, and content pipelines with zero user-visible downtime.
- Owned the monetization stack: [RevenueCat](https://www.revenuecat.com/) for native IAP across iOS/Android, a **custom webview checkout migrated from Paddle to Stripe** for fallback flows, **AdMob** ad serving (selected over Appodeal via A/B testing) with frequency capping and report-ad UX, and a promo / coupon engine driving paid-tier conversion.
- Built internal DevEx tooling: a **PR-automation bot** (Jira-link injection, conflict labelling, auto-branch-update, stale-branch sweep, quality-team auto-check).
- Maintained **8+ custom/forked Flutter packages**, contributing fixes upstream and owning long-term maintenance to meet production reliability requirements.
- Integrated 4 marketing SDKs ([WebEngage](https://webengage.com/), [MoEngage](https://www.moengage.com/), [CleverTap](https://clevertap.com/), [Adjust](https://www.adjust.com/)) and built A/B testing infrastructure (Firebase Remote Config + [GrowthBook](https://www.growthbook.io/)), enabling data-driven feature rollouts and personalized engagement.
- Maintained end-to-end stability across **mobile, backend, and cloud** as **the sole engineer for 1.5M users** during a team transition, while keeping release stability above thresholds.

### Mobile Engineer — Happy Trip

**Oct 2020 – Jan 2022** · 1 yr 4 mos · [Happy Trip](https://www.linkedin.com/company/happytrip-ar) · Cairo, Egypt
*Stack: Flutter, Dart, REST, Firebase*

- Owned mobile delivery end-to-end across the Flutter team — task planning, code review gates, and sprint execution — setting the cadence for every release during the platform's first 14 months.
- Architected a networking SDK with multi-layer caching, request queueing, auto-retry, token refresh, and background parsing, **cutting networking code by 60%**.
- Designed and delivered the company's first mobile platform (consumer booking, internal HR, POS) in 14 months, enabling a full business pivot from traditional tourism to a tech-enabled service.

### Mobile Engineer (Part-time) — Tech Bay Portal

**Feb 2021 – Oct 2021** · 9 mos · Tech Bay Portal · UAE (Remote)
*Stack: Flutter, Dart, Socket.io, Google Maps*

- Delivered real-time GPS tracking and live trip updates (Socket.io, Google Maps) for a ride-hailing platform across driver and rider apps.
- Hardened the live-tracking pipeline against intermittent connectivity — buffered location updates locally and replayed on reconnect to keep trip state consistent on both sides.
- Collaborated within a distributed multinational agile team, coordinating asynchronously across time zones alongside a concurrent full-time role.

### Mobile Engineer — FekraSoft Co

**Aug 2019 – Sep 2020** · 1 yr 2 mos · [FekraSoft Co](https://www.linkedin.com/company/fekrasoft) · Cairo, Egypt
*Stack: Flutter, Dart, RxDart, Firebase*

- Led company-wide Flutter adoption as the first Flutter engineer, mentoring the Android team through advanced patterns (Streams, RxDart, DI) and authoring the shared coding standards the team still uses.
- Shipped production e-commerce and document management apps with barcode scanning and file-level encryption.

## Projects

- **[flutter_cached_pdfview](https://pub.dev/packages/flutter_cached_pdfview)** — Cross-platform Flutter PDF viewer (iOS/Android) with URL/asset/local caching, password-protected PDFs, and gesture-based zoom; **[134★ on GitHub](https://github.com/binSaed/flutter_cached_pdfview)**, **501 likes / 43.3k+ downloads on pub.dev**.
- **[flutter_zoom_checker](https://pub.dev/packages/flutter_zoom_checker)** — iOS/Android display-zoom (UI scaling) detection plugin, working around a Flutter framework limitation ([issue #95421](https://github.com/flutter/flutter/issues/95421)).
- **[dio_firebase_performance_plus](https://github.com/binSaed/dio_firebase_performance_plus)** — Dio interceptor streaming HTTP request metrics to Firebase Performance Monitoring.
- **[clipboard_plus](https://pub.dev/packages/clipboard_plus)** — Flutter clipboard plugin with **silent content-type detection on iOS** (UIPasteboard) — detects URLs, text, and images without triggering the iOS paste permission dialog.
- **[Stickerawy](https://play.google.com/store/apps/details?id=com.stickerawy.stickers)** — WhatsApp stickers Android app with **500K+ installs** on Google Play.
- **Open-source contributions:** patches and fixes to [youtube_explode_dart](https://github.com/Hexer10/youtube_explode_dart/pull/371), [dio_smart_retry](https://github.com/rodion-m/dio_smart_retry/pull/36), and [growthbook-flutter](https://github.com/growthbook/growthbook-flutter/pulls?q=author:binSaed).

## Education

**Bachelor of Management Information Systems** — Ain Shams Academy, Cairo, Egypt

## Languages

- **Arabic:** Native
- **English:** Professional
