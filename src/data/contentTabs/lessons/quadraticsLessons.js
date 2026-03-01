export const quadraticsLessonTabs = {
  1: {
    moduleId: 'quadratics',
    title: 'Introduction to Quadratics',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'A quadratic is any equation with an $x^2$ term — its graph is always a parabola.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Standard Form',
                formula: '$y = ax^2 + bx + c$',
                note: '$a$, $b$, $c$ are constants; $a \\neq 0$',
              },
              {
                label: 'Factored Form',
                formula: '$y = a(x - r)(x - s)$',
                note: '$r$ and $s$ are the roots',
              },
              {
                label: 'Vertex Form',
                formula: '$y = a(x - h)^2 + k$',
                note: '$(h, k)$ is the vertex',
              },
            ],
          },
          {
            type: 'text',
            content: 'The **standard form** of a quadratic is $y = ax^2 + bx + c$. Unlike a linear equation (which graphs as a line), a quadratic graphs as a **U-shaped curve** called a **parabola**. The $x^2$ term is what creates the curve.',
          },
          {
            type: 'keyInsight',
            content: `The sign of $a$ controls the parabola's direction. If $a > 0$, the parabola opens **upward** (minimum exists). If $a < 0$, it opens **downward** (maximum exists).`,
          },
          {
            type: 'table',
            title: 'What Each Form Reveals',
            headers: [
              'Form',
              'Instantly Shows',
              'SAT Trigger Phrase',
            ],
            rows: [
              [
                'Standard: $ax^2 + bx + c$',
                '$y$-intercept ($c$), direction ($a$)',
                '"$y$-intercept" or "when $x = 0$"',
              ],
              [
                'Factored: $a(x - r)(x - s)$',
                'Roots ($r$, $s$)',
                '"zeros," "solutions," "$x$-intercepts"',
              ],
              [
                'Vertex: $a(x - h)^2 + k$',
                'Vertex $(h, k)$, min/max',
                '"minimum/maximum value"',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Reading $c$ as the Minimum',
            wrong: 'Student sees $y = x^2 - 6x + 8$ and says the minimum is $8$.',
            correction: '$c = 8$ is the $y$-intercept, not the vertex. Complete the square: $(x-3)^2 - 1$. The minimum is $-1$. The $y$-intercept and vertex coincide only when $b = 0$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'The equation $y = 2(x - 1)(x - 5)$ represents a parabola. Find the $y$-intercept, the roots, and the vertex.',
            steps: [
              {
                label: 'Roots',
                content: 'Set each factor to zero: $x - 1 = 0 \\Rightarrow x = 1$, and $x - 5 = 0 \\Rightarrow x = 5$. Roots: $1$ and $5$.',
              },
              {
                label: '$y$-intercept',
                content: 'Set $x = 0$: $y = 2(0 - 1)(0 - 5) = 2(-1)(-5) = 10$.',
              },
              {
                label: 'Axis of symmetry',
                content: '$x = \\frac{1 + 5}{2} = 3$',
              },
              {
                label: 'Vertex $y$-value',
                content: '$y = 2(3 - 1)(3 - 5) = 2(2)(-2) = -8$. Vertex: $(3, -8)$.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Given $y = -3(x + 2)(x - 4)$, state the roots, the direction the parabola opens, and the $y$-intercept.',
            answer: 'Roots: $x = -2$ and $x = 4$ (set each factor to zero). Direction: $a = -3 < 0$, so the parabola opens **downward**. $y$-intercept: $y = -3(0 + 2)(0 - 4) = -3(2)(-4) = 24$.',
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
        summary: 'Roots (zeros, $x$-intercepts, solutions) are the $x$-values where $y = 0$ — where the parabola crosses the $x$-axis.',
        blocks: [
          {
            type: 'text',
            content: 'Setting $ax^2 + bx + c = 0$ and solving for $x$ gives the **roots**. These are also called **zeros** (because $y = 0$ there) or **$x$-intercepts** (because the graph touches the $x$-axis). The SAT uses all three terms interchangeably.',
          },
          {
            type: 'keyInsight',
            content: 'The number of real roots depends on the discriminant $b^2 - 4ac$. Positive → two roots. Zero → one repeated root. Negative → no real roots.',
          },
          {
            type: 'table',
            title: 'Root-Finding Methods',
            headers: [
              'Method',
              'Best When',
              'Speed',
            ],
            rows: [
              [
                'Factoring',
                'Small integer coefficients',
                'Fast (~20 s)',
              ],
              [
                'Quadratic formula',
                'Any quadratic',
                'Medium (~45 s)',
              ],
              [
                'Graphing (DESMOS)',
                'Digital SAT, quick check',
                'Fast (~15 s)',
              ],
              [
                'Completing the square',
                'Converting to vertex form too',
                'Slow (~60 s)',
              ],
            ],
          },
          {
            type: 'callout',
            variant: 'memorize',
            title: 'The Quadratic Formula',
            content: '$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$\nThis works for **every** quadratic, whether or not it factors neatly.',
          },
          {
            type: 'trapCard',
            title: 'Sign Error in Quadratic Formula',
            wrong: 'For $x^2 + 6x + 5 = 0$: student writes $x = \\frac{6 \\pm \\sqrt{36 - 20}}{2}$, missing the negative on $b$.',
            correction: 'The formula starts with $-b$: $x = \\frac{-6 \\pm \\sqrt{36 - 20}}{2} = \\frac{-6 \\pm 4}{2}$. Roots: $-1$ and $-5$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Find the roots of $x^2 - 5x + 6 = 0$.',
            steps: [
              {
                label: 'Find factors',
                content: 'Two numbers that multiply to $6$ and add to $-5$: $-2$ and $-3$.',
              },
              {
                label: 'Factor',
                content: '$(x - 2)(x - 3) = 0$',
              },
              {
                label: 'Solve',
                content: '$x = 2$ or $x = 3$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Solve $3x^2 - 10x + 8 = 0$ using any method.',
            answer: '$a = 3$, $b = -10$, $c = 8$. Discriminant: $\\Delta = 100 - 96 = 4$. Quadratic formula: $x = \\frac{10 \\pm 2}{6}$. Solutions: $x = 2$ or $x = \\frac{4}{3}$. Factoring check: $(3x - 4)(x - 2) = 0$ confirms both roots.',
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
            content: 'If a root falls between two gridlines, the graph alone cannot give an exact answer. Use algebra (factoring or the quadratic formula) for exact values. Graphs give exact roots only when they land on integer or clearly marked coordinates.',
          },
          {
            type: 'trapCard',
            title: 'Reporting the $y$-intercept Instead',
            wrong: 'Student sees the parabola cross the $y$-axis at $(0, 6)$ and reports $6$ as a root.',
            correction: 'Roots are where $y = 0$, not where $x = 0$. The $y$-intercept $(0, 6)$ is the value of $c$, not a root. Look for points on the $x$-axis.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Student sees the parabola cross the $y$-axis at $(0, 6)$ and reports $6$ as a root.',
            steps: [
              {
                label: 'Correct approach',
                content: 'Roots are where $y = 0$, not where $x = 0$. The $y$-intercept $(0, 6)$ is the value of $c$, not a root. Look for points on the $x$-axis.',
              },
            ],
          },
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
      learn: {
        title: 'Learn',
        blocks: [
          {
            type: 'formula',
            label: 'Zero Product Property',
            content: '$$\\text{If } (x - r)(x - s) = 0, \\text{ then } x = r \\text{ or } x = s$$',
          },
          {
            type: 'text',
            content: 'Factoring converts $ax^2 + bx + c = 0$ into a product of two binomials set equal to zero. By the **zero product property**, if $AB = 0$, then $A = 0$ or $B = 0$.',
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'When Factoring Fails',
            content: 'Factoring works cleanly only when the roots are rational numbers. If $b^2 - 4ac$ is not a perfect square, the quadratic does not factor over integers — switch to the quadratic formula or DESMOS.',
          },
          {
            type: 'trapCard',
            title: 'Dropping the Leading Coefficient',
            wrong: 'Factoring $2x^2 - 7x + 3$: student writes $(x - 3)(x - 1) = 0$ and gets $x = 3, 1$.',
            correction: 'With $a = 2$, the factorization is $(2x - 1)(x - 3) = 0$, giving $x = \\frac{1}{2}$ and $x = 3$. The leading coefficient must appear in a factor.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Factoring $2x^2 - 7x + 3$: student writes $(x - 3)(x - 1) = 0$ and gets $x = 3, 1$.',
            steps: [
              {
                label: 'Correct approach',
                content: 'With $a = 2$, the factorization is $(2x - 1)(x - 3) = 0$, giving $x = \\frac{1}{2}$ and $x = 3$. The leading coefficient must appear in a factor.',
              },
            ],
          },
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
      learn: {
        title: 'Learn',
        blocks: [
          {
            type: 'formula',
            label: 'Key Identity',
            content: '$$x^2 + bx + \\left(\\frac{b}{2}\\right)^2 = \\left(x + \\frac{b}{2}\\right)^2$$',
          },
          {
            type: 'text',
            content: 'Completing the square rewrites $ax^2 + bx + c = 0$ into the form $(x - h)^2 = d$, which is solved by taking the square root of both sides. This method also converts standard form to vertex form.',
          },
          {
            type: 'keyInsight',
            content: 'Completing the square simultaneously finds the roots **and** reveals the vertex $(h, k)$. It is the only method that serves both purposes in one pass.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Subtract the Added Constant',
            wrong: 'Student adds $(b/2)^2$ inside the expression but forgets to subtract it outside.',
            correction: 'Whatever value is added inside the grouping must be subtracted outside (or from the other side) to keep the equation balanced.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Student adds $(b/2)^2$ inside the expression but forgets to subtract it outside.',
            steps: [
              {
                label: 'Correct approach',
                content: 'Whatever value is added inside the grouping must be subtracted outside (or from the other side) to keep the equation balanced.',
              },
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
            type: 'formula',
            label: 'Roots from DESMOS',
            content: '$$ax^2+bx+c=0 \\implies \\text{graph } y=ax^2+bx+c \\text{ and read } x\\text{-intercepts}$$',
            note: 'Each $x$-intercept is a real root of the equation.',
          },
          {
            type: 'text',
            content: 'On the digital SAT, the built-in DESMOS graphing calculator can find roots in seconds. Type the equation, and the $x$-intercepts appear on the graph. Click or tap them to read their coordinates.',
          },
          {
            type: 'keyInsight',
            content: 'DESMOS finds all real roots simultaneously — no factoring, no formula. It is especially useful when the quadratic has irrational roots that are difficult to compute by hand.',
          },
          {
            type: 'trapCard',
            title: 'Misreading the Graph Scale',
            wrong: 'Student zooms in too far and reads a root as $x = 2$ when it is actually $x = 2.5$.',
            correction: 'Always click or tap on the $x$-intercept in DESMOS to see exact coordinates. Do not estimate from the visual grid alone.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Student zooms in too far and reads a root as $x = 2$ when it is actually $x = 2.5$.',
            steps: [
              {
                label: 'Correct approach',
                content: 'Always click or tap on the $x$-intercept in DESMOS to see exact coordinates. Do not estimate from the visual grid alone.',
              },
            ],
          },
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
      learn: {
        title: 'Learn',
        blocks: [
          {
            type: 'text',
            content: 'Some SAT problems disguise a root-finding task inside a system of equations or a context problem. Finding where two expressions are equal is the same as finding the $x$-intercepts of their difference.',
          },
          {
            type: 'keyInsight',
            content: 'If a problem asks "for what value of $x$ does $f(x) = g(x)$?", graph both $y = f(x)$ and $y = g(x)$ in DESMOS and find their intersection points. Alternatively, graph $y = f(x) - g(x)$ and find where it crosses the $x$-axis.',
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Adjusting the Window',
            content: 'Complex quadratics may have roots far from the origin or very close together. If intersections are not visible, zoom out. If they look merged, zoom in. Use the scroll wheel or pinch gesture to adjust the viewing window.',
          },
          {
            type: 'trapCard',
            title: 'Reading Only One Intersection',
            wrong: 'A line intersects a parabola at two points, but student reports only one solution.',
            correction: 'A line can intersect a parabola at 0, 1, or 2 points. Zoom out to find all intersection points. DESMOS highlights them — check for a second one.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A line intersects a parabola at two points, but student reports only one solution.',
            steps: [
              {
                label: 'Correct approach',
                content: 'A line can intersect a parabola at 0, 1, or 2 points. Zoom out to find all intersection points. DESMOS highlights them — check for a second one.',
              },
            ],
          },
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
      learn: {
        title: 'Learn',
        summary: 'The vertex is the highest or lowest point on a parabola — it gives the maximum or minimum value of the function.',
        blocks: [
          {
            type: 'text',
            content: 'Every parabola has a single turning point called the **vertex**. If the parabola opens upward ($a > 0$), the vertex is the **minimum**. If it opens downward ($a < 0$), the vertex is the **maximum**. The vertical line through the vertex is the **axis of symmetry**.',
          },
          {
            type: 'keyInsight',
            content: 'The axis of symmetry is $x = \\frac{-b}{2a}$. Every parabola is perfectly symmetric about this line. If one root is $d$ units left of the axis, the other root is $d$ units right.',
          },
          {
            type: 'callout',
            variant: 'memorize',
            title: 'Vertex from Standard Form',
            content: 'For $y = ax^2 + bx + c$:\n$$x_{\\text{vertex}} = \\frac{-b}{2a}$$\nPlug this $x$ back into the equation to find $y_{\\text{vertex}}$.',
          },
          {
            type: 'trapCard',
            title: 'Reporting the Wrong Coordinate',
            wrong: '"What is the maximum height?" Student finds the vertex $(2, 69)$ and answers $2$.',
            correction: 'The question asks for the height (output), not the time (input). Maximum **height** is the $y$-coordinate: $69$. "At what time" would be the $x$-coordinate.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Find the vertex of $y = 2x^2 - 8x + 3$.',
            steps: [
              {
                label: '$x$-coordinate',
                content: '$x = \\frac{-(-8)}{2(2)} = \\frac{8}{4} = 2$',
              },
              {
                label: '$y$-coordinate',
                content: '$y = 2(2)^2 - 8(2) + 3 = 8 - 16 + 3 = -5$',
              },
              {
                label: 'Vertex',
                content: '$(2, -5)$ — and since $a = 2 > 0$, this is a **minimum**.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Find the vertex of $y = -x^2 + 4x + 1$. Is this a maximum or a minimum?',
            answer: '$x = \\frac{-4}{2(-1)} = \\frac{-4}{-2} = 2$. Then $y = -(4) + 4(2) + 1 = -4 + 8 + 1 = 5$. Vertex: $(2, 5)$. Since $a = -1 < 0$, the parabola opens downward, so this is a **maximum**.',
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
        summary: 'Vertex form $y = a(x - h)^2 + k$ lets you read the vertex directly — no formula needed.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Vertex',
                formula: '$(h, k)$',
                note: 'Read directly from $a(x - h)^2 + k$',
              },
              {
                label: 'Axis of Symmetry',
                formula: '$x = h$',
                note: 'Vertical line through the vertex',
              },
              {
                label: 'Direction',
                formula: '$a > 0$ up, $a < 0$ down',
                note: 'Same rule as standard form',
              },
            ],
          },
          {
            type: 'text',
            content: 'In vertex form, the vertex is written directly into the equation: $y = a(x - h)^2 + k$ has vertex $(h, k)$. The value $a$ still controls direction and width — same as in standard form.',
          },
          {
            type: 'keyInsight',
            content: 'Vertex form and standard form represent the same parabola — they are interchangeable. Use vertex form when the vertex is needed; use standard form when the $y$-intercept or coefficients are needed.',
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'The Sign Trap',
            content: 'The form is $a(x \\mathbf{-} h)^2 + k$. So $y = 3(x + 4)^2 - 7$ has vertex $(-4, -7)$ — not $(4, -7)$. The $+4$ inside means $h = -4$ because $x - (-4) = x + 4$.',
          },
          {
            type: 'trapCard',
            title: 'Sign Error in $(x - h)$',
            wrong: '$y = (x + 4)^2 + 2$ — student writes vertex as $(4, 2)$.',
            correction: 'The form is $(x \\mathbf{-} h)^2 + k$. The expression $x + 4$ means $h = -4$, so the vertex is $(-4, 2)$. Always reverse the sign inside the parentheses.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Convert $y = x^2 - 6x + 11$ to vertex form.',
            steps: [
              {
                label: 'Half of $-6$',
                content: '$\\frac{-6}{2} = -3$',
              },
              {
                label: 'Square it',
                content: '$(-3)^2 = 9$',
              },
              {
                label: 'Add and subtract',
                content: '$y = (x^2 - 6x + 9) - 9 + 11$',
              },
              {
                label: 'Factor',
                content: '$y = (x - 3)^2 + 2$',
              },
              {
                label: 'Vertex',
                content: '$(3, 2)$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Convert $y = 2x^2 + 8x + 3$ to vertex form.',
            answer: 'Factor out $2$: $y = 2(x^2 + 4x) + 3$. Half of $4$ is $2$, squared is $4$. $y = 2(x^2 + 4x + 4 - 4) + 3 = 2(x + 2)^2 - 8 + 3 = 2(x + 2)^2 - 5$. Vertex: $(-2, -5)$.',
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
            type: 'text',
            content: 'The vertex of a parabola is its **turning point** — the lowest point if it opens upward, or the highest point if it opens downward. On a graph, it is the point where the curve changes direction.',
          },
          {
            type: 'keyInsight',
            content: `The vertex always lies on the **axis of symmetry**. If two symmetric points on the parabola are visible (such as two roots), the vertex's $x$-coordinate is the midpoint of those two points.`,
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Grid Alignment',
            content: 'If the vertex does not land exactly on a grid intersection, its coordinates cannot be read exactly from the graph. In that case, use $x = \\frac{-b}{2a}$ from the equation to compute the vertex algebraically.',
          },
          {
            type: 'trapCard',
            title: 'Reading the $x$-coordinate Instead of $y$',
            wrong: '"What is the minimum value?" The vertex is at $(3, -2)$. Student answers $3$.',
            correction: 'The minimum **value** of the function is the $y$-coordinate: $-2$. The value $3$ tells **where** the minimum occurs, not **what** it is.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: '"What is the minimum value?" The vertex is at $(3, -2)$. Student answers $3$.',
            steps: [
              {
                label: 'Correct approach',
                content: 'The minimum **value** of the function is the $y$-coordinate: $-2$. The value $3$ tells **where** the minimum occurs, not **what** it is.',
              },
            ],
          },
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
      learn: {
        title: 'Learn',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Vertex $x$-coordinate',
                formula: '$x = \\frac{-b}{2a}$',
                note: 'From standard form',
              },
              {
                label: 'Vertex $y$-coordinate',
                formula: '$y = f\\!\\left(\\frac{-b}{2a}\\right)$',
                note: 'Plug $x$ back in',
              },
              {
                label: 'Direct read',
                formula: '$(h, k)$ from $a(x - h)^2 + k$',
                note: 'From vertex form',
              },
            ],
          },
          {
            type: 'text',
            content: 'Given $y = ax^2 + bx + c$, the vertex can be found algebraically using $x = \\frac{-b}{2a}$ and then substituting back. If the equation is already in vertex form $y = a(x - h)^2 + k$, read $(h, k)$ directly.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting the Negative in $\\frac{-b}{2a}$',
            wrong: 'For $y = x^2 + 8x + 12$, student computes $x = \\frac{8}{2} = 4$.',
            correction: 'The formula is $\\frac{-b}{2a} = \\frac{-8}{2} = -4$. Then $y = 16 - 32 + 12 = -4$. Vertex: $(-4, -4)$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'For $y = x^2 + 8x + 12$, student computes $x = \\frac{8}{2} = 4$.',
            steps: [
              {
                label: 'Correct approach',
                content: 'The formula is $\\frac{-b}{2a} = \\frac{-8}{2} = -4$. Then $y = 16 - 32 + 12 = -4$. Vertex: $(-4, -4)$.',
              },
            ],
          },
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
      learn: {
        title: 'Learn',
        blocks: [
          {
            type: 'text',
            content: 'Transformations shift, stretch, or reflect a parabola. In vertex form $y = a(x - h)^2 + k$, the parameters $a$, $h$, and $k$ each control a specific transformation of the parent function $y = x^2$.',
          },
          {
            type: 'keyInsight',
            content: 'Horizontal shifts work **opposite** to the sign: $(x - 3)^2$ shifts right, $(x + 3)^2$ shifts left. Vertical shifts work in the **same** direction as the sign.',
          },
          {
            type: 'table',
            title: 'Transformation Rules',
            headers: [
              'Parameter',
              'Effect',
              'Example',
            ],
            rows: [
              [
                '$h > 0$',
                'Shift **right** $h$ units',
                '$y = (x - 3)^2$ shifts right $3$',
              ],
              [
                '$h < 0$',
                'Shift **left** $|h|$ units',
                '$y = (x + 2)^2$ shifts left $2$',
              ],
              [
                '$k > 0$',
                'Shift **up** $k$ units',
                '$y = x^2 + 5$ shifts up $5$',
              ],
              [
                '$k < 0$',
                'Shift **down** $|k|$ units',
                '$y = x^2 - 4$ shifts down $4$',
              ],
              [
                '$a < 0$',
                '**Reflection** across $x$-axis',
                '$y = -x^2$ opens downward',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Horizontal Shift Direction',
            wrong: 'Student says $y = (x - 4)^2$ shifts the graph $4$ units **left**.',
            correction: '$(x - 4)^2$ shifts **right** $4$ units. The horizontal direction is opposite the sign inside the parentheses.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Student says $y = (x - 4)^2$ shifts the graph $4$ units **left**.',
            steps: [
              {
                label: 'Correct approach',
                content: '$(x - 4)^2$ shifts **right** $4$ units. The horizontal direction is opposite the sign inside the parentheses.',
              },
            ],
          },
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
      learn: {
        title: 'Learn',
        blocks: [
          {
            type: 'formula',
            label: 'Vertex Form',
            content: '$$y = a(x - h)^2 + k$$',
            note: '$h$ shifts horizontally, $k$ shifts vertically, $a$ stretches/reflects.',
          },
          {
            type: 'text',
            content: 'DESMOS lets you visualize transformations instantly. By adding sliders for $a$, $h$, and $k$ in $y = a(x - h)^2 + k$, you can watch the parabola shift, stretch, and reflect in real time.',
          },
          {
            type: 'keyInsight',
            content: 'On the digital SAT, type the original and transformed equations on separate lines in DESMOS. If they produce the same graph, the transformation is correct. If not, adjust until they match.',
          },
          {
            type: 'trapCard',
            title: 'Slider Confusion with the Minus Sign',
            wrong: 'Student creates a slider for $h$ and moves it to $+3$, expecting a shift right, but typed $(x + h)$ instead of $(x - h)$.',
            correction: 'In DESMOS, type $y = a(x - h)^2 + k$ exactly. When $h = 3$, the expression becomes $(x - 3)^2$, which correctly shifts right.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Student creates a slider for $h$ and moves it to $+3$, expecting a shift right, but typed $(x + h)$ instead of $(x - h)$.',
            steps: [
              {
                label: 'Correct approach',
                content: 'In DESMOS, type $y = a(x - h)^2 + k$ exactly. When $h = 3$, the expression becomes $(x - 3)^2$, which correctly shifts right.',
              },
            ],
          },
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
      learn: {
        title: 'Learn',
        summary: 'The expression $b^2 - 4ac$ — the discriminant — tells you how many real solutions a quadratic has without solving it.',
        blocks: [
          {
            type: 'formula',
            label: 'Discriminant',
            content: '$$\\Delta = b^2 - 4ac$$',
          },
          {
            type: 'text',
            content: 'Inside the quadratic formula, the expression under the square root is $b^2 - 4ac$. This single number determines the **nature** of the solutions. Computing $b^2 - 4ac$ and checking its sign is sufficient — no need to finish solving.',
          },
          {
            type: 'keyInsight',
            content: 'When a problem introduces an unknown parameter (e.g., "for what value of $k$..."), set up a discriminant condition ($\\Delta = 0$, $\\Delta > 0$, or $\\Delta < 0$) and solve for the parameter.',
          },
          {
            type: 'table',
            title: 'Discriminant Decision Table',
            headers: [
              'Value of $b^2 - 4ac$',
              'Number of Real Solutions',
              'Graph Behavior',
            ],
            rows: [
              [
                '$> 0$',
                'Two distinct real roots',
                'Parabola crosses $x$-axis twice',
              ],
              [
                '$= 0$',
                'Exactly one real root (repeated)',
                'Parabola touches $x$-axis at vertex',
              ],
              [
                '$< 0$',
                'No real roots',
                'Parabola never reaches $x$-axis',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Equation Not in Standard Form',
            wrong: 'Given $3x = x^2 + 5$, student reads $a = 3$, $b = 1$, $c = 5$.',
            correction: 'Rearrange to $0 = x^2 - 3x + 5$ first, giving $a = 1$, $b = -3$, $c = 5$. Then $\\Delta = 9 - 20 = -11 < 0$. Always move everything to one side before reading coefficients.',
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
              {
                label: 'Condition',
                content: 'Exactly one solution → $\\Delta = 0$.',
              },
              {
                label: 'Set up',
                content: '$k^2 - 4(1)(9) = 0$ → $k^2 = 36$.',
              },
              {
                label: 'Solve',
                content: '$k = 6$ or $k = -6$.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'How many real solutions does $2x^2 - 4x + 2 = 0$ have?',
            answer: '$a = 2$, $b = -4$, $c = 2$. $\\Delta = (-4)^2 - 4(2)(2) = 16 - 16 = 0$. Exactly **one** real solution (a repeated root).',
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
            type: 'formula',
            label: 'Discriminant',
            content: '$$\\Delta = b^2 - 4ac$$',
          },
          {
            type: 'text',
            content: 'This problem type gives a standard-form quadratic with numerical coefficients and asks how many real solutions it has. The approach is direct: compute $\\Delta = b^2 - 4ac$ and check the sign.',
          },
          {
            type: 'trapCard',
            title: 'Miscounting the Sign of $c$',
            wrong: 'In $x^2 + 4x - 5 = 0$, student uses $c = 5$ instead of $c = -5$, getting $\\Delta = 16 - 20 = -4$.',
            correction: '$c = -5$, so $\\Delta = 16 - 4(1)(-5) = 16 + 20 = 36 > 0$. Two real solutions. Track the sign of $c$ with care.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'In $x^2 + 4x - 5 = 0$, student uses $c = 5$ instead of $c = -5$, getting $\\Delta = 16 - 20 = -4$.',
            steps: [
              {
                label: 'Correct approach',
                content: '$c = -5$, so $\\Delta = 16 - 4(1)(-5) = 16 + 20 = 36 > 0$. Two real solutions. Track the sign of $c$ with care.',
              },
            ],
          },
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
      learn: {
        title: 'Learn',
        blocks: [
          {
            type: 'text',
            content: 'Instead of computing $b^2 - 4ac$, graph the quadratic in DESMOS and **count** how many times the parabola crosses the $x$-axis. The number of crossings equals the number of real solutions.',
          },
          {
            type: 'table',
            title: 'Graph vs. Discriminant',
            headers: [
              'Graph Behavior',
              'Solutions',
              '$\\Delta$',
            ],
            rows: [
              [
                'Crosses $x$-axis twice',
                'Two',
                '$> 0$',
              ],
              [
                'Touches $x$-axis once (at vertex)',
                'One (repeated)',
                '$= 0$',
              ],
              [
                'Does not touch $x$-axis',
                'None',
                '$< 0$',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Tangent Point Looks Like No Crossing',
            wrong: 'The parabola just touches the $x$-axis at one point, but student reports "no real solutions" because it does not cross through.',
            correction: 'Touching the $x$-axis counts as one real solution (repeated root, $\\Delta = 0$). Zoom in at the point of tangency to confirm contact.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'The parabola just touches the $x$-axis at one point, but student reports "no real solutions" because it does not cross through.',
            steps: [
              {
                label: 'Correct approach',
                content: 'Touching the $x$-axis counts as one real solution (repeated root, $\\Delta = 0$). Zoom in at the point of tangency to confirm contact.',
              },
            ],
          },
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
      learn: {
        title: 'Learn',
        blocks: [
          {
            type: 'formula',
            label: 'Discriminant',
            content: '$$\\Delta = b^2 - 4ac$$',
            note: '$\\Delta > 0$: two real roots; $\\Delta = 0$: one repeated root; $\\Delta < 0$: no real roots.',
          },
          {
            type: 'text',
            content: 'This problem type introduces an **unknown parameter** (like $k$) in the quadratic and asks for which values the equation has a specific number of solutions. The discriminant becomes an equation or inequality in $k$.',
          },
          {
            type: 'keyInsight',
            content: 'The discriminant is a function of the parameter. Setting $\\Delta = 0$ gives the boundary between two solutions and no solutions. Setting $\\Delta > 0$ or $\\Delta < 0$ gives ranges.',
          },
          {
            type: 'trapCard',
            title: 'Solving the Quadratic Instead of the Discriminant',
            wrong: 'Student tries to factor $x^2 + kx + 4 = 0$ to find $x$, but the question asks for $k$.',
            correction: 'The question targets the **parameter**, not the roots. Set $\\Delta = k^2 - 16 = 0$ and solve for $k$: $k = \\pm 4$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Student tries to factor $x^2 + kx + 4 = 0$ to find $x$, but the question asks for $k$.',
            steps: [
              {
                label: 'Correct approach',
                content: 'The question targets the **parameter**, not the roots. Set $\\Delta = k^2 - 16 = 0$ and solve for $k$: $k = \\pm 4$.',
              },
            ],
          },
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
      learn: {
        title: 'Learn',
        blocks: [
          {
            type: 'formula',
            label: 'Discriminant',
            content: '$$\\Delta = b^2 - 4ac$$',
            note: 'Slide the parameter until the parabola is tangent to the $x$-axis ($\\Delta = 0$).',
          },
          {
            type: 'text',
            content: 'When a quadratic contains a parameter, DESMOS sliders can find the critical value. Type the equation with the parameter, create a slider, and adjust until the parabola just touches the $x$-axis (one solution) or lifts off entirely (no solutions).',
          },
          {
            type: 'keyInsight',
            content: 'The slider value at which the parabola transitions from crossing the $x$-axis to missing it is exactly where $\\Delta = 0$. DESMOS makes this transition visible in real time.',
          },
          {
            type: 'trapCard',
            title: 'Slider Precision Issues',
            wrong: 'Student slides to $k = 5.9$ and reports that as the answer, but the exact answer is $k = 6$.',
            correction: 'DESMOS sliders default to step sizes of $0.1$. For exact answers, click the slider bounds and set a finer step. Verify algebraically: $\\Delta = k^2 - 36 = 0$ gives $k = \\pm 6$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Student slides to $k = 5.9$ and reports that as the answer, but the exact answer is $k = 6$.',
            steps: [
              {
                label: 'Correct approach',
                content: 'DESMOS sliders default to step sizes of $0.1$. For exact answers, click the slider bounds and set a finer step. Verify algebraically: $\\Delta = k^2 - 36 = 0$ gives $k = \\pm 6$.',
              },
            ],
          },
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
      learn: {
        title: 'Learn',
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
            title: 'Hidden Quadratics',
            content: 'Some problems give two equations (e.g., a line and a parabola) and ask when they intersect at exactly one point. Set them equal, rearrange to standard form, and then apply the discriminant condition.',
          },
          {
            type: 'trapCard',
            title: 'Expanding $4ac$ Incorrectly',
            wrong: 'For $kx^2 + 6x + k = 0$, student writes $\\Delta = 36 - 4k$ instead of $36 - 4k^2$.',
            correction: '$a = k$ and $c = k$, so $4ac = 4(k)(k) = 4k^2$. The discriminant is $\\Delta = 36 - 4k^2$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'For $kx^2 + 6x + k = 0$, student writes $\\Delta = 36 - 4k$ instead of $36 - 4k^2$.',
            steps: [
              {
                label: 'Correct approach',
                content: '$a = k$ and $c = k$, so $4ac = 4(k)(k) = 4k^2$. The discriminant is $\\Delta = 36 - 4k^2$.',
              },
            ],
          },
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
      learn: {
        title: 'Learn',
        blocks: [
          {
            type: 'formula',
            label: 'System to Quadratic',
            content: '$$\\text{If } y = ax^2 + bx + c \\text{ and } y = mx + d,$$\n$$\\text{then } ax^2 + (b - m)x + (c - d) = 0$$',
          },
          {
            type: 'text',
            content: 'A system consisting of a **linear equation** and a **quadratic equation** can have 0, 1, or 2 solutions. Setting the two equations equal produces a single quadratic. The discriminant of that quadratic determines the number of intersection points.',
          },
          {
            type: 'keyInsight',
            content: 'The combined quadratic has coefficients $A = a$, $B = b - m$, $C = c - d$. Apply the discriminant $\\Delta = B^2 - 4AC$ to determine the number of intersections.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Subtract All Terms',
            wrong: 'From $x^2 + 3x + 2 = x + 4$, student writes $x^2 + 3x + 2 - x = 0$, forgetting to subtract $4$.',
            correction: 'Move **everything** to one side: $x^2 + 3x + 2 - x - 4 = 0$ → $x^2 + 2x - 2 = 0$. Subtract every term from the linear equation.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'From $x^2 + 3x + 2 = x + 4$, student writes $x^2 + 3x + 2 - x = 0$, forgetting to subtract $4$.',
            steps: [
              {
                label: 'Correct approach',
                content: 'Move **everything** to one side: $x^2 + 3x + 2 - x - 4 = 0$ → $x^2 + 2x - 2 = 0$. Subtract every term from the linear equation.',
              },
            ],
          },
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
      learn: {
        title: 'Learn',
        blocks: [
          {
            type: 'formula',
            label: 'System Discriminant',
            content: '$$ax^2 + bx + c = mx + d \\implies ax^2 + (b-m)x + (c-d) = 0$$',
            note: 'Apply $\\Delta = (b-m)^2 - 4a(c-d)$ to count intersections algebraically, or graph both curves in DESMOS.',
          },
          {
            type: 'text',
            content: 'To determine how many times a line intersects a parabola, graph both in DESMOS and count the intersection points. DESMOS highlights them automatically.',
          },
          {
            type: 'keyInsight',
            content: 'If the line barely touches the parabola (tangent), there is exactly one intersection. If it passes through, there are two. If it misses entirely, there are none. DESMOS makes this visually clear.',
          },
          {
            type: 'trapCard',
            title: 'Tangent vs. Near-Miss',
            wrong: 'The line appears to touch the parabola at one point, but student reports "no solutions" because the line seems to barely miss.',
            correction: 'Zoom in closely at the suspected tangent point. If the line touches the curve, there is exactly one solution. If there is a visible gap, there are zero.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'The line appears to touch the parabola at one point, but student reports "no solutions" because the line seems to barely miss.',
            steps: [
              {
                label: 'Correct approach',
                content: 'Zoom in closely at the suspected tangent point. If the line touches the curve, there is exactly one solution. If there is a visible gap, there are zero.',
              },
            ],
          },
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
      learn: {
        title: 'Learn',
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
          {
            type: 'trapCard',
            title: 'Using the Wrong Condition',
            wrong: 'The question asks when the system has "no solution," but student sets $\\Delta = 0$ instead of $\\Delta < 0$.',
            correction: '"No solution" requires $\\Delta < 0$. "Exactly one solution" requires $\\Delta = 0$. "Two solutions" requires $\\Delta > 0$. Match the condition to the question.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'The question asks when the system has "no solution," but student sets $\\Delta = 0$ instead of $\\Delta < 0$.',
            steps: [
              {
                label: 'Correct approach',
                content: '"No solution" requires $\\Delta < 0$. "Exactly one solution" requires $\\Delta = 0$. "Two solutions" requires $\\Delta > 0$. Match the condition to the question.',
              },
            ],
          },
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
      learn: {
        title: 'Learn',
        summary: `Given a parabola's graph, the equation can be built by reading key points — vertex plus one extra point is enough.`,
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'From Roots',
                formula: '$y = a(x - r_1)(x - r_2)$',
                note: 'Use when both $x$-intercepts are visible',
              },
              {
                label: 'From Vertex',
                formula: '$y = a(x - h)^2 + k$',
                note: 'Use when vertex is visible',
              },
            ],
          },
          {
            type: 'text',
            content: 'A parabola is completely determined by the **vertex** $(h, k)$ and **one other point** on the curve. Start in vertex form, plug in the extra point to find $a$, then expand to standard form.',
          },
          {
            type: 'keyInsight',
            content: 'If the graph shows both $x$-intercepts instead of the vertex, use **factored form**: $y = a(x - r)(x - s)$. Plug in any third point (often the $y$-intercept) to solve for $a$.',
          },
          {
            type: 'trapCard',
            title: 'Assuming $a = 1$',
            wrong: 'Student reads vertex $(2, -3)$ and writes $y = (x-2)^2 - 3$ without checking $a$.',
            correction: 'The stretch factor $a$ might not be $1$. Plug in another visible point — if the equation does not hold with $a = 1$, solve for the correct $a$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A parabola has vertex $(2, -3)$ and passes through $(0, 5)$. Find its equation in standard form.',
            steps: [
              {
                label: 'Vertex form',
                content: '$y = a(x - 2)^2 - 3$',
              },
              {
                label: 'Plug in $(0, 5)$',
                content: '$5 = a(0 - 2)^2 - 3$ → $5 = 4a - 3$ → $a = 2$',
              },
              {
                label: 'Expand',
                content: '$y = 2(x - 2)^2 - 3 = 2(x^2 - 4x + 4) - 3 = 2x^2 - 8x + 8 - 3$',
              },
              {
                label: 'Standard form',
                content: '$y = 2x^2 - 8x + 5$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A parabola has vertex $(1, -4)$ and passes through $(3, 4)$. Write the equation in standard form.',
            answer: '$y = a(x - 1)^2 - 4$. Plug in $(3, 4)$: $4 = a(4) - 4$ → $4a = 8$ → $a = 2$. Expand: $y = 2(x^2 - 2x + 1) - 4 = 2x^2 - 4x + 2 - 4 = 2x^2 - 4x - 2$.',
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
            type: 'formula',
            label: 'Factored Form from Roots',
            content: '$$y = a(x - r_1)(x - r_2)$$',
            note: 'Read two $x$-intercepts from the graph, then plug in a third point to solve for $a$.',
          },
          {
            type: 'text',
            content: 'Building a standard-form equation from a graph requires reading reliable points — those that fall exactly on grid intersections. The strategy depends on which points are most clearly readable: vertex + point or two roots + point.',
          },
          {
            type: 'keyInsight',
            content: 'Always identify the **most reliable** points on the graph. Using approximate coordinates introduces rounding errors that cascade through the calculation.',
          },
          {
            type: 'trapCard',
            title: 'Sign Error When Expanding',
            wrong: 'Student expands $2(x - 3)^2 + 1$ as $2x^2 - 6x + 9 + 1 = 2x^2 - 6x + 10$.',
            correction: '$2(x - 3)^2 + 1 = 2(x^2 - 6x + 9) + 1 = 2x^2 - 12x + 18 + 1 = 2x^2 - 12x + 19$. The coefficient $2$ must distribute to **all three** terms inside.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Student expands $2(x - 3)^2 + 1$ as $2x^2 - 6x + 9 + 1 = 2x^2 - 6x + 10$.',
            steps: [
              {
                label: 'Correct approach',
                content: '$2(x - 3)^2 + 1 = 2(x^2 - 6x + 9) + 1 = 2x^2 - 12x + 18 + 1 = 2x^2 - 12x + 19$. The coefficient $2$ must distribute to **all three** terms inside.',
              },
            ],
          },
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
      learn: {
        title: 'Learn',
        blocks: [
          {
            type: 'formula',
            label: 'DESMOS Regression Shortcut',
            content: '$$y_1 \\sim ax_1^2 + bx_1 + c$$',
            note: 'Enter a table of points in DESMOS, then type the regression formula above to get $a$, $b$, $c$ automatically.',
          },
          {
            type: 'text',
            content: 'On the digital SAT, instead of deriving the equation algebraically, type each answer choice into DESMOS and compare the resulting graph to the one shown in the problem. The matching graph is the answer.',
          },
          {
            type: 'keyInsight',
            content: 'This method requires zero algebra — just typing and visual comparison. It is fastest when four answer choices need testing, since elimination narrows the field quickly.',
          },
          {
            type: 'trapCard',
            title: 'Graphs Look Similar at Default Zoom',
            wrong: 'Two answer choices produce graphs that look the same at default zoom, so student picks the first one.',
            correction: 'Zoom in on key features (vertex, intercepts) to distinguish between similar-looking graphs. Small differences in $a$ or $c$ become visible upon zooming.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Two answer choices produce graphs that look the same at default zoom, so student picks the first one.',
            steps: [
              {
                label: 'Correct approach',
                content: 'Zoom in on key features (vertex, intercepts) to distinguish between similar-looking graphs. Small differences in $a$ or $c$ become visible upon zooming.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'You type $y = -x^2 + 6x - 5$ into DESMOS and see a downward parabola with vertex at $(3, 4)$. Does this match a graph showing vertex $(3, 4)$ and roots at $x = 1$ and $x = 5$?',
            answer: 'Check roots: $-x^2 + 6x - 5 = 0$ → $x^2 - 6x + 5 = 0$ → $(x-1)(x-5) = 0$ → $x = 1, 5$. Vertex and roots match.',
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
            type: 'text',
            content: 'In complex graph-to-equation problems, the key points may not all be integers, or the problem provides information indirectly (e.g., "the maximum revenue is $500 at $20$ units"). The vertex form method handles these: identify the vertex from context, use one additional constraint to find $a$, then expand.',
          },
          {
            type: 'keyInsight',
            content: 'Word problems describing a maximum or minimum are vertex problems in disguise. The maximum/minimum value is $k$, and the input where it occurs is $h$. Write $y = a(x - h)^2 + k$ and use any other given condition to find $a$.',
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Non-Integer Values',
            content: 'When the vertex has non-integer coordinates (e.g., $h = \\frac{3}{2}$), expand carefully: $\\left(x - \\frac{3}{2}\\right)^2 = x^2 - 3x + \\frac{9}{4}$. Fraction arithmetic errors are common here.',
          },
          {
            type: 'trapCard',
            title: 'Mixing Up $h$ and $k$',
            wrong: '"Maximum profit is $200 at 50 units." Student writes $y = a(x - 200)^2 + 50$.',
            correction: '$h = 50$ (the input), $k = 200$ (the output). The equation is $y = a(x - 50)^2 + 200$. The vertex is $(h, k) = (\\text{input}, \\text{output})$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: '"Maximum profit is $200 at 50 units." Student writes $y = a(x - 200)^2 + 50$.',
            steps: [
              {
                label: 'Correct approach',
                content: '$h = 50$ (the input), $k = 200$ (the output). The equation is $y = a(x - 50)^2 + 200$. The vertex is $(h, k) = (\\text{input}, \\text{output})$.',
              },
            ],
          },
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
      learn: {
        title: 'Learn',
        blocks: [
          {
            type: 'text',
            content: 'When neither the vertex nor two roots are clearly identifiable, but **three points** on the parabola are known, a system of three equations in three unknowns ($a$, $b$, $c$) can be built using $y = ax^2 + bx + c$.',
          },
          {
            type: 'keyInsight',
            content: 'Each known point $(x_i, y_i)$ produces one equation: $y_i = ax_i^2 + bx_i + c$. Three points give three equations, which can be solved simultaneously for $a$, $b$, and $c$.',
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Choosing Convenient Points',
            content: 'If one of the points is the $y$-intercept $(0, y_0)$, the equation simplifies to $y_0 = c$, immediately giving $c$. This reduces the system to two equations in two unknowns.',
          },
          {
            type: 'trapCard',
            title: 'Arithmetic Errors in the System',
            wrong: 'Student correctly sets up three equations but makes an error when eliminating variables, producing a wrong $a$.',
            correction: 'Use the $y$-intercept to find $c$ first (if available). Then subtract equations pairwise to eliminate $c$, reducing to two equations in $a$ and $b$. Double-check each elimination step.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Student correctly sets up three equations but makes an error when eliminating variables, producing a wrong $a$.',
            steps: [
              {
                label: 'Correct approach',
                content: 'Use the $y$-intercept to find $c$ first (if available). Then subtract equations pairwise to eliminate $c$, reducing to two equations in $a$ and $b$. Double-check each elimination step.',
              },
            ],
          },
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
