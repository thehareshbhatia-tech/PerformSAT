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

## AI Tutor

### Section context inside retry-drill review-mode

**What:** AiTutorChat panel inside `AssignedPracticeShell` retry-drill review mode shows mastery advice from the WRONG section. E.g., reviewing an R&W vocabulary question, the panel surfaces "Your Function Evaluation mastery has dropped to 2%" (a Math skill) with a "Practice this skill" CTA that would yank the user out of review mode.

**Why:** The "Skill needs attention" detection in AiTutorChat doesn't filter by the section of the currently-displayed question. In retry-drill review mode the items can be mixed-section (snapshot questions from a full test), so a fixed-section advice panel can mismatch the actual question.

**Context:** Caught by `/design-review` against perform-sat.vercel.app on 2026-05-10. Pre-existing bug — not introduced by Past-Test-Review tier. Fix is to either (a) thread the current question's `skills`/section into the advice picker so it only surfaces matching-section advice, or (b) suppress the "Skill needs attention" alert entirely when `practiceState.reviewMode` is true (it's noise during review). Option (b) is simpler and probably right.

**Effort:** S
**Priority:** P2
**Depends on:** None

## Drill Routing (exact-question-type)

### R&W exact-match parity — DECISION MADE, DEFERRED (2026-05-11)

**Audit conclusion:** Only ~6 of 648 R&W items (<1%) carry `**SAT Pattern: <Title>**` headers — all in `practiceTest9RW.js` with vocab-specific patterns. Far too sparse for any pattern bucket to reach the Tier-1 threshold of 8 items.

**What was done in this PR:**
- Documented audit conclusion inline in `rwBank/index.js::getTargetedWeaknessSet` JSDoc.
- Added `missedPatterns` to the signature for API symmetry — accepted but a no-op (R&W never produces missedPatterns since the diagnostic engine only populates them for items with `q.satPattern`, which R&W items don't have).
- Pinned the audit in `rwBank.test.js` with a regression-style assertion: if R&W pattern coverage ever grows >= 80 items (~12% of bank), revisit the decision.

**Future work (if R&W routing precision becomes a real complaint):**
- Option A: bulk retro-tag the 648 R&W items with an SAT Pattern taxonomy (12 weeks of authoring; needs canonical R&W pattern list first).
- Option B: route by passage type or question-stem family ("Which choice most strongly supports..." vs "The main purpose of the underlined sentence is...") — finer-grain signal that's already implicit in the data.
- Trigger: real diagnostic telemetry showing students complain about R&W drill targeting feeling generic vs. math drills.

**Status:** DECISION MADE. R&W stays on Tier-3 (skill+domain) routing — already production behavior, no UX regression.

### AdaptivePracticeShell exact-match parity — DONE (2026-05-11, commit `75d8aff`)

`buildDomainAdaptiveQueueSeed` now accepts an optional `weaknesses` argument. When weaknesses carry `missedPatterns` matching the enforced domain AND the resulting pattern pool meets `TIER1_PATTERN_THRESHOLD`, up to half the seed pool is prepended with pattern-matched items (the other half is plain domain shuffle for breadth). Legacy callers (no `weaknesses` arg) get byte-identical seed — pinned by a ★REGRESSION★ test.

`startAdaptivePractice` in `App.jsx` now passes `studyPlan.weaknesses` (filtered to math) into the seed builder. `AdaptivePracticeShell` displays the same "🎯 PRACTICING: <Pattern>" chip beneath its header that `AssignedPracticeShell` uses.

7 new unit tests pin the parity invariant + cross-domain exclusion + dedup behavior.

### Surface `missedPatterns` in drill UI — DONE (2026-05-11, commit earlier this session)

`AssignedPracticeShell` and `AdaptivePracticeShell` both show a "🎯 PRACTICING: <Pattern>" chip beneath the headerTitle whenever the weakness/seed carries a missed SAT Pattern. Powered by `src/services/selectors/missedPatternLabel.js` (formatPatternLabel + pickPrimaryMissedPattern, 15 unit tests covering acronym preservation like SOH/CAH/TOA/FOIL and small-word handling).

Tier-1 routing precision is now VISIBLE to students. With 75 Tier-1 patterns covering 82.8% of main-test items, the chip fires often enough to make the targeting feel real.

## Completed
