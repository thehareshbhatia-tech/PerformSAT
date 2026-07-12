# Raw notes — Math Orange source, Ch. 2: Slope-Intercept Form
Source: math-orange study source A, chapter on slope-intercept lines (pp. ~43–86).
Section: math · Domain: algebra · These are extraction notes in our own words for later
graph synthesis. No source expression retained.

## Concepts taught (candidate nodes)

- **coordinate-plane-literacy** — reading the xy-plane: axes, origin, ordered-pair
  convention (x first, then y), quadrants, gridline counting to locate points, and the
  equivalence f(a) = b ⟺ point (a, b) is on the graph of f.
- **slope-as-rate-of-change** — slope is how much y changes per unit change in x,
  computed as Δy/Δx; constant everywhere on a line, regardless of which two points
  you sample or their order (with consistent assignment).
- **slope-from-graph-by-counting** — finding slope visually by drawing a small
  right-triangle "step" between two lattice points and counting the vertical and
  horizontal legs, rather than substituting into the formula.
- **slope-formula-two-points** — m = (y₂−y₁)/(x₂−x₁); the algebraic route, best when
  points are far apart or no picture exists.
- **y-intercept-as-starting-value** — the crossing of the y-axis; the value of y when
  x = 0; in context, the base/initial amount before any of the x-quantity accrues.
- **x-intercept-meaning** — where y = 0; found by substituting y = 0 and solving;
  unlike b, not directly visible in y = mx + b.
- **slope-intercept-template** — y = mx + b as a fill-in-the-blanks template with four
  roles (x-value, y-value, rate, start). Letters may vary in context problems; the
  positions/roles are what matter, not the letters.
- **equation-from-graph** — read b where the line crosses the y-axis, then count a
  slope step between two clean gridline intersections.
- **equation-from-two-points** — slope first, then substitute either known point to
  solve for b. Any point on the line works; 0/1-valued coordinates minimize arithmetic.
- **equation-from-table** — a table of x,y pairs is just a list of points; deltas
  between rows give Δx and Δy by subtraction/counting; a row with x = 0 hands you b.
- **graph-identification-from-equation** — matching an equation to one of four graphs:
  eliminate by y-intercept first, then by slope sign, then verify slope magnitude.
- **interpreting-slope-in-context** — mapping a coefficient to a real-world rate
  ("per"-language); slope units are (y-units)/(x-units); a fractional slope like p/q
  means y changes by p when x changes by q, and any equal rescaling of that ratio
  describes the same line.
- **interpreting-intercept-in-context** — mapping the constant to the starting amount,
  in y-units, at x = 0.
- **proportional-change-on-a-line** — because slope is constant, "if y changes by this
  much, how much does x change?" is a one-step proportion Δy/Δx = m; no need to fully
  solve the equation twice.
- **vertical-and-horizontal-lines** — y = c: slope 0 (Δy = 0), still slope-intercept
  form (y = 0x + c). x = c: undefined slope (Δx = 0, division by zero), cannot be
  written in slope-intercept form at all.

## Teaching philosophy observed

- **Concrete scenario before formalism.** Slope is introduced through a physical
  climb-vs-horizontal-distance story, and only after the intuition lands does the
  formula get named. Interpretation sections likewise re-ground every symbol in a
  context role.
- **Graphical counting is taught as the default; the formula is the fallback.** The
  source explicitly ranks methods: visually counting rise/run between lattice points is
  less error-prone; the two-point formula wins when points are far apart or purely
  numeric. This "method choice by situation" framing is valuable for our tutor.
- **A standing opening move: when a line problem gives points, compute the slope
  first.** The source states nearly no line problem is solvable without it.
- **Substitute what you're given.** A generalized principle is taught early: whenever
  an equation has unknown constants and you know any point (from text, graph, or
  table), plug the coordinates in. The source flags that students freeze at exactly
  this step — knowing m but not seeing that a known point yields b.
- **Read graphs only at gridline crossings.** Repeated instruction to anchor on points
  where the line crosses two gridlines to avoid estimating fractional coordinates.
