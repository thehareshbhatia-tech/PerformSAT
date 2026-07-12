# Raw extraction — Math source A ("orange"), Ch. 10: Graphs of Quadratics & Polynomials

Source scope: parabola anatomy, the three quadratic forms and what each exposes,
vertex-finding routes, polynomial zero/cross-bounce behavior, intersections-as-solutions.
Section: math. Domain: Advanced Math (nonlinear functions / equivalent expressions).
All wording below is ours; problems are described by design, never reproduced.

## Concepts taught (candidate nodes)

- `parabola-anatomy` — A quadratic's graph is a U-curve that is perfectly mirror-symmetric
  about a vertical line through its turning point (the vertex). Function values march
  toward the vertex and then replay in reverse — a table of values shows this palindrome
  pattern even without a picture.
- `quadratic-range-from-vertex` — The output set of a quadratic is one-sided: bounded at
  the vertex's y-value, unbounded the other way. Opens up → y ≥ k; opens down → y ≤ k.
- `standard-form-feature-read` — In y = ax² + bx + c: sign of a → opening direction;
  |a| → vertical stretch (bigger magnitude = skinnier); c → y-intercept (all x-terms die
  at x = 0); b → slope of the curve as it crosses the y-axis (the tangent line there is
  y = bx + c).
- `vertex-side-from-ab-sign` — The sign of the product a·b tells which side of the y-axis
  the vertex sits on (ab positive → vertex left; ab negative → vertex right; b = 0 →
  vertex on the y-axis). Follows from h = −b/(2a). Lets a student sanity-check a graph
  in seconds without computing anything.
- `factored-form-zero-read` — In y = a(x + p)(x + q), the graph's x-crossings are −p and
  −q: each factor is a machine that outputs 0 at exactly one input. Sign flip between
  "factor (x + p)" and "zero at −p" is the load-bearing detail.
- `factor-zero-equivalence` — Two-way street for ANY polynomial: (x − z) is a factor ⇔
  z is a zero ⇔ (z, 0) is on the graph. Products of factors are also factors.
- `double-zero-bounce` — When the two zeros of a quadratic merge (perfect square), the
  graph touches the x-axis at one point and turns back instead of crossing. Useful mental
  film: slide a two-root parabola upward and watch its roots slide together.
- `odd-even-factor-multiplicity` — Factor raised to an odd power → graph passes through
  that x-intercept; even power → graph bounces off. Root cause: even powers can't go
  negative, so the local sign of y can't flip there.
- `vertex-form-feature-read` — In y = a(x − h)² + k the vertex is (h, k). The h inside
  the parentheses carries the OPPOSITE sign of what's written; the trailing constant k is
  the vertex height, NOT the y-intercept. A vertex-form quadratic is a "merged double
  zero" lifted by k and stretched by a.
- `vertex-x-as-root-midpoint` — The vertex x-value is the average of the two zeros
  (symmetry). Given factored form, average the roots; then get the vertex y by plugging
  that x back in — no expansion needed. Also true for ANY pair of equal-height points,
  not just intercepts.
- `vertex-x-from-standard` — h = −b/(2a). Connect to prior knowledge: −b/a is the sum of
  the roots, so half of it is their average — same midpoint idea in coefficient clothing.
- `complete-square-to-vertex-form` — Fast rewrite: swap x² + bx for (x + b/2)² − (b/2)²
  (with a leading a: a(x + b/(2a))² − a(b/(2a))²), then combine constants. Produces both
  vertex coordinates in one motion instead of the two-step h-then-k route.
- `vertex-form-zeros-by-square-root` — To get zeros from vertex form, don't detour
  through standard form: set y = 0, isolate the squared term, take ± square roots, solve.
- `form-choice-for-question` — The three forms are one equation wearing three outfits;
  each shows exactly one feature as a naked constant: standard → y-intercept, factored →
  zeros, vertex → max/min and its location. "Equivalent form that reveals X" questions
  require BOTH equivalence and the right outfit.
- `intersections-equal-solutions` — A system's real solution count = the number of points
  where ALL its graphs pass through simultaneously (not pairwise crossings). Extends the
  x-intercept idea (intersection with y = 0) to arbitrary curve pairs/triples.

