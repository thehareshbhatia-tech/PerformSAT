/**
 * Learn lesson body — Inequalities & Absolute Value (Algebra).
 *
 * TUTOR VOICE (adopted 2026-07-14, user-approved exemplar:
 * bodies/mLinearEquations.js): coaching direct-address — talks TO the student,
 * anticipates the mistake before it happens, everyday anchor first and formula
 * second, concrete decision rules. Lean structure unchanged: short headed
 * sections, 4 worked examples, 3 checkpoints. Gated by bodies.test.js.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const inequalitiesBlocks = [
  {
    type: 'text',
    content: "An inequality is just an equation with $<$, $\\le$, $>$, or $\\ge$ where the equals sign used to be. You solve it almost exactly like an equation — with **one extra rule** — and you read absolute value as **distance**. That's the whole topic. The real difference: your answer is a whole *range* of numbers, not a single value, so you're reporting a direction and a boundary instead of one point. Everything you already know about isolating a variable still works here.",
  },

  { type: 'heading', content: 'Solve it like an equation — one exception' },
  {
    type: 'text',
    content: "Add, subtract, multiply, and divide both sides — business as usual. The one new rule: **multiply or divide both sides by a negative, and the sign flips.** Why? A negative reverses the order of the number line — $3 < 5$ is true, but $-3 < -5$ is false, so the symbol has to turn around to stay honest. $-2x < 6$ becomes $x > -3$ (divide by $-2$, flip $<$ to $>$). Two things that never trigger a flip: adding or subtracting anything, and an answer that merely happens to be negative. Only *scaling by a negative* flips.",
  },
  {
    type: 'keyInsight',
    content: "Not sure whether to flip? Plug one number from your answer back into the *original* inequality. If the statement comes out true, your direction is right. Ten seconds of checking beats every direction trap on the page.",
  },

  { type: 'heading', content: 'Compound inequalities: do it to all three parts' },
  {
    type: 'text',
    content: "A chain like $2 < 3x - 1 \\le 11$ means $x$ is squeezed between two walls. Whatever move you make, make it on **all three parts** at once: add $1$ everywhere to get $3 < 3x \\le 12$, then divide everything by $3$ to get $1 < x \\le 4$. Hitting all three parts keeps the chain balanced the same way hitting both sides keeps an equation balanced — skip the middle and the walls stop describing the same $x$. The payoff is one tidy interval naming exactly which numbers work. (If a step divides by a negative, both signs flip.)",
  },

  { type: 'heading', content: 'Absolute value = distance from a point' },
  {
    type: 'text',
    content: "$|x|$ asks one question: how far from zero? Distance is never negative. The upgrade that unlocks everything: $|x - c|$ is the distance from $x$ to $c$. Now the inequalities read themselves — $|x - c| < r$ says \"$x$ is **within** $r$ of $c$\" (one band around a center), and $|x - c| > r$ says \"$x$ is **more than** $r$ away\" (two rays heading out). Read $c$ as a center and $r$ as a radius and you can practically write the answer down without solving — no two-case algebra, no sign juggling, because the picture already tells you whether you get one band or two rays.",
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
    content: "A distance can never be negative, so $|x - 6| = -2$ has **no solution** — spot it and move on. Anyone doing algebra on that one is burning time.",
  },

  { type: 'heading', content: 'Two variables: shade a half-plane, test a point' },
  {
    type: 'text',
    content: "$y \\le 2x + 1$ isn't solved by a number — it's solved by a whole region: the line $y = 2x + 1$ plus everything on one side. Which side? **Test the easiest point alive**, $(0, 0)$. The boundary line splits the plane in two, and every point on a given side answers the same way — so one test settles the entire region. True? Shade the side your test point sits on. False? Shade the other. For a system, the answer lives where the shaded regions **overlap** — a point counts only if it satisfies *every* inequality.",
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
    content: "When the answer has to be a whole number — buses, tickets, crates — round toward the side that actually works: **up** for a minimum, **down** for a maximum. This isn't round-to-nearest; the constraint picks the direction. If the job requires $x \\ge 14.2$ boxes, the answer is $15$, because $14$ isn't enough. Round the wrong way and you've reported a number that literally fails the requirement — and yes, that wrong number is waiting for you in the answer choices.",
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Which represents all solutions of $-4x + 9 > 21$?\n\n(A) $x > -3$\n(B) $x < -3$\n(C) $x > 3$\n(D) $x < 3$',
    steps: [
      { label: 'Subtract 9', content: "$-4x > 12$. Subtracting never flips the sign." },
      { label: 'Divide by $-4$ and flip', content: "Dividing by a negative flips $>$ to $<$: $x < -3$." },
      { label: 'Check', content: "Try $x = -5$: $-4(-5) + 9 = 29 > 21$, true. Answer **(B)**. (A) is the same boundary with the flip skipped — that choice was built for you." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A freight elevator carries at most 2,200 pounds. A 160-pound operator rides with $c$ crates weighing 55 pounds each. What is the greatest number of crates it can carry?',
    steps: [
      { label: 'Translate', content: "\"At most 2,200\" is $\\le 2200$, boundary included: $55c + 160 \\le 2200$." },
      { label: 'Solve', content: "Subtract $160$: $55c \\le 2040$. Divide by $55$: $c \\le 37.09\\ldots$" },
      { label: 'Round down', content: "Crates are whole and this is a maximum, so round *down* to **37**. Check: $55(38) + 160 = 2250 > 2200$ fails, $55(37) + 160 = 2195$ works." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Solve $|x - 3| > 5$.',
    steps: [
      { label: 'Read as distance', content: "This asks for points **more than** $5$ away from $3$ — two rays, not one band." },
      { label: 'Step off the radius', content: "The band edges sit at $3 - 5 = -2$ and $3 + 5 = 8$." },
      { label: 'Write both pieces', content: "Beyond means outside: $x < -2$ or $x > 8$. Check $x = 0$: $|0 - 3| = 3 > 5$ is false, and $0$ is correctly *not* in either ray." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Solve $-1 \\le 2x + 3 < 9$ for $x$.',
    steps: [
      { label: 'Subtract 3 from all three parts', content: "Same move on every part: $-1 - 3 \\le 2x < 9 - 3$, which is $-4 \\le 2x < 6$." },
      { label: 'Divide all three by 2', content: "Dividing by a positive keeps both signs as they are: $-2 \\le x < 3$." },
      { label: 'Read the interval', content: "$x$ runs from $-2$ (included) up to $3$ (not included). Check $x = 0$: $2(0) + 3 = 3$, and $-1 \\le 3 < 9$ is true." },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'Solve $-\\dfrac{x}{2} + 1 \\ge 4$. What is the solution set?',
    answer: "$x \\le -6$. Subtract $1$: $-\\frac{x}{2} \\ge 3$. Multiply both sides by $-2$ and **flip**: $x \\le -6$. Check $x = -10$: $5 + 1 = 6 \\ge 4$, true — the direction holds.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A tank must hold **at least** 300 gallons and fills at 12 gallons per minute. Write the constraint. Does exactly 25 minutes satisfy it?',
    answer: "$12m \\ge 300$, and yes — $12(25) = 300$ exactly, and \"at least\" is $\\ge$, so the boundary itself counts. Watch how much one word moves: under \"more than 300,\" the same 25 minutes would fail.",
  },
  {
    type: 'checkpointQuestion',
    question: 'Solve $|x - 4| \\le 3$. What is the solution set?',
    answer: "$1 \\le x \\le 7$. Read it as distance: \"$x$ is **within** $3$ of $4$\" — one band, $4 - 3 \\le x \\le 4 + 3$. Check the center: $|4 - 4| = 0 \\le 3$, true, and $4$ sits right in the middle of the interval.",
  },

  {
    type: 'text',
    content: "**The moves, every time:** solve like an equation and flip only on a negative multiply or divide; hit all three parts of a chain; read $|x - c|$ as distance from $c$; test one point to pick a shaded side; match boundary words to $\\ge / \\le / > / <$. Then plug in one number to be sure.",
  },
];
