export const trianglesLessonTabs = {

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
        summary: 'The SAT loves asking you to find a missing angle using the $180°$ rule.',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Classic Prompt',
            content: '"In triangle $ABC$, $\\angle A = 50°$ and $\\angle B = 65°$. What is $\\angle C$?" — Use $\\angle C = 180° - 50° - 65° = 65°$.',
          },
          {
            type: 'tip',
            content: 'When the SAT says "equilateral," immediately write $60°$ for every angle. When it says "isosceles," set the two base angles equal and use $180°$ to solve.',
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
              { icon: '🔺', label: 'Acute', description: 'All three angles less than $90°$' },
              { icon: '📐', label: 'Right', description: 'Exactly one angle equals $90°$' },
              { icon: '📏', label: 'Obtuse', description: 'Exactly one angle greater than $90°$' },
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
        ],
      },
      methods: {
        title: 'Angle Classification Test',
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
            type: 'example',
            difficulty: 'Medium',
            problem: 'A triangle has sides $7$, $8$, and $10$. Is it acute, right, or obtuse?',
            steps: [
              { label: 'Identify longest side', content: '$c = 10$, so $a = 7$, $b = 8$' },
              { label: 'Compute', content: '$a^2 + b^2 = 49 + 64 = 113$' },
              { label: 'Compare', content: '$c^2 = 100$. Since $113 > 100$, the triangle is **acute**.' },
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
              { label: 'Integer values', content: '$5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15$' },
            ],
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
        ],
      },
    },
  },

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
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A triangle has a base of $12$ cm and an area of $42$ cm². What is the height?',
            steps: [
              { label: 'Set up', content: '$42 = \\frac{1}{2}(12)(h)$' },
              { label: 'Simplify', content: '$42 = 6h$' },
              { label: 'Solve', content: '$h = 7$ cm' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A right triangle has legs of length $5$ and $12$. What is its area?',
            answer: '$A = \\frac{1}{2}(5)(12) = 30$ square units. In a right triangle, the two legs serve as base and height.',
          },
        ],
      },
    },
  },

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
            title: 'Similar ≠ Congruent',
            content: '**Similar** = same shape, possibly different size (angles equal, sides proportional). **Congruent** = same shape AND same size (angles equal, sides equal). Congruent is a special case of similar where $k = 1$.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        summary: 'The SAT frequently embeds similar triangles in diagrams with parallel lines or shared angles.',
        blocks: [
          {
            type: 'text',
            content: 'Look for these setups: a **line parallel** to one side of a triangle (creates a smaller similar triangle inside), two triangles sharing a **common vertex**, or overlapping triangles in a complex figure.',
          },
          {
            type: 'tip',
            content: 'When you spot similar triangles, immediately set up a **proportion**. Match corresponding sides carefully — the side opposite the largest angle in one triangle corresponds to the side opposite the largest angle in the other.',
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
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Mismatching Corresponding Sides',
            wrong: 'Students set up $\\frac{AD}{BC} = \\frac{DE}{AB}$, pairing sides from different positions.',
            correction: 'Always match sides by their **position** in each triangle: shortest-to-shortest, or side-opposite-the-same-angle to side-opposite-the-same-angle.',
          },
        ],
      },
    },
  },

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
              { icon: '📏', label: 'Leg $a$', description: 'One side forming the right angle' },
              { icon: '📏', label: 'Leg $b$', description: 'Other side forming the right angle' },
              { icon: '📐', label: 'Hypotenuse $c$', description: 'Opposite the $90°$ angle; longest side' },
            ],
          },
          {
            type: 'keyInsight',
            content: 'The two acute angles in a right triangle are **complementary** — they add up to $90°$. If one acute angle is $35°$, the other is $55°$. The SAT often tests this fact.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Hidden Right Triangles',
            content: 'The SAT embeds right triangles in many contexts: altitudes dropped from a vertex, diagonals of rectangles, distances on coordinate planes, and ramps or ladders in word problems. Always ask: "Is there a $90°$ angle here?"',
          },
          {
            type: 'tip',
            content: 'When a right triangle appears, you unlock three powerful tools: the **Pythagorean theorem**, **special right triangle ratios**, and **trigonometric ratios**. Decide which one the problem is testing before you start computing.',
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
              'Plug the known sides into $a^2 + b^2 = c^2$',
              'Solve for the unknown side',
              'Before computing, check if it\'s a **Pythagorean triple** — saves time',
            ],
          },
          {
            type: 'strategyCard',
            title: 'Triple Spotting',
            icon: '⚡',
            timing: '~5s',
            content: 'If you see legs $6$ and $8$, recognize $6$-$8$-$10$ (the $3$-$4$-$5$ triple scaled by $2$). No squaring or square roots needed.',
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
            title: 'Opposite & Adjacent Change',
            content: '"Opposite" and "adjacent" depend on **which angle you\'re looking at**. The hypotenuse never changes, but the other two labels swap when you switch to the other acute angle.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        summary: 'The SAT reference sheet includes trig ratios. Questions typically give two sides and ask for an angle-related ratio.',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'In right triangle $PQR$, $\\angle R = 90°$, $PQ = 13$, and $QR = 5$. What is $\\sin P$?',
            steps: [
              { label: 'Identify sides', content: 'Relative to $\\angle P$: opposite $= QR = 5$, hypotenuse $= PQ = 13$' },
              { label: 'Apply SOH', content: '$\\sin P = \\frac{\\text{Opposite}}{\\text{Hypotenuse}} = \\frac{5}{13}$' },
            ],
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
            type: 'tip',
            content: 'Complementary angle identity: $\\sin \\theta = \\cos(90° - \\theta)$. The SAT tests this directly — if $\\sin 40° = x$, then $\\cos 50° = x$.',
          },
        ],
      },
    },
  },

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
      satPatterns: {
        title: 'SAT Connections',
        blocks: [
          {
            type: 'tip',
            content: 'A 45-45-90 triangle appears whenever you see a square\'s diagonal, an isosceles right triangle, or coordinates that involve $45°$ rotations. The digital SAT reference sheet includes this ratio — know how to apply it fast.',
          },
          {
            type: 'trapCard',
            title: 'Multiplying Instead of Dividing',
            wrong: 'Given hypotenuse $= 8$, student writes leg $= 8\\sqrt{2}$.',
            correction: 'Going from hypotenuse to leg means **dividing** by $\\sqrt{2}$: leg $= \\frac{8}{\\sqrt{2}} = 4\\sqrt{2}$.',
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
            headers: ['If You Know…', 'Then…'],
            rows: [
              ['Short leg $= s$', 'Long leg $= s\\sqrt{3}$, Hypotenuse $= 2s$'],
              ['Hypotenuse $= h$', 'Short leg $= \\frac{h}{2}$, Long leg $= \\frac{h\\sqrt{3}}{2}$'],
              ['Long leg $= L$', 'Short leg $= \\frac{L}{\\sqrt{3}} = \\frac{L\\sqrt{3}}{3}$, Hypotenuse $= \\frac{2L}{\\sqrt{3}} = \\frac{2L\\sqrt{3}}{3}$'],
            ],
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
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Swapping the $\\sqrt{3}$ and the $2$',
            wrong: 'Student puts $\\sqrt{3}$ on the hypotenuse: short leg $: $ long leg $: $ hyp $= 1 : 2 : \\sqrt{3}$.',
            correction: 'The hypotenuse is always $2$ (the integer). The $\\sqrt{3}$ goes on the **middle** side (opposite $60°$). Ratio: $1 : \\sqrt{3} : 2$.',
          },
          {
            type: 'trapCard',
            title: 'Confusing Which Leg Is Which',
            wrong: 'Student uses the long leg as the "short leg" in the formula.',
            correction: 'The **short leg** is opposite the **smallest angle** ($30°$). The **long leg** is opposite $60°$. Always identify angles first.',
          },
        ],
      },
    },
  },

};
