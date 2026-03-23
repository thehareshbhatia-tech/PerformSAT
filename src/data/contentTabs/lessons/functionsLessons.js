export const functionsLessonTabs = {
  "1": {
    "moduleId": "functions",
    "title": "What is a Function?",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "A function is a rule that assigns exactly one output to every input.",
        "blocks": [
          {
            "type": "heading",
            "content": "What is a Function?"
          },
          {
            "type": "text",
            "content": "A function is a rule that assigns exactly one output to each input. Think of it as a machine: you put in a number ($x$), the machine applies a rule, and out comes exactly one result $f(x)$."
          },
          {
            "type": "text",
            "content": "On the SAT, $f(x)$ is NOT \"$f$ times $x$\" — it means \"the output of function $f$ when the input is $x$.\" When the question says \"find $f(3)$,\" it means substitute $x = 3$ into the rule and compute the output. This notation distinction is the single most tested concept in the functions module."
          },
          {
            "type": "formula",
            "label": "What is a Function? — Core Rule",
            "content": "$$(f \\circ g)(x) = f(g(x))$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "If $f(x) = 2x + 1$, then $f(3) = 2(3) + 1 = 7$. If $f(x) = 5$, then $2x + 1 = 5$, so $x = 2$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students see $f(3)$ and multiply $f \\times 3$. Others confuse $f(x) = 5$ (finding the input that gives output $5$) with $f(5)$ (finding the output when input is $5$). Read $f(3)$ as \"plug in $3$ for $x$.\" Read \"$f(x) = 5$\" as \"find the $x$ that makes the output $5$.\" These are opposite directions — input-to-output vs output-to-input."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Translate notation to plain language before solving. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"What is a Function?\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "The function $f$ is defined by the table below. For how many values of $x$ does $f(x) = 5$? | $x$ | $1$ | $2$ | $3$ | $4$ | $5$ | |---|---|---|---|---|---| | $f(x)$ | $5$ | $3$ | $5$ | $7$ | $5$ |",
            "steps": [
              {
                "label": "Identify the task",
                "content": "Find every input whose output equals $5$."
              },
              {
                "label": "Scan outputs",
                "content": "$f(1) = 5$ ✓, $f(2) = 3$ ✗, $f(3) = 5$ ✓, $f(4) = 7$ ✗, $f(5) = 5$ ✓"
              },
              {
                "label": "Count",
                "content": "Three values of $x$ produce $f(x) = 5$: $x = 1, 3, 5$."
              },
              {
                "label": "Answer",
                "content": "$\\boxed{3}$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A relation maps inputs to outputs: $1 \\to 4$, $2 \\to 7$, $3 \\to 4$, $4 \\to 9$. Is this a function? Why or why not?",
            "answer": "Yes. Every input maps to exactly one output. Inputs $1$ and $3$ both produce $4$, but that is allowed — a function fails only when one input gives two different outputs."
          }
        ]
      }
    }
  },
  "2": {
    "moduleId": "functions",
    "title": "Function Notation",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Function notation $f(x)$ names a rule and specifies its input — it is not multiplication.",
        "blocks": [
          {
            "type": "heading",
            "content": "Function Notation"
          },
          {
            "type": "text",
            "content": "Function notation $f(x)$ is just a compact way to name a rule and show what input it takes. The letter $f$ is the name, and the $(x)$ tells you the input variable."
          },
          {
            "type": "text",
            "content": "Multiple notations appear on the SAT: $f(x)$, $g(x)$, $h(t)$. The letter changes but the logic is identical — plug in the value inside the parentheses for every occurrence of the variable in the rule. When you see $g(a + 1)$, replace every $x$ in $g$'s rule with $(a + 1)$."
          },
          {
            "type": "formula",
            "label": "Function Notation — Core Rule",
            "content": "$$(f \\circ g)(x) = f(g(x))$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "$g(x) = x^2 - 4x$. Find $g(3)$: $= (3)^2 - 4(3) = 9 - 12 = -3$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students forget to substitute $(a + 1)$ everywhere $x$ appears. In $g(x) = x^2 + 3x$, $g(a+1) = (a+1)^2 + 3(a+1)$, not $(a+1)^2 + 3x$. Circle every $x$ in the function rule. Replace ALL of them with the new input — not just the first one."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Translate notation to plain language before solving. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Function Notation\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "If $g(x) = x^2 + 2x$, what is $g(a + 1)$?",
            "steps": [
              {
                "label": "Substitute",
                "content": "Replace $x$ with $(a + 1)$: $g(a + 1) = (a + 1)^2 + 2(a + 1)$"
              },
              {
                "label": "Expand",
                "content": "$= a^2 + 2a + 1 + 2a + 2$"
              },
              {
                "label": "Simplify",
                "content": "$= a^2 + 4a + 3$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "If $f(x) = 2x^2 - x + 4$, what is $f(3)$?",
            "answer": "$f(3) = 2(3)^2 - (3) + 4 = 2(9) - 3 + 4 = 18 - 3 + 4 = 19$"
          }
        ]
      }
    }
  },
  "3": {
    "moduleId": "functions",
    "title": "Evaluating Functions",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Evaluating a function means substituting a given value or expression for the input variable and simplifying.",
        "blocks": [
          {
            "type": "heading",
            "content": "Evaluating Functions"
          },
          {
            "type": "text",
            "content": "Evaluating Functions (Fundamentals) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Evaluating Functions (Fundamentals) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Translate notation to plain language before solving."
          },
          {
            "type": "formula",
            "label": "Evaluating Functions — Core Rule",
            "content": "$$(f \\circ g)(x) = f(g(x))$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Evaluating Functions (Fundamentals) problems is input/output swap. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Translate notation to plain language before solving. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Evaluating Functions\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Let $f(x) = 2x - 3$ and $g(x) = x^2 + 1$. Find $g(f(4))$.",
            "steps": [
              {
                "label": "Inner first",
                "content": "$f(4) = 2(4) - 3 = 8 - 3 = 5$"
              },
              {
                "label": "Outer next",
                "content": "$g(5) = (5)^2 + 1 = 25 + 1 = 26$"
              },
              {
                "label": "Answer",
                "content": "$g(f(4)) = 26$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "If $h(x) = 3x - 1$, find the value of $k$ such that $h(k) = 14$.",
            "answer": "$3k - 1 = 14 \\Rightarrow 3k = 15 \\Rightarrow k = 5$. Verify: $h(5) = 3(5) - 1 = 14$ ✓"
          }
        ]
      }
    }
  },
  "4": {
    "moduleId": "functions",
    "title": "Simple Function Example #1",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Direct evaluation: substitute a specific input into a function rule and simplify.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Function Example #1"
          },
          {
            "type": "text",
            "content": "Simple Function Example #1 (Simple Function Problems) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Simple Function Example #1 (Simple Function Problems) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Translate notation to plain language before solving."
          },
          {
            "type": "formula",
            "label": "Simple Function Example #1 — Core Rule",
            "content": "$$(f \\circ g)(x) = f(g(x))$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Simple Function Example #1 (Simple Function Problems) problems is domain restriction missed. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Translate notation to plain language before solving. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Function Example #1\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "If $f(x) = 3x^2 - 5x + 2$, what is $f(-2)$?",
            "steps": [
              {
                "label": "Substitute $-2$ for $x$",
                "content": "$f(-2) = 3(-2)^2 - 5(-2) + 2$"
              },
              {
                "label": "Evaluate exponent",
                "content": "$(-2)^2 = 4$, so $f(-2) = 3(4) - 5(-2) + 2$"
              },
              {
                "label": "Multiply",
                "content": "$= 12 + 10 + 2$"
              },
              {
                "label": "Answer",
                "content": "$f(-2) = 24$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "If $g(x) = x^3 - 2x$, what is $g(3)$?",
            "answer": "$g(3) = (3)^3 - 2(3) = 27 - 6 = 21$"
          }
        ]
      }
    }
  },
  "5": {
    "moduleId": "functions",
    "title": "Simple Function Example #2",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Reverse evaluation: given the output, set the function rule equal to it and solve for the input.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Function Example #2"
          },
          {
            "type": "text",
            "content": "Simple Function Example #2 (Simple Function Problems) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Simple Function Example #2 (Simple Function Problems) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Translate notation to plain language before solving."
          },
          {
            "type": "formula",
            "label": "Simple Function Example #2 — Core Rule",
            "content": "$$(f \\circ g)(x) = f(g(x))$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Simple Function Example #2 (Simple Function Problems) problems is composition order reversed. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Translate notation to plain language before solving. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Function Example #2\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "The function $f$ is defined by $f(x) = 4x - 7$. For what value of $x$ does $f(x) = 10$?",
            "steps": [
              {
                "label": "Set the rule equal to the output",
                "content": "$4x - 7 = 10$"
              },
              {
                "label": "Isolate $x$",
                "content": "$4x = 17$"
              },
              {
                "label": "Divide",
                "content": "$x = \\frac{17}{4}$"
              },
              {
                "label": "Verify",
                "content": "$f\\!\\left(\\frac{17}{4}\\right) = 4\\!\\left(\\frac{17}{4}\\right) - 7 = 17 - 7 = 10$ \\checkmark"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "If $g(x) = x^2 + 5$, for what positive value of $x$ is $g(x) = 30$?",
            "answer": "$x^2 + 5 = 30 \\Rightarrow x^2 = 25 \\Rightarrow x = 5$ (positive value)"
          }
        ]
      }
    }
  },
  "6": {
    "moduleId": "functions",
    "title": "Simple Function Example #3",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Table-based functions: read inputs and outputs directly from a table instead of a formula.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Function Example #3"
          },
          {
            "type": "text",
            "content": "Simple Function Example #3 (Simple Function Problems) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Simple Function Example #3 (Simple Function Problems) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Translate notation to plain language before solving."
          },
          {
            "type": "formula",
            "label": "Simple Function Example #3 — Core Rule",
            "content": "$$(f \\circ g)(x) = f(g(x))$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Simple Function Example #3 (Simple Function Problems) problems is input/output swap. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Translate notation to plain language before solving. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Function Example #3\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "The table defines function $f$: | $x$ | $-1$ | $0$ | $1$ | $2$ | $3$ | |---|---|---|---|---|---| | $f(x)$ | $4$ | $1$ | $0$ | $1$ | $4$ | Find $f(f(2))$.",
            "steps": [
              {
                "label": "Evaluate the inner function",
                "content": "Find $x = 2$ in the input row: $f(2) = 1$."
              },
              {
                "label": "Feed the result back into $f$",
                "content": "Now evaluate $f(1)$: find $x = 1$ in the input row → $f(1) = 0$."
              },
              {
                "label": "Answer",
                "content": "$f(f(2)) = f(1) = 0$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Using the table ($x$: $-1, 0, 1, 2, 3$; $f(x)$: $4, 1, 0, 1, 4$), what is $f(f(1))$?",
            "answer": "Inner: $f(1) = 0$ (from the table). Outer: $f(0) = 1$ (from the table). So $f(f(1)) = 1$."
          }
        ]
      }
    }
  },
  "7": {
    "moduleId": "functions",
    "title": "Simple Function Example #4 (Word Problem)",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Functions in context: the input and output represent real-world quantities, and the question asks you to evaluate or interpret them.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Function Example #4 (Word Problem)"
          },
          {
            "type": "text",
            "content": "Simple Function Example #4 (Word Problem) (Simple Function Problems) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Simple Function Example #4 (Word Problem) (Simple Function Problems) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Translate notation to plain language before solving."
          },
          {
            "type": "formula",
            "label": "Simple Function Example #4 (Word Problem) — Core Rule",
            "content": "$$(f \\circ g)(x) = f(g(x))$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Simple Function Example #4 (Word Problem) (Simple Function Problems) problems is domain restriction missed. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Translate notation to plain language before solving. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Function Example #4 (Word Problem)\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "A plumber charges a flat fee of $\\$75$ plus $\\$40$ per hour. The total cost is modeled by $C(h) = 40h + 75$. How much does a $3$-hour job cost, and what does the number $75$ represent?",
            "steps": [
              {
                "label": "Substitute $h = 3$",
                "content": "$C(3) = 40(3) + 75 = 120 + 75$"
              },
              {
                "label": "Compute",
                "content": "$C(3) = 195$. The $3$-hour job costs $\\$195$."
              },
              {
                "label": "Interpret the constant",
                "content": "$75$ is the value of $C(0)$ — the cost when $h = 0$ hours. It represents the flat fee charged before any hourly work begins."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "The temperature of a cooling liquid is modeled by $T(m) = -3m + 80$, where $T$ is degrees Fahrenheit and $m$ is minutes. What does $-3$ represent?",
            "answer": "$-3$ is the coefficient of $m$: the temperature decreases by $3$ degrees Fahrenheit per minute (rate of change)."
          }
        ]
      }
    }
  },
  "8": {
    "moduleId": "functions",
    "title": "Complex Functions Example #1",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Composition chains two functions: the output of the inner function becomes the input of the outer function.",
        "blocks": [
          {
            "type": "heading",
            "content": "Complex Functions Example #1"
          },
          {
            "type": "text",
            "content": "Complex Functions Example #1 (Complex Function Problems) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Complex Functions Example #1 (Complex Function Problems) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Translate notation to plain language before solving."
          },
          {
            "type": "formula",
            "label": "Complex Functions Example #1 — Core Rule",
            "content": "$$(f \\circ g)(x) = f(g(x))$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Complex Functions Example #1 (Complex Function Problems) problems is composition order reversed. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Translate notation to plain language before solving. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Complex Functions Example #1\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Let $f(x) = x + 4$ and $g(x) = 2x$. What is $f(g(2))$?",
            "steps": [
              {
                "label": "Evaluate the inner function first",
                "content": "$g(2) = 2(2) = 4$"
              },
              {
                "label": "Feed the result into the outer function",
                "content": "$f(4) = 4 + 4 = 8$"
              },
              {
                "label": "Answer",
                "content": "$f(g(2)) = 8$"
              },
              {
                "label": "Verify order matters",
                "content": "Compare: $g(f(2)) = g(6) = 12 \\neq 8$. Reversing the order changes the answer."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "If $f(x) = x + 4$ and $g(x) = 2x$, what is $g(f(5))$?",
            "answer": "Inner: $f(5) = 5 + 4 = 9$. Outer: $g(9) = 2(9) = 18$."
          }
        ]
      }
    }
  },
  "9": {
    "moduleId": "functions",
    "title": "Complex Functions Example #2",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "A piecewise function uses different rules for different intervals of the input.",
        "blocks": [
          {
            "type": "heading",
            "content": "Complex Functions Example #2"
          },
          {
            "type": "text",
            "content": "Complex Functions Example #2 (Complex Function Problems) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Complex Functions Example #2 (Complex Function Problems) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Translate notation to plain language before solving."
          },
          {
            "type": "formula",
            "label": "Complex Functions Example #2 — Core Rule",
            "content": "$$(f \\circ g)(x) = f(g(x))$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Complex Functions Example #2 (Complex Function Problems) problems is input/output swap. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Translate notation to plain language before solving. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Complex Functions Example #2\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Let $f(x) = \\begin{cases} 2x + 1 & \\text{if } x < 3 \\\\ x^2 - 4 & \\text{if } x \\geq 3 \\end{cases}$. Find $f(3) + f(1)$.",
            "steps": [
              {
                "label": "Determine which piece to use for $f(3)$",
                "content": "$3 \\geq 3$, so use the second rule: $f(3) = (3)^2 - 4 = 9 - 4 = 5$."
              },
              {
                "label": "Determine which piece to use for $f(1)$",
                "content": "$1 < 3$, so use the first rule: $f(1) = 2(1) + 1 = 3$."
              },
              {
                "label": "Add",
                "content": "$f(3) + f(1) = 5 + 3 = 8$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "If $g(x) = \\begin{cases} -2x & \\text{if } x < 0 \\\\ x^2 + 1 & \\text{if } x \\geq 0 \\end{cases}$, what is $g(-3) + g(2)$?",
            "answer": "$g(-3)$: $-3 < 0$, use first rule → $-2(-3) = 6$. $g(2)$: $2 \\geq 0$, use second rule → $(2)^2 + 1 = 5$. Sum: $6 + 5 = 11$."
          }
        ]
      }
    }
  },
  "10": {
    "moduleId": "functions",
    "title": "Complex Functions Example #3 (Polynomial)",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "The Remainder Theorem connects polynomial evaluation to division: the remainder of $p(x) \\div (x - a)$ equals $p(a)$.",
        "blocks": [
          {
            "type": "heading",
            "content": "Complex Functions Example #3 (Polynomial)"
          },
          {
            "type": "text",
            "content": "Complex Functions Example #3 (Polynomial) (Complex Function Problems) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Complex Functions Example #3 (Polynomial) (Complex Function Problems) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Translate notation to plain language before solving."
          },
          {
            "type": "formula",
            "label": "Complex Functions Example #3 (Polynomial) — Core Rule",
            "content": "$$(f \\circ g)(x) = f(g(x))$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Complex Functions Example #3 (Polynomial) (Complex Function Problems) problems is domain restriction missed. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Translate notation to plain language before solving. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Complex Functions Example #3 (Polynomial)\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "If $(x + 2)$ is a factor of $p(x) = x^3 + 3x^2 - 4$, find the value of $p(-2)$ and explain why.",
            "steps": [
              {
                "label": "Identify $a$ from the factor",
                "content": "$(x + 2) = (x - (-2))$, so $a = -2$."
              },
              {
                "label": "Apply the Factor Theorem",
                "content": "If $(x - a)$ is a factor, then $p(a) = 0$. Therefore $p(-2) = 0$."
              },
              {
                "label": "Verify by substitution",
                "content": "$p(-2) = (-2)^3 + 3(-2)^2 - 4 = -8 + 12 - 4 = 0$ \\checkmark"
              },
              {
                "label": "Answer",
                "content": "$p(-2) = 0$ because $(x + 2)$ divides $p(x)$ with no remainder."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "What is the remainder when $p(x) = x^3 - 3x + 5$ is divided by $(x + 1)$?",
            "answer": "$x + 1 = 0 \\Rightarrow x = -1$. Evaluate: $p(-1) = (-1)^3 - 3(-1) + 5 = -1 + 3 + 5 = 7$. The remainder is $7$."
          }
        ]
      }
    }
  }
};
