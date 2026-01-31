// Practice Test 4 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Original questions modeled after College Board SAT Practice Test #3 with enhanced explanations

export const practiceTest4 = {
  id: "practice-test-4",
  title: "Practice Test 4",
  description: "Full-length SAT Math practice test with 2 modules",
  totalQuestions: 44,
  timePerModule: 35, // minutes
  modules: [
    {
      id: "module-1",
      title: "Module 1",
      timeLimit: 35,
      questions: [
        // Question 1: Word problem with linear equation
        {
          id: 1,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A bookstore sells novels for \\$8 each and journals for \\$3 each. Which expression represents the total cost, in dollars, for buying $n$ novels and $j$ journals?",
          choices: [
            { id: "A", text: "$11nj$" },
            { id: "B", text: "$8n + 3j$" },
            { id: "C", text: "$3n + 8j$" },
            { id: "D", text: "$24nj$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** The total cost is the sum of the cost of novels and the cost of journals.\n\n• Cost of $n$ novels at \\$8 each: $8n$\n• Cost of $j$ journals at \\$3 each: $3j$\n• Total cost: $8n + 3j$\n\n**Why other choices are incorrect:**\n• Choice A ($11nj$): Incorrectly adds prices and multiplies quantities\n• Choice C ($3n + 8j$): Swaps the prices for novels and journals\n• Choice D ($24nj$): Incorrectly multiplies both prices and quantities\n\n**Key concept:** Total cost = (price per item 1)(quantity 1) + (price per item 2)(quantity 2)",
          skills: ["linear-expressions", "word-problems"]
        },

        // Question 2: Parallel lines
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Line $m$ is shown in the $xy$-plane. Line $n$ (not shown) is parallel to line $m$. Which equation represents line $n$?",
          questionFormula: {
            lines: ["Line $m$: $y = -4x + 2$"]
          },
          choices: [
            { id: "A", text: "$y = -4x + 7$" },
            { id: "B", text: "$y = 4x + 2$" },
            { id: "C", text: "$y = -\\frac{1}{4}x + 3$" },
            { id: "D", text: "$y = \\frac{1}{4}x + 7$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Parallel lines have the same slope but different $y$-intercepts.\n\n• Line $m$ has slope $-4$ (coefficient of $x$)\n• A parallel line must also have slope $-4$\n• Only choice A has slope $-4$: $y = -4x + 7$\n\n**Why other choices are incorrect:**\n• Choice B: Slope is $4$ (opposite sign)\n• Choice C: Slope is $-\\frac{1}{4}$ (negative reciprocal, which would be perpendicular)\n• Choice D: Slope is $\\frac{1}{4}$ (different slope entirely)\n\n**Key concept:** Parallel lines have equal slopes: $m_1 = m_2$",
          skills: ["parallel-lines", "slope"]
        },

        // Question 3: Word problem - payment equation
        {
          id: 3,
          type: "fill-in",
          difficulty: "easy",
          question: "A gym membership has a one-time signup fee and a monthly charge. The equation $3600 = 400 + 320t$ represents the total amount paid, in dollars, after $t$ months. How many months does it take to pay a total of \\$3600?",
          correctAnswer: 10,
          explanation: "**The correct answer is 10.** Solve for $t$ in the equation.\n\n• $3600 = 400 + 320t$\n• $3600 - 400 = 320t$\n• $3200 = 320t$\n• $t = 3200 \\div 320$\n• $t = 10$\n\n**Understanding the equation:**\n• $400$ represents the one-time signup fee\n• $320t$ represents the monthly charges (\\$320/month)\n• $3600$ is the total amount paid\n\n**Key concept:** In equations of the form Total = Fixed Cost + (Rate × Time), isolate the variable by subtracting the fixed cost first.",
          skills: ["linear-equations", "word-problems"]
        },

        // Question 4: Two-way table probability
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "The table shows the results of a survey asking $200$ students about their preferred study method. What fraction of students who prefer visual learning are seniors?",
          questionTable: {
            headers: ["", "Visual", "Auditory", "Hands-on", "Total"],
            rows: [
              ["Juniors", "45", "30", "25", "100"],
              ["Seniors", "35", "40", "25", "100"],
              ["Total", "80", "70", "50", "200"]
            ]
          },
          choices: [
            { id: "A", text: "$\\frac{35}{200}$" },
            { id: "B", text: "$\\frac{35}{100}$" },
            { id: "C", text: "$\\frac{35}{80}$" },
            { id: "D", text: "$\\frac{80}{200}$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Find the fraction of visual learners who are seniors.\n\n• Total students who prefer visual learning: $80$\n• Seniors who prefer visual learning: $35$\n• Fraction: $\\frac{35}{80}$\n\n**Why other choices are incorrect:**\n• Choice A ($\\frac{35}{200}$): Uses total students as denominator, not visual learners\n• Choice B ($\\frac{35}{100}$): Uses total seniors as denominator\n• Choice D ($\\frac{80}{200}$): Represents fraction of all students who prefer visual learning\n\n**Key concept:** For conditional probability, the denominator is the total of the condition (visual learners), not the overall total.",
          skills: ["probability", "two-way-tables"]
        },

        // Question 5: Slope interpretation
        {
          id: 5,
          type: "multiple-choice",
          difficulty: "easy",
          question: "The equation $T = 72 - 2h$ models the temperature $T$, in degrees Fahrenheit, of a room $h$ hours after the air conditioning is turned on. What does the number $2$ represent in this equation?",
          choices: [
            { id: "A", text: "The initial temperature of the room" },
            { id: "B", text: "The temperature after 2 hours" },
            { id: "C", text: "The decrease in temperature per hour" },
            { id: "D", text: "The number of hours until the room reaches its minimum temperature" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** In the equation $T = 72 - 2h$:\n\n• $72$ is the initial temperature (when $h = 0$)\n• $-2$ is the rate of change (slope)\n• The negative coefficient means temperature decreases\n• The magnitude $2$ means it decreases by $2°F$ per hour\n\n**Why other choices are incorrect:**\n• Choice A: $72$ represents the initial temperature, not $2$\n• Choice B: The temperature after $2$ hours would be $T = 72 - 2(2) = 68°F$\n• Choice D: The equation doesn't specify a minimum temperature\n\n**Key concept:** In $y = mx + b$ (or variations), $m$ represents the rate of change.",
          skills: ["slope-interpretation", "linear-models"]
        },

        // Question 6: Parallel line through a point
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which equation represents a line parallel to $y = -2x + 5$ that passes through the point $(3, 8)$?",
          choices: [
            { id: "A", text: "$y = -2x + 14$" },
            { id: "B", text: "$y = -2x + 2$" },
            { id: "C", text: "$y = \\frac{1}{2}x + 6.5$" },
            { id: "D", text: "$y = 2x + 2$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** A parallel line has the same slope ($-2$) but a different $y$-intercept.\n\n• Slope of parallel line: $m = -2$\n• Use point-slope form with $(3, 8)$:\n• $y - 8 = -2(x - 3)$\n• $y - 8 = -2x + 6$\n• $y = -2x + 14$\n\n**Verification:** Does $(3, 8)$ satisfy $y = -2x + 14$?\n$8 = -2(3) + 14 = -6 + 14 = 8$ ✓\n\n**Why other choices are incorrect:**\n• Choice B: $y = -2(3) + 2 = -4 \\neq 8$\n• Choice C: Wrong slope ($\\frac{1}{2}$ instead of $-2$)\n• Choice D: Wrong slope ($2$ instead of $-2$)\n\n**Calculator tip:** Graph $y = -2x + 5$ and $y = -2x + 14$ in Desmos to verify they're parallel.",
          skills: ["parallel-lines", "point-slope-form"]
        },

        // Question 7: Solving linear function equation
        {
          id: 7,
          type: "fill-in",
          difficulty: "medium",
          question: "The function $f$ is defined by $f(x) = 6x + 4$. For what value of $x$ does $f(x) = 28$?",
          correctAnswer: 4,
          explanation: "**The correct answer is 4.** Set $f(x)$ equal to $28$ and solve for $x$.\n\n• $f(x) = 6x + 4$\n• $28 = 6x + 4$\n• $28 - 4 = 6x$\n• $24 = 6x$\n• $x = 4$\n\n**Verification:** $f(4) = 6(4) + 4 = 24 + 4 = 28$ ✓\n\n**Key concept:** To find the input for a given output, substitute the output for $f(x)$ and solve the resulting equation.",
          skills: ["function-equations", "linear-equations"]
        },

        // Question 8: Exponential growth (doubling)
        {
          id: 8,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A bacteria colony starts with $500$ bacteria and doubles every $6$ hours. Which expression gives the number of bacteria after $t$ hours?",
          choices: [
            { id: "A", text: "$500(2)^{t/6}$" },
            { id: "B", text: "$500(2)^{6t}$" },
            { id: "C", text: "$500(6)^{t/2}$" },
            { id: "D", text: "$500 + 2t$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** For exponential doubling:\n\n• Initial amount: $500$\n• Growth factor: $2$ (doubling)\n• Doubling period: $6$ hours\n• Formula: $P(t) = P_0 \\times 2^{t/\\text{period}}$\n• $P(t) = 500 \\times 2^{t/6}$\n\n**Verification:**\n• At $t = 0$: $500 \\times 2^0 = 500$ ✓\n• At $t = 6$: $500 \\times 2^1 = 1000$ (doubled) ✓\n• At $t = 12$: $500 \\times 2^2 = 2000$ (doubled again) ✓\n\n**Why other choices are incorrect:**\n• Choice B: $2^{6t}$ grows much too fast\n• Choice C: Uses wrong base ($6$) and wrong exponent structure\n• Choice D: Linear growth, not exponential\n\n**Key concept:** Doubling formula: $P(t) = P_0 \\times 2^{t/\\text{doubling period}}$",
          skills: ["exponential-growth", "doubling"]
        },

        // Question 9: Function translation
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The graph of $y = f(x)$ passes through the point $(4, 7)$. If $g(x) = f(x) + 3$, which point must lie on the graph of $y = g(x)$?",
          choices: [
            { id: "A", text: "$(4, 4)$" },
            { id: "B", text: "$(4, 10)$" },
            { id: "C", text: "$(7, 7)$" },
            { id: "D", text: "$(1, 7)$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Adding $3$ to $f(x)$ shifts the graph up by $3$ units.\n\n• Original point on $f$: $(4, 7)$\n• $g(x) = f(x) + 3$ shifts all $y$-values up by $3$\n• New $y$-coordinate: $7 + 3 = 10$\n• Point on $g$: $(4, 10)$\n\n**Why other choices are incorrect:**\n• Choice A $(4, 4)$: This would be $f(x) - 3$, shifting down\n• Choice C $(7, 7)$: Incorrectly shifts the $x$-coordinate\n• Choice D $(1, 7)$: Incorrectly shifts $x$ instead of $y$\n\n**Key concept:** $y = f(x) + k$ shifts the graph vertically by $k$ units (up if $k > 0$).",
          skills: ["function-transformations", "translations"]
        },

        // Question 10: Rate word problem
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A water tank contains $240$ gallons of water. Water drains from the tank at a rate of $15$ gallons per minute. Which equation models the amount of water $W$, in gallons, remaining in the tank after $m$ minutes?",
          choices: [
            { id: "A", text: "$W = 240 + 15m$" },
            { id: "B", text: "$W = 240 - 15m$" },
            { id: "C", text: "$W = 15m - 240$" },
            { id: "D", text: "$W = 240m - 15$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** The water is draining, so the amount decreases over time.\n\n• Initial amount: $240$ gallons\n• Rate of change: $-15$ gallons per minute (draining)\n• Equation: $W = 240 - 15m$\n\n**Verification:**\n• At $m = 0$: $W = 240 - 0 = 240$ gallons ✓\n• At $m = 4$: $W = 240 - 60 = 180$ gallons ✓\n• At $m = 16$: $W = 240 - 240 = 0$ gallons (empty) ✓\n\n**Why other choices are incorrect:**\n• Choice A: Would mean water is being added\n• Choice C: Would give negative values initially\n• Choice D: Incorrect structure entirely\n\n**Key concept:** Linear decrease: Amount = Initial $-$ (Rate $\\times$ Time)",
          skills: ["linear-models", "rate-problems"]
        },

        // Question 11: Rearranging formulas
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The area $A$ of a triangle is given by $A = \\frac{1}{2}bh$, where $b$ is the base and $h$ is the height. Which equation correctly expresses $h$ in terms of $A$ and $b$?",
          choices: [
            { id: "A", text: "$h = 2Ab$" },
            { id: "B", text: "$h = \\frac{A}{2b}$" },
            { id: "C", text: "$h = \\frac{2A}{b}$" },
            { id: "D", text: "$h = \\frac{Ab}{2}$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Solve for $h$ in the formula $A = \\frac{1}{2}bh$.\n\n• $A = \\frac{1}{2}bh$\n• $2A = bh$ (multiply both sides by $2$)\n• $\\frac{2A}{b} = h$ (divide both sides by $b$)\n• $h = \\frac{2A}{b}$\n\n**Verification:** If $A = 12$ and $b = 4$:\n• $h = \\frac{2(12)}{4} = \\frac{24}{4} = 6$\n• Check: $A = \\frac{1}{2}(4)(6) = 12$ ✓\n\n**Why other choices are incorrect:**\n• Choice A: $h = 2Ab$ would give $h = 2(12)(4) = 96$, but $\\frac{1}{2}(4)(96) \\neq 12$\n• Choice B: $h = \\frac{A}{2b}$ would give $h = \\frac{12}{8} = 1.5$, but $\\frac{1}{2}(4)(1.5) = 3 \\neq 12$\n• Choice D: $h = \\frac{Ab}{2}$ would give $h = \\frac{48}{2} = 24$, but $\\frac{1}{2}(4)(24) = 48 \\neq 12$\n\n**Key concept:** When solving for a variable, perform inverse operations systematically.",
          skills: ["rearranging-formulas", "algebra"]
        },

        // Question 12: Similar triangles and trig ratios
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Triangles $PQR$ and $XYZ$ are similar, where $P$ corresponds to $X$ and $Q$ corresponds to $Y$. If $\\cos(P) = \\frac{5}{13}$, what is the value of $\\cos(X)$?",
          choices: [
            { id: "A", text: "$\\frac{5}{13}$" },
            { id: "B", text: "$\\frac{12}{13}$" },
            { id: "C", text: "$\\frac{13}{5}$" },
            { id: "D", text: "$\\frac{5}{12}$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** In similar triangles, corresponding angles are equal.\n\n• $P$ corresponds to $X$ means $\\angle P = \\angle X$\n• If $\\cos(P) = \\frac{5}{13}$, then $\\cos(X) = \\frac{5}{13}$\n\n**Why other choices are incorrect:**\n• Choice B ($\\frac{12}{13}$): This would be $\\sin(P)$ if the triangle were $5$-$12$-$13$\n• Choice C ($\\frac{13}{5}$): This is the reciprocal (secant), not cosine\n• Choice D ($\\frac{5}{12}$): This would be $\\tan(P)$ in a $5$-$12$-$13$ triangle\n\n**Key concept:** Similar triangles have equal corresponding angles, so their trigonometric ratios for corresponding angles are equal.",
          skills: ["similar-triangles", "trigonometry"]
        },

        // Question 13: Product of roots (Vieta's formulas)
        {
          id: 13,
          type: "fill-in",
          difficulty: "medium",
          question: "What is the product of the solutions to the equation $3x^2 - 7x + 2 = 0$?",
          correctAnswer: "2/3",
          alternateAnswers: [0.667, 0.67, ".667", ".67"],
          explanation: "**The correct answer is $\\frac{2}{3}$.** Use Vieta's formulas or solve the equation.\n\n**Method 1: Vieta's formulas**\nFor $ax^2 + bx + c = 0$, the product of roots $= \\frac{c}{a}$\n• Product $= \\frac{2}{3}$\n\n**Method 2: Solving the equation**\n• $3x^2 - 7x + 2 = 0$\n• $(3x - 1)(x - 2) = 0$\n• $x = \\frac{1}{3}$ or $x = 2$\n• Product: $\\frac{1}{3} \\times 2 = \\frac{2}{3}$\n\n**Key concept:** For $ax^2 + bx + c = 0$:\n• Sum of roots $= -\\frac{b}{a}$\n• Product of roots $= \\frac{c}{a}$",
          skills: ["quadratic-equations", "vietas-formulas"]
        },

        // Question 14: System of inequalities
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which point lies in the solution region of the system of inequalities shown?",
          questionFormula: {
            lines: ["$y \\geq 2x - 3$", "$y \\leq -x + 4$"]
          },
          choices: [
            { id: "A", text: "$(0, 0)$" },
            { id: "B", text: "$(4, 0)$" },
            { id: "C", text: "$(0, -4)$" },
            { id: "D", text: "$(3, 3)$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Test each point in both inequalities.\n\n**Testing $(0, 0)$:**\n• $y \\geq 2x - 3$: Is $0 \\geq 2(0) - 3$? Is $0 \\geq -3$? Yes ✓\n• $y \\leq -x + 4$: Is $0 \\leq -(0) + 4$? Is $0 \\leq 4$? Yes ✓\n\n**Why other choices are incorrect:**\n• Choice B $(4, 0)$: $0 \\geq 2(4) - 3 \\to 0 \\geq 5$ is FALSE\n• Choice C $(0, -4)$: $-4 \\geq -3$ is FALSE\n• Choice D $(3, 3)$: $3 \\geq 2(3) - 3 \\to 3 \\geq 3$ ✓, but $3 \\leq -3 + 4 \\to 3 \\leq 1$ is FALSE\n\n**Calculator tip:** Graph both inequalities in Desmos and find the overlapping region.",
          skills: ["systems-of-inequalities"]
        },

        // Question 15: Radical equation
        {
          id: 15,
          type: "fill-in",
          difficulty: "medium",
          question: "What is the smaller positive solution to the equation $\\sqrt{5x - 11} = x - 1$?",
          correctAnswer: 3,
          explanation: "**The correct answer is 3.** Solve by squaring both sides.\n\n• $\\sqrt{5x - 11} = x - 1$\n• $5x - 11 = (x - 1)^2$ (square both sides)\n• $5x - 11 = x^2 - 2x + 1$\n• $0 = x^2 - 7x + 12$\n• $0 = (x - 3)(x - 4)$\n• $x = 3$ or $x = 4$\n\n**Check both solutions:**\n• $x = 3$: $\\sqrt{15 - 11} = \\sqrt{4} = 2$, and $3 - 1 = 2$ ✓\n• $x = 4$: $\\sqrt{20 - 11} = \\sqrt{9} = 3$, and $4 - 1 = 3$ ✓\n\nBoth solutions are valid. The smaller positive solution is $3$.\n\n**Key concept:** Always check solutions to radical equations, as squaring can introduce extraneous solutions.",
          skills: ["radical-equations"]
        },

        // Question 16: Percent calculation
        {
          id: 16,
          type: "fill-in",
          difficulty: "easy",
          question: "What is $8\\%$ of $65$?",
          correctAnswer: 5.2,
          alternateAnswers: ["5.20", "26/5"],
          explanation: "**The correct answer is $5.2$.** Convert the percent to a decimal and multiply.\n\n• $8\\% = 0.08$\n• $8\\%$ of $65 = 0.08 \\times 65$\n• $= 5.2$\n\nAlternatively: $8\\%$ of $65 = \\frac{8}{100} \\times 65 = 8 \\times 0.65 = 5.2$\n\n**Key concept:** To find a percent of a number: percent $\\times$ number $= \\frac{\\text{percent}}{100} \\times$ number",
          skills: ["percentages"]
        },

        // Question 17: Density/volume calculation
        {
          id: 17,
          type: "fill-in",
          difficulty: "medium",
          question: "A solid aluminum cylinder has a mass of $540$ grams. If aluminum has a density of $2.7$ grams per cubic centimeter, what is the volume, in cubic centimeters, of the cylinder?",
          correctAnswer: 200,
          explanation: "**The correct answer is $200$.** Use the density formula: Density $=$ Mass/Volume.\n\n• Density $=$ Mass/Volume\n• Volume $=$ Mass/Density\n• Volume $= 540$ g $\\div 2.7$ g/cm³\n• Volume $= 200$ cm³\n\n**Verification:** $2.7$ g/cm³ $\\times 200$ cm³ $= 540$ g ✓\n\n**Key concept:** The density formula can be rearranged:\n• $D = \\frac{M}{V}$\n• $M = D \\times V$\n• $V = \\frac{M}{D}$",
          skills: ["density", "volume"]
        },

        // Question 18: Function type identification
        {
          id: 18,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The table shows some values of a function. Based on the pattern, which type of function could represent the data?",
          questionTable: {
            headers: ["$x$", "$f(x)$"],
            rows: [
              ["$0$", "$3$"],
              ["$1$", "$6$"],
              ["$2$", "$12$"],
              ["$3$", "$24$"],
              ["$4$", "$48$"]
            ]
          },
          choices: [
            { id: "A", text: "Linear" },
            { id: "B", text: "Quadratic" },
            { id: "C", text: "Exponential" },
            { id: "D", text: "Absolute value" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Analyze the pattern in $f(x)$.\n\n• Check for constant difference (linear): $6-3=3$, $12-6=6$, $24-12=12$, $48-24=24$\n  Differences are NOT constant (not linear)\n\n• Check for constant ratio (exponential): $\\frac{6}{3}=2$, $\\frac{12}{6}=2$, $\\frac{24}{12}=2$, $\\frac{48}{24}=2$\n  Ratio is constant $= 2$ (exponential) ✓\n\nThe function doubles each time $x$ increases by $1$, so $f(x) = 3(2)^x$.\n\n**Why other choices are incorrect:**\n• Choice A (Linear): Would have constant first differences\n• Choice B (Quadratic): Would have constant second differences\n• Choice D (Absolute value): Would have a V-shape pattern\n\n**Key concept:** Exponential functions have a constant ratio between consecutive outputs.",
          skills: ["function-identification", "exponential-functions"]
        },

        // Question 19: Rational function undefined point
        {
          id: 19,
          type: "fill-in",
          difficulty: "medium",
          question: "For what value of $x$ is the function $f(x) = \\frac{x + 5}{x - 3}$ undefined?",
          correctAnswer: 3,
          explanation: "**The correct answer is $3$.** A rational function is undefined when the denominator equals zero.\n\n• Set denominator $= 0$:\n• $x - 3 = 0$\n• $x = 3$\n\nWhen $x = 3$, the denominator is $0$, making the function undefined (division by zero).\n\n**Verification:** $f(3) = \\frac{3+5}{3-3} = \\frac{8}{0}$, which is undefined ✓\n\n**Key concept:** Rational functions are undefined where the denominator equals zero.",
          skills: ["rational-functions", "domain"]
        },

        // Question 20: Rational expression simplification
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "Which expression is equivalent to $\\frac{x^2 + 5x + 6}{x^2 - 4}$?",
          choices: [
            { id: "A", text: "$\\frac{x + 3}{x - 2}$" },
            { id: "B", text: "$\\frac{x + 3}{x + 2}$" },
            { id: "C", text: "$\\frac{x + 2}{x - 2}$" },
            { id: "D", text: "$\\frac{x - 3}{x - 2}$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Factor both the numerator and denominator.\n\n**Factor numerator:** $x^2 + 5x + 6 = (x + 2)(x + 3)$\n**Factor denominator:** $x^2 - 4 = (x + 2)(x - 2)$ [difference of squares]\n\n**Simplify:**\n• $\\frac{x^2 + 5x + 6}{x^2 - 4}$\n• $= \\frac{(x + 2)(x + 3)}{(x + 2)(x - 2)}$\n• $= \\frac{x + 3}{x - 2}$ [cancel $(x + 2)$]\n\n**Why other choices are incorrect:**\n• Choice B: Would require $(x-2)$ in numerator\n• Choice C: Would require $(x+3)$ to cancel\n• Choice D: Wrong sign in numerator factor\n\n**Key concept:** To simplify rational expressions, factor completely, then cancel common factors.",
          skills: ["rational-expressions", "factoring"]
        },

        // Question 21: Poll/proportion problem
        {
          id: 21,
          type: "multiple-choice",
          difficulty: "medium",
          question: "In a poll of $8000$ voters, $5280$ said they support a new policy. What percent of voters support the new policy?",
          choices: [
            { id: "A", text: "$52.8\\%$" },
            { id: "B", text: "$66\\%$" },
            { id: "C", text: "$72\\%$" },
            { id: "D", text: "$79.2\\%$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Calculate the percentage.\n\n• Percent $= \\frac{\\text{Part}}{\\text{Whole}} \\times 100$\n• Percent $= \\frac{5280}{8000} \\times 100$\n• Percent $= 0.66 \\times 100$\n• Percent $= 66\\%$\n\n**Why other choices are incorrect:**\n• Choice A ($52.8\\%$): This would be $\\frac{4224}{8000}$\n• Choice C ($72\\%$): This would be $\\frac{5760}{8000}$\n• Choice D ($79.2\\%$): This would be $\\frac{6336}{8000}$\n\n**Key concept:** Percentage $= (\\text{Part} \\div \\text{Whole}) \\times 100$",
          skills: ["percentages", "proportions"]
        },

        // Question 22: Circle equation - finding radius
        {
          id: 22,
          type: "fill-in",
          difficulty: "medium",
          question: "A circle in the $xy$-plane has the equation $(x - 3)^2 + (y + 2)^2 = 49$. What is the radius of the circle?",
          correctAnswer: 7,
          explanation: "**The correct answer is $7$.** Use the standard form of a circle equation.\n\nStandard form: $(x - h)^2 + (y - k)^2 = r^2$\n\nComparing with $(x - 3)^2 + (y + 2)^2 = 49$:\n• Center: $(h, k) = (3, -2)$\n• $r^2 = 49$\n• $r = \\sqrt{49} = 7$\n\n**Key concept:** In the equation $(x - h)^2 + (y - k)^2 = r^2$:\n• $(h, k)$ is the center\n• $r$ is the radius\n• The right side is $r^2$, so take the square root to find $r$",
          skills: ["circle-equations", "geometry"]
        }
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
        // Question 1: Y-intercept
        {
          id: 1,
          type: "multiple-choice",
          difficulty: "easy",
          question: "What is the $y$-intercept of the line $18x - 9y = 36$?",
          choices: [
            { id: "A", text: "$(0, -4)$" },
            { id: "B", text: "$(0, 4)$" },
            { id: "C", text: "$(2, 0)$" },
            { id: "D", text: "$(-4, 0)$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** The $y$-intercept occurs where $x = 0$.\n\n• $18x - 9y = 36$\n• $18(0) - 9y = 36$\n• $-9y = 36$\n• $y = -4$\n\nThe $y$-intercept is $(0, -4)$.\n\n**Why other choices are incorrect:**\n• Choice B $(0, 4)$: Wrong sign\n• Choice C $(2, 0)$: This is the $x$-intercept\n• Choice D $(-4, 0)$: This has the form of an $x$-intercept\n\n**Calculator tip:** Rewrite in slope-intercept form: $y = 2x - 4$. The constant term is the $y$-intercept.",
          skills: ["linear-equations", "y-intercept"]
        },

        // Question 2: Quadratic minimum
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "medium",
          question: "What is the minimum value of the function $f(x) = (x - 5)^2 + 3$?",
          choices: [
            { id: "A", text: "$-5$" },
            { id: "B", text: "$3$" },
            { id: "C", text: "$5$" },
            { id: "D", text: "$8$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** The function is in vertex form.\n\nVertex form: $f(x) = a(x - h)^2 + k$\n• Vertex: $(h, k) = (5, 3)$\n• Since $a = 1 > 0$, parabola opens upward\n• Minimum value is $k = 3$\n\nThe minimum occurs at $x = 5$, and $f(5) = (5-5)^2 + 3 = 0 + 3 = 3$.\n\n**Why other choices are incorrect:**\n• Choice A ($-5$): Negative of the $h$-value\n• Choice C ($5$): This is the $x$-coordinate of the vertex, not the minimum value\n• Choice D ($8$): This would be $h + k$\n\n**Key concept:** For $f(x) = a(x-h)^2 + k$ with $a > 0$, the minimum value is $k$.",
          skills: ["quadratic-functions", "vertex-form"]
        },

        // Question 3: Factoring quadratics
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which expression is equivalent to $4x^2 - 9x - 9$?",
          choices: [
            { id: "A", text: "$(4x + 3)(x - 3)$" },
            { id: "B", text: "$(4x - 3)(x + 3)$" },
            { id: "C", text: "$(2x + 3)(2x - 3)$" },
            { id: "D", text: "$(x + 3)(4x - 3)$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Factor by finding two numbers whose product is $4(-9) = -36$ and sum is $-9$.\n\n• Numbers: $-12$ and $3$ (since $-12 \\times 3 = -36$ and $-12 + 3 = -9$)\n• Rewrite: $4x^2 - 12x + 3x - 9$\n• Group: $(4x^2 - 12x) + (3x - 9)$\n• Factor: $4x(x - 3) + 3(x - 3)$\n• $= (4x + 3)(x - 3)$\n\n**Verification:** $(4x + 3)(x - 3) = 4x^2 - 12x + 3x - 9 = 4x^2 - 9x - 9$ ✓\n\n**Why other choices are incorrect:**\n• Choice B: $(4x - 3)(x + 3) = 4x^2 + 12x - 3x - 9 = 4x^2 + 9x - 9$\n• Choice C: $(2x + 3)(2x - 3) = 4x^2 - 9$ (difference of squares)\n• Choice D: $(x + 3)(4x - 3) = 4x^2 - 3x + 12x - 9 = 4x^2 + 9x - 9$\n\n**Key concept:** Use factoring by grouping for quadratics with $a \\neq 1$.",
          skills: ["factoring", "quadratic-expressions"]
        },

        // Question 4: Triangle angle sum
        {
          id: 4,
          type: "fill-in",
          difficulty: "medium",
          question: "In triangle $ABC$, angle $A$ measures $(2x + 10)°$, angle $B$ measures $45°$, and angle $C$ measures $x°$. What is the value of $x$?",
          correctAnswer: "41.67",
          alternateAnswers: [41.7, 42, "125/3"],
          explanation: "**The correct answer is $\\frac{125}{3} \\approx 41.67$.** The sum of angles in a triangle is $180°$.\n\n• $(2x + 10) + 45 + x = 180$\n• $3x + 55 = 180$\n• $3x = 125$\n• $x = \\frac{125}{3} \\approx 41.67°$\n\n**Verification:**\n• Angle $A$: $2\\left(\\frac{125}{3}\\right) + 10 = \\frac{250}{3} + \\frac{30}{3} = \\frac{280}{3} \\approx 93.33°$\n• Angle $B$: $45°$\n• Angle $C$: $\\frac{125}{3} \\approx 41.67°$\n• Sum: $\\frac{280}{3} + 45 + \\frac{125}{3} = \\frac{280}{3} + \\frac{135}{3} + \\frac{125}{3} = \\frac{540}{3} = 180°$ ✓\n\n**Key concept:** The sum of interior angles of a triangle is always $180°$.",
          skills: ["triangle-angles", "geometry"]
        },

        // Question 5: System intersection (parabola and line)
        {
          id: 5,
          type: "fill-in",
          difficulty: "medium",
          question: "At what positive value of $x$ do the graphs of $y = x^2$ and $y = 5x - 4$ intersect?",
          correctAnswer: 4,
          explanation: "**The correct answer is $4$.** Set the equations equal and solve.\n\n• $x^2 = 5x - 4$\n• $x^2 - 5x + 4 = 0$\n• $(x - 1)(x - 4) = 0$\n• $x = 1$ or $x = 4$\n\nBoth solutions are positive. The larger positive value is $4$.\n\n**Verification for $x = 4$:**\n• $y = x^2 = 16$\n• $y = 5(4) - 4 = 20 - 4 = 16$ ✓\n\n**Calculator tip:** Graph both equations in Desmos. The intersection points are $(1, 1)$ and $(4, 16)$.",
          skills: ["systems-of-equations", "quadratic-equations"]
        },

        // Question 6: Line of best fit
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A scatterplot shows a negative linear association between two variables. Which could be the equation of the line of best fit?",
          choices: [
            { id: "A", text: "$y = 3x + 10$" },
            { id: "B", text: "$y = -2x + 15$" },
            { id: "C", text: "$y = x^2 - 4$" },
            { id: "D", text: "$y = 5$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** A negative linear association means the line slopes downward.\n\n• Negative association → negative slope\n• Only $y = -2x + 15$ has a negative slope ($-2$)\n\n**Why other choices are incorrect:**\n• Choice A: Positive slope ($+3$) indicates positive association\n• Choice C: This is quadratic, not linear\n• Choice D: This is a horizontal line (slope $= 0$), indicating no association\n\n**Key concept:** Negative linear association = negative slope in the line of best fit.",
          skills: ["scatterplots", "linear-regression"]
        },

        // Question 7: Square root function domain
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "For the function $f(x) = \\sqrt{x + 5}$, what is the least value of $x$ for which $f(x)$ is defined?",
          choices: [
            { id: "A", text: "$-5$" },
            { id: "B", text: "$0$" },
            { id: "C", text: "$5$" },
            { id: "D", text: "$25$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** The square root function is defined when the radicand is non-negative.\n\n• For $f(x) = \\sqrt{x + 5}$ to be defined:\n• $x + 5 \\geq 0$\n• $x \\geq -5$\n\nThe least value is $x = -5$.\n\n**Verification:** $f(-5) = \\sqrt{-5 + 5} = \\sqrt{0} = 0$ ✓\n\n**Why other choices are incorrect:**\n• Choice B ($0$): $f$ is defined for values less than $0$\n• Choice C ($5$): $f$ is defined for values less than $5$\n• Choice D ($25$): Much larger than necessary\n\n**Key concept:** For $f(x) = \\sqrt{\\text{expression}}$, the domain is where expression $\\geq 0$.",
          skills: ["function-domain", "radical-functions"]
        },

        // Question 8: Isosceles triangle
        {
          id: 8,
          type: "fill-in",
          difficulty: "medium",
          question: "In an isosceles triangle, the two equal angles each measure 65°. What is the measure, in degrees, of the third angle?",
          correctAnswer: 50,
          explanation: "**The correct answer is 50.** Use the triangle angle sum property.\n\n• Sum of angles = 180°\n• Two equal angles: 65° + 65° = 130°\n• Third angle: 180° - 130° = 50°\n\n**Key concept:** In an isosceles triangle, the two base angles are equal, and all three angles sum to 180°.",
          skills: ["triangle-angles", "isosceles-triangles"]
        },

        // Question 9: Sum of solutions
        {
          id: 9,
          type: "fill-in",
          difficulty: "medium",
          question: "What is the sum of the solutions to $x^2 - 10x + 21 = 0$?",
          correctAnswer: 10,
          explanation: "**The correct answer is $10$.** Use Vieta's formulas or solve the equation.\n\n**Method 1: Vieta's formulas**\nFor $ax^2 + bx + c = 0$, sum of roots $= -\\frac{b}{a}$\n• Sum $= -\\frac{-10}{1} = 10$\n\n**Method 2: Solving**\n• $x^2 - 10x + 21 = 0$\n• $(x - 3)(x - 7) = 0$\n• $x = 3$ or $x = 7$\n• Sum: $3 + 7 = 10$\n\n**Key concept:** For $ax^2 + bx + c = 0$:\n• Sum of roots $= -\\frac{b}{a}$\n• Product of roots $= \\frac{c}{a}$",
          skills: ["quadratic-equations", "vietas-formulas"]
        },

        // Question 10: System of linear equations
        {
          id: 10,
          type: "fill-in",
          difficulty: "medium",
          question: "If $3x + 4y = 20$ and $x - 4y = -8$, what is the value of $x$?",
          correctAnswer: 3,
          explanation: "**The correct answer is $3$.** Add the equations to eliminate $y$.\n\n• $3x + 4y = 20$\n• $x - 4y = -8$\n• Adding: $4x = 12$\n• $x = 3$\n\n**Verification:**\n• $3(3) + 4y = 20 \\to 9 + 4y = 20 \\to 4y = 11 \\to y = 2.75$\n• Check: $3 - 4(2.75) = 3 - 11 = -8$ ✓\n\n**Key concept:** When equations have opposite coefficients for one variable, add them to eliminate that variable.",
          skills: ["systems-of-equations", "elimination"]
        },

        // Question 11: Cube volume from surface area
        {
          id: 11,
          type: "fill-in",
          difficulty: "hard",
          question: "A cube has a surface area of $150$ square centimeters. What is the volume, in cubic centimeters, of the cube?",
          correctAnswer: 125,
          explanation: "**The correct answer is $125$.** Find the side length from surface area, then calculate volume.\n\n**Step 1: Find side length**\n• Surface area of cube $= 6s^2$\n• $150 = 6s^2$\n• $25 = s^2$\n• $s = 5$ cm\n\n**Step 2: Find volume**\n• Volume $= s^3$\n• Volume $= 5^3 = 125$ cm³\n\n**Key concept:**\n• Cube surface area: $SA = 6s^2$\n• Cube volume: $V = s^3$",
          skills: ["volume", "surface-area", "geometry"]
        },

        // Question 12: Exponential population model
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A town's population is modeled by $P(t) = 12000(1.03)^t$, where $t$ is the number of years since 2020. What does $1.03$ represent in this model?",
          choices: [
            { id: "A", text: "The population decreases by $3\\%$ each year" },
            { id: "B", text: "The population increases by $3\\%$ each year" },
            { id: "C", text: "The population increases by $103$ people each year" },
            { id: "D", text: "The population was $1.03$ in the year 2020" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** In exponential models $P(t) = P_0(b)^t$:\n\n• $P_0 = 12000$ is the initial population\n• $b = 1.03$ is the growth factor\n• Since $b = 1 + r$, where $r$ is the growth rate:\n• $1.03 = 1 + 0.03$\n• $r = 0.03 = 3\\%$\n\nThe population increases by $3\\%$ each year.\n\n**Why other choices are incorrect:**\n• Choice A: Would need $b < 1$ (like $0.97$) for decrease\n• Choice C: This describes linear growth, not exponential\n• Choice D: $12000$ was the 2020 population, not $1.03$\n\n**Key concept:** In $P(t) = P_0(1 + r)^t$, the growth factor $(1 + r)$ indicates percent growth.",
          skills: ["exponential-growth", "interpretation"]
        },

        // Question 13: System of equations
        {
          id: 13,
          type: "fill-in",
          difficulty: "medium",
          question: "If $2x + 3y = 12$ and $6y = 9$, what is the value of $x$?",
          correctAnswer: 3.75,
          alternateAnswers: ["15/4", 3.8],
          explanation: "**The correct answer is $\\frac{15}{4}$ or $3.75$.** Solve for $y$ first, then find $x$.\n\n**Step 1: Solve for $y$**\n• $6y = 9$\n• $y = \\frac{9}{6} = \\frac{3}{2} = 1.5$\n\n**Step 2: Substitute into first equation**\n• $2x + 3(1.5) = 12$\n• $2x + 4.5 = 12$\n• $2x = 7.5$\n• $x = 3.75$ or $\\frac{15}{4}$\n\n**Verification:** $2(3.75) + 3(1.5) = 7.5 + 4.5 = 12$ ✓\n\n**Key concept:** Solve the simpler equation first to find one variable.",
          skills: ["systems-of-equations"]
        },

        // Question 14: Inequality word problem
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A storage container can hold at most $500$ pounds. If the container already has $180$ pounds of supplies, which inequality represents the additional weight $w$, in pounds, that can be added?",
          choices: [
            { id: "A", text: "$w \\leq 320$" },
            { id: "B", text: "$w \\geq 320$" },
            { id: "C", text: "$w \\leq 680$" },
            { id: "D", text: "$w < 500$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Set up the inequality.\n\n• Current weight + additional weight $\\leq$ maximum capacity\n• $180 + w \\leq 500$\n• $w \\leq 500 - 180$\n• $w \\leq 320$\n\n**Why other choices are incorrect:**\n• Choice B: $w \\geq 320$ means at least $320$ pounds must be added\n• Choice C: $180 + 680 = 860 > 500$, would exceed capacity\n• Choice D: Doesn't account for existing $180$ pounds\n\n**Key concept:** \"At most\" translates to $\\leq$ (less than or equal to).",
          skills: ["inequalities", "word-problems"]
        },

        // Question 15: Weighted mean
        {
          id: 15,
          type: "fill-in",
          difficulty: "hard",
          question: "A student's grade is calculated as follows: tests count for $70\\%$ and homework counts for $30\\%$. If the student has a test average of $85$ and a homework average of $90$, what is the student's overall grade?",
          correctAnswer: 86.5,
          alternateAnswers: ["173/2"],
          explanation: "**The correct answer is $86.5$.** Calculate the weighted average.\n\n• Weighted grade $=$ (Test average $\\times$ Test weight) $+$ (Homework average $\\times$ Homework weight)\n• $= (85 \\times 0.70) + (90 \\times 0.30)$\n• $= 59.5 + 27$\n• $= 86.5$\n\n**Why simple average would be wrong:**\n• Simple average: $\\frac{85 + 90}{2} = 87.5$\n• But tests count more, so the grade is closer to $85$\n\n**Key concept:** Weighted average $= \\Sigma(\\text{value} \\times \\text{weight})$, where weights sum to $1$ (or $100\\%$).",
          skills: ["weighted-average", "statistics"]
        },

        // Question 16: Function translation (horizontal)
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The function $f$ is graphed in the $xy$-plane. If $g(x) = f(x - 3)$, how is the graph of $g$ related to the graph of $f$?",
          choices: [
            { id: "A", text: "The graph of $g$ is the graph of $f$ shifted $3$ units left" },
            { id: "B", text: "The graph of $g$ is the graph of $f$ shifted $3$ units right" },
            { id: "C", text: "The graph of $g$ is the graph of $f$ shifted $3$ units up" },
            { id: "D", text: "The graph of $g$ is the graph of $f$ shifted $3$ units down" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Horizontal transformations work \"opposite\" to intuition.\n\n• $g(x) = f(x - 3)$ means we subtract $3$ inside the function\n• This shifts the graph $3$ units to the RIGHT\n\n**Example:** If $f(0) = 5$, then $g(3) = f(3-3) = f(0) = 5$\nThe point $(0, 5)$ on $f$ moves to $(3, 5)$ on $g$ (shifted right).\n\n**Why other choices are incorrect:**\n• Choice A: $f(x + 3)$ would shift left\n• Choice C: $f(x) + 3$ would shift up\n• Choice D: $f(x) - 3$ would shift down\n\n**Key concept:** $y = f(x - h)$ shifts the graph $h$ units right; $y = f(x + h)$ shifts $h$ units left.",
          skills: ["function-transformations", "horizontal-shifts"]
        },

        // Question 17: Exponential equation
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "If $4^x = 32$, which of the following is the value of $x$?",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$2.5$" },
            { id: "C", text: "$3$" },
            { id: "D", text: "$8$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Express both sides with the same base.\n\n• $4^x = 32$\n• $(2^2)^x = 2^5$ (since $4 = 2^2$ and $32 = 2^5$)\n• $2^{2x} = 2^5$\n• $2x = 5$\n• $x = 2.5$\n\n**Verification:** $4^{2.5} = 4^2 \\times 4^{0.5} = 16 \\times 2 = 32$ ✓\n\n**Why other choices are incorrect:**\n• Choice A ($2$): $4^2 = 16 \\neq 32$\n• Choice C ($3$): $4^3 = 64 \\neq 32$\n• Choice D ($8$): $4^8$ is much larger than $32$\n\n**Calculator tip:** Use logarithms: $x = \\log_4(32) = \\frac{\\log(32)}{\\log(4)} \\approx 2.5$",
          skills: ["exponential-equations", "exponents"]
        },

        // Question 18: Quadratic formula form
        {
          id: 18,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The solutions to $2x^2 + 6x - 5 = 0$ can be written as $x = \\frac{-6 \\pm \\sqrt{k}}{4}$. What is the value of $k$?",
          choices: [
            { id: "A", text: "$36$" },
            { id: "B", text: "$56$" },
            { id: "C", text: "$76$" },
            { id: "D", text: "$96$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Use the quadratic formula.\n\nFor $2x^2 + 6x - 5 = 0$, where $a = 2$, $b = 6$, $c = -5$:\n\n• $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$\n• $x = \\frac{-6 \\pm \\sqrt{36 - 4(2)(-5)}}{2(2)}$\n• $x = \\frac{-6 \\pm \\sqrt{36 + 40}}{4}$\n• $x = \\frac{-6 \\pm \\sqrt{76}}{4}$\n\nTherefore, $k = 76$.\n\n**Why other choices are incorrect:**\n• Choice A ($36$): This is just $b^2$, missing the $-4ac$ part\n• Choice B ($56$): Calculation error\n• Choice D ($96$): Would need different coefficients\n\n**Key concept:** The discriminant is $b^2 - 4ac$, which appears under the square root in the quadratic formula.",
          skills: ["quadratic-formula", "discriminant"]
        },

        // Question 19: Dot plot comparison
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Two data sets are shown in dot plots. Set A has a mean of 12 and a standard deviation of 3. Set B has a mean of 12 and a standard deviation of 6. Which statement must be true?",
          choices: [
            { id: "A", text: "Set A and Set B have the same range" },
            { id: "B", text: "Set B has more variability than Set A" },
            { id: "C", text: "Set A has a higher median than Set B" },
            { id: "D", text: "The sets have the same number of data points" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Standard deviation measures variability (spread of data).\n\n• Set A: standard deviation = 3\n• Set B: standard deviation = 6\n• Since 6 > 3, Set B has greater variability\n\n**Why other choices are incorrect:**\n• Choice A: Different standard deviations suggest different ranges\n• Choice C: Same mean doesn't determine median relationship\n• Choice D: Standard deviation doesn't indicate sample size\n\n**Key concept:** A larger standard deviation indicates greater spread/variability in the data.",
          skills: ["statistics", "standard-deviation"]
        },

        // Question 20: Isosceles right triangle
        {
          id: 20,
          type: "fill-in",
          difficulty: "hard",
          question: "An isosceles right triangle has legs of length $8$. What is the length of the hypotenuse?",
          correctAnswer: "8√2",
          alternateAnswers: [11.31, 11.3, "11.314"],
          explanation: "**The correct answer is $8\\sqrt{2} \\approx 11.31$.** Use the Pythagorean theorem or the 45-45-90 pattern.\n\n**Method 1: Pythagorean theorem**\n• $c^2 = a^2 + b^2$\n• $c^2 = 8^2 + 8^2$\n• $c^2 = 64 + 64 = 128$\n• $c = \\sqrt{128} = \\sqrt{64 \\times 2} = 8\\sqrt{2}$\n\n**Method 2: 45-45-90 pattern**\nIn a 45-45-90 triangle, sides are in ratio $1:1:\\sqrt{2}$\n• Legs: $8$\n• Hypotenuse: $8\\sqrt{2}$\n\n**Key concept:** In a 45-45-90 triangle with legs of length $a$, the hypotenuse $= a\\sqrt{2}$.",
          skills: ["right-triangles", "pythagorean-theorem"]
        },

        // Question 21: Discriminant (one solution)
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "For what value of $k$ does the equation $x^2 + kx + 9 = 0$ have exactly one real solution?",
          correctAnswer: 6,
          alternateAnswers: [-6],
          explanation: "**The correct answer is $6$ (or $-6$).** For exactly one real solution, the discriminant must equal zero.\n\n• Discriminant: $b^2 - 4ac = 0$\n• For $x^2 + kx + 9 = 0$: $a = 1$, $b = k$, $c = 9$\n• $k^2 - 4(1)(9) = 0$\n• $k^2 - 36 = 0$\n• $k^2 = 36$\n• $k = \\pm 6$\n\n**Verification for $k = 6$:**\n• $x^2 + 6x + 9 = (x + 3)^2 = 0$\n• One solution: $x = -3$ ✓\n\n**Key concept:** A quadratic has exactly one real solution when its discriminant $b^2 - 4ac = 0$.",
          skills: ["discriminant", "quadratic-equations"]
        },

        // Question 22: No solution system
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "For what value of $a$ does the system of equations have no solution?",
          questionFormula: {
            lines: ["$3x + 6y = 12$", "$x + 2y = a$"]
          },
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$6$" },
            { id: "D", text: "Any value except $4$" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** A system has no solution when the lines are parallel (same slope, different $y$-intercepts).\n\n**Analyze the equations:**\n• $3x + 6y = 12 \\to y = -\\frac{1}{2}x + 2$ (slope $= -\\frac{1}{2}$)\n• $x + 2y = a \\to y = -\\frac{1}{2}x + \\frac{a}{2}$ (slope $= -\\frac{1}{2}$)\n\nBoth lines have slope $-\\frac{1}{2}$, so they're parallel.\n\n**For no solution:** The $y$-intercepts must be different.\n• First line: $y$-intercept $= 2$\n• Second line: $y$-intercept $= \\frac{a}{2}$\n• For different intercepts: $\\frac{a}{2} \\neq 2$, so $a \\neq 4$\n\n**Note:** When $a = 4$, the lines are identical (infinitely many solutions).\n\n**Why other choices are incorrect:**\n• Choices A, B, C: Each specific value (except $4$) gives no solution, but the question asks for what value(s) produce no solution - that's any value except $4$.\n\n**Key concept:** Parallel lines (same slope, different intercept) have no intersection point.",
          skills: ["systems-of-equations", "no-solution"]
        }
      ]
    }
  ]
};
