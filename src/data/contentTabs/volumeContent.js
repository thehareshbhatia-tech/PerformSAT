export const volumeContent = {
  moduleId: 'volume',
  title: 'Volume',
  description: 'Master rectangular prism, cylinder, sphere, cone, and composite solid volume — every formula the SAT reference sheet gives you, and how to wield each one under pressure.',
  _isModuleFallback: true,
  sections: {
    learn: {
      title: 'Learn',
      summary: 'Volume formulas for six solids, the Base Area $\\times$ height pattern, and composite solid logic.',
      blocks: [
        {
          type: 'formulaGrid',
          items: [
            {
              label: 'Rectangular Prism',
              formula: '$V = lwh$',
              note: 'length $\\times$ width $\\times$ height',
            },
            {
              label: 'Cylinder',
              formula: '$V = \\pi r^2h$',
              note: 'circle base $\\times$ height',
            },
            {
              label: 'Sphere',
              formula: '$V = (4/3)\\pi r^3$',
              note: 'radius cubed, scaled by 4π/3',
            },
            {
              label: 'Cone',
              formula: '$V = (1/3)\\pi r^2h$',
              note: 'exactly ⅓ of its cylinder',
            },
            {
              label: 'Pyramid',
              formula: '$V = (1/3)Bh$',
              note: 'B = any polygon base area',
            },
          ],
        },
        {
          type: 'text',
          content: 'Every prism and cylinder obeys one principle: **V = (Base Area) $\\times$ height**. A cone is ⅓ of its matching cylinder. A sphere stands alone. The SAT reference sheet gives every formula — your job is matching shape to formula and substituting correctly.',
        },
        {
          type: 'text',
          content: 'A composite solid combines basic shapes. "Cylinder topped by a hemisphere" → add volumes. "Prism with a cylindrical hole" → subtract. Identify each piece, compute separately, then combine.',
        },
        {
          type: 'keyInsight',
          content: 'Cone : Cylinder : Sphere with same r and h = 2r → volume ratio **1 : 3 : 2**. This single relationship answers many SAT comparison questions without computation.',
        },
        {
          type: 'trapCard',
          title: 'Diameter vs. Radius',
          wrong: 'Sphere diameter = 10. Student plugs 10 into V = (4/3)πr³ → gets 4,189 cm³.',
          correction: 'r = 5. V = (4/3)π(125) = 500π/3 ≈ **523.6 cm³**. Halve the diameter before substituting. Circle r in scratch work before computing.',
        },
      ],
    },
    practice: {
      title: 'Practice',
      blocks: [
        {
          type: 'example',
          difficulty: 'Medium',
          problem: 'A sphere has volume 288π in³. What is the diameter of the sphere, in inches?',
          steps: [
            {
              label: 'Formula',
              content: 'V = (4/3)πr³',
            },
            {
              label: 'Substitute',
              content: '(4/3)πr³ = 288π → divide by π → (4/3)r³ = 288',
            },
            {
              label: 'Isolate r³',
              content: 'r³ = 288 $\\times$ (3/4) = **216**',
            },
            {
              label: 'Cube root',
              content: 'r = ∛216 = **6**',
            },
            {
              label: 'Answer',
              content: 'Diameter = 2r = **12 inches**. (Trap: giving 6 — that is the radius.)',
            },
          ],
        },
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'A cone has radius 5 cm and height 12 cm. What is its volume in terms of π?',
          answer: 'V = (1/3)π(25)(12) = (1/3)(300π) = **100π cm³**',
        },
      ],
    },
  },
};
