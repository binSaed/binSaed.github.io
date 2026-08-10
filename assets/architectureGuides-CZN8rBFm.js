const e=[{slug:"clean-architecture",title:"Flutter Clean Architecture: A Complete Guide",seoTitle:"Flutter Clean Architecture: Complete Guide with Example",description:"A practical Flutter Clean Architecture guide — layer separation, dependency rule, folder structure, and a full Dart example from a 5M-user codebase.",category:"Architecture",difficulty:"Advanced",date:"2026-08-10",dateModified:"2026-08-10",intro:`Clean Architecture in Flutter is not about layers for the sake of layers — it is about making change cheap and testing easy. On iStoria, a 5M+ user education app with 50+ modules, Clean Architecture is what lets a 4-engineer squad ship weekly without a tangled rewrite every quarter.

The core idea is the dependency rule: dependencies point inward. The domain layer knows nothing about Flutter, HTTP, or SQLite. The data layer implements the domain's contracts. The presentation layer talks to the domain through use cases. Each boundary is an interface, which means you can swap the database, the HTTP client, or the state management library without touching the business rules.

This guide is the pattern I use in production — not the textbook version that spawns six use cases per feature. It is trimmed to what actually pays off at scale: testable domain logic, swappable data sources, and a presentation layer that is dumb on purpose.`,body:`## What Clean Architecture Actually Solves

Before adopting Clean Architecture, our codebase had a common sickness: business logic lived inside widget trees and API callbacks. Changing the database schema broke the UI. Testing meant booting the whole app. Onboarding a new engineer took weeks because there was no single place to look for "the rules of the business."

Clean Architecture forces three separations:

1. **Domain** — the business rules. Entities, value objects, repository *contracts* (abstract interfaces), and use cases. Pure Dart. No Flutter, no I/O.
2. **Data** — the implementation of those contracts. Repositories that coordinate remote and local data sources, DTOs, mappers, and the actual HTTP/database clients.
3. **Presentation** — the UI and state management. Widgets, BLoC/Cubit, routing. It depends on use cases, never on repositories directly.

The dependency rule is non-negotiable: **inner layers never import from outer layers.** The domain layer has zero knowledge of \`flutter\`, \`dio\`, \`drift\`, or \`bloc\`. This is what makes the domain testable in isolation and portable across state management choices.

## Layers in Detail

### Domain Layer

The domain layer holds the contracts and the rules. A repository is defined here as an abstract class — the data layer will implement it. Use cases (or "interactors") orchestrate one business operation each.

Keep use cases thin. If a use case is just \`repository.get()\`, skip it and call the repository directly from the BLoC. We learned this the hard way: dozens of pass-through use cases added ceremony without value. A use case earns its existence when it coordinates multiple repositories or enforces a business rule the repository should not know about.

### Data Layer

Repositories here implement the domain's abstract contracts. They depend on remote and local data sources, map DTOs to domain entities, and decide cache strategy. The key principle: the domain defines \`getLessons()\` returns \`List<Lesson>\`. The data layer decides whether that comes from the API, Drift, or PowerSync's sync engine. The domain never knows.

Mappers live here, not in entities. A \`LessonModel\` (DTO) has a \`toEntity()\` method. The domain entity has no \`fromJson\`. This keeps the domain pure.

### Presentation Layer

The presentation layer consumes use cases and renders state. At iStoria we use BLoC and Cubit — Cubit for simple feature states, BLoC for features with complex event flows or analytics requirements. The BLoC depends on use cases (or repositories for simple features), never on Dio, Drift, or any data-layer concrete class.

Widgets subscribe to the BLoC's state stream and render pure functions of state. No business logic in widgets. No \`if (response.statusCode == 200)\` in a \`build()\` method.

## The Dependency Rule in Practice

Here is the litmus test: can you delete the entire data and presentation layer and still compile the domain? If yes, your boundaries are clean. If the domain imports \`dart:io\` or \`flutter/foundation.dart\`, the boundary is broken.

At iStoria, we enforce this with import linting. The domain package has a \`analysis_options.yaml\` that bans \`package:flutter/*\`, \`package:dio/*\`, \`package:drift/*\`. A CI check fails the build if someone sneaks a Flutter import into the domain. This is more valuable than any architecture diagram.

## When to Use It vs. Skip It

Clean Architecture has a cost: indirection. For a prototype or a throwaway feature, three layers per feature is overkill. We use a lighter pattern for experiments — a repository and a Cubit, no separate domain package. When the feature stabilizes and acquires business rules worth protecting, we promote it to the full layered structure.

The rule of thumb: **use Clean Architecture when the business logic is complex enough that you would be afraid to change it without tests.** If the feature is CRUD over an API with no business rules, a repository + Cubit is enough.

## Testing Strategy

The layered structure pays for itself in testing. The domain is tested with pure unit tests — no mocks of Flutter, HTTP, or databases. The data layer is tested with fakes for remote/local sources. The presentation layer is tested with mocked use cases and widget tests.

This is the single biggest payoff: you can test the business rules in milliseconds, without a device, without a network mock, without waiting for a build. On a 50+ module codebase, that speed is what keeps the team shipping.`,folderStructure:`lib/
├── core/                    # shared utilities, theme, routing, DI container
│   ├── error/
│   │   ├── failures.dart
│   │   └── exceptions.dart
│   ├── usecases/
│   │   └── usecase.dart     # abstract UseCase<Type, Params>
│   └── utils/
├── features/
│   └── lesson/
│       ├── domain/
│       │   ├── entities/
│       │   │   └── lesson.dart
│       │   ├── repositories/
│       │   │   └── lesson_repository.dart   # abstract contract
│       │   └── usecases/
│       │       └── get_lessons.dart
│       ├── data/
│       │   ├── datasources/
│       │   │   ├── lesson_remote_datasource.dart
│       │   │   └── lesson_local_datasource.dart
│       │   ├── models/
│       │   │   └── lesson_model.dart        # DTO + toEntity/fromJson
│       │   └── repositories/
│       │       └── lesson_repository_impl.dart
│       └── presentation/
│           ├── bloc/
│           │   ├── lesson_bloc.dart
│           │   ├── lesson_event.dart
│           │   └── lesson_state.dart
│           ├── pages/
│           │   └── lesson_page.dart
│           └── widgets/
│               └── lesson_card.dart`,codeExample:`// domain/entities/lesson.dart — PURE DART, no Flutter imports
class Lesson {
  final String id;
  final String title;
  final int durationMinutes;
  final bool isCompleted;
  final String courseId;

  const Lesson({
    required this.id,
    required this.title,
    required this.durationMinutes,
    required this.isCompleted,
    required this.courseId,
  });

  Lesson copyWith({
    String? title,
    int? durationMinutes,
    bool? isCompleted,
  }) {
    return Lesson(
      id: id,
      title: title ?? this.title,
      durationMinutes: durationMinutes ?? this.durationMinutes,
      isCompleted: isCompleted ?? this.isCompleted,
      courseId: courseId,
    );
  }
}

// domain/repositories/lesson_repository.dart — CONTRACT only, no implementation
abstract class LessonRepository {
  Future<Either<Failure, List<Lesson>>> getLessons(String courseId);
  Future<Either<Failure, Lesson>> markComplete(String lessonId);
  Stream<List<Lesson>> watchLessons(String courseId);
}

// data/repositories/lesson_repository_impl.dart — THE IMPLEMENTATION
class LessonRepositoryImpl implements LessonRepository {
  final LessonRemoteDatasource remoteDatasource;
  final LessonLocalDatasource localDatasource;
  final NetworkInfo networkInfo;

  LessonRepositoryImpl({
    required this.remoteDatasource,
    required this.localDatasource,
    required this.networkInfo,
  });

  @override
  Future<Either<Failure, List<Lesson>>> getLessons(String courseId) async {
    if (await networkInfo.isConnected) {
      try {
        final remoteLessons = await remoteDatasource.fetchLessons(courseId);
        await localDatasource.cacheLessons(courseId, remoteLessons);
        return Right(remoteLessons.map((m) => m.toEntity()).toList());
      } on ServerException {
        // Fall through to local — offline-first cache strategy
      }
    }
    try {
      final localLessons = await localDatasource.getCachedLessons(courseId);
      return Right(localLessons.map((m) => m.toEntity()).toList());
    } on CacheException {
      return Left(CacheFailure());
    }
  }

  @override
  Stream<List<Lesson>> watchLessons(String courseId) {
    return localDatasource
        .watchCachedLessons(courseId)
        .map((models) => models.map((m) => m.toEntity()).toList());
  }
}`,checklist:["Start with the domain layer: define entities and abstract repository contracts before writing any implementation.","Create the data layer: implement repository contracts with remote and local data sources, DTOs, and mappers.","Wire up dependency injection so the presentation layer receives abstract types, never concrete implementations.","Build the presentation layer with BLoC or Cubit depending on the feature's event complexity.","Write unit tests for the domain layer first — they should run with zero Flutter or network dependencies.","Add import linting that bans Flutter and I/O packages in the domain layer, enforced in CI.","Promote features from lightweight (repository + Cubit) to full Clean Architecture only when business logic justifies it."],commonMistakes:["Creating a pass-through use case for every single repository call — use cases should earn their existence by coordinating or enforcing rules.","Putting fromJson / toJson on domain entities instead of on data-layer DTO models, leaking serialization concerns inward.","Having the BLoC import Dio or Drift directly, bypassing the repository abstraction and coupling state to infrastructure.","Building all three layers for trivial CRUD features with zero business logic, adding ceremony without value.","Skipping import linting — without CI enforcement, the dependency rule erodes within weeks as shortcuts accumulate."],relatedArticles:["managing-large-flutter-codebases","flutter-build-flavors-guide"],relatedCaseStudies:["istoria"],relatedGlossary:["clean-architecture","repository-pattern","dependency-injection","bloc","modular-architecture"],faqs:[{q:"Is Clean Architecture overkill for a small Flutter app?",a:"For a prototype or an app with little business logic, yes. Start with a repository + Cubit per feature. Promote to full layered Clean Architecture when the business rules become complex enough that you need to test them in isolation and protect them from UI or data-source changes."},{q:"Should every repository method have its own use case?",a:"No. Use cases exist to coordinate multiple repositories or enforce a business rule. If a use case is just forwarding a call to a single repository method, skip it and call the repository directly from the BLoC. Pass-through use cases add ceremony without value."},{q:"How does Clean Architecture work with BLoC?",a:"The BLoC lives in the presentation layer and depends on use cases or repositories (abstract contracts from the domain). The BLoC never imports concrete data-layer classes. This means you can test the BLoC with mocked use cases and swap the state management library without touching business rules."}]},{slug:"feature-modular",title:"Flutter Feature-First Modular Architecture",seoTitle:"Flutter Feature-First Modular Architecture Guide",description:"How to structure a Flutter app feature-first with modular packages. Folder structure, shared kernels, and boundary rules from a 50+ module production codebase.",category:"Architecture",difficulty:"Intermediate",date:"2026-08-10",dateModified:"2026-08-10",intro:`Feature-first modular architecture is the difference between a Flutter codebase that scales and one that collapses under its own weight. At iStoria, we run 50+ modules across a 4-engineer squad. If everything lived in a flat \`lib/\` folder, nobody would be able to find anything, and every change would risk breaking an unrelated feature.

Feature-first means the code is organized by *feature* (lesson, course, auth, profile), not by *type* (all models together, all widgets together, all repositories together). Each feature owns its own widgets, state, data, and domain. Features communicate through contracts, not through direct imports of each other's internals.

The goal is blast-radius containment: a change inside the lesson feature should not require reading or modifying the course feature. This guide shows the pattern we use to achieve that at scale.`,body:`## Feature-First vs. Layer-First

Layer-first organization (\`lib/models/\`, \`lib/widgets/\`, \`lib/repositories/\`) works for apps under ~10 screens. Beyond that, it breaks down. To change a feature, you open six directories across the project. Merge conflicts multiply because every feature touches the same folders. Feature-first fixes this by grouping everything a feature needs under one directory.

Feature-first and Clean Architecture are complementary, not competing. Within each feature directory, you apply the domain/data/presentation split. The feature directory is the *horizontal* boundary; Clean Architecture is the *vertical* boundary within each feature.

## The Shared Core Problem

Every modular architecture hits the same wall: features need to share *something*. Common UI widgets, networking utilities, the DI container, the theme. If features import these directly from each other, you have coupling. The solution is a shared \`core/\` or \`shared/\` package that features depend on, but that depends on nothing.

At iStoria, we split this into:

- **core/** — framework-level utilities (network client, error handling, DI setup, routing, theme). No business logic.
- **shared/** — cross-feature UI components and shared domain concepts (the User entity used by auth, profile, and social features).

The rule: \`core/\` and \`shared/\` never import from \`features/\`. Dependencies flow inward. This is the same dependency rule as Clean Architecture, applied at the package level.

## Package Splitting Strategy

For a large app, consider splitting features into actual Dart packages (Melos-managed monorepo). Each feature becomes a \`packages/feature_lesson/\` with its own \`pubspec.yaml\`. This enforces boundaries at the compiler level — a feature literally cannot import another feature's internals because it is not a dependency.

We did not start this way. We started with a single app package and feature directories. When we hit ~30 features, we began extracting the most independent ones into packages. The lesson: **do not start with a monorepo.** Start with feature directories inside the app. Extract to packages only when the boundary is stable and the compilation time becomes a problem.

## Cross-Feature Communication

Features should not import each other directly. Instead:

1. **Shared contracts** — if feature A needs to trigger something in feature B, define an abstract interface in \`shared/\` that both depend on. Feature B implements it; feature A calls it through DI.
2. **Navigation via routing** — features do not push each other's widgets directly. They call a route name registered in the core router. This decouples features from each other's widget trees.
3. **Event-based** — for loose coupling, a simple event bus or stream can work, but use sparingly. Over-reliance on events makes the data flow impossible to trace.

## Managing 50+ Modules

At iStoria's scale (50+ modules, 5M+ users), feature-first modular architecture is survival. The key practices:

- Each feature has an owner. When a bug appears in the lesson flow, there is exactly one engineer who knows that feature cold.
- Features are independently testable. Each feature has its own test directory testing its BLoC, repository, and widgets in isolation.
- The \`core/\` package changes rarely and is reviewed by a lead. Most PRs touch a single feature directory.
- We use barrel files (\`feature_lesson.dart\`) that export only the public API of each feature — the pages and widgets other features are allowed to see. Everything else is private to the feature.

## Common Failure Modes

The most common failure is the "shared utils" dump. Engineers under deadline pressure throw a helper into \`core/utils/\` instead of asking whether it belongs in the feature. Over time, \`core/\` grows into a dependency that every feature transitively couples to. The fix is discipline: \`core/\` should contain only framework-level concerns. If it is business logic, it goes in a feature or in \`shared/\`.`,folderStructure:`lib/
├── main.dart
├── core/                       # framework-level, no business logic
│   ├── di/
│   │   └── injection.dart      # get_it / injectable setup
│   ├── networking/
│   │   ├── dio_client.dart
│   │   └── interceptors/
│   ├── error/
│   │   ├── failures.dart
│   │   └── error_handler.dart
│   ├── routing/
│   │   └── app_router.dart     # centralized GoRouter / AutoRoute config
│   ├── theme/
│   └── constants/
├── shared/                     # cross-feature domain + UI
│   ├── domain/
│   │   └── entities/
│   │       └── user.dart       # shared User entity
│   └── widgets/
│       ├── loading_indicator.dart
│       └── empty_state.dart
└── features/
    ├── auth/
    │   ├── domain/
    │   │   ├── entities/
    │   │   ├── repositories/
    │   │   │   └── auth_repository.dart
    │   │   └── usecases/
    │   ├── data/
    │   │   ├── datasources/
    │   │   ├── models/
    │   │   └── repositories/
    │   │       └── auth_repository_impl.dart
    │   ├── presentation/
    │   │   ├── cubit/
    │   │   │   ├── auth_cubit.dart
    │   │   │   └── auth_state.dart
    │   │   ├── pages/
    │   │   └── widgets/
    │   └── auth.dart            # barrel file — public API only
    ├── lesson/
    │   ├── domain/
    │   ├── data/
    │   ├── presentation/
    │   └── lesson.dart
    └── course/
        ├── domain/
        ├── data/
        ├── presentation/
        └── course.dart`,codeExample:`// features/auth/auth.dart — BARREL FILE: the only thing other features import
export 'presentation/pages/login_page.dart';
export 'presentation/cubit/auth_cubit.dart';
export 'domain/entities/user.dart';

// NOTE: auth_repository_impl.dart, auth_datasource.dart, auth_models.dart
// are NOT exported. They are implementation details private to the auth feature.

// shared/domain/entities/user.dart — shared across features
class AppUser {
  final String id;
  final String name;
  final String email;
  final String? avatarUrl;

  const AppUser({
    required this.id,
    required this.name,
    required this.email,
    this.avatarUrl,
  });
}

// core/di/injection.dart — features register their dependencies here
// but only through their public barrel API
final getIt = GetIt.instance;

Future<void> configureDependencies() async {
  // Core
  getIt.registerLazySingleton<DioClient>(() => DioClient());

  // Auth feature — only the public types are visible
  getIt.registerFactory<AuthCubit>(
    () => AuthCubit(repository: getIt<AuthRepository>()),
  );
}

// Cross-feature navigation — features call route names, not each other's widgets
// core/routing/app_router.dart
final appRouter = GoRouter(
  routes: [
    GoRoute(
      path: '/login',
      name: 'login',           // other features use appRouter.go('login')
      builder: (context, state) => const LoginPage(),
    ),
    GoRoute(
      path: '/lesson/:id',
      name: 'lessonDetail',
      builder: (context, state) => LessonDetailPage(
        lessonId: state.pathParameters['id']!,
      ),
    ),
  ],
);`,checklist:["Group every feature's domain, data, and presentation code under one feature directory — never split by type.","Create a core/ package for framework-level concerns (networking, DI, routing, theme) with zero business logic.","Create a shared/ package for cross-feature entities and widgets that core/ must not depend on.","Add a barrel file per feature that exports only the public API other features are allowed to import.","Route cross-feature navigation through named routes, never direct widget imports between features.","Enforce boundaries with import linting or, at large scale, by extracting features into separate Dart packages.","Assign each feature an owner so there is always one engineer who knows that feature cold."],commonMistakes:["Letting core/utils/ become a dumping ground for helpers that belong in a feature or in shared/.","Features importing each other's internal widgets or repositories directly instead of through barrel files or contracts.","Starting with a full Melos monorepo before the feature boundaries are stable — premature package splitting adds build complexity.","Putting navigation logic inside features that push other features' widgets directly, creating import cycles.","Not maintaining a barrel file, so implementation files leak into other features and boundaries silently erode."],relatedArticles:["managing-large-flutter-codebases","automate-pull-request-hygiene"],relatedCaseStudies:["istoria"],relatedGlossary:["modular-architecture","clean-architecture","dependency-injection","trunk-based-development"],faqs:[{q:"When should I split features into separate Dart packages?",a:"Start with feature directories inside a single app package. Extract into packages (via Melos or similar) only when you have 20+ features and the boundaries are stable enough that package-level dependency enforcement is worth the build-complexity cost. Compiler-enforced boundaries are valuable but premature splitting slows iteration."},{q:"How do features communicate without importing each other?",a:"Three ways: shared abstract contracts in core/ or shared/ that both features depend on (implemented by one, called by the other through DI), named routes for navigation (features call route names, not each other's widgets), and sparingly, an event bus for truly decoupled notifications."},{q:"What goes in core/ vs. shared/?",a:"core/ holds framework-level concerns: the network client, DI container, router, theme, error handling. shared/ holds cross-feature domain concepts (like the User entity) and reusable UI components. The rule: core/ has no business logic and never imports from features/. shared/ may hold shared business entities but also never imports from features/."}]},{slug:"offline-first-guide",title:"How to Build Offline-First Flutter Apps",seoTitle:"How to Build Offline-First Flutter Apps: Guide",description:"A how-to guide for offline-first Flutter apps: local database as source of truth, background sync, conflict resolution, and a Dart template using PowerSync + Drift.",category:"Data & Sync",difficulty:"Advanced",date:"2026-08-10",dateModified:"2026-08-10",intro:`An offline-first app does not just "work without internet" — it treats the local database as the single source of truth and syncs to the server as a background concern. Users read and write against local data with zero latency, and the sync engine reconciles changes when connectivity returns.

At iStoria, we serve 5M+ users across regions with unreliable connectivity. An offline-first architecture is not a luxury; it is the reason the app feels instant. We use PowerSync on top of Drift to handle the sync engine, but the patterns in this guide apply regardless of your sync technology.

This is a how-to/template guide — the specific pattern for building offline-first data flows. For the full story of why we chose this architecture and what it took to scale it at iStoria, read the offline-first sync case study.`,body:`## The Mental Model: Local Is Truth

The fundamental shift in offline-first architecture is this: **the local database is the source of truth, not the server.** Every read comes from the local database (instant, no network round-trip). Every write goes to the local database first (also instant), then a sync engine propagates it to the server asynchronously.

This is the opposite of the typical online-first pattern where the app calls the API, waits for the response, and caches the result. In that pattern, the cache is a performance optimization layered on top of network calls. In offline-first, the network is a sync concern layered on top of local operations.

## The Three Components

1. **Local database** — the source of truth. At iStoria, this is Drift (formerly Moor), a reactive SQLite wrapper for Flutter. Every read is a stream from the local database. Every write is a local insert/update/delete.

2. **Sync engine** — propagates local changes to the server and pulls server changes down to the local database. We use PowerSync, which provides a managed sync layer that handles the wire protocol, conflict resolution, and reconnection. You can build your own with a change log + polling/SSE, but that is a significant engineering effort.

3. **Connectivity awareness** — the UI needs to reflect sync status (synced, syncing, pending changes, conflict). The app needs to handle the transitions gracefully — queue writes when offline, resume sync when online, and show the user what is happening.

## Reading: Streams, Not Futures

In an offline-first app, reads are reactive streams, not one-shot futures. When you write to the local database, the stream emits a new value and the UI updates automatically. When the sync engine pulls changes from the server, the stream emits again. The UI does not need to know whether the change was local or remote — it just reacts to the stream.

This is why Drift's \`watch()\` method and PowerSync's reactive queries are so powerful. The UI subscribes to a query result, and the database notifies it whenever the result set changes. No manual refresh, no pull-to-refresh, no invalidation logic.

## Writing: Optimistic Local First

Writes follow an optimistic pattern:

1. Write to the local database immediately (the UI reflects the change via the stream).
2. The sync engine detects the local change and queues it for upload.
3. If online, the change is pushed to the server. If offline, it sits in the queue.
4. When connectivity returns, the queue is flushed.

If the server rejects the change (validation error, conflict), the sync engine triggers a conflict resolution callback. Your app decides what to do: last-write-wins, merge, or prompt the user. At iStoria, we use last-write-wins for most data and field-level merging for collaborative content.

## Conflict Resolution

Conflicts happen when the same record is modified on two devices before syncing. The three common strategies:

- **Last-write-wins (LWW):** The change with the latest timestamp wins. Simple, good enough for most data. Requires clocks to be roughly synchronized.
- **Field-level merge:** Non-overlapping field changes are merged. Requires a sync engine that understands field-level changes, not just whole-record overwrites.
- **Custom resolution:** For high-value conflicts, prompt the user or apply domain-specific logic.

Most apps use LWW for 95% of data and custom resolution for the handful of cases where it matters. Do not over-engineer conflict resolution until you have a real conflict problem.

## Sync Status in the UI

The user should always know the state of their data. We show four states:

- **Synced** — all local changes have been confirmed by the server.
- **Syncing** — changes are being uploaded or downloaded.
- **Pending** — local changes are queued but not yet synced (offline or in queue).
- **Error/Conflict** — the last sync failed and needs attention.

This is not just a nice-to-have. On an app used in low-connectivity regions, users *will* wonder whether their progress was saved. A clear sync indicator builds trust.

## Testing Offline Behavior

Test the offline/online transitions explicitly. In integration tests, toggle connectivity and verify that writes are queued, reads still work, and sync resumes correctly. The biggest bugs in offline-first apps happen at the transition points — going offline mid-sync, coming back online with a large queue, or handling partial sync failures.`,folderStructure:`lib/
├── core/
│   ├── database/
│   │   ├── app_database.dart          # Drift database definition
│   │   └── tables/
│   │       ├── lessons.dart
│   │       └── sync_queue.dart        # pending local changes
│   ├── sync/
│   │   ├── sync_engine.dart           # PowerSync / custom sync coordinator
│   │   ├── connectivity_manager.dart
│   │   └── conflict_resolver.dart
│   └── error/
└── features/
    └── lesson/
        ├── domain/
        │   ├── entities/lesson.dart
        │   └── repositories/lesson_repository.dart
        ├── data/
        │   ├── datasources/
        │   │   └── lesson_local_datasource.dart   # Drift queries
        │   └── repositories/
        │       └── lesson_repository_impl.dart     # reads stream, writes local
        └── presentation/
            ├── cubit/
            │   ├── lesson_cubit.dart
            │   └── lesson_state.dart               # includes syncStatus
            └── widgets/
                └── sync_status_badge.dart`,codeExample:`// domain/repositories/lesson_repository.dart — offline-first contract
abstract class LessonRepository {
  /// Reactive stream from the LOCAL database — instant, no network wait.
  /// Updates automatically when sync pulls new data from the server.
  Stream<List<Lesson>> watchLessons(String courseId);

  /// Optimistic write: saves to local DB first, sync engine handles upload.
  Future<Either<Failure, Lesson>> markComplete(String lessonId);

  /// Forces a sync cycle (used by "refresh" gestures and connectivity restore).
  Future<Either<Failure, void>> syncNow();
}

// data/repositories/lesson_repository_impl.dart
class LessonRepositoryImpl implements LessonRepository {
  final LessonLocalDatasource localDatasource;
  final SyncEngine syncEngine;

  LessonRepositoryImpl({
    required this.localDatasource,
    required this.syncEngine,
  });

  @override
  Stream<List<Lesson>> watchLessons(String courseId) {
    // This stream emits from the local Drift database.
    // When syncEngine pulls server changes and writes them locally,
    // Drift's watch() fires and the UI gets the new data automatically.
    return localDatasource
        .watchLessonsByCourse(courseId)
        .map((rows) => rows.map(_toEntity).toList());
  }

  @override
  Future<Either<Failure, Lesson>> markComplete(String lessonId) async {
    try {
      // 1. Write to local DB immediately (optimistic — UI reacts via stream)
      await localDatasource.updateLessonStatus(
        lessonId,
        isCompleted: true,
        pendingSync: true,   // marks the row for the sync queue
      );

      // 2. Sync engine picks up pendingSync rows and uploads them.
      // If offline, they sit in the queue until connectivity returns.
      unawaited(syncEngine.enqueueUpload(LessonCompletedEvent(lessonId)));

      // 3. Return success — the user sees their change instantly
      final updated = await localDatasource.getLessonById(lessonId);
      return Right(_toEntity(updated));
    } on CacheException {
      return Left(CacheFailure());
    }
  }

  @override
  Future<Either<Failure, void>> syncNow() async {
    try {
      await syncEngine.forceSync();
      return const Right(null);
    } on SyncException catch (e) {
      return Left(SyncFailure(message: e.message));
    }
  }

  Lesson _toEntity(LessonEntry row) => Lesson(
        id: row.id,
        title: row.title,
        durationMinutes: row.durationMinutes,
        isCompleted: row.isCompleted,
        courseId: row.courseId,
      );
}

// presentation/cubit/lesson_state.dart — sync status is part of UI state
abstract class LessonState {}
class LessonInitial extends LessonState {}
class LessonLoading extends LessonState {}
class LessonLoaded extends LessonState {
  final List<Lesson> lessons;
  final SyncStatus syncStatus;    // synced | syncing | pending | error

  LessonLoaded({required this.lessons, required this.syncStatus});
}`,checklist:["Choose a local database that supports reactive streams (Drift/watch or PowerSync reactive queries).","Make every read a stream from the local database — never a network call that the UI waits on.","Write to the local database first (optimistic), then enqueue a sync upload — the UI reflects the change immediately.","Implement a connectivity manager that pauses the sync queue when offline and flushes it when online.","Define a conflict resolution strategy per data type — last-write-wins for most, custom for high-value fields.","Show sync status in the UI (synced, syncing, pending, error) so users trust their data is safe.","Write integration tests that toggle connectivity mid-operation and verify queued writes resume correctly."],commonMistakes:["Treating the local database as a cache rather than the source of truth, leading to stale data and cache-invalidation bugs.","Using one-shot Future reads instead of reactive streams, so the UI does not update when sync pulls new data.","Not showing sync status to users, causing anxiety about whether progress was saved in low-connectivity regions.","Over-engineering conflict resolution for every field when last-write-wins handles 95% of cases.","Forgetting to test the offline-to-online transition — the most common source of sync bugs."],relatedArticles:["offline-first-vs-local-first","managing-large-flutter-codebases"],relatedCaseStudies:['offline-first-sync", "istoria'],relatedGlossary:["offline-first","local-first","powersync","drift","repository-pattern","reactive-programming"],faqs:[{q:"What is the difference between offline-first and local-first?",a:"Offline-first means the app works without connectivity but still treats the server as the primary source of truth — the local database is a fast cache with sync. Local-first means the local database IS the primary source of truth permanently; the server is a sync peer, not an authority. Offline-first is more common in client-server apps; local-first is used in collaborative apps. See our offline-first vs. local-first article for the full breakdown."},{q:"Do I need PowerSync, or can I build my own sync engine?",a:"You can build your own with a change log table + polling or SSE, but it is significant engineering effort — conflict resolution, reconnection logic, partial sync recovery, and schema migrations all become your problem. PowerSync handles these for you. For a team of 4 engineers serving 5M users, a managed sync layer was the right call. Build your own only if you have a dedicated platform team."},{q:"How do I handle conflicts in an offline-first app?",a:"Start with last-write-wins (LWW) for most data — it is simple and handles 95% of cases. For fields where concurrent edits are common (collaborative content), use field-level merging or prompt the user. Design your conflict resolution per data type, not globally. And test conflict scenarios explicitly in integration tests."}]},{slug:"repository-pattern-guide",title:"Flutter Repository Pattern: A Practical Guide",seoTitle:"Flutter Repository Pattern: Practical Guide + Example",description:"A practical guide to the repository pattern in Flutter — abstract contracts, multiple data sources, cache strategy, and a full Dart example with offline fallback.",category:"Architecture",difficulty:"Intermediate",date:"2026-08-10",dateModified:"2026-08-10",intro:`The repository pattern is the single most impactful structural pattern in a Flutter app. It is the boundary between your business logic and your data sources — the place where you decide 'where does this data come from?' Without it, business logic leaks into API calls, database queries, and widget trees. With it, you can swap your backend, add caching, or go offline-first without touching a line of business code.

At iStoria, every feature has at least one repository. The repository is the only thing the presentation layer (BLoC/Cubit) knows about when it needs data. Whether that data comes from the API, the local Drift database, or PowerSync's sync layer is the repository's business — nobody else's.

This guide shows the pattern as we use it in production: abstract contracts in the domain, concrete implementations in the data layer, and the cache/offline strategies that make a 5M-user app feel instant.`,body:`## What the Repository Pattern Actually Does

A repository is an abstraction over data access. It presents a collection-like interface to the business logic: \`getLessons()\`, \`saveLesson()\`, \`watchCourse()\`. Behind that interface, the repository decides:

- Does this come from the remote API or the local cache?
- Do I need to refresh the cache from the network?
- What happens if the network fails — do I return stale local data?
- How do I map between the wire format (JSON DTO) and the domain entity?

The business logic never asks these questions. It calls \`repository.getLessons()\` and gets a \`List<Lesson>\` back. The repository handles everything else.

## The Abstract Contract

The repository is defined as an abstract class (interface) in the domain layer. This is the contract the rest of the app depends on. The implementation lives in the data layer.

Why abstract? Because it lets you:

1. **Mock it in tests** — your BLoC unit tests pass a mock repository, no network needed.
2. **Swap implementations** — switch from API-first to offline-first by changing the implementation, not the call sites.
3. **Vary by environment** — use a different repository implementation in development (fake data) vs. production (real API + cache).

## Data Source Coordination

The repository's main job in a real app is coordinating multiple data sources. At iStoria, a typical repository has:

- **Remote data source** — the API client (Dio) that fetches and posts to the server.
- **Local data source** — the Drift database that caches data locally for offline access.
- **Network info** — a connectivity checker that tells the repository whether the network is available.

The repository decides the strategy. The three common patterns:

### Cache-First (Network with Fallback)
Read from the network. If it fails, read from the local cache. This is the default for most data — you want fresh data but degrade gracefully offline.

### Cache-Then-Network (Stale-While-Revalidate)
Return the local cache immediately (instant UI), then fetch from the network in the background and update the cache. The UI gets two emissions: stale data fast, then fresh data.

### Local-Only (Offline-First)
Read exclusively from the local database. The sync engine handles populating it from the network. This is what we use for data synced via PowerSync.

## Mapping: DTOs vs. Entities

The repository maps between the wire format and the domain. The API returns a \`LessonModel\` (DTO with \`fromJson\`). The repository converts it to a \`Lesson\` (domain entity). The BLoC never sees the DTO.

This separation matters because the API format is driven by the backend and changes independently of your domain model. If the backend renames a field, you change the mapper, not every BLoC that uses the entity.

## Error Handling

Repositories return \`Either<Failure, T>\` (or a Result type), not raw values or exceptions. This forces the calling code to handle both success and failure explicitly. The Failure type is part of the domain — it represents business-meaningful errors (ServerFailure, CacheFailure, NotFoundFailure), not infrastructure exceptions.

See our error handling guide for the full \`Either<Failure, T>\` pattern. The key point here: the repository catches data-source exceptions and translates them into domain failures. The BLoC never catches a \`DioError\` or a \`DriftException\` — those are data-layer concerns.

## When You Have Multiple Sources of Truth

In an offline-first app with sync, the repository gets interesting. The local database is the source of truth, and the sync engine keeps it updated. The repository reads exclusively from local and writes to local. The sync engine handles the server.

But not all data is synced. For non-synced data (config, feature flags, one-off API calls), the repository uses the cache-first or cache-then-network strategy. Having a clear repository-per-data-strategy makes the codebase predictable: if you know which repository you are calling, you know the data strategy.`,folderStructure:`lib/features/lesson/
├── domain/
│   ├── entities/
│   │   └── lesson.dart                   # pure domain entity
│   └── repositories/
│       └── lesson_repository.dart         # ABSTRACT contract
├── data/
│   ├── datasources/
│   │   ├── lesson_remote_datasource.dart  # Dio API calls
│   │   └── lesson_local_datasource.dart   # Drift database queries
│   ├── models/
│   │   └── lesson_model.dart              # DTO: fromJson / toEntity
│   └── repositories/
│       └── lesson_repository_impl.dart     # CONCRETE implementation`,codeExample:`// domain/repositories/lesson_repository.dart — THE CONTRACT
abstract class LessonRepository {
  Future<Either<Failure, List<Lesson>>> getLessons(String courseId);
  Stream<List<Lesson>> watchLessons(String courseId);
  Future<Either<Failure, Lesson>> markComplete(String lessonId);
}

// data/models/lesson_model.dart — DTO (data transfer object)
class LessonModel extends Lesson {
  final String remoteId;

  const LessonModel({
    required this.remoteId,
    required super.id,
    required super.title,
    required super.durationMinutes,
    required super.isCompleted,
    required super.courseId,
  });

  factory LessonModel.fromJson(Map<String, dynamic> json) {
    return LessonModel(
      remoteId: json['id'] as String,
      id: json['uuid'] as String,
      title: json['title'] as String,
      durationMinutes: (json['duration_sec'] as num).toInt() ~/ 60,
      isCompleted: json['completed'] as bool? ?? false,
      courseId: json['course_id'] as String,
    );
  }

  Lesson toEntity() => Lesson(
        id: id,
        title: title,
        durationMinutes: durationMinutes,
        isCompleted: isCompleted,
        courseId: courseId,
      );
}

// data/repositories/lesson_repository_impl.dart — THE IMPLEMENTATION
class LessonRepositoryImpl implements LessonRepository {
  final LessonRemoteDatasource remoteDatasource;
  final LessonLocalDatasource localDatasource;
  final NetworkInfo networkInfo;

  LessonRepositoryImpl({
    required this.remoteDatasource,
    required this.localDatasource,
    required this.networkInfo,
  });

  @override
  Future<Either<Failure, List<Lesson>>> getLessons(String courseId) async {
    if (await networkInfo.isConnected) {
      try {
        final jsonList = await remoteDatasource.fetchLessons(courseId);
        final models = jsonList.map(LessonModel.fromJson).toList();

        // Cache locally for offline access
        await localDatasource.cacheLessons(courseId, models);

        return Right(models.map((m) => m.toEntity()).toList());
      } on ServerException catch (e) {
        // Network failed — try the cache before giving up
        return _getFromCache(courseId, fallbackFailure: ServerFailure(e.message));
      }
    }
    // Offline — serve from cache
    return _getFromCache(courseId, fallbackFailure: const OfflineFailure());
  }

  Future<Either<Failure, List<Lesson>>> _getFromCache(
    String courseId, {
    required Failure fallbackFailure,
  }) async {
    try {
      final cached = await localDatasource.getCachedLessons(courseId);
      if (cached.isEmpty) return Left(fallbackFailure);
      return Right(cached.map((m) => m.toEntity()).toList());
    } on CacheException {
      return Left(fallbackFailure);
    }
  }

  @override
  Stream<List<Lesson>> watchLessons(String courseId) {
    // Reactive stream from local DB — UI updates when cache or sync changes it
    return localDatasource
        .watchCachedLessons(courseId)
        .map((models) => models.map((m) => m.toEntity()).toList());
  }

  @override
  Future<Either<Failure, Lesson>> markComplete(String lessonId) async {
    try {
      // Optimistic: update local first
      await localDatasource.markComplete(lessonId);
      // Then sync to server
      await remoteDatasource.postCompletion(lessonId);
      final updated = await localDatasource.getLesson(lessonId);
      return Right(updated.toEntity());
    } on ServerException catch (e) {
      return Left(ServerFailure(e.message));
    }
  }
}`,checklist:["Define the repository as an abstract class in the domain layer — the contract the rest of the app depends on.","Create a concrete implementation in the data layer that coordinates remote and local data sources.","Create a DTO model class (with fromJson/toEntity) separate from the domain entity to handle wire format.","Choose a cache strategy per method: cache-first, cache-then-network, or local-only (offline-first).","Return Either<Failure, T> so calling code handles errors explicitly — never throw raw exceptions.","Inject the repository into BLoCs as the abstract type, never the concrete implementation.","Mock the abstract repository in unit tests — no network, no database, just contract verification."],commonMistakes:["Returning DTOs instead of domain entities, leaking the API format into business logic and BLoCs.","Letting exceptions propagate from the repository instead of catching and mapping them to domain Failures.","Putting all data-access logic in the BLoC instead of the repository, making the BLoC untestable and tightly coupled.","Not having an abstract interface, so the repository cannot be mocked in tests or swapped between environments.","Hardcoding a single data strategy (always network or always cache) instead of choosing per method based on requirements."],relatedArticles:["managing-large-flutter-codebases","offline-first-vs-local-first"],relatedCaseStudies:['istoria", "offline-first-sync'],relatedGlossary:["repository-pattern","clean-architecture","either-failure-pattern","offline-first","drift"],faqs:[{q:"Do I need a repository if I'm just calling a simple API?",a:"Yes, even for a simple API. The repository gives you a seam for testing (mock it), caching (add it later without changing call sites), and error handling (map exceptions to domain failures). A repository that just forwards to an API call today can gain caching or offline support tomorrow without its callers changing."},{q:"Should the repository return Future or Stream?",a:"Use Future for one-shot reads and writes. Use Stream for data that should reactively update in the UI (watch queries that emit when the underlying data changes). A repository can have both: getLessons() returns Future for the initial fetch, watchLessons() returns Stream for reactive updates from the local database."},{q:"How does the repository pattern work with offline-first sync?",a:"In an offline-first architecture, the repository reads exclusively from the local database and writes to it. The sync engine (PowerSync or custom) handles propagating changes to the server. The repository's job simplifies: it always talks to the local database. The sync strategy is handled by the sync engine, not the repository."}]},{slug:"dependency-injection-guide",title:"Flutter Dependency Injection: Provider, get_it, injectable",seoTitle:"Flutter Dependency Injection: Provider, get_it, injectable Guide",description:"A comparison and practical guide to Flutter DI: Provider vs. get_it vs. injectable. Which to choose, how to wire them up, and production patterns from a 50+ module app.",category:"Architecture",difficulty:"Intermediate",date:"2026-08-10",dateModified:"2026-08-10",intro:`Dependency injection (DI) is the plumbing that makes Clean Architecture work. Without it, your BLoCs new up their own repositories, your repositories new up their own HTTP clients, and before long every class is wired to concrete implementations that cannot be mocked or swapped.

Flutter has three main DI approaches: Provider (widget-tree based), get_it (service locator), and injectable (code generation on top of get_it). Each has trade-offs. At iStoria, we use get_it + injectable across our 50+ module codebase — it handles the scale without widget-tree coupling or manual registration.

This guide compares all three, shows when to use each, and provides a production wiring pattern with annotated factories, singletons, and environment-based registration.`,body:`## Why Dependency Injection Matters

Without DI, classes construct their own dependencies:

\`\`\`dart
// BAD — tightly coupled, untestable
class LessonCubit extends Cubit<LessonState> {
  LessonCubit() : super(LessonInitial()) {
    // Cubit creates its own repository, which creates its own Dio...
    _repository = LessonRepositoryImpl(
      remoteDatasource: LessonRemoteDatasource(Dio()),
      localDatasource: LessonLocalDatasource(database),
      networkInfo: NetworkInfoImpl(connectivity),
    );
  }
}
\`\`\`

This is impossible to test (you cannot swap the repository with a mock) and impossible to reconfigure (changing the Dio instance means editing every class). DI fixes this by inverting the control: dependencies are created externally and passed in.

## The Three Approaches

### Provider (Widget-Tree DI)

Provider uses \`InheritedWidget\` to make objects available down the widget tree. You register dependencies at the top of the tree and consume them with \`context.read()\` / \`context.watch()\`.

**Pros:** Built into Flutter (via the \`provider\` package). Simple for small apps. Scoped to the widget tree (dependencies are disposed when the subtree is disposed).

**Cons:** Everything is tied to \`BuildContext\`. You cannot access a repository from a non-widget context (a background service, a use case, a scheduled callback). At scale, the provider tree becomes deeply nested and hard to trace. Not suitable for Clean Architecture where the domain layer must not depend on Flutter.

**Use when:** The app is small (under ~10 screens), all dependencies are UI-scoped, and you do not need DI outside the widget tree.

### get_it (Service Locator)

get_it is a simple service locator. You register dependencies in a global container and retrieve them by type. No \`BuildContext\` needed.

**Pros:** Works anywhere — widgets, BLoCs, use cases, background tasks. Simple API (\`getIt.get()\` / \`getIt.call()\`). No code generation required. Decoupled from the widget tree.

**Cons:** Registration is manual — for a large app, the \`configureDependencies()\` function becomes long and brittle. Dependencies are not disposed automatically (you manage lifecycles). The service-locator pattern is sometimes considered an anti-pattern because it hides dependencies (a class can call \`getIt.get()\` internally rather than declaring its dependencies in the constructor).

**Use when:** You need DI outside the widget tree, want simplicity, and the app is medium-sized (manual registration is manageable).

### injectable (get_it + Code Generation)

injectable generates the get_it registration code from annotations. You annotate your classes with \`@injectable\`, \`@singleton\`, \`@LazySingleton\`, and injectable creates the wiring for you.

**Pros:** All the benefits of get_it, minus the manual registration. Adding a new dependency is just annotating the class and running build_runner. Supports environments (dev, prod, test) for different registrations. Scales effortlessly to 50+ modules.

**Cons:** Requires code generation (build_runner). Adds a build step to the development workflow. The generated code is verbose (but you never read it).

**Use when:** The app is large (10+ features), you want automatic registration, and the team is comfortable with code generation. This is what we use at iStoria.

## The Anti-Pattern to Avoid

Regardless of which DI tool you use, avoid this:

\`\`\`dart
// BAD — hidden dependency
class LessonCubit extends Cubit<LessonState> {
  LessonCubit() : super(LessonInitial()) {
    // Don't call getIt inside the class — declare the dependency in the constructor
    final repo = getIt<LessonRepository>();
  }
}

// GOOD — explicit dependency
@injectable
class LessonCubit extends Cubit<LessonState> {
  final LessonRepository repository;

  LessonCubit(this.repository) : super(LessonInitial());
}
\`\`\`

The constructor-injected version declares its dependency explicitly. injectable reads the constructor parameter and automatically resolves \`LessonRepository\` from the container. The class is testable (pass a mock) and its dependencies are visible at a glance.

## Environment-Based Registration

injectable supports environments — you can register different implementations for dev, prod, and test:

\`\`\`dart
@LazySingleton(as: AuthRepository, env: ['dev'])
class MockAuthRepository implements AuthRepository { ... }

@LazySingleton(as: AuthRepository, env: ['prod'])
class AuthRepositoryImpl implements AuthRepository { ... }
\`\`\`

At iStoria, we use this for feature flags (a local implementation in dev, a remote-config implementation in prod) and for analytics (a no-op in dev, a PostHog implementation in prod).

## Async Registration

Some dependencies require async initialization (a database that needs to open, a sync engine that needs to connect). get_it supports \`registerLazySingletonAsync\` and the \`isReady\` mechanism. Structure your app initialization so all async dependencies are resolved before the first route renders. A splash screen or an initialization gate handles this cleanly.`,folderStructure:`lib/
├── main.dart
├── core/
│   ├── di/
│   │   ├── injection.dart              # getIt instance + configureDependencies()
│   │   ├── injection.config.dart        # GENERATED by injectable
│   │   └── modules/
│   │       ├── network_module.dart      # @module providing Dio, interceptors
│   │       ├── database_module.dart     # @module providing Drift database
│   │       └── external_module.dart      # @module for third-party clients
│   └── ...
└── features/
    ├── auth/
    │   ├── data/repositories/auth_repository_impl.dart    # @LazySingleton
    │   └── presentation/cubit/auth_cubit.dart              # @injectable
    └── lesson/
        ├── data/repositories/lesson_repository_impl.dart   # @LazySingleton
        └── presentation/cubit/lesson_cubit.dart            # @injectable`,codeExample:`// pubspec.yaml
// dependencies:
//   get_it: ^8.0.0
//   injectable: ^2.6.0
// dev_dependencies:
//   injectable_generator: ^2.6.0
//   build_runner: ^2.4.0

// Run: dart run build_runner build --delete-conflicting-outputs

// core/di/injection.dart
import 'package:get_it/get_it.dart';
import 'package:injectable/injectable.dart';
import 'injection.config.dart';

final getIt = GetIt.instance;

@InjectableInit(preferRelativeImports: true)
Future<void> configureDependencies(String env) async {
  await getIt.init(environment: env);
}

// core/di/modules/network_module.dart — @module provides third-party deps
@module
abstract class NetworkModule {
  @lazySingleton
  Dio dio() {
    return Dio(BaseOptions(
      baseUrl: 'https://api.istoria.app/v2',
      connectTimeout: const Duration(seconds: 10),
      receiveTimeout: const Duration(seconds: 15),
    ))..interceptors.addAll([
        AuthInterceptor(getIt<AuthStorage>()),
        LogInterceptor(requestBody: true, responseBody: true),
      ]);
  }

  @lazySingleton
  Connectivity connectivity() => Connectivity();
}

// features/lesson/data/repositories/lesson_repository_impl.dart
@LazySingleton(as: LessonRepository)
class LessonRepositoryImpl implements LessonRepository {
  final LessonRemoteDatasource remoteDatasource;
  final LessonLocalDatasource localDatasource;
  final NetworkInfo networkInfo;

  // injectable reads these constructor params and resolves them from getIt
  const LessonRepositoryImpl(
    this.remoteDatasource,
    this.localDatasource,
    this.networkInfo,
  );

  @override
  Future<Either<Failure, List<Lesson>>> getLessons(String courseId) async {
    // ... implementation
  }
}

// features/lesson/presentation/cubit/lesson_cubit.dart
@injectable
class LessonCubit extends Cubit<LessonState> {
  final LessonRepository repository;

  LessonCubit(this.repository) : super(LessonInitial());

  Future<void> loadLessons(String courseId) async {
    emit(LessonLoading());
    final result = await repository.getLessons(courseId);
    result.fold(
      (failure) => emit(LessonError(failure.message)),
      (lessons) => emit(LessonLoaded(lessons)),
    );
  }
}

// main.dart — wire everything up
Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await configureDependencies(Environment.prod);
  runApp(MyApp());
}

// In a widget or anywhere in the app:
// final cubit = getIt<LessonCubit>();    // resolved with all dependencies`,checklist:["Choose your DI approach based on app size: Provider for small/widget-only apps, get_it for medium, injectable for large.","Never call getIt.get() inside a class body — always declare dependencies as constructor parameters.","Annotate repositories as @LazySingleton (created once, on first access) and BLoCs/Cubits as @injectable (new instance per access).","Create @module classes for third-party dependencies (Dio, Connectivity, database instances) that you do not own.","Use environments (dev/prod/test) to register different implementations for testing and feature-flagged services.","Run build_runner after adding or changing annotations to regenerate the registration code.","Resolve async dependencies before the first route renders using an initialization gate or splash screen."],commonMistakes:["Calling getIt.get() inside class methods instead of declaring dependencies in the constructor, hiding coupling.","Using Provider for everything in a Clean Architecture app, forcing the domain layer to depend on BuildContext.","Registering BLoCs as singletons when they should be factory-scoped, causing stale state across feature navigation.","Forgetting to run build_runner after annotation changes, leading to runtime 'type not registered' errors.","Not handling async dependency initialization, causing the first API call to fail because the database is not open yet."],relatedArticles:["managing-large-flutter-codebases","flutter-build-flavors-guide"],relatedCaseStudies:['istoria", "release-engineering'],relatedGlossary:["dependency-injection","clean-architecture","modular-architecture","build-flavors","feature-flags"],faqs:[{q:"Provider or get_it — which should I use?",a:"Use Provider if all your dependencies are UI-scoped and you never need DI outside the widget tree. Use get_it if you need to access dependencies from BLoCs, background services, or use cases without a BuildContext. For Clean Architecture specifically, get_it is the better choice because the domain layer must not depend on Flutter widgets."},{q:"Is injectable worth the code generation overhead?",a:"For apps with 10+ features, yes. Manual get_it registration becomes a 200-line file that breaks when you rename a class or add a parameter. Injectable eliminates that by generating the wiring from annotations. The build_runner step adds a few seconds to development but saves hours of debugging registration mismatches."},{q:"Should BLoCs be singletons or factories?",a:"BLoCs should be factory-scoped (@injectable, not @singleton) in most cases. A new instance per access means the state is fresh when the user navigates to the feature. Use @singleton only for app-wide BLoCs (like an AuthBloc or ThemeBloc) whose state must persist across navigation. A common mistake is singleton-scoping feature BLoCs, which causes stale state when revisiting a screen."}]},{slug:"bloc-architecture",title:"Flutter BLoC Architecture: Structuring Events, States & Logic",seoTitle:"Flutter BLoC Architecture: Events, States & Logic Guide",description:"A guide to structuring Flutter BLoC architecture — events, states, when to use BLoC vs. Cubit, stream transformers, and a full Dart example with testing.",category:"State Management",difficulty:"Advanced",date:"2026-08-10",dateModified:"2026-08-10",intro:"BLoC (Business Logic Component) is the state management pattern we use across iStoria's 50+ modules. It separates events (what happened), states (what the UI should show), and the bloc itself (the pure logic that transforms events into states). The result is testable state management that works for both simple and complex feature flows.\n\nThe BLoC ecosystem has two flavors: full BLoC (event-driven, using `EventTransformer`s and `on<Event>` handlers) and Cubit (simpler, function-based with `emit()`). At iStoria we use both — Cubit for features with straightforward state transitions, BLoC for features with complex event flows, debouncing, or analytics requirements.\n\nThis guide covers structuring events, states, and blocs the way a production team does it — not the minimal tutorial version, but the patterns that survive in a 5M-user codebase.",body:`## BLoC vs. Cubit: When to Use Which

**Cubit** is simpler. You call methods on it (\`loadLessons()\`, \`markComplete()\`) and those methods call \`emit()\` to update the state. Cubit is the right choice for features where the state transitions are driven by direct user actions — "user tapped this, emit that."

**BLoC** is event-driven. The UI dispatches events (\`LessonLoadRequested\`, \`LessonCompleted\`), and the BLoC transforms those events into states via registered handlers. BLoC is the right choice when you need:

- **Event debouncing or deduplication** — e.g., search-as-you-type with a 300ms debounce.
- **Event transformers** — e.g., \`restartable()\` to cancel the previous search when a new character arrives.
- **Complex event-to-state flows** — one event triggers multiple states (loading → success), or multiple events interact.
- **Auditable event history** — the event stream is loggable for debugging and analytics.

The rule at iStoria: **start with Cubit, upgrade to BLoC when you need event-level control.** Most features never need to upgrade.

## Structuring States

The most important principle: **states should be complete snapshots of the UI.** A widget should be able to render from the state alone, without combining it with other data.

The common pattern is a sealed class (or abstract class with subclasses):

\`\`\`dart
abstract class LessonState {}
class LessonInitial extends LessonState {}
class LessonLoading extends LessonState {}
class LessonLoaded extends LessonState {
  final List<Lesson> lessons;
  final bool hasReachedMax;
  LessonLoaded({required this.lessons, this.hasReachedMax = false});
}
class LessonError extends LessonState {
  final String message;
  LessonError(this.message);
}
\`\`\`

Avoid mutable state inside a state class. Every state is immutable. Transitions produce new state objects, not mutations of existing ones.

### The "Loading Inside Loaded" Pattern

A common mistake is representing every loading state as \`LessonLoading\` — which wipes the list when you pull-to-refresh. Instead, keep the loaded data and add a \`isRefreshing\` flag:

\`\`\`dart
class LessonLoaded extends LessonState {
  final List<Lesson> lessons;
  final bool isRefreshing;   // pull-to-refresh shows a spinner without clearing the list
  final bool isPaginating;   // infinite scroll shows a bottom spinner
}
\`\`\`

This is the difference between an app that flickers on every refresh and one that feels smooth.

## Structuring Events

Events should describe **what happened**, not **what to do**. Good event names are past-tense or noun phrases: \`LessonLoadRequested\`, \`LessonCompleted\`, \`SearchQueryChanged\`. Bad names: \`LoadLessons\`, \`DoSomething\`.

Events carry the data the BLoC needs to process them:

\`\`\`dart
class SearchQueryChanged extends LessonEvent {
  final String query;
  SearchQueryChanged(this.query);
}
\`\`\`

Do not put UI concerns in events (no \`BuildContext\`, no \`TextEditingController\`). Events are pure data.

## Event Transformers

Event transformers control how incoming events are processed relative to each other. The most useful ones from \`package:bloc_concurrency\`:

- **\`restartable()\`** — cancels the previous handler when a new event arrives. Use for search queries: typing a new character cancels the old search.
- **\`droppable()\`** — ignores new events while the handler is running. Use for submit buttons: prevent double-submission.
- **\`sequential()\`** — processes events one at a time in order. The default.
- **\`concurrent()\`** — processes all events concurrently.

\`\`\`dart
on<SearchQueryChanged>(_onSearchChanged, transformer: restartable());
on<SubmitPressed>(_onSubmit, transformer: droppable());
\`\`\`

These transformers prevent an entire class of race-condition bugs. At iStoria, every search input uses \`restartable()\` and every submit action uses \`droppable()\`.

## BLoC-to-BLoC Communication

BLoCs should not import each other directly. For cross-feature communication:

1. **Listener Bloc** — one BLoC subscribes to another's stream and reacts. Used when feature A needs to respond to state changes in feature B.
2. **Repository as mediator** — both BLoCs depend on a shared repository. When one writes, the other reads reactively. This is our preferred pattern at iStoria — it keeps BLoCs decoupled.
3. **Event-based** — one BLoC dispatches an event to another through a shared event bus. Use sparingly; it makes the flow hard to trace.

## Testing BLoCs

BLoC testing is one of the pattern's biggest wins. The \`bloc_test\` package lets you assert on state sequences:

\`\`\`dart
blocTest<LessonCubit, LessonState>(
  'emits [Loading, Loaded] when loadLessons succeeds',
  build: () {
    when(() => mockRepository.getLessons(any()))
        .thenAnswer((_) async => const Right([testLesson]));
    return LessonCubit(mockRepository);
  },
  act: (cubit) => cubit.loadLessons('course-1'),
  expect: () => [isA<LessonLoading>(), isA<LessonLoaded>()],
);
\`\`\`

This test runs in milliseconds, needs no device, and verifies the exact state sequence. This is why we invest in BLoC — the testability pays for the boilerplate.`,folderStructure:`lib/features/lesson/presentation/
├── bloc/
│   ├── lesson_bloc.dart         # BLoC: event handlers, transformers
│   ├── lesson_event.dart         # Events: what happened (past tense)
│   └── lesson_state.dart         # States: complete UI snapshots
├── cubit/                        # Use Cubit instead when the flow is simple
│   ├── lesson_cubit.dart
│   └── lesson_state.dart
├── pages/
│   └── lesson_page.dart          # BlocProvider + UI
└── widgets/
    ├── lesson_list.dart
    └── lesson_error_view.dart`,codeExample:`// lesson_event.dart — EVENTS describe what happened
abstract class LessonEvent {}
class LessonLoadRequested extends LessonEvent {
  final String courseId;
  LessonLoadRequested(this.courseId);
}
class LessonRefreshRequested extends LessonEvent {
  final String courseId;
  LessonRefreshRequested(this.courseId);
}
class LessonCompleted extends LessonEvent {
  final String lessonId;
  LessonCompleted(this.lessonId);
}
class LessonSearchChanged extends LessonEvent {
  final String query;
  LessonSearchChanged(this.query);
}

// lesson_state.dart — STATES are complete, immutable UI snapshots
abstract class LessonState {}
class LessonInitial extends LessonState {}
class LessonLoading extends LessonState {}
class LessonLoaded extends LessonState {
  final List<Lesson> lessons;
  final bool isRefreshing;
  final bool isPaginating;
  final bool hasReachedMax;

  const LessonLoaded({
    required this.lessons,
    this.isRefreshing = false,
    this.isPaginating = false,
    this.hasReachedMax = false,
  });

  LessonLoaded copyWith({
    List<Lesson>? lessons,
    bool? isRefreshing,
    bool? isPaginating,
    bool? hasReachedMax,
  }) {
    return LessonLoaded(
      lessons: lessons ?? this.lessons,
      isRefreshing: isRefreshing ?? this.isRefreshing,
      isPaginating: isPaginating ?? this.isPaginating,
      hasReachedMax: hasReachedMax ?? this.hasReachedMax,
    );
  }
}
class LessonError extends LessonState {
  final String message;
  final List<Lesson>? lastKnownLessons; // keep old data visible on error
  LessonError(this.message, {this.lastKnownLessons});
}

// lesson_bloc.dart — THE BLOC: pure logic, event → state
class LessonBloc extends Bloc<LessonEvent, LessonState> {
  final LessonRepository repository;

  LessonBloc(this.repository) : super(LessonInitial()) {
    on<LessonLoadRequested>(_onLoadRequested);
    on<LessonRefreshRequested>(_onRefreshRequested);
    on<LessonCompleted>(_onCompleted);
    on<LessonSearchChanged>(_onSearchChanged, transformer: restartable());
  }

  Future<void> _onLoadRequested(
    LessonLoadRequested event,
    Emitter<LessonState> emit,
  ) async {
    emit(LessonLoading());
    final result = await repository.getLessons(event.courseId);
    result.fold(
      (failure) => emit(LessonError(failure.message)),
      (lessons) => emit(LessonLoaded(lessons: lessons)),
    );
  }

  Future<void> _onRefreshRequested(
    LessonRefreshRequested event,
    Emitter<LessonState> emit,
  ) async {
    // Keep the existing data visible — just show the refresh indicator
    final currentLessons = _currentLessons;
    emit(LessonLoaded(lessons: currentLessons, isRefreshing: true));

    final result = await repository.getLessons(event.courseId);
    result.fold(
      (failure) => emit(LessonError(failure.message, lastKnownLessons: currentLessons)),
      (lessons) => emit(LessonLoaded(lessons: lessons)),
    );
  }

  Future<void> _onCompleted(
    LessonCompleted event,
    Emitter<LessonState> emit,
  ) async {
    final result = await repository.markComplete(event.lessonId);
    result.fold(
      (failure) => emit(LessonError(failure.message, lastKnownLessons: _currentLessons)),
      (_) {
        // Optimistic: update the local list immediately
        if (state is LessonLoaded) {
          final updated = _currentLessons.map((l) {
            return l.id == event.lessonId ? l.copyWith(isCompleted: true) : l;
          }).toList();
          emit((state as LessonLoaded).copyWith(lessons: updated));
        }
      },
    );
  }

  Future<void> _onSearchChanged(
    LessonSearchChanged event,
    Emitter<LessonState> emit,
  ) async {
    if (event.query.isEmpty) return; // restartable() cancels stale searches
    final result = await repository.searchLessons(event.query);
    result.fold(
      (failure) => emit(LessonError(failure.message)),
      (lessons) => emit(LessonLoaded(lessons: lessons)),
    );
  }

  List<Lesson> get _currentLessons =>
      state is LessonLoaded ? (state as LessonLoaded).lessons : [];
}

// TEST — bloc_test verifies exact state sequences in milliseconds
void main() {
  late LessonRepository mockRepository;
  late LessonBloc bloc;

  setUp(() {
    mockRepository = MockLessonRepository();
    bloc = LessonBloc(mockRepository);
  });

  blocTest<LessonBloc, LessonState>(
    'emits [Loading, Loaded] on successful load',
    build: () {
      when(() => mockRepository.getLessons('c1'))
          .thenAnswer((_) async => Right([testLesson]));
      return bloc;
    },
    act: (b) => b.add(LessonLoadRequested('c1')),
    wait: const Duration(milliseconds: 100),
    expect: () => [
      isA<LessonLoading>(),
      isA<LessonLoaded>().having((s) => s.lessons.length, 'lessons', 1),
    ],
  );
}`,checklist:["Start with Cubit for simple features — upgrade to full BLoC only when you need event transformers or complex event flows.","Define states as immutable, complete UI snapshots — a widget should be able to render from the state alone.","Name events as past-tense descriptions of what happened (LessonLoadRequested), not imperative commands (LoadLessons).","Add isRefreshing / isPaginating flags to Loaded states so loading does not wipe existing data from the UI.","Apply event transformers: restartable() for search inputs, droppable() for submit actions, to prevent race conditions.","Keep BLoCs decoupled — use shared repositories as mediators rather than direct BLoC-to-BLoC imports.","Write bloc_test cases for every state transition — this is the primary payoff of the BLoC pattern."],commonMistakes:["Using LessonLoading for pull-to-refresh, which clears the list and causes UI flicker instead of using isRefreshing on the Loaded state.","Putting BuildContext or TextEditingController in events, coupling the BLoC to the widget layer and making it untestable.","Forgetting to apply event transformers on search and submit handlers, leading to race conditions and double-submissions.","Making BLoCs import each other directly, creating tight coupling between features that should be independent.","Mutating state objects in place instead of creating new immutable instances via copyWith, causing the UI not to rebuild."],relatedArticles:["managing-large-flutter-codebases","ai-weekly-engineering-reviews"],relatedCaseStudies:["istoria"],relatedGlossary:["bloc","cubit","reactive-programming","clean-architecture","either-failure-pattern","rxdart"],faqs:[{q:"Should I use BLoC or Cubit for my Flutter app?",a:"Start with Cubit for every feature. It is simpler (function calls + emit) and sufficient for most state transitions. Upgrade to full BLoC only when you need event transformers (debouncing, restartable search), complex event-to-state flows, or auditable event history. At iStoria, about 70% of features use Cubit and 30% use full BLoC."},{q:"How do I prevent double-submission with BLoC?",a:"Use the droppable() event transformer from package:bloc_concurrency on your submit event handler. It ignores new events while the handler is already running. This is a one-line fix that prevents an entire class of duplicate-submission bugs."},{q:"How do I keep old data visible during an error?",a:"Store the last known data in your error state. Instead of a bare LessonError, include lastKnownLessons so the UI can show the old list with an error banner. Alternatively, keep the Loaded state and add an error message field — both patterns work, but never let an error blank out the screen."}]},{slug:"error-handling",title:"Flutter Error Handling: Either<Failure, T> and Beyond",seoTitle:"Flutter Error Handling: Either<Failure, T> Guide",description:"A guide to Flutter error handling with Either<Failure, T> — domain failures, Result types, async error zones, and crash reporting from a 99.9% crash-free codebase.",category:"Reliability",difficulty:"Advanced",date:"2026-08-10",dateModified:"2026-08-10",intro:`Error handling in Flutter has two layers: the domain layer (recoverable failures your code handles gracefully) and the platform layer (unexpected crashes you cannot recover from but must report). Mixing them up — catching everything in one big try/catch or throwing exceptions across layers — leads to bugs that are hard to trace and crashes that go unreported.

At iStoria, we maintain a 99.9% crash-free rate across 5M+ users. The pattern that makes this possible is \`Either<Failure, T>\` for recoverable errors and structured crash reporting (Sentry) for everything else. Each layer has a clear responsibility: repositories map exceptions to domain Failures, BLoCs fold over Either, and the platform layer catches the unexpected.

This guide covers the full pattern — from defining Failure types to wiring up async error zones and crash reporting — as we use it in production.`,body:`## Two Kinds of Errors

**Recoverable errors** are part of your business domain. The network went down, the cache was empty, the user entered invalid data. These are expected, the app handles them, and the user sees a friendly message. These should be \`Either<Failure, T>\`, not exceptions.

**Unrecoverable errors** are bugs. A null where there should not be one, an index out of bounds, a state that should never occur. The app cannot handle these gracefully. These should crash (or be caught by an error zone) and be reported to Sentry so you can fix them.

The mistake most teams make is treating all errors as the same kind. They catch every exception in a giant try/catch, suppressing bugs and hiding real crashes. Or they throw exceptions across layers, making the code path unpredictable and untestable.

## The Either<Failure, T> Pattern

\`Either<L, R>\` from the \`fpdart\` (or \`dartz\`) package represents a value that is one of two types. By convention, \`Left\` holds the failure and \`Right\` holds the success value.

\`\`\`dart
// A repository method returns Either<Failure, T>
Future<Either<Failure, List<Lesson>>> getLessons(String courseId);

// The caller MUST handle both cases explicitly:
final result = await repository.getLessons(courseId);
result.fold(
  (failure) => emit(LessonError(failure.message)),
  (lessons) => emit(LessonLoaded(lessons)),
);
\`\`\`

The power of this pattern is that **you cannot forget to handle the failure case.** With exceptions, a caller can forget the try/catch and the exception propagates unpredictably. With Either, the type system forces you to handle both branches.

## Defining Failures

Failures are part of the domain. They represent business-meaningful error states:

\`\`\`dart
abstract class Failure {
  final String message;
  const Failure(this.message);
}

class ServerFailure extends Failure {
  final int? statusCode;
  const ServerFailure([super.message = 'Server error', this.statusCode]);
}

class CacheFailure extends Failure {
  const CacheFailure([super.message = 'Cache error']);
}

class OfflineFailure extends Failure {
  const OfflineFailure() : super('You are offline. Please check your connection.');
}

class ValidationFailure extends Failure {
  final Map<String, String> fieldErrors;
  const ValidationFailure(this.fieldErrors) : super('Validation failed');
}
\`\`\`

The key principle: **Failures are domain concepts, not infrastructure exceptions.** \`DioError\`, \`DriftException\`, \`SocketException\` — these are data-layer concerns. The repository catches them and maps them to domain Failures. The BLoC never sees a \`DioError\`.

## Where Exceptions Still Belong

Not everything should be an Either. Some operations are genuinely exception-based:

1. **Programming errors** — null dereference, index out of bounds, assertion failures. These should crash and be reported, not be wrapped in Either.
2. **Third-party SDKs** — some packages throw exceptions. Wrap their calls in your repository and map exceptions to Failures.
3. **Truly unexpected states** — if a repository method receives a response that violates an invariant, throw. This is a bug, not a recoverable error.

## The Repository: Mapping Exceptions to Failures

The repository is the translation point. It catches infrastructure exceptions and converts them to domain Failures:

\`\`\`dart
@override
Future<Either<Failure, List<Lesson>>> getLessons(String courseId) async {
  if (!await networkInfo.isConnected) {
    return const Left(OfflineFailure());
  }
  try {
    final response = await remoteDatasource.fetchLessons(courseId);
    return Right(response.map((m) => m.toEntity()).toList());
  } on DioError catch (e) {
    return Left(ServerFailure(e.message ?? 'Unknown error', e.response?.statusCode));
  } on CacheException catch (e) {
    return Left(CacheFailure(e.message));
  } catch (e) {
    // Unexpected — report to Sentry, then return a generic failure
    await Sentry.captureException(e);
    return Left(UnexpectedFailure(e.toString()));
  }
}
\`\`\`

The last \`catch\` block is important. It catches truly unexpected exceptions, reports them, and returns a failure. This prevents the app from crashing on unexpected exceptions while still surfacing them in Sentry.

## Async Error Zones and Crash Reporting

Flutter has error zones for isolating async failures. The two zones you need to know:

1. **\`runZonedGuarded\`** — wraps your entire app and catches uncaught async errors. This is where you configure Sentry to report crashes.
2. **\`FlutterError.onError\`** — catches Flutter framework errors (rendering, layout, widget build failures).

In \`main()\`:

\`\`\`dart
void main() {
  runZonedGuarded(() {
    WidgetsFlutterBinding.ensureInitialized();
    FlutterError.onError = (details) {
      FlutterError.presentError(details);
      Sentry.captureException(details.exception, stackTrace: details.stack);
    };
    runApp(MyApp());
  }, (error, stack) {
    Sentry.captureException(error, stackTrace: stack);
  });
}
\`\`\`

This ensures that *every* uncaught error — sync or async, framework or Dart — reaches Sentry. Combined with \`Either<Failure, T>\` for recoverable errors, this gives you a comprehensive error strategy: expected failures are handled in the UI, unexpected crashes are reported.

## Crash-Free Rate as a Metric

At iStoria, we track crash-free rate as a first-class metric. The target is 99.9% — meaning fewer than 0.1% of sessions crash. Achieving this requires:

- \`Either<Failure, T>\` on every repository method so recoverable errors never crash the app.
- Sentry on every uncaught exception so you know about crashes immediately.
- A triage workflow: every Sentry issue is reviewed within 24 hours and either fixed or annotated with context.
- Defensive programming in the presentation layer: never assume a list is non-empty, never assume a response field is non-null.`,folderStructure:`lib/
├── core/
│   ├── error/
│   │   ├── failures.dart            # domain Failure hierarchy
│   │   └── exceptions.dart          # data-layer exception types
│   └── crash/
│       └── crash_reporter.dart       # Sentry wrapper, initialized in main()
├── features/
│   └── lesson/
│       ├── data/repositories/
│       │   └── lesson_repository_impl.dart   # catches exceptions → maps to Failures
│       └── presentation/
│           └── cubit/lesson_cubit.dart        # folds Either → emits states
└── main.dart                          # runZonedGuarded + FlutterError.onError`,codeExample:`// core/error/failures.dart — DOMAIN FAILURES
sealed class Failure {
  final String message;
  const Failure(this.message);
}

class ServerFailure extends Failure {
  final int? statusCode;
  const ServerFailure([super.message = 'Server error', this.statusCode]);
}

class CacheFailure extends Failure {
  const CacheFailure([super.message = 'Cache error']);
}

class OfflineFailure extends Failure {
  const OfflineFailure() : super('You appear to be offline.');
}

class ValidationFailure extends Failure {
  final Map<String, String> fieldErrors;
  const ValidationFailure(this.fieldErrors) : super('Validation failed');
}

class UnauthorizedFailure extends Failure {
  const UnauthorizedFailure() : super('Your session has expired.');
}

class UnexpectedFailure extends Failure {
  const UnexpectedFailure(String detail) : super('Something went wrong: $detail');
}

// core/error/exceptions.dart — DATA-LAYER EXCEPTIONS (never cross into domain)
class ServerException implements Exception {
  final String message;
  final int? statusCode;
  ServerException(this.message, [this.statusCode]);
}
class CacheException implements Exception {
  final String message;
  CacheException(this.message);
}

// data/repositories/lesson_repository_impl.dart — MAPS exceptions → Failures
class LessonRepositoryImpl implements LessonRepository {
  final LessonRemoteDatasource remote;
  final LessonLocalDatasource local;
  final NetworkInfo networkInfo;

  LessonRepositoryImpl({
    required this.remote,
    required this.local,
    required this.networkInfo,
  });

  @override
  Future<Either<Failure, List<Lesson>>> getLessons(String courseId) async {
    if (!await networkInfo.isConnected) {
      // Expected: offline — try cache
      return _getFromCacheOrFailure(courseId, const OfflineFailure());
    }
    try {
      final remoteLessons = await remote.fetchLessons(courseId);
      await local.cacheLessons(courseId, remoteLessons);
      return Right(remoteLessons.map((m) => m.toEntity()).toList());
    } on ServerException catch (e) {
      // Server failed — try cache before giving up
      return _getFromCacheOrFailure(
        courseId,
        ServerFailure(e.message, e.statusCode),
      );
    } catch (e, stack) {
      // Truly unexpected — report it, return a safe failure
      await Sentry.captureException(e, stackTrace: stack);
      return Left(UnexpectedFailure(e.toString()));
    }
  }

  Future<Either<Failure, List<Lesson>>> _getFromCacheOrFailure(
    String courseId,
    Failure fallback,
  ) async {
    try {
      final cached = await local.getCachedLessons(courseId);
      if (cached.isEmpty) return Left(fallback);
      return Right(cached.map((m) => m.toEntity()).toList());
    } on CacheException {
      return Left(fallback);
    }
  }
}

// presentation/cubit/lesson_cubit.dart — FOLDS Either → emits states
class LessonCubit extends Cubit<LessonState> {
  final LessonRepository repository;
  LessonCubit(this.repository) : super(LessonInitial());

  Future<void> loadLessons(String courseId) async {
    emit(LessonLoading());
    final result = await repository.getLessons(courseId);
    emit(
      result.fold(
        (failure) => _mapFailureToState(failure),
        (lessons) => LessonLoaded(lessons: lessons),
      ),
    );
  }

  LessonState _mapFailureToState(Failure failure) {
    return switch (failure) {
      OfflineFailure() => LessonError(
          failure.message,
          action: ErrorAction.retry,
        ),
      UnauthorizedFailure() => LessonError(
          failure.message,
          action: ErrorAction.login,
        ),
      ServerFailure(:final statusCode) when statusCode == 404 =>
        LessonError('Lessons not found.', action: ErrorAction.none),
      ServerFailure() => LessonError(
          failure.message,
          action: ErrorAction.retry,
        ),
      _ => LessonError(failure.message),
    };
  }
}

// main.dart — ZONE GUARD + CRASH REPORTING
void main() {
  runZonedGuarded(() {
    WidgetsFlutterBinding.ensureInitialized();
    FlutterError.onError = (details) {
      FlutterError.presentError(details);
      Sentry.captureException(details.exception, stackTrace: details.stack);
    };
    runApp(MyApp());
  }, (error, stack) {
    // Catches uncaught async errors that slip past try/catch
    Sentry.captureException(error, stackTrace: stack);
  });
}`,checklist:["Define a Failure hierarchy in the domain layer — each Failure is a business-meaningful error state, not an infrastructure exception.","Make every repository method return Either<Failure, T> so callers are forced by the type system to handle the error case.","Catch infrastructure exceptions (DioError, DriftException) in the repository and map them to domain Failures — never let them cross the boundary.","Use a final catch-all in repository methods that reports truly unexpected exceptions to Sentry before returning a generic Failure.","Wrap the entire app in runZonedGuarded and set FlutterError.onError to report every uncaught error to Sentry.","Track crash-free rate as a first-class metric — aim for 99.9% and triage every Sentry issue within 24 hours.","Use pattern matching in state mappers to give users actionable error states (retry, login, contact support) instead of generic messages."],commonMistakes:["Throwing exceptions across layers instead of returning Either<Failure, T>, making the code path unpredictable and untestable.","Catching every exception in a giant try/catch that suppresses bugs instead of reporting them to Sentry.","Letting DioError or DriftException leak into the BLoC or presentation layer, coupling it to infrastructure concerns.","Not distinguishing recoverable domain failures from unrecoverable programming bugs, causing the app to either crash too much or suppress real issues.","Returning generic 'Something went wrong' for every error without mapping specific failures to actionable user messages (retry, login, offline)."],relatedArticles:["managing-large-flutter-codebases","ai-weekly-engineering-reviews"],relatedCaseStudies:['istoria", "release-engineering'],relatedGlossary:["either-failure-pattern","repository-pattern","clean-architecture","sentry-flutter","crash-free-rate"],faqs:[{q:"Why Either<Failure, T> instead of try/catch?",a:"Either forces the caller to handle the error case at the type level — the compiler will not let you forget. With try/catch, a caller can forget the catch block and the exception propagates unpredictably. Either makes error handling explicit and part of the function signature, which is especially valuable across module boundaries."},{q:"Should I use fpdart or dartz for Either?",a:"Both work. fpdart is more actively maintained and has better null-safety support. dartz is older and has some null-safety quirks. At iStoria we use fpdart. If you do not want a dependency, you can define your own Result<T> sealed class with Success and Failure variants — it is 20 lines of code and gives you the same pattern without a package."},{q:"How do I report crashes that Either does not catch?",a:"Wrap your app in runZonedGuarded in main() and set FlutterError.onError. These catch uncaught async errors and Flutter framework errors respectively. Route both to Sentry (or your crash reporter). This covers the 'unexpected' category of errors that should not happen but do — bugs that Either is not designed for."}]},{slug:"testing-strategy",title:"Flutter Testing Strategy: Unit, Widget & Integration Tests",seoTitle:"Flutter Testing Strategy: Unit, Widget & Integration Tests",description:"A practical Flutter testing strategy — the test pyramid, what to test at each layer, golden tests, integration tests, and CI patterns from a production codebase.",category:"Reliability",difficulty:"Intermediate",date:"2026-08-10",dateModified:"2026-08-10",intro:`Testing in Flutter follows a pyramid: lots of fast unit tests, a moderate number of widget tests, and a few slow integration tests. The mistake most teams make is inverting the pyramid — writing few unit tests and relying on slow integration tests that are brittle, flaky, and give feedback minutes after a change.

At iStoria, our 50+ module codebase has thousands of tests running in CI on every pull request. The strategy is simple: domain logic is unit-tested to the extreme, presentation is widget-tested with mocked dependencies, and only critical user journeys get integration tests. This keeps the suite fast (under 3 minutes) and trustworthy (no flaky tests).

This guide covers what to test at each layer, the patterns we use, and how to keep a large test suite maintainable.`,body:`## The Test Pyramid

The test pyramid has three levels, from most to fewest:

1. **Unit tests (70%)** — test individual classes in isolation. Domain entities, use cases, repositories (with mocked data sources), mappers, and BLoC/Cubit state transitions. These are pure Dart tests that run in milliseconds.

2. **Widget tests (20%)** — test individual widgets or small widget trees with mocked dependencies. You pump a widget, interact with it (tap, scroll, enter text), and assert on what it renders. These run in seconds.

3. **Integration tests (10%)** — test full user flows end-to-end on a simulated device. The app runs with real (or near-real) dependencies and the test drives it like a user. These are slow (minutes) and should be reserved for critical journeys (login, checkout, lesson completion).

The pyramid ratio is not arbitrary. Unit tests are fast, deterministic, and pinpoint exactly what broke. Integration tests are slow, can be flaky, and when they fail you do not know which layer broke. Invest in the base of the pyramid.

## Layer 1: Unit Testing the Domain

The domain layer is the easiest to test because it has no dependencies. Entities, value objects, use cases — all pure Dart, no mocking needed.

For use cases that depend on repository contracts, pass mock repositories (via \`mocktail\` or handwritten fakes). The test verifies that the use case calls the right methods, in the right order, with the right arguments, and maps the result correctly.

\`\`\`dart
test('GetLessons returns Right(lessons) when repository succeeds', () async {
  when(() => mockRepo.getLessons('c1'))
      .thenAnswer((_) async => Right([testLesson]));
  final result = await usecase('c1');
  expect(result.isRight(), true);
});
\`\`\`

These tests are the foundation. They run in under 1ms each and give you confidence that the business logic is correct regardless of the UI or data layer.

## Layer 2: Unit Testing Repositories

Repository tests verify the mapping from data-source exceptions to domain Failures. The repository is tested with mocked data sources — you simulate a server error, a cache miss, an offline state, and verify the repository returns the correct \`Either<Failure, T>\`.

This is where the \`Either<Failure, T>\` pattern pays off. Each test asserts on the exact Failure type returned, which documents the repository's error contract:

\`\`\`dart
test('returns OfflineFailure when network is disconnected', () async {
  when(() => networkInfo.isConnected).thenAnswer((_) async => false);
  final result = await repository.getLessons('c1');
  expect(result.getLeft().toOption().toNullable(), isA<OfflineFailure>());
});
\`\`\`

## Layer 3: BLoC/Cubit Testing

BLoC tests verify state sequences — given an event, the BLoC emits the expected states in order. The \`bloc_test\` package makes this declarative:

\`\`\`dart
blocTest<LessonBloc, LessonState>(
  'emits [Loading, Loaded] on success',
  build: () {
    when(() => repo.getLessons(any()))
        .thenAnswer((_) async => Right([testLesson]));
    return LessonBloc(repo);
  },
  act: (b) => b.add(LessonLoadRequested('c1')),
  expect: () => [isA<LessonLoading>(), isA<LessonLoaded>()],
);
\`\`\`

Every BLoC should have a test for every event handler, covering success, failure, and edge cases (empty list, pagination, concurrent events). These tests are fast and catch the majority of state-management bugs before they reach a device.

## Layer 4: Widget Testing

Widget tests verify that a widget renders correctly and responds to interaction. The widget is pumped with mocked BLoCs (via \`BlocProvider\` with a mock or a seeded BLoC):

\`\`\`dart
testWidgets('renders lesson titles', (tester) async {
  await tester.pumpWidget(
    MaterialApp(
      home: BlocProvider.value(
        value: seededLessonBloc(LessonLoaded(lessons: [testLesson])),
        child: const LessonPage(),
      ),
    ),
  );
  expect(find.text('Introduction to Flutter'), findsOneWidget);
});
\`\`\`

Widget tests should test behavior, not implementation: "when I tap this button, this widget appears" — not "when I tap this button, this method is called." Implementation-coupled tests break on refactors and provide false confidence.

## Layer 5: Golden Tests

Golden tests (also called snapshot tests) capture a rendered widget as an image and compare future renders against it. They are excellent for catching unintended UI changes — a padding change, a color regression, a layout shift.

\`\`\`dart
testWidgets('lesson card matches golden', (tester) async {
  await tester.pumpWidget(wrapWithMaterial(LessonCard(lesson: testLesson)));
  await expectLater(find.byType(LessonCard), matchesGoldenFile('lesson_card.png'));
});
\`\`\`

At iStoria, we use golden tests for reusable components (cards, buttons, list items) but not for full pages (too brittle). When the design changes intentionally, regenerate the goldens with \`--update-goldens\`.

## Layer 6: Integration Tests

Integration tests (\`integration_test/\` package) run the real app on a device or simulator and drive it like a user. They are reserved for critical user journeys:

- Login and authentication flow
- Completing a lesson (core user value)
- Offline-to-online sync transition
- Payment / subscription flow

Keep integration tests few and focused. Each one adds minutes to CI. Ten integration tests covering the critical paths are more valuable than fifty covering every edge case (those belong in unit/widget tests).

## CI Strategy

In CI, split the test runs:

1. **Unit + Widget tests** — run on every pull request. Should complete in under 3 minutes.
2. **Integration tests** — run on merge to main or nightly. These are slower and do not need to block every PR.
3. **Golden tests** — run on every PR but do not block (report differences for review). Block only on main.

Use \`--coverage\` and track coverage trends, but do not obsess over a coverage number. 80% coverage with meaningful tests is better than 100% coverage with trivial assertion-free tests. The goal is confidence, not a metric.`,folderStructure:`test/                              # mirrors lib/ structure
├── core/
│   ├── error/
│   │   └── failures_test.dart
│   └── utils/
│       └── input_validator_test.dart
├── features/
│   └── lesson/
│       ├── domain/
│       │   ├── usecases/
│       │   │   └── get_lessons_test.dart
│       │   └── entities/
│       │       └── lesson_test.dart
│       ├── data/
│       │   ├── repositories/
│       │   │   └── lesson_repository_impl_test.dart
│       │   └── models/
│       │       └── lesson_model_test.dart        # mapper tests
│       └── presentation/
│           ├── bloc/
│           │   └── lesson_bloc_test.dart          # bloc_test
│           └── widgets/
│               ├── lesson_card_test.dart           # widget test
│               └── lesson_card_test.png            # golden image
└── helpers/
    ├── test_lesson.dart                           # shared fixture factory
    ├── mock_repository.dart                       # MockTail setup
    └── widget_test_helpers.dart                    # pumpWidget wrappers

integration_test/
├── auth_flow_test.dart
├── lesson_completion_test.dart
└── offline_sync_test.dart`,codeExample:`// test/helpers/mock_repository.dart — shared mock setup
import 'package:mocktail/mocktail.dart';
import 'package:flutter_test/flutter_test.dart';

class MockLessonRepository extends Mock implements LessonRepository {}
class MockNetworkInfo extends Mock implements NetworkInfo {}

MockLessonRepository setupMockLessonRepository() {
  final repo = MockLessonRepository();
  registerFallbackValue('test-course-id');
  return repo;
}

// test/features/lesson/data/repositories/lesson_repository_impl_test.dart
class MockRemote extends Mock implements LessonRemoteDatasource {}
class MockLocal extends Mock implements LessonLocalDatasource {}

void main() {
  late MockRemote remote;
  late MockLocal local;
  late MockNetworkInfo networkInfo;
  late LessonRepositoryImpl repository;

  setUp(() {
    remote = MockRemote();
    local = MockLocal();
    networkInfo = MockNetworkInfo();
    repository = LessonRepositoryImpl(
      remoteDatasource: remote,
      localDatasource: local,
      networkInfo: networkInfo,
    );
  });

  group('getLessons', () {
    test('returns Right(lessons) when remote succeeds', () async {
      when(() => networkInfo.isConnected).thenAnswer((_) async => true);
      when(() => remote.fetchLessons('c1'))
          .thenAnswer((_) async => [lessonModelFixture()]);

      final result = await repository.getLessons('c1');

      expect(result.isRight(), true);
      verify(() => local.cacheLessons('c1', any())).called(1);
    });

    test('returns OfflineFailure when disconnected and cache is empty',
        () async {
      when(() => networkInfo.isConnected).thenAnswer((_) async => false);
      when(() => local.getCachedLessons('c1'))
          .thenThrow(CacheException('empty'));

      final result = await repository.getLessons('c1');

      expect(result.getLeft().toOption().toNullable(), isA<OfflineFailure>());
    });

    test('falls back to cache when server throws ServerException', () async {
      when(() => networkInfo.isConnected).thenAnswer((_) async => true);
      when(() => remote.fetchLessons('c1'))
          .thenThrow(ServerException('500', 500));
      when(() => local.getCachedLessons('c1'))
          .thenAnswer((_) async => [lessonModelFixture()]);

      final result = await repository.getLessons('c1');

      expect(result.isRight(), true);
    });
  });
}

// test/features/lesson/presentation/bloc/lesson_bloc_test.dart
void main() {
  late MockLessonRepository repository;
  late LessonBloc bloc;

  setUp(() {
    repository = MockLessonRepository();
    bloc = LessonBloc(repository);
  });

  blocTest<LessonBloc, LessonState>(
    'emits [Loading, Loaded] on successful load',
    build: () {
      when(() => repository.getLessons(any()))
          .thenAnswer((_) async => Right([lessonFixture()]));
      return bloc;
    },
    act: (b) => b.add(LessonLoadRequested('c1')),
    wait: const Duration(milliseconds: 100),
    expect: () => [
      isA<LessonLoading>(),
      isA<LessonLoaded>()
          .having((s) => s.lessons.length, 'lesson count', 1),
    ],
  );

  blocTest<LessonBloc, LessonState>(
    'emits [Loading, Error] on failure',
    build: () {
      when(() => repository.getLessons(any()))
          .thenAnswer((_) async => const Left(ServerFailure('down')));
      return bloc;
    },
    act: (b) => b.add(LessonLoadRequested('c1')),
    wait: const Duration(milliseconds: 100),
    expect: () => [
      isA<LessonLoading>(),
      isA<LessonError>().having((s) => s.message, 'error', 'down'),
    ],
  );
}

// integration_test/lesson_completion_test.dart — full device test
void main() {
  IntegrationTestWidgetsFlutterBinding.ensureInitialized();

  testWidgets('user can complete a lesson end-to-end', (tester) async {
    app.main(); // launches the real app
    await tester.pumpAndSettle();

    // Navigate to a course
    await tester.tap(find.text('Flutter Basics'));
    await tester.pumpAndSettle();

    // Tap a lesson
    await tester.tap(find.text('Introduction'));
    await tester.pumpAndSettle();

    // Mark complete
    await tester.tap(find.byKey(const Key('mark-complete-btn')));
    await tester.pumpAndSettle();

    // Verify the completion indicator appears
    expect(find.byIcon(Icons.check_circle), findsOneWidget);
  });
}`,checklist:["Mirror the test/ directory structure to lib/ so tests are easy to find next to the code they verify.","Write unit tests for every domain entity, use case, and repository method — these run in milliseconds and form the base of the pyramid.","Write bloc_test cases for every BLoC event handler, covering success, failure, and edge-case state transitions.","Write widget tests that verify behavior (tap → widget appears), not implementation (tap → method called).","Add golden tests for reusable UI components to catch unintended visual regressions.","Reserve integration tests for critical user journeys only (login, core value action, sync transition) — keep them under 10.","Split CI runs: unit + widget tests on every PR (under 3 minutes), integration tests on main merge or nightly."],commonMistakes:["Writing integration tests for things that should be unit tests, making the suite slow and flaky.","Testing widget implementation details (method calls) instead of behavior (visible output), causing tests to break on every refactor.","Not mocking BLoCs in widget tests, causing the real BLoC to fire network calls and making tests non-deterministic.","Skipping repository tests entirely because 'they just forward calls', missing the critical exception-to-Failure mapping logic.","Treating coverage percentage as the goal instead of test quality — 80% with meaningful assertions beats 100% with trivial checks."],relatedArticles:["github-actions-branch-protection-guardrails","automate-pull-request-hygiene","auto-rebase-and-detect-merge-conflicts"],relatedCaseStudies:['istoria", "release-engineering'],relatedGlossary:["trunk-based-development","feature-flags","bloc","clean-architecture","either-failure-pattern"],faqs:[{q:"How many integration tests should I write?",a:"Few. Integration tests are slow and flaky. Reserve them for critical user journeys: login, the core value action (e.g., completing a lesson), payment, and the offline-to-online transition. Everything else should be covered by unit and widget tests. Ten focused integration tests are worth more than fifty that cover edge cases."},{q:"Should I mock BLoCs in widget tests or use real ones?",a:"Mock them. A real BLoC fires network calls and has async state transitions that make the test non-deterministic. Use BlocProvider.value with a seeded or mocked BLoC so the widget test is deterministic: given this state, does the widget render correctly? The BLoC itself is tested separately in bloc_test cases."},{q:"How do I keep golden tests from being flaky?",a:"Use golden tests for small, reusable components (cards, buttons) rather than full pages. Run them on the same platform and font rendering in CI as locally. When the design changes intentionally, regenerate with --update-goldens and review the diff in the PR. Do not block PRs on golden failures — report them for review and block only on main."}]},{slug:"build-release-pipeline",title:"Flutter Build & Release Pipeline: Flavors, CI/CD, Stores",seoTitle:"Flutter Build & Release Pipeline: Flavors, CI/CD & Stores",description:"A reference guide to Flutter build and release — flavors, environment configs, CI/CD pipelines, and store deployment from a team that ships weekly at 5M+ users.",category:"Release Engineering",difficulty:"Advanced",date:"2026-08-10",dateModified:"2026-08-10",intro:`A build and release pipeline is the difference between shipping confidently every week and dreading every release. At iStoria, we ship to 5M+ users on a weekly cadence with 99.9% crash-free sessions. That is not luck — it is a pipeline that builds, tests, signs, and deploys with zero manual steps.

This guide is a reference (not a tutorial) for the full pipeline: flavor configuration, CI/CD setup, store deployment, and the guardrails that prevent bad releases. For a step-by-step flavors tutorial, see our Flutter build flavors article. For the broader release-engineering story (trunk-based development, feature flags, staged rollout), see our release engineering case study.

The goal of this guide is to serve as the reference document you keep open while setting up or auditing your pipeline.`,body:`## Flavors: Three Environments

Every production Flutter app needs at least three flavors:

1. **Development** — local development against a dev backend. No real users. Hot reload. Used by engineers daily.
2. **Staging** — pre-production environment for QA, beta testing, and release candidates. Mirrors production as closely as possible (same backend, same feature flags, same analytics — just isolated data).
3. **Production** — the real app served to real users. Different bundle ID, different API keys, different signing credentials.

Each flavor has its own application ID/bundle ID, icon set, and environment configuration. The flavor system is the backbone of the pipeline — it lets you test the exact binary that will ship to users, just pointed at a different backend.

### Flavor Configuration

On Android, flavors are defined in \`build.gradle\` with \`productFlavors\`. On iOS, they are defined via Xcode schemes and build configurations. In Flutter, you select the flavor at build time:

\`\`\`sh
flutter build apk --flavor staging --t lib/main_staging.dart
flutter build ipa --flavor staging --export-options-plist ios/staging/ExportOptions.plist
\`\`\`

Each flavor uses a separate entry point (\`main_dev.dart\`, \`main_staging.dart\`, \`main_prod.dart\`) that injects the correct environment configuration before calling \`runApp()\`.

## CI/CD Pipeline

The CI/CD pipeline runs on every pull request and on every merge to main. The stages:

### Stage 1: Quality Gates (Every PR)
- \`flutter analyze\` — static analysis. Zero warnings tolerated.
- \`dart format --set-exit-if-changed\` — enforce formatting.
- Unit + widget tests with coverage report.
- Import linting — verify Clean Architecture boundaries (no Flutter imports in domain).

If any gate fails, the PR cannot merge. This is enforced by GitHub branch protection rules.

### Stage 2: Build (Every PR)
- Build APK and IPA for the staging flavor.
- Verify the build succeeds (catches platform-specific issues that analysis misses).
- Run integration tests on the built binary (in CI, on a simulator/emulator).

### Stage 3: Release (On Merge to Main or Tag)
- Bump version number (semantic versioning or build number).
- Build production APK and IPA with production signing credentials.
- Run the full test suite one final time.
- Upload to Google Play (internal testing track) and TestFlight.
- Tag the commit with the version number for traceability.

### Stage 4: Store Rollout (Manual Trigger)
- Promote from internal testing to production — staged rollout (1% → 10% → 50% → 100%).
- Monitor crash-free rate and rollback if it drops below threshold.

## Signing and Credentials

Signing is the most painful part of the pipeline, and it must be fully automated:

- **iOS:** Use App Store Connect API key + a signed certificate/profile stored as CI secrets. Fastlane \`match\` manages certificates in a private repo. Never commit certificates to the app repo.
- **Android:** Use a Google Play service account JSON key stored as a CI secret. Sign the app bundle with a keystore stored as an encrypted CI secret. Never commit the keystore.

At iStoria, signing is configured once and never touched. The CI pipeline picks up the credentials from GitHub Actions secrets and signs the binary automatically. No manual Xcode signing, no manual keystore passwords.

## Environment Configuration

Each flavor needs different configuration values: API URLs, API keys, feature flag endpoints, analytics tokens. We use \`--dart-define\` and \`--flavor\` to inject these at build time:

\`\`\`sh
flutter build apk \\
  --flavor prod \\
  --dart-define=API_URL=https://api.istoria.app \\
  --dart-define=ANALYTICS_TOKEN=prod-token
\`\`\`

Inside the app, \`String.fromEnvironment('API_URL')\` reads the value. This keeps configuration out of the source code and makes each flavor's config explicit in the CI pipeline.

## Guardrails

The pipeline must have guardrails that prevent bad releases:

1. **Branch protection** — no direct pushes to main. Every change goes through a PR with passing CI.
2. **Required reviews** — at least one approval from a teammate. For release tags, require two.
3. **Crash-free threshold** — after a staged rollout to 1%, check the crash-free rate. If it drops below 99.5%, halt the rollout automatically.
4. **Feature flags** — new features ship behind flags, disabled by default. They are enabled server-side after the release is stable, allowing instant rollback without a new build.
5. **Database migration safety** — any schema migration must be backward-compatible (additive). Breaking migrations require a multi-release strategy (add new column → populate → remove old column across releases).

## The Weekly Cadence

At iStoria, we ship every week:

- **Monday–Thursday:** development on feature branches. PRs reviewed and merged to main behind feature flags.
- **Thursday:** tag the release. CI builds the production binary and uploads to internal testing tracks.
- **Friday morning:** QA verification on the release candidate. If good, staged rollout begins (1% → 10% → 50% → 100% over the day).
- **Friday afternoon:** monitor crash-free rate. If stable at 100% by end of day, the rollout completes.

This cadence requires trunk-based development (no long-lived branches) and feature flags (ship code without enabling features). The pipeline is what makes it repeatable — no manual steps, no manual signing, no manual store uploads.`,folderStructure:`lib/
├── main.dart                    # production entry point (default)
├── main_dev.dart                 # development entry point
├── main_staging.dart             # staging entry point
├── main_prod.dart                # production entry point (explicit)
├── core/
│   └── config/
│       └── env_config.dart       # reads String.fromEnvironment values
└── ...

android/
├── app/
│   └── build.gradle              # productFlavors: dev, staging, prod
└── ...

ios/
├── Runner.xcodeproj              # schemes: dev, staging, prod
├── flutter/
│   ├── staging/ExportOptions.plist
│   └── prod/ExportOptions.plist
└── ...

.github/workflows/
├── pr-check.yml                  # analyze + test + build (staging) on every PR
├── release.yml                   # build prod + upload to stores on tag
└── nightly.yml                   # integration tests + dependency audit

fastlane/                         # optional, for store metadata management
├── Fastfile                      # lanes for upload to Play Store / TestFlight
└── match/                        # certificate management (private repo)`,codeExample:`// lib/main_dev.dart — development entry point
import 'package:flutter/material.dart';
import 'app.dart';
import 'core/config/env_config.dart';

Future<void> main() async {
  EnvConfig.initialize(
    apiUrl: const String.fromEnvironment(
      'API_URL',
      defaultValue: 'https://dev-api.istoria.app',
    ),
    environment: Environment.dev,
    analyticsEnabled: false,
  );
  runApp(const MyApp());
}

// lib/main_prod.dart — production entry point
Future<void> main() async {
  EnvConfig.initialize(
    apiUrl: const String.fromEnvironment(
      'API_URL',
      defaultValue: 'https://api.istoria.app',
    ),
    environment: Environment.prod,
    analyticsEnabled: true,
  );
  runApp(const MyApp());
}

// core/config/env_config.dart — central config
enum Environment { dev, staging, prod }

class EnvConfig {
  static late String apiUrl;
  static late Environment environment;
  static late bool analyticsEnabled;

  static void initialize({
    required String apiUrl,
    required Environment environment,
    required bool analyticsEnabled,
  }) {
    EnvConfig.apiUrl = apiUrl;
    EnvConfig.environment = environment;
    EnvConfig.analyticsEnabled = analyticsEnabled;
  }

  static bool get isProduction => environment == Environment.prod;
}

# android/app/build.gradle — flavor definitions
android {
    flavorDimensions += "default"
    productFlavors {
        dev {
            dimension "default"
            applicationIdSuffix ".dev"
            versionNameSuffix "-dev"
        }
        staging {
            dimension "default"
            applicationIdSuffix ".staging"
            versionNameSuffix "-staging"
        }
        prod {
            dimension "default"
        }
    }
}

# .github/workflows/release.yml — production release pipeline
name: Release
on:
  push:
    tags: ['v*']

jobs:
  build-and-deploy:
    runs-on: macos-latest
    steps:
      - uses: actions/checkout@v4
      - uses: subosito/flutter-action@v2
        with:
          flutter-version: '3.x'
          channel: stable

      - name: Install dependencies
        run: flutter pub get

      - name: Run tests
        run: flutter test --coverage

      - name: Build Android (production)
        run: flutter build appbundle \\
            --flavor prod \\
            --dart-define=API_URL=https://api.istoria.app

      - name: Build iOS (production)
        run: flutter build ipa \\
            --flavor prod \\
            --export-options-plist ios/prod/ExportOptions.plist \\
            --dart-define=API_URL=https://api.istoria.app

      - name: Upload to Google Play
        uses: r0adkll/upload-google-play@v1
        with:
          serviceAccountJsonPlainText: \${{ secrets.PLAY_SERVICE_ACCOUNT }}
          packageName: app.istoria
          releaseFiles: build/app/outputs/bundle/prodRelease/app-prod-release.aab
          track: internal
          status: completed

      - name: Upload to TestFlight
        uses: apple-actions/upload-testflight@v1
        with:
          app-store-connect-issuer-id: \${{ secrets.ASC_ISSUER_ID }}
          app-store-connect-key-id: \${{ secrets.ASC_KEY_ID }}
          app-store-connect-private-key: \${{ secrets.ASC_PRIVATE_KEY }}
          app-path: build/ios/ipa/istoria.ipa`,checklist:["Configure at least three flavors (dev, staging, prod) with separate entry points, bundle IDs, and icon sets.","Inject environment configuration via --dart-define so API URLs and keys never live in source code.","Set up CI quality gates on every PR: flutter analyze, formatting check, unit + widget tests.","Store signing credentials (keystore, certificates) as CI secrets — never commit them to the repository.","Automate the full release flow: build, sign, and upload to internal testing tracks on tag, with zero manual steps.","Use staged rollout (1% → 10% → 50% → 100%) with an automated crash-free rate check that halts on regression.","Ship new features behind feature flags so you can disable them server-side without a new app release."],commonMistakes:["Using only two flavors (dev and prod) with no staging, making pre-production QA unreliable.","Committing signing credentials or keystore passwords to the repository instead of using CI secrets.","Releasing directly to 100% rollout without a staged phase, risking a bad release reaching all users.","Hardcoding API URLs and keys in source code instead of using --dart-define, making flavor switching impossible.","Not enforcing branch protection, allowing direct pushes to main that bypass CI quality gates."],relatedArticles:["flutter-build-flavors-guide","github-actions-branch-protection-guardrails","automate-pull-request-hygiene","automated-stale-branch-cleanup"],relatedCaseStudies:['release-engineering", "istoria'],relatedGlossary:["build-flavors","trunk-based-development","feature-flags","crash-free-rate"],faqs:[{q:"Do I really need three flavors? Can't I just use dev and prod?",a:"You can start with two, but staging becomes essential as you scale. Without staging, you test new features against either a local dev backend (which does not match production) or the real production backend (risky). Staging is a pre-production environment that mirrors production as closely as possible — the same build, same backend, isolated data. It is where you catch integration issues before users do."},{q:"How do I manage signing certificates across CI and team members?",a:"Use Fastlane match for iOS (stores certificates in a private repo, team members and CI fetch them via a passphrase) and a Google Play service account JSON key for Android (stored as a CI secret). Never commit certificates to the app repo. Configure once, then the CI pipeline handles signing automatically on every build."},{q:"What is staged rollout and why does it matter?",a:"Staged rollout releases your app to a small percentage of users first (1%), then gradually increases (10% → 50% → 100%) over hours or days. If the crash-free rate drops or a critical bug surfaces at 1%, you halt the rollout before it reaches the majority of users. This is the single most important guardrail for a 5M-user app — it turns a bad release from a crisis into a minor incident."}]},{slug:"performance-architecture",title:"Flutter Performance Architecture: Profiling & Optimization",seoTitle:"Flutter Performance Architecture: Profiling & Optimization",description:"A guide to Flutter performance architecture — jank detection, build optimization, memory profiling, and the optimization patterns that keep a 5M-user app at 60fps.",category:"Performance",difficulty:"Advanced",date:"2026-08-10",dateModified:"2026-08-10",intro:`Flutter performance is about two things: not doing unnecessary work on the UI thread, and not blocking the UI thread with work that belongs elsewhere. Jank (dropped frames) happens when the build, layout, or paint phase of a frame takes longer than 16ms (for 60fps). At iStoria, we serve 5M+ users on devices ranging from flagships to low-end Android phones — keeping 60fps across that range requires disciplined architecture, not just clever tricks.

This guide covers the performance patterns we use: profiling methodology, build optimization, list virtualization, image handling, isolate offloading, and memory management. These are the patterns that separate a smooth app from a janky one at scale.`,body:`## Profile, Do Not Guess

The first rule of performance optimization: **never optimize without measuring.** Human intuition about performance is wrong more often than it is right. The Flutter DevTools Performance tab shows you exactly where frames are dropping and what code is responsible.

The profiling workflow:

1. Run the app in **profile mode** (\`flutter run --profile\`). Debug mode is not representative — it disables optimizations and adds overhead.
2. Open DevTools → Performance tab → record a session while interacting with the app.
3. Look at the frame timeline. Red frames are jank (took >16ms). Yellow frames are close to the limit.
4. Click a red frame to see the flame chart — the stack trace of what happened during that frame.
5. Identify the function that took the most time. Optimize it. Re-measure.

Optimizing without profiling leads to cargo-cult optimizations: premature caching, unnecessary complexity, and optimizations in places that were never the bottleneck.

## Build Optimization

The build phase (constructing the widget tree) is the most common source of jank. The strategies:

### Minimize Rebuilds with const Constructors

Mark widgets \`const\` wherever possible. A \`const\` widget is constructed once at compile time and never rebuilt. This is the single most impactful build optimization.

\`\`\`dart
// GOOD — const widget, never rebuilds
const Padding(
  padding: EdgeInsets.all(16),
  child: Text('Hello'),
)

// BAD — new Padding and EdgeInsets instance on every parent rebuild
Padding(
  padding: EdgeInsets.all(16),
  child: Text('Hello'),
)
\`\`\`

### Split Large Widgets into Smaller Ones

A giant \`build()\` method that returns a 500-line widget tree rebuilds entirely when any state changes. Split it into smaller widgets, each managing its own state. When a child widget's state changes, only that child rebuilds — not the entire tree.

### Use Builder/Selector for Granular Rebuilds

When using BLoC/Provider, use \`BlocSelector\` or \`context.select\` to rebuild only when the specific piece of state the widget cares about changes:

\`\`\`dart
// Rebuilds only when lessons list changes, not when other LessonState fields change
BlocSelector<LessonBloc, LessonState, List<Lesson>>(
  selector: (state) => state is LessonLoaded ? state.lessons : [],
  builder: (context, lessons) => LessonList(lessons: lessons),
)
\`\`\`

This prevents the widget from rebuilding on unrelated state changes. At iStoria, we use selectors on every list and detail widget — it eliminated the majority of our jank on scroll.

## List Virtualization

\`ListView.builder\` only builds the items visible on screen plus a small cache. \`ListView()\` (without builder) builds every item immediately. For any list with more than ~20 items, always use \`ListView.builder\` with \`itemExtent\` (if items have a fixed height) for maximum scroll performance.

For heterogeneous lists (mixed item types), use \`SliverList\` with \`itemBuilder\`. For infinite scroll with pagination, use \`CustomScrollView\` with slivers.

\`\`\`dart
ListView.builder(
  itemCount: lessons.length,
  itemExtent: 72,  // fixed height → Flutter skips layout calculation
  itemBuilder: (context, index) => LessonTile(lesson: lessons[index]),
)
\`\`\`

## Image Optimization

Images are the heaviest objects in a Flutter app. Unoptimized images cause memory spikes and jank on low-end devices.

1. **Use \`cacheWidth\` / \`cacheHeight\`** — decodes the image at the display size, not the source size. A 4000×3000 photo displayed at 200×150 should be decoded at 200×150, saving massive memory.

\`\`\`dart
Image.network(
  lesson.thumbnailUrl,
  cacheWidth: 200,  // decodes at 200px width, not the full source
  cacheHeight: 150,
)
\`\`\`

2. **Use WebP instead of PNG/JPEG** — WebP is ~30% smaller at the same quality. At iStoria, our build pipeline converts all article and lesson images to WebP automatically.

3. **Use \`precacheImage\`** for critical images — preloads the image before it is displayed, avoiding a pop-in on first render.

4. **Use \`FadeInImage\` with a placeholder** — shows a lightweight placeholder while the real image loads, avoiding layout shift.

## Isolate Offloading

Heavy computation (JSON parsing, image processing, cryptographic operations) blocks the UI thread and causes jank. Move it to an isolate via \`compute()\` or \`Isolate.run()\`:

\`\`\`dart
final parsed = await compute(parseLessonJson, rawJsonString);
\`\`\`

\`compute()\` spins up an isolate, runs the function, and returns the result. The UI thread stays free. Use this for any operation that processes more than a few kilobytes of data or takes more than a few milliseconds.

At iStoria, we offload all JSON deserialization of large API responses to isolates. On low-end devices, this was the difference between 40fps and 60fps on the lesson loading screen.

## Memory Management

Memory leaks in Flutter are usually caused by listeners and streams that are not disposed. Every \`StreamSubscription\`, \`TextEditingController\`, \`ScrollController\`, and \`AnimationController\` must be disposed in \`dispose()\`.

The common leak: a BLoC that holds a reference to a widget's \`BuildContext\` (via a listener or callback) after the widget is unmounted. The BLoC outlives the widget, and the widget's element stays in memory.

The fix: never pass \`BuildContext\` to a BLoC or repository. If a BLoC needs to trigger navigation, use a navigation service or a global router key, not the widget's context.

Use DevTools Memory tab to detect leaks. Take a snapshot, navigate through the app, take another snapshot, and compare. If objects accumulate, you have a leak.

## Avoiding Platform Channel Jank

Platform channel calls (MethodChannel) are asynchronous, but if the native side does heavy work on the main thread, it causes jank on the Flutter side. Move native-side heavy work to a background thread (dispatch queue on iOS, background thread on Android).

At iStoria, our PowerSync sync engine runs entirely on a background thread on the native side. We learned this the hard way — the initial implementation did SQLite operations on the main thread, causing jank on every sync cycle.`,folderStructure:`lib/
├── core/
│   ├── performance/
│   │   ├── frame_monitor.dart        # tracks FPS, logs jank in profile mode
│   │   └── memory_tracker.dart       # detects retention spikes in DevTools
│   └── utils/
│       └── isolate_runner.dart       # compute() wrapper for typed offloading
├── features/
│   └── lesson/
│       └── presentation/
│           └── widgets/
│               ├── lesson_list.dart       # ListView.builder with itemExtent
│               ├── lesson_tile.dart        # const constructor, granular selector
│               └── cached_lesson_image.dart # cacheWidth/cacheHeight optimized`,codeExample:`// core/utils/isolate_runner.dart — typed compute() wrapper
import 'package:flutter/foundation.dart';

/// Offloads heavy computation to a background isolate.
/// Use for JSON parsing, data transformation, or any CPU-intensive work.
Future<T> runInIsolate<T, P>(
  T Function(P) work,
  P param,
) {
  return compute(work, param);
}

// Example: parse a large API response off the UI thread
List<LessonModel> parseLessons(String json) {
  final decoded = jsonDecode(json) as List;
  return decoded.map((e) => LessonModel.fromJson(e)).toList();
}

// In the repository:
@override
Future<Either<Failure, List<Lesson>>> getLessons(String courseId) async {
  final rawJson = await remoteDatasource.fetchLessonsRaw(courseId);
  // Parse on a background isolate — UI thread stays smooth
  final models = await runInIsolate(parseLessons, rawJson);
  return Right(models.map((m) => m.toEntity()).toList());
}

// presentation/widgets/lesson_tile.dart — const + granular selector
class LessonTile extends StatelessWidget {
  final Lesson lesson;

  const LessonTile({super.key, required this.lesson});

  @override
  Widget build(BuildContext context) {
    return BlocSelector<LessonBloc, LessonState, bool>(
      // Rebuild this tile ONLY when this specific lesson's completion changes
      selector: (state) {
        if (state is! LessonLoaded) return false;
        return state.lessons
            .firstWhere((l) => l.id == lesson.id,
                orElse: () => lesson)
            .isCompleted;
      },
      builder: (context, isCompleted) {
        return ListTile(
          leading: CachedLessonImage(url: lesson.thumbnailUrl),
          title: Text(lesson.title),
          trailing: AnimatedSwitcher(
            duration: const Duration(milliseconds: 200),
            child: isCompleted
                ? const Icon(Icons.check_circle, key: ValueKey('done'))
                : const SizedBox.shrink(key: ValueKey('empty')),
          ),
        );
      },
    );
  }
}

// presentation/widgets/lesson_list.dart — virtualized list with itemExtent
class LessonList extends StatelessWidget {
  final List<Lesson> lessons;

  const LessonList({super.key, required this.lessons});

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: lessons.length,
      itemExtent: 72,  // fixed height → skips per-item layout, maximum scroll FPS
      itemBuilder: (context, index) {
        return LessonTile(
          key: ValueKey(lessons[index].id),
          lesson: lessons[index],
        );
      },
    );
  }
}

// presentation/widgets/cached_lesson_image.dart — memory-optimized images
class CachedLessonImage extends StatelessWidget {
  final String url;

  const CachedLessonImage({super.key, required this.url});

  @override
  Widget build(BuildContext context) {
    // Determine display dimensions from the layout
    const displayWidth = 56.0;
    const displayHeight = 56.0;
    // Convert to physical pixels for cacheWidth/cacheHeight
    final dpr = MediaQuery.devicePixelRatioOf(context);
    final cacheW = (displayWidth * dpr).round();
    final cacheH = (displayHeight * dpr).round();

    return CachedNetworkImage(
      imageUrl: url,
      cacheWidth: cacheW,    // decode at display size, not full source resolution
      cacheHeight: cacheH,
      fadeInDuration: const Duration(milliseconds: 150),
      placeholder: (_, __) => Container(
        width: displayWidth,
        height: displayHeight,
        color: Theme.of(context).colorScheme.surfaceContainerHighest,
      ),
    );
  }
}`,checklist:["Always profile in profile mode (flutter run --profile), never in debug mode — debug is not representative.","Mark every stateless widget const and split large build() methods into smaller, granularly-rebuilding widgets.","Use BlocSelector or context.select so widgets rebuild only when their specific slice of state changes.","Use ListView.builder with itemExtent for any list over 20 items — never use ListView() for dynamic lists.","Set cacheWidth and cacheHeight on every image to decode at display size, not full source resolution.","Offload JSON parsing and CPU-intensive work to isolates via compute() or Isolate.run().","Dispose every StreamSubscription, controller, and listener to prevent memory leaks — never pass BuildContext to a BLoC."],commonMistakes:["Optimizing based on intuition instead of profiling, leading to cargo-cult changes that do not address the actual bottleneck.","Using ListView() instead of ListView.builder for dynamic lists, causing every item to build immediately instead of being virtualized.","Forgetting cacheWidth/cacheHeight on images, decoding 4000x3000 photos at full resolution into memory for a 56px thumbnail.","Passing BuildContext to BLoCs via listeners or callbacks, causing memory leaks when the BLoC outlives the widget.","Running JSON parsing or heavy computation on the UI thread instead of an isolate, causing jank on large data loads."],relatedArticles:["managing-large-flutter-codebases","ai-weekly-engineering-reviews"],relatedCaseStudies:["istoria"],relatedGlossary:["reactive-programming","bloc","rxdart","powersync","drift","sentry-flutter"],faqs:[{q:"How do I know which widgets are rebuilding unnecessarily?",a:"Add a print or a debugPrint in the build() method of the widget you suspect. If it prints more often than expected, it is rebuilding unnecessarily. In profile mode, use the DevTools Performance tab to see rebuild counts per frame. Alternatively, use the RepaintBoundary widget to isolate paint regions and the Flutter inspector's 'Select Widget Mode' to inspect the widget tree during interaction."},{q:"Should I use RepaintBoundary everywhere?",a:"No. RepaintBoundary creates a separate layer, which helps when a complex subtree repaints independently (like a list item with an animation). But each RepaintBoundary adds memory and compositing overhead. Use it strategically on complex, independently-animating widgets — not on every widget. Profile before and after to confirm it helps."},{q:"How do I test performance on low-end devices?",a:"Use an actual low-end device (1-2GB RAM, budget CPU) — the Android emulator on a slow setting is not representative. Run in profile mode and interact with the app normally. The DevTools Performance tab shows frame times and dropped frames. Focus on the 90th-percentile frame time, not the average — the worst frames are what users perceive as jank."}]}];export{e as a};
