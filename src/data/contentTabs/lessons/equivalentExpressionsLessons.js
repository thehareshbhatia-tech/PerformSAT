export const equivalentExpressionsLessonTabs = {

  1: {
    moduleId: 'equivalent-expressions',
    title: 'Equivalent Expressions',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Two expressions are equivalent when they produce the same value for every possible input. The SAT tests whether you can move fluently between different forms.',
        blocks: [
          {
            type: 'text',
            content: 'An **equivalent expression** is just a different way of writing the same quantity. $2(x + 3)$ and $2x + 6$ look different, but they are equal for every value of $x$. The three key skills are **distributing**, **factoring**, and **combining like terms**.',
          },
          {
            type: 'formulaGrid',
            items: [
              { label: 'Distribute', formula: '$a(b + c) = ab + ac$', note: 'Expand parentheses' },
              { label: 'Factor (GCF)', formula: '$ab + ac = a(b + c)$', note: 'Pull out the common factor' },
              { label: 'Combine Like Terms', formula: '$3x + 5x = 8x$', note: 'Same variable & exponent' },
              { label: 'Difference of Squares', formula: '$a^2 - b^2 = (a+b)(a-b)$', note: 'High-frequency SAT pattern' },
            ],
          },
          {
            type: 'keyInsight',
            content: 'The SAT rarely asks you to "simplify." Instead it shows four answer choices and asks "which is equivalent?" Your job is to recognize **which algebraic move** connects the given expression to one of the choices — distributing, factoring, or combining.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Strategy: Match the Target Form',
            items: [
              'Look at the **answer choices** first — are they factored or expanded?',
              'If answers are expanded: **distribute** the given expression',
              'If answers are factored: look for a **GCF** or special pattern (difference of squares, perfect-square trinomial)',
              'After your move, **combine like terms** and compare to the choices',
            ],
          },
          {
            type: 'table',
            title: 'Special Products to Recognize',
            headers: ['Pattern', 'Expanded Form', 'Factored Form'],
            rows: [
              ['Difference of Squares', '$a^2 - b^2$', '$(a + b)(a - b)$'],
              ['Perfect Square (sum)', '$a^2 + 2ab + b^2$', '$(a + b)^2$'],
              ['Perfect Square (diff)', '$a^2 - 2ab + b^2$', '$(a - b)^2$'],
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
            problem: 'Which expression is equivalent to $3(2x - 5) + 4x$?',
            steps: [
              { label: 'Distribute', content: '$3 \\cdot 2x - 3 \\cdot 5 + 4x = 6x - 15 + 4x$' },
              { label: 'Combine like terms', content: '$6x + 4x - 15 = 10x - 15$' },
              { label: 'Answer', content: '$10x - 15$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Which expression is equivalent to $4x^2 - 25$?',
            steps: [
              { label: 'Recognize pattern', content: '$4x^2 = (2x)^2$ and $25 = 5^2$ → difference of squares' },
              { label: 'Apply formula', content: '$(2x)^2 - 5^2 = (2x + 5)(2x - 5)$' },
              { label: 'Answer', content: '$(2x + 5)(2x - 5)$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'If $\\frac{x^2 + 5x + 6}{x + 2}$ is equivalent to $x + k$ for all $x \\neq -2$, what is $k$?',
            steps: [
              { label: 'Factor numerator', content: '$x^2 + 5x + 6 = (x + 2)(x + 3)$' },
              { label: 'Cancel', content: '$\\frac{(x+2)(x+3)}{x+2} = x + 3$' },
              { label: 'Match', content: '$x + k = x + 3$, so $k = 3$' },
              { label: 'Answer', content: '$k = 3$' },
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Sign Error When Distributing a Negative',
            wrong: '$-(3x - 7) = -3x - 7$. Student distributed the negative to the first term but not the second.',
            correction: '$-(3x - 7) = -3x + 7$. The negative sign flips **every** term inside the parentheses.',
          },
          {
            type: 'trapCard',
            title: 'Combining Unlike Terms',
            wrong: '$3x^2 + 5x = 8x^3$. Student added coefficients and exponents.',
            correction: '$3x^2$ and $5x$ have **different** exponents, so they cannot be combined. The expression $3x^2 + 5x$ is already simplified.',
          },
          {
            type: 'trapCard',
            title: '"Cancel" Across Addition',
            wrong: '$\\frac{x + 4}{x} = 4$. Student "canceled" the $x$.',
            correction: 'You can only cancel **factors** (multiplication), not **terms** (addition). Split it: $\\frac{x}{x} + \\frac{4}{x} = 1 + \\frac{4}{x}$.',
          },
        ],
      },
    },
  },
};
