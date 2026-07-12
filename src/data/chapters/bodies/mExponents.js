/**
 * Learn lesson body — Exponents & Exponential Functions (Advanced Math).
 *
 * Lean "review / cheat-sheet" style (see gSubjectVerbAgreement.js — the VOICE +
 * SHAPE EXEMPLAR): one SAT skill, plain language, one idea per short section, a
 * couple of worked examples, then a couple of check-yourself questions. Gated by
 * bodies.test.js (lean contract). Math uses $...$ KaTeX.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const mExponentsBlocks = [
  {
    type: 'text',
    content: 'An exponent is just a **count of how many copies of the base are multiplied**. Every rule below — and every SAT exponent question — falls out of that one idea, so there is almost nothing to memorize. Where students lose points is not hard arithmetic but forcing a rule onto a shape it does not fit, like trying to merge a *sum* of powers. Fall back to counting factors and those traps disappear.',
  },

  { type: 'heading', content: 'The three rules are just counting' },
  {
    type: 'text',
    content: 'Write the factors out and count them. **Multiply same base → add the counts** ($x^3\\cdot x^4 = x^7$, seven $x$\'s in a row). **Divide → subtract** ($x^5 / x^2 = x^3$, five $x$\'s with two cancelled). **Power of a power → multiply** ($(x^3)^4 = x^{12}$, four groups of three).',
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
    content: 'The outer exponent copies onto **every factor** being multiplied — never over a $+$ sign. $(x^3+x^5)$ does **not** collapse to $x^8$; added powers only factor, they never merge.',
  },

  { type: 'heading', content: 'Negative and fractional exponents' },
  {
    type: 'text',
    content: 'A **negative exponent means reciprocal**: $x^{-2} = \\dfrac{1}{x^2}$ (the factor just moves across the fraction bar — it does not make the value negative). A **fractional exponent means root**: $x^{1/2}=\\sqrt{x}$ and $x^{1/3}=\\sqrt[3]{x}$. In general $x^{m/n}$ is "power $m$, root $n$" — top is the power, bottom is the root.',
  },

  { type: 'heading', content: 'Same base on both sides? Set the exponents equal' },
  {
    type: 'text',
    content: 'When an equation has powers on both sides, rewrite everything over **one shared base**. Numbers like $4$, $8$, $16$ are all powers of $2$; once each side is a single power of the same base, the exponents form an ordinary equation. This works because an exponential base is one-to-one — $2^{\\text{something}}$ hits each value exactly once, so if two powers of $2$ are equal, their exponents must be equal too. $4^x = 8$ becomes $2^{2x} = 2^{3}$, so $2x = 3$.',
  },

  { type: 'heading', content: 'The exponential model $y = a\\cdot b^{t}$' },
  {
    type: 'text',
    content: 'This is the shape behind every growth/decay word problem. It has just two slots that carry meaning:',
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
    content: 'The base is the **fraction kept**, not the percent moved. A 5% increase → $b = 1.05$. A 5% decrease → $b = 0.95$. Watch the decimal: 2.4% growth → $b = 1.024$, not $1.24$.',
  },

  { type: 'heading', content: 'Changing the time unit' },
  {
    type: 'text',
    content: 'If the input is measured in different units than the rate, rescale the exponent so **one full rate-period advances it by exactly 1**. A yearly factor $b$ read monthly becomes $b^{t/12}$: after 12 months the exponent is $1$, so exactly one yearly step has happened. Finer unit → **divide** in the exponent (more small steps per change). The trap is guessing whether to multiply or divide by that number; anchor instead on the checkpoint that one whole rate-period must move the exponent by exactly $1$, and the direction settles itself.',
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Simplify $2^{5}\\cdot 2^{-2}$.',
    steps: [
      { label: 'Same base, add the counts', content: 'Multiplying like bases adds exponents: $5+(-2)=3$.' },
      { label: 'Evaluate', content: '$2^{3}=8$. (The negative exponent just subtracts from the count — it does not make the answer negative.)' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Which is equivalent to $\\dfrac{(x^3)^4}{x^5}$ for $x>0$?',
    steps: [
      { label: 'Power of a power', content: 'Multiply the counts: $(x^3)^4 = x^{12}$.' },
      { label: 'Divide, same base', content: 'Subtract the counts: $\\dfrac{x^{12}}{x^5} = x^{12-5} = x^{7}$.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Solve $9^{x} = 27$.',
    steps: [
      { label: 'Find a shared base', content: 'Both are powers of $3$: $9 = 3^2$ and $27 = 3^3$, so $3^{2x} = 3^{3}$.' },
      { label: 'Equate the exponents', content: 'Same base means $2x = 3$.' },
      { label: 'Solve', content: '$x = \\dfrac{3}{2}$.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'A $\\$4{,}000$ investment loses 3% of its value each year. Write a model for its value $V$ after $t$ years, then say what it is worth after 2 years.',
    steps: [
      { label: 'Start value', content: '$a = 4000$ — the amount at $t = 0$.' },
      { label: 'Decay factor', content: 'Losing 3% keeps 97%, so $b = 0.97$ (not $0.03$). Model: $V = 4000\\,(0.97)^{t}$.' },
      { label: 'Evaluate at $t=2$', content: '$V = 4000\\,(0.97)^2 = 4000(0.9409) = \\$3763.60$.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'Rewrite $5x^{-2}$ with no negative exponent. Does the $5$ move too?',
    answer: '$\\dfrac{5}{x^2}$. The exponent only owns the $x$, so **only $x^2$ moves** to the denominator; the $5$ stays put. (It would move only if it were written $(5x)^{-2}$.)',
  },
  {
    type: 'checkpointQuestion',
    question: 'A population grows 8% per year and starts at 500. What are $a$ and $b$ in $y = a\\cdot b^{t}$?',
    answer: '$a = 500$ (the start) and $b = 1.08$ (an 8% increase keeps 100% and adds 8%). Do not use $b = 8$ or $b = 0.08$.',
  },
  {
    type: 'checkpointQuestion',
    question: 'Solve $8^{x} = 32$ by rewriting both sides over a shared base.',
    answer: '$x = \\dfrac{5}{3}$. Both are powers of $2$: $8 = 2^3$ and $32 = 2^5$, so $2^{3x} = 2^{5}$. Same base forces the exponents equal: $3x = 5$, so $x = \\dfrac{5}{3}$.',
  },

  {
    type: 'text',
    content: '**The whole skill:** exponents count factors, so add / subtract / multiply the counts; a negative exponent flips, a fraction takes a root; same base → equate exponents; and in $a\\cdot b^{t}$, $a$ is where you start and $b$ is what you keep multiplying by.',
  },
];