## Teaching philosophy observed

- Builds the parabola from a table of values first, so symmetry is DISCOVERED in the
  numbers before it's named on a graph. Good instinct: anchors the axis-of-symmetry idea
  in something students can verify by hand.
- Strict form-by-form sequencing (standard → factored → vertex), with each section asking
  the same question: "what does this form let you read off instantly?" The chapter's real
  thesis is form ↔ feature fluency, and the recap closes with a triangle diagram of
  conversion routes among the three forms. That triangle framing (any form to any form,
  each edge a named move: expand / factor / complete the square / average the roots) is
  worth stealing as an interactive.
- Every claim is grounded mechanically (WHY does a's sign control direction: the x² term
  dominates for large |x|; WHY does an even factor bounce: even powers can't flip sign).
  Never "just memorize."
- Layered solution style: examples often carry two solutions (fast/structural vs slow/
  algebraic) plus a Notes block naming the trap or an optimization. The "risky method
  shown, then dissected" pattern (see graph-reading below) is unusually honest teaching.
- Drills escalate within a set: read-offs → sign-flips (negative a, missing a) → squared
  factors → non-integer roots → coefficient-of-x greater than 1 in a factor (zero at
  −b/a of the factor, a classic slip).

## Expert reasoning patterns (generalized)

- **Read the equation before doing anything.** For any quadratic question with a graph or
  choices: extract direction (sign of a), y-intercept (c), vertex side (sign of ab) in
  under ten seconds. Many multiple-choice items die right there via elimination.
- **Feature-to-form dispatch.** Asked about roots/x-intercepts → get to factored form (or
  read it). Asked about max/min/vertex → get to vertex form or use h = −b/(2a). Asked
  about y-intercept/initial value → standard form's constant. The skill is routing, not
  computing.
- **Symmetry before algebra.** If one zero and the vertex x are known, the other zero is
  the mirror image — no equation solving. Same for any two equal-y points.
- **Plug-back over expand.** After finding the vertex x from factored form, evaluate the
  factored form directly for the vertex y. Expanding first is wasted motion and an error
  surface.
- **Vertex-quadrant discrimination.** When all answer graphs share direction and
  y-intercept, the vertex's quadrant is the discriminator; the streamlined
  complete-the-square move gets it fastest.
- **Graph-reading discipline.** Reading intersection points off a provided grid is legal
  ONLY when the axes' scales have been checked; the source demonstrates how a
  one-square-per-square slope assumption on unequally-scaled axes silently draws the
  wrong line. Default to substitution algebra; use the picture to verify.
- **Desmos note (our product, not this source):** these pages predate a
  calculator-graphing emphasis — no Desmos strategy appears in the chapter. For our graph
  nodes we should add the missing layer: type the equation, read vertex/zeros/intercepts
  off the plot, and use sliders for parameter questions ("for which k…"). Everything in
  this chapter that the book solves by form-conversion is a 15-second Desmos read on the
  real exam; our tutor should teach BOTH the structural read (for speed/verification and
  no-calculator confidence) and the Desmos route, and flag when Desmos is slower (pure
  equivalent-form questions, where choices must be matched structurally, not graphically).

## Misconceptions targeted (and why students hold them)

- **vertex-form-sign-flip** — Students read y = (x + 1)² − 2 as vertex x = +1. Why: the
  visible symbol is "+1", and school habit says "read the number you see." Trap design:
  offer both (h, k) and (−h, k) as choices.
- **vertex-constant-as-y-intercept** — Students treat k in vertex form like c in standard
  form. Why: overgeneralizing "the trailing constant is the y-intercept," which was true
  in slope-intercept AND standard form. Fix in source: substitute x = 0 and watch the
  squared term contribute.
- **axis-scale-blindness** — On plotted graphs, students assume both axes tick by 1 and
  that origins start at 0. Why: most classroom graphs do. Two documented trap designs:
  (a) a scatterplot whose y-axis starts well above zero, making a large positive
  y-intercept look like it should be negative (choices offer ±same constant); (b) a grid
  where one x-tick spans multiple squares, so a hand-drawn "slope −1" line is actually
  slope −3. Exploits fast visual habits; the picture is bait, the axis labels are the
  question.
- **pairwise-vs-common-intersection** — For 3+ equation systems, students count any
  crossing between any two graphs as a solution. Why: "intersection = solution" learned
  for two-equation systems, applied without the "all equations simultaneously" clause.
- **bounce-cross-confusion** — Students pick a factored function whose zeros match the
  graph but whose multiplicities don't (crossing where it should bounce). Why: they check
  WHERE the graph meets the axis but not HOW. Trap design: two choices share the same
  zero set, differing only in which factors are squared.
- **a-magnitude-ignored** — Students think a only controls direction. Why: direction is
  taught first and loudest. Trap design: "same two x-intercepts, whose vertex is farthest
  from the x-axis?" — answer keyed to |a|, distractors keyed to sign or smallness.
- **factor-zero-sign-slip** — (x + 3) → zero at +3. Why: the "opposite sign" rule feels
  arbitrary if never derived by setting the factor to 0. Compounded in factors like
  (3x − 1) where the zero is a fraction, not ±1.

## SAT patterns claimed (unverified-claim; check against official material + our bank)

- Equivalent-forms questions ("which form displays X as a constant/coefficient") are a
  recurring real-test family; correct answer must be BOTH equivalent and correctly
  formed — distractors are non-equivalent lookalikes in the right form. (unverified-claim)
- Projectile/economy modeling items map: constant term → initial value; vertex →
  max height / optimal input; positive x-intercept → "hits the ground" time.
  (unverified-claim, consistent with our bank's CPM/init-value items)
- Parabola-plus-line "exactly one intersection" and "f(a) = g(a)" items appear with
  scaled-axis graphs designed to punish graph-reading. (unverified-claim)
- Scatterplot → "which quadratic models the data" items are solvable purely by sign of a,
  sign of b, sign/size of c. (unverified-claim)
- Table-of-values polynomial items ("which must be a factor") key on the rows where the
  output is 0 — other rows are noise. (unverified-claim)

## Prerequisite edges implied

- `standard-form-feature-read` ← linear y-intercept/slope reading (slope-intercept form),
  exponent basics (x² dominance argument).
- `factored-form-zero-read` ← factoring quadratics; zero-product principle.
- `factor-zero-equivalence` ← polynomial remainder ideas (mentioned as sibling), factoring.
- `vertex-form-feature-read` ← function evaluation/substitution.
- `complete-square-to-vertex-form` ← completing-the-square as an equation-solving method
  (taught chapters earlier); binomial squaring.
- `vertex-x-as-root-midpoint` ← `factored-form-zero-read` + symmetry from
  `parabola-anatomy`.
- `intersections-equal-solutions` ← linear systems solution concepts; substitution method.
- `odd-even-factor-multiplicity` ← sign behavior of even/odd powers.

## Difficulty escalation observed

Easy: read one feature off one form (y-intercept; vertex from vertex form; zeros from
factored form). Medium: one conversion or one inference (vertex from standard via
−b/(2a); match factored equation to graph using zeros + direction). Hard: parameterized
constants (vertex (c, d) expressed in terms of a; "could be the value of c" given vertex
and root constraints), multiplicity reasoning on quartics/quintics, form-choice questions
where three of four choices are equivalent but wrong-formed, and modeling items where the
vertex/intercept must be interpreted, not computed. Hardest items compose two concepts
(e.g., horizontal line through a cubic's local extremes → count solutions of f(x) = k).

## What this source does well / poorly

Well: the form ↔ feature thesis is crisp and relentlessly reinforced; mechanical WHYs for
every rule; the b-coefficient-as-tangent-slope insight (rare in prep books) gives a
genuinely fast vertex-side check; honest treatment of risky graph-reading with a worked
failure mode; conversion-triangle recap is an excellent mental map.

Poorly: no graphing-calculator/Desmos strategy at all (our biggest add); the
tangent-slope claim for b is asserted ("accept without calculus"), which will frustrate
some students — our version can show it numerically with two nearby points; transformations
(shifts/stretches as operations on graphs) are implied by vertex form but never taught as
a standalone lens; chapter is long and the hardest composition patterns (cubic + k-line)
appear only in the problem set, never in instruction.
