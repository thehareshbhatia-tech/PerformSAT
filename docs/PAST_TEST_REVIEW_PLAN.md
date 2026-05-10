# Past-Test-Review Plan

**Status:** DRAFT (replaces the rejected `MATH_BANK_REBUILD_PLAN.md` and `EXAM_PREVIEW_TIER_PLAN.md`)
**Owner:** Claude Code (Opus 4.7)
**Date:** 2026-05-10
**Direction:** Past-Test-Review (decided at autoplan Round 2 premise gate)

## Goal

Let students review and re-drill items from PracticeTests they've **already taken**. Build on the diagnostic engine's per-item error classification to make every wrong answer a teaching moment with the depth the production drill bank doesn't surface today.

## Why this shape

- **Zero IP risk.** Content is PerformSAT-authored test items the student already legitimately accessed.
- **Strengthens the diagnostic moat** (per CLAUDE.md ship history). The 6-class error taxonomy gets surfaced at the item level — exactly where it's most actionable.
- **Builds on existing data.** `practiceTestResults` Firestore + `practiceTest{N}.js` files + `diagnosticEngine.js` outputs are already there.
- **Reuses existing UI.** AssignedPracticeShell can render the retry-drill mode. Try-Similar is already a button. No new question-rendering pipeline.
- **Closes a real student need.** "Why did I get this wrong?" is the most-asked question after a test. Currently, students see scores and Predicted vs Actual but can't drill down to per-item error analysis.

## Architecture

### File layout

```
src/
├── components/
│   └── PastTestReview/                  # NEW namespace
│       ├── PastTestReviewIndex.jsx       # List of completed tests
│       ├── TestReviewDetail.jsx          # Per-test breakdown
│       ├── ReviewItemCard.jsx            # Single-item review
│       └── RetryDrillSurface.jsx         # Drill mode (reuses AssignedPracticeShell)
│
├── services/
│   └── selectors/
│       └── completedTests.js             # NEW — pure selectors over practiceTestResults
```

### Data model — what already exists

```
practiceTestResults (Firestore, per student)
├── { testId, completedAt, scoreOverall, scoreByDomain, ...
│   ├── itemResults: [{ itemId, studentAnswer, correctAnswer, isCorrect, ...
│   │   └── errorClass: 'conceptual' | 'computation' | 'pacing' | ...   ← from diagnosticEngine
└── ...

practiceTest{N}.js (12 tests in repo)
└── { id, modules: [{ questions: [{ id, question, choices, correctAnswer, explanation, ... }] }] }
```

**Verify-first task in Phase 1:** confirm `practiceTestResults` actually persists `itemResults` with `studentAnswer` per item. If it currently only stores aggregate scores, Phase 1 expands to add the per-item write path on test completion.

### UI flow

```
Study Plan dashboard
  └── "Review Your Tests" button (feature-flagged)
       └── PastTestReviewIndex   ─── list: Test 7 — 81% — Reviewed | Test 5 — 67% — Review →
            └── TestReviewDetail (test 5)
                 ├── stats row: 22 items · 15 correct · 7 wrong · by domain
                 ├── error class breakdown (6-class taxonomy)
                 ├── "Retry the 7 wrong" button → RetryDrillSurface
                 └── item list (with filter: all / wrong / by error class)
                      └── ReviewItemCard (one item)
                           ├── original question + your answer (highlighted)
                           ├── correct answer
                           ├── full explanation (existing test-item explanation)
                           ├── error class label + brief explainer
                           └── "Try Similar" button (existing service)
```

### Selectors (Phase 1)

```javascript
// src/services/selectors/completedTests.js
export function getCompletedTests(practiceTestResults) {
  // Returns sorted by completedAt desc with computed: scoreOverall, totalItems, wrongCount
}

export function getTestReview(practiceTestResults, testId, allQuestions) {
  // Joins itemResults with question content from practiceTest{N}.js
  // Returns { stats, byErrorClass, items: [{ ...itemResult, ...question }] }
}

export function getWrongItems(practiceTestResults, testId, allQuestions) {
  // Subset of getTestReview where !isCorrect
}

export function getRetryDrillQueue(practiceTestResults, testId, allQuestions) {
  // Returns shuffled wrong items in drill-shape for AssignedPracticeShell
}
```

### Surface: separate from production drill bank

