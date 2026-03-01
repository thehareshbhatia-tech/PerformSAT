export const systemsContent = {
  moduleId: 'systems',
  title: 'Systems of Equations',
  description: 'Substitution, elimination, DESMOS graphing, no-solution/infinite-solution analysis, and word-problem translation for the Digital SAT.',
  _isModuleFallback: true,
  sections: {
    learn: {
      title: 'Learn',
      summary: 'What a system is, the three possible outcomes, and how to detect no-solution vs. infinite-solution cases algebraically.',
      blocks: [
        {
          type: 'text',
          content: 'A system is two (or more) equations with the **same variables**. The solution is the (x, y) pair that satisfies **both** equations simultaneously — geometrically, the intersection point of the two lines.',
        },
        {
          type: 'keyInsight',
          content: '"For what value of k does the system have no solution?" is one of the most predictable hard-question patterns. Set the coefficient ratios equal but the constant ratio different, then solve for k.',
        },
        {
          type: 'table',
          title: 'Detecting Special Cases',
          headers: [
            'Coefficient Relationship',
            'Constants',
            'Result',
          ],
          rows: [
            [
              'a₁/a₂ = b₁/b₂',
              '$\\neq$ c₁/c₂',
              '**No solution** (parallel)',
            ],
            [
              'a₁/a₂ = b₁/b₂',
              '= c₁/c₂',
              '**Infinite solutions** (same line)',
            ],
            [
              'a₁/a₂ $\\neq$ b₁/b₂',
              'Any',
              '**One unique solution**',
            ],
          ],
        },
        {
          type: 'trapCard',
          title: 'No Solution vs. Infinite Solutions',
          wrong: 'Treating both as "no intersection" or confusing the coefficient/constant ratio logic.',
          correction: '**No solution**: a₁/a₂ = b₁/b₂ but c₁/c₂ differs → parallel lines. **Infinite**: a₁/a₂ = b₁/b₂ = c₁/c₂ → same line. Set coefficient ratios equal first; then check whether constants match.',
        },
      ],
    },
    practice: {
      title: 'Practice',
      blocks: [
        {
          type: 'example',
          difficulty: 'Medium',
          problem: 'A school sold 200 tickets. Adult tickets cost \\$12, student tickets \\$7. Total revenue: \\$1,900. How many adult tickets were sold?',
          steps: [
            {
              label: 'Define variables',
              content: 'a = adult tickets, s = student tickets.',
            },
            {
              label: 'Set up system',
              content: '**a + s = 200** and **12a + 7s = 1900**.',
            },
            {
              label: 'Substitute',
              content: 's = 200 - a → 12a + 7(200 - a) = 1900.',
            },
            {
              label: 'Solve',
              content: '12a + 1400 - 7a = 1900 → 5a = 500 → **a = 100**.',
            },
            {
              label: 'Verify',
              content: 's = 100. Revenue: 12(100) + 7(100) = 1200 + 700 = 1900 ✓.',
            },
          ],
        },
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'Solve: x + y = 8 and x - y = 2. What is x?',
          answer: 'Add the equations: 2x = 10 → **x = 5**. Then y = 8 - 5 = 3.',
        },
      ],
    },
  },
};
