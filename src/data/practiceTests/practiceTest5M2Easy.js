// Practice Test 5 — Math Module 2 Easy variant (22 questions)
// For students routed to easier path after Module 1 (~<60% correct).
// Distribution: 3E / 13M / 6H. Q1-3 easy openers. Max-score ceiling: ~650.
// Domain mix: 7 Algebra / 6 Advanced Math / 5 Problem-Solving / 4 Geometry & Trig.
// Official-calibration recreation (2026-09-01): fresh content on the frozen
// slot skeleton (docs/TEST_RECREATION_SPEC.md). Diagrams at Q6 (right
// triangle), Q7 (data table), Q21 (scatterplot), Q22 (two-way table).
// Scenario palette shared with the main test 5 files: aquatic center /
// pool chemistry, theater props/stage crew, harbor ferry.

export const practiceTest5M2Easy = {
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
      question: "An aquatic center charges a one-time registration fee of $\\$20$ plus $\\$5$ per swim session. So far, Tariq has paid the center $\\$65$ in total. For how many sessions has he paid?",
      choices: [
        { id: "A", text: "$9$" },
        // distractor: ignores the registration fee — 65 / 5
        { id: "B", text: "$13$" },
        // distractor: adds the fee instead of subtracting — (65 + 20) / 5
        { id: "C", text: "$17$" },
        // distractor: stops at 65 - 20 = 45 without dividing
        { id: "D", text: "$45$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Two-Step Equation from a Fee-Plus-Rate Context**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Take out the one-time fee: $65 - 20 = 45$ was spent on sessions, and $\\frac{45}{5} = 9$ sessions.\n\n**The Full Solution:**\nStep 1: Let $n$ be the number of sessions. Total paid $=$ fee $+$ $\\$5$ per session: $20 + 5n = 65$.\nStep 2: Subtract the fee: $5n = 45$.\nStep 3: Divide by the per-session cost: $n = 9$.\nStep 4: Check: $20 + 5(9) = 65$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($13$): divides the whole $\\$65$ by $\\$5$, ignoring the registration fee.\n* Choice C ($17$): adds the fee instead of removing it, $\\frac{65 + 20}{5}$.\n* Choice D ($45$): stops at $65 - 20 = 45$ — that is dollars spent on sessions, not the number of sessions.\n\n**Test Day Takeaway:** In fee-plus-rate problems, subtract the one-time amount first, then divide by the per-unit rate.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 2,
      type: "fill-in",
      difficulty: "easy",
      band: 2,
      question: "What is the perimeter, in centimeters, of a square with side length $12$ centimeters?",
      correctAnswer: "48",
      explanation: "**SAT Pattern: Square Perimeter**\n\n**The correct answer is $48$.**\n\n**The Fast Way (~5s):** A square's perimeter is $4s = 4 \\cdot 12 = 48$ cm.\n\n**The Full Solution:**\nStep 1: A square has $4$ equal sides, so its perimeter is $4$ times one side.\nStep 2: $4 \\cdot 12 = 48$ centimeters.\n\n**Common Mistakes:** Computing the area $12^2 = 144$; adding only two sides for $12 + 12 = 24$.\n\n**Test Day Takeaway:** Square perimeter $= 4s$; square area $= s^2$. Read which one the question asks for.",
      skills: ["perimeter", "geometry"]
    },
    {
      id: 3,
      type: "multiple-choice",
      difficulty: "easy",
      band: 3,
      question: "If $q(x) = 2x + 15$, what is the value of $q(-4)$?",
      choices: [
        // distractor: subtracts 15 instead of adding — -8 - 15
        { id: "A", text: "$-23$" },
        // distractor: sign slip on the final sum -8 + 15
        { id: "B", text: "$-7$" },
        { id: "C", text: "$7$" },
        // distractor: uses +4 instead of -4, giving 8 + 15
        { id: "D", text: "$23$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Substitute $x = -4$: $q(-4) = 2(-4) + 15 = -8 + 15 = 7$.\n\n**The Full Solution:**\nStep 1: Replace $x$ with $-4$, keeping the parentheses: $q(-4) = 2(-4) + 15$.\nStep 2: Multiply first: $2(-4) = -8$.\nStep 3: Add: $-8 + 15 = 7$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-23$): subtracts the $15$ instead of adding it, $-8 - 15$.\n* Choice B ($-7$): flips the sign of the correct sum $-8 + 15$.\n* Choice D ($23$): substitutes $+4$ instead of $-4$, giving $8 + 15$.\n\n**Test Day Takeaway:** Wrap a negative input in parentheses before substituting: $2(-4)$ is $-8$, and adding $15$ to $-8$ moves right on the number line, to $7$.",
      skills: ["function-evaluation", "function-notation"]
    },
    {
      id: 4,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "A stage crew uses $3$ liters of paint for every $4$ backdrop panels it paints. How many liters of paint are needed to paint $28$ panels?",
      choices: [
        { id: "A", text: "$21$" },
        // distractor: subtracts 4 from 28 instead of scaling the ratio
        { id: "B", text: "$24$" },
        // distractor: adds 3 to 28 instead of scaling the ratio
        { id: "C", text: "$31$" },
        // distractor: flips the ratio to 4/3 and computes 4/3 * 28
        { id: "D", text: "$37.3$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Proportion / Ratio**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $28$ panels is $7$ groups of $4$, and each group needs $3$ liters, so $7 \\cdot 3 = 21$ liters.\n\n**The Full Solution:**\nStep 1: Set up matching categories: $\\frac{\\text{paint}}{\\text{panels}} = \\frac{3}{4} = \\frac{p}{28}$.\nStep 2: Cross-multiply: $4p = 3 \\cdot 28 = 84$.\nStep 3: Divide: $p = \\frac{84}{4} = 21$ liters.\n\n**Why the wrong answers are tempting:**\n* Choice B ($24$): subtracts $4$ from $28$ instead of using the ratio.\n* Choice C ($31$): adds $3$ to $28$ instead of scaling.\n* Choice D ($37.3$): flips the ratio to $\\frac{4}{3} = \\frac{p}{28}$, giving $p \\approx 37.3$.\n\n**Test Day Takeaway:** Keep the same category on top in both fractions, then cross-multiply and solve.",
      skills: ["ratios", "proportions"]
    },
    {
      id: 5,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "What is the slope of the line with equation $y = 9 - \\dfrac{3}{4}x$?",
      choices: [
        // distractor: flips the fraction — that would be a perpendicular slope
        { id: "A", text: "$-\\dfrac{4}{3}$" },
        { id: "B", text: "$-\\dfrac{3}{4}$" },
        // distractor: drops the negative attached by the subtraction
        { id: "C", text: "$\\dfrac{3}{4}$" },
        // distractor: reads the leading constant 9 as the slope
        { id: "D", text: "$9$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Reading Slope-Intercept Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Rewrite in $y = mx + b$ order: $y = -\\dfrac{3}{4}x + 9$. The slope is the coefficient of $x$: $-\\dfrac{3}{4}$.\n\n**The Full Solution:**\nStep 1: The terms are written constant-first, so reorder: $y = 9 - \\dfrac{3}{4}x$ is the same as $y = -\\dfrac{3}{4}x + 9$.\nStep 2: Match to $y = mx + b$: slope $m = -\\dfrac{3}{4}$ (the subtraction carries the negative sign), $y$-intercept $b = 9$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\dfrac{4}{3}$): flips the fraction — that is the perpendicular slope, not this line's.\n* Choice C ($\\dfrac{3}{4}$): drops the negative that the subtraction sign attaches to the $x$-term.\n* Choice D ($9$): grabs the first number in the equation, but $9$ is the $y$-intercept.\n\n**Test Day Takeaway:** The slope is whatever multiplies $x$, sign included — even when the equation lists the constant first. Reorder mentally before reading off $m$.",
      skills: ["slope-intercept-form", "linear-functions"]
    },
    {
      id: 6,
      type: "fill-in",
      difficulty: "medium",
      band: 4,
      question: "In the right triangle shown, one acute angle measures $41^{\\circ}$. What is the measure, in degrees, of the other acute angle?",
      diagram: {
        type: "rightTriangle",
        params: {
          labels: ["41°", "", ""],
          rightAngleVertex: 1
        }
      },
      correctAnswer: "49",
      explanation: "**SAT Pattern: Acute Angles of a Right Triangle**\n\n**The correct answer is $49$.**\n\n**The Fast Way (~5s):** The two acute angles of a right triangle add to $90^{\\circ}$, so the other one is $90 - 41 = 49$.\n\n**The Full Solution:**\nStep 1: The three angles of any triangle sum to $180^{\\circ}$, and the right angle uses $90^{\\circ}$ of that.\nStep 2: The two acute angles must share the remaining $180 - 90 = 90^{\\circ}$.\nStep 3: The other acute angle is $90 - 41 = 49^{\\circ}$.\n\n**Common Mistakes:** Subtracting from $180$ instead of $90$ ($180 - 41 = 139$, impossible for an acute angle); subtracting from $100$ ($100 - 41 = 59$).\n\n**Test Day Takeaway:** In a right triangle, the two acute angles are complementary — they always add to $90^{\\circ}$.",
      skills: ["triangle-angle-sum", "right-triangles"]
    },
    {
      id: 7,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The mean of six sensor readings is $20$. The table gives five of the readings. What is the sixth reading?",
      diagram: {
        type: "dataTable",
        params: {
          headers: ["Reading", "Value"],
          rows: [
            ["1", "24"],
            ["2", "13"],
            ["3", "22"],
            ["4", "17"],
            ["5", "19"]
          ]
        }
      },
      choices: [
        // distractor: averages only the five given readings (95/5)
        { id: "A", text: "$19$" },
        // distractor: repeats the given mean
        { id: "B", text: "$20$" },
        { id: "C", text: "$25$" },
        // distractor: reports the sum of the five given readings
        { id: "D", text: "$95$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Required total is $6 \\cdot 20 = 120$; the five known readings sum to $95$, so the sixth is $120 - 95 = 25$.\n\n**The Full Solution:**\nStep 1: Mean $\\times$ count $=$ total, so the six readings must sum to $6 \\cdot 20 = 120$.\nStep 2: Add the five known readings: $24 + 13 + 22 + 17 + 19 = 95$.\nStep 3: Subtract: sixth reading $= 120 - 95 = 25$.\nStep 4: Check: $\\frac{120}{6} = 20$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($19$): averages only the five known readings, $\\frac{95}{5} = 19$.\n* Choice B ($20$): repeats the given mean instead of solving for the missing value.\n* Choice D ($95$): reports the sum of the five given readings.\n\n**Test Day Takeaway:** Mean $\\times$ count gives the total; subtract the known sum to recover a missing value.",
      skills: ["calculate-mean", "statistics"]
    },
    {
      id: 8,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "What are the solutions to the equation $x^2 - 11x + 24 = 0$?",
      choices: [
        // distractor: uses the factor numbers as roots without flipping signs
        { id: "A", text: "$x = -8 \\text{ or } x = -3$" },
        { id: "B", text: "$x = 3 \\text{ or } x = 8$" },
        // distractor: mistakes the coefficients b and c for the roots
        { id: "C", text: "$x = 11 \\text{ or } x = 24$" },
        // distractor: drops one root entirely
        { id: "D", text: "$x = 24$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Find two numbers with product $24$ and sum $-11$: that's $-3$ and $-8$, so $(x - 3)(x - 8) = 0$ and $x = 3$ or $x = 8$.\n\n**The Full Solution:**\nStep 1: For $x^2 + bx + c$, find two numbers whose product is $c = 24$ and whose sum is $b = -11$.\nStep 2: Those numbers are $-3$ and $-8$, so $x^2 - 11x + 24 = (x - 3)(x - 8)$.\nStep 3: Set each factor to $0$: $x = 3$ or $x = 8$.\nStep 4: Check: $3^2 - 11(3) + 24 = 0$ and $8^2 - 11(8) + 24 = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x = -8$ or $x = -3$): uses the factor numbers as roots without flipping their signs.\n* Choice C ($x = 11$ or $x = 24$): mistakes the coefficients $b$ and $c$ for the roots.\n* Choice D ($x = 24$): drops a root and misreads the constant as a solution.\n\n**Test Day Takeaway:** The roots of $(x - p)(x - q) = 0$ are $+p$ and $+q$ — the opposite sign of what sits inside each factor.",
      skills: ["finding-roots-factoring", "quadratic-equations"]
    },
    {
      id: 9,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "$36$ is $45\\%$ of what number?",
      correctAnswer: "80",
      explanation: "**SAT Pattern: Finding the Whole from a Percent**\n\n**The correct answer is $80$.**\n\n**The Fast Way (~5s):** $0.45 \\cdot n = 36 \\Rightarrow n = \\frac{36}{0.45} = 80$.\n\n**The Full Solution:**\nStep 1: \"$36$ is $45\\%$ of what number\" translates to $36 = 0.45 \\cdot n$.\nStep 2: Divide both sides by $0.45$: $n = \\frac{36}{0.45} = 80$.\nStep 3: Check: $45\\%$ of $80$ is $0.45 \\cdot 80 = 36$. $\\checkmark$\n\n**Common Mistakes:** Multiplying instead of dividing ($36 \\cdot 0.45 = 16.2$) — that finds $45\\%$ OF $36$, a different question; dividing by $45$ without converting ($\\frac{36}{45} = 0.8$).\n\n**Test Day Takeaway:** \"$a$ is $p\\%$ of what\" means the whole is unknown: whole $= a \\div (p$ as a decimal$)$. The answer must be larger than $a$ whenever $p < 100$.",
      skills: ["percents", "percent-of-number"]
    },
    {
      id: 10,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "What is the slope of the line passing through the points $(2, 7)$ and $(6, 19)$?",
      choices: [
        // distractor: subtracts in opposite orders top and bottom, flipping the sign
        { id: "A", text: "$-3$" },
        // distractor: inverts the formula to run over rise
        { id: "B", text: "$\\dfrac{1}{3}$" },
        { id: "C", text: "$3$" },
        // distractor: adds the coordinates instead of subtracting, (19+7)/(6+2)
        { id: "D", text: "$\\dfrac{13}{4}$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Slope $= \\frac{\\Delta y}{\\Delta x} = \\frac{19 - 7}{6 - 2} = \\frac{12}{4} = 3$.\n\n**The Full Solution:**\nStep 1: Use $m = \\frac{y_2 - y_1}{x_2 - x_1}$ with $(2, 7)$ and $(6, 19)$.\nStep 2: $m = \\frac{19 - 7}{6 - 2} = \\frac{12}{4} = 3$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): subtracts in opposite orders in the numerator and denominator, flipping the sign.\n* Choice B ($\\frac{1}{3}$): inverts the formula to $\\frac{\\Delta x}{\\Delta y}$.\n* Choice D ($\\frac{13}{4}$): adds coordinates instead of subtracting, $\\frac{19 + 7}{6 + 2}$.\n\n**Test Day Takeaway:** Slope is rise over run, $\\frac{y_2 - y_1}{x_2 - x_1}$ — subtract in the same order in both the numerator and denominator.",
      skills: ["slope-from-points", "slope"]
    },
    {
      id: 11,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A supply closet at an aquatic center holds $7$ blue towels, $8$ gray towels, and $10$ white towels. If one towel is taken at random, what is the probability that it is gray?",
      choices: [
        // distractor: uses the blue count in the numerator
        { id: "A", text: "$\\dfrac{7}{25}$" },
        { id: "B", text: "$\\dfrac{8}{25}$" },
        // distractor: uses the white count in the numerator
        { id: "C", text: "$\\dfrac{10}{25}$" },
        // distractor: divides by the non-gray count 7 + 10 = 17
        { id: "D", text: "$\\dfrac{8}{17}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Basic Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Total towels $= 7 + 8 + 10 = 25$, and $8$ are gray, so $P(\\text{gray}) = \\frac{8}{25}$.\n\n**The Full Solution:**\nStep 1: Probability $= \\frac{\\text{favorable}}{\\text{total}}$.\nStep 2: Favorable (gray) $= 8$; total $= 7 + 8 + 10 = 25$.\nStep 3: $P(\\text{gray}) = \\frac{8}{25}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{7}{25}$): uses the blue count in the numerator.\n* Choice C ($\\frac{10}{25}$): uses the white count in the numerator.\n* Choice D ($\\frac{8}{17}$): divides by the non-gray count $7 + 10 = 17$ instead of the total.\n\n**Test Day Takeaway:** The probability denominator is the full total, including the favorable group itself.",
      skills: ["probability-basics", "statistics"]
    },
    {
      id: 12,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A storage bin in a theater's prop room is a rectangular box with length $8$ inches, width $4$ inches, and height $3$ inches. The volume of the bin is $V$ cubic inches. What is the value of $V$?",
      correctAnswer: "96",
      explanation: "**SAT Pattern: Volume of Rectangular Prism**\n\n**The correct answer is $96$.**\n\n**The Fast Way (~5s):** Multiply all three dimensions: $8 \\cdot 4 \\cdot 3 = 96$ cubic inches.\n\n**The Full Solution:**\nStep 1: A box's volume is $V = \\ell \\cdot w \\cdot h$.\nStep 2: $V = 8 \\cdot 4 \\cdot 3 = 96$ cubic inches.\n\n**Common Mistakes:** Adding dimensions for $8 + 4 + 3 = 15$; multiplying only two for $8 \\cdot 4 = 32$; computing surface area instead of volume.\n\n**Test Day Takeaway:** Rectangular-box volume is length $\\times$ width $\\times$ height — multiply all three dimensions.",
      skills: ["volume-prism", "volume"]
    },
    {
      id: 13,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "What is the solution $(x, y)$ to the system $y = 4x - 5$ and $y = 2x + 7$?",
      choices: [
        // distractor: stops at the y-intercept of the second line
        { id: "A", text: "$(0, 7)$" },
        // distractor: arithmetic slip solving 2x = 12
        { id: "B", text: "$(1, -1)$" },
        // distractor: swaps the x- and y-coordinates
        { id: "C", text: "$(19, 6)$" },
        { id: "D", text: "$(6, 19)$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Both equations are solved for $y$, so set them equal: $4x - 5 = 2x + 7 \\Rightarrow 2x = 12 \\Rightarrow x = 6$. Then $y = 2(6) + 7 = 19$, giving $(6, 19)$.\n\n**The Full Solution:**\nStep 1: Both right-hand sides equal $y$, so they equal each other: $4x - 5 = 2x + 7$.\nStep 2: Subtract $2x$: $2x - 5 = 7$, then add $5$: $2x = 12$, so $x = 6$.\nStep 3: Substitute into either equation: $y = 2(6) + 7 = 19$.\nStep 4: Check the other equation: $y = 4(6) - 5 = 19$. $\\checkmark$ The solution is $(6, 19)$.\n\n**Why the wrong answers are tempting:**\n* Choice A $(0, 7)$: stops at the $y$-intercept of the second line instead of solving the system.\n* Choice B $(1, -1)$: an arithmetic slip solving $2x = 12$.\n* Choice C $(19, 6)$: swaps the $x$- and $y$-values — $19$ is $y$, not $x$.\n\n**Test Day Takeaway:** When both equations are already solved for the same variable, set the expressions equal, solve for the other variable, then back-substitute.",
      skills: ["substitution-method", "systems-of-equations"]
    },
    {
      id: 14,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The number of fruit flies in a laboratory colony doubles every week. If the colony has $40$ flies now, which expression gives the number of flies after $w$ weeks?",
      choices: [
        // distractor: linear instead of exponential — adds 2 each week
        { id: "A", text: "$40 + 2w$" },
        // distractor: swaps the starting amount and the growth factor
        { id: "B", text: "$2 \\cdot 40^{w}$" },
        // distractor: doubles once, then grows linearly
        { id: "C", text: "$80 + 40w$" },
        { id: "D", text: "$40 \\cdot 2^{w}$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** \"Doubles every week\" means multiply by $2$ each week, starting from $40$. After $w$ weeks: $40 \\cdot 2^{w}$.\n\n**The Full Solution:**\nStep 1: An exponential model has the form $P(w) = P_0 \\cdot r^{w}$, where $P_0$ is the starting amount and $r$ is the per-week growth factor.\nStep 2: Here $P_0 = 40$ and doubling gives $r = 2$, so $P(w) = 40 \\cdot 2^{w}$.\nStep 3: Sanity-check: $w = 0$ gives $40$; $w = 1$ gives $80$; $w = 2$ gives $160$ — each week is twice the last. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($40 + 2w$): linear growth — adds $2$ each week instead of multiplying by $2$.\n* Choice B ($2 \\cdot 40^{w}$): swaps the roles — uses $40$ as the base and $2$ as the starting amount.\n* Choice C ($80 + 40w$): doubles once for the first week, then grows linearly.\n\n**Test Day Takeaway:** \"Doubles/triples/halves every period\" signals exponential. The starting value sits in front; the growth factor is the base raised to the time variable.",
      skills: ["exponential-growth-decay", "exponent-laws"]
    },
    {
      id: 15,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "In a right triangle, the two acute angles measure $x^{\\circ}$ and $y^{\\circ}$. If $\\sin(x^{\\circ}) = 0.8$, what is the value of $\\cos(y^{\\circ})$?",
      choices: [
        // distractor: subtracts from 1, misapplying the Pythagorean identity
        { id: "A", text: "$0.2$" },
        // distractor: computes cos(x°) instead of cos(y°)
        { id: "B", text: "$0.6$" },
        // distractor: squares the given value
        { id: "C", text: "$0.64$" },
        { id: "D", text: "$0.8$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Cofunction Identity for Complementary Angles**\n\n**Choice D is correct.**\n\n**The Fast Way (~5s):** The acute angles of a right triangle are complementary, and $\\cos(y^{\\circ}) = \\sin(90^{\\circ} - y^{\\circ}) = \\sin(x^{\\circ}) = 0.8$.\n\n**The Full Solution:**\nStep 1: In a right triangle the acute angles sum to $90^{\\circ}$, so $x + y = 90$.\nStep 2: The side opposite angle $x$ is the side adjacent to angle $y$. So $\\sin(x^{\\circ}) = \\dfrac{\\text{that side}}{\\text{hypotenuse}} = \\cos(y^{\\circ})$.\nStep 3: Therefore $\\cos(y^{\\circ}) = \\sin(x^{\\circ}) = 0.8$ — no computation needed.\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.2$): subtracts from $1$, misapplying $\\sin^2 + \\cos^2 = 1$ without the squares.\n* Choice B ($0.6$): computes $\\cos(x^{\\circ}) = \\sqrt{1 - 0.64}$ — the cosine of the WRONG angle.\n* Choice C ($0.64$): squares the given value, again misusing the Pythagorean identity.\n\n**Test Day Takeaway:** For complementary angles, $\\sin(x^{\\circ}) = \\cos(90^{\\circ} - x^{\\circ})$. The SAT loves this: the sine of one acute angle IS the cosine of the other.",
      skills: ["soh-cah-toa", "right-triangles"]
    },
    {
      id: 16,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A harbor ferry travels at a constant speed of $24$ kilometers per hour. How many kilometers does it travel in $2$ hours and $45$ minutes?",
      correctAnswer: "66",
      explanation: "**SAT Pattern: Distance = Rate × Time**\n\n**The correct answer is $66$.**\n\n**The Fast Way (~10s):** $45$ minutes is $0.75$ hour, so the time is $2.75$ hours. Distance $= 24 \\times 2.75 = 66$ kilometers.\n\n**The Full Solution:**\nStep 1: Convert the time to hours: $2$ hr $45$ min $= 2 + \\frac{45}{60} = 2.75$ hours.\nStep 2: Apply distance $=$ rate $\\times$ time: $24 \\cdot 2.75 = 66$ kilometers.\n\n**Common Mistakes:** Writing the time as $2.45$ hours gives $24 \\times 2.45 = 58.8$; ignoring the extra $45$ minutes gives $24 \\times 2 = 48$.\n\n**Test Day Takeaway:** Convert minutes to a decimal fraction of an hour before multiplying: $15$ min $= 0.25$ hr, $30$ min $= 0.5$ hr, $45$ min $= 0.75$ hr.",
      skills: ["unit-conversion", "rate-conversion"]
    },
    {
      id: 17,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "If $4(2x - 3) = 8x + 5$, how many solutions does the equation have?",
      choices: [
        { id: "A", text: "$0$" },
        // distractor: assumes every linear equation has exactly one solution
        { id: "B", text: "$1$" },
        // distractor: quadratic-style count applied to a linear equation
        { id: "C", text: "$2$" },
        // distractor: matching x-terms misread as an identity
        { id: "D", text: "Infinitely many" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Counting Solutions of a Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Distribute: $8x - 12 = 8x + 5$. Subtracting $8x$ leaves $-12 = 5$, which is false — so no value of $x$ works. Zero solutions.\n\n**The Full Solution:**\nStep 1: Distribute the left side: $4(2x - 3) = 8x - 12$.\nStep 2: The equation is $8x - 12 = 8x + 5$. The $x$-coefficients match ($8 = 8$) but the constants differ ($-12 \\neq 5$).\nStep 3: Subtracting $8x$ from both sides gives the contradiction $-12 = 5$, so the equation has $0$ solutions — the two lines are parallel and never meet.\n\n**Why the wrong answers are tempting:**\n* Choice B ($1$): assumes every linear equation has one solution, but that requires DIFFERENT $x$-coefficients.\n* Choice C ($2$): a quadratic-style count; a linear equation can never have exactly two solutions.\n* Choice D (Infinitely many): that requires both sides identical after simplifying; $-12$ and $+5$ are not.\n\n**Test Day Takeaway:** Simplify both sides, then compare: different $x$-coefficients $\\Rightarrow$ one solution; same coefficient, different constants $\\Rightarrow$ none; identical sides $\\Rightarrow$ infinitely many.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 18,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "A circle has center $(0, 0)$ and passes through the point $(-8, 15)$. What is the radius of the circle?",
      correctAnswer: "17",
      explanation: "**SAT Pattern: Radius via Distance Formula**\n\n**The correct answer is $17$.**\n\n**The Fast Way (~5s):** The radius is the distance from $(0, 0)$ to $(-8, 15)$: $\\sqrt{(-8)^2 + 15^2} = \\sqrt{289} = 17$ — the $8$-$15$-$17$ triple.\n\n**The Full Solution:**\nStep 1: The radius equals the distance from the center to any point on the circle.\nStep 2: Apply the distance formula: $r = \\sqrt{(-8 - 0)^2 + (15 - 0)^2} = \\sqrt{64 + 225} = \\sqrt{289} = 17$.\nStep 3: Check with the circle equation $x^2 + y^2 = r^2$: $(-8)^2 + 15^2 = 64 + 225 = 289 = 17^2$. $\\checkmark$\n\n**Common Mistakes:** Dropping the square on the negative coordinate ($-64 + 225 = 161$); adding without squaring gives $-8 + 15 = 7$; forgetting the square root leaves $289$.\n\n**Test Day Takeaway:** The equation $x^2 + y^2 = r^2$ is the distance formula in disguise — squaring wipes out negative signs, so $(-8)^2 = 64$.",
      skills: ["circle-equation", "circles"]
    },
    {
      id: 19,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "The function $g$ is defined by $g(x) = x^2 + 3x$. What is the value of $g(6) - g(2)$?",
      choices: [
        // distractor: collapses the expression to g(6 - 2) = g(4)
        { id: "A", text: "$28$" },
        { id: "B", text: "$44$" },
        // distractor: reports g(6) alone, ignoring the subtraction
        { id: "C", text: "$54$" },
        // distractor: adds g(6) + g(2) instead of subtracting
        { id: "D", text: "$64$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Difference of Two Function Values**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $g(6) = 36 + 18 = 54$ and $g(2) = 4 + 6 = 10$, so $g(6) - g(2) = 54 - 10 = 44$.\n\n**The Full Solution:**\nStep 1: Evaluate each value separately. $g(6) = 6^2 + 3(6) = 36 + 18 = 54$.\nStep 2: $g(2) = 2^2 + 3(2) = 4 + 6 = 10$.\nStep 3: Subtract: $g(6) - g(2) = 54 - 10 = 44$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($28$): collapses the expression to $g(6 - 2) = g(4) = 16 + 12 = 28$. Function values do not subtract inside the parentheses.\n* Choice C ($54$): computes $g(6)$ and stops, ignoring the $-\\,g(2)$.\n* Choice D ($64$): adds the two values, $54 + 10$, instead of subtracting.\n\n**Test Day Takeaway:** $g(a) - g(b)$ means evaluate twice, then subtract the outputs. It is NOT the same as $g(a - b)$.",
      skills: ["function-evaluation", "function-notation"]
    },
    {
      id: 20,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "In the $xy$-plane, which of the following is an equation of a line parallel to the line with equation $3x + 5y = 15$?",
      choices: [
        // distractor: flips the coefficients into -5/3
        { id: "A", text: "$y = -\\dfrac{5}{3}x + 2$" },
        // distractor: drops the negative when isolating y
        { id: "B", text: "$y = \\dfrac{3}{5}x + 1$" },
        { id: "C", text: "$y = -\\dfrac{3}{5}x + 4$" },
        // distractor: reads the x-coefficient 3 straight off as the slope
        { id: "D", text: "$y = 3x - 2$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Parallel Slopes from Standard Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Solve for $y$: $5y = -3x + 15 \\Rightarrow y = -\\dfrac{3}{5}x + 3$. The slope is $-\\dfrac{3}{5}$, and the only choice with that slope is $y = -\\dfrac{3}{5}x + 4$.\n\n**The Full Solution:**\nStep 1: Convert $3x + 5y = 15$ to slope-intercept form. Subtract $3x$: $5y = -3x + 15$.\nStep 2: Divide by $5$: $y = -\\dfrac{3}{5}x + 3$, so the slope is $-\\dfrac{3}{5}$.\nStep 3: Parallel lines have equal slopes and different intercepts. Choice C has slope $-\\dfrac{3}{5}$ and intercept $4 \\neq 3$, so it is a distinct parallel line.\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -\\dfrac{5}{3}x + 2$): flips the coefficients into $-\\dfrac{5}{3}$ — the reciprocal, not the slope.\n* Choice B ($y = \\dfrac{3}{5}x + 1$): loses the negative sign when moving $3x$ across the equals sign.\n* Choice D ($y = 3x - 2$): reads the $x$-coefficient $3$ straight off standard form as if it were the slope.\n\n**Test Day Takeaway:** A line in standard form $Ax + By = C$ has slope $-\\dfrac{A}{B}$. Convert to $y = mx + b$ (or use that shortcut) before comparing slopes.",
      skills: ["parallel-line-slope", "writing-parallel-equation"]
    },
    {
      id: 21,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "The scatterplot shows the free-chlorine level $y$, in parts per million, measured in a swimming pool $x$ hours after the pool was treated, for $9$ measurements. The line of best fit is $\\hat{y} = -0.3x + 6.8$. According to the model, by how many parts per million does the chlorine level decrease for each additional hour after treatment?",
      diagram: { type: "scatterplot", params: {
        points: [[2,6.3],[4,5.5],[6,5.2],[8,4.3],[10,3.9],[12,3.4],[14,2.6],[16,2.1],[18,1.5]],
        xMin: 0, xMax: 20, yMin: 0, yMax: 8,
        xGridStep: 2, yGridStep: 1, xLabelStep: 4, yLabelStep: 2,
        xLabel: "Hours after treatment", yLabel: "Chlorine (ppm)",
        bestFitLine: { slope: -0.3, intercept: 6.8 },
      } },
      correctAnswer: ".3",
      explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**The correct answer is $0.3$.**\n\n**The Fast Way (~10s):** The slope $-0.3$ means $y$ falls by $0.3$ for each one-hour increase in $x$, so the decrease is $0.3$ parts per million per hour.\n\n**The Full Solution:**\nStep 1: In $\\hat{y} = mx + b$, the slope $m$ is the predicted change in $y$ per one-unit change in $x$.\nStep 2: Here $m = -0.3$, so each additional hour predicts a change of $-0.3$ parts per million.\nStep 3: The question asks how much the level decreases, which is the size of that change: $0.3$.\n\n**Common Mistakes:** Answering $-0.3$ (the question wants the magnitude of the decrease, a positive number); reporting $6.8$ (the intercept — the predicted level right at treatment time) or $6.5$ (the predicted level at $x = 1$).\n\n**Test Day Takeaway:** In $\\hat{y} = mx + b$, the slope is the per-unit rate of change. A negative slope means a decrease, and \"how much does it decrease\" asks for the magnitude.",
      skills: ["linear-functions", "slope"]
    },
    {
      id: 22,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "A theater company stores its $140$ costumes in two warehouses. The table summarizes the costumes by style and by warehouse. What fraction of all the period costumes are stored in Warehouse B?",
      diagram: {
        type: "twoWayTable",
        params: {
          headers: ["", "Modern", "Period", "Total"],
          rows: [
            ["Warehouse A", "36", "24", "60"],
            ["Warehouse B", "36", "44", "80"],
            ["Total", "72", "68", "140"]
          ]
        }
      },
      choices: [
        // distractor: uses the grand total 140 as the denominator
        { id: "A", text: "$\\dfrac{44}{140}$" },
        // distractor: fraction of all costumes that are period, not the requested group
        { id: "B", text: "$\\dfrac{68}{140}$" },
        // distractor: uses Warehouse B's total as the denominator
        { id: "C", text: "$\\dfrac{44}{80}$" },
        { id: "D", text: "$\\dfrac{44}{68}$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** \"Of all the period costumes\" sets the denominator to the Period column total, $68$. Warehouse B holds $44$ of them, so the fraction is $\\frac{44}{68}$.\n\n**The Full Solution:**\nStep 1: \"What fraction of all the period costumes\" restricts the group to period costumes only, so the denominator is the Period total: $24 + 44 = 68$.\nStep 2: The numerator is the period costumes in Warehouse B: $44$.\nStep 3: The fraction is $\\frac{44}{68}$, which reduces to $\\frac{11}{17}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{44}{140}$): uses the grand total $140$ instead of just the period costumes.\n* Choice B ($\\frac{68}{140}$): the fraction of ALL costumes that are period — a different question.\n* Choice C ($\\frac{44}{80}$): the fraction of Warehouse B's costumes that are period (denominator is B's total).\n\n**Test Day Takeaway:** The word \"of\" names the denominator. \"Of all the period costumes\" $\\Rightarrow$ Period column total; \"of Warehouse B\" $\\Rightarrow$ Warehouse B's row total.",
      skills: ["two-way-table", "conditional-probability"]
    }
  ]
};

export default practiceTest5M2Easy;
