export const functionsContent = {
  moduleId: 'functions',
  title: 'Functions',
  description: 'f(x) notation, evaluation, composition, domain/range, and graph interpretation — the core function skills tested on the Digital SAT.',

  sections: {
    coreConcepts: {
      title: 'Core Concepts',
      summary: 'What functions are, how notation works, composition rules, and when domain restrictions apply.',
      blocks: [
        { type: 'heading', content: 'Function Notation Decoded' },
        {
          type: 'text',
          content: 'A function assigns **exactly one output** to each input. f(x) means "plug x into the rule for f." The parentheses do **not** mean multiplication — f(5) means "evaluate f at 5."',
        },
        {
          type: 'table',
          title: 'Reading f(x) = x² + 1',
          headers: ['Notation', 'Meaning', 'Result'],
          rows: [
            ['f(3)', 'Plug in x = 3', '9 + 1 = 10'],
            ['f(a)', 'Plug in x = a', 'a² + 1'],
            ['f(x + 1)', 'Replace x with (x + 1)', '(x + 1)² + 1'],
            ['f(x) + 1', 'Compute f(x), then add 1', 'x² + 2'],
            ['2f(x)', 'Compute f(x), then multiply by 2', '2x² + 2'],
          ],
        },
        {
          type: 'keyInsight',
          content: 'f(x + 1) changes the **input** (horizontal shift). f(x) + 1 changes the **output** (vertical shift). The SAT tests this distinction across evaluation, graph, and transformation questions.',
        },
        { type: 'heading', content: 'Composition' },
        {
          type: 'text',
          content: 'f(g(x)) means "apply g first, then feed that result into f." Always work **inside out**. For f(x) = 2x and g(x) = x + 3: f(g(x)) = f(x + 3) = 2(x + 3) = 2x + 6.',
        },
      ],
    },

    satPatterns: {
      title: 'SAT Patterns',
      summary: 'Four pattern types with recognition cues, a notation trap, and an evaluation-strategy rule.',
      blocks: [
        {
          type: 'iconRow',
          items: [
            { icon: '🔢', label: 'Evaluate f(a)', description: '"What is f(−2)?"' },
            { icon: '🔗', label: 'Composition', description: '"Find f(g(3))"' },
            { icon: '📉', label: 'Graph Reading', description: '"From the graph, find f(2)"' },
            { icon: '📋', label: 'Table Lookup', description: '"Use the table to find f(g(1))"' },
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Function Question Types',
          content: '**Evaluate f(a)**: Substitute a for x; parenthesize negatives. **Composition**: Inside-out — g first, then f. **Graph**: x → up to curve → left to y-axis. **Table**: Chain lookups — g(a) gives input for f.',
        },
        {
          type: 'trapCard',
          title: 'Forward vs. Reverse Function Notation',
          wrong: '"For what x does f(x) = 4?" — going to x = 4 and reading up, or treating f(x) = k as "plug in k."',
          correction: '**Forward** f(a): plug a in, get output. **Reverse** f(x) = k: set the rule equal to k, solve for x. On a graph, draw a horizontal line at y = k; read x where it crosses.',
        },
        {
          type: 'tip',
          content: '**Step-by-step** when the input is messy (f(−3)), composition is nested, or a table chains multiple lookups. **Algebraically** when asked for f(x + 1) or a general expression — substitute the whole expression, then simplify.',
        },
      ],
    },

    methods: {
      title: 'Methods',
      summary: 'Five step-by-step procedures for every function question type: substitution, composition, table chains, graph reads, and domain analysis.',
      blocks: [
        { type: 'heading', content: 'Method 1: Safe Substitution' },
        {
          type: 'steps',
          title: 'Evaluating f(a)',
          items: [
            'Write out the function rule: f(x) = [expression]',
            'Replace every x with the input **in parentheses**: f(−3) uses (−3)',
            'Simplify: exponents first, then multiplication, watch negatives',
          ],
        },
        { type: 'heading', content: 'Method 2: Inside-Out Composition' },
        {
          type: 'steps',
          title: 'Evaluating f(g(x))',
          items: [
            'Evaluate the **inner** function first: compute g(x) or g(value)',
            'Take that result and plug it into the **outer** function f',
            'Simplify the final expression',
          ],
        },
        { type: 'heading', content: 'Method 3: Graph Reading' },
        {
          type: 'steps',
          title: 'Reading f(a) from a graph',
          items: [
            'Find **x = a** on the horizontal axis',
            'Go vertically to the curve',
            'From that point, go horizontally to the y-axis',
            'Read the y-value — that is **f(a)**',
          ],
        },
        {
          type: 'tip',
          content: 'Domain: denominators ≠ 0, radicals ≥ 0. On the SAT, 90% of domain restrictions come from a **denominator equal to zero**.',
        },
      ],
    },

    commonTraps: {
      title: 'Common Traps',
      summary: 'Five errors College Board designs answer choices around: squaring negatives, notation confusion, composition order, graph reading, and domain/range mix-ups.',
      blocks: [
        {
          type: 'trapCard',
          title: 'Squaring a Negative Input',
          wrong: 'f(−3) for f(x) = x²: students write −3² = −9 instead of (−3)² = 9.',
          correction: 'Always parenthesize the input: **(−3)² = 9**. The negative is being squared.',
        },
        {
          type: 'trapCard',
          title: 'f(x + 2) vs. f(x) + 2',
          wrong: 'Students treat f(x + 2) as "compute f(x), then add 2."',
          correction: 'f(x + 2): replace x with (x + 2) in the rule. f(x) + 2: compute f(x) first, then add 2. For f(x) = x²: f(x + 2) = x² + 4x + 4, while f(x) + 2 = x² + 2.',
        },
        {
          type: 'trapCard',
          title: 'Composition Order Reversal',
          wrong: 'For f(g(3)), students find f(3) first, then plug into g.',
          correction: 'f(g(3)) means g goes **first**: compute g(3), then feed that into f. Read inside-out.',
        },
        {
          type: 'trapCard',
          title: 'Reading Graphs Backwards',
          wrong: '"For what x does f(x) = 4?" — students go to x = 4 and read up.',
          correction: 'Draw a **horizontal line** at y = 4. Where it crosses the graph, read the x-coordinate(s). There may be multiple solutions.',
        },
        {
          type: 'comparison',
          items: [
            { label: 'Domain confusion', content: 'Students give the range when asked for the domain.', variant: 'wrong' },
            { label: 'Lock it in', content: '**Domain** = valid x-values (horizontal). **Range** = resulting y-values (vertical).', variant: 'correct' },
          ],
        },
      ],
    },

    workedExamples: {
      title: 'Worked Examples',
      summary: 'A table-based composition and a hard algebraic composition solved step-by-step.',
      blocks: [
        {
          type: 'example',
          difficulty: 'Medium',
          problem: 'The table defines f and g:\n\n| x | 1 | 2 | 3 | 4 |\n| f(x) | 3 | 4 | 1 | 2 |\n| g(x) | 2 | 1 | 4 | 3 |\n\nWhat is f(g(3))?',
          steps: [
            { label: 'Inner function', content: 'g(3) = **4** (from g-table).' },
            { label: 'Outer function', content: 'f(4) = **2** (from f-table).' },
            { label: 'Answer', content: 'f(g(3)) = **2**.' },
          ],
        },
        {
          type: 'example',
          difficulty: 'Hard',
          problem: 'Let f(x) = x² − 4x + 3 and g(x) = x + 1. If h(x) = f(g(x)), for what values of x does h(x) = 0?',
          steps: [
            { label: 'Compose', content: 'h(x) = f(x + 1) = (x + 1)² − 4(x + 1) + 3.' },
            { label: 'Expand', content: 'x² + 2x + 1 − 4x − 4 + 3 = **x² − 2x**.' },
            { label: 'Factor', content: 'x(x − 2) = 0 → x = **0** or x = **2**.' },
            { label: 'Verify', content: 'h(0) = 0 − 0 = 0 ✓. h(2) = 4 − 4 = 0 ✓.' },
          ],
        },
      ],
    },

    visualModels: {
      title: 'Visual Models',
      summary: 'Mental diagrams for reading function values, solving f(x) = k graphically, and identifying domain/range from a graph.',
      blocks: [
        { type: 'heading', content: 'Reading f(a) from a Graph' },
        {
          type: 'diagramRef',
          description: 'Graph of y = f(x) with dotted lines: go to x = 2 on the horizontal axis, up to the curve, left to the y-axis to read f(2) = 5.',
        },
        { type: 'heading', content: 'Solving f(x) = k Graphically' },
        {
          type: 'diagramRef',
          description: 'Parabola with a horizontal line at y = 4 showing two intersection points. Each x-coordinate is a solution to f(x) = 4.',
        },
        {
          type: 'keyInsight',
          content: 'Draw a horizontal line at y = k; each intersection gives an x-solution. **Domain** = horizontal extent; **range** = vertical extent. Open circles exclude endpoints.',
        },
      ],
    },

    speedStrategy: {
      title: 'Speed & Strategy',
      summary: 'Timing tactics for function questions: when to use mental math, when to reach for DESMOS, and how to backsolve.',
      blocks: [
        {
          type: 'strategyCard',
          title: 'Mental Math for Simple Evaluation',
          icon: '⚡',
          timing: '~10s',
          content: 'For f(3) with a simple polynomial, do it in your head. Only use DESMOS for degree 3+, fractions, or nested radicals.',
        },
        {
          type: 'strategyCard',
          title: 'DESMOS for Zeros and Intersections',
          icon: '📱',
          timing: '~20s',
          content: 'Need f(x) = 0? Type the function, click x-intercepts. For f(x) = k, graph y = f(x) and y = k, click intersections.',
        },
        {
          type: 'strategyCard',
          title: 'Table Composition: Finger Method',
          icon: '📋',
          timing: '~10s',
          content: 'Put your finger on g(a) in the g-row, get the number, slide to that number in the f-table\'s x-row. Two lookups, done.',
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Time Budget',
          content: 'Easy evaluation: **15s**. Table composition: **20s**. Graph reading: **30s**. Complex composition with algebra: **45–60s**.',
        },
        {
          type: 'tip',
          content: 'If a function question seems complex, try **backsolving**: plug each answer choice into the function and see which one works. Often faster than forward algebra.',
        },
      ],
    },

    checkpoint: {
      title: 'Checkpoint',
      blocks: [
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'If f(x) = x² − 3x + 2, what is f(−1)?',
          answer: 'f(−1) = (−1)² − 3(−1) + 2 = 1 + 3 + 2 = **6**.',
        },
        {
          type: 'checkpointQuestion',
          number: 2,
          question: 'What is the domain of f(x) = 5 / (x² − 9)?',
          answer: 'Denominator ≠ 0: x² − 9 ≠ 0 → x ≠ ±3. Domain: **all reals except x = 3 and x = −3**.',
        },
      ],
    },
  },
};
