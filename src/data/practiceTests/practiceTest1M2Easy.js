// Practice Test 1 — Math Module 2 Easy variant (22 questions)
// v2 freshness rebuild (2026-09-07): every slot re-patterned and re-authored against the seen-corpus gate — docs/TEST_RECREATION_V2_SPEC.md
// For students routed to easier path after Module 1 (~<60% correct).
// Distribution: 3E / 13M / 6H. Q1-3 easy openers. Max-score ceiling: ~650.
// Domain mix: 7 Algebra / 6 Advanced Math / 5 Problem-Solving / 4 Geometry & Trig.
// Official-calibration recreation (2026-08-31): fresh content authored per
// docs/TEST_RECREATION_SPEC.md against the CB Educator QBank register.

export const practiceTest1M2Easy = {
  id: "module-2-easy",
  title: "Module 2 (Easy)",
  variant: "easy",
  timeLimit: 35,
  questions: [
    // ============================================================
    // Q1-Q3: Easy openers (band 2-3)
    // ============================================================
    {
      id: 1,
      type: "multiple-choice",
      difficulty: "easy",
      band: 2,
      question: "For the linear function $f$, the table shows four values of $x$ and their corresponding values of $f(x)$. In the $xy$-plane, line $k$ and the graph of $y = f(x)$ have no points in common. Which of the following could be an equation of line $k$?",
      questionTable: { headers: ["$x$", "$f(x)$"], rows: [["$1$", "$-2$"], ["$2$", "$3$"], ["$3$", "$8$"], ["$4$", "$13$"]] },
      choices: [
        // distractor: negates the slope instead of matching it; a line of slope -5 crosses a line of slope 5 exactly once
        { id: "A", text: "$y = -5x - 7$" },
        // distractor: reproduces f itself, so the two graphs share every point rather than none
        { id: "B", text: "$y = 5x - 7$" },
        { id: "C", text: "$y = 5x + 6$" },
        // distractor: changes the slope to 6 rather than keeping it at 5, so the two lines cross once
        { id: "D", text: "$y = 6x - 7$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The values of $f(x)$ rise by $5$ each time $x$ rises by $1$, so $f(x) = 5x - 7$. A line with no points in common with this graph must have slope $5$ and a different $y$-intercept, and only $y = 5x + 6$ does.\n\n**The Full Solution:**\nStep 1: Find the slope of $f$ from the table: $3 - (-2) = 5$, $8 - 3 = 5$, and $13 - 8 = 5$, so the slope is $5$. Using the pair $(1, -2)$: $-2 = 5(1) + b$, so $b = -7$ and $f(x) = 5x - 7$.\nStep 2: Two lines have no points in common when they are parallel and distinct: the same slope, $5$, and a $y$-intercept other than $-7$.\nStep 3: Only $y = 5x + 6$ has slope $5$ and a different $y$-intercept. Check: $5x - 7 = 5x + 6$ gives $-7 = 6$, which is false for every $x$, so the graphs never meet ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -5x - 7$): it keeps the $y$-intercept $-7$ but has slope $-5$. Setting $5x - 7 = -5x - 7$ gives $x = 0$, so the graphs meet at $(0, -7)$.\n* Choice B ($y = 5x - 7$): this is the equation of the graph of $f$ itself, so the two graphs share every point.\n* Choice D ($y = 6x - 7$): the slope is $6$, not $5$. Setting $5x - 7 = 6x - 7$ gives $x = 0$, so the lines cross once.\n\n**Test Day Takeaway:** Lines with no points in common are parallel and distinct: equal slopes, different $y$-intercepts. Equal slopes with the same intercept describe the same line.",
      skills: ["system-solution-types"]
    },
    {
      id: 2,
      type: "fill-in",
      difficulty: "easy",
      band: 2,
      question: "Of the students at a school, $76\\%$ ride a bus to school. If $912$ students ride a bus to school, how many students are at the school?",
      correctAnswer: "1200",
      explanation: "**SAT Pattern: Reverse-Percent Multi-Step**\n\n**The correct answer is $1200$.**\n\n**The Fast Way (~20s):** The $912$ bus riders are $76\\%$ of all the students, so divide: $912 \\div 0.76 = 1200$.\n\n**The Full Solution:**\nStep 1: Let $n$ be the number of students at the school. Then $76\\%$ of the students is $0.76n$.\nStep 2: That amount equals the number of bus riders: $0.76n = 912$.\nStep 3: Divide: $n = \\frac{912}{0.76} = 1200$. Check: $0.76(1200) = 912$ ✓\n\n**Common Mistakes:**\n* $693.12$: multiplies, $912 \\times 0.76$, taking $76\\%$ of the part instead of finding the whole.\n* $3800$: divides by $0.24$, the share of students who do not ride a bus, instead of by $0.76$.\n* $1130.88$: computes $912 \\times 1.24$, adding $24\\%$ of $912$. The other $24\\%$ is a share of the whole school, not of $912$.\n\n**Test Day Takeaway:** When a percent of an unknown total is given, write (percent as a decimal) $\\times$ (total) $=$ (part) and divide.",
      skills: ["percent-of-value", "percent-word-problems"]
    },
    {
      id: 3,
      type: "multiple-choice",
      difficulty: "easy",
      band: 3,
      question: "A small box weighs $2$ kilograms, and a large box weighs $9$ kilograms. Which expression represents the total weight, in kilograms, of $x$ small boxes and $y$ large boxes?",
      choices: [
        // distractor: adds the two weights into one rate of 11 kilograms and applies it to every box, which is right only if every box weighed the same
        { id: "A", text: "$11(x + y)$" },
        // distractor: attaches the large-box weight to the number of small boxes and the small-box weight to the number of large boxes
        { id: "B", text: "$9x + 2y$" },
        { id: "C", text: "$2x + 9y$" },
        // distractor: multiplies the two weights and the two counts instead of adding two separate products
        { id: "D", text: "$18xy$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Word-to-Expression Translation**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The small boxes weigh $2x$ kilograms and the large boxes weigh $9y$ kilograms, so the total is $2x + 9y$.\n\n**The Full Solution:**\nStep 1: The $x$ small boxes weigh $2$ kilograms each, for $2x$ kilograms.\nStep 2: The $y$ large boxes weigh $9$ kilograms each, for $9y$ kilograms.\nStep 3: Add the two weights: $2x + 9y$. Check with $x = 3$ and $y = 1$: $3$ small boxes and $1$ large box weigh $6 + 9 = 15$ kilograms, and $2(3) + 9(1) = 15$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($11(x + y)$): treats every box as weighing $2 + 9 = 11$ kilograms. With $x = 3$ and $y = 1$ it gives $44$, not $15$.\n* Choice B ($9x + 2y$): pairs each weight with the wrong count, giving the small boxes a weight of $9$ kilograms each.\n* Choice D ($18xy$): multiplies everything together. The two kinds of boxes add to the total; they do not multiply.\n\n**Test Day Takeaway:** For a total built from two kinds of items, write (weight per item) $\\times$ (number of items) for each kind, then add; test the expression with small numbers.",
      skills: ["word-problem-to-equation"]
    },
    // ============================================================
    // Q4-Q16: Medium core (band 4-5)
    // ============================================================
    {
      id: 4,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "The function $g$ is defined by $g(x) = 9 + \\frac{x}{4}$. If $g(a) = 17$ and $g(b) = 21$, what is the value of $b - a$?",
      choices: [
        // distractor: divides the difference of the outputs, 4, by 4 instead of multiplying by 4
        { id: "A", text: "$1$" },
        // distractor: reports the difference of the outputs, 21 - 17, instead of the difference of the inputs
        { id: "B", text: "$4$" },
        { id: "C", text: "$16$" },
        // distractor: adds the two inputs, 48 + 32, instead of subtracting them
        { id: "D", text: "$80$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Solve $f(a) = c$**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Each increase of $1$ in $g(x)$ needs an increase of $4$ in $x$. The outputs differ by $21 - 17 = 4$, so the inputs differ by $4 \\times 4 = 16$.\n\n**The Full Solution:**\nStep 1: Solve $g(a) = 17$: $9 + \\frac{a}{4} = 17$, so $\\frac{a}{4} = 8$ and $a = 32$.\nStep 2: Solve $g(b) = 21$: $9 + \\frac{b}{4} = 21$, so $\\frac{b}{4} = 12$ and $b = 48$.\nStep 3: Subtract: $b - a = 48 - 32 = 16$. Check: $g(48) = 9 + 12 = 21$ and $g(32) = 9 + 8 = 17$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($1$): divides the output difference, $4$, by $4$. The input changes $4$ times as fast as the output, so the $4$ must be multiplied by $4$.\n* Choice B ($4$): reports $21 - 17$, the difference of the outputs, not of the inputs $a$ and $b$.\n* Choice D ($80$): finds $a = 32$ and $b = 48$ correctly but adds them instead of subtracting.\n\n**Test Day Takeaway:** When a question asks for a difference of inputs, solve for each input, or use the slope: the change in input equals the change in output divided by the slope.",
      skills: ["function-notation"]
    },
    {
      id: 5,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "$\\frac{3x - 5}{4} = \\frac{x + 9}{2}$\nWhat value of $x$ is the solution to the given equation?",
      choices: [
        // distractor: multiplies the right side by 4 as well as clearing its denominator, solving 3x - 5 = 4x + 36
        { id: "A", text: "$-41$" },
        // distractor: clears the denominator 4 but leaves the right side as x + 9, solving 3x - 5 = x + 9
        { id: "B", text: "$7$" },
        // distractor: drops the negative sign when clearing the fraction, solving 3x + 5 = 2x + 18
        { id: "C", text: "$13$" },
        { id: "D", text: "$23$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** Multiply both sides by $4$: $3x - 5 = 2(x + 9) = 2x + 18$, so $x = 23$.\n\n**The Full Solution:**\nStep 1: Multiply both sides by $4$, the least common denominator: $3x - 5 = 2(x + 9)$.\nStep 2: Distribute: $3x - 5 = 2x + 18$.\nStep 3: Subtract $2x$ and add $5$: $x = 23$. Check: $\\frac{3(23) - 5}{4} = \\frac{64}{4} = 16$ and $\\frac{23 + 9}{2} = \\frac{32}{2} = 16$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-41$): multiplies the right side by $4$ in full, writing $4(x + 9) = 4x + 36$, so $3x - 5 = 4x + 36$ and $x = -41$. Multiplying $\\frac{x + 9}{2}$ by $4$ gives $2(x + 9)$.\n* Choice B ($7$): clears only the left denominator and solves $3x - 5 = x + 9$.\n* Choice C ($13$): loses the negative sign, solving $3x + 5 = 2x + 18$.\n\n**Test Day Takeaway:** Clear fractions by multiplying both sides by the least common denominator, and multiply each whole numerator, sign included; then check the answer in the original equation.",
      skills: ["solving-equations"]
    },
    {
      id: 6,
      type: "fill-in",
      difficulty: "medium",
      band: 4,
      question: "The points shown in the $xy$-plane are three of the vertices of a rectangle. What is the area, in square units, of the rectangle?",
      diagram: { type: "coordinatePoints", params: { points: [[-4, -3], [6, -3], [6, 5]], xMin: -8, xMax: 8, yMin: -8, yMax: 8 } },
      correctAnswer: "80",
      explanation: "**SAT Pattern: Rectangle Area**\n\n**The correct answer is $80$.**\n\n**The Fast Way (~20s):** The side from $(-4, -3)$ to $(6, -3)$ has length $10$, and the side from $(6, -3)$ to $(6, 5)$ has length $8$, so the area is $10 \\times 8 = 80$.\n\n**The Full Solution:**\nStep 1: The points $(-4, -3)$ and $(6, -3)$ have the same $y$-coordinate, so the side joining them has length $6 - (-4) = 10$.\nStep 2: The points $(6, -3)$ and $(6, 5)$ have the same $x$-coordinate, so the side joining them has length $5 - (-3) = 8$.\nStep 3: These two sides meet at $(6, -3)$, so they are the length and width: area $= 10 \\times 8 = 80$. Check: the fourth vertex is $(-4, 5)$, and the side from $(-4, 5)$ to $(6, 5)$ also has length $10$ ✓\n\n**Common Mistakes:**\n* $40$: finds the area of the triangle formed by the three points, $\\frac{1}{2}(10)(8)$, instead of the rectangle.\n* $36$: finds the perimeter, $2(10 + 8)$, instead of the area.\n* $16$: subtracts across zero incorrectly, using $6 - 4 = 2$ for the first side instead of $6 - (-4) = 10$, and gets $2 \\times 8 = 16$.\n\n**Test Day Takeaway:** For a side parallel to an axis, the length is the difference of the coordinates that change; subtract carefully across zero.",
      skills: ["triangle-area"]
    },
    {
      id: 7,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "The lengths, in minutes, of $7$ phone calls are $12$, $14$, $15$, $15$, $17$, $18$, and $96$. If the $96$-minute call is removed, which of the following best describes the effect on the mean and the median of the lengths?",
      choices: [
        { id: "A", text: "The mean decreases and the median stays the same." },
        // distractor: swaps the roles of the two measures; it is the median, not the mean, that resists a removed extreme value
        { id: "B", text: "The mean stays the same and the median decreases." },
        // distractor: assumes removing the largest value must pull the median down, but the two middle values of the remaining six are both 15
        { id: "C", text: "Both the mean and the median decrease." },
        // distractor: treats the removal as a change in count only, missing that the mean falls from about 26.7 to about 15.2
        { id: "D", text: "Both the mean and the median stay the same." }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Outlier Effect**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Removing an extreme high value pulls the mean down a lot. The median of the seven values is $15$, and the median of the remaining six is $\\frac{15 + 15}{2} = 15$, so it does not change.\n\n**The Full Solution:**\nStep 1: Mean before: $\\frac{12 + 14 + 15 + 15 + 17 + 18 + 96}{7} = \\frac{187}{7} \\approx 26.7$. Mean after: $\\frac{91}{6} \\approx 15.2$. The mean decreases.\nStep 2: Median before: the fourth of the seven ordered values, $15$. Median after: the average of the third and fourth of six values, $\\frac{15 + 15}{2} = 15$.\nStep 3: So the mean decreases and the median stays the same. Check: $187 - 96 = 91$, and both middle values of $12, 14, 15, 15, 17, 18$ are $15$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B: reverses the two measures. The mean is the one that reacts to an extreme value.\n* Choice C: assumes the median must drop when the largest value is removed, but the two middle values left are both $15$.\n* Choice D: misses that the mean falls from about $26.7$ to about $15.2$.\n\n**Test Day Takeaway:** An extreme value moves the mean much more than the median; when a list has repeated middle values, removing an end value often leaves the median unchanged.",
      skills: ["calculate-mean", "find-median"]
    },
    {
      id: 8,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A tailor charges a one-time fee of \\$95, a rush fee of \\$40, and \\$18 for each garment altered. The total charge for altering $g$ garments was \\$531. Which equation represents this situation?",
      choices: [
        // distractor: leaves the $40 rush fee out of the fixed part of the charge
        { id: "A", text: "$18g + 95 = 531$" },
        { id: "B", text: "$18g + 135 = 531$" },
        // distractor: swaps the roles of the amounts, treating the combined fixed fees of $135 as the charge per garment
        { id: "C", text: "$135g + 18 = 531$" },
        // distractor: merges all three dollar amounts, 95 + 40 + 18 = 153, into a single charge per garment
        { id: "D", text: "$153g = 531$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Linear Cost Setup**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The garments cost $18g$ dollars and the two one-time fees add $95 + 40 = 135$ dollars, so $18g + 135 = 531$.\n\n**The Full Solution:**\nStep 1: The charge that depends on $g$ is \\$18 per garment, or $18g$ dollars.\nStep 2: The fees charged once, no matter how many garments, are $95 + 40 = 135$ dollars.\nStep 3: The total is $18g + 135 = 531$. Check: solving gives $18g = 396$, so $g = 22$, and $18(22) + 95 + 40 = 396 + 135 = 531$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($18g + 95 = 531$): leaves out the \\$40 rush fee.\n* Choice C ($135g + 18 = 531$): treats the \\$135 in fees as a charge per garment and the \\$18 as a one-time fee.\n* Choice D ($153g = 531$): adds all three amounts and charges the total for every garment.\n\n**Test Day Takeaway:** In a linear cost equation, the amount charged per item multiplies the variable, and every one-time charge is added once as the constant.",
      skills: ["word-problem-to-equation"]
    },
    {
      id: 9,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "$3\\sqrt{x - 2} = 12$\nWhat is the solution to the given equation?",
      choices: [
        // distractor: divides by 3 but never squares, solving x - 2 = 4
        { id: "A", text: "$6$" },
        // distractor: reports the value of x - 2 instead of adding 2 to reach x
        { id: "B", text: "$16$" },
        { id: "C", text: "$18$" },
        // distractor: squares both sides with the 3 still in front, as if the square of 3 sqrt(x - 2) were x - 2, and solves x - 2 = 144
        { id: "D", text: "$146$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Radical Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Divide by $3$ to get $\\sqrt{x - 2} = 4$, square to get $x - 2 = 16$, and add $2$: $x = 18$.\n\n**The Full Solution:**\nStep 1: Isolate the radical by dividing both sides by $3$: $\\sqrt{x - 2} = 4$.\nStep 2: Square both sides: $x - 2 = 16$.\nStep 3: Add $2$: $x = 18$. Check: $3\\sqrt{18 - 2} = 3\\sqrt{16} = 3(4) = 12$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): divides by $3$ but never squares, solving $x - 2 = 4$.\n* Choice B ($16$): stops at $x - 2 = 16$ and reports $16$ without adding $2$.\n* Choice D ($146$): squares while the $3$ is still outside the radical and drops it, solving $x - 2 = 144$. The square of $3\\sqrt{x - 2}$ is $9(x - 2)$, not $x - 2$.\n\n**Test Day Takeaway:** Isolate the radical before squaring, then check the result in the original equation.",
      skills: ["radical-equations"]
    },
    {
      id: 10,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "Data set A consists of the values $12$, $9$, $15$, and $20$. Data set B consists of the values $14$, $8$, and $11$. Data sets A and B are combined to form data set C. What is the median of data set C?",
      correctAnswer: "12",
      explanation: "**SAT Pattern: Median Calculation**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~25s):** In order, data set C is $8$, $9$, $11$, $12$, $14$, $15$, $20$. The middle (4th) of these $7$ values is $12$.\n\n**The Full Solution:**\nStep 1: Data set C has $4 + 3 = 7$ values.\nStep 2: List them in order: $8$, $9$, $11$, $12$, $14$, $15$, $20$.\nStep 3: With $7$ values, the median is the 4th value, $12$. Check: three values ($8$, $9$, $11$) are below $12$ and three ($14$, $15$, $20$) are above it ✓\n\n**Common Mistakes:**\n* $20$: the 4th value in the order the values are given, before sorting.\n* $13.5$: the median of data set A alone, $\\frac{12 + 15}{2}$.\n* $12.7$: the mean of data set C, $\\frac{89}{7} \\approx 12.71$, which is a different measure of center.\n\n**Test Day Takeaway:** To find a median, put every value in order first; for an odd number of values, the median is the middle one.",
      skills: ["find-median"]
    },
    {
      id: 11,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "Line $\\ell$ passes through the two points shown in the $xy$-plane. What is the $y$-intercept of line $\\ell$?",
      diagram: { type: "coordinatePoints", params: { points: [[-2, 7], [4, -5]], xMin: -8, xMax: 8, yMin: -8, yMax: 8 } },
      choices: [
        // distractor: gets the slope right but subtracts when solving for the intercept, giving -3 instead of 3
        { id: "A", text: "$(0, -3)$" },
        { id: "B", text: "$(0, 3)$" },
        // distractor: uses slope +2 with the point (-2, 7), solving 7 = 2(-2) + b to get b = 11
        { id: "C", text: "$(0, 11)$" },
        // distractor: switches the coordinates, writing the y-intercept value as an x-coordinate
        { id: "D", text: "$(3, 0)$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The slope is $\\frac{-5 - 7}{4 - (-2)} = -2$. From $(-2, 7)$, moving $2$ units right to $x = 0$ lowers $y$ by $4$, to $3$.\n\n**The Full Solution:**\nStep 1: Read the points from the graph: $(-2, 7)$ and $(4, -5)$. The slope is $\\frac{-5 - 7}{4 - (-2)} = \\frac{-12}{6} = -2$.\nStep 2: Substitute the point $(-2, 7)$ into $y = -2x + b$: $7 = -2(-2) + b = 4 + b$, so $b = 3$.\nStep 3: The $y$-intercept is $(0, 3)$. Check with the other point: $-2(4) + 3 = -5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($(0, -3)$): finds the slope $-2$ but solves $7 = 4 + b$ as $b = 4 - 7 = -3$.\n* Choice C ($(0, 11)$): uses a slope of $2$ instead of $-2$, solving $7 = 2(-2) + b$.\n* Choice D ($(3, 0)$): switches the coordinates. A $y$-intercept lies on the $y$-axis, so its $x$-coordinate is $0$.\n\n**Test Day Takeaway:** After finding the slope from two points, substitute one point to find $b$, then confirm with the other point.",
      skills: ["linear-functions", "slope", "coordinate-geometry"]
    },
    {
      id: 12,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "$y = 2.5x + 14$\nThe given equation is a linear model for a data set. For which data point is the actual $y$-value less than the $y$-value predicted by the model?",
      choices: [
        // distractor: swaps the slope and the y-intercept, predicting 14(2) + 2.5 = 30.5, so the actual 20 looks less than the prediction; the model actually predicts 2.5(2) + 14 = 19, less than 20
        { id: "A", text: "$(2, 20)$" },
        { id: "B", text: "$(4, 22)$" },
        // distractor: reverses the comparison: the model predicts 2.5(8) + 14 = 34, and the actual y-value 37 is greater than 34, not less
        { id: "C", text: "$(8, 37)$" },
        // distractor: the model predicts 2.5(12) + 14 = 44, which equals the actual y-value rather than being less than it
        { id: "D", text: "$(12, 44)$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Residual**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** At $x = 4$ the model predicts $2.5(4) + 14 = 24$, and the actual $y$-value, $22$, is less than $24$.\n\n**The Full Solution:**\nStep 1: Evaluate the model at each $x$-coordinate: $2.5(2) + 14 = 19$, $2.5(4) + 14 = 24$, $2.5(8) + 14 = 34$, and $2.5(12) + 14 = 44$.\nStep 2: Compare each actual $y$-value with its predicted value: $20 > 19$, $22 < 24$, $37 > 34$, and $44 = 44$.\nStep 3: Only for $(4, 22)$ is the actual value less than the predicted value. Check: $22 < 24$, so the point $(4, 22)$ lies below the graph of the model ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($(2, 20)$): swapping the slope and the $y$-intercept gives $14(2) + 2.5 = 30.5$, which would make $20$ look less than the prediction; the model actually predicts $19$.\n* Choice C ($(8, 37)$): reverses the comparison; the model predicts $34$, and the actual $37$ is greater, not less.\n* Choice D ($(12, 44)$): the model predicts exactly $44$, so the actual value equals the predicted value instead of being less.\n\n**Test Day Takeaway:** The actual $y$-value is less than the predicted $y$-value exactly when the data point lies below the graph of the model.",
      skills: ["calculate-mean", "slope-intercept-form"]
    },
    {
      id: 13,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A right circular cylinder has a volume of $375\\pi$ cubic inches. The height of the cylinder is $3$ times the radius of its base. What is the radius, in inches, of the base of the cylinder?",
      correctAnswer: "5",
      explanation: "**SAT Pattern: Cylinder Volume**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~25s):** With $h = 3r$, the volume is $\\pi r^{2}(3r) = 3\\pi r^{3} = 375\\pi$, so $r^{3} = 125$ and $r = 5$.\n\n**The Full Solution:**\nStep 1: Use $V = \\pi r^{2}h$ and replace $h$ with $3r$: $V = \\pi r^{2}(3r) = 3\\pi r^{3}$.\nStep 2: Set this equal to the volume: $3\\pi r^{3} = 375\\pi$, so $r^{3} = 125$.\nStep 3: Take the cube root: $r = 5$. Check: the height is $15$, and $\\pi(5)^{2}(15) = 375\\pi$ ✓\n\n**Common Mistakes:**\n* $125$: stops at $r^{3} = 125$ without taking the cube root.\n* $7.211$: ignores the factor $3$, solving $r^{3} = 375$.\n* $11.18$: uses $3$ as the height instead of $3r$, solving $3\\pi r^{2} = 375\\pi$ to get $r^{2} = 125$.\n\n**Test Day Takeaway:** When one dimension is given in terms of another, substitute before solving so the formula has one variable.",
      skills: ["volume-prism"]
    },
    {
      id: 14,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "$\\frac{3x^{2} - 12}{x^{2} + 5x + 6}$\nWhich of the following is equivalent to the given expression for $x > 0$?",
      choices: [
        // distractor: cancels the factor (x - 2) instead of the shared factor (x + 2)
        { id: "A", text: "$\\frac{3(x + 2)}{x + 3}$" },
        { id: "B", text: "$\\frac{3(x - 2)}{x + 3}$" },
        // distractor: cancels (x + 3) from the denominator rather than the shared factor (x + 2)
        { id: "C", text: "$\\frac{3(x - 2)}{x + 2}$" },
        // distractor: drops the coefficient 3 when factoring 3x^2 - 12 as a difference of squares
        { id: "D", text: "$\\frac{x - 2}{x + 3}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The numerator is $3(x - 2)(x + 2)$ and the denominator is $(x + 2)(x + 3)$. Cancel $x + 2$ to get $\\frac{3(x - 2)}{x + 3}$.\n\n**The Full Solution:**\nStep 1: Factor the numerator: $3x^{2} - 12 = 3(x^{2} - 4) = 3(x - 2)(x + 2)$.\nStep 2: Factor the denominator: $x^{2} + 5x + 6 = (x + 2)(x + 3)$.\nStep 3: Cancel the common factor $x + 2$, which is never $0$ for $x > 0$: $\\frac{3(x - 2)}{x + 3}$. Check at $x = 4$: $\\frac{48 - 12}{16 + 20 + 6} = \\frac{36}{42} = \\frac{6}{7}$, and $\\frac{3(2)}{7} = \\frac{6}{7}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{3(x + 2)}{x + 3}$): cancels $x - 2$, which is not a factor of the denominator.\n* Choice C ($\\frac{3(x - 2)}{x + 2}$): cancels $x + 3$, which is not a factor of the numerator.\n* Choice D ($\\frac{x - 2}{x + 3}$): loses the $3$ that was factored out of the numerator.\n\n**Test Day Takeaway:** Factor the numerator and the denominator completely, cancel only a factor they share, and confirm by substituting one value of $x$.",
      skills: ["simplifying-rational-expressions", "difference-of-squares"]
    },
    {
      id: 15,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "Triangles $ABC$ and $DEF$ are similar. The area of triangle $DEF$ is $9$ times the area of triangle $ABC$. If the perimeter of triangle $ABC$ is $24$ centimeters, what is the perimeter, in centimeters, of triangle $DEF$?",
      choices: [
        // distractor: divides by the scale factor 3 instead of multiplying by it
        { id: "A", text: "$8$" },
        { id: "B", text: "$72$" },
        // distractor: uses the area ratio 9 as the ratio of lengths, computing 24 times 9
        { id: "C", text: "$216$" },
        // distractor: multiplies by 27, cubing the scale factor as though 9 were a ratio of volumes
        { id: "D", text: "$648$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Similar Triangles and Area Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Areas of similar figures scale by the square of the length scale factor, so lengths scale by $\\sqrt{9} = 3$. The perimeter of triangle $DEF$ is $3(24) = 72$.\n\n**The Full Solution:**\nStep 1: For similar triangles with length scale factor $k$, the areas are in the ratio $k^{2}$. Here $k^{2} = 9$.\nStep 2: So $k = 3$: every length in triangle $DEF$ is $3$ times the corresponding length in triangle $ABC$, and so is the perimeter.\nStep 3: The perimeter of triangle $DEF$ is $3(24) = 72$ centimeters. Check: the scale factor $\\frac{72}{24} = 3$ squares to $9$, the area ratio ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): divides $24$ by $3$, as if triangle $DEF$ were the smaller triangle.\n* Choice C ($216$): multiplies by $9$, using the area ratio as the ratio of lengths.\n* Choice D ($648$): multiplies by $27 = 3^{3}$, a ratio that applies to volumes, not perimeters.\n\n**Test Day Takeaway:** For similar figures, lengths scale by $k$ and areas by $k^{2}$; take the square root of an area ratio before applying it to a perimeter.",
      skills: ["similar-triangles"]
    },
    {
      id: 16,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The function $m$ is defined by $m(t) = a(b)^{t}$, where $a$ and $b$ are positive constants. The table shows four values of $t$ and their corresponding values of $m(t)$. What is the value of $a$?",
      questionTable: { headers: ["$t$", "$m(t)$"], rows: [["$1$", "$96$"], ["$2$", "$144$"], ["$3$", "$216$"], ["$4$", "$324$"]] },
      correctAnswer: "64",
      explanation: "**SAT Pattern: Exponential Growth Model**\n\n**The correct answer is $64$.**\n\n**The Fast Way (~30s):** Each value of $m(t)$ is $1.5$ times the one before it, so $b = 1.5$. Then $a = m(0) = \\frac{96}{1.5} = 64$.\n\n**The Full Solution:**\nStep 1: Find $b$ from consecutive values: $\\frac{144}{96} = 1.5$, $\\frac{216}{144} = 1.5$, and $\\frac{324}{216} = 1.5$, so $b = 1.5$.\nStep 2: Substitute $t = 1$: $m(1) = a(1.5)^{1} = 96$.\nStep 3: Solve: $a = \\frac{96}{1.5} = 64$. Check: $64(1.5)^{2} = 64(2.25) = 144$, which matches $m(2)$ ✓\n\n**Common Mistakes:**\n* $96$: reports $m(1)$ as $a$. The constant $a$ is the value at $t = 0$, one step before the first row of the table.\n* $1.5$: reports $b$, the growth factor, instead of $a$.\n* $48$: subtracts the difference $144 - 96 = 48$ from $96$, treating the function as linear.\n\n**Test Day Takeaway:** In $a(b)^{t}$, $b$ is the ratio of consecutive outputs and $a$ is the output at $t = 0$; if the table starts at $t = 1$, divide by $b$ once to step back.",
      skills: ["exponential-growth-decay"]
    },
    // ============================================================
    // Q17-Q22: Hard ceiling for Easy variant (band 6-7, NO band 8)
    // ============================================================
    {
      id: 17,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "$a(4x - 9) + 5x = 17x - b$\nIn the given equation, $a$ and $b$ are constants. If the equation has infinitely many solutions, what is the value of $a + b$?",
      choices: [
        // distractor: finds a = 3 and reports it as the answer instead of continuing to b
        { id: "A", text: "$3$" },
        // distractor: matches the constants as -9 = -b, getting b = 9, and adds it to a = 3
        { id: "B", text: "$12$" },
        // distractor: finds b = 27 and reports it alone instead of the sum a + b
        { id: "C", text: "$27$" },
        { id: "D", text: "$30$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Matching Coefficients**\n\n**Choice D is correct.**\n\n**The Fast Way (~35s):** Expanding the left side gives $(4a + 5)x - 9a$. Matching it to $17x - b$ gives $4a + 5 = 17$, so $a = 3$, and $b = 9a = 27$. The sum is $30$.\n\n**The Full Solution:**\nStep 1: Distribute and combine like terms on the left side: $4ax - 9a + 5x = (4a + 5)x - 9a$.\nStep 2: An equation in $x$ has infinitely many solutions when both sides are the same expression. Match the $x$-coefficients: $4a + 5 = 17$, so $a = 3$. Match the constants: $-9a = -b$, so $b = 9(3) = 27$.\nStep 3: Add: $a + b = 3 + 27 = 30$. Check: $3(4x - 9) + 5x = 12x - 27 + 5x = 17x - 27$, which is the right side ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): finds $a$ and stops before finding $b$.\n* Choice B ($12$): matches the constant $-9$ to $-b$ without multiplying by $a$, so $b = 9$ and $a + b = 12$.\n* Choice C ($27$): finds $b$ and reports it instead of the sum $a + b$.\n\n**Test Day Takeaway:** An equation with infinitely many solutions is an identity: expand fully, then match the $x$-coefficients and the constants separately.",
      skills: ["distributive-property"]
    },
    {
      id: 18,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "A music school offers $25$-minute lessons and $70$-minute lessons. On one day, the school taught $18$ lessons that lasted a total of $810$ minutes. How many more $25$-minute lessons than $70$-minute lessons did the school teach that day?",
      choices: [
        { id: "A", text: "$2$" },
        // distractor: solves the system correctly and reports the number of 70-minute lessons instead of the difference
        { id: "B", text: "$8$" },
        // distractor: solves the system correctly and reports the number of 25-minute lessons instead of the difference
        { id: "C", text: "$10$" },
        // distractor: reports the total number of lessons, the given 18
        { id: "D", text: "$18$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** If all $18$ lessons were $25$ minutes, they would total $450$ minutes. Each $70$-minute lesson adds $45$ more minutes, and $810 - 450 = 360 = 8(45)$, so there were $8$ long lessons, $10$ short lessons, and $10 - 8 = 2$.\n\n**The Full Solution:**\nStep 1: Let $s$ be the number of $25$-minute lessons and $n$ be the number of $70$-minute lessons. Then $s + n = 18$ and $25s + 70n = 810$.\nStep 2: Substitute $s = 18 - n$: $25(18 - n) + 70n = 810$, so $450 + 45n = 810$, $45n = 360$, and $n = 8$. Then $s = 10$.\nStep 3: The difference is $s - n = 10 - 8 = 2$. Check: $25(10) + 70(8) = 250 + 560 = 810$ minutes, and $10 + 8 = 18$ lessons ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($8$): the number of $70$-minute lessons, not the difference.\n* Choice C ($10$): the number of $25$-minute lessons, not the difference.\n* Choice D ($18$): the total number of lessons, which is given in the question.\n\n**Test Day Takeaway:** Solve the system completely, then reread the question: it may ask for a difference or a sum of the two values rather than either one.",
      skills: ["elimination-method", "setting-up-systems"]
    },
    {
      id: 19,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "$\\frac{\\sqrt{x^{9}} \\cdot x^{-\\frac{1}{4}}}{\\sqrt[4]{x^{3}}}$\nThe given expression is equivalent to $x^{k}$, where $x > 0$ and $k$ is a constant. What is the value of $k$?",
      correctAnswer: "7/2",
      explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $7/2$.**\n\n**The Fast Way (~35s):** Write each factor as a power of $x$: $\\frac{9}{2} - \\frac{1}{4} - \\frac{3}{4} = \\frac{9}{2} - 1 = \\frac{7}{2}$.\n\n**The Full Solution:**\nStep 1: Rewrite the radicals with rational exponents: $\\sqrt{x^{9}} = x^{\\frac{9}{2}}$ and $\\sqrt[4]{x^{3}} = x^{\\frac{3}{4}}$.\nStep 2: Multiply in the numerator by adding exponents: $x^{\\frac{9}{2}} \\cdot x^{-\\frac{1}{4}} = x^{\\frac{18}{4} - \\frac{1}{4}} = x^{\\frac{17}{4}}$.\nStep 3: Divide by subtracting exponents: $x^{\\frac{17}{4} - \\frac{3}{4}} = x^{\\frac{14}{4}} = x^{\\frac{7}{2}}$, so $k = \\frac{7}{2}$, or $3.5$. Check with $x = 16$: $\\sqrt{16^{9}} = 4^{9} = 262144$, $16^{-\\frac{1}{4}} = \\frac{1}{2}$, and $\\sqrt[4]{16^{3}} = 8$, so the expression is $\\frac{131072}{8} = 16384 = 16^{\\frac{7}{2}}$ ✓\n\n**Common Mistakes:**\n* $5$: adds the exponent of the denominator instead of subtracting it, computing $\\frac{9}{2} - \\frac{1}{4} + \\frac{3}{4}$.\n* $4$: drops the negative sign on $-\\frac{1}{4}$, computing $\\frac{9}{2} + \\frac{1}{4} - \\frac{3}{4}$.\n* $2.917$: writes $\\sqrt[4]{x^{3}}$ as $x^{\\frac{4}{3}}$ instead of $x^{\\frac{3}{4}}$.\n\n**Test Day Takeaway:** Convert every radical to a rational exponent first (the index goes in the denominator), then add exponents when multiplying and subtract when dividing.",
      skills: ["exponent-rules", "radical-expressions"]
    },
    {
      id: 20,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "The function $f$ is defined by $f(x) = -3(x + 4)^{2} + 11$. Which expression is equivalent to $f(x)$?",
      choices: [
        // distractor: multiplies only the x^2 term by -3, leaving 8x and 16 unchanged, so the constant is 16 + 11 = 27
        { id: "A", text: "$-3x^{2} + 8x + 27$" },
        { id: "B", text: "$-3x^{2} - 24x - 37$" },
        // distractor: makes a sign error on the constant, taking -3 times 16 as +48 so the constant becomes 48 + 11 = 59
        { id: "C", text: "$-3x^{2} - 24x + 59$" },
        // distractor: expands (x + 4)^2 as x^2 + 4x + 16, forgetting to double the 4 in the middle term
        { id: "D", text: "$-3x^{2} - 12x - 37$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** $(x + 4)^{2} = x^{2} + 8x + 16$, so $-3(x^{2} + 8x + 16) + 11 = -3x^{2} - 24x - 48 + 11 = -3x^{2} - 24x - 37$.\n\n**The Full Solution:**\nStep 1: Square the binomial: $(x + 4)^{2} = x^{2} + 8x + 16$.\nStep 2: Multiply every term by $-3$: $-3x^{2} - 24x - 48$.\nStep 3: Add $11$: $-3x^{2} - 24x - 37$. Check at $x = 0$: $-3(4)^{2} + 11 = -48 + 11 = -37$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3x^{2} + 8x + 27$): multiplies only the $x^{2}$ term by $-3$, leaving $8x + 16$ unchanged.\n* Choice C ($-3x^{2} - 24x + 59$): treats $-3(16)$ as $+48$, so the constant becomes $48 + 11 = 59$.\n* Choice D ($-3x^{2} - 12x - 37$): squares $x + 4$ as $x^{2} + 4x + 16$, missing the doubled middle term $8x$.\n\n**Test Day Takeaway:** Expand the square first, using $(x + h)^{2} = x^{2} + 2hx + h^{2}$, then distribute the leading coefficient to every term; checking $x = 0$ catches constant errors quickly.",
      skills: ["distributive-property", "converting-quadratic-forms"]
    },
    {
      id: 21,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "The table shows the number of shipments a company sent last month, by shipping method and arrival status. One of these shipments will be selected at random. What is the probability of selecting a shipment sent by rail, given that it arrived late?",
      diagram: { type: "twoWayTable", params: { headers: ["Shipping method", "On time", "Late", "Total"], rows: [["Rail", "96", "24", "120"], ["Truck", "132", "48", "180"], ["Total", "228", "72", "300"]] } },
      choices: [
        // distractor: divides 24 by the grand total 300, giving the probability of a shipment being both rail and late
        { id: "A", text: "$\\frac{2}{25}$" },
        // distractor: divides 24 by the rail total 120, reversing the condition to give the probability of arriving late given rail
        { id: "B", text: "$\\frac{1}{5}$" },
        // distractor: divides 72 by 300, giving the probability that a shipment arrived late, without restricting to rail
        { id: "C", text: "$\\frac{6}{25}$" },
        { id: "D", text: "$\\frac{1}{3}$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Basic Probability**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** Given that the shipment arrived late, only the $72$ late shipments count, and $24$ of them were sent by rail: $\\frac{24}{72} = \\frac{1}{3}$.\n\n**The Full Solution:**\nStep 1: The condition \"given that it arrived late\" limits the selection to the Late column, which has a total of $72$ shipments.\nStep 2: Of those $72$ late shipments, $24$ were sent by rail.\nStep 3: The probability is $\\frac{24}{72} = \\frac{1}{3}$. Check: the Late column adds to $24 + 48 = 72$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{2}{25}$): computes $\\frac{24}{300}$, the probability that a shipment was both sent by rail and late.\n* Choice B ($\\frac{1}{5}$): computes $\\frac{24}{120}$, the probability that a rail shipment arrived late, which reverses the condition.\n* Choice C ($\\frac{6}{25}$): computes $\\frac{72}{300}$, the probability that a shipment arrived late.\n\n**Test Day Takeaway:** For a conditional probability from a table, the denominator is the total of the row or column named after \"given that\".",
      skills: ["probability-basics"]
    },
    {
      id: 22,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "$2x^{2} + 2y^{2} - 12x + 40y = 70$\nThe graph of the given equation in the $xy$-plane is a circle. What is the radius of the circle?",
      correctAnswer: "12",
      explanation: "**SAT Pattern: Circle in General Form**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~40s):** Divide by $2$: $x^{2} + y^{2} - 6x + 20y = 35$. Completing both squares adds $9 + 100$, so $(x - 3)^{2} + (y + 10)^{2} = 144$ and the radius is $12$.\n\n**The Full Solution:**\nStep 1: Divide every term by $2$ so the squared terms have coefficient $1$: $x^{2} - 6x + y^{2} + 20y = 35$.\nStep 2: Complete the square in each variable by adding $9$ and $100$ to both sides: $(x - 3)^{2} + (y + 10)^{2} = 35 + 9 + 100 = 144$.\nStep 3: The radius is $\\sqrt{144} = 12$. Check: the center $(3, -10)$ and the point $(15, -10)$ are $12$ apart, and $2(15)^{2} + 2(-10)^{2} - 12(15) + 40(-10) = 450 + 200 - 180 - 400 = 70$ ✓\n\n**Common Mistakes:**\n* $144$: reports $r^{2}$ instead of $r$.\n* $13.38$: divides the variable terms by $2$ but not the $70$, getting $r^{2} = 70 + 9 + 100 = 179$.\n* $5.916$: takes $\\sqrt{35}$, forgetting to add the $9$ and $100$ to the right side while completing the squares.\n\n**Test Day Takeaway:** Before completing the square, divide the whole equation by the common coefficient of $x^{2}$ and $y^{2}$, and add each completing constant to both sides.",
      skills: ["circle-equation", "completing-square-circles"]
    }
  ]
};

export default practiceTest1M2Easy;
