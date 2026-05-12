# SAT Pattern Granularity Revision Proposal

**Date:** 2026-05-12
**Trigger:** User stated principle that pattern categorization must be precise to the level where each pattern requires a **distinct method** (e.g. `parallel-line-through-a-point`, `perpendicular-line-tangent-to-circle`), not at a textbook-unit level (e.g. `linear-equations`).
**Scope:** Math-only. Targets the alias map and existing Tier-1 patterns; does NOT propose new patterns for the long tail (separate decision).

---

## The principle

> A pattern is the correct granularity when a student who has mastered one cannot, on test day, apply that mastery to a question of a different pattern without applying a **different method**.

Corollary 1: If a student can solve question X by recognizing a 5-12-13 triple but freezes on a generic Pythagorean setup with sides 7 and 12, those are different patterns.

Corollary 2: If a student can evaluate f(3) but freezes when asked "given f(a) = -7, find a," those are different patterns.

Corollary 3: If a student can build P(t) = a·b^t from "doubles every 3 hours" but freezes when asked "what does 0.73 mean in P(t) = 8000(0.73)^(t/4)," those are different patterns.

This principle prioritizes **drill precision** over **coverage statistics**. Tier-1 coverage will temporarily drop until new bank pools are authored.

---

## Methodology

1. Read every PATTERN_ALIASES entry. Classify as KEEP (pure naming variant), SPLIT (distinct method), or BORDERLINE.
2. For each top-10 Tier-1 pattern, examine 2-3 test items + 3 bank items side-by-side. Identify patterns that bundle multiple distinct methods.
3. Cross-reference Audit findings from `docs/SAT_PATTERN_AUDIT_2026-05-12.md`.
4. Compose a single recommended-changes list with cost estimates.

---

## Findings

### Part A — Alias map: entries to REMOVE under the principle

Of 73 current PATTERN_ALIASES entries, **18 should be removed and surface as their own patterns**:

#### A1. Function evaluation cluster (4 splits)

```
'solve-f-x-c'                              → 'function-evaluation'  ❌ REMOVE
'solve-f-a-c'                              → 'function-evaluation'  ❌ REMOVE
'solving-for-input-from-output'            → 'function-evaluation'  ❌ REMOVE
'solving-for-the-input-given-the-output'   → 'function-evaluation'  ❌ REMOVE
```

**Surface as:** `solve-for-input-from-output` (one new canonical pattern, takes all 4 inverse-evaluation variants).

**Why:** "Compute f(3)" requires substitution. "Given f(a)=−7, find a" requires solving an equation. These are different mental operations. The current alias hides ~5-7 test items inside the `function-evaluation` pool where they shouldn't be.

**Keep aliased:** `solving-with-function-notation`, `solving-via-function-notation`, `function-evaluation-in-context`, `exponential-function-evaluation`, `function-evaluation-with-quadratic` — these are direct evaluation in different surface contexts, same method.

#### A2. Pythagorean triple recognition cluster (5 splits)

```
'pythagorean-theorem-5-12-13'              → 'right-triangle-pythagorean'  ❌ REMOVE
'pythagorean-theorem-5-12-13-triple'       → 'right-triangle-pythagorean'  ❌ REMOVE
'pythagorean-theorem-5-12-13-family'       → 'right-triangle-pythagorean'  ❌ REMOVE
'pythagorean-theorem-6-8-10-2x-3-4-5'      → 'right-triangle-pythagorean'  ❌ REMOVE
'pythagorean-theorem-multiple-of-3-4-5'    → 'right-triangle-pythagorean'  ❌ REMOVE
```

**Surface as:** `pythagorean-triple-recognition` (one new canonical, takes all 5 variants — they all describe "spot the triple to skip the computation").

**Why:** Triple recognition is a **memorization-shortcut skill**, not a computation skill. A student trained only on generic Pythagorean (a² + b² = c²) won't see the shortcut. SAT rewards both: knowing the triples saves 30-60 seconds per question.

**Keep aliased:** `pythagorean-theorem-on-a-rectangle` — diagonal of a rectangle is just Pythagorean with the dimensions; not a triple shortcut.

#### A3. Trig with specific triples (3 splits)

