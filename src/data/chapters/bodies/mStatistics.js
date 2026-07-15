/**
 * Learn lesson body — Statistics & Data (Problem-Solving and Data Analysis).
 *
 * VOICE (adopted 2026-07-15, exemplar: mLinearEquations.js): professional
 * textbook narrative — teaches directly in flowing prose (concept, why it
 * works, how to apply, common errors) in the measured register of a
 * well-edited textbook. Concrete contexts framed plainly as examples;
 * extended metaphors, cute headings, and pep-talk are out. Headings name
 * the concept. Gated by bodies.test.js.
 *
 * This skill spans several sub-ideas (center, spread, probability, box plots,
 * margin of error) — each section stays short so the whole thing reads fast.
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
    content: "Data questions cover several distinct ideas — measures of center, spread, probability, box plots, and margin of error — but each individual question reduces to a single identifiable rule. Classifying which rule a question calls for, before any computation, is the core skill.",
  },

  { type: 'heading', content: 'Mean vs. median' },
  {
    type: 'text',
    content: "Consider five friends dividing a dinner bill evenly. The **mean** is each person's equal share — $\\text{total} \\div \\text{count}$ — so every value in the set contributes to it. The **median** is the middle value once the data are sorted: order the values first, then locate the middle (for an even count, average the two middle values). The two measures answer different questions: the mean distributes the total evenly, while the median reports only the center position. A question that specifies one of them does so deliberately; identify which measure is called for before computing anything.",
  },
  {
    type: 'keyInsight',
    content: "The mean formula rearranges to $\\text{total} = \\text{mean} \\times \\text{count}$. Whenever a value is added, removed, or corrected, work with the **total** rather than the mean — that one rearrangement resolves nearly every difficult average question.",
  },

  { type: 'heading', content: 'Outliers pull the mean, not the median' },
  {
    type: 'text',
    content: "Consider adding one billionaire to a room of ten people: the *average* income rises dramatically, while the middle income barely changes. One extreme value drags the **mean** toward itself and leaves the **median** nearly unchanged, because the median depends on position, never on distance. In a skewed data set, the mean drifts toward the long tail while the median remains with the bulk of the data.",
  },

  { type: 'heading', content: 'Spread: range and standard deviation' },
  {
    type: 'text',
    content: "Two measures describe how spread out data are. **Range** $= \\text{max} - \\text{min}$ depends only on the two endpoints, so a single stray value can inflate it. **Standard deviation (SD)** measures how tightly *all* the values cluster around the mean: tight clustering yields a small SD, wide scatter a large one. Spread is a separate question from center — two sets can share a mean of $50$ and be distributed very differently, and questions are routinely built on exactly that distinction.",
  },
  {
    type: 'tip',
    content: "Standard deviation is compared on this test, never computed. Determine which set clusters more tightly around its own mean: $\\{20, 20, 20\\}$ has SD $0$, while $\\{5, 20, 35\\}$ has a large one. Larger values do not imply a larger SD; wider spacing does.",
  },

  { type: 'heading', content: 'Probability as a share of the pool' },
  {
    type: 'text',
    content: "Every probability is $\\dfrac{\\text{favorable outcomes}}{\\text{total pool}}$ — the outcomes of interest over the pool being drawn from, a fraction between $0$ and $1$. Errors concentrate in the **denominator**. Question wording often restricts the pool, and the standard mistake is dividing by the grand total anyway. Identify the pool first, before counting a single favorable outcome.",
  },

  { type: 'heading', content: 'Two-way tables: identifying the pool' },
  {
    type: 'text',
    content: "A \"given that…\" or \"if a ___ is selected\" clause controls the entire question. It restricts the pool to one row or one column, so the denominator is *that* group's total, never the corner total. Proceed in order: locate the clause, find its group's total, then take the cell where the row and column intersect as the numerator. Working in that order rules out the standard wrong answer — the favorable count over the grand total.",
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

  { type: 'heading', content: 'Box plots: the five-number summary' },
  {
    type: 'text',
    content: "A box plot displays five numbers: minimum, first quartile ($Q_1$), median, third quartile ($Q_3$), and maximum. The **interquartile range** is $\\text{IQR} = Q_3 - Q_1$. Each of the four segments holds about $25\\%$ of the data — every segment, regardless of how wide it is drawn. A long segment means that quarter of the data is *spread out*, not that it contains more values; that misreading is precisely what these questions are constructed around.",
  },
  {
    type: 'callout',
    title: 'What a box plot cannot show',
    content: "A box plot conveys the five-number summary, the range, and the skew — nothing more. It never shows the mean, the count, or any individual value. When a question compares means from two box plots, \"cannot be determined\" is a legitimate option and is sometimes the correct one.",
  },

  { type: 'heading', content: 'Margin of error' },
  {
    type: 'text',
    content: "A survey produces not the true value but an estimate with an interval of uncertainty around it: $\\text{estimate} \\pm \\text{margin}$. That interval is a claim about the *population value* (a mean or a proportion), not about any one individual in it. Two factors narrow it: a larger sample, or less underlying variability. These questions test exactly two things — what the interval describes, and what makes it narrower.",
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The mean of 5 numbers is $12$. Four of the numbers are $8$, $10$, $14$, and $15$. What is the fifth number?',
    steps: [
      { label: 'Recover the total', content: "The mean determines the total: total $= \\text{mean} \\times \\text{count} = 12 \\times 5 = 60$." },
      { label: 'Subtract the known four', content: 'The four known values sum to $8 + 10 + 14 + 15 = 47$.' },
      { label: 'Solve', content: "Fifth number $= 60 - 47 = \\mathbf{13}$. After the first step, the mean itself is no longer needed; the entire computation runs on the total." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Using the members table above, if a band member is selected at random, what is the probability that the member is a junior?',
    steps: [
      { label: 'Identify the pool', content: "The clause \"a band member is selected\" restricts the pool to band members — the \"In band\" column total, $19$." },
      { label: 'Count the favorable', content: 'Juniors within that pool occupy the junior/in-band cell: $9$.' },
      { label: 'Divide', content: "Probability $= \\dfrac{9}{19}$. The result $\\dfrac{9}{40}$ comes from dividing by the grand total — the standard error on restricted-pool questions." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Set $P = \\{40, 50, 60\\}$ and set $Q = \\{49, 50, 51\\}$. Both have mean $50$. Which set has the larger standard deviation?',
    steps: [
      { label: 'Compare spread, not center', content: "Both means equal $50$, so the center provides no distinction. The comparison rests entirely on which set clusters more tightly around that mean." },
      { label: 'Compare the distances', content: "$P$'s values lie $10$ away from $50$; $Q$'s lie only $1$ away. $P$ is widely spread, $Q$ tightly clustered." },
      { label: 'Answer', content: "**Set $P$** has the larger SD. No calculation is required — comparing the clustering settles it, which is the form every SD question on this test takes." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'A data set is $\\{3, 4, 5, 6, 7\\}$. A sixth value, $100$, is then added. Describe what happens to the mean and to the median.',
    steps: [
      { label: 'Before', content: 'Mean $= 25 \\div 5 = 5$; median $= 5$ (the middle value).' },
      { label: 'After — mean', content: 'New total $= 25 + 100 = 125$ over $6$ values, so mean $= 125 \\div 6 \\approx 20.8$. The outlier pulls it up sharply.' },
      { label: 'After — median', content: 'Sorted list $\\{3,4,5,6,7,100\\}$ has middle values $5$ and $6$, so median $= 5.5$ — a minimal shift.' },
      { label: 'Conclusion', content: 'One extreme value moves the **mean** substantially and the **median** hardly at all. When a question asks for the measure that resists outliers, the answer is the median.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'A box plot has minimum $12$, $Q_1 = 20$, median $26$, $Q_3 = 34$, and maximum $50$. What is the IQR, and about what fraction of the data lies between $20$ and $34$?',
    answer: "**IQR $= 14$, and about $50\\%$ of the data.** $\\text{IQR} = Q_3 - Q_1 = 34 - 20 = 14$. The interval from $Q_1$ to $Q_3$ contains the middle two quarters, so about $50\\%$ of the data lies there — a fact read from the quartile structure, not from how wide the box is drawn.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A poll estimates that $42\\%$ of a town supports a measure, with a margin of error of $3\\%$. A choice says "exactly $42\\%$ of the town supports it." Why is that wrong?',
    answer: "**The poll supports an interval, not a single certain value.** The plausible range for the true town-wide support is $42\\% \\pm 3\\%$, about $39\\%$ to $45\\%$. Claiming \"exactly $42\\%$\" discards the interval and treats a sample estimate as the certain population value; the word \"exactly\" is what makes the choice wrong.",
  },
  {
    type: 'checkpointQuestion',
    question: 'The mean of $6$ test scores is $80$. The lowest score, a $50$, is dropped. What is the mean of the remaining $5$ scores?',
    answer: "**$86$.** A value changed, so work with the total: $80 \\times 6 = 480$. Removing the $50$ leaves $480 - 50 = 430$ across $5$ scores, so $430 \\div 5 = 86$. Dropping the lowest score raises the mean; confirming that the direction of change is sensible provides a quick check on the arithmetic.",
  },

  {
    type: 'text',
    content: "**In summary:** classify what the question concerns — total, position, spread, pool, or interval — then apply that one rule. The mean works through the total; the median works through position; outliers move only the mean; SD is compared, never computed; probability is favorable over pool; and a box plot never shows the mean.",
  },
];
