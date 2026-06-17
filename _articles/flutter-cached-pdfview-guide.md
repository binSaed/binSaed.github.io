---
title: Building a Cached PDF Viewer in Flutter
slug: flutter-cached-pdfview-guide
date: 2024-01-15
readTime: 5 min read
tags: [Flutter, Dart, PDF, Mobile]
author: Abdelrahman Saed
url: https://bnsaed.com/articles/flutter-cached-pdfview-guide
---

# Building a Cached PDF Viewer in Flutter

![flutter_cached_pdfview — native cached PDF viewing on iOS and Android](/article-images/flutter-cached-pdfview-guide-hero.webp)

PDF viewing is a common requirement in mobile applications. Whether you're building a document reader, an e-book app, or just need to display PDFs from URLs, having an efficient solution is crucial.

## Why Caching Matters

When loading PDFs from remote URLs, you don't want to re-download the file every time the user opens it. This is where caching becomes essential:

- **Faster load times** — cached files load instantly
- **Reduced bandwidth** — save data for your users
- **Offline support** — previously viewed PDFs work offline

## Getting Started

First, add the package to your `pubspec.yaml`:

```yaml
dependencies:
  flutter_cached_pdfview: ^0.4.3
```

## Basic Usage

Here's a simple implementation:

```dart
import 'package:flutter_cached_pdfview/flutter_cached_pdfview.dart';

class PDFViewerPage extends StatelessWidget {
  final String pdfUrl;

  const PDFViewerPage({Key? key, required this.pdfUrl}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('PDF Viewer')),
      body: const PDF().cachedFromUrl(
        pdfUrl,
        placeholder: (progress) => Center(
          child: CircularProgressIndicator(value: progress / 100),
        ),
        errorWidget: (error) => Center(
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
      SizedBox(height: 16),
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
      Icon(Icons.error, size: 64, color: Colors.red),
      SizedBox(height: 16),
      Text('Failed to load PDF'),
      TextButton(
        onPressed: () => /* retry logic */,
        child: Text('Retry'),
      ),
    ],
  ),
),
```

## Conclusion

The `flutter_cached_pdfview` package provides a simple yet powerful way to display PDFs in your Flutter apps. With built-in caching, you get better performance and a smoother user experience.

Check out the [package on pub.dev](https://pub.dev/packages/flutter_cached_pdfview) for more details.
