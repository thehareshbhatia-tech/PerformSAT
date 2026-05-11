# TODOS

## Past-Test-Review

### AbortController for in-flight test fetches — DECISION: DEFERRED (2026-05-11)

**Audit conclusion:** Firebase JS SDK v10.7.1 (current) does NOT accept `AbortSignal` on `getDoc()` or any other read primitive. There is no client-side cancellation API. Implementing an "abort wrapper" at the app level would:

  1. Drop the promise's result on signal (equivalent to what `reviewBundleRequestRef` already does — request-ID guard catches and discards stale data on arrival).
  2. NOT save the Firestore read — the network call still completes server-side and the document is still billed.
  3. Add code complexity (wrapper + signal threading through 2 service layers) for zero observable benefit.

The TODO's premise — that aborting saves cost — is incorrect given the current Firestore SDK. The cost-saving win requires either:
- Firebase adding native cancel (not on their roadmap as of 2026-05),
- Or replacing Firestore reads with a different transport (e.g., fetch + signed URLs), which is a much larger architectural change.

**Decision:** DEFER until either condition above changes. Re-evaluate when upgrading Firebase to v11+ — check release notes for cancel support.

**Adjacent ideas that WOULD save reads (if cost becomes a real concern):**
- Client-side dedupe: if the same `getDoc(refX)` is requested while one is in flight, return the same promise. Net: one read for N concurrent callers.
- Debounce the trigger: 200-300ms debounce on `handleSelectReviewTest` would collapse rapid card-clicks BEFORE the fetch starts. Net: fewer reads when a user scrolls quickly past N cards.

Both are different concerns from AbortController; either could be its own TODO if Firestore cost shows up in production.

### Wire Try-Similar onto ReviewItemCard — DONE (2026-05-11, commit `c217ed9`)

`ReviewItemCard` now accepts an optional `onTrySimilar` prop. When provided, renders a "🔁 Try a similar question" CTA below the explanation. `App.jsx::handleTrySimilarFromReview` calls `pickSimilarQuestion({ currentQuestion: snapshotItem, excludeIds: [snapshotItem.id] })` and on success launches a 1-question `startAssignedPractice` session with `source: 'review-try-similar'`.

Distinct from the in-session `handleTrySimilar` (which inserts into the current drill) — this LAUNCHES a fresh practice flow from review mode.

## AI Tutor

### Section context inside retry-drill review-mode — DONE (2026-05-11, commit `13d597a`)

Shipped option B: AiTutorChat now accepts a `reviewMode` prop (default false). When true, the proactive-recommendation useEffect early-returns — no cross-section "Skill X mastery has dropped" alerts during review mode. AssignedPracticeShell threads `practiceState.reviewMode` through automatically. The student is in INSPECTION mode during review, not LEARNING mode; cross-question advice is noise.

Why option B over option A (threading section through advice picker): treats the symptom at the call site, reversible, no surface-area change to `proactiveRecommendationService`.

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
