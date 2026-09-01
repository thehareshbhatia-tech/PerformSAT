// Practice Test 6 — Math Module 2 Easy variant (22 questions)
// For students routed to easier path after Module 1 (~<60% correct).
// Official-calibration recreation (2026-09-01): every item re-authored per
// docs/TEST_RECREATION_SPEC.md with slot metadata (id/type/difficulty/band/
// skills/pattern) frozen. Distribution: 3E / 13M / 6H. Q1-3 easy openers.
// Max-score ceiling: ~650. Figure density lifted: 5 diagram items
// (Q2 rightTriangle, Q7 dotPlot, Q15 rightTriangle, Q21 scatterplot,
// Q22 twoWayTable). Numeric MC choices sorted ascending.

export const practiceTest6M2Easy = {
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
      question: "If $4x + 9 = 33$, what is the value of $x$?",
      choices: [
        { id: "A", text: "$6$" },
        // distractor: divides 33 by 4 without first subtracting the 9
        { id: "B", text: "$8.25$" },
        // distractor: adds 9 instead of subtracting, computing 42/4
        { id: "C", text: "$10.5$" },
        // distractor: subtracts to get 4x = 24 but never divides
        { id: "D", text: "$24$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Undo the $+9$, then the $\\times 4$: $4x = 24 \\Rightarrow x = 6$.\n\n**The Full Solution:**\nStep 1: Subtract $9$ from both sides: $4x = 33 - 9 = 24$.\nStep 2: Divide both sides by $4$: $x = \\frac{24}{4} = 6$.\nStep 3: Check: $4(6) + 9 = 24 + 9 = 33$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($8.25$): divides $33$ by $4$ without first subtracting the $9$.\n* Choice C ($10.5$): adds $9$ instead of subtracting, then divides $42$ by $4$.\n* Choice D ($24$): reaches $4x = 24$ but forgets the final division.\n\n**Test Day Takeaway:** Solve two-step equations by undoing in reverse order: clear the added constant first, then divide off the coefficient.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 2,
      type: "fill-in",
      difficulty: "easy",
      band: 2,
      question: "The legs of the right triangle shown measure $14$ centimeters and $6$ centimeters. What is the area of the triangle, in square centimeters?",
      diagram: {
        type: "rightTriangle",
        params: {
          sideLabels: ["14", "6", ""],
          rightAngleVertex: 1
        }
      },
      correctAnswer: "42",
      explanation: "**SAT Pattern: Triangle Area**\n\n**The correct answer is $42$.**\n\n**The Fast Way (~5s):** The legs are the base and height: Area $= \\frac{1}{2}(14)(6) = 42$.\n\n**The Full Solution:**\nStep 1: In a right triangle the two legs are perpendicular, so they serve as base and height in Area $= \\frac{1}{2}bh$.\nStep 2: Substitute $b = 14$ and $h = 6$: Area $= \\frac{1}{2}(14)(6) = \\frac{84}{2} = 42$ square centimeters.\n\n**Common Mistakes:** Skipping the $\\frac{1}{2}$ and reporting $14 \\cdot 6 = 84$; adding the legs to get $20$, which is heading toward perimeter, not area.\n\n**Test Day Takeaway:** Triangle area $= \\frac{1}{2} \\cdot \\text{base} \\cdot \\text{height}$ — in a right triangle the legs already are the base and height.",
      skills: ["area", "geometry"]
    },
    {
      id: 3,
      type: "multiple-choice",
      difficulty: "easy",
      band: 3,
      question: "The function $p$ multiplies its input by $6$ and then adds $5$ to the result. What is the value of $p(4)$?",
      choices: [
        // distractor: subtracts 5 instead of adding
        { id: "A", text: "$19$" },
        // distractor: stops one step early — multiplies by 6 but never adds 5
        { id: "B", text: "$24$" },
        { id: "C", text: "$29$" },
        // distractor: applies the steps in reverse order — adds 5 first, then multiplies
        { id: "D", text: "$54$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Follow the rule in order: $4 \\cdot 6 = 24$, then $24 + 5 = 29$.\n\n**The Full Solution:**\nStep 1: The verbal rule translates to $p(x) = 6x + 5$.\nStep 2: Substitute the input: $p(4) = 6(4) + 5$.\nStep 3: Multiply first, then add: $24 + 5 = 29$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($19$): subtracts the $5$ instead of adding it: $24 - 5$.\n* Choice B ($24$): multiplies by $6$ but never adds the $5$.\n* Choice D ($54$): reverses the steps, computing $(4 + 5) \\cdot 6$.\n\n**Test Day Takeaway:** Apply a verbal function rule in the order the words give it — translating to $p(x) = 6x + 5$ keeps the order straight.",
      skills: ["function-evaluation", "function-notation"]
    },
    {
      id: 4,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "A soap maker uses $4$ ounces of olive oil for every $3$ bars of soap produced. How many ounces of olive oil are needed to produce $27$ bars of soap?",
      choices: [
        // distractor: flips the ratio, computing 3/4 of 27
        { id: "A", text: "$20.25$" },
        // distractor: copies the bar count straight across
        { id: "B", text: "$27$" },
        // distractor: adds the 4 ounces once instead of scaling
        { id: "C", text: "$31$" },
        { id: "D", text: "$36$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Proportion / Ratio**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** $27$ bars is $9$ times the $3$-bar batch, so the oil is $9 \\times 4 = 36$ ounces.\n\n**The Full Solution:**\nStep 1: Set up the proportion with matched categories: $\\frac{\\text{oil}}{\\text{bars}} = \\frac{4}{3} = \\frac{x}{27}$.\nStep 2: Cross-multiply: $3x = 4 \\cdot 27 = 108$.\nStep 3: Divide by $3$: $x = 36$ ounces.\n\n**Why the wrong answers are tempting:**\n* Choice A ($20.25$): flips the ratio to $\\frac{3}{4} = \\frac{x}{27}$, scaling the wrong way.\n* Choice B ($27$): copies the number of bars as the ounces of oil.\n* Choice C ($31$): adds the $4$ ounces once ($27 + 4$) instead of scaling proportionally.\n\n**Test Day Takeaway:** Keep the same category on top of both fractions, then cross-multiply — proportions scale multiplicatively, never by adding.",
      skills: ["ratios", "proportions"]
    },
    {
      id: 5,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "What is the $y$-intercept of the line whose equation is $y = 4x - 7$?",
      choices: [
        { id: "A", text: "$-7$" },
        // distractor: gives the x-intercept, where y = 0
        { id: "B", text: "$\\dfrac{7}{4}$" },
        // distractor: reports the slope instead of the intercept
        { id: "C", text: "$4$" },
        // distractor: drops the negative sign on the constant
        { id: "D", text: "$7$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Reading Slope-Intercept Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** In $y = mx + b$, the $y$-intercept is the constant $b$: here $b = -7$.\n\n**The Full Solution:**\nStep 1: The equation $y = 4x - 7$ is already in slope-intercept form $y = mx + b$.\nStep 2: Match terms: slope $m = 4$, intercept $b = -7$.\nStep 3: Confirm at $x = 0$: $y = 4(0) - 7 = -7$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{7}{4}$): solves $4x - 7 = 0$ — that is the $x$-intercept.\n* Choice C ($4$): reports the slope rather than the intercept.\n* Choice D ($7$): drops the negative sign from $-7$.\n\n**Test Day Takeaway:** In $y = mx + b$, the intercept is $b$ WITH its sign — it is the $y$-value when $x = 0$.",
      skills: ["slope-intercept-form", "linear-functions"]
    },
    {
      id: 6,
      type: "fill-in",
      difficulty: "medium",
      band: 4,
      question: "A rectangular serving tray is $16$ inches long and $9$ inches wide. What is the perimeter of the tray, in inches?",
      correctAnswer: "50",
      explanation: "**SAT Pattern: Perimeter of a Rectangle**\n\n**The correct answer is $50$.**\n\n**The Fast Way (~5s):** Perimeter $= 2(\\ell + w) = 2(16 + 9) = 50$ inches.\n\n**The Full Solution:**\nStep 1: A rectangle's perimeter adds two lengths and two widths: $P = 2\\ell + 2w$.\nStep 2: Substitute: $P = 2(16) + 2(9) = 32 + 18 = 50$ inches.\n\n**Common Mistakes:** Multiplying the dimensions ($16 \\cdot 9 = 144$) — that is the area; adding only one of each side ($16 + 9 = 25$) and forgetting to double.\n\n**Test Day Takeaway:** Perimeter $= 2\\ell + 2w$ walks all four sides; area $= \\ell w$ fills the inside. Match the formula to what is asked.",
      skills: ["perimeter", "geometry"]
    },
    {
      id: 7,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The dot plot shows the number of eggs collected from a henhouse on each of $11$ mornings. What is the median number of eggs collected?",
      diagram: { type: "dotPlot", params: {
        data: [
          { value: 3, count: 1 },
          { value: 4, count: 3 },
          { value: 5, count: 2 },
          { value: 6, count: 4 },
          { value: 7, count: 1 }
        ],
        xMin: 2, xMax: 8,
        xLabel: "Eggs collected"
      } },
      choices: [
        // distractor: reads the top of the 4-stack (positions 2-4) as the middle of the data
        { id: "A", text: "$4$" },
        { id: "B", text: "$5$" },
        // distractor: reports the mode (the tallest stack of dots)
        { id: "C", text: "$6$" },
        // distractor: reports the maximum value
        { id: "D", text: "$7$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Median of an Ordered List**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** With $11$ values, the median is the $6$th in order. Counting dots left to right: $1 + 3 = 4$ values through $4$, then two $5$s cover positions $5$ and $6$ — the median is $5$.\n\n**The Full Solution:**\nStep 1: The dot plot lists $11$ values, so the median sits at position $\\frac{11 + 1}{2} = 6$.\nStep 2: Accumulate counts in order: value $3$ covers position $1$; value $4$ covers positions $2$-$4$; value $5$ covers positions $5$-$6$.\nStep 3: Position $6$ lands on the value $5$, so the median is $5$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): reads the top of the $4$-stack (positions $2$-$4$ in order) as the middle — but the true middle positions land on the $5$s.\n* Choice C ($6$): picks the tallest stack — that is the MODE, not the median.\n* Choice D ($7$): grabs the largest value on the plot.\n\n**Test Day Takeaway:** On a dot plot, find the median by counting dots in order to the middle position — the tallest column is the mode, a different statistic.",
      skills: ["median", "statistics"]
    },
    {
      id: 8,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "What are the solutions to $x^2 - 3x - 40 = 0$?",
      choices: [
        // distractor: flips the sign on both roots
        { id: "A", text: "$x = -8 \\text{ or } x = 5$" },
        { id: "B", text: "$x = -5 \\text{ or } x = 8$" },
        // distractor: uses a factor pair of 40 with the wrong sum
        { id: "C", text: "$x = -4 \\text{ or } x = 10$" },
        // distractor: keeps only the positive root
        { id: "D", text: "$x = 8$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Find two numbers with product $-40$ and sum $-3$: $-8$ and $5$. So $(x - 8)(x + 5) = 0$, giving $x = 8$ or $x = -5$.\n\n**The Full Solution:**\nStep 1: For $x^2 + bx + c$, seek two numbers whose product is $c = -40$ and whose sum is $b = -3$. Those are $-8$ and $5$.\nStep 2: Factor: $x^2 - 3x - 40 = (x - 8)(x + 5) = 0$.\nStep 3: Set each factor to zero: $x = 8$ or $x = -5$.\nStep 4: Check: $8^2 - 3(8) - 40 = 0$ and $(-5)^2 - 3(-5) - 40 = 25 + 15 - 40 = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x = -8$ or $x = 5$): flips the sign on both roots — those come from $(x + 8)(x - 5)$, which expands to $x^2 + 3x - 40$.\n* Choice C ($x = -4$ or $x = 10$): uses the pair $10$ and $-4$, whose product is $-40$ but whose sum is $6$, not $-3$.\n* Choice D ($x = 8$): finds one root and drops $x = -5$.\n\n**Test Day Takeaway:** With a negative constant, the factors take opposite signs, and the number with the larger absolute value carries the sign of the middle term.",
      skills: ["finding-roots-factoring", "quadratic-equations"]
    },
    {
      id: 9,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A board game originally costs $\\$50$. It is on sale for $\\$38$. By what percent has the price decreased?",
      correctAnswer: "24",
      explanation: "**SAT Pattern: Percent Decrease**\n\n**The correct answer is $24$.**\n\n**The Fast Way (~10s):** The price dropped $\\$50 - \\$38 = \\$12$, and $\\frac{12}{50} = 24\\%$.\n\n**The Full Solution:**\nStep 1: Percent decrease $= \\frac{\\text{old} - \\text{new}}{\\text{old}} \\times 100\\%$.\nStep 2: Substitute old $= 50$, new $= 38$: $\\frac{50 - 38}{50} \\times 100\\% = \\frac{12}{50} \\times 100\\%$.\nStep 3: $\\frac{12}{50} = 0.24$, so the price decreased $24\\%$.\n\n**Common Mistakes:** Dividing by the sale price, $\\frac{12}{38} \\approx 31.6\\%$; reporting the $\\$12$ drop itself; computing $\\frac{38}{50} = 76\\%$, which is what the price IS of the original, not the decrease.\n\n**Test Day Takeaway:** Percent change always divides the change by the ORIGINAL value.",
      skills: ["percent-change", "percents"]
    },
    {
      id: 10,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "Line $\\ell$ passes through the points $(-4, 3)$ and $(2, -9)$. What is the slope of line $\\ell$?",
      choices: [
        { id: "A", text: "$-2$" },
        // distractor: inverts the formula, putting the x-change over the y-change
        { id: "B", text: "$-\\dfrac{1}{2}$" },
        // distractor: drops the negative sign
        { id: "C", text: "$2$" },
        // distractor: mishandles the subtraction of -4, using a denominator of -2
        { id: "D", text: "$6$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Slope from Two Points (with Negatives)**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $m = \\frac{-9 - 3}{2 - (-4)} = \\frac{-12}{6} = -2$.\n\n**The Full Solution:**\nStep 1: Use $m = \\frac{y_2 - y_1}{x_2 - x_1}$ with $(x_1, y_1) = (-4, 3)$ and $(x_2, y_2) = (2, -9)$.\nStep 2: Numerator: $-9 - 3 = -12$.\nStep 3: Denominator: $2 - (-4) = 2 + 4 = 6$.\nStep 4: $m = \\frac{-12}{6} = -2$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-\\frac{1}{2}$): inverts the formula, computing $\\frac{\\Delta x}{\\Delta y}$.\n* Choice C ($2$): drops the negative sign on the slope.\n* Choice D ($6$): botches $2 - (-4)$ as $2 - 4 = -2$, then $\\frac{-12}{-2} = 6$.\n\n**Test Day Takeaway:** Subtracting a negative adds: $2 - (-4) = 6$. Keep the $y$'s on top and subtract both coordinates in the same order.",
      skills: ["slope-from-points", "slope"]
    },
    {
      id: 11,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A box holds $20$ raffle tickets numbered $1$ through $20$. If one ticket is drawn at random, what is the probability that its number is a multiple of $4$?",
      choices: [
        // distractor: counts only a single favorable ticket
        { id: "A", text: "$\\dfrac{1}{20}$" },
        // distractor: counts the multiples of 5 instead of 4
        { id: "B", text: "$\\dfrac{1}{5}$" },
        { id: "C", text: "$\\dfrac{1}{4}$" },
        // distractor: counts all even numbers as multiples of 4
        { id: "D", text: "$\\dfrac{1}{2}$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Basic Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Multiples of $4$ from $1$ to $20$: $4, 8, 12, 16, 20$ — that is $5$ tickets out of $20$, so $P = \\frac{5}{20} = \\frac{1}{4}$.\n\n**The Full Solution:**\nStep 1: Probability $= \\frac{\\text{favorable outcomes}}{\\text{total outcomes}}$ for equally likely draws.\nStep 2: Favorable outcomes: $\\{4, 8, 12, 16, 20\\}$, which is $5$ tickets.\nStep 3: $P = \\frac{5}{20} = \\frac{1}{4}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{20}$): counts only one favorable ticket instead of all five.\n* Choice B ($\\frac{1}{5}$): counts $4$ favorable outcomes — the multiples of $5$ — instead of the multiples of $4$.\n* Choice D ($\\frac{1}{2}$): counts every even number, but $2, 6, 10, 14, 18$ are not multiples of $4$.\n\n**Test Day Takeaway:** List the favorable outcomes explicitly before dividing — \"multiple of $4$\" is stricter than \"even.\"",
      skills: ["probability-basics", "statistics"]
    },
    {
      id: 12,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A cylinder has a radius of $4$ inches and a height of $9$ inches. The volume of the cylinder, in cubic inches, can be written as $k\\pi$. What is the value of $k$?",
      correctAnswer: "144",
      explanation: "**SAT Pattern: Volume of a Cylinder**\n\n**The correct answer is $144$.**\n\n**The Fast Way (~10s):** $V = \\pi r^2 h = \\pi (4)^2 (9) = 144\\pi$, so $k = 144$.\n\n**The Full Solution:**\nStep 1: Cylinder volume is $V = \\pi r^2 h$.\nStep 2: Substitute $r = 4$ and $h = 9$: $V = \\pi \\cdot 16 \\cdot 9 = 144\\pi$.\nStep 3: Matching $V = k\\pi$ gives $k = 144$.\n\n**Common Mistakes:** Forgetting to square the radius, computing $\\pi \\cdot 4 \\cdot 9 = 36\\pi$; squaring the height instead of the radius; using a diameter in place of the radius.\n\n**Test Day Takeaway:** In $\\pi r^2 h$, only the radius is squared — square it before multiplying by the height.",
      skills: ["volume-cylinder", "volume"]
    },
    {
      id: 13,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "What is the solution $(x, y)$ to the system $y = 3x + 2$ and $y = 5x - 6$?",
      choices: [
        // distractor: reads off the first line's y-intercept instead of solving
        { id: "A", text: "$(0, 2)$" },
        // distractor: a near-miss that satisfies the first equation only
        { id: "B", text: "$(3, 11)$" },
        { id: "C", text: "$(4, 14)$" },
        // distractor: swaps the coordinates of the solution
        { id: "D", text: "$(14, 4)$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Both equations equal $y$, so set them equal: $3x + 2 = 5x - 6 \\Rightarrow 8 = 2x \\Rightarrow x = 4$. Then $y = 3(4) + 2 = 14$, giving $(4, 14)$.\n\n**The Full Solution:**\nStep 1: Since $y = 3x + 2$ and $y = 5x - 6$, the right-hand sides are equal: $3x + 2 = 5x - 6$.\nStep 2: Add $6$ and subtract $3x$: $8 = 2x$, so $x = 4$.\nStep 3: Back-substitute: $y = 3(4) + 2 = 14$. Check the other line: $5(4) - 6 = 14$. $\\checkmark$ The solution is $(4, 14)$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(0, 2)$): reads the first line's $y$-intercept instead of finding the intersection.\n* Choice B ($(3, 11)$): satisfies $y = 3x + 2$ but fails $y = 5x - 6$ ($5 \\cdot 3 - 6 = 9 \\neq 11$).\n* Choice D ($(14, 4)$): the right numbers in the wrong order — $x = 4$, not $14$.\n\n**Test Day Takeaway:** When both equations give $y$, set the right sides equal, solve for $x$, back-substitute for $y$, and report the pair in $(x, y)$ order.",
      skills: ["substitution-method", "systems-of-equations"]
    },
    {
      id: 14,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "Amara deposits $\\$700$ into an account that earns $6\\%$ simple interest per year. Which expression gives the total value of the account, in dollars, after $t$ years?",
      choices: [
        // distractor: gives only the interest earned, leaving out the principal
        { id: "A", text: "$700 \\cdot 0.06t$" },
        { id: "B", text: "$700(1 + 0.06t)$" },
        // distractor: uses the compound-interest formula instead of simple interest
        { id: "C", text: "$700(1.06)^{t}$" },
        // distractor: uses 6 instead of the decimal 0.06
        { id: "D", text: "$700 + 6t$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Simple Interest Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Simple interest is linear: $A = P(1 + rt)$. With $P = 700$ and $r = 0.06$, that is $700(1 + 0.06t)$.\n\n**The Full Solution:**\nStep 1: Simple interest pays $Prt$ on top of the principal, so the total is $A = P + Prt = P(1 + rt)$.\nStep 2: Substitute $P = 700$ and $r = 0.06$: $A = 700(1 + 0.06t)$.\nStep 3: Sanity check: at $t = 0$, $A = 700$; at $t = 1$, $A = 700(1.06) = 742$ — exactly $\\$42$ of interest, which is $6\\%$ of $\\$700$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($700 \\cdot 0.06t$): computes only the interest, dropping the original $\\$700$.\n* Choice C ($700(1.06)^{t}$): compounds the interest — but simple interest never earns interest on interest.\n* Choice D ($700 + 6t$): uses $6$ instead of converting $6\\%$ to $0.06$, adding only $\\$6$ per year.\n\n**Test Day Takeaway:** Simple interest is linear, $P(1 + rt)$; compound interest is exponential, $P(1 + r)^t$. Convert the percent to a decimal either way.",
      skills: ["simple-interest", "linear-functions"]
    },
    {
      id: 15,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A $13$-foot ladder leans against a vertical wall, as shown. The top of the ladder rests $12$ feet up the wall, and the base of the ladder sits $5$ feet from the wall on level ground. What is the tangent of the angle the ladder makes with the ground?",
      diagram: {
        type: "rightTriangle",
        params: {
          sideLabels: ["5", "12", "13"],
          rightAngleVertex: 1
        }
      },
      choices: [
        // distractor: computes the cosine, adjacent over hypotenuse
        { id: "A", text: "$\\dfrac{5}{13}$" },
        // distractor: inverts the tangent ratio — adjacent over opposite
        { id: "B", text: "$\\dfrac{5}{12}$" },
        // distractor: computes the sine, opposite over hypotenuse
        { id: "C", text: "$\\dfrac{12}{13}$" },
        { id: "D", text: "$\\dfrac{12}{5}$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Tangent Ratio from a Real-World Right Triangle**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** At the base of the ladder, the opposite side is the wall height ($12$) and the adjacent side is the ground distance ($5$): $\\tan = \\dfrac{12}{5}$.\n\n**The Full Solution:**\nStep 1: The wall, the ground, and the ladder form a right triangle with the right angle where the wall meets the ground.\nStep 2: The angle in question sits at the ladder's base. Relative to it, the opposite side is the wall segment ($12$ ft) and the adjacent side is the ground segment ($5$ ft).\nStep 3: $\\tan(\\text{angle}) = \\dfrac{\\text{opposite}}{\\text{adjacent}} = \\dfrac{12}{5}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\dfrac{5}{13}$): computes the cosine, adjacent over the $13$-foot hypotenuse.\n* Choice B ($\\dfrac{5}{12}$): flips the tangent, putting adjacent over opposite.\n* Choice C ($\\dfrac{12}{13}$): computes the sine, opposite over hypotenuse.\n\n**Test Day Takeaway:** Tangent never touches the hypotenuse — label opposite and adjacent from the angle you are standing at, then divide opposite by adjacent.",
      skills: ["soh-cah-toa", "right-triangles"]
    },
    {
      id: 16,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A snowplow clears $63$ kilometers of road in $1$ hour and $45$ minutes. What is the snowplow's average speed, in kilometers per hour?",
      correctAnswer: "36",
      explanation: "**SAT Pattern: Average Rate**\n\n**The correct answer is $36$.**\n\n**The Fast Way (~10s):** $1$ hr $45$ min $= 1.75$ hr, so speed $= \\dfrac{63}{1.75} = 36$ kilometers per hour.\n\n**The Full Solution:**\nStep 1: Average speed $= \\dfrac{\\text{total distance}}{\\text{total time}}$.\nStep 2: Convert the time to one unit: $45$ min $= \\dfrac{45}{60} = 0.75$ hr, so the total time is $1.75$ hours.\nStep 3: Divide: $\\dfrac{63}{1.75} = 36$ kilometers per hour.\n\n**Common Mistakes:** Writing the time as $1.45$ hours and getting $\\dfrac{63}{1.45} \\approx 43.4$; ignoring the $45$ minutes for $\\dfrac{63}{1} = 63$; multiplying instead of dividing.\n\n**Test Day Takeaway:** Convert mixed time to a single unit first — $45$ minutes is $0.75$ hour, never $0.45$ — then divide distance by time.",
      skills: ["unit-conversion", "rate-conversion"]
    },
    {
      id: 17,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "If $3(2x + 4) - 2x = 4x + 5$, how many solutions does the equation have?",
      choices: [
        { id: "A", text: "$0$" },
        // distractor: assumes every linear equation has exactly one solution
        { id: "B", text: "$1$" },
        // distractor: a quadratic-style answer for a linear equation
        { id: "C", text: "$2$" },
        // distractor: confuses a contradiction with an identity
        { id: "D", text: "Infinitely many" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Identifying Contradiction Equations**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Distribute: $6x + 12 - 2x = 4x + 5 \\Rightarrow 4x + 12 = 4x + 5$. Subtract $4x$: $12 = 5$, which is never true — $0$ solutions.\n\n**The Full Solution:**\nStep 1: Expand the left side: $3(2x + 4) - 2x = 6x + 12 - 2x = 4x + 12$.\nStep 2: The equation is now $4x + 12 = 4x + 5$.\nStep 3: Subtracting $4x$ from both sides leaves $12 = 5$, a false statement — no value of $x$ can fix it, so the equation has $0$ solutions.\n\n**Why the wrong answers are tempting:**\n* Choice B ($1$): a linear equation has exactly one solution only when the $x$-coefficients end up different — here they match.\n* Choice C ($2$): two solutions belong to quadratics; this equation is linear.\n* Choice D (Infinitely many): that requires the two sides to be IDENTICAL after simplifying (e.g. $12 = 12$); here the constants disagree.\n\n**Test Day Takeaway:** Simplify fully: equal $x$-coefficients with different constants means $0$ solutions; identical sides means infinitely many; different coefficients means exactly one.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 18,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "The circle with equation $x^2 + y^2 = 121$ is graphed in the $xy$-plane. What is the radius of the circle?",
      correctAnswer: "11",
      explanation: "**SAT Pattern: Standard Form Circle Centered at Origin**\n\n**The correct answer is $11$.**\n\n**The Fast Way (~5s):** A circle centered at the origin is $x^2 + y^2 = r^2$, so $r^2 = 121 \\Rightarrow r = 11$.\n\n**The Full Solution:**\nStep 1: The equation $x^2 + y^2 = r^2$ describes a circle centered at the origin with radius $r$.\nStep 2: Match the constant: $r^2 = 121$.\nStep 3: Take the square root: $r = \\sqrt{121} = 11$.\n\n**Common Mistakes:** Reporting $121$ (that is $r^2$); reporting $22$ (the diameter); halving $121$ instead of taking the square root.\n\n**Test Day Takeaway:** The constant in $x^2 + y^2 = r^2$ is the radius SQUARED — finish with a square root.",
      skills: ["circle-equation", "circles"]
    },
    {
      id: 19,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "If $f(x) = 3x^2 + 2x - 4$, what is the value of $f(-3)$?",
      choices: [
        // distractor: treats (-3)^2 as -9, breaking the squaring rule
        { id: "A", text: "$-37$" },
        { id: "B", text: "$17$" },
        // distractor: drops the constant, stopping at 27 - 6
        { id: "C", text: "$21$" },
        // distractor: sign error on the middle term, computing 27 + 6 - 4
        { id: "D", text: "$29$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $f(-3) = 3(-3)^2 + 2(-3) - 4 = 3(9) - 6 - 4 = 27 - 6 - 4 = 17$.\n\n**The Full Solution:**\nStep 1: Substitute $x = -3$ with parentheses: $f(-3) = 3(-3)^2 + 2(-3) - 4$.\nStep 2: Square first: $(-3)^2 = 9$, so the first term is $27$. The middle term is $2(-3) = -6$.\nStep 3: Combine: $27 - 6 - 4 = 17$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-37$): treats $(-3)^2$ as $-9$, computing $-27 - 6 - 4$.\n* Choice C ($21$): computes $27 - 6$ and forgets the constant $-4$.\n* Choice D ($29$): flips the middle term's sign, computing $27 + 6 - 4$.\n\n**Test Day Takeaway:** Wrap negative inputs in parentheses — a squared negative is positive, and each term keeps its own sign.",
      skills: ["function-evaluation", "function-notation"]
    },
    {
      id: 20,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "Line $k$ is parallel to the line with equation $y = 2x + 6$ and passes through the point $(3, 1)$. What is the $y$-intercept of line $k$?",
      choices: [
        { id: "A", text: "$(0, -5)$" },
        // distractor: reuses the y-coordinate of the given point
        { id: "B", text: "$(0, 1)$" },
        // distractor: keeps the original line's intercept
        { id: "C", text: "$(0, 6)$" },
        // distractor: adds 2(3) instead of subtracting
        { id: "D", text: "$(0, 7)$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Intercept of a Parallel Line**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Parallel means slope $2$. From $(3, 1)$, step back to $x = 0$: $y$ drops by $2 \\cdot 3 = 6$, landing at $1 - 6 = -5$. Intercept: $(0, -5)$.\n\n**The Full Solution:**\nStep 1: Parallel lines share slopes, so line $k$ is $y = 2x + b$ for some $b$.\nStep 2: Substitute the known point $(3, 1)$: $1 = 2(3) + b = 6 + b$.\nStep 3: Solve: $b = 1 - 6 = -5$, so the $y$-intercept is $(0, -5)$.\nStep 4: Check: $y = 2(3) - 5 = 1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($(0, 1)$): reuses the point's $y$-coordinate as if the point sat on the $y$-axis.\n* Choice C ($(0, 6)$): keeps the ORIGINAL line's intercept — line $k$ is a different line.\n* Choice D ($(0, 7)$): adds $2(3)$ instead of subtracting, computing $1 + 6$.\n\n**Test Day Takeaway:** Parallel copies the slope, never the intercept — plug the given point into $y = mx + b$ and solve for $b$.",
      skills: ["parallel-line-slope", "writing-parallel-equation"]
    },
    {
      id: 21,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "The scatterplot shows the number of guided tours $x$ a cavern park ran each day and the total number of visitors $y$ that day, for $8$ days. The line of best fit is $\\hat{y} = 12x + 15$. According to the model, how many additional visitors are predicted for each additional guided tour?",
      diagram: { type: "scatterplot", params: {
        points: [[1,28],[2,38],[3,52],[4,62],[5,78],[6,86],[7,100],[8,110]],
        xMin: 0, xMax: 10, yMin: 0, yMax: 120,
        xGridStep: 1, yGridStep: 10, xLabelStep: 2, yLabelStep: 20,
        xLabel: "Guided tours run", yLabel: "Visitors",
        bestFitLine: { slope: 12, intercept: 15 },
      } },
      correctAnswer: "12",
      explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~5s):** In $\\hat{y} = 12x + 15$, the slope $12$ is the predicted change in visitors per one additional tour.\n\n**The Full Solution:**\nStep 1: For a linear model $\\hat{y} = mx + b$, the slope $m$ is the predicted change in $y$ for each one-unit increase in $x$, and $b$ is the predicted $y$ at $x = 0$.\nStep 2: The question asks for additional visitors per additional tour — exactly the slope.\nStep 3: The slope is $12$, so each added tour predicts $12$ more visitors.\n\n**Common Mistakes:** Reporting $15$ (the intercept — predicted visitors with zero tours); reporting $27$ (the prediction at $x = 1$, $12 + 15$); reading a change between two specific data points instead of using the model.\n\n**Test Day Takeaway:** \"Additional $y$ per additional $x$\" is always the slope of the model; the intercept is the baseline at $x = 0$.",
      skills: ["linear-functions", "slope"]
    },
    {
      id: 22,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "The two-way table summarizes the $150$ campers at a summer camp by session and by chosen activity. Given that a randomly selected camper chose archery, what is the probability that the camper attends Session 2?",
      diagram: {
        type: "twoWayTable",
        params: {
          headers: ["", "Canoeing", "Archery", "Total"],
          rows: [
            ["Session 1", "40", "25", "65"],
            ["Session 2", "35", "50", "85"],
            ["Total", "75", "75", "150"]
          ]
        }
      },
      choices: [
        // distractor: divides the Session 2 archery count by the grand total
        { id: "A", text: "$\\dfrac{50}{150}$" },
        // distractor: reports the overall archery share, ignoring the condition
        { id: "B", text: "$\\dfrac{75}{150}$" },
        // distractor: reverses the condition — divides by the Session 2 total
        { id: "C", text: "$\\dfrac{50}{85}$" },
        { id: "D", text: "$\\dfrac{50}{75}$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** \"Given archery\" sets the denominator to the Archery column total, $75$. Session 2 contributes $50$ of them, so $P = \\dfrac{50}{75} = \\dfrac{2}{3}$.\n\n**The Full Solution:**\nStep 1: The condition \"chose archery\" restricts the sample space to the $75$ archery campers.\nStep 2: Favorable outcomes are archery campers in Session 2: $50$.\nStep 3: $P = \\dfrac{50}{75} = \\dfrac{2}{3}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\dfrac{50}{150}$): divides by all $150$ campers instead of just the archery group.\n* Choice B ($\\dfrac{75}{150}$): reports the overall share of archery campers, ignoring the \"given\" condition.\n* Choice C ($\\dfrac{50}{85}$): reverses the condition — that is the probability a SESSION 2 camper chose archery.\n\n**Test Day Takeaway:** The \"given\" group is the denominator: given archery means the Archery column total goes on the bottom, and the matching cell goes on top.",
      skills: ["two-way-table", "conditional-probability"]
    }
  ]
};

export default practiceTest6M2Easy;
