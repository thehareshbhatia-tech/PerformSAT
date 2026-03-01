export const exponentsContent = {
  moduleId: 'exponents',
  title: 'Exponents & Exponential Functions',
  description: 'Exponent rules, rational exponents, radicals, and exponential growth/decay models for the Digital SAT.',
  _isModuleFallback: true,
  sections: {
    learn: {
      title: 'Learn',
      summary: 'Definitions and intuition for exponent rules, rational exponents, and exponential models.',
      blocks: [
        {
          type: 'formulaGrid',
          items: [
            {
              label: 'Product Rule',
              formula: '$a^m \\cdot a^n = a^{m+n}$',
              note: 'Same base → add exponents',
            },
            {
              label: 'Quotient Rule',
              formula: '$a^m / a^n = a^{m-n}$',
              note: 'Same base → subtract exponents',
            },
            {
              label: 'Power Rule',
              formula: '$(a^m)^n = a^{mn}$',
              note: 'Power of a power → multiply',
            },
            {
              label: 'Zero Exponent',
              formula: '$a^0 = 1$',
              note: 'Any nonzero base',
            },
            {
              label: 'Negative Exponent',
              formula: '$a^{-n} = 1/a^n$',
              note: 'Flip to denominator',
            },
            {
              label: 'Distribute to Factors',
              formula: '$(ab)^n = a^nb^n$',
              note: 'Only over multiplication, never addition',
            },
          ],
        },
        {
          type: 'formula',
          label: 'Rational Exponent ↔ Radical',
          content: '$a^{m/n} = \\sqrt[n]{a^m} = (\\sqrt[n]{a})^m$',
          note: 'Denominator = root index, numerator = power',
        },
        {
          type: 'formula',
          label: 'Exponential Model',
          content: '$f(x) = a \\cdot b^x$',
          note: 'a = initial value (when x = 0), b = growth/decay factor per period',
        },
        {
          type: 'keyInsight',
          content: 'The growth/decay **rate** is |b - 1|, not b itself. A factor of 1.07 means a 7% rate. College Board offers both 1.07 and 7% as answer choices — pick the one the question asks for.',
        },
        {
          type: 'table',
          title: 'Growth vs. Decay at a Glance',
          headers: [
            'Condition',
            'Behavior',
            'Example',
          ],
          rows: [
            [
              'b > 1',
              'Exponential growth',
              'f(x) = 100 · 1.05ˣ → 5% growth per period',
            ],
            [
              '0 < b < 1',
              'Exponential decay',
              'f(x) = 100 · 0.85ˣ → 15% decay per period',
            ],
          ],
        },
        {
          type: 'trapCard',
          title: 'Distributing Exponents Over Addition',
          wrong: '(x + y)² → x² + y². Or (2 + 3)² → 2² + 3² = 13.',
          correction: 'Exponents distribute over **multiplication** only: (xy)² = x²y². For addition: (x + y)² = x² + 2xy + y². (2 + 3)² = 25, not 13.',
        },
      ],
    },
    practice: {
      title: 'Practice',
      blocks: [
        {
          type: 'example',
          difficulty: 'Medium',
          problem: 'If 9^(x+1) = 27^x, what is the value of x?',
          steps: [
            {
              label: 'Rewrite with base 3',
              content: '9 = 3², 27 = 3³ → (3²)^(x+1) = (3³)^x',
            },
            {
              label: 'Power Rule',
              content: '3^(2x+2) = 3^(3x)',
            },
            {
              label: 'Set exponents equal',
              content: '2x + 2 = 3x → x = **2**',
            },
            {
              label: 'Verify',
              content: '9³ = 729, 27² = 729 ✓',
            },
          ],
        },
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'Simplify: (x⁴ · x⁻²) / x³',
          answer: 'Numerator: x^(4 + (-2)) = x². Divide: x² / x³ = x^(2-3) = x⁻¹ = **1/x**.',
        },
      ],
    },
  },
};
