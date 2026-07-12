# Raw notes — Math source A, Ch. 15: Scatterplots and Line Graphs

Source: math-orange chapter 15 (instruction + practice sets + answer key). PSDA territory:
reading data displays, fit-line reasoning, prediction vs actual, narrative line graphs.

## Concepts taught (candidate nodes)

- `scatterplot-anatomy` — Each dot is one observed entity carrying two measured values (the
  axes). The plot is raw data; any curve drawn through it is a *model*, a separate object.
- `line-of-best-fit-as-model` — The fit line summarizes the trend: roughly balanced points
  above and below, no obligation to pass through any data point. It can be linear, quadratic,
  or exponential; on the test it is usually linear.
- `correlation-sign-and-strength` — Positive/negative = direction the cloud trends (sign of
  the fit slope); strong/weak = how tightly the dots hug the line. Strength is about scatter,
  not steepness.
- `fit-line-equation-from-graph` — Slope from two points *on the line* (not data dots), chosen
  near gridline crossings and far apart to reduce read-off error; then intercept via plugging
  a line point into y = mx + b. Elimination by slope sign/rough magnitude usually halves the
  choices before the intercept is needed.
- `truncated-axis-hazard` — When the visible axis does not start at 0 (either axis), eyeball
  extrapolation to "where the line hits the axis" is invalid; the y-intercept must be computed,
  and the graph's bottom edge is not the line y = 0.
- `actual-vs-predicted-gap` — Actual = the data dot; predicted = the fit-line y-value at the
  same x. The comparison is a vertical y-distance. Above the line ⇒ model underestimates;
  below ⇒ overestimates. Points on the line are the best-predicted ones.
- `model-claim-modesty` — Slopes and intercepts of fit lines support only hedged, "predicted,
  on average" claims. Intercept readings at x-values far outside the data (price with zero
  competitors; x-intercept as "free product") are extrapolations the model does not license.
  Definitive-sounding answer choices ("cannot", "will", "actual") are usually wrong precisely
  because they are definitive.
- `slope-interpretation-with-units` — Slope = predicted change in y per ONE unit of x *as x is
  defined*, independent of how often the data was sampled (data every 4 years with x in years
  still gives a per-year slope).
- `narrative-line-graphs` — Graphs of a quantity over time with no modeling equation: steepest
  segment = fastest change; horizontal = no change; vertical drop/jump = sudden event. Reading
  is story-to-shape translation segment by segment.
- `graph-value-reading` — f(k) is the y-value at x = k; "how many times at height h" = count
  intersections with the horizontal line y = h; touching the time-axis = quantity is zero
  (ball on ground).
- `total-vs-net-from-distance-graphs` — Distance-from-home graphs: out-and-back journeys add
  the outbound and return distances for totals; the graph's endpoint gives only net position.
- `piecewise-fit-domains` — Some displays carry different fit segments over different x-ranges
  (or piecewise pricing); every read must first select the segment whose domain contains the
  queried x. Segment slope comparisons (steeper early vs late) answer per-unit-rate questions.

## Teaching philosophy observed

- Terminology minimized; the chapter spends its energy on *procedures with hazards flagged
  inline* (truncated axes, gridline spacing, precision-vs-answer-spread) rather than on
  statistics vocabulary.
- Prediction is deliberately framed as approximation from the first mention — the "modest
  claims beat definitive claims" principle is stated as a bolded invariant and then enforced
  through interpretation items.
- Solutions again model expert order: glance at answer spread to calibrate needed precision
  BEFORE computing; eliminate by slope sign; only then do arithmetic.
- Notes blocks teach graph-literacy meta-skills (which gridline is really the axis, what the
  grid spacing is) as reusable checks rather than one-off tricks.
- Narrative graphs are taught by simulating the story stepwise and eliminating choices at the
  first mismatching segment.

## Expert reasoning patterns (generalized)

- **Answer-spread first.** If choices differ wildly, coarse gridline reads suffice; if they
  cluster, slow down and read the axis scale exactly (gridlines may be 2.5 units, not 1).
- **Slope before intercept, sign before value.** On find-the-equation items, direction of the
  cloud kills half the choices; a two-point slope estimate kills more; the intercept is often
  only needed to break a final tie — and must be computed, not eyeballed, when the axis is
  truncated.
- **Vertical-gap discipline.** For any actual-vs-predicted question: locate the dot, ride
  vertically to the line, subtract y-values. Never a horizontal or along-the-line distance.
- **Horizontal-line counting.** "How many times was the value equal to h / predicted to be h"
  ⇒ draw y = h, count crossings (works for bouncing-ball items and for quadratic-model items
  alike). Include the initial descent — "after it was dropped" starts at t = 0, a classic
  off-by-one bait.
- **Story simulation for narrative graphs.** Convert each clause to a shape expectation
  (halve ⇒ drop to half, stop ⇒ flat, spill ⇒ vertical fall to zero) and eliminate at the
  first violation; do not try to appraise whole graphs holistically.
- **Segment-slope comparison for rates.** "Fastest increase" = steepest up segment; per-unit
  price questions on piecewise graphs compare rise/run across segments, not heights.