- **Multiple worked routes per example** (graphical vs. algebraic; direct interpretation
  vs. substitution check), with commentary about which is faster and which is
  error-prone — models expert method arbitration, not a single procedure.
- **Escalation within a section is deliberate:** identify m and b in bare equations →
  write an equation from given m,b → equation from graph → from two points → from a
  table → interpret coefficients in context → fractional-slope proportional reasoning.
  Each embedded drill isolates exactly one new skill before problems compose them.

## Expert reasoning patterns (generalized)

1. **Elimination-by-feature for graph-matching items:** check the y-intercept of each
   choice first (cheapest feature), discard non-matches, then discriminate remaining
   choices by slope sign, then by exact slope magnitude via a counted step. Ordered
   cheapest-feature-first filtering.
2. **Anchor point + step:** to build any line equation, secure one anchor (preferably
   the y-intercept) and one rate (preferably a counted lattice step). Two clean reads
   beat four estimated ones.
3. **Left-to-right convention:** always traverse from the leftmost of the two chosen
   points so Δx > 0 and only Δy carries sign; this kills most sign errors. If using the
   formula instead, keep point-1/point-2 assignment consistent across numerator and
   denominator — the choice itself doesn't matter.
4. **Table = point list:** don't treat tables as a separate skill; subtract adjacent
   rows for deltas, scan for the x = 0 row (b for free), and know Δy scales with Δx
   between non-adjacent rows (ratio stays constant).
5. **Extend-the-table move:** if x = 0 isn't listed, mentally prepend/append rows by
   stepping the constant deltas until x = 0 — often faster than solving for b
   algebraically.
6. **Interpretation protocol for "what does this number mean" items:** first classify
   the number's role in the template (rate vs. start vs. a particular x or y value),
   then check units of numerator and denominator, then eliminate choices that (a)
   invert the units, (b) rescale incorrectly, or (c) describe the wrong role.
7. **Rate-rescaling check:** a slope stated as p/q is also 10p/10q or p/1 scaled —
   distractors exploit failure to reduce or rescale; experts normalize to "per 1 x-unit"
   before comparing to answer choices.
8. **Proportion shortcut for change questions:** set (change in y)/(change in x) equal
   to the known slope and cross-multiply. Avoids computing two full states of the
   equation.
9. **Steepness ordering:** for comparing several slopes visually (including negatives),
   rank by signed value, not visual steepness — steep-downhill is the *smallest*.
   Distractors order by |slope|.
10. **Desmos/calculator strategy (our addition — the source teaches manual methods
    only here):** in our product the built-in Desmos makes several of this chapter's
    manual skills instant: type the equation to see intercepts/points; enter a table of
    points and fit a line; plot both a candidate equation and given points to verify a
    match. Best uses: graph-identification items (type the equation, compare), messy
    fractional slopes, and verify-after-solving. Manual counting stays faster for clean
    lattice graphs already drawn in the problem; algebra stays necessary when answers
    are symbolic (constants in terms of other constants). The source's omission of
    calculator strategy in this chapter is a gap we should fill in synthesis.

## Misconceptions targeted (and why students hold them)

- **ordered-pair-reversal** — writing (y, x); forms because both axes are learned
  simultaneously and nothing in the notation itself signals order. Produces
  mirror-image point placement; test items with both (a, b) and (b, a) as plotted
  choices exploit it.
- **slope-sign-from-direction-of-travel** — getting the sign wrong by reading the line
  right-to-left (Δx negative without noticing). Forms because "rise over run" is taught
  without a traversal convention. Trap: negative-slope graphs with answer pairs
  differing only in sign.
- **frozen-at-b** — student finds m, writes y = mx + b, and stalls, not realizing a
  given point substitutes for x and y. Forms because school practice usually hands
  students b directly; they've never needed the substitution move. Trap design: give
  slope + one non-intercept point; wrong answers use the point's y-value as b.
- **fraction-form-confusion** — treating (−p)/q, p/(−q), and −(p/q) as different
  numbers. Forms from weak fraction-sign fluency. Distractors present the same slope
  in an unfamiliar sign arrangement.
