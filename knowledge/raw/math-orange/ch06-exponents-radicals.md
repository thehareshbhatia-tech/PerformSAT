# Raw extraction — Math Orange source, Ch. 6 (Exponents and Radicals/Roots)

Source studied: math-orange chapter 6 (scans p0115–p0129). Extraction is written from
understanding after reading; no wording, examples, or problems retained. Domain:
Advanced Math (also feeds algebra fluency). Everything below is our own formulation.

## Concepts taught (candidate nodes)

- `exponent-as-repeated-multiplication` — an exponent counts how many copies of the
  base are multiplied together; "power" names the value of the whole term. This
  counting definition is the root from which every rule is re-derived.
- `exponent-special-values` — anything to the 0th power is 1 (including 0^0 by the
  book's convention), anything to the 1st power is itself, base 1 gives 1 forever,
  base 0 gives 0 for positive exponents. Worth a node because these are the fast
  "evaluate instantly" cases the test hides inside bigger expressions.
- `negative-base-parity` — a negative base to an even power is positive (negatives
  pair off), to an odd power negative (one unpaired negative survives).
- `exponent-product-rule` — same base multiplied: add exponents. Only valid for
  multiplication and only with identical bases.
- `exponent-power-rule` — a power raised to a power: multiply exponents; order of the
  two exponents is interchangeable (commutativity of multiplication).
- `exponent-distributes-over-mult-div-only` — an outer exponent passes onto every
  multiplied or divided factor inside, but NEVER onto added/subtracted terms. The
  single most trap-relevant fact in the chapter.
- `exponent-quotient-rule` — same base divided: numerator exponent minus denominator
  exponent.
- `negative-exponent-reciprocal` — negative exponent = reciprocal with positive
  exponent; works in both numerator and denominator directions. Crucially, only the
  exponentiated factor flips — an attached coefficient stays put.
- `fractional-exponent-radical-equivalence` — exponent b/c means "c-th root of the
  b-th power" (or the b-th power of the c-th root; both orders equal because
  exponents multiply). Square root ≡ 1/2 power, cube root ≡ 1/3 power.
- `principal-root-convention` — even roots of numbers evaluate to the non-negative
  value only, by convention, no matter which notation (radical sign or 1/2 power) is
  used. Explains why answer choices sometimes carry |x|.
- `radical-splitting` — a root distributes across multiplied factors, so pull perfect
  square (or cube) factors out of the radicand to simplify; never split across a sum.
- `improper-exponent-mixed-form` — an exponent like 7/2 splits into whole + proper
  fraction, which converts the term into (integer power) × (radical) — the "mixed
  number" of exponent notation. Needed to match radical-form answer choices.
- `same-base-exponent-equating` — if the same base is raised to two exponents and the
  results are equal, the exponents are equal — EXCEPT when the base is 0, 1, or −1.
  Test items typically add a positivity constraint to remove the exceptions.
- `raise-both-sides-strategy` — to solve/transform an exponent equation, raise both
  sides to a chosen power so the variable's exponent multiplies to the target (either
  1 to solve for the variable, or directly to the asked-for power).
- `common-base-rewriting` — when two exponential terms have different numeric bases
  sharing a prime factor, rewrite both over the shared base so product/quotient rules
  apply and exponents can be equated.

## Teaching philosophy observed

- Every rule is derived by expansion first: write the factors out, count them,
  recombine, and the rule falls out. Rules are never presented as memorization-first.
  This "expand and recount" derivation doubles as the remediation move when a student
  misapplies a rule.
- Explicitly restores invisible notation (an unwritten exponent is 1, an unwritten
  coefficient is 1) before applying rules, then tells students to drop the crutch
  once fluent. Good scaffold-then-fade pattern.
- Wrong-rule beliefs are refuted with small numeric counterexamples (evaluate both
  sides with concrete numbers and show they differ), not with assertion. This is the
  strongest pedagogical move in the chapter and worth copying as a tutor behavior.
- Rules are stated as bidirectional rewrite tools — "simplifying" is framed as
  rewriting toward whatever form the problem rewards, since any exponential term has
  infinitely many equivalent forms. This reframing matters for SAT equivalence items.
- Micro-drill immediately after each micro-concept, with harder items visually marked;
  chapter ends with recap + mixed problems + answer key. Escalation inside drills:
  single-rule items first, then multi-base, then items that plant an added pair of
  terms among multiplied ones to force operation-checking.
- Edge cases (negative bases under fractional exponents, |x| from even roots) are
  acknowledged and then deliberately de-scoped: students are told the test writes
  constraints (x > 0) to duck these, so don't over-invest. Honest scoping.

## Expert reasoning patterns (generalized)

- **Normalize to exponent form.** Before manipulating anything containing radicals,
  convert every radical to a fractional exponent; do all algebra in exponent land;
  convert back only if the answer choices use radical notation.
- **Answer-shape scan first.** On "equivalent to" items, look at the choices before
  working: note what notation they share (no negative exponents? radicals present?
  single term?) and pick the rewrite direction that lands in that shape. This turns
  an open-ended simplification into a targeted transformation.
- **Common-base hunt.** Different numeric bases → check whether both are powers of a
  small prime; rewrite and let the exponents carry the algebra. When a linear
  combination like (ax + by) is asked for, expect it to appear as an exponent after
  base-unification, then equate exponents.
