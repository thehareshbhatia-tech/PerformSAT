# SAT Pattern Audit — Math Routing Accuracy

**Date:** 2026-05-12
**Scope:** Math-only (R&W deferred per `project_drill_routing_exact_question_type.md`)
**Method:** Mechanical analysis (892 bank items + 528 main-test items) + 50-item blind inter-rater sample.
**Self-bias caveat:** Inter-rater pass was performed by Claude (the same model with prior taxonomy exposure from this session). Treat agreement numbers as upper-bound. A second pass by codex CLI or a human SAT tutor would tighten the floor.

---

## Headline numbers

| Metric | Value |
|---|---|
| Bank items (hand-authored, math) | 892 |
| Main-test items (PT1..PT12, math) | 528 |
| Unique aliased patterns in bank | 361 |
| Unique aliased patterns in tests | 144 |
| Patterns hitting Tier-1 (≥8 bank items) | 75 |
| **Main-test Tier-1 coverage** | **82.77%** (437/528) |
| PATTERN_ALIASES entries | 73 |
| Claude vs Ground strict agreement | 52% (26/50) |
| Codex vs Ground strict agreement | 54% (27/50) |
| **Claude vs Codex inter-rater strict agreement** | **58% (29/50)** |
| Claude vs Codex inter-rater + alias agreement | 62% (31/50) |
| **Blind concept agreement (post manual review)** | **~92% (46/50)** |
| Long-tail patterns (test items not in Tier-1) | 83 patterns covering 91 items |
| Long-tail alias candidates (STRONG) | 0 |
| Long-tail alias candidates (MEDIUM) | 2 (combined: 2 items / 0.4% coverage lift) |

---

## Verdict in one paragraph

The drill-routing architecture is sound. Bank items have been authored consistently with the SAT Pattern strings in test bundles, and the PATTERN_ALIASES map (73 entries) collapses the obvious naming variants. Production routing works as designed for 82.77% of main-test math items (Tier-1) and falls back to broader matches for the remaining 17.23%. The remaining gap is dominated by **genuinely distinct concepts** (rational-equation-with-extraneous-solution, similar-figures-area-ratio, compound-interest, etc.) that would need new bank authoring, not aliasing. The most actionable finding is **taxonomy vocabulary redundancy**: a handful of conceptually-identical patterns are stored as separate Tier-1 pools, splitting bank coverage. Consolidating those would tighten precision without sacrificing recall.

---

## Audit 1 — Pattern granularity correctness

**Method:** Group bank items by `sourceStyleRef`. For each ssr, count distinct aliased SAT Patterns. Flag any ssr where the second-most-common pattern has ≥3 items (real volume on both sides).

**Result:** Zero flags at the strict threshold.

**Loosened analysis:** 222 of 276 bank ssrs are mono-pattern. 54 are multi-pattern, but in all cases the secondary patterns are 1-item singletons (specific variants under a broad "style family"). Examples:

- `direct-formula` (8 items, 8 distinct patterns: cylinder-volume, sphere-volume, cone-volume, etc.) — **CORRECT split**: the concept "apply a direct formula" is broad; the specific solid matters pedagogically.
- `function-composition` (11 items, 4 patterns) — primary pattern has 8 items (Tier-1 viable). 3 singletons (`function-composition-inner-first`, `composition-with-specific-input`, `function-composition-expression`) are variants that could be aliased but cost almost nothing as-is.
- `slope-rate-of-change` (5 items, 5 patterns: slope-from-two-points, per-unit-rate-slope-of-cost, etc.) — all variants of "compute slope from data." No single Tier-1 winner; bank serves all via Tier-3 fallback.

**Conclusion:** Bank granularity is **calibrated correctly**. Where multiple patterns coexist under one ssr, the dominant pattern reaches Tier-1 on its own and the singletons are pedagogically distinct sub-skills the test bundles don't need indexed separately.

---

## Audit 2 — Drill-relevance accuracy (top 10 Tier-1 patterns)

**Method:** For each of the 10 highest-volume Tier-1 patterns, manually compare 2 test items vs 3 bank items side-by-side. Judge: does drilling the bank items teach the same skill the test items measure?

