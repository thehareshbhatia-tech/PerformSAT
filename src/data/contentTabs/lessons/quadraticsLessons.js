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
            content: 'The sign of $a$ controls the direction of the parabola. If $a > 0$, the parabola opens **upward** (minimum exists). If $a < 0$, it opens **downward** (maximum exists).',
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
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Form-Matching: The Core Skill',
            content: '"Which equivalent form reveals the zeros?" means convert to factored form. "Displays the minimum as a constant?" means vertex form. "What is the $y$-intercept?" means read $c$ from standard form. The question tells you **what to find** — match that to the form that shows it directly.',
          },
          {
            type: 'trapCard',
            title: 'Reading $c$ as the Minimum',
            wrong: 'Student sees $y = x^2 - 6x + 8$ and says the minimum is $8$.',
            correction: '$c = 8$ is the $y$-intercept, not the vertex. Complete the square: $(x-3)^2 - 1$. The minimum is $-1$. The $y$-intercept and vertex coincide only when $b = 0$.',
          },
          {
            type: 'tip',
            content: 'If the question asks "which form" but you are unsure which to pick, check what information the answer choices expose. Factored forms show roots; vertex forms show the turning point. Let the choices guide you.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Identifying the Form',
            items: [
              'Look at the structure: $ax^2 + bx + c$ → standard. $a(x - r)(x - s)$ → factored. $a(x - h)^2 + k$ → vertex.',
              'Match what the question asks to the form that reveals it directly.',
              'Convert if needed: factor to get roots, complete the square to get the vertex, expand to get standard form.',
            ],
          },
          {
            type: 'steps',
            title: 'Reading Key Features',
            items: [
              '$y$-intercept: set $x = 0$ and evaluate, or read $c$ from standard form.',
              'Direction: check the sign of $a$. Positive → opens up. Negative → opens down.',
              'Axis of symmetry: $x = \\frac{-b}{2a}$ from standard form.',
            ],
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
          {
            type: 'trapCard',
            title: 'Mixing Up Vertex Form Signs',
            wrong: 'Student reads $y = (x + 3)^2 - 4$ and reports vertex $(3, -4)$.',
            correction: 'Vertex form is $y = a(x - h)^2 + k$. The expression $x + 3$ means $x - (-3)$, so $h = -3$. The vertex is $(-3, -4)$.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'The equation $y = 2(x - 1)(x - 5)$ represents a parabola. Find the $y$-intercept, the roots, and the vertex.',
            steps: [
              { label: 'Roots', content: 'Set each factor to zero: $x - 1 = 0$ → $x = 1$, and $x - 5 = 0$ → $x = 5$. Roots: $1$ and $5$.' },
              { label: '$y$-intercept', content: 'Set $x = 0$: $y = 2(0 - 1)(0 - 5) = 2(-1)(-5) = 10$.' },
              { label: 'Axis of symmetry', content: '$x = \\frac{1 + 5}{2} = 3$' },
              { label: 'Vertex $y$-value', content: '$y = 2(3 - 1)(3 - 5) = 2(2)(-2) = -8$. Vertex: $(3, -8)$.' },
            ],
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
            content: 'Setting $ax^2 + bx + c = 0$ and solving for $x$ gives you the **roots**. These are also called **zeros** (because $y = 0$ there) or **$x$-intercepts** (because that is where the graph touches the $x$-axis). The SAT uses all three terms interchangeably.',
          },
          {
            type: 'callout',
            variant: 'memorize',
            title: 'The Quadratic Formula',
            content: '$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$\nThis works for **every** quadratic, whether or not it factors neatly.',
          },
          {
            type: 'keyInsight',
            content: 'The number of roots depends on the discriminant $b^2 - 4ac$. Positive → two roots. Zero → one repeated root. Negative → no real roots.',
          },
          {
            type: 'table',
            title: 'Root-Finding Methods',
            headers: ['Method', 'Best When', 'Speed'],
            rows: [
              ['Factoring', 'Small integer coefficients', 'Fast (~20s)'],
              ['Quadratic formula', 'Any quadratic', 'Medium (~45s)'],
              ['Graphing (DESMOS)', 'Digital SAT, quick check', 'Fast (~15s)'],
              ['Completing the square', 'Converting to vertex form too', 'Slow (~60s)'],
            ],
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
              'Write the equation as $ax^2 + bx + c = 0$.',
              'Find two numbers that **multiply** to $a \\cdot c$ and **add** to $b$.',
              'Rewrite the middle term using those two numbers and factor by grouping.',
              'Set each factor equal to zero and solve.',
            ],
          },
          {
            type: 'steps',
            title: 'Method 2 — Quadratic Formula',
            items: [
              'Identify $a$, $b$, $c$ from $ax^2 + bx + c = 0$.',
              'Compute the discriminant: $\\Delta = b^2 - 4ac$.',
              'Substitute into $x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}$.',
              'Simplify both the $+$ and $-$ cases.',
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Find the roots of $x^2 - 5x + 6 = 0$.',
            steps: [
              { label: 'Find factors', content: 'Need two numbers that multiply to $6$ and add to $-5$: that is $-2$ and $-3$.' },
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
          {
            type: 'callout',
            variant: 'info',
            title: '"What Are the Solutions?"',
            content: 'Recognition cue: "$ax^2 + bx + c = 0$" followed by "what are the solutions/zeros/roots/$x$-intercepts?" First move: try factoring (under 30 seconds). If it does not factor cleanly, apply the quadratic formula. On multiple choice, you can also back-substitute each answer choice.',
          },
          {
            type: 'trapCard',
            title: 'Sign Error in Quadratic Formula',
            wrong: 'For $x^2 + 6x + 5 = 0$: student writes $x = \\frac{6 \\pm \\sqrt{36 - 20}}{2}$, missing the negative on $b$.',
            correction: 'The formula starts with $-b$: $x = \\frac{-6 \\pm \\sqrt{36 - 20}}{2} = \\frac{-6 \\pm 4}{2}$. Roots: $-1$ and $-5$.',
          },
          {
            type: 'tip',
            content: '**Decision rule:** Coefficients are small integers → try factoring first. Leading coefficient $\\neq 1$ or no clean factors → quadratic formula. Multiple choice → consider back-substituting answer choices into the equation.',
          },
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
            correction: 'The denominator is $2a$, not $2$. For $3x^2 + \\ldots$, you divide by $6$.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'Solve $3x^2 - 10x + 8 = 0$.',
            steps: [
              { label: 'Identify', content: '$a = 3$, $b = -10$, $c = 8$' },
              { label: 'Discriminant', content: '$\\Delta = (-10)^2 - 4(3)(8) = 100 - 96 = 4$' },
              { label: 'Apply formula', content: '$x = \\frac{10 \\pm \\sqrt{4}}{6} = \\frac{10 \\pm 2}{6}$' },
              { label: 'Solutions', content: '$x = \\frac{12}{6} = 2$ or $x = \\frac{8}{6} = \\frac{4}{3}$' },
              { label: 'Verify factoring', content: '$3x^2 - 10x + 8 = (3x - 4)(x - 2)$ confirms both roots.' },
            ],
          },
        ],
      },
    },
  },

  3: {
    moduleId: 'quadratics',
    title: 'Finding Roots Via Graph',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        blocks: [
          {
            type: 'text',
            content: 'The roots of a quadratic are the points where the parabola crosses or touches the $x$-axis. On a graph, read the $x$-coordinates of these intersection points directly.',
          },
          {
            type: 'keyInsight',
            content: 'A parabola can cross the $x$-axis **twice** (two distinct roots), **once** (the vertex sits on the axis — a repeated root), or **never** (the entire parabola floats above or below the axis — no real roots).',
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Grid Precision',
            content: 'If a root falls between two gridlines, the graph alone will not give an exact answer. In that case, use algebra (factoring or the quadratic formula) to find exact values. Graphs give exact roots only when they land on integer or clearly marked coordinates.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"Based on the Graph, What Are the Solutions?"',
            content: 'Recognition cue: a graph of a parabola is shown and the question asks for the zeros, roots, or $x$-intercepts. First move: locate where the curve crosses the $x$-axis and read the $x$-values.',
          },
          {
            type: 'trapCard',
            title: 'Reporting the $y$-intercept Instead',
            wrong: 'Student sees the parabola cross the $y$-axis at $(0, 6)$ and reports $6$ as a root.',
            correction: 'Roots are where $y = 0$, not where $x = 0$. The $y$-intercept $(0, 6)$ is the value of $c$, not a root. Look for the points on the $x$-axis.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Reading Roots from a Graph',
            items: [
              'Identify the $x$-axis (the horizontal line $y = 0$).',
              'Find where the parabola intersects this axis.',
              'Read the $x$-coordinates at those points — these are the roots.',
              'If the vertex touches the $x$-axis, there is exactly one repeated root.',
              'If the parabola does not touch the $x$-axis, there are no real roots.',
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
            problem: 'A parabola passes through $(-3, 0)$, $(0, -6)$, and $(2, 0)$. What are its roots?',
            steps: [
              { label: 'Identify $y = 0$ points', content: 'The parabola has $y = 0$ at $x = -3$ and $x = 2$.' },
              { label: 'Roots', content: 'The roots are $x = -3$ and $x = 2$.' },
              { label: 'Verify', content: 'The point $(0, -6)$ is the $y$-intercept, not a root — it has $y \\neq 0$.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'A parabola opens upward and its vertex is at $(4, -1)$. The parabola crosses the $x$-axis at $x = 3$ and $x = 5$. What are the roots?',
            answer: 'The roots are $x = 3$ and $x = 5$. These are the $x$-values where $y = 0$.',
          },
        ],
      },
    },
  },

  4: {
    moduleId: 'quadratics',
    title: 'Finding Roots Via Factoring',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        blocks: [
          {
            type: 'text',
            content: 'Factoring converts $ax^2 + bx + c = 0$ into a product of two binomials set equal to zero. By the **zero product property**, if $AB = 0$, then $A = 0$ or $B = 0$.',
          },
          {
            type: 'formula',
            label: 'Zero Product Property',
            content: '$$\\text{If } (x - r)(x - s) = 0, \\text{ then } x = r \\text{ or } x = s$$',
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'When Factoring Fails',
            content: 'Factoring works cleanly only when the roots are rational numbers. If $b^2 - 4ac$ is not a perfect square, the quadratic does not factor over integers — switch to the quadratic formula or DESMOS.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Quick Factor Check',
            content: 'Recognition cue: quadratic with small integer coefficients and the question asks for solutions. First move: find two numbers that multiply to $a \\cdot c$ and add to $b$. If such integers exist, factor immediately.',
          },
          {
            type: 'trapCard',
            title: 'Dropping the Leading Coefficient',
            wrong: 'Factoring $2x^2 - 7x + 3$: student writes $(x - 3)(x - 1) = 0$ and gets $x = 3, 1$.',
            correction: 'With $a = 2$, the factorization is $(2x - 1)(x - 3) = 0$, giving $x = \\frac{1}{2}$ and $x = 3$. The leading coefficient must appear in a factor.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Factoring by Grouping (AC Method)',
            items: [
              'Compute $a \\cdot c$.',
              'Find two numbers $m, n$ such that $m \\cdot n = ac$ and $m + n = b$.',
              'Rewrite: $ax^2 + mx + nx + c$.',
              'Group: $(ax^2 + mx) + (nx + c)$ and factor each group.',
              'Factor out the common binomial.',
              'Set each factor to zero and solve.',
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
            problem: 'Factor and solve $2x^2 + 5x - 3 = 0$.',
            steps: [
              { label: 'Product', content: '$a \\cdot c = 2 \\times (-3) = -6$' },
              { label: 'Find pair', content: 'Numbers that multiply to $-6$ and add to $5$: $6$ and $-1$.' },
              { label: 'Rewrite', content: '$2x^2 + 6x - x - 3$' },
              { label: 'Group', content: '$2x(x + 3) - 1(x + 3) = (2x - 1)(x + 3)$' },
              { label: 'Solve', content: '$x = \\frac{1}{2}$ or $x = -3$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'Solve by factoring: $x^2 - 7x + 12 = 0$.',
            answer: 'Find two numbers that multiply to $12$ and add to $-7$: $-3$ and $-4$. So $(x - 3)(x - 4) = 0$, giving $x = 3$ or $x = 4$.',
          },
        ],
      },
    },
  },

  5: {
    moduleId: 'quadratics',
    title: 'Finding Roots Via Completing the Square',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        blocks: [
          {
            type: 'text',
            content: 'Completing the square rewrites $ax^2 + bx + c = 0$ into the form $(x - h)^2 = d$, which you solve by taking the square root of both sides. This method also converts standard form to vertex form.',
          },
          {
            type: 'formula',
            label: 'Key Identity',
            content: '$$x^2 + bx + \\left(\\frac{b}{2}\\right)^2 = \\left(x + \\frac{b}{2}\\right)^2$$',
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
            content: 'Recognition cue: this phrasing signals completing the square to vertex form. The constant $k$ in $a(x - h)^2 + k$ is the minimum (when $a > 0$) or maximum (when $a < 0$).',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Subtract the Added Constant',
            wrong: 'Student adds $\\left(\\frac{b}{2}\\right)^2$ inside the expression but forgets to subtract it, changing the equation.',
            correction: 'Whatever you add inside the grouping, you must subtract outside (or subtract from the other side) to keep the equation balanced.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Completing the Square',
            items: [
              'Start with $ax^2 + bx + c = 0$. If $a \\neq 1$, divide everything by $a$.',
              'Move the constant to the other side: $x^2 + \\frac{b}{a}x = -\\frac{c}{a}$.',
              'Take half the coefficient of $x$: $\\frac{b}{2a}$.',
              'Square it: $\\left(\\frac{b}{2a}\\right)^2$. Add this to **both** sides.',
              'Factor the left side as a perfect square: $\\left(x + \\frac{b}{2a}\\right)^2 = \\ldots$',
              'Take the square root of both sides (remember $\\pm$) and solve for $x$.',
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
            problem: 'Solve $x^2 + 6x + 2 = 0$ by completing the square.',
            steps: [
              { label: 'Isolate', content: '$x^2 + 6x = -2$' },
              { label: 'Half of $6$, squared', content: '$\\left(\\frac{6}{2}\\right)^2 = 9$' },
              { label: 'Add to both sides', content: '$x^2 + 6x + 9 = -2 + 9 = 7$' },
              { label: 'Factor', content: '$(x + 3)^2 = 7$' },
              { label: 'Solve', content: '$x + 3 = \\pm\\sqrt{7}$, so $x = -3 \\pm \\sqrt{7}$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'Rewrite $x^2 - 4x + 1 = 0$ by completing the square, then solve.',
            answer: '$x^2 - 4x = -1$. Add $4$: $(x - 2)^2 = 3$. So $x = 2 \\pm \\sqrt{3}$.',
          },
        ],
      },
    },
  },

  6: {
    moduleId: 'quadratics',
    title: 'Finding Roots Via DESMOS',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        blocks: [
          {
            type: 'text',
            content: 'On the digital SAT, the built-in DESMOS graphing calculator can find roots in seconds. Type the equation, and the $x$-intercepts appear on the graph. Click or tap them to read their coordinates.',
          },
          {
            type: 'keyInsight',
            content: 'DESMOS finds all real roots simultaneously — no factoring, no formula. It is especially useful when the quadratic has irrational roots that are difficult to compute by hand.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'When to Use DESMOS for Roots',
            content: 'Use DESMOS when: (1) the equation does not factor cleanly, (2) the question is multiple choice and you need a quick numerical check, or (3) the problem involves an unfamiliar setup and you want to visualize the parabola first.',
          },
          {
            type: 'trapCard',
            title: 'Misreading the Graph Scale',
            wrong: 'Student zooms in too far and reads a root as $x = 2$ when it is actually $x = 2.5$.',
            correction: 'Always click or tap on the $x$-intercept in DESMOS to see the exact coordinates. Do not estimate from the visual grid alone.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Finding Roots in DESMOS',
            items: [
              'Open the DESMOS calculator on the digital SAT.',
              'Type the equation, e.g., $y = 2x^2 - 3x - 5$.',
              'Look at the graph for where the parabola crosses the $x$-axis.',
              'Click each intersection point to read the exact $x$-coordinate.',
              'If the parabola does not cross the $x$-axis, the equation has no real roots.',
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
            problem: 'Use DESMOS to find the roots of $x^2 - 4x - 12 = 0$.',
            steps: [
              { label: 'Enter equation', content: 'Type $y = x^2 - 4x - 12$ into DESMOS.' },
              { label: 'Observe graph', content: 'The parabola crosses the $x$-axis at two points.' },
              { label: 'Click intercepts', content: 'The roots are $x = -2$ and $x = 6$.' },
              { label: 'Verify algebraically', content: '$(x + 2)(x - 6) = x^2 - 4x - 12$ ✓' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'You type $y = x^2 + 2x - 8$ into DESMOS and the parabola crosses the $x$-axis at $x = -4$ and $x = 2$. Write the factored form.',
            answer: '$y = (x + 4)(x - 2)$. Each root becomes a factor: root $-4$ gives $(x + 4)$, root $2$ gives $(x - 2)$.',
          },
        ],
      },
    },
  },

  7: {
    moduleId: 'quadratics',
    title: 'Complex Finding the Roots via DESMOS',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        blocks: [
          {
            type: 'text',
            content: 'Some SAT problems disguise a root-finding task inside a system of equations or a context problem. The key insight: finding where two expressions are equal is the same as finding the $x$-intercepts of their difference.',
          },
          {
            type: 'keyInsight',
            content: 'If a problem asks "for what value of $x$ does $f(x) = g(x)$?", graph both $y = f(x)$ and $y = g(x)$ in DESMOS and find their intersection points. Alternatively, graph $y = f(x) - g(x)$ and find where it crosses the $x$-axis.',
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Adjusting the Window',
            content: 'Complex quadratics may have roots far from the origin or very close together. If you do not see intersections, zoom out. If intersections look merged, zoom in. Use the scroll wheel or pinch gesture to adjust the viewing window.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'System with a Quadratic and a Linear Equation',
            content: 'Recognition cue: a problem gives $y = ax^2 + bx + c$ and $y = mx + d$ and asks for intersection points. In DESMOS, type both equations and click the intersection points. The $x$-values at the intersections are the solutions.',
          },
          {
            type: 'trapCard',
            title: 'Reading Only One Intersection',
            wrong: 'A line intersects a parabola at two points, but student reports only one solution.',
            correction: 'A line can intersect a parabola at 0, 1, or 2 points. Zoom out to make sure you have found all intersection points. DESMOS highlights them — check for a second one.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'DESMOS for Complex Root Problems',
            items: [
              'Identify the two expressions being set equal.',
              'Enter each as a separate equation in DESMOS (e.g., $y = x^2 + 3x$ and $y = 2x + 6$).',
              'Click each intersection point to read the $x$-coordinate.',
              'If the question asks for the positive solution, report the positive $x$-value only.',
              'Zoom in if the intersection is unclear; zoom out if no intersections appear on screen.',
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
            problem: 'Find all values of $x$ where $x^2 - 2x + 1 = 3x - 5$.',
            steps: [
              { label: 'Set up in DESMOS', content: 'Graph $y = x^2 - 2x + 1$ and $y = 3x - 5$ on the same screen.' },
              { label: 'Alternative', content: 'Graph $y = x^2 - 5x + 6$ (the difference set to zero) and find $x$-intercepts.' },
              { label: 'Read intersections', content: 'The graphs intersect at $x = 2$ and $x = 3$.' },
              { label: 'Verify', content: 'At $x = 2$: $4 - 4 + 1 = 1$ and $6 - 5 = 1$ ✓. At $x = 3$: $9 - 6 + 1 = 4$ and $9 - 5 = 4$ ✓.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'You graph $y = x^2 + 1$ and $y = 2x + 4$ in DESMOS. You see intersection points at $x = -1$ and $x = 3$. Verify the solution $x = 3$ algebraically.',
            answer: 'At $x = 3$: $y = 9 + 1 = 10$ and $y = 6 + 4 = 10$. Both sides equal $10$, confirming $x = 3$ is a solution.',
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
          {
            type: 'keyInsight',
            content: 'The axis of symmetry is $x = \\frac{-b}{2a}$. Every parabola is perfectly symmetric about this line. If one root is $d$ units left of the axis, the other root is $d$ units right.',
          },
          {
            type: 'comparison',
            title: 'Vertex from Different Forms',
            items: [
              { label: 'Standard Form', content: 'Compute $x = \\frac{-b}{2a}$, then plug back in for $y$.' },
              { label: 'Vertex Form', content: 'Read directly: $y = a(x - h)^2 + k$ → vertex is $(h, k)$.' },
              { label: 'Factored Form', content: 'Average the roots: $x = \\frac{r + s}{2}$, then plug back in for $y$.' },
            ],
          },
        ],
      },
      methods: {
        title: 'Finding the Vertex',
        blocks: [
          {
            type: 'steps',
            title: 'From Standard Form',
            items: [
              'Identify $a$ and $b$ from $y = ax^2 + bx + c$.',
              'Compute $x = \\frac{-b}{2a}$.',
              'Substitute this $x$ back into the equation to find $y$.',
              'The vertex is $\\left(\\frac{-b}{2a},\\; f\\!\\left(\\frac{-b}{2a}\\right)\\right)$.',
            ],
          },
          {
            type: 'steps',
            title: 'From Factored Form',
            items: [
              'Identify the roots $r$ and $s$ from $y = a(x - r)(x - s)$.',
              'The $x$-coordinate of the vertex is the midpoint: $x = \\frac{r + s}{2}$.',
              'Substitute this $x$ back into the equation to find $y$.',
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Find the vertex of $y = 2x^2 - 8x + 3$.',
            steps: [
              { label: '$x$-coordinate', content: '$x = \\frac{-(-8)}{2(2)} = \\frac{8}{4} = 2$' },
              { label: '$y$-coordinate', content: '$y = 2(2)^2 - 8(2) + 3 = 8 - 16 + 3 = -5$' },
              { label: 'Vertex', content: '$(2, -5)$ — and since $a = 2 > 0$, this is a **minimum**.' },
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
            title: 'Max/Min Word Problems',
            content: '"What is the maximum height of the ball?" — Recognition cue: the word **maximum** or **minimum** in a quadratic context means **find the vertex**. First move: compute $x = \\frac{-b}{2a}$, then plug back in for the $y$-value. Check the sign of $a$ to confirm max vs. min.',
          },
          {
            type: 'trapCard',
            title: 'Reporting the Wrong Coordinate',
            wrong: '"What is the maximum height?" Student finds the vertex $(2, 69)$ and answers $2$.',
            correction: 'The question asks for the height (output), not the time (input). Maximum **height** is the $y$-coordinate: $69$. "At what time" would be the $x$-coordinate.',
          },
          {
            type: 'tip',
            content: '"Maximum value" = $y$-coordinate of the vertex. "At what time is the maximum reached?" = $x$-coordinate of the vertex. Read the question to know which coordinate to report.',
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Using $\\frac{b}{2a}$ Instead of $\\frac{-b}{2a}$',
            wrong: 'For $y = x^2 + 6x + 5$, student computes $x = \\frac{6}{2} = 3$.',
            correction: 'The formula is $x = \\frac{-b}{2a} = \\frac{-6}{2} = -3$. The negative sign is part of the formula.',
          },
          {
            type: 'trapCard',
            title: 'Confusing Max/Min Direction',
            wrong: 'Student finds the vertex of $y = -x^2 + 4x + 1$ and calls it a minimum.',
            correction: 'Since $a = -1 < 0$, the parabola opens **downward**, so the vertex is a **maximum**. Check the sign of $a$ every time.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'A ball is thrown upward with height modeled by $h(t) = -16t^2 + 64t + 5$, where $t$ is time in seconds. What is the maximum height?',
            steps: [
              { label: 'Identify', content: '$a = -16$, $b = 64$. Since $a < 0$, the vertex is a maximum.' },
              { label: '$t$-coordinate', content: '$t = \\frac{-64}{2(-16)} = \\frac{-64}{-32} = 2$ seconds' },
              { label: 'Maximum height', content: '$h(2) = -16(4) + 64(2) + 5 = -64 + 128 + 5 = 69$' },
              { label: 'Answer', content: 'The maximum height is $69$ feet, reached at $t = 2$ seconds.' },
            ],
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
          {
            type: 'formulaGrid',
            items: [
              { label: 'Vertex', formula: '$(h, k)$', note: 'Read directly from $a(x - h)^2 + k$' },
              { label: 'Axis of Symmetry', formula: '$x = h$', note: 'Vertical line through the vertex' },
              { label: 'Direction', formula: '$a > 0$ up, $a < 0$ down', note: 'Same rule as standard form' },
            ],
          },
          {
            type: 'keyInsight',
            content: 'Vertex form and standard form represent the same parabola — they are interchangeable. Use vertex form when you need the vertex; use standard form when you need the $y$-intercept or coefficients.',
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
              'Start with $y = ax^2 + bx + c$. Factor $a$ from the first two terms: $y = a\\left(x^2 + \\frac{b}{a}x\\right) + c$.',
              'Take half the coefficient of $x$ inside the parentheses: $\\frac{b}{2a}$.',
              'Square it: $\\left(\\frac{b}{2a}\\right)^2$. Add and subtract this inside.',
              'Rewrite the perfect square trinomial: $y = a\\left(x + \\frac{b}{2a}\\right)^2 + c - \\frac{b^2}{4a}$.',
              'Read off the vertex: $h = -\\frac{b}{2a}$, $k = c - \\frac{b^2}{4a}$.',
            ],
          },
          {
            type: 'steps',
            title: 'Converting Vertex → Standard Form',
            items: [
              'Expand $a(x - h)^2$: $a(x^2 - 2hx + h^2)$.',
              'Distribute: $ax^2 - 2ahx + ah^2$.',
              'Add $k$: $y = ax^2 - 2ahx + ah^2 + k$.',
              'Identify $b = -2ah$ and $c = ah^2 + k$.',
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
            content: 'This exact phrase signals **vertex form**. Complete the square to rewrite $y = x^2 - 8x + 18$ as $y = (x-4)^2 + 2$. The constant $k = 2$ is the minimum. First move: take half of $b$, square it, add and subtract inside the expression.',
          },
          {
            type: 'trapCard',
            title: 'Sign Error in $(x - h)$',
            wrong: '$y = (x + 4)^2 + 2$ — student writes vertex as $(4, 2)$.',
            correction: 'The form is $(x \\mathbf{-} h)^2 + k$. If you see $x + 4$, that means $h = -4$, so the vertex is $(-4, 2)$. Always reverse the sign inside the parentheses.',
          },
          {
            type: 'tip',
            content: '"Displays the minimum/maximum as a constant" → vertex form. "Displays the zeros" → factored form. "What is the $y$-intercept" → standard form. The question phrase tells you which form to target.',
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Incomplete Square When $a \\neq 1$',
            wrong: 'For $y = 2x^2 + 8x + 3$, student takes half of $8$ to get $4$, squares to get $16$, and writes $(x + 4)^2$.',
            correction: 'Factor out $a$ first: $y = 2(x^2 + 4x) + 3$. Now half of $4$ is $2$, squared is $4$. Result: $y = 2(x + 2)^2 + 3 - 8 = 2(x + 2)^2 - 5$.',
          },
          {
            type: 'trapCard',
            title: 'Arithmetic Error with the Constant',
            wrong: 'Student completes the square on $x^2 - 10x + 20$ and gets $(x - 5)^2 + 20$.',
            correction: '$(x - 5)^2 = x^2 - 10x + 25$. So $x^2 - 10x + 20 = (x-5)^2 - 25 + 20 = (x-5)^2 - 5$. The constant is $20 - 25 = -5$, not $20$.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'Rewrite $y = 3x^2 - 12x + 7$ in vertex form and identify the vertex.',
            steps: [
              { label: 'Factor $a$', content: '$y = 3(x^2 - 4x) + 7$' },
              { label: 'Half of $-4$, squared', content: '$(-2)^2 = 4$' },
              { label: 'Add & subtract inside', content: '$y = 3(x^2 - 4x + 4 - 4) + 7 = 3(x^2 - 4x + 4) - 12 + 7$' },
              { label: 'Vertex form', content: '$y = 3(x - 2)^2 - 5$' },
              { label: 'Vertex', content: '$(2, -5)$. Since $a = 3 > 0$, this is a minimum.' },
            ],
          },
        ],
      },
    },
  },

  10: {
    moduleId: 'quadratics',
    title: 'Finding the Vertex from a Graph',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        blocks: [
          {
            type: 'text',
            content: 'The vertex of a parabola is its **turning point** — the lowest point if it opens upward, or the highest point if it opens downward. On a graph, it is the point where the curve changes direction.',
          },
          {
            type: 'keyInsight',
            content: 'The vertex always lies on the **axis of symmetry**. If you can identify two symmetric points on the parabola (such as two roots), the vertex is directly above or below the midpoint of those two points.',
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Grid Alignment',
            content: 'If the vertex does not land exactly on a grid intersection, you cannot read exact coordinates from the graph alone. In that case, use $x = \\frac{-b}{2a}$ from the equation to compute the vertex algebraically.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"What Is the Minimum/Maximum Value?"',
            content: 'Recognition cue: a graph of a parabola is displayed and the question asks for the minimum or maximum. First move: locate the turning point on the graph and read its $y$-coordinate.',
          },
          {
            type: 'trapCard',
            title: 'Reading the $x$-coordinate Instead of $y$',
            wrong: '"What is the minimum value?" The vertex is at $(3, -2)$. Student answers $3$.',
            correction: 'The minimum **value** of the function is the $y$-coordinate: $-2$. The value $3$ tells you **where** the minimum occurs, not **what** it is.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Reading the Vertex from a Graph',
            items: [
              'Identify whether the parabola opens up (minimum) or down (maximum).',
              'Locate the turning point — the bottommost or topmost point on the curve.',
              'Read the coordinates $(h, k)$ from the grid.',
              'If two $x$-intercepts are visible, confirm: $h$ is the midpoint of the two roots.',
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
            problem: 'A parabola opens upward, crosses the $x$-axis at $x = 1$ and $x = 7$, and its lowest point appears to be at $y = -9$. What is the vertex?',
            steps: [
              { label: 'Midpoint of roots', content: '$x = \\frac{1 + 7}{2} = 4$' },
              { label: 'Read $y$', content: 'The lowest point is at $y = -9$.' },
              { label: 'Vertex', content: '$(4, -9)$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'A downward-opening parabola has its highest point at $(5, 12)$. What is the maximum value of the function, and at what $x$-value does it occur?',
            answer: 'The maximum value is $12$ (the $y$-coordinate). It occurs at $x = 5$ (the $x$-coordinate of the vertex).',
          },
        ],
      },
    },
  },

  11: {
    moduleId: 'quadratics',
    title: 'Finding the Vertex from an Equation',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        blocks: [
          {
            type: 'text',
            content: 'Given $y = ax^2 + bx + c$, the vertex can be found algebraically using $x = \\frac{-b}{2a}$ and then substituting back to find $y$. If the equation is already in vertex form $y = a(x - h)^2 + k$, read $(h, k)$ directly.',
          },
          {
            type: 'formulaGrid',
            items: [
              { label: 'Vertex $x$-coordinate', formula: '$x = \\frac{-b}{2a}$', note: 'From standard form' },
              { label: 'Vertex $y$-coordinate', formula: '$y = f\\!\\left(\\frac{-b}{2a}\\right)$', note: 'Plug $x$ back in' },
              { label: 'Direct read', formula: '$(h, k)$ from $a(x - h)^2 + k$', note: 'From vertex form' },
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
            title: 'Vertex from Standard Form',
            content: 'Recognition cue: the equation is in standard form and the question asks for the vertex, minimum, maximum, or axis of symmetry. First move: compute $x = \\frac{-b}{2a}$, then find $y$ by substitution.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting the Negative in $\\frac{-b}{2a}$',
            wrong: 'For $y = x^2 + 8x + 12$, student computes $x = \\frac{8}{2} = 4$.',
            correction: 'The formula is $\\frac{-b}{2a} = \\frac{-8}{2} = -4$. Then $y = 16 - 32 + 12 = -4$. Vertex: $(-4, -4)$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Finding the Vertex Algebraically',
            items: [
              'Identify $a$, $b$, $c$ from $y = ax^2 + bx + c$.',
              'Compute $x_v = \\frac{-b}{2a}$.',
              'Substitute $x_v$ into the equation: $y_v = a(x_v)^2 + b(x_v) + c$.',
              'The vertex is $(x_v, y_v)$.',
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
            problem: 'Find the vertex of $y = -2x^2 + 12x - 7$.',
            steps: [
              { label: 'Identify', content: '$a = -2$, $b = 12$' },
              { label: '$x$-coordinate', content: '$x = \\frac{-12}{2(-2)} = \\frac{-12}{-4} = 3$' },
              { label: '$y$-coordinate', content: '$y = -2(9) + 12(3) - 7 = -18 + 36 - 7 = 11$' },
              { label: 'Vertex', content: '$(3, 11)$. Since $a < 0$, this is a **maximum**.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'Find the vertex of $y = 3x^2 + 6x + 1$.',
            answer: '$x = \\frac{-6}{2(3)} = \\frac{-6}{6} = -1$. Then $y = 3(1) + 6(-1) + 1 = 3 - 6 + 1 = -2$. Vertex: $(-1, -2)$.',
          },
        ],
      },
    },
  },

  12: {
    moduleId: 'quadratics',
    title: 'Transformation of Vertex',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        blocks: [
          {
            type: 'text',
            content: 'Transformations shift, stretch, or reflect a parabola. In vertex form $y = a(x - h)^2 + k$, the parameters $a$, $h$, and $k$ each control a specific transformation of the parent function $y = x^2$.',
          },
          {
            type: 'table',
            title: 'Transformation Rules',
            headers: ['Parameter', 'Effect', 'Example'],
            rows: [
              ['$h > 0$', 'Shift **right** $h$ units', '$y = (x - 3)^2$ shifts right $3$'],
              ['$h < 0$', 'Shift **left** $|h|$ units', '$y = (x + 2)^2$ shifts left $2$'],
              ['$k > 0$', 'Shift **up** $k$ units', '$y = x^2 + 5$ shifts up $5$'],
              ['$k < 0$', 'Shift **down** $|k|$ units', '$y = x^2 - 4$ shifts down $4$'],
              ['$|a| > 1$', 'Vertical **stretch** (narrower)', '$y = 3x^2$ is narrower than $y = x^2$'],
              ['$0 < |a| < 1$', 'Vertical **compression** (wider)', '$y = \\frac{1}{2}x^2$ is wider'],
              ['$a < 0$', '**Reflection** across $x$-axis', '$y = -x^2$ opens downward'],
            ],
          },
          {
            type: 'keyInsight',
            content: 'Horizontal shifts work **opposite** to the sign: $(x - 3)^2$ shifts right, $(x + 3)^2$ shifts left. Vertical shifts work in the **same** direction as the sign.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"How Does the Graph Change?"',
            content: 'Recognition cue: a question compares two equations and asks how the graph transforms. First move: write both in vertex form and compare $a$, $h$, $k$ values. The differences tell you the shift/stretch/reflection.',
          },
          {
            type: 'trapCard',
            title: 'Horizontal Shift Direction',
            wrong: 'Student says $y = (x - 4)^2$ shifts the graph $4$ units **left**.',
            correction: '$(x - 4)^2$ shifts **right** $4$ units. The horizontal direction is opposite the sign inside the parentheses.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Identifying Transformations',
            items: [
              'Write the equation in vertex form: $y = a(x - h)^2 + k$.',
              'Compare to the parent $y = x^2$ (where $a = 1$, $h = 0$, $k = 0$).',
              '$h$: horizontal shift (right if positive, left if negative).',
              '$k$: vertical shift (up if positive, down if negative).',
              '$|a|$: vertical stretch ($> 1$) or compression ($< 1$).',
              'Sign of $a$: reflection across $x$-axis if negative.',
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
            problem: 'Describe the transformations that take $y = x^2$ to $y = -2(x + 1)^2 + 5$.',
            steps: [
              { label: 'Rewrite', content: '$y = -2(x - (-1))^2 + 5$, so $a = -2$, $h = -1$, $k = 5$.' },
              { label: 'Horizontal', content: 'Shift left $1$ unit ($h = -1$).' },
              { label: 'Vertical', content: 'Shift up $5$ units ($k = 5$).' },
              { label: 'Stretch', content: 'Vertical stretch by factor $2$ ($|a| = 2 > 1$).' },
              { label: 'Reflection', content: 'Reflected across the $x$-axis ($a < 0$).' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'The graph of $y = x^2$ is shifted right $3$ units, down $7$ units, and reflected across the $x$-axis. Write the equation.',
            answer: '$y = -(x - 3)^2 - 7$. Right $3$ gives $(x - 3)$, reflection gives the negative sign on $a$, and down $7$ gives $k = -7$.',
          },
        ],
      },
    },
  },

  13: {
    moduleId: 'quadratics',
    title: 'Transformation of Vertex (DESMOS Method)',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        blocks: [
          {
            type: 'text',
            content: 'DESMOS lets you visualize transformations instantly. By adding sliders for $a$, $h$, and $k$ in $y = a(x - h)^2 + k$, you can watch the parabola shift, stretch, and reflect in real time.',
          },
          {
            type: 'keyInsight',
            content: 'On the digital SAT, type the original and transformed equations on separate lines in DESMOS. If they produce the same graph, the transformation is correct. If they do not, adjust until they match.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Visual Verification of Transformations',
            content: 'Recognition cue: the question gives a description of shifts and asks for the resulting equation. Type $y = x^2$ and the candidate answer into DESMOS. Visually verify that the candidate parabola has moved in the described direction and by the described amount.',
          },
          {
            type: 'trapCard',
            title: 'Slider Confusion',
            wrong: 'Student creates a slider for $h$ and moves it to $+3$, expecting the graph to shift right, but forgets the negative sign in $(x - h)$.',
            correction: 'In DESMOS, type $y = a(x - h)^2 + k$ exactly. When $h = 3$, the expression becomes $(x - 3)^2$, which correctly shifts right. Make sure the equation has the minus sign before $h$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Using DESMOS for Transformations',
            items: [
              'Type $y = a(x - h)^2 + k$ into DESMOS.',
              'DESMOS will prompt you to create sliders for $a$, $h$, and $k$ — click to add them.',
              'Adjust $h$ to see horizontal shifts, $k$ to see vertical shifts, and $a$ to see stretching/reflection.',
              'To answer a specific question, set the slider values to match the described transformation and read the resulting equation.',
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
            problem: 'Use DESMOS to verify: shifting $y = x^2$ left $2$ and up $3$ gives $y = (x + 2)^2 + 3$.',
            steps: [
              { label: 'Enter both', content: 'Type $y = x^2$ on line 1 and $y = (x + 2)^2 + 3$ on line 2.' },
              { label: 'Observe', content: 'The second parabola has its vertex at $(-2, 3)$ — shifted left $2$ and up $3$ from the origin.' },
              { label: 'Confirm', content: 'The shapes are identical (same width), only the position changed. The transformation is correct.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'You type $y = 2(x - 4)^2 - 1$ into DESMOS. Where is the vertex, and is the parabola narrower or wider than $y = x^2$?',
            answer: 'Vertex: $(4, -1)$. Since $|a| = 2 > 1$, the parabola is **narrower** (vertically stretched) compared to $y = x^2$.',
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
            label: 'Discriminant',
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
          {
            type: 'keyInsight',
            content: 'When a problem introduces an unknown parameter (e.g., "for what value of $k$..."), set up a discriminant condition ($\\Delta = 0$, $\\Delta > 0$, or $\\Delta < 0$) and solve for the parameter.',
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
            content: 'Recognition cue: any question about the **number of solutions** (or asking "for what value of $k$...") is a discriminant problem. First move: identify $a$, $b$, $c$, then compute $\\Delta = b^2 - 4ac$ and compare to zero.',
          },
          {
            type: 'trapCard',
            title: 'Equation Not in Standard Form',
            wrong: 'Given $3x = x^2 + 5$, student reads $a = 3$, $b = 1$, $c = 5$.',
            correction: 'Rearrange to $0 = x^2 - 3x + 5$ first, giving $a = 1$, $b = -3$, $c = 5$. Then $\\Delta = 9 - 20 = -11 < 0$. Always move everything to one side before reading coefficients.',
          },
          {
            type: 'tip',
            content: '"Exactly one solution" → set $\\Delta = 0$. "No real solutions" → set $\\Delta < 0$. "Two real solutions" → set $\\Delta > 0$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Using the Discriminant',
            items: [
              'Rearrange the equation to standard form $ax^2 + bx + c = 0$.',
              'Identify $a$, $b$, $c$.',
              'Compute $\\Delta = b^2 - 4ac$.',
              'Compare to zero: $\\Delta > 0$ (two roots), $\\Delta = 0$ (one root), $\\Delta < 0$ (no real roots).',
            ],
          },
          {
            type: 'steps',
            title: 'Solving for an Unknown Parameter',
            items: [
              'Write $\\Delta$ in terms of the unknown (e.g., $k$).',
              'Set up the appropriate condition (e.g., $\\Delta = 0$ for exactly one solution).',
              'Solve the resulting equation or inequality.',
            ],
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
            correction: 'The discriminant is $b^2 - 4ac$. The $4$ and the $a$ are essential — do not drop them.',
          },
          {
            type: 'trapCard',
            title: 'Equation Not in Standard Form',
            wrong: 'Given $3x = x^2 + 5$, student identifies $a = 3$, $b = 1$, $c = 5$.',
            correction: 'Rearrange to $0 = x^2 - 3x + 5$ first, so $a = 1$, $b = -3$, $c = 5$. Then $\\Delta = 9 - 20 = -11 < 0$ (no real roots).',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'For what value of $k$ does $x^2 + kx + 9 = 0$ have exactly one real solution?',
            steps: [
              { label: 'Condition', content: 'Exactly one solution → $\\Delta = 0$.' },
              { label: 'Set up', content: '$k^2 - 4(1)(9) = 0$ → $k^2 = 36$.' },
              { label: 'Solve', content: '$k = 6$ or $k = -6$.' },
            ],
          },
        ],
      },
    },
  },

  15: {
    moduleId: 'quadratics',
    title: 'Simple Discriminant Question #1',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        blocks: [
          {
            type: 'text',
            content: 'This problem type gives a standard-form quadratic with numerical coefficients and asks how many real solutions it has. The method is direct: compute $\\Delta = b^2 - 4ac$ and check the sign.',
          },
          {
            type: 'formula',
            label: 'Discriminant',
            content: '$$\\Delta = b^2 - 4ac$$',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"How Many Solutions?"',
            content: 'Recognition cue: a fully numerical quadratic equation followed by "how many real solutions." Compute $\\Delta$ and compare to zero. No further solving is needed.',
          },
          {
            type: 'trapCard',
            title: 'Miscounting the Sign of $c$',
            wrong: 'In $x^2 + 4x - 5 = 0$, student uses $c = 5$ instead of $c = -5$, getting $\\Delta = 16 - 20 = -4$.',
            correction: '$c = -5$, so $\\Delta = 16 - 4(1)(-5) = 16 + 20 = 36 > 0$. Two real solutions. Watch the sign of $c$ carefully.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Computing the Discriminant',
            items: [
              'Write the equation in standard form $ax^2 + bx + c = 0$.',
              'Read $a$, $b$, $c$ (including signs).',
              'Compute $b^2$, compute $4ac$, then subtract: $\\Delta = b^2 - 4ac$.',
              'Positive → two solutions. Zero → one. Negative → none.',
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
            problem: 'How many real solutions does $2x^2 - 4x + 2 = 0$ have?',
            steps: [
              { label: 'Identify', content: '$a = 2$, $b = -4$, $c = 2$' },
              { label: 'Discriminant', content: '$\\Delta = (-4)^2 - 4(2)(2) = 16 - 16 = 0$' },
              { label: 'Conclusion', content: '$\\Delta = 0$ → exactly **one** real solution (a repeated root).' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'How many real solutions does $x^2 + 3x + 5 = 0$ have?',
            answer: '$\\Delta = 9 - 4(1)(5) = 9 - 20 = -11 < 0$. No real solutions.',
          },
        ],
      },
    },
  },

  16: {
    moduleId: 'quadratics',
    title: 'Simple Discriminant Question #1 (DESMOS Method)',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        blocks: [
          {
            type: 'text',
            content: 'Instead of computing $b^2 - 4ac$, you can graph the quadratic in DESMOS and **count** how many times the parabola crosses the $x$-axis. The number of crossings equals the number of real solutions.',
          },
          {
            type: 'table',
            title: 'Graph ↔ Discriminant',
            headers: ['Graph Behavior', 'Number of Real Solutions', '$\\Delta$'],
            rows: [
              ['Crosses $x$-axis twice', 'Two', '$> 0$'],
              ['Touches $x$-axis once (at vertex)', 'One (repeated)', '$= 0$'],
              ['Does not touch $x$-axis', 'None', '$< 0$'],
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
            title: 'Quick Visual Count',
            content: 'Type the quadratic into DESMOS and count $x$-axis crossings. This is faster than computing $\\Delta$ when the coefficients are messy.',
          },
          {
            type: 'trapCard',
            title: 'Tangent Point Looks Like No Crossing',
            wrong: 'The parabola just touches the $x$-axis at one point, but student reports "no real solutions" because it does not cross through.',
            correction: 'Touching the $x$-axis = one real solution (repeated root, $\\Delta = 0$). Zoom in at the point of tangency to confirm it actually touches.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'DESMOS Method for Solution Count',
            items: [
              'Type the equation $y = ax^2 + bx + c$ into DESMOS.',
              'Observe the graph: does it cross, touch, or miss the $x$-axis?',
              'Crosses twice → two solutions. Touches once → one solution. Misses → no solutions.',
              'If the vertex appears very close to the $x$-axis, zoom in to distinguish touching from near-missing.',
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
            problem: 'Use DESMOS to determine how many real solutions $3x^2 + 2x + 1 = 0$ has.',
            steps: [
              { label: 'Graph', content: 'Type $y = 3x^2 + 2x + 1$ into DESMOS.' },
              { label: 'Observe', content: 'The parabola opens upward and its vertex is above the $x$-axis — it never touches or crosses.' },
              { label: 'Conclusion', content: 'No real solutions. (Algebraic check: $\\Delta = 4 - 12 = -8 < 0$.)' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'You graph $y = x^2 - 6x + 9$ in DESMOS and the parabola touches the $x$-axis at exactly one point. How many real solutions does $x^2 - 6x + 9 = 0$ have, and what is the solution?',
            answer: 'One real solution (repeated root). The touch point is at $x = 3$, since $x^2 - 6x + 9 = (x - 3)^2$.',
          },
        ],
      },
    },
  },

  17: {
    moduleId: 'quadratics',
    title: 'Simple Discriminant Question #2',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        blocks: [
          {
            type: 'text',
            content: 'This problem type introduces an **unknown parameter** (like $k$) in the quadratic and asks for which values the equation has a specific number of solutions. The discriminant becomes an equation or inequality in $k$.',
          },
          {
            type: 'keyInsight',
            content: 'The discriminant is a function of the parameter. Setting $\\Delta = 0$ gives the boundary between two solutions and no solutions. Setting $\\Delta > 0$ or $\\Delta < 0$ gives ranges.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"For What Value of $k$...?"',
            content: 'Recognition cue: a quadratic with a parameter ($k$, $m$, $p$, etc.) and a question about the number of solutions. First move: write $\\Delta$ in terms of the parameter, set up the condition, and solve.',
          },
          {
            type: 'trapCard',
            title: 'Solving the Quadratic Instead of the Discriminant',
            wrong: 'Student tries to factor $x^2 + kx + 4 = 0$ to find $x$, but the question asks for $k$.',
            correction: 'The question asks for the **parameter**, not the roots. Set $\\Delta = k^2 - 16 = 0$ and solve for $k$: $k = \\pm 4$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Solving for a Parameter',
            items: [
              'Write $\\Delta = b^2 - 4ac$ in terms of the unknown parameter.',
              'Set $\\Delta$ equal to zero (one solution), greater than zero (two solutions), or less than zero (no solutions) as required.',
              'Solve the resulting equation or inequality for the parameter.',
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
            problem: 'For what positive value of $k$ does $x^2 - 6x + k = 0$ have exactly one solution?',
            steps: [
              { label: 'Discriminant', content: '$\\Delta = (-6)^2 - 4(1)(k) = 36 - 4k$' },
              { label: 'Condition', content: 'One solution → $\\Delta = 0$: $36 - 4k = 0$' },
              { label: 'Solve', content: '$k = 9$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'For what values of $m$ does $2x^2 + mx + 8 = 0$ have no real solutions?',
            answer: '$\\Delta = m^2 - 4(2)(8) = m^2 - 64 < 0$. So $m^2 < 64$, giving $-8 < m < 8$.',
          },
        ],
      },
    },
  },

  18: {
    moduleId: 'quadratics',
    title: 'Simple Discriminant Question #2 (DESMOS Method)',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        blocks: [
          {
            type: 'text',
            content: 'When a quadratic contains a parameter, you can use DESMOS sliders to find the critical value. Type the equation with the parameter, create a slider, and adjust until the parabola just touches the $x$-axis (one solution) or lifts off entirely (no solutions).',
          },
          {
            type: 'keyInsight',
            content: 'The slider value at which the parabola transitions from crossing the $x$-axis to missing it is exactly the value where $\\Delta = 0$. DESMOS makes this transition visible.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Slider Method for Parameters',
            content: 'Type $y = x^2 + kx + 9$ and create a slider for $k$. Slide $k$ until the parabola just touches the $x$-axis. Read the slider value — that is the $k$ for exactly one solution.',
          },
          {
            type: 'trapCard',
            title: 'Slider Precision',
            wrong: 'Student slides to $k = 5.9$ and reports that as the answer, but the exact answer is $k = 6$.',
            correction: 'DESMOS sliders default to step sizes of $0.1$. For exact answers, click the slider bounds and set the step to $1$ or $0.1$ as needed. Better yet, verify algebraically: $\\Delta = k^2 - 36 = 0$ gives $k = \\pm 6$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Using DESMOS Sliders for Discriminant Problems',
            items: [
              'Type $y = ax^2 + bx + c$ with the unknown parameter (e.g., $k$ in place of $b$ or $c$).',
              'Click "add slider" when DESMOS prompts for the parameter.',
              'Slowly adjust the slider and watch the parabola.',
              'When the parabola just touches the $x$-axis (tangent), read the slider value — that gives $\\Delta = 0$.',
              'Verify by computing $\\Delta$ algebraically with that value.',
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
            problem: 'Use DESMOS to find the value of $k$ for which $x^2 + kx + 4 = 0$ has exactly one solution.',
            steps: [
              { label: 'Enter', content: 'Type $y = x^2 + kx + 4$ and create a slider for $k$.' },
              { label: 'Adjust', content: 'Slide $k$ from $0$ upward. At $k = 4$, the parabola just touches the $x$-axis.' },
              { label: 'Check negative', content: 'At $k = -4$, the parabola also just touches. Both $k = 4$ and $k = -4$ work.' },
              { label: 'Verify', content: '$\\Delta = k^2 - 16 = 0$ → $k = \\pm 4$ ✓' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'You type $y = 2x^2 - 3x + c$ into DESMOS with a slider for $c$. As you increase $c$, the parabola lifts upward. At what value of $c$ does the parabola just touch the $x$-axis?',
            answer: '$\\Delta = 9 - 8c = 0$ → $c = \\frac{9}{8}$. At $c = \\frac{9}{8}$, the vertex sits exactly on the $x$-axis.',
          },
        ],
      },
    },
  },

  19: {
    moduleId: 'quadratics',
    title: 'Complex Discriminant Question',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        blocks: [
          {
            type: 'text',
            content: 'Complex discriminant problems feature quadratics where **multiple coefficients** contain unknown parameters, or where the quadratic must first be derived from a word problem before the discriminant can be applied.',
          },
          {
            type: 'keyInsight',
            content: 'When the parameter appears in more than one coefficient (e.g., $a$ and $c$ both depend on $k$), the discriminant $\\Delta = b^2 - 4ac$ becomes a more involved expression. Expand carefully and simplify before solving.',
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Watch for Hidden Quadratics',
            content: 'Some problems give two equations (e.g., a line and a parabola) and ask when they intersect at exactly one point. Set them equal, rearrange to standard form, and then apply the discriminant condition.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Multi-Parameter Discriminant',
            content: 'Recognition cue: the quadratic has a parameter in the leading coefficient or in both $b$ and $c$. First move: write $\\Delta$ in terms of the parameter, expand, and simplify. Then apply the appropriate condition.',
          },
          {
            type: 'trapCard',
            title: 'Expanding $4ac$ Incorrectly',
            wrong: 'For $kx^2 + 6x + k = 0$, student writes $\\Delta = 36 - 4k$ instead of $36 - 4k^2$.',
            correction: '$a = k$ and $c = k$, so $4ac = 4(k)(k) = 4k^2$. The discriminant is $\\Delta = 36 - 4k^2$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Complex Discriminant Strategy',
            items: [
              'If two equations are given, set them equal and rearrange to $ax^2 + bx + c = 0$.',
              'Identify $a$, $b$, $c$ — some may contain the unknown parameter.',
              'Write $\\Delta = b^2 - 4ac$ and expand fully.',
              'Apply the condition ($\\Delta = 0$, $\\Delta > 0$, or $\\Delta < 0$) and solve for the parameter.',
              'Check that the solution makes sense (e.g., $a \\neq 0$ so the equation remains quadratic).',
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
            problem: 'For what positive value of $k$ does $kx^2 + 6x + k = 0$ have exactly one real solution?',
            steps: [
              { label: 'Identify', content: '$a = k$, $b = 6$, $c = k$' },
              { label: 'Discriminant', content: '$\\Delta = 36 - 4(k)(k) = 36 - 4k^2$' },
              { label: 'Condition', content: '$\\Delta = 0$: $36 - 4k^2 = 0$ → $k^2 = 9$ → $k = \\pm 3$' },
              { label: 'Filter', content: 'The question asks for the positive value: $k = 3$.' },
              { label: 'Verify $a \\neq 0$', content: '$k = 3 \\neq 0$, so the equation is still quadratic. ✓' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'The line $y = 2x + c$ is tangent to the parabola $y = x^2$. Find $c$.',
            answer: 'Set $x^2 = 2x + c$ → $x^2 - 2x - c = 0$. Tangent means $\\Delta = 0$: $4 + 4c = 0$ → $c = -1$.',
          },
        ],
      },
    },
  },

  20: {
    moduleId: 'quadratics',
    title: 'Simple Discriminant System Question',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        blocks: [
          {
            type: 'text',
            content: 'A system consisting of a **linear equation** and a **quadratic equation** can have 0, 1, or 2 solutions. Setting the two equations equal produces a single quadratic. The discriminant of that quadratic determines the number of intersection points.',
          },
          {
            type: 'formula',
            label: 'System → Quadratic',
            content: '$$\\text{If } y = ax^2 + bx + c \\text{ and } y = mx + d,$$\n$$\\text{then } ax^2 + (b - m)x + (c - d) = 0$$',
          },
          {
            type: 'keyInsight',
            content: 'The "new" quadratic has coefficients $A = a$, $B = b - m$, $C = c - d$. Apply the discriminant $\\Delta = B^2 - 4AC$ to determine the number of intersections.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'System Intersection Count',
            content: 'Recognition cue: a system with one linear and one quadratic equation, asking "how many solutions" or "for what value of $m$ does the system have exactly one solution?" First move: set the equations equal, simplify to standard form, then use the discriminant.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Subtract All Terms',
            wrong: 'From $x^2 + 3x + 2 = x + 4$, student writes $x^2 + 3x + 2 - x = 0$, forgetting to subtract $4$.',
            correction: 'Move **everything** to one side: $x^2 + 3x + 2 - x - 4 = 0$ → $x^2 + 2x - 2 = 0$. Subtract every term from the linear equation.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Discriminant for a System',
            items: [
              'Set the two equations equal: $ax^2 + bx + c = mx + d$.',
              'Move all terms to one side: $ax^2 + (b - m)x + (c - d) = 0$.',
              'Identify $A = a$, $B = b - m$, $C = c - d$.',
              'Compute $\\Delta = B^2 - 4AC$.',
              'Interpret: $\\Delta > 0$ → two intersections, $\\Delta = 0$ → one (tangent), $\\Delta < 0$ → none.',
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
            problem: 'How many times does the line $y = 2x + 1$ intersect the parabola $y = x^2 - x - 1$?',
            steps: [
              { label: 'Set equal', content: '$x^2 - x - 1 = 2x + 1$' },
              { label: 'Rearrange', content: '$x^2 - 3x - 2 = 0$' },
              { label: 'Discriminant', content: '$\\Delta = 9 - 4(1)(-2) = 9 + 8 = 17 > 0$' },
              { label: 'Conclusion', content: '$\\Delta > 0$ → the line intersects the parabola at **two** points.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'Does the line $y = 4x - 3$ intersect the parabola $y = x^2 + 1$? How many times?',
            answer: '$x^2 + 1 = 4x - 3$ → $x^2 - 4x + 4 = 0$. $\\Delta = 16 - 16 = 0$. Exactly one intersection (the line is tangent).',
          },
        ],
      },
    },
  },

  21: {
    moduleId: 'quadratics',
    title: 'Simple Discriminant System Question (DESMOS Method)',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        blocks: [
          {
            type: 'text',
            content: 'To determine how many times a line intersects a parabola, graph both in DESMOS and count the intersection points. DESMOS highlights them automatically.',
          },
          {
            type: 'keyInsight',
            content: 'If the line barely touches the parabola (tangent), there is exactly one intersection. If it passes through, there are two. If it misses entirely, there are none. DESMOS makes this visually clear.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Visual System Check',
            content: 'Type both equations into DESMOS. Click on intersection points to read coordinates. Count them to answer "how many solutions."',
          },
          {
            type: 'trapCard',
            title: 'Tangent vs. Near-Miss',
            wrong: 'The line appears to touch the parabola at one point, but student reports "no solutions" because the line seems to barely miss.',
            correction: 'Zoom in closely at the suspected tangent point. If the line touches the curve, there is exactly one solution. If there is a gap (even tiny), there are zero.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'DESMOS Method for System Intersection',
            items: [
              'Type the quadratic equation on line 1 (e.g., $y = x^2 - 3x + 2$).',
              'Type the linear equation on line 2 (e.g., $y = x - 1$).',
              'Look for intersection points on the graph.',
              'Click each intersection to read its coordinates.',
              'Count the intersections: 0, 1, or 2.',
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
            problem: 'Use DESMOS to find how many times $y = x^2$ and $y = 2x + 3$ intersect.',
            steps: [
              { label: 'Graph both', content: 'Type $y = x^2$ and $y = 2x + 3$ into DESMOS.' },
              { label: 'Observe', content: 'The line crosses the parabola at two points.' },
              { label: 'Read points', content: 'Intersections at $x = -1$ and $x = 3$ (click to confirm).' },
              { label: 'Verify', content: 'At $x = 3$: $y = 9$ and $y = 6 + 3 = 9$ ✓. At $x = -1$: $y = 1$ and $y = -2 + 3 = 1$ ✓.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'You graph $y = x^2 + 2$ and $y = 3$ in DESMOS. How many intersection points do you see, and what are the $x$-values?',
            answer: 'Two intersections. $x^2 + 2 = 3$ → $x^2 = 1$ → $x = -1$ and $x = 1$.',
          },
        ],
      },
    },
  },

  22: {
    moduleId: 'quadratics',
    title: 'Complex Discriminant System Question',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        blocks: [
          {
            type: 'text',
            content: 'Complex system-discriminant problems ask for the value of a parameter that makes a line tangent to a parabola, or that gives the system a specific number of solutions. This combines system setup with parameter-based discriminant analysis.',
          },
          {
            type: 'keyInsight',
            content: 'Tangency (exactly one intersection) means the resulting quadratic has $\\Delta = 0$. This condition produces an equation in the unknown parameter.',
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Multiple Parameters',
            content: 'If the system has parameters in both equations, the resulting discriminant may produce a quadratic in the parameter itself. Be prepared to solve a secondary quadratic.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"For What Value of $k$ Is the Line Tangent?"',
            content: 'Recognition cue: a system with a parameter in the linear equation (often the slope or intercept). First move: set the equations equal, form the combined quadratic, compute $\\Delta$ in terms of $k$, and set $\\Delta = 0$.',
          },
          {
            type: 'trapCard',
            title: 'Using the Wrong Condition',
            wrong: 'The question asks when the system has "no solution," but student sets $\\Delta = 0$ instead of $\\Delta < 0$.',
            correction: '"No solution" means $\\Delta < 0$ (no intersection). "Exactly one solution" means $\\Delta = 0$. "Two solutions" means $\\Delta > 0$. Match the condition to the question.',
          },
          {
            type: 'tip',
            content: 'After finding the parameter value, substitute back into the original system and solve for $x$ to find the point of tangency. This serves as a verification step.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'System + Discriminant with a Parameter',
            items: [
              'Set the two equations equal.',
              'Rearrange to $Ax^2 + Bx + C = 0$, where $A$, $B$, $C$ may involve the parameter.',
              'Compute $\\Delta = B^2 - 4AC$ (expand carefully).',
              'Set $\\Delta = 0$ (tangent), $\\Delta > 0$ (two intersections), or $\\Delta < 0$ (none) as required.',
              'Solve for the parameter.',
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
            problem: 'For what value of $k$ is the line $y = kx + 2$ tangent to $y = x^2 + 3x + 1$?',
            steps: [
              { label: 'Set equal', content: '$x^2 + 3x + 1 = kx + 2$' },
              { label: 'Rearrange', content: '$x^2 + (3 - k)x - 1 = 0$' },
              { label: 'Discriminant', content: '$\\Delta = (3 - k)^2 - 4(1)(-1) = (3 - k)^2 + 4$' },
              { label: 'Set $\\Delta = 0$', content: '$(3 - k)^2 + 4 = 0$. Since $(3 - k)^2 \\geq 0$, the sum is always $\\geq 4$. So $\\Delta > 0$ for all $k$.' },
              { label: 'Conclusion', content: 'No value of $k$ makes the line tangent — the line always intersects the parabola at two points.' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'For what value(s) of $c$ is the line $y = 2x + c$ tangent to $y = x^2$?',
            steps: [
              { label: 'Set equal', content: '$x^2 = 2x + c$ → $x^2 - 2x - c = 0$' },
              { label: 'Discriminant', content: '$\\Delta = 4 + 4c$' },
              { label: 'Tangent condition', content: '$4 + 4c = 0$ → $c = -1$' },
              { label: 'Verify', content: '$x^2 - 2x + 1 = 0$ → $(x - 1)^2 = 0$ → $x = 1$. Point: $(1, 1)$. Check line: $y = 2(1) - 1 = 1$ ✓' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'For what value of $b$ does the system $y = x^2$ and $y = bx - 4$ have exactly one solution?',
            answer: '$x^2 = bx - 4$ → $x^2 - bx + 4 = 0$. $\\Delta = b^2 - 16 = 0$ → $b = \\pm 4$.',
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
            type: 'text',
            content: 'A parabola is completely determined by the **vertex** $(h, k)$ and **one other point** on the curve. Start in vertex form, plug in the extra point to find $a$, then expand to standard form.',
          },
          {
            type: 'keyInsight',
            content: 'If the graph shows both $x$-intercepts instead of the vertex, use **factored form**: $y = a(x - r)(x - s)$. Plug in any third point (often the $y$-intercept) to solve for $a$.',
          },
          {
            type: 'comparison',
            title: 'Which Strategy to Use',
            items: [
              { label: 'Vertex + Point Visible', content: 'Use vertex form: $y = a(x - h)^2 + k$. Plug in the extra point to find $a$, then expand.' },
              { label: 'Two Roots + Point Visible', content: 'Use factored form: $y = a(x - r)(x - s)$. Plug in a third point to find $a$, then expand.' },
            ],
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
              'Read the vertex $(h, k)$ from the graph.',
              'Write $y = a(x - h)^2 + k$.',
              'Read a second point $(x_0, y_0)$ from the graph (the $y$-intercept is easiest).',
              'Substitute $(x_0, y_0)$ and solve for $a$.',
              'Expand $a(x - h)^2 + k$ to get $ax^2 + bx + c$.',
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
              'Read the two $x$-intercepts $r$ and $s$ from the graph.',
              'Write $y = a(x - r)(x - s)$.',
              'Read a third point (often the vertex or $y$-intercept) and substitute to find $a$.',
              'Expand to standard form.',
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
          {
            type: 'callout',
            variant: 'info',
            title: '"Which Equation Matches the Graph?"',
            content: 'Recognition cue: a parabola graph with visible vertex or $x$-intercepts, followed by four equation choices. First move: read the vertex $(h, k)$ or the roots from the graph. If vertex is visible → vertex form. If roots are visible → factored form. Use one extra point to find $a$.',
          },
          {
            type: 'trapCard',
            title: 'Assuming $a = 1$',
            wrong: 'Student reads vertex $(2, -3)$ and writes $y = (x-2)^2 - 3$ without checking $a$.',
            correction: 'The stretch factor $a$ might not be $1$. Plug in another visible point — if it does not satisfy the equation, solve for $a$.',
          },
          {
            type: 'tip',
            content: 'On the digital SAT, type each answer-choice equation into DESMOS and see which one matches the graph. This visual check takes about 20 seconds and requires no algebra.',
          },
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
            correction: 'If the vertex does not land on a gridline, compute $x = \\frac{-b}{2a}$ after finding $a$ from two known points. Do not eyeball — calculate.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'A parabola has vertex $(1, -4)$ and passes through $(3, 4)$. Write the equation in standard form.',
            steps: [
              { label: 'Vertex form', content: '$y = a(x - 1)^2 - 4$' },
              { label: 'Plug in $(3, 4)$', content: '$4 = a(3 - 1)^2 - 4 = 4a - 4$ → $4a = 8$ → $a = 2$' },
              { label: 'Expand', content: '$y = 2(x - 1)^2 - 4 = 2(x^2 - 2x + 1) - 4 = 2x^2 - 4x + 2 - 4$' },
              { label: 'Standard form', content: '$y = 2x^2 - 4x - 2$' },
            ],
          },
        ],
      },
    },
  },

  24: {
    moduleId: 'quadratics',
    title: 'Deriving Standard Form From Graph',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        blocks: [
          {
            type: 'text',
            content: 'This video walks through reading a parabola from a graph and building its standard-form equation step by step. The strategy depends on which points are most clearly readable: vertex + point or two roots + point.',
          },
          {
            type: 'keyInsight',
            content: 'Always identify the **most reliable** points on the graph — those that fall exactly on grid intersections. Using approximate coordinates introduces rounding errors that can lead to a wrong equation.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Graph-to-Equation Pipeline',
            content: 'Read key points → choose vertex form or factored form → plug in an extra point to find $a$ → expand to standard form. This pipeline works for every graph-to-equation problem.',
          },
          {
            type: 'trapCard',
            title: 'Sign Error When Expanding',
            wrong: 'Student expands $2(x - 3)^2 + 1$ as $2x^2 - 6x + 9 + 1 = 2x^2 - 6x + 10$.',
            correction: '$2(x - 3)^2 + 1 = 2(x^2 - 6x + 9) + 1 = 2x^2 - 12x + 18 + 1 = 2x^2 - 12x + 19$. The $2$ must distribute to **all three** terms inside the parentheses.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Full Procedure',
            items: [
              'Scan the graph for the vertex and $x$-intercepts.',
              'Choose the form that uses the most clearly readable points.',
              'Write the template equation and plug in a known point to solve for $a$.',
              'Expand to $y = ax^2 + bx + c$.',
              'Verify by plugging in a second known point.',
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
            problem: 'A parabola opens downward with vertex $(4, 8)$ and passes through $(0, -8)$. Find the standard form.',
            steps: [
              { label: 'Vertex form', content: '$y = a(x - 4)^2 + 8$' },
              { label: 'Plug in $(0, -8)$', content: '$-8 = a(16) + 8$ → $16a = -16$ → $a = -1$' },
              { label: 'Expand', content: '$y = -(x - 4)^2 + 8 = -(x^2 - 8x + 16) + 8 = -x^2 + 8x - 16 + 8$' },
              { label: 'Standard form', content: '$y = -x^2 + 8x - 8$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'A parabola has vertex $(-1, 5)$ and passes through $(1, 1)$. Write the equation in standard form.',
            answer: '$y = a(x + 1)^2 + 5$. Plug in $(1, 1)$: $1 = a(4) + 5$ → $a = -1$. Expand: $y = -(x + 1)^2 + 5 = -x^2 - 2x - 1 + 5 = -x^2 - 2x + 4$.',
          },
        ],
      },
    },
  },

  25: {
    moduleId: 'quadratics',
    title: 'Deriving Standard Form From Graph (DESMOS Method)',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        blocks: [
          {
            type: 'text',
            content: 'On the digital SAT, instead of deriving the equation algebraically, you can type each answer choice into DESMOS and compare the resulting graph to the one shown in the problem. The matching graph is the answer.',
          },
          {
            type: 'keyInsight',
            content: 'This method requires zero algebra — just typing and visual comparison. It is fastest when you have four answer choices to test.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Answer-Choice Elimination via DESMOS',
            content: 'Type each candidate equation into DESMOS. Compare vertex location, root positions, and direction (up/down) with the given graph. The one that matches all features is the correct answer.',
          },
          {
            type: 'trapCard',
            title: 'Graphs Look Similar at Default Zoom',
            wrong: 'Two answer choices produce graphs that look the same at the default DESMOS zoom level, so student picks the first one.',
            correction: 'Zoom in on key features (vertex, intercepts) to distinguish between similar-looking graphs. Small differences in $a$ or $c$ become visible upon zooming.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'DESMOS Elimination Method',
            items: [
              'Read the problem graph carefully: note the vertex, roots, $y$-intercept, and direction.',
              'Type answer choice (A) into DESMOS line 1. Does it match? If not, move on.',
              'Type answer choice (B) on line 2. Compare.',
              'Continue until you find the match.',
              'Verify by checking at least two specific points (e.g., vertex and $y$-intercept).',
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
            problem: 'A graph shows a parabola with vertex $(2, -1)$ opening upward through $(0, 3)$. The answer choices are:\n(A) $y = x^2 - 4x + 3$\n(B) $y = x^2 + 4x + 3$\n(C) $y = 2x^2 - 4x + 3$\n(D) $y = x^2 - 4x - 3$',
            steps: [
              { label: 'Check vertex of (A)', content: '$x = \\frac{4}{2} = 2$, $y = 4 - 8 + 3 = -1$. Vertex $(2, -1)$ ✓' },
              { label: 'Check $(0, 3)$ for (A)', content: '$y = 0 - 0 + 3 = 3$ ✓' },
              { label: 'DESMOS confirms', content: 'Typing $y = x^2 - 4x + 3$ matches the given graph exactly.' },
              { label: 'Answer', content: '**(A)**' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'You type $y = -x^2 + 6x - 5$ into DESMOS and see a downward parabola with vertex at $(3, 4)$. Does this match a graph showing vertex $(3, 4)$ and roots at $x = 1$ and $x = 5$?',
            answer: 'Check roots: $-x^2 + 6x - 5 = 0$ → $x^2 - 6x + 5 = 0$ → $(x-1)(x-5) = 0$ → $x = 1, 5$. Yes, it matches.',
          },
        ],
      },
    },
  },

  26: {
    moduleId: 'quadratics',
    title: 'Complex Deriving Standard Form (Vertex Form Method)',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        blocks: [
          {
            type: 'text',
            content: 'In complex graph-to-equation problems, the key points may not all be integers, or the problem provides information indirectly (e.g., "the maximum revenue is \\$500 at $x = 20$ units"). The vertex form method handles these efficiently: identify the vertex from context, use one additional constraint to find $a$, then expand.',
          },
          {
            type: 'keyInsight',
            content: 'Word problems that describe a maximum or minimum are vertex problems in disguise. The maximum/minimum value is $k$, and the input where it occurs is $h$. Write $y = a(x - h)^2 + k$ and use any other given condition to find $a$.',
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Non-Integer Values',
            content: 'When the vertex has non-integer coordinates (e.g., $h = \\frac{3}{2}$), be careful when expanding $(x - \\frac{3}{2})^2$. Use $\\left(x - \\frac{3}{2}\\right)^2 = x^2 - 3x + \\frac{9}{4}$.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Context-Based Vertex Identification',
            content: 'Recognition cue: a word problem mentions a maximum or minimum value. Extract $h$ (the input where the extremum occurs) and $k$ (the extremum value). Write vertex form and use another condition (e.g., the value at $x = 0$) to determine $a$.',
          },
          {
            type: 'trapCard',
            title: 'Mixing Up $h$ and $k$',
            wrong: '"Maximum profit is \\$200 at 50 units." Student writes $y = a(x - 200)^2 + 50$.',
            correction: '$h = 50$ (the input), $k = 200$ (the output). The equation is $y = a(x - 50)^2 + 200$. The vertex is $(h, k) = (\\text{input}, \\text{output})$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Vertex Form Method for Complex Problems',
            items: [
              'Extract the vertex $(h, k)$ from the problem context or graph.',
              'Write $y = a(x - h)^2 + k$.',
              'Use a second condition (another point, $y$-intercept, or boundary value) to find $a$.',
              'Expand to standard form: distribute $a$, then combine like terms.',
              'Verify with a third data point if available.',
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
            problem: 'A ball reaches its maximum height of $45$ feet at $t = 1.5$ seconds. At $t = 0$, the ball is at $9$ feet. Find $h(t)$ in standard form.',
            steps: [
              { label: 'Vertex', content: '$(h, k) = (1.5, 45)$. So $h(t) = a(t - 1.5)^2 + 45$.' },
              { label: 'Use $h(0) = 9$', content: '$9 = a(0 - 1.5)^2 + 45 = 2.25a + 45$' },
              { label: 'Solve for $a$', content: '$2.25a = -36$ → $a = -16$' },
              { label: 'Expand', content: '$h(t) = -16(t - 1.5)^2 + 45 = -16(t^2 - 3t + 2.25) + 45$' },
              { label: 'Standard form', content: '$h(t) = -16t^2 + 48t - 36 + 45 = -16t^2 + 48t + 9$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'A parabola has its minimum value of $-3$ at $x = 2$ and passes through $(0, 5)$. Write the standard form.',
            answer: '$y = a(x - 2)^2 - 3$. At $(0, 5)$: $5 = 4a - 3$ → $a = 2$. Expand: $y = 2(x^2 - 4x + 4) - 3 = 2x^2 - 8x + 8 - 3 = 2x^2 - 8x + 5$.',
          },
        ],
      },
    },
  },

  27: {
    moduleId: 'quadratics',
    title: 'Complex Deriving Standard Form (System of Equations Method)',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        blocks: [
          {
            type: 'text',
            content: 'When neither the vertex nor two roots are clearly identifiable, but **three points** on the parabola are known, you can set up a system of three equations in three unknowns ($a$, $b$, $c$) using $y = ax^2 + bx + c$.',
          },
          {
            type: 'keyInsight',
            content: 'Each known point $(x_i, y_i)$ produces one equation: $y_i = ax_i^2 + bx_i + c$. Three points give three equations, which can be solved simultaneously for $a$, $b$, $c$.',
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Choosing Convenient Points',
            content: 'If one of the points is the $y$-intercept $(0, y_0)$, the equation simplifies to $y_0 = c$, immediately giving you $c$. This reduces the system to two equations in two unknowns.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Three Points → System of Equations',
            content: 'Recognition cue: a graph or table gives three specific points on a parabola (none of which form an obvious vertex or root pair). First move: substitute each point into $y = ax^2 + bx + c$ to build a $3 \\times 3$ system.',
          },
          {
            type: 'trapCard',
            title: 'Arithmetic Errors in the System',
            wrong: 'Student correctly sets up three equations but makes an error when eliminating variables, producing a wrong $a$.',
            correction: 'Use the $y$-intercept to find $c$ first (if available). Then subtract equations pairwise to eliminate $c$, reducing to two equations in $a$ and $b$. Double-check each elimination step.',
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
              'Write $y = ax^2 + bx + c$.',
              'Substitute each of the three known points to get three equations.',
              'If one point is $(0, y_0)$, immediately set $c = y_0$.',
              'Use elimination or substitution to solve for $a$, $b$, $c$.',
              'Write the final equation $y = ax^2 + bx + c$.',
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
            problem: 'Find the equation of the parabola passing through $(0, 3)$, $(1, 2)$, and $(2, 5)$.',
            steps: [
              { label: 'Point $(0, 3)$', content: '$3 = a(0) + b(0) + c$ → $c = 3$' },
              { label: 'Point $(1, 2)$', content: '$2 = a + b + 3$ → $a + b = -1$ ... (i)' },
              { label: 'Point $(2, 5)$', content: '$5 = 4a + 2b + 3$ → $4a + 2b = 2$ → $2a + b = 1$ ... (ii)' },
              { label: 'Subtract (i) from (ii)', content: '$(2a + b) - (a + b) = 1 - (-1)$ → $a = 2$' },
              { label: 'Back-substitute', content: '$2 + b = -1$ → $b = -3$' },
              { label: 'Equation', content: '$y = 2x^2 - 3x + 3$' },
              { label: 'Verify at $(2, 5)$', content: '$y = 2(4) - 3(2) + 3 = 8 - 6 + 3 = 5$ ✓' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'A parabola passes through $(0, -4)$, $(1, -1)$, and $(-1, -5)$. Find $a$, $b$, $c$.',
            answer: 'From $(0, -4)$: $c = -4$. From $(1, -1)$: $a + b - 4 = -1$ → $a + b = 3$. From $(-1, -5)$: $a - b - 4 = -5$ → $a - b = -1$. Adding: $2a = 2$ → $a = 1$, $b = 2$. Equation: $y = x^2 + 2x - 4$.',
          },
        ],
      },
    },
  },

};

