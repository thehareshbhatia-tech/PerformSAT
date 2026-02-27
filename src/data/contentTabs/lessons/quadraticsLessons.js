export const quadraticsLessonTabs = {

  1: {
    moduleId: 'quadratics',
    title: 'Introduction to Quadratics',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A quadratic is any equation with an $x^2$ term — its graph is always a parabola.',
        blocks: [
          {
            type: 'text',
            content: 'The **standard form** of a quadratic is $y = ax^2 + bx + c$. Unlike a linear equation (which graphs as a line), a quadratic graphs as a **U-shaped curve** called a **parabola**. The $x^2$ term is what bends the graph.',
          },
          {
            type: 'formulaGrid',
            items: [
              { label: 'Standard Form', formula: '$y = ax^2 + bx + c$', note: 'a, b, c are constants; a ≠ 0' },
              { label: 'Factored Form', formula: '$y = a(x - r)(x - s)$', note: 'r and s are the roots (x-intercepts)' },
              { label: 'Vertex Form', formula: '$y = a(x - h)^2 + k$', note: '(h, k) is the vertex' },
            ],
          },
          {
            type: 'keyInsight',
            content: 'The sign of $a$ controls the direction of the parabola. If $a > 0$, the parabola opens **upward** (smile). If $a < 0$, it opens **downward** (frown). The SAT loves asking: "What is the maximum value?" — that only exists when $a < 0$.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Form-Matching: The Core Skill',
            content: '"Which equivalent form reveals the zeros?" means convert to factored form. "Displays the minimum as a constant?" means vertex form. "What is the $y$-intercept?" means read $c$ from standard form. Recognition cue: the question tells you **what to find** — match that to the form that shows it directly.',
          },
          {
            type: 'table',
            title: 'What Each Form Reveals',
            headers: ['Form', 'Instantly Shows', 'SAT Trigger Phrase'],
            rows: [
              ['Standard: $ax^2 + bx + c$', '$y$-intercept ($c$), direction ($a$)', '"$y$-intercept" or "when $x = 0$"'],
              ['Factored: $a(x - r)(x - s)$', 'Roots ($r, s$)', '"zeros," "solutions," "$x$-intercepts"'],
              ['Vertex: $a(x - h)^2 + k$', 'Vertex $(h, k)$, min/max', '"minimum/maximum value as a constant"'],
            ],
          },
          {
            type: 'trapCard',
            title: 'Reading $c$ as the Minimum',
            wrong: 'Student sees $y = x^2 - 6x + 8$ and says the minimum is $8$.',
            correction: '$c = 8$ is the $y$-intercept, not the vertex. Complete the square: $(x-3)^2 - 1$. The minimum is $-1$. The $y$-intercept and vertex are the same only when $b = 0$.',
          },
          {
            type: 'tip',
            content: 'If the question asks "which form" but you\'re unsure which to pick, check what information the answer choices expose. Factored forms show roots; vertex forms show the turning point. Let the choices guide you.',
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Confusing $c$ with the Vertex',
            wrong: 'Student sees $y = x^2 - 6x + 8$ and says the minimum value is $8$.',
            correction: 'The constant $c = 8$ is the **$y$-intercept**, not the minimum. The minimum is at the vertex: $x = \\frac{-(-6)}{2(1)} = 3$, $y = 9 - 18 + 8 = -1$. The minimum is $-1$.',
          },
        ],
      },
    },
  },

  2: {
    moduleId: 'quadratics',
    title: 'Roots of a Quadratic',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Roots (zeros, $x$-intercepts, solutions) are the $x$-values where $y = 0$ — where the parabola crosses the $x$-axis.',
        blocks: [
          {
            type: 'text',
            content: 'Setting $ax^2 + bx + c = 0$ and solving for $x$ gives you the **roots**. These are also called **zeros** (because $y = 0$ there) or **$x$-intercepts** (because that\'s where the graph touches the $x$-axis). The SAT uses all three terms interchangeably.',
          },
          {
            type: 'callout',
            variant: 'memorize',
            title: 'The Quadratic Formula',
            content: '$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$\nThis works for **every** quadratic, whether or not it factors neatly. Memorize it cold.',
          },
        ],
      },
      methods: {
        title: 'Finding Roots',
        summary: 'Two main approaches: factoring (fast when it works) and the quadratic formula (always works).',
        blocks: [
          {
            type: 'steps',
            title: 'Method 1 — Factoring',
            items: [
              'Write the equation as $ax^2 + bx + c = 0$',
              'Find two numbers that **multiply** to $a \\cdot c$ and **add** to $b$',
              'Rewrite the middle term using those two numbers and factor by grouping',
              'Set each factor equal to zero and solve',
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Find the roots of $x^2 - 5x + 6 = 0$.',
            steps: [
              { label: 'Find factors', content: 'Need two numbers that multiply to $6$ and add to $-5$: that\'s $-2$ and $-3$' },
              { label: 'Factor', content: '$(x - 2)(x - 3) = 0$' },
              { label: 'Solve', content: '$x = 2$ or $x = 3$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'Find the roots of $2x^2 + 3x - 5 = 0$.',
            steps: [
              { label: 'Identify', content: '$a = 2$, $b = 3$, $c = -5$' },
              { label: 'Quadratic formula', content: '$x = \\frac{-3 \\pm \\sqrt{9 + 40}}{4} = \\frac{-3 \\pm \\sqrt{49}}{4} = \\frac{-3 \\pm 7}{4}$' },
              { label: 'Two solutions', content: '$x = \\frac{4}{4} = 1$ or $x = \\frac{-10}{4} = -\\frac{5}{2}$' },
            ],
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          { type: 'callout', variant: 'info', title: '"What Are the Solutions?"', content: 'Recognition cue: "$ax^2 + bx + c = 0$" followed by "what are the solutions/zeros/roots/$x$-intercepts?" First move: try factoring (under 30s). If it doesn\'t factor cleanly, apply the quadratic formula. On multiple choice, you can also back-substitute each answer choice.' },
          { type: 'trapCard', title: 'Sign Error in Quadratic Formula', wrong: 'For $x^2 + 6x + 5 = 0$: student writes $x = \\frac{6 \\pm \\sqrt{36 - 20}}{2}$, missing the negative on $b$.', correction: 'The formula starts with $-b$: $x = \\frac{-6 \\pm \\sqrt{36 - 20}}{2} = \\frac{-6 \\pm 4}{2}$. Roots: $-1$ and $-5$.' },
          { type: 'tip', content: '**Decision rule:** Coefficients are small integers → try factoring first. Leading coefficient $\\neq 1$ or no clean factors → quadratic formula. Multiple choice → consider back-substituting answer choices into the equation.' },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Sign Error in the Quadratic Formula',
            wrong: 'For $x^2 + 6x + 5 = 0$, student uses $b = 6$ and writes $\\frac{6 \\pm \\sqrt{\\ldots}}{2}$.',
            correction: 'The formula says $\\frac{-b \\pm \\ldots}{2a}$. Since $b = 6$, you need $\\frac{-6 \\pm \\ldots}{2}$. Missing the leading negative is the most common quadratic-formula mistake.',
          },
          {
            type: 'trapCard',
            title: 'Dividing by $2a$, Not Just $2$',
            wrong: 'Student correctly computes the numerator but divides by $2$ instead of $2a$ when $a \\neq 1$.',
            correction: 'The denominator is $2a$, not $2$. For $3x^2 + …$, you divide by $6$.',
          },
        ],
      },
    },
  },

  8: {
    moduleId: 'quadratics',
    title: 'The Vertex',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'The vertex is the highest or lowest point on a parabola — it gives the maximum or minimum value of the function.',
        blocks: [
          {
            type: 'text',
            content: 'Every parabola has a single turning point called the **vertex**. If the parabola opens upward ($a > 0$), the vertex is the **minimum**. If it opens downward ($a < 0$), the vertex is the **maximum**. The vertical line through the vertex is the **axis of symmetry**.',
          },
          {
            type: 'callout',
            variant: 'memorize',
            title: 'Vertex from Standard Form',
            content: 'For $y = ax^2 + bx + c$:\n$$x_{\\text{vertex}} = \\frac{-b}{2a}$$\nPlug this $x$ back into the equation to find $y_{\\text{vertex}}$.',
          },
          {
            type: 'iconRow',
            items: [
              { icon: '😊', label: 'a > 0', description: 'Opens up — vertex is the MINIMUM' },
              { icon: '☹️', label: 'a < 0', description: 'Opens down — vertex is the MAXIMUM' },
            ],
          },
        ],
      },
      methods: {
        title: 'Finding the Vertex',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Find the vertex of $y = 2x^2 - 8x + 3$.',
            steps: [
              { label: '$x$-coordinate', content: '$x = \\frac{-(-8)}{2(2)} = \\frac{8}{4} = 2$' },
              { label: '$y$-coordinate', content: '$y = 2(2)^2 - 8(2) + 3 = 8 - 16 + 3 = -5$' },
              { label: 'Vertex', content: '$(2, -5)$ — and since $a = 2 > 0$, this is a **minimum**' },
            ],
          },
          {
            type: 'keyInsight',
            content: 'The axis of symmetry is the vertical line $x = \\frac{-b}{2a}$. Every parabola is perfectly symmetric about this line. If one root is $2$ units left of the axis, the other root is $2$ units right.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Max/Min Word Problems',
            content: '"What is the maximum height of the ball?" — Recognition cue: the word **maximum** or **minimum** in a quadratic context means **find the vertex**. First move: compute $x = \\frac{-b}{2a}$, then plug back in for the $y$-value. Check the sign of $a$ to confirm max vs. min.',
          },
          {
            type: 'trapCard',
            title: 'Reporting the Wrong Coordinate',
            wrong: '"What is the maximum height?" Student finds the vertex $(2, 69)$ and answers $2$.',
            correction: 'The question asks for the height (output), not the time (input). Maximum **height** is the $y$-coordinate: $69$. Maximum is reached **at** $t = 2$, but that is not the answer to "what is the maximum height."',
          },
          {
            type: 'tip',
            content: '"Maximum value" = $y$-coordinate of the vertex. "At what time is the maximum reached?" = $x$-coordinate of the vertex. Read the question to know which coordinate to report.',
          },
        ],
      },
    },
  },

  9: {
    moduleId: 'quadratics',
    title: 'Vertex Form',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Vertex form $y = a(x - h)^2 + k$ lets you read the vertex directly — no formula needed.',
        blocks: [
          {
            type: 'text',
            content: 'In vertex form, the vertex is literally written into the equation: $y = a(x - h)^2 + k$ has vertex $(h, k)$. The value $a$ still controls direction and width — same as in standard form.',
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'The Sign Trap',
            content: 'The form is $a(x \\mathbf{-} h)^2 + k$. So if you see $y = 3(x + 4)^2 - 7$, the vertex is $(-4, -7)$ — not $(4, -7)$. The $+4$ inside means $h = -4$ because $x - (-4) = x + 4$.',
          },
        ],
      },
      methods: {
        title: 'Converting Standard → Vertex Form',
        summary: 'Complete the square to rewrite $ax^2 + bx + c$ as $a(x - h)^2 + k$.',
        blocks: [
          {
            type: 'steps',
            title: 'Completing the Square',
            items: [
              'Start with $y = ax^2 + bx + c$. Factor $a$ from the first two terms: $y = a(x^2 + \\frac{b}{a}x) + c$',
              'Take half the coefficient of $x$ inside the parentheses: $\\frac{b}{2a}$',
              'Square it: $\\left(\\frac{b}{2a}\\right)^2$. Add and subtract this inside: $y = a\\left(x^2 + \\frac{b}{a}x + \\left(\\frac{b}{2a}\\right)^2 - \\left(\\frac{b}{2a}\\right)^2\\right) + c$',
              'Rewrite the perfect square trinomial: $y = a\\left(x + \\frac{b}{2a}\\right)^2 + c - \\frac{b^2}{4a}$',
              'Read off the vertex: $h = -\\frac{b}{2a}$, $k = c - \\frac{b^2}{4a}$',
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Convert $y = x^2 - 6x + 11$ to vertex form.',
            steps: [
              { label: 'Half of $-6$', content: '$\\frac{-6}{2} = -3$' },
              { label: 'Square it', content: '$(-3)^2 = 9$' },
              { label: 'Add & subtract', content: '$y = (x^2 - 6x + 9) - 9 + 11$' },
              { label: 'Factor', content: '$y = (x - 3)^2 + 2$' },
              { label: 'Vertex', content: '$(3, 2)$' },
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
            title: '"Displays the Minimum as a Constant"',
            content: 'This exact phrase is SAT code for **vertex form**. Complete the square to rewrite $y = x^2 - 8x + 18$ as $y = (x-4)^2 + 2$. The constant $k = 2$ is the minimum. First move: take half of $b$, square it, add and subtract inside the expression.',
          },
          {
            type: 'trapCard',
            title: 'Sign Error in $(x - h)$',
            wrong: '$y = (x + 4)^2 + 2$ — student writes vertex as $(4, 2)$.',
            correction: 'The form is $(x \\mathbf{-} h)^2 + k$. If you see $x + 4$, that means $h = -4$, so the vertex is $(-4, 2)$. Always reverse the sign inside the parentheses.',
          },
          {
            type: 'tip',
            content: 'Decision rule: "displays the minimum/maximum as a constant" → vertex form. "Displays the zeros" → factored form. "What is the $y$-intercept" → standard form. The question phrase tells you which form to target.',
          },
        ],
      },
    },
  },

  14: {
    moduleId: 'quadratics',
    title: 'The Discriminant',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'The expression $b^2 - 4ac$ — the discriminant — tells you how many real solutions a quadratic has without solving it.',
        blocks: [
          {
            type: 'text',
            content: 'Inside the quadratic formula, the expression under the square root is $b^2 - 4ac$. This single number determines the **nature** of the solutions. You never have to finish solving — just compute $b^2 - 4ac$ and check its sign.',
          },
          {
            type: 'formula',
            content: '$$\\Delta = b^2 - 4ac$$',
          },
          {
            type: 'table',
            title: 'Discriminant Decision Table',
            headers: ['Value of $b^2 - 4ac$', 'Number of Real Solutions', 'Graph Behavior'],
            rows: [
              ['$> 0$', 'Two distinct real roots', 'Parabola crosses $x$-axis twice'],
              ['$= 0$', 'Exactly one real root (repeated)', 'Parabola touches $x$-axis at vertex'],
              ['$< 0$', 'No real roots', 'Parabola never reaches $x$-axis'],
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
            title: '"How Many Real Solutions?" = Discriminant',
            content: 'Recognition cue: any question about the **number of solutions** (or asking "for what value of $k$…") is a discriminant problem. First move: identify $a$, $b$, $c$, then compute $\\Delta = b^2 - 4ac$ and compare to zero. $\\Delta > 0$ → two, $\\Delta = 0$ → one, $\\Delta < 0$ → none.',
          },
          {
            type: 'trapCard',
            title: 'Equation Not in Standard Form',
            wrong: 'Given $3x = x^2 + 5$, student reads $a = 3$, $b = 1$, $c = 5$.',
            correction: 'Rearrange to $0 = x^2 - 3x + 5$ first, giving $a = 1$, $b = -3$, $c = 5$. Then $\\Delta = 9 - 20 = -11 < 0$. Always move everything to one side before reading coefficients.',
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'For what value of $k$ does $x^2 + kx + 9 = 0$ have exactly one real solution?',
            steps: [
              { label: 'Condition', content: 'Exactly one solution → $\\Delta = 0$' },
              { label: 'Set up', content: '$k^2 - 4(1)(9) = 0$ → $k^2 = 36$' },
              { label: 'Solve', content: '$k = 6$ or $k = -6$' },
            ],
          },
          {
            type: 'tip',
            content: 'Decision rule: "exactly one solution" → set $\\Delta = 0$. "No real solutions" → set $\\Delta < 0$, then solve the inequality for the unknown parameter. "Two real solutions" → set $\\Delta > 0$.',
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Forgetting the $4a$ Part',
            wrong: 'Student computes $b^2 - c$ instead of $b^2 - 4ac$.',
            correction: 'The discriminant is $b^2 - 4ac$. The $4$ and the $a$ are essential — don\'t drop them.',
          },
          {
            type: 'trapCard',
            title: 'Equation Not in Standard Form',
            wrong: 'Given $3x = x^2 + 5$, student identifies $a = 3$, $b = 1$, $c = 5$.',
            correction: 'Rearrange to $0 = x^2 - 3x + 5$ first, so $a = 1$, $b = -3$, $c = 5$. Then $\\Delta = 9 - 20 = -11 < 0$ (no real roots).',
          },
        ],
      },
    },
  },

  23: {
    moduleId: 'quadratics',
    title: 'Deriving Standard Form from a Graph',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Given a parabola\'s graph, you can build its equation by reading key points — vertex plus one extra point is enough.',
        blocks: [
          {
            type: 'diagramRef',
            visualType: 'parabolaFromGraphDiagram',
            caption: 'Read the vertex and one extra point to derive the equation.',
          },
          {
            type: 'text',
            content: 'A parabola is completely determined by the **vertex** $(h, k)$ and **one other point** on the curve. Start in vertex form, plug in the extra point to find $a$, then expand to standard form.',
          },
          {
            type: 'keyInsight',
            content: 'If the graph shows both $x$-intercepts instead of the vertex, use **factored form**: $y = a(x - r)(x - s)$. Plug in any third point (often the $y$-intercept) to solve for $a$.',
          },
        ],
      },
      methods: {
        title: 'Two Strategies',
        blocks: [
          {
            type: 'steps',
            title: 'Strategy A — Vertex + Point → Standard Form',
            items: [
              'Read the vertex $(h, k)$ from the graph',
              'Write $y = a(x - h)^2 + k$',
              'Read a second point $(x_0, y_0)$ from the graph (the $y$-intercept is easiest)',
              'Substitute $(x_0, y_0)$ and solve for $a$',
              'Expand $a(x - h)^2 + k$ to get $ax^2 + bx + c$',
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A parabola has vertex $(2, -3)$ and passes through $(0, 5)$. Find its equation in standard form.',
            steps: [
              { label: 'Vertex form', content: '$y = a(x - 2)^2 - 3$' },
              { label: 'Plug in $(0, 5)$', content: '$5 = a(0 - 2)^2 - 3$ → $5 = 4a - 3$ → $a = 2$' },
              { label: 'Expand', content: '$y = 2(x - 2)^2 - 3 = 2(x^2 - 4x + 4) - 3 = 2x^2 - 8x + 8 - 3$' },
              { label: 'Standard form', content: '$y = 2x^2 - 8x + 5$' },
            ],
          },
          {
            type: 'steps',
            title: 'Strategy B — Two Roots + Point → Standard Form',
            items: [
              'Read the two $x$-intercepts $r$ and $s$ from the graph',
              'Write $y = a(x - r)(x - s)$',
              'Read a third point (often the vertex or $y$-intercept) and substitute to find $a$',
              'Expand to standard form',
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'A parabola crosses the $x$-axis at $x = -1$ and $x = 5$, and its $y$-intercept is $(0, -10)$. Find the equation.',
            steps: [
              { label: 'Factored form', content: '$y = a(x + 1)(x - 5)$' },
              { label: 'Plug in $(0, -10)$', content: '$-10 = a(1)(-5)$ → $-10 = -5a$ → $a = 2$' },
              { label: 'Expand', content: '$y = 2(x + 1)(x - 5) = 2(x^2 - 4x - 5) = 2x^2 - 8x - 10$' },
            ],
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          { type: 'callout', variant: 'info', title: '"Which Equation Matches the Graph?"', content: 'Recognition cue: a parabola graph with visible vertex or $x$-intercepts, followed by four equation choices. First move: read the vertex $(h, k)$ or the roots from the graph. If vertex is visible → vertex form $y = a(x-h)^2 + k$. If roots are visible → factored form $y = a(x-r)(x-s)$. Use one extra point to find $a$.' },
          { type: 'trapCard', title: 'Assuming $a = 1$', wrong: 'Student reads vertex $(2, -3)$ and writes $y = (x-2)^2 - 3$ without checking $a$.', correction: 'The stretch factor $a$ might not be $1$. Plug in another visible point — if it doesn\'t satisfy the equation, solve for $a$. For example, if $(0, 5)$ is on the graph: $5 = a(0-2)^2 - 3 = 4a - 3$, so $a = 2$.' },
          { type: 'tip', content: '**Strategy:** On the digital SAT, type each answer-choice equation into DESMOS and see which one matches the graph. This visual check takes ~20 seconds and requires no algebra.' },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Assuming $a = 1$',
            wrong: 'Student reads the vertex and roots but skips finding $a$, defaulting to $a = 1$.',
            correction: 'The stretch factor $a$ determines how "wide" or "narrow" the parabola is. Always use an additional point to solve for $a$ — it is not necessarily $1$.',
          },
          {
            type: 'trapCard',
            title: 'Misreading the Vertex from the Graph',
            wrong: 'Student reads the lowest plotted point as the vertex, but the true vertex lies between gridlines.',
            correction: 'If the vertex doesn\'t land on a gridline, compute $x = \\frac{-b}{2a}$ after finding $a$ from two known points. Don\'t eyeball — calculate.',
          },
        ],
      },
    },
  },

};
