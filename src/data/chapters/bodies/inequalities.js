/**
 * Learn lesson body — Inequalities & Absolute Value (Algebra).
 *
 * VOICE v3 (adopted 2026-07-17, exemplar: bodies/centralIdeas.js): scannable
 * instructional register — direct address, contractions, 1-3 sentence text
 * blocks, list blocks for criteria, steps blocks for procedures; no analogies,
 * no pep-talk, no emojis. All substance of the v2 textbook version preserved.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const inequalitiesBlocks = [
  {
    type: 'text',
    content: "An inequality swaps the equals sign of an equation for $<$, $\\le$, $>$, or $\\ge$. Everything from the last chapter carries over intact — every technique for isolating a variable still applies — with **one new rule**, plus a new reading of absolute value as **distance**.",
  },
  {
    type: 'text',
    content: "The real difference lies in the answer. An inequality is satisfied by an entire *range* of numbers rather than a single value, so the solution reports a boundary and a direction instead of one point.",
  },
  {
    type: 'diagramRef',
    visualType: 'inequalityNumberLineDiagram',
    description: "Number-line graphs of $x > 2$ and $x \\le -1$: each solution is a boundary plus a direction, where an open circle excludes the boundary value and a closed circle includes it.",
  },

  { type: 'heading', content: 'The sign-reversal rule' },
  {
    type: 'text',
    content: "Adding, subtracting, multiplying, and dividing both sides all work exactly as they do for equations. The one new rule: **multiplying or dividing both sides by a negative number reverses the inequality symbol.**",
  },
  {
    type: 'text',
    content: "Why? A negative factor reverses the order of the number line — $3 < 5$ is true, but $-3 < -5$ is false — so the symbol has to turn around for the statement to stay accurate.",
  },
  {
    type: 'text',
    content: "$-2x < 6$ becomes $x > -3$: divide by $-2$, and $<$ becomes $>$.",
  },
  {
    type: 'list',
    title: 'What never triggers a reversal:',
    items: [
      'Adding or subtracting any quantity.',
      'A solution that merely happens to come out negative.',
    ],
  },
  {
    type: 'text',
    content: "Only *scaling by a negative* reverses the symbol.",
  },
  {
    type: 'keyInsight',
    content: "To confirm the direction of the symbol, substitute one number from your proposed solution set into the *original* inequality. A true statement confirms the direction; a false one means a reversal was missed. This brief check catches every direction error.",
  },

  { type: 'heading', content: 'Compound inequalities: operate on all three parts' },
  {
    type: 'text',
    content: "A compound inequality like $2 < 3x - 1 \\le 11$ pins $x$ between two boundaries. Every operation applies to **all three parts** at once.",
  },
  {
    type: 'text',
    content: "Add $1$ throughout: $3 < 3x \\le 12$. Divide throughout by $3$: $1 < x \\le 4$ — a single interval naming exactly which numbers satisfy the statement.",
  },
  {
    type: 'text',
    content: "Operating on all three parts preserves the chain the same way operating on both sides preserves an equation. Skip one part and the boundaries end up describing a different quantity than the middle. (And if a step divides by a negative, both symbols reverse.)",
  },

  { type: 'heading', content: 'Absolute value as distance' },
  {
    type: 'text',
    content: "$|x|$ measures the distance from $x$ to zero, and distance is never negative. The generalization does most of the work: $|x - c|$ is the distance from $x$ to $c$.",
  },
  {
    type: 'text',
    content: "Read $c$ as a center and $r$ as a radius, and the inequalities translate directly — often with no two-case algebra or sign manipulation, because the distance reading tells you in advance whether the solution is one interval or two rays.",
  },
  {
    type: 'formulaGrid',
    items: [
      { label: 'Exactly $r$ away', formula: '$|x - c| = r$', note: 'Two points: $x = c - r$ or $x = c + r$.' },
      { label: 'Within $r$ (one interval)', formula: '$|x - c| < r$', note: 'One interval: $c - r < x < c + r$.' },
      { label: 'Beyond $r$ (two rays)', formula: '$|x - c| > r$', note: 'Two rays: $x < c - r$ or $x > c + r$.' },
    ],
  },
  {
    type: 'tip',
    content: "A distance can never be negative, so $|x - 6| = -2$ has **no solution**. Spotting this immediately saves you from algebra that can't produce an answer.",
  },

  { type: 'heading', content: 'The absolute-value function' },
  {
    type: 'text',
    content: "Graphed, $y = |x|$ forms a **V**. For $x \\ge 0$ the graph coincides with the line $y = x$; for $x < 0$ the negative outputs flip to positive, producing the mirror-image arm $y = -x$.",
  },
  {
    type: 'text',
    content: "The two arms meet in a corner at the origin — the **vertex** — where the output reaches its minimum value of $0$. The right arm rises with slope $1$, the left arm falls with slope $-1$, and the graph is symmetric about the vertical line through the vertex.",
  },
  {
    type: 'text',
    content: "The general form $y = a|x - h| + k$ moves and reshapes this V exactly the way the parabola's vertex form $y = a(x - h)^2 + k$ moves a parabola.",
  },
  {
    type: 'list',
    title: 'Reading $y = a|x - h| + k$:',
    items: [
      'The vertex sits at $(h, k)$.',
      'Positive $a$ opens the V upward; negative $a$ opens it downward.',
      'The arms have slopes $+a$ and $-a$.',
      'The sign of $h$ follows the parabola convention: $|x - 3|$ puts the vertex at $x = 3$, while $|x + 3|$ — which is $|x - (-3)|$ — puts it at $x = -3$.',
    ],
  },
  {
    type: 'text',
    content: "Matching an equation to a graph? Locate the corner first — it fixes $h$ and $k$ immediately, and the steepness and direction of the arms then determine $a$.",
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'What is the vertex of the graph of $y = 2|x - 3| - 4$, and where does the graph cross the x-axis?',
    steps: [
      { label: 'Read the vertex', content: "Match against $y = a|x - h| + k$: $h = 3$ and $k = -4$, so the vertex is $(3, -4)$. The subtraction inside the bars means $h$ is $+3$, not $-3$." },
      { label: 'Determine the shape', content: "$a = 2$ is positive, so the V opens upward from the vertex, with arms of slope $2$ and $-2$. The vertex lies below the x-axis and the graph opens upward, so it crosses the axis twice." },
      { label: 'Find the x-intercepts', content: "Set $y = 0$: $2|x - 3| = 4$, so $|x - 3| = 2$ — the points at distance $2$ from $3$, namely $x = 1$ and $x = 5$. The two intercepts sit symmetrically about the vertex's $x$-coordinate, as the V's shape requires." },
    ],
  },

  { type: 'heading', content: 'Two-variable inequalities: half-planes and test points' },
  {
    type: 'text',
    content: "The solution of $y \\le 2x + 1$ isn't a number — it's a region: the line $y = 2x + 1$ together with everything on one side of it.",
  },
  {
    type: 'text',
    content: "To find which side, **test a single convenient point**, typically $(0, 0)$. The boundary line divides the plane in two, and every point on a given side produces the same true-or-false result, so one test settles the entire region.",
  },
  {
    type: 'text',
    content: "If the test point satisfies the inequality, shade its side; if not, shade the other. For a system, the solution lies where the shaded regions **overlap** — a point qualifies only if it satisfies *every* inequality.",
  },

  { type: 'heading', content: 'Translating boundary phrases into symbols' },
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
    content: "When the answer has to be a whole number — buses, tickets, crates — round toward the side that satisfies the constraint: **up** for a minimum, **down** for a maximum.",
  },
  {
    type: 'text',
    content: "This isn't round-to-nearest; the constraint sets the direction. If a task requires $x \\ge 14.2$ boxes, the answer is $15$, because $14$ falls short. Round the wrong way and the reported number fails the stated requirement — wrong answer choices are built from exactly that misstep.",
  },

  {
    type: 'steps',
    title: 'How to approach these questions',
    items: [
      '**Solve like an equation.** Every isolation technique carries over unchanged.',
      '**Reverse on negative scaling.** Multiplying or dividing by a negative flips the symbol; adding and subtracting never do. In a compound inequality, operate on all three parts.',
      '**Read absolute value as distance.** $|x - c| < r$ is one interval around $c$; $|x - c| > r$ is two rays.',
      '**Translate boundary words precisely.** At least / at most include the boundary; more than / fewer than exclude it — and round whole-number answers toward the side that satisfies the constraint.',
      '**Check with one number.** Substitute a value from your solution set into the original inequality to confirm the direction.',
    ],
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Which represents all solutions of $-4x + 9 > 21$?\n\n(A) $x > -3$\n(B) $x < -3$\n(C) $x > 3$\n(D) $x < 3$',
    steps: [
      { label: 'Subtract 9', content: "$-4x > 12$. Subtraction never reverses the symbol." },
      { label: 'Divide by $-4$ and reverse', content: "Dividing by a negative reverses $>$ to $<$: $x < -3$." },
      { label: 'Check', content: "Substitute $x = -5$: $-4(-5) + 9 = 29 > 21$, true. Answer **(B)**. Choice (A) is the same boundary with the reversal skipped — the standard distractor for this step." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A freight elevator carries at most 2,200 pounds. A 160-pound operator rides with $c$ crates weighing 55 pounds each. What is the greatest number of crates it can carry?',
    steps: [
      { label: 'Translate', content: "\"At most 2,200\" is $\\le 2200$, boundary included: $55c + 160 \\le 2200$." },
      { label: 'Solve', content: "Subtract $160$: $55c \\le 2040$. Divide by $55$: $c \\le 37.09\\ldots$" },
      { label: 'Round down', content: "Crates come in whole numbers and the constraint is a maximum, so round *down* to **37**. Check: $55(38) + 160 = 2250 > 2200$ fails, while $55(37) + 160 = 2195$ satisfies the limit." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Solve $|x - 3| > 5$.',
    steps: [
      { label: 'Read as distance', content: "The statement describes points **more than** $5$ away from $3$ — two rays, not one interval." },
      { label: 'Locate the boundary points', content: "The boundary points lie at $3 - 5 = -2$ and $3 + 5 = 8$." },
      { label: 'Write both pieces', content: "Distances greater than $5$ lie outside the interval: $x < -2$ or $x > 8$. Check $x = 0$: $|0 - 3| = 3 > 5$ is false, and $0$ correctly falls in neither ray." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Solve $-1 \\le 2x + 3 < 9$ for $x$.',
    steps: [
      { label: 'Subtract 3 from all three parts', content: "Apply the operation to every part: $-1 - 3 \\le 2x < 9 - 3$, which is $-4 \\le 2x < 6$." },
      { label: 'Divide all three by 2', content: "Dividing by a positive number leaves both symbols unchanged: $-2 \\le x < 3$." },
      { label: 'Read the interval', content: "$x$ runs from $-2$ (included) up to $3$ (not included). Check $x = 0$: $2(0) + 3 = 3$, and $-1 \\le 3 < 9$ is true." },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'Solve $-\\dfrac{x}{2} + 1 \\ge 4$. What is the solution set?',
    answer: "**$x \\le -6$.** Subtract $1$: $-\\frac{x}{2} \\ge 3$. Multiply both sides by $-2$ and **reverse the symbol**: $x \\le -6$. Check $x = -10$: $5 + 1 = 6 \\ge 4$, true — the direction holds.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A tank must hold **at least** 300 gallons and fills at 12 gallons per minute. Write the constraint. Does exactly 25 minutes satisfy it?',
    answer: "**$12m \\ge 300$, and yes.** $12(25) = 300$ exactly, and \"at least\" translates to $\\ge$, so the boundary value itself qualifies. One word changes the outcome: under \"more than 300,\" the same 25 minutes would fail.",
  },
  {
    type: 'checkpointQuestion',
    question: 'Solve $|x - 4| \\le 3$. What is the solution set?',
    answer: "**$1 \\le x \\le 7$.** Read the statement as distance: $x$ lies **within** $3$ of $4$ — a single interval, $4 - 3 \\le x \\le 4 + 3$. Check the center: $|4 - 4| = 0 \\le 3$, true, and $4$ sits at the midpoint of the interval.",
  },

  {
    type: 'list',
    title: '**The rules in one place:**',
    items: [
      'Solve as with an equation; reverse the symbol only on a negative multiplication or division.',
      'Apply every operation to all three parts of a compound inequality.',
      'Read $|x - c|$ as distance from $c$: $< r$ is one interval, $> r$ is two rays.',
      "Test one point to select the shaded side; a system's solution is the overlap.",
      'Match boundary phrases to $\\ge / \\le / > / <$, and round toward the side that satisfies the constraint.',
      'The graph of $y = a|x - h| + k$ is a V with vertex $(h, k)$ and arm slopes $\\pm a$ — and substituting one number from the result verifies the direction.',
    ],
  },
];
