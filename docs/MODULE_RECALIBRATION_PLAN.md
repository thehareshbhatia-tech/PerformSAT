# Module 1 + Module 2 Recalibration Plan — CB Authenticity Round

## Background

PerformSAT has been through 5+ Module 1/2 recalibration rounds (most recent: `791c257` on 2026-04-08, "Recalibrate all 12 practice tests Module 1 to CB+ difficulty"). Despite the progress, current questions still don't fully match the *style and authenticity* of real CollegeBoard SAT items.

Concrete deficiencies in current state (Test 1 Module 1 audit):

- **Domain mix is unbalanced.** Test 1 M1 = ~9 Advanced Math, ~7 Algebra, ~4 PSDA, only ~2 Geometry-Trig. Real digital SAT M1 is closer to 7/7/4/4.
- **Easy items below CB easy floor.** `module1-test-1-upgrade-proposal.md` flagged Q1, Q2, Q3, Q5 as "below CB easy floor" — they are pure 1-step translations, where CB easy items already contain a substitution trick or shifted-output step.
- **CB Educator QBank stems not fully fetched.** `module1-calibration-test-1.md` shows many `null — _(stem not yet fetched)_` entries; only ~73% of 1,756 QBank items have full content cached. Calibration is currently flying partially blind.
- **No Module 2 calibration tooling.** `calibrateModule1.mjs` exists; there is no `calibrateModule2.mjs`. Module 2 has been edited by hand without QBank-grounded reference.

## Goals

1. **CB authenticity bar.** Every question (stem, choices, distractors, explanation) must read as if it came from PT 4-11 or the Educator QBank. This is the hard requirement.
2. **Module 1: slight bump + 4-domain versatility.** Each test's M1 should cover all 4 SAT Math domains in proportions close to the real digital SAT.
3. **Module 2: much harder than Module 1.** Both adaptive tracks (easy + hard) get a floor lift, but the hard track jumps substantially above M1.

Non-goals (this round):

- Adding Reading & Writing tests (codebase is Math-only; R&W is a separate effort).
- Changing the IRT scoring engine internals.
- Re-doing hand-authored bank items in `algebra.js`, `advancedMath.js`, etc. — only practice-test items.

## Reference materials

- `reference/college-board/sat-practice-test-{4..11}-digital.pdf` — 8 official CB digital PDFs, locally available.
- `scripts/generated/cbEducatorQBank.json` — 1,756 official Math items (E/M/H tags + score_band).
- `scripts/generated/cbEducatorQBankIndex.json`, `cbEducatorQBankLookup.json` — supporting indexes.

PT 12 PDF is not local but available on CB's site; we can fetch it before extraction.

## CB authenticity rubric

A written rubric will live at `docs/CB_AUTHENTICITY_RUBRIC.md`. It covers:

### Stem patterns observed in CB items

- **Shifted-output (easy ceiling, band 3):** "If $3x - 8 = 7$, what is $3x + 8$?"
- **Reverse-percent (easy ceiling):** "If 35% of total is 1,260, what is the total?"
- **Two-step setup (medium):** "An equation is given. Then evaluate at a shifted input."
- **System inference (medium-hard):** Two equations describe a context; ask about a derived quantity.
- **Concept fusion (hard):** Discriminant + system, vertex form + coordinate geometry, exponent rules + radicals.
- **Function transformation (hard):** "If $f(x) = ...$ and $g(x) = f(x-h) + k$, ..."

### Distractor logic

Every choice corresponds to a specific student misconception:
- One distractor catches "stops one step early" (returns intermediate value).
- One distractor catches "applies the inverse operation" (e.g., adds instead of subtracts).
- One distractor catches "off-by-one" or "uses the wrong base value."
- One choice is correct.

Distractors that are random or "nonsense numbers" fail the rubric.

### LaTeX & formatting

- Inline math via `$...$` (not `\(...\)`).
- Block formulas via `$$...$$`.
- Variables italic (handled by `$x$` automatically); units roman (`\text{m}^2$`).
- No HTML inside questions; tables via Markdown rendered downstream.

### Score_band → E/M/H mapping (from QBank)

