// Practice Test 10 — Math Module 2 Easy variant (22 questions)
// For students routed to easier path after Module 1 (~<60% correct).
// Distribution: 3E / 13M / 6H. Q1-3 easy openers. Max-score ceiling: ~650.
// Official-calibration recreation (2026-09-01): every item re-authored fresh
// against the CB register (docs/TEST_RECREATION_SPEC.md); slot metadata
// (id/type/difficulty/band/skills/pattern) frozen from the prior build.
// 4 diagram items: Q4 dataTable, Q13 rightTriangle, Q14 scatterplot,
// Q15 twoWayTable. Numeric MC choices sorted ascending.

export const practiceTest10M2Easy = {
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
      question: "The function $m$ multiplies its input by $4$ and then subtracts $3$ from the result. If the output of $m$ is $29$, what was the input?",
      choices: [
        // distractor: undoes the steps in the wrong order — subtracts 3 first, then divides
        { id: "A", text: "$6.5$" },
        { id: "B", text: "$8$" },
        // distractor: adds 3 back but stops before dividing by 4
        { id: "C", text: "$32$" },
        // distractor: runs the machine FORWARD on 29 — 4(29) - 3
        { id: "D", text: "$113$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Reversing a Function Rule**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Run the machine backward: $29 + 3 = 32$, then $32 \\div 4 = 8$.\n\n**The Full Solution:**\nStep 1: Write the rule: $m(x) = 4x - 3$. The output is $29$, so $4x - 3 = 29$.\nStep 2: Add $3$ to both sides: $4x = 32$.\nStep 3: Divide by $4$: $x = 8$.\nStep 4: Check forward: $4(8) - 3 = 29$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6.5$): undoes the steps in the wrong order — subtracts $3$ from $29$ and then divides, but the $-3$ was applied LAST, so it must be undone FIRST.\n* Choice C ($32$): adds the $3$ back but stops before dividing by $4$.\n* Choice D ($113$): runs the machine FORWARD on $29$, computing $4(29) - 3$.\n\n**Test Day Takeaway:** To recover an input from an output, undo the steps in REVERSE order: the last operation applied is the first one undone.",
      skills: ["solving-equations", "function-evaluation"]
    },
    {
      id: 2,
      type: "multiple-choice",
      difficulty: "easy",
      band: 2,
      question: "Which decimal is equivalent to $130\\%$?",
      choices: [
        // distractor: shifts the decimal three places instead of two
        { id: "A", text: "$0.13$" },
        { id: "B", text: "$1.3$" },
        // distractor: shifts only one place
        { id: "C", text: "$13$" },
        // distractor: drops the percent sign without shifting at all
        { id: "D", text: "$130$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Percent to Decimal Conversion**\n\n**Choice B is correct.**\n\n**The Fast Way (~3s):** Percent means \"per hundred\": $130\\% = \\frac{130}{100} = 1.3$.\n\n**The Full Solution:**\nStep 1: The percent symbol means division by $100$: $130\\% = \\frac{130}{100}$.\nStep 2: Dividing by $100$ moves the decimal point two places left: $130 \\to 13 \\to 1.3$.\nA percent above $100$ must give a decimal above $1$ — a quick sanity check.\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.13$): moves the decimal three places — dividing by $1{,}000$.\n* Choice C ($13$): moves it only one place — dividing by $10$.\n* Choice D ($130$): drops the percent sign without converting at all.\n\n**Test Day Takeaway:** Percent $\\to$ decimal: shift two places LEFT. A percent over $100$ always converts to a decimal over $1$.",
      skills: ["percent-of-value", "percent-decimal-conversion"]
    },
    {
      id: 3,
      type: "multiple-choice",
      difficulty: "easy",
      band: 3,
      question: "The function $f$ is defined by $f(x) = 3x + 20$. What is the value of $f(7)$?",
      choices: [
        // distractor: computes 3(7) but drops the +20
        { id: "A", text: "$21$" },
        // distractor: substitutes x = 3 (the coefficient) instead of x = 7
        { id: "B", text: "$29$" },
        // distractor: adds 3 + 7 + 20 instead of multiplying first
        { id: "C", text: "$30$" },
        { id: "D", text: "$41$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice D is correct.**\n\n**The Fast Way (~5s):** $f(7) = 3(7) + 20 = 21 + 20 = 41$.\n\n**The Full Solution:**\nStep 1: Replace every $x$ in $f(x) = 3x + 20$ with $7$.\nStep 2: $f(7) = 3(7) + 20 = 21 + 20 = 41$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($21$): computes $3(7) = 21$ but drops the $+20$.\n* Choice B ($29$): substitutes $x = 3$ (the coefficient) instead of $x = 7$, giving $3(3) + 20$.\n* Choice C ($30$): adds $3 + 7 + 20$ instead of multiplying $3 \\cdot 7$ first.\n\n**Test Day Takeaway:** $f(a)$ means substitute $a$ for every $x$, then finish the arithmetic — don't stop after the multiplication.",
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
      question: "The table gives three points that lie on a line in the $xy$-plane. What is the slope of the line?",
      diagram: {
        type: "dataTable",
        params: {
          headers: ["x", "y"],
          rows: [["0", "11"], ["3", "5"], ["6", "-1"]]
        }
      },
      choices: [
        // distractor: uses the change in y alone without dividing by the change in x
        { id: "A", text: "$-6$" },
        { id: "B", text: "$-2$" },
        // distractor: flips rise and run
        { id: "C", text: "$-\\dfrac{1}{2}$" },
        // distractor: drops the negative sign
        { id: "D", text: "$2$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Slope from a Table of Values**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Each step right by $3$ drops $y$ by $6$ (from $11$ to $5$ to $-1$), so the slope is $\\frac{-6}{3} = -2$.\n\n**The Full Solution:**\nStep 1: Pick two rows from the table, say $(0, 11)$ and $(3, 5)$.\nStep 2: Slope $= \\frac{\\Delta y}{\\Delta x} = \\frac{5 - 11}{3 - 0} = \\frac{-6}{3} = -2$.\nStep 3: Confirm with the third point: from $(3, 5)$ to $(6, -1)$ the slope is $\\frac{-1 - 5}{6 - 3} = \\frac{-6}{3} = -2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): uses the change in $y$ alone without dividing by the change in $x$.\n* Choice C ($-\\dfrac{1}{2}$): flips the ratio to run over rise.\n* Choice D ($2$): drops the negative — $y$ is DECREASING as $x$ increases.\n\n**Test Day Takeaway:** A table hides the same slope formula: pick any two rows and compute $\\frac{\\Delta y}{\\Delta x}$. A third row is a free consistency check.",
      skills: ["slope-from-points", "slope"]
    },
    {
      id: 5,
      type: "fill-in",
      difficulty: "medium",
      band: 4,
      question: "What value of $x$ satisfies the proportion $\\dfrac{x}{9} = \\dfrac{28}{12}$?",
      correctAnswer: "21",
      explanation: "**SAT Pattern: Proportions**\n\n**The correct answer is $21$.**\n\n**The Fast Way (~10s):** Cross-multiply: $12x = 9 \\cdot 28 = 252$, so $x = 21$.\n\n**The Full Solution:**\nStep 1: Start from $\\frac{x}{9} = \\frac{28}{12}$ and cross-multiply: $12 \\cdot x = 9 \\cdot 28$.\nStep 2: $12x = 252$, so $x = \\frac{252}{12} = 21$.\nStep 3: Check: $\\frac{21}{9} = \\frac{7}{3}$ and $\\frac{28}{12} = \\frac{7}{3}$. $\\checkmark$\n\n**Common Mistakes:** Multiplying the two denominators ($9 \\cdot 12 = 108$) and using that; cross-multiplying to $252$ but forgetting to divide by $12$; or reading the proportion as $\\frac{x}{12} = \\frac{28}{9}$.\n\n**Test Day Takeaway:** $\\frac{a}{b} = \\frac{c}{d} \\Rightarrow ad = bc$. Cross-multiply, then solve the linear equation that falls out.",
      skills: ["solving-equations", "rate-conversion"]
    },
    {
      id: 6,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The area of a square is $144$ square centimeters. What is the perimeter of the square, in centimeters?",
      choices: [
        // distractor: stops at the side length
        { id: "A", text: "$12$" },
        // distractor: doubles the side instead of multiplying by 4
        { id: "B", text: "$24$" },
        { id: "C", text: "$48$" },
        // distractor: multiplies the area by 4
        { id: "D", text: "$576$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Area to Perimeter Chain**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Side $= \\sqrt{144} = 12$, so perimeter $= 4 \\cdot 12 = 48$ centimeters.\n\n**The Full Solution:**\nStep 1: A square's area is $s^2$, so $s^2 = 144$ and $s = \\sqrt{144} = 12$ cm.\nStep 2: A square's perimeter is $4s = 4 \\cdot 12 = 48$ cm.\nStep 3: Check: a $12 \\times 12$ square has area $144$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): finds the side length and stops — the question asks for the perimeter.\n* Choice B ($24$): doubles the side instead of counting all four sides.\n* Choice D ($576$): multiplies the AREA by $4$, skipping the square root entirely.\n\n**Test Day Takeaway:** Two-step geometry hides one formula inside another: area $\\to$ side (square root), then side $\\to$ perimeter ($\\times 4$). Answer the quantity actually asked for.",
      skills: ["area", "perimeter"]
    },
    {
      id: 7,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "A right triangle has legs of length $9$ centimeters and $8$ centimeters. What is the area of the triangle?",
      choices: [
        // distractor: adds the legs instead of multiplying
        { id: "A", text: "$17\\text{ cm}^2$" },
        { id: "B", text: "$36\\text{ cm}^2$" },
        // distractor: multiplies the legs without halving
        { id: "C", text: "$72\\text{ cm}^2$" },
        // distractor: doubles the product instead of halving
        { id: "D", text: "$144\\text{ cm}^2$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Area of a Right Triangle**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** In a right triangle the two legs serve as base and height: area $= \\frac{1}{2}(9)(8) = 36 \\text{ cm}^2$.\n\n**The Full Solution:**\nStep 1: The legs of a right triangle are perpendicular, so one leg is the base and the other is the height — no extra work needed.\nStep 2: Apply $A = \\frac{1}{2}bh = \\frac{1}{2}(9)(8)$.\nStep 3: $A = \\frac{72}{2} = 36$ square centimeters.\n\n**Why the wrong answers are tempting:**\n* Choice A ($17\\text{ cm}^2$): adds the legs, $9 + 8$, instead of multiplying.\n* Choice C ($72\\text{ cm}^2$): multiplies the legs but skips the $\\frac{1}{2}$ — that is the area of the full rectangle.\n* Choice D ($144\\text{ cm}^2$): doubles the product instead of halving it.\n\n**Test Day Takeaway:** A right triangle is half a rectangle: multiply the legs, then halve. The hypotenuse never enters the area formula.",
      skills: ["triangle-area"]
    },
    {
      id: 8,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A movie theater discounts every concession combo by $20\\%$. If the regular price of a combo is $\\$16.40$, what is the sale price?",
      choices: [
        { id: "A", text: "$\\$13.12$" },
        // distractor: subtracts 20 cents instead of 20 percent
        { id: "B", text: "$\\$16.20$" },
        // distractor: adds 20% instead of subtracting it
        { id: "C", text: "$\\$19.68$" },
        // distractor: divides by 0.80 instead of multiplying
        { id: "D", text: "$\\$20.50$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Percent Decrease**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Pay $100\\% - 20\\% = 80\\%$, so the sale price is $0.80 \\cdot 16.40 = \\$13.12$.\n\n**The Full Solution:**\nStep 1: The discount is $20\\% \\cdot 16.40 = 0.20 \\cdot 16.40 = \\$3.28$.\nStep 2: Sale price $= 16.40 - 3.28 = \\$13.12$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\$16.20$): subtracts $20$ CENTS instead of $20$ percent.\n* Choice C ($\\$19.68$): adds $20\\%$ instead of subtracting it.\n* Choice D ($\\$20.50$): divides by $0.80$ instead of multiplying — that would undo a discount, not apply one.\n\n**Test Day Takeaway:** For a $p\\%$ discount, multiply by $\\left(1 - \\frac{p}{100}\\right)$ in one step — and check that a discount always makes the price SMALLER.",
      skills: ["percent-change", "percent-word-problems"]
    },
    {
      id: 9,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "If $x^2 - 9x + 18 = 0$, what are the solutions for $x$?",
      choices: [
        // distractor: factors but flips signs
        { id: "A", text: "$x = -6$ and $x = -3$" },
        // distractor: picks factors of 18 that add to 19, not 9
        { id: "B", text: "$x = 1$ and $x = 18$" },
        // distractor: 2 and 9 multiply to 18 but add to 11, not 9
        { id: "C", text: "$x = 2$ and $x = 9$" },
        { id: "D", text: "$x = 3$ and $x = 6$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Quadratic by Factoring**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Find two numbers that multiply to $18$ and add to $9$: those are $3$ and $6$, so $(x - 3)(x - 6) = 0$ and $x = 3$ or $x = 6$.\n\n**The Full Solution:**\nStep 1: Factor $x^2 - 9x + 18 = (x - 3)(x - 6) = 0$.\nStep 2: Set each factor to zero: $x = 3$ or $x = 6$.\nStep 3: Check: $3^2 - 9(3) + 18 = 9 - 27 + 18 = 0$ and $6^2 - 9(6) + 18 = 36 - 54 + 18 = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x = -6$ and $x = -3$): factors as $(x + 3)(x + 6)$, ignoring that the middle term is $-9x$.\n* Choice B ($x = 1$ and $x = 18$): picks factors of $18$ that multiply right but add to $19$, not $9$.\n* Choice C ($x = 2$ and $x = 9$): uses $2 \\cdot 9 = 18$, but $2 + 9 = 11 \\neq 9$.\n\n**Test Day Takeaway:** For $x^2 + bx + c$, find two numbers that multiply to $c$ and add to $b$. Both conditions must hold.",
      skills: ["finding-roots-factoring"]
    },
    {
      id: 10,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "What is the volume, in cubic inches, of a rectangular storage bin with length $8$ inches, width $3$ inches, and height $6$ inches?",
      choices: [
        // distractor: adds the three dimensions instead of multiplying
        { id: "A", text: "$17$" },
        // distractor: multiplies only length and height, dropping the width
        { id: "B", text: "$48$" },
        // distractor: adds the three face areas 24 + 18 + 48 instead of multiplying the dimensions
        { id: "C", text: "$90$" },
        { id: "D", text: "$144$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Volume of a Rectangular Prism**\n\n**Choice D is correct.**\n\n**The Fast Way (~5s):** $V = \\ell \\cdot w \\cdot h = 8 \\cdot 3 \\cdot 6 = 144$ cubic inches.\n\n**The Full Solution:**\nStep 1: Volume of a rectangular box $= \\text{length} \\times \\text{width} \\times \\text{height}$.\nStep 2: $8 \\cdot 3 \\cdot 6 = 24 \\cdot 6 = 144$ cubic inches.\n\n**Why the wrong answers are tempting:**\n* Choice A ($17$): adds the dimensions ($8 + 3 + 6$) instead of multiplying.\n* Choice B ($48$): multiplies only $8 \\cdot 6$, dropping the width.\n* Choice C ($90$): adds the three distinct face areas ($24 + 18 + 48$) — a surface-area-style move, not a volume.\n\n**Test Day Takeaway:** Volume of a box $= \\ell \\cdot w \\cdot h$. Three lengths multiplied always give cubic units.",
      skills: ["volume-prism"]
    },
    {
      id: 11,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The mean of a data set of eight values is $52$. A new data set is formed by increasing each value in the original data set by $9$. What is the mean of the new data set?",
      correctAnswer: "61",
      explanation: "**SAT Pattern: Effect of Shifting Every Value on the Mean**\n\n**The correct answer is $61$.**\n\n**The Fast Way (~5s):** Adding $9$ to every value adds $9$ to the mean: $52 + 9 = 61$.\n\n**The Full Solution:**\nStep 1: The original eight values total $8 \\cdot 52 = 416$.\nStep 2: Increasing each of the eight values by $9$ raises the total by $8 \\cdot 9 = 72$, to $488$.\nStep 3: New mean $= \\frac{488}{8} = 61$.\n\n**Common Mistakes:** Multiplying the mean by $9$; adding the total shift $72$ to the mean instead of to the sum ($124$); or assuming the mean is unchanged because \"every value moved the same way\" — that holds for the RANGE, not the mean.\n\n**Test Day Takeaway:** Adding a constant $c$ to every data value shifts the mean (and median) by exactly $c$, while the range and standard deviation stay the same.",
      skills: ["calculate-mean"]
    },
    {
      id: 12,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "Solve the system of equations.\n\n$x + y = 20$\n$x - y = 6$",
      choices: [
        // distractor: swaps x and y
        { id: "A", text: "$x = 7$, $y = 13$" },
        // distractor: halves each right-hand side without combining the equations
        { id: "B", text: "$x = 10$, $y = 3$" },
        { id: "C", text: "$x = 13$, $y = 7$" },
        // distractor: reads 20 and 6 straight off the right-hand sides
        { id: "D", text: "$x = 20$, $y = 6$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: System by Elimination (Sum/Difference)**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Add the equations to get $2x = 26 \\Rightarrow x = 13$; then $y = 20 - 13 = 7$.\n\n**The Full Solution:**\nStep 1: Add: $(x + y) + (x - y) = 20 + 6 \\Rightarrow 2x = 26 \\Rightarrow x = 13$.\nStep 2: Substitute into $x + y = 20$: $13 + y = 20 \\Rightarrow y = 7$.\nStep 3: Check: $13 + 7 = 20$ and $13 - 7 = 6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x = 7$, $y = 13$): swaps the values — but then $x - y = -6$, not $6$.\n* Choice B ($x = 10$, $y = 3$): halves each right-hand side without combining the equations.\n* Choice D ($x = 20$, $y = 6$): reads $20$ and $6$ straight off the right-hand sides.\n\n**Test Day Takeaway:** When you see $x + y$ and $x - y$, add to get $2x$ and subtract to get $2y$ — one clean step each.",
      skills: ["elimination-method", "substitution-method"]
    },
    {
      id: 13,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "In the right triangle shown, the side opposite angle $\\theta$ has length $9$ and the hypotenuse has length $41$. What is the value of $\\cos \\theta$?",
      diagram: {
        type: "rightTriangle",
        params: {
          labels: ["θ", "", ""],
          sideLabels: ["", "9", "41"],
          rightAngleVertex: 1
        }
      },
      choices: [
        // distractor: gives sin theta (opposite over hypotenuse)
        { id: "A", text: "$\\dfrac{9}{41}$" },
        // distractor: gives tan theta (opposite over adjacent)
        { id: "B", text: "$\\dfrac{9}{40}$" },
        { id: "C", text: "$\\dfrac{40}{41}$" },
        // distractor: flips numerator and denominator (sec theta)
        { id: "D", text: "$\\dfrac{41}{40}$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: SOH-CAH-TOA**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The missing leg is $\\sqrt{41^2 - 9^2} = \\sqrt{1681 - 81} = \\sqrt{1600} = 40$ (a $9$-$40$-$41$ triple). Cosine is adjacent over hypotenuse: $\\cos \\theta = \\frac{40}{41}$.\n\n**The Full Solution:**\nStep 1: CAH means $\\cos \\theta = \\frac{\\text{adjacent}}{\\text{hypotenuse}}$ — so the adjacent leg is needed first.\nStep 2: By the Pythagorean theorem, adjacent $= \\sqrt{41^2 - 9^2} = \\sqrt{1600} = 40$.\nStep 3: $\\cos \\theta = \\frac{40}{41}$, which is choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{9}{41}$): this is $\\sin \\theta = \\frac{\\text{opposite}}{\\text{hypotenuse}}$ — the two given numbers, but the wrong ratio.\n* Choice B ($\\frac{9}{40}$): this is $\\tan \\theta = \\frac{\\text{opposite}}{\\text{adjacent}}$.\n* Choice D ($\\frac{41}{40}$): flips the ratio, giving $\\frac{\\text{hypotenuse}}{\\text{adjacent}}$ — and a cosine can never exceed $1$.\n\n**Test Day Takeaway:** SOH-CAH-TOA fixes the order. When the ratio needs a side you weren't given, find it with the Pythagorean theorem first.",
      skills: ["soh-cah-toa"]
    },
    {
      id: 14,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The scatterplot shows the height $y$, in centimeters, of seedlings in a nursery tray $x$ weeks after germination. The line of best fit is $y = 4x + 3$. According to this model, what height, in centimeters, is predicted for a seedling $8$ weeks after germination?",
      diagram: { type: "scatterplot", params: {
        points: [[1,8],[2,10],[3,16],[4,18],[5,24],[6,26],[7,32],[8,34],[9,40],[10,44]],
        xMin: 0, xMax: 11, yMin: 0, yMax: 50,
        xGridStep: 1, yGridStep: 5, xLabelStep: 2, yLabelStep: 10,
        xLabel: "Weeks after germination", yLabel: "Height (cm)",
        bestFitLine: { slope: 4, intercept: 3 },
      } },
      correctAnswer: "35",
      explanation: "**SAT Pattern: Line of Best Fit Prediction**\n\n**The correct answer is $35$.**\n\n**The Fast Way (~10s):** Plug $x = 8$ into $y = 4x + 3$: $4(8) + 3 = 32 + 3 = 35$.\n\n**The Full Solution:**\nStep 1: The line of best fit predicts a $y$-value for any $x$. Substitute the given weeks, $x = 8$.\nStep 2: $y = 4(8) + 3 = 32 + 3 = 35$.\n\n**Common Mistakes:** Stopping at $32$ and forgetting the $+3$; adding $4 + 8 + 3 = 15$ instead of multiplying the slope by $x$; reading a nearby data point off the plot instead of using the model.\n\n**Test Day Takeaway:** A line of best fit is just a linear equation. To predict, substitute the known $x$ and compute — multiply first, then add the intercept.",
      skills: ["function-evaluation", "slope-intercept-form"]
    },
    {
      id: 15,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The table summarizes the $300$ students who answered a survey about how they usually travel to campus. If a surveyed student is selected at random, what is the probability that the student is an upper-year student who rides the shuttle?",
      diagram: {
        type: "twoWayTable",
        params: {
          headers: ["", "Shuttle", "Walk", "Bike", "Total"],
          rows: [
            ["First-year", "70", "45", "25", "140"],
            ["Upper-year", "50", "70", "40", "160"],
            ["Total", "120", "115", "65", "300"]
          ]
        }
      },
      choices: [
        { id: "A", text: "$\\dfrac{50}{300}$" },
        // distractor: conditional on upper-year — divides by the row total
        { id: "B", text: "$\\dfrac{50}{160}$" },
        // distractor: probability of riding the shuttle alone, ignoring class year
        { id: "C", text: "$\\dfrac{120}{300}$" },
        // distractor: conditional on shuttle — divides by the column total
        { id: "D", text: "$\\dfrac{50}{120}$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Two-Way Table — Joint Probability**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Joint probability (\"and\") uses the grand total: $\\frac{50}{300} = \\frac{1}{6}$, which is choice A.\n\n**The Full Solution:**\nStep 1: The upper-year-and-shuttle cell reads $50$ students.\nStep 2: A randomly selected student is drawn from all $300$ surveyed students, so the denominator is the grand total.\nStep 3: $P(\\text{upper-year and shuttle}) = \\frac{50}{300} = \\frac{1}{6}$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{50}{160}$): this is the conditional $P(\\text{shuttle} \\mid \\text{upper-year})$, dividing by the upper-year row total.\n* Choice C ($\\frac{120}{300}$): this is $P(\\text{shuttle})$ alone, ignoring the class-year condition.\n* Choice D ($\\frac{50}{120}$): this is the conditional $P(\\text{upper-year} \\mid \\text{shuttle})$, dividing by the shuttle column total.\n\n**Test Day Takeaway:** \"And\" means joint probability — the cell count over the grand total. \"Given\" means conditional — divide by the row or column total of the stated condition.",
      skills: ["two-way-table", "probability-basics"]
    },
    {
      id: 16,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A county truck spreads $1$ ton of road salt over $16$ lane-miles. At this rate, how many tons of road salt are needed to treat $480$ lane-miles?",
      choices: [
        // distractor: rounds the rate to 20 lane-miles per ton — 480/20
        { id: "A", text: "$24$" },
        { id: "B", text: "$30$" },
        // distractor: adds 16 to 480 before dividing — 496/16
        { id: "C", text: "$31$" },
        // distractor: divides by 15 after misreading the rate — 480/15
        { id: "D", text: "$32$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Rate Word Problem (Proportions)**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Lane-miles divided by lane-miles-per-ton: $\\frac{480}{16} = 30$, which is choice B.\n\n**The Full Solution:**\nStep 1: The truck covers $16$ lane-miles per ton. Set up a proportion: $\\frac{1 \\text{ ton}}{16 \\text{ lane-miles}} = \\frac{t}{480 \\text{ lane-miles}}$.\nStep 2: Cross-multiply: $16t = 480$, so $t = \\frac{480}{16} = 30$.\nStep 3: Check: $30 \\times 16 = 480$ lane-miles. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($24$): rounds the rate to $20$ lane-miles per ton and computes $\\frac{480}{20}$.\n* Choice C ($31$): adds $16$ to $480$ before dividing, computing $\\frac{496}{16}$.\n* Choice D ($32$): divides by $15$ after misreading the rate.\n\n**Test Day Takeaway:** Total $\\div$ rate $=$ count. Identify which quantity is \"per unit\" ($16$ lane-miles per ton), then divide the total by it.",
      skills: ["rate-conversion", "unit-conversion"]
    },
    // ============================================================
    // Q17-Q22: Medium-hard ceiling (band 6-7)
    // ============================================================
    {
      id: 17,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "A line in the $xy$-plane is parallel to the line $y = 4x + 1$ and passes through the point $(2, 3)$. What is the equation of the line?",
      choices: [
        // distractor: uses the perpendicular slope -1/4 instead of the parallel slope
        { id: "A", text: "$y = -\\dfrac{1}{4}x + \\dfrac{7}{2}$" },
        // distractor: sign-flips the slope to -4
        { id: "B", text: "$y = -4x + 11$" },
        // distractor: copies the original line, which does not pass through (2, 3)
        { id: "C", text: "$y = 4x + 1$" },
        { id: "D", text: "$y = 4x - 5$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Parallel Line Equation**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Parallel means same slope, $m = 4$. Through $(2, 3)$: $y - 3 = 4(x - 2) \\Rightarrow y = 4x - 5$, which is choice D.\n\n**The Full Solution:**\nStep 1: Parallel lines share a slope, so the new line has $m = 4$ (matching $y = 4x + 1$).\nStep 2: Apply point-slope with $(2, 3)$: $y - 3 = 4(x - 2)$.\nStep 3: Expand: $y = 4x - 8 + 3 = 4x - 5$.\nStep 4: Check: at $x = 2$, $y = 4(2) - 5 = 3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -\\frac{1}{4}x + \\frac{7}{2}$): uses the perpendicular slope (negative reciprocal) instead of the parallel slope.\n* Choice B ($y = -4x + 11$): sign-flips the slope to $-4$.\n* Choice C ($y = 4x + 1$): copies the original line; correct slope but wrong intercept, so it does not pass through $(2, 3)$.\n\n**Test Day Takeaway:** Parallel lines have equal slopes but different intercepts. Carry over the slope, then use the given point to lock in the new $y$-intercept.",
      skills: ["parallel-line-slope", "writing-parallel-equation"]
    },
    {
      id: 18,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "The function $N$ is defined by $N(t) = 750(1.03)^t$, where $N(t)$ is the number of seedlings in a nursery's inventory $t$ years after $2024$. According to this model, the inventory is increasing by what percent each year?",
      choices: [
        // distractor: keeps the decimal 0.03 but forgets to convert to a percent
        { id: "A", text: "$0.03\\%$" },
        // distractor: reads the whole base 1.03 as the percent without subtracting 1
        { id: "B", text: "$1.03\\%$" },
        { id: "C", text: "$3\\%$" },
        // distractor: converts the entire growth factor to a percent instead of just the increase
        { id: "D", text: "$103\\%$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Exponential Growth Rate**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The base $1.03 = 1 + 0.03$, so the yearly growth rate is $0.03 = 3\\%$, which is choice C.\n\n**The Full Solution:**\nStep 1: In an exponential model $a \\cdot b^t$ with $b > 1$, the percent growth per period is $(b - 1) \\times 100\\%$.\nStep 2: Here $b = 1.03$, so the rate is $(1.03 - 1) \\times 100\\% = 0.03 \\times 100\\% = 3\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.03\\%$): keeps the decimal $0.03$ but forgets to multiply by $100$ to convert to a percent.\n* Choice B ($1.03\\%$): reads the whole base $1.03$ as the percent without subtracting $1$.\n* Choice D ($103\\%$): converts the entire growth factor to a percent instead of just the increase.\n\n**Test Day Takeaway:** For $a(1 + r)^t$, the growth rate is $r$. Subtract $1$ from the base, then multiply by $100$ to get the percent.",
      skills: ["exponential-growth-decay"]
    },
    {
      id: 19,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "A rotating sprinkler at a soccer field waters a circular region with a radius of $9$ meters. The area of the region, in square meters, can be expressed as $k\\pi$. What is the value of $k$?",
      correctAnswer: "81",
      explanation: "**SAT Pattern: Area of a Circle**\n\n**The correct answer is $81$.**\n\n**The Fast Way (~5s):** $A = \\pi r^2 = \\pi (9)^2 = 81\\pi$. The coefficient of $\\pi$ is $81$.\n\n**The Full Solution:**\nStep 1: The watered region is a circle of radius $9$, and the area of a circle is $A = \\pi r^2$.\nStep 2: With $r = 9$: $A = \\pi \\cdot 9^2 = 81\\pi$ square meters.\nStep 3: Matching $A = k\\pi$ gives $k = 81$.\n\n**Common Mistakes:** Computing the circumference $2\\pi r = 18\\pi$ (coefficient $18$); forgetting to square the radius and reporting $9$.\n\n**Test Day Takeaway:** Area uses $\\pi r^2$ (square units); circumference uses $2\\pi r$ (linear units). Always square the radius for area.",
      skills: ["circle-area", "circumference"]
    },
    {
      id: 20,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "The total cost $C$, in dollars, of chartering a campus shuttle is given by $C = 60 + 0.25m$, where $m$ is the number of miles driven. If a charter cost $\\$138$, how many miles were driven?",
      choices: [
        // distractor: subtracts 60 but forgets to divide by 0.25
        { id: "A", text: "$78$" },
        // distractor: divides 138 by 0.60, mixing up the numbers in the equation
        { id: "B", text: "$230$" },
        { id: "C", text: "$312$" },
        // distractor: divides 138 by 0.25 before subtracting the flat fee
        { id: "D", text: "$552$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Linear Word Problem with Two-Step Solve**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Set $C = 138$: $138 = 60 + 0.25m \\Rightarrow 0.25m = 78 \\Rightarrow m = 312$, which is choice C.\n\n**The Full Solution:**\nStep 1: Substitute the cost: $60 + 0.25m = 138$.\nStep 2: Subtract $60$ first: $0.25m = 78$.\nStep 3: Divide by $0.25$: $m = \\frac{78}{0.25} = 312$.\nStep 4: Check: $60 + 0.25(312) = 60 + 78 = 138$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($78$): stops at $0.25m = 78$ and reports $78$ without dividing by $0.25$.\n* Choice B ($230$): divides $138$ by $0.60$, mixing up the numbers in the equation.\n* Choice D ($552$): divides $138$ by $0.25$ before subtracting the $\\$60$ flat fee.\n\n**Test Day Takeaway:** In a two-step linear equation, undo the addition before the multiplication. Dividing by $0.25$ is the same as multiplying by $4$.",
      skills: ["solving-equations", "word-problem-to-equation"]
    },
    {
      id: 21,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "The expression $(2x - 7)(x + 4)$ is equivalent to which of the following?",
      choices: [
        // distractor: multiplies only the First and Last terms, dropping the middle entirely
        { id: "A", text: "$2x^2 - 28$" },
        // distractor: sign flip on the middle term (7x - 8x instead of 8x - 7x)
        { id: "B", text: "$2x^2 - x - 28$" },
        // distractor: combines the outer and inner terms as 8 + 7 = 15
        { id: "C", text: "$2x^2 + 15x - 28$" },
        { id: "D", text: "$2x^2 + x - 28$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: FOIL / Distribution**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** FOIL gives $2x^2$, then the middle terms $8x - 7x = x$, then $-28$: $2x^2 + x - 28$, which is choice D.\n\n**The Full Solution:**\nStep 1: First: $2x \\cdot x = 2x^2$. Outer: $2x \\cdot 4 = 8x$. Inner: $-7 \\cdot x = -7x$. Last: $-7 \\cdot 4 = -28$.\nStep 2: Combine like terms: $2x^2 + 8x - 7x - 28 = 2x^2 + x - 28$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2x^2 - 28$): multiplies only the First and Last terms, dropping the entire middle.\n* Choice B ($2x^2 - x - 28$): flips the sign of the middle term, computing $7x - 8x$ instead of $8x - 7x$.\n* Choice C ($2x^2 + 15x - 28$): combines as $8 + 7 = 15$ instead of $8 - 7 = 1$, losing the negative on the $7$.\n\n**Test Day Takeaway:** FOIL — First, Outer, Inner, Last — then combine the two middle terms watching signs carefully.",
      skills: ["distributive-property", "combining-like-terms"]
    },
    {
      id: 22,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "A rectangular seedling bed at a plant nursery has a length that is $5$ feet greater than its width. If the perimeter of the bed is $58$ feet, what is the width of the bed, in feet?",
      correctAnswer: "12",
      explanation: "**SAT Pattern: Word Problem to Linear Equation**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~25s):** Width $w$, length $w + 5$. Perimeter $2w + 2(w + 5) = 4w + 10 = 58$, so $w = 12$.\n\n**The Full Solution:**\nStep 1: Let $w$ be the width. Then the length is $w + 5$.\nStep 2: Perimeter is twice the length plus twice the width: $2(w + 5) + 2w = 4w + 10$.\nStep 3: Set equal to $58$: $4w + 10 = 58 \\Rightarrow 4w = 48 \\Rightarrow w = 12$.\nStep 4: Check: width $12$, length $17$, perimeter $2(12) + 2(17) = 58$. $\\checkmark$\n\n**Common Mistakes:** Solving for the length ($17$) instead of the width; doing $58 \\div 4 = 14.5$, which ignores the $+5$ length relationship.\n\n**Test Day Takeaway:** Name the variable, write each quantity in terms of it, substitute into the formula, then re-read to answer exactly what was asked.",
      skills: ["solving-equations", "word-problem-to-equation"]
    }
  ]
};

export default practiceTest10M2Easy;
