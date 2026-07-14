/**
 * Learn lesson body — Statistics & Data (Problem-Solving and Data Analysis).
 *
 * TUTOR VOICE (adopted 2026-07-14, user-approved exemplar mLinearEquations.js):
 * coaching direct-address — talks TO the student, everyday anchor first and
 * formula second, anticipates the mistake before it happens, memorable decision
 * rules. Lean structure unchanged; gated by bodies.test.js.
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
    content: "Averages, spread, probability, box plots — data questions look like a grab bag, but every one of them is a single move you can name before you touch a number. Here are the moves, one at a time.",
  },

  { type: 'heading', content: 'Mean vs. median' },
  {
    type: 'text',
    content: "Picture five friends splitting a dinner bill. The **mean** is what each pays if they split it evenly — $\\text{total} \\div \\text{count}$ — so every dish on the table tugs on it. The **median** is the middle friend once everyone lines up by value: sort first, then find the middle (even count: average the two middle values). They do different jobs. The mean shares out the total; the median only asks who's standing in the middle. A question that picks one picked it on purpose — figure out which job it wants before you compute anything.",
  },
  {
    type: 'keyInsight',
    content: "Flip the mean formula around: $\\text{total} = \\text{mean} \\times \\text{count}$. The moment a value gets added, removed, or corrected, stop thinking in means and work with the **total** — that one flip cracks nearly every hard average question.",
  },

  { type: 'heading', content: 'Outliers pull the mean, not the median' },
  {
    type: 'text',
    content: "Put a billionaire in a room of ten people and the *average* income goes through the roof — but the person standing in the middle of the line barely notices. That's the whole fact: one extreme value drags the **mean** toward itself and leaves the **median** almost alone, because the median cares about position, never distance. In a skewed set, the mean drifts out toward the long tail while the median stays home with the bulk of the data.",
  },

  { type: 'heading', content: 'Spread: range and standard deviation' },
  {
    type: 'text',
    content: "Two rulers for how spread out data is. **Range** $= \\text{max} - \\text{min}$ — it only sees the two endpoints, so one stray value can blow it up. **Standard deviation (SD)** watches how tightly *all* the values huddle around the mean: tight huddle, small SD; scattered, big SD. And spread is a separate question from center — two sets can share a mean of $50$ and look nothing alike. The test builds questions out of exactly that gap.",
  },
  {
    type: 'tip',
    content: "You'll never compute SD on this test — you'll only compare it. Ask which set huddles tighter around its own mean: $\\{20, 20, 20\\}$ has SD $0$, while $\\{5, 20, 35\\}$ has a big one. Bigger numbers don't mean bigger SD. Spacing does.",
  },

  { type: 'heading', content: 'Probability is a share of the pool' },
  {
    type: 'text',
    content: "Every probability is $\\dfrac{\\text{favorable outcomes}}{\\text{total pool}}$ — what you want on top, what you're drawing from on the bottom, a fraction between $0$ and $1$. Here's where the points actually leak: the **bottom**. Questions quietly shrink the pool, and almost everyone keeps dividing by the grand total anyway. Read for the pool first, before you count a single favorable outcome.",
  },

  { type: 'heading', content: 'Two-way tables: pick the right pool' },
  {
    type: 'text',
    content: "A \"given that…\" or \"if a ___ is selected\" clause is the whole question. It shrinks your pool to one row or one column — so you divide by *that* group's total, never the corner total. Work it in order: find the clause, find its group's total, then take the cell where the row and column cross as your numerator. Do it in that order and the trap answer — favorable over the grand total — never even tempts you.",
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
    content: "A box plot is five numbers drawn as a picture: minimum, first quartile ($Q_1$), median, third quartile ($Q_3$), maximum. The **interquartile range** is $\\text{IQR} = Q_3 - Q_1$. Each of the four segments holds about $25\\%$ of the data — every segment, no matter how wide it's drawn. A stretched segment means that quarter is *spread out*, not that it holds more values. That misread is exactly what these questions are built on.",
  },
  {
    type: 'callout',
    title: 'What a box plot cannot show',
    content: "Five numbers, the range, the skew — that's everything a box plot tells you. It never shows the mean, the count, or any individual value. So when a question compares means from two box plots, \"cannot be determined\" is a live option — and sometimes the right one.",
  },

  { type: 'heading', content: 'Margin of error' },
  {
    type: 'text',
    content: "A survey doesn't hand you the truth — it hands you an estimate with a fuzz zone around it: $\\text{estimate} \\pm \\text{margin}$. That band is a claim about the *population value* (a mean or a proportion), not about any one individual in it. Two things tighten it: a bigger sample, or less underlying spread. That's all these questions ever test — what the band describes, and what shrinks it.",
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The mean of 5 numbers is $12$. Four of the numbers are $8$, $10$, $14$, and $15$. What is the fifth number?',
    steps: [
      { label: 'Recover the total', content: "The mean is hiding the total, so un-hide it: total $= \\text{mean} \\times \\text{count} = 12 \\times 5 = 60$." },
      { label: 'Subtract the known four', content: '$8 + 10 + 14 + 15 = 47$ accounted for.' },
      { label: 'Solve', content: "Fifth number $= 60 - 47 = \\mathbf{13}$. Notice you never touched the mean again after step one — that's the pattern." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Using the members table above, if a band member is selected at random, what is the probability that the member is a junior?',
    steps: [
      { label: 'Name the pool', content: "\"A band member is selected\" — the pool is band members only, the \"In band\" column total: $19$." },
      { label: 'Count the favorable', content: 'Juniors inside that pool: the junior/in-band cell, $9$.' },
      { label: 'Divide', content: "Probability $= \\dfrac{9}{19}$. If you got $\\dfrac{9}{40}$, you divided by the grand total — the exact trap the clause was setting." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Set $P = \\{40, 50, 60\\}$ and set $Q = \\{49, 50, 51\\}$. Both have mean $50$. Which set has the larger standard deviation?',
    steps: [
      { label: 'Same center, compare spread', content: "The means tie at $50$, so center tells you nothing. The only question left: which set huddles tighter around that mean?" },
      { label: 'Look at the distances', content: "$P$'s values sit $10$ away from $50$; $Q$'s sit only $1$ away. $P$ is scattered, $Q$ is huddled." },
      { label: 'Answer', content: "**Set $P$** has the larger SD — no calculation, just compare the clustering. That's every SD question on this test." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'A data set is $\\{3, 4, 5, 6, 7\\}$. A sixth value, $100$, is then added. Describe what happens to the mean and to the median.',
    steps: [
      { label: 'Before', content: 'Mean $= 25 \\div 5 = 5$; median $= 5$ (the middle value).' },
      { label: 'After — mean', content: 'New total $= 25 + 100 = 125$ over $6$ values, so mean $= 125 \\div 6 \\approx 20.8$. The outlier hauled it way up.' },
      { label: 'After — median', content: 'Sorted list $\\{3,4,5,6,7,100\\}$ has middle values $5$ and $6$, so median $= 5.5$ — it barely flinched.' },
      { label: 'Takeaway', content: 'One extreme value launches the **mean** and leaves the **median** standing still. A question hunting for the measure that resists outliers wants the median.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'A box plot has minimum $12$, $Q_1 = 20$, median $26$, $Q_3 = 34$, and maximum $50$. What is the IQR, and about what fraction of the data lies between $20$ and $34$?',
    answer: "IQR $= Q_3 - Q_1 = 34 - 20 = 14$. Between $Q_1$ and $Q_3$ sit the middle two quarters, so about $50\\%$ of the data lives there — you read that off the quartile structure, never off how wide the box happens to be drawn.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A poll estimates that $42\\%$ of a town supports a measure, with a margin of error of $3\\%$. A choice says "exactly $42\\%$ of the town supports it." Why is that wrong?',
    answer: "The poll bought a band, not a bullseye: the plausible range for the true town-wide support is $42\\% \\pm 3\\%$, about $39\\%$ to $45\\%$. Saying \"exactly $42\\%$\" throws the band away and treats a sample estimate as the certain population value — the word \"exactly\" is what kills the choice.",
  },
  {
    type: 'checkpointQuestion',
    question: 'The mean of $6$ test scores is $80$. The lowest score, a $50$, is dropped. What is the mean of the remaining $5$ scores?',
    answer: "**$86$.** A value changed, so work with the total: $80 \\times 6 = 480$. Remove the $50$: $480 - 50 = 430$, now spread over $5$ scores, so $430 \\div 5 = 86$. Dropping the lowest score pulls the mean up — check that the direction makes sense before you move on.",
  },

  {
    type: 'text',
    content: "**The move, every time:** name what the question is really about — total, position, spread, pool, or band — then run that one rule. Mean lives in the total; median lives in position; outliers pull only the mean; SD gets compared, never computed; probability is favorable over pool; and a box plot never shows the mean.",
  },
];
