export const quadraticsContent = {
  moduleId: 'quadratics',
  title: 'Quadratic Equations & Parabolas',
  description: 'Standard, vertex, and factored forms; discriminant; roots; vertex formula; and parabola analysis for the Digital SAT.',

  sections: {
    coreConcepts: {
      title: 'Core Concepts',
      summary: 'The three quadratic forms, what each reveals, the discriminant, and the quadratic formula.',
      blocks: [
        {
          type: 'formulaGrid',
          items: [
            { label: 'Standard Form', formula: '$f(x) = ax^2 + bx + c$', note: 'y-intercept = c, direction = sign of a' },
            { label: 'Vertex Form', formula: '$f(x) = a(x - h)^2 + k$', note: 'Vertex at (h, k)' },
            { label: 'Factored Form', formula: '$f(x) = a(x - p)(x - q)$', note: 'x-intercepts at p and q' },
          ],
        },
        {
          type: 'table',
          title: 'What Each Form Reveals',
          headers: ['Information', 'Standard', 'Vertex', 'Factored'],
          rows: [
            ['y-intercept', 'c directly', 'Plug x = 0', 'Plug x = 0'],
            ['Zeros / x-intercepts', 'Factor or formula', 'Set = 0, solve', 'p and q directly'],
            ['Vertex', 'x = -b/(2a)', '(h, k) directly', 'x = (p+q)/2'],
            ['Opens up/down', 'a > 0 / a < 0', 'a > 0 / a < 0', 'a > 0 / a < 0'],
          ],
        },
        {
          type: 'formula',
          label: 'Discriminant',
          content: '$D = b^2 - 4ac$',
          note: 'D > 0 → 2 real roots. D = 0 → 1 repeated root. D < 0 → no real roots.',
        },
        {
          type: 'formula',
          label: 'Quadratic Formula',
          content: '$x = (-b \\pm \\sqrt{b^2 - 4ac}) / (2a)$',
          note: 'Universal solver — works for any quadratic set to 0',
        },
        {
          type: 'callout',
          variant: 'memorize',
          title: 'Roots = Zeros = x-intercepts = Solutions',
          content: 'All four terms mean the same thing: the x-values where f(x) = 0. The SAT uses all four interchangeably.',
        },
        {
          type: 'keyInsight',
          content: 'The quadratic formula always works but is the **slowest** path. Try factoring first (~5s). If it doesn\'t factor cleanly, then use the formula (~30s). The formula is a safety net, not a first choice.',
        },
      ],
    },

    satPatterns: {
      title: 'SAT Patterns',
      summary: 'Four pattern types with recognition cues, a form-reading trap, and a conversion decision rule.',
      blocks: [
        {
          type: 'iconRow',
          items: [
            { icon: '🔢', label: 'Find the Roots', description: '"What are the solutions?"' },
            { icon: '⛰️', label: 'Vertex / Max / Min', description: '"Maximum height?" "Minimum cost?"' },
            { icon: '🔍', label: 'Discriminant', description: '"How many real solutions?"' },
            { icon: '🔄', label: 'Form Conversion', description: '"Which equivalent form?"' },
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Quadratic Question Types',
          content: '**Roots**: factored form gives p, q directly; standard form → factor or quadratic formula. **Vertex/max/min**: vertex form gives (h, k); standard → x = -b/(2a). **Discriminant**: "How many solutions?" or "for what k exactly one?" → D = b² - 4ac. **Form conversion**: match what the question asks to the form that reveals it.',
        },
        {
          type: 'trapCard',
          title: 'Misreading Which Form Reveals What',
          wrong: 'Treating vertex form as giving roots, or standard form as giving vertex directly.',
          correction: '**Factored**: roots at p, q. **Vertex**: vertex at (h, k). **Standard**: y-int = c, vertex x = -b/(2a). Each form exposes different info — don\'t hunt for roots in vertex form.',
        },
        {
          type: 'tip',
          content: '**Roots asked?** → Factored or quadratic formula. **Vertex/max/min asked?** → Vertex form or -b/(2a). **"How many solutions?"** → Discriminant only. **"Equivalent form"** → Convert to the form that matches the requested feature.',
        },
      ],
    },

    methods: {
      title: 'Methods',
      summary: 'Step-by-step procedures: factoring, quadratic formula, completing the square, vertex formula, and Vieta\'s shortcuts.',
      blocks: [
        { type: 'heading', content: 'Method 1: Factoring (Fastest)' },
        {
          type: 'steps',
          title: 'For x² + bx + c = 0',
          items: [
            'Find p, q where pq = c and p + q = b',
            'Write (x + p)(x + q) = 0',
            'Roots: x = -p and x = -q',
          ],
        },
        { type: 'heading', content: 'Method 2: Quadratic Formula (Universal)' },
        {
          type: 'steps',
          title: 'For ax² + bx + c = 0',
          items: [
            'Identify a, b, c (watch signs)',
            'Compute D = b² - 4ac',
            'x = (-b ± √D) / (2a)',
            'Simplify both solutions',
          ],
        },
        { type: 'heading', content: 'Method 3: Vertex Formula (Quick)' },
        {
          type: 'formula',
          label: 'Vertex Coordinates',
          content: '$Vertex = (-b/(2a), f(-b/(2a)))$',
          note: 'Compute x first, then plug back in for y',
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Vieta\'s Shortcut',
          content: 'Sum of roots = -b/a, product = c/a. When the SAT asks "sum of solutions," don\'t solve — compute -b/a.',
        },
      ],
    },

    commonTraps: {
      title: 'Common Traps',
      summary: 'The sign, form, and logic errors College Board embeds in quadratic answer choices.',
      blocks: [
        {
          type: 'trapCard',
          title: 'Vertex Form Sign Error',
          wrong: 'f(x) = (x - 3)² + 5 → vertex at (-3, 5)',
          correction: 'The form is a(x - **h**)² + k with a minus sign built in. (x - 3)² means h = **+3**. Vertex: **(3, 5)**.',
        },
        {
          type: 'trapCard',
          title: 'Factoring Without Setting = 0 First',
          wrong: 'x² + 5x = 6 → x(x+5) = 6 → "x = 6 or x + 5 = 6"',
          correction: 'Zero product property requires one side to equal **0**. Rearrange: x² + 5x - 6 = 0 → (x+6)(x-1) = 0 → x = -6 or x = 1.',
        },
        {
          type: 'trapCard',
          title: 'Squaring a Negative b',
          wrong: 'For b = -7: b² = -49',
          correction: '(-7)² = **49**. b² is always positive. This error corrupts the entire discriminant.',
        },
        {
          type: 'trapCard',
          title: 'Dividing Only Part of the Quadratic Formula',
          wrong: 'x = -b ± √(b²-4ac) / 2a — only the radical divided by 2a',
          correction: 'The **entire** numerator divides: x = **(-b ± √(b²-4ac)) / (2a)**. Use parentheses on your calculator.',
        },
        {
          type: 'trapCard',
          title: 'Confusing Roots with Vertex',
          wrong: 'Reporting an x-intercept as the minimum value',
          correction: 'Roots are where y = 0. The minimum value is the y-coordinate of the **vertex**, which is between the roots.',
        },
      ],
    },

    workedExamples: {
      title: 'Worked Examples',
      summary: 'Full solutions to a Medium vertex/max-height problem and a Hard discriminant problem.',
      blocks: [
        {
          type: 'example',
          difficulty: 'Medium',
          problem: 'f(x) = -2x² + 12x - 10 models the height of a ball in feet at time x seconds. What is the maximum height?',
          steps: [
            { label: 'Identify a, b, c', content: 'a = -2, b = 12, c = -10. Since a < 0, vertex is a **maximum**.' },
            { label: 'Vertex x-coordinate', content: 'x = -12/(2·-2) = -12/-4 = **3**' },
            { label: 'Vertex y-coordinate', content: 'f(3) = -2(9) + 36 - 10 = -18 + 36 - 10 = **8**' },
            { label: 'Answer', content: 'Maximum height is **8 feet** at t = 3 seconds.' },
          ],
        },
        {
          type: 'example',
          difficulty: 'Hard',
          problem: 'For what value of k does 3x² + kx + 12 = 0 have exactly one real solution?',
          steps: [
            { label: 'Recognize the signal', content: '"Exactly one solution" → discriminant = 0.' },
            { label: 'Set up D = 0', content: 'k² - 4(3)(12) = 0 → k² - 144 = 0' },
            { label: 'Solve', content: 'k² = 144 → k = ±12' },
            { label: 'Verify k = 12', content: '3x² + 12x + 12 = 0 → D = 144 - 144 = 0 ✓. Solution: x = -12/6 = -2.' },
            { label: 'Answer', content: '**k = 12 or k = -12**' },
          ],
        },
      ],
    },

    visualModels: {
      title: 'Visual Models',
      summary: 'Parabola anatomy, discriminant visualization, and three-form comparison on one graph.',
      blocks: [
        { type: 'heading', content: 'Anatomy of a Parabola' },
        {
          type: 'diagramRef',
          description: 'Upward-opening parabola with labels: vertex (lowest point), axis of symmetry (dashed vertical through vertex), x-intercepts (where curve crosses x-axis), y-intercept (where curve crosses y-axis). Symmetric about the axis.',
        },
        { type: 'heading', content: 'Discriminant: Three Cases' },
        {
          type: 'diagramRef',
          description: 'Three parabolas side by side: (1) D > 0 — crosses x-axis at two points, (2) D = 0 — touches x-axis at one point (tangent), (3) D < 0 — entirely above (or below) x-axis, never touches.',
        },
        {
          type: 'keyInsight',
          content: 'The vertex x-coordinate is always the **midpoint** of the roots: (1+3)/2 = 2. If the SAT gives factored form, you can find the vertex without converting to standard form.',
        },
      ],
    },

    speedStrategy: {
      title: 'Speed & Strategy',
      summary: 'DESMOS root/vertex finding, Vieta\'s shortcut, and a decision framework for method selection.',
      blocks: [
        {
          type: 'strategyCard',
          title: 'DESMOS: Roots and Vertex in Seconds',
          icon: '📊',
          timing: '~15s',
          content: 'Type y = ax² + bx + c. Click x-intercepts for roots, click the min/max point for the vertex. Faster than algebra for messy numbers.',
        },
        {
          type: 'strategyCard',
          title: 'Vieta\'s: Sum/Product Without Solving',
          icon: '⚡',
          timing: '~10s',
          content: 'Sum of roots = -b/a. Product of roots = c/a. When the SAT asks for these, bypass solving entirely.',
        },
        {
          type: 'strategyCard',
          title: 'Discriminant-Only for "How Many Solutions"',
          icon: '🔢',
          timing: '~10s',
          content: 'Compute D = b² - 4ac. D > 0 → two, D = 0 → one, D < 0 → none. Never find the actual roots for these questions.',
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Decision Framework',
          content: 'Can you factor in 5s? → Factor. Need only the vertex? → -b/(2a) or DESMOS. "How many solutions?" → Discriminant. Nothing works? → Quadratic formula or DESMOS.',
        },
        {
          type: 'tip',
          content: 'Graph every quadratic in DESMOS even after solving algebraically. A 5-second glance catches sign errors and confirms the parabola\'s direction, roots, and vertex.',
        },
      ],
    },

    checkpoint: {
      title: 'Checkpoint',
      summary: 'Two retrieval questions covering vertex finding and discriminant analysis.',
      blocks: [
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'What is the vertex of f(x) = x² - 8x + 15?',
          answer: 'x = -(-8)/(2·1) = 4. f(4) = 16 - 32 + 15 = -1. Vertex: **(4, -1)**.',
        },
        {
          type: 'checkpointQuestion',
          number: 2,
          question: 'For what values of k does 2x² + kx + 8 = 0 have no real solutions?',
          answer: 'D < 0: k² - 4(2)(8) < 0 → k² < 64 → **-8 < k < 8**.',
        },
      ],
    },
  },
};
