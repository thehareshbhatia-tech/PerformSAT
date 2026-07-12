# Raw notes — College Panda SAT Math (Digital ed.), Ch. 16: Quadratic Functions

Source scope: right half of p0092 through left half of p0101 (~4.5 pages of theory with
five worked examples and an 11-point review list, then two exercise sets: ~18 structural/
algebraic items and ~22 modeling/system items). Extraction is understanding-only.

## Concepts taught (candidate nodes)

- `parabola-anatomy` — A quadratic's graph is a symmetric U (or inverted U); its complete
  description is opening direction, y-intercept, x-intercepts (0/1/2 of them), axis of
  symmetry, and vertex. Every SAT quadratic item asks for one of these five, possibly in
  costume.
- `quadratic-three-forms` — Standard, factored, and vertex form are the same object with
  different features made legible: standard exposes opening direction (sign of the leading
  coefficient) and the y-intercept (constant term); factored exposes the roots; vertex
  form exposes the vertex. Expert skill = choosing/reaching the form that makes the asked
  feature free to read.
- `parabola-opening-direction` — Leading coefficient positive → opens up → has a minimum;
  negative → opens down → has a maximum. Doubles as the min-vs-max decision.
- `quadratic-y-intercept-readout` — The constant term IS the y-intercept; in context it is
  the "value at zero input" (starting height, fixed cost, expenses with zero customers).
- `vieta-shortcuts` — Sum of roots = −(linear coeff)/(leading coeff); product = constant/
  leading. Gets root aggregates without ever finding roots; the SAT exploits this in
  find-the-other-root and find-the-unknown-coefficient items.
- `parabola-axis-symmetry` — Any two points with equal outputs sit symmetrically about the
  axis; the axis x-value is their input-average. Roots are just the special equal-output
  pair (both zero). This is the load-bearing idea of the chapter.
- `vertex-as-optimum` — The vertex is where the extreme value lives: its x is WHERE the
  max/min occurs, its y is WHAT the max/min value is. The two questions ("for what x" vs
  "what is the max") are deliberately confusable and distractors always offer both.
- `vertex-x-three-routes` — Three interchangeable ways to the vertex x: average any
  equal-output pair (usually the roots), the −b/(2a) formula, or read h from vertex form.
  The source derives −b/(2a) as (sum of roots)/2 rather than asserting it — worth keeping.
- `discriminant-solution-count` — The expression under the quadratic-formula radical
  controls how many real solutions exist; only its SIGN matters (positive → two, zero →
  one, negative → none), and geometrically that is the number of x-axis crossings.
- `discriminant-boundary-hunting` — Items that fix a solution count and solve for an
  unknown coefficient: set up the discriminant inequality/equation, then handle the
  boundary (strict vs non-strict, least/greatest INTEGER beyond a non-integer bound).
- `line-parabola-intersection-count` — Intersections of a line and a parabola = solutions
  of the system = solutions of the single quadratic obtained by substitution; "touches
  exactly once" (tangency) means that quadratic's discriminant is zero. A horizontal line
  tangent to a parabola must pass through the vertex's y-value — special case worth its
  own reflex.
- `equal-outputs-symmetry` — Given f(p)=f(q) (stated directly, via a table, or via two
  x-intercepts), the axis is at the midpoint of p and q. Unlocks table items, find-the-
  other-root items, and find-f-at-a-far-point items.
- `projectile-arc-model` — Height-vs-time is a downward parabola: launch/land are the
  x-intercepts, apex is the vertex, and equal heights occur at times symmetric about the
  apex time. Rising and falling through the same height is the symmetry pair in disguise.
- `optimization-word-problems` — Revenue/profit/cost-per-unit models where the vertex is
  the payload: interpret (h,k) with units attached (h = the input that optimizes, k = the
  optimal value), and interpret intercepts as break-even/zero points. Unit scaling
  ("thousands of dollars," "x thousand units") is where the traps live.

## Teaching philosophy observed

- **One object, many lenses.** A single running quadratic is threaded through the entire
  chapter — its y-intercept, roots, axis, vertex, vertex form, and discriminant are each
  extracted in turn. The student sees one parabola completely dissected rather than six
  disconnected mini-topics. Strong design; worth stealing structurally for our Learn
  chapter.
- **Derive, don't decree.** The axis is discovered by slicing the parabola with a
  horizontal line and averaging the intersection x's; the vertex formula then falls out as
  average-of-roots via the sum-of-roots shortcut. The formula arrives pre-justified.
- **Deliberate deferral.** Completing the square is explicitly postponed to a later
  chapter, with the claim that quadratics questions never require it (vertex reachable via
  −b/(2a) instead) though other question types do (**unverified-claim**; circle equations
  presumably). Sequencing choice: vertex form is taught and USED before the standard→vertex
  conversion algorithm exists — conversion done by computing the vertex numerically.
