export const transformationsLessonTabs = {
  1: {
    moduleId: 'transformations',
    title: 'What Is a Transformation?',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'A transformation changes the position, size, or orientation of a graph by modifying the function algebraically.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Translation',
                formula: '$f(x \\pm h) \\pm k$',
                note: 'Slides the graph without changing shape',
              },
              {
                label: 'Reflection',
                formula: '$-f(x)$ or $f(-x)$',
                note: 'Flips across an axis',
              },
              {
                label: 'Vertical Stretch/Compress',
                formula: '$a \\cdot f(x)$',
                note: '$|a|>1$ taller; $0<|a|<1$ shorter',
              },
              {
                label: 'Horizontal Stretch/Compress',
                formula: '$f(bx)$',
                note: '$|b|>1$ narrower; $0<|b|<1$ wider',
              },
            ],
          },
          {
            type: 'text',
            content: 'A **transformation** takes a parent function $f(x)$ and produces a new function whose graph is shifted, flipped, stretched, or compressed relative to the original. On the Digital SAT, the equation alone determines the transformation — no manual graphing required.',
          },
          {
            type: 'keyInsight',
            content: 'Every transformation modifies $f(x)$ in one of two locations: **outside** the function (affects $y$-values, behaves as expected) or **inside** the parentheses (affects $x$-values, behaves opposite to expectation). This single distinction governs all transformation questions.',
          },
          {
            type: 'table',
            headers: [
              'Location',
              'Affects',
              'Intuitive?',
              'Example',
            ],
            rows: [
              [
                'Outside: $f(x) + k$',
                '$y$-values',
                'Yes — $+k$ shifts up',
                '$f(x) + 3$ moves graph up $3$',
              ],
              [
                'Inside: $f(x + h)$',
                '$x$-values',
                'No — $+h$ shifts left',
                '$f(x + 3)$ moves graph left $3$',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Horizontal Direction Is Reversed',
            wrong: '"Shifted right $3$" — student writes $f(x + 3)$ because positive feels like right.',
            correction: 'Horizontal shifts work opposite to the sign. Right $3$ means $f(x - 3)$. Left $3$ means $f(x + 3)$. The sign inside the parentheses is always opposite the direction of movement.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'steps',
            title: 'Identifying a Transformation from an Equation',
            items: [
              'Write the equation in the general form $g(x) = a \\cdot f(b(x - h)) + k$.',
              'Read each parameter: $h$ = horizontal shift, $k$ = vertical shift, $a$ = vertical stretch/reflect, $b$ = horizontal stretch/reflect.',
              'Horizontal parameters ($h$ and $b$) behave opposite to their sign or magnitude; vertical parameters ($a$ and $k$) behave as expected.',
            ],
          },
          {
            type: 'steps',
            title: 'Identifying a Transformation from an Equation',
            items: [
              'Write the equation in the general form $g(x) = a \\cdot f(b(x - h)) + k$.',
              'Read each parameter: $h$ = horizontal shift, $k$ = vertical shift, $a$ = vertical stretch/reflect, $b$ = horizontal stretch/reflect.',
              'Horizontal parameters ($h$ and $b$) behave opposite to their sign or magnitude; vertical parameters ($a$ and $k$) behave as expected.',
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'The point $(4, 7)$ lies on $f$. After a transformation, the corresponding point on $g$ is $(4, -7)$. What transformation was applied? Write $g(x)$ in terms of $f(x)$.',
            answer: 'The $x$-value stayed the same while $y$ changed from $7$ to $-7$ (negated). This is a reflection over the $x$-axis: $g(x) = -f(x)$.',
          },
        ],
      },
    },
  },

  2: {
    moduleId: 'transformations',
    title: 'Vertical Translations (Up & Down)',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Adding a constant outside the function slides the entire graph up or down without changing its shape.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Shift Up',
                formula: '$g(x) = f(x) + k$',
                note: '$k > 0$ — every $y$-value increases by $k$',
              },
              {
                label: 'Shift Down',
                formula: '$g(x) = f(x) - k$',
                note: '$k > 0$ — every $y$-value decreases by $k$',
              },
            ],
          },
          {
            type: 'text',
            content: 'A vertical translation adds or subtracts a constant to the **output** of $f$. Since every $y$-value changes by the same amount, the shape is preserved — the graph simply slides along the $y$-axis.',
          },
          {
            type: 'keyInsight',
            content: 'Vertical translations change only $y$-coordinates. If the vertex of a parabola sits at $(h, k)$ and the graph shifts up $d$ units, the new vertex is $(h,\\, k + d)$. The axis of symmetry, $x$-intercept spacing, and overall shape remain untouched.',
          },
          {
            type: 'table',
            headers: [
              'Original',
              'Operation',
              'Result',
              'Vertex Moves',
            ],
            rows: [
              [
                '$f(x) = x^2$',
                '$+ 3$ outside',
                '$g(x) = x^2 + 3$',
                '$(0,0) \\to (0,3)$',
              ],
              [
                '$f(x) = |x|$',
                '$- 5$ outside',
                '$g(x) = |x| - 5$',
                '$(0,0) \\to (0,-5)$',
              ],
              [
                '$f(x) = (x-1)^2 + 2$',
                '$+ 4$ outside',
                '$g(x) = (x-1)^2 + 6$',
                '$(1,2) \\to (1,6)$',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Adding Inside Instead of Outside',
            wrong: 'To shift $f(x) = \\sqrt{x}$ up $5$, student writes $\\sqrt{x + 5}$ instead of $\\sqrt{x} + 5$.',
            correction: '$\\sqrt{x + 5}$ is $f(x + 5)$, a horizontal shift left $5$. Vertical shifts operate on the output: the $+5$ must sit **outside** the radical, giving $\\sqrt{x} + 5$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'The function $f$ is defined by $f(x) = 3x - 2$. The graph of $g$ is the graph of $f$ translated $6$ units up. What is $g(x)$?',
            steps: [
              {
                label: 'Apply rule',
                content: 'Up $6$ means add $6$ outside: $g(x) = f(x) + 6$.',
              },
              {
                label: 'Substitute',
                content: '$g(x) = (3x - 2) + 6 = 3x + 4$.',
              },
              {
                label: 'Answer',
                content: '$g(x) = 3x + 4$.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'The vertex of $f(x) = x^2$ is at $(0, 0)$. After a vertical translation, the vertex is at $(0, -9)$. Write $g(x)$.',
            answer: 'The vertex moved from $y = 0$ to $y = -9$, a shift of $-9$ (down $9$). So $g(x) = x^2 - 9$.',
          },
        ],
      },
    },
  },

  3: {
    moduleId: 'transformations',
    title: 'Horizontal Translations (Left & Right)',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Horizontal translations modify the input of the function and move the graph in the direction opposite to the sign — the most common transformation trap on the SAT.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Shift Right',
                formula: '$g(x) = f(x - h)$',
                note: 'Subtract inside — graph moves right $h$ units',
              },
              {
                label: 'Shift Left',
                formula: '$g(x) = f(x + h)$',
                note: 'Add inside — graph moves left $h$ units',
              },
            ],
          },
          {
            type: 'text',
            content: 'A horizontal translation replaces $x$ with $(x - h)$ or $(x + h)$ inside the function. The counterintuitive part: $f(x - 3)$ shifts the graph **right** $3$, and $f(x + 3)$ shifts it **left** $3$. The sign inside is always opposite the direction of motion.',
          },
          {
            type: 'keyInsight',
            content: '$f(x - 3)$ means the function requires $3$ extra units of input before producing each output. To obtain the value $f$ originally gave at $x = 0$, you now need $x = 3$. The entire graph slides **right** by $3$.',
          },
          {
            type: 'table',
            headers: [
              'Expression',
              'Rewritten',
              'Shift Direction',
            ],
            rows: [
              [
                '$f(x - 5)$',
                '$f(x - 5)$',
                'Right $5$',
              ],
              [
                '$f(x + 2)$',
                '$f(x - (-2))$',
                'Left $2$',
              ],
              [
                '$(x + 4)^2$',
                '$f(x - (-4))$ where $f(x) = x^2$',
                'Left $4$',
              ],
              [
                '$(x - 7)^3$',
                '$f(x - 7)$ where $f(x) = x^3$',
                'Right $7$',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Sign Goes the Wrong Way',
            wrong: '"Shifted right $4$" — student writes $f(x + 4)$ because positive feels like rightward.',
            correction: 'Right $4$ requires $f(x - 4)$. Verification: if $(2, 5)$ is on $f$, "right $4$" moves it to $(6, 5)$. Check: $g(6) = f(6-4) = f(2) = 5$. Using $f(x+4)$: $g(6) = f(10) \\neq 5$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'The graph of $y = \\sqrt{x}$ is shifted right $9$ units and down $2$ units. Write the new equation.',
            steps: [
              {
                label: 'Horizontal shift',
                content: 'Right $9$: replace $x$ with $(x - 9)$ inside → $\\sqrt{x - 9}$.',
              },
              {
                label: 'Vertical shift',
                content: 'Down $2$: subtract $2$ outside → $\\sqrt{x - 9} - 2$.',
              },
              {
                label: 'Answer',
                content: '$y = \\sqrt{x - 9} - 2$.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'The vertex of $f(x) = (x - 1)^2 + 4$ is at $(1, 4)$. After shifting left $6$ and down $2$, what is $g(x)$ and where is the new vertex?',
            answer: 'Left $6$: replace $x$ with $(x + 6)$ → $((x+6) - 1)^2 + 4 = (x+5)^2 + 4$. Down $2$: subtract $2$ → $g(x) = (x+5)^2 + 2$. New vertex: $(-5, 2)$.',
          },
        ],
      },
    },
  },

  4: {
    moduleId: 'transformations',
    title: 'Transformation Rules Summary',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'A unified reference for every function transformation tested on the Digital SAT.',
        blocks: [
          {
            type: 'formula',
            label: 'General Transformation Form',
            content: '$$g(x) = a \\cdot f(b(x - h)) + k$$',
          },
          {
            type: 'text',
            content: 'All transformations fit a single general form. Reading each parameter from that form — and knowing whether it acts on the input or the output — is sufficient to decode any transformation problem.',
          },
          {
            type: 'keyInsight',
            content: 'Read a compound transformation **inside-out**: first handle what is inside the function argument ($b$ and $h$), then what is outside ($a$ and $k$). Stretches and reflections apply before translations.',
          },
          {
            type: 'table',
            headers: [
              'Transformation',
              'Equation',
              'Effect on Graph',
            ],
            rows: [
              [
                'Shift up $k$',
                '$f(x) + k$',
                'Every point rises $k$ units',
              ],
              [
                'Shift down $k$',
                '$f(x) - k$',
                'Every point drops $k$ units',
              ],
              [
                'Shift right $h$',
                '$f(x - h)$',
                'Every point moves right $h$ units',
              ],
              [
                'Shift left $h$',
                '$f(x + h)$',
                'Every point moves left $h$ units',
              ],
              [
                'Reflect over $x$-axis',
                '$-f(x)$',
                'All $y$-values negated',
              ],
              [
                'Reflect over $y$-axis',
                '$f(-x)$',
                'Graph reads backward left-to-right',
              ],
              [
                'Vertical stretch ($a > 1$)',
                '$a \\cdot f(x)$',
                'Graph taller / steeper',
              ],
              [
                'Vertical compress ($0 < a < 1$)',
                '$a \\cdot f(x)$',
                'Graph shorter / flatter',
              ],
              [
                'Horizontal compress ($b > 1$)',
                '$f(bx)$',
                'Graph narrower',
              ],
              [
                'Horizontal stretch ($0 < b < 1$)',
                '$f(bx)$',
                'Graph wider',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Applying Vertical Shift Before Stretch',
            wrong: 'Student reads $-2f(x) + 1$ and applies the $+1$ shift first, then stretches by $2$, producing the wrong curve.',
            correction: 'Algebraic order: $-2f(x)$ is computed first (stretch by $2$, then reflect), and $+1$ is added last (vertical shift). Stretches and reflections precede translations.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'Describe all transformations applied to $f(x)$ to produce $g(x) = -3f(x + 2) - 5$.',
            steps: [
              {
                label: 'Inside: $x + 2$',
                content: '$x + 2 = x - (-2)$, so $h = -2$. Horizontal shift **left $2$**.',
              },
              {
                label: 'Factor: $3$',
                content: '$|a| = 3 > 1$: vertical **stretch** by factor $3$.',
              },
              {
                label: 'Negative: $-$',
                content: '$a < 0$: **reflection** over the $x$-axis.',
              },
              {
                label: 'Outside: $-5$',
                content: '$k = -5$: vertical shift **down $5$**.',
              },
              {
                label: 'Summary',
                content: 'Left $2$, vertically stretched by $3$, reflected over $x$-axis, down $5$.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'The graph of $g$ is obtained by reflecting $f(x) = |x|$ over the $x$-axis and shifting it up $4$. Write $g(x)$ and find $g(3)$.',
            answer: 'Reflect: $-f(x) = -|x|$. Shift up $4$: $g(x) = -|x| + 4$. Evaluate: $g(3) = -|3| + 4 = -3 + 4 = 1$.',
          },
        ],
      },
    },
  },

  5: {
    moduleId: 'transformations',
    title: 'Simple Transformation From Graph Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Comparing key points on two graphs reveals a single translation or reflection.',
        blocks: [
          {
            type: 'text',
            content: 'A "simple" graph transformation problem shows two curves — the original $f$ and the transformed $g$ — on the same coordinate plane. The transformation involves one shift (horizontal or vertical) or one reflection.',
          },
          {
            type: 'keyInsight',
            content: 'Locate the **vertex** or another clear landmark on both curves. The displacement between the two landmarks gives the translation directly. If the shape flips orientation instead of sliding, it is a reflection.',
          },
          {
            type: 'table',
            headers: [
              'Original Point',
              'Transformed Point',
              'Transformation',
            ],
            rows: [
              [
                '$(1, 3)$',
                '$(1, 7)$',
                'Up $4$: $g(x) = f(x) + 4$',
              ],
              [
                '$(1, 3)$',
                '$(4, 3)$',
                'Right $3$: $g(x) = f(x - 3)$',
              ],
              [
                '$(1, 3)$',
                '$(-2, 3)$',
                'Left $3$: $g(x) = f(x + 3)$',
              ],
              [
                '$(1, 3)$',
                '$(1, -3)$',
                'Reflect over $x$-axis: $g(x) = -f(x)$',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Horizontal Displacement Mapped to Vertical Shift',
            wrong: 'Student sees the graph moved right and writes $f(x) + 3$ instead of $f(x - 3)$.',
            correction: 'Horizontal displacement changes the **inside** of the function: right $3$ → $f(x - 3)$. The expression $f(x) + 3$ is a vertical shift up $3$, not a horizontal one.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'The graph shows $f(x) = x^2$ with vertex at $(0, 0)$ and $g$ with vertex at $(0, 5)$. Both parabolas have the same shape and open upward. Express $g$ in terms of $f$.',
            steps: [
              {
                label: 'Compare vertices',
                content: 'Original: $(0, 0)$. Transformed: $(0, 5)$.',
              },
              {
                label: 'Compute displacement',
                content: '$\\Delta x = 0$, $\\Delta y = 5$. Pure vertical shift up $5$.',
              },
              {
                label: 'Write equation',
                content: '$g(x) = f(x) + 5 = x^2 + 5$.',
              },
              {
                label: 'Verify',
                content: 'Second point: $f(1) = 1$, so $g(1)$ should be $6$. $(1)^2 + 5 = 6$. Confirmed.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'The graph shows $f(x) = x^2$ with vertex at $(0, 0)$ and $g$ with vertex at $(0, 5)$. Both parabolas have the same shape and open upward. Express $g$ in terms of $f$.',
            answer: 'Second point: $f(1) = 1$, so $g(1)$ should be $6$. $(1)^2 + 5 = 6$. Confirmed.',
          },
        ],
      },
    },
  },

  6: {
    moduleId: 'transformations',
    title: 'Complex Transformation From Graph Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'When two graphs differ by more than a single shift, systematically check for reflections, stretches, and combined translations.',
        blocks: [
          {
            type: 'text',
            content: 'A complex graph transformation combines multiple operations — a shift plus a reflection, or a shift plus a stretch. Using three or more corresponding points is essential to distinguish a stretch from a translation.',
          },
          {
            type: 'keyInsight',
            content: 'If $\\Delta y$ between corresponding points is **not constant** across different $x$-values, a vertical stretch or compression is present. Constant $\\Delta y$ indicates a pure translation.',
          },
          {
            type: 'table',
            headers: [
              'Observation',
              'Transformation Present',
            ],
            rows: [
              [
                'All points shifted by the same $\\Delta x$',
                'Horizontal translation',
              ],
              [
                'All points shifted by the same $\\Delta y$',
                'Vertical translation',
              ],
              [
                'All $y$-values negated (sign flipped)',
                'Reflection over $x$-axis',
              ],
              [
                'All $y$-values scaled by a constant factor',
                'Vertical stretch or compression',
              ],
              [
                'Combination of the above',
                'Compound transformation',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Ignoring the Reflection Component',
            wrong: 'Student notices the graph shifted right $2$ and up $1$ but misses that it also flipped over the $x$-axis.',
            correction: 'An upward-opening original paired with a downward-opening result always signals $-f(x)$. Apply the reflection before translations in the equation: $g(x) = -f(x - 2) + 1$, not $f(x - 2) + 1$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: '$f(x) = x^2$ has vertex at $(0,0)$ and passes through $(1,1)$. The graph of $g$ has vertex at $(2, 3)$ and passes through $(3, 1)$. Both are parabolas. Express $g$ in terms of $f$.',
            steps: [
              {
                label: 'Check orientation',
                content: '$f$ opens up (vertex is minimum). At $(3, 1)$, $g$ is $2$ below the vertex at $(2, 3)$ — opens **down**. Reflection present: $a < 0$.',
              },
              {
                label: 'Find vertical scale',
                content: 'On $f$: one unit right of vertex → $y = 1$ (height $= 1$). On $g$: one unit right of vertex → $y = 1$ (drop $= 2$ from vertex $y = 3$). Ratio: $\\frac{2}{1} = 2$. With reflection: $a = -2$.',
              },
              {
                label: 'Find shifts',
                content: 'Vertex moved from $(0,0)$ to $(2,3)$: right $2$ ($h = 2$), up $3$ ($k = 3$).',
              },
              {
                label: 'Combine',
                content: '$g(x) = -2f(x - 2) + 3 = -2(x - 2)^2 + 3$.',
              },
              {
                label: 'Verify',
                content: '$g(3) = -2(1)^2 + 3 = -2 + 3 = 1$. Matches the given point.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: '$f(x) = x^2$ has vertex at $(0,0)$ and passes through $(1,1)$. The graph of $g$ has vertex at $(2, 3)$ and passes through $(3, 1)$. Both are parabolas. Express $g$ in terms of $f$.',
            answer: '$g(3) = -2(1)^2 + 3 = -2 + 3 = 1$. Matches the given point.',
          },
        ],
      },
    },
  },

  7: {
    moduleId: 'transformations',
    title: 'Simple Transformation From Table Example #1',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Pairing rows from two tables by equal outputs (for horizontal shifts) or equal inputs (for vertical shifts) reveals a single translation.',
        blocks: [
          {
            type: 'text',
            content: 'Table-based transformation problems provide numerical values for $f$ and $g$ and ask how they relate. The key strategy: match rows that share the **same output** to detect a horizontal shift, or rows with the **same input** to detect a vertical shift.',
          },
          {
            type: 'keyInsight',
            content: 'For a **horizontal** shift, the same $y$-values appear in both tables but at different $x$-values. The constant difference $\\Delta x = x_g - x_f$ across all matched pairs gives $g(x) = f(x - \\Delta x)$. For a **vertical** shift, $x$-values match but $y$-values differ by a constant $\\Delta y$: $g(x) = f(x) + \\Delta y$.',
          },
          {
            type: 'table',
            title: 'Example: Detecting a Horizontal Shift',
            headers: [
              '$x$',
              '$f(x)$',
              '$x$',
              '$g(x)$',
            ],
            rows: [
              [
                '$0$',
                '$3$',
                '$2$',
                '$3$',
              ],
              [
                '$1$',
                '$5$',
                '$3$',
                '$5$',
              ],
              [
                '$2$',
                '$9$',
                '$4$',
                '$9$',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Reversing the Shift Direction from Tables',
            wrong: 'Each $x$-value in $g$ is $2$ more than the corresponding $x$ in $f$, so student writes $g(x) = f(x + 2)$.',
            correction: `If $g$ produces $f$'s output at an $x$-value $2$ larger, then $g(x) = f(x - 2)$ (right $2$). Check: $g(2) = f(2 - 2) = f(0)$, which matches the table since $f(0) = g(2)$.`,
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Given tables:\n\n| $x$ | $f(x)$ |  | $x$ | $g(x)$ |\n|---|---|---|---|---|\n| $0$ | $1$ |  | $0$ | $4$ |\n| $1$ | $4$ |  | $1$ | $9$ |\n| $2$ | $9$ |  | $2$ | $16$ |\n\nExpress $g$ in terms of $f$.',
            steps: [
              {
                label: 'Match outputs',
                content: '$g(0) = 4 = f(1)$. $g(1) = 9 = f(2)$. Outputs match at shifted inputs.',
              },
              {
                label: 'Compute $\\Delta x$',
                content: 'Output $4$: $f$ at $x = 1$, $g$ at $x = 0$. $\\Delta x = 0 - 1 = -1$. Output $9$: $f$ at $x = 2$, $g$ at $x = 1$. $\\Delta x = 1 - 2 = -1$. Constant.',
              },
              {
                label: 'Write transformation',
                content: '$g(x) = f(x - (-1)) = f(x + 1)$. Horizontal shift **left $1$**.',
              },
              {
                label: 'Verify',
                content: '$g(2) = f(2 + 1) = f(3)$. If $f(x) = (x+1)^2$, then $f(3) = 16 = g(2)$.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Given tables:\n\n| $x$ | $f(x)$ |  | $x$ | $g(x)$ |\n|---|---|---|---|---|\n| $0$ | $1$ |  | $0$ | $4$ |\n| $1$ | $4$ |  | $1$ | $9$ |\n| $2$ | $9$ |  | $2$ | $16$ |\n\nExpress $g$ in terms of $f$.',
            answer: '$g(2) = f(2 + 1) = f(3)$. If $f(x) = (x+1)^2$, then $f(3) = 16 = g(2)$.',
          },
        ],
      },
    },
  },

  8: {
    moduleId: 'transformations',
    title: 'Simple Transformation From Table #1 (DESMOS Method)',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'The built-in DESMOS calculator on the Digital SAT can plot table data as discrete points, making shifts visually obvious.',
        blocks: [
          {
            type: 'text',
            content: 'For table-based transformation problems, entering both data sets into DESMOS produces two sets of plotted points in different colors. Shifts that might be ambiguous numerically become visually clear when the point clouds are displayed on the same axes.',
          },
          {
            type: 'keyInsight',
            content: 'DESMOS plots discrete points from tables. Two point sets that are identical in shape but offset horizontally or vertically reveal the translation at a glance — faster and less error-prone than row-by-row arithmetic.',
          },
          {
            type: 'table',
            headers: [
              'Step',
              'DESMOS Action',
              'Purpose',
            ],
            rows: [
              [
                '$1$',
                'Click $+$ → "table" → enter $f$ data',
                'Plot $f$ points in color A',
              ],
              [
                '$2$',
                'Click $+$ → "table" → enter $g$ data',
                'Plot $g$ points in color B',
              ],
              [
                '$3$',
                'Compare the two point sets visually',
                'Identify direction and magnitude of shift',
              ],
              [
                '$4$',
                'Verify with one algebraic check',
                'Confirm the visual estimate is exact',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Eyeballing Without Algebraic Verification',
            wrong: 'Student glances at DESMOS and guesses "right $2$" without checking any coordinates numerically.',
            correction: 'After visual estimation, verify with at least one algebraic check: pick a point on $g$, apply the proposed transformation, and confirm it maps to the correct point on $f$. $g(x_0) = f(x_0 - h)$ must hold exactly.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Tables: $f$: $(0, 2), (1, 5), (2, 10)$. $g$: $(3, 2), (4, 5), (5, 10)$. Use the DESMOS method to find the relationship.',
            steps: [
              {
                label: 'Enter tables',
                content: 'Table 1: $x = \\{0, 1, 2\\}$, $y = \\{2, 5, 10\\}$. Table 2: $x = \\{3, 4, 5\\}$, $y = \\{2, 5, 10\\}$.',
              },
              {
                label: 'Visual observation',
                content: 'Both point sets sit at the same heights. The second set is displaced $3$ units to the right.',
              },
              {
                label: 'Formulate',
                content: '$g(x) = f(x - 3)$: horizontal shift right $3$.',
              },
              {
                label: 'Verify',
                content: '$g(3) = f(3 - 3) = f(0) = 2$. $g(4) = f(1) = 5$. Both match.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Tables: $f$: $(0, 2), (1, 5), (2, 10)$. $g$: $(3, 2), (4, 5), (5, 10)$. Use the DESMOS method to find the relationship.',
            answer: '$g(3) = f(3 - 3) = f(0) = 2$. $g(4) = f(1) = 5$. Both match.',
          },
        ],
      },
    },
  },

  9: {
    moduleId: 'transformations',
    title: 'Complex Transformation From Table Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'When a single horizontal or vertical shift does not fully explain the data, a compound transformation — combining a shift with another shift or a stretch — is present.',
        blocks: [
          {
            type: 'text',
            content: `A "complex" table transformation means $g$'s outputs do not simply equal $f$'s outputs at shifted inputs. After accounting for a horizontal shift, a residual constant difference indicates an additional vertical shift; a residual constant ratio indicates a vertical stretch.`,
          },
          {
            type: 'keyInsight',
            content: 'Strategy: first attempt output matching to detect a horizontal shift. If a consistent $\\Delta x$ is found but $y$-values still differ, compute $g(x) - f(x - \\Delta x)$ for each row. A constant difference means an additional vertical shift; a constant ratio means a stretch.',
          },
          {
            type: 'table',
            headers: [
              'Pattern in Data',
              'Transformation',
            ],
            rows: [
              [
                'Same outputs at shifted $x$-values',
                'Horizontal translation only',
              ],
              [
                'Same $x$-values, constant $y$-difference',
                'Vertical translation only',
              ],
              [
                'Same $x$-values, constant $y$-ratio',
                'Vertical stretch/compress',
              ],
              [
                'Shifted $x$-values AND constant $y$-difference',
                'Horizontal + vertical translation',
              ],
              [
                'Shifted $x$-values AND constant $y$-ratio',
                'Horizontal translation + vertical stretch',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Reporting Only One Component of a Combined Shift',
            wrong: 'Student finds $g(x)$ values are close to $f(x - 2)$ values but consistently off by $3$, and writes $g(x) = f(x - 2)$ only.',
            correction: 'The constant discrepancy of $3$ is a vertical shift. Both components must appear: $g(x) = f(x - 2) + 3$ — horizontal right $2$ AND vertical up $3$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'Given:\n\n| $x$ | $f(x)$ | | $x$ | $g(x)$ |\n|---|---|---|---|---|\n| $0$ | $1$ | | $2$ | $6$ |\n| $1$ | $3$ | | $3$ | $8$ |\n| $2$ | $7$ | | $4$ | $12$ |\n| $3$ | $13$ | | $5$ | $18$ |\n\nExpress $g$ in terms of $f$.',
            steps: [
              {
                label: 'Try output matching',
                content: `$g(2) = 6$, $g(3) = 8$. Neither $6$ nor $8$ appears in $f$'s output column. Direct matching fails.`,
              },
              {
                label: 'Try horizontal shift',
                content: '$g(2)$ vs. $f(0)$: $6$ vs. $1$ (diff $5$). $g(3)$ vs. $f(1)$: $8$ vs. $3$ (diff $5$). $g(4)$ vs. $f(2)$: $12$ vs. $7$ (diff $5$). Constant difference of $5$.',
              },
              {
                label: 'Identify components',
                content: 'Horizontal shift: $x_g - x_f = 2$ (right $2$). Vertical shift: residual $= 5$ (up $5$).',
              },
              {
                label: 'Write equation',
                content: '$g(x) = f(x - 2) + 5$.',
              },
              {
                label: 'Verify',
                content: '$g(5) = f(5 - 2) + 5 = f(3) + 5 = 13 + 5 = 18$. Confirmed.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Given:\n\n| $x$ | $f(x)$ | | $x$ | $g(x)$ |\n|---|---|---|---|---|\n| $0$ | $1$ | | $2$ | $6$ |\n| $1$ | $3$ | | $3$ | $8$ |\n| $2$ | $7$ | | $4$ | $12$ |\n| $3$ | $13$ | | $5$ | $18$ |\n\nExpress $g$ in terms of $f$.',
            answer: '$g(5) = f(5 - 2) + 5 = f(3) + 5 = 13 + 5 = 18$. Confirmed.',
          },
        ],
      },
    },
  },

  10: {
    moduleId: 'transformations',
    title: 'Complex Transformation From Table (DESMOS Method)',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'DESMOS sliders let you visually "dial in" multiple transformation parameters simultaneously when table data involves compound changes.',
        blocks: [
          {
            type: 'text',
            content: 'For compound table transformations, DESMOS supports sliders for $a$, $h$, and $k$ in $g(x) = a \\cdot f(x - h) + k$. Adjusting each slider until the transformed curve passes through all $g$ data points identifies every parameter at once.',
          },
          {
            type: 'keyInsight',
            content: 'Adjust sliders in this order for efficiency: $h$ first (horizontal alignment), then $a$ (vertical scale), then $k$ (vertical fine-tuning). This sequence minimizes back-and-forth adjustments.',
          },
          {
            type: 'table',
            headers: [
              'Slider',
              'Controls',
              'Adjustment Cue',
            ],
            rows: [
              [
                '$h$',
                'Horizontal shift',
                'Slide until peaks/valleys align horizontally with $g$ points',
              ],
              [
                '$a$',
                'Vertical stretch/reflect',
                'Adjust until heights of corresponding points match',
              ],
              [
                '$k$',
                'Vertical shift',
                'Fine-tune so all $g$ points sit exactly on the curve',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Accepting a Visual Estimate Without Verification',
            wrong: 'Student sets $h \\approx 2.5$ by eye from DESMOS and selects the closest answer choice without checking.',
            correction: 'DESMOS sliders may not land precisely on integers. After visual estimation, substitute the candidate integer values into one data point algebraically: $g(x_0) = a \\cdot f(x_0 - h) + k$. Confirm exact equality.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'Tables: $f$: $(0, 1), (1, 4), (2, 9)$. $g$: $(1, -1), (2, -7), (3, -17)$. Use DESMOS to find $g$ in terms of $f$.',
            steps: [
              {
                label: 'Enter data',
                content: 'Table 1 ($f$): $\\{(0,1),(1,4),(2,9)\\}$. Table 2 ($g$): $\\{(1,-1),(2,-7),(3,-17)\\}$.',
              },
              {
                label: 'Fit $f$',
                content: 'Regression or inspection yields $f(x) = (x+1)^2$. Verify: $f(0) = 1$, $f(1) = 4$, $f(2) = 9$.',
              },
              {
                label: 'Adjust sliders',
                content: 'Set $h = 1$ (horizontal alignment). Set $a = -2$ (vertical scale + reflection). Set $k = 1$ (vertical fine-tune). All $g$ points fall on the curve.',
              },
              {
                label: 'Write answer',
                content: '$g(x) = -2f(x - 1) + 1$.',
              },
              {
                label: 'Verify',
                content: '$g(1) = -2f(0) + 1 = -2(1) + 1 = -1$. $g(2) = -2f(1) + 1 = -2(4) + 1 = -7$. Both match.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Tables: $f$: $(0, 1), (1, 4), (2, 9)$. $g$: $(1, -1), (2, -7), (3, -17)$. Use DESMOS to find $g$ in terms of $f$.',
            answer: '$g(1) = -2f(0) + 1 = -2(1) + 1 = -1$. $g(2) = -2f(1) + 1 = -2(4) + 1 = -7$. Both match.',
          },
        ],
      },
    },
  },

  11: {
    moduleId: 'transformations',
    title: 'Simple Transformation From Expression Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'A single algebraic modification to $f(x)$ — adding outside, subtracting inside, or negating — corresponds to exactly one geometric transformation.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Vertical shift',
                formula: '$g(x) = f(x) + k$',
                note: 'Constant added outside',
              },
              {
                label: 'Horizontal shift',
                formula: '$g(x) = f(x - h)$',
                note: 'Constant subtracted inside',
              },
              {
                label: 'Reflection ($x$-axis)',
                formula: '$g(x) = -f(x)$',
                note: 'Negative sign outside',
              },
              {
                label: 'Reflection ($y$-axis)',
                formula: '$g(x) = f(-x)$',
                note: 'Negative sign inside argument',
              },
            ],
          },
          {
            type: 'text',
            content: 'A "simple" expression transformation involves one change: $g(x) = f(x) + 5$ (vertical shift), $g(x) = f(x - 3)$ (horizontal shift), $g(x) = -f(x)$ (reflection), or $g(x) = 2f(x)$ (stretch). Matching the expression to the transformation template gives the geometric description.',
          },
          {
            type: 'keyInsight',
            content: 'Read the expression from the inside out. Check inside the function argument first for horizontal changes, then check outside for vertical changes. A simple transformation modifies exactly one of these locations.',
          },
          {
            type: 'trapCard',
            title: 'Misreading the Sign Inside the Argument',
            wrong: 'Student reads $g(x) = f(x + 3)$ and says "shifted right $3$" because $+3$ feels rightward.',
            correction: '$f(x + 3) = f(x - (-3))$, so $h = -3$. The shift is **left $3$**. The sign inside the argument is always opposite to the direction of horizontal movement.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: '$f(x) = x^3$ and $g(x) = (x - 5)^3$. Describe the transformation and find $g(6)$.',
            steps: [
              {
                label: 'Compare',
                content: '$g(x) = f(x - 5)$. The $-5$ is inside the argument.',
              },
              {
                label: 'Identify',
                content: 'Horizontal shift **right $5$**.',
              },
              {
                label: 'Evaluate',
                content: '$g(6) = (6 - 5)^3 = 1^3 = 1$.',
              },
              {
                label: 'Cross-check',
                content: '$f(1) = 1$. Since $g(6) = f(6-5) = f(1) = 1$, the shift is confirmed.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: '$f(x) = x^3$ and $g(x) = (x - 5)^3$. Describe the transformation and find $g(6)$.',
            answer: '$f(1) = 1$. Since $g(6) = f(6-5) = f(1) = 1$, the shift is confirmed.',
          },
        ],
      },
    },
  },

  12: {
    moduleId: 'transformations',
    title: 'Complex Transformation From Expression Example #1',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Multiple modifications in a single expression are decomposed by matching each part to the general form $g(x) = a \\cdot f(b(x - h)) + k$.',
        blocks: [
          {
            type: 'formula',
            label: 'General Transformation Form',
            content: '$$g(x) = a \\cdot f(b(x - h)) + k$$',
          },
          {
            type: 'text',
            content: 'A complex expression like $g(x) = 2f(x - 1) + 3$ bundles a horizontal shift, a vertical stretch, and a vertical shift. Each parameter occupies a specific position in the general form, and reading them individually recovers every geometric operation.',
          },
          {
            type: 'keyInsight',
            content: 'Order of operations for transformations: (1) horizontal scale/reflect ($b$), (2) horizontal shift ($h$), (3) vertical scale/reflect ($a$), (4) vertical shift ($k$). Stretches and reflections always precede translations.',
          },
          {
            type: 'trapCard',
            title: 'Applying the Vertical Shift Before the Stretch',
            wrong: 'For $g(x) = 3f(x) - 2$, student shifts down $2$ first, then stretches by $3$, producing incorrect coordinates.',
            correction: 'The stretch by $3$ applies to $f(x)$ first (all $y$-values tripled), then $-2$ shifts the entire result down. Algebraically: compute $3f(x)$, then subtract $2$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'Let $f(x) = x^2$. Describe all transformations and write the final equation for $g(x) = -\\frac{1}{2}f(x + 4) - 3$.',
            steps: [
              {
                label: 'Identify $h$',
                content: '$x + 4 = x - (-4)$, so $h = -4$. Horizontal shift **left $4$**.',
              },
              {
                label: 'Identify $a$',
                content: '$a = -\\frac{1}{2}$. $|a| = \\frac{1}{2} < 1$: vertical **compression** by factor $\\frac{1}{2}$. Negative sign: **reflection** over $x$-axis.',
              },
              {
                label: 'Identify $k$',
                content: '$k = -3$. Vertical shift **down $3$**.',
              },
              {
                label: 'Expand',
                content: '$g(x) = -\\frac{1}{2}(x + 4)^2 - 3$.',
              },
              {
                label: 'Verify at $x = 0$',
                content: '$g(0) = -\\frac{1}{2}(16) - 3 = -8 - 3 = -11$. Trace: $f(0+4) = 16$, then $-\\frac{1}{2}(16) = -8$, then $-8 - 3 = -11$.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Let $f(x) = x^2$. Describe all transformations and write the final equation for $g(x) = -\\frac{1}{2}f(x + 4) - 3$.',
            answer: '$g(0) = -\\frac{1}{2}(16) - 3 = -8 - 3 = -11$. Trace: $f(0+4) = 16$, then $-\\frac{1}{2}(16) = -8$, then $-8 - 3 = -11$.',
          },
        ],
      },
    },
  },

  13: {
    moduleId: 'transformations',
    title: 'Complex Transformation From Expression Example #2',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Transformations sometimes hide inside expanded polynomials. Completing the square converts standard form back to vertex form, revealing the shifts.',
        blocks: [
          {
            type: 'formula',
            label: 'Completing the Square',
            content: '$$ax^2 + bx + c = a\\left(x - \\frac{b}{2a}\\right)^2 + \\left(c - \\frac{b^2}{4a}\\right)$$',
          },
          {
            type: 'text',
            content: 'An expression like $g(x) = 2x^2 - 12x + 22$ does not show its transformation parameters directly. Factoring out the leading coefficient and completing the square converts it to $2(x - 3)^2 + 4$, which is immediately readable as a transformation of $f(x) = x^2$.',
          },
          {
            type: 'keyInsight',
            content: 'Completing the square converts $ax^2 + bx + c$ into $a(x - h)^2 + k$, which directly reveals the vertical stretch $a$, horizontal shift $h$, and vertical shift $k$.',
          },
          {
            type: 'trapCard',
            title: 'Reading Raw Coefficients as Shift Values',
            wrong: 'Student sees $2x^2 - 12x + 22$ and guesses "stretched by $2$, shifted right $12$, up $22$" from the coefficients.',
            correction: 'The $-12x$ and $+22$ are artifacts of expansion. Completing the square gives $2(x - 3)^2 + 4$: stretch by $2$, right $3$, up $4$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'Express $g(x) = -x^2 + 6x - 5$ as a transformation of $f(x) = x^2$.',
            steps: [
              {
                label: 'Factor out $-1$',
                content: '$g(x) = -(x^2 - 6x) - 5$.',
              },
              {
                label: 'Complete the square',
                content: '$x^2 - 6x = (x - 3)^2 - 9$. So $g(x) = -((x-3)^2 - 9) - 5 = -(x-3)^2 + 9 - 5 = -(x-3)^2 + 4$.',
              },
              {
                label: 'Read transformations',
                content: '$a = -1$: reflection over $x$-axis. $h = 3$: right $3$. $k = 4$: up $4$.',
              },
              {
                label: 'Summary',
                content: '$g(x) = -f(x - 3) + 4$. Reflect over $x$-axis, shift right $3$, shift up $4$.',
              },
              {
                label: 'Verify',
                content: '$g(3) = -(3-3)^2 + 4 = 4$. Vertex at $(3, 4)$, opening downward. $g(0) = -9 + 4 = -5$, matching the original expression: $-(0) + 0 - 5 = -5$.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Express $g(x) = -x^2 + 6x - 5$ as a transformation of $f(x) = x^2$.',
            answer: '$g(3) = -(3-3)^2 + 4 = 4$. Vertex at $(3, 4)$, opening downward. $g(0) = -9 + 4 = -5$, matching the original expression: $-(0) + 0 - 5 = -5$.',
          },
        ],
      },
    },
  },

  14: {
    moduleId: 'transformations',
    title: 'Difficult Transformations (System of Equations Method)',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'When transformation parameters are unknown, data points on $g$ generate equations that can be solved as a system.',
        blocks: [
          {
            type: 'text',
            content: 'Some problems provide the parent function $f$, a template like $g(x) = af(x - h) + k$ with unknown parameters, and specific points on $g$. Each point substituted into the template yields one equation. With enough points, the system determines $a$, $h$, and $k$.',
          },
          {
            type: 'keyInsight',
            content: 'The number of unknowns dictates the number of required data points. One unknown ($k$ alone) needs $1$ point. Two unknowns ($a$ and $k$) need $2$ points. Three unknowns ($a$, $h$, $k$) need $3$ points — or $2$ points plus a symmetry condition.',
          },
          {
            type: 'table',
            headers: [
              'Unknowns',
              'Points Required',
              'Typical Setup',
            ],
            rows: [
              [
                '$1$ (e.g., $k$)',
                '$1$',
                '$g(x_1) = f(x_1) + k$; solve directly',
              ],
              [
                '$2$ (e.g., $a, k$)',
                '$2$',
                'Two equations from $g(x_i) = a \\cdot f(x_i) + k$; eliminate one variable',
              ],
              [
                '$3$ ($a, h, k$)',
                '$3$ or $2$ + symmetry',
                'Substitution or elimination to solve the system',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Evaluating $f$ at the Raw Input Instead of the Shifted Input',
            wrong: 'The transformation is $g(x) = af(x - 2) + k$ and student writes $g(4) = af(4) + k$ instead of $af(2) + k$.',
            correction: 'The horizontal shift must be applied before evaluating $f$: $g(4) = af(4 - 2) + k = af(2) + k$. Omitting the shift produces the wrong value of $f$ and corrupts the entire system.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: '$f(x) = x^2$. The function $g(x) = a(x - h)^2 + k$ passes through $(1, 7)$ and $(3, 7)$, and its vertex has $y$-coordinate $3$. Find $a$, $h$, and $k$.',
            steps: [
              {
                label: 'Use symmetry',
                content: '$g(1) = g(3) = 7$. Axis of symmetry: $x = \\frac{1+3}{2} = 2$. So $h = 2$.',
              },
              {
                label: 'Find $k$',
                content: 'Vertex is at $(2, k)$ with $y_{\\text{vertex}} = 3$, so $k = 3$.',
              },
              {
                label: 'Find $a$',
                content: 'Use $(1, 7)$: $7 = a(1 - 2)^2 + 3 = a + 3$. So $a = 4$.',
              },
              {
                label: 'Verify',
                content: '$g(3) = 4(3-2)^2 + 3 = 4 + 3 = 7$. Confirmed.',
              },
              {
                label: 'Answer',
                content: '$a = 4$, $h = 2$, $k = 3$. $g(x) = 4(x-2)^2 + 3$.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: '$f(x) = x^2$. The function $g(x) = a(x - h)^2 + k$ passes through $(1, 7)$ and $(3, 7)$, and its vertex has $y$-coordinate $3$. Find $a$, $h$, and $k$.',
            answer: '$a = 4$, $h = 2$, $k = 3$. $g(x) = 4(x-2)^2 + 3$.',
          },
        ],
      },
    },
  },

  15: {
    moduleId: 'transformations',
    title: 'Difficult Transformations (Answer Choice Method)',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Testing each answer choice against given data points can be faster than setting up a system of equations — especially when the algebra is messy.',
        blocks: [
          {
            type: 'text',
            content: 'The answer-choice method (backsolving) works by substituting given data points into each proposed transformation. Any choice that fails to produce the correct output is eliminated. Two data points are usually sufficient to narrow to one answer.',
          },
          {
            type: 'keyInsight',
            content: 'Start with middle-valued choices (B or C) to establish direction. If B yields a value too small, move to C or D. This binary-search approach eliminates choices faster than testing A first.',
          },
          {
            type: 'table',
            headers: [
              'Scenario',
              'Recommended Method',
            ],
            rows: [
              [
                'One unknown, clean numbers',
                'Direct algebra (fastest)',
              ],
              [
                'Two+ unknowns, clean answer choices',
                'Answer choice elimination',
              ],
              [
                'Messy numbers, DESMOS available',
                'DESMOS sliders',
              ],
              [
                'System of equations is straightforward',
                'System method (Lesson 14)',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Declaring an Answer After Testing Only One Point',
            wrong: 'Student tests $(0, 2)$ against all four choices, finds two that pass, and guesses between them without further testing.',
            correction: 'Two surviving choices require a second data point. A correct transformation must satisfy **every** given condition. Test $(1, 5)$ (or another available point) against the remaining choices to isolate the single correct answer.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: '$f(x) = x^2$. The graph of $g$ passes through $(1, 5)$ and $(0, 2)$. Which defines $g$?\n\n(A) $g(x) = f(x) + 2$\n(B) $g(x) = f(x - 1) + 4$\n(C) $g(x) = f(x + 1) + 1$\n(D) $g(x) = f(x - 1) + 1$',
            steps: [
              {
                label: 'Test $(0, 2)$',
                content: 'A: $f(0) + 2 = 0 + 2 = 2$. B: $f(-1) + 4 = 1 + 4 = 5 \\neq 2$. C: $f(1) + 1 = 1 + 1 = 2$. D: $f(-1) + 1 = 1 + 1 = 2$.',
              },
              {
                label: 'Eliminate',
                content: 'B fails. A, C, D survive.',
              },
              {
                label: 'Test $(1, 5)$',
                content: 'A: $f(1) + 2 = 1 + 2 = 3 \\neq 5$. C: $f(2) + 1 = 4 + 1 = 5$. D: $f(0) + 1 = 0 + 1 = 1 \\neq 5$.',
              },
              {
                label: 'Eliminate',
                content: 'A and D fail. Only C survives.',
              },
              {
                label: 'Answer',
                content: '**(C)** $g(x) = f(x + 1) + 1 = (x+1)^2 + 1$.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: '$f(x) = x^2$. The graph of $g$ passes through $(1, 5)$ and $(0, 2)$. Which defines $g$?\n\n(A) $g(x) = f(x) + 2$\n(B) $g(x) = f(x - 1) + 4$\n(C) $g(x) = f(x + 1) + 1$\n(D) $g(x) = f(x - 1) + 1$',
            answer: '**(C)** $g(x) = f(x + 1) + 1 = (x+1)^2 + 1$.',
          },
        ],
      },
    },
  },
};
