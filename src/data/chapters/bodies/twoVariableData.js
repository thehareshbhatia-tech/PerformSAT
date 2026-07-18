/**
 * Learn lesson body — Scatterplots & Data Models (Two-Variable Data).
 *
 * VOICE v4 (adopted 2026-07-18, exemplar: bodies/centralIdeas.js):
 * practiced-tutor register — developed 2-5 sentence paragraphs with
 * connective tissue; every rule earns its "because"; student-psychology
 * named concretely; math teaching is example-led; varied rhythm, no
 * aphorism-per-block. Bans carried from v3: no analogies, no pep talk,
 * no exclamation marks, no emojis, no test-personification. All v3
 * teaching claims preserved.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const twoVariableDataBlocks = [
  {
    type: 'text',
    content: "The last chapter summarized one variable at a time; a scatterplot sets two variables against each other, one point per observation. Every such plot holds two distinct objects, and the entire skill of this chapter is keeping them straight: the **dots are data** — what actually happened — while the **line is a model**, a summary constructed afterward. Decide which object a question concerns before anything else, because that one call resolves most questions in this family.",
  },
  {
    type: 'diagramRef',
    visualType: 'scatterplotModelDiagram',
    description: "A scatterplot with its fitted line: the dots record what actually happened, the line is the model summarizing them, and the vertical gap at the highlighted point is the difference between an actual value and the value the line predicts.",
  },
  {
    type: 'text',
    content: "And read the frame before any dot: both axis labels, *units included*. One dot represents one observation — on a plot of study hours vs. score, the dot at $(5, 62)$ is one student who studied 5 hours and scored 62. The units matter because the printed number isn't the quantity until the unit is applied: if an axis reads \"population (thousands),\" a gridline at 40 means 40{,}000, and overlooked axis units sink otherwise easy questions.",
  },

  { type: 'heading', content: 'What the line of best fit does' },
  {
    type: 'text',
    content: "A **line of best fit** balances the cloud of points — dots above it offset dots below it — and that balancing is all it promises. It does *not* connect the points; a well-fitted line can pass through none of them, because its job is to compress the trend into one clean equation rather than to visit every observation. That's also why a dot lying off the line doesn't make the line \"wrong\" — the line never claimed to pass through it.",
  },
  {
    type: 'text',
    content: "At the same time, it's a genuine line: slope, intercept, equation, everything from algebra carries over intact. So questions about the line get answered from that equation, not from the dots.",
  },
  {
    type: 'keyInsight',
    content: "Identify the object before reading the figure. *Predicted / expected / the model* → the line. *Actual / observed / the data* → a dot. *Error / difference / over- or underestimate* → the vertical gap between them.",
  },

  { type: 'heading', content: 'Predicted vs. actual: the vertical gap' },
  {
    type: 'text',
    content: "The **predicted** value at some x is the *line's* height there; the **actual** value is the *dot's* height; and the error is the gap between them, measured **vertically** — never horizontally, because both values answer to the same x. This signed difference, actual minus predicted, is called the **residual**.",
  },
  {
    type: 'text',
    content: "The direction language is where these questions bite. A dot *above* the line means the actual value beat the prediction, so the model **underestimates** there; below the line, it **overestimates**. Students reverse this constantly, and the cause is a misplaced referent — a high dot feels like \"over.\" But \"over\" and \"under\" describe the *model's prediction*, not the dot's position. Fix that referent before answering, and the reversal never gets started.",
  },
  {
    type: 'formula',
    label: 'Prediction error',
    content: '$\\text{error} = \\text{actual} - \\text{predicted}$',
    note: 'Dot above the line → positive error → the model predicted low (underestimate). Below → predicted high (overestimate).',
  },

  { type: 'heading', content: 'Slope of the fit line' },
  {
    type: 'text',
    content: "The fit line is a line, so its slope is $\\dfrac{y_2 - y_1}{x_2 - x_1}$ — nothing new there. The care is in where the two points come from, and in how the slope gets reported once you have it.",
  },
  {
    type: 'steps',
    title: 'Finding and interpreting the slope',
    items: [
      "**Take both points from the line itself.** Pick gridline crossings, spaced as far apart as possible. Never use two data dots — wrong answer choices are routinely computed from exactly such a pair.",
      "**Compute rise over run** from those two line points.",
      "**Report the slope per one x-unit.** Per year — even when the plotted points sit 4 years apart.",
      "**Phrase interpretations as predictions.** \"Predicted,\" \"on average\" — never as facts about individual data points.",
    ],
  },

  { type: 'heading', content: 'Linear vs. exponential models' },
  {
    type: 'text',
    content: "When a question asks which *kind* of model fits, one distinction sorts every change-over-time situation: does each step change the quantity by the same *amount*, or by the same *multiple*? A $\\$5$ raise every year is **linear** — a constant difference between consecutive values, producing a straight line. A $5\\%$ raise every year is **exponential** — a constant ratio, producing a curve, because each year's $5\\%$ is computed on a base the previous year already enlarged. The two look similar for a step or two, then diverge sharply: the exponential grows from an ever-larger base, while the linear adds the same amount each step.",
  },
  {
    type: 'formulaGrid',
    items: [
      { label: 'Linear model', formula: '$y = a + d \\cdot t$', note: 'a = start value; d = the fixed amount added each step' },
      { label: 'Exponential model', formula: '$y = a \\cdot b^{\\,t}$', note: 'a = start value; b = the factor multiplied each step ($b>1$ grows, $0<b<1$ shrinks)' },
    ],
  },
  {
    type: 'tip',
    content: "Percent wording deserves a second read. \"4% of the *current* balance\" is a moving base — exponential. \"4% of the *initial* deposit\" is the same dollar amount every year — linear, despite the percent phrasing. From a table: subtract consecutive values (constant difference → linear), then divide them (constant ratio → exponential).",
  },

  { type: 'heading', content: 'Reading data displays' },
  {
    type: 'text',
    content: "Charts of a quantity over time invite one persistent confusion: **level** versus **change**. The highest point on the graph is the largest *value*; the fastest growth is the *steepest climb* — and the two rarely coincide. So match the question's verb to the right feature: where sales *grew the most* concerns the jump from one reading to the next, while where sales *were greatest* concerns a single reading.",
  },
  {
    type: 'text',
    content: "Comparing growth across intervals of *different widths* takes a rate, not a raw rise, because a larger total rise spread over a much wider interval can still be the slower climb. The average rate of change over an interval is the slope between its endpoints, $\\frac{\\Delta y}{\\Delta x}$ — so divide every candidate's rise by its own run. Raw rises compare fairly only when the runs happen to be equal.",
  },
  {
    type: 'text',
    content: "Graphs that tell a story — typically *distance from home* against time — read by segments:",
  },
  {
    type: 'list',
    items: [
      'A rising segment is motion away from the start.',
      'A falling segment is motion back toward it.',
      'A flat segment is a stop.',
    ],
  },
  {
    type: 'text',
    content: "The graph's height at any moment is the *net* distance from the start, which is why a walker who returns home finishes at height $0$ no matter how far she traveled; the *total* distance adds the sizes of every rise and fall, and it never appears on the axis. One more habit for crowded charts: on a plot with several data series, the legend is part of the data. Identify which series the question names before reading any value — pulling a number from the neighboring line is the routine miss on multi-series items.",
  },

  { type: 'heading', content: 'How to approach these questions' },
  {
    type: 'steps',
    items: [
      "**Read the frame.** Both axis labels with their units, plus the legend on multi-series charts.",
      "**Name the object.** Dot, line, or the vertical gap between them — the question's wording (*actual*, *predicted*, *error*) tells you which.",
      "**Answer from that object only.** Line questions run on the line's equation; data questions run on the dots.",
      "**For over/under questions, compute the sign.** $\\text{error} = \\text{actual} - \\text{predicted}$: positive means the model predicted low.",
    ],
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'A scatterplot of light (x, hours/day) vs. height (y, cm) has a line of best fit through $(2, 14)$ and $(12, 34)$. One seedling that got 8 hours of light grew to 32 cm. How much does its actual height exceed the height predicted by the line?',
    steps: [
      { label: 'Identify the object', content: "\"Actual\" refers to the dot (8 h, 32 cm); \"predicted by the line\" refers to the line's height at $x = 8$. The question asks for the vertical gap." },
      { label: 'Evaluate the line at x = 8', content: 'Slope $= (34 - 14)/(12 - 2) = 2$. Through $(2, 14)$: $y = 2x + 10$. At $x = 8$: $2(8) + 10 = 26$ cm.' },
      { label: 'Subtract', content: 'Error $= 32 - 26 = 6$, positive — the dot sits above the line. **6 cm.**' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A line of best fit for car age (x, years) vs. price (y, thousands of dollars) passes through $(1, 27)$ and $(9, 11)$. Which is the best interpretation of its slope?\n\n(A) Each additional year reduces the actual price of every car by \\$2,000.\n(B) For each additional year, the predicted price decreases by about \\$2,000.',
    steps: [
      { label: 'Slope from line points', content: '$(11 - 27)/(9 - 1) = -16/8 = -2$ — a decrease of two thousand dollars per one year.' },
      { label: 'Evaluate the wording', content: "(A) claims **actual** prices, for *every* car. A fit line doesn't support that claim — it supports only predicted, on-average language." },
      { label: 'Answer', content: '**(B)** — per one year, predicted price, about \\$2,000 lower.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A linear model for weekly ad spots (x) vs. units sold (y) is $\\hat{y} = 3x + 12$. One week aired 20 spots and actually sold 80 units. Does the model overestimate or underestimate that week, and by how much?',
    steps: [
      { label: 'Predict with the line', content: "The model's prediction comes from the equation: $\\hat{y} = 3(20) + 12 = 72$ units." },
      { label: 'Compare actual to predicted', content: 'Actual is $80$, above the predicted $72$ — the dot sits above the line.' },
      { label: 'Determine the direction', content: "Error $= \\text{actual} - \\text{predicted} = 80 - 72 = 8$, positive — the model predicted low, so it **underestimates** by 8 units. A dot above the line means the prediction was too *small*, not too large; that reversal is the thing to double-check." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'A machine\'s resale value at one-year steps is 8000, 6000, 4500, 3375. Which models the value $v$ after $t$ years?\n\n(A) $v = 8000 - 2000t$\n(B) $v = 8000(0.75)^t$',
    steps: [
      { label: 'Test the differences', content: 'Consecutive differences: $-2000, -1500, -1125$. Not constant, so the model is not linear; (A) matches only the first drop.' },
      { label: 'Test the ratios', content: '$6000/8000 = 0.75$, $4500/6000 = 0.75$, $3375/4500 = 0.75$. A constant ratio means an exponential model with factor $0.75$ — the machine keeps 75% of its value each year.' },
      { label: 'Answer', content: '**(B)** $v = 8000(0.75)^t$.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: "A graph of a bookstore's annual revenue shows $\\$2{,}400$ in year 2, $\\$3{,}000$ in year 5, and $\\$3{,}500$ in year 7. Which interval had the greater average rate of change — year 2 to year 5, or year 5 to year 7?",
    steps: [
      { label: 'Divide each rise by its own run', content: 'Year 2 to 5: $\\dfrac{3000 - 2400}{5 - 2} = \\dfrac{600}{3} = 200$ dollars per year. Year 5 to 7: $\\dfrac{3500 - 3000}{7 - 5} = \\dfrac{500}{2} = 250$ dollars per year.' },
      { label: 'Compare rates, not rises', content: 'The first interval has the larger total rise ($600$ vs. $500$), but the second has the greater *rate*: $250 > 200$ dollars per year. **Year 5 to year 7.** Unequal runs leave raw rises incomparable; the division settles it.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'On a scatterplot with a fit line, 4 dots sit above the line, 5 below, and 1 exactly on it. For how many points does the model overestimate?',
    answer: "**5** — the dots below the line, where the model's prediction sits above the actual value. Overestimate describes the *prediction*, not the dot. The dot on the line is predicted exactly and counts for neither side.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A fit line rises 12 units for every 4-unit run along the x-axis (x in years). A choice says the model predicts "about 12 people per year." What went wrong?',
    answer: "**The slope is about 3 people per year, not 12.** The choice reads the slope per sampling interval instead of per **one x-unit**: rise 12 over run 4 gives $m = 3$. However far apart the plotted points sit, the run is still measured in years.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A quantity is measured at equal one-year steps as $50, 45, 40, 35$. Is a linear or an exponential model the better fit, and what is the tell?',
    answer: "**Linear.** Subtracting consecutive values gives $-5, -5, -5$ — a constant *difference*, the same amount removed each step, which is the linear signature. Dividing them shows drifting ratios ($45/50 = 0.9$ but $40/45 \\approx 0.89$), which rules out an exponential model.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A graph of distance from home shows a hiker walking out $3$ miles in the first hour, resting for half an hour (the graph is flat), then returning home over the next hour and a half. What are her total distance traveled and her final distance from home — and which of the two does the graph\'s ending height show?',
    answer: "**Total distance $= 6$ miles; final distance from home $= 0$ miles — and the ending height shows the $0$.** The rise covers $3$ miles out and the fall covers $3$ miles back; the flat segment adds nothing, since a flat stretch means she is standing still. Height on this graph is *distance from home* — the net figure — so the accumulated $6$-mile total never appears on the axis; it comes from adding the sizes of the rise and the fall.",
  },

  {
    type: 'text',
    content: "**The whole chapter in one call:** name the object first — dot, line, or the vertical gap between them — and read only that object. The dots record what happened, the line records what the model predicts, and the gap measures how far the prediction missed. Every rule here, from vertical error to per-one-unit slope to prediction language, is that identification carried through.",
  },
];
