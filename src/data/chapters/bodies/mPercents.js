/**
 * Learn lesson body — Percents (Problem-Solving & Data Analysis).
 *
 * TUTOR VOICE (adopted 2026-07-14, exemplar: ./mLinearEquations.js): coaching
 * direct-address — talks TO the student, anticipates the mistake before it
 * happens, everyday anchor first ("a percent is a multiplier") and setup
 * second. Lean structure unchanged. Gated by bodies.test.js. $...$ is KaTeX.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const mPercentsBlocks = [
  {
    type: 'text',
    content: "Every percent question is one of four moves, and the arithmetic is never what beats you. What beats you is deciding whether to multiply, divide, or chain — and off *which* base. Train one habit and the deciding gets easy: see every percent as a **multiplier**. The whole topic collapses into multiply, divide, or chain.",
  },

  { type: 'heading', content: 'A percent is a multiplier' },
  {
    type: 'text',
    content: "Turn the words into one factor as you read them. \"Increase by $20\\%$\" means $\\times 1.20$. \"Decrease by $20\\%$\" means $\\times 0.80$ — the decrease factor is the part *left over*, not the part removed. \"$p\\%$ of\" means $\\times \\frac{p}{100}$. Do this translation first, every time, before any arithmetic touches the page.",
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
    content: "Every static percent problem fits one sentence: $\\text{part} = \\frac{p}{100}\\times\\text{whole}$. You're given two of the three numbers; solve for the third. Here's where autopilot costs you: grabbing the two given numbers and multiplying without asking which slot is empty. Label the missing slot first. The shape that feels backwards — \"$12$ is $30\\%$ of what?\" — is missing the *whole*, and a missing whole means you **divide**: $\\text{whole} = 12 \\div 0.30 = 40$.",
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
      { label: 'Name the slots', content: 'Part $= 18$, percent $= 30\\%$, and the whole is what\'s missing. This is the "$18$ is $30\\%$ of what?" shape.' },
      { label: 'Divide, do not multiply', content: 'A missing whole means divide: $18 \\div 0.30$, because $18 = 0.30 \\times \\text{whole}$.' },
      { label: 'Answer', content: '$18 \\div 0.30 = 60$ students. Had you multiplied, $0.30 \\times 18 = 5.4$ — smaller than the part itself, which is impossible for a whole.' },
    ],
  },

  { type: 'heading', content: 'Reverse percent: divide, never subtract' },
  {
    type: 'text',
    content: "A price **after** a $20\\%$ increase is $\\$60$ — what was it before? Write the change forward: $\\text{original}\\times 1.20 = 60$, so $\\text{original} = 60 \\div 1.20 = 50$. Whatever you do, don't take $20\\%$ off the $\\$60$. That $20\\%$ was a percent *of the original*, not of the new price — subtract it from the wrong base and you land near $48$, an answer choice that will absolutely be sitting there. Your tell for a reverse problem: the number in your hand is the *result* of the change, not the start. See the word \"after,\" write the forward equation, divide.",
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
    content: 'To undo a change, **divide** by its factor. Undoing an increase should give you a smaller number; undoing a decrease, a larger one. Check that direction before you commit.',
  },

  { type: 'heading', content: "Successive percents don't add" },
  {
    type: 'text',
    content: "Each change acts on whatever value the previous change left behind — so you **chain the factors**, never sum the percents. A $10\\%$ raise then a $10\\%$ cut feels like it cancels out. It doesn't: $\\times 1.10 \\times 0.90 = 0.99$, a net $1\\%$ loss. Up-then-down by the same percent always lands you below where you started, because the cut bites the bigger number.",
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A stock rises $40\\%$ one week, then falls $40\\%$ the next. What is the net percent change?',
    steps: [
      { label: 'Chain the factors', content: 'Up $40\\%$ is $\\times 1.40$; down $40\\%$ is $\\times 0.60$. Together: $1.40 \\times 0.60 = 0.84$.' },
      { label: 'Read against 1', content: "$0.84$ means $84\\%$ of the start — a net **$16\\%$ decrease**, not $0\\%$. The $40\\%$ drop bites the larger, post-rise value, so it takes away more than the rise added." },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'A population grows by $25\\%$ to reach $500$. What was it before the growth?',
    answer: "**$400$.** The $500$ is the *after* number, so work backward by dividing: $\\text{original}\\times 1.25 = 500$, so $\\text{original} = 500 \\div 1.25 = 400$. Subtracting $25\\%$ of $500$ uses the wrong base.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A price goes up $20\\%$, then the new price goes up another $50\\%$. By what single percent did it change overall?',
    answer: "**$80\\%$ increase.** Chain the factors: $1.20 \\times 1.50 = 1.80$, which is $80\\%$ above the start. Summing to $20 + 50 = 70\\%$ misses that the second increase acts on an already-raised price.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A shirt is marked down from $\\$40$ to $\\$30$. What is the percent decrease?',
    answer: "**$25\\%$ decrease.** Percent change is $\\dfrac{\\text{change}}{\\text{original}}$ — and the base is the *original* price. The change is $40 - 30 = 10$, so $10 \\div 40 = 0.25 = 25\\%$. Divide by the new $\\$30$ instead and you get about $33\\%$ — right arithmetic, wrong base.",
  },

  {
    type: 'text',
    content: "**The move, every time:** turn each percent into a factor before anything else. One change is a multiply, a missing whole is a divide, an \"after\" value works backward by dividing, and stacked changes multiply their factors. That's the whole topic.",
  },
];
