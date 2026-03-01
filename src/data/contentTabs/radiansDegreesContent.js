export const radiansDegreesContent = {
  moduleId: 'radians-degrees',
  title: 'Radians & Degrees',
  description: 'Master radian-degree conversions, arc length, sector area, and the unit circle for the Digital SAT.',
  _isModuleFallback: true,
  sections: {
    learn: {
      title: 'Learn',
      summary: 'Radians measure angles by arc-to-radius ratio; π rad = 180° bridges both systems; arc length s = rθ and sector area A = ½r²θ require radians.',
      blocks: [
        {
          type: 'formulaGrid',
          items: [
            {
              label: 'Degrees → Radians',
              formula: 'degrees $\\times$ (π / 180)',
              note: 'Multiply by π/180',
            },
            {
              label: 'Radians → Degrees',
              formula: 'radians $\\times$ (180 / π)',
              note: 'Multiply by 180/π',
            },
            {
              label: 'Arc Length',
              formula: '$s = r\\theta$',
              note: 'θ must be in radians',
            },
            {
              label: 'Sector Area',
              formula: '$A = ½r^2\\theta$',
              note: 'θ must be in radians',
            },
          ],
        },
        {
          type: 'text',
          content: 'A **radian** is the angle whose arc length equals the radius. One full revolution = **2π radians = 360°**. The single bridge between systems: **π radians = 180°**.',
        },
        {
          type: 'keyInsight',
          content: 'The formulas **s = rθ** and **A = ½r²θ** only work when θ is in radians. If the problem gives degrees, either convert first or use the proportion method: (θ/360) $\\times$ 2πr for arc length, (θ/360) $\\times$ πr² for sector area.',
        },
        {
          type: 'table',
          title: 'Must-Know Angle Conversions',
          headers: [
            'Degrees',
            'Radians',
            'Fraction of Circle',
          ],
          rows: [
            [
              '30°',
              'π/6',
              '1/12',
            ],
            [
              '45°',
              'π/4',
              '1/8',
            ],
            [
              '60°',
              'π/3',
              '1/6',
            ],
            [
              '90°',
              'π/2',
              '1/4',
            ],
            [
              '120°',
              '2π/3',
              '1/3',
            ],
            [
              '180°',
              'π',
              '1/2',
            ],
            [
              '270°',
              '3π/2',
              '3/4',
            ],
            [
              '360°',
              '2π',
              '1',
            ],
          ],
        },
        {
          type: 'trapCard',
          title: 'Degrees in Arc Length Formula',
          wrong: 'Plugs θ = 60 into s = rθ → s = 5 $\\times$ 60 = 300. Answer is wildly too large.',
          correction: 'Convert first: 60° = π/3. Then s = 5 $\\times$ π/3 = **5π/3 ≈ 5.24**. The formulas s = rθ and A = ½r²θ require radians. Use (θ/360)$\\times$2πr if you prefer to keep degrees.',
        },
      ],
    },
    practice: {
      title: 'Practice',
      blocks: [
        {
          type: 'example',
          difficulty: 'Medium',
          problem: 'A circle has radius 10 cm. A central angle of **2π/5 radians** intercepts an arc. What is the arc length?',
          steps: [
            {
              label: 'Identify',
              content: 'r = 10 cm, θ = 2π/5 rad. Need arc length s.',
            },
            {
              label: 'Apply',
              content: '**s = rθ** = 10 $\\times$ (2π/5) = 20π/5 = **4π cm**',
            },
            {
              label: 'Answer',
              content: '**4π cm** ≈ 12.57 cm. SAT prefers the exact form with π.',
            },
          ],
        },
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'Convert **300°** to radians.',
          answer: '300° $\\times$ π/180 = 300π/180 = **5π/3 radians**. Simplify by dividing numerator and denominator by 60.',
        },
      ],
    },
  },
};
