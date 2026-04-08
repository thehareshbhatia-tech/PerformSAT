// Practice Test 1 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Questions calibrated to College Board official practice test difficulty

export const practiceTest1 = {
  id: "practice-test-1",
  title: "Practice Test 1",
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
  question: "A store sells notebooks for $\\$4$ each. If a student buys $n$ notebooks and pays with a $\\$50$ bill, which expression represents the change the student receives, in dollars?",
  choices: [
    { id: "A", text: "$50 - 4n$" },
    { id: "B", text: "$4n - 50$" },
    { id: "C", text: "$50 + 4n$" },
    { id: "D", text: "$\\frac{50}{4n}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Word-to-Expression Translation**\n\n**Choice A is correct.**\n\n**The Fast Way (10 seconds):** Change = amount paid minus cost. Cost of $n$ notebooks at $\\$4$ each is $4n$. Change = $50 - 4n$.\n\n**The Full Solution:**\nThe total cost for $n$ notebooks is $4 \\times n = 4n$ dollars. The student pays $\\$50$, so the change received is $50 - 4n$ dollars.\n\n**Why the wrong answers are tempting:**\n• Choice B: Reverses the subtraction order, giving a negative value when $n < 12.5$.\n• Choice C: Adds instead of subtracts, as if the student receives more money.\n• Choice D: Divides instead of subtracts, confusing the operation.\n\n**Test Day Takeaway:** Change = Payment minus Cost. Translate word problems one phrase at a time.",
  skills: ["word-problems", "solving-equations"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  question: "In a survey of $240$ students, $15\\%$ said they prefer reading on a tablet. How many students prefer reading on a tablet?",
  choices: [
    { id: "A", text: "$24$" },
    { id: "B", text: "$30$" },
    { id: "C", text: "$36$" },
    { id: "D", text: "$40$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Percent of a Whole**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** $15\\%$ of $240 = 0.15 \\times 240 = 36$.\n\n**The Full Solution:**\nTo find $15\\%$ of $240$:\n$\\frac{15}{100} \\times 240 = \\frac{3600}{100} = 36$\n\n**Why the wrong answers are tempting:**\n• Choice A: This is $10\\%$ of $240$, omitting the extra $5\\%$.\n• Choice B: This would be $12.5\\%$ of $240$, a miscalculation.\n• Choice D: This is $\\frac{240}{6}$, confusing the percentage operation.\n\n**Test Day Takeaway:** Convert percent to decimal and multiply. Estimate first: $10\\%$ of $240 = 24$, so $15\\%$ must be more than $24$.",
  skills: ["percents"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  question: "If $\\frac{3x}{14} = \\frac{27}{7}$, what is the value of $x$?",
  choices: [
    { id: "A", text: "$6$" },
    { id: "B", text: "$9$" },
    { id: "C", text: "$18$" },
    { id: "D", text: "$21$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Proportion Solving**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** Cross-multiply: $3x \\times 7 = 27 \\times 14$, so $21x = 378$, giving $x = 18$.\n\n**The Full Solution:**\n$\\frac{3x}{14} = \\frac{27}{7}$\n\nCross-multiply: $7 \\cdot 3x = 14 \\cdot 27$\n$21x = 378$\n$x = \\frac{378}{21} = 18$\n\nVerification: $\\frac{3(18)}{14} = \\frac{54}{14} = \\frac{27}{7}$ \\checkmark\n\n**Why the wrong answers are tempting:**\n• Choice A: Divides $378$ by $63$ instead of $21$.\n• Choice B: Solves $3x = 27$ ignoring the denominators entirely.\n• Choice D: Divides $378$ by $18$ instead of $21$.\n\n**Test Day Takeaway:** Cross-multiply carefully and verify by plugging back in.",
  skills: ["solving-equations", "ratios"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  question: "The function $f(t) = 85 + 12t$ models the temperature, in degrees Fahrenheit, of a liquid $t$ minutes after heating begins. What does the number $12$ represent in this context?",
  choices: [
    { id: "A", text: "The temperature of the liquid before heating begins" },
    { id: "B", text: "The temperature of the liquid after $12$ minutes" },
    { id: "C", text: "The increase in temperature, in degrees Fahrenheit, each minute" },
    { id: "D", text: "The number of minutes needed to increase $1$ degree" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** In $f(t) = 85 + 12t$, the coefficient of $t$ is the rate of change: $12$ degrees per minute.\n\n**The Full Solution:**\nThe function is in slope-intercept form $f(t) = b + mt$ where $m = 12$ is the slope and $b = 85$ is the $y$-intercept. The slope represents the rate of change: the temperature increases by $12$ degrees Fahrenheit for each additional minute.\n\n**Why the wrong answers are tempting:**\n• Choice A: Confuses $12$ with the initial value $85$.\n• Choice B: Treats $12$ as an input rather than a rate.\n• Choice D: Inverts the relationship (that would be $\\frac{1}{12}$).\n\n**Test Day Takeaway:** In $y = b + mx$, the coefficient of the variable is always the rate of change per unit.",
  skills: ["function-interpretation", "linear-functions", "slope"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  question: "A recipe requires $\\frac{3}{4}$ cup of sugar for every $2$ cups of flour. If a baker uses $8$ cups of flour, how many cups of sugar are needed?",
  choices: [
    { id: "A", text: "$2$" },
    { id: "B", text: "$3$" },
    { id: "C", text: "$4$" },
    { id: "D", text: "$6$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Ratio and Proportion**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** $8$ cups of flour is $4$ times $2$ cups, so multiply sugar by $4$: $\\frac{3}{4} \\times 4 = 3$ cups.\n\n**The Full Solution:**\nSet up a proportion: $\\frac{3/4}{2} = \\frac{x}{8}$\n\nCross-multiply: $2x = \\frac{3}{4} \\times 8 = 6$\n$x = 3$\n\n**Why the wrong answers are tempting:**\n• Choice A: Computes $\\frac{3}{4} \\times \\frac{8}{3}$ incorrectly.\n• Choice C: Uses $\\frac{3}{4} \\times 8 \\div \\frac{3}{2}$ with an error.\n• Choice D: Computes $\\frac{3}{4} \\times 8 = 6$ but forgets to account for the $2$-cup base.\n\n**Test Day Takeaway:** Find the scale factor first (how many times bigger?), then multiply.",
  skills: ["ratios", "word-problems"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  question: "A line passes through the points $(3, -2)$ and $(7, 10)$. What is the $y$-intercept of this line?",
  choices: [
    { id: "A", text: "$-11$" },
    { id: "B", text: "$-9$" },
    { id: "C", text: "$-8$" },
    { id: "D", text: "$-5$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** Slope $= \\frac{10 - (-2)}{7 - 3} = \\frac{12}{4} = 3$. Using point $(3, -2)$: $-2 = 3(3) + b$, so $b = -2 - 9 = -11$.\n\n**The Full Solution:**\nStep 1: Find the slope.\n$m = \\frac{10 - (-2)}{7 - 3} = \\frac{12}{4} = 3$\n\nStep 2: Use slope-intercept form with $(3, -2)$.\n$y = mx + b$\n$-2 = 3(3) + b$\n$-2 = 9 + b$\n$b = -11$\n\nThe equation is $y = 3x - 11$, so the $y$-intercept is $-11$.\n\nVerification: At $(7, 10)$: $3(7) - 11 = 21 - 11 = 10$ \\checkmark\n\n**Why the wrong answers are tempting:**\n• Choice B: Computes $-2 - 3(3)$ but writes $-9$ instead of $-11$, dropping the $-2$.\n• Choice C: Uses slope $= 2$ instead of $3$.\n• Choice D: Computes $-2 - 3 = -5$, using the $x$-coordinate directly.\n\n**Test Day Takeaway:** Always verify the $y$-intercept by checking that both original points satisfy your equation.",
  skills: ["linear-functions", "slope", "coordinate-geometry"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  question: "\n\n| | Prefer Coffee | Prefer Tea | Total |\n|---|---|---|---|\n| Age 18-30 | $42$ | $58$ | $100$ |\n| Age 31-50 | $65$ | $35$ | $100$ |\n| Total | $107$ | $93$ | $200$ |\n\nBased on the table above, what percentage of people who prefer tea are in the 18-30 age group? (Round to the nearest whole number.)",
  choices: [
    { id: "A", text: "$29\\%$" },
    { id: "B", text: "$58\\%$" },
    { id: "C", text: "$62\\%$" },
    { id: "D", text: "$38\\%$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Two-Way Table Conditional Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** Tea preferrers who are 18-30: $58$. Total tea preferrers: $93$. Percentage: $\\frac{58}{93} \\approx 0.624 = 62\\%$.\n\n**The Full Solution:**\nThe question asks: of those who prefer tea, what percentage are aged 18-30? This is a conditional probability.\n\n$\\frac{\\text{Age 18-30 and Tea}}{\\text{Total Tea}} = \\frac{58}{93} \\approx 0.6237 \\approx 62\\%$\n\n**Why the wrong answers are tempting:**\n• Choice A: Computes $\\frac{58}{200} = 29\\%$, dividing by the grand total instead of the tea column total.\n• Choice B: Reads $58$ directly as a percentage from the table.\n• Choice D: Computes $\\frac{35}{93} \\approx 38\\%$, using the wrong row (31-50 instead of 18-30).\n\n**Test Day Takeaway:** In conditional probability, the denominator is the total of the given condition, not the grand total.",
  skills: ["two-way-tables", "probability", "percents"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  question: "The system of equations below has the solution $(x, y)$.\n\n$5x - 3y = 19$\n$2x + 3y = 16$\n\nWhat is the value of $y$?",
  choices: [
    { id: "A", text: "$1$" },
    { id: "B", text: "$2$" },
    { id: "C", text: "$3$" },
    { id: "D", text: "$5$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Systems of Linear Equations**\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** Add the two equations: $7x = 35$, so $x = 5$. Substitute into the second equation: $2(5) + 3y = 16$, so $3y = 6$, giving $y = 2$.\n\n**The Full Solution:**\nAdding the equations eliminates $y$:\n$(5x - 3y) + (2x + 3y) = 19 + 16$\n$7x = 35$\n$x = 5$\n\nSubstitute $x = 5$ into $2x + 3y = 16$:\n$10 + 3y = 16$\n$3y = 6$\n$y = 2$\n\nVerification: $5(5) - 3(2) = 25 - 6 = 19$ \\checkmark and $2(5) + 3(2) = 10 + 6 = 16$ \\checkmark\n\n**Why the wrong answers are tempting:**\n• Choice A: Arithmetic error in the substitution step.\n• Choice C: Confuses with a coefficient in the system.\n• Choice D: Gives the value of $x$, not $y$.\n\n**Test Day Takeaway:** When coefficients of one variable are opposites, add the equations to eliminate it instantly.",
  skills: ["systems-of-equations", "solving-equations"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  question: "A scatterplot shows data points that closely follow the line of best fit $y = 1.8x + 12.5$. According to this model, what is the predicted value of $y$ when $x = 15$?",
  choices: [
    { id: "A", text: "$27.0$" },
    { id: "B", text: "$34.5$" },
    { id: "C", text: "$39.5$" },
    { id: "D", text: "$42.0$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** $y = 1.8(15) + 12.5 = 27.0 + 12.5 = 39.5$.\n\n**The Full Solution:**\nSubstitute $x = 15$ into the equation:\n$y = 1.8(15) + 12.5$\n$y = 27.0 + 12.5$\n$y = 39.5$\n\n**Why the wrong answers are tempting:**\n• Choice A: Computes $1.8 \\times 15 = 27$ but forgets to add $12.5$.\n• Choice B: Computes $1.8 \\times 15 = 27$ and adds only part of the intercept.\n• Choice D: Rounds $1.8$ to $2$ and computes $2(15) + 12 = 42$.\n\n**Test Day Takeaway:** Plug in carefully and don't forget the constant term. Double-check decimal multiplication.",
  skills: ["scatterplots", "linear-functions"]
},
{
  id: 10,
  type: "fill-in",
  difficulty: "medium",
  question: "If $4(2w - 3) + 5 = 3w + 12$, what is the value of $w$?",
  correctAnswer: "19/5",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $\\frac{19}{5}$.**\n\n**The Fast Way (20 seconds):** Expand: $8w - 12 + 5 = 3w + 12$, so $8w - 7 = 3w + 12$, then $5w = 19$, giving $w = \\frac{19}{5}$.\n\n**The Full Solution:**\n$4(2w - 3) + 5 = 3w + 12$\n$8w - 12 + 5 = 3w + 12$\n$8w - 7 = 3w + 12$\n$8w - 3w = 12 + 7$\n$5w = 19$\n$w = \\frac{19}{5}$\n\n**Common Mistakes to Avoid:**\n• Forgetting to distribute the $4$ to both terms inside the parentheses.\n• Sign errors when combining $-12 + 5 = -7$.\n\n**Verification:** Left: $4(2 \\cdot \\frac{19}{5} - 3) + 5 = 4(\\frac{38}{5} - \\frac{15}{5}) + 5 = 4 \\cdot \\frac{23}{5} + 5 = \\frac{92}{5} + \\frac{25}{5} = \\frac{117}{5}$.\nRight: $3 \\cdot \\frac{19}{5} + 12 = \\frac{57}{5} + \\frac{60}{5} = \\frac{117}{5}$ \\checkmark\n\n**Test Day Takeaway:** Distribute first, combine like terms, then isolate the variable.",
  skills: ["solving-equations"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  question: "A population of bacteria doubles every $3$ hours. If the initial population is $500$, which function $P(t)$ models the population after $t$ hours?",
  choices: [
    { id: "A", text: "$P(t) = 500(2)^{3t}$" },
    { id: "B", text: "$P(t) = 500(2)^{t/3}$" },
    { id: "C", text: "$P(t) = 500(3)^{t/2}$" },
    { id: "D", text: "$P(t) = 1000(2)^{t}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Doubles every $3$ hours means the exponent must equal $1$ when $t = 3$: $\\frac{t}{3}$ gives $\\frac{3}{3} = 1$. Initial value is $500$, base is $2$.\n\n**The Full Solution:**\nThe general exponential growth model is $P(t) = P_0 \\cdot b^{t/d}$ where $P_0 = 500$ is the initial population, $b = 2$ (doubling), and $d = 3$ (doubling period in hours).\n\n$P(t) = 500(2)^{t/3}$\n\nCheck: At $t = 3$: $P(3) = 500(2)^1 = 1000$ (doubled) \\checkmark\nAt $t = 6$: $P(6) = 500(2)^2 = 2000$ (doubled again) \\checkmark\n\n**Why the wrong answers are tempting:**\n• Choice A: Uses $3t$ instead of $t/3$, which would triple the exponent each hour.\n• Choice C: Swaps the base and period.\n• Choice D: Starts at $1000$ and uses the wrong exponent.\n\n**Test Day Takeaway:** For 'doubles every $d$ hours,' the exponent is $t/d$, not $dt$.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 12,
  type: "fill-in",
  difficulty: "medium",
  question: "Line $p$ has a slope of $-\\frac{2}{5}$. Line $q$ is perpendicular to line $p$ and passes through the point $(4, -1)$. What is the $y$-intercept of line $q$?",
  correctAnswer: "-11",
  explanation: "**SAT Pattern: Perpendicular Lines**\n\n**The correct answer is $-11$.**\n\n**The Fast Way (20 seconds):** Perpendicular slope is $\\frac{5}{2}$. Using $(4, -1)$: $-1 = \\frac{5}{2}(4) + b$, so $-1 = 10 + b$, giving $b = -11$.\n\n**The Full Solution:**\nPerpendicular lines have slopes that are negative reciprocals.\nSlope of $p$: $-\\frac{2}{5}$\nSlope of $q$: $\\frac{5}{2}$\n\nUsing slope-intercept form with $(4, -1)$:\n$y = \\frac{5}{2}x + b$\n$-1 = \\frac{5}{2}(4) + b$\n$-1 = 10 + b$\n$b = -11$\n\n**Common Mistakes to Avoid:**\n• Using the same slope (parallel) instead of the negative reciprocal.\n• Getting $\\frac{2}{5}$ instead of $\\frac{5}{2}$ (forgetting to flip).\n\n**Verification:** At $(4, -1)$: $\\frac{5}{2}(4) - 11 = 10 - 11 = -1$ \\checkmark\n\n**Test Day Takeaway:** Perpendicular slopes are negative reciprocals: flip the fraction and change the sign.",
  skills: ["slope", "linear-functions", "coordinate-geometry"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  question: "In a right triangle, one angle measures $90°$ and another measures $35°$. The side opposite the $35°$ angle has length $9$. Which expression gives the length of the hypotenuse?",
  choices: [
    { id: "A", text: "$\\frac{9}{\\sin 35°}$" },
    { id: "B", text: "$\\frac{9}{\\cos 35°}$" },
    { id: "C", text: "$9 \\sin 35°$" },
    { id: "D", text: "$9 \\cos 35°$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Right Triangle Trigonometry**\n\n**Choice A is correct.**\n\n**The Fast Way (10 seconds):** $\\sin 35° = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{9}{h}$, so $h = \\frac{9}{\\sin 35°}$.\n\n**The Full Solution:**\nIn a right triangle, $\\sin(\\theta) = \\frac{\\text{opposite}}{\\text{hypotenuse}}$.\n\nFor the $35°$ angle:\n$\\sin 35° = \\frac{9}{\\text{hypotenuse}}$\n$\\text{hypotenuse} = \\frac{9}{\\sin 35°}$\n\n**Why the wrong answers are tempting:**\n• Choice B: Uses cosine, which relates the adjacent side to the hypotenuse, not the opposite.\n• Choice C: Multiplies instead of divides; this would give a value less than $9$.\n• Choice D: Uses cosine and multiplies, applying the wrong ratio entirely.\n\n**Test Day Takeaway:** SOH-CAH-TOA: Sine = Opposite/Hypotenuse. To find the hypotenuse from the opposite side, divide by sine.",
  skills: ["triangles", "angles"]
},
{
  id: 14,
  type: "fill-in",
  difficulty: "medium",
  question: "If $f(x) = 2x^2 - 5x + 1$, what is the value of $f(-3)$?",
  correctAnswer: "34",
  explanation: "**SAT Pattern: Function Evaluation**\n\n**The correct answer is $34$.**\n\n**The Fast Way (15 seconds):** $f(-3) = 2(9) - 5(-3) + 1 = 18 + 15 + 1 = 34$.\n\n**The Full Solution:**\n$f(-3) = 2(-3)^2 - 5(-3) + 1$\n$= 2(9) - (-15) + 1$\n$= 18 + 15 + 1$\n$= 34$\n\n**Common Mistakes to Avoid:**\n• Computing $(-3)^2 = -9$ instead of $9$ (squaring always makes it positive).\n• Computing $-5(-3) = -15$ instead of $+15$ (negative times negative is positive).\n\n**Verification:** $2(9) = 18$, $-5(-3) = 15$, and $18 + 15 + 1 = 34$ \\checkmark\n\n**Test Day Takeaway:** Use parentheses when substituting negative numbers. A negative number squared is always positive.",
  skills: ["function-interpretation", "quadratic-equations"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  question: "Which expression is equivalent to $\\frac{4x^2 - 25}{2x^2 + x - 15}$ for all values of $x$ where the expression is defined?",
  choices: [
    { id: "A", text: "$\\frac{2}{x}$" },
    { id: "B", text: "$\\frac{2x + 5}{x + 3}$" },
    { id: "C", text: "$\\frac{2x - 5}{x + 3}$" },
    { id: "D", text: "$\\frac{2x + 5}{2x - 5}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**Choice B is correct.**\n\n**The Fast Way (30 seconds):** Factor numerator as difference of squares: $(2x-5)(2x+5)$. Factor denominator: $(2x-5)(x+3)$. Cancel $(2x-5)$ to get $\\frac{2x+5}{x+3}$.\n\n**The Full Solution:**\nNumerator: $4x^2 - 25 = (2x)^2 - 5^2 = (2x - 5)(2x + 5)$\n\nDenominator: $2x^2 + x - 15$. Find two numbers that multiply to $2 \\times (-15) = -30$ and add to $1$: those are $6$ and $-5$.\n$2x^2 + 6x - 5x - 15 = 2x(x + 3) - 5(x + 3) = (2x - 5)(x + 3)$\n\nSimplify: $\\frac{(2x-5)(2x+5)}{(2x-5)(x+3)} = \\frac{2x+5}{x+3}$\n\nVerification with $x = 1$: Original $= \\frac{4-25}{2+1-15} = \\frac{-21}{-12} = \\frac{7}{4}$. Choice B: $\\frac{2+5}{1+3} = \\frac{7}{4}$ \\checkmark\n\n**Why the wrong answers are tempting:**\n• Choice A: A guess that doesn't factor correctly.\n• Choice C: Uses $(2x-5)$ in numerator instead of $(2x+5)$, canceling the wrong factor.\n• Choice D: Keeps both numerator factors but drops the $(x+3)$.\n\n**Test Day Takeaway:** Factor both numerator and denominator completely before canceling common factors.",
  skills: ["factoring", "polynomial-operations"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  question: "The equation of a circle in the $xy$-plane is $x^2 + y^2 - 6x + 10y + 18 = 0$. What is the radius of the circle?",
  choices: [
    { id: "A", text: "$4$" },
    { id: "B", text: "$\\sqrt{7}$" },
    { id: "C", text: "$\\sqrt{18}$" },
    { id: "D", text: "$16$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Circle Equation -- Complete the Square**\n\n**Choice A is correct.**\n\n**The Fast Way (30 seconds):** Complete the square: $(x-3)^2 + (y+5)^2 = 9 + 25 - 18 = 16$. Radius $= \\sqrt{16} = 4$.\n\n**The Full Solution:**\nGroup $x$ and $y$ terms:\n$(x^2 - 6x) + (y^2 + 10y) = -18$\n\nComplete the square for $x$: half of $-6$ is $-3$, square is $9$.\n$(x^2 - 6x + 9) = (x - 3)^2$\n\nComplete the square for $y$: half of $10$ is $5$, square is $25$.\n$(y^2 + 10y + 25) = (y + 5)^2$\n\nAdd $9$ and $25$ to both sides:\n$(x - 3)^2 + (y + 5)^2 = -18 + 9 + 25 = 16$\n\nRadius $= \\sqrt{16} = 4$.\n\n**Why the wrong answers are tempting:**\n• Choice B: Completes only one square or miscalculates the right side.\n• Choice C: Uses $\\sqrt{18}$, confusing the constant $18$ with $r^2$.\n• Choice D: Reports $r^2 = 16$ as the radius instead of $r = \\sqrt{16} = 4$.\n\n**Test Day Takeaway:** Complete the square for both variables. The radius is $\\sqrt{r^2}$, not $r^2$ itself.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 17,
  type: "fill-in",
  difficulty: "hard",
  question: "If $\\sqrt[3]{x^5} \\cdot \\sqrt{x^3} = x^k$ for $x > 0$, what is the value of $k$? Express your answer as a fraction.",
  correctAnswer: "19/6",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $\\frac{19}{6}$.**\n\n**The Fast Way (20 seconds):** Convert: $x^{5/3} \\cdot x^{3/2} = x^{5/3 + 3/2} = x^{10/6 + 9/6} = x^{19/6}$.\n\n**The Full Solution:**\n$\\sqrt[3]{x^5} = x^{5/3}$\n$\\sqrt{x^3} = x^{3/2}$\n\nWhen multiplying powers with the same base, add the exponents:\n$x^{5/3} \\cdot x^{3/2} = x^{5/3 + 3/2}$\n\nFind a common denominator ($6$):\n$\\frac{5}{3} = \\frac{10}{6}$ and $\\frac{3}{2} = \\frac{9}{6}$\n$\\frac{10}{6} + \\frac{9}{6} = \\frac{19}{6}$\n\nSo $k = \\frac{19}{6}$.\n\n**Common Mistakes to Avoid:**\n• Writing $\\sqrt[3]{x^5} = x^{3/5}$ instead of $x^{5/3}$. The power goes in the numerator, the root in the denominator.\n• Multiplying exponents instead of adding them when the bases are being multiplied.\n\n**Verification:** $\\frac{5}{3} + \\frac{3}{2} = 1.667 + 1.5 = 3.167 = \\frac{19}{6}$ \\checkmark\n\n**Test Day Takeaway:** Convert radicals to fractional exponents, then add exponents when multiplying same bases.",
  skills: ["exponent-rules", "radical-expressions"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  question: "For what value of $c$ does the system of equations below have exactly one solution?\n\n$y = 2x^2 + 11x + 2$\n$y = 4x + c$",
  choices: [
    { id: "A", text: "$c = -\\frac{41}{8}$" },
    { id: "B", text: "$c = -\\frac{33}{8}$" },
    { id: "C", text: "$c = -3$" },
    { id: "D", text: "$c = \\frac{33}{8}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Quadratic-Linear System with Tangency**\n\n**Choice B is correct.**\n\n**The Fast Way (40 seconds):** Set equal: $2x^2 + 11x + 2 = 4x + c$, so $2x^2 + 7x + (2 - c) = 0$. For exactly one solution, set discriminant $= 0$: $49 - 8(2 - c) = 0$, giving $33 + 8c = 0$, so $c = -\\frac{33}{8}$.\n\n**The Full Solution:**\nSet the equations equal:\n$2x^2 + 11x + 2 = 4x + c$\n$2x^2 + 7x + (2 - c) = 0$\n\nFor exactly one solution, the discriminant must equal zero:\n$b^2 - 4ac = 0$\n$(7)^2 - 4(2)(2 - c) = 0$\n$49 - 8(2 - c) = 0$\n$49 - 16 + 8c = 0$\n$33 + 8c = 0$\n$c = -\\frac{33}{8}$\n\nVerification: With $c = -\\frac{33}{8}$, the constant term is $2 - (-\\frac{33}{8}) = \\frac{16}{8} + \\frac{33}{8} = \\frac{49}{8}$.\nDiscriminant: $49 - 4(2)(\\frac{49}{8}) = 49 - \\frac{392}{8} = 49 - 49 = 0$ \\checkmark\n\n**Why the wrong answers are tempting:**\n• Choice A: Miscalculates $-8(2-c)$ with a sign error in distributing.\n• Choice C: Sets $2 - c = 0$ instead of using the discriminant.\n• Choice D: Gets the right magnitude but wrong sign.\n\n**Test Day Takeaway:** A quadratic-linear system has exactly one solution when the discriminant of the combined equation equals zero.",
  skills: ["quadratic-equations", "systems-of-equations", "discriminant"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  question: "A quadratic function has vertex $(4, -7)$ and passes through the point $(10, 5)$. What is the value of $a + b + c$ if the function is written as $f(x) = ax^2 + bx + c$?",
  choices: [
    { id: "A", text: "$-10$" },
    { id: "B", text: "$-4$" },
    { id: "C", text: "$2$" },
    { id: "D", text: "$5$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice B is correct.**\n\n**The Fast Way (30 seconds):** Note that $a + b + c = f(1)$. Vertex form: $f(x) = a(x-4)^2 - 7$. Use $(10, 5)$: $5 = a(10-4)^2 - 7 = 36a - 7$, so $36a = 12$ and $a = \\frac{1}{3}$. Then $f(1) = \\frac{1}{3}(1-4)^2 - 7 = \\frac{1}{3}(9) - 7 = 3 - 7 = -4$.\n\n**The Full Solution:**\nVertex form: $f(x) = a(x - 4)^2 - 7$\n\nUsing point $(10, 5)$:\n$5 = a(10 - 4)^2 - 7$\n$5 = 36a - 7$\n$12 = 36a$\n$a = \\frac{1}{3}$\n\nSince $a + b + c = f(1)$:\n$f(1) = \\frac{1}{3}(1 - 4)^2 - 7 = \\frac{1}{3}(9) - 7 = 3 - 7 = -4$\n\nVerification by expanding: $f(x) = \\frac{1}{3}(x^2 - 8x + 16) - 7 = \\frac{1}{3}x^2 - \\frac{8}{3}x + \\frac{16}{3} - 7 = \\frac{1}{3}x^2 - \\frac{8}{3}x - \\frac{5}{3}$\n$a + b + c = \\frac{1}{3} - \\frac{8}{3} - \\frac{5}{3} = \\frac{1 - 8 - 5}{3} = \\frac{-12}{3} = -4$ \\checkmark\n\n**Why the wrong answers are tempting:**\n• Choice A: Evaluates $f(0) = c = -\\frac{5}{3}$ and rounds or confuses with another value.\n• Choice C: Miscalculates $a$ as $\\frac{1}{2}$.\n• Choice D: Uses $f(2)$ instead of $f(1)$.\n\n**Test Day Takeaway:** $f(1) = a + b + c$ is a powerful shortcut. Start from vertex form, find $a$, then evaluate at $x = 1$.",
  skills: ["vertex-form", "quadratic-equations", "coordinate-geometry"]
},
{
  id: 20,
  type: "fill-in",
  difficulty: "hard",
  question: "If $(3x + k)(x + 2) = 3x^2 + 17x + m$ for all values of $x$, what is the value of $m$?",
  correctAnswer: "22",
  explanation: "**SAT Pattern: Matching Coefficients**\n\n**The correct answer is $22$.**\n\n**The Fast Way (20 seconds):** Expand: $3x^2 + 6x + kx + 2k = 3x^2 + (6+k)x + 2k$. Match the $x$-coefficient: $6 + k = 17$, so $k = 11$. Then $m = 2k = 22$.\n\n**The Full Solution:**\nExpand the left side:\n$(3x + k)(x + 2) = 3x^2 + 6x + kx + 2k = 3x^2 + (6 + k)x + 2k$\n\nMatch coefficients with $3x^2 + 17x + m$:\n- $x^2$ coefficient: $3 = 3$ \\checkmark\n- $x$ coefficient: $6 + k = 17 \\Rightarrow k = 11$\n- constant term: $2k = m \\Rightarrow m = 2(11) = 22$\n\n**Common Mistakes to Avoid:**\n• Finding $k = 11$ but reporting $k$ instead of $m$.\n• Expanding incorrectly and forgetting the $6x$ cross term.\n\n**Verification:** $(3x + 11)(x + 2) = 3x^2 + 6x + 11x + 22 = 3x^2 + 17x + 22$ \\checkmark\n\n**Test Day Takeaway:** When two polynomials are equal for all $x$, their corresponding coefficients must match.",
  skills: ["factoring", "polynomial-operations"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  question: "In the $xy$-plane, the parabola $y = -2x^2 + bx + c$ has its vertex at $(-3, 8)$. What is the value of $c$?",
  choices: [
    { id: "A", text: "$-28$" },
    { id: "B", text: "$-10$" },
    { id: "C", text: "$-8$" },
    { id: "D", text: "$10$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Parabola from Vertex and Leading Coefficient**\n\n**Choice B is correct.**\n\n**The Fast Way (30 seconds):** Vertex form: $y = -2(x + 3)^2 + 8$. Expand: $-2(x^2 + 6x + 9) + 8 = -2x^2 - 12x - 18 + 8 = -2x^2 - 12x - 10$. So $c = -10$.\n\n**The Full Solution:**\nSince the vertex is at $(-3, 8)$ and $a = -2$, write vertex form:\n$y = -2(x - (-3))^2 + 8 = -2(x + 3)^2 + 8$\n\nExpand:\n$y = -2(x^2 + 6x + 9) + 8$\n$y = -2x^2 - 12x - 18 + 8$\n$y = -2x^2 - 12x - 10$\n\nSo $b = -12$ and $c = -10$.\n\nVerification: Vertex $x$-coordinate $= -\\frac{b}{2a} = -\\frac{-12}{2(-2)} = \\frac{12}{-4} = -3$ \\checkmark\nVertex $y$-coordinate: $f(-3) = -2(9) - 12(-3) - 10 = -18 + 36 - 10 = 8$ \\checkmark\n\n**Why the wrong answers are tempting:**\n• Choice A: Computes $-18 - 10 = -28$, adding the two negative terms.\n• Choice C: Confuses the vertex $y$-value with $c$.\n• Choice D: Gets $+10$ by making a sign error with $-18 + 8$.\n\n**Test Day Takeaway:** Write vertex form first, then expand to standard form to identify individual coefficients.",
  skills: ["vertex-form", "quadratic-equations", "coordinate-geometry"]
},
{
  id: 22,
  type: "fill-in",
  difficulty: "hard",
  question: "If $\\frac{8^{x+1} \\cdot 4^{2x}}{2^{5x-2}} = 2^{n}$ and $x = 2$, what is the value of $n$?",
  correctAnswer: "9",
  explanation: "**SAT Pattern: Exponent Simplification with Common Base**\n\n**The correct answer is $9$.**\n\n**The Fast Way (30 seconds):** Convert to base $2$ with $x = 2$: $8^3 = 2^9$, $4^4 = 2^8$, $2^8$ in denominator. So $\\frac{2^9 \\cdot 2^8}{2^8} = 2^9$. Thus $n = 9$.\n\n**The Full Solution:**\nSubstitute $x = 2$:\n$\\frac{8^{2+1} \\cdot 4^{2(2)}}{2^{5(2)-2}} = \\frac{8^3 \\cdot 4^4}{2^8}$\n\nConvert to base $2$:\n$8^3 = (2^3)^3 = 2^9$\n$4^4 = (2^2)^4 = 2^8$\n$2^8$ stays as is.\n\nCombine: $\\frac{2^9 \\cdot 2^8}{2^8} = \\frac{2^{17}}{2^8} = 2^{17-8} = 2^9$\n\nSo $n = 9$.\n\n**Common Mistakes to Avoid:**\n• Writing $8^3 = 2^{3 \\cdot 3}$ correctly but then $4^4 = 2^{4 \\cdot 4}$ instead of $2^{2 \\cdot 4}$.\n• Subtracting exponents incorrectly when dividing.\n\n**Verification:** $\\frac{512 \\cdot 256}{256} = 512 = 2^9$ \\checkmark\n\n**Test Day Takeaway:** Convert all bases to the same prime base, then use exponent rules: multiply = add exponents, divide = subtract exponents.",
  skills: ["exponent-rules"]
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
          question: "A road trip covers $210$ miles in $3$ hours. What is the average speed in miles per hour?",
          choices: [
            { id: "A", text: "$60$" },
            { id: "B", text: "$65$" },
            { id: "C", text: "$70$" },
            { id: "D", text: "$75$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Average Speed**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** $210 \\div 3 = 70$ mph.\n\n**The Full Solution:**\nAverage speed $= \\frac{\\text{distance}}{\\text{time}} = \\frac{210}{3} = 70$ mph.\n\n**Why the wrong answers are tempting:**\n• Choice A ($60$): A common driving speed, but not what the math gives.\n• Choice B ($65$): Halfway between $60$ and $70$, a guess.\n• Choice D ($75$): From a division error.\n\n**Test Day Takeaway:** Speed = distance divided by time.",
          skills: ["word-problems", "unit-conversion"]
        },
        {
          id: 2,
          type: "fill-in",
          difficulty: "easy",
          question: "If $4x = 36$, what is the value of $x$?",
          correctAnswer: "9",
          explanation: "**SAT Pattern: One-Step Equation**\n\n**The correct answer is 9.**\n\n**The Fast Way (5 seconds):** $x = 36 \\div 4 = 9$.\n\n**The Full Solution:**\n$4x = 36$\n$x = \\frac{36}{4} = 9$\n\n**Common Mistakes to Avoid:**\n• Subtracting $4$ instead of dividing: $36 - 4 = 32$\n• Multiplying instead: $36 \\times 4 = 144$\n\n**Verification:** $4(9) = 36$ ✓\n\n**Test Day Takeaway:** To undo multiplication, divide both sides.",
          skills: ["solving-equations"]
        },
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A hiker walks $3$ miles per hour. The function $d(t) = 3t$ gives the distance walked after $t$ hours. What is the best interpretation of the number $3$ in this function?",
          choices: [
            { id: "A", text: "The total distance in miles" },
            { id: "B", text: "The number of hours hiked" },
            { id: "C", text: "The speed in miles per hour" },
            { id: "D", text: "The number of rest stops" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Interpreting Linear Function Coefficients**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** In $d(t) = 3t$, the coefficient $3$ is the rate of change — miles per hour.\n\n**The Full Solution:**\nIn a linear function $f(t) = mt + b$, the coefficient $m$ represents the rate of change. Here $m = 3$ means the hiker covers $3$ miles each hour.\n\n**Why the wrong answers are tempting:**\n• Choice A: Total distance depends on time, not a fixed number.\n• Choice B: The number of hours is $t$, the input variable.\n• Choice D: Nothing in the function relates to rest stops.\n\n**Test Day Takeaway:** In a linear function, the slope is always the rate of change per unit of the input.",
          skills: ["function-interpretation", "linear-functions"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "How many minutes are equivalent to $3$ hours and $15$ minutes?",
          choices: [
            { id: "A", text: "$180$" },
            { id: "B", text: "$195$" },
            { id: "C", text: "$200$" },
            { id: "D", text: "$315$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Unit Conversion**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $3 \\times 60 + 15 = 180 + 15 = 195$.\n\n**The Full Solution:**\n$3$ hours $= 3 \\times 60 = 180$ minutes\n$180 + 15 = 195$ minutes\n\n**Why the wrong answers are tempting:**\n• Choice A ($180$): Forgot to add the extra $15$ minutes.\n• Choice C ($200$): Rounded $195$ up.\n• Choice D ($315$): Wrote $3$ and $15$ together instead of converting.\n\n**Test Day Takeaway:** Convert hours to minutes by multiplying by $60$, then add remaining minutes.",
          skills: ["unit-conversion"]
        },
        {
          id: 5,
          type: "multiple-choice",
          difficulty: "easy",
          question: "The equation $5x + 3 = 23$ is true for what value of $x$?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$5$" },
            { id: "D", text: "$6$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $5x = 20$, so $x = 4$.\n\n**The Full Solution:**\n$5x + 3 = 23$\n$5x = 20$\n$x = 4$\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): From $23 \\div 5 \\approx 4.6$, rounding down, or guessing.\n• Choice C ($5$): From dividing $25 \\div 5$, not subtracting $3$ first.\n• Choice D ($6$): From $23 - 3 = 20$, then incorrectly dividing $20 \\div 3$.\n\n**Test Day Takeaway:** Subtract first, then divide.",
          skills: ["solving-equations", "linear-equations"]
        },
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The system of equations below has solution $(x, y)$. What is the value of $x$?",
          questionFormula: {
            equation: "$$\\begin{cases} 2x + y = 11 \\\\ x - y = 1 \\end{cases}$$"
          },
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$5$" },
            { id: "D", text: "$7$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Solving a System by Elimination**\n\n**Choice B is correct.**\n\n**The Fast Way (30 seconds):** Add the equations: $2x + y + x - y = 11 + 1$ → $3x = 12$ → $x = 4$.\n\n**The Full Solution:**\n$2x + y = 11$\n$x - y = 1$\nAdding: $3x = 12$, so $x = 4$.\nCheck: $y = 11 - 2(4) = 3$. Then $4 - 3 = 1$ ✓\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): This is the $y$-value, not $x$.\n• Choice C ($5$): From adding $11 + 1 = 12$ and dividing by $2$ instead of $3$.\n• Choice D ($7$): From $11 - 1 = 10$... no clear path, likely a guess.\n\n**Test Day Takeaway:** When $y$ terms have opposite signs, add the equations to eliminate $y$.",
          skills: ["systems-of-equations"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A store sells trail mix for $\\$6$ per pound and dried fruit for $\\$9$ per pound. A customer buys a total of $5$ pounds and spends $\\$36$. How many pounds of trail mix did the customer buy?",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$3$" },
            { id: "C", text: "$4$" },
            { id: "D", text: "$5$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: System of Equations from a Word Problem**\n\n**Choice B is correct.**\n\n**The Fast Way (30 seconds):** Let $t$ = trail mix pounds. Then dried fruit $= 5 - t$. Cost: $6t + 9(5-t) = 36$. $6t + 45 - 9t = 36$. $-3t = -9$. $t = 3$.\n\n**The Full Solution:**\n$t + d = 5$ and $6t + 9d = 36$\nSubstitute $d = 5 - t$:\n$6t + 9(5-t) = 36$\n$6t + 45 - 9t = 36$\n$-3t = -9$\n$t = 3$\n\n**Why the wrong answers are tempting:**\n• Choice A ($2$): Check: $6(2) + 9(3) = 12 + 27 = 39 \\neq 36$.\n• Choice C ($4$): Check: $6(4) + 9(1) = 24 + 9 = 33 \\neq 36$.\n• Choice D ($5$): All trail mix: $6(5) = 30 \\neq 36$.\n\n**Test Day Takeaway:** For mixture problems, set up two equations (total quantity and total cost) and use substitution.",
          skills: ["systems-of-equations", "word-problems"]
        },
        {
          id: 8,
          type: "fill-in",
          difficulty: "medium",
          question: "If $f(x) = 2x^2 - 3x + 1$, what is the value of $f(3)$?",
          correctAnswer: "10",
          explanation: "**SAT Pattern: Function Evaluation**\n\n**The correct answer is 10.**\n\n**The Fast Way (15 seconds):** $f(3) = 2(9) - 3(3) + 1 = 18 - 9 + 1 = 10$.\n\n**The Full Solution:**\n$f(3) = 2(3)^2 - 3(3) + 1$\n$= 2(9) - 9 + 1$\n$= 18 - 9 + 1$\n$= 10$\n\n**Common Mistakes to Avoid:**\n• Computing $(2 \\cdot 3)^2 = 36$ instead of $2 \\cdot 3^2 = 18$\n• Sign error: $18 - 9 + 1 = 8$ (subtracting $1$ instead of adding)\n\n**Verification:** $f(3) = 18 - 9 + 1 = 10$ ✓\n\n**Test Day Takeaway:** Replace every $x$ with the input value. Follow order of operations carefully.",
          skills: ["function-evaluation", "quadratic-functions"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The table below shows the number of students who play different sports at a school.\n\n| Sport | Boys | Girls |\n|-------|------|-------|\n| Soccer | $30$ | $25$ |\n| Basketball | $20$ | $15$ |\n| Swimming | $10$ | $20$ |\n\nWhat fraction of the students who play swimming are boys?",
          choices: [
            { id: "A", text: "$\\frac{1}{12}$" },
            { id: "B", text: "$\\frac{1}{3}$" },
            { id: "C", text: "$\\frac{1}{2}$" },
            { id: "D", text: "$\\frac{2}{3}$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Two-Way Table Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Swimming total $= 10 + 20 = 30$. Boys in swimming $= 10$. Fraction $= \\frac{10}{30} = \\frac{1}{3}$.\n\n**The Full Solution:**\nTotal swimming students: $10 + 20 = 30$\nBoys in swimming: $10$\nFraction $= \\frac{10}{30} = \\frac{1}{3}$\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{1}{12}$): Dividing $10$ by total students ($120$).\n• Choice C ($\\frac{1}{2}$): Assuming equal split.\n• Choice D ($\\frac{2}{3}$): This is the girls' fraction of swimming.\n\n**Test Day Takeaway:** Read the table carefully. The denominator is the row/column total for the condition, not the grand total.",
          skills: ["two-way-tables", "probability"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A survey estimates that $62\\%$ of voters support a measure, with a margin of error of $\\pm 4\\%$. Which of the following is the best conclusion?",
          choices: [
            { id: "A", text: "Exactly $62\\%$ of all voters support the measure." },
            { id: "B", text: "Between $58\\%$ and $66\\%$ of all voters likely support the measure." },
            { id: "C", text: "At least $66\\%$ of all voters support the measure." },
            { id: "D", text: "Fewer than $58\\%$ of all voters support the measure." }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Margin of Error Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** $62\\% \\pm 4\\%$ gives the interval $[58\\%, 66\\%]$.\n\n**The Full Solution:**\nA margin of error of $\\pm 4\\%$ means the true proportion is likely between $62 - 4 = 58\\%$ and $62 + 4 = 66\\%$.\n\n**Why the wrong answers are tempting:**\n• Choice A: Surveys give estimates, not exact values.\n• Choice C: $66\\%$ is the upper bound, not a minimum.\n• Choice D: $58\\%$ is the lower bound, not a maximum.\n\n**Test Day Takeaway:** Margin of error creates a confidence interval: estimate $\\pm$ margin.",
          skills: ["margin-of-error", "statistics"]
        },
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If a line passes through the points $(0, 4)$ and $(6, 16)$, what is the slope of the line?",
          choices: [
            { id: "A", text: "$\\frac{1}{2}$" },
            { id: "B", text: "$2$" },
            { id: "C", text: "$3$" },
            { id: "D", text: "$6$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Slope $= \\frac{16 - 4}{6 - 0} = \\frac{12}{6} = 2$.\n\n**The Full Solution:**\n$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{16 - 4}{6 - 0} = \\frac{12}{6} = 2$\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{1}{2}$): Flipping the fraction (run over rise).\n• Choice C ($3$): Possibly from $\\frac{12}{4}$, a subtraction error.\n• Choice D ($6$): Using just the $x$-distance.\n\n**Test Day Takeaway:** Slope = rise over run = $\\frac{\\Delta y}{\\Delta x}$. Never flip it.",
          skills: ["slope", "linear-functions"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which of the following is equivalent to $(3x + 2)(x - 5)$?",
          choices: [
            { id: "A", text: "$3x^2 - 13x - 10$" },
            { id: "B", text: "$3x^2 - 15x + 2$" },
            { id: "C", text: "$3x^2 + 13x - 10$" },
            { id: "D", text: "$3x^2 - 17x - 10$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: FOIL / Expanding Binomials**\n\n**Choice A is correct.**\n\n**The Fast Way (30 seconds):** $(3x+2)(x-5) = 3x^2 - 15x + 2x - 10 = 3x^2 - 13x - 10$.\n\n**The Full Solution:**\nFirst: $3x \\cdot x = 3x^2$\nOuter: $3x \\cdot (-5) = -15x$\nInner: $2 \\cdot x = 2x$\nLast: $2 \\cdot (-5) = -10$\nCombine: $3x^2 - 15x + 2x - 10 = 3x^2 - 13x - 10$\n\n**Why the wrong answers are tempting:**\n• Choice B: Forgot the inner term $2x$.\n• Choice C: Sign error on the middle term ($+13x$ instead of $-13x$).\n• Choice D: Added $-15x - 2x = -17x$ instead of $-15x + 2x = -13x$.\n\n**Test Day Takeaway:** FOIL carefully and watch the signs when multiplying by a negative.",
          skills: ["polynomial-operations", "factoring"]
        },
        {
          id: 13,
          type: "fill-in",
          difficulty: "medium",
          question: "A triangle has angles measuring $x°$, $50°$, and $70°$. What is the value of $x$?",
          correctAnswer: "60",
          explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**The correct answer is 60.**\n\n**The Fast Way (10 seconds):** $x + 50 + 70 = 180$, so $x = 60$.\n\n**The Full Solution:**\nThe sum of angles in a triangle is $180°$.\n$x + 50 + 70 = 180$\n$x + 120 = 180$\n$x = 60$\n\n**Common Mistakes to Avoid:**\n• Using $360°$ instead of $180°$\n• Subtraction error: $180 - 120 = 50$ (getting confused with the other angle)\n\n**Verification:** $60 + 50 + 70 = 180$ ✓\n\n**Test Day Takeaway:** Triangle angles always sum to $180°$.",
          skills: ["triangles", "angles"]
        },
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A population of bacteria doubles every $3$ hours. If there are $500$ bacteria initially, which function models the population after $t$ hours?",
          choices: [
            { id: "A", text: "$P(t) = 500(2)^{t/3}$" },
            { id: "B", text: "$P(t) = 500(2)^{3t}$" },
            { id: "C", text: "$P(t) = 500 + 2t$" },
            { id: "D", text: "$P(t) = 1000^t$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** Doubles every $3$ hours means the base is $2$ and the exponent is $t/3$ (number of doubling periods). Initial value is $500$.\n\n**The Full Solution:**\nGeneral form: $P(t) = P_0 \\cdot b^{t/\\text{period}}$\n$P_0 = 500$, doubles means $b = 2$, period $= 3$ hours.\n$P(t) = 500(2)^{t/3}$\n\nCheck: At $t = 3$: $P(3) = 500 \\cdot 2^1 = 1000$ ✓ (doubled)\n\n**Why the wrong answers are tempting:**\n• Choice B: Uses $3t$ in the exponent, which would mean tripling the rate.\n• Choice C: Models linear growth, not exponential.\n• Choice D: Ignores the initial value and period entirely.\n\n**Test Day Takeaway:** For exponential growth: initial value times growth factor raised to $t$ divided by the period.",
          skills: ["exponential-functions"]
        },
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $|x - 3| = 7$, what is the sum of all possible values of $x$?",
          choices: [
            { id: "A", text: "$6$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$10$" },
            { id: "D", text: "$14$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** $x - 3 = 7$ gives $x = 10$. $x - 3 = -7$ gives $x = -4$. Sum $= 10 + (-4) = 6$.\n\n**The Full Solution:**\n$|x - 3| = 7$ means $x - 3 = 7$ or $x - 3 = -7$.\nCase 1: $x = 10$\nCase 2: $x = -4$\nSum $= 10 + (-4) = 6$\n\n**Why the wrong answers are tempting:**\n• Choice B ($4$): Only finding $x = -4 + ... $ or confusing the cases.\n• Choice C ($10$): Only using the positive case.\n• Choice D ($14$): Adding $10 + 4$ instead of $10 + (-4)$.\n\n**Test Day Takeaway:** Absolute value equations always give two cases. The sum of solutions for $|x - a| = b$ is always $2a$.",
          skills: ["absolute-value-equations", "solving-equations"]
        },
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The equation $y = x^2 - 8x + 12$ is graphed in the $xy$-plane. What is the $x$-coordinate of the vertex?",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$6$" },
            { id: "D", text: "$8$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Vertex of a Parabola**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** $x = \\frac{-b}{2a} = \\frac{-(-8)}{2(1)} = \\frac{8}{2} = 4$.\n\n**The Full Solution:**\nFor $y = ax^2 + bx + c$, vertex $x$-coordinate $= \\frac{-b}{2a}$.\n$a = 1, b = -8$: $x = \\frac{8}{2} = 4$.\n\nAlternatively, factor: $y = (x-2)(x-6)$. The vertex is midway between the roots: $\\frac{2+6}{2} = 4$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($2$): One of the $x$-intercepts.\n• Choice C ($6$): The other $x$-intercept.\n• Choice D ($8$): The value of $-b$, not $\\frac{-b}{2a}$.\n\n**Test Day Takeaway:** Vertex $x = \\frac{-b}{2a}$, or average the two roots.",
          skills: ["quadratic-functions", "vertex-form"]
        },
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "If $\\sqrt{3x + 7} = 5$, what is the value of $x$?",
          choices: [
            { id: "A", text: "$4$" },
            { id: "B", text: "$6$" },
            { id: "C", text: "$\\frac{32}{3}$" },
            { id: "D", text: "$18$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Solving a Radical Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** Square both sides: $3x + 7 = 25$. $3x = 18$. $x = 6$.\n\n**The Full Solution:**\n$\\sqrt{3x + 7} = 5$\n$(\\sqrt{3x + 7})^2 = 5^2$\n$3x + 7 = 25$\n$3x = 18$\n$x = 6$\n\n**Why the wrong answers are tempting:**\n• Choice A ($4$): Check: $\\sqrt{12 + 7} = \\sqrt{19} \\neq 5$.\n• Choice C ($\\frac{32}{3}$): From $3x = 32$, squaring $5$ as $32$ somehow.\n• Choice D ($18$): Using $3x = 18$ but then not dividing, or squaring again.\n\n**Test Day Takeaway:** Square both sides to remove a square root, then solve the resulting linear equation. Always check by plugging back in.",
          skills: ["radical-equations", "solving-equations"]
        },
        {
          id: 18,
          type: "fill-in",
          difficulty: "hard",
          question: "The perimeter of a square is $48$ inches. What is the area of the square, in square inches?",
          correctAnswer: "144",
          explanation: "**SAT Pattern: Perimeter to Area**\n\n**The correct answer is 144.**\n\n**The Fast Way (15 seconds):** Side $= 48 \\div 4 = 12$. Area $= 12^2 = 144$.\n\n**The Full Solution:**\nPerimeter of a square $= 4s$, so $4s = 48$ and $s = 12$.\nArea $= s^2 = 12^2 = 144$ square inches.\n\n**Common Mistakes to Avoid:**\n• Using $48^2 = 2304$ (squaring the perimeter, not the side)\n• Dividing by $2$ instead of $4$: side $= 24$, area $= 576$\n\n**Verification:** Perimeter $= 4(12) = 48$ ✓, Area $= 144$ ✓\n\n**Test Day Takeaway:** Find the side length first from the perimeter, then square it for the area.",
          skills: ["area"]
        },
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A cylinder has a radius of $4$ inches and a height of $10$ inches. What is the volume, in cubic inches, of the cylinder?",
          choices: [
            { id: "A", text: "$40\\pi$" },
            { id: "B", text: "$80\\pi$" },
            { id: "C", text: "$160\\pi$" },
            { id: "D", text: "$640\\pi$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Volume of a Cylinder**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** $V = \\pi r^2 h = \\pi(16)(10) = 160\\pi$.\n\n**The Full Solution:**\n$V = \\pi r^2 h = \\pi (4)^2 (10) = \\pi (16)(10) = 160\\pi$\n\n**Why the wrong answers are tempting:**\n• Choice A ($40\\pi$): From $\\pi(4)(10) = 40\\pi$, forgetting to square the radius.\n• Choice B ($80\\pi$): From $\\pi(8)(10)$, doubling $r$ instead of squaring.\n• Choice D ($640\\pi$): From $\\pi(4)^2(10) \\cdot 4$, an extra multiplication.\n\n**Test Day Takeaway:** Cylinder volume = $\\pi r^2 h$. The radius gets squared, not doubled. This formula is on the reference sheet.",
          skills: ["volume"]
        },
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The function $f$ is defined by $f(x) = a \\cdot b^x$, where $a$ and $b$ are constants. If $f(0) = 5$ and $f(2) = 45$, what is the value of $b$?",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$3$" },
            { id: "C", text: "$5$" },
            { id: "D", text: "$9$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Finding the Base of an Exponential Function**\n\n**Choice B is correct.**\n\n**The Fast Way (30 seconds):** $f(0) = a \\cdot b^0 = a = 5$. Then $f(2) = 5b^2 = 45$, so $b^2 = 9$, $b = 3$.\n\n**The Full Solution:**\nFrom $f(0) = 5$: $a \\cdot b^0 = a = 5$.\nFrom $f(2) = 45$: $5 \\cdot b^2 = 45$, so $b^2 = 9$, $b = 3$ (since $b > 0$ for exponential functions).\n\n**Why the wrong answers are tempting:**\n• Choice A ($2$): Guessing. Check: $5(4) = 20 \\neq 45$.\n• Choice C ($5$): Confusing $b$ with $a$.\n• Choice D ($9$): This is $b^2$, not $b$.\n\n**Test Day Takeaway:** Use $f(0)$ to find $a$ (since $b^0 = 1$), then use another point to find $b$.",
          skills: ["exponential-functions", "function-evaluation"]
        },
        {
          id: 21,
          type: "multiple-choice",
          difficulty: "hard",
          question: "For what value of $b$ does the equation $x^2 + bx + 9 = 0$ have exactly one real solution?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$6$" },
            { id: "C", text: "$9$" },
            { id: "D", text: "$18$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Discriminant for One Solution**\n\n**Choice B is correct.**\n\n**The Fast Way (30 seconds):** One solution means $b^2 - 4ac = 0$. Here $a = 1, c = 9$: $b^2 - 36 = 0$, so $b^2 = 36$, $b = 6$ (positive value).\n\n**The Full Solution:**\nDiscriminant $= b^2 - 4(1)(9) = b^2 - 36$.\nFor one solution: $b^2 - 36 = 0$, so $b = \\pm 6$.\nSince $6$ is among the choices, $b = 6$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): This is $\\sqrt{9}$, related to $c$ but not the discriminant.\n• Choice C ($9$): This is the value of $c$.\n• Choice D ($18$): From $2 \\times 9$, not using the discriminant formula.\n\n**Test Day Takeaway:** One real solution means discriminant $= 0$: $b^2 = 4ac$.",
          skills: ["discriminant", "quadratic-equations"]
        },
        {
          id: 22,
          type: "fill-in",
          difficulty: "hard",
          question: "In a right triangle, one leg has length $8$ and the hypotenuse has length $17$. What is the length of the other leg?",
          correctAnswer: "15",
          explanation: "**SAT Pattern: Pythagorean Theorem**\n\n**The correct answer is 15.**\n\n**The Fast Way (20 seconds):** $a^2 + 8^2 = 17^2$. $a^2 = 289 - 64 = 225$. $a = 15$.\n\n**The Full Solution:**\n$a^2 + b^2 = c^2$\n$a^2 + 64 = 289$\n$a^2 = 225$\n$a = 15$\n\nThis is the $8$-$15$-$17$ Pythagorean triple.\n\n**Common Mistakes to Avoid:**\n• Adding instead of subtracting: $289 + 64 = 353$\n• Forgetting to take the square root: answering $225$\n\n**Verification:** $8^2 + 15^2 = 64 + 225 = 289 = 17^2$ ✓\n\n**Test Day Takeaway:** Know common Pythagorean triples: $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$, $7$-$24$-$25$.",
          skills: ["triangles", "right-triangle-trig"]
        }
      ]
    }
  ]
};

export default practiceTest1;
