# TODOS

## Past-Test-Review

### AbortController for in-flight test fetches

**What:** Thread an `AbortSignal` through `services/diagnosticReportLoader.js::loadDiagnosticReportData` → `services/practiceTestService.js::loadAttemptSnapshot` so a rapidly-superseded fetch is actually cancelled at the Firestore layer.

**Why:** The current request-ID guard (`reviewBundleRequestRef` in `App.jsx::handleSelectReviewTest`) prevents stale state — late-arriving results from older fetches are dropped. But the underlying Firestore `getDoc()` call still completes, wasting a read. On a slow network with rapid card-clicking, this adds up.

**Context:** Firestore's web SDK `getDoc` doesn't honor `AbortSignal` natively, so the implementation would wrap the promise + manual ignore-on-signal pattern (the network call still completes, but our code drops the result). Net behavior is equivalent to what `reviewBundleRequestRef` already does. The real win is in cost: every aborted fetch saves a Firestore read. Investigate whether Firestore SDK has native cancel support before implementing.

**Effort:** M
**Priority:** P3
**Depends on:** None

### Wire Try-Similar onto ReviewItemCard

**What:** Wire an "Try a similar question" CTA on `ReviewItemCard` that calls `services/trySimilarService.js::pickSimilarQuestion` and launches a single-question `AssignedPracticeShell` session for the same skill.

**Why:** Plan D4 explicitly endorsed Try-Similar on every ReviewItemCard. The retry-drill flow already has Try-Similar mid-session, but a user browsing wrong items without entering retry-drill should be able to drill more practice on a specific skill from the per-item view too.

**Context:** Phase 6 of `docs/PAST_TEST_REVIEW_PLAN.md` originally scoped this in but it was deferred so the rest could ship. App.jsx already imports `pickSimilarQuestion`. Plumbing: pass `onTrySimilar` from App.jsx through to `ReviewItemCard`, on click call `pickSimilarQuestion({ currentQuestion: snapshotItem, excludeIds: [snapshotItem.id] })`, on success launch a 1-question `startAssignedPractice` session. The current code already drops the JSDoc/JSX for `onTrySimilar` (cleaner contract).

**Effort:** S
**Priority:** P3
**Depends on:** None

## Completed
