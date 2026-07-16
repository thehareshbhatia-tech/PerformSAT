/**
 * Learn lesson body — Probability (Problem-Solving & Data Analysis).
 *
 * VOICE (adopted 2026-07-15, exemplar: mLinearEquations.js): professional
 * textbook narrative — teaches directly in flowing prose (concept, why it
 * works, how to apply, common errors) in the measured register of a
 * well-edited textbook. Concrete contexts framed plainly as examples;
 * extended metaphors, cute headings, and pep-talk are out. Headings name
 * the concept. Gated by bodies.test.js.
 *
 * Scope: probability as favorable-over-pool, complements and unions,
 * probability-to-count reversals, two-way tables and conditional
 * probability (joint vs marginal vs conditional, "given that" pools,
 * aggregate "at least" pools), and sequential draws without replacement.
 * Center, spread, box plots, and margin of error live in the
 * Statistics & Data lesson — not re-taught here.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const mProbabilityBlocks = [
  {
    type: 'text',
    content: "Every probability is a fraction with two separate jobs: the denominator names the pool being drawn from, and the numerator counts the outcomes of interest inside that pool. The two decisions are independent, and nearly every wrong answer on this topic comes from settling one of them carelessly — almost always the denominator. Deciding who is in the pool, before counting anything favorable, is the discipline the whole topic rests on.",
  },

  { type: 'heading', content: 'Probability as a share of the pool' },
  {
    type: 'text',
    content: "The probability that a randomly selected member of a group has some property is $\\dfrac{\\text{favorable outcomes}}{\\text{total pool}}$ — a number from $0$ (impossible) to $1$ (certain). The phrase describing *what is being asked about* edits the numerator. The phrase describing *who is being selected* edits the denominator. In \"a student is chosen at random from those who passed,\" the words \"from those who passed\" shrink the pool before the question even states its event; a probability computed over the full class answers a different question.",
  },
  {
    type: 'keyInsight',
    content: 'Selection wording — "chosen from," "of those who," "given that" — controls the denominator; the event being asked about controls the numerator. Fix the pool first, then count favorables inside it.',
  },

  { type: 'heading', content: 'Complements and unions' },
  {
    type: 'text',
    content: "The **complement** of an event is everything the event is not, so the two probabilities split the pool between them: $P(\\text{not } X) = 1 - P(X)$. When an event is awkward to count directly — \"at least one,\" \"not both,\" \"anything except\" — its complement is often a single clean case, and one subtraction finishes the problem. For \"$A$ or $B$\" questions, adding $P(A)$ and $P(B)$ counts anyone in both groups twice, so the overlap comes back out once.",
  },
  {
    type: 'formula',
    label: 'The union rule',
    content: '$P(A \\text{ or } B) = P(A) + P(B) - P(A \\text{ and } B)$',
    note: 'When the two events cannot occur together, the overlap term is $0$ and the probabilities simply add. Otherwise, omitting the subtraction double-counts the overlap — the standard error on "or" questions.',
  },

  { type: 'heading', content: 'From a probability back to a count' },
  {
    type: 'text',
    content: "Some items run the definition in reverse: the probability is given and an actual count is requested. The same fraction rearranges: $\\text{count} = \\text{probability} \\times \\text{pool size}$, and likewise $\\text{pool size} = \\text{count} \\div \\text{probability}$. A probability alone never determines a count — the pool size must appear somewhere in the problem, and locating it is the first move.",
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The probability that a randomly selected student at a school walks to school is $\\dfrac{3}{8}$. The school has $480$ students. How many of them walk to school?',
    steps: [
      { label: 'Run the definition in reverse', content: 'The fraction $\\frac{3}{8}$ is $\\frac{\\text{walkers}}{\\text{all students}}$, so walkers $= \\frac{3}{8} \\times 480$.' },
      { label: 'Compute', content: '$480 \\div 8 = 60$, and $60 \\times 3 = 180$ walkers.' },
      { label: 'Check', content: '$\\frac{180}{480}$ reduces to $\\frac{3}{8}$, matching the given probability.' },
    ],
  },

  { type: 'heading', content: 'Two-way tables and conditional probability' },
  {
    type: 'text',
    content: "A two-way table classifies one group along two traits at once, and every probability read from it is some cell — or sum of cells — divided by some total. The vocabulary tracks which total. A **joint** probability (junior *and* plays a sport) divides one interior cell by the grand total. A **marginal** probability (junior, regardless of sport) divides a row or column total by the grand total. A **conditional** probability restricts the pool first: \"given that the student plays a sport\" discards every non-player before the counting begins, so the denominator is that group's total, never the table's corner.",
  },
  {
    type: 'table',
    title: 'Students by grade and sport participation',
    headers: ['', 'Plays a sport', 'No sport', 'Total'],
    rows: [
      ['Juniors', '36', '24', '60'],
      ['Seniors', '44', '46', '90'],
      ['Total', '80', '70', '150'],
    ],
  },
  {
    type: 'text',
    content: "The notation $P(A \\mid B)$ reads \"the probability of $A$ given $B$\": whatever stands *behind the bar* names the pool. Order matters, because the two directions use different denominators even though they share a numerator cell. From the table, $P(\\text{junior} \\mid \\text{plays a sport}) = \\frac{36}{80} = 0.45$ — the pool is the $80$ players. But $P(\\text{plays a sport} \\mid \\text{junior}) = \\frac{36}{60} = 0.60$ — the pool is the $60$ juniors. Same cell on top, different questions, different answers. Wrong answer choices are routinely built from the swapped direction, so identify the pool from the wording rather than from which numbers look familiar.",
  },
  {
    type: 'text',
    content: "A condition can also name a combined group rather than a single row: \"given that the student is not a senior,\" or, in a table of car ownership, \"given that the household owns at least one car.\" Aggregate every row or column the condition admits into one pool total, then take the favorable cells from inside that same slice. The denominator is the aggregate — never the grand total, and never just one of the admitted rows.",
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Using the table above, a student who plays a sport is selected at random. What is the probability that the student is a senior?',
    steps: [
      { label: 'Locate the condition', content: 'The pool is fixed by "a student who plays a sport" — the $80$ in the "Plays a sport" column total, not the $150$ in the corner.' },
      { label: 'Count the favorable', content: 'Seniors inside that pool occupy the senior/plays-a-sport cell: $44$.' },
      { label: 'Divide', content: '$P = \\frac{44}{80} = \\frac{11}{20} = 0.55$. Dividing by the grand total instead gives $\\frac{44}{150} \\approx 0.29$ — the joint probability, which answers a different question.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Using the same table, compare $P(\\text{junior} \\mid \\text{plays a sport})$ with $P(\\text{plays a sport} \\mid \\text{junior})$. Both are built from the same cell — why do they differ?',
    steps: [
      { label: 'Read the first direction', content: 'Behind the bar: plays a sport. The pool is the $80$ players; the favorable are the $36$ juniors among them. $P = \\frac{36}{80} = 0.45$.' },
      { label: 'Read the second direction', content: 'Behind the bar: junior. The pool is the $60$ juniors; the favorable are the $36$ players among them. $P = \\frac{36}{60} = 0.60$.' },
      { label: 'Compare', content: 'The numerator cell is the same $36$ both times; only the pool changed, from $80$ to $60$. In general $P(A \\mid B) \\ne P(B \\mid A)$ — the two ask about different groups, and the group behind the bar supplies the denominator.' },
    ],
  },

  { type: 'heading', content: 'Sequential draws without replacement' },
  {
    type: 'text',
    content: "When two items are drawn and the first is not returned, the second draw faces a smaller pool: the denominator drops by one, and if the first draw removed a favorable outcome, the numerator drops by one as well. Multiply the probabilities along the sequence, updating both counts at every step. Reusing the original pool for the second draw quietly assumes the first item was put back — a different experiment with a different answer.",
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A bag holds $5$ red marbles and $3$ blue marbles. Two marbles are drawn at random, one after the other, without replacement. What is the probability that both are red?',
    steps: [
      { label: 'First draw', content: '$P(\\text{red}) = \\frac{5}{8}$ — five reds in a pool of eight.' },
      { label: 'Second draw, updated pool', content: 'One red is gone, so $4$ reds remain in a pool of $7$: $P = \\frac{4}{7}$.' },
      { label: 'Multiply along the sequence', content: '$\\frac{5}{8} \\times \\frac{4}{7} = \\frac{20}{56} = \\frac{5}{14}$. With replacement the answer would be $\\frac{5}{8} \\times \\frac{5}{8} = \\frac{25}{64}$ — the shrinking pool is the entire difference.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'In a school, $P(\\text{band}) = 0.40$, $P(\\text{choir}) = 0.25$, and $P(\\text{both}) = 0.10$. What is $P(\\text{band or choir})$, and what is the probability of belonging to neither?',
    answer: '**$P(\\text{band or choir}) = 0.55$; $P(\\text{neither}) = 0.45$.** Adding alone counts the $0.10$ overlap twice, so subtract it once: $0.40 + 0.25 - 0.10 = 0.55$. "Neither" is the complement of the union: $1 - 0.55 = 0.45$.',
  },
  {
    type: 'checkpointQuestion',
    question: 'A survey of $120$ households finds $30$ own no car, $54$ own one car, and $36$ own two or more. Given that a household owns at least one car, what is the probability it owns exactly one?',
    answer: '**$\\frac{3}{5}$.** The condition "at least one" aggregates two categories into the pool: $54 + 36 = 90$ households. The favorable count is $54$, so $P = \\frac{54}{90} = \\frac{3}{5}$. Dividing by $120$ ignores the condition and gives $\\frac{54}{120} = 0.45$ — the answer to an unconditioned question.',
  },
  {
    type: 'checkpointQuestion',
    question: 'Using the students-by-grade table, find $P(\\text{plays a sport} \\mid \\text{senior})$, and explain why it does not equal $P(\\text{senior} \\mid \\text{plays a sport})$.',
    answer: '**$P(\\text{plays a sport} \\mid \\text{senior}) = \\frac{44}{90} = \\frac{22}{45} \\approx 0.49$**, because behind the bar is *senior* — the pool is the $90$ seniors. $P(\\text{senior} \\mid \\text{plays a sport})$ shares the $44$ on top but pools the $80$ players: $\\frac{44}{80} = 0.55$. Same cell, different denominators — the group behind the bar decides which total divides.',
  },

  {
    type: 'text',
    content: "**In summary:** a probability is favorable over pool, and the pool is decided first. Complements subtract from $1$; unions add and remove the overlap once; a count is probability times pool size; in a two-way table, whatever stands behind the bar in $P(A \\mid B)$ names the denominator; and a draw without replacement shrinks both counts for the next draw.",
  },
];
