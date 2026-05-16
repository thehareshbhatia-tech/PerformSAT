# CB Question Type Coverage Audit (2026-05-16)

> **STATUS — DELIVERED 2026-05-16.** All Priority-1, Priority-2, and Priority-3
> work in this audit is shipped on `main`. Bank grew from 968 → 1125
> hand-authored items; CB skills: 8 healthy / 10 thin / 1 empty → **10 healthy /
> 9 thin / 0 empty**. See CHANGELOG `[3.2.0]` and Part F (below) for the full
> completion checklist.

**Trigger:** User asked whether PerformSAT's bank has every CB question type from PT4–11 + the Educator Question Bank, and whether the taxonomy crisply differentiates types. Gave one example of a likely gap: "a is 45% of b and b is 15% of c."

**Scope:** Math-only. R&W stays Tier-3 (skill) per the existing decision in `rwBank/index.js`.

**Method:**
- Cross-referenced current bank (973 Math items, 68 surfaced patterns ≥4 each) against `cbSkillTaxonomy.js` via `scripts/audit-output/cb-coverage.json`.
- Read CB PT4 + PT11 (108 math items) to anchor a "what does CB actually test in PT4–11" baseline.
- Triangulated against prior `SAT_PATTERN_AUDIT_2026-05-12.md` long-tail data (83 patterns / 91 test items currently below Tier-1).
- The other six PDFs (PT5–10) were not read in this pass — the two-test anchor is the cheap check; if any of the gaps below need calibration before authoring, sample one or two more.

---

## Headline

**Coverage is broad but uneven.** 18 of 19 CB skills have bank items; one (`statistical-claims`, Q.G.) is empty. 10 skills are thin (<20 items each). Within healthy skills, the taxonomy already captures most question types CB tests in PT4–11 — but there are **specific flavor gaps**, the most actionable of which is exactly the one you flagged.

**Specific verdict on your example:** The chained-percent pattern exists in spirit (`compound-percent-of`, 3 bank items, count-anchored like "1200 bikers × 18% × 25%"). It does **not** exist in the pure-algebraic flavor — "a is 45% of b, and b is 15% of c, what is a as a percent of c?" — which is the form CB actually tests in PT11-M2-Q21 ("a is 55% less than b; b is 320% greater than 160"). That flavor needs its own pattern and 8+ items.

---

## Part A — CB skill coverage matrix

From `cb-coverage.json` (latest run). Bold = needs attention.

| Code | Skill | Items | Patterns ≥4 | State |
|---|---|---:|---:|---|
| P.C. | Nonlinear functions | 51 | 11 | Healthy |
| H.A. | Linear equations 1-var | 44 | 12 | Healthy |
| H.D. | Linear systems | 36 | 9 | Healthy |
| H.B. | Linear functions | 35 | 8 | Healthy |
| S.C. | Right triangles & trig | 24 | 5 | Healthy |
| Q.E. | Probability | 22 | 4 | Healthy |
| P.B. | Nonlinear equations | 21 | 5 | Healthy |
| Q.B. | Percentages | 20 | 5 | Healthy *(but missing flavors — see C1)* |
| S.D. | Circles | 17 | 4 | **Thin** |
| P.A. | Equivalent expressions | 17 | 4 | **Thin** |
| S.A. | Area and volume | 16 | 5 | **Thin** |
| Q.C. | One-variable data | 12 | 3 | **Thin** |
| H.C. | Lines in xy-plane | 11 | 3 | **Thin** |
| Q.A. | Ratios / rates / proportions | 8 | 2 | **Thin** |
| S.B. | Lines, angles, triangles | 7 | 2 | **Thin** |
| Q.D. | Two-variable data | 6 | 2 | **Thin** |
| H.E. | Linear inequalities | 6 | 1 | **Thin** |
| Q.F. | Margin of error | 5 | 1 | **Thin** |
| Q.G. | Statistical claims | **0** | 0 | **EMPTY** |

