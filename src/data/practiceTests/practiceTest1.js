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
  question: "A data set is modeled by the linear equation $y = 1.8x + 12.5$. According to this model, what is the predicted value of $y$ when $x = 15$?",
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
  question: "The average monthly rainfall for a city was recorded. In March, the average rainfall was 2.4 inches, and in July, the average rainfall was 3.6 inches. What is the percent increase in average rainfall from March to July?",
  choices: [
    { id: "A", text: "12%" },
    { id: "B", text: "33%" },
    { id: "C", text: "50%" },
    { id: "D", text: "120%" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Percent Increase**\n\n**Choice C is correct.**\n\n**The Fast Way (15s):** Percent increase $= \\frac{3.6 - 2.4}{2.4} \\times 100 = \\frac{1.2}{2.4} \\times 100 = 50\\%$.\n\n**The Full Solution:**\nChange $= 3.6 - 2.4 = 1.2$.\nPercent increase $= \\frac{1.2}{2.4} \\times 100 = 50\\%$.\n\n**Why the wrong answers are tempting:**\n• A: Treats the change 1.2 as a percent.\n• B: Divides the change by the new value: $\\frac{1.2}{3.6} \\approx 33\\%$.\n• D: Multiplies instead of dividing correctly.\n\n**Test Day Takeaway:** Percent change always divides by the ORIGINAL (starting) value.",
  skills: ["percents"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  question: "A warehouse ships 2,400 packages per day. Each package weighs 9 ounces. How many pounds of packages does the warehouse ship per day? (1 pound = 16 ounces)",
  choices: [
    { id: "A", text: "150" },
    { id: "B", text: "1,350" },
    { id: "C", text: "4,267" },
    { id: "D", text: "21,600" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Unit Conversion**\n\n**Choice B is correct.**\n\n**The Fast Way (15s):** Total ounces $= 2{,}400 \\times 9 = 21{,}600$ oz. Convert: $21{,}600 \\div 16 = 1{,}350$ pounds.\n\n**The Full Solution:**\nTotal weight in ounces: $2{,}400 \\times 9 = 21{,}600$ oz.\nPounds: $\\frac{21{,}600}{16} = 1{,}350$ lb.\n\n**Why the wrong answers are tempting:**\n• A: Divides 2,400 by 16 without multiplying by 9 first.\n• C: Divides 2,400 by 9 then multiplies by 16 (inverts the steps).\n• D: Gives the total in ounces rather than pounds.\n\n**Test Day Takeaway:** In unit conversions, multiply first to get the total in the smaller unit, then divide by the conversion factor.",
  skills: ["word-problems", "ratios"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  question: "Which expression is equivalent to $8x^3 + 5x^3 - 4x^3 + 3x - 7x$?",
  choices: [
    { id: "A", text: "$9x^3 + 4x$" },
    { id: "B", text: "$9x^3 - 4x$" },
    { id: "C", text: "$5x^6 - 4x$" },
    { id: "D", text: "$17x^3 - 4x$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Combining Like Terms**\n\n**Choice B is correct.**\n\n**The Fast Way (15s):** $x^3$ terms: $8 + 5 - 4 = 9$, so $9x^3$. $x$ terms: $3 - 7 = -4$, so $-4x$. Result: $9x^3 - 4x$.\n\n**The Full Solution:**\n$8x^3 + 5x^3 - 4x^3 = (8 + 5 - 4)x^3 = 9x^3$.\n$3x - 7x = (3 - 7)x = -4x$.\nCombined: $9x^3 - 4x$.\n\n**Why the wrong answers are tempting:**\n• A: Gets the $x$ term sign wrong ($+4x$ instead of $-4x$).\n• C: Adds exponents ($x^3 + x^3 = x^6$) instead of combining coefficients.\n• D: Adds all $x^3$ coefficients without subtracting: $8 + 5 + 4 = 17$.\n\n**Test Day Takeaway:** Combine only like terms (same variable, same exponent). Add/subtract coefficients; keep the exponent unchanged.",
  skills: ["polynomial-operations"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  question: "A system of equations is shown.\n\n$x + 4y = 26$\n$x - 2y = 8$\n\nWhat is the value of $y$?",
  choices: [
    { id: "A", text: "$2$" },
    { id: "B", text: "$3$" },
    { id: "C", text: "$5$" },
    { id: "D", text: "$14$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice B is correct.**\n\n**The Fast Way (15s):** Subtract equation 2 from equation 1: $(x + 4y) - (x - 2y) = 26 - 8$, so $6y = 18$, giving $y = 3$.\n\n**The Full Solution:**\n$(x + 4y) - (x - 2y) = 26 - 8$\n$x + 4y - x + 2y = 18$\n$6y = 18$\n$y = 3$.\nCheck: $x = 8 + 2(3) = 14$. Then $14 + 4(3) = 14 + 12 = 26$. ✓\n\n**Why the wrong answers are tempting:**\n• A: Divides 18 by 9 instead of 6.\n• C: Subtracts incorrectly, getting $2y = 18$.\n• D: Gives the value of $x$ instead of $y$.\n\n**Test Day Takeaway:** When both equations have the same coefficient on one variable, subtract to eliminate it instantly.",
  skills: ["systems-of-equations", "solving-equations"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  question: "If $f(x) = 2x^2 - 5x + 3$, what is the value of $f(-2)$?",
  choices: [
    { id: "A", text: "$1$" },
    { id: "B", text: "$5$" },
    { id: "C", text: "$21$" },
    { id: "D", text: "$-3$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice C is correct.**\n\n**The Fast Way (15s):** $f(-2) = 2(-2)^2 - 5(-2) + 3 = 2(4) + 10 + 3 = 8 + 10 + 3 = 21$.\n\n**The Full Solution:**\nStep 1: $(-2)^2 = 4$, so $2(4) = 8$.\nStep 2: $-5(-2) = 10$.\nStep 3: $8 + 10 + 3 = 21$.\n\n**Why the wrong answers are tempting:**\n• A: Computes $2(4) - 10 + 3 = -5$ ... or other sign errors in intermediate steps.\n• B: Uses $f(1)$ by accident.\n• D: Computes $2(-4) - 5(-2) + 3 = -8 + 10 + 3 = 5$ — confusing $(-2)^2$ with $-(2^2)$.\n\n**Test Day Takeaway:** Use parentheses when substituting negatives: $(-2)^2 = 4$, not $-4$.",
  skills: ["function-interpretation"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  question: "A researcher surveyed a random sample of 500 residents in a town and found that $0.47 \\pm 0.04$ of them supported a proposed tax increase, at a 95% confidence level. Which statement is the best interpretation?",
  choices: [
    { id: "A", text: "Exactly 47% of all town residents support the tax increase." },
    { id: "B", text: "Between 43% and 51% of the 500 surveyed residents support the tax increase." },
    { id: "C", text: "It is plausible that between 43% and 51% of all town residents support the tax increase." },
    { id: "D", text: "If the survey were repeated, 95% of respondents would support the tax increase." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Margin of Error / Confidence Interval**\n\n**Choice C is correct.**\n\n**The Fast Way (15s):** The interval $0.47 \\pm 0.04$ means the plausible range for the POPULATION proportion is $43\\%$ to $51\\%$. The key word is \"plausible\" — it correctly conveys uncertainty.\n\n**The Full Solution:**\nLower bound: $0.47 - 0.04 = 0.43 = 43\\%$.\nUpper bound: $0.47 + 0.04 = 0.51 = 51\\%$.\nThis interval estimates the true proportion of ALL residents (the population). The sample proportion is known to be exactly 47%.\n\n**Why the wrong answers are tempting:**\n• A: A sample statistic is an estimate, not an exact value for the population.\n• B: The interval applies to the population, not the sample (the sample result is exactly 47%).\n• D: The 95% describes the reliability of the method, not individual responses.\n\n**Test Day Takeaway:** Confidence intervals give a plausible range for the POPULATION parameter. Look for words like \"plausible\" or \"likely.\"",
  skills: ["margin-of-error", "statistics"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  question: "A storage facility charges a monthly base fee plus a rate per square foot of space used. A customer using 150 square feet pays $\\$430$ per month, and a customer using 250 square feet pays $\\$630$ per month. What is the monthly base fee, in dollars?",
  choices: [
    { id: "A", text: "$\\$2$" },
    { id: "B", text: "$\\$100$" },
    { id: "C", text: "$\\$130$" },
    { id: "D", text: "$\\$200$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: System of Equations Word Problem**\n\n**Choice C is correct.**\n\n**The Fast Way (20s):** Let $b$ = base fee and $r$ = rate per square foot.\n$b + 150r = 430$ ... (1)\n$b + 250r = 630$ ... (2)\nSubtract: $100r = 200$, so $r = 2$.\nThen $b = 430 - 150(2) = 430 - 300 = 130$.\n\n**The Full Solution:**\nFrom the subtraction: $r = 2$ per square foot.\nBase fee: $b = 430 - 300 = 130$.\nCheck: $130 + 250(2) = 130 + 500 = 630$. ✓\n\n**Why the wrong answers are tempting:**\n• A: Gives the per-square-foot rate, not the base fee.\n• B: Rounds or uses wrong intermediate values.\n• D: Divides 630 - 430 = 200 and stops, not realizing this is the difference in cost for 100 sq ft.\n\n**Test Day Takeaway:** Set up two equations from two data points, subtract to eliminate one variable.",
  skills: ["systems-of-equations", "word-problems"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  question: "A ball is thrown upward from a rooftop. Its height $h$, in feet, above the ground after $t$ seconds is modeled by $h(t) = -16(t - 2)^2 + 144$. What is the maximum height, in feet, that the ball reaches above the ground?",
  choices: [
    { id: "A", text: "$2$" },
    { id: "B", text: "$80$" },
    { id: "C", text: "$128$" },
    { id: "D", text: "$144$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Vertex Form — Maximum Value**\n\n**Choice D is correct.**\n\n**The Fast Way (10s):** In vertex form $a(t-h)^2 + k$, the vertex is $(h, k)$. Since $a = -16 < 0$, the parabola opens downward, so the maximum is $k = 144$ feet.\n\n**The Full Solution:**\nThe function $h(t) = -16(t-2)^2 + 144$ has vertex $(2, 144)$.\nSince $(t-2)^2 \\geq 0$, we have $-16(t-2)^2 \\leq 0$, so $h(t) \\leq 144$.\nMaximum height $= 144$ feet, reached at $t = 2$ seconds.\n\n**Why the wrong answers are tempting:**\n• A: Gives the time of maximum height, not the height itself.\n• B: Computes $h(0) = -16(4) + 144 = 80$ (height at launch, not maximum).\n• C: Confuses $-16 \\times (-2)^2 + 144 = -64 + 144 = 80$... or makes other errors.\n\n**Test Day Takeaway:** In vertex form $a(x-h)^2 + k$: the vertex is $(h, k)$. When $a < 0$, the max value is $k$.",
  skills: ["vertex-form", "function-interpretation"]
},
{
  id: 9,
  type: "fill-in",
  difficulty: "medium",
  question: "The equation $4(2x - 3) + 10 = 8x + k$ has infinitely many solutions. What is the value of $k$?",
  correctAnswer: "-2",
  explanation: "**The correct answer is $-2$.**\n\n**The Full Solution:**\nExpand the left side: $8x - 12 + 10 = 8x - 2$.\nFor infinitely many solutions, the equation must be an identity:\n$8x - 2 = 8x + k$.\nThis requires $k = -2$.\n\n**Verification:** With $k = -2$: $8x - 2 = 8x - 2$ is true for all $x$. ✓\n\n**Common Mistakes:**\n• Writing $k = 2$ (sign error).\n• Writing $k = -22$ (computing $-12 - 10$ instead of $-12 + 10$).",
  skills: ["solving-equations", "linear-functions"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  question: "The table shows results of a survey of 300 students about their transportation to school.\n\n| | Bus | Car | Total |\n|---|---|---|---|\n| Freshman | 65 | 55 | 120 |\n| Sophomore | 80 | 100 | 180 |\n| Total | 145 | 155 | 300 |\n\nWhat is the probability that a randomly selected student who rides the bus is a sophomore?",
  choices: [
    { id: "A", text: "$\\frac{80}{300}$" },
    { id: "B", text: "$\\frac{80}{180}$" },
    { id: "C", text: "$\\frac{80}{145}$" },
    { id: "D", text: "$\\frac{145}{300}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (15s):** \"Given rides the bus\" restricts to the Bus column (total = 145). Of those, 80 are sophomores. Probability $= \\frac{80}{145}$.\n\n**The Full Solution:**\n$P(\\text{sophomore} | \\text{bus}) = \\frac{\\text{sophomore AND bus}}{\\text{bus total}} = \\frac{80}{145} = \\frac{16}{29}$.\n\n**Why the wrong answers are tempting:**\n• A: Uses the grand total (300) as the denominator.\n• B: Uses the sophomore total (180) as the denominator.\n• D: Gives the probability of riding the bus overall.\n\n**Test Day Takeaway:** In conditional probability, the \"given\" condition determines the denominator.",
  skills: ["probability", "two-way-tables"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  question: "Line $j$ passes through the points $(1, 7)$ and $(5, -1)$. Line $k$ is perpendicular to line $j$. What is the slope of line $k$?",
  choices: [
    { id: "A", text: "$-2$" },
    { id: "B", text: "$-\\frac{1}{2}$" },
    { id: "C", text: "$\\frac{1}{2}$" },
    { id: "D", text: "$2$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Perpendicular Slopes**\n\n**Choice C is correct.**\n\n**The Fast Way (15s):** Slope of $j$: $\\frac{-1 - 7}{5 - 1} = \\frac{-8}{4} = -2$. Perpendicular slope $= -\\frac{1}{-2} = \\frac{1}{2}$.\n\n**The Full Solution:**\n$m_j = \\frac{-1 - 7}{5 - 1} = \\frac{-8}{4} = -2$.\nPerpendicular slopes are negative reciprocals: $m_k = \\frac{1}{2}$.\nCheck: $(-2) \\times \\frac{1}{2} = -1$. ✓\n\n**Why the wrong answers are tempting:**\n• A: Gives the slope of $j$ itself (parallel, not perpendicular).\n• B: Takes the reciprocal but keeps the negative sign.\n• D: Takes the absolute value without reciprocating.\n\n**Test Day Takeaway:** Perpendicular slopes: flip the fraction and change the sign. Product must equal $-1$.",
  skills: ["slope", "coordinate-geometry"]
},
{
  id: 12,
  type: "fill-in",
  difficulty: "medium",
  question: "A tutoring company charges a registration fee plus a fixed rate per session. A student who attends 10 sessions pays a total of $\\$390$. A student who attends 16 sessions pays a total of $\\$570$. What is the registration fee, in dollars?",
  correctAnswer: "90",
  explanation: "**The correct answer is $90$.**\n\n**The Full Solution:**\nLet $r$ = registration fee and $s$ = cost per session.\n$r + 10s = 390$ ... (1)\n$r + 16s = 570$ ... (2)\nSubtract (1) from (2): $6s = 180$, so $s = 30$.\nSubstitute: $r + 10(30) = 390$, so $r + 300 = 390$, giving $r = 90$.\n\n**Verification:** $90 + 16(30) = 90 + 480 = 570$. ✓\n\n**Common Mistakes:**\n• Answering 30 (the per-session cost, not the registration fee).\n• Subtracting in the wrong order and getting a negative value.",
  skills: ["systems-of-equations", "word-problems"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  question: "The equation of a circle in the $xy$-plane is $x^2 + y^2 + 8x - 12y = 0$. What is the radius of the circle?",
  choices: [
    { id: "A", text: "$2\\sqrt{13}$" },
    { id: "B", text: "$\\sqrt{20}$" },
    { id: "C", text: "$10$" },
    { id: "D", text: "$52$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Complete the Square for a Circle**\n\n**Choice A is correct.**\n\n**The Fast Way (30s):** Complete the square:\n$(x^2 + 8x + 16) + (y^2 - 12y + 36) = 0 + 16 + 36$\n$(x+4)^2 + (y-6)^2 = 52$\nRadius $= \\sqrt{52} = \\sqrt{4 \\cdot 13} = 2\\sqrt{13}$.\n\n**The Full Solution:**\nGroup: $(x^2 + 8x) + (y^2 - 12y) = 0$.\nComplete the square for $x$: half of 8 is 4, $4^2 = 16$.\nComplete the square for $y$: half of $-12$ is $-6$, $(-6)^2 = 36$.\n$(x+4)^2 + (y-6)^2 = 16 + 36 = 52$.\nRadius $= \\sqrt{52} = 2\\sqrt{13} \\approx 7.21$.\n\n**Why the wrong answers are tempting:**\n• B: Adds only one of the completing-the-square constants ($\\sqrt{16 + 4}$ or similar).\n• C: Incorrectly computes $\\sqrt{16+36} = \\sqrt{100} = 10$ (adds under the wrong grouping).\n• D: Gives $r^2 = 52$ instead of $r$.\n\n**Test Day Takeaway:** Move the constant to the right side, complete the square for both $x$ and $y$, then $r = \\sqrt{r^2}$.",
  skills: ["circle-equations", "solving-equations"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  question: "A researcher models the relationship between the age $x$ of a car, in years, and its value $y$, in thousands of dollars using the equation $y = -2.8x + 32$. A car that is 5 years old has a value of $\\$19{,}500$. What is the residual, in thousands of dollars?",
  choices: [
    { id: "A", text: "$-1.5$" },
    { id: "B", text: "$1.5$" },
    { id: "C", text: "$3.5$" },
    { id: "D", text: "$18$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Residual Calculation**\n\n**Choice B is correct.**\n\n**The Fast Way (15s):** Predicted: $y = -2.8(5) + 32 = -14 + 32 = 18$ thousand. Actual: $19.5$ thousand. Residual $= 19.5 - 18 = 1.5$.\n\n**The Full Solution:**\nPredicted value at $x = 5$: $-2.8(5) + 32 = -14 + 32 = 18$ thousand dollars.\nActual value: $\\$19{,}500 = 19.5$ thousand dollars.\nResidual $=$ actual $-$ predicted $= 19.5 - 18 = 1.5$ thousand dollars.\nPositive residual means the actual value is above the line of best fit.\n\n**Why the wrong answers are tempting:**\n• A: Computes predicted $-$ actual (reversed).\n• C: Uses $\\$19{,}500$ as $19.5$ but makes an arithmetic error.\n• D: Gives the predicted value, not the residual.\n\n**Test Day Takeaway:** Residual = actual $-$ predicted. Positive means above the line; negative means below.",
  skills: ["scatterplots", "statistics"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  question: "In right triangle $PQR$, angle $R$ is the right angle, $PQ = 65$, and $QR = 33$. What is the value of $\\cos(P)$?",
  choices: [
    { id: "A", text: "$\\frac{33}{65}$" },
    { id: "B", text: "$\\frac{56}{65}$" },
    { id: "C", text: "$\\frac{33}{56}$" },
    { id: "D", text: "$\\frac{56}{33}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Right Triangle Trigonometry**\n\n**Choice B is correct.**\n\n**The Fast Way (25s):** Right angle at $R$, so $PQ = 65$ is the hypotenuse. Find $PR$: $PR = \\sqrt{65^2 - 33^2} = \\sqrt{4225 - 1089} = \\sqrt{3136} = 56$. For angle $P$: adjacent $= PR = 56$, hypotenuse $= PQ = 65$. $\\cos(P) = \\frac{56}{65}$.\n\n**The Full Solution:**\nUsing the Pythagorean theorem: $PR^2 + QR^2 = PQ^2$.\n$PR^2 = 65^2 - 33^2 = 4225 - 1089 = 3136$.\n$PR = 56$.\nVerification: $56^2 + 33^2 = 3136 + 1089 = 4225 = 65^2$. ✓\n$\\cos(P) = \\frac{\\text{adjacent to } P}{\\text{hypotenuse}} = \\frac{PR}{PQ} = \\frac{56}{65}$.\n\n**Why the wrong answers are tempting:**\n• A: Uses $QR$ (opposite to $P$) — this is $\\sin(P)$.\n• C: Uses $\\frac{QR}{PR} = \\frac{33}{56}$ — this is $\\tan(P)$.\n• D: Gives the reciprocal of $\\tan(P)$.\n\n**Test Day Takeaway:** Draw and label the triangle. cos = adjacent/hypotenuse relative to the specified angle.",
  skills: ["trigonometry", "triangles"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  question: "The equation $-3x^2 + bx - 48 = 0$ has no real solutions. What is the greatest integer value of $b$?",
  choices: [
    { id: "A", text: "$23$" },
    { id: "B", text: "$24$" },
    { id: "C", text: "$25$" },
    { id: "D", text: "$576$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Discriminant — No Real Solutions**\n\n**Choice A is correct.**\n\n**The Fast Way (25s):** No real solutions requires discriminant $< 0$:\n$b^2 - 4(-3)(-48) < 0$\n$b^2 - 576 < 0$\n$b^2 < 576$\n$|b| < 24$\nGreatest integer: $b = 23$.\n\n**The Full Solution:**\nFor $-3x^2 + bx - 48 = 0$: $a = -3$, $c = -48$.\nDiscriminant $= b^2 - 4(-3)(-48) = b^2 - 576$.\nNo real solutions: $b^2 < 576$, so $|b| < 24$, meaning $-24 < b < 24$.\nAt $b = 24$: discriminant $= 576 - 576 = 0$ (repeated real root — not \"no real solutions\").\nGreatest integer value: $b = 23$.\n\n**Why the wrong answers are tempting:**\n• B: Uses $\\leq$ instead of $<$ (at $b = 24$, there IS one real solution).\n• C: Off-by-two from the boundary.\n• D: Gives $b^2$ instead of $b$.\n\n**Test Day Takeaway:** No real solutions ↔ discriminant $< 0$ (strictly less than). At discriminant $= 0$, there's exactly one real solution.",
  skills: ["discriminant", "quadratic-equations"]
},
{
  id: 17,
  type: "fill-in",
  difficulty: "hard",
  question: "A population of bacteria is modeled by $P(t) = 8{,}000(0.73)^{t/4}$, where $t$ is the number of hours since the initial measurement. By what percent does the population decrease every 4 hours?",
  correctAnswer: "27",
  explanation: "**The correct answer is $27$.**\n\n**The Full Solution:**\nWhen $t$ increases by 4:\n$P(t+4) = 8{,}000(0.73)^{(t+4)/4} = 8{,}000(0.73)^{t/4} \\cdot 0.73 = 0.73 \\cdot P(t)$.\nEvery 4 hours, the population is multiplied by $0.73$.\nPercent decrease $= 1 - 0.73 = 0.27 = 27\\%$.\n\n**Verification:** At $t = 0$: $P = 8{,}000$. At $t = 4$: $P = 8{,}000 \\times 0.73 = 5{,}840$.\nDecrease: $\\frac{8{,}000 - 5{,}840}{8{,}000} = \\frac{2{,}160}{8{,}000} = 0.27 = 27\\%$. ✓\n\n**Common Mistakes:**\n• Answering 73 (the multiplier, not the percent decrease).\n• Finding the hourly rate instead of the 4-hour rate.",
  skills: ["exponential-functions", "percents"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  question: "Consider the system of equations.\n\n$x + 2y - z = 5$\n$3x + 6y - 3z = 15$\n$2x + 4y - 2z = 11$\n\nHow many solutions $(x, y, z)$ does this system have?",
  choices: [
    { id: "A", text: "Zero" },
    { id: "B", text: "Exactly one" },
    { id: "C", text: "Exactly two" },
    { id: "D", text: "Infinitely many" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Counting Solutions — Inconsistent System**\n\n**Choice A is correct.**\n\n**The Fast Way (20s):** Equation 2 $= 3 \\times$ Equation 1: $3(x+2y-z) = 3(5)$ gives $3x+6y-3z=15$. ✓\nEquation 3 should be $2 \\times$ Equation 1 if consistent: $2(x+2y-z) = 2(5) = 10$, but Equation 3 says $= 11$. Contradiction → zero solutions.\n\n**The Full Solution:**\nDivide Equation 2 by 3: $x + 2y - z = 5$ (same as Eq 1). ✓\nDivide Equation 3 by 2: $x + 2y - z = 5.5$.\nBut Equation 1 says $x + 2y - z = 5$. Since $5 \neq 5.5$, the system is inconsistent.\n\n**Why the wrong answers are tempting:**\n• B: Assumes 3 equations in 3 unknowns always yield a unique solution.\n• C: Linear systems never have exactly two solutions.\n• D: Would be true if Equation 3 were $2x + 4y - 2z = 10$.\n\n**Test Day Takeaway:** Check whether equations are multiples of each other. Same left side but different right side = contradiction = zero solutions.",
  skills: ["systems-of-equations"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  question: "A data set has 11 values listed in order:\n\n$2, 3, 3, 4, 5, 5, 6, 7, 7, 8, 10$\n\nIf the value $50$ is added to the data set, which of the following is true?",
  choices: [
    { id: "A", text: "The median increases by more than 1 and the range increases." },
    { id: "B", text: "The median increases by 0.5 and the range increases." },
    { id: "C", text: "The median stays the same and the range stays the same." },
    { id: "D", text: "The median increases by 0.5 and the range stays the same." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Effect of Adding an Outlier**\n\n**Choice B is correct.**\n\n**The Fast Way (30s):**\nOriginal: 11 values → median = 6th value = $5$. Range = $10 - 2 = 8$.\nWith 50 added: 12 values → median = average of 6th and 7th values = $\\frac{5 + 6}{2} = 5.5$. Range = $50 - 2 = 48$.\nMedian increased by $0.5$. Range increased from 8 to 48.\n\n**The Full Solution:**\nOriginal sorted: $2, 3, 3, 4, 5, \\mathbf{5}, 6, 7, 7, 8, 10$. Median = 5th value from middle = 5.\nWith 50: $2, 3, 3, 4, 5, \\mathbf{5, 6}, 7, 7, 8, 10, 50$. Median = $\\frac{5+6}{2} = 5.5$.\nMedian change: $5.5 - 5 = 0.5$. Range change: $48 - 8 = 40$ (increases).\n\n**Why the wrong answers are tempting:**\n• A: The median shifts only by 0.5 because the middle values barely move.\n• C: The range obviously changes with such an extreme outlier.\n• D: The range clearly increases.\n\n**Test Day Takeaway:** Adding an extreme outlier greatly affects range and mean but only slightly shifts the median.",
  skills: ["statistics"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  question: "Two rectangular prisms are glued together along one face. Prism A has dimensions $5 \\times 6 \\times 10$ and Prism B has dimensions $5 \\times 6 \\times 7$. They are glued along a $5 \\times 6$ face. What is the total surface area of the resulting solid?",
  choices: [
    { id: "A", text: "$404$" },
    { id: "B", text: "$434$" },
    { id: "C", text: "$464$" },
    { id: "D", text: "$494$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: 3D Composite Surface Area**\n\n**Choice B is correct.**\n\n**The Full Solution:**\nSurface area of Prism A ($5 \\times 6 \\times 10$):\n$2(5 \\times 6 + 5 \\times 10 + 6 \\times 10) = 2(30 + 50 + 60) = 2(140) = 280$.\n\nSurface area of Prism B ($5 \\times 6 \\times 7$):\n$2(5 \\times 6 + 5 \\times 7 + 6 \\times 7) = 2(30 + 35 + 42) = 2(107) = 214$.\n\nTotal before gluing: $280 + 214 = 494$.\nThe glued face ($5 \\times 6 = 30$) is hidden on BOTH prisms, so subtract $2 \\times 30 = 60$.\nTotal surface area: $494 - 60 = 434$.\n\n**Why the wrong answers are tempting:**\n• A: Subtracts 90 instead of 60 (wrong face area).\n• C: Subtracts only one face ($494 - 30 = 464$).\n• D: Doesn't subtract the glued faces at all ($280 + 214 = 494$).\n\n**Test Day Takeaway:** When solids are glued along a face, subtract that face's area TWICE — once for each solid.",
  skills: ["surface-area"]
},
{
  id: 21,
  type: "fill-in",
  difficulty: "hard",
  question: "If 504 is $p\\%$ greater than 72, what is the value of $p$?",
  correctAnswer: "600",
  explanation: "**The correct answer is $600$.**\n\n**The Full Solution:**\n\"504 is $p\\%$ greater than 72\" means:\n$72 + \\frac{p}{100} \\cdot 72 = 504$\n$72\\left(1 + \\frac{p}{100}\\right) = 504$\n$1 + \\frac{p}{100} = \\frac{504}{72} = 7$\n$\\frac{p}{100} = 6$\n$p = 600$.\n\n**Verification:** $72 + 600\\%$ of $72 = 72 + 432 = 504$. ✓\n\n**Common Mistakes:**\n• Answering 700 (computing $\\frac{504}{72} = 7$ and converting to percent without subtracting the original).\n• Dividing by 504 instead of 72: $\\frac{504 - 72}{504} \\approx 85.7\\%$.",
  skills: ["percents", "word-problems"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  question: "Let $g(x) = 2x + 1$ and $h(x) = x^2 - 3$. If $h(g(a)) = 46$, what is a positive value of $a$?",
  choices: [
    { id: "A", text: "$2$" },
    { id: "B", text: "$3$" },
    { id: "C", text: "$7$" },
    { id: "D", text: "$10$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Function Composition**\n\n**Choice B is correct.**\n\n**The Fast Way (25s):** $g(a) = 2a + 1$. Then $h(g(a)) = (2a+1)^2 - 3 = 46$, so $(2a+1)^2 = 49$. Thus $2a + 1 = \\pm 7$.\nPositive root: $2a + 1 = 7 \\Rightarrow a = 3$.\nNegative root: $2a + 1 = -7 \\Rightarrow a = -4$ (reject, need positive).\n\n**The Full Solution:**\nStep 1: $g(a) = 2a + 1$.\nStep 2: $h(2a + 1) = (2a+1)^2 - 3 = 46$.\nStep 3: $(2a+1)^2 = 49$.\nStep 4: $2a + 1 = 7$ → $a = 3$.\nCheck: $g(3) = 7$, $h(7) = 49 - 3 = 46$. ✓\n\n**Why the wrong answers are tempting:**\n• A: $g(2) = 5$, $h(5) = 22 \neq 46$.\n• C: Confuses the intermediate value $g(a) = 7$ with $a = 7$.\n• D: Solves a different equation.\n\n**Test Day Takeaway:** In function compositions, work inside out: first evaluate the inner function, then set up and solve the outer equation.",
  skills: ["function-interpretation", "solving-equations"]
}
      ]
    }
  ]
};

export default practiceTest1;
