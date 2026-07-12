# Raw extraction — Math Source A, Ch. 8: Solving Quadratic Equations

Source: math-orange, chapter 8 (printed pp. 243–305; scans p0137–p0169).
Domain: Advanced Math (maps to our advanced-math bank domain; overlaps algebra for linear-quadratic systems).
Status: extraction complete; ready for graph synthesis. All wording, names, and examples below are ours.

---

## Concepts taught (candidate node ids + our-words definitions)

- **factoring-as-reverse-distribution** — Factoring rewrites an expression as a product of pieces (factors) whose product reproduces the original; it is distribution run backward. A pulled-out factor need not divide terms evenly (you can extract anything if you leave a fraction behind) and need not be a bare number — whole binomials can be factors.
- **zero-product-rule** — If a product of factors equals 0, at least one factor is 0. This only works when one side of the equation is exactly 0, so the universal first move is: collect everything on one side, leaving 0 on the other. Extends unchanged to any number of factors and any degree.
- **zeros-roots-solutions-vocab** — Expressions have values, not solutions; equations have solutions. "Zeros/roots" are the inputs that make an expression 0; when an equation already has 0 on one side, its solutions and the other side's zeros coincide. Separately, "root" (solution sense) must not be confused with "square root" (operation sense).
- **quadratic-standard-form** — ax² + bx + c = 0 (degree-2, one variable). Any scrambled quadratic equation can be herded into this shape by combining like terms on one side in descending degree. Most test items have a = 1.
- **quadratic-factored-form** — a(x + p)(x + q) = 0 with solutions x = −p and x = −q (note the sign flip). If p = q there is a single repeated solution; if p or q is 0 the constant term vanishes and x itself is a factor.
- **sum-product-factoring** — For x² + bx + c: find two numbers with sum b and product c; those are p and q. Core skill of the chapter. Once found, you can jump straight to solutions −p, −q without ever writing the factored form.
- **factor-sign-heuristics** — Prune the p/q search by signs: c positive → p, q share a sign (matching b's sign); c negative → opposite signs, with the larger-magnitude number taking b's sign.
- **no-constant-quadratic** — When c = 0 (e.g. x² + kx), factor out x directly: x(x + k), roots 0 and −k. Also solvable by the general routine treating c as 0.
- **divide-through-first** — When a ≠ 1 but a divides b and c cleanly, divide the whole equation by a (legal because the other side is 0 / a constant) and factor the resulting a = 1 quadratic.
- **scaled-sum-product-factoring** (source has a proprietary name for this; ours is descriptive) — a ≠ 1 generalization: find two numbers r, s with sum b and product a·c; the roots are −r/a and −s/a. Factored form, if ever needed, is a(x + r/a)(x + s/a). Degenerates to plain sum-product when a = 1.
- **completing-the-square** — Six-step mechanical routine: divide by a; move constant right; replace x² + bx with (x + b/2)² and add (b/2)² to the right to compensate; square-root both sides keeping ±; isolate x; enumerate both answers. Works on every quadratic including fraction coefficients and irrational roots. Pre-simplify b/2 once since it's used twice; the compensation constant is always positive.
- **quadratic-formula** — x = −b/(2a) ± √(b²−4ac)/(2a). Solves anything, but is slow and error-dense (nesting, square root, sign traps). Written as two fractions deliberately because −b/2a is the parabola's axis/vertex x (foreshadows graphing chapters). Derived from completing the square, so the two are equivalent in theory but differ in practice cost.
- **difference-of-squares** — A² − B² = (A+B)(A−B). Works when the constant isn't a perfect square (B = √c) and for higher even powers (x⁴ − k² factors, and a resulting x² − m factor can be decomposed again). Recognition = two terms, subtraction, both terms squarable.
- **perfect-square-trinomial** — A² ± 2AB + B² = (A ± B)². Verification test: is the middle term 2·√(first)·√(last)? Catches heavy disguises (fourth powers, two variables, radical middle terms, coefficient-laden squares).
- **known-sum-difference-substitution** — When a question gives values for x+y and x−y (or any two factors) and asks for a factorable combination (x²−y², a²+2ab+b², …), substitute the given values into the factored form; no solving for individual variables needed.
- **linear-quadratic-systems** — Solve by substitution / setting the two expressions for y equal, collapse to one quadratic in standard form, then use any solving method. Elimination (the linear-systems favorite) is rarely the right tool here. Number-of-intersections discussion deferred (to discriminant/graph chapters).
- **root-sum-product-shortcuts** — For ax² + bx + c = 0: sum of roots = −b/a, product = c/a (Vieta, unnamed in source). Answers "sum/product of all values that satisfy" questions without finding either root. Applies equally to equations, functions, expressions set to 0.
- **quadratic-in-structure** — Anything of the form (thing)² ± k(thing) ± m is a quadratic in that thing (thing = 7x, x², x−3, …), so all quadratic methods apply with the thing playing x's role.
- **repeated-expression-substitution** — When one expression appears both squared and to the first power, either factor directly treating it as the variable, or temporarily rename it (u = expression), solve the clean quadratic in u, then ALWAYS convert u-solutions back to x-solutions. The back-conversion is the load-bearing step.
- **factor-by-grouping** — For 4-term polynomials of degree ≥ 3: factor what you can from the first pair and from the second pair; a shared binomial factor emerges (by test design), reducing to zero-product. A leftover factor like (x² + positive) contributes no real roots.
- **method-selection-by-answer-choices** — Meta-skill: the answer choices predict the right method before any algebra. Whole-number choices → integer factoring exists. Choices containing √ → factoring is futile; go straight to completing the square or the formula. Fractional set-notation choices with a ≠ 1 → factored-form read-off or scaled sum-product. (Chapter opens with a method-comparison matrix — form, clues, strengths, weaknesses — establishing "any method can solve any problem, at wildly different time/error cost.")

Deferred by source to later chapters (do NOT attach here): discriminant / no-real-solution analysis, complex roots, graphs of parabolas, vertex form, extraneous solutions.

---

## Teaching philosophy observed

- **Derive before use.** The chapter first re-derives the linear-equation "formula" x = −b/a via factoring a from ax + b = 0 — not for memorization, but to set up the identical logic for quadratics. The quadratic formula, the ac shortcut, completing the square, and both Vieta shortcuts all get full derivations (appendix), reinforcing "formulaic ≠ magic."
- **One principle, many costumes.** Everything is staged as consequences of zero-product: factored form → read off roots; standard form → manufacture factors; can't manufacture → complete the square (which the formula merely packages). Higher-degree, disguised-variable, and grouping cases are presented as the same principle wearing costumes.
- **Method sequencing: cheapest-first, generalized-later.** Order: read-off from factored form → a=1 factoring → divide-through → scaled sum-product → completing the square → quadratic formula. The formula is introduced EARLY (so its clunkiness can be contrasted) but endorsed LAST. The source is unusually opinionated: completing the square is promoted as the primary tool for non-factorable quadratics because it uses smaller numbers, can be done mentally with practice, and pays forward (vertex form, circle equations, QF derivation).
- **Answer choices are part of the problem statement.** Repeatedly models reading the choices before working: radical-form choices kill the factoring plan; only one choice starting with 9a² can survive expansion; a "one possible value" prompt means two roots exist and a filter is coming.
- **"Plug in the choices" is acknowledged, then disparaged** (labeled a weak move each time it's mentioned): it works, but teaches nothing, is slow, and error-prone. Deliberate norm-setting.
- **Immediate embedded drills** after each micro-skill (find sum/product pairs → write factored forms → solve equations), with challenge items visually boxed; multi-solution worked examples (usually 2–3 solutions per example: factoring vs CtS vs QF) with a Notes block comparing costs; per-section pointers to specific released-test items; chapter recap as a bullet checklist; proofs quarantined in an appendix so the main flow stays procedural.
- **Tone**: playful asides and jokes to defuse fraction/notation anxiety ("you're in high school," mock warnings). Engagement device, not pedagogy per se.

## Expert reasoning patterns (generalized)

**Method-choice decision procedure** (the chapter's real payload — an expert runs this in ~5 seconds):
1. Read the QUESTION TAIL and CHOICES first. Asked for sum/product of solutions? → Vieta (−b/a, c/a), never solve. Choices contain radicals? → skip factoring entirely, complete the square (or QF). Whole-number choices? → integer factoring will work.
2. Shape scan: already factored or nearly (product = 0)? → read roots off, minding sign flips and non-obvious factors like (3x−2) → x = 2/3. c = 0? → pull out x. Two squarable terms with a minus? → difference of squares. First/last terms perfect squares? → run the 2·√first·√last middle-term test.
3. Repeated chunk appearing squared and unsquared? → treat the chunk as the variable (or u-rename), factor, back-substitute.
4. a ≠ 1? → try dividing through; if that makes fractions, use sum-to-b, product-to-ac; roots are the two found numbers each divided by a and negated.
5. Four terms, degree ≥ 3? → grouping; expect a shared binomial by design.
6. Otherwise → completing the square (preferred) or quadratic formula.
7. FINISH check: which root does the question actually want (positive one? y not x? the coordinate not the variable you solved for?). Re-read the tail before answering.
- **Stop-early discipline**: once the two sum/product numbers are found, solutions follow immediately; writing the factored form is optional ceremony. Similarly, don't expand (x−4)² + 2(x−4) − 15 — factor with respect to (x−4) and skip the error-prone expansion.
- **Speed heuristics inside factoring**: use sign analysis to cut candidate pairs by ~75% before testing any products.

**Desmos/graphing strategy (our addition — the source barely uses calculators and even jokes "don't cheat with graphs"; our product ships Desmos in-test, so the tutor should teach this explicitly):**
- Any "what are the solutions / one possible solution / positive solution" quadratic: type the equation's left side (or both sides as two curves) into Desmos; solutions are x-intercepts (or intersection x's). This beats algebra outright when coefficients are ugly, when choices are decimals/radicals (compare numerically: 3+√5 ≈ 5.24), and on grid-ins asking for one root.
- Linear-quadratic systems: graph both, tap the intersection — this converts the chapter's whole 8.5 section into a 20-second task, and immunizes against the ask-for-y-answer-x trap because you read the actual point.
- Sum-of-roots questions: still faster by −b/a than by graphing; Vieta beats both algebra AND Desmos here — the expert knows when the calculator is the slow path.
- Higher-degree / grouping items ("for what real value of x is this cubic true"): Desmos finds the single real root instantly; algebraic grouping is the backup/verification.
- Rule of thumb worth encoding: **algebra when structure is visible in 5 seconds; Vieta when only aggregates are asked; Desmos when coefficients are hostile, the equation is degree ≥ 3, or the ask is a coordinate.**

## Misconceptions targeted (and why students hold them)

- **misc-solve-the-expression** — Students try to "solve" a bare expression. Formed because school worksheets blur expression/equation; produces answers to questions never asked. Source counters with an explicit vocabulary box (expressions have zeros only via an implied "= 0"; equations have solutions).
- **misc-invisible-one** — In factoring x + 7xy → x(1 + 7y), students can't see where the 1 came from, because the implicit coefficient of a bare term is never written. Leads to dropping the 1 (writing x(7y)) or refusing to factor. Fix: rewrite the term as 1·x first.
- **misc-sign-flip-roots** — From (x + p)(x + q) = 0 students report p and q as the roots instead of −p, −q; from (x−4)(x+0.3) they report −4 and 0.3. Formed by pattern-matching "the numbers in the parentheses are the answers." Test writers bank on it: distractor sets include the sign-flipped pair and mixed pairs.
- **misc-three-terms-expected** — A two-term quadratic (c = 0) stalls students who learned factoring only on full trinomials. They freeze or invent a constant. Fix: c exists, it's 0; or just see the common x.
- **misc-forgot-plus-minus** — Square-rooting both sides and keeping only the positive root. Formed because school "√" exercises always return the principal root. Halves the solution set; distractors include the single-root answer.
- **misc-balancing-constant-sign** — In completing the square, students agonize over the sign of the added (b/2)² when b is negative. It's a square, hence always positive. The worry comes from overgeneralizing "keep track of signs."
- **misc-u-forgetting** — After u-substitution, reporting u's value as the answer. Formed because solving u² − 4u + 4 = 0 FEELS like finishing. Source makes reverse substitution a named mandatory step; distractors include the raw u value.
- **misc-wrong-target** — Solving correctly for x when the question wants y, the sum, the product, or only the root satisfying a constraint (a > 0, t > 0). Not a math error at all — a reading-discipline failure that test writers deliberately harvest with "thoughtfully supplied" premature-stop distractors.
- **misc-formula-always** — Defaulting to the quadratic formula on everything because it always works. It does — at 3–5× the time and with the chapter's highest error surface (nested radicals, double negatives, 2a denominators). Formed because the formula is the one thing everyone memorized.
- **misc-radical-blindness** — Attempting integer factoring when the answer choices visibly contain √. Wastes minutes searching for factor pairs that cannot exist. The cue was on the page all along.
- **misc-expand-everything** — Reflexively expanding (x+5)² − 4(x+5) + 4 into standard form instead of factoring with respect to the repeated chunk. Formed by "simplify first" schooling; costs time and multiplies arithmetic-slip opportunities.
- **misc-factored-out-constant-lost** — After factoring a from all terms (divide-through), students wonder if solutions changed or lose the a when reconstructing. Understanding: dividing an equation with 0 on one side by a nonzero constant preserves the solution set (dividing by a VARIABLE does not — flagged as a later-chapter landmine).

## Trap taxonomy evidence (from examples, drills, and answer key — design patterns only)

- **Two-root filter**: nearly every worked MC item computes two roots, then filters by a stated condition (positive, > 0, appears among choices). Distractors: the other root, the sum, sign-flips.
- **Sum-of-roots MC**: choices = {correct sum, sum with sign error, individual roots, root difference}. Vieta or bust.
- **Both-coordinates trap** (systems): choices include x-value of the intersection when y is asked.
- **Coefficient-matching items**: (ax+4)(bx+5) expanded with a+b given → two possible c values; tests distributive bookkeeping under constraints.
- **Equivalent-form items**: "which is equivalent" with disguised perfect squares / nested DoS; distractors are half-factored or exponent-erring forms like (x−3)⁴ vs (x−3)²(x+3)².
- **Non-x quadratics in grid-ins**: root of even-power equations like (x−7)⁶ = 0 (repeated root; students expect two answers).
- **Fraction-scaled DoS**: (1/5)x² − 3 rewritten as (1/5)(x−k)(x+k) — k = √15, not 15; tests whether students distribute the 1/5 before matching.
- Challenge drill items escalate by: negative product targets with negative sums; non-monic with irreducible fractions; fourth/fifth-degree with common-factor extraction preceding sum-product; equations with nonzero right side that must be normalized first ("beware the nonzero right-hand side" is a drilled reflex).

## SAT patterns claimed (unverified-claim — check against official material and our bank)

- unverified-claim: The overwhelming majority of on-test quadratics have a = 1 and factor over the integers; radical-root items are the minority.
- unverified-claim: Answer-choice form reliably telegraphs method (whole numbers → factorable; d ± √e → not factorable).
- unverified-claim: Factoring by grouping is "extremely rarely" required, and only for degree ≥ 3 with exactly four terms, constructed so a common binomial appears.
- unverified-claim: Systems items are usually pre-solved for y (substitution-ready); elimination is rarely appropriate.
- unverified-claim: The x²−y² with given (x+y) and (x−y) template recurs on real tests.
- unverified-claim: Sum/product-of-solutions questions appear often enough that −b/a and c/a deserve dedicated memorization.
- unverified-claim: Test writers supply the "not finished yet" value (wrong coordinate / unfiltered root) as a distractor systematically.
- (Source cross-references specific released-test items per section — Test 1–7 NC/C numbering plus dated QAS items 2017–2021 — so its claims are at least anchored to the old paper suite; recheck against Bluebook-era tests. Note: a "calculator section" aside betrays paper-SAT heritage; digital SAT has Desmos everywhere, which strengthens the case for our added Desmos strategy layer.)

## Prerequisite edges implied

- distribution/FOIL and binomial squaring (prior polynomials chapter) → factoring-as-reverse-distribution, perfect-square-trinomial
- exponent rules incl. x⁰ = 1, x¹ = x → quadratic-standard-form, quadratic-in-structure
- zero-product-rule → every solving method here
- ± square-root principle → completing-the-square, quadratic-formula, difference-of-squares solving
- fraction arithmetic (common denominators) → completing-the-square with a ≠ 1, scaled-sum-product
- radical simplification (√(4·5) = 2√5) → quadratic-formula answers, radical answer-choice matching
- linear-systems substitution → linear-quadratic-systems
- like-term collection / equation rearrangement → standard-form normalization
- This chapter in turn unlocks: parabola graphs & vertex form, discriminant/solution-count, extraneous solutions (next chapter), circle equations, polynomial division.

## Difficulty escalation observed (easy → hard)

1. Read roots off a factored equation (sign flip only).
2. a = 1 integer factoring; then with a filter constraint on which root to report.
3. c = 0 and divide-through variants.
4. a ≠ 1 needing scaled sum-product; set-notation fraction answers.
5. Irrational roots — CtS/QF with radical simplification; answer-form matching.
6. Pattern recognition under disguise: DoS with non-square constants, x⁴, two-variable perfect squares, radical middle terms, fraction-scaled forms.
7. Systems (linear-quadratic), with wrong-coordinate traps.
8. Structure-level moves: repeated-expression factoring / u-sub; quadratic-in-(x²) leading to 4 roots or rejected factors; cubics via grouping with a no-real-root leftover factor.
9. Constraint-driven meta items: coefficient matching with a+b given, k as positive constant, Vieta under reparameterization ((2t)² − 2(2t) − 48 as a quadratic in 2t).

## What this source does well / poorly

**Well:**
- Best-in-class method-selection instruction: the opening comparison matrix + choices-first reading + explicit cost accounting (time AND error risk) per method. This is the chapter's transplantable core.
- Everything derived; zero black boxes. The appendix proofs (ac method, CtS walkthrough with symbolic parallel column, QF from CtS, Vieta both directions) are gold for our "why it works" layers and for tutor explanations to 1500+ students.
- Honest cost talk: openly ranks methods, calls plugging-in weak, names the QF a time killer — strong opinions that give students a usable default policy, not a menu.
- Misconception-aware drill design: challenge items are precisely the known failure modes (nonzero RHS, fraction a, sign-flip bait).
- Multi-solution worked examples with post-mortem Notes comparing the approaches.

**Poorly:**
- Calculator-hostile: actively discourages graphing ("no cheating"), a stance that's wrong for the digital SAT where Desmos is native. Our graph must add a calculator-strategy node this source refuses to provide.
- Completing-the-square evangelism is overweighted for mid-band students: for a 550-scorer the QF-always policy is more robust than the source admits; CtS-primary is a 700+ optimization. Our teaching notes should differentiate by band rather than adopt the source's single policy.
- Very long verbal runways; concept density per page is low. Sequencing is excellent but the prose-to-insight ratio is poor — synthesize, don't mirror structure.
- Sign heuristics for factoring are explained in a dense paragraph that begs for a 2×2 visual (c sign × b sign); we should build that.
- Vieta shortcuts appear late (8.6) and thin, despite the trap taxonomy leaning on them; our graph should promote root-sum-product-shortcuts to a first-class node adjacent to method selection.
- Paper-SAT residue (NC/C section labels, calculator-section asides) — cross-references need re-validation against the adaptive digital format.
