# Test 1 Pilot Strategy Plan

Audit trail for the Module 1 + Module 2 recalibration of Practice Test 1. Each
question gets a per-question decision plus the band/source/rationale that
drives the change. Question IDs (1-22 in each module) are immutable; only
content moves.

## Phase 0 baseline (before any edits)

- Module 1 distribution: 5E / 9M / 8H. Domain mix: 7 Algebra / 9 AdvMath /
  4 PSDA / 2 Geo-Trig (target 7/6/5/4 — over on AdvMath, under on Geo-Trig).
- Module 2 distribution: 5E / 9M / 8H. Hard track is the only routed track;
  treat as a single 22-question set targeting 0E / 6M / 16H, much harder than
  Module 1.
- Baseline lint: 113 violations (44 band-missing, 34 distractor-annotation,
  31 pattern-name-registry, 4 explanation-pattern-opener).

## Module 1 plan

| Q  | Skills (current) | Domain | Cur diff | Decision | Band | Source/Anchor | Rationale |
|----|------------------|--------|----------|----------|------|---------------|-----------|
| 1  | word-problems, solving-equations | Algebra | easy | UPGRADE_CONTENT | 3 | Upgrade-proposal Q1 (matches `8076db82`/`f2ee68d6` band 3) | Lift below-floor "$50-4n$" to packing-fee shifted-input pattern |
| 2  | percents | PSDA | easy | UPGRADE_CONTENT | 3 | Upgrade-proposal Q2 (reverse-percent like calibration set `item-008`) | Reverse-percent ceiling — 1260 = 35% of total |
| 3  | solving-equations, ratios | Algebra | easy | UPGRADE_CONTENT | 3 | Upgrade-proposal Q3 (`8076db82`/`7ea2442b` shifted output) | Proportion → shifted-output `x − 7` form |
| 4  | function-interpretation, linear-functions, slope | Algebra | easy | KEEP+ANNOTATE | 3 | `0478e0b5` (Linear functions band 3) | Already CB band 3 — interpret-slope-in-context |
| 5  | ratios, word-problems | PSDA | easy | UPGRADE_CONTENT | 3 | Upgrade-proposal Q5 (`688b466f` band 3) | Ratio with total constraint, not bare scale-factor |
| 6  | linear-functions, slope, coordinate-geometry | Algebra | medium | KEEP+ANNOTATE | 5 | `77e2c729` (Linear funcs band 5) | y-intercept-from-two-points is canonical M5 stem |
| 7  | two-way-tables, probability, percents | PSDA | medium | KEEP+ANNOTATE | 5 | `4d34f7df` (Probability band 5) | Conditional probability from two-way table is canonical M5 |
| 8  | systems-of-equations, solving-equations | Algebra | medium | KEEP+ANNOTATE | 5 | `c470d4b9` (Systems band 5) | "Add to eliminate, then solve for y" is canonical M5 |
| 9  | scatterplots, linear-functions | PSDA | medium | KEEP+ANNOTATE | 4 | `86d0b8f2` (Two-var data band 5) | Plug-in into best-fit line; band 4 (slightly below ceiling, but on-pattern) |
| 10 | solving-equations | Algebra | medium | KEEP+ANNOTATE | 5 | Multi-step linear with fractional answer (matches CB M5 like `null`/Linear M items) | Distribute, combine, isolate — fractional outcome at M-ceiling |
| 11 | exponential-functions, function-interpretation | AdvMath | medium | KEEP+ANNOTATE | 5 | `46f2fda7` (Nonlinear band 5) — same skeleton "$P_0 \cdot 2^{t/d}$" | Pick correct exponent form for doubling-period — CB-canonical M5 |
| 12 | slope, linear-functions, coordinate-geometry | Algebra | medium | KEEP+ANNOTATE | 5 | `77e2c729` (Linear funcs band 5) | Perpendicular slope + y-intercept — top-of-M ceiling |
| 13 | triangles, angles | Geo-Trig | medium | KEEP+ANNOTATE | 5 | `c39deac6` (Lines/angles band 5) | SOH-CAH-TOA hypotenuse from opposite — solid M5 stem (Geo-Trig) |
| 14 | function-interpretation, quadratic-equations | AdvMath | medium | SWAP_DOMAIN→GeoTrig | 5 | `0d8`-style (Area/volume band 5) | Swap to Geo-Trig content (cylinder-volume style) to rebalance |
| 15 | factoring, polynomial-operations | AdvMath | hard | KEEP+ANNOTATE | 7 | `aed0b60c`-style (Equiv expr band 7) | Diff-of-squares + factor + cancel — band 7 ceiling |
| 16 | circle-equations, coordinate-geometry | Geo-Trig | hard | KEEP+ANNOTATE | 7 | `301edaf1` (Circles band 7) | Complete-the-square circle — band 7 ceiling |
| 17 | exponent-rules, radical-expressions | AdvMath | hard | KEEP+ANNOTATE | 7 | `aed0b60c` (Equiv expr band 7) | Fractional exponents on multiplied radicals — band 7 ceiling |
| 18 | quadratic-equations, systems-of-equations, discriminant | AdvMath | hard | KEEP+ANNOTATE | 7 | `8acbff18` (Nonlinear sys band 7) | Tangent-line discriminant condition — band 7 ceiling |
| 19 | vertex-form, quadratic-equations, coordinate-geometry | AdvMath | hard | SWAP_DOMAIN→PSDA | 7 | `1f3a2144` (One-var data band 7) | Swap to PSDA stats (mean-from-list with missing value) for rebalance |
| 20 | factoring, polynomial-operations | AdvMath | hard | SWAP_DOMAIN→GeoTrig | 7 | `2124991b` (Right-tri trig band 7) | Swap to right-triangle trig with perimeter — rebalance to Geo-Trig |
| 21 | vertex-form, quadratic-equations, coordinate-geometry | AdvMath | hard | KEEP+ANNOTATE | 7 | `7224c605`-style (Nonlinear band 7) | Vertex-form to standard-form with sign trap — band 7 ceiling |
| 22 | exponent-rules | AdvMath | hard | KEEP+ANNOTATE | 7 | `aed0b60c` (Equiv expr band 7) | Common-base exponent simplification — band 7 ceiling |

