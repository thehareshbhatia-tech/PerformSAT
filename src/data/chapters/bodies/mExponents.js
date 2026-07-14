/**
 * Learn lesson body — Exponents & Exponential Functions (Advanced Math).
 *
 * TUTOR VOICE (adopted 2026-07-14, exemplar: ./mLinearEquations.js): coaching
 * direct-address — talks TO the student, anticipates the mistake before it
 * happens, everyday anchor first ("an exponent is a tally") and rules second.
 * Lean structure unchanged. Gated by bodies.test.js. Math uses $...$ KaTeX.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const mExponentsBlocks = [
  {
    type: 'text',
    content: "An exponent is a tally — it counts **how many copies of the base got multiplied**. Hold onto that and there's almost nothing here to memorize: every rule falls out of counting. The points you lose on this topic won't come from hard arithmetic. They'll come from forcing a rule onto a shape it doesn't fit — like trying to merge a *sum* of powers. When an expression looks strange, stop reciting rules and count the factors. The traps evaporate.",
  },

  { type: 'heading', content: 'The three rules are just counting' },
  {
    type: 'text',
    content: "Write the factors out and count them. **Multiplying the same base? Add the tallies:** $x^3\\cdot x^4 = x^7$ — seven $x$'s in a row. **Dividing? Subtract:** $x^5 / x^2 = x^3$ — five $x$'s with two cancelled. **Power of a power? Multiply:** $(x^3)^4 = x^{12}$ — four groups of three.",
  },
  {
    type: 'table',
    headers: ['Situation', 'Do this to the exponents', 'Example'],
    rows: [
      ['Multiply, same base', 'add', '$x^3\\cdot x^4 = x^7$'],
      ['Divide, same base', 'subtract', '$x^5 / x^2 = x^3$'],
      ['Power of a power', 'multiply', '$(x^3)^4 = x^{12}$'],
    ],
  },
  {
    type: 'keyInsight',
    content: 'The outer exponent copies onto **every factor** being multiplied — never across a $+$ sign. $(x^3+x^5)$ does **not** collapse to $x^8$; added powers only factor, they never merge.',
  },

  { type: 'heading', content: 'Negative and fractional exponents' },
  {
    type: 'text',
    content: "A **negative exponent means reciprocal**, not negative: $x^{-2} = \\dfrac{1}{x^2}$. The factor hops across the fraction bar and that's the whole story — the value stays positive. A **fractional exponent means root**: $x^{1/2}=\\sqrt{x}$ and $x^{1/3}=\\sqrt[3]{x}$. In general $x^{m/n}$ reads \"power $m$, root $n$\" — top is the power, bottom is the root.",
  },

  { type: 'heading', content: 'Same base on both sides? Set the exponents equal' },
  {
    type: 'text',
    content: "When an equation has powers on both sides, rewrite everything over **one shared base**. Numbers like $4$, $8$, $16$ are all powers of $2$; once each side is a single power of the same base, the exponents alone form an ordinary equation. Why can you trust that? Because $2^{\\text{something}}$ hits each value exactly once — if two powers of $2$ are equal, their exponents have no choice but to match. $4^x = 8$ becomes $2^{2x} = 2^{3}$, so $2x = 3$.",
  },

  { type: 'heading', content: 'The exponential model $y = a\\cdot b^{t}$' },
  {
    type: 'text',
    content: "This is the shape behind every growth and decay word problem you'll meet. Only two slots carry meaning:",
  },
  {
    type: 'table',
    headers: ['Slot', 'Meaning', 'Read it as'],
    rows: [
      ['$a$', 'starting value (at $t=0$)', 'where you begin'],
      ['$b$', 'growth / decay factor per step', 'what you multiply by each time'],
    ],
  },
  {
    type: 'keyInsight',
    content: 'Build the base from the **fraction kept**, not the percent moved. A 5% increase → $b = 1.05$. A 5% decrease → $b = 0.95$. And watch the decimal: 2.4% growth → $b = 1.024$, not $1.24$.',
  },

  { type: 'heading', content: 'Changing the time unit' },
  {
    type: 'text',
    content: "If the input is measured in different units than the rate, rescale the exponent so **one full rate-period advances it by exactly 1**. A yearly factor $b$ read monthly becomes $b^{t/12}$: after 12 months the exponent is $1$, so exactly one yearly step has happened. Here's where this goes wrong: you guess whether to multiply or divide by the $12$. Don't guess — check that one whole rate-period moves the exponent to exactly $1$, and the direction settles itself. (Finer unit → divide: more small steps per change.)",
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Simplify $2^{5}\\cdot 2^{-2}$.',
    steps: [
      { label: 'Same base, add the tallies', content: 'Multiplying like bases adds exponents: $5+(-2)=3$.' },
      { label: 'Evaluate', content: "$2^{3}=8$. The negative exponent just subtracted from the count — it didn't make anything negative." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Which is equivalent to $\\dfrac{(x^3)^4}{x^5}$ for $x>0$?',
    steps: [
      { label: 'Power of a power', content: 'Multiply the tallies: $(x^3)^4 = x^{12}$.' },
      { label: 'Divide, same base', content: 'Subtract the tallies: $\\dfrac{x^{12}}{x^5} = x^{12-5} = x^{7}$.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Solve $9^{x} = 27$.',
    steps: [
      { label: 'Find a shared base', content: 'Both are powers of $3$: $9 = 3^2$ and $27 = 3^3$, so $3^{2x} = 3^{3}$.' },
      { label: 'Equate the exponents', content: 'Same base on both sides forces $2x = 3$.' },
      { label: 'Solve', content: '$x = \\dfrac{3}{2}$.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'A $\\$4{,}000$ investment loses 3% of its value each year. Write a model for its value $V$ after $t$ years, then say what it is worth after 2 years.',
    steps: [
      { label: 'Start value', content: '$a = 4000$ — the amount at $t = 0$.' },
      { label: 'Decay factor', content: "Losing 3% keeps 97%, so $b = 0.97$ — not $0.03$, which would wipe out 97% a year. Model: $V = 4000\\,(0.97)^{t}$." },
      { label: 'Evaluate at $t=2$', content: '$V = 4000\\,(0.97)^2 = 4000(0.9409) = \\$3763.60$.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'Rewrite $5x^{-2}$ with no negative exponent. Does the $5$ move too?',
    answer: "$\\dfrac{5}{x^2}$. The exponent only owns the $x$, so **only $x^2$ hops the fraction bar** — the $5$ stays put. It would move only if the problem had written $(5x)^{-2}$.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A population grows 8% per year and starts at 500. What are $a$ and $b$ in $y = a\\cdot b^{t}$?',
    answer: "$a = 500$ (where you begin) and $b = 1.08$ (an 8% increase keeps 100% and adds 8%). If you reached for $b = 8$ or $b = 0.08$, you built the base from the percent moved instead of the fraction kept.",
  },
  {
    type: 'checkpointQuestion',
    question: 'Solve $8^{x} = 32$ by rewriting both sides over a shared base.',
    answer: '$x = \\dfrac{5}{3}$. Both are powers of $2$: $8 = 2^3$ and $32 = 2^5$, so $2^{3x} = 2^{5}$. Same base forces the exponents equal: $3x = 5$, so $x = \\dfrac{5}{3}$.',
  },

  {
    type: 'text',
    content: "**The whole skill:** exponents are tallies, so add / subtract / multiply the counts; a negative exponent flips, a fraction takes a root; same base → equate exponents; and in $a\\cdot b^{t}$, $a$ is where you start and $b$ is what you keep multiplying by.",
  },
];