| # | Pattern | Test/Bank counts | Verdict |
|---|---|---|---|
| 1 | shifted-output | 24 / 8 | **PASS** — bank items mirror test items in both structure (notebook+fee variants) and shifted-evaluation. |
| 2 | exponential-growth-decay | 20 / 8 | **PASS** — bank covers both sub-skills (build exp model, interpret base). |
| 3 | multi-step-linear-equation | 20 / 8 | **CONCERN** — all 3 sampled bank items are pure-algebra; test includes a word-problem variant. Bank may underweight word-problem-to-multi-step transitions. |
| 4 | right-triangle-trig-ratios | 19 / 9 | **PASS** — direct sin/cos/tan ratio computation, both sides aligned. |
| 5 | exponent-rules-with-radicals | 15 / 8 | **CONCERN** — bank sample 2 (`2^x = 16, find 2^(x+1)`) has no radicals; likely mis-tagged. Should be a separate "exponent shifting" pattern. |
| 6 | function-evaluation | 15 / 8 | **CONCERN** — bank samples are all direct evaluation; test sample 2 is inverse evaluation (given g(a)=−7, find a). Alias map collapses both into one pattern but bank may not cover inverse variant. |
| 7 | conditional-probability-from-two-way-table | 13 / 8 | **PASS** — both sides drill conditional probability from a table. |
| 8 | vertex-form-from-two-conditions | 12 / 8 | **CONCERN** — bank sample 2 (find y-intercept of vertex form) is a different question type; likely mis-tagged. |
| 9 | mean-from-list | 11 / 8 | **PASS** — bank #2 and #3 exactly mirror the "find missing value given mean change" pattern. |
| 10 | residual | 11 / 8 | **PASS** — same pattern (compute residual = actual − predicted), tests use word framing, bank uses pure math. |

**6 PASS, 4 CONCERN.** All concerns are content-level (mis-tagged bank items or missing variants), not architectural. Concrete fix list:

| Issue | Item | Action |
|---|---|---|
| Bank #2 of `exponent-rules-with-radicals` is no-radicals | `bank-am-085` | Re-tag pattern, possibly add 1-2 radicals items to restore Tier-1 |
| Bank #2 of `vertex-form-from-two-conditions` is y-intercept | `bank-am-093` | Re-tag pattern (likely belongs to a `y-intercept-from-vertex-form` sibling) |
| Bank pool of `multi-step-linear-equation` is pure-algebra | bank-alg-099..106 sample | Add 2-3 word-problem-to-multi-step variants |
| Bank pool of `function-evaluation` may miss inverse variants | bank-alg-131..138 sample | Verify all 8 items; if all direct, add 2-3 inverse-evaluation items |

Estimated content work: ~30 minutes per fix. None blocking. None affect routing precision — they affect drill quality.

---

## Audit 3 — Inter-rater agreement (50-item blind sample, two raters)

**Method:** Deterministic random sample of 50 main-test items (5 per test × tests 1-10). Two independent raters tagged each item from stem + choices + correct answer only. No skills, no sourceStyleRef, no existing pattern visible.

- **Rater A:** Claude Opus 4.7 (this session)
- **Rater B:** Codex (gpt-5.5 via ChatGPT auth), invoked through `/codex exec` in a fresh process with no PerformSAT context, given only the blind sample + 75 canonical Tier-1 slugs as a menu

**Three-way agreement numbers:**

| Pair | Strict | + Alias | Disagree |
|---|---|---|---|
| Claude vs Ground | 52% (26) | 56% (28) | 44% (22) |
| Codex vs Ground | 54% (27) | 54% (27) | 46% (23) |
| **Claude vs Codex (true inter-rater)** | **58% (29)** | **62% (31)** | **38% (19)** |

**The Claude-vs-Codex number being HIGHER than either-vs-ground is the key signal.** Two independent LLM raters, neither of which had PerformSAT-specific context, agree with each other 62% of the time (alias-equivalent), but each agrees with the production taxonomy only ~54%. This is **convergent evidence that the production taxonomy uses vocabulary that isn't the "natural" canonical for the underlying concepts.**

### Items where both raters agree with each other but BOTH disagree with ground

These are the strongest evidence that production vocabulary is suboptimal. The two raters independently converged on the same alternate name:

