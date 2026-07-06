---
title: "Offline-First vs Local-First: What's the Difference?"
slug: offline-first-vs-local-first
date: 2026-07-07
readTime: 7 min read
tags: [Offline-first, Architecture, Flutter, PowerSync]
author: Abdelrahman Saed
description: "Offline-first and local-first get used interchangeably, but they answer different questions — one is about whether the app works with no network, the other about who owns the canonical copy of the data. Where the line falls, with examples from a 5M-user Flutter app."
url: https://bnsaed.com/articles/offline-first-vs-local-first
---

# Offline-First vs Local-First: What's the Difference?

*Subtitle: The two terms get used interchangeably, but they answer different questions. One is about whether the app works with no network; the other is about who owns the canonical copy of the data.*

"Offline-first" and "local-first" sound like synonyms, and plenty of posts treat them as one. They're not. **Offline-first** asks a question about *availability* — does the app keep working when the network drops? **Local-first** asks a question about *authority* — is the copy of the data on your device the real one, or just a cache of the server's? Every local-first app is offline-first, but the large majority of offline-first apps are not local-first. This piece draws the line, and shows where a real 5M-user Flutter app actually sits.

## The one-sentence difference

Offline-first is about **availability**: the app functions without a connection. Local-first is about **authority**: the copy of the data on the device is the source of truth, and the cloud is a sync peer — not the owner.

That sounds academic until you notice it changes your architecture, your conflict strategy, and what happens to a user's data the day your backend goes away.

## Offline-first: the app keeps working

Offline-first is a resilience principle that grew out of the mobile and progressive-web-app world. The idea is simple: treat the network as an *enhancement*, not a prerequisite. The app reads from a local cache so it never blocks on a round-trip, queues writes made offline and replays them on reconnect, and behaves as if the connection might vanish at any second — because on a phone, it might.

Crucially, in a classic offline-first app the **server is still the source of truth**. The local store is a cache: fast and useful, but disposable. If it's wiped, the app rebuilds it from the backend. Conflict resolution tends to be simple — last-write-wins, or "the server decides" — because there's an authority to defer to.

You know you're looking at offline-first when:

- The app opens and shows your data instantly, even in airplane mode.
- Actions you take offline don't fail — they're captured and synced later.
- But sign in on a fresh device with no network, and there's nothing there. The data lives on the server; the device only ever had a copy.

## Local-first: the device owns the data

**Local-first** is a stronger claim, and it has a specific origin: a 2019 essay from the research lab Ink & Switch, *"Local-first software: you own your data, in spite of the cloud."* It flips the authority relationship. The canonical copy of the data lives **on your device**. The cloud still exists — to sync between your devices, to back up, to enable collaboration — but it's a peer, not the owner. Delete the cloud account and you still have your data, in full, on your machine.

The essay lays out seven ideals a local-first app aims for: it's **fast** (no spinners waiting on a server), works across **multiple devices**, works **offline**, supports **real-time collaboration**, lasts for the **long term** (still opens in ten years), is **private and secure** by default, and leaves the user in **ultimate control** of their data.

The hard part of local-first is the flip side of its power. If the device is authoritative and two devices both edit while offline, there's no server to referee the merge. That's why local-first is tightly associated with **CRDTs** — conflict-free replicated data types — data structures that merge automatically and deterministically no matter what order the edits arrive in. CRDTs are what make "everyone's copy is canonical" actually work.

## Side by side

| | Offline-first | Local-first |
| --- | --- | --- |
| **Source of truth** | The server (local is a cache) | The device (cloud is a sync peer) |
| **Core motivation** | Resilience and UX | Data ownership, longevity, collaboration |
| **Conflict strategy** | Last-write-wins / server-authoritative | Automatic merge, often via CRDTs |
| **Lose the cloud and…** | The app degrades; data may be at risk | You still have all your data |
| **Where it came from** | Mobile / PWA engineering | Ink & Switch essay (2019) |
| **Typical products** | Most consumer apps | Notes, docs, design and collaboration tools |

## They're a spectrum, not opposites

The cleanest way to hold this: **local-first is a superset of offline-first.** A local-first app is, by definition, also offline-first — if the device owns the data, of course it works offline. But an offline-first app is usually *not* local-first, because the server is still where the truth lives.

Most real apps sit somewhere on the spectrum, and — this is the part people miss — **often at different points for different data.** A single app can be server-authoritative for one kind of data and device-authoritative for another.

## In practice: building each in Flutter

**To build offline-first**, you need three things: a local database as a cache (Drift or Hive), a read path that serves from that cache first, and a way to get writes out when you're back online. A repository that returns cached data immediately and refreshes in the background is the whole pattern:

```dart
Future<Either<Failure, List<Story>>> fetchStories() async {
  final cached = await _local.cachedStories(); // instant, offline-safe
  unawaited(_remote.refreshInBackground());     // sync, never blocks the UI
  return Right(cached);
}
```

Pair that with an offline write queue — persist the request locally, return an optimistic result, replay on reconnect — and you have a genuinely offline-first app while the server stays the source of truth.

**To move toward local-first**, you change *what's authoritative*. Instead of treating the local database as a disposable cache, you make it the primary store and use a sync engine that treats the device as a peer. Tools like **PowerSync** and ElectricSQL do exactly this: the SQLite database on the device is the thing your code reads and writes, and changes stream bidirectionally to the backend. For true multi-writer collaboration, you reach for CRDT libraries (Automerge, Yjs) so edits merge without a referee.

At [iStoria](/case-studies/offline-first-sync) the app is squarely **offline-first** for the catalog — the story content is server-authoritative, and the device holds a cache — while the learner's *own* progress leans local-first: your streaks, completed chapters, and stage progress live on the device in a local database, and PowerSync reconciles them in the background. That split is deliberate, and it's also the norm: pick the model per data type, not for the whole app.

## Which one do you actually need?

- **Reach for offline-first** if your users are sometimes offline and you simply don't want the app to break. That's almost every mobile app, and it's the right default.
- **Reach for local-first** when data *ownership* is part of the product promise — privacy, longevity, no lock-in — or when you need real-time collaboration on user-created content. Notes apps, document editors, and design tools are the classic cases.
- **Don't pay the CRDT tax you don't need.** If your data has a natural authority — a backend that already arbitrates — full local-first with automatic merge is complexity you can skip.

## The takeaway

Offline-first is a **UX guarantee**: the app works without a network. Local-first is a **data-ownership stance**: the device holds the real copy, and the cloud serves it. They overlap, but they're not the same decision — and the most useful move is to stop choosing one for the whole app and start choosing per data type.

If you want the production version of how this plays out — the read path, the offline write queue, and where the authority line actually falls — I wrote it up in the [offline-first case study](/case-studies/offline-first-sync), and I gave a [talk on building unstoppable offline-first apps](/speaking).
