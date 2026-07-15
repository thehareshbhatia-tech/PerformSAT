/**
 * Learn lesson body — Solving Equations & Rearranging Formulas (Algebra).
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

export const solvingEquationsBlocks = [
  {
    type: 'text',
    content: "An equation asserts that two expressions have the same value. Every solving technique follows from one principle: **apply the same operation to both entire sides until the target variable stands alone.** An operation applied to only one side changes the relationship and produces a different equation with a different solution. With this principle in place, even a messy multi-step equation reduces to a short, repeatable sequence of steps.",
  },

  { type: 'heading', content: 'Undoing operations in reverse order' },
  {
    type: 'text',
    content: "An expression is built by applying operations to the variable in sequence, and it is unwound by undoing those operations in reverse order: the operation applied last is removed first. In $2x + 1 = 9$, the $x$ was multiplied by $2$ and then had $1$ added — so remove the $+1$ first (subtract $1$ from both sides), then the $\\times 2$ (divide both sides by $2$): $x = 4$. Undoing out of order forces a division that reaches only part of the expression while the remaining terms are carried along incorrectly; this is where the arithmetic in multi-step solving typically breaks down.",
  },
  {
    type: 'keyInsight',
    content: "Every operation applies to **both entire sides**, never to a single term. Substituting the result back into the original equation — $2(4)+1 = 9$ — verifies the solution independently, before the answer choices are consulted.",
  },

  { type: 'heading', content: 'Variables on both sides' },
  {
    type: 'text',
    content: "When the variable appears on both sides, collect the variable terms on one side and the constant terms on the other, then isolate as usual. A variable cannot be isolated while copies of it remain on both sides of the equation. One prerequisite comes first: if a grouped expression is multiplied by a factor, **distribute the factor to every term in the group** — the factor applies to everything inside the parentheses. $-2(x-5) = -2x + 10$, not $-2x - 5$. Rushed distribution that drops the sign on the second term is the most frequent error in this procedure, and wrong answer choices are routinely constructed from exactly that slip.",
  },

  { type: 'heading', content: 'Rearranging formulas' },
  {
    type: 'text',
    content: "Rearranging a formula uses the same procedure as solving a numeric equation. Treat every letter except the target variable as a fixed constant and apply the same sequence of inverse operations. To solve $A = \\tfrac{1}{2}bh$ for $h$: multiply both sides by $2$ to get $2A = bh$, then divide both sides by $b$ to get $h = \\dfrac{2A}{b}$. The $A$ and the $b$ obey the same algebraic rules a specific number such as $7$ would — nothing new is involved. Students often hesitate here because the extra letters appear to demand special handling; they do not. Classify each letter as either the target or a constant, and proceed as usual.",
  },
  {
    type: 'keyInsight',
    content: "The splitting rule for fractions runs in one direction only: a sum in a *numerator* splits ($\\frac{r+s}{t} = \\frac{r}{t} + \\frac{s}{t}$), but a sum in a *denominator* never does — $\\frac{r}{s+t}$ is **not** $\\frac{r}{s} + \\frac{r}{t}$. Splitting a denominator produces a tidy-looking expression that is incorrect.",
  },

  { type: 'heading', content: 'The combined-total form $Ax + By = C$' },
  {
    type: 'text',
    content: "When a problem prices *two* items and states their combined total, the equation follows directly from that structure: price times quantity, plus price times quantity, equals total. Consider adult tickets at $\\$8$ and child tickets at $\\$5$ with total spending of $\\$120$: the equation is $8a + 5c = 120$, and no slope-intercept form is involved. Reaching for $y = mx + b$ out of habit is the standard misstep when the situation is simply two costs filling a budget. Setting one variable to $0$ reads off an **intercept**: with $a = 0$, $5c = 120$, so $c = 24$ children — the case in which only one item type is purchased, and a quick consistency check for any proposed answer.",
  },

  { type: 'heading', content: 'Answering the quantity asked for' },
  {
    type: 'text',
    content: "Many questions request a *combination* such as $x + y$ or $2t$ rather than a single variable, and the combination is often available in one step without finding either variable individually. Such items are constructed to reward recognizing the shortcut over solving at length. Given $3x + 3y = 21$, solving for $x$ and $y$ separately is impossible from one equation — and unnecessary. Factor: $3(x+y) = 21$, divide by $3$, and $x + y = 7$ follows immediately. Matching coefficients signal that the combination can be extracted directly.",
  },
  {
    type: 'tip',
    content: "Before recording an answer, re-read the final line of the question and identify the exact quantity requested — $x+y$, $2t$, or a single variable. Correct algebra followed by reporting the wrong quantity is among the most common ways credit is lost on the math section.",
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'If $\\dfrac{x}{5} + 3 = 8$, what is the value of $x$?',
    steps: [
      { label: 'Undo the addition first', content: "The $+3$ was applied last, so remove it first. Subtract $3$ from both sides: $\\dfrac{x}{5} = 5$." },
      { label: 'Undo the division', content: "The $x$ is divided by $5$, so multiply both sides by $5$: $x = 25$." },
      { label: 'Check', content: "$\\dfrac{25}{5} + 3 = 5 + 3 = 8$. The equation holds, confirming the solution." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Solve $4(t - 1) = 2t + 6$ for $t$.',
    steps: [
      { label: 'Distribute across the group', content: "The $4$ multiplies both terms inside the parentheses: $4t - 4 = 2t + 6$ (not $4t - 1$)." },
      { label: 'Collect variables and constants', content: "Subtract $2t$: $2t - 4 = 6$. Add $4$: $2t = 10$." },
      { label: 'Solve and check', content: "Divide by $2$: $t = 5$. Verify: $4(5-1) = 16$ and $2(5)+6 = 16$. Both sides agree." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Solve $P = 2\\ell + 2w$ for $w$.',
    steps: [
      { label: 'Treat other letters as constants', content: "Treat $P$ and $\\ell$ as constants. Subtract $2\\ell$ from both sides: $P - 2\\ell = 2w$." },
      { label: 'Divide to isolate', content: "Divide both sides by $2$: $w = \\dfrac{P - 2\\ell}{2}$." },
      { label: 'Check with values', content: "Substitute $P = 20,\\ \\ell = 3$: $w = 7$, and $2(3) + 2(7) = 20$. The formula holds." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'The formula $F = \\dfrac{9}{5}C + 32$ converts a Celsius temperature to Fahrenheit. Solve for $C$ in terms of $F$.',
    steps: [
      { label: 'Undo the addition first', content: "Treat $F$ as a constant. The $+32$ was applied last, so subtract $32$ from both sides: $F - 32 = \\dfrac{9}{5}C$." },
      { label: 'Undo the fraction', content: "The $C$ is multiplied by $\\dfrac{9}{5}$, so multiply both sides by its reciprocal $\\dfrac{5}{9}$: $C = \\dfrac{5}{9}(F - 32)$." },
      { label: 'Check with a known value', content: "Substitute $F = 212$: $C = \\dfrac{5}{9}(180) = 100$, the known boiling point, as expected." },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'If $6x + 6y = 42$, what is $x + y$? (You cannot find $x$ and $y$ on their own — do not try.)',
    answer: "**7.** Every coefficient is a multiple of $6$, so factor: $6(x+y) = 42$, then divide by $6$. The combination emerges in one step; the individual values of $x$ and $y$ are never needed, and a single equation could not have determined them in any case.",
  },
  {
    type: 'checkpointQuestion',
    question: 'You solve a system and find $x = 3$, but the question asks for $4x - 5$. What do you bubble?',
    answer: "**7.** Substitute $x = 3$ into the quantity actually requested: $4(3) - 5 = 7$. Recording $3$ is the standard error — that is the value of $x$, not of $4x - 5$. Re-reading the final clause of the question converts correct algebra into a correct answer.",
  },
  {
    type: 'checkpointQuestion',
    question: 'Solve $5(x + 2) = 3x + 16$ for $x$.',
    answer: "**3.** Distribute the $5$ across both terms first: $5x + 10 = 3x + 16$ (not $5x + 2$). Collect variables and constants: subtract $3x$ to get $2x + 10 = 16$, then subtract $10$ to get $2x = 6$, so $x = 3$. Check: $5(3 + 2) = 25$ and $3(3) + 16 = 25$. Both sides agree.",
  },

  {
    type: 'text',
    content: "**In summary:** apply every operation to both entire sides, undo operations in reverse order, treat other letters as fixed constants when rearranging a formula, and report the exact quantity the question requests.",
  },
];
