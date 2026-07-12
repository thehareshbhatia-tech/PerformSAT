# Raw extraction — Math Orange source, Ch. 7 (Introduction to Polynomials)

Source studied: math-orange chapter 7 (scans p0129–p0137). Written from understanding
after reading; no wording, examples, or problems retained. Domain: Advanced Math
(expression-structure fluency that also underpins quadratics in the next chapter).

## Concepts taught (candidate nodes)

- `polynomial-anatomy` — a polynomial is a sum of terms, each term being
  coefficient × variable^power. Single-variable is the test-relevant case. The
  degree of the whole polynomial is its largest exponent.
- `hidden-term-components` — every term secretly has all three parts: an unwritten
  coefficient is 1, an unwritten exponent is 1, and a bare constant is really
  (constant)·x^0. Restoring the hidden parts makes "weird-looking" terms uniform and
  explains why constants belong in the same family. This is the chapter's central
  demystification move, and it leans directly on the previous chapter's zeroth/first
  power facts.
- `polynomial-standard-form` — terms ordered by descending degree; quadratic
  template ax² + bx + c, cubic adds a degree-3 lead term, pattern continues upward.
  Standard form is what makes coefficient comparison and answer matching mechanical.
- `like-terms-combination` — only terms with the same variable AND same exponent
  merge, and merging only touches coefficients. (Cross-link: the merging-added-powers
  misconception from ch. 6.)
- `polynomial-subtraction-sign-distribution` — subtracting a parenthesized
  polynomial means negating EVERY term inside before combining. The subtraction item
  design lives or dies on this.
- `monomial-times-polynomial` — distribute the single term onto every term inside,
  using the exponent product rule for the variable parts and plain multiplication for
  coefficients.
- `binomial-times-binomial` — every term of the first factor multiplies every term of
  the second (2×2 = 4 partial products), then like terms collapse. Taught as the
  general each-onto-each principle rather than a mnemonic, which scales to bigger
  polynomials.
- `perfect-square-binomial-template` — squaring a two-term expression yields
  first² + 2(first)(second) + second², with the middle sign following the binomial's
  sign. Taught first by full expansion, then compressed into a recognition template.
