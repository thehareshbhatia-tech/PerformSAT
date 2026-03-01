export const transformationsContent = {
  moduleId: 'transformations',
  title: 'Transformations',
  description: 'Vertical/horizontal shifts, reflections, stretches, compressions, and combined transformations — the rules table and how College Board tests them on the Digital SAT.',
  _isModuleFallback: true,
  sections: {
    learn: {
      title: 'Learn',
      summary: 'The master transformation formula and its four parameters: vertical/horizontal shifts, reflections, and stretches.',
      blocks: [
        {
          type: 'formula',
          label: 'General Transformation Form',
          content: '$y = a \\cdot f(b(x - h)) + k$',
          note: 'a = vertical stretch/reflect, b = horizontal stretch/reflect, h = horizontal shift, k = vertical shift',
        },
        {
          type: 'keyInsight',
          content: 'Horizontal shifts are **opposite** the sign inside parentheses. f(x - 3) shifts **right** 3. Think: "What x makes the inside zero?" x - 3 = 0 → x = 3 — that is where the origin point moves.',
        },
        {
          type: 'table',
          title: 'Shift Rules',
          headers: [
            'Transformation',
            'Equation',
            'Direction',
          ],
          rows: [
            [
              'Up by k',
              'f(x) + k',
              'Graph moves up',
            ],
            [
              'Down by k',
              'f(x) - k',
              'Graph moves down',
            ],
            [
              'Right by h',
              'f(x - h)',
              'Graph moves right',
            ],
            [
              'Left by h',
              'f(x + h)',
              'Graph moves left',
            ],
          ],
        },
        {
          type: 'trapCard',
          title: 'Horizontal Shift Direction Reversed',
          wrong: 'f(x - 3) → "shift left 3" because of the minus sign.',
          correction: 'f(x - 3) shifts **right 3**. The shift is opposite the sign inside. Ask: "What x makes the inside zero?" x - 3 = 0 → x = 3. That is where the origin moves.',
        },
      ],
    },
    practice: {
      title: 'Practice',
      blocks: [
        {
          type: 'example',
          difficulty: 'Medium',
          problem: 'f(x) = x². g(x) = (x + 3)² - 4. Describe how g relates to f and find the vertex of g.',
          steps: [
            {
              label: 'Horizontal shift',
              content: '(x + 3) means shift **left 3** (opposite of +3).',
            },
            {
              label: 'Vertical shift',
              content: '-4 outside means shift **down 4**.',
            },
            {
              label: 'Vertex',
              content: 'Original vertex (0, 0) → (0 - 3, 0 - 4) = **(-3, -4)**.',
            },
            {
              label: 'Verify',
              content: 'g(-3) = (-3 + 3)² - 4 = 0 - 4 = -4 ✓.',
            },
          ],
        },
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'The graph of y = f(x) passes through (4, 6). If g(x) = f(x - 5) + 2, what point lies on the graph of g?',
          answer: 'Shift right 5: x = 4 + 5 = 9. Shift up 2: y = 6 + 2 = 8. Answer: **(9, 8)**.',
        },
      ],
    },
  },
};
