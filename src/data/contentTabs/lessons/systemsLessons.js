export const systemsLessonTabs = {
  "1": {
    "moduleId": "systems",
    "title": "What is a System of Equations?",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "A system of equations pairs two equations with two unknowns. The solution is the ordered pair that satisfies both equations simultaneously — graphically, the intersection of their lines.",
        "blocks": [
          {
            "type": "heading",
            "content": "What is a System of Equations?"
          },
          {
            "type": "text",
            "content": "A system of equations is two or more equations that share the same variables. The solution is the point (or points) where ALL equations are true simultaneously — graphically, where the lines intersect."
          },
          {
            "type": "text",
            "content": "On the SAT, systems appear in three flavors: (1) **One solution** — the lines cross at exactly one point (different slopes). (2) **No solution** — the lines are parallel (same slope, different intercepts). (3) **Infinitely many solutions** — the lines are identical (same slope AND same intercept). CB tests whether you can classify the system before solving. For example, the system $y = 2x + 1$ and $y = -x + 4$ has different slopes, so the lines cross once — a one-solution system."
          },
          {
            "type": "formula",
            "label": "What is a System of Equations? — Core Rule",
            "content": "$$\\text{No solution} \\Rightarrow \\text{parallel lines},\\ \\text{Infinite} \\Rightarrow \\text{same line}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "$y = 2x + 3$ and $y = 2x - 1$: same slope ($2$), different intercepts ($3 \\neq -1$) → parallel → **no solution**."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students waste time solving for exact $(x, y)$ values when the question only asks \"how many solutions?\" — a classification question that requires comparing slopes, not computing intersection points. Read the question first. If it asks \"how many solutions,\" compare slopes and intercepts immediately. Only compute exact values when the question asks \"what is $x$?\" or \"what is $x + y$?\""
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Classify solution type before computing exact values. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"What is a System of Equations?\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Easy",
            "problem": "Solve the system: $x + y = 10$ and $x - y = 4$.",
            "steps": [
              {
                "label": "Add the equations",
                "content": "$(x + y) + (x - y) = 10 + 4$ gives $2x = 14$, so $x = 7$"
              },
              {
                "label": "Back-substitute",
                "content": "$7 + y = 10$, so $y = 3$"
              },
              {
                "label": "Verify in both",
                "content": "$7 + 3 = 10$ ✓ and $7 - 3 = 4$ ✓"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Is $(3, 4)$ a solution to the system $2x + y = 10$ and $x - y = -1$?",
            "answer": "Check Eq. 1: $2(3) + 4 = 10$ ✓. Check Eq. 2: $3 - 4 = -1$ ✓. Yes — $(3, 4)$ satisfies both equations, so it is a solution."
          }
        ]
      }
    }
  },
  "2": {
    "moduleId": "systems",
    "title": "Types of Solutions",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Two lines can cross once (one solution), run parallel (no solution), or overlap completely (infinitely many solutions). The ratio of coefficients determines which case applies.",
        "blocks": [
          {
            "type": "heading",
            "content": "Types of Solutions"
          },
          {
            "type": "text",
            "content": "The number of solutions tells you how the lines relate geometrically. This is one of the most commonly tested system concepts on the SAT."
          },
          {
            "type": "text",
            "content": "Compare the equations in slope-intercept form: Same slope + different intercept = parallel = **no solution**. Same slope + same intercept = same line = **infinitely many**. Different slopes = they must cross somewhere = **exactly one solution**. For standard form $ax + by = c$, compare the ratios $a_1/a_2$, $b_1/b_2$, $c_1/c_2$. For example, $y = 2x + 1$ and $y = 2x - 3$ share the same slope but have different intercepts, so the system has no solution."
          },
          {
            "type": "formula",
            "label": "Types of Solutions — Core Rule",
            "content": "$$\\text{No solution} \\Rightarrow \\text{parallel lines},\\ \\text{Infinite} \\Rightarrow \\text{same line}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "$3x + 6y = 12$ and $x + 2y = 4$: divide first equation by $3$ → $x + 2y = 4$. Same equation! → **infinitely many solutions**."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students confuse \"infinitely many solutions\" with \"no solution.\" Both involve the same slope, but they differ in whether the intercepts also match. Parallel (no solution) = same slope, DIFFERENT intercept. Same line (infinite solutions) = same slope, SAME intercept. Write both conditions down before answering."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Classify solution type before computing exact values. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Types of Solutions\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "For what value of $a$ does $3x - 6y = 9$ and $x - 2y = a$ have infinitely many solutions?",
            "steps": [
              {
                "label": "Find the multiplier",
                "content": "Coefficients: $\\frac{3}{1} = 3$ and $\\frac{-6}{-2} = 3$. The multiplier is $3$."
              },
              {
                "label": "Apply to the constant",
                "content": "For infinite solutions: $9 = 3 \\cdot a$, so $a = 3$."
              },
              {
                "label": "Verify",
                "content": "$x - 2y = 3$ multiplied by $3$ gives $3x - 6y = 9$ ✓. Same line → infinite solutions."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "How many solutions does the system $4x + 6y = 12$ and $2x + 3y = 5$ have?",
            "answer": "Ratios: $\\frac{4}{2} = 2$ and $\\frac{6}{3} = 2$, but $\\frac{12}{5} \\neq 2$. Coefficient ratios match while the constant ratio differs → **no solution** (parallel lines)."
          }
        ]
      }
    }
  },
  "3": {
    "moduleId": "systems",
    "title": "Writing Systems from Word Problems",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "System word problems provide two unknowns and two relationships. Assign a variable to each unknown, translate each relationship into an equation, and the algebra becomes routine.",
        "blocks": [
          {
            "type": "heading",
            "content": "Writing Systems from Word Problems"
          },
          {
            "type": "text",
            "content": "Writing Systems from Word Problems (Setting Up Systems) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Writing Systems from Word Problems (Setting Up Systems) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Classify solution type before computing exact values. For example, if Jay walks at $3$ mph for $W$ hours and runs at $5$ mph for $R$ hours to cover $14$ miles total, the equation is $3W + 5R = 14$ — distance equals rate times time for each leg."
          },
          {
            "type": "formula",
            "label": "Writing Systems from Word Problems — Core Rule",
            "content": "$$\\text{No solution} \\Rightarrow \\text{parallel lines},\\ \\text{Infinite} \\Rightarrow \\text{same line}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Writing Systems from Word Problems (Setting Up Systems) problems is elimination sign mismatch. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Classify solution type before computing exact values. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Writing Systems from Word Problems\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "A store sells pens for \\$2 each and notebooks for \\$5 each. A customer buys 12 items totaling \\$39. How many notebooks were purchased?",
            "steps": [
              {
                "label": "Define variables",
                "content": "Let $p$ = pens, $n$ = notebooks"
              },
              {
                "label": "Count equation",
                "content": "$p + n = 12$"
              },
              {
                "label": "Value equation",
                "content": "$2p + 5n = 39$"
              },
              {
                "label": "Substitute",
                "content": "$p = 12 - n$, so $2(12 - n) + 5n = 39$ → $24 - 2n + 5n = 39$ → $3n = 15$ → $n = 5$"
              },
              {
                "label": "Verify",
                "content": "$p = 7$; revenue = $2(7) + 5(5) = 14 + 25 = 39$ ✓"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "At a concert, adult tickets cost \\$25 and student tickets cost \\$15. A total of 300 tickets were sold for \\$5{,}500. Write the system of equations.",
            "answer": "Let $a$ = adult tickets, $s$ = student tickets. Count: $a + s = 300$. Revenue: $25a + 15s = 5500$."
          }
        ]
      }
    }
  },
  "4": {
    "moduleId": "systems",
    "title": "Deriving System of Equation from Context Example #1",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Mixture problems combine two items at different per-unit rates to reach a known total. Translate the count and value into two equations.",
        "blocks": [
          {
            "type": "heading",
            "content": "Deriving System of Equation from Context Example #1"
          },
          {
            "type": "text",
            "content": "Deriving System of Equation from Context Example #1 (Setting Up Systems) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "As with any context problem, translate each leg into rate times time: walking $3$ mph for $W$ hours and running $5$ mph for $R$ hours to total $14$ miles gives $3W + 5R = 14$."
          },
          {
            "type": "diagramRef",
            "visualType": "parabolaFromGraphDiagram",
            "description": "Extract vertex and a second point from the graph to write the equation."
          },
          {
            "type": "formula",
            "label": "Deriving System of Equation from Context Example #1 — Core Rule",
            "content": "$$\\text{No solution} \\Rightarrow \\text{parallel lines},\\ \\text{Infinite} \\Rightarrow \\text{same line}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Deriving System of Equation from Context Example #1 (Setting Up Systems) problems is infinitely many vs no solution confusion. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Classify solution type before computing exact values. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Deriving System of Equation from Context Example #1\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Tickets to a school play cost \\$5 for students and \\$8 for adults. A total of 200 tickets were sold for \\$1{,}180. How many student tickets were sold?",
            "steps": [
              {
                "label": "Define variables",
                "content": "Let $s$ = student tickets and $a$ = adult tickets."
              },
              {
                "label": "Write the count equation",
                "content": "$s + a = 200$ (total tickets)"
              },
              {
                "label": "Write the value equation",
                "content": "$5s + 8a = 1180$ (total revenue)"
              },
              {
                "label": "Solve by substitution",
                "content": "From the count equation: $a = 200 - s$. Substitute into the value equation: $$5s + 8(200 - s) = 1180$$ $$5s + 1600 - 8s = 1180$$ $$-3s = -420$$ $$s = 140$$"
              },
              {
                "label": "Verify",
                "content": "$a = 200 - 140 = 60$. Check revenue: $5(140) + 8(60) = 700 + 480 = 1180$ ✓. Answer: **140 student tickets**."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A coffee shop mixes Type A beans (\\$8/lb) with Type B beans (\\$14/lb) to create a 30-pound blend costing \\$282. Write the system.",
            "answer": "Let $a$ = pounds of Type A, $b$ = pounds of Type B. Count: $a + b = 30$. Value: $8a + 14b = 282$."
          }
        ]
      }
    }
  },
  "5": {
    "moduleId": "systems",
    "title": "Deriving System of Equation from Context Example #2",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Not every system follows count + value. Comparative constraints (\"twice as many,\" \"the difference is 10\") produce equations directly from relationship phrases.",
        "blocks": [
          {
            "type": "heading",
            "content": "Deriving System of Equation from Context Example #2"
          },
          {
            "type": "text",
            "content": "Deriving System of Equation from Context Example #2 (Setting Up Systems) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Deriving System of Equation from Context Example #2 (Setting Up Systems) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Classify solution type before computing exact values. A teacher is creating an assignment worth 70 points. The assignment will consist of questions worth one point and questions worth three points. Which equation represents this situation where X represents the number of onepoint questions and Y represe."
          },
          {
            "type": "diagramRef",
            "visualType": "parabolaFromGraphDiagram",
            "description": "Extract vertex and a second point from the graph to write the equation."
          },
          {
            "type": "formula",
            "label": "Deriving System of Equation from Context Example #2 — Core Rule",
            "content": "$$\\text{No solution} \\Rightarrow \\text{parallel lines},\\ \\text{Infinite} \\Rightarrow \\text{same line}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Deriving System of Equation from Context Example #2 (Setting Up Systems) problems is substitution arithmetic drift. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Classify solution type before computing exact values. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Deriving System of Equation from Context Example #2\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "A school has 3 times as many students as teachers. The total number of students and teachers is 120. How many teachers are there?",
            "steps": [
              {
                "label": "Define variables",
                "content": "Let $s$ = number of students and $t$ = number of teachers."
              },
              {
                "label": "Write the comparison equation",
                "content": "\"3 times as many students as teachers\" → $s = 3t$"
              },
              {
                "label": "Write the total equation",
                "content": "$s + t = 120$"
              },
              {
                "label": "Substitute",
                "content": "Replace $s$ with $3t$: $$3t + t = 120$$ $$4t = 120$$ $$t = 30$$"
              },
              {
                "label": "Verify",
                "content": "$s = 3(30) = 90$. Check: $90 + 30 = 120$ ✓ and $90 = 3(30)$ ✓. Answer: **30 teachers**."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A factory has two machines. Machine A produces 50 widgets/hour and Machine B produces 30 widgets/hour. They ran a combined 10 hours and made 380 widgets. Write the system and find Machine B's hours.",
            "answer": "Let $a$ = hours for A, $b$ = hours for B. Time: $a + b = 10$. Output: $50a + 30b = 380$. Substitute $a = 10 - b$: $500 - 50b + 30b = 380$ → $-20b = -120$ → $b = 6$ hours."
          }
        ]
      }
    }
  },
  "6": {
    "moduleId": "systems",
    "title": "Solving by Substitution",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Substitution replaces one variable with an expression from the other equation, reducing a two-variable system to a single-variable equation.",
        "blocks": [
          {
            "type": "heading",
            "content": "Solving by Substitution"
          },
          {
            "type": "text",
            "content": "Substitution works by solving one equation for one variable, then plugging that expression into the other equation. It reduces a two-variable problem to a one-variable problem."
          },
          {
            "type": "text",
            "content": "Step 1: Pick the equation where one variable is easiest to isolate. Step 2: Solve for that variable. Step 3: Substitute into the other equation. Step 4: Solve and back-substitute. Best when one equation already has a variable isolated (e.g., $y = 3x + 1$). For example, given $y = -3x$ and $4x + y = 15$, substitute the first into the second: $4x + (-3x) = 15$, so $x = 15$."
          },
          {
            "type": "formula",
            "label": "Solving by Substitution — Core Rule",
            "content": "$$\\text{No solution} \\Rightarrow \\text{parallel lines},\\ \\text{Infinite} \\Rightarrow \\text{same line}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "$y = 2x + 1$ and $3x + y = 11$. Substitute: $3x + (2x + 1) = 11$ → $5x = 10$ → $x = 2$, $y = 5$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students substitute into the SAME equation they solved, getting a tautology like $y = y$ instead of a useful result. Always substitute into the OTHER equation — the one you did NOT rearrange."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Classify solution type before computing exact values. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Solving by Substitution\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "If $x - 3y = 7$ and $2x + y = 0$, what is $x + y$?",
            "steps": [
              {
                "label": "Isolate $x$",
                "content": "From Eq. 1: $x = 7 + 3y$"
              },
              {
                "label": "Substitute into Eq. 2",
                "content": "$2(7 + 3y) + y = 0$ → $14 + 6y + y = 0$ → $7y = -14$ → $y = -2$"
              },
              {
                "label": "Find $x$",
                "content": "$x = 7 + 3(-2) = 7 - 6 = 1$"
              },
              {
                "label": "Answer",
                "content": "$x + y = 1 + (-2) = -1$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Solve by substitution: $y = 4x + 1$ and $3x - 2y = -12$. What is $x$?",
            "answer": "Substitute: $3x - 2(4x + 1) = -12$ → $3x - 8x - 2 = -12$ → $-5x = -10$ → $x = 2$."
          }
        ]
      }
    }
  },
  "7": {
    "moduleId": "systems",
    "title": "Solving System of Equation using Substitution",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Practice applying substitution to an SAT-style system. The coefficient-of-1 signal indicates substitution as the optimal method.",
        "blocks": [
          {
            "type": "heading",
            "content": "Solving System of Equation using Substitution"
          },
          {
            "type": "text",
            "content": "Substitution works by solving one equation for one variable, then plugging that expression into the other equation. It reduces a two-variable problem to a one-variable problem."
          },
          {
            "type": "text",
            "content": "As above, substitute the isolated variable: putting $y = -3x$ into $4x + y = 15$ gives $4x - 3x = 15$, so $x = 15$."
          },
          {
            "type": "formula",
            "label": "Solving System of Equation using Substitution — Core Rule",
            "content": "$$\\text{No solution} \\Rightarrow \\text{parallel lines},\\ \\text{Infinite} \\Rightarrow \\text{same line}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "$y = 2x + 1$ and $3x + y = 11$. Substitute: $3x + (2x + 1) = 11$ → $5x = 10$ → $x = 2$, $y = 5$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students substitute into the SAME equation they solved, getting a tautology like $y = y$ instead of a useful result. Always substitute into the OTHER equation — the one you did NOT rearrange."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Classify solution type before computing exact values. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Solving System of Equation using Substitution\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Solve the system $y = 3x - 1$ and $2x + y = 9$. Which method is best, and what is $x$?",
            "steps": [
              {
                "label": "Choose the method",
                "content": "Since $y$ is already isolated in the first equation, **substitution** is the natural choice — no rearranging needed."
              },
              {
                "label": "Substitute $y = 3x - 1$ into $2x + y = 9$",
                "content": "$$2x + (3x - 1) = 9$$ $$5x - 1 = 9$$ $$5x = 10$$ $$x = 2$$"
              },
              {
                "label": "Find $y$",
                "content": "$y = 3(2) - 1 = 5$"
              },
              {
                "label": "Verify in the second equation",
                "content": "$2(2) + 5 = 4 + 5 = 9$ ✓. Answer: $x = 2$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Solve using substitution: $y = 5x - 3$ and $2x + 3y = 25$. What is $x$?",
            "answer": "Substitute: $2x + 3(5x - 3) = 25$ → $2x + 15x - 9 = 25$ → $17x = 34$ → $x = 2$."
          }
        ]
      }
    }
  },
  "8": {
    "moduleId": "systems",
    "title": "Solving by Elimination",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Elimination stacks two equations and adds (or subtracts) them so one variable cancels. Multiply first when coefficients do not already match.",
        "blocks": [
          {
            "type": "heading",
            "content": "Solving by Elimination"
          },
          {
            "type": "text",
            "content": "Elimination works by adding or subtracting equations to cancel one variable entirely. It is often faster than substitution when both equations are in standard form."
          },
          {
            "type": "text",
            "content": "Step 1: Align equations in $ax + by = c$ form. Step 2: Multiply one or both equations so that one variable has equal (or opposite) coefficients. Step 3: Add or subtract to eliminate that variable. Step 4: Solve for the remaining variable and back-substitute. For example, subtracting $6x + y = 72$ from $24x + y = 48$ eliminates $y$: $18x = -24$, so $x = -\\frac{4}{3}$, and back-substituting gives $y = 80$."
          },
          {
            "type": "formula",
            "label": "Solving by Elimination — Core Rule",
            "content": "$$\\text{No solution} \\Rightarrow \\text{parallel lines},\\ \\text{Infinite} \\Rightarrow \\text{same line}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "$2x + 3y = 7$ and $2x - y = 3$. Same $x$-coefficient, same sign → subtract: $4y = 4$ → $y = 1$, $x = 2$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students add equations when they should subtract (or vice versa), doubling a variable instead of canceling it. This happens when the matching coefficients have the same sign. Same sign → subtract. Opposite signs → add. Check after combining: one variable should be completely gone."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Classify solution type before computing exact values. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Solving by Elimination\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Solve: $2x + 3y = 12$ and $4x - 3y = 6$.",
            "steps": [
              {
                "label": "Observe",
                "content": "The $y$-coefficients $+3$ and $-3$ are already opposites."
              },
              {
                "label": "Add",
                "content": "$(2x + 3y) + (4x - 3y) = 12 + 6$ → $6x = 18$ → $x = 3$"
              },
              {
                "label": "Back-substitute",
                "content": "$2(3) + 3y = 12$ → $3y = 6$ → $y = 2$"
              },
              {
                "label": "Verify",
                "content": "$4(3) - 3(2) = 12 - 6 = 6$ ✓"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "If $7x + 3y = 29$ and $3x + 7y = 21$, what is $x + y$?",
            "answer": "Add the equations: $(7x + 3y) + (3x + 7y) = 29 + 21$ → $10x + 10y = 50$ → $10(x + y) = 50$ → $x + y = 5$."
          }
        ]
      }
    }
  },
  "9": {
    "moduleId": "systems",
    "title": "Solving System of Equations using Elimination",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Practice elimination when coefficients require multipliers. The LCM strategy minimizes arithmetic effort.",
        "blocks": [
          {
            "type": "heading",
            "content": "Solving System of Equations using Elimination"
          },
          {
            "type": "text",
            "content": "Elimination works by adding or subtracting equations to cancel one variable entirely. It is often faster than substitution when both equations are in standard form."
          },
          {
            "type": "text",
            "content": "As above, subtract to eliminate a variable: $24x + y = 48$ minus $6x + y = 72$ gives $18x = -24$, so $x = -\\frac{4}{3}$ and $y = 80$."
          },
          {
            "type": "formula",
            "label": "Solving System of Equations using Elimination — Core Rule",
            "content": "$$\\text{No solution} \\Rightarrow \\text{parallel lines},\\ \\text{Infinite} \\Rightarrow \\text{same line}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "$2x + 3y = 7$ and $2x - y = 3$. Same $x$-coefficient, same sign → subtract: $4y = 4$ → $y = 1$, $x = 2$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students add equations when they should subtract (or vice versa), doubling a variable instead of canceling it. This happens when the matching coefficients have the same sign. Same sign → subtract. Opposite signs → add. Check after combining: one variable should be completely gone."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Classify solution type before computing exact values. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Solving System of Equations using Elimination\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Solve the system $3x + 4y = 10$ and $5x + 2y = 8$ using elimination.",
            "steps": [
              {
                "label": "Choose which variable to eliminate",
                "content": "The $y$-coefficients ($4$ and $2$) have a small LCM of $4$. Multiply Eq. 2 by $-2$ to create opposite $y$-coefficients."
              },
              {
                "label": "Scale Eq. 2",
                "content": "$-2(5x + 2y) = -2(8)$ gives $-10x - 4y = -16$. Remember: multiply **both** sides."
              },
              {
                "label": "Add the equations",
                "content": "$(3x + 4y) + (-10x - 4y) = 10 + (-16)$ $$-7x = -6$$ $$x = \\frac{6}{7}$$"
              },
              {
                "label": "Back-substitute for $y$",
                "content": "$5\\!\\left(\\frac{6}{7}\\right) + 2y = 8$ → $\\frac{30}{7} + 2y = 8$ → $2y = \\frac{26}{7}$ → $y = \\frac{13}{7}$"
              },
              {
                "label": "Verify in Eq. 1",
                "content": "$3\\!\\left(\\frac{6}{7}\\right) + 4\\!\\left(\\frac{13}{7}\\right) = \\frac{18}{7} + \\frac{52}{7} = \\frac{70}{7} = 10$ ✓"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Solve using elimination: $2x + 5y = 21$ and $3x - 5y = 4$. What is $x$?",
            "answer": "The $y$-coefficients are $+5$ and $-5$ (already opposite). Add: $(2x + 5y) + (3x - 5y) = 21 + 4$ → $5x = 25$ → $x = 5$."
          }
        ]
      }
    }
  },
  "10": {
    "moduleId": "systems",
    "title": "Solving with DESMOS",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "The built-in DESMOS graphing calculator on the Digital SAT solves systems visually: type both equations, find the intersection, read the coordinates.",
        "blocks": [
          {
            "type": "heading",
            "content": "Solving with DESMOS"
          },
          {
            "type": "text",
            "content": "Solving with DESMOS (DESMOS Method) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Solving with DESMOS (DESMOS Method) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Classify solution type before computing exact values. Now any system of equations question can simply be solved by using Desmos. We can simply graph the equations just the way they are given to us on Desmos. And the point of intersection is the solution to our system of equations which in this case the."
          },
          {
            "type": "formula",
            "label": "Solving with DESMOS — Core Rule",
            "content": "$$\\text{No solution} \\Rightarrow \\text{parallel lines},\\ \\text{Infinite} \\Rightarrow \\text{same line}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Solving with DESMOS (DESMOS Method) problems is infinitely many vs no solution confusion. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Classify solution type before computing exact values. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Solving with DESMOS\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Use DESMOS to solve: $\\frac{2}{3}x + y = 8$ and $x - \\frac{1}{2}y = 3$. What is $y$?",
            "steps": [
              {
                "label": "Enter Line 1",
                "content": "Type $(2/3)x + y = 8$ into DESMOS"
              },
              {
                "label": "Enter Line 2",
                "content": "Type $x - (1/2)y = 3$"
              },
              {
                "label": "Read intersection",
                "content": "Click the intersection dot and read the $y$-coordinate"
              },
              {
                "label": "Why DESMOS wins here",
                "content": "Clearing fractions algebraically requires multiplying by $6$ across both equations, then elimination. DESMOS skips all of that."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Solve (by DESMOS or algebra): $4x + y = 9$ and $x - 3y = -1$. What is $x + y$?",
            "answer": "DESMOS shows the intersection at $(2, 1)$. So $x + y = 2 + 1 = 3$. Verify: $4(2) + 1 = 9$ ✓ and $2 - 3(1) = -1$ ✓."
          }
        ]
      }
    }
  },
  "11": {
    "moduleId": "systems",
    "title": "Solving System of Equations using DESMOS Example #1",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Solving a system with integer coefficients via DESMOS. Clean integer intersections appear as exact points; decimal outputs may need fraction conversion.",
        "blocks": [
          {
            "type": "heading",
            "content": "Solving System of Equations using DESMOS Example #1"
          },
          {
            "type": "text",
            "content": "Solving System of Equations using DESMOS Example #1 (DESMOS Method) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Solving System of Equations using DESMOS Example #1 (DESMOS Method) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Classify solution type before computing exact values. Now any system of equations question can simply be solved by using Desmos. We can simply graph the equations just the way they are given to us on Desmos. And the point of intersection is the solution to our system of equations which in this case the."
          },
          {
            "type": "formula",
            "label": "Solving System of Equations using DESMOS Example #1 — Core Rule",
            "content": "$$\\text{No solution} \\Rightarrow \\text{parallel lines},\\ \\text{Infinite} \\Rightarrow \\text{same line}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Solving System of Equations using DESMOS Example #1 (DESMOS Method) problems is substitution arithmetic drift. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Classify solution type before computing exact values. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Solving System of Equations using DESMOS Example #1\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Solve using DESMOS: $5x - 2y = 11$ and $3x + 4y = 1$. What is $y$?",
            "steps": [
              {
                "label": "Enter the equations",
                "content": "Type $5x - 2y = 11$ on Line 1 and $3x + 4y = 1$ on Line 2 in DESMOS."
              },
              {
                "label": "Read the intersection",
                "content": "DESMOS displays the intersection point. Click the dot to read the coordinates."
              },
              {
                "label": "Algebraic verification",
                "content": "Multiply Eq. 1 by $2$: $10x - 4y = 22$. Add to Eq. 2: $13x = 23$ → $x = \\frac{23}{13}$. Substitute back: $3\\!\\left(\\frac{23}{13}\\right) + 4y = 1$ → $4y = 1 - \\frac{69}{13} = -\\frac{56}{13}$ → $y = -\\frac{14}{13}$."
              },
              {
                "label": "Read the answer correctly",
                "content": "DESMOS displays $(x, y)$ — the **first** coordinate is $x$, the **second** is $y$. The question asks for $y$, so the answer is $-\\frac{14}{13}$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Use DESMOS (or algebra) to solve: $3x + 2y = 13$ and $x - y = 1$. What is $y$?",
            "answer": "From $x - y = 1$: $x = y + 1$. Substitute: $3(y + 1) + 2y = 13$ → $5y + 3 = 13$ → $y = 2$. DESMOS confirms the intersection at $(3, 2)$."
          }
        ]
      }
    }
  },
  "12": {
    "moduleId": "systems",
    "title": "Solving System of Equations using DESMOS Example #2",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Solving a system with fractional or decimal solutions — the scenario where DESMOS saves the most time over algebraic methods.",
        "blocks": [
          {
            "type": "heading",
            "content": "Solving System of Equations using DESMOS Example #2"
          },
          {
            "type": "text",
            "content": "Solving System of Equations using DESMOS Example #2 (DESMOS Method) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Solving System of Equations using DESMOS Example #2 (DESMOS Method) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Classify solution type before computing exact values. Now again any system of equations question can be solved simply using desmos. We can graph the equations just the way they're given to us and the point of intersection is our solution. In this case, the point of intersection is -12, comma, -47, which."
          },
          {
            "type": "formula",
            "label": "Solving System of Equations using DESMOS Example #2 — Core Rule",
            "content": "$$\\text{No solution} \\Rightarrow \\text{parallel lines},\\ \\text{Infinite} \\Rightarrow \\text{same line}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Solving System of Equations using DESMOS Example #2 (DESMOS Method) problems is elimination sign mismatch. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Classify solution type before computing exact values. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Solving System of Equations using DESMOS Example #2\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Hard",
            "problem": "Use DESMOS to solve $7x + 3y = 5$ and $2x - 9y = 1$. What is $x$?",
            "steps": [
              {
                "label": "Graph both equations",
                "content": "Enter $7x + 3y = 5$ and $2x - 9y = 1$ in DESMOS. Click the intersection point."
              },
              {
                "label": "Read the DESMOS output",
                "content": "DESMOS shows a decimal value. If it reads $x \\approx 0.6923\\ldots$, recognize this as a repeating decimal."
              },
              {
                "label": "Convert to an exact fraction",
                "content": "Algebraically: multiply Eq. 1 by $3$: $21x + 9y = 15$. Add to Eq. 2: $23x = 16$ → $x = \\frac{16}{23}$. Check: $\\frac{16}{23} \\approx 0.6957$, confirming the DESMOS reading."
              },
              {
                "label": "Match the answer choice",
                "content": "If the choices list $\\frac{16}{23}$, select it. Never round a repeating decimal — convert to the exact fraction."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Solve: $5x + 7y = 3$ and $3x - 2y = 8$. What is $x$?",
            "answer": "Multiply Eq. 1 by $2$ and Eq. 2 by $7$: $10x + 14y = 6$ and $21x - 14y = 56$. Add: $31x = 62$ → $x = 2$."
          }
        ]
      }
    }
  },
  "13": {
    "moduleId": "systems",
    "title": "Infinite Solutions & Parametric Form",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "When two equations describe the same line, every point on that line is a solution. The proportionality test identifies this case, and parametric form expresses the infinite solution set.",
        "blocks": [
          {
            "type": "heading",
            "content": "Infinite Solutions & Parametric Form"
          },
          {
            "type": "text",
            "content": "Infinite Solutions & Parametric Form (Infinite Solutions) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Infinite Solutions & Parametric Form (Infinite Solutions) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Classify solution type before computing exact values. For example, when a system has infinitely many solutions, every point on the shared line works: let $x = r$, then the line's equation gives the matching $y$, so $(r,\\, y(r))$ lies on both graphs for every real $r$."
          },
          {
            "type": "formula",
            "label": "Infinite Solutions & Parametric Form — Core Rule",
            "content": "$$\\text{No solution} \\Rightarrow \\text{parallel lines},\\ \\text{Infinite} \\Rightarrow \\text{same line}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Infinite Solutions & Parametric Form (Infinite Solutions) problems is infinitely many vs no solution confusion. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Classify solution type before computing exact values. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Infinite Solutions & Parametric Form\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Hard",
            "problem": "The system $ax + 6y = 15$ and $4x + 8y = 20$ has infinitely many solutions. Find $a$.",
            "steps": [
              {
                "label": "Multiplier from constants",
                "content": "$\\frac{15}{20} = \\frac{3}{4}$"
              },
              {
                "label": "Check $y$-coefficients",
                "content": "$\\frac{6}{8} = \\frac{3}{4}$ ✓ — consistent"
              },
              {
                "label": "Apply to $x$-coefficient",
                "content": "$\\frac{a}{4} = \\frac{3}{4}$ → $a = 3$"
              },
              {
                "label": "Verify",
                "content": "$3x + 6y = 15$ is $\\frac{3}{4}$ of $4x + 8y = 20$. All ratios match → infinite solutions."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "For what value of $c$ does the system $2x + 4y = 10$ and $x + 2y = c$ have infinitely many solutions?",
            "answer": "The first equation is $2$ times the second: $2(x + 2y) = 2c$, so $2c = 10$ → $c = 5$. Verification: $x + 2y = 5$ scaled by $2$ gives $2x + 4y = 10$ ✓."
          }
        ]
      }
    }
  },
  "14": {
    "moduleId": "systems",
    "title": "Infinite Solutions SAT Example",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Walkthrough of a typical SAT problem asking for the parameter value that produces infinitely many solutions, using the coefficient-ratio method.",
        "blocks": [
          {
            "type": "heading",
            "content": "Infinite Solutions SAT Example"
          },
          {
            "type": "text",
            "content": "Infinite Solutions SAT Example (Infinite Solutions) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "As above, parametrize a dependent system: let $x = r$; the shared equation then fixes $y$, so the point $(r,\\, y(r))$ lies on both graphs for every real number $r$."
          },
          {
            "type": "formula",
            "label": "Infinite Solutions SAT Example — Core Rule",
            "content": "$$\\text{No solution} \\Rightarrow \\text{parallel lines},\\ \\text{Infinite} \\Rightarrow \\text{same line}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Infinite Solutions SAT Example (Infinite Solutions) problems is substitution arithmetic drift. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Classify solution type before computing exact values. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Infinite Solutions SAT Example\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "The system $kx + 3y = 12$ and $4x + 6y = 8$ has no solution. What is the value of $k$?",
            "steps": [
              {
                "label": "Recall the no-solution condition",
                "content": "No solution means parallel lines: the coefficient ratios are equal, but the constant ratio is different. $$\\frac{k}{4} = \\frac{3}{6} \\neq \\frac{12}{8}$$"
              },
              {
                "label": "Set the coefficient ratios equal",
                "content": "$\\frac{k}{4} = \\frac{3}{6} = \\frac{1}{2}$, so $k = 4 \\cdot \\frac{1}{2} = 2$."
              },
              {
                "label": "Verify the constant ratio differs",
                "content": "$\\frac{12}{8} = \\frac{3}{2}$, but the coefficient ratio is $\\frac{1}{2}$. Since $\\frac{3}{2} \\neq \\frac{1}{2}$, the system is indeed inconsistent (parallel lines)."
              },
              {
                "label": "Answer",
                "content": "$k = 2$. With this value, both equations have slope $-\\frac{1}{2}$ but different $y$-intercepts, confirming no solution."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "If the system $6x - 9y = 12$ and $2x - 3y = k$ has infinitely many solutions, what is $k$?",
            "answer": "Multiplier: $\\frac{6}{2} = 3$ and $\\frac{-9}{-3} = 3$. Apply to constant: $12 = 3k$ → $k = 4$. Verify: $3(2x - 3y) = 6x - 9y = 12$ ✓."
          }
        ]
      }
    }
  },
  "15": {
    "moduleId": "systems",
    "title": "Mixtures & Solving for a Combination",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "A mixture is a system in disguise: one count equation and one value equation. And when a question asks for a combination like $x + y$, add or subtract the equations to land the answer directly instead of solving for each variable.",
        "blocks": [
          {
            "type": "heading",
            "content": "Mixtures as a System of Equations"
          },
          {
            "type": "text",
            "content": "A mixture problem blends two inputs — two solutions, two kinds of coffee bean, two coin denominations, two investments — into one combined result. It looks like a word problem, but underneath it is always a system. The key relationship: $\\text{ingredient amount} = (\\text{concentration or per-unit value}) \\times (\\text{total amount})$. A $40\\%$ solution of $200$ mL holds $0.40 \\times 200 = 80$ mL of the substance."
          },
          {
            "type": "text",
            "content": "When two inputs combine, TWO things are conserved at once: the total quantity and the ingredient it carries. That gives you two equations. The **count equation** says the amounts add to the blend's total. The **value equation** says each input's ingredient content adds to the blend's content. For inputs $A$ and $B$ combining into a total $T$: $A + B = T$ and $c_1 A + c_2 B = c_{\\text{blend}}\\,T$."
          },
          {
            "type": "formula",
            "label": "Mixture — Two-Equation Setup",
            "content": "$$A + B = T \\qquad c_1 A + c_2 B = c_{\\text{blend}}\\,T$$",
            "note": "First is the count equation (amounts add up); second is the value equation (ingredient content adds up). Water contributes $0$ to the value ledger; a pure additive contributes $1$."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Mix $A$ lb of \\$8/lb beans with $B$ lb of \\$14/lb beans into a $30$-lb blend worth \\$282. Count: $A + B = 30$. Value: $8A + 14B = 282$."
          },
          {
            "type": "heading",
            "content": "When the Question Asks for a Combination"
          },
          {
            "type": "text",
            "content": "Some systems ask not for $x$ or $y$ but for a **combination** — $x + y$, $3a - 2b$, or $6x + 6y$. These are built so that a single addition or subtraction of the two given equations produces the target directly (sometimes a clean multiple of it). Solving for each variable separately is the long way around — and on hard versions the individual values are deliberately ugly fractions while the combination comes out clean."
          },
          {
            "type": "formula",
            "label": "Combination Target — The Shortcut",
            "content": "$$\\text{Write the target first, then}\\ \\text{ADD or SUBTRACT the two equations to build it}$$",
            "note": "If you get $2x + 2y$ when $x + y$ is asked, divide by $2$. Fall back to a full solve only if both add and subtract miss."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Two traps dominate. In mixtures, students freeze one ledger: adding a pure ingredient grows the total AND the ingredient, but they keep the old total in the denominator and undershoot. Sanity check — a blend's concentration must land strictly between the two inputs, nearer the bigger contributor. In combination problems, students grind out $x$ and $y$ individually when only $x + y$ was asked, then sometimes report $x$ instead of the combination. Write the target at the top and check your final answer's shape against it."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "For a blend problem: name two unknowns, write the count equation and the value equation, and supply the silent coefficients ($0$ for water, $1$ for a pure additive). For any question asking for an expression rather than a single variable: run the add/subtract scan BEFORE solving. Both habits turn slow, trap-laden problems into one-line wins."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Mixtures & Solving for a Combination\" into practice with a worked mixture example and a combination-target checkpoint.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "A chemist combines a $20\\%$ acid solution with a $50\\%$ acid solution to make $60$ mL of a $30\\%$ acid solution. How many mL of the $20\\%$ solution are used?",
            "steps": [
              {
                "label": "Define variables",
                "content": "Let $A$ = mL of the $20\\%$ solution and $B$ = mL of the $50\\%$ solution."
              },
              {
                "label": "Count equation",
                "content": "The volumes add to the blend's total: $A + B = 60$."
              },
              {
                "label": "Value equation",
                "content": "The acid carried in adds to the acid in the blend: $0.20A + 0.50B = 0.30(60) = 18$."
              },
              {
                "label": "Substitute and solve",
                "content": "From the count equation, $B = 60 - A$. Then $0.20A + 0.50(60 - A) = 18$ → $0.20A + 30 - 0.50A = 18$ → $-0.30A = -12$ → $A = 40$."
              },
              {
                "label": "Verify with the sanity band",
                "content": "$B = 20$; acid $= 0.20(40) + 0.50(20) = 8 + 10 = 18$ ✓. The blend's $30\\%$ sits between $20\\%$ and $50\\%$, nearer the larger $20\\%$ contributor. Answer: **40 mL**."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "If $5x + 2y = 23$ and $2x + 5y = 19$, what is $x + y$?",
            "answer": "Add the equations: $(5x + 2y) + (2x + 5y) = 23 + 19$ → $7x + 7y = 42$ → $7(x + y) = 42$ → $x + y = 6$. No need to find $x$ and $y$ separately."
          }
        ]
      }
    }
  }
};
