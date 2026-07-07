---
title: Building a Cached PDF Viewer in Flutter
slug: flutter-cached-pdfview-guide
date: 2024-01-15
dateModified: 2026-07-07
readTime: 7 min read
tags: [Flutter, Dart, PDF, Mobile]
author: Abdelrahman Saed
url: https://bnsaed.com/articles/flutter-cached-pdfview-guide
---

# Building a Cached PDF Viewer in Flutter

![flutter_cached_pdfview — native cached PDF viewing on iOS and Android](/article-images/flutter-cached-pdfview-guide-hero.webp)

> **Updated July 2026** — refreshed for `flutter_cached_pdfview` ^0.4.4 and modern Flutter 3.x idioms (`super.key`, `const` constructors, current null-safety).

A cached PDF viewer in Flutter displays remote PDFs while caching each downloaded file on-device, so it opens instantly and works offline on every load after the first. The `flutter_cached_pdfview` package builds this for you: it wraps the native `flutter_pdfview` renderer with `flutter_cache_manager`, exposing URL, asset, and file-path sources plus progress placeholders and error widgets out of the box. To use it, add `flutter_cached_pdfview: ^0.4.4` to your `pubspec.yaml`, then render `const PDF().cachedFromUrl(url, ...)`. The first load downloads and caches the document; every later load is served straight from disk, cutting both wait time and bandwidth. The package targets Android API 20 and above and iOS 11 and above, and is maintained on pub.dev by its original author. The guide below walks through installation, basic usage with modern Flutter 3.x syntax, multiple sources, loading states, and error handling.

I wrote `flutter_cached_pdfview`, and I've maintained it since 2020. It grew out of the same problem showing up in project after project — remote PDFs that re-downloaded on every open, broke the moment the network dropped, and needed the same loading and error boilerplate rebuilt each time. So I built the cached, offline-capable, native-rendering path once, made it the default, and open-sourced it. It's since grown to **130+ GitHub stars, 500+ pub.dev likes, 43,000+ downloads, and 100+ forks**, shipped under the MIT license and used in production document readers, e-book apps, and EdTech products — including the PDF experiences I shipped at iStoria. If you want the design story behind it — the constraints, the two-native-renderers-one-API problem, and what six years of maintenance taught me — read the [flutter_cached_pdfview case study](/case-studies/flutter-cached-pdfview/). This article is the hands-on guide to using it.

## Why does PDF caching matter in a mobile app?

Loading a PDF from a URL is deceptively easy to get wrong. The naive approach — hand the URL to a renderer and let it fetch — re-downloads the whole file on every open. That's slow for the user, wasteful of bandwidth, and it falls apart entirely offline. Caching turns each document into a one-time download:

- **Faster load times** — after the first open, cached files resolve straight from disk with no network round-trip.
- **Reduced bandwidth** — a document is fetched once, not once per view. That's meaningful on metered or slow connections.
- **Offline support** — because reads resolve to the on-device cache, previously viewed PDFs keep working with no connection at all.

The goal of the package is to make that behavior the *default*, in a few lines, on both platforms — rather than something you assemble from a renderer, a cache manager, and a pile of state handling.

## Getting started

Add the package to your `pubspec.yaml`:

```yaml
dependencies:
  flutter_cached_pdfview: ^0.4.4
```

Then run `flutter pub get`. There's no platform-channel setup or manual permission wiring for the common case — the package leans on the native renderers the platforms already provide.

## Basic usage

Here's a minimal viewer, written with modern Flutter 3.x syntax (`super.key` instead of the old `Key? key` / `super(key: key)` boilerplate):

```dart
import 'package:flutter/material.dart';
import 'package:flutter_cached_pdfview/flutter_cached_pdfview.dart';

class PDFViewerPage extends StatelessWidget {
  final String pdfUrl;

  const PDFViewerPage({super.key, required this.pdfUrl});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('PDF Viewer')),
      body: const PDF().cachedFromUrl(
        pdfUrl,
        placeholder: (progress) => Center(
          child: CircularProgressIndicator(value: progress / 100),
        ),
        errorWidget: (error) => const Center(
          child: Text('Error loading PDF'),
        ),
      ),
    );
  }
}
```

The first time this page opens `pdfUrl`, the file downloads and is stored in a managed on-device cache; every subsequent open of the same URL is served from disk.

