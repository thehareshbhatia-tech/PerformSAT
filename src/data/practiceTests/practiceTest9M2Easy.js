// Practice Test 9 — Math Module 2 Easy variant (22 questions)
// v2 freshness rebuild (2026-09-07): every slot re-patterned and re-authored against the seen-corpus gate — docs/TEST_RECREATION_V2_SPEC.md
// For students routed to easier path after Module 1 (~<60% correct).
// Distribution: 3E / 13M / 6H. Q1-3 easy openers. Max-score ceiling: ~650.
// Domain mix: 7 Algebra / 6 Advanced Math / 5 Problem-Solving / 4 Geometry & Trig.
// Official-calibration recreation (2026-09-01): every item re-authored against
// the CB Educator Question Bank register (docs/TEST_RECREATION_SPEC.md);
// slot metadata frozen. 4 visual items (scatterplot, right triangle,
// triangle with angles, plus the M1-frozen set). Numeric MC choices ascending.

export const practiceTest9M2Easy = {
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
      question: "What is the distance between the two points shown in the $xy$-plane?",
      diagram: { type: "coordinatePoints", params: { points: [[-2, -2], [4, 6]], xMin: -6, xMax: 6, yMin: -4, yMax: 8 } },
      choices: [
        // distractor: reports only the horizontal gap, 4 - (-2) = 6
        { id: "A", text: "$6$" },
        // distractor: reports only the vertical gap, 6 - (-2) = 8
        { id: "B", text: "$8$" },
        { id: "C", text: "$10$" },
        // distractor: adds the two gaps, 6 + 8 = 14, instead of using the Pythagorean theorem
        { id: "D", text: "$14$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Distance Formula**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The points are $(-2, -2)$ and $(4, 6)$, so the horizontal and vertical gaps are $6$ and $8$, and the distance is $\\sqrt{6^{2} + 8^{2}} = 10$.\n\n**The Full Solution:**\nStep 1: Read the coordinates from the grid: the points are $(-2, -2)$ and $(4, 6)$.\nStep 2: Find the horizontal and vertical gaps: $4 - (-2) = 6$ and $6 - (-2) = 8$.\nStep 3: These gaps are the legs of a right triangle whose hypotenuse joins the points, so the distance is $\\sqrt{6^{2} + 8^{2}} = \\sqrt{36 + 64} = \\sqrt{100} = 10$. Check: $6^{2} + 8^{2} = 100 = 10^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): reports only the horizontal gap, $4 - (-2) = 6$, which is one leg of the right triangle, not the distance.\n* Choice B ($8$): reports only the vertical gap, $6 - (-2) = 8$, the other leg.\n* Choice D ($14$): adds the two gaps, $6 + 8 = 14$. That is the length of a path along the grid lines, not the straight-line distance.\n\n**Test Day Takeaway:** The distance between two points is the hypotenuse of the right triangle formed by their horizontal and vertical gaps; it is always less than the sum of the gaps.",
      skills: ["coordinate-geometry"]
    },
    {
      id: 2,
      type: "fill-in",
      difficulty: "easy",
      band: 2,
      question: "A line in the $xy$-plane passes through the points $(3, 84)$ and $(9, 156)$. What is the slope of the line?",
      correctAnswer: "12",
      explanation: "**SAT Pattern: Line from Two Points**\n\n**The correct answer is 12.**\n\n**The Fast Way (~15s):** Slope is rise over run: $\\frac{156 - 84}{9 - 3} = \\frac{72}{6} = 12$.\n\n**The Full Solution:**\nStep 1: Find the change in $y$: $156 - 84 = 72$.\nStep 2: Find the change in $x$, subtracting in the same order: $9 - 3 = 6$.\nStep 3: Divide: $\\frac{72}{6} = 12$. Check: starting at $(3, 84)$ and moving $6$ units right at slope $12$ gives $84 + 12(6) = 156$, the second point ✓\n\n**Common Mistakes:**\n* $\\frac{1}{12}$: divides the change in $x$ by the change in $y$, $\\frac{6}{72}$. Slope is the change in $y$ over the change in $x$.\n* $-12$: subtracts in opposite orders, $\\frac{156 - 84}{3 - 9} = \\frac{72}{-6}$. Both differences must start from the same point.\n* $72$: stops at the change in $y$ and never divides by the change in $x$.\n\n**Test Day Takeaway:** For slope from two points, subtract the coordinates in the same order on the top and the bottom, and put the change in $y$ on top.",
      skills: ["linear-functions", "slope", "coordinate-geometry"]
    },
    {
      id: 3,
      type: "multiple-choice",
      difficulty: "easy",
      band: 3,
      question: "$5c + 8 = 68$\nWhat is the value of $5c + 20$?",
      choices: [
        // distractor: solves for c = 12 and reports c instead of 5c + 20
        { id: "A", text: "$12$" },
        // distractor: stops at 5c = 60 and forgets to add 20
        { id: "B", text: "$60$" },
        // distractor: copies the given 68, treating 5c + 20 as equal to 5c + 8
        { id: "C", text: "$68$" },
        { id: "D", text: "$80$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Shifted Output**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** $5c + 20$ is $12$ more than $5c + 8$, so its value is $68 + 12 = 80$.\n\n**The Full Solution:**\nStep 1: Subtract $8$ from both sides of the given equation: $5c = 60$.\nStep 2: Add $20$ to both sides: $5c + 20 = 60 + 20$.\nStep 3: So $5c + 20 = 80$. Check: $c = 12$ satisfies $5(12) + 8 = 68$, and $5(12) + 20 = 80$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): solves for $c$ and reports $c = 12$, but the question asks for $5c + 20$.\n* Choice B ($60$): stops at $5c = 60$ and never adds $20$.\n* Choice C ($68$): copies the value of $5c + 8$, treating $5c + 20$ as if it had the same value.\n\n**Test Day Takeaway:** When the question asks for an expression rather than the variable, look for a way to get that expression directly from the given equation; solving for the variable is often an extra step.",
      skills: ["solving-equations", "ratios"]
    },
    {
      id: 4,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "In right triangle $ABC$, angle $B$ is the right angle. The perimeter of the triangle is $120$, $AB = 30$, and $AC = 50$. What is the value of $\\tan A$?",
      choices: [
        // distractor: gives cos A, adjacent over hypotenuse, 30/50 = 3/5
        { id: "A", text: "$\\frac{3}{5}$" },
        // distractor: inverts the tangent ratio to adjacent over opposite, 30/40 = 3/4
        { id: "B", text: "$\\frac{3}{4}$" },
        // distractor: gives sin A, opposite over hypotenuse, 40/50 = 4/5
        { id: "C", text: "$\\frac{4}{5}$" },
        { id: "D", text: "$\\frac{4}{3}$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Right Triangle Trigonometry with Perimeter**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** The third side is $BC = 120 - 30 - 50 = 40$, and $\\tan A = \\frac{BC}{AB} = \\frac{40}{30} = \\frac{4}{3}$.\n\n**The Full Solution:**\nStep 1: Use the perimeter to find the missing side: $BC = 120 - 30 - 50 = 40$.\nStep 2: From angle $A$, the opposite side is $BC = 40$, the adjacent side is $AB = 30$, and the hypotenuse is $AC = 50$, since $AC$ is across from the right angle at $B$.\nStep 3: $\\tan A = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{40}{30} = \\frac{4}{3}$. Check: $30^{2} + 40^{2} = 900 + 1600 = 2500 = 50^{2}$, so the sides do form a right triangle ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{3}{5}$): gives $\\cos A$, adjacent over hypotenuse, $\\frac{30}{50}$.\n* Choice B ($\\frac{3}{4}$): inverts the tangent ratio to adjacent over opposite, $\\frac{30}{40}$, which is $\\tan C$.\n* Choice C ($\\frac{4}{5}$): gives $\\sin A$, opposite over hypotenuse, $\\frac{40}{50}$.\n\n**Test Day Takeaway:** Find all three sides first, then label them opposite, adjacent, and hypotenuse from the angle named in the question before writing the ratio.",
      skills: ["soh-cah-toa"]
    },
    {
      id: 5,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "$f(x) = 520 - kx$\nIn the given function $f$, $k$ is a constant. If $f(8) = 360$, what is the value of $k$?",
      choices: [
        { id: "A", text: "$20$" },
        // distractor: divides the given output by the input, 360 / 8 = 45, ignoring the constant 520
        { id: "B", text: "$45$" },
        // distractor: divides the constant term by the input, 520 / 8 = 65
        { id: "C", text: "$65$" },
        // distractor: reports the total decrease, 520 - 360 = 160, without dividing by 8
        { id: "D", text: "$160$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Slope-Intercept Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The output falls from $f(0) = 520$ to $f(8) = 360$, a drop of $160$ over $8$ units, so $k = \\frac{160}{8} = 20$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 8$ into the function: $f(8) = 520 - 8k$.\nStep 2: Set this equal to the given value: $520 - 8k = 360$.\nStep 3: Subtract $520$ from both sides and divide by $-8$: $-8k = -160$, so $k = 20$. Check: $f(8) = 520 - 20(8) = 520 - 160 = 360$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($45$): divides the given output by the input, $\\frac{360}{8} = 45$, ignoring the constant term $520$.\n* Choice C ($65$): divides the constant term by the input, $\\frac{520}{8} = 65$.\n* Choice D ($160$): finds the total decrease, $520 - 360 = 160$, but never divides by $8$.\n\n**Test Day Takeaway:** In a linear function the constant term is the value at $x = 0$; substitute the one other known point and solve for the unknown coefficient.",
      skills: ["slope-intercept-form"]
    },
    {
      id: 6,
      type: "fill-in",
      difficulty: "medium",
      band: 4,
      question: "In the right triangle shown, what is the value of $h$?",
      diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [24, 0], [24, 45]], sideLabels: ["24 ft", "h", "51 ft"], rightAngleVertex: 1 } },
      correctAnswer: "45",
      explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**The correct answer is 45.**\n\n**The Fast Way (~20s):** The side of length $51$ is the hypotenuse, so $h = \\sqrt{51^{2} - 24^{2}} = \\sqrt{2601 - 576} = \\sqrt{2025} = 45$.\n\n**The Full Solution:**\nStep 1: The side across from the right angle has length $51$, so it is the hypotenuse; $24$ and $h$ are the legs.\nStep 2: Write the Pythagorean theorem with $h$ as the unknown leg: $24^{2} + h^{2} = 51^{2}$.\nStep 3: $576 + h^{2} = 2601$, so $h^{2} = 2025$ and $h = 45$. Check: $24^{2} + 45^{2} = 576 + 2025 = 2601 = 51^{2}$ ✓\n\n**Common Mistakes:**\n* $27$: subtracts the lengths, $51 - 24 = 27$, instead of subtracting their squares.\n* $56.4$: adds the squares, $\\sqrt{51^{2} + 24^{2}} = \\sqrt{3177} \\approx 56.4$, which treats the hypotenuse as a leg.\n* $2025$: stops at $h^{2} = 2025$ and never takes the square root.\n\n**Test Day Takeaway:** Find the hypotenuse first (it is across from the right angle); when it is given, subtract the square of the known leg from its square.",
      skills: ["pythagorean-theorem"]
    },
    {
      id: 7,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The water temperature $T$, in degrees Fahrenheit, of a swimming pool differs from $82$ by exactly $4$ degrees. Which equation represents this situation?",
      choices: [
        // distractor: adds 4 to T and compares to 82; its solutions are T = 78 and T = -86
        { id: "A", text: "$|T + 4| = 82$" },
        { id: "B", text: "$|T - 82| = 4$" },
        // distractor: adds 82 instead of subtracting it; its solutions are T = -78 and T = -86
        { id: "C", text: "$|T + 82| = 4$" },
        // distractor: swaps the target and the allowed difference; its solutions are T = 86 and T = -78
        { id: "D", text: "$|T - 4| = 82$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** \"Differs from $82$ by exactly $4$\" means the distance between $T$ and $82$ is $4$, which is $|T - 82| = 4$.\n\n**The Full Solution:**\nStep 1: The difference between $T$ and $82$ is $T - 82$, which can be positive or negative.\nStep 2: The size of that difference, regardless of sign, is $|T - 82|$, and it must equal $4$: $|T - 82| = 4$.\nStep 3: Solve to confirm: $T - 82 = 4$ or $T - 82 = -4$, so $T = 86$ or $T = 78$, the two temperatures $4$ degrees from $82$. Check: $|86 - 82| = 4$ and $|78 - 82| = 4$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($|T + 4| = 82$): adds the difference to $T$ and sets the result equal to $82$; its solutions are $T = 78$ and $T = -86$, and $-86$ is not $4$ degrees from $82$.\n* Choice C ($|T + 82| = 4$): adds $82$ instead of subtracting it; its solutions are $T = -78$ and $T = -86$.\n* Choice D ($|T - 4| = 82$): swaps the roles of $82$ and $4$; its solutions are $T = 86$ and $T = -78$.\n\n**Test Day Takeaway:** \"$x$ differs from $a$ by exactly $d$\" translates to $|x - a| = d$: the target goes inside the absolute value with a minus sign, and the allowed difference goes outside.",
      skills: ["combining-like-terms"]
    },
    {
      id: 8,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "$\\frac{x^{2} - 9}{x - 3} = k$\nIn the given equation, $k$ is a constant. For what value of $k$ does the equation have no solution?",
      choices: [
        // distractor: uses x = -3, the other zero of the numerator, and reports the output 0, which the left side does reach
        { id: "A", text: "$0$" },
        // distractor: reports the excluded input x = 3 instead of the value of k it would produce
        { id: "B", text: "$3$" },
        { id: "C", text: "$6$" },
        // distractor: copies the constant 9 from the numerator x^2 - 9
        { id: "D", text: "$9$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Rational Equation with No Solution**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** For $x \\neq 3$, $\\frac{x^{2} - 9}{x - 3} = x + 3$, which takes every value except $3 + 3 = 6$. So the equation has no solution when $k = 6$.\n\n**The Full Solution:**\nStep 1: Factor the numerator: $x^{2} - 9 = (x - 3)(x + 3)$, so for every $x \\neq 3$ the left side equals $x + 3$.\nStep 2: The equation becomes $x + 3 = k$, so $x = k - 3$. This is a solution unless it equals the excluded value $x = 3$.\nStep 3: $k - 3 = 3$ when $k = 6$, so for $k = 6$ the only candidate is $x = 3$, which makes the denominator $0$. The equation has no solution. Check: for $k = 0$, $x = -3$ works, since $\\frac{9 - 9}{-6} = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0$): uses $x = -3$, the other zero of the numerator. But $x = -3$ gives a left side of $0$, so $k = 0$ has a solution.\n* Choice B ($3$): reports the excluded value of $x$ rather than the value of $k$ that $x = 3$ would produce.\n* Choice D ($9$): copies the constant from the numerator $x^{2} - 9$. For $k = 9$, $x = 6$ is a solution.\n\n**Test Day Takeaway:** After canceling a common factor, the canceled input is still excluded; the output it would have produced is the value the equation can never equal.",
      skills: ["rational-expressions"]
    },
    {
      id: 9,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "$8, 15, 11, 19, 10, x$\nThe mean of the six numbers listed is $13$. What is the value of $x$?",
      choices: [
        // distractor: multiplies the mean by 5 instead of 6: 13 x 5 = 65, then 65 - 63 = 2
        { id: "A", text: "$2$" },
        // distractor: assumes the missing number equals the mean of 13
        { id: "B", text: "$13$" },
        { id: "C", text: "$15$" },
        // distractor: reports the sum of the five known numbers, 63
        { id: "D", text: "$63$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Mean from List**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Six numbers with a mean of $13$ have a sum of $6(13) = 78$; the five known numbers sum to $63$, so $x = 78 - 63 = 15$.\n\n**The Full Solution:**\nStep 1: A mean of $13$ for six numbers means their sum is $6 \\times 13 = 78$.\nStep 2: Add the five known numbers: $8 + 15 + 11 + 19 + 10 = 63$.\nStep 3: Subtract: $x = 78 - 63 = 15$. Check: $\\frac{63 + 15}{6} = \\frac{78}{6} = 13$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): multiplies the mean by $5$ instead of $6$, getting a sum of $65$, then computes $65 - 63 = 2$.\n* Choice B ($13$): assumes the missing number equals the mean.\n* Choice D ($63$): reports the sum of the five known numbers.\n\n**Test Day Takeaway:** To find a missing value from a mean, multiply the mean by the total count of values (including the missing one), then subtract the known values.",
      skills: ["calculate-mean"]
    },
    {
      id: 10,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The measures of the interior angles of a triangle are $(2k)^{\\circ}$, $(3k + 10)^{\\circ}$, and $(4k - 19)^{\\circ}$. What is the value of $k$?",
      correctAnswer: "21",
      explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**The correct answer is 21.**\n\n**The Fast Way (~20s):** The angles sum to $180^{\\circ}$: $9k - 9 = 180$, so $9k = 189$ and $k = 21$.\n\n**The Full Solution:**\nStep 1: The interior angles of a triangle sum to $180^{\\circ}$: $2k + (3k + 10) + (4k - 19) = 180$.\nStep 2: Combine like terms: $9k - 9 = 180$.\nStep 3: Add $9$ and divide by $9$: $9k = 189$, so $k = 21$. Check: the angles are $42^{\\circ}$, $73^{\\circ}$, and $65^{\\circ}$, and $42 + 73 + 65 = 180$ ✓\n\n**Common Mistakes:**\n* $19$: combines the constants as $+9$ instead of $-9$, solving $9k + 9 = 180$.\n* $20$: drops the constants and solves $9k = 180$.\n* $189$: stops at $9k = 189$ and never divides by $9$.\n\n**Test Day Takeaway:** Write the angle-sum equation, combine the variable terms and the constants separately, and check that every angle comes out positive.",
      skills: ["triangle-angle-sum"]
    },
    {
      id: 11,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A water company charges a fixed monthly fee plus a constant rate for each hundred cubic feet of water used. The table shows the total monthly charge $C$, in dollars, for using $w$ hundred cubic feet of water. Which equation represents this relationship?",
      questionTable: { headers: ["$w$", "$C$"], rows: [["$4$", "$38$"], ["$9$", "$63$"], ["$15$", "$93$"]] },
      choices: [
        { id: "A", text: "$C = 5w + 18$" },
        // distractor: treats the first row as a pure rate, 38 / 4 = 9.5, and drops the fixed fee
        { id: "B", text: "$C = 9.5w$" },
        // distractor: swaps the rate and the fixed fee, using 18 per hundred cubic feet and a 5 dollar fee
        { id: "C", text: "$C = 18w + 5$" },
        // distractor: uses the raw change in charge, 63 - 38 = 25, as the rate without dividing by the change of 5 in w
        { id: "D", text: "$C = 25w + 18$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Linear Cost Setup**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** From $w = 4$ to $w = 9$ the charge rises by $63 - 38 = 25$ dollars, so the rate is $\\frac{25}{5} = 5$; then $38 - 5(4) = 18$ is the fixed fee, giving $C = 5w + 18$.\n\n**The Full Solution:**\nStep 1: Find the rate from two rows: $\\frac{63 - 38}{9 - 4} = \\frac{25}{5} = 5$ dollars per hundred cubic feet.\nStep 2: Find the fixed fee from one row: $38 = 5(4) + b$, so $b = 38 - 20 = 18$.\nStep 3: Write the equation: $C = 5w + 18$. Check with the third row: $5(15) + 18 = 75 + 18 = 93$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($C = 9.5w$): divides the first row's charge by its water use, $\\frac{38}{4} = 9.5$, which leaves out the fixed fee.\n* Choice C ($C = 18w + 5$): swaps the rate and the fixed fee.\n* Choice D ($C = 25w + 18$): uses the change in charge, $25$, as the rate without dividing by the change in water use, $5$.\n\n**Test Day Takeaway:** For a fixed fee plus a rate, the rate is the change in total over the change in quantity, and the fee is what is left after subtracting the rate times the quantity in any row.",
      skills: ["word-problem-to-equation"]
    },
    {
      id: 12,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "Cylinder $A$ has radius $r$ and height $30$. Cylinder $B$ has height $30$ and a radius that is $50\\%$ greater than the radius of cylinder $A$. Which expression represents the volume of cylinder $B$ minus the volume of cylinder $A$?",
      choices: [
        // distractor: squares only the increase in radius: 30(0.5)^2 = 7.5
        { id: "A", text: "$7.5\\pi r^{2}$" },
        // distractor: scales the volume by 1.5 instead of 1.5^2: 45 - 30 = 15
        { id: "B", text: "$15\\pi r^{2}$" },
        // distractor: gives the volume of cylinder A, 30 pi r^2, instead of the difference
        { id: "C", text: "$30\\pi r^{2}$" },
        { id: "D", text: "$37.5\\pi r^{2}$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Cylinder Volume**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** Cylinder $B$ has radius $1.5r$, so its volume is $\\pi(1.5r)^{2}(30) = 67.5\\pi r^{2}$; subtracting $30\\pi r^{2}$ leaves $37.5\\pi r^{2}$.\n\n**The Full Solution:**\nStep 1: The volume of cylinder $A$ is $\\pi r^{2}(30) = 30\\pi r^{2}$.\nStep 2: A radius $50\\%$ greater than $r$ is $1.5r$, so the volume of cylinder $B$ is $\\pi(1.5r)^{2}(30) = \\pi(2.25r^{2})(30) = 67.5\\pi r^{2}$.\nStep 3: Subtract: $67.5\\pi r^{2} - 30\\pi r^{2} = 37.5\\pi r^{2}$. Check with $r = 2$: $\\pi(9)(30) - \\pi(4)(30) = 270\\pi - 120\\pi = 150\\pi$, and $37.5\\pi(4) = 150\\pi$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($7.5\\pi r^{2}$): squares only the increase in radius, computing $30\\pi(0.5r)^{2}$.\n* Choice B ($15\\pi r^{2}$): multiplies the volume by $1.5$ instead of $1.5^{2}$, giving $45\\pi r^{2} - 30\\pi r^{2}$.\n* Choice C ($30\\pi r^{2}$): gives the volume of cylinder $A$ rather than the difference in volumes.\n\n**Test Day Takeaway:** Volume depends on the square of the radius, so scaling the radius by $1.5$ scales the volume by $2.25$, not by $1.5$.",
      skills: ["volume-prism"]
    },
    {
      id: 13,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A machine paves a parking lot at a constant rate of $240$ square feet per minute. At this rate, how many square yards does the machine pave in $1$ hour? ($1$ yard $= 3$ feet)",
      correctAnswer: "1600",
      explanation: "**SAT Pattern: Unit Conversion**\n\n**The correct answer is 1600.**\n\n**The Fast Way (~25s):** In $1$ hour the machine paves $240(60) = 14{,}400$ square feet, and $1$ square yard is $3 \\times 3 = 9$ square feet, so that is $\\frac{14{,}400}{9} = 1{,}600$ square yards.\n\n**The Full Solution:**\nStep 1: Convert the time: $1$ hour is $60$ minutes, so the machine paves $240 \\times 60 = 14{,}400$ square feet.\nStep 2: Convert the area unit: a square yard is $3$ feet by $3$ feet, which is $9$ square feet.\nStep 3: Divide: $\\frac{14{,}400}{9} = 1{,}600$ square yards. Check: $1{,}600 \\times 9 = 14{,}400$ square feet, and $\\frac{14{,}400}{60} = 240$ square feet per minute ✓\n\n**Common Mistakes:**\n* $4800$: divides by $3$ instead of $9$, converting square feet as if they were feet.\n* $14400$: converts minutes to an hour but never converts square feet to square yards.\n* $26.7$: converts square feet to square yards, $\\frac{240}{9} \\approx 26.7$, but never multiplies by $60$ minutes.\n\n**Test Day Takeaway:** When converting square units, square the length conversion: $1$ yard $= 3$ feet means $1$ square yard $= 9$ square feet.",
      skills: ["unit-conversion"]
    },
    {
      id: 14,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The vertices of a triangle in the $xy$-plane are $(0, 2)$, $(9, 2)$, and $(4, 8)$. What is the area, in square units, of the triangle?",
      choices: [
        // distractor: adds the base and the height, 9 + 6 = 15, instead of using the area formula
        { id: "A", text: "$15$" },
        { id: "B", text: "$27$" },
        // distractor: uses 8 as the height, measured from the x-axis instead of from the line y = 2: (1/2)(9)(8) = 36
        { id: "C", text: "$36$" },
        // distractor: multiplies base by height without halving: 9 x 6 = 54
        { id: "D", text: "$54$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Area of Triangle from Coordinates**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The side from $(0, 2)$ to $(9, 2)$ is horizontal with length $9$, and $(4, 8)$ is $8 - 2 = 6$ units above it, so the area is $\\frac{1}{2}(9)(6) = 27$.\n\n**The Full Solution:**\nStep 1: Two vertices share the $y$-coordinate $2$, so the side joining them is horizontal; use it as the base, with length $9 - 0 = 9$.\nStep 2: The height is the vertical distance from $(4, 8)$ to the line $y = 2$: $8 - 2 = 6$.\nStep 3: Area $= \\frac{1}{2}(9)(6) = 27$ square units. Check with the coordinate formula: $\\frac{1}{2}|0(2 - 8) + 9(8 - 2) + 4(2 - 2)| = \\frac{1}{2}(54) = 27$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($15$): adds the base and the height, $9 + 6 = 15$.\n* Choice C ($36$): measures the height from the $x$-axis instead of from the base, using $\\frac{1}{2}(9)(8) = 36$.\n* Choice D ($54$): multiplies the base by the height and never takes half.\n\n**Test Day Takeaway:** Look for two vertices that share a coordinate; the side between them is a ready-made base, and the height is measured from that side, not from an axis.",
      skills: ["triangle-area"]
    },
    {
      id: 15,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "In the $xy$-plane, line $q$ is perpendicular to the line with equation $3x - 12y = 24$. What is the slope of line $q$?",
      choices: [
        { id: "A", text: "$-4$" },
        // distractor: negates the slope 1/4 without taking the reciprocal
        { id: "B", text: "$-\\frac{1}{4}$" },
        // distractor: keeps the slope 1/4, the slope of a parallel line
        { id: "C", text: "$\\frac{1}{4}$" },
        // distractor: takes the reciprocal 4 without negating it
        { id: "D", text: "$4$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Solving $3x - 12y = 24$ for $y$ gives $y = \\frac{1}{4}x - 2$, slope $\\frac{1}{4}$; the perpendicular slope is the negative reciprocal, $-4$.\n\n**The Full Solution:**\nStep 1: Solve the given equation for $y$: $-12y = -3x + 24$, so $y = \\frac{1}{4}x - 2$.\nStep 2: The slope of the given line is $\\frac{1}{4}$.\nStep 3: A perpendicular line has the negative reciprocal slope: $-\\frac{1}{\\frac{1}{4}} = -4$. Check: $\\frac{1}{4} \\times (-4) = -1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-\\frac{1}{4}$): negates the slope without taking its reciprocal.\n* Choice C ($\\frac{1}{4}$): gives the slope of the given line, which is the slope of a parallel line.\n* Choice D ($4$): takes the reciprocal without changing the sign.\n\n**Test Day Takeaway:** Put the equation in slope-intercept form to read the slope, then flip and negate it for a perpendicular line; the two slopes always multiply to $-1$.",
      skills: ["perpendicular-negative-reciprocal"]
    },
    {
      id: 16,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "For the exponential function $f$, the table shows four values of $x$ and their corresponding values of $f(x)$. What is the value of $f(15)$?",
      questionTable: { headers: ["$x$", "$f(x)$"], rows: [["$3$", "$120$"], ["$6$", "$60$"], ["$9$", "$30$"], ["$12$", "$15$"]] },
      correctAnswer: "7.5",
      explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**The correct answer is 7.5.**\n\n**The Fast Way (~20s):** Each time $x$ increases by $3$, $f(x)$ is cut in half, so $f(15) = \\frac{15}{2} = 7.5$.\n\n**The Full Solution:**\nStep 1: Compare consecutive rows: $\\frac{60}{120} = \\frac{30}{60} = \\frac{15}{30} = \\frac{1}{2}$, so $f(x)$ is multiplied by $\\frac{1}{2}$ each time $x$ increases by $3$.\nStep 2: From $x = 12$ to $x = 15$ is one more increase of $3$.\nStep 3: So $f(15) = 15 \\times \\frac{1}{2} = 7.5$. Check with the formula $f(x) = 240\\left(\\frac{1}{2}\\right)^{x/3}$: $f(3) = 120$ and $f(15) = 240\\left(\\frac{1}{32}\\right) = 7.5$ ✓\n\n**Common Mistakes:**\n* $0$: subtracts $15$ again, treating the last drop as a constant difference, which describes a linear function, not an exponential one.\n* $3.75$: halves twice, as if $f$ were cut in half for each increase of $1.5$ in $x$.\n* $5$: divides by $3$, confusing the step of $3$ in $x$ with the factor applied to $f(x)$.\n\n**Test Day Takeaway:** An exponential function multiplies by the same factor over equal steps in $x$; find the ratio between rows, not the difference.",
      skills: ["exponential-growth-decay"]
    },
    {
      id: 17,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "The number of visitors to a museum decreased by $25\\%$ from January to February and then increased by $50\\%$ from February to March. There were $720$ visitors in March. How many visitors were there in January?",
      choices: [
        // distractor: undoes only the 50% increase: 720 / 1.5 = 480, the February total
        { id: "A", text: "$480$" },
        // distractor: treats the two changes as one net 25% increase: 720 / 1.25 = 576
        { id: "B", text: "$576$" },
        { id: "C", text: "$640$" },
        // distractor: undoes only the 25% decrease: 720 / 0.75 = 960
        { id: "D", text: "$960$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Reverse-Percent Multi-Step**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** January's total $J$ satisfies $J(0.75)(1.5) = 720$, so $J = \\frac{720}{1.125} = 640$.\n\n**The Full Solution:**\nStep 1: A $25\\%$ decrease multiplies by $0.75$ and a $50\\%$ increase multiplies by $1.5$, so March $= J(0.75)(1.5) = 1.125J$.\nStep 2: Set this equal to the March total: $1.125J = 720$.\nStep 3: Divide: $J = \\frac{720}{1.125} = 640$. Check: $640(0.75) = 480$ in February, and $480(1.5) = 720$ in March ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($480$): undoes only the $50\\%$ increase, $\\frac{720}{1.5} = 480$, which is the February total.\n* Choice B ($576$): combines the changes into a single $25\\%$ increase, $\\frac{720}{1.25} = 576$; percent changes multiply, they do not add.\n* Choice D ($960$): undoes only the $25\\%$ decrease, $\\frac{720}{0.75} = 960$.\n\n**Test Day Takeaway:** Chain percent changes as multipliers, then divide the final value by the product to work backward; never add or subtract the percents.",
      skills: ["percent-of-value", "percent-word-problems"]
    },
    {
      id: 18,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "$\\frac{27^{2x}}{9^{x + 3}} = 3^{kx - 6}$\nThe given equation is true for all values of $x$, where $k$ is a constant. What is the value of $k$?",
      choices: [
        // distractor: divides the exponents, 6x / 2x = 3, instead of subtracting them
        { id: "A", text: "$3$" },
        { id: "B", text: "$4$" },
        // distractor: rewrites 9^(x+3) as 3^(x+3), forgetting 9 = 3^2, which leaves 3^(5x-3)
        { id: "C", text: "$5$" },
        // distractor: uses only the numerator's exponent, 6x, and ignores the denominator
        { id: "D", text: "$6$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Write both bases as powers of $3$: $\\frac{3^{6x}}{3^{2x + 6}} = 3^{4x - 6}$, so $k = 4$.\n\n**The Full Solution:**\nStep 1: Rewrite each base as a power of $3$: $27^{2x} = (3^{3})^{2x} = 3^{6x}$ and $9^{x + 3} = (3^{2})^{x + 3} = 3^{2x + 6}$.\nStep 2: Divide by subtracting exponents: $\\frac{3^{6x}}{3^{2x + 6}} = 3^{6x - (2x + 6)} = 3^{4x - 6}$.\nStep 3: Match $3^{4x - 6}$ with $3^{kx - 6}$: $k = 4$. Check with $x = 2$: $\\frac{27^{4}}{9^{5}} = \\frac{531{,}441}{59{,}049} = 9$, and $3^{4(2) - 6} = 3^{2} = 9$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): divides the exponents, $\\frac{6x}{2x} = 3$, instead of subtracting them.\n* Choice C ($5$): rewrites $9^{x + 3}$ as $3^{x + 3}$, forgetting that $9 = 3^{2}$, which leaves $3^{5x - 3}$.\n* Choice D ($6$): uses only the numerator's exponent, $6x$, and never accounts for the denominator.\n\n**Test Day Takeaway:** To compare exponential expressions, rewrite every base as a power of the same prime, then combine exponents: subtract for division, multiply for a power of a power.",
      skills: ["exponent-laws"]
    },
    {
      id: 19,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "In a random sample of $500$ residents of a city, $285$ said they have a primary care doctor. Based on the sample, the percentage of all residents of the city who have a primary care doctor is estimated with an associated margin of error of $m$ percentage points. If the greatest plausible value from this estimate is $61.4\\%$, what is the value of $m$?",
      correctAnswer: "4.4",
      explanation: "**SAT Pattern: Margin of Error**\n\n**The correct answer is 4.4.**\n\n**The Fast Way (~30s):** The sample percentage is $\\frac{285}{500} = 57\\%$, and the greatest plausible value is that percentage plus the margin of error, so $m = 61.4 - 57 = 4.4$.\n\n**The Full Solution:**\nStep 1: Find the sample percentage: $\\frac{285}{500} = 0.57$, or $57\\%$.\nStep 2: The plausible values run from $57\\%$ minus $m$ to $57\\%$ plus $m$, so the greatest plausible value is $57 + m$ percent.\nStep 3: Set $57 + m = 61.4$, so $m = 4.4$. Check: the plausible values are then $52.6\\%$ to $61.4\\%$, centered at $\\frac{52.6 + 61.4}{2} = 57\\%$ ✓\n\n**Common Mistakes:**\n* $2.2$: halves the gap of $4.4$, as if $57\\%$ to $61.4\\%$ were the full width of the range rather than its upper half.\n* $8.8$: doubles the gap, treating the distance from the center to one end as if it were half the margin.\n* $0.044$: writes the margin as a decimal, but the question asks for percentage points.\n\n**Test Day Takeaway:** A sample estimate with a margin of error gives plausible values centered on the sample percentage; the margin is the distance from the center to either end.",
      skills: ["margin-of-error"]
    },
    {
      id: 20,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "A data set consists of eight numbers. Seven of the numbers are $38$, $41$, $44$, $45$, $49$, $52$, and $55$. If the median of the data set is $46$, what is the eighth number?",
      choices: [
        // distractor: pairs the median with 49 instead of 45: 2(46) - 49 = 43
        { id: "A", text: "$43$" },
        // distractor: reports the median of the seven listed numbers, 45
        { id: "B", text: "$45$" },
        // distractor: assumes the eighth number equals the median, 46
        { id: "C", text: "$46$" },
        { id: "D", text: "$47$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Median Calculation**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** With eight numbers, the median is the mean of the 4th and 5th values. A median of $46$ falls between $45$ and $49$, so the middle pair is $45$ and the eighth number $x$: $\\frac{45 + x}{2} = 46$, so $x = 47$.\n\n**The Full Solution:**\nStep 1: For eight numbers in order, the median is the average of the 4th and 5th values.\nStep 2: The median $46$ lies between $45$ and $49$, so the eighth number $x$ must also lie between them, making the ordered list $38, 41, 44, 45, x, 49, 52, 55$.\nStep 3: Then $\\frac{45 + x}{2} = 46$, so $45 + x = 92$ and $x = 47$. Check: the ordered list $38, 41, 44, 45, 47, 49, 52, 55$ has middle values $45$ and $47$, whose mean is $46$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($43$): pairs the median with $49$ instead of $45$, solving $\\frac{49 + x}{2} = 46$. But $43$ would become the 3rd value and the median would be $\\frac{44 + 45}{2} = 44.5$.\n* Choice B ($45$): reports the median of the seven listed numbers.\n* Choice C ($46$): assumes the eighth number equals the median; then the middle values are $45$ and $46$, and the median is $45.5$.\n\n**Test Day Takeaway:** With an even number of values, the median is the mean of the two middle values; place the unknown in order first, then solve, and check by re-sorting.",
      skills: ["find-median"]
    },
    {
      id: 21,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "The graph of one equation in a system of two linear equations is shown. The other equation in the system is $12x + 8y = c$, where $c$ is a constant. If the system has infinitely many solutions, what is the value of $c$?",
      diagram: { type: "linearGraph", params: { slope: -1.5, yIntercept: 6, xRange: [-2, 6], yRange: [-4, 10], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, label: "ℓ" } },
      choices: [
        // distractor: copies the constant 12 from 3x + 2y = 12 without scaling it
        { id: "A", text: "$12$" },
        // distractor: adds the scale factor 4 to 12 instead of multiplying: 12 + 4 = 16
        { id: "B", text: "$16$" },
        { id: "C", text: "$48$" },
        // distractor: compares the x-coefficient 12 with the graphed line's y-coefficient 2 to get a factor of 6, then computes 6 x 12 = 72
        { id: "D", text: "$72$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Same Line (Infinitely Many Solutions)**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** The graphed line has equation $3x + 2y = 12$. Multiplying every term by $4$ gives $12x + 8y = 48$, so $c = 48$.\n\n**The Full Solution:**\nStep 1: Read the graph: the line crosses the $y$-axis at $(0, 6)$ and the $x$-axis at $(4, 0)$, so its slope is $\\frac{0 - 6}{4 - 0} = -\\frac{3}{2}$ and its equation is $y = -\\frac{3}{2}x + 6$, or $3x + 2y = 12$.\nStep 2: A system of two linear equations has infinitely many solutions only when the equations describe the same line, so $12x + 8y = c$ must be a multiple of $3x + 2y = 12$. Since $12 = 4 \\times 3$ and $8 = 4 \\times 2$, the multiple is $4$.\nStep 3: Then $c = 4 \\times 12 = 48$. Check: the point $(4, 0)$ on the graph gives $12(4) + 8(0) = 48$, and $(0, 6)$ gives $12(0) + 8(6) = 48$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): copies the constant from $3x + 2y = 12$ without multiplying it by $4$.\n* Choice B ($16$): adds the factor $4$ to $12$ instead of multiplying.\n* Choice D ($72$): compares the $x$-coefficient $12$ with the $y$-coefficient $2$ to get a factor of $6$, then computes $6 \\times 12 = 72$.\n\n**Test Day Takeaway:** Infinitely many solutions means one equation is a constant multiple of the other: find the factor from the coefficients and apply it to the constant too.",
      skills: ["system-solution-types", "infinite-solutions-condition"]
    },
    {
      id: 22,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "Of the $400$ people tested at a clinic, $60\\%$ were adults. Of the adults, $20\\%$ tested positive, and of the people who were not adults, $15\\%$ tested positive. One of the people who tested positive will be selected at random. What is the probability of selecting an adult? (Express your answer as a decimal or fraction, not as a percent.)",
      correctAnswer: "2/3",
      explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**The correct answer is 2/3.** Equivalent answers such as .6666 and .6667 are also correct.\n\n**The Fast Way (~40s):** There are $0.20(240) = 48$ adults and $0.15(160) = 24$ others who tested positive, so the probability is $\\frac{48}{48 + 24} = \\frac{2}{3}$.\n\n**The Full Solution:**\nStep 1: Split the group: $0.60(400) = 240$ adults and $400 - 240 = 160$ people who were not adults.\nStep 2: Count the positive results: $0.20(240) = 48$ adults and $0.15(160) = 24$ others, for a total of $72$.\nStep 3: The selection is made only from the $72$ people who tested positive, so the probability is $\\frac{48}{72} = \\frac{2}{3}$. Check: $\\frac{24}{72} = \\frac{1}{3}$ for the others, and $\\frac{2}{3} + \\frac{1}{3} = 1$ ✓\n\n**Common Mistakes:**\n* $\\frac{3}{25}$: divides the $48$ adults who tested positive by all $400$ people, $\\frac{48}{400}$, instead of by the $72$ who tested positive.\n* $\\frac{3}{5}$: gives the share of adults among everyone tested, which ignores the different positive rates.\n* $\\frac{4}{7}$: compares the percents directly, $\\frac{20}{20 + 15}$, as if the two groups were the same size.\n\n**Test Day Takeaway:** For \"given that\" questions, restrict to the group named in the condition first, then count how many of that group have the property asked about.",
      skills: ["conditional-probability"]
    }
  ]
};

export default practiceTest9M2Easy;
