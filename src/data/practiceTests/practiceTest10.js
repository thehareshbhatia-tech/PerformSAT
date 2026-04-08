// Practice Test 10 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Questions calibrated to College Board official practice test difficulty
// Contexts: aviation, marine biology, bakeries, movie theaters

export const practiceTest10 = {
  id: "practice-test-10",
  title: "Practice Test 10",
  description: "Full-length SAT Math practice test with 2 modules",
  totalQuestions: 44,
  timePerModule: 35,
  modules: [
    {
      id: "module-1",
      title: "Module 1",
      timeLimit: 35,
      questions: [
// Practice Test 10 — Math Module 1
// Theme: Data Analysis + Advanced Algebra
// 22 questions: Easy (1-5), Medium (6-14), Hard (15-22)

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  question: "A survey of 400 students found that 35% prefer online classes. How many students prefer online classes?",
  choices: [
    { id: "A", text: "105" },
    { id: "B", text: "130" },
    { id: "C", text: "140" },
    { id: "D", text: "145" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Percent of a Total**\n\n**Choice C is correct.**\n\n**The Fast Way (10s):** $0.35 \\times 400 = 140$.\n\n**The Full Solution:**\n35% of 400 means $\\frac{35}{100} \\times 400 = \\frac{14{,}000}{100} = 140$.\n\n**Why the wrong answers are tempting:**\n• A: Computes $0.35 \\times 300$ instead of 400.\n• B: Misreads 35% as 32.5%.\n• D: Rounds up or adds 5 by mistake.\n\n**Test Day Takeaway:** Percent-of-total is always (rate)(whole). Multiply directly.",
  skills: ["percents"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  question: "The table below shows the number of books read by five students during a semester.\n\n| Student | Books Read |\n|---|---|\n| Amy | 12 |\n| Ben | 8 |\n| Cara | 15 |\n| Dan | 10 |\n| Ella | 5 |\n\nWhat is the median number of books read?",
  choices: [
    { id: "A", text: "8" },
    { id: "B", text: "10" },
    { id: "C", text: "12" },
    { id: "D", text: "15" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Median from Data**\n\n**Choice B is correct.**\n\n**The Fast Way (15s):** Order the values: 5, 8, 10, 12, 15. The middle value (3rd of 5) is 10.\n\n**The Full Solution:**\nList all values in order: 5, 8, 10, 12, 15. With 5 data points, the median is the $\\frac{5+1}{2} = 3$rd value, which is 10.\n\n**Why the wrong answers are tempting:**\n• A: Picks the second value instead of the third.\n• C: Picks Amy's value without ordering.\n• D: Picks the largest value.\n\n**Test Day Takeaway:** Always sort the data before finding the median.",
  skills: ["statistics"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  question: "If $\\frac{3x}{14} = \\frac{9}{7}$, what is the value of $x$?",
  choices: [
    { id: "A", text: "4" },
    { id: "B", text: "5" },
    { id: "C", text: "6" },
    { id: "D", text: "7" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Basic Proportion**\n\n**Choice C is correct.**\n\n**The Fast Way (10s):** Cross-multiply: $3x \\cdot 7 = 14 \\cdot 9$, so $21x = 126$, giving $x = 6$.\n\n**The Full Solution:**\n$\\frac{3x}{14} = \\frac{9}{7}$\n\nMultiply both sides by 14: $3x = 14 \\cdot \\frac{9}{7} = 2 \\cdot 9 = 18$.\n\nDivide by 3: $x = 6$.\n\n**Why the wrong answers are tempting:**\n• A: Divides 14 by 3 and rounds.\n• B: Arithmetic slip in cross-multiplication.\n• D: Confuses 14/2 = 7 with the answer.\n\n**Test Day Takeaway:** Cross-multiply to clear fractions quickly.",
  skills: ["solving-equations"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  question: "A taxi charges a flat fee of \\$4.50 plus \\$2.75 per mile. Which expression represents the total cost, in dollars, for a ride of $m$ miles?",
  choices: [
    { id: "A", text: "$2.75m$" },
    { id: "B", text: "$4.50m + 2.75$" },
    { id: "C", text: "$2.75m + 4.50$" },
    { id: "D", text: "$7.25m$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Word-to-Expression**\n\n**Choice C is correct.**\n\n**The Fast Way (10s):** Flat fee is the constant (4.50), per-mile rate is the coefficient of $m$ (2.75). Total: $2.75m + 4.50$.\n\n**The Full Solution:**\nThe total cost = (cost per mile)(number of miles) + flat fee = $2.75m + 4.50$.\n\n**Why the wrong answers are tempting:**\n• A: Forgets the flat fee entirely.\n• B: Swaps the flat fee and per-mile rate.\n• D: Adds the two numbers and treats the sum as a per-mile rate.\n\n**Test Day Takeaway:** In linear cost models, the per-unit rate multiplies the variable; the fixed fee is the constant.",
  skills: ["word-problems", "linear-functions"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  question: "The function $g(t) = 250 - 15t$ models the gallons of water remaining in a tank after $t$ hours. What does the number 15 represent in this context?",
  choices: [
    { id: "A", text: "The tank loses 15 gallons per hour." },
    { id: "B", text: "The tank starts with 15 gallons." },
    { id: "C", text: "After 15 hours the tank is empty." },
    { id: "D", text: "The tank holds a maximum of 15 gallons." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice A is correct.**\n\n**The Fast Way (10s):** The coefficient of $t$ is the rate of change. Since it is $-15$, the tank loses 15 gallons per hour.\n\n**The Full Solution:**\nIn $g(t) = 250 - 15t$, the slope is $-15$. This means for each additional hour, the water decreases by 15 gallons. The number 15 represents the rate at which water drains.\n\n**Why the wrong answers are tempting:**\n• B: Confuses the slope with the $y$-intercept (250 is the starting amount).\n• C: While $250/15 \\approx 16.7$ hours to empty, the question asks about the number 15 itself.\n• D: The maximum is 250, not 15.\n\n**Test Day Takeaway:** In $f(x) = b + mx$, the coefficient of the variable is the rate of change.",
  skills: ["function-interpretation", "linear-functions"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  question: "A researcher collected data on hours studied and exam scores for 20 students. The line of best fit is $y = 5.8x + 42$, where $x$ is hours studied and $y$ is the predicted exam score. One student studied for 6 hours and scored 82. What is the residual for this student?",
  choices: [
    { id: "A", text: "$-6.8$" },
    { id: "B", text: "$5.2$" },
    { id: "C", text: "$-5.2$" },
    { id: "D", text: "$6.8$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Residual from Line of Best Fit**\n\n**Choice B is correct.**\n\n**The Fast Way (15s):** Predicted: $5.8(6) + 42 = 34.8 + 42 = 76.8$. Residual = actual $-$ predicted = $82 - 76.8 = 5.2$.\n\n**The Full Solution:**\nStep 1: Find the predicted value at $x = 6$: $y = 5.8(6) + 42 = 34.8 + 42 = 76.8$.\nStep 2: Residual = actual $-$ predicted = $82 - 76.8 = 5.2$.\nA positive residual means the actual score was above the prediction.\n\n**Why the wrong answers are tempting:**\n• A: Computes predicted $-$ actual (reverses the formula).\n• C: Reverses the subtraction and gets negative.\n• D: Uses $5.8 \\times 7$ by mistake.\n\n**Test Day Takeaway:** Residual = actual $-$ predicted. Positive means above the line.",
  skills: ["scatterplots", "statistics"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  question: "\n\n| | Supports Policy | Opposes Policy | No Opinion | Total |\n|---|---|---|---|---|\n| Under 30 | 85 | 60 | 15 | 160 |\n| 30 and Over | 120 | 95 | 25 | 240 |\n| Total | 205 | 155 | 40 | 400 |\n\nBased on the table above, what fraction of those who oppose the policy are under 30?",
  choices: [
    { id: "A", text: "$\\frac{60}{160}$" },
    { id: "B", text: "$\\frac{60}{155}$" },
    { id: "C", text: "$\\frac{60}{400}$" },
    { id: "D", text: "$\\frac{95}{155}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Two-Way Table Conditional Fraction**\n\n**Choice B is correct.**\n\n**The Fast Way (15s):** \"Of those who oppose\" means the denominator is the Opposes column total = 155. Under 30 who oppose = 60. Fraction = $\\frac{60}{155}$.\n\n**The Full Solution:**\nThe condition is \"of those who oppose the policy,\" so we restrict to the Opposes column (total 155). Among those, 60 are under 30. The fraction is $\\frac{60}{155}$.\n\n**Why the wrong answers are tempting:**\n• A: Uses 160 (the Under 30 row total) as the denominator.\n• C: Uses 400 (grand total) as the denominator.\n• D: Gives the fraction who are 30+ among opposers.\n\n**Test Day Takeaway:** Read the condition carefully — it determines your denominator.",
  skills: ["two-way-tables", "probability"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "medium",
  question: "If $4(2x - 1) + 5 = 3x + 16$, what is the value of $x$?",
  correctAnswer: "3",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\nThe correct answer is $3$.\n\n**Solution:**\n$4(2x - 1) + 5 = 3x + 16$\n$8x - 4 + 5 = 3x + 16$\n$8x + 1 = 3x + 16$\n$5x = 15$\n$x = 3$\n\n**Verification:** LHS = $4(2(3) - 1) + 5 = 4(5) + 5 = 25$. RHS = $3(3) + 16 = 9 + 16 = 25$. ✓\n\n**Common Mistakes:**\n• Distributing 4 incorrectly as $8x - 1$ instead of $8x - 4$.\n• Sign errors when combining $-4 + 5$.",
  skills: ["solving-equations"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  question: "A population of bacteria doubles every 3 hours. If the initial population is 500, which function models the population $P$ after $t$ hours?",
  choices: [
    { id: "A", text: "$P(t) = 500(2)^{3t}$" },
    { id: "B", text: "$P(t) = 500(2)^{t/3}$" },
    { id: "C", text: "$P(t) = 500(3)^{t/2}$" },
    { id: "D", text: "$P(t) = 500 + 2t$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice B is correct.**\n\n**The Fast Way (15s):** Doubles every 3 hours means base 2, and the exponent is $t/3$ so that when $t = 3$, the exponent is 1 (one doubling).\n\n**The Full Solution:**\nGeneral form: $P(t) = P_0 \\cdot b^{t/d}$ where $P_0 = 500$, $b = 2$ (doubles), $d = 3$ hours.\nSo $P(t) = 500(2)^{t/3}$.\n\nCheck: at $t = 3$, $P = 500(2)^1 = 1000$ ✓. At $t = 6$, $P = 500(2)^2 = 2000$ ✓.\n\n**Why the wrong answers are tempting:**\n• A: Uses $3t$ instead of $t/3$, growing far too fast.\n• C: Swaps the base and period.\n• D: Uses linear growth instead of exponential.\n\n**Test Day Takeaway:** \"Doubles every $d$ periods\" means base 2, exponent $t/d$.",
  skills: ["exponential-functions"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  question: "A study of 15 cities comparing average temperature ($x$, in degrees F) to average monthly electricity cost ($y$, in dollars) produces the line of best fit a slope of 1.4 and a $y$-intercept of 12. Which of the following best interprets the slope?",
  choices: [
    { id: "A", text: "For every 1 degree F increase in average temperature, the predicted electricity cost increases by \\$1.40." },
    { id: "B", text: "For every \\$1 increase in electricity cost, the average temperature increases by 1.4 degrees F." },
    { id: "C", text: "A city with an average temperature of 0 degrees F has a predicted electricity cost of \\$1.40." },
    { id: "D", text: "The average electricity cost across all cities is \\$1.40." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice A is correct.**\n\n**The Fast Way (10s):** Slope = change in $y$ / change in $x$ = change in cost per 1 degree F change in temperature = \\$1.40 per degree F.\n\n**The Full Solution:**\nThe slope of 1.4 means that for each 1-unit increase in $x$ (temperature), the predicted $y$ (electricity cost) increases by 1.4. In context: for every 1 degree F increase, the predicted monthly electricity cost increases by \\$1.40.\n\n**Why the wrong answers are tempting:**\n• B: Reverses the roles of $x$ and $y$.\n• C: Describes the $y$-intercept, not the slope.\n• D: Confuses slope with a measure of center.\n\n**Test Day Takeaway:** Slope = predicted change in $y$ per unit change in $x$. Keep the units straight.",
  skills: ["scatterplots", "slope"]
},
{
  id: 11,
  type: "fill-in",
  difficulty: "medium",
  question: "A store sells two types of gift cards. Small gift cards cost \\$15 each and large gift cards cost \\$25 each. On Monday the store sold a total of 30 gift cards for a total of \\$550. How many large gift cards were sold?",
  correctAnswer: "10",
  explanation: "**SAT Pattern: Systems of Linear Equations (Word Problem)**\n\nThe correct answer is $10$.\n\n**Solution:**\nLet $s$ = number of small gift cards and $\\ell$ = number of large gift cards.\n$s + \\ell = 30$\n$15s + 25\\ell = 550$\n\nFrom the first equation: $s = 30 - \\ell$.\nSubstitute: $15(30 - \\ell) + 25\\ell = 550$\n$450 - 15\\ell + 25\\ell = 550$\n$450 + 10\\ell = 550$\n$10\\ell = 100$\n$\\ell = 10$\n\n**Verification:** $s = 20$, $\\ell = 10$. Total cards: $20 + 10 = 30$ ✓. Total cost: $15(20) + 25(10) = 300 + 250 = 550$ ✓.\n\n**Common Mistakes:**\n• Setting up $25s + 15\\ell = 550$ (swapping prices).\n• Solving for $s$ instead of $\\ell$.",
  skills: ["systems-of-equations", "word-problems"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  question: "Line $p$ passes through the points $(2, -1)$ and $(6, 7)$. What is the equation of line $p$ in slope-intercept form?",
  choices: [
    { id: "A", text: "$y = 2x - 5$" },
    { id: "B", text: "$y = 2x + 3$" },
    { id: "C", text: "$y = \\frac{1}{2}x - 2$" },
    { id: "D", text: "$y = -2x + 3$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (20s):** Slope $= \\frac{7 - (-1)}{6 - 2} = \\frac{8}{4} = 2$. Use point $(2, -1)$: $-1 = 2(2) + b \\Rightarrow b = -5$. So $y = 2x - 5$.\n\n**The Full Solution:**\nSlope: $m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{7 - (-1)}{6 - 2} = \\frac{8}{4} = 2$.\nUsing point-slope with $(2, -1)$: $y - (-1) = 2(x - 2)$, so $y + 1 = 2x - 4$, giving $y = 2x - 5$.\nCheck with $(6, 7)$: $2(6) - 5 = 7$ ✓.\n\n**Why the wrong answers are tempting:**\n• B: Sign error when computing $b$, getting $+3$ instead of $-5$.\n• C: Uses the reciprocal slope $\\frac{1}{2}$.\n• D: Uses a negative slope.\n\n**Test Day Takeaway:** Find slope first, then plug one point into $y = mx + b$ to find $b$.",
  skills: ["linear-functions", "slope", "coordinate-geometry"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  question: "A dataset has a mean of 72 and a standard deviation of 8. According to the empirical rule (assuming a normal distribution), approximately what percent of the data falls between 56 and 88?",
  choices: [
    { id: "A", text: "68%" },
    { id: "B", text: "81.5%" },
    { id: "C", text: "95%" },
    { id: "D", text: "99.7%" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Standard Deviation and Empirical Rule**\n\n**Choice C is correct.**\n\n**The Fast Way (15s):** $56 = 72 - 2(8)$ and $88 = 72 + 2(8)$. That is within 2 standard deviations of the mean, so approximately 95%.\n\n**The Full Solution:**\nLower bound: $72 - 56 = 16 = 2 \\times 8$ (2 SD below mean).\nUpper bound: $88 - 72 = 16 = 2 \\times 8$ (2 SD above mean).\nThe empirical rule states that approximately 95% of data in a normal distribution falls within 2 standard deviations of the mean.\n\n**Why the wrong answers are tempting:**\n• A: This is for 1 standard deviation ($64$ to $80$).\n• B: Might come from adding 68% + half of something.\n• D: This is for 3 standard deviations ($48$ to $96$).\n\n**Test Day Takeaway:** 1 SD = 68%, 2 SD = 95%, 3 SD = 99.7%.",
  skills: ["statistics"]
},
{
  id: 14,
  type: "fill-in",
  difficulty: "medium",
  question: "If $f(x) = 2x^2 - 3x + 4$ and $g(x) = x + 1$, what is the value of $f(g(2))$?",
  correctAnswer: "13",
  explanation: "**SAT Pattern: Composite Function Evaluation**\n\nThe correct answer is $13$.\n\n**Solution:**\nStep 1: Find $g(2) = 2 + 1 = 3$.\nStep 2: Find $f(3) = 2(3)^2 - 3(3) + 4 = 2(9) - 9 + 4 = 18 - 9 + 4 = 13$.\n\n**Verification:** $g(2) = 3$ and $f(3) = 18 - 9 + 4 = 13$. ✓\n\n**Common Mistakes:**\n• Computing $f(2)$ first instead of $g(2)$: $f(2) = 8 - 6 + 4 = 6$, then $g(6) = 7$ — wrong order of operations.\n• Evaluating $g(f(2))$ instead of $f(g(2))$.",
  skills: ["function-interpretation"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  question: "A researcher models the concentration of a medication in the bloodstream by $C(t) = 200(0.85)^t$, where $t$ is the number of hours after the medication is taken and $C(t)$ is in milligrams per liter. The medication is effective when the concentration is at least 80 mg/L. For how many complete hours after taking the medication does it remain effective?",
  choices: [
    { id: "A", text: "4" },
    { id: "B", text: "5" },
    { id: "C", text: "6" },
    { id: "D", text: "7" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Decay Inequality**\n\n**Choice B is correct.**\n\n**The Fast Way (30s):** Compute $C(t)$ for successive integer values:\n$C(0) = 200$\n$C(1) = 170$\n$C(2) = 144.5$\n$C(3) \\approx 122.8$\n$C(4) \\approx 104.4$\n$C(5) \\approx 88.7$\n$C(6) \\approx 75.4$\nAt $t = 5$, $C \\geq 80$. At $t = 6$, $C < 80$. So 5 complete hours.\n\n**The Full Solution:**\nWe need $200(0.85)^t \\geq 80$, so $(0.85)^t \\geq 0.4$.\nTaking logarithms: $t \\leq \\frac{\\ln(0.4)}{\\ln(0.85)} = \\frac{-0.9163}{-0.1625} \\approx 5.64$.\nThe medication remains effective for 5 complete hours (at $t = 5$ it is still effective; at $t = 6$ it is not).\n\n**Why the wrong answers are tempting:**\n• A: Stops computing too early.\n• C: Rounds 5.64 up to 6, but at $t = 6$ the concentration is below 80.\n• D: Miscalculates the decay rate.\n\n**Test Day Takeaway:** For \"complete hours\" questions, test integer values near the boundary.",
  skills: ["exponential-functions", "solving-equations"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  question: "The expression $\\frac{(3x^2y^3)^2 \\cdot (2xy^{-1})^3}{6x^4y^2}$ is equivalent to which of the following?",
  choices: [
    { id: "A", text: "$12x^3y$" },
    { id: "B", text: "$12x^3y^4$" },
    { id: "C", text: "$6x^3y$" },
    { id: "D", text: "$12x^7y$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Exponent Rules with Multiple Variables**\n\n**Choice A is correct.**\n\n**The Full Solution:**\nNumerator: $(3x^2y^3)^2 = 9x^4y^6$ and $(2xy^{-1})^3 = 8x^3y^{-3}$.\nProduct: $9x^4y^6 \\cdot 8x^3y^{-3} = 72x^7y^3$.\nDivide by $6x^4y^2$: $\\frac{72x^7y^3}{6x^4y^2} = 12x^{7-4}y^{3-2} = 12x^3y$.\n\n**Why the wrong answers are tempting:**\n• B: Adds $y$ exponents as $6 + 3 = 9$ instead of $6 + (-3) = 3$, then subtracts 2 to get $y^7$ or $y^4$.\n• C: Divides $72/6$ as $6$ instead of $12$.\n• D: Forgets to subtract the $x^4$ in the denominator.\n\n**Test Day Takeaway:** Apply exponent rules step by step: power of a product, multiply same bases, then divide.",
  skills: ["exponent-rules"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  question: "The equation $2x^2 + bx + 18 = 0$ has exactly one real solution. If $b > 0$, what is the value of $b$?",
  choices: [
    { id: "A", text: "6" },
    { id: "B", text: "10" },
    { id: "C", text: "12" },
    { id: "D", text: "14" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Discriminant Equals Zero**\n\n**Choice C is correct.**\n\n**The Fast Way (20s):** One real solution means discriminant = 0. $b^2 - 4(2)(18) = 0 \\Rightarrow b^2 = 144 \\Rightarrow b = 12$ (since $b > 0$).\n\n**The Full Solution:**\nFor $ax^2 + bx + c = 0$ to have exactly one real solution, the discriminant must equal zero:\n$b^2 - 4ac = 0$\n$b^2 - 4(2)(18) = 0$\n$b^2 - 144 = 0$\n$b^2 = 144$\n$b = \\pm 12$\nSince $b > 0$, $b = 12$.\n\nVerification: $2x^2 + 12x + 18 = 0 \\Rightarrow x^2 + 6x + 9 = 0 \\Rightarrow (x + 3)^2 = 0$, so $x = -3$ is the only solution. ✓\n\n**Why the wrong answers are tempting:**\n• A: Confuses $\\sqrt{4 \\cdot 2 \\cdot 18}$ with $\\sqrt{4 \\cdot 18 / 2}$.\n• B: Miscalculates $4(2)(18)$ as 100.\n• D: Uses $b^2 = 4(2)(18) + 4(2)$ or similar error.\n\n**Test Day Takeaway:** Exactly one solution means discriminant $b^2 - 4ac = 0$.",
  skills: ["quadratic-equations", "discriminant"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "hard",
  question: "The system of equations below has solution $(x, y)$.\n\n$x + y = 3$\n$x^2 - y = 3$\n\nIf $x > 0$, what is the value of $y$?",
  correctAnswer: "1",
  explanation: "**SAT Pattern: Quadratic-Linear System**\n\nThe correct answer is $1$.\n\n**Solution:**\nFrom the first equation: $y = 3 - x$.\nSubstitute into the second: $x^2 - (3 - x) = 3$\n$x^2 + x - 3 = 3$\n$x^2 + x - 6 = 0$\n$(x + 3)(x - 2) = 0$\n$x = -3$ or $x = 2$\n\nSince $x > 0$: $x = 2$, so $y = 3 - 2 = 1$.\n\n**Verification:** $x + y = 2 + 1 = 3$ ✓ and $x^2 - y = 4 - 1 = 3$ ✓.\n\n**Common Mistakes:**\n• Using $x = -3$ and getting $y = 6$.\n• Substitution errors when replacing $y$.\n• Forgetting the condition $x > 0$.",
  skills: ["systems-of-equations", "quadratic-equations"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  question: "In the $xy$-plane, a parabola has vertex $(3, -4)$ and passes through the point $(5, 8)$. What is the $y$-intercept of this parabola?",
  choices: [
    { id: "A", text: "$(0, 23)$" },
    { id: "B", text: "$(0, 27)$" },
    { id: "C", text: "$(0, 20)$" },
    { id: "D", text: "$(0, 32)$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Vertex Form to Find y-Intercept**\n\n**Choice A is correct.**\n\n**The Full Solution:**\nVertex form: $y = a(x - 3)^2 - 4$.\nPlug in $(5, 8)$: $8 = a(5 - 3)^2 - 4 = 4a - 4$, so $4a = 12$, giving $a = 3$.\nEquation: $y = 3(x - 3)^2 - 4$.\n$y$-intercept (set $x = 0$): $y = 3(0 - 3)^2 - 4 = 3(9) - 4 = 27 - 4 = 23$.\n\nSo the $y$-intercept is $(0, 23)$.\n\n**Why the wrong answers are tempting:**\n• B: Forgets to subtract 4, getting just $3(9) = 27$.\n• C: Uses $a = 2$ from a computation error.\n• D: Uses $(x - 3)^2$ evaluated at $x = 0$ as $(-3)^2 = 9$ but multiplies by a wrong value of $a$.\n\n**Test Day Takeaway:** Start with vertex form $y = a(x - h)^2 + k$, use the other point to find $a$, then evaluate at $x = 0$.",
  skills: ["vertex-form", "quadratic-equations", "coordinate-geometry"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  question: "For the polynomial $p(x) = 2x^3 - 5x^2 - 14x + 8$, it is known that $(x - 4)$ is a factor. Which of the following gives the complete factorization of $p(x)$?",
  choices: [
    { id: "A", text: "$(x - 4)(2x^2 + 3x - 2)$" },
    { id: "B", text: "$(x - 4)(2x - 1)(x + 2)$" },
    { id: "C", text: "$(x - 4)(2x + 1)(x - 2)$" },
    { id: "D", text: "$(x - 4)(2x^2 - 3x + 2)$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Polynomial Factoring with Given Factor**\n\n**Choice B is correct.**\n\n**The Full Solution:**\nDivide $2x^3 - 5x^2 - 14x + 8$ by $(x - 4)$ using synthetic division with $x = 4$:\n\nCoefficients: $2, -5, -14, 8$.\nBring down 2. Multiply $2 \\times 4 = 8$. Add: $-5 + 8 = 3$.\nMultiply $3 \\times 4 = 12$. Add: $-14 + 12 = -2$.\nMultiply $-2 \\times 4 = -8$. Add: $8 + (-8) = 0$.\n\nQuotient: $2x^2 + 3x - 2$.\nFactor: find two numbers that multiply to $2 \\times (-2) = -4$ and add to $3$: those are $4$ and $-1$.\n$2x^2 + 4x - x - 2 = 2x(x + 2) - 1(x + 2) = (2x - 1)(x + 2)$.\n\nComplete factorization: $(x - 4)(2x - 1)(x + 2)$.\n\nVerification: $p(4) = 2(64) - 5(16) - 14(4) + 8 = 128 - 80 - 56 + 8 = 0$ ✓.\n$p(1/2) = 2(1/8) - 5(1/4) - 14(1/2) + 8 = 1/4 - 5/4 - 7 + 8 = -1 + 1 = 0$ ✓.\n\n**Why the wrong answers are tempting:**\n• A: Correct first step but not fully factored.\n• C: Sign errors in the quadratic factoring.\n• D: Incorrect synthetic division.\n\n**Test Day Takeaway:** Use synthetic division to reduce degree, then factor the quotient.",
  skills: ["factoring", "polynomial-operations"]
},
{
  id: 21,
  type: "fill-in",
  difficulty: "hard",
  question: "In the $xy$-plane, circle $C$ has equation $(x - 3)^2 + (y + 2)^2 = 25$. Line $\\ell$ has equation $y = \\frac{3}{4}x + b$ and is tangent to circle $C$. If $b > 0$, what is the value of $b$?",
  correctAnswer: "2",
  explanation: "**SAT Pattern: Circle Tangent Line**\n\nThe correct answer is $2$.\n\n**Solution:**\nCircle center: $(3, -2)$, radius: $5$.\nA tangent line touches the circle at exactly one point, so the distance from the center to the line equals the radius.\n\nRewrite the line as $\\frac{3}{4}x - y + b = 0$, or equivalently $3x - 4y + 4b = 0$ (multiply through by 4).\n\nDistance from $(3, -2)$ to $3x - 4y + 4b = 0$:\n$d = \\frac{|3(3) - 4(-2) + 4b|}{\\sqrt{9 + 16}} = \\frac{|9 + 8 + 4b|}{5} = \\frac{|17 + 4b|}{5}$\n\nSet $d = 5$: $\\frac{|17 + 4b|}{5} = 5$, so $|17 + 4b| = 25$.\n\nCase 1: $17 + 4b = 25 \\Rightarrow 4b = 8 \\Rightarrow b = 2$.\nCase 2: $17 + 4b = -25 \\Rightarrow 4b = -42 \\Rightarrow b = -10.5$.\n\nSince $b > 0$: $b = 2$.\n\n**Verification:** Line $y = \\frac{3}{4}x + 2$. Substitute into circle equation:\n$(x-3)^2 + (\\frac{3}{4}x + 2 + 2)^2 = 25$\n$(x-3)^2 + (\\frac{3}{4}x + 4)^2 = 25$\n$x^2 - 6x + 9 + \\frac{9}{16}x^2 + 6x + 16 = 25$\n$\\frac{25}{16}x^2 + 25 = 25$\n$\\frac{25}{16}x^2 = 0 \\Rightarrow x = 0$.\nExactly one solution, confirming tangency. ✓\n\n**Common Mistakes:**\n• Using the wrong distance formula.\n• Choosing $b = -10.5$ without checking the $b > 0$ condition.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  question: "A survey asked 500 people whether they exercise regularly and whether they follow a specific diet. The results showed:\n\n- 210 exercise regularly\n- 180 follow the diet\n- 95 do both\n\nIf a person is selected at random from those who exercise regularly, what is the probability that this person does NOT follow the diet?",
  choices: [
    { id: "A", text: "$\\frac{23}{42}$" },
    { id: "B", text: "$\\frac{19}{42}$" },
    { id: "C", text: "$\\frac{23}{100}$" },
    { id: "D", text: "$\\frac{17}{50}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Conditional Probability with Overlapping Groups**\n\n**Choice A is correct.**\n\n**The Full Solution:**\nAmong the 210 who exercise regularly, 95 also follow the diet.\nThose who exercise but do NOT follow the diet: $210 - 95 = 115$.\n\nProbability = $\\frac{115}{210}$. Simplify by dividing numerator and denominator by 5: $\\frac{23}{42}$.\n\n**Why the wrong answers are tempting:**\n• B: $\\frac{19}{42} = \\frac{95}{210}$ — this gives the probability of following the diet given exercise (the complement of the correct answer).\n• C: Uses 500 in the denominator (as $\\frac{115}{500} = \\frac{23}{100}$) instead of restricting to exercisers.\n• D: Miscalculates $\\frac{170}{500}$ or uses incorrect group sizes.\n\n**Test Day Takeaway:** Conditional probability restricts the sample space. \"Given exercise\" means the denominator is the number of exercisers.",
  skills: ["probability", "statistics"]
}
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
{
  id: 1, type: "multiple-choice", difficulty: "easy",
  question: "A survey found that 240 out of 800 people preferred Brand A. What percent of the people surveyed preferred Brand A?",
  choices: [{ id: "A", text: "24%" }, { id: "B", text: "30%" }, { id: "C", text: "33.3%" }, { id: "D", text: "3%" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Basic Percent Calculation**\n\n**Choice B is correct.**\n\n**The Fast Way:** $\\frac{240}{800} = \\frac{24}{80} = \\frac{3}{10} = 30\\%$.\n\n**The Full Solution:**\nPercent = $\\frac{\\text{part}}{\\text{whole}} \\times 100 = \\frac{240}{800} \\times 100 = 0.30 \\times 100 = 30\\%$.\n\n**Why the wrong answers are tempting:**\n• A: Drops a zero — divides 240 by 1000 instead of 800.\n• C: Confuses with $\\frac{1}{3}$.\n• D: Divides 24 by 800 instead of 240 by 800.\n\n**Test Day Takeaway:** Percent = part divided by whole, times 100.",
  skills: ["percents"]
},
{
  id: 2, type: "multiple-choice", difficulty: "easy",
  question: "A data set shows a negative linear association between variables $x$ and $y$, with values ranging from approximately $(1, 90)$ to $(10, 20)$. Which of the following could be the equation of a line of best fit?",
  choices: [{ id: "A", text: "$y = -8x + 100$" }, { id: "B", text: "$y = 8x + 100$" }, { id: "C", text: "$y = -8x - 100$" }, { id: "D", text: "$y = 8x - 100$" }],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Line of Best Fit Direction**\n\n**Choice A is correct.**\n\n**The Fast Way:** Negative association means negative slope. The $y$-intercept should be near 100 (when $x \\approx 0$, $y \\approx 100$). Only $y = -8x + 100$ has both.\n\n**The Full Solution:**\nA negative linear association requires a negative slope, eliminating B and D. The data starts near $y = 90$ when $x = 1$, so the $y$-intercept should be positive and near 100. Choice A: $y = -8(1) + 100 = 92$ ✓. Choice C: $y = -8(1) - 100 = -108$ ✗.\n\n**Why the wrong answers are tempting:**\n• B: Positive slope doesn't match a negative association.\n• C: The negative intercept would place all values far below the data.\n• D: Both the slope direction and intercept are wrong.\n\n**Test Day Takeaway:** For line-of-best-fit questions, first check the slope sign, then verify the intercept is reasonable.",
  skills: ["linear-functions", "statistics"]
},
{
  id: 3, type: "multiple-choice", difficulty: "easy",
  question: "If $f(x) = x^2 + 3$ and $g(x) = 2x - 1$, what is the value of $f(g(2))$?",
  choices: [{ id: "A", text: "7" }, { id: "B", text: "9" }, { id: "C", text: "12" }, { id: "D", text: "10" }],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Composite Function Evaluation**\n\n**Choice C is correct.**\n\n**The Fast Way:** $g(2) = 2(2) - 1 = 3$. Then $f(3) = 9 + 3 = 12$.\n\n**The Full Solution:**\nFirst compute the inner function: $g(2) = 2(2) - 1 = 3$.\nThen substitute into $f$: $f(g(2)) = f(3) = 3^2 + 3 = 9 + 3 = 12$.\n\n**Why the wrong answers are tempting:**\n• A: Computes $f(2) = 7$ instead of $f(g(2))$.\n• B: Computes $g(2) \\cdot 3 = 9$.\n• D: Adds $f(2) + g(2) = 7 + 3 = 10$.\n\n**Test Day Takeaway:** With composite functions, always evaluate the inner function first, then plug that result into the outer function.",
  skills: ["function-interpretation"]
},
{
  id: 4, type: "multiple-choice", difficulty: "easy",
  question: "Which expression is equivalent to $(3x + 2)(x - 5)$?",
  choices: [{ id: "A", text: "$3x^2 - 13x - 10$" }, { id: "B", text: "$3x^2 - 17x - 10$" }, { id: "C", text: "$3x^2 + 13x - 10$" }, { id: "D", text: "$3x^2 - 15x + 2$" }],
  correctAnswer: "A",
  explanation: "**SAT Pattern: FOIL / Polynomial Multiplication**\n\n**Choice A is correct.**\n\n**The Fast Way:** FOIL: $3x \\cdot x + 3x \\cdot(-5) + 2 \\cdot x + 2 \\cdot(-5) = 3x^2 - 15x + 2x - 10 = 3x^2 - 13x - 10$.\n\n**The Full Solution:**\n$(3x + 2)(x - 5)$\n$= 3x(x) + 3x(-5) + 2(x) + 2(-5)$\n$= 3x^2 - 15x + 2x - 10$\n$= 3x^2 - 13x - 10$\n\n**Why the wrong answers are tempting:**\n• B: Subtracts $2x$ instead of adding: $-15x - 2x = -17x$.\n• C: Uses the wrong signs on the middle terms.\n• D: Doesn't distribute the 2 correctly.\n\n**Test Day Takeaway:** After FOIL, combine like terms carefully — watch signs.",
  skills: ["polynomial-operations", "factoring"]
},
{
  id: 5, type: "multiple-choice", difficulty: "easy",
  question: "The median of the data set $\\{3, 7, 9, 12, 15\\}$ is 9. If the value 20 is added to the data set, what is the new median?",
  choices: [{ id: "A", text: "9" }, { id: "B", text: "10.5" }, { id: "C", text: "11" }, { id: "D", text: "12" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Effect of Adding a Value on Median**\n\n**Choice B is correct.**\n\n**The Fast Way:** New data set: $\\{3, 7, 9, 12, 15, 20\\}$ has 6 values. The median is the average of the 3rd and 4th values: $\\frac{9 + 12}{2} = 10.5$.\n\n**The Full Solution:**\nThe original data set $\\{3, 7, 9, 12, 15\\}$ has median 9 (the middle value). Adding 20 gives $\\{3, 7, 9, 12, 15, 20\\}$. With an even number of values, the median is the average of the two middle values (3rd and 4th): $\\frac{9 + 12}{2} = 10.5$.\n\n**Why the wrong answers are tempting:**\n• A: The median was 9 before, but adding a value above the median shifts it up.\n• C: Averages the wrong pair of values.\n• D: Picks the 4th value instead of averaging the 3rd and 4th.\n\n**Test Day Takeaway:** When a data set has an even number of values, the median is the average of the two middle values.",
  skills: ["statistics"]
},
{
  id: 6, type: "multiple-choice", difficulty: "medium",
  question: "The table below shows the results of a study on exercise frequency and sleep quality among 400 adults.\n\n| | Good Sleep | Poor Sleep | Total |\n|---|---|---|---|\n| Exercise 3+ times/week | 150 | 50 | 200 |\n| Exercise < 3 times/week | 80 | 120 | 200 |\n| Total | 230 | 170 | 400 |\n\nWhat is the probability that a randomly selected adult from the study has good sleep quality, given that the adult exercises fewer than 3 times per week?",
  choices: [{ id: "A", text: "$\\frac{80}{400}$" }, { id: "B", text: "$\\frac{80}{230}$" }, { id: "C", text: "$\\frac{80}{200}$" }, { id: "D", text: "$\\frac{150}{230}$" }],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way:** Given: exercises < 3 times/week (total 200). Of those, 80 have good sleep. Probability = $\\frac{80}{200}$.\n\n**The Full Solution:**\nConditional probability $P(\\text{Good Sleep} | \\text{Exercise} < 3) = \\frac{\\text{Good Sleep AND Exercise} < 3}{\\text{Exercise} < 3} = \\frac{80}{200}$.\n\n**Why the wrong answers are tempting:**\n• A: Divides by total (400) instead of the conditional group.\n• B: Divides by total good sleepers (230) — wrong denominator.\n• D: Uses the exercise 3+ group's good sleep count with the total good sleep count.\n\n**Test Day Takeaway:** In conditional probability, the denominator is always the total of the \"given\" group.",
  skills: ["two-way-tables", "probability"]
},
{
  id: 7, type: "multiple-choice", difficulty: "medium",
  question: "The function $g$ is defined by $g(x) = a \\cdot 3^x$. If $g(4) - g(2) = 720$, what is the value of $a$?",
  choices: [{ id: "A", text: "9" }, { id: "B", text: "10" }, { id: "C", text: "8" }, { id: "D", text: "90" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Function — Solving for Parameter**\n\n**Choice B is correct.**\n\n**The Fast Way:** $g(4) - g(2) = a \\cdot 81 - a \\cdot 9 = 72a = 720$, so $a = 10$.\n\n**The Full Solution:**\n$g(4) = a \\cdot 3^4 = 81a$\n$g(2) = a \\cdot 3^2 = 9a$\n$g(4) - g(2) = 81a - 9a = 72a = 720$\n$a = \\frac{720}{72} = 10$\n\n**Why the wrong answers are tempting:**\n• A: Divides 720 by 80 instead of 72.\n• C: Divides 720 by 90 instead of 72.\n• D: Divides 720 by 8 instead of 72.\n\n**Test Day Takeaway:** Factor out common terms before solving — $a(81 - 9) = 72a$ simplifies the algebra.",
  skills: ["exponential-functions", "solving-equations"]
},
{
  id: 8, type: "fill-in", difficulty: "medium",
  question: "The function $f$ is defined by $f(x) = 3x^2 - 12x + 7$. What is the minimum value of $f(x)$?",
  correctAnswer: "-5",
  explanation: "**SAT Pattern: Minimum of a Quadratic — Vertex**\n\n**The correct answer is -5.**\n\n**The Fast Way:** The $x$-coordinate of the vertex is $x = -\\frac{b}{2a} = -\\frac{-12}{6} = 2$. Then $f(2) = 3(4) - 12(2) + 7 = 12 - 24 + 7 = -5$.\n\n**The Full Solution:**\nFor $f(x) = 3x^2 - 12x + 7$ with $a = 3 > 0$, the parabola opens upward, so the vertex gives the minimum.\nVertex $x$-coordinate: $x = \\frac{-(-12)}{2(3)} = 2$.\n$f(2) = 3(2)^2 - 12(2) + 7 = 12 - 24 + 7 = -5$.\n\nAlternatively, complete the square: $f(x) = 3(x^2 - 4x) + 7 = 3(x^2 - 4x + 4 - 4) + 7 = 3(x-2)^2 - 12 + 7 = 3(x-2)^2 - 5$.\nMinimum value is $-5$ when $x = 2$.\n\n**Test Day Takeaway:** For a quadratic $ax^2 + bx + c$ with $a > 0$, the minimum value is at $x = -\\frac{b}{2a}$.",
  skills: ["vertex-form", "quadratic-equations"]
},
{
  id: 9, type: "multiple-choice", difficulty: "medium",
  question: "If $\\frac{2}{x-3} + \\frac{1}{x+1} = \\frac{5}{x^2 - 2x - 3}$, how many real solutions does the equation have?",
  choices: [{ id: "A", text: "0" }, { id: "B", text: "1" }, { id: "C", text: "2" }, { id: "D", text: "Infinitely many" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Rational Equation — Solving with Common Denominator**\n\n**Choice B is correct.**\n\n**The Fast Way:** Note that $x^2 - 2x - 3 = (x-3)(x+1)$. Multiply through by $(x-3)(x+1)$: $2(x+1) + (x-3) = 5$, so $3x - 1 = 5$, giving $x = 2$.\n\n**The Full Solution:**\nFactor the denominator: $x^2 - 2x - 3 = (x-3)(x+1)$.\nMultiply both sides by $(x-3)(x+1)$:\n$2(x+1) + 1(x-3) = 5$\n$2x + 2 + x - 3 = 5$\n$3x - 1 = 5$\n$x = 2$\nSince $x = 2$ doesn't make any denominator zero, it's valid. There is exactly 1 solution.\n\n**Why the wrong answers are tempting:**\n• A: The equation does have a solution — $x = 2$ works.\n• C: The linear equation after clearing fractions has only one solution.\n• D: This is not an identity; the numerators are not identical.\n\n**Test Day Takeaway:** Always factor the denominator in rational equations and check for excluded values.",
  skills: ["solving-equations", "factoring"]
},
{
  id: 10, type: "multiple-choice", difficulty: "medium",
  question: "A sample of 1,200 registered voters was surveyed. The margin of error for the survey was 3 percentage points. If the survey found that 45% of voters supported a ballot measure, which of the following is true?",
  choices: [{ id: "A", text: "Exactly 540 voters in the population support the measure." }, { id: "B", text: "The measure will fail because support is below 50%." }, { id: "C", text: "The true population proportion is plausibly between 42% and 48%." }, { id: "D", text: "If 300 more people were surveyed, the margin of error would increase." }],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Margin of Error Application**\n\n**Choice C is correct.**\n\n**The Fast Way:** $45\\% \\pm 3\\% = [42\\%, 48\\%]$. The confidence interval estimates the true population proportion.\n\n**The Full Solution:**\nThe margin of error of 3 percentage points means the confidence interval is $45\\% - 3\\% = 42\\%$ to $45\\% + 3\\% = 48\\%$. This interval estimates the true population proportion, not the sample proportion.\n\n**Why the wrong answers are tempting:**\n• A: 540 is the sample count ($1200 \\times 0.45$), not the population value.\n• B: The confidence interval includes values below and above — we can't say definitively it will fail.\n• D: Increasing sample size decreases the margin of error.\n\n**Test Day Takeaway:** Larger samples give smaller margins of error. The confidence interval applies to the population, not the sample.",
  skills: ["margin-of-error", "statistics"]
},
{
  id: 11, type: "fill-in", difficulty: "medium",
  question: "If $4^{x+1} = 8^{x-1}$, what is the value of $x$?",
  correctAnswer: "5",
  explanation: "**SAT Pattern: Equal Bases Strategy**\n\n**The correct answer is 5.**\n\n**The Fast Way:** Rewrite with base 2: $2^{2(x+1)} = 2^{3(x-1)}$, so $2(x+1) = 3(x-1)$, giving $2x + 2 = 3x - 3$, thus $x = 5$.\n\n**The Full Solution:**\n$4^{x+1} = 8^{x-1}$\n$(2^2)^{x+1} = (2^3)^{x-1}$\n$2^{2x+2} = 2^{3x-3}$\nSince the bases are equal: $2x + 2 = 3x - 3$\n$2 + 3 = 3x - 2x$\n$x = 5$\n\nVerify: $4^6 = 4096$ and $8^4 = 4096$ ✓\n\n**Test Day Takeaway:** When you see different bases that are powers of the same number, rewrite everything with that common base.",
  skills: ["exponent-rules", "solving-equations"]
},
{
  id: 12, type: "multiple-choice", difficulty: "medium",
  question: "The system of equations $y = 2x + 5$ and $y = 2x - 3$ has how many solutions?",
  choices: [{ id: "A", text: "0" }, { id: "B", text: "1" }, { id: "C", text: "2" }, { id: "D", text: "Infinitely many" }],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Parallel Lines — No Intersection**\n\n**Choice A is correct.**\n\n**The Fast Way:** Both lines have slope 2 but different $y$-intercepts (5 vs. $-3$). Parallel lines never intersect, so there are 0 solutions.\n\n**The Full Solution:**\nSetting equal: $2x + 5 = 2x - 3$ gives $5 = -3$, which is a contradiction. No value of $x$ satisfies both equations simultaneously. The lines are parallel.\n\n**Why the wrong answers are tempting:**\n• B: Students may try substitution and get confused by the contradiction.\n• C: A quadratic system could have 2 solutions, but not two parallel lines.\n• D: This would require identical equations.\n\n**Test Day Takeaway:** Same slope + different intercepts = parallel lines = no solution.",
  skills: ["systems-of-equations", "linear-functions"]
},
{
  id: 13, type: "fill-in", difficulty: "medium",
  question: "The mean score of 20 students on a test is 78. If the teacher removes the two lowest scores, 42 and 56, what is the mean of the remaining 18 scores? Round to the nearest tenth.",
  correctAnswer: "81.2",
  explanation: "**SAT Pattern: Recalculating Mean After Removing Values**\n\n**The correct answer is 81.2.**\n\n**The Fast Way:** Total = $20 \\times 78 = 1560$. Remove 42 and 56: new total = $1560 - 42 - 56 = 1462$. New mean = $\\frac{1462}{18} \\approx 81.2$.\n\n**The Full Solution:**\nOriginal sum = mean $\\times$ count = $78 \\times 20 = 1560$.\nAfter removing two scores: sum = $1560 - 42 - 56 = 1462$.\nNew mean = $\\frac{1462}{18} = 81.2\\overline{2} \\approx 81.2$.\n\n**Test Day Takeaway:** To find a new mean after removing values, work with the total sum: subtract the removed values, then divide by the new count.",
  skills: ["statistics"]
},
{
  id: 14, type: "multiple-choice", difficulty: "medium",
  question: "Which of the following is equivalent to $\\frac{x^2 - 9}{x^2 + 5x + 6}$?",
  choices: [{ id: "A", text: "$\\frac{x - 3}{x + 2}$" }, { id: "B", text: "$\\frac{x + 3}{x + 2}$" }, { id: "C", text: "$\\frac{x - 3}{x + 3}$" }, { id: "D", text: "$\\frac{x + 3}{x - 3}$" }],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Simplifying Rational Expressions**\n\n**Choice A is correct.**\n\n**The Fast Way:** Factor both: $\\frac{(x-3)(x+3)}{(x+2)(x+3)} = \\frac{x-3}{x+2}$ (cancel $x+3$).\n\n**The Full Solution:**\nNumerator: $x^2 - 9 = (x-3)(x+3)$ (difference of squares)\nDenominator: $x^2 + 5x + 6 = (x+2)(x+3)$\n$\\frac{(x-3)(x+3)}{(x+2)(x+3)} = \\frac{x-3}{x+2}$ for $x \neq -3$.\n\n**Why the wrong answers are tempting:**\n• B: Cancels the wrong factor from the numerator.\n• C: Cancels the wrong factor from the denominator.\n• D: Inverts the result.\n\n**Test Day Takeaway:** Always factor before canceling. Only cancel factors that appear in both numerator and denominator.",
  skills: ["factoring", "polynomial-operations"]
},
{
  id: 15, type: "multiple-choice", difficulty: "hard",
  question: "A population of insects decreases by 15% every 4 months. The population is modeled by $P(t) = 2000(r)^{t/4}$, where $t$ is the time in months. What is the value of $r$?",
  choices: [{ id: "A", text: "0.15" }, { id: "B", text: "0.85" }, { id: "C", text: "0.9625" }, { id: "D", text: "1.15" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Decay — Identifying the Base**\n\n**Choice B is correct.**\n\n**The Fast Way:** A 15% decrease means 85% remains. In the model, when $t$ increases by 4, $P$ is multiplied by $r^{4/4} = r$. So $r = 0.85$.\n\n**The Full Solution:**\nAfter 4 months, the population is 85% of what it was:\n$P(4) = 2000 \\cdot r^{4/4} = 2000r$\nThis should equal $2000 \\times 0.85 = 1700$.\nSo $2000r = 1700$, giving $r = 0.85$.\n\n**Why the wrong answers are tempting:**\n• A: This is the rate of decrease, not the remaining fraction.\n• C: This would be the monthly rate if you tried to convert incorrectly.\n• D: This represents growth, not decay.\n\n**Test Day Takeaway:** A $p\\%$ decrease means the base is $1 - \\frac{p}{100}$, not $\\frac{p}{100}$.",
  skills: ["exponential-functions"]
},
{
  id: 16, type: "multiple-choice", difficulty: "hard",
  question: "A quadratic equation $2x^2 - 8x + k = 0$ has two real solutions. The sum of the squares of the solutions is 14. What is the value of $k$?",
  choices: [{ id: "A", text: "1" }, { id: "B", text: "2" }, { id: "C", text: "3" }, { id: "D", text: "6" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Vieta's Formulas — Sum of Squares of Roots**\n\n**Choice B is correct.**\n\n**The Fast Way:** By Vieta's: sum of roots $= \\frac{8}{2} = 4$, product of roots $= \\frac{k}{2}$. Sum of squares $= (r_1+r_2)^2 - 2r_1r_2 = 16 - k = 14$, so $k = 2$.\n\n**The Full Solution:**\nFor $2x^2 - 8x + k = 0$, by Vieta's formulas:\n$r_1 + r_2 = \\frac{8}{2} = 4$ and $r_1 \\cdot r_2 = \\frac{k}{2}$.\n\n$r_1^2 + r_2^2 = (r_1 + r_2)^2 - 2r_1 r_2 = 16 - 2 \\cdot \\frac{k}{2} = 16 - k$.\nSet equal to 14: $16 - k = 14$, so $k = 2$.\n\nVerify: $2x^2 - 8x + 2 = 0 \\Rightarrow x^2 - 4x + 1 = 0$, roots $= 2 \\pm \\sqrt{3}$.\nSum of squares: $(2+\\sqrt{3})^2 + (2-\\sqrt{3})^2 = 7 + 7 = 14$ ✓.\n\n**Why the wrong answers are tempting:**\n• A: Off-by-one error in the calculation.\n• C: Forgets to account for the leading coefficient 2 in Vieta's product formula.\n• D: Uses $r_1 r_2 = k$ instead of $\\frac{k}{2}$.\n\n**Test Day Takeaway:** For $ax^2 + bx + c = 0$: sum of roots $= -\\frac{b}{a}$, product of roots $= \\frac{c}{a}$. Use the identity $r_1^2 + r_2^2 = (r_1+r_2)^2 - 2r_1r_2$.",
  skills: ["quadratic-equations", "solving-equations"]
},
{
  id: 17, type: "fill-in", difficulty: "hard",
  question: "If $\\log_2(x-1) + \\log_2(x+3) = 5$, and $x > 1$, what is the value of $x$?",
  correctAnswer: "5",
  explanation: "**SAT Pattern: Logarithm Properties — Combining Logs**\n\n**The correct answer is 5.**\n\n**The Fast Way:** $\\log_2[(x-1)(x+3)] = 5$, so $(x-1)(x+3) = 32$. Expand: $x^2 + 2x - 3 = 32$, so $x^2 + 2x - 35 = 0$, giving $(x+7)(x-5) = 0$. Since $x > 1$, $x = 5$.\n\n**The Full Solution:**\nUsing the log product rule: $\\log_2(x-1) + \\log_2(x+3) = \\log_2[(x-1)(x+3)] = 5$.\nSo $(x-1)(x+3) = 2^5 = 32$.\n$x^2 + 3x - x - 3 = 32$\n$x^2 + 2x - 35 = 0$\n$(x + 7)(x - 5) = 0$\n$x = -7$ or $x = 5$.\nSince $x > 1$, the answer is $x = 5$.\nCheck: $\\log_2(4) + \\log_2(8) = 2 + 3 = 5$ ✓.\n\n**Test Day Takeaway:** $\\log_b(A) + \\log_b(B) = \\log_b(AB)$. Always check domain restrictions with logarithms.",
  skills: ["solving-equations", "exponent-rules"]
},
{
  id: 18, type: "multiple-choice", difficulty: "hard",
  question: "350 is what percent greater than 50?",
  choices: [{ id: "A", text: "85.7%" }, { id: "B", text: "300%" }, { id: "C", text: "600%" }, { id: "D", text: "700%" }],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Percent Greater Than**\n\n**Choice C is correct.**\n\n**The Fast Way:** Percent greater = $\\frac{350 - 50}{50} \\times 100 = \\frac{300}{50} \\times 100 = 600\\%$.\n\n**The Full Solution:**\n\"A is what percent greater than B\" means $\\frac{A - B}{B} \\times 100$.\n$\\frac{350 - 50}{50} \\times 100 = \\frac{300}{50} \\times 100 = 6 \\times 100 = 600\\%$.\n\n**Why the wrong answers are tempting:**\n• A: Computes $\\frac{350-50}{350} \\times 100$ — divides by the wrong number.\n• B: Computes $350 - 50 = 300$ and stops.\n• D: Computes $\\frac{350}{50} \\times 100 = 700\\%$, but that's \"what percent OF,\" not \"what percent GREATER.\"\n\n**Test Day Takeaway:** \"Percent greater\" means $\\frac{\\text{difference}}{\\text{base}} \\times 100$. The base is the number after \"than.\"",
  skills: ["percents", "word-problems"]
},
{
  id: 19, type: "multiple-choice", difficulty: "hard",
  question: "For what value of $c$ does the system of equations below have infinitely many solutions?\n\n$3x - 6y = 12$\n$-x + 2y = c$",
  choices: [{ id: "A", text: "-12" }, { id: "B", text: "-4" }, { id: "C", text: "4" }, { id: "D", text: "12" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Systems — Infinitely Many Solutions**\n\n**Choice B is correct.**\n\n**The Fast Way:** Multiply the second equation by $-3$: $3x - 6y = -3c$. For infinitely many solutions, this must be identical to $3x - 6y = 12$. So $-3c = 12$, giving $c = -4$.\n\n**The Full Solution:**\nFor infinitely many solutions, the equations must be scalar multiples of each other.\nDivide the first equation by $-3$: $-x + 2y = -4$.\nThis must equal the second equation: $-x + 2y = c$.\nSo $c = -4$.\n\n**Why the wrong answers are tempting:**\n• A: This is the constant from the first equation with a sign change.\n• C: Wrong sign — divides 12 by 3 but forgets the negative.\n• D: Uses the constant from the first equation directly.\n\n**Test Day Takeaway:** For infinitely many solutions, one equation must be a multiple of the other. Match the coefficients to find the constant.",
  skills: ["systems-of-equations"]
},
{
  id: 20, type: "fill-in", difficulty: "hard",
  question: "A data analyst collects data and fits a linear regression model $\\hat{y} = 0.8x + 12$. The analyst finds that when $x = 30$, the actual $y$-value is 39. What is the residual for this data point?",
  correctAnswer: "3",
  explanation: "**SAT Pattern: Residual = Actual - Predicted**\n\n**The correct answer is 3.**\n\n**The Fast Way:** Predicted: $\\hat{y} = 0.8(30) + 12 = 36$. Residual = actual $-$ predicted = $39 - 36 = 3$.\n\n**The Full Solution:**\nThe predicted value at $x = 30$: $\\hat{y} = 0.8(30) + 12 = 24 + 12 = 36$.\nResidual = actual value $-$ predicted value = $39 - 36 = 3$.\nA positive residual means the actual value is above the regression line.\n\n**Test Day Takeaway:** Residual = actual $-$ predicted. Positive means the point is above the line; negative means below.",
  skills: ["statistics", "linear-functions"]
},
{
  id: 21, type: "multiple-choice", difficulty: "hard",
  question: "If $f(x) = 2x^3 - 5x^2 + 3x$ and $f(a) = 0$ where $a > 0$ and $a \neq 0$, which of the following could be the value of $a$?",
  choices: [{ id: "A", text: "$\\frac{1}{2}$" }, { id: "B", text: "$\\frac{3}{2}$" }, { id: "C", text: "$\\frac{5}{2}$" }, { id: "D", text: "3" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Factoring a Cubic to Find Zeros**\n\n**Choice B is correct.**\n\n**The Fast Way:** Factor: $f(x) = x(2x^2 - 5x + 3) = x(2x - 3)(x - 1)$. The positive zeros are $x = 1$ and $x = \\frac{3}{2}$. Of these, $\\frac{3}{2}$ is in the choices.\n\n**The Full Solution:**\nFactor out $x$: $f(x) = x(2x^2 - 5x + 3)$.\nFactor the quadratic: $2x^2 - 5x + 3 = (2x - 3)(x - 1)$.\nSo $f(x) = x(2x-3)(x-1) = 0$ when $x = 0$, $x = \\frac{3}{2}$, or $x = 1$.\nSince $a > 0$ and $a \neq 0$, the possible values are $a = 1$ or $a = \\frac{3}{2}$. Of the choices, $\\frac{3}{2}$ is listed.\n\n**Why the wrong answers are tempting:**\n• A: $f(\\frac{1}{2}) = \\frac{1}{4} - \\frac{5}{4} + \\frac{3}{2} = \\frac{1}{2} \neq 0$.\n• C: $f(\\frac{5}{2}) = \\frac{125}{4} - \\frac{125}{4} + \\frac{15}{2} = \\frac{15}{2} \neq 0$.\n• D: $f(3) = 54 - 45 + 9 = 18 \neq 0$.\n\n**Test Day Takeaway:** Always factor out the GCF first. Then factor the remaining quadratic to find all zeros.",
  skills: ["factoring", "polynomial-operations"]
},
{
  id: 22, type: "multiple-choice", difficulty: "hard",
  question: "A researcher collected two independent random samples: Sample A of 400 people from City X and Sample B of 900 people from City Y. Both found that 60% of respondents supported a policy. Which of the following is a true statement about the margins of error?",
  choices: [{ id: "A", text: "The margins of error are the same because both found 60% support." }, { id: "B", text: "Sample A has a larger margin of error because it has a smaller sample size." }, { id: "C", text: "Sample B has a larger margin of error because it represents a larger city." }, { id: "D", text: "The margins of error cannot be compared without knowing the population sizes." }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Sample Size and Margin of Error**\n\n**Choice B is correct.**\n\n**The Fast Way:** Margin of error is inversely related to $\\sqrt{n}$. Smaller $n$ = larger margin of error. Sample A ($n = 400$) has a larger margin of error than Sample B ($n = 900$).\n\n**The Full Solution:**\nThe margin of error formula is approximately $\\frac{1}{\\sqrt{n}}$ (simplified). For the same proportion:\n• Sample A: $\\frac{1}{\\sqrt{400}} = \\frac{1}{20} = 0.05$\n• Sample B: $\\frac{1}{\\sqrt{900}} = \\frac{1}{30} \\approx 0.033$\nSample A has the larger margin of error.\n\n**Why the wrong answers are tempting:**\n• A: Even with the same proportion, different sample sizes produce different margins.\n• C: City size (population) has little effect — margin of error depends on sample size.\n• D: For large populations, the population size barely affects margin of error.\n\n**Test Day Takeaway:** Margin of error depends primarily on sample size, not population size. Bigger sample = smaller margin of error.",
  skills: ["margin-of-error", "statistics"]
}
      ]
    }
  ]
};

export default practiceTest10;
