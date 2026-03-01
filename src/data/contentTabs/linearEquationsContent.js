export const linearEquationsContent = {
  moduleId: 'linear-equations',
  title: 'Linear Equations',
  description: 'Slope, intercepts, parallel/perpendicular lines, standard form, and contextual equation writing — the most frequently tested algebra framework on the Digital SAT.',
  _isModuleFallback: true,
  sections: {
    learn: {
      title: 'Learn',
      summary: 'The building blocks of linear equations: three forms, slope as rate of change, intercepts as starting values, and the parallel/perpendicular relationship.',
      blocks: [
        {
          type: 'formulaGrid',
          items: [
            {
              label: 'Slope-Intercept',
              formula: '$y = mx + b$',
              note: 'm = slope, b = y-intercept',
            },
            {
              label: 'Point-Slope',
              formula: '$y - y_1 = m(x - x_1)$',
              note: 'Uses one point + slope',
            },
            {
              label: 'Standard Form',
              formula: '$Ax + By = C$',
              note: 'A, B, C integers; A $\\geq$ 0',
            },
          ],
        },
        {
          type: 'keyInsight',
          content: 'On the SAT, slope always means **rate** and y-intercept always means **starting value**. A gym charging \\$25/month with a \\$50 sign-up fee gives y = 25x + 50 — the 25 is slope (monthly rate), the 50 is the y-intercept (initial cost).',
        },
        {
          type: 'table',
          title: 'What You Can Read from Each Form',
          headers: [
            'Information',
            'Slope-Intercept',
            'Point-Slope',
            'Standard Form',
          ],
          rows: [
            [
              'Slope',
              'Read m directly',
              'Read m directly',
              '-A/B',
            ],
            [
              'Y-intercept',
              'Read b directly',
              'Expand and solve',
              'C/B',
            ],
            [
              'X-intercept',
              'Set y = 0, solve',
              'Set y = 0, solve',
              'C/A',
            ],
            [
              'Best for',
              'Graphing, interpreting',
              'Writing from a point',
              'Systems, intercepts',
            ],
          ],
        },
        {
          type: 'table',
          title: 'Slope Relationships',
          headers: [
            'Relationship',
            'Slope Rule',
            'Quick Test',
          ],
          rows: [
            [
              'Parallel lines',
              'm₁ = m₂',
              'Same slope, different intercept',
            ],
            [
              'Perpendicular lines',
              'm₁ · m₂ = -1',
              'Negative reciprocal',
            ],
            [
              'Horizontal line',
              'm = 0',
              'y = constant',
            ],
            [
              'Vertical line',
              'Undefined',
              'x = constant',
            ],
          ],
        },
        {
          type: 'callout',
          variant: 'memorize',
          title: 'Slope Formula',
          content: '**m = (y₂ - y₁) / (x₂ - x₁)** — rise over run. Tested directly with two points, from tables, and inside word problems.',
        },
        {
          type: 'trapCard',
          title: 'Rate vs. Starting Value',
          wrong: '"\\$3 per mile plus \\$5 base" → slope = 5, intercept = 3.',
          correction: '**Per-unit** (per mile, each, for every) = slope. **Flat/fixed/initial** = y-intercept. Keywords like "per," "each," "for every" always signal slope.',
        },
      ],
    },
    practice: {
      title: 'Practice',
      blocks: [
        {
          type: 'example',
          difficulty: 'Medium',
          problem: 'The equation 4x - 2y = 10 represents a line. A second line is perpendicular to it and passes through (6, 1). What is the equation of the second line?',
          steps: [
            {
              label: 'Find slope of the given line',
              content: 'Slope = -A/B = -4/(-2) = **2**.',
            },
            {
              label: 'Perpendicular slope',
              content: 'Negative reciprocal: **-½**.',
            },
            {
              label: 'Point-slope form',
              content: 'y - 1 = -½(x - 6) → y - 1 = -½x + 3 → **y = -½x + 4**.',
            },
            {
              label: 'Verify',
              content: 'Plug (6, 1): 1 = -½(6) + 4 = -3 + 4 = 1 ✓',
            },
          ],
        },
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'A line passes through (2, 7) and (5, 16). What is its equation in slope-intercept form?',
          answer: 'Slope = (16 - 7)/(5 - 2) = 9/3 = **3**. Point-slope: y - 7 = 3(x - 2) → **y = 3x + 1**.',
        },
      ],
    },
  },
};
