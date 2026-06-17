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
      explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Undo the $+9$ by subtracting: $x = 23 - 9 = 14$.\n\n**The Full Solution:**\nStep 1: Start with $x + 9 = 23$.\nStep 2: Subtract $9$ from both sides: $x = 23 - 9 = 14$.\nStep 3: Check: $14 + 9 = 23$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($32$): added $9$ instead of subtracting it.\n* Choice B ($2$): divided $23$ by something or guessed a small leftover.\n* Choice D ($-14$): subtracted in the wrong direction, flipping the sign.\n\n**Test Day Takeaway:** To isolate a variable, apply the inverse operation. A $+9$ is undone by $-9$.",
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
      explanation: "**SAT Pattern: Fraction-Decimal Conversion**\n\n**Choice B is correct.**\n\n**The Fast Way (~3s):** $\\frac{3}{4}$ is a known conversion: $0.75$.\n\n**The Full Solution:**\nStep 1: A fraction is a division: $\\frac{3}{4} = 3 \\div 4$.\nStep 2: $3 \\div 4 = 0.75$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.07$): treated the fraction as $\\frac{3}{4}$ becoming $0.0$-something by misplacing the decimal.\n* Choice C ($1.33$): flipped the fraction to $\\frac{4}{3} \\approx 1.33$.\n* Choice D ($7.5$): found $75\\%$ but slid the decimal one place too far.\n\n**Test Day Takeaway:** Memorize the quarters and fifths: $\\frac{1}{4} = 0.25$, $\\frac{1}{2} = 0.5$, $\\frac{3}{4} = 0.75$, $\\frac{1}{5} = 0.2$.",
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
      explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** The three angles sum to $180^\\circ$, so $x = 180 - 50 - 70 = 60$.\n\n**The Full Solution:**\nStep 1: The interior angles of any triangle sum to $180^\\circ$.\nStep 2: $50 + 70 + x = 180$, so $120 + x = 180$.\nStep 3: $x = 60$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($120$): stopped after adding the two given angles, forgetting to subtract from $180$.\n* Choice C ($240$): used $360^\\circ$, the angle sum for a quadrilateral, not a triangle.\n* Choice D ($30$): averaged or otherwise mishandled the given angles.\n\n**Test Day Takeaway:** Triangle angles sum to $180^\\circ$; quadrilaterals to $360^\\circ$; pentagons to $540^\\circ$.",
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
      explanation: "**SAT Pattern: Function Evaluation with Quadratic**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Substitute $x = 4$: $16 - 12 + 2 = 6$.\n\n**The Full Solution:**\nStep 1: Replace every $x$ with $4$: $f(4) = (4)^2 - 3(4) + 2$.\nStep 2: Evaluate the powers and products: $16 - 12 + 2$.\nStep 3: Combine left to right: $16 - 12 + 2 = 6$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($4$): computed $16 - 12 = 4$ but dropped the $+2$.\n* Choice C ($2$): subtracted the final $2$ instead of adding it.\n* Choice D ($30$): flipped the middle sign, computing $16 + 12 + 2$.\n\n**Test Day Takeaway:** To find $f(a)$, replace every $x$ with $a$ and apply order of operations carefully — wrap negatives in parentheses.",
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
      explanation: "**SAT Pattern: System by Substitution**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Both equations equal $y$, so set them equal: $2x + 1 = -x + 7 \\Rightarrow 3x = 6 \\Rightarrow x = 2$, then $y = 2(2) + 1 = 5$, giving $(2, 5)$.\n\n**The Full Solution:**\nStep 1: Since each right side equals $y$, set them equal: $2x + 1 = -x + 7$.\nStep 2: Add $x$ to both sides and subtract $1$: $3x = 6$, so $x = 2$.\nStep 3: Substitute back: $y = 2(2) + 1 = 5$. The solution is $(2, 5)$.\nStep 4: Check the second equation: $-2 + 7 = 5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(5, 2)$): swapped the coordinates, writing $(y, x)$ instead of $(x, y)$.\n* Choice C ($(3, 4)$): solved or guessed without satisfying both equations.\n* Choice D ($(4, 3)$): a guess that fits neither line.\n\n**Test Day Takeaway:** When both equations are solved for $y$, set the right sides equal and solve for $x$ first, then back-substitute.",
      skills: ["substitution-method"]
    },
    {
      id: 6,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "If $\\dfrac{2x + 4}{6} = 5$, what is the value of $x$?",
      correctAnswer: "13",
      explanation: "**SAT Pattern: Linear Equation with a Fraction**\n\n**The correct answer is $13$.**\n\n**The Fast Way (~10s):** Multiply both sides by $6$: $2x + 4 = 30$. Then $2x = 26$, so $x = 13$.\n\n**The Full Solution:**\nStep 1: Clear the fraction by multiplying both sides by $6$: $2x + 4 = 30$.\nStep 2: Subtract $4$: $2x = 26$.\nStep 3: Divide by $2$: $x = 13$.\nStep 4: Check: $\\frac{2(13) + 4}{6} = \\frac{30}{6} = 5$. $\\checkmark$\n\n**Common Mistakes:** Dividing $30$ by $2$ before subtracting the $4$; multiplying only the numerator by $6$ instead of the whole left side; forgetting to subtract $4$ first.\n\n**Test Day Takeaway:** Clear a fraction by multiplying both sides by the denominator, then solve the resulting linear equation step by step.",
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
      explanation: "**SAT Pattern: Square Root Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Square both sides: $x + 5 = 49$, so $x = 44$.\n\n**The Full Solution:**\nStep 1: Undo the square root by squaring both sides: $x + 5 = 7^2 = 49$.\nStep 2: Subtract $5$: $x = 44$.\nStep 3: Check: $\\sqrt{44 + 5} = \\sqrt{49} = 7$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): computed $7 - 5$ without squaring first.\n* Choice C ($54$): added $5$ to $49$ instead of subtracting.\n* Choice D ($49$): stopped at $7^2 = 49$, forgetting to subtract the $5$.\n\n**Test Day Takeaway:** To eliminate a square root, square both sides; then solve the resulting equation and verify in the original.",
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
      explanation: "**SAT Pattern: Slope-Intercept Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Slope $\\frac{2}{3}$ and $y$-intercept $-4$ plug straight into $y = mx + b$: $y = \\frac{2}{3}x - 4$.\n\n**The Full Solution:**\nStep 1: Slope-intercept form is $y = mx + b$.\nStep 2: The point $(0, -4)$ has $x = 0$, so it is the $y$-intercept: $b = -4$.\nStep 3: With $m = \\frac{2}{3}$, the line is $y = \\frac{2}{3}x - 4$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = \\frac{2}{3}x + 4$): used $+4$ instead of the negative intercept.\n* Choice C ($y = \\frac{3}{2}x - 4$): flipped the slope to $\\frac{3}{2}$.\n* Choice D ($y = \\frac{2}{3}(x - 4)$): treated $-4$ as a horizontal shift in point-slope form.\n\n**Test Day Takeaway:** A point of the form $(0, b)$ IS the $y$-intercept — drop $m$ and $b$ directly into $y = mx + b$.",
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
      explanation: "**SAT Pattern: Complement Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Total marbles $= 15$; not green $= 4 + 6 = 10$, so $P(\\text{not green}) = \\frac{10}{15}$.\n\n**The Full Solution:**\nStep 1: Total $= 4 + 6 + 5 = 15$ marbles.\nStep 2: \"Not green\" means red or blue: $4 + 6 = 10$.\nStep 3: $P(\\text{not green}) = \\frac{10}{15}$. Equivalently, $1 - \\frac{5}{15} = \\frac{10}{15}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{5}{15}$): gives $P(\\text{green})$, the complement of what was asked.\n* Choice C ($\\frac{4}{15}$): counted only the red marbles.\n* Choice D ($\\frac{6}{15}$): counted only the blue marbles.\n\n**Test Day Takeaway:** $P(\\text{not } A) = 1 - P(A)$. Subtracting the unwanted case is often faster than adding up all the favorable ones.",
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
      explanation: "**SAT Pattern: Median of a Sorted List**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Seven values, already sorted — the median is the 4th one, $14$.\n\n**The Full Solution:**\nStep 1: The list $3, 7, 11, 14, 18, 21, 25$ is already in order.\nStep 2: With $7$ values, the middle position is the $\\frac{7+1}{2} = 4$th term.\nStep 3: The 4th term is $14$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($14.14$): computed the mean, $\\frac{99}{7} \\approx 14.14$, not the median.\n* Choice C ($22$): gave the range, $25 - 3$.\n* Choice D ($4$): reported the position of the middle term instead of its value.\n\n**Test Day Takeaway:** For a sorted list of odd length $n$, the median is the term in position $\\frac{n+1}{2}$; for even length, average the two middle terms.",
      skills: ["find-median"]
    },
    {
      id: 11,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A bicycle is on sale for $\\$240$ after a $20\\%$ discount. What was the original price of the bicycle, in dollars?",
      correctAnswer: "300",
      explanation: "**SAT Pattern: Reverse Percent**\n\n**The correct answer is $300$.**\n\n**The Fast Way (~15s):** A $20\\%$ discount leaves $80\\%$, so $\\$240$ is $80\\%$ of the original: $\\frac{240}{0.80} = 300$.\n\n**The Full Solution:**\nStep 1: Let $x$ be the original price. After a $20\\%$ discount the price is $80\\%$ of $x$: $0.80x = 240$.\nStep 2: Divide both sides by $0.80$: $x = \\frac{240}{0.80} = 300$.\nStep 3: Check: $20\\%$ of $\\$300$ is $\\$60$, so the sale price is $300 - 60 = \\$240$. $\\checkmark$\n\n**Common Mistakes:** Multiplying $240$ by $0.80$ instead of dividing; adding $20\\%$ of $240$ to get $288$; adding $\\$20$ to get $260$.\n\n**Test Day Takeaway:** \"After a $20\\%$ discount\" means the sale price is $80\\%$ of the original — reverse it by dividing by $0.80$, not by $0.20$.",
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
      explanation: "**SAT Pattern: Distribute and Combine**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Distribute both factors: $10x - 15 - 2x - 8 = 8x - 23$.\n\n**The Full Solution:**\nStep 1: Distribute the $5$: $5(2x - 3) = 10x - 15$.\nStep 2: Distribute the $-2$: $-2(x + 4) = -2x - 8$.\nStep 3: Combine like terms: $(10x - 2x) + (-15 - 8) = 8x - 23$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($8x - 7$): kept $+8$ instead of $-8$ when distributing the $-2$.\n* Choice C ($12x - 23$): added $10x + 2x$ instead of subtracting.\n* Choice D ($8x - 11$): mishandled a sign while combining the constants.\n\n**Test Day Takeaway:** A negative outside parentheses flips the sign of every term inside: $-2(x + 4) = -2x - 8$.",
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
      explanation: "**SAT Pattern: Mean of a Small Data Set**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Add the five values and divide by $5$: $\\dfrac{8 + 5 + 11 + 4 + 7}{5} = \\dfrac{35}{5} = 7$.\n\n**The Full Solution:**\nStep 1: Sum the counts: $8 + 5 + 11 + 4 + 7 = 35$.\nStep 2: Divide by the number of students: $\\dfrac{35}{5} = 7$ books.\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): grabs a single value from the list instead of averaging.\n* Choice C ($5.5$): averages just two of the values rather than all five.\n* Choice D ($35$): the sum, with the divide-by-$5$ step skipped.\n\n**Test Day Takeaway:** Mean $= \\dfrac{\\text{sum}}{\\text{count}}$. The last step is always dividing by how many values you added.",
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
      explanation: "**SAT Pattern: Equation of a Line through Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Slope $= \\dfrac{14 - 5}{4 - 1} = \\dfrac{9}{3} = 3$. Plug $(1, 5)$ into $y = 3x + b$: $5 = 3 + b$, so $b = 2$ and $y = 3x + 2$.\n\n**The Full Solution:**\nStep 1: Find the slope: $m = \\dfrac{14 - 5}{4 - 1} = \\dfrac{9}{3} = 3$.\nStep 2: Use point $(1, 5)$ in $y = mx + b$: $5 = 3(1) + b \\Rightarrow b = 2$.\nStep 3: Write the line: $y = 3x + 2$. Check $(4, 14)$: $3(4) + 2 = 14$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = 3x$): found the slope but assumed $b = 0$ instead of solving for it.\n* Choice C ($y = 3x + 5$): used the $y$-value $5$ from a point as the intercept.\n* Choice D ($y = 9x + 2$): used the rise $9$ as the slope without dividing by the run $3$.\n\n**Test Day Takeaway:** Slope first ($\\dfrac{\\Delta y}{\\Delta x}$), then substitute one point into $y = mx + b$ to solve for $b$.",
      skills: ["slope-from-points", "slope-intercept-form"]
    },
    {
      id: 15,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A right triangle has one leg of length $8$ and a hypotenuse of length $10$. What is the length of the other leg?",
      correctAnswer: "6",
      explanation: "**SAT Pattern: Pythagorean Theorem (6-8-10 = 2x 3-4-5)**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~5s):** Recognize $8$ and $10$ as the leg and hypotenuse of a $6$-$8$-$10$ triangle (which is $3$-$4$-$5$ doubled). The missing leg is $6$.\n\n**The Full Solution:**\nStep 1: Apply $a^2 + b^2 = c^2$ with leg $8$ and hypotenuse $10$: $8^2 + b^2 = 10^2$.\nStep 2: $64 + b^2 = 100 \\Rightarrow b^2 = 36$.\nStep 3: $b = \\sqrt{36} = 6$. Check: $6^2 + 8^2 = 36 + 64 = 100 = 10^2$. $\\checkmark$\n\n**Common Mistakes:** Computing $\\sqrt{10^2 + 8^2} = \\sqrt{164}$ (treating the hypotenuse as a leg); adding $8 + 10 = 18$; forgetting the final square root and reporting $36$.\n\n**Test Day Takeaway:** Memorize the common Pythagorean triples and their multiples — $3$-$4$-$5$, $6$-$8$-$10$, $5$-$12$-$13$ — and spot them before reaching for the formula.",
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
      explanation: "**SAT Pattern: Two-Step Equation with Fraction**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Subtract $7$: $\\dfrac{x}{4} = 5$. Multiply both sides by $4$: $x = 20$.\n\n**The Full Solution:**\nStep 1: $\\dfrac{x}{4} + 7 = 12 \\Rightarrow \\dfrac{x}{4} = 5$.\nStep 2: Multiply by $4$: $x = 5 \\cdot 4 = 20$.\nStep 3: Check: $\\dfrac{20}{4} + 7 = 5 + 7 = 12$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): stopped at $\\dfrac{x}{4} = 5$ instead of solving for $x$.\n* Choice C ($48$): multiplied $12$ by $4$ before subtracting the $7$.\n* Choice D ($\\dfrac{5}{4}$): divided by $4$ instead of multiplying.\n\n**Test Day Takeaway:** Undo the operations in reverse order: clear the added constant first, then undo the division by multiplying.",
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
      explanation: "**SAT Pattern: Ratios with a Total**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Total parts $= 2 + 9 = 11$. One part $= \\dfrac{33}{11} = 3$ ounces. Salt is $2$ parts: $2 \\cdot 3 = 6$ ounces.\n\n**The Full Solution:**\nStep 1: The ratio $2 : 9$ gives $2 + 9 = 11$ total parts, so salt is $\\dfrac{2}{11}$ of the solution.\nStep 2: Salt $= \\dfrac{2}{11} \\cdot 33 = \\dfrac{66}{11} = 6$ ounces.\nStep 3: Check: salt $6$ + water $27 = 33$, and $6 : 27 = 2 : 9$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): the value of one part, not the $2$-part salt amount.\n* Choice C ($2$): copied the ratio number $2$ straight from the problem.\n* Choice D ($27$): solved for the water ($9$ parts) instead of the salt.\n\n**Test Day Takeaway:** For a ratio $a : b$ with total $T$, each part $= \\dfrac{T}{a + b}$; multiply by the part count you want.",
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
      explanation: "**SAT Pattern: Substitution into a Two-Variable Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Put $x = 3$ in: $2(3) + 3y = 18 \\Rightarrow 6 + 3y = 18 \\Rightarrow 3y = 12 \\Rightarrow y = 4$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 3$: $2(3) + 3y = 18$.\nStep 2: $6 + 3y = 18 \\Rightarrow 3y = 12$.\nStep 3: $y = \\dfrac{12}{3} = 4$. Check: $2(3) + 3(4) = 6 + 12 = 18$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): divided $18$ by $3$ without subtracting the $6$ first.\n* Choice C ($3$): reused the given $x = 3$ as the answer.\n* Choice D ($12$): stopped at $3y = 12$ instead of dividing by $3$.\n\n**Test Day Takeaway:** Substitute, then isolate the asked variable — don't quit at the line before the last division.",
      skills: ["substitution-method", "solving-equations"]
    },
    {
      id: 19,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "The function $h$ models the height, in feet, of a ball $t$ seconds after it is thrown: $h(t) = -16t^2 + 32t + 5$. What is the height of the ball at $t = 1$ second?",
      correctAnswer: "21",
      explanation: "**SAT Pattern: Function Evaluation in Context**\n\n**The correct answer is $21$.**\n\n**The Fast Way (~15s):** Every power of $1$ is $1$, so $h(1) = -16 + 32 + 5 = 21$ feet.\n\n**The Full Solution:**\nStep 1: Substitute $t = 1$: $h(1) = -16(1)^2 + 32(1) + 5$.\nStep 2: $(1)^2 = 1$, so $= -16 + 32 + 5$.\nStep 3: $= 21$ feet.\n\n**Common Mistakes:** A sign slip on the $-16t^2$ term giving $16 + 32 + 5 = 53$; or dropping the $+5$ constant and reporting $16$.\n\n**Test Day Takeaway:** Evaluating a function means plugging the input in everywhere $t$ appears; at $t = 1$ this collapses to summing the coefficients with their signs.",
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
      explanation: "**SAT Pattern: Percent of a Whole**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $40\\%$ of $250 = 0.40 \\cdot 250 = 100$ grams.\n\n**The Full Solution:**\nStep 1: Convert the percent: $40\\% = 0.40$.\nStep 2: Multiply by the whole: $0.40 \\cdot 250 = 100$ grams.\nStep 3: Check: peanuts $100$ + the rest $150 = 250$, and $\\dfrac{100}{250} = 40\\%$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($210$): subtracted $40$ from $250$ instead of taking a percent.\n* Choice C ($6.25$): divided $250$ by $40$.\n* Choice D ($62.5$): used $25\\%$ ($\\dfrac{1}{4}$ of $250$) instead of $40\\%$.\n\n**Test Day Takeaway:** \"$P\\%$ of a number\" means multiply by $\\dfrac{P}{100}$. Here $40\\% = \\dfrac{2}{5}$, so $\\dfrac{2}{5} \\cdot 250 = 100$.",
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
      explanation: "**SAT Pattern: Zero Product Property**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** A product equals $0$ only if a factor is $0$: $x + 4 = 0 \\Rightarrow x = -4$ and $x - 2 = 0 \\Rightarrow x = 2$.\n\n**The Full Solution:**\nStep 1: $(x + 4)(x - 2) = 0$ means $x + 4 = 0$ or $x - 2 = 0$.\nStep 2: Solve each: $x = -4$ or $x = 2$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($x = 4$ and $x = -2$): copied the constants' signs instead of flipping them.\n* Choice C ($x = -8$): multiplied the constants $4 \\cdot (-2)$ rather than setting each factor to $0$.\n* Choice D ($x = 2$): found only one of the two roots.\n\n**Test Day Takeaway:** Set each factor equal to $0$ and flip the sign of its constant: $(x + 4)$ gives $x = -4$, $(x - 2)$ gives $x = 2$.",
      skills: ["finding-roots-factoring"]
    },
    {
      id: 22,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "An online store sells a t-shirt for $\\$20$ and a mug for $\\$8$. In one day the store sold a total of $25$ items and made $\\$320$ in revenue. How many t-shirts were sold?",
      correctAnswer: "10",
      explanation: "**SAT Pattern: System of Equations from Word Problem**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~30s):** Let $t$ = t-shirts, so mugs $= 25 - t$. Revenue: $20t + 8(25 - t) = 320 \\Rightarrow 12t + 200 = 320 \\Rightarrow t = 10$.\n\n**The Full Solution:**\nStep 1: Set up two equations with $t$ t-shirts and $m$ mugs: $t + m = 25$ and $20t + 8m = 320$.\nStep 2: Solve the first for $m = 25 - t$ and substitute: $20t + 8(25 - t) = 320$.\nStep 3: $20t + 200 - 8t = 320 \\Rightarrow 12t = 120 \\Rightarrow t = 10$.\nStep 4: Check: $10$ t-shirts + $15$ mugs $= 25$ items, revenue $20(10) + 8(15) = 200 + 120 = \\$320$. $\\checkmark$\n\n**Common Mistakes:** Solving for mugs ($m = 15$) and reporting that; writing only the revenue equation $20t = 320 \\Rightarrow t = 16$; or subtracting prices ($20 - 8 = 12$) and dividing $\\dfrac{320}{12}$, which ignores the constant from the cheaper item.\n\n**Test Day Takeaway:** Two unknowns need two equations. Solve one for a variable and substitute into the other, then confirm you answered for the quantity asked.",
      skills: ["setting-up-systems", "substitution-method"]
    }
  ]
};

export default practiceTest11M2Easy;
