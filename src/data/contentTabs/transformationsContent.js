export const transformationsContent = {
  moduleId: 'transformations',
  title: 'Transformations',
  description: 'Vertical/horizontal shifts, reflections, stretches, compressions, and combined transformations — the rules table and how College Board tests them on the Digital SAT.',

  sections: {
    coreConcepts: {
      title: 'Core Concepts',
      summary: 'The master transformation formula and its four parameters: vertical/horizontal shifts, reflections, and stretches.',
      blocks: [
        { type: 'heading', content: 'The Master Transformation Rule' },
        {
          type: 'formula',
          label: 'General Transformation Form',
          content: 'y = a · f(b(x − h)) + k',
          note: 'a = vertical stretch/reflect, b = horizontal stretch/reflect, h = horizontal shift, k = vertical shift',
        },
        { type: 'heading', content: 'Translations (Shifts)' },
        {
          type: 'table',
          title: 'Shift Rules',
          headers: ['Transformation', 'Equation', 'Direction'],
          rows: [
            ['Up by k', 'f(x) + k', 'Graph moves up'],
            ['Down by k', 'f(x) − k', 'Graph moves down'],
            ['Right by h', 'f(x − h)', 'Graph moves right'],
            ['Left by h', 'f(x + h)', 'Graph moves left'],
          ],
        },
        {
          type: 'keyInsight',
          content: 'Horizontal shifts are **opposite** the sign inside parentheses. f(x − 3) shifts **right** 3. Think: "What x makes the inside zero?" x − 3 = 0 → x = 3 — that is where the origin point moves.',
        },
      ],
    },

    satPatterns: {
      title: 'SAT Patterns',
      summary: 'College Board tests transformations 2–4 times per module through five predictable prompt styles.',
      blocks: [
        {
          type: 'iconRow',
          items: [
            { icon: '↔️', label: 'Equation → Shift', description: '"Describe f(x − 3) + 2"' },
            { icon: '📈', label: 'Graph → Equation', description: '"Which equation matches the shifted graph?"' },
            { icon: '📋', label: 'Table → Table', description: '"Given f(x), find values for f(x + 1)"' },
            { icon: '🔄', label: 'Combined Transforms', description: '"Multiple changes at once"' },
          ],
        },
        { type: 'heading', content: 'Pattern 1: Describe the Transformation' },
        {
          type: 'text',
          content: 'Given g(x) = f(x − 4) + 1, describe how g relates to f. Answer: shifted **right 4** and **up 1**. The SAT tests whether you reverse the horizontal sign correctly.',
        },
        { type: 'heading', content: 'Pattern 2: Vertex Shifts & Tables' },
        {
          type: 'text',
          content: 'Vertex form y = a(x − h)² + k gives vertex (h, k). For tables: f(x) + 3 adds 3 to y; f(x − 1) adds 1 to x (opposite direction). **Track one point** through the transformation to match graphs.',
        },
      ],
    },

    methods: {
      title: 'Methods',
      summary: 'Four workflows: parameter decode, point tracking, table transformation, and DESMOS visual comparison.',
      blocks: [
        { type: 'heading', content: 'Method 1: Parameter Decode' },
        {
          type: 'steps',
          title: 'Extract transformations from y = a · f(b(x − h)) + k',
          items: [
            'Identify **k** (outside, added/subtracted) → vertical shift',
            'Identify **a** (outside, multiplied) → vertical stretch/reflect',
            'Identify **h** (inside, subtracted from x) → horizontal shift (opposite sign!)',
            'Identify **b** (inside, multiplied to x) → horizontal stretch/reflect',
          ],
        },
        { type: 'heading', content: 'Method 2: Point Tracking' },
        {
          type: 'steps',
          title: 'Most reliable for multiple-choice',
          items: [
            'Pick a **clear point** on the original (vertex, intercept, or grid-friendly point)',
            'Apply vertical changes to the **y-coordinate**',
            'Apply horizontal changes to the **x-coordinate** (opposite direction for shifts)',
            'Check which answer choice contains the transformed point',
          ],
        },
        { type: 'heading', content: 'Method 3: DESMOS Visual Comparison' },
        {
          type: 'steps',
          title: 'Confirm any transformation visually',
          items: [
            'Type the **original** function into DESMOS line 1',
            'Type the **transformed** function into line 2',
            'Visually compare: did it shift? Reflect? Stretch?',
            'For multiple-choice, type each answer and match',
          ],
        },
      ],
    },

    commonTraps: {
      title: 'Common Traps',
      summary: 'Four errors College Board exploits: horizontal shift direction, inside/outside confusion, reflection axis mix-ups, and table adjustment mistakes.',
      blocks: [
        {
          type: 'trapCard',
          title: 'Horizontal Shift Direction',
          wrong: 'f(x − 3) → "shift left 3" because of the minus sign.',
          correction: 'f(x − 3) shifts **right 3**. The shift is opposite the sign inside. x needs to equal 3 to make the inside zero.',
        },
        {
          type: 'trapCard',
          title: 'Inside vs. Outside Confusion',
          wrong: 'Students apply a vertical rule to a change inside the function, or vice versa.',
          correction: 'Outside f → affects **y** (vertical). Inside f\'s parentheses → affects **x** (horizontal). f(x) + 3 is vertical; f(x + 3) is horizontal.',
        },
        {
          type: 'trapCard',
          title: 'Reflection Axis Mix-Up',
          wrong: 'Confusing −f(x) (reflect over x-axis) with f(−x) (reflect over y-axis).',
          correction: 'Negative **outside** → flip over **x-axis** (y-values flip). Negative **inside** → flip over **y-axis** (x-values flip).',
        },
        {
          type: 'trapCard',
          title: 'Stretch vs. Compression',
          wrong: 'f(2x) makes the graph wider because 2 is bigger.',
          correction: 'f(2x) makes the graph **narrower** (horizontal compression by 1/2). Horizontal transformations are inverted. To widen, use f(½x).',
        },
        {
          type: 'comparison',
          items: [
            { label: '"f(x − 3) shifts left 3"', content: 'The minus sign is deceptive. Students apply it directly as direction.', variant: 'wrong' },
            { label: '"f(x − 3) shifts right 3"', content: 'Horizontal shifts are **opposite** the sign. Minus inside = right. Plus inside = left.', variant: 'correct' },
          ],
        },
      ],
    },

    workedExamples: {
      title: 'Worked Examples',
      summary: 'A vertex-shift problem and a multi-transformation table problem solved step-by-step.',
      blocks: [
        {
          type: 'example',
          difficulty: 'Medium',
          problem: 'f(x) = x². g(x) = (x + 3)² − 4. Describe how g relates to f and find the vertex of g.',
          steps: [
            { label: 'Horizontal shift', content: '(x + 3) means shift **left 3** (opposite of +3).' },
            { label: 'Vertical shift', content: '−4 outside means shift **down 4**.' },
            { label: 'Vertex', content: 'Original vertex (0, 0) → (0 − 3, 0 − 4) = **(−3, −4)**.' },
            { label: 'Verify', content: 'g(−3) = (−3 + 3)² − 4 = 0 − 4 = −4 ✓.' },
          ],
        },
        {
          type: 'example',
          difficulty: 'Hard',
          problem: 'Given the table for f:\n\n| x | −1 | 0 | 1 | 2 | 3 |\n| f(x) | 4 | 1 | 0 | 1 | 4 |\n\nIf g(x) = −f(x − 2) + 3, what is g(4)?',
          steps: [
            { label: 'Parse transformations', content: 'Shift right 2, reflect over x-axis, shift up 3.' },
            { label: 'Evaluate inside-out', content: 'g(4): first compute x − 2 = 4 − 2 = **2**. Need f(2).' },
            { label: 'Table lookup', content: 'f(2) = **1**.' },
            { label: 'Apply reflect + shift', content: '−f(2) + 3 = −1 + 3 = **2**.' },
            { label: 'Answer', content: 'g(4) = **2**.' },
          ],
        },
      ],
    },

    visualModels: {
      title: 'Visual Models',
      summary: 'Mental pictures for translations, reflections, stretches, and multi-step combined transformations.',
      blocks: [
        { type: 'heading', content: 'Translations — Sliding the Graph' },
        {
          type: 'diagramRef',
          description: 'Parabola y = x² in gray, with colored copies: blue shifted right 3, green shifted up 2, red shifted left 2 and down 1. Arrows show each shift direction.',
        },
        { type: 'heading', content: 'Reflections — Flipping the Graph' },
        {
          type: 'diagramRef',
          description: 'Side-by-side: (1) y = f(x) and y = −f(x) — flipped upside-down over x-axis. (2) y = f(x) and y = f(−x) — mirror image over y-axis.',
        },
        {
          type: 'keyInsight',
          content: 'Inside f → horizontal (opposite direction). Outside f → vertical. Verify any transformation in DESMOS: graph original and transformed side-by-side.',
        },
      ],
    },

    speedStrategy: {
      title: 'Speed & Strategy',
      summary: 'Timing tactics to turn transformation questions into 15–30 second problems through pattern recognition.',
      blocks: [
        {
          type: 'strategyCard',
          title: 'Inside vs. Outside — One-Second Decode',
          icon: '⚡',
          timing: '~5s',
          content: 'Inside f → x (horizontal, opposite direction). Outside f → y (vertical, same direction). This handles 80% of transformation questions.',
        },
        {
          type: 'strategyCard',
          title: 'Track One Point',
          icon: '📍',
          timing: '~15s',
          content: 'Pick the easiest point (vertex, origin, or intercept). Apply the transformation. Check which answer matches. Faster than analyzing the whole graph.',
        },
        {
          type: 'strategyCard',
          title: 'DESMOS Side-by-Side',
          icon: '📱',
          timing: '~20s',
          content: 'Type original and transformed function into DESMOS. Visual comparison confirms everything. For multiple-choice, type each answer and match.',
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Time Budget',
          content: 'Single transformation: **10–15s**. Combined transformation: **20–30s**. Table-based: **30–45s**. Over 45s? Use DESMOS.',
        },
        {
          type: 'tip',
          content: 'On "which graph shows f(x − 2)?", find where the original crosses the y-axis — that point should now be 2 units right. Eliminate non-matching answers instantly.',
        },
      ],
    },

    checkpoint: {
      title: 'Checkpoint',
      blocks: [
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'The graph of y = f(x) passes through (4, 6). If g(x) = f(x − 5) + 2, what point lies on the graph of g?',
          answer: 'Shift right 5: x = 4 + 5 = 9. Shift up 2: y = 6 + 2 = 8. Answer: **(9, 8)**.',
        },
        {
          type: 'checkpointQuestion',
          number: 2,
          question: 'The vertex of y = x² is (0, 0). What is the vertex of y = −3(x + 2)² − 7?',
          answer: 'x + 2 = x − (−2), so h = −2 and k = −7. Vertex: **(−2, −7)**. Opens downward (a = −3 < 0), stretched by factor 3.',
        },
      ],
    },
  },
};
