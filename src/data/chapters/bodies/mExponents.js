/**
 * Learn lesson body — Exponents & Exponential Functions (Advanced Math).
 *
 * VOICE (adopted 2026-07-15, exemplar: mLinearEquations.js): professional
 * textbook narrative — teaches directly in flowing prose (concept, why it
 * works, how to apply, common errors) in the measured register of a
 * well-edited textbook. Concrete contexts framed plainly as examples;
 * extended metaphors, cute headings, and pep-talk are out. Headings name
 * the concept. Gated by bodies.test.js.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const mExponentsBlocks = [
  {
    type: 'text',
    content: "Shifts and stretches reshape a graph already in hand, but some quantities call for a different kind of function altogether — one that grows by repeated multiplication. That is what an exponent records: **how many copies of the base are multiplied together**. With that definition in place, little remains to memorize, because every rule follows from counting factors. Errors on this topic rarely come from difficult arithmetic; they come from applying a rule to a shape it does not fit — attempting to merge a *sum* of powers, for instance. When an expression looks unfamiliar, write out the factors and count them rather than reciting rules.",
  },

  { type: 'heading', content: 'The product, quotient, and power rules' },
  {
    type: 'text',
    content: "Write the factors out and count them. **Multiplying powers of the same base adds the exponents:** $x^3\\cdot x^4 = x^7$ — seven $x$'s in a row. **Dividing subtracts them:** $x^5 / x^2 = x^3$ — five $x$'s with two cancelled. **Raising a power to a power multiplies them:** $(x^3)^4 = x^{12}$ — four groups of three.",
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
    content: "A **negative exponent indicates a reciprocal**, not a negative value: $x^{-2} = \\dfrac{1}{x^2}$. The factor moves across the fraction bar, and the value remains positive. A **fractional exponent indicates a root**: $x^{1/2}=\\sqrt{x}$ and $x^{1/3}=\\sqrt[3]{x}$. In general $x^{m/n}$ reads \"power $m$, root $n$\" — the numerator is the power and the denominator is the root.",
  },

  { type: 'heading', content: 'Simplifying radicals' },
  {
    type: 'text',
    content: "Square roots obey a product rule: $\\sqrt{ab} = \\sqrt{a}\\cdot\\sqrt{b}$ for nonnegative $a$ and $b$. Read left to right, the rule simplifies a radical by **factoring out perfect squares**: $\\sqrt{12} = \\sqrt{4 \\cdot 3} = \\sqrt{4}\\cdot\\sqrt{3} = 2\\sqrt{3}$. Search the number for its largest perfect-square factor — $4$, $9$, $16$, $25$, $36$, and so on; the square comes out as its root, and the leftover factor stays under the radical. The same rule multiplies radicals directly, sometimes producing a whole number: $\\sqrt{2}\\cdot\\sqrt{8} = \\sqrt{16} = 4$. Division works the same way: $\\dfrac{\\sqrt{50}}{\\sqrt{2}} = \\sqrt{25} = 5$. The rule holds for products and quotients only — $\\sqrt{a + b}$ does **not** split into $\\sqrt{a} + \\sqrt{b}$, the same boundary that stops exponent rules at a plus sign.",
  },
  {
    type: 'text',
    content: "Read right to left, the product rule pushes a coefficient **back under** the radical: $2\\sqrt{3} = \\sqrt{4}\\cdot\\sqrt{3} = \\sqrt{12}$. The coefficient enters as its square. This reverse move compares a mixed form such as $3\\sqrt{5}$ against a plain number, or matches an answer choice written as a single radical. One scope note: rationalizing a denominator — rewriting $\\tfrac{1}{\\sqrt{2}}$ as $\\tfrac{\\sqrt{2}}{2}$ — is a classroom convention the test does not require; simplifying, multiplying, and recombining radicals as above covers the forms that appear.",
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Simplify $\\sqrt{72}$ completely.',
    steps: [
      { label: 'Factor out the largest perfect square', content: "$72 = 36 \\cdot 2$, and $36$ is a perfect square: $\\sqrt{72} = \\sqrt{36}\\cdot\\sqrt{2} = 6\\sqrt{2}$." },
      { label: 'Confirm nothing square remains', content: "The leftover factor is $2$, which has no perfect-square factor beyond $1$, so $6\\sqrt{2}$ is fully simplified. (Starting from a smaller square also works but takes a second pass: $\\sqrt{4 \\cdot 18} = 2\\sqrt{18}$ still hides a square inside $18 = 9 \\cdot 2$, and continuing gives $2 \\cdot 3\\sqrt{2} = 6\\sqrt{2}$.)" },
      { label: 'Check by reversing', content: "Push the coefficient back under the radical: $6\\sqrt{2} = \\sqrt{36}\\cdot\\sqrt{2} = \\sqrt{72}$. The round trip returns the original, confirming the simplification." },
    ],
  },

  { type: 'heading', content: 'Solving equations by matching bases' },
  {
    type: 'text',
    content: "When an equation has powers on both sides, rewrite everything over **one shared base**. Numbers such as $4$, $8$, and $16$ are all powers of $2$; once each side is a single power of the same base, the exponents alone form an ordinary equation. The step is justified because $2^{\\text{something}}$ takes each value exactly once — if two powers of $2$ are equal, their exponents must match. $4^x = 8$ becomes $2^{2x} = 2^{3}$, so $2x = 3$.",
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

  { type: 'heading', content: 'Changing the time unit' },
  {
    type: 'text',
    content: "If the input is measured in different units than the rate, rescale the exponent so that **one full rate-period advances it by exactly 1**. A yearly factor $b$ applied to months becomes $b^{t/12}$: after 12 months the exponent equals $1$, so exactly one yearly step has occurred. The characteristic error is guessing whether to multiply or divide by the $12$. Rather than guess, check that one whole rate-period moves the exponent to exactly $1$; the direction then settles itself. (A finer unit divides: more small steps per change.)",
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Simplify $2^{5}\\cdot 2^{-2}$.',
    steps: [
      { label: 'Add the exponents', content: 'Multiplying like bases adds exponents: $5+(-2)=3$.' },
      { label: 'Evaluate', content: "$2^{3}=8$. The negative exponent merely subtracted from the count — it did not make the result negative." },
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
      { label: 'Build the decay factor', content: "Losing 3% keeps 97%, so $b = 0.97$ — not $0.03$, which would remove 97% each year. Model: $V = 4000\\,(0.97)^{t}$." },
      { label: 'Evaluate at $t=2$', content: '$V = 4000\\,(0.97)^2 = 4000(0.9409) = \\$3763.60$.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'Rewrite $5x^{-2}$ with no negative exponent. Does the $5$ move too?',
    answer: "**$\\dfrac{5}{x^2}$.** The exponent applies only to the $x$, so **only $x^2$ moves across the fraction bar** — the $5$ stays in place. It would move only if the expression were written $(5x)^{-2}$.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A population grows 8% per year and starts at 500. What are $a$ and $b$ in $y = a\\cdot b^{t}$?',
    answer: "**$a = 500$ and $b = 1.08$.** The starting value fills $a$, and an 8% increase keeps 100% and adds 8%, giving $b = 1.08$. The answers $b = 8$ and $b = 0.08$ come from building the base out of the percent of change instead of the fraction kept.",
  },
  {
    type: 'checkpointQuestion',
    question: 'Solve $8^{x} = 32$ by rewriting both sides over a shared base.',
    answer: '**$x = \\dfrac{5}{3}$.** Both are powers of $2$: $8 = 2^3$ and $32 = 2^5$, so $2^{3x} = 2^{5}$. Equal powers of the same base force the exponents equal: $3x = 5$, so $x = \\dfrac{5}{3}$.',
  },

  {
    type: 'checkpointQuestion',
    question: 'Which is greater, $3\\sqrt{7}$ or $8$?',
    answer: "**$8$.** Push the coefficient under the radical so both numbers take the same form: $3\\sqrt{7} = \\sqrt{9}\\cdot\\sqrt{7} = \\sqrt{63}$, while $8 = \\sqrt{64}$. Since $63 < 64$, it follows that $3\\sqrt{7} < 8$. The coefficient enters as its square — writing $\\sqrt{21}$ comes from multiplying the $3$ in without squaring it.",
  },

  {
    type: 'text',
    content: "**In summary:** exponents count factors, so add, subtract, or multiply the counts as the operation requires; a negative exponent takes a reciprocal and a fractional exponent takes a root; radicals split over products and quotients — factor out perfect squares, and move a coefficient back under as its square — but never over a sum; equal powers of a shared base have equal exponents; and in $a\\cdot b^{t}$, $a$ is the starting value and $b$ is the factor applied at each step.",
  },
];
