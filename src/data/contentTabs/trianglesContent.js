export const trianglesContent = {
  moduleId: 'triangles',
  title: 'Triangles',
  description: 'Master triangle properties, the Pythagorean theorem, SOH CAH TOA, special right triangles, and similarity for the Digital SAT.',
  _isModuleFallback: true,
  sections: {
    learn: {
      title: 'Learn',
      summary: 'Interior angles sum to 180°; a² + b² = c² for right triangles; SOH CAH TOA defines trig ratios; 30-60-90 and 45-45-90 have fixed side ratios; similar triangles have proportional sides.',
      blocks: [
        {
          type: 'formulaGrid',
          items: [
            {
              label: 'Angle Sum',
              formula: '$A + B + C = 180°$',
              note: 'Every triangle, always',
            },
            {
              label: 'Pythagorean Theorem',
              formula: '$a^2 + b^2 = c^2$',
              note: 'c = hypotenuse (longest side)',
            },
            {
              label: 'Area',
              formula: '$A = ½ \\times base \\times height$',
              note: 'Height must be ⊥ to base',
            },
          ],
        },
        {
          type: 'formulaGrid',
          items: [
            {
              label: 'sin θ',
              formula: 'Opposite / Hypotenuse',
              note: 'SOH',
            },
            {
              label: 'cos θ',
              formula: 'Adjacent / Hypotenuse',
              note: 'CAH',
            },
            {
              label: 'tan θ',
              formula: 'Opposite / Adjacent',
              note: 'TOA',
            },
          ],
        },
        {
          type: 'text',
          content: 'Two triangles are **similar** if their corresponding angles are equal (AA is sufficient). Similar triangles have **proportional** corresponding sides: a₁/a₂ = b₁/b₂ = c₁/c₂ = scale factor k.',
        },
        {
          type: 'keyInsight',
          content: 'The SAT reference sheet provides special-triangle ratios, but looking them up costs 5–10 seconds each time. Memorize: **30-60-90 → x, x√3, 2x** and **45-45-90 → x, x, x√2**.',
        },
        {
          type: 'table',
          title: 'Special Right Triangle Ratios',
          headers: [
            'Triangle',
            'Side Ratios',
            'How It Arises',
          ],
          rows: [
            [
              '45-45-90',
              'x : x : x√2',
              'Isosceles right triangle; half a square diagonal',
            ],
            [
              '30-60-90',
              'x : x√3 : 2x',
              'Half an equilateral triangle',
            ],
          ],
        },
        {
          type: 'trapCard',
          title: 'Pythagorean on Non-Right Triangles',
          wrong: 'Triangle with sides 5, 7, 9. Student uses 5² + 7² = c² to find the "hypotenuse."',
          correction: 'a² + b² = c² applies **only to right triangles**. No right angle → no Pythagorean theorem. Use Law of Cosines (if given) or recognize the triangle is not right.',
        },
      ],
    },
    practice: {
      title: 'Practice',
      blocks: [
        {
          type: 'example',
          difficulty: 'Medium',
          problem: 'An equilateral triangle has perimeter 36. What is the length of its altitude?',
          steps: [
            {
              label: 'Side Length',
              content: 'Perimeter 36 $\\div$ 3 = side of **12**.',
            },
            {
              label: 'Recognize',
              content: 'Altitude splits into two 30-60-90 triangles. Hypotenuse = 12, short leg = 6.',
            },
            {
              label: 'Solve',
              content: '30-60-90 ratio: altitude = x√3 = **6√3 ≈ 10.39**.',
            },
          ],
        },
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'In a 30-60-90 triangle, the side opposite 60° is **10√3**. What is the hypotenuse?',
          answer: 'Side opposite 60° = x√3 = 10√3, so x = 10. Hypotenuse = 2x = **20**.',
        },
      ],
    },
  },
};
