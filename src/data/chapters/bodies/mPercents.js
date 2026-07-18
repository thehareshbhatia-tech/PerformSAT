/**
 * Learn lesson body — Percents (Problem-Solving & Data Analysis).
 *
 * VOICE v3 (adopted 2026-07-17, exemplar: bodies/centralIdeas.js): scannable
 * instructional register — direct address, contractions, 1-3 sentence text
 * blocks, list blocks for criteria, steps blocks for procedures; no analogies,
 * no pep-talk, no emojis. All substance of the v2 textbook version preserved.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const mPercentsBlocks = [
  {
    type: 'text',
    content: 'A percent is the most common special case of the ratio reasoning we just built — a ratio whose base is fixed at $100$ — and the discipline of tracking the base carries over whole.',
  },
  {
    type: 'text',
    content: 'The arithmetic here is rarely where errors come from. The real decision is whether to multiply, divide, or chain — and, above all, off *which* base.',
  },
  {
    type: 'text',
    content: 'One habit organizes every one of those decisions: treat each percent as a **multiplier**. The whole topic then collapses into multiplying, dividing, or chaining factors.',
  },

  { type: 'heading', content: 'A percent is a multiplier' },
  {
    type: 'text',
    content: 'Translate the words into a single factor as you read them — before any other arithmetic.',
  },
  {
    type: 'list',
    items: [
      '"Increase by $20\\%$" means $\\times 1.20$.',
      '"Decrease by $20\\%$" means $\\times 0.80$ — the decrease factor is the part *left over*, not the part removed.',
      '"$p\\%$ of" means $\\times \\frac{p}{100}$.',
    ],
  },
  {
    type: 'keyInsight',
    content: 'A decrease keeps the remainder: down $30\\%$ is $\\times 0.70$, not $\\times 0.30$; down $80\\%$ is $\\times 0.20$. Build the factor from what **remains**.',
  },
  {
    type: 'diagramRef',
    visualType: 'percentChangeDiagram',
    description: 'A quantity before and after a percent change, annotated with the single multiplier that carries the old value to the new one.',
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

  { type: 'heading', content: 'Part, whole, and percent' },
  {
    type: 'text',
    content: 'Every static percent problem fits one equation: $\\text{part} = \\frac{p}{100}\\times\\text{whole}$. Two of the three quantities are given; solve for the third.',
  },
  {
    type: 'text',
    content: 'The standard error is taking the two given numbers and multiplying without first identifying which quantity is missing. Label the missing quantity first.',
  },
  {
    type: 'text',
    content: "The form that reads in reverse — \"$12$ is $30\\%$ of what?\" — is missing the *whole*, and a missing whole calls for **division**: $\\text{whole} = 12 \\div 0.30 = 40$.",
  },

  {
    type: 'steps',
    title: 'How to approach these questions',
    items: [
      '**Turn every percent into a factor.** Up $15\\%$ is $\\times 1.15$; down $15\\%$ is $\\times 0.85$; "$p\\%$ of" is $\\times \\frac{p}{100}$.',
      '**Name the base.** Each factor acts on the value right before it — "of those" switches the base, and "after" means the given number is a result, not a start.',
      '**Pick the operation.** A single change multiplies, a missing whole divides, an "after" value works backward by division, and successive changes chain their factors.',
      '**Check the direction.** Undoing an increase gives a smaller number; undoing a decrease, a larger one.',
    ],
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'A jacket costs $\\$80$. During a sale the price drops by $25\\%$. What is the sale price?',
    steps: [
      { label: 'Build the factor', content: 'Down $25\\%$ keeps $75\\%$, so the factor is $\\times 0.75$.' },
      { label: 'Multiply', content: '$80 \\times 0.75 = 60$. The sale price is $\\$60$.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'In a survey, $18$ students chose art, which was $30\\%$ of all respondents. How many students responded?',
    steps: [
      { label: 'Identify the quantities', content: 'Part $= 18$, percent $= 30\\%$, and the whole is missing. This is the "$18$ is $30\\%$ of what?" form.' },
      { label: 'Divide, not multiply', content: 'A missing whole calls for division: $18 \\div 0.30$, because $18 = 0.30 \\times \\text{whole}$.' },
      { label: 'Compute', content: '$18 \\div 0.30 = 60$ students. Multiplying instead gives $0.30 \\times 18 = 5.4$ — smaller than the part itself, which is impossible for a whole.' },
    ],
  },

  { type: 'heading', content: 'Reversing a percent change' },
  {
    type: 'text',
    content: 'Suppose a price **after** a $20\\%$ increase is $\\$60$, and you want the original. Write the change forward: $\\text{original}\\times 1.20 = 60$, so $\\text{original} = 60 \\div 1.20 = 50$.',
  },
  {
    type: 'text',
    content: "Don't take $20\\%$ off the $\\$60$. That $20\\%$ was a percent *of the original*, not of the new price, and subtracting from the wrong base lands near $48$ — a value routinely placed among the answer choices.",
  },
  {
    type: 'text',
    content: 'The signal of a reverse problem: the given number is the *result* of the change, not the start. On the word "after," write the forward equation and divide.',
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
    content: 'To undo a change, **divide** by its factor. Undoing an increase should give a smaller number; undoing a decrease, a larger one. Check that direction before accepting the result.',
  },

  { type: 'heading', content: "Successive percents don't add" },
  {
    type: 'text',
    content: 'Each change acts on whatever value the previous change produced, so **chain the factors** rather than summing the percents.',
  },
  {
    type: 'text',
    content: "A $10\\%$ increase followed by a $10\\%$ decrease looks like it cancels, but doesn't: $\\times 1.10 \\times 0.90 = 0.99$, a net $1\\%$ loss.",
  },
  {
    type: 'text',
    content: 'An increase and a decrease by the same percent always finish below the starting value, because the decrease acts on the larger, post-increase number.',
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A stock rises $40\\%$ one week, then falls $40\\%$ the next. What is the net percent change?',
    steps: [
      { label: 'Chain the factors', content: 'Up $40\\%$ is $\\times 1.40$; down $40\\%$ is $\\times 0.60$. Together: $1.40 \\times 0.60 = 0.84$.' },
      { label: 'Compare with 1', content: '$0.84$ means $84\\%$ of the start — a net **$16\\%$ decrease**, not $0\\%$. The $40\\%$ drop acts on the larger, post-rise value, so it removes more than the rise added.' },
    ],
  },

  { type: 'heading', content: 'Nested percents and shifting bases' },
  {
    type: 'text',
    content: 'A percent *of* a percent chains multiplicatively, because the second percent acts on the group the first one carved out.',
  },
  {
    type: 'text',
    content: 'If $40\\%$ of a class walks to school and $20\\%$ of those walkers carry umbrellas, the umbrella-carrying walkers are $0.40 \\times 0.20 = 0.08$ of the class — $8\\%$ of the whole, not $20\\%$.',
  },
  {
    type: 'text',
    content: 'The phrase "of those" announces the base switch. Read it as a factor applied to the previous result.',
  },
  {
    type: 'text',
    content: 'When the rate is a variable, the factor divides by $100$ explicitly: a price of $x$ dollars reduced by $p$ percent is $x\\left(1 - \\frac{p}{100}\\right)$, not $x(1 - p)$. A test value exposes the difference at once — at $p = 20$, the first gives $0.8x$, while $x(1 - 20) = -19x$.',
  },
  {
    type: 'text',
    content: 'Bases also shift between sentences. "$x$ is $80\\%$ of $y$" means $x = 0.80y$, so $y = \\frac{x}{0.80} = 1.25x$ — measured against $x$, $y$ is $25\\%$ larger, not $20\\%$. A percent relationship read in reverse changes its number, because the base changes.',
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'At a company, $40\\%$ of the employees work remotely, and $25\\%$ of the remote employees live abroad. What percent of all employees are remote workers living abroad?',
    steps: [
      { label: 'Track the base of each percent', content: 'The $40\\%$ is a share of all employees; the $25\\%$ is a share of the remote group only — "of the remote employees" switches the base.' },
      { label: 'Chain the shares', content: '$0.40 \\times 0.25 = 0.10$, so $\\mathbf{10\\%}$ of all employees. On a staff of $200$: $80$ work remotely, and $25\\%$ of $80$ is $20$ people — indeed $20 \\div 200 = 10\\%$.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'A population grows by $25\\%$ to reach $500$. What was it before the growth?',
    answer: '**$400$.** The $500$ is the *after* value, so work backward by dividing: $\\text{original}\\times 1.25 = 500$, so $\\text{original} = 500 \\div 1.25 = 400$. Subtracting $25\\%$ of $500$ uses the wrong base.',
  },
  {
    type: 'checkpointQuestion',
    question: 'A price goes up $20\\%$, then the new price goes up another $50\\%$. By what single percent did it change overall?',
    answer: '**$80\\%$ increase.** Chain the factors: $1.20 \\times 1.50 = 1.80$, which is $80\\%$ above the start. Summing to $20 + 50 = 70\\%$ misses that the second increase acts on an already-raised price.',
  },
  {
    type: 'checkpointQuestion',
    question: 'A shirt is marked down from $\\$40$ to $\\$30$. What is the percent decrease?',
    answer: '**$25\\%$ decrease.** Percent change is $\\dfrac{\\text{change}}{\\text{original}}$ — the base is the *original* price. The change is $40 - 30 = 10$, so $10 \\div 40 = 0.25 = 25\\%$. Dividing by the new $\\$30$ instead gives about $33\\%$ — correct arithmetic on the wrong base.',
  },

  {
    type: 'text',
    content: '**The whole topic in one move:** convert each percent into a factor before anything else. A single change is a multiplication, a missing whole is a division, an "after" value works backward by division, and successive changes multiply their factors.',
  },
];