Interpretation:
- The four CB "Algebra" skills (H.A./H.B./H.C./H.D.) total 126 items, but H.C. and H.E. are starved.
- Geometry & Trig (S.A./S.B./S.C./S.D.) totals 64 items — half of Algebra. Three of the four are thin.
- Q.G. (Statistical Claims — observational study vs. experiment, scope of inference) is the only **fully empty** skill.

---

## Part B — Specific missing flavors (the part that matters most)

These are question types CB tests in PT4–11 (or the Educator Bank) where the bank has no clean pattern pool. Listed in priority order for authoring.

### B1. `chained-percent-relationship` *(your example)*  — **PRIORITY 1**

**Form:** "a is X% of b, and b is Y% of c. What is a as a percent of c?" (or "what is the ratio a:c", or "if c = 200, what is a", etc.)

**Why it's a gap:** Bank's `compound-percent-of` is count-anchored ("1200 bikers, 18% of bikers own multiple bikes…"). The pure-algebraic three-variable chain is a different mental model — students who can do filter-and-count freeze when there's no concrete count to anchor on.

**CB precedent:** PT11-M2-Q21 ("a is 55% less than b; b is 320% greater than 160"). Combines chained + signed-direction framing.

**Authoring target:** 8 items. Suggested flavors:
- "a is X% of b, b is Y% of c → a as % of c" (pure)
- "x is X% greater than y, y is Y% less than z → x in terms of z"
- "a equals P% of (b+c); b equals Q% of c → relate a, c"
- One reverse: "a is 0.09c. If a is 30% of b, what percent of c is b?"

### B2. `statistical-claims-*`  — **PRIORITY 2**

**Why:** Q.G. is the only fully empty CB skill. Even if it's underweighted on PT4–11 math (the agent didn't see one in 108 items), the Bluebook score report uses Q.G. as a category, so students who land here in the diagnostic get **no drill** today.

**Three flavors CB consistently tests** (from Educator Bank precedent — needs PDF validation):
- `observational-vs-experimental` — given a study design, identify whether it supports causation
- `scope-of-inference` — given a sample population, identify which broader population the result generalizes to
- `random-assignment-vs-random-sampling` — distinguish the two roles

**Authoring target:** 8 items minimum, ideally 12 (4 per flavor).

### B3. `percent-less-than` / `percent-greater-than-of`  — **PRIORITY 2**

**Form:** "a is 320% greater than b" (a = b + 3.20b = 4.20b — not 3.20b).

**Why it's a gap:** Bank has `percent-decrease` and `percent-increase` (computing the change between two known values), but the "X% greater than" / "X% less than" framing is its own translation step — students who can do percent-change-from-numbers freeze on the verbal form. The long-tail audit explicitly flags `percent-greater-than` (2 test items) and `percent-increase` (1 test item) as patterns with zero bank coverage.

**Authoring target:** 8 items, split between "greater than" and "less than" forms.

### B4. `reverse-exponential-back-in-time`  — **PRIORITY 3**

**Form:** "Population doubles every 75 years. In 2024 it is 1659. What was it in 1959?"

**Why:** Forward exponential is well-covered (`build-exponential-model`, `interpret-exponential-parameters`, `exponential-growth-decay`). Reverse — solving for the initial value or a past value — is a different mental operation (divide by b^n instead of multiply). PT11-M1-Q14 + PT11-M2-Q11 both hit this. Probably 1–2 items hiding inside `exponential-growth-decay` already, but no clean pool.

**Authoring target:** 8 items.

### B5. `function-from-shifted-graph`  — **PRIORITY 3**

**Form:** "The graph shown is `y = f(x + 4)`. Which of the following could be `f`?"

**Why:** Bank has `function-transformation` (forward: given f, find shifted), but the **reverse** direction (given the shifted graph, recover f) is a different inference. PT11-M1-Q23 (V-shape shifted).

**Authoring target:** 8 items.

### B6. `surface-area-symbolic` / `volume-symbolic`  — **PRIORITY 3**

**Form:** "A right rectangular prism has a square base with area `24t cm²` and height `5t cm`. What is the surface area in terms of t?"

