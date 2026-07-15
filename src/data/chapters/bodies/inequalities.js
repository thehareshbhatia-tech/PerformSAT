/**
 * Learn lesson body — Inequalities & Absolute Value (Algebra).
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

export const inequalitiesBlocks = [
  {
    type: 'text',
    content: "An inequality replaces the equals sign of an equation with $<$, $\\le$, $>$, or $\\ge$. Solving one follows the same procedure as solving an equation, with **one additional rule**, and absolute value is read as **distance**. The essential difference lies in the answer: an inequality is satisfied by an entire *range* of numbers rather than a single value, so the solution reports a boundary and a direction instead of one point. Every technique for isolating a variable carries over unchanged.",
  },

  { type: 'heading', content: 'Solving inequalities: the sign-reversal rule' },
  {
    type: 'text',
    content: "Adding, subtracting, multiplying, and dividing both sides all proceed exactly as they do for equations. The one new rule: **multiplying or dividing both sides by a negative number reverses the inequality symbol.** The reason is that a negative factor reverses the order of the number line — $3 < 5$ is true, but $-3 < -5$ is false, so the symbol must turn around for the statement to remain accurate. $-2x < 6$ becomes $x > -3$ (divide by $-2$, and $<$ becomes $>$). Two situations never trigger a reversal: adding or subtracting any quantity, and a solution that merely happens to be negative. Only *scaling by a negative* reverses the symbol.",
  },
  {
    type: 'keyInsight',
    content: "To confirm the direction of the symbol, substitute one number from the proposed solution set into the *original* inequality. A true statement confirms the direction; a false one indicates a missed reversal. This brief check catches every direction error.",
  },

  { type: 'heading', content: 'Compound inequalities: operate on all three parts' },
  {
    type: 'text',
    content: "A compound inequality such as $2 < 3x - 1 \\le 11$ confines $x$ between two boundaries. Every operation must be applied to **all three parts** at once: add $1$ throughout to get $3 < 3x \\le 12$, then divide throughout by $3$ to get $1 < x \\le 4$. Operating on all three parts preserves the chain the same way operating on both sides preserves an equation; omitting one part leaves the boundaries describing a different quantity than the middle. The result is a single interval naming exactly which numbers satisfy the statement. (If a step divides by a negative, both symbols reverse.)",
  },

  { type: 'heading', content: 'Absolute value as distance' },
  {
    type: 'text',
    content: "$|x|$ measures the distance from $x$ to zero, and distance is never negative. The generalization does most of the work: $|x - c|$ is the distance from $x$ to $c$. With that reading, the inequalities translate directly — $|x - c| < r$ states that $x$ lies **within** $r$ of $c$ (a single interval around a center), and $|x - c| > r$ states that $x$ lies **more than** $r$ away (two rays extending outward). Reading $c$ as a center and $r$ as a radius often yields the answer without two-case algebra or sign manipulation, because the distance interpretation determines in advance whether the solution is one interval or two rays.",
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
    content: "A distance can never be negative, so $|x - 6| = -2$ has **no solution**. Recognizing this immediately avoids algebra that cannot produce an answer.",
  },

  { type: 'heading', content: 'Two-variable inequalities: half-planes and test points' },
  {
    type: 'text',
    content: "The solution of $y \\le 2x + 1$ is not a number but a region: the line $y = 2x + 1$ together with everything on one side of it. To determine which side, **test a single convenient point**, typically $(0, 0)$. The boundary line divides the plane in two, and every point on a given side produces the same true-or-false result, so one test settles the entire region. If the test point satisfies the inequality, shade its side; if not, shade the other. For a system, the solution lies where the shaded regions **overlap** — a point qualifies only if it satisfies *every* inequality.",
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
    content: "When the answer must be a whole number — buses, tickets, crates — round toward the side that satisfies the constraint: **up** for a minimum, **down** for a maximum. This is not round-to-nearest; the constraint determines the direction. If a task requires $x \\ge 14.2$ boxes, the answer is $15$, because $14$ is insufficient. Rounding in the wrong direction reports a number that fails the stated requirement, and wrong answer choices are routinely constructed from exactly that misstep.",
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Which represents all solutions of $-4x + 9 > 21$?\n\n(A) $x > -3$\n(B) $x < -3$\n(C) $x > 3$\n(D) $x < 3$',
    steps: [
      { label: 'Subtract 9', content: "$-4x > 12$. Subtraction never reverses the symbol." },
      { label: 'Divide by $-4$ and reverse', content: "Dividing by a negative reverses $>$ to $<$: $x < -3$." },
      { label: 'Check', content: "Substitute $x = -5$: $-4(-5) + 9 = 29 > 21$, true. Answer **(B)**. Choice (A) is the same boundary with the reversal omitted — the standard distractor for this step." },
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
    answer: "**$x \\le -6$.** Subtract $1$: $-\\frac{x}{2} \\ge 3$. Multiply both sides by $-2$ and **reverse the symbol**: $x \\le -6$. Check $x = -10$: $5 + 1 = 6 \\ge 4$, true — the direction is confirmed.",
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
    type: 'text',
    content: "**In summary:** solve as with an equation, reversing the symbol only on a negative multiplication or division; apply every operation to all three parts of a compound inequality; read $|x - c|$ as distance from $c$; test one point to select the shaded side; and match boundary phrases to $\\ge / \\le / > / <$. Substituting one number from the result verifies the direction.",
  },
];
