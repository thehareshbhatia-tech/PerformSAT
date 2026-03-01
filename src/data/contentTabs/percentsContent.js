export const percentsContent = {
  moduleId: 'percents',
  title: 'Percents & Percent Applications',
  description: 'Percent translation, percent change, successive percents, and repeated-percent models for the Digital SAT.',
  _isModuleFallback: true,
  sections: {
    learn: {
      title: 'Learn',
      summary: 'What percent means, the multiplier idea, successive changes, and the repeated-percent model.',
      blocks: [
        {
          type: 'formula',
          label: 'Fundamental Percent Equation',
          content: '$Part = Percent \\times Whole$',
          note: 'Equivalently: Part / Whole = Percent (as a decimal)',
        },
        {
          type: 'formulaGrid',
          items: [
            {
              label: 'Percent Increase',
              formula: '$New = Original \\times (1 + r)$',
              note: 'r = rate as decimal',
            },
            {
              label: 'Percent Decrease',
              formula: '$New = Original \\times (1 - r)$',
              note: 'r = rate as decimal',
            },
            {
              label: 'Percent Change',
              formula: '$(New - Old) / Old \\times 100%$',
              note: 'Always divide by original',
            },
            {
              label: 'Successive Changes',
              formula: '$Final = Original \\times m_1 \\times m_2 \\times …$',
              note: 'Multiply multipliers; never add percents',
            },
          ],
        },
        {
          type: 'formula',
          label: 'Repeated Percent Model',
          content: '$A(t) = A_0 \\cdot (1 \\pm r)^t$',
          note: 'Same rate r applied t times; compound interest is a special case',
        },
        {
          type: 'keyInsight',
          content: 'Every percent change is a single **multiplier**. +25% → $\\times 1.25$. -40% → $\\times 0.60$. Thinking in multipliers unifies increases, decreases, reversals, and chains into one operation.',
        },
        {
          type: 'trapCard',
          title: `Reverse Percent: Divide, Don't Subtract`,
          wrong: 'After a 20% discount the price is \\$64. Student adds 20% back: \\$64 + \\$12.80 = \\$76.80.',
          correction: 'Divide by the multiplier: \\$64 / 0.80 = **\\$80**. The 20% was taken off the original, not off \\$64. Reversing means undoing the multiplication.',
        },
      ],
    },
    practice: {
      title: 'Practice',
      blocks: [
        {
          type: 'example',
          difficulty: 'Medium',
          problem: 'After a 15% membership increase, a gym has 460 members. How many members did the gym have before the increase?',
          steps: [
            {
              label: 'Identify multiplier',
              content: '15% increase → $\\times 1.15$',
            },
            {
              label: 'Reverse it',
              content: 'Original = 460 / 1.15 = **400**',
            },
            {
              label: 'Verify',
              content: '400 $\\times$ 1.15 = 460 ✓',
            },
          ],
        },
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'After a 30% increase, a company has 910 employees. How many did it have before?',
          answer: 'Original $\\times$ 1.30 = 910 → Original = 910 / 1.30 = **700 employees**.',
        },
      ],
    },
  },
};