PastTestReview reads from `practiceTestResults` (per-student Firestore) and `practiceTest{N}.js` (test content). It does NOT read from the production drill bank (`bank/index.js`). Retries use AssignedPracticeShell with a **review-mode flag** so the diagnostic engine knows these are review attempts, not fresh diagnostics — preventing double-counting in Predicted vs Actual.

## Phases

| # | Phase | Deliverable | Effort | Risk |
|---|-------|-------------|--------|------|
| 1 | Verify data shape + selectors | Confirm `itemResults` schema; build `selectors/completedTests.js` with unit tests | ~1.5 hrs | Low (data verification first) |
| 2 | `PastTestReviewIndex` | List of completed tests with stats | ~1.5 hrs | Low |
| 3 | `TestReviewDetail` | Per-test stats + error class breakdown + item list with filters | ~2 hrs | Low |
| 4 | `ReviewItemCard` | Single-item review with your answer, correct, explanation, error class, Try-Similar | ~1.5 hrs | Low |
| 5 | `RetryDrillSurface` | Wrong-items drill via AssignedPracticeShell (review-mode flag, no diagnostic double-count) | ~1 hr | Medium (entanglement with App.jsx practiceState) |
| 6 | Wire into Study Plan dashboard | Entry button below focus areas, behind `useFeatureFlag('pastTestReview')` | ~30 min | Low |
| 7 | Telemetry + success metrics | Log: `opened`, `test_selected`, `item_reviewed`, `retry_started`, `retry_completed`. Document thresholds. | ~30 min | Low |
| 8 | Tests + smoke test | Selector unit tests + Jest tests for components + manual smoke | ~1.5 hrs | Low |
| 9 | Ship | `/ship` workflow | ~1 hr | Low |

**Realistic total:** 10-12 hours of focused work, 1-2 sessions.

## Success metrics (commits made up-front per CEO R2-F3)

