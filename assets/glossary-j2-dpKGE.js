const e=[{slug:"bloc",term:"BLoC",title:"What is BLoC in Flutter?",seoTitle:"What is BLoC in Flutter? State Management Explained",description:"BLoC (Business Logic Component) is a reactive state management pattern for Flutter that uses streams to separate business logic from UI. Learn how it works and when to use it.",category:"State Management",difficulty:"Intermediate",date:"2026-08-10",dateModified:"2026-08-10",definition:"BLoC (Business Logic Component) is a reactive state management pattern for Flutter that separates business logic from presentation using streams. Events go in, states come out, and the UI never touches business logic directly — it reacts to state changes the way it reacts to any data source.",howItWorks:`BLoC converts a stream of **events** (user actions, lifecycle signals, data fetches) into a stream of **states** (the data the UI renders). The bloc itself is a pure function — the same events in the same order always produce the same states — which makes it trivially testable.

The data flow is strictly one-directional:

\`\`\`
Widget → Event → BLoC → State → Widget
\`\`\`

A widget dispatches an event when the user interacts with it. The bloc receives the event, runs the business logic (calling repositories, transforming data, enforcing rules), and emits a new state. The widget rebuilds with the new state via \`StreamBuilder\` or \`BlocBuilder\`.

Here is a minimal counter bloc:

\`\`\`dart
// Events
abstract class CounterEvent {}
class IncrementPressed extends CounterEvent {}
class DecrementPressed extends CounterEvent {}

// States
abstract class CounterState {}
class CounterInitial extends CounterState {
  final int count;
  CounterInitial(this.count);
}

// Bloc
class CounterBloc extends Bloc<CounterEvent, CounterState> {
  CounterBloc() : super(CounterInitial(0)) {
    on<IncrementPressed>((event, emit) {
      emit(CounterInitial((state as CounterInitial).count + 1));
    });
    on<DecrementPressed>((event, emit) {
      emit(CounterInitial((state as CounterInitial).count - 1));
    });
  }
}
\`\`\`

At iStoria (5M+ users, 50+ modules), every feature follows the same pattern: events define every user intent, states define every UI configuration, and the bloc mediates. The result is that a new engineer can read any feature's event/state classes and understand its full behaviour without touching the UI layer.`,whenToUse:`**Choose BLoC when:**

- Your app has complex state flows with multiple interacting data sources (API, local database, sync engine).
- You need strict testability — every state transition is a testable unit, and no business logic lives in widgets.
- A team of engineers works on the same codebase — BLoC's enforced structure prevents the "every screen does it differently" problem.
- You want traceability — \`bloc_concurrency\` and \`hybrid_bloc\` logging let you replay any state transition.

**Skip BLoC when:**

- The app is small (a few screens, no complex state) — the boilerplate isn't worth it; use Cubit or Riverpod instead.
- Your team has no state management experience — BLoC's learning curve is steeper than Cubit or Riverpod, and misusing it (e.g. putting business logic in event transformers) creates more problems than it solves.`,pros:["Strict separation of business logic from UI — no logic leaks into widgets","Every state transition is unit-testable without a widget tree","Excellent tooling — the bloc library provides devtools, concurrency control, and replay","Scales to large teams — every feature follows the same predictable pattern","Events create an audit log of user intent — you can trace exactly what happened"],cons:["Significant boilerplate — every feature needs separate event, state, and bloc classes","Steeper learning curve than Cubit or Riverpod","Overkill for simple screens — a counter or a toggle doesn't need an event class","Can lead to analysis paralysis on event design — teams overthink event granularity"],alternatives:["cubit","riverpod","getx"],relatedArticles:["managing-large-flutter-codebases"],relatedCaseStudies:["istoria"],faqs:[{q:"What is the difference between BLoC and Cubit?",a:"Cubit is a simplified version of BLoC that replaces event classes with direct method calls. Instead of dispatching an `IncrementPressed` event, you call `increment()`. Cubit is better for simple state; BLoC is better when you need the event trail or complex event-to-state transformations."},{q:"Is BLoC still recommended in 2026?",a:"Yes. BLoC remains the most battle-tested state management pattern for large Flutter apps. It is the default at companies like iStoria (5M+ users) and is actively maintained with the flutter_bloc package. For new apps, Cubit (BLoC without events) is often a better starting point, migrating to full BLoC when event granularity is needed."},{q:"Does BLoC work with offline-first apps?",a:"Yes — BLoC pairs naturally with offline-first architectures. The bloc receives events from the UI, calls repository methods (which read from the local database first), and emits state. Whether the data came from the local Drift database or a PowerSync sync round-trip is transparent to the bloc."}]},{slug:"cubit",term:"Cubit",title:"What is Cubit in Flutter?",seoTitle:"What is Cubit? Flutter State Management Simplified",description:"Cubit is a lightweight variant of the BLoC pattern that replaces events with direct method calls. Simpler than BLoC, but the same testability and reactive model.",category:"State Management",difficulty:"Beginner",date:"2026-08-10",dateModified:"2026-08-10",definition:"Cubit is a streamlined state management class in Flutter from the flutter_bloc library. It simplifies the BLoC pattern by replacing event classes with simple methods, making it easier to learn while preserving the same reactive state model and testability.",howItWorks:`A Cubit exposes methods instead of events. You call a method, it runs some logic, and it emits a new state. The UI listens to the Cubit and rebuilds when the state changes.

\`\`\`
Widget → Method call → Cubit → State → Widget
\`\`\`

Compare the same counter, this time as a Cubit instead of a BLoC:

\`\`\`dart
class CounterCubit extends Cubit<int> {
  CounterCubit() : super(0);

  void increment() => emit(state + 1);
  void decrement() => emit(state - 1);
}
\`\`\`

No event classes. No event-to-state mapping. Just methods that emit state. The UI uses the same \`BlocBuilder<CubitCubit, int>\` it would use with a full BLoC.

At iStoria, we use Cubit for features where the state logic is simple (settings, theme, simple CRUD screens) and full BLoC for features with complex event interactions (the learning flow, subscription paywall, leaderboard). The two coexist cleanly because Cubit extends BlocBase — the same base class — so the testing and tooling story is identical.`,whenToUse:`**Choose Cubit when:**

- The state logic is straightforward — a few methods, each doing one thing.
- You want BLoC's testability without the event-class boilerplate.
- You're prototyping and don't yet know which events you need — start with Cubit, migrate to BLoC if event tracing becomes necessary.

**Choose full BLoC instead when:**

- You need an audit trail of user intents (events) for debugging or analytics.
- Multiple events should trigger shared logic via event transformers.
- The same event can produce different states depending on the current state and async results.`,pros:["Much less boilerplate than BLoC — no event classes needed","Same testability — every emit is a testable state transition","Same tooling — flutter_bloc devtools work identically","Easy migration path — a Cubit can become a BLoC when event granularity is needed","Gentler learning curve, making it ideal for teams new to reactive state management"],cons:["No event trail — you lose the audit log of what the user did that BLoC events provide","Method calls are less explicit than events — harder to trace in complex flows","Not ideal for complex event-to-state transformations (event transformers, concurrent handling)"],alternatives:["bloc","riverpod","getx"],relatedArticles:["managing-large-flutter-codebases"],relatedCaseStudies:["istoria"],faqs:[{q:"Should I start with Cubit or BLoC?",a:"Start with Cubit. It covers 80% of state management needs with far less boilerplate. Migrate specific features to full BLoC when you need event tracing, event transformers, or complex concurrency control. At iStoria, roughly half our Cubits are Cubits, not full BLoCs."},{q:"Can I mix Cubit and BLoC in the same app?",a:"Yes — they share the same BlocBase interface, so BlocProvider, BlocBuilder, and BlocListener work identically with both. Most production apps mix them: Cubit for simple screens, BLoC for complex flows."}]},{slug:"riverpod",term:"Riverpod",title:"What is Riverpod in Flutter?",seoTitle:"What is Riverpod? Flutter State Management Guide",description:"Riverpod is a reactive caching and state management framework for Flutter that improves on Provider with compile-time safety, no BuildContext dependency, and auto-dispose.",category:"State Management",difficulty:"Intermediate",date:"2026-08-10",dateModified:"2026-08-10",definition:"Riverpod is a reactive state management framework for Flutter that resolves the limitations of the Provider package. It provides compile-time safety, eliminates BuildContext dependency for dependency injection, and handles caching and disposal automatically through providers.",howItWorks:`Riverpod revolves around **providers** — declarative descriptions of a piece of state. A provider can be as simple as a value or as complex as an async stream with caching and invalidation.

\`\`\`dart
// A simple provider
final counterProvider = StateProvider<int>((ref) => 0);

// An async provider with caching
final userProfileProvider = FutureProvider.family<User, String>((ref, userId) async {
  final repo = ref.watch(userRepositoryProvider);
  return repo.fetchUser(userId);
});
\`\`\`

The UI consumes providers with \`ref.watch\` (rebuilds when the state changes) or \`ref.read\` (reads once without rebuilding):

\`\`\`dart
class UserProfileWidget extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final user = ref.watch(userProfileProvider('123'));
    return user.when(
      data: (u) => Text(u.name),
      loading: () => CircularProgressIndicator(),
      error: (e, s) => Text('Error: $e'),
    );
  }
}
\`\`\`

Riverpod's key differentiators:

- **No BuildContext needed** — providers are resolved through a \`Ref\`, not \`context\`. This means you can access providers in tests, in background isolates, and in non-widget code.
- **Compile-time safety** — the compiler catches circular dependencies, missing providers, and type mismatches.
- **Auto-dispose** — providers marked with \`autoDispose\` clean up their resources when no widget is watching them, preventing memory leaks.
- **Family** — parameterized providers let you create one per input (e.g. one \`userProfileProvider\` per user ID).`,whenToUse:`**Choose Riverpod when:**

- You want compile-time safety — the compiler catches provider wiring errors before runtime.
- You need to access state outside the widget tree (services, background tasks, tests).
- Your app benefits from automatic caching and disposal of state.
- You like the Provider model but hit its limitations (context-dependent lookups, runtime exceptions for missing providers).

**Choose BLoC/Cubit instead when:**

- You need an explicit event/state audit trail.
- Your team is already fluent in the BLoC pattern.
- You prefer strict event-driven architecture over reactive providers.`,pros:["Compile-time safety — circular dependencies and missing providers are caught by the analyzer","No BuildContext dependency — providers are accessible anywhere, including tests and services","Automatic caching and disposal — autoDispose providers prevent memory leaks","Rich provider types — FutureProvider, StreamProvider, StateNotifierProvider, NotifierProvider","Excellent testing story — override any provider in tests without mocking frameworks"],cons:["Different mental model from Provider/BLoC — requires learning Ref, provider types, and scoping","Code generation (riverpod_generator) is recommended for larger apps, adding a build step","Less battle-tested at 5M+ user scale than BLoC (though it is used in production by many large apps)","ConsumerWidget / ConsumerStatefulWidget replace standard widgets, creating a parallel widget hierarchy"],alternatives:["bloc","getx"],relatedArticles:["managing-large-flutter-codebases"],relatedCaseStudies:[],faqs:[{q:"Is Riverpod better than BLoC?",a:"Neither is objectively better. Riverpod excels at compile-time safety, caching, and provider composition. BLoC excels at strict event-driven architecture with an audit trail. At iStoria (5M+ users), we use BLoC/Cubit because the event/state pattern scales predictably across 50+ modules with a team of engineers. Many teams successfully use Riverpod at similar scale."},{q:"Does Riverpod need code generation?",a:"No — you can use Riverpod without code generation using the classic provider syntax. However, the riverpod_generator package provides @riverpod-annotated providers that are more concise and support better analyzer tooling. For apps with more than 20 providers, the generated approach is recommended."}]},{slug:"getx",term:"GetX",title:"What is GetX in Flutter?",seoTitle:"What is GetX? Flutter Framework Overview",description:"GetX is an all-in-one Flutter framework providing state management, dependency injection, route management, and utilities. Popular for rapid prototyping, controversial for production.",category:"State Management",difficulty:"Beginner",date:"2026-08-10",dateModified:"2026-08-10",definition:"GetX is a multi-purpose Flutter framework that combines state management, dependency injection, navigation, internationalization, and utility functions in a single package. It is popular for its simplicity and rapid development speed, but controversial in the Flutter community for its anti-pattern practices and tight coupling.",howItWorks:"GetX provides three main pillars: state management, dependency injection, and route management — all in one package.\n\n**State management** uses reactive \".obs\" variables and `GetBuilder`/`Obx` widgets:\n\n```dart\nclass Controller extends GetxController {\n  final count = 0.obs;\n\n  void increment() => count.value++;\n}\n\n// In the widget:\nObx(() => Text('${controller.count.value}'))\n```\n\n**Dependency injection** uses `Get.put()` and `Get.find()`:\n\n```dart\nGet.put(MyController());\nfinal controller = Get.find<MyController>();\n```\n\n**Navigation** uses `Get.to()`, `Get.back()` without BuildContext:\n\n```dart\nGet.to(OtherPage());\nGet.back();\n```\n\nThe appeal is obvious: one dependency, no BuildContext needed, minimal boilerplate. The cost is that GetX replaces Flutter's standard APIs with its own versions — navigation, theming, internationalization — creating a framework-within-a-framework.",whenToUse:`**Choose GetX when:**

- You are building a prototype or MVP where speed-to-market matters more than architecture.
- Your team is new to Flutter and wants the simplest possible setup.
- You need navigation and DI without configuring go_router and get_it separately.

**Avoid GetX when:**

- You are building a production app that a team will maintain for years.
- You need to integrate with standard Flutter APIs (GetX's navigation replaces Flutter's, making testing and deep linking harder).
- You care about community code quality — GetX is banned by many companies for its controversial practices, anti-patterns, and the maintainer's history of breaking changes.

At iStoria, we deliberately chose BLoC over GetX because GetX's global state and context-free APIs make large codebases harder to reason about, not easier.`,pros:["Extremely fast to set up — one package covers state, DI, routing, and more","No BuildContext required for navigation or state access","Excellent for prototyping and small apps","Very gentle learning curve for Flutter beginners"],cons:["Anti-pattern practices — global singletons, hidden state, context-free access that bypasses Flutter's tree","Tight coupling — using GetX for state locks you into GetX for navigation and DI","Controversial in the community — many companies ban it; the Flutter team does not recommend it","Breaking changes between major versions have historically been disruptive","Replaces standard Flutter APIs, making it harder to onboard engineers who know Flutter but not GetX"],alternatives:["bloc","riverpod"],relatedArticles:[],relatedCaseStudies:[],faqs:[{q:"Why is GetX controversial?",a:"GetX uses global singletons and replaces standard Flutter APIs (navigation, theming, localization) with its own. This creates tight coupling and hidden dependencies that are harder to test and maintain at scale. The Flutter team has not recommended it, and many production teams ban it."},{q:"Is GetX suitable for production apps?",a:"It depends. GetX works for small-to-medium apps where speed of development matters. For large production apps with long lifespans and multiple engineers, BLoC, Riverpod, or Cubit are better choices because they enforce cleaner separation of concerns and integrate with standard Flutter APIs."}]},{slug:"clean-architecture",term:"Clean Architecture",title:"What is Clean Architecture in Flutter?",seoTitle:"What is Clean Architecture in Flutter? Complete Guide",description:"Clean Architecture for Flutter separates an app into layers — presentation, domain, and data — so business logic is independent of frameworks, databases, and UI. Learn the pattern and its benefits.",category:"Architecture",difficulty:"Advanced",date:"2026-08-10",dateModified:"2026-08-10",definition:"Clean Architecture in Flutter organizes an app into concentric layers — presentation (UI + state), domain (business logic), and data (APIs, databases, caches) — with dependencies always pointing inward. The domain layer knows nothing about Flutter, databases, or network clients; it defines pure business rules that the outer layers implement.",howItWorks:`The dependency rule is the core: **dependencies point inward only**. The presentation layer depends on the domain layer; the data layer depends on the domain layer; the domain layer depends on nothing.

At iStoria (5M+ users, 50+ modules), every feature follows the same three-layer structure:

\`\`\`
lib/features/story/
  domain/
    entities/story.dart          — pure Dart class, no Flutter imports
    repositories/story_repo.dart — abstract interface
  data/
    datasources/story_remote.dart — API client
    datasources/story_local.dart  — Drift database
    repositories/story_repo_impl.dart — concrete implementation
  presentation/
    bloc/story_bloc.dart         — state management
    pages/story_page.dart        — widgets
    widgets/story_card.dart
\`\`\`

The repository contract lives in domain; its implementation lives in data:

\`\`\`dart
// domain/repositories/story_repo.dart
abstract class StoryRepository {
  Future<Either<Failure, List<Story>>> fetchStories();
}

// data/repositories/story_repo_impl.dart
class StoryRepositoryImpl implements StoryRepository {
  StoryRepositoryImpl(this._remote, this._local);
  final StoryRemoteDataSource _remote;
  final StoryLocalDataSource _local;

  @override
  Future<Either<Failure, List<Story>>> fetchStories() async {
    try {
      final stories = await _local.cachedStories();   // offline-first read
      unawaited(_remote.refreshInBackground());        // sync, never blocks UI
      return Right(stories);
    } on CacheException catch (e) {
      return Left(CacheFailure(e.message));
    }
  }
}
\`\`\`

The presentation layer never sees \`StoryRemoteDataSource\` or \`StoryLocalDataSource\` — it only knows the abstract \`StoryRepository\`. That means you can swap the backend, add caching, or switch from REST to GraphQL without touching the BLoC or the UI.`,whenToUse:`**Use Clean Architecture when:**

- Your app will live for years and be maintained by a team — the layering pays for itself in onboarding and refactoring safety.
- You have multiple data sources (API, local DB, cache, sync engine) that need to be swappable.
- You want business logic to be unit-testable without Flutter bindings.

**Skip it when:**

- The app is small (a few screens, one data source) — the layering overhead isn't worth it.
- Your team is new to Flutter — the abstraction layers add cognitive load that slows initial development.`,pros:["Business logic is framework-independent and unit-testable without widget tests","Data sources are swappable — swap REST for GraphQL or add offline-first without touching the UI","Consistent structure across features — every module looks the same, so onboarding is fast","Scales to large codebases — 50+ modules at iStoria, each independently navigable","Failures are values (Either<Failure, T>), not exceptions — error paths are explicit, not hidden"],cons:["Significant boilerplate — each feature needs entities, repository contracts, implementations, and mappers","Learning curve — teams new to the pattern may over-engineer early features","Indirection — tracing a bug requires jumping through 3-4 layers, which feels slow at first"],alternatives:["riverpod"],relatedArticles:["managing-large-flutter-codebases"],relatedCaseStudies:["istoria"],faqs:[{q:"Is Clean Architecture overkill for Flutter?",a:"For small apps, yes. For production apps with a team and a multi-year lifespan, no — the layering pays for itself. At iStoria (5M+ users, 50+ modules), Clean Architecture is why four engineers can out-ship larger teams. The key is to apply it at the feature level, not globally — a simple settings screen doesn't need a full three-layer structure."},{q:"How does Clean Architecture work with offline-first?",a:"Cleanly: the domain layer defines the repository contract; the data layer implements it with offline-first reads (local database first, background sync). The presentation layer is unaware whether data came from the network or the cache — it just calls the repository and gets an Either<Failure, T>."}]},{slug:"offline-first",term:"Offline-First",title:"What is Offline-First in Flutter?",seoTitle:"What is Offline-First Flutter? Architecture Guide",description:"Offline-first is a mobile architecture where the app reads and writes against a local database by default, treating the network as a background sync concern — not a prerequisite for UI.",category:"Data & Connectivity",difficulty:"Advanced",date:"2026-08-10",dateModified:"2026-08-10",definition:"Offline-first is a mobile architecture pattern where the local database is the primary source of truth for the UI. Reads resolve instantly from the device, writes are persisted locally and replayed on reconnect, and the network's role is background reconciliation — not blocking the user interface.",howItWorks:`In an offline-first app, every read goes to the local database first. The UI never waits on a network round-trip for data it already has. A background sync engine reconciles the local database with the server.

\`\`\`
User opens app → reads from local DB (instant) → background sync updates DB
User writes → persisted locally (instant) → queued and replayed on reconnect
\`\`\`

The data flow at iStoria (5M+ users) uses **PowerSync** for streaming sync and **Drift** for the typed local SQLite database:

\`\`\`dart
class StoriesRepository {
  StoriesRepository(this._remote, this._local);
  final StoriesRemoteDataSource _remote;
  final StoriesLocalDataSource _local;  // reads from Drift

  Future<Either<Failure, List<Story>>> fetchStories() async {
    try {
      final stories = await _local.cachedStories();    // instant local read
      unawaited(_remote.refreshInBackground());         // sync, never blocks UI
      return Right(stories);
    } on CacheException catch (e) {
      return Left(CacheFailure(e.message));
    }
  }
}
\`\`\`

The key insight: the repository returns local data immediately and kicks off a background refresh it does NOT await. The UI gets instant data; PowerSync converges the local DB with the server asynchronously; the UI picks up changes reactively through Drift's stream.

Offline writes use a **queue** — a Dio interceptor backed by a local Hive box captures writes made while offline, returns an optimistic success so the UI keeps moving, and replays them automatically on reconnect:`,whenToUse:`**Use offline-first when:**

- Users are on unreliable or metered connections (mobile, travel, rural areas).
- The app's worst moment would be a spinner waiting for the user's own data.
- You need writes to survive going offline (completing a lesson on the subway).

**Don't use offline-first when:**

- The app is inherently real-time (a live dashboard, a trading app) where stale data is worse than no data.
- Your data set is too large to cache locally and too sparse to selectively sync.
- The sync/conflict-resolution logic would be more complex than the app itself.`,pros:["Instant reads — no spinner on the user's own data, ever","Writes survive network drops — no lost work, no retry UX","Bandwidth savings — the app doesn't re-fetch what it already has","Better UX on slow connections — the app feels fast regardless of network quality","Every feature built afterward inherits offline support for free"],cons:["Higher architecture complexity — local database, sync engine, conflict resolution, write queue","Conflict resolution is hard — what happens when two devices write to the same record?","Storage management — the local database grows, and old data must be pruned","Security — queued offline writes must strip auth tokens before persisting to disk"],alternatives:["local-first"],relatedArticles:["offline-first-vs-local-first"],relatedCaseStudies:["istoria","offline-first-sync"],faqs:[{q:"What is the difference between offline-first and local-first?",a:"Offline-first means the app works without a network — reads are cached, writes are queued. Local-first goes further: the local database IS the source of truth, and the server's role is to sync, not to serve. Every local-first app is offline-first, but not every offline-first app is local-first. See the offline-first vs local-first comparison for details."},{q:"What database should I use for offline-first Flutter?",a:"Drift (typed SQLite with code generation) is the most popular choice for structured data. For key-value storage, Hive or Isar. For sync, PowerSync (which syncs Drift tables with a Postgres backend) or Supabase Realtime. At iStoria, we use PowerSync + Drift."}]},{slug:"local-first",term:"Local-First",title:"What is Local-First Architecture?",seoTitle:"What is Local-First Software? Architecture Guide",description:"Local-first architecture makes the device's local database the authoritative source of truth. The server syncs in the background, but never blocks reads or writes.",category:"Data & Connectivity",difficulty:"Advanced",date:"2026-08-10",dateModified:"2026-08-10",definition:"Local-first architecture is a software design philosophy where the local device holds the authoritative copy of the user's data. All reads and writes go to the local database; the server exists to synchronize and back up, not to serve as the primary data source. This gives the app instant responsiveness, full offline capability, and user data ownership.",howItWorks:`Local-first goes beyond offline-first by redefining the source of truth:

- **Offline-first**: the server is the source of truth; the cache makes the app work without network.
- **Local-first**: the device is the source of truth; the server syncs and backs up.

The practical difference is in the read path. In an offline-first app, the cache is a performance optimization layered on top of network calls — the app tries the cache, falls back to the network, and updates the cache. In a local-first app, the app reads ONLY from the local database; the network's job is to keep that database in sync in the background.

\`\`\`
Local-first read path:
  Widget → Repository → Local DB (Drift) → instant data
  Background → PowerSync → reconciles local DB with server

Offline-first read path:
  Widget → Repository → try cache → if miss, fetch from network → update cache
\`\`\`

At iStoria, we are fully local-first: every read of user progress, chapters, streaks, and levels comes from the Drift database on the device. PowerSync streams changes between that database and the Postgres backend. The UI never awaits a network call to render user data.`,whenToUse:`**Choose local-first when:**

- You want the app to feel instant — every read resolves from the device, zero network latency.
- You need full offline capability with deterministic conflict resolution.
- You want every feature to inherit offline support automatically (because the read/write plumbing lives in the data layer, not per-screen).

**Choose traditional online-first when:**

- The data is too large to store locally (enterprise-scale datasets).
- Real-time collaboration requires server-side authority (Google Docs-style co-editing).
- The app is a thin client over a server that holds the canonical data.`,pros:["Instant reads — every read is local, zero network latency","Full offline capability — the app works identically with or without network","Better battery and bandwidth — the app doesn't re-fetch data it already has","Every feature inherits offline support for free — the pattern lives in the data layer","Conflict resolution is handled by the sync engine (e.g. PowerSync), not per-feature"],cons:["Higher complexity — sync engine, conflict resolution, schema migrations","Storage growth — the local database accumulates data and must be pruned","Security — queued offline writes must strip credentials before persisting","Server-side logic is harder — you can't run a server-side query; the server syncs, not serves"],alternatives:["offline-first"],relatedArticles:["offline-first-vs-local-first"],relatedCaseStudies:["offline-first-sync"],faqs:[{q:"What is the difference between local-first and offline-first?",a:"Local-first makes the device's database the source of truth — the server syncs but doesn't serve. Offline-first means the app works without network — the server is still the source of truth, but a cache lets the app function offline. Every local-first app is offline-first; not every offline-first app is local-first."}]},{slug:"dependency-injection",term:"Dependency Injection",title:"What is Dependency Injection in Flutter?",seoTitle:"What is Dependency Injection in Flutter? DI Guide",description:"Dependency injection in Flutter decouples object creation from usage. Learn how get_it, Provider, and injectable make your code testable, modular, and maintainable.",category:"Architecture",difficulty:"Intermediate",date:"2026-08-10",dateModified:"2026-08-10",definition:"Dependency injection (DI) in Flutter is a design pattern where objects receive their dependencies from an external source rather than creating them internally. This decouples construction from usage, making code modular, testable, and maintainable — especially in large codebases with many services.",howItWorks:`Without DI, a class creates its own dependencies:

\`\`\`dart
// Tight coupling — hard to test, hard to swap
class UserService {
  final _api = ApiClient();  // created internally
  final _db = Database();     // created internally
}
\`\`\`

With DI, the class declares what it needs, and an external source provides it:

\`\`\`dart
// Loose coupling — easy to test, easy to swap
class UserService {
  UserService(this._api, this._db);
  final ApiClient _api;
  final Database _db;
}
\`\`\`

In Flutter, the most common DI approaches are:

1. **get_it** — a service locator. Register types at startup, resolve them anywhere:
\`\`\`dart
GetIt.instance.registerSingleton(ApiClient());
GetIt.instance.registerFactory<UserService>(() => UserService(
  GetIt.instance<ApiClient>(),
  GetIt.instance<Database>(),
));
final userService = GetIt.instance<UserService>();
\`\`\`

2. **injectable** — a code-generation layer on top of get_it that auto-wires dependencies via annotations.

3. **Provider** — uses the widget tree for DI via \`InheritedWidget\`.

At iStoria, we use **get_it + injectable** because it works outside the widget tree (critical for background tasks, isolates, and tests) and because injectable's generated wiring prevents manual registration errors at 50+ modules.`,whenToUse:`**Use DI when:**

- Your app has more than a few services (API clients, databases, analytics, feature flags).
- You need to swap implementations in tests (mock the API, use an in-memory database).
- Multiple features depend on the same shared services.

**Skip DI when:**

- The app is small enough that manual construction is simpler than a DI container.
- You don't write tests (DI's primary value is testability through swappable dependencies).`,pros:["Decouples construction from usage — swap implementations without touching consumers","Makes testing trivial — inject mock implementations in tests without monkey-patching","Centralized registration — all dependencies are visible in one place","Works outside the widget tree — critical for services, isolates, and background tasks (get_it)"],cons:["Added indirection — resolving a dependency requires a lookup, not a constructor call","Runtime errors — a missing registration crashes at first use, not at compile time (injectable mitigates this)","Learning curve — teams need to understand registration, scoping, and lifetimes"],alternatives:[],relatedArticles:["managing-large-flutter-codebases"],relatedCaseStudies:["istoria"],faqs:[{q:"Should I use get_it or Provider for dependency injection?",a:"Use get_it (with injectable) for services that need to be accessible outside the widget tree — API clients, databases, analytics. Use Provider for things that are tied to the widget tree lifecycle — theme, locale, feature flags scoped to a screen. Many apps use both."}]},{slug:"trunk-based-development",term:"Trunk-Based Development",title:"What is Trunk-Based Development?",seoTitle:"What is Trunk-Based Development? Git Strategy",description:"Trunk-based development is a Git strategy where all developers merge to a single shared branch (master/main) frequently, keeping branches short-lived. It enables continuous integration and fast release cycles.",category:"CI/CD",difficulty:"Intermediate",date:"2026-08-10",dateModified:"2026-08-10",definition:"Trunk-based development is a source control strategy where all developers commit frequently to a single shared branch (the trunk, usually master or main). Feature branches are short-lived (hours to a day or two) and merge back immediately, rather than living for weeks as in GitFlow.",howItWorks:`In trunk-based development, the \`master\` branch is always deployable. Engineers create short-lived branches, make small changes, and merge quickly:

\`\`\`
master:  ──●──●──●──●──●──●──●──●──●──●──
            \\ /    \\ /    \\ /
feature:    ●●      ●●      ●●
\`\`\`

Key practices:

1. **Short-lived branches** — a branch lives for hours or a day, not weeks. If a feature takes longer, it ships dark behind a feature flag.
2. **Small commits** — merge one logical change at a time, not a month of work.
3. **Branch protection** — \`master\` rejects direct pushes; every merge goes through CI gates.
4. **Feature flags** — incomplete work merges dark behind a flag and ramps when ready.

At iStoria, trunk-based development is what let us cut the release cycle from four weeks to one. Engineers merge multiple times per day into a protected \`master\`, and a suite of 14 GitHub Actions workflows keeps the trunk green:
- \`master\` rejects direct pushes (even from the lead).
- Every PR runs Dart analysis as a merge gate.
- Bots auto-rebase open PRs after each merge, so conflicts never sit unnoticed.`,whenToUse:`**Use trunk-based development when:**

- You want to ship frequently (weekly or faster).
- You have CI/CD gates that catch issues quickly.
- Your team values fast feedback over long-running "complete" branches.

**Use GitFlow instead when:**

- You ship infrequently (monthly or slower) and need release branches.
- You have multiple supported versions in production.
- Your team isn't ready for feature flags.`,pros:["Faster feedback — small merges surface integration issues immediately","Always-deployable trunk — master is always shippable","Fewer merge conflicts — branches are short-lived, so they don't drift","Enables continuous deployment — pair with feature flags for decouple-deploy-from-release","Forces small, reviewable changes — a 2,000-line PR is a code smell"],cons:["Requires discipline — engineers must merge small and often","Needs CI/CD — without automated quality gates, the trunk breaks","Feature flags are mandatory — you can't hold a merge because the feature isn't ready","Not suited for multi-version support — use GitFlow if you maintain old release branches"],alternatives:[],relatedArticles:["github-actions-branch-protection-guardrails","automate-pull-request-hygiene","auto-rebase-and-detect-merge-conflicts"],relatedCaseStudies:["release-engineering"],faqs:[{q:"What is the difference between trunk-based development and GitFlow?",a:"Trunk-based development merges everything to one branch frequently with short-lived feature branches. GitFlow uses long-lived feature branches and dedicated release branches. Trunk-based enables faster releases (days/weeks); GitFlow suits slower, multi-version release cycles (months)."},{q:"How do feature flags work with trunk-based development?",a:"Feature flags let you merge unfinished code dark — the code is in master but gated behind a flag that defaults to off. When the feature is ready, you enable the flag remotely (via GrowthBook, Firebase Remote Config, etc.) without a new release. This decouples deploy from release."}]},{slug:"feature-flags",term:"Feature Flags",title:"What are Feature Flags in Flutter?",seoTitle:"What are Feature Flags? Flutter Remote Config Guide",description:"Feature flags let you toggle functionality on or off remotely without a new app release. Learn how to decouple deploy from release in Flutter with GrowthBook, Firebase, and more.",category:"CI/CD",difficulty:"Intermediate",date:"2026-08-10",dateModified:"2026-08-10",definition:"Feature flags (also called feature toggles) are a software development technique that lets you enable or disable functionality at runtime without deploying new code. In Flutter, they decouple deploy from release — you ship code dark behind a flag, then remotely enable it when ready.",howItWorks:`A feature flag is a remote-controlled boolean (or string, or JSON) that your app checks at runtime:

\`\`\`dart
if (featureFlags.isEnabled('new_checkout_flow')) {
  return NewCheckoutPage();
} else {
  return OldCheckoutPage();
}
\`\`\`

The flag values are fetched from a remote service (GrowthBook, Firebase Remote Config, LaunchDarkly) and cached locally so the app works offline. Changing a flag on the server changes the app's behaviour for all users — or for a targeted segment — without an app store release.

At iStoria, we use **GrowthBook** for feature flags and A/B testing. Feature flags enable:

1. **Dark launches** — ship code to production behind a flag that defaults to off. Ramp when ready.
2. **Percentage rollouts** — enable for 5% of users, watch crash rates, then ramp to 100%.
3. **Instant kill switch** — a misbehaving feature is one flag flip from off, no hotfix release needed.
4. **A/B testing** — run two variants and measure which drives better conversion.

Combined with trunk-based development, feature flags let you merge continuously to master and *choose* when learners see something — instead of the app store review being the release event.`,whenToUse:`**Use feature flags when:**

- You practice trunk-based development and need to merge incomplete work dark.
- You want to ramp features gradually (5% → 50% → 100%) to catch issues early.
- You need an instant kill switch for production issues.
- You run A/B tests on UI flows, pricing, or onboarding.

**Skip them when:**

- The feature is small enough to ship fully complete in one PR.
- Your team isn't ready for the operational overhead of managing flag lifecycle (flags must eventually be removed).`,pros:["Decouples deploy from release — ship code dark, enable when ready","Gradual rollouts — ramp from 5% to 100% with confidence","Instant kill switch — disable a broken feature without an app store release","A/B testing built-in — test variants against conversion metrics","Enables trunk-based development — the key that makes continuous integration safe"],cons:["Flag debt — flags accumulate and must be cleaned up after a feature is fully rolled out","Testing complexity — you must test every combination of flag states","Remote dependency — if the flag service is down, the app falls back to cached defaults","Added indirection — understanding code paths requires knowing flag states"],alternatives:[],relatedArticles:["github-actions-branch-protection-guardrails"],relatedCaseStudies:["release-engineering"],faqs:[{q:"What is the difference between feature flags and A/B testing?",a:"Feature flags control which code runs (on/off or variant). A/B testing is one use of feature flags — it assigns users to variants and measures outcomes. Every A/B test uses feature flags; not every feature flag is an A/B test. See our feature flags vs A/B testing comparison."},{q:"Which feature flag service should I use for Flutter?",a:"GrowthBook (open-source, self-hostable) and Firebase Remote Config (free, managed by Google) are the most popular. LaunchDarkly is the enterprise option. At iStoria, GrowthBook gives us both flags and A/B testing in one SDK."}]},{slug:"powersync",term:"PowerSync",title:"What is PowerSync in Flutter?",seoTitle:"What is PowerSync? Flutter Offline Sync Guide",description:"PowerSync is a sync engine that keeps a local SQLite database in sync with a Postgres backend, enabling offline-first Flutter apps with automatic conflict resolution.",category:"Data & Connectivity",difficulty:"Advanced",date:"2026-08-10",dateModified:"2026-08-10",definition:"PowerSync is a sync engine that synchronizes a local SQLite database (via Drift or sqflite) with a Postgres backend in real time. It enables local-first Flutter apps where the UI reads and writes against the local database while PowerSync handles background synchronization, conflict resolution, and schema migrations.",howItWorks:`PowerSync sits between the Postgres backend and the local SQLite database on the device:

\`\`\`
Postgres → PowerSync Service → Sync Engine → Local SQLite (Drift) → UI
\`\`\`

The key concepts:

1. **Sync rules** — server-side JSON config that defines which rows sync to which clients (selective per-user replication).
2. **Views** — PowerSync exposes its tables as views, so schema changes ship as versioned migrations that drop and recreate views rather than altering tables.
3. **Conflict resolution** — last-write-wins by default, with custom resolution hooks for complex cases.
4. **Local writes** — writes go to the local database first, then PowerSync queues and uploads them to Postgres.

At iStoria (5M+ users), PowerSync + Drift is the foundation of our offline-first architecture:

\`\`\`dart
// PowerSync schema — mirrors the Postgres tables as local views
class Schema extends SchemaObject {
  @override
  List<Table> get tables => [
    Table('stories', [
      Column.text('id'),
      Column.text('title'),
      Column.integer('position'),
      Column.boolean('is_completed'),
    ]),
  ];
}
\`\`\`

The UI reads from these tables via Drift's reactive streams — when PowerSync updates a row in the background, Drift emits a new stream event and the UI rebuilds automatically.`,whenToUse:`**Use PowerSync when:**

- You have a Postgres backend and want offline-first sync with conflict resolution.
- You need selective per-user sync (not every user sees every row).
- You want real-time updates without building a custom WebSocket/sync layer.

**Don't use PowerSync when:**

- Your backend is not Postgres.
- You need full-text search or complex server-side queries (PowerSync syncs data, not queries).
- Your data set per user is too large for a local SQLite database.`,pros:["Automatic sync between Postgres and local SQLite — no custom sync layer","Selective per-user sync via sync rules — only relevant data hits the device","Conflict resolution built-in — last-write-wins by default, custom hooks available","Reactive — Drift streams pick up PowerSync changes automatically","Scales to millions of users (iStoria: 5M+ learners)"],cons:["Postgres-only backend required","Self-hosting the PowerSync Service adds infrastructure","Schema migrations are view-based — different from standard Drift migrations","Local database size grows with synced data — needs pruning strategy"],alternatives:[],relatedArticles:["offline-first-vs-local-first"],relatedCaseStudies:["istoria","offline-first-sync"],faqs:[{q:"Is PowerSync free?",a:"PowerSync offers a free tier (up to 5,000 monthly active users) and paid plans for larger scale. It is open-source and self-hostable via the PowerSync Service, which runs alongside your Postgres database."},{q:"How does PowerSync handle conflicts?",a:"By default, PowerSync uses last-write-wins based on a timestamp column. For complex cases, you can define custom conflict resolution hooks on the server side that run during the sync process. At iStoria, the default works for 95% of our data; the other 5% uses server-side hooks."}]},{slug:"drift",term:"Drift",title:"What is Drift in Flutter?",seoTitle:"What is Drift? Flutter SQLite ORM Guide",description:"Drift is a reactive SQLite ORM for Flutter with type-safe queries, code generation, and stream-based reactive queries. Learn how it powers offline-first apps.",category:"Data & Connectivity",difficulty:"Intermediate",date:"2026-08-10",dateModified:"2026-08-10",definition:"Drift is a reactive, type-safe SQLite ORM for Flutter and Dart. It uses code generation to create typed table definitions and query APIs, with built-in support for reactive streams that automatically rebuild the UI when database rows change.",howItWorks:`Drift generates Dart classes from your schema definitions:

\`\`\`dart
// Define tables
class Stories extends Table {
  TextColumn get id => text()();
  TextColumn get title => text()();
  IntColumn get position => integer()();
  BoolColumn get isCompleted => boolean().withDefault(const Constant(false));

  @override
  Set<Column> get primaryKey => {id};
}

// Define the database
@DriftDatabase(tables: [Stories])
class AppDatabase extends _$AppDatabase {
  AppDatabase() : super(_openConnection());

  // Reactive query — returns a Stream that rebuilds when data changes
  Stream<List<Story>> watchStories() {
    return (select(stories)..orderBy([(t) => OrderingTerm(expression: t.position)])).watch();
  }
}
\`\`\`

The \`watch()\` method is the killer feature: it returns a \`Stream<List<Story>>\` that emits a new list whenever any story row changes. The UI rebuilds automatically — no manual invalidation, no event bus, no setState.

At iStoria, Drift is the local data layer that PowerSync syncs against. Every read of user progress, chapters, streaks, and levels comes from Drift. When PowerSync updates a row in the background, Drift's stream emits a new value and the UI rebuilds.`,whenToUse:`**Use Drift when:**

- You need structured local storage with type-safe queries.
- You want reactive queries — the UI auto-updates when data changes.
- You're building an offline-first app and need a typed SQLite layer.

**Choose Hive or Isar instead when:**

- You need key-value storage, not relational queries.
- You want NoSQL flexibility without a schema.
- You want to avoid code generation.`,pros:["Type-safe queries — the compiler catches schema mismatches","Reactive streams — watch() auto-updates the UI when rows change","Code generation — schema changes produce updated types automatically","Migration support — versioned schema migrations with helpers","Pairs perfectly with PowerSync for offline-first sync"],cons:["Code generation step — adds build time and a .g.dart file per table","Learning curve — DAOs, companions, and custom queries have their own API","SQLite limitations — no full-text search on iOS without extra setup, limited JSON support"],alternatives:[],relatedArticles:["offline-first-vs-local-first"],relatedCaseStudies:["istoria","offline-first-sync"],faqs:[{q:"Is Drift better than sqflite?",a:"Drift builds on sqflite and adds type safety, reactive streams, code generation, and migration helpers. For any app with more than one table, Drift is the better choice — raw sqflite requires hand-written SQL strings and manual cache invalidation. See our Drift vs sqflite comparison."},{q:"Does Drift work with PowerSync?",a:"Yes — PowerSync exposes its synced tables as Drift-compatible views. You define your Drift schema to match the PowerSync sync rules, and PowerSync populates the tables. Drift's reactive streams then auto-update the UI as PowerSync syncs changes."}]},{slug:"build-flavors",term:"Build Flavors",title:"What are Build Flavors in Flutter?",seoTitle:"What are Flutter Build Flavors? Complete Setup Guide",description:"Build flavors in Flutter let you run multiple environments (dev, staging, production) from one codebase with different bundle IDs, icons, and configuration. Learn the full setup.",category:"Build & Release",difficulty:"Intermediate",date:"2026-08-10",dateModified:"2026-08-10",definition:"Build flavors in Flutter allow you to create multiple variants of your app from a single codebase, each with its own bundle identifier, app name, icons, and configuration. Flavors let you run development, staging, and production environments side by side on the same device without conflicts.",howItWorks:`Flavors work by defining per-variant build configurations in both the native iOS (Xcode schemes) and Android (Gradle product flavors) layers, then selecting the right configuration from Dart.

**Android** (in \`android/app/build.gradle\`):

\`\`\`gradle
flavorDimensions "default"
productFlavors {
  dev {
    applicationIdSuffix ".dev"
    versionNameSuffix "-dev"
  }
  staging {
    applicationIdSuffix ".staging"
  }
  production {}
}
\`\`\`

**iOS** (Xcode schemes per flavor, with matching build configurations).

**Dart entry points** — one per flavor:

\`\`\`dart
// lib/main_dev.dart
void main() {
  runApp(MyApp(config: DevConfig()));
}

// lib/main_production.dart
void main() {
  runApp(MyApp(config: ProductionConfig()));
}
\`\`\`

Run with \`flutter run --flavor dev -t lib/main_dev.dart\`.

At iStoria, three flavors (dev, staging, production) let engineers test on real devices with the dev variant while QA tests the staging variant against the staging backend — all without uninstalling the production app.`,whenToUse:`**Use build flavors when:**

- You have multiple environments (dev, staging, production) with different backends or configuration.
- You need to run multiple variants on the same device simultaneously.
- You want different app names, icons, or bundle IDs per environment.

**Skip flavors when:**

- You only have one environment — a single build configuration is simpler.
- Your team is small and environment switching is done via environment variables or dart-define.`,pros:["Multiple environments from one codebase — no code duplication","Side-by-side installation — dev and production apps coexist on one device","Per-flavor configuration — different bundle IDs, icons, app names, and backends","Enables safe testing — QA can test against staging without affecting production"],cons:["Setup complexity — native configuration on both iOS and Android is non-trivial","CI/CD must build each flavor separately — three builds instead of one","Xcode scheme management is manual and error-prone","Every new developer needs to understand the flavor system before their first build"],alternatives:[],relatedArticles:["flutter-build-flavors-guide"],relatedCaseStudies:["release-engineering"],faqs:[{q:"What is the difference between build flavors and dart-define?",a:"Build flavors change the native build configuration (bundle ID, app name, icons). dart-define passes compile-time values to Dart code without changing the native build. Use flavors when you need different bundle IDs or native configuration; use dart-define when you only need to swap Dart-level values like API URLs."},{q:"How many flavors should I have?",a:"Three is standard: development (for local coding), staging (for QA against a staging backend), and production (the app store build). Some teams add a fourth (beta) for TestFlight distribution, but that usually overlaps with staging."}]},{slug:"crash-free-rate",term:"Crash-Free Rate",title:"What is a Good Crash-Free Rate?",seoTitle:"What is Crash-Free Rate? Mobile Quality Metric",description:"Crash-free rate is the percentage of sessions that complete without a crash. Learn what target to aim for (99.9%+), how to measure it, and how to maintain it at scale.",category:"Quality",difficulty:"Beginner",date:"2026-08-10",dateModified:"2026-08-10",definition:"Crash-free rate is the percentage of app sessions that end without a crash. It is the single most important mobile quality metric — it directly measures user experience. A rate of 99.9% means fewer than 1 in 1,000 sessions crash. Industry benchmark: 99.5%+ is acceptable; 99.9%+ is excellent.",howItWorks:`Crash monitoring tools (Sentry, Firebase Crashlytics, Bugsnag) instrument the app to capture unhandled exceptions and native crashes:

\`\`\`
Crash-free rate = (total sessions - crash sessions) / total sessions × 100
\`\`\`

A "session" starts when the app launches and ends when the user closes it or it crashes. A single user can have many sessions per day.

At iStoria (5M+ users, 350+ releases), we hold **99.9% crash-free** across every release. How:

1. **Sentry** captures every crash in real time — new regressions are triaged within hours, not store reviews.
2. **Failures as values** — every repository returns \`Either<Failure, T>\`, so error paths are explicit forks the UI renders, not unhandled exceptions that crash the app.
3. **Feature flags** — risky changes ship dark behind a flag. If the crash rate ticks up on a flagged feature, the flag is killed instantly without a hotfix.
4. **Release governance** — no merge to master without CI gates (static analysis, tests, build success). The branch protection rule rejects even the lead engineer's direct pushes.`,whenToUse:`Every production app should track crash-free rate. There is no "when not to" — it is a baseline quality metric.

**Target benchmarks:**

- **99.0%+** — minimum acceptable for any production app.
- **99.5%+** — good; most apps should aim for this.
- **99.9%+** — excellent; this is what 5M+ user apps like iStoria hold.
- **99.95%+** — exceptional; achievable with aggressive monitoring and rapid response.`,pros:["Single most actionable quality metric — directly measures user impact","Correlates with user retention — crashy apps lose users","Real-time monitoring catches regressions before store reviews","Benchmarkable across the industry — 99.9%+ is a recognized quality bar"],cons:["Only captures crashes, not ANRs or jank — a non-crashing app can still be slow","Can mask issues if sessions are short — a crash on launch inflates the rate","Platform differences — iOS crash reporting differs from Android (signal handling, tombstones)"],alternatives:[],relatedArticles:[],relatedCaseStudies:["istoria","release-engineering"],faqs:[{q:"What is a good crash-free rate?",a:"99.5%+ is good, 99.9%+ is excellent. At iStoria (5M+ users), we hold 99.9% — fewer than 1 in 1,000 sessions crash. Anything below 99% is a red flag that needs immediate attention."},{q:"Should I use Sentry or Firebase Crashlytics?",a:"Both are excellent. Sentry has superior Dart stack traces and is better for Flutter. Firebase Crashlytics is better integrated with the Firebase ecosystem. At iStoria, we use Sentry. See our Sentry vs Firebase Crashlytics comparison."}]},{slug:"modular-architecture",term:"Modular Architecture",title:"What is Modular Architecture in Flutter?",seoTitle:"What is Modular Flutter Architecture? Feature Modules",description:"Modular architecture in Flutter splits the app into independent feature modules, each owning its own UI, logic, and data. Scales to 50+ modules at 5M-user scale.",category:"Architecture",difficulty:"Advanced",date:"2026-08-10",dateModified:"2026-08-10",definition:"Modular architecture in Flutter organizes the codebase into self-contained feature modules, each responsible for one domain of functionality. Every module owns its UI (pages, widgets), state management (BLoC/Cubit), domain logic (entities, repository contracts), and data layer (APIs, databases). Modules communicate through well-defined interfaces, never reaching into each other's internals.",howItWorks:`The codebase is split by feature, not by layer. Each feature folder is a vertical slice:

\`\`\`
lib/
  features/
    auth/           — login, signup, password reset
    story/          — story browsing, reading, completion
    streak/         — daily streak tracking
    leaderboard/    — rankings, social sharing
    subscription/   — paywall, RevenueCat, trials
  core/             — shared utilities, theme, networking
  shared/           — cross-feature widgets, mixins
\`\`\`

Each feature module follows the same internal structure:

\`\`\`dart
features/story/
  domain/           — entities, repository contracts
  data/             — datasources, repository implementations
  presentation/     — bloc, pages, widgets
  story.dart        — public API (barrel file, exports only what other modules need)
\`\`\`

At iStoria, 50+ feature modules and 140+ routes are organized this way. A new engineer opens any feature folder and knows exactly where everything lives — the structure is the same in every module.

The critical discipline: **modules export only through their barrel file** (\`story.dart\`). Other modules import from \`features/story/story.dart\`, never from \`features/story/presentation/bloc/story_bloc.dart\`. This prevents coupling — a module's internal refactor never breaks another module.`,whenToUse:`**Use modular architecture when:**

- Your app has 10+ distinct features.
- A team of engineers works on the same codebase — modules give each engineer a clear ownership boundary.
- You want to enforce consistency — every module follows the same structure, so onboarding is fast.

**Skip it when:**

- The app is small (under 10 screens) — a simple layered structure is simpler.
- You're the only developer — the discipline of module boundaries is less valuable solo.`,pros:["Clear ownership — each engineer owns feature modules end to end","Consistency — every module follows the same structure, so onboarding is fast","Parallel development — engineers work on different modules without conflicts","Selective compilation — unused modules can be excluded (potential for dynamic features)","Scales to 50+ modules without entropy — iStoria proves it at 5M+ users"],cons:["Upfront discipline — module boundaries must be defined and enforced from the start","More files and indirection — a simple feature still gets domain/data/presentation layers","Shared code tension — deciding what lives in core/ vs per-module is a judgment call"],alternatives:[],relatedArticles:["managing-large-flutter-codebases"],relatedCaseStudies:["istoria"],faqs:[{q:"What is the difference between modular architecture and Clean Architecture?",a:"Clean Architecture defines the layering within a feature (domain → data → presentation). Modular architecture defines the feature boundaries themselves. They are complementary: each module in a modular architecture follows Clean Architecture internally. At iStoria, every one of our 50+ modules is internally Clean-Architected."}]},{slug:"reactive-programming",term:"Reactive Programming",title:"What is Reactive Programming in Flutter?",seoTitle:"What is Reactive Programming? Flutter Streams Guide",description:"Reactive programming in Flutter uses streams and observables to propagate change automatically. Learn how RxDart, BLoC, and StreamBuilder power reactive UIs.",category:"Architecture",difficulty:"Intermediate",date:"2026-08-10",dateModified:"2026-08-10",definition:"Reactive programming is a programming paradigm oriented around data streams and the propagation of change. In Flutter, it means the UI automatically updates when the underlying data changes — through streams, observables, or reactive state — without manual invalidation or setState calls.",howItWorks:`In imperative programming, you call \`setState()\` to tell the UI to rebuild. In reactive programming, the UI subscribes to a stream of data and rebuilds automatically whenever a new value arrives:

\`\`\`dart
// Imperative — manual rebuild
String _count = '0';
void _update() {
  setState(() { _count = '\${repository.getCount()}'; });
}

// Reactive — automatic rebuild
StreamBuilder<int>(
  stream: repository.watchCount(),  // emits new values automatically
  builder: (context, snapshot) {
    return Text('\${snapshot.data ?? 0}');
  },
)
\`\`\`

Flutter's reactive primitives:

1. **Stream** — a pipe of asynchronous events. Dart's core async primitive.
2. **StreamController** — the write end of a stream; you add events and listeners receive them.
3. **StreamBuilder** — a widget that rebuilds when the stream emits.
4. **RxDart** — extends Dart streams with operators (debounce, throttle, combineLatest, switchMap).

BLoC/Cubit is built on this model: events go in (stream), states come out (stream), the UI listens via BlocBuilder.

At iStoria, the entire data layer is reactive: Drift's \`watch()\` queries emit when rows change, PowerSync updates those rows in the background, and the UI rebuilds through the stream — no manual invalidation anywhere.`,whenToUse:`**Use reactive programming when:**

- Data changes over time and the UI should reflect those changes automatically.
- You're building a real-time or sync-heavy app (chat, live data, offline-first).
- You want to eliminate manual setState management and reduce UI bugs.

**Skip it when:**

- The UI is static — a settings page with no dynamic data doesn't need streams.
- The team is new to async programming — streams have a learning curve and debugging stream chains is harder than imperative code.`,pros:["Automatic UI updates — no manual setState, no forgotten invalidation","Compositional — operators like debounce, throttle, and combineLatest compose cleanly","Natural fit for async data — network responses, database changes, timer events all flow through streams","Powers BLoC, Cubit, and Riverpod — the entire state management ecosystem is reactive"],cons:["Learning curve — stream operators, hot vs cold streams, and backpressure are non-trivial","Debugging is harder — tracing a value through a chain of operators is more complex than stepping through imperative code","Memory management — stream subscriptions must be cancelled to avoid leaks"],alternatives:[],relatedArticles:["managing-large-flutter-codebases"],relatedCaseStudies:["istoria"],faqs:[{q:"Do I need RxDart for reactive programming in Flutter?",a:"No — Dart has built-in streams and StreamBuilder. RxDart adds operators (debounce, throttle, combineLatest, switchMap) that make complex stream compositions easier. For simple reactive flows, plain Dart streams suffice. For complex pipelines (e.g. a search-as-you-type with debounce + cancellation), RxDart is worth it."}]},{slug:"repository-pattern",term:"Repository Pattern",title:"What is the Repository Pattern in Flutter?",seoTitle:"What is the Repository Pattern? Flutter Data Layer Guide",description:"The repository pattern abstracts data sources behind a single interface, so the app doesn't know or care where data comes from. Learn how to implement it in Flutter.",category:"Architecture",difficulty:"Intermediate",date:"2026-08-10",dateModified:"2026-08-10",definition:"The repository pattern is a structural design pattern that abstracts data access behind a uniform interface. Instead of the UI or business logic calling APIs, databases, or caches directly, they call a repository — which decides where data comes from, handles caching, and manages offline behaviour.",howItWorks:`A repository defines a contract (abstract class) in the domain layer and provides concrete implementations in the data layer:

\`\`\`dart
// The contract — what the app needs
abstract class StoryRepository {
  Future<Either<Failure, List<Story>>> fetchStories();
  Stream<List<Story>> watchStories();
}

// The implementation — how the app gets it
class StoryRepositoryImpl implements StoryRepository {
  StoryRepositoryImpl(this._remote, this._local);
  final StoryRemoteDataSource _remote;
  final StoryLocalDataSource _local;

  @override
  Future<Either<Failure, List<Story>>> fetchStories() async {
    try {
      final stories = await _local.cachedStories();    // offline-first read
      unawaited(_remote.refreshInBackground());         // sync, never blocks UI
      return Right(stories);
    } on CacheException catch (e) {
      return Left(CacheFailure(e.message));
    }
  }
}
\`\`\`

The BLoC or Cubit never sees \`StoryRemoteDataSource\` or \`StoryLocalDataSource\`. It calls \`repository.fetchStories()\` and gets data. The repository is where offline-first logic, caching strategy, and error mapping live.

At iStoria, every feature has at least one repository. The repository is the only thing the presentation layer knows about when it needs data. Whether that data comes from the API, the local Drift database, or PowerSync's sync layer is the repository's business — nobody else's.`,whenToUse:`**Use the repository pattern when:**

- You have more than one data source (API + cache, or local DB + remote).
- You want to swap implementations (mock for testing, different backend).
- You're building an offline-first app — the repository is where the offline logic lives.

**Skip it when:**

- The app has a single data source and no caching needs — a direct API call is simpler.
- You're prototyping and the data layer is a single function.`,pros:["Abstracts data sources — the UI doesn't know or care where data comes from","Centralizes caching and offline logic — one place to manage, not per-screen","Swappable implementations — mock the repository in tests without mocking the database","Pairs naturally with Either<Failure, T> — errors are values, not exceptions","Scales to 50+ modules — every feature has the same data-access shape"],cons:["Adds a layer of indirection — one more interface and implementation per feature","Can feel like ceremony for trivial data access (one API call, no caching)","Requires discipline to keep the contract lean — dumping every API call on one repository creates a god object"],alternatives:[],relatedArticles:["managing-large-flutter-codebases"],relatedCaseStudies:["istoria"],faqs:[{q:"What is the difference between a repository and a data source?",a:"A data source is one source of data (an API client, a local database, a cache). A repository orchestrates multiple data sources behind one interface. The repository decides: read from cache first, fall back to API, update cache. Data sources don't know about each other; the repository does."}]},{slug:"either-failure-pattern",term:"Either<Failure, T> Pattern",title:"What is Either<Failure, T> in Flutter?",seoTitle:"What is Either<Failure, T>? Flutter Error Handling",description:"Either<Failure, T> is a functional error handling pattern that represents success (Right) or failure (Left) as a value — not an exception. Learn how it works and why it prevents crashes.",category:"Architecture",difficulty:"Intermediate",date:"2026-08-10",dateModified:"2026-08-10",definition:"Either<Failure, T> is a functional error-handling pattern from the dartz package where a function returns either a Left (containing a Failure) or a Right (containing the success value T). Instead of throwing exceptions on errors, you return them as values — making every error path an explicit fork the caller must handle.",howItWorks:`\`Either<L, R>\` is a union type — it holds either a Left value or a Right value, never both. By convention, Left holds the error (Failure) and Right holds the success (T):

\`\`\`dart
// A repository method returning Either<Failure, T>
Future<Either<Failure, List<Story>>> fetchStories() async {
  try {
    final stories = await _local.cachedStories();
    return Right(stories);  // success
  } on CacheException catch (e) {
    return Left(CacheFailure(e.message));  // failure as a value
  }
}

// The caller must handle both cases
final result = await repository.fetchStories();
result.fold(
  (failure) => showError(failure.message),
  (stories) => showStories(stories),
);
\`\`\`

The critical difference from exceptions: **the compiler doesn't force you to handle an exception**, but the type system forces you to handle an Either. You can't access the success value without acknowledging that a failure might exist.

At iStoria (99.9% crash-free across 350+ releases), this pattern is a core reason the app is stable. Every repository returns \`Either<Failure, T>\`. The UI renders failure states the same way it renders success states — there is no unhandled exception path that can crash the app.

A typical failure hierarchy:

\`\`\`dart
abstract class Failure {
  final String message;
  Failure(this.message);
}

class NetworkFailure extends Failure {
  NetworkFailure(super.message);
}

class CacheFailure extends Failure {
  CacheFailure(super.message);
}

class ServerFailure extends Failure {
  ServerFailure(super.message);
}
\`\`\``,whenToUse:`**Use Either<Failure, T> when:**

- You want to eliminate "forgot to handle the error path" bugs.
- You're using Clean Architecture — repositories return Either, not throw.
- You want error states to be first-class UI states (loading, error, success — all rendered).

**Skip it when:**

- The app is small and try/catch is sufficient.
- Your team finds the pattern adds cognitive load without proportional value.
- You use a framework (like Riverpod) that has its own error handling via AsyncValue.`,pros:["Eliminates unhandled exceptions — every error path is an explicit fork","Type-safe — you can't access the success value without acknowledging failure","Composable — fold, map, and getOrElse chain cleanly","Forces a consistent error UI — loading, error, and success are all values the UI renders","Core to holding 99.9% crash-free at iStoria"],cons:["Adds boilerplate — every method needs a Failure type and a fold","Not idiomatic Dart — Dart's native error handling is exceptions","Learning curve — teams new to functional programming need time to internalize Left/Right","The dartz package is not actively maintained — fpdart is the modern alternative"],alternatives:[],relatedArticles:["managing-large-flutter-codebases"],relatedCaseStudies:["istoria"],faqs:[{q:"Should I use dartz or fpdart for Either?",a:"fpdart is the modern choice — it is actively maintained, has better Dart 3 integration (sealed classes, pattern matching), and offers additional types like TaskEither and Option. dartz works but hasn't been updated in years. At iStoria, we started with dartz; new features use fpdart."},{q:"Does Either<Failure, T> replace try/catch?",a:"It replaces throwing exceptions across layer boundaries. Inside a data source (network client, database), you still use try/catch — you catch the exception and wrap it in a Left(Failure). The Either is the contract between layers; try/catch is the implementation inside a layer."}]},{slug:"sentry-flutter",term:"Sentry for Flutter",title:"What is Sentry for Flutter?",seoTitle:"What is Sentry for Flutter? Crash Monitoring Guide",description:"Sentry is a crash monitoring and performance tracing platform for Flutter apps. Learn how it captures Dart and native crashes, performance traces, and session replays.",category:"Quality",difficulty:"Beginner",date:"2026-08-10",dateModified:"2026-08-10",definition:"Sentry is an error tracking and performance monitoring platform that captures unhandled exceptions, native crashes, and performance traces in real time. The Sentry Flutter SDK instruments Dart code, native iOS (Objective-C/Swift), and native Android (Kotlin/Java) layers, giving full-stack crash visibility in production.",howItWorks:`The Sentry Flutter SDK wraps the app's run zone to capture unhandled exceptions:

\`\`\`dart
await SentryFlutter.init(
  (options) {
    options.dsn = 'https://your-dsn@sentry.io/project';
    options.tracesSampleRate = 1.0;  // performance tracing
    options.profilesSampleRate = 1.0; // profiling
  },
  appRunner: () => runApp(MyApp()),
);
\`\`\`

Key capabilities:

1. **Crash capture** — Dart exceptions, Flutter framework errors, native iOS crashes (mach exceptions), and native Android crashes (NDK signals).
2. **Stack traces** — full Dart stack traces with source maps, even in obfuscated/release builds.
3. **Performance tracing** — traces slow operations (network calls, screen renders, database queries) with distributed tracing.
4. **Session replay** — reproduces the exact user interaction that led to a crash.
5. **Release tracking** — every crash is tagged with the release version, so you know which release introduced it.

At iStoria (5M+ users, 99.9% crash-free), Sentry is the first thing checked every morning. New crashes from the latest release are triaged within hours — before they become store reviews. PII is masked in Sentry events, and cleartext traffic is disabled so crash reports never contain sensitive data.`,whenToUse:`**Use Sentry when:**

- You need real-time crash monitoring in production.
- You want performance tracing alongside crash reports.
- Your app runs on both iOS and Android and you need unified crash visibility.

**Choose Firebase Crashlytics instead when:**

- You're already deep in the Firebase ecosystem and want to avoid another dependency.
- You need a free tier with no quota concerns.`,pros:["Best-in-class Dart stack traces — even in release builds with obfuscation","Unified iOS + Android + Dart crash visibility in one platform","Performance tracing — see slow network calls, render bottlenecks, and database queries","Release tracking — know exactly which release introduced a crash","Real-time alerts — get notified within minutes of a new regression"],cons:["Pricing scales with events — a 5M+ user app generates a lot of events","SDK adds a small runtime overhead — particularly with performance tracing at 100% sample rate","Dashboard complexity — the Sentry UI is powerful but not simple"],alternatives:[],relatedArticles:[],relatedCaseStudies:["istoria"],faqs:[{q:"Is Sentry better than Firebase Crashlytics?",a:"For Flutter specifically, Sentry has better Dart stack traces and richer performance tracing. Firebase Crashlytics is free, deeply integrated with Firebase, and sufficient for basic crash monitoring. At iStoria, we use Sentry. See our Sentry vs Firebase Crashlytics comparison."},{q:"How much does Sentry cost?",a:"Sentry has a free Developer tier (5,000 errors/month). Team and Business plans scale with event volume. For a 5M+ user app, expect to pay for the Business tier. Firebase Crashlytics is completely free, which is its main advantage."}]},{slug:"rxdart",term:"RxDart",title:"What is RxDart in Flutter?",seoTitle:"What is RxDart? Flutter Reactive Extensions Guide",description:"RxDart extends Dart streams with powerful operators like debounce, throttle, switchMap, and combineLatest. Learn how it powers complex reactive flows in Flutter.",category:"State Management",difficulty:"Advanced",date:"2026-08-10",dateModified:"2026-08-10",definition:"RxDart is a Dart library that extends the standard Stream API with functional reactive operators inspired by ReactiveX. It adds operators like debounce, throttle, switchMap, combineLatest, and BehaviorSubject on top of Dart's built-in streams, making complex asynchronous data flows composable and declarative.",howItWorks:`RxDart does NOT replace Dart streams — it enhances them. You wrap a Dart stream with RxDart operators to get composition power:

\`\`\`dart
import 'package:rxdart/rxdart.dart';

// Search-as-you-type: debounce, cancel previous, combine
final searchResults = searchTextSubject
    .debounceTime(Duration(milliseconds: 300))     // wait for typing to stop
    .distinctUniqueChanged()                        // skip duplicate queries
    .switchMap((query) =>                           // cancel previous search
        repository.search(query).asStream())
    .startWith([]);                                 // initial empty state
\`\`\`

Key operators:

1. **debounceTime** — wait for a burst of events to settle, then emit the last one. Perfect for search-as-you-type.
2. **throttleTime** — emit at most one event per time window. Perfect for button-tap debouncing.
3. **switchMap** — transform each event into a new stream, canceling the previous one. Critical for search cancellation.
4. **combineLatest** — combine multiple streams, emitting whenever any one changes. Perfect for combining user data from different sources.
5. **BehaviorSubject** — a StreamController that replays the last value to new listeners. The BLoC library uses this internally for state streams.

At iStoria, RxDart powers the search flow, the leaderboard refresh logic, and the sync status indicator. The reactive data layer (Drift streams + PowerSync sync) is composed with RxDart operators before reaching the BLoC.`,whenToUse:`**Use RxDart when:**

- You have complex stream compositions (debounce + cancel + combine).
- You need BehaviorSubject for state that should replay to new listeners.
- Your BLoC/Cubit has complex event transformers.

**Skip it when:**

- Your streams are simple — a single data source with no composition.
- You're new to reactive programming — start with plain Dart streams and graduate to RxDart when you hit its use cases.`,pros:["Powerful operators — debounce, throttle, switchMap, combineLatest make complex flows declarative","Works with existing Dart streams — no replacement, just enhancement","BehaviorSubject/ValueStream — replays last value to new listeners, critical for state management","Powers the flutter_bloc library — event transformers use RxDart internally"],cons:["Steep learning curve — ReactiveX operators are powerful but not intuitive","Debugging is harder — tracing through a chain of operators is less straightforward than stepping through imperative code","Memory management — stream subscriptions and subjects must be properly closed to avoid leaks","Can lead to over-engineering — simple flows that don't need operators get wrapped in RxDart anyway"],alternatives:[],relatedArticles:["managing-large-flutter-codebases"],relatedCaseStudies:["istoria"],faqs:[{q:"Is RxDart still needed in 2026?",a:"For complex stream compositions, yes. Dart's built-in streams don't have debounce, switchMap, or combineLatest. If you're building search-as-you-type, multi-stream composition, or complex BLoC event transformers, RxDart is the standard tool. For simple single-stream use cases, plain Dart streams suffice."},{q:"What is the difference between RxDart and Dart streams?",a:"Dart streams are the built-in async primitive. RxDart is a library that adds operators ON TOP of Dart streams. RxDart doesn't replace streams — it extends them with ReactiveX-style composition operators."}]}];export{e as g};
