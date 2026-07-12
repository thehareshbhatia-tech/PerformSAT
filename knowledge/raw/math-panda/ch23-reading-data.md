# Raw notes — Source B (math-panda), Ch. 23: Reading Data
Section: math · Domain: Problem-Solving & Data Analysis · Pages studied: p0136–p0138 (chapter is ~1 page of instruction + a long exercise set)

## Concepts taught

- **chart-value-lookup** — pulling a single value off a bar chart, line graph, or scatterplot: find the right category/x-position, read the height/y-value against the axis scale.
- **axis-scale-decoding** — the axis label carries units and multipliers ("thousands," percentages, mm); the printed number is not the quantity until you apply the axis's unit.
- **coordinate-pair-semantics** — every plotted point is an (x, y) pair where each coordinate answers a different question; you must know which axis holds the quantity being asked about and which holds the identifier/condition.
- **rate-of-change-from-graph** — average rate of change between two plotted points = change in the y-quantity ÷ elapsed x-quantity; visually it IS the slope of the segment connecting them, so "greatest rate of change" = "steepest segment."
- **graph-plus-outside-info** — questions that fuse a read value with information given only in the prose (e.g., per-unit prices), so the chart alone can't answer; reading and computing are two separate stages.
- **increasing-decreasing-intervals** — identifying where a plotted model rises or falls strictly, as an interval of the independent variable.
- **model-prediction-readoff** — when a curve is a model, the question wants the curve's value at a given x (or the x where the curve doubles/halves), not any raw data value.
- **percent-comparison-across-points** — expressing one read value as a percentage or fraction of another read value; two lookups plus one ratio.

## Teaching philosophy observed

- The author deliberately treats this as the *lightest* chapter: one worked example, then straight to a large exercise set. The stated logic: once a student has seen a few graphs, the graphs explain themselves, and the arithmetic involved was all covered in earlier chapters (rates, percentages). Implication for our graph: chart-decoding is a low-prerequisite, high-volume practice skill — teach by exposure variety, not by theory.
- The single taught idea is that "average rate of change" questions on graphs are slope questions in disguise, and steepness comparison can replace computation when only ranking is needed.
- Difficulty is created entirely by the exercise set, not the instruction — escalation happens through layering (see below).

## Expert reasoning patterns (generalized)

- **Read the axes before the bars.** The expert's first act on any data display: identify what each axis measures and in what units/multipliers. Only then look at the shape. Students who start with the shape import wrong units.
- **Question → axis mapping.** Before touching the figure, restate the question as "I need the [x|y] of the point that satisfies [condition on the other axis]." E.g., "who slept least → find minimum y → then report that point's x." This one move defuses the most common scatterplot trap.
- **Rank by steepness, compute only if forced.** For "greatest/smallest average rate of change between successive points," visually rank segment steepness first; compute rise/run only for the finalists or when intervals have different widths (unequal x-spans mean a taller rise can still be a slower rate).
- **Two-stage discipline for hybrid items.** When prose adds data the chart lacks (prices, correction values, combining to/from times), experts explicitly separate the "extract values" stage from the "compute" stage, writing down extracted values before doing arithmetic.
- **Model vs. data separation.** If a line/curve of best fit or a smooth model is drawn, the expert asks which object the question interrogates — the drawn model or the plotted observations — before reading anything.

## Misconceptions targeted (and why students hold them)

- **wrong-coordinate-readoff** — reporting the y-value when the question asks for the x (or vice versa). Forms because school exercises usually ask "what is the value at x = …," training a one-directional habit (given x, read y). SAT items invert the direction. Exercise design here repeatedly asks for the identifier of an extreme point rather than the extreme value itself.
- **greatest-change-equals-greatest-rate** — picking the interval with the biggest visual jump, ignoring that intervals can span different widths of the x-axis. Forms because "biggest change" is perceptually salient and division feels optional. The book's own worked example is built to punish this.
- **axis-multiplier-blindness** — answering 250 when the axis says "thousands." Forms because students treat axis labels as decoration; answer choices are written to accept the unscaled number.
- **chart-answers-everything** — hunting the figure for a value that only exists in the prose (or vice versa). Forms from test-prep habit of ignoring stems on figure questions.
- **percentage-of-vs-difference** — when asked "A was what percent of B," computing the percent change from B to A instead. Held because both live under the vague mental label "percent comparison."

## SAT patterns claimed (mark: unverified-claim)

- Data-reading items skew easy on the exam; the hard versions are hard because of a second computational layer (rate, percent, revenue), not because of the display itself. (unverified-claim)
- Common shapes observed in the exercise set (each is a design template, not an item): single lookup with a negation twist ("did NOT wear X or Y"); grouped-vs-grouped aggregation ("neighborhoods 2+4 vs 1+3+5"); percent-of between two read values; steepest-segment ranking; doubling-time readoff on a growth curve; strictly-decreasing interval selection; per-category multiplier fusion (units sold × price → revenue ranking); percent-increase-vs-percent-decrease equality across consecutive periods (forces |Δ%| computed with different denominators); read-then-extend (gas mileage at a speed → gallons for a 5-hour trip). (unverified-claim)
- Scatterplot lookups on the digital SAT frequently ask for the x-identifier of a y-extreme — the inverted read. (unverified-claim)

## Prerequisite edges implied

- rate-of-change-from-graph ← linear-slope-concept, unit-rate-reasoning (from rates chapter)
- percent-comparison-across-points ← percent-of vs percent-change distinction
- graph-plus-outside-info ← chart-value-lookup + basic arithmetic modeling
- model-prediction-readoff → feeds directly into line-of-best-fit work (Statistics II)

## Difficulty escalation observed

1. One lookup, one chart (easy).
2. Two lookups + one arithmetic op (sum/difference/negation).
3. Lookup + ratio (fraction/percent-of).
4. Steepness ranking or rate computation across unequal intervals.
5. Chart + prose fusion requiring a small model (revenue, elapsed-time recovery, multi-hour extension) — the item is really an algebra/rates item wearing a chart costume.

## What this source does well / poorly

- **Well:** honest triage — spends no theory on what needs no theory; the exercise set is a genuinely broad taxonomy of display types (bar, line, scatter, model curve, labeled-point plots) and of second-layer computations; the worked example targets the rate-vs-change misconception precisely.
- **Poorly:** no explicit checklist for axis discipline (the expert habits above are implied by the answers, never stated); no treatment of misleading scales (truncated axes) or of two-series displays; no timing advice for when to estimate vs compute. Our node should make the read-axes-first / map-question-to-axis routine explicit since the book leaves it tacit.
