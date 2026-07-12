---
id: chunking-repeated-structure
section: math
domain: advanced-math
skill: quadratic-via-factoring
difficulty_span: [medium, hard]
prereqs: [binomial-product-templates, sum-product-factoring, cancellation-legality]
unlocks: []
related: [quadratic-method-selection, solve-for-the-asked-quantity]
---

# Chunking — treating a repeated expression as the variable

## What it is
Anything of the form (thing)² ± k(thing) ± m is a quadratic in that thing — where "thing" can be 7x, x², x − 3, or an entire radical. When a compound expression appears both squared and to the first power, you can factor directly treating it as the variable, or temporarily rename it (u = thing), solve the clean quadratic in u, then convert every u-solution back to the original variable. The back-conversion is the load-bearing step — a u-value is never the final answer.

## Why it exists / why the SAT tests it
Chunking items test structure-seeing versus symbol-pushing. The expand-everything route is always available and always worse: slower, and every expansion step is a slip opportunity the item is designed to harvest. Recurring shapes (unverified-claim on frequency; both sources present the family): repeated-binomial quadratics like (x+5)² − 4(x+5) + 4; disguised quadratics in (kx) or in x² (degree-4 equations yielding up to 4 roots or a rejected no-real-root factor); repeated chunks inside rational expressions where the chunk becomes an ordinary common factor.

## Mental model
**Squint until the repeated bundle becomes a single letter.** The quadratic machinery never cared that the variable was "x" — it operates on any symbol. A repeated compound expression IS a symbol wearing a costume; renaming it (mentally or on paper) collapses the problem to one you already own. Then the contract: **whatever you renamed, you must un-rename.** Solving for u buys a middle step, not an answer.

## Expert reasoning process
1. Scan for a repeated compound expression, especially one appearing squared and unsquared. Also triggers on: x⁴ with x² terms (quadratic in x²), radicals appearing squared and alone (chunk = the radical, carrying its ≥ 0 constraint — see [[extraneous-solutions-non-reversible-moves]]).
2. Resist expansion. Do NOT multiply out (x+5)² — the whole point is that the structure is already quadratic.
3. Factor with respect to the chunk directly if fluent, or write u = chunk explicitly and solve the u-quadratic by any method ([[quadratic-method-selection]]).
4. Filter u-values against any constraints the chunk carries (u = a radical → discard negative u; u = x² → discard negative u for real roots).
5. Back-convert every surviving u into the original variable — each u-value may yield zero, one, or two x-values. Count solutions at the x level, not the u level.
6. Answer the actual ask ([[solve-for-the-asked-quantity]]): the question may want the sum of x-solutions, the positive one, or a compound expression.
7. Desmos route: for equations, plot both sides (or the whole expression) in x directly — intersections/zeros ARE the x-answers, chunking bypassed entirely. Best when the ask is numeric; algebra remains necessary when the ask is symbolic or parameterized.

## Misconceptions
- **u-forgetting** — reporting the u-value as the answer. Forms because solving the u-quadratic FEELS like finishing — the ritual completed, an answer produced. Distractor sets include the raw u-value. The strongest single-item trap in this family.
- **expand-everything** — reflexively multiplying out the repeated binomial into standard form. Forms from "simplify first" schooling, where expansion was always the safe opening move. Costs a minute and exposes three expansion slips; slip-adjacent distractors are provided.
- **solution-count-confusion** — reporting two solutions for a quadratic-in-x² because u had two values, without expanding each into its x-roots (or without rejecting a negative u). Forms because "a quadratic has two solutions" is applied at the wrong level.
- **chunk-boundary-error** — renaming inconsistently (u = x+5 in one term, but treating the −4(x+5) as −4x+5 or leaving an x loose). Forms from incomplete visual bracketing of the chunk; produces hybrid expressions that solve to garbage.

## Diagnostic indicators
- **u-forgetting**: picks the distractor equal to a root of the u-quadratic; work stops at u = …; timing normal (they believe they finished).
- **expand-everything**: slow timing on this family; work shows full standard-form expansion; errors match expansion slips (sign or middle-term).
- **solution-count-confusion**: answers "2" on a quartic with 4 real roots, or counts a rejected negative-u branch; grid-in solution-count items expose it cleanly.
- **chunk-boundary-error**: work shows the chunk partially expanded; answer matches no standard distractor (garbage output is itself the signal).

## Remediation pathways
- **u-forgetting** → make back-conversion a named mandatory step: the last line of every chunked solution must read "x = …". Contrast question: "the equation was about x — where's x in your answer?" If it persists, it's a [[solve-for-the-asked-quantity]] discipline gap, not a chunking gap.
- **expand-everything** → cost demonstration: same item both ways, timed. Then anti-expansion drills where expansion is made painful (decimals, high coefficients) so structure-seeing pays visibly.
- **solution-count-confusion** → two-level bookkeeping table: u-values in one column, x-values expanded per u in the next, rejections crossed out with the reason. Count only the final column.
- **chunk-boundary-error** → physically bracket the chunk everywhere it appears before renaming; verify the rewritten equation contains NO loose x before solving.

## Mastery criteria
Spots the chunk within seconds on disguised items; factors with respect to it without formal substitution when clean, uses explicit u-substitution with constraints when not; always lands at x-level answers with correct solution counts. Proof: correct on a repeated-binomial item AND a quadratic-in-x² item AND a radical-chunk item — the three main costumes — with no u-value distractor picks.

## Difficulty ladder
Medium: repeated binomial, integer-factorable in the chunk. Medium-hard: quadratic in (kx) or x²; solution counting. Hard: radical chunks with domain guards (composes [[extraneous-solutions-non-reversible-moves]]); chunks inside rational expressions (composes [[cancellation-legality]]); Vieta applied at the chunk level under reparameterization (composes [[vieta-root-aggregates]]); asks for compound expressions with a ± branch.

## Teaching notes
- **Struggling**: explicit u-substitution ONLY — write the letter, rewrite the whole equation, solve, back-convert. The mental version comes later or never; the written ritual protects them. Start with chunks that are single terms (7x), not binomials.
- **Average**: both routes (direct chunk-factoring and written u-sub); the back-conversion contract drilled until reflexive; two-level solution counting.
- **Advanced**: costume breadth — x², radicals, reciprocal chunks; constraint-carrying chunks; when Desmos's plot-in-x route beats the algebra (numeric asks) and when it can't help (symbolic asks).
- **1500+**: chunking as a general re-seeing tool beyond equations — repeated binomials as common factors in rational expressions, Vieta on reparameterized quadratics like (2t)² − 2(2t) − 48. Teach them to ask "what is this a quadratic IN?" as a standing question on any hard Advanced Math item.
