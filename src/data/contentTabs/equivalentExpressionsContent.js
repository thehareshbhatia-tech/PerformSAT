export const equivalentExpressionsContent = {
  moduleId: 'equivalent-expressions',
  title: 'Equivalent Expressions',
  description: 'Distributing, factoring, combining like terms, recognizing equivalent forms, and DESMOS verification for the Digital SAT.',
  _isModuleFallback: true,
  sections: {
    learn: {
      title: 'Learn',
      summary: 'What equivalence means, the distributive property, like terms, factoring patterns, and special products.',
      blocks: [
        {
          type: 'formulaGrid',
          items: [
            {
              label: 'Distribution',
              formula: '$a(b + c) = ab + ac$',
              note: 'Multiply each term inside',
            },
            {
              label: 'Factoring (GCF)',
              formula: '$ab + ac = a(b + c)$',
              note: 'Pull out common factor',
            },
            {
              label: 'FOIL',
              formula: '$(a+b)(c+d) = ac+ad+bc+bd$',
              note: 'Two binomials',
            },
            {
              label: 'Difference of Squares',
              formula: '$a^2 - b^2 = (a+b)(a-b)$',
              note: 'Factor or expand; no middle term',
            },
          ],
        },
        {
          type: 'formulaGrid',
          items: [
            {
              label: 'Perfect Square (sum)',
              formula: '$(a+b)^2 = a^2 + 2ab + b^2$',
              note: `Don't forget the middle term`,
            },
            {
              label: 'Perfect Square (diff)',
              formula: '$(a-b)^2 = a^2 - 2ab + b^2$',
              note: 'Middle term is negative',
            },
          ],
        },
        {
          type: 'text',
          content: 'Two expressions are **equivalent** if they produce the same output for every input. On the SAT, this means any value of x gives the same result in both. The three core moves — distributing, combining like terms, and factoring — rewrite expressions without changing their value.',
        },
        {
          type: 'keyInsight',
          content: `You don't always need to simplify algebraically. Two expressions are equivalent iff they graph identically in DESMOS — or return the same value for any plug-in. Use the method that's fastest for the question.`,
        },
        {
          type: 'table',
          title: 'Like vs. Unlike Terms',
          headers: [
            'Expression',
            'Like Terms?',
            'Result',
          ],
          rows: [
            [
              '3x² + 5x²',
              'Yes — same variable, same power',
              '8x²',
            ],
            [
              '4x + 7x²',
              'No — different powers',
              'Cannot combine',
            ],
            [
              '2xy + 5xy',
              'Yes',
              '7xy',
            ],
          ],
        },
        {
          type: 'trapCard',
          title: '"True for All x" vs. "Solve for x"',
          wrong: 'Treating "ax² + bx + c = dx² + ex + f for all x" as an equation to solve — picking one value of x.',
          correction: '"True for all x" means the expressions are identical. Expand both sides, match coefficients of x², x, and constant. "Solve for x" finds a specific value — different task entirely.',
        },
      ],
    },
    practice: {
      title: 'Practice',
      blocks: [
        {
          type: 'example',
          difficulty: 'Medium',
          problem: 'If (2x - 3)(x + 4) = ax² + bx + c for all x, what is a + b + c?',
          steps: [
            {
              label: 'Shortcut: plug in x = 1',
              content: '(2·1 - 3)(1 + 4) = (-1)(5) = **-5**',
            },
            {
              label: 'Since f(1) = a + b + c',
              content: 'a + b + c = **-5**',
            },
            {
              label: 'Algebraic check',
              content: '2x² + 5x - 12 → 2 + 5 + (-12) = -5 ✓',
            },
          ],
        },
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'Expand and simplify: (3x - 2)(x + 5)',
          answer: '3x² + 15x - 2x - 10 = **3x² + 13x - 10**.',
        },
      ],
    },
  },
};