- **Adoption:** ≥30% of students with at least one completed test click "Review Your Tests" within 2 weeks of broad enable
- **Engagement:** Median session reviews ≥5 items
- **Retry conversion:** ≥40% of students who land on TestReviewDetail click "Retry the wrong"
- **Sunset trigger:** If Adoption <15% by week 4, re-evaluate (probably means surfacing isn't working)

## Open decisions

### D1. Where does the entry point live?
- **Option A (recommended):** Button on Study Plan dashboard below Today's Tasks
- Option B: New tab next to Dashboard + Study Plan
- Option C: Inline on each completed test in some history view

### D2. Default item list filter
- **Option A (recommended):** Default to "wrong only" (the most actionable view)
- Option B: Default to "all" (more discoverable but more noise)
- Option C: Smart default based on error count

### D3. Retry mode feeds diagnostic engine?
- **Option A (recommended):** NO — retries are explicitly review, marked separately. Avoids double-counting.
- Option B: YES — retries become new data points for prediction validation
- Option C: Hybrid — first retry counts, subsequent retries don't

### D4. Try-Similar in review context
- Already shipped per CLAUDE.md
- **Recommendation:** Show button on every ReviewItemCard so students can drill more practice on the same skill. Reuses `services/trySimilarService.js`.

## Risk register

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| `practiceTestResults` doesn't persist per-item answers | Medium | High | Phase 1 verifies first; if missing, expand Phase 1 to add per-item write path |
| AssignedPracticeShell entanglement makes review-mode hard | Medium | Medium | Use feature-flagged review-mode prop; if blocked, build minimal RetryShell |
| Students get confused — "is this a new drill or a review?" | Low | Medium | Clear visual treatment + breadcrumb ("Reviewing Test 7") |
| Retry results pollute Predicted vs Actual | Low | High | D3 Option A — explicit isolation |
| Double-counting test attempts as new test scores | Low | High | Retry mode does NOT call buildGroundTruthDiagnosis |

## Telemetry events (Phase 7)

```javascript
log('past_test_review.opened',          { studentId });
log('past_test_review.test_selected',   { studentId, testId, completedAt });
log('past_test_review.item_reviewed',   { studentId, testId, itemId, errorClass });
log('past_test_review.try_similar',     { studentId, fromTestId, fromItemId, toItemId });
log('past_test_review.retry_started',   { studentId, testId, wrongCount });
log('past_test_review.retry_completed', { studentId, testId, wrongCount, newCorrectCount });
```

## NOT in scope

- New question content (zero new items in this work)
- Bank rebuild of any kind
- CB Educator Bank ingestion (deferred indefinitely — no demand evidence)
- Figure rendering improvements (separate work)
- Per-test difficulty adjustment

## Why this is the right plan now (vs the two rejected predecessors)

| Dimension | Rebuild plan (rejected) | Augment plan (rejected) | Past-Test-Review (this) |
|-----------|-------------------------|------------------------|-----------------------|
| IP risk | HIGH (1,645 verbatim CB items in production) | MEDIUM (CB items in opt-in tier) | **NONE** (PerformSAT content student already took) |
| Production drill bank | REPLACED | UNCHANGED | UNCHANGED |
| Diagnostic engine impact | Contaminates | Cannibalization risk | **Strengthens** (surfaces 6-class taxonomy at item level) |
| Cost | 7-9 hrs claimed (24-30 realistic) | 8-12 hrs claimed (16-24 realistic) | **10-12 hrs realistic** |
| Demand evidence | None | None | "Why did I get this wrong" is the most-asked post-test question |
| Reversibility | Contaminates Firestore | Trivial flag-off | **Trivial flag-off** |
| Builds on the moat | No (replaces it) | No (could erode it) | **Yes (extends the diagnostic moat)** |
| Net new content | ~1,300-2,000 items | ~928 items | **0 items, all infrastructure** |

## Next /autoplan: skip

This plan is small, builds on existing infrastructure, and has zero IP exposure. A third autoplan run would be process for process's sake. Recommendation: start Phase 1 (data verification + selectors) immediately.

---

# Phase 1 — COMPLETED (2026-05-10)

## Data shape verification

**All required data already persists.** No write-path expansion needed.

### Aggregate doc — `progress/{userId}.practiceTestResults[testId]`
```javascript
{
  testId, testTitle,
  attempts: [               // newest-first, capped at MAX_ATTEMPTS=5
    {
      attemptId, completedAt, rawScore, totalQuestions, scaledScore,
      moduleScores, sectionScores, isMultiSection, timedMode,
      diagnosticData,        // ← latest attempt only (per-question telemetry)
      // diagnosticReport stripped — regeneratable via runDiagnostic
      thetaEstimate, standardError, routeTaken,
      aiArtifactId, studyPlanArtifactId,
    },
    ...
  ],
  bestScaledScore, bestRawScore, totalAttempts, lastAttemptAt,
}
```

### Per-attempt snapshot — `progress/{userId}/attempts/{attemptId}` (subcollection)
```javascript
{
  attemptId, testId, completedAt,
  questionsSnapshot: [
    { id, type, stem, choices, correctAnswer, explanation,
      difficulty, band, skills, moduleIndex, questionIndex },
    ...
  ],
  answers: { "modIdx-qIdx": userAnswer },
  snapshotVersion: 1,
}
```

### Per-question telemetry — `attempts[0].diagnosticData.questionDetails`
```javascript
{
  "modIdx-qIdx": {
    isCorrect, timeSpent, visits, answerChanges, answerChangeEvents,
    usedCalculator, markedForReview, eliminatedChoices,
    difficulty, skills,
  },
  ...
}
```

### Existing infrastructure leveraged
- `services/diagnosticReportLoader.js::loadDiagnosticReportData` — async loader that fetches snapshot, builds review-shaped test, reconstructs answers, regenerates diagnosticReport via runDiagnostic. **Phase 4 (ReviewItemCard) will use this directly.**
- `selectors/recentTest.js::pickMostRecentTest` — already exists.
- `services/diagnosticEngine.js::runDiagnostic` + `ERROR_TYPES`/`ERROR_TYPE_LABELS` — 6-class taxonomy already defined.

## Deliverables shipped this phase

- `src/services/selectors/completedTests.js` — 7 pure selectors (190 lines):
  - `itemKey(modIdx, qIdx)` — canonical join key
  - `getCompletedTests(practiceTestResults)` — sorted summary list
  - `getLatestAttempt(practiceTestResults, testId)` — latest attempt (with diagnosticData)
  - `extractItemsFromAttempt(attempt)` — flat per-item review entries
  - `getWrongItems(attempt)` — !isCorrect filter
  - `groupItemsByErrorClass(items, diagnosticReport)` — 6-class bucketing with mixed-fallback
  - `computeReviewStats(attempt)` — total/correct/wrong/accuracy

- `src/services/selectors/__tests__/completedTests.test.js` — 23 unit tests, all passing
  - Covers: null/empty/malformed input, sort ordering, Firestore timestamp shapes, skill→class mapping with fallback

## Time taken
~30 min (vs 1.5 hr estimate). Existing infrastructure was richer than the plan assumed.