- band 1-3 → easy
- band 4-5 → medium
- band 6-7 → hard

### Explanation pattern (PerformSAT-specific)

Existing explanations open with `**SAT Pattern: ...**` then `**Choice X is correct.**` then walk through. Keep this — it's good pedagogy, just ensure the pattern name maps to a CB-recognized pattern.

## Module 1: target structure

| Slot range | Difficulty | Count | CB band target |
|------------|-----------|-------|----------------|
| Q1–Q5 | easy | 5 | top of easy band (band 3, not band 1) |
| Q6–Q14 | medium | 9 | top of medium band (band 5) |
| Q15–Q22 | hard | 8 | top of hard band (band 7) |

Total: 5E / 9M / 8H — **preserved**, but every item upgraded to top-of-band.

### Domain target (per Module 1)

| Domain | Target count | Real SAT M1 ≈ |
|--------|-------------|---------------|
| Algebra | 7 | 7 |
| Advanced Math | 6 | 7 |
| Problem-Solving & Data Analysis | 5 | 4 |
| Geometry & Trigonometry | 4 | 4 |

Slight PSDA over-weight is intentional — it's the most "transferable" domain for diagnostic value.

## Module 2: target structure

Module 2 currently has two tracks selected by `determineRoute` based on Module 1 accuracy ≥ 60% threshold (`src/services/scoring/calibration.js:73-77`).

### Module 2 — easy track

- Floor lifted to current Module 1 medium level.
- Distribution: 4E / 12M / 6H (was probably more easy-heavy).
- Domain mix same as M1: 7/6/5/4.

### Module 2 — hard track

- Floor lifted **substantially** above current M1.
- Distribution: 0E / 6M / 16H — heavy on hard.
- Hard items source from QBank `difficulty:"H"` AND `score_band ≥ 6`.
- Several "concept fusion" hand-authored items above CB hard ceiling for top scorers.
- Domain mix same as M1.

### Routing threshold — deferred

Ship harder content with `DEFAULT_ROUTING_THRESHOLD = 0.60` unchanged this round. After deploy, observe the live route distribution for ~2 weeks. Tune threshold (likely down to 55% or via per-form `loadRoutingOverrides`) in a follow-up. Reason: bundling threshold change with content change makes it impossible to attribute score shifts to either lever.

## Pipeline & tooling

### Step 1 — Combine M1+M2 calibrators into one `scripts/calibrateModule.mjs`

Single tool with flags `--module=1|2` and (for M2) `--track=easy|hard`. Shares:
- QBank loader
- Skill → CB skill_desc mapping (`SKILL_TO_CB`)
- Domain coverage analyzer (NEW — for each test, report current 4-domain distribution and gap to target 7/6/5/4)
- Markdown report renderer

The existing `scripts/calibrateModule1.mjs` is renamed and extended; a thin wrapper preserves the old command if anything in `package.json` references it.

### Step 2 — Re-run extraction over PT 4-11

`scripts/officialQuestionBankPipeline.mjs all --tests=4,5,6,7,8,9,10,11 --variations=5` — refreshes `pdfExtracted.json` with the latest CB material. (PT 12 PDF deferred to a future round.)

### Step 3 — Apply swaps

Swaps are **human-authored from CB-grounded proposals**, not autogenerated. The pipeline produces candidate markdown; engineer (Claude) writes the final question with proper LaTeX, distractors, and PerformSAT explanation format.

For QBank items where the stem is not yet cached (`null — _(stem not yet fetched)_`), use the skill+difficulty+score_band metadata as a calibration anchor — pick a fully-cached sibling item at the same skill+band as the style reference. Do not block on completing the 463 missing stems; that's a future-round nice-to-have.

### Step 4 — Lint authored questions against the rubric AND uniqueness gate

`node scripts/calibrateModule.mjs --lint --test=N` checks every question in the test file against the CB authenticity rubric:
- MC items have exactly 4 choices, fill-in items have an answer
- `band` field set (1-7)
- LaTeX uses `$...$` (inline) and `$$...$$` (block) — no `\(...\)`
- Explanation opens with `**SAT Pattern: ...**` and contains `**Choice X is correct.**`
- Each distractor has a misconception comment (`// distractor: stops one step early`)

