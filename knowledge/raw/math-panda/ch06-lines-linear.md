# Raw notes — Source B (panda), Ch. 6: Lines & linear relationships

Source scope: pages p0037–p0042 (chapter's exercise 2 continues past our assigned range).
Section/domain: Math — Algebra (linear equations in two variables, graphs of lines).
Understanding-only notes; all phrasing, names, and examples are ours.

## Concepts taught

- **slope-as-rate-of-steepness** — Slope = vertical change over horizontal change
  between any two points; larger magnitude = steeper. A slope of m means m units of
  vertical change per 1 unit right; a fractional slope −p/q means p down per q right
  (or p up per q left). Both the formula and the per-unit reading are taught.
- **slope-sign-reads-direction** — Positive slope rises left-to-right; negative slope
  falls. Sign is readable from the picture before any computation.
- **line-intercepts-by-zeroing** — x-intercept: set y = 0 and solve; y-intercept: set
  x = 0. Works on any form of the equation, including standard form ax + by = c.
- **slope-intercept-form** — y = mx + b exposes slope m and y-intercept b directly;
  any line (except vertical) can be rearranged into it.
- **point-slope-form-as-tool** — When handed a slope and a point (not an intercept),
  y − y₁ = m(x − x₁) writes the line immediately; simplify to slope-intercept only if
  the question wants it. Taught as a convenience choice, not a competing theory.
- **parallel-equals-same-slope** — Parallel lines share slope (and differ in
  intercept).
- **perpendicular-equals-negative-reciprocal** — Perpendicular slopes multiply to −1:
  flip the fraction AND flip the sign.
- **horizontal-vertical-line-equations** — x = k is the vertical line of constant
  x-coordinate; y = k the horizontal line of constant y-coordinate. Taught by "every
  point on it shares that coordinate."
- **equation-from-graph-readoff** — Read b where the line crosses the y-axis; read m
  by stepping unit squares (down 1 per 2 right ⇒ −1/2); assemble y = mx + b.
- **qualitative-slope-bounding** — Constraints on coordinates (e.g., a point (a, b) on
  a line through the origin with a > b > 0) translate to bounds on slope (positive and
  < 1) without computing anything. Slope can be reasoned about as a size class, not a
  number.
- **linear-model-from-data** (exercise-implied) — Two rows of a table give the slope
  as Δoutput/Δinput; intercept follows from one row. "Can be modeled by a linear
  function" is the cue to run this.

## Teaching philosophy observed

- Lines are introduced as a special case of functions (f(x) = mx + b), leaning on the
  previous chapter's graph-equals-io-pairs foundation — deliberate cross-chapter
  scaffolding rather than a fresh start.
- Formula and picture are always paired: slope formula, then the per-unit walk; sign
  rules, then the two canonical pictures (rising/falling line).
- Form-switching is taught pragmatically: start from whatever the givens make natural
  (point-slope for point + slope), convert only when the answer choices force it.
  Choosing the form is presented as a decision, which is the actual skill.
- Both anchor points are shown to give the same line (worked once, explicitly), heading
  off the "which point do I use?" anxiety.
- Horizontal/vertical lines get their own short section at the end — the author treats
  them as a known blind spot rather than assuming they're obvious.

## Expert reasoning patterns (generalized)

1. **Unknown-coordinate items are slope equations.** If a point with an unknown
   coordinate lies on a line of known slope (or with two other known points), write
   slope-expression = slope-value and solve. One template covers a large item family.
2. **Bound the slope before computing it.** On "which could be the slope" items, an
   expert first extracts sign (direction of the drawn line) and size class (steeper or
   shallower than 1, via the coordinate constraints), then eliminates; exact
   computation is often unnecessary.
3. **Standard form is a two-zero machine.** For ax + by = c, both intercepts come from
   zeroing the other variable; slope comes from rearranging (or −a/b). Experts don't
   convert to slope-intercept form to find an intercept.
4. **Perpendicularity is a slope transaction.** Extract the given line's slope, negate
   and reciprocate, then feed it into point-slope with whatever point is supplied. No
   picture needed.
5. **Read graphs multiplicatively.** Equation-from-graph is a two-readoff task
   (crossing + unit-step ratio), then match to choices; candidates are never tested
   point-by-point.
6. **Sign-product reasoning from pictures.** Items asking about products/relations of
   parameters (slope × intercept positive? ratio of coefficients bounded?) are solved
   by reading each factor's sign/size from the graph independently, then combining.
7. **Answer the asked coordinate/quantity.** The chapter's items frequently want "the
   y-coordinate of the y-intercept" (a number, not a point), the value at a different
   x, or a combination of constants (a + b, ab, a/b) — the intermediate result is bait.

## Misconceptions targeted (and why students hold them)

- **run-over-rise inversion** — Students compute Δx/Δy because nothing in the words
  "rise" and "run" pins which goes on top; muscle memory from plotting (over-then-up)
  reinforces horizontal-first thinking. Distractors are built from reciprocals.
- **mismatched-point-order** — (y₂ − y₁)/(x₁ − x₂): subtracting in opposite orders in
  numerator and denominator flips the sign. Happens because students treat the two
  subtractions as independent rather than as one consistent traversal. Sign-flipped
  distractors harvest it.
- **perpendicular-is-only-negate (or only-flip)** — Half the transformation is easier
  to remember than both halves; choices include the merely-negated and the
  merely-reciprocated slopes.
- **intercept-axis-swap** — For x-intercepts students set x = 0 (the name says x, so
  touch x). Same root cause as the function-chapter swap: name-anchoring. Mirrored
  point choices ((k, 0) vs (0, k)) collect the error.
- **standard-form-slope-illusion** — In ax + by = c, students read a (or a/b without
  the negative) as slope because slope "is the number next to x." Only rearrangement
  or the −a/b rule fixes it; items give lines in standard form precisely to force this.
- **vertical-horizontal-equation-swap** — x = 3 "feels" horizontal because the x-axis
  is horizontal. The constant-coordinate reading (every point has x = 3) is the
  targeted repair.
- **parallel-includes-intercept** — Some students think parallel lines must share a
  y-intercept or must be checked point-by-point; the slope-only criterion is the fix.

## SAT patterns claimed (unverified-claim)

- unverified-claim: Digital-SAT line items regularly present equations in standard
  form or with fractional/nested coefficients specifically so that slope and intercepts
  require a rearrangement step.
- unverified-claim: "Which equation defines line k" items pair a point with a
  parallel/perpendicular relation to another line; every wrong choice is one slope
  transformation error or one intercept error away.
- unverified-claim: Real-context linear-model items (rate + starting value from a data
  table) are a stable format; slope = per-unit rate, intercept = baseline, and
  distractor equations swap or perturb the two.
- unverified-claim: Hard-band line items go abstract: unknown constants in the
  equation, coordinate constraints expressed as inequalities, or products/ratios of
  parameters read from a picture (sign-of-mb style).
- unverified-claim: A recurring hard shape crosses chapters: a line/linear function
  embedded inside another function's definition (e.g., a rational rule built from a
  linear f), requiring the student to unwind to the linear core.

