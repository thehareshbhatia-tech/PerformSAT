export const quadraticsContent = {
  moduleId: 'quadratics',
  title: 'Quadratic Equations & Parabolas',
  description: 'Standard, vertex, and factored forms; discriminant; roots; vertex formula; and parabola analysis for the Digital SAT.',
  _isModuleFallback: true,
  sections: {
    learn: {
      title: 'Learn',
      summary: 'The three quadratic forms, what each reveals, the discriminant, and the quadratic formula.',
      blocks: [
        {
          type: 'formulaGrid',
          items: [
            {
              label: 'Standard Form',
              formula: '$f(x) = ax^2 + bx + c$',
              note: 'y-intercept = c, direction = sign of a',
            },
            {
              label: 'Vertex Form',
              formula: '$f(x) = a(x - h)^2 + k$',
              note: 'Vertex at (h, k)',
            },
            {
              label: 'Factored Form',
              formula: '$f(x) = a(x - p)(x - q)$',
              note: 'x-intercepts at p and q',
            },
          ],
        },
        {
          type: 'formula',
          label: 'Discriminant',
          content: '$D = b^2 - 4ac$',
          note: 'D > 0 → 2 real roots. D = 0 → 1 repeated root. D < 0 → no real roots.',
        },
        {
          type: 'formula',
          label: 'Quadratic Formula',
          content: '$x = (-b \\pm \\sqrt{b^2 - 4ac}) / (2a)$',
          note: 'Universal solver — works for any quadratic set to 0',
        },
        {
          type: 'keyInsight',
          content: `The quadratic formula always works but is the **slowest** path. Try factoring first (~5s). If it doesn't factor cleanly, then use the formula (~30s). The formula is a safety net, not a first choice.`,
        },
        {
          type: 'table',
          title: 'What Each Form Reveals',
          headers: [
            'Information',
            'Standard',
            'Vertex',
            'Factored',
          ],
          rows: [
            [
              'y-intercept',
              'c directly',
              'Plug x = 0',
              'Plug x = 0',
            ],
            [
              'Zeros / x-intercepts',
              'Factor or formula',
              'Set = 0, solve',
              'p and q directly',
            ],
            [
              'Vertex',
              'x = -b/(2a)',
              '(h, k) directly',
              'x = (p+q)/2',
            ],
            [
              'Opens up/down',
              'a > 0 / a < 0',
              'a > 0 / a < 0',
              'a > 0 / a < 0',
            ],
          ],
        },
        {
          type: 'trapCard',
          title: 'Misreading Which Form Reveals What',
          wrong: 'Treating vertex form as giving roots, or standard form as giving vertex directly.',
          correction: `**Factored**: roots at p, q. **Vertex**: vertex at (h, k). **Standard**: y-int = c, vertex x = -b/(2a). Each form exposes different info — don't hunt for roots in vertex form.`,
        },
      ],
    },
    practice: {
      title: 'Practice',
      blocks: [
        {
          type: 'example',
          difficulty: 'Medium',
          problem: 'f(x) = -2x² + 12x - 10 models the height of a ball in feet at time x seconds. What is the maximum height?',
          steps: [
            {
              label: 'Identify a, b, c',
              content: 'a = -2, b = 12, c = -10. Since a < 0, vertex is a **maximum**.',
            },
            {
              label: 'Vertex x-coordinate',
              content: 'x = -12/(2·-2) = -12/-4 = **3**',
            },
            {
              label: 'Vertex y-coordinate',
              content: 'f(3) = -2(9) + 36 - 10 = -18 + 36 - 10 = **8**',
            },
            {
              label: 'Answer',
              content: 'Maximum height is **8 feet** at t = 3 seconds.',
            },
          ],
        },
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'What is the vertex of f(x) = x² - 8x + 15?',
          answer: 'x = -(-8)/(2·1) = 4. f(4) = 16 - 32 + 15 = -1. Vertex: **(4, -1)**.',
        },
      ],
    },
  },
};
