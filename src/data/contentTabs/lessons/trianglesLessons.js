export const trianglesLessonTabs = {
  1: {
    moduleId: 'triangles',
    title: 'What Is a Triangle?',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'A triangle is a three-sided polygon whose interior angles always sum to $180°$.',
        blocks: [
          {
            type: 'formula',
            label: 'Angle Sum Property',
            content: '$$\\angle A + \\angle B + \\angle C = 180°$$',
          },
          {
            type: 'text',
            content: 'A **triangle** is the simplest polygon — three straight sides, three vertices, and three interior angles. No matter how you stretch or skew it, the three angles always add up to exactly $180°$. This single fact drives the majority of triangle questions on the Digital SAT.',
          },
          {
            type: 'keyInsight',
            content: 'The longest side of a triangle is always opposite the largest angle, and the shortest side is opposite the smallest angle. This side-angle relationship lets you rank sides from angles alone.',
          },
          {
            type: 'table',
            headers: [
              'Classification',
              'Side Rule',
              'Angle Consequence',
            ],
            rows: [
              [
                'Equilateral',
                'All three sides equal',
                'Each angle $= 60°$',
              ],
              [
                'Isosceles',
                'Exactly two sides equal',
                'Base angles are equal',
              ],
              [
                'Scalene',
                'No sides equal',
                'No angles equal',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Exterior Angle Confusion',
            wrong: 'Exterior angle at $C$ is $130°$. Student writes $\\angle C = 130°$ as the interior angle.',
            correction: 'An exterior angle is supplementary to its adjacent interior angle: $\\angle C = 180° - 130° = 50°$. The exterior angle equals the sum of the two remote interior angles, not the interior angle itself.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'In $\\triangle ABC$, $\\angle A = 50°$ and the exterior angle at $C$ is $130°$. Find $\\angle B$.',
            steps: [
              {
                label: 'Interior at C',
                content: '$\\angle C = 180° - 130° = 50°$',
              },
              {
                label: 'Angle sum',
                content: '$\\angle B = 180° - 50° - 50° = 80°$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'In an isosceles triangle, the two equal angles each measure $55°$. What is the vertex angle?',
            answer: '$180° - 55° - 55° = 70°$.',
          },
        ],
      },
    },
  },

  2: {
    moduleId: 'triangles',
    title: 'Types of Triangles by Angles',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Triangles are also classified by their largest angle — acute, right, or obtuse.',
        blocks: [
          {
            type: 'text',
            content: 'Every triangle fits into exactly one angle-based category. An **acute** triangle has all angles below $90°$. A **right** triangle has one angle of exactly $90°$. An **obtuse** triangle has one angle greater than $90°$. A triangle can never have two right or two obtuse angles because their sum would already meet or exceed $180°$.',
          },
          {
            type: 'keyInsight',
            content: 'You can classify a triangle by its sides AND by its angles simultaneously. A triangle can be "isosceles right" (two equal legs, $90°$ between them) or "scalene obtuse" (no equal sides, one angle $> 90°$).',
          },
          {
            type: 'table',
            headers: [
              'Type',
              'Largest Angle',
              'Side-Length Test ($c$ = longest)',
            ],
            rows: [
              [
                'Acute',
                '$< 90°$',
                '$a^2 + b^2 > c^2$',
              ],
              [
                'Right',
                '$= 90°$',
                '$a^2 + b^2 = c^2$',
              ],
              [
                'Obtuse',
                '$> 90°$',
                '$a^2 + b^2 < c^2$',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Comparing Sides Without Squaring',
            wrong: 'Sides $5$, $7$, $9$. Student compares $5 + 7 = 12 > 9$ and concludes "acute."',
            correction: 'That test checks existence (Triangle Inequality), not angle type. Compare **squares**: $5^2 + 7^2 = 74$ vs. $9^2 = 81$. Since $74 < 81$, the triangle is **obtuse**.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'steps',
            title: 'Classifying from Side Lengths',
            items: [
              'Label the sides so that $c$ is the longest',
              'Compute $a^2 + b^2$ and compare to $c^2$',
              'If $a^2 + b^2 > c^2$ → **acute**; if equal → **right**; if less → **obtuse**',
            ],
          },
          {
            type: 'steps',
            title: 'Classifying from Side Lengths',
            items: [
              'Label the sides so that $c$ is the longest',
              'Compute $a^2 + b^2$ and compare to $c^2$',
              'If $a^2 + b^2 > c^2$ → **acute**; if equal → **right**; if less → **obtuse**',
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A triangle has sides $7$, $8$, and $10$. Is it acute, right, or obtuse?',
            answer: '$c = 10$: $7^2 + 8^2 = 49 + 64 = 113$. $10^2 = 100$. Since $113 > 100$, the triangle is **acute**.',
          },
        ],
      },
    },
  },

  3: {
    moduleId: 'triangles',
    title: 'Triangle Inequality Theorem',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Not every set of three lengths can form a triangle — the two shorter sides must sum to more than the longest.',
        blocks: [
          {
            type: 'formula',
            label: 'Triangle Inequality',
            content: '$$a + b > c \\quad \\text{(where } c \\text{ is the longest side)}$$',
          },
          {
            type: 'text',
            content: 'For three lengths to form a triangle, **each side must be shorter than the sum of the other two**. In practice, only one check matters: the **longest side must be less than the sum of the two shorter sides**. If equality holds, the points are collinear — a degenerate "triangle" with zero area.',
          },
          {
            type: 'keyInsight',
            content: 'When two sides $a$ and $b$ are known, the third side $c$ must satisfy $|a - b| < c < a + b$. The third side is strictly between the difference and the sum.',
          },
          {
            type: 'trapCard',
            title: 'Including the Endpoints',
            wrong: 'Sides $5$ and $9$. Student says the third side can be $4$ through $14$, inclusive.',
            correction: 'The inequality is strict: $|9 - 5| < c < 9 + 5$ gives $4 < c < 14$. Values $4$ and $14$ create degenerate cases (collinear points), not valid triangles.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'steps',
            title: 'Checking Validity and Finding the Range',
            items: [
              'To check if three given lengths form a triangle: add the two shorter sides and confirm the sum exceeds the longest',
              'To find the range of a third side given $a$ and $b$: compute $|a - b| < c < a + b$',
              'For integer-value questions: list integers strictly between the bounds and count',
            ],
          },
          {
            type: 'steps',
            title: 'Checking Validity and Finding the Range',
            items: [
              'To check if three given lengths form a triangle: add the two shorter sides and confirm the sum exceeds the longest',
              'To find the range of a third side given $a$ and $b$: compute $|a - b| < c < a + b$',
              'For integer-value questions: list integers strictly between the bounds and count',
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Two sides of a triangle are $6$ and $10$. How many integer lengths are possible for the third side?',
            answer: '$|10 - 6| < c < 10 + 6$ gives $4 < c < 16$. Integer values: $5, 6, 7, \\ldots, 15$ — that is $15 - 5 + 1 = 11$ values.',
          },
        ],
      },
    },
  },

  4: {
    moduleId: 'triangles',
    title: 'Simple Angles of a Triangle Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Finding a missing angle uses one rule: the three interior angles sum to $180°$.',
        blocks: [
          {
            type: 'formula',
            label: 'Angle Sum Property',
            content: '$$\\angle A + \\angle B + \\angle C = 180°$$',
          },
          {
            type: 'text',
            content: 'When two angles of a triangle are given, subtract their sum from $180°$ to find the third. This single operation solves the majority of basic angle problems on the SAT.',
          },
          {
            type: 'trapCard',
            title: 'Confusing Exterior and Interior Angles',
            wrong: 'A triangle shows angles $70°$ and $60°$. An exterior angle of $110°$ is also marked. Student uses $110°$ as the third interior angle.',
            correction: 'The third interior angle is $180° - 70° - 60° = 50°$. The $110°$ exterior angle is supplementary to the $70°$ angle, not a separate interior angle.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'In $\\triangle PQR$, $\\angle P = 45°$ and an exterior angle at $R$ measures $115°$. What is $\\angle Q$?',
            steps: [
              {
                label: 'Find interior angle at R',
                content: 'The interior angle at $R$ is supplementary to the exterior angle: $\\angle R = 180° - 115° = 65°$.',
              },
              {
                label: 'Apply angle sum property',
                content: '$\\angle P + \\angle Q + \\angle R = 180°$, so $45° + \\angle Q + 65° = 180°$.',
              },
              {
                label: 'Solve for angle Q',
                content: '$\\angle Q = 180° - 45° - 65° = 70°$.',
              },
            ],
          },
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
      learn: {
        title: 'Learn',
        summary: 'Harder angle problems combine the $180°$ sum with exterior angles, algebraic expressions, or multi-triangle diagrams.',
        blocks: [
          {
            type: 'formula',
            label: 'Exterior Angle Theorem',
            content: '$$\\text{Exterior angle} = \\text{sum of the two remote interior angles}$$',
          },
          {
            type: 'text',
            content: 'When angles are algebraic expressions, set up the equation using the $180°$ sum or the Exterior Angle Theorem, then solve for the variable. Vertical angles are equal, and angles on a straight line sum to $180°$ — combine these facts to navigate complex diagrams.',
          },
          {
            type: 'keyInsight',
            content: 'The Exterior Angle Theorem is a shortcut: it avoids finding the third interior angle first. The exterior angle at any vertex equals the sum of the two non-adjacent interior angles.',
          },
          {
            type: 'trapCard',
            title: 'Reporting $x$ Instead of the Angle',
            wrong: 'Angles are $(2x)°$, $(3x)°$, and $50°$. Student solves $5x + 50 = 180$ → $x = 26$ and answers $26$.',
            correction: 'The question asks for an angle, not $x$. Substitute back: the angles are $52°$, $78°$, and $50°$. Read whether the question wants $x$ or a specific angle.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'In $\\triangle ABC$, $\\angle A = (2x + 5)°$, $\\angle B = (3x - 10)°$, and the exterior angle at $C$ is $(4x + 15)°$. Find $\\angle A$.',
            steps: [
              {
                label: 'Use the Exterior Angle Theorem',
                content: 'The exterior angle at $C$ equals the sum of the two remote interior angles: $(4x + 15) = (2x + 5) + (3x - 10)$.',
              },
              {
                label: 'Solve for x',
                content: '$4x + 15 = 5x - 5$ gives $x = 20$.',
              },
              {
                label: 'Substitute back',
                content: '$\\angle A = 2(20) + 5 = 45°$.',
              },
              {
                label: 'Verify',
                content: '$\\angle B = 3(20) - 10 = 50°$. Exterior at $C = 4(20) + 15 = 95°$. Check: $45° + 50° = 95°$ ✓',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'In $\\triangle DEF$, $\\angle D = (4x)°$, $\\angle E = (x + 30)°$, and $\\angle F = (2x + 10)°$. Find $\\angle D$.',
            answer: '$4x + (x + 30) + (2x + 10) = 180$ → $7x + 40 = 180$ → $x = 20$. So $\\angle D = 4(20) = 80°$.',
          },
        ],
      },
    },
  },

  6: {
    moduleId: 'triangles',
    title: 'Area of a Triangle',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'The area of a triangle is half the product of its base and perpendicular height.',
        blocks: [
          {
            type: 'formula',
            label: 'Triangle Area',
            content: '$$A = \\frac{1}{2}bh$$',
          },
          {
            type: 'text',
            content: 'The **base** ($b$) can be any side you choose. The **height** ($h$) is the perpendicular distance from that base to the opposite vertex. The height does not have to fall inside the triangle — for obtuse triangles, extending the base line is often required. Choosing the right base-height pair is the real skill.',
          },
          {
            type: 'keyInsight',
            content: 'In a right triangle, the two legs are perpendicular, so they serve directly as base and height: $A = \\frac{1}{2}(\\text{leg}_1)(\\text{leg}_2)$. No separate height calculation is needed.',
          },
          {
            type: 'trapCard',
            title: 'Using a Slant Side as Height',
            wrong: 'Triangle with base $10$ and slant side $8$. Student writes $A = \\frac{1}{2}(10)(8) = 40$.',
            correction: 'The height must be **perpendicular** to the base. The slant side $8$ is not the height. Drop a perpendicular from the opposite vertex to the base and compute its length.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'A triangle has a base of $12$ cm and an area of $42$ cm$^2$. What is the height?',
            steps: [
              {
                label: 'Set up',
                content: '$42 = \\frac{1}{2}(12)(h)$',
              },
              {
                label: 'Simplify',
                content: '$42 = 6h$',
              },
              {
                label: 'Solve',
                content: '$h = 7$ cm',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A right triangle has legs of length $9$ and $12$. What is its area?',
            answer: '$A = \\frac{1}{2}(9)(12) = 54$ square units.',
          },
        ],
      },
    },
  },

  7: {
    moduleId: 'triangles',
    title: 'Simple Area of a Right Triangle Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'In a right triangle, the legs are perpendicular — plug them directly into the area formula.',
        blocks: [
          {
            type: 'formula',
            label: 'Right Triangle Area',
            content: '$$A = \\frac{1}{2}(\\text{leg}_1)(\\text{leg}_2)$$',
          },
          {
            type: 'text',
            content: 'The two legs of a right triangle meet at the right angle, so they are automatically perpendicular. Use them as base and height directly — the hypotenuse plays no role in the area formula.',
          },
          {
            type: 'trapCard',
            title: 'Using the Hypotenuse in the Area Formula',
            wrong: 'A 3-4-5 right triangle. Student writes $A = \\frac{1}{2}(5)(3) = 7.5$.',
            correction: 'The hypotenuse ($5$) is not a leg. The two legs are $3$ and $4$. Area $= \\frac{1}{2}(3)(4) = 6$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A right triangle has legs of length $6$ and $8$. What is the area of the triangle?',
            steps: [
              {
                label: 'Identify base and height',
                content: 'In a right triangle, the two legs are perpendicular, so they serve as base and height directly.',
              },
              {
                label: 'Apply the area formula',
                content: '$A = \\frac{1}{2}(\\text{leg}_1)(\\text{leg}_2) = \\frac{1}{2}(6)(8)$.',
              },
              {
                label: 'Compute',
                content: '$A = \\frac{1}{2}(48) = 24$ square units.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A right triangle has a leg of $8$ and a hypotenuse of $10$. What is the area?',
            answer: 'Find the other leg: $b = \\sqrt{10^2 - 8^2} = \\sqrt{36} = 6$. Area $= \\frac{1}{2}(8)(6) = 24$ square units.',
          },
        ],
      },
    },
  },

  8: {
    moduleId: 'triangles',
    title: 'Complex Area of a Right Triangle Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Complex area problems require finding a missing leg via the Pythagorean theorem before computing the area.',
        blocks: [
          {
            type: 'formula',
            label: 'Pythagorean Theorem',
            content: '$$a^2 + b^2 = c^2$$',
          },
          {
            type: 'text',
            content: 'When only one leg and the hypotenuse are given, use $a^2 + b^2 = c^2$ to find the missing leg first. Then apply $A = \\frac{1}{2}(\\text{leg}_1)(\\text{leg}_2)$.',
          },
          {
            type: 'keyInsight',
            content: 'Some problems embed the right triangle inside a rectangle or coordinate grid. Extract the right triangle, find the legs, then compute area.',
          },
          {
            type: 'trapCard',
            title: 'Treating the Hypotenuse as a Leg',
            wrong: 'Hypotenuse $= 13$, one leg $= 5$. Student writes $A = \\frac{1}{2}(13)(5) = 32.5$.',
            correction: 'Find the missing leg: $b = \\sqrt{13^2 - 5^2} = \\sqrt{144} = 12$. Area $= \\frac{1}{2}(5)(12) = 30$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A right triangle has a hypotenuse of $15$ and one leg of $9$. What is the area of the triangle?',
            steps: [
              {
                label: 'Find the missing leg',
                content: '$b = \\sqrt{15^2 - 9^2} = \\sqrt{225 - 81} = \\sqrt{144} = 12$.',
              },
              {
                label: 'Identify base and height',
                content: 'The two legs are $9$ and $12$. These are perpendicular, so use them as base and height.',
              },
              {
                label: 'Compute the area',
                content: '$A = \\frac{1}{2}(9)(12) = 54$ square units.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A right triangle has a hypotenuse of $17$ and one leg of $8$. Find the area.',
            answer: 'Missing leg $= \\sqrt{17^2 - 8^2} = \\sqrt{289 - 64} = \\sqrt{225} = 15$. Area $= \\frac{1}{2}(8)(15) = 60$ square units. (Uses the $8$-$15$-$17$ triple.)',
          },
        ],
      },
    },
  },

  9: {
    moduleId: 'triangles',
    title: 'What Are Similar Triangles?',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Similar triangles have the same shape but different sizes — their angles match and their sides are proportional.',
        blocks: [
          {
            type: 'formula',
            label: 'Proportional Sides',
            content: '$$\\frac{AB}{DE} = \\frac{BC}{EF} = \\frac{AC}{DF} = k$$',
          },
          {
            type: 'text',
            content: 'Two triangles are **similar** ($\\triangle ABC \\sim \\triangle DEF$) when they have the same three angle measures. Their corresponding sides are in a constant ratio called the **scale factor** $k$. Similar triangles are scaled copies of each other.',
          },
          {
            type: 'keyInsight',
            content: 'If two similar triangles have a side ratio of $k$, their area ratio is $k^2$. Doubling all sides quadruples the area. This relationship is tested directly on the SAT.',
          },
          {
            type: 'table',
            headers: [
              'Measurement',
              'Scale Rule',
            ],
            rows: [
              [
                'Corresponding sides',
                'Scale by $k$',
              ],
              [
                'Perimeters',
                'Scale by $k$',
              ],
              [
                'Areas',
                'Scale by $k^2$',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Mismatching Corresponding Sides',
            wrong: 'Student pairs the shortest side of one triangle with the longest side of the other triangle.',
            correction: 'Corresponding sides are opposite equal angles. Write the similarity statement with matching vertex order ($\\triangle ABC \\sim \\triangle DEF$), then match: $AB \\leftrightarrow DE$, $BC \\leftrightarrow EF$, $AC \\leftrightarrow DF$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: '$\\triangle ABC \\sim \\triangle DEF$. If $AB = 6$, $DE = 9$, and $BC = 8$, find $EF$.',
            steps: [
              {
                label: 'Scale factor',
                content: '$k = \\frac{DE}{AB} = \\frac{9}{6} = \\frac{3}{2}$',
              },
              {
                label: 'Proportion',
                content: '$EF = BC \\times k = 8 \\times \\frac{3}{2} = 12$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Two similar triangles have corresponding sides of $4$ and $10$. If the smaller triangle has area $24$, what is the area of the larger?',
            answer: 'Scale factor $= \\frac{10}{4} = \\frac{5}{2}$. Area ratio $= \\left(\\frac{5}{2}\\right)^2 = \\frac{25}{4}$. Area $= 24 \\times \\frac{25}{4} = 150$.',
          },
        ],
      },
    },
  },

  10: {
    moduleId: 'triangles',
    title: 'How to Identify Similar Triangles',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Three quick tests can prove similarity — AA is by far the most common on the SAT.',
        blocks: [
          {
            type: 'text',
            content: 'Common AA setups on the SAT: (1) a line parallel to one side of a triangle creates corresponding angles, (2) two triangles share a vertex angle and have a second equal angle from vertical angles or given information.',
          },
          {
            type: 'keyInsight',
            content: 'On the SAT, **AA is nearly the only similarity test you need**. If two angles match, stop — the triangles are similar. Write the proportion, cross-multiply, solve.',
          },
          {
            type: 'table',
            headers: [
              'Test',
              'What You Need',
              'Why It Works',
            ],
            rows: [
              [
                '**AA** (Angle-Angle)',
                'Two pairs of equal angles',
                'Third angle is forced by the $180°$ rule',
              ],
              [
                '**SAS** (Side-Angle-Side)',
                'Two proportional side pairs with equal included angle',
                'Proportional sides + locked angle fix the shape',
              ],
              [
                '**SSS** (Side-Side-Side)',
                'All three side pairs proportional',
                'Equal ratios force equal angles',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Using Part of a Side Instead of the Full Side',
            wrong: '$AD = 4$, $DB = 6$. Student sets up $\\frac{4}{6} = \\frac{DE}{BC}$ using the segment $DB$ instead of full side $AB$.',
            correction: `The small triangle's side corresponds to the **full** side of the large triangle: $AB = 4 + 6 = 10$. Correct proportion: $\frac{AD}{AB} = \frac{4}{10} = \frac{DE}{BC}$.`,
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'steps',
            title: 'Proving Similarity and Solving',
            items: [
              'Look for two pairs of equal angles (AA) — check for parallel lines, vertical angles, shared angles',
              'Write the similarity statement with vertices in corresponding order',
              'Set up a proportion between corresponding sides: $\\frac{\\text{side}_1}{\\text{corresponding side}_1} = \\frac{\\text{side}_2}{\\text{corresponding side}_2}$',
              'Cross-multiply and solve for the unknown',
            ],
          },
          {
            type: 'steps',
            title: 'Proving Similarity and Solving',
            items: [
              'Look for two pairs of equal angles (AA) — check for parallel lines, vertical angles, shared angles',
              'Write the similarity statement with vertices in corresponding order',
              'Set up a proportion between corresponding sides: $\\frac{\\text{side}_1}{\\text{corresponding side}_1} = \\frac{\\text{side}_2}{\\text{corresponding side}_2}$',
              'Cross-multiply and solve for the unknown',
            ],
          },
          {
            type: 'checkpointQuestion',
            question: '$\\overline{DE} \\parallel \\overline{BC}$ in $\\triangle ABC$. $AD = 4$, $DB = 6$, and $BC = 15$. Find $DE$.',
            answer: '$AB = 4 + 6 = 10$. $\\frac{AD}{AB} = \\frac{DE}{BC}$ → $\\frac{4}{10} = \\frac{DE}{15}$ → $DE = 6$.',
          },
        ],
      },
    },
  },

  11: {
    moduleId: 'triangles',
    title: 'Simple Similar Triangles Example #1',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'When similarity is confirmed, set up a proportion between corresponding sides to find the unknown.',
        blocks: [
          {
            type: 'formula',
            label: 'Proportion from Similarity',
            content: '$$\\frac{\\text{side of } \\triangle_1}{\\text{corresponding side of } \\triangle_2} = \\frac{\\text{another side of } \\triangle_1}{\\text{corresponding side of } \\triangle_2}$$',
          },
          {
            type: 'text',
            content: 'Corresponding sides are opposite equal angles in their respective triangles. Matching sides correctly is the critical step — errors here propagate through the entire solution.',
          },
          {
            type: 'trapCard',
            title: 'Flipping the Proportion',
            wrong: 'Student writes $\\frac{3}{x} = \\frac{4}{6}$ instead of $\\frac{3}{4} = \\frac{x}{6}$ (or an equivalent correct setup).',
            correction: 'Keep the same triangle on the same side of the equation. Both numerators from one triangle, both denominators from the other. Be consistent: $\\frac{\\text{small}}{\\text{large}} = \\frac{\\text{small}}{\\text{large}}$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: '$\\triangle ABC \\sim \\triangle DEF$. If $AB = 3$, $DE = 5$, and $BC = 9$, find $EF$.',
            steps: [
              {
                label: 'Find the scale factor',
                content: '$k = \\frac{DE}{AB} = \\frac{5}{3}$.',
              },
              {
                label: 'Set up the proportion',
                content: '$\\frac{AB}{DE} = \\frac{BC}{EF}$ gives $\\frac{3}{5} = \\frac{9}{EF}$.',
              },
              {
                label: 'Cross-multiply and solve',
                content: '$3 \\cdot EF = 5 \\cdot 9 = 45$, so $EF = 15$.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: '$\\triangle PQR \\sim \\triangle XYZ$. $PQ = 4$, $XY = 10$, and $QR = 6$. Find $YZ$.',
            answer: 'Scale factor $= \\frac{10}{4} = \\frac{5}{2}$. $YZ = 6 \\times \\frac{5}{2} = 15$.',
          },
        ],
      },
    },
  },

  12: {
    moduleId: 'triangles',
    title: 'Simple Similar Triangles Example #2',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'A line parallel to one side of a triangle creates a smaller similar triangle inside — the most common SAT setup.',
        blocks: [
          {
            type: 'formula',
            label: 'Parallel-Line Proportion',
            content: '$$\\frac{AD}{AB} = \\frac{AE}{AC} = \\frac{DE}{BC}$$',
          },
          {
            type: 'text',
            content: 'When a segment is drawn parallel to one side of a triangle, it cuts the other two sides proportionally. The smaller triangle formed at the apex is similar to the original by AA (corresponding angles from the parallel lines).',
          },
          {
            type: 'trapCard',
            title: 'Using a Segment Instead of the Full Side',
            wrong: '$AD = 3$, $DB = 5$. Student sets up $\\frac{3}{5} = \\frac{DE}{BC}$ using the segment instead of the full side.',
            correction: 'Use the full side: $AB = 3 + 5 = 8$. Correct proportion: $\\frac{AD}{AB} = \\frac{3}{8} = \\frac{DE}{BC}$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'In $\\triangle ABC$, $\\overline{DE} \\parallel \\overline{BC}$ with $D$ on $\\overline{AB}$ and $E$ on $\\overline{AC}$. If $AD = 4$, $DB = 8$, and $BC = 18$, find $DE$.',
            steps: [
              {
                label: 'Compute the full side',
                content: '$AB = AD + DB = 4 + 8 = 12$.',
              },
              {
                label: 'Set up the proportion',
                content: 'By AA similarity, $\\frac{AD}{AB} = \\frac{DE}{BC}$, so $\\frac{4}{12} = \\frac{DE}{18}$.',
              },
              {
                label: 'Cross-multiply and solve',
                content: '$12 \\cdot DE = 4 \\cdot 18 = 72$, so $DE = 6$.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: '$\\overline{MN} \\parallel \\overline{BC}$ in $\\triangle ABC$. $AM = 5$, $MB = 10$, $BC = 21$. Find $MN$.',
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
      learn: {
        title: 'Learn',
        summary: 'Shadow and height problems use similar triangles formed by parallel sun rays hitting objects of different heights.',
        blocks: [
          {
            type: 'formula',
            label: 'Shadow Proportion',
            content: '$$\\frac{\\text{height}_1}{\\text{shadow}_1} = \\frac{\\text{height}_2}{\\text{shadow}_2}$$',
          },
          {
            type: 'text',
            content: 'When the sun casts shadows at the same time, its rays are effectively parallel. Each object and its shadow form a right triangle. These triangles share the same sun angle, giving AA similarity.',
          },
          {
            type: 'trapCard',
            title: 'Mixing Height with Shadow in the Fraction',
            wrong: 'Student writes $\\frac{\\text{height}_1}{\\text{height}_2} = \\frac{\\text{shadow}_1}{\\text{height}_2}$, mixing measurement types.',
            correction: 'Keep consistent: height/shadow $=$ height/shadow, or equivalently height/height $=$ shadow/shadow. Both sides of the equation must pair the same measurement types.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A $6$-ft person casts a $4$-ft shadow at the same time a flagpole casts a $20$-ft shadow. How tall is the flagpole?',
            steps: [
              {
                label: 'Recognize similar triangles',
                content: 'Parallel sun rays create right triangles with equal angles, so the triangles are similar by AA.',
              },
              {
                label: 'Set up the proportion',
                content: '$\\frac{\\text{height}_{\\text{person}}}{\\text{shadow}_{\\text{person}}} = \\frac{\\text{height}_{\\text{pole}}}{\\text{shadow}_{\\text{pole}}}$, giving $\\frac{6}{4} = \\frac{h}{20}$.',
              },
              {
                label: 'Cross-multiply and solve',
                content: '$4h = 6 \\times 20 = 120$, so $h = 30$ ft.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A $5$-ft pole casts a $3$-ft shadow. At the same time, a building casts a $24$-ft shadow. How tall is the building?',
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
      learn: {
        title: 'Learn',
        summary: 'Overlapping triangles that share a common angle often produce AA similarity.',
        blocks: [
          {
            type: 'formula',
            label: 'Shared-Angle Proportion',
            content: '$$\\frac{AD}{AB} = \\frac{DE}{BC} = \\frac{AE}{AC}$$',
          },
          {
            type: 'text',
            content: 'Two triangles sharing a vertex angle are similar if they also share a second equal angle — from vertical angles, given equal angles, or a line creating congruent alternate interior angles.',
          },
          {
            type: 'keyInsight',
            content: 'In overlapping-triangle problems, redraw the two triangles separately. This prevents errors in matching corresponding sides.',
          },
          {
            type: 'trapCard',
            title: 'Using Partial Sides in Overlapping Figures',
            wrong: 'In overlapping triangles, student uses the non-overlapping segment instead of the full side for the larger triangle.',
            correction: 'Each side of the larger triangle is the **sum** of the overlapping and non-overlapping segments. Always compute and use the complete side.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: '$\\triangle ADE$ shares vertex $A$ with $\\triangle ABC$, and $\\triangle ADE \\sim \\triangle ABC$. If $AD = 6$, $DB = 4$, and $DE = 9$, find $BC$.',
            steps: [
              {
                label: 'Find the full side',
                content: '$AB = AD + DB = 6 + 4 = 10$.',
              },
              {
                label: 'Set up the proportion',
                content: '$\\frac{AD}{AB} = \\frac{DE}{BC}$, so $\\frac{6}{10} = \\frac{9}{BC}$.',
              },
              {
                label: 'Cross-multiply and solve',
                content: '$6 \\cdot BC = 10 \\cdot 9 = 90$, so $BC = 15$.',
              },
            ],
          },
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
      learn: {
        title: 'Learn',
        summary: 'Complex similarity problems combine the scale factor with area or perimeter in multi-step reasoning.',
        blocks: [
          {
            type: 'formula',
            label: 'Area Scaling',
            content: '$$\\frac{\\text{Area}_1}{\\text{Area}_2} = k^2 = \\left(\\frac{\\text{side}_1}{\\text{side}_2}\\right)^2$$',
          },
          {
            type: 'text',
            content: 'When the problem gives areas and asks for a side, take the square root of the area ratio to find the side ratio. When sides are given and area is asked, square the side ratio.',
          },
          {
            type: 'keyInsight',
            content: 'Perimeters scale by $k$, areas scale by $k^2$, and volumes (for 3D extensions) scale by $k^3$. Knowing which power to use is the key skill in these problems.',
          },
          {
            type: 'trapCard',
            title: 'Using the Side Ratio Directly for Area',
            wrong: 'Side ratio $= 2:3$, so student says the area ratio is also $2:3$, giving area $= 18$.',
            correction: 'Area scales by $k^2$: ratio is $2^2 : 3^2 = 4 : 9$, not $2:3$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: '$\\triangle PQR \\sim \\triangle XYZ$ with $PQ = 4$ and $XY = 6$. The area of $\\triangle PQR$ is $20$. What is the area of $\\triangle XYZ$?',
            steps: [
              {
                label: 'Find the side scale factor',
                content: '$k = \\frac{XY}{PQ} = \\frac{6}{4} = \\frac{3}{2}$.',
              },
              {
                label: 'Square for the area ratio',
                content: 'Area ratio $= k^2 = \\left(\\frac{3}{2}\\right)^2 = \\frac{9}{4}$.',
              },
              {
                label: 'Compute the area',
                content: 'Area of $\\triangle XYZ = 20 \\times \\frac{9}{4} = 45$.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: '$\\triangle ABC \\sim \\triangle DEF$ with $AB = 6$ and $DE = 10$. If the area of $\\triangle ABC = 27$, find the area of $\\triangle DEF$.',
            answer: '$k = \\frac{10}{6} = \\frac{5}{3}$. Area ratio $= \\left(\\frac{5}{3}\\right)^2 = \\frac{25}{9}$. Area $= 27 \\times \\frac{25}{9} = 75$.',
          },
        ],
      },
    },
  },

  16: {
    moduleId: 'triangles',
    title: 'Right Triangles',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'A right triangle has one $90°$ angle, making it the most formula-rich triangle on the SAT.',
        blocks: [
          {
            type: 'text',
            content: 'A **right triangle** contains exactly one $90°$ angle. The side opposite the right angle is the **hypotenuse** — always the longest side. The other two sides are **legs**, and they meet at the right angle.',
          },
          {
            type: 'keyInsight',
            content: 'The two acute angles in a right triangle are **complementary** — they sum to $90°$. If one acute angle is $35°$, the other is $55°$.',
          },
          {
            type: 'table',
            headers: [
              'Tool',
              'When to Use',
            ],
            rows: [
              [
                '$a^2 + b^2 = c^2$',
                'Two sides known, find the third',
              ],
              [
                '45-45-90 ratio: $1:1:\\sqrt{2}$',
                'A $45°$ angle is present',
              ],
              [
                '30-60-90 ratio: $1:\\sqrt{3}:2$',
                'A $30°$ or $60°$ angle is present',
              ],
              [
                'SOH CAH TOA',
                'An angle and one side are known',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Applying Pythagorean Theorem Without a Right Angle',
            wrong: 'Student uses $a^2 + b^2 = c^2$ on a triangle that has no confirmed right angle.',
            correction: '$a^2 + b^2 = c^2$ applies **only** to right triangles. Without a verified $90°$ angle, the equation does not hold. Check for the right-angle symbol or a perpendicular statement.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'steps',
            title: 'Identifying and Solving a Right Triangle',
            items: [
              'Locate the $90°$ angle (small square in diagram, or keywords "right," "perpendicular," "altitude")',
              'Label the hypotenuse (opposite $90°$) and the two legs',
              'Choose your tool: Pythagorean theorem, special-triangle ratio, or trig',
              'Solve for the unknown side or angle',
            ],
          },
          {
            type: 'steps',
            title: 'Identifying and Solving a Right Triangle',
            items: [
              'Locate the $90°$ angle (small square in diagram, or keywords "right," "perpendicular," "altitude")',
              'Label the hypotenuse (opposite $90°$) and the two legs',
              'Choose your tool: Pythagorean theorem, special-triangle ratio, or trig',
              'Solve for the unknown side or angle',
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'In a right triangle, one acute angle is $28°$. What is the other acute angle?',
            answer: 'The two acute angles sum to $90°$: $90° - 28° = 62°$.',
          },
        ],
      },
    },
  },

  17: {
    moduleId: 'triangles',
    title: 'The Pythagorean Theorem',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'In any right triangle, the square of the hypotenuse equals the sum of the squares of the two legs.',
        blocks: [
          {
            type: 'formula',
            label: 'Pythagorean Theorem',
            content: '$$a^2 + b^2 = c^2$$',
          },
          {
            type: 'text',
            content: 'The Pythagorean Theorem connects the three sides of a right triangle: the sum of the squares of the legs equals the square of the hypotenuse. Recognizing common triples by sight eliminates the need for computation entirely.',
          },
          {
            type: 'keyInsight',
            content: 'Recognizing triples saves 30+ seconds. If you see legs $9$ and $12$, the hypotenuse is $15$ ($3$-$4$-$5$ scaled by $3$). No squaring or square roots required.',
          },
          {
            type: 'table',
            headers: [
              'Triple',
              'Common Multiples',
            ],
            rows: [
              [
                '$3$-$4$-$5$',
                '$6$-$8$-$10$, $9$-$12$-$15$, $12$-$16$-$20$',
              ],
              [
                '$5$-$12$-$13$',
                '$10$-$24$-$26$',
              ],
              [
                '$8$-$15$-$17$',
                'Less frequent but tested',
              ],
              [
                '$7$-$24$-$25$',
                'Rare but worth recognizing',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Solving for the Wrong Side',
            wrong: 'Hypotenuse $= 13$, one leg $= 5$. Student writes $5^2 + 13^2 = c^2$, getting $c = \\sqrt{194}$.',
            correction: 'The hypotenuse ($13$) goes alone on one side: $5^2 + b^2 = 13^2$ → $b^2 = 144$ → $b = 12$. The $5$-$12$-$13$ triple.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'A right triangle has legs $9$ and $12$. Find the hypotenuse.',
            steps: [
              {
                label: 'Recognize',
                content: '$9$-$12$-$?$ is the $3$-$4$-$5$ triple $\\times 3$, so the hypotenuse is $15$.',
              },
              {
                label: 'Verify',
                content: '$9^2 + 12^2 = 81 + 144 = 225 = 15^2$ ✓',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A right triangle has legs $(x)$ and $(x + 7)$ and hypotenuse $(x + 8)$. Find $x$.',
            answer: '$x^2 + (x + 7)^2 = (x + 8)^2$ → $x^2 + x^2 + 14x + 49 = x^2 + 16x + 64$ → $x^2 - 2x - 15 = 0$ → $(x - 5)(x + 3) = 0$. Since $x > 0$, $x = 5$. (Legs $5$ and $12$, hypotenuse $13$.)',
          },
        ],
      },
    },
  },

  18: {
    moduleId: 'triangles',
    title: 'Simple Pythagorean Theorem Example #1',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'The most direct Pythagorean problems give two sides and ask for the third.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Find Hypotenuse',
                formula: '$c = \\sqrt{a^2 + b^2}$',
                note: 'Add the squares of the legs',
              },
              {
                label: 'Find a Leg',
                formula: '$a = \\sqrt{c^2 - b^2}$',
                note: 'Subtract from hypotenuse squared',
              },
            ],
          },
          {
            type: 'text',
            content: 'The key decision is whether the unknown is a leg or the hypotenuse. Finding the hypotenuse means **adding** squares; finding a leg means **subtracting**.',
          },
          {
            type: 'trapCard',
            title: 'Adding When You Should Subtract',
            wrong: 'Hypotenuse $= 10$, leg $= 6$. Student writes $c = \\sqrt{10^2 + 6^2} = \\sqrt{136}$.',
            correction: 'When finding a missing **leg**, subtract: $a = \\sqrt{10^2 - 6^2} = \\sqrt{64} = 8$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A right triangle has a hypotenuse of $10$ and one leg of $6$. Find the other leg.',
            steps: [
              {
                label: 'Write the Pythagorean equation',
                content: '$a^2 + 6^2 = 10^2$.',
              },
              {
                label: 'Isolate the unknown',
                content: '$a^2 = 100 - 36 = 64$.',
              },
              {
                label: 'Solve',
                content: '$a = \\sqrt{64} = 8$. (This is the $6$-$8$-$10$ triple, a multiple of $3$-$4$-$5$.)',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A right triangle has a hypotenuse of $25$ and one leg of $7$. Find the other leg.',
            answer: '$b = \\sqrt{25^2 - 7^2} = \\sqrt{625 - 49} = \\sqrt{576} = 24$. (The $7$-$24$-$25$ triple.)',
          },
        ],
      },
    },
  },

  19: {
    moduleId: 'triangles',
    title: 'Simple Pythagorean Theorem Example #2',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'The distance formula on the coordinate plane is the Pythagorean theorem in disguise.',
        blocks: [
          {
            type: 'formula',
            label: 'Distance Formula',
            content: '$$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$',
          },
          {
            type: 'text',
            content: 'The horizontal distance $(x_2 - x_1)$ and the vertical distance $(y_2 - y_1)$ are the legs of a right triangle. The straight-line distance between the two points is the hypotenuse.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Square Before Adding',
            wrong: 'Points $(1, 2)$ and $(4, 6)$. Student writes $d = \\sqrt{3 + 4} = \\sqrt{7}$.',
            correction: 'Square first: $d = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$. ($3$-$4$-$5$ triple.)',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'What is the distance between the points $(1, 2)$ and $(4, 6)$?',
            steps: [
              {
                label: 'Find the horizontal and vertical distances',
                content: '$\\Delta x = 4 - 1 = 3$ and $\\Delta y = 6 - 2 = 4$.',
              },
              {
                label: 'Apply the distance formula',
                content: '$d = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16}$.',
              },
              {
                label: 'Simplify',
                content: '$d = \\sqrt{25} = 5$. (Recognize the $3$-$4$-$5$ triple.)',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Find the distance between $(2, 1)$ and $(7, 13)$.',
            answer: '$\\Delta x = 5$, $\\Delta y = 12$. Recognize $5$-$12$-$13$ triple: $d = 13$.',
          },
        ],
      },
    },
  },

  20: {
    moduleId: 'triangles',
    title: 'Simple Pythagorean Theorem Example #3',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Word problems involving ladders, ramps, or diagonals all reduce to right triangles.',
        blocks: [
          {
            type: 'formula',
            label: 'Pythagorean Theorem',
            content: '$$a^2 + b^2 = c^2$$',
          },
          {
            type: 'text',
            content: 'Real-world objects form right triangles naturally: a ladder against a wall, the diagonal of a rectangle, or a ship sailing north then east. Translate the scenario into legs and hypotenuse, then apply $a^2 + b^2 = c^2$.',
          },
          {
            type: 'keyInsight',
            content: 'The diagonal of a rectangle with sides $a$ and $b$ is $\\sqrt{a^2 + b^2}$ — the Pythagorean theorem applied directly.',
          },
          {
            type: 'trapCard',
            title: 'Adding Sides Instead of Using Pythagorean Theorem',
            wrong: 'A field is $30$ by $40$ meters. Student says the diagonal is $30 + 40 = 70$ meters.',
            correction: 'The diagonal is the hypotenuse: $\\sqrt{30^2 + 40^2} = \\sqrt{2500} = 50$. ($3$-$4$-$5$ triple $\\times 10$.)',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A rectangular field is $30$ meters wide and $40$ meters long. A runner wants to cut diagonally across the field. How far does the runner travel?',
            steps: [
              {
                label: 'Identify the right triangle',
                content: 'The diagonal of the rectangle is the hypotenuse, and the width and length are the legs.',
              },
              {
                label: 'Apply the Pythagorean theorem',
                content: '$d = \\sqrt{30^2 + 40^2} = \\sqrt{900 + 1600} = \\sqrt{2500}$.',
              },
              {
                label: 'Simplify',
                content: '$d = 50$ meters. (This is the $3$-$4$-$5$ triple scaled by $10$.)',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A ship sails $9$ km north, then $12$ km east. How far is it from its starting point?',
            answer: 'Legs $= 9$ and $12$, so distance $= 15$ km. ($3$-$4$-$5$ triple $\\times 3$.)',
          },
        ],
      },
    },
  },

  21: {
    moduleId: 'triangles',
    title: 'Complex Pythagorean Theorem Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Complex problems require applying the Pythagorean theorem twice or combining it with area and algebra.',
        blocks: [
          {
            type: 'formula',
            label: 'Altitude Sub-Triangle Equations',
            content: '$$x^2 + h^2 = a^2 \\qquad (b - x)^2 + h^2 = c^2$$',
          },
          {
            type: 'text',
            content: 'When an altitude is dropped in a non-right triangle, it splits the figure into two right triangles that share the altitude as a common leg. Apply the Pythagorean theorem to each sub-triangle and use the shared height to connect them.',
          },
          {
            type: 'keyInsight',
            content: 'Subtracting the two Pythagorean equations (one per sub-triangle) eliminates $h^2$ and produces a linear equation in the base segments. This is the standard technique for altitude problems.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting the Base Constraint',
            wrong: 'Altitude splits base into $x$ and $y$. Student writes two equations but forgets $x + y = \\text{full base}$.',
            correction: 'Two Pythagorean equations plus $x + y = \\text{base}$ give three equations for three unknowns ($x$, $y$, $h$). All three are needed.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'In $\\triangle ABC$, $AB = 10$, $AC = 17$, and $BC = 21$. An altitude from $A$ meets $\\overline{BC}$ at point $D$. Find $AD$.',
            steps: [
              {
                label: 'Set up variables',
                content: 'Let $BD = x$, so $DC = 21 - x$, and let $AD = h$.',
              },
              {
                label: 'Write two Pythagorean equations',
                content: 'From $\\triangle ABD$: $x^2 + h^2 = 10^2 = 100$. From $\\triangle ACD$: $(21 - x)^2 + h^2 = 17^2 = 289$.',
              },
              {
                label: 'Subtract to eliminate h',
                content: '$(21 - x)^2 - x^2 = 189$. Expanding: $441 - 42x + x^2 - x^2 = 189$, so $441 - 42x = 189$.',
              },
              {
                label: 'Solve for x, then h',
                content: '$42x = 252$, so $x = 6$. Then $h = \\sqrt{100 - 36} = \\sqrt{64} = 8$.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'In $\\triangle ABC$, $AB = 13$, $BC = 14$, $AC = 15$. An altitude from $A$ meets $\\overline{BC}$ at $D$. Find $AD$.',
            answer: 'Let $BD = x$, $DC = 14 - x$, $AD = h$. From $\\triangle ABD$: $x^2 + h^2 = 169$. From $\\triangle ACD$: $(14 - x)^2 + h^2 = 225$. Subtract: $196 - 28x = 56$ → $x = 5$. Then $h = \\sqrt{169 - 25} = 12$.',
          },
        ],
      },
    },
  },

  22: {
    moduleId: 'triangles',
    title: 'Introduction to Trigonometry (SOH CAH TOA)',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Sine, cosine, and tangent relate an acute angle in a right triangle to ratios of its sides.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'SOH',
                formula: '$\\sin \\theta = \\frac{\\text{Opposite}}{\\text{Hypotenuse}}$',
                note: 'Sine = Opposite / Hypotenuse',
              },
              {
                label: 'CAH',
                formula: '$\\cos \\theta = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}}$',
                note: 'Cosine = Adjacent / Hypotenuse',
              },
              {
                label: 'TOA',
                formula: '$\\tan \\theta = \\frac{\\text{Opposite}}{\\text{Adjacent}}$',
                note: 'Tangent = Opposite / Adjacent',
              },
            ],
          },
          {
            type: 'text',
            content: 'For an acute angle $\\theta$ in a right triangle, the three basic trig ratios compare pairs of sides. The **opposite** side is across from $\\theta$, the **adjacent** side is next to $\\theta$ (not the hypotenuse), and the **hypotenuse** is opposite the $90°$ angle. The mnemonic **SOH CAH TOA** tells you which sides to pair.',
          },
          {
            type: 'keyInsight',
            content: 'Complementary angle identity: $\\sin \\theta = \\cos(90° - \\theta)$. The opposite side for one acute angle is the adjacent side for the other, so sine and cosine swap between complementary angles.',
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Opposite and Adjacent Change with the Angle',
            content: '"Opposite" and "adjacent" are defined **relative to the angle in question**. The hypotenuse stays the same, but the other two labels swap when you switch to the other acute angle.',
          },
          {
            type: 'trapCard',
            title: 'Labeling Sides from the Wrong Angle',
            wrong: 'Question asks for $\\sin P$. Student labels "opposite" and "adjacent" from the right angle instead of from angle $P$.',
            correction: 'Opposite and adjacent are always relative to the angle in the question ($P$). The right angle only tells you where the hypotenuse is (across from it).',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'steps',
            title: 'Finding a Trig Ratio',
            items: [
              'Identify the angle $\\theta$ in question',
              'Label the three sides relative to $\\theta$: Opposite (across), Adjacent (next to, not hypotenuse), Hypotenuse (opposite $90°$)',
              'Choose SOH, CAH, or TOA based on which ratio is asked',
              'Write the ratio as a fraction and simplify',
            ],
          },
          {
            type: 'steps',
            title: 'Finding a Trig Ratio',
            items: [
              'Identify the angle $\\theta$ in question',
              'Label the three sides relative to $\\theta$: Opposite (across), Adjacent (next to, not hypotenuse), Hypotenuse (opposite $90°$)',
              'Choose SOH, CAH, or TOA based on which ratio is asked',
              'Write the ratio as a fraction and simplify',
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'In right $\\triangle PQR$ with the right angle at $Q$, $PQ = 5$ and $PR = 13$. Find $\\sin P$ and $\\cos P$.',
            answer: '$QR = \\sqrt{13^2 - 5^2} = 12$. Relative to $P$: Opposite $= QR = 12$, Adjacent $= PQ = 5$, Hypotenuse $= PR = 13$. So $\\sin P = \\frac{12}{13}$ and $\\cos P = \\frac{5}{13}$.',
          },
        ],
      },
    },
  },

  23: {
    moduleId: 'triangles',
    title: 'Simple Trigonometric Ratios Example #1',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Computing a trig ratio from given side lengths requires correctly identifying opposite, adjacent, and hypotenuse.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'SOH',
                formula: '$\\sin \\theta = \\frac{O}{H}$',
                note: 'Opposite over Hypotenuse',
              },
              {
                label: 'CAH',
                formula: '$\\cos \\theta = \\frac{A}{H}$',
                note: 'Adjacent over Hypotenuse',
              },
              {
                label: 'TOA',
                formula: '$\\tan \\theta = \\frac{O}{A}$',
                note: 'Opposite over Adjacent',
              },
            ],
          },
          {
            type: 'text',
            content: 'When all three sides are given, you can compute any ratio directly. When only two sides are given, use the Pythagorean theorem to find the third before computing the ratio.',
          },
          {
            type: 'trapCard',
            title: 'Referencing the Wrong Angle',
            wrong: 'Question asks for $\\sin A$, but student computes $\\sin B$ by labeling sides relative to angle $B$ instead.',
            correction: 'Double-check which angle the question specifies. Re-label O and A relative to that specific angle before forming the ratio.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'In right $\\triangle ABC$ with the right angle at $C$, $AC = 8$, $BC = 15$, and $AB = 17$. Find $\\sin A$, $\\cos A$, and $\\tan A$.',
            steps: [
              {
                label: 'Identify sides relative to angle A',
                content: 'Opposite to $A$ is $BC = 15$. Adjacent to $A$ is $AC = 8$. Hypotenuse is $AB = 17$.',
              },
              {
                label: 'Compute sin A',
                content: '$\\sin A = \\frac{\\text{Opposite}}{\\text{Hypotenuse}} = \\frac{15}{17}$.',
              },
              {
                label: 'Compute cos A',
                content: '$\\cos A = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}} = \\frac{8}{17}$.',
              },
              {
                label: 'Compute tan A',
                content: '$\\tan A = \\frac{\\text{Opposite}}{\\text{Adjacent}} = \\frac{15}{8}$.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'In right $\\triangle ABC$ with right angle at $C$, $AC = 3$, $BC = 4$, $AB = 5$. Find $\\tan B$.',
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
      learn: {
        title: 'Learn',
        summary: 'When a trig value and one side are given, set up an equation and solve for the unknown side.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Sine',
                formula: '$\\sin\\theta = \\frac{\\text{opposite}}{\\text{hypotenuse}}$',
                note: 'SOH',
              },
              {
                label: 'Cosine',
                formula: '$\\cos\\theta = \\frac{\\text{adjacent}}{\\text{hypotenuse}}$',
                note: 'CAH',
              },
              {
                label: 'Tangent',
                formula: '$\\tan\\theta = \\frac{\\text{opposite}}{\\text{adjacent}}$',
                note: 'TOA',
              },
            ],
          },
          {
            type: 'text',
            content: 'If $\\sin 30° = \\frac{x}{10}$, then $x = 10 \\sin 30° = 10 \\times 0.5 = 5$. The SAT reference sheet provides special-angle values; for other angles, the numeric value is given in the problem.',
          },
          {
            type: 'keyInsight',
            content: 'Your job is setting up the equation correctly — identify the right ratio and place the known and unknown sides in the right positions. The computation itself is straightforward.',
          },
          {
            type: 'trapCard',
            title: 'Multiplying When Division Is Needed',
            wrong: '$\\cos 60° = \\frac{x}{20}$. Student writes $x = \\frac{\\cos 60°}{20} = 0.025$.',
            correction: 'Cross-multiply: $x = 20 \\cos 60° = 20 \\times 0.5 = 10$. The unknown is in the numerator, so multiply the denominator by the trig value.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'In a right triangle, the hypotenuse is $26$ and one acute angle is $30°$. Find the length of the side adjacent to the $30°$ angle.',
            steps: [
              {
                label: 'Choose the right ratio',
                content: 'We know the hypotenuse and want the adjacent side, so use cosine: $\\cos 30° = \\frac{\\text{Adj}}{\\text{Hyp}}$.',
              },
              {
                label: 'Substitute known values',
                content: '$\\cos 30° = \\frac{x}{26}$. From the reference sheet, $\\cos 30° = \\frac{\\sqrt{3}}{2}$.',
              },
              {
                label: 'Solve for x',
                content: '$x = 26 \\times \\frac{\\sqrt{3}}{2} = 13\\sqrt{3}$.',
              },
              {
                label: 'Trap check',
                content: 'A common mistake is dividing instead of multiplying: writing $x = \\frac{\\cos 30°}{26}$. Since the unknown is in the numerator, you multiply the hypotenuse by the trig value.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A right triangle has a hypotenuse of $20$ and one angle of $35°$. Find the opposite side. ($\\sin 35° \\approx 0.574$)',
            answer: '$\\sin 35° = \\frac{\\text{Opp}}{20}$ → $\\text{Opp} = 20 \\times 0.574 = 11.48$.',
          },
        ],
      },
    },
  },

  25: {
    moduleId: 'triangles',
    title: 'Simple Trigonometric Ratios Example #3',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'The complementary identity $\\sin \\theta = \\cos(90° - \\theta)$ is one of the most directly tested trig facts on the SAT.',
        blocks: [
          {
            type: 'formula',
            label: 'Complementary Identity',
            content: '$$\\sin \\theta = \\cos(90° - \\theta) \\qquad \\cos \\theta = \\sin(90° - \\theta)$$',
          },
          {
            type: 'text',
            content: 'In a right triangle, the two acute angles are complementary ($\\alpha + \\beta = 90°$). The side opposite $\\alpha$ is adjacent to $\\beta$, which is why $\\sin \\alpha = \\cos \\beta$.',
          },
          {
            type: 'trapCard',
            title: 'Setting $x = y$ Instead of $x + y = 90$',
            wrong: '$\\sin 25° = \\cos x°$. Student writes $x = 25$ because "the values are equal so the angles must be equal."',
            correction: '$\\sin 25° = \\cos(90° - 25°) = \\cos 65°$. The correct answer is $x = 65$, not $25$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'If $\\sin(4x - 10)° = \\cos(2x + 4)°$, what is the value of $x$?',
            steps: [
              {
                label: 'Recall the complementary identity',
                content: '$\\sin \\theta = \\cos(90° - \\theta)$. So $\\sin A = \\cos B$ when $A + B = 90°$.',
              },
              {
                label: 'Set up the equation',
                content: '$(4x - 10) + (2x + 4) = 90$.',
              },
              {
                label: 'Solve',
                content: '$6x - 6 = 90$ gives $6x = 96$, so $x = 16$.',
              },
              {
                label: 'Trap check',
                content: 'Do not set the two angle expressions equal ($4x - 10 = 2x + 4$). The identity requires the angles to be **complementary** (sum to $90°$), not equal.',
              },
              {
                label: 'Verify',
                content: '$\\sin(4(16) - 10)° = \\sin 54°$ and $\\cos(2(16) + 4)° = \\cos 36°$. Since $54° + 36° = 90°$, these are equal.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'If $\\sin(3x + 10)° = \\cos(2x - 5)°$, find $x$.',
            answer: '$(3x + 10) + (2x - 5) = 90$ → $5x + 5 = 90$ → $x = 17$. Check: $61° + 29° = 90°$ ✓.',
          },
        ],
      },
    },
  },

  26: {
    moduleId: 'triangles',
    title: 'Simple Trigonometric Ratios Example #4',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'When one trig ratio is given as a fraction, you can find any other ratio of the same angle by reconstructing the triangle.',
        blocks: [
          {
            type: 'formula',
            label: 'Pythagorean Reconstruction',
            content: '$$\\text{missing side} = \\sqrt{\\text{hyp}^2 - \\text{known side}^2}$$',
            note: 'Given $\\sin A = \\frac{O}{H}$, find adjacent $= \\sqrt{H^2 - O^2}$, then form the requested ratio.',
          },
          {
            type: 'text',
            content: 'If $\\sin A = \\frac{3}{5}$, then opposite $= 3$ and hypotenuse $= 5$ (or proportional values). Use the Pythagorean theorem to find adjacent $= 4$, then compute any ratio.',
          },
          {
            type: 'keyInsight',
            content: 'Recognizing Pythagorean triples in trig fractions saves time: $\\frac{3}{5}$ and $\\frac{4}{5}$ signal a $3$-$4$-$5$ triangle; $\\frac{5}{13}$ and $\\frac{12}{13}$ signal $5$-$12$-$13$.',
          },
          {
            type: 'trapCard',
            title: 'Inverting Instead of Finding Missing Side',
            wrong: '$\\sin A = \\frac{5}{13}$. Student writes $\\cos A = \\frac{13}{5}$ by flipping the fraction.',
            correction: 'Find the adjacent side: $\\sqrt{13^2 - 5^2} = 12$. Then $\\cos A = \\frac{12}{13}$, not $\\frac{13}{5}$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'If $\\sin B = \\frac{5}{13}$ and $B$ is an acute angle, what is $\\cos B$?',
            steps: [
              {
                label: 'Identify known sides',
                content: '$\\sin B = \\frac{\\text{Opposite}}{\\text{Hypotenuse}} = \\frac{5}{13}$, so Opposite $= 5$ and Hypotenuse $= 13$.',
              },
              {
                label: 'Recognize the Pythagorean triple',
                content: '$5$ and $13$ suggest a $5$-$12$-$13$ triple. Adjacent $= \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$.',
              },
              {
                label: 'Compute cos B',
                content: '$\\cos B = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}} = \\frac{12}{13}$.',
              },
              {
                label: 'Trap check',
                content: 'Do not flip the fraction to get $\\cos B = \\frac{13}{5}$. Cosine is still a ratio with the hypotenuse in the denominator — it must be less than $1$ for an acute angle.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'If $\\cos B = \\frac{8}{17}$, find $\\sin B$ and $\\tan B$.',
            answer: 'Adjacent $= 8$, Hypotenuse $= 17$. Opposite $= \\sqrt{17^2 - 8^2} = \\sqrt{225} = 15$. $\\sin B = \\frac{15}{17}$, $\\tan B = \\frac{15}{8}$.',
          },
        ],
      },
    },
  },

  27: {
    moduleId: 'triangles',
    title: 'Simple Trigonometric Ratios Example #5',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Angle of elevation and depression problems form right triangles with horizontal ground and a line of sight.',
        blocks: [
          {
            type: 'formula',
            label: 'Height from Elevation Angle',
            content: '$$h = d \\cdot \\tan\\theta$$',
            note: '$d$ = horizontal distance, $\\theta$ = angle of elevation, $h$ = vertical height.',
          },
          {
            type: 'text',
            content: 'The **angle of elevation** is measured from the horizontal **up** to the line of sight. The **angle of depression** is measured from the horizontal **down**. Both create right triangles where the horizontal distance is the adjacent side, the vertical distance is the opposite side, and the line of sight is the hypotenuse.',
          },
          {
            type: 'keyInsight',
            content: 'The angle of elevation from $A$ looking up at $B$ equals the angle of depression from $B$ looking down at $A$ (alternate interior angles with the horizontal).',
          },
          {
            type: 'trapCard',
            title: 'Measuring the Angle from the Vertical',
            wrong: 'Student places the elevation angle between the vertical (building) and the line of sight instead of between the horizontal and the line of sight.',
            correction: 'Elevation and depression are always measured from the **horizontal**. If the angle is from the vertical, it is the complement of the elevation angle.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'From a point on the ground $60$ meters from the base of a building, the angle of elevation to the roof is $30°$. What is the height of the building?',
            steps: [
              {
                label: 'Draw the right triangle',
                content: 'The horizontal distance ($60$ m) is the adjacent side, the building height ($h$) is the opposite side, and the angle of elevation ($30°$) is measured from the horizontal.',
              },
              {
                label: 'Choose the ratio',
                content: 'We know adjacent and want opposite, so use tangent: $\\tan 30° = \\frac{h}{60}$.',
              },
              {
                label: 'Solve',
                content: '$h = 60 \\times \\tan 30° = 60 \\times \\frac{\\sqrt{3}}{3} = \\frac{60\\sqrt{3}}{3} = 20\\sqrt{3} \\approx 34.6$ meters.',
              },
              {
                label: 'Trap check',
                content: 'The elevation angle is measured from the **horizontal**, not the vertical. If you mistakenly measured from the vertical, you would use $\\tan 60°$ and get $60\\sqrt{3} \\approx 103.9$ m — a building taller than the distance to it, which should signal an error.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'From $50$ m away from a building, the angle of elevation to the top is $60°$. Find the height. ($\\tan 60° = \\sqrt{3} \\approx 1.732$)',
            answer: '$\\tan 60° = \\frac{h}{50}$ → $h = 50\\sqrt{3} \\approx 86.6$ m.',
          },
        ],
      },
    },
  },

  28: {
    moduleId: 'triangles',
    title: 'Complex Trigonometric Ratios Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Complex trig problems combine ratios with area formulas, the Pythagorean identity, or multi-shape diagrams.',
        blocks: [
          {
            type: 'formula',
            label: 'Pythagorean Identity',
            content: '$$\\sin^2 \\theta + \\cos^2 \\theta = 1$$',
          },
          {
            type: 'text',
            content: 'Some SAT problems embed trig inside a larger problem — using trig to find a height, then computing area. Others use the Pythagorean identity: if $\\sin \\theta$ is given, then $\\cos \\theta = \\sqrt{1 - \\sin^2 \\theta}$ (for acute $\\theta$).',
          },
          {
            type: 'keyInsight',
            content: 'The identity $\\tan \\theta = \\frac{\\sin \\theta}{\\cos \\theta}$ converts between all three ratios algebraically, without drawing a triangle.',
          },
          {
            type: 'trapCard',
            title: 'Dropping the Squares from the Identity',
            wrong: 'Student writes $\\sin \\theta + \\cos \\theta = 1$ and solves as if it were a linear equation.',
            correction: 'The Pythagorean identity requires **squares**: $\\sin^2 \\theta + \\cos^2 \\theta = 1$. Without squaring, $\\sin \\theta + \\cos \\theta \\neq 1$ in general.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'In a right triangle, $\\sin \\theta = \\frac{3}{5}$ where $\\theta$ is one of the acute angles. If the hypotenuse is $20$, what is the area of the triangle?',
            steps: [
              {
                label: 'Find the opposite side',
                content: '$\\sin \\theta = \\frac{\\text{Opp}}{\\text{Hyp}} = \\frac{3}{5}$. With hypotenuse $= 20$: Opposite $= 20 \\times \\frac{3}{5} = 12$.',
              },
              {
                label: 'Find the adjacent side',
                content: 'Using the Pythagorean identity: $\\cos \\theta = \\sqrt{1 - \\sin^2 \\theta} = \\sqrt{1 - \\frac{9}{25}} = \\sqrt{\\frac{16}{25}} = \\frac{4}{5}$. So Adjacent $= 20 \\times \\frac{4}{5} = 16$.',
              },
              {
                label: 'Trap check',
                content: 'Do not write $\\sin \\theta + \\cos \\theta = 1$. The identity uses **squares**: $\\sin^2 \\theta + \\cos^2 \\theta = 1$. Also, the area formula uses the two legs, not the hypotenuse.',
              },
              {
                label: 'Compute the area',
                content: '$A = \\frac{1}{2} \\times 12 \\times 16 = 96$.',
              },
              {
                label: 'Verify with triple',
                content: 'The sides are $12$, $16$, $20$ — the $3$-$4$-$5$ triple scaled by $4$. Check: $12^2 + 16^2 = 144 + 256 = 400 = 20^2$.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'If $\\sin \\theta = \\frac{3}{5}$, find $\\cos \\theta$ and $\\tan \\theta$ using identities.',
            answer: '$\\cos \\theta = \\sqrt{1 - \\frac{9}{25}} = \\sqrt{\\frac{16}{25}} = \\frac{4}{5}$. $\\tan \\theta = \\frac{\\sin \\theta}{\\cos \\theta} = \\frac{3/5}{4/5} = \\frac{3}{4}$.',
          },
        ],
      },
    },
  },

  29: {
    moduleId: 'triangles',
    title: 'The 45-45-90 Triangle',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'A 45-45-90 triangle is an isosceles right triangle with a fixed side ratio.',
        blocks: [
          {
            type: 'formula',
            label: 'Side Ratio',
            content: '$$\\text{leg} : \\text{leg} : \\text{hypotenuse} = 1 : 1 : \\sqrt{2}$$',
          },
          {
            type: 'text',
            content: 'A **45-45-90 triangle** has angles $45°$, $45°$, and $90°$. Because two angles are equal, the two legs are also equal. The hypotenuse is always $\\sqrt{2}$ times a leg. This triangle appears whenever a square is cut along its diagonal.',
          },
          {
            type: 'keyInsight',
            content: `A square's diagonal splits it into two 45-45-90 triangles. The diagonal of a square with side $s$ is $s\sqrt{2}$, and working backward, the side of a square with diagonal $d$ is $\frac{d\sqrt{2}}{2}$.`,
          },
          {
            type: 'table',
            headers: [
              'Given',
              'Find',
            ],
            rows: [
              [
                'Leg $= x$',
                'Hypotenuse $= x\\sqrt{2}$',
              ],
              [
                'Hypotenuse $= h$',
                'Leg $= \\frac{h}{\\sqrt{2}} = \\frac{h\\sqrt{2}}{2}$',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Multiplying by $\\sqrt{2}$ in the Wrong Direction',
            wrong: 'Hypotenuse $= 8$. Student writes leg $= 8\\sqrt{2} \\approx 11.3$, which is larger than the hypotenuse.',
            correction: 'Leg → hypotenuse: **multiply** by $\\sqrt{2}$. Hypotenuse → leg: **divide** by $\\sqrt{2}$. Leg $= \\frac{8}{\\sqrt{2}} = 4\\sqrt{2} \\approx 5.66$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A right isosceles triangle has a hypotenuse of $8$. What is the length of each leg?',
            steps: [
              {
                label: 'Identify the triangle type',
                content: 'A right isosceles triangle is a 45-45-90 triangle, with sides in the ratio $x : x : x\\sqrt{2}$.',
              },
              {
                label: 'Set up the equation',
                content: 'Hypotenuse $= x\\sqrt{2} = 8$, so $x = \\frac{8}{\\sqrt{2}}$.',
              },
              {
                label: 'Simplify',
                content: '$x = \\frac{8}{\\sqrt{2}} \\times \\frac{\\sqrt{2}}{\\sqrt{2}} = \\frac{8\\sqrt{2}}{2} = 4\\sqrt{2}$.',
              },
              {
                label: 'Trap check',
                content: 'Do not multiply the hypotenuse by $\\sqrt{2}$ — that gives $8\\sqrt{2} \\approx 11.3$, which is larger than the hypotenuse. Going from hypotenuse to leg, you **divide** by $\\sqrt{2}$.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A 45-45-90 triangle has a hypotenuse of $6\\sqrt{2}$. Find the leg length.',
            answer: 'Leg $= \\frac{6\\sqrt{2}}{\\sqrt{2}} = 6$.',
          },
        ],
      },
    },
  },

  30: {
    moduleId: 'triangles',
    title: 'Simple 45-45-90 Triangle Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Apply the $1:1:\\sqrt{2}$ ratio directly when one measurement of a 45-45-90 triangle is given.',
        blocks: [
          {
            type: 'formula',
            label: '45-45-90 Ratio',
            content: '$$\\text{leg} : \\text{leg} : \\text{hypotenuse} = x : x : x\\sqrt{2}$$',
          },
          {
            type: 'text',
            content: 'If the leg is $x$, the hypotenuse is $x\\sqrt{2}$. If the hypotenuse is given, divide by $\\sqrt{2}$ (or equivalently multiply by $\\frac{\\sqrt{2}}{2}$) to find each leg.',
          },
          {
            type: 'trapCard',
            title: 'Saying Both Legs Equal the Hypotenuse',
            wrong: 'Hypotenuse $= 6\\sqrt{2}$. Student writes both legs are $6\\sqrt{2}$ since "isosceles means all sides equal."',
            correction: 'Isosceles means the two **legs** are equal, not that they equal the hypotenuse. Legs $= \\frac{6\\sqrt{2}}{\\sqrt{2}} = 6$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A square has a diagonal of length $12$. What is the perimeter of the square?',
            steps: [
              {
                label: 'Connect to a 45-45-90 triangle',
                content: 'A square\'s diagonal divides it into two 45-45-90 triangles. The diagonal is the hypotenuse and each side of the square is a leg.',
              },
              {
                label: 'Apply the ratio',
                content: 'In a 45-45-90 triangle: hypotenuse $= x\\sqrt{2}$. So $x\\sqrt{2} = 12$, giving $x = \\frac{12}{\\sqrt{2}} = \\frac{12\\sqrt{2}}{2} = 6\\sqrt{2}$.',
              },
              {
                label: 'Trap check',
                content: 'A common error is saying both legs equal the hypotenuse because the triangle is isosceles. Isosceles means the two **legs** are equal to each other, not equal to the hypotenuse.',
              },
              {
                label: 'Find the perimeter',
                content: '$P = 4 \\times 6\\sqrt{2} = 24\\sqrt{2}$.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A square has a diagonal of $14\\sqrt{2}$. What is the side length?',
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
      learn: {
        title: 'Learn',
        summary: 'Complex 45-45-90 problems combine the ratio with area, perimeter, or multi-shape geometry.',
        blocks: [
          {
            type: 'formula',
            label: 'Area of a 45-45-90 Triangle',
            content: '$$A = \\frac{1}{2}x^2 \\quad \\text{where } x \\text{ is the leg length}$$',
          },
          {
            type: 'text',
            content: 'Since both legs are $x$, the area simplifies to $\\frac{1}{2}x \\cdot x = \\frac{1}{2}x^2$. The perimeter is $x + x + x\\sqrt{2} = x(2 + \\sqrt{2})$. If area is given, solve $\\frac{1}{2}x^2 = A$ for $x$ first.',
          },
          {
            type: 'trapCard',
            title: 'Stopping at $x^2$ Without the Square Root',
            wrong: 'Area $= 18$. $\\frac{1}{2}x^2 = 18$ → $x^2 = 36$. Student writes leg $= 36$.',
            correction: '$x^2 = 36$ means $x = 6$, not $36$. Hypotenuse $= 6\\sqrt{2}$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'A 45-45-90 triangle has an area of $50$. What is the length of the hypotenuse?',
            steps: [
              {
                label: 'Set up the area equation',
                content: 'Both legs of a 45-45-90 triangle equal $x$, so $A = \\frac{1}{2}x \\cdot x = \\frac{1}{2}x^2$.',
              },
              {
                label: 'Solve for the leg',
                content: '$\\frac{1}{2}x^2 = 50$, so $x^2 = 100$ and $x = 10$.',
              },
              {
                label: 'Trap check',
                content: 'Do not stop at $x^2 = 100$ and report the leg as $100$. You must take the square root: $x = \\sqrt{100} = 10$.',
              },
              {
                label: 'Find the hypotenuse',
                content: 'Hypotenuse $= x\\sqrt{2} = 10\\sqrt{2}$.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A 45-45-90 triangle has an area of $50$. Find the hypotenuse.',
            answer: '$\\frac{1}{2}x^2 = 50$ → $x^2 = 100$ → $x = 10$. Hypotenuse $= 10\\sqrt{2}$.',
          },
        ],
      },
    },
  },

  32: {
    moduleId: 'triangles',
    title: 'The 30-60-90 Triangle',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'A 30-60-90 triangle has a fixed side ratio — knowing any one side determines all three.',
        blocks: [
          {
            type: 'formula',
            label: 'Side Ratio',
            content: '$$\\text{short leg} : \\text{long leg} : \\text{hypotenuse} = 1 : \\sqrt{3} : 2$$',
          },
          {
            type: 'text',
            content: 'A **30-60-90 triangle** has angles $30°$, $60°$, and $90°$. Its sides are always in the ratio $1 : \\sqrt{3} : 2$: the short leg (opposite $30°$), the long leg (opposite $60°$), and the hypotenuse (opposite $90°$). This triangle appears whenever an equilateral triangle is split by an altitude.',
          },
          {
            type: 'keyInsight',
            content: 'An equilateral triangle with side $s$ and an altitude drawn creates two 30-60-90 triangles. The hypotenuse is $s$, the short leg is $\\frac{s}{2}$, and the altitude (long leg) is $\\frac{s\\sqrt{3}}{2}$.',
          },
          {
            type: 'table',
            headers: [
              'If You Know...',
              'Then...',
            ],
            rows: [
              [
                'Short leg $= s$',
                'Long leg $= s\\sqrt{3}$, Hypotenuse $= 2s$',
              ],
              [
                'Hypotenuse $= h$',
                'Short leg $= \\frac{h}{2}$, Long leg $= \\frac{h\\sqrt{3}}{2}$',
              ],
              [
                'Long leg $= L$',
                'Short leg $= \\frac{L}{\\sqrt{3}} = \\frac{L\\sqrt{3}}{3}$, Hypotenuse $= \\frac{2L\\sqrt{3}}{3}$',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Swapping $\\sqrt{3}$ and $2$',
            wrong: 'Student assigns the hypotenuse as $\\sqrt{3}$ times the short leg, writing the ratio as $1 : 2 : \\sqrt{3}$.',
            correction: 'The hypotenuse is always the integer ($2$). $\\sqrt{3}$ goes on the **long leg** (opposite $60°$). Correct ratio: $1 : \\sqrt{3} : 2$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'In a 30-60-90 triangle, the hypotenuse is $18$. Find the lengths of both legs.',
            steps: [
              {
                label: 'Recall the 30-60-90 ratio',
                content: 'Short leg $:$ long leg $:$ hypotenuse $= x : x\\sqrt{3} : 2x$.',
              },
              {
                label: 'Find the short leg',
                content: 'Hypotenuse $= 2x = 18$, so $x = 9$. The short leg (opposite $30°$) is $9$.',
              },
              {
                label: 'Find the long leg',
                content: 'Long leg $= x\\sqrt{3} = 9\\sqrt{3}$ (opposite $60°$).',
              },
              {
                label: 'Trap check',
                content: 'Do not confuse $\\sqrt{3}$ and $2$ in the ratio. The hypotenuse gets the factor of $2$, not $\\sqrt{3}$. Writing hypotenuse $= x\\sqrt{3}$ would give wrong side lengths.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A 30-60-90 triangle has a long leg of $9\\sqrt{3}$. Find the short leg and hypotenuse.',
            answer: 'Short leg $= \\frac{9\\sqrt{3}}{\\sqrt{3}} = 9$. Hypotenuse $= 2 \\times 9 = 18$.',
          },
        ],
      },
    },
  },

  33: {
    moduleId: 'triangles',
    title: 'Simple 30-60-90 Triangle Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Find the short leg first — all other sides of a 30-60-90 triangle follow from it.',
        blocks: [
          {
            type: 'formula',
            label: '30-60-90 Ratio',
            content: '$$\\text{short leg} : \\text{long leg} : \\text{hypotenuse} = x : x\\sqrt{3} : 2x$$',
          },
          {
            type: 'text',
            content: 'The short leg is the anchor. If given the hypotenuse, halve it to get the short leg. If given the long leg, divide by $\\sqrt{3}$. Once you have the short leg, multiply by $\\sqrt{3}$ for the long leg and by $2$ for the hypotenuse.',
          },
          {
            type: 'trapCard',
            title: 'Multiplying the Long Leg by $\\sqrt{3}$ to Get the Hypotenuse',
            wrong: 'Long leg $= 5\\sqrt{3}$. Student writes hypotenuse $= 5\\sqrt{3} \\times \\sqrt{3} = 15$.',
            correction: 'That yields a value larger than possible. From the long leg, divide by $\\sqrt{3}$ first: short leg $= 5$. Then hypotenuse $= 2 \\times 5 = 10$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'In a 30-60-90 triangle, the longer leg is $6\\sqrt{3}$. Find the shorter leg and the hypotenuse.',
            steps: [
              {
                label: 'Recall the ratio',
                content: 'Short leg $:$ long leg $:$ hypotenuse $= x : x\\sqrt{3} : 2x$.',
              },
              {
                label: 'Find the short leg from the long leg',
                content: 'Long leg $= x\\sqrt{3} = 6\\sqrt{3}$, so $x = 6$. The short leg is $6$.',
              },
              {
                label: 'Find the hypotenuse',
                content: 'Hypotenuse $= 2x = 2(6) = 12$.',
              },
              {
                label: 'Trap check',
                content: 'Do not multiply the long leg by $\\sqrt{3}$ to get the hypotenuse. That gives $6\\sqrt{3} \\times \\sqrt{3} = 18$, which is too large. Always find the short leg first, then double it for the hypotenuse.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'In a 30-60-90 triangle, the short leg is $9$. Find the long leg and hypotenuse.',
            answer: 'Long leg $= 9\\sqrt{3}$. Hypotenuse $= 18$.',
          },
        ],
      },
    },
  },

  34: {
    moduleId: 'triangles',
    title: 'Complex 30-60-90 Triangle Example #1',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'The area of an equilateral triangle with side $s$ is $\\frac{s^2\\sqrt{3}}{4}$, derived from the 30-60-90 ratio.',
        blocks: [
          {
            type: 'formula',
            label: 'Equilateral Triangle Area',
            content: '$$A = \\frac{s^2\\sqrt{3}}{4}$$',
          },
          {
            type: 'text',
            content: 'This formula comes from splitting the equilateral triangle with an altitude into two 30-60-90 triangles and using $h = \\frac{s\\sqrt{3}}{2}$ in $A = \\frac{1}{2}bh$. It is the fastest path to equilateral-triangle area on the SAT.',
          },
          {
            type: 'trapCard',
            title: 'Using the Side as the Height',
            wrong: 'Equilateral triangle with side $10$. Student writes area $= \\frac{1}{2}(10)(10) = 50$.',
            correction: 'The height is not the side. Height $= \\frac{10\\sqrt{3}}{2} = 5\\sqrt{3}$. Area $= \\frac{1}{2}(10)(5\\sqrt{3}) = 25\\sqrt{3}$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'An equilateral triangle has a perimeter of $36$. What is the area of the triangle?',
            steps: [
              {
                label: 'Find the side length',
                content: 'Perimeter $= 3s = 36$, so $s = 12$.',
              },
              {
                label: 'Find the height using 30-60-90',
                content: 'Drop an altitude to split the equilateral triangle into two 30-60-90 triangles. The short leg (half the base) is $\\frac{12}{2} = 6$, and the height (long leg) is $6\\sqrt{3}$.',
              },
              {
                label: 'Trap check',
                content: 'Do not use the side as the height. The height of an equilateral triangle is $\\frac{s\\sqrt{3}}{2}$, which is **shorter** than the side. Using $A = \\frac{1}{2}(12)(12) = 72$ is incorrect.',
              },
              {
                label: 'Compute the area',
                content: '$A = \\frac{1}{2}bh = \\frac{1}{2}(12)(6\\sqrt{3}) = 36\\sqrt{3}$. (Or directly: $A = \\frac{s^2\\sqrt{3}}{4} = \\frac{144\\sqrt{3}}{4} = 36\\sqrt{3}$.)',
              },
            ],
          },
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
      learn: {
        title: 'Learn',
        summary: 'Regular hexagons decompose into six equilateral triangles, making the 30-60-90 ratio essential for hexagon problems.',
        blocks: [
          {
            type: 'formula',
            label: 'Regular Hexagon Area',
            content: '$$A_{\\text{hex}} = 6 \\times \\frac{s^2\\sqrt{3}}{4} = \\frac{3s^2\\sqrt{3}}{2}$$',
          },
          {
            type: 'text',
            content: 'A **regular hexagon** with side $s$ is made of six equilateral triangles, each with side $s$. The distance from the center to a vertex equals $s$, and the distance from the center to the midpoint of a side (the apothem) is $\\frac{s\\sqrt{3}}{2}$.',
          },
          {
            type: 'keyInsight',
            content: 'Any measurement within a regular hexagon reduces to a 30-60-90 triangle inside one of its equilateral-triangle sectors. The apothem is the long leg, the half-side is the short leg, and the full side is the hypotenuse.',
          },
          {
            type: 'trapCard',
            title: 'Confusing the Apothem with the Side',
            wrong: 'Student uses the apothem (center to midpoint of side) as the side length in the area formula.',
            correction: 'The apothem $= \\frac{s\\sqrt{3}}{2}$, which is shorter than $s$. If given the apothem, solve for $s$ first: $s = \\frac{2 \\cdot \\text{apothem}}{\\sqrt{3}}$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'A regular hexagon has an apothem (center to the midpoint of a side) of $5\\sqrt{3}$. What is the area of the hexagon?',
            steps: [
              {
                label: 'Find the side length from the apothem',
                content: 'The apothem of a regular hexagon is $\\frac{s\\sqrt{3}}{2}$. Setting $\\frac{s\\sqrt{3}}{2} = 5\\sqrt{3}$ gives $s = 10$.',
              },
              {
                label: 'Trap check',
                content: 'Do not use the apothem directly as the side length. The apothem ($5\\sqrt{3} \\approx 8.66$) is shorter than the actual side ($10$). Plugging the apothem into the area formula without converting gives the wrong answer.',
              },
              {
                label: 'Find the area of one equilateral triangle',
                content: '$A_{\\text{triangle}} = \\frac{s^2\\sqrt{3}}{4} = \\frac{100\\sqrt{3}}{4} = 25\\sqrt{3}$.',
              },
              {
                label: 'Compute the hexagon area',
                content: '$A_{\\text{hex}} = 6 \\times 25\\sqrt{3} = 150\\sqrt{3}$. (Equivalently, $A = \\frac{3s^2\\sqrt{3}}{2} = \\frac{3(100)\\sqrt{3}}{2} = 150\\sqrt{3}$.)',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A regular hexagon has side length $4$. Find its area.',
            answer: '$A = \\frac{3(4)^2\\sqrt{3}}{2} = \\frac{48\\sqrt{3}}{2} = 24\\sqrt{3}$.',
          },
        ],
      },
    },
  },
};