**IP uniqueness gate (NEW — same gates the rewrite pipeline uses):** every authored swap is checked against every cached `cbEducatorQBank.json` stem. If Jaccard token similarity > 0.78 OR 3-gram overlap > 0.60, the swap is **rejected with a "too close to QBank item {id}" error**. This applies the same safeguard the auto-rewriter has (`scripts/officialQuestionBankPipeline.mjs`) to manually-authored content, preventing CB IP exposure from drift toward "lightly-edited copy."

Fails with file:line on violations. Wired into `npm run bank:lint:rubric` so CI catches drift.

### Step 5 — Validate

#### Bank-level checks (extend `scripts/testPipeline.mjs`)

1. Each Module 1 covers all 4 domains (target ±1: Algebra 6-8, AdvMath 5-7, PSDA 4-6, Geo-Trig 3-5).
2. Each Module 1 has 5/9/8 difficulty mix.
3. Each Module 1 question has `band` field set in 1-7 range.
4. Each Module 2 hard track has zero `difficulty:"easy"` items.
5. Each Module 2 hard track has every item with `band ≥ 6`.

`npm run bank:validate` (existing 73 checks) must continue to pass.

#### Unit tests

**`src/services/scoring/__tests__/scoringSchema.test.js` (NEW)**
- band=1 → b≈-1.5; band=3 → b≈-0.5; band=5 → b≈0.0; band=7 → b≈+1.5
- band absent + difficulty=easy → b=-1.0 (existing default preserved)
- band + override → override wins
- invalid band (0, 8, "foo") → falls back to difficulty default without throwing

**`src/services/__tests__/practiceTestService.test.js` (NEW)**
- new attempt persists `questionsSnapshot` array on `progress/{userId}` doc
- update-attempt flow preserves snapshot for the latest attempt
- `trimAttempts` strips snapshot from non-latest attempts (mirroring diagnosticData behavior)
- legacy attempt (no snapshot) still readable

**`scripts/__tests__/calibrateModule.test.mjs` (NEW)**
- `--module=1` produces report shaped like existing `module1-calibration-test-{N}.md`
- `--module=2 --track=hard` filters QBank to `difficulty:"H"` AND `score_band ≥ 6`
- `--module=2 --track=easy` filters appropriately
- `analyzeDomainCoverage` flags Test 1's current 7/9/4/2 as Geo-Trig under-coverage
- `--lint` rejects: MC with 3 or 5 choices, missing `band`, `\(...\)` LaTeX, missing `**SAT Pattern:` opener
- `--lint` passes well-formed question

#### Regression test (CRITICAL — non-negotiable per /plan-eng-review)

**`src/services/scoring/__tests__/scoring-regression.test.js` (NEW)**

The whole point of band-aware IRT is to **change scaled-score behavior** for the same answer pattern. We need a fixed-answer-pattern → expected-scaled-score snapshot to prove the change is intentional and within bounds.

- Fixture: a synthesized 22-item Module 1 + 22-item Module 2 hard track with every item carrying explicit `band` values (3 band-1, 4 band-3, 5 band-5, 5 band-6, 5 band-7 spread across modules).
- Fixed answer pattern: 14/22 correct in Module 1 (mix of bands), 12/22 correct in Module 2 hard.
- Expected scaled score window: pre-recorded at first run (e.g., 620 ± 10).
- Test asserts current scoring stays within ±10 of the pre-recorded baseline. CI fails if scoring drifts unexpectedly.

#### E2E / pilot via /browse (Task #6)

- Path 1: Recalibrated Test 1 happy flow (M1 → routing → M2 hard → score → Review Answers).
- Path 2: Legacy attempt review (use a pre-existing Firestore attempt without snapshot — verify "Questions updated" notice).
- Path 3: Mid-range scoring around the 60% threshold (verify routing decision flips correctly).

## Pilot-then-propagate strategy

### Pilot: Test 1 only

