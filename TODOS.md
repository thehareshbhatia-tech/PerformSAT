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

### R&W exact-match parity

**What:** Audit R&W bank items (`src/data/questions/rwBank/index.js`, 648 items flattened from 12 test bundles) for whether their `explanation` fields carry `**SAT Pattern: <Title>**` headers. If yes, extend the two-tier cascade in `getTargetedWeaknessSet` to R&W weaknesses. If no, decide whether to enrich R&W explanations or use a different routing taxonomy.

**Why:** Math focus areas get Tier 1 (exact SAT Pattern) + Tier 2 (sourceStyleRef) precision after this PR ships. R&W focus areas continue using skill-only routing. UX asymmetry — a student should not notice "the math drills feel more targeted than the R&W drills."

**Context:** This batch (math drill routing) ships `extractSatPattern.js` as a generic utility — reusing it for R&W is the easy part. The audit is the unknown: R&W explanations may use a different structural convention (R&W items were authored separately from the test-bundle-format math enrichment). Start by grepping `rwBank/*.js` for `SAT Pattern:`. If coverage is high, parallel implementation. If low or absent, propose a "Skill Pattern" taxonomy specific to R&W (e.g., `central-idea-vs-detail`, `cross-text-synthesis`).

**Effort:** M
**Priority:** P2
**Depends on:** Math drill routing shipped first (this PR).

### AdaptivePracticeShell exact-match parity

**What:** Extend the two-tier cascade to fire when drills are launched from `AdaptivePracticeShell.jsx` (not just `AssignedPracticeShell.jsx`). Currently `getTargetedWeaknessSet` is called from the study-plan-driven (assigned) flow; the adaptive flow uses different selection logic.

**Why:** Students who launch the adaptive practice flow (separate from the study plan) miss out on Tier 1/2 precision. The architecture is in place after this PR — wiring it into the adaptive shell is mechanical.

**Context:** Per CLAUDE.md, AdaptivePracticeShell is "Alternate adaptive practice (difficulty adjusts)" with `practiceMode='adaptive'`. The state/wiring differ from AssignedPracticeShell. CLAUDE.md also lists "AdaptivePracticeShell rounds parity (~30 min follow-up once AssignedPracticeShell rounds prove out)" as deferred — exact-match parity is a sibling concern; both could be bundled into one AdaptivePracticeShell refresh.

**Effort:** S-M
**Priority:** P3
**Depends on:** This PR; AdaptivePracticeShell rounds parity could be bundled.

### Surface `missedPatterns` in drill UI

**What:** Show students a label like "Practicing: Reverse-Percent" or "Drilling 5 Sum-of-Parts Ratio problems" in the `AssignedPracticeShell` header or focus area card. Sourced from `weakness.missedPatterns` and the tier that fired (visible via `[performsat:drill-routing]` log today).

**Why:** Transparency. Tier 1 routing is currently invisible to the student — they get a more-targeted drill but don't know it's targeted. Surfacing the pattern transforms invisible routing into perceived intelligence. Strong A/B candidate.

**Context:** Premature today — Tier 1 will rarely fire in v1 (bank density is ~1.5 items/pattern). The visible UX delta arrives when Phase 2 bank expansion ships (≥8 items per pattern). Re-evaluate this TODO after Phase 2 lands. Risk: surfacing now would mislead students about precision. Counter-risk: surfacing later (after they're used to skill-only labels) might feel cold/algorithmic. A/B test before rolling out.

**Effort:** S
**Priority:** P3
**Depends on:** Phase 2 bank expansion to make Tier 1 fire reliably.

## Completed
