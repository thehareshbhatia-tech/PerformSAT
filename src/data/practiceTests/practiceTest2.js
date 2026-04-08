// Practice Test 2 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Questions calibrated to College Board official practice test difficulty

export const practiceTest2 = {
  id: "practice-test-2",
  title: "Practice Test 2",
  description: "Full-length SAT Math practice test with 2 modules",
  totalQuestions: 44,
  timePerModule: 35,
  modules: [
    {
      id: "module-1",
      title: "Module 1",
      timeLimit: 35,
      questions: [
{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  question: "A car travels at a constant speed of $55$ miles per hour. Which expression represents the total distance, in miles, the car travels in $h$ hours?",
  choices: [
    { id: "A", text: "$\\frac{55}{h}$" },
    { id: "B", text: "$55h$" },
    { id: "C", text: "$55 + h$" },
    { id: "D", text: "$h - 55$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Rate-Time-Distance Translation**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** Distance = rate $\\times$ time $= 55 \\times h = 55h$.\n\n**The Full Solution:**\nUsing the formula $d = rt$, where $r = 55$ mph and $t = h$ hours:\n$d = 55h$\n\n**Why the wrong answers are tempting:**\n• Choice A: Divides instead of multiplying, confusing rate with a per-unit calculation.\n• Choice C: Adds rate and time instead of multiplying them.\n• Choice D: Subtracts, which has no meaning in this context.\n\n**Test Day Takeaway:** Distance = rate $\\times$ time. When you see 'per hour,' multiply the rate by the number of hours.",
  skills: ["word-problems", "linear-functions"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  question: "What is $35\\%$ of $180$?",
  choices: [
    { id: "A", text: "$54$" },
    { id: "B", text: "$63$" },
    { id: "C", text: "$72$" },
    { id: "D", text: "$90$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Percent Calculation**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $35\\%$ of $180 = 0.35 \\times 180 = 63$.\n\n**The Full Solution:**\n$\\frac{35}{100} \\times 180 = \\frac{6300}{100} = 63$\n\nAlternatively: $30\\%$ of $180 = 54$, and $5\\%$ of $180 = 9$, so $35\\% = 54 + 9 = 63$.\n\n**Why the wrong answers are tempting:**\n• Choice A: Computes $30\\%$ of $180$ but forgets the remaining $5\\%$.\n• Choice C: Computes $40\\%$ of $180 = 72$.\n• Choice D: Computes $50\\%$ of $180 = 90$.\n\n**Test Day Takeaway:** Break percentages into easier pieces: $35\\% = 30\\% + 5\\%$.",
  skills: ["percents"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  question: "If $\\frac{5x}{8} = \\frac{45}{4}$, what is the value of $x$?",
  choices: [
    { id: "A", text: "$9$" },
    { id: "B", text: "$14$" },
    { id: "C", text: "$18$" },
    { id: "D", text: "$36$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Proportion Solving**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** Cross-multiply: $5x \\times 4 = 45 \\times 8$, so $20x = 360$, giving $x = 18$.\n\n**The Full Solution:**\n$\\frac{5x}{8} = \\frac{45}{4}$\n\nCross-multiply: $4 \\cdot 5x = 8 \\cdot 45$\n$20x = 360$\n$x = 18$\n\nVerification: $\\frac{5(18)}{8} = \\frac{90}{8} = \\frac{45}{4}$ \\checkmark\n\n**Why the wrong answers are tempting:**\n• Choice A: Solves $5x = 45$, ignoring the denominators.\n• Choice B: Makes an arithmetic error in the division.\n• Choice D: Computes $\\frac{360}{10}$ instead of $\\frac{360}{20}$.\n\n**Test Day Takeaway:** Cross-multiply, then divide. Verify by substituting back.",
  skills: ["solving-equations", "ratios"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  question: "The function $g(x) = 250 - 18x$ models the amount of water, in gallons, remaining in a tank $x$ hours after a drain is opened. What does the number $250$ represent in this context?",
  choices: [
    { id: "A", text: "The rate at which water drains, in gallons per hour" },
    { id: "B", text: "The amount of water initially in the tank, in gallons" },
    { id: "C", text: "The number of hours until the tank is empty" },
    { id: "D", text: "The amount of water remaining after $1$ hour" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Interpret Y-Intercept in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** When $x = 0$ (before draining starts), $g(0) = 250$. So $250$ is the initial amount of water.\n\n**The Full Solution:**\nIn the function $g(x) = 250 - 18x$, the constant $250$ is the value when $x = 0$, representing the starting amount. The coefficient $-18$ represents the rate of change (water drains at $18$ gallons per hour).\n\n**Why the wrong answers are tempting:**\n• Choice A: Confuses $250$ with the rate $18$.\n• Choice C: The time to empty is $\\frac{250}{18} \\approx 13.9$ hours, not $250$.\n• Choice D: After $1$ hour, $g(1) = 250 - 18 = 232$, not $250$.\n\n**Test Day Takeaway:** The constant term in a linear model is the initial value (the $y$-intercept when $x = 0$).",
  skills: ["function-interpretation", "linear-functions"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  question: "A map uses a scale of $1$ inch to $15$ miles. If two cities are $3.5$ inches apart on the map, what is the actual distance between them, in miles?",
  choices: [
    { id: "A", text: "$45.0$" },
    { id: "B", text: "$47.5$" },
    { id: "C", text: "$52.5$" },
    { id: "D", text: "$55.0$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Scale Factor / Unit Rate**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** $3.5 \\times 15 = 52.5$ miles.\n\n**The Full Solution:**\nUsing the scale: $1$ inch $= 15$ miles.\n$3.5$ inches $= 3.5 \\times 15 = 52.5$ miles.\n\nAlternatively: $3 \\times 15 = 45$ and $0.5 \\times 15 = 7.5$, so $45 + 7.5 = 52.5$.\n\n**Why the wrong answers are tempting:**\n• Choice A: Uses $3 \\times 15 = 45$, forgetting the $0.5$ inches.\n• Choice B: Computes $3.5 \\times 13$ or $3.5 \\times 14$ by mistake.\n• Choice D: Rounds $3.5$ up to $4$ and uses $\\frac{55}{1}$ instead.\n\n**Test Day Takeaway:** Multiply map distance by the scale factor. Break decimals into whole numbers plus fractions for easy mental math.",
  skills: ["ratios", "word-problems"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  question: "What is the equation of the line that has a slope of $-\\frac{3}{4}$ and passes through the point $(8, 1)$?",
  choices: [
    { id: "A", text: "$y = -\\frac{3}{4}x + 7$" },
    { id: "B", text: "$y = -\\frac{3}{4}x + 5$" },
    { id: "C", text: "$y = -\\frac{3}{4}x - 5$" },
    { id: "D", text: "$y = -\\frac{3}{4}x - 7$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Line from Slope and Point**\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** $y = mx + b$: $1 = -\\frac{3}{4}(8) + b = -6 + b$, so $b = 7$. The equation is $y = -\\frac{3}{4}x + 7$.\n\n**The Full Solution:**\nUsing slope-intercept form $y = mx + b$ with $m = -\\frac{3}{4}$ and point $(8, 1)$:\n$1 = -\\frac{3}{4}(8) + b$\n$1 = -6 + b$\n$b = 7$\n\nEquation: $y = -\\frac{3}{4}x + 7$\n\nVerification: At $(8, 1)$: $-\\frac{3}{4}(8) + 7 = -6 + 7 = 1$ \\checkmark\n\n**Why the wrong answers are tempting:**\n• Choice B: Computes $-\\frac{3}{4}(8) = -6$ but then does $1 - (-6) = -5$ with a sign error.\n• Choice C: Gets $-5$ then makes it negative.\n• Choice D: Uses $1 - 8 = -7$ instead of solving properly.\n\n**Test Day Takeaway:** Plug the point into $y = mx + b$ and solve for $b$. Always verify by substituting back.",
  skills: ["linear-functions", "slope", "coordinate-geometry"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  question: "\n\n| | Passed | Failed | Total |\n|---|---|---|---|\n| Studied | $72$ | $8$ | $80$ |\n| Did Not Study | $33$ | $27$ | $60$ |\n| Total | $105$ | $35$ | $140$ |\n\nBased on the table above, a student is selected at random from those who passed. What is the probability that this student studied?",
  choices: [
    { id: "A", text: "$\\frac{72}{140}$" },
    { id: "B", text: "$\\frac{72}{105}$" },
    { id: "C", text: "$\\frac{72}{80}$" },
    { id: "D", text: "$\\frac{105}{140}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Two-Way Table Conditional Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** Given the student passed, look at the 'Passed' column only. Studied and passed: $72$. Total passed: $105$. Probability: $\\frac{72}{105}$.\n\n**The Full Solution:**\nThe condition is 'given that the student passed,' so the sample space is restricted to the $105$ students who passed. Of those, $72$ studied.\n\n$P(\\text{Studied} \\mid \\text{Passed}) = \\frac{72}{105}$\n\nThis simplifies to $\\frac{24}{35} \\approx 0.686$ or about $69\\%$.\n\n**Why the wrong answers are tempting:**\n• Choice A: Uses the grand total $140$ as the denominator instead of the column total.\n• Choice C: Uses the row total $80$ (all who studied), confusing the condition.\n• Choice D: Gives $P(\\text{Passed})$, not the conditional probability asked for.\n\n**Test Day Takeaway:** 'Given that X' means restrict your denominator to the total for X.",
  skills: ["two-way-tables", "probability"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  question: "The system of equations below has the solution $(x, y)$.\n\n$3x + 4y = -8$\n$5x - 4y = 40$\n\nWhat is the value of $x + y$?",
  choices: [
    { id: "A", text: "$-3$" },
    { id: "B", text: "$-1$" },
    { id: "C", text: "$1$" },
    { id: "D", text: "$3$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Systems of Linear Equations**\n\n**Choice B is correct.**\n\n**The Fast Way (25 seconds):** Add the equations: $8x = 32$, so $x = 4$. Substitute: $3(4) + 4y = -8$, giving $12 + 4y = -8$, so $4y = -20$ and $y = -5$. Then $x + y = 4 + (-5) = -1$.\n\n**The Full Solution:**\nAdd the two equations to eliminate $y$:\n$(3x + 4y) + (5x - 4y) = -8 + 40$\n$8x = 32$\n$x = 4$\n\nSubstitute $x = 4$ into $3x + 4y = -8$:\n$12 + 4y = -8$\n$4y = -20$\n$y = -5$\n\nSo $x + y = 4 + (-5) = -1$.\n\nVerification: $3(4) + 4(-5) = 12 - 20 = -8$ \\checkmark\n$5(4) - 4(-5) = 20 + 20 = 40$ \\checkmark\n\n**Why the wrong answers are tempting:**\n• Choice A: Computes $y = -7$ from an arithmetic error in the substitution.\n• Choice C: Gets $x = 4$ and $y = -3$ from a calculation mistake.\n• Choice D: Gets $x = 4$ and $y = -1$, then reports $x - y$ instead of $x + y$.\n\n**Test Day Takeaway:** When coefficients of one variable are opposites, add the equations. Remember to answer what is asked ($x + y$, not just $x$ or $y$).",
  skills: ["systems-of-equations", "solving-equations"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  question: "The line of best fit for a scatterplot is $y = -0.6x + 45$. What is the $y$-value predicted by this model when $x = 30$?",
  choices: [
    { id: "A", text: "$18$" },
    { id: "B", text: "$24$" },
    { id: "C", text: "$27$" },
    { id: "D", text: "$63$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Line of Best Fit Prediction**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** $y = -0.6(30) + 45 = -18 + 45 = 27$.\n\n**The Full Solution:**\nSubstitute $x = 30$:\n$y = -0.6(30) + 45$\n$y = -18 + 45$\n$y = 27$\n\n**Why the wrong answers are tempting:**\n• Choice A: Computes $-0.6(30) = -18$ and reports the absolute value.\n• Choice B: Uses $-0.7(30) + 45 = -21 + 45 = 24$.\n• Choice D: Adds $18 + 45 = 63$ instead of subtracting.\n\n**Test Day Takeaway:** Pay attention to the sign of the slope. A negative slope means the product is subtracted from the $y$-intercept.",
  skills: ["scatterplots", "linear-functions"]
},
{
  id: 10,
  type: "fill-in",
  difficulty: "medium",
  question: "If $5(3x + 2) - 7 = 8x + 24$, what is the value of $x$?",
  correctAnswer: "3",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $3$.**\n\n**The Fast Way (15 seconds):** Expand: $15x + 10 - 7 = 8x + 24$, so $15x + 3 = 8x + 24$, then $7x = 21$, giving $x = 3$.\n\n**The Full Solution:**\n$5(3x + 2) - 7 = 8x + 24$\n$15x + 10 - 7 = 8x + 24$\n$15x + 3 = 8x + 24$\n$15x - 8x = 24 - 3$\n$7x = 21$\n$x = 3$\n\n**Common Mistakes to Avoid:**\n• Forgetting to distribute the $5$ to both the $3x$ and the $2$.\n• Subtracting $7$ from $10$ incorrectly.\n\n**Verification:** Left: $5(3(3) + 2) - 7 = 5(11) - 7 = 55 - 7 = 48$.\nRight: $8(3) + 24 = 24 + 24 = 48$ \\checkmark\n\n**Test Day Takeaway:** Distribute, combine like terms, isolate the variable, verify.",
  skills: ["solving-equations"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  question: "A car purchased for $\\$24{,}000$ depreciates in value by $12\\%$ each year. Which function models the value $V(t)$ of the car, in dollars, after $t$ years?",
  choices: [
    { id: "A", text: "$V(t) = 24000(0.12)^t$" },
    { id: "B", text: "$V(t) = 24000(0.88)^t$" },
    { id: "C", text: "$V(t) = 24000(1.12)^t$" },
    { id: "D", text: "$V(t) = 24000 - 0.12t$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Decay Model**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** Depreciates by $12\\%$ means $88\\%$ remains each year: multiplier is $1 - 0.12 = 0.88$.\n\n**The Full Solution:**\nExponential decay: $V(t) = V_0 \\cdot (1 - r)^t$\nwhere $V_0 = 24000$ and $r = 0.12$.\n$V(t) = 24000(1 - 0.12)^t = 24000(0.88)^t$\n\nCheck at $t = 1$: $V(1) = 24000(0.88) = 21120$, which is a $12\\%$ decrease from $24000$ \\checkmark\n\n**Why the wrong answers are tempting:**\n• Choice A: Uses $0.12$ as the base instead of $0.88$. This makes the value approach $0$ far too quickly.\n• Choice C: Uses $1.12$, which models $12\\%$ growth, not depreciation.\n• Choice D: Models linear depreciation (constant dollar amount), not percent-based decay.\n\n**Test Day Takeaway:** 'Decreases by $r\\%$' means multiply by $(1 - r/100)$ each period, not by $r/100$.",
  skills: ["exponential-functions", "function-interpretation", "percents"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  question: "Triangle $ABC$ is similar to triangle $DEF$, where $AB$ corresponds to $DE$. If $AB = 6$, $BC = 10$, $AC = 8$, and $DE = 15$, what is the length of $EF$?",
  choices: [
    { id: "A", text: "$19$" },
    { id: "B", text: "$20$" },
    { id: "C", text: "$24$" },
    { id: "D", text: "$25$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Similar Triangles Proportion**\n\n**Choice D is correct.**\n\n**The Fast Way (15 seconds):** Scale factor $= \\frac{DE}{AB} = \\frac{15}{6} = \\frac{5}{2}$. $EF$ corresponds to $BC$: $EF = 10 \\times \\frac{5}{2} = 25$.\n\n**The Full Solution:**\nSince the triangles are similar with $AB \\leftrightarrow DE$, the scale factor is:\n$k = \\frac{DE}{AB} = \\frac{15}{6} = \\frac{5}{2}$\n\n$BC$ corresponds to $EF$:\n$EF = BC \\times k = 10 \\times \\frac{5}{2} = 25$\n\n**Why the wrong answers are tempting:**\n• Choice A: Adds $15 - 6 = 9$ to $10$, using an additive approach instead of multiplicative.\n• Choice B: Uses $AC = 8$ instead of $BC = 10$ and computes $8 \\times \\frac{5}{2} = 20$.\n• Choice C: Uses an incorrect scale factor of $3$ (from $\\frac{15}{5}$) and computes $8 \\times 3 = 24$.\n\n**Test Day Takeaway:** In similar triangles, multiply corresponding sides by the scale factor. Always match the correct pair of corresponding sides.",
  skills: ["similar-triangles", "ratios"]
},
{
  id: 13,
  type: "fill-in",
  difficulty: "medium",
  question: "The mean of $5$ numbers is $42$. If one of the numbers is removed, the mean of the remaining $4$ numbers is $38$. What is the number that was removed?",
  correctAnswer: "58",
  explanation: "**SAT Pattern: Mean and Sum Relationship**\n\n**The correct answer is $58$.**\n\n**The Fast Way (15 seconds):** Total of $5$ numbers: $5 \\times 42 = 210$. Total of remaining $4$: $4 \\times 38 = 152$. Removed number: $210 - 152 = 58$.\n\n**The Full Solution:**\nMean $= \\frac{\\text{sum}}{\\text{count}}$, so sum $= \\text{mean} \\times \\text{count}$.\n\nOriginal sum: $5 \\times 42 = 210$\nRemaining sum: $4 \\times 38 = 152$\nRemoved number: $210 - 152 = 58$\n\n**Common Mistakes to Avoid:**\n• Computing $42 - 38 = 4$ and thinking the removed number is $4$.\n• Forgetting to multiply mean by count to get the sum.\n\n**Verification:** $(152 + 58) \\div 5 = 210 \\div 5 = 42$ \\checkmark, and $152 \\div 4 = 38$ \\checkmark\n\n**Test Day Takeaway:** Sum = mean $\\times$ count. Use this to convert between means and totals.",
  skills: ["statistics", "word-problems"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  question: "If $g(x) = -3x + 11$ and $g(a) = -7$, what is the value of $a$?",
  choices: [
    { id: "A", text: "$-6$" },
    { id: "B", text: "$\\frac{4}{3}$" },
    { id: "C", text: "$6$" },
    { id: "D", text: "$32$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Solving with Function Notation**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** $-3a + 11 = -7$, so $-3a = -18$ and $a = 6$.\n\n**The Full Solution:**\n$g(a) = -7$ means:\n$-3a + 11 = -7$\n$-3a = -7 - 11$\n$-3a = -18$\n$a = 6$\n\nVerification: $g(6) = -3(6) + 11 = -18 + 11 = -7$ \\checkmark\n\n**Why the wrong answers are tempting:**\n• Choice A: Gets $-3a = 18$ by adding $11$ instead of subtracting, giving $a = -6$.\n• Choice B: Solves $-3a + 11 = 7$ (dropping the negative on $-7$), giving $a = \\frac{4}{3}$.\n• Choice D: Computes $-7 \\times (-3) + 11 = 32$, confusing input and output.\n\n**Test Day Takeaway:** $g(a) = -7$ means 'plug in $a$ for $x$ and set equal to $-7$.' Then solve for $a$.",
  skills: ["function-interpretation", "solving-equations"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  question: "The expression $\\frac{(3x^2y^3)^4}{9x^5y^7}$ can be written as $ax^by^c$, where $a$, $b$, and $c$ are constants. What is the value of $a + b + c$?",
  choices: [
    { id: "A", text: "$17$" },
    { id: "B", text: "$19$" },
    { id: "C", text: "$21$" },
    { id: "D", text: "$23$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Exponent Rules with Multiple Variables**\n\n**Choice A is correct.**\n\n**The Fast Way (30 seconds):** Numerator: $3^4 x^8 y^{12} = 81x^8y^{12}$. Divide by $9x^5y^7$: $\\frac{81}{9} = 9$, $x^{8-5} = x^3$, $y^{12-7} = y^5$. So $9x^3y^5$. Then $a + b + c = 9 + 3 + 5 = 17$.\n\n**The Full Solution:**\nSimplify the numerator:\n$(3x^2y^3)^4 = 3^4 \\cdot (x^2)^4 \\cdot (y^3)^4 = 81x^8y^{12}$\n\nDivide by the denominator:\n$\\frac{81x^8y^{12}}{9x^5y^7} = \\frac{81}{9} \\cdot x^{8-5} \\cdot y^{12-7} = 9x^3y^5$\n\nSo $a = 9$, $b = 3$, $c = 5$.\n$a + b + c = 9 + 3 + 5 = 17$\n\n**Why the wrong answers are tempting:**\n• Choice B: Gets $a = 9$ but miscalculates one exponent (e.g., $x^{8-5} = x^4$).\n• Choice C: Uses $3^4 = 81$ but divides to get $\\frac{81}{9} = 9$ then adds $81$ to the exponents.\n• Choice D: Computes $(3x^2y^3)^4 = 3x^8y^{12}$ (forgetting to raise $3$ to the $4$th power).\n\n**Test Day Takeaway:** Apply the power rule to every factor inside parentheses, then divide by subtracting exponents.",
  skills: ["exponent-rules", "polynomial-operations"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  question: "The equation $x^2 + y^2 + 8x - 14y + 40 = 0$ represents a circle in the $xy$-plane. What is the area of this circle?",
  choices: [
    { id: "A", text: "$5\\pi$" },
    { id: "B", text: "$9\\pi$" },
    { id: "C", text: "$25\\pi$" },
    { id: "D", text: "$81\\pi$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Circle Equation -- Area from General Form**\n\n**Choice C is correct.**\n\n**The Fast Way (30 seconds):** Complete the square: $(x+4)^2 + (y-7)^2 = 16 + 49 - 40 = 25$. Radius $= 5$. Area $= 25\\pi$.\n\n**The Full Solution:**\nGroup and complete the square:\n$(x^2 + 8x) + (y^2 - 14y) = -40$\n\n$x$: half of $8$ is $4$, square is $16$: $(x + 4)^2$\n$y$: half of $-14$ is $-7$, square is $49$: $(y - 7)^2$\n\n$(x + 4)^2 + (y - 7)^2 = -40 + 16 + 49 = 25$\n\nSo $r^2 = 25$, $r = 5$.\nArea $= \\pi r^2 = 25\\pi$.\n\n**Why the wrong answers are tempting:**\n• Choice A: Uses $r^2 = 5$ (from some miscalculation) giving area $= 5\\pi$.\n• Choice B: Uses only one completed square, getting $r^2 = 9$.\n• Choice D: Computes $16 + 49 = 65$ without subtracting $40$, then confuses with $81$.\n\n**Test Day Takeaway:** Complete both squares, then $r^2 = $ right side. Area $= \\pi r^2$.",
  skills: ["circle-equations", "coordinate-geometry", "area"]
},
{
  id: 17,
  type: "fill-in",
  difficulty: "hard",
  question: "If $\\frac{\\sqrt{x} \\cdot x^2}{x^{1/3}} = x^k$ for $x > 0$, what is the value of $k$? Express your answer as a fraction.",
  correctAnswer: "13/6",
  explanation: "**SAT Pattern: Exponent Simplification with Radicals**\n\n**The correct answer is $\\frac{13}{6}$.**\n\n**The Fast Way (20 seconds):** $\\sqrt{x} = x^{1/2}$. Numerator: $x^{1/2} \\cdot x^2 = x^{5/2}$. Divide: $x^{5/2 - 1/3} = x^{15/6 - 2/6} = x^{13/6}$.\n\n**The Full Solution:**\n$\\frac{\\sqrt{x} \\cdot x^2}{x^{1/3}} = \\frac{x^{1/2} \\cdot x^2}{x^{1/3}}$\n\nCombine the numerator (add exponents):\n$x^{1/2 + 2} = x^{1/2 + 4/2} = x^{5/2}$\n\nDivide (subtract exponents):\n$x^{5/2 - 1/3}$\n\nCommon denominator of $6$:\n$\\frac{5}{2} = \\frac{15}{6}$ and $\\frac{1}{3} = \\frac{2}{6}$\n$\\frac{15}{6} - \\frac{2}{6} = \\frac{13}{6}$\n\nSo $k = \\frac{13}{6}$.\n\n**Common Mistakes to Avoid:**\n• Writing $\\sqrt{x} = x^2$ instead of $x^{1/2}$.\n• Adding the denominator exponent instead of subtracting it.\n\n**Verification:** $\\frac{1}{2} + 2 - \\frac{1}{3} = 0.5 + 2 - 0.333 = 2.167 = \\frac{13}{6}$ \\checkmark\n\n**Test Day Takeaway:** Convert all radicals to fractional exponents. Multiply = add exponents; divide = subtract exponents.",
  skills: ["exponent-rules", "radical-expressions"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  question: "For what value of $k$ does the equation $3x^2 - 5x + k = 0$ have exactly one real solution?",
  choices: [
    { id: "A", text: "$\\frac{12}{25}$" },
    { id: "B", text: "$\\frac{25}{12}$" },
    { id: "C", text: "$\\frac{5}{3}$" },
    { id: "D", text: "$\\frac{25}{3}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Discriminant Equals Zero**\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** Discriminant $= 0$: $(-5)^2 - 4(3)(k) = 0$, so $25 - 12k = 0$, giving $k = \\frac{25}{12}$.\n\n**The Full Solution:**\nA quadratic $ax^2 + bx + c = 0$ has exactly one real solution when the discriminant equals zero:\n$b^2 - 4ac = 0$\n\nHere $a = 3$, $b = -5$, $c = k$:\n$(-5)^2 - 4(3)(k) = 0$\n$25 - 12k = 0$\n$12k = 25$\n$k = \\frac{25}{12}$\n\nVerification: With $k = \\frac{25}{12}$, the equation is $3x^2 - 5x + \\frac{25}{12} = 0$.\nDiscriminant: $25 - 4(3)(\\frac{25}{12}) = 25 - \\frac{300}{12} = 25 - 25 = 0$ \\checkmark\n\n**Why the wrong answers are tempting:**\n• Choice A: Inverts the fraction, computing $\\frac{12}{25}$.\n• Choice C: Uses $\\frac{b}{a} = \\frac{5}{3}$ instead of the discriminant formula.\n• Choice D: Uses $\\frac{b^2}{a} = \\frac{25}{3}$ instead of $\\frac{b^2}{4a}$.\n\n**Test Day Takeaway:** Exactly one solution means discriminant $= 0$. Set $b^2 - 4ac = 0$ and solve for the unknown.",
  skills: ["quadratic-equations", "discriminant"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  question: "In the $xy$-plane, the graph of $f(x) = -a \\cdot 2^x + b$ has a $y$-intercept of $(0, 5)$ and passes through the point $(2, -4)$. What is the value of $a + b$?",
  choices: [
    { id: "A", text: "$7$" },
    { id: "B", text: "$9$" },
    { id: "C", text: "$11$" },
    { id: "D", text: "$13$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Exponential Function with Two Conditions**\n\n**Choice C is correct.**\n\n**The Fast Way (30 seconds):** At $x = 0$: $-a + b = 5$. At $x = 2$: $-4a + b = -4$. Subtract first from second: $-3a = -9$, so $a = 3$. Then $b = 5 + 3 = 8$. So $a + b = 3 + 8 = 11$.\n\n**The Full Solution:**\nAt $x = 0$: $f(0) = -a \\cdot 2^0 + b = -a + b = 5$\nAt $x = 2$: $f(2) = -a \\cdot 2^2 + b = -4a + b = -4$\n\nSubtract the first equation from the second:\n$(-4a + b) - (-a + b) = -4 - 5$\n$-3a = -9$\n$a = 3$\n\nSubstitute back: $-3 + b = 5$, so $b = 8$.\n$a + b = 3 + 8 = 11$\n\nVerification: $f(x) = -3 \\cdot 2^x + 8$.\n$f(0) = -3 + 8 = 5$ \\checkmark\n$f(2) = -3(4) + 8 = -12 + 8 = -4$ \\checkmark\n\n**Why the wrong answers are tempting:**\n• Choice A: Reads the $y$-intercept value $5$ and adds $2$, getting $7$.\n• Choice B: Computes $a = 3$ and $b = 6$ from an error in the first equation.\n• Choice D: Computes $b = 8$ and reports $b + \\text{something else}$ incorrectly.\n\n**Test Day Takeaway:** Use two points to create a system of equations. The $y$-intercept ($x = 0$) simplifies exponentials since any base raised to $0$ is $1$.",
  skills: ["exponential-functions", "systems-of-equations"]
},
{
  id: 20,
  type: "fill-in",
  difficulty: "hard",
  question: "If $(2x + k)(3x - 4) = 6x^2 + 7x + m$ for all values of $x$, what is the value of $m$?",
  correctAnswer: "-20",
  explanation: "**SAT Pattern: Matching Polynomial Coefficients**\n\n**The correct answer is $-20$.**\n\n**The Fast Way (20 seconds):** Expand: $6x^2 - 8x + 3kx - 4k = 6x^2 + (3k - 8)x - 4k$. Match $x$-coefficient: $3k - 8 = 7$, so $k = 5$. Then $m = -4k = -20$.\n\n**The Full Solution:**\nExpand the left side:\n$(2x + k)(3x - 4) = 6x^2 - 8x + 3kx - 4k = 6x^2 + (3k - 8)x - 4k$\n\nMatch with $6x^2 + 7x + m$:\n- $x^2$ coefficient: $6 = 6$ \\checkmark\n- $x$ coefficient: $3k - 8 = 7 \\Rightarrow 3k = 15 \\Rightarrow k = 5$\n- constant: $-4k = m \\Rightarrow m = -4(5) = -20$\n\n**Common Mistakes to Avoid:**\n• Finding $k = 5$ but reporting $k$ instead of $m$.\n• Expanding and getting the sign wrong on $-4k$.\n\n**Verification:** $(2x + 5)(3x - 4) = 6x^2 - 8x + 15x - 20 = 6x^2 + 7x - 20$ \\checkmark\n\n**Test Day Takeaway:** Expand, match coefficients step by step, and answer the variable that's asked for.",
  skills: ["factoring", "polynomial-operations"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  question: "The function $f(x) = a(x - h)^2 + k$ has a minimum value of $-5$ at $x = 3$ and passes through the point $(7, 27)$. What is the value of $f(0)$?",
  choices: [
    { id: "A", text: "$7$" },
    { id: "B", text: "$13$" },
    { id: "C", text: "$15$" },
    { id: "D", text: "$22$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Quadratic from Vertex and Point**\n\n**Choice B is correct.**\n\n**The Fast Way (30 seconds):** Vertex $(3, -5)$: $f(x) = a(x - 3)^2 - 5$. Use $(7, 27)$: $27 = a(16) - 5$, so $16a = 32$ and $a = 2$. Then $f(0) = 2(9) - 5 = 18 - 5 = 13$.\n\n**The Full Solution:**\nThe minimum at $x = 3$ with value $-5$ means the vertex is $(3, -5)$:\n$f(x) = a(x - 3)^2 - 5$\n\nUsing the point $(7, 27)$:\n$27 = a(7 - 3)^2 - 5$\n$27 = 16a - 5$\n$32 = 16a$\n$a = 2$\n\nNow find $f(0)$:\n$f(0) = 2(0 - 3)^2 - 5 = 2(9) - 5 = 18 - 5 = 13$\n\nVerification: $f(7) = 2(4)^2 - 5 = 32 - 5 = 27$ \\checkmark\n\n**Why the wrong answers are tempting:**\n• Choice A: Uses $a = 1$ instead of $a = 2$.\n• Choice C: Computes $2(10) - 5 = 15$, using $(0-3)^2 = 10$ instead of $9$.\n• Choice D: Computes $f(0) = 2(9) + 4 = 22$, misremembering the vertex $y$-value.\n\n**Test Day Takeaway:** Minimum/maximum value gives the vertex. Find $a$ from a second point, then evaluate wherever needed.",
  skills: ["vertex-form", "quadratic-equations", "function-interpretation"]
},
{
  id: 22,
  type: "fill-in",
  difficulty: "hard",
  question: "In a right triangle, the two legs have lengths $3\\sqrt{5}$ and $6\\sqrt{5}$. What is the area of the triangle?",
  correctAnswer: "45",
  explanation: "**SAT Pattern: Area with Radical Side Lengths**\n\n**The correct answer is $45$.**\n\n**The Fast Way (15 seconds):** Area $= \\frac{1}{2} \\cdot 3\\sqrt{5} \\cdot 6\\sqrt{5} = \\frac{1}{2} \\cdot 18 \\cdot 5 = \\frac{90}{2} = 45$.\n\n**The Full Solution:**\nArea of a right triangle $= \\frac{1}{2} \\times \\text{leg}_1 \\times \\text{leg}_2$\n\n$= \\frac{1}{2} \\times 3\\sqrt{5} \\times 6\\sqrt{5}$\n\n$= \\frac{1}{2} \\times (3 \\times 6) \\times (\\sqrt{5} \\times \\sqrt{5})$\n\n$= \\frac{1}{2} \\times 18 \\times 5$\n\n$= \\frac{90}{2} = 45$\n\n**Common Mistakes to Avoid:**\n• Forgetting that $\\sqrt{5} \\times \\sqrt{5} = 5$, not $\\sqrt{25} = 5$ (same result, but some students write $\\sqrt{10}$).\n• Forgetting the $\\frac{1}{2}$ factor, giving $90$ instead of $45$.\n\n**Verification:** $3\\sqrt{5} \\approx 6.71$ and $6\\sqrt{5} \\approx 13.42$. Area $\\approx \\frac{1}{2}(6.71)(13.42) \\approx 45$ \\checkmark\n\n**Test Day Takeaway:** When multiplying radicals, $\\sqrt{a} \\times \\sqrt{a} = a$. Separate the coefficients from the radicals to simplify.",
  skills: ["triangles", "area", "radical-expressions"]
}
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
        {
          id: 1,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A playlist has $80$ songs. If $20$ of the songs are by a single artist, what fraction of the playlist is by that artist?",
          choices: [
            { id: "A", text: "$\\frac{1}{5}$" },
            { id: "B", text: "$\\frac{1}{4}$" },
            { id: "C", text: "$\\frac{1}{3}$" },
            { id: "D", text: "$\\frac{2}{5}$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Basic Fraction**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $\\frac{20}{80} = \\frac{1}{4}$.\n\n**The Full Solution:**\nFraction $= \\frac{20}{80} = \\frac{1}{4}$\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{1}{5}$): From $\\frac{20}{100}$, using a wrong total.\n• Choice C ($\\frac{1}{3}$): Estimation error.\n• Choice D ($\\frac{2}{5}$): From $\\frac{20}{50}$.\n\n**Test Day Takeaway:** Simplify fractions by dividing numerator and denominator by the GCF.",
          skills: ["ratios-proportions"]
        },
        {
          id: 2,
          type: "fill-in",
          difficulty: "easy",
          question: "If $x - 8 = 14$, what is the value of $x$?",
          correctAnswer: "22",
          explanation: "**SAT Pattern: One-Step Equation**\n\n**The correct answer is 22.**\n\n**The Fast Way (5 seconds):** $x = 14 + 8 = 22$.\n\n**The Full Solution:**\n$x - 8 = 14$\n$x = 14 + 8 = 22$\n\n**Common Mistakes to Avoid:**\n• Subtracting: $14 - 8 = 6$\n• Adding wrong: $14 + 8 = 21$\n\n**Verification:** $22 - 8 = 14$ ✓\n\n**Test Day Takeaway:** To undo subtraction, add to both sides.",
          skills: ["solving-equations"]
        },
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A website gets $3{,}500$ visits per day. At this rate, how many visits will it get in $4$ weeks?",
          choices: [
            { id: "A", text: "$14{,}000$" },
            { id: "B", text: "$24{,}500$" },
            { id: "C", text: "$49{,}000$" },
            { id: "D", text: "$98{,}000$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Unit Rate with Conversion**\n\n**Choice D is correct.**\n\n**The Fast Way (15 seconds):** $4$ weeks $= 28$ days. $3{,}500 \\times 28 = 98{,}000$.\n\n**The Full Solution:**\n$4$ weeks $\\times 7$ days/week $= 28$ days\n$3{,}500$ visits/day $\\times 28$ days $= 98{,}000$ visits\n\n**Why the wrong answers are tempting:**\n• Choice A ($14{,}000$): $3{,}500 \\times 4$, forgetting to convert weeks to days.\n• Choice B ($24{,}500$): $3{,}500 \\times 7$, using $1$ week instead of $4$.\n• Choice C ($49{,}000$): $3{,}500 \\times 14$, using $2$ weeks.\n\n**Test Day Takeaway:** Convert units first (weeks to days), then multiply.",
          skills: ["word-problems", "unit-conversion"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A phone battery is at $85\\%$ and loses $5\\%$ every hour. What percent of battery remains after $3$ hours?",
          choices: [
            { id: "A", text: "$65\\%$" },
            { id: "B", text: "$70\\%$" },
            { id: "C", text: "$75\\%$" },
            { id: "D", text: "$80\\%$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Repeated Subtraction**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $85 - 3(5) = 85 - 15 = 70\\%$.\n\n**The Full Solution:**\nBattery lost in $3$ hours $= 3 \\times 5 = 15\\%$\nRemaining $= 85 - 15 = 70\\%$\n\n**Why the wrong answers are tempting:**\n• Choice A ($65\\%$): Subtracting $4 \\times 5 = 20\\%$ instead of $3 \\times 5$.\n• Choice C ($75\\%$): Subtracting $2 \\times 5 = 10\\%$.\n• Choice D ($80\\%$): Subtracting only $1 \\times 5 = 5\\%$.\n\n**Test Day Takeaway:** For constant-rate decrease, multiply the rate by time and subtract from the starting value.",
          skills: ["word-problems", "percents"]
        },
        {
          id: 5,
          type: "multiple-choice",
          difficulty: "easy",
          question: "If $2(x + 4) = 18$, what is the value of $x$?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$5$" },
            { id: "C", text: "$7$" },
            { id: "D", text: "$9$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Two-Step Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $x + 4 = 9$, so $x = 5$.\n\n**The Full Solution:**\n$2(x + 4) = 18$\n$x + 4 = 9$\n$x = 5$\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): From $18 \\div 2 = 9$, then $9 - 4 = 5$... actually that gives $5$. Check: from a different error path.\n• Choice C ($7$): From $18 - 4 = 14$, then $14 \\div 2 = 7$ (wrong order of operations).\n• Choice D ($9$): From $18 \\div 2 = 9$ and stopping there.\n\n**Test Day Takeaway:** Divide first to undo the multiplication, then subtract to undo the addition.",
          skills: ["solving-equations", "linear-equations"]
        },
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The system of equations below has solution $(x, y)$. What is the value of $y$?",
          questionFormula: {
            equation: "$$\\begin{cases} x + 3y = 19 \\\\ x - y = 3 \\end{cases}$$"
          },
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$5$" },
            { id: "D", text: "$7$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Solving a System by Elimination**\n\n**Choice B is correct.**\n\n**The Fast Way (30 seconds):** Subtract the second from the first: $(x+3y) - (x-y) = 19 - 3$, so $4y = 16$, $y = 4$.\n\n**The Full Solution:**\n$x + 3y = 19$\n$x - y = 3$\nSubtract: $4y = 16$, so $y = 4$.\nCheck: $x = 3 + y = 7$. Then $7 + 12 = 19$ ✓\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): This is $19 - 16$, a stray calculation.\n• Choice C ($5$): From $\\frac{19-3}{3+1}$... no. Possibly dividing $20 \\div 4$.\n• Choice D ($7$): This is the $x$-value, not $y$.\n\n**Test Day Takeaway:** When both equations have the same coefficient on one variable, subtract to eliminate it.",
          skills: ["systems-of-equations"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A data set contains the values $12, 15, 18, 20, 22, 25, 28$. What is the median?",
          choices: [
            { id: "A", text: "$18$" },
            { id: "B", text: "$20$" },
            { id: "C", text: "$22$" },
            { id: "D", text: "$21$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Finding the Median**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** There are $7$ values already in order. The middle value (4th) is $20$.\n\n**The Full Solution:**\n$n = 7$ values. The median is the $\\frac{7+1}{2} = 4$th value.\nOrdered: $12, 15, 18, \\mathbf{20}, 22, 25, 28$\nMedian $= 20$\n\n**Why the wrong answers are tempting:**\n• Choice A ($18$): The 3rd value, one position before the median.\n• Choice C ($22$): The 5th value, one position after the median.\n• Choice D ($21$): Averaging the 4th and 5th values, which is for even-sized data sets.\n\n**Test Day Takeaway:** For an odd number of values, the median is the middle value. For $n$ values, it is the $\\frac{n+1}{2}$th value.",
          skills: ["mean-median-mode", "statistics"]
        },
        {
          id: 8,
          type: "fill-in",
          difficulty: "medium",
          question: "If $g(x) = -3x + 20$, for what value of $x$ does $g(x) = 2$?",
          correctAnswer: "6",
          explanation: "**SAT Pattern: Solving a Function Equation**\n\n**The correct answer is 6.**\n\n**The Fast Way (15 seconds):** $-3x + 20 = 2$. $-3x = -18$. $x = 6$.\n\n**The Full Solution:**\n$g(x) = 2$\n$-3x + 20 = 2$\n$-3x = 2 - 20 = -18$\n$x = \\frac{-18}{-3} = 6$\n\n**Common Mistakes to Avoid:**\n• Sign error: $-3x = -18$ gives $x = 6$, not $-6$\n• Dividing $-18 \\div 3 = -6$ and keeping the negative\n\n**Verification:** $g(6) = -3(6) + 20 = -18 + 20 = 2$ ✓\n\n**Test Day Takeaway:** Set the function expression equal to the output value and solve for $x$.",
          skills: ["function-evaluation", "linear-functions"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "An online store sells headphones for $\\$45$ each and earbuds for $\\$20$ each. In one day, the store sold $30$ items for a total of $\\$1{,}050$. How many headphones were sold?",
          choices: [
            { id: "A", text: "$12$" },
            { id: "B", text: "$15$" },
            { id: "C", text: "$18$" },
            { id: "D", text: "$20$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: System of Equations from a Word Problem**\n\n**Choice C is correct.**\n\n**The Fast Way (40 seconds):** Let $h$ = headphones. Earbuds $= 30 - h$. $45h + 20(30-h) = 1050$. $45h + 600 - 20h = 1050$. $25h = 450$. $h = 18$.\n\n**The Full Solution:**\n$h + e = 30$ and $45h + 20e = 1050$\nSubstitute $e = 30 - h$:\n$45h + 20(30-h) = 1050$\n$45h + 600 - 20h = 1050$\n$25h = 450$\n$h = 18$\n\n**Why the wrong answers are tempting:**\n• Choice A ($12$): Check: $45(12) + 20(18) = 540 + 360 = 900 \\neq 1050$.\n• Choice B ($15$): Check: $45(15) + 20(15) = 675 + 300 = 975 \\neq 1050$.\n• Choice D ($20$): Check: $45(20) + 20(10) = 900 + 200 = 1100 \\neq 1050$.\n\n**Test Day Takeaway:** Mixture problems need two equations: one for quantity, one for total value.",
          skills: ["systems-of-equations", "word-problems"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The scatterplot shows the relationship between hours of practice and test scores for $10$ students. The line of best fit has the equation $y = 5x + 60$. What does the slope $5$ represent?",
          choices: [
            { id: "A", text: "Each student practiced $5$ hours." },
            { id: "B", text: "For each additional hour of practice, the predicted score increases by $5$ points." },
            { id: "C", text: "The minimum test score is $5$." },
            { id: "D", text: "There are $5$ students who scored above $60$." }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Interpreting Slope in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** Slope = rate of change = predicted increase in $y$ per unit increase in $x$.\n\n**The Full Solution:**\nIn $y = 5x + 60$, the slope $5$ means that for each additional hour of practice, the predicted test score increases by $5$ points.\n\n**Why the wrong answers are tempting:**\n• Choice A: The slope is a rate, not a fixed number of hours.\n• Choice C: The $y$-intercept ($60$) is the predicted score with $0$ practice, not $5$.\n• Choice D: The slope has nothing to do with counting students.\n\n**Test Day Takeaway:** Slope in context always means \"for each one-unit increase in $x$, $y$ changes by [slope] units.\"",
          skills: ["scatterplots", "function-interpretation"]
        },
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $3^{2x} = 81$, what is the value of $x$?",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$3$" },
            { id: "C", text: "$4$" },
            { id: "D", text: "$6$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Solving Exponential Equations by Matching Bases**\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** $81 = 3^4$, so $3^{2x} = 3^4$, meaning $2x = 4$, $x = 2$.\n\n**The Full Solution:**\n$3^{2x} = 81$\n$3^{2x} = 3^4$\nSince the bases are equal: $2x = 4$\n$x = 2$\n\n**Why the wrong answers are tempting:**\n• Choice B ($3$): From $81 \\div 27 = 3$, or thinking $3^3 = 81$ (it is $27$).\n• Choice C ($4$): This is the exponent $2x$, not $x$.\n• Choice D ($6$): From multiplying instead of dividing.\n\n**Test Day Takeaway:** Rewrite both sides with the same base, then set the exponents equal.",
          skills: ["exponent-rules", "solving-equations"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A right triangle has one leg of length $6$ and a hypotenuse of length $10$. What is the length of the other leg?",
          choices: [
            { id: "A", text: "$4$" },
            { id: "B", text: "$7$" },
            { id: "C", text: "$8$" },
            { id: "D", text: "$\\sqrt{136}$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Pythagorean Theorem**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** $a^2 + 6^2 = 10^2$. $a^2 = 100 - 36 = 64$. $a = 8$.\n\n**The Full Solution:**\n$a^2 + b^2 = c^2$\n$a^2 + 36 = 100$\n$a^2 = 64$\n$a = 8$\n\nThis is the $6$-$8$-$10$ triple (a multiple of $3$-$4$-$5$).\n\n**Why the wrong answers are tempting:**\n• Choice A ($4$): From $10 - 6 = 4$, subtracting instead of using the theorem.\n• Choice B ($7$): A guess between $4$ and $8$.\n• Choice D ($\\sqrt{136}$): From $6^2 + 10^2 = 136$, adding instead of subtracting.\n\n**Test Day Takeaway:** Know common Pythagorean triples: $3$-$4$-$5$, $6$-$8$-$10$, $5$-$12$-$13$.",
          skills: ["triangles", "right-triangle-trig"]
        },
        {
          id: 13,
          type: "fill-in",
          difficulty: "medium",
          question: "The area of a rectangle is $108$ square inches and its length is $12$ inches. What is the width, in inches?",
          correctAnswer: "9",
          explanation: "**SAT Pattern: Area of a Rectangle**\n\n**The correct answer is 9.**\n\n**The Fast Way (10 seconds):** Width $= \\frac{108}{12} = 9$.\n\n**The Full Solution:**\nArea $= \\text{length} \\times \\text{width}$\n$108 = 12 \\times w$\n$w = \\frac{108}{12} = 9$\n\n**Common Mistakes to Avoid:**\n• Dividing incorrectly: $108 \\div 12 = 8$\n• Subtracting: $108 - 12 = 96$\n\n**Verification:** $12 \\times 9 = 108$ ✓\n\n**Test Day Takeaway:** Area = length times width. To find a missing dimension, divide the area by the known dimension.",
          skills: ["area", "word-problems"]
        },
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The function $f(x) = 200(1.05)^x$ models the balance in dollars of a bank account after $x$ years. What is the meaning of $f(3) \\approx 231.53$?",
          choices: [
            { id: "A", text: "After $3$ years, the account balance is approximately $\\$231.53$." },
            { id: "B", text: "The account earns $\\$231.53$ in interest each year." },
            { id: "C", text: "The initial deposit was $\\$231.53$." },
            { id: "D", text: "After $231.53$ years, the balance is $\\$3$." }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Interpreting Function Values in Context**\n\n**Choice A is correct.**\n\n**The Fast Way (10 seconds):** $f(3) \\approx 231.53$ means that when $x = 3$ (after $3$ years), the balance is approximately $\\$231.53$.\n\n**The Full Solution:**\nIn $f(x) = 200(1.05)^x$, $x$ represents years and $f(x)$ represents the balance. So $f(3) \\approx 231.53$ means after $3$ years, the balance is about $\\$231.53$.\n\n**Why the wrong answers are tempting:**\n• Choice B: $231.53$ is the total balance, not annual interest.\n• Choice C: The initial deposit is $f(0) = 200$.\n• Choice D: Swaps the input and output of the function.\n\n**Test Day Takeaway:** $f(a) = b$ means \"when the input is $a$, the output is $b$.\" Translate using the context.",
          skills: ["function-interpretation", "exponential-functions"]
        },
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $y = 3x - 7$ and $y = -x + 9$, what is the value of $x$ at the point of intersection?",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$5$" },
            { id: "D", text: "$8$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Finding the Intersection of Two Lines**\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** Set equal: $3x - 7 = -x + 9$. $4x = 16$. $x = 4$.\n\n**The Full Solution:**\n$3x - 7 = -x + 9$\n$3x + x = 9 + 7$\n$4x = 16$\n$x = 4$\n\n**Why the wrong answers are tempting:**\n• Choice A ($2$): Check: $3(2) - 7 = -1$ and $-2 + 9 = 7$. Not equal.\n• Choice C ($5$): Check: $3(5) - 7 = 8$ and $-5 + 9 = 4$. Not equal.\n• Choice D ($8$): From $16 \\div 2 = 8$, dividing by $2$ instead of $4$.\n\n**Test Day Takeaway:** At the intersection point, both equations give the same $y$-value. Set them equal and solve for $x$.",
          skills: ["systems-of-equations", "linear-equations"]
        },
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "Which of the following is equivalent to $(2x - 3)^2$?",
          choices: [
            { id: "A", text: "$4x^2 - 9$" },
            { id: "B", text: "$4x^2 + 9$" },
            { id: "C", text: "$4x^2 - 6x + 9$" },
            { id: "D", text: "$4x^2 - 12x + 9$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Squaring a Binomial**\n\n**Choice D is correct.**\n\n**The Fast Way (20 seconds):** $(2x-3)^2 = (2x)^2 - 2(2x)(3) + 3^2 = 4x^2 - 12x + 9$.\n\n**The Full Solution:**\n$(2x - 3)^2 = (2x - 3)(2x - 3)$\n$= 4x^2 - 6x - 6x + 9$\n$= 4x^2 - 12x + 9$\n\n**Why the wrong answers are tempting:**\n• Choice A ($4x^2 - 9$): This is $(2x-3)(2x+3)$, a difference of squares, not a perfect square.\n• Choice B ($4x^2 + 9$): Squares each term but drops the middle term entirely.\n• Choice C ($4x^2 - 6x + 9$): Only multiplies $2x$ and $-3$ once instead of twice for the middle term.\n\n**Test Day Takeaway:** $(a-b)^2 = a^2 - 2ab + b^2$. The middle term is TWICE the product.",
          skills: ["polynomial-operations", "algebraic-manipulation"]
        },
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The equation $2x^2 - 8x + k = 0$ has no real solutions. Which of the following could be the value of $k$?",
          choices: [
            { id: "A", text: "$6$" },
            { id: "B", text: "$8$" },
            { id: "C", text: "$10$" },
            { id: "D", text: "$12$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Discriminant for No Real Solutions**\n\n**Choice C is correct.**\n\n**The Fast Way (30 seconds):** No real solutions: $b^2 - 4ac < 0$. $64 - 8k < 0$. $k > 8$. The smallest choice greater than $8$ is $10$.\n\n**The Full Solution:**\nDiscriminant $= b^2 - 4ac = (-8)^2 - 4(2)(k) = 64 - 8k$\nNo real solutions: $64 - 8k < 0$\n$64 < 8k$\n$k > 8$\n\nAmong the choices, $k = 10$ and $k = 12$ both work, but $10$ is a valid answer.\n\n**Why the wrong answers are tempting:**\n• Choice A ($6$): $64 - 48 = 16 > 0$, so two real solutions.\n• Choice B ($8$): $64 - 64 = 0$, so exactly one real solution.\n\n**Test Day Takeaway:** No real solutions = discriminant $< 0$. One solution = discriminant $= 0$. Two solutions = discriminant $> 0$.",
          skills: ["discriminant", "quadratic-equations"]
        },
        {
          id: 18,
          type: "fill-in",
          difficulty: "hard",
          question: "The volume of a cone is $48\\pi$ cubic centimeters and its height is $9$ centimeters. What is the radius, in centimeters, of the base of the cone?",
          correctAnswer: "4",
          explanation: "**SAT Pattern: Volume of a Cone**\n\n**The correct answer is 4.**\n\n**The Fast Way (30 seconds):** $V = \\frac{1}{3}\\pi r^2 h$. $48\\pi = \\frac{1}{3}\\pi r^2(9) = 3\\pi r^2$. $r^2 = 16$. $r = 4$.\n\n**The Full Solution:**\n$V = \\frac{1}{3}\\pi r^2 h$\n$48\\pi = \\frac{1}{3}\\pi r^2 (9)$\n$48\\pi = 3\\pi r^2$\n$48 = 3r^2$\n$r^2 = 16$\n$r = 4$\n\n**Common Mistakes to Avoid:**\n• Forgetting the $\\frac{1}{3}$: using $V = \\pi r^2 h$ gives $r^2 = \\frac{48}{9}$\n• Answering $16$ instead of taking the square root\n\n**Verification:** $V = \\frac{1}{3}\\pi(16)(9) = \\frac{144\\pi}{3} = 48\\pi$ ✓\n\n**Test Day Takeaway:** The cone volume formula ($\\frac{1}{3}\\pi r^2 h$) is on the reference sheet. Plug in and solve for the missing variable.",
          skills: ["volume"]
        },
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The graph of $y = f(x)$ passes through the point $(2, 5)$. If $g(x) = f(x) + 3$, which point must be on the graph of $y = g(x)$?",
          choices: [
            { id: "A", text: "$(2, 8)$" },
            { id: "B", text: "$(5, 5)$" },
            { id: "C", text: "$(2, 2)$" },
            { id: "D", text: "$(5, 8)$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Function Transformations — Vertical Shift**\n\n**Choice A is correct.**\n\n**The Fast Way (10 seconds):** $g(x) = f(x) + 3$ shifts the graph up $3$. Point $(2, 5)$ becomes $(2, 5 + 3) = (2, 8)$.\n\n**The Full Solution:**\n$g(2) = f(2) + 3 = 5 + 3 = 8$\nSo the point $(2, 8)$ is on $y = g(x)$.\n\n**Why the wrong answers are tempting:**\n• Choice B ($5, 5$): Shifts horizontally instead of vertically.\n• Choice C ($2, 2$): Subtracts $3$ instead of adding.\n• Choice D ($5, 8$): Shifts both $x$ and $y$ by $3$.\n\n**Test Day Takeaway:** $f(x) + k$ shifts the graph up by $k$. Only the $y$-coordinate changes.",
          skills: ["function-transformations"]
        },
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The equation of a parabola is $y = -(x - 5)^2 + 16$. What is the area of the rectangle formed by the $x$-intercepts and the vertex of the parabola?",
          choices: [
            { id: "A", text: "$32$" },
            { id: "B", text: "$64$" },
            { id: "C", text: "$128$" },
            { id: "D", text: "$144$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Parabola Properties and Area**\n\n**Choice C is correct.**\n\n**The Fast Way (45 seconds):** Vertex is $(5, 16)$. Find $x$-intercepts: $0 = -(x-5)^2 + 16$, $(x-5)^2 = 16$, $x = 5 \\pm 4$, so $x = 1$ and $x = 9$. Width of rectangle $= 9 - 1 = 8$. Height $= 16$. Area $= 8 \\times 16 = 128$.\n\n**The Full Solution:**\nVertex: $(5, 16)$\n$x$-intercepts: $-(x-5)^2 + 16 = 0$ → $(x-5)^2 = 16$ → $x = 1$ or $x = 9$\nRectangle width $= 9 - 1 = 8$, height $= 16$\nArea $= 8 \\times 16 = 128$\n\n**Why the wrong answers are tempting:**\n• Choice A ($32$): From $\\frac{128}{4}$, perhaps computing a triangle area.\n• Choice B ($64$): From $8 \\times 8$, using wrong height or $4 \\times 16$.\n• Choice D ($144$): From $12 \\times 12$, a different calculation error.\n\n**Test Day Takeaway:** Read the vertex from vertex form. Find $x$-intercepts by setting $y = 0$.",
          skills: ["quadratic-functions", "area"]
        },
        {
          id: 21,
          type: "multiple-choice",
          difficulty: "hard",
          question: "If $x > 0$ and $x^2 - 6x = 16$, what is the value of $x$?",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$8$" },
            { id: "D", text: "$16$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Solving a Quadratic Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (30 seconds):** $x^2 - 6x - 16 = 0$. Factor: $(x - 8)(x + 2) = 0$. $x = 8$ or $x = -2$. Since $x > 0$, $x = 8$.\n\n**The Full Solution:**\n$x^2 - 6x - 16 = 0$\nFind two numbers that multiply to $-16$ and add to $-6$: $-8$ and $+2$.\n$(x - 8)(x + 2) = 0$\n$x = 8$ or $x = -2$\nSince $x > 0$: $x = 8$\n\n**Why the wrong answers are tempting:**\n• Choice A ($2$): The positive factor, but $x = -2$ not $2$. Sign confusion.\n• Choice B ($4$): Check: $16 - 24 = -8 \\neq 16$.\n• Choice D ($16$): This is the constant in the equation, not a solution.\n\n**Test Day Takeaway:** When the problem says $x > 0$, both solutions exist but you pick the positive one.",
          skills: ["quadratic-equations", "factoring"]
        },
        {
          id: 22,
          type: "fill-in",
          difficulty: "hard",
          question: "A sphere has a volume of $288\\pi$ cubic inches. What is the radius of the sphere, in inches?",
          correctAnswer: "6",
          explanation: "**SAT Pattern: Volume of a Sphere**\n\n**The correct answer is 6.**\n\n**The Fast Way (30 seconds):** $V = \\frac{4}{3}\\pi r^3$. $288\\pi = \\frac{4}{3}\\pi r^3$. $r^3 = 288 \\times \\frac{3}{4} = 216$. $r = 6$.\n\n**The Full Solution:**\n$\\frac{4}{3}\\pi r^3 = 288\\pi$\n$\\frac{4}{3}r^3 = 288$\n$r^3 = 288 \\times \\frac{3}{4} = 216$\n$r = \\sqrt[3]{216} = 6$\n\n**Common Mistakes to Avoid:**\n• Forgetting to multiply by $\\frac{3}{4}$: $r^3 = 288$\n• Not taking the cube root: answering $216$\n\n**Verification:** $V = \\frac{4}{3}\\pi(6)^3 = \\frac{4}{3}\\pi(216) = 288\\pi$ ✓\n\n**Test Day Takeaway:** The sphere volume formula is on the reference sheet. Solve for $r$ step by step.",
          skills: ["volume"]
        }
      ]
    }
  ]
};

export default practiceTest2;
