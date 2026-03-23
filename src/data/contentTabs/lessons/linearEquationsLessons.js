export const linearEquationsLessonTabs = {
  "1": {
    "moduleId": "linear-equations",
    "title": "Linear Equations",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "The SAT tests linear equations through three forms — each reveals different information instantly, and CB designs questions to punish students who pick the wrong form.",
        "blocks": [
          {
            "type": "heading",
            "content": "Linear Equations"
          },
          {
            "type": "text",
            "content": "A linear equation describes a relationship where the change in $y$ is **constant** for every unit change in $x$. On a graph, this always produces a straight line — hence the name."
          },
          {
            "type": "text",
            "content": "The SAT tests linear equations through three forms — each reveals different information instantly. **Slope-intercept** ($y = mx + b$) shows slope and $y$-intercept directly. **Standard form** ($Ax + By = C$) reveals both intercepts ($C/A$ and $C/B$) and slope ($-A/B$). **Point-slope** ($y - y_1 = m(x - x_1)$) shows a specific point the line passes through. CB designs answer choices so students who convert to the wrong form waste time and make sign errors."
          },
          {
            "type": "formula",
            "label": "Linear Equations — Core Rule",
            "content": "$$m = \\frac{y_2 - y_1}{x_2 - x_1},\\quad y = mx + b$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Given $4x + 2y = 12$: slope $= -A/B = -4/2 = -2$, $y$-intercept $= C/B = 12/2 = 6$, $x$-intercept $= C/A = 12/4 = 3$. Three values in under 10 seconds."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "CB always offers the $y$-intercept when the question asks for slope (and vice versa). In $y = 3x + 7$, the answer choices will include both $3$ and $7$. Before computing anything, circle what the question actually asks: \"slope,\" \"y-intercept,\" \"x-intercept,\" or \"value at $x = ...$.\" Then pick the form that shows that value directly — never convert unless forced."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Direction check first, then intercept/slope match. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Linear Equations\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "The equation $6x + 3y = 18$ represents a line in the $xy$-plane. What is the $y$-intercept of this line? (A) $2$ (B) $3$ (C) $6$ (D) $18$",
            "steps": [
              {
                "label": "Recognize the form",
                "content": "The equation is in standard form $Ax + By = C$ with $A = 6$, $B = 3$, $C = 18$."
              },
              {
                "label": "Read the y-intercept directly",
                "content": "In standard form, the $y$-intercept $= C/B = 18/3 = 6$."
              },
              {
                "label": "Trap check",
                "content": "(B) is the value of $B$ itself — trap for students who confuse the coefficient with the intercept. (A) $2$ is the slope magnitude $|{-A/B}| = 2$. (D) $18$ is $C$ undivided. CB always includes these three distractors on standard-form intercept questions."
              },
              {
                "label": "Answer",
                "content": "**(C) $6$**"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "The equation $5x - 2y = 20$ represents a line. Without converting to slope-intercept form, find both intercepts and the slope.",
            "answer": "$x$-intercept: $C/A = 20/5 = 4$. $y$-intercept: $C/B = 20/(-2) = -10$. Slope: $-A/B = -5/(-2) = 5/2$. Three values in under 10 seconds — no conversion needed."
          }
        ]
      }
    }
  },
  "2": {
    "moduleId": "linear-equations",
    "title": "What Is the Slope?",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "On the SAT, slope is never just \"rise over run.\" It is always the **per-unit rate** in context — and CB always offers the y-intercept labeled as the slope to trap you.",
        "blocks": [
          {
            "type": "heading",
            "content": "What Is the Slope?"
          },
          {
            "type": "text",
            "content": "Slope is the **rate of change** — it measures how much $y$ changes for every one-unit increase in $x$. On the SAT, slope is almost never tested in isolation; it is always embedded in a real-world context where the slope has a specific meaning."
          },
          {
            "type": "text",
            "content": "In context problems, slope is the \"**per**\" quantity. A gym that charges \"\\$25 **per** month plus a \\$50 sign-up fee\" gives $y = 25x + 50$ where slope $= 25$. The words \"per,\" \"each,\" \"every,\" and \"for each\" are the universal trigger — that number is always the slope. The constant/fixed/initial value is the $y$-intercept."
          },
          {
            "type": "formula",
            "label": "What Is the Slope? — Core Rule",
            "content": "$$m = \\frac{y_2 - y_1}{x_2 - x_1},\\quad y = mx + b$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "A plumber charges a \\$75 service call fee plus \\$40 per hour. Equation: $C = 40h + 75$. \"What does $40$ represent?\" → the hourly rate (slope). \"What does $75$ represent?\" → the flat service fee ($y$-intercept)."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "CB places both the slope and the $y$-intercept as answer choices. In $y = 25x + 50$, the choices will include \"25\" and \"50\" for both \"What does 25 represent?\" and \"What does 50 represent?\" Students who rush pick the wrong one. Slope = the \"per\" quantity (per month, per item). Intercept = the fixed/initial/flat value. Match the wording first, compute second."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Direction check first, then intercept/slope match. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"What Is the Slope?\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "A plumber charges a \\$60 service fee plus \\$45 per hour. The total cost $C$ for $h$ hours is $C = 45h + 60$. What does $45$ represent in this context? (A) The total cost after one hour (B) The service fee (C) The cost for each additional hour of labor (D) The number of hours worked",
            "steps": [
              {
                "label": "Keyword scan",
                "content": "\"\\$45 **per** hour\" — the word \"per\" tags this as the slope."
              },
              {
                "label": "Confirm position in equation",
                "content": "$45$ is the coefficient of $h$ (the variable). Coefficient of the variable = slope."
              },
              {
                "label": "Trap check",
                "content": "(B) \"the service fee\" is the intercept (\\$60) — this is the classic CB swap, offering the other number for the wrong role. (A) is $45(1) + 60 = 105$, a calculation trap."
              },
              {
                "label": "Answer",
                "content": "**(C)** The cost for each additional hour of labor."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "The equation $T = -3d + 72$ models the temperature $T$ (°F) of a cooling drink $d$ minutes after being placed outside. What is the slope, and what does it mean?",
            "answer": "Slope $= -3$. The drink's temperature **decreases** by $3$°F **per minute**. The negative sign means the quantity is going down. The $72$ is the starting temperature (y-intercept)."
          }
        ]
      }
    }
  },
  "3": {
    "moduleId": "linear-equations",
    "title": "Determining Slope from Two Coordinates",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Two points determine the slope — and from there, the full equation. The SAT tests whether you can keep the subtraction order consistent and avoid the sign trap.",
        "blocks": [
          {
            "type": "heading",
            "content": "Determining Slope from Two Coordinates"
          },
          {
            "type": "text",
            "content": "When you know any two points on a line, you can compute the slope. This is one of the most commonly tested skills — the SAT gives you two points in a table, in text, or on a graph, and asks for the slope."
          },
          {
            "type": "text",
            "content": "The slope formula is $m = \\frac{y_2 - y_1}{x_2 - x_1}$. Plug in any two points $(x_1, y_1)$ and $(x_2, y_2)$. The order does not matter as long as you are consistent — both subtractions must go in the same direction."
          },
          {
            "type": "formula",
            "label": "Determining Slope from Two Coordinates — Core Rule",
            "content": "$$m = \\frac{y_2 - y_1}{x_2 - x_1},\\quad y = mx + b$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Points: $(2, 5)$ and $(6, 13)$. $\\Delta y = 13 - 5 = 8$, $\\Delta x = 6 - 2 = 4$. Slope $= 8/4 = 2$. The line goes up, slope is positive. ✓"
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students subtract $x$-values in one order and $y$-values in the other, producing the negative of the correct slope. Another trap: dividing $\\Delta x$ by $\\Delta y$ instead of $\\Delta y$ by $\\Delta x$. Always label your points first: $(x_1, y_1)$ and $(x_2, y_2)$. Then compute $\\Delta y = y_2 - y_1$ and $\\Delta x = x_2 - x_1$ separately before dividing. Check: is the line going up or down? The sign of the slope must match."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Direction check first, then intercept/slope match. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Determining Slope from Two Coordinates\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "A line passes through $(2, 7)$ and $(5, 16)$. What is the equation in slope-intercept form?",
            "steps": [
              {
                "label": "Direction check",
                "content": "As $x$ goes from $2$ to $5$ (increases), $y$ goes from $7$ to $16$ (increases). Slope must be positive."
              },
              {
                "label": "Compute slope",
                "content": "$m = \\frac{16 - 7}{5 - 2} = \\frac{9}{3} = 3$ ✓ Positive, matches our check."
              },
              {
                "label": "Point-slope → slope-intercept",
                "content": "$y - 7 = 3(x - 2) \\Rightarrow y = 3x - 6 + 7 = 3x + 1$"
              },
              {
                "label": "Answer",
                "content": "$y = 3x + 1$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Find the slope of the line through $(-1, 4)$ and $(3, -8)$. Before calculating, predict: is the slope positive or negative?",
            "answer": "As $x$ increases from $-1$ to $3$, $y$ decreases from $4$ to $-8$ — slope must be negative. $m = \\frac{-8 - 4}{3 - (-1)} = \\frac{-12}{4} = -3$. Confirmed negative."
          }
        ]
      }
    }
  },
  "4": {
    "moduleId": "linear-equations",
    "title": "Determining Slope from Table",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "The SAT gives you a table and expects you to find slope — but the $x$-values don't always increase by $1$. Dividing by the actual $\\Delta x$ is the trap that catches most students.",
        "blocks": [
          {
            "type": "heading",
            "content": "Determining Slope from Table"
          },
          {
            "type": "text",
            "content": "When the SAT gives you a table of $x$ and $y$ values, it is testing whether you can extract the slope. The key insight: pick any two rows, compute $\\Delta y / \\Delta x$. But the $x$-values do not always increase by $1$ — if you forget to divide by the actual $\\Delta x$, you get the wrong slope."
          },
          {
            "type": "text",
            "content": "From any two rows: slope $= \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1}$. If $x$ increases by $2$ and $y$ increases by $6$, the slope is $6/2 = 3$, not $6$. Always check the step size in the $x$-column."
          },
          {
            "type": "diagramRef",
            "visualType": "slopeFromTableDiagram",
            "description": "Table slope comes from change in y divided by change in x between rows."
          },
          {
            "type": "formula",
            "label": "Determining Slope from Table — Core Rule",
            "content": "$$m=\\frac{\\Delta y}{\\Delta x}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Table: $x = 1, 3, 5, 7$ and $y = 2, 5, 8, 11$. $\\Delta x = 2$, $\\Delta y = 3$. Slope $= 3/2 = 1.5$. Not $3$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "The SAT deliberately uses non-unit $x$-steps ($+2$, $+3$, $+5$) so that students who only read the $y$-column changes report those as the slope. Before computing, write down $\\Delta x$ from the table. If $\\Delta x \\neq 1$, you must divide $\\Delta y$ by $\\Delta x$."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Always compute both \\(\\Delta y\\) and \\(\\Delta x\\) from table rows. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Determining Slope from Table\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "For the linear function $f$, the table shows three values of $x$ and their corresponding values of $f(x)$. | $x$ | $f(x)$ | |---|---| | $0$ | $29$ | | $1$ | $32$ | | $2$ | $35$ | Which equation defines $f(x)$? (A) $f(x) = 3x + 29$ (B) $f(x) = 29x + 3$ (C) $f(x) = 32x + 29$ (D) $f(x) = 29x + 32$",
            "steps": [
              {
                "label": "Find slope",
                "content": "$\\Delta y = 32 - 29 = 3$, $\\Delta x = 1 - 0 = 1$. Slope $= 3/1 = 3$. Eliminate (B), (C), and (D) immediately — only (A) has slope $3$."
              },
              {
                "label": "Confirm y-intercept",
                "content": "The $x = 0$ row gives $f(0) = 29$, so $b = 29$. Equation: $f(x) = 3x + 29$."
              },
              {
                "label": "Trap check",
                "content": "(B) swaps slope and intercept — the classic CB move. The \"29\" attached to $x$ would mean slope $= 29$, which is wrong."
              },
              {
                "label": "Answer",
                "content": "**(A)**"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A table shows: $x = 3, 6, 9, 12$ and $y = 5, 11, 17, 23$. What is the slope? What mistake would students make if they didn't check $\\Delta x$?",
            "answer": "$\\Delta y = 6$, $\\Delta x = 3$. Slope $= 6/3 = 2$. Students who ignore $\\Delta x$ would write slope $= 6$, which is triple the actual answer."
          }
        ]
      }
    }
  },
  "5": {
    "moduleId": "linear-equations",
    "title": "Determining Slope from Graph",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "The SAT shows you a graph and gives four equation choices. Your first move: check whether the line goes up or down — that alone eliminates half the choices.",
        "blocks": [
          {
            "type": "heading",
            "content": "Determining Slope from Graph"
          },
          {
            "type": "text",
            "content": "When the SAT shows a graph, your first move is to check **direction**. Line going down left-to-right → negative slope → immediately eliminate every positive-slope answer. That one observation cuts the choices in half in 3 seconds."
          },
          {
            "type": "text",
            "content": "To find the exact slope from a graph: pick two points where the line clearly crosses grid intersections. Count the **rise** (vertical change) and **run** (horizontal change). Slope $= \\text{rise} / \\text{run}$. Remember: downward rise is negative."
          },
          {
            "type": "diagramRef",
            "visualType": "slopeFromGraphDiagram",
            "description": "Graph slope is rise over run, with sign determined by line direction."
          },
          {
            "type": "formula",
            "label": "Determining Slope from Graph — Core Rule",
            "content": "$$m=\\frac{y_2-y_1}{x_2-x_1}=\\frac{\\text{rise}}{\\text{run}}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "A line passes through $(0, 4)$ and $(5, 1)$. Rise $= 1 - 4 = -3$, Run $= 5 - 0 = 5$. Slope $= -3/5$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students count the rise and run correctly but forget the sign. A line going down 3 units over 5 units to the right has slope $-3/5$, not $3/5$. After counting rise and run, check: does the line go up or down? Up = positive slope, down = negative slope. Attach the correct sign."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Direction check first, then count rise and run. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Determining Slope from Graph\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "A scatter plot shows data points with a line of best fit going **downward** from left to right, crossing the $y$-axis at approximately $10$. Which equation best models the data? (A) $y = 8x + 10$ (B) $y = -\\frac{2}{3}x + 10$ (C) $y = \\frac{2}{3}x - 10$ (D) $y = -8x - 10$",
            "steps": [
              {
                "label": "Step 1: Direction",
                "content": "Line goes **downward** → slope is negative. Eliminate (A) and (C) — both have positive slopes."
              },
              {
                "label": "Step 2: Y-intercept",
                "content": "Line crosses $y$-axis at $\\approx 10$ (positive). Eliminate (D) — its intercept is $-10$."
              },
              {
                "label": "Confirm",
                "content": "Only (B) remains: negative slope $(-\\frac{2}{3})$ and positive intercept $(10)$. No slope calculation needed."
              },
              {
                "label": "Answer",
                "content": "**(B)**"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A line on a graph passes through $(0, 40)$ and $(60, 0)$. Using rise/run, what is the slope? Why is the sign negative?",
            "answer": "Rise $= 0 - 40 = -40$, Run $= 60 - 0 = 60$. Slope $= -40/60 = -2/3$. The line goes downward (from $y = 40$ to $y = 0$), so rise is negative. The $y$-intercept is $40$ (where $x = 0$)."
          }
        ]
      }
    }
  },
  "6": {
    "moduleId": "linear-equations",
    "title": "What is the Y-Intercept?",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "The y-intercept is where $x = 0$ — the starting value before anything changes. The SAT tests whether you can identify it in context and not swap it with the slope.",
        "blocks": [
          {
            "type": "heading",
            "content": "What is the Y-Intercept?"
          },
          {
            "type": "text",
            "content": "The $y$-intercept is where the line crosses the $y$-axis — the value of $y$ when $x = 0$. In real-world contexts, this is the **starting value** or **initial condition** before any changes occur."
          },
          {
            "type": "text",
            "content": "In slope-intercept form $y = mx + b$, the $y$-intercept is $b$. In standard form $Ax + By = C$, the $y$-intercept is $C/B$ (set $x = 0$ and solve). On a graph, it is the $y$-value where the line touches the vertical axis."
          },
          {
            "type": "diagramRef",
            "visualType": "yInterceptDiagram",
            "description": "The y-intercept is the point where the graph crosses the y-axis."
          },
          {
            "type": "formula",
            "label": "What is the Y-Intercept? — Core Rule",
            "content": "$$y=mx+b\\Rightarrow y\\text{-intercept}=b,\\quad Ax+By=C\\Rightarrow y\\text{-intercept}=\\frac{C}{B}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Given $3x + 5y = 30$: $y$-intercept $= 30/5 = 6$. The line crosses the $y$-axis at $(0, 6)$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "In $y = 3x + 7$, CB offers $3$ as an answer choice for \"what is the $y$-intercept?\" because students confuse the slope coefficient with the intercept. The $y$-intercept is always the **constant term** in slope-intercept form. If the equation is in standard form, plug $x = 0$ and solve for $y$."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Set x = 0 to verify y-intercept in any form. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"What is the Y-Intercept?\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "A water tank starts with $500$ gallons and drains at $15$ gallons per minute. Which equation models the water level $W$ after $t$ minutes, and what is the y-intercept in context? (A) $W = 15t + 500$ (B) $W = -15t + 500$ (C) $W = 500t - 15$ (D) $W = -500t + 15$",
            "steps": [
              {
                "label": "Keyword scan",
                "content": "\"\\$15 **per** minute\" → slope. \"**Starts with** 500\" → y-intercept. \"Drains\" → negative rate."
              },
              {
                "label": "Build equation",
                "content": "Slope $= -15$ (draining = decreasing). Intercept $= 500$. So $W = -15t + 500$."
              },
              {
                "label": "Trap check",
                "content": "(A) has $+15$ — misses the \"drain\" negative. (C) swaps slope and intercept completely. (D) swaps AND misapplies the negative."
              },
              {
                "label": "Answer",
                "content": "**(B)**. The y-intercept ($500$) means the tank holds 500 gallons at $t = 0$, before draining starts."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "In the equation $C = 0.12m + 40$, where $C$ is monthly cost and $m$ is minutes used, what does $40$ represent? What does $0.12$ represent?",
            "answer": "$40$ is the y-intercept — the base monthly cost at $m = 0$ (before any minutes are used). $0.12$ is the slope — the cost **per** additional minute. At $m = 0$: $C = 0.12(0) + 40 = 40$."
          }
        ]
      }
    }
  },
  "7": {
    "moduleId": "linear-equations",
    "title": "Deriving Linear Equations From Context",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Context questions give you a story and expect $y = mx + b$. The video shows: find slope from the \"for every\" statement, then plug in the given coordinate to solve for $b$.",
        "blocks": [
          {
            "type": "heading",
            "content": "Deriving Linear Equations From Context"
          },
          {
            "type": "text",
            "content": "The SAT frequently gives you a word problem and asks you to write a linear equation. The trick is translating the English into math by identifying the slope (rate) and $y$-intercept (starting value)."
          },
          {
            "type": "text",
            "content": "Step 1: Identify the two quantities (what changes and what it depends on). Step 2: Find the rate of change — the \"per\" quantity is the slope. Step 3: Find the initial value — the fixed/starting amount is the $y$-intercept. Step 4: Assemble into $y = mx + b$."
          },
          {
            "type": "diagramRef",
            "visualType": "parabolaFromGraphDiagram",
            "description": "Extract vertex and a second point from the graph to write the equation."
          },
          {
            "type": "formula",
            "label": "Deriving Linear Equations From Context — Core Rule",
            "content": "$$m = \\frac{y_2 - y_1}{x_2 - x_1},\\quad y = mx + b$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "A taxi charges \\$3.50 per mile plus a \\$2.00 base fare. Equation: $C = 3.50m + 2.00$ where $C$ is cost and $m$ is miles."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students swap the slope and intercept in context problems, especially when the numbers are similar in magnitude. The \"per\" word always marks the slope. The lump-sum, one-time, initial, or fixed value is always the $y$-intercept."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Direction check first, then intercept/slope match. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Deriving Linear Equations From Context\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "The relationship between two variables $x$ and $y$ is linear. For every increase in the value of $x$ by $1$, the value of $y$ increases by $8$. When the value of $x$ is $2$, the value of $y$ is $18$. Which equation represents this relationship? (A) $y = 2x + 18$ (B) $y = 2x + 8$ (C) $y = 8x + 2$ (D) $y = 18x + 2$",
            "steps": [
              {
                "label": "Find slope from context",
                "content": "\"For every increase in $x$ by $1$, $y$ increases by $8$\" → $m = \\frac{8}{1} = 8$. Eliminate (A) and (B) — wrong slope."
              },
              {
                "label": "Plug in coordinate to find $b$",
                "content": "\"When $x = 2$, $y = 18$\" → the point $(2, 18)$. Plug in: $18 = 8(2) + b \\Rightarrow b = 2$."
              },
              {
                "label": "Trap check",
                "content": "(D) uses $18$ as slope — it's the $y$-value, not the rate. (A) uses $2$ as slope — it's the $x$-value."
              },
              {
                "label": "Answer",
                "content": "**(C) $y = 8x + 2$**"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A streaming service charges a one-time activation fee of \\$15 plus \\$9.50 per month. Write the equation for total cost $C$ after $m$ months. Which number is slope, and which is intercept?",
            "answer": "\"\\$9.50 **per** month\" = slope. \"One-time fee of \\$15\" = y-intercept. $C = 9.50m + 15$. CB would offer $C = 15m + 9.50$ as a swap distractor."
          }
        ]
      }
    }
  },
  "8": {
    "moduleId": "linear-equations",
    "title": "Deriving Linear Equations From Graph (Example 1)",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "read the y-intercept where the line crosses the $y$-axis, check slope direction (up/down), then eliminate. Most graph questions don't require calculating exact slope.",
        "blocks": [
          {
            "type": "heading",
            "content": "Deriving Linear Equations From Graph (Example 1)"
          },
          {
            "type": "text",
            "content": "The SAT frequently gives you a word problem and asks you to write a linear equation. The trick is translating the English into math by identifying the slope (rate) and $y$-intercept (starting value)."
          },
          {
            "type": "text",
            "content": "Step 1: Identify the two quantities (what changes and what it depends on). Step 2: Find the rate of change — the \"per\" quantity is the slope. Step 3: Find the initial value — the fixed/starting amount is the $y$-intercept. Step 4: Assemble into $y = mx + b$."
          },
          {
            "type": "diagramRef",
            "visualType": "parabolaFromGraphDiagram",
            "description": "A parabola with vertex, y-intercept, and mirror point labeled."
          },
          {
            "type": "formula",
            "label": "Deriving Linear Equations From Graph (Example 1) — Core Rule",
            "content": "$$m = \\frac{y_2 - y_1}{x_2 - x_1},\\quad y = mx + b$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "A taxi charges \\$3.50 per mile plus a \\$2.00 base fare. Equation: $C = 3.50m + 2.00$ where $C$ is cost and $m$ is miles."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students swap the slope and intercept in context problems, especially when the numbers are similar in magnitude. The \"per\" word always marks the slope. The lump-sum, one-time, initial, or fixed value is always the $y$-intercept."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Direction check first, then intercept/slope match. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Deriving Linear Equations From Graph (Example 1)\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "A line on a graph goes **downward** from left to right, crossing the $y$-axis at $\\approx 40$. Two points on the line are $(0, 40)$ and $(60, 0)$. Which equation could represent this line? (A) $y = 8x + 10$ (B) $8x + 12y = 480$ (C) $y = \\frac{2}{3}x - 10$ (D) $y = -\\frac{2}{3}x - 10$",
            "steps": [
              {
                "label": "Direction check",
                "content": "Line goes downward → slope is negative. Eliminate (A) (positive slope) and (C) (positive slope)."
              },
              {
                "label": "Y-intercept check",
                "content": "Line crosses $y$-axis at $+40$. (D) has intercept $-10$ — eliminate. Only (B) remains."
              },
              {
                "label": "Verify (B)",
                "content": "Convert: $12y = -8x + 480 \\Rightarrow y = -\\frac{2}{3}x + 40$. Negative slope ✓ Intercept $40$ ✓"
              },
              {
                "label": "Answer",
                "content": "**(B)**"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A line crosses the $y$-axis at $(0, 3)$ and passes through $(2, 9)$. What is the equation? Find it in under 15 seconds.",
            "answer": "Y-intercept $= 3$ (read directly). Slope $= \\frac{9 - 3}{2 - 0} = 3$. Equation: $y = 3x + 3$. Total time: ~10 seconds."
          }
        ]
      }
    }
  },
  "9": {
    "moduleId": "linear-equations",
    "title": "Deriving Linear Equations From Graph (Example 2)",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "When the y-intercept isn't visible or the answer choices are in standard form, find two clear points, compute rise/run, and match to the choices.",
        "blocks": [
          {
            "type": "heading",
            "content": "Deriving Linear Equations From Graph (Example 2)"
          },
          {
            "type": "text",
            "content": "The SAT frequently gives you a word problem and asks you to write a linear equation. The trick is translating the English into math by identifying the slope (rate) and $y$-intercept (starting value)."
          },
          {
            "type": "text",
            "content": "Step 1: Identify the two quantities (what changes and what it depends on). Step 2: Find the rate of change — the \"per\" quantity is the slope. Step 3: Find the initial value — the fixed/starting amount is the $y$-intercept. Step 4: Assemble into $y = mx + b$."
          },
          {
            "type": "diagramRef",
            "visualType": "parabolaFromGraphDiagram",
            "description": "A parabola with vertex, y-intercept, and mirror point labeled."
          },
          {
            "type": "formula",
            "label": "Deriving Linear Equations From Graph (Example 2) — Core Rule",
            "content": "$$m = \\frac{y_2 - y_1}{x_2 - x_1},\\quad y = mx + b$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "A taxi charges \\$3.50 per mile plus a \\$2.00 base fare. Equation: $C = 3.50m + 2.00$ where $C$ is cost and $m$ is miles."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students swap the slope and intercept in context problems, especially when the numbers are similar in magnitude. The \"per\" word always marks the slope. The lump-sum, one-time, initial, or fixed value is always the $y$-intercept."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Direction check first, then intercept/slope match. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Deriving Linear Equations From Graph (Example 2)\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "A line passes through $(3, 5)$ and $(6, 11)$, but the $y$-axis is not visible. Write the equation in slope-intercept form.",
            "steps": [
              {
                "label": "Compute slope",
                "content": "$m = \\frac{11 - 5}{6 - 3} = \\frac{6}{3} = 2$"
              },
              {
                "label": "Use point-slope",
                "content": "$y - 5 = 2(x - 3) \\Rightarrow y = 2x - 6 + 5 = 2x - 1$"
              },
              {
                "label": "Verify with second point",
                "content": "Check $(6, 11)$: $2(6) - 1 = 11$ ✓"
              },
              {
                "label": "Answer",
                "content": "$y = 2x - 1$. The intercept $b = -1$ wasn't readable from the graph — algebra was required."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A line passes through $(4, 3)$ and $(10, 0)$. Find the equation. What is the y-intercept?",
            "answer": "Slope $= \\frac{0 - 3}{10 - 4} = \\frac{-3}{6} = -\\frac{1}{2}$. Using $(10, 0)$: $y - 0 = -\\frac{1}{2}(x - 10) \\Rightarrow y = -\\frac{1}{2}x + 5$. Y-intercept $= 5$."
          }
        ]
      }
    }
  },
  "10": {
    "moduleId": "linear-equations",
    "title": "Deriving Linear Equations From Table",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "\"$f(x)$ is just another way of saying $y$.\" Find slope from the change in $y$ over change in $x$, then check if $x = 0$ is in the table — that row gives you $b$ for free.",
        "blocks": [
          {
            "type": "heading",
            "content": "Deriving Linear Equations From Table"
          },
          {
            "type": "text",
            "content": "The SAT frequently gives you a word problem and asks you to write a linear equation. The trick is translating the English into math by identifying the slope (rate) and $y$-intercept (starting value)."
          },
          {
            "type": "text",
            "content": "Step 1: Identify the two quantities (what changes and what it depends on). Step 2: Find the rate of change — the \"per\" quantity is the slope. Step 3: Find the initial value — the fixed/starting amount is the $y$-intercept. Step 4: Assemble into $y = mx + b$."
          },
          {
            "type": "diagramRef",
            "visualType": "parabolaFromGraphDiagram",
            "description": "Extract vertex and a second point from the graph to write the equation."
          },
          {
            "type": "formula",
            "label": "Deriving Linear Equations From Table — Core Rule",
            "content": "$$m = \\frac{y_2 - y_1}{x_2 - x_1},\\quad y = mx + b$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "A taxi charges \\$3.50 per mile plus a \\$2.00 base fare. Equation: $C = 3.50m + 2.00$ where $C$ is cost and $m$ is miles."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students swap the slope and intercept in context problems, especially when the numbers are similar in magnitude. The \"per\" word always marks the slope. The lump-sum, one-time, initial, or fixed value is always the $y$-intercept."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Direction check first, then intercept/slope match. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Deriving Linear Equations From Table\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "A table shows: | $x$ | $f(x)$ | |---|---| | $0$ | $29$ | | $1$ | $32$ | | $2$ | $35$ | Which equation defines $f(x)$? (A) $f(x) = 3x + 29$ (B) $f(x) = 29x + 3$ (C) $f(x) = 32x$ (D) $f(x) = 35x - 6$",
            "steps": [
              {
                "label": "Find slope",
                "content": "$\\Delta y = 32 - 29 = 3$, $\\Delta x = 1 - 0 = 1$. Slope $= 3$. Only (A) has slope $3$ — done."
              },
              {
                "label": "Verify with $x = 0$ row",
                "content": "$f(0) = 29$ → $b = 29$. Equation: $f(x) = 3x + 29$ ✓"
              },
              {
                "label": "Trap check",
                "content": "(B) swaps slope and intercept. (C) uses $f(1) = 32$ as slope. (D) uses $f(2) = 35$ as slope."
              },
              {
                "label": "Answer",
                "content": "**(A)**"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Table: $x = 2, 5, 8, 11$ and $y = 3, 12, 21, 30$. Find slope and the full equation. Watch the $x$-step.",
            "answer": "$\\Delta y = 12 - 3 = 9$, $\\Delta x = 5 - 2 = 3$. Slope $= 9/3 = 3$. Using $(2, 3)$: $3 = 3(2) + b \\Rightarrow b = -3$. Equation: $y = 3x - 3$."
          }
        ]
      }
    }
  },
  "11": {
    "moduleId": "linear-equations",
    "title": "Deriving Linear Equations From Function Notation",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "\"$f(0) = 8$ and $f(1) = 12$\" — all function notation follows the form $f(x) = y$. Input is $x$, output is $y$. Two statements give you two points.",
        "blocks": [
          {
            "type": "heading",
            "content": "Deriving Linear Equations From Function Notation"
          },
          {
            "type": "text",
            "content": "The SAT frequently gives you a word problem and asks you to write a linear equation. The trick is translating the English into math by identifying the slope (rate) and $y$-intercept (starting value)."
          },
          {
            "type": "text",
            "content": "Step 1: Identify the two quantities (what changes and what it depends on). Step 2: Find the rate of change — the \"per\" quantity is the slope. Step 3: Find the initial value — the fixed/starting amount is the $y$-intercept. Step 4: Assemble into $y = mx + b$."
          },
          {
            "type": "diagramRef",
            "visualType": "parabolaFromGraphDiagram",
            "description": "Extract vertex and a second point from the graph to write the equation."
          },
          {
            "type": "formula",
            "label": "Deriving Linear Equations From Function Notation — Core Rule",
            "content": "$$m = \\frac{y_2 - y_1}{x_2 - x_1},\\quad y = mx + b$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "A taxi charges \\$3.50 per mile plus a \\$2.00 base fare. Equation: $C = 3.50m + 2.00$ where $C$ is cost and $m$ is miles."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students swap the slope and intercept in context problems, especially when the numbers are similar in magnitude. The \"per\" word always marks the slope. The lump-sum, one-time, initial, or fixed value is always the $y$-intercept."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Direction check first, then intercept/slope match. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Deriving Linear Equations From Function Notation\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "In the linear function $f$, $f(0) = 8$ and $f(1) = 12$. Which equation defines $f$? (A) $f(x) = 12x$ (B) $f(x) = 8x + 12$ (C) $f(x) = 12x + 8$ (D) $f(x) = 4x + 8$",
            "steps": [
              {
                "label": "Translate to coordinates",
                "content": "$f(0) = 8$ → $(0, 8)$. $f(1) = 12$ → $(1, 12)$."
              },
              {
                "label": "Slope",
                "content": "$m = \\frac{12 - 8}{1 - 0} = 4$. Eliminate (A) slope $12$, (B) slope $8$, (C) slope $12$."
              },
              {
                "label": "Y-intercept",
                "content": "$f(0) = 8$ → $b = 8$ directly. Equation: $f(x) = 4x + 8$."
              },
              {
                "label": "Answer",
                "content": "**(D)**. (A) uses the $f(1)$ value as slope. (C) also uses $12$ as slope — CB's favorite distractor here."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A linear function satisfies $g(2) = 7$ and $g(5) = 16$. Find $g(x)$ and then evaluate $g(0)$.",
            "answer": "Slope $= \\frac{16 - 7}{5 - 2} = 3$. Using $(2, 7)$: $7 = 3(2) + b \\Rightarrow b = 1$. $g(x) = 3x + 1$. $g(0) = 1$ (the y-intercept)."
          }
        ]
      }
    }
  },
  "12": {
    "moduleId": "linear-equations",
    "title": "Parallel Lines",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "\"No solution → no intersection → parallel → same slope, different intercept.\" This logic chain is the backbone of 5+ question types on the SAT.",
        "blocks": [
          {
            "type": "heading",
            "content": "Parallel Lines"
          },
          {
            "type": "text",
            "content": "Parallel lines never intersect — they run in the same direction forever. Algebraically, this means they have the **same slope** but different $y$-intercepts."
          },
          {
            "type": "text",
            "content": "Two lines are parallel if and only if $m_1 = m_2$ and $b_1 \\neq b_2$. On the SAT, \"parallel\" questions often give you one equation and ask you to find or identify another line with the same slope. In system-of-equations contexts, parallel lines mean the system has **no solution**."
          },
          {
            "type": "diagramRef",
            "visualType": "parallelLinesDiagram",
            "description": "Parallel lines have equal slopes and never intersect."
          },
          {
            "type": "formula",
            "label": "Parallel Lines — Core Rule",
            "content": "$$m_1=m_2,\\quad b_1\\ne b_2$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Line 1: $y = 2x + 3$. A parallel line through $(1, 7)$: slope must be $2$. Using point-slope: $y - 7 = 2(x - 1) \\Rightarrow y = 2x + 5$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students confuse \"same slope\" with \"same equation.\" If slopes AND intercepts are equal, it is the same line (infinitely many solutions), not parallel (no solution). Parallel → same slope, different intercept → no intersection → no solution. Same line → same slope AND same intercept → infinitely many solutions."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Parallel means equal slopes but different intercepts. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Parallel Lines\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Easy",
            "problem": "The function $f$ is defined by $f(x) = 2x + 3$. The graph of $y = f(x)$ is parallel to line $j$. What is the slope of line $j$?",
            "steps": [
              {
                "label": "Identify slope of $f$",
                "content": "$f(x) = 2x + 3$ → slope $= 2$."
              },
              {
                "label": "Apply parallel rule",
                "content": "Parallel lines have the **same slope**. Slope of line $j = 2$."
              },
              {
                "label": "That's it",
                "content": "\"Function $f$ is parallel to line $j$ and parallel lines have the same slope. Therefore, the slope of line $j$ must be $2$.\" No calculation needed beyond reading the slope."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Write the equation of the line parallel to $y = 4x - 3$ that passes through $(2, 1)$.",
            "answer": "Parallel → same slope $= 4$. Point-slope: $y - 1 = 4(x - 2) \\Rightarrow y = 4x - 7$. Different intercept ($-7 \\neq -3$) ✓ — confirmed parallel, not the same line."
          }
        ]
      }
    }
  },
  "13": {
    "moduleId": "linear-equations",
    "title": "Simple Parallel Lines Question #1",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "when told \"parallel to $y = 7x + 4$ through $(0, 5)$,\" copy the slope, then plug in the point. The y-intercept is the only thing that changes.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Parallel Lines Question #1"
          },
          {
            "type": "text",
            "content": "Parallel lines never intersect — they run in the same direction forever. Algebraically, this means they have the **same slope** but different $y$-intercepts."
          },
          {
            "type": "text",
            "content": "Two lines are parallel if and only if $m_1 = m_2$ and $b_1 \\neq b_2$. On the SAT, \"parallel\" questions often give you one equation and ask you to find or identify another line with the same slope. In system-of-equations contexts, parallel lines mean the system has **no solution**."
          },
          {
            "type": "diagramRef",
            "visualType": "parallelLinesDiagram",
            "description": "Parallel lines have equal slopes and never intersect."
          },
          {
            "type": "formula",
            "label": "Simple Parallel Lines Question #1 — Core Rule",
            "content": "$$m_1=m_2,\\quad b_1\\ne b_2$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Line 1: $y = 2x + 3$. A parallel line through $(1, 7)$: slope must be $2$. Using point-slope: $y - 7 = 2(x - 1) \\Rightarrow y = 2x + 5$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students confuse \"same slope\" with \"same equation.\" If slopes AND intercepts are equal, it is the same line (infinitely many solutions), not parallel (no solution). Parallel → same slope, different intercept → no intersection → no solution. Same line → same slope AND same intercept → infinitely many solutions."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Parallel means equal slopes but different intercepts. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Parallel Lines Question #1\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Easy",
            "problem": "What is the equation of the line that passes through $(0, 5)$ and is parallel to $y = 7x + 4$? (A) $y = 4x + 5$ (B) $y = 5x + 7$ (C) $y = 7x + 5$ (D) $y = 7x + 4$",
            "steps": [
              {
                "label": "Copy slope",
                "content": "Parallel → same slope $= 7$. Eliminate (A) and (B) — wrong slopes."
              },
              {
                "label": "Check intercept",
                "content": "Point $(0, 5)$ → $b = 5$. (D) has $b = 4$ (that's the original line). (C) has $b = 5$ ✓"
              },
              {
                "label": "Trap check",
                "content": "(D) is the original line itself — a trap for students who copy the entire equation instead of just the slope."
              },
              {
                "label": "Answer",
                "content": "**(C)**"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Find the equation parallel to $y = -2x + 5$ through $(3, 1)$.",
            "answer": "Slope $= -2$. Point-slope: $y - 1 = -2(x - 3) \\Rightarrow y = -2x + 7$."
          }
        ]
      }
    }
  },
  "14": {
    "moduleId": "linear-equations",
    "title": "Simple Parallel Lines Question #2",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "When the original line is in standard form, you must first extract the slope as $-A/B$ before building the parallel line.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Parallel Lines Question #2"
          },
          {
            "type": "text",
            "content": "Parallel lines never intersect — they run in the same direction forever. Algebraically, this means they have the **same slope** but different $y$-intercepts."
          },
          {
            "type": "text",
            "content": "Two lines are parallel if and only if $m_1 = m_2$ and $b_1 \\neq b_2$. On the SAT, \"parallel\" questions often give you one equation and ask you to find or identify another line with the same slope. In system-of-equations contexts, parallel lines mean the system has **no solution**."
          },
          {
            "type": "diagramRef",
            "visualType": "parallelLinesDiagram",
            "description": "Parallel lines have equal slopes and never intersect."
          },
          {
            "type": "formula",
            "label": "Simple Parallel Lines Question #2 — Core Rule",
            "content": "$$m_1=m_2,\\quad b_1\\ne b_2$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Line 1: $y = 2x + 3$. A parallel line through $(1, 7)$: slope must be $2$. Using point-slope: $y - 7 = 2(x - 1) \\Rightarrow y = 2x + 5$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students confuse \"same slope\" with \"same equation.\" If slopes AND intercepts are equal, it is the same line (infinitely many solutions), not parallel (no solution). Parallel → same slope, different intercept → no intersection → no solution. Same line → same slope AND same intercept → infinitely many solutions."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Parallel means equal slopes but different intercepts. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Parallel Lines Question #2\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Line $\\ell$: $4x - 2y = 10$. Write the equation of the line parallel to $\\ell$ through $(1, 3)$.",
            "steps": [
              {
                "label": "Extract slope from standard form",
                "content": "$A = 4$, $B = -2$. Slope $= -A/B = -4/(-2) = +2$. Note: $B$ is negative."
              },
              {
                "label": "Parallel line through $(1, 3)$",
                "content": "$y - 3 = 2(x - 1) \\Rightarrow y = 2x + 1$"
              },
              {
                "label": "Verify",
                "content": "At $(1, 3)$: $2(1) + 1 = 3$ ✓. Slopes match ($2 = 2$), intercepts differ ($1 \\neq -5$) ✓"
              },
              {
                "label": "Answer",
                "content": "$y = 2x + 1$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Find the slope of $6x - 3y = 9$ using the $-A/B$ shortcut. Then write the parallel line through $(2, 4)$.",
            "answer": "Slope $= -6/(-3) = 2$. Using $(2, 4)$: $y - 4 = 2(x - 2) \\Rightarrow y = 2x$."
          }
        ]
      }
    }
  },
  "15": {
    "moduleId": "linear-equations",
    "title": "Simple Parallel Lines in a System Question",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "\"No solution must mean no intersection. And no intersection must mean these lines are parallel. Parallel lines have the same slope but different y-intercept.\"",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Parallel Lines in a System Question"
          },
          {
            "type": "text",
            "content": "Parallel lines never intersect — they run in the same direction forever. Algebraically, this means they have the **same slope** but different $y$-intercepts."
          },
          {
            "type": "text",
            "content": "Two lines are parallel if and only if $m_1 = m_2$ and $b_1 \\neq b_2$. On the SAT, \"parallel\" questions often give you one equation and ask you to find or identify another line with the same slope. In system-of-equations contexts, parallel lines mean the system has **no solution**."
          },
          {
            "type": "diagramRef",
            "visualType": "parallelLinesDiagram",
            "description": "Parallel lines have equal slopes and never intersect."
          },
          {
            "type": "formula",
            "label": "Simple Parallel Lines in a System Question — Core Rule",
            "content": "$$m_1=m_2,\\quad b_1\\ne b_2$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Line 1: $y = 2x + 3$. A parallel line through $(1, 7)$: slope must be $2$. Using point-slope: $y - 7 = 2(x - 1) \\Rightarrow y = 2x + 5$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students confuse \"same slope\" with \"same equation.\" If slopes AND intercepts are equal, it is the same line (infinitely many solutions), not parallel (no solution). Parallel → same slope, different intercept → no intersection → no solution. Same line → same slope AND same intercept → infinitely many solutions."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Parallel means equal slopes but different intercepts. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Parallel Lines in a System Question\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "One equation in a system is $y = 6x + 18$. The system has no solution. Which could be the second equation? (A) $y = 6x + 18$ (B) $y = 6x + 10$ (C) $y = -6x + 18$ (D) $y = 3x + 18$",
            "steps": [
              {
                "label": "No solution → parallel → same slope",
                "content": "Given slope $= 6$. Eliminate (C) slope $-6$ and (D) slope $3$ — wrong slopes."
              },
              {
                "label": "Check intercepts differ",
                "content": "(A) has intercept $18$ — same as given, so it's the **same line** (infinite solutions, not zero). (B) has intercept $10 \\neq 18$ — different intercept ✓"
              },
              {
                "label": "Answer",
                "content": "**(B)**. Same slope ($6$), different intercept ($10 \\neq 18$) → parallel → no solution."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "The system $2x + 3y = 7$ and $6x + ky = 10$ has no solution. What is $k$?",
            "answer": "No solution → parallel → slopes match. Slope 1: $-2/3$. Slope 2: $-6/k$. Set equal: $2/3 = 6/k \\Rightarrow 2k = 18 \\Rightarrow k = 9$. Check intercepts: $7/3 \\neq 10/9$ ✓"
          }
        ]
      }
    }
  },
  "16": {
    "moduleId": "linear-equations",
    "title": "Complex Parallel Lines in a System Question #1",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "when coefficients are fractions, isolate $y$ in both equations, identify the slopes, set them equal, and cross-multiply to solve for the constant.",
        "blocks": [
          {
            "type": "heading",
            "content": "Complex Parallel Lines in a System Question #1"
          },
          {
            "type": "text",
            "content": "Parallel lines never intersect — they run in the same direction forever. Algebraically, this means they have the **same slope** but different $y$-intercepts."
          },
          {
            "type": "text",
            "content": "Two lines are parallel if and only if $m_1 = m_2$ and $b_1 \\neq b_2$. On the SAT, \"parallel\" questions often give you one equation and ask you to find or identify another line with the same slope. In system-of-equations contexts, parallel lines mean the system has **no solution**."
          },
          {
            "type": "diagramRef",
            "visualType": "parallelLinesDiagram",
            "description": "Parallel lines have equal slopes and never intersect."
          },
          {
            "type": "formula",
            "label": "Complex Parallel Lines in a System Question #1 — Core Rule",
            "content": "$$m_1=m_2,\\quad b_1\\ne b_2$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Line 1: $y = 2x + 3$. A parallel line through $(1, 7)$: slope must be $2$. Using point-slope: $y - 7 = 2(x - 1) \\Rightarrow y = 2x + 5$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students confuse \"same slope\" with \"same equation.\" If slopes AND intercepts are equal, it is the same line (infinitely many solutions), not parallel (no solution). Parallel → same slope, different intercept → no intersection → no solution. Same line → same slope AND same intercept → infinitely many solutions."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Parallel means equal slopes but different intercepts. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Complex Parallel Lines in a System Question #1\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Hard",
            "problem": "The system $(k+1)x + 4y = 10$ and $3x + 2y = 7$ has no solution. What is the value of $k$?",
            "steps": [
              {
                "label": "Extract slopes",
                "content": "Eq 1: slope $= -\\frac{k+1}{4}$. Eq 2: slope $= -\\frac{3}{2}$."
              },
              {
                "label": "Set slopes equal (parallel)",
                "content": "$\\frac{k+1}{4} = \\frac{3}{2}$"
              },
              {
                "label": "Cross-multiply",
                "content": "$2(k+1) = 12 \\Rightarrow 2k + 2 = 12 \\Rightarrow k = 5$"
              },
              {
                "label": "Verify intercepts differ",
                "content": "Eq 1: $\\frac{10}{4} = 2.5$. Eq 2: $\\frac{7}{2} = 3.5$. Different ✓ → confirmed parallel, not same line."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "The system $(2k)x + 6y = 4$ and $5x + 3y = 9$ has no solution. Find $k$.",
            "answer": "Slopes: $-\\frac{2k}{6} = -\\frac{k}{3}$ and $-\\frac{5}{3}$. Set equal: $\\frac{k}{3} = \\frac{5}{3} \\Rightarrow k = 5$. Intercepts: $\\frac{4}{6} \\neq \\frac{9}{3}$ ✓"
          }
        ]
      }
    }
  },
  "17": {
    "moduleId": "linear-equations",
    "title": "Complex Parallel Lines #1 (DESMOS Method)",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "graph both equations in Desmos, add a slider for the unknown constant, and adjust until the lines become parallel (no intersection).",
        "blocks": [
          {
            "type": "heading",
            "content": "Complex Parallel Lines #1 (DESMOS Method)"
          },
          {
            "type": "text",
            "content": "Parallel lines never intersect — they run in the same direction forever. Algebraically, this means they have the **same slope** but different $y$-intercepts."
          },
          {
            "type": "text",
            "content": "Two lines are parallel if and only if $m_1 = m_2$ and $b_1 \\neq b_2$. On the SAT, \"parallel\" questions often give you one equation and ask you to find or identify another line with the same slope. In system-of-equations contexts, parallel lines mean the system has **no solution**."
          },
          {
            "type": "diagramRef",
            "visualType": "parallelLinesDiagram",
            "description": "Parallel lines have equal slopes and never intersect."
          },
          {
            "type": "formula",
            "label": "Complex Parallel Lines #1 (DESMOS Method) — Core Rule",
            "content": "$$m_1=m_2,\\quad b_1\\ne b_2$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Line 1: $y = 2x + 3$. A parallel line through $(1, 7)$: slope must be $2$. Using point-slope: $y - 7 = 2(x - 1) \\Rightarrow y = 2x + 5$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students confuse \"same slope\" with \"same equation.\" If slopes AND intercepts are equal, it is the same line (infinitely many solutions), not parallel (no solution). Parallel → same slope, different intercept → no intersection → no solution. Same line → same slope AND same intercept → infinitely many solutions."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Parallel means equal slopes but different intercepts. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Complex Parallel Lines #1 (DESMOS Method)\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Using Desmos, find the value of $p$ that makes $2x + 5y = 8$ and $px + 10y = 3$ have no solution.",
            "steps": [
              {
                "label": "Enter in Desmos",
                "content": "Type both equations. Desmos creates a slider for $p$ automatically."
              },
              {
                "label": "Adjust slider",
                "content": "Move $p$ until the lines are parallel (no intersection visible at any zoom). This happens at $p = 4$."
              },
              {
                "label": "Verify algebraically",
                "content": "Slopes: $-2/5$ and $-4/10 = -2/5$. Equal ✓. Intercepts: $8/5 \\neq 3/10$. Different ✓."
              },
              {
                "label": "Answer",
                "content": "$p = 4$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "You enter $3x + 4y = 8$ and $kx + 8y = 5$ into Desmos. At what $k$-value do the lines become parallel?",
            "answer": "Slopes match: $3/4 = k/8 \\Rightarrow k = 6$. In Desmos, the slider shows no intersection at $k = 6$."
          }
        ]
      }
    }
  },
  "18": {
    "moduleId": "linear-equations",
    "title": "Complex Parallel Lines in a System Question #2",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "when coefficients involve $r$ and fractions, isolate $y$ in both equations, identify slopes, set them equal, and cross-multiply. The difficulty is algebraic, not conceptual.",
        "blocks": [
          {
            "type": "heading",
            "content": "Complex Parallel Lines in a System Question #2"
          },
          {
            "type": "text",
            "content": "Parallel lines never intersect — they run in the same direction forever. Algebraically, this means they have the **same slope** but different $y$-intercepts."
          },
          {
            "type": "text",
            "content": "Two lines are parallel if and only if $m_1 = m_2$ and $b_1 \\neq b_2$. On the SAT, \"parallel\" questions often give you one equation and ask you to find or identify another line with the same slope. In system-of-equations contexts, parallel lines mean the system has **no solution**."
          },
          {
            "type": "diagramRef",
            "visualType": "parallelLinesDiagram",
            "description": "Parallel lines have equal slopes and never intersect."
          },
          {
            "type": "formula",
            "label": "Complex Parallel Lines in a System Question #2 — Core Rule",
            "content": "$$m_1=m_2,\\quad b_1\\ne b_2$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Line 1: $y = 2x + 3$. A parallel line through $(1, 7)$: slope must be $2$. Using point-slope: $y - 7 = 2(x - 1) \\Rightarrow y = 2x + 5$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students confuse \"same slope\" with \"same equation.\" If slopes AND intercepts are equal, it is the same line (infinitely many solutions), not parallel (no solution). Parallel → same slope, different intercept → no intersection → no solution. Same line → same slope AND same intercept → infinitely many solutions."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Parallel means equal slopes but different intercepts. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Complex Parallel Lines in a System Question #2\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Hard",
            "problem": "The system $(k-2)x + 3y = 7$ and $5x + 6y = 11$ has no solution. Find $k$.",
            "steps": [
              {
                "label": "Extract slopes",
                "content": "Eq 1: slope $= -\\frac{k-2}{3}$. Eq 2: slope $= -\\frac{5}{6}$."
              },
              {
                "label": "Set equal and cross-multiply",
                "content": "$\\frac{k-2}{3} = \\frac{5}{6} \\Rightarrow 6(k-2) = 15 \\Rightarrow 6k - 12 = 15 \\Rightarrow k = \\frac{27}{6} = \\frac{9}{2}$"
              },
              {
                "label": "Verify intercepts differ",
                "content": "$7/3 \\neq 11/6$ ✓ → confirmed parallel."
              },
              {
                "label": "Answer",
                "content": "$k = \\frac{9}{2}$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "The system $(k-1)x + 6y = 10$ and $4x + 3y = 8$ has no solution. Find $k$.",
            "answer": "Slopes: $-\\frac{k-1}{6}$ and $-\\frac{4}{3}$. Set equal: $\\frac{k-1}{6} = \\frac{4}{3} \\Rightarrow 3(k-1) = 24 \\Rightarrow k = 9$."
          }
        ]
      }
    }
  },
  "19": {
    "moduleId": "linear-equations",
    "title": "Complex Parallel Lines #2 (DESMOS Method)",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "the same problem solved purely in Desmos — graph both equations, manipulate the slider, widen the range if needed, and watch for the lines to become parallel.",
        "blocks": [
          {
            "type": "heading",
            "content": "Complex Parallel Lines #2 (DESMOS Method)"
          },
          {
            "type": "text",
            "content": "Parallel lines never intersect — they run in the same direction forever. Algebraically, this means they have the **same slope** but different $y$-intercepts."
          },
          {
            "type": "text",
            "content": "Two lines are parallel if and only if $m_1 = m_2$ and $b_1 \\neq b_2$. On the SAT, \"parallel\" questions often give you one equation and ask you to find or identify another line with the same slope. In system-of-equations contexts, parallel lines mean the system has **no solution**."
          },
          {
            "type": "diagramRef",
            "visualType": "parallelLinesDiagram",
            "description": "Parallel lines have equal slopes and never intersect."
          },
          {
            "type": "formula",
            "label": "Complex Parallel Lines #2 (DESMOS Method) — Core Rule",
            "content": "$$m_1=m_2,\\quad b_1\\ne b_2$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Line 1: $y = 2x + 3$. A parallel line through $(1, 7)$: slope must be $2$. Using point-slope: $y - 7 = 2(x - 1) \\Rightarrow y = 2x + 5$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students confuse \"same slope\" with \"same equation.\" If slopes AND intercepts are equal, it is the same line (infinitely many solutions), not parallel (no solution). Parallel → same slope, different intercept → no intersection → no solution. Same line → same slope AND same intercept → infinitely many solutions."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Parallel means equal slopes but different intercepts. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Complex Parallel Lines #2 (DESMOS Method)\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Using Desmos, find $r$ that makes $(2r-1)x + 6y = 5$ parallel to $3x + 2y = 8$.",
            "steps": [
              {
                "label": "Enter equations in Desmos",
                "content": "Type both. Desmos creates a slider for $r$."
              },
              {
                "label": "Algebraic setup",
                "content": "Eq 2 slope: $-3/2$. Eq 1 slope: $-(2r-1)/6$. Set equal: $\\frac{2r-1}{6} = \\frac{3}{2}$."
              },
              {
                "label": "Cross-multiply",
                "content": "$2(2r-1) = 18 \\Rightarrow 4r - 2 = 18 \\Rightarrow r = 5$"
              },
              {
                "label": "Desmos confirmation",
                "content": "Set slider to $r = 5$. Zoom out — no intersection visible. Lines are parallel ✓"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "You enter $(3k)x + 8y = 5$ and $6x + 4y = 11$ into Desmos. At what $k$-value are the lines parallel?",
            "answer": "Slopes match: $3k/8 = 6/4 \\Rightarrow 3k/8 = 3/2 \\Rightarrow 6k = 24 \\Rightarrow k = 4$."
          }
        ]
      }
    }
  },
  "20": {
    "moduleId": "linear-equations",
    "title": "Complex Parallel Lines in a System Question #3",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "an alternative approach — rearrange both sides of the equation into separate lines, then set slopes equal. \"Since both sides are equal, I can set them equal to $y$.\"",
        "blocks": [
          {
            "type": "heading",
            "content": "Complex Parallel Lines in a System Question #3"
          },
          {
            "type": "text",
            "content": "Parallel lines never intersect — they run in the same direction forever. Algebraically, this means they have the **same slope** but different $y$-intercepts."
          },
          {
            "type": "text",
            "content": "Two lines are parallel if and only if $m_1 = m_2$ and $b_1 \\neq b_2$. On the SAT, \"parallel\" questions often give you one equation and ask you to find or identify another line with the same slope. In system-of-equations contexts, parallel lines mean the system has **no solution**."
          },
          {
            "type": "diagramRef",
            "visualType": "parallelLinesDiagram",
            "description": "Parallel lines have equal slopes and never intersect."
          },
          {
            "type": "formula",
            "label": "Complex Parallel Lines in a System Question #3 — Core Rule",
            "content": "$$m_1=m_2,\\quad b_1\\ne b_2$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Line 1: $y = 2x + 3$. A parallel line through $(1, 7)$: slope must be $2$. Using point-slope: $y - 7 = 2(x - 1) \\Rightarrow y = 2x + 5$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students confuse \"same slope\" with \"same equation.\" If slopes AND intercepts are equal, it is the same line (infinitely many solutions), not parallel (no solution). Parallel → same slope, different intercept → no intersection → no solution. Same line → same slope AND same intercept → infinitely many solutions."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Parallel means equal slopes but different intercepts. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Complex Parallel Lines in a System Question #3\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Hard",
            "problem": "In the equation $21px - 3x = 84$, $p$ is a constant. The equation has no solution. What is $p$?",
            "steps": [
              {
                "label": "Reframe as two lines",
                "content": "Add $3x$ to both sides: $21px = 3x + 84$. Set both equal to $y$: Line 1: $y = 21px$. Line 2: $y = 3x + 84$."
              },
              {
                "label": "No solution → parallel → same slope",
                "content": "Slope of line 1: $21p$. Slope of line 2: $3$. Set equal: $21p = 3$."
              },
              {
                "label": "Solve",
                "content": "$p = \\frac{3}{21} = \\frac{1}{7}$"
              },
              {
                "label": "Answer",
                "content": "$p = \\frac{1}{7}$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "The system $4x + ky = 20$ and $2x - 3y = 7$ has no solution. Find $k$.",
            "answer": "Slopes: $-4/k$ and $-2/(-3) = 2/3$. Set equal: $-4/k = 2/3 \\Rightarrow -12 = 2k \\Rightarrow k = -6$."
          }
        ]
      }
    }
  },
  "21": {
    "moduleId": "linear-equations",
    "title": "Complex Parallel Lines #3 (Answer Choices Method)",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "when algebra is messy, plug each answer choice into the equation and check if it produces \"no solution\" ($0 = \\text{non-zero}$).",
        "blocks": [
          {
            "type": "heading",
            "content": "Complex Parallel Lines #3 (Answer Choices Method)"
          },
          {
            "type": "text",
            "content": "Parallel lines never intersect — they run in the same direction forever. Algebraically, this means they have the **same slope** but different $y$-intercepts."
          },
          {
            "type": "text",
            "content": "Two lines are parallel if and only if $m_1 = m_2$ and $b_1 \\neq b_2$. On the SAT, \"parallel\" questions often give you one equation and ask you to find or identify another line with the same slope. In system-of-equations contexts, parallel lines mean the system has **no solution**."
          },
          {
            "type": "diagramRef",
            "visualType": "parallelLinesDiagram",
            "description": "Parallel lines have equal slopes and never intersect."
          },
          {
            "type": "formula",
            "label": "Complex Parallel Lines #3 (Answer Choices Method) — Core Rule",
            "content": "$$m_1=m_2,\\quad b_1\\ne b_2$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Line 1: $y = 2x + 3$. A parallel line through $(1, 7)$: slope must be $2$. Using point-slope: $y - 7 = 2(x - 1) \\Rightarrow y = 2x + 5$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students confuse \"same slope\" with \"same equation.\" If slopes AND intercepts are equal, it is the same line (infinitely many solutions), not parallel (no solution). Parallel → same slope, different intercept → no intersection → no solution. Same line → same slope AND same intercept → infinitely many solutions."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Parallel means equal slopes but different intercepts. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Complex Parallel Lines #3 (Answer Choices Method)\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Hard",
            "problem": "In the equation $21px - 3x = 84$, $p$ is a constant. The equation has no solution. What is $p$? (A) $0$ (B) $\\frac{1}{7}$ (C) $3$ (D) $7$",
            "steps": [
              {
                "label": "Test (A): $p = 0$",
                "content": "$21(0)x - 3x = 84 \\Rightarrow -3x = 84 \\Rightarrow x = -28$. Has a solution — eliminate."
              },
              {
                "label": "Test (B): $p = 1/7$",
                "content": "$21(\\frac{1}{7})x - 3x = 84 \\Rightarrow 3x - 3x = 84 \\Rightarrow 0 = 84$. **Contradiction** — no solution ✓"
              },
              {
                "label": "Why this works",
                "content": "When $p = 1/7$, the $x$-terms cancel ($3x - 3x = 0x$), leaving $0 = 84$, which is impossible. That's the definition of \"no solution.\""
              },
              {
                "label": "Answer",
                "content": "**(B) $p = \\frac{1}{7}$**"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "System: $kx + 4y = 12$ and $3x + 2y = 5$. Choices: (A) $2$ (B) $4$ (C) $6$ (D) $8$. Which gives no solution?",
            "answer": "Test (C) $k = 6$: slopes $= -6/4 = -3/2$ and $-3/2$. Equal. Intercepts: $12/4 = 3$ vs $5/2 = 2.5$. Different. **Answer: (C)**."
          }
        ]
      }
    }
  },
  "22": {
    "moduleId": "linear-equations",
    "title": "Perpendicular Lines",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "perpendicular means \"opposite reciprocal\" — opposite (change the sign) AND reciprocal (flip the fraction). Two operations, not one.",
        "blocks": [
          {
            "type": "heading",
            "content": "Perpendicular Lines"
          },
          {
            "type": "text",
            "content": "Perpendicular lines meet at a $90°$ angle. The key relationship: their slopes are **negative reciprocals** of each other — flip the fraction and change the sign."
          },
          {
            "type": "text",
            "content": "If line 1 has slope $m$, a perpendicular line has slope $-1/m$. The product of perpendicular slopes is always $-1$: $m_1 \\times m_2 = -1$. On the SAT, if you see a slope of $2/3$, the perpendicular slope is $-3/2$."
          },
          {
            "type": "diagramRef",
            "visualType": "perpendicularLinesDiagram",
            "description": "Perpendicular slopes are negative reciprocals and multiply to -1."
          },
          {
            "type": "formula",
            "label": "Perpendicular Lines — Core Rule",
            "content": "$$m_1\\cdot m_2=-1\\quad\\text{(negative reciprocals)}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "A line has slope $4$ (i.e., $4/1$). Perpendicular slope: flip → $1/4$, negate → $-1/4$. Check: $4 \\times (-1/4) = -1$. ✓"
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students either forget to flip (they write $-2/3$ instead of $-3/2$) or forget to negate (they write $3/2$ instead of $-3/2$). Both errors are common and CB designs choices to catch each one. Two steps, every time: (1) flip the fraction, (2) change the sign. Check: multiply the two slopes — the result must be $-1$."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Flip and negate to get perpendicular slope. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Perpendicular Lines\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Line $P$ is defined by $2y + 18x = 9$. Line $R$ is perpendicular to line $P$. What is the slope of line $R$? (A) $-9$ (B) $9$ (C) $\\frac{1}{9}$ (D) $-\\frac{1}{9}$",
            "steps": [
              {
                "label": "Get line $P$ into $y = mx + b$",
                "content": "subtract $18x$: $2y = -18x + 9$. Divide by $2$: $y = -9x + \\frac{9}{2}$. Slope of $P = -9$."
              },
              {
                "label": "Opposite reciprocal",
                "content": "Opposite: $-9 \\to +9$. Reciprocal: $9 \\to \\frac{1}{9}$. Perpendicular slope $= +\\frac{1}{9}$."
              },
              {
                "label": "Product check",
                "content": "$(-9) \\times (\\frac{1}{9}) = -1$ ✓"
              },
              {
                "label": "Answer",
                "content": "**(C) $\\frac{1}{9}$**. (A) is the original slope. (D) forgot the sign change."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "What is the slope perpendicular to $y = \\frac{3}{7}x - 4$? Do the product check.",
            "answer": "Given slope $= 3/7$. Opposite: $-3/7$. Reciprocal: $-7/3$. Check: $(3/7)(-7/3) = -1$ ✓. Perpendicular slope $= -7/3$."
          }
        ]
      }
    }
  },
  "23": {
    "moduleId": "linear-equations",
    "title": "Simple Perpendicular Lines Question",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Compute the opposite reciprocal, then use point-slope with the given point. The video eliminates wrong slopes first, then verifies the point.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Perpendicular Lines Question"
          },
          {
            "type": "text",
            "content": "Perpendicular lines meet at a $90°$ angle. The key relationship: their slopes are **negative reciprocals** of each other — flip the fraction and change the sign."
          },
          {
            "type": "text",
            "content": "If line 1 has slope $m$, a perpendicular line has slope $-1/m$. The product of perpendicular slopes is always $-1$: $m_1 \\times m_2 = -1$. On the SAT, if you see a slope of $2/3$, the perpendicular slope is $-3/2$."
          },
          {
            "type": "diagramRef",
            "visualType": "perpendicularLinesDiagram",
            "description": "Perpendicular slopes are negative reciprocals and multiply to -1."
          },
          {
            "type": "formula",
            "label": "Simple Perpendicular Lines Question — Core Rule",
            "content": "$$m_1\\cdot m_2=-1\\quad\\text{(negative reciprocals)}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "A line has slope $4$ (i.e., $4/1$). Perpendicular slope: flip → $1/4$, negate → $-1/4$. Check: $4 \\times (-1/4) = -1$. ✓"
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students either forget to flip (they write $-2/3$ instead of $-3/2$) or forget to negate (they write $3/2$ instead of $-3/2$). Both errors are common and CB designs choices to catch each one. Two steps, every time: (1) flip the fraction, (2) change the sign. Check: multiply the two slopes — the result must be $-1$."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Flip and negate to get perpendicular slope. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Perpendicular Lines Question\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "What is the equation of the line perpendicular to $y = \\frac{2}{3}x + 1$ that passes through $(4, -2)$? (A) $y = \\frac{2}{3}x - \\frac{14}{3}$ (B) $y = -\\frac{3}{2}x + 4$ (C) $y = \\frac{3}{2}x - 8$ (D) $y = -\\frac{2}{3}x + \\frac{2}{3}$",
            "steps": [
              {
                "label": "Perpendicular slope",
                "content": "Given slope $= 2/3$. Opposite reciprocal $= -3/2$. Only (B) has slope $-3/2$."
              },
              {
                "label": "Trap identification",
                "content": "(A) slope $2/3$ = parallel. (C) slope $3/2$ = flipped but not negated. (D) slope $-2/3$ = negated but not flipped."
              },
              {
                "label": "Verify point $(4, -2)$",
                "content": "$-\\frac{3}{2}(4) + 4 = -6 + 4 = -2$ ✓"
              },
              {
                "label": "Answer",
                "content": "**(B)**"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Find the equation perpendicular to $y = -4x + 3$ through $(8, 5)$.",
            "answer": "Perpendicular slope $= +1/4$. Check: $(-4)(1/4) = -1$ ✓. Point-slope: $y - 5 = \\frac{1}{4}(x - 8) \\Rightarrow y = \\frac{1}{4}x + 3$."
          }
        ]
      }
    }
  },
  "24": {
    "moduleId": "linear-equations",
    "title": "Complex Perpendicular Lines Question",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "find unknown constants $a$ and $b$ by using the perpendicular relationship, then use Desmos to verify among the answer choices.",
        "blocks": [
          {
            "type": "heading",
            "content": "Complex Perpendicular Lines Question"
          },
          {
            "type": "text",
            "content": "Perpendicular lines meet at a $90°$ angle. The key relationship: their slopes are **negative reciprocals** of each other — flip the fraction and change the sign."
          },
          {
            "type": "text",
            "content": "If line 1 has slope $m$, a perpendicular line has slope $-1/m$. The product of perpendicular slopes is always $-1$: $m_1 \\times m_2 = -1$. On the SAT, if you see a slope of $2/3$, the perpendicular slope is $-3/2$."
          },
          {
            "type": "diagramRef",
            "visualType": "perpendicularLinesDiagram",
            "description": "Perpendicular slopes are negative reciprocals and multiply to -1."
          },
          {
            "type": "formula",
            "label": "Complex Perpendicular Lines Question — Core Rule",
            "content": "$$m_1\\cdot m_2=-1\\quad\\text{(negative reciprocals)}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "A line has slope $4$ (i.e., $4/1$). Perpendicular slope: flip → $1/4$, negate → $-1/4$. Check: $4 \\times (-1/4) = -1$. ✓"
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students either forget to flip (they write $-2/3$ instead of $-3/2$) or forget to negate (they write $3/2$ instead of $-3/2$). Both errors are common and CB designs choices to catch each one. Two steps, every time: (1) flip the fraction, (2) change the sign. Check: multiply the two slopes — the result must be $-1$."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Flip and negate to get perpendicular slope. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Complex Perpendicular Lines Question\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Hard",
            "problem": "Line $\\ell$: $5x + 3y = 15$. Line $m$ is perpendicular to $\\ell$ and passes through the $x$-intercept of $\\ell$. What is the equation of line $m$?",
            "steps": [
              {
                "label": "Find x-intercept of $\\ell$",
                "content": "Set $y = 0$: $5x = 15 \\Rightarrow x = 3$. Point: $(3, 0)$."
              },
              {
                "label": "Slope of $\\ell$",
                "content": "$m_{\\ell} = -A/B = -5/3$"
              },
              {
                "label": "Perpendicular slope",
                "content": "Opposite reciprocal of $-5/3$: flip → $-3/5$, negate → $+3/5$. Check: $(-5/3)(3/5) = -1$ ✓"
              },
              {
                "label": "Build equation through $(3, 0)$",
                "content": "$y - 0 = \\frac{3}{5}(x - 3) \\Rightarrow y = \\frac{3}{5}x - \\frac{9}{5}$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Line $\\ell$: $2x - 5y = 10$. A perpendicular line passes through the y-intercept of $\\ell$. Find the perpendicular line's equation.",
            "answer": "Y-intercept of $\\ell$: set $x = 0 \\Rightarrow y = -2$, giving $(0, -2)$. Slope of $\\ell$: $-2/(-5) = 2/5$. Perpendicular slope: $-5/2$. Check: $(2/5)(-5/2) = -1$ ✓. Equation: $y = -\\frac{5}{2}x - 2$."
          }
        ]
      }
    }
  }
};
