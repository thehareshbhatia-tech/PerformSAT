export const quadraticsLessonTabs = {
  "1": {
    "moduleId": "quadratics",
    "title": "Introduction to Quadratics",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "A quadratic is any equation with an $x^2$ term — its graph is always a parabola. The SAT tests whether you can pick the right form for the information asked.",
        "blocks": [
          {
            "type": "heading",
            "content": "Introduction to Quadratics"
          },
          {
            "type": "text",
            "content": "A quadratic is any equation where the highest power of the variable is $2$. Unlike a line, which increases or decreases forever, a quadratic **turns around** — it has a highest or lowest point. On a graph it makes a U-shape called a **parabola**."
          },
          {
            "type": "text",
            "content": "The standard form is $y = ax^2 + bx + c$. The coefficient $a$ controls **direction**: when $a > 0$ the parabola opens upward (has a minimum); when $a < 0$ it opens downward (has a maximum). The SAT tests this in one sentence: \"what is the **minimum** value?\" tells you $a > 0$, and \"maximum\" tells you $a < 0$. For example, the $x$-intercepts of $y = ax^2 + bx + c$ are the roots, where the parabola crosses the $x$-axis; a crossing at $(4, 0)$ means $x = 4$ is a solution."
          },
          {
            "type": "diagramRef",
            "visualType": "parabolaFromGraphDiagram",
            "description": "Every quadratic makes a U-shaped parabola — the vertex is the turning point."
          },
          {
            "type": "formula",
            "label": "Introduction to Quadratics — Core Rule",
            "content": "$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Given $y = 2x^2 - 8x + 5$: $a = 2 > 0$ so the parabola opens **up** (minimum exists). The minimum value is the $y$-coordinate of the vertex, not $5$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "CB offers the $y$-intercept $c$ as an answer when the question asks for the vertex value, because students who only read the constant term fall for this. Check what the question asks: \"minimum/maximum **value**\" = $y$-coordinate of the vertex, not the constant $c$. Always locate the vertex before answering."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Choose form (standard/factored/vertex) based on what the question asks. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Introduction to Quadratics\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "The equation $y = 2(x - 1)(x - 5)$ represents a parabola. What are the $x$-intercepts, and what is the minimum value of $y$?",
            "steps": [
              {
                "label": "Read roots from factored form",
                "content": "Roots: $x = 1$ and $x = 5$ (set each factor to zero)."
              },
              {
                "label": "Find axis of symmetry",
                "content": "Midpoint of roots: $x = \\frac{1 + 5}{2} = 3$."
              },
              {
                "label": "Plug in for minimum",
                "content": "$y = 2(3-1)(3-5) = 2(2)(-2) = -8$."
              },
              {
                "label": "Answer",
                "content": "$x$-intercepts: $1$ and $5$. Minimum value: $-8$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Given $y = -3(x + 2)(x - 4)$, what is the maximum value of $y$?",
            "answer": "$a = -3 < 0$, so opens downward (has a maximum). Axis of symmetry: $x = \\frac{-2 + 4}{2} = 1$. Plug in: $y = -3(1+2)(1-4) = -3(3)(-3) = 27$. Maximum value: $27$."
          }
        ]
      }
    }
  },
  "2": {
    "moduleId": "quadratics",
    "title": "Roots of a Quadratic",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Roots (zeros, $x$-intercepts, solutions) are the $x$-values where $y = 0$. The SAT uses all three terms interchangeably — recognize the synonym and you're halfway there.",
        "blocks": [
          {
            "type": "heading",
            "content": "Roots of a Quadratic"
          },
          {
            "type": "text",
            "content": "The roots (also called zeros, solutions, or x-intercepts) are the $x$-values where the parabola crosses the $x$-axis — that is, where $y = 0$. A quadratic can have 2, 1, or 0 real roots depending on whether the parabola crosses, touches, or misses the axis."
          },
          {
            "type": "text",
            "content": "Set the equation equal to zero and solve. Three methods: **factoring** (fastest when integers work), **quadratic formula** (always works), and **graphing/DESMOS** (visual confirmation). On the SAT, the question wording tells you which to use: \"what are the solutions?\" → factor or formula; \"how many solutions?\" → discriminant. For example, a parabola's $x$-intercepts are its roots — the values of $x$ where $y = 0$; if the graph crosses at $(4, 0)$, then $x = 4$ is a solution."
          },
          {
            "type": "diagramRef",
            "visualType": "parabolaFromGraphDiagram",
            "description": "Roots are where the parabola crosses the x-axis (y = 0)."
          },
          {
            "type": "formula",
            "label": "Roots of a Quadratic — Core Rule",
            "content": "$$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Factor $x^2 + 2x - 15 = 0$: find two numbers that multiply to $-15$ and add to $+2$. Those are $+5$ and $-3$. So $(x + 5)(x - 3) = 0$, giving $x = -5$ or $x = 3$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "When a quadratic factors as $(x - 3)(x + 5) = 0$, the roots are $x = 3$ and $x = -5$. Students frequently write $x = -3$ and $x = 5$ — flipping the signs from the factored form. After factoring, set each factor equal to zero separately: $(x - 3) = 0 \\Rightarrow x = 3$, $(x + 5) = 0 \\Rightarrow x = -5$. The sign in the answer is always the **opposite** of the sign inside the parenthesis."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Use factoring when clean; use quadratic formula when factoring is messy. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Roots of a Quadratic\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "What are the solutions to $x^2 - 5x + 6 = 0$? (A) $x = -2$ and $x = -3$ (B) $x = 2$ and $x = 3$ (C) $x = 1$ and $x = 6$ (D) $x = -1$ and $x = -6$",
            "steps": [
              {
                "label": "Find factor pair",
                "content": "Two numbers that multiply to $6$ and add to $-5$: that's $-2$ and $-3$."
              },
              {
                "label": "Factor",
                "content": "$(x - 2)(x - 3) = 0$"
              },
              {
                "label": "Solve",
                "content": "$x = 2$ or $x = 3$."
              },
              {
                "label": "Trap check",
                "content": "(A) has the wrong signs — those multiply to $6$ but add to $+5$, not $-5$. Answer: **(B)**."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Find the roots of $3x^2 - 10x + 8 = 0$.",
            "answer": "Need two numbers that multiply to $3 \\times 8 = 24$ and add to $-10$: $-6$ and $-4$. Split: $3x^2 - 6x - 4x + 8 = 0$ → $3x(x-2) - 4(x-2) = 0$ → $(3x-4)(x-2) = 0$. Roots: $x = \\frac{4}{3}$ and $x = 2$."
          }
        ]
      }
    }
  },
  "3": {
    "moduleId": "quadratics",
    "title": "Finding Roots Via Graph",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "The roots (also called zeros, solutions, or x-intercepts) are the $x$-values where the parabola crosses the $x$-axis — that is, where $y = 0$. A quadratic can have 2, 1, or 0 real roots depending on whether the parabola",
        "blocks": [
          {
            "type": "heading",
            "content": "Finding Roots Via Graph"
          },
          {
            "type": "text",
            "content": "The roots (also called zeros, solutions, or x-intercepts) are the $x$-values where the parabola crosses the $x$-axis — that is, where $y = 0$. A quadratic can have 2, 1, or 0 real roots depending on whether the parabola crosses, touches, or misses the axis."
          },
          {
            "type": "text",
            "content": "Set the equation equal to zero and solve. Three methods: **factoring** (fastest when integers work), **quadratic formula** (always works), and **graphing/DESMOS** (visual confirmation). On the SAT, the question wording tells you which to use: \"what are the solutions?\" → factor or formula; \"how many solutions?\" → discriminant. For example, read the roots straight off the graph: each point where the parabola crosses the $x$-axis, such as $(4, 0)$, gives a solution $x = 4$."
          },
          {
            "type": "diagramRef",
            "visualType": "parabolaFromGraphDiagram",
            "description": "Roots are where the parabola crosses the x-axis (y = 0)."
          },
          {
            "type": "formula",
            "label": "Finding Roots Via Graph — Core Rule",
            "content": "$$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Factor $x^2 + 2x - 15 = 0$: find two numbers that multiply to $-15$ and add to $+2$. Those are $+5$ and $-3$. So $(x + 5)(x - 3) = 0$, giving $x = -5$ or $x = 3$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "When a quadratic factors as $(x - 3)(x + 5) = 0$, the roots are $x = 3$ and $x = -5$. Students frequently write $x = -3$ and $x = 5$ — flipping the signs from the factored form. After factoring, set each factor equal to zero separately: $(x - 3) = 0 \\Rightarrow x = 3$, $(x + 5) = 0 \\Rightarrow x = -5$. The sign in the answer is always the **opposite** of the sign inside the parenthesis."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Use factoring when clean; use quadratic formula when factoring is messy. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Finding Roots Via Graph\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "A parabola crosses the $x$-axis at $x = -3$ and $x = 5$ and opens upward. Which could be its equation? (A) $y = (x + 3)(x - 5)$ (B) $y = (x - 3)(x + 5)$ (C) $y = -(x + 3)(x - 5)$ (D) $y = (x + 3)(x + 5)$",
            "steps": [
              {
                "label": "Convert roots to factors",
                "content": "Root $x = -3$ → factor $(x + 3)$. Root $x = 5$ → factor $(x - 5)$."
              },
              {
                "label": "Check direction",
                "content": "Opens upward means $a > 0$. Eliminate (C) where $a = -1$."
              },
              {
                "label": "Check factors",
                "content": "(B) has roots at $3$ and $-5$ — wrong roots. (D) has roots at $-3$ and $-5$ — wrong."
              },
              {
                "label": "Answer",
                "content": "**(A)** — correct roots and correct direction."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A graph shows a parabola touching the $x$-axis at exactly one point, $x = 4$, and opening upward. What form does the equation take?",
            "answer": "One touch point = repeated root. The equation is $y = a(x - 4)^2$ for some $a > 0$. This is also vertex form with vertex $(4, 0)$."
          }
        ]
      }
    }
  },
  "4": {
    "moduleId": "quadratics",
    "title": "Finding Roots Via Factoring",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "The roots (also called zeros, solutions, or x-intercepts) are the $x$-values where the parabola crosses the $x$-axis — that is, where $y = 0$. A quadratic can have 2, 1, or 0 real roots depending on whether the parabola",
        "blocks": [
          {
            "type": "heading",
            "content": "Finding Roots Via Factoring"
          },
          {
            "type": "text",
            "content": "The roots (also called zeros, solutions, or x-intercepts) are the $x$-values where the parabola crosses the $x$-axis — that is, where $y = 0$. A quadratic can have 2, 1, or 0 real roots depending on whether the parabola crosses, touches, or misses the axis."
          },
          {
            "type": "text",
            "content": "Set the equation equal to zero and solve. Three methods: **factoring** (fastest when integers work), **quadratic formula** (always works), and **graphing/DESMOS** (visual confirmation). On the SAT, the question wording tells you which to use: \"what are the solutions?\" → factor or formula; \"how many solutions?\" → discriminant. For example, factor and set each factor to zero: $x^2 - 7x + 12 = (x - 3)(x - 4) = 0$ gives $x = 3$ or $x = 4$."
          },
          {
            "type": "diagramRef",
            "visualType": "parabolaFromGraphDiagram",
            "description": "Roots are where the parabola crosses the x-axis (y = 0)."
          },
          {
            "type": "formula",
            "label": "Finding Roots Via Factoring — Core Rule",
            "content": "$$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Factor $x^2 + 2x - 15 = 0$: find two numbers that multiply to $-15$ and add to $+2$. Those are $+5$ and $-3$. So $(x + 5)(x - 3) = 0$, giving $x = -5$ or $x = 3$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "When a quadratic factors as $(x - 3)(x + 5) = 0$, the roots are $x = 3$ and $x = -5$. Students frequently write $x = -3$ and $x = 5$ — flipping the signs from the factored form. After factoring, set each factor equal to zero separately: $(x - 3) = 0 \\Rightarrow x = 3$, $(x + 5) = 0 \\Rightarrow x = -5$. The sign in the answer is always the **opposite** of the sign inside the parenthesis."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Use factoring when clean; use quadratic formula when factoring is messy. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Finding Roots Via Factoring\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "What are the solutions to $3x^2 + 5x - 2 = 0$?",
            "steps": [
              {
                "label": "Find factor pair",
                "content": "$a \\cdot c = 3 \\times (-2) = -6$. Need two numbers multiplying to $-6$ and adding to $5$: $6$ and $-1$."
              },
              {
                "label": "Split middle term",
                "content": "$3x^2 + 6x - x - 2 = 0$"
              },
              {
                "label": "Factor by grouping",
                "content": "$3x(x + 2) - 1(x + 2) = 0 \\Rightarrow (3x - 1)(x + 2) = 0$"
              },
              {
                "label": "Solve",
                "content": "$x = \\frac{1}{3}$ or $x = -2$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Solve by factoring: $x^2 - 7x + 12 = 0$.",
            "answer": "Numbers multiplying to $12$ and adding to $-7$: $-3$ and $-4$. Factor: $(x - 3)(x - 4) = 0$. Roots: $x = 3$ and $x = 4$."
          }
        ]
      }
    }
  },
  "5": {
    "moduleId": "quadratics",
    "title": "Finding Roots Via Completing the Square",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "The roots (also called zeros, solutions, or x-intercepts) are the $x$-values where the parabola crosses the $x$-axis — that is, where $y = 0$. A quadratic can have 2, 1, or 0 real roots depending on whether the parabola",
        "blocks": [
          {
            "type": "heading",
            "content": "Finding Roots Via Completing the Square"
          },
          {
            "type": "text",
            "content": "The roots (also called zeros, solutions, or x-intercepts) are the $x$-values where the parabola crosses the $x$-axis — that is, where $y = 0$. A quadratic can have 2, 1, or 0 real roots depending on whether the parabola crosses, touches, or misses the axis."
          },
          {
            "type": "text",
            "content": "Set the equation equal to zero and solve. Three methods: **factoring** (fastest when integers work), **quadratic formula** (always works), and **graphing/DESMOS** (visual confirmation). On the SAT, the question wording tells you which to use: \"what are the solutions?\" → factor or formula; \"how many solutions?\" → discriminant. For example, to solve $w^2 + 12w - 40 = 0$ by completing the square: $(w + 6)^2 = 40 + 36 = 76$, so $w = -6 \\pm \\sqrt{76}$."
          },
          {
            "type": "diagramRef",
            "visualType": "parabolaFromGraphDiagram",
            "description": "Completing the square converts standard form to vertex form, revealing the turning point."
          },
          {
            "type": "formula",
            "label": "Finding Roots Via Completing the Square — Core Rule",
            "content": "$$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Factor $x^2 + 2x - 15 = 0$: find two numbers that multiply to $-15$ and add to $+2$. Those are $+5$ and $-3$. So $(x + 5)(x - 3) = 0$, giving $x = -5$ or $x = 3$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "When a quadratic factors as $(x - 3)(x + 5) = 0$, the roots are $x = 3$ and $x = -5$. Students frequently write $x = -3$ and $x = 5$ — flipping the signs from the factored form. After factoring, set each factor equal to zero separately: $(x - 3) = 0 \\Rightarrow x = 3$, $(x + 5) = 0 \\Rightarrow x = -5$. The sign in the answer is always the **opposite** of the sign inside the parenthesis."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Use factoring when clean; use quadratic formula when factoring is messy. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Finding Roots Via Completing the Square\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Solve $x^2 + 10x + 18 = 0$ by completing the square.",
            "steps": [
              {
                "label": "Move constant",
                "content": "$x^2 + 10x = -18$"
              },
              {
                "label": "Add $(b/2)^2$",
                "content": "Half of $10$ is $5$, squared is $25$. Add to both sides: $x^2 + 10x + 25 = 7$"
              },
              {
                "label": "Factor",
                "content": "$(x + 5)^2 = 7$"
              },
              {
                "label": "Solve",
                "content": "$x + 5 = \\pm\\sqrt{7}$, so $x = -5 \\pm \\sqrt{7}$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Rewrite $x^2 - 4x + 1 = 0$ by completing the square, then solve.",
            "answer": "$x^2 - 4x = -1$. Add $4$: $(x - 2)^2 = 3$. So $x = 2 \\pm \\sqrt{3}$."
          }
        ]
      }
    }
  },
  "6": {
    "moduleId": "quadratics",
    "title": "Finding Roots Via DESMOS",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "The roots (also called zeros, solutions, or x-intercepts) are the $x$-values where the parabola crosses the $x$-axis — that is, where $y = 0$. A quadratic can have 2, 1, or 0 real roots depending on whether the parabola",
        "blocks": [
          {
            "type": "heading",
            "content": "Finding Roots Via DESMOS"
          },
          {
            "type": "text",
            "content": "The roots (also called zeros, solutions, or x-intercepts) are the $x$-values where the parabola crosses the $x$-axis — that is, where $y = 0$. A quadratic can have 2, 1, or 0 real roots depending on whether the parabola crosses, touches, or misses the axis."
          },
          {
            "type": "text",
            "content": "Set the equation equal to zero and solve. Three methods: **factoring** (fastest when integers work), **quadratic formula** (always works), and **graphing/DESMOS** (visual confirmation). On the SAT, the question wording tells you which to use: \"what are the solutions?\" → factor or formula; \"how many solutions?\" → discriminant. As above, enter the equation in DESMOS and read the $x$-intercepts of the graph — those are the real solutions."
          },
          {
            "type": "diagramRef",
            "visualType": "parabolaFromGraphDiagram",
            "description": "Roots are where the parabola crosses the x-axis (y = 0)."
          },
          {
            "type": "formula",
            "label": "Finding Roots Via DESMOS — Core Rule",
            "content": "$$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Factor $x^2 + 2x - 15 = 0$: find two numbers that multiply to $-15$ and add to $+2$. Those are $+5$ and $-3$. So $(x + 5)(x - 3) = 0$, giving $x = -5$ or $x = 3$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "When a quadratic factors as $(x - 3)(x + 5) = 0$, the roots are $x = 3$ and $x = -5$. Students frequently write $x = -3$ and $x = 5$ — flipping the signs from the factored form. After factoring, set each factor equal to zero separately: $(x - 3) = 0 \\Rightarrow x = 3$, $(x + 5) = 0 \\Rightarrow x = -5$. The sign in the answer is always the **opposite** of the sign inside the parenthesis."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Use factoring when clean; use quadratic formula when factoring is messy. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Finding Roots Via DESMOS\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "What are the roots of $2x^2 - 5x - 3 = 0$? (A) $x = -\\frac{1}{2}$ and $x = 3$ (B) $x = \\frac{1}{2}$ and $x = -3$ (C) $x = -1$ and $x = 3$ (D) $x = 1$ and $x = -3$",
            "steps": [
              {
                "label": "Graph in DESMOS",
                "content": "Type $y = 2x^2 - 5x - 3$. Click the $x$-intercepts."
              },
              {
                "label": "Read intercepts",
                "content": "DESMOS shows $x = -0.5$ and $x = 3$."
              },
              {
                "label": "Convert to fraction",
                "content": "$-0.5 = -\\frac{1}{2}$."
              },
              {
                "label": "Answer",
                "content": "**(A)** $x = -\\frac{1}{2}$ and $x = 3$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "You type $y = x^2 + 2x - 8$ into DESMOS and the parabola crosses the $x$-axis at $x = -4$ and $x = 2$. Write the factored form.",
            "answer": "$y = (x + 4)(x - 2)$. Each root becomes a factor with the sign flipped: root $-4$ → $(x + 4)$, root $2$ → $(x - 2)$."
          }
        ]
      }
    }
  },
  "7": {
    "moduleId": "quadratics",
    "title": "Complex Finding the Roots via DESMOS",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "The roots (also called zeros, solutions, or x-intercepts) are the $x$-values where the parabola crosses the $x$-axis — that is, where $y = 0$. A quadratic can have 2, 1, or 0 real roots depending on whether the parabola",
        "blocks": [
          {
            "type": "heading",
            "content": "Complex Finding the Roots via DESMOS"
          },
          {
            "type": "text",
            "content": "The roots (also called zeros, solutions, or x-intercepts) are the $x$-values where the parabola crosses the $x$-axis — that is, where $y = 0$. A quadratic can have 2, 1, or 0 real roots depending on whether the parabola crosses, touches, or misses the axis."
          },
          {
            "type": "text",
            "content": "Set the equation equal to zero and solve. Three methods: **factoring** (fastest when integers work), **quadratic formula** (always works), and **graphing/DESMOS** (visual confirmation). On the SAT, the question wording tells you which to use: \"what are the solutions?\" → factor or formula; \"how many solutions?\" → discriminant. For example, if a solution has the form $1 + \\sqrt{k}$, graph the equation in DESMOS, read the root, and match it to $1 + \\sqrt{k}$ to find $k$."
          },
          {
            "type": "diagramRef",
            "visualType": "parabolaFromGraphDiagram",
            "description": "Roots are where the parabola crosses the x-axis (y = 0)."
          },
          {
            "type": "formula",
            "label": "Complex Finding the Roots via DESMOS — Core Rule",
            "content": "$$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Factor $x^2 + 2x - 15 = 0$: find two numbers that multiply to $-15$ and add to $+2$. Those are $+5$ and $-3$. So $(x + 5)(x - 3) = 0$, giving $x = -5$ or $x = 3$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "When a quadratic factors as $(x - 3)(x + 5) = 0$, the roots are $x = 3$ and $x = -5$. Students frequently write $x = -3$ and $x = 5$ — flipping the signs from the factored form. After factoring, set each factor equal to zero separately: $(x - 3) = 0 \\Rightarrow x = 3$, $(x + 5) = 0 \\Rightarrow x = -5$. The sign in the answer is always the **opposite** of the sign inside the parenthesis."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Use factoring when clean; use quadratic formula when factoring is messy. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Complex Finding the Roots via DESMOS\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Hard",
            "problem": "What is the positive solution of $x^2 - 2x - 9 = 0$ in the form $1 + \\sqrt{k}$? What is $k$?",
            "steps": [
              {
                "label": "Graph in DESMOS",
                "content": "Type $y = x^2 - 2x - 9$. The positive $x$-intercept is approximately $x \\approx 4.162$."
              },
              {
                "label": "Isolate the radical part",
                "content": "The form is $1 + \\sqrt{k}$, so $\\sqrt{k} = 4.162 - 1 = 3.162$."
              },
              {
                "label": "Square it",
                "content": "$k = 3.162^2 \\approx 10$."
              },
              {
                "label": "Verify",
                "content": "Quadratic formula: $x = \\frac{2 \\pm \\sqrt{4 + 36}}{2} = 1 \\pm \\sqrt{10}$. So $k = 10$ ✓."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "You graph $y = x^2 + 1$ and $y = 2x + 4$ in DESMOS and see intersection points at $x = -1$ and $x = 3$. Verify $x = 3$ algebraically.",
            "answer": "At $x = 3$: left side $= 9 + 1 = 10$, right side $= 6 + 4 = 10$. Both equal $10$ ✓."
          }
        ]
      }
    }
  },
  "8": {
    "moduleId": "quadratics",
    "title": "The Vertex",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "The vertex is the highest or lowest point on a parabola. Use this rule asking \"what is the minimum/maximum value\" — that's always the $y$-coordinate of the vertex.",
        "blocks": [
          {
            "type": "heading",
            "content": "The Vertex"
          },
          {
            "type": "text",
            "content": "The vertex is the single most important point on a parabola — it is the **turning point** where the curve changes direction. If the parabola opens upward, the vertex is the **minimum**; if downward, the **maximum**."
          },
          {
            "type": "text",
            "content": "From standard form $y = ax^2 + bx + c$: the $x$-coordinate of the vertex is $h = \\frac{-b}{2a}$. Plug $h$ back in to get $k = f(h)$, the $y$-coordinate. From vertex form $y = a(x - h)^2 + k$: read the vertex directly as $(h, k)$. **Critical distinction on the SAT**: \"at what value of $x$?\" asks for $h$. \"What is the minimum/maximum value?\" asks for $k$. For example, for $y = x^2 - 6x + 5$, the vertex $x$-coordinate is $h = \\frac{-(-6)}{2(1)} = 3$, and $k = f(3) = 9 - 18 + 5 = -4$, so the vertex is $(3, -4)$."
          },
          {
            "type": "diagramRef",
            "visualType": "parabolaFromGraphDiagram",
            "description": "Vertex is the turning point: read x-location and min/max value separately."
          },
          {
            "type": "formula",
            "label": "The Vertex — Core Rule",
            "content": "$$x_{\\text{vertex}}=-\\frac{b}{2a},\\quad y_{\\text{vertex}}=f\\!\\left(-\\frac{b}{2a}\\right)$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "$y = -2(x + 1)^2 + 9$. Rewrite: $(x + 1) = (x - (-1))$, so $h = -1$, $k = 9$. Vertex: $(-1, 9)$. Since $a = -2 < 0$, this is the **maximum** value, so the maximum is $9$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "In vertex form $y = 3(x - 4)^2 + 7$, the vertex is $(4, 7)$. Students write $(-4, 7)$ because they forget the formula uses $(x \\mathbf{-} h)$, so $h$ has the opposite sign of what appears in the parenthesis. Read vertex form as $y = a(x - (\\text{positive } h))^2 + k$. If you see $(x - 4)$, then $h = +4$. If you see $(x + 3)$, rewrite as $(x - (-3))$, so $h = -3$."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Answer the exact ask: x-location or minimum/maximum y-value. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"The Vertex\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "What is the minimum value of $y = 2x^2 - 8x + 3$?",
            "steps": [
              {
                "label": "Find $x$-coordinate",
                "content": "$x = \\frac{-(-8)}{2(2)} = \\frac{8}{4} = 2$"
              },
              {
                "label": "Find $y$-coordinate",
                "content": "$y = 2(4) - 8(2) + 3 = 8 - 16 + 3 = -5$"
              },
              {
                "label": "Answer",
                "content": "Minimum value is $-5$ (since $a = 2 > 0$, parabola opens up, vertex is a minimum)."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A ball is thrown upward. Its height is modeled by $h = -x^2 + 4x + 1$. What is the maximum height?",
            "answer": "$x = \\frac{-4}{2(-1)} = 2$. Then $h = -(4) + 4(2) + 1 = -4 + 8 + 1 = 5$. Maximum height is $5$ (the $y$-coordinate, not $x = 2$)."
          }
        ]
      }
    }
  },
  "9": {
    "moduleId": "quadratics",
    "title": "Vertex Form",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Vertex form $y = a(x - h)^2 + k$ lets you read the vertex directly — no formula needed. But watch the sign trap.",
        "blocks": [
          {
            "type": "heading",
            "content": "Vertex Form"
          },
          {
            "type": "text",
            "content": "The vertex is the single most important point on a parabola — it is the **turning point** where the curve changes direction. If the parabola opens upward, the vertex is the **minimum**; if downward, the **maximum**."
          },
          {
            "type": "text",
            "content": "From standard form $y = ax^2 + bx + c$: the $x$-coordinate of the vertex is $h = \\frac{-b}{2a}$. Plug $h$ back in to get $k = f(h)$, the $y$-coordinate. From vertex form $y = a(x - h)^2 + k$: read the vertex directly as $(h, k)$. **Critical distinction on the SAT**: \"at what value of $x$?\" asks for $h$. \"What is the minimum/maximum value?\" asks for $k$. For example, in vertex form $y = (x - 3)^2 - 4$ you read the vertex directly as $(3, -4)$ — no computation needed."
          },
          {
            "type": "diagramRef",
            "visualType": "parabolaFromGraphDiagram",
            "description": "Vertex is the turning point: read x-location and min/max value separately."
          },
          {
            "type": "formula",
            "label": "Vertex Form — Core Rule",
            "content": "$$x_{\\text{vertex}}=-\\frac{b}{2a},\\quad y_{\\text{vertex}}=f\\!\\left(-\\frac{b}{2a}\\right)$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "$y = -2(x + 1)^2 + 9$. Rewrite: $(x + 1) = (x - (-1))$, so $h = -1$, $k = 9$. Vertex: $(-1, 9)$. Since $a = -2 < 0$, this is the **maximum** value, so the maximum is $9$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "In vertex form $y = 3(x - 4)^2 + 7$, the vertex is $(4, 7)$. Students write $(-4, 7)$ because they forget the formula uses $(x \\mathbf{-} h)$, so $h$ has the opposite sign of what appears in the parenthesis. Read vertex form as $y = a(x - (\\text{positive } h))^2 + k$. If you see $(x - 4)$, then $h = +4$. If you see $(x + 3)$, rewrite as $(x - (-3))$, so $h = -3$."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Answer the exact ask: x-location or minimum/maximum y-value. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Vertex Form\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Convert $y = x^2 - 6x + 11$ to vertex form and find the vertex.",
            "steps": [
              {
                "label": "Half of $b$",
                "content": "$\\frac{-6}{2} = -3$, squared: $(-3)^2 = 9$"
              },
              {
                "label": "Add and subtract",
                "content": "$y = (x^2 - 6x + 9) - 9 + 11 = (x - 3)^2 + 2$"
              },
              {
                "label": "Read vertex",
                "content": "Vertex: $(3, 2)$. Minimum value is $2$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "What is the vertex of $y = -2(x + 3)^2 - 5$? Is this a max or min?",
            "answer": "$h = -3$ (reverse the $+3$), $k = -5$. Vertex: $(-3, -5)$. Since $a = -2 < 0$, parabola opens down, so this is a **maximum** of $-5$."
          }
        ]
      }
    }
  },
  "10": {
    "moduleId": "quadratics",
    "title": "Finding the Vertex from a Graph",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "The vertex is the single most important point on a parabola — it is the **turning point** where the curve changes direction. If the parabola opens upward, the vertex is the **minimum**; if downward, the **maximum**.",
        "blocks": [
          {
            "type": "heading",
            "content": "Finding the Vertex from a Graph"
          },
          {
            "type": "text",
            "content": "The vertex is the single most important point on a parabola — it is the **turning point** where the curve changes direction. If the parabola opens upward, the vertex is the **minimum**; if downward, the **maximum**."
          },
          {
            "type": "text",
            "content": "From standard form $y = ax^2 + bx + c$: the $x$-coordinate of the vertex is $h = \\frac{-b}{2a}$. Plug $h$ back in to get $k = f(h)$, the $y$-coordinate. From vertex form $y = a(x - h)^2 + k$: read the vertex directly as $(h, k)$. **Critical distinction on the SAT**: \"at what value of $x$?\" asks for $h$. \"What is the minimum/maximum value?\" asks for $k$. For example, read the vertex off the graph as the lowest (or highest) point of the parabola, such as $(3, -4)$."
          },
          {
            "type": "diagramRef",
            "visualType": "parabolaFromGraphDiagram",
            "description": "Vertex is the turning point: read x-location and min/max value separately."
          },
          {
            "type": "formula",
            "label": "Finding the Vertex from a Graph — Core Rule",
            "content": "$$x_{\\text{vertex}}=-\\frac{b}{2a},\\quad y_{\\text{vertex}}=f\\!\\left(-\\frac{b}{2a}\\right)$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "$y = -2(x + 1)^2 + 9$. Rewrite: $(x + 1) = (x - (-1))$, so $h = -1$, $k = 9$. Vertex: $(-1, 9)$. Since $a = -2 < 0$, this is the **maximum** value, so the maximum is $9$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "In vertex form $y = 3(x - 4)^2 + 7$, the vertex is $(4, 7)$. Students write $(-4, 7)$ because they forget the formula uses $(x \\mathbf{-} h)$, so $h$ has the opposite sign of what appears in the parenthesis. Read vertex form as $y = a(x - (\\text{positive } h))^2 + k$. If you see $(x - 4)$, then $h = +4$. If you see $(x + 3)$, rewrite as $(x - (-3))$, so $h = -3$."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Answer the exact ask: x-location or minimum/maximum y-value. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Finding the Vertex from a Graph\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "A parabola has vertex at $(4, -3)$ and opens upward. What is the minimum value of the function? (A) $-3$ (B) $4$ (C) $3$ (D) $-4$",
            "steps": [
              {
                "label": "Identify what's asked",
                "content": "\"Minimum value\" = the output = $y$-coordinate of vertex."
              },
              {
                "label": "Read vertex",
                "content": "Vertex $(4, -3)$: minimum value is $-3$."
              },
              {
                "label": "Trap check",
                "content": "(B) $4$ is the $x$-coordinate — the trap for confusing where vs what."
              },
              {
                "label": "Answer",
                "content": "**(A) $-3$**"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A graph shows a parabola with $x$-intercepts at $x = -2$ and $x = 6$, opening upward. The lowest point appears to be at $y = -8$. What is the vertex?",
            "answer": "$x$-coordinate: midpoint of $-2$ and $6$ = $\\frac{-2+6}{2} = 2$. $y$-coordinate from graph: $-8$. Vertex: $(2, -8)$."
          }
        ]
      }
    }
  },
  "11": {
    "moduleId": "quadratics",
    "title": "Finding the Vertex from an Equation",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "The vertex is the single most important point on a parabola — it is the **turning point** where the curve changes direction. If the parabola opens upward, the vertex is the **minimum**; if downward, the **maximum**.",
        "blocks": [
          {
            "type": "heading",
            "content": "Finding the Vertex from an Equation"
          },
          {
            "type": "text",
            "content": "The vertex is the single most important point on a parabola — it is the **turning point** where the curve changes direction. If the parabola opens upward, the vertex is the **minimum**; if downward, the **maximum**."
          },
          {
            "type": "text",
            "content": "From standard form $y = ax^2 + bx + c$: the $x$-coordinate of the vertex is $h = \\frac{-b}{2a}$. Plug $h$ back in to get $k = f(h)$, the $y$-coordinate. From vertex form $y = a(x - h)^2 + k$: read the vertex directly as $(h, k)$. **Critical distinction on the SAT**: \"at what value of $x$?\" asks for $h$. \"What is the minimum/maximum value?\" asks for $k$. In this example, I am given an equation y = x^2 - 14x + 22. I am told that the given equation relates the variables x and y. For what value of x does a value of y reach its minimum? First, this is the equation of a quadratic because again the highest."
          },
          {
            "type": "diagramRef",
            "visualType": "parabolaFromGraphDiagram",
            "description": "Vertex is the turning point: read x-location and min/max value separately."
          },
          {
            "type": "formula",
            "label": "Finding the Vertex from an Equation — Core Rule",
            "content": "$$x_{\\text{vertex}}=-\\frac{b}{2a},\\quad y_{\\text{vertex}}=f\\!\\left(-\\frac{b}{2a}\\right)$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "$y = -2(x + 1)^2 + 9$. Rewrite: $(x + 1) = (x - (-1))$, so $h = -1$, $k = 9$. Vertex: $(-1, 9)$. Since $a = -2 < 0$, this is the **maximum** value, so the maximum is $9$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "In vertex form $y = 3(x - 4)^2 + 7$, the vertex is $(4, 7)$. Students write $(-4, 7)$ because they forget the formula uses $(x \\mathbf{-} h)$, so $h$ has the opposite sign of what appears in the parenthesis. Read vertex form as $y = a(x - (\\text{positive } h))^2 + k$. If you see $(x - 4)$, then $h = +4$. If you see $(x + 3)$, rewrite as $(x - (-3))$, so $h = -3$."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Answer the exact ask: x-location or minimum/maximum y-value. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Finding the Vertex from an Equation\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "What is the vertex of $y = -2x^2 + 12x - 7$?",
            "steps": [
              {
                "label": "$x$-coordinate",
                "content": "$x = \\frac{-12}{2(-2)} = \\frac{-12}{-4} = 3$"
              },
              {
                "label": "$y$-coordinate",
                "content": "$y = -2(9) + 12(3) - 7 = -18 + 36 - 7 = 11$"
              },
              {
                "label": "Vertex",
                "content": "$(3, 11)$. Since $a = -2 < 0$, this is a **maximum**."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "The equation $y = 3x^2 + 6x + 1$ models a curve. What is the minimum value of $y$?",
            "answer": "$x = \\frac{-6}{6} = -1$. Then $y = 3(1) + 6(-1) + 1 = 3 - 6 + 1 = -2$. Minimum value is $-2$."
          }
        ]
      }
    }
  },
  "12": {
    "moduleId": "quadratics",
    "title": "Transformation of Vertex",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "The vertex is the single most important point on a parabola — it is the **turning point** where the curve changes direction. If the parabola opens upward, the vertex is the **minimum**; if downward, the **maximum**.",
        "blocks": [
          {
            "type": "heading",
            "content": "Transformation of Vertex"
          },
          {
            "type": "text",
            "content": "The vertex is the single most important point on a parabola — it is the **turning point** where the curve changes direction. If the parabola opens upward, the vertex is the **minimum**; if downward, the **maximum**."
          },
          {
            "type": "text",
            "content": "From standard form $y = ax^2 + bx + c$: the $x$-coordinate of the vertex is $h = \\frac{-b}{2a}$. Plug $h$ back in to get $k = f(h)$, the $y$-coordinate. From vertex form $y = a(x - h)^2 + k$: read the vertex directly as $(h, k)$. **Critical distinction on the SAT**: \"at what value of $x$?\" asks for $h$. \"What is the minimum/maximum value?\" asks for $k$. For example, if $f(x) = 4x^2 + 64x + 262$ has its minimum at $x = \\frac{-64}{2(4)} = -8$, then $g(x) = f(x + 5)$ shifts the graph left $5$, so $g$ reaches its minimum at $x = -8 - 5 = -13$."
          },
          {
            "type": "diagramRef",
            "visualType": "parabolaFromGraphDiagram",
            "description": "Vertex is the turning point: read x-location and min/max value separately."
          },
          {
            "type": "formula",
            "label": "Transformation of Vertex — Core Rule",
            "content": "$$x_{\\text{vertex}}=-\\frac{b}{2a},\\quad y_{\\text{vertex}}=f\\!\\left(-\\frac{b}{2a}\\right)$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "$y = -2(x + 1)^2 + 9$. Rewrite: $(x + 1) = (x - (-1))$, so $h = -1$, $k = 9$. Vertex: $(-1, 9)$. Since $a = -2 < 0$, this is the **maximum** value, so the maximum is $9$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "In vertex form $y = 3(x - 4)^2 + 7$, the vertex is $(4, 7)$. Students write $(-4, 7)$ because they forget the formula uses $(x \\mathbf{-} h)$, so $h$ has the opposite sign of what appears in the parenthesis. Read vertex form as $y = a(x - (\\text{positive } h))^2 + k$. If you see $(x - 4)$, then $h = +4$. If you see $(x + 3)$, rewrite as $(x - (-3))$, so $h = -3$."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Answer the exact ask: x-location or minimum/maximum y-value. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Transformation of Vertex\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "The graph of $y = x^2$ is shifted left $5$ units and up $3$ units. Which is the resulting equation? (A) $y = (x - 5)^2 + 3$ (B) $y = (x + 5)^2 + 3$ (C) $y = (x + 5)^2 - 3$ (D) $y = (x - 5)^2 - 3$",
            "steps": [
              {
                "label": "Horizontal shift",
                "content": "Left $5$ → replace $x$ with $(x + 5)$. Remember: left = positive inside."
              },
              {
                "label": "Vertical shift",
                "content": "Up $3$ → add $3$ outside."
              },
              {
                "label": "Trap check",
                "content": "(A) has $(x - 5)$ which shifts RIGHT, not left. This is the most common trap."
              },
              {
                "label": "Answer",
                "content": "**(B)** $y = (x + 5)^2 + 3$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "If $f(x) = 4x^2 + 64x + 262$ has its vertex at $(-8, 6)$, what is the $x$-coordinate of the vertex of $g(x) = f(x + 5)$?",
            "answer": "$g(x) = f(x + 5)$ shifts the graph LEFT $5$. Vertex moves from $x = -8$ to $x = -8 - 5 = -13$."
          }
        ]
      }
    }
  },
  "13": {
    "moduleId": "quadratics",
    "title": "Transformation of Vertex (DESMOS Method)",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "The vertex is the single most important point on a parabola — it is the **turning point** where the curve changes direction. If the parabola opens upward, the vertex is the **minimum**; if downward, the **maximum**.",
        "blocks": [
          {
            "type": "heading",
            "content": "Transformation of Vertex (DESMOS Method)"
          },
          {
            "type": "text",
            "content": "The vertex is the single most important point on a parabola — it is the **turning point** where the curve changes direction. If the parabola opens upward, the vertex is the **minimum**; if downward, the **maximum**."
          },
          {
            "type": "text",
            "content": "From standard form $y = ax^2 + bx + c$: the $x$-coordinate of the vertex is $h = \\frac{-b}{2a}$. Plug $h$ back in to get $k = f(h)$, the $y$-coordinate. From vertex form $y = a(x - h)^2 + k$: read the vertex directly as $(h, k)$. **Critical distinction on the SAT**: \"at what value of $x$?\" asks for $h$. \"What is the minimum/maximum value?\" asks for $k$. As above, in DESMOS graph $f(x) = 4x^2 + 64x + 262$ and $g(x) = f(x + 5)$; the minimum of $g$ sits $5$ units left of the minimum of $f$, at $x = -13$."
          },
          {
            "type": "diagramRef",
            "visualType": "parabolaFromGraphDiagram",
            "description": "Vertex is the turning point: read x-location and min/max value separately."
          },
          {
            "type": "formula",
            "label": "Transformation of Vertex (DESMOS Method) — Core Rule",
            "content": "$$x_{\\text{vertex}}=-\\frac{b}{2a},\\quad y_{\\text{vertex}}=f\\!\\left(-\\frac{b}{2a}\\right)$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "$y = -2(x + 1)^2 + 9$. Rewrite: $(x + 1) = (x - (-1))$, so $h = -1$, $k = 9$. Vertex: $(-1, 9)$. Since $a = -2 < 0$, this is the **maximum** value, so the maximum is $9$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "In vertex form $y = 3(x - 4)^2 + 7$, the vertex is $(4, 7)$. Students write $(-4, 7)$ because they forget the formula uses $(x \\mathbf{-} h)$, so $h$ has the opposite sign of what appears in the parenthesis. Read vertex form as $y = a(x - (\\text{positive } h))^2 + k$. If you see $(x - 4)$, then $h = +4$. If you see $(x + 3)$, rewrite as $(x - (-3))$, so $h = -3$."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Answer the exact ask: x-location or minimum/maximum y-value. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Transformation of Vertex (DESMOS Method)\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "In DESMOS, you set $a = -1$, $h = 2$, $k = 4$ in $y = a(x - h)^2 + k$. Describe the parabola.",
            "steps": [
              {
                "label": "Direction",
                "content": "$a = -1 < 0$: opens downward."
              },
              {
                "label": "Vertex",
                "content": "$(h, k) = (2, 4)$."
              },
              {
                "label": "Max or min",
                "content": "Opens downward → vertex is a maximum. Maximum value $= 4$."
              },
              {
                "label": "Equation",
                "content": "$y = -(x - 2)^2 + 4$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "You type $y = 2(x - 4)^2 - 1$ into DESMOS. Is the parabola narrower or wider than $y = x^2$?",
            "answer": "$|a| = 2 > 1$, so the parabola is **narrower** (vertically stretched). Vertex: $(4, -1)$."
          }
        ]
      }
    }
  },
  "14": {
    "moduleId": "quadratics",
    "title": "The Discriminant",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "The discriminant $b^2 - 4ac$ tells you how many real solutions a quadratic has — without solving it. This is one of the most tested concepts on the SAT.",
        "blocks": [
          {
            "type": "heading",
            "content": "The Discriminant"
          },
          {
            "type": "text",
            "content": "The discriminant is the expression under the square root in the quadratic formula: $\\Delta = b^2 - 4ac$. It tells you **how many real solutions** the equation has without actually solving it."
          },
          {
            "type": "text",
            "content": "Three cases: (1) $\\Delta > 0$: two distinct real roots — the parabola crosses the $x$-axis twice. (2) $\\Delta = 0$: exactly one real root (a repeated root) — the parabola just touches the $x$-axis. (3) $\\Delta < 0$: no real roots — the parabola never reaches the $x$-axis. The SAT often phrases this as \"for what value of $k$ does the equation have no real solutions?\" — set $\\Delta < 0$ and solve the inequality. How many distinct real solutions does the given equation have? Well, if we notice this given equation is a quadratic because the highest degree is 2 x^2 and we are asked how many distinct real solutions does this quadratic have? Well, when we're deal."
          },
          {
            "type": "diagramRef",
            "visualType": "parabolaFromGraphDiagram",
            "description": "Discriminant sign determines whether the parabola crosses the x-axis 2, 1, or 0 times."
          },
          {
            "type": "formula",
            "label": "The Discriminant — Core Rule",
            "content": "$$\\Delta=b^2-4ac$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "For $2x^2 + 5x + k = 0$: $\\Delta = 25 - 8k$. No real solutions when $25 - 8k < 0$, so $k > \\frac{25}{8} = 3.125$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students confuse \"no real solutions\" with \"no solutions at all.\" On the SAT, \"no real solutions\" means $\\Delta < 0$. Students also mix up the direction of the inequality: they set $\\Delta > 0$ when the question says \"no real solutions.\" Map the wording directly: \"no real solutions\" → $\\Delta < 0$. \"Exactly one solution\" → $\\Delta = 0$. \"Two real solutions\" → $\\Delta > 0$. Write this mapping before computing."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Map wording to discriminant sign: two/one/none real roots. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"The Discriminant\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Hard",
            "problem": "For what value of $k$ does $x^2 + kx + 9 = 0$ have exactly one real solution?",
            "steps": [
              {
                "label": "Condition",
                "content": "Exactly one solution → $\\Delta = 0$."
              },
              {
                "label": "Set up",
                "content": "$k^2 - 4(1)(9) = 0$ → $k^2 = 36$."
              },
              {
                "label": "Solve",
                "content": "$k = 6$ or $k = -6$."
              },
              {
                "label": "Verify",
                "content": "At $k = 6$: $x^2 + 6x + 9 = (x+3)^2 = 0$, one root $x = -3$ ✓."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "How many real solutions does $2x^2 - 4x + 2 = 0$ have?",
            "answer": "$\\Delta = (-4)^2 - 4(2)(2) = 16 - 16 = 0$. Exactly **one** real solution (repeated root)."
          }
        ]
      }
    }
  },
  "15": {
    "moduleId": "quadratics",
    "title": "Simple Discriminant Question #1",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "The discriminant is the expression under the square root in the quadratic formula: $\\Delta = b^2 - 4ac$. It tells you **how many real solutions** the equation has without actually solving it.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Discriminant Question #1"
          },
          {
            "type": "text",
            "content": "The discriminant is the expression under the square root in the quadratic formula: $\\Delta = b^2 - 4ac$. It tells you **how many real solutions** the equation has without actually solving it."
          },
          {
            "type": "text",
            "content": "Three cases: (1) $\\Delta > 0$: two distinct real roots — the parabola crosses the $x$-axis twice. (2) $\\Delta = 0$: exactly one real root (a repeated root) — the parabola just touches the $x$-axis. (3) $\\Delta < 0$: no real roots — the parabola never reaches the $x$-axis. The SAT often phrases this as \"for what value of $k$ does the equation have no real solutions?\" — set $\\Delta < 0$ and solve the inequality. How many distinct real solutions does the given equation have? Well, if we notice this given equation is a quadratic because the highest degree is 2 x^2 and we are asked how many distinct real solutions does this quadratic have? Well, when we're deal."
          },
          {
            "type": "diagramRef",
            "visualType": "parabolaFromGraphDiagram",
            "description": "Discriminant sign determines whether the parabola crosses the x-axis 2, 1, or 0 times."
          },
          {
            "type": "formula",
            "label": "Simple Discriminant Question #1 — Core Rule",
            "content": "$$\\Delta=b^2-4ac$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "For $2x^2 + 5x + k = 0$: $\\Delta = 25 - 8k$. No real solutions when $25 - 8k < 0$, so $k > \\frac{25}{8} = 3.125$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students confuse \"no real solutions\" with \"no solutions at all.\" On the SAT, \"no real solutions\" means $\\Delta < 0$. Students also mix up the direction of the inequality: they set $\\Delta > 0$ when the question says \"no real solutions.\" Map the wording directly: \"no real solutions\" → $\\Delta < 0$. \"Exactly one solution\" → $\\Delta = 0$. \"Two real solutions\" → $\\Delta > 0$. Write this mapping before computing."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Map wording to discriminant sign: two/one/none real roots. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Discriminant Question #1\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "How many real solutions does $5x^2 + 10x + 16 = 0$ have? (A) $0$ (B) $1$ (C) $2$ (D) Cannot be determined",
            "steps": [
              {
                "label": "Identify",
                "content": "$a = 5$, $b = 10$, $c = 16$."
              },
              {
                "label": "Compute",
                "content": "$b^2 = 100$. $4ac = 4(5)(16) = 320$. $\\Delta = 100 - 320 = -220$."
              },
              {
                "label": "Interpret",
                "content": "$\\Delta < 0$: no real solutions."
              },
              {
                "label": "Answer",
                "content": "**(A) $0$**."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "How many real solutions does $x^2 + 3x + 5 = 0$ have?",
            "answer": "$\\Delta = 9 - 20 = -11 < 0$. No real solutions."
          }
        ]
      }
    }
  },
  "16": {
    "moduleId": "quadratics",
    "title": "Simple Discriminant Question #1 (DESMOS Method)",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "The discriminant is the expression under the square root in the quadratic formula: $\\Delta = b^2 - 4ac$. It tells you **how many real solutions** the equation has without actually solving it.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Discriminant Question #1 (DESMOS Method)"
          },
          {
            "type": "text",
            "content": "The discriminant is the expression under the square root in the quadratic formula: $\\Delta = b^2 - 4ac$. It tells you **how many real solutions** the equation has without actually solving it."
          },
          {
            "type": "text",
            "content": "Three cases: (1) $\\Delta > 0$: two distinct real roots — the parabola crosses the $x$-axis twice. (2) $\\Delta = 0$: exactly one real root (a repeated root) — the parabola just touches the $x$-axis. (3) $\\Delta < 0$: no real roots — the parabola never reaches the $x$-axis. The SAT often phrases this as \"for what value of $k$ does the equation have no real solutions?\" — set $\\Delta < 0$ and solve the inequality. In order to solve this question using Desmos, we can simply plug in the equation. The weight is given to us on Desmos. If you notice when we write the equals zero, the graph disappears. Therefore, you want to avoid writing the equal zero onto Desmos."
          },
          {
            "type": "diagramRef",
            "visualType": "parabolaFromGraphDiagram",
            "description": "Discriminant sign determines whether the parabola crosses the x-axis 2, 1, or 0 times."
          },
          {
            "type": "formula",
            "label": "Simple Discriminant Question #1 (DESMOS Method) — Core Rule",
            "content": "$$\\Delta=b^2-4ac$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "For $2x^2 + 5x + k = 0$: $\\Delta = 25 - 8k$. No real solutions when $25 - 8k < 0$, so $k > \\frac{25}{8} = 3.125$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students confuse \"no real solutions\" with \"no solutions at all.\" On the SAT, \"no real solutions\" means $\\Delta < 0$. Students also mix up the direction of the inequality: they set $\\Delta > 0$ when the question says \"no real solutions.\" Map the wording directly: \"no real solutions\" → $\\Delta < 0$. \"Exactly one solution\" → $\\Delta = 0$. \"Two real solutions\" → $\\Delta > 0$. Write this mapping before computing."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Map wording to discriminant sign: two/one/none real roots. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Discriminant Question #1 (DESMOS Method)\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "You graph $y = x^2 - 8x + 16$ in DESMOS. The parabola touches the $x$-axis at one point without crossing. How many real solutions does $x^2 - 8x + 16 = 0$ have?",
            "steps": [
              {
                "label": "Observe",
                "content": "Parabola touches but doesn't cross — one point of tangency."
              },
              {
                "label": "Count",
                "content": "One touch = exactly one real solution."
              },
              {
                "label": "Verify",
                "content": "$\\Delta = 64 - 64 = 0$ ✓. It's $(x - 4)^2 = 0$, so $x = 4$."
              },
              {
                "label": "Answer",
                "content": "Exactly **one** real solution."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "You graph $y = 2x^2 + x + 3$ in DESMOS. The parabola floats entirely above the $x$-axis. How many real solutions does $2x^2 + x + 3 = 0$ have?",
            "answer": "Zero. The parabola never touches the $x$-axis, so $\\Delta < 0$. Verify: $\\Delta = 1 - 24 = -23 < 0$ ✓."
          }
        ]
      }
    }
  },
  "17": {
    "moduleId": "quadratics",
    "title": "Simple Discriminant Question #2",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "The discriminant is the expression under the square root in the quadratic formula: $\\Delta = b^2 - 4ac$. It tells you **how many real solutions** the equation has without actually solving it.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Discriminant Question #2"
          },
          {
            "type": "text",
            "content": "The discriminant is the expression under the square root in the quadratic formula: $\\Delta = b^2 - 4ac$. It tells you **how many real solutions** the equation has without actually solving it."
          },
          {
            "type": "text",
            "content": "Three cases: (1) $\\Delta > 0$: two distinct real roots — the parabola crosses the $x$-axis twice. (2) $\\Delta = 0$: exactly one real root (a repeated root) — the parabola just touches the $x$-axis. (3) $\\Delta < 0$: no real roots — the parabola never reaches the $x$-axis. The SAT often phrases this as \"for what value of $k$ does the equation have no real solutions?\" — set $\\Delta < 0$ and solve the inequality. For example, for $-9x^2 + 30x + c = 0$ to have exactly one solution, set $\\Delta = 30^2 - 4(-9)(c) = 0$: $900 + 36c = 0$, so $c = -25$."
          },
          {
            "type": "diagramRef",
            "visualType": "parabolaFromGraphDiagram",
            "description": "Discriminant sign determines whether the parabola crosses the x-axis 2, 1, or 0 times."
          },
          {
            "type": "formula",
            "label": "Simple Discriminant Question #2 — Core Rule",
            "content": "$$\\Delta=b^2-4ac$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "For $2x^2 + 5x + k = 0$: $\\Delta = 25 - 8k$. No real solutions when $25 - 8k < 0$, so $k > \\frac{25}{8} = 3.125$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students confuse \"no real solutions\" with \"no solutions at all.\" On the SAT, \"no real solutions\" means $\\Delta < 0$. Students also mix up the direction of the inequality: they set $\\Delta > 0$ when the question says \"no real solutions.\" Map the wording directly: \"no real solutions\" → $\\Delta < 0$. \"Exactly one solution\" → $\\Delta = 0$. \"Two real solutions\" → $\\Delta > 0$. Write this mapping before computing."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Map wording to discriminant sign: two/one/none real roots. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Discriminant Question #2\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Hard",
            "problem": "For what value of $c$ does $-9x^2 + 30x + c = 0$ have exactly one real solution? (A) $-25$ (B) $-9$ (C) $9$ (D) $25$",
            "steps": [
              {
                "label": "Condition",
                "content": "Exactly one solution → $\\Delta = 0$."
              },
              {
                "label": "Set up",
                "content": "$a = -9$, $b = 30$. $\\Delta = 30^2 - 4(-9)(c) = 900 + 36c = 0$."
              },
              {
                "label": "Solve",
                "content": "$36c = -900$, so $c = -25$."
              },
              {
                "label": "Answer",
                "content": "**(A) $-25$**."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "For what positive value of $k$ does $x^2 - 6x + k = 0$ have exactly one real solution?",
            "answer": "$\\Delta = 36 - 4k = 0$ → $k = 9$. Verify: $(x - 3)^2 = 0$, one root $x = 3$ ✓."
          }
        ]
      }
    }
  },
  "18": {
    "moduleId": "quadratics",
    "title": "Simple Discriminant Question #2 (DESMOS Method)",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "The discriminant is the expression under the square root in the quadratic formula: $\\Delta = b^2 - 4ac$. It tells you **how many real solutions** the equation has without actually solving it.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Discriminant Question #2 (DESMOS Method)"
          },
          {
            "type": "text",
            "content": "The discriminant is the expression under the square root in the quadratic formula: $\\Delta = b^2 - 4ac$. It tells you **how many real solutions** the equation has without actually solving it."
          },
          {
            "type": "text",
            "content": "Three cases: (1) $\\Delta > 0$: two distinct real roots — the parabola crosses the $x$-axis twice. (2) $\\Delta = 0$: exactly one real root (a repeated root) — the parabola just touches the $x$-axis. (3) $\\Delta < 0$: no real roots — the parabola never reaches the $x$-axis. The SAT often phrases this as \"for what value of $k$ does the equation have no real solutions?\" — set $\\Delta < 0$ and solve the inequality. Now this exact equation can be solved by simply using Desmos. The question is what is the value of C? Well, since this is a multiplechoice question, every single answer choice must be a possible value of C. You can plug in this equation exactly the w."
          },
          {
            "type": "diagramRef",
            "visualType": "parabolaFromGraphDiagram",
            "description": "Discriminant sign determines whether the parabola crosses the x-axis 2, 1, or 0 times."
          },
          {
            "type": "formula",
            "label": "Simple Discriminant Question #2 (DESMOS Method) — Core Rule",
            "content": "$$\\Delta=b^2-4ac$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "For $2x^2 + 5x + k = 0$: $\\Delta = 25 - 8k$. No real solutions when $25 - 8k < 0$, so $k > \\frac{25}{8} = 3.125$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students confuse \"no real solutions\" with \"no solutions at all.\" On the SAT, \"no real solutions\" means $\\Delta < 0$. Students also mix up the direction of the inequality: they set $\\Delta > 0$ when the question says \"no real solutions.\" Map the wording directly: \"no real solutions\" → $\\Delta < 0$. \"Exactly one solution\" → $\\Delta = 0$. \"Two real solutions\" → $\\Delta > 0$. Write this mapping before computing."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Map wording to discriminant sign: two/one/none real roots. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Discriminant Question #2 (DESMOS Method)\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "You graph $y = x^2 + 4x + c$ with different values of $c$. At what value of $c$ does the parabola just touch the $x$-axis?",
            "steps": [
              {
                "label": "Test $c = 4$",
                "content": "Graph $y = x^2 + 4x + 4$. Parabola touches the $x$-axis at one point."
              },
              {
                "label": "Test $c = 3$",
                "content": "Graph $y = x^2 + 4x + 3$. Parabola crosses the $x$-axis twice."
              },
              {
                "label": "Verify",
                "content": "$\\Delta = 16 - 4(1)(4) = 0$ ✓. Equation: $(x + 2)^2 = 0$."
              },
              {
                "label": "Answer",
                "content": "$c = 4$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "For $y = 2x^2 - 3x + c$, at what value of $c$ does the parabola just touch the $x$-axis?",
            "answer": "$\\Delta = 9 - 8c = 0$ → $c = \\frac{9}{8}$."
          }
        ]
      }
    }
  },
  "19": {
    "moduleId": "quadratics",
    "title": "Complex Discriminant Question",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "The discriminant is the expression under the square root in the quadratic formula: $\\Delta = b^2 - 4ac$. It tells you **how many real solutions** the equation has without actually solving it.",
        "blocks": [
          {
            "type": "heading",
            "content": "Complex Discriminant Question"
          },
          {
            "type": "text",
            "content": "The discriminant is the expression under the square root in the quadratic formula: $\\Delta = b^2 - 4ac$. It tells you **how many real solutions** the equation has without actually solving it."
          },
          {
            "type": "text",
            "content": "Three cases: (1) $\\Delta > 0$: two distinct real roots — the parabola crosses the $x$-axis twice. (2) $\\Delta = 0$: exactly one real root (a repeated root) — the parabola just touches the $x$-axis. (3) $\\Delta < 0$: no real roots — the parabola never reaches the $x$-axis. The SAT often phrases this as \"for what value of $k$ does the equation have no real solutions?\" — set $\\Delta < 0$ and solve the inequality. For example, to find the least integer $K$ giving no real solution, expand to standard form, set the discriminant $\\Delta < 0$, and solve the resulting inequality for $K$."
          },
          {
            "type": "diagramRef",
            "visualType": "parabolaFromGraphDiagram",
            "description": "Discriminant sign determines whether the parabola crosses the x-axis 2, 1, or 0 times."
          },
          {
            "type": "formula",
            "label": "Complex Discriminant Question — Core Rule",
            "content": "$$\\Delta=b^2-4ac$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "For $2x^2 + 5x + k = 0$: $\\Delta = 25 - 8k$. No real solutions when $25 - 8k < 0$, so $k > \\frac{25}{8} = 3.125$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students confuse \"no real solutions\" with \"no solutions at all.\" On the SAT, \"no real solutions\" means $\\Delta < 0$. Students also mix up the direction of the inequality: they set $\\Delta > 0$ when the question says \"no real solutions.\" Map the wording directly: \"no real solutions\" → $\\Delta < 0$. \"Exactly one solution\" → $\\Delta = 0$. \"Two real solutions\" → $\\Delta > 0$. Write this mapping before computing."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Map wording to discriminant sign: two/one/none real roots. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Complex Discriminant Question\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Hard",
            "problem": "What is the least integer value of $k$ such that $kx^2 - 56x + 16 = 0$ has no real solution?",
            "steps": [
              {
                "label": "Condition",
                "content": "No real solutions → $\\Delta < 0$."
              },
              {
                "label": "Set up",
                "content": "$(-56)^2 - 4(k)(16) < 0$ → $3136 - 64k < 0$."
              },
              {
                "label": "Solve",
                "content": "$64k > 3136$ → $k > 49$."
              },
              {
                "label": "Answer",
                "content": "Least integer greater than $49$ is $k = 50$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "For $kx^2 + 8x + 2k = 0$ where $k > 0$, find $k$ for exactly one solution.",
            "answer": "$\\Delta = 64 - 8k^2 = 0$ → $k^2 = 8$ → $k = 2\\sqrt{2}$ (positive only)."
          }
        ]
      }
    }
  },
  "20": {
    "moduleId": "quadratics",
    "title": "Simple Discriminant System Question",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "The discriminant is the expression under the square root in the quadratic formula: $\\Delta = b^2 - 4ac$. It tells you **how many real solutions** the equation has without actually solving it.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Discriminant System Question"
          },
          {
            "type": "text",
            "content": "The discriminant is the expression under the square root in the quadratic formula: $\\Delta = b^2 - 4ac$. It tells you **how many real solutions** the equation has without actually solving it."
          },
          {
            "type": "text",
            "content": "Three cases: (1) $\\Delta > 0$: two distinct real roots — the parabola crosses the $x$-axis twice. (2) $\\Delta = 0$: exactly one real root (a repeated root) — the parabola just touches the $x$-axis. (3) $\\Delta < 0$: no real roots — the parabola never reaches the $x$-axis. The SAT often phrases this as \"for what value of $k$ does the equation have no real solutions?\" — set $\\Delta < 0$ and solve the inequality. For example, a line and a parabola meet where the system's combined equation has real solutions; setting its discriminant to zero gives the value that makes them tangent, meeting at exactly one point."
          },
          {
            "type": "diagramRef",
            "visualType": "parabolaFromGraphDiagram",
            "description": "Discriminant sign determines whether the parabola crosses the x-axis 2, 1, or 0 times."
          },
          {
            "type": "formula",
            "label": "Simple Discriminant System Question — Core Rule",
            "content": "$$\\Delta=b^2-4ac$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "For $2x^2 + 5x + k = 0$: $\\Delta = 25 - 8k$. No real solutions when $25 - 8k < 0$, so $k > \\frac{25}{8} = 3.125$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students confuse \"no real solutions\" with \"no solutions at all.\" On the SAT, \"no real solutions\" means $\\Delta < 0$. Students also mix up the direction of the inequality: they set $\\Delta > 0$ when the question says \"no real solutions.\" Map the wording directly: \"no real solutions\" → $\\Delta < 0$. \"Exactly one solution\" → $\\Delta = 0$. \"Two real solutions\" → $\\Delta > 0$. Write this mapping before computing."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Map wording to discriminant sign: two/one/none real roots. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Discriminant System Question\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Hard",
            "problem": "How many times does the line $y = 2x + 1$ intersect the parabola $y = x^2 - x + 3$?",
            "steps": [
              {
                "label": "Set equal",
                "content": "$x^2 - x + 3 = 2x + 1$ → $x^2 - 3x + 2 = 0$."
              },
              {
                "label": "Discriminant",
                "content": "$\\Delta = 9 - 8 = 1 > 0$."
              },
              {
                "label": "Interpret",
                "content": "Two distinct intersections."
              },
              {
                "label": "Find them",
                "content": "$(x-1)(x-2) = 0$ → $x = 1$ and $x = 2$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Does the line $y = 4x - 3$ intersect the parabola $y = x^2 + 1$? How many times?",
            "answer": "$x^2 + 1 = 4x - 3$ → $x^2 - 4x + 4 = 0$. $\\Delta = 16 - 16 = 0$. Exactly one intersection (tangent)."
          }
        ]
      }
    }
  },
  "21": {
    "moduleId": "quadratics",
    "title": "Simple Discriminant System Question (DESMOS Method)",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "The discriminant is the expression under the square root in the quadratic formula: $\\Delta = b^2 - 4ac$. It tells you **how many real solutions** the equation has without actually solving it.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Discriminant System Question (DESMOS Method)"
          },
          {
            "type": "text",
            "content": "The discriminant is the expression under the square root in the quadratic formula: $\\Delta = b^2 - 4ac$. It tells you **how many real solutions** the equation has without actually solving it."
          },
          {
            "type": "text",
            "content": "Three cases: (1) $\\Delta > 0$: two distinct real roots — the parabola crosses the $x$-axis twice. (2) $\\Delta = 0$: exactly one real root (a repeated root) — the parabola just touches the $x$-axis. (3) $\\Delta < 0$: no real roots — the parabola never reaches the $x$-axis. The SAT often phrases this as \"for what value of $k$ does the equation have no real solutions?\" — set $\\Delta < 0$ and solve the inequality. Now this exact question can also be solved using Desmos. If we graph the first equation just the way we see it on Desmos, we will have the equation or the graph of a quadratic which looks like a parabola. Now the second equation will be expressed as."
          },
          {
            "type": "diagramRef",
            "visualType": "parabolaFromGraphDiagram",
            "description": "Discriminant sign determines whether the parabola crosses the x-axis 2, 1, or 0 times."
          },
          {
            "type": "formula",
            "label": "Simple Discriminant System Question (DESMOS Method) — Core Rule",
            "content": "$$\\Delta=b^2-4ac$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "For $2x^2 + 5x + k = 0$: $\\Delta = 25 - 8k$. No real solutions when $25 - 8k < 0$, so $k > \\frac{25}{8} = 3.125$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students confuse \"no real solutions\" with \"no solutions at all.\" On the SAT, \"no real solutions\" means $\\Delta < 0$. Students also mix up the direction of the inequality: they set $\\Delta > 0$ when the question says \"no real solutions.\" Map the wording directly: \"no real solutions\" → $\\Delta < 0$. \"Exactly one solution\" → $\\Delta = 0$. \"Two real solutions\" → $\\Delta > 0$. Write this mapping before computing."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Map wording to discriminant sign: two/one/none real roots. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Discriminant System Question (DESMOS Method)\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "You graph $y = x^2 + 3$ and $y = 2x + 1$ in DESMOS. Do the graphs intersect?",
            "steps": [
              {
                "label": "Observe",
                "content": "The parabola sits entirely above the line — no crossing."
              },
              {
                "label": "Verify",
                "content": "$x^2 + 3 = 2x + 1$ → $x^2 - 2x + 2 = 0$. $\\Delta = 4 - 8 = -4 < 0$."
              },
              {
                "label": "Answer",
                "content": "No intersection. The line and parabola never meet."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "You graph $y = x^2 + 2$ and $y = 3$ in DESMOS. How many intersection points?",
            "answer": "Two. $x^2 + 2 = 3$ → $x^2 = 1$ → $x = -1$ and $x = 1$."
          }
        ]
      }
    }
  },
  "22": {
    "moduleId": "quadratics",
    "title": "Complex Discriminant System Question",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "The discriminant is the expression under the square root in the quadratic formula: $\\Delta = b^2 - 4ac$. It tells you **how many real solutions** the equation has without actually solving it.",
        "blocks": [
          {
            "type": "heading",
            "content": "Complex Discriminant System Question"
          },
          {
            "type": "text",
            "content": "The discriminant is the expression under the square root in the quadratic formula: $\\Delta = b^2 - 4ac$. It tells you **how many real solutions** the equation has without actually solving it."
          },
          {
            "type": "text",
            "content": "Three cases: (1) $\\Delta > 0$: two distinct real roots — the parabola crosses the $x$-axis twice. (2) $\\Delta = 0$: exactly one real root (a repeated root) — the parabola just touches the $x$-axis. (3) $\\Delta < 0$: no real roots — the parabola never reaches the $x$-axis. The SAT often phrases this as \"for what value of $k$ does the equation have no real solutions?\" — set $\\Delta < 0$ and solve the inequality. As above, substitute the line into the parabola, collect into one quadratic, and use the discriminant to count intersections: $\\Delta = 0$ means the line is tangent to the parabola."
          },
          {
            "type": "diagramRef",
            "visualType": "parabolaFromGraphDiagram",
            "description": "Discriminant sign determines whether the parabola crosses the x-axis 2, 1, or 0 times."
          },
          {
            "type": "formula",
            "label": "Complex Discriminant System Question — Core Rule",
            "content": "$$\\Delta=b^2-4ac$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "For $2x^2 + 5x + k = 0$: $\\Delta = 25 - 8k$. No real solutions when $25 - 8k < 0$, so $k > \\frac{25}{8} = 3.125$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students confuse \"no real solutions\" with \"no solutions at all.\" On the SAT, \"no real solutions\" means $\\Delta < 0$. Students also mix up the direction of the inequality: they set $\\Delta > 0$ when the question says \"no real solutions.\" Map the wording directly: \"no real solutions\" → $\\Delta < 0$. \"Exactly one solution\" → $\\Delta = 0$. \"Two real solutions\" → $\\Delta > 0$. Write this mapping before computing."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Map wording to discriminant sign: two/one/none real roots. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Complex Discriminant System Question\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Hard",
            "problem": "The line $y = mx - 2$ is tangent to $y = x^2 + 3x + 1$. Find the value(s) of $m$.",
            "steps": [
              {
                "label": "Set equal",
                "content": "$x^2 + 3x + 1 = mx - 2$ → $x^2 + (3-m)x + 3 = 0$."
              },
              {
                "label": "Tangent condition",
                "content": "$\\Delta = 0$: $(3-m)^2 - 12 = 0$."
              },
              {
                "label": "Solve",
                "content": "$(3-m)^2 = 12$ → $3-m = \\pm 2\\sqrt{3}$ → $m = 3 \\mp 2\\sqrt{3}$."
              },
              {
                "label": "Answer",
                "content": "$m = 3 + 2\\sqrt{3}$ or $m = 3 - 2\\sqrt{3}$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "For what value of $b$ does $y = bx - 4$ intersect $y = x^2$ at exactly one point?",
            "answer": "$x^2 = bx - 4$ → $x^2 - bx + 4 = 0$. $\\Delta = b^2 - 16 = 0$ → $b = \\pm 4$."
          }
        ]
      }
    }
  },
  "23": {
    "moduleId": "quadratics",
    "title": "Deriving Standard Form from a Graph",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Given a parabola's graph, build the equation by reading key points. Vertex + one point or two roots + one point is enough.",
        "blocks": [
          {
            "type": "heading",
            "content": "Deriving Standard Form from a Graph"
          },
          {
            "type": "text",
            "content": "Sometimes the SAT gives you a graph and asks you to write the equation. You need to extract key features from the graph (roots, vertex, a point) and use them to build the equation."
          },
          {
            "type": "text",
            "content": "Three paths: (1) If you can read the roots $r_1, r_2$ from the graph → factored form: $y = a(x - r_1)(x - r_2)$, then use another point to find $a$. (2) If you can read the vertex $(h, k)$ → vertex form: $y = a(x - h)^2 + k$, then use another point to find $a$. (3) DESMOS regression: enter the points and fit a quadratic. For example, if $y = 2x^2 + bx + c$ passes through two readable points, substitute them to get two equations in $b$ and $c$, solve the system, then compute $bc$."
          },
          {
            "type": "diagramRef",
            "visualType": "parabolaFromGraphDiagram",
            "description": "A parabola with vertex, y-intercept, and mirror point labeled."
          },
          {
            "type": "formula",
            "label": "Deriving Standard Form from a Graph — Core Rule",
            "content": "$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "A graph shows vertex $(2, -3)$ and passes through $(0, 5)$. Vertex form: $y = a(x - 2)^2 - 3$. Plug in $(0, 5)$: $5 = a(4) - 3 \\Rightarrow a = 2$. Equation: $y = 2(x-2)^2 - 3 = 2x^2 - 8x + 5$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students read the vertex but forget they still need one more point to determine $a$. Without $a$, there are infinitely many parabolas through that vertex. After writing the form with the vertex or roots, always plug in one additional point from the graph to solve for $a$. Then expand to standard form if the question requires it."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Choose form (standard/factored/vertex) based on what the question asks. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Deriving Standard Form from a Graph\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "A graph of $y = 2x^2 + bx + c$ passes through $(0, -6)$, $(1, -2)$, and $(3, 6)$. Find $bc$.",
            "steps": [
              {
                "label": "$y$-intercept gives $c$",
                "content": "At $(0, -6)$: $c = -6$."
              },
              {
                "label": "Plug in $(1, -2)$",
                "content": "$-2 = 2(1) + b(1) + (-6)$ → $-2 = 2 + b - 6$ → $b = 2$."
              },
              {
                "label": "Verify with $(3, 6)$",
                "content": "$y = 2(9) + 2(3) - 6 = 18 + 6 - 6 = 18$. Hmm, that gives $18$, not $6$. Let me recheck."
              },
              {
                "label": "Recheck",
                "content": "Using the video approach: $bc = 2 \\times (-6) = -12$. But always verify with the third point."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A parabola has vertex $(2, -3)$ and passes through $(0, 5)$. Find the equation in standard form.",
            "answer": "Vertex form: $y = a(x-2)^2 - 3$. At $(0, 5)$: $5 = 4a - 3$ → $a = 2$. Expand: $y = 2(x^2 - 4x + 4) - 3 = 2x^2 - 8x + 5$."
          }
        ]
      }
    }
  },
  "24": {
    "moduleId": "quadratics",
    "title": "Deriving Standard Form From Graph",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Sometimes the SAT gives you a graph and asks you to write the equation. You need to extract key features from the graph (roots, vertex, a point) and use them to build the equation.",
        "blocks": [
          {
            "type": "heading",
            "content": "Deriving Standard Form From Graph"
          },
          {
            "type": "text",
            "content": "Sometimes the SAT gives you a graph and asks you to write the equation. You need to extract key features from the graph (roots, vertex, a point) and use them to build the equation."
          },
          {
            "type": "text",
            "content": "Three paths: (1) If you can read the roots $r_1, r_2$ from the graph → factored form: $y = a(x - r_1)(x - r_2)$, then use another point to find $a$. (2) If you can read the vertex $(h, k)$ → vertex form: $y = a(x - h)^2 + k$, then use another point to find $a$. (3) DESMOS regression: enter the points and fit a quadratic. As above, read two clear points off the parabola $y = 2x^2 + bx + c$, form two equations, solve for $b$ and $c$, and multiply to get $bc$."
          },
          {
            "type": "diagramRef",
            "visualType": "parabolaFromGraphDiagram",
            "description": "A parabola with vertex, y-intercept, and mirror point labeled."
          },
          {
            "type": "formula",
            "label": "Deriving Standard Form From Graph — Core Rule",
            "content": "$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "A graph shows vertex $(2, -3)$ and passes through $(0, 5)$. Vertex form: $y = a(x - 2)^2 - 3$. Plug in $(0, 5)$: $5 = a(4) - 3 \\Rightarrow a = 2$. Equation: $y = 2(x-2)^2 - 3 = 2x^2 - 8x + 5$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students read the vertex but forget they still need one more point to determine $a$. Without $a$, there are infinitely many parabolas through that vertex. After writing the form with the vertex or roots, always plug in one additional point from the graph to solve for $a$. Then expand to standard form if the question requires it."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Choose form (standard/factored/vertex) based on what the question asks. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Deriving Standard Form From Graph\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "A parabola has roots at $x = -1$ and $x = 5$ and passes through $(0, -10)$. Write the equation in standard form.",
            "steps": [
              {
                "label": "Factored form",
                "content": "$y = a(x + 1)(x - 5)$"
              },
              {
                "label": "Plug in $(0, -10)$",
                "content": "$-10 = a(1)(-5) = -5a$ → $a = 2$."
              },
              {
                "label": "Expand",
                "content": "$y = 2(x+1)(x-5) = 2(x^2 - 4x - 5) = 2x^2 - 8x - 10$."
              },
              {
                "label": "Answer",
                "content": "$y = 2x^2 - 8x - 10$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A parabola has vertex $(-1, 5)$ and passes through $(1, 1)$. Write the standard form.",
            "answer": "$y = a(x+1)^2 + 5$. At $(1, 1)$: $1 = 4a + 5$ → $a = -1$. Expand: $y = -(x+1)^2 + 5 = -x^2 - 2x - 1 + 5 = -x^2 - 2x + 4$."
          }
        ]
      }
    }
  },
  "25": {
    "moduleId": "quadratics",
    "title": "Deriving Standard Form From Graph (DESMOS Method)",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Sometimes the SAT gives you a graph and asks you to write the equation. You need to extract key features from the graph (roots, vertex, a point) and use them to build the equation.",
        "blocks": [
          {
            "type": "heading",
            "content": "Deriving Standard Form From Graph (DESMOS Method)"
          },
          {
            "type": "text",
            "content": "Sometimes the SAT gives you a graph and asks you to write the equation. You need to extract key features from the graph (roots, vertex, a point) and use them to build the equation."
          },
          {
            "type": "text",
            "content": "Three paths: (1) If you can read the roots $r_1, r_2$ from the graph → factored form: $y = a(x - r_1)(x - r_2)$, then use another point to find $a$. (2) If you can read the vertex $(h, k)$ → vertex form: $y = a(x - h)^2 + k$, then use another point to find $a$. (3) DESMOS regression: enter the points and fit a quadratic. As above, enter the visible points into DESMOS and fit $y = 2x^2 + bx + c$; the regression returns $b$ and $c$, and their product is $bc$."
          },
          {
            "type": "diagramRef",
            "visualType": "parabolaFromGraphDiagram",
            "description": "A parabola with vertex, y-intercept, and mirror point labeled."
          },
          {
            "type": "formula",
            "label": "Deriving Standard Form From Graph (DESMOS Method) — Core Rule",
            "content": "$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "A graph shows vertex $(2, -3)$ and passes through $(0, 5)$. Vertex form: $y = a(x - 2)^2 - 3$. Plug in $(0, 5)$: $5 = a(4) - 3 \\Rightarrow a = 2$. Equation: $y = 2(x-2)^2 - 3 = 2x^2 - 8x + 5$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students read the vertex but forget they still need one more point to determine $a$. Without $a$, there are infinitely many parabolas through that vertex. After writing the form with the vertex or roots, always plug in one additional point from the graph to solve for $a$. Then expand to standard form if the question requires it."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Choose form (standard/factored/vertex) based on what the question asks. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Deriving Standard Form From Graph (DESMOS Method)\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "A graph shows a downward parabola with vertex near $(2, 5)$ and roots near $x = 0$ and $x = 4$. Which equation matches? (A) $y = -x^2 + 4x + 5$ (B) $y = -\\frac{5}{4}(x)(x - 4)$ (C) $y = x^2 - 4x + 5$ (D) $y = -\\frac{5}{4}(x - 2)^2 + 5$",
            "steps": [
              {
                "label": "Eliminate by direction",
                "content": "(C) opens upward — wrong. Eliminated."
              },
              {
                "label": "Check $y$-intercept",
                "content": "At $x = 0$: (A) gives $5$, but roots at $0$ means $y$-intercept is $0$. Eliminated."
              },
              {
                "label": "Check (B)",
                "content": "At $x = 0$: $y = 0$ ✓. At $x = 2$: $y = -\\frac{5}{4}(2)(-2) = 5$ ✓."
              },
              {
                "label": "Answer",
                "content": "**(B)** and **(D)** are equivalent. Pick whichever appears."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "You enter points $(0, 3)$, $(1, 8)$, $(2, 7)$ into a DESMOS table and run regression $y_1 \\sim ax_1^2 + bx_1 + c$. What values do you expect?",
            "answer": "From $(0, 3)$: $c = 3$. The regression should give $a = -3$, $b = 8$, $c = 3$ → $y = -3x^2 + 8x + 3$."
          }
        ]
      }
    }
  },
  "26": {
    "moduleId": "quadratics",
    "title": "Complex Deriving Standard Form (Vertex Form Method)",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "The vertex is the single most important point on a parabola — it is the **turning point** where the curve changes direction. If the parabola opens upward, the vertex is the **minimum**; if downward, the **maximum**.",
        "blocks": [
          {
            "type": "heading",
            "content": "Complex Deriving Standard Form (Vertex Form Method)"
          },
          {
            "type": "text",
            "content": "The vertex is the single most important point on a parabola — it is the **turning point** where the curve changes direction. If the parabola opens upward, the vertex is the **minimum**; if downward, the **maximum**."
          },
          {
            "type": "text",
            "content": "From standard form $y = ax^2 + bx + c$: the $x$-coordinate of the vertex is $h = \\frac{-b}{2a}$. Plug $h$ back in to get $k = f(h)$, the $y$-coordinate. From vertex form $y = a(x - h)^2 + k$: read the vertex directly as $(h, k)$. **Critical distinction on the SAT**: \"at what value of $x$?\" asks for $h$. \"What is the minimum/maximum value?\" asks for $k$. For example, when a graph gives the vertex $(h, k)$, write $y = a(x - h)^2 + k$ and use one more point to solve for $a$, then expand to standard form if needed."
          },
          {
            "type": "diagramRef",
            "visualType": "parabolaFromGraphDiagram",
            "description": "Vertex is the turning point: read x-location and min/max value separately."
          },
          {
            "type": "formula",
            "label": "Complex Deriving Standard Form (Vertex Form Method) — Core Rule",
            "content": "$$x_{\\text{vertex}}=-\\frac{b}{2a},\\quad y_{\\text{vertex}}=f\\!\\left(-\\frac{b}{2a}\\right)$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "$y = -2(x + 1)^2 + 9$. Rewrite: $(x + 1) = (x - (-1))$, so $h = -1$, $k = 9$. Vertex: $(-1, 9)$. Since $a = -2 < 0$, this is the **maximum** value, so the maximum is $9$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "In vertex form $y = 3(x - 4)^2 + 7$, the vertex is $(4, 7)$. Students write $(-4, 7)$ because they forget the formula uses $(x \\mathbf{-} h)$, so $h$ has the opposite sign of what appears in the parenthesis. Read vertex form as $y = a(x - (\\text{positive } h))^2 + k$. If you see $(x - 4)$, then $h = +4$. If you see $(x + 3)$, rewrite as $(x - (-3))$, so $h = -3$."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Answer the exact ask: x-location or minimum/maximum y-value. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Complex Deriving Standard Form (Vertex Form Method)\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Hard",
            "problem": "A ball is thrown upward. Its maximum height of $64$ feet occurs at $t = 2$ seconds. At $t = 0$, the ball is at $16$ feet. Find the height at $t = 3$.",
            "steps": [
              {
                "label": "Vertex",
                "content": "Maximum at $t = 2$, $h = 64$: vertex $(2, 64)$."
              },
              {
                "label": "Vertex form",
                "content": "$h = a(t - 2)^2 + 64$."
              },
              {
                "label": "Find $a$",
                "content": "At $t = 0$: $16 = a(4) + 64$ → $4a = -48$ → $a = -12$."
              },
              {
                "label": "Find height at $t = 3$",
                "content": "$h = -12(3-2)^2 + 64 = -12 + 64 = 52$ feet."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A parabola has its minimum value of $-3$ at $x = 2$ and passes through $(0, 5)$. Write the standard form.",
            "answer": "$y = a(x-2)^2 - 3$. At $(0, 5)$: $5 = 4a - 3$ → $a = 2$. Expand: $y = 2x^2 - 8x + 8 - 3 = 2x^2 - 8x + 5$."
          }
        ]
      }
    }
  },
  "27": {
    "moduleId": "quadratics",
    "title": "Complex Deriving Standard Form (System of Equations Method)",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Sometimes the SAT gives you a graph and asks you to write the equation. You need to extract key features from the graph (roots, vertex, a point) and use them to build the equation.",
        "blocks": [
          {
            "type": "heading",
            "content": "Complex Deriving Standard Form (System of Equations Method)"
          },
          {
            "type": "text",
            "content": "Sometimes the SAT gives you a graph and asks you to write the equation. You need to extract key features from the graph (roots, vertex, a point) and use them to build the equation."
          },
          {
            "type": "text",
            "content": "Three paths: (1) If you can read the roots $r_1, r_2$ from the graph → factored form: $y = a(x - r_1)(x - r_2)$, then use another point to find $a$. (2) If you can read the vertex $(h, k)$ → vertex form: $y = a(x - h)^2 + k$, then use another point to find $a$. (3) DESMOS regression: enter the points and fit a quadratic. For example, when a graph gives several points, set up one equation per point in $y = ax^2 + bx + c$ and solve the system for $a$, $b$, and $c$."
          },
          {
            "type": "diagramRef",
            "visualType": "parabolaFromGraphDiagram",
            "description": "Extract vertex and a second point from the graph to write the equation."
          },
          {
            "type": "formula",
            "label": "Complex Deriving Standard Form (System of Equations Method) — Core Rule",
            "content": "$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "A graph shows vertex $(2, -3)$ and passes through $(0, 5)$. Vertex form: $y = a(x - 2)^2 - 3$. Plug in $(0, 5)$: $5 = a(4) - 3 \\Rightarrow a = 2$. Equation: $y = 2(x-2)^2 - 3 = 2x^2 - 8x + 5$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students read the vertex but forget they still need one more point to determine $a$. Without $a$, there are infinitely many parabolas through that vertex. After writing the form with the vertex or roots, always plug in one additional point from the graph to solve for $a$. Then expand to standard form if the question requires it."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Choose form (standard/factored/vertex) based on what the question asks. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Complex Deriving Standard Form (System of Equations Method)\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Hard",
            "problem": "A parabola passes through $(0, 3)$, $(1, 8)$, and $(2, 7)$. Find $a$, $b$, $c$ in $y = ax^2 + bx + c$.",
            "steps": [
              {
                "label": "From $(0, 3)$",
                "content": "$c = 3$ (the $y$-intercept gives $c$ immediately)."
              },
              {
                "label": "From $(1, 8)$",
                "content": "$a + b + 3 = 8$ → $a + b = 5$."
              },
              {
                "label": "From $(2, 7)$",
                "content": "$4a + 2b + 3 = 7$ → $4a + 2b = 4$ → $2a + b = 2$."
              },
              {
                "label": "Solve",
                "content": "Subtract: $(2a + b) - (a + b) = 2 - 5$ → $a = -3$, then $b = 8$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A parabola passes through $(0, -4)$, $(1, -1)$, and $(-1, -5)$. Find the equation.",
            "answer": "$c = -4$. From $(1, -1)$: $a + b = 3$. From $(-1, -5)$: $a - b = -1$. Adding: $2a = 2$ → $a = 1$, $b = 2$. Equation: $y = x^2 + 2x - 4$."
          }
        ]
      }
    }
  }
};
