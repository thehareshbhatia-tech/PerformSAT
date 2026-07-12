# Raw notes — Math Orange source, Ch. 3: Standard Form / Parallel & Perpendicular Lines
Source: math-orange study source A, chapter on standard-form lines and parallel/
perpendicular slope logic (pp. ~87–111). Section: math · Domain: algebra.
Extraction notes in our own words for later graph synthesis. No source expression retained.

## Concepts taught (candidate nodes)

- **standard-form-meaning** — Ax + By = C models two quantities that jointly hit a
  fixed total: each term is (unit rate × count), the right side is the combined total.
  It's the natural form when a scenario adds two priced/rated quantities.
- **standard-form-tradeoff-intuition** — with C fixed, increasing one variable forces
  the other down; the line's points are exactly the feasible combinations. This is the
  conceptual bridge to constraint problems and, later, systems.
- **form-conversion-both-ways** — SI → standard: move the x-term across; clear
  fractional coefficients by multiplying through by the denominator; multiply by −1 as
  needed to match answer-choice conventions. Standard → SI: isolate y (subtract the
  x-term, divide by B).
- **standard-form-slope-shortcut** — for Ax + By = C, slope = −A/B and y-intercept =
  C/B. Taught as a consequence of the isolation procedure, with explicit advice to
  understand the derivation rather than memorize the ratios.
- **equivalent-standard-forms** — a line has exactly one slope-intercept equation but
  infinitely many standard-form equations (any nonzero multiple); tests exploit this
  by presenting an unexpected multiple or sign arrangement.
- **intercepts-as-pure-cases** — in a two-quantity total scenario, the two intercepts
  are the all-of-one/none-of-the-other cases; they're the easiest points to read off a
  gridless graph and the cheapest to substitute (a zero kills a term).
- **any-point-satisfies-total** — every point on the line plugs into the standard-form
  equation to give the same C; used both to find an unknown total and to verify work.
- **parallel-slope-logic** — parallel ⟺ same slope ⟺ (in standard form) same A and B
  up to a common ratio. Never intersect; can differ only in C.
- **perpendicular-slope-logic** — perpendicular ⟺ slopes are negative reciprocals
  (flip the fraction, flip the sign); a slope of k pairs with −1/k.
- **perpendicular-coefficient-swap** — in standard form, the perpendicular family has
  the x- and y-coefficients swapped with one of them negated (Ax + By = C ⊥
  Bx − Ay = D). Enables answer-scanning without computing any slope.
- **line-through-point-with-inherited-slope** — build a parallel/perpendicular line:
  inherit or transform the slope, then substitute the given point to find the constant
  (works in either form; standard form lets you keep A, B and solve only for C).

## Teaching philosophy observed

- **Motivate the form by the scenario shape, not algebra.** The chapter opens with a
  budget-style story where two items at different unit prices must hit a total —
  standard form falls out as the transcription of the sentence. Only afterward is the
  general Ax + By = C named. The stated heuristic: word problems that hand you two
  rates and a total are easier to write in standard form; graphs are easier to read in
  slope-intercept form; convert when the answer choices demand it.
- **Procedure over formula.** For standard → SI conversion the source explicitly says
  the ratio formulas need not be memorized if you can isolate y reliably. The −A/B
  shortcut is then layered on top for speed. Two-tier teaching: robust method first,
  optimization second.
- **Show the same example in both solution styles** (convert-to-SI vs. read
  coefficients directly), with a Notes block naming when the shortcut pays off and
  what it fails to reinforce (the shortcut hides the meaning of the y-intercept).
- **Answer-choice-aware algebra.** Instruction includes normalizing your equation to
  match choice conventions (integer coefficients, non-negative leading coefficient) —
  test-taking reality is folded into the math, including the ×(−1) step when all
  choices start with positive x.
- **Skill drills isolate translation both ways** (scenario → standard form; each form
  → the other) before problems compose parallel/perpendicular logic on top.

## Expert reasoning patterns (generalized)

1. **Form choice by information shape:** rates + total given in words → write standard
   form directly; slope/intercept or a picture given → slope-intercept; then convert
   only if the choices force it. Choosing the form that matches the input is the
   chapter's core meta-skill.
2. **Intercept-first evaluation on gridless graphs:** when a context graph lacks
   gridlines, the only trustworthy points are the axis crossings; substitute one (the
   zero coordinate simplifies arithmetic), and optionally verify with the other.
3. **Solve-for-C pattern:** for any "parallel line through point P" task in standard
   form, copy A and B, plug P in, and compute C in one line — no slope computation,
   no b.
4. **Coefficient-pattern scanning:** parallel candidates share (proportional) A, B;
   perpendicular candidates show swapped-and-one-negated coefficients. Experts scan
   answer choices for the pattern before doing any algebra; slope computation is the
   verification, not the method.
5. **Ratio robustness:** recognize that (2A)x + (2B)y = 2C is the same line and that
   parallelism only requires A:B to match — guards against "the coefficients don't
   look identical" hesitation.
6. **Sign-arrangement normalization:** when your derived equation matches no choice,
   multiply through by −1 before doubting the work.
7. **Negative-reciprocal drill:** flip numerator/denominator, then negate — two
   mechanical steps; integers count as over-1 fractions. Errors come from doing only
   one of the two steps, so experts verbalize both.
