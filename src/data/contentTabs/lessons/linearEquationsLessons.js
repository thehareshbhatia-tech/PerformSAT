export const linearEquationsLessonTabs = {

  1: {
    moduleId: 'linear-equations',
    title: 'What Is a Linear Equation?',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A linear equation is any equation whose graph is a straight line — the foundation of almost every SAT math section.',
        blocks: [
          {
            type: 'text',
            content: 'A **linear equation** has variables raised only to the first power — no $x^2$, no $\\sqrt{x}$, no $\\frac{1}{x}$. When you plot its solutions on a coordinate plane, they always form a **straight line**.',
          },
          {
            type: 'formulaGrid',
            items: [
              { label: 'Slope-Intercept', formula: '$y = mx + b$', note: 'm = slope, b = y-intercept' },
              { label: 'Point-Slope', formula: '$y - y_1 = m(x - x_1)$', note: 'Uses one known point + slope' },
              { label: 'Standard Form', formula: '$Ax + By = C$', note: 'A, B, C are integers; A > 0' },
            ],
          },
          {
            type: 'keyInsight',
            content: 'Every linear equation boils down to two numbers: the **slope** (rate of change) and the **y-intercept** (starting value). The SAT tests whether you can identify, interpret, and use these two numbers in different contexts.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        summary: 'Linear equations appear in 6–8 questions per SAT module. Recognizing the form is the first step.',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Typical Prompt',
            content: '"Which of the following represents a linear relationship?" — Look for the answer where the variable has **no exponent greater than 1** and is **not in a denominator or under a radical**.',
          },
        ],
      },
    },
  },

  2: {
    moduleId: 'linear-equations',
    title: 'What Is the Slope?',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Slope measures steepness — how much $y$ changes for each 1-unit increase in $x$.',
        blocks: [
          {
            type: 'text',
            content: 'Slope is the **rate of change** of a line. A slope of $3$ means "for every 1 step right, go 3 steps up." A slope of $-2$ means "for every 1 step right, go 2 steps down."',
          },
          {
            type: 'callout',
            variant: 'memorize',
            title: 'Slope Formula',
            content: '$$m = \\frac{y_2 - y_1}{x_2 - x_1}$$\nRise over run — the change in $y$ divided by the change in $x$.',
          },
          {
            type: 'iconRow',
            items: [
              { icon: '↗️', label: 'Positive (m > 0)', description: 'Rises left to right' },
              { icon: '↘️', label: 'Negative (m < 0)', description: 'Falls left to right' },
              { icon: '➡️', label: 'Zero (m = 0)', description: 'Horizontal line' },
              { icon: '⬆️', label: 'Undefined', description: 'Vertical line' },
            ],
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        summary: 'The SAT disguises slope behind words like "rate," "per," and "each."',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Bluebook Phrasing',
            content: '"The equation $C = 0.15m + 35$ models cost where $m$ = minutes. What does **0.15** represent?" — It\'s the slope: the cost **per additional minute**.',
          },
          {
            type: 'tip',
            content: 'Keywords for slope: **per**, **each**, **every**, **rate**, **for every**. Keywords for y-intercept: **initial**, **starting**, **base**, **flat fee**.',
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Slope Sign Error',
            wrong: 'Students swap the subtraction order of $y$-values but not $x$-values, accidentally flipping the sign.',
            correction: 'Always subtract in the **same order**: $\\frac{y_2 - y_1}{x_2 - x_1}$. If the line goes downhill left-to-right, slope must be negative.',
          },
        ],
      },
    },
  },

  3: {
    moduleId: 'linear-equations',
    title: 'Slope from Two Points',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Two points are all you need to find slope — and from there, the full equation.',
        blocks: [
          {
            type: 'callout',
            variant: 'memorize',
            title: 'The Formula',
            content: '$$m = \\frac{y_2 - y_1}{x_2 - x_1}$$\nPick either point as "point 1" — just be consistent with the order.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        summary: 'Step-by-step: two points → slope → full equation.',
        blocks: [
          {
            type: 'steps',
            title: 'Two Points → Equation',
            items: [
              'Label the points $(x_1, y_1)$ and $(x_2, y_2)$',
              'Compute $m = \\frac{y_2 - y_1}{x_2 - x_1}$ and simplify',
              'Plug $m$ and one point into point-slope form: $y - y_1 = m(x - x_1)$',
              'Simplify to slope-intercept form $y = mx + b$ if needed',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A line passes through $(2, 7)$ and $(5, 16)$. Write its equation in slope-intercept form.',
            steps: [
              { label: 'Compute slope', content: '$m = \\frac{16 - 7}{5 - 2} = \\frac{9}{3} = 3$' },
              { label: 'Point-slope', content: '$y - 7 = 3(x - 2)$' },
              { label: 'Simplify', content: '$y = 3x - 6 + 7 = 3x + 1$' },
              { label: 'Answer', content: '$y = 3x + 1$' },
            ],
          },
        ],
      },
    },
  },

  4: {
    moduleId: 'linear-equations',
    title: 'Slope from a Table',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A table of $x$/$y$ pairs is just a list of points — pick any two rows and use the slope formula.',
        blocks: [
          {
            type: 'text',
            content: 'Because the relationship is linear, **every pair of rows** gives the same slope. Choose two rows with easy numbers and compute $\\frac{\\Delta y}{\\Delta x}$.',
          },
          {
            type: 'table',
            headers: ['$x$', '$y$'],
            rows: [
              ['$0$', '$1$'],
              ['$2$', '$7$'],
              ['$4$', '$13$'],
              ['$6$', '$19$'],
            ],
          },
          {
            type: 'keyInsight',
            content: 'In the table above, using rows 1 and 2: $m = \\frac{7 - 1}{2 - 0} = \\frac{6}{2} = 3$. Every row pair gives the same result because the data is linear.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Table → Slope',
            items: [
              'Pick two rows with easy numbers (avoid large values when possible)',
              'Compute $\\Delta y = y_2 - y_1$ and $\\Delta x = x_2 - x_1$',
              'Slope $= \\frac{\\Delta y}{\\Delta x}$ — simplify the fraction',
              'Verify with a different pair of rows to confirm',
            ],
          },
          {
            type: 'tip',
            content: 'If the $x$-values increase by a **constant step** (e.g. $+2$ each row), you can read $\\Delta y$ directly from consecutive rows — no subtraction needed for $x$.',
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Non-Uniform X Steps',
            wrong: 'Students assume $x$ increases by 1 each row and just read the $y$ column differences.',
            correction: 'Always check the actual $\\Delta x$. If $x$ goes $0, 2, 4, 6$ the step is $2$, not $1$ — so you must divide $\\Delta y$ by $2$.',
          },
          {
            type: 'trapCard',
            title: 'Swapping Rise and Run',
            wrong: 'Student writes $\\frac{\\Delta x}{\\Delta y}$ instead of $\\frac{\\Delta y}{\\Delta x}$.',
            correction: 'Slope is always $\\frac{\\text{change in } y}{\\text{change in } x}$ — rise over run, not run over rise.',
          },
        ],
      },
    },
  },

  5: {
    moduleId: 'linear-equations',
    title: 'Slope from a Graph',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Pick two lattice points on the line, then count rise and run.',
        blocks: [
          {
            type: 'text',
            content: 'Find two points where the line crosses **grid intersections** (lattice points). Count the vertical distance (**rise**) and horizontal distance (**run**) between them. Slope $= \\frac{\\text{rise}}{\\text{run}}$.',
          },
          { type: 'slopeFromGraphDiagram' },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Graph → Slope',
            items: [
              'Find two points where the line clearly crosses grid lines',
              'Count squares **up or down** (rise) from the left point to the right point',
              'Count squares **right** (run) between those same two points',
              'Slope $= \\frac{\\text{rise}}{\\text{run}}$ — negative if the line falls left-to-right',
            ],
          },
        ],
      },
      speedStrategy: {
        title: 'Speed & Strategy',
        blocks: [
          {
            type: 'tip',
            content: 'On the digital SAT, DESMOS is available. Hover over two lattice points to read coordinates directly, then use $\\frac{y_2 - y_1}{x_2 - x_1}$.',
          },
        ],
      },
    },
  },

  6: {
    moduleId: 'linear-equations',
    title: 'What Is the Y-Intercept?',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'The y-intercept is where the line crosses the y-axis — the value of $y$ when $x = 0$.',
        blocks: [
          {
            type: 'text',
            content: 'In $y = mx + b$, the y-intercept is **$b$**. On a graph it\'s the point $(0, b)$. In real-world contexts it represents the **starting value** — what exists before any change occurs.',
          },
          { type: 'yInterceptDiagram' },
          {
            type: 'keyInsight',
            content: 'A gym charging \\$25/month with a \\$50 sign-up fee gives $y = 25x + 50$. The **50** is the y-intercept — the cost at month zero, before any monthly payments.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        summary: 'The SAT asks "What does the constant represent?" — always answer with the starting value.',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Typical Prompt',
            content: '"In the equation $y = 8x + 200$, what does **200** represent?" — It\'s the y-intercept: the **initial amount** when $x = 0$.',
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Rate vs. Starting Value Mix-Up',
            wrong: '"\\$3/mile plus \\$5 base" → slope = 5, intercept = 3.',
            correction: '**Per-unit** = slope (\\$3/mile). **Flat/fixed/initial** = y-intercept (\\$5 base).',
          },
        ],
      },
    },
  },

  12: {
    moduleId: 'linear-equations',
    title: 'Parallel Lines',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Parallel lines never intersect because they share the same slope but have different y-intercepts.',
        blocks: [
          {
            type: 'text',
            content: 'Two lines are **parallel** when they have the **same slope** but **different y-intercepts**. Because they rise and run at exactly the same rate, they never cross — they stay the same distance apart forever.',
          },
          { type: 'parallelLinesDiagram' },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Same Slope + Same Intercept?',
            content: 'If both slope AND y-intercept match, the two equations describe the **same line**, not parallel lines.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        summary: 'Parallel-line questions ask you to match slopes, often through systems with "no solution."',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'No-Solution System',
            content: '"The system has no solution. What is the value of $k$?" — No solution means the lines are parallel. Set their slopes equal: $\\frac{-A_1}{B_1} = \\frac{-A_2}{B_2}$, then solve for $k$.',
          },
          {
            type: 'text',
            content: 'For standard form $Ax + By = C$, the slope is $\\frac{-A}{B}$. Convert both equations to this form, set slopes equal, and solve for the unknown.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Writing a Parallel Line Through a Given Point',
            items: [
              'Find (or read) the slope $m$ of the given line',
              'Use that **same slope** with the new point: $y - y_1 = m(x - x_1)$',
              'Simplify to match the answer format',
            ],
          },
        ],
      },
      speedStrategy: {
        title: 'Speed & Strategy',
        blocks: [
          {
            type: 'strategyCard',
            title: 'Instant Parallel Check',
            icon: '⚡',
            timing: '~10s',
            content: 'Parallel = same slope. Read slope from each answer choice ($\\frac{-A}{B}$ for standard form) and match to the original line. No full algebra needed.',
          },
        ],
      },
    },
  },

  22: {
    moduleId: 'linear-equations',
    title: 'Perpendicular Lines',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Perpendicular lines meet at $90°$ — their slopes are negative reciprocals.',
        blocks: [
          {
            type: 'text',
            content: 'Two lines are **perpendicular** when they intersect at a **right angle** ($90°$). This happens exactly when the product of their slopes equals $-1$: $m_1 \\cdot m_2 = -1$.',
          },
          { type: 'perpendicularLinesDiagram' },
          {
            type: 'table',
            title: 'Negative Reciprocal Examples',
            headers: ['Original Slope', 'Perpendicular Slope', 'Check: Product = $-1$'],
            rows: [
              ['$2$', '$-\\frac{1}{2}$', '$2 \\times (-\\frac{1}{2}) = -1$ ✓'],
              ['$-\\frac{3}{4}$', '$\\frac{4}{3}$', '$-\\frac{3}{4} \\times \\frac{4}{3} = -1$ ✓'],
              ['$\\frac{1}{5}$', '$-5$', '$\\frac{1}{5} \\times (-5) = -1$ ✓'],
            ],
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Writing a Perpendicular Line',
            items: [
              'Find the slope of the given line (use $\\frac{-A}{B}$ for standard form)',
              '**Flip** the fraction and **negate** it: $m \\to -\\frac{1}{m}$',
              'Plug the new slope and the given point into $y - y_1 = m_{\\perp}(x - x_1)$',
              'Simplify and verify',
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Flip Only — Forgot to Negate',
            wrong: 'Perpendicular slope of $2$ → $\\frac{1}{2}$. Student flipped but forgot to negate.',
            correction: 'Perpendicular means **negative reciprocal**: $2 \\to -\\frac{1}{2}$. Always flip AND negate.',
          },
          {
            type: 'trapCard',
            title: 'Negate Only — Forgot to Flip',
            wrong: 'Perpendicular slope of $2$ → $-2$. Student negated but forgot to flip.',
            correction: 'Both operations are required: flip gives $\\frac{1}{2}$, then negate gives $-\\frac{1}{2}$.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'The line $4x - 2y = 10$ is given. A second line is perpendicular and passes through $(6, 1)$. What is the equation of the second line?',
            steps: [
              { label: 'Find given slope', content: 'Slope $= \\frac{-A}{B} = \\frac{-4}{-2} = 2$' },
              { label: 'Perpendicular slope', content: 'Negative reciprocal of $2$ is $-\\frac{1}{2}$' },
              { label: 'Point-slope', content: '$y - 1 = -\\frac{1}{2}(x - 6)$' },
              { label: 'Simplify', content: '$y = -\\frac{1}{2}x + 3 + 1 = -\\frac{1}{2}x + 4$' },
              { label: 'Verify', content: 'Plug $(6,1)$: $-\\frac{1}{2}(6) + 4 = -3 + 4 = 1$ ✓' },
            ],
          },
        ],
      },
    },
  },
};
