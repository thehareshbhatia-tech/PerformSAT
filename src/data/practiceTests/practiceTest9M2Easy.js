// Practice Test 9 — Math Module 2 Easy variant (22 questions)
// For students routed to easier path after Module 1 (~<60% correct).
// Distribution: 3E / 13M / 6H. Q1-3 easy openers. Max-score ceiling: ~650.
// Domain mix: 7 Algebra / 6 Advanced Math / 5 Problem-Solving / 4 Geometry & Trig.
// Official-calibration recreation (2026-09-01): every item re-authored against
// the CB Educator Question Bank register (docs/TEST_RECREATION_SPEC.md);
// slot metadata frozen. 4 visual items (scatterplot, right triangle,
// triangle with angles, plus the M1-frozen set). Numeric MC choices ascending.

export const practiceTest9M2Easy = {
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
      question: "Which of the following is equivalent to $10 + 7x + 2 - 3x$?",
      choices: [
        // distractor: keeps the variable term but drops the constants
        { id: "A", text: "$4x$" },
        // distractor: subtracts the constants (10 − 2) instead of adding
        { id: "B", text: "$4x + 8$" },
        { id: "C", text: "$4x + 12$" },
        // distractor: adds the coefficients 7 + 3 instead of subtracting for 7x − 3x
        { id: "D", text: "$10x + 12$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Combining Like Terms**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Group the constants and the variables: $10 + 2 = 12$ and $7x - 3x = 4x$, giving $4x + 12$.\n\n**The Full Solution:**\nStep 1: Collect the variable terms: $7x - 3x = 4x$.\nStep 2: Collect the constants: $10 + 2 = 12$.\nStep 3: Combine: $4x + 12$. That is choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A ($4x$): keeps the variable term but drops the constants.\n* Choice B ($4x + 8$): subtracts the constants ($10 - 2$) instead of adding them.\n* Choice D ($10x + 12$): adds the coefficients $7 + 3 = 10$ instead of subtracting for $7x - 3x$.\n\n**Test Day Takeaway:** Combine like terms by collecting all variable terms together and all constants together, watching each term's sign.",
      skills: ["combining-like-terms", "equivalent-expressions"]
    },
    {
      id: 2,
      type: "fill-in",
      difficulty: "easy",
      band: 2,
      question: "What is $\\dfrac{2}{5} + \\dfrac{1}{2}$? Express your answer as a decimal.",
      correctAnswer: "0.9",
      explanation: "**SAT Pattern: Adding Fractions with Different Denominators**\n\n**The correct answer is $0.9$.**\n\n**The Fast Way (~10s):** Use tenths: $\\frac{2}{5} = \\frac{4}{10}$ and $\\frac{1}{2} = \\frac{5}{10}$, so the sum is $\\frac{9}{10} = 0.9$.\n\n**The Full Solution:**\nStep 1: The least common denominator of $5$ and $2$ is $10$.\nStep 2: Convert: $\\frac{2}{5} = \\frac{4}{10}$ and $\\frac{1}{2} = \\frac{5}{10}$.\nStep 3: Add the numerators over the common denominator: $\\frac{4}{10} + \\frac{5}{10} = \\frac{9}{10}$.\nStep 4: As a decimal, $\\frac{9}{10} = 0.9$.\n\n**Common Mistakes:** Adding straight across to get $\\frac{3}{7}$; converting only one of the two fractions before adding.\n\n**Test Day Takeaway:** To add fractions, find a common denominator first, then add only the numerators. Convert to a decimal as the final step.",
      skills: ["arithmetic"]
    },
    {
      id: 3,
      type: "multiple-choice",
      difficulty: "easy",
      band: 3,
      question: "If $2h + 7h = 63$, what is the value of $h$?",
      choices: [
        { id: "A", text: "$7$" },
        // distractor: divides 63 by 7, using only one of the two coefficients
        { id: "B", text: "$9$" },
        // distractor: subtracts 7 from 63 instead of dividing by 9
        { id: "C", text: "$56$" },
        // distractor: multiplies 63 by 7 — the inverse of the correct move
        { id: "D", text: "$441$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Combining Like Terms**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Combine: $2h + 7h = 9h$, so $9h = 63$ and $h = 7$.\n\n**The Full Solution:**\nStep 1: Both terms contain $h$, so add their coefficients: $2h + 7h = (2 + 7)h = 9h$.\nStep 2: The equation becomes $9h = 63$.\nStep 3: Divide both sides by $9$: $h = 7$.\nStep 4: Check: $2(7) + 7(7) = 14 + 49 = 63$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($9$): divides $63$ by $7$, using only one of the two coefficients.\n* Choice C ($56$): subtracts $7$ from $63$ instead of dividing by $9$.\n* Choice D ($441$): multiplies $63$ by $7$ — the inverse of the correct move.\n\n**Test Day Takeaway:** Combine like terms before solving: $2h + 7h$ is $9h$. Then one division finishes it.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 4,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "What is the perimeter of a square with side length $9$ centimeters?",
      choices: [
        // distractor: adds the number of sides (4) to the side length instead of multiplying
        { id: "A", text: "$13$ cm" },
        // distractor: adds only 2 sides
        { id: "B", text: "$18$ cm" },
        { id: "C", text: "$36$ cm" },
        // distractor: computes the area s² instead of the perimeter
        { id: "D", text: "$81$ cm" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Perimeter of a Square**\n\n**Choice C is correct.**\n\n**The Fast Way (~3s):** Perimeter $= 4 \\times \\text{side} = 4 \\times 9 = 36$ cm.\n\n**The Full Solution:**\nStep 1: A square has $4$ equal sides, and perimeter is the total distance around.\nStep 2: $P = 4s = 4 \\times 9 = 36$ cm. That is choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A ($13$ cm): adds the number of sides ($9 + 4$) instead of multiplying.\n* Choice B ($18$ cm): adds only $2$ sides.\n* Choice D ($81$ cm): computes the area $s^2 = 9^2$ instead of the perimeter.\n\n**Test Day Takeaway:** For a square, perimeter $= 4s$ and area $= s^2$. Perimeter is a length; area is a length squared.",
      skills: ["perimeter", "geometry"]
    },
    {
      id: 5,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "At a batting cage, Leo buys $4$ token bundles at $\\$3.25$ each and $2$ bottles of water at $\\$1.50$ each. What is the total cost, in dollars?",
      choices: [
        // distractor: gives only the water cost
        { id: "A", text: "$\\$3.00$" },
        // distractor: adds the two prices without multiplying by the quantities
        { id: "B", text: "$\\$4.75$" },
        // distractor: gives only the token-bundle cost
        { id: "C", text: "$\\$13.00$" },
        { id: "D", text: "$\\$16.00$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Multi-Item Total Cost**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Bundles: $4 \\times 3.25 = 13.00$. Water: $2 \\times 1.50 = 3.00$. Total: $13.00 + 3.00 = \\$16.00$.\n\n**The Full Solution:**\nStep 1: Cost of the token bundles: $4 \\times \\$3.25 = \\$13.00$.\nStep 2: Cost of the water: $2 \\times \\$1.50 = \\$3.00$.\nStep 3: Add the two amounts: $\\$13.00 + \\$3.00 = \\$16.00$. That is choice D.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$3.00$): gives only the water cost.\n* Choice B ($\\$4.75$): adds the two prices ($3.25 + 1.50$) without multiplying by the quantities.\n* Choice C ($\\$13.00$): gives only the token-bundle cost.\n\n**Test Day Takeaway:** For a multi-item total, multiply each quantity by its own price, then add the results.",
      skills: ["word-problem-to-equation", "linear-functions"]
    },
    {
      id: 6,
      type: "fill-in",
      difficulty: "medium",
      band: 4,
      question: "A circle has a diameter of $18$. What is the circumference of the circle, in terms of $\\pi$? (Provide just the integer coefficient of $\\pi$.)",
      correctAnswer: "18",
      explanation: "**SAT Pattern: Circumference from Diameter**\n\n**The correct answer is $18$.**\n\n**The Fast Way (~5s):** $C = \\pi d = 18\\pi$, so the coefficient of $\\pi$ is $18$.\n\n**The Full Solution:**\nStep 1: Circumference is $C = 2\\pi r = \\pi d$.\nStep 2: The diameter is given as $18$, so $C = \\pi \\times 18 = 18\\pi$.\nStep 3: The integer coefficient of $\\pi$ is $18$.\n\n**Common Mistakes:** Treating $18$ as the radius and getting $36\\pi$; using the area formula $\\pi r^2$ for $81\\pi$; halving the diameter and reporting $9\\pi$.\n\n**Test Day Takeaway:** Since $C = \\pi d$, use the diameter directly when it is given — no need to convert to radius first.",
      skills: ["circumference", "circles"]
    },
    {
      id: 7,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "What is the value of $x$ in the equation $\\dfrac{5x}{9} = 10$?",
      choices: [
        // distractor: divides 10 by 9 instead of multiplying to clear the fraction
        { id: "A", text: "$\\dfrac{10}{9}$" },
        // distractor: divides 10 by 5 and ignores the denominator 9
        { id: "B", text: "$2$" },
        // distractor: subtracts the coefficient 5 from 10 instead of solving
        { id: "C", text: "$5$" },
        { id: "D", text: "$18$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Linear Equation with Fractional Coefficient**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Multiply both sides by the reciprocal $\\frac{9}{5}$: $x = 10 \\times \\frac{9}{5} = 18$.\n\n**The Full Solution:**\nStep 1: Start from $\\frac{5x}{9} = 10$. Multiply both sides by $9$: $5x = 90$.\nStep 2: Divide both sides by $5$: $x = 18$. That is choice D.\nStep 3: Check: $\\frac{5(18)}{9} = \\frac{90}{9} = 10$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{10}{9}$): divides $10$ by $9$ instead of multiplying to clear the fraction.\n* Choice B ($2$): divides $10$ by $5$ and ignores the denominator $9$ entirely.\n* Choice C ($5$): subtracts the coefficient ($10 - 5$) instead of solving the equation.\n\n**Test Day Takeaway:** To solve $\\frac{ax}{b} = c$, clear the fraction by multiplying by $b$, then divide by $a$ — or multiply once by the reciprocal $\\frac{b}{a}$.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 8,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "If $x^2 = 121$ and $x < 0$, what is the value of $x$?",
      choices: [
        // distractor: negates 121 without taking the square root at all
        { id: "A", text: "$-121$" },
        // distractor: divides 121 by 2 instead of taking the square root
        { id: "B", text: "$-60.5$" },
        { id: "C", text: "$-11$" },
        // distractor: the positive root, ignoring the constraint x < 0
        { id: "D", text: "$11$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Square Root with Sign Restriction**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** $x^2 = 121 \\Rightarrow x = \\pm 11$. The constraint $x < 0$ selects $x = -11$.\n\n**The Full Solution:**\nStep 1: Take the square root of both sides: $x = \\pm\\sqrt{121} = \\pm 11$.\nStep 2: Apply the restriction $x < 0$, which rules out $+11$ and leaves $x = -11$. That is choice C.\nStep 3: Check: $(-11)^2 = 121$ and $-11 < 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-121$): negates $121$ without taking the square root at all.\n* Choice B ($-60.5$): divides $121$ by $2$ instead of taking the square root.\n* Choice D ($11$): the positive root, ignoring the constraint $x < 0$.\n\n**Test Day Takeaway:** $x^2 = k$ has two solutions, $x = \\pm\\sqrt{k}$. A sign constraint such as $x < 0$ tells you which root to keep.",
      skills: ["finding-roots-factoring", "quadratic-equations"]
    },
    {
      id: 9,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The scatterplot shows the number of hours $x$ each of $10$ climbers practices per week and the number of routes $y$ the climber completed at a competition. The data show a positive linear association. Which of the following is a reasonable interpretation?",
      diagram: { type: "scatterplot", params: {
        points: [[1,2],[2,4],[3,3],[4,5],[5,6],[6,6],[7,8],[8,7],[9,9],[10,10]],
        xMin: 0, xMax: 12, yMin: 0, yMax: 12,
        xGridStep: 1, yGridStep: 1, xLabelStep: 2, yLabelStep: 2,
        xLabel: "Practice hours per week", yLabel: "Routes completed",
        bestFitLine: { slope: 0.8, intercept: 1.5 },
      } },
      choices: [
        // distractor: confuses correlation with causation
        { id: "A", text: "Practicing more hours causes a climber to complete more routes." },
        { id: "B", text: "On average, climbers who practice more hours tend to complete more routes." },
        // distractor: describes a negative association, the wrong direction
        { id: "C", text: "Climbers who practice more hours tend to complete fewer routes." },
        // distractor: overstates the trend as holding for every single climber
        { id: "D", text: "Every climber who practices more hours completes more routes than every climber who practices fewer." }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Interpreting Scatterplot Association**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** A positive linear association means $x$ and $y$ tend to rise together, so climbers who practice more tend to complete more routes on average — choice B.\n\n**The Full Solution:**\nStep 1: A positive association means as practice hours ($x$) increase, routes completed ($y$) tend to increase.\nStep 2: An association describes a trend, not a guarantee for every climber, and it does not establish cause. The hedge \"on average\" captures exactly that.\nStep 3: Choice B states the trend with the correct hedge.\n\n**Why the wrong answers are tempting:**\n* Choice A: claims practice *causes* the higher count — association is not causation.\n* Choice C: describes a negative association, the wrong direction.\n* Choice D: overstates the trend as holding for every single climber; the points at $x = 5$ and $x = 6$ already tie.\n\n**Test Day Takeaway:** Read scatterplot language carefully: \"positive\" means the variables increase together, and a sound interpretation says \"tends to\" or \"on average\" — never a guarantee or a cause.",
      skills: ["scatterplots", "statistics"]
    },
    {
      id: 10,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "In the right triangle shown, the two legs have lengths $15$ centimeters and $36$ centimeters. What is the length, in centimeters, of the hypotenuse?",
      diagram: {
        type: "rightTriangle",
        params: {
          sideLabels: ["15", "36", ""],
          rightAngleVertex: 1
        }
      },
      correctAnswer: "39",
      explanation: "**SAT Pattern: Pythagorean Theorem (5-12-13 Family)**\n\n**The correct answer is $39$.**\n\n**The Fast Way (~10s):** $15$ and $36$ are $3 \\times 5$ and $3 \\times 12$, so this is the $5$-$12$-$13$ triple scaled by $3$. The hypotenuse is $3 \\times 13 = 39$.\n\n**The Full Solution:**\nStep 1: The legs are $15$ and $36$, so $c^2 = 15^2 + 36^2 = 225 + 1296 = 1521$.\nStep 2: $c = \\sqrt{1521} = 39$ centimeters.\nStep 3: Confirm the shortcut: $15 = 3 \\times 5$ and $36 = 3 \\times 12$, so the hypotenuse is $3 \\times 13 = 39$.\n\n**Common Mistakes:** Adding the legs without squaring to get $51$; subtracting the squares instead of adding; mis-evaluating $\\sqrt{1521}$.\n\n**Test Day Takeaway:** Recognize Pythagorean triples and their multiples — $5$-$12$-$13$ scales to $15$-$36$-$39$. Spotting the pattern beats squaring and adding.",
      skills: ["pythagorean-theorem", "right-triangles"]
    },
    {
      id: 11,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "If $f(x) = 3x^2 + 2$, what is the value of $f(4) - f(2)$?",
      choices: [
        // distractor: gives only f(2)
        { id: "A", text: "$14$" },
        { id: "B", text: "$36$" },
        // distractor: gives only f(4) and forgets to subtract
        { id: "C", text: "$50$" },
        // distractor: adds f(4) + f(2) instead of subtracting
        { id: "D", text: "$64$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Function Difference**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $f(4) = 3(16) + 2 = 50$ and $f(2) = 3(4) + 2 = 14$, so $f(4) - f(2) = 50 - 14 = 36$.\n\n**The Full Solution:**\nStep 1: Evaluate $f(4) = 3(4)^2 + 2 = 48 + 2 = 50$.\nStep 2: Evaluate $f(2) = 3(2)^2 + 2 = 12 + 2 = 14$.\nStep 3: Subtract: $f(4) - f(2) = 50 - 14 = 36$. That is choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($14$): gives just $f(2)$.\n* Choice C ($50$): gives just $f(4)$ and forgets to subtract.\n* Choice D ($64$): adds $f(4) + f(2)$ instead of subtracting.\n\n**Test Day Takeaway:** $f(a) - f(b)$ is two separate evaluations followed by one subtraction — compute each value first, then combine.",
      skills: ["function-evaluation", "function-notation"]
    },
    {
      id: 12,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A rectangle has a length that is $3$ times its width. If the perimeter of the rectangle is $64$, what is its length?",
      choices: [
        // distractor: gives the width instead of the length
        { id: "A", text: "$8$" },
        // distractor: divides the perimeter by 4, treating the figure like a square
        { id: "B", text: "$16$" },
        { id: "C", text: "$24$" },
        // distractor: gives half the perimeter
        { id: "D", text: "$32$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Rectangle from Perimeter and Side Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Let width $= w$, so length $= 3w$. Then perimeter $= 2(3w) + 2w = 8w = 64$, giving $w = 8$ and length $= 24$.\n\n**The Full Solution:**\nStep 1: Let $w$ be the width; the length is $3w$.\nStep 2: Perimeter $= 2(\\text{length}) + 2(\\text{width}) = 2(3w) + 2w = 8w$.\nStep 3: Set $8w = 64$, so $w = 8$ and the length is $3w = 24$. That is choice C.\nStep 4: Check: $2(24) + 2(8) = 48 + 16 = 64$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): gives the width instead of the length.\n* Choice B ($16$): divides the perimeter by $4$, treating the figure like a square.\n* Choice D ($32$): gives half the perimeter (length $+$ width), not the length.\n\n**Test Day Takeaway:** When sides are related by \"twice\" or \"three times,\" let the smaller side be the variable, apply the perimeter constraint, then answer the quantity actually asked for.",
      skills: ["perimeter", "geometry"]
    },
    {
      id: 13,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "At a print shop, a large poster print costs $\\$40$. After a $15\\%$ price increase, what is the new price, in dollars?",
      correctAnswer: "46",
      explanation: "**SAT Pattern: Percent Increase**\n\n**The correct answer is $46$.**\n\n**The Fast Way (~10s):** A $15\\%$ increase means you pay $115\\%$ of the old price: $40 \\times 1.15 = 46$ dollars.\n\n**The Full Solution:**\nStep 1: A percent increase multiplies by $(1 + r)$. Here $r = 0.15$, so the factor is $1.15$.\nStep 2: New price $= 40 \\times 1.15 = 46$ dollars.\n\nAlternative: the increase amount is $0.15 \\times 40 = 6$, so the new price is $40 + 6 = 46$.\n\n**Common Mistakes:** Adding $15$ to $40$ as if $15\\%$ meant $\\$15$, landing on $55$; treating it as a discount and computing $40 \\times 0.85 = 34$; reporting just the $\\$6$ increase instead of the new price.\n\n**Test Day Takeaway:** For a percent increase, multiply by $(1 + r)$; for a percent decrease, multiply by $(1 - r)$, where $r$ is the percent in decimal form.",
      skills: ["percent-change", "percents"]
    },
    {
      id: 14,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "In the triangle shown, what is the value of $x$?",
      diagram: {
        type: "triangleWithAngles",
        params: {
          angleLabels: ["42°", "x°", "76°"]
        }
      },
      choices: [
        { id: "A", text: "$62$" },
        // distractor: the sum of the two given angles, stopping one step early
        { id: "B", text: "$118$" },
        // distractor: subtracts only one given angle from 180
        { id: "C", text: "$138$" },
        // distractor: uses 360 (a quadrilateral's angle sum) instead of 180
        { id: "D", text: "$242$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** The angles sum to $180^\\circ$, so $x = 180 - 42 - 76 = 62$.\n\n**The Full Solution:**\nStep 1: The three interior angles of any triangle add to $180^\\circ$.\nStep 2: $x = 180 - 42 - 76 = 62$, which is choice A.\nStep 3: Check: $42 + 62 + 76 = 180$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($118$): the sum of the two given angles, $42 + 76$, stopping one step early.\n* Choice C ($138$): subtracts only one given angle: $180 - 42$.\n* Choice D ($242$): uses $360^\\circ$ (a quadrilateral's angle sum) instead of $180^\\circ$.\n\n**Test Day Takeaway:** A triangle's angles sum to $180^\\circ$; a quadrilateral's to $360^\\circ$; an $n$-gon's to $180(n-2)$ degrees.",
      skills: ["triangle-angle-sum", "triangles"]
    },
    {
      id: 15,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "If $3x + 2y = 36$ and $y = 3x$, what is the value of $x$?",
      choices: [
        { id: "A", text: "$4$" },
        // distractor: combines the coefficients as 3 + 2 = 5 and divides 36 by 5
        { id: "B", text: "$\\dfrac{36}{5}$" },
        // distractor: reports the value of y instead of x
        { id: "C", text: "$12$" },
        // distractor: reports the right side 36 instead of solving
        { id: "D", text: "$36$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: System by Substitution**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Since $y = 3x$, replace $y$: $3x + 2(3x) = 36 \\Rightarrow 9x = 36 \\Rightarrow x = 4$.\n\n**The Full Solution:**\nStep 1: Substitute $y = 3x$ into $3x + 2y = 36$ to get $3x + 6x = 36$.\nStep 2: Combine: $9x = 36$.\nStep 3: Divide: $x = 4$. Check: $y = 12$ and $3(4) + 2(12) = 12 + 24 = 36$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{36}{5}$): combines the coefficients as $3 + 2 = 5$, forgetting that $2y = 6x$.\n* Choice C ($12$): reports $y = 12$ instead of $x$.\n* Choice D ($36$): reports the right side $36$ instead of solving for $x$.\n\n**Test Day Takeaway:** Substitution: use the simpler equation to replace one variable, multiply through carefully, then combine like terms and solve.",
      skills: ["substitution-method", "systems-of-equations"]
    },
    {
      id: 16,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A polynomial is given by $p(x) = x(x + 4)(x - 7)$. What is $p(7)$?",
      correctAnswer: "0",
      explanation: "**SAT Pattern: Function at a Root**\n\n**The correct answer is $0$.**\n\n**The Fast Way (~3s):** At $x = 7$ the factor $(x - 7)$ becomes $0$, so the whole product is $0$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 7$: $p(7) = 7 \\cdot (7 + 4)(7 - 7)$.\nStep 2: The last factor is $0$, so $p(7) = 7 \\cdot 11 \\cdot 0 = 0$.\n\n**Common Mistakes:** Computing $7 \\cdot 11 = 77$ and forgetting the vanishing factor; accidentally evaluating at $x = -7$, which gives a nonzero value.\n\n**Test Day Takeaway:** Anything times $0$ is $0$. Scan a product for a factor that vanishes before grinding through arithmetic.",
      skills: ["function-evaluation", "polynomial-operations"]
    },
    {
      id: 17,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "A drone survey produced $240$ photos. Of these, $60$ show rooftops and $84$ show streets; the rest show parks. What percent of the photos show parks?",
      choices: [
        // distractor: the percent of rooftop photos, not park photos
        { id: "A", text: "$25\\%$" },
        // distractor: the percent of street photos, not park photos
        { id: "B", text: "$35\\%$" },
        { id: "C", text: "$40\\%$" },
        // distractor: reports the count of park photos (96) as a percent
        { id: "D", text: "$96\\%$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Percent of a Whole — Multi-Step**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Park photos $= 240 - 60 - 84 = 96$, so the percent is $\\frac{96}{240} = 40\\%$.\n\n**The Full Solution:**\nStep 1: Subtract the known categories: $240 - 60 - 84 = 96$ park photos.\nStep 2: Convert to a percent of the total: $\\frac{96}{240} \\times 100 = 40\\%$, which is choice C.\n\nCheck: rooftops $\\frac{60}{240} = 25\\%$, streets $\\frac{84}{240} = 35\\%$, parks $40\\%$; together $25\\% + 35\\% + 40\\% = 100\\%$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($25\\%$): the percent of rooftop photos, not park photos.\n* Choice B ($35\\%$): the percent of street photos, not park photos.\n* Choice D ($96\\%$): reports the count of park photos ($96$) as if it were a percent.\n\n**Test Day Takeaway:** Percent of a whole $= \\frac{\\text{count}}{\\text{total}} \\times 100$. Find the missing count first, then divide by the full total.",
      skills: ["percent-of-value", "percents"]
    },
    {
      id: 18,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "What is the value of $\\sqrt{75} + \\sqrt{27}$? (Simplify the radicals first.)",
      choices: [
        // distractor: stops after simplifying the first radical only
        { id: "A", text: "$5\\sqrt{3}$" },
        // distractor: adds the radicands directly, as if √75 + √27 = √102
        { id: "B", text: "$\\sqrt{102}$" },
        { id: "C", text: "$8\\sqrt{3}$" },
        // distractor: multiplies the coefficients (5 × 3) instead of adding them
        { id: "D", text: "$15\\sqrt{3}$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Simplifying and Adding Radicals**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $\\sqrt{75} = 5\\sqrt{3}$ and $\\sqrt{27} = 3\\sqrt{3}$, so the sum is $5\\sqrt{3} + 3\\sqrt{3} = 8\\sqrt{3}$.\n\n**The Full Solution:**\nStep 1: Factor out perfect squares. $\\sqrt{75} = \\sqrt{25 \\cdot 3} = 5\\sqrt{3}$ and $\\sqrt{27} = \\sqrt{9 \\cdot 3} = 3\\sqrt{3}$.\nStep 2: Both terms now have $\\sqrt{3}$, so add the coefficients: $5\\sqrt{3} + 3\\sqrt{3} = 8\\sqrt{3}$, which is choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A ($5\\sqrt{3}$): gives only the simplified $\\sqrt{75}$, dropping the second term.\n* Choice B ($\\sqrt{102}$): adds the radicands directly, as if $\\sqrt{75} + \\sqrt{27} = \\sqrt{102}$.\n* Choice D ($15\\sqrt{3}$): multiplies the coefficients ($5 \\cdot 3$) instead of adding them.\n\n**Test Day Takeaway:** $\\sqrt{a} + \\sqrt{b} \\neq \\sqrt{a + b}$. Simplify each radical to $k\\sqrt{m}$ form, then add only the coefficients of like radicals.",
      skills: ["radical-expressions", "exponent-rules"]
    },
    {
      id: 19,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "If a savings account earns $3\\%$ simple interest per year and a deposit of $\\$800$ is made, how much interest, in dollars, is earned after $4$ years?",
      correctAnswer: "96",
      explanation: "**SAT Pattern: Simple Interest**\n\n**The correct answer is $96$.**\n\n**The Fast Way (~10s):** $I = P \\cdot r \\cdot t = 800 \\times 0.03 \\times 4 = 96$ dollars.\n\n**The Full Solution:**\nStep 1: Use simple interest $I = Prt$ with $P = 800$, $r = 0.03$, $t = 4$.\nStep 2: $I = 800 \\times 0.03 \\times 4 = 24 \\times 4 = 96$ dollars.\n\nAlternative: $3\\%$ of $\\$800$ is $\\$24$ per year; over $4$ years that is $\\$96$.\n\n**Common Mistakes:** Skipping the percent-to-decimal step and computing $800 \\times 3 \\times 4 = 9600$; reporting the ending balance $\\$896$ instead of the interest; applying a compound-interest formula when simple interest is asked.\n\n**Test Day Takeaway:** Simple interest is $I = Prt$. Convert the percent to a decimal first, and read whether the question wants the interest or the final balance.",
      skills: ["percent-of-value", "percents"]
    },
    {
      id: 20,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "A bin at a batting cage holds $24$ tokens: $9$ bronze, $8$ silver, and $7$ gold. If two tokens are drawn at random WITH REPLACEMENT, what is the probability that both are bronze?",
      choices: [
        // distractor: uses the without-replacement product (9/24)(8/23)
        { id: "A", text: "$\\dfrac{72}{552}$" },
        { id: "B", text: "$\\dfrac{9}{64}$" },
        // distractor: the probability for a single draw, stopping one step early
        { id: "C", text: "$\\dfrac{3}{8}$" },
        // distractor: doubles the bronze count instead of multiplying probabilities
        { id: "D", text: "$\\dfrac{18}{24}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Independent Probability with Replacement**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $P(\\text{bronze}) = \\frac{9}{24} = \\frac{3}{8}$. With replacement: $\\left(\\frac{3}{8}\\right)^2 = \\frac{9}{64}$.\n\n**The Full Solution:**\nStep 1: One draw: $P(\\text{bronze}) = \\frac{9}{24} = \\frac{3}{8}$.\nStep 2: With replacement, the bin resets, so the two draws are independent. Multiply: $\\frac{3}{8} \\cdot \\frac{3}{8} = \\frac{9}{64}$, which is choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{72}{552}$): uses the without-replacement product $\\frac{9}{24} \\cdot \\frac{8}{23}$.\n* Choice C ($\\frac{3}{8}$): the probability for a single draw, stopping one step early.\n* Choice D ($\\frac{18}{24}$): doubles the bronze count instead of multiplying probabilities.\n\n**Test Day Takeaway:** With replacement, draws are independent, so multiply the same probability. Without replacement, the second draw uses adjusted counts.",
      skills: ["probability-basics", "statistics"]
    },
    {
      id: 21,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "If $f(x) = \\dfrac{x + 6}{x - 2}$, what is the value of $f(10)$?",
      choices: [
        // distractor: swaps the operations, computing (10 − 6)/(10 + 2)
        { id: "A", text: "$\\dfrac{1}{3}$" },
        // distractor: the reciprocal of the correct answer, from flipping the fraction
        { id: "B", text: "$\\dfrac{1}{2}$" },
        { id: "C", text: "$2$" },
        // distractor: evaluates only the numerator 10 + 6 and ignores the denominator
        { id: "D", text: "$16$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Function Evaluation with Rational Function**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $f(10) = \\frac{10 + 6}{10 - 2} = \\frac{16}{8} = 2$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 10$ into both numerator and denominator: $f(10) = \\frac{10 + 6}{10 - 2}$.\nStep 2: Simplify: $\\frac{16}{8} = 2$, which is choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{3}$): swaps the operations, computing $\\frac{10 - 6}{10 + 2}$.\n* Choice B ($\\frac{1}{2}$): the reciprocal of the correct answer, from flipping numerator and denominator.\n* Choice D ($16$): evaluates only the numerator $10 + 6$ and ignores the denominator.\n\n**Test Day Takeaway:** For a rational function, substitute into the numerator and denominator separately, then reduce the fraction.",
      skills: ["function-evaluation", "function-notation"]
    },
    {
      id: 22,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "A spinner is divided into $8$ equal sectors numbered $1$ through $8$. The spinner is spun once. What is the probability that the result is a multiple of $3$?",
      correctAnswer: "1/4",
      explanation: "**SAT Pattern: Counting Favorable Outcomes**\n\n**The correct answer is $\\frac{1}{4}$ (or $0.25$).**\n\n**The Fast Way (~5s):** The multiples of $3$ in $\\{1, 2, \\ldots, 8\\}$ are $3$ and $6$, so $P = \\frac{2}{8} = \\frac{1}{4}$.\n\n**The Full Solution:**\nStep 1: Favorable outcomes (multiples of $3$): $3$ and $6$, a count of $2$.\nStep 2: Total outcomes: $1$ through $8$, a count of $8$.\nStep 3: Probability $= \\frac{2}{8} = \\frac{1}{4} = 0.25$.\n\n**Common Mistakes:** Counting $9$ as a multiple of $3$ when the spinner stops at $8$; including $1$ because it divides $3$; using a total other than $8$.\n\n**Test Day Takeaway:** Probability is favorable over total. When the outcomes are few, list the favorable ones explicitly to avoid a miscount.",
      skills: ["probability-basics", "statistics"]
    }
  ]
};

export default practiceTest9M2Easy;
