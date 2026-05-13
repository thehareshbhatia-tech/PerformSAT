// Practice Test 9 — Math Module 2 Easy variant (22 questions)
// For students routed to easier path after Module 1 (~<60% correct).
// Distribution: 3E / 13M / 6H. Q1-3 easy openers. Max-score ceiling: ~650.
// Domain mix: 7 Algebra / 6 Advanced Math / 5 Problem-Solving / 4 Geometry & Trig.

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
      question: "Which of the following is equivalent to $7 + 3x + 2 - x$?",
      choices: [
        // distractor: drops the constant
        { id: "A", text: "$2x$" },
        { id: "B", text: "$2x + 9$" },
        // distractor: adds variables incorrectly
        { id: "C", text: "$4x + 9$" },
        // distractor: subtracts wrong direction
        { id: "D", text: "$-2x + 9$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Combining Like Terms**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Constants: $7 + 2 = 9$. Variables: $3x - x = 2x$. Result: $2x + 9$.\n\n**The Full Solution:**\nGroup like terms (variables with variables, constants with constants):\n$7 + 3x + 2 - x = (3x - x) + (7 + 2) = 2x + 9$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — drops the constants.\n* Choice C: \"wrong operation\" — adds the $x$-coefficients ($3 + 1 = 4$) instead of subtracting.\n* Choice D: \"wrong sign\" — subtracts in the wrong direction.\n\n**Test Day Takeaway:** Combine like terms by collecting all variable terms together and all constants together, then adding/subtracting within each group.",
      skills: ["combining-like-terms", "equivalent-expressions"]
    },
    {
      id: 2,
      type: "fill-in",
      difficulty: "easy",
      band: 2,
      question: "What is $\\dfrac{3}{4} + \\dfrac{1}{2}$? Express your answer as a decimal.",
      correctAnswer: "1.25",
      explanation: "**SAT Pattern: Adding Fractions with Different Denominators**\n\n**The correct answer is $1.25$.**\n\n**The Fast Way (~10s):** Common denominator: $\\dfrac{3}{4} + \\dfrac{2}{4} = \\dfrac{5}{4} = 1.25$.\n\n**The Full Solution:**\nConvert to a common denominator. The LCD of $4$ and $2$ is $4$.\n$\\dfrac{1}{2} = \\dfrac{2}{4}$, so $\\dfrac{3}{4} + \\dfrac{2}{4} = \\dfrac{5}{4} = 1.25$.\n\n**Common Mistakes to Avoid:**\n* Adding numerators and denominators directly: $\\frac{3+1}{4+2} = \\frac{4}{6}$.\n* Forgetting to convert to a common denominator: $3 + 1$ over $4$ or $2$.\n\n**Test Day Takeaway:** To add fractions, find a common denominator FIRST, then add numerators only. Convert mixed/improper fractions to decimals as the last step if needed.",
      skills: ["arithmetic"]
    },
    {
      id: 3,
      type: "multiple-choice",
      difficulty: "easy",
      band: 3,
      question: "If $4y - 1 = 11$, what is the value of $y$?",
      choices: [
        // distractor: divides 11 by 4
        { id: "A", text: "$\\dfrac{11}{4}$" },
        // distractor: stops one step early — gives 4y
        { id: "B", text: "$12$" },
        { id: "C", text: "$3$" },
        // distractor: subtracts instead of adds
        { id: "D", text: "$\\dfrac{5}{2}$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Add $1$, then divide by $4$: $4y = 12 \\Rightarrow y = 3$.\n\n**The Full Solution:**\n$4y - 1 = 11$\n$4y = 12$\n$y = 3$.\n\nVerification: $4(3) - 1 = 11$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — divides $11$ by $4$ without adding $1$.\n* Choice B: \"stops one step early\" — gives $4y = 12$ rather than $y = 3$.\n* Choice D: \"wrong sign\" — subtracts $1$ from $11$ then divides by $4$.\n\n**Test Day Takeaway:** Linear equations: undo addition/subtraction first, then undo multiplication/division. Reverse the order of operations.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 4,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "What is the perimeter of a square with side length $7$ centimeters?",
      choices: [
        // distractor: gives the area
        { id: "A", text: "$49$ cm" },
        { id: "B", text: "$28$ cm" },
        // distractor: doubles instead of quadruples
        { id: "C", text: "$14$ cm" },
        // distractor: takes 3 sides
        { id: "D", text: "$21$ cm" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Perimeter of a Square**\n\n**Choice B is correct.**\n\n**The Fast Way (~3s):** Perimeter $= 4 \\cdot \\text{side} = 4 \\cdot 7 = 28$ cm.\n\n**The Full Solution:**\nA square has $4$ equal sides. Perimeter is the total distance around:\n$P = 4s = 4 \\cdot 7 = 28$ cm.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — gives the area $s^2 = 49$.\n* Choice C: \"stops one step early\" — uses only $2$ sides.\n* Choice D: \"stops one step early\" — uses only $3$ sides.\n\n**Test Day Takeaway:** Square: perimeter $= 4s$, area $= s^2$. A square's symmetry makes both formulas one-step.",
      skills: ["perimeter", "geometry"]
    },
    {
      id: 5,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "Maya buys $3$ notebooks at $\\$2.50$ each and $2$ pens at $\\$1.25$ each. What is the total cost, in dollars?",
      choices: [
        // distractor: stops at one item
        { id: "A", text: "$\\$7.50$" },
        // distractor: gives one item only
        { id: "B", text: "$\\$2.50$" },
        { id: "C", text: "$\\$10.00$" },
        // distractor: adds quantities and prices
        { id: "D", text: "$\\$8.75$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Multi-Item Total Cost**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Notebooks: $3 \\cdot 2.50 = 7.50$. Pens: $2 \\cdot 1.25 = 2.50$. Total: $7.50 + 2.50 = 10.00$.\n\n**The Full Solution:**\nTotal cost $= (\\text{quantity}_1)(\\text{price}_1) + (\\text{quantity}_2)(\\text{price}_2)$\n$= 3(2.50) + 2(1.25)$\n$= 7.50 + 2.50$\n$= 10.00$ dollars.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives only the notebook cost.\n* Choice B: \"stops one step early\" — gives only the price per notebook.\n* Choice D: \"wrong operation\" — adds quantity to price improperly.\n\n**Test Day Takeaway:** For multi-item totals, multiply each (quantity)(price) separately, then sum.",
      skills: ["word-problem-to-equation", "linear-functions"]
    },
    {
      id: 6,
      type: "fill-in",
      difficulty: "medium",
      band: 4,
      question: "A circle has a diameter of $14$. What is the circumference of the circle, in terms of $\\pi$? (Provide just the integer coefficient of $\\pi$.)",
      correctAnswer: "14",
      explanation: "**SAT Pattern: Circumference from Diameter**\n\n**The correct answer is $14$.**\n\n**The Fast Way (~5s):** $C = \\pi d = 14\\pi$. Coefficient: $14$.\n\n**The Full Solution:**\nCircumference formula: $C = 2\\pi r = \\pi d$.\nGiven $d = 14$: $C = \\pi \\cdot 14 = 14\\pi$.\n\nThe integer coefficient of $\\pi$ is $14$.\n\n**Common Mistakes to Avoid:**\n* Using $C = 2\\pi r$ with $r = 14$ (treating diameter as radius): $C = 28\\pi$.\n* Using $\\pi r^2$ (area formula): $A = \\pi (7)^2 = 49\\pi$.\n* Reporting $7\\pi$ — uses radius without doubling.\n\n**Test Day Takeaway:** $C = 2\\pi r = \\pi d$. If the DIAMETER is given, use $C = \\pi d$ directly to skip the conversion.",
      skills: ["circumference", "circles"]
    },
    {
      id: 7,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "What is the value of $x$ in the equation $\\dfrac{2x}{5} = 6$?",
      choices: [
        // distractor: divides 6 by 2 alone
        { id: "A", text: "$3$" },
        { id: "B", text: "$15$" },
        // distractor: stops one step early
        { id: "C", text: "$30$" },
        // distractor: applies inverse op
        { id: "D", text: "$\\dfrac{6}{5}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Linear Equation with Fractional Coefficient**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Multiply both sides by $\\dfrac{5}{2}$: $x = 6 \\cdot \\dfrac{5}{2} = 15$.\n\n**The Full Solution:**\n$\\dfrac{2x}{5} = 6$\nMultiply both sides by $5$: $2x = 30$.\nDivide by $2$: $x = 15$.\n\nVerification: $\\dfrac{2(15)}{5} = \\dfrac{30}{5} = 6$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — divides $6$ by $2$, ignoring the denominator $5$.\n* Choice C: \"stops one step early\" — gives $2x = 30$ rather than $x = 15$.\n* Choice D: \"applies the inverse operation\" — divides $6$ by $5$.\n\n**Test Day Takeaway:** To solve $\\dfrac{ax}{b} = c$, multiply both sides by $\\dfrac{b}{a}$ (the reciprocal of the coefficient). Or clear the fraction by multiplying by $b$ first, then divide by $a$.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 8,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "If $x^2 = 64$ and $x < 0$, what is the value of $x$?",
      choices: [
        // distractor: gives positive root
        { id: "A", text: "$8$" },
        { id: "B", text: "$-8$" },
        // distractor: divides 64 by 2
        { id: "C", text: "$-32$" },
        // distractor: doesn't square root
        { id: "D", text: "$-64$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Square Root with Sign Restriction**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $x^2 = 64 \\Rightarrow x = \\pm 8$. Since $x < 0$, $x = -8$.\n\n**The Full Solution:**\nTaking the square root of both sides:\n$x = \\pm \\sqrt{64} = \\pm 8$.\n\nThe constraint $x < 0$ selects the negative root: $x = -8$.\n\nVerification: $(-8)^2 = 64$ \\checkmark and $-8 < 0$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong sign\" — gives the positive root, ignoring the constraint.\n* Choice C: \"applies the inverse operation\" — divides $64$ by $2$.\n* Choice D: \"stops one step early\" — gives $-64$ without taking the square root.\n\n**Test Day Takeaway:** $x^2 = k$ has TWO solutions: $x = \\pm \\sqrt{k}$. Constraints (like $x > 0$ or $x < 0$) tell you which root to choose.",
      skills: ["finding-roots-factoring", "quadratic-equations"]
    },
    {
      id: 9,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The scatterplot below shows weight ($x$, in pounds) versus height ($y$, in inches) for a group of dogs. The data show a positive linear association. Which of the following is a reasonable interpretation?",
      diagram: { type: "scatterplot", params: {
        points: [[8,9],[12,11],[20,13],[25,14],[35,16],[45,18],[55,20],[65,21],[80,24],[95,26]],
        xMin: 0, xMax: 110, yMin: 0, yMax: 30,
        xGridStep: 10, yGridStep: 2, xLabelStep: 20, yLabelStep: 5,
        xLabel: "Weight (lb)", yLabel: "Height (in)",
        bestFitLine: { slope: 0.2, intercept: 8 },
      } },
      choices: [
        // distractor: confuses correlation with causation
        { id: "A", text: "Heavier dogs are taller because of their weight." },
        { id: "B", text: "On average, dogs that weigh more tend to be taller." },
        // distractor: confuses positive with negative
        { id: "C", text: "Dogs that weigh more tend to be shorter on average." },
        // distractor: claims perfect relationship
        { id: "D", text: "Every dog that weighs more is taller than every dog that weighs less." }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Interpreting Scatterplot Association**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** \"Positive linear association\" means as one variable increases, the other tends to increase. The phrasing \"on average\" captures this trend.\n\n**The Full Solution:**\nA POSITIVE association means $x$ and $y$ tend to increase together.\nA LINEAR association means the trend is approximately a straight line.\n\nAssociation $\\neq$ causation, and a trend doesn't mean every individual fits the pattern. \"On average\" is the right hedge.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — confuses correlation with causation.\n* Choice C: \"wrong sign\" — describes a NEGATIVE association.\n* Choice D: \"wrong base\" — overstates a trend as a perfect relationship.\n\n**Test Day Takeaway:** Scatterplot interpretation language: \"positive\" = increase together; \"negative\" = one increases while the other decreases. ALWAYS use words like \"tends to\" or \"on average\" — never claim every individual fits.",
      skills: ["scatterplots", "statistics"]
    },
    {
      id: 10,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A ramp is in the shape of a right triangle. The horizontal base is $24$ inches and the vertical height is $10$ inches. What is the length, in inches, of the ramp's surface (the hypotenuse)?",
      correctAnswer: "26",
      explanation: "**SAT Pattern: Pythagorean Theorem (5-12-13 Family)**\n\n**The correct answer is $26$.**\n\n**The Fast Way (~10s):** $24$-$10$-? is $2 \\times$ the $5$-$12$-$13$ triple, scaled by $2$. So hypotenuse $= 2 \\cdot 13 = 26$.\n\n**The Full Solution:**\nBy Pythagoras: $c^2 = a^2 + b^2 = 24^2 + 10^2 = 576 + 100 = 676$.\n$c = \\sqrt{676} = 26$ inches.\n\nNote: $24 = 12 \\cdot 2$ and $10 = 5 \\cdot 2$, so this is the $5$-$12$-$13$ triple scaled by $2$, giving hypotenuse $13 \\cdot 2 = 26$.\n\n**Common Mistakes to Avoid:**\n* Adding without squaring: $24 + 10 = 34$.\n* Computing $\\sqrt{676}$ incorrectly.\n* Subtracting instead of adding the squares.\n\n**Test Day Takeaway:** Recognize Pythagorean triples and their multiples: $5$-$12$-$13$, $10$-$24$-$26$, $15$-$36$-$39$, etc. Spotting the pattern beats squaring and adding.",
      skills: ["pythagorean-theorem", "right-triangles"]
    },
    {
      id: 11,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "If $f(x) = 2x^2 - 1$, what is the value of $f(3) - f(1)$?",
      choices: [
        // distractor: gives only f(3)
        { id: "A", text: "$17$" },
        { id: "B", text: "$16$" },
        // distractor: only f(1)
        { id: "C", text: "$1$" },
        // distractor: adds f(3) + f(1)
        { id: "D", text: "$18$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Function Difference**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $f(3) = 2(9) - 1 = 17$. $f(1) = 2(1) - 1 = 1$. Difference: $17 - 1 = 16$.\n\n**The Full Solution:**\nCompute each value separately:\n* $f(3) = 2(3)^2 - 1 = 2(9) - 1 = 18 - 1 = 17$.\n* $f(1) = 2(1)^2 - 1 = 2 - 1 = 1$.\n\n$f(3) - f(1) = 17 - 1 = 16$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives just $f(3)$.\n* Choice C: \"stops one step early\" — gives just $f(1)$.\n* Choice D: \"wrong sign\" — adds instead of subtracts.\n\n**Test Day Takeaway:** $f(a) - f(b)$ is computed as TWO separate evaluations, then subtracted. Don't try to simplify symbolically unless asked.",
      skills: ["function-evaluation", "function-notation"]
    },
    {
      id: 12,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A rectangle has length twice its width. If the perimeter is $36$, what is the width?",
      choices: [
        // distractor: gives length
        { id: "A", text: "$12$" },
        { id: "B", text: "$6$" },
        // distractor: divides perimeter by 4
        { id: "C", text: "$9$" },
        // distractor: divides by 2
        { id: "D", text: "$18$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Rectangle from Perimeter and Side Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Let width $= w$. Length $= 2w$. Perimeter $= 2w + 2(2w) = 6w = 36$. So $w = 6$.\n\n**The Full Solution:**\nLet $w$ = width. Then length $= 2w$.\nPerimeter $= 2(\\text{length}) + 2(\\text{width}) = 2(2w) + 2w = 6w$.\n$6w = 36 \\Rightarrow w = 6$.\nLength $= 2(6) = 12$.\n\nVerification: $2(12) + 2(6) = 24 + 12 = 36$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives the length instead of the width.\n* Choice C: \"applies the inverse operation\" — divides perimeter by $4$ (would be a square's side).\n* Choice D: \"stops one step early\" — gives half the perimeter.\n\n**Test Day Takeaway:** When sides are related (\"twice\", \"three times\"), let the SMALLER quantity be the variable. Express other sides in terms of it. Then use the perimeter or area constraint.",
      skills: ["perimeter", "geometry"]
    },
    {
      id: 13,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A pizzeria sells pizzas at $\\$12$ each. After a $25\\%$ price increase, what is the new price, in dollars?",
      correctAnswer: "15",
      explanation: "**SAT Pattern: Percent Increase**\n\n**The correct answer is $15$.**\n\n**The Fast Way (~10s):** New $= $ old $\\cdot 1.25 = 12 \\cdot 1.25 = 15$.\n\n**The Full Solution:**\nPercent increase: pay $(100 + 25)\\% = 125\\%$ of original.\nNew price $= 1.25 \\cdot 12 = 15$ dollars.\n\nAlternative: increase amount $= 0.25 \\cdot 12 = 3$. New price $= 12 + 3 = 15$.\n\n**Common Mistakes to Avoid:**\n* Adding $25$ to $12$ (treating $25\\%$ as $25$ dollars): $37$.\n* Subtracting (treating it as a discount): $12 \\cdot 0.75 = 9$.\n* Reporting just the increase amount: $3$.\n\n**Test Day Takeaway:** Percent increase: multiply by $(1 + r)$ where $r$ is the decimal form of the percent. Percent decrease: multiply by $(1 - r)$.",
      skills: ["percent-change", "percents"]
    },
    {
      id: 14,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "Two angles in a triangle measure $50^{\\circ}$ and $70^{\\circ}$. What is the measure of the third angle?",
      choices: [
        // distractor: subtracts wrong way — gives 70 - 50 + 40 etc.
        { id: "A", text: "$40^{\\circ}$" },
        { id: "B", text: "$60^{\\circ}$" },
        // distractor: gives a remainder of 50 + 70 directly
        { id: "C", text: "$120^{\\circ}$" },
        // distractor: uses 360 instead of 180
        { id: "D", text: "$240^{\\circ}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $180 - 50 - 70 = 60^{\\circ}$.\n\n**The Full Solution:**\nThe three angles of any triangle sum to $180^{\\circ}$.\nThird angle $= 180 - 50 - 70 = 60^{\\circ}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — averaging or subtracting incorrectly.\n* Choice C: \"stops one step early\" — gives the SUM of the two known angles.\n* Choice D: \"wrong base\" — uses $360^{\\circ}$ (sum of angles in a quadrilateral) instead of $180^{\\circ}$.\n\n**Test Day Takeaway:** Triangle angle sum: $180^{\\circ}$. Quadrilateral angle sum: $360^{\\circ}$. $n$-gon: $180(n-2)$.",
      skills: ["triangle-angle-sum", "triangles"]
    },
    {
      id: 15,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "If $5x + 2y = 21$ and $y = x$, what is the value of $x$?",
      choices: [
        // distractor: divides 21 by 5
        { id: "A", text: "$\\dfrac{21}{5}$" },
        { id: "B", text: "$3$" },
        // distractor: divides 21 by 2
        { id: "C", text: "$\\dfrac{21}{2}$" },
        // distractor: stops one step early — gives 7x
        { id: "D", text: "$21$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: System by Substitution**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Substitute $y = x$: $5x + 2x = 21 \\Rightarrow 7x = 21 \\Rightarrow x = 3$.\n\n**The Full Solution:**\nSubstitute $y = x$ into the first equation:\n$5x + 2(x) = 21$\n$7x = 21$\n$x = 3$.\n\nVerification: $y = 3$ and $5(3) + 2(3) = 15 + 6 = 21$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — divides $21$ by $5$ ignoring the substitution.\n* Choice C: \"applies the inverse operation\" — divides $21$ by $2$.\n* Choice D: \"stops one step early\" — gives $7x$ as the answer instead of $x$.\n\n**Test Day Takeaway:** Substitution: replace one variable using the simpler equation, then solve for the remaining variable.",
      skills: ["substitution-method", "systems-of-equations"]
    },
    {
      id: 16,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A polynomial is given by $p(x) = x(x - 3)(x + 5)$. What is $p(0)$?",
      correctAnswer: "0",
      explanation: "**SAT Pattern: Function at a Root**\n\n**The correct answer is $0$.**\n\n**The Fast Way (~3s):** $p(0) = 0 \\cdot (\\text{anything}) = 0$.\n\n**The Full Solution:**\n$p(0) = 0 \\cdot (0 - 3)(0 + 5) = 0 \\cdot (-3)(5) = 0$.\n\nThe factor $x$ becomes $0$ when $x = 0$, making the entire product $0$.\n\n**Common Mistakes to Avoid:**\n* Computing $(0 - 3)(0 + 5) = -15$ and forgetting the leading $x$ factor.\n* Substituting $x = 1$ instead.\n\n**Test Day Takeaway:** Anything multiplied by $0$ is $0$. Look for the easy zero before doing arithmetic.",
      skills: ["function-evaluation", "polynomial-operations"]
    },
    {
      id: 17,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "A bookstore has $200$ books in stock. Of these, $60$ are fiction and $80$ are non-fiction; the rest are reference books. What percent of the books are reference books?",
      choices: [
        // distractor: forgets to divide by total
        { id: "A", text: "$60\\%$" },
        { id: "B", text: "$30\\%$" },
        // distractor: uses fiction count
        { id: "C", text: "$40\\%$" },
        // distractor: subtracts instead of computing percent
        { id: "D", text: "$20\\%$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Percent of a Whole — Multi-Step**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Reference $= 200 - 60 - 80 = 60$. Percent $= \\dfrac{60}{200} = 30\\%$.\n\n**The Full Solution:**\nNumber of reference books: $200 - 60 - 80 = 60$.\nPercent reference $= \\dfrac{60}{200} \\cdot 100 = 30\\%$.\n\nVerification: $30\\% + 30\\% (\\text{fiction}) + 40\\% (\\text{non-fiction}) = 100\\%$. ($60/200 = 30\\%$, $80/200 = 40\\%$.) \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives the count of reference books, not the percent.\n* Choice C: \"wrong base\" — gives the percent of non-fiction.\n* Choice D: \"wrong base\" — uses the difference $80 - 60 = 20$ as a percent.\n\n**Test Day Takeaway:** Percent of total $= \\dfrac{\\text{count}}{\\text{total}} \\cdot 100$. Always identify the correct numerator (the desired group) and denominator (the whole).",
      skills: ["percent-of-value", "percents"]
    },
    {
      id: 18,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "What is the value of $\\sqrt{50} + \\sqrt{8}$? (Simplify the radicals first.)",
      choices: [
        // distractor: adds inside the radical
        { id: "A", text: "$\\sqrt{58}$" },
        { id: "B", text: "$7\\sqrt{2}$" },
        // distractor: stops at one term
        { id: "C", text: "$5\\sqrt{2}$" },
        // distractor: multiplies coefficients
        { id: "D", text: "$10\\sqrt{2}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Simplifying and Adding Radicals**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $\\sqrt{50} = 5\\sqrt{2}$, $\\sqrt{8} = 2\\sqrt{2}$. Sum: $5\\sqrt{2} + 2\\sqrt{2} = 7\\sqrt{2}$.\n\n**The Full Solution:**\nSimplify each radical by factoring out perfect squares:\n* $\\sqrt{50} = \\sqrt{25 \\cdot 2} = 5\\sqrt{2}$\n* $\\sqrt{8} = \\sqrt{4 \\cdot 2} = 2\\sqrt{2}$\n\nAdd like radicals (treat $\\sqrt{2}$ like a variable):\n$5\\sqrt{2} + 2\\sqrt{2} = 7\\sqrt{2}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong operation\" — adds the radicands directly: $\\sqrt{50 + 8} = \\sqrt{58}$.\n* Choice C: \"stops one step early\" — gives $\\sqrt{50}$ simplified alone.\n* Choice D: \"wrong operation\" — multiplies coefficients ($5 \\cdot 2 = 10$) instead of adding.\n\n**Test Day Takeaway:** $\\sqrt{a} + \\sqrt{b} \\neq \\sqrt{a + b}$. Simplify each radical to the form $k\\sqrt{m}$, then combine LIKE radicals (same expression under the root).",
      skills: ["radical-expressions", "exponent-rules"]
    },
    {
      id: 19,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "If a savings account earns $4\\%$ simple interest per year and a deposit of $\\$500$ is made, how much interest, in dollars, is earned after $3$ years?",
      correctAnswer: "60",
      explanation: "**SAT Pattern: Simple Interest**\n\n**The correct answer is $60$.**\n\n**The Fast Way (~10s):** Interest $= P \\cdot r \\cdot t = 500 \\cdot 0.04 \\cdot 3 = 60$.\n\n**The Full Solution:**\nSimple interest formula: $I = P \\cdot r \\cdot t$, where $P$ is the principal, $r$ is the rate (as a decimal), and $t$ is the time in years.\n$I = 500 \\cdot 0.04 \\cdot 3 = 20 \\cdot 3 = 60$ dollars.\n\nAlternatively: $4\\%$ of $500 = 20$ per year. Over $3$ years: $20 \\cdot 3 = 60$.\n\n**Common Mistakes to Avoid:**\n* Forgetting to convert $4\\%$ to $0.04$: $500 \\cdot 4 \\cdot 3 = 6000$.\n* Reporting the total balance $500 + 60 = 560$ instead of the interest alone.\n* Using compound interest formulas when simple is asked.\n\n**Test Day Takeaway:** Simple interest: $I = Prt$. Convert percent to decimal first. Read the question carefully — sometimes interest is asked, sometimes the final balance.",
      skills: ["percent-of-value", "percents"]
    },
    {
      id: 20,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "A box contains $30$ balls: $12$ red, $10$ blue, and $8$ green. If two balls are drawn at random WITH REPLACEMENT, what is the probability that both are red?",
      choices: [
        // distractor: adds probabilities
        { id: "A", text: "$\\dfrac{24}{30}$" },
        { id: "B", text: "$\\dfrac{4}{25}$" },
        // distractor: uses one draw only
        { id: "C", text: "$\\dfrac{2}{5}$" },
        // distractor: uses without-replacement formula
        { id: "D", text: "$\\dfrac{132}{870}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Independent Probability with Replacement**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** P(red) $= \\dfrac{12}{30} = \\dfrac{2}{5}$. With replacement: P(red, red) $= \\left(\\dfrac{2}{5}\\right)^2 = \\dfrac{4}{25}$.\n\n**The Full Solution:**\nP(red on one draw) $= \\dfrac{12}{30} = \\dfrac{2}{5}$.\n\nWith replacement, each draw is independent (the box returns to its original state):\nP(both red) $= \\dfrac{2}{5} \\cdot \\dfrac{2}{5} = \\dfrac{4}{25}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong operation\" — adds probabilities or doubles the count.\n* Choice C: \"stops one step early\" — gives a single draw's probability.\n* Choice D: \"applies the inverse operation\" — uses without-replacement formula: $\\frac{12}{30} \\cdot \\frac{11}{29}$.\n\n**Test Day Takeaway:** WITH replacement: events are independent, so multiply the same probability. WITHOUT replacement: the second draw uses adjusted counts (one ball removed).",
      skills: ["probability-basics", "statistics"]
    },
    {
      id: 21,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "If $f(x) = \\dfrac{x + 4}{x - 2}$, what is the value of $f(6)$?",
      choices: [
        // distractor: subtracts instead of adds
        { id: "A", text: "$\\dfrac{2}{4}$" },
        { id: "B", text: "$\\dfrac{5}{2}$" },
        // distractor: switches numerator and denominator
        { id: "C", text: "$\\dfrac{2}{5}$" },
        // distractor: stops one step early
        { id: "D", text: "$10$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Function Evaluation with Rational Function**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $f(6) = \\dfrac{6 + 4}{6 - 2} = \\dfrac{10}{4} = \\dfrac{5}{2}$.\n\n**The Full Solution:**\nSubstitute $x = 6$:\n$f(6) = \\dfrac{6 + 4}{6 - 2} = \\dfrac{10}{4} = \\dfrac{5}{2}$.\n\nReduce: $\\dfrac{10}{4} = \\dfrac{5}{2} = 2.5$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong sign\" — switches numerator subtraction vs. addition.\n* Choice C: \"applies the inverse operation\" — flips numerator and denominator.\n* Choice D: \"stops one step early\" — gives just the numerator $6 + 4 = 10$.\n\n**Test Day Takeaway:** For rational functions, substitute carefully into BOTH numerator and denominator, then reduce the result.",
      skills: ["function-evaluation", "function-notation"]
    },
    {
      id: 22,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "A spinner is divided into $5$ equal sectors numbered $1$ through $5$. The spinner is spun once. What is the probability that the result is an even number?",
      correctAnswer: "2/5",
      explanation: "**SAT Pattern: Counting Favorable Outcomes**\n\n**The correct answer is $\\dfrac{2}{5}$ (or $0.4$).**\n\n**The Fast Way (~5s):** Even numbers in $\\{1, 2, 3, 4, 5\\}$: $\\{2, 4\\}$, so $2$ favorable. P $= \\dfrac{2}{5}$.\n\n**The Full Solution:**\nFavorable outcomes (even): $2, 4$. Count $= 2$.\nTotal outcomes: $1, 2, 3, 4, 5$. Count $= 5$.\nProbability $= \\dfrac{2}{5} = 0.4$.\n\n**Common Mistakes to Avoid:**\n* Counting $0$ as even: there is no $0$ in this list.\n* Including odd numbers in the favorable count.\n* Using the wrong total (e.g., $4$ if you forget one number).\n\n**Test Day Takeaway:** Favorable / total. List the favorable outcomes explicitly when there are few enough — it prevents miscount.",
      skills: ["probability-basics", "statistics"]
    }
  ]
};

export default practiceTest9M2Easy;
