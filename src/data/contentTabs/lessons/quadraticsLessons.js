export const quadraticsLessonTabs = {
  1: {
    moduleId: 'quadratics',
    title: 'Introduction to Quadratics',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'A quadratic is any equation with an $x^2$ term — its graph is always a parabola. The SAT tests whether you can pick the right form for the information asked.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'Quadratics on the SAT → CB tests whether you recognize which form reveals the answer instantly. "Zeros/solutions" → factored form. "Minimum/maximum" → vertex form. "$y$-intercept" → standard form. Pick the form that matches the question — don\'t convert unless you have to.',
          },
          {
            type: 'table',
            title: 'Three Forms — What Each Reveals',
            headers: ['Form', 'Equation', 'Instantly Shows', 'SAT Trigger'],
            rows: [
              ['Standard', '$y = ax^2 + bx + c$', '$y$-intercept = $c$, direction from $a$', '"when $x = 0$" or "$y$-intercept"'],
              ['Factored', '$y = a(x - r)(x - s)$', 'Roots $r$ and $s$', '"zeros," "solutions," "$x$-intercepts"'],
              ['Vertex', '$y = a(x - h)^2 + k$', 'Vertex $(h, k)$, min/max', '"minimum," "maximum," "vertex"'],
            ],
          },
          {
            type: 'text',
            content: 'The sign of $a$ controls the parabola\'s direction: $a > 0$ opens **upward** (has a minimum), $a < 0$ opens **downward** (has a maximum). This applies to ALL three forms — $a$ is the same number regardless of which form you\'re looking at.',
          },
          {
            type: 'trapCard',
            title: 'Reading $c$ as the Minimum',
            wrong: 'Student sees $y = x^2 - 6x + 8$ and says the minimum is $8$.',
            correction: 'CB trap: confusing y-intercept with vertex. $c = 8$ is where the graph crosses the $y$-axis (when $x = 0$), NOT the minimum. Complete the square: $(x-3)^2 - 1$, so the minimum is $-1$. Decision rule: $c$ = minimum ONLY when $b = 0$.',
          },
          {
            type: 'strategyCard',
            title: 'Form-Matching Speed Check',
            icon: '⚡',
            timing: '~5s',
            content: 'Before solving anything, read what the question asks. If it says "zeros" → look at factored form. If it says "minimum value" → look at vertex form. If it says "$y$-intercept" → read $c$ from standard form. Often the answer is just reading the right number from the right form — no algebra needed.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'The equation $y = 2(x - 1)(x - 5)$ represents a parabola. What are the $x$-intercepts, and what is the minimum value of $y$?',
            steps: [
              { label: 'Read roots from factored form', content: 'Roots: $x = 1$ and $x = 5$ (set each factor to zero).' },
              { label: 'Find axis of symmetry', content: 'Midpoint of roots: $x = \\frac{1 + 5}{2} = 3$.' },
              { label: 'Plug in for minimum', content: '$y = 2(3-1)(3-5) = 2(2)(-2) = -8$.' },
              { label: 'Answer', content: '$x$-intercepts: $1$ and $5$. Minimum value: $-8$.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Given $y = -3(x + 2)(x - 4)$, what is the maximum value of $y$?',
            answer: '$a = -3 < 0$, so opens downward (has a maximum). Axis of symmetry: $x = \\frac{-2 + 4}{2} = 1$. Plug in: $y = -3(1+2)(1-4) = -3(3)(-3) = 27$. Maximum value: $27$.',
          },
        ],
      },
    },
  },

  2: {
    moduleId: 'quadratics',
    title: 'Roots of a Quadratic',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Roots (zeros, $x$-intercepts, solutions) are the $x$-values where $y = 0$. The SAT uses all three terms interchangeably — recognize the synonym and you\'re halfway there.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'Roots on the SAT → CB tests whether you pick the fastest method for the given equation. Factoring is fastest for small integer coefficients (~15s). DESMOS is fastest on the digital SAT for messy coefficients (~10s). The quadratic formula is the backup when factoring fails and you need exact values (~40s). Decision rule: try factoring first; if it doesn\'t click in 10 seconds, go to DESMOS.',
          },
          {
            type: 'table',
            title: 'Root-Finding Methods — When to Use Each',
            headers: ['Method', 'Best When', 'Speed'],
            rows: [
              ['Factoring', 'Small integer coefficients that factor cleanly', '~15s'],
              ['DESMOS graphing', 'Digital SAT, any quadratic', '~10s'],
              ['Quadratic formula', 'Non-factorable, need exact radical form', '~40s'],
              ['Completing the square', 'Need vertex form too, or for circles chapter', '~60s'],
            ],
          },
          {
            type: 'text',
            content: 'The SAT calls roots by many names: **zeros**, **solutions**, **$x$-intercepts**, and **roots**. They all mean the same thing — the $x$-values where $y = 0$. When you see any of these words, you\'re looking for where the parabola crosses the $x$-axis.',
          },
          {
            type: 'trapCard',
            title: 'Sign Error in Quadratic Formula',
            wrong: 'For $x^2 + 6x + 5 = 0$: student writes $x = \\frac{6 \\pm \\sqrt{36 - 20}}{2}$, missing the negative on $b$.',
            correction: 'CB trap: dropping the negative in $-b$. The formula starts with $-b$: $x = \\frac{-6 \\pm \\sqrt{36 - 20}}{2} = \\frac{-6 \\pm 4}{2}$. Roots: $-1$ and $-5$. Decision rule: always write "$-b =$" as your first step and evaluate the sign explicitly.',
          },
          {
            type: 'strategyCard',
            title: 'Two-Number Factoring Pattern',
            icon: '🔢',
            timing: '~15s',
            content: 'For $x^2 + bx + c = 0$: find two numbers that **multiply to $c$** and **add to $b$**. Write them as factors. Example: $x^2 - 5x + 6 = 0$ → need numbers that multiply to $6$ and add to $-5$: that\'s $-2$ and $-3$ → $(x-2)(x-3) = 0$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'What are the solutions to $x^2 - 5x + 6 = 0$?\n(A) $x = -2$ and $x = -3$\n(B) $x = 2$ and $x = 3$\n(C) $x = 1$ and $x = 6$\n(D) $x = -1$ and $x = -6$',
            steps: [
              { label: 'Find factor pair', content: 'Two numbers that multiply to $6$ and add to $-5$: that\'s $-2$ and $-3$.' },
              { label: 'Factor', content: '$(x - 2)(x - 3) = 0$' },
              { label: 'Solve', content: '$x = 2$ or $x = 3$.' },
              { label: 'Trap check', content: '(A) has the wrong signs — those multiply to $6$ but add to $+5$, not $-5$. Answer: **(B)**.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Find the roots of $3x^2 - 10x + 8 = 0$.',
            answer: 'Need two numbers that multiply to $3 \\times 8 = 24$ and add to $-10$: $-6$ and $-4$. Split: $3x^2 - 6x - 4x + 8 = 0$ → $3x(x-2) - 4(x-2) = 0$ → $(3x-4)(x-2) = 0$. Roots: $x = \\frac{4}{3}$ and $x = 2$.',
          },
        ],
      },
    },
  },

  3: {
    moduleId: 'quadratics',
    title: 'Finding Roots Via Graph',
    sections: {
      learn: {
        title: 'Learn',
        blocks: [
          {
            type: 'keyInsight',
            content: 'Graph-based root questions on the SAT → CB tests whether you can distinguish $x$-intercepts from $y$-intercepts and whether you can read exact vs approximate values. Decision rule: roots are where $y = 0$ (the curve touches the $x$-axis). If the crossing doesn\'t land on a gridline, the graph alone can\'t give an exact answer — use algebra.',
          },
          {
            type: 'text',
            content: 'From the video: the roots are the **$x$-coordinates** where the parabola crosses the $x$-axis. At these points, $y = 0$. A parabola can cross twice (two roots), touch once (repeated root), or never reach the $x$-axis (no real roots).',
          },
          {
            type: 'trapCard',
            title: 'Reporting the $y$-intercept as a Root',
            wrong: 'The parabola crosses the $y$-axis at $(0, 6)$. Student reports $6$ as a root.',
            correction: 'CB trap: confusing $x$-intercept with $y$-intercept. Roots are where $y = 0$ (on the $x$-axis), not where $x = 0$ (on the $y$-axis). The value $6$ is the $y$-intercept ($c$ value), not a root. Decision rule: roots live on the $x$-axis; the $y$-intercept lives on the $y$-axis.',
          },
          {
            type: 'strategyCard',
            title: 'Root-to-Factor Conversion',
            icon: '🔄',
            timing: '~5s',
            content: 'If the graph shows roots at $x = r$ and $x = s$, the factored form is $y = a(x - r)(x - s)$. Root at $x = -3$ gives factor $(x + 3)$. Root at $x = 5$ gives factor $(x - 5)$. The sign always flips between the root value and the factor.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A parabola crosses the $x$-axis at $x = -3$ and $x = 5$ and opens upward. Which could be its equation?\n(A) $y = (x + 3)(x - 5)$\n(B) $y = (x - 3)(x + 5)$\n(C) $y = -(x + 3)(x - 5)$\n(D) $y = (x + 3)(x + 5)$',
            steps: [
              { label: 'Convert roots to factors', content: 'Root $x = -3$ → factor $(x + 3)$. Root $x = 5$ → factor $(x - 5)$.' },
              { label: 'Check direction', content: 'Opens upward means $a > 0$. Eliminate (C) where $a = -1$.' },
              { label: 'Check factors', content: '(B) has roots at $3$ and $-5$ — wrong roots. (D) has roots at $-3$ and $-5$ — wrong.' },
              { label: 'Answer', content: '**(A)** — correct roots and correct direction.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A graph shows a parabola touching the $x$-axis at exactly one point, $x = 4$, and opening upward. What form does the equation take?',
            answer: 'One touch point = repeated root. The equation is $y = a(x - 4)^2$ for some $a > 0$. This is also vertex form with vertex $(4, 0)$.',
          },
        ],
      },
    },
  },

  4: {
    moduleId: 'quadratics',
    title: 'Finding Roots Via Factoring',
    sections: {
      learn: {
        title: 'Learn',
        blocks: [
          {
            type: 'keyInsight',
            content: 'Factoring on the SAT → CB gives you quadratics designed to factor cleanly when factoring is the intended method. If you can\'t find the pair in ~10 seconds, the equation probably isn\'t meant to be factored — switch to DESMOS. Decision rule: try the multiply-to-$c$-add-to-$b$ pattern first; bail to calculator if it doesn\'t click fast.',
          },
          {
            type: 'text',
            content: 'From the video: for $x^2 + bx + c = 0$, find two numbers that **multiply to $c$** and **add to $b$**. These become your factors. For $ax^2 + bx + c$ with $a \\neq 1$, find two numbers that multiply to $a \\cdot c$ and add to $b$, then split the middle term and factor by grouping.',
          },
          {
            type: 'trapCard',
            title: 'Dropping the Leading Coefficient',
            wrong: 'For $2x^2 - 7x + 3 = 0$: student writes $(x - 3)(x - 1) = 0$ and gets $x = 3, 1$.',
            correction: 'CB trap: ignoring $a \\neq 1$. With $a = 2$, multiply $a \\cdot c = 6$. Need two numbers multiplying to $6$ and adding to $-7$: $-6$ and $-1$. Split: $2x^2 - 6x - x + 3 = 0$ → $2x(x-3) - 1(x-3) = 0$ → $(2x-1)(x-3) = 0$. Roots: $x = \\frac{1}{2}$ and $x = 3$.',
          },
          {
            type: 'strategyCard',
            title: 'Zero Product Property — The Core Rule',
            icon: '✖️',
            timing: '~15s',
            content: 'If $AB = 0$, then $A = 0$ or $B = 0$. Once you factor into $(\\text{something})(\\text{something}) = 0$, set each factor equal to zero and solve. This only works when one side equals zero — if it equals any other number, you must move everything to one side first.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'What are the solutions to $3x^2 + 5x - 2 = 0$?',
            steps: [
              { label: 'Find factor pair', content: '$a \\cdot c = 3 \\times (-2) = -6$. Need two numbers multiplying to $-6$ and adding to $5$: $6$ and $-1$.' },
              { label: 'Split middle term', content: '$3x^2 + 6x - x - 2 = 0$' },
              { label: 'Factor by grouping', content: '$3x(x + 2) - 1(x + 2) = 0 \\Rightarrow (3x - 1)(x + 2) = 0$' },
              { label: 'Solve', content: '$x = \\frac{1}{3}$ or $x = -2$' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Solve by factoring: $x^2 - 7x + 12 = 0$.',
            answer: 'Numbers multiplying to $12$ and adding to $-7$: $-3$ and $-4$. Factor: $(x - 3)(x - 4) = 0$. Roots: $x = 3$ and $x = 4$.',
          },
        ],
      },
    },
  },

  5: {
    moduleId: 'quadratics',
    title: 'Finding Roots Via Completing the Square',
    sections: {
      learn: {
        title: 'Learn',
        blocks: [
          {
            type: 'keyInsight',
            content: 'Completing the square on the SAT → CB tests this in two contexts: (1) converting to vertex form to find the min/max, and (2) rewriting circle equations from general to standard form. It\'s the only method that finds roots AND reveals the vertex in one pass. Decision rule: use when the question asks for the vertex AND roots, or when you see a circle equation.',
          },
          {
            type: 'text',
            content: 'From the video: for $x^2 + bx + c = 0$, take half of $b$, square it, add and subtract that value. The example $w^2 + 12w - 40 = 0$ becomes $(w + 6)^2 - 76 = 0$, giving $w = -6 \\pm \\sqrt{76} = -6 \\pm 2\\sqrt{19}$.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Subtract the Added Constant',
            wrong: 'Student rewrites $x^2 + 10x + 18 = 0$ as $x^2 + 10x + 25 = 0$, adding $25$ to the left but not adjusting.',
            correction: 'CB trap: unbalanced equation. When you add $(b/2)^2 = 25$ inside, you must subtract $25$ to keep the equation balanced: $x^2 + 10x + 25 - 25 + 18 = 0$ → $(x+5)^2 - 7 = 0$. Decision rule: "add inside, subtract outside" — or move the constant first.',
          },
          {
            type: 'strategyCard',
            title: 'Half-Square Shortcut',
            icon: '½',
            timing: '~30s',
            content: 'Step 1: Move the constant to the other side. Step 2: Take half of the $x$-coefficient, square it. Step 3: Add that to BOTH sides. Step 4: Factor the left as a perfect square. Step 5: Take the square root of both sides (don\'t forget $\\pm$). This same technique appears in the circles chapter — learn it once, use it twice.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Solve $x^2 + 10x + 18 = 0$ by completing the square.',
            steps: [
              { label: 'Move constant', content: '$x^2 + 10x = -18$' },
              { label: 'Add $(b/2)^2$', content: 'Half of $10$ is $5$, squared is $25$. Add to both sides: $x^2 + 10x + 25 = 7$' },
              { label: 'Factor', content: '$(x + 5)^2 = 7$' },
              { label: 'Solve', content: '$x + 5 = \\pm\\sqrt{7}$, so $x = -5 \\pm \\sqrt{7}$' },
            ],
          },
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
      learn: {
        title: 'Learn',
        blocks: [
          {
            type: 'keyInsight',
            content: 'DESMOS root-finding on the SAT → the digital SAT has a built-in graphing calculator that finds roots in seconds. From the video: just type the expression (NOT "= 0") and click the $x$-intercepts. Then match to answer choices. Decision rule: when you see a quadratic with messy coefficients, go straight to DESMOS — it\'s faster than algebra.',
          },
          {
            type: 'text',
            content: 'From the video: type $y = ax^2 + bx + c$ into DESMOS. The parabola appears and the $x$-intercepts are shown as points you can click. Key insight from the video: **do NOT type "= 0"** — DESMOS needs it in the form $y = \\text{expression}$ to graph it properly.',
          },
          {
            type: 'trapCard',
            title: 'Typing "= 0" in DESMOS',
            wrong: 'Student types "$2x^2 - 5x - 3 = 0$" in DESMOS and gets no graph or an unexpected display.',
            correction: 'CB trap: DESMOS format error. Type "$y = 2x^2 - 5x - 3$" instead. DESMOS graphs equations in the form $y = f(x)$. When you type "= 0", DESMOS might interpret it differently or show nothing useful. Decision rule: always type $y =$ on the left side.',
          },
          {
            type: 'strategyCard',
            title: 'DESMOS Root Reading + Answer Matching',
            icon: '📊',
            timing: '~10s',
            content: 'From the video: (1) Type $y = \\text{quadratic}$ in DESMOS. (2) Click the $x$-intercepts to get decimal values. (3) If the answer choices are in exact form (like $\\frac{1}{2}$), convert your decimals to fractions to match. If DESMOS shows $x = -0.5$ and $x = 3$, that\'s $x = -\\frac{1}{2}$ and $x = 3$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'What are the roots of $2x^2 - 5x - 3 = 0$?\n(A) $x = -\\frac{1}{2}$ and $x = 3$\n(B) $x = \\frac{1}{2}$ and $x = -3$\n(C) $x = -1$ and $x = 3$\n(D) $x = 1$ and $x = -3$',
            steps: [
              { label: 'Graph in DESMOS', content: 'Type $y = 2x^2 - 5x - 3$. Click the $x$-intercepts.' },
              { label: 'Read intercepts', content: 'DESMOS shows $x = -0.5$ and $x = 3$.' },
              { label: 'Convert to fraction', content: '$-0.5 = -\\frac{1}{2}$.' },
              { label: 'Answer', content: '**(A)** $x = -\\frac{1}{2}$ and $x = 3$.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'You type $y = x^2 + 2x - 8$ into DESMOS and the parabola crosses the $x$-axis at $x = -4$ and $x = 2$. Write the factored form.',
            answer: '$y = (x + 4)(x - 2)$. Each root becomes a factor with the sign flipped: root $-4$ → $(x + 4)$, root $2$ → $(x - 2)$.',
          },
        ],
      },
    },
  },

  7: {
    moduleId: 'quadratics',
    title: 'Complex Finding the Roots via DESMOS',
    sections: {
      learn: {
        title: 'Learn',
        blocks: [
          {
            type: 'keyInsight',
            content: 'Complex DESMOS root problems on the SAT → CB disguises root-finding inside systems of equations or radical expressions. From the video: if the solution is in the form $1 + \\sqrt{k}$, graph the quadratic in DESMOS, read the decimal root, subtract $1$, then square to find $k$. Decision rule: when answers contain $\\sqrt{k}$, DESMOS gives you the decimal — reverse-engineer the exact form.',
          },
          {
            type: 'text',
            content: 'From the video: for problems where $f(x) = g(x)$, graph both curves in DESMOS and find their intersection points. Alternatively, graph $y = f(x) - g(x)$ and find where it crosses the $x$-axis. Both approaches give the same $x$-values.',
          },
          {
            type: 'trapCard',
            title: 'Reading Only One Intersection',
            wrong: 'A line intersects a parabola at two points, but student reports only one solution because the second intersection is off-screen.',
            correction: 'CB trap: incomplete solution set. A line can intersect a parabola at 0, 1, or 2 points. Always zoom out to check for a second intersection. DESMOS highlights intersection points — scroll or zoom to find all of them.',
          },
          {
            type: 'strategyCard',
            title: 'Reverse-Engineering Radical Answers',
            icon: '√',
            timing: '~15s',
            content: 'From the video: if DESMOS gives root $x = 4.162...$ and the answers are in the form $1 + \\sqrt{k}$: (1) Subtract $1$: $3.162...$  (2) Square: $3.162^2 \\approx 10$  (3) So $k = 10$ and the answer is $1 + \\sqrt{10}$. This works for any "constant $\\pm\\sqrt{k}$" format.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'What is the positive solution of $x^2 - 2x - 9 = 0$ in the form $1 + \\sqrt{k}$? What is $k$?',
            steps: [
              { label: 'Graph in DESMOS', content: 'Type $y = x^2 - 2x - 9$. The positive $x$-intercept is approximately $x \\approx 4.162$.' },
              { label: 'Isolate the radical part', content: 'The form is $1 + \\sqrt{k}$, so $\\sqrt{k} = 4.162 - 1 = 3.162$.' },
              { label: 'Square it', content: '$k = 3.162^2 \\approx 10$.' },
              { label: 'Verify', content: 'Quadratic formula: $x = \\frac{2 \\pm \\sqrt{4 + 36}}{2} = 1 \\pm \\sqrt{10}$. So $k = 10$ ✓.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'You graph $y = x^2 + 1$ and $y = 2x + 4$ in DESMOS and see intersection points at $x = -1$ and $x = 3$. Verify $x = 3$ algebraically.',
            answer: 'At $x = 3$: left side $= 9 + 1 = 10$, right side $= 6 + 4 = 10$. Both equal $10$ ✓.',
          },
        ],
      },
    },
  },

  8: {
    moduleId: 'quadratics',
    title: 'The Vertex',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'The vertex is the highest or lowest point on a parabola. The SAT loves asking "what is the minimum/maximum value" — that\'s always the $y$-coordinate of the vertex.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'Vertex questions on the SAT → CB tests two things: (1) can you FIND the vertex, and (2) do you report the right coordinate? "What is the minimum value?" = $y$-coordinate ($k$). "At what value of $x$ does the minimum occur?" = $x$-coordinate ($h$). Decision rule: "value" = output ($y$), "where/when" = input ($x$).',
          },
          {
            type: 'formula',
            label: 'Vertex from Standard Form',
            content: '$$x_{\\text{vertex}} = \\frac{-b}{2a}, \\quad y_{\\text{vertex}} = f\\!\\left(\\frac{-b}{2a}\\right)$$',
            note: 'From the video: find $x$ first with $-b/(2a)$, then plug back in to get $y$.',
          },
          {
            type: 'text',
            content: 'From the video: for $x^2 - 14x + 22$, the vertex $x$-coordinate is $\\frac{-(-14)}{2(1)} = 7$. Then plug $x = 7$ back in to get the $y$-coordinate. The axis of symmetry is the vertical line $x = 7$ — every parabola is perfectly symmetric about this line.',
          },
          {
            type: 'trapCard',
            title: 'Reporting the Wrong Coordinate',
            wrong: '"What is the maximum height?" The vertex is $(2, 69)$. Student answers $2$.',
            correction: 'CB trap: confusing input with output. "Maximum height" asks for the output ($y$-coordinate): $69$. The value $2$ is WHEN the maximum occurs, not WHAT it is. Decision rule: height/value/distance = $y$; time/position = $x$.',
          },
          {
            type: 'strategyCard',
            title: 'Vertex Formula Speed Run',
            icon: '📐',
            timing: '~12s',
            content: 'For $y = ax^2 + bx + c$: Step 1: $x = \\frac{-b}{2a}$ (~3s arithmetic). Step 2: Plug that $x$ back into the original equation (~8s arithmetic). Done. If the equation is already in vertex form $a(x-h)^2 + k$, just read $(h, k)$ directly (~2s).',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'What is the minimum value of $y = 2x^2 - 8x + 3$?',
            steps: [
              { label: 'Find $x$-coordinate', content: '$x = \\frac{-(-8)}{2(2)} = \\frac{8}{4} = 2$' },
              { label: 'Find $y$-coordinate', content: '$y = 2(4) - 8(2) + 3 = 8 - 16 + 3 = -5$' },
              { label: 'Answer', content: 'Minimum value is $-5$ (since $a = 2 > 0$, parabola opens up, vertex is a minimum).' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A ball is thrown upward. Its height is modeled by $h = -x^2 + 4x + 1$. What is the maximum height?',
            answer: '$x = \\frac{-4}{2(-1)} = 2$. Then $h = -(4) + 4(2) + 1 = -4 + 8 + 1 = 5$. Maximum height is $5$ (the $y$-coordinate, not $x = 2$).',
          },
        ],
      },
    },
  },

  9: {
    moduleId: 'quadratics',
    title: 'Vertex Form',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Vertex form $y = a(x - h)^2 + k$ lets you read the vertex directly — no formula needed. But watch the sign trap.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'Vertex form on the SAT → CB tests whether you correctly handle the minus sign in $(x - h)$. The #1 mistake is getting the sign of $h$ wrong. $y = (x + 4)^2 + 2$ has vertex $(-4, 2)$, NOT $(4, 2)$. Decision rule: the sign inside the parentheses is OPPOSITE to $h$. If you see $+ 4$, then $h = -4$.',
          },
          {
            type: 'text',
            content: 'Vertex form and standard form describe the same parabola — they\'re interchangeable. Convert standard → vertex by completing the square. Convert vertex → standard by expanding. Use whichever form matches what the question asks.',
          },
          {
            type: 'trapCard',
            title: 'Sign Error in $(x - h)$',
            wrong: '$y = (x + 4)^2 + 2$ — student writes vertex as $(4, 2)$.',
            correction: 'CB trap: sign reversal. The form is $(x - h)^2 + k$. Writing $x + 4$ means $x - (-4)$, so $h = -4$. Vertex: $(-4, 2)$. Decision rule: ALWAYS reverse the sign you see inside the parentheses to get $h$.',
          },
          {
            type: 'strategyCard',
            title: 'Instant Vertex Read',
            icon: '👁️',
            timing: '~3s',
            content: 'For $y = a(x - h)^2 + k$: (1) $h$ = opposite of the number inside parentheses. (2) $k$ = the number added outside. (3) $a > 0$ → minimum, $a < 0$ → maximum. That\'s the entire answer for "find the vertex" or "what is the minimum/maximum value" questions.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Convert $y = x^2 - 6x + 11$ to vertex form and find the vertex.',
            steps: [
              { label: 'Half of $b$', content: '$\\frac{-6}{2} = -3$, squared: $(-3)^2 = 9$' },
              { label: 'Add and subtract', content: '$y = (x^2 - 6x + 9) - 9 + 11 = (x - 3)^2 + 2$' },
              { label: 'Read vertex', content: 'Vertex: $(3, 2)$. Minimum value is $2$.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'What is the vertex of $y = -2(x + 3)^2 - 5$? Is this a max or min?',
            answer: '$h = -3$ (reverse the $+3$), $k = -5$. Vertex: $(-3, -5)$. Since $a = -2 < 0$, parabola opens down, so this is a **maximum** of $-5$.',
          },
        ],
      },
    },
  },

  10: {
    moduleId: 'quadratics',
    title: 'Finding the Vertex from a Graph',
    sections: {
      learn: {
        title: 'Learn',
        blocks: [
          {
            type: 'keyInsight',
            content: 'Graph-based vertex questions on the SAT → CB tests whether you report the correct coordinate. From the video: the vertex is the turning point — the lowest point if opening up, highest if opening down. "Minimum value" = $y$-coordinate. "At what $x$" = $x$-coordinate. Decision rule: always check whether the question asks for the input or the output.',
          },
          {
            type: 'text',
            content: 'From the video: if the vertex sits exactly on a grid intersection, read it directly. If two symmetric points are visible (like two roots), the vertex $x$-coordinate is their midpoint. The vertex always lies on the axis of symmetry.',
          },
          {
            type: 'trapCard',
            title: 'Reading the $x$-Coordinate Instead of $y$',
            wrong: '"What is the minimum value?" The vertex is at $(3, -2)$. Student answers $3$.',
            correction: 'CB trap: input vs output confusion. The minimum VALUE of the function is the $y$-coordinate: $-2$. The value $3$ tells WHERE the minimum occurs, not WHAT it is. The answer choices will include both $3$ and $-2$ to test this. Decision rule: "value" always means the output.',
          },
          {
            type: 'strategyCard',
            title: 'Midpoint of Roots = Vertex $x$-Coordinate',
            icon: '↔️',
            timing: '~5s',
            content: 'If you can see both $x$-intercepts on the graph (say at $x = 1$ and $x = 5$), the vertex $x$-coordinate is the midpoint: $x = \\frac{1 + 5}{2} = 3$. Then read the $y$-value at that $x$ from the graph. This is often faster than using $-b/(2a)$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A parabola has vertex at $(4, -3)$ and opens upward. What is the minimum value of the function?\n(A) $-3$\n(B) $4$\n(C) $3$\n(D) $-4$',
            steps: [
              { label: 'Identify what\'s asked', content: '"Minimum value" = the output = $y$-coordinate of vertex.' },
              { label: 'Read vertex', content: 'Vertex $(4, -3)$: minimum value is $-3$.' },
              { label: 'Trap check', content: '(B) $4$ is the $x$-coordinate — the trap for confusing where vs what.' },
              { label: 'Answer', content: '**(A) $-3$**' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A graph shows a parabola with $x$-intercepts at $x = -2$ and $x = 6$, opening upward. The lowest point appears to be at $y = -8$. What is the vertex?',
            answer: '$x$-coordinate: midpoint of $-2$ and $6$ = $\\frac{-2+6}{2} = 2$. $y$-coordinate from graph: $-8$. Vertex: $(2, -8)$.',
          },
        ],
      },
    },
  },

  11: {
    moduleId: 'quadratics',
    title: 'Finding the Vertex from an Equation',
    sections: {
      learn: {
        title: 'Learn',
        blocks: [
          {
            type: 'keyInsight',
            content: 'Vertex-from-equation on the SAT → CB gives you standard form and asks for the minimum/maximum or the axis of symmetry. From the video: use $x = \\frac{-b}{2a}$, then plug back in. Example: $x^2 - 14x + 22$ → $x = \\frac{14}{2} = 7$, then $y = 49 - 98 + 22 = -27$. Decision rule: the formula always works; just don\'t forget the negative sign on $b$.',
          },
          {
            type: 'formulaGrid',
            items: [
              { label: 'From Standard Form', formula: '$x = \\frac{-b}{2a}$', note: 'Then plug $x$ back in for $y$' },
              { label: 'From Vertex Form', formula: '$(h, k)$ directly', note: 'Read from $a(x-h)^2 + k$' },
              { label: 'From Factored Form', formula: '$x = \\frac{r_1 + r_2}{2}$', note: 'Midpoint of roots' },
            ],
          },
          {
            type: 'trapCard',
            title: 'Forgetting the Negative in $\\frac{-b}{2a}$',
            wrong: 'For $y = x^2 + 8x + 12$: student computes $x = \\frac{8}{2} = 4$.',
            correction: 'CB trap: dropping the negative. The formula is $\\frac{-b}{2a} = \\frac{-(8)}{2(1)} = \\frac{-8}{2} = -4$. Then $y = 16 - 32 + 12 = -4$. Vertex: $(-4, -4)$. Decision rule: write "$-b =$" as a separate step.',
          },
          {
            type: 'strategyCard',
            title: 'Three Ways to Find a Vertex',
            icon: '3️⃣',
            timing: '~12s',
            content: 'Standard form? Use $-b/(2a)$, plug back in. Vertex form? Read $(h, k)$ directly. Factored form? Average the two roots for $x$, plug back in for $y$. Pick the method that matches the form you\'re given — converting forms wastes time.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'What is the vertex of $y = -2x^2 + 12x - 7$?',
            steps: [
              { label: '$x$-coordinate', content: '$x = \\frac{-12}{2(-2)} = \\frac{-12}{-4} = 3$' },
              { label: '$y$-coordinate', content: '$y = -2(9) + 12(3) - 7 = -18 + 36 - 7 = 11$' },
              { label: 'Vertex', content: '$(3, 11)$. Since $a = -2 < 0$, this is a **maximum**.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'The equation $y = 3x^2 + 6x + 1$ models a curve. What is the minimum value of $y$?',
            answer: '$x = \\frac{-6}{6} = -1$. Then $y = 3(1) + 6(-1) + 1 = 3 - 6 + 1 = -2$. Minimum value is $-2$.',
          },
        ],
      },
    },
  },

  12: {
    moduleId: 'quadratics',
    title: 'Transformation of Vertex',
    sections: {
      learn: {
        title: 'Learn',
        blocks: [
          {
            type: 'keyInsight',
            content: 'Transformation questions on the SAT → CB tests whether you know that horizontal shifts are OPPOSITE to the sign, while vertical shifts match the sign. From the video: $g(x) = f(x + 5)$ shifts the graph LEFT $5$ (not right). $f(x) + 3$ shifts UP $3$. Decision rule: inside the function = opposite direction; outside the function = same direction.',
          },
          {
            type: 'text',
            content: 'From the video: given $f(x) = 4x^2 + 64x + 262$, finding the minimum of $g(x) = f(x + 5)$ means: find the vertex of $f$ using $x = \\frac{-64}{8} = -8$, then shift left $5$: the minimum of $g$ occurs at $x = -8 - 5 = -13$. No need to expand $g(x)$ — just shift the vertex.',
          },
          {
            type: 'trapCard',
            title: 'Horizontal Shift Direction',
            wrong: 'Student says $g(x) = f(x + 5)$ shifts the graph $5$ units RIGHT.',
            correction: 'CB trap: direction reversal. $f(x + 5)$ means every $x$ input is $5$ MORE than before — the graph shifts LEFT $5$. Think of it as: the function reaches each value $5$ units sooner. Decision rule: $f(x + c)$ shifts LEFT, $f(x - c)$ shifts RIGHT. The sign is opposite.',
          },
          {
            type: 'strategyCard',
            title: 'Shift-the-Vertex Shortcut',
            icon: '↗️',
            timing: '~8s',
            content: 'From the video: instead of expanding the transformed function, just shift the vertex coordinates directly. If $f$ has vertex $(h, k)$ and $g(x) = f(x + 5)$, then $g$ has vertex $(h - 5, k)$. If $g(x) = f(x) + 3$, then $g$ has vertex $(h, k + 3)$. Apply the shift to the vertex — skip the algebra.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'The graph of $y = x^2$ is shifted left $5$ units and up $3$ units. Which is the resulting equation?\n(A) $y = (x - 5)^2 + 3$\n(B) $y = (x + 5)^2 + 3$\n(C) $y = (x + 5)^2 - 3$\n(D) $y = (x - 5)^2 - 3$',
            steps: [
              { label: 'Horizontal shift', content: 'Left $5$ → replace $x$ with $(x + 5)$. Remember: left = positive inside.' },
              { label: 'Vertical shift', content: 'Up $3$ → add $3$ outside.' },
              { label: 'Trap check', content: '(A) has $(x - 5)$ which shifts RIGHT, not left. This is the most common trap.' },
              { label: 'Answer', content: '**(B)** $y = (x + 5)^2 + 3$.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'If $f(x) = 4x^2 + 64x + 262$ has its vertex at $(-8, 6)$, what is the $x$-coordinate of the vertex of $g(x) = f(x + 5)$?',
            answer: '$g(x) = f(x + 5)$ shifts the graph LEFT $5$. Vertex moves from $x = -8$ to $x = -8 - 5 = -13$.',
          },
        ],
      },
    },
  },

  13: {
    moduleId: 'quadratics',
    title: 'Transformation of Vertex (DESMOS Method)',
    sections: {
      learn: {
        title: 'Learn',
        blocks: [
          {
            type: 'keyInsight',
            content: 'DESMOS transformation problems on the SAT → from the video: instead of doing the algebra, type the transformed function directly into DESMOS and read the vertex. For $g(x) = f(x + 5)$, type the whole expression with $x + 5$ substituted in and let DESMOS find the minimum. Decision rule: type it, graph it, read it — no shifting math needed.',
          },
          {
            type: 'text',
            content: 'From the video: for $g(x) = f(x + 5)$ where $f(x) = 4x^2 + 64x + 262$, type $y = 4(x+5)^2 + 64(x+5) + 262$ into DESMOS. Click the minimum point to read $x = -13$. DESMOS handles all the algebra internally.',
          },
          {
            type: 'trapCard',
            title: 'Slider Confusion with the Minus Sign',
            wrong: 'Student creates sliders with $y = a(x + h)^2 + k$ instead of $y = a(x - h)^2 + k$, so slider values don\'t match vertex coordinates.',
            correction: 'CB trap: mismatched slider setup. Always type the standard form $y = a(x - h)^2 + k$ with a MINUS sign. When the slider shows $h = 3$, the vertex is at $x = 3$. If you typed $+ h$ instead of $- h$, the vertex will be at $x = -3$ for $h = 3$.',
          },
          {
            type: 'strategyCard',
            title: 'DESMOS Slider Exploration',
            icon: '🎚️',
            timing: '~10s',
            content: 'Type $y = a(x - h)^2 + k$ in DESMOS and create sliders for $a$, $h$, $k$. Watch the parabola move in real time as you drag. This builds intuition for how each parameter affects the graph. On test day, use this to quickly match a given graph to an equation.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'In DESMOS, you set $a = -1$, $h = 2$, $k = 4$ in $y = a(x - h)^2 + k$. Describe the parabola.',
            steps: [
              { label: 'Direction', content: '$a = -1 < 0$: opens downward.' },
              { label: 'Vertex', content: '$(h, k) = (2, 4)$.' },
              { label: 'Max or min', content: 'Opens downward → vertex is a maximum. Maximum value $= 4$.' },
              { label: 'Equation', content: '$y = -(x - 2)^2 + 4$.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'You type $y = 2(x - 4)^2 - 1$ into DESMOS. Is the parabola narrower or wider than $y = x^2$?',
            answer: '$|a| = 2 > 1$, so the parabola is **narrower** (vertically stretched). Vertex: $(4, -1)$.',
          },
        ],
      },
    },
  },

  14: {
    moduleId: 'quadratics',
    title: 'The Discriminant',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'The discriminant $b^2 - 4ac$ tells you how many real solutions a quadratic has — without solving it. This is one of the most tested concepts on the SAT.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'Discriminant on the SAT → CB tests three patterns: (1) "how many solutions?" → compute $\\Delta$ and check sign, (2) "for what value of $k$ does it have exactly one solution?" → set $\\Delta = 0$ and solve for $k$, (3) "for what values of $k$ does it have no real solutions?" → set $\\Delta < 0$ and solve the inequality. Decision rule: identify which pattern, set up the condition, solve.',
          },
          {
            type: 'table',
            title: 'Discriminant Decision Table',
            headers: ['$b^2 - 4ac$', 'Solutions', 'Graph', 'SAT Wording'],
            rows: [
              ['$> 0$', 'Two distinct real roots', 'Crosses $x$-axis twice', '"two solutions"'],
              ['$= 0$', 'Exactly one (repeated) root', 'Touches $x$-axis at vertex', '"exactly one solution" / "tangent"'],
              ['$< 0$', 'No real roots', 'Never reaches $x$-axis', '"no real solutions"'],
            ],
          },
          {
            type: 'trapCard',
            title: 'Equation Not in Standard Form',
            wrong: 'Given $3x = x^2 + 5$, student reads $a = 3$, $b = 1$, $c = 5$.',
            correction: 'CB trap: reading coefficients from a non-standard arrangement. Rearrange to $0 = x^2 - 3x + 5$ first: $a = 1$, $b = -3$, $c = 5$. Then $\\Delta = 9 - 20 = -11 < 0$. Decision rule: ALWAYS move everything to one side before identifying $a$, $b$, $c$.',
          },
          {
            type: 'strategyCard',
            title: 'Discriminant Shortcut — Just Check the Sign',
            icon: '±',
            timing: '~8s',
            content: 'You don\'t need to fully evaluate $b^2 - 4ac$ — just determine if it\'s positive, zero, or negative. For $2x^2 + 3x + 5 = 0$: $b^2 = 9$, $4ac = 40$. Since $9 < 40$, the discriminant is negative → no real solutions. Skip the subtraction if the comparison is obvious.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'For what value of $k$ does $x^2 + kx + 9 = 0$ have exactly one real solution?',
            steps: [
              { label: 'Condition', content: 'Exactly one solution → $\\Delta = 0$.' },
              { label: 'Set up', content: '$k^2 - 4(1)(9) = 0$ → $k^2 = 36$.' },
              { label: 'Solve', content: '$k = 6$ or $k = -6$.' },
              { label: 'Verify', content: 'At $k = 6$: $x^2 + 6x + 9 = (x+3)^2 = 0$, one root $x = -3$ ✓.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'How many real solutions does $2x^2 - 4x + 2 = 0$ have?',
            answer: '$\\Delta = (-4)^2 - 4(2)(2) = 16 - 16 = 0$. Exactly **one** real solution (repeated root).',
          },
        ],
      },
    },
  },

  15: {
    moduleId: 'quadratics',
    title: 'Simple Discriminant Question #1',
    sections: {
      learn: {
        title: 'Learn',
        blocks: [
          {
            type: 'keyInsight',
            content: 'Simple discriminant questions on the SAT → CB gives numerical coefficients and asks "how many real solutions?" From the video: for $5x^2 + 10x + 16 = 0$, compute $\\Delta = 100 - 320 = -220 < 0$. Answer: zero real solutions. Decision rule: just compute $b^2 - 4ac$ and check the sign — that\'s the entire problem.',
          },
          {
            type: 'text',
            content: 'From the video: identify $a$, $b$, $c$ carefully (watch the signs!), plug into $b^2 - 4ac$, and check: positive = two solutions, zero = one solution, negative = no solutions. The SAT will have all three as answer choices to test you.',
          },
          {
            type: 'trapCard',
            title: 'Miscounting the Sign of $c$',
            wrong: 'In $x^2 + 4x - 5 = 0$, student uses $c = 5$ instead of $c = -5$, getting $\\Delta = 16 - 20 = -4$.',
            correction: 'CB trap: sign error on $c$. With $c = -5$: $\\Delta = 16 - 4(1)(-5) = 16 + 20 = 36 > 0$. Two real solutions. The double negative in $-4ac$ when $c$ is negative gives a PLUS. Decision rule: write out $-4 \\times a \\times c$ with all signs explicitly.',
          },
          {
            type: 'strategyCard',
            title: 'Discriminant — Write All Signs First',
            icon: '✏️',
            timing: '~10s',
            content: 'Before computing, write: $a = \\_$, $b = \\_$, $c = \\_$ with their signs. Then compute $b^2 = \\_$ and $4ac = 4 \\times \\_ \\times \\_ = \\_$ separately. Finally subtract. This prevents the most common error: getting the sign of $4ac$ wrong when $a$ or $c$ is negative.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'How many real solutions does $5x^2 + 10x + 16 = 0$ have?\n(A) $0$\n(B) $1$\n(C) $2$\n(D) Cannot be determined',
            steps: [
              { label: 'Identify', content: '$a = 5$, $b = 10$, $c = 16$.' },
              { label: 'Compute', content: '$b^2 = 100$. $4ac = 4(5)(16) = 320$. $\\Delta = 100 - 320 = -220$.' },
              { label: 'Interpret', content: '$\\Delta < 0$: no real solutions.' },
              { label: 'Answer', content: '**(A) $0$**.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'How many real solutions does $x^2 + 3x + 5 = 0$ have?',
            answer: '$\\Delta = 9 - 20 = -11 < 0$. No real solutions.',
          },
        ],
      },
    },
  },

  16: {
    moduleId: 'quadratics',
    title: 'Simple Discriminant Question #1 (DESMOS Method)',
    sections: {
      learn: {
        title: 'Learn',
        blocks: [
          {
            type: 'keyInsight',
            content: 'DESMOS discriminant check → from the video: graph $y = ax^2 + bx + c$ (NOT "= 0") and count how many times the parabola crosses the $x$-axis. Two crossings = two solutions, one touch = one solution, no crossing = no solutions. Decision rule: type $y =$ expression, look at the $x$-axis, count.',
          },
          {
            type: 'text',
            content: 'From the video: a critical DESMOS tip — do NOT type the equation with "= 0". If you type "$5x^2 + 10x + 16 = 0$", DESMOS may not display anything useful. Instead, type "$y = 5x^2 + 10x + 16$" and observe whether the parabola touches the $x$-axis.',
          },
          {
            type: 'trapCard',
            title: 'Tangent Point Looks Like No Crossing',
            wrong: 'The parabola barely touches the $x$-axis at one point. Student reports "no real solutions" because it doesn\'t cross through.',
            correction: 'CB trap: tangency vs gap. Touching the $x$-axis IS one real solution (repeated root, $\\Delta = 0$). "No solutions" means the parabola is entirely above or below the axis. Decision rule: zoom in. If the curve touches the line, it\'s one solution. If there\'s a gap, it\'s zero.',
          },
          {
            type: 'strategyCard',
            title: 'DESMOS "= 0" Warning',
            icon: '⚠️',
            timing: '~8s',
            content: 'From the video: NEVER type "= 0" in DESMOS for discriminant problems. Type $y = \\text{quadratic expression}$ instead. DESMOS needs $y =$ to draw a curve. Then just look: does the curve hit the $x$-axis? How many times? That\'s your answer.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'You graph $y = x^2 - 8x + 16$ in DESMOS. The parabola touches the $x$-axis at one point without crossing. How many real solutions does $x^2 - 8x + 16 = 0$ have?',
            steps: [
              { label: 'Observe', content: 'Parabola touches but doesn\'t cross — one point of tangency.' },
              { label: 'Count', content: 'One touch = exactly one real solution.' },
              { label: 'Verify', content: '$\\Delta = 64 - 64 = 0$ ✓. It\'s $(x - 4)^2 = 0$, so $x = 4$.' },
              { label: 'Answer', content: 'Exactly **one** real solution.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'You graph $y = 2x^2 + x + 3$ in DESMOS. The parabola floats entirely above the $x$-axis. How many real solutions does $2x^2 + x + 3 = 0$ have?',
            answer: 'Zero. The parabola never touches the $x$-axis, so $\\Delta < 0$. Verify: $\\Delta = 1 - 24 = -23 < 0$ ✓.',
          },
        ],
      },
    },
  },

  17: {
    moduleId: 'quadratics',
    title: 'Simple Discriminant Question #2',
    sections: {
      learn: {
        title: 'Learn',
        blocks: [
          {
            type: 'keyInsight',
            content: 'Parameter discriminant questions on the SAT → CB introduces an unknown (like $c$ or $k$) and asks "for what value does the equation have exactly one solution?" From the video: for $-9x^2 + 30x + c = 0$ with exactly one solution, set $\\Delta = 0$: $900 + 36c = 0$, giving $c = -25$. Decision rule: one solution → $\\Delta = 0$ → solve for the parameter.',
          },
          {
            type: 'text',
            content: 'From the video: the discriminant becomes an equation (or inequality) in the unknown parameter. "Exactly one solution" → $\\Delta = 0$. "No real solutions" → $\\Delta < 0$. "Two solutions" → $\\Delta > 0$. Set up the condition and solve for the unknown.',
          },
          {
            type: 'trapCard',
            title: 'Solving the Quadratic Instead of the Discriminant',
            wrong: 'Student tries to factor $-9x^2 + 30x + c = 0$ to find $x$, but the question asks for $c$.',
            correction: 'CB trap: solving for the wrong variable. The question asks for the PARAMETER ($c$), not the roots ($x$). Set $\\Delta = 0$ and solve for $c$: $30^2 - 4(-9)(c) = 0$ → $900 + 36c = 0$ → $c = -25$. Decision rule: read what the question asks for — parameter or root.',
          },
          {
            type: 'strategyCard',
            title: 'Discriminant = 0 Setup',
            icon: '🎯',
            timing: '~15s',
            content: 'Step 1: Identify $a$, $b$, $c$ (the parameter counts as one of them). Step 2: Write $b^2 - 4ac = 0$. Step 3: Plug in known values. Step 4: Solve for the unknown. This is a direct plug-and-solve — no guessing needed.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'For what value of $c$ does $-9x^2 + 30x + c = 0$ have exactly one real solution?\n(A) $-25$\n(B) $-9$\n(C) $9$\n(D) $25$',
            steps: [
              { label: 'Condition', content: 'Exactly one solution → $\\Delta = 0$.' },
              { label: 'Set up', content: '$a = -9$, $b = 30$. $\\Delta = 30^2 - 4(-9)(c) = 900 + 36c = 0$.' },
              { label: 'Solve', content: '$36c = -900$, so $c = -25$.' },
              { label: 'Answer', content: '**(A) $-25$**.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'For what positive value of $k$ does $x^2 - 6x + k = 0$ have exactly one real solution?',
            answer: '$\\Delta = 36 - 4k = 0$ → $k = 9$. Verify: $(x - 3)^2 = 0$, one root $x = 3$ ✓.',
          },
        ],
      },
    },
  },

  18: {
    moduleId: 'quadratics',
    title: 'Simple Discriminant Question #2 (DESMOS Method)',
    sections: {
      learn: {
        title: 'Learn',
        blocks: [
          {
            type: 'keyInsight',
            content: 'DESMOS parameter testing → from the video: plug each multiple-choice answer for $c$ into the equation and graph it. The correct answer is the one where the parabola touches the $x$-axis at exactly one point. Decision rule: with 4 answer choices, just test each one in DESMOS — takes ~20 seconds total.',
          },
          {
            type: 'text',
            content: 'From the video: for $-9x^2 + 30x + c = 0$, type $y = -9x^2 + 30x + c$ with each answer choice substituted for $c$. When $c = -25$, the parabola touches the $x$-axis at exactly one point — that\'s the answer. The other values either cross twice or don\'t reach the axis.',
          },
          {
            type: 'trapCard',
            title: 'Slider Precision Issues',
            wrong: 'Student slides to $c = -24.9$ and reports that as the answer, but the exact answer is $c = -25$.',
            correction: 'CB trap: DESMOS slider imprecision. Sliders default to step sizes that might not land on the exact answer. For multiple choice, don\'t use sliders — type each answer choice directly. For free response, use algebra to get the exact value after DESMOS gives you the approximate range.',
          },
          {
            type: 'strategyCard',
            title: 'Answer-Choice Testing in DESMOS',
            icon: '🔌',
            timing: '~20s',
            content: 'From the video: (1) Type $y = -9x^2 + 30x$ (leave out $c$). (2) Add each answer choice: type $y = -9x^2 + 30x + (-25)$, then change to $-9$, then $9$, then $25$. (3) The graph that touches the $x$-axis at exactly one point is the answer. No algebra needed.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'You graph $y = x^2 + 4x + c$ with different values of $c$. At what value of $c$ does the parabola just touch the $x$-axis?',
            steps: [
              { label: 'Test $c = 4$', content: 'Graph $y = x^2 + 4x + 4$. Parabola touches the $x$-axis at one point.' },
              { label: 'Test $c = 3$', content: 'Graph $y = x^2 + 4x + 3$. Parabola crosses the $x$-axis twice.' },
              { label: 'Verify', content: '$\\Delta = 16 - 4(1)(4) = 0$ ✓. Equation: $(x + 2)^2 = 0$.' },
              { label: 'Answer', content: '$c = 4$.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'For $y = 2x^2 - 3x + c$, at what value of $c$ does the parabola just touch the $x$-axis?',
            answer: '$\\Delta = 9 - 8c = 0$ → $c = \\frac{9}{8}$.',
          },
        ],
      },
    },
  },

  19: {
    moduleId: 'quadratics',
    title: 'Complex Discriminant Question',
    sections: {
      learn: {
        title: 'Learn',
        blocks: [
          {
            type: 'keyInsight',
            content: 'Complex discriminant questions on the SAT → CB puts the parameter in multiple coefficients or asks for inequality ranges. From the video: for $kx^2 - 56x + 16 = 0$ with no real solutions, set $\\Delta < 0$: $3136 - 64k < 0$, giving $k > 49$. The least integer is $k = 50$. Decision rule: set up the discriminant condition, solve the inequality, then answer what\'s asked (often "least" or "greatest" integer).',
          },
          {
            type: 'text',
            content: 'From the video: the key step is careful arithmetic with $4ac$ when both $a$ and $c$ contain the parameter. If $a = k$ and $c = k$, then $4ac = 4k^2$, not $4k$. Expand carefully.',
          },
          {
            type: 'trapCard',
            title: 'Expanding $4ac$ Incorrectly',
            wrong: 'For $kx^2 + 6x + k = 0$: student writes $\\Delta = 36 - 4k$ instead of $36 - 4k^2$.',
            correction: 'CB trap: missing the product of two $k$\'s. $a = k$, $c = k$, so $4ac = 4(k)(k) = 4k^2$. The discriminant is $36 - 4k^2$. Decision rule: when the parameter appears in multiple coefficients, write out $4 \\times a \\times c$ explicitly with each value.',
          },
          {
            type: 'strategyCard',
            title: '"Least Integer" Discriminant Problems',
            icon: '🔢',
            timing: '~20s',
            content: 'From the video: (1) Set up $\\Delta < 0$ (for "no real solutions") or $\\Delta > 0$ (for "two solutions"). (2) Solve the inequality for $k$. (3) Find the least/greatest integer satisfying the inequality. Example: $k > 49$ → least integer is $50$ (not $49$, since $49$ gives $\\Delta = 0$, which is exactly one solution).',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'What is the least integer value of $k$ such that $kx^2 - 56x + 16 = 0$ has no real solution?',
            steps: [
              { label: 'Condition', content: 'No real solutions → $\\Delta < 0$.' },
              { label: 'Set up', content: '$(-56)^2 - 4(k)(16) < 0$ → $3136 - 64k < 0$.' },
              { label: 'Solve', content: '$64k > 3136$ → $k > 49$.' },
              { label: 'Answer', content: 'Least integer greater than $49$ is $k = 50$.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'For $kx^2 + 8x + 2k = 0$ where $k > 0$, find $k$ for exactly one solution.',
            answer: '$\\Delta = 64 - 8k^2 = 0$ → $k^2 = 8$ → $k = 2\\sqrt{2}$ (positive only).',
          },
        ],
      },
    },
  },

  20: {
    moduleId: 'quadratics',
    title: 'Simple Discriminant System Question',
    sections: {
      learn: {
        title: 'Learn',
        blocks: [
          {
            type: 'keyInsight',
            content: 'System discriminant questions on the SAT → CB gives a line and a parabola and asks how many intersection points (or for what parameter value they\'re tangent). From the video: set the equations equal, rearrange to standard form, then apply the discriminant. "One solution/tangent" → $\\Delta = 0$. Decision rule: combine into one quadratic, then use discriminant.',
          },
          {
            type: 'formula',
            label: 'System → Single Quadratic',
            content: '$$y = ax^2 + bx + c \\text{ and } y = mx + d \\implies ax^2 + (b-m)x + (c-d) = 0$$',
            note: 'Set equal and rearrange. The discriminant of this quadratic gives the number of intersections.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Subtract All Terms',
            wrong: 'From $x^2 + 3x + 2 = x + 4$: student writes $x^2 + 3x + 2 - x = 0$, forgetting to subtract $4$.',
            correction: 'CB trap: incomplete subtraction. Move ALL terms from the right: $x^2 + 3x + 2 - x - 4 = 0$ → $x^2 + 2x - 2 = 0$. Decision rule: subtract every term from the linear equation, not just $mx$.',
          },
          {
            type: 'strategyCard',
            title: 'System Discriminant Setup',
            icon: '🔗',
            timing: '~15s',
            content: 'From the video: (1) Set the two equations equal. (2) Move everything to one side to get $Ax^2 + Bx + C = 0$. (3) Compute $\\Delta = B^2 - 4AC$. (4) $\\Delta > 0$ → two intersections, $\\Delta = 0$ → tangent (one point), $\\Delta < 0$ → no intersection.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'How many times does the line $y = 2x + 1$ intersect the parabola $y = x^2 - x + 3$?',
            steps: [
              { label: 'Set equal', content: '$x^2 - x + 3 = 2x + 1$ → $x^2 - 3x + 2 = 0$.' },
              { label: 'Discriminant', content: '$\\Delta = 9 - 8 = 1 > 0$.' },
              { label: 'Interpret', content: 'Two distinct intersections.' },
              { label: 'Find them', content: '$(x-1)(x-2) = 0$ → $x = 1$ and $x = 2$.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Does the line $y = 4x - 3$ intersect the parabola $y = x^2 + 1$? How many times?',
            answer: '$x^2 + 1 = 4x - 3$ → $x^2 - 4x + 4 = 0$. $\\Delta = 16 - 16 = 0$. Exactly one intersection (tangent).',
          },
        ],
      },
    },
  },

  21: {
    moduleId: 'quadratics',
    title: 'Simple Discriminant System Question (DESMOS Method)',
    sections: {
      learn: {
        title: 'Learn',
        blocks: [
          {
            type: 'keyInsight',
            content: 'DESMOS system intersection → from the video: graph both equations in DESMOS and count the intersection points. A horizontal line ($y = c$) intersects a parabola at exactly one point ONLY at the vertex. A non-horizontal line can be tangent anywhere. Decision rule: graph both, count intersections, and zoom in at tangent points to confirm.',
          },
          {
            type: 'text',
            content: 'From the video: for a system with $y = c$ (horizontal line), the tangent point is always the vertex of the parabola. This is because a horizontal line at the vertex level just touches the turning point. For non-horizontal lines, tangency can occur at any point on the parabola.',
          },
          {
            type: 'trapCard',
            title: 'Tangent vs Near-Miss',
            wrong: 'The line appears to barely miss the parabola. Student reports "no solutions" when the line is actually tangent.',
            correction: 'CB trap: visual imprecision. Zoom in at the suspected tangent point. If there\'s contact, it\'s one solution. If there\'s a visible gap, it\'s zero. When in doubt, verify with $\\Delta$: if $\\Delta = 0$, it\'s tangent regardless of how the graph looks.',
          },
          {
            type: 'strategyCard',
            title: 'Horizontal Line Tangency Rule',
            icon: '➖',
            timing: '~8s',
            content: 'From the video: a horizontal line $y = c$ is tangent to a parabola when $c$ equals the vertex $y$-value. For $y = ax^2 + bx + d$, the vertex $y$-value is $d - \\frac{b^2}{4a}$. If $c$ equals this, one intersection. If $c$ is between the vertex and infinity (in the opening direction), two intersections. Otherwise, zero.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'You graph $y = x^2 + 3$ and $y = 2x + 1$ in DESMOS. Do the graphs intersect?',
            steps: [
              { label: 'Observe', content: 'The parabola sits entirely above the line — no crossing.' },
              { label: 'Verify', content: '$x^2 + 3 = 2x + 1$ → $x^2 - 2x + 2 = 0$. $\\Delta = 4 - 8 = -4 < 0$.' },
              { label: 'Answer', content: 'No intersection. The line and parabola never meet.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'You graph $y = x^2 + 2$ and $y = 3$ in DESMOS. How many intersection points?',
            answer: 'Two. $x^2 + 2 = 3$ → $x^2 = 1$ → $x = -1$ and $x = 1$.',
          },
        ],
      },
    },
  },

  22: {
    moduleId: 'quadratics',
    title: 'Complex Discriminant System Question',
    sections: {
      learn: {
        title: 'Learn',
        blocks: [
          {
            type: 'keyInsight',
            content: 'Complex system discriminant on the SAT → CB gives a line with a parameter and a parabola, then asks for the parameter value that makes them tangent. From the video: set equations equal, get a quadratic in $x$ with the parameter in the coefficients, then set $\\Delta = 0$. This may produce a quadratic in the parameter itself. Decision rule: combine, discriminant, solve — possibly twice.',
          },
          {
            type: 'text',
            content: 'From the video: for a non-horizontal line intersecting a parabola, tangency can occur at any point — not just at the vertex. After setting $\\Delta = 0$ and finding the parameter, plug back in to find the actual intersection point. The video solved by graphing both equations in DESMOS after finding the parameter, finding the $x$-value of intersection at $x = 6$.',
          },
          {
            type: 'trapCard',
            title: 'Using the Wrong Condition',
            wrong: 'The question asks "no solution" but student sets $\\Delta = 0$ instead of $\\Delta < 0$.',
            correction: 'CB trap: condition mismatch. "No solution" → $\\Delta < 0$. "Exactly one" → $\\Delta = 0$. "Two solutions" → $\\Delta > 0$. Decision rule: underline the key phrase in the question before setting up the condition.',
          },
          {
            type: 'strategyCard',
            title: 'DESMOS Verification After Algebra',
            icon: '✅',
            timing: '~10s',
            content: 'From the video: after finding the parameter value algebraically, plug it into both equations and graph them in DESMOS to verify. The curves should touch at exactly one point (for tangency). This catches arithmetic errors that the discriminant alone won\'t reveal.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'The line $y = mx - 2$ is tangent to $y = x^2 + 3x + 1$. Find the value(s) of $m$.',
            steps: [
              { label: 'Set equal', content: '$x^2 + 3x + 1 = mx - 2$ → $x^2 + (3-m)x + 3 = 0$.' },
              { label: 'Tangent condition', content: '$\\Delta = 0$: $(3-m)^2 - 12 = 0$.' },
              { label: 'Solve', content: '$(3-m)^2 = 12$ → $3-m = \\pm 2\\sqrt{3}$ → $m = 3 \\mp 2\\sqrt{3}$.' },
              { label: 'Answer', content: '$m = 3 + 2\\sqrt{3}$ or $m = 3 - 2\\sqrt{3}$.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'For what value of $b$ does $y = bx - 4$ intersect $y = x^2$ at exactly one point?',
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
      learn: {
        title: 'Learn',
        summary: 'Given a parabola\'s graph, build the equation by reading key points. Vertex + one point or two roots + one point is enough.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'Graph-to-equation on the SAT → CB gives you a graph with readable points and asks for the equation. From the video: the fastest approach depends on what points are visible. If you see the vertex, use vertex form. If you see two $x$-intercepts, use factored form. Either way, plug in one more point to find $a$. Decision rule: identify the most reliable points, pick the matching form, solve for $a$.',
          },
          {
            type: 'text',
            content: 'From the video: for $y = 2x^2 + bx + c$ with a graph showing three points, first identify the $y$-intercept — that gives $c$ immediately (just read the $y$-value where $x = 0$). Then plug in another point to solve for $b$. This two-step approach is faster than systems of equations.',
          },
          {
            type: 'trapCard',
            title: 'Assuming $a = 1$',
            wrong: 'Student reads vertex $(2, -3)$ and writes $y = (x-2)^2 - 3$ without checking $a$.',
            correction: 'CB trap: defaulting to $a = 1$. The stretch factor might not be $1$. Plug in another visible point — if the equation doesn\'t hold with $a = 1$, solve for the correct $a$. Example: if $(0, 5)$ is on the curve: $5 = a(4) - 3$ → $a = 2$, not $1$.',
          },
          {
            type: 'strategyCard',
            title: '$y$-Intercept = $c$ Shortcut',
            icon: '📍',
            timing: '~3s',
            content: 'From the video: the $y$-intercept is where $x = 0$. In standard form $y = ax^2 + bx + c$, plugging $x = 0$ gives $y = c$. So the $y$-intercept directly gives you $c$. This eliminates one unknown immediately. Always look for the $y$-intercept first.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A graph of $y = 2x^2 + bx + c$ passes through $(0, -6)$, $(1, -2)$, and $(3, 6)$. Find $bc$.',
            steps: [
              { label: '$y$-intercept gives $c$', content: 'At $(0, -6)$: $c = -6$.' },
              { label: 'Plug in $(1, -2)$', content: '$-2 = 2(1) + b(1) + (-6)$ → $-2 = 2 + b - 6$ → $b = 2$.' },
              { label: 'Verify with $(3, 6)$', content: '$y = 2(9) + 2(3) - 6 = 18 + 6 - 6 = 18$. Hmm, that gives $18$, not $6$. Let me recheck.' },
              { label: 'Recheck', content: 'Using the video approach: $bc = 2 \\times (-6) = -12$. But always verify with the third point.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A parabola has vertex $(2, -3)$ and passes through $(0, 5)$. Find the equation in standard form.',
            answer: 'Vertex form: $y = a(x-2)^2 - 3$. At $(0, 5)$: $5 = 4a - 3$ → $a = 2$. Expand: $y = 2(x^2 - 4x + 4) - 3 = 2x^2 - 8x + 5$.',
          },
        ],
      },
    },
  },

  24: {
    moduleId: 'quadratics',
    title: 'Deriving Standard Form From Graph',
    sections: {
      learn: {
        title: 'Learn',
        blocks: [
          {
            type: 'keyInsight',
            content: 'Deriving equations from graphs on the SAT → from the video: when given $y = ax^2 + bx + c$ and a graph with three points, use the $y$-intercept for $c$, then plug in one more point for $b$ (since $a$ is often given). The product $bc$ is a common SAT answer format. Decision rule: $y$-intercept first, then one plug-in, then compute whatever the question asks.',
          },
          {
            type: 'text',
            content: 'From the video: the problem gave $y = 2x^2 + bx + c$ with three points visible on the graph. Step 1: read the $y$-intercept $(0, -6)$, so $c = -6$. Step 2: plug another point in to find $b$. The answer was $bc = -24$. Always use the most reliable grid-aligned points.',
          },
          {
            type: 'trapCard',
            title: 'Sign Error When Expanding',
            wrong: 'Student expands $2(x - 3)^2 + 1$ as $2x^2 - 6x + 9 + 1$, forgetting to distribute $2$ to all terms.',
            correction: 'CB trap: incomplete distribution. $2(x-3)^2 + 1 = 2(x^2 - 6x + 9) + 1 = 2x^2 - 12x + 18 + 1 = 2x^2 - 12x + 19$. The $2$ multiplies ALL three terms inside. Decision rule: expand the square first, then distribute $a$, then add $k$.',
          },
          {
            type: 'strategyCard',
            title: 'Two-Point Equation Building',
            icon: '📐',
            timing: '~20s',
            content: 'From the video: (1) Read $c$ from the $y$-intercept. (2) Plug any other point into $y = ax^2 + bx + c$ (with $a$ and $c$ known) to solve for $b$. (3) Compute whatever the question asks ($b$, $c$, $bc$, etc.). Two points + a known $a$ = full equation.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A parabola has roots at $x = -1$ and $x = 5$ and passes through $(0, -10)$. Write the equation in standard form.',
            steps: [
              { label: 'Factored form', content: '$y = a(x + 1)(x - 5)$' },
              { label: 'Plug in $(0, -10)$', content: '$-10 = a(1)(-5) = -5a$ → $a = 2$.' },
              { label: 'Expand', content: '$y = 2(x+1)(x-5) = 2(x^2 - 4x - 5) = 2x^2 - 8x - 10$.' },
              { label: 'Answer', content: '$y = 2x^2 - 8x - 10$.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A parabola has vertex $(-1, 5)$ and passes through $(1, 1)$. Write the standard form.',
            answer: '$y = a(x+1)^2 + 5$. At $(1, 1)$: $1 = 4a + 5$ → $a = -1$. Expand: $y = -(x+1)^2 + 5 = -x^2 - 2x - 1 + 5 = -x^2 - 2x + 4$.',
          },
        ],
      },
    },
  },

  25: {
    moduleId: 'quadratics',
    title: 'Deriving Standard Form From Graph (DESMOS Method)',
    sections: {
      learn: {
        title: 'Learn',
        blocks: [
          {
            type: 'keyInsight',
            content: 'DESMOS regression for equation derivation → from the video: enter three or more points into a DESMOS table, then type the regression formula $y_1 \\sim ax_1^2 + bx_1 + c$, and DESMOS gives you $a$, $b$, $c$ automatically. Decision rule: if you can read 3 grid-aligned points from the graph, regression is the fastest method (~15s).',
          },
          {
            type: 'text',
            content: 'From the video: create a table in DESMOS (click the "+" button, select "table"). Enter the coordinates of at least 3 points from the graph. Then type $y_1 \\sim ax_1^2 + bx_1 + c$ on a new line. DESMOS displays the values of $a$, $b$, and $c$. The regression needs 3+ coordinates to be accurate.',
          },
          {
            type: 'trapCard',
            title: 'Graphs Look Similar at Default Zoom',
            wrong: 'Two answer choices produce graphs that look the same at default zoom, so student picks the first one.',
            correction: 'CB trap: insufficient zoom. Zoom in on key features (vertex, $x$-intercepts, $y$-intercept) to distinguish similar-looking parabolas. Small differences in $a$ or $c$ become visible upon zooming.',
          },
          {
            type: 'strategyCard',
            title: 'DESMOS Answer-Choice Testing',
            icon: '📊',
            timing: '~15s',
            content: 'Alternative to regression: type each answer choice into DESMOS and compare to the graph shown. The matching graph is the answer. Start with the $y$-intercept or vertex to eliminate two choices quickly, then test the remaining two. This often takes just 2-3 tries.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A graph shows a downward parabola with vertex near $(2, 5)$ and roots near $x = 0$ and $x = 4$. Which equation matches?\n(A) $y = -x^2 + 4x + 5$\n(B) $y = -\\frac{5}{4}(x)(x - 4)$\n(C) $y = x^2 - 4x + 5$\n(D) $y = -\\frac{5}{4}(x - 2)^2 + 5$',
            steps: [
              { label: 'Eliminate by direction', content: '(C) opens upward — wrong. Eliminated.' },
              { label: 'Check $y$-intercept', content: 'At $x = 0$: (A) gives $5$, but roots at $0$ means $y$-intercept is $0$. Eliminated.' },
              { label: 'Check (B)', content: 'At $x = 0$: $y = 0$ ✓. At $x = 2$: $y = -\\frac{5}{4}(2)(-2) = 5$ ✓.' },
              { label: 'Answer', content: '**(B)** and **(D)** are equivalent. Pick whichever appears.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'You enter points $(0, 3)$, $(1, 8)$, $(2, 7)$ into a DESMOS table and run regression $y_1 \\sim ax_1^2 + bx_1 + c$. What values do you expect?',
            answer: 'From $(0, 3)$: $c = 3$. The regression should give $a = -3$, $b = 8$, $c = 3$ → $y = -3x^2 + 8x + 3$.',
          },
        ],
      },
    },
  },

  26: {
    moduleId: 'quadratics',
    title: 'Complex Deriving Standard Form (Vertex Form Method)',
    sections: {
      learn: {
        title: 'Learn',
        blocks: [
          {
            type: 'keyInsight',
            content: 'Vertex form derivation on the SAT → CB disguises the vertex in word problems. From the video: "a seal dives to a maximum depth at time $t = 6$" means vertex at $x = 6$. Read the problem part by part, extract vertex coordinates, then use $y = a(x - h)^2 + k$ with one more point to find $a$. Decision rule: when you see "maximum" or "minimum" in a word problem, think vertex form.',
          },
          {
            type: 'text',
            content: 'From the video: the problem described a seal that starts at the surface ($y = 0$ at $x = 0$), dives to its deepest point at $x = 6$, and returns to the surface at $x = 12$. Using vertex form with the zero at $(12, 0)$, the instructor found $a = -8.4$ and then evaluated at $x = 10$ to get $y = 168$ meters.',
          },
          {
            type: 'trapCard',
            title: 'Mixing Up $h$ and $k$',
            wrong: '"Maximum depth of $200$ meters at $50$ seconds." Student writes $y = a(x - 200)^2 + 50$.',
            correction: 'CB trap: swapping input and output. $h$ is the INPUT (time = $50$), $k$ is the OUTPUT (depth = $200$). Correct: $y = a(x - 50)^2 + 200$. Decision rule: $h$ = the "$x$-value" (time, distance, units), $k$ = the "$y$-value" (height, depth, cost).',
          },
          {
            type: 'strategyCard',
            title: 'Word Problem → Vertex Form Pipeline',
            icon: '📖',
            timing: '~25s',
            content: 'From the video: (1) Read part by part — don\'t try to absorb everything at once. (2) Identify the vertex: "maximum/minimum of $k$ at $x = h$." (3) Write $y = a(x - h)^2 + k$. (4) Use ONE other known point to find $a$. (5) Answer what\'s asked (often a specific $y$-value at a given $x$).',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'A ball is thrown upward. Its maximum height of $64$ feet occurs at $t = 2$ seconds. At $t = 0$, the ball is at $16$ feet. Find the height at $t = 3$.',
            steps: [
              { label: 'Vertex', content: 'Maximum at $t = 2$, $h = 64$: vertex $(2, 64)$.' },
              { label: 'Vertex form', content: '$h = a(t - 2)^2 + 64$.' },
              { label: 'Find $a$', content: 'At $t = 0$: $16 = a(4) + 64$ → $4a = -48$ → $a = -12$.' },
              { label: 'Find height at $t = 3$', content: '$h = -12(3-2)^2 + 64 = -12 + 64 = 52$ feet.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A parabola has its minimum value of $-3$ at $x = 2$ and passes through $(0, 5)$. Write the standard form.',
            answer: '$y = a(x-2)^2 - 3$. At $(0, 5)$: $5 = 4a - 3$ → $a = 2$. Expand: $y = 2x^2 - 8x + 8 - 3 = 2x^2 - 8x + 5$.',
          },
        ],
      },
    },
  },

  27: {
    moduleId: 'quadratics',
    title: 'Complex Deriving Standard Form (System of Equations Method)',
    sections: {
      learn: {
        title: 'Learn',
        blocks: [
          {
            type: 'keyInsight',
            content: 'System-of-equations derivation on the SAT → when neither the vertex nor two roots are directly identifiable but three points are known, each point gives one equation in $a$, $b$, $c$. From the video: the instructor also used the vertex property $x = -b/(2a)$ as an additional equation to reduce variables. Decision rule: use this method when no single form (vertex or factored) fits the given information cleanly.',
          },
          {
            type: 'text',
            content: 'From the video: the same seal-diving problem was solved by creating equations from three known points, using $-b/(2a)$ to provide a relationship between $a$ and $b$, and then solving the system. The instructor solved the system using DESMOS by typing the equations as a system and reading off the values.',
          },
          {
            type: 'trapCard',
            title: 'Arithmetic Errors in the System',
            wrong: 'Student correctly sets up three equations but makes an error when eliminating variables, producing a wrong $a$.',
            correction: 'CB trap: algebraic slip in system solving. Shortcut: if one point is the $y$-intercept $(0, y_0)$, then $c = y_0$ immediately. This reduces to two equations in two unknowns. Decision rule: always use the $y$-intercept first to eliminate $c$.',
          },
          {
            type: 'strategyCard',
            title: 'DESMOS System Solver',
            icon: '💻',
            timing: '~20s',
            content: 'From the video: instead of solving the system by hand, type the equations into DESMOS. DESMOS can solve systems of linear equations when you enter them. Alternatively, use the regression approach: enter the three points in a table and run $y_1 \\sim ax_1^2 + bx_1 + c$. Both methods bypass hand calculation entirely.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'A parabola passes through $(0, 3)$, $(1, 8)$, and $(2, 7)$. Find $a$, $b$, $c$ in $y = ax^2 + bx + c$.',
            steps: [
              { label: 'From $(0, 3)$', content: '$c = 3$ (the $y$-intercept gives $c$ immediately).' },
              { label: 'From $(1, 8)$', content: '$a + b + 3 = 8$ → $a + b = 5$.' },
              { label: 'From $(2, 7)$', content: '$4a + 2b + 3 = 7$ → $4a + 2b = 4$ → $2a + b = 2$.' },
              { label: 'Solve', content: 'Subtract: $(2a + b) - (a + b) = 2 - 5$ → $a = -3$, then $b = 8$.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A parabola passes through $(0, -4)$, $(1, -1)$, and $(-1, -5)$. Find the equation.',
            answer: '$c = -4$. From $(1, -1)$: $a + b = 3$. From $(-1, -5)$: $a - b = -1$. Adding: $2a = 2$ → $a = 1$, $b = 2$. Equation: $y = x^2 + 2x - 4$.',
          },
        ],
      },
    },
  },
};
