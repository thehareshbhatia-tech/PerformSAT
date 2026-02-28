export const transformationsLessonTabs = {

  // ─── SECTION: FUNDAMENTALS ────────────────────────────────────────

  1: {
    moduleId: 'transformations',
    title: 'What Is a Transformation?',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A transformation changes the position, size, or shape of a graph. The SAT focuses on four types, all governed by simple algebraic rules.',
        blocks: [
          {
            type: 'text',
            content: 'A **transformation** takes a parent function $f(x)$ and produces a new function by shifting, flipping, stretching, or compressing its graph. On the SAT you will not graph by hand — instead you read what a transformation **does** from the equation.',
          },
          {
            type: 'formulaGrid',
            items: [
              { label: 'Translation', formula: '$f(x \\pm h) \\pm k$', note: 'Slides the graph without changing shape' },
              { label: 'Reflection', formula: '$-f(x)$ or $f(-x)$', note: 'Flips the graph across an axis' },
              { label: 'Vertical Stretch / Compress', formula: '$a \\cdot f(x)$', note: '$|a|>1$ taller; $0<|a|<1$ shorter' },
              { label: 'Horizontal Stretch / Compress', formula: '$f(bx)$', note: '$|b|>1$ narrower; $0<|b|<1$ wider' },
            ],
          },
          {
            type: 'keyInsight',
            content: 'Every transformation modifies $f(x)$ in one of two places: **outside** the function (affects $y$, behaves as expected) or **inside** the parentheses (affects $x$, behaves *opposite* to expectation). This inside/outside distinction is the key to all transformation questions.',
          },
          {
            type: 'table',
            title: 'Inside vs. Outside at a Glance',
            headers: ['Location', 'Affects', 'Intuitive?', 'Example'],
            rows: [
              ['Outside: $f(x) + k$', '$y$-values', 'Yes — $+k$ shifts up', '$f(x) + 3$ moves graph up $3$'],
              ['Inside: $f(x + h)$', '$x$-values', 'No — $+h$ shifts left', '$f(x + 3)$ moves graph left $3$'],
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
            title: 'Words-to-Equation Translation',
            content: 'Recognition cue: "the graph of $g$ is the graph of $f$ shifted/reflected/stretched..." First move: translate each word into algebra. "Left $2$" becomes $f(x+2)$. "Up $5$" becomes $+5$. Combine: $g(x) = f(x+2) + 5$.',
          },
          {
            type: 'trapCard',
            title: 'Horizontal Direction Is Reversed',
            wrong: '"Shifted right $3$" — student writes $f(x + 3)$.',
            correction: 'Horizontal shifts work opposite to intuition. Right $3$ means $f(x - 3)$. Left $3$ means $f(x + 3)$. The sign inside the parentheses is **opposite** the direction.',
          },
          {
            type: 'tip',
            content: 'When two graphs are shown side by side, pick a clear point on the original (e.g., the vertex). Find where it moved on the new graph. The horizontal and vertical displacement directly give the shift values.',
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Reflection vs. Translation',
            content: 'Recognition cue: the transformed graph is a mirror image, not just displaced. If all $y$-values flip sign, it is $-f(x)$ (reflection over $x$-axis). If the graph reads backward, it is $f(-x)$ (reflection over $y$-axis). A translation preserves orientation; a reflection reverses it.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Identifying a Transformation from an Equation',
            items: [
              'Write the transformed equation in the form $g(x) = a \\cdot f(b(x - h)) + k$.',
              'Read each parameter: $h$ = horizontal shift, $k$ = vertical shift, $a$ = vertical stretch/reflect, $b$ = horizontal stretch/reflect.',
              'Remember: horizontal parameters ($h$, $b$) behave opposite to their sign or magnitude.',
            ],
          },
          {
            type: 'steps',
            title: 'Identifying a Transformation from Two Graphs',
            items: [
              'Pick $2$–$3$ clear points on the original graph.',
              'Find where those same points appear on the transformed graph.',
              'Compute the change in $x$ and change in $y$ for each point.',
              'Consistent $\\Delta x$ = horizontal translation. Consistent $\\Delta y$ = vertical translation. Sign flip in $y$ = reflection over $x$-axis.',
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Confusing Inside and Outside Operations',
            wrong: 'Student sees $f(x) + 3$ and thinks the graph shifts right $3$.',
            correction: '$f(x) + 3$ adds $3$ to the **output** — the graph shifts **up** $3$. To shift right, the $3$ must appear inside: $f(x - 3)$.',
          },
          {
            type: 'trapCard',
            title: 'Assuming All Transformations Are Translations',
            wrong: 'Student sees $-f(x)$ and describes it as "shifted down."',
            correction: '$-f(x)$ is a **reflection** over the $x$-axis, not a downward shift. The graph flips upside-down; it does not slide.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'The graph of $g$ is the graph of $f(x) = x^2$ shifted right $4$ units and up $1$ unit. Write $g(x)$.',
            steps: [
              { label: 'Horizontal shift', content: 'Right $4$: replace $x$ with $(x - 4)$ inside the function.' },
              { label: 'Vertical shift', content: 'Up $1$: add $1$ outside the function.' },
              { label: 'Combine', content: '$g(x) = (x - 4)^2 + 1$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Point $(2, 5)$ lies on the graph of $f$. After a transformation, the corresponding point on $g$ is $(2, -5)$. Which transformation was applied?',
            steps: [
              { label: 'Compare coordinates', content: 'The $x$-value stayed the same; the $y$-value changed from $5$ to $-5$.' },
              { label: 'Identify', content: 'The $y$-value was negated: $5 \\to -5$. This is $g(x) = -f(x)$.' },
              { label: 'Answer', content: 'Reflection over the $x$-axis.' },
            ],
          },
        ],
      },
    },
  },

  2: {
    moduleId: 'transformations',
    title: 'Vertical Translations (Up & Down)',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Adding a constant outside the function slides the graph up or down — the most intuitive transformation.',
        blocks: [
          {
            type: 'text',
            content: 'If $g(x) = f(x) + k$, every output of $f$ increases by $k$. The graph moves **up** $k$ units when $k > 0$ and **down** $|k|$ units when $k < 0$. The shape stays identical.',
          },
          {
            type: 'formulaGrid',
            items: [
              { label: 'Shift Up', formula: '$g(x) = f(x) + k$', note: '$k > 0$ — every $y$-value increases by $k$' },
              { label: 'Shift Down', formula: '$g(x) = f(x) - k$', note: '$k > 0$ — every $y$-value decreases by $k$' },
            ],
          },
          {
            type: 'comparison',
            items: [
              {
                label: 'Correct',
                variant: 'correct',
                content: '$f(x) = x^2$, shifted up $3$:\n$g(x) = x^2 + 3$\nVertex moves from $(0, 0)$ to $(0, 3)$.',
              },
              {
                label: 'Common Mistake',
                variant: 'wrong',
                content: 'Student writes $g(x) = (x + 3)^2$ — this is a **horizontal** shift left $3$, not a vertical shift. The $+3$ is inside the parentheses.',
              },
            ],
          },
          {
            type: 'keyInsight',
            content: 'Vertical translations affect only the $y$-coordinates of every point. If the vertex was at $(h, k)$, after shifting up $d$ it is at $(h, k + d)$. The $x$-coordinate never changes.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Vertex Form Shortcut',
            content: 'Recognition cue: $y = a(x - h)^2 + k$ with vertex $(h, k)$. A vertical translation changes only $k$. If the vertex moves from $(2, 5)$ to $(2, 8)$, the graph shifted **up $3$** — add $3$ to $k$.',
          },
          {
            type: 'trapCard',
            title: 'Mixing Vertical and Horizontal',
            wrong: '"Shifted up $3$" — student writes $f(x) = (x - 3)^2$ instead of $f(x) = x^2 + 3$.',
            correction: 'Up/down is **outside** the function ($+k$ or $-k$). Left/right is **inside** the parentheses ($x \\pm h$). Adding $3$ inside moves the graph left, not up.',
          },
          {
            type: 'tip',
            content: 'Quick check: if only the $y$-coordinates of points changed, it is a vertical shift. If only the $x$-coordinates changed, it is a horizontal shift. If both changed, it is a combined translation.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Applying a Vertical Translation',
            items: [
              'Identify the direction: "up" means $+k$; "down" means $-k$.',
              'Add the constant **outside** the entire function: $g(x) = f(x) \\pm k$.',
              'If needed, expand and simplify. For $f(x) = 2x + 1$ shifted down $4$: $g(x) = (2x + 1) - 4 = 2x - 3$.',
            ],
          },
          {
            type: 'steps',
            title: 'Reading a Vertical Translation from a Graph',
            items: [
              'Pick a recognizable point on the original graph (vertex, intercept, etc.).',
              'Find the same feature on the transformed graph.',
              'Compute $\\Delta y$: positive means up, negative means down.',
              'Write $g(x) = f(x) + \\Delta y$.',
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Adding Inside Instead of Outside',
            wrong: 'To shift $f(x) = \\sqrt{x}$ up $5$, student writes $\\sqrt{x + 5}$.',
            correction: '$\\sqrt{x + 5}$ is $f(x + 5)$, a horizontal shift left $5$. The correct answer is $\\sqrt{x} + 5$.',
          },
          {
            type: 'trapCard',
            title: 'Sign Error on "Down"',
            wrong: '"Shifted down $4$" — student writes $f(x) + 4$.',
            correction: 'Down means subtract. $g(x) = f(x) - 4$.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'The function $f$ is defined by $f(x) = 2x + 1$. The graph of $g$ is the graph of $f$ translated $4$ units down. What is $g(x)$?',
            steps: [
              { label: 'Apply rule', content: 'Down $4$ means subtract $4$ outside: $g(x) = f(x) - 4$.' },
              { label: 'Substitute', content: '$g(x) = (2x + 1) - 4 = 2x - 3$.' },
              { label: 'Answer', content: '$g(x) = 2x - 3$.' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'The vertex of $f(x) = x^2$ is at $(0, 0)$. After a vertical translation, the vertex is at $(0, -7)$. Write $g(x)$ and state the $y$-intercept of $g$.',
            steps: [
              { label: 'Find shift', content: 'Vertex moved from $y = 0$ to $y = -7$: shift is $-7$ (down $7$).' },
              { label: 'Write equation', content: '$g(x) = x^2 - 7$.' },
              { label: '$y$-intercept', content: 'Set $x = 0$: $g(0) = -7$. The $y$-intercept is $(0, -7)$.' },
            ],
          },
        ],
      },
    },
  },

  3: {
    moduleId: 'transformations',
    title: 'Horizontal Translations (Left & Right)',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Horizontal translations modify the input and work opposite to what you might expect. This is the number-one transformation trap on the SAT.',
        blocks: [
          {
            type: 'text',
            content: 'If $g(x) = f(x - h)$, the graph shifts **right** $h$ units. If $g(x) = f(x + h)$, the graph shifts **left** $h$ units. The sign is *opposite* to the direction of movement.',
          },
          {
            type: 'formulaGrid',
            items: [
              { label: 'Shift Right', formula: '$g(x) = f(x - h)$', note: 'Subtract inside — moves right' },
              { label: 'Shift Left', formula: '$g(x) = f(x + h)$', note: 'Add inside — moves left' },
            ],
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Why Is It Backwards?',
            content: '$f(x - 3)$ means the function "waits" $3$ extra units before producing each output. To get the value $f$ originally gave at $x = 0$, you now need $x = 3$. So the whole graph slides **right** by $3$.',
          },
          {
            type: 'keyInsight',
            content: 'Quick mnemonic: **inside the parentheses, the sign lies**. $f(x - 3)$ moves right (not left). $f(x + 5)$ moves left (not right). Always go opposite the sign you see.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"The Graph of $g$ Is the Graph of $f$ Shifted..."',
            content: 'Recognition cue: a verbal description of a horizontal shift. First move: horizontal shifts go **inside** the function with the opposite sign. Vertical shifts go **outside** with the same sign.',
          },
          {
            type: 'trapCard',
            title: 'Sign Goes the Wrong Way',
            wrong: '"Shifted right $4$" — student writes $f(x + 4)$.',
            correction: 'Right $4$ means $f(x - 4)$. The sign inside is **opposite** the direction. Mnemonic: "inside the parentheses, the sign lies."',
          },
          {
            type: 'tip',
            content: 'Verification trick: pick a known point on $f$, say $(2, 5)$. "Right $4$" moves it to $(6, 5)$. Check: $g(6) = f(6 - 4) = f(2) = 5$. If you used $f(x + 4)$: $g(6) = f(10) \\neq 5$.',
          },
          {
            type: 'callout',
            variant: 'memorize',
            title: 'Combined Horizontal + Vertical',
            content: 'For $g(x) = f(x - h) + k$: shift right $h$, then up $k$. For $g(x) = f(x + h) - k$: shift left $h$, then down $k$. Horizontal part is inside (opposite sign); vertical part is outside (same sign).',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Applying a Horizontal Translation',
            items: [
              'Identify the direction: "right $h$" means replace $x$ with $(x - h)$; "left $h$" means replace $x$ with $(x + h)$.',
              'Substitute into the parent function. For $f(x) = (x - 1)^2 + 4$ shifted left $6$: replace $x$ with $(x + 6)$, giving $((x + 6) - 1)^2 + 4 = (x + 5)^2 + 4$.',
              'Simplify if required. The vertex moves from $(1, 4)$ to $(-5, 4)$.',
            ],
          },
          {
            type: 'steps',
            title: 'Reading a Horizontal Translation from a Graph',
            items: [
              'Identify a clear feature (vertex, $x$-intercept) on both graphs.',
              'Compute $\\Delta x$: if the feature moved from $x = 1$ to $x = 4$, the shift is right $3$.',
              'Write the transformation: $g(x) = f(x - 3)$.',
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Sign Confusion',
            wrong: '"Shift right $4$" — student writes $f(x + 4)$ because "right is positive."',
            correction: 'Horizontal translations work opposite: **right** $4$ means $f(x - 4)$. The subtraction makes the function "start later."',
          },
          {
            type: 'trapCard',
            title: 'Misreading Vertex Form',
            wrong: 'Student sees $(x + 3)^2$ and says the graph shifted right $3$.',
            correction: '$(x + 3)$ is $(x - (-3))$, so the horizontal shift is **left** $3$. The vertex is at $x = -3$, not $x = 3$.',
          },
          {
            type: 'trapCard',
            title: 'Confusing Horizontal and Vertical Shifts',
            wrong: 'Student applies both shifts inside the function: $f(x - 3 + 2)$ for "right $3$, up $2$."',
            correction: 'Horizontal shifts go inside: $f(x - 3)$. Vertical shifts go outside: $f(x - 3) + 2$. They occupy different positions in the equation.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'The vertex of $f(x) = (x - 1)^2 + 4$ is at $(1, 4)$. The graph of $g$ is obtained by shifting $f$ left $6$ units and down $2$ units. What is $g(x)$?',
            steps: [
              { label: 'Horizontal shift', content: 'Left $6$: replace $x$ with $(x + 6)$. $(x + 6 - 1)^2 = (x + 5)^2$.' },
              { label: 'Vertical shift', content: 'Down $2$: subtract $2$ outside. $+4 - 2 = +2$.' },
              { label: 'Combine', content: '$g(x) = (x + 5)^2 + 2$.' },
              { label: 'Verify vertex', content: 'New vertex: $(-5, 2)$. Original $(1,4)$ shifted left $6$, down $2$: $(1-6,\\; 4-2) = (-5, 2)$.' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'The graph of $y = \\sqrt{x}$ is shifted right $9$ units. Write the new equation.',
            steps: [
              { label: 'Apply rule', content: 'Right $9$: replace $x$ with $(x - 9)$ inside.' },
              { label: 'Answer', content: '$y = \\sqrt{x - 9}$.' },
            ],
          },
        ],
      },
    },
  },

  4: {
    moduleId: 'transformations',
    title: 'Transformation Rules Summary',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Complete reference for all function transformations tested on the SAT.',
        blocks: [
          {
            type: 'text',
            content: 'Every transformation falls into one of two categories: **outside** the function (affects $y$, behaves intuitively) or **inside** the function (affects $x$, behaves opposite).',
          },
          {
            type: 'table',
            title: 'Complete Transformation Table',
            headers: ['Transformation', 'Equation', 'Effect on Graph'],
            rows: [
              ['Vertical shift up $k$', '$f(x) + k$', 'Slides up $k$ units'],
              ['Vertical shift down $k$', '$f(x) - k$', 'Slides down $k$ units'],
              ['Horizontal shift right $h$', '$f(x - h)$', 'Slides right $h$ units'],
              ['Horizontal shift left $h$', '$f(x + h)$', 'Slides left $h$ units'],
              ['Reflect over $x$-axis', '$-f(x)$', 'Flips upside-down (negate $y$)'],
              ['Reflect over $y$-axis', '$f(-x)$', 'Flips left-right (negate $x$)'],
              ['Vertical stretch by $a$', '$a \\cdot f(x)$, $a > 1$', 'Taller / steeper'],
              ['Vertical compress by $a$', '$a \\cdot f(x)$, $0 < a < 1$', 'Shorter / flatter'],
              ['Horizontal compress by $b$', '$f(bx)$, $b > 1$', 'Narrower'],
              ['Horizontal stretch by $b$', '$f(bx)$, $0 < b < 1$', 'Wider'],
            ],
          },
          {
            type: 'formulaGrid',
            items: [
              { label: 'General Form', formula: '$g(x) = a \\cdot f(b(x - h)) + k$', note: '$a$ = vertical scale/reflect, $b$ = horizontal scale/reflect, $h$ = horizontal shift, $k$ = vertical shift' },
            ],
          },
          {
            type: 'keyInsight',
            content: 'Read a compound transformation **inside-out**: first handle what is inside the function ($b$, $h$), then what is outside ($a$, $k$). Stretches and reflections apply before translations.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Compound Transformations',
            content: 'Recognition cue: $g(x) = -2f(x - 3) + 1$ — multiple transformations in one equation. First move: read inside-out. Inside: $x - 3$ means right $3$. Then $2$ means vertical stretch by $2$. Then $-$ means reflect over $x$-axis. Then $+1$ means up $1$.',
          },
          {
            type: 'trapCard',
            title: 'Applying Vertical Shift Before Stretch',
            wrong: 'Student reads $-2f(x) + 1$ and applies $+1$ first, then stretches, getting the wrong final position.',
            correction: 'Order matters for non-translation operations: stretches and reflections apply **before** vertical translations. $-2f(x) + 1$ means stretch by $2$, reflect, then shift up $1$.',
          },
          {
            type: 'callout',
            variant: 'memorize',
            title: 'The Inside/Outside Rule',
            content: '**Outside** the function → affects $y$ → behaves as expected.\n**Inside** the parentheses → affects $x$ → behaves **opposite**.\nThis single principle explains every transformation direction.',
          },
          {
            type: 'tip',
            content: 'On the digital SAT, type the parent function into DESMOS, then type the transformed version. Visually confirm the shift direction, stretch, and reflection match your algebraic reading.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Reading a Transformed Equation',
            items: [
              'Start from the **innermost** operation on $x$ (inside the function).',
              'Identify horizontal shifts ($x - h$ or $x + h$) and horizontal stretches ($bx$).',
              'Move **outside**: identify vertical stretches ($a \\cdot$), reflections ($-$), and vertical shifts ($+k$ or $-k$).',
              'Translate each piece into a geometric description: "shifted right $h$, stretched by $a$, moved up $k$."',
            ],
          },
          {
            type: 'steps',
            title: 'Writing an Equation from a Verbal Description',
            items: [
              'Start with the parent function $f(x)$.',
              'Apply horizontal changes **inside**: replace $x$ with $(x - h)$ for right $h$, or $(x + h)$ for left $h$.',
              'Apply vertical stretch/compress: multiply the entire function by $a$.',
              'Apply reflections: negate the function ($-$) for $x$-axis reflection.',
              'Apply vertical shift **outside**: add $+k$ for up, $-k$ for down.',
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Horizontal Shift Sign Error',
            wrong: 'Student reads $f(x + 2)$ and says "right $2$."',
            correction: '$f(x + 2) = f(x - (-2))$, so $h = -2$. The graph shifts **left** $2$.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting Reflection Changes Direction',
            wrong: 'Student describes $-f(x - 3) + 1$ as "right $3$, up $1$" and ignores the negative.',
            correction: 'The $-$ in front of $f$ reflects the graph over the $x$-axis. All $y$-values are negated before the $+1$ shift. The vertex may end up below where the student expects.',
          },
          {
            type: 'trapCard',
            title: 'Mixing Up Stretch and Shift',
            wrong: 'Student interprets $2f(x)$ as "shifted up $2$."',
            correction: '$2f(x)$ is a vertical **stretch** by factor $2$ — every $y$-value doubles. A shift up $2$ would be $f(x) + 2$.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'Describe all transformations applied to $f(x)$ to produce $g(x) = -2f(x - 3) + 1$.',
            steps: [
              { label: 'Inside: $x - 3$', content: 'Horizontal shift **right $3$**.' },
              { label: 'Factor: $2$', content: 'Vertical **stretch** by factor of $2$.' },
              { label: 'Negative: $-$', content: 'Reflection over the **$x$-axis**.' },
              { label: 'Outside: $+1$', content: 'Vertical shift **up $1$**.' },
              { label: 'Summary', content: 'Right $3$, vertically stretched by $2$, reflected over $x$-axis, up $1$.' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'The graph of $g$ is obtained by reflecting $f(x) = |x|$ over the $x$-axis and shifting it up $4$. Write $g(x)$ and find $g(3)$.',
            steps: [
              { label: 'Reflect', content: '$-f(x) = -|x|$.' },
              { label: 'Shift up $4$', content: '$g(x) = -|x| + 4$.' },
              { label: 'Evaluate', content: '$g(3) = -|3| + 4 = -3 + 4 = 1$.' },
            ],
          },
        ],
      },
    },
  },

  // ─── SECTION: TRANSFORMATIONS FROM GRAPH ──────────────────────────

  5: {
    moduleId: 'transformations',
    title: 'Simple Transformation From Graph Example',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'When two graphs are shown, identify the transformation by comparing key points on each curve.',
        blocks: [
          {
            type: 'text',
            content: 'A "simple" graph-based transformation problem shows two curves — the original $f$ and the transformed $g$ — and asks you to express $g$ in terms of $f$. The transformation involves a single shift (horizontal or vertical) or a single reflection.',
          },
          {
            type: 'keyInsight',
            content: 'The fastest approach: locate the **vertex** (or another clear landmark) on both graphs. The displacement between the two landmarks gives the translation directly. If the shape flips, check for reflection.',
          },
          {
            type: 'table',
            title: 'Reading Shifts from Landmark Points',
            headers: ['Original Point', 'Transformed Point', 'Shift'],
            rows: [
              ['$(1, 3)$', '$(1, 7)$', 'Up $4$: $g(x) = f(x) + 4$'],
              ['$(1, 3)$', '$(4, 3)$', 'Right $3$: $g(x) = f(x - 3)$'],
              ['$(1, 3)$', '$(-2, 3)$', 'Left $3$: $g(x) = f(x + 3)$'],
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
            title: 'Graph Comparison Questions',
            content: 'Recognition cue: two curves displayed on the same coordinate plane with a prompt like "which equation defines $g$ in terms of $f$?" First move: pick $2$ clear points on $f$ and find their corresponding positions on $g$.',
          },
          {
            type: 'trapCard',
            title: 'Vertical vs. Horizontal Confusion on Graphs',
            wrong: 'Student sees the graph moved right and writes $f(x) + 3$ instead of $f(x - 3)$.',
            correction: 'Horizontal displacement changes the **inside** of the function: right $3$ means $f(x - 3)$. Vertical displacement changes the **outside**: $f(x) + 3$ is up $3$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Solving a Simple Graph Transformation',
            items: [
              'Identify a clear point on $f$: vertex, $x$-intercept, or $y$-intercept.',
              'Find the same feature on $g$. Note the new coordinates.',
              'Compute $\\Delta x$ and $\\Delta y$ between the two points.',
              'If only $\\Delta y \\neq 0$: vertical shift. $g(x) = f(x) + \\Delta y$.',
              'If only $\\Delta x \\neq 0$: horizontal shift. $g(x) = f(x - \\Delta x)$.',
              'Verify with a second point to confirm the pattern holds.',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'The graph shows $f(x) = x^2$ with vertex at $(0, 0)$ and $g$ with vertex at $(0, 5)$. Both have the same shape. Express $g$ in terms of $f$.',
            steps: [
              { label: 'Compare vertices', content: 'Original vertex: $(0, 0)$. Transformed vertex: $(0, 5)$.' },
              { label: 'Compute shift', content: '$\\Delta x = 0$, $\\Delta y = 5$. Pure vertical shift up $5$.' },
              { label: 'Write equation', content: '$g(x) = f(x) + 5 = x^2 + 5$.' },
              { label: 'Verify', content: 'Check another point: $f(1) = 1$, so $g(1)$ should be $6$. From the graph, $g(1) = 6$.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'The graph of $f$ has vertex at $(2, -1)$ and the graph of $g$ has vertex at $(5, -1)$. Both curves have identical shape. Write $g(x)$ in terms of $f$.',
            answer: '$g(x) = f(x - 3)$. The vertex moved right $3$ units ($\\Delta x = 3$, $\\Delta y = 0$), so replace $x$ with $(x - 3)$ inside the function.',
          },
        ],
      },
    },
  },

  6: {
    moduleId: 'transformations',
    title: 'Complex Transformation From Graph Example',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Complex graph transformations combine multiple operations: a shift plus a reflection, or a shift plus a stretch.',
        blocks: [
          {
            type: 'text',
            content: 'When two graphs differ by more than a single translation, systematically check for each transformation type: horizontal shift, vertical shift, reflection, and stretch/compression.',
          },
          {
            type: 'keyInsight',
            content: 'Use three or more points to distinguish a stretch from a shift. If $\\Delta y$ differs for different points, a vertical stretch or compression is present — not just a translation.',
          },
          {
            type: 'table',
            title: 'Detecting Multiple Transformations',
            headers: ['Observation', 'Transformation Present'],
            rows: [
              ['All points moved by the same $\\Delta x$', 'Horizontal translation'],
              ['All points moved by the same $\\Delta y$', 'Vertical translation'],
              ['$y$-values all negated', 'Reflection over $x$-axis'],
              ['$y$-values all doubled (or halved)', 'Vertical stretch (or compression)'],
              ['Combination of the above', 'Compound transformation'],
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
            title: 'Multi-Step Graph Reading',
            content: 'Recognition cue: the transformed graph looks shifted AND flipped, or shifted AND stretched. First move: check whether the graph orientation changed (reflection). Then measure the displacement of the vertex for the translation component.',
          },
          {
            type: 'trapCard',
            title: 'Ignoring the Reflection',
            wrong: 'Student notices the graph shifted right $2$ and up $1$ but misses that it also flipped over the $x$-axis.',
            correction: 'If the original opens upward and the new graph opens downward (or vice versa), a reflection $-f(x)$ is present. Apply the reflection before the translation in your equation.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Solving a Complex Graph Transformation',
            items: [
              'Compare the **orientation** of both graphs. If one is flipped, note the reflection ($-f(x)$ or $f(-x)$).',
              'Compare $3$+ points. If the $y$-distances from the axis of symmetry differ by a constant factor, a vertical stretch/compress ($a \\cdot f$) is present.',
              'Measure the horizontal and vertical displacement of the vertex (or center).',
              'Combine: $g(x) = a \\cdot f(x - h) + k$, inserting a negative for $a$ if reflected.',
              'Verify with one additional point.',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'The graph of $f(x) = x^2$ has vertex at $(0,0)$ and passes through $(1,1)$. The graph of $g$ has vertex at $(2, 3)$ and passes through $(3, 1)$. Both are parabolas. Express $g$ in terms of $f$.',
            steps: [
              { label: 'Check orientation', content: 'Original opens up (vertex is minimum). Transformed vertex at $(2,3)$ and $(3,1)$ is below it — opens down. Reflection present: $a < 0$.' },
              { label: 'Find vertical scale', content: 'On $f$: one unit right of vertex gives $y = 1$ (height $= 1$). On $g$: one unit right of vertex gives $y = 1$ (drop $= 2$). Ratio: $\\frac{2}{1} = 2$. So $|a| = 2$. With reflection: $a = -2$.' },
              { label: 'Find shifts', content: 'Vertex moved from $(0,0)$ to $(2,3)$: right $2$ ($h = 2$), up $3$ ($k = 3$).' },
              { label: 'Combine', content: '$g(x) = -2f(x - 2) + 3 = -2(x - 2)^2 + 3$.' },
              { label: 'Verify', content: '$g(3) = -2(1)^2 + 3 = -2 + 3 = 1$. Matches the given point.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'The graph of $f$ has vertex at $(0, 0)$ and passes through $(1, 2)$. The graph of $g$ has vertex at $(-3, 1)$ and passes through $(-2, 3)$. Both are parabolas opening upward. Find $g(x)$ in terms of $f$.',
            answer: '$g(x) = f(x + 3) + 1$. The vertex shifted left $3$ and up $1$. Check: $g(-2) = f(-2 + 3) + 1 = f(1) + 1 = 2 + 1 = 3$. The vertical scale did not change (both have the same $\\Delta y = 2$ one unit from vertex).',
          },
        ],
      },
    },
  },

  // ─── SECTION: TRANSFORMATIONS FROM TABLE ──────────────────────────

  7: {
    moduleId: 'transformations',
    title: 'Simple Transformation From Table Example #1',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Compare the $x$- and $y$-columns of two tables to detect a single horizontal or vertical shift.',
        blocks: [
          {
            type: 'text',
            content: 'When the SAT gives tables for $f$ and $g$, pair rows that share the same output (for horizontal shifts) or the same input (for vertical shifts). The consistent difference reveals the transformation.',
          },
          {
            type: 'keyInsight',
            content: 'For a **vertical** shift: same $x$-values appear in both tables but $g(x) = f(x) \\pm k$. Subtract corresponding $y$-values to find $k$. For a **horizontal** shift: same $y$-values appear in both tables but at different $x$-values. The difference in $x$-values (with sign flip) gives $h$ in $f(x - h)$.',
          },
          {
            type: 'table',
            title: 'Example: Detecting a Horizontal Shift',
            headers: ['$x$', '$f(x)$', '$x$', '$g(x)$'],
            rows: [
              ['$0$', '$3$', '$2$', '$3$'],
              ['$1$', '$5$', '$3$', '$5$'],
              ['$2$', '$9$', '$4$', '$9$'],
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
            title: 'Table Comparison Questions',
            content: 'Recognition cue: two tables side by side (or one table with $f(x)$ and $g(x)$ columns) and a question like "which defines $g$ in terms of $f$?" First move: compare $y$-values. If they match at shifted $x$-values, it is a horizontal shift.',
          },
          {
            type: 'trapCard',
            title: 'Reversing the Shift Direction',
            wrong: 'Each $x$-value in $g$ is $2$ more than the corresponding $x$-value in $f$, so student writes $g(x) = f(x + 2)$.',
            correction: 'If $g$ produces the same output at $x = 2$ that $f$ produces at $x = 0$, then $g(x) = f(x - 2)$. The shift is **right $2$**. Think: $g(2) = f(2 - 2) = f(0) = 3$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Identifying a Shift from Tables',
            items: [
              'Match rows in the two tables by **equal output** values.',
              'For each matched pair, compute the difference in $x$-values: $\\Delta x = x_g - x_f$.',
              'If $\\Delta x$ is constant across all matched pairs, the shift is horizontal: $g(x) = f(x - \\Delta x)$.',
              'If the $x$-values are the same but $y$-values differ by a constant $\\Delta y$, it is vertical: $g(x) = f(x) + \\Delta y$.',
              'Verify with every row — if the pattern breaks, a more complex transformation is present.',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Tables for $f$ and $g$ are given:\n\n| $x$ | $f(x)$ |\n|---|---|\n| $0$ | $1$ |\n| $1$ | $4$ |\n| $2$ | $9$ |\n\n| $x$ | $g(x)$ |\n|---|---|\n| $0$ | $4$ |\n| $1$ | $9$ |\n| $2$ | $16$ |\n\nExpress $g$ in terms of $f$.',
            steps: [
              { label: 'Match outputs', content: '$g(0) = 4 = f(1)$. $g(1) = 9 = f(2)$.' },
              { label: 'Compute $\\Delta x$', content: 'To get output $4$: $f$ needs $x = 1$, $g$ needs $x = 0$. $\\Delta x = 0 - 1 = -1$. To get output $9$: $f$ needs $x = 2$, $g$ needs $x = 1$. $\\Delta x = 1 - 2 = -1$.' },
              { label: 'Write transformation', content: '$g(x) = f(x - (-1)) = f(x + 1)$. This is a horizontal shift **left $1$**.' },
              { label: 'Verify', content: '$g(2) = f(2 + 1) = f(3)$. If the pattern $f(x) = (x+1)^2$ (which fits $f(0)=1, f(1)=4, f(2)=9$), then $f(3) = 16 = g(2)$.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'Given: $f(1) = 3$, $f(2) = 7$, $f(3) = 13$. And $g(1) = 8$, $g(2) = 12$, $g(3) = 18$. Express $g$ in terms of $f$.',
            answer: '$g(x) = f(x) + 5$. Each output of $g$ exceeds the corresponding output of $f$ by $5$: $8 - 3 = 5$, $12 - 7 = 5$, $18 - 13 = 5$. This is a vertical shift up $5$.',
          },
        ],
      },
    },
  },

  8: {
    moduleId: 'transformations',
    title: 'Simple Transformation From Table #1 (DESMOS Method)',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Use DESMOS to enter table data, graph both functions, and visually confirm the transformation.',
        blocks: [
          {
            type: 'text',
            content: 'On the digital SAT, DESMOS is built into the testing interface. For table-based transformation problems, enter both tables directly and let the graphing tool reveal the relationship.',
          },
          {
            type: 'keyInsight',
            content: 'DESMOS can plot discrete points from a table. When you see two sets of points and one is clearly a shifted version of the other, reading the shift from the visual is faster and less error-prone than computing differences row by row.',
          },
          {
            type: 'steps',
            title: 'DESMOS Table Entry Process',
            items: [
              'Open a DESMOS table by clicking the $+$ icon and selecting "table."',
              'Enter the $x$ and $y$ data for $f$ in the first table.',
              'Open a second table and enter the data for $g$.',
              'The points for $f$ and $g$ appear in different colors on the graph.',
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
            title: 'When to Use DESMOS for Tables',
            content: 'Recognition cue: a problem gives two tables and asks how $g$ relates to $f$, but the numbers are messy or the shift is not immediately obvious. First move: enter the data into DESMOS tables and visually compare the plotted points.',
          },
          {
            type: 'trapCard',
            title: 'Trusting DESMOS Without Verification',
            wrong: 'Student eyeballs the graph and guesses "right $2$" without checking the coordinates.',
            correction: 'After visually estimating the shift from DESMOS, verify with at least one algebraic check: pick a point on $g$, apply your proposed transformation, and confirm it maps back to the correct point on $f$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Full DESMOS Workflow for Table Transformations',
            items: [
              'Enter both tables into DESMOS (two separate table expressions).',
              'Observe the plotted points. Estimate the horizontal and/or vertical displacement.',
              'In a new expression line, type a candidate transformation, e.g., $g(x) = f(x - 2)$, using a regression or slider for the shift parameter.',
              'If DESMOS supports sliders, add a parameter $h$ and type $f(x - h)$. Adjust $h$ with the slider until the two point sets overlap.',
              'Read off the final value of $h$ (and $k$ if you also added a vertical slider).',
              'Confirm with one algebraic check.',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Tables:\n$f$: $(0, 2), (1, 5), (2, 10)$.\n$g$: $(3, 2), (4, 5), (5, 10)$.\nUse the DESMOS method to find the relationship.',
            steps: [
              { label: 'Enter tables', content: 'Table 1: $x = \\{0, 1, 2\\}$, $y = \\{2, 5, 10\\}$. Table 2: $x = \\{3, 4, 5\\}$, $y = \\{2, 5, 10\\}$.' },
              { label: 'Visual observation', content: 'The second set of points is shifted right by $3$ units — same heights, different $x$-positions.' },
              { label: 'Test with slider', content: 'Type $y = f(x - h)$ with $h$ as a slider. Sliding to $h = 3$ aligns both sets.' },
              { label: 'Confirm algebraically', content: '$g(3) = f(3 - 3) = f(0) = 2$. $g(4) = f(4 - 3) = f(1) = 5$. All match.' },
              { label: 'Answer', content: '$g(x) = f(x - 3)$.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'You enter two tables into DESMOS and see that every point in $g$ is exactly $4$ units higher than the corresponding point in $f$ (same $x$-values). What is $g(x)$ in terms of $f$?',
            answer: '$g(x) = f(x) + 4$. Since only the $y$-coordinates differ (by $+4$) and the $x$-coordinates are the same, this is a vertical shift up $4$.',
          },
        ],
      },
    },
  },

  9: {
    moduleId: 'transformations',
    title: 'Complex Transformation From Table Example',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'When a table reveals both a horizontal shift and a vertical shift (or a stretch), more than one operation is needed to relate $g$ to $f$.',
        blocks: [
          {
            type: 'text',
            content: 'A "complex" table transformation means the $y$-values of $g$ do not simply match those of $f$ at shifted $x$-values, or they match only after accounting for an additional vertical change. You must isolate each component step by step.',
          },
          {
            type: 'keyInsight',
            content: 'Strategy: first check for a horizontal shift by matching outputs. If the outputs do not match even after shifting, compute the ratio or difference of $y$-values to detect a vertical stretch or vertical shift.',
          },
          {
            type: 'table',
            title: 'Diagnostic Table',
            headers: ['Pattern in Data', 'Transformation'],
            rows: [
              ['Same outputs at shifted $x$-values', 'Horizontal translation only'],
              ['Same $x$-values, constant $y$-difference', 'Vertical translation only'],
              ['Same $x$-values, constant $y$-ratio', 'Vertical stretch/compress'],
              ['Shifted $x$-values AND constant $y$-difference', 'Horizontal + vertical translation'],
              ['Shifted $x$-values AND constant $y$-ratio', 'Horizontal translation + vertical stretch'],
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
            title: 'Compound Table Transformations',
            content: 'Recognition cue: a table problem where matching outputs by shifting $x$ does not fully explain the data — a leftover constant difference or ratio remains. First move: isolate the horizontal shift, then check whether the remaining discrepancy is additive (vertical shift) or multiplicative (vertical stretch).',
          },
          {
            type: 'trapCard',
            title: 'Treating a Combined Shift as a Single Shift',
            wrong: 'Student finds that $g(x)$ values are close to $f(x - 2)$ values but off by $3$, and writes only $g(x) = f(x - 2)$.',
            correction: 'If every value of $g$ equals $f(x - 2) + 3$, the transformation is $g(x) = f(x - 2) + 3$ — horizontal right $2$ AND vertical up $3$. Both components must appear in the answer.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Solving a Complex Table Transformation',
            items: [
              'Attempt to match outputs: find rows in $g$ and $f$ that share the same $y$-value. If successful, compute $\\Delta x$ — that is the horizontal shift.',
              'If outputs do not match directly, compute $g(x) - f(x)$ for rows with the same $x$. If the difference is constant, it is a vertical shift: $g(x) = f(x) + k$.',
              'If neither works, try shifting first: compute $f(x - h)$ for a candidate $h$, then check if $g(x) - f(x - h)$ is constant across all rows.',
              'For a stretch: compute $\\frac{g(x)}{f(x)}$. If the ratio is constant, $g(x) = a \\cdot f(x)$.',
              'Combine all detected components into $g(x) = a \\cdot f(x - h) + k$.',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'Given:\n\n| $x$ | $f(x)$ |\n|---|---|\n| $0$ | $1$ |\n| $1$ | $3$ |\n| $2$ | $7$ |\n| $3$ | $13$ |\n\n| $x$ | $g(x)$ |\n|---|---|\n| $2$ | $6$ |\n| $3$ | $8$ |\n| $4$ | $12$ |\n| $5$ | $18$ |\n\nExpress $g$ in terms of $f$.',
            steps: [
              { label: 'Try matching outputs', content: '$g(2) = 6$. No row in $f$ has output $6$. $g(3) = 8$. No match. Direct output matching fails.' },
              { label: 'Check horizontal shift', content: 'Compare $g(2)$ with $f(0)$: $6$ vs. $1$ (off by $5$). Compare $g(3)$ with $f(1)$: $8$ vs. $3$ (off by $5$). Compare $g(4)$ with $f(2)$: $12$ vs. $7$ (off by $5$). Consistent difference of $5$.' },
              { label: 'Identify components', content: 'Horizontal shift: $x$ in $g$ is $2$ more than $x$ in $f$, so $h = 2$. Vertical shift: $g$ outputs exceed shifted $f$ outputs by $5$, so $k = 5$.' },
              { label: 'Write equation', content: '$g(x) = f(x - 2) + 5$.' },
              { label: 'Verify', content: '$g(5) = f(5 - 2) + 5 = f(3) + 5 = 13 + 5 = 18$.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'Given $f(0) = 2$, $f(1) = 5$, $f(2) = 10$ and $g(3) = 4$, $g(4) = 10$, $g(5) = 20$. Express $g$ in terms of $f$.',
            answer: '$g(x) = 2f(x - 3)$. First, match by shifting: $g(3)$ corresponds to $f(0)$, $g(4)$ to $f(1)$, $g(5)$ to $f(2)$ (shift right $3$). Then compare: $g(3) = 4 = 2 \\cdot f(0)$, $g(4) = 10 = 2 \\cdot f(1)$, $g(5) = 20 = 2 \\cdot f(2)$. Vertical stretch by $2$ combined with horizontal shift right $3$.',
          },
        ],
      },
    },
  },

  10: {
    moduleId: 'transformations',
    title: 'Complex Transformation From Table (DESMOS Method)',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Use DESMOS sliders and regression to identify compound transformations from table data when the algebra is messy.',
        blocks: [
          {
            type: 'text',
            content: 'For complex table transformations, DESMOS lets you add sliders for multiple parameters ($a$, $h$, $k$) and adjust them until the transformed curve passes through all data points of $g$.',
          },
          {
            type: 'keyInsight',
            content: 'With sliders for $a$, $h$, and $k$ in $g(x) = a \\cdot f(x - h) + k$, you can visually "dial in" each parameter. Adjust $h$ first (horizontal alignment), then $a$ (vertical scale), then $k$ (vertical fine-tuning).',
          },
          {
            type: 'table',
            title: 'DESMOS Slider Strategy',
            headers: ['Parameter', 'What It Controls', 'Adjustment Cue'],
            rows: [
              ['$h$', 'Horizontal shift', 'Slide until peaks/valleys align horizontally'],
              ['$a$', 'Vertical stretch/reflect', 'Adjust until the heights of corresponding points match'],
              ['$k$', 'Vertical shift', 'Fine-tune so all points sit exactly on the curve'],
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
            title: 'When Algebra Is Slow, Use DESMOS',
            content: 'Recognition cue: a table transformation problem with messy numbers or three or more simultaneous changes. First move: enter both tables in DESMOS and use sliders to find $a$, $h$, and $k$ visually.',
          },
          {
            type: 'trapCard',
            title: 'Over-Relying on Visual Estimation',
            wrong: 'Student sets $h \\approx 2.5$ by eye and picks the closest answer choice without verifying.',
            correction: 'DESMOS sliders may not land on exact integers. After visual estimation, substitute the candidate values back into a data point algebraically: $g(x_0) = a \\cdot f(x_0 - h) + k$. Confirm it equals the table value exactly.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'DESMOS Slider Workflow for Compound Transformations',
            items: [
              'Enter the $f$ table and the $g$ table in DESMOS.',
              'Fit a regression to the $f$ data (e.g., quadratic regression) or type the known parent function.',
              'In a new line, type $a \\cdot f(x - h) + k$ where $a$, $h$, $k$ are sliders.',
              'Adjust $h$ until the horizontal position matches the $g$ data points.',
              'Adjust $a$ until the vertical scale matches.',
              'Adjust $k$ until all $g$ data points lie on the curve.',
              'Read off $a$, $h$, $k$ and verify with one algebraic check.',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'Tables:\n$f$: $(0, 1), (1, 4), (2, 9)$.\n$g$: $(1, -1), (2, -7), (3, -17)$.\nUse DESMOS to find $g$ in terms of $f$.',
            steps: [
              { label: 'Enter data', content: 'Table 1 ($f$): $\\{(0,1),(1,4),(2,9)\\}$. Table 2 ($g$): $\\{(1,-1),(2,-7),(3,-17)\\}$.' },
              { label: 'Fit $f$', content: 'Regression yields $f(x) = (x+1)^2$ or equivalent. (Alternatively, recognize $f(x) = x^2 + 2x + 1$.)' },
              { label: 'Add sliders', content: 'Type $y = a(x - h + 1)^2 + k$ with sliders for $a$, $h$, $k$.' },
              { label: 'Adjust $h$', content: 'Sliding $h$ to $1$ aligns the horizontal positions.' },
              { label: 'Adjust $a$', content: 'Sliding $a$ to $-2$ matches the vertical scale and flips the curve.' },
              { label: 'Adjust $k$', content: 'Sliding $k$ to $1$ moves the curve to pass through all $g$ points.' },
              { label: 'Write answer', content: '$g(x) = -2f(x - 1) + 1$.' },
              { label: 'Verify', content: '$g(1) = -2f(0) + 1 = -2(1) + 1 = -1$. $g(2) = -2f(1) + 1 = -2(4) + 1 = -7$. Both match.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'After entering tables for $f$ and $g$ into DESMOS and adjusting sliders, you find $a = 3$, $h = -2$, $k = 4$. Write $g(x)$ in terms of $f$.',
            answer: '$g(x) = 3f(x + 2) + 4$. The parameter $h = -2$ means $f(x - (-2)) = f(x + 2)$, which is a horizontal shift **left $2$**. Then vertical stretch by $3$ and vertical shift up $4$.',
          },
        ],
      },
    },
  },

  // ─── SECTION: TRANSFORMATIONS FROM EXPRESSION ─────────────────────

  11: {
    moduleId: 'transformations',
    title: 'Simple Transformation From Expression Example',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'When $g(x)$ is defined as an algebraic modification of $f(x)$, read the transformation directly from the expression by comparing $g(x)$ to the general form $a \\cdot f(b(x - h)) + k$.',
        blocks: [
          {
            type: 'text',
            content: 'A "simple" expression transformation involves a single change: $g(x) = f(x) + 5$ (vertical shift), $g(x) = f(x - 3)$ (horizontal shift), or $g(x) = -f(x)$ (reflection). The key is matching the given expression to the transformation template.',
          },
          {
            type: 'keyInsight',
            content: 'Read the expression from the inside out. Check inside the function argument first for horizontal changes, then check outside for vertical changes. A simple transformation will have exactly one of these modifications.',
          },
          {
            type: 'formulaGrid',
            items: [
              { label: 'Vertical shift', formula: '$g(x) = f(x) + k$', note: 'Constant added outside' },
              { label: 'Horizontal shift', formula: '$g(x) = f(x - h)$', note: 'Constant subtracted inside' },
              { label: 'Reflection ($x$-axis)', formula: '$g(x) = -f(x)$', note: 'Negative outside' },
              { label: 'Reflection ($y$-axis)', formula: '$g(x) = f(-x)$', note: 'Negative inside' },
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
            title: 'Expression Reading Questions',
            content: 'Recognition cue: "$g(x) = f(x - 4) + 2$. Describe the transformation." First move: inside operation $x - 4$ means right $4$; outside operation $+2$ means up $2$.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting the Sign Flip Inside',
            wrong: 'Student reads $g(x) = f(x + 3)$ and says "shifted right $3$."',
            correction: '$f(x + 3) = f(x - (-3))$. The shift is **left $3$**. The sign inside is always opposite to the direction.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Reading a Simple Expression Transformation',
            items: [
              'Compare $g(x)$ to $f(x)$. Identify what changed.',
              'If a constant was added/subtracted **outside**: vertical shift (same sign = direction).',
              'If a constant was added/subtracted **inside** the argument: horizontal shift (opposite sign = direction).',
              'If a negative sign appears outside: reflection over $x$-axis. Inside: reflection over $y$-axis.',
              'State the geometric transformation in plain language.',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: '$f(x) = x^3$. $g(x) = (x - 5)^3$. Describe the transformation and find $g(6)$.',
            steps: [
              { label: 'Compare', content: '$g(x) = f(x - 5)$. The $-5$ is inside the argument.' },
              { label: 'Identify', content: 'Horizontal shift **right $5$**.' },
              { label: 'Evaluate', content: '$g(6) = (6 - 5)^3 = 1^3 = 1$.' },
              { label: 'Verify with $f$', content: '$f(1) = 1$. Since $g(6) = f(6-5) = f(1) = 1$, the shift is confirmed.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: '$f(x) = 2^x$ and $g(x) = -2^x$. Describe the transformation. What is $g(0)$?',
            answer: '$g(x) = -f(x)$: reflection over the $x$-axis. $g(0) = -2^0 = -1$. Every output of $f$ is negated.',
          },
        ],
      },
    },
  },

  12: {
    moduleId: 'transformations',
    title: 'Complex Transformation From Expression Example #1',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'When an expression contains multiple modifications to $f(x)$, decompose them into individual transformations applied in the correct order.',
        blocks: [
          {
            type: 'text',
            content: 'A complex expression transformation combines two or more operations: $g(x) = 2f(x - 1) + 3$ involves a horizontal shift, a vertical stretch, and a vertical shift. Read each component systematically using the general form $g(x) = a \\cdot f(b(x - h)) + k$.',
          },
          {
            type: 'keyInsight',
            content: 'Order of operations for transformations: (1) horizontal scale/reflect ($b$), (2) horizontal shift ($h$), (3) vertical scale/reflect ($a$), (4) vertical shift ($k$). Stretches and reflections apply before translations.',
          },
          {
            type: 'formulaGrid',
            items: [
              { label: 'General form', formula: '$g(x) = a \\cdot f(b(x - h)) + k$', note: 'Read $b,h$ inside; $a,k$ outside' },
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
            title: 'Multi-Component Expression Questions',
            content: 'Recognition cue: the expression $g(x) = af(x - h) + k$ with at least two non-trivial parameters. First move: identify $a$, $h$, and $k$ separately. Translate each into its geometric meaning.',
          },
          {
            type: 'trapCard',
            title: 'Applying Shift Before Stretch Incorrectly',
            wrong: 'For $g(x) = 3f(x) - 2$, student shifts down $2$ first, then stretches, getting the wrong curve.',
            correction: 'The stretch by $3$ applies to $f(x)$ first (multiply all $y$-values by $3$), then the $-2$ shifts the result down. Algebraic order: $3f(x)$ is computed, then $-2$ is added.',
          },
          {
            type: 'tip',
            content: 'To verify your reading: pick a simple input (like $x = 0$). Compute $g(0)$ directly from the expression. Then trace through your transformation description step by step. The results must agree.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Decomposing a Compound Expression',
            items: [
              'Write $g(x)$ in the form $a \\cdot f(b(x - h)) + k$. Identify each parameter.',
              'Horizontal shift: $h$ (right if positive, left if negative).',
              'Horizontal scale: $|b| > 1$ compresses, $0 < |b| < 1$ stretches. If $b < 0$, add reflection over $y$-axis.',
              'Vertical scale: $|a| > 1$ stretches, $0 < |a| < 1$ compresses. If $a < 0$, add reflection over $x$-axis.',
              'Vertical shift: $k > 0$ up, $k < 0$ down.',
              'State all transformations in order.',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'Let $f(x) = x^2$. Describe all transformations and write the final equation for $g(x) = -\\frac{1}{2}f(x + 4) - 3$.',
            steps: [
              { label: 'Identify $h$', content: '$x + 4 = x - (-4)$, so $h = -4$. Horizontal shift **left $4$**.' },
              { label: 'Identify $a$', content: '$a = -\\frac{1}{2}$. $|a| = \\frac{1}{2} < 1$: vertical **compression** by factor $\\frac{1}{2}$. Negative: **reflection** over $x$-axis.' },
              { label: 'Identify $k$', content: '$k = -3$. Vertical shift **down $3$**.' },
              { label: 'Expand', content: '$g(x) = -\\frac{1}{2}(x + 4)^2 - 3$.' },
              { label: 'Verify at $x = 0$', content: '$g(0) = -\\frac{1}{2}(16) - 3 = -8 - 3 = -11$. Meanwhile, $f(0 + 4) = 16$, then $-\\frac{1}{2}(16) - 3 = -11$.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'Describe the transformations in $g(x) = 3f(x - 2) + 7$ and find $g(2)$ given $f(0) = 4$.',
            answer: 'Right $2$, vertical stretch by $3$, up $7$. $g(2) = 3f(2 - 2) + 7 = 3f(0) + 7 = 3(4) + 7 = 19$.',
          },
        ],
      },
    },
  },

  13: {
    moduleId: 'transformations',
    title: 'Complex Transformation From Expression Example #2',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Expressions sometimes disguise transformations inside expanded or factored forms. Rewriting into standard transformation form reveals the shifts.',
        blocks: [
          {
            type: 'text',
            content: 'Not every transformation is handed to you in the form $a \\cdot f(x - h) + k$. Sometimes $g(x)$ is given in expanded form (e.g., $g(x) = 2x^2 - 8x + 11$) and you must factor or complete the square to see the transformation of $f(x) = x^2$.',
          },
          {
            type: 'keyInsight',
            content: 'Completing the square converts $ax^2 + bx + c$ into $a(x - h)^2 + k$, which directly reveals the horizontal shift $h$, the vertical shift $k$, and the stretch factor $a$.',
          },
          {
            type: 'formulaGrid',
            items: [
              { label: 'Completing the Square', formula: '$ax^2 + bx + c = a\\left(x - \\frac{b}{2a}\\right)^2 + \\left(c - \\frac{b^2}{4a}\\right)$', note: 'Reveals vertex form from standard form' },
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
            title: 'Hidden Transformation in Expanded Form',
            content: 'Recognition cue: "$g(x) = 2x^2 - 12x + 22$. Describe how $g$ relates to $f(x) = x^2$." First move: factor out the leading coefficient and complete the square to expose the vertex form.',
          },
          {
            type: 'trapCard',
            title: 'Reading Coefficients Without Completing the Square',
            wrong: 'Student sees $2x^2 - 12x + 22$ and guesses "stretched by $2$, shifted right $12$, up $22$."',
            correction: 'The $-12x$ and $+22$ do not directly correspond to shifts. Complete the square: $2(x - 3)^2 + 4$. The transformation is: stretch by $2$, right $3$, up $4$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Extracting Transformations by Completing the Square',
            items: [
              'Factor out the leading coefficient $a$ from the $x^2$ and $x$ terms: $a(x^2 + \\frac{b}{a}x) + c$.',
              'Complete the square inside: add and subtract $\\left(\\frac{b}{2a}\\right)^2$ inside the parentheses.',
              'Simplify to get $a(x - h)^2 + k$ where $h = \\frac{b}{2a}$ (watch the sign) and $k = c - \\frac{b^2}{4a}$.',
              'Read off: horizontal shift $h$, vertical stretch $|a|$, reflection if $a < 0$, vertical shift $k$.',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'Let $f(x) = x^2$. Express $g(x) = 2x^2 - 12x + 22$ as a transformation of $f$ and describe each step.',
            steps: [
              { label: 'Factor out $2$', content: '$g(x) = 2(x^2 - 6x) + 22$.' },
              { label: 'Complete the square', content: '$x^2 - 6x = (x - 3)^2 - 9$. So $g(x) = 2((x-3)^2 - 9) + 22 = 2(x-3)^2 - 18 + 22 = 2(x-3)^2 + 4$.' },
              { label: 'Read transformations', content: '$a = 2$: vertical stretch by $2$. $h = 3$: right $3$. $k = 4$: up $4$.' },
              { label: 'Summary', content: '$g(x) = 2f(x - 3) + 4$. Stretch by $2$, shift right $3$, shift up $4$.' },
              { label: 'Verify', content: '$g(3) = 2(0)^2 + 4 = 4$. Vertex of $g$ is $(3, 4)$. $f(0) = 0$, stretched by $2$ gives $0$, plus $4$ gives $4$.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'Express $g(x) = -x^2 + 6x - 5$ as a transformation of $f(x) = x^2$.',
            answer: 'Complete the square: $g(x) = -(x^2 - 6x) - 5 = -((x-3)^2 - 9) - 5 = -(x-3)^2 + 9 - 5 = -(x-3)^2 + 4$. So $g(x) = -f(x - 3) + 4$: reflect over $x$-axis, shift right $3$, shift up $4$.',
          },
        ],
      },
    },
  },

  // ─── SECTION: DIFFICULT TRANSFORMATIONS ───────────────────────────

  14: {
    moduleId: 'transformations',
    title: 'Difficult Transformations (System of Equations Method)',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'When the transformation parameters $a$, $h$, $k$ are unknown, use given points on $g$ along with the definition of $f$ to set up and solve a system of equations.',
        blocks: [
          {
            type: 'text',
            content: 'Some SAT problems provide the parent function $f$, a partially-defined transformation $g(x) = af(x - h) + k$, and one or more data points on $g$. Each data point generates one equation in the unknowns $a$, $h$, $k$. Solve the resulting system.',
          },
          {
            type: 'keyInsight',
            content: 'With $n$ unknowns you need $n$ independent data points. One unknown ($k$ only) requires $1$ point. Two unknowns ($a$ and $k$, or $h$ and $k$) require $2$ points. Three unknowns ($a$, $h$, $k$) require $3$ points.',
          },
          {
            type: 'table',
            title: 'Data Points Needed',
            headers: ['Unknowns', 'Points Required', 'Typical Setup'],
            rows: [
              ['$1$ (e.g., $k$)', '$1$', '$g(x_1) = f(x_1) + k$; solve for $k$'],
              ['$2$ (e.g., $a, k$)', '$2$', 'Two equations from $g(x_i) = a \\cdot f(x_i) + k$'],
              ['$3$ ($a, h, k$)', '$3$', 'Three equations; may need substitution or elimination'],
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
            title: 'System-of-Equations Transformation Problems',
            content: 'Recognition cue: a problem states $g(x) = af(x - h) + k$ (or similar), gives specific points on $g$, and asks for $a$, $h$, or $k$. First move: substitute each point into the transformation equation to generate one equation per point. Then solve the system.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Evaluate $f$ at the Shifted Input',
            wrong: 'Student writes $g(4) = af(4) + k$ when the transformation is $g(x) = af(x - 2) + k$.',
            correction: 'If $h = 2$, then $g(4) = af(4 - 2) + k = af(2) + k$. Always apply the horizontal shift **before** evaluating $f$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'System of Equations Method',
            items: [
              'Write the transformation template: $g(x) = a \\cdot f(x - h) + k$ (or the specific form given).',
              'For each known point $(x_i, y_i)$ on $g$, substitute: $y_i = a \\cdot f(x_i - h) + k$.',
              'Evaluate $f(x_i - h)$ using the definition of $f$. This gives a numerical equation in $a$, $h$, $k$.',
              'Solve the resulting system: use substitution if two unknowns, elimination or matrices if three.',
              'Verify by plugging the solution back into all original equations.',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'Let $f(x) = x^2$. The function $g$ is defined by $g(x) = af(x - h) + k = a(x - h)^2 + k$. The graph of $g$ passes through $(1, 7)$ and $(3, 7)$, and the vertex of $g$ is at $y = 3$. Find $a$, $h$, and $k$.',
            steps: [
              { label: 'Use symmetry', content: 'Since $g(1) = g(3) = 7$, the axis of symmetry is at $x = \\frac{1+3}{2} = 2$. So $h = 2$.' },
              { label: 'Find $k$', content: 'The vertex is at $(2, k)$ and $y_{\\text{vertex}} = 3$, so $k = 3$.' },
              { label: 'Find $a$', content: 'Use point $(1, 7)$: $7 = a(1 - 2)^2 + 3 = a(1) + 3$. So $a = 4$.' },
              { label: 'Verify with $(3, 7)$', content: '$g(3) = 4(3 - 2)^2 + 3 = 4(1) + 3 = 7$.' },
              { label: 'Answer', content: '$a = 4$, $h = 2$, $k = 3$. $g(x) = 4(x - 2)^2 + 3$.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'Let $f(x) = x^2$ and $g(x) = af(x) + k = ax^2 + k$. If $g(0) = -1$ and $g(2) = 11$, find $a$ and $k$.',
            answer: 'From $g(0) = -1$: $a(0)^2 + k = -1$, so $k = -1$. From $g(2) = 11$: $a(4) + (-1) = 11$, so $4a = 12$, giving $a = 3$. Therefore $g(x) = 3x^2 - 1$.',
          },
        ],
      },
    },
  },

  15: {
    moduleId: 'transformations',
    title: 'Difficult Transformations (Answer Choice Method)',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'When solving for transformation parameters algebraically is slow, test each answer choice by substituting it into the transformation and checking against given data.',
        blocks: [
          {
            type: 'text',
            content: 'The answer-choice method (backsolving) works especially well on multiple-choice transformation problems. Each answer choice proposes specific values for $a$, $h$, and/or $k$. Substitute each into the transformation equation and check whether the given conditions are satisfied.',
          },
          {
            type: 'keyInsight',
            content: 'On the SAT, answer choices are typically ordered from smallest to largest. Start with choice B or C (middle values) to narrow down the direction. If B is too small, try C or D. This eliminates choices faster than testing A first.',
          },
          {
            type: 'table',
            title: 'When to Use Each Method',
            headers: ['Scenario', 'Recommended Method'],
            rows: [
              ['Only $1$ unknown, clean numbers', 'Direct algebra (fastest)'],
              ['$2$+ unknowns, clean answer choices', 'Answer choice elimination'],
              ['Messy algebra, DESMOS available', 'DESMOS sliders'],
              ['System of equations is straightforward', 'System of equations method (Lesson 14)'],
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
            title: 'Multiple-Choice Transformation Questions',
            content: 'Recognition cue: four answer choices each giving a specific transformation (e.g., $g(x) = f(x-2)+3$, $g(x) = f(x+2)+3$, etc.). First move: pick one data point from the problem and test each choice. Eliminate any choice that fails the check.',
          },
          {
            type: 'trapCard',
            title: 'Testing Only One Point',
            wrong: 'Student tests one data point, finds two choices that pass, and guesses between them.',
            correction: 'If two choices survive the first check, test a **second** data point. A correct transformation must satisfy **all** given conditions, not just one.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Answer Choice Elimination',
            items: [
              'Read the problem and identify the given data: points on $g$, vertex location, or known values of $f$.',
              'Take the first data point $(x_0, y_0)$ and substitute into each answer choice.',
              'Eliminate any choice where $g(x_0) \\neq y_0$.',
              'If more than one choice survives, repeat with a second data point.',
              'The last surviving choice is the answer. Verify with a quick final check.',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'Let $f(x) = x^2$. The graph of $g$ passes through $(1, 5)$ and $(0, 2)$. Which defines $g$?\n\nA) $g(x) = f(x) + 2$\nB) $g(x) = f(x - 1) + 4$\nC) $g(x) = f(x + 1) + 1$\nD) $g(x) = f(x - 1) + 1$',
            steps: [
              { label: 'Test $(0, 2)$ in each', content: 'A: $f(0) + 2 = 0 + 2 = 2$. B: $f(-1) + 4 = 1 + 4 = 5 \\neq 2$. C: $f(1) + 1 = 1 + 1 = 2$. D: $f(-1) + 1 = 1 + 1 = 2$.' },
              { label: 'Eliminate', content: 'B fails at $(0,2)$. Choices A, C, D survive.' },
              { label: 'Test $(1, 5)$', content: 'A: $f(1) + 2 = 1 + 2 = 3 \\neq 5$. C: $f(2) + 1 = 4 + 1 = 5$. D: $f(0) + 1 = 0 + 1 = 1 \\neq 5$.' },
              { label: 'Eliminate', content: 'A and D fail. Only C survives.' },
              { label: 'Answer', content: '$g(x) = f(x + 1) + 1 = (x+1)^2 + 1$.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'Given $f(x) = |x|$ and $g(3) = 1$, which could define $g$?\nA) $g(x) = f(x) - 2$\nB) $g(x) = f(x - 1) - 1$\nC) $g(x) = f(x + 3) + 1$',
            answer: 'Test $x = 3$. A: $|3| - 2 = 1$. B: $|2| - 1 = 1$. C: $|6| + 1 = 7 \\neq 1$. Both A and B pass. A second data point is needed to distinguish them. (On the actual SAT, the problem would provide enough information to narrow to one answer.)',
          },
        ],
      },
    },
  },
};
