/**
 * Learn chapter body — Scatterplots & Data Models (Two-Variable Data).
 *
 * Teach-from-zero textbook chapter following the locked template
 * (docs/LEARN_TEXTBOOK_OVERHAUL_PLAN.md): roadmap → Stage 1 foundations →
 * Stage 2 numbered techniques (technique → right → wrong → why) → Stage 3
 * on-the-test (decision flow, traps, worked examples, checkpoints, one-page
 * summary). Concept source: knowledge/graph/math (fit-line-vs-data-points,
 * data-display-decoding, linear-vs-exponential-classification,
 * interpret-linear-parameters, slope-as-rate-of-change,
 * exponential-model-anatomy, statistical-claim-legality).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via the
 * bodies index — never import this from the chapter index.
 */

export const twoVariableDataBlocks = [
  {
    type: 'text',
    content: 'A two-variable data question shows you a scatterplot — a cloud of dots with a line drawn through it — and asks about one of three things: a point, the line, or the equation of the line. The questions look like graph-reading busywork, but they all turn on a single distinction most students never hear stated: **the dots are DATA and the line is a MODEL.** The dots record what actually happened; the line is a summary someone drew afterward. Keep those two objects apart and nearly every question in this family answers itself.',
  },
  {
    type: 'steps',
    title: 'How this chapter is built',
    items: [
      '**Stage 1 · Foundations.** How to read a scatterplot from zero — axes, units, what one dot means — and what a line of best fit actually is.',
      '**Stage 2 · The techniques.** Six numbered techniques, each in the same shape: the move, a right example, a wrong example, and the why.',
      '**Stage 3 · On the test.** A decision flow that routes each question to its technique, the traps built into these items, worked examples, and a one-page summary.',
    ],
  },

  // ── Stage 1 · Foundations ──────────────────────────────────────────────
  { type: 'heading', content: 'Stage 1 · Reading a scatterplot from zero' },
  {
    type: 'text',
    content: 'A **scatterplot** is a graph that records two measurements about each member of a group. The horizontal axis (the **x-axis**) carries one measurement; the vertical axis (the **y-axis**) carries the other. **One dot = one observation**: a single member of the group, placed at its two measured values. On a plot of study hours versus test score, a dot at $(5, 62)$ is one student who studied 5 hours and scored 62 — nothing more, nothing less. Before reading any dot, read both axis labels, *including units*. An axis marked "population (thousands)" means a gridline at 40 stands for 40{,}000 — the printed number is not the quantity until the unit has been applied.',
  },
  {
    type: 'text',
    content: 'A **line of best fit** (also called a *trend line* or *regression line*) is a straight line drawn through the middle of the dot cloud so that it balances the points above it against the points below it. It is a **summary object** — a single line standing in for the overall trend. Two facts about it surprise almost everyone the first time. First, *it does not connect the dots*; a perfectly good fit line can pass through zero of them. Second, it has its own equation, slope, and intercept, exactly like any line from algebra — and questions about the line use that equation, not the dots.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'What the fit line is', content: 'A summary drawn through the cloud — the model\'s best single-line description of the trend. It balances dots above and below and owes no allegiance to any individual dot.', variant: 'right' },
      { label: 'What the fit line is not', content: 'A dot-to-dot tracing of the data. A line that zigzags to touch every point is not a line of best fit — and a fit line that misses every dot can still be exactly right.', variant: 'wrong' },
    ],
  },
  {
    type: 'text',
    content: 'Two descriptions of a cloud are asked constantly, and they are **independent of each other**. **Direction**: if the dots drift upward left-to-right, the association is *positive* (more x goes with more y); if they drift downward, it is *negative*. **Strength**: how tightly the dots hug the trend. A tight, narrow cloud is a *strong* association; a wide, loose spray is a *weak* one. Strength is about tightness, **not steepness** — a steep line through widely scattered dots is a steep, *weak* association, and a nearly flat line through dots that sit almost exactly on it is a shallow, *strong* one.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Strong association', content: 'Dots cluster close to the line — you could almost hide the line behind the dots. The slope can be steep or shallow; tightness alone decides strength.', variant: 'right' },
      { label: 'Not what strong means', content: '"The line rises fast, so the association is strong." Steepness is the slope\'s size. A steep line through a loose spray of dots is a weak association.', variant: 'wrong' },
    ],
  },
  {
    type: 'strategyCard',
    title: 'The two-sheets test',
    content: 'Picture the figure as two transparent sheets stacked together: sheet one holds the **dots** (what happened), sheet two holds the **line** (what the model expects). Every question in this family addresses exactly one sheet — or the vertical gap between them. Before reading anything off the figure, name the sheet: *predicted, expected, the model estimates* → line sheet. *Actual, observed, the data* → dot sheet. *Error, difference, over/underestimates* → the gap. Naming the object first prevents almost every mistake this chapter covers.',
  },
  {
    type: 'checkpointQuestion',
    number: 1,
    question: 'A scatterplot shows the age of 15 trees (x, years) against their trunk width (y, centimeters). One dot sits at $(30, 48)$. What exactly does that dot represent — and is it data or model?',
    answer: 'One tree — a single observation — that is 30 years old and has a 48-centimeter trunk. It is **data**: a recorded fact about one member of the group. **Why:** one dot = one observation with two measured values. The line, when a question turns to it, is the model — a different object entirely.',
  },

  // ── Stage 2 · The techniques ───────────────────────────────────────────
  { type: 'heading', content: 'Stage 2 · The techniques' },
  {
    type: 'text',
    content: 'Six techniques cover this family. Each follows the same shape: the **move**, a **right** example, a **wrong** example, and the **why**. Techniques 1 and 2 live on the gap between data and model; 3 and 4 live on the line itself; 5 decides which *kind* of model fits; 6 extends the reading discipline to every other data display the test draws.',
  },

  { type: 'heading', content: 'Technique 1 — Predicted vs. actual: the vertical gap' },
  {
    type: 'text',
    content: 'The **predicted** value at some x is the *line\'s* height there — ride the line to that x and read its y. The **actual** value is the *dot\'s* height — what really happened. The **prediction error** is the gap between them, and it is always measured **vertically**: straight up or down from the dot to the line, never sideways, never along the line, never by shortest distance. Direction language falls out of one subtraction: a dot *above* the line means the actual value beat the prediction, so the model **underestimates** there; a dot *below* the line means the model **overestimates**. The word "over" attaches to the *model\'s* guess, not to where the dot sits — that inversion is the single most farmed mistake in this family.',
  },
  {
    type: 'formula',
    label: 'Prediction error',
    content: '$\\text{error} = \\text{actual} - \\text{predicted}$',
    note: 'Positive error → dot above the line → the model came in low (underestimate). Negative → dot below → overestimate.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right', content: 'A dot sits at $(6, 90)$ and the line passes through $(6, 82)$. Error $= 90 - 82 = +8$: the actual value exceeded the prediction by 8, so the model **underestimates** this observation by 8.', variant: 'right' },
      { label: 'Wrong', content: '"The dot is above the line, so the model overestimates it." Backwards — *the data* sits over *the prediction*, which means the model\'s guess was too low. Above the line = underestimate, always.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Technique 2 — Counting over- and underestimates' },
  {
    type: 'text',
    content: 'A recurring stem: *"For how many of the data points does the model underestimate the value?"* This is Technique 1 run as a census. Underestimates are the dots **strictly above** the line; overestimates are the dots **strictly below**; dots the line passes through are predicted exactly and belong to neither count. Sweep the plot left to right, sorting each dot as above, below, or on — and count only what was asked. The paired computation stem — *"what is the difference between the actual value and the predicted value at $x = k$?"* — is the same move at one point: locate the dot at $x = k$, travel vertically to the line, subtract. When the line\'s height falls between gridlines, estimate by position; *"closest to"* phrasing is the test\'s permission slip to estimate rather than compute.',
  },
  {
    type: 'checkpointQuestion',
    number: 2,
    question: 'On a scatterplot with a line of best fit, 4 dots sit above the line, 5 sit below it, and 1 sits exactly on it. For how many data points does the model overestimate the value — and what is the error\'s sign at those points?',
    answer: '**5** — the dots below the line. At each of them the prediction sits above the actual value, so error $=$ actual $-$ predicted is **negative**. **Why:** overestimate means the *model\'s guess* was too high, which happens where the data falls short of the line. The dot on the line is predicted exactly and joins neither count.',
  },

  { type: 'heading', content: 'Technique 3 — Slope and intercept of the fit line' },
  {
    type: 'text',
    content: 'The fit line is a line, so its slope comes from the usual formula — with one non-negotiable restriction: both points come **from the line itself**, never from data dots. Pick two spots where the line crosses gridline intersections, as far apart as you can find. Dot-pair slopes are engineered near-misses: the wrong answers are computed from exactly the dot pairs your eye lands on first. The intercept carries its own trap: on many plots the visible axes are truncated, so the plot\'s left edge is *not* $x = 0$. If the y-intercept matters and the axis does not start at zero, **compute it** from a point on the line rather than reading the left edge.',
  },
  {
    type: 'formula',
    label: 'Slope of the fit line',
    content: '$m = \\dfrac{y_2 - y_1}{x_2 - x_1}$',
    note: 'Both points ON the line — gridline crossings, far apart. Never two data dots.',
  },
  {
    type: 'text',
    content: 'Interpreting the slope in context uses a fixed sentence frame: *"for each additional [one x-unit], the model predicts [y] to change by [m] [y-units]."* Two disciplines live inside that frame. First, **per ONE x-unit** — even when the data was sampled every 4 years, the slope speaks per year, because the run in the formula is measured in x-units, not in dot spacings. Second, the frame says *predicts*: fit-line parameters describe the model\'s expectations, so correct interpretations are hedged — *predicted, on average, approximately* — never stated as facts about individual observations. The intercept\'s frame is the value the model predicts when $x = 0$, where "zero" means whatever the axis definition says it means ($x$ = years *after 2015* makes $x = 0$ mean 2015).',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right', content: 'The line crosses gridline intersections at $(0, 12)$ and $(10, 32)$. Slope $= (32 - 12)/(10 - 0) = 2$: for each additional x-unit, the predicted y is about 2 units higher.', variant: 'right' },
      { label: 'Wrong', content: 'Two handy dots sit at $(1, 15)$ and $(9, 33)$, giving $(33 - 15)/(9 - 1) = 2.25$. That is the slope of a line through two *data points* — a number about the data, planted among the choices, and not the slope of the model.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Technique 4 — Choosing the equation from the picture' },
  {
    type: 'text',
    content: 'Some items reverse Technique 3: here is the plot with its fit line — *which equation could describe the line?* Do not compute first. Eliminate structurally, in this order. **Intercept sign first**: extend the line to where $x = 0$ (computing if the axis is truncated) — is the intercept positive or negative? That alone usually kills two choices. **Slope estimate second**: is the line rising or falling, and is the climb more or less than one y-unit per x-unit? Rough size class — sign, then bigger-or-smaller-than-1 — separates the survivors. Only if two choices still stand does actual arithmetic on two line points come out. Most equation-selection items die before any computation happens.',
  },
  {
    type: 'callout',
    title: 'Order of elimination',
    content: 'Intercept sign → slope sign → slope size class → (rarely) exact slope. Each step is a five-second read, and each usually removes at least one choice. Computing the exact slope first is doing the slowest step when the fastest ones were available.',
  },

  { type: 'heading', content: 'Technique 5 — Linear or exponential: same amount or same multiple?' },
  {
    type: 'text',
    content: 'When a question asks which *kind* of model fits — from a table, a verbal description, or the cloud\'s shape — every change-over-time story is one of two species. **Linear**: a fixed *amount* is added or removed per step; the graph is a straight line and consecutive values have a **constant difference**. **Exponential**: the value is multiplied by a fixed *factor* per step; the graph curves, and consecutive values have a **constant ratio**. Classification is one question, asked before any computation: *each period, does the same amount change, or the same multiple?* Verbal cues sort cleanly — "increases by 300 each year" is an amount (linear); "increases by 3% each year" and "doubles every decade" are multiples of the *current* value (exponential). One wording trap survives the sort: a change computed as a percent **of the original value** each period adds the same amount every time — that story is linear wearing percent vocabulary.',
  },
  {
    type: 'formulaGrid',
    items: [
      { label: 'Linear model', formula: '$y = a + d \\cdot t$', note: 'a = starting value; d = the fixed amount added each step (negative if removed)' },
      { label: 'Exponential model', formula: '$y = a \\cdot b^{\\,t}$', note: 'a = starting value; b = the factor multiplied each step (b > 1 grows, 0 < b < 1 shrinks)' },
    ],
  },
  {
    type: 'text',
    content: 'From a **table** with equal input steps, run both tests: subtract consecutive outputs (constant difference → linear), then divide consecutive outputs (constant ratio → exponential). A 5% yearly decrease means each year keeps $100\\% - 5\\% = 95\\%$ of the value, so the factor is $b = 0.95$ — the base is what *remains*, not what leaves. From a **graph**, straight means linear; a curve that accelerates upward is exponential growth, and a curve that drops fast then flattens toward a floor is exponential decay.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right', content: '"A savings account grows by 4% of its *current balance* each year." The change is a multiple of a moving base — exponential, with factor $b = 1.04$.', variant: 'right' },
      { label: 'Wrong', content: '"A plan pays out 4% of the *initial deposit* each year — percent means exponential." No: 4% of a fixed anchor is the same dollar amount every year. Constant amount → linear, no matter how percent-flavored the wording is.', variant: 'wrong' },
    ],
  },
  {
    type: 'checkpointQuestion',
    number: 3,
    question: 'A table shows a quantity at equal one-week steps: 640, 480, 360, 270. Linear or exponential — and what is the model?',
    answer: '**Exponential decay.** Differences are $-160, -120, -90$ — not constant, so not linear. Ratios are $480/640 = 0.75$, $360/480 = 0.75$, $270/360 = 0.75$ — constant. Model: $y = 640(0.75)^t$ with $t$ in weeks. **Why:** constant difference is the linear signature; constant ratio is the exponential one. Run both tests on every table — the eye cannot reliably tell a fast linear drop from decay.',
  },

  { type: 'heading', content: 'Technique 6 — Every other data display' },
  {
    type: 'text',
    content: 'The same reading discipline covers the test\'s other figures. A **bar chart** shows one bar per category; the bar\'s height, read against the y-axis, is that category\'s value. A **histogram** looks similar but bins a *numeric* axis: each bar counts how many observations fall in a range (say, ages 20–29), so individual values inside a bin are unknowable — only the counts are real. A **line graph over time** telling a story is read segment by segment: the **steepest** segment is the fastest change, a **horizontal** segment means no change (not "nothing exists" — the quantity is holding still), and a sudden jump or drop is an abrupt event. Match a story to a graph clause by clause and discard a choice at its *first* mismatching segment — never judge whole graphs by overall vibe. A **piecewise** display (segmented fit, tiered pricing) adds one step before any reading: select the segment whose **domain contains the queried x**, then read from that segment alone.',
  },
  {
    type: 'tip',
    content: 'Axes first, always. Read both labels — including multipliers like "(in thousands)" — before looking at any bar, dot, or segment. Then restate the question as a coordinate instruction: which axis holds the answer, and which holds the condition? "Which city had the fewest visitors" is a y-condition with an x-answer — the identifier, not the extreme value. The wrong-coordinate readoff is a planted choice on nearly every lookup item.',
  },

  // ── Stage 3 · On the test ──────────────────────────────────────────────
  { type: 'heading', content: 'Stage 3 · On the test' },
  {
    type: 'steps',
    title: 'The decision flow',
    items: [
      'Name the object first — line, dots, or the gap. *Predicted / expected / the model estimates* → line. *Actual / observed / the data* → dots. *Error / difference / over- or underestimates* → the vertical gap (Techniques 1–2).',
      'Predicted value at $x = k$ → ride the line and read its y there. Error at $x = k$ → dot to line, vertically, actual minus predicted (Technique 1). Over/under census → count dots strictly above or strictly below (Technique 2).',
      'Slope or intercept of the line → two gridline crossings ON the line; intercepts under a truncated axis get computed, not read (Technique 3). Interpretation answers speak per one x-unit, in the axes\' units, hedged as predictions.',
      'Which equation matches the line → intercept sign, slope sign, slope size class, in that order (Technique 4).',
      'Which kind of model → interrogate the change clause: same amount (linear) or same multiple (exponential)? From a table, run differences, then ratios (Technique 5).',
      'Any other display → axes and units first; story graphs segment by segment; piecewise figures by the segment whose domain holds the queried x (Technique 6).',
    ],
  },
  {
    type: 'keyInsight',
    content: '**The model speaks in predictions; the data speaks in facts.** A line of best fit licenses only hedged claims — *predicted, expected, on average, approximately*. An answer choice that quotes the line as fact ("the actual increase was 2 units per year," "a tree of age 30 has a width of 48 cm") is wrong on its wording alone, before any arithmetic. On interpretation items, sort the choices by this one word — *actual* versus *predicted* — first; the sort usually eliminates half the set.',
  },
  {
    type: 'trapCard',
    title: 'The data-dot slope',
    wrong: '**The data-dot slope.** Asked for the slope of the line of best fit, you pick two conveniently placed *dots* and compute from them. The dots are the only marked, concrete points in the figure — the line carries no labels — so your pencil goes to them by default.',
    correction: 'Slope of the line comes from points **on the line**: find two spots where the line crosses gridline intersections, as far apart as possible, and compute from those. The dot-pair slope is a planted distractor — these items are built so the nearest two dots give one of the wrong choices exactly. Written first step on every fit-slope item: "mark two gridline crossings ON the line."',
  },
  {
    type: 'trapCard',
    title: 'The upside-down error',
    wrong: '**The upside-down error.** A dot sits above the line and you call it an *overestimate* — "the point is over the line" — flipping every over/under count and the sign of every actual-minus-predicted difference.',
    correction: 'Rebuild the sentence from the subtraction: error $=$ actual $-$ predicted. Dot above the line → actual beat the prediction → positive error → the **model came in low** — an *under*estimate. The word "over" describes the model\'s guess, not the dot\'s position. One rehearsal of this contrast pins it: above = model under, below = model over.',
  },
  {
    type: 'trapCard',
    title: 'The steepness-strength swap',
    wrong: '**The steepness-strength swap.** Asked which plot shows the stronger association, you pick the one with the steeper line — steepness is the loudest visual feature, so it masquerades as strength.',
    correction: 'Strength is **tightness of the cloud around the line**, full stop. Steepness is the slope\'s size — a different, independent quantity. A steep line through a loose spray is a weak association; a shallow line through dots that nearly touch it is a strong one. When comparing plots, cover the lines mentally and ask only: which cloud is narrower?',
  },
  {
    type: 'trapCard',
    title: 'The percent reflex',
    wrong: '**The percent reflex.** The story says "percent each year," so you reach for an exponential model — including when the change is a percent of the *initial* value, which adds the same fixed amount every period.',
    correction: 'Ask the second question: percent **of what**? Of the *current* value (or "doubles," "halves") → a moving base → exponential. Of the *initial* or any fixed value → the same amount every step → linear in disguise. Unroll two periods when unsure: if the increments repeat exactly, the model is linear no matter what the vocabulary says.',
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'A scatterplot shows the daily hours of light 10 seedlings received (x-axis, from 2 to 12 hours) and each seedling\'s height after one month (y-axis, in centimeters). The line of best fit passes through the points $(2, 14)$ and $(12, 34)$. One seedling that received 8 hours of light per day grew to a height of 32 centimeters. The actual height of this seedling exceeds the height predicted by the line of best fit by how many centimeters?',
    steps: [
      { label: 'Name the object', content: 'The question compares an actual value (the dot: 8 hours, 32 cm) with a predicted value (the line\'s height at $x = 8$). That is the vertical gap — Technique 1.' },
      { label: 'Get the line\'s prediction at x = 8', content: 'Slope from the two line points: $(34 - 14)/(12 - 2) = 20/10 = 2$. Then $y = 2x + b$ through $(2, 14)$ gives $b = 10$, so the line is $y = 2x + 10$. Predicted height at $x = 8$: $2(8) + 10 = 26$ cm.' },
      { label: 'Subtract: actual minus predicted', content: 'Error $= 32 - 26 = 6$. Positive, as expected — the dot sits above the line, so the model underestimates this seedling.' },
      { label: 'Answer', content: '**6 centimeters.**' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A scatterplot shows the ages (x, in years) and prices (y, in thousands of dollars) of 20 used cars of the same model, with a line of best fit drawn. The line passes through the points $(1, 27)$ and $(9, 11)$. Which of the following is the best interpretation of the slope of the line of best fit?\n\n(A) Each additional year of age reduces the actual price of every car in the group by \\$2,000.\n(B) For each additional year of age, the predicted price of a car decreases by about \\$2,000.\n(C) The model predicts a price of about \\$2,000 for a car that is new.\n(D) For each additional \\$2,000 of price, the predicted age of a car decreases by 1 year.',
    steps: [
      { label: 'Compute the slope from line points', content: 'Both given points are on the line, so: $(11 - 27)/(9 - 1) = -16/8 = -2$ — in the axes\' units, 2 *thousand dollars* down per 1 year of age.' },
      { label: 'Classify the role', content: 'The slope multiplies the input, so its sentence frame is fixed: *for each additional one x-unit (year), the predicted y (price) changes by $-2$ y-units (thousand dollars)*.' },
      { label: 'Sort the choices by wording', content: '(A) says **actual** and claims it for *every* car — the fit line only supports predicted, on-average claims. (C) describes an intercept role, and this line\'s intercept is $27 + 2 = 29$ thousand at age 0, not 2. (D) reverses the direction — age per price instead of price per age.' },
      { label: 'Answer', content: '**(B)** — per one year, predicted price, about \\$2,000 lower: the slope\'s sentence frame with the right nouns.' },
    ],
  },
  {
    type: 'table',
    title: 'Dataset for the Hard example — resale value of a machine',
    headers: ['Years since purchase, t', 'Value, v (dollars)'],
    rows: [
      ['0', '8,000'],
      ['1', '6,000'],
      ['2', '4,500'],
      ['3', '3,375'],
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'The table above shows the resale value of a machine at one-year intervals after purchase. Which equation best models the value $v$, in dollars, $t$ years after purchase?\n\n(A) $v = 8000 - 2000t$\n(B) $v = 8000(0.75)^t$\n(C) $v = 8000(0.25)^t$\n(D) $v = 0.75(8000)^t$',
    steps: [
      { label: 'Run differences first', content: 'Consecutive changes: $-2000$, $-1500$, $-1125$. Not constant, so the model is not linear — (A) dies. (A) is the classic bait: it matches the *first* difference and nothing after it.' },
      { label: 'Run ratios second', content: '$6000/8000 = 0.75$, $4500/6000 = 0.75$, $3375/4500 = 0.75$. Constant ratio → exponential with factor $b = 0.75$: the machine keeps 75% of its value each year (a 25% yearly decrease).' },
      { label: 'Check the slots', content: 'The starting value multiplies in front; the per-year factor gets powered. (D) swaps them — at $t = 0$ it returns $0.75$, not $8000$. (C) powers $0.25$, the fraction *lost* each year, instead of the $0.75$ that remains. The $t = 0$ plug-in test exposes both instantly.' },
      { label: 'Answer', content: '**(B)** $v = 8000(0.75)^t$ — starts at 8,000, keeps three-quarters of its value each year.' },
    ],
  },
  {
    type: 'checkpointQuestion',
    number: 4,
    question: 'A scatterplot\'s dots record a town\'s population every 4 years, and the line of best fit rises 12 units for every 4-unit run along the x-axis (x in years). A choice says the model predicts growth of "about 12 people per year." What went wrong?',
    answer: 'The slope was read per *sampling interval* instead of per **one x-unit**. Rise 12 over run 4 gives $m = 12/4 = 3$: the model predicts about **3 people per year**. **Why:** the run in the slope formula is measured in x-units (years), no matter how far apart the dots happen to sit. The dots\' spacing is a fact about data collection, not about the model\'s rate.',
  },
  {
    type: 'checkpointQuestion',
    number: 5,
    question: 'An interpretation item offers: (a) "The predicted value increases by about 5 units for each additional unit of x," and (b) "Each observation\'s value increased by exactly 5 units for each additional unit of x." Both quote the correct slope. Which survives, and on what grounds?',
    answer: '**(a).** It survives on wording alone: fit-line parameters license only hedged, model-level claims — *predicted, about, on average*. (b) upgrades the model to fact ("each observation," "exactly") — the line cannot testify about individual data points, several of which visibly miss it. **Why:** the model speaks in predictions; the data speaks in facts. An answer quoting the line as fact is wrong before any arithmetic.',
  },
  { type: 'heading', content: 'One-page summary' },
  {
    type: 'table',
    title: 'The whole chapter in one place',
    headers: ['Technique', 'Situation', 'The move'],
    rows: [
      ['T1', 'Predicted vs. actual at one x', 'Predicted = the line\'s y; actual = the dot\'s y; error = actual − predicted, measured vertically. Dot above the line → model underestimates'],
      ['T2', 'Over/under counts and differences', 'Underestimates = dots strictly above the line; overestimates = strictly below; on-the-line dots join neither. "Closest to" licenses estimating between gridlines'],
      ['T3', 'Slope / intercept of the fit line', 'Two gridline crossings ON the line, never data dots; slope speaks per ONE x-unit in axis units; truncated axis → compute the intercept'],
      ['T4', 'Pick the line\'s equation', 'Eliminate structurally: intercept sign → slope sign → slope size class; compute only if two choices survive'],
      ['T5', 'Linear or exponential', 'Same amount per step (constant difference) → linear; same multiple per step (constant ratio) → exponential; percent-of-initial = linear in disguise'],
      ['T6', 'Bar / histogram / story graph / piecewise', 'Axes and units first; histogram bars are bin counts; steepest segment = fastest change, horizontal = no change; piecewise → the segment whose domain holds x'],
    ],
  },
  {
    type: 'text',
    content: 'That is the entire skill: name the object — dots, line, or the gap between them — before touching the figure, then run the matching technique. The dots say what happened; the line says what the model expects; and every trap in this family is an invitation to let one speak for the other.',
  },
];