- **Aim the raise.** Choose the power to raise both sides by working backward from
  the exponent you want, not forward from the one you have. Raising by a power that
  "adds" instead of multiplies (multiplying both sides by another power of x) is
  valid but useless — a dead-end the source explicitly demonstrates.
- **Split constant from variable under a radical**, root the constant, exponent-rule
  the variable. Order: constant part first (it usually evaluates), variable second.
- **Calculator note (theirs):** when evaluating negative bases, parenthesize the base;
  a bare minus sign binds after the exponent and silently flips the sign.
- **Desmos strategy (ours, for our product):** exponent-equivalence items are
  Desmos-checkable — define the stem as f(x) and a candidate choice as g(x); identical
  graphs/tables over the stated domain confirm equivalence. Two cautions: restrict to
  the given constraint (x > 0 etc.) because fractional-exponent branches diverge for
  negatives, and remember Desmos confirms but doesn't produce the rewritten form —
  algebra is still faster when choices differ structurally. For solve-items
  (x^5 = 2, find x^25), plugging the numeric value through the calculator is a
  legitimate full alternative to algebra.

## Misconceptions targeted (with the why)

- **exponent-over-addition** — believing an outer exponent distributes onto added
  terms. Forms because the distributive property of multiplication over addition is
  drilled for years and the notation looks analogous. Produces the classic
  squared-binomial-without-middle-term error. Refutation: evaluate a small numeric sum
  both ways.
- **product-vs-power confusion** — multiplying exponents when multiplying same-base
  terms (or adding when raising a power to a power). Forms because both rules are
  memorized as slogans without the counting model; students grab the wrong slogan.
  The counting derivation ("how many factors total?") self-corrects this.
- **merging-added-powers** — collapsing a sum of same-base different-exponent terms
  into a single power. Forms from over-applying "same base → combine". Only same base
  AND same exponent terms combine, and they combine like counters (coefficients add),
  not by touching exponents.
- **coefficient-flip** — moving an entire term (coefficient included) into the
  denominator when clearing a negative exponent. Forms because students see the term
  as one atomic object; the exponent only governs the factor it's attached to.
- **coefficient-root-skip** — when a whole product is raised to a fractional power,
  applying it to the variable but leaving the numeric coefficient untouched (or
  taking the wrong root of it). The outer exponent hits EVERY factor.
- **plus-minus-root** — believing an even root of a number is ±. Schooling around
  solving x² = k (where ± genuinely appears) bleeds into evaluation of the radical
  symbol itself, which is defined as principal (non-negative) only.
- **radical-over-addition** — splitting a root across a sum, mirror of
  exponent-over-addition in radical clothing.
- **calculator-precedence-negative-base** — typing a negative base without
  parentheses; the tool computes exponent-then-negate. A tooling misconception, not a
  math one, but produces identical wrong answers.

## SAT patterns claimed (unverified-claim — check against our bank/officials)

- The dominant question shape for this topic is "which of the following is
  equivalent to …" with 4 structural rewrites as choices. (unverified-claim)
- Stems add positivity constraints (x > 0, a > 0) specifically to neutralize the
  −1/0/1 base exceptions and |x| issues; when the constraint is absent, expect an
  absolute-value form in choices. (unverified-claim)
- Recurring item archetypes: nested-power exponent matching (find the unknown
  exponent making two towers equal); quotient of two radicals of different indices
  reduced to a single fractional exponent; a linear equation given up front whose
  left side reappears as an exponent after common-base rewriting; grid-in "one
  possible value" items exploiting multiple (base, exponent) factorizations of a
  number like 27; exponential-function ratio items where f(t)=b^t and a ratio of two
  outputs pins b via a small integer power. (unverified-claim)
- Real-test cross-reference lists per section imply high official-item density for
  6.2 and 6.3 material. (unverified-claim)

## Prerequisite edges implied

- exponent rules ← multiplication/commutativity fluency (order-free regrouping of factors)
- everything in the chapter ← `exponent-as-repeated-multiplication`
- fractional exponents ← square/cube root familiarity
- `improper-exponent-mixed-form` ← product rule + fractional-exponent equivalence
- `raise-both-sides-strategy` ← power rule + fractional exponents
- `common-base-rewriting` ← power rule + prime factorization instinct
- Ch. 7 polynomial multiplication ← product rule (source says so explicitly)

## Difficulty escalation observed

Single-rule recall → two rules chained → negative + fractional exponents combined in
one term → multi-variable terms with coefficient roots → different numeric bases
requiring rewriting → exponent equations wired to a separate linear equation. Drill
"challenge" items are the same skills with more layers, not new ideas — good evidence
that hard mode here = composition depth, not novel content.

## What this source does well / poorly

**Well:** first-principles derivations that double as remediation; numeric
counterexamples for every trap rule; bidirectional framing of rules as rewrite moves;
answer-choices-first strategy teaching; honest de-scoping of pathological edge cases;
clean summary table of all rules with correct/incorrect contrast rows.

**Poorly:** almost no calculator/Desmos integration (one parenthesization warning;
otherwise pure algebra — our product should add the Desmos verification layer);
long-winded prose between drills; no diagnostic guidance (which wrong answer implies
which misconception); doesn't quantify which rules the test weights most; the |x|
discussion is flagged as ignorable trivia when it actually appears in answer choices.
