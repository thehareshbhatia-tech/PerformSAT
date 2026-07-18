/**
 * Learn lesson body — Exponents & Exponential Functions (Advanced Math).
 *
 * VOICE v4 (adopted 2026-07-18, exemplar: bodies/centralIdeas.js): practiced-tutor
 * register — developed 2-5 sentence paragraphs with connective tissue; every rule
 * earns its "because"; student-psychology named concretely; math teaching is
 * example-led; varied rhythm, no aphorism-per-block. Bans carried from v3: no
 * analogies, no pep talk, no exclamation marks, no emojis, no
 * test-personification. All v3 teaching claims preserved.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const mExponentsBlocks = [
  {
    type: 'text',
    content: "Shifts and stretches reshape a graph you already have. Some quantities call for a different kind of function altogether — one that grows by repeated multiplication — and that's what an exponent records: **how many copies of the base are multiplied together**. Hold onto that definition and there's little left to memorize, because every rule in this chapter follows from counting factors.",
  },
  {
    type: 'text',
    content: "It's worth saying up front where the points are actually lost, because it's rarely the arithmetic. Misses here come from applying a rule to a shape it doesn't fit — trying to merge a *sum* of powers, for instance, with a rule built for products. So whenever an expression looks unfamiliar, don't recite rules at it; write out the factors and count them.",
  },

  { type: 'heading', content: 'The product, quotient, and power rules' },
  {
    type: 'text',
    content: "Take $x^3\\cdot x^4$ and write the factors out: three $x$'s followed by four more, seven $x$'s in a row, so $x^3\\cdot x^4 = x^7$. Multiplying like bases *adds* the exponents, because multiplication just pools the factor counts. Division runs the count backward — $x^5 / x^2$ is five $x$'s with two cancelled, leaving $x^3$ — so dividing subtracts. And a power of a power repeats the whole count: $(x^3)^4$ is four groups of three, twelve factors, $x^{12}$, so stacked exponents multiply.",
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
    content: 'An outer exponent distributes onto **every factor** in a product — never across a $+$ sign, because the counting argument only works when the whole expression is a product. $(x^3+x^5)$ does **not** collapse to $x^8$; a sum of powers can be factored, but its terms never merge.',
  },

  { type: 'heading', content: 'Negative and fractional exponents' },
  {
    type: 'text',
    content: "Run the quotient rule past zero and see what it produces: $x^2 / x^5 = x^{-3}$ by subtraction, but writing out the factors shows two $x$'s cancelling against five, leaving three in the *denominator*. So a **negative exponent means a reciprocal**, not a negative value: $x^{-2} = \\dfrac{1}{x^2}$. The factor moves across the fraction bar, and the value stays positive.",
  },
  {
    type: 'text',
    content: "A **fractional exponent means a root**, and the product rule says why: $x^{1/2}\\cdot x^{1/2} = x^1$, so $x^{1/2}$ has to be the number that multiplies by itself to give $x$ — that is, $\\sqrt{x}$. Likewise $x^{1/3}=\\sqrt[3]{x}$. In general, $x^{m/n}$ reads \"power $m$, root $n$\" — the numerator is the power, the denominator is the root.",
  },

  { type: 'heading', content: 'Simplifying radicals' },
  {
    type: 'text',
    content: "Square roots obey a product rule of their own: $\\sqrt{ab} = \\sqrt{a}\\cdot\\sqrt{b}$ for nonnegative $a$ and $b$. Read left to right, it simplifies a radical by **factoring out perfect squares**: $\\sqrt{12} = \\sqrt{4 \\cdot 3} = \\sqrt{4}\\cdot\\sqrt{3} = 2\\sqrt{3}$. Search the number for its largest perfect-square factor — $4$, $9$, $16$, $25$, $36$, and so on — and the square comes out as its root while the leftover factor stays under the radical.",
  },
  {
    type: 'text',
    content: "The same rule multiplies and divides whole radicals directly, and sometimes a plain number falls out: $\\sqrt{2}\\cdot\\sqrt{8} = \\sqrt{16} = 4$, and $\\dfrac{\\sqrt{50}}{\\sqrt{2}} = \\sqrt{25} = 5$. But the rule holds for products and quotients only — $\\sqrt{a + b}$ does **not** split into $\\sqrt{a} + \\sqrt{b}$. It's the same boundary that stops exponent rules at a plus sign, and for the same reason.",
  },
  {
    type: 'text',
    content: "Read right to left, the product rule pushes a coefficient **back under** the radical, and the coefficient enters as its square: $2\\sqrt{3} = \\sqrt{4}\\cdot\\sqrt{3} = \\sqrt{12}$. This reverse move is how you compare a mixed form like $3\\sqrt{5}$ against a plain number, or match an answer choice written as a single radical. One scope note: rationalizing a denominator — rewriting $\\tfrac{1}{\\sqrt{2}}$ as $\\tfrac{\\sqrt{2}}{2}$ — is a classroom convention the test doesn't require, so simplifying, multiplying, and recombining radicals as above covers the forms that appear.",
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
    content: "Nothing about $4^x = 8$ yields to ordinary isolation — the $x$ is trapped in an exponent, out of reach of adding or dividing. The route in is to rewrite everything over **one shared base**: $4$, $8$, and $16$ are all powers of $2$, so $4^x = 8$ becomes $2^{2x} = 2^{3}$. Once each side is a single power of the same base, the exponents alone form an ordinary equation: $2x = 3$.",
  },
  {
    type: 'text',
    content: "Why is equating the exponents legal? Because $2^{\\text{something}}$ takes each value exactly once — if two powers of $2$ are equal, their exponents have no choice but to match.",
  },

  { type: 'heading', content: 'The exponential model $y = a\\cdot b^{t}$' },
  {
    type: 'text',
    content: "Repeated multiplication is exactly what the form $y = a\\cdot b^{t}$ records: start at $a$, apply the factor $b$ once per step, and after $t$ steps the exponent has counted the applications. This form underlies every growth and decay word problem, and only two of its quantities carry meaning:",
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
    content: 'Build the base from the **fraction kept**, not the percent of change. A 5% increase keeps everything and adds 5%, so $b = 1.05$; a 5% decrease keeps 95%, so $b = 0.95$. Place the decimal carefully: 2.4% growth gives $b = 1.024$, not $1.24$.',
  },
  {
    type: 'diagramRef',
    visualType: 'exponentialGrowthDiagram',
    description: "Growth and decay on the same axes: a base $b>1$ climbs faster with every step, while a base between $0$ and $1$ falls toward the x-axis — the size of $b$ alone decides which shape you get.",
  },

  { type: 'heading', content: 'Changing the time unit' },
  {
    type: 'text',
    content: "When the input is measured in different units than the rate — a yearly rate, an input in months — rescale the exponent so that **one full rate-period advances it by exactly 1**. A yearly factor $b$ applied to months becomes $b^{t/12}$: after 12 months the exponent equals $1$, so exactly one yearly step has happened, which is what a year should do.",
  },
  {
    type: 'text',
    content: "The characteristic error here is guessing whether to multiply or divide by the $12$, and students guess because both look plausible on the page. Don't guess — run the check instead: one whole rate-period must move the exponent to exactly $1$, and the direction settles itself. (A finer unit divides: more small steps per change.)",
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
