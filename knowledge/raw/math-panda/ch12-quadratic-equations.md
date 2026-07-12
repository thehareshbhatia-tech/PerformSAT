# Raw notes — College Panda ch. 12: Quadratic Equations
Source: math-panda (Digital SAT ed.), pages p0069 (right half)–p0073 scans. Domain: Advanced
Math. Understanding-only extraction.

## Concepts taught

- `quadratic-standard-form` — A quadratic is a degree-2 polynomial function; the solvable
  object is the equation arranged as (quadratic expression) = 0. Arranging to standard form is
  step zero for every technique below.
- `factor-first-solve-order` — Solution hierarchy: try factoring; if the expression resists or
  coefficients are ugly, go to the quadratic formula. Factoring mechanics themselves are
  assumed prior knowledge (the book explicitly outsources them).
- `quadratic-formula-fluency` — The formula as the universal fallback, with careful sign
  handling and radical simplification (pulling square factors out of the discriminant).
- `surd-structure-matching` — A recurring exam shape: the stem shows a solution in a template
  form like (h − √n)/2 and asks for n. The skill is simplifying your own formula output into
  the SAME structural shape and reading the constant off by matching, not solving for anything
  new.
- `root-sum-product-shortcut` (Vieta's) — For a x² + b x + c = 0: roots sum to −b/a and
  multiply to c/a. Lets you answer sum/product questions WITHOUT finding roots — essential when
  coefficients contain parameters. Presented as a must-memorize pair.
- `gcf-then-quadratic-cubic-factoring` — Cubics on the exam factor by pulling the monomial GCF
  first, leaving a factorable quadratic; the factor list then answers "which is a factor /
  what's the largest possible constant" questions, with the positivity/size constraint choosing
  among candidates.
- `graph-to-factor-bridge` — Reverse-reading the factor theorem: an x-intercept at n means
  (x − n) is a factor. Graphing the expression (the book does this to a cubic) turns factoring
  questions into intercept-reading questions. This is the chapter's explicit graphing-tool
  strategy — in our product this is a direct Desmos play: plot, read intercepts, write factors.
- `fractional-intercept-integer-factor` — An intercept at p/q corresponds to the
  integer-coefficient factor (qx − p); two factor candidates are equivalent iff they vanish at
  the same x. Explains why answer choices show (2x − 1) rather than (x − ½).
- `chunk-substitution` — When a compound expression repeats (e.g., the same binomial appears
  squared and alone), rename it as a single letter, solve the resulting plain quadratic, then
  un-rename. Also powers disguised quadratics like (kx)² − 5(kx) = 6.
- `radical-equation-protocol` — Isolate the radical FIRST, then square; after solving, test
  every candidate in the ORIGINAL equation and discard failures.
- `extraneous-root-mechanism` — WHY fake roots appear: squaring destroys sign information —
  a negative-equals-positive mismatch becomes a true statement after squaring. Checking is
  therefore structural, not optional ritual.
- `point-substitution-into-parabola` — A point on a graph means its coordinates satisfy the
  equation; substituting a parameterized point (m, km) yields a quadratic in the parameter,
  with a stated sign constraint selecting the valid root.

## Teaching philosophy observed

- Ruthless scoping: factoring drills are explicitly delegated to outside resources; the chapter
  spends its pages on exam-shaped applications (structure matching, parameterized coefficients,
  factor-of-cubic, radicals) rather than mechanics.
- Shortcut with receipts: Vieta's is introduced by re-answering an already-solved example to
  show the shortcut agrees with brute force — building trust before asking for memorization.
- Mechanism over rule: the extraneous-roots section explains the sign-erasure cause rather than
  just commanding "always check." The check is motivated by understanding.
- Multiple-solution modeling: factoring-vs-graphing shown side by side for the same cubic
  (algebraic and graphical routes to identical factors), legitimizing tool choice.
- Precision about question intent: repeated emphasis on positive/largest/smallest qualifiers
  choosing among candidate roots — the algebra produces a set, the stem's adjective filters it.

## Expert reasoning patterns (generalized)

1. Rearrange to (stuff) = 0 before anything else — especially when the stem hands you an
   unarranged product-equals-linear equation.
2. Ask what the question wants: an actual root? the SUM/PRODUCT of roots? a factor? a
   parameter inside a template? Different targets → different tools; computing roots is often
   the slow path.
3. Sum/product requested, or coefficients contain a parameter → Vieta's immediately.
4. Solution shown as a radical template → run the formula, simplify the surd fully, match
   shapes term by term.
5. Repeated compound expression → chunk it into one letter; disguised quadratic in (kx) or
   (x + a) → same move.
6. Cubic factoring → GCF first; or graph it and read intercepts (Desmos-native move in our
   product); fractional intercepts → scale to integer-coefficient factors.
7. Radical present → isolate, square once, solve, then verify each candidate in the original;
   expect to throw one away.
8. Apply the stem's selection adjective (positive/largest/smallest) LAST, as a filter on the
   solution set, and answer in the asked form (b², a + b, etc. — not the raw root).

## Misconceptions targeted (and why students hold them)

- **square-before-isolating** — Students square a radical equation immediately, while a stray
  term still sits beside the root; the cross-term keeps the radical alive and the algebra
  loops. Formed because "squaring kills square roots" is remembered without its precondition.
- **skip-the-extraneous-check** — Students trust both roots after squaring. Formed because in
  most prior schoolwork every root survived, so checking felt like busywork; the exam plants
  the failing root among answer choices.
- **vieta-on-unarranged-form** — Applying −b/a and c/a to an equation not yet in standard form
  (or misreading signs of b and c). Formed because the shortcut is memorized as coefficient
  positions, and unarranged stems put the wrong numbers in those positions on purpose.
- **brute-force-with-parameters** — Attempting to solve for roots explicitly when coefficients
  contain k, producing a swamp; the item is designed so only sum/product relations resolve it.
  Root cause: only one tool (solve for x) in the toolkit.
- **fraction-factor-blindness** — Not recognizing (qx − p) as the factor form of intercept
  p/q; students reject correct choices that don't look like (x − root). Formed because factor
  theorem is taught only with integer roots.
- **answering-the-root-not-the-question** — Reporting x when the stem asks for n in the
  template, b², the sum, or the value of a companion expression. Same premature-answer reflex
  as in word problems; here the planted distractor is the raw root itself.
- **sign-slips-in-the-formula** — With negative b or c, students drop the double negative in
  −b or under the discriminant. The formula's density invites transcription errors; answer
  pairs differing only in ± or in one sign are the standard trap.

## SAT patterns claimed (mark unverified until checked vs bank/official)

- unverified-claim: "One solution can be written as ⟨surd template⟩; find the constant" is a
  recurring digital-SAT shape.
- unverified-claim: Sum/product-of-roots items with a parameter k in the coefficients (answer
  is an expression in k) are a standard hard-band family; some go a level deeper by wrapping
  the answer in another template (product = w(k+1), find w).
- unverified-claim: Factor-of-cubic items (GCF + quadratic factoring, largest/smallest constant
  variants, Roman-numeral which-are-factors variants) recur.
- unverified-claim: Radical equations with exactly one extraneous root, and "largest/smallest
  solution" phrasing, are the tested form.
- unverified-claim: Chunkable equations — a repeated binomial or (kx) power pattern — appear
  and reward substitution over expansion.
- unverified-claim: Integer-solutions constraints ("solutions are integers; which is a possible
  value of p") tie root-sum/product to factor pairs of the constant term.
- unverified-claim: Parabola-through-parameterized-point items with a sign constraint on the
  parameter appear mid-to-hard band.

## Prerequisite edges implied

- factoring mechanics (external prerequisite, explicitly assumed) → `factor-first-solve-order`
- radical simplification (√(k²m) = k√m) → `surd-structure-matching`
- factor theorem / function-graph relationship (earlier functions chapter) →
  `graph-to-factor-bridge`
- word-problem translation (ch. 11) → parameterized point/graph stems
- this chapter → parabola properties & vertex form (deferred by the author to a later
  chapter), quadratic systems, quadratic modeling

## Difficulty escalation observed

Solve a factorable quadratic → formula with surd simplification → match a solution template →
sum/product without solving → parameterized coefficients → factor a cubic (GCF or graph) →
fractional-intercept factor forms → chunk substitution → radical equations with extraneous
roots → composite stems (parameterized point + sign filter; template-inside-template like
w(k+1); integer-root constraints). Escalation is by changing the TARGET of the question away
from "the root," then by parameterizing, then by composing two techniques.

## What this source does well / poorly

- Well: teaches question-target recognition (root vs sum vs factor vs template constant) as the
  real skill; motivates the extraneous-root check mechanistically; legitimizes graph-reading as
  a first-class factoring route (maps 1:1 onto our built-in Desmos); exercises systematically
  parameterize every basic shape into hard variants — an excellent escalation blueprint.
- Poorly: zero remediation for students weak at factoring itself (outsourced); no
  completing-the-square or discriminant-as-root-counter treatment in this chapter (presumably
  later, but sum/product arrives before the discriminant concept); no vertex/graph-shape
  intuition yet, so `graph-to-factor-bridge` rests on an earlier chapter; minimal guidance on
  WHEN formula beats factoring beyond "if factoring is hard."
