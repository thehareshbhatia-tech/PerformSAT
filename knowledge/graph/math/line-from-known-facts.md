---
id: line-from-known-facts
section: math
domain: algebra
skill: line-from-two-points
difficulty_span: [easy, hard]
prereqs: [slope-as-rate-of-change, intercepts-as-anchors]
unlocks: [parallel-perpendicular-slopes, linear-form-fluency]
related: [linear-model-four-slots, function-as-io-machine]
---

# Building a line's equation from whatever facts you're given

## What it is
A line is fully determined by two independent facts — two points, or one point plus a slope (the slope may arrive directly, through a parallel/perpendicular relation, or through a rate in a story). Building the equation is always the same two-beat construction: secure the rate, then secure an anchor point, then let substitution find whatever constant remains. Graphs, tables, coordinate pairs, and function-notation statements are all just different packaging for the same two facts.

## Why it exists / why the SAT tests it
"Which equation defines line k?" is a staple item family. It tests representation fluency — extracting the same two facts from a graph, a table, a sentence, or f-notation — and one specific move school under-trains: using a known point to find an unknown constant by substitution. Wrong choices are engineered to be one extraction error away: a wrong-sign slope, or the given point's y-value used as b. (unverified-claim as official design rule; matches our bank.)

## Mental model
**Anchor + step.** Every line equation is one anchor (a point you trust) plus one step (the rate). Then the master key: *a point on a line satisfies its equation* — so any known point can be substituted into a partially known equation to recover a missing constant. Cheapest versions of each: the y-intercept is the best anchor (it IS the constant); lattice-crossing steps are the best rate reads. When the anchor isn't the intercept, substitution recovers b — and if writing y − y₁ = m(x − x₁) directly is comfortable, that's the same move pre-packaged: a convenience, not a different theory.

Equivalences to hold: f(a) = v is the point (a, v). A table is a stack of points. A story's rate is the slope. All roads lead to anchor + step.

## Expert reasoning process
1. Inventory the given facts and translate each into anchor-or-step language: two points → compute the step from them; point + parallel line → inherit the step; table → points; f(3) = 7 → the point (3, 7).
2. Slope first — nearly always the first computation on any line item.
3. Pick the cheapest anchor: an x = 0 row or visible y-axis crossing hands you b outright; coordinates containing 0 or 1 minimize arithmetic; otherwise ANY point works — both points of a pair give the same line, so "which point do I use?" is a non-question.
4. Substitute the anchor into y = mx + b (or use point-slope form directly); solve for the remaining constant.
5. Match to answer choices; if none match, rearrange your result (or theirs) before doubting the work — form differences are cosmetic ([[linear-form-fluency]]).
6. For graph-matching in reverse (equation given, pick the graph): eliminate cheapest-feature-first — intercept, then slope sign, then slope magnitude via a counted step.

**Desmos vs. algebra:** verification is Desmos's sweet spot — plot the given points AND your candidate equation; the line visibly passing through them is a complete check. For which-graph items, typing the equation and comparing beats mental sketching. For messy fractional slopes, computing b via Desmos (plot the point, adjust) is slower than the substitution; do the algebra, then verify. Symbolic items (constants in terms of other constants) remain algebra-only. Teach: build by hand, confirm by plot — the ten-second Desmos check converts "probably right" into "right."

## Misconceptions
- **frozen-at-b** — the student finds m, writes y = mx + b, and stalls, never realizing the given point substitutes for x and y. Forms because school practice almost always hands b directly; the substitute-a-known-point move was never needed. The defining trap: slope + one non-intercept point, with the point's y-value offered as b among the choices.
- **any-point-anxiety** — believing only one of the two given points is "the right one" to substitute, or that different points give different lines. Forms from procedure-following without the satisfies-the-equation principle; costs time and confidence, occasionally aborts the item.
- **first-y-as-b** — reading the first convenient y-value (first table row, leftmost plotted point) as the y-intercept. A sibling of intercept-must-be-visible ([[intercepts-as-anchors]]), showing up here at the construction step.
- **estimated-anchor-trust** — reading fractional coordinates off a graph between gridlines and building on them. Forms because estimation feels resourceful; the test draws lines through lattice points precisely so exact reads exist. Wrong slopes from estimated points look plausible and match a distractor.

## Diagnostic indicators
- frozen-at-b: scratch work shows correct m and the template written, then abandonment or the point's y-value dropped into b; picks that distractor.
- any-point-anxiety: long timing on two-point items; explain-back includes "I didn't know which point to use."
- first-y-as-b: table items missing the zero row go wrong specifically; the chosen b equals row one's y.
- estimated-anchor-trust: slope errors only on graph-given items, correct on numeric ones; explains a read like "it crosses about here."

## Remediation pathways
- frozen-at-b: teach the master key explicitly — "every point on the line makes the equation true, so feed the point in." Then one drill set of slope + non-intercept-point items only. If it doesn't land, the gap is [[linear-equation-balance-peeling]] substitution, not lines.
- any-point-anxiety: have the student build the same line from BOTH points once; identical results dissolve the anxiety permanently.
- first-y-as-b: extend-the-table or substitute-to-find-b, as in [[intercepts-as-anchors]].
- estimated-anchor-trust: rule installation — anchor only where the line crosses gridline intersections; if no two clean crossings exist, the item intends algebra, not reading.

## Mastery criteria
Student builds correct equations from all packagings — two points, point + slope, point + parallel/perpendicular relation, table, graph, f-notation — choosing anchors for arithmetic cheapness, and verifies via a plotted check when available. Evidence: no frozen-at-b or point's-y-as-b distractor picks; consistent accuracy at medium/hard including f-notation packaging.

## Difficulty ladder
- **Easy:** slope and intercept both handed over; assemble.
- **Medium:** two clean points; graph reads; slope + non-intercept point (the frozen-at-b gate).
- **Hard:** facts in function notation (f(2) = 5, f(6) = 13); inherited slopes via parallel/perpendicular ([[parallel-perpendicular-slopes]]); asked-for combinations of the constants (a + b given two points on y = ax + b — composes with [[solve-for-the-asked-quantity]]); parameterized points. Module 2 Hard packages the two facts so obliquely the item never looks like "build a line."

## Teaching notes
- **Struggling:** anchor + step language with drawn pictures; secure the master key (point satisfies equation) with numeric checks before using it to find b.
- **Average:** the four packagings drilled as translations into anchor + step; cheapest-anchor selection; the both-points demonstration.
- **Advanced:** f-notation packaging, inherited slopes, form-matching to choices; introduce point-slope form as the shortcut for point + slope givens.
- **1500+:** oblique packagings and symbolic constants; coach the inventory habit (list the facts, translate each) so no disguise survives first contact.