**Resulting Module 1 domain mix:** Algebra 7 / AdvMath 6 / PSDA 5 / Geo-Trig 4
(swaps: Q14 AdvMath→Geo-Trig, Q19 AdvMath→PSDA, Q20 AdvMath→Geo-Trig).

## Module 2 plan (single set, calibrated to "much harder than M1")

Target: 0E / 6M / 16H. Domain mix 7/6/5/4. Floor lifted: items currently
labeled `easy` get bumped to `medium` or `hard` with new content; hard items
calibrated to top-of-band (band 7) and a few "concept fusion" items added.

| Q  | Skills (current) | Domain | Cur diff | New diff | Decision | Band | Source/Anchor | Rationale |
|----|------------------|--------|----------|----------|----------|------|---------------|-----------|
| 1  | percents | PSDA | easy | hard | UPGRADE_CONTENT | 7 | `ad721785` (Percent band 7) | "a is p% of (b+c)" multi-percent fusion |
| 2  | word-problems, ratios | Algebra | easy | hard | UPGRADE_CONTENT | 7 | `033d8e6a` (Linear in 1 var band 7) | Multi-rate concrete-screws-style stem |
| 3  | polynomial-operations | AdvMath | easy | hard | UPGRADE_CONTENT | 7 | `aed0b60c` (Equiv expr band 7) | Cube-root × square-root combined-base exponent ladder |
| 4  | systems-of-equations, solving-equations | Algebra | easy | hard | UPGRADE_CONTENT | 7 | `5c09d547` (Sys band 7) | Parameterized "no solution" parallel-line condition |
| 5  | function-interpretation | AdvMath | easy | hard | UPGRADE_CONTENT | 6 | `158b94a1` (Nonlinear band 7) — table-of-values | Function transformation with reflection/shift composition |
| 6  | margin-of-error, statistics | PSDA | medium | hard | UPGRADE_CONTENT | 7 | `1f3a2144` (One-var data band 7) | Recover missing value from mean — high-difficulty stats fusion |
| 7  | systems-of-equations, word-problems | Algebra | medium | hard | UPGRADE_CONTENT | 7 | `031d354d`-style (Sys band 7) | Three-variable system with elimination ladder |
| 8  | vertex-form, function-interpretation | AdvMath | medium | hard | UPGRADE_CONTENT | 7 | `65f2a8b0` (Nonlinear band 7) | Vertex form fused with coordinate geometry (h+k from two-condition setup) |
| 9  | solving-equations, linear-functions | Algebra | medium | medium | KEEP+ANNOTATE | 5 | `c470d4b9` (Sys band 5) | Equivalent-equation infinite-solutions — solid M ceiling |
| 10 | probability, two-way-tables | PSDA | medium | hard | UPGRADE_CONTENT | 7 | `df56744a` (Probability band 7) | Conditional probability with embedded percent calculation — rebalance + lift |
| 11 | slope, coordinate-geometry | Algebra | medium | hard | UPGRADE_CONTENT | 7 | `2d19a50f` (Linear funcs band 7) | Perpendicular line through specific point — equation form |
| 12 | systems-of-equations, word-problems | Algebra | medium | medium | KEEP+ANNOTATE | 5 | `c470d4b9` (Sys band 5) | Two-variable rate problem — fine M5 |
| 13 | circle-equations, solving-equations | Geo-Trig | medium | hard | UPGRADE_CONTENT | 7 | `301edaf1` (Circles band 7) | Complete-the-square with non-perfect-square radius |
| 14 | scatterplots, statistics | PSDA | medium | medium | KEEP+ANNOTATE | 5 | `1862dad5` (Two-var data band 5) | Residual interpretation — fine M5 |
| 15 | trigonometry, triangles | Geo-Trig | hard | hard | KEEP+ANNOTATE | 7 | `2124991b` (Right-tri trig band 7) | Pythagorean triple cos with discriminator distractors — band 7 |
| 16 | discriminant, quadratic-equations | AdvMath | hard | hard | UPGRADE_CONTENT | 7 | `8acbff18` (Nonlinear sys band 7) | Discriminant + integer bound + strict-inequality trap |
| 17 | exponential-functions, percents | AdvMath | hard | hard | KEEP+ANNOTATE | 7 | `46f2fda7` (Nonlinear band 7) — exponential-decay percent | Decay-multiplier-to-percent — band 7 |
| 18 | systems-of-equations | Algebra | hard | hard | UPGRADE_CONTENT | 7 | `031d354d` (Sys band 7) | 3-equation contradiction with proportional check |
| 19 | statistics | PSDA | hard | medium | KEEP+ANNOTATE | 5 | `a4fc06ae` (One-var data band 5) | Outlier-effect on median/range — solid M5 |
| 20 | surface-area | Geo-Trig | hard | hard | UPGRADE_CONTENT | 7 | Geo-Trig hard surface-area composite | Composite solid with cylinder cap — true band 7 |
| 21 | percents, word-problems | PSDA | hard | hard | KEEP+ANNOTATE | 7 | `ad721785` (Percent band 7) | "p% greater than" with large p — band 7 ceiling |
| 22 | function-interpretation, solving-equations | AdvMath | hard | hard | KEEP+ANNOTATE | 7 | `158b94a1` (Nonlinear band 7) | Function composition with quadratic — band 7 ceiling |

