export const linearEquationsContent = {
  moduleId: 'linear-equations',
  title: 'Linear Equations',
  description: 'Slope, intercepts, parallel/perpendicular lines, standard form, and contextual equation writing — the most frequently tested algebra framework on the Digital SAT.',

  sections: {
    coreConcepts: {
      title: 'Core Concepts',
      summary: 'The building blocks of linear equations: three forms, slope as rate of change, intercepts as starting values, and the parallel/perpendicular relationship.',
      blocks: [
        { type: 'heading', content: 'Three Forms of a Linear Equation' },
        {
          type: 'formulaGrid',
          items: [
            { label: 'Slope-Intercept', formula: 'y = mx + b', note: 'm = slope, b = y-intercept' },
            { label: 'Point-Slope', formula: 'y − y₁ = m(x − x₁)', note: 'Uses one point + slope' },
            { label: 'Standard Form', formula: 'Ax + By = C', note: 'A, B, C integers; A ≥ 0' },
          ],
        },
        {
          type: 'table',
          title: 'What You Can Read from Each Form',
          headers: ['Information', 'Slope-Intercept', 'Point-Slope', 'Standard Form'],
          rows: [
            ['Slope', 'Read m directly', 'Read m directly', '−A/B'],
            ['Y-intercept', 'Read b directly', 'Expand and solve', 'C/B'],
            ['X-intercept', 'Set y = 0, solve', 'Set y = 0, solve', 'C/A'],
            ['Best for', 'Graphing, interpreting', 'Writing from a point', 'Systems, intercepts'],
          ],
        },
        {
          type: 'callout',
          variant: 'memorize',
          title: 'Slope Formula',
          content: '**m = (y₂ − y₁) / (x₂ − x₁)** — rise over run. Tested directly with two points, from tables, and inside word problems.',
        },
        {
          type: 'table',
          title: 'Slope Relationships',
          headers: ['Relationship', 'Slope Rule', 'Quick Test'],
          rows: [
            ['Parallel lines', 'm₁ = m₂', 'Same slope, different intercept'],
            ['Perpendicular lines', 'm₁ · m₂ = −1', 'Negative reciprocal'],
            ['Horizontal line', 'm = 0', 'y = constant'],
            ['Vertical line', 'Undefined', 'x = constant'],
          ],
        },
        {
          type: 'keyInsight',
          content: 'On the SAT, slope always means **rate** and y-intercept always means **starting value**. A gym charging $25/month with a $50 sign-up fee gives y = 25x + 50 — the 25 is slope (monthly rate), the 50 is the y-intercept (initial cost).',
        },
      ],
    },

    satPatterns: {
      title: 'SAT Patterns',
      summary: 'Four pattern types with recognition cues, a common trap, and a form-selection rule.',
      blocks: [
        {
          type: 'iconRow',
          items: [
            { icon: '📊', label: 'Interpret Slope/Intercept', description: '"What does the 3 represent?"' },
            { icon: '📐', label: 'Write from Context', description: '"A plumber charges $40/hr plus…"' },
            { icon: '🔀', label: 'Parallel / Perpendicular', description: '"Which is perpendicular to…?"' },
            { icon: '📈', label: 'Graph ↔ Equation', description: '"Which equation matches the graph?"' },
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Linear Equation Question Types',
          content: '**Interpret**: "What does [coefficient/constant] represent?" → coefficient = rate, constant = starting value. **Write from context**: rate → m, flat fee/initial → b. **Parallel/perpendicular**: same slope vs. negative reciprocal. **Graph ↔ equation**: read slope (rise/run) and y-intercept from graph, or plug answer choices into DESMOS.',
        },
        {
          type: 'trapCard',
          title: 'Rate vs. Starting Value',
          wrong: '"$3 per mile plus $5 base" → slope = 5, intercept = 3.',
          correction: '**Per-unit** (per mile, each, for every) = slope. **Flat/fixed/initial** = y-intercept. Keywords like "per," "each," "for every" always signal slope.',
        },
        {
          type: 'tip',
          content: '**Slope-intercept** when you need to graph, interpret rate/starting value, or write from context. **Standard form** when working with systems, finding both intercepts quickly, or matching Ax + By = C answer choices.',
        },
      ],
    },

    methods: {
      title: 'Methods',
      summary: 'Five solving workflows covering every linear equation scenario on the SAT, from quick-write to DESMOS verification.',
      blocks: [
        { type: 'heading', content: 'Method 1: Slope-Intercept Quick Write' },
        {
          type: 'steps',
          title: 'When you have rate + starting value',
          items: [
            'Identify the **rate of change** → slope m',
            'Identify the **starting value** (value when x = 0) → y-intercept b',
            'Write **y = mx + b** and match to answer choices',
          ],
        },
        { type: 'heading', content: 'Method 2: Two-Point Equation' },
        {
          type: 'steps',
          title: 'When given two points or a table',
          items: [
            'Compute slope: **m = (y₂ − y₁) / (x₂ − x₁)**',
            'Plug either point into point-slope form',
            'Simplify to match the answer format',
            'Verify with the unused point',
          ],
        },
        { type: 'heading', content: 'Method 4: Standard Form & DESMOS' },
        {
          type: 'callout',
          variant: 'success',
          title: 'Quick reads & DESMOS',
          content: 'From Ax + By = C: slope = **−A/B**, y-int = C/B. For two points, type each answer-choice equation into DESMOS; the correct line passes through **both** points.',
        },
      ],
    },

    commonTraps: {
      title: 'Common Traps',
      summary: 'Five sign-and-concept errors College Board deliberately baits in linear equation questions.',
      blocks: [
        {
          type: 'trapCard',
          title: 'Slope Sign Error',
          wrong: 'Students swap the subtraction order of y-values but not x-values, flipping the slope sign.',
          correction: 'Always subtract in the **same order**: (y₂ − y₁) / (x₂ − x₁). If the line goes downhill left-to-right, slope must be negative.',
        },
        {
          type: 'trapCard',
          title: 'Perpendicular = Flip Only (Forgot Negate)',
          wrong: 'Perpendicular slope of 2 → ½. Students flip but forget to negate.',
          correction: 'Perpendicular means **negative reciprocal**: 2 → **−½**. Always negate AND flip.',
        },
        {
          type: 'trapCard',
          title: 'Rate vs. Starting Value Mix-Up',
          wrong: '"$3/mile plus $5 base" → slope = 5, intercept = 3.',
          correction: '**Per-unit** = slope (3/mile). **Flat/fixed/initial** = y-intercept (5 base). Keywords like "per," "each," "for every" always signal slope.',
        },
        {
          type: 'trapCard',
          title: 'Standard Form Slope Missing Negative',
          wrong: 'Given 2x + 3y = 6, students say slope = 2/3.',
          correction: 'Slope from Ax + By = C is **−A/B**. Here: **−2/3**. The negative is always there.',
        },
        {
          type: 'comparison',
          items: [
            { label: 'Wrong: Leave slope unsimplified', content: 'm = 4/6 → cannot find among answer choices.', variant: 'wrong' },
            { label: 'Right: Always reduce', content: 'm = 4/6 = **2/3**. Answers always show simplified form.', variant: 'correct' },
          ],
        },
      ],
    },

    workedExamples: {
      title: 'Worked Examples',
      summary: 'Two full SAT-style solutions demonstrating perpendicular lines and contextual intersections.',
      blocks: [
        {
          type: 'example',
          difficulty: 'Medium',
          problem: 'The equation 4x − 2y = 10 represents a line. A second line is perpendicular to it and passes through (6, 1). What is the equation of the second line?',
          steps: [
            { label: 'Find slope of the given line', content: 'Slope = −A/B = −4/(−2) = **2**.' },
            { label: 'Perpendicular slope', content: 'Negative reciprocal: **−½**.' },
            { label: 'Point-slope form', content: 'y − 1 = −½(x − 6) → y − 1 = −½x + 3 → **y = −½x + 4**.' },
            { label: 'Verify', content: 'Plug (6, 1): 1 = −½(6) + 4 = −3 + 4 = 1 ✓' },
          ],
        },
        {
          type: 'example',
          difficulty: 'Hard',
          problem: 'Company A\'s revenue (thousands) is R = 8.5n − 12 and Company B\'s is R = −3n + 150, where n = months since January. After how many months do they earn the same revenue?',
          steps: [
            { label: 'Set equal', content: '8.5n − 12 = −3n + 150' },
            { label: 'Solve', content: '11.5n = 162 → n ≈ **14.09**' },
            { label: 'Interpret', content: 'Revenue equalizes around **month 14**.' },
            { label: 'Find revenue', content: 'R = 8.5(14) − 12 ≈ **107** thousand dollars.' },
            { label: 'Answer', content: 'After approximately **14 months**, both earn about **$107,000**.' },
          ],
        },
      ],
    },

    visualModels: {
      title: 'Visual Models',
      summary: 'Mental pictures for slope direction, rise/run triangles, and parallel vs. perpendicular geometry.',
      blocks: [
        { type: 'heading', content: 'Slope Direction Quick Reference' },
        {
          type: 'iconRow',
          items: [
            { icon: '↗️', label: 'Positive (m > 0)', description: 'Rises left to right' },
            { icon: '↘️', label: 'Negative (m < 0)', description: 'Falls left to right' },
            { icon: '➡️', label: 'Zero (m = 0)', description: 'Horizontal: y = constant' },
            { icon: '⬆️', label: 'Undefined', description: 'Vertical: x = constant' },
          ],
        },
        {
          type: 'diagramRef',
          description: 'Coordinate plane showing y = mx + b with a slope triangle labeled "rise" (vertical) and "run" (horizontal), y-intercept marked at (0, b)',
        },
        {
          type: 'diagramRef',
          description: 'Two parallel lines (same slope, different y-intercepts) with gap labeled, beside two perpendicular lines forming a 90° angle with slopes labeled m and −1/m',
        },
        {
          type: 'table',
          title: 'How Changing m and b Affects the Graph',
          headers: ['Change', 'Visual Effect'],
          rows: [
            ['Increase |m|', 'Line gets steeper'],
            ['Decrease |m|', 'Line flattens toward horizontal'],
            ['Increase b', 'Line shifts up (stays parallel)'],
            ['Decrease b', 'Line shifts down (stays parallel)'],
          ],
        },
      ],
    },

    speedStrategy: {
      title: 'Speed & Strategy',
      summary: 'Timing tactics to solve linear equation questions in 30–60 seconds using shortcuts and DESMOS.',
      blocks: [
        {
          type: 'strategyCard',
          title: 'Instant Slope from Standard Form',
          icon: '⚡',
          timing: '~5s',
          content: 'Given Ax + By = C, slope is **−A/B**. Skip the full conversion. This saves 20+ seconds every time.',
        },
        {
          type: 'strategyCard',
          title: 'DESMOS Answer-Choice Elimination',
          icon: '📱',
          timing: '~20s',
          content: 'Type each answer-choice equation into DESMOS. The correct line passes through the required points or matches the described behavior. No algebra needed.',
        },
        {
          type: 'strategyCard',
          title: 'Context Keyword Decode',
          icon: '🔑',
          timing: '~10s',
          content: '"Per/each/every" = slope. "Initial/starting/base/flat" = y-intercept. Decode these words instantly and write the equation on first read.',
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Time Budget',
          content: 'Easy linear: **30s**. Medium: **45s**. Hard word problem: **60–90s**. Spending more than 90s? Flag and move on.',
        },
        {
          type: 'tip',
          content: 'Parallel/perpendicular questions are solvable in **under 30 seconds**: find the first slope, flip-and-negate (or keep same), match answer choices.',
        },
      ],
    },

    checkpoint: {
      title: 'Checkpoint',
      blocks: [
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'A line passes through (2, 7) and (5, 16). What is its equation in slope-intercept form?',
          answer: 'Slope = (16 − 7)/(5 − 2) = 9/3 = **3**. Point-slope: y − 7 = 3(x − 2) → **y = 3x + 1**.',
        },
        {
          type: 'checkpointQuestion',
          number: 2,
          question: 'Line ℓ has equation 6x + 3y = 9. What is the slope of a line perpendicular to ℓ?',
          answer: 'Slope of ℓ = −A/B = −6/3 = **−2**. Perpendicular slope = negative reciprocal = **½**.',
        },
      ],
    },
  },
};