1. Apply Phases 1-7 to Test 1 alone.
2. Visual verification via `/browse`: take Test 1 in the running app, observe Module 1 → routing → both M2 paths → scoring → study plan.
3. User reviews and approves Test 1 quality.

### Propagation: Tests 2-12

Only after Test 1 lands well. Each test gets unique items (no skill repetition pattern) so students who take multiple tests don't see similar problems.

## Migration safety

- **Active student data — snapshot questions in per-attempt subcollection.** Question IDs stay stable across content swaps, but the **Review Answers** flow reads questions live from `practiceTest*.js`, which means a content swap would re-render stems under a student's old chosen letter. Fix: extend `recordPracticeTestResult` (`src/services/practiceTestService.js:41-57`) to additionally write a snapshot doc at `progress/{userId}/attempts/{attemptId}` containing `{ id, type, stem, choices, correctAnswer, explanation }` per item answered. **NOT inline in the main `progress/{userId}` doc** — per-attempt docs avoid the 1MB doc-size limit (12 tests × 5 attempts × ~90KB each would push the inline doc to ~1.3MB). Review Answers fetches the attempt-specific snapshot doc on click; falls back to live test only if snapshot missing (legacy pre-deploy attempts). One additional Firestore read per Review Answers click (acceptable — that screen is rarely opened). Pre-deploy attempts without snapshots get a one-time "Questions updated — original problems no longer available for review" notice.
- **IRT calibration.** The IRT engine uses per-question difficulty params. Adding harder items requires a manual review of `src/services/scoring/irtEngine.js` calibration tables to ensure new hard items have appropriate `b` (difficulty) parameters. **TBD by /plan-eng-review.**
- **Diagnostic flow.** `DashboardDiagnosticWidget.jsx` and `DiagnosticReport.jsx` consume aggregated question results. Per user feedback: diagnostic content stays pure narrative; no behavior change required as long as scoring outputs the same shape.

## Architecture decisions (locked by /plan-eng-review)

- **Band-aware IRT parameters.** Introduce `band` (1-7) field on questions, mirroring CB `score_band`. Update `resolveItemParams` in `scoringSchema.js` to map band→b: band 1 ≈ -1.5, band 3 ≈ -0.5, band 5 ≈ 0.0, band 7 ≈ +1.5. Backwards compatible — items without `band` fall back to existing E/M/H defaults (`b = -1.0 / 0.0 / +1.5`). Without this, scaled scores would drift upward (estimated 20-50 points based on logit shift × IRT slope; the regression test will measure the actual delta and lock it in).
- **Question snapshot in per-attempt subcollection.** Snapshot doc at `progress/{userId}/attempts/{attemptId}` so doc size stays bounded. Review Answers fetches the snapshot on demand. Falls back to live test for legacy pre-deploy attempts.
- **CB IP uniqueness gate on human-authored swaps.** Every revised question runs through Jaccard ≤ 0.78 / 3-gram ≤ 0.60 vs all cached QBank items. Same gate the auto-rewriter uses, applied to manual authoring.
- **Authenticity calibration set as exit gate.** 20 CB QBank items + 20 PerformSAT items rated 1-5 blind for "feels CB-grade." Round 6 isn't done until ≥80% of revised items rate ≥4 with ≤0.5-pt avg gap to CB items. Replaces the vague "looks CB-like" target that failed rounds 1-5.

## Open questions for /plan-eng-review

1. ~~**IRT recalibration.**~~ — locked: band-aware b-parameters.
2. **Module 2 routing threshold.** 60% → 55% — confirm this won't break existing student score reports.
3. **Skill alias map.** `SKILL_ALIAS_MAP` in `src/data/questions/bank/index.js` bridges practice-test skills to taxonomy skill IDs. Any new skills introduced from QBank need to be mapped here.
4. **Question ID stability.** When swapping content under the same `id`, do any caches (Firestore, localStorage) need invalidation?
5. **Pipeline regression risk.** Does extending `calibrateModule1.mjs` and adding `calibrateModule2.mjs` require updates to `npm run bank:test` (73 automated checks)?
6. **Test 1 visual verification scope.** Confirm /browse can complete Module 2 hard track without timing out (98 minutes of test time + scoring).