- **Extrapolation alarm.** Any conclusion at x far beyond the plotted cloud (huge competitor
  counts, x-intercepts of decaying prices) is flagged untrustworthy; the expert answer choice
  is the one that hedges ("will not model well", "predicted", "likely").
- **Desmos leverage (built into our product):** paste/plot the answer-choice line equations
  over approximate data points to pick the fit visually; drop a horizontal slider line y = h
  for crossing counts; for fit-through-known-points items, define the line from two points and
  read the queried prediction off the graph instead of hand-solving.

## Misconceptions targeted (and why students hold them)

- **data-points-for-slope** — Computing slope from two scatter dots instead of two fit-line
  points. Forms because "pick two points" was learned on clean lines; dots are the only
  concrete objects students see. Produces near-miss slopes matching a distractor.
- **eyeballed-intercept-on-truncated-axis** — Reading "where the line meets the left edge" as
  b. Forms because textbook axes always started at 0; the test truncates axes specifically to
  trigger this. Produces the intercept-of-the-visible-edge distractor.
- **horizontal-gap-confusion** — Measuring actual-vs-predicted along x (or along the line)
  rather than vertically. Forms from a fuzzy notion of "distance to the line" (students recall
  perpendicular distance from geometry).
- **gridline-equals-one** — Counting gridlines as units without reading the scale. Forms from
  habit; the test uses 2.5- or 4-unit spacing to split the students who check from those who
  count.
- **model-realism** — Believing the fit line states facts: intercept = a real price, definite
  x-intercept = real event, slope = the *actual* year-over-year change. Forms because school
  problems rarely distinguish data from model; distractors say "actual" where "predicted" is
  correct, or make definitive claims.
- **strength-equals-steepness** — Reading a steep loose cloud as "strong correlation." Forms
  by visual salience of slope; strength is tightness.
- **first-crossing-omission** — Excluding the initial descent when counting occurrences at a
  height, misreading "after it was dropped" as "after the first bounce."
- **net-for-total** — Answering a total-distance question with final displacement (or the
  graph's maximum) on distance-from-home graphs; forms because the graph looks like the trip.
- **sampling-interval-slope** — Reading slope as change per data-collection interval (per
  4-year gap) instead of per unit of x. Forms because the dots are spaced by the sampling
  interval and students anchor on dot-to-dot movement.

## SAT patterns claimed (unverified-claim; verify against official material + our bank)

- Fit-line item families: (a) pick the equation; (b) predict y at an x (plug into given fit
  equation or read the line); (c) actual-vs-predicted gap at a given x or "for how many points
  does the model over/underestimate"; (d) interpret slope/intercept in context with
  predicted-vs-actual wording discrimination.
- Correlation-shape identification (strong/weak × positive/negative) as a quick low-band item.
- Narrative line-graph items: fastest-change interval, greatest consecutive change,
  story-to-graph matching, reading f(k), crossing counts at a height.
- Occasional quadratic or exponential fit curve with the same read-the-model logic (ERA vs
  pitch speed parabola; scatter matched to y = ab^x families — bridges to ch. 14).
- Two-variable region/condition displays (labeled zones) that only require locating a
  coordinate pair in the right region.
- Claimed heavy real-test frequency for 15.1-style fit items (long cited lists); treat the
  frequency claim as plausible but unverified.

## Prerequisite edges implied

- slope-intercept fluency (compute slope from two points, plug point for intercept) — hard
  prerequisite for `fit-line-equation-from-graph`.
- function-notation evaluation and graph reading (f(k) as height).
- rate-of-change interpretation from the linear-models material (slope units).
- exponential/quadratic model recognition (previous chapter + parabola work) for non-linear
  fit variants — lateral edge to `additive-vs-multiplicative-change`.
- percent arithmetic for items mixing percent change with graph reads.

## Difficulty escalation observed

Easy: correlation sign/strength; read a value; fraction of one read over another; fastest
interval. Medium: fit-line equation with truncated axis; actual-minus-predicted at a point;
slope interpretation with predicted/actual wording; story-to-graph matching with a flat
segment and a sudden event. Hard: piecewise fit domains (solid vs dashed segments over
different T-ranges), model-limit reasoning (what a point on the line at the data's edge does
and does not imply), counting-based items over nonlinear models (crossings of y = h with a
parabola), per-pound piecewise rate comparisons, and physical-process graphs (rotating wheel
mark height) requiring pure shape reasoning. The hard end composes with quadratic-graph and
exponential-model nodes plus careful-domain reading.

## What this source does well / poorly

Well: hazard-first instruction (truncated axes, gridline spacing, precision calibration);
clean separation of data vs model with the modesty principle stated as an invariant; expert
solution order (eliminate by sign, calibrate precision from answer spread); good coverage of
the narrative-graph item space including sudden-event and out-and-back traps.
Poorly: no vocabulary bridge for residual/outlier/causation-vs-correlation (official items
occasionally use "association" language it never systematizes); slope-from-two-points is
assumed rather than refreshed; no calculator/Desmos workflow at all despite the topic being
the single best fit for it; nothing on choosing between linear/quadratic/exponential fits from
scatter shape beyond one problem; fit-line *construction* is (correctly) de-emphasized but the
one method given ("draw a reasonable line") could mislead without the balanced-points criterion
it mentions only once.
