// Practice Test 1 — Math Module 2 Easy variant (22 questions)
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
      question: "What value of $x$ is the solution to the equation $x + 9 = 24$?",
      choices: [
        // distractor: divides 24 by 9
        { id: "A", text: "$\\dfrac{8}{3}$" },
        { id: "B", text: "$15$" },
        // distractor: adds 9 instead of subtracting
        { id: "C", text: "$33$" },
        // distractor: multiplies 24 \cdot 9
        { id: "D", text: "$216$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Subtract $9$ from both sides: $x = 24 - 9 = 15$.\n\n**The Full Solution:**\nStep 1: The $9$ is added to $x$, so undo it by subtracting $9$ from both sides.\nStep 2: $x + 9 - 9 = 24 - 9 \\Rightarrow x = 15$.\nStep 3: Check: $15 + 9 = 24$ $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{8}{3}$): divided $24$ by $9$ — wrong inverse operation.\n* Choice C ($33$): added $9$ again instead of subtracting it.\n* Choice D ($216$): multiplied $24 \\cdot 9$ — wrong inverse operation.\n\n**Test Day Takeaway:** To isolate a variable, undo the operation on it: addition is undone by subtraction. Do the same thing to both sides.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 2,
      type: "fill-in",
      difficulty: "easy",
      band: 2,
      question: "What is $40\\%$ of $220$?",
      correctAnswer: "88",
      explanation: "**SAT Pattern: Percent of a Number**\n\n**The correct answer is $88$.**\n\n**The Fast Way (~5s):** $40\\%$ of $220$ is $0.40 \\cdot 220 = 88$.\n\n**The Full Solution:**\nStep 1: Convert the percent to a decimal: $40\\% = 0.40$.\nStep 2: Multiply by the number: $0.40 \\cdot 220 = 88$.\n\nA clean alternative: $\\frac{40}{100} \\cdot 220 = \\frac{2}{5} \\cdot 220 = 88$.\n\n**Common Mistakes:** Skipping the conversion and computing $40 \\cdot 220 = 8{,}800$; or subtracting to get $220 - 40 = 180$.\n\n**Test Day Takeaway:** \"Percent of a number\" means (percent as a decimal) $\\times$ number. Shift the decimal two places left to convert.",
      skills: ["percent-of-value", "percents"]
    },
    {
      id: 3,
      type: "multiple-choice",
      difficulty: "easy",
      band: 3,
      question: "The function $g$ is defined by $g(x) = 8x - 3$. What is the value of $g(4)$?",
      choices: [
        // distractor: uses x = 0, giving only the constant term
        { id: "A", text: "$-3$" },
        // distractor: adds 8 + 4 - 3 instead of multiplying
        { id: "B", text: "$9$" },
        { id: "C", text: "$29$" },
        // distractor: stops at 8(4) without subtracting 3
        { id: "D", text: "$32$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Substitute $x = 4$: $g(4) = 8(4) - 3 = 29$.\n\n**The Full Solution:**\nStep 1: $g(4)$ means replace every $x$ in the rule with $4$.\nStep 2: $g(4) = 8(4) - 3 = 32 - 3 = 29$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): used $x = 0$, giving only the constant term.\n* Choice B ($9$): added $8 + 4 - 3$ instead of multiplying $8$ by $4$.\n* Choice D ($32$): stopped at $8(4) = 32$ and forgot to subtract $3$.\n\n**Test Day Takeaway:** $g(a)$ means substitute $a$ for $x$ everywhere in the rule, then evaluate with order of operations.",
      skills: ["function-evaluation", "function-notation"]
    },
    // ============================================================
    // Q4-Q16: Medium core (band 4-5)
    // ============================================================
    {
      id: 4,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "A window-cleaning service charges $\\$35$ per visit plus $\\$6$ for each window cleaned. Which equation gives the total charge $C$, in dollars, for one visit in which $n$ windows are cleaned?",
      choices: [
        { id: "A", text: "$C = 6n + 35$" },
        // distractor: swaps the per-window rate and the flat fee
        { id: "B", text: "$C = 35n + 6$" },
        // distractor: adds the two rates into one combined per-window charge
        { id: "C", text: "$C = 41n$" },
        // distractor: multiplies the fee by the windows along with the rate
        { id: "D", text: "$C = 6(n + 35)$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Linear Cost Setup**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The per-window rate multiplies $n$; the flat visit fee is added once: $C = 6n + 35$.\n\n**The Full Solution:**\nStep 1: The charge that repeats per window is $\\$6$, so the variable term is $6n$.\nStep 2: The $\\$35$ visit fee is charged once, no matter how many windows — it is the constant.\nStep 3: Total charge: $C = 6n + 35$. Check with $n = 10$: $6(10) + 35 = 95$, which is $\\$60$ of window cleaning plus the $\\$35$ visit. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($C = 35n + 6$): swaps the roles — charges $\\$35$ per window and $\\$6$ once.\n* Choice C ($C = 41n$): adds the fee into the per-window rate, charging the visit fee $n$ times.\n* Choice D ($C = 6(n + 35)$): multiplies the fee by the per-window rate — distributing gives $6n + 210$, not $6n + 35$.\n\n**Test Day Takeaway:** In a linear cost model, the per-unit rate is the coefficient of the variable; the one-time fee is the constant term.",
      skills: ["linear-functions", "word-problems"]
    },
    {
      id: 5,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "The graph of the linear function $f$ is shown in the $xy$-plane. What is the $x$-intercept of the graph of $f$?",
      diagram: { type: "linearGraph", params: {
        slope: -2, yIntercept: 8,
        xRange: [-2, 6], yRange: [-4, 10],
        xTickInterval: 2, yTickInterval: 2, gridInterval: 1,
        label: "y = f(x)"
      } },
      choices: [
        // distractor: flips the sign of the x-intercept
        { id: "A", text: "$(-4, 0)$" },
        // distractor: gives the y-intercept as a point
        { id: "B", text: "$(0, 8)$" },
        { id: "C", text: "$(4, 0)$" },
        // distractor: uses the y-intercept value 8 as the x-coordinate
        { id: "D", text: "$(8, 0)$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Find x-Intercept Zero of Function**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The $x$-intercept is where the line crosses the $x$-axis. Reading the graph, the line crosses at $(4, 0)$.\n\n**The Full Solution:**\nStep 1: The $x$-intercept is the point on the graph where $y = 0$ — the crossing of the $x$-axis.\nStep 2: The line falls from its $y$-intercept $(0, 8)$ with slope $-2$: each step right drops $y$ by $2$.\nStep 3: From $y = 8$, four steps right reach $y = 8 - 2 \\cdot 4 = 0$, so the graph crosses at $(4, 0)$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-4, 0)$): flips the sign of the crossing point.\n* Choice B ($(0, 8)$): the $y$-intercept — where the graph crosses the $y$-axis, not the $x$-axis.\n* Choice D ($(8, 0)$): reuses the $y$-intercept value $8$ as an $x$-coordinate.\n\n**Test Day Takeaway:** On a graph, the $x$-intercept is the $x$-axis crossing ($y = 0$); the $y$-intercept is the $y$-axis crossing ($x = 0$). Don't swap them.",
      skills: ["x-intercept", "linear-functions"]
    },
    {
      id: 6,
      type: "fill-in",
      difficulty: "medium",
      band: 4,
      question: "In the right triangle shown, the two legs have lengths $8$ and $15$. What is the length of the hypotenuse?",
      diagram: { type: "rightTriangle", params: {
        sideLabels: ["8", "15", ""],
        rightAngleVertex: 1
      } },
      correctAnswer: "17",
      explanation: "**SAT Pattern: Right Triangle Pythagorean**\n\n**The correct answer is $17$.**\n\n**The Fast Way (~5s):** Legs $8$ and $15$ are the $8$-$15$-$17$ triple, so the hypotenuse is $17$.\n\n**The Full Solution:**\nStep 1: Apply $c^2 = a^2 + b^2$ with $a = 8$, $b = 15$.\nStep 2: $c^2 = 8^2 + 15^2 = 64 + 225 = 289$.\nStep 3: $c = \\sqrt{289} = 17$.\n\n**Common Mistakes:** Adding without squaring to get $8 + 15 = 23$; forgetting the square root and reporting $289$; or subtracting the squares, which applies only when the hypotenuse is already known.\n\n**Test Day Takeaway:** Memorize the common triples — $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$, $7$-$24$-$25$ — to skip the arithmetic.",
      skills: ["pythagorean-theorem", "right-triangles"]
    },
    {
      id: 7,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "The ratio of teachers to students on a field trip is $2$ to $9$. If there are $36$ students on the trip, how many teachers are on the trip?",
      choices: [
        // distractor: stops at the number of ratio groups, 36 ÷ 9 = 4
        { id: "A", text: "$4$" },
        { id: "B", text: "$8$" },
        // distractor: divides the students by 2 instead of using the ratio
        { id: "C", text: "$18$" },
        // distractor: cross-multiplies the wrong pair, 9 \cdot 36 / 2
        { id: "D", text: "$162$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Solving a Proportion**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Set up $\\frac{2}{9} = \\frac{t}{36}$. Since $36 = 9 \\cdot 4$, the teacher count is $2 \\cdot 4 = 8$.\n\n**The Full Solution:**\nStep 1: Write the proportion $\\frac{\\text{teachers}}{\\text{students}} = \\frac{2}{9} = \\frac{t}{36}$.\nStep 2: Cross-multiply: $9t = 2 \\cdot 36 = 72$.\nStep 3: Divide: $t = \\frac{72}{9} = 8$. Check: $\\frac{8}{36} = \\frac{2}{9}$ $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): stops at $36 \\div 9 = 4$, the number of ratio groups, without multiplying by the $2$ teachers per group.\n* Choice C ($18$): divides the $36$ students by $2$, ignoring the $9$ in the ratio.\n* Choice D ($162$): cross-multiplies the wrong pair, computing $\\frac{9 \\cdot 36}{2}$.\n\n**Test Day Takeaway:** Line up a proportion so matching quantities share a fraction: teachers over students on both sides. Then cross-multiply.",
      skills: ["proportions", "ratios"]
    },
    {
      id: 8,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A line in the $xy$-plane passes through the points $(-3, 4)$ and $(5, -12)$. What is the slope of the line?",
      choices: [
        // distractor: mishandles the signs, dividing -16 by 2
        { id: "A", text: "$-8$" },
        { id: "B", text: "$-2$" },
        // distractor: flips the formula to Δx over Δy
        { id: "C", text: "$-\\dfrac{1}{2}$" },
        // distractor: drops the negative sign
        { id: "D", text: "$2$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Slope $= \\frac{\\Delta y}{\\Delta x} = \\frac{-12 - 4}{5 - (-3)} = \\frac{-16}{8} = -2$.\n\n**The Full Solution:**\nStep 1: Apply $m = \\frac{y_2 - y_1}{x_2 - x_1}$ with $(-3, 4)$ and $(5, -12)$.\nStep 2: Numerator: $-12 - 4 = -16$. Denominator: $5 - (-3) = 5 + 3 = 8$.\nStep 3: $m = \\frac{-16}{8} = -2$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-8$): mishandled the double negative in the denominator, using $5 - 3 = 2$.\n* Choice C ($-\\frac{1}{2}$): flipped the formula to $\\frac{\\Delta x}{\\Delta y}$.\n* Choice D ($2$): dropped the negative sign — the line falls left to right, so the slope must be negative.\n\n**Test Day Takeaway:** Slope is rise over run, $\\frac{y_2 - y_1}{x_2 - x_1}$. Subtracting a negative coordinate adds — watch the double negative.",
      skills: ["slope-from-points", "slope"]
    },
    {
      id: 9,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "What are the solutions to the equation $x^2 + 3x - 28 = 0$?",
      choices: [
        // distractor: uses a factor pair of -28 with the wrong sum
        { id: "A", text: "$x = -14 \\text{ and } x = 2$" },
        // distractor: flips the signs of both roots
        { id: "B", text: "$x = -4 \\text{ and } x = 7$" },
        { id: "C", text: "$x = -7 \\text{ and } x = 4$" },
        // distractor: mistakes the coefficients for the roots
        { id: "D", text: "$x = -28 \\text{ and } x = 3$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Find two numbers with product $-28$ and sum $3$: $7$ and $-4$. So $(x + 7)(x - 4) = 0$, giving $x = -7$ or $x = 4$.\n\n**The Full Solution:**\nStep 1: For $x^2 + bx + c$, find two numbers whose product is $c = -28$ and sum is $b = 3$.\nStep 2: Those numbers are $7$ and $-4$ (since $7 \\cdot (-4) = -28$ and $7 + (-4) = 3$).\nStep 3: $x^2 + 3x - 28 = (x + 7)(x - 4) = 0 \\Rightarrow x = -7$ or $x = 4$.\nStep 4: Check: $(-7)^2 + 3(-7) - 28 = 49 - 21 - 28 = 0$ $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x = -14$ and $x = 2$): uses the factor pair $14 \\cdot 2$, whose sum is $-12$, not $3$.\n* Choice B ($x = -4$ and $x = 7$): flips the signs — those come straight from the factors without negating.\n* Choice D ($x = -28$ and $x = 3$): mistakes the coefficients $c$ and $b$ for the roots.\n\n**Test Day Takeaway:** Factor $x^2 + bx + c$ by finding two numbers with product $c$ and sum $b$. The roots are the opposites of those numbers.",
      skills: ["finding-roots-factoring", "quadratic-equations"]
    },
    {
      id: 10,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The mean of five numbers is $24$. Four of the numbers are $18$, $22$, $26$, and $31$. What is the value of the fifth number?",
      correctAnswer: "23",
      explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**The correct answer is $23$.**\n\n**The Fast Way (~10s):** Required total is $5 \\cdot 24 = 120$; the four given sum to $18 + 22 + 26 + 31 = 97$; the fifth is $120 - 97 = 23$.\n\n**The Full Solution:**\nStep 1: Sum $=$ mean $\\times$ count, so the five numbers must total $5 \\cdot 24 = 120$.\nStep 2: The four given numbers sum to $18 + 22 + 26 + 31 = 97$.\nStep 3: The missing number is $120 - 97 = 23$.\nStep 4: Check: $\\frac{18 + 22 + 26 + 31 + 23}{5} = \\frac{120}{5} = 24$ $\\checkmark$\n\n**Common Mistakes:** Averaging just the four given numbers ($\\frac{97}{4} = 24.25$); or reporting the required total $120$ instead of the missing value.\n\n**Test Day Takeaway:** Mean $\\times$ count $=$ total sum. For a missing value, subtract the known sum from the required total.",
      skills: ["calculate-mean", "statistics"]
    },
    {
      id: 11,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The solution to the system of equations $y = 4x$ and $x + y = 45$ is $(x, y)$. What is the value of $y$?",
      choices: [
        // distractor: reports x instead of y
        { id: "A", text: "$9$" },
        { id: "B", text: "$36$" },
        // distractor: subtracts 4 from 45
        { id: "C", text: "$41$" },
        // distractor: multiplies 4 \cdot 45 without solving
        { id: "D", text: "$180$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Substitute $y = 4x$ into $x + y = 45$: $x + 4x = 45 \\Rightarrow x = 9$, so $y = 4(9) = 36$.\n\n**The Full Solution:**\nStep 1: The first equation gives $y$ in terms of $x$, so substitute $4x$ for $y$ in the second: $x + 4x = 45$.\nStep 2: Combine like terms: $5x = 45 \\Rightarrow x = 9$.\nStep 3: Back-substitute: $y = 4(9) = 36$. Check: $9 + 36 = 45$ $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($9$): reports $x$, but the question asks for $y$.\n* Choice C ($41$): subtracts $4$ from $45$ instead of solving the system.\n* Choice D ($180$): multiplies $4 \\cdot 45$, skipping the substitution entirely.\n\n**Test Day Takeaway:** When one equation is already solved for a variable, substitute it into the other — then read carefully WHICH variable the question asks for.",
      skills: ["substitution-method", "systems-of-equations"]
    },
    {
      id: 12,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The table shows the distribution of the $250$ tickets sold for a school concert, by seating section. If one of these tickets is selected at random, what is the probability that the ticket is for the balcony section?",
      diagram: { type: "dataTable", params: {
        headers: ["Section", "Number of tickets"],
        rows: [["Orchestra", "105"], ["Mezzanine", "85"], ["Balcony", "60"]]
      } },
      choices: [
        { id: "A", text: "$\\dfrac{60}{250}$" },
        // distractor: divides by the non-balcony tickets
        { id: "B", text: "$\\dfrac{60}{190}$" },
        // distractor: uses the mezzanine count
        { id: "C", text: "$\\dfrac{85}{250}$" },
        // distractor: the complement — tickets NOT for the balcony
        { id: "D", text: "$\\dfrac{190}{250}$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Basic Probability**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Favorable over total: the balcony has $60$ of the $250$ tickets, so $P = \\frac{60}{250}$.\n\n**The Full Solution:**\nStep 1: Probability $= \\frac{\\text{favorable}}{\\text{total}}$.\nStep 2: From the table, favorable (balcony) $= 60$; the total is $105 + 85 + 60 = 250$.\nStep 3: $P(\\text{balcony}) = \\frac{60}{250}$ (which reduces to $\\frac{6}{25}$).\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{60}{190}$): divides by the non-balcony tickets ($105 + 85$) instead of the total.\n* Choice C ($\\frac{85}{250}$): reads the mezzanine row instead of the balcony row.\n* Choice D ($\\frac{190}{250}$): the probability the ticket is NOT for the balcony — the complement.\n\n**Test Day Takeaway:** The probability denominator is the total of ALL categories in the table — sum every row before dividing.",
      skills: ["probability-basics", "statistics"]
    },
    {
      id: 13,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A rectangular banner has a length of $18$ inches and a width of $7$ inches. What is the area, in square inches, of the banner?",
      correctAnswer: "126",
      explanation: "**SAT Pattern: Rectangle Area**\n\n**The correct answer is $126$.**\n\n**The Fast Way (~5s):** Area $= \\ell \\cdot w = 18 \\cdot 7 = 126$ square inches.\n\n**The Full Solution:**\nStep 1: A rectangle's area is length times width: $A = \\ell \\cdot w$.\nStep 2: Substitute the given dimensions: $A = 18 \\cdot 7 = 126$ square inches.\n\n**Common Mistakes:** Computing the perimeter instead, $2(18) + 2(7) = 50$; adding the dimensions, $18 + 7 = 25$.\n\n**Test Day Takeaway:** Rectangle area $= \\ell \\cdot w$; perimeter $= 2\\ell + 2w$. Read which one the question asks for.",
      skills: ["area", "geometry"]
    },
    {
      id: 14,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The table shows the number of bacteria in a laboratory culture at the end of each of the first two hours of an experiment. If the pattern in the table continues, which expression represents the number of bacteria in the culture at the end of $h$ hours?",
      diagram: { type: "dataTable", params: {
        headers: ["Hour", "Number of bacteria"],
        rows: [["0", "500"], ["1", "1,000"], ["2", "2,000"]]
      } },
      choices: [
        // distractor: swaps the roles of initial value and growth factor
        { id: "A", text: "$2 \\cdot 500^{h}$" },
        // distractor: linear growth — adds 2 per hour instead of doubling
        { id: "B", text: "$500 + 2h$" },
        { id: "C", text: "$500 \\cdot 2^{h}$" },
        // distractor: uses a power of h instead of an exponential
        { id: "D", text: "$500 \\cdot h^{2}$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Build Exponential Model**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The count doubles each hour ($500 \\to 1{,}000 \\to 2{,}000$), so after $h$ hours it is $500 \\cdot 2^{h}$.\n\n**The Full Solution:**\nStep 1: An exponential model has the form $P = P_0 \\cdot r^{h}$, with $P_0$ the starting amount and $r$ the per-period multiplier.\nStep 2: The table gives $P_0 = 500$ at hour $0$, and each row doubles the last, so $r = 2$.\nStep 3: The model is $P = 500 \\cdot 2^{h}$. Check: $h = 2 \\Rightarrow 500 \\cdot 4 = 2{,}000$, matching the table. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2 \\cdot 500^{h}$): swaps the initial value and the growth factor.\n* Choice B ($500 + 2h$): linear growth — at $h = 2$ it gives $504$, not $2{,}000$.\n* Choice D ($500 \\cdot h^{2}$): a power of $h$, which gives $0$ bacteria at $h = 0$ instead of $500$.\n\n**Test Day Takeaway:** \"Doubles every period\" $\\Rightarrow$ multiply by $2^{t}$. Verify a model by plugging table rows back in — the exponential is the one that matches every row.",
      skills: ["exponential-growth-decay", "exponent-laws"]
    },
    {
      id: 15,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "In a right triangle, the sine of acute angle $x$ is $\\dfrac{7}{25}$. What is the cosine of angle $x$?",
      choices: [
        // distractor: repeats the given sine
        { id: "A", text: "$\\dfrac{7}{25}$" },
        // distractor: gives the tangent, opp/adj
        { id: "B", text: "$\\dfrac{7}{24}$" },
        { id: "C", text: "$\\dfrac{24}{25}$" },
        // distractor: the reciprocal of the correct ratio
        { id: "D", text: "$\\dfrac{25}{24}$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Trig Ratio with Known Triple**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $\\sin(x) = \\dfrac{\\text{opp}}{\\text{hyp}} = \\dfrac{7}{25}$, so opposite $= 7$ and hypotenuse $= 25$. That's the $7$-$24$-$25$ triple, so adjacent $= 24$ and $\\cos(x) = \\dfrac{24}{25}$.\n\n**The Full Solution:**\nStep 1: In a right triangle, $\\sin(x) = \\dfrac{\\text{opposite}}{\\text{hypotenuse}}$ and $\\cos(x) = \\dfrac{\\text{adjacent}}{\\text{hypotenuse}}$.\nStep 2: From $\\sin(x) = \\dfrac{7}{25}$, the opposite side is $7$ and the hypotenuse is $25$.\nStep 3: Find the adjacent side with the Pythagorean theorem: $\\text{adj}^2 = 25^2 - 7^2 = 625 - 49 = 576$, so $\\text{adj} = 24$.\nStep 4: Therefore $\\cos(x) = \\dfrac{24}{25}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\dfrac{7}{25}$): just repeats $\\sin(x)$.\n* Choice B ($\\dfrac{7}{24}$): that is $\\tan(x) = \\dfrac{\\text{opp}}{\\text{adj}}$, not cosine.\n* Choice D ($\\dfrac{25}{24}$): the reciprocal of the cosine — that is $\\sec(x)$.\n\n**Test Day Takeaway:** Given one trig ratio, sketch the right triangle, label two sides, and use the Pythagorean theorem for the third. The $7$-$24$-$25$ triple shows up constantly.",
      skills: ["soh-cah-toa", "right-triangles"]
    },
    {
      id: 16,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "If $(x - 9)(x + 2) = 0$ and $x > 0$, what is the value of $x$?",
      correctAnswer: "9",
      explanation: "**SAT Pattern: Zero-Product Property**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~5s):** Set each factor to zero: $x = 9$ or $x = -2$. The condition $x > 0$ keeps $x = 9$.\n\n**The Full Solution:**\nStep 1: By the zero-product property, $(x - 9)(x + 2) = 0$ means $x - 9 = 0$ or $x + 2 = 0$.\nStep 2: These give $x = 9$ and $x = -2$.\nStep 3: The constraint $x > 0$ eliminates $-2$, so $x = 9$.\n\n**Common Mistakes:** Reporting $-2$ and ignoring $x > 0$; reading the factors with flipped signs and reporting $-9$ or $2$; multiplying $9 \\cdot 2 = 18$.\n\n**Test Day Takeaway:** If $A \\cdot B = 0$, then $A = 0$ or $B = 0$. The roots of $(x - r)(x + s) = 0$ are $r$ and $-s$ — note the sign flips from the factors.",
      skills: ["finding-roots-factoring", "quadratic-equations"]
    },
    // ============================================================
    // Q17-Q22: Hard ceiling for Easy variant (band 6-7, NO band 8)
    // ============================================================
    {
      id: 17,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "What value of $x$ satisfies the equation $\\dfrac{x}{4} + \\dfrac{x}{6} = 15$?",
      choices: [
        { id: "A", text: "$36$" },
        // distractor: solves x/4 = 15 alone, ignoring the x/6 term
        { id: "B", text: "$60$" },
        // distractor: adds numerators and denominators to get 2x/10
        { id: "C", text: "$75$" },
        // distractor: clears denominators but stops at 5x = 180
        { id: "D", text: "$180$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Multiply every term by $12$: $3x + 2x = 180 \\Rightarrow 5x = 180 \\Rightarrow x = 36$.\n\n**The Full Solution:**\nStep 1: The denominators are $4$ and $6$, so multiply both sides of $\\dfrac{x}{4} + \\dfrac{x}{6} = 15$ by the least common denominator $12$.\nStep 2: $12 \\cdot \\dfrac{x}{4} + 12 \\cdot \\dfrac{x}{6} = 12 \\cdot 15 \\Rightarrow 3x + 2x = 180$.\nStep 3: Combine like terms: $5x = 180 \\Rightarrow x = 36$.\nStep 4: Check: $\\dfrac{36}{4} + \\dfrac{36}{6} = 9 + 6 = 15$ $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($60$): solves $\\dfrac{x}{4} = 15$ alone and ignores the $\\dfrac{x}{6}$ term.\n* Choice C ($75$): adds numerators and denominators, treating the left side as $\\dfrac{2x}{10}$.\n* Choice D ($180$): clears the denominators correctly but stops at $5x = 180$ without dividing.\n\n**Test Day Takeaway:** To clear fractions from an equation, multiply every term by the least common denominator, then combine like terms.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 18,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "The function $g$ is defined by $g(x) = x^2 + 6x - 4$. What is the value of $g(-5)$?",
      choices: [
        // distractor: treats (-5)^2 as -25, losing the square's sign
        { id: "A", text: "$-59$" },
        { id: "B", text: "$-9$" },
        // distractor: drops the constant term, computing 25 - 30
        { id: "C", text: "$-5$" },
        // distractor: plugs in +5 instead of -5
        { id: "D", text: "$51$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $g(-5) = (-5)^2 + 6(-5) - 4 = 25 - 30 - 4 = -9$.\n\n**The Full Solution:**\nStep 1: Substitute $x = -5$ into $g(x) = x^2 + 6x - 4$: $g(-5) = (-5)^2 + 6(-5) - 4$.\nStep 2: Handle the signs: $(-5)^2 = 25$ and $6(-5) = -30$.\nStep 3: Combine: $25 - 30 - 4 = -9$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-59$): treats $(-5)^2$ as $-25$ — the square of a negative is positive.\n* Choice C ($-5$): computes $25 - 30 = -5$ but drops the $-4$.\n* Choice D ($51$): plugs in $+5$ instead of $-5$, giving $25 + 30 - 4$.\n\n**Test Day Takeaway:** $(-a)^2 = a^2 \\ge 0$, but the linear term keeps the input's sign. Substitute a negative value in parentheses and track every sign.",
      skills: ["function-evaluation", "function-notation"]
    },
    {
      id: 19,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "The expression $(x + 7)(x - 4)$ is equivalent to $x^2 + bx + c$, where $b$ and $c$ are constants. What is the value of $b$?",
      correctAnswer: "3",
      explanation: "**SAT Pattern: Matching Coefficients**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~10s):** The middle coefficient is the sum of the constants: $7 + (-4) = 3$, so $b = 3$.\n\n**The Full Solution:**\nStep 1: Expand $(x + 7)(x - 4)$: $x^2 - 4x + 7x - 28$.\nStep 2: Combine the middle terms: $x^2 + 3x - 28$.\nStep 3: Match to $x^2 + bx + c$: $b = 3$ (and $c = -28$).\n\n**Common Mistakes:** Reporting $-28$ (that is the constant $c$, not $b$); reporting $-3$ from a sign slip ($-4 + 7 = 3$, not $-3$); multiplying instead of adding, $7 \\cdot (-4) = -28$.\n\n**Test Day Takeaway:** $(x + p)(x + q) = x^2 + (p + q)x + pq$. The middle coefficient is the sum of $p$ and $q$; the constant is their product.",
      skills: ["polynomial-expansion", "quadratic-equations"]
    },
    {
      id: 20,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "In the $xy$-plane, line $j$ is parallel to the line with equation $y = \\dfrac{2}{3}x - 5$, and the $y$-intercept of line $j$ is $(0, 4)$. Which of the following equations defines line $j$?",
      choices: [
        // distractor: uses the perpendicular slope
        { id: "A", text: "$y = -\\dfrac{3}{2}x + 4$" },
        // distractor: flips the sign of the slope
        { id: "B", text: "$y = -\\dfrac{2}{3}x + 4$" },
        // distractor: keeps line k itself
        { id: "C", text: "$y = \\dfrac{2}{3}x - 5$" },
        { id: "D", text: "$y = \\dfrac{2}{3}x + 4$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Parallel means the slope stays $\\dfrac{2}{3}$. The point $(0, 4)$ is the $y$-intercept, so $b = 4$ and line $j$ is $y = \\dfrac{2}{3}x + 4$.\n\n**The Full Solution:**\nStep 1: Parallel lines share the same slope, so line $j$ has slope $\\dfrac{2}{3}$.\nStep 2: Write $y = \\dfrac{2}{3}x + b$. The line passes through $(0, 4)$, and $x = 0$ at a $y$-intercept, so $b = 4$.\nStep 3: The equation is $y = \\dfrac{2}{3}x + 4$. Check: at $x = 0$, $y = 4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -\\dfrac{3}{2}x + 4$): uses the perpendicular slope — the negative reciprocal — instead of the parallel slope.\n* Choice B ($y = -\\dfrac{2}{3}x + 4$): flips the sign of the slope.\n* Choice C ($y = \\dfrac{2}{3}x - 5$): keeps line $k$ itself, which does not pass through $(0, 4)$.\n\n**Test Day Takeaway:** Parallel lines have the same slope; perpendicular lines have negative-reciprocal slopes (flip and change sign).",
      skills: ["parallel-line-slope", "writing-parallel-equation"]
    },
    {
      id: 21,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "The table summarizes the distribution of the $180$ juniors and seniors at a school by whether they are enrolled in a statistics course. If one of the students who is enrolled in statistics is selected at random, what is the probability that the student is a senior?",
      diagram: { type: "twoWayTable", params: {
        headers: ["", "Enrolled in statistics", "Not enrolled", "Total"],
        rows: [
          ["Juniors", "28", "62", "90"],
          ["Seniors", "44", "46", "90"],
          ["Total", "72", "108", "180"]
        ]
      } },
      choices: [
        // distractor: divides by the grand total instead of the enrolled total
        { id: "A", text: "$\\dfrac{44}{180}$" },
        // distractor: reads the juniors' enrolled count
        { id: "B", text: "$\\dfrac{28}{72}$" },
        // distractor: divides by the senior class total
        { id: "C", text: "$\\dfrac{44}{90}$" },
        { id: "D", text: "$\\dfrac{44}{72}$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** \"Of the students who is enrolled in statistics\" restricts the pool to the $72$ enrolled students. Of those, $44$ are seniors, so the probability is $\\dfrac{44}{72}$.\n\n**The Full Solution:**\nStep 1: The condition \"enrolled in statistics\" limits the selection to the Enrolled column: $72$ students.\nStep 2: Within that column, the seniors number $44$.\nStep 3: The conditional probability is $\\dfrac{44}{72}$ (which reduces to $\\dfrac{11}{18}$).\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\dfrac{44}{180}$): divides by the grand total, ignoring the condition.\n* Choice B ($\\dfrac{28}{72}$): reads the juniors' enrolled count instead of the seniors'.\n* Choice C ($\\dfrac{44}{90}$): divides by the senior class total — that answers a different question (the probability an average senior takes statistics).\n\n**Test Day Takeaway:** In a conditional probability, the \"given\" group is the denominator. Find that row or column total first, then take the target cell over it.",
      skills: ["two-way-table", "conditional-probability"]
    },
    {
      id: 22,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "A right circular cylinder has a radius of $6$ and a height of $8$. The volume of the cylinder is $k\\pi$. What is the value of $k$?",
      correctAnswer: "288",
      explanation: "**SAT Pattern: Volume of a Cylinder**\n\n**The correct answer is $288$.**\n\n**The Fast Way (~10s):** $V = \\pi r^2 h = \\pi (6)^2 (8) = 288\\pi$, so $k = 288$.\n\n**The Full Solution:**\nStep 1: The volume of a right circular cylinder is $V = \\pi r^2 h$.\nStep 2: Substitute $r = 6$ and $h = 8$: $V = \\pi (6)^2 (8) = \\pi \\cdot 36 \\cdot 8 = 288\\pi$.\nStep 3: Matching $V = k\\pi$ gives $k = 288$.\n\n**Common Mistakes:** Forgetting to square the radius, $\\pi \\cdot 6 \\cdot 8 = 48\\pi$; doubling instead of squaring, $\\pi \\cdot 12 \\cdot 8 = 96\\pi$.\n\n**Test Day Takeaway:** Cylinder volume $= \\pi r^2 h$ — square the radius, then multiply by the height. This formula is on the reference sheet.",
      skills: ["volume-cylinder", "volume", "geometry"]
    }
  ]
};

export default practiceTest1M2Easy;