## Validation gates

- `npm run lint` clean.
- `npm run bank:validate` clean (73 + 4 new = 77 checks).
- `npm run bank:test` clean.
- Manual /browse pass on Test 1: M1 + M2 hard + M2 easy + study plan all render correctly.
- User sign-off after Test 1 pilot.

## Rollback plan

All changes are in version-controlled JS files under `src/data/practiceTests/`. If the recalibration produces poor results, `git revert` of the commit per test or per module is straightforward. No DB migrations, no schema changes.

## Estimated scope (revised after outside-voice review)

Past 5 rounds didn't converge. Estimates here assume that's because authoring quality (not tooling) is the bottleneck, so per-test review takes longer than mechanical propagation suggests.

- **Pre-work (calibration set + tool extensions):** ~1 day.
  - Build authenticity calibration set (20+20 items, blind-rate baseline).
  - Combine M1+M2 calibrators into one `calibrateModule.mjs` with `--lint` + uniqueness gate.
  - Add `band` field + extend `resolveItemParams`.
  - Snapshot subcollection wiring.
- **Pilot Test 1 (M1 + M2 both tracks, 66 questions to review/swap):** ~1 day of careful authoring + 1-2 hours of /browse verification.
- **Propagation Tests 2-12 (11 tests × 66 questions = 726 questions to review/swap):** **3-5 days, not 1-2.** Each test needs human review against the rubric AND the calibration set; mechanical propagation will fail the authenticity gate.
- **Validation + regression test + cross-checks:** ~half-day.

**Total: ~6-8 days** (was estimated 2-3 days pre-review).

## NOT in scope (deferred)

These items were considered and explicitly deferred:

- **PT 12 PDF download.** QBank already covers the items. Future round can add it.
- **QBank stem completion** (the 463 items currently `null — _(stem not yet fetched)_`). Use sibling-cached items at same skill+band as style anchors. Future round can complete the cache.
- **Routing threshold change** (60% → 55% or per-form override). Ship harder content first, observe real route distribution for ~2 weeks, then tune.
- **Reading & Writing tests.** Codebase is Math-only. Adding R&W is a separate, bigger effort.
- **IRT param recalibration from real student data.** Requires meaningful response volume. Future round once we have enough attempt data.
- **Module 2 timing tweaks.** Test duration stays at current values.

## Failure modes (one realistic production failure per new codepath)

| Codepath | Failure mode | Test? | Error handling? | Visible to user? |
|----------|--------------|-------|-----------------|------------------|
| `resolveItemParams` band lookup | `band` field present but invalid (e.g., `"3a"` or `0`) | YES (`scoringSchema.test.js`) | Yes — defensive fallback to difficulty default | Silent (correct behavior) |
| `recordPracticeTestResult` snapshot write | Snapshot doc write fails (Firestore quota / network) while main attempt write succeeds | NO — **gap** | Partial — needs `try/catch` with rollback or queued retry | Review Answers will silently fall back to live test → drift |
| Snapshot subcollection read | User clicks Review Answers; subcollection doc doesn't exist | YES (legacy fallback test) | Yes — falls back to live test + notice | "Questions updated" banner |
| `calibrateModule.mjs --lint` | Authored question with subtle LaTeX error (e.g., unmatched `$`) | YES (lint test) | Yes — fails build with file:line | Build fails, never ships |
| Bank-level domain check | All 12 tests pass individually but a single test drifts to 6/8/4/4 (over-target on AdvMath) | YES (testPipeline.mjs) | Yes — CI fails | Build fails |
| Uniqueness gate | Authored swap with Jaccard 0.79 vs a QBank item (just over threshold) | YES (lint test) | Yes — rejected with QBank ID | Author has to re-author |

**CRITICAL GAP flagged:** snapshot doc write failure during attempt recording is a silent partial-failure. Add a transactional write (Firestore batch) covering both the main attempt update AND the snapshot doc creation, OR a queued retry on snapshot write failure.

## Worktree parallelization strategy

The plan splits into 4 independent pre-work lanes (different modules) that can run in parallel worktrees, then sequential pilot/verify/propagate steps.

