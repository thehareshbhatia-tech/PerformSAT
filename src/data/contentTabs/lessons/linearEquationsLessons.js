export const linearEquationsLessonTabs = {
  1: {
    moduleId: 'linear-equations',
    title: 'What Is a Linear Equation?',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'A linear equation is any equation whose graph is a straight line.',
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
                note: 'Uses one known point + slope',
              },
              {
                label: 'Standard Form',
                formula: '$Ax + By = C$',
                note: 'A, B, C are integers; A > 0',
              },
            ],
          },
          {
            type: 'text',
            content: 'A **linear equation** has variables raised only to the first power — no $x^2$, no $\\sqrt{x}$, no $\\frac{1}{x}$. When you plot its solutions on a coordinate plane, they always form a **straight line**. The "linear" label comes from this geometric fact: degree $1$ in $x$ guarantees a line.',
          },
          {
            type: 'keyInsight',
            content: 'Every linear equation reduces to two numbers: the **slope** (rate of change) and the **y-intercept** (starting value). Most SAT linear-equation questions test whether you can extract, interpret, or apply these two numbers across equations, tables, graphs, and word problems.',
          },
          {
            type: 'table',
            headers: [
              'Form',
              'Best Used When',
            ],
            rows: [
              [
                '$y = mx + b$',
                'Reading slope and intercept directly, quick graphing',
              ],
              [
                '$y - y_1 = m(x - x_1)$',
                'Building an equation from a point and a slope',
              ],
              [
                '$Ax + By = C$',
                'Systems of equations, integer-coefficient contexts',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Constants Are Linear Too',
            wrong: 'Student sees $y = 5$ and marks it "not linear" because $x$ does not appear.',
            correction: '$y = 5$ is a horizontal line — it equals $y = 0x + 5$. Linearity requires the highest power of $x$ to be at most $1$, and $0$ satisfies that.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Which of the following equations is linear?\n(A) $y = x^2 + 3$\n(B) $y = \\frac{2}{x}$\n(C) $y = 4x - 7$\n(D) $y = \\sqrt{x} + 1$',
            steps: [
              {
                label: 'Scan exponents',
                content: '(A) has $x^2$ — eliminate. (B) has $x$ in the denominator ($x^{-1}$) — eliminate. (D) has $\\sqrt{x}$ ($x^{1/2}$) — eliminate.',
              },
              {
                label: 'Confirm remaining choice',
                content: '(C) $y = 4x - 7$ matches $y = mx + b$ with $m = 4$, $b = -7$.',
              },
              {
                label: 'Answer',
                content: '**(C)**',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Convert $5x + 2y = 14$ to slope-intercept form. What are the slope and y-intercept?',
            answer: 'Subtract $5x$: $2y = -5x + 14$. Divide by $2$: $y = -\\frac{5}{2}x + 7$. Slope $= -\\frac{5}{2}$, y-intercept $= 7$.',
          },
        ],
      },
    },
  },

  2: {
    moduleId: 'linear-equations',
    title: 'What Is the Slope?',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Slope measures steepness — how much $y$ changes for each 1-unit increase in $x$.',
        blocks: [
          {
            type: 'formula',
            label: 'Slope Formula',
            content: '$$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{\\text{rise}}{\\text{run}}$$',
          },
          {
            type: 'text',
            content: 'Slope is the **rate of change** of a line. A slope of $3$ means "for every $1$ step right, go $3$ steps up." A slope of $-2$ means "for every $1$ step right, go $2$ steps down." The sign encodes direction; the magnitude encodes steepness.',
          },
          {
            type: 'keyInsight',
            content: 'In word problems, slope is always the **"per" quantity**: cost *per* item, miles *per* hour, points *per* game. The y-intercept is the **"starting" quantity**: initial fee, starting balance, base cost. Mapping these keywords to $m$ and $b$ solves most interpretation questions instantly.',
          },
          {
            type: 'trapCard',
            title: 'Slope vs. Intercept in Context',
            wrong: '"A gym charges \\$25/month with a \\$50 sign-up fee." Student identifies \\$50 as the slope.',
            correction: '**Per-unit** = slope (\\$25/month). **One-time/initial** = intercept (\\$50). A value that repeats per unit is slope; a value that applies once is the intercept.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A plumber charges a \\$60 service fee plus \\$45 per hour. The total cost $C$ for $h$ hours is $C = 45h + 60$. What does $45$ represent in context?\n(A) The total cost\n(B) The service fee\n(C) The cost for each additional hour of labor\n(D) The number of hours worked',
            steps: [
              {
                label: 'Identify position',
                content: '$45$ is the coefficient of $h$ — the variable. That makes it the **slope**.',
              },
              {
                label: 'Interpret in context',
                content: 'Slope = rate of change = cost **per hour** of labor.',
              },
              {
                label: 'Answer',
                content: '**(C)** The cost for each additional hour of labor.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'The equation $T = -3d + 72$ models the temperature $T$ (in °F) of a cooling drink $d$ minutes after being placed outside. What is the slope and what does it mean?',
            answer: `Slope $= -3$. The drink's temperature decreases by $3$°F per minute.`,
          },
        ],
      },
    },
  },

  3: {
    moduleId: 'linear-equations',
    title: 'Determining Slope from Two Coordinates',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Two points are all you need to find slope — and from there, the full equation.',
        blocks: [
          {
            type: 'formula',
            label: 'Slope from Two Points',
            content: '$$m = \\frac{y_2 - y_1}{x_2 - x_1}$$',
          },
          {
            type: 'text',
            content: 'Any two distinct points on a line determine its slope. Pick either point as "point 1" — the only requirement is subtracting in the **same order** for both numerator and denominator, which guarantees the correct sign.',
          },
          {
            type: 'keyInsight',
            content: 'Once slope is known, plug it and either point into **point-slope form** $y - y_1 = m(x - x_1)$ to get the full equation. This two-step pipeline — slope first, then equation — handles nearly every "find the equation" SAT question.',
          },
          {
            type: 'trapCard',
            title: 'Subtraction Order Mismatch',
            wrong: 'Points $(2, 5)$ and $(6, 17)$. Student writes $\\frac{17 - 5}{2 - 6} = \\frac{12}{-4} = -3$.',
            correction: 'The numerator uses $(y_2 - y_1)$ but the denominator uses $(x_1 - x_2)$. Both must follow the same order: $\\frac{17 - 5}{6 - 2} = \\frac{12}{4} = 3$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A line passes through $(2, 7)$ and $(5, 16)$. What is the equation in slope-intercept form?',
            steps: [
              {
                label: 'Compute slope',
                content: '$m = \\frac{16 - 7}{5 - 2} = \\frac{9}{3} = 3$',
              },
              {
                label: 'Point-slope',
                content: '$y - 7 = 3(x - 2)$',
              },
              {
                label: 'Simplify',
                content: '$y = 3x - 6 + 7 = 3x + 1$',
              },
              {
                label: 'Answer',
                content: '$y = 3x + 1$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Find the slope of the line passing through $(-1, 4)$ and $(3, -8)$.',
            answer: '$m = \\frac{-8 - 4}{3 - (-1)} = \\frac{-12}{4} = -3$.',
          },
        ],
      },
    },
  },

  4: {
    moduleId: 'linear-equations',
    title: 'Determining Slope from a Table',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'A table of $x$/$y$ pairs is a list of points — pick any two rows and apply the slope formula.',
        blocks: [
          {
            type: 'text',
            content: 'Because the relationship is linear, **every pair of rows** produces the same slope. Choose two rows with small, convenient numbers and compute $\\frac{\\Delta y}{\\Delta x}$. The critical step most students skip: checking the actual $\\Delta x$, which is not always $1$.',
          },
          {
            type: 'keyInsight',
            content: 'Using rows 1 and 2: $m = \\frac{7 - 1}{2 - 0} = \\frac{6}{2} = 3$. Every row pair yields the same result because the data is linear. If a row with $x = 0$ exists, it directly gives the y-intercept — no algebra needed.',
          },
          {
            type: 'table',
            headers: [
              '$x$',
              '$y$',
            ],
            rows: [
              [
                '$0$',
                '$1$',
              ],
              [
                '$2$',
                '$7$',
              ],
              [
                '$4$',
                '$13$',
              ],
              [
                '$6$',
                '$19$',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Non-Uniform $x$ Steps',
            wrong: 'Table has $x = 0, 2, 4, 6$. Student reads consecutive $\\Delta y = 6$ and writes slope $= 6$.',
            correction: 'The $x$-step is $2$, not $1$. Slope $= \\frac{\\Delta y}{\\Delta x} = \\frac{6}{2} = 3$. Always divide by the actual $\\Delta x$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Find the slope and equation for the linear relationship:\n| $x$ | $y$ |\n|---|---|\n| $1$ | $10$ |\n| $3$ | $16$ |\n| $5$ | $22$ |\n| $7$ | $28$ |',
            steps: [
              {
                label: 'Pick two rows',
                content: 'Use $(1, 10)$ and $(3, 16)$.',
              },
              {
                label: 'Compute slope',
                content: '$m = \\frac{16 - 10}{3 - 1} = \\frac{6}{2} = 3$',
              },
              {
                label: 'Find intercept',
                content: 'Using $(1, 10)$: $10 = 3(1) + b \\Rightarrow b = 7$',
              },
              {
                label: 'Answer',
                content: '$y = 3x + 7$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A table shows: $x = 3, 6, 9, 12$ and $y = 5, 11, 17, 23$. What is the slope?',
            answer: '$\\Delta y = 11 - 5 = 6$, $\\Delta x = 6 - 3 = 3$. Slope $= \\frac{6}{3} = 2$.',
          },
        ],
      },
    },
  },

  5: {
    moduleId: 'linear-equations',
    title: 'Determining Slope from a Graph',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Pick two lattice points on the line, then count rise and run.',
        blocks: [
          {
            type: 'formula',
            label: 'Slope from a Graph',
            content: '$$m = \\frac{\\text{rise}}{\\text{run}} = \\frac{y_2 - y_1}{x_2 - x_1}$$',
          },
          {
            type: 'text',
            content: 'A **lattice point** is where the line crosses a grid intersection — coordinates are integers. Using lattice points eliminates rounding errors. Count the vertical distance (**rise**) and horizontal distance (**run**) between two such points to get slope $= \\frac{\\text{rise}}{\\text{run}}$.',
          },
          {
            type: 'keyInsight',
            content: 'On the digital SAT, the built-in Desmos calculator can verify your count. Click two lattice points to read their coordinates, then compute $\\frac{y_2 - y_1}{x_2 - x_1}$ to confirm. This eliminates counting errors on tricky graphs.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting the Negative Sign',
            wrong: 'Line goes downhill left to right. Student counts rise $= 3$, run $= 2$, writes slope $= \\frac{3}{2}$.',
            correction: 'A downhill line has **negative** slope. Moving right while the line descends means rise is negative: slope $= -\\frac{3}{2}$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'steps',
            title: 'Graph → Slope',
            items: [
              'Locate two points where the line clearly crosses grid intersections (lattice points).',
              'Check the axis scale — each grid square may represent more than $1$ unit.',
              'Count squares **up or down** (rise) from the left point to the right point. Down = negative rise.',
              'Count squares **right** (run) between those same two points.',
              'Slope $= \\frac{\\text{rise}}{\\text{run}}$ — the sign of the rise determines the sign of the slope.',
            ],
          },
          {
            type: 'steps',
            title: 'Graph → Slope',
            items: [
              'Locate two points where the line clearly crosses grid intersections (lattice points).',
              'Check the axis scale — each grid square may represent more than $1$ unit.',
              'Count squares **up or down** (rise) from the left point to the right point. Down = negative rise.',
              'Count squares **right** (run) between those same two points.',
              'Slope $= \\frac{\\text{rise}}{\\text{run}}$ — the sign of the rise determines the sign of the slope.',
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A line on a coordinate grid passes through $(1, 2)$ and $(4, 8)$. What is its slope?',
            answer: '$m = \\frac{8 - 2}{4 - 1} = \\frac{6}{3} = 2$. The line rises left to right, confirming a positive slope.',
          },
        ],
      },
    },
  },

  6: {
    moduleId: 'linear-equations',
    title: 'What Is the Y-Intercept?',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'The y-intercept is where the line crosses the $y$-axis — the value of $y$ when $x = 0$.',
        blocks: [
          {
            type: 'formula',
            label: 'Finding the Y-Intercept',
            content: '$$\\text{Set } x = 0: \\quad y = m(0) + b = b$$',
          },
          {
            type: 'text',
            content: 'In $y = mx + b$, the y-intercept is **$b$**. On a graph it is the point $(0, b)$. In real-world contexts it represents the **starting value** — the quantity that exists before any change occurs.',
          },
          {
            type: 'keyInsight',
            content: 'Context clues map directly to position in $y = mx + b$. Words like "per," "each," "every" signal the slope (coefficient of $x$). Words like "initial," "base," "starting," "already" signal the y-intercept (constant term).',
          },
          {
            type: 'table',
            headers: [
              'Context Clue',
              'Role',
            ],
            rows: [
              [
                '"\\$5 per mile"',
                'Slope (rate)',
              ],
              [
                '"\\$10 base fare"',
                'Y-intercept (starting value)',
              ],
              [
                '"increases by $3$ each year"',
                'Slope (rate)',
              ],
              [
                '"originally had $200$"',
                'Y-intercept (starting value)',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Confusing Rate with Starting Value',
            wrong: '"A tank drains at $8$ gallons/minute and starts with $200$ gallons." Student labels $8$ as the initial value.',
            correction: 'The number attached to the variable ($8t$) is the rate. The standalone constant ($200$) is the starting value. Position in $y = mx + b$ determines meaning.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A water tank starts with $500$ gallons and drains at $15$ gallons per minute. Which equation models the water level $W$ after $t$ minutes, and what is the y-intercept in context?\n(A) $W = 15t + 500$\n(B) $W = -15t + 500$\n(C) $W = 500t - 15$\n(D) $W = -500t + 15$',
            steps: [
              {
                label: 'Identify slope',
                content: 'Draining means decreasing, so the rate is $-15$ gallons per minute.',
              },
              {
                label: 'Identify intercept',
                content: 'Starting amount is $500$ gallons.',
              },
              {
                label: 'Build equation',
                content: '$W = -15t + 500$',
              },
              {
                label: 'Interpret intercept',
                content: 'At $t = 0$ the tank holds $500$ gallons — the y-intercept is the initial water volume.',
              },
              {
                label: 'Answer',
                content: '**(B)**',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'In the equation $C = 0.12m + 40$, where $C$ is monthly cost in dollars and $m$ is the number of minutes used, what does $40$ represent?',
            answer: '$40$ is the constant term (y-intercept). It represents the base monthly cost charged regardless of minutes used — the cost at $m = 0$.',
          },
        ],
      },
    },
  },

  7: {
    moduleId: 'linear-equations',
    title: 'Deriving Linear Equations from Context',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Translate a word problem into $y = mx + b$ by mapping the rate to slope and the starting value to intercept.',
        blocks: [
          {
            type: 'formula',
            label: 'Translation Template',
            content: '$$\\text{Total} = (\\text{rate per unit}) \\times (\\text{number of units}) + \\text{starting value}$$',
          },
          {
            type: 'text',
            content: 'Every linear word problem encodes two numbers: a **rate** (slope) tied to words like "per," "each," or "every," and a **starting value** (y-intercept) tied to words like "initial," "already," or "base fee." Negative slopes appear when quantities **decrease** — "loses," "drains," "depreciates."',
          },
          {
            type: 'keyInsight',
            content: 'After writing the equation, plug in one data point from the problem to verify. A quick substitution catches sign errors and swapped values before you commit to an answer.',
          },
          {
            type: 'trapCard',
            title: 'Negative Rate Missed',
            wrong: '"A candle is $12$ inches tall and burns at $0.5$ inches per hour." Student writes $h = 0.5t + 12$.',
            correction: 'Burning **reduces** height. The rate is $-0.5$: $h = -0.5t + 12$. Words like "burns," "drains," or "loses" signal a negative slope.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: '"A candle is $12$ inches tall and burns at $0.5$ inches per hour." Student writes $h = 0.5t + 12$.',
            steps: [
              {
                label: 'Correct approach',
                content: 'Burning **reduces** height. The rate is $-0.5$: $h = -0.5t + 12$. Words like "burns," "drains," or "loses" signal a negative slope.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A pool contains $10{,}000$ gallons and drains at $250$ gallons per hour. Write the equation for the water level $W$ after $h$ hours.',
            answer: '$W = -250h + 10{,}000$. Slope is $-250$ (draining decreases level); y-intercept is $10{,}000$ (starting amount).',
          },
        ],
      },
    },
  },

  8: {
    moduleId: 'linear-equations',
    title: 'Deriving Linear Equations from a Graph (Example 1)',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Read the y-intercept where the line crosses the $y$-axis, then use a second point to compute slope.',
        blocks: [
          {
            type: 'formula',
            label: 'Graph to Equation (Visible Intercept)',
            content: '$$b = y\\text{-intercept from graph}, \\quad m = \\frac{y_2 - b}{x_2 - 0}, \\quad y = mx + b$$',
          },
          {
            type: 'text',
            content: 'When the y-intercept is visible (the line crosses the $y$-axis at an integer grid point), read $b$ directly. Then pick any second lattice point and compute slope: $m = \\frac{y_2 - b}{x_2}$. Assemble: $y = mx + b$.',
          },
          {
            type: 'keyInsight',
            content: 'Reading $b$ from the graph first lets you eliminate answer choices immediately — any choice with the wrong y-intercept is out. Then verify slope with only the remaining options.',
          },
          {
            type: 'trapCard',
            title: 'Reading the Wrong Axis for the Intercept',
            wrong: 'Student reads the $x$-intercept (where line crosses horizontal axis) and uses it as $b$.',
            correction: 'The y-intercept is where the line crosses the **vertical** ($y$-) axis, at $x = 0$. The $x$-intercept is where $y = 0$ — a different value entirely.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Student reads the $x$-intercept (where line crosses horizontal axis) and uses it as $b$.',
            steps: [
              {
                label: 'Correct approach',
                content: 'The y-intercept is where the line crosses the **vertical** ($y$-) axis, at $x = 0$. The $x$-intercept is where $y = 0$ — a different value entirely.',
              },
            ],
          },
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
      learn: {
        title: 'Learn',
        summary: 'When the y-intercept is not visible on the graph, use two lattice points and point-slope form.',
        blocks: [
          {
            type: 'formula',
            label: 'Point-Slope Form',
            content: '$$y - y_1 = m(x - x_1)$$',
          },
          {
            type: 'text',
            content: 'Sometimes the y-intercept falls outside the graph window or lands between grid lines. In that case, pick **any two clear lattice points**, compute slope, then use **point-slope form** $y - y_1 = m(x - x_1)$ and simplify to find $b$ algebraically.',
          },
          {
            type: 'trapCard',
            title: 'Estimating a Non-Integer Intercept by Eye',
            wrong: 'Line appears to cross the $y$-axis at roughly $2.5$, so student writes $b = 2.5$ without verifying.',
            correction: 'Eyeballing introduces errors. Compute slope from two lattice points, then solve $b = y_1 - mx_1$ for the exact intercept.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Line appears to cross the $y$-axis at roughly $2.5$, so student writes $b = 2.5$ without verifying.',
            steps: [
              {
                label: 'Correct approach',
                content: 'Eyeballing introduces errors. Compute slope from two lattice points, then solve $b = y_1 - mx_1$ for the exact intercept.',
              },
            ],
          },
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
      learn: {
        title: 'Learn',
        summary: 'Find slope from any two rows, then use one row to solve for the y-intercept.',
        blocks: [
          {
            type: 'formula',
            label: 'Table to Equation',
            content: '$$m = \\frac{y_2 - y_1}{x_2 - x_1}, \\qquad b = y_1 - m x_1$$',
          },
          {
            type: 'text',
            content: 'A table of $(x, y)$ values represents a linear relationship when $\\frac{\\Delta y}{\\Delta x}$ is constant between every pair of rows. To write the equation: compute slope from two rows, then use one row to solve $b = y - mx$.',
          },
          {
            type: 'keyInsight',
            content: 'If the table includes a row where $x = 0$, the $y$-value in that row **is** the y-intercept — scan for this shortcut before doing any algebra.',
          },
          {
            type: 'table',
            headers: [
              '$x$',
              '$y$',
              '$\\Delta y$',
            ],
            rows: [
              [
                '$0$',
                '$4$',
                '—',
              ],
              [
                '$3$',
                '$13$',
                '$+9$',
              ],
              [
                '$6$',
                '$22$',
                '$+9$',
              ],
              [
                '$9$',
                '$31$',
                '$+9$',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Non-Uniform $x$ Spacing Ignored',
            wrong: 'Table has $x = 2, 5, 8, 11$. Student subtracts consecutive $y$-values but divides by $1$ instead of $3$.',
            correction: 'The $x$-step is $3$, not $1$. Slope $= \\frac{\\Delta y}{3}$. Always compute and use the actual $\\Delta x$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Table has $x = 2, 5, 8, 11$. Student subtracts consecutive $y$-values but divides by $1$ instead of $3$.',
            steps: [
              {
                label: 'Correct approach',
                content: 'The $x$-step is $3$, not $1$. Slope $= \\frac{\\Delta y}{3}$. Always compute and use the actual $\\Delta x$.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A table shows $(0, 4)$, $(3, 13)$, $(6, 22)$. What is the equation?',
            answer: 'Slope $= \\frac{13 - 4}{3 - 0} = \\frac{9}{3} = 3$. The row $x = 0$ gives $b = 4$ directly. Equation: $y = 3x + 4$.',
          },
        ],
      },
    },
  },

  11: {
    moduleId: 'linear-equations',
    title: 'Deriving Linear Equations from Function Notation',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Function notation like $f(2) = 7$ gives a point $(2, 7)$ — two such statements yield two points.',
        blocks: [
          {
            type: 'formula',
            label: 'Translation Rule',
            content: '$$f(a) = c \\quad\\Longrightarrow\\quad \\text{the point } (a, c)$$',
          },
          {
            type: 'text',
            content: '$f(x) = mx + b$ is $y = mx + b$ with different notation. The statement $f(2) = 7$ translates to "when $x = 2$, $y = 7$" — the point $(2, 7)$. Two such statements produce two points, which determine the line.',
          },
          {
            type: 'keyInsight',
            content: '$f(0)$ is the y-intercept. Seeing $f(0) = k$ means $b = k$ immediately — no slope calculation needed for the intercept.',
          },
          {
            type: 'trapCard',
            title: 'Treating $f(3)$ as Multiplication',
            wrong: 'Student interprets $f(3) = 10$ as "$f \\times 3 = 10$" and writes $f = \\frac{10}{3}$.',
            correction: '$f(3) = 10$ means "the function $f$ evaluated at $x = 3$ outputs $10$." It represents the point $(3, 10)$, not a product.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Student interprets $f(3) = 10$ as "$f \\times 3 = 10$" and writes $f = \\frac{10}{3}$.',
            steps: [
              {
                label: 'Correct approach',
                content: '$f(3) = 10$ means "the function $f$ evaluated at $x = 3$ outputs $10$." It represents the point $(3, 10)$, not a product.',
              },
            ],
          },
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
      learn: {
        title: 'Learn',
        summary: 'Parallel lines never intersect because they share the same slope but have different y-intercepts.',
        blocks: [
          {
            type: 'formula',
            label: 'Parallel Condition',
            content: '$$\\text{Lines are parallel} \\iff m_1 = m_2 \\text{ and } b_1 \\neq b_2$$',
          },
          {
            type: 'text',
            content: 'Two lines are **parallel** when they have the **same slope** but **different y-intercepts**. Because they rise and run at identical rates, they never cross — no matter how far they extend.',
          },
          {
            type: 'keyInsight',
            content: 'In standard form $Ax + By = C$, the slope is $-\\frac{A}{B}$. Two standard-form equations are parallel when $\\frac{A_1}{B_1} = \\frac{A_2}{B_2}$ but $\\frac{C_1}{B_1} \\neq \\frac{C_2}{B_2}$. This ratio comparison is often faster than converting to slope-intercept form.',
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Same Slope + Same Intercept = Same Line',
            content: 'If both slope AND y-intercept match, the two equations describe the **same line** (infinitely many solutions), not parallel lines (zero solutions). This distinction drives many SAT questions about systems.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting the Intercept Verification',
            wrong: 'Student sets slopes equal, finds $k = 2$, but does not check whether the resulting intercepts differ.',
            correction: 'Equal slopes with equal intercepts = same line (infinitely many solutions, not zero). After finding $k$, confirm the constant terms produce different intercepts.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'The system $3x + ky = 12$ and $6x + 4y = 5$ has no solution. What is $k$?\n(A) $1$ \n(B) $2$ \n(C) $3$ \n(D) $4$',
            steps: [
              {
                label: 'Extract slopes',
                content: 'Equation 1: slope $= -\\frac{3}{k}$. Equation 2: slope $= -\\frac{6}{4} = -\\frac{3}{2}$.',
              },
              {
                label: 'Set equal',
                content: '$-\\frac{3}{k} = -\\frac{3}{2} \\Rightarrow k = 2$',
              },
              {
                label: 'Verify intercepts differ',
                content: 'Eq 1 y-int: $\\frac{12}{2} = 6$. Eq 2 y-int: $\\frac{5}{4} = 1.25$. Since $6 \\neq 1.25$, the lines are parallel.',
              },
              {
                label: 'Answer',
                content: '**(B) $k = 2$**',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Write the equation of the line parallel to $y = 4x - 3$ that passes through $(2, 1)$.',
            answer: 'Parallel slope $= 4$. Using $(2, 1)$: $y - 1 = 4(x - 2) \\Rightarrow y = 4x - 7$.',
          },
        ],
      },
    },
  },

  13: {
    moduleId: 'linear-equations',
    title: 'Simple Parallel Lines Question #1',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Match the slope of the given line, then use a new point to find the y-intercept.',
        blocks: [
          {
            type: 'formula',
            label: 'Parallel Line Through a Point',
            content: '$$y - y_1 = m(x - x_1) \\quad\\text{where } m \\text{ matches the original line}$$',
          },
          {
            type: 'text',
            content: 'A "parallel through a given point" problem has two steps: (1) copy the slope from the original line, and (2) use the given point with point-slope form to find the new y-intercept. The slope stays the same; only the intercept changes.',
          },
          {
            type: 'trapCard',
            title: 'Using Perpendicular Slope Instead',
            wrong: 'Student sees "parallel" but computes the negative reciprocal: slope $= -\\frac{1}{3}$ instead of $3$.',
            correction: 'Parallel = **same slope**. Perpendicular = negative reciprocal. Underline the keyword before computing.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Student sees "parallel" but computes the negative reciprocal: slope $= -\\frac{1}{3}$ instead of $3$.',
            steps: [
              {
                label: 'Correct approach',
                content: 'Parallel = **same slope**. Perpendicular = negative reciprocal. Underline the keyword before computing.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Find the equation of the line parallel to $y = -2x + 5$ that passes through $(3, 1)$.',
            answer: 'Slope $= -2$. Point-slope: $y - 1 = -2(x - 3) \\Rightarrow y = -2x + 6 + 1 = -2x + 7$.',
          },
        ],
      },
    },
  },

  14: {
    moduleId: 'linear-equations',
    title: 'Simple Parallel Lines Question #2',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'When the original line is in standard form, extract slope as $-\\frac{A}{B}$ before building the parallel line.',
        blocks: [
          {
            type: 'formula',
            label: 'Slope from Standard Form',
            content: '$$m = -\\frac{A}{B}$$',
          },
          {
            type: 'text',
            content: 'Standard form $Ax + By = C$ hides the slope. Extract it as $m = -\\frac{A}{B}$, then use point-slope form with the given point. The parallel line inherits this same slope.',
          },
          {
            type: 'trapCard',
            title: 'Sign Error with Double Negative',
            wrong: 'From $4x - 2y = 10$, student writes slope $= -\\frac{4}{2} = -2$, missing the $B = -2$ sign.',
            correction: '$B = -2$ (the coefficient of $y$ including its sign). Slope $= -\\frac{4}{-2} = 2$. Track the sign of $B$ carefully when it is negative.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'From $4x - 2y = 10$, student writes slope $= -\\frac{4}{2} = -2$, missing the $B = -2$ sign.',
            steps: [
              {
                label: 'Correct approach',
                content: '$B = -2$ (the coefficient of $y$ including its sign). Slope $= -\\frac{4}{-2} = 2$. Track the sign of $B$ carefully when it is negative.',
              },
            ],
          },
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
      learn: {
        title: 'Learn',
        summary: '"No solution" in a linear system means the lines are parallel — set slopes equal to find the unknown.',
        blocks: [
          {
            type: 'formula',
            label: 'No-Solution Condition (Standard Form)',
            content: '$$\\frac{A_1}{B_1} = \\frac{A_2}{B_2} \\quad\\text{and}\\quad \\frac{C_1}{B_1} \\neq \\frac{C_2}{B_2}$$',
          },
          {
            type: 'text',
            content: 'A system of two linear equations has **no solution** when the lines are parallel: same slope, different intercepts. If one equation contains an unknown constant $k$, setting the slopes equal produces a solvable equation for $k$.',
          },
          {
            type: 'trapCard',
            title: 'Confusing No Solution with Infinitely Many',
            wrong: 'Student sets all coefficient ratios proportional (making equations identical) when the question says "no solution."',
            correction: 'No solution = slopes match, intercepts differ (parallel). Infinitely many = entire equations are proportional (same line). Read the stem precisely.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Student sets all coefficient ratios proportional (making equations identical) when the question says "no solution."',
            steps: [
              {
                label: 'Correct approach',
                content: 'No solution = slopes match, intercepts differ (parallel). Infinitely many = entire equations are proportional (same line). Read the stem precisely.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'The system $5x + 2y = 8$ and $15x + ky = 3$ has no solution. What is $k$?',
            answer: 'Set slope ratios equal: $\\frac{5}{2} = \\frac{15}{k} \\Rightarrow 5k = 30 \\Rightarrow k = 6$. Check intercepts: $\\frac{8}{2} = 4 \\neq \\frac{3}{6} = 0.5$. Confirmed parallel.',
          },
        ],
      },
    },
  },

  16: {
    moduleId: 'linear-equations',
    title: 'Complex Parallel Lines in a System Question #1',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Systems with expressions like $(k+1)$ as coefficients still reduce to the same parallel condition — extract slopes and set equal.',
        blocks: [
          {
            type: 'formula',
            label: 'No-Solution Condition',
            content: '$$\\frac{A_1}{B_1} = \\frac{A_2}{B_2} \\quad\\text{and}\\quad \\frac{C_1}{B_1} \\neq \\frac{C_2}{B_2}$$',
          },
          {
            type: 'text',
            content: 'In harder parallel-line problems, coefficients may contain expressions like $(k+1)$ or $(2k-3)$. The "no solution" condition is unchanged: extract the slope expression from each equation, set them equal, and solve. The difficulty is purely algebraic.',
          },
          {
            type: 'keyInsight',
            content: 'When the system is $ax + by = c$ and $dx + ey = f$ with unknowns in $a$ or $d$: the no-solution condition is $\\frac{a}{b} = \\frac{d}{e}$ with $\\frac{c}{b} \\neq \\frac{f}{e}$. Cross-multiplication converts the ratio equation into a standard linear equation in $k$.',
          },
          {
            type: 'trapCard',
            title: 'Dropping the Expression Parentheses',
            wrong: 'From $(k+1)x + 4y = 10$, student writes $A = k$ instead of $A = k + 1$.',
            correction: 'The entire expression $(k+1)$ is the coefficient of $x$. Slope $= -\\frac{k+1}{4}$. Preserve the full expression when setting up the ratio.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'From $(k+1)x + 4y = 10$, student writes $A = k$ instead of $A = k + 1$.',
            steps: [
              {
                label: 'Correct approach',
                content: 'The entire expression $(k+1)$ is the coefficient of $x$. Slope $= -\\frac{k+1}{4}$. Preserve the full expression when setting up the ratio.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'The system $(2k)x + 6y = 4$ and $5x + 3y = 9$ has no solution. What is $k$?',
            answer: 'Set slope ratios equal: $\\frac{2k}{6} = \\frac{5}{3} \\Rightarrow 6k = 30 \\Rightarrow k = 5$. Intercepts: $\\frac{4}{6} \\neq \\frac{9}{3}$, so no solution confirmed.',
          },
        ],
      },
    },
  },

  17: {
    moduleId: 'linear-equations',
    title: 'Complex Parallel Lines #1 (DESMOS Method)',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Use Desmos sliders to visually identify the $k$-value that makes two lines parallel.',
        blocks: [
          {
            type: 'formula',
            label: 'Parallel Condition',
            content: '$$m_1 = m_2 \\iff \\text{lines are parallel (when } b_1 \\neq b_2\\text{)}$$',
          },
          {
            type: 'text',
            content: 'On the digital SAT, Desmos can verify parallel-line problems. Enter both equations with the unknown left as a parameter — Desmos auto-creates a slider. Adjust until the lines share the same direction and never intersect.',
          },
          {
            type: 'keyInsight',
            content: 'Desmos is most valuable as a **verification tool**. Solve algebraically first, then enter both equations with your computed $k$-value to confirm the lines are parallel. Zoom out to ensure they never converge.',
          },
          {
            type: 'trapCard',
            title: 'Small Window Tricks the Eye',
            wrong: 'Lines look parallel in a small window but actually intersect far off-screen.',
            correction: 'Zoom out significantly. Truly parallel lines remain equidistant at every zoom level. If the gap between them shrinks as you zoom out, the slopes are close but not equal.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Lines look parallel in a small window but actually intersect far off-screen.',
            steps: [
              {
                label: 'Correct approach',
                content: 'Zoom out significantly. Truly parallel lines remain equidistant at every zoom level. If the gap between them shrinks as you zoom out, the slopes are close but not equal.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'You enter $3x + 4y = 8$ and $kx + 8y = 5$ into Desmos. At what $k$-value do the lines become parallel?',
            answer: 'Slopes must match: $\\frac{3}{4} = \\frac{k}{8} \\Rightarrow k = 6$. In Desmos the slider shows parallel lines at $k = 6$.',
          },
        ],
      },
    },
  },

  18: {
    moduleId: 'linear-equations',
    title: 'Complex Parallel Lines in a System Question #2',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Parallel systems where the unknown appears alongside other constants — simplify or rearrange before extracting slopes.',
        blocks: [
          {
            type: 'formula',
            label: 'General Slope Extraction',
            content: '$$\\text{From } Ax + By = C: \\quad m = -\\frac{A}{B}$$',
          },
          {
            type: 'text',
            content: 'In more advanced problems, you may need to expand, simplify, or rearrange equations before extracting slopes. An expression like $(k-1)x$ means $A = k - 1$, not $A = k$. The core logic is unchanged: **no solution = same slope, different intercepts**.',
          },
          {
            type: 'trapCard',
            title: 'Distribution Error in Coefficient',
            wrong: 'From $(k-2)x + 3y = 7$, student writes slope $= -\\frac{k}{3}$, dropping the $-2$.',
            correction: 'The full coefficient of $x$ is $(k-2)$, so slope $= -\\frac{k-2}{3}$. Preserve the entire expression when extracting coefficients.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'From $(k-2)x + 3y = 7$, student writes slope $= -\\frac{k}{3}$, dropping the $-2$.',
            steps: [
              {
                label: 'Correct approach',
                content: 'The full coefficient of $x$ is $(k-2)$, so slope $= -\\frac{k-2}{3}$. Preserve the entire expression when extracting coefficients.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'The system $(k-1)x + 6y = 10$ and $4x + 3y = 8$ has no solution. Find $k$.',
            answer: 'Slopes: $-\\frac{k-1}{6}$ and $-\\frac{4}{3}$. Set equal: $\\frac{k-1}{6} = \\frac{4}{3} \\Rightarrow k - 1 = 8 \\Rightarrow k = 9$. Intercepts: $\\frac{10}{6} \\neq \\frac{8}{3}$, confirmed.',
          },
        ],
      },
    },
  },

  19: {
    moduleId: 'linear-equations',
    title: 'Complex Parallel Lines #2 (DESMOS Method)',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Desmos sliders handle expression coefficients like $(k-1)$ automatically — adjust and observe.',
        blocks: [
          {
            type: 'formula',
            label: 'Parallel Condition in DESMOS',
            content: '$$m_1 = m_2 \\iff -\\frac{A_1}{B_1} = -\\frac{A_2}{B_2}$$',
            note: 'Enter both equations with the unknown; adjust the slider until the lines share the same direction.',
          },
          {
            type: 'text',
            content: 'For systems with complex coefficients (e.g., $(k-1)x$ or $(2k+3)x$), Desmos treats $k$ as a parameter and creates a slider automatically. This bypasses distribution and cross-multiplication errors entirely — adjust the slider and observe when the lines become parallel.',
          },
          {
            type: 'keyInsight',
            content: 'After finding the approximate slider value in Desmos, confirm with a quick algebraic check. If the slider lands at $k = 9$, verify: both slopes should evaluate to the same number at $k = 9$.',
          },
          {
            type: 'trapCard',
            title: 'Slider Range Does Not Include the Answer',
            wrong: 'Default slider range is $-10$ to $10$, but $k = 12$ falls outside it. Student assumes no solution exists.',
            correction: 'Click the slider bounds in Desmos and widen the range. The answer might be outside the default window — always check.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Default slider range is $-10$ to $10$, but $k = 12$ falls outside it. Student assumes no solution exists.',
            steps: [
              {
                label: 'Correct approach',
                content: 'Click the slider bounds in Desmos and widen the range. The answer might be outside the default window — always check.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'You enter $(3k)x + 8y = 5$ and $6x + 4y = 11$ into Desmos. At what $k$-value are the lines parallel?',
            answer: 'Slopes match when $\\frac{3k}{8} = \\frac{6}{4} \\Rightarrow 3k = 12 \\Rightarrow k = 4$. Desmos shows parallel lines at $k = 4$.',
          },
        ],
      },
    },
  },

  20: {
    moduleId: 'linear-equations',
    title: 'Complex Parallel Lines in a System Question #3',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'When $k$ appears in the $y$-coefficient, slope becomes $-\\frac{A}{k}$ — the unknown lands in the denominator.',
        blocks: [
          {
            type: 'formula',
            label: 'Equal Coefficient-Ratio Condition',
            content: '$$\\frac{A_1}{B_1} = \\frac{A_2}{B_2} \\quad\\text{and}\\quad \\frac{C_1}{B_1} \\neq \\frac{C_2}{B_2}$$',
            note: 'Cross-multiply to clear $k$ from the denominator.',
          },
          {
            type: 'text',
            content: 'The most challenging parallel-line problems place the unknown in the $y$-coefficient (e.g., $3x + ky = 10$). The slope becomes $-\\frac{3}{k}$, placing $k$ in the denominator. Cross-multiplying to clear the fraction requires extra care with signs.',
          },
          {
            type: 'keyInsight',
            content: 'When $k$ is in the denominator of one slope expression, cross-multiply instead of dividing. From $\\frac{6}{k} = -\\frac{3}{5}$, multiply both sides by $5k$: $30 = -3k$, so $k = -10$. This avoids fraction-on-fraction algebra.',
          },
          {
            type: 'trapCard',
            title: 'Denominator Sign Oversight',
            wrong: 'From $3x - ky = 10$, student writes slope $= -\\frac{3}{k}$, ignoring the negative sign on $k$.',
            correction: 'With $B = -k$: slope $= -\\frac{A}{B} = -\\frac{3}{-k} = \\frac{3}{k}$. The negative in front of $k$ flips the overall sign of the slope.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'From $3x - ky = 10$, student writes slope $= -\\frac{3}{k}$, ignoring the negative sign on $k$.',
            steps: [
              {
                label: 'Correct approach',
                content: 'With $B = -k$: slope $= -\\frac{A}{B} = -\\frac{3}{-k} = \\frac{3}{k}$. The negative in front of $k$ flips the overall sign of the slope.',
              },
            ],
          },
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
      learn: {
        title: 'Learn',
        summary: 'Plug each answer choice into the system and check whether slopes match — a fast alternative to algebra.',
        blocks: [
          {
            type: 'formula',
            label: 'Backsolve Check',
            content: '$$\\text{For each choice } k: \\quad -\\frac{A_1(k)}{B_1(k)} \\stackrel{?}{=} -\\frac{A_2}{B_2}$$',
            note: 'Test each answer choice; the one producing equal slopes (with different intercepts) is correct.',
          },
          {
            type: 'text',
            content: 'On multiple-choice questions, **backsolving** replaces algebra: substitute each candidate $k$-value into both equations, compute slopes, and check for equality. With four choices, this takes at most four quick slope comparisons.',
          },
          {
            type: 'keyInsight',
            content: 'Start with the middle-value choices. If the resulting slopes are "too far apart" in one direction, you can infer which remaining choice is correct without testing all four.',
          },
          {
            type: 'trapCard',
            title: 'Matching Slopes but Missing the Intercept Check',
            wrong: 'Student finds slopes match at $k = 6$ but does not verify intercepts differ — the lines could be identical.',
            correction: 'Equal slopes + equal intercepts = same line (infinitely many solutions). After matching slopes, confirm the intercepts are different to ensure the system truly has no solution.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Student finds slopes match at $k = 6$ but does not verify intercepts differ — the lines could be identical.',
            steps: [
              {
                label: 'Correct approach',
                content: 'Equal slopes + equal intercepts = same line (infinitely many solutions). After matching slopes, confirm the intercepts are different to ensure the system truly has no solution.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'System: $kx + 4y = 12$ and $3x + 2y = 5$. Choices: (A) $2$ (B) $4$ (C) $6$ (D) $8$. Which gives no solution?',
            answer: 'Test (C) $k = 6$: slopes $= -\\frac{6}{4} = -\\frac{3}{2}$ and $-\\frac{3}{2}$. Equal. Intercepts: $\\frac{12}{4} = 3$ vs. $\\frac{5}{2} = 2.5$. Different. Answer: **(C) $k = 6$**.',
          },
        ],
      },
    },
  },

  22: {
    moduleId: 'linear-equations',
    title: 'Perpendicular Lines',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Perpendicular lines meet at $90°$ — their slopes are negative reciprocals whose product is $-1$.',
        blocks: [
          {
            type: 'formula',
            label: 'Negative Reciprocal',
            content: '$$\\text{If } m_1 = \\frac{a}{b}, \\text{ then } m_2 = -\\frac{b}{a}$$',
          },
          {
            type: 'text',
            content: 'Two lines are **perpendicular** when they intersect at a **right angle** ($90°$). This geometric relationship translates to an algebraic rule: the product of their slopes equals $-1$. $$m_1 \\cdot m_2 = -1$$',
          },
          {
            type: 'keyInsight',
            content: 'The negative reciprocal requires **two operations**: flip the fraction AND change the sign. Missing either one is the most common error. Verify every time by checking that $m_1 \\cdot m_2 = -1$.',
          },
          {
            type: 'table',
            headers: [
              'Original Slope',
              'Perpendicular Slope',
              'Product Check',
            ],
            rows: [
              [
                '$2$',
                '$-\\frac{1}{2}$',
                '$2 \\times (-\\frac{1}{2}) = -1$',
              ],
              [
                '$-\\frac{3}{4}$',
                '$\\frac{4}{3}$',
                '$-\\frac{3}{4} \\times \\frac{4}{3} = -1$',
              ],
              [
                '$\\frac{1}{5}$',
                '$-5$',
                '$\\frac{1}{5} \\times (-5) = -1$',
              ],
              [
                '$-1$',
                '$1$',
                '$-1 \\times 1 = -1$',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Flip Without Negating',
            wrong: 'Given slope $= 2$. Student writes perpendicular slope $= \\frac{1}{2}$ (flipped but not negated).',
            correction: 'Both operations required: flip $2 \\to \\frac{1}{2}$ AND negate $\\to -\\frac{1}{2}$. Check: $2 \\times (-\\frac{1}{2}) = -1$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Line $\\ell$ has equation $4x - 2y = 10$. A second line is perpendicular to $\\ell$ and passes through $(6, 1)$. What is the equation of the second line?\n(A) $y = 2x - 11$\n(B) $y = -\\frac{1}{2}x + 4$\n(C) $y = \\frac{1}{2}x - 2$\n(D) $y = -2x + 13$',
            steps: [
              {
                label: 'Find slope of $\\ell$',
                content: 'Slope $= -\\frac{A}{B} = -\\frac{4}{-2} = 2$',
              },
              {
                label: 'Perpendicular slope',
                content: 'Negative reciprocal of $2$ is $-\\frac{1}{2}$',
              },
              {
                label: 'Point-slope',
                content: '$y - 1 = -\\frac{1}{2}(x - 6)$',
              },
              {
                label: 'Simplify',
                content: '$y = -\\frac{1}{2}x + 3 + 1 = -\\frac{1}{2}x + 4$',
              },
              {
                label: 'Verify',
                content: 'Slope product: $2 \\times (-\\frac{1}{2}) = -1$. Point check: $-\\frac{1}{2}(6) + 4 = 1$.',
              },
              {
                label: 'Answer',
                content: '**(B)**',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'What is the slope of a line perpendicular to $y = \\frac{3}{7}x - 4$?',
            answer: 'Given slope $= \\frac{3}{7}$. Perpendicular slope $= -\\frac{7}{3}$. Check: $\\frac{3}{7} \\times (-\\frac{7}{3}) = -1$.',
          },
        ],
      },
    },
  },

  23: {
    moduleId: 'linear-equations',
    title: 'Simple Perpendicular Lines Question',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Compute the negative reciprocal of the given slope, then use point-slope form with the provided point.',
        blocks: [
          {
            type: 'formula',
            label: 'Quick Reference',
            content: '$$m_{\\perp} = -\\frac{1}{m} \\qquad\\text{then}\\qquad y - y_1 = m_{\\perp}(x - x_1)$$',
          },
          {
            type: 'text',
            content: '"Perpendicular to $y = mx + b$ through $(x_1, y_1)$" is a two-step process: (1) compute $m_{\\perp} = -\\frac{1}{m}$, then (2) plug into $y - y_1 = m_{\\perp}(x - x_1)$ and simplify.',
          },
          {
            type: 'trapCard',
            title: 'Confusing Parallel and Perpendicular Keywords',
            wrong: 'Student reads "perpendicular" but applies parallel logic, keeping the slope as $\\frac{2}{3}$ instead of flipping and negating.',
            correction: 'Parallel = same slope. Perpendicular = negative reciprocal. Underlining the keyword in the question prevents this mix-up.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Student reads "perpendicular" but applies parallel logic, keeping the slope as $\\frac{2}{3}$ instead of flipping and negating.',
            steps: [
              {
                label: 'Correct approach',
                content: 'Parallel = same slope. Perpendicular = negative reciprocal. Underlining the keyword in the question prevents this mix-up.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Find the equation of the line perpendicular to $y = -4x + 3$ that passes through $(8, 5)$.',
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
      learn: {
        title: 'Learn',
        summary: 'Multi-step perpendicular problems: find a point from a condition, extract slope from standard form, then build the perpendicular line.',
        blocks: [
          {
            type: 'formula',
            label: 'Perpendicular Slope Rule',
            content: '$$m_2 = -\\frac{1}{m_1}$$',
            note: 'Flip the fraction and change the sign; verify by checking $m_1 \\cdot m_2 = -1$.',
          },
          {
            type: 'text',
            content: 'Complex perpendicular problems may give the reference line in standard form, require solving a system to find the point, or combine multiple conditions. The core rule is unchanged: $m_1 \\cdot m_2 = -1$. Handle the point and slope as separate tasks.',
          },
          {
            type: 'keyInsight',
            content: 'A frequent hard variant: "Line $\\ell$ passes through the $x$-intercept of a given line and is perpendicular to it." Solve for the intercept point first, then apply the negative reciprocal slope with that point.',
          },
          {
            type: 'trapCard',
            title: 'Standard Form Slope Extraction Omits the Negative',
            wrong: 'From $5x + 3y = 15$, student writes slope $= \\frac{5}{3}$ instead of $-\\frac{5}{3}$.',
            correction: 'Slope from $Ax + By = C$ is $-\\frac{A}{B} = -\\frac{5}{3}$. The perpendicular slope would then be $\\frac{3}{5}$ (flip and negate the negative).',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'From $5x + 3y = 15$, student writes slope $= \\frac{5}{3}$ instead of $-\\frac{5}{3}$.',
            steps: [
              {
                label: 'Correct approach',
                content: 'Slope from $Ax + By = C$ is $-\\frac{A}{B} = -\\frac{5}{3}$. The perpendicular slope would then be $\\frac{3}{5}$ (flip and negate the negative).',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: `Line $\ell$ has equation $2x - 5y = 10$. A perpendicular line passes through the y-intercept of $\ell$. Find the perpendicular line's equation.`,
            answer: 'Y-intercept of $\\ell$: set $x = 0 \\Rightarrow -5y = 10 \\Rightarrow y = -2$, giving $(0, -2)$. Slope of $\\ell$: $-\\frac{2}{-5} = \\frac{2}{5}$. Perpendicular slope: $-\\frac{5}{2}$. Equation: $y = -\\frac{5}{2}x - 2$.',
          },
        ],
      },
    },
  },
};
