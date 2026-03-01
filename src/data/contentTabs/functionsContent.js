export const functionsContent = {
  moduleId: 'functions',
  title: 'Functions',
  description: 'f(x) notation, evaluation, composition, domain/range, and graph interpretation — the core function skills tested on the Digital SAT.',
  _isModuleFallback: true,
  sections: {
    learn: {
      title: 'Learn',
      summary: 'What functions are, how notation works, composition rules, and when domain restrictions apply.',
      blocks: [
        {
          type: 'text',
          content: 'A function assigns **exactly one output** to each input. f(x) means "plug x into the rule for f." The parentheses do **not** mean multiplication — f(5) means "evaluate f at 5."',
        },
        {
          type: 'text',
          content: 'f(g(x)) means "apply g first, then feed that result into f." Always work **inside out**. For f(x) = 2x and g(x) = x + 3: f(g(x)) = f(x + 3) = 2(x + 3) = 2x + 6.',
        },
        {
          type: 'keyInsight',
          content: 'f(x + 1) changes the **input** (horizontal shift). f(x) + 1 changes the **output** (vertical shift). The SAT tests this distinction across evaluation, graph, and transformation questions.',
        },
        {
          type: 'table',
          title: 'Reading f(x) = x² + 1',
          headers: [
            'Notation',
            'Meaning',
            'Result',
          ],
          rows: [
            [
              'f(3)',
              'Plug in x = 3',
              '9 + 1 = 10',
            ],
            [
              'f(a)',
              'Plug in x = a',
              'a² + 1',
            ],
            [
              'f(x + 1)',
              'Replace x with (x + 1)',
              '(x + 1)² + 1',
            ],
            [
              'f(x) + 1',
              'Compute f(x), then add 1',
              'x² + 2',
            ],
            [
              '2f(x)',
              'Compute f(x), then multiply by 2',
              '2x² + 2',
            ],
          ],
        },
        {
          type: 'trapCard',
          title: 'Forward vs. Reverse Function Notation',
          wrong: '"For what x does f(x) = 4?" — going to x = 4 and reading up, or treating f(x) = k as "plug in k."',
          correction: '**Forward** f(a): plug a in, get output. **Reverse** f(x) = k: set the rule equal to k, solve for x. On a graph, draw a horizontal line at y = k; read x where it crosses.',
        },
      ],
    },
    practice: {
      title: 'Practice',
      blocks: [
        {
          type: 'example',
          difficulty: 'Medium',
          problem: 'The table defines f and g:\n\n| x | 1 | 2 | 3 | 4 |\n| f(x) | 3 | 4 | 1 | 2 |\n| g(x) | 2 | 1 | 4 | 3 |\n\nWhat is f(g(3))?',
          steps: [
            {
              label: 'Inner function',
              content: 'g(3) = **4** (from g-table).',
            },
            {
              label: 'Outer function',
              content: 'f(4) = **2** (from f-table).',
            },
            {
              label: 'Answer',
              content: 'f(g(3)) = **2**.',
            },
          ],
        },
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'If f(x) = x² - 3x + 2, what is f(-1)?',
          answer: 'f(-1) = (-1)² - 3(-1) + 2 = 1 + 3 + 2 = **6**.',
        },
      ],
    },
  },
};
