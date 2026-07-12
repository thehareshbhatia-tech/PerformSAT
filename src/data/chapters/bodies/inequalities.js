/**
 * Learn lesson body — Inequalities & Absolute Value (Algebra).
 *
 * NEW lean "review / cheat-sheet" style: one sentence lede → a few short headed
 * sections (one idea each) → 2-3 worked examples + 2 check-yourself questions →
 * one-line takeaway. ~1-2 min. Voice + shape reference: bodies/gSubjectVerbAgreement.js.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const inequalitiesBlocks = [
  {
    type: 'text',
    content: 'An inequality is just an equation with $<$, $\\le$, $>$, or $\\ge$ in place of the equals sign. Solve it almost exactly like an equation — with **one extra rule** — and read absolute value as **distance**. That is the whole topic. The difference from an equation is that the answer is a whole *range* of numbers, not a single value, so what you report is a direction and a boundary rather than one point. Everything you already know about isolating a variable still applies; only one move behaves differently, which is why this is mostly review.',
  },

  { type: 'heading', content: 'Solve it like an equation — one exception' },
  {
    type: 'text',
    content: 'Add, subtract, multiply, and divide both sides just like an equation. The only new rule: **when you multiply or divide both sides by a negative, flip the sign.** The flip happens because multiplying by a negative reverses the order of the number line — $3 < 5$ is true, but $-3 < -5$ is false, so the symbol has to turn around to stay honest. So $-2x < 6$ becomes $x > -3$ (divide by $-2$, flip $<$ to $>$). Adding or subtracting never flips anything, and a negative answer by itself is not a trigger — only *scaling by a negative* flips.',
  },
  {
    type: 'keyInsight',
    content: 'Not sure whether to flip? Plug one number from your answer back into the *original* inequality. If it makes the statement true, your direction is right. Ten seconds of checking beats every direction trap.',
  },

  { type: 'heading', content: 'Compound inequalities: do it to all three parts' },
  {
    type: 'text',
    content: 'A chain like $2 < 3x - 1 \\le 11$ means $x$ is squeezed between two bounds. Whatever you do, do it to **all three parts** at once: add $1$ everywhere to get $3 < 3x \\le 12$, then divide everything by $3$ to get $1 < x \\le 4$. Hitting all three parts keeps the chain balanced the same way doing a move to both sides keeps an equation balanced — skip the middle and the bounds stop describing the same $x$. The payoff is a single tidy interval that names exactly which numbers work. (If a step divides by a negative, both signs flip.)',
  },

  { type: 'heading', content: 'Absolute value = distance from a point' },
  {
    type: 'text',
    content: '$|x|$ is the distance from $x$ to $0$, so it is never negative. The useful version: $|x - c|$ is the distance from $x$ to $c$. That makes the inequalities readable with no case work — $|x - c| < r$ means "$x$ is **within** $r$ of $c$," and $|x - c| > r$ means "$x$ is **more than** $r$ away." Reading absolute value as distance is what saves you from the error-prone two-case algebra most people are taught, because the picture already tells you whether the answer is one band or two rays. Once you see $c$ as a center and $r$ as a radius, you can practically write the answer down without solving.',
  },
  {
    type: 'formulaGrid',
    items: [
      { label: 'Exactly $r$ away', formula: '$|x - c| = r$', note: 'Two points: $x = c - r$ or $x = c + r$.' },
      { label: 'Within $r$ (one band)', formula: '$|x - c| < r$', note: 'One interval: $c - r < x < c + r$.' },
      { label: 'Beyond $r$ (two rays)', formula: '$|x - c| > r$', note: 'Two pieces: $x < c - r$ or $x > c + r$.' },
    ],
  },
  {
    type: 'tip',
    content: 'A distance can never be negative, so $|x - 6| = -2$ has **no solution** — spot it and stop, no algebra needed.',
  },

  { type: 'heading', content: 'Two variables: shade a half-plane, test a point' },
  {
    type: 'text',
    content: 'An inequality like $y \\le 2x + 1$ is solved by a **half-plane** — the line $y = 2x + 1$ plus everything on one side. To pick the side, **test an easy point**: try $(0, 0)$. Testing one point works because the boundary line splits the plane into two sides, and every point on a given side gives the same true-or-false answer — so a single test settles the whole region. If it makes the inequality true, shade the side it is on; if false, shade the other side. For a system, the answer region is where the shaded areas **overlap**, and a point counts only if it satisfies *every* inequality.',
  },

  { type: 'heading', content: 'Words to symbols (watch the boundary)' },
  {
    type: 'table',
    headers: ['Phrase', 'Symbol', 'Boundary counts?'],
    rows: [
      ['at least / no less than', '$\\ge$', 'Yes'],
      ['at most / no more than', '$\\le$', 'Yes'],
      ['more than / exceeds', '$>$', 'No'],
      ['less than / fewer than', '$<$', 'No'],
    ],
  },
  {
    type: 'text',
    content: 'When the answer must be a whole number (buses, tickets, crates), round toward the side that actually works: **up** for a minimum, **down** for a maximum. This is not the usual "round to nearest" — the direction is dictated by which whole number still satisfies the constraint. If $x \\ge 14.2$ boxes are needed, the answer is $15$, because $14$ is not enough; round the wrong way and you report a number that literally fails the requirement, which is exactly the trap these questions are built around.',
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Which represents all solutions of $-4x + 9 > 21$?\n\n(A) $x > -3$\n(B) $x < -3$\n(C) $x > 3$\n(D) $x < 3$',
    steps: [
      { label: 'Subtract 9', content: '$-4x > 12$. Subtracting never flips the sign.' },
      { label: 'Divide by $-4$ and flip', content: 'Dividing by a negative flips $>$ to $<$: $x < -3$.' },
      { label: 'Check', content: 'Try $x = -5$: $-4(-5) + 9 = 29 > 21$, true. Answer **(B)**. (A) is the same boundary with the sign not flipped.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A freight elevator carries at most 2,200 pounds. A 160-pound operator rides with $c$ crates weighing 55 pounds each. What is the greatest number of crates it can carry?',
    steps: [
      { label: 'Translate', content: '"At most 2,200" is $\\le 2200$, boundary included: $55c + 160 \\le 2200$.' },
      { label: 'Solve', content: 'Subtract $160$: $55c \\le 2040$. Divide by $55$: $c \\le 37.09\\ldots$' },
      { label: 'Round down', content: 'Crates are whole and this is a maximum, so round *down* to **37**. Check: $55(38) + 160 = 2250 > 2200$ fails, $55(37) + 160 = 2195$ works.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Solve $|x - 3| > 5$.',
    steps: [
      { label: 'Read as distance', content: 'This asks for points **more than** $5$ away from $3$ — two rays, not one band.' },
      { label: 'Step off the radius', content: 'The band edges sit at $3 - 5 = -2$ and $3 + 5 = 8$.' },
      { label: 'Write both pieces', content: 'Beyond means outside: $x < -2$ or $x > 8$. Check $x = 0$: $|0 - 3| = 3 > 5$ is false, and $0$ is correctly *not* in either ray.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Solve $-1 \\le 2x + 3 < 9$ for $x$.',
    steps: [
      { label: 'Subtract 3 from all three parts', content: 'Do the same move to every part: $-1 - 3 \\le 2x < 9 - 3$, which is $-4 \\le 2x < 6$.' },
      { label: 'Divide all three by 2', content: 'Dividing by a positive number keeps both signs the same: $-2 \\le x < 3$.' },
      { label: 'Read the interval', content: '$x$ runs from $-2$ (included) up to $3$ (not included). Check $x = 0$: $2(0) + 3 = 3$, and $-1 \\le 3 < 9$ is true.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'Solve $-\\dfrac{x}{2} + 1 \\ge 4$. What is the solution set?',
    answer: '$x \\le -6$. Subtract $1$: $-\\frac{x}{2} \\ge 3$. Multiply both sides by $-2$ and **flip**: $x \\le -6$. Check $x = -10$: $5 + 1 = 6 \\ge 4$, true.',
  },
  {
    type: 'checkpointQuestion',
    question: 'A tank must hold **at least** 300 gallons and fills at 12 gallons per minute. Write the constraint. Does exactly 25 minutes satisfy it?',
    answer: '$12m \\ge 300$, and yes — $12(25) = 300$, and "at least" is $\\ge$, so the boundary itself counts. Under "more than 300," the same 25 minutes would fail.',
  },
  {
    type: 'checkpointQuestion',
    question: 'Solve $|x - 4| \\le 3$. What is the solution set?',
    answer: '$1 \\le x \\le 7$. Read it as distance: "$x$ is **within** $3$ of $4$," which is one band, $4 - 3 \\le x \\le 4 + 3$. Check $x = 4$: $|4 - 4| = 0 \\le 3$, true, and $4$ sits right in the middle of the interval.',
  },

  {
    type: 'text',
    content: '**The moves, every time:** solve like an equation and flip only on a negative multiply/divide; hit all three parts of a chain; read $|x - c|$ as distance from $c$; test a point to pick a shaded side; and match boundary words to $\\ge / \\le / > / <$. Then plug in one number to be sure.',
  },
];
