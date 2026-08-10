const e=[{slug:"bloc-vs-riverpod",title:"BLoC vs Riverpod: Which Flutter State Management Should You Choose?",seoTitle:"BLoC vs Riverpod: Flutter State Management Compared",description:"BLoC vs Riverpod for Flutter: a production-scale comparison of boilerplate, testing, debugging, and team adoption from a 5M-user codebase.",subjects:["BLoC","Riverpod"],category:"State Management",date:"2026-08-10",dateModified:"2026-08-10",quickAnswer:`Use **BLoC** when you lead a team shipping a large, long-lived app where every state transition must be auditable and testable. Use **Riverpod** when you want less ceremony for a smaller app or a feature-team that moves fast and prefers compile-time safety over explicit event classes.

I run BLoC/Cubit across a 5M-user, 50+ module Flutter codebase at iStoria and I would pick it again for that scale. The enforced separation between events, states, and business logic pays for itself the first time a bug report says "the cart showed the wrong total" and you can replay the exact event stream in a unit test. Riverpod is excellent and I reach for it on greenfield side-projects — but for a squad of engineers who did not all write the original code, BLoC's explicitness is a load-bearing wall.`,detailedComparison:`## The core philosophical split

BLoC is **event-driven**: the UI dispatches events, a bloc maps events to states through a pure transformer, and the UI rebuilds on state changes. Every state transition has a named, typed event you can grep for. Riverpod is **reactive/declarative**: you declare providers that compute or hold state, and the UI watches them. Mutations happen by calling methods on a notifier; there is no separate event type.

This sounds academic until you inherit a codebase. With BLoC, \`SearchQueryChanged\` is a real class with a constructor and a field. With Riverpod, the same mutation is a method call on a notifier — just as valid, but harder to audit from a crash log alone.

## Boilerplate and learning curve

BLoC asks for more files: an event class, a state class, and the bloc itself. For a simple counter that feels absurd. For a checkout flow with six events, four states, and validation rules, the structure is exactly what keeps junior engineers from creating spaghetti. Riverpod's \`Notifier\` subclass with a few methods is leaner; a new hire can be productive in a day.

The honest trade-off: BLoC's boilerplate is a **constraint that scales**, Riverpod's brevity is a **velocity that needs discipline**.

## Testing

This is where BLoC wins decisively for teams. \`blocTest\` lets you pump a sequence of events and assert the exact emitted states:

\`\`\`dart
blocTest<CheckoutBloc, CheckoutState>(
  'emits [loading, success] on valid cart',
  build: () => CheckoutBloc(cartRepo: mockCart),
  act: (bloc) => bloc.add(const SubmitCheckoutPressed()),
  expect: () => [CheckoutLoading(), CheckoutSuccess(orderId: '123')],
);
\`\`\`

You cannot get that one-liner with Riverpod — you can test providers, but you assert on the resulting state, not on a replayed event timeline. For regression-heavy teams, BLoC's testability is its strongest argument.

## Scalability and team adoption

At 50+ modules with four engineers, BLoC's conventions (one bloc per feature, states as sealed unions, events named after user intent) make code **navigable**. A new engineer opens \`CheckoutBloc\` and sees every possible thing a user can do. Riverpod achieves the same with discipline, but nothing in the library forces it — I have seen Riverpod codebases where state mutations are scattered across widget callbacks.

## Tooling and debugging

BLoC has the **bloc_concurrency** and **hydrated_bloc** packages, plus the BlocObserver hook that logs every transition. Riverpod counters with compile-time safety (no \`Provider.of\` context lookups, no \`late\` initialization foot-guns) and excellent DevTools integration. Both are well-tooled; BLoC's runtime observability is slightly richer because events are first-class objects.

## Ecosystem maturity

Both are mature, well-documented, and widely used. BLoC predates Riverpod and has more community content; Riverpod (the successor to Provider) is the default recommendation in much of the newer Flutter community. Neither is going anywhere.`,comparisonTable:{headers:["Feature","BLoC","Riverpod"],rows:[["Paradigm","Event-driven (events → states)","Reactive providers / notifiers"],["Boilerplate","High (events, states, bloc)","Low to moderate"],["Learning curve","Steep","Moderate"],["Testability","Excellent (blocTest replays events)","Good (assert on state)"],["Compile-time safety","Good","Excellent (no context lookups)"],["Team scalability","Very strong (enforced structure)","Good (needs convention)"],["DevTools / observability","BlocObserver logs transitions","Provider list + DevTools"],["Persistence","hydrated_bloc (built-in)","Manual or shared_preferences"],["Community content volume","Larger (older)","Growing fast"],["Best for","Large teams, auditable flows","Lean teams, fast iteration"]]},codeComparison:`### Counter — BLoC

\`\`\`dart
// counter_event.dart
sealed class CounterEvent {}
class CounterIncrementPressed extends CounterEvent {}

// counter_state.dart
sealed class CounterState { final int value; const CounterState(this.value); }
class CounterInitial extends CounterState { const CounterInitial() : super(0); }

// counter_bloc.dart
class CounterBloc extends Bloc<CounterEvent, CounterState> {
  CounterBloc() : super(const CounterInitial()) {
    on<CounterIncrementPressed>((event, emit) =>
        emit(CounterState(state.value + 1)));
  }
}

// usage
BlocBuilder<CounterBloc, CounterState>(
  builder: (_, state) => Text('\${state.value}'),
);
\`\`\`

### Counter — Riverpod

\`\`\`dart
final counterProvider = NotifierProvider<CounterNotifier, int>(() {
  return CounterNotifier();
});

class CounterNotifier extends Notifier<int> {
  @override
  int build() => 0;
  void increment() => state++;
}

// usage
Consumer(builder: (_, ref, __) {
  final count = ref.watch(counterProvider);
  return TextButton(
    onPressed: ref.read(counterProvider.notifier).increment,
    child: Text('$count'),
  );
});
\`\`\`

The BLoC version is ~30 lines across three files for a counter — that is the tax. For a feature with ten events and validation, that same structure is what keeps the codebase readable at 50 modules.`,whenToChoose:{first:"**Choose BLoC when:** you lead a team of 3+ engineers on a long-lived app, you need every state transition auditable in tests and crash logs, you have complex multi-step flows (checkout, onboarding, sync), or you are regulated/enterprise where traceability matters. The boilerplate is the feature.",second:"**Choose Riverpod when:** you are a solo dev or a small team that values compile-time safety and fast iteration, your app is mostly CRUD or view-state, or you are prototyping and the event-class ceremony would slow you down. Pair it with a lint convention and it scales further than people give it credit."},relatedArticles:["managing-large-flutter-codebases"],relatedGlossary:["bloc","riverpod","reactive-programming"],faqs:[{q:"Is BLoC deprecated or being replaced by Riverpod?",a:"No. BLoC (felangel/bloc) is actively maintained and widely used in production at scale. Riverpod is more popular in newer greenfield projects, but BLoC remains the stronger choice for large teams that need explicit, testable state transitions."},{q:"Which has better performance?",a:"For the vast majority of apps, performance is not the deciding factor — both rebuild only the widgets that watch changed state. BLoC streams have slightly more overhead per event, but it is negligible compared to widget rebuild cost. Optimize widget granularity before swapping state management."},{q:"Can I use both in the same app?",a:"Yes, and many teams do during a migration. Use BLoC for complex feature flows and Riverpod for simple view-scoped state. The risk is cognitive overhead for new engineers, so set a convention and document it."}]},{slug:"bloc-vs-cubit",title:"BLoC vs Cubit: Which One Should You Actually Use?",seoTitle:"BLoC vs Cubit: Flutter State Management Compared",description:"BLoC vs Cubit: when the event-class ceremony is worth it and when Cubit's simpler API is the right call — from a team that runs both at 5M-user scale.",subjects:["BLoC","Cubit"],category:"State Management",date:"2026-08-10",dateModified:"2026-08-10",quickAnswer:'**Cubit is a BLoC without event classes.** Same package, same `BlocBuilder`, same testing infra — you just call methods (`emit`) instead of dispatching events. Use Cubit for state that changes through simple, internal logic (theme, onboarding step, a toggle). Use full BLoC for flows where **user intent and external triggers** must be traceable (checkout, auth, sync).\n\nIn our 50+ module codebase we use both: Cubit for lightweight feature state, BLoC for anything with a multi-step lifecycle or external inputs. The line is not aesthetic — it is whether you would ever need to ask "what events led to this state?" in a bug report.',detailedComparison:`## What Cubit actually is

Cubit is part of the \`bloc\` package. It extends the same base, emits the same state objects, and works with \`BlocBuilder\`, \`BlocListener\`, and \`BlocProvider\`. The only difference: instead of registering \`on<Event>\` handlers, you expose public methods that call \`emit\` directly. There are no event classes.

\`\`\`dart
class CounterCubit extends Cubit<int> {
  CounterCubit() : super(0);
  void increment() => emit(state + 1);
}
\`\`\`

That is the entire API. If you have ever felt BLoC's event files were overkill for a settings screen, Cubit exists for you.

## When the event class earns its keep

The event class is not ceremony for its own sake — it is an **audit trail**. Consider a checkout flow: \`SubmitCheckoutPressed\`, \`CouponApplied\`, \`PaymentMethodSelected\`, \`RetryAfterFailure\`. When a user reports "the order went through twice," you look at the BlocObserver log and see the exact event sequence with timestamps. With Cubit, the same mutations are method calls; the log shows state emissions but not the semantic trigger.

For a sync engine talking to PowerSync, events like \`SyncStarted\`, \`ConflictDetected\`, \`ConflictResolvedManually\` are the vocabulary of the system. Collapsing those into method calls would lose meaning.

## Testing differences

Both are testable with the same \`bloc_test\` package:

\`\`\`dart
// Cubit — act by calling methods
cubitTest<CounterCubit>(
  'increments',
  build: () => CounterCubit(),
  act: (cubit) => cubit.increment(),
  expect: () => [1],
);
\`\`\`

You lose the ability to replay an **event stream** in a test, because there are no events. For most Cubit use cases that is fine — you are testing state outputs, not event choreography.

## A pragmatic team rule

The convention we landed on after two years at scale:

- **Cubit** for state that is a pure function of user input with no meaningful "why did this happen?" question (toggles, form field values, pagination offset, local UI state).
- **BLoC** for anything with external inputs (network, database, sync engine), multi-step flows, or where business rules mean the same state can be reached by different paths and the path matters.

This keeps the 80% of feature state lean (Cubit) and reserves the event-class overhead for the 20% where it pays.`,comparisonTable:{headers:["Feature","BLoC","Cubit"],rows:[["Event classes","Required","None — methods instead"],["API surface","on<Event> handlers","Methods calling emit"],["Boilerplate","Higher (events + states + bloc)","Lower (states + cubit)"],["Audit trail","Events logged via BlocObserver","State emissions only"],["Testing","blocTest with event sequences","blocTest with method calls"],["Event transformers","Yes (bloc_concurrency)","No (not event-based)"],["Same package?","Yes (bloc)","Yes (bloc)"],["Migration effort","—","Trivial (Cubit ↔ BLoC)"],["Best for","Multi-step, external-input flows","Simple, internal-logic state"]]},codeComparison:`### Fetch-and-cache — BLoC

\`\`\`dart
sealed class ArticleEvent {}
class ArticleFetchRequested extends ArticleEvent {
  final String id; const ArticleFetchRequested(this.id);
}

sealed class ArticleState {}
class ArticleInitial extends ArticleState {}
class ArticleLoading extends ArticleState {}
class ArticleLoaded extends ArticleState { final Article a; const ArticleLoaded(this.a); }

class ArticleBloc extends Bloc<ArticleEvent, ArticleState> {
  ArticleBloc(this.repo) : super(ArticleInitial()) {
    on<ArticleFetchRequested>(_onFetch);
  }
  final ArticleRepo repo;
  Future<void> _onFetch(ArticleFetchRequested e, Emitter<ArticleState> emit) async {
    emit(ArticleLoading());
    final a = await repo.fetch(e.id);
    emit(ArticleLoaded(a));
  }
}
\`\`\`

### Fetch-and-cache — Cubit

\`\`\`dart
sealed class ArticleState {}
class ArticleInitial extends ArticleState {}
class ArticleLoading extends ArticleState {}
class ArticleLoaded extends ArticleState { final Article a; const ArticleLoaded(this.a); }

class ArticleCubit extends Cubit<ArticleState> {
  ArticleCubit(this.repo) : super(ArticleInitial());
  final ArticleRepo repo;
  Future<void> fetch(String id) async {
    emit(ArticleLoading());
    final a = await repo.fetch(id);
    emit(ArticleLoaded(a));
  }
}
\`\`\`

The Cubit is ~40% less code. For a single fetch that is the right call. If that flow later grows retries, conflict handling, and a manual refresh event, graduate it to a BLoC — the refactor is mechanical because the state classes stay identical.`,whenToChoose:{first:"**Choose BLoC when:** the flow has multiple triggers (user action + push notification + sync), you need `bloc_concurrency` for debouncing/dedup, or debugging requires an event timeline. The event class is documentation that the codebase cannot drift from.",second:'**Choose Cubit when:** the state changes through simple methods, there is one obvious trigger, and the "why did this happen?" question is trivially answered by reading the method. Start with Cubit; promote to BLoC when complexity arrives — they share the same package so the migration is painless.'},relatedArticles:["managing-large-flutter-codebases"],relatedGlossary:["bloc","cubit"],faqs:[{q:"Is Cubit just a lighter BLoC?",a:"Yes — literally. Cubit is a base class in the bloc package. It omits event classes and lets you call emit from methods. Everything else (providers, builders, testing) is identical, so you can migrate between them with minimal effort."},{q:"Can I switch from Cubit to BLoC later without a rewrite?",a:"Yes. The state classes and UI layer (BlocBuilder/BlocProvider) stay exactly the same. You add event classes and convert methods to `on<Event>` handlers. The refactor is mechanical and low-risk."},{q:"Does Cubit support event transformers like restartable/droppable?",a:"No — event transformers operate on the event stream, and Cubit has no events. If you need debouncing or dedup on triggers, either implement it inside the method (e.g. a Timer) or graduate to a full BLoC with `bloc_concurrency`."}]},{slug:"riverpod-vs-provider",title:"Riverpod vs Provider: Why the Flutter Community Moved On",seoTitle:"Rivepod vs Provider: Flutter DI Compared",description:"Riverpod vs Provider: compile-time safety, no BuildContext dependency, and testability — why Riverpod replaced Provider in modern Flutter codebases.",subjects:["Riverpod","Provider"],category:"State Management",date:"2026-08-10",dateModified:"2026-08-10",quickAnswer:"**Use Riverpod. Provider is effectively legacy.** Riverpod was written by the same author (Rémi Rousselet) specifically to fix Provider's design flaws — `Provider.of` runtime crashes, `BuildContext` coupling, and test friction. There is no scenario where a new Flutter project in 2026 should start with Provider.\n\nIf you inherit a Provider codebase, migrate incrementally — they coexist — but every new feature should be Riverpod. I would not greenlight a new project using Provider today, full stop.",detailedComparison:`## The history

Provider was the first widely-adopted DI/state solution for Flutter, and the Flutter team even featured it in samples. But its reliance on \`BuildContext\` for lookups created real problems: runtime \`ProviderNotFoundException\`, untestable widgets without a tree of ancestors, and implicit dependencies. Rémi Rousselet wrote Riverpod to solve exactly these issues — it is Provider's deliberate successor.

## Compile-time safety

Provider lookups happen at runtime:

\`\`\`dart
final user = Provider.of<UserModel>(context); // throws if not found
\`\`\`

Riverpod references are resolved at compile time through generated provider objects:

\`\`\`dart
final user = ref.watch(userProvider); // resolved at compile time
\`\`\`

If \`userProvider\` does not exist, the code does not compile. This alone eliminates a whole class of runtime crashes that plague Provider codebases.

## No BuildContext dependency

Provider is bound to the widget tree — you need a \`BuildContext\` to read it, which means business logic in non-widget code has to thread context through or use workarounds. Riverpod providers are independent objects; you can read them in a repository, a test, or a background isolate. This makes the architecture cleaner and testing trivial.

## Testing

Provider tests require building a \`ProviderScope\`/\`MultiProvider\` ancestor tree and pumping a widget. Riverpod tests create a \`ProviderContainer\` and read the provider directly — no widget tree needed:

\`\`\`dart
final container = ProviderContainer();
expect(container.read(countProvider), 0);
\`\`\`

For a team that cares about unit-testing business logic without a widget harness, this is a massive quality-of-life win.

## Migration story

Provider and Riverpod coexist fine — you can wrap the app in both \`MultiProvider\` and \`ProviderScope\` and migrate feature by feature. The risk of a big-bang rewrite is never worth it. Migrate the next feature you touch and let attrition do the rest.

## DevTools and debugging

Riverpod's DevTools integration shows a live provider graph — every provider, its current value, its dependencies, and which widgets are listening. When a provider rebuilds unexpectedly or you have a circular dependency, the graph view points you at the problem in seconds. Provider has no equivalent; you are back to \`debugPrint\` and \`Provider.of\` breakpoints. For a team that debugs state issues weekly, this is a meaningful day-to-day advantage that compounds as the provider graph grows.`,comparisonTable:{headers:["Feature","Riverpod","Provider"],rows:[["Resolution","Compile-time","Runtime (throws if missing)"],["BuildContext dependency","No","Yes (required for lookup)"],["Author","Rémi Rousselet","Rémi Rousselet (older)"],["Status","Active, recommended","Maintenance / legacy"],["Testing","ProviderContainer, no widget tree","Needs widget tree + MultiProvider"],["Code generation","Optional (riverpod_generator)","None"],["AutoDispose / family","First-class","Limited"],["Learning curve","Moderate","Low (but footguns)"],["Best for","New projects","Legacy maintenance only"]]},codeComparison:`### Dependency injection — Provider

\`\`\`dart
// must provide in the tree
MultiProvider(
  providers: [
    Provider<AuthRepo>(create: (_) => AuthRepo()),
    ChangeNotifierProvider<UserModel>(create: (_) => UserModel()),
  ],
  child: MyApp(),
);

// reading — runtime lookup, throws if missing
final repo = context.read<AuthRepo>();
\`\`\`

### Dependency injection — Riverpod

\`\`\`dart
// declare providers anywhere
final authRepoProvider = Provider((ref) => AuthRepo());
final userModelProvider = NotifierProvider<UserNotifier, User>(UserNotifier.new);

// reading — compile-time resolved
Consumer(builder: (_, ref, __) {
  final repo = ref.read(authRepoProvider);
});

// testable without a widget tree
void main() {
  final container = ProviderContainer();
  expect(container.read(authRepoProvider), isA<AuthRepo>());
}
\`\`\`

The Riverpod version is testable in a pure Dart test, has no runtime lookup risk, and the provider graph is explicit. There is no contest for new work.`,whenToChoose:{first:"**Choose Riverpod when:** you are starting a new project or feature, you want compile-time safety and testability, or you are building an architecture where business logic lives outside widgets. This is the default for all new Flutter work.",second:"**Choose Provider when:** you are maintaining an existing Provider codebase and a full rewrite is not justified. Wrap new features in Riverpod and migrate opportunistically. Do not start new projects with Provider."},relatedArticles:["managing-large-flutter-codebases"],relatedGlossary:["riverpod","dependency-injection"],faqs:[{q:"Is Provider officially deprecated?",a:"Not marked deprecated on pub.dev, but it is in maintenance mode and the Flutter team and its own author recommend Riverpod for new work. Treat it as legacy for new project decisions."},{q:"Is the Riverpod learning curve steep?",a:"Moderate. The concepts (providers, ref, autoDispose, family) take a day to internalize. Code generation with riverpod_generator reduces boilerplate further. It is far less steep than BLoC."},{q:"Can Provider and Riverpod coexist during migration?",a:"Yes. Wrap the app in both MultiProvider and ProviderScope. Migrate one feature at a time. The two do not conflict because Riverpod does not use the widget tree for lookups."},{q:"Should I learn Riverpod with or without code generation?",a:"Start without it — learn the provider types, `ref`, `autoDispose`, and `family` by writing them longhand so the mental model sticks. Once that clicks, adopt `riverpod_generator` (`@riverpod` annotations) for new providers; it reduces boilerplate, gives you safer naming, and generates the boilerplate you would hand-write anyway. The generated API is identical to the manual one, so the knowledge transfers both ways."},{q:"What about InheritedWidget — is that not enough?",a:"InheritedWidget is the Flutter primitive both Provider and Riverpod build on, but it has real pain points: no compile-time safety, no auto-dispose, no family parameters, and lookups are O(1) but require a `BuildContext`. Provider wraps InheritedWidget to make it bearable; Riverpod abstracts it away entirely. For anything beyond passing a theme down the tree, reach for Riverpod instead of raw InheritedWidget."}]},{slug:"bloc-vs-getx",title:"BLoC vs GetX: The State Management Argument Settled",seoTitle:"BLoC vs GetX: Flutter State Management Compared",description:"BLoC vs GetX: architecture, testability, dependencies, and long-term maintainability — why production teams pick BLoC over GetX's all-in-one toolkit.",subjects:["BLoC","GetX"],category:"State Management",date:"2026-08-10",dateModified:"2026-08-10",quickAnswer:"**Use BLoC for any team or long-lived app. Use GetX only for rapid prototypes where you accept the technical debt.** GetX bundles state management, routing, DI, localization, and networking into one package with a `.obs` / `.obsX` reactive API that is genuinely fast to build with. The cost is tight coupling to a framework with non-standard patterns, a dependency surface that spans your entire app, and an architecture that does not scale to a multi-engineer codebase.\n\nI would not allow GetX in a production codebase with more than one engineer. For a weekend hackathon, it is fine. The speed you gain in week one, you pay back tenfold in year two.",detailedComparison:"## Scope and coupling\n\nGetX is not a state management library — it is an **application framework**. It provides routing (`Get.to`), dependency injection (`Get.put`), localization, theming, networking, and state (`.obs`, `GetBuilder`). That breadth is the appeal: one dependency, no wiring. It is also the problem: every layer of your app depends on GetX, and swapping any one piece out means rewriting how you navigate, inject, and translate.\n\nBLoC does one thing — state management — and composes with your own routing (go_router), DI (get_it/riverpod/inherited), and networking (dio/http) choices. That separation is what lets a 50-module codebase evolve without a straitjacket.\n\n## Reactive model\n\nGetX's `.obs` observables are simple:\n\n```dart\nfinal count = 0.obs;\ncount.value++;\nObx(() => Text('${count.value}'));\n```\n\nThat is undeniably fast to write. The trade-off: state is a bag of mutable observables with no enforced structure, no event traceability, and no compile-time guarantees about what triggers a rebuild. At scale, this devolves into the classic \"spaghetti of observables\" problem.\n\nBLoC forces every mutation through a typed event, which is more code but produces an auditable, testable state machine.\n\n## Testability\n\nBLoC is designed for testing: `blocTest` replays events and asserts states, pure and deterministic. GetX controllers are testable but rely on the GetX runtime (`Get.testMode`), and the global `Get` singleton (routing, DI) makes isolated unit tests harder. For a team practicing TDD or regression-heavy testing, BLoC is the clear winner.\n\n## Architecture and long-term cost\n\nGetX encourages putting logic in `GetxController` classes and calling them from anywhere via `Get.find<T>()` — a service-locator pattern with global mutable state. This is fast initially and fragile long-term: hidden dependencies, test isolation problems, and coupling that resists refactoring. BLoC's explicit `BlocProvider` dependency graph and unidirectional data flow map cleanly onto Clean Architecture layers, which is why production teams standardize on it.",comparisonTable:{headers:["Feature","BLoC","GetX"],rows:[["Scope","State management only","All-in-one framework"],["Coupling","Low (composable)","High (entire app depends on it)"],["Reactive API","Events → states",".obs observables"],["Boilerplate","High","Very low"],["Testability","Excellent (blocTest)","Limited (global runtime)"],["DI","Bring your own","Get.put / Get.find (global)"],["Routing","Bring your own (go_router)","Built-in (Get.to)"],["Architecture fit","Clean Architecture friendly","Service-locator pattern"],["Team scalability","Strong","Poor"],["Best for","Production / team apps","Prototypes / solo hacks"]]},codeComparison:`### Counter — GetX

\`\`\`dart
class CounterController extends GetxController {
  final count = 0.obs;
  void increment() => count.value++;
}

// register once
Get.put(CounterController());

// usage — global lookup
final c = Get.find<CounterController>();
Obx(() => Text('\${c.count.value}'));
\`\`\`

### Counter — BLoC

\`\`\`dart
sealed class CounterEvent {}
class Increment extends CounterEvent {}

class CounterBloc extends Bloc<CounterEvent, int> {
  CounterBloc() : super(0) {
    on<Increment>((_, emit) => emit(state + 1));
  }
}

// usage — explicit dependency
BlocProvider(
  create: (_) => CounterBloc(),
  child: BlocBuilder<CounterBloc, int>(
    builder: (_, count) => Text('$count'),
  ),
);
\`\`\`

GetX is ~40% less code and reads simpler. But notice \`Get.find<CounterController>()\` — that is a global lookup with no compile-time guarantee the controller is registered. In a 50-module app, that is exactly the kind of hidden dependency that makes onboarding and testing painful. BLoC's \`BlocProvider\` makes the dependency explicit and scoped.`,whenToChoose:{first:"**Choose BLoC when:** more than one engineer will touch the code, the app will live longer than a few months, you need testable and auditable state, or you want to compose best-in-class libraries for routing/DI/networking instead of an all-in-one. This is the production choice.",second:"**Choose GetX when:** you are solo, prototyping fast, the app is throwaway or short-lived, and you value immediate velocity over long-term maintainability. Understand you are buying speed with technical debt — budget a rewrite if the app survives."},relatedArticles:["managing-large-flutter-codebases"],relatedGlossary:["bloc","getx","dependency-injection"],faqs:[{q:"Why do people hate on GetX so much?",a:"Because it tightly couples an entire app to one package with non-standard, global-state patterns that do not scale to teams. It is not that the API is bad — it is fast — but the architectural cost shows up months later in testability and refactor friction. For solo prototypes it is genuinely productive; for team production code it is a liability."},{q:"Is GetX faster than BLoC at runtime?",a:"Marginally, for trivial benchmarks, because `.obs` rebuilds are lightweight. But state management overhead is almost never the bottleneck in a real app — widget rebuild cost and I/O dominate. Do not choose based on micro-benchmarks."},{q:"Can I migrate from GetX to BLoC?",a:"Yes, but it is a real refactor because GetX touches routing and DI too, not just state. Plan it feature-by-feature and introduce go_router + get_it alongside the BLoC migration. Do not attempt a big-bang rewrite."},{q:"Is GetX safe to use for just routing or DI without the state management?",a:"Technically yes — you can use `Get.to` for navigation without adopting `.obs` — but I would still avoid it. Once GetX is in your dependency graph, the global `Get` singleton is everywhere, and new engineers will reach for `Get.find` and `.obs` because they are the path of least resistance. If you only need routing, use `go_router`; if you only need DI, use `get_it` or Riverpod. Compose single-purpose libraries instead of importing a framework that wants to own every layer."}]},{slug:"riverpod-vs-bloc-state",title:"Riverpod vs BLoC for Performance: A Production Benchmark",seoTitle:"Riverpod vs BLoC: Performance & Rebuilds Compared",description:"Riverpod vs BLoC performance: rebuild granularity, stream overhead, memory, and large-list scrolling — measured from a 5M-user Flutter app.",subjects:["Riverpod","BLoC"],category:"State Management",date:"2026-08-10",dateModified:"2026-08-10",quickAnswer:"**For 99% of apps, performance is not the deciding factor between Riverpod and BLoC — both rebuild only what watches changed state.** The measurable differences are at the margins: BLoC's stream-based event pipeline has slightly more overhead per emission, while Riverpod's fine-grained `select` gives more surgical rebuild control. At 5M users with feed scrolling, infinite lists, and real-time sync, neither has been a performance bottleneck for us.\n\nChoose on **architecture and team fit**, not micro-benchmarks. If you are hitting rebuild problems, the fix is widget granularity and `select`/`buildWhen`, not swapping your state library.",detailedComparison:"## Rebuild granularity\n\nBoth libraries rebuild only widgets that observe changed state — but the controls differ.\n\nRiverpod's `select` lets a widget watch a **slice** of a provider's state and rebuild only when that slice changes:\n\n```dart\nfinal userName = ref.watch(userProvider.select((u) => u.name));\n```\n\nBLoC's `buildWhen` on `BlocBuilder` does the same:\n\n```dart\nBlocBuilder<UserBloc, UserState>(\n  buildWhen: (prev, curr) => prev.name != curr.name,\n  builder: (_, s) => Text(s.name),\n);\n```\n\nFunctionally equivalent. Riverpod's `select` is slightly more ergonomic and composable across multiple providers; BLoC's `buildWhen` is per-builder. Neither has a meaningful perf edge here.\n\n## Stream overhead (BLoC)\n\nBLoC emits states through an `EventSink` → transformer → `Stream<State>` pipeline. Each event flows through `on<Event>`, an emitter, and the stream before listeners rebuild. For high-frequency events (scrolling, drag updates, sensor streams at 60Hz) that pipeline adds micro-overhead per event.\n\nIn practice, I have only seen this matter for **sensor/joystick input at 60+ Hz**, where collapsing events with `bloc_concurrency` (`droppable` or `restartable`) or moving to a raw `ValueNotifier` for that one stream is the fix. For normal UI, it is invisible.\n\n## Provider overhead (Riverpod)\n\nRiverpod providers are lightweight objects with a dependency graph. Reading a provider is cheap; the cost is in **how many widgets rebuild**, not in the provider mechanism. `autoDispose` providers clean up when no longer watched, keeping memory bounded — useful for per-item providers in long lists.\n\n## Large-list scrolling\n\nThis is where people wrongly blame state management. A janky infinite list is almost always a **widget rebuild cost** problem, not a BLoC/Riverpod problem. The fixes are identical regardless of library: `ListView.builder` (not `Column`), `const` constructors, `RepaintBoundary` around heavy items, `select`/`buildWhen` to avoid rebuilding the whole row when one field changes, and keys on items.\n\nAt iStoria we render feed lists of 50+ module cards with BLoC and the jank disappeared once we added `buildWhen` and `RepaintBoundary` — not after considering a library swap.\n\n## Memory footprint\n\nBLoC blocs stay alive as long as their `BlocProvider` is in the tree; you manage lifecycle manually. Riverpod's `autoDispose` modifier frees providers automatically when no widget watches them, which is friendlier for transient state. For long-lived app state, both are comparable in memory.\n\n## Cold start and initialization\n\nThere is a subtle difference at app launch. BLoC initializes eagerly when `BlocProvider(create:)` runs in the widget tree, so you control exactly when each bloc spins up by where you place the provider. Riverpod providers are lazy by default — they are created on first `ref.watch`/`ref.read` — which means less wasted initialization for features the user has not visited yet. For a 50-module app where not every screen is reached in a session, lazy initialization is a real cold-start win. You can make Riverpod eager with `keepAlive`, and you can make BLoC lazy with `lazy: true` on `BlocProvider`, so neither is locked in — but the defaults favor Riverpod for startup cost.",comparisonTable:{headers:["Metric","Riverpod","BLoC"],rows:[["Rebuild granularity","select() — slice-level","buildWhen — per-builder"],["Per-emission overhead","Very low","Low (stream pipeline)"],["High-frequency events (60Hz)","Handle natively","Use bloc_concurrency"],["Auto-cleanup","autoDispose modifier","Manual (BlocProvider lifecycle)"],["Large-list friendliness","Good with select","Good with buildWhen"],["Memory for transient state","Excellent (autoDispose)","Good (manual scope)"],["DevTools rebuild tracking","Provider list","BlocObserver transitions"],["Winner for raw micro-perf","Marginal","Marginal"],["Real bottleneck?","Widget rebuild cost","Widget rebuild cost"]]},codeComparison:`### Rebuild a single field — Riverpod

\`\`\`dart
class UserNotifier extends Notifier<User> {
  @override
  User build() => User(name: '', avatar: '', bio: '');
  void updateBio(String b) => state = state.copyWith(bio: b);
}

// only rebuilds when \`name\` changes — avatar/bio updates skip this widget
final name = ref.watch(userProvider.select((u) => u.name));
\`\`\`

### Rebuild a single field — BLoC

\`\`\`dart
BlocBuilder<UserBloc, UserState>(
  buildWhen: (p, c) => p.name != c.name,
  builder: (_, s) => Text(s.name),
);
\`\`\`

Both achieve the same surgical rebuild. The performance lesson: **neither library is your bottleneck**. Profile widget rebuilds with the Flutter Performance overlay and DevTools before touching your state architecture.`,whenToChoose:{first:"**Choose Riverpod for perf when:** you have many transient providers and want automatic cleanup (`autoDispose`), or you prefer `select` ergonomics for fine-grained rebuilds. Also the default if you simply prefer Riverpod's API.",second:"**Choose BLoC for perf when:** you need event transformers (`bloc_concurrency`) to debounce/dedupe high-frequency events, or your team already standardized on BLoC. Performance alone almost never justifies a swap either direction."},relatedArticles:["managing-large-flutter-codebases"],relatedGlossary:["riverpod","bloc","reactive-programming"],faqs:[{q:"Is BLoC slower because of streams?",a:"Marginally per emission, but not measurably for normal UI. The stream pipeline adds microseconds. It only matters at high-frequency event rates (60Hz+ input), where bloc_concurrency transformers collapse events anyway."},{q:"Which uses less memory?",a:"Roughly comparable for long-lived state. Riverpod's autoDispose gives better memory behavior for transient/per-item providers because they free automatically. BLoC requires manual lifecycle management via BlocProvider scoping."},{q:"My list scrolls janky — should I switch state libraries?",a:"No. Switch to ListView.builder, add const constructors, wrap heavy items in RepaintBoundary, and use select/buildWhen to avoid rebuilding whole rows. Jank in lists is a widget-rebuild problem, not a state-management problem."},{q:"Does Riverpod's autoDispose have a performance cost?",a:"autoDispose providers tear down their state when no listener watches them, and rebuilding them on re-subscription has a small cost proportional to what the provider does. For trivial providers (a computed value, a filter flag) that cost is negligible. For expensive providers (a stream subscription, a heavy computation) it can matter — in that case keep the provider alive longer (a `keepAlive` link or a parent that stays subscribed) rather than disabling autoDispose globally. The default is good; tune the exceptions."},{q:"How do I profile which widgets rebuild?",a:"Use the Flutter DevTools Performance overlay and the 'Track widget rebuilds' option in the inspector. Both Riverpod and BLoC show up as rebuild sources there. If a widget rebuilds more than expected, narrow the watch with `select` or `buildWhen` before considering structural changes. The profiler tells you *what* rebuilds; your job is to make it rebuild *less*."}]},{slug:"drift-vs-hive",title:"Drift vs Hive: Local Database for Flutter Offline-First Apps",seoTitle:"Drift vs Hive: Flutter Local Storage Compared",description:"Drift vs Hive: relational SQL with reactive queries vs key-value NoSQL — which to pick for offline-first Flutter, from a PowerSync+Drift production codebase.",subjects:["Drift","Hive"],category:"Data & Storage",date:"2026-08-10",dateModified:"2026-08-10",quickAnswer:"**Use Drift for structured, relational data with complex queries. Use Hive for simple key-value or document storage.** Drift gives you SQLite with type-safe Dart DSL, reactive `watch()` queries, and migrations — the right tool when your data has relationships, joins, and a schema that evolves. Hive is a fast NoSQL box (now backed by `isar` in CE) for blobs, cached responses, and settings.\n\nAt iStoria we run **Drift as the local source of truth** under PowerSync for a 5M-user offline-first app. Hive is not in the stack — once you need queries, joins, and reactive UI updates, a relational database wins decisively.",detailedComparison:`## Data model and query power

Drift is a **relational ORM over SQLite**. You define tables as Dart classes, write queries in a type-safe DSL (or raw SQL), and get compile-time-checked results. Joins, aggregations, filtering, indexing — all first-class.

Hive is a **key-value NoSQL store**. You write Dart objects to boxes keyed by a string or int. There is no query language; you load a box and filter in Dart. That is fast for "get by key" and hopeless for "give me all users created last week who have a pending order."

\`\`\`dart
// Drift — a real query
final recent = await (select(users)
  ..join([
    innerJoin(orders, orders.userId.equalsExp(users.id)),
  ])
  ..where(users.createdAt.isBiggerThanValue(weekAgo))
  ..orderBy([OrderingTerm.desc(users.createdAt)]))
  .map((row) => row.readTable(users)).get();
\`\`\`

There is no Hive equivalent — you would load the whole users box and filter in memory.

## Reactivity

Drift's killer feature is **reactive queries** via \`watch()\`:

\`\`\`dart
Stream<List<User>> watchUsers() => select(users).watch();
\`\`\`

The stream emits a new result whenever the underlying rows change. Wire that to a BLoC/Riverpod provider and the UI updates automatically when data changes — no manual invalidation. For offline-first apps, this is how you keep every screen in sync as PowerSync writes flow in.

Hive has \`box.listenable()\` for \`ValueListenableBuilder\`, but it notifies on the whole box, not a query result. Fine for a settings screen, inadequate for a relational UI.

## Type safety and migrations

Drift generates typed row classes and a typed database companion. Schema changes go through migration steps (\`onUpgrade\`) with versioned schemas. This is real database engineering — non-trivial, but exactly what a production app needs. Hive boxes are schemaless; adding a field means handling null defaults yourself, and there is no migration story beyond versioned box names.

## Performance characteristics

Hive is extremely fast for point reads/writes (it memory-maps files). Drift/SQLite is fast for queries that can use indexes and is the only option for complex joins. For bulk inserts, Drift's batch APIs are efficient; for single-object writes, Hive wins on raw speed. In a real app the bottleneck is network sync, not local storage speed.`,comparisonTable:{headers:["Feature","Drift","Hive"],rows:[["Model","Relational (SQLite ORM)","Key-value NoSQL"],["Query language","Type-safe DSL + raw SQL","None (filter in Dart)"],["Joins / aggregations","First-class","Not supported"],["Reactive queries","watch() per query","box.listenable() (whole box)"],["Migrations","Versioned, explicit steps","Schemaless (manual)"],["Type safety","Generated row classes","Manual adapters"],["Best data shape","Relational, structured","Flat, key-value, blobs"],["Sync integration","PowerSync, Supabase","Manual"],["Learning curve","Moderate (SQL + DSL)","Low"],["Best for","Offline-first structured apps","Cache, settings, simple docs"]]},codeComparison:`### Insert + reactive query — Drift

\`\`\`dart
// table
class Users extends Table {
  IntColumn get id => integer().autoIncrement()();
  TextColumn get name => text()();
}

// reactive stream
Stream<List<User>> watchUsers() => select(users).watch();

// insert
await into(users).insert(UsersCompanion.insert(name: 'Aisha'));
// UI watching watchUsers() rebuilds automatically
\`\`\`

### Insert + listen — Hive

\`\`\`dart
// open box
final box = await Hive.openBox<User>('users');
// write
await box.put('u1', User(name: 'Aisha'));
// listen — fires on ANY box change, you refilter in Dart
box.listenable().addListener(() {
  final all = box.values.where((u) => u.name.isNotEmpty);
});
\`\`\`

Drift's \`watch()\` emits the precise query result on relevant writes. Hive's listenable fires on every box mutation and forces you to refilter. For a relational UI, Drift is categorically better.`,whenToChoose:{first:"**Choose Drift when:** your data has relationships (users → orders → items), you need joins/filtering/aggregation, you want reactive UI updates from local writes, your schema evolves and needs migrations, or you integrate with PowerSync/Supabase for sync. This is the offline-first production choice.",second:"**Choose Hive when:** you need a fast key-value cache (HTTP responses, image metadata), app settings, a shopping cart blob, or any flat store with no relational queries. Simple, fast, and the right tool for that job — but do not force it to be a database."},relatedArticles:["managing-large-flutter-codebases"],relatedGlossary:["drift","powersync","repository-pattern"],faqs:[{q:"Can I use Hive as my main database?",a:"You can, but you will regret it once you need queries. Hive is a key-value store; anything beyond point lookups means loading boxes into memory and filtering in Dart. For a real app with relational data, use Drift or Isar."},{q:"Is Drift hard to learn?",a:"Moderate. You need basic SQL and the Drift DSL. The reactive watch() and generated classes pay off fast. Migrations take care but are well-documented. For a production app it is a necessary investment."},{q:"Does Hive work with PowerSync?",a:"No. PowerSync syncs SQLite tables. If you want local-first sync, the local DB is Drift (or raw sqflite) by necessity. Hive cannot participate in that pipeline."},{q:"What about Isar — is that a better middle ground?",a:"Isar is an excellent NoSQL database that supports indexing and querying (unlike Hive) and is very fast. It sits between Hive and Drift: more powerful than key-value, but still not relational SQL. If your data is document-shaped and you need indexed lookups without joins, Isar is viable. But once you need joins, reactive queries, or PowerSync sync, Drift over SQLite is still the right answer. For our offline-first production stack, the relational model and sync integration make Drift non-negotiable."}]},{slug:"drift-vs-sqflite",title:"Drift vs sqflite: Should You Write Raw SQL in Flutter?",seoTitle:"Drift vs sqflite: Flutter SQLite Compared",description:"Drift vs sqflite: type safety, reactive queries, migrations, and boilerplate — why production Flutter teams layer Drift over raw sqflite.",subjects:["Drift","sqflite"],category:"Data & Storage",date:"2026-08-10",dateModified:"2026-08-10",quickAnswer:"**Use Drift. It sits on top of sqflite (or native SQLite) and adds type safety, reactive `watch()` queries, generated row classes, and managed migrations — for free.** Raw sqflite means hand-writing SQL strings, manually mapping rows to objects, and no reactivity. There is almost no scenario where a production Flutter app should use raw sqflite directly.\n\nThe only reason to touch sqflite directly is if you are evaluating a raw query in a reproducible script. For an app, Drift is the abstraction layer sqflite always needed.",detailedComparison:`## What sqflite gives you

The \`sqflite\` package is a thin binding over the native SQLite plugin. You open a database, execute raw SQL strings, and read back \`List<Map<String,dynamic>>\`:

\`\`\`dart
final db = await openDatabase('app.db');
await db.execute('CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT)');
final rows = await db.rawQuery('SELECT * FROM users WHERE name = ?', ['Aisha']);
\`\`\`

Functional, but every query is a stringly-typed contract. Rename a column and the compiler will not warn you — you discover it at runtime.

## What Drift adds

Drift is a layer **over** sqflite (or the newer \`sqlite3\` native backend). You define tables as Dart classes, and code generation produces typed row classes, companions, and a database class:

\`\`\`dart
class Users extends Table {
  IntColumn get id => integer().autoIncrement()();
  TextColumn get name => text()();
}

final user = await (select(users)..where((u) => u.name.equals('Aisha'))).getSingle();
\`\`\`

Rename \`name\` and the build fails. That is the difference.

## Reactive queries

This is the decisive feature. \`select(users).watch()\` returns a \`Stream\` that re-emits whenever the table changes. sqflite has no equivalent — you poll, or build your own invalidation layer. For reactive Flutter UI that updates when local data changes, Drift removes an entire class of plumbing.

## Migrations

Drift migrations are versioned and explicit:

\`\`\`dart
MigrationStrategy get migration => MigrationStrategy(
  onCreate: (m) => m.createAll(),
  onUpgrade: (m, from, to) async {
    if (from < 2) await m.addColumn(users, users.email);
  },
);
\`\`\`

sqflite forces you to hand-write \`onUpgrade\` with raw \`ALTER TABLE\` strings and version constants. Doable, error-prone, and where most production data loss happens.

## When raw sqflite still makes sense

Rarely. If you are building a throwaway script, a tiny app with one table and no queries, or you have an existing SQL-heavy codebase you cannot refactor — maybe. Even then, wrapping new tables in Drift incrementally is usually worth it.

## Testing and DI

Drift makes your data layer testable in ways raw sqflite cannot match. You can run the entire database in memory (\`NativeDatabase.memory()\`) for tests — no file cleanup, no state leakage between test cases — and inject it through a repository interface. Every query becomes a pure, deterministic function of the data you seed. With raw sqflite, you are managing temp database files and teardown logic in every test file. For a team that unit-tests repositories and use cases against a real SQL engine, this in-memory mode is a quiet but significant advantage.`,comparisonTable:{headers:["Feature","Drift","sqflite"],rows:[["Layer","ORM over sqflite/sqlite3","Raw SQLite binding"],["Query style","Type-safe DSL + raw SQL fallback","Raw SQL strings"],["Compile-time checks","Yes (generated)","No (runtime errors)"],["Row mapping","Generated classes","Manual Map<String,dynamic>"],["Reactive queries","watch() Stream","None (poll/manual)"],["Migrations","Versioned, typed strategy","Hand-written onUpgrade"],["Boilerplate","Low (generated)","High (manual mapping)"],["Raw SQL escape hatch","Yes (customSelect)","Native"],["Best for","Any production app","Scripts, legacy, tiny apps"]]},codeComparison:`### Reactive user query — sqflite

\`\`\`dart
final db = await openDatabase('app.db');

Future<List<Map<String,dynamic>>> getUsers() {
  return db.rawQuery('SELECT * FROM users');
}
// no reactivity — UI must manually refetch after writes
\`\`\`

### Reactive user query — Drift

\`\`\`dart
class Users extends Table {
  IntColumn get id => integer().autoIncrement()();
  TextColumn get name => text()();
}

// reactive — UI rebuilds automatically on change
Stream<List<User>> watchUsers() => select(users).watch();
\`\`\`

The sqflite version gives you a \`Future\` of raw maps. The Drift version gives you a typed \`Stream\` that updates the UI for free. That is the entire argument.`,whenToChoose:{first:"**Choose Drift when:** you are building a real app with a database. The type safety, reactive queries, and managed migrations save hours of bugs. This is the default; reach for it unless you have a specific reason not to.",second:"**Choose sqflite when:** you are writing a one-off script, maintaining a legacy codebase that already uses it, or have a single trivial table where code generation feels disproportionate. Even then, consider Drift for any new table."},relatedArticles:["managing-large-flutter-codebases"],relatedGlossary:["drift","repository-pattern"],faqs:[{q:"Is Drift slower than sqflite?",a:"Negligibly. Drift adds a thin mapping layer over the same SQLite engine. For hot-path queries you can always drop to raw SQL via customSelect. The productivity and safety gains vastly outweigh the microseconds of overhead."},{q:"Does Drift require code generation?",a:"Yes — it uses build_runner to generate row classes and the database. This is a one-time `dart run build_runner build` in your workflow (we run it in CI). The generated code is what gives you compile-time safety."},{q:"Can I use raw SQL in Drift when I need to?",a:"Yes. Drift exposes customSelect/customStatement for arbitrary SQL, and you can map results to generated classes. You get the escape hatch without losing the typed API for the 95% case."},{q:"Can I migrate an existing sqflite app to Drift incrementally?",a:"Yes, but it is a real migration, not a drop-in. You define your existing tables as Drift table classes, set the schema version to match your current database, and write a no-op migration strategy (`onUpgrade` that does nothing if the version matches) so Drift opens the existing `.db` file without recreating it. Then you replace raw queries one repository at a time. The risk is schema drift between your Drift table definitions and what is actually on disk — version your migration carefully and test against a real production database copy before shipping."},{q:"Does Drift work well with PowerSync?",a:"Yes — this is our exact production stack. PowerSync syncs into a local SQLite database, and Drift wraps that same database with typed queries and reactive `watch()` streams. You define Drift tables that mirror the PowerSync sync schema, and the UI reads through Drift while PowerSync writes flow in underneath. The one caveat: PowerSync writes bypass Drift's streaming updates, so use Drift's `watch()` on the underlying tables to get reactive UI updates when sync data lands."}]},{slug:"powersync-vs-supabase",title:"PowerSync vs Supabase: Offline-First Sync for Flutter",seoTitle:"PowerSync vs Supabase: Flutter Sync Compared",description:"PowerSync vs Supabase: local-first SQLite sync vs a full Postgres backend — how they fit together in a 5M-user offline-first Flutter app.",subjects:["PowerSync","Supabase"],category:"Data & Sync",date:"2026-08-10",dateModified:"2026-08-10",quickAnswer:`**They are not competitors — they are layers. Supabase is your Postgres backend (auth, database, storage, realtime). PowerSync is a sync engine that mirrors subsets of that Postgres database into on-device SQLite so your Flutter app works fully offline and reconciles conflicts when connectivity returns.**

At iStoria we use **both together**: Supabase as the source of truth in the cloud, PowerSync to keep each device's local Drift/SQLite database in sync. If you need true offline-first with conflict resolution, this is the stack. Supabase alone gives you realtime but not robust offline writes.`,detailedComparison:`## What each one is

**Supabase** is an open-source Firebase alternative: managed Postgres, Auth, Storage, Edge Functions, and Realtime (websockets). It is your server-side backend. Your canonical data lives in Postgres.

**PowerSync** is a sync service that sits between a Postgres database (Supabase or your own) and on-device SQLite. It defines **sync rules** (which rows each user/device should receive), watches the Postgres WAL, and pushes changes to devices; device writes are queued locally and pushed back up with conflict resolution.

They solve different problems and compose cleanly.

## The offline-first gap Supabase alone does not fill

Supabase Realtime delivers changes to connected clients over websockets. That is **online realtime**, not offline-first. If the device loses connectivity, queued writes are your responsibility, and there is no built-in conflict resolution for concurrent edits. You can build it (a writes queue, logical clocks, merge logic) but you are engineering the sync layer yourself.

PowerSync exists precisely to provide that layer: deterministic local-first sync with a conflict-resolution policy and a sync-rules DSL for partitioning data per user.

## The Flutter integration

PowerSync ships a Flutter client (\`powersync\`) that syncs into a local SQLite database — which Drift can wrap. So your architecture becomes:

\`\`\`
Supabase Postgres  ←→  PowerSync sync service  ←→  on-device SQLite (Drift)  ←→  BLoC/UI
\`\`\`

Reads and writes go to local SQLite (instant, offline-capable). PowerSync reconciles in the background. The UI never blocks on network.

## When you need PowerSync

You need PowerSync (or equivalent) when:
- The app must function fully offline (create, edit, read) and reconcile on reconnect.
- Each user should sync only their partition of a large dataset (sync rules).
- You want deterministic conflict resolution without building it yourself.

You do **not** need PowerSync when the app is online-only or can tolerate simple last-write-wins with your own queue.`,comparisonTable:{headers:["Feature","PowerSync","Supabase"],rows:[["Role","Sync engine (Postgres ↔ SQLite)","Backend (Postgres, Auth, Storage)"],["Offline writes","First-class, queued + synced","Manual (you build the queue)"],["Conflict resolution","Built-in policies","DIY"],["Sync rules / partitioning","Yes (YAML DSL)","No (you filter in queries)"],["Realtime","Via local SQLite watch()","Websocket Realtime (online)"],["Source of truth","Postgres (Supabase or own)","Postgres"],["Conflict cost","Included","Your engineering time"],["Best with","Drift/sqflite on device","Own client (postgrest, realtime)"],["Together?","Yes — recommended","Yes — recommended"]]},codeComparison:`### PowerSync + Supabase + Drift — the offline-first stack

\`\`\`dart
// 1. Supabase backend
final supabase = Supabase.instance.client;

// 2. PowerSync client syncing into local SQLite
final powerSync = PowerSyncDatabase(
  schema: AppSchema(),
  path: 'app.db',
);
await powerSync.initialize();

// 3. connect sync with auth from Supabase
await supabase.auth.signInWithPassword(email, password);
powerSync.connect(async () => await fetchSupabaseToken());

// 4. read/write local — offline-capable, instant
final rows = await powerSync.execute('SELECT * FROM tasks WHERE owner = ?', [userId]);
await powerSync.execute('INSERT INTO tasks (id, title) VALUES (?, ?)', [id, title]);
// PowerSync pushes the insert upstream when online
\`\`\`

### Supabase alone — online realtime, no offline write queue

\`\`\`dart
final supabase = Supabase.instance.client;

// online realtime — breaks when offline
final sub = supabase.from('tasks').stream(primaryKeyKey: ['id']).listen((rows) {
  // update UI
});

// write — fails or is lost if offline unless you queue it yourself
await supabase.from('tasks').insert({'title': title});
\`\`\`

The PowerSync version gives you offline writes, sync rules, and conflict resolution out of the box. The Supabase-only version leaves offline behavior entirely to you.`,whenToChoose:{first:"**Choose PowerSync when:** the app must work offline-first with writes that reconcile on reconnect, you need per-user data partitioning via sync rules, or you want conflict resolution without building it. Pair it with Supabase (or any Postgres) as the backend.",second:"**Choose Supabase (alone) when:** the app is primarily online, realtime updates are sufficient, offline behavior is limited to read-caching, or you are willing to build your own write queue and conflict logic. Most apps start here and add PowerSync when offline writes become a real requirement."},relatedArticles:["managing-large-flutter-codebases"],relatedGlossary:["powersync","drift","offline-first","local-first"],faqs:[{q:"Do I need Supabase if I use PowerSync?",a:"You need a Postgres database as the source of truth. Supabase is the most common choice because PowerSync has first-class Supabase integration, but you can use any Postgres. Supabase also gives you Auth, Storage, and Edge Functions that pair naturally."},{q:"Can I use Supabase Realtime instead of PowerSync for offline?",a:"No — Supabase Realtime is an online websocket stream. It does not queue offline writes or resolve conflicts. If you need offline-first writes, you need a sync layer like PowerSync (or you build one yourself)."},{q:"How does PowerSync handle conflicts?",a:"PowerSync applies a deterministic conflict resolution policy on the server side when concurrent writes reconcile. You define sync rules in YAML to control which rows each client receives. For app-level merge semantics (e.g. field-level merge), you handle that in your write logic or Postgres triggers."},{q:"What is the latency for a local write to reach the server with PowerSync?",a:"On a healthy connection, a local write typically syncs upstream within seconds — PowerSync queues the change and pushes it on the next sync cycle. The key point is that the UI never waits: the write is committed locally and is immediately visible to the user. If the device is offline, the change sits in the local upload queue and reconciles automatically when connectivity returns. You design the UX around 'write is instant, sync is eventual' — which is the entire premise of local-first."}]},{slug:"flutter-vs-react-native",title:"Flutter vs React Native: What a 5M-User App Team Chose",seoTitle:"Flutter vs React Native: Cross-Platform Compared",description:"Flutter vs React Native: rendering, performance, talent, ecosystem, and long-term maintenance — from a senior mobile engineer leading a 5M-user Flutter app.",subjects:["Flutter","React Native"],category:"Cross-Platform",date:"2026-08-10",dateModified:"2026-08-10",quickAnswer:`**For a new cross-platform app in 2026, I would choose Flutter.** It compiles to native ARM code with its own rendering engine (Skia/Impeller), delivers consistent 60-120fps UI across platforms without bridging native widgets, and has a single language (Dart) with a strong type system and tooling. React Native (with the New Architecture / Fabric / TurboModules) has closed the gap, but the JavaScript bridge tax, the JSI complexity, and the fragmentation across native modules still make Flutter the more predictable bet for a team that wants one codebase to just work.

I lead a 5M-user, 50+ module Flutter app and the consistency and velocity are why we would not switch. If your team is already deeply invested in React/TypeScript, RN is viable — but greenfield, Flutter wins.`,detailedComparison:`## Rendering model

Flutter paints every pixel itself using its own engine (Skia, now Impeller for iOS/Android). There are no platform views in the default path — the UI is identical pixel-for-pixel across iOS and Android. This means no "this component looks different on Android" issues and full control over layout.

React Native renders to **actual native widgets** (UIView / androidx views). That gives a more "native feel" per platform but introduces inconsistency: a component behaves differently on iOS vs Android, and updates to the OS can change rendering. The New Architecture (Fabric) improves this but does not eliminate the fundamental difference.

## Performance

Flutter's compiled-to-ARM Dart and own compositor give predictable, smooth performance — especially scrolling and animations — without JS-native marshalling. Impeller on iOS has eliminated most jank reports.

React Native with the New Architecture and Hermes is much faster than the old bridge model, but the JS thread still exists and communication with native modules still has overhead. For UI-heavy apps with lots of lists/animations, Flutter has a measurable edge; for apps that are mostly screens of native components, the difference shrinks.

## Language and DX

Dart is a strongly-typed, null-safe, JIT-and-AOT language purpose-built for UI. Sound null safety, excellent tooling (Dart analyzer, DevTools), and a coherent single language across the app. The hot reload is best-in-class.

JavaScript/TypeScript has a larger talent pool and richer ecosystem, but RN development means dealing with native build tooling (Xcode/Gradle), bridging native modules in two languages, and a more fragmented package ecosystem (many abandoned native modules). TypeScript's type safety is strong, but the JS runtime and native interop add complexity.

## Ecosystem and talent

React Native has a larger community and more third-party packages (npm), and finding JS/TS developers is easier. Flutter's pub.dev ecosystem is mature for UI and mobile-specific needs and growing fast, and Dart is easy to ramp up for engineers coming from Java/Kotlin/Swift.

For a team that already knows React, RN is the faster onboarding path. For a team starting fresh, Dart+Flutter is a cleaner, more cohesive stack.

## Maintenance and long-term cost

Flutter's single-rendering-engine model means fewer platform-specific bugs. RN's reliance on native modules means you inherit maintenance of those modules — when a package stops supporting a new RN version, you fork or rewrite. Over a multi-year app lifecycle, Flutter's lower surface area for platform-specific breakage is a real cost advantage.`,comparisonTable:{headers:["Feature","Flutter","React Native"],rows:[["Language","Dart (sound null-safe)","JS / TypeScript"],["Rendering","Own engine (Impeller/Skia)","Native widgets"],["UI consistency","Pixel-identical cross-platform","Per-platform native look"],["Performance","Excellent (compiled ARM)","Good (New Arch + Hermes)"],["JS bridge","None","JSI (faster than old bridge)"],["Hot reload","Best-in-class","Fast (Fast Refresh)"],["Talent pool","Growing","Large (JS/TS devs)"],["Native modules","Platform channels / FFI","Native modules (2 languages)"],["Ecosystem maturity","Strong (pub.dev)","Larger (npm), more churn"],["Best for","UI-heavy, consistent cross-platform","Teams invested in React/TS"]]},codeComparison:`### A stateful counter widget — Flutter

\`\`\`dart
class CounterPage extends StatefulWidget {
  @override
  State<CounterPage> createState() => _CounterPageState();
}

class _CounterPageState extends State<CounterPage> {
  int _count = 0;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(child: Text('$_count', style: TextStyle(fontSize: 48))),
      floatingActionButton: FloatingActionButton(
        onPressed: () => setState(() => _count++),
        child: Icon(Icons.add),
      ),
    );
  }
}
\`\`\`

### A stateful counter component — React Native

\`\`\`tsx
import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export function CounterPage() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.center}>
      <Text style={styles.count}>{count}</Text>
      <TouchableOpacity onPress={() => setCount(c => c + 1)}>
        <Text>+1</Text>
      </TouchableOpacity>
    </View>
  );
}
\`\`\`

Both are concise. Flutter's widget tree is more explicit and typed; RN's JSX is familiar to React devs. The difference shows at scale: Flutter's single-language, single-engine model has fewer moving parts to break across platforms.`,whenToChoose:{first:"**Choose Flutter when:** you want one codebase with pixel-consistent UI, predictable performance without a JS bridge, a single typed language, lower long-term platform-specific maintenance, or you are greenfield. This is my production choice and the bet I would make again.",second:"**Choose React Native when:** your team is already strong in React/TypeScript, you need to share code with an existing React web app (React Native Web), you require deep integration with platform-native UI feel, or hiring JS developers is a priority. Viable, especially with the New Architecture."},relatedArticles:["managing-large-flutter-codebases","flutter-build-flavors-guide"],relatedGlossary:["modular-architecture","reactive-programming"],faqs:[{q:"Is Flutter going to be killed by Google?",a:"No credible sign of that. Flutter is actively developed, has a large installed base (Google's own apps, BMW, Alibaba, etc.), and Google's investment in Dart and Impeller is ongoing. This concern is recycled FUD, not a real risk."},{q:"Does React Native feel more native than Flutter?",a:"RN uses actual native widgets so it inherits platform look-and-feel by default. Flutter renders its own UI, which is identical across platforms and can be styled to match each platform's guidelines (Material/Cupertino). 'Feel' is subjective; Flutter's consistency and performance are objective."},{q:"Which is faster to ship?",a:"Depends on your team. If you know React, RN onboards faster. Greenfield with no prior investment, Flutter's hot reload, single language, and consistent rendering typically ship faster because you debug fewer platform-specific issues."}]},{slug:"flutter-vs-kotlin-multiplatform",title:"Flutter vs Kotlin Multiplatform: 2026 Cross-Platform Choice",seoTitle:"Flutter vs Kotlin Multiplatform: Compared",description:"Flutter vs Kotlin Multiplatform: shared UI vs shared logic, native interop, and when KMP's business-logic-only model beats Flutter's full UI sharing.",subjects:["Flutter","Kotlin Multiplatform"],category:"Cross-Platform",date:"2026-08-10",dateModified:"2026-08-10",quickAnswer:`**Choose Flutter if you want to share the entire UI across platforms. Choose Kotlin Multiplatform (KMP) if you want to share business logic, data, and networking while keeping fully native UIs per platform.** KMP (especially with Compose Multiplatform sharing UI to iOS/Android/desktop) is closing the gap, but the mature, battle-tested choice for "one UI, all platforms" remains Flutter.

For a consumer app where cross-platform UI consistency and velocity matter most, I would still pick Flutter — as we did at iStoria. For a team with strong native iOS and Android expertise who want to deduplicate networking, persistence, and domain logic but keep hand-tuned native UIs, KMP is excellent.`,detailedComparison:`## What each shares

Flutter shares **everything**: UI, state, logic, navigation — one Dart codebase renders to all platforms via Flutter's engine. You get one UI.

KMP shares **logic**: viewmodels, repositories, networking, database (SQLDelight), domain models — written once in Kotlin, compiled to JVM and native iOS frameworks. The **UI is written separately** per platform (Compose on Android, SwiftUI on iOS), unless you use Compose Multiplatform which brings Compose to iOS (still maturing).

This is the fundamental architectural difference and it drives every other trade-off.

## UI consistency vs native feel

Flutter: identical UI across platforms by design. One design system, one set of widgets, one set of bugs. Great for design-driven consumer apps.

KMP: native UI per platform. iOS users get SwiftUI, Android users get Compose. Each platform feels 100% native, but you maintain two UI codebases. Compose Multiplatform reduces this but is newer and less mature than Flutter on iOS.

## Performance and footprint

Flutter ships its own engine (~4-5MB app size increase) and renders everything itself. Performance is excellent and consistent.

KMP compiles Kotlin to native iOS binaries (via Kotlin/Native). There is no runtime engine — logic runs natively. The UI uses platform-native rendering, so there is no rendering overhead. App size impact is smaller than Flutter's. For pure logic sharing, KMP has a performance and footprint edge; for UI sharing, Flutter is more mature.

## Ecosystem and interop

KMP's superpower is **seamless native interop**: Kotlin code calls Swift/Objective-C and Java/Kotlin APIs directly, and vice versa. This makes it ideal for **incremental adoption** in an existing native app — you can share one module (say, networking) and keep the rest native. Flutter's platform channels can call native code but the interop is more ceremonial and less tight.

## Talent and team structure

Flutter needs Dart engineers (or mobile engineers willing to learn Dart — the ramp is short). KMP needs Kotlin engineers comfortable with both Android (Compose) and iOS (SwiftUI), plus Kotlin/Native interop. A team of senior native iOS + Android engineers who already write Kotlin is the ideal KMP adopter; a team that wants maximum sharing with minimum platform-specific expertise should pick Flutter.`,comparisonTable:{headers:["Feature","Flutter","Kotlin Multiplatform"],rows:[["Shares","UI + logic (everything)","Logic (UI native or Compose MP)"],["Language","Dart","Kotlin"],["UI on iOS","Flutter engine","SwiftUI (or Compose iOS)"],["UI on Android","Flutter engine","Jetpack Compose"],["Native interop","Platform channels / FFI","Direct (Kotlin ↔ Swift/ObjC)"],["App size impact","~4-5MB engine","Smaller (no runtime engine)"],["Incremental adoption","All-or-nothing per screen","Module-by-module"],["UI maturity on iOS","Excellent","Compose MP maturing"],["Best for","Cross-platform UI sharing","Shared logic, native UI"]]},codeComparison:`### Shared networking — Kotlin Multiplatform (common module)

\`\`\`kotlin
// commonMain — shared across iOS and Android
class UserRepository(private val api: HttpClient) {
    suspend fun fetchUser(id: String): User {
        return api.get("/users/$id").body()
    }
}

// androidMain — Compose UI
@Composable
fun UserScreen(vm: UserViewModel) {
    val user by vm.user.collectAsState()
    Text(user.name)
}

// iosMain — SwiftUI consumes the shared framework
// let repo = UserRepository(api: httpClient)
// let user = try await repo.fetchUser(id: "123")
\`\`\`

### Shared networking + UI — Flutter

\`\`\`dart
// one codebase — logic AND UI shared
class UserRepository {
  final dio = Dio();
  Future<User> fetchUser(String id) async {
    final r = await dio.get('/users/$id');
    return User.fromJson(r.data);
  }
}

// same language, same UI on iOS and Android
Consumer(builder: (_, ref, __) {
  final user = ref.watch(userProvider);
  return Text(user.name);
});
\`\`\`

Flutter shares the UI too; KMP shares the repository but you write \`UserScreen\` twice (Compose + SwiftUI) unless you adopt Compose Multiplatform.`,whenToChoose:{first:"**Choose Flutter when:** cross-platform UI consistency and velocity are the priority, you want one codebase for UI + logic, your team prefers a single language, or you are building a consumer app where design consistency matters. The default for most new cross-platform apps.",second:"**Choose Kotlin Multiplatform when:** you have strong native iOS and Android teams who want to keep fully native UIs, you want to deduplicate business logic/data/networking only, you are incrementally introducing sharing into an existing native app, or native interop and footprint are critical. Excellent for engineering-led teams."},relatedArticles:["managing-large-flutter-codebases"],relatedGlossary:["modular-architecture","repository-pattern"],faqs:[{q:"Is Compose Multiplatform ready to replace Flutter?",a:"Not yet for production iOS in the way Flutter is. Compose Multiplatform on iOS has improved rapidly but is less mature than Flutter's iOS story. For sharing logic now and UI later, KMP is a safe bet; for UI sharing today, Flutter is more proven."},{q:"Can I adopt KMP incrementally?",a:"Yes — this is one of KMP's biggest strengths. You can share a single module (e.g. networking or a data layer) in an existing native iOS+Android app and keep everything else native. Flutter is more all-or-nothing per screen."},{q:"Which has better performance?",a:"KMP compiles to native code with no runtime engine, so shared logic has minimal overhead and the UI uses platform-native rendering. Flutter adds its own engine (~4-5MB) but renders consistently. For pure logic, KMP; for UI consistency and smoothness, Flutter is very competitive."}]},{slug:"clean-architecture-vs-mvvm",title:"Clean Architecture vs MVVM in Flutter: Which Scales?",seoTitle:"Clean Architecture vs MVVM: Flutter Architecture Compared",description:"Clean Architecture vs MVVM for Flutter: layering, testability, boilerplate, and which scales at 50+ modules — from a production squad lead.",subjects:["Clean Architecture","MVVM"],category:"Architecture",date:"2026-08-10",dateModified:"2026-08-10",quickAnswer:`**Use Clean Architecture (layered: presentation → domain → data) for long-lived apps with 3+ engineers and complex business rules. Use MVVM (ViewModel + View, thinner layers) for apps where the UI-state mapping is the main complexity and you want less ceremony.** They are not mutually exclusive — MVVM is often the presentation layer *inside* a Clean Architecture app.

In our 50+ module Flutter codebase we run a layered Clean Architecture with BLoC/Cubit as the presentation-layer ViewModel equivalent. The layering earns its keep when a feature's business rules outgrow its UI, and when you want domain + data layers fully unit-testable without Flutter bindings.`,detailedComparison:`## The layering difference

**Clean Architecture** (Uncle Bob's, adapted) separates three layers with strict dependency rules:
- **Presentation** — widgets + BLoC/Cubit/ViewModel. Depends on domain.
- **Domain** — entities, use cases (interactors), repository interfaces. Pure Dart, no Flutter. Depends on nothing.
- **Data** — repository implementations, data sources (API, DB), DTOs. Depends on domain.

Dependencies point inward: presentation → domain ← data. The domain layer knows nothing about Flutter, databases, or HTTP.

**MVVM** is lighter: a **ViewModel** holds UI state and exposes commands; the **View** (widget) binds to it. There is no prescribed data/domain split — the ViewModel often calls repositories or services directly. It is presentation-pattern-first.

## Where they overlap

Most well-structured Flutter apps are **both**: Clean Architecture for the layering, with MVVM (a ViewModel/BLoC) as the presentation component. The real choice is how many layers you formalize, not MVVM-vs-Clean as opposites.

## Testability

Clean Architecture's killer feature: the **domain layer is pure Dart**. Use cases and repository contracts are unit-tested in milliseconds with no \`WidgetTester\`, no Flutter binding, no mocking the widget tree. For regression-heavy teams, this is gold.

MVVM ViewModels are testable too, but they typically sit closer to data sources and may pull in Flutter types (\`BuildContext\`-free, but still). The isolation is less strict.

## Boilerplate and velocity

Clean Architecture asks for more files: entity, repository contract, repository impl, use case, DTO, mapper, bloc, states, events. For a CRUD screen this is overhead. For a feature with real business rules (pricing, permissions, sync conflict resolution), that structure is what keeps the codebase navigable at 50 modules.

MVVM is leaner: a ViewModel + View + a repository call. Faster to start, easier to reason about for small features, but can drift into fat ViewModels if business logic accumulates.

## A pragmatic hybrid

The convention that works for us: formal Clean Architecture for **feature modules with non-trivial business rules** (checkout, sync, auth, content licensing); lighter MVVM-with-repository for **simple CRUD features** (settings, profile editing). Not every screen needs three layers — match the ceremony to the complexity.`,comparisonTable:{headers:["Feature","Clean Architecture","MVVM"],rows:[["Layers","3 (presentation/domain/data)","2 (View/ViewModel)"],["Domain purity","Pure Dart, no Flutter","ViewModel may touch Flutter"],["Use cases","Explicit interactors","Logic in ViewModel"],["Repository contracts","In domain, impl in data","Often direct in ViewModel"],["Testability","Domain fully isolated","Good, less isolated"],["Boilerplate","High","Low-moderate"],["Learning curve","Steep","Moderate"],["Best for","Complex, long-lived apps","UI-state-centric apps"],["Flutter fit","BLoC as presentation layer","BLoC/Provider as ViewModel"]]},codeComparison:`### Clean Architecture — use case + repository contract

\`\`\`dart
// domain — pure Dart, no Flutter
class CheckoutOrder {
  final OrderRepo repo;
  CheckoutOrder(this.repo);
  Future<Either<Failure, OrderId>> call(Cart cart) => repo.submit(cart);
}

abstract class OrderRepo {
  Future<Either<Failure, OrderId>> submit(Cart cart);
}

// data — implementation
class OrderRepoImpl implements OrderRepo {
  final Dio dio;
  OrderRepoImpl(this.dio);
  Future<Either<Failure, OrderId>> submit(Cart cart) async {
    // map to DTO, call API, map back
  }
}

// presentation — BLoC calls the use case
class CheckoutBloc extends Bloc<CheckoutEvent, CheckoutState> {
  CheckoutBloc(this.checkout) : super(...) {
    on<SubmitPressed>((e, emit) async {
      final result = await checkout(e.cart);
      result.fold((f) => emit(Error(f)), (id) => emit(Success(id)));
    });
  }
  final CheckoutOrder checkout;
}
\`\`\`

### MVVM — ViewModel calls repository directly

\`\`\`dart
class CheckoutViewModel extends Cubit<CheckoutState> {
  CheckoutViewModel(this.repo) : super(...);
  final OrderRepo repo;
  Future<void> submit(Cart cart) async {
    final result = await repo.submit(cart);
    result.fold((f) => emit(Error(f)), (id) => emit(Success(id)));
  }
}
\`\`\`

The Clean Architecture version is more files but the domain layer is pure Dart and unit-testable in isolation. The MVVM version is leaner but the business logic lives one layer up.`,whenToChoose:{first:"**Choose Clean Architecture when:** the app has complex, long-lived business rules, you need the domain layer fully unit-testable without Flutter, you have 3+ engineers and 10+ feature modules, or the same domain logic must serve multiple presentation surfaces (app, web, CLI). The layering pays off at scale.",second:"**Choose MVVM when:** the app's complexity is mostly UI-state mapping, features are CRUD-shaped, the team is small, or velocity matters more than long-term layering. You can always promote a fat ViewModel into use cases when business logic accumulates."},relatedArticles:["managing-large-flutter-codebases"],relatedGlossary:["clean-architecture","repository-pattern","either-failure-pattern","bloc"],faqs:[{q:"Can I use MVVM inside Clean Architecture?",a:"Yes — most well-structured Flutter apps do exactly this. Clean Architecture defines the layers; MVVM (a BLoC/Cubit acting as ViewModel) is the presentation-layer component. They are not competing patterns."},{q:"Is Clean Architecture overkill for small apps?",a:"Often yes. For a 5-screen CRUD app, three formal layers is ceremony. Start lighter (MVVM + repository) and introduce use cases and domain entities only where business logic justifies them."},{q:"Does Clean Architecture hurt performance?",a:"No. The layers are compile-time abstractions with no runtime cost. Indirection through interfaces is trivially cheap. The cost is in developer ceremony and file count, not performance."}]},{slug:"offline-first-vs-local-first",title:"Offline-First vs Local-First: The Sync Architecture Split",seoTitle:"Offline-First vs Local-First: Flutter Sync Compared",description:"Offline-first vs local-first: cloud-as-source-of-truth vs device-as-source-of-truth — the architectural decision that shapes your entire data layer.",subjects:["Offline-First","Local-First"],category:"Architecture",date:"2026-08-10",dateModified:"2026-08-10",quickAnswer:`**Offline-first** means the app is designed to tolerate disconnection — it caches, queues writes, and degrades gracefully — but the **cloud is still the source of truth**. **Local-first** means the **on-device database is the source of truth** and sync is a background reconciliation, not a primary read/write path. Local-first is the stronger guarantee and the harder architecture.

At iStoria we run a **local-first** model: PowerSync keeps each device's local Drift/SQLite database authoritative, and the UI never blocks on network. The distinction is not academic — it determines whether the app is usable on a flaky train, and whether concurrent edits survive.`,detailedComparison:`## The source-of-truth question

This is the core difference and it propagates everywhere.

**Offline-first**: the server database is authoritative. The app reads from network, caches locally for speed/offline reads, and writes go to the server when online (or are queued and replayed). On conflict, the server usually wins (last-write-wins or app-specific merge).

**Local-first**: the local database is authoritative. Every read and write hits local SQLite instantly. A sync engine (PowerSync, ElectricSQL, CRDT libraries) reconciles changes in the background. The app is fully functional with zero connectivity, and conflict resolution is part of the sync layer, not bolted on.

## Implications for the data layer

Offline-first typically means: a repository that tries network first, falls back to cache for reads, and a write queue (often hand-rolled) for offline mutations. State management must handle "optimistic vs confirmed" states.

Local-first means: the repository reads/writes local SQLite unconditionally. A separate sync subsystem watches for connectivity and runs reconciliation. The repository does not know or care about the network — that is the sync engine's job. This is a cleaner separation and is exactly what PowerSync provides.

## Conflict resolution

Offline-first apps usually punt: last-write-wins on the server, or a manual merge screen for known conflict cases. This breaks under real concurrent edits.

Local-first architectures bake conflict resolution into the sync layer. PowerSync applies server-side deterministic resolution; CRDT-based libraries (Yjs, Automerge) do field-level merges. The architecture forces you to think about merges upfront, which is the only honest way to handle distributed writes.

## Complexity and cost

Local-first is more architectural investment: sync rules, conflict policy, schema that supports syncing (timestamps, soft deletes, client IDs). Offline-first is easier to start with but accumulates merge debt as the app grows.

## Which to choose

Choose local-first when the app must be **fully usable offline with writes** (field apps, note-taking, collaborative tools, content creation). Choose offline-first when offline is a **read-only degradation** (news apps, dashboards) or when writes are rare and server-authoritative.`,comparisonTable:{headers:["Feature","Offline-First","Local-First"],rows:[["Source of truth","Cloud / server","On-device database"],["Reads","Network → cache fallback","Local SQLite (instant)"],["Writes","To server (queued if offline)","To local (synced later)"],["Offline writes","Queued, replayed","First-class, immediate"],["Conflict resolution","Usually LWW or manual","Built into sync layer"],["Network dependency for UX","Moderate","Minimal"],["Architecture complexity","Lower to start","Higher upfront"],["Sync engine","Often hand-rolled","PowerSync / CRDT / ElectricSQL"],["Best for","Read-heavy, server-authoritative","Collaborative, write-heavy, field apps"]]},codeComparison:`### Offline-first repository — network-first, cache fallback

\`\`\`dart
class ArticleRepo {
  final Dio dio;
  final Cache cache;

  Future<Article> fetch(String id) async {
    try {
      final r = await dio.get('/articles/$id');
      final a = Article.fromJson(r.data);
      await cache.put(id, a); // cache for offline reads
      return a;
    } on DioException {
      return cache.get(id); // degrade to cache
    }
  }

  // write — queued if offline (you build the queue)
  Future<void> bookmark(String id) async {
    await writeQueue.enqueue(() => dio.post('/bookmarks', data: {'id': id}));
  }
}
\`\`\`

### Local-first repository — local SQLite is authoritative, PowerSync syncs

\`\`\`dart
class ArticleRepo {
  final PowerSyncDatabase db;

  Future<Article> fetch(String id) async {
    // read local — always instant, always works offline
    final rows = await db.execute('SELECT * FROM articles WHERE id = ?', [id]);
    return Article.fromRow(rows.first);
  }

  // write local — immediate, PowerSync reconciles upstream
  Future<void> bookmark(String id) async {
    await db.execute('INSERT INTO bookmarks (id) VALUES (?)', [id]);
  }
}
// sync runs in the background; the repo never touches the network
\`\`\`

The local-first version is simpler in the repository because the sync engine owns the network. The offline-first version forces the repo to handle network-vs-cache branching and a write queue.`,whenToChoose:{first:"**Choose offline-first when:** offline is primarily a read-caching concern, writes are server-authoritative and infrequent, the app degrades acceptably without connectivity, or you want a simpler initial architecture. News, dashboards, and admin tools fit here.",second:"**Choose local-first when:** the app must be fully functional offline including writes, you have concurrent edits that need real conflict resolution, or the UX cannot tolerate network latency on the read/write path. Note-taking, field/data-collection, and collaborative apps demand this. It is more upfront investment but the only honest architecture for write-heavy offline apps."},relatedArticles:["managing-large-flutter-codebases","offline-first-vs-local-first"],relatedGlossary:["offline-first","local-first","powersync","drift"],faqs:[{q:"Is local-first just offline-first with better marketing?",a:"No. The distinction is the source of truth. Offline-first keeps the server authoritative and tolerates disconnection; local-first makes the device authoritative and syncs as a background concern. The data-layer code is structurally different, and local-first forces real conflict resolution rather than last-write-wins."},{q:"Do I need PowerSync for local-first?",a:"Not necessarily — you can use ElectricSQL, a CRDT library, or your own sync layer. PowerSync is a strong choice for Flutter + Postgres because it handles sync rules and conflict resolution and integrates with Drift/SQLite. The point is you need *a* sync engine; local-first without one is just an offline cache."},{q:"Is local-first harder to build?",a:"Yes, upfront. You must design schema for sync (timestamps, client IDs, soft deletes), define sync rules/partitioning, and pick a conflict policy. The payoff is that the read/write path becomes simpler and the app works unconditionally offline. For write-heavy offline apps, it is the right trade."}]},{slug:"fastlane-vs-codemagic",title:"Fastlane vs Codemagic: Flutter Release Automation",seoTitle:"Fastlane vs Codemagic: Flutter CI/CD Compared",description:"Fastlane vs Codemagic for Flutter: local release automation vs managed CI — what a GitHub-Actions-native team picked and why.",subjects:["Fastlane","Codemagic"],category:"CI/CD",date:"2026-08-10",dateModified:"2026-08-10",quickAnswer:`**Use Fastlane when you want release automation that runs anywhere (your Mac, GitHub Actions, any CI) and stays under your version control as Ruby files. Use Codemagic when you want a managed CI that handles iOS signing, Flutter builds, and store publishing without you managing machines or signing identities.**

At iStoria we standardized on **GitHub Actions + Fastlane** because we already live in GitHub, need fine-grained control over the pipeline, and want the release logic in the repo as code. Codemagic is excellent for teams that want to avoid iOS-signing hell and Mac infrastructure entirely — but you pay in vendor lock-in and per-build cost.`,detailedComparison:`## What each is

**Fastlane** is a Ruby-based automation toolchain (lanes) for mobile release tasks: building, signing, screenshot generation, metadata management, and App Store / Play Store upload. You define \`Fastfile\` lanes in your repo and run them anywhere Ruby runs — local Mac, GitHub Actions macos-latest, any CI.

**Codemagic** is a managed CI/CD service purpose-built for mobile (and Flutter in particular). You configure builds in a \`codemagic.yaml\` or via UI, and Codemagic provides the Mac hardware, manages iOS code signing, runs Flutter builds, and publishes to stores.

## Portability vs managed convenience

Fastlane is **portable**: the same \`Fastfile\` runs on your laptop and in GitHub Actions. The release logic lives in your repo and is reviewable in PRs. You bring the infrastructure (a Mac, CI runners).

Codemagic is **managed**: they provide Mac hardware, handle provisioning profiles and signing certificates, and integrate store publishing. You do not manage machines or signing identities — but you are locked to their platform and pricing model.

## iOS signing — the real pain

iOS code signing is the single biggest reason teams pick Codemagic. Managing signing identities, provisioning profiles, and App Store Connect API keys across CI is genuinely painful. Codemagic abstracts this. Fastlane's \`match\` (with a private git repo or cloud storage for certificates) solves it too, but you set it up and maintain it.

If you have already solved signing with Fastlane match, there is little reason to move to Codemagic. If you have not and want to avoid the rabbit hole, Codemagic is attractive.

## Cost model

Fastlane is free; you pay for the infrastructure it runs on (your Mac, or GitHub Actions macOS minutes — which are expensive, ~10x Linux minutes). Codemagic charges per build minute (Mac plans are pricier). For a team already on GitHub Actions, Fastlane reuses existing CI budget; Codemagic is a separate line item.

## Control and customization

Fastlane lanes are arbitrary Ruby — full programmatic control, integrate any tool, run any shell command. Codemagic yaml is powerful but constrained to what the platform exposes. For elaborate release governance (the kind we enforce — branch protection, flavor-aware builds, staged rollouts), Fastlane-as-code in the repo wins.`,comparisonTable:{headers:["Feature","Fastlane","Codemagic"],rows:[["Type","Automation toolchain (Ruby)","Managed CI/CD service"],["Runs where","Any Mac / CI runner","Codemagic cloud (managed Mac)"],["iOS signing","match (you manage certs)","Fully managed"],["Config","Fastfile (Ruby, in repo)","codemagic.yaml / UI"],["Portability","High — any CI","Locked to Codemagic"],["Cost","Free + your infra","Per-build-minute pricing"],["Flutter integration","Via Flutter CLI in lanes","First-class"],["Store publishing","deliver / supply lanes","Built-in steps"],["Customization","Full (arbitrary Ruby)","Platform-constrained"]]},codeComparison:`### Fastlane lane — Flutter build + upload (runs in GitHub Actions)

\`\`\`ruby
# Fastfile
default_platform(:ios)

lane :beta do
  sh("flutter build ipa --flavor production --release")
  upload_to_testflight(
    ipa: "build/ios/ipa/production.ipa",
    skip_waiting_for_build_processing: true,
  )
end

# GitHub Actions step
# - run: bundle exec fastlane beta
\`\`\`

### Codemagic — codemagic.yaml (managed)

\`\`\`yaml
workflows:
  flutter-ios:
    name: Flutter iOS Beta
    environment:
      flutter: stable
      ios_signing:
        distribution_type: app_store
        bundle_identifier: com.istoria.app
    scripts:
      - flutter build ipa --flavor production --release
    artifacts:
      - build/ios/ipa/*.ipa
    publishing:
      app_store_connect:
        api_key: $APP_STORE_KEY
        submit_to_testflight: true
\`\`\`

Fastlane's lane is portable Ruby that runs anywhere; Codemagic's yaml is platform-specific but handles signing and hardware for you.`,whenToChoose:{first:"**Choose Fastlane when:** you want release logic as reviewable code in your repo, you already have CI infrastructure (GitHub Actions, Mac runners), you need elaborate custom release governance, or you want to avoid vendor lock-in. Pair it with match for signing.",second:"**Choose Codemagic when:** you want to offload iOS signing and Mac infrastructure entirely, you value a managed Flutter-first experience, your team is small and does not want to maintain CI machinery, or you are willing to pay per-build for convenience."},relatedArticles:["flutter-build-flavors-guide","github-actions-branch-protection-guardrails"],relatedGlossary:["build-flavors","trunk-based-development"],faqs:[{q:"Can I use Fastlane inside Codemagic?",a:"Yes — Codemagic can run Fastlane lanes in its build scripts, so you can combine Codemagic's managed signing/hardware with your existing Fastfile. Common when teams migrate incrementally."},{q:"Is GitHub Actions replacing both?",a:"GitHub Actions with macos runners + Fastlane is what we run, and it can fully replace Codemagic for Flutter. You still manage iOS signing (via match). The trade-off is macOS minute cost and signing setup vs Codemagic's managed convenience."},{q:"Which is cheaper for a small team?",a:"If you already pay for GitHub Actions, Fastlane reuses that budget (watch macOS minute costs). Codemagic has a free tier but scales to paid Mac plans. For sporadic releases, Codemagic's free tier may win; for high build volume, owned CI + Fastlane is usually cheaper."},{q:"How do I handle Flutter flavors with each tool?",a:"Both handle flavors, but the setup differs. Fastlane lanes receive parameters — `lane :beta do |options|` — so you parameterize the flavor, scheme, and output path per lane invocation and call the right one from CI. Codemagic declares flavors in its environment config and yaml scripts, which is more declarative but less flexible if your release matrix is complex. In our multi-flavor production setup (dev, staging, production), Fastlane's parameterized lanes give us one `Fastfile` that handles every variant, which is cleaner than maintaining parallel Codemagic workflow definitions."}]},{slug:"github-actions-vs-codemagic",title:"GitHub Actions vs Codemagic for Flutter CI/CD",seoTitle:"GitHub Actions vs Codemagic: Flutter CI Compared",description:"GitHub Actions vs Codemagic for Flutter: cost, iOS signing, control, and why a 5M-user app team standardized on GitHub Actions + Fastlane.",subjects:["GitHub Actions","Codemagic"],category:"CI/CD",date:"2026-08-10",dateModified:"2026-08-10",quickAnswer:`**Use GitHub Actions if your code and review process already live in GitHub — the CI belongs next to the PRs. Use Codemagic if you want managed Mac infrastructure and iOS signing without the setup.** For a GitHub-native team, GitHub Actions (with macos runners + Fastlane) gives tighter PR integration, branch protection, and release governance than a separate CI vendor.

We run GitHub Actions end-to-end at iStoria — including iOS builds on macos runners with Fastlane. The only reason to look at Codemagic is if iOS signing pain or Mac runner cost becomes unbearable.`,detailedComparison:`## Integration with your workflow

GitHub Actions runs **in the repo**: workflows are \`.github/workflows/*.yml\`, reviewed in PRs, triggered by pushes/PRs/issues/releases. Status checks feed branch protection directly. This tight loop is the main reason GitHub-native teams stay there.

Codemagic is an **external service**: you connect a repo, configure builds in its UI or a \`codemagic.yaml\`, and results report back via commit status. It works, but the configuration lives partly outside GitHub and the PR integration is less native.

## Ecosystem and extensibility

GitHub Actions has the **largest CI ecosystem on earth** — the marketplace has thousands of actions for caching, linting, deployments, Slack notifications, you name it. You compose them in yaml. Codemagic has purpose-built steps for mobile but a smaller ecosystem for everything else.

For a team that automates more than just builds — PR hygiene bots, stale branch cleanup, Jira sync, AI review summaries (all of which we run) — GitHub Actions is the only realistic foundation. Codemagic is mobile-CI-shaped.

## Cost

GitHub Actions: free minutes for public repos; for private repos, macOS minutes are ~10x Linux minutes and are the expensive part of Flutter iOS builds. Self-hosted mac runners cut this.

Codemagic: per-build pricing, with Mac plans being pricier. Predictable but a separate budget line. For high build volume, owned GitHub Actions runners can be cheaper; for low volume, Codemagic's free/cheap tier may win.

## iOS signing

This is Codemagic's strongest card — fully managed signing. GitHub Actions requires you to manage certs (via Fastlane match, App Store Connect API keys, encrypted secrets). It is solved but requires setup and maintenance. If your team has no one who wants to own signing, Codemagic removes that burden.

## Caching and build speed

Both platforms support caching, but the mechanics differ. GitHub Actions uses \`actions/cache\` to persist \`~/.pub-cache\`, Gradle caches, and Pods directories between runs — you wire this yourself in the workflow yaml. Codemagic caches Flutter, Gradle, and CocoaPods automatically with less configuration. In practice, once you set up caching in GitHub Actions (a one-time ~20 lines of yaml), build times are comparable. The bigger speed lever is splitting your pipeline: run \`flutter test\` on Linux runners (cheap, fast) and reserve macOS runners for the iOS archive step only. Codemagic forces Mac pricing for the whole pipeline, which makes it less cost-efficient for test-heavy workflows.`,comparisonTable:{headers:["Feature","GitHub Actions","Codemagic"],rows:[["Hosting","GitHub (repo-native)","External managed service"],["Config",".github/workflows/*.yml","codemagic.yaml / UI"],["PR integration","Native (checks, branch protection)","Via commit status"],["Ecosystem","Massive (marketplace)","Mobile-focused"],["Beyond mobile CI","Full general-purpose CI","Mobile-CI-focused"],["iOS signing","DIY (match + secrets)","Fully managed"],["Mac runner cost","High (macOS minutes)","Per-build pricing"],["Self-hosted runners","Yes","No"],["Best for","GitHub-native teams, broad automation","Signing-averse mobile teams"]]},codeComparison:`### Flutter iOS beta — GitHub Actions + Fastlane

\`\`\`yaml
# .github/workflows/beta.yml
name: Beta
on:
  push:
    branches: [main]
jobs:
  ios:
    runs-on: macos-latest
    steps:
      - uses: actions/checkout@v4
      - uses: subosito/flutter-action@v2
        with: { flutter-version: '3.x' }
      - run: flutter pub get
      - run: flutter test
      - run: bundle exec fastlane beta
        env:
          MATCH_PASSWORD: \${{ secrets.MATCH_PASSWORD }}
          APP_STORE_KEY: \${{ secrets.APP_STORE_KEY }}
\`\`\`

### Flutter iOS beta — Codemagic (managed signing)

\`\`\`yaml
workflows:
  beta:
    name: iOS Beta
    environment:
      flutter: stable
      ios_signing:
        distribution_type: app_store
        bundle_identifier: com.example.app
    scripts:
      - flutter test
      - flutter build ipa --release
    publishing:
      app_store_connect:
        api_key: $APP_STORE_KEY
        submit_to_testflight: true
\`\`\`

The GitHub Actions version requires you to wire signing secrets; Codemagic manages signing in its environment. Both get you a TestFlight build — the choice is about where you want to own the complexity.`,whenToChoose:{first:"**Choose GitHub Actions when:** your code is in GitHub, you want CI config reviewed in PRs with native branch protection, you automate more than mobile builds (bots, hygiene, deployments), or you want self-hosted runners to cut macOS cost. This is our production choice.",second:"**Choose Codemagic when:** iOS signing is a burden you want fully offloaded, you want managed Mac hardware, your CI needs are mobile-only, or you have no existing GitHub Actions investment. A strong choice for signing-averse or mobile-only teams."},relatedArticles:["github-actions-branch-protection-guardrails","automate-pull-request-hygiene","flutter-build-flavors-guide"],relatedGlossary:["trunk-based-development","build-flavors"],faqs:[{q:"Are GitHub Actions macOS minutes too expensive for Flutter?",a:"They are pricier than Linux (~10x), but for most teams the total is manageable, especially with caching and self-hosted mac runners. If build volume is very high, self-hosted runners or Codemagic's pricing may be cheaper — do the math for your cadence."},{q:"Can Codemagic trigger from GitHub PRs?",a:"Yes — Codemagic integrates with GitHub and can build on PRs, reporting status checks back. The integration is solid; it is just less native than GitHub Actions' in-repo workflows for branch-protection governance."},{q:"Which is better for a solo Flutter dev?",a:"If you are already on GitHub, GitHub Actions + Fastlane is the path of least resistance and keeps everything in the repo. If you dread iOS signing, Codemagic's managed signing saves you a weekend of pain."},{q:"Can I run unit and widget tests on both platforms?",a:"Yes — `flutter test` runs identically on GitHub Actions Linux runners and Codemagic. This is where GitHub Actions has a real cost advantage: unit and widget tests do not need macOS, so they run on cheap Linux minutes. Only iOS build/sign/archive steps require macos runners. A smart pipeline splits the job: run tests on Linux, then fan out to a macOS runner only for the iOS build. Codemagic charges Mac pricing for the entire pipeline, which makes test-heavy workflows more expensive per run."}]},{slug:"feature-flags-vs-ab-testing",title:"Feature Flags vs A/B Testing: Different Tools, Different Jobs",seoTitle:"Feature Flags vs A/B Testing: Compared",description:"Feature flags vs A/B testing: release governance vs experimentation — what each is for and why conflating them causes bad decisions.",subjects:["Feature Flags","A/B Testing"],category:"Growth",date:"2026-08-10",dateModified:"2026-08-10",quickAnswer:`**Feature flags control who can see a feature (release governance). A/B testing measures which variant performs better (experimentation).** They overlap — an A/B test is often implemented *using* feature flags — but they are different tools with different jobs. Conflating them leads to shipping flags without metrics, or running tests without rollout safety.

Use **feature flags** for trunk-based development, dark launches, staged rollouts, and kill switches. Use **A/B testing** when you have a metric you want to move and a hypothesis about how. In practice: flag every non-trivial feature, and A/B test only where you have the volume and a clear success metric.`,detailedComparison:`## What each solves

**Feature flags** decouple **deployment from release**. You merge code to main (deployed) but keep a feature off for users until it is ready (released). Variants: on/off, percentage rollout, audience targeting, kill switch. The goal is **safety and control**.

**A/B testing** compares two or more variants against a **success metric** (conversion, retention, click-through). Users are randomized into cohorts, you collect telemetry, and a statistical test decides whether the difference is significant. The goal is **learning**.

An A/B test is often *implemented* with a feature flag (flag returns variant A or B), which is why people conflate them. But a flag without measurement is just a rollout tool, and a measurement without controlled rollout is just analytics.

## When to flag without testing

Most flags are not experiments. You flag a risky refactor to roll out to 1% then 10% then 100%, watching crash rates — that is release governance, not an experiment. You flag a feature dark-launched behind a toggle so you can turn it off without a hotfix — that is a kill switch. Trunk-based development depends on this: incomplete features merge to main behind a flag.

## When to A/B test

A/B testing is worth it when: you have enough users to reach statistical significance in a reasonable time, you have a clear primary metric, and the change is consequential enough to justify the rigor. Small UI tweaks on a 5M-user app? Worth testing. Niche B2B feature with 200 users? Probably not — just ship it and watch qualitatively.

## The trap: flags as permanent config

The most common failure mode is flags that never get cleaned up. A flag added for a rollout stays in the codebase for years, branching logic accumulating. Pair every flag with a removal ticket once it reaches 100%. The same applies to concluded A/B tests — ship the winner and delete the loser variant.

## Tooling

Feature flags: GrowthBook, LaunchDarkly, Firebase Remote Config, PostHog, or a homegrown config service. A/B testing: the same tools often do both (GrowthBook, PostHog, Firebase A/B testing). At the app layer, a flag-service abstraction lets you swap providers.`,comparisonTable:{headers:["Feature","Feature Flags","A/B Testing"],rows:[["Purpose","Release control / governance","Experimentation / learning"],["Question answered","Who sees this?","Which variant wins?"],["Variants","On/off, %, audience","2+ randomized cohorts"],["Needs metrics","No (often watches crashes)","Yes (primary success metric)"],["Statistical rigor","None needed","Significance testing"],["Typical duration","Days to weeks (rollout)","Until significance reached"],["Cleanup","Remove flag at 100%","Ship winner, delete loser"],["Overlap","Used to implement A/B tests","Implemented via flags"],["Best for","Trunk-based, dark launches, kill switches","Conversion, retention optimization"]]},codeComparison:`### Feature flag — staged rollout (no measurement)

\`\`\`dart
final flag = await flagService.eval('new_checkout', user: currentUser);
// flagService controls % rollout + audience targeting
if (flag.enabled) {
  return NewCheckoutFlow();
} else {
  return LegacyCheckoutFlow();
}
\`\`\`

### A/B test — randomized variant + metric tracking

\`\`\`dart
final variant = await experiment.assign(
  'checkout_redesign_v2',
  user: currentUser,
  // variants: 'control' | 'treatment'
);

// track the primary metric on conversion
analytics.capture('checkout_completed', {
  'experiment': 'checkout_redesign_v2',
  'variant': variant,
  'value_usd': order.total,
});

return variant == 'treatment' ? NewCheckoutFlow() : LegacyCheckoutFlow();
\`\`\`

The flag version gates access. The experiment version randomizes and instruments. Same plumbing, different intent — and the experiment only means something if you have the volume and a defined metric.`,whenToChoose:{first:"**Choose feature flags when:** you practice trunk-based development, you want to decouple deploy from release, you need staged rollouts or kill switches, or you are dark-launching a risky change. This is a release-engineering tool — default to flagging non-trivial features.",second:"**Choose A/B testing when:** you have a clear success metric, enough users to reach significance, a hypothesis about user behavior, and the change is consequential. Not every flag needs a test — test where the decision is genuinely uncertain and measurable."},relatedArticles:["github-actions-branch-protection-guardrails","ai-weekly-engineering-reviews"],relatedGlossary:["feature-flags","trunk-based-development"],faqs:[{q:"Do I need a fancy tool for feature flags?",a:"No. A simple remote config (Firebase Remote Config, a JSON file on a CDN, PostHog) works for most apps. You need a flag service when you want fine-grained audience targeting, instant kill switches, or experimentation layered on top. Start simple; adopt a platform when pain demands it."},{q:"When is A/B testing a waste of time?",a:"When you lack the user volume to reach significance, when you have no clear primary metric, or when the change is obviously better (accessibility fixes, crash fixes). Testing for the sake of testing burns engineering time and produces noise."},{q:"Should every flag be cleaned up?",a:"Yes. Every rollout flag should have a removal ticket once it reaches 100%. Accumulated flags create branching debt that makes the codebase harder to reason about. Concluded experiments should ship the winner and delete the loser."},{q:"Can I run an A/B test without a dedicated experimentation platform?",a:"Yes for simple cases — assign a variant based on a stable user ID hash (so the same user always sees the same variant), log the assignment and the outcome metric to your analytics (PostHog, Amplitude, Firebase Analytics), and run a chi-square or t-test yourself once you have enough samples. This is fine for one-off tests. You need a real platform (GrowthBook, PostHog Experiments, LaunchDarkly) when you want automatic significance calculation, mutual exclusion between concurrent experiments, and audience targeting without hand-rolling the bucketing logic."}]},{slug:"patrol-vs-maestro",title:"Patrol vs Maestro: Flutter Integration Testing",seoTitle:"Patrol vs Maestro: Flutter E2E Testing Compared",description:"Patrol vs Maestro for Flutter integration tests: Dart-native vs YAML-based, custom finder vs accessibility, and which fits a Flutter-first team.",subjects:["Patrol","Maestro"],category:"Testing",date:"2026-08-10",dateModified:"2026-08-10",quickAnswer:"**Use Patrol if your team writes Dart and wants integration tests that live next to unit/widget tests with full access to Flutter internals and native plugins. Use Maestro if you want simple, human-readable YAML flows that non-engineers can author and that run across platforms with minimal setup.**\n\nFor a Flutter-Dart team like ours, **Patrol** is the better fit: tests are Dart, finders are Dart, you can mock platform channels, and CI integration is a `flutter test` invocation. Maestro is fantastic for smoke-test flows and cross-platform acceptance tests where simplicity beats expressiveness.",detailedComparison:`## Authoring model

**Patrol** tests are written in **Dart** using \`integration_test\` + patrol's custom test framework. You get Dart finders, \`pumpAndSettle\`, and the full Flutter testing API. Native interactions (permissions, webview, notifications) are handled via patrol's native automation.

**Maestro** tests are written in **YAML flows** — a declarative DSL: \`launchApp\`, \`tapOn\`, \`assertVisible\`. No Dart. Designed to be readable by product managers and QA, not just engineers.

## Finders and robustness

Patrol uses Flutter's widget finders (Keys, text, semantics) — precise, typed, refactor-friendly if you use Keys. Maestro uses accessibility identifiers and visible text — robust to widget tree changes but coarser, and dependent on labels being present.

## Native and plugin coverage

Patrol's standout feature: it can interact with **native UI outside Flutter** (permission dialogs, webviews, notifications) via its native automation layer. Standard \`integration_test\` cannot. For apps with heavy native plugin interaction (camera, push notifications), Patrol is the only pure-Dart option that reaches outside Flutter.

Maestro also handles native UI across platforms — that is part of its cross-platform promise — but you author in YAML, not Dart, so complex logic is harder.

## CI and speed

Patrol runs as \`flutter test integration_test/\` — integrates with any CI that runs Flutter, including our GitHub Actions setup. Maestro runs via its CLI and can target Android, iOS, and web. Both are CI-friendly; Patrol fits a Flutter-native pipeline more naturally.

## Maintenance cost

Maestro flows are shorter and more readable but break when labels change and are harder to debug for complex flows. Patrol tests are longer Dart code but benefit from IDE support, type checking, and refactoring tools.

## Selectors and test stability

The selector strategy is the single biggest factor in how maintainable your integration tests are. Patrol lets you use \`ValueKey\` finders — the same keys your widgets already use — so a rename is caught by the compiler or at worst by a clear 'element not found' error. Maestro relies on accessibility identifiers and visible text strings; a marketing copy change can break a flow silently in CI. If you go with Maestro, establish a convention of stable accessibility IDs on every interactive widget and treat them like a public API — never change the ID without updating the flows. Either way, avoid brittle selectors like nth-child or screen position, which break on any layout shift.`,comparisonTable:{headers:["Feature","Patrol","Maestro"],rows:[["Language","Dart","YAML DSL"],["Authoring","Engineer-friendly","Readable by non-engineers"],["Finders","Flutter widget finders (Keys)","Accessibility IDs / visible text"],["Native UI access","Yes (permissions, webview)","Yes (cross-platform)"],["Platform channels mocking","Yes","No"],["Runs via","flutter test","Maestro CLI"],["Debugging","Dart debugger / IDE","Flow logs / screenshots"],["Best for","Flutter-Dart teams, complex flows","Smoke tests, cross-platform acceptance"]]},codeComparison:`### Patrol — Dart integration test

\`\`\`dart
import 'package:patrol/patrol.dart';

void main() {
  patrolTest('login flow', ($) async {
    await $.pumpWidgetAndSettle(MyApp());
    await $(#emailField).enterText('user@example.com');
    await $(#passwordField).enterText('password');
    await $(#loginButton).tap();
    expect($(#homeScreen), findsOneWidget);
    // patrol can also grant native permission dialogs:
    // await $.native.grantPermissionWhenInUse();
  });
}
\`\`\`

### Maestro — YAML flow

\`\`\`yaml
# login_flow.yaml
appId: com.example.app
---
- launchApp
- tapOn:
    id: "email_field"
- inputText: "user@example.com"
- tapOn:
    id: "password_field"
- inputText: "password"
- tapOn: "Login"
- assertVisible: "Home"
\`\`\`

Patrol is typed and debugger-friendly; Maestro is declarative and readable. The right choice depends on who authors tests and how much native interaction you need.`,whenToChoose:{first:"**Choose Patrol when:** your team writes Dart, tests live next to the app code, you need to interact with native UI (permissions, webviews) or mock platform channels, or you want IDE/debugger support. The natural choice for a Flutter-first engineering team.",second:'**Choose Maestro when:** you want simple smoke/acceptance flows readable by QA or product, you need cross-platform coverage (Android + iOS + web) from one YAML, or you want to start with E2E tests in an hour. Great for the 80% case of "does the critical path still work."'},relatedArticles:["managing-large-flutter-codebases"],relatedGlossary:["modular-architecture"],faqs:[{q:"Can I use both Patrol and Maestro?",a:"Yes. A common setup is Patrol for engineer-authored regression tests (complex flows, native interaction) and Maestro for quick smoke tests on every release. They serve different authoring audiences."},{q:"Which is faster to set up?",a:"Maestro — install the CLI, write a YAML, run. Patrol requires Dart test files and the integration_test setup, which is more initial work but pays off as tests grow complex."},{q:"Does Patrol handle iOS permissions dialogs?",a:"Yes — that is one of its headline features. Patrol's native automation can tap system permission dialogs, which standard integration_test cannot. This is a decisive advantage for apps that test permission-gated flows."},{q:"How flaky are Patrol and Maestro tests in CI?",a:"Both have flake risk, but from different sources. Patrol tests are more stable against UI label changes because you use typed Keys, not visible text — but they can flake on animations not settling (`pumpAndSettle` timing out) or on native dialog race conditions. Maestro flows flake when accessibility IDs or text labels change, and they are harder to debug because you get flow logs and screenshots, not a Dart stack trace. For either tool, the flake-reduction playbook is the same: use stable selectors (Keys for Patrol, stable accessibility IDs for Maestro), add explicit waits before assertions, and run tests on fixed device OS images in CI rather than shared ephemeral runners that may have different OS versions."},{q:"Which has better parallelism for large test suites?",a:"Patrol supports running tests in parallel across multiple simulators/emulators via its custom test runner, which can dramatically cut wall-clock CI time for large suites. Maestro has `maestro test` with shard support but parallelism is more manual — you split flows across jobs and aggregate results yourself. For a team with 100+ integration tests where CI duration matters, Patrol's built-in parallelism on familiar Flutter test infrastructure is an advantage."}]},{slug:"dio-vs-http",title:"Dio vs http: Flutter Networking Package Showdown",seoTitle:"Dio vs http: Flutter Networking Compared",description:"Dio vs http for Flutter: interceptors, cancellation, FormData, retries, and when the standard http package is enough — from a production networking layer.",subjects:["Dio","http"],category:"Networking",date:"2026-08-10",dateModified:"2026-08-10",quickAnswer:"**Use Dio for any app with non-trivial networking: interceptors, token refresh, file uploads, request cancellation, timeout policies, or retry logic. Use the `http` package for one-off scripts or tiny apps with a couple of GETs.**\n\n`http` is the official, minimal Dart HTTP client — fine and boring for simple cases. Dio is a richer client built for real apps: interceptors (auth, logging, retry), `CancelToken`, `FormData` for multipart, and consistent error handling via `DioException`. In a 50+ module production app, Dio's interceptor stack is load-bearing infrastructure.",detailedComparison:"## Surface area\n\n`http` is intentionally minimal: `get`, `post`, `put`, `delete`, `head`, `patch`. You get a `Response` with a body string/bytes. No interceptors, no cancellation tokens, no built-in retry.\n\nDio wraps a similar core with a much richer API: interceptors (request/response/error), `CancelToken`, `FormData` (multipart uploads), configurable timeouts, response type control (JSON, bytes, stream), and a typed `DioException` with a clear `type` enum.\n\n## Interceptors — the decisive feature\n\nInterceptors are why production apps pick Dio. An auth interceptor attaches the bearer token and refreshes it on 401; a logging interceptor records every request for debugging; a retry interceptor retries transient failures. Composing these in one place beats scattering `headers['Authorization'] = ...` across every call site.\n\n```dart\ndio.interceptors.add(InterceptorsWrapper(\n  onRequest: (options, handler) {\n    options.headers['Authorization'] = 'Bearer $token';\n    handler.next(options);\n  },\n  onError: (e, handler) async {\n    if (e.response?.statusCode == 401) {\n      await refreshToken();\n      return handler.resolve(await dio.fetch(e.requestOptions)));\n    }\n    handler.next(e);\n  },\n));\n```\n\nWith `http`, you reimplement this as a wrapper function and call it everywhere, or wrap every call manually.\n\n## Cancellation\n\nDio's `CancelToken` lets you cancel in-flight requests (e.g. when a user navigates away from a search screen). `http` has no cancellation primitive — you rely on the underlying `HttpClient` or ignore the result.\n\nFor typeahead/search UIs where stale responses must be discarded, cancellation is essential. We use it across every search-driven screen.\n\n## File uploads\n\nDio's `FormData` handles multipart uploads cleanly, including progress callbacks. `http` supports `MultipartRequest` but with less ergonomic progress reporting. For apps that upload images/documents (most consumer apps), Dio is noticeably smoother.\n\n## When http is fine\n\nIf your app makes five GETs to a public API with no auth, no uploads, and no cancellation needs, `http` is simpler and has zero extra dependencies. Do not reach for Dio for a prototype weather widget.\n\n## Logging and observability\n\nIn production, you need to see what your app is sending and receiving — for debugging user-reported issues and for performance monitoring. Dio's `LogInterceptor` can log full request/response bodies, headers, and timing, and you can gate verbosity by environment (verbose in dev, redacted in prod). Sentry's Dio integration automatically captures failed HTTP requests as breadcrumbs, so a crash report shows the exact API call that preceded it. With `http`, you build your own logging wrapper and there is no first-party Sentry breadcrumb integration — you manually capture the request context. For a 5M-user app where triaging a bug means correlating a crash with the API response that triggered it, Dio's observability story is a real operational advantage.",comparisonTable:{headers:["Feature","Dio","http"],rows:[["Interceptors","First-class","None (DIY wrapper)"],["Cancellation","CancelToken","None"],["Timeouts","Configurable per-request","Global only"],["Multipart / FormData","Ergonomic + progress","MultipartRequest (basic)"],["Retry logic","Interceptor or built-in","DIY"],["Auth / token refresh","Interceptor pattern","Manual per call"],["Error model","DioException with type enum","ClientException (basic)"],["Streaming response","Yes","Yes (via HttpClient)"],["Best for","Real apps with networking complexity","Scripts, tiny apps"]]},codeComparison:`### Authenticated GET with token refresh — Dio

\`\`\`dart
final dio = Dio(BaseOptions(baseUrl: 'https://api.example.com'));
dio.interceptors.add(AuthInterceptor(refreshToken));

// every request gets auth, retries on 401, cancels on navigate-away
final r = await dio.get('/me', cancelToken: cancelToken);
\`\`\`

### Authenticated GET — http

\`\`\`dart
// you must attach headers and handle refresh at every call site
final r = await http.get(
  Uri.parse('https://api.example.com/me'),
  headers: {'Authorization': 'Bearer $token'},
);
if (r.statusCode == 401) {
  await refreshToken();
  // ... retry manually
}
// no cancellation, no interceptor reuse
\`\`\`

Dio centralizes cross-cutting concerns; http pushes them to every call site. For an app with auth, uploads, and cancellation needs, Dio is the clear production choice.`,whenToChoose:{first:"**Choose Dio when:** the app has auth/token refresh, file uploads, request cancellation, retry policies, or any cross-cutting networking concern. Interceptors make the networking layer maintainable. The default for real apps.",second:"**Choose http when:** you are writing a script, a tiny app with a few unauthenticated GETs, or you want zero extra dependencies. Simpler is better when the complexity is not there."},relatedArticles:["managing-large-flutter-codebases"],relatedGlossary:["repository-pattern","either-failure-pattern"],faqs:[{q:"Is Dio heavier than http?",a:"Marginally in package size, negligible at runtime. The interceptor model has trivial overhead per request. For any app where networking is a first-class concern, the productivity gain vastly outweighs the footprint."},{q:"Can I use interceptors with http?",a:"Not natively. You wrap calls in a helper function that does the auth/logging/retry. It works but scatters logic and is harder to compose than Dio's interceptor chain. At a certain complexity, migrating to Dio is cleaner."},{q:"Does Dio work with Retrofit codegen?",a:"Yes — `retrofit` (the Dart package) generates type-safe API clients on top of Dio. That gives you typed API interfaces with all of Dio's interceptor/cancellation benefits. A great combo for a large API surface."},{q:"How do I test a repository that uses Dio?",a:"Use Dio's built-in `MockAdapter` or inject a mock `Dio` instance into your repository. Because Dio is a concrete class with a clean interface, you mock it at the `Dio` level — set up `when(dio.get('/path'))` responses and assert on the calls. With `http`, you typically mock the `http.Client` interface, which works but means your test doubles model a lower-level abstraction. The practical difference: Dio's interceptor-aware mock lets you test the full request pipeline (including auth header injection) in a unit test, while mocking `http.Client` tests only the final request/response and leaves interceptor-equivalent logic untested."}]},{slug:"freezed-vs-json-serializable",title:"Freezed vs json_serializable: Dart Model Codegen",seoTitle:"Freezed vs json_serializable: Dart Codegen Compared",description:"Freezed vs json_serializable: sealed unions, copyWith, equality, immutability — when Freezed's union modeling wins over plain JSON mapping.",subjects:["Freezed","json_serializable"],category:"Code Generation",date:"2026-08-10",dateModified:"2026-08-10",quickAnswer:"**Use Freezed when you need immutable data classes with `copyWith`, value equality, sealed unions (success/loading/error states), and JSON. Use json_serializable when you only need JSON (de)serialization on plain mutable Dart classes.** Freezed does more; json_serializable does one thing.\n\nThey compose — Freezed uses json_serializable under the hood for the JSON part. In practice, reach for Freezed for your **state and domain models** (which benefit from immutability, unions, and copyWith) and json_serializable for **DTOs** where a plain class with JSON mapping is enough.",detailedComparison:"## Scope\n\n**json_serializable** generates `fromJson`/`toJson` methods for a Dart class annotated with `@JsonSerializable()`. It handles field renaming, nullable vs required, enums, and nested objects. The class itself is an ordinary Dart class — you can make it mutable.\n\n**Freezed** generates a full immutable data class: private constructor, `copyWith` with nullable-override semantics, `==`/`hashCode` (value equality), `toString`, and — its killer feature — **sealed unions** for modeling state:\n\n```dart\n@freezed\nclass AppState with _$AppState {\n  const factory AppState.loading() = _Loading;\n  const factory AppState.success(Data data) = _Success;\n  const factory AppState.error(String message) = _Error;\n}\n// exhaustive switch via .when/.map\n```\n\n## copyWith and equality\n\nFreezed's `copyWith` handles nested objects and lets you set a field to null (a notorious pain with hand-written copyWith). It generates value equality so two `User(name: 'A')` instances are equal — essential for BLoC/Riverpod rebuild checks. Plain Dart classes have reference equality by default.\n\nFor state classes where you compare previous vs current state to decide rebuilds (BLoC `buildWhen`, Riverpod `select`), value equality is not optional — and Freezed gives it for free.\n\n## Sealed unions for state\n\nModeling `Loading | Success<T> | Error` as a sealed union with exhaustive `switch`/`.when` is the idiomatic Dart way to represent async state. Freezed makes this trivial; with plain classes you hand-roll an abstract base and subclasses, which is error-prone.\n\n## JSON\n\nFreezed integrates json_serializable for JSON support — add `fromJson`/`toJson` and you get both immutability and serialization. So Freezed is a superset for the JSON use case, with the trade-off of more code generation and a slightly steeper learning curve.\n\n## When plain json_serializable wins\n\nFor a simple API response DTO with five fields, no state modeling, and no need for immutability — json_serializable alone is lighter. You avoid Freezed's generated file size and the union API. Match the tool to the model's role.\n\n## Build time and project structure\n\nFreezed generates more code per model than json_serializable — roughly 3-5x the generated file size — because it produces copyWith, equality, hashCode, toString, and union machinery. In a project with 200+ Freezed models, `build_runner` can take 60-90 seconds on a cold build. The mitigation: use `build_runner watch` during development (incremental rebuilds are fast) and run full builds only in CI. Structure your project so domain/state models (Freezed) and DTOs (json_serializable) live in separate barrels — this makes the codegen boundary clear and lets you run targeted `build_runner` on just the layer that changed.",comparisonTable:{headers:["Feature","Freezed","json_serializable"],rows:[["JSON (de)serialization","Yes (via json_serializable)","Yes"],["Immutability","Enforced (final fields)","Optional"],["copyWith","Generated (null-aware)","None"],["Value equality (==)","Generated","None (reference)"],["Sealed unions","First-class (.when/.map)","No"],["toString","Generated","None"],["Scope","Data/state models","JSON mapping only"],["Generated code size","Larger","Smaller"],["Best for","State, domain, union models","Simple DTOs"]]},codeComparison:`### State model — Freezed (union + copyWith + equality)

\`\`\`dart
@freezed
class UserState with _$UserState {
  const factory UserState.loading() = _Loading;
  const factory UserState.success({required User user}) = _Success;
  const factory UserState.error(String message) = _Error;
}

// exhaustive handling
state.when(
  loading: () => Spinner(),
  success: (user) => Profile(user: user),
  error: (msg) => ErrorView(msg),
);
\`\`\`

### DTO — json_serializable (plain JSON mapping)

\`\`\`dart
@JsonSerializable()
class UserDto {
  final int id;
  final String name;
  UserDto({required this.id, required this.name});
  factory UserDto.fromJson(Map<String, dynamic> json) => _$UserDtoFromJson(json);
  Map<String, dynamic> toJson() => _$UserDtoToJson(this);
}
\`\`\`

Use Freezed for state/domain models that need unions, immutability, and equality. Use json_serializable for plain API DTOs. They coexist in the same codebase — different tools for different model roles.`,whenToChoose:{first:"**Choose Freezed when:** you model state (loading/success/error), need immutable data classes with copyWith and value equality, want exhaustive union handling, or your domain entities benefit from immutability. The default for BLoC/Riverpod state classes.",second:"**Choose json_serializable when:** you only need JSON mapping on a simple DTO, immutability and unions are overkill, or you want minimal generated code. Pair it with Freezed in the same project for different model roles."},relatedArticles:["managing-large-flutter-codebases"],relatedGlossary:["reactive-programming","either-failure-pattern"],faqs:[{q:"Does Freezed replace json_serializable?",a:"No — Freezed uses json_serializable under the hood for JSON. Freezed adds immutability, copyWith, equality, and unions on top. You can use both in the same project: Freezed for state/domain, json_serializable for plain DTOs."},{q:"Is Freezed's generated code slow to build?",a:"It adds to build_runner time but is manageable. For large codebases, use `build_runner watch` during development and run full builds in CI. The generated-code size is a trade-off for the runtime safety and ergonomics."},{q:"Do I need value equality for BLoC states?",a:"Yes, if you rely on buildWhen/select comparing previous vs current state. Hand-writing == for every state class is error-prone; Freezed generates correct equality for free. This is a strong reason to use Freezed for state models."},{q:"Can I use Freezed with Dart 3 sealed classes instead of the @freezed union?",a:"Yes, and it is the modern approach. Dart 3 introduced native `sealed` classes with exhaustive `switch`, which covers the union-use-case that Freezed pioneered. You can use `@freezed` with sealed class syntax to get native exhaustive pattern matching plus Freezed's generated `copyWith`, equality, and JSON. If you only need the sealed union without copyWith or equality, a hand-written Dart 3 sealed class is enough and generates nothing. We use Freezed on top of Dart 3 sealed classes for state models that also need copyWith and value equality — the combination is the best of both."}]},{slug:"revenuecat-vs-stripe",title:"RevenueCat vs Stripe: Flutter In-App Subscriptions",seoTitle:"RevenueCat vs Stripe: Flutter Monetization Compared",description:"RevenueCat vs Stripe for Flutter: App Store/Play subscriptions vs custom payments — what a 5M-user app uses and why you likely need both.",subjects:["RevenueCat","Stripe"],category:"Monetization",date:"2026-08-10",dateModified:"2026-08-10",quickAnswer:`**They are not competitors — they handle different payment surfaces. RevenueCat manages App Store and Play Store in-app subscriptions (the only way to sell digital goods inside a mobile app). Stripe handles web/external payments and is how mobile apps sell subscriptions *outside* the app (to avoid the 30% store cut).**

At iStoria we use **RevenueCat** for in-app iOS/Android subscriptions because it abstracts StoreKit/Play Billing, cross-platform entitlements, and receipt validation. We use **Stripe** for web checkout. Many apps need both — RevenueCat inside the app, Stripe on the web — with entitlements unified.`,detailedComparison:`## The payment surface split

Apple and Google **require** digital goods sold inside an iOS/Android app to go through their stores (StoreKit / Play Billing), taking 15-30%. You cannot use Stripe for an in-app digital subscription. Stripe is for payments that happen **outside** the app — a web checkout, a customer support flow — where you can avoid the store cut.

So the question is not RevenueCat *or* Stripe; it is which surface you are monetizing on.

## What RevenueCat does

RevenueCat is a **subscription management layer** over StoreKit and Play Billing. It handles:
- Purchasing flows (presenting paywalls, completing transactions)
- Receipt validation server-side (so you trust entitlements)
- Cross-platform entitlement syncing (user subscribes on iOS, gets access on Android and web)
- Webhooks to your backend for entitlement changes
- Analytics (MRR, churn, conversion) in one dashboard
- A/B testing paywalls

Writing this yourself against raw StoreKit + Play Billing + a validation server is months of work and ongoing maintenance as Apple/Google change rules. RevenueCat is the standard for a reason.

## What Stripe does

Stripe is a general-purpose **payment processor**: cards, Apple Pay/Google Pay (on web), bank transfers, subscriptions, invoicing. Use it when the transaction happens outside the app stores — typically a web checkout that creates or extends an entitlement.

## Unifying entitlements

The production pattern: RevenueCat handles in-app subscriptions and publishes entitlement webhooks to your backend; Stripe handles web payments and also writes entitlements to the same backend. Your app checks a single entitlement source (your backend or RevenueCat's dashboard) regardless of where the purchase happened. RevenueCat can even ingest Stripe purchases to unify the view.

## Cost model

RevenueCat is free up to $10K monthly tracked revenue, then a percentage. Stripe charges per-transaction (2.9% + 30¢ typical). For a subscription app, RevenueCat's fee is the cost of not rebuilding StoreKit/Play Billing infrastructure; for web payments, Stripe's fee is the cost of card processing.`,comparisonTable:{headers:["Feature","RevenueCat","Stripe"],rows:[["Surface","In-app (App Store / Play Store)","Web / external checkout"],["Handles StoreKit/Play Billing","Yes (abstracted)","No"],["Receipt validation","Server-side, managed","N/A (Stripe validates its own)"],["Cross-platform entitlements","First-class","Via your backend"],["Store cut (15-30%)","Yes (mandatory)","No (web checkout)"],["Webhooks","Entitlement events","Payment events"],["Analytics","Subscription MRR/churn","General payments"],["A/B testing paywalls","Built-in","DIY"],["Use together?","Yes — unified entitlements","Yes — unified entitlements"]]},codeComparison:`### In-app subscription — RevenueCat

\`\`\`dart
await Purchases.configure(PurchasesConfiguration('public_sdk_key'));

// present offering and purchase
final offering = await Purchases.getOfferings();
final customerInfo = await Purchases.purchasePackage(
  offering.current!.availablePackages.first,
);
if (customerInfo.entitlements.active['pro'] != null) {
  // user has pro entitlement — cross-platform
}
\`\`\`

### Web checkout — Stripe

\`\`\`dart
// your backend creates a Stripe Checkout Session
final session = await api.createCheckoutSession(userId, planId);
// redirect user to session.url on web; Stripe handles payment
// on success, your backend writes the entitlement and (optionally)
// notifies RevenueCat to unify the view
await api.syncEntitlementToRevenueCat(userId);
\`\`\`

RevenueCat owns the in-app purchase + entitlement; Stripe owns the web payment; your backend unifies entitlements so the app checks one source regardless of where the purchase happened.`,whenToChoose:{first:"**Choose RevenueCat when:** you sell digital subscriptions inside the iOS/Android app (you must use the stores), you need cross-platform entitlement syncing, or you want paywall A/B testing and subscription analytics without building StoreKit/Play Billing infrastructure. The default for in-app subscriptions.",second:"**Choose Stripe when:** the payment happens on the web or outside the app (to avoid the store cut), you sell physical goods or services, or you need custom billing/invoicing. Often paired with RevenueCat so entitlements unify."},relatedArticles:["managing-large-flutter-codebases"],relatedGlossary:["modular-architecture"],faqs:[{q:"Can I use Stripe inside a Flutter app to sell subscriptions?",a:"Not for digital goods — Apple and Google require those to go through their stores. Stripe is for payments that happen outside the app (web checkout) or for physical goods/services. Use RevenueCat inside the app, Stripe on the web."},{q:"Do I need both RevenueCat and Stripe?",a:"If you sell on both mobile (in-app) and web, yes — RevenueCat for the in-app subscriptions, Stripe for web checkout, with your backend unifying entitlements. If you only sell in-app, RevenueCat alone is enough."},{q:"Is RevenueCat worth the fee?",a:"For any serious subscription app, yes. The alternative is building receipt validation, cross-platform entitlement sync, paywall A/B testing, and analytics yourself against StoreKit and Play Billing — months of work plus ongoing maintenance as store rules change. RevenueCat's fee buys that for free up to $10K MTR."},{q:"How do I handle entitlements when a user subscribes on web via Stripe but uses the mobile app?",a:"The pattern is: Stripe webhook hits your backend on successful payment → your backend writes the entitlement to its own database and calls RevenueCat's REST API to grant the entitlement there too. The mobile app then reads entitlements from RevenueCat (or your backend) and sees 'pro' regardless of whether the purchase happened in-app or on the web. The reverse works identically — RevenueCat webhooks hit your backend, which can sync to Stripe if needed. The unification point is your backend; never let the app talk to Stripe directly for entitlement checks."}]},{slug:"sentry-vs-firebase-crashlytics",title:"Sentry vs Firebase Crashlytics: Flutter Crash Monitoring",seoTitle:"Sentry vs Firebase Crashlytics: Compared",description:"Sentry vs Firebase Crashlytics for Flutter: grouping, release tracking, performance, source maps, and why a 5M-user app standardized on Sentry.",subjects:["Sentry","Firebase Crashlytics"],category:"Quality",date:"2026-08-10",dateModified:"2026-08-10",quickAnswer:`**Use Sentry if you want best-in-class error grouping, release health tracking, performance monitoring, and rich context (breadcrumbs, tags, user scope) in a single dashboard. Use Firebase Crashlytics if you are already deep in Firebase and want crash reporting with zero additional vendor overhead.**

At iStoria we standardized on **Sentry** because crash-free rate alone is not enough — I need to know *which release* introduced a regression, see the breadcrumb trail that led to a crash, and correlate errors with releases and source maps. Crashlytics is fine for basic crash counts; Sentry is a quality platform.`,detailedComparison:`## Grouping and noise

Sentry's **fingerprinting and grouping** is meaningfully better. It groups similar stack traces intelligently, lets you custom-fingerprint (e.g. group by error code), and deduplicates noise. Crashlytics groups more crudely, which leads to either one issue ballooning with unrelated traces or many duplicate issues.

For a 5M-user app where one crash can generate thousands of events, grouping quality is the difference between a triageable inbox and an ignored one.

## Release health and regression detection

Sentry's **Release Health** tracks crash-free sessions, adoption, and issue counts **per release** — so you can see "crash-free rate dropped from 99.9% to 99.6% in v3.4" and link it to the commits in that release. Crashlytics shows crash-free users/sessions but with less release-correlation tooling.

This is the feature that made us pick Sentry. When a regression ships, I want to know the release and the commit range within minutes, not after digging through Crashlytics filters.

## Performance monitoring

Sentry bundles **performance tracing** (Dart spans, HTTP spans, navigation) alongside errors, so you see slow transactions correlated with errors in the same view. Crashlytics is crash-only; you pair it with Firebase Performance for tracing, which is a separate product and dashboard.

Having errors and traces in one platform is a real workflow advantage for incident triage.

## Context and breadcrumbs

Sentry's **breadcrumbs** (navigation events, HTTP calls, UI taps leading up to a crash) and rich scoping (tags, user context, extra data) give you the reproduction path without a user report. Crashlytics has custom keys and logs but the breadcrumb model is less automatic.

## Firebase integration

If you are already all-in on Firebase (Auth, Firestore, Messaging), Crashlytics is zero-marginal-vendor and integrates with the Firebase console. Sentry is a separate platform. For a Firebase-native team that only needs crash counts, Crashlytics is the path of least resistance.

## Cost

Both have free tiers. Sentry's paid plans scale with events volume; Crashlytics is effectively free (part of Firebase) but you pay for Firebase Performance if you need tracing. For a quality-obsessed app, Sentry's cost is justified by faster regression detection.`,comparisonTable:{headers:["Feature","Sentry","Firebase Crashlytics"],rows:[["Grouping / fingerprinting","Excellent (custom rules)","Basic"],["Release health tracking","First-class (per release)","Crash-free rate, less correlation"],["Performance tracing","Bundled","Separate (Firebase Performance)"],["Breadcrumbs","Automatic, rich","Custom logs/keys"],["Source maps / symbolication","Yes (uploaded per release)","Yes (via dSYM/upload symbols)"],["Dashboard","Unified errors + perf","Firebase console (crash-focused)"],["Setup cost","Separate platform","Zero if already on Firebase"],["Flutter SDK","First-class","First-class"],["Best for","Quality-obsessed, regression tracking","Firebase-native, basic crash counts"]]},codeComparison:`### Sentry — release-scoped capture with breadcrumbs

\`\`\`dart
await Sentry.init((options) {
  options.dsn = 'https://...@sentry.io/...';
  options.tracesSampleRate = 1.0;
  options.release = 'istoria@3.4.0+120'; // enables release health
});

// scoped context — breadcrumbs captured automatically
await Sentry.configureScope((scope) {
  scope.setUser(SentryUser(id: userId));
  scope.setTag('plan', 'pro');
});

await Sentry.captureException(exception, stackTrace: stack);
\`\`\`

### Firebase Crashlytics — basic crash capture

\`\`\`dart
await Firebase.initializeApp();
FlutterError.onError = FirebaseCrashlytics.instance.recordFlutterFatalError;

// custom keys for context
await FirebaseCrashlytics.instance.setUserIdentifier(userId);
await FirebaseCrashlytics.instance.setCustomKey('plan', 'pro');
await FirebaseCrashlytics.instance.recordError(exception, stack, fatal: false);
\`\`\`

Both capture crashes. Sentry adds release-scoped regression tracking, performance traces, and richer breadcrumbs — the workflow advantages that matter at scale.`,whenToChoose:{first:"**Choose Sentry when:** you need release health tracking and regression detection per release, want errors and performance traces in one platform, value intelligent grouping and breadcrumbs for triage, or run a quality-obsessed app where fast regression detection saves users. Our production choice.",second:"**Choose Firebase Crashlytics when:** you are already deep in Firebase and want crash reporting with no additional vendor, your needs are crash counts and stack traces, or budget demands the effectively-free option. Pair with Firebase Performance if you need tracing."},relatedArticles:["managing-large-flutter-codebases","github-actions-branch-protection-guardrails"],relatedGlossary:["sentry-flutter","crash-free-rate"],faqs:[{q:"Is Crashlytics free?",a:"Effectively yes — it is part of Firebase and has no separate usage-based pricing for crash reporting. If you add Firebase Performance for tracing, that has its own limits. Sentry has a free tier and paid plans scaling with events."},{q:"Can I run Sentry and Crashlytics together?",a:"Yes, during a migration or for redundancy. Both can capture the same Flutter errors. The overhead is double-reporting and two dashboards to triage, so most teams pick one once they have evaluated."},{q:"How do I get Dart stack traces symbolicated in Sentry?",a:"Sentry's Flutter SDK handles Dart stack symbolication automatically for Dart-originated errors. For native (iOS/Android) frames, upload debug symbols (dSYMs/ProGuard mappings) per release — Sentry's upload tooling integrates with CI. Without symbols, native frames show as unresolved."},{q:"How much overhead does Sentry add to app startup and runtime?",a:"The Sentry Flutter SDK initializes in a few milliseconds on startup — negligible relative to Flutter engine init and first-frame render. At runtime, the SDK captures errors asynchronously; the `tracesSampleRate` controls how many transactions are traced (set it to 1.0 in dev, 0.1-0.2 in production to sample). Breadcrumbs and scope enrichment are trivially cheap. The one thing to watch: if you add heavy custom spans around hot paths (e.g. wrapping every database query), that can add up. Profile with the Flutter Performance overlay before and after integration if you are concerned, but for most apps the overhead is invisible to users and well worth the observability."}]}];export{e as c};
