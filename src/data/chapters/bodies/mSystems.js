/**
 * Learn lesson body — Systems of Equations (Algebra, Math).
 *
 * Lean "review / cheat-sheet" style: one SAT skill, plain language, one idea per
 * short section, a method, then worked examples and a couple of check-yourself
 * questions. Shape + voice exemplar is bodies/gSubjectVerbAgreement.js.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const mSystemsBlocks = [
  {
    type: 'text',
    content: 'A system is just **two equations sharing the same two unknowns**. Your whole job is to pick the fast way to cancel one variable — and, when the question asks for something like $x+y$, to not even solve for the variables at all. Two equations are enough because one alone leaves infinitely many possibilities, while a second one about the same unknowns narrows it down to the single point that satisfies both. Almost all of the difficulty is choosing the least-work path to that point, not the algebra itself.',
  },

  { type: 'heading', content: 'Substitution — when a variable is already alone' },
  {
    type: 'text',
    content: 'If one equation already has a variable by itself (like $y = 2x - 1$), plug that expression into the *other* equation. Now you have one equation in one unknown. Solve it, then back-substitute for the second variable. Substitution shines here precisely because the hard part — getting one variable alone — is already done for you. The rule that keeps it clean: always substitute into the *other* equation, since plugging back into the same one just collapses to a true statement and tells you nothing new.',
  },
  {
    type: 'keyInsight',
    content: 'Substitution means replacing a variable with an **equal expression** — not setting the two equations equal to each other. Only do that when *both* are solved for the same variable.',
  },

  { type: 'heading', content: 'Elimination — when both are in standard form' },
  {
    type: 'text',
    content: 'When both equations look like $ax + by = c$, line them up and add or subtract so one variable cancels. Elimination is built for standard form because the matching columns line up for a clean cancel. If the coefficients do not match, scale one (or both) rows by a whole number first so they become opposites, then add. The whole aim of scaling is to turn one variable\'s coefficients into exact opposites — like $+3y$ and $-3y$ — so that adding the rows makes that variable vanish and leaves a single equation in the other one.',
  },
  {
    type: 'tip',
    content: 'Subtracting rows is where signs die. Instead, multiply one row by $-1$ and **add** — you only ever add. And aim to cancel the variable you *do not* want, so what survives is the one the question asks for.',
  },

  { type: 'heading', content: 'Pick the cheaper route' },
  {
    type: 'table',
    headers: ['If you see…', 'Use…'],
    rows: [
      ['A variable already isolated ($y = \\dots$)', 'Substitution'],
      ['Both rows in $ax + by = c$ form', 'Elimination'],
      ['The question asks for $x+y$ or $x-y$', 'Add or subtract the rows directly'],
      ['Ugly decimals, and it just wants the point', 'Graph both, read the crossing'],
    ],
  },

  { type: 'heading', content: 'One, none, or infinitely many' },
  {
    type: 'text',
    content: 'Two lines can relate in exactly three ways. **Different slopes** cross once → one solution. **Same slope, different intercept** → parallel, never meet → no solution. **Same line written twice** → every point works → infinitely many. These are the only three possibilities because two straight lines can only cross once, run alongside each other forever, or lie exactly on top of one another. The test leans on the "no solution" and "infinitely many" cases because they hinge on a slope comparison rather than on grinding out a point.',
  },
  {
    type: 'text',
    content: 'A quick tell: rewrite both in $y = mx + b$. Compare slope $m$ first; only if the slopes match do you check the intercept $b$ to tell *parallel* apart from *identical*. Slope decides everything up front — different slopes guarantee exactly one solution no matter what the intercepts are, so there is no reason to look further. Only when the slopes tie does the intercept become the tiebreaker between parallel (no solution) and identical (infinitely many).',
  },

  { type: 'heading', content: 'Build a system from a word problem' },
  {
    type: 'text',
    content: 'Most word-problem systems pair a **count** equation (the things add up to a total: $x + y = 40$) with a **value** equation (each thing times its price/weight adds to a second total: $5x + 8y = 260$). The count-and-value pairing shows up so often because a real scenario usually pins down two separate totals — how many things there are, and how much they are worth. Define your variables in words first, then keep the units straight — items add to items, dollars add to dollars — because that habit is what stops the classic mix-up of adding a count to a dollar amount, which yields an equation that means nothing.',
  },
  {
    type: 'callout',
    content: 'Mixtures work the same way: **two ledgers, one pour.** The amounts of pure substance add, and the total volumes add. Water contributes $0$ to the substance; a pure ingredient contributes all of itself.',
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Solve the system:\n\n$y = 3x - 4$\n$2x + y = 6$',
    steps: [
      { label: 'A variable is alone', content: '$y$ is already isolated in the first equation, so substitute $3x - 4$ for $y$ in the second.' },
      { label: 'One unknown', content: '$2x + (3x - 4) = 6 \\Rightarrow 5x - 4 = 6 \\Rightarrow 5x = 10 \\Rightarrow x = 2$.' },
      { label: 'Back-substitute', content: '$y = 3(2) - 4 = 2$. Solution: $(2,\\, 2)$.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'If $4x + 3y = 19$ and $4x - 3y = 5$, what is the value of $x$?',
    steps: [
      { label: 'Both in standard form', content: 'The $3y$ terms are already opposites, so add the two equations to cancel $y$.' },
      { label: 'Add the rows', content: '$(4x + 3y) + (4x - 3y) = 19 + 5 \\Rightarrow 8x = 24$.' },
      { label: 'Solve for what was asked', content: '$x = 3$. No need to find $y$ — the question only wanted $x$.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'A vendor sells 30 items — some at \\$4 each, the rest at \\$7 each — for \\$153 total. How many \\$7 items were sold?',
    steps: [
      { label: 'Define variables', content: 'Let $f$ = number of \\$4 items and $s$ = number of \\$7 items.' },
      { label: 'Count equation', content: 'The items total 30: $f + s = 30$.' },
      { label: 'Value equation', content: 'The money totals \\$153: $4f + 7s = 153$.' },
      { label: 'Eliminate $f$', content: 'Multiply the count equation by $4$: $4f + 4s = 120$. Subtract it from the value equation (flip signs and add): $3s = 33 \\Rightarrow s = 11$.' },
      { label: 'Answer the question', content: 'There were $11$ items sold at \\$7. (Check: $19$ at \\$4 gives $\\$76 + \\$77 = \\$153$.)' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Solve the system:\n\n$2x + 3y = 12$\n$x + y = 5$',
    steps: [
      { label: 'Scale to make a match', content: 'The $x$-coefficients are $2$ and $1$. Multiply the second equation by $-2$ so its $x$ becomes the opposite: $-2x - 2y = -10$.' },
      { label: 'Add the rows to cancel $x$', content: '$(2x + 3y) + (-2x - 2y) = 12 + (-10) \\Rightarrow y = 2$.' },
      { label: 'Back-substitute', content: 'Put $y = 2$ into $x + y = 5$: $x = 3$. Solution: $(3,\\, 2)$. Check: $2(3) + 3(2) = 12$.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'The system $6x + 2y = 10$ and $3x + y = 4$ — how many solutions does it have?',
    answer: '**None.** Divide the first by $2$: $3x + y = 5$. That has the same left side as $3x + y = 4$ but a different total, so the lines are parallel and never meet.',
  },
  {
    type: 'checkpointQuestion',
    question: 'If $2x + 5y = 12$ and $2x - 5y = 4$, what is $x$? Which method is fastest?',
    answer: '**$x = 4$.** Add the equations — the $5y$ terms cancel, leaving $4x = 16$. Elimination by adding is fastest because the $y$-coefficients are already opposites.',
  },
  {
    type: 'checkpointQuestion',
    question: 'How many solutions does the system $y = 2x + 1$ and $6x - 3y = -3$ have?',
    answer: '**Infinitely many.** Solve the second for $y$: $6x - 3y = -3 \\Rightarrow -3y = -6x - 3 \\Rightarrow y = 2x + 1$, which is identical to the first equation. It is the same line written twice, so every point on it satisfies both.',
  },

  {
    type: 'text',
    content: '**The move, every time:** read what is asked → if it is a combination like $x+y$, add or subtract the rows; otherwise isolate-and-substitute or scale-and-eliminate → answer the variable they actually wanted.',
  },
];
