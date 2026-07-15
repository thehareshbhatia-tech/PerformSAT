/**
 * Learn lesson body — Scatterplots & Data Models (Two-Variable Data).
 *
 * VOICE (adopted 2026-07-15, exemplar: mLinearEquations.js): professional
 * textbook narrative — teaches directly in flowing prose (concept, why it
 * works, how to apply, common errors) in the measured register of a
 * well-edited textbook. Concrete contexts framed plainly as examples;
 * extended metaphors, cute headings, and pep-talk are out. Headings name
 * the concept. Gated by bodies.test.js.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const twoVariableDataBlocks = [
  {
    type: 'text',
    content: "A scatterplot presents two distinct objects, and the entire skill lies in keeping them straight: **the dots are data — what actually happened; the line is a model — a summary constructed afterward.** Determining which object a question concerns, before anything else, resolves most questions in this family.",
  },

  {
    type: 'text',
    content: "Read the frame before any dot: both axis labels, *units included*. One dot represents one observation — on a plot of study hours vs. score, the dot at $(5, 62)$ is one student who studied 5 hours and scored 62. If an axis reads \"population (thousands),\" a gridline at 40 means 40{,}000. The printed number does not give the quantity until the unit is applied, and overlooked axis units are a routine source of missed questions.",
  },

  { type: 'heading', content: 'The line of best fit summarizes the data' },
  {
    type: 'text',
    content: "A **line of best fit** balances the cloud of points: dots above it offset dots below it. It does *not* connect the points — a well-fitted line can pass through none of them. Its purpose is to compress the trend into one clean equation, which is why a dot lying off the line does not make the line \"wrong.\" It is also a genuine line — slope, intercept, equation, everything from algebra — so questions about the line are answered from that equation, not from the dots.",
  },
  {
    type: 'keyInsight',
    content: "Identify the object before reading the figure. *Predicted / expected / the model* → the line. *Actual / observed / the data* → a dot. *Error / difference / over- or underestimate* → the vertical gap between them.",
  },

  { type: 'heading', content: 'Predicted vs. actual: the vertical gap' },
  {
    type: 'text',
    content: "The **predicted** value at some x is the *line's* height there. The **actual** value is the *dot's* height. The error is the gap between them, measured **vertically** — never horizontally. The direction of the language is the standard source of error here: a dot *above* the line means the actual value exceeded the prediction, so the model **underestimates** there; below the line, it **overestimates**. \"Over\" and \"under\" describe the *model's prediction*, not the dot's position — fix that referent before answering.",
  },
  {
    type: 'formula',
    label: 'Prediction error',
    content: '$\\text{error} = \\text{actual} - \\text{predicted}$',
    note: 'Dot above the line → positive error → the model predicted low (underestimate). Below → predicted high (overestimate).',
  },

  { type: 'heading', content: 'Slope of the fit line: use points on the line' },
  {
    type: 'text',
    content: "The fit line is a line, so its slope is $\\dfrac{y_2 - y_1}{x_2 - x_1}$ — but both points must be taken **from the line itself**, at gridline crossings, spaced as far apart as possible. Never use two data dots: wrong answer choices are routinely computed from exactly such a dot pair. Then report the slope per **one x-unit** — per year, even when the plotted points sit 4 years apart — and phrase interpretations as *predictions*: \"predicted,\" \"on average,\" never as facts about individual data points.",
  },

  { type: 'heading', content: 'Linear vs. exponential models' },
  {
    type: 'text',
    content: "When a question asks which *kind* of model fits, one distinction sorts every change-over-time situation: whether each step changes the quantity by the same *amount* or by the same *multiple*. A $\\$5$ raise every year is **linear** — a constant **difference** between consecutive values, producing a straight line. A $5\\%$ raise every year is **exponential** — a constant **ratio**, producing a curve that compounds on a moving base. The two look similar for a step or two, then diverge sharply, because the exponential grows from an ever-larger base while the linear adds the same amount each step.",
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
    content: "Percent wording requires care. \"4% of the *current* balance\" describes a moving base — exponential. \"4% of the *initial* deposit\" describes the same dollar amount every year — linear, despite the percent phrasing. From a table: subtract consecutive values (constant difference → linear), then divide them (constant ratio → exponential).",
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
      { label: 'Evaluate the wording', content: "(A) claims **actual** prices, for *every* car. A fit line does not support that claim — it supports only predicted, on-average language." },
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
      { label: 'Determine the direction', content: "Error $= \\text{actual} - \\text{predicted} = 80 - 72 = 8$, positive — the model predicted low, so it **underestimates** by 8 units. A dot above the line means the prediction was too *small*, not too large; that reversal is the point to verify." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'A machine\'s resale value at one-year steps is 8000, 6000, 4500, 3375. Which models the value $v$ after $t$ years?\n\n(A) $v = 8000 - 2000t$\n(B) $v = 8000(0.75)^t$',
    steps: [
      { label: 'Test the differences', content: 'Consecutive differences: $-2000, -1500, -1125$. Not constant, so the model is not linear; (A) matches only the first drop.' },
      { label: 'Test the ratios', content: '$6000/8000 = 0.75$, $4500/6000 = 0.75$, $3375/4500 = 0.75$. A constant ratio indicates an exponential model with factor $0.75$ — the machine retains 75% of its value each year.' },
      { label: 'Answer', content: '**(B)** $v = 8000(0.75)^t$.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'On a scatterplot with a fit line, 4 dots sit above the line, 5 below, and 1 exactly on it. For how many points does the model overestimate?',
    answer: "**5** — the dots below the line, where the model's prediction lies above the actual value. Overestimate describes the *prediction*, not the dot. The dot on the line is predicted exactly and counts for neither side.",
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
    type: 'text',
    content: "**In summary:** identify the object first — dot, line, or the gap between them — and read only that object. The dots record what happened, the line records what the model predicts, and the vertical gap measures the size of the prediction's error.",
  },
];
