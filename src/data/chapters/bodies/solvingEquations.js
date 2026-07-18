/**
 * Learn lesson body — Solving Equations & Rearranging Formulas (Algebra).
 *
 * VOICE v3 (adopted 2026-07-17, exemplar: bodies/centralIdeas.js): scannable
 * instructional register — direct address, contractions, 1-3 sentence text
 * blocks, list blocks for criteria, steps blocks for procedures; no analogies,
 * no pep-talk, no emojis. All substance of the v2 textbook version preserved.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const solvingEquationsBlocks = [
  {
    type: 'text',
    content: "With the arithmetic from Number Foundations secure, algebra proper begins. An equation says two expressions have the same value — and every solving technique follows from one principle.",
  },
  {
    type: 'text',
    content: "**Apply the same operation to both entire sides until the target variable stands alone.** Do something to only one side and you've changed the relationship — you're now solving a different equation with a different solution.",
  },

  { type: 'heading', content: 'Undoing operations in reverse order' },
  {
    type: 'text',
    content: "An expression is built by applying operations to the variable in sequence. To unwind it, undo those operations in reverse: whatever was applied last comes off first.",
  },
  {
    type: 'text',
    content: "In $2x + 1 = 9$, the $x$ was multiplied by $2$ and then had $1$ added. So remove the $+1$ first (subtract $1$ from both sides), then the $\\times 2$ (divide both sides by $2$): $x = 4$.",
  },
  {
    type: 'text',
    content: "Undoing out of order forces a division that reaches only part of the expression while the leftover terms get dragged along incorrectly. That's where the arithmetic in multi-step solving typically breaks down.",
  },
  {
    type: 'keyInsight',
    content: "Every operation applies to **both entire sides**, never to a single term. And substituting the result back into the original equation — $2(4)+1 = 9$ — verifies the solution on its own, before you look at the answer choices.",
  },

  { type: 'heading', content: 'Variables on both sides' },
  {
    type: 'text',
    content: "When the variable shows up on both sides, collect the variable terms on one side and the constants on the other, then isolate as usual. A variable can't be isolated while copies of it sit on both sides of the equation.",
  },
  {
    type: 'text',
    content: "One prerequisite comes first: if a grouped expression is multiplied by a factor, **distribute the factor to every term in the group**. $-2(x-5) = -2x + 10$, not $-2x - 5$.",
  },
  {
    type: 'text',
    content: "Rushed distribution that drops the sign on the second term is the most frequent slip in this procedure — and wrong answer choices are built from exactly that slip.",
  },

  { type: 'heading', content: 'Rearranging formulas' },
  {
    type: 'text',
    content: "Rearranging a formula is the same procedure as solving a numeric equation. Treat every letter except the target variable as a fixed constant and run the same sequence of inverse operations.",
  },
  {
    type: 'text',
    content: "To solve $A = \\tfrac{1}{2}bh$ for $h$: multiply both sides by $2$ to get $2A = bh$, then divide both sides by $b$ to get $h = \\dfrac{2A}{b}$.",
  },
  {
    type: 'text',
    content: "The extra letters can look like they demand special handling. They don't — $A$ and $b$ obey the same algebraic rules a specific number like $7$ would. Classify each letter as either the target or a constant, then proceed as usual.",
  },
  {
    type: 'keyInsight',
    content: "The splitting rule for fractions runs in one direction only: a sum in a *numerator* splits ($\\frac{r+s}{t} = \\frac{r}{t} + \\frac{s}{t}$), but a sum in a *denominator* never does — $\\frac{r}{s+t}$ is **not** $\\frac{r}{s} + \\frac{r}{t}$. Splitting a denominator produces a tidy-looking expression that's wrong.",
  },

  { type: 'heading', content: 'Squares and square roots' },
  {
    type: 'text',
    content: "The reverse-order principle extends to formulas where the target variable is squared. In $A = \\pi r^2$, the $r$ was squared first and then multiplied by $\\pi$ — so undo the multiplication first (divide both sides by $\\pi$) and the square last (take the square root): $r^2 = \\dfrac{A}{\\pi}$, then $r = \\sqrt{\\dfrac{A}{\\pi}}$.",
  },
  {
    type: 'text',
    content: "Dividing first keeps the algebra clean: the root then applies to one isolated expression instead of a product you'd have to untangle afterward.",
  },
  {
    type: 'text',
    content: "Because $r$ is a radius, the **principal (positive) square root** is the one that applies — a geometric length can't be negative, so the $\\pm$ that accompanies square roots in pure equation-solving drops away.",
  },
  {
    type: 'keyInsight',
    content: "When the target sits *under* a square root, the same principle runs the other way: isolate the radical first, and square both sides **last**.",
  },
  {
    type: 'text',
    content: "To solve $T = 2\\pi\\sqrt{\\dfrac{L}{g}}$ for $L$: divide both sides by $2\\pi$ so the radical stands alone — $\\dfrac{T}{2\\pi} = \\sqrt{\\dfrac{L}{g}}$ — then square both sides to get $\\dfrac{T^2}{4\\pi^2} = \\dfrac{L}{g}$, and multiply by $g$.",
  },
  {
    type: 'text',
    content: "Square while other factors still sit beside the radical, and every one of those factors gets squared too — the $2\\pi$ becomes $4\\pi^2$. A factor left unsquared during that step is the standard error in this rearrangement.",
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The area of a circle is $A = \\pi r^2$. Solve for $r$ in terms of $A$.',
    steps: [
      { label: 'Undo the multiplication first', content: "The square was applied to $r$ before the multiplication by $\\pi$, so the $\\pi$ comes off first. Divide both sides by $\\pi$: $r^2 = \\dfrac{A}{\\pi}$." },
      { label: 'Undo the square last', content: "Take the principal square root of both sides: $r = \\sqrt{\\dfrac{A}{\\pi}}$. The positive root applies because $r$ is a length." },
      { label: 'Check with values', content: "A circle with $r = 3$ has area $A = 9\\pi$. Substituting back: $\\sqrt{\\dfrac{9\\pi}{\\pi}} = \\sqrt{9} = 3$, as expected." },
    ],
  },

  { type: 'heading', content: 'The combined-total form $Ax + By = C$' },
  {
    type: 'text',
    content: "When a problem prices *two* items and states their combined total, the equation follows straight from that structure: price times quantity, plus price times quantity, equals total.",
  },
  {
    type: 'text',
    content: "Adult tickets at $\\$8$ and child tickets at $\\$5$ with total spending of $\\$120$: the equation is $8a + 5c = 120$, and no slope-intercept form is involved. Reaching for $y = mx + b$ out of habit is the standard misstep when the situation is simply two costs filling a budget.",
  },
  {
    type: 'text',
    content: "Setting one variable to $0$ reads off an **intercept**: with $a = 0$, $5c = 120$, so $c = 24$ children — the case where only one item type is purchased, and a quick consistency check for any proposed answer.",
  },

  { type: 'heading', content: 'Answering the quantity asked for' },
  {
    type: 'text',
    content: "Many questions ask for a *combination* like $x + y$ or $2t$ rather than a single variable — and the combination is often one step away, no individual values required. These items are built to reward spotting the shortcut over solving at length.",
  },
  {
    type: 'text',
    content: "Given $3x + 3y = 21$, you can't find $x$ and $y$ separately from one equation — and you don't have to. Factor: $3(x+y) = 21$, divide by $3$, and $x + y = 7$ falls out immediately.",
  },
  {
    type: 'text',
    content: "Matching coefficients are the signal that the combination can be extracted directly.",
  },
  {
    type: 'tip',
    content: "Before recording an answer, re-read the final line of the question and name the exact quantity it wants — $x+y$, $2t$, or a single variable. Correct algebra followed by reporting the wrong quantity is one of the most frequent ways credit is lost on the math section.",
  },

  {
    type: 'steps',
    title: 'How to approach these questions',
    items: [
      '**Clear any parentheses.** Distribute every factor to every term inside — then check the sign on the last term.',
      '**Collect.** Variable terms on one side, constants on the other.',
      '**Undo in reverse order.** Whatever was applied to the variable last comes off first, applied to both entire sides.',
      '**Check by substitution.** Put the result back into the original equation and confirm both sides agree.',
      '**Answer what was asked.** Re-read the final line — the requested quantity may be $x + y$ or $2t$, not $x$.',
    ],
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
    answer: "**7.** Every coefficient is a multiple of $6$, so factor: $6(x+y) = 42$, then divide by $6$. The combination falls out in one step — the individual values of $x$ and $y$ are never needed, and a single equation couldn't have determined them anyway.",
  },
  {
    type: 'checkpointQuestion',
    question: 'You solve a system and find $x = 3$, but the question asks for $4x - 5$. What do you bubble?',
    answer: "**7.** Substitute $x = 3$ into the quantity actually requested: $4(3) - 5 = 7$. Recording $3$ is the standard slip — that's the value of $x$, not of $4x - 5$. Re-reading the final clause of the question turns correct algebra into a correct answer.",
  },
  {
    type: 'checkpointQuestion',
    question: 'Solve $5(x + 2) = 3x + 16$ for $x$.',
    answer: "**3.** Distribute the $5$ across both terms first: $5x + 10 = 3x + 16$ (not $5x + 2$). Collect variables and constants: subtract $3x$ to get $2x + 10 = 16$, then subtract $10$ to get $2x = 6$, so $x = 3$. Check: $5(3 + 2) = 25$ and $3(3) + 16 = 25$ — both sides agree.",
  },

  {
    type: 'list',
    title: '**The method in one place:**',
    items: [
      'Apply every operation to both entire sides.',
      'Undo operations in reverse order.',
      'Treat other letters as fixed constants when rearranging a formula.',
      'Isolate a squared term before taking the principal square root; isolate a radical before squaring.',
      'Report the exact quantity the question requests.',
    ],
  },
];
