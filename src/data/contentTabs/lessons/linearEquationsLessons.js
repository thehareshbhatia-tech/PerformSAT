export const linearEquationsLessonTabs = {

  1: {
    moduleId: 'linear-equations',
    title: 'What Is a Linear Equation?',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A linear equation is any equation whose graph is a straight line.',
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
            content: 'Every linear equation boils down to two numbers: the **slope** (rate of change) and the **y-intercept** (starting value). Most SAT linear-equation questions test whether you can identify, interpret, or use these two numbers across different representations.',
          },
          {
            type: 'table',
            headers: ['Form', 'When to Use It'],
            rows: [
              ['$y = mx + b$', 'Reading slope and intercept directly, graphing quickly'],
              ['$y - y_1 = m(x - x_1)$', 'Building an equation from a point and a slope'],
              ['$Ax + By = C$', 'Systems of equations, integer-coefficient questions'],
            ],
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Recognition Cue',
            content: '"Which of the following represents a linear relationship?" — Scan each choice: if the variable has an exponent other than $1$, sits in a denominator, or appears under a radical, eliminate it. The linear option looks like $y = mx + b$ or $Ax + By = C$.',
          },
          {
            type: 'trapCard',
            title: 'Constants Are Linear Too',
            wrong: 'Student sees $y = 5$ (no $x$ at all) and marks it as "not linear."',
            correction: '$y = 5$ is a horizontal line — perfectly linear. It is $y = 0x + 5$. Linearity requires the highest power of $x$ to be $\\leq 1$, and zero counts.',
          },
          {
            type: 'trapCard',
            title: 'Products of Variables Are Not Linear',
            wrong: 'Student sees $xy = 12$ and treats it as linear because each variable is to the first power.',
            correction: '$xy = 12$ is a hyperbola, not a line. Linear equations never multiply two variables together. Each term contains at most one variable.',
          },
          {
            type: 'tip',
            content: 'When four answer choices mix quadratics, reciprocals, and radicals with one linear option, elimination is faster than verification. Cross off anything with $x^2$, $\\frac{1}{x}$, or $\\sqrt{x}$ first.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Converting Between Forms',
            items: [
              'Standard $\\to$ Slope-Intercept: isolate $y$. From $Ax + By = C$, subtract $Ax$, then divide by $B$: $y = -\\frac{A}{B}x + \\frac{C}{B}$.',
              'Slope-Intercept $\\to$ Standard: multiply through to clear fractions, then rearrange so $Ax + By = C$ with $A > 0$.',
              'Point-Slope $\\to$ Slope-Intercept: distribute $m$ across $(x - x_1)$, then add $y_1$ to both sides.',
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Sign Error in Standard Form Conversion',
            wrong: 'Converting $3x + 2y = 8$ to slope-intercept: student writes $y = \\frac{3}{2}x + 4$.',
            correction: 'Subtracting $3x$ from both sides gives $2y = -3x + 8$, so $y = -\\frac{3}{2}x + 4$. The slope is negative because you subtracted.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Which of the following equations is linear?\n(A) $y = x^2 + 3$\n(B) $y = \\frac{2}{x}$\n(C) $y = 4x - 7$\n(D) $y = \\sqrt{x} + 1$',
            steps: [
              { label: 'Scan exponents', content: '(A) has $x^2$ — not linear. (B) has $x$ in denominator ($x^{-1}$) — not linear. (D) has $\\sqrt{x}$ ($x^{1/2}$) — not linear.' },
              { label: 'Confirm', content: '(C) $y = 4x - 7$ matches $y = mx + b$ with $m = 4$, $b = -7$.' },
              { label: 'Answer', content: '**(C)**' },
            ],
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
            type: 'formula',
            label: 'Slope Formula',
            content: '$$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{\\text{rise}}{\\text{run}}$$',
          },
          {
            type: 'iconRow',
            items: [
              { icon: 'trending_up', label: 'Positive ($m > 0$)', description: 'Rises left to right' },
              { icon: 'trending_down', label: 'Negative ($m < 0$)', description: 'Falls left to right' },
              { icon: 'arrow_right_alt', label: 'Zero ($m = 0$)', description: 'Horizontal line' },
              { icon: 'height', label: 'Undefined', description: 'Vertical line ($\\Delta x = 0$)' },
            ],
          },
          {
            type: 'keyInsight',
            content: 'In word problems, slope is always the **"per" quantity**: cost *per* item, miles *per* hour, points *per* game. The y-intercept is the **"starting" quantity**: initial fee, starting balance, base cost.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"What Does the Number Represent?"',
            content: '"The equation $C = 0.15m + 35$ models the monthly cost, in dollars, where $m$ is the number of minutes used. What does $0.15$ represent?" — It is the coefficient of $m$, so it is the **rate**: the cost per additional minute.',
          },
          {
            type: 'trapCard',
            title: 'Slope vs. Intercept in Context',
            wrong: '"A gym charges \\$25/month with a \\$50 sign-up fee." Student says \\$50 is the slope.',
            correction: '**Per-unit** = slope (\\$25/month). **One-time/initial** = intercept (\\$50). If the value repeats per unit, it is the slope. If it happens once, it is the intercept.',
          },
          {
            type: 'tip',
            content: 'Slope keywords: **per**, **each**, **every**, **for every**, **rate of**. Intercept keywords: **initial**, **starting**, **base fee**, **already**, **at time zero**.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Reading Slope from Any Form',
            items: [
              'Slope-intercept $y = mx + b$: slope is $m$, the coefficient of $x$.',
              'Standard form $Ax + By = C$: slope is $-\\frac{A}{B}$. Isolate $y$ mentally or on paper.',
              'Point-slope $y - y_1 = m(x - x_1)$: slope is $m$, the number in front of the parentheses.',
              'Two points given: $m = \\frac{y_2 - y_1}{x_2 - x_1}$.',
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Slope Sign Error from Standard Form',
            wrong: 'From $3x + 4y = 12$, student reads slope as $\\frac{3}{4}$.',
            correction: 'The slope from standard form is $-\\frac{A}{B} = -\\frac{3}{4}$. The negative sign is mandatory because you are subtracting $Ax$ when isolating $y$.',
          },
          {
            type: 'trapCard',
            title: 'Subtraction-Order Mismatch',
            wrong: 'Students swap the subtraction order of $y$-values but not $x$-values, accidentally flipping the sign.',
            correction: 'Always subtract in the **same order**: $\\frac{y_2 - y_1}{x_2 - x_1}$. If the line goes downhill left-to-right, slope must be negative.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A plumber charges a \\$60 service fee plus \\$45 per hour of labor. The total cost $C$ for $h$ hours is modeled by $C = 45h + 60$. What does the $45$ represent in context?',
            steps: [
              { label: 'Identify position', content: '$45$ is the coefficient of $h$ — the variable. That makes it the **slope**.' },
              { label: 'Interpret in context', content: 'Slope = rate of change = cost **per hour** of labor.' },
              { label: 'Answer', content: 'The $45$ represents the cost, in dollars, for each additional hour of labor.' },
            ],
          },
        ],
      },
    },
  },

  3: {
    moduleId: 'linear-equations',
    title: 'Determining Slope from Two Coordinates',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Two points are all you need to find slope — and from there, the full equation.',
        blocks: [
          {
            type: 'formula',
            label: 'Slope from Two Points',
            content: '$$m = \\frac{y_2 - y_1}{x_2 - x_1}$$',
          },
          {
            type: 'text',
            content: 'Pick either point as "point 1" — just be consistent with the order. Subtracting in the same direction for both numerator and denominator guarantees the correct sign.',
          },
          {
            type: 'keyInsight',
            content: 'Once you have the slope, plug it and either point into **point-slope form** $y - y_1 = m(x - x_1)$ to get the full equation. This two-step process (slope first, then equation) handles almost every "find the equation" question on the SAT.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Recognition Cue',
            content: 'Two points given as ordered pairs or embedded in a word problem (e.g., "in 2010 the value was $300$ and in 2015 it was $450$"). First move: label the points and apply $m = \\frac{y_2 - y_1}{x_2 - x_1}$.',
          },
          {
            type: 'trapCard',
            title: 'Subtraction Order Mismatch',
            wrong: 'Points $(2, 5)$ and $(6, 17)$. Student writes $\\frac{17 - 5}{2 - 6} = \\frac{12}{-4} = -3$.',
            correction: 'The student subtracted $y$-values as $(y_2 - y_1)$ but $x$-values as $(x_1 - x_2)$. Both must use the same order: $\\frac{17 - 5}{6 - 2} = \\frac{12}{4} = 3$.',
          },
          {
            type: 'tip',
            content: 'If the problem gives two points, use the slope formula then point-slope. If it gives a table, pick the two easiest rows. If it gives a graph, count rise/run between two lattice points.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Two Points to Full Equation',
            items: [
              'Label the points $(x_1, y_1)$ and $(x_2, y_2)$.',
              'Compute $m = \\frac{y_2 - y_1}{x_2 - x_1}$ and simplify.',
              'Plug $m$ and one point into point-slope form: $y - y_1 = m(x - x_1)$.',
              'Distribute and simplify to slope-intercept form $y = mx + b$ if the question requires it.',
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Swapping Rise and Run',
            wrong: 'Student computes $\\frac{x_2 - x_1}{y_2 - y_1}$ — run over rise.',
            correction: 'Slope is always $\\frac{\\Delta y}{\\Delta x}$ — rise over run. The $y$-difference goes on top.',
          },
          {
            type: 'trapCard',
            title: 'Word Problem Point Extraction',
            wrong: '"In 2018 the population was $4{,}200$ and in 2023 it was $5{,}700$." Student uses $(2018, 2023)$ and $(4200, 5700)$.',
            correction: 'Years are the $x$-values, population values are the $y$-values: $(2018, 4200)$ and $(2023, 5700)$. Slope $= \\frac{5700 - 4200}{2023 - 2018} = \\frac{1500}{5} = 300$ people/year.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
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
    title: 'Determining Slope from a Table',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A table of $x$/$y$ pairs is just a list of points — pick any two rows and apply the slope formula.',
        blocks: [
          {
            type: 'text',
            content: 'Because the relationship is linear, **every pair of rows** gives the same slope. Choose two rows with the smallest numbers and compute $\\frac{\\Delta y}{\\Delta x}$.',
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
            content: 'Using rows 1 and 2: $m = \\frac{7 - 1}{2 - 0} = \\frac{6}{2} = 3$. Every row pair yields the same result because the data is linear. If a row where $x = 0$ exists, it directly gives you the y-intercept.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Table Rate-of-Change Questions',
            content: 'Recognition cue: a two-column table with a question about rate, slope, or "change per unit." First move: pick any two rows and compute $\\frac{\\Delta y}{\\Delta x}$. If the rate is constant, the relationship is linear.',
          },
          {
            type: 'trapCard',
            title: 'Non-Uniform $x$ Steps',
            wrong: 'Table has $x = 0, 2, 4, 6$ and $y = 1, 7, 13, 19$. Student reads $\\Delta y = 6$ from consecutive rows and writes slope $= 6$.',
            correction: 'The $x$-step is $2$, not $1$. Slope $= \\frac{\\Delta y}{\\Delta x} = \\frac{6}{2} = 3$. Always divide by the actual $\\Delta x$.',
          },
          {
            type: 'tip',
            content: 'If $x$ increases by a constant step $d$, compute $\\frac{\\Delta y}{d}$ once. For linear data, every pair gives the same slope — no need to check every row.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Table to Slope',
            items: [
              'Pick two rows with easy numbers (avoid large values when possible).',
              'Compute $\\Delta y = y_2 - y_1$ and $\\Delta x = x_2 - x_1$.',
              'Slope $= \\frac{\\Delta y}{\\Delta x}$ — simplify the fraction.',
              'Optional verification: repeat with a different pair of rows to confirm linearity.',
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Assuming $\\Delta x = 1$',
            wrong: 'Students assume $x$ increases by $1$ each row and just read the $y$-column differences as the slope.',
            correction: 'Always check the actual $\\Delta x$. If $x$ goes $0, 2, 4, 6$ the step is $2$, not $1$ — so divide $\\Delta y$ by $2$.',
          },
          {
            type: 'trapCard',
            title: 'Swapping Rise and Run',
            wrong: 'Student writes $\\frac{\\Delta x}{\\Delta y}$ instead of $\\frac{\\Delta y}{\\Delta x}$.',
            correction: 'Slope is always $\\frac{\\text{change in } y}{\\text{change in } x}$ — rise over run, not run over rise.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'The table below shows a linear relationship. Find the slope and equation.\n| $x$ | $y$ |\n|-----|-----|\n| $1$ | $10$ |\n| $3$ | $16$ |\n| $5$ | $22$ |\n| $7$ | $28$ |',
            steps: [
              { label: 'Pick two rows', content: 'Use $(1, 10)$ and $(3, 16)$.' },
              { label: 'Compute slope', content: '$m = \\frac{16 - 10}{3 - 1} = \\frac{6}{2} = 3$' },
              { label: 'Find intercept', content: 'Using $(1, 10)$: $10 = 3(1) + b \\Rightarrow b = 7$' },
              { label: 'Answer', content: '$y = 3x + 7$' },
            ],
          },
        ],
      },
    },
  },

  5: {
    moduleId: 'linear-equations',
    title: 'Determining Slope from a Graph',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Pick two lattice points on the line, then count rise and run.',
        blocks: [
          {
            type: 'text',
            content: 'Find two points where the line crosses **grid intersections** (lattice points). Count the vertical distance (**rise**) and horizontal distance (**run**) between them. Slope $= \\frac{\\text{rise}}{\\text{run}}$.',
          },
          {
            type: 'keyInsight',
            content: 'Lattice points eliminate guesswork. If you read coordinates from non-integer positions on the grid, rounding errors will give you the wrong slope. Always locate points that land squarely on grid intersections.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Graph Slope Questions',
            content: 'Recognition cue: a graph of a line with gridlines visible. First move: find two points where the line passes through grid intersections. Count the vertical change (rise) and horizontal change (run) between them.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting the Negative Sign',
            wrong: 'Line goes downhill left to right. Student counts rise $= 3$ and run $= 2$, writes slope $= \\frac{3}{2}$.',
            correction: 'A downhill line has a **negative** slope. If you move right and the line goes down, the rise is negative: slope $= -\\frac{3}{2}$.',
          },
          {
            type: 'trapCard',
            title: 'Misreading Graph Scale',
            wrong: 'Each grid square represents $2$ units, but the student counts squares as single units.',
            correction: 'Check axis labels before counting. If the scale is $2$ units per grid line, a rise of $3$ grid squares means $\\Delta y = 6$.',
          },
          {
            type: 'tip',
            content: 'On the digital SAT, DESMOS is available. Click two clear lattice points, note their coordinates, and use $\\frac{y_2 - y_1}{x_2 - x_1}$. This eliminates counting errors.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Graph to Slope',
            items: [
              'Identify two points where the line clearly crosses grid intersections.',
              'Check the axis scale (each grid square may represent more than $1$ unit).',
              'Count squares **up or down** (rise) from the left point to the right point.',
              'Count squares **right** (run) between those same two points.',
              'Slope $= \\frac{\\text{rise}}{\\text{run}}$ — attach a negative sign if the line falls left-to-right.',
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Non-Integer Lattice Points',
            wrong: 'Student picks a point that looks like it is on a grid intersection but is actually between lines.',
            correction: 'Trace the line carefully. If a point does not land exactly on an intersection, pick a different one. Using approximate coordinates leads to wrong slopes.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'A line on a coordinate grid passes through $(1, 2)$ and $(4, 8)$. What is its slope?',
            steps: [
              { label: 'Apply formula', content: '$m = \\frac{8 - 2}{4 - 1} = \\frac{6}{3} = 2$' },
              { label: 'Verify direction', content: 'Line goes uphill left-to-right, so positive slope is correct.' },
              { label: 'Answer', content: '$m = 2$' },
            ],
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
            content: 'In $y = mx + b$, the y-intercept is **$b$**. On a graph it is the point $(0, b)$. In real-world contexts it represents the **starting value** — what exists before any change occurs.',
          },
          {
            type: 'formula',
            label: 'Finding the Y-Intercept',
            content: '$$\\text{Set } x = 0: \\quad y = m(0) + b = b$$',
          },
          {
            type: 'keyInsight',
            content: 'A gym charging \\$25/month with a \\$50 sign-up fee gives $y = 25x + 50$. The **50** is the y-intercept — the cost at month zero, before any monthly payments.',
          },
          {
            type: 'table',
            headers: ['Context Clue', 'Role'],
            rows: [
              ['"\\$5 per mile"', 'Slope (rate)'],
              ['"\\$10 base fare"', 'Y-intercept (starting value)'],
              ['"increases by 3 each year"', 'Slope (rate)'],
              ['"originally had 200"', 'Y-intercept (starting value)'],
            ],
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Interpretation Questions',
            content: '"In the equation $P = 8t + 200$, what does $200$ represent?" — Plug in $t = 0$: $P = 200$. The $200$ is the value before any time passes — the initial amount.',
          },
          {
            type: 'trapCard',
            title: 'Confusing the Rate with the Start',
            wrong: '"A tank drains at $8$ gallons/minute and starts with $200$ gallons." Student labels $8$ as the initial value.',
            correction: 'The number attached to the variable ($8t$) is the rate (slope). The standalone constant ($200$) is the starting value (y-intercept).',
          },
          {
            type: 'tip',
            content: 'If a question asks "what does the **number** represent," identify whether it is the coefficient (rate/slope) or the constant term (initial value/y-intercept). The meaning always follows from position in $y = mx + b$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Finding the Y-Intercept from Different Representations',
            items: [
              'From $y = mx + b$: the intercept is $b$ (read it directly).',
              'From $Ax + By = C$: set $x = 0$ and solve: $b = \\frac{C}{B}$.',
              'From a table: look for the row where $x = 0$. If none exists, find the equation first.',
              'From a graph: find where the line crosses the $y$-axis.',
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Rate vs. Starting Value Mix-Up',
            wrong: '"\\$3/mile plus \\$5 base" gives slope $= 5$, intercept $= 3$.',
            correction: '**Per-unit** = slope (\\$3/mile). **Flat/fixed/initial** = y-intercept (\\$5 base).',
          },
          {
            type: 'trapCard',
            title: 'Standard Form Intercept Misread',
            wrong: 'From $2x + 5y = 20$, student reads $20$ as the y-intercept.',
            correction: 'Set $x = 0$: $5y = 20 \\Rightarrow y = 4$. The y-intercept is $4$, not $20$.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A water tank starts with $500$ gallons and drains at $15$ gallons per minute. Write the equation and identify the y-intercept in context.',
            steps: [
              { label: 'Set up equation', content: '$W = -15t + 500$ where $W$ is gallons remaining and $t$ is minutes.' },
              { label: 'Identify intercept', content: 'The y-intercept is $500$ (the constant term).' },
              { label: 'Interpret', content: 'At $t = 0$, the tank holds $500$ gallons — the y-intercept represents the initial amount of water.' },
            ],
          },
        ],
      },
    },
  },

  7: {
    moduleId: 'linear-equations',
    title: 'Deriving Linear Equations from Context',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'How to translate a word problem into $y = mx + b$ by identifying the rate and starting value.',
        blocks: [
          {
            type: 'text',
            content: 'Every linear word problem contains two pieces: a **rate** (slope) and a **starting value** (y-intercept). The rate is the quantity that changes per unit, and the starting value is what exists at $x = 0$.',
          },
          {
            type: 'formula',
            label: 'Translation Template',
            content: '$$\\text{Total} = (\\text{rate per unit}) \\times (\\text{number of units}) + \\text{starting value}$$',
          },
          {
            type: 'keyInsight',
            content: 'Map the language directly: "per," "each," "every" attach to the slope. "Initially," "already," "starts with," "base fee" attach to the y-intercept. Negative slopes appear when quantities **decrease**: "loses," "drains," "depreciates."',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Context-to-Equation Questions',
            content: 'Recognition cue: a paragraph describing a real-world scenario followed by "which equation models..." or "which function represents..." First move: identify the rate (slope) and starting value (intercept) from the text.',
          },
          {
            type: 'trapCard',
            title: 'Negative Rate Missed',
            wrong: '"A candle is $12$ inches tall and burns at $0.5$ inches per hour." Student writes $h = 0.5t + 12$.',
            correction: 'Burning **reduces** the height, so the rate is negative: $h = -0.5t + 12$. Words like "burns," "drains," "decreases," "loses" signal negative slope.',
          },
          {
            type: 'tip',
            content: 'After writing your equation, plug in a value from the problem to verify. If "after $4$ hours the candle is $10$ inches," check: $-0.5(4) + 12 = 10$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Word Problem to Equation',
            items: [
              'Define variables: identify what $x$ (independent) and $y$ (dependent) represent.',
              'Find the slope: locate the "per unit" quantity. Decide positive (increasing) or negative (decreasing).',
              'Find the y-intercept: locate the starting/initial/base value.',
              'Assemble: $y = mx + b$.',
              'Verify: plug in one data point from the problem to confirm.',
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
            problem: 'A phone plan charges a \\$20 monthly fee plus \\$0.10 per text message. Write an equation for the monthly cost $C$ in terms of the number of text messages $t$.',
            steps: [
              { label: 'Define variables', content: '$t$ = number of texts, $C$ = monthly cost in dollars.' },
              { label: 'Identify slope', content: '\\$0.10 per text $\\Rightarrow m = 0.10$.' },
              { label: 'Identify intercept', content: '\\$20 monthly fee (charged regardless of texts) $\\Rightarrow b = 20$.' },
              { label: 'Assemble', content: '$C = 0.10t + 20$' },
              { label: 'Verify', content: 'At $t = 0$: $C = 20$. At $t = 100$: $C = 0.10(100) + 20 = 30$.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'A pool contains $10{,}000$ gallons and drains at $250$ gallons per hour. Write the equation for the water level $W$ after $h$ hours.',
            answer: '$W = -250h + 10{,}000$. The slope is $-250$ (draining decreases the level) and the y-intercept is $10{,}000$ (the starting amount).',
          },
        ],
      },
    },
  },

  8: {
    moduleId: 'linear-equations',
    title: 'Deriving Linear Equations from a Graph (Example 1)',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'How to read a graph and extract the equation $y = mx + b$ using the y-intercept and a second point.',
        blocks: [
          {
            type: 'text',
            content: 'To derive an equation from a graph: (1) find the **y-intercept** where the line crosses the $y$-axis, and (2) use a second lattice point to calculate **slope**. Together these give you $y = mx + b$.',
          },
          {
            type: 'keyInsight',
            content: 'If the y-intercept is clearly visible (the line crosses the $y$-axis at an integer), read $b$ directly. Then pick any second lattice point to compute slope. This is faster than using two arbitrary points.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Graph-to-Equation Questions',
            content: 'Recognition cue: a graph with a line drawn and answer choices showing equations. First move: read the y-intercept from the graph to eliminate choices, then verify slope with two points.',
          },
          {
            type: 'trapCard',
            title: 'Reading the Wrong Axis',
            wrong: 'Student reads the $x$-intercept instead of the $y$-intercept for the value of $b$.',
            correction: 'The y-intercept is where the line crosses the **vertical** axis ($x = 0$). The $x$-intercept is where it crosses the horizontal axis ($y = 0$).',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Graph to Equation (Y-Intercept Visible)',
            items: [
              'Read the y-intercept: where does the line cross the $y$-axis? That value is $b$.',
              'Pick a second lattice point $(x_2, y_2)$ on the line.',
              'Compute slope: $m = \\frac{y_2 - b}{x_2 - 0} = \\frac{y_2 - b}{x_2}$.',
              'Write the equation: $y = mx + b$.',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'A line on a graph crosses the $y$-axis at $(0, 3)$ and passes through $(4, 11)$. Find the equation.',
            steps: [
              { label: 'Read intercept', content: '$b = 3$' },
              { label: 'Compute slope', content: '$m = \\frac{11 - 3}{4 - 0} = \\frac{8}{4} = 2$' },
              { label: 'Write equation', content: '$y = 2x + 3$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'A line crosses the $y$-axis at $(0, -2)$ and passes through $(3, 7)$. What is the equation?',
            answer: 'Slope $= \\frac{7 - (-2)}{3 - 0} = \\frac{9}{3} = 3$. Equation: $y = 3x - 2$.',
          },
        ],
      },
    },
  },

  9: {
    moduleId: 'linear-equations',
    title: 'Deriving Linear Equations from a Graph (Example 2)',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'When the y-intercept is not visible on the graph, use two lattice points and point-slope form.',
        blocks: [
          {
            type: 'text',
            content: 'Sometimes the y-intercept falls outside the visible portion of the graph. In that case, pick **any two lattice points**, compute slope, then use **point-slope form** to build the equation.',
          },
          {
            type: 'formula',
            label: 'Point-Slope Form',
            content: '$$y - y_1 = m(x - x_1)$$',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Partial Graph Questions',
            content: 'Recognition cue: the graph window does not include the $y$-axis, or the line crosses the $y$-axis between grid lines. First move: find two clear lattice points, compute slope, then use point-slope form.',
          },
          {
            type: 'trapCard',
            title: 'Estimating a Non-Integer Intercept',
            wrong: 'The line appears to cross the $y$-axis at roughly $2.5$, so student writes $b = 2.5$ without verification.',
            correction: 'Eyeballing leads to errors. Compute slope from two lattice points, then solve $b = y_1 - mx_1$ algebraically for the exact intercept.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Graph to Equation (No Visible Y-Intercept)',
            items: [
              'Find two lattice points on the line: $(x_1, y_1)$ and $(x_2, y_2)$.',
              'Compute slope: $m = \\frac{y_2 - y_1}{x_2 - x_1}$.',
              'Plug into point-slope form: $y - y_1 = m(x - x_1)$.',
              'Simplify to $y = mx + b$ to find the intercept algebraically.',
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
            problem: 'A graph shows a line passing through $(2, 5)$ and $(6, 17)$. The $y$-axis is not visible. Find the equation.',
            steps: [
              { label: 'Compute slope', content: '$m = \\frac{17 - 5}{6 - 2} = \\frac{12}{4} = 3$' },
              { label: 'Point-slope', content: '$y - 5 = 3(x - 2)$' },
              { label: 'Simplify', content: '$y = 3x - 6 + 5 = 3x - 1$' },
              { label: 'Answer', content: '$y = 3x - 1$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'A line passes through $(3, 1)$ and $(7, 9)$. Write the equation in slope-intercept form.',
            answer: 'Slope $= \\frac{9 - 1}{7 - 3} = \\frac{8}{4} = 2$. Using $(3, 1)$: $y - 1 = 2(x - 3) \\Rightarrow y = 2x - 5$.',
          },
        ],
      },
    },
  },

  10: {
    moduleId: 'linear-equations',
    title: 'Deriving Linear Equations from a Table',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'How to extract a linear equation from a table by finding slope from two rows, then solving for the intercept.',
        blocks: [
          {
            type: 'text',
            content: 'A table of $(x, y)$ values represents a linear relationship if $\\frac{\\Delta y}{\\Delta x}$ is constant between every pair of rows. To write the equation: find the slope from any two rows, then use one row to solve for $b$.',
          },
          {
            type: 'keyInsight',
            content: 'If the table includes the row where $x = 0$, the $y$-value in that row **is** the y-intercept — no algebra needed. Always scan for this shortcut first.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Table-to-Equation Questions',
            content: 'Recognition cue: a table with input/output columns and a question asking for the equation or a prediction. First move: compute slope from two rows, then identify or solve for the intercept.',
          },
          {
            type: 'trapCard',
            title: 'Ignoring Non-Uniform $x$ Steps',
            wrong: 'Table has $x = 2, 5, 8, 11$ and student subtracts consecutive $y$-values but forgets the $x$-step is $3$.',
            correction: 'Slope $= \\frac{\\Delta y}{\\Delta x}$. Here $\\Delta x = 3$, so divide the $y$-difference by $3$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Table to Equation',
            items: [
              'Pick two rows with convenient numbers. Compute slope: $m = \\frac{y_2 - y_1}{x_2 - x_1}$.',
              'Check for $x = 0$ in the table. If present, that $y$-value is $b$.',
              'If $x = 0$ is absent, plug $m$ and any row $(x_1, y_1)$ into $b = y_1 - mx_1$.',
              'Write the equation: $y = mx + b$.',
              'Verify by checking a row you did not use.',
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
            problem: 'Find the equation for the linear relationship:\n| $x$ | $y$ |\n|-----|-----|\n| $2$ | $11$ |\n| $5$ | $20$ |\n| $8$ | $29$ |',
            steps: [
              { label: 'Compute slope', content: '$m = \\frac{20 - 11}{5 - 2} = \\frac{9}{3} = 3$' },
              { label: 'Find intercept', content: 'Using $(2, 11)$: $b = 11 - 3(2) = 5$' },
              { label: 'Write equation', content: '$y = 3x + 5$' },
              { label: 'Verify', content: 'Check $(8, 29)$: $3(8) + 5 = 29$.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'A table shows $(0, 4)$, $(3, 13)$, $(6, 22)$. What is the equation?',
            answer: 'Slope $= \\frac{13 - 4}{3 - 0} = \\frac{9}{3} = 3$. The row $x = 0$ gives $b = 4$. Equation: $y = 3x + 4$.',
          },
        ],
      },
    },
  },

  11: {
    moduleId: 'linear-equations',
    title: 'Deriving Linear Equations from Function Notation',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Function notation like $f(2) = 7$ gives you a point — two such statements give two points to build a linear equation.',
        blocks: [
          {
            type: 'text',
            content: '$f(x) = mx + b$ is just $y = mx + b$ with different notation. The statement $f(2) = 7$ means "when $x = 2$, $y = 7$" — giving you the point $(2, 7)$. Two such statements give two points, which is all you need.',
          },
          {
            type: 'formula',
            label: 'Translation Rule',
            content: '$$f(a) = c \\quad\\Longrightarrow\\quad \\text{the point } (a, c)$$',
          },
          {
            type: 'keyInsight',
            content: '$f(0)$ is the y-intercept. If you see $f(0) = k$, then $b = k$ immediately — no calculation needed.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Function Notation Questions',
            content: 'Recognition cue: "A linear function $f$ satisfies $f(3) = 10$ and $f(7) = 22$. Find $f(x)$." First move: convert to points $(3, 10)$ and $(7, 22)$, compute slope, then use point-slope form.',
          },
          {
            type: 'trapCard',
            title: 'Confusing $f(x)$ with Multiplication',
            wrong: 'Student interprets $f(3) = 10$ as "$f$ times $3$ equals $10$" and writes $f = \\frac{10}{3}$.',
            correction: '$f(3) = 10$ means "the function $f$ evaluated at $x = 3$ outputs $10$." It represents the point $(3, 10)$, not a product.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Function Notation to Equation',
            items: [
              'Convert each statement to a point: $f(a) = c \\to (a, c)$.',
              'Compute slope: $m = \\frac{c_2 - c_1}{a_2 - a_1}$.',
              'Use point-slope form with either point: $f(x) - c_1 = m(x - a_1)$.',
              'Simplify to $f(x) = mx + b$.',
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
            problem: 'A linear function satisfies $f(3) = 10$ and $f(7) = 22$. Find $f(x)$.',
            steps: [
              { label: 'Convert to points', content: '$(3, 10)$ and $(7, 22)$' },
              { label: 'Compute slope', content: '$m = \\frac{22 - 10}{7 - 3} = \\frac{12}{4} = 3$' },
              { label: 'Point-slope', content: '$f(x) - 10 = 3(x - 3)$' },
              { label: 'Simplify', content: '$f(x) = 3x - 9 + 10 = 3x + 1$' },
              { label: 'Verify', content: '$f(7) = 3(7) + 1 = 22$.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'A linear function satisfies $g(0) = 5$ and $g(4) = 17$. Find $g(x)$.',
            answer: '$g(0) = 5$ gives $b = 5$ directly. Slope $= \\frac{17 - 5}{4 - 0} = \\frac{12}{4} = 3$. So $g(x) = 3x + 5$.',
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
            content: 'Two lines are **parallel** when they have the **same slope** but **different y-intercepts**. Because they rise and run at the same rate, they never cross.',
          },
          {
            type: 'formula',
            label: 'Parallel Condition',
            content: '$$\\text{Lines are parallel} \\iff m_1 = m_2 \\text{ and } b_1 \\neq b_2$$',
          },
          {
            type: 'keyInsight',
            content: 'In standard form $Ax + By = C$, the slope is $-\\frac{A}{B}$. Two equations in standard form are parallel when $\\frac{A_1}{B_1} = \\frac{A_2}{B_2}$ but $\\frac{C_1}{B_1} \\neq \\frac{C_2}{B_2}$.',
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Same Slope + Same Intercept?',
            content: 'If both slope AND y-intercept match, the two equations describe the **same line** (infinitely many solutions), not parallel lines (no solution).',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"No Solution" = Parallel',
            content: '"The system of equations has no solution. What is the value of $k$?" — "No solution" on a linear system always means parallel lines. Extract slopes from both equations, set them equal, and solve for $k$.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting the Intercept Check',
            wrong: 'Student sets slopes equal, finds $k$, but does not verify the intercepts differ.',
            correction: 'Equal slopes + equal intercepts = same line (infinitely many solutions, not zero). After finding $k$, confirm the constant terms differ.',
          },
          {
            type: 'tip',
            content: '"No solution" means set slopes equal. "Infinitely many solutions" means set slopes equal AND set intercepts (or constant ratios) equal. The question stem tells you which condition to use.',
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
              'Find (or read) the slope $m$ of the given line.',
              'Use that **same slope** with the new point: $y - y_1 = m(x - x_1)$.',
              'Simplify to match the answer format (slope-intercept or standard).',
            ],
          },
          {
            type: 'steps',
            title: 'Finding $k$ for No-Solution Systems',
            items: [
              'Convert both equations so slopes are visible. For standard form $Ax + By = C$: slope $= -\\frac{A}{B}$.',
              'Set the slopes equal: $-\\frac{A_1}{B_1} = -\\frac{A_2}{B_2}$.',
              'Solve for $k$.',
              'Verify the constant terms differ to confirm "no solution" (not "same line").',
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'No Solution vs. Infinitely Many',
            wrong: 'Student finds the $k$ that makes slopes equal but the question asked for infinitely many solutions.',
            correction: '"No solution" = same slope, different intercepts. "Infinitely many" = same slope AND same intercept (or proportional equations). Read the question stem carefully.',
          },
          {
            type: 'trapCard',
            title: 'Slope Extraction Error from Standard Form',
            wrong: 'From $3x - 2y = 7$, student reads slope as $\\frac{3}{2}$ (missing the negative sign formula).',
            correction: 'Slope from $Ax + By = C$ is $-\\frac{A}{B}$. Here: $-\\frac{3}{-2} = \\frac{3}{2}$. This one is correct, but with $3x + 2y = 7$ the slope would be $-\\frac{3}{2}$. Always apply the formula carefully.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'The system $3x + ky = 12$ and $6x + 4y = 5$ has no solution. What is $k$?',
            steps: [
              { label: 'Extract slopes', content: 'Equation 1: slope $= -\\frac{3}{k}$. Equation 2: slope $= -\\frac{6}{4} = -\\frac{3}{2}$.' },
              { label: 'Set equal', content: '$-\\frac{3}{k} = -\\frac{3}{2}$' },
              { label: 'Solve', content: '$k = 2$' },
              { label: 'Verify intercepts differ', content: 'Eq 1: $y$-int $= \\frac{12}{2} = 6$. Eq 2: $y$-int $= \\frac{5}{4} = 1.25$. Since $6 \\neq 1.25$, the lines are parallel (not identical).' },
              { label: 'Answer', content: '$k = 2$' },
            ],
          },
        ],
      },
    },
  },

  13: {
    moduleId: 'linear-equations',
    title: 'Simple Parallel Lines Question #1',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A straightforward parallel-line problem: match the slope and use a given point to write the new equation.',
        blocks: [
          {
            type: 'text',
            content: 'When a problem says "parallel to $y = mx + b$ and passes through $(x_1, y_1)$," the new line shares the same slope $m$. The only task is finding the new y-intercept using the given point.',
          },
          {
            type: 'formula',
            label: 'Parallel Line Through a Point',
            content: '$$y - y_1 = m(x - x_1) \\quad\\text{where } m \\text{ matches the original line}$$',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Direct Parallel Questions',
            content: 'Recognition cue: "Which line is parallel to $y = 3x + 2$ and passes through $(1, 7)$?" First move: keep slope $= 3$, plug in the point to find the new intercept.',
          },
          {
            type: 'trapCard',
            title: 'Changing the Slope',
            wrong: 'Student sees "parallel" but writes a perpendicular slope (negative reciprocal) instead.',
            correction: 'Parallel = **same slope**. Perpendicular = negative reciprocal. Read the keyword carefully.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Parallel Line Through a Point',
            items: [
              'Read the slope from the given line.',
              'Plug the slope and given point into $y - y_1 = m(x - x_1)$.',
              'Simplify to the required form.',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Find the equation of the line parallel to $y = 3x + 2$ that passes through $(1, 7)$.',
            steps: [
              { label: 'Match slope', content: '$m = 3$ (same as the original).' },
              { label: 'Point-slope', content: '$y - 7 = 3(x - 1)$' },
              { label: 'Simplify', content: '$y = 3x - 3 + 7 = 3x + 4$' },
              { label: 'Answer', content: '$y = 3x + 4$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'What is the equation of the line parallel to $y = -2x + 5$ that passes through $(3, 1)$?',
            answer: 'Slope $= -2$. Using $(3, 1)$: $y - 1 = -2(x - 3) \\Rightarrow y = -2x + 6 + 1 = -2x + 7$.',
          },
        ],
      },
    },
  },

  14: {
    moduleId: 'linear-equations',
    title: 'Simple Parallel Lines Question #2',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A parallel-line problem where the original equation is in standard form — extract slope first, then build the new equation.',
        blocks: [
          {
            type: 'text',
            content: 'When the given line is in **standard form** $Ax + By = C$, extract the slope as $-\\frac{A}{B}$ before writing the parallel line. The parallel line uses this same slope with the new point.',
          },
          {
            type: 'formula',
            label: 'Slope from Standard Form',
            content: '$$m = -\\frac{A}{B}$$',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Standard Form Parallel Questions',
            content: 'Recognition cue: the given equation is in standard form (e.g., $4x - 2y = 10$) and the question asks for a parallel line. First move: compute slope $= -\\frac{A}{B}$, then use point-slope form.',
          },
          {
            type: 'trapCard',
            title: 'Slope Sign Error in Standard Form',
            wrong: 'From $4x - 2y = 10$, student writes slope $= \\frac{4}{2} = 2$ (forgetting the formula gives $-\\frac{A}{B}$).',
            correction: 'Slope $= -\\frac{A}{B} = -\\frac{4}{-2} = 2$. In this case the answer happens to be correct because of the double negative. But from $4x + 2y = 10$, slope $= -\\frac{4}{2} = -2$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Standard Form to Parallel Line',
            items: [
              'Extract slope: $m = -\\frac{A}{B}$ from the given $Ax + By = C$.',
              'Use the same slope with the new point: $y - y_1 = m(x - x_1)$.',
              'Convert to whichever form the answer choices use.',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Find the equation of the line parallel to $4x + 2y = 10$ that passes through $(3, -1)$.',
            steps: [
              { label: 'Extract slope', content: '$m = -\\frac{4}{2} = -2$' },
              { label: 'Point-slope', content: '$y - (-1) = -2(x - 3) \\Rightarrow y + 1 = -2x + 6$' },
              { label: 'Simplify', content: '$y = -2x + 5$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'Find the equation of the line parallel to $6x - 3y = 9$ that passes through $(2, 4)$.',
            answer: 'Slope $= -\\frac{6}{-3} = 2$. Using $(2, 4)$: $y - 4 = 2(x - 2) \\Rightarrow y = 2x$.',
          },
        ],
      },
    },
  },

  15: {
    moduleId: 'linear-equations',
    title: 'Simple Parallel Lines in a System Question',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'When a system has no solution, the lines are parallel — set slopes equal to find the unknown coefficient.',
        blocks: [
          {
            type: 'text',
            content: 'A system of two linear equations has **no solution** when the lines are parallel: same slope, different intercepts. If one equation contains an unknown constant, setting the slopes equal lets you solve for it.',
          },
          {
            type: 'formula',
            label: 'No-Solution Condition',
            content: '$$\\frac{A_1}{B_1} = \\frac{A_2}{B_2} \\quad\\text{and}\\quad \\frac{C_1}{B_1} \\neq \\frac{C_2}{B_2}$$',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"No Solution" System Questions',
            content: 'Recognition cue: "The system has no solution. Find $k$." First move: extract slopes from both equations and set them equal.',
          },
          {
            type: 'trapCard',
            title: 'Confusing No Solution with Infinitely Many',
            wrong: 'Student sets all coefficients proportional (same line) when the question says "no solution."',
            correction: 'No solution: slopes match but intercepts differ (parallel). Infinitely many: the entire equations are proportional (same line).',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Finding $k$ in a No-Solution System',
            items: [
              'Write both equations in the form $Ax + By = C$.',
              'Set the slope ratios equal: $\\frac{A_1}{B_1} = \\frac{A_2}{B_2}$.',
              'Solve for $k$.',
              'Confirm the intercepts differ to ensure "no solution" rather than "same line."',
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
            problem: 'For what value of $k$ does the system $2x + 3y = 12$ and $kx + 9y = 7$ have no solution?',
            steps: [
              { label: 'Set slope ratios equal', content: '$\\frac{2}{3} = \\frac{k}{9}$' },
              { label: 'Cross-multiply', content: '$2 \\times 9 = 3 \\times k \\Rightarrow 18 = 3k$' },
              { label: 'Solve', content: '$k = 6$' },
              { label: 'Verify intercepts differ', content: 'Eq 1 intercept: $\\frac{12}{3} = 4$. Eq 2 intercept: $\\frac{7}{9} \\approx 0.78$. Different, so no solution confirmed.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'The system $5x + 2y = 8$ and $15x + ky = 3$ has no solution. What is $k$?',
            answer: '$\\frac{5}{2} = \\frac{15}{k} \\Rightarrow 5k = 30 \\Rightarrow k = 6$. Check intercepts: $\\frac{8}{2} = 4 \\neq \\frac{3}{6} = 0.5$. Confirmed.',
          },
        ],
      },
    },
  },

  16: {
    moduleId: 'linear-equations',
    title: 'Complex Parallel Lines in a System Question #1',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Systems with multiple unknowns and "no solution" — use the parallel condition to build equations relating the unknowns.',
        blocks: [
          {
            type: 'text',
            content: 'In harder parallel-line problems, both equations may contain unknowns in multiple positions. The "no solution" condition still means equal slopes. Extract the slope expression from each equation, set them equal, and solve.',
          },
          {
            type: 'keyInsight',
            content: 'When the system is $ax + by = c$ and $dx + ey = f$ with unknowns in $a$, $b$, $d$, or $e$: the no-solution condition is $\\frac{a}{b} = \\frac{d}{e}$ with $\\frac{c}{b} \\neq \\frac{f}{e}$. Cross-multiplication converts this to a solvable equation.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Multi-Unknown Parallel Systems',
            content: 'Recognition cue: a system with unknowns in the coefficients (not just one $k$) and "no solution" in the stem. First move: write the equal-slopes condition and simplify.',
          },
          {
            type: 'trapCard',
            title: 'Arithmetic Errors in Cross-Multiplication',
            wrong: 'Student sets up $\\frac{a}{b} = \\frac{d}{e}$ correctly but makes an error cross-multiplying with negative terms.',
            correction: 'Write out the cross-multiplication explicitly: $a \\cdot e = b \\cdot d$. Track negative signs by keeping them attached to the coefficient.',
          },
          {
            type: 'tip',
            content: 'If the algebra feels heavy, consider converting both equations to slope-intercept form ($y = mx + b$) first. Comparing slopes is easier when both are isolated as coefficients of $x$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Complex No-Solution System',
            items: [
              'Isolate $y$ in each equation (or extract slope as $-\\frac{A}{B}$).',
              'Set the two slopes equal.',
              'Solve the resulting equation for the unknown.',
              'If there are two unknowns, check if the question provides a second condition (e.g., a specific intercept or another constraint).',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'The system $(k+1)x + 4y = 10$ and $3x + 2y = 5$ has no solution. Find $k$.',
            steps: [
              { label: 'Extract slopes', content: 'Eq 1: $m_1 = -\\frac{k+1}{4}$. Eq 2: $m_2 = -\\frac{3}{2}$.' },
              { label: 'Set equal', content: '$-\\frac{k+1}{4} = -\\frac{3}{2}$' },
              { label: 'Solve', content: '$\\frac{k+1}{4} = \\frac{3}{2} \\Rightarrow k + 1 = \\frac{3 \\cdot 4}{2} = 6 \\Rightarrow k = 5$' },
              { label: 'Verify intercepts differ', content: 'Eq 1: $\\frac{10}{4} = 2.5$. Eq 2: $\\frac{5}{2} = 2.5$. These are equal, meaning the lines are identical — not parallel.' },
              { label: 'Re-check', content: 'With $k = 5$: Eq 1 becomes $6x + 4y = 10$, which simplifies to $3x + 2y = 5$ — identical to Eq 2. This gives infinitely many solutions, not zero. The system actually has no solution for no value of $k$ that makes slopes equal with these constants. Verify the problem setup.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'The system $(2k)x + 6y = 4$ and $5x + 3y = 9$ has no solution. What is $k$?',
            answer: 'Slopes equal: $\\frac{2k}{6} = \\frac{5}{3} \\Rightarrow 2k \\cdot 3 = 6 \\cdot 5 \\Rightarrow 6k = 30 \\Rightarrow k = 5$. Check intercepts: $\\frac{4}{6} \\neq \\frac{9}{3}$, so no solution confirmed.',
          },
        ],
      },
    },
  },

  17: {
    moduleId: 'linear-equations',
    title: 'Complex Parallel Lines #1 (DESMOS Method)',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Using DESMOS to visually confirm parallel lines and solve for unknown coefficients by adjusting sliders.',
        blocks: [
          {
            type: 'text',
            content: 'On the digital SAT, DESMOS can verify parallel-line problems. Enter both equations with a slider for the unknown. Adjust the slider until the lines appear parallel (same slope, never intersecting within the visible window), then read the value.',
          },
          {
            type: 'keyInsight',
            content: 'DESMOS is especially useful for confirming algebraic answers. After solving for $k$ on paper, enter both equations with that $k$-value and verify the lines never intersect.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'When to Use DESMOS for Parallel Lines',
            content: 'Use DESMOS when: (1) the algebra is messy and you want a visual check, (2) you need to verify your answer quickly, or (3) you are unsure about sign errors in the slope extraction.',
          },
          {
            type: 'trapCard',
            title: 'DESMOS Window Misleads',
            wrong: 'Lines look parallel in a small window but actually intersect far off-screen.',
            correction: 'Zoom out significantly. If lines are truly parallel (same slope), they will remain equidistant at every zoom level. If they converge as you zoom out, the slopes are close but not equal.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'DESMOS Slider Method for Parallel Lines',
            items: [
              'Type the first equation into DESMOS exactly as given.',
              'Type the second equation, using a parameter (e.g., $k$) for the unknown. DESMOS will offer a slider.',
              'Adjust the slider until the two lines appear parallel (same slope).',
              'Read the $k$-value from the slider.',
              'Zoom out to confirm the lines never intersect.',
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
            problem: 'Use DESMOS to find $k$ such that $2x + 3y = 12$ is parallel to $kx + 9y = 7$.',
            steps: [
              { label: 'Enter equations', content: 'Line 1: $2x + 3y = 12$. Line 2: $kx + 9y = 7$ (DESMOS creates a slider for $k$).' },
              { label: 'Adjust slider', content: 'Move $k$ until the lines have the same slope. They become parallel at $k = 6$.' },
              { label: 'Verify', content: 'Zoom out. The lines stay equidistant and never intersect.' },
              { label: 'Confirm algebraically', content: 'Slopes: $-\\frac{2}{3}$ and $-\\frac{6}{9} = -\\frac{2}{3}$. Equal slopes confirmed.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'You enter $3x + 4y = 8$ and $kx + 8y = 5$ into DESMOS. At what $k$-value do the lines become parallel?',
            answer: 'Slopes must match: $\\frac{3}{4} = \\frac{k}{8} \\Rightarrow k = 6$. In DESMOS, the lines become parallel when the slider reaches $k = 6$.',
          },
        ],
      },
    },
  },

  18: {
    moduleId: 'linear-equations',
    title: 'Complex Parallel Lines in a System Question #2',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A harder no-solution system where the unknown appears in both equations or alongside other constants.',
        blocks: [
          {
            type: 'text',
            content: 'In more advanced parallel-line problems, you may need to simplify or rearrange equations before extracting slopes. The core logic remains: **no solution = same slope, different intercepts**.',
          },
          {
            type: 'formula',
            label: 'Slope Extraction',
            content: '$$\\text{From } Ax + By = C: \\quad m = -\\frac{A}{B}$$',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Rearrangement-Heavy Parallel Questions',
            content: 'Recognition cue: equations are not in standard form or contain expressions like $(k-2)x$. First move: expand and rearrange into standard form, then extract slopes.',
          },
          {
            type: 'trapCard',
            title: 'Distribution Errors',
            wrong: 'From $(k-2)x + 3y = 7$, student writes $A = k$ instead of $A = k - 2$.',
            correction: 'The entire expression $(k-2)$ is the coefficient of $x$. So $A = k - 2$, and slope $= -\\frac{k-2}{3}$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Solving with Expressions as Coefficients',
            items: [
              'Identify the coefficient of $x$ and $y$ in each equation, even if they contain unknowns.',
              'Write the slope for each: $m = -\\frac{A}{B}$.',
              'Set slopes equal and solve for the unknown.',
              'Verify intercepts differ.',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'The system $(k-1)x + 6y = 10$ and $4x + 3y = 8$ has no solution. Find $k$.',
            steps: [
              { label: 'Extract slopes', content: 'Eq 1: $m = -\\frac{k-1}{6}$. Eq 2: $m = -\\frac{4}{3}$.' },
              { label: 'Set equal', content: '$-\\frac{k-1}{6} = -\\frac{4}{3}$' },
              { label: 'Solve', content: '$\\frac{k-1}{6} = \\frac{4}{3} \\Rightarrow k - 1 = \\frac{4 \\cdot 6}{3} = 8 \\Rightarrow k = 9$' },
              { label: 'Verify', content: 'Eq 1 intercept: $\\frac{10}{6} = \\frac{5}{3}$. Eq 2 intercept: $\\frac{8}{3}$. Since $\\frac{5}{3} \\neq \\frac{8}{3}$, no solution confirmed.' },
              { label: 'Answer', content: '$k = 9$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'The system $(2k+3)x + 10y = 4$ and $7x + 5y = 9$ has no solution. Find $k$.',
            answer: 'Slopes equal: $\\frac{2k+3}{10} = \\frac{7}{5} \\Rightarrow 2k + 3 = \\frac{7 \\cdot 10}{5} = 14 \\Rightarrow 2k = 11 \\Rightarrow k = \\frac{11}{2}$.',
          },
        ],
      },
    },
  },

  19: {
    moduleId: 'linear-equations',
    title: 'Complex Parallel Lines #2 (DESMOS Method)',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Using DESMOS sliders to solve complex parallel-line systems where algebraic manipulation is error-prone.',
        blocks: [
          {
            type: 'text',
            content: 'For complex systems with expressions like $(k-1)x$ or $(2k+3)x$, DESMOS sliders provide a visual, error-resistant alternative. Enter both equations with a slider for $k$ and adjust until the lines become parallel.',
          },
          {
            type: 'keyInsight',
            content: 'DESMOS handles the algebra internally. You do not need to extract slopes or cross-multiply — just adjust the slider and observe when the lines match direction without intersecting.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'DESMOS for Expression Coefficients',
            content: 'When coefficients involve expressions (e.g., $2k + 3$), DESMOS automatically treats $k$ as a parameter and offers a slider. This bypasses distribution and cross-multiplication errors.',
          },
          {
            type: 'trapCard',
            title: 'Slider Range Too Narrow',
            wrong: 'The default DESMOS slider range (often $-10$ to $10$) might not include the correct $k$-value.',
            correction: 'Click the slider bounds and widen the range. If $k = \\frac{11}{2} = 5.5$, the default range covers it, but for larger values you may need to adjust.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'DESMOS Slider for Complex Parallel Systems',
            items: [
              'Enter both equations into DESMOS with the unknown left as a variable (DESMOS creates a slider).',
              'Slowly adjust the slider while watching the two lines.',
              'When the lines become parallel (same direction, no intersection), note the slider value.',
              'Zoom out to confirm the lines truly never meet.',
              'If the answer must be a fraction, use the algebra method to get the exact value after DESMOS gives you the approximate region.',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'Use DESMOS to find $k$: the system $(k-1)x + 6y = 10$ and $4x + 3y = 8$ has no solution.',
            steps: [
              { label: 'Enter in DESMOS', content: 'Line 1: $(k-1)x + 6y = 10$. Line 2: $4x + 3y = 8$. A slider for $k$ appears.' },
              { label: 'Adjust slider', content: 'Move $k$ until the lines are parallel. They become parallel near $k = 9$.' },
              { label: 'Verify', content: 'At $k = 9$: Line 1 is $8x + 6y = 10$. Slope $= -\\frac{8}{6} = -\\frac{4}{3}$. Line 2 slope $= -\\frac{4}{3}$. Slopes match.' },
              { label: 'Confirm no intersection', content: 'Zoom out. The lines remain equidistant, confirming $k = 9$.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'You enter $(3k)x + 8y = 5$ and $6x + 4y = 11$ into DESMOS. At what $k$-value do the lines become parallel?',
            answer: 'Slopes must match: $\\frac{3k}{8} = \\frac{6}{4} = \\frac{3}{2} \\Rightarrow 3k = 12 \\Rightarrow k = 4$. The DESMOS slider shows parallel lines at $k = 4$.',
          },
        ],
      },
    },
  },

  20: {
    moduleId: 'linear-equations',
    title: 'Complex Parallel Lines in a System Question #3',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Parallel-line system problems where the unknown appears on both sides, requiring careful equation setup.',
        blocks: [
          {
            type: 'text',
            content: 'The most challenging parallel-line problems place the unknown in both equations or combine it with other constants in unexpected positions. The strategy remains identical: extract slopes, set them equal, solve. The difficulty is purely in the algebra.',
          },
          {
            type: 'keyInsight',
            content: 'When the unknown appears in the $y$-coefficient (e.g., $3x + ky = 10$), the slope becomes $-\\frac{3}{k}$. Be especially careful: $k$ is in the **denominator** of the slope, which changes how the equation behaves when you cross-multiply.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Unknown in the $y$-Coefficient',
            content: 'Recognition cue: the unknown multiplies $y$ rather than $x$, e.g., $3x + ky = 10$. The slope is $-\\frac{3}{k}$, putting $k$ in the denominator. Be extra cautious with sign flips.',
          },
          {
            type: 'trapCard',
            title: 'Denominator Sign Oversight',
            wrong: 'From $3x - ky = 10$, student writes slope $= -\\frac{3}{k}$ instead of $-\\frac{3}{-k} = \\frac{3}{k}$.',
            correction: 'With $B = -k$, slope $= -\\frac{A}{B} = -\\frac{3}{-k} = \\frac{3}{k}$. The negative in front of $k$ flips the sign.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Handling $k$ in the Denominator',
            items: [
              'Write each equation as $Ax + By = C$, keeping the sign on $B$ explicit.',
              'Slope $= -\\frac{A}{B}$. If $B$ contains a negative, track it carefully.',
              'Set the slopes equal and cross-multiply to eliminate fractions.',
              'Solve for $k$, then verify intercepts differ.',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'The system $6x - ky = 15$ and $3x + 5y = 4$ has no solution. Find $k$.',
            steps: [
              { label: 'Extract slopes', content: 'Eq 1: $A = 6$, $B = -k$. Slope $= -\\frac{6}{-k} = \\frac{6}{k}$. Eq 2: slope $= -\\frac{3}{5}$.' },
              { label: 'Set equal', content: '$\\frac{6}{k} = -\\frac{3}{5}$' },
              { label: 'Cross-multiply', content: '$6 \\cdot 5 = -3 \\cdot k \\Rightarrow 30 = -3k \\Rightarrow k = -10$' },
              { label: 'Verify', content: 'With $k = -10$: Eq 1 slope $= \\frac{6}{-10} = -\\frac{3}{5}$. Eq 2 slope $= -\\frac{3}{5}$. Slopes match. Intercepts: $\\frac{15}{-(-10)} = -\\frac{3}{2}$ vs. $\\frac{4}{5}$. Different.' },
              { label: 'Answer', content: '$k = -10$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'The system $4x + ky = 20$ and $2x - 3y = 7$ has no solution. Find $k$.',
            answer: 'Slopes: $-\\frac{4}{k}$ and $-\\frac{2}{-3} = \\frac{2}{3}$. Set equal: $-\\frac{4}{k} = \\frac{2}{3} \\Rightarrow -12 = 2k \\Rightarrow k = -6$.',
          },
        ],
      },
    },
  },

  21: {
    moduleId: 'linear-equations',
    title: 'Complex Parallel Lines #3 (Answer Choices Method)',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Using answer choices as a shortcut: plug each candidate value of $k$ into the system and check whether the slopes match.',
        blocks: [
          {
            type: 'text',
            content: 'On multiple-choice questions, you can **test each answer choice** instead of solving algebraically. Plug the candidate $k$-value into both equations, compute the slopes, and check if they are equal with different intercepts.',
          },
          {
            type: 'keyInsight',
            content: 'This method is especially efficient when the algebra is messy or when you want a quick verification. With four choices, you need at most four slope comparisons — each takes about $10$ seconds.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'When to Use Answer Choices',
            content: 'Use this approach when: (1) the algebra involves fractions or negative signs that are easy to mishandle, (2) you have already tried the algebraic method and want to verify, or (3) time is short and you need a fast answer.',
          },
          {
            type: 'trapCard',
            title: 'Not Checking the Intercept Condition',
            wrong: 'Student finds that slopes match for a given $k$ but does not check whether the intercepts differ.',
            correction: 'Equal slopes with equal intercepts means the same line (infinitely many solutions), not no solution. Always verify the intercepts are different.',
          },
          {
            type: 'tip',
            content: 'Start by testing the middle values among the answer choices. If slope comparison results suggest "too steep" or "not steep enough," you can determine direction and skip remaining choices.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Answer Choice Backsolving',
            items: [
              'Take the first answer choice and substitute $k$ into both equations.',
              'Compute slopes: $m_1 = -\\frac{A_1}{B_1}$ and $m_2 = -\\frac{A_2}{B_2}$.',
              'If $m_1 = m_2$, check that the y-intercepts differ. If they do, this is the answer.',
              'If slopes are not equal, move to the next choice.',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'The system $(k-1)x + 6y = 10$ and $4x + 3y = 8$ has no solution. The answer choices are: (A) $5$ (B) $7$ (C) $9$ (D) $11$.',
            steps: [
              { label: 'Test (C) $k = 9$', content: 'Eq 1: $8x + 6y = 10$. Slope $= -\\frac{8}{6} = -\\frac{4}{3}$. Eq 2: slope $= -\\frac{4}{3}$. Slopes match.' },
              { label: 'Check intercepts', content: 'Eq 1 y-int: $\\frac{10}{6} = \\frac{5}{3}$. Eq 2 y-int: $\\frac{8}{3}$. Different.' },
              { label: 'Answer', content: '**(C) $k = 9$**' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'System: $kx + 4y = 12$ and $3x + 2y = 5$. Choices: (A) $2$ (B) $4$ (C) $6$ (D) $8$. Which gives no solution?',
            answer: 'Test (C) $k = 6$: slopes are $-\\frac{6}{4} = -\\frac{3}{2}$ and $-\\frac{3}{2}$. Equal. Intercepts: $\\frac{12}{4} = 3$ vs. $\\frac{5}{2} = 2.5$. Different. Answer: **(C) $k = 6$**.',
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
            content: 'Two lines are **perpendicular** when they intersect at a **right angle** ($90°$). This happens exactly when the product of their slopes equals $-1$: $$m_1 \\cdot m_2 = -1$$',
          },
          {
            type: 'formula',
            label: 'Negative Reciprocal',
            content: '$$\\text{If } m_1 = \\frac{a}{b}, \\text{ then } m_2 = -\\frac{b}{a}$$',
          },
          {
            type: 'table',
            title: 'Negative Reciprocal Examples',
            headers: ['Original Slope', 'Perpendicular Slope', 'Check: Product $= -1$'],
            rows: [
              ['$2$', '$-\\frac{1}{2}$', '$2 \\times (-\\frac{1}{2}) = -1$'],
              ['$-\\frac{3}{4}$', '$\\frac{4}{3}$', '$-\\frac{3}{4} \\times \\frac{4}{3} = -1$'],
              ['$\\frac{1}{5}$', '$-5$', '$\\frac{1}{5} \\times (-5) = -1$'],
              ['$-1$', '$1$', '$-1 \\times 1 = -1$'],
            ],
          },
          {
            type: 'keyInsight',
            content: 'The negative reciprocal requires **two operations**: flip the fraction AND change the sign. Missing either one gives the wrong answer. Verify by checking that the product is $-1$.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"Which Line Is Perpendicular?"',
            content: 'Recognition cue: answer choices show four equations and the question asks which is perpendicular to a given line. First move: find the slope of the given line, compute its negative reciprocal, then scan choices for that slope.',
          },
          {
            type: 'trapCard',
            title: 'Flip Without Negating',
            wrong: 'Given slope $= 2$. Student writes perpendicular slope $= \\frac{1}{2}$ (flipped but not negated).',
            correction: 'Perpendicular requires **both** operations: flip $2 \\to \\frac{1}{2}$ AND negate $\\to -\\frac{1}{2}$. Check: $2 \\times (-\\frac{1}{2}) = -1$.',
          },
          {
            type: 'trapCard',
            title: 'Negate Without Flipping',
            wrong: 'Given slope $= 2$. Student writes perpendicular slope $= -2$ (negated but not flipped).',
            correction: '$-2$ is the slope of a line reflected across the $x$-axis, not perpendicular. Must flip as well: $-\\frac{1}{2}$.',
          },
          {
            type: 'tip',
            content: '**Parallel** = same slope. **Perpendicular** = negative reciprocal (product $= -1$). If the question says "perpendicular" and the given slope is $\\frac{a}{b}$, the answer has slope $-\\frac{b}{a}$.',
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
              'Find the slope of the given line. For standard form $Ax + By = C$: $m = -\\frac{A}{B}$.',
              '**Flip** the fraction and **negate** it: $m_{\\perp} = -\\frac{1}{m}$.',
              'Plug the perpendicular slope and the given point into $y - y_1 = m_{\\perp}(x - x_1)$.',
              'Simplify and verify by checking that $m \\cdot m_{\\perp} = -1$.',
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
            wrong: 'Perpendicular slope of $3$ written as $\\frac{1}{3}$.',
            correction: 'Must flip AND negate: $3 \\to -\\frac{1}{3}$. Product check: $3 \\times (-\\frac{1}{3}) = -1$.',
          },
          {
            type: 'trapCard',
            title: 'Perpendicular to a Horizontal Line',
            wrong: 'Student tries to find the negative reciprocal of slope $0$, gets confused or writes $0$.',
            correction: 'A horizontal line ($m = 0$) is perpendicular to a **vertical line** ($m$ undefined). The answer is $x = c$ for some constant, not $y = mx + b$.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'The line $4x - 2y = 10$ is given. A second line is perpendicular and passes through $(6, 1)$. What is the equation of the second line?',
            steps: [
              { label: 'Find given slope', content: 'Slope $= -\\frac{A}{B} = -\\frac{4}{-2} = 2$' },
              { label: 'Perpendicular slope', content: 'Negative reciprocal of $2$ is $-\\frac{1}{2}$' },
              { label: 'Point-slope', content: '$y - 1 = -\\frac{1}{2}(x - 6)$' },
              { label: 'Simplify', content: '$y = -\\frac{1}{2}x + 3 + 1 = -\\frac{1}{2}x + 4$' },
              { label: 'Verify', content: 'Plug $(6, 1)$: $-\\frac{1}{2}(6) + 4 = -3 + 4 = 1$. Slope product: $2 \\times (-\\frac{1}{2}) = -1$.' },
            ],
          },
        ],
      },
    },
  },

  23: {
    moduleId: 'linear-equations',
    title: 'Simple Perpendicular Lines Question',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A straightforward perpendicular-line problem: compute the negative reciprocal slope and use a given point.',
        blocks: [
          {
            type: 'text',
            content: 'When a problem states "perpendicular to $y = mx + b$ and passes through $(x_1, y_1)$," compute the negative reciprocal slope $m_{\\perp} = -\\frac{1}{m}$, then use point-slope form.',
          },
          {
            type: 'formula',
            label: 'Quick Reference',
            content: '$$m_{\\perp} = -\\frac{1}{m} \\qquad\\text{then}\\qquad y - y_1 = m_{\\perp}(x - x_1)$$',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Direct Perpendicular Questions',
            content: 'Recognition cue: "Find the line perpendicular to $y = \\frac{2}{3}x + 1$ through $(4, -2)$." First move: perpendicular slope $= -\\frac{3}{2}$. Plug into point-slope form.',
          },
          {
            type: 'trapCard',
            title: 'Confusing Parallel and Perpendicular',
            wrong: 'Student reads "perpendicular" but uses the same slope (parallel logic).',
            correction: 'Parallel = same slope. Perpendicular = negative reciprocal. Underline the keyword in the question to avoid this mix-up.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Perpendicular Line Through a Point',
            items: [
              'Read the slope from the given equation.',
              'Compute the negative reciprocal: flip and negate.',
              'Use point-slope form with the new slope and given point.',
              'Simplify to the required format.',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Find the equation of the line perpendicular to $y = \\frac{2}{3}x + 1$ that passes through $(4, -2)$.',
            steps: [
              { label: 'Given slope', content: '$m = \\frac{2}{3}$' },
              { label: 'Perpendicular slope', content: '$m_{\\perp} = -\\frac{3}{2}$' },
              { label: 'Point-slope', content: '$y - (-2) = -\\frac{3}{2}(x - 4) \\Rightarrow y + 2 = -\\frac{3}{2}x + 6$' },
              { label: 'Simplify', content: '$y = -\\frac{3}{2}x + 4$' },
              { label: 'Verify', content: 'Slope product: $\\frac{2}{3} \\times (-\\frac{3}{2}) = -1$. Point check: $-\\frac{3}{2}(4) + 4 = -6 + 4 = -2$.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'What is the equation of the line perpendicular to $y = -4x + 3$ that passes through $(8, 5)$?',
            answer: 'Perpendicular slope $= -\\frac{1}{-4} = \\frac{1}{4}$. Using $(8, 5)$: $y - 5 = \\frac{1}{4}(x - 8) \\Rightarrow y = \\frac{1}{4}x - 2 + 5 = \\frac{1}{4}x + 3$.',
          },
        ],
      },
    },
  },

  24: {
    moduleId: 'linear-equations',
    title: 'Complex Perpendicular Lines Question',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A harder perpendicular-line problem involving standard form, multiple steps, or systems of equations.',
        blocks: [
          {
            type: 'text',
            content: 'Complex perpendicular-line questions may give the original line in standard form, require you to find the intersection point first, or embed the perpendicularity condition inside a system. The core rule stays the same: $m_1 \\cdot m_2 = -1$.',
          },
          {
            type: 'keyInsight',
            content: 'A common harder variant: "Line $\\ell$ passes through the intersection of two given lines and is perpendicular to a third." Solve the system to find the intersection point, then use the perpendicular slope with that point.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Multi-Step Perpendicular Questions',
            content: 'Recognition cue: the question requires finding a point (from a system or condition) before writing the perpendicular line. First move: solve for the point, then apply the negative reciprocal slope.',
          },
          {
            type: 'trapCard',
            title: 'Standard Form Slope Extraction Error',
            wrong: 'From $5x + 3y = 15$, student writes slope $= \\frac{5}{3}$ instead of $-\\frac{5}{3}$.',
            correction: 'Slope from $Ax + By = C$ is $-\\frac{A}{B} = -\\frac{5}{3}$. The perpendicular slope is then $\\frac{3}{5}$ (flip and negate).',
          },
          {
            type: 'tip',
            content: 'For questions combining systems and perpendicularity: solve the system first (to get the point), handle the perpendicular slope second (to get the direction). Separate the two tasks mentally to avoid mixing them up.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Multi-Step Perpendicular Line',
            items: [
              'If needed, solve a system or use a condition to find the required point $(x_1, y_1)$.',
              'Extract the slope of the reference line (use $-\\frac{A}{B}$ for standard form).',
              'Compute the negative reciprocal: $m_{\\perp} = -\\frac{1}{m}$.',
              'Write the equation: $y - y_1 = m_{\\perp}(x - x_1)$.',
              'Simplify and verify both the point and the slope product.',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'Line $\\ell_1$ has equation $3x + 4y = 24$. Line $\\ell_2$ passes through the $x$-intercept of $\\ell_1$ and is perpendicular to $\\ell_1$. Find the equation of $\\ell_2$.',
            steps: [
              { label: 'Find x-intercept of $\\ell_1$', content: 'Set $y = 0$: $3x = 24 \\Rightarrow x = 8$. Point: $(8, 0)$.' },
              { label: 'Slope of $\\ell_1$', content: '$m = -\\frac{3}{4}$' },
              { label: 'Perpendicular slope', content: '$m_{\\perp} = -\\frac{1}{-3/4} = \\frac{4}{3}$' },
              { label: 'Point-slope', content: '$y - 0 = \\frac{4}{3}(x - 8)$' },
              { label: 'Simplify', content: '$y = \\frac{4}{3}x - \\frac{32}{3}$' },
              { label: 'Verify', content: 'Slope product: $(-\\frac{3}{4})(\\frac{4}{3}) = -1$. Point $(8, 0)$: $\\frac{4}{3}(8) - \\frac{32}{3} = \\frac{32}{3} - \\frac{32}{3} = 0$.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'Line $\\ell$ has equation $2x - 5y = 10$. A perpendicular line passes through the y-intercept of $\\ell$. Find the perpendicular line\'s equation.',
            answer: 'Y-intercept of $\\ell$: set $x = 0 \\Rightarrow -5y = 10 \\Rightarrow y = -2$. Point: $(0, -2)$. Slope of $\\ell$: $-\\frac{2}{-5} = \\frac{2}{5}$. Perpendicular slope: $-\\frac{5}{2}$. Equation: $y - (-2) = -\\frac{5}{2}(x - 0) \\Rightarrow y = -\\frac{5}{2}x - 2$.',
          },
        ],
      },
    },
  },

};
