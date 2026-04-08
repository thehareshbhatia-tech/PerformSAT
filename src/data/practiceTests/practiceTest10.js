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
  question: "The scatterplot shows data for 15 cities comparing average temperature ($x$, in degrees F) to average monthly electricity cost ($y$, in dollars). The line of best fit has a slope of 1.4 and a $y$-intercept of 12. Which of the following best interprets the slope?",
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
        // ===== EASY (Q1-Q5) =====
        {
          id: 1,
          type: "multiple-choice",
          difficulty: "easy",
          question: "What is $20\\%$ of $150$?",
          choices: [
            { id: "A", text: "$20$" },
            { id: "B", text: "$30$" },
            { id: "C", text: "$35$" },
            { id: "D", text: "$75$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Basic Percentage**\n\n**Choice B is correct.**\n\n**The Fast Way (5 seconds):** $20\\%$ of $150 = \\frac{150}{5} = 30$.\n\n**The Full Solution:**\n$0.20 \\times 150 = 30$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($20$): Uses the percentage number itself.\n• Choice C ($35$): Confuses with a different calculation.\n• Choice D ($75$): Computes $50\\%$ of $150$.\n\n**Test Day Takeaway:** $20\\% = \\frac{1}{5}$, so divide by $5$.",
          skills: ["percents"]
        },
        {
          id: 2,
          type: "fill-in",
          difficulty: "easy",
          question: "$\\frac{3x}{15} = 12$. What is the value of $x$?",
          correctAnswer: "60",
          explanation: "**SAT Pattern: One-Variable Equation with Fraction**\n\n**The correct answer is $60$.**\n\n**The Fast Way (10 seconds):** $\\frac{3x}{15} = \\frac{x}{5} = 12$, so $x = 60$.\n\n**The Full Solution:**\n$\\frac{3x}{15} = 12$\nMultiply both sides by $15$: $3x = 180$\n$x = 60$\n\n**Common Mistakes to Avoid:**\n• Getting $x = 180$ by forgetting to divide by $3$.\n\n**Verification:** $\\frac{3(60)}{15} = \\frac{180}{15} = 12$. Correct.\n\n**Test Day Takeaway:** Multiply both sides by the denominator first, then solve.",
          skills: ["linear-equations", "solving-equations"]
        },
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A bakery uses $4$ cups of flour for each batch of bread. How many cups of flour are needed for $9$ batches?",
          choices: [
            { id: "A", text: "$13$" },
            { id: "B", text: "$32$" },
            { id: "C", text: "$36$" },
            { id: "D", text: "$45$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Multiplication Word Problem**\n\n**Choice C is correct.**\n\n**The Fast Way (5 seconds):** $4 \\times 9 = 36$.\n\n**The Full Solution:**\nFlour needed $= 4 \\text{ cups/batch} \\times 9 \\text{ batches} = 36$ cups.\n\n**Why the wrong answers are tempting:**\n• Choice A ($13$): Adds $4 + 9$ instead of multiplying.\n• Choice B ($32$): Computes $4 \\times 8$.\n• Choice D ($45$): Computes $5 \\times 9$.\n\n**Test Day Takeaway:** Rate $\\times$ quantity $=$ total.",
          skills: ["word-problems", "ratios-proportions"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "$5$ more than $3$ times a number $n$ is equal to $26$. Which equation represents this situation?",
          choices: [
            { id: "A", text: "$5n + 3 = 26$" },
            { id: "B", text: "$3n + 5 = 26$" },
            { id: "C", text: "$3(n + 5) = 26$" },
            { id: "D", text: "$5(n + 3) = 26$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Translating Words to Equations**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** \"$3$ times a number\" $= 3n$. \"$5$ more than that\" $= 3n + 5$. Set equal to $26$: $3n + 5 = 26$.\n\n**The Full Solution:**\nParse the sentence: \"$5$ more than ($3$ times $n$)\" $= 3n + 5 = 26$.\n\n**Why the wrong answers are tempting:**\n• Choice A: Swaps the coefficients, making it \"$3$ more than $5$ times $n$.\"\n• Choice C: Groups incorrectly, making it \"$3$ times ($n + 5$).\"\n• Choice D: Groups incorrectly with wrong coefficient.\n\n**Test Day Takeaway:** \"$k$ more than\" means $+ k$. \"$k$ times\" means $\\times k$. Build from the inside out.",
          skills: ["word-problems", "linear-equations"]
        },
        {
          id: 5,
          type: "fill-in",
          difficulty: "easy",
          question: "How many feet are in $8$ yards? ($1$ yard $= 3$ feet)",
          correctAnswer: "24",
          explanation: "**SAT Pattern: Unit Conversion**\n\n**The correct answer is $24$.**\n\n**The Fast Way (5 seconds):** $8 \\times 3 = 24$ feet.\n\n**The Full Solution:**\n$8 \\text{ yards} \\times \\frac{3 \\text{ feet}}{1 \\text{ yard}} = 24$ feet.\n\n**Common Mistakes to Avoid:**\n• Dividing instead of multiplying: $8 \\div 3 \\approx 2.67$.\n\n**Verification:** $24 \\div 3 = 8$ yards. Correct.\n\n**Test Day Takeaway:** When converting to a smaller unit, multiply.",
          skills: ["unit-conversion"]
        },

        // ===== MEDIUM (Q6-Q15) =====
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The mean of $5$ numbers is $18$. If one of the numbers is removed, the mean of the remaining $4$ numbers is $16$. What is the number that was removed?",
          choices: [
            { id: "A", text: "$20$" },
            { id: "B", text: "$22$" },
            { id: "C", text: "$26$" },
            { id: "D", text: "$34$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Mean and Total**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** Sum of $5$ numbers $= 5 \\times 18 = 90$. Sum of remaining $4 = 4 \\times 16 = 64$. Removed number $= 90 - 64 = 26$.\n\n**The Full Solution:**\nTotal sum $= 5 \\times 18 = 90$\nSum after removal $= 4 \\times 16 = 64$\nRemoved number $= 90 - 64 = 26$\n\n**Why the wrong answers are tempting:**\n• Choice A ($20$): Guess based on being close to the mean.\n• Choice B ($22$): May add $18 + 4$ or make an arithmetic error.\n• Choice D ($34$): May compute $18 + 16 = 34$.\n\n**Test Day Takeaway:** Mean $\\times$ count $=$ total sum. Use this to find missing values.",
          skills: ["mean-median-mode", "statistics"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The equation of a line is $3x + 4y = 24$. What is the $x$-intercept of this line?",
          choices: [
            { id: "A", text: "$(6, 0)$" },
            { id: "B", text: "$(8, 0)$" },
            { id: "C", text: "$(0, 6)$" },
            { id: "D", text: "$(0, 8)$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Finding Intercepts**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** Set $y = 0$: $3x = 24$, so $x = 8$. The $x$-intercept is $(8, 0)$.\n\n**The Full Solution:**\nThe $x$-intercept occurs where $y = 0$:\n$3x + 4(0) = 24$\n$3x = 24$\n$x = 8$\nSo the $x$-intercept is $(8, 0)$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($(6, 0)$): Divides $24$ by $4$ instead of $3$.\n• Choice C ($(0, 6)$): This is the $y$-intercept.\n• Choice D ($(0, 8)$): Confuses $x$- and $y$-intercepts and uses wrong coefficient.\n\n**Test Day Takeaway:** For the $x$-intercept, set $y = 0$. For the $y$-intercept, set $x = 0$.",
          skills: ["linear-equations", "coordinate-geometry"]
        },
        {
          id: 8,
          type: "fill-in",
          difficulty: "medium",
          question: "A movie theater sold adult tickets for $\\$12$ and child tickets for $\\$8$. If $45$ adult tickets and $30$ child tickets were sold, what was the total revenue, in dollars?",
          correctAnswer: "780",
          explanation: "**SAT Pattern: Total Revenue Calculation**\n\n**The correct answer is $780$.**\n\n**The Fast Way (15 seconds):** $12 \\times 45 + 8 \\times 30 = 540 + 240 = 780$.\n\n**The Full Solution:**\nAdult revenue $= 12 \\times 45 = 540$\nChild revenue $= 8 \\times 30 = 240$\nTotal $= 540 + 240 = 780$\n\n**Common Mistakes to Avoid:**\n• Confusing the prices with the quantities.\n• Adding only one part of the revenue.\n\n**Verification:** $\\$780 \\div 75$ total tickets $= \\$10.40$ average ticket price, which is between $\\$8$ and $\\$12$. Reasonable.\n\n**Test Day Takeaway:** Total revenue $=$ sum of (price $\\times$ quantity) for each item.",
          skills: ["word-problems"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $f(x) = x^2 - 4x + 3$, what are the solutions to $f(x) = 0$?",
          choices: [
            { id: "A", text: "$x = 1$ and $x = 3$" },
            { id: "B", text: "$x = -1$ and $x = -3$" },
            { id: "C", text: "$x = 1$ and $x = -3$" },
            { id: "D", text: "$x = 2$ and $x = 3$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Factoring Quadratics**\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** $x^2 - 4x + 3 = (x - 1)(x - 3) = 0$, so $x = 1$ or $x = 3$.\n\n**The Full Solution:**\nFind two numbers that multiply to $3$ and add to $-4$: $-1$ and $-3$.\n$x^2 - 4x + 3 = (x - 1)(x - 3) = 0$\n$x = 1$ or $x = 3$\n\n**Why the wrong answers are tempting:**\n• Choice B: Sign errors; the factors are $(x-1)(x-3)$, not $(x+1)(x+3)$.\n• Choice C: Mixed signs from a factoring error.\n• Choice D: $2 \\times 3 = 6 \\neq 3$.\n\n**Test Day Takeaway:** For $x^2 + bx + c$, find two numbers that multiply to $c$ and add to $b$.",
          skills: ["factoring", "quadratic-equations"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "In an aviation study, aircraft speed $s$ (in knots) is related to fuel burn rate $r$ (in gallons per hour) by the equation $r = 0.02s + 5$. What is the fuel burn rate when the speed is $250$ knots?",
          choices: [
            { id: "A", text: "$7.5$ gallons per hour" },
            { id: "B", text: "$10$ gallons per hour" },
            { id: "C", text: "$12.5$ gallons per hour" },
            { id: "D", text: "$55$ gallons per hour" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Evaluating a Linear Model**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $r = 0.02(250) + 5 = 5 + 5 = 10$.\n\n**The Full Solution:**\n$r = 0.02s + 5$\n$r = 0.02(250) + 5$\n$r = 5 + 5 = 10$ gallons per hour\n\n**Why the wrong answers are tempting:**\n• Choice A ($7.5$): Computes $0.01(250) + 5$.\n• Choice C ($12.5$): Computes $0.03(250) + 5$.\n• Choice D ($55$): Computes $0.2(250) + 5$, misplacing the decimal.\n\n**Test Day Takeaway:** Substitute the given value carefully and watch decimal placement.",
          skills: ["linear-functions", "function-evaluation"]
        },
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A scatterplot shows a strong negative linear association between the number of hours of TV watched per day and test scores. Which of the following best describes this relationship?",
          choices: [
            { id: "A", text: "As hours of TV increase, test scores tend to increase." },
            { id: "B", text: "As hours of TV increase, test scores tend to decrease." },
            { id: "C", text: "Watching TV causes lower test scores." },
            { id: "D", text: "Test scores cause changes in TV watching habits." }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Interpreting Association vs. Causation**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** \"Negative linear association\" means as one variable increases, the other decreases. No causation can be inferred.\n\n**The Full Solution:**\nA negative association means the variables move in opposite directions. Choices C and D claim causation, which cannot be concluded from a scatterplot alone.\n\n**Why the wrong answers are tempting:**\n• Choice A: Describes a positive association, not negative.\n• Choice C: Confuses association with causation.\n• Choice D: Also confuses association with causation, and reverses the direction.\n\n**Test Day Takeaway:** Association $\\neq$ causation. Scatterplots show trends, not causes.",
          skills: ["scatterplots", "statistics"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $\\frac{x}{3} + \\frac{x}{6} = 5$, what is the value of $x$?",
          choices: [
            { id: "A", text: "$6$" },
            { id: "B", text: "$10$" },
            { id: "C", text: "$15$" },
            { id: "D", text: "$30$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Equation with Fractions**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Multiply everything by $6$: $2x + x = 30$, so $3x = 30$, and $x = 10$.\n\n**The Full Solution:**\n$\\frac{x}{3} + \\frac{x}{6} = 5$\nMultiply by LCD $= 6$:\n$2x + x = 30$\n$3x = 30$\n$x = 10$\n\n**Why the wrong answers are tempting:**\n• Choice A ($6$): The LCD, not the solution.\n• Choice C ($15$): Computes $5 \\times 3$ incorrectly.\n• Choice D ($30$): Stops after clearing the fractions but forgets to divide by $3$.\n\n**Test Day Takeaway:** Clear fractions by multiplying by the LCD, then solve the simpler equation.",
          skills: ["solving-equations", "algebraic-manipulation"]
        },
        {
          id: 13,
          type: "fill-in",
          difficulty: "medium",
          question: "In triangle $ABC$, angle $A$ measures $55°$ and angle $B$ measures $70°$. What is the measure, in degrees, of angle $C$?",
          correctAnswer: "55",
          explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**The correct answer is $55$.**\n\n**The Fast Way (5 seconds):** $180 - 55 - 70 = 55$.\n\n**The Full Solution:**\nThe sum of angles in a triangle is $180°$.\n$A + B + C = 180°$\n$55° + 70° + C = 180°$\n$C = 180° - 125° = 55°$\n\n**Common Mistakes to Avoid:**\n• Adding instead of subtracting: $55 + 70 = 125$ is the sum of the other two angles, not the answer.\n\n**Verification:** $55 + 70 + 55 = 180°$. Correct.\n\n**Test Day Takeaway:** Angles in a triangle always sum to $180°$.",
          skills: ["triangles", "angles"]
        },
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which of the following is equivalent to $\\frac{4x^6}{2x^2}$?",
          choices: [
            { id: "A", text: "$2x^3$" },
            { id: "B", text: "$2x^4$" },
            { id: "C", text: "$4x^4$" },
            { id: "D", text: "$2x^8$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Exponent Rules with Division**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $\\frac{4}{2} = 2$ and $x^{6-2} = x^4$. So the answer is $2x^4$.\n\n**The Full Solution:**\n$\\frac{4x^6}{2x^2} = \\frac{4}{2} \\cdot \\frac{x^6}{x^2} = 2 \\cdot x^{6-2} = 2x^4$\n\n**Why the wrong answers are tempting:**\n• Choice A ($2x^3$): Divides the exponent by $2$ instead of subtracting.\n• Choice C ($4x^4$): Forgets to divide the coefficients.\n• Choice D ($2x^8$): Adds exponents instead of subtracting.\n\n**Test Day Takeaway:** When dividing like bases, subtract the exponents: $\\frac{x^a}{x^b} = x^{a-b}$.",
          skills: ["exponent-rules"]
        },
        {
          id: 15,
          type: "fill-in",
          difficulty: "medium",
          question: "A marine biologist counts fish in two sections of a reef. Section A has $24$ fish and section B has $36$ fish. What is the ratio of fish in section A to section B, expressed as a decimal?",
          correctAnswer: "0.67",
          explanation: "**SAT Pattern: Ratio as a Decimal**\n\n**The correct answer is $0.67$ (or $\\frac{2}{3}$).**\n\n**The Fast Way (10 seconds):** $\\frac{24}{36} = \\frac{2}{3} \\approx 0.67$.\n\n**The Full Solution:**\nRatio $= \\frac{24}{36} = \\frac{2}{3} = 0.\\overline{6} \\approx 0.67$.\n\n**Common Mistakes to Avoid:**\n• Flipping the ratio: $\\frac{36}{24} = 1.5$.\n• Not simplifying: The fraction $\\frac{24}{36}$ simplifies to $\\frac{2}{3}$.\n\n**Verification:** $0.67 \\times 36 \\approx 24$. Correct.\n\n**Test Day Takeaway:** Ratio of A to B means $\\frac{A}{B}$. Be careful about order.",
          skills: ["ratios-proportions"]
        },

        // ===== HARD (Q16-Q22) =====
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "If $f(x) = 2x^2 - 12x + 22$, what is the minimum value of $f(x)$?",
          choices: [
            { id: "A", text: "$-4$" },
            { id: "B", text: "$3$" },
            { id: "C", text: "$4$" },
            { id: "D", text: "$22$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Minimum Value of a Quadratic**\n\n**Choice C is correct.**\n\n**The Fast Way (20 seconds):** The vertex $x$-coordinate is $x = \\frac{-b}{2a} = \\frac{12}{4} = 3$. Then $f(3) = 2(9) - 12(3) + 22 = 18 - 36 + 22 = 4$.\n\n**The Full Solution:**\n$f(x) = 2x^2 - 12x + 22$\n$x_{\\text{vertex}} = \\frac{-(-12)}{2(2)} = \\frac{12}{4} = 3$\n$f(3) = 2(9) - 36 + 22 = 18 - 36 + 22 = 4$\n\nAlternatively, complete the square: $f(x) = 2(x^2 - 6x) + 22 = 2(x^2 - 6x + 9 - 9) + 22 = 2(x-3)^2 - 18 + 22 = 2(x-3)^2 + 4$.\nMinimum is $4$ when $x = 3$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($-4$): Sign error in the calculation.\n• Choice B ($3$): This is the $x$-value of the vertex, not the minimum $y$-value.\n• Choice D ($22$): This is $f(0)$, the $y$-intercept.\n\n**Test Day Takeaway:** For a quadratic with $a > 0$, the minimum value occurs at the vertex: $x = \\frac{-b}{2a}$.",
          skills: ["quadratic-functions", "vertex-form"]
        },
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The function $g(x) = 3(2)^x$ models a bacterial population. Which of the following describes how the population changes?",
          choices: [
            { id: "A", text: "The population increases by $2$ every hour." },
            { id: "B", text: "The population doubles every unit of time." },
            { id: "C", text: "The population triples every unit of time." },
            { id: "D", text: "The population increases by $200\\%$ every unit of time." }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Interpreting Exponential Functions**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** The base is $2$, which means the quantity is multiplied by $2$ each time period. That is doubling.\n\n**The Full Solution:**\n$g(x) = 3(2)^x$. The initial value is $3$ and the growth factor is $2$.\n$g(0) = 3$, $g(1) = 6$, $g(2) = 12$. Each value is double the previous.\n\n**Why the wrong answers are tempting:**\n• Choice A: This would be linear growth ($3 + 2x$), not exponential.\n• Choice C: Tripling would require a base of $3$.\n• Choice D: $200\\%$ increase means tripling (original $+$ $200\\%$ of original $= 3\\times$ original).\n\n**Test Day Takeaway:** In $f(x) = a \\cdot b^x$, the base $b$ is the growth factor. $b = 2$ means doubling.",
          skills: ["exponential-functions", "function-interpretation"]
        },
        {
          id: 18,
          type: "fill-in",
          difficulty: "hard",
          question: "In the $xy$-plane, the graph of $y = x^2 - 8x + 12$ crosses the $x$-axis at two points. What is the distance between these two points?",
          correctAnswer: "4",
          explanation: "**SAT Pattern: Distance Between Roots**\n\n**The correct answer is $4$.**\n\n**The Fast Way (15 seconds):** Factor: $x^2 - 8x + 12 = (x-2)(x-6) = 0$. Roots: $x = 2$ and $x = 6$. Distance $= 6 - 2 = 4$.\n\n**The Full Solution:**\n$x^2 - 8x + 12 = 0$\n$(x - 2)(x - 6) = 0$\n$x = 2$ or $x = 6$\nThe two $x$-intercepts are $(2, 0)$ and $(6, 0)$.\nDistance $= |6 - 2| = 4$.\n\n**Common Mistakes to Avoid:**\n• Finding the roots but not subtracting to get the distance.\n• Multiplying the roots instead of finding their difference.\n\n**Verification:** $2^2 - 8(2) + 12 = 4 - 16 + 12 = 0$. $6^2 - 8(6) + 12 = 36 - 48 + 12 = 0$. Both are correct roots.\n\n**Test Day Takeaway:** The $x$-intercepts are the solutions to the quadratic. Distance between them is $|x_2 - x_1|$.",
          skills: ["factoring", "quadratic-equations", "coordinate-geometry"]
        },
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A cylinder has a radius of $4$ and a height of $10$. What is the volume of the cylinder? (Volume of a cylinder: $V = \\pi r^2 h$)",
          choices: [
            { id: "A", text: "$40\\pi$" },
            { id: "B", text: "$80\\pi$" },
            { id: "C", text: "$160\\pi$" },
            { id: "D", text: "$640\\pi$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Volume Formula Application**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** $V = \\pi(4)^2(10) = \\pi(16)(10) = 160\\pi$.\n\n**The Full Solution:**\n$V = \\pi r^2 h$\n$V = \\pi (4)^2 (10)$\n$V = \\pi (16)(10)$\n$V = 160\\pi$\n\n**Why the wrong answers are tempting:**\n• Choice A ($40\\pi$): Uses $r$ instead of $r^2$: $\\pi(4)(10) = 40\\pi$.\n• Choice B ($80\\pi$): Uses $2r$ instead of $r^2$: $\\pi(8)(10) = 80\\pi$.\n• Choice D ($640\\pi$): Uses $r^2 = 4^2 = 16$, then $16^2 \\times 10 \\div 4$, an incorrect calculation.\n\n**Test Day Takeaway:** Remember to square the radius, not just multiply it.",
          skills: ["volume"]
        },
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "If $\\sqrt{3x + 7} = 5$, what is the value of $x$?",
          choices: [
            { id: "A", text: "$-\\frac{2}{3}$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$6$" },
            { id: "D", text: "$\\frac{32}{3}$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Solving Radical Equations**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** Square both sides: $3x + 7 = 25$. Then $3x = 18$, so $x = 6$.\n\n**The Full Solution:**\n$\\sqrt{3x + 7} = 5$\n$(\\sqrt{3x + 7})^2 = 5^2$\n$3x + 7 = 25$\n$3x = 18$\n$x = 6$\n\n**Why the wrong answers are tempting:**\n• Choice A ($-\\frac{2}{3}$): Subtracts $7$ from $5$ instead of $25$.\n• Choice B ($4$): Uses $5^2 = 25$ but then computes $\\frac{25-7}{5}$ incorrectly.\n• Choice D ($\\frac{32}{3}$): Adds $7$ to $25$ instead of subtracting.\n\n**Test Day Takeaway:** Square both sides of a radical equation, then solve the resulting linear equation. Check your answer in the original.",
          skills: ["radical-equations", "solving-equations"]
        },
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "The function $f(x) = -x^2 + 10x - 21$ can be written as $f(x) = -(x - a)(x - b)$ where $a < b$. What is the value of $a + b$?",
          correctAnswer: "10",
          explanation: "**SAT Pattern: Sum of Roots (Vieta's Formulas)**\n\n**The correct answer is $10$.**\n\n**The Fast Way (15 seconds):** For $-x^2 + 10x - 21$, factor out $-1$: $-(x^2 - 10x + 21) = -(x-3)(x-7)$. So $a = 3$, $b = 7$, and $a + b = 10$.\n\n**The Full Solution:**\n$f(x) = -x^2 + 10x - 21$\n$= -(x^2 - 10x + 21)$\n$= -(x - 3)(x - 7)$\nSo $a = 3$ and $b = 7$.\n$a + b = 3 + 7 = 10$\n\n**Common Mistakes to Avoid:**\n• Factoring without the negative sign and getting wrong roots.\n• By Vieta's formulas, $a + b = -\\frac{b}{a} = -\\frac{10}{-1} = 10$. This shortcut is faster.\n\n**Verification:** $-(3-3)(3-7) = 0$ and $-(7-3)(7-7) = 0$. Both roots check out. Also, $-(x-3)(x-7) = -(x^2 - 10x + 21) = -x^2 + 10x - 21$.\n\n**Test Day Takeaway:** For $ax^2 + bx + c$, the sum of roots $= -\\frac{b}{a}$.",
          skills: ["factoring", "quadratic-equations"]
        },
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "In right triangle $DEF$, angle $F = 90°$. If $\\sin(D) = \\frac{5}{13}$, what is $\\cos(D)$?",
          choices: [
            { id: "A", text: "$\\frac{5}{13}$" },
            { id: "B", text: "$\\frac{8}{13}$" },
            { id: "C", text: "$\\frac{12}{13}$" },
            { id: "D", text: "$\\frac{5}{12}$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Pythagorean Identity / Right Triangle Trig**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** $\\sin(D) = \\frac{5}{13}$, so opposite $= 5$, hypotenuse $= 13$. Adjacent $= \\sqrt{13^2 - 5^2} = \\sqrt{144} = 12$. $\\cos(D) = \\frac{12}{13}$.\n\n**The Full Solution:**\nIn right triangle with $\\sin(D) = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{5}{13}$:\nAdjacent $= \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$\n$\\cos(D) = \\frac{\\text{adjacent}}{\\text{hypotenuse}} = \\frac{12}{13}$\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{5}{13}$): Confuses sine and cosine.\n• Choice B ($\\frac{8}{13}$): Uses $13 - 5 = 8$ instead of the Pythagorean theorem.\n• Choice D ($\\frac{5}{12}$): This is $\\tan(D)$, not $\\cos(D)$.\n\n**Test Day Takeaway:** The $5$-$12$-$13$ right triangle is a standard Pythagorean triple. Know SOH-CAH-TOA.",
          skills: ["right-triangle-trig", "triangles"]
        }
      ]
    }
  ]
};

export default practiceTest10;
