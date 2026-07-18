/**
 * Learn lesson body — Percents (Problem-Solving & Data Analysis).
 *
 * VOICE v4 (adopted 2026-07-18, exemplar: bodies/centralIdeas.js):
 * practiced-tutor register — developed 2-5 sentence paragraphs with
 * connective tissue; every rule earns its "because"; student-psychology
 * named concretely; math teaching is example-led; varied rhythm.
 *
 * COMPOSED MODE (2026-07-18 — THIS FILE IS THE STRUCTURE EXEMPLAR, pending
 * user approval before corpus rollout): opens with a `chapterOpener` block,
 * which turns on authored-textbook furniture in SectionContent — numbered
 * sections, numbered worked examples (interspersed in their concept section,
 * not batched), numbered+captioned figures referenced in prose, margin-note
 * `aside` blocks, and a closing `summary`. Non-composed chapters omit the
 * opener and render exactly as before.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const mPercentsBlocks = [
  {
    type: 'chapterOpener',
    lede: 'A percent is the most common special case of the ratio reasoning we just built — a ratio whose base is fixed at $100$. The arithmetic is rarely where points are lost; the real decision is whether to multiply, divide, or chain, and above all, off *which* base. One habit settles most of it.',
  },

  { type: 'heading', content: 'A percent is a multiplier' },
  {
    type: 'text',
    content: "Take a question the test asks constantly: a jacket priced at $x$ dollars is marked up by $18\\%$, and you need the new price in terms of $x$. The instinct from school is to handle the increase separately — find $18\\%$ of $x$, then add it back on. That works, but look at what it becomes when you write it as one step: $x + 0.18x = 1.18x$. One factor, $\\times 1.18$, does the whole job.",
  },
  {
    type: 'text',
    content: "Why $1.18$? Because the new price keeps all of the original — that's the $1$ — plus $18\\%$ more on top — that's the $.18$. A decrease builds its factor the same way, but from what's *left*: drop a price by $30\\%$ and you keep $70\\%$ of it, so the factor is $\\times 0.70$. Students who reach for $\\times 0.30$ have built the factor from the part that's *gone*, and the test always lists the answer that mistake produces.",
  },
  {
    type: 'keyInsight',
    content: 'A decrease keeps the remainder: down $30\\%$ is $\\times 0.70$; down $80\\%$ is $\\times 0.20$. Build the factor from what **remains**.',
  },
  {
    type: 'diagramRef',
    visualType: 'percentChangeDiagram',
    description: 'A quantity before and after a percent change — one multiplier carries the old value to the new one, and dividing by it walks the change backward.',
  },
  {
    type: 'text',
    content: "Figure 1 is the whole chapter in miniature: translating each percent phrase into a single factor the moment you read it, before any other arithmetic. Everything that follows is that one habit applied in different directions — and the table below is the phrasebook.",
  },
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
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'A jacket costs $\\$80$. During a sale the price drops by $25\\%$. What is the sale price?',
    steps: [
      { label: 'Build the factor', content: 'Down $25\\%$ keeps $75\\%$, so the factor is $\\times 0.75$.' },
      { label: 'Multiply', content: '$80 \\times 0.75 = 60$. The sale price is $\\$60$.' },
    ],
  },

  { type: 'heading', content: 'Part, whole, and percent' },
  {
    type: 'text',
    content: "Here is the form that trips the reflex: $12$ is $30\\%$ of what number? Two numbers sit in the sentence, and the instinct is to multiply them — $12 \\times 0.30 = 3.6$ — but $3.6$ cannot be the whole, because a whole can never be smaller than its own part. The mistake wasn't arithmetic; it was skipping the naming step. Every static percent problem fits one equation, $\\text{part} = \\frac{p}{100}\\times\\text{whole}$, with two of the three quantities given — and which one is *missing* decides the operation.",
  },
  {
    type: 'text',
    content: 'Here the whole is missing, and a missing whole calls for **division**: $12 = 0.30 \\times \\text{whole}$, so $\\text{whole} = 12 \\div 0.30 = 40$. Label the missing quantity before touching the numbers, and the multiply-whatever-is-given reflex never gets the chance to fire.',
  },
  {
    type: 'aside',
    kind: 'watch',
    content: "If an answer comes out **smaller than a number the problem already handed you** as a part, you multiplied where you should have divided. A whole is never smaller than its part — that impossibility is the fastest check you have.",
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
    content: "A price **after** a $20\\%$ increase is $\\$60$, and the question asks for the original. The natural move is to take $20\\%$ off: $60 \\times 0.80 = 48$. But that $20\\%$ was a percent *of the original*, not of the new price — the increase was built on the smaller number, so removing $20\\%$ of the larger one takes off too much. Check it: $48 \\times 1.20 = 57.60$, not $60$. A value near $48$ is nonetheless routinely placed among the answer choices, because subtracting from the number in front of you is the path of least resistance.",
  },
  {
    type: 'text',
    content: 'The reliable route is to write the change *forward* and undo it by division: $\\text{original} \\times 1.20 = 60$, so $\\text{original} = 60 \\div 1.20 = 50$. The signal of a reverse problem is that the given number is the *result* of the change, not the start — on the word "after," write the forward equation and divide.',
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
    content: "Now the situation the multiplier habit was built for. A store marks a jacket up $20\\%$, and a rewards card then takes $25\\%$ off the marked-up price. Most students work it one step at a time: a $\\$100$ jacket goes to $\\$120$, then $25\\%$ of $\\$120$ is $\\$30$, take it off, $\\$90$. The answer is right, but the route created two intermediate values, each one a chance to slip — and on the real test, the wrong base (taking $25\\%$ off the *original* $\\$100$) is always sitting among the choices.",
  },
  {
    type: 'text',
    content: "With multipliers, the whole history is one product: $1.20 \\times 0.75 = 0.90$. The customer pays $90\\%$ of the original price — a markup and a discount collapsed into a single factor, no intermediate values anywhere. And notice what the product just proved: up $20\\%$ then down $25\\%$ is *not* down $5\\%$. Percents never add across steps, because each change acts on whatever value the previous change produced.",
  },
  {
    type: 'tip',
    content: "For chained percent changes, skip the intermediate values entirely: **multiply the factors and read the total change off the product.** A sales tax on top? Append $\\times 1.05$ to the same chain.",
  },
  {
    type: 'text',
    content: "The same product settles the most tempting cancellation of all: up $10\\%$ then down $10\\%$ multiplies out to $1.10 \\times 0.90 = 0.99$, a net $1\\%$ loss. An increase and a decrease by the same percent always finish below the starting value, because the decrease acts on the larger, post-increase number — it removes more than the increase added.",
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
    content: 'Suppose $40\\%$ of a class walks to school, and $20\\%$ of those walkers carry umbrellas. Asked what share of the whole class carries an umbrella on foot, plenty of students answer $20\\%$ — but that $20\\%$ never applied to the class. The phrase "of those" announced a base switch to the walkers, so the second percent chains onto the first as a factor: $0.40 \\times 0.20 = 0.08$, which is $8\\%$ of the whole class. A percent *of* a percent always multiplies, because the second percent acts only on the group the first one carved out.',
  },
  {
    type: 'text',
    content: 'When the rate is a variable, the factor divides by $100$ explicitly: a price of $x$ dollars reduced by $p$ percent is $x\\left(1 - \\frac{p}{100}\\right)$, not $x(1 - p)$. A test value exposes the difference at once — at $p = 20$, the first gives $0.8x$, while $x(1 - 20) = -19x$.',
  },
  {
    type: 'aside',
    kind: 'remember',
    content: 'A percent relationship changes its number when read in reverse, because the base moves. "$x$ is $80\\%$ of $y$" means $x = 0.80y$, so $y = \\frac{x}{0.80} = 1.25x$: measured against $x$, $y$ is $25\\%$ larger, not $20\\%$. The $20\\%$ gap was measured against $y$; the $25\\%$ against the smaller $x$.',
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
    type: 'summary',
    title: 'The chapter in five moves',
    points: [
      'Turn every percent into a **factor** the instant you read it: up $p\\%$ is $\\times(1+\\frac{p}{100})$, down $p\\%$ is $\\times(1-\\frac{p}{100})$.',
      'A single change **multiplies**; a missing whole **divides**; an "after" value works **backward** by division.',
      'Track the **base** each factor acts on — "of those" and "after" are the words that switch it.',
      'Successive changes **multiply** their factors into one product. They never add, and same-size up-then-down always finishes below the start.',
      'Percent change is always measured against the **original**, so a relationship read in reverse changes its number.',
    ],
  },
];
