export const circlesContent = {
  moduleId: 'circles',
  title: 'Circles',
  description: 'Master circle geometry — area, circumference, arc/sector formulas, the equation of a circle, completing the square, and tangent lines for the Digital SAT.',
  _isModuleFallback: true,
  sections: {
    learn: {
      title: 'Learn',
      summary: 'C = 2πr and A = πr²; arc length and sector area are proportional fractions of the whole; standard form (x-h)²+(y-k)²=r² encodes center and radius; completing the square converts general form; tangent ⊥ radius.',
      blocks: [
        {
          type: 'formulaGrid',
          items: [
            {
              label: 'Circumference',
              formula: '$C = 2\\pi r = \\pi d$',
              note: 'Distance around the circle',
            },
            {
              label: 'Area',
              formula: '$A = \\pi r^2$',
              note: 'Space enclosed by the circle',
            },
            {
              label: 'Arc Length',
              formula: '$s = (\\theta /360) \\times 2\\pi r$',
              note: 'Fraction of circumference; θ in degrees',
            },
            {
              label: 'Sector Area',
              formula: '$A = (\\theta /360) \\times \\pi r^2$',
              note: 'Fraction of total area; θ in degrees',
            },
          ],
        },
        {
          type: 'formula',
          label: 'Standard Form of a Circle',
          content: '$(x - h)^2 + (y - k)^2 = r^2$',
          note: 'Center = **(h, k)**, Radius = **r**. The signs inside the parentheses are **opposite** the actual coordinates.',
        },
        {
          type: 'keyInsight',
          content: 'Arc length and sector area share the **same fraction** θ/360. The arc is that fraction of circumference; the sector is that fraction of area. A tangent line is always **⊥ to the radius** at the point of contact.',
        },
        {
          type: 'trapCard',
          title: 'Radius vs. Diameter',
          wrong: '"Diameter 10." Student plugs 10 into A = πr² or arc = (θ/360) $\\times$ 2πr.',
          correction: 'Diameter 10 → **r = 5**. Area = π(25) = 25π. Arc uses r = 5. Halve the diameter before any formula. Same trap in "radius 6" vs "diameter 6" — read carefully.',
        },
      ],
    },
    practice: {
      title: 'Practice',
      blocks: [
        {
          type: 'example',
          difficulty: 'Medium',
          problem: 'Find the center and radius: **x² + y² + 6x - 2y - 6 = 0**.',
          steps: [
            {
              label: 'Group',
              content: '(x² + 6x) + (y² - 2y) = 6',
            },
            {
              label: 'Complete x',
              content: '(6/2)² = 9 → (x + 3)². Add 9 to right.',
            },
            {
              label: 'Complete y',
              content: '(-2/2)² = 1 → (y - 1)². Add 1 to right.',
            },
            {
              label: 'Result',
              content: '(x + 3)² + (y - 1)² = 16. Center **(-3, 1)**, radius **4**.',
            },
          ],
        },
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'A sector of a circle with radius 12 has a central angle of **150°**. What is the sector area?',
          answer: 'Fraction = 150/360 = 5/12. Area = (5/12) $\\times$ π(144) = **60π** ≈ 188.5 square units.',
        },
      ],
    },
  },
};
