---
id: absolute-value-as-distance
section: math
domain: algebra
skill: absolute-value-equations, absolute-value-inequalities
difficulty_span: [easy, hard]
prereqs: [inequality-direction-logic, number-line-order-and-distance]
unlocks: [compound-inequality-operations]
related: [inequality-regions-and-point-testing, desmos-decision-framework]
---

# Absolute value as distance: two cases, one number line

## What it is
Absolute value is not "make it positive" — it is distance from zero on the number line, and every SAT absolute-value item reads more cleanly through that lens. |x| = 5 asks which points sit 5 units from zero: two answers, +5 and −5. |x − 3| = 5 shifts the center to 3 and asks which points sit 5 units from 3: 3 ± 5. Inequalities follow directly: |x − c| < r is the band of points within r of c (a single interval, "and"); |x − c| > r is the two rays farther than r from c ("or"). One geometric picture generates every equation and inequality case without memorizing four separate rules.

## Why it exists / why the SAT tests it
The exam tests whether a student holds absolute value as a concept or as a button. The button-pushers split into predictable errors: they drop the negative case, they solve the two inequality directions as if they were the same shape, or they flip a sign mechanically without knowing why. The distance model makes each case self-evident and is the reason a strong student never has to recall whether "greater than" gives an "and" or an "or."

## Mental model
**|expression| is the distance of that expression from zero; |x − c| is the distance of x from c.** Equations ask "which points are exactly r away" (two points). "Less than r" is the interval between them (within r — a band). "Greater than r" is everything outside (beyond r — two rays). Draw the center, step off r in both directions, and read the answer off the line.

## Expert reasoning process
1. Identify the center: in |x − c|, the center is c (the value that makes the inside zero); in |x + c|, rewrite as |x − (−c)|, center −c.
2. For an equation |x − c| = r (r ≥ 0): the two solutions are c − r and c + r. If r < 0, there are no solutions — distance can't be negative.
3. For |x − c| < r: the band c − r < x < c + r (one interval, "and").
4. For |x − c| > r: the two rays x < c − r or x > c + r ("or").
5. Only strip to the two-case algebra (inside = +r and inside = −r) when the inside is complex; the distance read is faster for the standard forms.
6. **Desmos decision:** graphing y = |expression| against y = r and reading intersections/regions is a reliable safety net, especially when the inside is messy or a parameter is involved; the distance read is faster for clean forms and is the only route when the constant is symbolic.

## Misconceptions
- **dropped-negative-case** — Solving |x − c| = r for only x = c + r. Forms from the "absolute value makes it positive" mislearning, which hides the second point entirely. Produces exactly one of the two correct answers, and on the SAT the omitted one is usually a listed choice.
- **band-ray-confusion** — Treating |x − c| > r as an interval or |x − c| < r as two rays. Forms because both are "solve, then write an inequality," and without the distance picture the student has no principle for which shape results — so they guess or over-apply the flip rule. The signature hard-item trap.
- **negative-r-not-flagged** — Grinding two cases on |x − c| = −4 instead of declaring "no solution." Forms from mechanical case-splitting divorced from meaning; distance is never negative, so no point qualifies.
- **center-sign-error** — Reading the center of |x + 3| as +3. Forms from surface pattern-matching; the center is the value that zeroes the inside, so |x + 3| centers at −3.

## Diagnostic indicators
- **dropped-negative-case**: absolute-value equation items answered with the single positive root; the negative root is the chosen distractor's complement.
- **band-ray-confusion**: inequality items where the interval and the two-ray answer are both offered and the student picks the wrong shape while getting the boundary numbers right.
- **negative-r / center-sign**: no-solution items answered with numbers; |x + c| items centered at +c.

## Remediation pathways
- dropped-negative-case: re-anchor on the number line — literally ask "what points are r away?" and require both before any algebra.
- band-ray-confusion: drill the two inequality shapes side by side with their pictures until "within → band, beyond → rays" is reflexive; connect to [[inequality-direction-logic]] for why the rays are an "or."
- negative-r: one exposure to "distance can't be negative" usually fixes it permanently.
- center-sign: practice rewriting |x + c| as |x − (−c)| until the zeroing move is automatic.

## Mastery criteria
The student produces both solutions to any absolute-value equation, correctly shapes both inequality directions (band vs rays) with the right boundaries, flags negative-constant equations as no-solution on sight, and locates the center by zeroing the inside — all without a memorized four-rule table. Proof: a mixed set containing an equation, both inequality directions, and one no-solution item.

## Difficulty ladder
- **Easy**: |x| = k and |x − c| = r with clean numbers.
- **Medium**: the two inequality directions; center-finding with |x + c|; no-solution flags.
- **Hard**: a coefficient on the inside (|2x − c|), the absolute value embedded in a larger equation, or a symbolic constant where the distance read must stay abstract; occasionally a two-absolute-value comparison better handled by [[desmos-decision-framework]].

## Teaching notes
- **Struggling**: teach only the number-line picture — center, step off r both ways — and skip the two-case algebra entirely until the picture is solid.
- **Average**: the picture plus the "within = band / beyond = rays" rule with its "and"/"or" logic.
- **Advanced**: coefficients inside, embedded absolute values, and when to fall back to formal two-case algebra.
- **1500+**: symbolic constants and absolute value as a modeling primitive (tolerance, "within X of a target") — reading a real-world "within" phrase straight into |value − target| ≤ tolerance.
