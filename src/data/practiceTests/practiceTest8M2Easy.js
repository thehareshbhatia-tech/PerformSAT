// Practice Test 8 — Math Module 2 Easy variant (22 questions)
// v2 freshness rebuild (2026-09-07): every slot re-patterned and re-authored against the seen-corpus gate — docs/TEST_RECREATION_V2_SPEC.md
// For students routed to easier path after Module 1 (~<60% correct).
// Distribution: 3E / 13M / 6H. Q1-3 easy openers. Max-score ceiling: ~650.
// Domain mix: 7 Algebra / 6 Advanced Math / 5 Problem-Solving / 4 Geometry & Trig.
// Official-calibration recreation (2026-09-01): all content re-authored;
// slot metadata (id/type/difficulty/band/skills/pattern) frozen. Carries
// 4 diagram items (dot plots at Q3/Q7, similar triangles at Q18,
// scatterplot at Q22) per the ~20% official figure-density target.

export const practiceTest8M2Easy = {
  id: "module-2-easy",
  title: "Module 2 (Easy)",
  variant: "easy",
  timeLimit: 35,
  questions: [
    {
      id: 1,
      type: "fill-in",
      difficulty: "easy",
      band: 2,
      question: "The table shows the number of visitors surveyed at each entrance of a park. Of the visitors surveyed at the East entrance, $45\\%$ stayed overnight. How many visitors surveyed at the East entrance did not stay overnight?",
      questionTable: { headers: ["Entrance", "Visitors surveyed"], rows: [["North", "$260$"], ["East", "$180$"], ["South", "$160$"]] },
      correctAnswer: "99",
      explanation: "**SAT Pattern: Percent Complement**\n\n**The correct answer is $99$.**\n\n**The Fast Way (~15s):** The visitors who did not stay overnight are $100\\% - 45\\% = 55\\%$ of the East entrance group, and $0.55(180) = 99$.\n\n**The Full Solution:**\nStep 1: The percent applies only to the East entrance row of the table, so the group has $180$ visitors, not the $600$ surveyed in all.\nStep 2: Every visitor either stayed overnight or did not, so the percent who did not is $100\\% - 45\\% = 55\\%$.\nStep 3: Take $55\\%$ of $180$: $0.55(180) = 99$ visitors. Check: $0.45(180) = 81$ visitors stayed overnight, and $81 + 99 = 180$ ✓\n\n**Common Mistakes:**\n* $81$: computes $0.45(180)$, the number of visitors who did stay overnight.\n* $55$: reports the percent who did not stay overnight instead of the number of visitors.\n* $330$: takes $55\\%$ of all $600$ visitors surveyed instead of the $180$ at the East entrance.\n\n**Test Day Takeaway:** For a complement, subtract the percent from $100\\%$ first, then apply it to the exact group the question names; in a table that is one row, not the total.",
      skills: ["percent-of-value"]
    },
    {
      id: 2,
      type: "multiple-choice",
      difficulty: "easy",
      band: 2,
      question: "If $7x + 15 = 64$, what is the value of $7x + 19$?",
      choices: [
        // distractor: solves for x = 7 and stops instead of evaluating 7x + 19
        { id: "A", text: "$7$" },
        // distractor: substitutes x = 7 but drops the coefficient, computing 7 + 19 = 26
        { id: "B", text: "$26$" },
        { id: "C", text: "$68$" },
        // distractor: adds 19 to the right side, computing 64 + 19 = 83, instead of adding 19 - 15 = 4
        { id: "D", text: "$83$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Shifted Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $7x + 19$ is $4$ more than $7x + 15$, so its value is $64 + 4 = 68$.\n\n**The Full Solution:**\nStep 1: Compare the two expressions: $7x + 19 = (7x + 15) + 4$.\nStep 2: Substitute the given value of $7x + 15$: $64 + 4 = 68$.\nStep 3: Confirm by solving: $7x = 49$, so $x = 7$ and $7(7) + 19 = 49 + 19 = 68$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): this is the value of $x$, not the value of $7x + 19$.\n* Choice B ($26$): substitutes $x = 7$ but forgets to multiply by $7$, computing $7 + 19$.\n* Choice D ($83$): adds the whole $19$ to $64$. The expression $7x + 15$ already contains $15$ of it, so only $4$ more is added.\n\n**Test Day Takeaway:** When a question asks for an expression rather than $x$, look for a way to build it from the given expression; solving for $x$ first works but takes longer.",
      skills: ["solving-equations", "ratios"]
    },
    {
      id: 3,
      type: "multiple-choice",
      difficulty: "easy",
      band: 3,
      question: "$4, 7, 8, 11, 15$\nThe list gives the values in data set A. Data set B is created by multiplying each value in data set A by $3$. What is the median of data set B?",
      choices: [
        // distractor: reports the median of data set A without multiplying it by 3
        { id: "A", text: "$8$" },
        // distractor: adds 3 to the median of data set A instead of multiplying by 3
        { id: "B", text: "$11$" },
        { id: "C", text: "$24$" },
        // distractor: multiplies the greatest value, 15, by 3 instead of the median
        { id: "D", text: "$45$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Scaling a Data Set by a Constant**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The median of data set A is the middle value, $8$. Multiplying every value by $3$ keeps the order, so the median of data set B is $3 \\times 8 = 24$.\n\n**The Full Solution:**\nStep 1: The values of data set A are already in order, and the middle (third) value is $8$, so the median of data set A is $8$.\nStep 2: Multiplying each value by $3$ gives data set B: $12, 21, 24, 33, 45$.\nStep 3: The middle value of data set B is $24$. Check: $3 \\times 8 = 24$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): this is the median of data set A; every value, including the middle one, was multiplied by $3$.\n* Choice B ($11$): adds $3$ to the median instead of multiplying by $3$.\n* Choice D ($45$): multiplies the greatest value, $15$, by $3$; that is the maximum of data set B, not the median.\n\n**Test Day Takeaway:** Multiplying every value in a data set by the same positive number keeps the values in the same order, so the median is multiplied by that number too.",
      skills: ["data-analysis"]
    },
    {
      id: 4,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "$12$, $14$, $14$, $17$, $20$, $23$, $k$\nThe list gives the values in a data set. If the median of the data set is $14$, which of the following must be true?",
      choices: [
        { id: "A", text: "$k \\le 14$" },
        // distractor: assumes the unknown value must equal the median itself, though any k at or below 14 works
        { id: "B", text: "$k = 14$" },
        // distractor: reverses the direction of the inequality, but k = 20 pushes the fourth value up to 17
        { id: "C", text: "$k \\ge 14$" },
        // distractor: treats 17, the fourth number in the printed list, as the median and forces k above it
        { id: "D", text: "$k \\ge 17$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Median Calculation**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** With seven values the median is the $4$th value in order. Without $k$, the $4$th value would be $17$, so $k$ must fall at or below $14$ to make $14$ the $4$th value: $k \\le 14$.\n\n**The Full Solution:**\nStep 1: Order the six known values: $12$, $14$, $14$, $17$, $20$, $23$. With $k$ there are seven values, so the median is the $4$th value in order.\nStep 2: If $k > 14$, the three smallest values are still $12$, $14$, $14$, and the $4$th value is $k$ or $17$, either of which is greater than $14$. So $k$ cannot be greater than $14$.\nStep 3: If $k \\le 14$, then $k$ is among the four smallest values and the $4$th value is $14$. Check the boundary: $k = 14$ gives $12, 14, 14, 14, 17, 20, 23$ with median $14$, while $k = 15$ gives median $15$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($k = 14$): one value that works, but $k = 9$ also gives a median of $14$, so $k = 14$ does not have to be true.\n* Choice C ($k \\ge 14$): reverses the inequality. With $k = 20$ the ordered list is $12, 14, 14, 17, 20, 20, 23$, whose median is $17$.\n* Choice D ($k \\ge 17$): treats $17$, the $4$th number in the list as printed, as the median, but the median depends on the sorted order including $k$.\n\n**Test Day Takeaway:** For a median with an unknown value, sort the known values, find which position the median occupies, and test a value on each side of the boundary.",
      skills: ["find-median"]
    },
    {
      id: 5,
      type: "fill-in",
      difficulty: "medium",
      band: 4,
      question: "$7x + 4y = 84$\nIn the $xy$-plane, line $j$ is parallel to the graph of the given equation and passes through the point $(12, 9)$. An equation of line $j$ is $7x + 4y = c$, where $c$ is a constant. What is the value of $c$?",
      correctAnswer: "120",
      explanation: "**SAT Pattern: Parallel Lines and Standard Form**\n\n**The correct answer is $120$.**\n\n**The Fast Way (~20s):** The point $(12, 9)$ lies on line $j$, so $c = 7(12) + 4(9) = 84 + 36 = 120$.\n\n**The Full Solution:**\nStep 1: Line $j$ has the same coefficients $7$ and $4$ as the given equation, so it has the same slope, $-\\frac{7}{4}$; only the constant changes.\nStep 2: Line $j$ passes through $(12, 9)$, so that point must satisfy $7x + 4y = c$.\nStep 3: Substitute: $c = 7(12) + 4(9) = 84 + 36 = 120$. Check: $7x + 4y = 120$ gives $y = -\\frac{7}{4}x + 30$, and the given equation gives $y = -\\frac{7}{4}x + 21$, the same slope with a different y-intercept ✓\n\n**Common Mistakes:**\n* $84$: keeps the original constant, which would make line $j$ the same line as the given one, not a parallel line through $(12, 9)$.\n* $111$: swaps the coefficients when substituting, computing $4(12) + 7(9) = 48 + 63$.\n* $30$: finds the y-intercept of line $j$, $\\frac{120}{4} = 30$, instead of the constant $c$.\n\n**Test Day Takeaway:** Parallel lines in standard form keep the same $x$ and $y$ coefficients; substitute the given point to find the new constant.",
      skills: ["writing-parallel-equation"]
    },
    {
      id: 6,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "In the figure shown, two lines intersect at a point. What is the value of $y$?",
      diagram: { type: "intersectingLines", params: { angles: ["(3x + 10)°", "y°", "(5x - 26)°", ""], figureNote: true, angle0Measure: 64 } },
      choices: [
        // distractor: stops at x = 18 instead of finding the angle measure y
        { id: "A", text: "$18$" },
        // distractor: reports 3(18) + 10 = 64, the measure of the vertical angles, rather than the angle marked y
        { id: "B", text: "$64$" },
        // distractor: assumes the two lines are perpendicular, so every angle is 90
        { id: "C", text: "$90$" },
        { id: "D", text: "$116$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Vertical Angles**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** The angles marked $(3x + 10)^\\circ$ and $(5x - 26)^\\circ$ are vertical angles, so $3x + 10 = 5x - 26$, which gives $x = 18$ and a measure of $64^\\circ$. The angle marked $y^\\circ$ is adjacent to it, so $y = 180 - 64 = 116$.\n\n**The Full Solution:**\nStep 1: The angles marked $(3x + 10)^\\circ$ and $(5x - 26)^\\circ$ are opposite each other at the intersection, so they are vertical angles with equal measures: $3x + 10 = 5x - 26$.\nStep 2: Solve: $36 = 2x$, so $x = 18$, and each of those angles measures $3(18) + 10 = 64$ degrees.\nStep 3: The angle marked $y^\\circ$ and the $64^\\circ$ angle together form a straight angle, so $y = 180 - 64 = 116$. Check: $5(18) - 26 = 64$, and $64 + 116 + 64 + 116 = 360$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($18$): this is the value of $x$, not the angle measure $y$.\n* Choice B ($64$): this is the measure of the two vertical angles. The angle marked $y^\\circ$ is adjacent to them, not opposite them.\n* Choice C ($90$): assumes the lines are perpendicular. The figure does not show a right angle, and the measures $64$ and $116$ show the lines are not perpendicular.\n\n**Test Day Takeaway:** Two intersecting lines form only two different angle measures: vertical angles are equal, and adjacent angles add to $180^\\circ$.",
      skills: ["angles"]
    },
    {
      id: 7,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A machine fills $240$ bottles every $4$ minutes. At this rate, how many bottles does the machine fill in $6$ minutes?",
      choices: [
        // distractor: inverts the proportion, computing 240(4)/6 = 160
        { id: "A", text: "$160$" },
        { id: "B", text: "$360$" },
        // distractor: multiplies by the 2-minute difference instead of using the rate, computing 240(2) = 480
        { id: "C", text: "$480$" },
        // distractor: multiplies 240 by 6 without dividing by the 4 minutes
        { id: "D", text: "$1{,}440$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Proportion Solving**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The machine fills $\\frac{240}{4} = 60$ bottles per minute, so in $6$ minutes it fills $60(6) = 360$ bottles.\n\n**The Full Solution:**\nStep 1: Bottles and minutes are proportional, so $\\frac{240}{4} = \\frac{k}{6}$, where $k$ is the number of bottles filled in $6$ minutes.\nStep 2: Cross multiply: $4k = 240(6) = 1{,}440$, so $k = \\frac{1{,}440}{4} = 360$.\nStep 3: Check with the unit rate: $240 \\div 4 = 60$ bottles per minute, and $60(6) = 360$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($160$): sets up the proportion upside down, computing $\\frac{240(4)}{6}$. More minutes must mean more bottles, not fewer.\n* Choice C ($480$): doubles $240$ because $6 - 4 = 2$. A proportion scales by the ratio $\\frac{6}{4}$, not by the difference.\n* Choice D ($1{,}440$): stops after cross multiplying and never divides by $4$.\n\n**Test Day Takeaway:** Find the unit rate first; then any other amount of time is a single multiplication.",
      skills: ["unit-conversion"]
    },
    {
      id: 8,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "$4x + 6y = 14$\n$ax + 15y = 35$\nIn the given system of equations, $a$ is a constant. The system has infinitely many solutions. What is the value of $a$?",
      choices: [
        // distractor: divides 4 by the scale factor 2.5 instead of multiplying, giving 1.6
        { id: "A", text: "$1.6$" },
        { id: "B", text: "$10$" },
        // distractor: adds the difference of the y-coefficients, 15 - 6 = 9, to 4 instead of multiplying
        { id: "C", text: "$13$" },
        // distractor: uses the difference of the constants, 35 - 14 = 21, as the coefficient
        { id: "D", text: "$21$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Same Line (Infinitely Many Solutions)**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The second equation must be a multiple of the first. Since $\\frac{15}{6} = 2.5$, the multiplier is $2.5$, so $a = 4(2.5) = 10$.\n\n**The Full Solution:**\nStep 1: A system of two linear equations has infinitely many solutions when the equations describe the same line, so one equation is a constant multiple of the other.\nStep 2: Find the multiplier from the terms that are known: $\\frac{15}{6} = 2.5$, and the constants agree: $\\frac{35}{14} = 2.5$.\nStep 3: Apply the multiplier to the $x$-coefficient: $a = 4(2.5) = 10$. Check: $2.5(4x + 6y) = 2.5(14)$ gives $10x + 15y = 35$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($1.6$): divides by the multiplier, computing $\\frac{4}{2.5}$, instead of multiplying.\n* Choice C ($13$): adds $15 - 6 = 9$ to $4$. Equivalent equations come from multiplying every term by the same number, not adding.\n* Choice D ($21$): uses $35 - 14$, the difference of the constants, as the coefficient.\n\n**Test Day Takeaway:** Infinitely many solutions means one equation is a multiple of the other; find the multiplier from a pair of known terms and apply it to the unknown coefficient.",
      skills: ["system-solution-types", "infinite-solutions-condition"]
    },
    {
      id: 9,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The mean of $5$ numbers is $16$. When a sixth number, $n$, is added to the list, the mean of the $6$ numbers is $17$. What is the value of $n$?",
      correctAnswer: "22",
      explanation: "**SAT Pattern: Mean from List**\n\n**The correct answer is $22$.**\n\n**The Fast Way (~20s):** The $6$ numbers have a sum of $6(17) = 102$ and the first $5$ have a sum of $5(16) = 80$, so $n = 102 - 80 = 22$.\n\n**The Full Solution:**\nStep 1: A mean is a sum divided by a count, so the $5$ numbers have a sum of $5(16) = 80$.\nStep 2: With $n$ included, the $6$ numbers have a sum of $6(17) = 102$.\nStep 3: The sixth number is the difference: $n = 102 - 80 = 22$. Check: $\\frac{80 + 22}{6} = \\frac{102}{6} = 17$ ✓\n\n**Common Mistakes:**\n* $16$: assumes the new number equals the old mean, but adding $16$ would leave the mean at $16$.\n* $17$: assumes the new number equals the new mean, which happens only when the mean does not change.\n* $80$: reports the sum of the first $5$ numbers instead of the sixth number.\n\n**Test Day Takeaway:** Turn each mean into a sum; the difference between the two sums is the value that was added.",
      skills: ["calculate-mean"]
    },
    {
      id: 10,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "$8(t + 2) = 96$\nWhat value of $t$ is the solution to the given equation?",
      choices: [
        { id: "A", text: "$10$" },
        // distractor: does not distribute the 8, solving 8t + 2 = 96 to get 94/8 = 11.75
        { id: "B", text: "$11.75$" },
        // distractor: divides both sides by 8 to get t + 2 = 12, then stops and reports 12
        { id: "C", text: "$12$" },
        // distractor: divides by 8 and then adds 2 instead of subtracting, computing 12 + 2 = 14
        { id: "D", text: "$14$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Divide both sides by $8$: $t + 2 = 12$, so $t = 10$.\n\n**The Full Solution:**\nStep 1: Divide both sides of $8(t + 2) = 96$ by $8$: $t + 2 = 12$.\nStep 2: Subtract $2$ from both sides: $t = 10$.\nStep 3: Check: $8(10 + 2) = 8(12) = 96$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($11.75$): multiplies only $t$ by $8$, solving $8t + 2 = 96$. The $8$ multiplies both terms inside the parentheses.\n* Choice C ($12$): this is the value of $t + 2$, not $t$.\n* Choice D ($14$): adds $2$ instead of subtracting it in the last step.\n\n**Test Day Takeaway:** When one side is a number times a parenthesis, divide by that number first; then one more step isolates the variable.",
      skills: ["combining-like-terms"]
    },
    {
      id: 11,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "In the right triangle shown, what is the value of $\\tan \\theta$?",
      diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [15, 0], [15, 8]], sideLabels: ["", "8", "17"], labels: ["", "", "θ"], rightAngleVertex: 1, figureNote: true } },
      choices: [
        // distractor: divides the two given lengths, 8 over 17, which is the cosine of theta
        { id: "A", text: "$\\frac{8}{17}$" },
        // distractor: inverts the tangent ratio, putting the adjacent leg 8 over the opposite leg 15
        { id: "B", text: "$\\frac{8}{15}$" },
        // distractor: gives the sine of theta, 15 over the hypotenuse 17, instead of 15 over the adjacent leg
        { id: "C", text: "$\\frac{15}{17}$" },
        { id: "D", text: "$\\frac{15}{8}$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** The missing leg is $\\sqrt{17^2 - 8^2} = 15$. From $\\theta$, that leg is opposite and the leg of length $8$ is adjacent, so $\\tan \\theta = \\frac{15}{8}$.\n\n**The Full Solution:**\nStep 1: The figure gives one leg, $8$, and the hypotenuse, $17$. Find the other leg with the Pythagorean theorem: $8^2 + b^2 = 17^2$, so $b^2 = 289 - 64 = 225$ and $b = 15$.\nStep 2: From angle $\\theta$, the leg of length $15$ is opposite and the leg of length $8$ is adjacent.\nStep 3: $\\tan \\theta = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{15}{8}$. Check: $8^2 + 15^2 = 64 + 225 = 289 = 17^2$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{8}{17}$): divides the two lengths shown. This is $\\cos \\theta$, adjacent over hypotenuse.\n* Choice B ($\\frac{8}{15}$): uses both legs but in the wrong order, adjacent over opposite.\n* Choice C ($\\frac{15}{17}$): this is $\\sin \\theta$, opposite over hypotenuse.\n\n**Test Day Takeaway:** Tangent uses the two legs only; if a leg is missing, find it with the Pythagorean theorem, then label opposite and adjacent from the marked angle.",
      skills: ["soh-cah-toa", "pythagorean-theorem"]
    },
    {
      id: 12,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "$\\left(\\frac{1}{25}\\right)^{x} = 5^{kx}$\nIn the given equation, $k$ is a constant. The equation is true for all values of $x$. What is the value of $k$?",
      choices: [
        { id: "A", text: "$-2$" },
        // distractor: keeps the negative sign from the reciprocal but writes 25 as 5 to the 1/2 instead of 5 squared
        { id: "B", text: "$-\\frac{1}{2}$" },
        // distractor: writes 25 as 5 to the 1/2 and also drops the negative sign from the reciprocal
        { id: "C", text: "$\\frac{1}{2}$" },
        // distractor: writes 25 as 5 squared but ignores the reciprocal, leaving the exponent positive
        { id: "D", text: "$2$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $\\frac{1}{25} = 5^{-2}$, so $\\left(\\frac{1}{25}\\right)^{x} = 5^{-2x}$ and $k = -2$.\n\n**The Full Solution:**\nStep 1: Write the left side with base $5$. Since $25 = 5^{2}$, the reciprocal is $\\frac{1}{25} = 5^{-2}$.\nStep 2: Raise it to the power $x$ by multiplying exponents: $\\left(5^{-2}\\right)^{x} = 5^{-2x}$.\nStep 3: For $5^{-2x} = 5^{kx}$ to be true for all $x$, the exponents must match, so $k = -2$. Check with $x = 1$: $\\frac{1}{25} = 5^{-2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-\\frac{1}{2}$): keeps the negative sign but treats $25$ as $5^{1/2}$. In fact $5^{1/2} = \\sqrt{5}$, not $25$.\n* Choice C ($\\frac{1}{2}$): makes the same exponent error and also drops the negative sign that the reciprocal requires.\n* Choice D ($2$): writes $25$ as $5^{2}$ but forgets the reciprocal; $5^{2x} = 25^{x}$, not $\\left(\\frac{1}{25}\\right)^{x}$.\n\n**Test Day Takeaway:** A reciprocal is a negative exponent: write every base as a power of the same number, then compare exponents.",
      skills: ["exponential-functions"]
    },
    {
      id: 13,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "For the linear function $f$, $f(12) = 27$ and $f(20) = 39$. What is the value of $f(30)$?",
      correctAnswer: "54",
      explanation: "**SAT Pattern: Line from Two Points**\n\n**The correct answer is $54$.**\n\n**The Fast Way (~25s):** The slope is $\\frac{39 - 27}{20 - 12} = 1.5$, so from $x = 20$ to $x = 30$ the function increases by $1.5(10) = 15$: $f(30) = 39 + 15 = 54$.\n\n**The Full Solution:**\nStep 1: The graph of $f$ passes through $(12, 27)$ and $(20, 39)$, so its slope is $\\frac{39 - 27}{20 - 12} = \\frac{12}{8} = 1.5$.\nStep 2: Use $(12, 27)$ to find the y-intercept: $27 - 1.5(12) = 27 - 18 = 9$, so $f(x) = 1.5x + 9$.\nStep 3: Evaluate: $f(30) = 1.5(30) + 9 = 45 + 9 = 54$. Check: $f(20) = 1.5(20) + 9 = 39$ ✓\n\n**Common Mistakes:**\n* $45$: computes $1.5(30)$ and leaves out the y-intercept $9$.\n* $51$: adds the same increase of $12$ again, computing $39 + 12$, but $20$ to $30$ is a step of $10$, not $8$.\n* $67.5$: assumes $f$ is proportional, using $\\frac{27}{12} = 2.25$ times $30$. The y-intercept is $9$, not $0$.\n\n**Test Day Takeaway:** Two points give the slope; one point then gives the y-intercept. Do not divide one output by one input unless the line passes through the origin.",
      skills: ["linear-functions", "slope", "coordinate-geometry"]
    },
    {
      id: 14,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "$x^{2} + bx + 81 = 0$\nIn the given equation, $b$ is a constant. One solution to the given equation is $3$. What is the value of $b$?",
      choices: [
        { id: "A", text: "$-30$" },
        // distractor: finds the other solution, 81/3 = 27, and reports its opposite instead of the opposite of the sum of the solutions
        { id: "B", text: "$-27$" },
        // distractor: treats 3 as the only solution, as in (x - 3)^2 = x^2 - 6x + 9, ignoring the constant 81
        { id: "C", text: "$-6$" },
        // distractor: makes a sign error when solving 9 + 3b + 81 = 0, getting b = 30
        { id: "D", text: "$30$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Quadratic — Vieta's Sum/Product**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Substitute $x = 3$: $9 + 3b + 81 = 0$, so $3b = -90$ and $b = -30$.\n\n**The Full Solution:**\nStep 1: Because $3$ is a solution, substituting $x = 3$ makes the equation true: $3^{2} + 3b + 81 = 0$.\nStep 2: Simplify: $90 + 3b = 0$, so $3b = -90$.\nStep 3: Divide by $3$: $b = -30$. Check: $x^{2} - 30x + 81 = (x - 3)(x - 27)$, so $3$ is a solution, and the other solution is $27$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-27$): finds the other solution, $\\frac{81}{3} = 27$, and reports $-27$. The value of $b$ is the opposite of the sum of the solutions, $-(3 + 27) = -30$.\n* Choice C ($-6$): treats $3$ as a double solution, as in $(x - 3)^{2} = x^{2} - 6x + 9$; that would need a constant of $9$, not $81$.\n* Choice D ($30$): moves $90$ to the other side without changing its sign, getting $3b = 90$.\n\n**Test Day Takeaway:** A solution of an equation makes the equation true. Substitute it to find an unknown coefficient, then check by factoring.",
      skills: ["quadratic-factoring"]
    },
    {
      id: 15,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "Based on a random sample of $180$ students at a high school, the mean commute time for students at the school is estimated to be $11.4$ minutes, with an associated margin of error of $0.8$ minute. Which of the following is the most appropriate conclusion?",
      choices: [
        // distractor: ignores the margin of error and treats the sample mean 11.4 as the exact mean for the school
        { id: "A", text: "The mean commute time for all students at the school is exactly $11.4$ minutes." },
        // distractor: applies the interval to individual students rather than to the mean commute time
        { id: "B", text: "The commute time of every student in the sample is between $10.6$ and $12.2$ minutes." },
        // distractor: adds the margin of error but never subtracts it, using only 11.4 to 12.2
        { id: "C", text: "It is plausible that the mean commute time for all students at the school is between $11.4$ and $12.2$ minutes." },
        { id: "D", text: "It is plausible that the mean commute time for all students at the school is between $10.6$ and $12.2$ minutes." }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Margin of Error**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** The plausible values for the mean are $11.4 \\pm 0.8$, or $10.6$ to $12.2$ minutes.\n\n**The Full Solution:**\nStep 1: A margin of error describes how far the mean for the whole school could plausibly be from the sample mean. It does not describe individual students.\nStep 2: Subtract and add the margin of error: $11.4 - 0.8 = 10.6$ and $11.4 + 0.8 = 12.2$.\nStep 3: So it is plausible that the mean commute time for all students at the school is between $10.6$ and $12.2$ minutes. Check: the interval is centered at $11.4$ and is $1.6$ minutes wide, twice the margin of error ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: ignores the margin of error. A sample mean estimates the mean for the school; it does not determine it exactly.\n* Choice B: uses the correct endpoints but applies them to individual students, whose commute times can vary much more than the mean.\n* Choice C: adds the margin of error without subtracting it, so the interval is not centered at the estimate.\n\n**Test Day Takeaway:** A margin of error gives a two-sided interval, estimate minus margin to estimate plus margin, and the conclusion is about the population mean, not about individuals.",
      skills: ["margin-of-error"]
    },
    {
      id: 16,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The table shows the number of loaves of bread a bakery sold in April. The number of rye loaves sold in April was $130\\%$ of the number sold in March, and the number sold in March was $75\\%$ of the number sold in February. How many rye loaves were sold in February?",
      questionTable: { headers: ["Bread", "Loaves sold in April"], rows: [["Rye", "$195$"], ["Wheat", "$168$"], ["Sourdough", "$143$"]] },
      correctAnswer: "200",
      explanation: "**SAT Pattern: Reverse-Percent Multi-Step**\n\n**The correct answer is $200$.**\n\n**The Fast Way (~30s):** Work backward twice: $\\frac{195}{1.3} = 150$ rye loaves in March, then $\\frac{150}{0.75} = 200$ in February.\n\n**The Full Solution:**\nStep 1: The table shows that $195$ rye loaves were sold in April. Since April was $130\\%$ of March, $195 = 1.3(\\text{March})$, so March $= \\frac{195}{1.3} = 150$.\nStep 2: Since March was $75\\%$ of February, $150 = 0.75(\\text{February})$, so February $= \\frac{150}{0.75} = 200$.\nStep 3: Check forward: $75\\%$ of $200$ is $150$, and $130\\%$ of $150$ is $195$ ✓\n\n**Common Mistakes:**\n* $150$: stops after the first step and reports the number sold in March.\n* $253.5$: multiplies by $1.3$ instead of dividing, computing $195(1.3)$.\n* $260$: undoes only the $75\\%$ step, computing $\\frac{195}{0.75}$.\n\n**Test Day Takeaway:** If $A$ is $p\\%$ of $B$, then $B = A \\div \\frac{p}{100}$. With two percent steps, divide twice, then check by working forward.",
      skills: ["percent-of-value", "percent-word-problems"]
    },
    {
      id: 17,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "$|2x + a| = 14$\nIn the given equation, $a$ is a constant. The solutions to the equation are $4$ and $18$. What is the value of $a$?",
      choices: [
        { id: "A", text: "$-22$" },
        // distractor: substitutes the midpoint 11 of the two solutions into 2x + a = 14, giving a = -8
        { id: "B", text: "$-8$" },
        // distractor: solves only 2x + a = 14 at x = 4, giving a = 6, which fails for x = 18
        { id: "C", text: "$6$" },
        // distractor: finds the size of a from 4 + 18 = 22 but uses the wrong sign
        { id: "D", text: "$22$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The two solutions come from the two cases $2x + a = 14$ and $2x + a = -14$. The larger solution goes with $14$: $2(18) + a = 14$, so $a = -22$.\n\n**The Full Solution:**\nStep 1: $|2x + a| = 14$ means $2x + a = 14$ or $2x + a = -14$. The larger solution, $18$, satisfies the first case and the smaller solution, $4$, satisfies the second.\nStep 2: From the first case: $2(18) + a = 14$, so $36 + a = 14$ and $a = -22$.\nStep 3: Check both solutions in $|2x - 22| = 14$: $|2(18) - 22| = |14| = 14$ and $|2(4) - 22| = |-14| = 14$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-8$): substitutes $11$, the midpoint of $4$ and $18$, into $2x + a = 14$. At the midpoint the expression inside the absolute value is $0$, not $14$.\n* Choice C ($6$): uses $2x + a = 14$ with $x = 4$. Then $|2(18) + 6| = 42$, so $18$ would not be a solution.\n* Choice D ($22$): gets $22$ from $4 + 18$ but with the wrong sign. With $a = 22$ the solutions are $-4$ and $-18$.\n\n**Test Day Takeaway:** An absolute value equation splits into two cases; use one given solution in each case, then check both solutions.",
      skills: ["combining-like-terms"]
    },
    {
      id: 18,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "In the $xy$-plane, a triangle has vertices at $(0, 0)$, $(p, 0)$, and $(q, r)$, where $p$, $q$, and $r$ are positive constants. Which expression represents the area of the triangle?",
      choices: [
        // distractor: uses q, the x-coordinate of the third vertex, as the height instead of its y-coordinate r
        { id: "A", text: "$\\frac{1}{2}pq$" },
        // distractor: uses q as the base instead of p, the length of the side on the x-axis
        { id: "B", text: "$\\frac{1}{2}qr$" },
        { id: "C", text: "$\\frac{1}{2}pr$" },
        // distractor: adds the x-coordinates p and q to form the base, as if the figure were a trapezoid
        { id: "D", text: "$\\frac{1}{2}(p + q)r$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Area of Triangle from Coordinates**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The side from $(0, 0)$ to $(p, 0)$ lies on the x-axis and has length $p$. The height is the distance from $(q, r)$ to the x-axis, which is $r$, so the area is $\\frac{1}{2}pr$.\n\n**The Full Solution:**\nStep 1: The vertices $(0, 0)$ and $(p, 0)$ both lie on the x-axis, so the side joining them has length $p$. Use it as the base.\nStep 2: The height is the perpendicular distance from the third vertex, $(q, r)$, to the x-axis, which is its y-coordinate, $r$. The x-coordinate $q$ does not affect the height.\nStep 3: Area $= \\frac{1}{2}(\\text{base})(\\text{height}) = \\frac{1}{2}pr$. Check with $p = 6$, $q = 5$, and $r = 4$: the triangle with vertices $(0, 0)$, $(6, 0)$, and $(5, 4)$ has base $6$ and height $4$, so its area is $12 = \\frac{1}{2}(6)(4)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{2}pq$): uses the x-coordinate $q$ as the height. Moving the third vertex left or right does not change the height.\n* Choice B ($\\frac{1}{2}qr$): uses the correct height but takes $q$ as the base instead of $p$, the length of the side on the x-axis.\n* Choice D ($\\frac{1}{2}(p + q)r$): uses the trapezoid formula $\\frac{1}{2}(b_1 + b_2)h$ for a triangle.\n\n**Test Day Takeaway:** When one side of a triangle lies on an axis, the base is that side's length and the height is the other coordinate of the opposite vertex.",
      skills: ["triangle-area"]
    },
    {
      id: 19,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "At a bake sale, muffins cost \\$3.50 each and cookies cost \\$1.50 each. Sam bought $24$ items, muffins and cookies only, for a total of \\$62. How many cookies did Sam buy?",
      correctAnswer: "11",
      explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**The correct answer is $11$.**\n\n**The Fast Way (~40s):** If all $24$ items were cookies they would cost $1.50(24) = 36$ dollars. Each muffin adds $2$ dollars, so there are $\\frac{62 - 36}{2} = 13$ muffins and $24 - 13 = 11$ cookies.\n\n**The Full Solution:**\nStep 1: Let $m$ be the number of muffins and $c$ the number of cookies. Then $m + c = 24$ and $3.5m + 1.5c = 62$.\nStep 2: Substitute $m = 24 - c$ into the second equation: $3.5(24 - c) + 1.5c = 62$, which becomes $84 - 2c = 62$.\nStep 3: Solve: $2c = 22$, so $c = 11$ and $m = 13$. Check: $13 + 11 = 24$ and $3.5(13) + 1.5(11) = 45.5 + 16.5 = 62$ ✓\n\n**Common Mistakes:**\n* $13$: solves the system correctly but reports the number of muffins.\n* $12$: assumes Sam bought equal numbers of each item, but $3.5(12) + 1.5(12) = 60$, not $62$.\n* $22$: stops at $2c = 22$ and does not divide by $2$.\n\n**Test Day Takeaway:** Write one equation for the count and one for the total cost, substitute, and answer for the variable the question asks about.",
      skills: ["substitution-method"]
    },
    {
      id: 20,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "$3x + 5y = 44$\n$5x + 3y = c$\nIn the given system of equations, $c$ is a constant. If the solution to the system is $(x, y)$ and $x + y = 10$, what is the value of $c$?",
      choices: [
        { id: "A", text: "$36$" },
        // distractor: assumes x = y = 5 because x + y = 10, computing 5(5) + 3(5) = 40
        { id: "B", text: "$40$" },
        // distractor: assumes switching the coefficients cannot change the total, so c = 44
        { id: "C", text: "$44$" },
        // distractor: finds 8(x + y) = 80 and reports it as c instead of subtracting 44
        { id: "D", text: "$80$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Solve for a Combination**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Adding the equations gives $8x + 8y = 44 + c$. Since $x + y = 10$, the left side is $80$, so $c = 80 - 44 = 36$.\n\n**The Full Solution:**\nStep 1: Add the two equations: $(3x + 5x) + (5y + 3y) = 44 + c$, so $8x + 8y = 44 + c$.\nStep 2: Factor the left side: $8(x + y) = 44 + c$. Substitute $x + y = 10$: $80 = 44 + c$.\nStep 3: Solve: $c = 36$. Check: with $x + y = 10$ and $3x + 5y = 44$, $3x + 5(10 - x) = 44$ gives $x = 3$ and $y = 7$, and $5(3) + 3(7) = 15 + 21 = 36$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($40$): assumes $x = y = 5$. The values of $x$ and $y$ add to $10$ but are $3$ and $7$, and $5(5) + 3(5) = 40$ is not the value of $5x + 3y$.\n* Choice C ($44$): assumes switching the coefficients leaves the total the same. That happens only when $x = y$.\n* Choice D ($80$): finds $8(x + y) = 80$ but forgets that this sum equals $44 + c$, not $c$.\n\n**Test Day Takeaway:** When the coefficients of a system are swapped, add the equations; the result is a multiple of $x + y$.",
      skills: ["elimination-method"]
    },
    {
      id: 21,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "The graph shows the height $h(t)$, in feet, of a kite $t$ minutes after it was launched, where $h(t) = -3t^{2} + 30t$. The kite was at a height of $48$ feet at two different times. How many minutes passed between these two times?",
      diagram: { type: "parabola", params: { vertex: { h: 5, k: 75 }, a: -3, xRange: [0, 10], yRange: [0, 80], xTickInterval: 1, yTickInterval: 25, gridInterval: 5, showVertex: false } },
      choices: [
        // distractor: gives t = 2, the first time the kite is at a height of 48 feet, instead of the time between the two times
        { id: "A", text: "$2$" },
        { id: "B", text: "$6$" },
        // distractor: gives t = 8, the second time the kite is at a height of 48 feet, instead of the time between the two times
        { id: "C", text: "$8$" },
        // distractor: adds the two times, 2 + 8 = 10, instead of subtracting them
        { id: "D", text: "$10$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** Set $-3t^{2} + 30t = 48$ and divide by $-3$: $t^{2} - 10t + 16 = 0$, or $(t - 2)(t - 8) = 0$. The kite is at $48$ feet at $t = 2$ and $t = 8$, which are $6$ minutes apart.\n\n**The Full Solution:**\nStep 1: The kite is at a height of $48$ feet when $-3t^{2} + 30t = 48$. Subtract $48$ and divide by $-3$: $t^{2} - 10t + 16 = 0$.\nStep 2: Factor: $(t - 2)(t - 8) = 0$, so $t = 2$ or $t = 8$. On the graph, these are the two times the curve is at a height of $48$, once rising and once falling.\nStep 3: The time between them is $8 - 2 = 6$ minutes. Check: $h(2) = -12 + 60 = 48$ and $h(8) = -192 + 240 = 48$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): the first time the kite is at $48$ feet, not the time between the two times.\n* Choice C ($8$): the second time the kite is at $48$ feet. The time between the two times is $8 - 2$.\n* Choice D ($10$): adds the two times instead of subtracting them; $10$ is also when the kite returns to the ground.\n\n**Test Day Takeaway:** Set the function equal to the given height to find both times, then subtract the smaller time from the larger one.",
      skills: ["quadratics"]
    },
    {
      id: 22,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "In the $xy$-plane, line $\\ell$ passes through the points $(2, 1)$ and $(6, 7)$. Line $\\ell$ intersects the $x$-axis at the point $(k, 0)$. What is the value of $k$?",
      correctAnswer: "4/3",
      explanation: "**SAT Pattern: Line from Two Points**\n\n**The correct answer is $\\frac{4}{3}$.**\n\n**The Fast Way (~35s):** The slope is $\\frac{7 - 1}{6 - 2} = \\frac{3}{2}$. Going from $(2, 1)$ down to $y = 0$ is a change of $-1$ in $y$, so $x$ changes by $-1 \\div \\frac{3}{2} = -\\frac{2}{3}$, and $k = 2 - \\frac{2}{3} = \\frac{4}{3}$.\n\n**The Full Solution:**\nStep 1: The slope of line $\\ell$ is $\\frac{7 - 1}{6 - 2} = \\frac{6}{4} = \\frac{3}{2}$.\nStep 2: Use the point $(2, 1)$ to find the $y$-intercept: $1 = \\frac{3}{2}(2) + b$, so $b = -2$ and line $\\ell$ is $y = \\frac{3}{2}x - 2$.\nStep 3: At the $x$-intercept, $y = 0$: $0 = \\frac{3}{2}k - 2$, so $k = \\frac{4}{3}$. Check: $\\frac{3}{2} \\cdot \\frac{4}{3} - 2 = 2 - 2 = 0$, and $\\frac{3}{2}(6) - 2 = 7$ ✓\n\n**Common Mistakes:**\n* $-2$: reports the $y$-intercept of line $\\ell$ instead of the $x$-intercept.\n* $\\frac{1}{2}$: uses the slope upside down, $\\frac{2}{3}$, which gives $0 = 1 + \\frac{2}{3}(k - 2)$ and $k = \\frac{1}{2}$.\n* $-\\frac{4}{3}$: makes a sign error when solving $\\frac{3}{2}k - 2 = 0$.\n\n**Test Day Takeaway:** Find the slope from two points, write the equation of the line, and set $y = 0$ to find the $x$-intercept.",
      skills: ["linear-functions", "slope", "coordinate-geometry"]
    }
  ]
};

export default practiceTest8M2Easy;