**Why:** Bank's area/volume patterns are all numeric. The "in terms of t" variant mixes Equivalent-Expressions skill into a Geometry stem — CB does this regularly (PT11-M1-Q26).

**Authoring target:** 8 items, mostly hard-tier.

### B7. `tangent-with-parameter` (linear-quadratic system)  — **PRIORITY 3**

**Form:** "y = 2x² − 21x + 64 and y = 3x + a intersect at exactly one point. Find the value of x at that point."

**Why:** Bank has `tangent-line-and-discriminant` (4 items). The parameterized variant where the answer is the x-coordinate (not the param itself) is a different solve. Worth confirming bank items cover both directions before authoring more.

**Authoring target:** Check existing 4 first — if all are "find a," add 4 "find x" items.

### B8. Long-tail patterns confirmed absent in PT4+PT11 *(deferred, low priority)*

From `long-tail.json`: `probability-without-replacement`, `compound-interest` (financial), `polynomial-remainder-theorem`, `rational-equation-with-extraneous-solution`. None observed in PT4+PT11 either. The audit's prior conclusion stands: defer authoring these until production telemetry shows real student demand.

---

## Part C — Categorization improvements

Two structural issues with the current taxonomy.

### C1. Percent cluster is under-differentiated

Current Tier-1 patterns under Q.B. (Percentages):

| Pattern | Items | What it covers |
|---|---:|---|
| `percent-decrease` | 4 | Compute % change between two given values, downward |
| `reverse-percent` | 4 | "After 20% discount, $96 → original?" |
| `reverse-percent-multi-step` | 4 | "20% discount then 8% tax" |
| `percent-of-a-whole` | 4 | "25% of x is 48 → x" |
| `percent-of-a-number` | 4 | "What is 20% of 50?" |

**Missing from this cluster:**
- `percent-increase` (forward direction of percent-decrease — long-tail flagged this)
- `percent-greater-than` / `percent-less-than` (verbal-framing variant)
- `chained-percent-relationship` (B1)
- `compound-percent-of` exists in bank/problemSolving as 3 items — promote to Tier-1 by authoring 5 more

**Naming inconsistency:** `percent-of-a-whole` vs `percent-of-a-number`. From the bank examples they're nearly synonymous (one frames the unknown as the whole, the other as the part-finding). Either consolidate via `PATTERN_ALIASES` or rename to make the difference explicit:
- `find-part-from-percent-of-whole` (current `percent-of-a-number`)
- `find-whole-from-percent-of-part` (current `percent-of-a-whole`)

### C2. The "topic files" (`percents.js`, `statistics.js`, etc.) leak items

`src/data/questions/percents.js` has hand-authored questions covering useful patterns (Compound Percent Of, Markup Then Discount, Reverse Growth) — but the file uses plain `**Choice X is correct.**` explanations **without `**SAT Pattern: …**` headers.** They get flattened into the bank via `flattenTopicQuestions` but **lack the pattern tag**, so they only surface via Tier-3 (skill) routing. From a drill-precision standpoint they're invisible to Tier 1.

Same shape across `statistics.js`, `exponents.js`, `dimensionalAnalysis.js`, etc.

**Fix:** Either (a) backfill `**SAT Pattern: …**` headers into topic files, or (b) accept they're floor-only content and don't count them toward coverage. Option (a) is the higher-leverage move because some of these items are well-authored and would lift Tier-1 coverage immediately without writing anything new.

**Estimated impact of fix (a):** rough count from a quick grep is ~150 items across topic files lacking pattern headers. If 60% of those map cleanly to existing Tier-1 patterns, that's 90 free Tier-1 items.

### C3. Granularity principle holds, with two new applications

The 2026-05-12 audit established the principle: a pattern is at the right grain when mastery of one doesn't transfer to a different-method sibling. Re-applying to the new findings:

- **Split `percent-decrease` vs `percent-less-than`**: same arithmetic, different translation. The "verbal-framing percent" is its own skill.
- **Don't split `compound-percent-of` into count-anchor vs algebraic**: both use the same operation (multiply two rates). The difference is surface context, not method. **One pattern, eight items, half count-anchored and half pure-algebraic.**

