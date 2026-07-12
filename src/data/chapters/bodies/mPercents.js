/**
 * Learn lesson body — Percents (Problem-Solving & Data Analysis).
 *
 * Lean "review / cheat-sheet" style — one SAT skill per lesson, plain
 * language, one idea per short section, then a couple of worked examples and
 * check-yourself questions. Shape + voice exemplar: gSubjectVerbAgreement.js.
 * Gated by bodies.test.js (lean contract). $...$ is KaTeX.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const mPercentsBlocks = [
  {
    type: 'text',
    content: 'Every percent question is one of four moves. Learn to see a percent as a **multiplier** and the whole topic collapses into multiply, divide, or chain.',
  },

  { type: 'heading', content: 'A percent is a multiplier' },
  {
    type: 'text',
    content: 'Turn the words into one factor as you read them. "Increase by $20\\%$" means $\\times 1.20$. "Decrease by $20\\%$" means $\\times 0.80$ — the decrease factor is just the part that is left. "$p\\%$ of" means $\\times \\frac{p}{100}$. Do this translation first, every time, before any arithmetic.',
  },
  {
    type: 'keyInsight',
    content: 'A decrease keeps the rest: down $30\\%$ is $\\times 0.70$, not $\\times 0.30$. Down $80\\%$ is $\\times 0.20$. Build the factor from what **remains**.',
  },

  { type: 'heading', content: 'Translate any change into a factor' },
  {
    type: 'table',
    headers: ['The words', 'The factor'],
    rows: [
      ['increase by $15\\%$', '$\\times 1.15$'],
      ['decrease by $15\\%$', '$\\times 0.85$'],
      ['$40\\%$ of a number', '$\\times 0.40$'],
      ['increase by $120\\%$', '$\\times 2.20$'],
      ['$0.4\\%$ of a number', '$\\times 0.004$'],
    ],
  },

  { type: 'heading', content: 'Three slots: part, whole, percent' },
  {
    type: 'text',
    content: 'Static percent problems always fit one sentence: $\\text{part} = \\frac{p}{100}\\times\\text{whole}$. Two of the three numbers are given; solve for the third. The one that feels backwards — "$12$ is $30\\%$ of what?" — is a **division**, not a multiplication: $\\text{whole} = 12 \\div 0.30 = 40$.',
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'A jacket costs $\\$80$. During a sale the price drops by $25\\%$. What is the sale price?',
    steps: [
      { label: 'Factor', content: 'Down $25\\%$ keeps $75\\%$, so the factor is $\\times 0.75$.' },
      { label: 'Multiply', content: '$80 \\times 0.75 = 60$. The sale price is $\\$60$.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'In a survey, $18$ students chose art, which was $30\\%$ of all respondents. How many students responded?',
    steps: [
      { label: 'Name the slots', content: 'Part $= 18$, percent $= 30\\%$, whole is unknown. This is the "$18$ is $30\\%$ of what?" shape.' },
      { label: 'Divide, do not multiply', content: 'The whole is $18 \\div 0.30$, because $18 = 0.30 \\times \\text{whole}$.' },
      { label: 'Answer', content: '$18 \\div 0.30 = 60$ students. (Multiplying $0.30 \\times 18$ would give $5.4$ — smaller than the part, which is impossible.)' },
    ],
  },

  { type: 'heading', content: 'Reverse percent: divide, never subtract' },
  {
    type: 'text',
    content: 'If a price **after** a $20\\%$ increase is $\\$60$, the original satisfies $\\text{original}\\times 1.20 = 60$, so $\\text{original} = 60 \\div 1.20 = 50$. Never take $20\\%$ off the $\\$60$ — that $20\\%$ was a percent of the original, not of the new price.',
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'After a $30\\%$ discount and then $9\\%$ tax, a receipt reads $\\$76.30$. What was the pre-discount price?',
    steps: [
      { label: 'Write it forward', content: 'Let the original be $x$. The discount is $\\times 0.70$ and the tax is $\\times 1.09$, so $x \\times 0.70 \\times 1.09 = 76.30$.' },
      { label: 'Solve by dividing', content: 'Divide by the whole composite at once: $x = \\dfrac{76.30}{0.70 \\times 1.09}$.' },
      { label: 'Compute', content: '$0.70 \\times 1.09 = 0.763$, so $x = 76.30 \\div 0.763 = 100$. The original price was $\\$100$.' },
    ],
  },
  {
    type: 'keyInsight',
    content: 'To undo a change, **divide** by its factor. Undoing an increase gives a smaller number; undoing a decrease gives a larger one. Check the direction before you commit.',
  },

  { type: 'heading', content: "Successive percents don't add" },
  {
    type: 'text',
    content: 'Each change acts on the value the previous one left behind, so you **chain the factors** — never sum the percents. A $10\\%$ raise then a $10\\%$ cut is $\\times 1.10 \\times 0.90 = 0.99$: a net $1\\%$ loss, not zero. Up-then-down by the same percent always lands below where you started.',
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A stock rises $40\\%$ one week, then falls $40\\%$ the next. What is the net percent change?',
    steps: [
      { label: 'Chain the factors', content: 'Up $40\\%$ is $\\times 1.40$; down $40\\%$ is $\\times 0.60$. Together: $1.40 \\times 0.60 = 0.84$.' },
      { label: 'Read against 1', content: '$0.84$ means $84\\%$ of the start — a net **$16\\%$ decrease**, not $0\\%$. The $40\\%$ drop hits the larger value, so it removes more than the rise added.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'A population grows by $25\\%$ to reach $500$. What was it before the growth?',
    answer: '**$400$.** Reverse percent: $\\text{original}\\times 1.25 = 500$, so $\\text{original} = 500 \\div 1.25 = 400$. Do not subtract $25\\%$ of $500$.',
  },
  {
    type: 'checkpointQuestion',
    question: 'A price goes up $20\\%$, then the new price goes up another $50\\%$. By what single percent did it change overall?',
    answer: '**$80\\%$ increase.** Chain the factors: $1.20 \\times 1.50 = 1.80$, which is $80\\%$ more than the start — not $20 + 50 = 70\\%$.',
  },

  {
    type: 'text',
    content: '**The move, every time:** turn each percent into a factor first. One change is a multiply, a missing whole is a divide, an "after" value works backward by dividing, and stacked changes multiply their factors. That is the whole topic.',
  },
];
