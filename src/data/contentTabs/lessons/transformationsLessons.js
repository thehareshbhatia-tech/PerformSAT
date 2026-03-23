export const transformationsLessonTabs = {
  "1": {
    "moduleId": "transformations",
    "title": "What is a Transformation?",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "A transformation changes the position, size, or orientation of a graph by modifying the function algebraically.",
        "blocks": [
          {
            "type": "heading",
            "content": "What is a Transformation?"
          },
          {
            "type": "text",
            "content": "A transformation changes a function's graph by moving, flipping, or stretching it. On the SAT, translations (shifts) are tested far more than reflections or stretches."
          },
          {
            "type": "text",
            "content": "The general form $g(x) = a \\cdot f(b(x - h)) + k$ encodes all transformations: $h$ shifts horizontally, $k$ shifts vertically, $a$ stretches/reflects vertically, $b$ stretches/reflects horizontally. Read from inside-out: inside changes $x$ (horizontal), outside changes $y$ (vertical)."
          },
          {
            "type": "formula",
            "label": "What is a Transformation? — Core Rule",
            "content": "$$g(x)=a\\,f(b(x-h))+k$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "$f(x) = x^2$. Then $f(x - 2) + 3 = (x-2)^2 + 3$ shifts RIGHT $2$ and UP $3$. Vertex moves from $(0,0)$ to $(2,3)$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students think $f(x - 3)$ shifts LEFT $3$ (it shifts RIGHT). The horizontal direction is counterintuitive — it goes OPPOSITE to the sign. Vertical: $+ k$ → up, $- k$ → down (intuitive). Horizontal: $- h$ → RIGHT, $+ h$ → LEFT (opposite of what you expect)."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Read transformed form from inside-out: inside changes x, outside changes y. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"What is a Transformation?\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "SAT-style Transformations question tied to \"What is a Transformation?\": choose the fastest valid method, avoid the trap answer, and justify your final selection.",
            "steps": [
              {
                "label": "Recognize the SAT pattern",
                "content": "Identify the hidden structure first (module pattern: reflection sign error). Convert wording to a clean algebraic setup before computing."
              },
              {
                "label": "Execute the most efficient method",
                "content": "Apply the core rule directly: $$g(x)=a\\,f(b(x-h))+k$$. Keep signs/units explicit to prevent distractor-level mistakes."
              },
              {
                "label": "Trap audit + answer",
                "content": "Eliminate the most likely trap (reflection sign error), then confirm the final choice matches the question target exactly."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "The point $(4, 7)$ lies on $f$. After a transformation, the corresponding point on $g$ is $(4, -7)$. What transformation was applied? Write $g(x)$ in terms of $f(x)$.",
            "answer": "The $x$-value stayed the same while $y$ changed from $7$ to $-7$ (negated). This is a reflection over the $x$-axis: $g(x) = -f(x)$."
          }
        ]
      }
    }
  },
  "2": {
    "moduleId": "transformations",
    "title": "Vertical Translations (Up & Down)",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Adding a constant outside the function slides the entire graph up or down without changing its shape.",
        "blocks": [
          {
            "type": "heading",
            "content": "Vertical Translations (Up & Down)"
          },
          {
            "type": "text",
            "content": "Vertical translations move the entire graph up or down. Adding a constant OUTSIDE the function moves it up; subtracting moves it down."
          },
          {
            "type": "text",
            "content": "$f(x) + k$ shifts UP $k$ units. $f(x) - k$ shifts DOWN $k$ units. Every $y$-value changes by $k$; $x$-values stay the same. The shape of the graph is unchanged."
          },
          {
            "type": "formula",
            "label": "Vertical Translations (Up & Down) — Core Rule",
            "content": "$$g(x)=f(x)+k\\Rightarrow\\text{up }k,\\quad g(x)=f(x)-k\\Rightarrow\\text{down }k$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "$f(x) = x^2$. $f(x) + 5 = x^2 + 5$ → every point moves UP $5$. Vertex: $(0, 0) → (0, 5)$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students confuse vertical shifts with horizontal shifts. In $f(x) + 3$, the $+3$ is OUTSIDE → vertical shift UP. In $f(x + 3)$, the $+3$ is INSIDE → horizontal shift LEFT. Outside the function → vertical. Inside the function (affecting $x$) → horizontal. Check where the number lives."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Outside constants only move y-values. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Vertical Translations (Up & Down)\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Easy",
            "problem": "The function $f$ is defined by $f(x) = 3x - 2$. The graph of $g$ is the graph of $f$ translated $6$ units up. What is $g(x)$?",
            "steps": [
              {
                "label": "Apply rule",
                "content": "Up $6$ means add $6$ outside: $g(x) = f(x) + 6$."
              },
              {
                "label": "Substitute",
                "content": "$g(x) = (3x - 2) + 6 = 3x + 4$."
              },
              {
                "label": "Answer",
                "content": "$g(x) = 3x + 4$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "The vertex of $f(x) = x^2$ is at $(0, 0)$. After a vertical translation, the vertex is at $(0, -9)$. Write $g(x)$.",
            "answer": "The vertex moved from $y = 0$ to $y = -9$, a shift of $-9$ (down $9$). So $g(x) = x^2 - 9$."
          }
        ]
      }
    }
  },
  "3": {
    "moduleId": "transformations",
    "title": "Horizontal Translations (Left & Right)",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Horizontal translations modify the input of the function and move the graph in the direction opposite to the sign — the most common transformation trap on the SAT.",
        "blocks": [
          {
            "type": "heading",
            "content": "Horizontal Translations (Left & Right)"
          },
          {
            "type": "text",
            "content": "Horizontal translations move the graph left or right. The direction is OPPOSITE to the sign inside the function — this is the most counterintuitive rule in transformations."
          },
          {
            "type": "text",
            "content": "$f(x - h)$ shifts RIGHT $h$ units. $f(x + h)$ shifts LEFT $h$ units. Think of it as: the graph needs to \"compensate\" by moving in the opposite direction to keep the same outputs."
          },
          {
            "type": "formula",
            "label": "Horizontal Translations (Left & Right) — Core Rule",
            "content": "$$g(x)=f(x-h)\\Rightarrow\\text{shift right }h,\\quad g(x)=f(x+h)\\Rightarrow\\text{shift left }h$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "$f(x) = |x|$. $f(x + 2) = |x + 2|$ shifts LEFT $2$. The vertex moves from $(0,0)$ to $(-2, 0)$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students see $f(x + 3)$ and think it shifts right (positive = right). It actually shifts LEFT. This is the #1 transformation error on the SAT. Inside the function: $-h$ → right, $+h$ → left. The sign is OPPOSITE to the direction. Check by plugging in: $f(x - 3)$ at $x = 3$ gives $f(0)$, which is the original graph's value at $0$ — so the graph moved RIGHT."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Inside sign and horizontal shift direction are opposite. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Horizontal Translations (Left & Right)\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "The graph of $y = \\sqrt{x}$ is shifted right $9$ units and down $2$ units. Write the new equation.",
            "steps": [
              {
                "label": "Horizontal shift",
                "content": "Right $9$: replace $x$ with $(x - 9)$ inside → $\\sqrt{x - 9}$."
              },
              {
                "label": "Vertical shift",
                "content": "Down $2$: subtract $2$ outside → $\\sqrt{x - 9} - 2$."
              },
              {
                "label": "Answer",
                "content": "$y = \\sqrt{x - 9} - 2$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "The vertex of $f(x) = (x - 1)^2 + 4$ is at $(1, 4)$. After shifting left $6$ and down $2$, what is $g(x)$ and where is the new vertex?",
            "answer": "Left $6$: replace $x$ with $(x + 6)$ → $((x+6) - 1)^2 + 4 = (x+5)^2 + 4$. Down $2$: subtract $2$ → $g(x) = (x+5)^2 + 2$. New vertex: $(-5, 2)$."
          }
        ]
      }
    }
  },
  "4": {
    "moduleId": "transformations",
    "title": "Transformation Rules Summary",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "A unified reference for every function transformation tested on the Digital SAT.",
        "blocks": [
          {
            "type": "heading",
            "content": "Transformation Rules Summary"
          },
          {
            "type": "text",
            "content": "Transformation Rules Summary (Fundamentals) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Transformation Rules Summary (Fundamentals) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Read transformed form from inside-out: inside changes x, outside changes y."
          },
          {
            "type": "formula",
            "label": "Transformation Rules Summary — Core Rule",
            "content": "$$g(x)=a\\,f(b(x-h))+k$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Transformation Rules Summary (Fundamentals) problems is reflection sign error. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Read transformed form from inside-out: inside changes x, outside changes y. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Transformation Rules Summary\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Hard",
            "problem": "Describe all transformations applied to $f(x)$ to produce $g(x) = -3f(x + 2) - 5$.",
            "steps": [
              {
                "label": "Inside: $x + 2$",
                "content": "$x + 2 = x - (-2)$, so $h = -2$. Horizontal shift **left $2$**."
              },
              {
                "label": "Factor: $3$",
                "content": "$|a| = 3 > 1$: vertical **stretch** by factor $3$."
              },
              {
                "label": "Negative: $-$",
                "content": "$a < 0$: **reflection** over the $x$-axis."
              },
              {
                "label": "Outside: $-5$",
                "content": "$k = -5$: vertical shift **down $5$**."
              },
              {
                "label": "Summary",
                "content": "Left $2$, vertically stretched by $3$, reflected over $x$-axis, down $5$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "The graph of $g$ is obtained by reflecting $f(x) = |x|$ over the $x$-axis and shifting it up $4$. Write $g(x)$ and find $g(3)$.",
            "answer": "Reflect: $-f(x) = -|x|$. Shift up $4$: $g(x) = -|x| + 4$. Evaluate: $g(3) = -|3| + 4 = -3 + 4 = 1$."
          }
        ]
      }
    }
  },
  "5": {
    "moduleId": "transformations",
    "title": "Simple Transformation From Graph Example",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Comparing key points on two graphs reveals a single translation or reflection.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Transformation From Graph Example"
          },
          {
            "type": "text",
            "content": "Simple Transformation From Graph Example (Transformations from Graph) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Simple Transformation From Graph Example (Transformations from Graph) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Read transformed form from inside-out: inside changes x, outside changes y."
          },
          {
            "type": "formula",
            "label": "Simple Transformation From Graph Example — Core Rule",
            "content": "$$g(x)=a\\,f(b(x-h))+k$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Simple Transformation From Graph Example (Transformations from Graph) problems is horizontal shift direction confusion. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Read transformed form from inside-out: inside changes x, outside changes y. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Transformation From Graph Example\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Easy",
            "problem": "The graph shows $f(x) = x^2$ with vertex at $(0, 0)$ and $g$ with vertex at $(0, 5)$. Both parabolas have the same shape and open upward. Express $g$ in terms of $f$.",
            "steps": [
              {
                "label": "Compare vertices",
                "content": "Original: $(0, 0)$. Transformed: $(0, 5)$."
              },
              {
                "label": "Compute displacement",
                "content": "$\\Delta x = 0$, $\\Delta y = 5$. Pure vertical shift up $5$."
              },
              {
                "label": "Write equation",
                "content": "$g(x) = f(x) + 5 = x^2 + 5$."
              },
              {
                "label": "Verify",
                "content": "Second point: $f(1) = 1$, so $g(1)$ should be $6$. $(1)^2 + 5 = 6$. Confirmed."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "The graph shows $f(x) = x^2$ with vertex at $(0, 0)$ and $g$ with vertex at $(0, 5)$. Both parabolas have the same shape and open upward. Express $g$ in terms of $f$.",
            "answer": "Second point: $f(1) = 1$, so $g(1)$ should be $6$. $(1)^2 + 5 = 6$. Confirmed."
          }
        ]
      }
    }
  },
  "6": {
    "moduleId": "transformations",
    "title": "Complex Transformation From Graph Example",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "When two graphs differ by more than a single shift, systematically check for reflections, stretches, and combined translations.",
        "blocks": [
          {
            "type": "heading",
            "content": "Complex Transformation From Graph Example"
          },
          {
            "type": "text",
            "content": "Complex Transformation From Graph Example (Transformations from Graph) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Complex Transformation From Graph Example (Transformations from Graph) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Read transformed form from inside-out: inside changes x, outside changes y."
          },
          {
            "type": "formula",
            "label": "Complex Transformation From Graph Example — Core Rule",
            "content": "$$g(x)=a\\,f(b(x-h))+k$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Complex Transformation From Graph Example (Transformations from Graph) problems is inside vs outside transformation swapped. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Read transformed form from inside-out: inside changes x, outside changes y. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Complex Transformation From Graph Example\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Hard",
            "problem": "$f(x) = x^2$ has vertex at $(0,0)$ and passes through $(1,1)$. The graph of $g$ has vertex at $(2, 3)$ and passes through $(3, 1)$. Both are parabolas. Express $g$ in terms of $f$.",
            "steps": [
              {
                "label": "Check orientation",
                "content": "$f$ opens up (vertex is minimum). At $(3, 1)$, $g$ is $2$ below the vertex at $(2, 3)$ — opens **down**. Reflection present: $a < 0$."
              },
              {
                "label": "Find vertical scale",
                "content": "On $f$: one unit right of vertex → $y = 1$ (height $= 1$). On $g$: one unit right of vertex → $y = 1$ (drop $= 2$ from vertex $y = 3$). Ratio: $\\frac{2}{1} = 2$. With reflection: $a = -2$."
              },
              {
                "label": "Find shifts",
                "content": "Vertex moved from $(0,0)$ to $(2,3)$: right $2$ ($h = 2$), up $3$ ($k = 3$)."
              },
              {
                "label": "Combine",
                "content": "$g(x) = -2f(x - 2) + 3 = -2(x - 2)^2 + 3$."
              },
              {
                "label": "Verify",
                "content": "$g(3) = -2(1)^2 + 3 = -2 + 3 = 1$. Matches the given point."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "$f(x) = x^2$ has vertex at $(0,0)$ and passes through $(1,1)$. The graph of $g$ has vertex at $(2, 3)$ and passes through $(3, 1)$. Both are parabolas. Express $g$ in terms of $f$.",
            "answer": "$g(3) = -2(1)^2 + 3 = -2 + 3 = 1$. Matches the given point."
          }
        ]
      }
    }
  },
  "7": {
    "moduleId": "transformations",
    "title": "Simple Transformation From Table Example #1",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Pairing rows from two tables by equal outputs (for horizontal shifts) or equal inputs (for vertical shifts) reveals a single translation.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Transformation From Table Example #1"
          },
          {
            "type": "text",
            "content": "Simple Transformation From Table Example #1 (Transformations from Table) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Simple Transformation From Table Example #1 (Transformations from Table) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Read transformed form from inside-out: inside changes x, outside changes y."
          },
          {
            "type": "formula",
            "label": "Simple Transformation From Table Example #1 — Core Rule",
            "content": "$$g(x)=a\\,f(b(x-h))+k$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Simple Transformation From Table Example #1 (Transformations from Table) problems is reflection sign error. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Read transformed form from inside-out: inside changes x, outside changes y. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Transformation From Table Example #1\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Given tables: | $x$ | $f(x)$ | | $x$ | $g(x)$ | |---|---|---|---|---| | $0$ | $1$ | | $0$ | $4$ | | $1$ | $4$ | | $1$ | $9$ | | $2$ | $9$ | | $2$ | $16$ | Express $g$ in terms of $f$.",
            "steps": [
              {
                "label": "Match outputs",
                "content": "$g(0) = 4 = f(1)$. $g(1) = 9 = f(2)$. Outputs match at shifted inputs."
              },
              {
                "label": "Compute $\\Delta x$",
                "content": "Output $4$: $f$ at $x = 1$, $g$ at $x = 0$. $\\Delta x = 0 - 1 = -1$. Output $9$: $f$ at $x = 2$, $g$ at $x = 1$. $\\Delta x = 1 - 2 = -1$. Constant."
              },
              {
                "label": "Write transformation",
                "content": "$g(x) = f(x - (-1)) = f(x + 1)$. Horizontal shift **left $1$**."
              },
              {
                "label": "Verify",
                "content": "$g(2) = f(2 + 1) = f(3)$. If $f(x) = (x+1)^2$, then $f(3) = 16 = g(2)$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Given tables: | $x$ | $f(x)$ | | $x$ | $g(x)$ | |---|---|---|---|---| | $0$ | $1$ | | $0$ | $4$ | | $1$ | $4$ | | $1$ | $9$ | | $2$ | $9$ | | $2$ | $16$ | Express $g$ in terms of $f$.",
            "answer": "$g(2) = f(2 + 1) = f(3)$. If $f(x) = (x+1)^2$, then $f(3) = 16 = g(2)$."
          }
        ]
      }
    }
  },
  "8": {
    "moduleId": "transformations",
    "title": "Simple Transformation From Table #1 (DESMOS Method)",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "The built-in DESMOS calculator on the Digital SAT can plot table data as discrete points, making shifts visually obvious.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Transformation From Table #1 (DESMOS Method)"
          },
          {
            "type": "text",
            "content": "Simple Transformation From Table #1 (DESMOS Method) (Transformations from Table) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Simple Transformation From Table #1 (DESMOS Method) (Transformations from Table) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Read transformed form from inside-out: inside changes x, outside changes y."
          },
          {
            "type": "formula",
            "label": "Simple Transformation From Table #1 (DESMOS Method) — Core Rule",
            "content": "$$g(x)=a\\,f(b(x-h))+k$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Simple Transformation From Table #1 (DESMOS Method) (Transformations from Table) problems is horizontal shift direction confusion. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Read transformed form from inside-out: inside changes x, outside changes y. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Transformation From Table #1 (DESMOS Method)\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Tables: $f$: $(0, 2), (1, 5), (2, 10)$. $g$: $(3, 2), (4, 5), (5, 10)$. Use the DESMOS method to find the relationship.",
            "steps": [
              {
                "label": "Enter tables",
                "content": "Table 1: $x = \\{0, 1, 2\\}$, $y = \\{2, 5, 10\\}$. Table 2: $x = \\{3, 4, 5\\}$, $y = \\{2, 5, 10\\}$."
              },
              {
                "label": "Visual observation",
                "content": "Both point sets sit at the same heights. The second set is displaced $3$ units to the right."
              },
              {
                "label": "Formulate",
                "content": "$g(x) = f(x - 3)$: horizontal shift right $3$."
              },
              {
                "label": "Verify",
                "content": "$g(3) = f(3 - 3) = f(0) = 2$. $g(4) = f(1) = 5$. Both match."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Tables: $f$: $(0, 2), (1, 5), (2, 10)$. $g$: $(3, 2), (4, 5), (5, 10)$. Use the DESMOS method to find the relationship.",
            "answer": "$g(3) = f(3 - 3) = f(0) = 2$. $g(4) = f(1) = 5$. Both match."
          }
        ]
      }
    }
  },
  "9": {
    "moduleId": "transformations",
    "title": "Complex Transformation From Table Example",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "When a single horizontal or vertical shift does not fully explain the data, a compound transformation — combining a shift with another shift or a stretch — is present.",
        "blocks": [
          {
            "type": "heading",
            "content": "Complex Transformation From Table Example"
          },
          {
            "type": "text",
            "content": "Complex Transformation From Table Example (Transformations from Table) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Complex Transformation From Table Example (Transformations from Table) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Read transformed form from inside-out: inside changes x, outside changes y."
          },
          {
            "type": "formula",
            "label": "Complex Transformation From Table Example — Core Rule",
            "content": "$$g(x)=a\\,f(b(x-h))+k$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Complex Transformation From Table Example (Transformations from Table) problems is inside vs outside transformation swapped. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Read transformed form from inside-out: inside changes x, outside changes y. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Complex Transformation From Table Example\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Hard",
            "problem": "Given: | $x$ | $f(x)$ | | $x$ | $g(x)$ | |---|---|---|---|---| | $0$ | $1$ | | $2$ | $6$ | | $1$ | $3$ | | $3$ | $8$ | | $2$ | $7$ | | $4$ | $12$ | | $3$ | $13$ | | $5$ | $18$ | Express $g$ in terms of $f$.",
            "steps": [
              {
                "label": "Try output matching",
                "content": "$g(2) = 6$, $g(3) = 8$. Neither $6$ nor $8$ appears in $f$'s output column. Direct matching fails."
              },
              {
                "label": "Try horizontal shift",
                "content": "$g(2)$ vs. $f(0)$: $6$ vs. $1$ (diff $5$). $g(3)$ vs. $f(1)$: $8$ vs. $3$ (diff $5$). $g(4)$ vs. $f(2)$: $12$ vs. $7$ (diff $5$). Constant difference of $5$."
              },
              {
                "label": "Identify components",
                "content": "Horizontal shift: $x_g - x_f = 2$ (right $2$). Vertical shift: residual $= 5$ (up $5$)."
              },
              {
                "label": "Write equation",
                "content": "$g(x) = f(x - 2) + 5$."
              },
              {
                "label": "Verify",
                "content": "$g(5) = f(5 - 2) + 5 = f(3) + 5 = 13 + 5 = 18$. Confirmed."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Given: | $x$ | $f(x)$ | | $x$ | $g(x)$ | |---|---|---|---|---| | $0$ | $1$ | | $2$ | $6$ | | $1$ | $3$ | | $3$ | $8$ | | $2$ | $7$ | | $4$ | $12$ | | $3$ | $13$ | | $5$ | $18$ | Express $g$ in terms of $f$.",
            "answer": "$g(5) = f(5 - 2) + 5 = f(3) + 5 = 13 + 5 = 18$. Confirmed."
          }
        ]
      }
    }
  },
  "10": {
    "moduleId": "transformations",
    "title": "Complex Transformation From Table (DESMOS Method)",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "DESMOS sliders let you visually \"dial in\" multiple transformation parameters simultaneously when table data involves compound changes.",
        "blocks": [
          {
            "type": "heading",
            "content": "Complex Transformation From Table (DESMOS Method)"
          },
          {
            "type": "text",
            "content": "Complex Transformation From Table (DESMOS Method) (Transformations from Table) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Complex Transformation From Table (DESMOS Method) (Transformations from Table) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Read transformed form from inside-out: inside changes x, outside changes y."
          },
          {
            "type": "formula",
            "label": "Complex Transformation From Table (DESMOS Method) — Core Rule",
            "content": "$$g(x)=a\\,f(b(x-h))+k$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Complex Transformation From Table (DESMOS Method) (Transformations from Table) problems is reflection sign error. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Read transformed form from inside-out: inside changes x, outside changes y. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Complex Transformation From Table (DESMOS Method)\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Hard",
            "problem": "Tables: $f$: $(0, 1), (1, 4), (2, 9)$. $g$: $(1, -1), (2, -7), (3, -17)$. Use DESMOS to find $g$ in terms of $f$.",
            "steps": [
              {
                "label": "Enter data",
                "content": "Table 1 ($f$): $\\{(0,1),(1,4),(2,9)\\}$. Table 2 ($g$): $\\{(1,-1),(2,-7),(3,-17)\\}$."
              },
              {
                "label": "Fit $f$",
                "content": "Regression or inspection yields $f(x) = (x+1)^2$. Verify: $f(0) = 1$, $f(1) = 4$, $f(2) = 9$."
              },
              {
                "label": "Adjust sliders",
                "content": "Set $h = 1$ (horizontal alignment). Set $a = -2$ (vertical scale + reflection). Set $k = 1$ (vertical fine-tune). All $g$ points fall on the curve."
              },
              {
                "label": "Write answer",
                "content": "$g(x) = -2f(x - 1) + 1$."
              },
              {
                "label": "Verify",
                "content": "$g(1) = -2f(0) + 1 = -2(1) + 1 = -1$. $g(2) = -2f(1) + 1 = -2(4) + 1 = -7$. Both match."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Tables: $f$: $(0, 1), (1, 4), (2, 9)$. $g$: $(1, -1), (2, -7), (3, -17)$. Use DESMOS to find $g$ in terms of $f$.",
            "answer": "$g(1) = -2f(0) + 1 = -2(1) + 1 = -1$. $g(2) = -2f(1) + 1 = -2(4) + 1 = -7$. Both match."
          }
        ]
      }
    }
  },
  "11": {
    "moduleId": "transformations",
    "title": "Simple Transformation From Expression Example",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "A single algebraic modification to $f(x)$ — adding outside, subtracting inside, or negating — corresponds to exactly one geometric transformation.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Transformation From Expression Example"
          },
          {
            "type": "text",
            "content": "Simple Transformation From Expression Example (Transformations from Expression) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Simple Transformation From Expression Example (Transformations from Expression) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Read transformed form from inside-out: inside changes x, outside changes y."
          },
          {
            "type": "formula",
            "label": "Simple Transformation From Expression Example — Core Rule",
            "content": "$$g(x)=a\\,f(b(x-h))+k$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Simple Transformation From Expression Example (Transformations from Expression) problems is horizontal shift direction confusion. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Read transformed form from inside-out: inside changes x, outside changes y. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Transformation From Expression Example\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Easy",
            "problem": "$f(x) = x^3$ and $g(x) = (x - 5)^3$. Describe the transformation and find $g(6)$.",
            "steps": [
              {
                "label": "Compare",
                "content": "$g(x) = f(x - 5)$. The $-5$ is inside the argument."
              },
              {
                "label": "Identify",
                "content": "Horizontal shift **right $5$**."
              },
              {
                "label": "Evaluate",
                "content": "$g(6) = (6 - 5)^3 = 1^3 = 1$."
              },
              {
                "label": "Cross-check",
                "content": "$f(1) = 1$. Since $g(6) = f(6-5) = f(1) = 1$, the shift is confirmed."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "$f(x) = x^3$ and $g(x) = (x - 5)^3$. Describe the transformation and find $g(6)$.",
            "answer": "$f(1) = 1$. Since $g(6) = f(6-5) = f(1) = 1$, the shift is confirmed."
          }
        ]
      }
    }
  },
  "12": {
    "moduleId": "transformations",
    "title": "Complex Transformation From Expression Example #1",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Multiple modifications in a single expression are decomposed by matching each part to the general form $g(x) = a \\cdot f(b(x - h)) + k$.",
        "blocks": [
          {
            "type": "heading",
            "content": "Complex Transformation From Expression Example #1"
          },
          {
            "type": "text",
            "content": "Complex Transformation From Expression Example #1 (Transformations from Expression) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Complex Transformation From Expression Example #1 (Transformations from Expression) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Read transformed form from inside-out: inside changes x, outside changes y."
          },
          {
            "type": "formula",
            "label": "Complex Transformation From Expression Example #1 — Core Rule",
            "content": "$$g(x)=a\\,f(b(x-h))+k$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Complex Transformation From Expression Example #1 (Transformations from Expression) problems is inside vs outside transformation swapped. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Read transformed form from inside-out: inside changes x, outside changes y. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Complex Transformation From Expression Example #1\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Hard",
            "problem": "Let $f(x) = x^2$. Describe all transformations and write the final equation for $g(x) = -\\frac{1}{2}f(x + 4) - 3$.",
            "steps": [
              {
                "label": "Identify $h$",
                "content": "$x + 4 = x - (-4)$, so $h = -4$. Horizontal shift **left $4$**."
              },
              {
                "label": "Identify $a$",
                "content": "$a = -\\frac{1}{2}$. $|a| = \\frac{1}{2} < 1$: vertical **compression** by factor $\\frac{1}{2}$. Negative sign: **reflection** over $x$-axis."
              },
              {
                "label": "Identify $k$",
                "content": "$k = -3$. Vertical shift **down $3$**."
              },
              {
                "label": "Expand",
                "content": "$g(x) = -\\frac{1}{2}(x + 4)^2 - 3$."
              },
              {
                "label": "Verify at $x = 0$",
                "content": "$g(0) = -\\frac{1}{2}(16) - 3 = -8 - 3 = -11$. Trace: $f(0+4) = 16$, then $-\\frac{1}{2}(16) = -8$, then $-8 - 3 = -11$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Let $f(x) = x^2$. Describe all transformations and write the final equation for $g(x) = -\\frac{1}{2}f(x + 4) - 3$.",
            "answer": "$g(0) = -\\frac{1}{2}(16) - 3 = -8 - 3 = -11$. Trace: $f(0+4) = 16$, then $-\\frac{1}{2}(16) = -8$, then $-8 - 3 = -11$."
          }
        ]
      }
    }
  },
  "13": {
    "moduleId": "transformations",
    "title": "Complex Transformation From Expression Example #2",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Transformations sometimes hide inside expanded polynomials. Completing the square converts standard form back to vertex form, revealing the shifts.",
        "blocks": [
          {
            "type": "heading",
            "content": "Complex Transformation From Expression Example #2"
          },
          {
            "type": "text",
            "content": "Complex Transformation From Expression Example #2 (Transformations from Expression) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Complex Transformation From Expression Example #2 (Transformations from Expression) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Read transformed form from inside-out: inside changes x, outside changes y."
          },
          {
            "type": "formula",
            "label": "Complex Transformation From Expression Example #2 — Core Rule",
            "content": "$$g(x)=a\\,f(b(x-h))+k$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Complex Transformation From Expression Example #2 (Transformations from Expression) problems is reflection sign error. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Read transformed form from inside-out: inside changes x, outside changes y. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Complex Transformation From Expression Example #2\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Hard",
            "problem": "Express $g(x) = -x^2 + 6x - 5$ as a transformation of $f(x) = x^2$.",
            "steps": [
              {
                "label": "Factor out $-1$",
                "content": "$g(x) = -(x^2 - 6x) - 5$."
              },
              {
                "label": "Complete the square",
                "content": "$x^2 - 6x = (x - 3)^2 - 9$. So $g(x) = -((x-3)^2 - 9) - 5 = -(x-3)^2 + 9 - 5 = -(x-3)^2 + 4$."
              },
              {
                "label": "Read transformations",
                "content": "$a = -1$: reflection over $x$-axis. $h = 3$: right $3$. $k = 4$: up $4$."
              },
              {
                "label": "Summary",
                "content": "$g(x) = -f(x - 3) + 4$. Reflect over $x$-axis, shift right $3$, shift up $4$."
              },
              {
                "label": "Verify",
                "content": "$g(3) = -(3-3)^2 + 4 = 4$. Vertex at $(3, 4)$, opening downward. $g(0) = -9 + 4 = -5$, matching the original expression: $-(0) + 0 - 5 = -5$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Express $g(x) = -x^2 + 6x - 5$ as a transformation of $f(x) = x^2$.",
            "answer": "$g(3) = -(3-3)^2 + 4 = 4$. Vertex at $(3, 4)$, opening downward. $g(0) = -9 + 4 = -5$, matching the original expression: $-(0) + 0 - 5 = -5$."
          }
        ]
      }
    }
  },
  "14": {
    "moduleId": "transformations",
    "title": "Difficult Transformations (System of Equations Method)",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "When transformation parameters are unknown, data points on $g$ generate equations that can be solved as a system.",
        "blocks": [
          {
            "type": "heading",
            "content": "Difficult Transformations (System of Equations Method)"
          },
          {
            "type": "text",
            "content": "Difficult Transformations (System of Equations Method) (Difficult Transformations) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Difficult Transformations (System of Equations Method) (Difficult Transformations) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Read transformed form from inside-out: inside changes x, outside changes y."
          },
          {
            "type": "formula",
            "label": "Difficult Transformations (System of Equations Method) — Core Rule",
            "content": "$$g(x)=a\\,f(b(x-h))+k$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Difficult Transformations (System of Equations Method) (Difficult Transformations) problems is horizontal shift direction confusion. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Read transformed form from inside-out: inside changes x, outside changes y. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Difficult Transformations (System of Equations Method)\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Hard",
            "problem": "$f(x) = x^2$. The function $g(x) = a(x - h)^2 + k$ passes through $(1, 7)$ and $(3, 7)$, and its vertex has $y$-coordinate $3$. Find $a$, $h$, and $k$.",
            "steps": [
              {
                "label": "Use symmetry",
                "content": "$g(1) = g(3) = 7$. Axis of symmetry: $x = \\frac{1+3}{2} = 2$. So $h = 2$."
              },
              {
                "label": "Find $k$",
                "content": "Vertex is at $(2, k)$ with $y_{\\text{vertex}} = 3$, so $k = 3$."
              },
              {
                "label": "Find $a$",
                "content": "Use $(1, 7)$: $7 = a(1 - 2)^2 + 3 = a + 3$. So $a = 4$."
              },
              {
                "label": "Verify",
                "content": "$g(3) = 4(3-2)^2 + 3 = 4 + 3 = 7$. Confirmed."
              },
              {
                "label": "Answer",
                "content": "$a = 4$, $h = 2$, $k = 3$. $g(x) = 4(x-2)^2 + 3$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "$f(x) = x^2$. The function $g(x) = a(x - h)^2 + k$ passes through $(1, 7)$ and $(3, 7)$, and its vertex has $y$-coordinate $3$. Find $a$, $h$, and $k$.",
            "answer": "$a = 4$, $h = 2$, $k = 3$. $g(x) = 4(x-2)^2 + 3$."
          }
        ]
      }
    }
  },
  "15": {
    "moduleId": "transformations",
    "title": "Difficult Transformations (Answer Choice Method)",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Testing each answer choice against given data points can be faster than setting up a system of equations — especially when the algebra is messy.",
        "blocks": [
          {
            "type": "heading",
            "content": "Difficult Transformations (Answer Choice Method)"
          },
          {
            "type": "text",
            "content": "Difficult Transformations (Answer Choice Method) (Difficult Transformations) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Difficult Transformations (Answer Choice Method) (Difficult Transformations) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Read transformed form from inside-out: inside changes x, outside changes y."
          },
          {
            "type": "formula",
            "label": "Difficult Transformations (Answer Choice Method) — Core Rule",
            "content": "$$g(x)=a\\,f(b(x-h))+k$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Difficult Transformations (Answer Choice Method) (Difficult Transformations) problems is inside vs outside transformation swapped. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Read transformed form from inside-out: inside changes x, outside changes y. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Difficult Transformations (Answer Choice Method)\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Hard",
            "problem": "$f(x) = x^2$. The graph of $g$ passes through $(1, 5)$ and $(0, 2)$. Which defines $g$? (A) $g(x) = f(x) + 2$ (B) $g(x) = f(x - 1) + 4$ (C) $g(x) = f(x + 1) + 1$ (D) $g(x) = f(x - 1) + 1$",
            "steps": [
              {
                "label": "Test $(0, 2)$",
                "content": "A: $f(0) + 2 = 0 + 2 = 2$. B: $f(-1) + 4 = 1 + 4 = 5 \\neq 2$. C: $f(1) + 1 = 1 + 1 = 2$. D: $f(-1) + 1 = 1 + 1 = 2$."
              },
              {
                "label": "Eliminate",
                "content": "B fails. A, C, D survive."
              },
              {
                "label": "Test $(1, 5)$",
                "content": "A: $f(1) + 2 = 1 + 2 = 3 \\neq 5$. C: $f(2) + 1 = 4 + 1 = 5$. D: $f(0) + 1 = 0 + 1 = 1 \\neq 5$."
              },
              {
                "label": "Eliminate",
                "content": "A and D fail. Only C survives."
              },
              {
                "label": "Answer",
                "content": "**(C)** $g(x) = f(x + 1) + 1 = (x+1)^2 + 1$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "$f(x) = x^2$. The graph of $g$ passes through $(1, 5)$ and $(0, 2)$. Which defines $g$? (A) $g(x) = f(x) + 2$ (B) $g(x) = f(x - 1) + 4$ (C) $g(x) = f(x + 1) + 1$ (D) $g(x) = f(x - 1) + 1$",
            "answer": "**(C)** $g(x) = f(x + 1) + 1 = (x+1)^2 + 1$."
          }
        ]
      }
    }
  }
};
