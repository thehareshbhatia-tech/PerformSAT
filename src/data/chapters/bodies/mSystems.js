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
    content: 'A system is just **two equations sharing the same two unknowns**. Your whole job is to pick the fast way to cancel one variable — and, when the question asks for something like $x+y$, to not even solve for the variables at all.',
  },

  { type: 'heading', content: 'Substitution — when a variable is already alone' },
  {
    type: 'text',
    content: 'If one equation already has a variable by itself (like $y = 2x - 1$), plug that expression into the *other* equation. Now you have one equation in one unknown. Solve it, then back-substitute for the second variable.',
  },
  {
    type: 'keyInsight',
    content: 'Substitution means replacing a variable with an **equal expression** — not setting the two equations equal to each other. Only do that when *both* are solved for the same variable.',
  },

  { type: 'heading', content: 'Elimination — when both are in standard form' },
  {
    type: 'text',
    content: 'When both equations look like $ax + by = c$, line them up and add or subtract so one variable cancels. If the coefficients do not match, scale one (or both) rows by a whole number first so they become opposites, then add.',
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
    content: 'Two lines can relate in exactly three ways. **Different slopes** cross once → one solution. **Same slope, different intercept** → parallel, never meet → no solution. **Same line written twice** → every point works → infinitely many.',
  },
  {
    type: 'text',
    content: 'A quick tell: rewrite both in $y = mx + b$. Compare slope $m$ first; only if the slopes match do you check the intercept $b$ to tell *parallel* apart from *identical*.',
  },

  { type: 'heading', content: 'Build a system from a word problem' },
  {
    type: 'text',
    content: 'Most word-problem systems pair a **count** equation (the things add up to a total: $x + y = 40$) with a **value** equation (each thing times its price/weight adds to a second total: $5x + 8y = 260$). Define your variables in words first, then keep the units straight — items add to items, dollars add to dollars.',
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
    type: 'text',
    content: '**The move, every time:** read what is asked → if it is a combination like $x+y$, add or subtract the rows; otherwise isolate-and-substitute or scale-and-eliminate → answer the variable they actually wanted.',
  },
];
