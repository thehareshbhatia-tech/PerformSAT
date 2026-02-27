export const systemsContent = {
  moduleId: 'systems',
  title: 'Systems of Equations',
  description: 'Substitution, elimination, DESMOS graphing, no-solution/infinite-solution analysis, and word-problem translation for the Digital SAT.',

  sections: {
    coreConcepts: {
      title: 'Core Concepts',
      summary: 'What a system is, the three possible outcomes, and how to detect no-solution vs. infinite-solution cases algebraically.',
      blocks: [
        { type: 'heading', content: 'What Is a System?' },
        {
          type: 'text',
          content: 'A system is two (or more) equations with the **same variables**. The solution is the (x, y) pair that satisfies **both** equations simultaneously — geometrically, the intersection point of the two lines.',
        },
        { type: 'heading', content: 'Three Possible Outcomes' },
        {
          type: 'iconRow',
          items: [
            { icon: '✅', label: 'One Solution', description: 'Lines intersect at one point (different slopes)' },
            { icon: '🚫', label: 'No Solution', description: 'Lines are parallel (same slope, different intercept)' },
            { icon: '♾️', label: 'Infinite Solutions', description: 'Lines are identical (one is a scalar multiple of the other)' },
          ],
        },
        {
          type: 'table',
          title: 'Detecting Special Cases',
          headers: ['Coefficient Relationship', 'Constants', 'Result'],
          rows: [
            ['a₁/a₂ = b₁/b₂', '$\\neq$ c₁/c₂', '**No solution** (parallel)'],
            ['a₁/a₂ = b₁/b₂', '= c₁/c₂', '**Infinite solutions** (same line)'],
            ['a₁/a₂ $\\neq$ b₁/b₂', 'Any', '**One unique solution**'],
          ],
        },
        {
          type: 'keyInsight',
          content: '"For what value of k does the system have no solution?" is one of the most predictable hard-question patterns. Set the coefficient ratios equal but the constant ratio different, then solve for k.',
        },
      ],
    },

    satPatterns: {
      title: 'SAT Patterns',
      summary: 'Four pattern types with recognition cues, a special-case trap, and a method-selection rule.',
      blocks: [
        {
          type: 'iconRow',
          items: [
            { icon: '🔄', label: 'Solve for Variable/Expression', description: '"Find x, y, or x + y"' },
            { icon: '⚙️', label: 'Value of k', description: '"For what k is there no solution?"' },
            { icon: '📝', label: 'Word Problem Setup', description: '"Translate a story into equations"' },
            { icon: '📊', label: 'Graph Intersection', description: '"What does the point represent?"' },
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Systems Question Types',
          content: '**Solve**: Try add/subtract first — if the result gives the asked-for expression (e.g., 3x), stop. **Value of k**: No solution → same slopes, different intercepts. Infinite → same line (scalar multiple). **Word problem**: Two distinct relationships → two equations. **Graph**: Intersection = solution; read coordinates from DESMOS.',
        },
        {
          type: 'trapCard',
          title: 'No Solution vs. Infinite Solutions',
          wrong: 'Treating both as "no intersection" or confusing the coefficient/constant ratio logic.',
          correction: '**No solution**: a₁/a₂ = b₁/b₂ but c₁/c₂ differs → parallel lines. **Infinite**: a₁/a₂ = b₁/b₂ = c₁/c₂ → same line. Set coefficient ratios equal first; then check whether constants match.',
        },
        {
          type: 'tip',
          content: '**Substitution** when one variable is isolated (y = … or x = …) or easy to isolate. **Elimination** when both equations are in standard form and coefficients align. **DESMOS** when numbers are messy or you need verification.',
        },
      ],
    },

    methods: {
      title: 'Methods',
      summary: 'Four solving workflows: substitution, elimination, DESMOS graphing, and strategic add/subtract for expression-based questions.',
      blocks: [
        { type: 'heading', content: 'Method 1: Substitution' },
        {
          type: 'steps',
          title: 'Best when one variable is already isolated',
          items: [
            'Solve one equation for one variable (pick the one with coefficient 1): e.g., **y = 3x - 2**',
            'Substitute that expression into the **other** equation',
            'Solve the resulting single-variable equation',
            'Back-substitute to find the other variable',
          ],
        },
        { type: 'heading', content: 'Method 2: Elimination' },
        {
          type: 'steps',
          title: 'Best when both equations are in standard form',
          items: [
            'Align both equations as **Ax + By = C**',
            'Multiply one or both so a variable has **opposite coefficients**',
            'Add the equations — that variable cancels',
            'Solve for the remaining variable, then back-substitute',
          ],
        },
        { type: 'heading', content: 'Method 3: DESMOS Graphing' },
        {
          type: 'steps',
          title: 'Fastest method on the Digital SAT',
          items: [
            'Type equation 1 into DESMOS (any form — it handles standard form natively)',
            'Type equation 2 into a second line',
            'Click the **intersection dot** → read (x, y)',
            'No intersection → **no solution**; lines overlap → **infinite solutions**',
          ],
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Strategic Add/Subtract',
          content: 'When the SAT asks for x + y or 2x - y, try adding or subtracting the equations first. Variable isolated → **substitution**. Standard form → **elimination**. Need verification → **DESMOS**.',
        },
      ],
    },

    commonTraps: {
      title: 'Common Traps',
      summary: 'Five errors that cost students points: wrong variable, sign mistakes, misunderstanding special cases, word-problem setup mistakes, and method mismatch.',
      blocks: [
        {
          type: 'trapCard',
          title: 'Answering the Wrong Variable',
          wrong: 'The question asks for **y**, but you solve for x and select that value.',
          correction: 'Circle what the question asks **before** solving. After finding one variable, always finish the back-substitution if needed.',
        },
        {
          type: 'trapCard',
          title: 'Elimination Sign Error',
          wrong: 'Adding equations when coefficients have the same sign (should subtract), or vice versa.',
          correction: 'Same sign → **subtract** (or multiply one by -1 first). Opposite signs → **add**.',
        },
        {
          type: 'trapCard',
          title: '"No Solution" $\\neq$ (0, 0)',
          wrong: 'Students think "no solution" means x = 0 and y = 0.',
          correction: '"No solution" means parallel lines that **never intersect**. If you get a contradiction like 0 = 5, that confirms it.',
        },
        {
          type: 'trapCard',
          title: 'Word Problem Equation Mix-Up',
          wrong: 'Tickets: \\$8 adult, \\$5 child, 80 people, \\$500 total. Student writes 8a + 5c = 80.',
          correction: 'Two separate relationships: **a + c = 80** (people) and **8a + 5c = 500** (revenue). Units must match within each equation.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The "Value of k" Trap',
          content: 'For "no solution" questions, don\'t set entire equations equal. Set the **slopes equal** (coefficient ratios proportional) and verify the **constants differ**.',
        },
      ],
    },

    workedExamples: {
      title: 'Worked Examples',
      summary: 'A word-problem system and a "value of k" no-solution problem solved fully.',
      blocks: [
        {
          type: 'example',
          difficulty: 'Medium',
          problem: 'A school sold 200 tickets. Adult tickets cost \\$12, student tickets \\$7. Total revenue: \\$1,900. How many adult tickets were sold?',
          steps: [
            { label: 'Define variables', content: 'a = adult tickets, s = student tickets.' },
            { label: 'Set up system', content: '**a + s = 200** and **12a + 7s = 1900**.' },
            { label: 'Substitute', content: 's = 200 - a → 12a + 7(200 - a) = 1900.' },
            { label: 'Solve', content: '12a + 1400 - 7a = 1900 → 5a = 500 → **a = 100**.' },
            { label: 'Verify', content: 's = 100. Revenue: 12(100) + 7(100) = 1200 + 700 = 1900 ✓.' },
          ],
        },
        {
          type: 'example',
          difficulty: 'Hard',
          problem: 'For what value of k does the system 3x + ky = 15 and 6x - 8y = 10 have no solution?',
          steps: [
            { label: 'Condition', content: 'No solution → coefficient ratios equal, constant ratios not: **3/6 = k/(-8) $\\neq$ 15/10**.' },
            { label: 'Solve', content: '1/2 = k/(-8) → k = **-4**.' },
            { label: 'Verify not infinite', content: 'Constant ratio: 15/10 = 3/2 $\\neq$ 1/2. Constants differ → confirmed **no solution**.' },
            { label: 'Check', content: 'With k = -4: multiply first equation by 2 → 6x - 8y = 30 $\\neq$ 10. Parallel lines ✓.' },
          ],
        },
      ],
    },

    visualModels: {
      title: 'Visual Models',
      summary: 'Mental diagrams for the three outcome types, intersection meaning in context, and how elimination works geometrically.',
      blocks: [
        { type: 'heading', content: 'The Three Cases' },
        {
          type: 'diagramRef',
          description: 'Three coordinate planes: (1) Two lines crossing at one point — "One Solution," (2) Two parallel lines — "No Solution," (3) Two overlapping identical lines — "Infinite Solutions."',
        },
        { type: 'heading', content: 'Intersection in Context' },
        {
          type: 'diagramRef',
          description: 'Two cost functions intersecting: x = when they are equal, y = shared value. DESMOS: graph both equations, click the intersection dot.',
        },
        {
          type: 'keyInsight',
          content: 'Lines cross → one solution. Parallel → no solution. Overlap → infinite. On the Digital SAT, graph in DESMOS and read the answer.',
        },
      ],
    },

    speedStrategy: {
      title: 'Speed & Strategy',
      summary: 'Systems are the most DESMOS-friendly topic on the SAT — timing tactics to solve even hard questions in under 30 seconds.',
      blocks: [
        {
          type: 'strategyCard',
          title: 'DESMOS Instant Solve',
          icon: '📱',
          timing: '~15s',
          content: 'Type both equations into DESMOS (any form). Click the intersection dot. Read coordinates. This is the single fastest systems strategy.',
        },
        {
          type: 'strategyCard',
          title: 'Add Before You Solve',
          icon: '➕',
          timing: '~10s',
          content: 'Try **adding** the two equations. If the result directly gives the asked-for expression (like x + y or 3x), you have the answer without solving the system.',
        },
        {
          type: 'strategyCard',
          title: 'DESMOS Slider for "Value of k"',
          icon: '🎚️',
          timing: '~20s',
          content: 'Type the system with k as a slider. Drag until the lines become parallel (no intersection) or overlap (infinite solutions). Read k directly.',
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Time Budget',
          content: 'DESMOS solve: **15–20s**. Elimination (easy): **30s**. Word problem setup + solve: **60–90s**. "Value of k" with slider: **20–30s**.',
        },
        {
          type: 'tip',
          content: 'If a system has ugly fractions, skip algebra entirely — DESMOS handles decimals and fractions flawlessly. Let the calculator do the arithmetic.',
        },
      ],
    },

    checkpoint: {
      title: 'Checkpoint',
      blocks: [
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'Solve: x + y = 8 and x - y = 2. What is x?',
          answer: 'Add the equations: 2x = 10 → **x = 5**. Then y = 8 - 5 = 3.',
        },
        {
          type: 'checkpointQuestion',
          number: 2,
          question: 'The system 4x + 6y = 12 and 2x + 3y = k has infinitely many solutions. What is k?',
          answer: 'Divide the first by 2: 2x + 3y = 6. For the equations to be identical, **k = 6**.',
        },
      ],
    },
  },
};