8. **Desmos/calculator strategy (our addition — source teaches none in this
   chapter):** with our built-in Desmos, standard-form equations can be typed as-is
   (no conversion needed) to see the line, its intercepts, and comparisons with a
   candidate answer; perpendicularity can be eyeballed but shouldn't be trusted at
   non-square aspect ratios — verify via slope arithmetic. Best Desmos uses here:
   checking a derived equation passes the given point, finding an intercept of a messy
   standard-form line, and comparing two choices quickly. Pure-symbolic items (answer
   in terms of unknown constants) still require the coefficient logic.

## Misconceptions targeted (and why students hold them)

- **unique-standard-form belief** — expecting one canonical Ax + By = C; forms because
  slope-intercept form IS unique and students generalize. Produces panic or wrong
  eliminations when a choice is a multiple/negation of their result. Trap: correct
  choice written as an unexpected multiple.
- **slope-sign-from-standard-form** — reading slope as A/B (dropping the negative) or
  B/A; forms because the −A/B ratio is memorized without the derivation that produces
  the sign and order. Trap: choice sets containing all four sign/order variants of the
  slope and intercept read from one standard-form equation.
- **half-transformed-reciprocal** — for perpendiculars, flipping without negating or
  negating without flipping; forms because "opposite reciprocal" is a two-operation
  phrase compressed into one mental step. Trap: choices include the plain reciprocal
  and the plain negation alongside the true negative reciprocal.
- **parallel-means-same-line-family confusion** — assuming parallel lines share
  intercepts or that matching coefficients must extend to C; forms from
  pattern-matching all three constants. Trap: candidate with identical A, B *and* C
  (the same line, not a parallel one) when the problem needs a distinct line.
- **forced-slope-intercept habit** — converting everything to y = mx + b even when
  the given data (two rates + total, or intercept-friendly graph) makes standard form
  a one-liner; forms because SI form is the only form drilled in school. Cost is time
  and fraction errors, which the test's fraction-heavy coefficients punish.
- **intercept-role confusion in two-quantity contexts** — misreading an axis intercept
  as a rate or as "the total"; forms because the graph axes are counts while the total
  lives in the equation's C. Trap: interpretation choices that assign the intercept to
  the wrong quantity.
- **perpendicular-visual trust** — judging right angles from a sketch; forms because
  most classroom graphs are square-scaled. The coefficient/slope check is taught as
  the only reliable test. (Also applies to Desmos at odd zoom levels.)

## SAT patterns claimed (unverified-claim — verify vs. official material + bank)

- Word problems giving two unit rates and a combined total are routine, and the
  intended fast path is direct standard-form transcription. (unverified-claim)
- Graph-to-standard-form items usually provide only intercepts as clean points,
  deliberately rewarding intercept substitution. (unverified-claim)
- Parallel/perpendicular items commonly keep everything in standard form so that
  coefficient-pattern recognition (same vs. swapped-negated) solves them without
  algebra. (unverified-claim)
- Some items use abstract coefficients (a, k as unknowns) with a given point or two,
  testing whether students can substitute and solve for a coefficient rather than a
  variable. (unverified-claim)
- Constraint items with open answer sets (multiple valid counts hitting a total)
  appear as student-produced-response questions. (unverified-claim)
- Hybrid geometry items place perpendicular lines in the plane and ask for a
  coordinate, requiring negative-reciprocal slope plus point-slope bookkeeping.
  (unverified-claim)

## Prerequisite edges implied

- slope-as-rate-of-change + slope-intercept-template (ch2) → all of ch3.
- equation-from-two-points / substitute-known-point move (ch2) → solve-for-C pattern.
- fraction operations (flip, negate, clear denominators) → conversions and
  negative reciprocals.
- distributive property / multiplying an equation through by a constant →
  equivalent-standard-forms, fraction clearing.
- standard-form-tradeoff-intuition → systems of equations (next chapter: intersection
  as the pair satisfying both) and later inequality/constraint modeling.

## Difficulty escalation observed

Easy: translate a two-rate scenario into Ax + By = C; convert a given equation between
forms. Medium: slope/intercept extraction from standard form (sign traps); write the
parallel/perpendicular line through a given point; identify a graph's equation among
standard-form choices via intercepts. Hard: unknown-coefficient items (solve for a
coefficient given points, or express slope in terms of two abstract constants);
coefficient-pattern recognition under disguise (choices scaled by constants);
multi-step hybrids (perpendicular slopes + geometry to pin a coordinate; total-minutes
constraint graphs where the answer is the C of a line read from intercepts);
open-count constraint items with several valid answers. The ceiling items remove all
numbers and force pure structural reasoning about A, B, C.

## What this source does well / poorly (for synthesis)

Well: motivates standard form as the *shape of a scenario* rather than an arbitrary
rearrangement — the strongest treatment of "when standard form beats slope-intercept"
we've seen; the coefficient-swap shortcut for perpendiculars with an explicit warning
that shortcuts skip understanding; answer-choice normalization (multiples, ×(−1)) as
taught technique; paired solutions showing slow-but-safe vs. fast paths.
Poorly: no calculator/Desmos guidance despite the digital SAT (fill in synthesis);
perpendicular-slope justification is asserted, not explained (no intuition for *why*
negative reciprocal — a rotation/aspect argument would help our Learn chapter); the
parallel treatment doesn't explicitly warn about the identical-line degenerate case
until an answer key; interpretation of C (the total) gets less drilling than slope
interpretation did in ch2; x-intercept-as-pure-case intuition appears only inside one
worked example rather than as a named idea.
