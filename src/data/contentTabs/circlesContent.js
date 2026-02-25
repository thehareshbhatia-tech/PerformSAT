export const circlesContent = {
  moduleId: 'circles',
  title: 'Circles',
  description: 'Master circle geometry — area, circumference, arc/sector formulas, the equation of a circle, completing the square, and tangent lines for the Digital SAT.',
  sections: {
    coreConcepts: {
      title: 'Core Concepts',
      summary: 'C = 2πr and A = πr²; arc length and sector area are proportional fractions of the whole; standard form (x−h)²+(y−k)²=r² encodes center and radius; completing the square converts general form; tangent ⊥ radius.',
      blocks: [
        {
          type: 'formulaGrid',
          items: [
            { label: 'Circumference', formula: 'C = 2πr = πd', note: 'Distance around the circle' },
            { label: 'Area', formula: 'A = πr²', note: 'Space enclosed by the circle' },
            { label: 'Arc Length', formula: 's = (θ/360) × 2πr', note: 'Fraction of circumference; θ in degrees' },
            { label: 'Sector Area', formula: 'A = (θ/360) × πr²', note: 'Fraction of total area; θ in degrees' },
          ],
        },
        {
          type: 'formula',
          label: 'Standard Form of a Circle',
          content: '(x − h)² + (y − k)² = r²',
          note: 'Center = **(h, k)**, Radius = **r**. The signs inside the parentheses are **opposite** the actual coordinates.',
        },
        {
          type: 'steps',
          title: 'Completing the Square (General → Standard)',
          items: [
            'Start with **x² + y² + Dx + Ey + F = 0**.',
            'Group: **(x² + Dx) + (y² + Ey) = −F**.',
            'Add **(D/2)²** and **(E/2)²** to **both** sides.',
            'Factor: **(x + D/2)² + (y + E/2)² = −F + (D/2)² + (E/2)²**.',
            'Read center = **(−D/2, −E/2)**, radius = **√(right side)**.',
          ],
        },
        {
          type: 'keyInsight',
          content: 'Arc length and sector area share the **same fraction** θ/360. The arc is that fraction of circumference; the sector is that fraction of area. A tangent line is always **⊥ to the radius** at the point of contact.',
        },
      ],
    },

    satPatterns: {
      title: 'SAT Patterns',
      summary: 'College Board tests six circle patterns: completing the square for center/radius, arc/sector word problems, writing equations from context, circle-line intersection counts, tangent-line slope problems, and translations.',
      blocks: [
        {
          type: 'callout',
          variant: 'info',
          title: 'Pattern 1: Center & Radius from General Form',
          content: '"x² + y² − 6x + 8y + 9 = 0 represents a circle. What is the radius?" Must complete the square. One of the most common "hard" questions.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Pattern 2: Arc Length / Sector Area',
          content: '"A pizza is cut into 8 equal slices, diameter 16 inches. Area of one slice?" → θ = 45°, r = 8, sector area = (45/360) × π(64) = **8π**.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Pattern 3: Write the Equation',
          content: '"Center (3, −2), passes through (7, 1). What is the equation?" Find r via distance formula, plug into standard form.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Pattern 4: Circle-Line Intersection',
          content: '"How many intersection points for y = x + 5 and x² + y² = 9?" Substitute line into circle, use discriminant to count solutions.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Pattern 5: Tangent Line Slope',
          content: '"A line is tangent to x² + y² = 25 at (3, 4). What is the slope?" Radius slope = 4/3, so tangent slope = **−3/4**.',
        },
        {
          type: 'table',
          title: 'Frequency & Difficulty',
          headers: ['Pattern', 'Frequency', 'Difficulty'],
          rows: [
            ['Area / circumference', 'Very common', 'Easy'],
            ['Arc length / sector area', 'Common', 'Easy–Medium'],
            ['Completing the square', 'Common', 'Medium–Hard'],
            ['Write equation from context', 'Common', 'Medium'],
            ['Circle-line intersection', 'Occasional', 'Hard'],
            ['Tangent lines', 'Occasional', 'Hard'],
          ],
        },
      ],
    },

    methods: {
      title: 'Methods',
      summary: 'Five procedures: completing the square, the proportion approach for arcs/sectors, building equations from graphs, finding tangent-line equations, and using the discriminant for intersection counts.',
      blocks: [
        {
          type: 'steps',
          title: 'Method 1: Complete the Square',
          items: [
            'Move constant to the right: **(x² + Dx) + (y² + Ey) = −F**.',
            'Half each coefficient, square it, add to **both** sides.',
            'Factor into perfect squares. Read center and radius.',
          ],
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Quick Example',
          content: 'x² + y² − 10x + 4y + 13 = 0 → (x − 5)² + (y + 2)² = 16. Center **(5, −2)**, radius **4**.',
        },
        {
          type: 'steps',
          title: 'Method 2: Arc Length & Sector Area',
          items: [
            'Find central angle θ (degrees).',
            'Compute fraction **θ/360**.',
            'Arc length = fraction × **2πr**. Sector area = fraction × **πr²**.',
          ],
        },
        {
          type: 'steps',
          title: 'Method 3: Build Equation from Context',
          items: [
            'Read center **(h, k)** from graph or description.',
            'Find radius: given directly, or distance from center to a known point.',
            'Write **(x − h)² + (y − k)² = r²**. Don\'t forget to **square r**.',
          ],
        },
        {
          type: 'steps',
          title: 'Method 4: Tangent Line Equation',
          items: [
            'Find slope of radius from center to tangent point.',
            'Tangent slope = **negative reciprocal**.',
            'Use point-slope form: **y − y₁ = m(x − x₁)**.',
          ],
        },
        {
          type: 'steps',
          title: 'Method 5: Circle-Line Intersection Count',
          items: [
            'Substitute line equation into circle equation.',
            'Simplify to a quadratic **ax² + bx + c = 0**.',
            'Discriminant **D = b² − 4ac**: D > 0 → 2 points, D = 0 → tangent, D < 0 → none.',
          ],
        },
        {
          type: 'tip',
          content: 'Alternative to the discriminant: compute the **distance from center to line** using |Ax₀ + By₀ + C| / √(A² + B²). Compare to r.',
        },
      ],
    },

    commonTraps: {
      title: 'Common Traps',
      summary: 'The costliest errors: reporting r² as the radius, flipping signs when reading center, forgetting to balance both sides when completing the square, and using diameter instead of radius.',
      blocks: [
        {
          type: 'trapCard',
          title: 'Confusing r with r²',
          wrong: 'Sees (x − 3)² + (y + 1)² = 49 and says radius = 49.',
          correction: 'The right side is **r²**. Radius = √49 = **7**. Always take the square root.',
        },
        {
          type: 'trapCard',
          title: 'Sign Errors in Standard Form',
          wrong: 'Reads (x + 4)² + (y − 2)² = 25 as center (4, −2).',
          correction: '(x + 4)² = (x − (−4))² → h = **−4**. (y − 2)² → k = **+2**. Center = **(−4, 2)**. Signs flip!',
        },
        {
          type: 'trapCard',
          title: 'Unbalanced Completing the Square',
          wrong: 'Adds (D/2)² to the left but forgets to add it to the right.',
          correction: 'Whatever you add to the left, you **must** add to the right. The equation must stay balanced.',
        },
        {
          type: 'trapCard',
          title: 'Diameter Instead of Radius',
          wrong: '"Diameter 10." Plugs 10 into A = πr² → gets 100π.',
          correction: 'Diameter 10 → r = **5**. Area = π(25) = **25π**. Always halve the diameter first.',
        },
        {
          type: 'keyInsight',
          content: 'The two most costly circle mistakes on the SAT: **(1)** reading r² as the radius, and **(2)** getting signs wrong when reading the center. Both are caught by 5 seconds of double-checking.',
        },
      ],
    },

    workedExamples: {
      title: 'Worked Examples',
      summary: 'A medium completing-the-square problem and a hard tangent-line problem with full algebraic solutions.',
      blocks: [
        {
          type: 'example',
          difficulty: 'Medium',
          problem: 'Find the center and radius: **x² + y² + 6x − 2y − 6 = 0**.',
          steps: [
            { label: 'Group', content: '(x² + 6x) + (y² − 2y) = 6' },
            { label: 'Complete x', content: '(6/2)² = 9 → (x + 3)². Add 9 to right.' },
            { label: 'Complete y', content: '(−2/2)² = 1 → (y − 1)². Add 1 to right.' },
            { label: 'Result', content: '(x + 3)² + (y − 1)² = 16. Center **(−3, 1)**, radius **4**.' },
          ],
        },
        {
          type: 'example',
          difficulty: 'Hard',
          problem: 'A line is tangent to **x² + y² = 25** at **(3, 4)**. Find the equation.',
          steps: [
            { label: 'Center', content: 'Circle centered at **(0, 0)**, radius 5.' },
            { label: 'Radius Slope', content: '(4 − 0)/(3 − 0) = **4/3**.' },
            { label: 'Tangent Slope', content: 'Negative reciprocal = **−3/4**.' },
            { label: 'Equation', content: 'y − 4 = −3/4(x − 3) → **y = −3x/4 + 25/4** or **3x + 4y = 25**.' },
          ],
        },
      ],
    },

    visualModels: {
      title: 'Visual Models',
      summary: 'Mental pictures: labeled circle anatomy, standard-form coordinate diagram, arc-vs-sector side-by-side, and tangent-radius perpendicularity.',
      blocks: [
        {
          type: 'diagramRef',
          description: 'Labeled circle showing center (h,k), radius r, a diameter, a chord, a tangent line touching at one point ⊥ to the radius, an arc, and a shaded sector region.',
        },
        {
          type: 'comparison',
          items: [
            { label: 'Arc Length (1D)', content: 'The **curved edge** between two points. Formula: **(θ/360) × 2πr**. Linear units.', variant: 'correct' },
            { label: 'Sector Area (2D)', content: 'The **shaded pie-slice** bounded by two radii and an arc. Formula: **(θ/360) × πr²**. Square units.', variant: 'correct' },
          ],
        },
        {
          type: 'table',
          title: 'Completing the Square: Before & After',
          headers: ['General Form', 'Standard Form', 'Center', 'Radius'],
          rows: [
            ['x² + y² − 4x + 6y − 12 = 0', '(x−2)² + (y+3)² = 25', '(2, −3)', '5'],
            ['x² + y² + 8x − 10y + 16 = 0', '(x+4)² + (y−5)² = 25', '(−4, 5)', '5'],
            ['x² + y² − 2x − 2y − 2 = 0', '(x−1)² + (y−1)² = 4', '(1, 1)', '2'],
          ],
        },
        {
          type: 'diagramRef',
          description: 'Circle with center O, tangent line at point P, radius OP drawn with a right-angle symbol at P. Tangent slope and radius slope labeled as negative reciprocals of each other.',
        },
      ],
    },

    speedStrategy: {
      title: 'Speed & Strategy',
      summary: 'Graph circles in Desmos instantly, use the "half-and-square" mental shortcut for completing the square, simplify θ/360 before multiplying, and read center signs by flipping what\'s in the parentheses.',
      blocks: [
        {
          type: 'strategyCard',
          title: 'Desmos: Graph the Circle',
          icon: '🖩',
          timing: '~15s',
          content: 'Type **(x-3)^2 + (y+2)^2 = 16** directly. Desmos graphs it instantly — read center, radius, and intersection points visually. Works with general form too.',
        },
        {
          type: 'strategyCard',
          title: 'Half-and-Square Shortcut',
          icon: '⚡',
          timing: '~10s',
          content: 'Completing the square mentally: take the coefficient, **halve** it, **square** it. For x² + 6x: half of 6 = 3, squared = 9. Center x = −3. Done in 3 seconds.',
        },
        {
          type: 'strategyCard',
          title: 'Simplify θ/360 First',
          icon: '🎯',
          timing: '~10s',
          content: 'Reduce the fraction before multiplying. 120/360 = 1/3. Then arc = (1/3)(2πr). Much cleaner than carrying 120 × 2πr / 360.',
        },
        {
          type: 'strategyCard',
          title: 'Flip-Sign Quick Read',
          icon: '👁',
          timing: '~5s',
          content: 'For (x − h)² + (y − k)² = r²: center coordinates are the **opposite** of what\'s in the parentheses. (x − 3) → h = +3. (y + 7) → k = −7.',
        },
        {
          type: 'keyInsight',
          content: 'Completing the square appears on nearly every SAT. The fastest students do it mentally: "x² + 6x → center x = −3, add 9." Practice until it\'s automatic — it unlocks 1–2 free points per test.',
        },
      ],
    },

    checkpoint: {
      title: 'Checkpoint',
      summary: 'Two retrieval-practice questions covering standard-form equation writing and completing the square.',
      blocks: [
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'A sector of a circle with radius 12 has a central angle of **150°**. What is the sector area?',
          answer: 'Fraction = 150/360 = 5/12. Area = (5/12) × π(144) = **60π** ≈ 188.5 square units.',
        },
        {
          type: 'checkpointQuestion',
          number: 2,
          question: 'Find the center and radius: **x² + y² − 8x + 12y + 3 = 0**.',
          answer: '(x² − 8x + 16) + (y² + 12y + 36) = −3 + 16 + 36 = 49. **(x − 4)² + (y + 6)² = 49**. Center = **(4, −6)**, radius = **7**.',
        },
      ],
    },
  },
};