## Prerequisite edges implied

- graph-equals-io-pairs (Ch. 5) → all of this chapter (lines are graphs of linear
  functions; explicitly invoked at the opening)
- fraction-arithmetic + negative-number-arithmetic → slope-as-rate-of-steepness
- line-intercepts-by-zeroing ← intercepts-by-zeroing-the-other-coordinate (Ch. 5 —
  same idea, re-specialized)
- slope-as-rate-of-steepness → parallel-equals-same-slope →
  perpendicular-equals-negative-reciprocal
- slope-intercept-form + point-slope-form-as-tool → equation-from-graph-readoff →
  linear-model-from-data
- qualitative-slope-bounding → (forward edge) systems-of-linear-equations geometry and
  inequality-region reasoning in later chapters

## Difficulty escalation observed

Compute slope/intercept from clean givens → unknown coordinate on a known line →
build the equation from point + slope (or point + parallel/perpendicular relation) →
standard-form and disguised-coefficient rearrangements → data-table linear modeling →
abstract-parameter items (a + b from two points on y = ax + b; ab from a drawn graph;
bounded coefficient ratios under a perpendicularity constraint) → cross-topic
composites (linear function inside a rational function; partial graphs).

## Desmos / calculator strategy

None taught — the chapter is fully by-hand. (Our product note: unknown-coordinate,
intercept, and which-equation items are instant Desmos verifications — type the line,
click the intercept, or plot both candidate lines. Worth teaching as a check layer,
especially for standard-form slope readings where by-hand sign errors cluster.)

## What this source does well / poorly here

- Well: per-unit reading of slope (not just the formula) builds genuine graph-stepping
  fluency; form choice taught as a decision; the both-points-give-the-same-line
  demonstration; horizontal/vertical lines treated as a real blind spot; exercises
  cover an unusually complete trap taxonomy including sign-product and
  qualitative-bounding items.
- Poorly: no slope-as-rate-of-change contextual framing up front (real-world meaning
  arrives only via exercises); parallel/perpendicular given as bare facts with no
  intuition (no rotation/similar-triangles why); distance/midpoint and systems are
  elsewhere, so the chapter leans narrow; again zero calculator/Desmos strategy; no
  guidance on when qualitative bounding beats computing, though the exercises demand it.
