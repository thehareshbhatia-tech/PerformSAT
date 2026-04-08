// Practice Test 4 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Questions calibrated to College Board official practice test difficulty
// Contexts: astronomy, chemistry, transportation, finance

export const practiceTest4 = {
  id: "practice-test-4",
  title: "Practice Test 4",
  description: "Full-length SAT Math practice test with 2 modules",
  totalQuestions: 44,
  timePerModule: 35,
  modules: [
    {
      id: "module-1",
      title: "Module 1",
      timeLimit: 35,
      questions: [
// Practice Test 4 — Math Module 1 (22 questions)
// Theme: statistics-heavy (data interpretation, margin of error, standard deviation), plus geometry

// ===== EASY (Q1–Q5) =====

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  question: "A survey of $200$ students found that $34\\%$ of them prefer studying in a library. How many students prefer studying in a library?",
  choices: [
    { id: "A", text: "$34$" },
    { id: "B", text: "$66$" },
    { id: "C", text: "$68$" },
    { id: "D", text: "$134$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Basic Percent Calculation**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** $200 \\times 0.34 = 68$.\n\n**The Full Solution:**\n$34\\%$ of $200$ means $\\frac{34}{100} \\times 200 = 68$ students.\n\n**Why the wrong answers are tempting:**\n• Choice A: Uses $34$ directly without calculating the percent of $200$.\n• Choice B: Computes $100\\% - 34\\% = 66\\%$ but writes $66$ as a count without multiplying.\n• Choice D: Calculates $200 - 66 = 134$, mixing subtraction with the percent.\n\n**Test Day Takeaway:** \"Percent of\" always means multiply the decimal form by the total.",
  skills: ["percents"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  question: "The function $g(t) = 250 + 18t$ models the number of items in a warehouse $t$ weeks after January 1. What does the number $18$ represent in this function?",
  choices: [
    { id: "A", text: "The number of items in the warehouse on January 1" },
    { id: "B", text: "The number of items added to the warehouse each week" },
    { id: "C", text: "The total number of items after $18$ weeks" },
    { id: "D", text: "The number of weeks until the warehouse is full" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Interpret Slope in Linear Model**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** In $g(t) = 250 + 18t$, the coefficient of $t$ is the rate of change — items added per week.\n\n**The Full Solution:**\nThe function is in slope-intercept form $g(t) = b + mt$ where $m = 18$ is the slope. The slope represents the change in $g(t)$ for each unit increase in $t$. Since $g(t)$ is items and $t$ is weeks, $18$ means $18$ items per week.\n\n**Why the wrong answers are tempting:**\n• Choice A: Confuses $18$ with $250$, which is the initial value.\n• Choice C: Misreads $18$ as a specific time input rather than a rate.\n• Choice D: Treats $18$ as a time value rather than a rate.\n\n**Test Day Takeaway:** In $y = b + mx$, the coefficient of $x$ is always the rate of change per unit.",
  skills: ["function-interpretation", "linear-functions"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  question: "A store sells notebooks for $\\$4$ each. A customer also pays a one-time shipping fee of $\\$7$. Which expression represents the total cost, in dollars, for purchasing $n$ notebooks?",
  choices: [
    { id: "A", text: "$4 + 7n$" },
    { id: "B", text: "$7 + 4n$" },
    { id: "C", text: "$11n$" },
    { id: "D", text: "$4n - 7$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Word-to-Expression Translation**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** Cost = fixed fee + (price per item)(number of items) = $7 + 4n$.\n\n**The Full Solution:**\nThe total cost has two parts: the one-time shipping fee of $\\$7$ (a constant) and the cost of notebooks at $\\$4$ each, which is $4n$. Total: $7 + 4n$.\n\n**Why the wrong answers are tempting:**\n• Choice A: Swaps the fixed fee and the per-item cost.\n• Choice C: Adds $4 + 7 = 11$ and multiplies by $n$, treating shipping as a per-item cost.\n• Choice D: Subtracts the shipping fee instead of adding it.\n\n**Test Day Takeaway:** Fixed costs are constants; per-unit costs get multiplied by the variable.",
  skills: ["word-problems", "solving-equations"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  question: "A data set consists of the values $12, 15, 15, 18, 20$. What is the mean of this data set?",
  choices: [
    { id: "A", text: "$15$" },
    { id: "B", text: "$15.5$" },
    { id: "C", text: "$16$" },
    { id: "D", text: "$18$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Calculating the Mean**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** Sum $= 12 + 15 + 15 + 18 + 20 = 80$. Mean $= 80 \\div 5 = 16$.\n\n**The Full Solution:**\nThe mean is the sum of all values divided by the number of values.\nSum $= 12 + 15 + 15 + 18 + 20 = 80$.\nThere are $5$ values.\nMean $= \\frac{80}{5} = 16$.\n\n**Why the wrong answers are tempting:**\n• Choice A: This is the median (middle value when sorted), not the mean.\n• Choice B: A miscalculation, perhaps from averaging $15$ and $16$.\n• Choice D: Picks the second-largest value from the set.\n\n**Test Day Takeaway:** Mean = sum divided by count. Don't confuse mean with median.",
  skills: ["statistics"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  question: "If $\\frac{3x}{8} = 15$, what is the value of $x$?",
  choices: [
    { id: "A", text: "$5.625$" },
    { id: "B", text: "$24$" },
    { id: "C", text: "$40$" },
    { id: "D", text: "$45$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Solving a Basic Proportion**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** Multiply both sides by $8$: $3x = 120$. Divide by $3$: $x = 40$.\n\n**The Full Solution:**\n$\\frac{3x}{8} = 15$\n$3x = 15 \\times 8 = 120$\n$x = \\frac{120}{3} = 40$\n\n**Why the wrong answers are tempting:**\n• Choice A: Computes $\\frac{15}{8} \\times 3 = 5.625$, a scrambled operation order.\n• Choice B: Computes $15 \\times 8 = 120$ but then divides by $5$ instead of $3$.\n• Choice D: Computes $15 \\times 3 = 45$, forgetting to account for the $8$ in the denominator.\n\n**Test Day Takeaway:** Clear the fraction first by multiplying both sides by the denominator.",
  skills: ["solving-equations"]
},

// ===== MEDIUM (Q6–Q14) =====

{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  question: "A researcher surveys a random sample of $600$ voters in a city and finds that $57\\%$ support a new policy. The margin of error for the survey is $\\pm 4\\%$. Which of the following is the best interpretation of this result?",
  choices: [
    { id: "A", text: "Exactly $57\\%$ of all voters in the city support the policy." },
    { id: "B", text: "Between $53\\%$ and $61\\%$ of the sampled voters support the policy." },
    { id: "C", text: "It is plausible that between $53\\%$ and $61\\%$ of all voters in the city support the policy." },
    { id: "D", text: "If another sample is taken, exactly $57\\%$ will support the policy." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Margin of Error Interpretation**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** Margin of error creates a confidence interval for the population parameter: $57\\% \\pm 4\\% = [53\\%, 61\\%]$. This estimates the true population percentage.\n\n**The Full Solution:**\nThe margin of error tells us that the true population proportion is plausibly within $4$ percentage points of the sample proportion. So the interval $53\\%$ to $61\\%$ is a plausible range for the percentage of all voters who support the policy.\n\n**Why the wrong answers are tempting:**\n• Choice A: A sample statistic is an estimate, never an exact value for the population.\n• Choice B: The interval applies to the population, not the sample — we already know $57\\%$ of the sample supports it.\n• Choice D: Different samples yield different results; the margin of error doesn't guarantee future samples.\n\n**Test Day Takeaway:** Margin of error gives a range for the population parameter, not the sample statistic.",
  skills: ["statistics"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  question: "The table below shows the results of a survey on preferred exercise type by age group.\n\n| | Running | Swimming | Cycling | Total |\n|---|---|---|---|---|\n| Under 30 | $45$ | $30$ | $25$ | $100$ |\n| 30 and over | $20$ | $35$ | $45$ | $100$ |\n| Total | $65$ | $65$ | $70$ | $200$ |\n\nWhat proportion of people who prefer swimming are under $30$?",
  choices: [
    { id: "A", text: "$\\frac{30}{100}$" },
    { id: "B", text: "$\\frac{30}{65}$" },
    { id: "C", text: "$\\frac{35}{65}$" },
    { id: "D", text: "$\\frac{30}{200}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Two-Way Table Conditional Proportion**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Of people who prefer swimming (total $65$), those under $30$ number $30$. Proportion $= \\frac{30}{65}$.\n\n**The Full Solution:**\nThe question asks for a conditional proportion: given that a person prefers swimming, what is the probability they are under $30$?\nThe denominator is the total number of swimming-preferrers: $30 + 35 = 65$.\nThe numerator is swimming-preferrers who are under $30$: $30$.\nProportion $= \\frac{30}{65}$.\n\n**Why the wrong answers are tempting:**\n• Choice A: Uses $100$ (total under $30$) as the denominator — wrong condition direction.\n• Choice C: Gives the proportion of swimmers who are $30$ and over.\n• Choice D: Uses the grand total $200$ as the denominator.\n\n**Test Day Takeaway:** In conditional probability, the denominator is the total of the given condition.",
  skills: ["two-way-tables", "probability"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  question: "The line $y = -\\frac{2}{5}x + 7$ is graphed in the $xy$-plane. A second line is perpendicular to this line and passes through the point $(4, 1)$. What is the $y$-intercept of the second line?",
  choices: [
    { id: "A", text: "$(0, -9)$" },
    { id: "B", text: "$(0, 9)$" },
    { id: "C", text: "$(0, 11)$" },
    { id: "D", text: "$(0, -\\frac{13}{5})$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Perpendicular Lines and Point-Slope**\n\n**Choice A is correct.**\n\n**The Fast Way (30 seconds):** Perpendicular slope is $\\frac{5}{2}$. Using point $(4, 1)$: $y - 1 = \\frac{5}{2}(x - 4)$. At $x = 0$: $y - 1 = \\frac{5}{2}(-4) = -10$, so $y = -9$.\n\n**The Full Solution:**\nThe given line has slope $m_1 = -\\frac{2}{5}$.\nPerpendicular slopes are negative reciprocals: $m_2 = \\frac{5}{2}$.\nUsing point-slope form with $(4, 1)$:\n$y - 1 = \\frac{5}{2}(x - 4)$\n$y = \\frac{5}{2}x - 10 + 1$\n$y = \\frac{5}{2}x - 9$\nThe $y$-intercept is $(0, -9)$.\n\n**Why the wrong answers are tempting:**\n• Choice B: Uses $+10$ instead of $-10$ when distributing $\\frac{5}{2}(-4)$.\n• Choice C: Uses the same slope $-\\frac{2}{5}$ instead of the perpendicular slope.\n• Choice D: Uses the reciprocal $\\frac{5}{2}$ but forgets to negate, ending up with slope $\\frac{2}{5}$ and a different intercept.\n\n**Test Day Takeaway:** Perpendicular slopes are negative reciprocals: $m_1 \\cdot m_2 = -1$.",
  skills: ["slope", "linear-functions", "coordinate-geometry"]
},
{
  id: 9,
  type: "fill-in",
  difficulty: "medium",
  question: "A system of equations is given:\n\n$3x + 2y = 19$\n$5x - 2y = 13$\n\nWhat is the value of $x$?",
  correctAnswer: "4",
  explanation: "**SAT Pattern: Systems of Equations — Elimination**\n\n**The correct answer is $4$.**\n\n**The Fast Way (15 seconds):** Add the two equations: $8x = 32$, so $x = 4$.\n\n**The Full Solution:**\n$3x + 2y = 19$ ... (1)\n$5x - 2y = 13$ ... (2)\nAdding (1) and (2): $(3x + 5x) + (2y - 2y) = 19 + 13$\n$8x = 32$\n$x = 4$\n\n**Verification:** If $x = 4$, from (1): $12 + 2y = 19$, so $2y = 7$, $y = 3.5$. Check (2): $20 - 7 = 13$. \\u2713\n\n**Common Mistakes to Avoid:**\n• Subtracting instead of adding, which doesn't eliminate $y$.\n• Solving for $y$ when the question asks for $x$.\n\n**Test Day Takeaway:** When coefficients of one variable are opposites, add the equations to eliminate it instantly.",
  skills: ["systems-of-equations"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  question: "Data set A: $\\{10, 10, 10, 10, 10\\}$\nData set B: $\\{2, 6, 10, 14, 18\\}$\n\nBoth data sets have the same mean. Which of the following correctly compares their standard deviations?",
  choices: [
    { id: "A", text: "The standard deviation of A is greater than the standard deviation of B." },
    { id: "B", text: "The standard deviation of A is equal to the standard deviation of B." },
    { id: "C", text: "The standard deviation of A is less than the standard deviation of B." },
    { id: "D", text: "The relationship cannot be determined from the information given." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Comparing Standard Deviations Conceptually**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** Data set A has no spread (all values identical), so its standard deviation is $0$. Data set B has spread, so its SD is positive. $0 < \\text{positive}$.\n\n**The Full Solution:**\nBoth means are $10$. Standard deviation measures spread from the mean.\nData set A: Every value equals $10$, so every deviation from the mean is $0$. SD $= 0$.\nData set B: Values range from $2$ to $18$, all at varying distances from $10$. SD $> 0$.\nTherefore, SD of A $<$ SD of B.\n\n**Why the wrong answers are tempting:**\n• Choice A: Reverses the comparison.\n• Choice B: Same mean does not imply same standard deviation.\n• Choice D: The relationship is fully determinable from the data.\n\n**Test Day Takeaway:** Standard deviation is $0$ when all values are identical. Any spread means SD $> 0$.",
  skills: ["statistics"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  question: "A researcher models the relationship between hours of sunlight per day ($x$) and average daily temperature in degrees Fahrenheit ($y$) for $12$ months in a certain city using the equation $y = 3.8x + 22$. According to this model, what is the predicted average temperature for a month with $13$ hours of sunlight?",
  choices: [
    { id: "A", text: "$71.4°F$" },
    { id: "B", text: "$65.2°F$" },
    { id: "C", text: "$49.4°F$" },
    { id: "D", text: "$59.6°F$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Prediction from Linear Model**\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** Substitute $x = 13$: $y = 3.8(13) + 22 = 49.4 + 22 = 71.4$.\n\n**The Full Solution:**\n$y = 3.8x + 22$\n$y = 3.8(13) + 22$\n$y = 49.4 + 22$\n$y = 71.4$\nThe predicted temperature is $71.4°F$.\n\n**Why the wrong answers are tempting:**\n• Choice B: Might result from a rounding error or using the wrong value of $x$.\n• Choice C: Computes $3.8 \\times 13 = 49.4$ but forgets to add the $y$-intercept of $22$.\n• Choice D: Might use $x = 10$ instead of $x = 13$: $3.8(10) + 22 = 60$, close to $59.6$.\n\n**Test Day Takeaway:** For prediction problems, just substitute the given value into the model equation.",
  skills: ["scatterplots", "linear-functions"]
},
{
  id: 12,
  type: "fill-in",
  difficulty: "medium",
  question: "In a right triangle, one acute angle measures $32°$. What is the measure, in degrees, of the other acute angle?",
  correctAnswer: "58",
  explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**The correct answer is $58$.**\n\n**The Fast Way (5 seconds):** $90° - 32° = 58°$.\n\n**The Full Solution:**\nThe sum of angles in a triangle is $180°$. In a right triangle, one angle is $90°$.\n$90° + 32° + x = 180°$\n$x = 180° - 90° - 32° = 58°$\n\n**Common Mistakes to Avoid:**\n• Writing $180 - 32 = 148$ (forgetting the right angle).\n• Confusing complementary ($90°$) with supplementary ($180°$).\n\n**Verification:** $90 + 32 + 58 = 180$. \\u2713\n\n**Test Day Takeaway:** In a right triangle, the two acute angles are complementary (sum to $90°$).",
  skills: ["triangles", "angles"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  question: "The population of a colony of bacteria doubles every $3$ hours. If the colony starts with $500$ bacteria, which function $P(t)$ models the population after $t$ hours?",
  choices: [
    { id: "A", text: "$P(t) = 500(2)^{3t}$" },
    { id: "B", text: "$P(t) = 500(2)^{t/3}$" },
    { id: "C", text: "$P(t) = 500(3)^{t/2}$" },
    { id: "D", text: "$P(t) = 500 + 2t$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Doubles every $3$ hours means base $2$, exponent $t/3$. Initial value $500$.\n\n**The Full Solution:**\nGeneral form: $P(t) = P_0 \\cdot r^{t/d}$ where $P_0 = 500$, $r = 2$ (doubles), $d = 3$ (period).\n$P(t) = 500(2)^{t/3}$\nCheck: At $t = 3$, $P(3) = 500(2)^1 = 1000$. \\u2713 (doubled)\nAt $t = 6$, $P(6) = 500(2)^2 = 2000$. \\u2713 (doubled again)\n\n**Why the wrong answers are tempting:**\n• Choice A: Uses $3t$ instead of $t/3$ — this would double every $\\frac{1}{3}$ hour.\n• Choice C: Confuses the base and the period.\n• Choice D: Models linear growth, not exponential.\n\n**Test Day Takeaway:** \"Doubles every $d$ units\" → base $2$, exponent $t/d$.",
  skills: ["exponential-functions"]
},
{
  id: 14,
  type: "fill-in",
  difficulty: "medium",
  question: "A bag contains $5$ red marbles, $8$ blue marbles, and $7$ green marbles. If one marble is selected at random, what is the probability of selecting a blue marble? Express your answer as a fraction.",
  correctAnswer: "2/5",
  explanation: "**SAT Pattern: Basic Probability**\n\n**The correct answer is $\\frac{2}{5}$.**\n\n**The Fast Way (10 seconds):** $P(\\text{blue}) = \\frac{8}{5 + 8 + 7} = \\frac{8}{20} = \\frac{2}{5}$.\n\n**The Full Solution:**\nTotal marbles $= 5 + 8 + 7 = 20$.\nNumber of blue marbles $= 8$.\n$P(\\text{blue}) = \\frac{8}{20} = \\frac{2}{5}$.\n\n**Common Mistakes to Avoid:**\n• Forgetting to include all three colors in the total.\n• Writing $\\frac{8}{12}$ (dividing by only non-blue marbles).\n\n**Verification:** $\\frac{5}{20} + \\frac{8}{20} + \\frac{7}{20} = \\frac{20}{20} = 1$. \\u2713\n\n**Test Day Takeaway:** Probability = favorable outcomes / total outcomes. Always count the full total.",
  skills: ["probability"]
},

// ===== HARD (Q15–Q22) =====

{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  question: "A researcher collected data from a random sample of $1{,}200$ adults in a large city and found that $48\\%$ favored a proposed park. The margin of error was $\\pm 3\\%$ at a $95\\%$ confidence level. If the researcher had instead surveyed $4{,}800$ adults (four times as many), which of the following would be closest to the new margin of error at the same confidence level?",
  choices: [
    { id: "A", text: "$\\pm 0.75\\%$" },
    { id: "B", text: "$\\pm 1.5\\%$" },
    { id: "C", text: "$\\pm 3\\%$" },
    { id: "D", text: "$\\pm 6\\%$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Margin of Error and Sample Size Relationship**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Margin of error is proportional to $\\frac{1}{\\sqrt{n}}$. Quadrupling $n$ halves the margin: $3\\% \\div 2 = 1.5\\%$.\n\n**The Full Solution:**\nThe margin of error formula is $E = z \\cdot \\sqrt{\\frac{p(1-p)}{n}}$. The margin of error is inversely proportional to $\\sqrt{n}$.\nIf $n$ increases by a factor of $4$, then $\\sqrt{n}$ increases by a factor of $\\sqrt{4} = 2$.\nNew margin $= \\frac{3\\%}{2} = 1.5\\%$.\n\n**Why the wrong answers are tempting:**\n• Choice A: Divides by $4$ instead of $\\sqrt{4} = 2$.\n• Choice C: Assumes sample size doesn't affect margin of error.\n• Choice D: Multiplies by $2$ instead of dividing.\n\n**Test Day Takeaway:** To halve the margin of error, you must quadruple the sample size. MOE $\\propto 1/\\sqrt{n}$.",
  skills: ["statistics"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  question: "In the $xy$-plane, a circle has center $(3, -2)$ and passes through the point $(7, 1)$. Which of the following is the equation of this circle?",
  choices: [
    { id: "A", text: "$(x - 3)^2 + (y + 2)^2 = 5$" },
    { id: "B", text: "$(x - 3)^2 + (y + 2)^2 = 25$" },
    { id: "C", text: "$(x + 3)^2 + (y - 2)^2 = 25$" },
    { id: "D", text: "$(x - 3)^2 + (y + 2)^2 = 7$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Circle Equation from Center and Point**\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** Radius$^2 = (7-3)^2 + (1-(-2))^2 = 16 + 9 = 25$. Equation: $(x-3)^2 + (y+2)^2 = 25$.\n\n**The Full Solution:**\nThe standard form of a circle is $(x-h)^2 + (y-k)^2 = r^2$ with center $(h, k)$.\nCenter: $(3, -2)$, so $h = 3$, $k = -2$.\nRadius = distance from center to point on circle:\n$r = \\sqrt{(7-3)^2 + (1-(-2))^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5$\n$r^2 = 25$\nEquation: $(x-3)^2 + (y+2)^2 = 25$.\n\n**Why the wrong answers are tempting:**\n• Choice A: Uses $r = 5$ but writes $r^2 = 5$ instead of $25$.\n• Choice C: Gets the signs wrong in the center coordinates.\n• Choice D: Computes $\\sqrt{16} + \\sqrt{9} = 4 + 3 = 7$ instead of $\\sqrt{16 + 9}$.\n\n**Test Day Takeaway:** Find $r^2$ using the distance formula squared — don't forget: $r^2 = (\\Delta x)^2 + (\\Delta y)^2$.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  question: "If $(3x + k)(2x - 5) = 6x^2 + bx - 40$ for all values of $x$, what is the value of $b$?",
  choices: [
    { id: "A", text: "$1$" },
    { id: "B", text: "$-31$" },
    { id: "C", text: "$-1$" },
    { id: "D", text: "$31$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Matching Coefficients in Factored Form**\n\n**Choice A is correct.**\n\n**The Fast Way (30 seconds):** From the constant term: $k \\cdot (-5) = -40$, so $k = 8$. Expand: $(3x + 8)(2x - 5) = 6x^2 - 15x + 16x - 40 = 6x^2 + x - 40$. So $b = 1$.\n\n**The Full Solution:**\nExpand $(3x + k)(2x - 5)$:\n$= 6x^2 - 15x + 2kx - 5k$\n$= 6x^2 + (-15 + 2k)x - 5k$\nMatch with $6x^2 + bx - 40$:\nConstant terms: $-5k = -40 \\Rightarrow k = 8$.\nLinear terms: $b = -15 + 2(8) = -15 + 16 = 1$.\n\n**Why the wrong answers are tempting:**\n• Choice B: Computes $-15 - 16 = -31$ by subtracting $2k$ instead of adding.\n• Choice C: Gets $15 - 16 = -1$ from a sign error on the $-15$.\n• Choice D: Drops the negative sign: $15 + 16 = 31$.\n\n**Test Day Takeaway:** Match coefficients systematically — solve for the unknown constant first using the easiest term (the constant).",
  skills: ["factoring", "polynomial-operations"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "hard",
  question: "The expression $\\frac{6^5 \\cdot 3^4}{2^5 \\cdot 9^3}$ can be written as $3^a$ for some integer $a$. What is the value of $a$?",
  correctAnswer: "3",
  explanation: "**SAT Pattern: Exponent Rules with Prime Factorization**\n\n**The correct answer is $3$.**\n\n**The Fast Way (30 seconds):** Rewrite everything in terms of primes $2$ and $3$:\n$6^5 = (2 \\cdot 3)^5 = 2^5 \\cdot 3^5$, and $9^3 = (3^2)^3 = 3^6$.\nSo $\\frac{2^5 \\cdot 3^5 \\cdot 3^4}{2^5 \\cdot 3^6} = \\frac{2^5 \\cdot 3^9}{2^5 \\cdot 3^6} = 3^3$.\nTherefore $a = 3$.\n\n**The Full Solution:**\nStep 1: Convert all bases to primes.\n$6^5 = (2 \\cdot 3)^5 = 2^5 \\cdot 3^5$\n$3^4 = 3^4$\n$2^5 = 2^5$\n$9^3 = (3^2)^3 = 3^6$\n\nStep 2: Substitute.\n$\\frac{2^5 \\cdot 3^5 \\cdot 3^4}{2^5 \\cdot 3^6}$\n\nStep 3: Simplify.\nNumerator: $2^5 \\cdot 3^{5+4} = 2^5 \\cdot 3^9$\nDenominator: $2^5 \\cdot 3^6$\nResult: $\\frac{2^5}{2^5} \\cdot \\frac{3^9}{3^6} = 1 \\cdot 3^3 = 3^3$\n\nSo $a = 3$.\n\n**Common Mistakes to Avoid:**\n• Forgetting to decompose $6^5$ into $2^5 \\cdot 3^5$.\n• Adding exponents incorrectly: $5 + 4 = 9$, then $9 - 6 = 3$.\n\n**Verification:** $\\frac{6^5 \\cdot 3^4}{2^5 \\cdot 9^3} = \\frac{7776 \\cdot 81}{32 \\cdot 729} = \\frac{629{,}856}{23{,}328} = 27 = 3^3$. \\u2713\n\n**Test Day Takeaway:** Convert composite bases to prime factors, then use exponent rules to simplify.",
  skills: ["exponent-rules"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  question: "Triangle $ABC$ has vertices at $A(0, 0)$, $B(10, 0)$, and $C(4, 7)$. What is the area of triangle $ABC$?",
  choices: [
    { id: "A", text: "$28$" },
    { id: "B", text: "$35$" },
    { id: "C", text: "$42$" },
    { id: "D", text: "$70$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Area of Triangle from Coordinates**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Base $AB$ lies on the $x$-axis with length $10$. Height is the $y$-coordinate of $C$, which is $7$. Area $= \\frac{1}{2}(10)(7) = 35$.\n\n**The Full Solution:**\nSince $A$ and $B$ are both on the $x$-axis ($y = 0$), the base $AB = 10 - 0 = 10$.\nThe height from $C$ to $AB$ is the perpendicular distance from $C$ to the $x$-axis, which is the $y$-coordinate of $C$: $h = 7$.\nArea $= \\frac{1}{2} \\cdot b \\cdot h = \\frac{1}{2}(10)(7) = 35$.\n\n**Why the wrong answers are tempting:**\n• Choice A: Might use $\\frac{1}{2}(8)(7) = 28$ by using horizontal distance from $A$ to $C$ as the base.\n• Choice C: Computes $\\frac{1}{2}(12)(7) = 42$ from a wrong base length.\n• Choice D: Forgets the $\\frac{1}{2}$: $10 \\times 7 = 70$.\n\n**Test Day Takeaway:** When one side of a triangle lies on a coordinate axis, use that as the base — the height is simply the perpendicular coordinate of the opposite vertex.",
  skills: ["area", "coordinate-geometry", "triangles"]
},
{
  id: 20,
  type: "fill-in",
  difficulty: "hard",
  question: "In the $xy$-plane, the line $y = 2x + 3$ intersects the parabola $y = x^2 - 3x - 21$ at two points. What is the $x$-coordinate of the intersection point with the greater $x$-value?",
  correctAnswer: "8",
  explanation: "**SAT Pattern: Quadratic-Linear System**\n\n**The correct answer is $8$.**\n\n**The Fast Way (30 seconds):** Set equal: $2x + 3 = x^2 - 3x - 21$. Rearrange: $x^2 - 5x - 24 = 0$. Factor: $(x - 8)(x + 3) = 0$. So $x = 8$ or $x = -3$. The greater value is $8$.\n\n**The Full Solution:**\nSet the two equations equal:\n$2x + 3 = x^2 - 3x - 21$\n$0 = x^2 - 3x - 21 - 2x - 3$\n$0 = x^2 - 5x - 24$\n$0 = (x - 8)(x + 3)$\n$x = 8$ or $x = -3$\n\n**Verification:** At $x = 8$: Line gives $y = 2(8) + 3 = 19$. Parabola gives $y = 64 - 24 - 21 = 19$. \\u2713\nAt $x = -3$: Line gives $y = -6 + 3 = -3$. Parabola gives $y = 9 + 9 - 21 = -3$. \\u2713\n\n**Common Mistakes to Avoid:**\n• Choosing $x = -3$ instead of $x = 8$.\n• Sign errors when moving terms across the equals sign.\n\n**Test Day Takeaway:** Set the two functions equal, rearrange to standard form, and factor.",
  skills: ["quadratic-equations", "systems-of-equations"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  question: "A survey of $250$ households classified each household by whether they own a pet and whether they have a garden.\n\n| | Pet Owner | Not a Pet Owner | Total |\n|---|---|---|---|\n| Has Garden | $70$ | $55$ | $125$ |\n| No Garden | $60$ | $65$ | $125$ |\n| Total | $130$ | $120$ | $250$ |\n\nA household is selected at random from those that have a garden. What is the probability that this household is a pet owner?",
  choices: [
    { id: "A", text: "$\\frac{70}{250}$" },
    { id: "B", text: "$\\frac{70}{130}$" },
    { id: "C", text: "$\\frac{70}{125}$" },
    { id: "D", text: "$\\frac{125}{250}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** Given: has garden (total $125$). Pet owners with garden: $70$. Probability $= \\frac{70}{125}$.\n\n**The Full Solution:**\nWe need $P(\\text{Pet Owner} | \\text{Has Garden})$.\nThe condition restricts us to the \"Has Garden\" row, which has $125$ total households.\nOf those, $70$ are pet owners.\n$P = \\frac{70}{125} = \\frac{14}{25} = 0.56$.\n\n**Why the wrong answers are tempting:**\n• Choice A: Uses the grand total $250$ as the denominator (joint probability, not conditional).\n• Choice B: Uses $130$ (total pet owners) as the denominator — wrong condition direction.\n• Choice D: Gives $P(\\text{Has Garden})$ with no regard to pet ownership.\n\n**Test Day Takeaway:** In conditional probability, the \"given\" condition determines the denominator — restrict to that row or column total.",
  skills: ["two-way-tables", "probability", "statistics"]
},
{
  id: 22,
  type: "fill-in",
  difficulty: "hard",
  question: "A rectangle has a length that is $5$ more than twice its width. If the perimeter of the rectangle is $88$, what is the area of the rectangle?",
  correctAnswer: "403",
  explanation: "**SAT Pattern: Multi-Step Word Problem with Geometry**\n\n**The correct answer is $403$.**\n\n**The Fast Way (30 seconds):** Let width $= w$, length $= 2w + 5$. Perimeter: $2(w + 2w + 5) = 88 \\Rightarrow 3w + 5 = 44 \\Rightarrow w = 13$. Length $= 31$. Area $= 13 \\times 31 = 403$.\n\n**The Full Solution:**\nLet $w$ = width. Then length $= 2w + 5$.\nPerimeter: $2(w + 2w + 5) = 88$\n$2(3w + 5) = 88$\n$3w + 5 = 44$\n$3w = 39$\n$w = 13$\nLength $= 2(13) + 5 = 31$\nArea $= 13 \\times 31 = 403$\n\n**Common Mistakes to Avoid:**\n• Using $P = w + l$ instead of $P = 2(w + l)$.\n• Reporting the perimeter or dimensions instead of the area.\n\n**Verification:** Perimeter: $2(13 + 31) = 2(44) = 88$. \\u2713. Area: $13 \\times 31 = 403$. \\u2713\n\n**Test Day Takeaway:** Set up the variable relationship first, use the perimeter to solve for dimensions, then find area.",
  skills: ["word-problems", "area", "solving-equations"]
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
  question: "A store sold 240 jackets in January and 360 jackets in March. What is the percent increase in jackets sold from January to March?",
  choices: [
    { id: "A", text: "33%" },
    { id: "B", text: "50%" },
    { id: "C", text: "67%" },
    { id: "D", text: "120%" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Percent Increase**\n\n**Choice B is correct.**\n\n**The Fast Way (10s):** $\\frac{360 - 240}{240} \\times 100 = \\frac{120}{240} \\times 100 = 50\\%$.\n\n**The Full Solution:**\nChange $= 360 - 240 = 120$.\nPercent increase $= \\frac{120}{240} \\times 100 = 50\\%$.\n\n**Why the wrong answers are tempting:**\n• A: Divides 120 by 360 (the new value).\n• C: Computes $\\frac{240}{360} \\approx 67\\%$.\n• D: Gives the raw change as a percent.\n\n**Test Day Takeaway:** Percent increase $= \\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100$. Always divide by the original.",
  skills: ["percents"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  question: "An aquarium holds 3,600 fluid ounces of water. How many gallons is this? (1 gallon = 128 fluid ounces)",
  choices: [
    { id: "A", text: "$25.0$" },
    { id: "B", text: "$28.125$" },
    { id: "C", text: "$36.0$" },
    { id: "D", text: "$460{,}800$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Unit Conversion**\n\n**Choice B is correct.**\n\n**The Fast Way (10s):** $\\frac{3{,}600}{128} = 28.125$ gallons.\n\n**The Full Solution:**\n$3{,}600 \\div 128 = 28.125$ gallons.\nVerification: $28.125 \\times 128 = 28 \\times 128 + 0.125 \\times 128 = 3584 + 16 = 3600$. ✓\n\n**Why the wrong answers are tempting:**\n• A: Divides by a rounded value (144 instead of 128).\n• C: Divides 3,600 by 100.\n• D: Multiplies instead of dividing.\n\n**Test Day Takeaway:** To convert from smaller to larger units, divide by the conversion factor.",
  skills: ["word-problems", "ratios"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  question: "If $\\frac{x}{3} + \\frac{x}{6} = 15$, what is the value of $x$?",
  choices: [
    { id: "A", text: "$10$" },
    { id: "B", text: "$18$" },
    { id: "C", text: "$30$" },
    { id: "D", text: "$45$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Solving Equations with Fractions**\n\n**Choice C is correct.**\n\n**The Fast Way (15s):** Multiply everything by 6: $2x + x = 90$, so $3x = 90$, giving $x = 30$.\n\n**The Full Solution:**\n$\\frac{x}{3} + \\frac{x}{6} = 15$.\nLCD is 6: $\\frac{2x}{6} + \\frac{x}{6} = 15$.\n$\\frac{3x}{6} = 15$.\n$\\frac{x}{2} = 15$.\n$x = 30$.\nCheck: $\\frac{30}{3} + \\frac{30}{6} = 10 + 5 = 15$. ✓\n\n**Why the wrong answers are tempting:**\n• A: Computes $\\frac{30}{3} = 10$ and stops.\n• B: Multiplies 15 by something other than 2.\n• D: Multiplies 15 by 3 (the denominator of the first fraction).\n\n**Test Day Takeaway:** Multiply through by the LCD to clear all fractions at once.",
  skills: ["solving-equations"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  question: "A system of equations is shown.\n\n$2x + y = 17$\n$x - y = 4$\n\nWhat is the value of $x$?",
  choices: [
    { id: "A", text: "$3$" },
    { id: "B", text: "$7$" },
    { id: "C", text: "$10$" },
    { id: "D", text: "$13$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice B is correct.**\n\n**The Fast Way (15s):** Add the equations: $(2x + y) + (x - y) = 17 + 4$, so $3x = 21$, giving $x = 7$.\n\n**The Full Solution:**\nAdd: $2x + y + x - y = 21$.\n$3x = 21$.\n$x = 7$.\nCheck: $y = 17 - 2(7) = 3$. Then $7 - 3 = 4$. ✓\n\n**Why the wrong answers are tempting:**\n• A: Gives the value of $y$ instead of $x$.\n• C: Adds 17 and 4 to get 21 and divides by 2.\n• D: Subtracts the equations instead of adding.\n\n**Test Day Takeaway:** When one equation has $+y$ and the other has $-y$, add them to eliminate $y$.",
  skills: ["systems-of-equations", "solving-equations"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  question: "The function $h(t) = -5t^2 + 20t$ gives the height of a ball, in meters, $t$ seconds after it is kicked. What is the height of the ball at $t = 2$ seconds?",
  choices: [
    { id: "A", text: "$10$ meters" },
    { id: "B", text: "$20$ meters" },
    { id: "C", text: "$30$ meters" },
    { id: "D", text: "$40$ meters" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Function Evaluation in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (10s):** $h(2) = -5(4) + 20(2) = -20 + 40 = 20$.\n\n**The Full Solution:**\n$h(2) = -5(2)^2 + 20(2) = -5(4) + 40 = -20 + 40 = 20$ meters.\n\n**Why the wrong answers are tempting:**\n• A: Computes $-5(2) + 20 = 10$ (forgets to square $t$).\n• C: Computes $-5(4) + 20(2) + 10$ (adds an extra constant).\n• D: Computes $20(2) = 40$ (ignores the $-5t^2$ term).\n\n**Test Day Takeaway:** Substitute carefully and follow order of operations: exponents first, then multiply, then add.",
  skills: ["function-interpretation", "quadratic-equations"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  question: "A survey of a random sample of 900 adults in a state found that $0.38 \\pm 0.03$ approved of a new highway project, at a 95% confidence level. Which of the following conclusions is supported by the data?",
  choices: [
    { id: "A", text: "More than 40% of all adults in the state approve of the project." },
    { id: "B", text: "Fewer than 35% of all adults in the state approve of the project." },
    { id: "C", text: "It is plausible that fewer than 40% of all adults in the state approve of the project." },
    { id: "D", text: "Exactly 38% of all adults in the state approve of the project." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Confidence Interval and Conclusions**\n\n**Choice C is correct.**\n\n**The Fast Way (15s):** The interval is $(0.35, 0.41)$, or $35\\%$ to $41\\%$. Since most of this interval is below 40%, it is plausible that fewer than 40% approve. But we cannot say it's definitively below 40% since the interval extends to 41%.\n\n**The Full Solution:**\n$0.38 \\pm 0.03 = (0.35, 0.41)$.\n• A: \"More than 40%\" is not supported — the interval includes values below 40%.\n• B: \"Fewer than 35%\" is not supported — the interval starts at 35%.\n• C: \"Plausible that fewer than 40%\" — yes, since most of the interval is below 40%, this is plausible. ✓\n• D: The true value is estimated, not exact.\n\n**Why the wrong answers are tempting:**\n• A: The interval goes above 40%, but also below it, so we can't conclude \"more than 40%.\" \n• B: 35% is the lower bound, and values above 35% are also plausible.\n• D: A confidence interval never gives an exact value.\n\n**Test Day Takeaway:** A confidence interval tells you what is plausible for the population. If a value falls within the interval, it's plausible; if outside, it's not supported.",
  skills: ["margin-of-error", "statistics"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  question: "A rental company charges $\\$45$ per day plus $\\$0.30$ per mile driven. If a customer's total bill for a one-day rental was $\\$117$, how many miles did the customer drive?",
  choices: [
    { id: "A", text: "$150$" },
    { id: "B", text: "$240$" },
    { id: "C", text: "$340$" },
    { id: "D", text: "$390$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Linear Equation Word Problem**\n\n**Choice B is correct.**\n\n**The Fast Way (15s):** $45 + 0.30m = 117$. So $0.30m = 72$. $m = \\frac{72}{0.30} = 240$.\n\n**The Full Solution:**\nTotal cost $= 45 + 0.30m = 117$.\n$0.30m = 117 - 45 = 72$.\n$m = \\frac{72}{0.30} = 240$ miles.\nCheck: $45 + 0.30(240) = 45 + 72 = 117$. ✓\n\n**Why the wrong answers are tempting:**\n• A: Divides 45 by 0.30.\n• C: Divides 117 by 0.30 without subtracting the base fee first.\n• D: Divides 117 by 0.30.\n\n**Test Day Takeaway:** Subtract the fixed cost first, then divide the remainder by the per-unit rate.",
  skills: ["word-problems", "solving-equations", "linear-functions"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  question: "The function $f(x) = (x + 3)(x - 11)$ models the profit, in dollars, from selling $x$ items. What is the minimum value of $f(x)$?",
  choices: [
    { id: "A", text: "$-49$" },
    { id: "B", text: "$-33$" },
    { id: "C", text: "$-11$" },
    { id: "D", text: "$4$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Minimum of a Quadratic in Factored Form**\n\n**Choice A is correct.**\n\n**The Fast Way (20s):** Zeros at $x = -3$ and $x = 11$. Vertex $x = \\frac{-3 + 11}{2} = \\frac{8}{2} = 4$. Minimum $= f(4) = (4+3)(4-11) = 7 \\times (-7) = -49$.\n\n**The Full Solution:**\nThe parabola opens upward (positive leading coefficient), so the vertex is a minimum.\nVertex $x = \\frac{-3 + 11}{2} = 4$.\n$f(4) = (7)(-7) = -49$.\n\n**Why the wrong answers are tempting:**\n• B: Computes $(-3)(11) = -33$ (the $y$-intercept, $f(0)$).\n• C: Gives one of the zeros.\n• D: Gives the $x$-coordinate of the vertex, not the minimum $y$-value.\n\n**Test Day Takeaway:** For a factored quadratic, the vertex $x$ is the average of the zeros. Plug back in to find min/max.",
  skills: ["quadratic-equations", "vertex-form", "function-interpretation"]
},
{
  id: 9,
  type: "fill-in",
  difficulty: "medium",
  question: "If $2x^2 - 18 = 0$, what is a positive value of $x$?",
  correctAnswer: "3",
  explanation: "**The correct answer is $3$.**\n\n**The Full Solution:**\n$2x^2 - 18 = 0$.\n$2x^2 = 18$.\n$x^2 = 9$.\n$x = \\pm 3$.\nPositive value: $x = 3$.\n\n**Verification:** $2(3)^2 - 18 = 2(9) - 18 = 18 - 18 = 0$. ✓\n\n**Common Mistakes:**\n• Dividing 18 by 2 and forgetting to take the square root, answering 9.\n• Answering $-3$ (the negative root).",
  skills: ["solving-equations", "quadratic-equations"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  question: "A survey of 360 employees asked whether they prefer working from home or the office, categorized by department.\n\n| | Home | Office | Total |\n|---|---|---|---|\n| Marketing | 48 | 32 | 80 |\n| Engineering | 96 | 24 | 120 |\n| Sales | 60 | 100 | 160 |\n| Total | 204 | 156 | 360 |\n\nWhat is the probability that a randomly selected employee who prefers working from home is in Engineering?",
  choices: [
    { id: "A", text: "$\\frac{96}{360}$" },
    { id: "B", text: "$\\frac{96}{204}$" },
    { id: "C", text: "$\\frac{96}{120}$" },
    { id: "D", text: "$\\frac{120}{360}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice B is correct.**\n\n**The Fast Way (10s):** \"Given prefers home\" → restrict to Home column: total = 204. Engineering and Home = 96. Probability $= \\frac{96}{204} = \\frac{8}{17}$.\n\n**The Full Solution:**\n$P(\\text{Engineering} | \\text{Home}) = \\frac{96}{204}$.\n\n**Why the wrong answers are tempting:**\n• A: Uses the grand total (360) as the denominator.\n• C: Uses the Engineering total (120) as the denominator — this answers \"given Engineering, what fraction prefers Home?\"\n• D: Gives $P(\\text{Engineering})$, ignoring the condition.\n\n**Test Day Takeaway:** \"Given X\" means the total for X becomes your denominator. Read carefully whether the condition is a row or column.",
  skills: ["probability", "two-way-tables"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  question: "Line $r$ has the equation $y = \\frac{2}{5}x - 3$. Line $s$ is perpendicular to line $r$ and passes through the point $(4, 1)$. What is the $y$-intercept of line $s$?",
  choices: [
    { id: "A", text: "$-9$" },
    { id: "B", text: "$9$" },
    { id: "C", text: "$11$" },
    { id: "D", text: "$-11$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Perpendicular Slopes and Finding Intercept**\n\n**Choice C is correct.**\n\n**The Fast Way (20s):** Slope of $r$ is $\\frac{2}{5}$. Perpendicular slope $= -\\frac{5}{2}$. Line $s$: $y = -\\frac{5}{2}x + b$. Through $(4, 1)$: $1 = -\\frac{5}{2}(4) + b = -10 + b$, so $b = 11$.\n\n**The Full Solution:**\nSlope of $s$: $m_s = -\\frac{1}{2/5} = -\\frac{5}{2}$ (negative reciprocal).\nUsing point $(4, 1)$: $1 = -\\frac{5}{2}(4) + b$.\n$1 = -10 + b$.\n$b = 11$.\nCheck: $-\\frac{5}{2} \\times \\frac{2}{5} = -1$. ✓\n\n**Why the wrong answers are tempting:**\n• A: Uses slope $\\frac{5}{2}$ (reciprocal without sign change), getting $b = -9$.\n• B: Uses slope $\\frac{5}{2}$: $1 = 10 + b$, so $b = -9$; then guesses a positive version $b = 9$.\n• D: Arithmetic error: computes $-10 - 1 = -11$ instead of $1 - (-10) = 11$.\n\n**Test Day Takeaway:** Perpendicular slope = negative reciprocal. Then use the point to find $b$.",
  skills: ["slope", "coordinate-geometry", "linear-functions"]
},
{
  id: 12,
  type: "fill-in",
  difficulty: "medium",
  question: "A movie theater sold adult tickets for $\\$12$ each and child tickets for $\\$7$ each. A total of 200 tickets were sold, and the total revenue was $\\$2{,}100$. How many adult tickets were sold?",
  correctAnswer: "140",
  explanation: "**The correct answer is $140$.**\n\n**The Full Solution:**\nLet $a$ = adult tickets, $c$ = child tickets.\n$a + c = 200$ ... (1)\n$12a + 7c = 2100$ ... (2)\nFrom (1): $c = 200 - a$.\nSubstitute into (2): $12a + 7(200 - a) = 2100$.\n$12a + 1400 - 7a = 2100$.\n$5a = 700$.\n$a = 140$.\n\n**Verification:** $c = 60$. Revenue: $12(140) + 7(60) = 1680 + 420 = 2100$. ✓\n\n**Common Mistakes:**\n• Answering 60 (the number of child tickets).\n• Setting up $12a + 7c = 200$ (confusing quantity and revenue equations).",
  skills: ["systems-of-equations", "word-problems"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  question: "A circle has the equation $x^2 + y^2 - 14x + 4y + 28 = 0$. What is the radius of the circle?",
  choices: [
    { id: "A", text: "$3$" },
    { id: "B", text: "$5$" },
    { id: "C", text: "$\\sqrt{21}$" },
    { id: "D", text: "$25$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Complete the Square for a Circle**\n\n**Choice B is correct.**\n\n**The Fast Way (30s):** Complete the square:\n$(x^2 - 14x + 49) + (y^2 + 4y + 4) = -28 + 49 + 4$\n$(x - 7)^2 + (y + 2)^2 = 25$.\nRadius $= \\sqrt{25} = 5$.\n\n**The Full Solution:**\nGroup: $(x^2 - 14x) + (y^2 + 4y) = -28$.\nComplete for $x$: half of $-14$ is $-7$, $(-7)^2 = 49$.\nComplete for $y$: half of $4$ is $2$, $2^2 = 4$.\n$(x-7)^2 + (y+2)^2 = -28 + 49 + 4 = 25$.\nRadius $= \\sqrt{25} = 5$.\n\n**Why the wrong answers are tempting:**\n• A: Miscomputes $-28 + 49 + 4$ as $9$ and takes $\\sqrt{9} = 3$.\n• C: Adds only one completing-the-square term.\n• D: Gives $r^2 = 25$ instead of $r = 5$.\n\n**Test Day Takeaway:** Move the constant to the right, complete the square for $x$ and $y$, then the right side equals $r^2$.",
  skills: ["circle-equations", "solving-equations"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  question: "A parabola in the $xy$-plane has the equation $y = 3(x - 5)^2 - 27$. Which of the following is an equivalent form that reveals the $x$-intercepts of the parabola?",
  choices: [
    { id: "A", text: "$y = 3(x - 2)(x - 8)$" },
    { id: "B", text: "$y = 3(x + 2)(x - 8)$" },
    { id: "C", text: "$y = 3(x - 2)(x + 8)$" },
    { id: "D", text: "$y = 3(x + 2)(x + 8)$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Converting Between Quadratic Forms**\n\n**Choice A is correct.**\n\n**The Fast Way (25s):** Expand from vertex form: $3(x-5)^2 - 27 = 3(x^2 - 10x + 25) - 27 = 3x^2 - 30x + 75 - 27 = 3x^2 - 30x + 48$. Factor out 3: $3(x^2 - 10x + 16) = 3(x - 2)(x - 8)$.\n\n**The Full Solution:**\n$y = 3(x-5)^2 - 27$\n$= 3(x^2 - 10x + 25) - 27$\n$= 3x^2 - 30x + 75 - 27$\n$= 3x^2 - 30x + 48$\n$= 3(x^2 - 10x + 16)$\n$= 3(x - 2)(x - 8)$.\n\nCheck: $x = 2$ and $x = 8$ are the $x$-intercepts.\nVerify vertex: $x = \\frac{2+8}{2} = 5$. $y(5) = 3(5-2)(5-8) = 3(3)(-3) = -27$. Vertex $(5, -27)$. ✓\n\n**Why the wrong answers are tempting:**\n• B: Zeros at $-2$ and $8$ → vertex at $x = 3$, not $5$.\n• C: Zeros at $2$ and $-8$ → vertex at $x = -3$, not $5$.\n• D: Zeros at $-2$ and $-8$ → vertex at $x = -5$, not $5$.\n\n**Test Day Takeaway:** To convert vertex form to factored form: expand, simplify, factor. The average of the zeros must equal the vertex $x$-coordinate.",
  skills: ["quadratic-equations", "factoring", "vertex-form"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  question: "In right triangle $XYZ$, angle $Z$ is the right angle, $XY = 85$, and $XZ = 77$. What is the value of $\\sin(X)$?",
  choices: [
    { id: "A", text: "$\\frac{36}{85}$" },
    { id: "B", text: "$\\frac{77}{85}$" },
    { id: "C", text: "$\\frac{36}{77}$" },
    { id: "D", text: "$\\frac{77}{36}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Right Triangle Trigonometry**\n\n**Choice A is correct.**\n\n**The Fast Way (25s):** Right angle at $Z$, so $XY = 85$ is the hypotenuse. Find $YZ$: $YZ = \\sqrt{85^2 - 77^2} = \\sqrt{7225 - 5929} = \\sqrt{1296} = 36$. For angle $X$: opposite $= YZ = 36$, hypotenuse $= XY = 85$. $\\sin(X) = \\frac{36}{85}$.\n\n**The Full Solution:**\n$YZ^2 = XY^2 - XZ^2 = 7225 - 5929 = 1296$.\n$YZ = 36$.\nVerification: $36^2 + 77^2 = 1296 + 5929 = 7225 = 85^2$. ✓\n$\\sin(X) = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{YZ}{XY} = \\frac{36}{85}$.\n\n**Why the wrong answers are tempting:**\n• B: Uses $XZ = 77$ (adjacent) — this is $\\cos(X)$.\n• C: Uses $\\frac{YZ}{XZ}$ — this is $\\tan(X)$.\n• D: Inverts the tangent ratio.\n\n**Test Day Takeaway:** SOH: sin = opposite/hypotenuse. Always identify which side is opposite the angle in question.",
  skills: ["trigonometry", "triangles"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  question: "For what value of $k$ does the equation $9x^2 + kx + 4 = 0$ have exactly one real solution?",
  choices: [
    { id: "A", text: "$6$" },
    { id: "B", text: "$12$" },
    { id: "C", text: "$36$" },
    { id: "D", text: "$144$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Discriminant — One Real Solution**\n\n**Choice B is correct.**\n\n**The Fast Way (20s):** One real solution means discriminant $= 0$: $k^2 - 4(9)(4) = 0$. $k^2 = 144$. $k = \\pm 12$. The positive value is $12$.\n\n**The Full Solution:**\nFor $9x^2 + kx + 4 = 0$: $a = 9$, $b = k$, $c = 4$.\nDiscriminant $= k^2 - 4(9)(4) = k^2 - 144$.\nExactly one solution: $k^2 - 144 = 0$, so $k^2 = 144$, giving $k = \\pm 12$.\nThe positive value is $12$.\nVerification: $9x^2 + 12x + 4 = (3x + 2)^2 = 0 \\Rightarrow x = -\\frac{2}{3}$ (one repeated root). ✓\n\n**Why the wrong answers are tempting:**\n• A: Computes $\\sqrt{36} = 6$ but uses the wrong formula.\n• C: Uses $4 \\times 9 = 36$ without multiplying by $c$.\n• D: Gives $k^2 = 144$ without taking the square root.\n\n**Test Day Takeaway:** One solution ↔ discriminant $= 0$. Solve $b^2 - 4ac = 0$ for the unknown.",
  skills: ["discriminant", "quadratic-equations"]
},
{
  id: 17,
  type: "fill-in",
  difficulty: "hard",
  question: "The number of bacteria in a culture is modeled by $N(t) = 500(1.06)^{t/2}$, where $t$ is the number of days. By what percent does the number of bacteria increase every 2 days?",
  correctAnswer: "6",
  explanation: "**The correct answer is $6$.**\n\n**The Full Solution:**\nWhen $t$ increases by 2:\n$N(t+2) = 500(1.06)^{(t+2)/2} = 500(1.06)^{t/2} \\cdot 1.06 = 1.06 \\cdot N(t)$.\nEvery 2 days, the population is multiplied by $1.06$.\nPercent increase $= 1.06 - 1 = 0.06 = 6\\%$.\n\n**Verification:** At $t = 0$: $N = 500$. At $t = 2$: $N = 500(1.06) = 530$.\nIncrease: $\\frac{530 - 500}{500} = \\frac{30}{500} = 0.06 = 6\\%$. ✓\n\n**Common Mistakes:**\n• Answering 106 or 1.06 (the growth factor, not the percent increase).\n• Finding the daily rate instead of the 2-day rate.",
  skills: ["exponential-functions", "percents"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  question: "The equation $\\frac{c}{4}x - 3 = 3x + 5$ has no solution. What is the value of $c$?",
  choices: [
    { id: "A", text: "$3$" },
    { id: "B", text: "$4$" },
    { id: "C", text: "$12$" },
    { id: "D", text: "$16$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: No Solution — Parameter Problem**\n\n**Choice C is correct.**\n\n**The Fast Way (20s):** Rearrange: $\\frac{c}{4}x - 3x = 5 + 3$, so $\\left(\\frac{c}{4} - 3\\right)x = 8$. For no solution, the coefficient of $x$ must be 0: $\\frac{c}{4} - 3 = 0$, giving $c = 12$. And $8 \neq 0$, so the equation becomes $0 = 8$ (contradiction). ✓\n\n**The Full Solution:**\n$\\frac{c}{4}x - 3 = 3x + 5$.\n$\\frac{c}{4}x - 3x = 8$.\n$\\left(\\frac{c - 12}{4}\\right)x = 8$.\nFor no solution: $\\frac{c-12}{4} = 0$ and $8 \neq 0$.\n$c = 12$.\nWith $c = 12$: $3x - 3 = 3x + 5$ → $-3 = 5$. Contradiction. No solution. ✓\n\n**Why the wrong answers are tempting:**\n• A: Divides 12 by 4.\n• B: Confuses the denominator with the answer.\n• D: Computes $4 \\times 4 = 16$.\n\n**Test Day Takeaway:** No solution means the variable terms cancel but the constants don't match. Set the $x$ coefficient to zero and verify the constants differ.",
  skills: ["solving-equations", "linear-functions"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  question: "A data set of 12 values is listed in order:\n\n$5, 7, 7, 9, 10, 12, 14, 15, 15, 18, 20, 24$\n\nEvery value is multiplied by 3. How does the new data set compare to the original?",
  choices: [
    { id: "A", text: "The mean is tripled and the range is tripled." },
    { id: "B", text: "The mean is tripled and the range is unchanged." },
    { id: "C", text: "The mean is unchanged and the range is tripled." },
    { id: "D", text: "The mean increases by 3 and the range increases by 3." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Scaling a Data Set by a Constant**\n\n**Choice A is correct.**\n\n**The Full Solution:**\nOriginal: Sum $= 5+7+7+9+10+12+14+15+15+18+20+24 = 156$. Mean $= \\frac{156}{12} = 13$. Range $= 24 - 5 = 19$.\n\nAfter multiplying by 3: Mean $= 3 \\times 13 = 39$. Range $= 3(24) - 3(5) = 72 - 15 = 57 = 3 \\times 19$.\n\nBoth the mean and range are tripled.\n\n**Why the wrong answers are tempting:**\n• B: Confuses multiplying with adding. Adding a constant doesn't change the range, but multiplying does.\n• C: The mean clearly changes when every value is multiplied.\n• D: Multiplying by 3 is not the same as adding 3.\n\n**Test Day Takeaway:** Multiplying every value by $k$: mean is multiplied by $k$, standard deviation and range are also multiplied by $|k|$. This is different from adding a constant, which only shifts the mean.",
  skills: ["statistics"]
},
{
  id: 20,
  type: "fill-in",
  difficulty: "hard",
  question: "A cone has a radius of 6 and a slant height of 10. What is the total surface area of the cone? (Give your answer in terms of $\\pi$, as a coefficient. For example, if the answer is $80\\pi$, enter $80$.)",
  correctAnswer: "96",
  explanation: "**The correct answer is $96$ (the surface area is $96\\pi$).**\n\n**The Full Solution:**\nTotal surface area of a cone: $\\pi r^2 + \\pi r l$, where $r$ is the radius and $l$ is the slant height.\n$= \\pi(6)^2 + \\pi(6)(10)$\n$= 36\\pi + 60\\pi$\n$= 96\\pi$.\n\n**Verification:** Base area: $\\pi(36) = 36\\pi$. Lateral surface: $\\pi(6)(10) = 60\\pi$. Total: $96\\pi$. ✓\n\n**Common Mistakes:**\n• Giving $60\\pi$ (lateral surface only, forgetting the base).\n• Using $2\\pi r l$ (doubling the lateral surface area formula, which is for a full revolution).\n• Confusing slant height with actual height.",
  skills: ["surface-area"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  question: "A square has a side length of $s$. A new square is formed whose side length is $40\\%$ greater than $s$. The area of the larger square is what percent greater than the area of the original square?",
  choices: [
    { id: "A", text: "$40\\%$" },
    { id: "B", text: "$80\\%$" },
    { id: "C", text: "$96\\%$" },
    { id: "D", text: "$180\\%$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Percent Increase with Scaling**\n\n**Choice C is correct.**\n\n**The Full Solution:**\nOriginal area: $s^2$.\nNew side: $1.4s$. New area: $(1.4s)^2 = 1.96s^2$.\nPercent increase: $\\frac{1.96s^2 - s^2}{s^2} \\times 100 = 0.96 \\times 100 = 96\\%$.\n\n**Verification:** If $s = 10$: original area $= 100$, new side $= 14$, new area $= 196$.\nPercent increase: $\\frac{196 - 100}{100} \\times 100 = 96\\%$. ✓\n\n**Why the wrong answers are tempting:**\n• A: Assumes area increases by the same percentage as the side.\n• B: Doubles 40%.\n• D: Computes $(1.4)^2 = 1.96$ and misinterprets as 196% instead of a 96% increase.\n\n**Test Day Takeaway:** When a linear dimension increases by $p\\%$, area increases by more than $p\\%$ because area depends on the square of the dimension. $(1.4)^2 = 1.96$, so area increases by 96%, not 40%.",
  skills: ["percents", "area"]
},
{
  id: 22,
  type: "fill-in",
  difficulty: "hard",
  question: "Let $f(x) = 4x - 3$ and $g(x) = x^2 + 2$. If $g(f(a)) = 83$, what is a positive value of $a$?",
  correctAnswer: "3",
  explanation: "**The correct answer is $3$.**\n\n**The Full Solution:**\n$f(a) = 4a - 3$.\n$g(f(a)) = (4a - 3)^2 + 2 = 83$.\n$(4a - 3)^2 = 81$.\n$4a - 3 = \\pm 9$.\nPositive branch: $4a - 3 = 9 \\Rightarrow 4a = 12 \\Rightarrow a = 3$.\nNegative branch: $4a - 3 = -9 \\Rightarrow 4a = -6 \\Rightarrow a = -1.5$ (not positive).\n\n**Verification:** $f(3) = 12 - 3 = 9$. $g(9) = 81 + 2 = 83$. ✓\n\n**Common Mistakes:**\n• Solving $(4a-3)^2 = 83$ instead of subtracting 2 first.\n• Confusing $g(f(a))$ with $f(g(a))$.",
  skills: ["function-interpretation", "solving-equations"]
}
      ]
    }
  ]
};

export default practiceTest4;