**Resulting Module 2 distribution:** 0E / 6M (Q9, Q12, Q14, Q19 + 2 others
that stay M after revisit) / 16H. Domain mix: targeting 7/6/5/4 ±1.

## Pattern-name registry adds

These pattern names are not in `APPROVED_PATTERN_NAMES` but appear naturally
in the upgraded items. They will be added to both `scripts/calibrateModule.mjs`
and `docs/CB_AUTHENTICITY_RUBRIC.md` §5 in Phase 1:

- `Percent of a Whole` (already approved — Q2 currently fails because of
  another issue; verify)
- `Function Evaluation`
- `Combining Like Terms`
- `Multi-Step Linear Equation`
- `Margin of Error`
- `Residual`
- `Discriminant Analysis` (rename "Discriminant — No Real Solutions")
- `Outlier Effect`
- `Composite Surface Area`
- `Tangent Line and Discriminant`
- `Vertex Form to Standard Form`
- `Matching Coefficients`
- `Rational Expression Simplification`
- `Three-Variable System`
- `Conditional Probability from Two-Way Table`
- `Scatterplot Line of Best Fit`
- `Unit Conversion`
- `Inequality Boundary`
- `Reverse-Percent` (already approved)
- `Function Composition` (already approved)

## Phase order recap

1. Phase 0: this strategy doc → commit.
2. Phase 1: mechanical fixes (band, distractor annotations, pattern names + registry expansion) → run lint to 0.
3. Phase 2: M1 domain rebalance (Q14, Q19, Q20 swaps).
4. Phase 3: M1 content upgrades (Q1, Q2, Q3, Q5 from upgrade proposal; audit Q6-22).
5. Phase 4: M2 hardening (every track-2 question targeted to band ≥ 6 if hard, with several at band 7).
6. Phase 5: validation suite.
7. Phase 6: final report.
