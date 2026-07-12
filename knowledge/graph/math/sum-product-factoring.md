---
id: sum-product-factoring
section: math
domain: advanced-math
skill: quadratic-via-factoring
difficulty_span: [easy, hard]
prereqs: [binomial-product-templates, cancellation-legality]
unlocks: [quadratic-method-selection, chunking-repeated-structure, completing-square-quadratic-formula, extraneous-solutions-non-reversible-moves, coefficient-matching-identities]
related: [vieta-root-aggregates]
---

# Factoring quadratics — zero product, sum-product search, sign flips

## What it is
The complete factoring route for solving quadratics. Foundation: if a product of factors equals 0, at least one factor is 0 — which only works with 0 isolated on one side, so step zero is always herding the equation into (quadratic) = 0 standard form. For x² + bx + c: find two numbers with sum b and product c; the factored form is (x + p)(x + q) and the solutions are −p and −q (sign flip). For a ≠ 1: either divide the whole equation through by a when it divides cleanly, or find two numbers with sum b and product a·c — the roots are those two numbers each divided by a and negated. When c = 0, x itself is a factor. Cubics on the exam factor by pulling the monomial GCF first, leaving a factorable quadratic.

## Why it exists / why the SAT tests it
Factoring is the workhorse: the majority of on-test quadratics have a = 1 and factor over the integers (unverified-claim — verify against bank), so this is the highest-return solving skill by volume. Items rarely stop at "solve": they filter (report only the positive root), retarget (which is a factor?), or scramble the given form (product-equals-linear stems that must be normalized first). Every band from easy to hard.

## Mental model
**Zero is the only number that forces a factor to confess.** A product equal to 12 tells you nothing about its factors; a product equal to 0 pins at least one factor to 0. That's why everything moves to one side first, and why factored form is powerful: it converts one hard question (what x kills this quadratic?) into two trivial ones (what x kills each linear factor?). The sum-product search is reverse-FOIL bookkeeping: the two numbers you seek are exactly the ones the expansion would have merged into b and multiplied into c.

## Expert reasoning process
1. **Normalize first.** Nonzero right-hand side? Move everything left. Product-equals-linear stem? Expand minimally and collect. Never factor an expression that isn't set against 0 (for solving purposes).
2. **Cheap-shape checks before searching**: already factored → read roots off (mind sign flips and non-obvious factors: (3x − 2) → x = 2/3). c = 0 → pull out x; roots 0 and −b. Two squarable terms with a minus → difference of squares. Perfect-square trinomial test → repeated root.
3. **Sign-prune the search** (~75% of candidate pairs eliminated before testing): c positive → p, q share b's sign; c negative → opposite signs, larger magnitude takes b's sign.
4. **a ≠ 1**: try divide-through first (legal against 0); if fractions result, run sum-to-b, product-to-ac; roots = each number ÷ a, negated.
5. **Stop early**: once the two numbers are found, solutions follow immediately; writing the factored form is optional ceremony unless the question asks for a factor.
6. **Finish check** ([[solve-for-the-asked-quantity]]): which root does the question want? Positive one? The sum? y not x? Re-read the tail before answering.
7. Desmos route: type the expression; the x-intercepts ARE the roots. Beats algebra when coefficients are hostile, when the ask is one root on a grid-in, or for cubic factor questions (read intercepts, write factors — an intercept at p/q corresponds to the integer factor (qx − p)). Slower than the 5-second sign-pruned search on clean a = 1 items.

