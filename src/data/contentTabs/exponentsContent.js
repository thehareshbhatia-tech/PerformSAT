export const exponentsContent = {
  moduleId: 'exponents',
  title: 'Exponents & Exponential Functions',
  description: 'Exponent rules, rational exponents, radicals, and exponential growth/decay models for the Digital SAT.',

  sections: {
    coreConcepts: {
      title: 'Core Concepts',
      summary: 'Definitions and intuition for exponent rules, rational exponents, and exponential models.',
      blocks: [
        {
          type: 'formulaGrid',
          items: [
            { label: 'Product Rule', formula: '$a^m \\cdot a^n = a^{m+n}$', note: 'Same base → add exponents' },
            { label: 'Quotient Rule', formula: '$a^m / a^n = a^{m-n}$', note: 'Same base → subtract exponents' },
            { label: 'Power Rule', formula: '$(a^m)^n = a^{mn}$', note: 'Power of a power → multiply' },
            { label: 'Zero Exponent', formula: '$a^0 = 1$', note: 'Any nonzero base' },
            { label: 'Negative Exponent', formula: '$a^{-n} = 1/a^n$', note: 'Flip to denominator' },
            { label: 'Distribute to Factors', formula: '$(ab)^n = a^nb^n$', note: 'Only over multiplication, never addition' },
          ],
        },
        {
          type: 'formula',
          label: 'Rational Exponent ↔ Radical',
          content: '$a^{m/n} = \\sqrt[n]{a^m} = (\\sqrt[n]{a})^m$',
          note: 'Denominator = root index, numerator = power',
        },
        {
          type: 'formula',
          label: 'Exponential Model',
          content: '$f(x) = a \\cdot b^x$',
          note: 'a = initial value (when x = 0), b = growth/decay factor per period',
        },
        {
          type: 'table',
          title: 'Growth vs. Decay at a Glance',
          headers: ['Condition', 'Behavior', 'Example'],
          rows: [
            ['b > 1', 'Exponential growth', 'f(x) = 100 · 1.05ˣ → 5% growth per period'],
            ['0 < b < 1', 'Exponential decay', 'f(x) = 100 · 0.85ˣ → 15% decay per period'],
          ],
        },
        {
          type: 'keyInsight',
          content: 'The growth/decay **rate** is |b - 1|, not b itself. A factor of 1.07 means a 7% rate. College Board offers both 1.07 and 7% as answer choices — pick the one the question asks for.',
        },
      ],
    },

    satPatterns: {
      title: 'SAT Patterns',
      summary: 'Recognition cues and decision rules for exponent prompts.',
      blocks: [
        { type: 'callout', variant: 'info', title: 'Exponent Question Types', content: '**Simplify/rewrite** — apply product, quotient, power rules; same base → combine exponents. **Equivalent forms** — radical ↔ rational exponent; a^(m/n) = ⁿ√(aᵐ). **Model interpretation** — f(x) = a·bˣ; a = initial, b = factor, |b-1| = rate. **Common-base equations** — 4ˣ = 8 → rewrite as 2^(2x) = 2³ → set exponents equal.' },
        { type: 'iconRow', items: [
          { icon: '🔄', label: 'Simplify', description: 'Product, quotient, power rules' },
          { icon: '⚖️', label: 'Equivalent Form', description: 'Radical ↔ rational exponent' },
          { icon: '📈', label: 'Model', description: 'a·bˣ: initial, factor, rate' },
          { icon: '🔢', label: 'Common Base', description: 'Rewrite; set exponents equal' },
        ] },
        { type: 'trapCard', title: 'Distributing Exponents Over Addition', wrong: '(x + y)² → x² + y². Or (2 + 3)² → 2² + 3² = 13.', correction: 'Exponents distribute over **multiplication** only: (xy)² = x²y². For addition: (x + y)² = x² + 2xy + y². (2 + 3)² = 25, not 13.' },
        { type: 'tip', content: '**Decision rule:** When solving an equation with different bases (4ˣ = 8, 9^(x+1) = 27ˣ), **convert to common base first**. 4 = 2², 8 = 2³, 9 = 3², 27 = 3³. Once both sides share a base, set exponents equal and solve.' },
      ],
    },

    methods: {
      title: 'Methods',
      summary: 'Step-by-step procedures for every exponent problem type on the SAT.',
      blocks: [
        { type: 'heading', content: 'Method 1: Common-Base Rewrite' },
        {
          type: 'steps',
          title: 'When bases are powers of the same number',
          items: [
            'Identify the smallest shared prime base (usually 2, 3, or 5)',
            'Rewrite every term: 8 = 2³, 16 = 2⁴, 27 = 3³, etc.',
            'Apply the Power Rule: (2³)ˣ = 2^(3x)',
            'Combine with Product/Quotient Rules',
            'If solving an equation, set exponents equal once both sides share the same base',
          ],
        },
        { type: 'heading', content: 'Method 2: Solving Exponential Equations' },
        {
          type: 'steps',
          title: 'When both sides can share a base',
          items: [
            'Rewrite both sides with the same base',
            'Set the exponents equal',
            'Solve the resulting linear equation',
          ],
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Shortcut',
          content: '"If 2ˣ = k, what is 2^(3x)?" → 2^(3x) = (2ˣ)³ = k³. For f(x) = a·b^(x/k): a = initial, rate = |b-1|.',
        },
      ],
    },

    commonTraps: {
      title: 'Common Traps',
      summary: 'The specific errors College Board builds into wrong answer choices for exponent problems.',
      blocks: [
        {
          type: 'trapCard',
          title: 'Multiplying Exponents Instead of Adding',
          wrong: 'x³ · x⁴ → x¹² (multiplied 3 $\\times$ 4)',
          correction: 'Same base, multiply → **add** exponents: x³ · x⁴ = x⁷. Multiply exponents only in the power rule: (x³)⁴ = x¹².',
        },
        {
          type: 'trapCard',
          title: 'Distributing Exponent Over Addition',
          wrong: '(x + y)² → x² + y²',
          correction: '(x + y)² = x² + 2xy + y². Exponents distribute over multiplication only: (xy)² = x²y².',
        },
        {
          type: 'trapCard',
          title: 'Negative Exponent = Negative Number',
          wrong: '3⁻² → -9',
          correction: '3⁻² = 1/3² = 1/9. Negative exponent means reciprocal, not negative value.',
        },
        {
          type: 'trapCard',
          title: 'Fractional Exponent Flip',
          wrong: 'x^(2/3) → √(x³) — putting the numerator as the root index',
          correction: 'x^(2/3) = ³√(x²). Denominator = root, numerator = power. Think: "denominator = down = root."',
        },
        {
          type: 'trapCard',
          title: 'Growth Rate vs. Growth Factor',
          wrong: 'f(t) = 500 · (1.07)^t → "growth rate is 1.07"',
          correction: 'The **factor** is 1.07; the **rate** is 0.07 = 7%. Rate = b - 1.',
        },
      ],
    },

    workedExamples: {
      title: 'Worked Examples',
      summary: 'Full solutions to SAT-style exponent problems at Medium and Hard difficulty.',
      blocks: [
        {
          type: 'example',
          difficulty: 'Medium',
          problem: 'If 9^(x+1) = 27^x, what is the value of x?',
          steps: [
            { label: 'Rewrite with base 3', content: '9 = 3², 27 = 3³ → (3²)^(x+1) = (3³)^x' },
            { label: 'Power Rule', content: '3^(2x+2) = 3^(3x)' },
            { label: 'Set exponents equal', content: '2x + 2 = 3x → x = **2**' },
            { label: 'Verify', content: '9³ = 729, 27² = 729 ✓' },
          ],
        },
        {
          type: 'example',
          difficulty: 'Hard',
          problem: 'A bacteria population is modeled by P(t) = 800 · 2^(t/3), where t is hours. What does the 3 represent?\n\n(A) The bacteria triple every 3 hours\n(B) The population is 3 times the initial\n(C) The population doubles every 3 hours\n(D) The population increases by 3 each hour',
          steps: [
            { label: 'Identify structure', content: 'Form: a · b^(t/k) where a = 800, b = 2, k = 3' },
            { label: 'Interpret b = 2', content: 'Base 2 → population **doubles** each full cycle' },
            { label: 'Interpret k = 3', content: 't/3 means one cycle = 3 hours. At t = 3: P = 800·2¹ = 1600 (doubled)' },
            { label: 'Eliminate', content: '(A) says triple, but base is 2. (B) misreads the 3. (D) confuses additive vs. multiplicative.' },
            { label: 'Answer', content: '**(C) The population doubles every 3 hours**' },
          ],
        },
      ],
    },

    visualModels: {
      title: 'Visual Models',
      summary: 'Mental pictures for exponent rules, the power number line, and growth/decay curve shapes.',
      blocks: [
        { type: 'heading', content: 'The Exponent Number Line' },
        {
          type: 'diagramRef',
          description: 'Powers of 2 on a number line: …2⁻³ = 1/8, 2⁻² = 1/4, 2⁻¹ = 1/2, 2⁰ = 1, 2¹ = 2, 2² = 4, 2³ = 8… Moving right multiplies by 2 (product rule). Moving left divides by 2 (quotient rule).',
        },
        { type: 'heading', content: 'Growth vs. Decay Curve Shapes' },
        {
          type: 'diagramRef',
          description: 'Growth curve (b > 1): starts at (0, a), concave up, accelerates upward. Decay curve (0 < b < 1): starts at (0, a), concave up, levels off toward y = 0 asymptote. Both pass through (0, a).',
        },
        {
          type: 'keyInsight',
          content: 'The y-intercept of f(x) = a · bˣ is always **(0, a)** because b⁰ = 1. On a graph, this is the starting value. Recognizing this instantly answers "what is the initial population?" questions.',
        },
      ],
    },

    speedStrategy: {
      title: 'Speed & Strategy',
      summary: 'Timing tactics and DESMOS techniques to solve exponent problems in under 60 seconds.',
      blocks: [
        {
          type: 'strategyCard',
          title: 'DESMOS: Graph Both Sides',
          icon: '📊',
          timing: '~20s',
          content: 'For 2^(x+1) = 8^(x-1), graph y = 2^(x+1) and y = 8^(x-1). The intersection\'s x-coordinate is the answer — no algebra needed.',
        },
        {
          type: 'strategyCard',
          title: 'Plug-In for Equivalence',
          icon: '🔌',
          timing: '~25s',
          content: 'Plug x = 2 into the original and each answer choice. Matching value = correct answer. If two match, try x = 3.',
        },
        {
          type: 'strategyCard',
          title: 'Instant Common-Base Recognition',
          icon: '🎯',
          timing: '~10s',
          content: '4, 8, 16, 32, 64 → powers of 2. 9, 27, 81 → powers of 3. Spot the base instantly and skip the rewrite step in your head.',
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Time Budget',
          content: 'Rule simplification: **30s**. Common-base equation: **45s**. Model interpretation: **30s**. Over 90s → switch to DESMOS.',
        },
      ],
    },

    checkpoint: {
      title: 'Checkpoint',
      summary: 'Two retrieval questions covering exponent rules and exponential models.',
      blocks: [
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'Simplify: (x⁴ · x⁻²) / x³',
          answer: 'Numerator: x^(4 + (-2)) = x². Divide: x² / x³ = x^(2-3) = x⁻¹ = **1/x**.',
        },
        {
          type: 'checkpointQuestion',
          number: 2,
          question: 'A car depreciates by 12% per year from \\$25,000. Write the model and state the value after 3 years.',
          answer: 'Decay factor = 1 - 0.12 = 0.88. Model: **V(t) = 25000 · (0.88)^t**. After 3 years: 25000 · 0.88³ = 25000 · 0.681472 ≈ **\\$17,037**.',
        },
      ],
    },
  },
};
