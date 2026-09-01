// Practice Test 4 — Math Module 2 Easy variant (22 questions)
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
      question: "Priya pays $\\$52$ for $4$ identical desk organizers. What is the price, in dollars, of one desk organizer?",
      choices: [
        { id: "A", text: "$\\$13$" },
        // distractor: subtracts 4 from 52
        { id: "B", text: "$\\$48$" },
        // distractor: adds 4 to 52
        { id: "C", text: "$\\$56$" },
        // distractor: multiplies 52 by 4
        { id: "D", text: "$\\$208$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Equal Groups — Finding a Unit Price**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Four identical organizers cost $\\$52$, so one organizer costs $\\frac{52}{4} = \\$13$.\n\n**The Full Solution:**\nStep 1: Let $p$ be the price of one organizer. Four identical organizers cost $4p$, so $4p = 52$.\nStep 2: Divide both sides by $4$: $p = \\frac{52}{4} = 13$.\nStep 3: Check: $4 \\cdot \\$13 = \\$52$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\$48$): subtracts the count from the total, $52 - 4$.\n* Choice C ($\\$56$): adds the count to the total, $52 + 4$.\n* Choice D ($\\$208$): multiplies the total by the count, $52 \\cdot 4$.\n\n**Test Day Takeaway:** \"Total for $n$ identical items\" means unit price $= \\text{total} \\div n$. A unit price must come out smaller than the total.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 2,
      type: "fill-in",
      difficulty: "easy",
      band: 2,
      question: "$21$ is what percent of $60$?",
      correctAnswer: "35",
      explanation: "**SAT Pattern: Finding the Percent**\n\n**The correct answer is $35$.**\n\n**The Fast Way (~5s):** $\\frac{21}{60} = \\frac{7}{20} = 0.35$, which is $35\\%$.\n\n**The Full Solution:**\nStep 1: \"$21$ is what percent of $60$\" translates to $21 = \\frac{p}{100} \\cdot 60$.\nStep 2: Divide the part by the whole: $\\frac{21}{60} = 0.35$.\nStep 3: Convert to a percent: $0.35 = 35\\%$.\n\n**Common Mistakes:** Dividing the whole by the part ($\\frac{60}{21} \\approx 2.86$); or subtracting ($60 - 21 = 39$) instead of dividing.\n\n**Test Day Takeaway:** \"$a$ is what percent of $b$\" means $\\frac{a}{b} \\cdot 100$. The number after \"of\" is always the denominator.",
      skills: ["percent-of-value", "percents"]
    },
    {
      id: 3,
      type: "multiple-choice",
      difficulty: "easy",
      band: 3,
      question: "Which expression is equivalent to $(5x + 9) - (2x + 4)$?",
      choices: [
        // distractor: distributes the minus only to 2x, leaving +4 unchanged
        { id: "A", text: "$3x + 13$" },
        { id: "B", text: "$3x + 5$" },
        // distractor: distributes the minus only to the constant 4
        { id: "C", text: "$7x + 5$" },
        // distractor: adds the two groups instead of subtracting
        { id: "D", text: "$7x + 13$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Distributing the Negative Sign**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Distribute the minus to both terms in the second group: $5x + 9 - 2x - 4 = 3x + 5$.\n\n**The Full Solution:**\nStep 1: Rewrite, distributing the minus to BOTH terms inside $(2x + 4)$: $(5x + 9) - (2x + 4) = 5x + 9 - 2x - 4$.\nStep 2: Group like terms: $(5x - 2x) + (9 - 4)$.\nStep 3: Combine: $3x + 5$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3x + 13$): distributes the minus only to $2x$, leaving $+4$: $5x + 9 - 2x + 4 = 3x + 13$.\n* Choice C ($7x + 5$): distributes the minus only to $4$, leaving $+2x$: $5x + 9 + 2x - 4 = 7x + 5$.\n* Choice D ($7x + 13$): adds instead of subtracting, so nothing flips sign.\n\n**Test Day Takeaway:** When subtracting a parenthesis, the minus sign distributes to EVERY term inside — both $2x$ and $4$ flip sign.",
      skills: ["polynomial-operations", "combining-like-terms"]
    },
    {
      id: 4,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "The function $f$ is defined by $f(x) = 4x + 9$. For what value of $x$ does $f(x) = 37$?",
      choices: [
        { id: "A", text: "$7$" },
        // distractor: divides 37 by 4 without first subtracting 9
        { id: "B", text: "$\\dfrac{37}{4}$" },
        // distractor: adds 9 to 37 instead of subtracting, then divides
        { id: "C", text: "$\\dfrac{23}{2}$" },
        // distractor: repeats the output value instead of solving for the input
        { id: "D", text: "$37$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Function Equation — Solve for Input**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Set the rule equal to $37$: $4x + 9 = 37 \\Rightarrow 4x = 28 \\Rightarrow x = 7$.\n\n**The Full Solution:**\nStep 1: $f(x) = 37$ means $4x + 9 = 37$.\nStep 2: Subtract $9$ from both sides: $4x = 28$.\nStep 3: Divide by $4$: $x = 7$.\n\nCheck: $f(7) = 4(7) + 9 = 28 + 9 = 37$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{37}{4}$): divides $37$ by $4$ without first subtracting the $9$.\n* Choice C ($\\frac{23}{2}$): adds $9$ to $37$ instead of subtracting, computing $\\frac{46}{4}$.\n* Choice D ($37$): repeats the output value instead of solving for the input.\n\n**Test Day Takeaway:** Given $f(x) =$ a value and asked for $x$, set the rule equal to that value and undo the operations in reverse order — constant first, coefficient second.",
      skills: ["function-evaluation", "function-notation"]
    },
    {
      id: 5,
      type: "fill-in",
      difficulty: "medium",
      band: 4,
      question: "A line in the $xy$-plane has slope $4$ and passes through the point $(0, -5)$. What is the value of $y$ when $x = 6$?",
      correctAnswer: "19",
      explanation: "**SAT Pattern: Equation of a Line + Evaluate**\n\n**The correct answer is $19$.**\n\n**The Fast Way (~10s):** The point $(0, -5)$ is the $y$-intercept, so $y = 4x - 5$. At $x = 6$: $y = 4(6) - 5 = 19$.\n\n**The Full Solution:**\nStep 1: Slope $m = 4$, and the line passes through $(0, -5)$, so $b = -5$.\nStep 2: The line is $y = 4x - 5$.\nStep 3: Evaluate at $x = 6$: $y = 4(6) - 5 = 24 - 5 = 19$.\n\n**Common Mistakes:** Dropping the negative on the intercept and getting $24 + 5 = 29$; or adding instead of multiplying the slope, getting $4 + 6 - 5 = 5$.\n\n**Test Day Takeaway:** A point of the form $(0, b)$ IS the $y$-intercept. Build $y = mx + b$, then substitute the requested $x$.",
      skills: ["slope-intercept-form", "linear-functions"]
    },
    {
      id: 6,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "In right triangle $PQR$ shown, angle $Q$ is the right angle, the hypotenuse $PR$ has length $26$, and side $PQ$ has length $10$. What is the length of side $QR$?",
      diagram: { type: "rightTriangle", params: {
        labels: ["P", "Q", "R"],
        sideLabels: ["10", "", "26"],
        rightAngleVertex: 1
      } },
      choices: [
        // distractor: subtracts the lengths directly (26 - 10) without squaring
        { id: "A", text: "$16$" },
        { id: "B", text: "$24$" },
        // distractor: adds the squares instead of subtracting
        { id: "C", text: "$\\sqrt{776}$" },
        // distractor: stops at QR^2 = 576 and forgets the square root
        { id: "D", text: "$576$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Pythagorean Theorem (5-12-13 Triple)**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $26$ and $10$ are $2 \\times 13$ and $2 \\times 5$, so this is the $5$-$12$-$13$ triple doubled: the missing leg is $2 \\times 12 = 24$.\n\n**The Full Solution:**\nStep 1: Use $a^2 + b^2 = c^2$ with hypotenuse $c = 26$ and leg $a = 10$.\nStep 2: $10^2 + b^2 = 26^2 \\Rightarrow 100 + b^2 = 676$.\nStep 3: $b^2 = 576 \\Rightarrow b = 24$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($16$): subtracts the lengths directly ($26 - 10$) — the theorem relates SQUARES of sides.\n* Choice C ($\\sqrt{776}$): adds the squares ($676 + 100$) instead of subtracting — but $26$ is already the hypotenuse.\n* Choice D ($576$): stops at $b^2 = 576$ and forgets the square root.\n\n**Test Day Takeaway:** When the hypotenuse is given, a leg is $\\sqrt{c^2 - a^2}$. Spot scaled triples: $10$-$24$-$26$ is $5$-$12$-$13$ doubled.",
      skills: ["pythagorean-theorem", "right-triangles"]
    },
    {
      id: 7,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The dot plot shows the number of goals a field-hockey team scored in each of its $10$ games this season. What is the median number of goals scored?",
      diagram: { type: "dotPlot", params: {
        data: [
          { value: 1, count: 1 },
          { value: 2, count: 2 },
          { value: 3, count: 2 },
          { value: 4, count: 3 },
          { value: 5, count: 1 },
          { value: 6, count: 1 }
        ],
        xMin: 0, xMax: 7,
        xLabel: "Number of goals"
      } },
      choices: [
        // distractor: takes only the 5th ordered value instead of averaging the middle two
        { id: "A", text: "$3$" },
        // distractor: computes the mean (34 / 10) instead of the median
        { id: "B", text: "$3.4$" },
        { id: "C", text: "$3.5$" },
        // distractor: reports the mode (the value with the most dots)
        { id: "D", text: "$4$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Median for Even-Count Data Set**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** With $10$ values, the median averages the $5$th and $6$th. Counting dots left to right: positions $1$-$5$ end at a $3$, position $6$ lands on a $4$. Median $= \\frac{3 + 4}{2} = 3.5$.\n\n**The Full Solution:**\nStep 1: The ordered data are $1, 2, 2, 3, 3, 4, 4, 4, 5, 6$ — an even count of $10$.\nStep 2: For an even count, the median is the average of the two middle values, the $5$th and $6$th: $3$ and $4$.\nStep 3: Median $= \\frac{3 + 4}{2} = 3.5$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): takes only the $5$th ordered value instead of averaging the middle two.\n* Choice B ($3.4$): computes the mean, $\\frac{34}{10}$ — close to the median here, but not what was asked.\n* Choice D ($4$): reports the mode — the tallest stack of dots — not the middle value.\n\n**Test Day Takeaway:** For an even count, the median is the average of the two middle values. Count dot-plot positions cumulatively; never grab the tallest stack.",
      skills: ["calculate-median", "statistics"]
    },
    {
      id: 8,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "What are the solutions to the equation $x^2 - 2x - 35 = 0$?",
      choices: [
        // distractor: uses the factoring numbers as the roots without flipping signs
        { id: "A", text: "$x = -7 \\text{ or } x = 5$" },
        // distractor: reads the coefficients -2 and -35 as the roots
        { id: "B", text: "$x = -2 \\text{ or } x = -35$" },
        // distractor: makes both roots positive, losing the sign on one factor
        { id: "C", text: "$x = 5 \\text{ or } x = 7$" },
        { id: "D", text: "$x = -5 \\text{ or } x = 7$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Find two numbers that multiply to $-35$ and add to $-2$: $-7$ and $5$. So $(x - 7)(x + 5) = 0$, giving $x = 7$ or $x = -5$.\n\n**The Full Solution:**\nStep 1: For $x^2 + bx + c$, find two numbers with product $c = -35$ and sum $b = -2$: these are $-7$ and $5$.\nStep 2: Factor: $x^2 - 2x - 35 = (x - 7)(x + 5) = 0$.\nStep 3: Set each factor to zero: $x = 7$ or $x = -5$.\n\nCheck: $7^2 - 2(7) - 35 = 49 - 14 - 35 = 0$. $\\checkmark$ And $(-5)^2 - 2(-5) - 35 = 25 + 10 - 35 = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x = -7$ or $x = 5$): uses the two factoring numbers directly as roots instead of their opposites.\n* Choice B ($x = -2$ or $x = -35$): reads the coefficients $b$ and $c$ as if they were the roots.\n* Choice C ($x = 5$ or $x = 7$): makes both roots positive, losing the sign on one factor.\n\n**Test Day Takeaway:** To factor $x^2 + bx + c$, find two numbers with product $c$ and sum $b$. The roots are the OPPOSITES of those numbers — always verify one by substitution.",
      skills: ["finding-roots-factoring", "quadratic-equations"]
    },
    {
      id: 9,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A rain barrel holds $64$ liters of water when full. If the barrel is currently $\\dfrac{3}{8}$ full, how many liters of water are in the barrel?",
      correctAnswer: "24",
      explanation: "**SAT Pattern: Fraction of a Whole**\n\n**The correct answer is $24$.**\n\n**The Fast Way (~5s):** $\\frac{3}{8}$ of $64$ is $\\frac{3 \\cdot 64}{8} = \\frac{192}{8} = 24$ liters.\n\n**The Full Solution:**\nStep 1: \"Fraction of a quantity\" means multiply: $\\frac{3}{8} \\times 64$.\nStep 2: Divide $64$ by $8$ first: $\\frac{64}{8} = 8$ liters per eighth.\nStep 3: Multiply by the numerator: $3 \\cdot 8 = 24$ liters.\n\n**Common Mistakes:** Computing $\\frac{64}{3} \\approx 21.3$ by treating the numerator as a divisor; or finding the EMPTY portion, $\\frac{5}{8} \\cdot 64 = 40$, instead of the filled portion.\n\n**Test Day Takeaway:** \"Fraction of a quantity\" $=$ fraction $\\times$ quantity. Divide by the denominator first for cleaner arithmetic.",
      skills: ["fractions", "ratios"]
    },
    {
      id: 10,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A line passes through the points $(1, -2)$ and $(4, 10)$. What is the equation of the line in slope-intercept form?",
      choices: [
        // distractor: flips the slope sign and patches the intercept to fit the first point
        { id: "A", text: "$y = -4x + 2$" },
        // distractor: uses the first point's y-value as the intercept without solving
        { id: "B", text: "$y = 4x - 2$" },
        { id: "C", text: "$y = 4x - 6$" },
        // distractor: uses the second point's y-value as the intercept
        { id: "D", text: "$y = 4x + 10$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Equation of a Line from Two Points**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Slope $= \\frac{10 - (-2)}{4 - 1} = \\frac{12}{3} = 4$. Using $(1, -2)$: $-2 = 4(1) + b$, so $b = -6$ and $y = 4x - 6$.\n\n**The Full Solution:**\nStep 1: Slope $m = \\frac{10 - (-2)}{4 - 1} = \\frac{12}{3} = 4$.\nStep 2: Substitute $(1, -2)$ into $y = 4x + b$: $-2 = 4 + b$, so $b = -6$.\nStep 3: The equation is $y = 4x - 6$.\n\nCheck at $x = 4$: $y = 4(4) - 6 = 10$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -4x + 2$): flips the slope's sign, then forces an intercept through the first point.\n* Choice B ($y = 4x - 2$): drops the first point's $y$-value into the intercept slot without solving for $b$.\n* Choice D ($y = 4x + 10$): uses the second point's $y$-value as the intercept.\n\n**Test Day Takeaway:** The intercept is $b = y_0 - m x_0$, never a raw $y$-value from a point. Confirm with the OTHER point before choosing.",
      skills: ["equation-of-line", "linear-functions"]
    },
    {
      id: 11,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A drawer contains $6$ gray socks, $9$ navy socks, and $5$ white socks. If one sock is selected at random, what is the probability that it is NOT navy?",
      choices: [
        // distractor: gives the probability that the sock IS navy
        { id: "A", text: "$\\dfrac{9}{20}$" },
        { id: "B", text: "$\\dfrac{11}{20}$" },
        // distractor: divides the navy count by the non-navy count
        { id: "C", text: "$\\dfrac{9}{11}$" },
        // distractor: inverts the ratio, giving a value greater than 1
        { id: "D", text: "$\\dfrac{11}{9}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Complement Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Total $= 6 + 9 + 5 = 20$. Not navy $= 6 + 5 = 11$. So $P = \\frac{11}{20}$.\n\n**The Full Solution:**\nStep 1 (direct): \"Not navy\" means gray or white: $6 + 5 = 11$ socks out of $20$ total.\nStep 2: $P(\\text{not navy}) = \\frac{11}{20}$.\n\nBy complement: $P(\\text{navy}) = \\frac{9}{20}$, so $P(\\text{not navy}) = 1 - \\frac{9}{20} = \\frac{11}{20}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{9}{20}$): gives the probability the sock IS navy — the complement was never taken.\n* Choice C ($\\frac{9}{11}$): divides the navy count by the non-navy count instead of by the total.\n* Choice D ($\\frac{11}{9}$): inverts that ratio — a probability can never exceed $1$.\n\n**Test Day Takeaway:** $P(\\text{not } A) = 1 - P(A)$, and every probability's denominator is the TOTAL count. Anything above $1$ is an automatic wrong answer.",
      skills: ["probability-basics", "complement"]
    },
    {
      id: 12,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A rectangular garden plot has a length of $24$ meters and a width of $7$ meters. What is the length, in meters, of the diagonal of the plot?",
      correctAnswer: "25",
      explanation: "**SAT Pattern: Pythagorean Theorem on a Rectangle**\n\n**The correct answer is $25$.**\n\n**The Fast Way (~5s):** The diagonal is the hypotenuse of a $7$-$24$-$25$ right triangle, so it is $25$.\n\n**The Full Solution:**\nStep 1: The diagonal splits the rectangle into two right triangles whose legs are the length and width.\nStep 2: $d^2 = 24^2 + 7^2 = 576 + 49 = 625$.\nStep 3: $d = \\sqrt{625} = 25$ meters.\n\n**Common Mistakes:** Adding the sides directly ($24 + 7 = 31$); computing the perimeter ($2(24) + 2(7) = 62$); or computing the area ($24 \\cdot 7 = 168$).\n\n**Test Day Takeaway:** A rectangle's diagonal is $\\sqrt{\\ell^2 + w^2}$. Keep the triples handy: $3$-$4$-$5$, $5$-$12$-$13$, $7$-$24$-$25$, $8$-$15$-$17$.",
      skills: ["pythagorean-theorem", "rectangles"]
    },
    {
      id: 13,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "What is the solution $(x, y)$ to the system of equations $y = x - 3$ and $4x + y = 27$?",
      choices: [
        // distractor: swaps the coordinates
        { id: "A", text: "$(3, 6)$" },
        // distractor: divides 27 by 4, ignoring the y-term entirely
        { id: "B", text: "$\\left(\\dfrac{27}{4}, \\dfrac{15}{4}\\right)$" },
        { id: "C", text: "$(6, 3)$" },
        // distractor: reads the constants 27 and -3 straight off as coordinates
        { id: "D", text: "$(27, -3)$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The first equation already gives $y = x - 3$, so drop it into the second: $4x + (x - 3) = 27 \\Rightarrow 5x = 30 \\Rightarrow x = 6$, and $y = 6 - 3 = 3$. The solution is $(6, 3)$.\n\n**The Full Solution:**\nStep 1: Substitute $y = x - 3$ into $4x + y = 27$: $4x + (x - 3) = 27$.\nStep 2: Combine and solve: $5x - 3 = 27 \\Rightarrow 5x = 30 \\Rightarrow x = 6$.\nStep 3: Back-substitute: $y = 6 - 3 = 3$. Check: $4(6) + 3 = 27$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(3, 6)$): the right two numbers in swapped slots — $x$ and $y$ reversed.\n* Choice B ($\\left(\\frac{27}{4}, \\frac{15}{4}\\right)$): divides $27$ by $4$ as if the $y$-term were absent.\n* Choice D ($(27, -3)$): reads the right-hand constants straight off as coordinates instead of solving.\n\n**Test Day Takeaway:** When one equation is already solved for a variable, substitute that whole expression into the other equation — then back-substitute and confirm both equations hold.",
      skills: ["substitution-method", "systems-of-equations"]
    },
    {
      id: 14,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The amount of a pain-relief compound in a patient's bloodstream halves every $6$ hours. If the initial dose is $400$ milligrams, which expression gives the amount, in milligrams, remaining after $t$ hours?",
      choices: [
        // distractor: models linear decay, subtracting a fixed amount each hour
        { id: "A", text: "$400 - \\dfrac{t}{6}$" },
        // distractor: multiplies the exponent by 6, halving every 1/6 hour
        { id: "B", text: "$400 \\cdot \\left(\\dfrac{1}{2}\\right)^{6t}$" },
        { id: "C", text: "$400 \\cdot \\left(\\dfrac{1}{2}\\right)^{\\frac{t}{6}}$" },
        // distractor: uses base 2, which doubles the amount instead of halving it
        { id: "D", text: "$400 \\cdot 2^{\\frac{t}{6}}$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Exponential Decay with Half-Life**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Halving every $6$ hours means multiply by $\\frac{1}{2}$ once per $6$-hour period, so the exponent counts periods: $400\\left(\\frac{1}{2}\\right)^{\\frac{t}{6}}$.\n\n**The Full Solution:**\nStep 1: Half-life decay has the form $A(t) = A_0\\left(\\frac{1}{2}\\right)^{\\frac{t}{d}}$, where $A_0$ is the starting amount and $d$ is the half-life.\nStep 2: Here $A_0 = 400$ and $d = 6$, giving $400\\left(\\frac{1}{2}\\right)^{\\frac{t}{6}}$.\nStep 3: Sanity check: $t = 0 \\Rightarrow 400$; $t = 6 \\Rightarrow 200$; $t = 12 \\Rightarrow 100$ — halving every $6$ hours. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($400 - \\frac{t}{6}$): models linear decay, subtracting a fixed amount instead of repeatedly halving.\n* Choice B ($400(\\frac{1}{2})^{6t}$): multiplies the exponent by $6$, which halves every $\\frac{1}{6}$ hour — far too fast.\n* Choice D ($400 \\cdot 2^{\\frac{t}{6}}$): uses base $2$, which DOUBLES the amount every $6$ hours.\n\n**Test Day Takeaway:** A half-life of $d$ units means the exponent is $\\frac{t}{d}$ — elapsed time DIVIDED by the half-life, with base $\\frac{1}{2}$.",
      skills: ["exponential-growth-decay", "exponent-laws"]
    },
    {
      id: 15,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "In a right triangle, the side opposite acute angle $\\theta$ has length $40$ and the side adjacent to $\\theta$ has length $9$. What is the value of $\\tan(\\theta)$?",
      choices: [
        // distractor: adjacent over hypotenuse — that is cos, not tan
        { id: "A", text: "$\\dfrac{9}{41}$" },
        // distractor: inverts the tangent ratio (adjacent over opposite)
        { id: "B", text: "$\\dfrac{9}{40}$" },
        // distractor: opposite over hypotenuse — that is sin, not tan
        { id: "C", text: "$\\dfrac{40}{41}$" },
        { id: "D", text: "$\\dfrac{40}{9}$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: SOH-CAH-TOA — Tangent in a 9-40-41 Triangle**\n\n**Choice D is correct.**\n\n**The Fast Way (~5s):** Tangent is opposite over adjacent, so $\\tan(\\theta) = \\frac{40}{9}$.\n\n**The Full Solution:**\nStep 1: For an acute angle, $\\tan(\\theta) = \\frac{\\text{opposite}}{\\text{adjacent}}$.\nStep 2: The side opposite $\\theta$ is $40$ and the side adjacent is $9$, so $\\tan(\\theta) = \\frac{40}{9}$.\nStep 3: The hypotenuse, if needed, would be $\\sqrt{40^2 + 9^2} = \\sqrt{1681} = 41$ — the $9$-$40$-$41$ triple — but tangent never uses it.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{9}{41}$): adjacent over hypotenuse — that is $\\cos\\theta$.\n* Choice B ($\\frac{9}{40}$): flips the ratio, giving adjacent over opposite.\n* Choice C ($\\frac{40}{41}$): opposite over hypotenuse — that is $\\sin\\theta$.\n\n**Test Day Takeaway:** TOA: tangent is opposite over adjacent — legs only, never the hypotenuse. A tangent CAN exceed $1$ when the opposite leg is longer.",
      skills: ["soh-cah-toa", "right-triangles"]
    },
    {
      id: 16,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A warehouse conveyor moves $18$ crates per minute. How many crates does the conveyor move in $2$ hours and $20$ minutes?",
      correctAnswer: "2520",
      explanation: "**SAT Pattern: Rate × Time with Mixed Units**\n\n**The correct answer is $2520$.**\n\n**The Fast Way (~10s):** Convert the time to minutes: $2$ hr $20$ min $= 140$ min. Then crates $= 18 \\times 140 = 2{,}520$.\n\n**The Full Solution:**\nStep 1: Put the time in one unit. $2$ hours is $120$ minutes, so $2$ hr $20$ min $= 120 + 20 = 140$ minutes.\nStep 2: Multiply rate by time: $18 \\times 140 = 2{,}520$ crates.\n\n**Common Mistakes:** Reading $2$ hr $20$ min as $2.2$ hours; using only the $120$ minutes and getting $18 \\times 120 = 2{,}160$; or multiplying $18$ by $2.33$ without converting to minutes consistently.\n\n**Test Day Takeaway:** Convert every quantity to a single unit before multiplying. $2$ hr $20$ min $= 140$ min — then rate $\\times$ time.",
      skills: ["unit-conversion", "rate-conversion"]
    },
    {
      id: 17,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "If $6(x - 2) - 2x = 4x + 9$, how many solutions does the equation have?",
      choices: [
        { id: "A", text: "$0$" },
        // distractor: assumes every linear equation has exactly one solution
        { id: "B", text: "$1$" },
        // distractor: treats it like a quadratic, expecting two roots
        { id: "C", text: "$2$" },
        // distractor: confuses a contradiction with an identity
        { id: "D", text: "Infinitely many" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Identifying Identity / Contradiction Equations**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Distribute the left side: $6x - 12 - 2x = 4x - 12$. The equation becomes $4x - 12 = 4x + 9$ — same $x$-term, different constants — so no value of $x$ can work.\n\n**The Full Solution:**\nStep 1: Expand: $6(x - 2) - 2x = 6x - 12 - 2x = 4x - 12$.\nStep 2: The equation becomes $4x - 12 = 4x + 9$.\nStep 3: Subtract $4x$ from both sides: $-12 = 9$. This is false for every $x$, so the equation has no solutions.\n\n**Why the wrong answers are tempting:**\n* Choice B ($1$): assumes any linear equation must have exactly one solution — only true when the $x$-coefficients differ.\n* Choice C ($2$): expects two roots as if the equation were quadratic.\n* Choice D (infinitely many): confuses a contradiction ($-12 = 9$) with an identity, which is what infinitely many solutions requires.\n\n**Test Day Takeaway:** Simplify both sides fully. Matching $x$-terms with DIFFERENT constants means no solution; identical sides mean infinitely many.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 18,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "A circle in the $xy$-plane has center $(3, -1)$ and passes through the point $(9, 7)$. What is the radius of the circle?",
      correctAnswer: "10",
      explanation: "**SAT Pattern: Distance from Center as Radius**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~10s):** The radius is the distance from $(3, -1)$ to $(9, 7)$: legs $6$ and $8$, so $r = 10$ (a $6$-$8$-$10$ triangle).\n\n**The Full Solution:**\nStep 1: The radius is the distance from the center to any point on the circle: $r = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.\nStep 2: $r = \\sqrt{(9 - 3)^2 + (7 - (-1))^2} = \\sqrt{6^2 + 8^2}$.\nStep 3: $r = \\sqrt{36 + 64} = \\sqrt{100} = 10$.\n\n**Common Mistakes:** Computing $7 - 1 = 6$ instead of $7 - (-1) = 8$ — the double negative; adding the coordinate differences without squaring ($6 + 8 = 14$); or reporting $r^2 = 100$ instead of $r = 10$.\n\n**Test Day Takeaway:** Radius $=$ distance from center to any point on the circle. Handle negative coordinates with parentheses: $7 - (-1) = 8$.",
      skills: ["distance-formula", "circles"]
    },
    {
      id: 19,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "If $g(x) = x^2 - 7x + 3$, what is the value of $g(-4)$?",
      choices: [
        // distractor: squares to -16 AND keeps -7(-4) as -28
        { id: "A", text: "$-41$" },
        // distractor: computes -7(-4) as -28 instead of +28
        { id: "B", text: "$-9$" },
        // distractor: forgets to add the constant 3
        { id: "C", text: "$44$" },
        { id: "D", text: "$47$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Plug in $x = -4$: $(-4)^2 - 7(-4) + 3 = 16 + 28 + 3 = 47$.\n\n**The Full Solution:**\nStep 1: Substitute $x = -4$ into $g(x) = x^2 - 7x + 3$: $g(-4) = (-4)^2 - 7(-4) + 3$.\nStep 2: Evaluate each term: $(-4)^2 = 16$ and $-7(-4) = +28$.\nStep 3: Combine: $16 + 28 + 3 = 47$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-41$): takes $(-4)^2$ as $-16$ AND mishandles $-7(-4)$ as $-28$: $-16 - 28 + 3$.\n* Choice B ($-9$): computes $-7(-4)$ as $-28$ instead of $+28$: $16 - 28 + 3$.\n* Choice C ($44$): gets both signs right but forgets the constant $+3$.\n\n**Test Day Takeaway:** Substitute negatives inside parentheses: $(-a)^2 = a^2$, and a negative coefficient times a negative input turns POSITIVE.",
      skills: ["function-evaluation", "function-notation"]
    },
    {
      id: 20,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "A line in the $xy$-plane is parallel to the line $y = -3x + 4$ and passes through the point $(2, 5)$. What is the equation of the line?",
      choices: [
        // distractor: keeps the original line, which does not pass through (2, 5)
        { id: "A", text: "$y = -3x + 4$" },
        // distractor: drops the point's y-value into the intercept slot without solving
        { id: "B", text: "$y = -3x + 5$" },
        { id: "C", text: "$y = -3x + 11$" },
        // distractor: uses the perpendicular slope 1/3 with the point's y-value as intercept
        { id: "D", text: "$y = \\dfrac{1}{3}x + 5$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Parallel lines share the slope $-3$. Plug $(2, 5)$ into $y = -3x + b$: $5 = -6 + b \\Rightarrow b = 11$, so $y = -3x + 11$.\n\n**The Full Solution:**\nStep 1: A line parallel to $y = -3x + 4$ has the same slope, $m = -3$.\nStep 2: Use $y = mx + b$ with the point $(2, 5)$: $5 = -3(2) + b$, so $b = 5 + 6 = 11$.\nStep 3: The equation is $y = -3x + 11$. Check: at $x = 2$, $-6 + 11 = 5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -3x + 4$): the original line — it has the right slope but passes through $(2, -2)$, not $(2, 5)$.\n* Choice B ($y = -3x + 5$): drops the point's $y$-value straight into the intercept slot without solving for $b$.\n* Choice D ($y = \\frac{1}{3}x + 5$): uses the PERPENDICULAR slope instead of the parallel one.\n\n**Test Day Takeaway:** Parallel means identical slope. Keep $m$, substitute the given point, and solve for the new intercept — never reuse the old $b$.",
      skills: ["parallel-line-slope", "writing-parallel-equation"]
    },
    {
      id: 21,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "The scatterplot shows the outside temperature $x$, in degrees Celsius, and a greenhouse's daily heating cost $y$, in dollars, on each of $9$ days, along with the line of best fit $\\hat{y} = -4x + 90$. Based on the model, by how many dollars does the predicted daily heating cost decrease for each $1°\\text{C}$ increase in outside temperature?",
      diagram: { type: "scatterplot", params: {
        points: [[0, 92], [2, 80], [4, 76], [6, 66], [8, 57], [10, 52], [12, 40], [14, 36], [16, 25]],
        xMin: 0, xMax: 18, yMin: 0, yMax: 100,
        xGridStep: 2, xLabelStep: 4, yGridStep: 10, yLabelStep: 20,
        bestFitLine: { slope: -4, intercept: 90 },
        xLabel: "Outside temperature (°C)", yLabel: "Daily heating cost ($)",
      } },
      correctAnswer: "4",
      explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~5s):** In $\\hat{y} = -4x + 90$, the slope $-4$ is the predicted change in cost per $1°\\text{C}$ rise — a DECREASE of $\\$4$, so the answer is $4$.\n\n**The Full Solution:**\nStep 1: In a linear model $\\hat{y} = mx + b$, the slope $m$ is the predicted change in $y$ for each one-unit increase in $x$.\nStep 2: Here $m = -4$: each $1°\\text{C}$ increase in outside temperature predicts a $\\$4$ DROP in daily heating cost.\nStep 3: The question asks for the size of the decrease, so the answer is $4$.\n\n**Common Mistakes:** Reporting $90$ (the intercept — the predicted cost at $0°\\text{C}$); answering $-4$ when the stem already says \"decrease\" and wants the magnitude; or reading a change from two plotted points instead of from the model.\n\n**Test Day Takeaway:** \"How much does $y$ change per one unit of $x$\" is always the slope. When the stem builds the direction into the sentence, grid the MAGNITUDE.",
      skills: ["scatterplots", "linear-functions"]
    },
    {
      id: 22,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "The table summarizes the $160$ vehicles a car wash serviced over one weekend, classified by day and by vehicle type. If one of the $160$ vehicles is selected at random, what is the probability that it is an SUV serviced on Sunday?",
      diagram: {
        type: "twoWayTable",
        params: {
          headers: ["", "Sedan", "SUV", "Total"],
          rows: [
            ["Saturday", "42", "28", "70"],
            ["Sunday", "48", "42", "90"],
            ["Total", "90", "70", "160"]
          ]
        }
      },
      choices: [
        { id: "A", text: "$\\dfrac{42}{160}$" },
        // distractor: divides by the Sunday total — answers "given it was Sunday"
        { id: "B", text: "$\\dfrac{42}{90}$" },
        // distractor: gives the probability of a Sunday vehicle of any type
        { id: "C", text: "$\\dfrac{90}{160}$" },
        // distractor: divides by the SUV total — answers "given it is an SUV"
        { id: "D", text: "$\\dfrac{42}{70}$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Joint Probability from Two-Way Table**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** \"Selected at random from all $160$\" makes the denominator the grand total $160$; Sunday SUVs number $42$. Probability $= \\frac{42}{160}$.\n\n**The Full Solution:**\nStep 1: Selecting from the entire pool of $160$ vehicles makes this a joint probability, so the denominator is the grand total $160$.\nStep 2: The favorable count is the Sunday-and-SUV cell: $42$.\nStep 3: Probability $= \\frac{42}{160} = \\frac{21}{80}$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{42}{90}$): divides by the Sunday total — that answers \"given the vehicle was serviced Sunday.\"\n* Choice C ($\\frac{90}{160}$): gives the probability of a Sunday vehicle of ANY type, ignoring the SUV condition.\n* Choice D ($\\frac{42}{70}$): divides by the SUV total — that answers \"given the vehicle is an SUV.\"\n\n**Test Day Takeaway:** \"Random from all\" means a joint probability over the grand total. Only \"given\" or \"of the\" narrows the denominator to a row or column total.",
      skills: ["two-way-table", "joint-probability"]
    }
  ]
};

export default practiceTest4M2Easy;
