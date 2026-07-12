# Raw notes — College Panda SAT Math, Ch. 1: Exponents & Radicals

Source: math-panda (College Panda, Digital SAT ed.), pages p0006–p0011 scans.
Section: Advanced Math (maps to our advanced-math domain; some items sit in algebra fluency).
These are understanding-only notes; no source expression retained.

## Concepts taught

- **exponent-laws-core** — The eight mechanical rules for combining powers: first power,
  zero power, product of same base (add exponents), quotient of same base (subtract),
  power of a power (multiply), power distributed over a product, power distributed over
  a quotient, and negative exponent as reciprocal. Presented up front as a lookup table,
  each rule with one numeric instance.
- **negative-base-parentheses** — Whether a negative sign is inside parentheses decides
  whether the exponent acts on it. Squaring a parenthesized negative gives a positive;
  a bare minus in front of a power is applied after the power. Odd exponents make the
  two cases coincide; even exponents split them.
- **odd-even-exponent-sign** — Sign of a power of a negative quantity is determined
  purely by exponent parity. Used as a reasoning shortcut (an odd count of negative
  factors stays negative) rather than by expansion.
- **roots-as-inverse-powers** — nth root undoes nth power. Framed operationally: apply
  the root to a perfect power and the operations cancel.
- **fractional-exponent-bridge** — x^(m/n) means "power m, root n"; the numerator is
  the power, the denominator the root. Root and power can be applied in either order.
  The root-outside form is preferred in print because it avoids parentheses.
- **same-base-conversion** — When an equation or equivalence involves several exponential
  terms, rewrite every term over one shared base so exponents can be compared or
  equated. Recognizing perfect squares/cubes (25 = 5², etc.) is the entry move.
- **equate-exponents-principle** — Once both sides are a single power of the same base,
  the exponents themselves form an ordinary (usually linear) equation.
- **surd-simplification** — Simplify √N by factoring N and extracting pairs (triplets
  for cube roots); one factor from each pair exits the radical. Reverse direction:
  push an outside coefficient back under the radical by squaring it. Choosing larger
  square factors shortens the work.
- **radical-form-comparison** — For "which is equivalent" items, convert every answer
  choice into fractional-exponent form and compare exponents numerically instead of
  eyeballing radical notation.

## Teaching philosophy observed

- Extreme economy: one table, then straight into worked multiple-choice items in
  SAT format. No history, no derivation of the laws, no drills on definitions.
- Rules are taught *through* the exam's own question shapes — nearly every worked
  example is a 4-choice "which is equivalent" item, so the student is always
  practicing the target behavior, never abstract manipulation.
- When two solution routes exist, the author shows both (direct simplification vs.
  converting each answer choice) and implicitly teaches choice-checking as a
  legitimate strategy — useful for us since it generalizes to Desmos-era verification.
- Deliberately calculator-free for the numeric evaluation exercise: fluency with
  signs and small powers is treated as a prerequisite reflex, not something to
  offload. Worth preserving as a stance even though our product embeds Desmos —
  these items are about symbolic equivalence, where Desmos helps only via
  graph-both-sides comparison.
- What he omits: scientific notation, growth contexts, any "why the laws work"
  derivation beyond one expansion. Trusts a compact reference table + immediate
  application.

## Expert reasoning patterns (generalized)

1. **Read the base landscape first.** Before manipulating, scan every base in the
   expression and the answer choices; if they differ (25 vs 5, 4 vs 2), the first
   move is base unification, not exponent algebra.
2. **Parity before arithmetic.** For sign questions, count negative factors mod 2;
   never expand.
3. **Translate radicals to fractional exponents immediately** when mixing radicals
   with powers — all eight laws then apply uniformly, and comparison across choices
   becomes exponent arithmetic.
4. **Two-sided cancellation setup:** to solve a^(f(x)) = a^(g(x)) shapes, engineer a
   single power on each side, then drop the bases.
5. **Verification pass over choices:** when unsure, normalize each answer choice to
   the same canonical form (single fractional exponent) — a mechanical, error-proof
   fallback. In our product, the analogous Desmos move is plotting both expressions
   and checking overlap; teach both.

