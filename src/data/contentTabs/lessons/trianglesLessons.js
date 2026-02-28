export const trianglesLessonTabs = {

  // ─── TRIANGLE FUNDAMENTALS ───────────────────────────────────────────

  1: {
    moduleId: 'triangles',
    title: 'What Is a Triangle?',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A triangle is the simplest polygon — three sides, three angles, and a powerful set of rules that show up constantly on the SAT.',
        blocks: [
          {
            type: 'text',
            content: 'A **triangle** is a closed figure with exactly **three straight sides** and **three interior angles**. The sum of those interior angles is always $180°$, no matter the shape or size of the triangle.',
          },
          {
            type: 'formula',
            label: 'Angle Sum Property',
            content: '$$\\angle A + \\angle B + \\angle C = 180°$$',
          },
          {
            type: 'table',
            title: 'Classification by Sides',
            headers: ['Type', 'Side Rule', 'Angle Consequence'],
            rows: [
              ['Equilateral', 'All three sides equal', 'All angles $= 60°$'],
              ['Isosceles', 'Exactly two sides equal', 'Base angles are equal'],
              ['Scalene', 'No sides equal', 'No angles equal'],
            ],
          },
          {
            type: 'keyInsight',
            content: 'The **longest side** of a triangle is always opposite the **largest angle**, and the shortest side is opposite the smallest angle. This side-angle relationship is tested frequently on the SAT.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Missing Angle = $180°$ Minus the Others',
            content: 'Recognition cue: two angles given, third asked. First move: $\\angle C = 180° - \\angle A - \\angle B$. If only one angle is given and the triangle is isosceles, set the two base angles equal: $2\\alpha + \\text{vertex} = 180°$.',
          },
          {
            type: 'trapCard',
            title: 'Exterior Angle Confusion',
            wrong: 'The exterior angle at vertex $C$ is $130°$. Student writes $\\angle C = 130°$.',
            correction: 'An exterior angle and its adjacent interior angle are supplementary: $\\angle C = 180° - 130° = 50°$. The exterior angle equals the sum of the two remote interior angles.',
          },
          {
            type: 'tip',
            content: '"Equilateral" → all angles $60°$ (instant). "Isosceles" → base angles equal. "Right triangle" → one angle is $90°$, the other two sum to $90°$. These keywords shave seconds off setup.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Finding a Missing Angle',
            items: [
              'Write the angle-sum equation: $\\angle A + \\angle B + \\angle C = 180°$',
              'Substitute the known angles',
              'Solve for the unknown angle',
              'If the triangle is isosceles and only one angle is given, determine whether it is the vertex angle or a base angle, then set up the equation accordingly',
            ],
          },
          {
            type: 'steps',
            title: 'Using the Exterior Angle Theorem',
            items: [
              'Identify the exterior angle and the two non-adjacent (remote) interior angles',
              'Set the exterior angle equal to the sum of the two remote interior angles',
              'Solve for the unknown',
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Exterior vs. Interior Angle',
            wrong: 'Diagram shows an angle of $120°$ outside the triangle. Student uses $120°$ as an interior angle.',
            correction: 'An exterior angle is supplementary to its adjacent interior angle: interior $= 180° - 120° = 60°$.',
          },
          {
            type: 'trapCard',
            title: 'Isosceles Vertex vs. Base Angle',
            wrong: 'An isosceles triangle has one angle of $40°$. Student assumes it is the vertex angle and writes $40° + 2x = 180°$, giving base angles of $70°$.',
            correction: 'The $40°$ could also be a base angle, making the other base angle $40°$ and the vertex $100°$. Check which interpretation matches the diagram or constraints.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'In $\\triangle ABC$, $\\angle A = 50°$ and the exterior angle at $C$ is $130°$. Find $\\angle B$.',
            steps: [
              { label: 'Interior at C', content: '$\\angle C = 180° - 130° = 50°$' },
              { label: 'Angle sum', content: '$\\angle B = 180° - 50° - 50° = 80°$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'An isosceles triangle has a vertex angle of $36°$. What are the base angles?',
            steps: [
              { label: 'Set up', content: '$36° + 2b = 180°$' },
              { label: 'Solve', content: '$2b = 144°$, so each base angle $= 72°$' },
            ],
          },
        ],
      },
    },
  },

  2: {
    moduleId: 'triangles',
    title: 'Types of Triangles by Angles',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Triangles are also classified by their largest angle — acute, right, or obtuse.',
        blocks: [
          {
            type: 'iconRow',
            items: [
              { icon: 'change_history', label: 'Acute', description: 'All three angles less than $90°$' },
              { icon: 'square_foot', label: 'Right', description: 'Exactly one angle equals $90°$' },
              { icon: 'straighten', label: 'Obtuse', description: 'Exactly one angle greater than $90°$' },
            ],
          },
          {
            type: 'text',
            content: 'A triangle can have **at most one** right or obtuse angle. Why? If two angles were $\\geq 90°$, their sum alone would be $\\geq 180°$, leaving nothing for the third angle.',
          },
          {
            type: 'keyInsight',
            content: 'You can classify a triangle by its sides (equilateral, isosceles, scalene) AND by its angles (acute, right, obtuse) simultaneously. For example, a triangle can be "isosceles right" — two equal legs with a $90°$ angle between them.',
          },
          {
            type: 'comparison',
            title: 'Side-Length Test for Angle Type',
            items: [
              { label: 'Acute', content: '$a^2 + b^2 > c^2$ (longest side squared is less than sum of other squares)' },
              { label: 'Right', content: '$a^2 + b^2 = c^2$ (Pythagorean theorem holds)' },
              { label: 'Obtuse', content: '$a^2 + b^2 < c^2$ (longest side squared exceeds sum of other squares)' },
            ],
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Classifying from Side Lengths',
            items: [
              'Label the sides so that $c$ is the longest',
              'Compute $a^2 + b^2$ and compare to $c^2$',
              'If $a^2 + b^2 > c^2$ → **acute**',
              'If $a^2 + b^2 = c^2$ → **right**',
              'If $a^2 + b^2 < c^2$ → **obtuse**',
            ],
          },
          {
            type: 'steps',
            title: 'Classifying from Angle Measures',
            items: [
              'Find all three angle measures (or determine the largest)',
              'If the largest angle $< 90°$ → **acute**',
              'If the largest angle $= 90°$ → **right**',
              'If the largest angle $> 90°$ → **obtuse**',
            ],
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Classify from Side Lengths',
            content: 'Recognition cue: three side lengths given, question asks "acute, right, or obtuse?" First move: label the longest side as $c$. Compute $a^2 + b^2$ and compare to $c^2$. Greater → acute, equal → right, less → obtuse.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Square',
            wrong: 'Sides $5, 7, 9$. Student compares $5 + 7 = 12 > 9$ and says "acute."',
            correction: 'You must compare **squares**: $5^2 + 7^2 = 74$ vs. $9^2 = 81$. Since $74 < 81$, the triangle is **obtuse**, not acute.',
          },
          {
            type: 'tip',
            content: '**Quick check:** If the three sides form a Pythagorean triple ($3$-$4$-$5$, $5$-$12$-$13$), it is a right triangle. If the longest side is slightly shorter than the triple hypotenuse, it is acute; slightly longer means obtuse.',
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Using Addition Instead of Squares',
            wrong: 'Student adds the two shorter sides ($5 + 7 = 12$) and compares to the longest side ($9$), concluding "acute."',
            correction: 'That test checks the Triangle Inequality (whether a triangle exists), not the angle type. For classification, compare $a^2 + b^2$ to $c^2$.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A triangle has sides $7$, $8$, and $10$. Is it acute, right, or obtuse?',
            steps: [
              { label: 'Identify longest side', content: '$c = 10$, so $a = 7$, $b = 8$' },
              { label: 'Compute', content: '$a^2 + b^2 = 49 + 64 = 113$' },
              { label: 'Compare', content: '$c^2 = 100$. Since $113 > 100$, the triangle is **acute**.' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A triangle has sides $4$, $6$, and $8$. Classify it.',
            steps: [
              { label: 'Identify', content: '$c = 8$, $a = 4$, $b = 6$' },
              { label: 'Compute', content: '$a^2 + b^2 = 16 + 36 = 52$' },
              { label: 'Compare', content: '$c^2 = 64$. Since $52 < 64$, the triangle is **obtuse**.' },
            ],
          },
        ],
      },
    },
  },

  3: {
    moduleId: 'triangles',
    title: 'Triangle Inequality Theorem',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Not every set of three lengths can form a triangle. The Triangle Inequality Theorem tells you which ones work.',
        blocks: [
          {
            type: 'text',
            content: 'For three lengths to form a triangle, **each side must be less than the sum of the other two**. In practice, you only need to check the hardest case: the longest side must be less than the sum of the two shorter sides.',
          },
          {
            type: 'formula',
            label: 'Triangle Inequality',
            content: '$$a + b > c \\quad \\text{(where } c \\text{ is the longest side)}$$',
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Equality Means Degenerate',
            content: 'If $a + b = c$ exactly, the three points are **collinear** — they form a straight line, not a triangle. The inequality must be **strict** ($>$, not $\\geq$).',
          },
          {
            type: 'keyInsight',
            content: 'For finding the range of the third side when two sides $a$ and $b$ are known: $|a - b| < c < a + b$. The third side must be strictly between the difference and the sum.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Checking Whether Three Lengths Form a Triangle',
            items: [
              'Identify the longest side $c$',
              'Add the two shorter sides: $a + b$',
              'If $a + b > c$, the triangle is valid. If $a + b \\leq c$, no triangle exists.',
            ],
          },
          {
            type: 'steps',
            title: 'Finding Possible Values of the Third Side',
            items: [
              'Given two sides $a$ and $b$, compute the difference $|a - b|$ and the sum $a + b$',
              'The third side $c$ must satisfy $|a - b| < c < a + b$',
              'If the question asks for integer values, list integers strictly between the bounds',
            ],
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"What Are the Possible Values of the Third Side?"',
            content: 'Recognition cue: two sides given, question asks for the range of the third side. First move: $|a - b| < c < a + b$. The third side must be strictly between the difference and the sum of the other two.',
          },
          {
            type: 'trapCard',
            title: 'Including the Endpoints',
            wrong: 'Sides $5$ and $9$. Student says third side can be $4$ through $14$.',
            correction: 'The inequality is **strict**: $|9 - 5| < c < 9 + 5$ → $4 < c < 14$. The values $4$ and $14$ create degenerate triangles (straight lines), not valid triangles.',
          },
          {
            type: 'tip',
            content: 'For "how many integer values" questions: count integers strictly between the bounds. If bounds are $4 < c < 14$, the integers are $5, 6, 7, \\ldots, 13$ → that is $13 - 5 + 1 = 9$ values.',
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Forgetting the Lower Bound',
            wrong: 'Students only check that the third side is less than $6 + 10 = 16$ and include values like $2$ or $3$.',
            correction: 'The third side must also be **greater than** $|10 - 6| = 4$. Both bounds matter.',
          },
          {
            type: 'trapCard',
            title: 'Using $\\leq$ Instead of $<$',
            wrong: 'Sides $3$ and $8$. Student writes $5 \\leq c \\leq 11$.',
            correction: 'The inequality is strict: $5 < c < 11$. If $c = 5$ or $c = 11$, the three points are collinear, not a triangle.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Can sides of length $3$, $5$, and $9$ form a triangle?',
            steps: [
              { label: 'Check', content: 'Longest side $= 9$. Sum of shorter sides $= 3 + 5 = 8$.' },
              { label: 'Compare', content: '$8 < 9$, so the inequality **fails**.' },
              { label: 'Answer', content: '**No** — these lengths cannot form a triangle.' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Two sides of a triangle are $6$ and $10$. What are the possible integer lengths for the third side?',
            steps: [
              { label: 'Lower bound', content: '$|10 - 6| < \\text{third side}$, so third side $> 4$' },
              { label: 'Upper bound', content: '$\\text{third side} < 6 + 10 = 16$' },
              { label: 'Integer values', content: '$5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15$ — that is $11$ values.' },
            ],
          },
        ],
      },
    },
  },

  // ─── ANGLES OF A TRIANGLE (VIDEOS) ──────────────────────────────────

  4: {
    moduleId: 'triangles',
    title: 'Simple Angles of a Triangle Example',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Finding a missing angle in a triangle uses one rule: the three interior angles sum to $180°$.',
        blocks: [
          {
            type: 'formula',
            label: 'Angle Sum Property',
            content: '$$\\angle A + \\angle B + \\angle C = 180°$$',
          },
          {
            type: 'text',
            content: 'When two angles of a triangle are given, subtract their sum from $180°$ to find the third. This single step solves the majority of basic angle problems.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Two Angles Given → Subtract from $180°$',
            content: 'Recognition cue: a triangle diagram with two labeled angles and one unknown. First move: add the two known angles and subtract from $180°$.',
          },
          {
            type: 'trapCard',
            title: 'Confusing Exterior and Interior',
            wrong: 'A triangle shows angles $70°$ and $60°$. An exterior angle of $110°$ is also marked. Student uses $110°$ as the third interior angle.',
            correction: 'The third interior angle is $180° - 70° - 60° = 50°$. The exterior angle $110°$ is supplementary to that $70°$ angle, not a separate interior angle.',
          },
        ],
      },
      methods: {
        title: 'Solving Method',
        blocks: [
          {
            type: 'steps',
            title: 'Find the Missing Angle',
            items: [
              'Identify the two known interior angles',
              'Add them: $\\angle A + \\angle B$',
              'Subtract from $180°$: $\\angle C = 180° - (\\angle A + \\angle B)$',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'In $\\triangle PQR$, $\\angle P = 45°$ and $\\angle Q = 85°$. Find $\\angle R$.',
            steps: [
              { label: 'Sum known angles', content: '$45° + 85° = 130°$' },
              { label: 'Subtract', content: '$\\angle R = 180° - 130° = 50°$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'A triangle has angles $3x°$, $5x°$, and $60°$. Find $x$.',
            answer: '$3x + 5x + 60 = 180$ → $8x = 120$ → $x = 15$.',
          },
        ],
      },
    },
  },

  5: {
    moduleId: 'triangles',
    title: 'Complex Angles of a Triangle Example',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Harder angle problems combine the $180°$ angle sum with exterior angles, algebraic expressions, or multi-triangle diagrams.',
        blocks: [
          {
            type: 'formula',
            label: 'Exterior Angle Theorem',
            content: '$$\\text{Exterior angle} = \\text{sum of the two remote interior angles}$$',
          },
          {
            type: 'text',
            content: 'When angles are given as algebraic expressions, set up the equation using the $180°$ sum or the Exterior Angle Theorem, then solve for the variable. Multi-triangle diagrams may require finding angles in one triangle before moving to another.',
          },
          {
            type: 'keyInsight',
            content: 'Vertical angles are equal, and angles on a straight line sum to $180°$. Combine these facts with the triangle angle sum to navigate complex diagrams.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Algebraic Angle Expressions',
            content: 'Recognition cue: angles written as $(2x + 10)°$, $(3x - 5)°$, etc. First move: set up $\\text{angle}_1 + \\text{angle}_2 + \\text{angle}_3 = 180°$ and solve for $x$. Then substitute back to find each angle.',
          },
          {
            type: 'trapCard',
            title: 'Solving for $x$ but Reporting $x$ Instead of the Angle',
            wrong: 'Angles are $(2x)°$ and $(3x)°$ and $50°$. Student solves $5x + 50 = 180$ → $x = 26$ and answers $26$.',
            correction: 'The question asks for one of the angles, not $x$. Substitute back: the angles are $52°$, $78°$, and $50°$. Read the question carefully.',
          },
        ],
      },
      methods: {
        title: 'Solving Method',
        blocks: [
          {
            type: 'steps',
            title: 'Multi-Step Angle Problems',
            items: [
              'Write the angle-sum equation or use the Exterior Angle Theorem as appropriate',
              'Combine like terms and solve for the variable',
              'Substitute back to find each requested angle',
              'Verify: check that the angles sum to $180°$',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'In $\\triangle ABC$, $\\angle A = (2x + 15)°$, $\\angle B = (3x - 10)°$, and the exterior angle at $C$ is $(7x - 20)°$. Find all three interior angles.',
            steps: [
              { label: 'Use Exterior Angle Theorem', content: 'Exterior at $C$ $=$ sum of remote interior angles: $(7x - 20) = (2x + 15) + (3x - 10)$' },
              { label: 'Solve', content: '$7x - 20 = 5x + 5$ → $2x = 25$ → $x = 12.5$' },
              { label: 'Find angles', content: '$\\angle A = 2(12.5) + 15 = 40°$, $\\angle B = 3(12.5) - 10 = 27.5°$' },
              { label: 'Third angle', content: '$\\angle C = 180° - 40° - 27.5° = 112.5°$' },
              { label: 'Verify exterior', content: '$7(12.5) - 20 = 67.5° = 40° + 27.5°$ ✓' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'In $\\triangle DEF$, $\\angle D = (4x)°$, $\\angle E = (x + 30)°$, and $\\angle F = (2x + 10)°$. Find $\\angle D$.',
            answer: '$4x + (x + 30) + (2x + 10) = 180$ → $7x + 40 = 180$ → $7x = 140$ → $x = 20$. So $\\angle D = 4(20) = 80°$.',
          },
        ],
      },
    },
  },

  // ─── AREA OF A TRIANGLE ──────────────────────────────────────────────

  6: {
    moduleId: 'triangles',
    title: 'Area of a Triangle',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'The area of a triangle is half the product of its base and height — but choosing the right base-height pair is the real skill.',
        blocks: [
          {
            type: 'formula',
            label: 'Triangle Area',
            content: '$$A = \\frac{1}{2}bh$$',
          },
          {
            type: 'text',
            content: 'The **base** ($b$) is any side you choose. The **height** ($h$) is the perpendicular distance from that base to the opposite vertex. The height does **not** have to be inside the triangle — for obtuse triangles, it often falls outside.',
          },
          {
            type: 'keyInsight',
            content: 'You can pick **any side** as the base. The formula gives the same area regardless. On the SAT, pick the side that gives you the simplest height to work with.',
          },
          {
            type: 'callout',
            variant: 'memorize',
            title: 'Right Triangle Shortcut',
            content: 'In a right triangle, the two legs are perpendicular, so they serve as base and height directly: $A = \\frac{1}{2}(\\text{leg}_1)(\\text{leg}_2)$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Finding Area on the SAT',
            items: [
              'Identify which measurement is a side length (that\'s your base $b$)',
              'Find the perpendicular distance to the opposite vertex (that\'s your height $h$)',
              'Apply $A = \\frac{1}{2}bh$',
              'If height isn\'t given directly, look for right angles in the diagram or use the Pythagorean theorem',
            ],
          },
          {
            type: 'steps',
            title: 'Coordinate Plane Method',
            items: [
              'If vertices are at $(x_1, y_1)$, $(x_2, y_2)$, $(x_3, y_3)$:',
              'Use $A = \\frac{1}{2}|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|$',
              'This avoids finding base and height separately',
            ],
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Area with a Hidden Height',
            content: 'Recognition cue: a triangle with only side lengths given (no explicit height). First move: look for a right angle — if present, the two legs serve as base and height directly. If no right angle, check for an altitude drawn in the diagram or use the Pythagorean theorem to find the height.',
          },
          {
            type: 'trapCard',
            title: 'Using Slant Side as Height',
            wrong: 'Triangle with base $10$ and sides $8$ and $6$. Student writes $A = \\frac{1}{2}(10)(8) = 40$.',
            correction: 'The height must be **perpendicular** to the base. The side of length $8$ is a slant side, not the height. Drop a perpendicular from the opposite vertex to the base and compute its length.',
          },
          {
            type: 'tip',
            content: '**Decision rule:** Right triangle → legs are base and height ($A = \\frac{1}{2}ab$). Isosceles/equilateral → drop altitude to split into two right triangles, use Pythagorean theorem for height. Coordinate plane → use the shoelace formula.',
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Forgetting the $\\frac{1}{2}$',
            wrong: 'Student computes $A = bh = (10)(6) = 60$ instead of $\\frac{1}{2}(10)(6) = 30$.',
            correction: 'Triangle area is **half** of base times height. A rectangle with the same base and height has area $bh$; the triangle is exactly half.',
          },
          {
            type: 'trapCard',
            title: 'Height Outside the Triangle',
            wrong: 'Student cannot find the height because it does not land inside the triangle (obtuse case).',
            correction: 'For obtuse triangles, extend the base. The height drops from the opposite vertex perpendicular to the base line (not just the segment). The formula still works.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A triangle has a base of $12$ cm and an area of $42$ cm$^2$. What is the height?',
            steps: [
              { label: 'Set up', content: '$42 = \\frac{1}{2}(12)(h)$' },
              { label: 'Simplify', content: '$42 = 6h$' },
              { label: 'Solve', content: '$h = 7$ cm' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'An equilateral triangle has side length $6$. Find its area.',
            steps: [
              { label: 'Height', content: 'Drop an altitude to split into two 30-60-90 triangles. The height $= \\frac{6\\sqrt{3}}{2} = 3\\sqrt{3}$.' },
              { label: 'Area', content: '$A = \\frac{1}{2}(6)(3\\sqrt{3}) = 9\\sqrt{3}$' },
            ],
          },
        ],
      },
    },
  },

  7: {
    moduleId: 'triangles',
    title: 'Simple Area of a Right Triangle Example',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'In a right triangle, the legs are perpendicular, making them the natural base and height for the area formula.',
        blocks: [
          {
            type: 'formula',
            label: 'Right Triangle Area',
            content: '$$A = \\frac{1}{2}(\\text{leg}_1)(\\text{leg}_2)$$',
          },
          {
            type: 'text',
            content: 'The two legs of a right triangle meet at the right angle, so they are automatically perpendicular. Plug them directly into $A = \\frac{1}{2}bh$ — no need to compute a separate height.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Identify the Legs, Not the Hypotenuse',
            content: 'Recognition cue: a right triangle with three sides given, area asked. First move: identify the two legs (the sides that form the right angle). Use those as base and height. The hypotenuse is not used in the area formula.',
          },
          {
            type: 'trapCard',
            title: 'Using the Hypotenuse in the Area Formula',
            wrong: 'A 3-4-5 right triangle. Student writes $A = \\frac{1}{2}(5)(3) = 7.5$.',
            correction: 'The hypotenuse ($5$) is not a leg. The two legs are $3$ and $4$. Area $= \\frac{1}{2}(3)(4) = 6$.',
          },
        ],
      },
      methods: {
        title: 'Solving Method',
        blocks: [
          {
            type: 'steps',
            title: 'Right Triangle Area',
            items: [
              'Find the right angle and identify the two legs',
              'Multiply the legs: $\\text{leg}_1 \\times \\text{leg}_2$',
              'Divide by $2$',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'A right triangle has legs of length $5$ and $12$. What is its area?',
            steps: [
              { label: 'Apply formula', content: '$A = \\frac{1}{2}(5)(12) = 30$ square units' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'A right triangle has a leg of $8$ and a hypotenuse of $10$. What is the area?',
            answer: 'First find the other leg: $b = \\sqrt{10^2 - 8^2} = \\sqrt{36} = 6$. Area $= \\frac{1}{2}(8)(6) = 24$ square units.',
          },
        ],
      },
    },
  },

  8: {
    moduleId: 'triangles',
    title: 'Complex Area of a Right Triangle Example',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Complex area problems require finding a missing leg first (often via the Pythagorean theorem) before computing the area.',
        blocks: [
          {
            type: 'formula',
            label: 'Pythagorean Theorem',
            content: '$$a^2 + b^2 = c^2$$',
          },
          {
            type: 'text',
            content: 'When only one leg and the hypotenuse are given, use $a^2 + b^2 = c^2$ to find the missing leg. Then apply $A = \\frac{1}{2}(\\text{leg}_1)(\\text{leg}_2)$.',
          },
          {
            type: 'keyInsight',
            content: 'Some problems embed the right triangle inside another shape (a rectangle, trapezoid, or coordinate grid). Extract the right triangle, find the legs, then compute area.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Area Requiring a Pythagorean Step',
            content: 'Recognition cue: a right triangle where only one leg and the hypotenuse are labeled. First move: use $a^2 + b^2 = c^2$ to find the other leg, then compute area with both legs.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Find the Missing Leg',
            wrong: 'Hypotenuse $= 13$, one leg $= 5$. Student writes $A = \\frac{1}{2}(13)(5) = 32.5$.',
            correction: 'The hypotenuse is not a leg. Find the missing leg: $b = \\sqrt{13^2 - 5^2} = \\sqrt{144} = 12$. Area $= \\frac{1}{2}(5)(12) = 30$.',
          },
        ],
      },
      methods: {
        title: 'Solving Method',
        blocks: [
          {
            type: 'steps',
            title: 'Area When a Leg Is Missing',
            items: [
              'Identify which side is the hypotenuse (opposite the right angle)',
              'Use $a^2 + b^2 = c^2$ to solve for the missing leg',
              'Compute $A = \\frac{1}{2}(\\text{leg}_1)(\\text{leg}_2)$',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'A right triangle has a hypotenuse of $17$ and one leg of $8$. Find the area.',
            steps: [
              { label: 'Find missing leg', content: '$b = \\sqrt{17^2 - 8^2} = \\sqrt{289 - 64} = \\sqrt{225} = 15$' },
              { label: 'Compute area', content: '$A = \\frac{1}{2}(8)(15) = 60$ square units' },
              { label: 'Note', content: 'This uses the $8$-$15$-$17$ Pythagorean triple.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'A right triangle has a hypotenuse of $26$ and one leg of $10$. Find the area.',
            answer: 'Missing leg $= \\sqrt{26^2 - 10^2} = \\sqrt{676 - 100} = \\sqrt{576} = 24$. Area $= \\frac{1}{2}(10)(24) = 120$ square units. (This is the $5$-$12$-$13$ triple scaled by $2$.)',
          },
        ],
      },
    },
  },

  // ─── SIMILAR TRIANGLES ───────────────────────────────────────────────

  9: {
    moduleId: 'triangles',
    title: 'What Are Similar Triangles?',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Similar triangles have the same shape but different sizes — their angles match and their sides are proportional.',
        blocks: [
          {
            type: 'text',
            content: 'Two triangles are **similar** ($\\triangle ABC \\sim \\triangle DEF$) when they have the **same three angle measures**. As a consequence, their corresponding sides are in a constant ratio called the **scale factor**.',
          },
          {
            type: 'formula',
            label: 'Proportional Sides',
            content: '$$\\frac{AB}{DE} = \\frac{BC}{EF} = \\frac{AC}{DF} = k$$',
          },
          {
            type: 'callout',
            variant: 'memorize',
            title: 'Similar vs. Congruent',
            content: '**Similar** = same shape, possibly different size (angles equal, sides proportional). **Congruent** = same shape AND same size (angles equal, sides equal). Congruent is a special case of similar where $k = 1$.',
          },
          {
            type: 'keyInsight',
            content: 'If triangles are similar with scale factor $k$, their perimeters scale by $k$ and their areas scale by $k^2$. Doubling all sides quadruples the area.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Using Similar Triangles to Find a Missing Side',
            items: [
              'Confirm the triangles are similar (by AA, SAS, or SSS)',
              'Write the similarity statement carefully: $\\triangle ABC \\sim \\triangle DEF$',
              'Set up a proportion with corresponding sides: $\\frac{AB}{DE} = \\frac{BC}{EF}$',
              'Cross-multiply and solve for the unknown',
            ],
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Spot AA Similarity First',
            content: 'Recognition cue: a diagram with a parallel line cutting a triangle, or two triangles sharing a common angle. First move: identify two matching angles (AA). Once you have AA, the triangles are similar — write the proportion immediately.',
          },
          {
            type: 'trapCard',
            title: 'Mismatching Corresponding Sides',
            wrong: 'Student pairs the shortest side of one triangle with the longest side of the other.',
            correction: 'Corresponding sides are opposite the same angle in each triangle. Label the triangles with matching vertex order ($\\triangle ABC \\sim \\triangle DEF$) and match: $AB \\leftrightarrow DE$, $BC \\leftrightarrow EF$, $AC \\leftrightarrow DF$.',
          },
          {
            type: 'tip',
            content: 'Decision rule: parallel line inside a triangle → similar triangles (by AA from corresponding angles). Shared angle between two triangles → check for a second matching angle. Two shared angles → immediate similarity.',
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Confusing Scale Factor for Sides vs. Areas',
            wrong: 'Triangles have a side ratio of $2:3$. Student says the area ratio is also $2:3$.',
            correction: 'If sides scale by $k$, areas scale by $k^2$. A side ratio of $2:3$ means an area ratio of $4:9$.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: '$\\triangle ABC \\sim \\triangle DEF$. If $AB = 6$, $DE = 9$, and $BC = 8$, find $EF$.',
            steps: [
              { label: 'Scale factor', content: '$k = \\frac{DE}{AB} = \\frac{9}{6} = \\frac{3}{2}$' },
              { label: 'Proportion', content: '$EF = BC \\times k = 8 \\times \\frac{3}{2} = 12$' },
            ],
          },
        ],
      },
    },
  },

  10: {
    moduleId: 'triangles',
    title: 'How to Identify Similar Triangles',
    sections: {
      coreConcepts: {
        title: 'Similarity Tests',
        summary: 'You don\'t need all six measurements. Three quick tests can prove similarity.',
        blocks: [
          {
            type: 'table',
            title: 'The Three Similarity Tests',
            headers: ['Test', 'What You Need', 'Why It Works'],
            rows: [
              ['**AA** (Angle-Angle)', 'Two pairs of equal angles', 'Third angle is forced by the $180°$ rule'],
              ['**SAS** (Side-Angle-Side)', 'Two pairs of proportional sides with the included angle equal', 'Proportional sides + locked angle fixes shape'],
              ['**SSS** (Side-Side-Side)', 'All three pairs of sides proportional', 'Same ratios force same angles'],
            ],
          },
          {
            type: 'keyInsight',
            content: 'On the SAT, **AA is by far the most common** similarity test. If two angles match, stop — the triangles are similar. You rarely need SAS or SSS.',
          },
          {
            type: 'text',
            content: 'Common AA setups: (1) a line parallel to one side of a triangle creates two triangles with matching corresponding angles, (2) two triangles sharing a vertex angle where vertical angles or given angles provide the second match.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Proving Similarity and Solving',
            items: [
              'Look for two pairs of equal angles (AA) — check for parallel lines, vertical angles, shared angles',
              'Write the similarity statement with vertices in corresponding order',
              'Set up a proportion: $\\frac{\\text{side}_1 \\text{ of } \\triangle_A}{\\text{corresponding side}_1 \\text{ of } \\triangle_B} = \\frac{\\text{side}_2 \\text{ of } \\triangle_A}{\\text{corresponding side}_2 \\text{ of } \\triangle_B}$',
              'Cross-multiply and solve',
            ],
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Parallel Line → Similar Triangles',
            content: 'Recognition cue: a triangle with a line drawn parallel to one side, cutting the other two sides. First move: the parallel line creates two triangles sharing a common angle at the apex, with two more matching angles (corresponding angles from the parallel). This gives AA similarity — write the proportion immediately.',
          },
          {
            type: 'trapCard',
            title: 'Wrong Side Pairing',
            wrong: '$\\triangle ADE \\sim \\triangle ABC$ with $AD = 4$, $DB = 6$, $BC = 15$. Student writes $\\frac{AD}{BC} = \\frac{DE}{AB}$.',
            correction: 'Match sides by position: $\\frac{AD}{AB} = \\frac{DE}{BC}$. Here $AB = AD + DB = 10$, so $\\frac{4}{10} = \\frac{DE}{15}$, giving $DE = 6$.',
          },
          {
            type: 'tip',
            content: 'On the SAT, **AA is the only similarity test you typically need**. If you find two matching angles, stop — the triangles are similar. Write the proportion, cross-multiply, solve.',
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Using Part of a Side Instead of the Whole Side',
            wrong: '$AD = 4$, $DB = 6$. Student uses $AD = 4$ and $DB = 6$ in the proportion instead of $AD = 4$ and $AB = 10$.',
            correction: 'When a parallel line creates nested similar triangles, the smaller triangle\'s side corresponds to the **full** side of the larger triangle, not just a segment.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'In the figure, $\\overline{DE} \\parallel \\overline{BC}$, $AD = 4$, $DB = 6$, and $BC = 15$. Find $DE$.',
            steps: [
              { label: 'Prove similarity', content: '$\\overline{DE} \\parallel \\overline{BC}$ gives $\\angle ADE = \\angle ABC$ and $\\angle AED = \\angle ACB$ (corresponding angles). By AA, $\\triangle ADE \\sim \\triangle ABC$.' },
              { label: 'Scale factor', content: '$\\frac{AD}{AB} = \\frac{4}{4 + 6} = \\frac{4}{10} = \\frac{2}{5}$' },
              { label: 'Proportion', content: '$\\frac{DE}{BC} = \\frac{2}{5}$, so $DE = \\frac{2}{5} \\times 15 = 6$' },
            ],
          },
        ],
      },
    },
  },

  11: {
    moduleId: 'triangles',
    title: 'Simple Similar Triangles Example #1',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'When two triangles are confirmed similar, set up a proportion between corresponding sides to find the unknown.',
        blocks: [
          {
            type: 'formula',
            label: 'Proportion from Similarity',
            content: '$$\\frac{\\text{side of } \\triangle_1}{\\text{corresponding side of } \\triangle_2} = \\frac{\\text{another side of } \\triangle_1}{\\text{corresponding side of } \\triangle_2}$$',
          },
          {
            type: 'text',
            content: 'The key to setting up proportions correctly is matching corresponding sides — sides that are opposite equal angles in their respective triangles.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Given Scale Factor → Find Missing Side',
            content: 'Recognition cue: two similar triangles with one pair of corresponding sides given, plus one more side. First move: compute the scale factor $k$ from the known pair, then multiply or divide to find the missing side.',
          },
          {
            type: 'trapCard',
            title: 'Flipping the Proportion',
            wrong: 'Student writes $\\frac{3}{x} = \\frac{4}{6}$ instead of $\\frac{3}{4} = \\frac{x}{6}$ (or equivalent).',
            correction: 'Keep the same triangle on the same side of the equation. If $\\frac{\\text{small}}{\\text{large}} = \\frac{\\text{small}}{\\text{large}}$, be consistent.',
          },
        ],
      },
      methods: {
        title: 'Solving Method',
        blocks: [
          {
            type: 'steps',
            title: 'Proportion Setup',
            items: [
              'Identify two pairs of corresponding sides (one pair must be fully known)',
              'Write the proportion: $\\frac{a}{d} = \\frac{b}{e}$',
              'Cross-multiply: $a \\cdot e = b \\cdot d$',
              'Solve for the unknown',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: '$\\triangle ABC \\sim \\triangle DEF$. $AB = 3$, $DE = 9$, and $BC = 5$. Find $EF$.',
            steps: [
              { label: 'Scale factor', content: '$k = \\frac{DE}{AB} = \\frac{9}{3} = 3$' },
              { label: 'Apply', content: '$EF = BC \\times 3 = 5 \\times 3 = 15$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: '$\\triangle PQR \\sim \\triangle XYZ$. $PQ = 4$, $XY = 10$, and $QR = 6$. Find $YZ$.',
            answer: 'Scale factor $= \\frac{10}{4} = \\frac{5}{2}$. So $YZ = 6 \\times \\frac{5}{2} = 15$.',
          },
        ],
      },
    },
  },

  12: {
    moduleId: 'triangles',
    title: 'Simple Similar Triangles Example #2',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'AA similarity from parallel lines is the most common setup. A line parallel to one side of a triangle creates a smaller similar triangle inside.',
        blocks: [
          {
            type: 'text',
            content: 'When a line is drawn parallel to one side of a triangle, it cuts the other two sides proportionally and creates a smaller triangle similar to the original (by AA — corresponding angles from the parallel lines).',
          },
          {
            type: 'formula',
            label: 'Parallel-Line Proportion',
            content: '$$\\frac{AD}{AB} = \\frac{AE}{AC} = \\frac{DE}{BC}$$',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Parallel Line Inside a Triangle',
            content: 'Recognition cue: a triangle with a segment parallel to the base connecting two points on the other sides. First move: by AA, the small triangle and the large triangle are similar. Set up proportions using the full sides of the large triangle.',
          },
          {
            type: 'trapCard',
            title: 'Using a Segment Instead of the Full Side',
            wrong: '$AD = 3$, $DB = 5$. Student sets up $\\frac{3}{5} = \\frac{DE}{BC}$.',
            correction: 'The correct proportion uses the full side $AB = 3 + 5 = 8$: $\\frac{AD}{AB} = \\frac{3}{8} = \\frac{DE}{BC}$.',
          },
        ],
      },
      methods: {
        title: 'Solving Method',
        blocks: [
          {
            type: 'steps',
            title: 'Parallel-Line Similar Triangles',
            items: [
              'Confirm the parallel line creates AA similarity',
              'Compute the full side of the larger triangle (e.g., $AB = AD + DB$)',
              'Set up $\\frac{\\text{small triangle side}}{\\text{large triangle side}} = \\frac{\\text{small triangle side}}{\\text{large triangle side}}$',
              'Cross-multiply and solve',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: '$\\overline{DE} \\parallel \\overline{BC}$ in $\\triangle ABC$. $AD = 3$, $DB = 5$, and $DE = 6$. Find $BC$.',
            steps: [
              { label: 'Full side', content: '$AB = AD + DB = 3 + 5 = 8$' },
              { label: 'Proportion', content: '$\\frac{AD}{AB} = \\frac{DE}{BC}$ → $\\frac{3}{8} = \\frac{6}{BC}$' },
              { label: 'Solve', content: '$BC = \\frac{6 \\times 8}{3} = 16$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: '$\\overline{MN} \\parallel \\overline{BC}$ in $\\triangle ABC$. $AM = 5$, $MB = 10$, and $BC = 21$. Find $MN$.',
            answer: '$AB = 5 + 10 = 15$. $\\frac{AM}{AB} = \\frac{MN}{BC}$ → $\\frac{5}{15} = \\frac{MN}{21}$ → $MN = 7$.',
          },
        ],
      },
    },
  },

  13: {
    moduleId: 'triangles',
    title: 'Simple Similar Triangles Example #3',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Shadow and height problems use similar triangles formed by parallel sun rays hitting objects of different heights.',
        blocks: [
          {
            type: 'text',
            content: 'When the sun casts shadows, the rays are effectively parallel. A person and a tree (or pole) each form a right triangle with their shadow. These right triangles share the same angle from the sun, giving AA similarity.',
          },
          {
            type: 'formula',
            label: 'Shadow Proportion',
            content: '$$\\frac{\\text{height}_1}{\\text{shadow}_1} = \\frac{\\text{height}_2}{\\text{shadow}_2}$$',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Shadow Problems',
            content: 'Recognition cue: two objects casting shadows at the same time of day, one height unknown. First move: set up the proportion height/shadow = height/shadow.',
          },
          {
            type: 'trapCard',
            title: 'Mixing Height with Shadow',
            wrong: 'Student writes $\\frac{\\text{height}_1}{\\text{height}_2} = \\frac{\\text{shadow}_1}{\\text{height}_2}$.',
            correction: 'Keep the same measurement type on the same level of the fraction: height-to-shadow for both objects, or height-to-height equals shadow-to-shadow.',
          },
        ],
      },
      methods: {
        title: 'Solving Method',
        blocks: [
          {
            type: 'steps',
            title: 'Shadow / Height Problems',
            items: [
              'Confirm both objects cast shadows at the same time (parallel sun rays)',
              'Set up: $\\frac{\\text{height}_1}{\\text{shadow}_1} = \\frac{\\text{height}_2}{\\text{shadow}_2}$',
              'Cross-multiply and solve for the unknown',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'A $6$-ft person casts a $4$-ft shadow. At the same time, a tree casts a $20$-ft shadow. How tall is the tree?',
            steps: [
              { label: 'Proportion', content: '$\\frac{6}{4} = \\frac{h}{20}$' },
              { label: 'Solve', content: '$h = \\frac{6 \\times 20}{4} = 30$ ft' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'A $5$-ft pole casts a $3$-ft shadow. A building casts a $24$-ft shadow at the same time. How tall is the building?',
            answer: '$\\frac{5}{3} = \\frac{h}{24}$ → $h = \\frac{5 \\times 24}{3} = 40$ ft.',
          },
        ],
      },
    },
  },

  14: {
    moduleId: 'triangles',
    title: 'Simple Similar Triangles Example #4',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Overlapping triangles that share a common angle often produce AA similarity, especially when a side is extended or a cevian is drawn.',
        blocks: [
          {
            type: 'text',
            content: 'Two triangles sharing a vertex angle are similar if they also share another equal angle — often from vertical angles or from a line creating equal alternate interior angles.',
          },
          {
            type: 'keyInsight',
            content: 'In overlapping-triangle problems, redraw the two triangles separately to see the correspondence clearly. This prevents errors in matching sides.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Shared-Angle Overlapping Triangles',
            content: 'Recognition cue: two triangles sharing a common vertex with a second pair of equal angles visible. First move: write the similarity statement, then set up proportions using the full side lengths.',
          },
          {
            type: 'trapCard',
            title: 'Using Partial Sides in Overlapping Figures',
            wrong: 'In overlapping triangles, student uses only the non-overlapping segment instead of the full side.',
            correction: 'When triangles overlap, each side of the larger triangle is the **sum** of the overlapping and non-overlapping segments. Always use the complete side in proportions.',
          },
        ],
      },
      methods: {
        title: 'Solving Method',
        blocks: [
          {
            type: 'steps',
            title: 'Overlapping Similar Triangles',
            items: [
              'Identify the shared angle and the second pair of equal angles',
              'Write the similarity statement with matching vertex order',
              'Redraw the triangles separately if needed',
              'Set up proportions using full side lengths and solve',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'In $\\triangle ABC$, point $D$ is on $\\overline{AB}$ and point $E$ is on $\\overline{AC}$ such that $\\angle ADE = \\angle ABC$. If $AD = 4$, $DB = 8$, and $AE = 3$, find $AC$.',
            steps: [
              { label: 'Prove similarity', content: '$\\angle A$ is shared and $\\angle ADE = \\angle ABC$, so by AA, $\\triangle ADE \\sim \\triangle ABC$.' },
              { label: 'Full side', content: '$AB = AD + DB = 4 + 8 = 12$' },
              { label: 'Proportion', content: '$\\frac{AD}{AB} = \\frac{AE}{AC}$ → $\\frac{4}{12} = \\frac{3}{AC}$' },
              { label: 'Solve', content: '$AC = \\frac{3 \\times 12}{4} = 9$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: '$\\triangle ADE \\sim \\triangle ABC$ with $AD = 5$, $AB = 15$, and $DE = 7$. Find $BC$.',
            answer: '$\\frac{AD}{AB} = \\frac{DE}{BC}$ → $\\frac{5}{15} = \\frac{7}{BC}$ → $BC = 21$.',
          },
        ],
      },
    },
  },

  15: {
    moduleId: 'triangles',
    title: 'Complex Similar Triangles Example',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Complex similarity problems require multi-step reasoning: finding the scale factor, using it in one proportion, then applying the result in a second calculation.',
        blocks: [
          {
            type: 'text',
            content: 'Some SAT problems combine similar triangles with area or perimeter. If the side scale factor is $k$, then perimeters scale by $k$ and areas scale by $k^2$.',
          },
          {
            type: 'formula',
            label: 'Area Scaling',
            content: '$$\\frac{\\text{Area}_1}{\\text{Area}_2} = k^2 = \\left(\\frac{\\text{side}_1}{\\text{side}_2}\\right)^2$$',
          },
          {
            type: 'keyInsight',
            content: 'When the problem gives areas and asks for a side, take the square root of the area ratio to find the side ratio. When sides are given and area is asked, square the side ratio.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Combining Similarity with Area',
            content: 'Recognition cue: similar triangles where one area is given and the question asks for the other area (or vice versa). First move: find the scale factor from corresponding sides, then square it for the area ratio.',
          },
          {
            type: 'trapCard',
            title: 'Using the Side Ratio for Area Instead of Squaring',
            wrong: 'Side ratio $= 2:3$, so student says area ratio $= 2:3$.',
            correction: 'Area scales by the **square** of the side ratio: $2^2 : 3^2 = 4 : 9$.',
          },
        ],
      },
      methods: {
        title: 'Solving Method',
        blocks: [
          {
            type: 'steps',
            title: 'Multi-Step Similarity Problem',
            items: [
              'Establish similarity and find the side scale factor $k$',
              'If asked for a missing side: multiply or divide by $k$',
              'If asked for a perimeter: multiply the known perimeter by $k$',
              'If asked for an area: multiply the known area by $k^2$',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: '$\\triangle ABC \\sim \\triangle DEF$ with $AB = 6$ and $DE = 10$. If the area of $\\triangle ABC = 27$, what is the area of $\\triangle DEF$?',
            steps: [
              { label: 'Scale factor', content: '$k = \\frac{DE}{AB} = \\frac{10}{6} = \\frac{5}{3}$' },
              { label: 'Area ratio', content: '$k^2 = \\left(\\frac{5}{3}\\right)^2 = \\frac{25}{9}$' },
              { label: 'Compute', content: '$\\text{Area}_{DEF} = 27 \\times \\frac{25}{9} = 75$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'Two similar triangles have corresponding sides of $8$ and $12$. If the smaller triangle has area $32$, what is the area of the larger triangle?',
            answer: 'Scale factor $= \\frac{12}{8} = \\frac{3}{2}$. Area ratio $= \\left(\\frac{3}{2}\\right)^2 = \\frac{9}{4}$. Area $= 32 \\times \\frac{9}{4} = 72$.',
          },
        ],
      },
    },
  },

  // ─── RIGHT TRIANGLES & PYTHAGOREAN THEOREM ───────────────────────────

  16: {
    moduleId: 'triangles',
    title: 'Right Triangles',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A right triangle has one $90°$ angle, making it the most formula-rich triangle on the SAT.',
        blocks: [
          {
            type: 'text',
            content: 'A **right triangle** contains exactly one $90°$ angle. The side opposite the right angle is the **hypotenuse** — always the longest side. The other two sides are called **legs**.',
          },
          {
            type: 'iconRow',
            items: [
              { icon: 'straighten', label: 'Leg $a$', description: 'One side forming the right angle' },
              { icon: 'straighten', label: 'Leg $b$', description: 'Other side forming the right angle' },
              { icon: 'square_foot', label: 'Hypotenuse $c$', description: 'Opposite the $90°$ angle; longest side' },
            ],
          },
          {
            type: 'keyInsight',
            content: 'The two acute angles in a right triangle are **complementary** — they add up to $90°$. If one acute angle is $35°$, the other is $55°$. The SAT often tests this fact.',
          },
          {
            type: 'table',
            title: 'Right Triangle Toolkit',
            headers: ['Tool', 'When to Use'],
            rows: [
              ['Pythagorean Theorem: $a^2 + b^2 = c^2$', 'Finding a missing side when two sides are known'],
              ['Special Triangles: 45-45-90, 30-60-90', 'When specific angles ($45°$, $30°$, $60°$) are present'],
              ['SOH CAH TOA', 'When an angle and a side are known, or a trig ratio is given'],
            ],
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Identifying a Right Triangle',
            items: [
              'Look for the $90°$ symbol in the diagram (a small square at the vertex)',
              'Check if the problem states "right triangle," "perpendicular," or "altitude"',
              'If three sides are given, verify: does $a^2 + b^2 = c^2$?',
              'Rectangles and squares contain right triangles along their diagonals',
            ],
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Finding Hidden Right Triangles',
            content: 'Recognition cue: a diagram showing a ladder, ramp, altitude, diagonal of a rectangle, or distance on a coordinate plane. First move: ask "where is the $90°$ angle?" Once you find it, label legs and hypotenuse, then decide your tool.',
          },
          {
            type: 'trapCard',
            title: 'Applying Pythagorean Theorem to Non-Right Triangles',
            wrong: 'Student uses $a^2 + b^2 = c^2$ on a triangle without verifying a right angle.',
            correction: '$a^2 + b^2 = c^2$ applies **only** when one angle is exactly $90°$. If no right angle is confirmed, you need the Law of Cosines or another approach.',
          },
          {
            type: 'tip',
            content: 'Decision rule: if sides are clean integers → check for a Pythagorean triple first ($3$-$4$-$5$, $5$-$12$-$13$). If the problem mentions $45°$ or $30°$/$60°$ → use special triangle ratios. If it gives an arbitrary angle → use trig (SOH CAH TOA).',
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Confusing Leg and Hypotenuse',
            wrong: 'Student labels a leg as the hypotenuse because it appears to be the longest in a poorly drawn diagram.',
            correction: 'The hypotenuse is **always opposite the right angle**, regardless of how the diagram looks. Identify the right angle first, then label.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'In a right triangle, one acute angle is $28°$. What is the other acute angle?',
            steps: [
              { label: 'Complementary', content: 'The two acute angles sum to $90°$.' },
              { label: 'Solve', content: '$90° - 28° = 62°$' },
            ],
          },
        ],
      },
    },
  },

  17: {
    moduleId: 'triangles',
    title: 'The Pythagorean Theorem',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'In any right triangle, the square of the hypotenuse equals the sum of the squares of the legs.',
        blocks: [
          {
            type: 'formula',
            label: 'Pythagorean Theorem',
            content: '$$a^2 + b^2 = c^2$$',
          },
          {
            type: 'text',
            content: 'Here $a$ and $b$ are the **legs** (the sides forming the right angle) and $c$ is the **hypotenuse** (opposite the right angle). This theorem **only applies to right triangles**.',
          },
          {
            type: 'table',
            title: 'Common Pythagorean Triples',
            headers: ['Triple', 'Multiples You\'ll See'],
            rows: [
              ['$3$-$4$-$5$', '$6$-$8$-$10$, $9$-$12$-$15$, $12$-$16$-$20$'],
              ['$5$-$12$-$13$', '$10$-$24$-$26$'],
              ['$8$-$15$-$17$', 'Less common but appears on harder SAT questions'],
              ['$7$-$24$-$25$', 'Rare but worth recognizing'],
            ],
          },
          {
            type: 'keyInsight',
            content: 'Recognizing Pythagorean triples saves significant time. If you see legs $9$ and $12$, you should immediately know the hypotenuse is $15$ (the $3$-$4$-$5$ triple scaled by $3$).',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Solving with the Pythagorean Theorem',
            items: [
              'Identify the **right angle** — the side opposite it is $c$',
              'Check if the sides form a known Pythagorean triple (saves time)',
              'If not, plug the known sides into $a^2 + b^2 = c^2$',
              'Solve for the unknown side: if finding a leg, rearrange to $a = \\sqrt{c^2 - b^2}$',
            ],
          },
          {
            type: 'strategyCard',
            title: 'Triple Spotting',
            icon: 'bolt',
            timing: '~5 seconds',
            content: 'If you see legs $6$ and $8$, recognize $6$-$8$-$10$ (the $3$-$4$-$5$ triple scaled by $2$). No squaring or square roots needed.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Hidden Right Triangles in Word Problems',
            content: 'Recognition cue: ladders, ramps, building heights, diagonals, or "distance between two points." First move: sketch the scenario, identify the right angle, label legs and hypotenuse. Then apply $a^2 + b^2 = c^2$.',
          },
          {
            type: 'trapCard',
            title: 'Solving for the Wrong Side',
            wrong: 'Hypotenuse $= 13$, one leg $= 5$. Student writes $5^2 + 13^2 = c^2$ → $c = \\sqrt{194}$.',
            correction: 'The hypotenuse ($13$) goes on the right side alone: $5^2 + b^2 = 13^2$ → $b^2 = 169 - 25 = 144$ → $b = 12$. Recognize the $5$-$12$-$13$ triple.',
          },
          {
            type: 'tip',
            content: 'Memorize the common triples: $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$, $7$-$24$-$25$. Also know their multiples ($6$-$8$-$10$, $9$-$12$-$15$, $10$-$24$-$26$). Recognizing a triple saves 30+ seconds of computation.',
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Plugging the Hypotenuse as a Leg',
            wrong: 'Given hypotenuse $10$ and leg $6$, student writes $10^2 + 6^2 = c^2$.',
            correction: 'The hypotenuse is already the longest side ($c$). Set up $6^2 + b^2 = 10^2$, giving $b = 8$. The hypotenuse always sits alone on one side of the equation.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Take the Square Root',
            wrong: 'Student gets $c^2 = 225$ and writes $c = 225$.',
            correction: '$c^2 = 225$ means $c = \\sqrt{225} = 15$. Always take the square root as the final step.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'A right triangle has legs of length $9$ and $12$. What is the hypotenuse?',
            steps: [
              { label: 'Recognize', content: '$9$-$12$-$?$ is the $3$-$4$-$5$ triple $\\times 3$, so the hypotenuse is $15$.' },
              { label: 'Verify', content: '$9^2 + 12^2 = 81 + 144 = 225 = 15^2$ ✓' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A ladder leans against a wall. The ladder is $13$ ft long and its base is $5$ ft from the wall. How high does the ladder reach?',
            steps: [
              { label: 'Model', content: 'The wall, ground, and ladder form a right triangle. Hypotenuse $= 13$, one leg $= 5$.' },
              { label: 'Recognize', content: '$5$-$?$-$13$ is the $5$-$12$-$13$ triple.' },
              { label: 'Answer', content: 'The ladder reaches $12$ ft up the wall.' },
            ],
          },
        ],
      },
    },
  },

  18: {
    moduleId: 'triangles',
    title: 'Simple Pythagorean Theorem Example #1',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'The most direct Pythagorean problems give two sides of a right triangle and ask for the third.',
        blocks: [
          {
            type: 'formula',
            label: 'Finding the Hypotenuse',
            content: '$$c = \\sqrt{a^2 + b^2}$$',
          },
          {
            type: 'formula',
            label: 'Finding a Leg',
            content: '$$a = \\sqrt{c^2 - b^2}$$',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Two Sides Given → Find Third',
            content: 'Recognition cue: a right triangle with two labeled sides and one "?" or variable. First move: decide if the unknown is a leg or the hypotenuse, then apply the appropriate formula.',
          },
          {
            type: 'trapCard',
            title: 'Adding When You Should Subtract',
            wrong: 'Hypotenuse $= 10$, leg $= 6$. Student writes $c = \\sqrt{10^2 + 6^2}$.',
            correction: 'When finding a missing leg: **subtract**. $a = \\sqrt{10^2 - 6^2} = \\sqrt{64} = 8$.',
          },
        ],
      },
      methods: {
        title: 'Solving Method',
        blocks: [
          {
            type: 'steps',
            title: 'Direct Pythagorean Computation',
            items: [
              'Identify which side is the hypotenuse (longest side, opposite $90°$)',
              'Finding hypotenuse: $c = \\sqrt{a^2 + b^2}$ (add the squares)',
              'Finding a leg: $a = \\sqrt{c^2 - b^2}$ (subtract the squares)',
              'Check for Pythagorean triples to save time',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'A right triangle has legs $8$ and $15$. Find the hypotenuse.',
            steps: [
              { label: 'Compute', content: '$c = \\sqrt{8^2 + 15^2} = \\sqrt{64 + 225} = \\sqrt{289} = 17$' },
              { label: 'Note', content: 'This is the $8$-$15$-$17$ Pythagorean triple.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'A right triangle has a hypotenuse of $25$ and one leg of $7$. Find the other leg.',
            answer: '$b = \\sqrt{25^2 - 7^2} = \\sqrt{625 - 49} = \\sqrt{576} = 24$. (This is the $7$-$24$-$25$ triple.)',
          },
        ],
      },
    },
  },

  19: {
    moduleId: 'triangles',
    title: 'Simple Pythagorean Theorem Example #2',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'The distance formula on the coordinate plane is a direct application of the Pythagorean theorem.',
        blocks: [
          {
            type: 'formula',
            label: 'Distance Formula',
            content: '$$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$',
          },
          {
            type: 'text',
            content: 'The horizontal distance $(x_2 - x_1)$ and the vertical distance $(y_2 - y_1)$ are the legs of a right triangle. The straight-line distance is the hypotenuse.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Distance Between Two Points',
            content: 'Recognition cue: two coordinate points given, distance asked. First move: find the horizontal and vertical differences, then apply the Pythagorean theorem (or recognize a triple).',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Square Before Adding',
            wrong: 'Points $(1, 2)$ and $(4, 6)$. Student writes $d = \\sqrt{3 + 4} = \\sqrt{7}$.',
            correction: 'Square first: $d = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.',
          },
        ],
      },
      methods: {
        title: 'Solving Method',
        blocks: [
          {
            type: 'steps',
            title: 'Coordinate Distance',
            items: [
              'Find horizontal distance: $|x_2 - x_1|$',
              'Find vertical distance: $|y_2 - y_1|$',
              'Check if the two legs form a Pythagorean triple',
              'If not, compute $d = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2}$',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Find the distance between $(2, 1)$ and $(7, 13)$.',
            steps: [
              { label: 'Differences', content: '$\\Delta x = 7 - 2 = 5$, $\\Delta y = 13 - 1 = 12$' },
              { label: 'Recognize', content: '$5$-$12$-$13$ triple' },
              { label: 'Answer', content: '$d = 13$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'What is the distance between $(-1, 3)$ and $(3, 0)$?',
            answer: '$\\Delta x = 4$, $\\Delta y = -3$. $d = \\sqrt{4^2 + 3^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5$. (This is the $3$-$4$-$5$ triple.)',
          },
        ],
      },
    },
  },

  20: {
    moduleId: 'triangles',
    title: 'Simple Pythagorean Theorem Example #3',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Pythagorean problems often appear as word problems involving ladders, ramps, diagonals, or distances.',
        blocks: [
          {
            type: 'text',
            content: 'Real-world objects naturally form right triangles: a ladder against a wall, the diagonal of a rectangle, or a ramp rising from level ground. Translate the scenario into a right triangle, then apply $a^2 + b^2 = c^2$.',
          },
          {
            type: 'keyInsight',
            content: 'The diagonal of a rectangle with sides $a$ and $b$ is $\\sqrt{a^2 + b^2}$. This is the Pythagorean theorem in disguise.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Word Problem → Right Triangle',
            content: 'Recognition cue: a scenario involving perpendicular directions (horizontal and vertical, north and east). First move: sketch the right triangle, label the legs and hypotenuse from the given information.',
          },
          {
            type: 'trapCard',
            title: 'Confusing the Diagonal with a Side',
            wrong: 'A rectangular field is $30$ by $40$ meters. Student says the diagonal is $30 + 40 = 70$.',
            correction: 'The diagonal is the hypotenuse: $\\sqrt{30^2 + 40^2} = \\sqrt{900 + 1600} = \\sqrt{2500} = 50$. (This is the $3$-$4$-$5$ triple $\\times 10$.)',
          },
        ],
      },
      methods: {
        title: 'Solving Method',
        blocks: [
          {
            type: 'steps',
            title: 'Word Problem Approach',
            items: [
              'Read the problem and identify the right angle (perpendicular directions)',
              'Sketch the right triangle and label sides with given values',
              'Determine whether the unknown is a leg or hypotenuse',
              'Apply $a^2 + b^2 = c^2$ and solve',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A ship sails $9$ km north, then $12$ km east. How far is it from its starting point?',
            steps: [
              { label: 'Model', content: 'The north and east directions are perpendicular, forming a right triangle. Legs $= 9$ and $12$.' },
              { label: 'Recognize', content: '$9$-$12$-$15$ (the $3$-$4$-$5$ triple $\\times 3$)' },
              { label: 'Answer', content: 'The ship is $15$ km from its starting point.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'A rectangular TV screen is $36$ inches wide and $15$ inches tall. What is the diagonal?',
            answer: '$d = \\sqrt{36^2 + 15^2} = \\sqrt{1296 + 225} = \\sqrt{1521} = 39$ inches. (This is the $5$-$12$-$13$ triple $\\times 3$: $15$-$36$-$39$.)',
          },
        ],
      },
    },
  },

  21: {
    moduleId: 'triangles',
    title: 'Complex Pythagorean Theorem Example',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Complex Pythagorean problems require multiple steps — often combining the theorem with area, algebraic setup, or multi-triangle reasoning.',
        blocks: [
          {
            type: 'text',
            content: 'Some problems require applying the Pythagorean theorem **twice** — for example, finding a height by dropping an altitude and then using that height in an area formula. Others set up an equation where a side length is expressed as a variable.',
          },
          {
            type: 'keyInsight',
            content: 'When an altitude is dropped in a non-right triangle, it splits the triangle into two right triangles. Apply the Pythagorean theorem to each one, and use the shared height to link them.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Altitude Creates Two Right Triangles',
            content: 'Recognition cue: a triangle with an altitude drawn to one side, splitting it into segments. First move: label the two right triangles, apply the Pythagorean theorem to each, and use the shared altitude as the link.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Account for Both Segments',
            wrong: 'Altitude splits the base into segments $x$ and $y$. Student uses $x$ in one equation but forgets $x + y = \\text{full base}$ as a constraint.',
            correction: 'Write two Pythagorean equations (one per right triangle) and use $x + y = \\text{base}$ as a third equation to solve the system.',
          },
        ],
      },
      methods: {
        title: 'Solving Method',
        blocks: [
          {
            type: 'steps',
            title: 'Two-Triangle Pythagorean Setup',
            items: [
              'Draw the altitude and label the two base segments ($x$ and $b - x$)',
              'Write the Pythagorean equation for each right triangle using the shared height $h$',
              'Set the two expressions for $h^2$ equal, or solve the system',
              'Find $h$ and any requested measurements',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'In $\\triangle ABC$, $AB = 13$, $BC = 14$, and $AC = 15$. An altitude from $A$ meets $\\overline{BC}$ at $D$. Find $AD$.',
            steps: [
              { label: 'Label', content: 'Let $BD = x$, so $DC = 14 - x$. Let $AD = h$.' },
              { label: 'Right triangle ABD', content: '$x^2 + h^2 = 13^2 = 169$' },
              { label: 'Right triangle ACD', content: '$(14 - x)^2 + h^2 = 15^2 = 225$' },
              { label: 'Subtract', content: '$(14 - x)^2 - x^2 = 225 - 169 = 56$' },
              { label: 'Expand', content: '$196 - 28x + x^2 - x^2 = 56$ → $196 - 28x = 56$ → $x = 5$' },
              { label: 'Solve for $h$', content: '$h = \\sqrt{169 - 25} = \\sqrt{144} = 12$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'A right triangle has legs $(x)$ and $(x + 7)$ and hypotenuse $(x + 8)$. Find $x$.',
            answer: '$x^2 + (x + 7)^2 = (x + 8)^2$ → $x^2 + x^2 + 14x + 49 = x^2 + 16x + 64$ → $x^2 - 2x - 15 = 0$ → $(x - 5)(x + 3) = 0$. Since $x > 0$, $x = 5$. (Legs $5$ and $12$, hypotenuse $13$.)',
          },
        ],
      },
    },
  },

  // ─── TRIGONOMETRIC RATIOS ────────────────────────────────────────────

  22: {
    moduleId: 'triangles',
    title: 'Introduction to Trigonometry (SOH CAH TOA)',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Sine, cosine, and tangent relate an acute angle in a right triangle to the ratios of its sides.',
        blocks: [
          {
            type: 'text',
            content: 'For an acute angle $\\theta$ in a right triangle, the three basic trig ratios compare pairs of sides. The mnemonic **SOH CAH TOA** tells you which sides to use.',
          },
          {
            type: 'formulaGrid',
            items: [
              { label: 'SOH', formula: '$\\sin \\theta = \\frac{\\text{Opposite}}{\\text{Hypotenuse}}$', note: 'Sine = Opposite / Hypotenuse' },
              { label: 'CAH', formula: '$\\cos \\theta = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}}$', note: 'Cosine = Adjacent / Hypotenuse' },
              { label: 'TOA', formula: '$\\tan \\theta = \\frac{\\text{Opposite}}{\\text{Adjacent}}$', note: 'Tangent = Opposite / Adjacent' },
            ],
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Opposite & Adjacent Change with the Angle',
            content: '"Opposite" and "adjacent" depend on **which angle you\'re looking at**. The hypotenuse never changes, but the other two labels swap when you switch to the other acute angle.',
          },
          {
            type: 'keyInsight',
            content: 'Complementary angle identity: $\\sin \\theta = \\cos(90° - \\theta)$ and $\\cos \\theta = \\sin(90° - \\theta)$. This is because the opposite side for one angle is the adjacent side for the other.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Finding a Trig Ratio',
            items: [
              'Identify the angle in question ($\\theta$)',
              'Label the three sides relative to that angle: Opposite (across from $\\theta$), Adjacent (next to $\\theta$, not the hypotenuse), Hypotenuse (opposite the $90°$)',
              'Choose the correct ratio: SOH, CAH, or TOA',
              'Write the ratio as a fraction and simplify',
            ],
          },
          {
            type: 'steps',
            title: 'Finding a Missing Side Using Trig',
            items: [
              'Identify the given angle and the given side',
              'Determine which side you need (O, A, or H relative to the given angle)',
              'Pick the trig ratio that involves the given side and the unknown',
              'Set up the equation and solve',
            ],
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"Find $\\sin P$" — Label Relative to the Angle',
            content: 'Recognition cue: a right triangle with sides given, question asks for a trig ratio at a specific angle. First move: identify which sides are opposite, adjacent, and hypotenuse **relative to the asked angle**. Then apply SOH, CAH, or TOA.',
          },
          {
            type: 'trapCard',
            title: 'Labeling Sides from the Wrong Angle',
            wrong: 'Student labels "opposite" and "adjacent" from the right angle instead of the asked angle $P$.',
            correction: 'The opposite and adjacent sides are always relative to the angle in the question. The right angle just tells you where the hypotenuse is (across from it).',
          },
          {
            type: 'tip',
            content: 'Complement shortcut: $\\sin \\theta = \\cos(90° - \\theta)$. If the SAT says $\\sin 40° = 0.643$, then $\\cos 50° = 0.643$. This identity saves computation when the question swaps between sin and cos of complementary angles.',
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Opposite / Adjacent Mix-Up',
            wrong: 'Students label "opposite" as the side next to the angle instead of across from it.',
            correction: 'The **opposite** side is the one that does NOT touch the angle at all. The **adjacent** side touches the angle and is NOT the hypotenuse.',
          },
          {
            type: 'trapCard',
            title: 'Using Trig on a Non-Right Triangle',
            wrong: 'Student applies SOH CAH TOA to a triangle with no $90°$ angle.',
            correction: 'SOH CAH TOA only works in **right triangles**. For non-right triangles, you need the Law of Sines or Cosines (rarely tested on the SAT).',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'In right $\\triangle PQR$ with the right angle at $Q$, $PQ = 5$ and $PR = 13$. Find $\\sin P$, $\\cos P$, and $\\tan P$.',
            steps: [
              { label: 'Find missing side', content: '$QR = \\sqrt{13^2 - 5^2} = \\sqrt{144} = 12$' },
              { label: 'Label relative to $P$', content: 'Opposite $= QR = 12$, Adjacent $= PQ = 5$, Hypotenuse $= PR = 13$' },
              { label: 'Ratios', content: '$\\sin P = \\frac{12}{13}$, $\\cos P = \\frac{5}{13}$, $\\tan P = \\frac{12}{5}$' },
            ],
          },
        ],
      },
    },
  },

  23: {
    moduleId: 'triangles',
    title: 'Simple Trigonometric Ratios Example #1',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Computing a trig ratio from given side lengths requires identifying which sides are opposite and adjacent to the specified angle.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              { label: 'SOH', formula: '$\\sin \\theta = \\frac{O}{H}$', note: 'Opposite over Hypotenuse' },
              { label: 'CAH', formula: '$\\cos \\theta = \\frac{A}{H}$', note: 'Adjacent over Hypotenuse' },
              { label: 'TOA', formula: '$\\tan \\theta = \\frac{O}{A}$', note: 'Opposite over Adjacent' },
            ],
          },
          {
            type: 'text',
            content: 'When all three sides are given, you can compute any trig ratio directly. When only two sides are given, use the Pythagorean theorem to find the third before computing the ratio.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Three Sides Given → Direct Ratio',
            content: 'Recognition cue: a right triangle with all sides labeled and a question asking for $\\sin$, $\\cos$, or $\\tan$ of a specific angle. First move: label O, A, H relative to the asked angle, then form the fraction.',
          },
          {
            type: 'trapCard',
            title: 'Wrong Angle Reference',
            wrong: 'Question asks for $\\sin A$, but student computes $\\sin B$ by labeling sides relative to $B$.',
            correction: 'Double-check which angle the question specifies. Re-label O and A relative to that angle.',
          },
        ],
      },
      methods: {
        title: 'Solving Method',
        blocks: [
          {
            type: 'steps',
            title: 'Compute a Trig Ratio',
            items: [
              'Identify the angle the question asks about',
              'Label the sides: O (opposite), A (adjacent), H (hypotenuse) relative to that angle',
              'Choose SOH, CAH, or TOA based on which ratio is asked',
              'Write the fraction and simplify',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'In right $\\triangle ABC$ with the right angle at $C$, $AC = 3$, $BC = 4$, $AB = 5$. Find $\\cos A$.',
            steps: [
              { label: 'Label relative to $A$', content: 'Adjacent $= AC = 3$, Opposite $= BC = 4$, Hypotenuse $= AB = 5$' },
              { label: 'Apply CAH', content: '$\\cos A = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}} = \\frac{3}{5}$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'Using the same triangle ($AC = 3$, $BC = 4$, $AB = 5$, right angle at $C$), find $\\tan B$.',
            answer: 'Relative to $B$: Opposite $= AC = 3$, Adjacent $= BC = 4$. $\\tan B = \\frac{3}{4}$.',
          },
        ],
      },
    },
  },

  24: {
    moduleId: 'triangles',
    title: 'Simple Trigonometric Ratios Example #2',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'When a trig ratio value is given and you need a side length, set up the equation and solve for the unknown.',
        blocks: [
          {
            type: 'text',
            content: 'If $\\sin \\theta = \\frac{O}{H}$ and you know $\\theta$ and one side, solve for the other. For example, if $\\sin 30° = \\frac{x}{10}$, then $x = 10 \\sin 30° = 10 \\times 0.5 = 5$.',
          },
          {
            type: 'keyInsight',
            content: 'The SAT reference sheet provides trig values for special angles. For other angles, the value is given in the problem. Your job is setting up the equation correctly.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Given Trig Value → Find a Side',
            content: 'Recognition cue: a right triangle with one angle and one side given, another side asked. First move: decide which trig ratio connects the known side and unknown side, then solve.',
          },
          {
            type: 'trapCard',
            title: 'Multiplying When You Should Divide (or Vice Versa)',
            wrong: '$\\cos 60° = \\frac{x}{20}$. Student writes $x = \\frac{\\cos 60°}{20}$.',
            correction: 'Cross-multiply correctly: $x = 20 \\cos 60° = 20 \\times 0.5 = 10$. The unknown is in the numerator, so multiply the hypotenuse by the trig value.',
          },
        ],
      },
      methods: {
        title: 'Solving Method',
        blocks: [
          {
            type: 'steps',
            title: 'Find a Side Using Trig',
            items: [
              'Identify the given angle and given side',
              'Label O, A, H relative to the given angle',
              'Pick the ratio that connects the known side and unknown side',
              'Set up the equation: $\\text{trig}(\\theta) = \\frac{\\text{known or unknown}}{\\text{known or unknown}}$',
              'Solve for the unknown',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'In a right triangle, the hypotenuse is $20$ and one angle is $35°$. Find the side opposite the $35°$ angle. (Given: $\\sin 35° \\approx 0.574$.)',
            steps: [
              { label: 'Set up', content: '$\\sin 35° = \\frac{\\text{Opposite}}{20}$' },
              { label: 'Solve', content: '$\\text{Opposite} = 20 \\times 0.574 = 11.48$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'A right triangle has a leg of $7$ adjacent to a $40°$ angle. Find the hypotenuse. (Given: $\\cos 40° \\approx 0.766$.)',
            answer: '$\\cos 40° = \\frac{7}{H}$ → $H = \\frac{7}{0.766} \\approx 9.14$.',
          },
        ],
      },
    },
  },

  25: {
    moduleId: 'triangles',
    title: 'Simple Trigonometric Ratios Example #3',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'The complementary angle identity $\\sin \\theta = \\cos(90° - \\theta)$ is one of the most frequently tested trig facts on the SAT.',
        blocks: [
          {
            type: 'formula',
            label: 'Complementary Identity',
            content: '$$\\sin \\theta = \\cos(90° - \\theta) \\qquad \\cos \\theta = \\sin(90° - \\theta)$$',
          },
          {
            type: 'text',
            content: 'In a right triangle, the two acute angles are complementary ($\\alpha + \\beta = 90°$). The side opposite $\\alpha$ is adjacent to $\\beta$, so $\\sin \\alpha = \\cos \\beta$ and vice versa.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"If $\\sin x° = \\cos y°$, find …"',
            content: 'Recognition cue: an equation linking $\\sin$ and $\\cos$ of different angles. First move: $\\sin x° = \\cos y°$ implies $x + y = 90$ (when $0 < x, y < 90$). Solve for the unknown.',
          },
          {
            type: 'trapCard',
            title: 'Setting $x = y$ Instead of $x + y = 90$',
            wrong: '$\\sin 25° = \\cos x°$. Student writes $x = 25$.',
            correction: '$\\sin 25° = \\cos(90° - 25°) = \\cos 65°$. So $x = 65$, not $25$.',
          },
        ],
      },
      methods: {
        title: 'Solving Method',
        blocks: [
          {
            type: 'steps',
            title: 'Using the Complementary Identity',
            items: [
              'If $\\sin a° = \\cos b°$, then $a + b = 90$',
              'If $\\sin a° = \\cos(4a - 10)°$, set $a + (4a - 10) = 90$ and solve',
              'Always verify that both angles are between $0°$ and $90°$',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'If $\\sin(3x + 10)° = \\cos(2x - 5)°$, find $x$.',
            steps: [
              { label: 'Apply identity', content: '$(3x + 10) + (2x - 5) = 90$' },
              { label: 'Solve', content: '$5x + 5 = 90$ → $5x = 85$ → $x = 17$' },
              { label: 'Verify', content: '$3(17) + 10 = 61°$ and $2(17) - 5 = 29°$. Check: $61 + 29 = 90°$ ✓' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'If $\\cos(5x)° = \\sin(x + 18)°$, find $x$.',
            answer: '$5x + (x + 18) = 90$ → $6x = 72$ → $x = 12$. Check: $\\cos 60° = \\sin 30°$ ✓.',
          },
        ],
      },
    },
  },

  26: {
    moduleId: 'triangles',
    title: 'Simple Trigonometric Ratios Example #4',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Some problems give a trig ratio as a fraction (e.g., $\\sin A = \\frac{3}{5}$) and ask for another ratio of the same angle.',
        blocks: [
          {
            type: 'text',
            content: 'If $\\sin A = \\frac{3}{5}$, then the opposite side is $3$ and the hypotenuse is $5$ (or any proportional pair). Use the Pythagorean theorem to find the adjacent side, then compute any other ratio.',
          },
          {
            type: 'keyInsight',
            content: 'Recognizing Pythagorean triples in trig ratios saves time. $\\frac{3}{5}$ suggests a $3$-$4$-$5$ triangle. $\\frac{5}{13}$ suggests $5$-$12$-$13$.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'One Ratio Given → Find Another',
            content: 'Recognition cue: $\\sin A = \\frac{p}{q}$, find $\\cos A$ or $\\tan A$. First move: draw a right triangle, label $O = p$, $H = q$, find $A$ via Pythagorean theorem, then compute the requested ratio.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Find the Missing Side',
            wrong: '$\\sin A = \\frac{5}{13}$. Student writes $\\cos A = \\frac{13}{5}$.',
            correction: 'Find the adjacent side: $\\sqrt{13^2 - 5^2} = 12$. Then $\\cos A = \\frac{12}{13}$.',
          },
        ],
      },
      methods: {
        title: 'Solving Method',
        blocks: [
          {
            type: 'steps',
            title: 'From One Ratio to Another',
            items: [
              'From the given ratio, identify two sides (e.g., $\\sin A = \\frac{O}{H}$ gives $O$ and $H$)',
              'Use the Pythagorean theorem to find the third side',
              'Compute the requested ratio using the three known sides',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'If $\\cos B = \\frac{8}{17}$, find $\\sin B$ and $\\tan B$.',
            steps: [
              { label: 'Identify sides', content: 'Adjacent $= 8$, Hypotenuse $= 17$' },
              { label: 'Find opposite', content: '$O = \\sqrt{17^2 - 8^2} = \\sqrt{289 - 64} = \\sqrt{225} = 15$' },
              { label: 'Ratios', content: '$\\sin B = \\frac{15}{17}$, $\\tan B = \\frac{15}{8}$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'If $\\tan C = \\frac{7}{24}$, find $\\sin C$.',
            answer: 'Opposite $= 7$, Adjacent $= 24$, Hypotenuse $= \\sqrt{7^2 + 24^2} = \\sqrt{625} = 25$. $\\sin C = \\frac{7}{25}$. (Uses the $7$-$24$-$25$ triple.)',
          },
        ],
      },
    },
  },

  27: {
    moduleId: 'triangles',
    title: 'Simple Trigonometric Ratios Example #5',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Angle of elevation and depression problems are classic SAT trig applications involving a horizontal line and a line of sight.',
        blocks: [
          {
            type: 'text',
            content: 'The **angle of elevation** is measured from the horizontal up to the line of sight. The **angle of depression** is measured from the horizontal down. Both create right triangles with the horizontal and vertical distances.',
          },
          {
            type: 'keyInsight',
            content: 'The angle of elevation from point $A$ looking up at point $B$ equals the angle of depression from $B$ looking down at $A$ (alternate interior angles with a horizontal line).',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Elevation / Depression Setups',
            content: 'Recognition cue: "angle of elevation" or "angle of depression" with a distance given. First move: draw the right triangle — the horizontal is the adjacent side, the vertical is the opposite side, and the line of sight is the hypotenuse.',
          },
          {
            type: 'trapCard',
            title: 'Measuring the Angle from the Vertical',
            wrong: 'Student places the angle between the vertical (building) and the line of sight instead of between the horizontal and the line of sight.',
            correction: 'Elevation/depression angles are measured from the **horizontal**. If the angle is from the vertical, it is the complement of the elevation angle.',
          },
        ],
      },
      methods: {
        title: 'Solving Method',
        blocks: [
          {
            type: 'steps',
            title: 'Elevation / Depression Problems',
            items: [
              'Draw the right triangle with horizontal ground as the base',
              'Place the angle of elevation/depression at the appropriate vertex',
              'Label O (vertical height), A (horizontal distance), H (line of sight)',
              'Choose $\\tan$ (if you have O and A), $\\sin$ (if O and H), or $\\cos$ (if A and H)',
              'Solve for the unknown',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'From a point $50$ m from the base of a building, the angle of elevation to the top is $60°$. Find the building\'s height. (Given: $\\tan 60° = \\sqrt{3} \\approx 1.732$.)',
            steps: [
              { label: 'Set up', content: '$\\tan 60° = \\frac{h}{50}$' },
              { label: 'Solve', content: '$h = 50\\sqrt{3} \\approx 86.6$ m' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'A kite string is $100$ m long and makes an angle of $30°$ with the ground. How high is the kite? (Given: $\\sin 30° = 0.5$.)',
            answer: '$\\sin 30° = \\frac{h}{100}$ → $h = 100 \\times 0.5 = 50$ m.',
          },
        ],
      },
    },
  },

  28: {
    moduleId: 'triangles',
    title: 'Complex Trigonometric Ratios Example',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Complex trig problems combine multiple steps: finding sides, using identities, or applying trig in multi-shape diagrams.',
        blocks: [
          {
            type: 'text',
            content: 'Some SAT problems embed trig inside a larger geometry problem — for example, using trig to find the height of a triangle, then computing its area. Others require the Pythagorean identity $\\sin^2 \\theta + \\cos^2 \\theta = 1$.',
          },
          {
            type: 'formula',
            label: 'Pythagorean Identity',
            content: '$$\\sin^2 \\theta + \\cos^2 \\theta = 1$$',
          },
          {
            type: 'keyInsight',
            content: 'If $\\sin \\theta$ is given and you need $\\cos \\theta$: $\\cos \\theta = \\sqrt{1 - \\sin^2 \\theta}$ (for acute $\\theta$). This avoids drawing a triangle entirely.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Trig + Area Combination',
            content: 'Recognition cue: a triangle with an angle and a side given, area asked. First move: use trig to find the height (perpendicular to the base), then apply $A = \\frac{1}{2}bh$.',
          },
          {
            type: 'trapCard',
            title: 'Using the Wrong Identity',
            wrong: 'Student writes $\\sin^2 \\theta + \\cos^2 \\theta = 2$ or $\\sin \\theta + \\cos \\theta = 1$.',
            correction: 'The Pythagorean identity is $\\sin^2 \\theta + \\cos^2 \\theta = 1$. The functions must be **squared**. $\\sin \\theta + \\cos \\theta \\neq 1$ in general.',
          },
        ],
      },
      methods: {
        title: 'Solving Method',
        blocks: [
          {
            type: 'steps',
            title: 'Trig in Multi-Step Problems',
            items: [
              'Identify where the right triangle is (may need to drop an altitude)',
              'Use trig to find the missing measurement (height, side, etc.)',
              'Plug the result into the next formula (area, perimeter, another proportion)',
              'If an identity is needed: $\\sin^2 \\theta + \\cos^2 \\theta = 1$ or $\\tan \\theta = \\frac{\\sin \\theta}{\\cos \\theta}$',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'In $\\triangle ABC$, $AB = 10$, $\\angle A = 40°$, and $\\angle B = 90°$. Find the area of the triangle. (Given: $\\sin 40° \\approx 0.643$, $\\cos 40° \\approx 0.766$.)',
            steps: [
              { label: 'Identify sides', content: 'Relative to $\\angle A$: Adjacent $= AB = 10$ (it forms the right angle at $B$), so $AB$ is adjacent. Hypotenuse $= AC$, Opposite $= BC$.' },
              { label: 'Wait — re-read', content: '$\\angle B = 90°$, so $AC$ is the hypotenuse. Relative to $A$: $AB = 10$ is adjacent, $BC$ is opposite.' },
              { label: 'Find BC', content: '$\\tan 40° = \\frac{BC}{10}$ → $BC = 10 \\tan 40° = 10 \\times \\frac{0.643}{0.766} \\approx 8.39$' },
              { label: 'Area', content: '$A = \\frac{1}{2}(10)(8.39) \\approx 41.95$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'If $\\sin \\theta = \\frac{3}{5}$, find $\\cos \\theta$ and $\\tan \\theta$ without drawing a triangle.',
            answer: '$\\cos \\theta = \\sqrt{1 - \\sin^2 \\theta} = \\sqrt{1 - \\frac{9}{25}} = \\sqrt{\\frac{16}{25}} = \\frac{4}{5}$. $\\tan \\theta = \\frac{\\sin \\theta}{\\cos \\theta} = \\frac{3/5}{4/5} = \\frac{3}{4}$.',
          },
        ],
      },
    },
  },

  // ─── SPECIAL RIGHT TRIANGLES ─────────────────────────────────────────

  29: {
    moduleId: 'triangles',
    title: 'The 45-45-90 Triangle',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A 45-45-90 triangle is an isosceles right triangle with a fixed side ratio you should memorize.',
        blocks: [
          {
            type: 'text',
            content: 'A **45-45-90 triangle** has angles $45°$, $45°$, and $90°$. Because two angles are equal, the two legs are also equal. The hypotenuse is always $\\sqrt{2}$ times a leg.',
          },
          {
            type: 'formula',
            label: 'Side Ratio',
            content: '$$\\text{leg} : \\text{leg} : \\text{hypotenuse} = 1 : 1 : \\sqrt{2}$$',
          },
          {
            type: 'callout',
            variant: 'memorize',
            title: 'Quick Conversions',
            content: 'Leg → Hypotenuse: multiply by $\\sqrt{2}$.\nHypotenuse → Leg: divide by $\\sqrt{2}$ (or multiply by $\\frac{\\sqrt{2}}{2}$).',
          },
          {
            type: 'keyInsight',
            content: 'A 45-45-90 triangle appears whenever you cut a square along its diagonal. Each half is a 45-45-90 triangle with legs equal to the side of the square.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Solving 45-45-90 Problems',
            items: [
              'Confirm the triangle is 45-45-90 (isosceles right triangle, $45°$ angles, square diagonal)',
              'Identify what you know: leg or hypotenuse?',
              'If you know a leg: hypotenuse $= \\text{leg} \\times \\sqrt{2}$',
              'If you know the hypotenuse: leg $= \\frac{\\text{hypotenuse}}{\\sqrt{2}} = \\frac{\\text{hypotenuse} \\cdot \\sqrt{2}}{2}$',
            ],
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Where 45-45-90 Hides',
            content: 'Recognition cue: a square\'s diagonal, an isosceles right triangle, or any $45°$ angle in a right-triangle context. First move: set up the ratio $1:1:\\sqrt{2}$ and identify which piece you know (leg or hypotenuse), then scale.',
          },
          {
            type: 'trapCard',
            title: 'Multiplying by $\\sqrt{2}$ in the Wrong Direction',
            wrong: 'Hypotenuse $= 8$ → student writes leg $= 8\\sqrt{2}$.',
            correction: 'Leg → hypotenuse: multiply by $\\sqrt{2}$. Hypotenuse → leg: **divide** by $\\sqrt{2}$. The hypotenuse is always the larger number. Leg $= \\frac{8}{\\sqrt{2}} = 4\\sqrt{2}$.',
          },
          {
            type: 'tip',
            content: 'Decision rule: see "$45°$" + right triangle → use $1:1:\\sqrt{2}$. See "$30°$" or "$60°$" + right triangle → use $1:\\sqrt{3}:2$. The angle tells you which special triangle ratio to apply.',
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Rationalizing Incorrectly',
            wrong: 'Leg $= \\frac{10}{\\sqrt{2}}$. Student writes $\\frac{10}{\\sqrt{2}} = 10\\sqrt{2}$.',
            correction: '$\\frac{10}{\\sqrt{2}} = \\frac{10\\sqrt{2}}{2} = 5\\sqrt{2}$. When rationalizing, multiply top and bottom by $\\sqrt{2}$, then simplify the fraction.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'A 45-45-90 triangle has legs of length $7$. What is the hypotenuse?',
            steps: [
              { label: 'Apply ratio', content: 'Hypotenuse $= 7\\sqrt{2}$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'The diagonal of a square is $10$. What is the side length?',
            steps: [
              { label: 'Recognize', content: 'A square\'s diagonal splits it into two 45-45-90 triangles. The diagonal is the hypotenuse.' },
              { label: 'Solve', content: 'Side $= \\frac{10}{\\sqrt{2}} = \\frac{10\\sqrt{2}}{2} = 5\\sqrt{2}$' },
            ],
          },
        ],
      },
    },
  },

  30: {
    moduleId: 'triangles',
    title: 'Simple 45-45-90 Triangle Example',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Apply the $1:1:\\sqrt{2}$ ratio directly when you see a 45-45-90 triangle with one measurement given.',
        blocks: [
          {
            type: 'formula',
            label: '45-45-90 Ratio',
            content: '$$\\text{leg} : \\text{leg} : \\text{hypotenuse} = x : x : x\\sqrt{2}$$',
          },
          {
            type: 'text',
            content: 'If the leg is $x$, the hypotenuse is $x\\sqrt{2}$. If the hypotenuse is $h$, each leg is $\\frac{h}{\\sqrt{2}} = \\frac{h\\sqrt{2}}{2}$.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Direct Application of the Ratio',
            content: 'Recognition cue: a right triangle with a $45°$ angle and one side labeled. First move: determine if the labeled side is a leg or the hypotenuse, then apply the ratio.',
          },
          {
            type: 'trapCard',
            title: 'Assuming Both Legs Are the Hypotenuse',
            wrong: 'A 45-45-90 triangle has hypotenuse $6\\sqrt{2}$. Student says both legs are $6\\sqrt{2}$.',
            correction: 'The legs are shorter than the hypotenuse. Leg $= \\frac{6\\sqrt{2}}{\\sqrt{2}} = 6$.',
          },
        ],
      },
      methods: {
        title: 'Solving Method',
        blocks: [
          {
            type: 'steps',
            title: '45-45-90 Computation',
            items: [
              'Confirm the triangle is 45-45-90',
              'If given a leg $x$: hypotenuse $= x\\sqrt{2}$',
              'If given hypotenuse $h$: leg $= \\frac{h\\sqrt{2}}{2}$',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'An isosceles right triangle has a hypotenuse of $12$. Find the leg length.',
            steps: [
              { label: 'Apply ratio', content: 'Leg $= \\frac{12}{\\sqrt{2}} = \\frac{12\\sqrt{2}}{2} = 6\\sqrt{2}$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'A square has a diagonal of $14\\sqrt{2}$. What is the side length of the square?',
            answer: 'The diagonal is the hypotenuse of a 45-45-90 triangle. Side $= \\frac{14\\sqrt{2}}{\\sqrt{2}} = 14$.',
          },
        ],
      },
    },
  },

  31: {
    moduleId: 'triangles',
    title: 'Complex 45-45-90 Triangle Example',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Complex 45-45-90 problems combine the ratio with area, perimeter, or multi-shape geometry.',
        blocks: [
          {
            type: 'text',
            content: 'The area of a 45-45-90 triangle with leg $x$ is $\\frac{1}{2}x^2$ (since both legs are equal). The perimeter is $x + x + x\\sqrt{2} = 2x + x\\sqrt{2} = x(2 + \\sqrt{2})$.',
          },
          {
            type: 'formula',
            label: 'Area of 45-45-90',
            content: '$$A = \\frac{1}{2}x^2 \\quad \\text{where } x \\text{ is the leg}$$',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Area Given → Find the Leg',
            content: 'Recognition cue: "A 45-45-90 triangle has area $K$. Find the hypotenuse." First move: $\\frac{1}{2}x^2 = K$ → $x = \\sqrt{2K}$. Then hypotenuse $= x\\sqrt{2} = \\sqrt{2K} \\cdot \\sqrt{2} = 2\\sqrt{K}$.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Take the Square Root',
            wrong: 'Area $= 18$. $\\frac{1}{2}x^2 = 18$ → $x^2 = 36$ → student writes $x = 36$.',
            correction: '$x^2 = 36$ means $x = 6$. Hypotenuse $= 6\\sqrt{2}$.',
          },
        ],
      },
      methods: {
        title: 'Solving Method',
        blocks: [
          {
            type: 'steps',
            title: 'From Area to Sides',
            items: [
              'Set $\\frac{1}{2}x^2 = \\text{Area}$ and solve for $x$',
              'Hypotenuse $= x\\sqrt{2}$',
              'Perimeter $= x(2 + \\sqrt{2})$ if needed',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'A 45-45-90 triangle has an area of $50$. Find the hypotenuse.',
            steps: [
              { label: 'Find leg', content: '$\\frac{1}{2}x^2 = 50$ → $x^2 = 100$ → $x = 10$' },
              { label: 'Hypotenuse', content: '$10\\sqrt{2}$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'A 45-45-90 triangle has a perimeter of $8 + 8\\sqrt{2}$. Find the leg length.',
            answer: 'Perimeter $= 2x + x\\sqrt{2} = x(2 + \\sqrt{2}) = 8 + 8\\sqrt{2}$. Factor: $8(1 + \\sqrt{2})$. So $x(2 + \\sqrt{2}) = 8(1 + \\sqrt{2})$. Note $2 + \\sqrt{2} = \\sqrt{2}(\\sqrt{2} + 1)$, so $x \\cdot \\sqrt{2}(1 + \\sqrt{2}) = 8(1 + \\sqrt{2})$ → $x = \\frac{8}{\\sqrt{2}} = 4\\sqrt{2}$.',
          },
        ],
      },
    },
  },

  32: {
    moduleId: 'triangles',
    title: 'The 30-60-90 Triangle',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A 30-60-90 triangle has a fixed side ratio that lets you find all three sides from just one.',
        blocks: [
          {
            type: 'text',
            content: 'A **30-60-90 triangle** has angles $30°$, $60°$, and $90°$. The sides are always in the ratio $1 : \\sqrt{3} : 2$, where the shortest side is opposite $30°$, the medium side is opposite $60°$, and the longest side (hypotenuse) is opposite $90°$.',
          },
          {
            type: 'formula',
            label: 'Side Ratio',
            content: '$$\\text{short leg} : \\text{long leg} : \\text{hypotenuse} = 1 : \\sqrt{3} : 2$$',
          },
          {
            type: 'table',
            title: 'Side Relationships',
            headers: ['If You Know...', 'Then...'],
            rows: [
              ['Short leg $= s$', 'Long leg $= s\\sqrt{3}$, Hypotenuse $= 2s$'],
              ['Hypotenuse $= h$', 'Short leg $= \\frac{h}{2}$, Long leg $= \\frac{h\\sqrt{3}}{2}$'],
              ['Long leg $= L$', 'Short leg $= \\frac{L}{\\sqrt{3}} = \\frac{L\\sqrt{3}}{3}$, Hypotenuse $= \\frac{2L}{\\sqrt{3}} = \\frac{2L\\sqrt{3}}{3}$'],
            ],
          },
          {
            type: 'keyInsight',
            content: 'An equilateral triangle with an altitude drawn creates two 30-60-90 triangles. The hypotenuse is the original side, the short leg is half the base, and the altitude is the long leg.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Solving 30-60-90 Problems',
            items: [
              'Confirm the triangle is 30-60-90 (look for $30°$, $60°$, equilateral + altitude)',
              'Identify the known side and which position it occupies (short leg, long leg, or hypotenuse)',
              'Use the ratios to find the others: short leg $\\times \\sqrt{3} = $ long leg, short leg $\\times 2 = $ hypotenuse',
              'If given the long leg, divide by $\\sqrt{3}$ first to get the short leg, then proceed',
            ],
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Where 30-60-90 Hides',
            content: 'Recognition cue: an equilateral triangle with an altitude, a $30°$ or $60°$ angle in a right triangle, or a regular hexagon (made of six equilateral triangles). First move: identify which side you know and apply the ratio $1 : \\sqrt{3} : 2$.',
          },
          {
            type: 'trapCard',
            title: 'Swapping $\\sqrt{3}$ and $2$',
            wrong: 'Student puts $\\sqrt{3}$ on the hypotenuse: ratio $1 : 2 : \\sqrt{3}$.',
            correction: 'The hypotenuse is always $2$ (the integer). $\\sqrt{3}$ goes on the **long leg** (opposite $60°$). Correct ratio: $1 : \\sqrt{3} : 2$.',
          },
          {
            type: 'tip',
            content: '**Decision rule:** See $30°$ or $60°$ in a right triangle → use $1 : \\sqrt{3} : 2$. See $45°$ in a right triangle → use $1 : 1 : \\sqrt{2}$. No special angles → use general trig (SOH CAH TOA) or the Pythagorean theorem.',
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Confusing Which Leg Is Which',
            wrong: 'Student uses the long leg as the "short leg" in the formula, getting sides that don\'t satisfy the Pythagorean theorem.',
            correction: 'The **short leg** is opposite the **smallest angle** ($30°$). The **long leg** is opposite $60°$. Always identify angles first.',
          },
          {
            type: 'trapCard',
            title: 'Starting from the Long Leg Incorrectly',
            wrong: 'Long leg $= 9\\sqrt{3}$. Student multiplies by $\\sqrt{3}$ to find the short leg: $9\\sqrt{3} \\times \\sqrt{3} = 27$.',
            correction: 'To go from long leg to short leg, **divide** by $\\sqrt{3}$: $\\frac{9\\sqrt{3}}{\\sqrt{3}} = 9$. The short leg is $9$.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'In a 30-60-90 triangle, the hypotenuse is $14$. Find both legs.',
            steps: [
              { label: 'Short leg', content: '$\\frac{14}{2} = 7$ (opposite the $30°$ angle)' },
              { label: 'Long leg', content: '$7\\sqrt{3}$ (opposite the $60°$ angle)' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'An equilateral triangle has side length $8$. An altitude is drawn. What is the height?',
            steps: [
              { label: 'Recognize', content: 'The altitude splits the equilateral triangle into two 30-60-90 triangles.' },
              { label: 'Identify', content: 'Hypotenuse $= 8$ (the original side). Short leg $= 4$ (half the base).' },
              { label: 'Solve', content: 'Height (long leg) $= 4\\sqrt{3}$' },
            ],
          },
        ],
      },
    },
  },

  33: {
    moduleId: 'triangles',
    title: 'Simple 30-60-90 Triangle Example',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Apply the $1 : \\sqrt{3} : 2$ ratio directly when given one side of a 30-60-90 triangle.',
        blocks: [
          {
            type: 'formula',
            label: '30-60-90 Ratio',
            content: '$$\\text{short leg} : \\text{long leg} : \\text{hypotenuse} = x : x\\sqrt{3} : 2x$$',
          },
          {
            type: 'text',
            content: 'The short leg is the anchor. If you find the short leg first, all other sides follow easily: multiply by $\\sqrt{3}$ for the long leg, multiply by $2$ for the hypotenuse.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'One Side Given → Find All',
            content: 'Recognition cue: a 30-60-90 triangle with one side labeled. First move: determine which side is given (short leg, long leg, or hypotenuse), find the short leg, then compute the rest.',
          },
          {
            type: 'trapCard',
            title: 'Multiplying the Long Leg by $\\sqrt{3}$',
            wrong: 'Long leg $= 5\\sqrt{3}$. Student computes hypotenuse $= 5\\sqrt{3} \\times \\sqrt{3} = 15$.',
            correction: 'That gives a side longer than the hypotenuse, which is impossible. From the long leg, divide by $\\sqrt{3}$ to get the short leg ($5$), then multiply by $2$ for the hypotenuse ($10$).',
          },
        ],
      },
      methods: {
        title: 'Solving Method',
        blocks: [
          {
            type: 'steps',
            title: '30-60-90 Computation',
            items: [
              'Identify the given side and its position in the ratio',
              'Find the short leg: if given hyp, divide by $2$; if given long leg, divide by $\\sqrt{3}$; if given short leg, use it directly',
              'Long leg $= $ short leg $\\times \\sqrt{3}$',
              'Hypotenuse $= $ short leg $\\times 2$',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A 30-60-90 triangle has a long leg of $6\\sqrt{3}$. Find the short leg and hypotenuse.',
            steps: [
              { label: 'Short leg', content: '$\\frac{6\\sqrt{3}}{\\sqrt{3}} = 6$' },
              { label: 'Hypotenuse', content: '$2 \\times 6 = 12$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'In a 30-60-90 triangle, the short leg is $9$. Find the long leg and hypotenuse.',
            answer: 'Long leg $= 9\\sqrt{3}$, Hypotenuse $= 18$.',
          },
        ],
      },
    },
  },

  34: {
    moduleId: 'triangles',
    title: 'Complex 30-60-90 Triangle Example #1',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Complex 30-60-90 problems involve equilateral triangles, area computations, or reverse-engineering from area or perimeter.',
        blocks: [
          {
            type: 'text',
            content: 'The area of an equilateral triangle with side $s$ is $\\frac{s^2\\sqrt{3}}{4}$. This formula comes from splitting the triangle into two 30-60-90 triangles and using $h = \\frac{s\\sqrt{3}}{2}$ in $A = \\frac{1}{2}bh$.',
          },
          {
            type: 'formula',
            label: 'Equilateral Triangle Area',
            content: '$$A = \\frac{s^2\\sqrt{3}}{4}$$',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Equilateral Triangle → 30-60-90',
            content: 'Recognition cue: an equilateral triangle with side length given, height or area asked. First move: draw the altitude. It creates two 30-60-90 triangles with hypotenuse $= s$, short leg $= \\frac{s}{2}$, and height $= \\frac{s\\sqrt{3}}{2}$.',
          },
          {
            type: 'trapCard',
            title: 'Using Side as Height',
            wrong: 'Equilateral triangle with side $10$. Student writes area $= \\frac{1}{2}(10)(10) = 50$.',
            correction: 'The height is not the side. Height $= \\frac{10\\sqrt{3}}{2} = 5\\sqrt{3}$. Area $= \\frac{1}{2}(10)(5\\sqrt{3}) = 25\\sqrt{3}$.',
          },
        ],
      },
      methods: {
        title: 'Solving Method',
        blocks: [
          {
            type: 'steps',
            title: 'Equilateral Triangle Area',
            items: [
              'Identify the side length $s$',
              'Height $= \\frac{s\\sqrt{3}}{2}$ (from the 30-60-90 ratio)',
              'Area $= \\frac{1}{2} \\cdot s \\cdot \\frac{s\\sqrt{3}}{2} = \\frac{s^2\\sqrt{3}}{4}$',
              'If area is given, solve for $s$: $s = \\sqrt{\\frac{4A}{\\sqrt{3}}}$',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'An equilateral triangle has a perimeter of $36$. Find its area.',
            steps: [
              { label: 'Side length', content: '$s = \\frac{36}{3} = 12$' },
              { label: 'Height', content: '$h = \\frac{12\\sqrt{3}}{2} = 6\\sqrt{3}$' },
              { label: 'Area', content: '$A = \\frac{1}{2}(12)(6\\sqrt{3}) = 36\\sqrt{3}$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'An equilateral triangle has an area of $16\\sqrt{3}$. Find the side length.',
            answer: '$\\frac{s^2\\sqrt{3}}{4} = 16\\sqrt{3}$ → $s^2 = 64$ → $s = 8$.',
          },
        ],
      },
    },
  },

  35: {
    moduleId: 'triangles',
    title: 'Complex 30-60-90 Triangle Example #2',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Regular hexagons decompose into six equilateral triangles, making the 30-60-90 ratio essential for hexagon problems.',
        blocks: [
          {
            type: 'text',
            content: 'A **regular hexagon** with side length $s$ can be split into six equilateral triangles, each with side $s$. The "short diagonal" (connecting opposite vertices through the center) equals $2s$, and the "long diagonal" (distance between parallel sides) equals $s\\sqrt{3}$.',
          },
          {
            type: 'formula',
            label: 'Regular Hexagon Area',
            content: '$$A_{\\text{hex}} = 6 \\times \\frac{s^2\\sqrt{3}}{4} = \\frac{3s^2\\sqrt{3}}{2}$$',
          },
          {
            type: 'keyInsight',
            content: 'Any measurement within a regular hexagon can be found by working with the 30-60-90 triangles that form each equilateral-triangle sector.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Hexagon Area via 30-60-90',
            content: 'Recognition cue: a regular hexagon with a side length given, area asked. First move: area $= \\frac{3s^2\\sqrt{3}}{2}$, or compute one equilateral-triangle area and multiply by $6$.',
          },
          {
            type: 'trapCard',
            title: 'Confusing Side with Apothem',
            wrong: 'Student uses the apothem (distance from center to midpoint of a side) as the side length.',
            correction: 'In a regular hexagon, the apothem $= \\frac{s\\sqrt{3}}{2}$ (the long leg of a 30-60-90 triangle). The side length $s$ equals the distance from the center to a vertex.',
          },
        ],
      },
      methods: {
        title: 'Solving Method',
        blocks: [
          {
            type: 'steps',
            title: 'Hexagon with 30-60-90',
            items: [
              'Identify the side length $s$ of the regular hexagon',
              'Split into $6$ equilateral triangles, each with side $s$',
              'Each equilateral triangle has area $\\frac{s^2\\sqrt{3}}{4}$',
              'Hexagon area $= 6 \\times \\frac{s^2\\sqrt{3}}{4} = \\frac{3s^2\\sqrt{3}}{2}$',
              'The apothem (distance from center to the midpoint of a side) is $\\frac{s\\sqrt{3}}{2}$',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'A regular hexagon has a side length of $4$. Find its area.',
            steps: [
              { label: 'Formula', content: '$A = \\frac{3(4)^2\\sqrt{3}}{2} = \\frac{48\\sqrt{3}}{2} = 24\\sqrt{3}$' },
              { label: 'Alternative', content: 'One equilateral triangle: $\\frac{16\\sqrt{3}}{4} = 4\\sqrt{3}$. Six of them: $6 \\times 4\\sqrt{3} = 24\\sqrt{3}$. ✓' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'A regular hexagon has an apothem of $5\\sqrt{3}$. Find the side length and the area.',
            answer: 'Apothem $= \\frac{s\\sqrt{3}}{2} = 5\\sqrt{3}$ → $s = 10$. Area $= \\frac{3(10)^2\\sqrt{3}}{2} = \\frac{300\\sqrt{3}}{2} = 150\\sqrt{3}$.',
          },
        ],
      },
    },
  },

};
