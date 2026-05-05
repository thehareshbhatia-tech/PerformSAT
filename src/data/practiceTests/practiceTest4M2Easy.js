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
      question: "If $5x = 45$, what is the value of $x$?",
      choices: [
        // distractor: subtracts instead of divides
        { id: "A", text: "$40$" },
        { id: "B", text: "$9$" },
        // distractor: adds instead of divides
        { id: "C", text: "$50$" },
        // distractor: leaves as 45 (stops one step early)
        { id: "D", text: "$45$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~3s):** Divide both sides by $5$: $x = 45 / 5 = 9$.\n\n**The Full Solution:**\n$5x = 45$\n$x = \\dfrac{45}{5} = 9$.\n\nVerification: $5(9) = 45$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — subtracts $5$ from $45$ instead of dividing.\n* Choice C: \"wrong operation\" — adds $5$ to $45$.\n* Choice D: \"stops one step early\" — leaves $45$ unchanged.\n\n**Test Day Takeaway:** To undo multiplication, DIVIDE both sides by the same number. To undo division, MULTIPLY.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 2,
      type: "fill-in",
      difficulty: "easy",
      band: 2,
      question: "What is $30\\%$ of $50$?",
      correctAnswer: "15",
      explanation: "**SAT Pattern: Percent of a Number**\n\n**The correct answer is $15$.**\n\n**The Fast Way (~3s):** $30\\%$ of $50 = 0.30 \\cdot 50 = 15$.\n\n**The Full Solution:**\nConvert percent to decimal: $30\\% = 0.30$.\nMultiply: $0.30 \\cdot 50 = 15$.\n\nAlternative: $\\dfrac{30}{100} \\cdot 50 = \\dfrac{3}{10} \\cdot 50 = 15$.\n\n**Common Mistakes to Avoid:**\n* Forgetting to convert: $30 \\cdot 50 = 1500$.\n* Dividing instead of multiplying: $50 / 30 \\approx 1.67$.\n\n**Test Day Takeaway:** \"Percent of\" $=$ percent (as decimal) $\\times$ number. Convert $X\\%$ to $\\dfrac{X}{100}$ or move the decimal two places left.",
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
      explanation: "**SAT Pattern: Distributing the Negative Sign**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Distribute the minus: $(2x + 5) - (x + 3) = 2x + 5 - x - 3 = x + 2$.\n\n**The Full Solution:**\n$(2x + 5) - (x + 3)$\n$= 2x + 5 - x - 3$ (distribute the minus to BOTH terms)\n$= (2x - x) + (5 - 3)$\n$= x + 2$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong sign\" — adds instead of subtracting.\n* Choice C: \"stops one step early\" — distributes the minus only to $x$, not to $3$: $2x + 5 - x + 3 = x + 8$.\n* Choice D: \"applies the inverse operation\" — distributes minus only to $3$: $2x + 5 + x - 3 = 3x + 2$.\n\n**Test Day Takeaway:** When subtracting a parenthesis, the minus sign distributes to EVERY term inside. Both $x$ AND $3$ flip sign.",
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
      explanation: "**SAT Pattern: Function Equation — Solve for Input**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $6x - 11 = 19 \\Rightarrow 6x = 30 \\Rightarrow x = 5$.\n\n**The Full Solution:**\nSet $f(x) = 19$:\n$6x - 11 = 19$\n$6x = 30$\n$x = 5$.\n\nVerification: $f(5) = 6(5) - 11 = 30 - 11 = 19$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — repeats the output value.\n* Choice C: \"stops one step early\" — divides by $6$ without adding $11$ first.\n* Choice D: \"applies the inverse operation\" — subtracts $11$ instead of adding.\n\n**Test Day Takeaway:** When given $f(x) = $ a value and asked for $x$, set the rule equal to that value and solve like any linear equation.",
      skills: ["function-evaluation", "function-notation"]
    },
    {
      id: 5,
      type: "fill-in",
      difficulty: "medium",
      band: 4,
      question: "A line in the $xy$-plane has slope $5$ and passes through the point $(0, -3)$. What is the value of $y$ when $x = 4$?",
      correctAnswer: "17",
      explanation: "**SAT Pattern: Equation of a Line + Evaluate**\n\n**The correct answer is $17$.**\n\n**The Fast Way (~10s):** $y$-intercept is $-3$, so $y = 5x - 3$. Plug $x = 4$: $y = 5(4) - 3 = 17$.\n\n**The Full Solution:**\nSlope $m = 5$ and passes through $(0, -3)$, so $y$-intercept $b = -3$.\nLine equation: $y = 5x - 3$.\nAt $x = 4$: $y = 5(4) - 3 = 20 - 3 = 17$.\n\n**Common Mistakes to Avoid:**\n* Forgetting the negative on the intercept: $5(4) + 3 = 23$.\n* Adding slope and $x$ instead of multiplying: $5 + 4 - 3 = 6$.\n\n**Test Day Takeaway:** A line through $(0, b)$ has $y$-intercept $b$. Then $y = mx + b$ for any other point.",
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
      explanation: "**SAT Pattern: Pythagorean Theorem (5-12-13 Triple)**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $5$-$12$-$13$ is a Pythagorean triple. The other leg is $12$.\n\n**The Full Solution:**\nPythagorean theorem: $a^2 + b^2 = c^2$, where $c$ is the hypotenuse.\n$5^2 + b^2 = 13^2$\n$25 + b^2 = 169$\n$b^2 = 144$\n$b = 12$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong sign\" — adds the squares ($25 + 169 = 194$) instead of subtracting.\n* Choice C: \"applies the inverse operation\" — subtracts directly ($13 - 5 = 8$) without using squares.\n* Choice D: \"stops one step early\" — leaves $b^2 = 144$ without taking the square root.\n\n**Test Day Takeaway:** When the hypotenuse is given, use $b^2 = c^2 - a^2$. Common Pythagorean triples: $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$, $7$-$24$-$25$.",
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
      explanation: "**SAT Pattern: Median for Even-Count Data Set**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** New sorted set: $\\{4, 9, 11, 14, 15, 22\\}$. Even count of $6$, so median is the average of the $3$rd and $4$th values: $(11 + 14)/2 = 12.5$.\n\n**The Full Solution:**\nAfter adding $14$, sort the data: $\\{4, 9, 11, 14, 15, 22\\}$.\nWith an even count ($6$), the median is the average of the two middle values:\nMiddle two: $11$ and $14$.\nMedian $= \\dfrac{11 + 14}{2} = 12.5$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — gives the new value $14$ rather than the median.\n* Choice B: \"stops one step early\" — keeps the original median $11$ as if no change occurred.\n* Choice D: \"applies the inverse operation\" — labels the answer as the mean (also $12.5$ here, but the question asks for the median).\n\n**Test Day Takeaway:** For odd counts, median $=$ middle value. For even counts, median $=$ average of the two middles. Always sort first.",
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
      explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Find two numbers that multiply to $-12$ and add to $-4$: $-6$ and $2$. So $(x - 6)(x + 2) = 0$, giving $x = 6$ or $x = -2$.\n\n**The Full Solution:**\nTo factor $x^2 + bx + c$: find two numbers with product $c = -12$ and sum $b = -4$.\nNumbers: $-6$ and $2$ (since $-6 \\cdot 2 = -12$ and $-6 + 2 = -4$).\n\n$x^2 - 4x - 12 = (x - 6)(x + 2) = 0$\n$x = 6$ or $x = -2$.\n\nVerification: $6^2 - 4(6) - 12 = 36 - 24 - 12 = 0$ \\checkmark; $(-2)^2 - 4(-2) - 12 = 4 + 8 - 12 = 0$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong sign\" — flips the signs of both roots.\n* Choice C: \"wrong base\" — uses the coefficients $b$ and $c$ directly as the roots.\n* Choice D: \"wrong sign\" — makes both roots negative.\n\n**Test Day Takeaway:** When factoring $x^2 + bx + c$, look for two numbers with product $c$ and sum $b$. The roots are the OPPOSITES of those numbers.",
      skills: ["finding-roots-factoring", "quadratic-equations"]
    },
    {
      id: 9,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A water tank holds $48$ gallons when full. If it is currently $\\dfrac{5}{8}$ full, how many gallons of water are in the tank?",
      correctAnswer: "30",
      explanation: "**SAT Pattern: Fraction of a Whole**\n\n**The correct answer is $30$.**\n\n**The Fast Way (~5s):** $\\dfrac{5}{8}$ of $48 = \\dfrac{5 \\cdot 48}{8} = \\dfrac{240}{8} = 30$ gallons.\n\n**The Full Solution:**\n$\\dfrac{5}{8}$ of $48$ means $\\dfrac{5}{8} \\times 48$.\nSimplify: $\\dfrac{5 \\cdot 48}{8} = \\dfrac{5 \\cdot 6 \\cdot 8}{8} = 5 \\cdot 6 = 30$ gallons.\n\nAlternative: $48 / 8 = 6$ gallons per eighth, so $5$ eighths $= 5 \\cdot 6 = 30$ gallons.\n\n**Common Mistakes to Avoid:**\n* Adding $5 + 8 = 13$ then dividing.\n* Computing $48 / 5 = 9.6$ (using only the numerator as denominator).\n\n**Test Day Takeaway:** \"Fraction of a quantity\" $=$ fraction $\\times$ quantity. Cancel before multiplying for cleaner arithmetic.",
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
      explanation: "**SAT Pattern: Equation of a Line from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Slope $= \\dfrac{8 - (-1)}{5 - 2} = \\dfrac{9}{3} = 3$. Use point-slope at $(2, -1)$: $y = 3(x - 2) - 1 = 3x - 7$.\n\n**The Full Solution:**\nSlope: $m = \\dfrac{8 - (-1)}{5 - 2} = \\dfrac{9}{3} = 3$.\n\nUsing point-slope form with $(2, -1)$: $y - (-1) = 3(x - 2)$\n$y + 1 = 3x - 6$\n$y = 3x - 7$.\n\nVerification: at $x = 5$: $y = 3(5) - 7 = 15 - 7 = 8$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses $8$ from $(5, 8)$ as the $y$-intercept.\n* Choice C: \"wrong sign\" — flips the slope sign.\n* Choice D: \"applies the inverse operation\" — swaps slope and intercept.\n\n**Test Day Takeaway:** $y$-intercept of a line through $(x_0, y_0)$ with slope $m$ is $b = y_0 - m \\cdot x_0$. Verify by plugging the other point in.",
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
      explanation: "**SAT Pattern: Complement Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Total $= 7 + 3 + 10 = 20$. Not blue $= 7 + 3 = 10$. $P = \\dfrac{10}{20} = \\dfrac{1}{2}$.\n\n**The Full Solution:**\nMethod 1 (direct): not blue means red OR black: $7 + 3 = 10$ pens. Total $= 20$. $P(\\text{not blue}) = \\dfrac{10}{20} = \\dfrac{1}{2}$.\n\nMethod 2 (complement): $P(\\text{blue}) = \\dfrac{10}{20} = \\dfrac{1}{2}$. $P(\\text{not blue}) = 1 - \\dfrac{1}{2} = \\dfrac{1}{2}$.\n\n**Why the wrong answers are tempting:**\n* Choices A and B: present the same value but as unsimplified fractions. Always simplify when possible.\n* Choice D: \"wrong base\" — uses black count over blue count.\n\n**Test Day Takeaway:** $P(\\text{not } A) = 1 - P(A)$. Or count favorable directly: not blue $=$ red $+$ black.",
      skills: ["probability-basics", "complement"]
    },
    {
      id: 12,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A rectangle has length $12$ centimeters and width $5$ centimeters. What is the length of the diagonal of the rectangle, in centimeters?",
      correctAnswer: "13",
      explanation: "**SAT Pattern: Pythagorean Theorem on a Rectangle**\n\n**The correct answer is $13$.**\n\n**The Fast Way (~5s):** The diagonal is the hypotenuse of a $5$-$12$-$13$ right triangle: $13$.\n\n**The Full Solution:**\nThe diagonal of a rectangle splits it into two right triangles whose legs are the sides:\n$d^2 = \\ell^2 + w^2 = 12^2 + 5^2 = 144 + 25 = 169$\n$d = \\sqrt{169} = 13$.\n\n**Common Mistakes to Avoid:**\n* Adding the sides directly: $12 + 5 = 17$.\n* Computing the perimeter: $2(12) + 2(5) = 34$.\n* Computing the area: $12 \\cdot 5 = 60$.\n\n**Test Day Takeaway:** Rectangle diagonal $= \\sqrt{\\ell^2 + w^2}$. Look for Pythagorean triples ($3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$).",
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
      explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Substitute $y = x + 2$ into the first equation: $3x + (x + 2) = 14 \\Rightarrow 4x + 2 = 14 \\Rightarrow x = 3$. Then $y = 3 + 2 = 5$.\n\n**The Full Solution:**\nSubstitute $y = x + 2$ into $3x + y = 14$:\n$3x + (x + 2) = 14$\n$4x + 2 = 14$\n$4x = 12$\n$x = 3$.\n\nThen $y = 3 + 2 = 5$.\n\nVerification: in first equation, $3(3) + 5 = 14$ \\checkmark.\nSolution: $(x, y) = (3, 5)$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — swaps $x$ and $y$.\n* Choice C: \"wrong base\" — uses the right-hand sides ($14$ and $2$) as coordinates.\n* Choice D: \"stops one step early\" — divides $14$ by $3$ without simplifying first.\n\n**Test Day Takeaway:** When one equation is solved for $y$ (or $x$), substitute the expression into the other equation. Single variable, then back-substitute.",
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
      explanation: "**SAT Pattern: Exponential Decay with Half-Life**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Half-life $= 5$ years $\\Rightarrow$ multiply by $\\frac{1}{2}$ every $5$ years. After $t$ years: $80 \\cdot \\left(\\frac{1}{2}\\right)^{t/5}$.\n\n**The Full Solution:**\nGeneral exponential decay: $A(t) = A_0 \\cdot r^{\\frac{t}{d}}$, where:\n* $A_0 = 80$ grams (initial)\n* $r = \\frac{1}{2}$ (halves)\n* $d = 5$ years (half-life period).\n\nSo $A(t) = 80 \\cdot \\left(\\frac{1}{2}\\right)^{t/5}$.\n\nCheck: $t = 0 \\Rightarrow A = 80$. $t = 5 \\Rightarrow A = 40$. $t = 10 \\Rightarrow A = 20$ (halving each $5$ years) \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — linear decay instead of exponential.\n* Choice C: \"wrong sign\" — uses base $2$ (doubling) instead of $\\frac{1}{2}$ (halving).\n* Choice D: \"stops one step early\" — uses exponent $t$ instead of $\\frac{t}{5}$ (would halve every YEAR rather than every $5$ years).\n\n**Test Day Takeaway:** Half-life of $d$ time units $\\Rightarrow$ multiply by $\\left(\\frac{1}{2}\\right)^{t/d}$. The exponent is time DIVIDED BY half-life period.",
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
      explanation: "**SAT Pattern: SOH-CAH-TOA — Tangent in a 9-40-41 Triangle**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $\\tan(\\theta) = \\dfrac{\\text{opp}}{\\text{adj}} = \\dfrac{9}{40}$.\n\n**The Full Solution:**\nFor an acute angle in a right triangle:\n* $\\tan(\\theta) = \\dfrac{\\text{opposite}}{\\text{adjacent}} = \\dfrac{9}{40}$.\n\nNote: hypotenuse here would be $\\sqrt{9^2 + 40^2} = \\sqrt{81 + 1600} = \\sqrt{1681} = 41$. This is the $9$-$40$-$41$ Pythagorean triple.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"applies the inverse operation\" — gives $\\cot(\\theta) = \\frac{\\text{adj}}{\\text{opp}}$.\n* Choice C: \"wrong base\" — gives $\\sin(\\theta) = \\frac{9}{41}$.\n* Choice D: \"wrong base\" — gives $\\cos(\\theta) = \\frac{40}{41}$.\n\n**Test Day Takeaway:** TOA: $\\tan = \\frac{\\text{opp}}{\\text{adj}}$. Tangent does NOT use the hypotenuse — only the two legs.",
      skills: ["soh-cah-toa", "right-triangles"]
    },
    {
      id: 16,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A printer prints $24$ pages per minute. How many pages will it print in $1$ hour and $15$ minutes?",
      correctAnswer: "1800",
      explanation: "**SAT Pattern: Rate × Time with Mixed Units**\n\n**The correct answer is $1800$.**\n\n**The Fast Way (~10s):** $1$ hr $15$ min $= 75$ min. Pages $= 24 \\cdot 75 = 1800$.\n\n**The Full Solution:**\nConvert time to a single unit (minutes):\n$1$ hr $15$ min $= 60 + 15 = 75$ minutes.\nPages $=$ rate $\\times$ time $= 24 \\cdot 75 = 1800$.\n\n**Common Mistakes to Avoid:**\n* Treating $1$ hr $15$ min as $1.15$ hr.\n* Using only $60$ minutes (forgetting the $15$): $24 \\cdot 60 = 1440$.\n* Multiplying by $1$ hour value $\\cdot$ $15$ separately and not adding.\n\n**Test Day Takeaway:** Convert all time to one unit. $1$ hr $15$ min $= 75$ min $= 1.25$ hr. Then multiply rate by total time.",
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
      explanation: "**SAT Pattern: Identifying Identity / Contradiction Equations**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Distribute: $4x + 8 - 2x = 2x + 8 \\Rightarrow 2x + 8 = 2x + 8$. Always true $\\Rightarrow$ infinitely many solutions.\n\n**The Full Solution:**\nDistribute on the left: $4(x + 2) - 2x = 4x + 8 - 2x = 2x + 8$.\nThe equation becomes: $2x + 8 = 2x + 8$.\nSubtract $2x$: $8 = 8$. ALWAYS TRUE.\n\nSince the equation is true for every value of $x$, it has INFINITELY MANY solutions.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"wrong sign\" — confuses identity ($8 = 8$) with contradiction (would give $0$ solutions).\n* Choice C: \"applies the inverse operation\" — assumes a generic linear equation has exactly one solution.\n* Choice D: \"wrong base\" — quadratic-flavored.\n\n**Test Day Takeaway:** Simplify both sides fully. Identical sides $\\Rightarrow$ infinitely many solutions. Same variable terms but different constants $\\Rightarrow$ no solutions.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 18,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "A circle has center $(2, -3)$ and passes through the point $(2, 4)$. What is the radius of the circle?",
      correctAnswer: "7",
      explanation: "**SAT Pattern: Distance from Center as Radius**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~5s):** Same $x$-coordinate, so distance is just $|4 - (-3)| = 7$.\n\n**The Full Solution:**\nThe radius equals the distance from the center to any point on the circle.\nDistance formula: $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.\n\n$r = \\sqrt{(2 - 2)^2 + (4 - (-3))^2} = \\sqrt{0 + 49} = 7$.\n\nSince $x$-coordinates match, the points lie on a vertical line, and the distance is just the difference in $y$-values: $4 - (-3) = 7$.\n\n**Common Mistakes to Avoid:**\n* Subtracting in the wrong direction without absolute value: $-3 - 4 = -7$ (radius must be positive).\n* Adding instead of subtracting: $4 + 3 = 7$ — coincidentally correct here, but only because both signs work out; not a reliable method.\n* Forgetting the negative on $-3$: $|4 - 3| = 1$.\n\n**Test Day Takeaway:** A circle's radius equals the distance from the center to any point on it. When points share an $x$- or $y$-coordinate, the distance is just the difference in the other coordinate.",
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
      explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $f(-3) = (-3)^2 + 4(-3) - 5 = 9 - 12 - 5 = -8$.\n\n**The Full Solution:**\nSubstitute $x = -3$ into $f(x) = x^2 + 4x - 5$:\n$f(-3) = (-3)^2 + 4(-3) - 5$\n$= 9 + (-12) + (-5)$\n$= 9 - 12 - 5$\n$= -8$.\n\nKey: $(-3)^2 = +9$ (squaring removes the sign), and $4(-3) = -12$ (positive times negative).\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses $-3$ instead of $(-3)^2$ for the squared term.\n* Choice C: \"wrong sign\" — uses $(-3)^2 = -9$ (incorrect) instead of $+9$.\n* Choice D: \"stops one step early\" — computes $9 - 12 = -3$ but forgets to subtract $5$.\n\n**Test Day Takeaway:** $(-a)^2 = a^2$ ($\\geq 0$). Track signs carefully when substituting negatives.",
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
      explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Parallel slope $= 4$. Use point $(1, 6)$: $6 = 4(1) + b \\Rightarrow b = 2$. Equation: $y = 4x + 2$.\n\n**The Full Solution:**\nParallel lines share slope: $m = 4$.\nUse $y = mx + b$ with the point $(1, 6)$:\n$6 = 4(1) + b \\Rightarrow b = 2$.\nEquation: $y = 4x + 2$.\n\nVerification: at $(1, 6)$: $4(1) + 2 = 6$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives the original line (which doesn't pass through $(1, 6)$).\n* Choice C: \"applies the inverse operation\" — uses the perpendicular slope ($-\\frac{1}{4}$) instead.\n* Choice D: \"wrong base\" — uses $y$-coordinate of the point as the intercept directly.\n\n**Test Day Takeaway:** Parallel lines have IDENTICAL slopes. Plug the given point into $y = mx + b$ to find the new intercept $b$.",
      skills: ["parallel-line-slope", "writing-parallel-equation"]
    },
    {
      id: 21,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "A scatterplot shows the relationship between the temperature $x$ (in degrees Fahrenheit) and the daily ice cream sales $y$ (in dollars) at a shop. The line of best fit is $\\hat{y} = 12x - 200$. Based on the model, by how many dollars do daily sales increase for each $1^{\\circ}\\text{F}$ increase in temperature?",
      correctAnswer: "12",
      explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~5s):** In $\\hat{y} = 12x - 200$, slope $12$ is the predicted increase in $y$ per one-unit increase in $x$.\n\n**The Full Solution:**\nFor a linear model $\\hat{y} = mx + b$:\n* slope $m$ $=$ predicted change in $y$ per one-unit change in $x$.\n* intercept $b$ $=$ predicted $y$ when $x = 0$.\n\nHere $m = 12$: each $1^{\\circ}\\text{F}$ rise predicts \\$$12$ more in sales.\n\n**Common Mistakes to Avoid:**\n* Reporting $-200$ (the intercept — predicted sales at $0^{\\circ}\\text{F}$, which is also unrealistic but is what the model says).\n* Reporting $200$ (drops the negative).\n* Reporting a specific predicted value like $\\hat{y}(1) = -188$.\n\n**Test Day Takeaway:** In $\\hat{y} = mx + b$, slope $m$ tells you how much $y$ changes per one-unit change in $x$. Always use the slope for \"rate of change per unit\" questions.",
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
      explanation: "**SAT Pattern: Joint Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** \"Selected at random from all $170$\" $\\Rightarrow$ denominator $= 170$. Saturday large $= 80$. Probability $= \\dfrac{80}{170}$.\n\n**The Full Solution:**\nA random selection from the entire pool ($170$ pizzas) is a JOINT probability — denominator is the grand total.\nFavorable: Saturday AND Large $= 80$.\nProbability $= \\dfrac{80}{170} = \\dfrac{8}{17}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — uses Saturday total ($110$) as denominator (this would answer \"of Saturday pizzas, what fraction were large?\").\n* Choice B: \"applies the inverse operation\" — uses total Large pizzas ($120$) as denominator (this would answer \"of large pizzas, what fraction were Saturday?\").\n* Choice D: \"wrong base\" — gives the probability of Saturday rather than Saturday-large.\n\n**Test Day Takeaway:** \"Random from ALL\" $\\Rightarrow$ joint probability with grand-total denominator. \"Given\" or \"of\" some category $\\Rightarrow$ conditional probability with that category total in the denominator.",
      skills: ["two-way-table", "joint-probability"]
    }
  ]
};

export default practiceTest4M2Easy;