- `conjugate-pair-product` — multiplying a binomial by its sign-flipped twin kills
  the cross terms and leaves a difference of two squares. Direction-agnostic (which
  factor carries the minus doesn't matter), and the result is ALWAYS a subtraction.
- `polynomial-identity-coefficient-matching` — if an equation between two
  standard-form polynomials holds for every value of the variable, then the
  coefficients of equal-degree terms must match pairwise. "True for all values of x"
  is the trigger phrase that converts an equation problem into a matching problem.
- `polynomial-function-evaluation` — evaluating a polynomial function is substitution:
  a point on the graph means input ↦ output, so a given point turns an unknown
  constant inside the function into a one-step solve.

## Teaching philosophy observed

- Vocabulary is taught by NORMALIZING notation, not by definitions alone: take a
  ragged three-term expression, restore all hidden coefficients/exponents so every
  term looks identical in structure, then explain the shorthand conventions that hide
  them again. Structure-first, names second.
- Shortcut templates (perfect square, conjugate product) are always derived by full
  distribution first, then offered as pattern-recognition compressions — with an
  explicit forward pointer that the same templates run backward as factoring in the
  next chapter. Expansion and factoring are framed as one bidirectional skill early.
- Coefficient matching is taught with an expert-efficiency note: once you trust the
  principle, compute ONLY the coefficient you're asked about and ignore every other
  partial product. Teaching selective attention, not just correctness.
- Same drill cadence as ch. 6: micro-drills per concept with boxed harder items,
  worked multiple-choice examples in official-test format with numbered solution
  steps, recap box, mixed additional problems, per-chapter answer key.
- Expression vs equation is explicitly disambiguated before equation work begins —
  a small thing, but it targets a real language-level confusion.

## Expert reasoning patterns (generalized)

- **Descending-degree hygiene.** Immediately rewrite any product/result in standard
  form; comparisons with answer choices become term-by-term instead of structural.
- **Target-coefficient isolation.** For "true for all x, find b"-type items, identify
  which partial products can possibly produce the target degree and compute only
  those. Turns a full expansion into two multiplications.
- **Template recognition before distribution.** Scan any binomial product for the two
  compressible shapes (self-square, conjugate pair — including disguised ones with
  fractional, radical, or decimal terms) and jump straight to the template output.
- **Sign audit on subtraction.** When a minus precedes parentheses, rewrite with all
  interior signs flipped as a discrete step rather than distributing mentally;
  distractors are built from partial flips.
- **Point-on-graph translation.** Convert graph language to function language
  instantly: point (p, q) ⇒ f(p) = q; substitute and solve for the unknown constant.
- **Desmos strategy (ours, for our product):** polynomial equivalence and
  coefficient-matching items are prime Desmos targets. Graph stem and candidate (or
  their difference — a flat zero line proves identity); for "find the constant" items,
  add a slider for the unknown and read off the value that overlays the two curves or
  passes through the given point. Decimal-coefficient variants (the calculator-flagged
  archetype) are usually FASTER in Desmos than by hand — expanding (decimal binomial)²
  by hand invites arithmetic slips the item is designed to harvest. Pure-symbolic
  items (answers with a, b, unknown constants in choices) remain algebra-first.

## Misconceptions targeted (with the why)

- **middle-term-drop** — squaring a binomial and writing just the two squares. This
  is the exponent-over-addition misconception (ch. 6) resurfacing in polynomial
  clothing; it persists because the wrong answer LOOKS complete and the distributive
  habit from multiplication feels analogous. Distractor sets reliably include the
  no-middle-term expansion.
- **partial-sign-flip** — negating only the first term when subtracting a
  parenthesized polynomial. Forms because the minus visually attaches to the nearest
  term; produces sign-scrambled distractors that differ from the key only in +/-.
- **unlike-term-merging** — adding terms of different degrees into one term (or
  merging a constant into a variable term) to force a single-term answer. Students
  expect "simplify" to mean "make shorter"; polynomials often don't get shorter.
- **degree-arithmetic-error** — when multiplying leading terms, multiplying the
  exponents instead of adding them (product rule confusion from ch. 6), giving
  absurdly high-degree distractors.
- **solve-for-x-reflex on identities** — reading "true for all values of x" and
  attempting to isolate x anyway. Forms because every prior equation the student met
  had a solution set, not an identity; they lack the category. The fix is teaching
  the trigger phrase as a mode switch to coefficient matching.
- **input-output-swap** — plugging the y-coordinate of a given point in as the
  function input. Forms from weak function-notation grounding; diagnostic signal is
  an answer consistent with f(q) = p.

## SAT patterns claimed (unverified-claim — verify against bank/officials)

- Core shapes: "which expression is equivalent to …" (add/subtract or multiply
  polynomials); identity items ("true for all x") asking for one constant or a
  combination like a+b+c or ab; evaluate-the-function grid-ins; point-on-graph items
  solving for a constant inside f. (unverified-claim)
- Asking for a COMBINATION of constants (sum/product) signals the full expansion is
  intended but still shortcut-able via selective coefficients. (unverified-claim)
- Decimal-coefficient perfect-square/conjugate items appear specifically as
  calculator-permitted problems — the design bets students won't recognize the
  template under decimals. (unverified-claim)
- Conjugate/difference-of-squares recognition is claimed as high-frequency and is the
  bridge skill into factoring. (unverified-claim)
- Dense per-section lists of real-test cross-references imply this chapter's material
  is among the most-tested Advanced Math ground. (unverified-claim)

## Prerequisite edges implied

- `polynomial-anatomy` ← ch. 6 `exponent-special-values` (x^0, x^1 conventions)
- `monomial-times-polynomial` and `binomial-times-binomial` ← ch. 6
  `exponent-product-rule`
- `like-terms-combination` ← ch. 6 merging rules (same base AND exponent)
- `polynomial-identity-coefficient-matching` ← `polynomial-standard-form` +
  `like-terms-combination`
- `perfect-square-binomial-template`, `conjugate-pair-product` →unlock→ factoring /
  solving quadratics (next chapter, explicitly)
- `polynomial-function-evaluation` ← basic function notation

## Difficulty escalation observed

Single distribution → binomial × binomial → subtraction with sign traps → identity
coefficient matching (one constant, then combinations) → templates disguised with
fractional, radical, and decimal terms → function-evaluation items wrapping the same
algebra in graph/point language. As in ch. 6, hard = more layers and better
disguises, never new machinery.

## What this source does well / poorly

**Well:** the hidden-components normalization is an excellent teachable mental model;
derive-then-compress treatment of shortcut templates; the selective-coefficient
efficiency habit; early bidirectional framing of expansion ↔ factoring; explicit
expression-vs-equation disambiguation; trigger-phrase teaching for identity items.

**Poorly:** no calculator/Desmos guidance even on its own calculator-flagged decimal
archetype (our biggest add); thin on WHY distractors are built the way they are (we
reverse-engineered from drill answer sets); no diagnostics mapping wrong choice →
misconception; function evaluation is introduced abruptly with minimal function-
notation scaffolding — assumes a prereq it never states.
