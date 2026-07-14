/**
 * Learn lesson body — Scatterplots & Data Models (Two-Variable Data).
 *
 * TUTOR VOICE (adopted 2026-07-14, user-approved exemplar mLinearEquations.js):
 * coaching direct-address — talks TO the student, everyday anchor first,
 * anticipates the over/underestimate flip before the student makes it,
 * memorable decision rules ("name the object before you read the figure").
 * Lean structure unchanged; gated by bodies.test.js (lean contract).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const twoVariableDataBlocks = [
  {
    type: 'text',
    content: "A scatterplot is a cloud of dots with one line drawn through it, and the entire skill is keeping two objects straight: **the dots are DATA — what actually happened. The line is a MODEL — a summary somebody drew afterward.** Ask \"which one is this question about?\" before anything else, and most of this family answers itself.",
  },

  {
    type: 'text',
    content: "Read the frame before any dot: both axis labels, *units included*. One dot = one observation — on a plot of study hours vs. score, the dot at $(5, 62)$ is one student who studied 5 hours and scored 62. And if an axis says \"population (thousands),\" a gridline at 40 means 40{,}000. The printed number isn't the quantity until you apply the unit — that's a free point students hand back constantly.",
  },

  { type: 'heading', content: 'The line summarizes, it does not connect' },
  {
    type: 'text',
    content: "A **line of best fit** balances the cloud — dots above it offset dots below it. It does *not* connect anything: a perfectly good fit line can miss every single dot. Its whole job is to compress the trend into one clean equation, which is why a dot sitting off the line never makes the line \"wrong.\" And it's a real line — slope, intercept, equation, everything from algebra — so line questions run on that equation, not on the dots.",
  },
  {
    type: 'keyInsight',
    content: "Name the object before you read the figure. *Predicted / expected / the model* → the LINE. *Actual / observed / the data* → a DOT. *Error / difference / over- or underestimate* → the vertical gap between them.",
  },

  { type: 'heading', content: 'Predicted vs. actual = the vertical gap' },
  {
    type: 'text',
    content: "The **predicted** value at some x is the *line's* height there. The **actual** value is the *dot's* height. The error is the gap between them, measured **straight up or down** — never sideways. Now the flip that eats more points than anything else here: a dot *above* the line means the actual value beat the prediction, so the model **underestimates** there. Below the line, it **overestimates**. \"Over\" and \"under\" describe the *model's guess*, not where the dot sits — say that to yourself before you answer.",
  },
  {
    type: 'formula',
    label: 'Prediction error',
    content: '$\\text{error} = \\text{actual} - \\text{predicted}$',
    note: 'Dot above the line → positive → the model guessed low (underestimate). Below → guessed high (overestimate).',
  },

  { type: 'heading', content: 'Slope of the fit line: use points ON the line' },
  {
    type: 'text',
    content: "The fit line is a line, so slope is $\\dfrac{y_2 - y_1}{x_2 - x_1}$ — but both points must come **off the line itself**, at gridline crossings, spread as far apart as you can get them. Never two data dots: the nearest tempting dot-pair is planted there to manufacture a wrong choice. Then report the slope per **one x-unit** — per year, even when the dots sit 4 years apart — and phrase interpretations as *predictions*: \"predicted,\" \"on average,\" never as facts about individual dots.",
  },

  { type: 'heading', content: 'Linear or exponential: amount or multiple?' },
  {
    type: 'text',
    content: "When a question asks which *kind* of model fits, every change-over-time story is one of two species, and one question sorts them: each step, same *amount* or same *multiple*? A $\\$5$ raise every year is **linear** — constant **difference** between consecutive values, straight line. A $5\\%$ raise every year is **exponential** — constant **ratio**, a curve that compounds on a moving base. They feel similar for a step or two, then split hard, because the exponential keeps growing off a bigger base while the linear keeps adding the same block.",
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
    content: "Percent wording is the trap. \"4% of the *current* balance\" — moving base, exponential. \"4% of the *initial* deposit\" — the same dollar amount every year, linear wearing a percent costume. From a table: subtract consecutive values (constant → linear), then divide them (constant → exponential).",
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'A scatterplot of light (x, hours/day) vs. height (y, cm) has a line of best fit through $(2, 14)$ and $(12, 34)$. One seedling that got 8 hours of light grew to 32 cm. How much does its actual height exceed the height predicted by the line?',
    steps: [
      { label: 'Name the object', content: "\"Actual\" is the dot (8 h, 32 cm); \"predicted by the line\" is the line's height at $x = 8$. The question wants the vertical gap." },
      { label: 'Get the line at x = 8', content: 'Slope $= (34 - 14)/(12 - 2) = 2$. Through $(2, 14)$: $y = 2x + 10$. At $x = 8$: $2(8) + 10 = 26$ cm.' },
      { label: 'Subtract', content: 'Error $= 32 - 26 = 6$, positive — the dot sits above the line. **6 cm.**' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A line of best fit for car age (x, years) vs. price (y, thousands of dollars) passes through $(1, 27)$ and $(9, 11)$. Which is the best interpretation of its slope?\n\n(A) Each additional year reduces the actual price of every car by \\$2,000.\n(B) For each additional year, the predicted price decreases by about \\$2,000.',
    steps: [
      { label: 'Slope from line points', content: '$(11 - 27)/(9 - 1) = -16/8 = -2$ — two thousand dollars down per one year.' },
      { label: 'Sort by wording', content: "(A) claims **actual** prices, for *every* car. A fit line never earns that — it only supports predicted, on-average language." },
      { label: 'Answer', content: '**(B)** — per one year, predicted price, about \\$2,000 lower.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A linear model for weekly ad spots (x) vs. units sold (y) is $\\hat{y} = 3x + 12$. One week aired 20 spots and actually sold 80 units. Does the model overestimate or underestimate that week, and by how much?',
    steps: [
      { label: 'Predict with the line', content: "The model's guess comes from the equation: $\\hat{y} = 3(20) + 12 = 72$ units." },
      { label: 'Compare actual to predicted', content: 'Actual is $80$, above the predicted $72$ — the dot sits above the line.' },
      { label: 'Name the direction', content: "Error $= \\text{actual} - \\text{predicted} = 80 - 72 = 8$, positive — the model guessed low, so it **underestimates** by 8 units. Above the line means the guess was too *small*, not too big. That's the flip to get right." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'A machine\'s resale value at one-year steps is 8000, 6000, 4500, 3375. Which models the value $v$ after $t$ years?\n\n(A) $v = 8000 - 2000t$\n(B) $v = 8000(0.75)^t$',
    steps: [
      { label: 'Run differences', content: 'Drops: $-2000, -1500, -1125$. Not constant → not linear, so (A) dies — it only survives the first drop.' },
      { label: 'Run ratios', content: '$6000/8000 = 0.75$, $4500/6000 = 0.75$, $3375/4500 = 0.75$. Constant ratio → exponential, factor $0.75$ — the machine keeps 75% of its value each year.' },
      { label: 'Answer', content: '**(B)** $v = 8000(0.75)^t$.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'On a scatterplot with a fit line, 4 dots sit above the line, 5 below, and 1 exactly on it. For how many points does the model overestimate?',
    answer: "**5** — the dots below the line, where the model's guess sits above what actually happened. Overestimate describes the *guess*, not the dot. The dot on the line is predicted exactly and counts for neither side.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A fit line rises 12 units for every 4-unit run along the x-axis (x in years). A choice says the model predicts "about 12 people per year." What went wrong?',
    answer: "The slope got read per sampling interval instead of per **one x-unit**. Rise 12 over run 4 is $m = 3$ — about **3 people per year**. However far apart the dots sit, the run is still measured in years.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A quantity is measured at equal one-year steps as $50, 45, 40, 35$. Is a linear or an exponential model the better fit, and what is the tell?',
    answer: "**Linear.** Subtract neighbors: $-5, -5, -5$ — a constant *difference*, the same amount removed each step, which is the linear signature. Divide them and the ratios drift ($45/50 = 0.9$ but $40/45 \\approx 0.89$), so exponential is out.",
  },

  {
    type: 'text',
    content: "**The move, every time:** name the object first — dot, line, or the gap — then read only that thing. The dots say what happened. The line says what the model expected. The gap says how wrong it was.",
  },
];
