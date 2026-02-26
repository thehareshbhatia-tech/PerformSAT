export const radiansDegreesLessonTabs = {

  1: {
    moduleId: 'radians-degrees',
    title: 'Radians & Degrees',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Degrees and radians are two ways to measure angles. The SAT expects you to convert fluently between them using one key relationship.',
        blocks: [
          {
            type: 'text',
            content: 'A full circle is $360°$ in degrees or $2\\pi$ radians. Halfway around is $180°$ or $\\pi$ radians. This single equivalence powers every conversion:',
          },
          {
            type: 'formula',
            label: 'The Key Relationship',
            content: '$$180° = \\pi \\text{ radians}$$',
            note: 'Everything else derives from this.',
          },
          {
            type: 'formulaGrid',
            items: [
              { label: 'Degrees → Radians', formula: '$\\text{rad} = \\text{deg} \\times \\frac{\\pi}{180}$', note: 'Multiply by π/180' },
              { label: 'Radians → Degrees', formula: '$\\text{deg} = \\text{rad} \\times \\frac{180}{\\pi}$', note: 'Multiply by 180/π' },
            ],
          },
          {
            type: 'keyInsight',
            content: 'Think of the conversion factor as a **fraction equal to 1**: $\\frac{\\pi}{180°} = 1$ and $\\frac{180°}{\\pi} = 1$. You are just multiplying by $1$ in a form that cancels the unit you don\'t want.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'table',
            title: 'Key Angle Conversions (Memorize These)',
            headers: ['Degrees', 'Radians', 'Fraction of Circle'],
            rows: [
              ['$0°$', '$0$', 'None'],
              ['$30°$', '$\\frac{\\pi}{6}$', '$\\frac{1}{12}$'],
              ['$45°$', '$\\frac{\\pi}{4}$', '$\\frac{1}{8}$'],
              ['$60°$', '$\\frac{\\pi}{3}$', '$\\frac{1}{6}$'],
              ['$90°$', '$\\frac{\\pi}{2}$', '$\\frac{1}{4}$'],
              ['$120°$', '$\\frac{2\\pi}{3}$', '$\\frac{1}{3}$'],
              ['$180°$', '$\\pi$', '$\\frac{1}{2}$'],
              ['$270°$', '$\\frac{3\\pi}{2}$', '$\\frac{3}{4}$'],
              ['$360°$', '$2\\pi$', 'Full circle'],
            ],
          },
          {
            type: 'steps',
            title: 'Converting Any Angle',
            items: [
              'Identify the starting unit (degrees or radians)',
              'Multiply by the appropriate fraction: $\\frac{\\pi}{180}$ to go to radians, or $\\frac{180}{\\pi}$ to go to degrees',
              'Simplify — reduce the numerical fraction before multiplying by $\\pi$',
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
            problem: 'Convert $150°$ to radians.',
            steps: [
              { label: 'Set up', content: '$150 \\times \\frac{\\pi}{180}$' },
              { label: 'Simplify fraction', content: '$\\frac{150}{180} = \\frac{5}{6}$' },
              { label: 'Answer', content: '$\\frac{5\\pi}{6}$ radians' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Convert $\\frac{7\\pi}{4}$ radians to degrees.',
            steps: [
              { label: 'Set up', content: '$\\frac{7\\pi}{4} \\times \\frac{180}{\\pi}$' },
              { label: 'Cancel $\\pi$', content: '$\\frac{7}{4} \\times 180$' },
              { label: 'Compute', content: '$\\frac{7 \\times 180}{4} = \\frac{1260}{4} = 315$' },
              { label: 'Answer', content: '$315°$' },
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Multiplying by the Wrong Fraction',
            wrong: 'To convert $60°$ to radians, student computes $60 \\times \\frac{180}{\\pi}$, getting a huge number.',
            correction: 'Degrees → radians uses $\\frac{\\pi}{180}$, not $\\frac{180}{\\pi}$. Quick sanity check: radian measures are typically small numbers (often involving $\\pi$). If your answer is in the hundreds, you went the wrong way.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting $\\pi$ in the Answer',
            wrong: '$45° = \\frac{45}{180} = \\frac{1}{4}$ radians.',
            correction: '$45° = \\frac{45}{180} \\times \\pi = \\frac{\\pi}{4}$ radians. The $\\pi$ is part of the answer — don\'t drop it.',
          },
        ],
      },
    },
  },
};
