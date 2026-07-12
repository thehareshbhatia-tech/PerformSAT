/**
 * Learn lesson body — Radicals, Rationals & Hidden Quadratics (Advanced Math).
 *
 * NEW lean "review / cheat-sheet" style: one SAT skill area per lesson, plain
 * language, one idea per short section, then a couple of worked examples and
 * check-yourself questions. Voice + shape exemplar: bodies/gSubjectVerbAgreement.js.
 * Gated by bodies.test.js (lean contract).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const nonlinearEquationsBlocks = [
  {
    type: 'text',
    content: 'A square root over the variable, a fraction with the variable on the bottom, a quartic that is secretly a quadratic, a polynomial handed to you through a division — four looks, four moves. The one habit that ties them together: **the moves that clear roots and fractions can invent fake answers or erase real ones, so the original equation is the only judge of what counts.**',
  },

  { type: 'heading', content: 'Radical equations: isolate, square, then CHECK' },
  {
    type: 'text',
    content: 'Get the square root alone, then square both sides to kill it, then solve. Squaring is a **one-way move** — it can hand you a solution the original equation never had (it secretly also solves $\\sqrt{A} = -B$). So plug every candidate back into the *original* equation. Any that fails is **extraneous** — throw it out.',
  },
  {
    type: 'keyInsight',
    content: 'A square root symbol always means the non-negative value: $\\sqrt{9} = 3$, never $\\pm 3$. The $\\pm$ shows up only when you *solve* by taking a root, not inside the symbol.',
  },

  { type: 'heading', content: 'Rational equations: clear denominators, ban zero-makers' },
  {
    type: 'text',
    content: 'When the variable sits in a denominator, multiply both sides by that denominator to clear the fraction, then solve. But a value that makes any original denominator $0$ is **not allowed** — the fraction is undefined there. Read the *original* equation to decide what is legal, then strike any candidate that zeroes a denominator.',
  },
  {
    type: 'tip',
    content: 'Only cancel a **factor**, never a term across a plus or minus. $\\dfrac{(x-3)(x+2)}{x-3}$ cancels to $x+2$ (with $x \\ne 3$), but $\\dfrac{x+2}{x}$ does **not** become $\\dfrac{2}{1}$.',
  },

  { type: 'heading', content: 'Hidden quadratics: rename the repeated chunk' },
  {
    type: 'text',
    content: 'When the same expression repeats, a quadratic is hiding. In $x^4 - 5x^2 + 4 = 0$, let $u = x^2$ and it becomes $u^2 - 5u + 4 = 0$ — an ordinary quadratic. Solve for $u$, then **un-rename**: translate back to $x$. Solving for $u$ is a middle step, not the answer. Same trick for $(x-3)^2 + 5(x-3) + 6 = 0$ (let $u = x-3$).',
  },

  { type: 'heading', content: 'Line meets parabola, and the remainder shortcut' },
  {
    type: 'text',
    content: 'To find where a line and a parabola meet, set them **equal** and solve the single quadratic that results. The discriminant $b^2 - 4ac$ gives the count without coordinates: positive = two points, zero = tangent (one), negative = none. Set it to $0$ to find a tangent line.',
  },
  {
    type: 'text',
    content: 'And the remainder when you divide a polynomial $P(x)$ by $(x - a)$ is just **$P(a)$** — one evaluation, no long division. A remainder of $0$ means $(x - a)$ is a factor. The trap runs backward: $P(6) = 4$ tells you the remainder is $4$, **not** that $(x-6)$ is a factor.',
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Solve $\\;x = \\sqrt{2x + 3}\\;$.',
    steps: [
      { label: 'Square both sides', content: 'The radical is already alone: $x^2 = 2x + 3$.' },
      { label: 'Solve the quadratic', content: '$x^2 - 2x - 3 = 0 \\Rightarrow (x-3)(x+1) = 0 \\Rightarrow x = 3$ or $x = -1$.' },
      { label: 'Check both in the original', content: '$x=3$: $\\sqrt{9} = 3$, works. $x=-1$: $\\sqrt{1} = 1 \\ne -1$, extraneous.' },
      { label: 'Answer', content: '**$x = 3$ only** — squaring invented $x = -1$, and the check removed it.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'What is the remainder when $P(x) = 2x^3 - 3x^2 + x - 7$ is divided by $(x - 1)$?',
    steps: [
      { label: 'Recognize the shape', content: 'Remainder on division by $(x - a)$ is $P(a)$; here $a = 1$. No long division.' },
      { label: 'Evaluate', content: '$P(1) = 2 - 3 + 1 - 7 = -7$.' },
      { label: 'Answer', content: '**The remainder is $-7$.** It is not $0$, so $(x-1)$ is not a factor.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'For what value of $c$ is the line $y = 6x + c$ tangent to the parabola $y = x^2 + 2$?',
    steps: [
      { label: 'Set equal', content: '$x^2 + 2 = 6x + c \\Rightarrow x^2 - 6x + (2 - c) = 0$.' },
      { label: 'Tangent means discriminant zero', content: 'One intersection, so $b^2 - 4ac = 0$: $(-6)^2 - 4(1)(2 - c) = 0 \\Rightarrow 36 - 8 + 4c = 0$.' },
      { label: 'Solve for c', content: '$28 + 4c = 0 \\Rightarrow c = -7$.' },
      { label: 'Answer', content: '**$c = -7$** — the one line in the family that just touches the parabola.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'Solving $\\dfrac{x^2}{x-2} = \\dfrac{4}{x-2}$ gives candidates $x = 2$ and $x = -2$. Which are real solutions?',
    answer: '**$x = -2$ only.** Clearing gives $x^2 = 4$, so $x = \\pm 2$ — but $x = 2$ zeroes the original denominator $(x - 2)$, so it is banned. A rational equation forbids any value that makes an original denominator zero.',
  },
  {
    type: 'checkpointQuestion',
    question: 'You let $u = x^2$ to solve $x^4 - 13x^2 + 36 = 0$ and find $u = 4$ and $u = 9$. How many solutions for $x$, and what are they?',
    answer: 'Four: $x^2 = 4 \\Rightarrow x = \\pm 2$ and $x^2 = 9 \\Rightarrow x = \\pm 3$. Each positive $u = x^2$ yields two values of $x$, so you must un-rename before counting.',
  },
  {
    type: 'checkpointQuestion',
    question: 'A quadratic formed by setting a line equal to a parabola has discriminant $-12$. How many times do they intersect?',
    answer: '**Zero times.** A negative discriminant means no real solutions, so the curves never meet — the discriminant counts the crossings without finding any coordinates.',
  },

  {
    type: 'text',
    content: '**The move, every time:** clear the root or fraction, solve, then check every candidate against the *original* equation — because squaring, clearing, and dividing do not fully reverse. Rename repeated chunks to a quadratic, set curves equal to a single quadratic, and evaluate $P(a)$ for remainders.',
  },
];
