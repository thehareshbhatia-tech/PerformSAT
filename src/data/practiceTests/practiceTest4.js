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
  question: "A scatterplot shows the relationship between hours of sunlight per day ($x$) and average daily temperature in degrees Fahrenheit ($y$) for $12$ months in a certain city. A line of best fit for the data is $y = 3.8x + 22$. According to this model, what is the predicted average temperature for a month with $13$ hours of sunlight?",
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
          type: "fill-in",
          difficulty: "easy",
          question: "A parking garage charges $\\$4$ per hour. If a driver pays $\\$28$, how many hours did the driver park?",
          correctAnswer: "7",
          explanation: "**SAT Pattern: One-Step Division**\n\n**The correct answer is $7$.**\n\n**The Fast Way (10 seconds):** $28 \\div 4 = 7$ hours.\n\n**The Full Solution:**\nTotal cost $\\div$ cost per hour $= 28 \\div 4 = 7$ hours.\n\n**Common Mistakes to Avoid:**\n• Multiplying: $28 \\times 4 = 112$.\n\n**Verification:** $7 \\times 4 = 28$. ✓\n\n**Test Day Takeaway:** When given a total and a unit rate, divide to find the number of units.",
          skills: ["word-problems", "solving-equations"]
        },
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "If $3n - 7 = 14$, what is the value of $n$?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$5$" },
            { id: "C", text: "$7$" },
            { id: "D", text: "$9$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** $3n = 21$, so $n = 7$.\n\n**The Full Solution:**\n$3n - 7 = 14$\n$3n = 14 + 7 = 21$\n$n = 21 \\div 3 = 7$\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): $3(3) - 7 = 2$, not $14$.\n• Choice B ($5$): $3(5) - 7 = 8$, not $14$.\n• Choice D ($9$): $3(9) - 7 = 20$, not $14$. May come from adding $14 + 7 = 21$ then solving $21/3 = 7$ but picking $9$ by accident.\n\n**Test Day Takeaway:** Add or subtract the constant first, then divide by the coefficient.",
          skills: ["linear-equations", "solving-equations"]
        },
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A financial adviser invested $\\$5{,}000$ for a client. The investment gained $6\\%$ in its first year. What was the value of the investment at the end of the first year?",
          choices: [
            { id: "A", text: "$\\$300$" },
            { id: "B", text: "$\\$5{,}006$" },
            { id: "C", text: "$\\$5{,}060$" },
            { id: "D", text: "$\\$5{,}300$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Percent Increase**\n\n**Choice D is correct.**\n\n**The Fast Way (15 seconds):** $6\\%$ of $5{,}000 = 0.06 \\times 5{,}000 = 300$. Total: $5{,}000 + 300 = 5{,}300$.\n\n**The Full Solution:**\n$5{,}000 \\times 1.06 = 5{,}300$\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\$300$) is the gain, not the total value.\n• Choice B ($\\$5{,}006$) adds $6$ instead of $6\\%$.\n• Choice C ($\\$5{,}060$) uses $0.6\\%$ instead of $6\\%$ (decimal error: $0.006$ instead of $0.06$).\n\n**Test Day Takeaway:** To find the value after a percent increase, multiply by $(1 + \\text{rate})$ or add the percent of the original.",
          skills: ["percents", "word-problems"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Which of the following is equivalent to $\\frac{6x^8}{2x^2}$?",
          choices: [
            { id: "A", text: "$3x^4$" },
            { id: "B", text: "$3x^6$" },
            { id: "C", text: "$4x^6$" },
            { id: "D", text: "$4x^4$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Exponent Rules — Division**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $\\frac{6}{2} = 3$ and $x^{8-2} = x^6$. Answer: $3x^6$.\n\n**The Full Solution:**\n$\\frac{6x^8}{2x^2} = \\frac{6}{2} \\cdot \\frac{x^8}{x^2} = 3 \\cdot x^{8-2} = 3x^6$\n\n**Why the wrong answers are tempting:**\n• Choice A ($3x^4$): Divides the exponent ($8/2 = 4$) instead of subtracting.\n• Choice C ($4x^6$): Uses $6 - 2 = 4$ for the coefficient instead of $6/2 = 3$.\n• Choice D ($4x^4$): Makes both errors above.\n\n**Test Day Takeaway:** When dividing powers with the same base, subtract the exponents: $x^a / x^b = x^{a-b}$.",
          skills: ["exponent-rules", "algebraic-manipulation"]
        },
        {
          id: 5,
          type: "fill-in",
          difficulty: "easy",
          question: "A delivery truck travels $195$ miles in $3$ hours at a constant speed. What is the truck's speed, in miles per hour?",
          correctAnswer: "65",
          explanation: "**SAT Pattern: Finding Rate**\n\n**The correct answer is $65$.**\n\n**The Fast Way (10 seconds):** Speed $= 195 \\div 3 = 65$ mph.\n\n**The Full Solution:**\nSpeed $= \\frac{\\text{distance}}{\\text{time}} = \\frac{195}{3} = 65$ miles per hour.\n\n**Common Mistakes to Avoid:**\n• Multiplying: $195 \\times 3 = 585$.\n\n**Verification:** $65 \\times 3 = 195$ miles. ✓\n\n**Test Day Takeaway:** Rate $=$ distance $\\div$ time.",
          skills: ["word-problems", "unit-conversion"]
        },
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A line passes through the origin and the point $(4, -6)$. Which equation represents this line?",
          choices: [
            { id: "A", text: "$y = -\\frac{3}{2}x$" },
            { id: "B", text: "$y = -\\frac{2}{3}x$" },
            { id: "C", text: "$y = \\frac{3}{2}x$" },
            { id: "D", text: "$y = \\frac{2}{3}x$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Line Through the Origin**\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** Passes through origin so $y$-intercept $= 0$. Slope $= \\frac{-6 - 0}{4 - 0} = -\\frac{6}{4} = -\\frac{3}{2}$. Equation: $y = -\\frac{3}{2}x$.\n\n**The Full Solution:**\n$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{-6}{4} = -\\frac{3}{2}$\nSince the line passes through the origin, $b = 0$.\n$y = -\\frac{3}{2}x$\n\n**Why the wrong answers are tempting:**\n• Choice B ($-\\frac{2}{3}x$): Flips the fraction (run over rise).\n• Choice C ($\\frac{3}{2}x$): Drops the negative sign.\n• Choice D ($\\frac{2}{3}x$): Both errors combined.\n\n**Test Day Takeaway:** Slope $= \\frac{\\text{rise}}{\\text{run}}$. A line through the origin has equation $y = mx$ (no constant term).",
          skills: ["slope", "linear-functions"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A bank account has a balance of $\\$1{,}200$. Each month, $\\$150$ is deposited and $\\$80$ is withdrawn. Which expression represents the account balance after $m$ months?",
          choices: [
            { id: "A", text: "$1{,}200 + 230m$" },
            { id: "B", text: "$1{,}200 + 70m$" },
            { id: "C", text: "$1{,}200 - 70m$" },
            { id: "D", text: "$1{,}200 + 150m - 80$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Net Change Linear Model**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Net monthly change $= 150 - 80 = 70$. Balance $= 1{,}200 + 70m$.\n\n**The Full Solution:**\nEach month: deposit $\\$150$, withdraw $\\$80$.\nNet change per month $= 150 - 80 = +70$.\nAfter $m$ months: $1{,}200 + 70m$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($1{,}200 + 230m$): Adds deposit and withdrawal ($150 + 80 = 230$) instead of finding the net.\n• Choice C ($1{,}200 - 70m$): Uses the correct net amount but subtracts it (balance would decrease).\n• Choice D ($1{,}200 + 150m - 80$): Subtracts the withdrawal once instead of each month.\n\n**Test Day Takeaway:** When both deposits and withdrawals happen regularly, find the net change per period first.",
          skills: ["linear-functions", "word-problems"]
        },
        {
          id: 8,
          type: "fill-in",
          difficulty: "medium",
          question: "The function $g(x) = 3x^2 - 5x + 2$. What is the value of $g(3)$?",
          correctAnswer: "14",
          explanation: "**SAT Pattern: Function Evaluation**\n\n**The correct answer is $14$.**\n\n**The Fast Way (20 seconds):** $g(3) = 3(9) - 5(3) + 2 = 27 - 15 + 2 = 14$.\n\n**The Full Solution:**\n$g(3) = 3(3)^2 - 5(3) + 2$\n$= 3(9) - 15 + 2$\n$= 27 - 15 + 2$\n$= 14$\n\n**Common Mistakes to Avoid:**\n• Computing $3(3)^2$ as $(3 \\cdot 3)^2 = 81$ instead of $3 \\cdot 9 = 27$.\n• Sign error: $27 - 15 + 2 \\neq 10$ (forgetting to add $2$).\n\n**Verification:** $27 - 15 = 12$, $12 + 2 = 14$. ✓\n\n**Test Day Takeaway:** Substitute carefully and follow order of operations: exponent first, then multiply, then add/subtract.",
          skills: ["function-evaluation", "quadratic-functions"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "An astronomer recorded the brightness of $5$ stars as $2.1, 3.4, 2.8, 4.2, 2.5$ (in magnitude units). What is the median brightness?",
          choices: [
            { id: "A", text: "$2.5$" },
            { id: "B", text: "$2.8$" },
            { id: "C", text: "$3.0$" },
            { id: "D", text: "$3.4$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Finding the Median**\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** Order the data: $2.1, 2.5, 2.8, 3.4, 4.2$. The middle value (3rd of 5) is $2.8$.\n\n**The Full Solution:**\nStep 1: Arrange in order: $2.1, 2.5, 2.8, 3.4, 4.2$\nStep 2: With $5$ values, the median is the $\\frac{5+1}{2} = 3\\text{rd}$ value.\nStep 3: The 3rd value is $2.8$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($2.5$): The 2nd value, not the middle.\n• Choice C ($3.0$): The mean ($15.0 \\div 5 = 3.0$), not the median.\n• Choice D ($3.4$): The 4th value.\n\n**Test Day Takeaway:** Always sort the data first. The median is the middle value for an odd count.",
          skills: ["mean-median-mode", "statistics"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $f(x) = 4x + 7$ and $f(a) = 23$, what is the value of $a$?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$5$" },
            { id: "D", text: "$6$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Solving Through Function Notation**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** $4a + 7 = 23$, so $4a = 16$ and $a = 4$.\n\n**The Full Solution:**\n$f(a) = 23$ means $4a + 7 = 23$.\n$4a = 23 - 7 = 16$\n$a = 4$\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): $f(3) = 12 + 7 = 19 \\neq 23$.\n• Choice C ($5$): $f(5) = 20 + 7 = 27 \\neq 23$.\n• Choice D ($6$): $f(6) = 24 + 7 = 31 \\neq 23$.\n\n**Test Day Takeaway:** $f(a) = c$ means: substitute $a$ for $x$, set the expression equal to $c$, and solve.",
          skills: ["function-evaluation", "linear-functions"]
        },
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Angles $A$ and $B$ are supplementary. If angle $A$ measures $47°$, what is the measure of angle $B$?",
          choices: [
            { id: "A", text: "$43°$" },
            { id: "B", text: "$47°$" },
            { id: "C", text: "$133°$" },
            { id: "D", text: "$143°$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Supplementary Angles**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** Supplementary means they add to $180°$. $B = 180 - 47 = 133°$.\n\n**The Full Solution:**\nSupplementary angles sum to $180°$.\n$A + B = 180°$\n$47 + B = 180$\n$B = 133°$\n\n**Why the wrong answers are tempting:**\n• Choice A ($43°$): Confuses supplementary ($180°$) with complementary ($90°$): $90 - 47 = 43$.\n• Choice B ($47°$): Assumes supplementary means equal.\n• Choice D ($143°$): Arithmetic error: $180 - 47 = 133$, not $143$.\n\n**Test Day Takeaway:** Supplementary $= 180°$. Complementary $= 90°$. Write both on your scratch paper.",
          skills: ["angles", "triangles"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A survey of $400$ commuters found that $45\\%$ use public transportation. The margin of error is $\\pm 4\\%$. Which of the following is a valid conclusion?",
          choices: [
            { id: "A", text: "Exactly $45\\%$ of all commuters use public transportation" },
            { id: "B", text: "Between $41\\%$ and $49\\%$ of the surveyed commuters use public transportation" },
            { id: "C", text: "The proportion of all commuters who use public transportation is plausibly between $0.41$ and $0.49$" },
            { id: "D", text: "At most $49\\%$ of all commuters use public transportation" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Interpreting Margin of Error**\n\n**Choice C is correct.**\n\n**The Fast Way (20 seconds):** $45\\% \\pm 4\\%$ gives the interval $41\\%$ to $49\\%$. This is a confidence interval for the population proportion.\n\n**The Full Solution:**\nThe margin of error creates a confidence interval: $45\\% - 4\\% = 41\\%$ to $45\\% + 4\\% = 49\\%$.\nThis means we are confident the true population proportion lies between $0.41$ and $0.49$.\n\n**Why the wrong answers are tempting:**\n• Choice A: A sample gives an estimate, not an exact value for the population.\n• Choice B: The $45\\%$ is exact for the sample. The margin of error applies to the population estimate.\n• Choice D: The interval is two-sided; the true proportion could be above $49\\%$ (unlikely but possible).\n\n**Test Day Takeaway:** Margin of error gives an interval estimate for the population, not the sample.",
          skills: ["margin-of-error", "statistics"]
        },
        {
          id: 13,
          type: "fill-in",
          difficulty: "medium",
          question: "The sum of $3$ consecutive integers is $72$. What is the largest of the three integers?",
          correctAnswer: "25",
          explanation: "**SAT Pattern: Consecutive Integers**\n\n**The correct answer is $25$.**\n\n**The Fast Way (15 seconds):** Middle integer $= 72 \\div 3 = 24$. The largest is $24 + 1 = 25$.\n\n**The Full Solution:**\nLet the integers be $n - 1$, $n$, $n + 1$.\n$(n - 1) + n + (n + 1) = 72$\n$3n = 72$\n$n = 24$\nLargest $= 24 + 1 = 25$.\n\n**Common Mistakes to Avoid:**\n• Reporting the middle value ($24$) instead of the largest ($25$).\n• Using $n, n+1, n+2$: gives $n = 23$, largest $= 25$. Same answer, just a different setup.\n\n**Verification:** $23 + 24 + 25 = 72$ ✓\n\n**Test Day Takeaway:** For $k$ consecutive integers summing to $S$, the middle value is $S/k$.",
          skills: ["solving-equations", "word-problems"]
        },
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A scatterplot of data shows a strong negative linear association. Which correlation coefficient $r$ is most likely?",
          choices: [
            { id: "A", text: "$r = -0.92$" },
            { id: "B", text: "$r = -0.15$" },
            { id: "C", text: "$r = 0.08$" },
            { id: "D", text: "$r = 0.89$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Interpreting Correlation Coefficients**\n\n**Choice A is correct.**\n\n**The Fast Way (10 seconds):** Strong $=$ close to $\\pm 1$. Negative $=$ negative sign. Only $-0.92$ is both strong and negative.\n\n**The Full Solution:**\n• Strong: $|r|$ close to $1$. This rules out $-0.15$ and $0.08$.\n• Negative: $r < 0$. This rules out $0.89$.\n• $r = -0.92$ is the only choice that is both strong and negative.\n\n**Why the wrong answers are tempting:**\n• Choice B ($-0.15$): Negative but weak (close to $0$).\n• Choice C ($0.08$): Very weak, essentially no correlation.\n• Choice D ($0.89$): Strong but positive, not negative.\n\n**Test Day Takeaway:** The sign of $r$ tells direction; $|r|$ close to $1$ means strong.",
          skills: ["scatterplots", "statistics"]
        },
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "medium",
          question: "In the $xy$-plane, line $j$ has a slope of $4$ and passes through the point $(1, 3)$. Which equation defines line $j$?",
          choices: [
            { id: "A", text: "$y = 4x + 3$" },
            { id: "B", text: "$y = 4x - 1$" },
            { id: "C", text: "$y = 4x + 1$" },
            { id: "D", text: "$y = 3x + 4$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Equation of a Line from Slope and Point**\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** Using point-slope: $y - 3 = 4(x - 1)$, so $y = 4x - 4 + 3 = 4x - 1$.\n\n**The Full Solution:**\n$y - y_1 = m(x - x_1)$\n$y - 3 = 4(x - 1)$\n$y = 4x - 4 + 3$\n$y = 4x - 1$\n\n**Why the wrong answers are tempting:**\n• Choice A ($y = 4x + 3$): Uses $(1, 3)$ and puts $3$ as the $y$-intercept.\n• Choice C ($y = 4x + 1$): Adds $4$ and $-3$ incorrectly.\n• Choice D ($y = 3x + 4$): Swaps the slope and the $y$-coordinate.\n\n**Verification:** At $x = 1$: $y = 4(1) - 1 = 3$ ✓\n\n**Test Day Takeaway:** Use point-slope form $y - y_1 = m(x - x_1)$ and then simplify to slope-intercept form.",
          skills: ["linear-functions", "slope"]
        },
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The quadratic equation $3x^2 - kx + 12 = 0$ has two equal real roots. What is the positive value of $k$?",
          choices: [
            { id: "A", text: "$6$" },
            { id: "B", text: "$12$" },
            { id: "C", text: "$6\\sqrt{2}$" },
            { id: "D", text: "$18$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Discriminant for Equal Roots**\n\n**Choice B is correct.**\n\n**The Fast Way (25 seconds):** Equal roots means discriminant $= 0$.\n$k^2 - 4(3)(12) = 0$\n$k^2 = 144$\n$k = 12$ (taking the positive value)\n\n**The Full Solution:**\nFor $ax^2 + bx + c = 0$ with $a = 3$, $b = -k$, $c = 12$:\nDiscriminant $= (-k)^2 - 4(3)(12) = k^2 - 144 = 0$\n$k^2 = 144$\n$k = \\pm 12$\nThe positive value is $k = 12$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($6$): From $\\sqrt{36}$ — perhaps computing $4 \\times 3 \\times 3$ instead of $4 \\times 3 \\times 12$.\n• Choice C ($6\\sqrt{2}$): A common error involving square root manipulation.\n• Choice D ($18$): From $\\sqrt{4 \\times 3 \\times 27}$ or a miscalculation.\n\n**Test Day Takeaway:** Two equal roots (one repeated root) means the discriminant $b^2 - 4ac = 0$.",
          skills: ["discriminant", "quadratic-equations"]
        },
        {
          id: 17,
          type: "fill-in",
          difficulty: "hard",
          question: "A rectangular box has length $10$ inches, width $6$ inches, and height $h$ inches. The volume of the box is $420$ cubic inches. What is the value of $h$?",
          correctAnswer: "7",
          explanation: "**SAT Pattern: Volume of a Rectangular Prism**\n\n**The correct answer is $7$.**\n\n**The Fast Way (15 seconds):** $V = lwh$, so $420 = 10 \\times 6 \\times h = 60h$. Then $h = 7$.\n\n**The Full Solution:**\n$V = l \\times w \\times h$\n$420 = 10 \\times 6 \\times h$\n$420 = 60h$\n$h = \\frac{420}{60} = 7$\n\n**Common Mistakes to Avoid:**\n• Using the wrong formula (e.g., surface area instead of volume).\n• Dividing by only one dimension: $420 \\div 10 = 42$ (not the height).\n\n**Verification:** $10 \\times 6 \\times 7 = 420$ ✓\n\n**Test Day Takeaway:** Volume of a box $= l \\times w \\times h$. Divide the volume by the product of the known dimensions.",
          skills: ["volume", "solving-equations"]
        },
        {
          id: 18,
          type: "multiple-choice",
          difficulty: "hard",
          question: "In the $xy$-plane, the graph of $y = (x - 3)(x + 5)$ crosses the $x$-axis at points $A$ and $B$. What is the length of $\\overline{AB}$?",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$5$" },
            { id: "C", text: "$8$" },
            { id: "D", text: "$15$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** The $x$-intercepts are where $y = 0$: $x = 3$ and $x = -5$. Distance $= 3 - (-5) = 8$.\n\n**The Full Solution:**\n$(x - 3)(x + 5) = 0$\n$x = 3$ or $x = -5$\nDistance $= |3 - (-5)| = |3 + 5| = 8$\n\n**Why the wrong answers are tempting:**\n• Choice A ($2$): Difference of the constants $5 - 3 = 2$ without considering the signs.\n• Choice B ($5$): Just the absolute value of one intercept.\n• Choice D ($15$): Product of the constants $3 \\times 5 = 15$.\n\n**Test Day Takeaway:** The $x$-intercepts of $y = (x - a)(x - b)$ are at $x = a$ and $x = b$. The distance between them is $|a - b|$.",
          skills: ["quadratic-functions", "coordinate-geometry"]
        },
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "If $\\sqrt{3x + 7} = 5$, what is the value of $3x + 7$?",
          choices: [
            { id: "A", text: "$5$" },
            { id: "B", text: "$10$" },
            { id: "C", text: "$25$" },
            { id: "D", text: "$32$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Squaring Both Sides**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** If $\\sqrt{\\text{something}} = 5$, then that something $= 25$.\n\n**The Full Solution:**\n$\\sqrt{3x + 7} = 5$\nSquare both sides: $3x + 7 = 25$.\n\nNote: The question asks for $3x + 7$, not $x$. So the answer is $25$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($5$): The value of $\\sqrt{3x+7}$, not $3x + 7$ itself.\n• Choice B ($10$): Doubling $5$ instead of squaring.\n• Choice D ($32$): From $5^2 + 7 = 32$, a misapplication of order of operations.\n\n**Verification:** $\\sqrt{25} = 5$ ✓\n\n**Test Day Takeaway:** If $\\sqrt{A} = B$, then $A = B^2$. Read the question carefully to see what is actually being asked for.",
          skills: ["radical-equations", "solving-equations"]
        },
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A company's revenue $R$, in thousands of dollars, is modeled by $R(x) = -2x^2 + 40x - 150$, where $x$ is the price in dollars. What price maximizes revenue?",
          choices: [
            { id: "A", text: "$\\$5$" },
            { id: "B", text: "$\\$10$" },
            { id: "C", text: "$\\$15$" },
            { id: "D", text: "$\\$20$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Maximum of a Downward Parabola**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Maximum occurs at $x = -\\frac{b}{2a} = -\\frac{40}{2(-2)} = -\\frac{40}{-4} = 10$.\n\n**The Full Solution:**\nSince $a = -2 < 0$, the parabola opens downward, so the vertex is a maximum.\n$x = -\\frac{b}{2a} = -\\frac{40}{2(-2)} = \\frac{40}{4} = 10$\n\nThe price that maximizes revenue is $\\$10$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\$5$): $R(5) = -50 + 200 - 150 = 0$. Revenue is $0$.\n• Choice C ($\\$15$): $R(15) = -450 + 600 - 150 = 0$. Revenue is also $0$ here (this is the other $x$-intercept).\n• Choice D ($\\$20$): $R(20) = -800 + 800 - 150 = -150$. Revenue is negative.\n\n**Verification:** $R(10) = -200 + 400 - 150 = 50$ thousand dollars. ✓\n\n**Test Day Takeaway:** The vertex formula $x = -b/(2a)$ gives the max or min. Max when $a < 0$, min when $a > 0$.",
          skills: ["quadratic-functions", "vertex-form"]
        },
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "A circle has a circumference of $20\\pi$ inches. What is the area of the circle, in square inches? (Give your answer in terms of $\\pi$ as a number, e.g., if the area is $50\\pi$, enter $50$.)",
          correctAnswer: "100",
          explanation: "**SAT Pattern: Circle — Circumference to Area**\n\n**The correct answer is $100$ (the area is $100\\pi$).**\n\n**The Fast Way (20 seconds):** $C = 2\\pi r = 20\\pi$, so $r = 10$. Area $= \\pi r^2 = \\pi(100) = 100\\pi$.\n\n**The Full Solution:**\n$C = 2\\pi r$\n$20\\pi = 2\\pi r$\n$r = 10$\n\n$A = \\pi r^2 = \\pi (10)^2 = 100\\pi$\n\n**Common Mistakes to Avoid:**\n• Using diameter instead of radius: if $d = 20$, then $A = \\pi(20)^2 = 400\\pi$.\n• Forgetting to square: $A = \\pi(10) = 10\\pi$.\n\n**Verification:** $C = 2\\pi(10) = 20\\pi$ ✓. $A = \\pi(10)^2 = 100\\pi$ ✓.\n\n**Test Day Takeaway:** Find the radius from circumference ($r = C/(2\\pi)$), then use $A = \\pi r^2$.",
          skills: ["circles", "area"]
        },
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The function $h$ is defined by $h(x) = 3(2)^x$. For what value of $x$ does $h(x) = 96$?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$5$" },
            { id: "D", text: "$6$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Solving Exponential Equations**\n\n**Choice C is correct.**\n\n**The Fast Way (20 seconds):** $3 \\cdot 2^x = 96$, so $2^x = 32 = 2^5$, meaning $x = 5$.\n\n**The Full Solution:**\n$h(x) = 96$\n$3(2)^x = 96$\n$2^x = 32$\n$2^x = 2^5$\n$x = 5$\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): $h(3) = 3 \\cdot 8 = 24 \\neq 96$.\n• Choice B ($4$): $h(4) = 3 \\cdot 16 = 48 \\neq 96$.\n• Choice D ($6$): $h(6) = 3 \\cdot 64 = 192 \\neq 96$.\n\n**Test Day Takeaway:** Isolate the exponential term, then express both sides with the same base to solve for the exponent.",
          skills: ["exponential-functions", "exponent-rules"]
        }
      ]
    }
  ]
};

export default practiceTest4;
