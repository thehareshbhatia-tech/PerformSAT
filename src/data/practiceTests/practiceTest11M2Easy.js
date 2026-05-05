// Practice Test 11 — Math Module 2 Easy variant (22 questions)
// For students routed to easier path after Module 1 (~<60% correct).
// Distribution: 3E / 13M / 6H. Q1-3 easy openers. Max-score ceiling: ~650.

export const practiceTest11M2Easy = {
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
      question: "If $x + 9 = 23$, what is the value of $x$?",
      choices: [
        // distractor: adds 9 instead of subtracting
        { id: "A", text: "$32$" },
        // distractor: divides by 9 — gives near 2.5
        { id: "B", text: "$2$" },
        { id: "C", text: "$14$" },
        // distractor: subtracts 23 from 9
        { id: "D", text: "$-14$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Subtract $9$: $x = 23 - 9 = 14$.\n\n**The Full Solution:**\n$x + 9 = 23$\n$x = 23 - 9$\n$x = 14$.\n\nVerification: $14 + 9 = 23$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — adds $9$ instead of subtracting.\n* Choice B: \"wrong base\" — divides $23$ by $9$ approximately.\n* Choice D: \"sign error\" — subtracts in the wrong direction.\n\n**Test Day Takeaway:** To isolate $x$, undo the operation. $+9$ is undone by $-9$.",
      skills: ["solving-equations"]
    },
    {
      id: 2,
      type: "multiple-choice",
      difficulty: "easy",
      band: 3,
      question: "What is $\\dfrac{3}{4}$ expressed as a decimal?",
      choices: [
        // distractor: 3 + 4 = 7, then 0.07
        { id: "A", text: "$0.07$" },
        { id: "B", text: "$0.75$" },
        // distractor: flips numerator and denominator — 4/3
        { id: "C", text: "$1.33$" },
        // distractor: drops decimal — gives 75
        { id: "D", text: "$7.5$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Fraction-Decimal Conversion**\n\n**Choice B is correct.**\n\n**The Fast Way (~3s):** $\\dfrac{3}{4} = 0.75$.\n\n**The Full Solution:**\n$\\dfrac{3}{4} = 3 \\div 4 = 0.75$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — adds numerator and denominator.\n* Choice C: \"applies the inverse operation\" — flips the fraction to $\\dfrac{4}{3} \\approx 1.33$.\n* Choice D: \"misplaces decimal\" — gives the percent ($75\\%$) but with a stray decimal.\n\n**Test Day Takeaway:** Memorize: $\\dfrac{1}{4} = 0.25$, $\\dfrac{1}{2} = 0.5$, $\\dfrac{3}{4} = 0.75$, $\\dfrac{1}{5} = 0.2$.",
      skills: ["percent-decimal-conversion"]
    },
    {
      id: 3,
      type: "multiple-choice",
      difficulty: "easy",
      band: 3,
      question: "A triangle has angles measuring $50^{\\circ}$, $70^{\\circ}$, and $x^{\\circ}$. What is the value of $x$?",
      choices: [
        // distractor: sums the two given
        { id: "A", text: "$120$" },
        { id: "B", text: "$60$" },
        // distractor: 360 - 50 - 70
        { id: "C", text: "$240$" },
        // distractor: averages the two given
        { id: "D", text: "$30$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $x = 180 - 50 - 70 = 60$.\n\n**The Full Solution:**\nThe interior angles of a triangle sum to $180^{\\circ}$.\n$50 + 70 + x = 180$\n$120 + x = 180$\n$x = 60$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — sums the two given angles ($120$).\n* Choice C: \"wrong base\" — uses $360^{\\circ}$ (sum for a quadrilateral).\n* Choice D: \"wrong base\" — averages the given angles.\n\n**Test Day Takeaway:** Triangle angles sum to $180^{\\circ}$. Quadrilaterals: $360^{\\circ}$. Pentagons: $540^{\\circ}$.",
      skills: ["triangle-angle-sum"]
    },
    // ============================================================
    // Q4-Q16: Medium core (band 4-5)
    // ============================================================
    {
      id: 4,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "If $f(x) = x^2 - 3x + 2$, what is the value of $f(4)$?",
      choices: [
        { id: "A", text: "$6$" },
        // distractor: forgets to add 2 — 16 - 12
        { id: "B", text: "$4$" },
        // distractor: arithmetic — 4^2 - 3(4) - 2
        { id: "C", text: "$2$" },
        // distractor: 4^2 + 3(4) + 2 (sign error on middle)
        { id: "D", text: "$30$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Function Evaluation with Quadratic**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $f(4) = 16 - 12 + 2 = 6$.\n\n**The Full Solution:**\n$f(4) = (4)^2 - 3(4) + 2 = 16 - 12 + 2 = 6$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"stops one step early\" — computes $16 - 12 = 4$ but forgets the $+ 2$.\n* Choice C: \"sign error\" — subtracts the $2$ at the end.\n* Choice D: \"sign error\" — flips the middle sign and gets $16 + 12 + 2 = 30$.\n\n**Test Day Takeaway:** When evaluating $f(a)$, replace EVERY $x$ with $a$, then carefully apply order of operations. Use parentheses for negatives.",
      skills: ["function-evaluation"]
    },
    {
      id: 5,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "Solve the system of equations.\n\n$y = 2x + 1$\n$y = -x + 7$",
      choices: [
        // distractor: switches x and y
        { id: "A", text: "$(5, 2)$" },
        { id: "B", text: "$(2, 5)$" },
        // distractor: adds the equations literally
        { id: "C", text: "$(3, 4)$" },
        // distractor: averages
        { id: "D", text: "$(4, 3)$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: System by Substitution**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Set equal: $2x + 1 = -x + 7 \\Rightarrow 3x = 6 \\Rightarrow x = 2$. Then $y = 2(2) + 1 = 5$.\n\n**The Full Solution:**\nSince both equal $y$: $2x + 1 = -x + 7$.\n$3x = 6$\n$x = 2$.\n$y = 2(2) + 1 = 5$.\nSolution: $(2, 5)$.\n\nVerification: $5 = 2(2) + 1$ \\checkmark and $5 = -2 + 7$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"switches coordinates\" — gives $(y, x)$ instead of $(x, y)$.\n* Choice C: \"wrong base\" — adds the right-hand sides without solving.\n* Choice D: \"wrong base\" — guesses an average.\n\n**Test Day Takeaway:** When both equations are solved for $y$, set them equal and solve for $x$ first.",
      skills: ["substitution-method"]
    },
    {
      id: 6,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "If $\\dfrac{2x + 4}{6} = 5$, what is the value of $x$?",
      correctAnswer: "13",
      explanation: "**SAT Pattern: Linear Equation with a Fraction**\n\n**Answer: $13$.**\n\n**The Fast Way (~10s):** Multiply by $6$: $2x + 4 = 30$. Subtract $4$: $2x = 26$. Divide: $x = 13$.\n\n**The Full Solution:**\n$\\dfrac{2x + 4}{6} = 5$\n\nMultiply both sides by $6$: $2x + 4 = 30$.\nSubtract $4$: $2x = 26$.\nDivide by $2$: $x = 13$.\n\nVerification: $\\dfrac{2(13) + 4}{6} = \\dfrac{30}{6} = 5$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Multiplying only the numerator by $6$ without distributing carefully.\n* Forgetting to subtract $4$ before dividing.\n* Dividing $30$ by $2$ first ($15$) then subtracting $2$.\n\n**Test Day Takeaway:** Clear the fraction first by multiplying both sides by the denominator. Then solve the resulting linear equation step by step.",
      skills: ["solving-equations"]
    },
    {
      id: 7,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "If $\\sqrt{x + 5} = 7$, what is the value of $x$?",
      choices: [
        // distractor: stops at 49 - 5 — actually correct? Let me make it different
        { id: "A", text: "$2$" },
        { id: "B", text: "$44$" },
        // distractor: 7 - 5 without squaring
        { id: "C", text: "$54$" },
        // distractor: 7^2 + 5
        { id: "D", text: "$49$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Square Root Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Square both sides: $x + 5 = 49$. So $x = 44$.\n\n**The Full Solution:**\n$\\sqrt{x + 5} = 7$\n\nSquare both sides: $x + 5 = 49$.\nSubtract $5$: $x = 44$.\n\nVerification: $\\sqrt{44 + 5} = \\sqrt{49} = 7$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — uses $7 - 5 = 2$ without squaring.\n* Choice C: \"sign error\" — adds $5$ to $49$ instead of subtracting.\n* Choice D: \"stops one step early\" — gives $7^2 = 49$ as the value of $x$.\n\n**Test Day Takeaway:** To eliminate a square root, square both sides. Then solve the resulting equation. Always verify the answer in the original equation.",
      skills: ["solving-equations"]
    },
    {
      id: 8,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The graph of a line in the $xy$-plane has slope $\\dfrac{2}{3}$ and passes through the point $(0, -4)$. What is the equation of the line?",
      choices: [
        // distractor: sign error on intercept
        { id: "A", text: "$y = \\dfrac{2}{3}x + 4$" },
        { id: "B", text: "$y = \\dfrac{2}{3}x - 4$" },
        // distractor: flips slope
        { id: "C", text: "$y = \\dfrac{3}{2}x - 4$" },
        // distractor: uses x-intercept instead of y-intercept
        { id: "D", text: "$y = \\dfrac{2}{3}(x - 4)$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Slope-Intercept Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Slope $\\dfrac{2}{3}$ and $y$-intercept $-4$ gives $y = \\dfrac{2}{3}x - 4$.\n\n**The Full Solution:**\nSlope-intercept form: $y = mx + b$.\n$m = \\dfrac{2}{3}$, $b = -4$.\nThe line: $y = \\dfrac{2}{3}x - 4$.\n\nVerification: at $x = 0$, $y = -4$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"sign error\" — uses $+4$ instead of $-4$.\n* Choice C: \"applies the inverse operation\" — flips the slope to $\\dfrac{3}{2}$.\n* Choice D: \"wrong base\" — treats $-4$ as an $x$-shift in point-slope form.\n\n**Test Day Takeaway:** A point of the form $(0, b)$ IS the $y$-intercept. Plug it directly into $y = mx + b$.",
      skills: ["slope-intercept-form"]
    },
    {
      id: 9,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A jar contains $4$ red marbles, $6$ blue marbles, and $5$ green marbles. If one marble is drawn at random, what is the probability that it is NOT green?",
      choices: [
        // distractor: P(green)
        { id: "A", text: "$\\dfrac{5}{15}$" },
        { id: "B", text: "$\\dfrac{10}{15}$" },
        // distractor: 4/15 (just red)
        { id: "C", text: "$\\dfrac{4}{15}$" },
        // distractor: 6/15 (just blue)
        { id: "D", text: "$\\dfrac{6}{15}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Complement Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Total $= 15$. Not green $= 4 + 6 = 10$. $P(\\text{not green}) = \\dfrac{10}{15}$.\n\n**The Full Solution:**\nTotal marbles: $4 + 6 + 5 = 15$.\nNot green = red + blue = $4 + 6 = 10$.\n$P(\\text{not green}) = \\dfrac{10}{15} = \\dfrac{2}{3}$.\n\nAlternatively: $P(\\text{not green}) = 1 - P(\\text{green}) = 1 - \\dfrac{5}{15} = \\dfrac{10}{15}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — gives $P(\\text{green})$.\n* Choice C: \"stops one step early\" — gives only red.\n* Choice D: \"stops one step early\" — gives only blue.\n\n**Test Day Takeaway:** $P(\\text{not } A) = 1 - P(A)$. The complement is often faster than counting positive cases.",
      skills: ["probability-basics"]
    },
    {
      id: 10,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "What is the median of the following data set?\n\n$3, 7, 11, 14, 18, 21, 25$",
      choices: [
        { id: "A", text: "$14$" },
        // distractor: gives the mean
        { id: "B", text: "$14.14$" },
        // distractor: gives the range
        { id: "C", text: "$22$" },
        // distractor: the middle value of position rather than value
        { id: "D", text: "$4$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Median of a Sorted List**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $7$ values sorted; the middle (4th) is $14$.\n\n**The Full Solution:**\nThe data is already sorted: $3, 7, 11, \\mathbf{14}, 18, 21, 25$.\nWith $7$ values, the median is the $4$th value: $14$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"wrong base\" — gives the mean: $\\dfrac{99}{7} \\approx 14.14$.\n* Choice C: \"wrong base\" — gives the range: $25 - 3 = 22$.\n* Choice D: \"wrong base\" — gives the position (4) instead of the value.\n\n**Test Day Takeaway:** For a sorted list of odd length, the median is the middle term (position $\\dfrac{n+1}{2}$). For even length, average the two middle terms.",
      skills: ["find-median"]
    },
    {
      id: 11,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A bicycle is on sale for $\\$240$ after a $20\\%$ discount. What was the original price of the bicycle, in dollars?",
      correctAnswer: "300",
      explanation: "**SAT Pattern: Reverse Percent**\n\n**Answer: $300$.**\n\n**The Fast Way (~15s):** $\\$240$ is $80\\%$ of the original. Original $= \\dfrac{240}{0.80} = 300$.\n\n**The Full Solution:**\nLet $x$ be the original price. After a $20\\%$ discount: $0.80x = 240$.\n$x = \\dfrac{240}{0.80} = 300$.\n\nVerification: $20\\%$ off $\\$300$ is $\\$60$, so sale price $= 300 - 60 = \\$240$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Adding $20\\%$ of $240$: $240 + 48 = 288$ (wrong base).\n* Multiplying $240$ by $0.80$ instead of dividing.\n* Adding $20$ as dollars: $240 + 20 = 260$.\n\n**Test Day Takeaway:** \"After a $20\\%$ discount\" means the sale price is $80\\%$ of the original. To reverse: divide by $0.80$.",
      skills: ["percent-change", "percent-word-problems"]
    },
    {
      id: 12,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "Which expression is equivalent to $5(2x - 3) - 2(x + 4)$?",
      choices: [
        // distractor: forgets to distribute the negative
        { id: "A", text: "$8x - 7$" },
        { id: "B", text: "$8x - 23$" },
        // distractor: adds wrong
        { id: "C", text: "$12x - 23$" },
        // distractor: keeps the +4 sign
        { id: "D", text: "$8x - 11$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Distribute and Combine**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Distribute: $10x - 15 - 2x - 8 = 8x - 23$.\n\n**The Full Solution:**\n$5(2x - 3) - 2(x + 4)$\n$= 10x - 15 - 2x - 8$\n$= (10x - 2x) + (-15 - 8)$\n$= 8x - 23$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"sign error\" — keeps $+8$ instead of $-8$ when distributing $-2$.\n* Choice C: \"arithmetic slip\" — adds $10x + 2x$ instead of $10x - 2x$.\n* Choice D: \"sign error\" — drops a sign while combining constants.\n\n**Test Day Takeaway:** A negative outside parentheses flips the sign of every term inside. Be especially careful with $-(x + 4) = -x - 4$.",
      skills: ["distributive-property", "combining-like-terms"]
    },
    {
      id: 13,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The bar graph (described below) shows the number of books read by five students last month: Alex read $8$, Bree read $5$, Cara read $11$, Devon read $4$, and Eli read $7$. What is the average (arithmetic mean) number of books read?",
      choices: [
        // distractor: gives median
        { id: "A", text: "$8$" },
        { id: "B", text: "$7$" },
        // distractor: gives mode (none, picks 8 instead)
        { id: "C", text: "$5.5$" },
        // distractor: total
        { id: "D", text: "$35$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Mean of a Small Data Set**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $\\dfrac{8 + 5 + 11 + 4 + 7}{5} = \\dfrac{35}{5} = 7$.\n\n**The Full Solution:**\nSum $= 8 + 5 + 11 + 4 + 7 = 35$.\nMean $= \\dfrac{35}{5} = 7$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — gives the median (sorted: $4, 5, 7, 8, 11$).\n* Choice C: \"wrong base\" — averages two values incorrectly.\n* Choice D: \"stops one step early\" — gives the total without dividing.\n\n**Test Day Takeaway:** Mean $= \\dfrac{\\text{sum}}{\\text{count}}$. Always finish by dividing.",
      skills: ["calculate-mean"]
    },
    {
      id: 14,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A line passes through the points $(1, 5)$ and $(4, 14)$. What is the equation of the line in slope-intercept form?",
      choices: [
        // distractor: keeps just the slope, no constant
        { id: "A", text: "$y = 3x$" },
        { id: "B", text: "$y = 3x + 2$" },
        // distractor: takes y-intercept as 5 (one of the y-values)
        { id: "C", text: "$y = 3x + 5$" },
        // distractor: uses rise as slope without dividing
        { id: "D", text: "$y = 9x + 2$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Equation of a Line through Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Slope $= \\dfrac{14 - 5}{4 - 1} = \\dfrac{9}{3} = 3$. At $(1, 5)$: $5 = 3(1) + b$, so $b = 2$. Line: $y = 3x + 2$.\n\n**The Full Solution:**\nSlope $= \\dfrac{14 - 5}{4 - 1} = \\dfrac{9}{3} = 3$.\nUse point $(1, 5)$: $5 = 3(1) + b \\Rightarrow b = 2$.\nLine: $y = 3x + 2$.\n\nVerification: at $(4, 14)$: $3(4) + 2 = 14$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives the slope without finding $b$.\n* Choice C: \"wrong base\" — uses one of the $y$-values as the $y$-intercept.\n* Choice D: \"applies the inverse operation\" — uses rise as slope without dividing by run.\n\n**Test Day Takeaway:** Always compute slope first ($\\dfrac{\\Delta y}{\\Delta x}$), then plug a point into $y = mx + b$ to find $b$.",
      skills: ["slope-from-points", "slope-intercept-form"]
    },
    {
      id: 15,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A right triangle has one leg of length $8$ and a hypotenuse of length $10$. What is the length of the other leg?",
      correctAnswer: "6",
      explanation: "**SAT Pattern: Pythagorean Theorem (6-8-10 = 2x 3-4-5)**\n\n**Answer: $6$.**\n\n**The Fast Way (~5s):** Recognize $6$-$8$-$10$ as $2 \\cdot (3$-$4$-$5)$. Other leg $= 6$.\n\n**The Full Solution:**\n$a^2 + b^2 = c^2$\n$8^2 + b^2 = 10^2$\n$64 + b^2 = 100$\n$b^2 = 36$\n$b = 6$.\n\nVerification: $6^2 + 8^2 = 36 + 64 = 100 = 10^2$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Adding $8 + 10 = 18$ — but $18^2 \\neq$ any side squared.\n* Computing $\\sqrt{100 + 64} = \\sqrt{164}$ — wrong direction.\n* Forgetting to take the square root at the end.\n\n**Test Day Takeaway:** SAT loves Pythagorean triples scaled by integers. $6$-$8$-$10$, $9$-$12$-$15$ are just $3$-$4$-$5$ times a constant.",
      skills: ["pythagorean-theorem", "triangles"]
    },
    {
      id: 16,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "If $\\dfrac{x}{4} + 7 = 12$, what is the value of $x$?",
      choices: [
        // distractor: stops at x/4 = 5
        { id: "A", text: "$5$" },
        { id: "B", text: "$20$" },
        // distractor: 12 * 4 = 48
        { id: "C", text: "$48$" },
        // distractor: 12 - 7 / 4 = 5/4
        { id: "D", text: "$\\dfrac{5}{4}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Two-Step Equation with Fraction**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Subtract $7$: $\\dfrac{x}{4} = 5$. Multiply by $4$: $x = 20$.\n\n**The Full Solution:**\n$\\dfrac{x}{4} + 7 = 12$\n$\\dfrac{x}{4} = 5$\n$x = 5 \\cdot 4 = 20$.\n\nVerification: $\\dfrac{20}{4} + 7 = 5 + 7 = 12$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives $\\dfrac{x}{4} = 5$ as the answer.\n* Choice C: \"wrong base\" — multiplies $12$ by $4$ before subtracting $7$.\n* Choice D: \"wrong base\" — divides $5$ by $4$ instead of multiplying.\n\n**Test Day Takeaway:** Undo addition before multiplication/division. To undo division by $4$, multiply both sides by $4$.",
      skills: ["solving-equations"]
    },
    // ============================================================
    // Q17-Q22: Medium-hard ceiling (band 6-7)
    // ============================================================
    {
      id: 17,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "A solution requires mixing salt and water in the ratio $2 : 9$. If a chemist needs $33$ ounces of solution total, how many ounces of salt are needed?",
      choices: [
        // distractor: just 2/9 of 33 — about 7.33
        { id: "A", text: "$3$" },
        { id: "B", text: "$6$" },
        // distractor: misreads parts as 2 and 11
        { id: "C", text: "$2$" },
        // distractor: gives water portion
        { id: "D", text: "$27$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Ratios with a Total**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Total parts $= 2 + 9 = 11$. Each part $= \\dfrac{33}{11} = 3$ ounces. Salt $= 2 \\cdot 3 = 6$ ounces.\n\n**The Full Solution:**\nThe ratio $2 : 9$ means $2$ parts salt per $11$ parts total ($2 + 9$).\nFraction of solution that is salt: $\\dfrac{2}{11}$.\nSalt $= \\dfrac{2}{11} \\cdot 33 = \\dfrac{66}{11} = 6$ ounces.\n\nVerification: Salt $6$ + Water $27 = 33$. Ratio $6 : 27 = 2 : 9$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — divides $33$ by something incorrect.\n* Choice C: \"stops one step early\" — gives the ratio number directly.\n* Choice D: \"applies the inverse operation\" — gives the water amount.\n\n**Test Day Takeaway:** Ratio $a : b$ with total $T$: each part $= \\dfrac{T}{a + b}$.",
      skills: ["rate-conversion", "percent-word-problems"]
    },
    {
      id: 18,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "If $2x + 3y = 18$ and $x = 3$, what is the value of $y$?",
      choices: [
        // distractor: divides 18/3
        { id: "A", text: "$6$" },
        { id: "B", text: "$4$" },
        // distractor: divides 12 by 4 instead of 3
        { id: "C", text: "$3$" },
        // distractor: 18 - 6 = 12 stops there
        { id: "D", text: "$12$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Substitution into a Two-Variable Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $2(3) + 3y = 18 \\Rightarrow 3y = 12 \\Rightarrow y = 4$.\n\n**The Full Solution:**\nSubstitute $x = 3$:\n$2(3) + 3y = 18$\n$6 + 3y = 18$\n$3y = 12$\n$y = 4$.\n\nVerification: $2(3) + 3(4) = 6 + 12 = 18$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — divides $18$ by $3$ directly.\n* Choice C: \"applies the inverse operation\" — uses $x = 3$ as the result.\n* Choice D: \"stops one step early\" — leaves $3y = 12$ as the answer.\n\n**Test Day Takeaway:** Substitute, simplify, isolate. Don't stop until you've solved for the variable asked.",
      skills: ["substitution-method", "solving-equations"]
    },
    {
      id: 19,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "The function $h$ models the height, in feet, of a ball $t$ seconds after it is thrown: $h(t) = -16t^2 + 32t + 5$. What is the height of the ball at $t = 1$ second?",
      correctAnswer: "21",
      explanation: "**SAT Pattern: Function Evaluation in Context**\n\n**Answer: $21$.**\n\n**The Fast Way (~15s):** $h(1) = -16(1) + 32(1) + 5 = -16 + 32 + 5 = 21$.\n\n**The Full Solution:**\nSubstitute $t = 1$:\n$h(1) = -16(1)^2 + 32(1) + 5$\n$= -16 + 32 + 5$\n$= 21$ feet.\n\n**Common Mistakes to Avoid:**\n* Forgetting to square: $-16(1)^2 = -16$ (correct here, but trips students if $t$ is not $1$).\n* Sign error on $-16t^2$.\n* Adding all the coefficients without applying the formula.\n\n**Test Day Takeaway:** When $t = 1$, every power of $t$ is $1$. Just sum the coefficients with their signs.",
      skills: ["function-evaluation"]
    },
    {
      id: 20,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "A bag of mixed nuts contains $40\\%$ peanuts by weight. If a bag weighs $250$ grams, what is the weight of the peanuts, in grams?",
      choices: [
        // distractor: subtracts 40 from 250
        { id: "A", text: "$210$" },
        { id: "B", text: "$100$" },
        // distractor: divides by 40
        { id: "C", text: "$6.25$" },
        // distractor: 250/4 = 62.5
        { id: "D", text: "$62.5$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Percent of a Whole**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $40\\%$ of $250 = 0.40 \\cdot 250 = 100$.\n\n**The Full Solution:**\nWeight of peanuts $= 0.40 \\cdot 250 = 100$ grams.\n\nVerification: peanuts $100$ + non-peanuts $150 = 250$. $\\dfrac{100}{250} = 40\\%$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — subtracts $40$ from $250$.\n* Choice C: \"applies the inverse operation\" — divides $250$ by $40$.\n* Choice D: \"wrong base\" — uses $25\\%$ ($\\dfrac{1}{4}$) instead of $40\\%$.\n\n**Test Day Takeaway:** $40\\%$ of $X$ means multiply by $0.40$. Memorize: $40\\% = \\dfrac{2}{5}$, so $\\dfrac{2}{5} \\cdot 250 = 100$.",
      skills: ["percent-of-value"]
    },
    {
      id: 21,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "If $(x + 4)(x - 2) = 0$, what are the solutions for $x$?",
      choices: [
        { id: "A", text: "$x = -4$ and $x = 2$" },
        // distractor: sign flip
        { id: "B", text: "$x = 4$ and $x = -2$" },
        // distractor: multiplies the constants
        { id: "C", text: "$x = -8$" },
        // distractor: adds the constants
        { id: "D", text: "$x = 2$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Zero Product Property**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $(x + 4) = 0 \\Rightarrow x = -4$. $(x - 2) = 0 \\Rightarrow x = 2$.\n\n**The Full Solution:**\nIf $(x + 4)(x - 2) = 0$, then either $x + 4 = 0$ or $x - 2 = 0$.\n$x = -4$ or $x = 2$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"sign error\" — flips both signs.\n* Choice C: \"wrong base\" — multiplies the constants ($-4 \\cdot 2 = -8$).\n* Choice D: \"stops one step early\" — gives only one root.\n\n**Test Day Takeaway:** Zero Product Property: a product is $0$ iff at least one factor is $0$. To find roots, flip the sign of each constant (e.g., $(x + 4)$ gives $x = -4$).",
      skills: ["finding-roots-factoring"]
    },
    {
      id: 22,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "An online store sells a t-shirt for $\\$20$ and a mug for $\\$8$. In one day the store sold a total of $25$ items and made $\\$320$ in revenue. How many t-shirts were sold?",
      correctAnswer: "10",
      explanation: "**SAT Pattern: System of Equations from Word Problem**\n\n**Answer: $10$.**\n\n**The Fast Way (~30s):** Let $t$ = t-shirts. Then mugs $= 25 - t$. Revenue: $20t + 8(25 - t) = 320 \\Rightarrow 12t + 200 = 320 \\Rightarrow t = 10$.\n\n**The Full Solution:**\nLet $t$ be the number of t-shirts and $m$ be the number of mugs.\n$t + m = 25$ (total items).\n$20t + 8m = 320$ (revenue).\n\nFrom the first: $m = 25 - t$. Substitute:\n$20t + 8(25 - t) = 320$\n$20t + 200 - 8t = 320$\n$12t = 120$\n$t = 10$.\n\nVerification: $10$ t-shirts + $15$ mugs $= 25$ items. Revenue: $20(10) + 8(15) = 200 + 120 = \\$320$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Setting up only one equation ($20t = 320 \\Rightarrow t = 16$).\n* Solving for the wrong variable (mugs instead of t-shirts).\n* Subtracting the prices: $20 - 8 = 12$, then $320 / 12$ — close but missing the constant.\n\n**Test Day Takeaway:** Two unknowns require two equations. Substitution is usually the cleanest path: solve one equation for a variable, plug into the other.",
      skills: ["setting-up-systems", "substitution-method"]
    }
  ]
};

export default practiceTest11M2Easy;
