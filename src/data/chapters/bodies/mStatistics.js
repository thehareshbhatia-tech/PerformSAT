/**
 * Learn lesson body — Statistics & Data (Problem-Solving and Data Analysis).
 *
 * VOICE v4 (adopted 2026-07-18, exemplar: bodies/centralIdeas.js):
 * practiced-tutor register — developed 2-5 sentence paragraphs with
 * connective tissue; every rule earns its "because"; student-psychology
 * named concretely; math teaching is example-led; varied rhythm, no
 * aphorism-per-block. Bans carried from v3: no analogies, no pep talk,
 * no exclamation marks, no emojis, no test-personification. All v3
 * teaching claims preserved.
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
    content: "Probability, in the last chapter, asked about one outcome at a time — a single draw, a single chance. This chapter zooms out and summarizes an entire data set: where its center sits, how widely its values spread, and how displays like frequency tables and box plots carry that information. The questions span several distinct ideas — center, spread, probability, box plots, margin of error — but each individual question runs on exactly one rule, so the core skill here is classification. Name the rule the question concerns before computing anything, because most misses in this topic come from running the right procedure on the wrong quantity, and the choices always list what that produces.",
  },

  { type: 'heading', content: 'Mean vs. median' },
  {
    type: 'text',
    content: "Start with five friends splitting a $\\$115$ dinner bill evenly: each pays $\\$23$, and that number is the **mean** — the total redistributed into equal shares, $\\text{total} \\div \\text{count}$, so every value in the set contributes to it. The **median** comes from a different operation entirely: sort the values and take the middle one, averaging the two middle values when the count is even. Nothing gets added or divided along the way — the median depends on position only.",
  },
  {
    type: 'text',
    content: "So the two measures answer different questions: the mean reports what an equal share would be, while the median reports where the center of the sorted list sits. A question that names one of them does so deliberately, usually because the data were chosen to make the two disagree — so identify which measure is asked for before computing anything, since the answer built from the other measure is generally waiting among the choices.",
  },
  {
    type: 'keyInsight',
    content: "The mean formula rearranges to $\\text{total} = \\text{mean} \\times \\text{count}$. Whenever a value is added, removed, or corrected, work with the **total** rather than the mean — the change alters the total by an exact, known amount, while its effect on the mean stays hidden until the final division. That one rearrangement cracks nearly every hard average question.",
  },

  { type: 'heading', content: 'Outliers pull the mean, not the median' },
  {
    type: 'text',
    content: "Put ten people in a room, each earning about $\\$60{,}000$, and the mean and median income both sit near $\\$60{,}000$. Now add one billionaire. The total leaps by a billion dollars, so the mean rockets into the tens of millions — yet sort the eleven incomes and the middle value is still about $\\$60{,}000$. Why the split? Because the mean feeds on distance — every extra dollar flows through the total — while the median registers position only, and the billionaire occupies exactly one position at the end of the sorted list.",
  },
  {
    type: 'text',
    content: "The same asymmetry shapes whole distributions: in a skewed data set the mean drifts toward the long tail, dragged by the extreme values out there, while the median stays with the bulk of the data. When a question asks which measure resists outliers, this is the fact being tested.",
  },
  {
    type: 'diagramRef',
    visualType: 'meanMedianDiagram',
    description: "A dot plot with the mean and median marked: one outlier drags the mean toward itself, while the median, which depends only on position, barely moves.",
  },

  { type: 'heading', content: 'Spread: range and standard deviation' },
  {
    type: 'text',
    content: "Center settles only half the description. The sets $\\{49, 50, 51\\}$ and $\\{5, 50, 95\\}$ share a mean of $50$ and describe completely different situations — one tightly packed, the other scattered — and questions are routinely built on exactly that distinction. Spread therefore gets its own two measures.",
  },
  {
    type: 'text',
    content: "The **range**, $\\text{max} - \\text{min}$, consults only the two endpoints, and that is precisely its weakness: a single stray value resets an endpoint and inflates the range while every other value sits still. **Standard deviation (SD)** consults every value at once — it measures how tightly the whole set clusters around its own mean, so tight clustering means a small SD and wide scatter a large one.",
  },
  {
    type: 'tip',
    content: "SD is compared on this test, never computed. Ask which set clusters more tightly around its own mean: $\\{20, 20, 20\\}$ has SD $0$, while $\\{5, 20, 35\\}$ has a large one. Bigger values don't mean a bigger SD — wider spacing does.",
  },

  { type: 'heading', content: 'Frequency tables and dot plots' },
  {
    type: 'text',
    content: "Data often arrive already grouped. A frequency table lists each value once alongside how many times it occurs, and a dot plot draws the same information as stacked dots over a number line, where the height of each stack is that value's count. The grouping changes nothing about the definitions — but it changes where students go wrong.",
  },
  {
    type: 'text',
    content: "The mean still runs on the total, so each value has to be weighted by its count: multiply, add the products, and divide by the **total count**. Students who divide by the number of rows instead have averaged the table's layout rather than its data — a five-row table describing twenty students divides by $20$, never by $5$ — and the row-count answer is reliably among the choices.",
  },
  {
    type: 'text',
    content: "The median comes from a cumulative walk. Add the counts row by row, in value order, until the running total reaches the middle position — for $n$ values, position $\\frac{n+1}{2}$ (for even $n$, average the values at positions $\\frac{n}{2}$ and $\\frac{n}{2}+1$). The walk works because the table is already sorted: value order is size order, so counting down the rows is the same as counting along the sorted list.",
  },
  {
    type: 'text',
    content: "A histogram is coarser. It records how many values fall in each bin but not where they sit inside it, so the same cumulative walk can locate the *bin* that contains the median — while the exact median, and the exact mean, can't be computed from a histogram at all. Some questions are built entirely on knowing where that line falls.",
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A frequency table records the number of books $20$ students read over a summer: $0$ books, $3$ students; $1$ book, $5$ students; $2$ books, $6$ students; $3$ books, $4$ students; $4$ books, $2$ students. Find the mean and the median.',
    steps: [
      { label: 'Mean: weight each value by its count', content: 'Total books $= 0(3) + 1(5) + 2(6) + 3(4) + 4(2) = 0 + 5 + 12 + 12 + 8 = 37$. Mean $= 37 \\div 20 = 1.85$. Dividing by the $5$ rows instead of the $20$ students is the trap this layout sets.' },
      { label: 'Median: walk the cumulative counts', content: 'With $20$ values, the median averages the $10$th and $11$th. Running totals: $3$ through value $0$, then $8$ through value $1$, then $14$ through value $2$ — so positions $9$ through $14$ all hold the value $2$, including the $10$th and $11$th.' },
      { label: 'Report both', content: "Mean $= 1.85$; median $= 2$. They don't have to agree — and a question that names one of them isn't answered by the other." },
    ],
  },

  { type: 'heading', content: 'Combining groups: weighted means' },
  {
    type: 'text',
    content: "Two classes take the same test: one averages $80$, the other $90$. The instinct is to split the difference and report $85$ — and that unweighted average of the two means is precisely the wrong answer waiting among the choices. It fails because each class contributes through its **total**, and a larger class carries a larger total; unless the groups are exactly the same size, the combined mean gets pulled toward the mean of the larger group.",
  },
  {
    type: 'formula',
    label: 'Combined mean',
    content: '$\\text{combined mean} = \\dfrac{n_1 \\bar{x}_1 + n_2 \\bar{x}_2}{n_1 + n_2}$',
    note: 'Averaging the two means is right only when the groups are exactly the same size.',
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A class of $20$ students has a mean test score of $80$, and a class of $30$ students has a mean of $90$. What is the mean score across both classes?',
    steps: [
      { label: 'Recover each total', content: 'First class: $20 \\times 80 = 1600$ points. Second class: $30 \\times 90 = 2700$ points.' },
      { label: 'Combine totals and counts', content: 'Combined mean $= \\dfrac{1600 + 2700}{20 + 30} = \\dfrac{4300}{50} = 86$.' },
      { label: 'Rule out the average of averages', content: 'Averaging $80$ and $90$ gives $85$, which is wrong here: the $30$-student class carries more weight, so the true mean lands closer to $90$ than the midpoint.' },
    ],
  },

  { type: 'heading', content: 'Probability: a share of the pool' },
  {
    type: 'text',
    content: "Every probability on this test is the same fraction — $\\dfrac{\\text{favorable outcomes}}{\\text{total pool}}$, the outcomes you want over the pool being drawn from — and it always lands between $0$ and $1$. The numerator is rarely where things go wrong. Errors concentrate in the **denominator**, because question wording often restricts the pool to a subgroup and the standard mistake is dividing by the grand total anyway. So pin down the pool before counting a single favorable outcome.",
  },

  { type: 'heading', content: 'Two-way tables: find the pool' },
  {
    type: 'text',
    content: "A \"given that…\" or \"if a ___ is selected\" clause controls the entire question, because it names the group being drawn from — one row or one column, never the whole table.",
  },
  {
    type: 'steps',
    title: 'Reading a probability from a two-way table',
    items: [
      "**Locate the restricting clause.** \"Given that…\" or \"if a ___ is selected\" names the group being drawn from.",
      "**Take that group's total as the denominator.** One row total or one column total — never the corner total.",
      "**Take the intersection cell as the numerator.** The cell where the row and column meet counts the favorable outcomes.",
    ],
  },
  {
    type: 'text',
    content: "Working in that order rules out the standard wrong answer — the favorable count over the grand total — because the denominator is settled before any counting begins, and the corner total never gets a chance to look tempting.",
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
    content: "A box plot displays exactly five numbers — minimum, first quartile ($Q_1$), median, third quartile ($Q_3$), and maximum — and the **interquartile range** is $\\text{IQR} = Q_3 - Q_1$. All five are position facts: the quartiles cut the sorted data into four pieces with equal counts.",
  },
  {
    type: 'text',
    content: "That is why each of the four segments holds about $25\\%$ of the data, no matter how wide it's drawn. Width shows spread, not quantity — a long segment means that quarter of the data is stretched across a wide interval, not that it holds more values. Students reliably read a long box or whisker as \"more data over there,\" and that misreading is exactly what these questions are built around.",
  },
  {
    type: 'callout',
    title: 'What a box plot cannot show',
    content: "A box plot gives you the five-number summary, the range, and the skew — nothing more. It never shows the mean, the count, or any individual value. When a question compares means from two box plots, \"cannot be determined\" is a legitimate option, and sometimes the right one.",
  },

  { type: 'heading', content: 'Margin of error' },
  {
    type: 'text',
    content: "A survey doesn't produce the true value — it produces an estimate with an interval of uncertainty around it: $\\text{estimate} \\pm \\text{margin}$. That interval is a claim about the *population value* (a mean or a proportion), never about any one individual in it.",
  },
  {
    type: 'text',
    content: "Two things narrow the interval: a larger sample, and less underlying variability in the data. Both work for the same reason — each makes the sample a steadier reflection of the population, so the plausible range for the true value tightens. These questions test exactly two things: what the interval describes, and what makes it narrower.",
  },

  { type: 'heading', content: 'How to approach these questions' },
  {
    type: 'steps',
    items: [
      "**Classify the question.** Total, position, spread, pool, or interval — every data question runs on one of these.",
      "**Mean problems: go to the total.** Compute $\\text{total} = \\text{mean} \\times \\text{count}$, adjust it, and divide back.",
      "**Median problems: sort, then count to the middle.** Position decides everything; distance never does.",
      "**Probability problems: pin the pool first.** The restricting clause sets the denominator before any counting starts.",
      "**Spread problems: compare clustering.** Decide which set hugs its own mean more tightly — no SD formula ever runs.",
    ],
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The mean of 5 numbers is $12$. Four of the numbers are $8$, $10$, $14$, and $15$. What is the fifth number?',
    steps: [
      { label: 'Recover the total', content: "The mean determines the total: total $= \\text{mean} \\times \\text{count} = 12 \\times 5 = 60$." },
      { label: 'Subtract the known four', content: 'The four known values sum to $8 + 10 + 14 + 15 = 47$.' },
      { label: 'Solve', content: "Fifth number $= 60 - 47 = \\mathbf{13}$. After the first step, the mean itself is out of the picture — the whole computation runs on the total." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Using the members table above, if a band member is selected at random, what is the probability that the member is a junior?',
    steps: [
      { label: 'Identify the pool', content: "The clause \"a band member is selected\" restricts the pool to band members — the \"In band\" column total, $19$." },
      { label: 'Count the favorable', content: 'Juniors within that pool occupy the junior/in-band cell: $9$.' },
      { label: 'Divide', content: "Probability $= \\dfrac{9}{19}$. The answer $\\dfrac{9}{40}$ comes from dividing by the grand total — the standard miss on restricted-pool questions." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Set $P = \\{40, 50, 60\\}$ and set $Q = \\{49, 50, 51\\}$. Both have mean $50$. Which set has the larger standard deviation?',
    steps: [
      { label: 'Compare spread, not center', content: "Both means equal $50$, so the center settles nothing. The comparison rests entirely on which set clusters more tightly around that mean." },
      { label: 'Compare the distances', content: "$P$'s values sit $10$ away from $50$; $Q$'s sit only $1$ away. $P$ is widely spread, $Q$ tightly clustered." },
      { label: 'Answer', content: "**Set $P$** has the larger SD. No calculation needed — comparing the clustering settles it, and that's the form every SD question on this test takes." },
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
    answer: "**IQR $= 14$, and about $50\\%$ of the data.** $\\text{IQR} = Q_3 - Q_1 = 34 - 20 = 14$. The interval from $Q_1$ to $Q_3$ holds the middle two quarters, so about $50\\%$ of the data lies there — a fact you read from the quartile structure, not from how wide the box is drawn.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A poll estimates that $42\\%$ of a town supports a measure, with a margin of error of $3\\%$. A choice says "exactly $42\\%$ of the town supports it." Why is that wrong?',
    answer: "**The poll supports an interval, not a single certain value.** The plausible range for the true town-wide support is $42\\% \\pm 3\\%$, about $39\\%$ to $45\\%$. Claiming \"exactly $42\\%$\" throws away the interval and treats a sample estimate as the certain population value — the word \"exactly\" is what sinks the choice.",
  },
  {
    type: 'checkpointQuestion',
    question: 'The mean of $6$ test scores is $80$. The lowest score, a $50$, is dropped. What is the mean of the remaining $5$ scores?',
    answer: "**$86$.** A value changed, so work with the total: $80 \\times 6 = 480$. Removing the $50$ leaves $480 - 50 = 430$ across $5$ scores, so $430 \\div 5 = 86$. Dropping the lowest score raises the mean — checking that the direction of change is sensible is a quick check on the arithmetic.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A histogram of $25$ values shows $8$ values in the $0$–$10$ bin, $9$ in the $10$–$20$ bin, and $8$ in the $20$–$30$ bin. What can be determined about the median, and what cannot?',
    answer: "**The median lies in the $10$–$20$ bin; its exact value cannot be determined.** With $25$ values the median is the $13$th. The cumulative walk gives $8$ through the first bin and $17$ through the second, so the $13$th value falls in $10$–$20$. A histogram records only how many values land in each bin — not where they sit inside it — so neither the exact median nor the exact mean can be computed from one.",
  },

  {
    type: 'text',
    content: "**The whole topic in one habit:** classify what the question concerns — total, position, spread, pool, or interval — then run that one rule. The mean works through the total; the median works through position; outliers move only the mean; SD is compared, never computed; probability is favorable over pool; and a box plot never shows the mean.",
  },
];
