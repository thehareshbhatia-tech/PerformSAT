# Changelog

All notable changes to PerformSAT are documented here. Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project follows [Semantic Versioning](https://semver.org/).

## [3.3.0] - 2026-05-16

### Added — All 19 CB skills now healthy (math bank: 1125 → 1252)

User pushed back after the [3.2.0] batch: "I don't see any transformations; perhaps more things can be missing that I don't see." This batch closes the remaining gaps and makes EVERY CB skill healthy (≥20 items).

- **17 new SAT Pattern pools** + healthy-push tails:
  - Q.F. Margin of Error: `confidence-interval-interpretation` (8), `sample-size-for-margin-reduction` (8) + 3 tail items → 5 → 20 items.
  - Q.A. Ratios / rates: `unit-conversion` (8), `mixture-problems` (8) → 8 → 20 items.
  - Q.C. One-variable data: `box-plot-interpretation` (8), `standard-deviation-comparison` (8) → 12 → 25 items.
  - Q.D. Two-variable data: `interpret-slope-of-best-fit` (8 + tail), `interpret-intercept-of-best-fit` (8) → 6 → 20 items.
  - H.E. Linear Inequalities: `one-variable-linear-inequality` (8), `system-of-linear-inequalities` (8) + 2 tail → 6 → 20 items.
  - H.C. Lines in xy-plane: `distance-formula` (8), `midpoint-formula` (8) → 11 → 23 items.
  - S.B. Lines, angles, triangles: `exterior-angle-theorem` (8), `similar-triangles-proportion` (8) → 7 → 20 items.
  - S.D. Circles: `arc-length` (4) → 17 → 21 items.
  - P.A. Equivalent Expressions: `factor-by-grouping` (4) → 17 → 21 items.

### CB skill coverage state

| | 2026-05-15 | 2026-05-16 (post audit, [3.2.0]) | 2026-05-16 (final, [3.3.0]) |
|---|---:|---:|---:|
| Healthy (≥20 items) | 8 | 10 | **19** |
| Thin | 10 | 9 | **0** |
| Empty | 1 (Q.G.) | 0 | **0** |
| Hand-authored bank size | 968 | 1125 | **1252** |
| Surfaced patterns (≥4 items) | 68 | 85 | **96+** |

Every CB-skill pool now meets the audit's 20-item threshold.

### PATTERN_TO_CB_SKILL additions (17)

`one-variable-linear-inequality`, `system-of-linear-inequalities`, `distance-formula`, `midpoint-formula`, `unit-conversion`, `mixture-problems`, `box-plot-interpretation`, `standard-deviation-comparison`, `interpret-slope-of-best-fit`, `interpret-intercept-of-best-fit`, `confidence-interval-interpretation`, `sample-size-for-margin-reduction`, `exterior-angle-theorem`, `similar-triangles-proportion`, `arc-length`, `factor-by-grouping`.

### Validation

- `npm run bank:validate`: 1252 items, all checks pass
- Full Jest suite: 986 / 986 pass
- `CI=true npm run build`: compiled successfully
- `node scripts/auditCBCoverage.mjs`: all surfaced patterns mapped, **0 empty, 0 thin, 19 healthy**

## [3.2.0] - 2026-05-16

### Added — CB question-type gap closure (Math bank: 968 → 1125 hand-authored)

Trigger: user audit asked whether the bank covers every CB question type. The full audit + delivery doc is `docs/CB_QUESTION_TYPE_AUDIT_2026-05-16.md`.

- **17 new SAT Pattern pools** authored to fill genuine gaps:
  - Percentages (Q.B.): `chained-percent-relationship`, `compound-percent-of` (Tier-1 promotion), `percent-greater-than-less-than` — closes the "a is X% of b, b is Y% of c" gap + signed-direction verbal framing.
  - Statistical Claims (Q.G., was empty): `observational-vs-experimental-study`, `scope-of-inference` — Q.G. now **healthy** (20 items).
  - Nonlinear Functions (P.C.): `reverse-exponential-back-in-time`, `function-from-shifted-graph`, `vertical-shift`, `horizontal-shift`, `reflection-of-graph`, `vertical-stretch`, `compound-interest`.
  - Nonlinear Equations (P.B.): `rational-equation-with-extraneous-solution`.
  - Probability (Q.E.): `probability-without-replacement`.
  - Area and Volume (S.A.): `symbolic-area-or-volume`, `similar-figures-area-ratio`, `area-of-triangle-from-coordinates`.
  - +4 "find-x" variants for the existing `tangent-line-and-discriminant` pattern.
- **CB skill coverage** went from 8 healthy / 10 thin / 1 empty → **10 healthy / 9 thin / 0 empty**.
  - P.C. Nonlinear Functions: 51 → 95 items (largest jump).
  - Q.B. Percentages: 20 → 39 items.
  - S.A. Area and Volume: 16 → 34 items.
  - Q.E. Probability: 22 → 28 items.
  - Q.G. Statistical Claims: **0 → 20** items.
- **Topic-file → SAT Pattern fallback** in `bank/index.js` (`TOPIC_SECTION_TO_PATTERN` map). Hand-authored `percents.js`, `statistics.js`, `transformations.js`, etc. previously had no `**SAT Pattern: …**` headers and only flowed through Tier-3 routing. Mapped 24 unambiguous `(sourceModuleId, sectionName)` pairs to canonical patterns; lifts ~170 topic items into Tier-1 pools without rewriting any explanations.
- **PATTERN_ALIASES** expansion: `percent-greater-than`, `percent-less-than`, `percent-increase` → `percent-greater-than-less-than`; `conditional-probability-from-a-two-way-table` → canonical; `right-triangle-trigonometry` → `right-triangle-trig-ratios`; `complete-the-square-circle-center` → `circle-in-general-form`.
- **`docs/CB_QUESTION_TYPE_AUDIT_2026-05-16.md`** — full audit + crosswalk against CB PT4 + PT11 + the Educator Question Bank taxonomy, with per-skill matrix, specific gap list, and authoring plan.

### Changed

- `patternIndex.test.js` regression: switched from strict equality (`sum == HAND_AUTHORED_COUNT`) to floor (`sum >= HAND_AUTHORED_COUNT`) because topic items can now contribute to patternIndex via the section-name fallback.
- `cbSkillTaxonomy.js::PATTERN_TO_CB_SKILL` — added 17 new pattern → CB-skill mappings (see the new pattern list above).

### Validation

- `npm run bank:validate`: 1125 items, all checks pass
- Full Jest suite: 986 / 986 pass
- `CI=true npm run build`: compiled successfully
- `node scripts/auditCBCoverage.mjs`: 85 surfaced patterns, all mapped, 0 empty CB skills

## [3.1.0] - 2026-05-10

### Added
- **Past-Test-Review tier** — students with completed practice tests can now click "Review your tests" on the Study Plan to see every item from a past attempt explained, with the same 6-class error taxonomy used in their diagnostic. Behind `useFeatureFlag('pastTestReview')` for the rollout. Wrong items can be retried as a focused drill that runs through `AssignedPracticeShell` with a clear "Review session" banner and is isolated from the Predicted vs Actual prediction engine. Plan: `docs/PAST_TEST_REVIEW_PLAN.md`.
- **Per-item navigation** in Past-Test-Review — Previous / Next within the wrong-items list lets students sweep their incorrect answers without bouncing to the test detail.
- **Snapshot-missing notice** — legacy attempts (no per-attempt subcollection write) now surface a clear warning that question text is from the current test and may differ from what the student saw, and the retry CTA is correctly disabled for those attempts.
- **Telemetry events** under `[performsat:pastTestReview]` scope: `opened`, `test_selected`, `item_reviewed`, `retry_started`, `retry_dropped`, `retry_completed`. Pre-shaped for analytics integration.
- **Playwright E2E framework** — minimum viable smoke test (`e2e/past-test-review.spec.js`) for the Past-Test-Review happy path. Skips when `PERFORMSAT_TEST_EMAIL`/`PASSWORD` env vars aren't set. Run with `npm run test:e2e`.

### Fixed
- **Two long-standing baseline test failures** — `diagnosticAdapter.test.js` (transitions block: added missing `transition` field to the `remediationPath` block + updated test order) and `diagnosticNarrativeContract.test.js` (Firebase/undici jest load: added `src/setupTests.js` polyfilling TextEncoder/TextDecoder/ReadableStream + a per-file Firebase mock). All 853 tests now pass cleanly.
- **Race condition** in the past-test-review fetch — rapid double-click on different test cards no longer causes earlier fetches to clobber later ones (request-ID guard in `handleSelectReviewTest`).
- **Telemetry accuracy** — `item_reviewed` no longer logs an `errorClass` for items the student got correct (the 6-class taxonomy is meaningless for correct items).
- **Diagnostic narrative tone** — the new "remediationPath" transition string was rewritten from aspirational ("from your weak skills to mastery") to narrative ("Each weak skill below maps to specific lessons:"), per the project's diagnostic-content principle.

### Changed
- `getCompletedTests` selector now accepts `{ requireItemDetails: true }` and returns `hasItemDetails` per entry, so the Study Plan CTA only counts attempts that actually have wrong-answer breakdowns to surface.
- `findErrorClassForItem` selector accepts either an `attempt` (rebuild groups) or a precomputed groups object (fast path) as its second argument, so callers that already memoize the groups don't pay the rebuild cost.

### For contributors
- New `src/setupTests.js` polyfills TextEncoder/TextDecoder + `stream/web` globals so any test transitively importing `firebase/auth` (via undici) loads cleanly under jsdom. Document inside the file explains the per-file `jest.mock('firebase/config')` convention.
- Playwright config + Chromium browser now installed. See `playwright.config.js` for the run recipe.