These two examples illustrate the rule: split when the *method* changes, not when the *cover story* changes.

---

## Part D — Authoring plan (prioritized)

| Pri | Pattern | New items | CB code | Est. effort |
|---|---|---:|---|---|
| 1 | `chained-percent-relationship` (incl. user's example) | 8 | Q.B. | 1.5 hr |
| 1 | `statistical-claims-observational-vs-experimental` | 8 | Q.G. | 1.5 hr |
| 1 | `statistical-claims-scope-of-inference` | 8 | Q.G. | 1.5 hr |
| 2 | `percent-greater-than` / `percent-less-than` (one pattern, both flavors) | 8 | Q.B. | 1.5 hr |
| 2 | Backfill `**SAT Pattern: …**` headers into topic files | (~90 freed) | mixed | 2 hr |
| 2 | Promote `compound-percent-of` to Tier-1 by adding 5 items | 5 | Q.B. | 1 hr |
| 3 | `reverse-exponential-back-in-time` | 8 | P.C. | 1.5 hr |
| 3 | `function-from-shifted-graph` | 8 | P.C. | 1.5 hr |
| 3 | `surface-area-symbolic` / `volume-symbolic` | 8 | S.A. | 1.5 hr |
| 3 | Verify `tangent-with-parameter` both directions covered | 0–4 | P.B. | 30 min |
| 3 | Audit thin skills (Q.D., Q.F., H.E., H.C.) — propose authoring deltas | n/a | mixed | 2 hr audit |

**Sum of Priority-1 work:** ~24 new items, ~4.5 hours. Lifts Q.G. from empty to Tier-1, and closes the chained-percent gap.

**Sum of Priority-1 + 2 work:** 41 new items + ~90 freed via header backfill, ~7.5 hours. Pushes Q.B. into "very healthy" and gets one CB skill out of the empty bucket.

---

## Part E — What this audit deliberately doesn't do

- **Doesn't re-read PT5–10.** Two-test anchor (PT4 + PT11) is sufficient for first-pass triangulation. If any specific gap (e.g., `statistical-claims`) needs flavor calibration, sample the relevant module in one more PDF before authoring.
- **Doesn't touch R&W.** Same scoping as prior audits.
- **Doesn't propose splitting the `function-evaluation` cluster further.** The 2026-05-12 split into direct + inverse already handles this — items are present in both pools.
- **Doesn't reorganize the long-tail.** The 83 long-tail patterns remain a "real concepts but low demand" bucket; revisit only with telemetry, except where they intersect a Priority-1/2 finding above (e.g., `percent-increase` is now in scope under B3).

---

## Suggested next step

Run the chained-percent (B1) authoring as a tight batch — 8 items + Tier-1 promotion + one regression test that asserts the pattern fires Tier-1 on the user's example. That single batch:
1. Closes the gap you flagged.
2. Demonstrates the authoring playbook for the rest of the queue.
3. Adds a Tier-1 pool in Q.B. (Percentages), the most student-relevant CB skill.

If you want, the next move is `/autoplan` over this audit to lock in the work order and let me start on B1.

---

## Part F — Completion Checklist (2026-05-16)

All Part D priorities are SHIPPED. Net additions across two commits on `main`:

| Item | Status | Items added | Notes |
|---|---|---:|---|
| B1 `chained-percent-relationship` | ✓ shipped | 8 (`bank-ps-225..232`) | Closes the user's exact example |
| B2 `observational-vs-experimental-study` (Q.G.) | ✓ shipped | 10 (`bank-ps-233..240`, +2 healthy-push) | Q.G. no longer empty |
| B2 `scope-of-inference` (Q.G.) | ✓ shipped | 10 (`bank-ps-241..248`, +2 healthy-push) | Q.G. now healthy (20 items) |
| B3 `percent-greater-than-less-than` | ✓ shipped | 8 (`bank-ps-249..256`) | + 3 alias entries for test-bundle variant slugs |
| `compound-percent-of` Tier-1 promotion | ✓ shipped | +5 (`bank-ps-257..261`) | 3 → 8 (Tier-1 threshold) |
| B4 `reverse-exponential-back-in-time` | ✓ shipped | 8 (`bank-am-219..226`) | |
| B5 `function-from-shifted-graph` | ✓ shipped | 8 (`bank-am-227..234`) | |
| B6 `symbolic-area-or-volume` | ✓ shipped | 8 (`bank-geo-187..194`) | |
| B7 `tangent-with-parameter` (find-x variant) | ✓ shipped | 4 (`bank-am-235..238`) | Same SAT Pattern, different direction of question |
| C2 Topic-file header backfill | ✓ shipped via architectural fallback | (~170 lifted to Tier-1) | `TOPIC_SECTION_TO_PATTERN` map in `bank/index.js` — no rewrites |
| Granular transformations (user-flagged gap) | ✓ shipped (round 2) | 32 (`bank-am-239..270`) | `vertical-shift`, `horizontal-shift`, `reflection-of-graph`, `vertical-stretch` |
| Long-tail concept gaps | ✓ shipped (round 2) | 40 | `probability-without-replacement` (8), `compound-interest` (8), `similar-figures-area-ratio` (8), `area-of-triangle-from-coordinates` (8), `rational-equation-with-extraneous-solution` (8) |
| Q.G. healthy push (round 2) | ✓ shipped | 4 (`bank-ps-270..273`) | 16 → 20 items |
| `PATTERN_ALIASES` expansion | ✓ shipped | 6 new entries | Closes test-bundle slug mismatches |
| `PATTERN_TO_CB_SKILL` mapping | ✓ shipped | 17 new entries | All 85 surfaced patterns mapped |
| `docs/CB_QUESTION_TYPE_AUDIT_2026-05-16.md` | ✓ shipped | this file | |
| `CHANGELOG.md` `[3.2.0]` entry | ✓ shipped | | |
| `CLAUDE.md` bank counts refresh | ✓ shipped | | |

**Final state (2026-05-16):**

- Math bank: **1125 hand-authored items** (was 968) + ~170 topic items routable via section-name fallback
- CB skill coverage: **10 healthy / 9 thin / 0 empty** (was 8 / 10 / 1)
- Surfaced patterns ≥ 4 items: **85** (was 68)
- All surfaced patterns mapped to CB skills

**Validation receipts:**

- `npm run bank:validate` → 1125 items, all checks pass
- `CI=true react-scripts test` → 986/986 pass
- `node scripts/auditCBCoverage.mjs` → 85 surfaced patterns, 0 unmapped, 0 empty CB skills
- `CI=true npm run build` → compiled successfully

**What remains as future work (lower priority):**

Thin CB skills still below the 20-item threshold (audit deferred these as "telemetry-justified" Priority-3+):

- Q.F. Margin of Error: 5 items / 1 pattern — needs more pattern diversity (e.g., sample-size-for-margin)
- H.E. Linear Inequalities: 6 / 1 — needs system-of-inequalities, absolute-value-inequality patterns
- Q.D. Two-variable data: 6 / 2 — needs scatterplot-best-fit-from-graph, residual-from-table
- S.B. Lines, angles, triangles: 7 / 2 — needs parallel-lines-transversal-with-system, special-right-triangles
- Q.A. Ratios / rates: 8 / 2 — needs scale-drawing, mixture, density patterns
- H.C. Lines in xy-plane: 11 / 3 — needs distance-formula, midpoint-formula
- Q.C. One-variable data: 12 / 3 — needs box-plot, std-deviation-comparison
- P.A. Equivalent Expressions: 17 / 4 — needs factor-by-grouping, simplify-radicals
- S.D. Circles: 17 / 4 — needs arc-length, sector-area, inscribed-angle

Each represents ~8-15 items of authoring to reach healthy. Defer unless telemetry shows real student demand or PT12+ tests start emphasizing them.
