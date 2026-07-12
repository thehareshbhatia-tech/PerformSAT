/**
 * Learn lesson body — Scatterplots & Data Models (Two-Variable Data).
 *
 * NEW lean "review / cheat-sheet" style: one SAT skill, plain language, one idea
 * per short section, then a couple of worked examples and check-yourself
 * questions. Gated by bodies.test.js (lean contract). Voice/shape exemplar is
 * bodies/gSubjectVerbAgreement.js.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const twoVariableDataBlocks = [
  {
    type: 'text',
    content: 'A scatterplot is a cloud of dots with a line drawn through it. The whole skill turns on one distinction: **the dots are DATA (what actually happened) and the line is a MODEL (a summary someone drew afterward).** Keep those two apart and almost every question in this family answers itself.',
  },

  {
    type: 'text',
    content: 'Read the frame first. Before you read any dot, read both axis labels — *including units*. One dot = one observation: on a plot of study hours vs. score, a dot at $(5, 62)$ is one student who studied 5 hours and scored 62. If an axis says "population (thousands)," a gridline at 40 means 40{,}000 — the printed number is not the quantity until you apply the unit.',
  },

  { type: 'heading', content: 'The line summarizes, it does not connect' },
  {
    type: 'text',
    content: 'A **line of best fit** balances the dots above it against the dots below it. It does *not* connect the dots — a perfectly good fit line can pass through zero of them. It has its own slope, intercept, and equation, exactly like any line from algebra, and line questions use that equation, not the dots.',
  },
  {
    type: 'keyInsight',
    content: 'Name the object before you read the figure. *Predicted / expected / the model* → the LINE. *Actual / observed / the data* → a DOT. *Error / difference / over- or underestimate* → the vertical gap between them.',
  },

  { type: 'heading', content: 'Predicted vs. actual = the vertical gap' },
  {
    type: 'text',
    content: 'The **predicted** value at some x is the *line\'s* height there. The **actual** value is the *dot\'s* height. The error is the gap, measured **straight up or down** — never sideways. A dot *above* the line means the actual beat the prediction, so the model **underestimates** there; a dot *below* means it **overestimates**. The word "over" describes the model\'s guess, not where the dot sits — that flip is the most farmed mistake here.',
  },
  {
    type: 'formula',
    label: 'Prediction error',
    content: '$\\text{error} = \\text{actual} - \\text{predicted}$',
    note: 'Dot above the line → positive → model came in low (underestimate). Below → overestimate.',
  },

  { type: 'heading', content: 'Slope of the fit line: use points ON the line' },
  {
    type: 'text',
    content: 'The fit line is a line, so slope is $\\dfrac{y_2 - y_1}{x_2 - x_1}$ — but both points must come **from the line itself**, at gridline crossings, as far apart as you can find. Never two data dots: the nearest dot-pair is engineered to give a wrong choice. Read the slope per **one x-unit** (per year even when dots sit 4 years apart), and phrase interpretations as *predictions* — "predicted," "on average" — never as facts about individual dots.',
  },

  { type: 'heading', content: 'Linear or exponential: amount or multiple?' },
  {
    type: 'text',
    content: 'When a question asks which *kind* of model fits, every change-over-time story is one of two species. **Linear**: a fixed *amount* is added each step → constant **difference** between consecutive values → straight line. **Exponential**: multiplied by a fixed *factor* each step → constant **ratio** → a curve. Ask one question: each period, same amount or same multiple?',
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
    content: 'Percent wording is a trap. "4% of the *current* balance" is a moving base → exponential. "4% of the *initial* deposit" is the same dollar amount every year → linear in disguise. From a table, subtract consecutive values (constant → linear), then divide them (constant → exponential).',
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'A scatterplot of light (x, hours/day) vs. height (y, cm) has a line of best fit through $(2, 14)$ and $(12, 34)$. One seedling that got 8 hours of light grew to 32 cm. How much does its actual height exceed the height predicted by the line?',
    steps: [
      { label: 'Name the object', content: 'Actual (a dot: 8 h, 32 cm) vs. predicted (the line at $x = 8$). That is the vertical gap.' },
      { label: 'Get the line at x = 8', content: 'Slope $= (34 - 14)/(12 - 2) = 2$. Through $(2, 14)$: $y = 2x + 10$. At $x = 8$: $2(8) + 10 = 26$ cm.' },
      { label: 'Subtract', content: 'Error $= 32 - 26 = 6$. Positive — the dot sits above the line. **6 cm.**' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A line of best fit for car age (x, years) vs. price (y, thousands of dollars) passes through $(1, 27)$ and $(9, 11)$. Which is the best interpretation of its slope?\n\n(A) Each additional year reduces the actual price of every car by \\$2,000.\n(B) For each additional year, the predicted price decreases by about \\$2,000.',
    steps: [
      { label: 'Slope from line points', content: '$(11 - 27)/(9 - 1) = -16/8 = -2$ → 2 thousand dollars down per 1 year.' },
      { label: 'Sort by wording', content: '(A) says **actual** and claims it for *every* car — the fit line only supports predicted, on-average claims.' },
      { label: 'Answer', content: '**(B)** — per one year, predicted price, about \\$2,000 lower.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'A machine\'s resale value at one-year steps is 8000, 6000, 4500, 3375. Which models the value $v$ after $t$ years?\n\n(A) $v = 8000 - 2000t$\n(B) $v = 8000(0.75)^t$',
    steps: [
      { label: 'Run differences', content: 'Changes: $-2000, -1500, -1125$. Not constant → not linear, so (A) dies (it only matches the first drop).' },
      { label: 'Run ratios', content: '$6000/8000 = 0.75$, $4500/6000 = 0.75$, $3375/4500 = 0.75$. Constant ratio → exponential, factor $0.75$ (keeps 75% each year).' },
      { label: 'Answer', content: '**(B)** $v = 8000(0.75)^t$.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'On a scatterplot with a fit line, 4 dots sit above the line, 5 below, and 1 exactly on it. For how many points does the model overestimate?',
    answer: '**5** — the dots below the line, where the prediction sits above the actual value. Overestimate = the *model\'s guess* was too high. The dot on the line is predicted exactly and counts for neither.',
  },
  {
    type: 'checkpointQuestion',
    question: 'A fit line rises 12 units for every 4-unit run along the x-axis (x in years). A choice says the model predicts "about 12 people per year." What went wrong?',
    answer: 'The slope was read per sampling interval, not per **one x-unit**. Rise 12 over run 4 gives $m = 3$ → about **3 people per year**. The run is measured in years no matter how far apart the dots sit.',
  },

  {
    type: 'text',
    content: '**The move, every time:** name the object — dots, line, or the gap — before you touch the figure, then read the matching thing. The dots say what happened; the line says what the model expects.',
  },
];