- **y-intercept-must-be-visible** — believing a table/graph without x = 0 shown means b
  is unknowable. Forms from over-reliance on reading b off pictures. Items give tables
  starting at x = 1 or 2; wrong answers use the first listed y-value as b.
- **role-confusion-in-context** — interpreting the constant as a rate or the
  coefficient as a starting amount. Forms because both are "the numbers in the
  equation" and context language ("per", "initial") is skimmed. Nearly every
  interpretation item's distractor set is a matrix of role × unit mismatches.
- **unit-inversion** — reading slope p/q as "q units of y per p units of x". Forms
  because the fraction bar carries no unit labels. Distractors state the inverted rate;
  the source recommends writing the units into the fraction explicitly.
- **scale-mismatch** — accepting "y changes by 0.1 per 248 x" when the true rate is 1
  per 248 (or equivalently 10 per 2,480). Forms from not testing choices against the
  Δy/Δx ratio. Distractors are correct-looking rescalings off by a factor of 10.
- **vertical-horizontal-swap** — mixing up which of x = c / y = c is which, and which
  has zero vs. undefined slope. Forms because both are "degenerate" lines memorized as
  a pair. The 0-numerator (slope 0) vs. 0-denominator (undefined) derivation is the
  targeted fix.
- **axes-cross-at-zero assumption** — assuming the origin is where axes cross even on
  statistical plots with truncated axes. Forms from years of textbook graphs that do
  cross at 0. Flagged by the source as a recurring real-test hazard.

## SAT patterns claimed (unverified-claim — check against official material + our bank)

- Line problems where slope is needed appear constantly; "find slope first" is
  presented as near-universal. (unverified-claim, though consistent with our bank)
- Graph-identification items are engineered so intercept elimination alone leaves ≥2
  choices sharing an intercept, forcing a slope check. (unverified-claim)
- Interpretation items ("best interpretation of the number k") use distractor sets
  built from role-swap, unit-inversion, and rescaling errors. (unverified-claim)
- Tables frequently include the x = 0 row deliberately, rewarding students who scan
  for it. (unverified-claim)
- Real-world graphs sometimes use non-zero axis crossings; the test expects students
  to notice. (unverified-claim)
- Context equations often rename variables (t, d, C…) and sometimes present the form
  b + mx = y (terms flipped around the equals sign), testing template recognition over
  letter memorization. (unverified-claim)

## Prerequisite edges implied

- coordinate-plane-literacy → everything else in the chapter.
- fraction/negative-number fluency → slope-from-two-points, fraction-form-confusion fix.
- function-notation basics (f(a)=b as a point) → equation-from-two-points variants
  stated in f-notation.
- solving one-step/two-step linear equations → solving for b, x-intercept.
- ratio/proportion reasoning → proportional-change-on-a-line, slope-rescaling items.
- slope-as-rate + y-intercept-as-starting-value → interpreting-linear-equations,
  and downstream: standard form (ch3), systems (ch4), linear modeling.

## Difficulty escalation observed

Easy: identify m, b in a bare equation; slope between two plotted lattice points.
Medium: equation from graph/two points/table; graph identification; single-role
interpretation. Hard: fractional-slope proportion questions; abstract constants
(slope expressed in terms of other unknowns); multi-line comparisons (race/head-start
setups where a vertical offset between parallel lines is the answer); composed items
(slope of one function defined as a multiple of another's; sum of a and b in
f(x) = ax + b from a two-row table); ratio-of-coordinates items for a line through the
origin. Hard items stop naming the skill — they hide "this is a slope question" behind
function notation or context.

## What this source does well / poorly (for synthesis)

Well: method arbitration (visual counting vs. formula, with honest costs); the
substitute-known-points principle generalized beyond lines; unit-labeled slope
fractions for interpretation; misconception-aware warnings (sign conventions,
truncated axes, table without x = 0); clean per-skill micro-drills before composition.
Poorly: no calculator/Desmos strategy in this chapter despite the digital SAT (our
notes must add it); interpretation guidance is verbal-heavy with no compact decision
aid; the long context walkthroughs bury the reusable protocol; steepness-vs-value
distinction for negative slopes is only implicit in one solution; limited treatment of
"which point is easiest to substitute" beyond a passing remark.
