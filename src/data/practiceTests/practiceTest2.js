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
  question: "A linear model for a data set is $y = -0.6x + 45$. What is the $y$-value predicted by this model when $x = 30$?",
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
  question: "A museum recorded its daily visitors. On Tuesday, there were 480 visitors, and on Saturday, there were 720 visitors. What is the percent increase from Tuesday to Saturday?",
  choices: [
    { id: "A", text: "24%" },
    { id: "B", text: "33%" },
    { id: "C", text: "50%" },
    { id: "D", text: "240%" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Percent Increase**\n\n**Choice C is correct.**\n\n**The Fast Way (15s):** Percent increase $= \\frac{720 - 480}{480} \\times 100 = \\frac{240}{480} \\times 100 = 50\\%$.\n\n**The Full Solution:**\nChange $= 720 - 480 = 240$.\nPercent increase $= \\frac{240}{480} \\times 100 = 50\\%$.\n\n**Why the wrong answers are tempting:**\n• A: Treats 240 as a percentage without dividing.\n• B: Divides change by new value: $\\frac{240}{720} \\approx 33\\%$.\n• D: Reports the raw change as though it were a percent.\n\n**Test Day Takeaway:** Percent change = $\\frac{\\text{change}}{\\text{original}} \\times 100$. Always divide by the starting value.",
  skills: ["percents"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  question: "A printer produces 350 pages per minute. If a document is 8,400 pages long, how many hours will it take the printer to print the entire document?",
  choices: [
    { id: "A", text: "$0.4$" },
    { id: "B", text: "$4$" },
    { id: "C", text: "$24$" },
    { id: "D", text: "$1,440$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Unit Conversion — Minutes to Hours**\n\n**Choice A is correct.**\n\n**The Fast Way (15s):** Time in minutes $= \\frac{8{,}400}{350} = 24$ minutes. Convert to hours: $\\frac{24}{60} = 0.4$ hours.\n\n**The Full Solution:**\nPages $\\div$ rate $= 8{,}400 \\div 350 = 24$ minutes.\n$24$ minutes $= \\frac{24}{60} = \\frac{2}{5} = 0.4$ hours.\n\n**Why the wrong answers are tempting:**\n• B: Divides 8,400 by 350 then divides by 6 instead of 60.\n• C: Gives the time in minutes, not hours.\n• D: Multiplies 24 by 60 instead of dividing.\n\n**Test Day Takeaway:** After calculating time in minutes, divide by 60 to convert to hours.",
  skills: ["word-problems", "ratios"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  question: "If $\\sqrt{x + 7} = 9$, what is the value of $x$?",
  choices: [
    { id: "A", text: "$2$" },
    { id: "B", text: "$16$" },
    { id: "C", text: "$74$" },
    { id: "D", text: "$81$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Solving Radical Equations**\n\n**Choice C is correct.**\n\n**The Fast Way (10s):** Square both sides: $x + 7 = 81$. So $x = 74$.\n\n**The Full Solution:**\n$\\sqrt{x + 7} = 9$\n$(\\sqrt{x + 7})^2 = 9^2$\n$x + 7 = 81$\n$x = 74$.\nCheck: $\\sqrt{74 + 7} = \\sqrt{81} = 9$. ✓\n\n**Why the wrong answers are tempting:**\n• A: Computes $9 - 7 = 2$ (subtracts instead of squaring first).\n• B: Computes $9^2 = 81$ and then subtracts something else, or uses $\\sqrt{16} = 4$.\n• D: Forgets to subtract 7 after squaring.\n\n**Test Day Takeaway:** To solve $\\sqrt{\\text{expression}} = n$, square both sides first, then isolate the variable.",
  skills: ["radical-expressions", "solving-equations"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  question: "Which system of inequalities has a solution set that includes the point $(3, 1)$?",
  choices: [
    { id: "A", text: "$y > 2x - 4$ and $y > -x + 5$" },
    { id: "B", text: "$y > 2x - 4$ and $y < -x + 5$" },
    { id: "C", text: "$y < 2x - 4$ and $y < -x + 5$" },
    { id: "D", text: "$y < 2x - 4$ and $y > -x + 5$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Testing a Point in a System of Inequalities**\n\n**Choice C is correct.**\n\n**The Fast Way (20s):** Plug $(3, 1)$ into each boundary:\n$2(3) - 4 = 2$, and $y = 1 < 2$, so $y < 2x - 4$. ✓\n$-(3) + 5 = 2$, and $y = 1 < 2$, so $y < -x + 5$. ✓\nWe need both $y < 2x - 4$ and $y < -x + 5$. That matches Choice C.\n\n**The Full Solution:**\nTest each choice with $(3, 1)$:\n• A: $1 > 2$? No. ✗\n• B: $1 > 2$? No. ✗\n• C: $1 < 2$? Yes. $1 < 2$? Yes. Both satisfied. ✓\n• D: $1 < 2$? Yes. But $1 > 2$? No. ✗\n\n**Why the wrong answers are tempting:**\n• A: Reverses both inequality directions.\n• B: Gets the first inequality direction wrong.\n• D: Gets the second inequality direction wrong.\n\n**Test Day Takeaway:** Plug the point into each inequality in every choice. The point must satisfy ALL inequalities in the system.",
  skills: ["systems-of-equations", "linear-functions"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  question: "If $g(x) = 4x - x^2$, what is the value of $g(6)$?",
  choices: [
    { id: "A", text: "$-12$" },
    { id: "B", text: "$-2$" },
    { id: "C", text: "$12$" },
    { id: "D", text: "$18$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice A is correct.**\n\n**The Fast Way (10s):** $g(6) = 4(6) - 6^2 = 24 - 36 = -12$.\n\n**The Full Solution:**\n$g(6) = 4(6) - (6)^2 = 24 - 36 = -12$.\n\n**Why the wrong answers are tempting:**\n• B: Computes $4(6) - 26 = -2$ (arithmetic error on $6^2$).\n• C: Takes the absolute value of $-12$.\n• D: Computes $4(6) - 6 = 18$ (forgets to square).\n\n**Test Day Takeaway:** Follow order of operations: exponents before multiplication, then subtract.",
  skills: ["function-interpretation"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  question: "A polling organization surveyed a random sample of 1,200 likely voters and found that $0.52 \\pm 0.03$ supported a candidate, at a 95% confidence level. Based on the interval, is it reasonable to conclude that the candidate has majority support (more than 50%)?",
  choices: [
    { id: "A", text: "Yes, because the entire interval is above 50%." },
    { id: "B", text: "Yes, because 52% is above 50%." },
    { id: "C", text: "No, because the interval includes values below 50%." },
    { id: "D", text: "No, because the margin of error is only 3%." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Confidence Interval and Conclusions**\n\n**Choice C is correct.**\n\n**The Fast Way (15s):** The interval is $0.52 \\pm 0.03 = (0.49, 0.55)$. Since $0.49 < 0.50$, the interval includes values below 50%. We cannot conclude with confidence that the candidate has majority support.\n\n**The Full Solution:**\nLower bound: $0.52 - 0.03 = 0.49 = 49\\%$.\nUpper bound: $0.52 + 0.03 = 0.55 = 55\\%$.\nSince the interval $(49\\%, 55\\%)$ includes values below $50\\%$, it is plausible that fewer than half support the candidate.\n\n**Why the wrong answers are tempting:**\n• A: The interval is NOT entirely above 50% — it goes down to 49%.\n• B: The sample statistic (52%) is above 50%, but the interval shows uncertainty.\n• D: The size of the margin of error is not the reason; the issue is that the interval crosses 50%.\n\n**Test Day Takeaway:** To make a definitive conclusion, the entire confidence interval must support it. If the interval straddles the threshold, you cannot conclude.",
  skills: ["margin-of-error", "statistics"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  question: "A cell phone plan costs $\\$35$ per month plus $\\$0.10$ per text message. Another plan costs $\\$20$ per month plus $\\$0.25$ per text message. For what number of text messages per month do the two plans cost the same?",
  choices: [
    { id: "A", text: "$50$" },
    { id: "B", text: "$100$" },
    { id: "C", text: "$150$" },
    { id: "D", text: "$200$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Setting Two Linear Expressions Equal**\n\n**Choice B is correct.**\n\n**The Fast Way (15s):** Set costs equal: $35 + 0.10t = 20 + 0.25t$. Then $15 = 0.15t$, so $t = 100$.\n\n**The Full Solution:**\nPlan 1: $35 + 0.10t$.\nPlan 2: $20 + 0.25t$.\nSet equal: $35 + 0.10t = 20 + 0.25t$.\n$35 - 20 = 0.25t - 0.10t$.\n$15 = 0.15t$.\n$t = \\frac{15}{0.15} = 100$.\nCheck: Plan 1: $35 + 10 = 45$. Plan 2: $20 + 25 = 45$. ✓\n\n**Why the wrong answers are tempting:**\n• A: Divides $15$ by $0.30$ instead of $0.15$.\n• C: Divides $15$ by $0.10$.\n• D: Divides $20$ by $0.10$.\n\n**Test Day Takeaway:** Set the two cost expressions equal and solve for the variable.",
  skills: ["word-problems", "solving-equations", "linear-functions"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  question: "The function $f(x) = (x - 6)(x + 14)$ represents the profit, in dollars, of selling $x$ items. What is the minimum value of $f(x)$?",
  choices: [
    { id: "A", text: "$-100$" },
    { id: "B", text: "$-84$" },
    { id: "C", text: "$-4$" },
    { id: "D", text: "$6$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Minimum of a Quadratic in Factored Form**\n\n**Choice A is correct.**\n\n**The Fast Way (20s):** Zeros at $x = 6$ and $x = -14$. Vertex $x$-coordinate $= \\frac{6 + (-14)}{2} = \\frac{-8}{2} = -4$. Minimum $= f(-4) = (-4-6)(-4+14) = (-10)(10) = -100$.\n\n**The Full Solution:**\nThe parabola opens upward (positive leading coefficient), so the vertex is a minimum.\nVertex $x = \\frac{6 + (-14)}{2} = -4$.\n$f(-4) = (-4 - 6)(-4 + 14) = (-10)(10) = -100$.\n\n**Why the wrong answers are tempting:**\n• B: Computes $6 \\times (-14) = -84$ (the $y$-intercept, not the minimum).\n• C: Gives the $x$-coordinate of the vertex, not the minimum $y$-value.\n• D: Gives one of the zeros.\n\n**Test Day Takeaway:** For a factored quadratic, the vertex $x$ is the average of the roots. Plug back in to find the min/max value.",
  skills: ["quadratic-equations", "vertex-form", "function-interpretation"]
},
{
  id: 9,
  type: "fill-in",
  difficulty: "medium",
  question: "The equation $\\frac{3}{x-2} + \\frac{1}{x-2} = \\frac{k}{x-2}$ is true for all values of $x$ where $x \neq 2$. What is the value of $k$?",
  correctAnswer: "4",
  explanation: "**The correct answer is $4$.**\n\n**The Full Solution:**\nSince all terms have the same denominator $(x - 2)$, and $x \neq 2$:\n$\\frac{3}{x-2} + \\frac{1}{x-2} = \\frac{3+1}{x-2} = \\frac{4}{x-2}$.\nFor this to equal $\\frac{k}{x-2}$ for all valid $x$: $k = 4$.\n\n**Verification:** $\\frac{3}{x-2} + \\frac{1}{x-2} = \\frac{4}{x-2}$. ✓\n\n**Common Mistakes:**\n• Writing $k = 3$ (only using the first fraction).\n• Attempting to cross-multiply unnecessarily.",
  skills: ["solving-equations", "rational-expressions"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  question: "The table shows the preferences of 400 customers at a coffee shop.\n\n| | Hot | Iced | Total |\n|---|---|---|---|\n| Coffee | 120 | 100 | 220 |\n| Tea | 60 | 120 | 180 |\n| Total | 180 | 220 | 400 |\n\nA customer is selected at random. Given that the customer chose an iced drink, what is the probability that the customer chose iced tea?",
  choices: [
    { id: "A", text: "$\\frac{120}{400}$" },
    { id: "B", text: "$\\frac{120}{180}$" },
    { id: "C", text: "$\\frac{120}{220}$" },
    { id: "D", text: "$\\frac{100}{220}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (15s):** \"Given iced\" → restrict to the Iced column: total = 220. Iced tea = 120. Probability $= \\frac{120}{220} = \\frac{6}{11}$.\n\n**The Full Solution:**\n$P(\\text{tea} | \\text{iced}) = \\frac{\\text{iced tea}}{\\text{total iced}} = \\frac{120}{220}$.\n\n**Why the wrong answers are tempting:**\n• A: Uses grand total 400 as denominator.\n• B: Uses the tea total (180) as denominator.\n• D: Gives probability of iced coffee given iced, not iced tea.\n\n**Test Day Takeaway:** \"Given\" = restrict to that row or column. The restricted total becomes your denominator.",
  skills: ["probability", "two-way-tables"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  question: "The quadratic equation $2x^2 - 11x - 21 = 0$ has two solutions. What is the sum of the two solutions?",
  choices: [
    { id: "A", text: "$-\\frac{11}{2}$" },
    { id: "B", text: "$\\frac{11}{2}$" },
    { id: "C", text: "$\\frac{21}{2}$" },
    { id: "D", text: "$-\\frac{21}{2}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Sum of Roots (Vieta's Formulas)**\n\n**Choice B is correct.**\n\n**The Fast Way (10s):** For $ax^2 + bx + c = 0$, sum of roots $= -\\frac{b}{a} = -\\frac{-11}{2} = \\frac{11}{2}$.\n\n**The Full Solution:**\nBy Vieta's formulas for $2x^2 - 11x - 21 = 0$:\nSum of roots $= \\frac{-(-11)}{2} = \\frac{11}{2}$.\nVerification by factoring: $2x^2 - 11x - 21 = (2x + 3)(x - 7) = 0$.\nRoots: $x = -\\frac{3}{2}$ and $x = 7$.\nSum: $-\\frac{3}{2} + 7 = -\\frac{3}{2} + \\frac{14}{2} = \\frac{11}{2}$. ✓\n\n**Why the wrong answers are tempting:**\n• A: Forgets to negate: gives $\\frac{b}{a} = \\frac{-11}{2}$.\n• C: Uses $-\\frac{c}{a}$ (the product of roots formula).\n• D: Uses $\\frac{c}{a}$.\n\n**Test Day Takeaway:** Sum of roots $= -b/a$; product of roots $= c/a$. No need to actually solve.",
  skills: ["quadratic-equations", "factoring"]
},
{
  id: 12,
  type: "fill-in",
  difficulty: "medium",
  question: "A rectangle has a perimeter of 58 inches. The length of the rectangle is 5 inches more than twice the width. What is the width, in inches?",
  correctAnswer: "8",
  explanation: "**The correct answer is $8$.**\n\n**The Full Solution:**\nLet $w$ = width and $l$ = length $= 2w + 5$.\nPerimeter: $2l + 2w = 58$, so $l + w = 29$.\nSubstitute: $(2w + 5) + w = 29$.\n$3w + 5 = 29$.\n$3w = 24$.\n$w = 8$.\n\n**Verification:** Width $= 8$, length $= 2(8) + 5 = 21$. Perimeter $= 2(21) + 2(8) = 42 + 16 = 58$. ✓\n\n**Common Mistakes:**\n• Answering 21 (giving the length instead of the width).\n• Setting up $2w + 5 = 58$ instead of using the perimeter formula.",
  skills: ["word-problems", "solving-equations"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  question: "A circle in the $xy$-plane has the equation $(x - 3)^2 + (y + 2)^2 = 25$. If the circle is shifted 4 units to the right and 5 units up, what is the equation of the new circle?",
  choices: [
    { id: "A", text: "$(x - 7)^2 + (y - 3)^2 = 25$" },
    { id: "B", text: "$(x + 1)^2 + (y - 3)^2 = 25$" },
    { id: "C", text: "$(x - 7)^2 + (y + 7)^2 = 25$" },
    { id: "D", text: "$(x - 7)^2 + (y - 3)^2 = 34$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Circle Equation Transformation**\n\n**Choice A is correct.**\n\n**The Fast Way (15s):** Original center: $(3, -2)$. Shift right 4: $3 + 4 = 7$. Shift up 5: $-2 + 5 = 3$. New center: $(7, 3)$. Radius unchanged. Equation: $(x-7)^2 + (y-3)^2 = 25$.\n\n**The Full Solution:**\nOriginal: center $(3, -2)$, radius $= 5$.\nShift right 4 units: $x$-coordinate increases by 4: $3 + 4 = 7$.\nShift up 5 units: $y$-coordinate increases by 5: $-2 + 5 = 3$.\nNew center: $(7, 3)$, radius still $5$.\nNew equation: $(x - 7)^2 + (y - 3)^2 = 25$.\n\n**Why the wrong answers are tempting:**\n• B: Shifts left instead of right ($3 - 4 = -1$).\n• C: Shifts down instead of up ($-2 - 5 = -7$).\n• D: Changes the radius when it should stay the same.\n\n**Test Day Takeaway:** Translations shift the center without changing the radius. Right → add to $x$; up → add to $y$.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  question: "The function $p(t) = -16t^2 + 64t + 80$ models the height, in feet, of a projectile $t$ seconds after launch. At what time does the projectile reach its maximum height?",
  choices: [
    { id: "A", text: "$1$ second" },
    { id: "B", text: "$2$ seconds" },
    { id: "C", text: "$4$ seconds" },
    { id: "D", text: "$5$ seconds" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Vertex of a Parabola — Time of Maximum**\n\n**Choice B is correct.**\n\n**The Fast Way (10s):** Time of maximum $= -\\frac{b}{2a} = -\\frac{64}{2(-16)} = -\\frac{64}{-32} = 2$ seconds.\n\n**The Full Solution:**\nFor $p(t) = -16t^2 + 64t + 80$: $a = -16$, $b = 64$.\nVertex at $t = -\\frac{b}{2a} = -\\frac{64}{-32} = 2$.\nMaximum height: $p(2) = -16(4) + 64(2) + 80 = -64 + 128 + 80 = 144$ feet.\n\n**Why the wrong answers are tempting:**\n• A: Divides 64 by 64 instead of 32.\n• C: Uses $-\\frac{b}{a} = 4$ (forgets the factor of 2).\n• D: Finds when the projectile hits the ground ($p(t) = 0$).\n\n**Test Day Takeaway:** For $ax^2 + bx + c$, the vertex occurs at $x = -\\frac{b}{2a}$.",
  skills: ["vertex-form", "quadratic-equations", "function-interpretation"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  question: "In right triangle $ABC$, angle $C$ is the right angle. If $\\sin(A) = \\frac{15}{17}$, what is the value of $\\cos(B)$?",
  choices: [
    { id: "A", text: "$\\frac{8}{17}$" },
    { id: "B", text: "$\\frac{15}{17}$" },
    { id: "C", text: "$\\frac{8}{15}$" },
    { id: "D", text: "$\\frac{17}{15}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Complementary Angle Trig Identity**\n\n**Choice B is correct.**\n\n**The Fast Way (10s):** In a right triangle, angles $A$ and $B$ are complementary ($A + B = 90°$). Therefore $\\cos(B) = \\sin(A) = \\frac{15}{17}$.\n\n**The Full Solution:**\nSince $A + B = 90°$ in a right triangle with right angle at $C$:\n$\\cos(B) = \\cos(90° - A) = \\sin(A) = \\frac{15}{17}$.\n\nAlternatively: $\\sin(A) = \\frac{\\text{opposite}}{\\text{hyp}} = \\frac{BC}{AB} = \\frac{15}{17}$.\nThird side: $AC = \\sqrt{17^2 - 15^2} = \\sqrt{289 - 225} = \\sqrt{64} = 8$.\nFor angle $B$: adjacent $= BC = 15$, hypotenuse $= AB = 17$.\n$\\cos(B) = \\frac{15}{17}$. ✓\n\n**Why the wrong answers are tempting:**\n• A: Gives $\\cos(A) = \\frac{8}{17}$, not $\\cos(B)$.\n• C: Gives $\\tan(B) = \\frac{8}{15}$.\n• D: Inverts the ratio.\n\n**Test Day Takeaway:** In a right triangle, $\\sin(A) = \\cos(B)$ because $A$ and $B$ are complementary.",
  skills: ["trigonometry", "triangles"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  question: "For what value of $c$ does the equation $4x^2 - 28x + c = 0$ have exactly one real solution?",
  choices: [
    { id: "A", text: "$7$" },
    { id: "B", text: "$28$" },
    { id: "C", text: "$49$" },
    { id: "D", text: "$196$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Discriminant — One Real Solution**\n\n**Choice C is correct.**\n\n**The Fast Way (20s):** One real solution means discriminant $= 0$:\n$(-28)^2 - 4(4)(c) = 0$\n$784 - 16c = 0$\n$c = \\frac{784}{16} = 49$.\n\n**The Full Solution:**\nFor $4x^2 - 28x + c = 0$: $a = 4$, $b = -28$.\nDiscriminant $= b^2 - 4ac = 784 - 16c$.\nExactly one solution: $784 - 16c = 0$.\n$16c = 784$.\n$c = 49$.\nVerification: $4x^2 - 28x + 49 = (2x - 7)^2 = 0 \\Rightarrow x = 3.5$ (one repeated root). ✓\n\n**Why the wrong answers are tempting:**\n• A: Divides 28 by 4 instead of $784$ by $16$.\n• B: Uses the coefficient $b$ directly.\n• D: Computes $28^2/4 = 196$ (divides by $a$ instead of $4a$).\n\n**Test Day Takeaway:** Exactly one real solution ↔ discriminant $= 0$. Solve $b^2 - 4ac = 0$ for the unknown parameter.",
  skills: ["discriminant", "quadratic-equations"]
},
{
  id: 17,
  type: "fill-in",
  difficulty: "hard",
  question: "The value of an investment account is modeled by $V(t) = 20{,}000(1.005)^{12t}$, where $t$ is the number of years since the account was opened. What is the annual percent increase in the value of the account, to the nearest tenth?",
  correctAnswer: "6.2",
  explanation: "**The correct answer is $6.2$.**\n\n**The Full Solution:**\nThe model $V(t) = 20{,}000(1.005)^{12t}$ compounds monthly at $0.5\\%$ per month.\nTo find the annual rate, evaluate the growth factor over one year ($t = 1$):\nAnnual factor $= (1.005)^{12}$.\n$(1.005)^{12} \\approx 1.06168$.\nAnnual percent increase $\\approx 6.168\\% \\approx 6.2\\%$.\n\n**Verification:** $(1.005)^{12}$: Using the approximation $(1 + r)^n \\approx 1 + nr + \\frac{n(n-1)}{2}r^2$ for small $r$:\n$\\approx 1 + 12(0.005) + 66(0.000025) = 1 + 0.06 + 0.00165 = 1.06165$.\nSo $\\approx 6.2\\%$. ✓\n\n**Common Mistakes:**\n• Answering 0.5 (the monthly rate, not annual).\n• Answering 6 (simply multiplying $0.5\\% \\times 12$, ignoring compounding).\n• Answering 60 (computing $0.5 \\times 12 \\times 10$).",
  skills: ["exponential-functions", "percents"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  question: "The equation $\\frac{a}{3}x + 5 = 2x + b$ has no solution. Which of the following must be true?",
  choices: [
    { id: "A", text: "$a = 6$ and $b = 5$" },
    { id: "B", text: "$a = 6$ and $b \neq 5$" },
    { id: "C", text: "$a \neq 6$ and $b = 5$" },
    { id: "D", text: "$a = 3$ and $b \neq 5$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: No Solution Parameter Problem**\n\n**Choice B is correct.**\n\n**The Fast Way (20s):** Rearrange: $\\frac{a}{3}x - 2x = b - 5$, so $\\left(\\frac{a}{3} - 2\\right)x = b - 5$.\nNo solution requires: the coefficient of $x$ equals 0 but the constant does not.\n$\\frac{a}{3} - 2 = 0 \\Rightarrow a = 6$.\n$b - 5 \neq 0 \\Rightarrow b \neq 5$.\n\n**The Full Solution:**\n$\\frac{a}{3}x + 5 = 2x + b$.\n$\\frac{a}{3}x - 2x = b - 5$.\n$\\left(\\frac{a - 6}{3}\\right)x = b - 5$.\nFor no solution: $\\frac{a-6}{3} = 0$ (so the left side is always 0 regardless of $x$) AND $b - 5 \neq 0$ (so the right side is nonzero).\nThis gives $a = 6$ and $b \neq 5$.\n\n**Why the wrong answers are tempting:**\n• A: If $a = 6$ and $b = 5$, the equation becomes $0 = 0$, which is infinitely many solutions.\n• C: If $a \neq 6$, the coefficient of $x$ is nonzero, so there IS one solution.\n• D: If $a = 3$, then $x - 2x = b - 5$, giving $x = 5 - b$ (one solution).\n\n**Test Day Takeaway:** No solution = same coefficient on $x$ (so it cancels) but different constants.",
  skills: ["solving-equations", "linear-functions"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  question: "A data set has 10 values listed in order:\n\n$3, 5, 5, 7, 8, 10, 10, 12, 14, 16$\n\nEach value in the data set is increased by 6. Which of the following is true about the new data set compared to the original?",
  choices: [
    { id: "A", text: "The mean increases by 6 and the standard deviation increases by 6." },
    { id: "B", text: "The mean increases by 6 and the standard deviation stays the same." },
    { id: "C", text: "The mean stays the same and the standard deviation increases by 6." },
    { id: "D", text: "The mean stays the same and the standard deviation stays the same." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Effect of Adding a Constant to Every Data Value**\n\n**Choice B is correct.**\n\n**The Fast Way (15s):** Adding a constant to every value shifts the entire distribution. The mean increases by that constant. The spread (standard deviation, range) does not change because the distances between values are unchanged.\n\n**The Full Solution:**\nOriginal mean: $\\frac{3+5+5+7+8+10+10+12+14+16}{10} = \\frac{90}{10} = 9$.\nNew mean: $9 + 6 = 15$ (each value increased by 6).\nThe standard deviation measures spread. Since every value shifts by the same amount, relative positions don't change, so the standard deviation is unchanged.\n\n**Why the wrong answers are tempting:**\n• A: Adding a constant does NOT change the spread (standard deviation).\n• C: The mean definitely changes (it increases by 6).\n• D: The mean clearly changes.\n\n**Test Day Takeaway:** Adding a constant to all values: mean shifts, standard deviation unchanged. Multiplying by a constant: both change.",
  skills: ["statistics"]
},
{
  id: 20,
  type: "fill-in",
  difficulty: "hard",
  question: "A rectangular prism has a length of 10, a width of 6, and a height of $h$. The total surface area of the prism is 376. What is the value of $h$?",
  correctAnswer: "8",
  explanation: "**The correct answer is $8$.**\n\n**The Full Solution:**\nSurface area of a rectangular prism: $2(lw + lh + wh)$.\n$2(10 \\times 6 + 10h + 6h) = 376$.\n$2(60 + 16h) = 376$.\n$60 + 16h = 188$.\n$16h = 128$.\n$h = 8$.\n\n**Verification:** $2(60 + 80 + 48) = 2(188) = 376$. ✓\n\n**Common Mistakes:**\n• Forgetting the factor of 2 in the surface area formula.\n• Setting up the equation as $60 + 16h = 376$ (missing the outer factor of 2).",
  skills: ["surface-area", "solving-equations"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  question: "A cube has a side length of $s$. A second cube has a side length that is $50\\%$ greater than $s$. The volume of the larger cube is what percent greater than the volume of the smaller cube?",
  choices: [
    { id: "A", text: "$50\\%$" },
    { id: "B", text: "$125\\%$" },
    { id: "C", text: "$150\\%$" },
    { id: "D", text: "$237.5\\%$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Percent Increase with Scaling**\n\n**Choice D is correct.**\n\n**The Full Solution:**\nSmaller cube side: $s$. Volume: $s^3$.\nLarger cube side: $1.5s$. Volume: $(1.5s)^3 = 3.375s^3$.\nPercent greater: $\\frac{3.375s^3 - s^3}{s^3} \\times 100 = \\frac{2.375s^3}{s^3} \\times 100 = 237.5\\%$.\n\n**Verification:** If $s = 2$: small volume $= 8$, large side $= 3$, large volume $= 27$.\nPercent increase: $\\frac{27 - 8}{8} \\times 100 = \\frac{19}{8} \\times 100 = 237.5\\%$. ✓\n\n**Why the wrong answers are tempting:**\n• A: Assumes the volume also increases by 50% (ignoring the cubic relationship).\n• B: Computes $(1.5)^3 - 1 = 2.375$ but converts to 125% instead of 237.5%.\n• C: Uses the linear scaling factor for volume.\n\n**Test Day Takeaway:** When a dimension is scaled by a factor, volume scales by the cube of that factor. A 50% increase in side → $(1.5)^3 = 3.375$ factor in volume.",
  skills: ["percents", "volume"]
},
{
  id: 22,
  type: "fill-in",
  difficulty: "hard",
  question: "Let $f(x) = 3x - 2$ and $g(x) = x^2 + 5$. If $g(f(a)) = 54$, what is a positive value of $a$?",
  correctAnswer: "3",
  explanation: "**The correct answer is $3$.**\n\n**The Full Solution:**\n$f(a) = 3a - 2$.\n$g(f(a)) = (3a - 2)^2 + 5 = 54$.\n$(3a - 2)^2 = 49$.\n$3a - 2 = \\pm 7$.\nPositive branch: $3a - 2 = 7 \\Rightarrow 3a = 9 \\Rightarrow a = 3$.\nNegative branch: $3a - 2 = -7 \\Rightarrow 3a = -5 \\Rightarrow a = -\\frac{5}{3}$ (not positive).\n\n**Verification:** $f(3) = 7$. $g(7) = 49 + 5 = 54$. ✓\n\n**Common Mistakes:**\n• Solving $(3a-2)^2 = 54$ instead of subtracting 5 first.\n• Confusing $f(g(a))$ with $g(f(a))$."
,
  skills: ["function-interpretation", "solving-equations"]
}
      ]
    }
  ]
};

export default practiceTest2;