- **Paradox defusal.** After computing root sum/product for a no-real-roots quadratic, the
  source names the apparent contradiction and resolves it (roots exist but aren't real),
  then explicitly bounds scope: imaginary numbers aren't tested (**unverified-claim** —
  matches our understanding of the Digital SAT).
- **Consolidation artifact.** Chapter closes with a numbered review list restating all
  facts — the source's chapters are built to be revisited as reference cards.
- Worked examples escalate: read features → count solutions → solve for a constant under a
  solution-count constraint → system tangency → tangency with the unknown in the slope
  (two candidate answers, one killed by a stated sign constraint).

## Expert reasoning patterns (generalized)

1. **Feature-first triage.** Identify which of the five anatomy features is being asked,
   then pick the cheapest route: is the equation already in the form that exposes it? If
   factored, never expand; average the roots. If standard, −b/(2a). If vertex form, read it.
2. **Roots-average reflex for maxima.** For "at what x is f greatest/least" on a factorable
   or already-factored quadratic, averaging the roots beats expanding + formula. The source
   shows both routes side by side and implicitly prices them.
3. **Any equal pair is as good as the roots.** The symmetry principle is not about
   x-intercepts specifically; a table row pair, f(p)=f(q) statement, or two same-height
   trajectory times all give the axis instantly.
4. **Solution-count questions are discriminant questions.** Translate "how many / exactly
   one / no real solutions" (of an equation OR a line-curve system) into a sign condition
   on the discriminant before doing anything else. For systems: substitute to one equation
   first, collect terms carefully (grouping an unknown coefficient into the linear term),
   then impose the sign.
5. **Boundary discipline.** After solving the discriminant inequality for a parameter,
   re-read the question for integrality and strictness before answering (least integer
   strictly above a bound, greatest integer strictly below).
6. **Sign-constraint pruning.** When a squared condition yields two parameter values, the
   question's stated constraint (positive constant, a<k, etc.) selects one — expect
   two-root parameter answers by design.
7. **Model → anatomy mapping.** In word problems, before computing anything, bind context
   to anatomy: what does x=0 mean here, what do the x-intercepts mean, what does the
   vertex mean, what units are on each. Then most items are single reads.
8. **Desmos strategy (explicitly taught).** The review list names graphing on Desmos as a
   legitimate route to x-intercepts, alongside factoring and the formula. That is the only
   explicit calculator mention. For our product (built-in Desmos): the tutor should extend
   this — plotting instantly answers solution-count items (count crossings), tangency items
   (slide the parameter), vertex/min-max items (click the extremum), and table items. The
   algebraic routes remain necessary for parameterized items where the unknown is in the
   equation, but many "how many solutions" items are 10-second Desmos reads.

## Misconceptions targeted (and why students hold them)

- **vertex-form-sign-flip** — Reading the vertex of a(x+h)²+k as (+h, k). The source calls
  this out as the single most common quadratics error. It forms because the vertex-form
  template is memorized as "the numbers in the equation are the vertex," and the minus in
  the template is invisible when the printed sign is plus. Fix taught: the same inside-zero
  anchor from Ch15 (what x kills the squared expression). Distractor design: the mirrored
  vertex is ALWAYS on offer, often crossed with a k-sign flip.
- **discriminant-magnitude-matters** — Students compute the discriminant and then try to
  use its value (or compare magnitudes) instead of only its sign. Forms because every
  other computation in algebra rewards the value. The source states the sign-only principle
  explicitly.
- **must-find-roots-first** — Belief that root sum/product/other-root questions require
  solving the quadratic. Forms from procedural schooling (find roots → then do things with
  them). Vieta items are designed so the direct solve is ugly (large/irrational roots) and
  the shortcut is clean.
- **where-vs-what confusion** — Conflating the x at which the max occurs with the max value
  itself. Forms because "the maximum" is linguistically ambiguous and schools drill vertex
  as a point, not as an (input, output) pair with distinct meanings. Both numbers always
  appear as answer choices.
- **unit-scale blindness** — In models with scaled units (thousands of dollars, x in
  thousands of units), reading raw coordinates as literal quantities. Distractor sets cross
  the vertex coordinates with the scale factors (right number/wrong scale, wrong number/
  right scale).
- **role-swap in interpretation items** — Given f(input)=output in context, swapping which
  quantity is the input (e.g., price vs profit). Distractors state the same numbers with
  roles exchanged, or attach the meaning of the vertex to an intercept and vice versa.
- **c-is-always-the-answer** — Over-attaching to "constant term = y-intercept = initial
  value": items exploit it by asking about the constant when the model's meaningful reading
  is "value when the input is zero" (correct) vs distractors saying "maximum value" or
  "average value." Also inverted: after a HORIZONTAL shift, the new y-intercept must be
  computed by evaluation, not read off.
