export const dimensionalAnalysisContent = {
  moduleId: 'dimensional-analysis',
  title: 'Dimensional Analysis',
  description: 'Master unit conversion chains, squared/cubic unit conversions, and rate conversions — among the most predictable free points on the Digital SAT.',
  _isModuleFallback: true,
  sections: {
    learn: {
      title: 'Learn',
      summary: 'The conversion-fraction principle, chain setup, squared/cubic exponent rules, and rate conversion logic.',
      blocks: [
        {
          type: 'formulaGrid',
          items: [
            {
              label: 'Linear',
              formula: '$\\text{new} = \\text{old} \\times k$',
              note: 'Length, distance',
            },
            {
              label: 'Area',
              formula: '$\\text{new} = \\text{old} \\times k^2$',
              note: 'Square the factor',
            },
            {
              label: 'Volume',
              formula: '$\\text{new} = \\text{old} \\times k^3$',
              note: 'Cube the factor',
            },
          ],
        },
        {
          type: 'text',
          content: 'Any equality (1 ft = 12 in) becomes two fractions that each equal 1: *12 in / 1 ft* or *1 ft / 12 in*. Multiplying by either does not change the quantity — only the unit. Choose whichever **cancels** the unit you want to eliminate.',
        },
        {
          type: 'keyInsight',
          content: 'Linear $\\times$ k, area $\\times$ k², volume $\\times$ k³. Rates have two units — convert numerator and denominator separately in the chain.',
        },
        {
          type: 'trapCard',
          title: 'Inverted Conversion Fraction',
          wrong: '3 km $\\times$ (1 km / 1000 m) = 0.003. Dimensionally nonsensical.',
          correction: '3 km $\\times$ (**1000 m / 1 km**) = 3,000 m. The unit you want to cancel must be in the opposite position. Sanity check: converting to smaller units → bigger number.',
        },
      ],
    },
    practice: {
      title: 'Practice',
      blocks: [
        {
          type: 'example',
          difficulty: 'Medium',
          problem: 'A garden is 18 ft $\\times$ 24 ft. Topsoil is sold by the square yard. How many square yards are needed? (1 yd = 3 ft)',
          steps: [
            {
              label: 'Area',
              content: '18 $\\times$ 24 = **432 ft²**',
            },
            {
              label: 'Convert',
              content: '1 yd = 3 ft → 1 yd² = 9 ft². So: 432 / 9 = **48 yd²**',
            },
            {
              label: 'Check',
              content: '48 is less than 432 — correct direction (bigger unit → smaller number).',
            },
          ],
        },
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'Convert 90 km/hr to m/s. (1 km = 1,000 m, 1 hr = 3,600 s)',
          answer: '90 $\\times$ 1000 / 3600 = 90,000 / 3,600 = **25 m/s**',
        },
      ],
    },
  },
};
