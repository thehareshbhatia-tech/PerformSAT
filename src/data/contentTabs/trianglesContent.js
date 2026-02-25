export const trianglesContent = {
  moduleId: 'triangles',
  title: 'Triangles',
  description: 'Master triangle properties, the Pythagorean theorem, SOH CAH TOA, special right triangles, and similarity for the Digital SAT.',
  sections: {
    coreConcepts: {
      title: 'Core Concepts',
      summary: 'Interior angles sum to 180°; a² + b² = c² for right triangles; SOH CAH TOA defines trig ratios; 30-60-90 and 45-45-90 have fixed side ratios; similar triangles have proportional sides.',
      blocks: [
        {
          type: 'formulaGrid',
          items: [
            { label: 'Angle Sum', formula: 'A + B + C = 180°', note: 'Every triangle, always' },
            { label: 'Pythagorean Theorem', formula: 'a² + b² = c²', note: 'c = hypotenuse (longest side)' },
            { label: 'Area', formula: 'A = ½ × base × height', note: 'Height must be ⊥ to base' },
          ],
        },
        {
          type: 'formulaGrid',
          items: [
            { label: 'sin θ', formula: 'Opposite / Hypotenuse', note: 'SOH' },
            { label: 'cos θ', formula: 'Adjacent / Hypotenuse', note: 'CAH' },
            { label: 'tan θ', formula: 'Opposite / Adjacent', note: 'TOA' },
          ],
        },
        {
          type: 'table',
          title: 'Special Right Triangle Ratios',
          headers: ['Triangle', 'Side Ratios', 'How It Arises'],
          rows: [
            ['45-45-90', 'x : x : x√2', 'Isosceles right triangle; half a square diagonal'],
            ['30-60-90', 'x : x√3 : 2x', 'Half an equilateral triangle'],
          ],
        },
        {
          type: 'callout',
          variant: 'memorize',
          title: 'Pythagorean Triples',
          content: '**3-4-5** (×2 = 6-8-10, ×3 = 9-12-15) | **5-12-13** | **8-15-17** | **7-24-25**. Recognizing these on sight eliminates computation.',
        },
        {
          type: 'text',
          content: 'Two triangles are **similar** if their corresponding angles are equal (AA is sufficient). Similar triangles have **proportional** corresponding sides: a₁/a₂ = b₁/b₂ = c₁/c₂ = scale factor k.',
        },
        {
          type: 'keyInsight',
          content: 'The SAT reference sheet provides special-triangle ratios, but looking them up costs 5–10 seconds each time. Memorize: **30-60-90 → x, x√3, 2x** and **45-45-90 → x, x, x√2**.',
        },
      ],
    },

    satPatterns: {
      title: 'SAT Patterns',
      summary: 'College Board tests six triangle patterns: missing-angle, Pythagorean applications, special-triangle recognition, similar-triangle proportions, SOH CAH TOA in context, and the sin = cos complement rule.',
      blocks: [
        {
          type: 'callout',
          variant: 'info',
          title: 'Pattern 1: Find the Missing Angle',
          content: '"Angle A = 35°, Angle B = 70°. What is Angle C?" → 180 − 35 − 70 = 75°. Often embedded in problems with parallel lines or exterior angles.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Pattern 2: Pythagorean Theorem',
          content: '"A 10-foot ladder leans against a wall, base 6 feet away. How high does it reach?" → 6-8-10 triple → **8 feet**. College Board disguises right triangles in real-world scenarios.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Pattern 3: Special Right Triangles',
          content: '"An equilateral triangle has side 10. What is its altitude?" → 30-60-90 with hypotenuse 10, short leg 5 → altitude = **5√3**.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Pattern 4: Similar Triangles & Proportions',
          content: 'Two triangles share angles (AA). One triangle\'s sides are given; find a corresponding side of the other. Set up a single proportion and cross-multiply.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Pattern 5: SOH CAH TOA in Context',
          content: '"From 50 meters away, the angle of elevation to a building\'s top is 40°. Find the height." → tan 40° = h/50 → h = 50 tan 40°.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Pattern 6: sin x = cos(90° − x)',
          content: '"If sin x° = cos y° and x + y = 90…" The SAT tests the complement identity regularly. If sin 35° = 0.574, then cos 55° = 0.574.',
        },
      ],
    },

    methods: {
      title: 'Methods',
      summary: 'Four solving workflows: Pythagorean theorem pipeline, special-triangle ratio matching, SOH CAH TOA setup, and similar-triangle proportion solving.',
      blocks: [
        {
          type: 'steps',
          title: 'Method 1: Pythagorean Theorem',
          items: [
            'Confirm the triangle has a **right angle**.',
            'Identify the **hypotenuse** (longest side, opposite the right angle) as c.',
            'Plug into **a² + b² = c²** and solve for the unknown.',
            'Check: does the answer match a known triple? (3-4-5, 5-12-13, 8-15-17)',
          ],
        },
        {
          type: 'steps',
          title: 'Method 2: Special Right Triangle Recognition',
          items: [
            'Spot the triangle type: 30-60-90 (half equilateral) or 45-45-90 (isosceles right).',
            'Match the given side to its position in the ratio: **x : x√3 : 2x** or **x : x : x√2**.',
            'Solve for x, then compute the remaining sides.',
          ],
        },
        {
          type: 'steps',
          title: 'Method 3: SOH CAH TOA',
          items: [
            'Label Opposite, Adjacent, and Hypotenuse **relative to the given angle θ**.',
            'Pick the ratio involving the two sides you need: sin (O/H), cos (A/H), or tan (O/A).',
            'Set up the equation and solve.',
          ],
        },
        {
          type: 'comparison',
          items: [
            { label: 'Use SIN when…', content: 'You have the **hypotenuse** and need the **opposite** (or vice versa). Common in angle-of-depression problems.', variant: 'correct' },
            { label: 'Use TAN when…', content: 'You have the two **legs** (no hypotenuse). Classic angle-of-elevation scenario.', variant: 'correct' },
          ],
        },
        {
          type: 'steps',
          title: 'Method 4: Similar Triangle Proportions',
          items: [
            'Prove similarity — usually **AA** (two matching angles).',
            'Identify corresponding sides (opposite equal angles).',
            'Set up **a₁/a₂ = b₁/b₂** and cross-multiply.',
          ],
        },
        {
          type: 'tip',
          content: 'When parallel lines cut two transversals, the resulting triangles are always similar by AA. This is the most common similar-triangle setup on the SAT.',
        },
      ],
    },

    commonTraps: {
      title: 'Common Traps',
      summary: 'The costliest errors: swapping legs and hypotenuse, mislabeling sides in special triangles, confusing similar with congruent, and using the wrong angle in trig ratios.',
      blocks: [
        {
          type: 'trapCard',
          title: 'Legs vs Hypotenuse Swap',
          wrong: 'Hypotenuse 13, leg 5. Solves 13² + 5² = c² → c = √194.',
          correction: 'Hypotenuse is always **c**: **5² + b² = 13²** → b = **12**. It\'s a 5-12-13 triple.',
        },
        {
          type: 'trapCard',
          title: 'Wrong Side in 30-60-90',
          wrong: 'Hypotenuse 10. Says side opposite 60° = 10√3 = 17.3. But hypotenuse should be longest!',
          correction: 'Hypotenuse = 2x = 10 → x = 5. Side opposite 60° = **5√3 ≈ 8.66**. Always start from the shortest side.',
        },
        {
          type: 'trapCard',
          title: 'SOH CAH TOA — Wrong Angle Reference',
          wrong: 'Uses the wrong vertex as reference, swapping opposite and adjacent sides.',
          correction: 'O, A, H are **relative to the named angle**. Draw the triangle, mark θ, then label sides from θ\'s perspective.',
        },
        {
          type: 'trapCard',
          title: 'Similar ≠ Congruent',
          wrong: 'Assumes similar triangles have equal sides and copies lengths directly.',
          correction: 'Similar = same shape, different size. Sides are **proportional**, not equal. Set up a ratio.',
        },
        {
          type: 'keyInsight',
          content: 'The #1 triangle mistake on the SAT: **mislabeling sides in special right triangles**. Always identify the shortest side first and build the ratio from there.',
        },
      ],
    },

    workedExamples: {
      title: 'Worked Examples',
      summary: 'A medium problem finding an equilateral triangle\'s altitude via 30-60-90 ratios, and a hard problem combining similar triangles with scale-factor perimeter.',
      blocks: [
        {
          type: 'example',
          difficulty: 'Medium',
          problem: 'An equilateral triangle has perimeter 36. What is the length of its altitude?',
          steps: [
            { label: 'Side Length', content: 'Perimeter 36 ÷ 3 = side of **12**.' },
            { label: 'Recognize', content: 'Altitude splits into two 30-60-90 triangles. Hypotenuse = 12, short leg = 6.' },
            { label: 'Solve', content: '30-60-90 ratio: altitude = x√3 = **6√3 ≈ 10.39**.' },
          ],
        },
        {
          type: 'example',
          difficulty: 'Hard',
          problem: 'Triangle ABC ~ Triangle DEF. AB = 8, BC = 12, AC = 15. If DE = 6, what is the perimeter of DEF?',
          steps: [
            { label: 'Scale Factor', content: 'DE/AB = 6/8 = **3/4**.' },
            { label: 'Shortcut', content: 'Perimeters scale by the same factor: (8 + 12 + 15) × 3/4 = 35 × 3/4 = **26.25**.' },
            { label: 'Answer', content: '**26.25** (or 105/4)' },
          ],
        },
      ],
    },

    visualModels: {
      title: 'Visual Models',
      summary: 'Reference diagrams for both special right triangles, the SOH CAH TOA labeling scheme, and a similar-triangle proportion diagram.',
      blocks: [
        {
          type: 'diagramRef',
          description: 'Two special right triangles side by side: (1) 30-60-90 with sides x, x√3, 2x and angles labeled; (2) 45-45-90 with sides x, x, x√2 and angles labeled.',
        },
        {
          type: 'diagramRef',
          description: 'Right triangle with angle θ at one vertex. Sides labeled: Opposite (across from θ), Adjacent (next to θ), Hypotenuse (longest). sin = O/H, cos = A/H, tan = O/A shown alongside.',
        },
        {
          type: 'table',
          title: 'Trig Values for Key Angles',
          headers: ['Angle', 'sin', 'cos', 'tan'],
          rows: [
            ['30°', '1/2', '√3/2', '√3/3'],
            ['45°', '√2/2', '√2/2', '1'],
            ['60°', '√3/2', '1/2', '√3'],
          ],
        },
        {
          type: 'diagramRef',
          description: 'Two similar triangles of different sizes with matching angles marked. Corresponding sides connected by dashed lines, labeled a₁/a₂ = b₁/b₂ = c₁/c₂ = k.',
        },
      ],
    },

    speedStrategy: {
      title: 'Speed & Strategy',
      summary: 'Spot Pythagorean triples by sight, use Desmos for trig calculations, memorize special-triangle ratios to skip the reference sheet, and remember sin x = cos(90° − x) for instant solves.',
      blocks: [
        {
          type: 'strategyCard',
          title: 'Spot Triples Instantly',
          icon: '👁',
          timing: '~5s',
          content: 'Sides 6 and 8? Hypotenuse is **10** (double 3-4-5). Sides 5 and 12? Hypotenuse is **13**. Recognition beats computation by 20+ seconds.',
        },
        {
          type: 'strategyCard',
          title: 'Desmos for Trig',
          icon: '🖩',
          timing: '~10s',
          content: 'Type **50 * tan(40)** directly into Desmos for elevation problems. Ensure you\'re in **degree mode** (wrench icon) for degree-based problems.',
        },
        {
          type: 'strategyCard',
          title: 'The sin = cos Shortcut',
          icon: '⚡',
          timing: '~5s',
          content: 'If **sin x° = cos y°**, then **x + y = 90**. No computation needed. The SAT tests this frequently.',
        },
        {
          type: 'keyInsight',
          content: 'Nearly every "hard" triangle problem on the Digital SAT combines two concepts (e.g., similar triangles + Pythagorean theorem). Train yourself to identify which **two** tools each problem requires.',
        },
      ],
    },

    checkpoint: {
      title: 'Checkpoint',
      summary: 'Two retrieval-practice questions covering special right triangle ratios and the Pythagorean theorem with trig.',
      blocks: [
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'In a 30-60-90 triangle, the side opposite 60° is **10√3**. What is the hypotenuse?',
          answer: 'Side opposite 60° = x√3 = 10√3, so x = 10. Hypotenuse = 2x = **20**.',
        },
        {
          type: 'checkpointQuestion',
          number: 2,
          question: 'If **sin A = 3/5** in a right triangle, what is **cos A**?',
          answer: 'O = 3, H = 5. Adjacent = √(25 − 9) = 4. **cos A = 4/5**. (It\'s a 3-4-5 triangle.)',
        },
      ],
    },
  },
};
