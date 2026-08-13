// Practice Test 4 — Math Module 2 Easy variant (22 questions)
// For students routed to easier path after Module 1 (~<60% correct).
// Distribution: 3E / 13M / 6H. Q1-3 easy openers. Max-score ceiling: ~650.
// Domain mix: 7 Algebra / 6 Advanced Math / 5 Problem-Solving / 4 Geometry & Trig.

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
      question: "Deshawn pays $\\$45$ for $5$ identical picture frames. What is the price, in dollars, of one picture frame?",
      choices: [
        // distractor: subtracts 5 from 45
        { id: "A", text: "$\\$40$" },
        { id: "B", text: "$\\$9$" },
        // distractor: adds 5 to 45
        { id: "C", text: "$\\$50$" },
        // distractor: multiplies 45 by 5
        { id: "D", text: "$\\$225$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Equal Groups — Finding a Unit Price**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Five identical frames cost $\\$45$, so one frame costs $\\frac{45}{5} = \\$9$.\n\n**The Full Solution:**\nStep 1: Let $p$ be the price of one frame. Five identical frames cost $5p$, so $5p = 45$.\nStep 2: Divide both sides by $5$: $p = \\frac{45}{5} = 9$.\nStep 3: Check: $5 \\cdot \\$9 = \\$45$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$40$): subtracts the count from the total, $45 - 5$.\n* Choice C ($\\$50$): adds the count to the total, $45 + 5$.\n* Choice D ($\\$225$): multiplies the total by the count, $45 \\cdot 5$.\n\n**Test Day Takeaway:** \"Total for $n$ identical items\" means unit price $= \\text{total} \\div n$. A unit price must be smaller than the total.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 2,
      type: "fill-in",
      difficulty: "easy",
      band: 2,
      question: "$12$ is what percent of $48$?",
      correctAnswer: "25",
      explanation: "**SAT Pattern: Finding the Percent**\n\n**The correct answer is $25$.**\n\n**The Fast Way (~5s):** $\\frac{12}{48} = \\frac{1}{4}$, and $\\frac{1}{4} = 25\\%$.\n\n**The Full Solution:**\nStep 1: \"$12$ is what percent of $48$\" translates to $12 = \\frac{p}{100} \\cdot 48$.\nStep 2: Divide the part by the whole: $\\frac{12}{48} = \\frac{1}{4} = 0.25$.\nStep 3: Convert to a percent: $0.25 = 25\\%$.\n\n**Common Mistakes:** Dividing the whole by the part ($\\frac{48}{12} = 4$, so answering $4$); or subtracting ($48 - 12 = 36$).\n\n**Test Day Takeaway:** \"$a$ is what percent of $b$\" means $\\frac{a}{b} \\cdot 100$. The number after \"of\" is always the denominator.",
      skills: ["percent-of-value", "percents"]
    },
    {
      id: 3,
      type: "multiple-choice",
      difficulty: "easy",
      band: 3,
      question: "Which expression is equivalent to $(2x + 5) - (x + 3)$?",
      choices: [
        // distractor: forgets to distribute the negative sign
        { id: "A", text: "$3x + 8$" },
        { id: "B", text: "$x + 2$" },
        // distractor: distributes minus only to x and not to 3
        { id: "C", text: "$x + 8$" },
        // distractor: distributes only to constant
        { id: "D", text: "$3x + 2$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Distributing the Negative Sign**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Distribute the minus to both terms in the second group: $2x + 5 - x - 3 = x + 2$.\n\n**The Full Solution:**\nStep 1: Rewrite, distributing the minus to BOTH terms inside $(x + 3)$: $(2x + 5) - (x + 3) = 2x + 5 - x - 3$.\nStep 2: Group like terms: $(2x - x) + (5 - 3)$.\nStep 3: Combine: $x + 2$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3x + 8$): adds instead of subtracting, so nothing flips sign.\n* Choice C ($x + 8$): distributes the minus only to $x$, leaving $+3$: $2x + 5 - x + 3 = x + 8$.\n* Choice D ($3x + 2$): distributes the minus only to $3$, leaving $+x$: $2x + 5 + x - 3 = 3x + 2$.\n\n**Test Day Takeaway:** When subtracting a parenthesis, the minus sign distributes to EVERY term inside — both $x$ and $3$ flip sign.",
      skills: ["polynomial-operations", "combining-like-terms"]
    },
    {
      id: 4,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "The function $f$ is defined by $f(x) = 6x - 11$. For what value of $x$ does $f(x) = 19$?",
      choices: [
        // distractor: gives the value of f(x), not x
        { id: "A", text: "$19$" },
        { id: "B", text: "$5$" },
        // distractor: divides 19 by 6 without adding 11
        { id: "C", text: "$\\dfrac{19}{6}$" },
        // distractor: subtracts instead of adds 11
        { id: "D", text: "$\\dfrac{8}{6}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Function Equation — Solve for Input**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Set the rule equal to $19$: $6x - 11 = 19 \\Rightarrow 6x = 30 \\Rightarrow x = 5$.\n\n**The Full Solution:**\nStep 1: $f(x) = 19$ means $6x - 11 = 19$.\nStep 2: Add $11$ to both sides: $6x = 30$.\nStep 3: Divide by $6$: $x = 5$.\n\nCheck: $f(5) = 6(5) - 11 = 30 - 11 = 19$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($19$): repeats the output value instead of solving for the input.\n* Choice C ($\\frac{19}{6}$): divides $19$ by $6$ without first adding $11$.\n* Choice D ($\\frac{8}{6}$): subtracts $11$ from $19$ instead of adding, then divides.\n\n**Test Day Takeaway:** Given $f(x) =$ a value and asked for $x$, set the rule equal to that value and solve like any linear equation.",
      skills: ["function-evaluation", "function-notation"]
    },
    {
      id: 5,
      type: "fill-in",
      difficulty: "medium",
      band: 4,
      question: "A line in the $xy$-plane has slope $5$ and passes through the point $(0, -3)$. What is the value of $y$ when $x = 4$?",
      correctAnswer: "17",
      explanation: "**SAT Pattern: Equation of a Line + Evaluate**\n\n**The correct answer is $17$.**\n\n**The Fast Way (~10s):** The point $(0, -3)$ is the $y$-intercept, so $y = 5x - 3$. At $x = 4$: $y = 5(4) - 3 = 17$.\n\n**The Full Solution:**\nStep 1: Slope $m = 5$, and the line passes through $(0, -3)$, so $b = -3$.\nStep 2: The line is $y = 5x - 3$.\nStep 3: Evaluate at $x = 4$: $y = 5(4) - 3 = 20 - 3 = 17$.\n\n**Common Mistakes:** Dropping the negative on the intercept and getting $5(4) + 3 = 23$; or adding instead of multiplying the slope, getting $5 + 4 - 3 = 6$.\n\n**Test Day Takeaway:** A line through $(0, b)$ has $y$-intercept $b$. Then $y = mx + b$ gives the height at any $x$.",
      skills: ["slope-intercept-form", "linear-functions"]
    },
    {
      id: 6,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "A right triangle has a hypotenuse of length $13$ and one leg of length $5$. What is the length of the other leg?",
      choices: [
        // distractor: adds instead of subtracts squares
        { id: "A", text: "$\\sqrt{194}$" },
        { id: "B", text: "$12$" },
        // distractor: subtracts the values directly
        { id: "C", text: "$8$" },
        // distractor: forgets to take square root
        { id: "D", text: "$144$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Pythagorean Theorem (5-12-13 Triple)**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $5$-$12$-$13$ is a Pythagorean triple, so the missing leg is $12$.\n\n**The Full Solution:**\nStep 1: Use $a^2 + b^2 = c^2$ with hypotenuse $c = 13$ and one leg $a = 5$.\nStep 2: $5^2 + b^2 = 13^2 \\Rightarrow 25 + b^2 = 169$.\nStep 3: $b^2 = 144 \\Rightarrow b = 12$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\sqrt{194}$): adds the squares ($25 + 169$) instead of subtracting — that finds a longer side, not the leg.\n* Choice C ($8$): subtracts the lengths directly ($13 - 5$) without using squares.\n* Choice D ($144$): stops at $b^2 = 144$ and forgets the square root.\n\n**Test Day Takeaway:** When the hypotenuse is given, find a leg with $b^2 = c^2 - a^2$. Memorize the triples: $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$, $7$-$24$-$25$.",
      skills: ["pythagorean-theorem", "right-triangles"]
    },
    {
      id: 7,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The median of the data set $\\{4, 9, 11, 15, 22\\}$ is $11$. If a sixth value of $14$ is added to the set, what is the new median?",
      choices: [
        // distractor: gives the new value
        { id: "A", text: "$14$" },
        // distractor: keeps original median
        { id: "B", text: "$11$" },
        { id: "C", text: "$12.5$" },
        // distractor: averages all six values
        { id: "D", text: "$12.5$ (mean)" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Median for Even-Count Data Set**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The new sorted set is $\\{4, 9, 11, 14, 15, 22\\}$. With $6$ values, the median is the average of the $3$rd and $4$th: $\\frac{11 + 14}{2} = 12.5$.\n\n**The Full Solution:**\nStep 1: Insert $14$ and sort: $\\{4, 9, 11, 14, 15, 22\\}$.\nStep 2: The count is even ($6$), so the median is the average of the two middle values, $11$ and $14$.\nStep 3: $\\frac{11 + 14}{2} = 12.5$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($14$): reports the newly added value instead of the median.\n* Choice B ($11$): keeps the original median as if adding a value changed nothing.\n* Choice D ($12.5$, labeled \"mean\"): the value happens to match, but the label claims it is the mean — the question asks for the median, which choice C states correctly.\n\n**Test Day Takeaway:** Sort first. For an odd count the median is the middle value; for an even count it is the average of the two middle values.",
      skills: ["calculate-median", "statistics"]
    },
    {
      id: 8,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "What are the solutions to the equation $x^2 - 4x - 12 = 0$?",
      choices: [
        // distractor: signs flipped
        { id: "A", text: "$x = -6 \\text{ or } x = 2$" },
        { id: "B", text: "$x = 6 \\text{ or } x = -2$" },
        // distractor: confuses sum and product as roots
        { id: "C", text: "$x = 4 \\text{ or } x = -12$" },
        // distractor: uses both negative
        { id: "D", text: "$x = -6 \\text{ or } x = -2$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Find two numbers that multiply to $-12$ and add to $-4$: $-6$ and $2$. So $(x - 6)(x + 2) = 0$, giving $x = 6$ or $x = -2$.\n\n**The Full Solution:**\nStep 1: For $x^2 + bx + c$, find two numbers with product $c = -12$ and sum $b = -4$: these are $-6$ and $2$.\nStep 2: Factor: $x^2 - 4x - 12 = (x - 6)(x + 2) = 0$.\nStep 3: Set each factor to zero: $x = 6$ or $x = -2$.\n\nCheck: $6^2 - 4(6) - 12 = 36 - 24 - 12 = 0$. $\\checkmark$ And $(-2)^2 - 4(-2) - 12 = 4 + 8 - 12 = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x = -6$ or $x = 2$): uses the two factoring numbers as the roots directly, instead of their opposites.\n* Choice C ($x = 4$ or $x = -12$): reads the coefficients $b$ and $c$ as the roots.\n* Choice D ($x = -6$ or $x = -2$): makes both roots negative, missing that one factor gives a positive root.\n\n**Test Day Takeaway:** To factor $x^2 + bx + c$, find two numbers with product $c$ and sum $b$. The roots are the OPPOSITES of those numbers.",
      skills: ["finding-roots-factoring", "quadratic-equations"]
    },
    {
      id: 9,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A water tank holds $48$ gallons when full. If it is currently $\\dfrac{5}{8}$ full, how many gallons of water are in the tank?",
      correctAnswer: "30",
      explanation: "**SAT Pattern: Fraction of a Whole**\n\n**The correct answer is $30$.**\n\n**The Fast Way (~5s):** $\\frac{5}{8}$ of $48$ is $\\frac{5 \\cdot 48}{8} = \\frac{240}{8} = 30$ gallons.\n\n**The Full Solution:**\nStep 1: \"Fraction of a quantity\" means multiply: $\\frac{5}{8} \\times 48$.\nStep 2: Divide $48$ by $8$ first: $\\frac{48}{8} = 6$ gallons per eighth.\nStep 3: Multiply by the numerator: $5 \\cdot 6 = 30$ gallons.\n\n**Common Mistakes:** Adding $5 + 8 = 13$ and dividing; or computing $\\frac{48}{5} = 9.6$ by treating the numerator as the denominator.\n\n**Test Day Takeaway:** \"Fraction of a quantity\" $=$ fraction $\\times$ quantity. Cancel before multiplying for cleaner arithmetic.",
      skills: ["fractions", "ratios"]
    },
    {
      id: 10,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A line passes through the points $(2, -1)$ and $(5, 8)$. What is the equation of the line in slope-intercept form?",
      choices: [
        // distractor: uses (5, 8) y-value as intercept
        { id: "A", text: "$y = 3x + 8$" },
        { id: "B", text: "$y = 3x - 7$" },
        // distractor: uses wrong slope sign
        { id: "C", text: "$y = -3x + 5$" },
        // distractor: switches slope and intercept
        { id: "D", text: "$y = -7x + 3$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Equation of a Line from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Slope $= \\frac{8 - (-1)}{5 - 2} = \\frac{9}{3} = 3$. Using point-slope at $(2, -1)$: $y = 3(x - 2) - 1 = 3x - 7$.\n\n**The Full Solution:**\nStep 1: Slope $m = \\frac{8 - (-1)}{5 - 2} = \\frac{9}{3} = 3$.\nStep 2: Point-slope with $(2, -1)$: $y - (-1) = 3(x - 2)$, so $y + 1 = 3x - 6$.\nStep 3: Solve for $y$: $y = 3x - 7$.\n\nCheck at $x = 5$: $y = 3(5) - 7 = 8$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = 3x + 8$): uses the $y$-value $8$ from $(5, 8)$ as the intercept instead of computing it.\n* Choice C ($y = -3x + 5$): flips the slope sign.\n* Choice D ($y = -7x + 3$): swaps the slope and intercept.\n\n**Test Day Takeaway:** The $y$-intercept of a line through $(x_0, y_0)$ with slope $m$ is $b = y_0 - m \\cdot x_0$. Confirm by plugging the other point in.",
      skills: ["equation-of-line", "linear-functions"]
    },
    {
      id: 11,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A box contains $7$ red pens, $3$ black pens, and $10$ blue pens. If a pen is selected at random, what is the probability that it is NOT blue?",
      choices: [
        // distractor: gives blue probability
        { id: "A", text: "$\\dfrac{10}{20}$" },
        { id: "B", text: "$\\dfrac{10}{20}$ (= $\\dfrac{1}{2}$)" },
        { id: "C", text: "$\\dfrac{1}{2}$" },
        // distractor: uses 10/3 (count of black over blue)
        { id: "D", text: "$\\dfrac{3}{10}$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Complement Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Total $= 7 + 3 + 10 = 20$. Not blue $= 7 + 3 = 10$. So $P = \\frac{10}{20} = \\frac{1}{2}$.\n\n**The Full Solution:**\nStep 1 (direct): \"Not blue\" means red or black: $7 + 3 = 10$ pens out of $20$ total.\nStep 2: $P(\\text{not blue}) = \\frac{10}{20} = \\frac{1}{2}$.\n\nBy complement: $P(\\text{blue}) = \\frac{10}{20} = \\frac{1}{2}$, so $P(\\text{not blue}) = 1 - \\frac{1}{2} = \\frac{1}{2}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{10}{20}$): the correct value but left unsimplified; the SAT lists the reduced form.\n* Choice B ($\\frac{10}{20}$): the same unsimplified value — simplify to $\\frac{1}{2}$.\n* Choice D ($\\frac{3}{10}$): uses the black count over the blue count, not the relevant totals.\n\n**Test Day Takeaway:** $P(\\text{not } A) = 1 - P(A)$, or count the favorable outcomes directly. Reduce the fraction before matching it to a choice.",
      skills: ["probability-basics", "complement"]
    },
    {
      id: 12,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A rectangle has length $12$ centimeters and width $5$ centimeters. What is the length of the diagonal of the rectangle, in centimeters?",
      correctAnswer: "13",
      explanation: "**SAT Pattern: Pythagorean Theorem on a Rectangle**\n\n**The correct answer is $13$.**\n\n**The Fast Way (~5s):** The diagonal is the hypotenuse of a $5$-$12$-$13$ right triangle, so it is $13$.\n\n**The Full Solution:**\nStep 1: The diagonal splits the rectangle into two right triangles whose legs are the length and width.\nStep 2: $d^2 = 12^2 + 5^2 = 144 + 25 = 169$.\nStep 3: $d = \\sqrt{169} = 13$ centimeters.\n\n**Common Mistakes:** Adding the sides directly ($12 + 5 = 17$); computing the perimeter ($2(12) + 2(5) = 34$); or computing the area ($12 \\cdot 5 = 60$).\n\n**Test Day Takeaway:** A rectangle's diagonal is $\\sqrt{\\ell^2 + w^2}$. Watch for Pythagorean triples: $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$.",
      skills: ["pythagorean-theorem", "rectangles"]
    },
    {
      id: 13,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "What is the solution to the system of equations $3x + y = 14$ and $y = x + 2$?",
      choices: [
        // distractor: swaps coordinates
        { id: "A", text: "$(5, 3)$" },
        { id: "B", text: "$(3, 5)$" },
        // distractor: uses sum
        { id: "C", text: "$(14, 2)$" },
        // distractor: divides by wrong number
        { id: "D", text: "$\\left(\\dfrac{14}{3}, \\dfrac{20}{3}\\right)$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The second equation already gives $y=x+2$, so drop it into the first: $3x+(x+2)=14 \\Rightarrow 4x=12 \\Rightarrow x=3$, and $y=3+2=5$. The solution is $(3,5)$.\n\n**The Full Solution:**\nStep 1: Substitute $y=x+2$ into $3x+y=14$: $3x+(x+2)=14$.\nStep 2: Combine and solve: $4x+2=14 \\Rightarrow 4x=12 \\Rightarrow x=3$.\nStep 3: Back-substitute: $y=3+2=5$. Check the first equation: $3(3)+5=14$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(5,3)$): the right two numbers in swapped slots — $x$ and $y$ reversed.\n* Choice C ($(14,2)$): reads the right-hand sides ($14$ and $2$) straight off as coordinates instead of solving.\n* Choice D ($\\left(\\frac{14}{3},\\frac{20}{3}\\right)$): divides $14$ by $3$ as if $y$ were zero, ignoring the $+y$ term.\n\n**Test Day Takeaway:** When one equation is already solved for a variable, substitute that whole expression into the other equation — one variable left, then back-substitute for the rest.",
      skills: ["substitution-method", "systems-of-equations"]
    },
    {
      id: 14,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A radioactive sample has a half-life of $5$ years, meaning the amount halves every $5$ years. If the initial amount is $80$ grams, which expression gives the amount remaining after $t$ years?",
      choices: [
        // distractor: linear instead of exponential
        { id: "A", text: "$80 - \\dfrac{t}{5}$" },
        { id: "B", text: "$80 \\cdot \\left(\\dfrac{1}{2}\\right)^{\\frac{t}{5}}$" },
        // distractor: doubles instead of halves
        { id: "C", text: "$80 \\cdot 2^{\\frac{t}{5}}$" },
        // distractor: confuses base — uses 2^(-t/5) without 80 OR uses just half exponent
        { id: "D", text: "$80 \\cdot \\left(\\dfrac{1}{2}\\right)^t$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Exponential Decay with Half-Life**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** A half-life means multiply by $\\frac{1}{2}$ once every $5$ years, so the exponent counts how many $5$-year periods have passed: $80\\left(\\frac{1}{2}\\right)^{\\frac{t}{5}}$.\n\n**The Full Solution:**\nStep 1: Half-life decay has the form $A(t)=A_0\\left(\\frac{1}{2}\\right)^{\\frac{t}{d}}$, where $A_0$ is the start amount and $d$ is the half-life.\nStep 2: Here $A_0=80$ and $d=5$, giving $80\\left(\\frac{1}{2}\\right)^{\\frac{t}{5}}$.\nStep 3: Sanity check: $t=0 \\Rightarrow 80$; $t=5 \\Rightarrow 40$; $t=10 \\Rightarrow 20$ — halving every $5$ years. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($80-\\frac{t}{5}$): models linear decay, subtracting a fixed amount instead of repeatedly halving.\n* Choice C ($80\\cdot 2^{\\frac{t}{5}}$): uses base $2$, which doubles the sample rather than halving it.\n* Choice D ($80\\left(\\frac{1}{2}\\right)^t$): forgets to divide by $5$, so it halves every single year instead of every $5$.\n\n**Test Day Takeaway:** A half-life of $d$ time units means multiply by $\\left(\\frac{1}{2}\\right)^{\\frac{t}{d}}$ — the exponent is the elapsed time divided by the half-life.",
      skills: ["exponential-growth-decay", "exponent-laws"]
    },
    {
      id: 15,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "In a right triangle, the side opposite an acute angle $\\theta$ has length $9$ and the side adjacent to $\\theta$ has length $40$. What is the value of $\\tan(\\theta)$?",
      choices: [
        { id: "A", text: "$\\dfrac{9}{40}$" },
        // distractor: gives reciprocal
        { id: "B", text: "$\\dfrac{40}{9}$" },
        // distractor: gives sin instead of tan
        { id: "C", text: "$\\dfrac{9}{41}$" },
        // distractor: gives cos instead of tan
        { id: "D", text: "$\\dfrac{40}{41}$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: SOH-CAH-TOA — Tangent in a 9-40-41 Triangle**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Tangent is opposite over adjacent, so $\\tan(\\theta)=\\frac{9}{40}$.\n\n**The Full Solution:**\nStep 1: For an acute angle, $\\tan(\\theta)=\\frac{\\text{opposite}}{\\text{adjacent}}$.\nStep 2: The side opposite $\\theta$ is $9$ and the side adjacent is $40$, so $\\tan(\\theta)=\\frac{9}{40}$.\nStep 3: The hypotenuse, if needed, would be $\\sqrt{9^2+40^2}=\\sqrt{1681}=41$ — the $9$-$40$-$41$ triple — but tangent never touches it.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{40}{9}$): flips the ratio, giving adjacent over opposite ($\\cot\\theta$).\n* Choice C ($\\frac{9}{41}$): uses the hypotenuse $41$ in the bottom — that is $\\sin\\theta$, not $\\tan\\theta$.\n* Choice D ($\\frac{40}{41}$): adjacent over hypotenuse, which is $\\cos\\theta$.\n\n**Test Day Takeaway:** TOA: tangent is opposite over adjacent. It uses only the two legs — never the hypotenuse.",
      skills: ["soh-cah-toa", "right-triangles"]
    },
    {
      id: 16,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A printer prints $24$ pages per minute. How many pages will it print in $1$ hour and $15$ minutes?",
      correctAnswer: "1800",
      explanation: "**SAT Pattern: Rate × Time with Mixed Units**\n\n**The correct answer is $1800$.**\n\n**The Fast Way (~10s):** Convert the time to minutes: $1$ hr $15$ min $=75$ min. Then pages $=24\\times 75=1800$.\n\n**The Full Solution:**\nStep 1: Put the time in one unit. $1$ hour is $60$ minutes, so $1$ hr $15$ min $=60+15=75$ minutes.\nStep 2: Multiply rate by time: $24\\times 75=1800$ pages.\n\n**Common Mistakes:** Reading $1$ hr $15$ min as $1.15$ hours; using only $60$ minutes and getting $24\\times 60=1440$; or never converting the hour to minutes at all.\n\n**Test Day Takeaway:** Convert every quantity to a single unit before multiplying. $1$ hr $15$ min $=75$ min $=1.25$ hr — then apply rate $\\times$ time.",
      skills: ["unit-conversion", "rate-conversion"]
    },
    {
      id: 17,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "If $4(x + 2) - 2x = 2x + 8$, how many solutions does the equation have?",
      choices: [
        { id: "A", text: "Infinitely many" },
        // distractor: confuses identity with contradiction
        { id: "B", text: "$0$" },
        // distractor: defaults to 1 solution
        { id: "C", text: "$1$" },
        // distractor: quadratic-flavored
        { id: "D", text: "$2$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Identifying Identity / Contradiction Equations**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Distribute the left side: $4x+8-2x=2x+8$, which is exactly the right side. Both sides are identical, so the equation is true for every $x$ — infinitely many solutions.\n\n**The Full Solution:**\nStep 1: Expand: $4(x+2)-2x=4x+8-2x=2x+8$.\nStep 2: The equation becomes $2x+8=2x+8$.\nStep 3: Subtract $2x$ from both sides: $8=8$. This is always true, so every value of $x$ works.\n\n**Why the wrong answers are tempting:**\n* Choice B ($0$): confuses an identity ($8=8$) with a contradiction, which is what gives no solutions.\n* Choice C ($1$): assumes any linear equation must have exactly one solution.\n* Choice D ($2$): treats it like a quadratic, expecting two roots.\n\n**Test Day Takeaway:** Simplify both sides fully. Identical sides mean infinitely many solutions; matching variable terms with different constants mean no solution.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 18,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "A circle has center $(2, -3)$ and passes through the point $(2, 4)$. What is the radius of the circle?",
      correctAnswer: "7",
      explanation: "**SAT Pattern: Distance from Center as Radius**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~5s):** The center $(2,-3)$ and the point $(2,4)$ share the same $x$-coordinate, so the radius is just the vertical gap: $|4-(-3)|=7$.\n\n**The Full Solution:**\nStep 1: The radius is the distance from the center to any point on the circle: $r=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$.\nStep 2: $r=\\sqrt{(2-2)^2+(4-(-3))^2}=\\sqrt{0+49}=7$.\nStep 3: Because the $x$-coordinates match, the points sit on a vertical line and the distance reduces to the difference in $y$: $4-(-3)=7$.\n\n**Common Mistakes:** Forgetting the double negative and computing $|4-3|=1$; dropping the sign on $-3$; or treating a negative coordinate difference as a negative radius.\n\n**Test Day Takeaway:** A circle's radius is the distance from its center to any point on it. When two points share a coordinate, the distance collapses to the difference in the other coordinate.",
      skills: ["distance-formula", "circles"]
    },
    {
      id: 19,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "If $f(x) = x^2 + 4x - 5$, what is the value of $f(-3)$?",
      choices: [
        // distractor: forgets to square (gives -3 + 4(-3) - 5)
        { id: "A", text: "$-20$" },
        { id: "B", text: "$-8$" },
        // distractor: doesn't square the negative
        { id: "C", text: "$-26$" },
        // distractor: stops one step early at x^2 + 4x = -3
        { id: "D", text: "$-3$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Plug in $x=-3$: $(-3)^2+4(-3)-5=9-12-5=-8$.\n\n**The Full Solution:**\nStep 1: Substitute $x=-3$ into $f(x)=x^2+4x-5$: $f(-3)=(-3)^2+4(-3)-5$.\nStep 2: Evaluate each term: $(-3)^2=9$ and $4(-3)=-12$.\nStep 3: Combine: $9-12-5=-8$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-20$): squares wrong, e.g. treating $(-3)^2$ as something other than $9$ and mishandling the signs.\n* Choice C ($-26$): takes $(-3)^2=-9$ instead of $+9$, then $-9-12-5=-26$.\n* Choice D ($-3$): stops at $9-12=-3$ and forgets to subtract the $5$.\n\n**Test Day Takeaway:** Squaring a negative makes it positive: $(-a)^2=a^2$. Substitute negatives inside parentheses and track each sign.",
      skills: ["function-evaluation", "function-notation"]
    },
    {
      id: 20,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "A line in the $xy$-plane is parallel to $y = 4x - 7$ and passes through the point $(1, 6)$. What is the equation of the line?",
      choices: [
        // distractor: keeps original intercept
        { id: "A", text: "$y = 4x - 7$" },
        { id: "B", text: "$y = 4x + 2$" },
        // distractor: uses perpendicular slope
        { id: "C", text: "$y = -\\dfrac{1}{4}x + 6$" },
        // distractor: forgets to compute intercept (uses (1,6) directly as intercept)
        { id: "D", text: "$y = 4x + 6$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Parallel lines share the slope $4$. Plug $(1,6)$ into $y=4x+b$: $6=4(1)+b \\Rightarrow b=2$, so $y=4x+2$.\n\n**The Full Solution:**\nStep 1: A line parallel to $y=4x-7$ has the same slope, $m=4$.\nStep 2: Use $y=mx+b$ with the point $(1,6)$: $6=4(1)+b$, so $b=2$.\nStep 3: The equation is $y=4x+2$. Check: at $x=1$, $4(1)+2=6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y=4x-7$): the original line, which does not pass through $(1,6)$.\n* Choice C ($y=-\\frac{1}{4}x+6$): uses the perpendicular slope instead of the parallel one.\n* Choice D ($y=4x+6$): drops the point's $y$-value straight into the intercept slot without solving for $b$.\n\n**Test Day Takeaway:** Parallel lines have identical slopes. Keep the slope, then substitute the given point into $y=mx+b$ to solve for the new intercept.",
      skills: ["parallel-line-slope", "writing-parallel-equation"]
    },
    {
      id: 21,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "The scatterplot below shows the relationship between the temperature $x$ (in degrees Fahrenheit) and the daily ice cream sales $y$ (in dollars) at a shop. The line of best fit is $\\hat{y} = 12x - 200$. Based on the model, by how many dollars do daily sales increase for each $1^{\\circ}\\text{F}$ increase in temperature?",
      diagram: { type: "scatterplot", params: {
        points: [[55,500],[60,540],[65,560],[70,680],[75,720],[80,760],[85,840],[90,860],[95,920]],
        xMin: 50, xMax: 100, yMin: 0, yMax: 1100,
        xGridStep: 5, yGridStep: 100, xLabelStep: 10, yLabelStep: 200,
        xLabel: "Temperature (°F)", yLabel: "Daily sales ($)",
        bestFitLine: { slope: 12, intercept: -200 },
      } },
      correctAnswer: "12",
      explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~5s):** In $\\hat{y}=12x-200$, the slope $12$ is the predicted change in $y$ per one-unit rise in $x$ — so sales rise \\$$12$ per $1^\\circ$F.\n\n**The Full Solution:**\nStep 1: In a linear model $\\hat{y}=mx+b$, the slope $m$ is the predicted change in $y$ for each one-unit increase in $x$.\nStep 2: Here $m=12$, so every $1^\\circ$F increase in temperature predicts \\$$12$ more in daily sales.\n\n**Common Mistakes:** Reporting $-200$ (the intercept, predicted sales at $0^\\circ$F); reporting $200$ by dropping the sign; or plugging in a value like $\\hat{y}(1)=-188$ instead of reading the rate.\n\n**Test Day Takeaway:** In $\\hat{y}=mx+b$, the slope $m$ answers any \"how much does $y$ change per one unit of $x$\" question — the intercept never does.",
      skills: ["scatterplots", "linear-functions"]
    },
    {
      id: 22,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "The table shows the number of small and large pizzas sold by a pizzeria over two evenings.\n\n| | Small | Large | Total |\n|---|---|---|---|\n| Friday | $20$ | $40$ | $60$ |\n| Saturday | $30$ | $80$ | $110$ |\n| Total | $50$ | $120$ | $170$ |\n\nIf one pizza is selected at random from all $170$ pizzas, what is the probability that it is a Saturday large pizza?",
      choices: [
        // distractor: divides by Saturday total
        { id: "A", text: "$\\dfrac{80}{110}$" },
        // distractor: divides by total large pizzas
        { id: "B", text: "$\\dfrac{80}{120}$" },
        { id: "C", text: "$\\dfrac{80}{170}$" },
        // distractor: divides Saturday total by 170
        { id: "D", text: "$\\dfrac{110}{170}$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Joint Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** \"Selected at random from all $170$\" sets the denominator to the grand total $170$; Saturday large pizzas number $80$. Probability $=\\frac{80}{170}$.\n\n**The Full Solution:**\nStep 1: Selecting from the entire pool of $170$ pizzas makes this a joint probability, so the denominator is the grand total $170$.\nStep 2: The favorable count is the Saturday-and-Large cell: $80$.\nStep 3: Probability $=\\frac{80}{170}=\\frac{8}{17}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{80}{110}$): uses the Saturday total $110$ as the denominator — that answers \"given it is a Saturday pizza.\"\n* Choice B ($\\frac{80}{120}$): uses the Large total $120$ — that answers \"given it is a large pizza.\"\n* Choice D ($\\frac{110}{170}$): finds the probability of a Saturday pizza of any size, not Saturday large.\n\n**Test Day Takeaway:** \"Random from all\" means a joint probability over the grand total. \"Given\" or \"of\" a category narrows the denominator to that category's total.",
      skills: ["two-way-table", "joint-probability"]
    }
  ]
};

export default practiceTest4M2Easy;