```
'soh-cah-toa-in-a-5-12-13-triangle'              → 'right-triangle-trig-ratios'  ❌ REMOVE
'soh-cah-toa-tangent-in-a-9-40-41-triangle'      → 'right-triangle-trig-ratios'  ❌ REMOVE
'right-triangle-trigonometry-with-perimeter'      → 'right-triangle-trig-ratios'  ❌ REMOVE
```

**Surface as:**
- `trig-ratio-with-known-triple` — the first two; merge concept (triple recognition + read off the trig ratio).
- `trig-ratio-from-perimeter` — the third one is its own pattern: given perimeter (one constraint), set up the triangle, then take the ratio. Different setup.

**Keep aliased:** `soh-cah-toa` (short form for the canonical), `soh-cah-toa-in-a-3-4-5-triangle` if it exists (this is in the bank as its own slug, see "Trig with 3-4-5 family" below).

#### A4. Vieta's vs factoring (3 splits)

```
'sum-product-of-roots-vieta-s'             → 'quadratic-via-factoring'  ❌ REMOVE
'vieta-s-with-product-sum-relation'        → 'quadratic-via-factoring'  ❌ REMOVE
'quadratic-vieta-s-sum-product'            → 'quadratic-via-factoring'  ❌ REMOVE
```

**Surface as:** `vieta-sum-product-of-roots` (one canonical, takes all 3).

**Why:** Factoring is "find (x − r)(x − s)." Vieta's is "use sum=−b/a and product=c/a directly without finding the factors." On test day they're solved differently. A student who can factor doesn't necessarily know Vieta's; the latter is faster on harder problems where the factors are ugly.

**Keep aliased:** `zero-product-property` (literally the factoring step), `quadratic-by-factoring`, `polynomial-factoring-with-given-factor` (factoring variants).

#### A5. Tangent-to-circle vs tangent-to-parabola (1 split)

```
'tangent-line-to-circle-discriminant-0'    → 'tangent-line-and-discriminant'  ❌ REMOVE
```

**Surface as:** `line-tangent-to-circle`.

**Why:** Parabola tangent (set line = quadratic, get a single quadratic, set Δ=0 for one solution) is one method. Circle tangent (use distance-from-center = radius, OR set line into circle equation, get a quadratic, Δ=0) is a different geometric setup. The hint that this is sneaky: the existing comment block in `extractSatPattern.js` already notes "'Building Triangle from Tangent' is a circle-tangent geometry problem, NOT the discriminant pattern — left distinct" — so circle-tangent has been semi-acknowledged as different already.

**Keep aliased:** `tangent-line-via-discriminant-0` (parabola-tangent restatement).

#### A6. Mis-aliased entries (2 cleanups)

```
'linear-cost-setup'                        → 'two-equation-system-from-a-word-problem'  ❌ REMOVE
'percent-complement'                       → 'basic-probability'                        ❌ REMOVE
```