## Loading from any source

The same widget renders three sources behind one API, so you can swap where a document comes from without touching your UI:

```dart
// Remote URL — downloaded once, then cached and offline-safe.
const PDF().cachedFromUrl('https://example.com/doc.pdf');

// Bundled asset — shipped inside your app.
const PDF().fromAsset('assets/manual.pdf');

// Local file path — e.g. a document the user already downloaded.
const PDF().fromPath('/storage/emulated/0/Download/report.pdf');
```

This matters more than it looks: a lot of apps start with bundled assets, move to remote documents, then add a "downloaded files" section. With one API across all three, that evolution doesn't ripple through your widget tree.

## Customizable loading states

Because downloads take real time on real networks, `placeholder` is part of the public API and receives download progress, so you can show something better than a bare spinner:

```dart
placeholder: (progress) => Center(
  child: Column(
    mainAxisAlignment: MainAxisAlignment.center,
    children: [
      CircularProgressIndicator(value: progress / 100),
      const SizedBox(height: 16),
      Text('${progress.toStringAsFixed(0)}%'),
    ],
  ),
),
```

## Error handling

Networks fail and files get corrupted, so `errorWidget` is first-class too. Give the user a clear message and a way to recover:

```dart
errorWidget: (error) => Center(
  child: Column(
    mainAxisAlignment: MainAxisAlignment.center,
    children: [
      const Icon(Icons.error, size: 64, color: Colors.red),
      const SizedBox(height: 16),
      const Text('Failed to load PDF'),
      TextButton(
        onPressed: () { /* retry logic — e.g. setState to rebuild the viewer */ },
        child: const Text('Retry'),
      ),
    ],
  ),
),
```

## Configuring the viewer

The `PDF()` constructor forwards the underlying `flutter_pdfview` options, so you can tune scroll direction, password-protected documents, and appearance without leaving the widget:

```dart
const PDF(
  swipeHorizontal: true, // page through side to side instead of vertical scroll
  nightMode: false,      // invert colors for dark reading
  password: 'secret',    // open password-protected PDFs
  autoSpacing: true,
  pageFling: true,
).cachedFromUrl(pdfUrl);
```

Gesture zoom and pan come from the native renderers, so pinch-to-zoom behaves the way users expect on each platform — you don't wire it up yourself.

## How it works under the hood

The package is a deliberately thin composition rather than a reinvention, and that's the reason it stays small and fast:

- **Native rendering, not a Dart PDF engine.** Pixel-level rendering is delegated to the platform components through `flutter_pdfview`, so documents look and scroll natively on each OS — and the package doesn't ship a heavyweight engine inside every app that depends on it.
- **Caching via `flutter_cache_manager`.** Remote files are downloaded once into a managed cache; later reads resolve to a local file. That's what makes repeat opens instant and offline-safe.
- **A source abstraction.** `cachedFromUrl`, `fromAsset`, and `fromPath` unify remote, bundled, and local documents behind one widget.
- **Lifecycle hooks as API.** `placeholder` and `errorWidget` make loading and failure states something you design for, not bolt on afterward.

It supports **Android API 20+** and **iOS 11+**, and ships under the **MIT** license.

## Keeping it current

A package thousands of apps embed can't break them on the next Flutter release. Over six years `flutter_cached_pdfview` has moved through null-safety, `super.key`, and evolving `flutter_cache_manager` APIs while keeping downstream apps working. If you're pinning a version, `^0.4.4` tracks the current line; the [GitHub repo](https://github.com/binSaed/flutter_cached_pdfview) has the changelog and migration notes.

## Wrap-up

For remote PDFs in Flutter, caching isn't a nice-to-have — it's the difference between an app that feels instant and works offline and one that re-fetches megabytes on every tap. `flutter_cached_pdfview` makes the cached, native, offline-capable path the default in a few lines across iOS and Android.

- **Package:** [pub.dev/packages/flutter_cached_pdfview](https://pub.dev/packages/flutter_cached_pdfview)
- **Source:** [github.com/binSaed/flutter_cached_pdfview](https://github.com/binSaed/flutter_cached_pdfview)
- **The design story:** [flutter_cached_pdfview case study](/case-studies/flutter-cached-pdfview/)