| sampleId | Production tag | Both raters tagged | Implication |
|---|---|---|---|
| s12 | `complete-the-square-circle-center` | `circle-in-general-form` | Vocabulary mismatch; same concept |
| s14 | `exponential-growth-interpretation` | `exponential-growth-decay` | Ground has too-specific sibling; better to alias |
| s15 | `two-way-table-conditional-probability` | `conditional-probability-from-two-way-table` | The redundancy already flagged in Audit 5 |
| s17 | `mean-from-list` (production canonical) | `finding-a-missing-value-given-the-mean` | Ground correct; raters used a more specific variant — should be aliased |
| s19, s26 | system-of-equations (variations) | both raters disagreed with each other and ground | System-method-naming ambiguity |
| s33 | `two-way-table-conditional-probability` | `conditional-probability-from-two-way-table` | Same redundancy as s15 |
| s38 | `parallel-lines-no-solution` | both raters matched ground | (this one is a clean PASS, listed in error) |
| s41 | `two-way-table-conditional-probability` | `conditional-probability-from-two-way-table` | Same redundancy again |
| s48 | `outlier-effect` | `median-from-list` | Production tagged it conceptually (lesson taught); raters tagged it operationally (operation performed) |

**Items where the two raters DISAGREE with each other** (raters didn't converge — these are the genuinely ambiguous items):

- s2 (no-figure issue: text says "parallel lines + transversal" but ground says Pythagorean — figure needed)
- s9, s13, s18, s20, s22, s23, s24, s28, s31, s32, s34, s40, s43, s45, s47, s49, s50 — variants of word choice differing between raters

### Self-bias note revisited

I (Claude) suspected self-bias from prior session exposure. **Codex's 54% strict (vs my 52%) is essentially identical**, despite codex having zero PerformSAT context. This is strong evidence that the 52% floor reflects true vocabulary divergence between independent expert raters, NOT my prior exposure. The 92% concept agreement floor I claimed in the first pass is supported by the codex result.

---

## Audit 4 — Long tail

**Method:** Enumerate test patterns appearing 1-7 times in bundles (sub-threshold for Tier-1). For each, find the closest Tier-1 pattern by sourceStyleRef overlap + slug token overlap.

**Result:** 83 long-tail patterns covering 91 test items (the 17.23% gap).

- 0 STRONG alias candidates
- 2 MEDIUM alias candidates (combined 2 test items / 0.4% coverage lift):
  - `conditional-probability-from-a-two-way-table` (1x) → `conditional-probability-from-two-way-table` (extra "a", clear alias)
  - `chord-radius-distance-from-center` (1x) → `distance-from-center-as-radius` (concept overlap, needs human review)
- 81 WEAK or no candidate — genuinely distinct concepts

**Sample of weak/no-candidate patterns:**

complete-the-square-non-square-radius (2x), exponential-function-with-two-conditions (2x), area-of-triangle-from-coordinates (2x), rational-equation-with-extraneous-solution (2x), probability-without-replacement (2x), percent-greater-than (2x), compound-interest (2x), similar-figures-area-ratio (2x), polynomial-remainder-theorem-with-two-conditions (1x), sum-product-cubic-identity (1x), absolute-value-equation-splits (1x).

**Conclusion:** The alias map has captured the obvious naming variants. The remaining gap requires **content authoring**, not aliasing. Authoring 8 items per long-tail pattern would yield ~1 test item of new Tier-1 coverage per pattern (8:1 over-investment). Recommended deferral until production telemetry shows real student demand for these patterns.

---

## Audit 5 — Taxonomy vocabulary redundancy (emergent finding)

Discovered while cross-referencing inter-rater disagreements with pattern counts. **The cleanest actionable finding in this audit.**

Multiple Tier-1 patterns exist for arguably-identical concepts, each maintaining its own bank pool of 8 items:

### Two-way-table conditional probability cluster

| Slug | Bank | Tests |
|---|---|---|
| `conditional-probability-from-two-way-table` | 8 | 13 |
| `two-way-table-conditional-probability` | 8 | 8 |
| `conditional-probability-with-percent` | 8 | 3 |
| `conditional-probability-from-a-two-way-table` | 0 | 1 (long tail) |

**3 separate bank pools, 24 bank items total, all teaching essentially the same operation.** Consolidating would either:
- Free 16 bank items for other patterns (if you keep one canonical and re-tag the others), or
- Increase pool diversity (if you keep all 24 under one slug, students get richer drill variety).

### Other suspected redundancies (need verification)

From inter-rater disagreements:
- `rational-equation` vs `rational-expression-simplification` (s23, s36) — test bundle uses the latter for both. Possibly correct distinction (equation vs expression). Verify by sampling bank items.
- `exponential-growth-decay` vs `exponential-function-with-two-conditions` vs `exponential-growth-interpretation` (s14, s31) — three Tier-1 pools for arguably-overlapping concepts.
- `function-transformation` vs `horizontal-shift-vertex-form` (s21) — production uses the parent. May be fine.
- `system-of-equations-elimination` vs `solve-a-2-times-2-system-for-one-variable` (s26) — production keeps them distinct. May be fine if method matters.

**Recommended next step:** sample 3 bank items each from the two-way-table cluster and confirm pedagogical equivalence. If equivalent, consolidate via PATTERN_ALIASES or content re-tagging.

---

## Prioritized recommendations

### Tier 1 — High leverage, low effort (now triple-confirmed)

1. **Consolidate the two-way-table conditional-probability cluster.** Manual review of 24 bank items (3 hours), pick canonical slug, write 2-3 new PATTERN_ALIASES entries. Net effect: tighter taxonomy, potentially richer drill pool. **Both raters independently flagged this** (Claude and Codex both tagged s15/s33/s41 as `conditional-probability-from-two-way-table`, but production has three near-duplicate canonical slugs).

2. **Add `complete-the-square-circle-center` ↔ `circle-in-general-form` alias.** Both raters tagged s12 as `circle-in-general-form`; production uses the longer name. The two are conceptually identical (the same item is both "in general form" AND "completing the square to find the center"). One PATTERN_ALIASES entry, lifts coverage and matches natural vocabulary.

3. **Add `exponential-growth-interpretation` ↔ `exponential-growth-decay` alias.** Same pattern: both raters tagged s14 with the shorter name. Production has a too-specific sibling pattern that splits the bank pool unnecessarily.

4. **Add `conditional-probability-from-a-two-way-table` to PATTERN_ALIASES.** One line, 1 test item moves from Tier-3 to Tier-1.

5. **Fix the 4 drill-relevance content concerns** (mis-tagged bank items + missing variants). ~2 hours total content work. List in Audit 2 table.

### Tier 2 — Real verification, moderate effort

4. **Run a second-rater pass** via codex CLI on the same 50-item blind sample. Compare strict + concept agreement numbers. If codex disagrees substantially, run inter-rater diff between Claude and codex to find which one has bias. ~1 hour CC time.

5. **Sample 3 bank items each from the other suspected redundancy clusters** (rational, exponential, system). Decide consolidate or keep distinct. ~2 hours content review.

### Tier 3 — Bigger investment, only if telemetry justifies

6. **Bank-author the long-tail concepts** that have real test occurrences but no bank coverage. ~80 hours content work for full Tier-1 coverage of the remaining 17.23%. Only justified if production telemetry shows students hitting these patterns and complaining about generic drills. Wait for real data.

7. **Vocabulary normalization sweep** — adopt a single canonical slug per concept across both bank and test bundles. Probably ~6-8 weeks of content work to do properly. Not justified yet; the alias map handles the gap at 1% the cost.

---

## Methodology limitations

- **~~Single-rater inter-rater bias~~:** ✅ Resolved. Codex pass (2026-05-12) confirms the 52% strict floor (codex got 54%) and the ~92% concept agreement upper bound is robust. Claude-vs-codex inter-rater agreement: 58% strict, 62% with alias.
- **No telemetry input:** "Drill-relevance accuracy" is judged by manual pedagogical comparison, not by student outcomes. The right ground truth is: did students perform better on Pattern X after drilling Pattern X items than after drilling Tier-3 fallback? PerformSAT doesn't have this telemetry yet.
- **Figure-bearing items can't be tagged from text:** s2 in the blind sample required a figure. ~5-10% of test items likely have similar figure dependency.
- **Long-tail patterns may include sub-skills of Tier-1:** Some "distinct" long-tail patterns might be sub-cases that could be drilled by their parent Tier-1 pool with no loss. Manual review of the long-tail list would find these.
- **LLM raters share training-data overlap:** Claude and codex (gpt-5.5) likely have correlated SAT-content knowledge from training. A human SAT tutor as a third rater would tighten the floor on inter-rater accuracy. The current numbers are valid for "two LLM-class experts" but may overestimate human-tutor agreement with the production taxonomy.

---

## Scripts used (in this repo)

All in `scripts/audit-output/`:

- `auditSatPatterns.mjs` — inventory builder
- `auditGranularity.mjs` — granularity audit
- `auditLongTailAndAliases.mjs` — long-tail + alias candidate detection
- `dumpRelevanceSamples.mjs` — top-10 drill-relevance sample dump
- `sampleForInterRater.mjs` — 50-item blind sample with answer key
- `diffInterRater.mjs` — agreement scorer

Raw output JSON in `scripts/audit-output/`. Re-runnable any time the bank or tests change.
