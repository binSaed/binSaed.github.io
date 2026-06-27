---
title: Building a Cached PDF Viewer in Flutter
slug: flutter-cached-pdfview-guide
date: 2024-01-15
dateModified: 2026-06-27
readTime: 5 min read
tags: [Flutter, Dart, PDF, Mobile]
author: Abdelrahman Saed
url: https://bnsaed.com/articles/flutter-cached-pdfview-guide
---

# Building a Cached PDF Viewer in Flutter

![flutter_cached_pdfview — native cached PDF viewing on iOS and Android](/article-images/flutter-cached-pdfview-guide-hero.webp)

> **Updated June 2026** — refreshed for `flutter_cached_pdfview` ^0.4.4 and modern Flutter 3.x idioms (`super.key`, `const` constructors, current null-safety).

A cached PDF viewer in Flutter displays remote PDFs while caching each downloaded file on-device, so it opens instantly and works offline on every load after the first. The `flutter_cached_pdfview` package builds this for you: it wraps the native `flutter_pdfview` renderer with `flutter_cache_manager`, exposing URL, asset, and file-path sources plus progress placeholders and error widgets out of the box. To use it, add `flutter_cached_pdfview: ^0.4.4` to your `pubspec.yaml`, then render `const PDF().cachedFromUrl(url, ...)`. The first load downloads and caches the document; every later load is served straight from disk, cutting both wait time and bandwidth. The package targets Android API 20 and above and iOS 11 and above, and is maintained on pub.dev by its original author. The guide below walks through installation, basic usage with modern Flutter 3.x syntax, multiple sources, loading states, and error handling.

PDF viewing is a common requirement in mobile applications. Whether you're building a document reader, an e-book app, or just need to display PDFs from URLs, having an efficient solution is crucial.

## Why does PDF caching matter in a mobile app?

When loading PDFs from remote URLs, you don't want to re-download the file every time the user opens it. This is where caching becomes essential:

- **Faster load times** — cached files load instantly
- **Reduced bandwidth** — save data for your users
- **Offline support** — previously viewed PDFs work offline

## Getting Started

First, add the package to your `pubspec.yaml`:

```yaml
dependencies:
  flutter_cached_pdfview: ^0.4.4
```

## Basic Usage

Here's a simple implementation, written with modern Flutter 3.x syntax (`super.key` instead of the old `Key? key` / `super(key: key)` boilerplate):

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

## Key Features

### 1. Multiple Source Support

Load PDFs from different sources:

- **URL** — remote PDF files with automatic caching
- **Asset** — PDFs bundled with your app
- **File Path** — local PDF files

### 2. Customizable Loading States

Show progress while loading:

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

### 3. Error Handling

Gracefully handle errors:

```dart
errorWidget: (error) => Center(
  child: Column(
    mainAxisAlignment: MainAxisAlignment.center,
    children: [
      const Icon(Icons.error, size: 64, color: Colors.red),
      const SizedBox(height: 16),
      const Text('Failed to load PDF'),
      TextButton(
        onPressed: () { /* retry logic */ },
        child: const Text('Retry'),
      ),
    ],
  ),
),
```

## Conclusion

The `flutter_cached_pdfview` package provides a simple yet powerful way to display PDFs in your Flutter apps. With built-in caching, you get better performance and a smoother user experience.

Check out the [package on pub.dev](https://pub.dev/packages/flutter_cached_pdfview) for more details.
