// Practice Test 4 — Math Module 2 Easy variant (22 questions)
// v2 freshness rebuild (2026-09-07): every slot re-patterned and re-authored against the seen-corpus gate — docs/TEST_RECREATION_V2_SPEC.md
// For students routed to easier path after Module 1 (~<60% correct).
// Distribution: 3E / 13M / 6H. Q1-3 easy openers. Max-score ceiling: ~650.
// Domain mix: 7 Algebra / 6 Advanced Math / 5 Problem-Solving / 4 Geometry & Trig.
// Official-calibration recreation (2026-09-01): fresh scenarios throughout;
// diagrams at Q6 (right triangle), Q7 (dot plot), Q21 (scatterplot),
// Q22 (two-way table). Numeric MC choices sorted ascending.

export const practiceTest4M2Easy = {
  id: "module-2-easy",
  title: "Module 2 (Easy)",
  variant: "easy",
  timeLimit: 35,
  questions: [
    {
      id: 1,
      type: "multiple-choice",
      difficulty: "easy",
      band: 2,
      question: "The graph of $y = f(x)$ is shown in the $xy$-plane. Which equation defines $f$?",
      diagram: { type: "linearGraph", params: { slope: -2, yIntercept: 18, xRange: [0, 8], yRange: [0, 20], xTickInterval: 2, yTickInterval: 4, gridInterval: 2, showPoints: [[2, 14], [6, 6]], label: "y = f(x)" } },
      choices: [
        // distractor: correct slope but uses the y-value at x = 2 as the y-intercept instead of the value at x = 0
        { id: "A", text: "$f(x) = -2x + 14$" },
        { id: "B", text: "$f(x) = -2x + 18$" },
        // distractor: inverts the slope fraction, dividing the change in x by the change in y (4 / -8)
        { id: "C", text: "$f(x) = -\\frac{1}{2}x + 18$" },
        // distractor: drops the negative sign on the slope, so the line rises instead of falls
        { id: "D", text: "$f(x) = 2x + 18$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** From $(2, 14)$ to $(6, 6)$ the line falls $8$ units over $4$ units, so the slope is $-2$. Moving back $2$ units to $x = 0$ raises $y$ by $4$, so the $y$-intercept is $14 + 4 = 18$.\n\n**The Full Solution:**\nStep 1: Read the two marked points on the graph: $(2, 14)$ and $(6, 6)$.\nStep 2: Compute the slope: $\\frac{6 - 14}{6 - 2} = \\frac{-8}{4} = -2$.\nStep 3: Substitute $(2, 14)$ into $f(x) = -2x + b$: $14 = -2(2) + b$, so $b = 18$ and $f(x) = -2x + 18$. Check the other point: $-2(6) + 18 = 6$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($f(x) = -2x + 14$): the slope is right, but $14$ is the $y$-value at $x = 2$, not at $x = 0$. This line passes through $(0, 14)$ and misses both marked points.\n* Choice C ($f(x) = -\\frac{1}{2}x + 18$): this flips the slope fraction to $\\frac{4}{-8}$. At $x = 6$ it gives $15$, not the $6$ shown.\n* Choice D ($f(x) = 2x + 18$): dropping the minus sign gives a rising line; at $x = 6$ it gives $30$, but the graph falls from left to right.\n\n**Test Day Takeaway:** Slope is the change in $y$ over the change in $x$, signs kept, and the $y$-intercept is the value at $x = 0$, not the first coordinate you read off the graph.",
      skills: ["linear-functions", "slope", "coordinate-geometry"]
    },
    {
      id: 2,
      type: "fill-in",
      difficulty: "easy",
      band: 2,
      question: "The mean of a data set of $12$ numbers is $8.5$. If each number in the data set is multiplied by $4$, what is the mean of the new data set?",
      correctAnswer: "34",
      explanation: "**SAT Pattern: Scaling a Data Set by a Constant**\n\n**The correct answer is $34$.**\n\n**The Fast Way (~15s):** Multiplying every value in a data set by $4$ multiplies the mean by $4$, so the new mean is $4(8.5) = 34$.\n\n**The Full Solution:**\nStep 1: A mean of $8.5$ for $12$ numbers means the numbers have a sum of $12(8.5) = 102$.\nStep 2: Multiplying each of the $12$ numbers by $4$ multiplies the sum by $4$: $4(102) = 408$.\nStep 3: There are still $12$ numbers, so the new mean is $\\frac{408}{12} = 34$, which equals $4(8.5)$ ✓\n\n**Common Mistakes:**\n* $12.5$: adding $4$ to the mean instead of multiplying. Adding $4$ to every number would shift the mean to $12.5$, but here every number is scaled.\n* $48$: multiplying the count, $12$, by $4$. That is not a mean of anything in the data set.\n* $2.125$: dividing $8.5$ by $4$, which reverses the operation applied to the data.\n\n**Test Day Takeaway:** Multiplying every value by $k$ multiplies the mean, the median, and the standard deviation by $k$; adding $k$ to every value moves the mean and median but leaves the spread unchanged.",
      skills: ["data-analysis"]
    },
    {
      id: 3,
      type: "multiple-choice",
      difficulty: "easy",
      band: 3,
      question: "The function $f(t) = 4{,}200(1.35)^{t}$ gives the number of bacteria in a sample $t$ hours after the start of an experiment. Which of the following is the best interpretation of $1.35$ in this context?",
      choices: [
        // distractor: reads the growth factor 1.35 itself as the percent increase
        { id: "A", text: "The number of bacteria increases by $1.35\\%$ each hour." },
        // distractor: reads the decimal part 0.35 as a fixed number of bacteria added each hour
        { id: "B", text: "The number of bacteria increases by $35$ each hour." },
        // distractor: reports the whole multiplier as the percent increase instead of the part above 1
        { id: "C", text: "The number of bacteria increases by $135\\%$ each hour." },
        { id: "D", text: "The number of bacteria increases by $35\\%$ each hour." }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** In $a(b)^{t}$ the base $b$ is the hourly multiplier, and $1.35 = 1 + 0.35$, so the number of bacteria grows by $35\\%$ each hour.\n\n**The Full Solution:**\nStep 1: The function has the form $f(t) = a(b)^{t}$ with $a = 4{,}200$, the number of bacteria at $t = 0$, and $b = 1.35$.\nStep 2: Each increase of $1$ in $t$ multiplies the number of bacteria by $1.35$, and a multiplier of $1 + r$ is a percent increase of $r = 0.35$, or $35\\%$.\nStep 3: Check with the numbers: $f(0) = 4{,}200$ and $f(1) = 4{,}200(1.35) = 5{,}670$, an increase of $1{,}470$, and $\\frac{1{,}470}{4{,}200} = 0.35$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($1.35\\%$ each hour): this reads the multiplier as the percent. A $1.35\\%$ increase would multiply by $1.0135$, giving about $4{,}257$ bacteria after one hour, not $5{,}670$.\n* Choice B ($35$ each hour): this treats growth as adding a fixed amount. $4{,}200 + 35 = 4{,}235$, far below $f(1) = 5{,}670$.\n* Choice C ($135\\%$ each hour): a $135\\%$ increase multiplies by $2.35$, giving $9{,}870$ bacteria after one hour. Only the part of the base above $1$ is the percent increase.\n\n**Test Day Takeaway:** In an exponential growth model the base is a multiplier: subtract $1$ and read what remains as the percent increase per unit of time.",
      skills: ["exponential-growth-decay"]
    },
    {
      id: 4,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "$f(x) = 96 - 6x$\nThe function $f$ is defined by the given equation. If $f(a) = 30$, what is the value of $a$?",
      choices: [
        // distractor: sign error while isolating a: divides -66 by 6 instead of by -6
        { id: "A", text: "$-11$" },
        // distractor: divides the output by 6, computing 30 / 6, and ignores the constant 96
        { id: "B", text: "$5$" },
        { id: "C", text: "$11$" },
        // distractor: adds 30 to 96 instead of subtracting, solving 6a = 126
        { id: "D", text: "$21$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Set $96 - 6a = 30$; then $6a = 66$, so $a = 11$.\n\n**The Full Solution:**\nStep 1: $f(a) = 30$ means the expression $96 - 6a$ equals $30$: $96 - 6a = 30$.\nStep 2: Subtract $96$ from both sides: $-6a = -66$.\nStep 3: Divide both sides by $-6$: $a = 11$. Check: $f(11) = 96 - 6(11) = 96 - 66 = 30$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-11$): this divides $-66$ by $6$ instead of by $-6$. Substituting gives $f(-11) = 96 + 66 = 162$, not $30$.\n* Choice B ($5$): this divides the output $30$ by $6$ and ignores the $96$. Substituting gives $f(5) = 96 - 30 = 66$.\n* Choice D ($21$): this moves $96$ to the other side with the wrong sign, solving $6a = 30 + 96 = 126$. Substituting gives $f(21) = 96 - 126 = -30$.\n\n**Test Day Takeaway:** When the output is given and the input is unknown, set the function's expression equal to the output and solve; then evaluate forward once to confirm.",
      skills: ["function-evaluation"]
    },
    {
      id: 5,
      type: "fill-in",
      difficulty: "medium",
      band: 4,
      question: "$6.5x + 11 \\geq 58$\nWhat is the least integer value of $x$ that satisfies the given inequality?",
      correctAnswer: "8",
      explanation: "**SAT Pattern: Smallest Integer in an Inequality**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~20s):** Subtracting $11$ gives $6.5x \\geq 47$, so $x \\geq \\frac{47}{6.5} \\approx 7.23$, and the least integer at or above $7.23$ is $8$.\n\n**The Full Solution:**\nStep 1: Subtract $11$ from both sides: $6.5x \\geq 47$.\nStep 2: Divide both sides by $6.5$: $x \\geq \\frac{47}{6.5} \\approx 7.23$.\nStep 3: The least integer that is at least $7.23$ is $8$. Check both sides of the boundary: $6.5(7) + 11 = 56.5$, which is less than $58$, while $6.5(8) + 11 = 63$, which is at least $58$ ✓\n\n**Common Mistakes:**\n* $7$: rounding $7.23$ down. Then $6.5(7) + 11 = 56.5$, which does not satisfy the inequality.\n* $9$: dropping the $11$ and solving $6.5x \\geq 58$, which gives $x \\geq 8.92$ and rounds up to $9$.\n* $11$: adding $11$ to $58$ instead of subtracting it, solving $6.5x \\geq 69$, which gives $x \\geq 10.6$ and rounds up to $11$.\n\n**Test Day Takeaway:** Solve the inequality first, then round in the direction it points: up for $\\geq$ or $>$, down for $\\leq$ or $<$. Test the integer you choose in the original inequality.",
      skills: ["inequalities"]
    },
    {
      id: 6,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "The table shows the length and width, in meters, of two rectangular gardens, $A$ and $B$. What is the total area, in square meters, of the two gardens?",
      questionTable: { headers: ["Garden", "Length (meters)", "Width (meters)"], rows: [["$A$", "$3.5$", "$1.2$"], ["$B$", "$2.4$", "$1.5$"]] },
      choices: [
        // distractor: finds only garden A's area, 3.5 x 1.2, and stops
        { id: "A", text: "$4.2$" },
        { id: "B", text: "$7.8$" },
        // distractor: adds all four table entries instead of multiplying length by width within each row
        { id: "C", text: "$8.6$" },
        // distractor: computes the combined perimeter, 2(3.5 + 1.2) + 2(2.4 + 1.5), instead of the combined area
        { id: "D", text: "$17.2$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Rectangle Area**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Multiply within each row and add: $3.5(1.2) = 4.2$ and $2.4(1.5) = 3.6$, so the total area is $7.8$ square meters.\n\n**The Full Solution:**\nStep 1: Garden $A$ is $3.5$ meters by $1.2$ meters, so its area is $3.5 \\times 1.2 = 4.2$ square meters.\nStep 2: Garden $B$ is $2.4$ meters by $1.5$ meters, so its area is $2.4 \\times 1.5 = 3.6$ square meters.\nStep 3: The total area is $4.2 + 3.6 = 7.8$ square meters. Check the size: each garden is less than $4$ meters long and at most $1.5$ meters wide, so each area is at most $6$ square meters, and a total near $8$ is reasonable ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4.2$): this is garden $A$ alone. The question asks for the total, and garden $B$ adds another $3.6$ square meters.\n* Choice C ($8.6$): this adds the four numbers in the table, $3.5 + 1.2 + 2.4 + 1.5$. Adding lengths to widths gives meters, not square meters.\n* Choice D ($17.2$): this is the combined perimeter, $9.4 + 7.8$. Perimeter measures the boundary; area measures the surface inside it.\n\n**Test Day Takeaway:** When a table gives dimensions row by row, multiply within each row first and combine the results afterward.",
      skills: ["triangle-area"]
    },
    {
      id: 7,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A researcher selected a random sample of $240$ cartons of milk from a dairy and measured the fat content of each carton. Based on the sample, it is estimated that the mean fat content of all cartons from the dairy is between $3.42\\%$ and $3.68\\%$. What is the margin of error associated with this estimate?",
      choices: [
        // distractor: divides the interval width by 4 instead of by 2
        { id: "A", text: "$0.065\\%$" },
        { id: "B", text: "$0.13\\%$" },
        // distractor: reports the full interval width, 3.68 - 3.42, as the margin of error
        { id: "C", text: "$0.26\\%$" },
        // distractor: reports the center of the interval, the sample mean, instead of the margin of error
        { id: "D", text: "$3.55\\%$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Margin of Error**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The interval is $3.68 - 3.42 = 0.26$ percentage points wide, and the margin of error is half the width: $0.13\\%$.\n\n**The Full Solution:**\nStep 1: An estimate with a margin of error gives the interval from (estimate $-$ margin) to (estimate $+$ margin), so the margin of error is half the width of the interval.\nStep 2: The width is $3.68 - 3.42 = 0.26$ percentage points, so the margin of error is $\\frac{0.26}{2} = 0.13$ percentage points.\nStep 3: Check by rebuilding the interval. The center is $\\frac{3.42 + 3.68}{2} = 3.55\\%$, and $3.55 \\pm 0.13$ gives $3.42\\%$ to $3.68\\%$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.065\\%$): this halves the width twice, $\\frac{0.26}{4}$. Rebuilding with it gives $3.485\\%$ to $3.615\\%$, narrower than the reported interval.\n* Choice C ($0.26\\%$): this is the full width. Rebuilding with it gives $3.29\\%$ to $3.81\\%$, twice as wide as reported.\n* Choice D ($3.55\\%$): this is the sample mean, the center of the interval, not the distance from the center to an endpoint.\n\n**Test Day Takeaway:** The margin of error is half the width of the interval: subtract the endpoints, divide by $2$, and rebuild the interval to confirm.",
      skills: ["margin-of-error"]
    },
    {
      id: 8,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "$\\frac{9^{a} \\cdot 9^{5}}{9^{2}} = 9^{14}$\nWhat value of $a$ is the solution to the given equation?",
      choices: [
        // distractor: subtracts the denominator's exponent a second time, computing 14 - 5 - 2 instead of 14 - 5 + 2
        { id: "A", text: "$7$" },
        // distractor: ignores the denominator and solves a + 5 = 14
        { id: "B", text: "$9$" },
        { id: "C", text: "$11$" },
        // distractor: adds all three exponents, 14 + 5 + 2, instead of solving for a
        { id: "D", text: "$21$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The left side simplifies to $9^{a + 5 - 2} = 9^{a + 3}$, so $a + 3 = 14$ and $a = 11$.\n\n**The Full Solution:**\nStep 1: Multiplying powers with the same base adds the exponents: $9^{a} \\cdot 9^{5} = 9^{a + 5}$.\nStep 2: Dividing powers with the same base subtracts the exponents: $\\frac{9^{a + 5}}{9^{2}} = 9^{a + 3}$.\nStep 3: Two powers of $9$ are equal only when their exponents are equal, so $a + 3 = 14$ and $a = 11$. Check: $\\frac{9^{11} \\cdot 9^{5}}{9^{2}} = \\frac{9^{16}}{9^{2}} = 9^{14}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): this subtracts the $2$ instead of adding it back, computing $14 - 5 - 2$. Substituting gives $9^{7 + 3} = 9^{10}$, not $9^{14}$.\n* Choice B ($9$): this ignores the denominator and solves $a + 5 = 14$. Substituting gives $9^{9 + 3} = 9^{12}$.\n* Choice D ($21$): this adds every exponent in sight, $14 + 5 + 2$. Substituting gives $9^{24}$.\n\n**Test Day Takeaway:** Collapse one side to a single power of the base first, then set the exponents equal.",
      skills: ["exponent-laws"]
    },
    {
      id: 9,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The scatterplot shows the relationship between soil moisture $x$, in percent, and crop yield $y$, in kilograms, for $12$ plots of land. The line of best fit shown has the equation $y = 2.5x + 9$. According to the line of best fit, what is the soil moisture, in percent, of a plot with a predicted yield of $41.5$ kilograms?",
      diagram: { type: "scatterplot", params: { points: [[1, 12.1], [2, 13.2], [3, 17.8], [4, 18.1], [5, 23], [6, 22.6], [7, 28.3], [8, 27.9], [9, 32.8], [10, 33.4], [11, 38.2], [12, 37.5]], xMin: 0, xMax: 15, yMin: 0, yMax: 50, xGridStep: 1, yGridStep: 5, xLabelStep: 3, yLabelStep: 10, xLabel: "Soil moisture (percent)", yLabel: "Yield (kg per plot)", bestFitLine: { slope: 2.5, intercept: 9 } } },
      correctAnswer: "13",
      explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**The correct answer is $13$.**\n\n**The Fast Way (~20s):** Set $2.5x + 9 = 41.5$; then $2.5x = 32.5$, so $x = 13$.\n\n**The Full Solution:**\nStep 1: The line of best fit gives the predicted yield $y$ for a soil moisture $x$, so substitute $41.5$ for $y$: $2.5x + 9 = 41.5$.\nStep 2: Subtract $9$ from both sides: $2.5x = 32.5$.\nStep 3: Divide both sides by $2.5$: $x = 13$. Check: $2.5(13) + 9 = 32.5 + 9 = 41.5$ ✓\n\n**Common Mistakes:**\n* $16.6$: dividing $41.5$ by $2.5$ without first subtracting the $9$.\n* $81.25$: multiplying by $2.5$ instead of dividing, computing $(41.5 - 9)(2.5)$.\n* $20.2$: adding $9$ instead of subtracting it, computing $\\frac{41.5 + 9}{2.5}$.\n\n**Test Day Takeaway:** A line of best fit works in both directions: substitute $x$ to predict $y$, or substitute $y$ and solve for $x$, undoing the constant before the slope.",
      skills: ["scatterplots", "linear-functions"]
    },
    {
      id: 10,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A company charges \\$96 plus \\$23 per day to rent a trailer. Ana paid a total of \\$878 to rent a trailer for $d$ days. Which equation represents this situation?",
      choices: [
        { id: "A", text: "$23d + 96 = 878$" },
        // distractor: subtracts the one-time charge instead of adding it to the daily charges
        { id: "B", text: "$23d - 96 = 878$" },
        // distractor: swaps the roles of 96 and 23, charging 96 dollars per day and 23 dollars once
        { id: "C", text: "$96d + 23 = 878$" },
        // distractor: multiplies the one-time charge by the daily rate instead of adding it once
        { id: "D", text: "$23(d + 96) = 878$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The daily rate times the number of days, plus the one-time charge, equals the total: $23d + 96 = 878$.\n\n**The Full Solution:**\nStep 1: The \\$23 is charged once for each day, so $d$ days cost $23d$ dollars.\nStep 2: The \\$96 is charged once for the whole rental, so it is added to $23d$, not multiplied by $d$.\nStep 3: The total is \\$878, so $23d + 96 = 878$. Solving gives $23d = 782$ and $d = 34$; check: $23(34) + 96 = 782 + 96 = 878$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($23d - 96 = 878$): this subtracts the one-time charge, as if it were a discount. Ana pays the \\$96 in addition to the daily charges.\n* Choice C ($96d + 23 = 878$): this swaps the two amounts, charging \\$96 per day and \\$23 once.\n* Choice D ($23(d + 96) = 878$): distributing gives $23d + 2{,}208$, which is already more than \\$878 when $d = 0$.\n\n**Test Day Takeaway:** A one-time charge is added once; only the amount that repeats is multiplied by the number of times it repeats.",
      skills: ["combining-like-terms"]
    },
    {
      id: 11,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A load of grain was dried and then cleaned. The table shows the percent decrease in the mass of the grain during each stage. After both stages, the grain had a mass of $1{,}080$ kilograms. What was the mass, in kilograms, of the grain before it was dried?",
      questionTable: { headers: ["Stage", "Percent decrease in mass"], rows: [["Drying", "$20\\%$"], ["Cleaning", "$10\\%$"]] },
      choices: [
        // distractor: undoes only the cleaning stage, computing 1,080 / 0.9
        { id: "A", text: "$1{,}200$" },
        // distractor: undoes only the drying stage, computing 1,080 / 0.8
        { id: "B", text: "$1{,}350$" },
        // distractor: adds the two percents to the final mass, computing 1,080 x 1.30, instead of dividing
        { id: "C", text: "$1{,}404$" },
        { id: "D", text: "$1{,}500$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Reverse-Percent Multi-Step**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** The two decreases multiply: $0.8 \\times 0.9 = 0.72$, so the original mass is $\\frac{1{,}080}{0.72} = 1{,}500$ kilograms.\n\n**The Full Solution:**\nStep 1: Let $M$ be the mass before drying. A $20\\%$ decrease leaves $80\\%$, so after drying the mass is $0.8M$.\nStep 2: A $10\\%$ decrease leaves $90\\%$ of that, so after cleaning the mass is $0.9(0.8M) = 0.72M$, and $0.72M = 1{,}080$.\nStep 3: Divide: $M = \\frac{1{,}080}{0.72} = 1{,}500$ kilograms. Check: $1{,}500(0.8) = 1{,}200$ after drying, and $1{,}200(0.9) = 1{,}080$ after cleaning ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($1{,}200$): this undoes only the cleaning stage, $\\frac{1{,}080}{0.9}$. It is the mass after drying, not before.\n* Choice B ($1{,}350$): this undoes only the drying stage, $\\frac{1{,}080}{0.8}$, and ignores the cleaning stage.\n* Choice C ($1{,}404$): this adds $30\\%$ to the final mass, $1{,}080(1.30)$. A percent decrease is undone by dividing by the multiplier, and two percent decreases do not simply add.\n\n**Test Day Takeaway:** Combine successive percent changes by multiplying their multipliers, then divide the final amount by that product to recover the original.",
      skills: ["percent-of-value", "percent-word-problems"]
    },
    {
      id: 12,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "In triangle $ABC$, point $D$ lies on $\\overline{AB}$ and point $E$ lies on $\\overline{AC}$ such that $\\overline{DE}$ is parallel to $\\overline{BC}$. If $AD = 12$, $DB = 8$, and $AE = 15$, what is the length of $\\overline{EC}$?",
      correctAnswer: "10",
      explanation: "**SAT Pattern: Similar Triangles Proportion**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~25s):** A segment parallel to one side of a triangle divides the other two sides proportionally, so $\\frac{12}{8} = \\frac{15}{EC}$ and $EC = \\frac{15(8)}{12} = 10$.\n\n**The Full Solution:**\nStep 1: Since $\\overline{DE}$ is parallel to $\\overline{BC}$, triangle $ADE$ is similar to triangle $ABC$, and $\\overline{DE}$ divides $\\overline{AB}$ and $\\overline{AC}$ in the same ratio.\nStep 2: Set up the proportion: $\\frac{AD}{DB} = \\frac{AE}{EC}$, so $\\frac{12}{8} = \\frac{15}{EC}$.\nStep 3: Cross multiply: $12 \\cdot EC = 120$, so $EC = 10$. Check with the whole sides: $\\frac{AD}{AB} = \\frac{12}{20} = 0.6$ and $\\frac{AE}{AC} = \\frac{15}{25} = 0.6$ ✓\n\n**Common Mistakes:**\n* $25$: pairing the part $AD$ with the whole side $AB$, solving $\\frac{12}{20} = \\frac{15}{x}$. That gives $AC$, not $EC$.\n* $22.5$: flipping one ratio, solving $\\frac{8}{12} = \\frac{15}{x}$.\n* $8$: assuming $EC$ equals $DB$. The two sides are divided in the same ratio, not into equal lengths.\n\n**Test Day Takeaway:** With a segment parallel to a side, match the pieces: part-to-part on one side equals part-to-part on the other, or whole-to-part on both.",
      skills: ["similar-triangles"]
    },
    {
      id: 13,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A machine fills $c$ bottles per minute. A second machine fills $9$ fewer than $2$ times as many bottles per minute as the first machine. Which expression represents the total number of bottles the two machines fill in $m$ minutes?",
      choices: [
        // distractor: counts only the second machine's rate, 2c - 9, and leaves out the first machine
        { id: "A", text: "$m(2c - 9)$" },
        // distractor: reads 9 fewer than 2 times as 9 more than 2 times, adding 9 instead of subtracting it
        { id: "B", text: "$m(3c + 9)$" },
        // distractor: subtracts 9 from each machine's rate instead of from the second machine's rate only
        { id: "C", text: "$m(3c - 18)$" },
        { id: "D", text: "$m(3c - 9)$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Word-to-Expression Translation**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** Together the machines fill $c + (2c - 9) = 3c - 9$ bottles per minute, so in $m$ minutes they fill $m(3c - 9)$ bottles.\n\n**The Full Solution:**\nStep 1: The first machine fills $c$ bottles per minute. Nine fewer than $2$ times that is $2c - 9$, the second machine's rate.\nStep 2: Add the two rates: $c + 2c - 9 = 3c - 9$ bottles per minute.\nStep 3: Multiply the combined rate by the number of minutes: $m(3c - 9)$. Check with $c = 10$: the machines fill $10$ and $11$ bottles per minute, $21$ together, and $m(3 \\cdot 10 - 9) = 21m$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($m(2c - 9)$): this is the second machine alone. With $c = 10$ it gives $11m$, leaving out the first machine's $10m$.\n* Choice B ($m(3c + 9)$): this adds the $9$ instead of subtracting it. With $c = 10$ it gives $39m$, not $21m$.\n* Choice C ($m(3c - 18)$): this subtracts $9$ from both rates. With $c = 10$ it gives $12m$.\n\n**Test Day Takeaway:** Translate each phrase into its own expression, combine the pieces, and then multiply by the time.",
      skills: ["word-problem-to-equation"]
    },
    {
      id: 14,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "$2x^{2} + kx - 40$\nIn the given expression, $k$ is a constant, and $x - 4$ is a factor of the expression. What is the value of $k$?",
      choices: [
        // distractor: substitutes x = -4 instead of x = 4, the value that makes x - 4 equal to 0
        { id: "A", text: "$-2$" },
        { id: "B", text: "$2$" },
        // distractor: drops the leading coefficient 2 and solves 16 + 4k - 40 = 0
        { id: "C", text: "$6$" },
        // distractor: sets the expression equal to 40 instead of 0 after substituting x = 4
        { id: "D", text: "$12$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Polynomial Factoring with Given Factor**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** If $x - 4$ is a factor, the expression equals $0$ when $x = 4$: $32 + 4k - 40 = 0$, so $k = 2$.\n\n**The Full Solution:**\nStep 1: Since $x - 4$ is a factor, the expression equals $0$ when $x = 4$.\nStep 2: Substitute $x = 4$: $2(4)^{2} + k(4) - 40 = 32 + 4k - 40 = 4k - 8$. Setting this equal to $0$ gives $4k = 8$.\nStep 3: So $k = 2$. Check by factoring: $2x^{2} + 2x - 40 = 2(x^{2} + x - 20) = 2(x + 5)(x - 4)$, which has $x - 4$ as a factor ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$): this substitutes $x = -4$. With $k = -2$ the expression is $2(x + 4)(x - 5)$, which does not have $x - 4$ as a factor.\n* Choice C ($6$): this drops the leading $2$ and solves $16 + 4k - 40 = 0$. With $k = 6$, substituting $x = 4$ gives $32 + 24 - 40 = 16$, not $0$.\n* Choice D ($12$): this sets the expression equal to $40$ instead of $0$. With $k = 12$, substituting $x = 4$ gives $40$, not $0$.\n\n**Test Day Takeaway:** If $x - r$ is a factor of a polynomial, the polynomial equals $0$ at $x = r$; substitute $r$ and solve for the unknown constant.",
      skills: ["finding-roots-factoring"]
    },
    {
      id: 15,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "In the $xy$-plane, a circle has center $(-4, 7)$ and radius $9$. Which equation represents this circle?",
      choices: [
        { id: "A", text: "$(x + 4)^2 + (y - 7)^2 = 81$" },
        // distractor: uses the radius 9 on the right side instead of the radius squared, 81
        { id: "B", text: "$(x + 4)^2 + (y - 7)^2 = 9$" },
        // distractor: copies the center's x-coordinate -4 into the parentheses without changing its sign
        { id: "C", text: "$(x - 4)^2 + (y - 7)^2 = 81$" },
        // distractor: changes the sign of the center's y-coordinate, placing the center at (-4, -7)
        { id: "D", text: "$(x + 4)^2 + (y + 7)^2 = 81$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Circle in Standard Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** A circle with center $(h, k)$ and radius $r$ has equation $(x - h)^{2} + (y - k)^{2} = r^{2}$, so this circle is $(x + 4)^{2} + (y - 7)^{2} = 81$.\n\n**The Full Solution:**\nStep 1: Write the standard form: $(x - h)^{2} + (y - k)^{2} = r^{2}$, where $(h, k)$ is the center and $r$ is the radius.\nStep 2: Substitute $h = -4$ and $k = 7$: $x - (-4) = x + 4$ and $y - 7$.\nStep 3: Square the radius: $9^{2} = 81$, so the equation is $(x + 4)^{2} + (y - 7)^{2} = 81$. Check a point $9$ units to the right of the center, $(5, 7)$: $(5 + 4)^{2} + (7 - 7)^{2} = 81$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($= 9$): the right side is $r^{2}$, not $r$. This equation is a circle with radius $3$.\n* Choice C ($(x - 4)^{2}$): this copies $-4$ without changing its sign, which centers the circle at $(4, 7)$.\n* Choice D ($(y + 7)^{2}$): this changes the sign of the positive $y$-coordinate, which centers the circle at $(-4, -7)$.\n\n**Test Day Takeaway:** Standard form subtracts the center's coordinates, so a negative coordinate appears with a plus sign, and the right side is always the radius squared.",
      skills: ["circle-equation"]
    },
    {
      id: 16,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The dot plot shows the number of books each of $12$ students read during the summer. What is the median number of books read by these students?",
      diagram: { type: "dotPlot", params: { data: [{ value: 3, count: 5 }, { value: 4, count: 2 }, { value: 6, count: 1 }, { value: 7, count: 1 }, { value: 8, count: 2 }, { value: 11, count: 1 }], xMin: 2, xMax: 12, xLabel: "Number of books read" } },
      correctAnswer: "4",
      explanation: "**SAT Pattern: Median Calculation**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~25s):** With $12$ values, the median is the mean of the $6$th and $7$th values. Five dots are at $3$ and two are at $4$, so the $6$th and $7$th values are both $4$.\n\n**The Full Solution:**\nStep 1: Read the dot plot: five students read $3$ books, two read $4$, one read $6$, one read $7$, two read $8$, and one read $11$, for $12$ students in all.\nStep 2: In order, the values are $3, 3, 3, 3, 3, 4, 4, 6, 7, 8, 8, 11$. With an even number of values, the median is the mean of the $6$th and $7$th values.\nStep 3: Those values are $4$ and $4$, so the median is $\\frac{4 + 4}{2} = 4$. Check: six values ($3, 3, 3, 3, 3, 4$) are at or below $4$ and six values ($4, 6, 7, 8, 8, 11$) are at or above it ✓\n\n**Common Mistakes:**\n* $6.5$: finding the middle of the six different values $3, 4, 6, 7, 8, 11$. Every dot is a value, so the five dots at $3$ all count.\n* $5.25$: computing the mean, $\\frac{63}{12}$, instead of the median.\n* $3$: reporting the most common value, which is the mode.\n\n**Test Day Takeaway:** On a dot plot, each dot is one data value; list or count the dots in order to find the middle position.",
      skills: ["find-median"]
    },
    {
      id: 17,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "$3x + ky = 12$\nIn the given equation, $k$ is a constant. In the $xy$-plane, the graph of the given equation is perpendicular to a line with slope $-\\frac{5}{3}$. What is the value of $k$?",
      choices: [
        { id: "A", text: "$-5$" },
        // distractor: flips the slope fraction but keeps the wrong sign, solving -3/k = 5/3
        { id: "B", text: "$-\\frac{9}{5}$" },
        // distractor: gives the two lines the same slope, solving -3/k = -5/3
        { id: "C", text: "$\\frac{9}{5}$" },
        // distractor: reads the slope of 3x + ky = 12 as 3/k, dropping the negative sign
        { id: "D", text: "$5$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** A line perpendicular to a line with slope $-\\frac{5}{3}$ has slope $\\frac{3}{5}$. The graph of $3x + ky = 12$ has slope $-\\frac{3}{k}$, so $-\\frac{3}{k} = \\frac{3}{5}$ and $k = -5$.\n\n**The Full Solution:**\nStep 1: Solve the given equation for $y$: $ky = -3x + 12$, so $y = -\\frac{3}{k}x + \\frac{12}{k}$, and its slope is $-\\frac{3}{k}$.\nStep 2: The slopes of perpendicular lines have a product of $-1$: $\\left(-\\frac{3}{k}\\right)\\left(-\\frac{5}{3}\\right) = \\frac{5}{k} = -1$.\nStep 3: Solving gives $k = -5$. Check: with $k = -5$ the equation is $3x - 5y = 12$, whose slope is $\\frac{3}{5}$, and $\\frac{3}{5}\\left(-\\frac{5}{3}\\right) = -1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-\\frac{9}{5}$): this sets $-\\frac{3}{k}$ equal to $\\frac{5}{3}$, flipping the fraction without changing the sign. Slopes of $\\frac{5}{3}$ and $-\\frac{5}{3}$ have a product of $-\\frac{25}{9}$, not $-1$.\n* Choice C ($\\frac{9}{5}$): this gives the graph the same slope, $-\\frac{5}{3}$, as the other line. Lines with equal slopes are parallel, not perpendicular.\n* Choice D ($5$): this reads the slope as $\\frac{3}{k}$, forgetting the sign change when $3x$ moves across. With $k = 5$ the slope is $-\\frac{3}{5}$, and $-\\frac{3}{5}\\left(-\\frac{5}{3}\\right) = 1$, not $-1$.\n\n**Test Day Takeaway:** Solve for $y$ before reading a slope from $Ax + By = C$; a perpendicular slope is the negative reciprocal, so flip the fraction and change the sign.",
      skills: ["perpendicular-negative-reciprocal"]
    },
    {
      id: 18,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "In the $xy$-plane, a triangle has vertices at $(1, 2)$, $(8, 3)$, and $(4, 9)$. What is the area, in square units, of the triangle?",
      correctAnswer: "23",
      explanation: "**SAT Pattern: Area of Triangle from Coordinates**\n\n**The correct answer is $23$.**\n\n**The Fast Way (~45s):** The triangle fits inside the $7$ by $7$ rectangle from $(1, 2)$ to $(8, 9)$, which has area $49$. Subtracting the three right triangles in the corners, $3.5 + 12 + 10.5 = 26$, leaves $23$.\n\n**The Full Solution:**\nStep 1: No side of the triangle is horizontal or vertical, so enclose it in a rectangle: $x$ runs from $1$ to $8$ and $y$ runs from $2$ to $9$, giving a $7$ by $7$ rectangle with area $49$.\nStep 2: Three right triangles lie inside the rectangle but outside the triangle: legs $7$ and $1$ give $3.5$; legs $4$ and $6$ give $12$; legs $3$ and $7$ give $10.5$. Their total area is $26$.\nStep 3: Subtract: $49 - 26 = 23$ square units. Check with the coordinate formula: $\\frac{1}{2}|1(3 - 9) + 8(9 - 2) + 4(2 - 3)| = \\frac{1}{2}|-6 + 56 - 4| = 23$ ✓\n\n**Common Mistakes:**\n* $49$: reporting the area of the enclosing rectangle.\n* $26$: reporting the total area of the three corner triangles, which is the part to remove.\n* $24.5$: using the horizontal extent $7$ as a base and the vertical extent $7$ as a height, $\\frac{1}{2}(7)(7)$. Neither is a side and its height for this triangle.\n\n**Test Day Takeaway:** When no side of a coordinate triangle is horizontal or vertical, enclose it in a rectangle and subtract the corner right triangles.",
      skills: ["triangle-area"]
    },
    {
      id: 19,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "A truck is carrying $x$ small crates and $y$ large crates, for a total of $48$ crates. Each small crate has a mass of $340$ kilograms, each large crate has a mass of $560$ kilograms, and the total mass of the crates is $18.3$ metric tons. Which of the following systems of equations represents this situation? ($1$ metric ton $= 1{,}000$ kilograms)",
      choices: [
        // distractor: swaps the two totals, setting the number of crates equal to the mass and the mass equal to the number of crates
        { id: "A", text: "$x + y = 18.3$ and $340x + 560y = 48$" },
        // distractor: leaves the total mass in metric tons while the mass of each crate is in kilograms
        { id: "B", text: "$x + y = 48$ and $340x + 560y = 18.3$" },
        // distractor: converts the mass of each crate to metric tons but writes the total mass in kilograms
        { id: "C", text: "$x + y = 48$ and $0.34x + 0.56y = 18{,}300$" },
        { id: "D", text: "$x + y = 48$ and $340x + 560y = 18{,}300$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** One equation counts crates, $x + y = 48$. The other adds masses in kilograms, and $18.3$ metric tons is $18{,}300$ kilograms, so $340x + 560y = 18{,}300$.\n\n**The Full Solution:**\nStep 1: The number of small crates plus the number of large crates is $48$: $x + y = 48$.\nStep 2: The small crates have a mass of $340x$ kilograms and the large crates $560y$ kilograms. The total must also be in kilograms: $18.3 \\times 1{,}000 = 18{,}300$, so $340x + 560y = 18{,}300$.\nStep 3: Confirm the system has a sensible solution: substituting $y = 48 - x$ gives $340x + 26{,}880 - 560x = 18{,}300$, so $220x = 8{,}580$, $x = 39$, and $y = 9$. Check: $340(39) + 560(9) = 13{,}260 + 5{,}040 = 18{,}300$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: this swaps the totals, saying there are $18.3$ crates with a total mass of $48$ kilograms, which is less than the mass of one crate.\n* Choice B: the units do not match. With each crate's mass in kilograms, a total of $18.3$ kilograms is less than the mass of one crate.\n* Choice C: this converts the mass of each crate to metric tons but leaves the total in kilograms; reaching $18{,}300$ that way would take more than $30{,}000$ crates, not $48$.\n\n**Test Day Takeaway:** Write one equation for each total, and make sure every term in an equation is in the same unit before you choose it.",
      skills: ["word-problem-to-equation", "setting-up-systems"]
    },
    {
      id: 20,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "In the $xy$-plane, line $\\ell$ passes through the midpoint of the segment with endpoints $(-9, 4)$ and $(5, -12)$. Line $\\ell$ is parallel to the line $y = 3x + 7$. Which equation defines line $\\ell$?",
      choices: [
        // distractor: finds the midpoint (-2, -4) but makes a sign error solving for b, computing -4 + 3(-2) = -10
        { id: "A", text: "$y = 3x - 10$" },
        // distractor: uses the midpoint's y-coordinate, -4, as the y-intercept
        { id: "B", text: "$y = 3x - 4$" },
        { id: "C", text: "$y = 3x + 2$" },
        // distractor: adds the endpoint coordinates without dividing by 2, using (-4, -8) as the midpoint
        { id: "D", text: "$y = 3x + 4$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Midpoint Formula**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** The midpoint is $\\left(\\frac{-9 + 5}{2}, \\frac{4 + (-12)}{2}\\right) = (-2, -4)$, and line $\\ell$ has slope $3$. Then $-4 = 3(-2) + b$ gives $b = 2$, so $y = 3x + 2$.\n\n**The Full Solution:**\nStep 1: Find the midpoint by averaging the coordinates: $\\frac{-9 + 5}{2} = -2$ and $\\frac{4 + (-12)}{2} = -4$, so the midpoint is $(-2, -4)$.\nStep 2: Parallel lines have equal slopes, so line $\\ell$ has slope $3$ and an equation of the form $y = 3x + b$.\nStep 3: Substitute $(-2, -4)$: $-4 = 3(-2) + b$, so $b = -4 + 6 = 2$, and line $\\ell$ is $y = 3x + 2$. Check: $3(-2) + 2 = -4$, so the line passes through the midpoint ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = 3x - 10$): this solves $-4 = -6 + b$ incorrectly as $b = -4 - 6$. At $x = -2$ this line gives $y = -16$, not $-4$.\n* Choice B ($y = 3x - 4$): this uses the midpoint's $y$-coordinate as the $y$-intercept. The $y$-intercept is the value of $y$ at $x = 0$, and the midpoint has $x = -2$.\n* Choice D ($y = 3x + 4$): this adds the coordinates without dividing by $2$, using $(-4, -8)$. That point is not the midpoint, so the line misses $(-2, -4)$: $3(-2) + 4 = -2$.\n\n**Test Day Takeaway:** For a line through a midpoint, find the midpoint first by averaging the coordinates, then substitute it into $y = mx + b$ with the given slope.",
      skills: ["coordinate-geometry"]
    },
    {
      id: 21,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "The bar graph shows the mass, in kilograms, of apples of each of five varieties harvested at an orchard. Of the Gala apples harvested, $15\\%$ were bruised. The mass of the bruised Gala apples is what percent of the total mass of apples harvested?",
      diagram: { type: "barChart", params: { data: [{ label: "Gala", value: 240 }, { label: "Fuji", value: 200 }, { label: "Honeycrisp", value: 160 }, { label: "Braeburn", value: 120 }, { label: "Cortland", value: 80 }], xAxisLabel: "Variety", yAxisLabel: "Mass (kilograms)", yMax: 280, yStep: 40 } },
      correctAnswer: "4.5",
      explanation: "**SAT Pattern: Percent of a Whole**\n\n**The correct answer is $4.5$.**\n\n**The Fast Way (~40s):** Gala apples are $\\frac{240}{800} = 30\\%$ of the total mass, and $15\\%$ of them were bruised: $0.15(30\\%) = 4.5\\%$.\n\n**The Full Solution:**\nStep 1: Add the five bars: $240 + 200 + 160 + 120 + 80 = 800$ kilograms.\nStep 2: The bruised Gala apples are $15\\%$ of the $240$ kilograms of Gala apples: $0.15(240) = 36$ kilograms.\nStep 3: As a percent of the total: $\\frac{36}{800} = 0.045 = 4.5\\%$. Check: Gala apples are $30\\%$ of the total, and $15\\%$ of $30\\%$ is $4.5\\%$ ✓\n\n**Common Mistakes:**\n* $30$: reporting the Gala apples' share of the total and never applying the $15\\%$.\n* $15$: repeating the given percent, which is a percent of the Gala apples only, not of all the apples.\n* $25.5$: finding the unbruised Gala apples as a percent of the total, $\\frac{204}{800}$.\n\n**Test Day Takeaway:** Every percent has a whole. When a percent is given for one category and the question asks about the full data set, convert it to an amount first, then divide by the new whole.",
      skills: ["percent-of-value"]
    },
    {
      id: 22,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "The table shows the number of clear nights and cloudy nights recorded at a weather station during winter and during summer, where $n$ is a positive integer. If one of the summer nights is selected at random, the probability of selecting a clear night is $0.75$. If one of the clear nights is selected at random, what is the probability of selecting a summer night?",
      diagram: { type: "twoWayTable", params: { headers: ["", "Clear", "Cloudy", "Total"], rows: [["Winter", "24", "36", "60"], ["Summer", "n", "20", "n + 20"]] } },
      choices: [
        // distractor: finds the probability that a clear night was in winter, 24/84, instead of in summer
        { id: "A", text: "$\\frac{2}{7}$" },
        // distractor: divides the 60 clear summer nights by all 140 nights instead of by the 84 clear nights
        { id: "B", text: "$\\frac{3}{7}$" },
        { id: "C", text: "$\\frac{5}{7}$" },
        // distractor: reuses the given 0.75, treating the probability of clear given summer as the probability of summer given clear
        { id: "D", text: "$\\frac{3}{4}$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (~50s):** If $75\\%$ of summer nights are clear, the $20$ cloudy summer nights are the other $25\\%$, so there are $80$ summer nights and $n = 60$. There are $24 + 60 = 84$ clear nights, so the probability is $\\frac{60}{84} = \\frac{5}{7}$.\n\n**The Full Solution:**\nStep 1: The given probability is out of the summer nights: $\\frac{n}{n + 20} = 0.75$.\nStep 2: Solve: $n = 0.75n + 15$, so $0.25n = 15$ and $n = 60$.\nStep 3: Now the selection is from the clear nights: there are $24 + 60 = 84$, and $60$ of them are summer nights, so the probability is $\\frac{60}{84} = \\frac{5}{7}$. Check the given condition: $\\frac{60}{60 + 20} = \\frac{60}{80} = 0.75$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{2}{7}$): this is $\\frac{24}{84}$, the probability that a clear night is a winter night.\n* Choice B ($\\frac{3}{7}$): this is $\\frac{60}{140}$, which divides by all the nights. Selecting from the clear nights means the denominator is $84$.\n* Choice D ($\\frac{3}{4}$): this reuses the given $0.75$. The probability that a summer night is clear is not the same as the probability that a clear night is in summer.\n\n**Test Day Takeaway:** In a conditional probability, the group you select from is the denominator. Find any missing value first, then total the group named in the question.",
      skills: ["conditional-probability", "two-way-table"]
    }
  ]
};

export default practiceTest4M2Easy;
