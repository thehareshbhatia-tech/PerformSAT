/**
 * Learn lesson body — Systems of Equations (Algebra, Math).
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

export const mSystemsBlocks = [
  {
    type: 'text',
    content: "A system consists of **two equations sharing the same two unknowns**. One equation alone admits infinitely many solutions; the second narrows the set to the single point that satisfies both. The central decision is choosing the fastest way to eliminate one variable — and when the question asks for a combination such as $x+y$, the most efficient path often bypasses solving for the variables entirely. Most of the difficulty lies in selecting the least-work method, not in the algebra itself.",
  },

  { type: 'heading', content: 'Substitution: when a variable is already isolated' },
  {
    type: 'text',
    content: "When one equation already presents a variable by itself — $y = 2x - 1$ — substitution is the natural choice. Substitute that expression into the *other* equation, producing one equation in one unknown. Solve it, then back-substitute to find the second variable. Substitution is efficient in this situation precisely because the demanding step — isolating a variable — has already been done. One rule keeps the method sound: substitute into the *other* equation, without exception. Substituting back into the same equation collapses it into a true but uninformative statement that determines nothing.",
  },
  {
    type: 'keyInsight',
    content: "Substitution means replacing a variable with an **equal expression** — not setting the two equations equal to each other. Set them equal only when *both* are solved for the same variable.",
  },

  { type: 'heading', content: 'Elimination: when both equations are in standard form' },
  {
    type: 'text',
    content: "When both equations take the form $ax + by = c$, align them so that like terms form columns, then add or subtract so that one variable cancels. Elimination suits standard form because aligned columns cancel cleanly. When the coefficients do not match, scale one equation (or both) by a whole number first so that one variable's coefficients become exact opposites — such as $+3y$ and $-3y$. This is the entire purpose of scaling: once a column contains opposites, adding the equations removes that variable and leaves a single equation in the other.",
  },
  {
    type: 'tip',
    content: "Subtracting one equation from another invites sign errors. Instead of subtracting, multiply one equation by $-1$ and **add**; addition is the only combining step required. Eliminate the variable the question does *not* ask for, so the surviving variable is the one requested.",
  },

  { type: 'heading', content: 'Choosing the method' },
  {
    type: 'table',
    headers: ['If you see…', 'Use…'],
    rows: [
      ['A variable already isolated ($y = \\dots$)', 'Substitution'],
      ['Both equations in $ax + by = c$ form', 'Elimination'],
      ['The question asks for $x+y$ or $x-y$', 'Add or subtract the equations directly'],
      ['Awkward decimals, with only the intersection point required', 'Graph both lines and read the intersection'],
    ],
  },

  { type: 'heading', content: 'One, none, or infinitely many solutions' },
  {
    type: 'text',
    content: "Two lines admit exactly three configurations: intersecting once, parallel, or identical. **Different slopes** intersect once → one solution. **Same slope, different intercept** → parallel lines that never meet → no solution. **The same line written twice** → every point satisfies both → infinitely many solutions. Questions emphasize the last two cases, because they turn on a slope comparison rather than on computing a point of intersection.",
  },
  {
    type: 'text',
    content: "The efficient test: rewrite both equations in $y = mx + b$ and compare the slopes first. If the slopes differ, the analysis ends — exactly one solution, regardless of the intercepts. If the slopes are equal, the intercept $b$ decides: different $b$ means parallel (no solution), and the same $b$ means identical (infinitely many). The slope settles the question whenever it can; the intercept matters only when the slopes agree.",
  },

  { type: 'heading', content: 'Choosing a constant for a target solution count' },
  {
    type: 'text',
    content: "Some questions run the analysis in reverse: the system contains an unknown constant, and the question asks which value of that constant produces no solution or infinitely many. The conditions come directly from the slope comparison. **No solution** requires parallel lines — scale one equation so its $x$- and $y$-coefficients match the other's exactly, and the totals must still *differ*. **Infinitely many** requires the same line written twice — every coefficient *and* the constant must scale by the same factor, making one equation an exact multiple of the other. The distinction is precise: matching left sides with different totals gives parallel lines, while matching everything gives a single line.",
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'In the system below, $c$ is a constant. For what value of $c$ does the system have no solution?\n\n$2x + 5y = 9$\n$6x + cy = 21$',
    steps: [
      { label: 'Scale to compare coefficients', content: "Multiply the first equation by $3$ so the $x$-coefficients match: $6x + 15y = 27$." },
      { label: 'Match the left sides', content: "Parallel lines require identical left sides, so $cy$ must equal $15y$: $c = 15$." },
      { label: 'Confirm the totals differ', content: "With $c = 15$ the left sides are identical but the totals are $27$ and $21$ — one expression cannot equal two different numbers, so the lines are parallel and the system has no solution. (Had the second total been $27$ as well, the two equations would describe the same line, giving infinitely many solutions instead.)" },
    ],
  },

  { type: 'heading', content: 'Building a system from a word problem' },
  {
    type: 'text',
    content: "Most word-problem systems pair a **count** equation (the quantities sum to a total: $x + y = 40$) with a **value** equation (each quantity times its price or weight sums to a second total: $5x + 8y = 260$). Realistic scenarios pin down two separate totals — how many, and how much — which is why this pairing recurs so often. Define the variables in words first, then keep the units consistent: items add to items, dollars add to dollars. That discipline prevents the classic error of adding a count to a dollar amount — an equation with no meaning.",
  },
  {
    type: 'callout',
    content: "Mixture problems follow the same structure, with **two totals: substance and volume.** The amounts of pure substance add, and the total volumes add. Water contributes $0$ to the substance equation; a pure ingredient contributes all of itself.",
  },

  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'A chemist mixes a 10% acid solution with a 25% acid solution to produce 30 liters of a 20% acid solution. How many liters of each are used?',
    steps: [
      { label: 'Define variables and write the volume equation', content: "Let $a$ = liters of the 10% solution and $b$ = liters of the 25% solution. The volumes combine to the stated total: $a + b = 30$." },
      { label: 'Write the pure-substance equation', content: "Each term is concentration times volume — the liters of pure acid each solution contributes. The acid amounts also combine: $0.10a + 0.25b = 0.20(30) = 6$. (Had one ingredient been plain water, its term would be $0 \\cdot a$ — water contributes no acid.)" },
      { label: 'Substitute and solve', content: "From the volume equation, $a = 30 - b$. Then $0.10(30 - b) + 0.25b = 6$, so $3 + 0.15b = 6$, giving $0.15b = 3$ and $b = 20$. Back-substitute: $a = 10$." },
      { label: 'Check both conserved totals', content: "Volume: $10 + 20 = 30$ liters. Acid: $0.10(10) + 0.25(20) = 1 + 5 = 6$ liters of pure acid in $30$ liters — a 20% concentration, matching the target." },
    ],
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Solve the system:\n\n$y = 3x - 4$\n$2x + y = 6$',
    steps: [
      { label: 'Identify the isolated variable', content: "$y$ is already isolated in the first equation, so substitute $3x - 4$ for $y$ in the second." },
      { label: 'Solve the single equation', content: "$2x + (3x - 4) = 6 \\Rightarrow 5x - 4 = 6 \\Rightarrow 5x = 10 \\Rightarrow x = 2$." },
      { label: 'Back-substitute', content: "$y = 3(2) - 4 = 2$. Solution: $(2,\\, 2)$." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'If $4x + 3y = 19$ and $4x - 3y = 5$, what is the value of $x$?',
    steps: [
      { label: 'Inspect the coefficients', content: "The $3y$ terms are already opposites, so adding the two equations cancels $y$ immediately." },
      { label: 'Add the equations', content: "$(4x + 3y) + (4x - 3y) = 19 + 5 \\Rightarrow 8x = 24$." },
      { label: 'Solve for what was asked', content: "$x = 3$. Stop here — the question asks only for $x$, and computing $y$ adds nothing." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'A vendor sells 30 items — some at \\$4 each, the rest at \\$7 each — for \\$153 total. How many \\$7 items were sold?',
    steps: [
      { label: 'Define variables', content: "Let $f$ = number of \\$4 items and $s$ = number of \\$7 items." },
      { label: 'Write the count equation', content: "The items total 30: $f + s = 30$." },
      { label: 'Write the value equation', content: "The money totals \\$153: $4f + 7s = 153$." },
      { label: 'Eliminate $f$', content: "Multiply the count equation by $4$: $4f + 4s = 120$. Subtract it from the value equation (negate its terms and add): $3s = 33 \\Rightarrow s = 11$." },
      { label: 'Answer the question', content: "There were $11$ items sold at \\$7. (Check: $19$ at \\$4 gives $\\$76 + \\$77 = \\$153$.)" },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Solve the system:\n\n$2x + 3y = 12$\n$x + y = 5$',
    steps: [
      { label: 'Scale to create opposites', content: "The $x$-coefficients are $2$ and $1$. Multiply the second equation by $-2$ so that its $x$-coefficient becomes the opposite: $-2x - 2y = -10$." },
      { label: 'Add the equations to cancel $x$', content: "$(2x + 3y) + (-2x - 2y) = 12 + (-10) \\Rightarrow y = 2$." },
      { label: 'Back-substitute', content: "Substitute $y = 2$ into $x + y = 5$: $x = 3$. Solution: $(3,\\, 2)$. Check: $2(3) + 3(2) = 12$." },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'The system $6x + 2y = 10$ and $3x + y = 4$ — how many solutions does it have?',
    answer: "**None.** Divide the first equation by $2$: $3x + y = 5$. This has the same left side as $3x + y = 4$ but a different total, and one expression cannot equal two different numbers. The lines are parallel and never intersect.",
  },
  {
    type: 'checkpointQuestion',
    question: 'If $2x + 5y = 12$ and $2x - 5y = 4$, what is $x$? Which method is fastest?',
    answer: "**$x = 4$.** Add the equations: the $5y$ terms are already opposites, so they cancel, leaving $4x = 16$. Addition is fastest here precisely because no scaling step is required.",
  },
  {
    type: 'checkpointQuestion',
    question: 'How many solutions does the system $y = 2x + 1$ and $6x - 3y = -3$ have?',
    answer: "**Infinitely many.** Solve the second equation for $y$: $6x - 3y = -3 \\Rightarrow -3y = -6x - 3 \\Rightarrow y = 2x + 1$ — identical to the first equation. The system describes one line written twice, so every point on it satisfies both.",
  },

  {
    type: 'checkpointQuestion',
    question: 'In the system $x + 3y = 7$ and $2x + 6y = c$, for what value of $c$ does the system have infinitely many solutions?',
    answer: "**$c = 14$.** The left side of the second equation is exactly double the first, so the equations describe the same line only when the total doubles as well: $c = 2(7) = 14$. For any other value of $c$ the left sides still match after scaling but the totals differ — parallel lines, no solution. No value of $c$ gives exactly one solution, because the slopes agree for every $c$.",
  },

  {
    type: 'text',
    content: "**In summary:** identify the requested quantity first. For a combination such as $x+y$, add or subtract the equations directly; otherwise substitute when a variable is already isolated, or scale and eliminate when both equations are in standard form. Report the exact quantity the question asks for.",
  },
];