## Misconceptions targeted (and why students hold them)

- **misc-bare-negative-power** — Students believe -3² = 9 because they visually bind
  the minus to the 3. Formed because in most school contexts the negative sign IS
  part of the number; PEMDAS priority of exponents over unary minus is rarely
  drilled. Trap answers: positive value where negative is right, or vice versa.
- **misc-exponent-add-vs-multiply** — Confusing when exponents add (same-base product)
  versus multiply (power of a power). Forms because both rules are memorized as
  "combine the little numbers" without attaching the structural trigger. Exercises
  pair distractors built from the wrong rule.
- **misc-fractional-exponent-inverted** — Reading x^(m/n) as "root m, power n."
  Forms because the notation carries no visual cue for which slot is which;
  answer sets deliberately include the reciprocal-exponent twin (x^(5/4) vs x^(4/5)).
- **misc-distribute-root-over-sum** — Believing √(a+b) splits into √a + √b. Forms by
  false analogy with distributing over products (which IS legal). The book's
  distribution items (radical times sum of radicals) are designed so the lazy
  split produces a listed wrong answer.
- **misc-subtract-exponentials** — Treating 2^(x+3) − 2^x as 2³ = 8 or as 2^(3)
  "left over." Forms because subtraction of same-base powers has no simple law, so
  students force-fit the quotient rule. The designed fix: factor out the smaller
  power first.
- **misc-coefficient-swallowed-by-root** — When squaring/rooting expressions with
  coefficients (e.g., √(16·a^k)), students root the variable part but forget or
  double-apply the coefficient. Exploited by choice pairs 4a^k vs 8a^k.

## SAT patterns claimed (verify against bank — unverified-claim)

- unverified-claim: "Which expression is equivalent" with fractional exponents /
  radicals is a staple, frequently with variables restricted positive (to dodge
  ± issues).
- unverified-claim: A recurring shape gives an equation between two radical/power
  forms with an unknown constant in the exponent (find k / find n / find m·n or
  m/n) — solved by same-base conversion + equating exponents.
- unverified-claim: Word-form power relations ("the square of a equals the cube
  of b") appear and are meant to be translated to a² = b³ then manipulated with
  fractional exponents.
- unverified-claim: Distribution of a radical across a radical sum appears as a
  one-step distractor-rich item.

## Prerequisite edges implied

- exponent-laws-core ← order-of-operations (unary minus vs exponent priority)
- fractional-exponent-bridge ← exponent-laws-core + roots-as-inverse-powers
- surd-simplification ← integer factoring (finding square factors)
- same-base-conversion ← exponent-laws-core + perfect-power recognition
- equate-exponents-principle ← same-base-conversion + linear-equation solving

## Difficulty escalation observed

Numeric sign evaluation (easy, no calculator) → single-law simplification with
positive-exponent constraint → surd simplify/de-simplify both directions →
multi-law equivalence MC items → find-the-constant exponent equations →
composed items at the hard end: two named quantities linked by a power relation
plus a second exponential condition (requires translating words → powers →
fractional exponents → equating), and factoring exponential differences
(subtract-exponentials trap). Hard items also nest radicals inside radicals and
mix two different indices in one expression.

## What this source does well / poorly

- Well: fastest possible route from rule to exam behavior; distractors in its
  exercises map 1:1 onto the misconception list above (excellent trap taxonomy
  evidence); both-directions fluency (simplify and un-simplify surds).
- Well: the "convert all choices to one canonical form" fallback is a genuinely
  robust expert habit.
- Poorly: zero conceptual grounding for WHY exponent laws hold (only one expansion
  shown); a struggling student gets no mental model, just a table. Our node should
  add the repeated-multiplication / counting-factors model.
- Poorly: no treatment of exponential expressions in context (growth/decay is
  deferred elsewhere); no negative/zero base edge-case discussion beyond parity;
  nothing on when ± matters with even roots (deferred to Ch. 3).
