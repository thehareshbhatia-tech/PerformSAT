/**
 * Learn lesson body — Exponents & Exponential Functions (Advanced Math).
 *
 * VOICE v3 (adopted 2026-07-17, exemplar: bodies/centralIdeas.js): scannable
 * instructional register — direct address, contractions, 1-3 sentence text
 * blocks, list blocks for criteria, steps blocks for procedures; no
 * analogies, no pep-talk, no emojis. All substance of the v2 textbook
 * version preserved.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const mExponentsBlocks = [
  {
    type: 'text',
    content: "Shifts and stretches reshape a graph you already have. Some quantities call for a different kind of function altogether — one that grows by repeated multiplication.",
  },
  {
    type: 'text',
    content: "That's what an exponent records: **how many copies of the base are multiplied together**. Hold onto that definition and there's little left to memorize, because every rule follows from counting factors.",
  },
  {
    type: 'text',
    content: "Errors here rarely come from hard arithmetic. They come from applying a rule to a shape it doesn't fit — trying to merge a *sum* of powers, for instance. When an expression looks unfamiliar, write out the factors and count them instead of reciting rules.",
  },

  { type: 'heading', content: 'The product, quotient, and power rules' },
  {
    type: 'text',
    content: "Write the factors out and count them.",
  },
  {
    type: 'list',
    items: [
      "**Multiply, same base — add the exponents:** $x^3\\cdot x^4 = x^7$, seven $x$'s in a row",
      "**Divide, same base — subtract them:** $x^5 / x^2 = x^3$, five $x$'s with two cancelled",
      '**Power of a power — multiply them:** $(x^3)^4 = x^{12}$, four groups of three',
    ],
  },
  {
    type: 'table',
    headers: ['Situation', 'Rule for the exponents', 'Example'],
    rows: [
      ['Multiply, same base', 'add', '$x^3\\cdot x^4 = x^7$'],
      ['Divide, same base', 'subtract', '$x^5 / x^2 = x^3$'],
      ['Power of a power', 'multiply', '$(x^3)^4 = x^{12}$'],
    ],
  },
  {
    type: 'keyInsight',
    content: 'An outer exponent distributes onto **every factor** in a product — never across a $+$ sign. $(x^3+x^5)$ does **not** collapse to $x^8$; a sum of powers can be factored, but its terms never merge.',
  },

  { type: 'heading', content: 'Negative and fractional exponents' },
  {
    type: 'text',
    content: "A **negative exponent means a reciprocal**, not a negative value: $x^{-2} = \\dfrac{1}{x^2}$. The factor moves across the fraction bar, and the value stays positive.",
  },
  {
    type: 'text',
    content: "A **fractional exponent means a root**: $x^{1/2}=\\sqrt{x}$ and $x^{1/3}=\\sqrt[3]{x}$. In general, $x^{m/n}$ reads \"power $m$, root $n$\" — the numerator is the power, the denominator is the root.",
  },

  { type: 'heading', content: 'Simplifying radicals' },
  {
    type: 'text',
    content: "Square roots obey a product rule: $\\sqrt{ab} = \\sqrt{a}\\cdot\\sqrt{b}$ for nonnegative $a$ and $b$. Read left to right, it simplifies a radical by **factoring out perfect squares**.",
  },
  {
    type: 'text',
    content: "$\\sqrt{12} = \\sqrt{4 \\cdot 3} = \\sqrt{4}\\cdot\\sqrt{3} = 2\\sqrt{3}$. Search the number for its largest perfect-square factor — $4$, $9$, $16$, $25$, $36$, and so on. The square comes out as its root; the leftover factor stays under the radical.",
  },
  {
    type: 'list',
    title: 'The same rule works on whole radicals:',
    items: [
      'Multiply them directly — sometimes a whole number appears: $\\sqrt{2}\\cdot\\sqrt{8} = \\sqrt{16} = 4$',
      'Divide the same way: $\\dfrac{\\sqrt{50}}{\\sqrt{2}} = \\sqrt{25} = 5$',
    ],
  },
  {
    type: 'text',
    content: "The rule holds for products and quotients only. $\\sqrt{a + b}$ does **not** split into $\\sqrt{a} + \\sqrt{b}$ — the same boundary that stops exponent rules at a plus sign.",
  },
  {
    type: 'text',
    content: "Read right to left, the product rule pushes a coefficient **back under** the radical: $2\\sqrt{3} = \\sqrt{4}\\cdot\\sqrt{3} = \\sqrt{12}$. The coefficient enters as its square.",
  },
  {
    type: 'text',
    content: "This reverse move compares a mixed form like $3\\sqrt{5}$ against a plain number, or matches an answer choice written as a single radical.",
  },
  {
    type: 'text',
    content: "One scope note: rationalizing a denominator — rewriting $\\tfrac{1}{\\sqrt{2}}$ as $\\tfrac{\\sqrt{2}}{2}$ — is a classroom convention the test doesn't require. Simplifying, multiplying, and recombining radicals as above covers the forms that appear.",
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Simplify $\\sqrt{72}$ completely.',
    steps: [
      { label: 'Factor out the largest perfect square', content: "$72 = 36 \\cdot 2$, and $36$ is a perfect square: $\\sqrt{72} = \\sqrt{36}\\cdot\\sqrt{2} = 6\\sqrt{2}$." },
      { label: 'Confirm nothing square remains', content: "The leftover factor is $2$, which has no perfect-square factor beyond $1$, so $6\\sqrt{2}$ is fully simplified. (Starting from a smaller square also works but takes a second pass: $\\sqrt{4 \\cdot 18} = 2\\sqrt{18}$ still hides a square inside $18 = 9 \\cdot 2$, and continuing gives $2 \\cdot 3\\sqrt{2} = 6\\sqrt{2}$.)" },
      { label: 'Check by reversing', content: "Push the coefficient back under the radical: $6\\sqrt{2} = \\sqrt{36}\\cdot\\sqrt{2} = \\sqrt{72}$. The round trip returns the original, so the simplification holds." },
    ],
  },

  { type: 'heading', content: 'Solving equations by matching bases' },
  {
    type: 'text',
    content: "When an equation has powers on both sides, rewrite everything over **one shared base**. Numbers like $4$, $8$, and $16$ are all powers of $2$.",
  },
  {
    type: 'text',
    content: "Once each side is a single power of the same base, the exponents alone form an ordinary equation: $4^x = 8$ becomes $2^{2x} = 2^{3}$, so $2x = 3$.",
  },
  {
    type: 'text',
    content: "The step is justified because $2^{\\text{something}}$ takes each value exactly once — if two powers of $2$ are equal, their exponents have to match.",
  },

  { type: 'heading', content: 'The exponential model $y = a\\cdot b^{t}$' },
  {
    type: 'text',
    content: "This form underlies every growth and decay word problem. Only two quantities carry meaning:",
  },
  {
    type: 'table',
    headers: ['Slot', 'Meaning', 'Read it as'],
    rows: [
      ['$a$', 'starting value (at $t=0$)', 'the initial value'],
      ['$b$', 'growth / decay factor per step', 'the multiplier applied each step'],
    ],
  },
  {
    type: 'keyInsight',
    content: 'Build the base from the **fraction kept**, not the percent of change. A 5% increase gives $b = 1.05$; a 5% decrease gives $b = 0.95$. Place the decimal carefully: 2.4% growth gives $b = 1.024$, not $1.24$.',
  },
  {
    type: 'diagramRef',
    visualType: 'exponentialGrowthDiagram',
    description: "Growth and decay on the same axes: a base $b>1$ climbs faster with every step, while a base between $0$ and $1$ falls toward the x-axis — the size of $b$ alone decides which shape you get.",
  },

  { type: 'heading', content: 'Changing the time unit' },
  {
    type: 'text',
    content: "If the input is measured in different units than the rate, rescale the exponent so that **one full rate-period advances it by exactly 1**.",
  },
  {
    type: 'text',
    content: "A yearly factor $b$ applied to months becomes $b^{t/12}$: after 12 months the exponent equals $1$, so exactly one yearly step has happened.",
  },
  {
    type: 'text',
    content: "The characteristic error is guessing whether to multiply or divide by the $12$. Don't guess — check that one whole rate-period moves the exponent to exactly $1$, and the direction settles itself. (A finer unit divides: more small steps per change.)",
  },

  { type: 'heading', content: 'How to approach these questions' },
  {
    type: 'steps',
    items: [
      '**Name the operation.** Multiplying like bases adds exponents, dividing subtracts, a power of a power multiplies — and no rule crosses a plus sign.',
      '**Translate unusual exponents.** Negative means reciprocal; fractional means power over root.',
      '**Powers on both sides? Find a shared base.** Rewrite each side over it, then set the exponents equal.',
      '**Growth or decay story? Build $y = a\\cdot b^{t}$.** $a$ is the starting value, $b$ is the fraction kept each step — and rescale the exponent if the time unit differs from the rate.',
      '**Unfamiliar expression? Count factors.** Write the powers out and the right rule reappears on its own.',
    ],
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Simplify $2^{5}\\cdot 2^{-2}$.',
    steps: [
      { label: 'Add the exponents', content: 'Multiplying like bases adds exponents: $5+(-2)=3$.' },
      { label: 'Evaluate', content: "$2^{3}=8$. The negative exponent only subtracted from the count — it didn't make the result negative." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Which is equivalent to $\\dfrac{(x^3)^4}{x^5}$ for $x>0$?',
    steps: [
      { label: 'Apply the power rule', content: 'Multiply the exponents: $(x^3)^4 = x^{12}$.' },
      { label: 'Apply the quotient rule', content: 'Subtract the exponents: $\\dfrac{x^{12}}{x^5} = x^{12-5} = x^{7}$.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Solve $9^{x} = 27$.',
    steps: [
      { label: 'Find a shared base', content: 'Both are powers of $3$: $9 = 3^2$ and $27 = 3^3$, so $3^{2x} = 3^{3}$.' },
      { label: 'Equate the exponents', content: 'Equal powers of the same base force $2x = 3$.' },
      { label: 'Solve', content: '$x = \\dfrac{3}{2}$.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'A $\\$4{,}000$ investment loses 3% of its value each year. Write a model for its value $V$ after $t$ years, then say what it is worth after 2 years.',
    steps: [
      { label: 'Identify the start value', content: '$a = 4000$ — the amount at $t = 0$.' },
      { label: 'Build the decay factor', content: "Losing 3% keeps 97%, so $b = 0.97$ — not $0.03$, which would strip away 97% each year. Model: $V = 4000\\,(0.97)^{t}$." },
      { label: 'Evaluate at $t=2$', content: '$V = 4000\\,(0.97)^2 = 4000(0.9409) = \\$3763.60$.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'Rewrite $5x^{-2}$ with no negative exponent. Does the $5$ move too?',
    answer: "**$\\dfrac{5}{x^2}$.** The exponent applies only to the $x$, so **only $x^2$ moves across the fraction bar** — the $5$ stays put. It would move only if the expression were written $(5x)^{-2}$.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A population grows 8% per year and starts at 500. What are $a$ and $b$ in $y = a\\cdot b^{t}$?',
    answer: "**$a = 500$ and $b = 1.08$.** The starting value fills $a$, and an 8% increase keeps 100% and adds 8%, so $b = 1.08$. The answers $b = 8$ and $b = 0.08$ come from building the base out of the percent of change instead of the fraction kept.",
  },
  {
    type: 'checkpointQuestion',
    question: 'Solve $8^{x} = 32$ by rewriting both sides over a shared base.',
    answer: '**$x = \\dfrac{5}{3}$.** Both are powers of $2$: $8 = 2^3$ and $32 = 2^5$, so $2^{3x} = 2^{5}$. Equal powers of the same base force the exponents equal: $3x = 5$, so $x = \\dfrac{5}{3}$.',
  },

  {
    type: 'checkpointQuestion',
    question: 'Which is greater, $3\\sqrt{7}$ or $8$?',
    answer: "**$8$.** Push the coefficient under the radical so both numbers take the same form: $3\\sqrt{7} = \\sqrt{9}\\cdot\\sqrt{7} = \\sqrt{63}$, while $8 = \\sqrt{64}$. Since $63 < 64$, $3\\sqrt{7} < 8$. The coefficient enters as its square — writing $\\sqrt{21}$ comes from multiplying the $3$ in without squaring it.",
  },

  {
    type: 'list',
    title: '**In summary:**',
    items: [
      'Exponents count factors — add, subtract, or multiply the counts as the operation requires.',
      'A negative exponent takes a reciprocal; a fractional exponent takes a root.',
      'Radicals split over products and quotients — factor out perfect squares, move a coefficient back under as its square — but never over a sum.',
      'Equal powers of a shared base have equal exponents.',
      'In $a\\cdot b^{t}$, $a$ is the starting value and $b$ is the factor applied each step.',
    ],
  },
];
