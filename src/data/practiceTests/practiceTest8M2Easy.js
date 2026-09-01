// Practice Test 8 — Math Module 2 Easy variant (22 questions)
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
      question: "What is $30\\%$ of $140$?",
      correctAnswer: "42",
      explanation: "**SAT Pattern: Percent of a Number**\n\n**The correct answer is $42$.**\n\n**The Fast Way (~5s):** $10\\%$ of $140$ is $14$, so $30\\%$ is $3 \\times 14 = 42$.\n\n**The Full Solution:**\nStep 1: Convert the percent to a decimal: $30\\% = 0.30$.\nStep 2: Multiply by the number: $0.30 \\cdot 140 = 42$.\n\n**Common Mistakes:** Forgetting to convert and computing $30 \\cdot 140 = 4200$; dividing instead of multiplying and getting $140 \\div 30 \\approx 4.7$.\n\n**Test Day Takeaway:** \"Percent of a number\" means multiply: turn $X\\%$ into $\\frac{X}{100}$ (or shift the decimal two places left), then multiply.",
      skills: ["percent-of-value", "percents"]
    },
    {
      id: 2,
      type: "multiple-choice",
      difficulty: "easy",
      band: 2,
      question: "Which value of $p$ is the solution of the equation $5p = 4p + 9$?",
      choices: [
        // distractor: sign slip when moving the 4p across the equals sign
        { id: "A", text: "$-9$" },
        // distractor: ignores the 4p and solves 5p = 9
        { id: "B", text: "$\\dfrac{9}{5}$" },
        { id: "C", text: "$9$" },
        // distractor: multiplies 9 by 4 instead of isolating p
        { id: "D", text: "$36$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Variable on Both Sides**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Subtract $4p$ from both sides: $5p - 4p = 9$, so $p = 9$.\n\n**The Full Solution:**\nStep 1: The variable appears on both sides, so gather it on one side. Subtract $4p$ from both sides of $5p = 4p + 9$.\nStep 2: $5p - 4p = 9 \\Rightarrow p = 9$.\nStep 3: Check: $5(9) = 45$ and $4(9) + 9 = 45$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-9$): flips the sign while moving the $4p$ across the equals sign.\n* Choice B ($\\frac{9}{5}$): ignores the $4p$ on the right and solves $5p = 9$.\n* Choice D ($36$): multiplies $9$ by $4$, combining the wrong pieces.\n\n**Test Day Takeaway:** When the variable shows up on both sides, subtract to collect it on one side first — only then divide.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 3,
      type: "multiple-choice",
      difficulty: "easy",
      band: 3,
      question: "The dot plot shows the number of hours each student in a class practiced an instrument last week. How many students are represented in the dot plot?",
      diagram: {
        type: "dotPlot",
        params: {
          data: [
            { value: 0, count: 1 },
            { value: 1, count: 3 },
            { value: 2, count: 4 },
            { value: 3, count: 2 },
            { value: 4, count: 2 }
          ],
          xLabel: "Hours practiced",
          xMin: 0,
          xMax: 5
        }
      },
      choices: [
        // distractor: the tallest stack of dots, not the total
        { id: "A", text: "$4$" },
        // distractor: the number of different values on the axis
        { id: "B", text: "$5$" },
        // distractor: leaves out one of the stacks when counting
        { id: "C", text: "$10$" },
        { id: "D", text: "$12$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Counting Values in a Data Set**\n\n**Choice D is correct.**\n\n**The Fast Way (~5s):** Each dot is one student. Add the stacks: $1 + 3 + 4 + 2 + 2 = 12$.\n\n**The Full Solution:**\nStep 1: In a dot plot, every dot stands for one data value — here, one student.\nStep 2: Count the dots above each number: $1$ dot at $0$, $3$ dots at $1$, $4$ dots at $2$, $2$ dots at $3$, $2$ dots at $4$.\nStep 3: Total: $1 + 3 + 4 + 2 + 2 = 12$ students.\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): the height of the tallest stack, not the total number of dots.\n* Choice B ($5$): the number of different values on the axis, not the number of students.\n* Choice C ($10$): a miscount that skips one of the stacks.\n\n**Test Day Takeaway:** In a dot plot, the number of data values is the TOTAL count of dots — add every stack, including the short ones.",
      skills: ["statistics"]
    },
    {
      id: 4,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "A garden center sells a greenhouse ventilation fan for $\\$180$. During a clearance sale, the price is reduced by $35\\%$. What is the sale price of the fan, in dollars?",
      choices: [
        // distractor: reports the discount amount, not the new price
        { id: "A", text: "$\\$63$" },
        { id: "B", text: "$\\$117$" },
        // distractor: subtracts $35 instead of 35% of the price
        { id: "C", text: "$\\$145$" },
        // distractor: adds the discount instead of subtracting it
        { id: "D", text: "$\\$243$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Percent Discount**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** A $35\\%$ discount means you pay $65\\%$: $0.65 \\cdot 180 = 117$, so the sale price is $\\$117$.\n\n**The Full Solution:**\nStep 1: The discount is $35\\%$ of $\\$180$: $0.35 \\cdot 180 = 63$ dollars.\nStep 2: Subtract from the original: $180 - 63 = 117$, so the sale price is $\\$117$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$63$): the discount amount itself, not the price after the discount.\n* Choice C ($\\$145$): subtracts a flat $\\$35$ instead of $35\\%$ of the price.\n* Choice D ($\\$243$): adds the discount instead of subtracting it.\n\n**Test Day Takeaway:** For a discount, pay $(100 - X)\\%$ of the original; for a markup, pay $(100 + X)\\%$. One multiplication by the right decimal beats the two-step subtraction.",
      skills: ["percent-word-problems", "percents"]
    },
    {
      id: 5,
      type: "fill-in",
      difficulty: "medium",
      band: 4,
      question: "Three times a number, increased by $8$, is equal to the number increased by $22$. What is the number?",
      correctAnswer: "7",
      explanation: "**SAT Pattern: Translating a Sentence with the Variable on Both Sides**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~10s):** Translate: $3n + 8 = n + 22$. Subtract $n$ and $8$: $2n = 14$, so $n = 7$.\n\n**The Full Solution:**\nStep 1: Let $n$ be the number. \"Three times a number, increased by $8$\" is $3n + 8$; \"the number increased by $22$\" is $n + 22$.\nStep 2: Set them equal: $3n + 8 = n + 22$.\nStep 3: Subtract $n$ from both sides: $2n + 8 = 22$, then subtract $8$: $2n = 14$, so $n = 7$.\nStep 4: Check: $3(7) + 8 = 29$ and $7 + 22 = 29$. $\\checkmark$\n\n**Common Mistakes:** Translating \"three times a number, increased by $8$\" as $3(n + 8)$ — the comma means the tripling happens first; combining $8$ and $22$ by addition to get $2n = 30$.\n\n**Test Day Takeaway:** Translate phrase by phrase in order. \"Three times a number, increased by $8$\" is $3n + 8$, not $3(n + 8)$.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 6,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "A triangle has a base of length $16$ and an area of $56$. What is the height of the triangle drawn to that base?",
      choices: [
        // distractor: forgets the 1/2 in the area formula — 56/16
        { id: "A", text: "$3.5$" },
        { id: "B", text: "$7$" },
        // distractor: doubles the correct height
        { id: "C", text: "$14$" },
        // distractor: subtracts the base from the area
        { id: "D", text: "$40$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Solving the Triangle Area Formula for Height**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $A = \\frac{1}{2}bh \\Rightarrow 56 = \\frac{1}{2}(16)h = 8h \\Rightarrow h = 7$.\n\n**The Full Solution:**\nStep 1: Start with the triangle area formula $A = \\frac{1}{2}bh$.\nStep 2: Substitute what is known: $56 = \\frac{1}{2}(16)h$, which simplifies to $56 = 8h$.\nStep 3: Divide by $8$: $h = 7$.\nStep 4: Check: $\\frac{1}{2}(16)(7) = 56$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3.5$): forgets the $\\frac{1}{2}$ and solves $16h = 56$.\n* Choice C ($14$): applies the $\\frac{1}{2}$ in the wrong direction, doubling instead of halving.\n* Choice D ($40$): subtracts the base from the area, $56 - 16$ — the formula multiplies, it never subtracts.\n\n**Test Day Takeaway:** Area formulas run backward too: substitute what you know into $A = \\frac{1}{2}bh$ and solve for the missing dimension.",
      skills: ["area", "triangles"]
    },
    {
      id: 7,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The dot plot shows the values in a data set. What is the median of the data set?",
      diagram: {
        type: "dotPlot",
        params: {
          data: [
            { value: 12, count: 1 },
            { value: 15, count: 2 },
            { value: 17, count: 1 },
            { value: 21, count: 1 },
            { value: 24, count: 1 },
            { value: 26, count: 1 }
          ],
          xMin: 10,
          xMax: 28
        }
      },
      choices: [
        // distractor: the range of the data (26 - 12), not the median
        { id: "A", text: "$14$" },
        // distractor: the mode (most frequent value), not the median
        { id: "B", text: "$15$" },
        { id: "C", text: "$17$" },
        // distractor: the mean of the set, to the nearest whole number
        { id: "D", text: "$19$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Median of an Odd-Sized Data Set**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The plot shows $7$ values in order: $12, 15, 15, 17, 21, 24, 26$. The median is the $4$th value: $17$.\n\n**The Full Solution:**\nStep 1: List the values from the dot plot in order: $12, 15, 15, 17, 21, 24, 26$ — that is $n = 7$ values.\nStep 2: For an odd count, the median sits at position $\\frac{7 + 1}{2} = 4$.\nStep 3: The $4$th value is $17$. Check: three values fall below ($12, 15, 15$) and three above ($21, 24, 26$). $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($14$): the range, $26 - 12$, not the middle value.\n* Choice B ($15$): the mode — it appears twice, but frequency is not position.\n* Choice D ($19$): the mean ($\\frac{130}{7} \\approx 18.6$, rounded); the outlying high values pull it above the median.\n\n**Test Day Takeaway:** For an odd-length ordered list, the median is the $\\frac{n+1}{2}$th value. Read a dot plot left to right — it is already sorted for you.",
      skills: ["find-median", "statistics"]
    },
    {
      id: 8,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A line in the $xy$-plane has slope $3$ and passes through the point $(2, -5)$. Which of the following is the equation of the line?",
      choices: [
        { id: "A", text: "$y = 3x - 11$" },
        // distractor: uses the point's y-coordinate as the intercept
        { id: "B", text: "$y = 3x - 5$" },
        // distractor: adds 6 instead of subtracting when solving for b
        { id: "C", text: "$y = 3x + 1$" },
        // distractor: sign slip on the intercept
        { id: "D", text: "$y = 3x + 11$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Equation of a Line from Slope and Point**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Use $y = mx + b$ with $m = 3$ and $(2, -5)$: $-5 = 3(2) + b \\Rightarrow b = -11$, so $y = 3x - 11$.\n\n**The Full Solution:**\nStep 1: Start from $y = 3x + b$ and substitute the point $(2, -5)$: $-5 = 6 + b$.\nStep 2: Solve for the intercept: $b = -5 - 6 = -11$, giving $y = 3x - 11$. Check: $3(2) - 11 = -5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($y = 3x - 5$): drops the point's $y$-coordinate straight into the intercept slot without solving.\n* Choice C ($y = 3x + 1$): computes $-5 + 6$ instead of $-5 - 6$.\n* Choice D ($y = 3x + 11$): solves for $b$ correctly in size but flips the sign.\n\n**Test Day Takeaway:** Given slope and a point, plug the point into $y = mx + b$ and solve for $b$ — the point's $y$-value is NOT the intercept unless $x = 0$.",
      skills: ["slope-intercept-form", "linear-functions"]
    },
    {
      id: 9,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A package of trail mix weighs $72$ ounces. If $1$ pound equals $16$ ounces, how many pounds does the package weigh?",
      correctAnswer: "4.5",
      explanation: "**SAT Pattern: Unit Conversion**\n\n**The correct answer is $4.5$.**\n\n**The Fast Way (~5s):** Divide total ounces by ounces per pound: $\\frac{72}{16} = 4.5$ pounds.\n\n**The Full Solution:**\nStep 1: Set up the conversion so ounces cancel: $72 \\text{ oz} \\cdot \\frac{1 \\text{ lb}}{16 \\text{ oz}}$.\nStep 2: $\\frac{72}{16} = 4.5$ pounds.\n\n**Common Mistakes:** Multiplying $72 \\cdot 16 = 1{,}152$ by flipping the conversion factor; rounding $4.5$ down to $4$ when the answer is not a whole number.\n\n**Test Day Takeaway:** Arrange the conversion factor so the unit you start with cancels, leaving only the unit you want — and keep the decimal.",
      skills: ["unit-conversion"]
    },
    {
      id: 10,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "If $g(x) = 4x - 9$ and $g(c) = 23$, what is the value of $c$?",
      choices: [
        // distractor: subtracts 9 from 23 instead of adding
        { id: "A", text: "$3.5$" },
        // distractor: divides 23 by 4 without undoing the -9 first
        { id: "B", text: "$\\dfrac{23}{4}$" },
        { id: "C", text: "$8$" },
        // distractor: stops at 4c = 32 without dividing
        { id: "D", text: "$32$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Solving for the Input Given the Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Set $4c - 9 = 23$, so $4c = 32$ and $c = 8$.\n\n**The Full Solution:**\nStep 1: $g(c) = 23$ means $4c - 9 = 23$.\nStep 2: Add $9$: $4c = 32$. Divide by $4$: $c = 8$. Check: $g(8) = 4(8) - 9 = 23$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3.5$): subtracts $9$ from $23$ first ($4c = 14$), undoing the wrong operation.\n* Choice B ($\\frac{23}{4}$): divides by $4$ before dealing with the $-9$.\n* Choice D ($32$): stops at $4c = 32$ without dividing by $4$.\n\n**Test Day Takeaway:** When given the output, set the function equal to that value and undo the operations in reverse order: constant first, coefficient second.",
      skills: ["function-evaluation", "linear-equations"]
    },
    {
      id: 11,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A circle has a diameter of $18$. What is the area of the circle?",
      choices: [
        // distractor: multiplies the radius by pi without squaring
        { id: "A", text: "$9\\pi$" },
        // distractor: computes the circumference instead
        { id: "B", text: "$18\\pi$" },
        { id: "C", text: "$81\\pi$" },
        // distractor: squares the diameter instead of the radius
        { id: "D", text: "$324\\pi$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Area of a Circle**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Radius $= \\frac{18}{2} = 9$, so $A = \\pi r^2 = \\pi(9)^2 = 81\\pi$.\n\n**The Full Solution:**\nStep 1: The problem gives the DIAMETER. Halve it first: $r = \\frac{18}{2} = 9$.\nStep 2: Apply the area formula: $A = \\pi r^2 = \\pi (9)^2 = 81\\pi$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($9\\pi$): multiplies the radius by $\\pi$ without squaring it.\n* Choice B ($18\\pi$): the circumference $2\\pi r = \\pi d$, not the area.\n* Choice D ($324\\pi$): squares the full diameter: $\\pi(18)^2$.\n\n**Test Day Takeaway:** Area uses the RADIUS squared. When a problem hands you a diameter, halve it before doing anything else.",
      skills: ["circle-area", "circles"]
    },
    {
      id: 12,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "Which of the following is equivalent to $(x + 6)(x - 3)$?",
      choices: [
        // distractor: wrong sign when combining the cross terms
        { id: "A", text: "$x^2 - 3x - 18$" },
        { id: "B", text: "$x^2 + 3x - 18$" },
        // distractor: adds 6 + 3, ignoring the sign of the -3
        { id: "C", text: "$x^2 + 9x - 18$" },
        // distractor: drops the cross terms entirely
        { id: "D", text: "$x^2 - 18$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: FOIL — Multiplying Two Binomials**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** FOIL: $x^2 - 3x + 6x - 18 = x^2 + 3x - 18$.\n\n**The Full Solution:**\nStep 1: Multiply each pair — First $x \\cdot x = x^2$, Outer $x \\cdot (-3) = -3x$, Inner $6 \\cdot x = 6x$, Last $6 \\cdot (-3) = -18$.\nStep 2: Combine the middle terms: $-3x + 6x = 3x$, giving $x^2 + 3x - 18$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($x^2 - 3x - 18$): combines the middle terms with the wrong sign ($-6x + 3x$).\n* Choice C ($x^2 + 9x - 18$): adds $6 + 3$ for the middle coefficient, ignoring that the $3$ is negative.\n* Choice D ($x^2 - 18$): drops the cross terms entirely.\n\n**Test Day Takeaway:** FOIL produces four products; the middle coefficient is the SUM of the Outer and Inner terms — track those signs one at a time.",
      skills: ["distributive-property", "polynomial-operations"]
    },
    {
      id: 13,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The line $y = 4x + 6$ passes through the point $(a, 26)$. What is the value of $a$?",
      correctAnswer: "5",
      explanation: "**SAT Pattern: Finding x Given y on a Line**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~10s):** The point $(a, 26)$ has $y = 26$, so set $4a + 6 = 26$: $4a = 20$, $a = 5$.\n\n**The Full Solution:**\nStep 1: The point $(a, 26)$ lies on the line, so its coordinates satisfy $y = 4x + 6$. Here $x = a$ and $y = 26$.\nStep 2: Substitute: $26 = 4a + 6$.\nStep 3: Subtract $6$: $20 = 4a$. Divide by $4$: $a = 5$.\n\nCheck: at $x = 5$, $y = 4(5) + 6 = 26$. $\\checkmark$\n\n**Common Mistakes:** Plugging $26$ in for $x$ instead of $y$ gives $y = 4(26) + 6 = 110$ — the wrong coordinate. Adding $6$ instead of subtracting lands on $a = 8$.\n\n**Test Day Takeaway:** In a point $(a, b)$ on $y = f(x)$, the first coordinate is the $x$-value and the second is the $y$-value. Match them to the equation before solving.",
      skills: ["linear-functions", "function-evaluation"]
    },
    {
      id: 14,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "Which of the following is equivalent to $\\dfrac{x^9 \\cdot x^3}{x^4}$ for $x \\neq 0$?",
      choices: [
        // distractor: subtracts every exponent: 9 - 3 - 4
        { id: "A", text: "$x^{2}$" },
        // distractor: adds the top exponents, then divides by 4
        { id: "B", text: "$x^{3}$" },
        { id: "C", text: "$x^{8}$" },
        // distractor: stops at the numerator and ignores the denominator
        { id: "D", text: "$x^{12}$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Exponent Laws (Product and Quotient)**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Same base throughout, so combine the exponents: $9 + 3 - 4 = 8$. The answer is $x^8$.\n\n**The Full Solution:**\nStep 1: Product rule on the numerator: $x^9 \\cdot x^3 = x^{9+3} = x^{12}$.\nStep 2: Quotient rule with the denominator: $\\dfrac{x^{12}}{x^4} = x^{12-4} = x^8$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($x^2$): subtracts every exponent in sight, $9 - 3 - 4$ — the product rule ADDS.\n* Choice B ($x^3$): divides the exponent sum by $4$ instead of subtracting $4$.\n* Choice D ($x^{12}$): stops after the numerator and never divides by $x^4$.\n\n**Test Day Takeaway:** Same base: multiply $\\Rightarrow$ ADD exponents, divide $\\Rightarrow$ SUBTRACT exponents. Never multiply or divide the exponents themselves.",
      skills: ["exponent-laws", "exponent-rules"]
    },
    {
      id: 15,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "If $\\dfrac{m}{n} = \\dfrac{4}{7}$, what is the value of $\\dfrac{m - n}{n}$?",
      choices: [
        { id: "A", text: "$-\\dfrac{3}{7}$" },
        // distractor: drops the negative sign from the subtraction
        { id: "B", text: "$\\dfrac{3}{7}$" },
        // distractor: ignores the subtraction and reports the original ratio
        { id: "C", text: "$\\dfrac{4}{7}$" },
        // distractor: adds instead of subtracting
        { id: "D", text: "$\\dfrac{11}{7}$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Algebraic Manipulation of Ratios**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Split the fraction: $\\dfrac{m - n}{n} = \\dfrac{m}{n} - 1 = \\dfrac{4}{7} - 1 = -\\dfrac{3}{7}$.\n\n**The Full Solution:**\nStep 1: Break the single fraction into two: $\\dfrac{m - n}{n} = \\dfrac{m}{n} - \\dfrac{n}{n}$.\nStep 2: $\\dfrac{n}{n} = 1$ and $\\dfrac{m}{n} = \\dfrac{4}{7}$, so the value is $\\dfrac{4}{7} - 1 = \\dfrac{4}{7} - \\dfrac{7}{7} = -\\dfrac{3}{7}$.\n\nOr pick numbers: $m = 4$, $n = 7$ gives $\\dfrac{4 - 7}{7} = -\\dfrac{3}{7}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{3}{7}$): the right size but drops the sign — $m$ is SMALLER than $n$, so the result is negative.\n* Choice C ($\\frac{4}{7}$): forgets the subtraction and repeats the given ratio.\n* Choice D ($\\frac{11}{7}$): adds $1$ instead of subtracting, computing $\\frac{m + n}{n}$.\n\n**Test Day Takeaway:** Split fractions over a common denominator: $\\dfrac{p - q}{r} = \\dfrac{p}{r} - \\dfrac{q}{r}$. Or substitute numbers that fit the ratio and let arithmetic carry the sign.",
      skills: ["ratios", "proportions"]
    },
    {
      id: 16,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "An auditorium has $18$ rows with $25$ seats in each row. For a concert, $6\\%$ of the seats are reserved for performers' families. How many seats are reserved?",
      correctAnswer: "27",
      explanation: "**SAT Pattern: Multi-Step Percent**\n\n**The correct answer is $27$.**\n\n**The Fast Way (~10s):** Total seats $= 18 \\cdot 25 = 450$. Then $6\\%$ of $450 = 0.06 \\cdot 450 = 27$.\n\n**The Full Solution:**\nStep 1: Find the total number of seats: $18$ rows $\\times$ $25$ seats per row $= 450$.\nStep 2: Take $6\\%$ of that total: $0.06 \\cdot 450 = 27$ seats.\n\n**Common Mistakes:** Adding the dimensions ($18 + 25 = 43$) instead of multiplying; treating $6\\%$ as a flat $6$ seats rather than $0.06$ of the total.\n\n**Test Day Takeaway:** Two-step percents run in order: first build the total the percent acts on, then multiply by the decimal form of the percent.",
      skills: ["percent-of-value", "percents"]
    },
    {
      id: 17,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "The sum of two numbers is $45$, and one of the numbers is $8$ times the other. What is the larger of the two numbers?",
      choices: [
        // distractor: reports the smaller number
        { id: "A", text: "$5$" },
        // distractor: reports the difference of the two numbers
        { id: "B", text: "$35$" },
        // distractor: splits 45 in a 5:1 ratio instead of 8:1
        { id: "C", text: "$37.5$" },
        { id: "D", text: "$40$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Two-Variable Word Problem**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Let the smaller number be $x$; the larger is $8x$. Then $x + 8x = 45 \\Rightarrow 9x = 45 \\Rightarrow x = 5$, so the larger is $8(5) = 40$.\n\n**The Full Solution:**\nStep 1: Let $x$ be the smaller number. \"One number is $8$ times the other\" makes the larger $8x$.\nStep 2: Their sum is $45$: $x + 8x = 9x = 45$, so $x = 5$.\nStep 3: The larger number is $8x = 8(5) = 40$.\n\nCheck: $5 + 40 = 45$ and $40 = 8 \\cdot 5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): the smaller number — the question asks for the larger.\n* Choice B ($35$): the difference $40 - 5$, not either number.\n* Choice C ($37.5$): splits $45$ by a $5{:}1$ ratio, dividing by $6$ parts instead of $9$.\n\n**Test Day Takeaway:** Set the SMALLER quantity as $x$ so the multiple stays whole. \"$8$ times the other\" means the two parts total $9x$, not $8x$.",
      skills: ["word-problem-to-equation", "linear-equations"]
    },
    {
      id: 18,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "Triangle $GHJ$ is similar to triangle $PQR$, where $G$, $H$, and $J$ correspond to $P$, $Q$, and $R$, respectively. If $GH = 8$, $PQ = 20$, and $HJ = 10$, what is the length of $\\overline{QR}$?",
      diagram: {
        type: "similarTriangles",
        params: {
          triangle1: {
            labels: ["G", "H", "J"],
            sideLabels: ["8", "10", ""]
          },
          triangle2: {
            labels: ["P", "Q", "R"],
            sideLabels: ["20", "", ""]
          }
        }
      },
      choices: [
        // distractor: applies the scale factor upside down (10 * 8/20)
        { id: "A", text: "$4$" },
        // distractor: cross-multiplies mismatched sides (8 * 20 / 10)
        { id: "B", text: "$16$" },
        // distractor: adds the difference 20 - 8 to the side
        { id: "C", text: "$22$" },
        { id: "D", text: "$25$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Similar Triangles — Side Ratios**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** The scale factor from $GHJ$ to $PQR$ is $\\dfrac{PQ}{GH} = \\dfrac{20}{8} = \\dfrac{5}{2}$. So $QR = \\dfrac{5}{2} \\cdot HJ = \\dfrac{5}{2} \\cdot 10 = 25$.\n\n**The Full Solution:**\nStep 1: Corresponding sides of similar triangles are proportional: $\\dfrac{GH}{PQ} = \\dfrac{HJ}{QR}$.\nStep 2: Substitute the known lengths: $\\dfrac{8}{20} = \\dfrac{10}{QR}$.\nStep 3: Cross-multiply: $8 \\cdot QR = 20 \\cdot 10 = 200$, so $QR = 25$.\n\nCheck: $\\dfrac{QR}{HJ} = \\dfrac{25}{10} = \\dfrac{5}{2}$, matching $\\dfrac{PQ}{GH} = \\dfrac{20}{8} = \\dfrac{5}{2}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): applies the ratio upside down, shrinking $10$ by $\\frac{2}{5}$ instead of enlarging it.\n* Choice B ($16$): cross-multiplies mismatched corners ($8 \\cdot 20 / 10$).\n* Choice C ($22$): adds the difference $20 - 8 = 12$ to $10$ — similarity scales by MULTIPLYING, never by adding.\n\n**Test Day Takeaway:** Line up matched corners before writing the proportion: $\\frac{\\text{small side}}{\\text{big side}} = \\frac{\\text{matching small side}}{\\text{matching big side}}$, then cross-multiply.",
      skills: ["similar-triangles", "triangles"]
    },
    {
      id: 19,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "If $5x + 2y = 26$ and $3x + 2y = 18$, what is the value of $x$?",
      correctAnswer: "4",
      explanation: "**SAT Pattern: Linear System by Elimination**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~10s):** The $y$-terms are identical, so subtract the equations: $(5x + 2y) - (3x + 2y) = 26 - 18$ gives $2x = 8$, so $x = 4$.\n\n**The Full Solution:**\nStep 1: Both equations contain $2y$, so subtracting one from the other eliminates $y$.\nStep 2: $(5x + 2y) - (3x + 2y) = 26 - 18 \\Rightarrow 2x = 8$.\nStep 3: Divide by $2$: $x = 4$.\n\nCheck: from the second equation, $3(4) + 2y = 18 \\Rightarrow y = 3$; then $5(4) + 2(3) = 26$. $\\checkmark$\n\n**Common Mistakes:** Adding the equations instead of subtracting ($8x + 4y = 44$) eliminates nothing; subtracting in the reverse order gives $-2x = -8$ — still $x = 4$, but only if both signs flip together.\n\n**Test Day Takeaway:** Elimination works when a variable's coefficients match or are opposite. Equal coefficients $\\Rightarrow$ SUBTRACT; opposite coefficients $\\Rightarrow$ ADD.",
      skills: ["elimination-method", "systems-of-equations"]
    },
    {
      id: 20,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "An angle in a mechanical drawing measures $\\dfrac{5\\pi}{6}$ radians. What is the measure of the angle in degrees?",
      choices: [
        // distractor: converts pi/6 alone, dropping the factor of 5
        { id: "A", text: "$30$" },
        { id: "B", text: "$150$" },
        // distractor: subtracts the angle from 360 degrees
        { id: "C", text: "$210$" },
        // distractor: uses 360 degrees for pi instead of 180
        { id: "D", text: "$300$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Radians to Degrees**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $\\pi$ radians $= 180^\\circ$, so $\\dfrac{5\\pi}{6} = \\dfrac{5 \\cdot 180^\\circ}{6} = 150^\\circ$.\n\n**The Full Solution:**\nStep 1: Use the conversion $\\pi$ rad $= 180^\\circ$, which means multiply by $\\dfrac{180^\\circ}{\\pi}$.\nStep 2: $\\dfrac{5\\pi}{6} \\cdot \\dfrac{180^\\circ}{\\pi} = \\dfrac{5 \\cdot 180^\\circ}{6} = 5 \\cdot 30^\\circ = 150^\\circ$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($30$): converts $\\frac{\\pi}{6}$ but forgets the factor of $5$.\n* Choice C ($210$): subtracts $150$ from $360$, jumping to the reflex angle no one asked for.\n* Choice D ($300$): uses $360^\\circ$ for $\\pi$ — but $\\pi$ is a HALF turn, $180^\\circ$.\n\n**Test Day Takeaway:** To convert radians to degrees, multiply by $\\dfrac{180^\\circ}{\\pi}$. Anchor on $\\frac{\\pi}{6} = 30^\\circ$ and scale by the numerator.",
      skills: ["radians-to-degrees", "radians-degrees"]
    },
    {
      id: 21,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "A function $h$ is defined by $h(x) = x^2 + bx + 15$. If $h(3) = 0$, what is the value of $b$?",
      choices: [
        // distractor: stops at 3b = -24 without dividing
        { id: "A", text: "$-24$" },
        { id: "B", text: "$-8$" },
        // distractor: reports the other root of the quadratic, not b
        { id: "C", text: "$5$" },
        // distractor: solves correctly but drops the negative sign
        { id: "D", text: "$8$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Solving for a Coefficient Given a Root**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $h(3) = 9 + 3b + 15 = 0$, so $3b = -24$ and $b = -8$.\n\n**The Full Solution:**\nStep 1: $h(3) = 0$ means substituting $x = 3$ makes the expression zero.\nStep 2: $h(3) = (3)^2 + b(3) + 15 = 9 + 3b + 15 = 3b + 24$.\nStep 3: Set it to $0$: $3b + 24 = 0 \\Rightarrow 3b = -24 \\Rightarrow b = -8$.\n\nCheck: $h(x) = x^2 - 8x + 15 = (x - 3)(x - 5)$, so $h(3) = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-24$): stops at $3b = -24$ and never divides by $3$.\n* Choice C ($5$): the OTHER root of $x^2 - 8x + 15$ — a root, but not the coefficient $b$.\n* Choice D ($8$): the right magnitude with the sign dropped.\n\n**Test Day Takeaway:** \"$h(a) = 0$\" says $a$ is a root: plug in $x = a$, set the result to $0$, and solve for the unknown coefficient — sign and all.",
      skills: ["function-evaluation", "quadratic-equations"]
    },
    {
      id: 22,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "The scatterplot shows a data set along with a line of best fit that has slope $-1.5$. Based on the line of best fit, if $x$ increases by $6$, by how many units does the predicted value of $y$ decrease?",
      diagram: { type: "scatterplot", params: {
        points: [[1, 39], [2, 36.5], [3, 36], [4, 33.5], [5, 33], [6, 30.5], [7, 30], [8, 27.5], [9, 27], [10, 24.5], [11, 24], [12, 21.5]],
        xMin: 0, xMax: 14, yMin: 0, yMax: 45,
        xGridStep: 1, xLabelStep: 2, yGridStep: 5, yLabelStep: 10,
        bestFitLine: { slope: -1.5, intercept: 40 },
      } },
      correctAnswer: "9",
      explanation: "**SAT Pattern: Slope as Rate of Change**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~10s):** $\\Delta y = m \\cdot \\Delta x = -1.5 \\cdot 6 = -9$. The predicted value falls by $9$ units.\n\n**The Full Solution:**\nStep 1: Slope is the rate of change: $m = \\dfrac{\\Delta y}{\\Delta x}$, so $\\Delta y = m \\cdot \\Delta x$.\nStep 2: With $m = -1.5$ and $\\Delta x = 6$: $\\Delta y = (-1.5)(6) = -9$.\nStep 3: A change of $-9$ means the predicted $y$ DECREASES by $9$ units — exactly what the question asks for.\n\n**Common Mistakes:** Adding instead of multiplying ($-1.5 + 6 = 4.5$); dividing ($\\frac{6}{1.5} = 4$); answering $-9$ when the question already builds the direction into the word \"decrease.\"\n\n**Test Day Takeaway:** Change in $y$ equals slope $\\times$ change in $x$. A negative slope means $y$ falls; the SIZE of that fall is the absolute value.",
      skills: ["slope", "linear-functions"]
    }
  ]
};

export default practiceTest8M2Easy;