- **strict-boundary slippage** — Answering the boundary value itself when the inequality is
  strict (e.g., picking the bound instead of the next integer). Forms because equation-
  solving habits end at "solve for the constant."
- **imaginary-roots-panic** — Encountering sum/product of roots for a rootless (in ℝ)
  quadratic and concluding the question is broken. The source pre-empts by acknowledging
  non-real roots exist but are out of scope.

## SAT patterns claimed (all to verify against officials/our bank)

- Item shapes the exercise sets treat as canonical: (a) given one x-intercept and standard
  form, find the other (Vieta or factor); (b) interpret the constant term in a cost/expense
  model; (c) value/height model in vertex form → read optimum directly; (d) "for what x
  does f reach its max/min" on factored quadratics → average roots; (e) exactly-one/no-real-
  solution → solve for the parameter via discriminant, often with integer-boundary twist;
  (f) vertex + one root given → other root by symmetry; (g) graph shown → match vertex-form
  equation with sign traps; (h) quadrant-of-vertex items with symbolic positive constants;
  (i) interpret b where (0,0) and (b,0) are intercepts of a speed/height arc (b = when it
  ends); (j) roman-numeral must-be-true sets about signs of coefficients given vertex
  location/max value; (k) line-parabola tangency incl. horizontal-line-through-vertex and
  unknown-slope variants; (l) f(p)=f(q) or table → axis → evaluate elsewhere; (m) projectile
  with asymmetric givens (apex time/value + landing time) → build vertex form, evaluate;
  (n) composition with Ch15: g(x)=f(x−k) → optimum location shifts by k.
- "Completing the square is never needed for quadratic-function items" — **unverified-claim**.
- "Imaginary numbers are not tested" — **unverified-claim**, consistent with our records.
- Sum/product-of-roots items appear on the harder end — **unverified-claim** (our M2-Hard
  calibration memory agrees roots-aggregate items skew hard; still verify frequency).

## Prerequisite edges implied

- Solving quadratic equations (factoring, quadratic formula) — explicitly assumed from an
  earlier chapter; this chapter is "the graph layer" on top of it.
- Ch15 translations — reused for vertex-form reading (same anchor trick) and composed items
  (translate then optimize).
- Systems by substitution — required for all intersection-count items.
- Function notation/evaluation; inequality manipulation (sign flips when dividing by a
  negative, in discriminant boundary work); coordinate-plane basics (quadrant signs).
- Feeds forward: completing the square (later chapter) closes the standard→vertex loop;
  circle equations will need it.

## Difficulty escalation observed

Read a feature off the correct form → convert between forms → single-constraint parameter
solves (discriminant = 0) → inequality + integrality boundaries → multi-constraint symbolic
reasoning (roman-numeral coefficient-sign items, vertex-location inequalities producing a
range for a coefficient) → hybrids (translation + optimization, table + symmetry + far
evaluation, asymmetric projectile givens). Word problems escalate by unit scaling and by
moving the asked quantity away from the vertex (e.g., height at a non-apex time, time gap
between symmetric heights).

## What this source does well / poorly

**Well:**
- The one-running-example dissection makes parabola anatomy feel like one idea, not six.
- Deriving −b/(2a) from symmetry + Vieta gives students a recovery path when the formula
  is misremembered — and the symmetry principle itself solves table/equal-output items the
  formula can't touch.
- Explicit naming of the vertex-form sign error as the most common mistake, with a reusable
  fix imported from the transformations chapter (cross-chapter coherence).
- Exercise 2 is a genuinely strong modeling set: projectile, profit, cost-per-unit, value-
  over-time, download-speed arcs — the vertex/intercept interpretation traps are very close
  to real Digital SAT flavor.
- Honest handling of the no-real-roots Vieta paradox instead of hiding it.

**Poorly:**
- Vertex form arrives without completing the square, so standard→vertex conversion is
  "compute the vertex numerically, then re-assemble" — workable but leaves students unable
  to verify equivalence algebraically until a later chapter; the dependency is stated but
  the gap is real if a student reads only this chapter.
- Min/max language gets one bullet; the where-vs-what distinction is left to the exercises
  to teach through error rather than being confronted head-on in prose.
- No treatment of parabola width/steepness (|a| meaning), even descriptively — occasionally
  probed by officials via which-graph items.
- Desmos appears only as a one-line mention for x-intercepts; no worked demonstration of
  when graphing beats algebra (solution-count and tangency items are the big wins). Our
  product should invert this emphasis where the item allows it.
- Interpretation-item guidance (mapping context roles to anatomy) is implicit in solutions
  rather than taught as a checklist; we should make the bind-context-to-anatomy step an
  explicit first move in our node.