**Surface as:**
- `linear-cost-equation-setup` — single linear equation setup; NOT a 2-equation system. The current alias sends single-variable cost problems into a 2-variable bank pool. Wrong by structure.
- `percent-complement` — 100% − x% computation. Has nothing to do with probability complement. Should be its own pattern (or aliased to `percent-of-a-whole` if that's pedagogically equivalent).

These two are cleaner than splits — they're alias **bugs** that survived.

---

### Part B — Existing Tier-1 patterns to SPLIT

Reviewed top 10 Tier-1 patterns by test occurrence. Three should be split into sub-patterns under the principle:

#### B1. `exponential-growth-decay` (20 test items, 8 bank) → 2 patterns

**Current state:** Pool serves both "build a model from conditions" AND "interpret parameters of a given model."

**Evidence from samples:**
- Test sample 1: "Bacteria doubles every 3 hours, initial 500 — write P(t)" (BUILD)
- Test sample 2: "P(t) = 8000(0.73)^(t/4) — by what percent does it decrease every 4 hours?" (INTERPRET)

**Surface as:**
- `build-exponential-model` — given growth/decay rate + initial + time unit, write a·b^t
- `interpret-exponential-parameters` — given a·b^t, identify what a, b, and any exponent denominator mean in context

**Why:** Different skills. Building requires identifying which value is `a` (initial) vs which is `b` (multiplier). Interpreting requires translating multiplicative language ("decreases by X% per Y units"). A student who can do one may freeze on the other.

#### B2. `multi-step-linear-equation` (20 test items, 8 bank) → 2 patterns

**Current state:** Pool is all pure-algebra multi-step. Tests include word-problem-to-multi-step.

**Evidence:** Already documented in `docs/SAT_PATTERN_AUDIT_2026-05-12.md` Audit 2 (concern row).

**Surface as:**
- `pure-algebra-multi-step-linear` — current bank fits; pure algebra like `3(x+4) − 2 = 19`
- `word-problem-to-multi-step-linear` — translate a word problem into a multi-step linear equation, then solve

**Why:** Translation from English to equation is the hard part of word problems. Pure-algebra drills don't teach the translation step.

#### B3. `function-evaluation` (15 test items, 8 bank) → 2 patterns

**Current state:** Bank is direct evaluation. Tests + alias map mix in inverse-evaluation.

**This combines with A1 above.** Net result:
- `function-evaluation` (direct, current bank fits)
- `solve-for-input-from-output` (inverse — gets the 4 aliased entries from A1 + a few existing items if they should be re-tagged)

#### B4. (Considered, decided against)

- `right-triangle-trig-ratios` — examined; both "compute a ratio from sides" and "set up an expression with sin/cos" use the same definitions. KEEP as-is.
- `exponent-rules-with-radicals` — one bank item is mis-tagged (`bank-am-085` has no radicals); re-tag, then the pattern is homogeneous. KEEP as-is.
- `vertex-form-from-two-conditions` — both observed test variants use the same substitute-then-solve method. KEEP as-is.
- `shifted-output` — surface variation is wide (linear cost, raw algebra, word problems) but the core operation is identical: solve for one expression, plug into a related one. KEEP as-is.

---

## Consolidated list of new patterns to create

| New pattern | Source aliases / splits | Bank items needed (≥8) |
|---|---|---|
| `solve-for-input-from-output` | A1 (4 aliases) + B3 split | 8 |
| `pythagorean-triple-recognition` | A2 (5 aliases) | 8 |
| `trig-ratio-with-known-triple` | A3 (2 aliases) | 8 |
| `trig-ratio-from-perimeter` | A3 (1 alias) | 8 |
| `vieta-sum-product-of-roots` | A4 (3 aliases) | 8 |
| `line-tangent-to-circle` | A5 (1 alias) | 8 |
| `linear-cost-equation-setup` | A6 (1 mis-alias) | 8 |
| `percent-complement` | A6 (1 mis-alias) | 8 |
| `build-exponential-model` | B1 split | 8 (existing pool may fit some) |
| `interpret-exponential-parameters` | B1 split | 8 (existing pool may fit some) |
| `pure-algebra-multi-step-linear` | B2 split | 8 (existing pool already fits) |
| `word-problem-to-multi-step-linear` | B2 split | 8 |

**12 new patterns. Up to 96 new bank items needed.**

In practice, fewer than 96 are net-new because:
- Existing bank items currently under `function-evaluation`, `exponential-growth-decay`, `multi-step-linear-equation`, etc. will be **redistributed** into the new sub-patterns. Many fit naturally.
- Items currently aliased to `quadratic-via-factoring` from Vieta's variants are likely already in the bank under one of the Vieta's keys — they just need their alias removed (no new authoring).

**Realistic estimate: 50-70 net-new bank items.**

---

## Cost and timeline

| Step | Effort (human) | CC effort | Notes |
|---|---|---|---|
| Update `PATTERN_ALIASES` (remove 18 entries, fix 2 mis-aliases) | 30 min | 5 min | Mechanical edit + test |
| Re-tag existing bank items into new sub-patterns | 2-3 hours | 1 hour | ~40-60 items to inspect and re-tag |
| Re-tag existing test bundle items if needed | 1 hour | 30 min | Probably 10-20 items |
| Author new bank items to reach Tier-1 threshold | 1-2 weeks | ~4 hours | 50-70 items at your authoring rate |
| Update `bank:validate` to accept new pattern names | 15 min | 5 min | Trivial |
| Re-run audit pipeline to confirm | 5 min | 5 min | Already scripted |

**Total: 1-2 weeks of mostly content-authoring work.**

---

## Net coverage impact

**Immediately after alias removal + tag redistribution (before new bank authoring):**

- Main-test Tier-1 coverage will **temporarily drop**. Items previously hidden inside `function-evaluation` (inverse variants), `right-triangle-pythagorean` (triple-recognition variants), etc. fall to Tier-3 because their new patterns have no bank pool yet.
- Estimated drop: 82.77% → ~73-76% (rough; needs the script to confirm).

**After authoring brings new patterns to ≥8:**

- Main-test Tier-1 coverage climbs back to **~85-88%**.
- More important: **drill precision goes up across the board**. Students who miss inverse-function-evaluation get drilled on inverse-evaluation, not direct. Students who miss 5-12-13 triple recognition get drilled on triples, not generic Pythagorean.

This is the **right trade**.

---

## Implementation order

If you decide to proceed, recommended sequence:

1. **Day 1 (1 hour):** Edit `PATTERN_ALIASES`. Remove the 18 entries listed above. Fix the 2 mis-alias bugs. Add a comment block explaining the new principle so future authors don't re-add aliases. Run `bank:validate` + `npm test` to confirm nothing breaks. Commit.

2. **Day 1 (2 hours):** Re-tag existing bank items into the new sub-patterns. The script `scripts/auditSatPatterns.mjs` will show you which items are currently under each soon-to-be-split pattern; sample each, decide which new sub-pattern it belongs to, edit the explanation header. Commit.

3. **Day 2-N (1-2 weeks):** Author bank items for the new patterns. Author 8 items per pattern in priority order (B1 and B3 first — they have the highest test occurrences). One pattern per batch, commit per batch. Run `bun scripts/auditSatPatterns.mjs` after each batch to track Tier-1 coverage climbing.

4. **Continuous:** Update `docs/AUTHORING_SPEC.md` (in `src/data/questions/bank/`) to encode the granularity principle as policy. Future authoring won't drift back toward over-broad patterns.

5. **End-state:** Re-run all 4 audits from `docs/SAT_PATTERN_AUDIT_2026-05-12.md`. Compare numbers. Confirm Tier-1 coverage is back above 85% AND inter-rater agreement on a fresh blind sample is higher than the 52-54% baseline (because vocabulary is now more discriminating).

---

## What this proposal does NOT do

- **Doesn't touch the long tail (83 patterns at 1-7 test occurrences).** Those are genuine concept gaps. Separate authoring decision; revisit only with telemetry.
- **Doesn't reorganize the R&W bank.** R&W routes by skill, not pattern; out of scope per `project_drill_routing_exact_question_type.md`.
- **Doesn't change the 3-tier cascade architecture.** Tier 1 / Tier 2 / Tier 3 logic stays exactly as-is. This is content + alias-map only.
- **Doesn't add new alias entries for the long-tail audit candidates** (s12, s14 from the inter-rater study). Those should be re-examined under THIS principle: are `complete-the-square-circle-center` and `circle-in-general-form` really the same method, or are they different? Probably the same (both involve completing the square). Add the alias. Same for `exponential-growth-interpretation` — under this proposal that goes under `interpret-exponential-parameters` (a new pattern), not as an alias.

---

## Open questions for the user

1. **Do you want to go ahead with the full Part A + Part B?** Or only Part A (mechanical alias cleanup, faster) and defer Part B (existing-pattern splits, more bank authoring)?

2. **Authoring rate.** Memory `feedback_dont_pad_estimates` says you ship fast. At your real rate, 50-70 bank items is closer to a week than two. Confirm before I bake estimates into the report.

3. **Coverage drop tolerance.** Are you okay with main-test Tier-1 dipping into the mid-70s temporarily while new authoring catches up? Or do you want to author NEW items FIRST, then remove the aliases (avoiding any dip)?

4. **R&W follow-up.** Should this principle eventually apply to R&W too? It would change R&W's routing strategy entirely (currently Tier-3 only, by-skill). Not now; just a flag for later.

5. **Apply to long-tail authoring policy.** Should the rule "any new long-tail pattern must require a distinct method or be aliased explicitly" be added to `AUTHORING_SPEC.md` so future content drift doesn't reintroduce broad patterns? Recommended yes.
