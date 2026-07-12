/**
 * Learn lesson body — Statistics & Data (Problem-Solving and Data Analysis).
 *
 * Lean "review / cheat-sheet" style (per the 2026-07-12 contract, see
 * bodies.test.js): one SAT skill family per lesson, plain language, one idea per
 * short section, then a few worked examples and check-yourself questions. This
 * skill spans several sub-ideas (center, spread, probability, box plots, margin
 * of error) — each section stays to 1-2 sentences so the whole thing reads fast.
 * Concept source: knowledge/graph/math (mean-as-total, median-as-position,
 * distribution-shape-and-outlier-effects, spread-range-and-sd,
 * probability-as-pool-share, two-way-table-probability, box-plot-reading,
 * margin-of-error-interpretation).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via the bodies
 * index — never import this from the chapter index.
 */

export const mStatisticsBlocks = [
  {
    type: 'text',
    content: 'Data questions look like a pile of separate topics — averages, spread, probability, box plots — but each one is a single move you can name in advance. This lesson walks the moves one at a time.',
  },

  { type: 'heading', content: 'Mean vs. median' },
  {
    type: 'text',
    content: 'The **mean** is $\\text{total} \\div \\text{count}$. The **median** is the middle value once the list is sorted by position — with an even count, it is the average of the two middle values.',
  },
  {
    type: 'keyInsight',
    content: 'Turn the mean formula around: $\\text{total} = \\text{mean} \\times \\text{count}$. Whenever a value is added, removed, or corrected, work with the **total**, not the mean directly — that one rearrangement solves almost every hard average question.',
  },

  { type: 'heading', content: 'Outliers pull the mean, not the median' },
  {
    type: 'text',
    content: 'One extreme value drags the mean toward itself but barely moves the median, because the median only cares about the middle *position*, not how far the ends stretch. So a badly skewed data set has a mean that sits out toward the long tail and a median that stays with the bulk of the values.',
  },

  { type: 'heading', content: 'Spread: range and standard deviation' },
  {
    type: 'text',
    content: 'Two ways to measure how spread out data is. **Range** $= \\text{max} - \\text{min}$, so only the two extremes matter. **Standard deviation (SD)** measures how tightly the values cluster around the mean — a bigger SD means more spread.',
  },
  {
    type: 'tip',
    content: 'On the SAT you never calculate SD — you only compare it. Ask which set is more spread out around its own mean: $\\{20, 20, 20\\}$ has SD $0$, while $\\{5, 20, 35\\}$ has a large SD. Bigger numbers do not mean bigger SD; spacing does.',
  },

  { type: 'heading', content: 'Probability is a share of the pool' },
  {
    type: 'text',
    content: 'A probability is $\\dfrac{\\text{favorable outcomes}}{\\text{total pool}}$ — a fraction between $0$ and $1$. The whole skill is counting both numbers correctly: what you want on top, and what you are drawing from on the bottom.',
  },

  { type: 'heading', content: 'Two-way tables: pick the right pool' },
  {
    type: 'text',
    content: 'A "given that…" or "if a ___ is selected" clause shrinks the pool to a single row or column — divide by *that* group\'s total, not the grand total. Read the clause first, find its total, then find the qualifying cell inside it.',
  },
  {
    type: 'table',
    title: 'Members by grade and activity',
    headers: ['', 'In band', 'Not in band', 'Total'],
    rows: [
      ['Juniors', '9', '6', '15'],
      ['Seniors', '10', '15', '25'],
      ['Total', '19', '21', '40'],
    ],
  },

  { type: 'heading', content: 'Box plots: five numbers' },
  {
    type: 'text',
    content: 'A box plot shows the **five-number summary**: minimum, first quartile ($Q_1$), median, third quartile ($Q_3$), and maximum. The **interquartile range** is $\\text{IQR} = Q_3 - Q_1$, and each of the four segments holds about $25\\%$ of the data — a wide segment means that quarter is spread out, not that it holds more values.',
  },
  {
    type: 'callout',
    title: 'What a box plot cannot show',
    content: 'It shows the five numbers, the range, and the skew — but never the mean, the count, or any individual value. On a "which set has the greater mean?" comparison, "cannot be determined" is sometimes the correct answer.',
  },

  { type: 'heading', content: 'Margin of error' },
  {
    type: 'text',
    content: 'A survey estimates a population value (a mean or a proportion); the margin of error turns it into a plausible band, $\\text{estimate} \\pm \\text{margin}$, for that population value. It describes the *population parameter*, not any one individual, and the band gets narrower with a larger sample size or less underlying spread.',
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The mean of 5 numbers is $12$. Four of the numbers are $8$, $10$, $14$, and $15$. What is the fifth number?',
    steps: [
      { label: 'Recover the total', content: 'Total $= \\text{mean} \\times \\text{count} = 12 \\times 5 = 60$.' },
      { label: 'Subtract the known four', content: 'The four given numbers sum to $8 + 10 + 14 + 15 = 47$.' },
      { label: 'Solve', content: 'Fifth number $= 60 - 47 = \\mathbf{13}$.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Using the members table above, if a band member is selected at random, what is the probability that the member is a junior?',
    steps: [
      { label: 'Name the pool', content: 'The selection is from band members only, so the pool is the "In band" column total: $19$.' },
      { label: 'Count the favorable', content: 'Juniors who are in band: the junior/in-band cell is $9$.' },
      { label: 'Divide', content: 'Probability $= \\dfrac{9}{19}$. Note the pool is $19$, not the grand total $40$.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'A data set is $\\{3, 4, 5, 6, 7\\}$. A sixth value, $100$, is then added. Describe what happens to the mean and to the median.',
    steps: [
      { label: 'Before', content: 'Mean $= 25 \\div 5 = 5$; median $= 5$ (the middle value).' },
      { label: 'After — mean', content: 'New total $= 25 + 100 = 125$ over $6$ values, so mean $= 125 \\div 6 \\approx 20.8$. The outlier dragged the mean far up.' },
      { label: 'After — median', content: 'Sorted list $\\{3,4,5,6,7,100\\}$ has middle values $5$ and $6$, so median $= 5.5$ — it barely moved.' },
      { label: 'Takeaway', content: 'One extreme value launches the **mean** but leaves the **median** almost untouched.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'A box plot has minimum $12$, $Q_1 = 20$, median $26$, $Q_3 = 34$, and maximum $50$. What is the IQR, and about what fraction of the data lies between $20$ and $34$?',
    answer: 'IQR $= Q_3 - Q_1 = 34 - 20 = 14$. The values between $Q_1$ and $Q_3$ are the middle two quarters, so about $50\\%$ of the data lies there — read from the quartile structure, not from how wide the box is drawn.',
  },
  {
    type: 'checkpointQuestion',
    question: 'A poll estimates that $42\\%$ of a town supports a measure, with a margin of error of $3\\%$. A choice says "exactly $42\\%$ of the town supports it." Why is that wrong?',
    answer: 'The estimate is a best guess with a stated band: the plausible range for the true town-wide support is $42\\% \\pm 3\\%$, or about $39\\%$ to $45\\%$. Stating "exactly $42\\%$" drops the band and treats a sample estimate as the certain population value.',
  },

  {
    type: 'text',
    content: 'The move, every time: name which measure the question is really about — total, position, spread, pool, or band — and run that one rule. Mean lives in totals, median in position, outliers pull only the mean, SD is compared not computed, probability is favorable over pool, and a box plot hides the mean.',
  },
];