| Step | Modules touched | Depends on |
|------|-----------------|------------|
| Pre-work A: Authenticity rubric + calibration set | `docs/` | — |
| Pre-work B: `calibrateModule.mjs` + `--lint` + uniqueness gate | `scripts/` | — |
| Pre-work C: Band-aware IRT params + unit tests + regression test | `src/services/scoring/` | — |
| Pre-work D: Snapshot subcollection + Review Answers UI + tests | `src/services/`, `src/components/` | — |
| Pilot Test 1 (M1 + M2) | `src/data/practiceTests/practiceTest1.js` | A, B, C, D |
| /browse verification | (read-only) | Pilot |
| Tests 2-12 propagation | `src/data/practiceTests/practiceTest{2..12}.js` | Pilot + verification approval |
| testPipeline.mjs new checks | `scripts/testPipeline.mjs` | Tests 2-12 |

**Lane plan:**
- **Launch A + B + C + D in parallel worktrees.** Different modules, no shared edits.
- Merge all four lanes.
- **Sequential from there:** Pilot → /browse verify → Tests 2-12 → bank checks.

**Conflict flag:** B (calibrateModule.mjs) and D (snapshot subcollection) both edit `src/services/practiceTestService.js`? No — B only touches `scripts/`, D touches `src/services/`. No overlap. Safe.

**Watch:** D's Review Answers UI change in `src/components/TestResults.jsx` could conflict with any concurrent UI work; verify branch is clean before launching.

## Decision log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-04-25 | Preserve 5/9/8 M1 difficulty mix | Slight bump is content-level, not distribution-level. |
| 2026-04-25 | Pilot on Test 1 before propagating | Existing pattern in repo; minimizes blast radius. |
| 2026-04-25 | Routing threshold deferred (60% unchanged) | Don't bundle two changes; clean attribution post-deploy. |
| 2026-04-25 | Snapshot in per-attempt subcollection (not inline) | 12 tests × 5 attempts × 90KB inline → 1.3MB > Firestore 1MB limit. |
| 2026-04-25 | Band-aware IRT b-parameters | Without band field, top-of-band-easy items at b=-1.0 inflate scores. |
| 2026-04-25 | IP uniqueness gate on human-authored swaps | CB licensing exposure if swaps drift toward "lightly-edited copy." |
| 2026-04-25 | Authenticity calibration set as exit gate | 5 prior rounds failed against vague "looks CB-like" target. |
| 2026-04-25 | Scope estimate revised 2-3d → 6-8d | Per-test human review is the bottleneck, not tool propagation. |

## GSTACK REVIEW REPORT

| Review | Trigger | Why | Runs | Status | Findings |
|--------|---------|-----|------|--------|----------|
| CEO Review | `/plan-ceo-review` | Scope & strategy | 0 | — | not run for this plan |
| Codex Review | `/codex review` | Independent 2nd opinion | 0 | — | codex CLI unavailable |
| Eng Review | `/plan-eng-review` | Architecture & tests (required) | 1 | CLEAR (PLAN) | 7 issues, 1 critical gap (snapshot write atomicity) |
| Outside Voice | `Claude subagent` | Independent plan challenge | 1 | issues_found | 9 challenges, 3 substantive (authenticity exit gate, IP, storage math) |
| Design Review | `/plan-design-review` | UI/UX gaps | 0 | — | not applicable (no UI changes beyond Review Answers fallback notice) |
| DX Review | `/plan-devex-review` | Developer experience gaps | 0 | — | not applicable (internal tooling) |

**OUTSIDE VOICE:** Surfaced 3 substantive cross-model tensions (authenticity exit criteria, CB IP exposure, Firestore storage math) — all resolved with locked decisions in plan above.
**CROSS-MODEL:** Both reviewers agreed on band-aware IRT, snapshot strategy direction (subcollection added after outside-voice math correction), and pilot-then-propagate approach.
**UNRESOLVED:** 0 — all 7 issues + 3 cross-model tensions decided.
**VERDICT:** ENG CLEARED — ready to implement. Authenticity calibration set must be built BEFORE pilot work begins (it's the exit gate).