## Misconceptions
- **sign-flip-roots** — reading roots off (x + p)(x + q) = 0 as p and q instead of −p, −q; mixed versions on mixed signs. Forms by pattern-matching "the numbers in the parentheses are the answers." Distractor sets bank on it: the sign-flipped pair and mixed pairs are standard.
- **nonzero-rhs-factoring** — factoring the left side while the right side is 12, then setting factors equal to 12 (or to anything). Forms because "factor then set each piece equal" was learned as ritual without the zero-product justification.
- **three-terms-expected** — freezing on two-term quadratics (c = 0), or inventing a constant. Forms because factoring was only ever drilled on full trinomials. c exists; it's 0 — or just see the common x.
- **fraction-factor-blindness** — rejecting (2x − 1) as a factor because the student expects (x − root) shape with integer roots. Forms because the factor theorem was taught only with integer examples; an intercept at ½ IS the factor (2x − 1).
- **invisible-one** — in GCF pulls like x + 7xy → x(1 + 7y), dropping the 1 (writing x(7y)) or refusing to factor. Forms because the implicit coefficient of a bare term is never written.

## Diagnostic indicators
- **sign-flip-roots**: picks the sign-flipped pair (sign-flip archetype); instant on factored-form items — the speed plus wrongness is the signature.
- **nonzero-rhs-factoring**: work shows factoring with ≠ 0 right side; wrong on scrambled stems but right on pre-normalized ones — the split IS the diagnosis.
- **three-terms-expected**: skips or stalls specifically on c = 0 items; timing spike.
- **fraction-factor-blindness**: eliminates the correct (qx − p) choice; picks (x − p/q) lookalikes or an integer-root factor.
- **invisible-one**: factored answers missing a term; says "the x just disappears."

## Remediation pathways
- **sign-flip-roots** → substitution check: plug x = p into (x + p)(…) and watch it NOT vanish; then articulate that the root is the value making the factor zero. One counterexample usually kills it; if not, the zero-product foundation is missing — reteach step 0.
- **nonzero-rhs-factoring** → counterexample: 3 · 4 = 12 but neither factor is 12. Zero-product works ONLY because 0 has no nontrivial factorizations. Drill normalize-first as a reflex on scrambled stems.
- **three-terms-expected** → rewrite x² + kx as x² + kx + 0; or the direct route: both terms share x, pull it. Two worked items, misconception dead.
- **fraction-factor-blindness** → equivalence test: (2x − 1) and (x − ½) vanish at the same x; factors are equivalent iff they share a zero, and integer-coefficient forms are what choices print.
- **invisible-one** → restore the hidden coefficient: rewrite x as 1·x before pulling ([[exponent-rules-factor-counting]]'s invisible-notation habit).

## Mastery criteria
Solves clean a = 1 quadratics in under 30 seconds with sign pruning; normalizes scrambled stems unprompted; handles c = 0, a ≠ 1, and cubic-GCF variants; reads fractional-intercept factors both directions. Proof: consistency across easy-medium plus at least one hard filtered/retargeted item, with zero sign-flip distractor picks.

## Difficulty ladder
Easy: read roots off factored form. Medium: a = 1 search; root filters (positive/larger); c = 0. Medium-hard: divide-through and scaled (ac) variants; set-notation fraction answers. Hard: disguised templates (composes [[binomial-product-templates]]); repeated-expression factoring (composes [[chunking-repeated-structure]]); cubic factor items with GCF or graph route; integer-solutions constraints tying factor pairs of c to root conditions (composes [[vieta-root-aggregates]]).

## Teaching notes
- **Struggling**: zero-product FIRST as its own lesson (why 0 is special, with the 3·4 = 12 counterexample); then read-off-with-sign-flip; then a = 1 search with a written sum/product table. No a ≠ 1 until a = 1 is automatic.
- **Average**: sign pruning as a 2×2 (sign of c × sign of b); stop-early habit; normalize-first reflex on scrambled stems.
- **Advanced**: scaled sum-product; cheap-shape checks as a pre-search scan; cubic GCF route; fractional-intercept fluency.
- **1500+**: factoring as one option among five — route through [[quadratic-method-selection]]; speed-run the sign-pruned search; Desmos for hostile coefficients and cubic factor asks, algebra for everything clean. They should be choosing NOT to factor when Vieta or the graph answers the actual question faster.
