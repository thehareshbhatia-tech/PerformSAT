/**
 * Learn lesson body — Systems of Equations (Algebra, Math).
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

export const mSystemsBlocks = [
  {
    type: 'text',
    content: "A system is just **two equations sharing the same two unknowns**. One equation alone leaves infinitely many possibilities; the second narrows it to the single point that satisfies both. Your whole job is picking the fastest way to make one variable cancel — and here's the real secret: when the question asks for something like $x+y$, the fastest students never solve for the variables at all. Almost all the difficulty lives in choosing the least-work path, not in the algebra itself.",
  },

  { type: 'heading', content: 'Substitution — when a variable is already alone' },
  {
    type: 'text',
    content: "If one equation already hands you a variable by itself — $y = 2x - 1$ — take the gift. Plug that expression into the *other* equation, and suddenly you've got one equation in one unknown. Solve it, then back-substitute for the second variable. Substitution shines here precisely because the hard part — getting a variable alone — was done for you. One rule keeps it clean: substitute into the *other* equation, always. Plug back into the same one and it collapses into a true-but-useless statement that tells you nothing new.",
  },
  {
    type: 'keyInsight',
    content: "Substitution means replacing a variable with an **equal expression** — not setting the two equations equal to each other. Only set them equal when *both* are solved for the same variable.",
  },

  { type: 'heading', content: 'Elimination — when both are in standard form' },
  {
    type: 'text',
    content: "When both equations look like $ax + by = c$, stack them so the columns line up, then add or subtract so one variable cancels. Elimination is built for standard form because matching columns make a clean cancel. Coefficients don't match? Scale one row (or both) by a whole number first so one variable's coefficients become exact opposites — like $+3y$ and $-3y$. That's the entire aim of scaling: once a column reads opposites, adding the rows wipes that variable out and leaves a single equation in the other one.",
  },
  {
    type: 'tip',
    content: "Subtracting rows is where signs go to die. Don't subtract — multiply one row by $-1$ and **add**. You only ever add. And cancel the variable you *don't* want, so the survivor is the one the question asks for.",
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
    content: "Two lines can only do three things: cross once, run parallel forever, or turn out to be the same line in disguise. **Different slopes** cross once → one solution. **Same slope, different intercept** → parallel, never meet → no solution. **Same line written twice** → every point works → infinitely many. The test leans hard on the last two cases, because they hinge on a slope comparison — not on grinding out a point.",
  },
  {
    type: 'text',
    content: "The quick tell: rewrite both in $y = mx + b$ and compare slope $m$ first. Different slopes? Done — exactly one solution, no matter what the intercepts say. Slopes tie? Now the intercept $b$ is the tiebreaker: different $b$ means parallel (no solution), same $b$ means identical (infinitely many). Slope decides everything up front; the intercept only gets a vote when the slopes agree.",
  },

  { type: 'heading', content: 'Build a system from a word problem' },
  {
    type: 'text',
    content: "Most word-problem systems are two ledgers: a **count** ledger (the things add up to a total: $x + y = 40$) and a **value** ledger (each thing times its price or weight adds to a second total: $5x + 8y = 260$). Real scenarios pin down two separate totals — how many, and how much — which is why this pairing shows up over and over. Define your variables in words first, then keep the units straight: items add to items, dollars add to dollars. That habit is the wall between you and the classic mix-up of adding a count to a dollar amount — an equation that means nothing.",
  },
  {
    type: 'callout',
    content: "Mixtures run on the same idea: **two ledgers, one pour.** The amounts of pure substance add, and the total volumes add. Water contributes $0$ to the substance ledger; a pure ingredient contributes all of itself.",
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Solve the system:\n\n$y = 3x - 4$\n$2x + y = 6$',
    steps: [
      { label: 'A variable is alone', content: "$y$ is already isolated in the first equation — take the gift and substitute $3x - 4$ for $y$ in the second." },
      { label: 'One unknown', content: "$2x + (3x - 4) = 6 \\Rightarrow 5x - 4 = 6 \\Rightarrow 5x = 10 \\Rightarrow x = 2$." },
      { label: 'Back-substitute', content: "$y = 3(2) - 4 = 2$. Solution: $(2,\\, 2)$." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'If $4x + 3y = 19$ and $4x - 3y = 5$, what is the value of $x$?',
    steps: [
      { label: 'Both in standard form', content: "The $3y$ terms are already opposites — add the two equations and $y$ cancels on its own." },
      { label: 'Add the rows', content: "$(4x + 3y) + (4x - 3y) = 19 + 5 \\Rightarrow 8x = 24$." },
      { label: 'Solve for what was asked', content: "$x = 3$. Stop there — the question only wanted $x$, and finding $y$ is unpaid work." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'A vendor sells 30 items — some at \\$4 each, the rest at \\$7 each — for \\$153 total. How many \\$7 items were sold?',
    steps: [
      { label: 'Define variables', content: "Let $f$ = number of \\$4 items and $s$ = number of \\$7 items." },
      { label: 'Count equation', content: "The items total 30: $f + s = 30$." },
      { label: 'Value equation', content: "The money totals \\$153: $4f + 7s = 153$." },
      { label: 'Eliminate $f$', content: "Multiply the count equation by $4$: $4f + 4s = 120$. Subtract it from the value equation (flip signs and add): $3s = 33 \\Rightarrow s = 11$." },
      { label: 'Answer the question', content: "There were $11$ items sold at \\$7. (Check: $19$ at \\$4 gives $\\$76 + \\$77 = \\$153$.)" },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Solve the system:\n\n$2x + 3y = 12$\n$x + y = 5$',
    steps: [
      { label: 'Scale to make a match', content: "The $x$-coefficients are $2$ and $1$. Multiply the second equation by $-2$ so its $x$ becomes the opposite: $-2x - 2y = -10$." },
      { label: 'Add the rows to cancel $x$', content: "$(2x + 3y) + (-2x - 2y) = 12 + (-10) \\Rightarrow y = 2$." },
      { label: 'Back-substitute', content: "Put $y = 2$ into $x + y = 5$: $x = 3$. Solution: $(3,\\, 2)$. Check: $2(3) + 3(2) = 12$." },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'The system $6x + 2y = 10$ and $3x + y = 4$ — how many solutions does it have?',
    answer: "**None.** Divide the first by $2$: $3x + y = 5$. Same left side as $3x + y = 4$, different total — and the same recipe can't add up to two different numbers. Parallel lines, no meeting point.",
  },
  {
    type: 'checkpointQuestion',
    question: 'If $2x + 5y = 12$ and $2x - 5y = 4$, what is $x$? Which method is fastest?',
    answer: "**$x = 4$.** Add the equations — the $5y$ terms are already opposites, so they cancel, leaving $4x = 16$. Adding is fastest here precisely because the scaling work was done for you.",
  },
  {
    type: 'checkpointQuestion',
    question: 'How many solutions does the system $y = 2x + 1$ and $6x - 3y = -3$ have?',
    answer: "**Infinitely many.** Solve the second for $y$: $6x - 3y = -3 \\Rightarrow -3y = -6x - 3 \\Rightarrow y = 2x + 1$ — the first equation in disguise. One line written twice, so every point on it satisfies both.",
  },

  {
    type: 'text',
    content: "**The move, every time:** read what's asked → if it's a combination like $x+y$, add or subtract the rows directly; otherwise isolate-and-substitute or scale-and-eliminate → then answer the variable they actually wanted.",
  },
];
