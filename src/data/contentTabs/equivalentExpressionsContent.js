export const equivalentExpressionsContent = {
  moduleId: 'equivalent-expressions',
  title: 'Equivalent Expressions',
  description: 'Distributing, factoring, combining like terms, recognizing equivalent forms, and DESMOS verification for the Digital SAT.',

  sections: {
    coreConcepts: {
      title: 'Core Concepts',
      summary: 'What equivalence means, the distributive property, like terms, factoring patterns, and special products.',
      blocks: [
        {
          type: 'text',
          content: 'Two expressions are **equivalent** if they produce the same output for every input. On the SAT, this means any value of x gives the same result in both. The three core moves — distributing, combining like terms, and factoring — rewrite expressions without changing their value.',
        },
        {
          type: 'formulaGrid',
          items: [
            { label: 'Distribution', formula: '$a(b + c) = ab + ac$', note: 'Multiply each term inside' },
            { label: 'Factoring (GCF)', formula: '$ab + ac = a(b + c)$', note: 'Pull out common factor' },
            { label: 'FOIL', formula: '$(a+b)(c+d) = ac+ad+bc+bd$', note: 'Two binomials' },
            { label: 'Difference of Squares', formula: '$a^2 - b^2 = (a+b)(a-b)$', note: 'Factor or expand; no middle term' },
          ],
        },
        {
          type: 'formulaGrid',
          items: [
            { label: 'Perfect Square (sum)', formula: '$(a+b)^2 = a^2 + 2ab + b^2$', note: 'Don\'t forget the middle term' },
            { label: 'Perfect Square (diff)', formula: '$(a-b)^2 = a^2 - 2ab + b^2$', note: 'Middle term is negative' },
          ],
        },
        {
          type: 'table',
          title: 'Like vs. Unlike Terms',
          headers: ['Expression', 'Like Terms?', 'Result'],
          rows: [
            ['3x² + 5x²', 'Yes — same variable, same power', '8x²'],
            ['4x + 7x²', 'No — different powers', 'Cannot combine'],
            ['2xy + 5xy', 'Yes', '7xy'],
          ],
        },
        {
          type: 'keyInsight',
          content: 'You don\'t always need to simplify algebraically. Two expressions are equivalent iff they graph identically in DESMOS — or return the same value for any plug-in. Use the method that\'s fastest for the question.',
        },
      ],
    },

    satPatterns: {
      title: 'SAT Patterns',
      summary: 'Four archetypes: "which is equivalent", "find k", "which form reveals…", and coefficient extraction.',
      blocks: [
        {
          type: 'callout',
          variant: 'info',
          title: 'Equivalent Expression Archetypes',
          content: '**"Which is equivalent?"**: Match expanded/factored — plug in x = 2 or graph in DESMOS. **"Find k"**: True for all x → expand and match coefficients. **"Which form reveals…?"**: Factored → zeros; vertex → min/max. **Coefficient extraction**: a+b+c → evaluate at x = 1.',
        },
        {
          type: 'iconRow',
          items: [
            { icon: '🔄', label: '"Which Is Equivalent?"', description: 'Match expanded/factored forms' },
            { icon: '🔑', label: '"Find k"', description: 'True for all x → match coefficients' },
            { icon: '📐', label: '"Which Form Reveals…?"', description: 'Factored → zeros, vertex → min/max' },
            { icon: '🧮', label: 'Coefficient Extraction', description: '"Find a + b + c"' },
          ],
        },
        {
          type: 'trapCard',
          title: '"True for All x" vs. "Solve for x"',
          wrong: 'Treating "ax² + bx + c = dx² + ex + f for all x" as an equation to solve — picking one value of x.',
          correction: '"True for all x" means the expressions are identical. Expand both sides, match coefficients of x², x, and constant. "Solve for x" finds a specific value — different task entirely.',
        },
        {
          type: 'tip',
          content: '**Expand** when the target is standard form, you need to match coefficients, or the question says "true for all x." **Factor** when the target is factored form, you need zeros, or the structure suggests a special product (difference of squares, perfect square).',
        },
      ],
    },

    methods: {
      title: 'Methods',
      summary: 'Step-by-step procedures: expand, plug-in, DESMOS graph, factor, and coefficient match.',
      blocks: [
        { type: 'heading', content: 'Method 1: Expand and Simplify' },
        {
          type: 'steps',
          title: 'Algebraic simplification',
          items: [
            'Distribute all products (FOIL for binomials)',
            'Combine like terms — group by power',
            'Order by decreasing power (standard form)',
          ],
        },
        { type: 'heading', content: 'Method 2: Plug-In x = 2' },
        {
          type: 'steps',
          title: 'Numeric test (fastest with answer choices)',
          items: [
            'Evaluate the original at x = 2 → target value',
            'Evaluate each answer choice at x = 2',
            'Eliminate non-matches; if two match, try x = 3',
          ],
        },
        { type: 'heading', content: 'Method 3: Factoring' },
        {
          type: 'steps',
          title: 'When the target form is factored',
          items: [
            'Pull out GCF first — always',
            '2 terms → difference of squares? 3 terms → trinomial? 4 terms → grouping?',
            'For x² + bx + c: find p, q where pq = c and p + q = b',
            'Verify by re-expanding',
          ],
        },
        {
          type: 'tip',
          content: 'Avoid x = 0, 1, or -1 when plugging in. For "true for all x," expand and match coefficients.',
        },
      ],
    },

    commonTraps: {
      title: 'Common Traps',
      summary: 'The algebraic errors College Board builds into wrong answer choices.',
      blocks: [
        {
          type: 'trapCard',
          title: 'The Missing Middle Term',
          wrong: '(x + 5)² → x² + 25',
          correction: '(x + 5)² = x² + **10x** + 25. The middle term 2ab is always there. College Board puts x² + 25 as a trap.',
        },
        {
          type: 'trapCard',
          title: 'Sign Error When Distributing a Negative',
          wrong: '3 - 2(x - 4) → 3 - 2x - 8 → -2x - 5',
          correction: '-2(-4) = +8, so 3 - 2x + 8 = **-2x + 11**. The negative distributes to every term inside.',
        },
        {
          type: 'trapCard',
          title: 'Combining Unlike Terms',
          wrong: '3x² + 5x → 8x³',
          correction: 'Different powers cannot combine. 3x² + 5x is already simplified. Factor as x(3x + 5) if needed.',
        },
        {
          type: 'trapCard',
          title: 'Canceling Terms Instead of Factors',
          wrong: '(x² + 3x)/x → x² + 3 (canceling x only from the second term)',
          correction: 'Divide **every** term: x²/x + 3x/x = **x + 3**. Or factor first: x(x+3)/x = x + 3.',
        },
      ],
    },

    workedExamples: {
      title: 'Worked Examples',
      summary: 'Full solutions to a Medium coefficient-matching problem and a Hard rational-expression simplification.',
      blocks: [
        {
          type: 'example',
          difficulty: 'Medium',
          problem: 'If (2x - 3)(x + 4) = ax² + bx + c for all x, what is a + b + c?',
          steps: [
            { label: 'Shortcut: plug in x = 1', content: '(2·1 - 3)(1 + 4) = (-1)(5) = **-5**' },
            { label: 'Since f(1) = a + b + c', content: 'a + b + c = **-5**' },
            { label: 'Algebraic check', content: '2x² + 5x - 12 → 2 + 5 + (-12) = -5 ✓' },
          ],
        },
        {
          type: 'example',
          difficulty: 'Hard',
          problem: 'Simplify: (x² + 6x + 9) / (x² - 9)',
          steps: [
            { label: 'Factor numerator', content: 'x² + 6x + 9 = (x + 3)²' },
            { label: 'Factor denominator', content: 'x² - 9 = (x + 3)(x - 3)' },
            { label: 'Cancel common factor', content: '(x + 3)² / [(x + 3)(x - 3)] = **(x + 3)/(x - 3)**' },
            { label: 'DESMOS verify', content: 'Graph both expressions — identical curves (undefined at x = -3) ✓' },
          ],
        },
      ],
    },

    visualModels: {
      title: 'Visual Models',
      summary: 'The area model for multiplication, DESMOS graph overlay, and form-information map.',
      blocks: [
        { type: 'heading', content: 'Area Model for FOIL' },
        {
          type: 'diagramRef',
          description: 'Rectangle split into 4 cells for (x + 3)(x + 5): top-left x·x = x², top-right x·5 = 5x, bottom-left 3·x = 3x, bottom-right 3·5 = 15. Total: x² + 8x + 15. The two middle rectangles are the "missing" middle term students forget.',
        },
        {
          type: 'keyInsight',
          content: 'Standard form reveals the y-intercept. Factored form reveals the zeros. Vertex form reveals the min/max. All three are equivalent — same parabola, different information visible.',
        },
      ],
    },

    speedStrategy: {
      title: 'Speed & Strategy',
      summary: 'DESMOS overlay, the f(1) shortcut, and a decision framework for choosing the fastest method.',
      blocks: [
        {
          type: 'strategyCard',
          title: 'DESMOS: 10-Second Equivalence Test',
          icon: '📊',
          timing: '~10s',
          content: 'Graph the original and each answer choice. The matching graph overlaps perfectly — you see only one curve. No algebra required.',
        },
        {
          type: 'strategyCard',
          title: 'The f(1) Shortcut',
          icon: '⚡',
          timing: '~5s',
          content: 'When the SAT asks for a + b + c where f(x) = ax² + bx + c, just evaluate the original expression at x = 1.',
        },
        {
          type: 'strategyCard',
          title: 'Instant Special-Product Recognition',
          icon: '🎯',
          timing: '~5s',
          content: 'Train to spot on sight: x² - 9 = (x+3)(x-3). x² + 6x + 9 = (x+3)². x² - 10x + 25 = (x-5)². Recognition beats derivation.',
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Decision Framework',
          content: 'Spot the answer in 5s? → Pick it. Not obvious? → **Plug in x = 2** or **graph in DESMOS**. Full algebraic expansion is the last resort. The SAT rewards speed.',
        },
      ],
    },

    checkpoint: {
      title: 'Checkpoint',
      summary: 'Two retrieval questions covering expansion and factoring.',
      blocks: [
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'Expand and simplify: (3x - 2)(x + 5)',
          answer: '3x² + 15x - 2x - 10 = **3x² + 13x - 10**.',
        },
        {
          type: 'checkpointQuestion',
          number: 2,
          question: 'If 2(x + k)² - 8 = 2x² + 12x + 10 for all x, what is k?',
          answer: 'Expand: 2(x² + 2kx + k²) - 8 = 2x² + 4kx + 2k² - 8. Match x-coefficient: 4k = 12 → **k = 3**. Check constants: 2(9) - 8 = 10 ✓.',
        },
      ],
    },
  },
};
