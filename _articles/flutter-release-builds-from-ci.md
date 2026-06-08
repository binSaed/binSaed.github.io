---
title: "One button, three stores: shipping a Flutter app from CI"
slug: flutter-release-builds-from-ci
date: 2026-05-19
readTime: 7 min read
tags: [Flutter, CI/CD, Mobile Development, GitHub Actions]
author: Abdelrahman Saed
description: "The unglamorous engineering behind a green Release button: disk cleanup, layered caching, secure keychain signing, and App Bundles for Android, iOS, and the Play Store."
url: https://bnsaed.com/articles/flutter-release-builds-from-ci
---

# One button, three stores: shipping a Flutter app from CI

*Subtitle: Mobile release builds are full of boring landmines — disk space, caches, code signing. Here's how three workflows turned a manual ritual into a button anyone can press.*

*The Self-Driving Repo · Part 6 — Release Engineering*

![One Release button producing Android, iOS and Play Store packages](https://github.com/user-attachments/assets/b0dc74e3-c287-4411-9aca-4e167e1ec4c7)

---

For a long time, "cut a build" meant a specific person opened a specific laptop. They'd run the Flutter build, wait, find the artifact, upload it somewhere, and message the team. If that person was on vacation, releases waited. The build environment was a human.

That's a bus-factor of one for the single most important operation a mobile team does. So I moved release builds into CI — three workflows, one per target: an Android APK for internal distribution, an iOS archive, and a Play Store App Bundle. Now anyone with repo access can ship from a dropdown.

None of it is glamorous. Mobile CI is a parade of unglamorous landmines — runners that run out of disk, caches that don't cache, code signing that fails in ways the error message won't explain. This post is the field guide.

## The problem

Manual release builds failed in three predictable ways:

1. **Bus factor.** One person's machine was the build server. Knowledge and capability concentrated in a human.
2. **"Works on my machine" releases.** Local builds inherit local state — a stray dependency, a different SDK version. A release artifact should come from a clean, reproducible environment.
3. **Slow and toil-heavy.** Build, wait, find the file, compress, upload, notify. Twenty minutes of babysitting per build, every build.

## The idea

Three `workflow_dispatch` workflows — manually triggered, because releases should be intentional, with a dropdown to pick environment (staging vs production via Flutter flavors). Each one builds in a clean runner, caches aggressively, signs correctly, and hands off the artifact plus a notification.

```yaml
on:
  workflow_dispatch:
    inputs:
      environment:
        type: choice
        options: [staging, production]
```

The flavor system is what lets one codebase produce different apps. `--flavor` + a per-flavor entrypoint swaps API endpoints, feature flags, and branding at build time:

```bash
flutter build apk --release \
  --flavor "$ENV" \
  --target "lib/main_$ENV.dart" \
  --target-platform android-arm64
```

## How it works

![Build pipeline: free disk, restore caches, select flavor, unlock keychain from secrets, build APK/IPA/AAB, notify](https://github.com/user-attachments/assets/e8323e7f-3be8-44a7-95a3-80ead2e982b9)

### Landmine 1: the runner runs out of disk

This one fails *mysteriously*. A hosted runner comes preloaded with toolchains you'll never use — and a Flutter release build is disk-hungry. Halfway through, you get an opaque failure that has nothing to do with your code. The fix is to reclaim space *before* building:

```bash
# Free ~20GB the build will never miss
sudo rm -rf /usr/share/dotnet /opt/ghc /usr/local/share/boost "$AGENT_TOOLSDIRECTORY"
```

It looks like a hack. It is a hack. It's also the difference between a green build and a 45-minute investigation into a "No space left on device" error that surfaced three steps after the actual problem.

### Landmine 2: caching the three things that matter

A cold Flutter build re-downloads the SDK, the pub packages, and the entire Gradle dependency graph. Cache all three, keyed so they invalidate exactly when they should — the lockfile hash for packages, the gradle files for Gradle:

```yaml
- uses: actions/cache@v4
  with:
    path: ~/.pub-cache
    key: pub-${{ runner.os }}-${{ hashFiles('**/pubspec.lock') }}
- uses: actions/cache@v4
  with:
    path: |
      ~/.gradle/caches
      ~/.gradle/wrapper
    key: gradle-${{ runner.os }}-${{ hashFiles('**/*.gradle*') }}
```

Content-hash keys are the whole game: change a dependency and the key changes and the cache rebuilds; otherwise you get the warm path for free. Get the key wrong and you either never hit the cache or you serve a stale one — both worse than no cache.

### Landmine 3: iOS code signing (the keychain dance)

iOS is where CI newcomers lose a day. Signing needs your certificates and provisioning profiles available to the build, which on macOS means they have to live in an *unlocked* keychain. The build also runs long enough that a default keychain can re-lock mid-build and fail with an error that doesn't mention keychains at all.

The correct pattern: create or unlock a keychain using a password **injected from secrets** (never hardcoded), and extend its lock timeout for the build:

```bash
# Password comes from a secret — NEVER commit a literal password
security unlock-keychain -p "$KEYCHAIN_PASSWORD" "$KEYCHAIN"
security set-keychain-settings -t 3600 -l "$KEYCHAIN"   # don't re-lock mid-build
```

> A note worth making loudly, because it's a common smell in starter CI configs: **never hardcode a keychain password in your workflow.** It belongs in your secrets store and gets referenced as an environment variable, exactly like above. Better still, create a *throwaway* keychain per run from secret-stored credentials and delete it at the end, so nothing persists on the runner.

Then build the archive, deferring the actual signing of the artifact so the build step and the signing step have clean responsibilities:

```bash
flutter build ipa --flavor "$ENV" \
  --target "lib/main_$ENV.dart" \
  --export-options-plist ios/exportOptions.plist
```

`exportOptions.plist` centralizes the signing configuration (team, profiles, method) in one versioned file instead of scattering flags across the workflow.

### Landmine 4: Play Store wants App Bundles, not APKs

For the Play Store, you don't ship an APK — you ship an Android App Bundle and let Google generate per-device APKs. That's a real size win for users: each device downloads only the code and resources for its architecture.

```bash
flutter build appbundle --release \
  --flavor production \
  --target lib/main_production.dart \
  --split-per-abi
```

The Play Store also requires a **strictly increasing build number** on every upload — duplicate it and the upload bounces. That's a great thing to automate (read the current version, bump the build number, build) so a human never has to remember. One caveat from experience: if you bump the number during the build, make sure the bump is actually *persisted* (committed back), or the next run starts from the same base and you're fighting the store again. An un-committed bump is a bug that hides until your second release.

### The handoff

A build nobody can find didn't happen. Each workflow compresses the artifact, uploads it (to build artifacts and/or a shared drive), and posts a notification to team chat with who triggered it, which environment, and a link. The release announces itself.

## What it bought us

- **Bus factor gone.** Anyone with access ships from a dropdown; no one's laptop is the build server.
- **Reproducible artifacts** from a clean environment — no "works on my machine" releases.
- **Minutes of attention, not hours.** Trigger, walk away, get a chat ping when it's done and uploaded.
- **Smaller downloads for users** via per-ABI App Bundles, and ~12-minute warm builds thanks to caching.

## Gotchas & trade-offs

- **Pin your toolchain versions.** Letting the runner drift to "latest" Flutter is how a release build breaks for reasons unrelated to your change. Pin per workflow and bump deliberately.
- **Cache keys are load-bearing.** A wrong key silently disables caching (slow) or serves stale deps (worse). Verify you're actually getting hits.
- **Secrets discipline on signing material.** Keystores, certs, and keychain passwords live in your secrets store, full stop. Prefer ephemeral keychains that don't outlive the run.
- **Manual trigger is a deliberate choice.** I didn't auto-release on merge. Releases are intentional acts; a human picking the environment from a dropdown is a feature, not a missing automation.
- **Three workflows means three things to maintain.** Per-target separation is clearer but invites drift — keep the shared steps (caching, notify) consistent so a fix in one lands in all.

## Takeaway

Mobile release CI isn't about clever pipelines — it's about defusing a sequence of boring landmines: reclaim disk before you build, cache the three heavy things with content-hash keys, treat code signing as a secrets-and-keychain problem (never a hardcoded password), and make the build announce itself when it's done. Do that and "cut a release" stops being a person and becomes a button.

Next: the flagship that reads a release diff and writes the QA test plan for you.
