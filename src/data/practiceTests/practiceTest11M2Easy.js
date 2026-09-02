// Practice Test 11 — Math Module 2 Easy variant (22 questions)
// For students routed to easier path after Module 1 (~<60% correct).
// Distribution: 3E / 13M / 6H. Q1-3 easy openers. Max-score ceiling: ~650.
// Official-calibration recreation (2026-09-01): fresh content authored per
// docs/TEST_RECREATION_SPEC.md against the CB Educator QBank register.
// Slot metadata (id/type/difficulty/band/skills/pattern) frozen. 4 diagram
// items (triangle, bar graph, line graph, right triangle). Numeric MC
// choices sorted ascending. Palette: ropes courses, vending machines,
// camera-equipment rental, seed-drill calibration, hotel linen laundry,
// elevator load limits.

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
      question: "The sum of three consecutive integers is $78$. What is the greatest of the three integers?",
      choices: [
        // distractor: the smallest of the three integers
        { id: "A", text: "$25$" },
        // distractor: the middle integer (the mean)
        { id: "B", text: "$26$" },
        { id: "C", text: "$27$" },
        // distractor: off by one above the answer
        { id: "D", text: "$28$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Consecutive Integers**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Three consecutive integers average to the middle one: $\\frac{78}{3} = 26$. The three are $25, 26, 27$, so the greatest is $27$.\n\n**The Full Solution:**\nStep 1: Call the integers $n$, $n + 1$, and $n + 2$. Their sum is $3n + 3 = 78$.\nStep 2: Subtract $3$: $3n = 75$, so $n = 25$.\nStep 3: The integers are $25, 26, 27$. Check: $25 + 26 + 27 = 78$. $\\checkmark$ The greatest is $27$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($25$): the SMALLEST of the three, not the greatest.\n* Choice B ($26$): the middle integer — dividing by $3$ gives the mean, but the question asks for the greatest.\n* Choice D ($28$): an off-by-one slip when stepping forward from the middle integer.\n\n**Test Day Takeaway:** Consecutive integers center on their mean: divide the sum by the count to get the middle value, then step to the one the question asks for.",
      skills: ["solving-equations"]
    },
    {
      id: 2,
      type: "multiple-choice",
      difficulty: "easy",
      band: 3,
      question: "What is $\\dfrac{2}{5}$ expressed as a decimal?",
      choices: [
        // distractor: misplaces the decimal point one place too far
        { id: "A", text: "$0.04$" },
        // distractor: confuses 2/5 with the quarter conversion 1/4
        { id: "B", text: "$0.25$" },
        { id: "C", text: "$0.4$" },
        // distractor: flips the fraction to 5/2
        { id: "D", text: "$2.5$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Fraction-Decimal Conversion**\n\n**Choice C is correct.**\n\n**The Fast Way (~3s):** $\\frac{2}{5}$ is a known conversion: each fifth is $0.2$, so two fifths is $0.4$.\n\n**The Full Solution:**\nStep 1: A fraction is a division: $\\frac{2}{5} = 2 \\div 5$.\nStep 2: $2 \\div 5 = 0.4$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.04$): slides the decimal one place too far.\n* Choice B ($0.25$): swaps in the conversion for $\\frac{1}{4}$.\n* Choice D ($2.5$): flips the fraction, computing $\\frac{5}{2}$.\n\n**Test Day Takeaway:** Memorize the quarters and fifths: $\\frac{1}{4} = 0.25$, $\\frac{1}{2} = 0.5$, $\\frac{1}{5} = 0.2$, $\\frac{2}{5} = 0.4$.",
      skills: ["percent-decimal-conversion"]
    },
    {
      id: 3,
      type: "multiple-choice",
      difficulty: "easy",
      band: 3,
      question: "In the triangle shown, what is the value of $x$?",
      diagram: {
        type: "triangleWithAngles",
        params: {
          angleLabels: ["35°", "x°", "48°"]
        }
      },
      choices: [
        // distractor: adds the two given angles and stops
        { id: "A", text: "$83$" },
        { id: "B", text: "$97$" },
        // distractor: subtracts only the 48 from 180
        { id: "C", text: "$132$" },
        // distractor: subtracts only the 35 from 180
        { id: "D", text: "$145$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** The three angles sum to $180^\\circ$, so $x = 180 - 35 - 48 = 97$.\n\n**The Full Solution:**\nStep 1: The interior angles of any triangle sum to $180^\\circ$.\nStep 2: $35 + 48 + x = 180$, so $83 + x = 180$.\nStep 3: $x = 97$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($83$): stops after adding the two given angles, forgetting to subtract from $180$.\n* Choice C ($132$): subtracts only the $48$, leaving the $35$ behind.\n* Choice D ($145$): subtracts only the $35$, leaving the $48$ behind.\n\n**Test Day Takeaway:** Triangle angles sum to $180^\\circ$ — subtract BOTH known angles before answering.",
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
      question: "If $f(x) = x^2 - 6x + 3$, what is the value of $f(8)$?",
      choices: [
        // distractor: treats 8^2 as 8 x 2 = 16, giving 16 - 48 + 3
        { id: "A", text: "$-29$" },
        // distractor: subtracts the constant 3 instead of adding it
        { id: "B", text: "$13$" },
        // distractor: drops the constant term entirely — 64 - 48
        { id: "C", text: "$16$" },
        { id: "D", text: "$19$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Function Evaluation with Quadratic**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Substitute $x = 8$: $64 - 48 + 3 = 19$.\n\n**The Full Solution:**\nStep 1: Replace every $x$ with $8$: $f(8) = (8)^2 - 6(8) + 3$.\nStep 2: Evaluate the powers and products: $64 - 48 + 3$.\nStep 3: Combine left to right: $64 - 48 + 3 = 19$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-29$): treats $8^2$ as $8 \\times 2 = 16$, giving $16 - 48 + 3$.\n* Choice B ($13$): subtracts the final $3$ instead of adding it.\n* Choice C ($16$): computes $64 - 48$ but drops the $+3$.\n\n**Test Day Takeaway:** To find $f(a)$, replace every $x$ with $a$ and apply order of operations carefully — squaring means multiplying by itself, not by $2$.",
      skills: ["function-evaluation"]
    },
    {
      id: 5,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "Solve the system of equations.\n\n$y = 3x - 2$\n$y = -2x + 13$",
      choices: [
        // distractor: satisfies only the first equation
        { id: "A", text: "$(1, 1)$" },
        // distractor: satisfies only the second equation
        { id: "B", text: "$(2, 9)$" },
        { id: "C", text: "$(3, 7)$" },
        // distractor: swaps the x- and y-coordinates
        { id: "D", text: "$(7, 3)$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: System by Substitution**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Both equations equal $y$, so set them equal: $3x - 2 = -2x + 13 \\Rightarrow 5x = 15 \\Rightarrow x = 3$, then $y = 3(3) - 2 = 7$, giving $(3, 7)$.\n\n**The Full Solution:**\nStep 1: Since each right side equals $y$, set them equal: $3x - 2 = -2x + 13$.\nStep 2: Add $2x$ to both sides and add $2$: $5x = 15$, so $x = 3$.\nStep 3: Substitute back: $y = 3(3) - 2 = 7$. The solution is $(3, 7)$.\nStep 4: Check the second equation: $-2(3) + 13 = 7$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(1, 1)$): satisfies the first equation only — the second gives $-2 + 13 = 11 \\neq 1$.\n* Choice B ($(2, 9)$): satisfies the second equation only — the first gives $6 - 2 = 4 \\neq 9$.\n* Choice D ($(7, 3)$): swaps the coordinates, writing $(y, x)$ instead of $(x, y)$.\n\n**Test Day Takeaway:** When both equations are solved for $y$, set the right sides equal, solve for $x$, then back-substitute — and verify in BOTH equations.",
      skills: ["substitution-method"]
    },
    {
      id: 6,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "What value of $x$ is the solution to the equation $\\dfrac{3x - 6}{4} = 9$?",
      correctAnswer: "14",
      explanation: "**SAT Pattern: Linear Equation with a Fraction**\n\n**The correct answer is $14$.**\n\n**The Fast Way (~10s):** Multiply both sides by $4$: $3x - 6 = 36$. Then $3x = 42$, so $x = 14$.\n\n**The Full Solution:**\nStep 1: Clear the fraction by multiplying both sides by $4$: $3x - 6 = 36$.\nStep 2: Add $6$: $3x = 42$.\nStep 3: Divide by $3$: $x = 14$.\nStep 4: Check: $\\frac{3(14) - 6}{4} = \\frac{36}{4} = 9$. $\\checkmark$\n\n**Common Mistakes:** Multiplying only the $3x$ by $4$ instead of the whole numerator; dividing $36$ by $3$ before adding the $6$; subtracting $6$ instead of adding when isolating $3x$.\n\n**Test Day Takeaway:** Clear a fraction by multiplying both sides by the denominator, then undo the subtraction before the multiplication.",
      skills: ["solving-equations"]
    },
    {
      id: 7,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "For what value of $x$ is the equation $\\sqrt{x - 3} = 8$ true?",
      choices: [
        // distractor: computes 8 - 3 without squaring
        { id: "A", text: "$5$" },
        // distractor: computes 8 + 3 without squaring
        { id: "B", text: "$11$" },
        // distractor: subtracts 3 from 64 instead of adding
        { id: "C", text: "$61$" },
        { id: "D", text: "$67$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Square Root Equation**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Square both sides: $x - 3 = 64$, so $x = 67$.\n\n**The Full Solution:**\nStep 1: Undo the square root by squaring both sides: $x - 3 = 8^2 = 64$.\nStep 2: Add $3$: $x = 67$.\nStep 3: Check: $\\sqrt{67 - 3} = \\sqrt{64} = 8$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): computes $8 - 3$ without ever squaring.\n* Choice B ($11$): computes $8 + 3$ without ever squaring.\n* Choice C ($61$): squares correctly but then subtracts the $3$ instead of adding it.\n\n**Test Day Takeaway:** To eliminate a square root, square both sides first; then move the constant, and verify in the original equation.",
      skills: ["solving-equations"]
    },
    {
      id: 8,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The graph of a line in the $xy$-plane has slope $-\\dfrac{3}{4}$ and passes through the point $(0, 5)$. Which equation represents the line?",
      choices: [
        // distractor: flips the slope to -4/3
        { id: "A", text: "$y = -\\dfrac{4}{3}x + 5$" },
        { id: "B", text: "$y = -\\dfrac{3}{4}x + 5$" },
        // distractor: treats the intercept 5 as a horizontal shift
        { id: "C", text: "$y = -\\dfrac{3}{4}(x + 5)$" },
        // distractor: drops the negative sign on the slope
        { id: "D", text: "$y = \\dfrac{3}{4}x + 5$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Slope-Intercept Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Slope $-\\frac{3}{4}$ and $y$-intercept $5$ plug straight into $y = mx + b$: $y = -\\frac{3}{4}x + 5$.\n\n**The Full Solution:**\nStep 1: Slope-intercept form is $y = mx + b$.\nStep 2: The point $(0, 5)$ has $x = 0$, so it IS the $y$-intercept: $b = 5$.\nStep 3: With $m = -\\frac{3}{4}$, the line is $y = -\\frac{3}{4}x + 5$.\n\n**Why the wrong answers are tempting:**\n* Choice A: flips the slope to $-\\frac{4}{3}$.\n* Choice C: treats the intercept $5$ as a horizontal shift inside parentheses.\n* Choice D: drops the negative sign from the slope.\n\n**Test Day Takeaway:** A point of the form $(0, b)$ IS the $y$-intercept — drop $m$ and $b$ directly into $y = mx + b$, signs included.",
      skills: ["slope-intercept-form"]
    },
    {
      id: 9,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A vending machine contains $6$ cola bottles, $9$ water bottles, and $5$ juice bottles. If one bottle is dispensed at random, what is the probability that it is NOT a juice bottle?",
      choices: [
        // distractor: gives P(juice), the complement of what was asked
        { id: "A", text: "$\\dfrac{5}{20}$" },
        // distractor: counts only the cola bottles
        { id: "B", text: "$\\dfrac{6}{20}$" },
        // distractor: counts only the water bottles
        { id: "C", text: "$\\dfrac{9}{20}$" },
        { id: "D", text: "$\\dfrac{15}{20}$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Complement Probability**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Total bottles $= 20$; not juice $= 6 + 9 = 15$, so $P(\\text{not juice}) = \\frac{15}{20}$.\n\n**The Full Solution:**\nStep 1: Total $= 6 + 9 + 5 = 20$ bottles.\nStep 2: \"Not juice\" means cola or water: $6 + 9 = 15$.\nStep 3: $P(\\text{not juice}) = \\frac{15}{20}$. Equivalently, $1 - \\frac{5}{20} = \\frac{15}{20}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{5}{20}$): gives $P(\\text{juice})$ — the complement of what was asked.\n* Choice B ($\\frac{6}{20}$): counts only the cola bottles.\n* Choice C ($\\frac{9}{20}$): counts only the water bottles.\n\n**Test Day Takeaway:** $P(\\text{not } A) = 1 - P(A)$. Subtracting the unwanted case is often faster than adding up all the favorable ones.",
      skills: ["probability-basics"]
    },
    {
      id: 10,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "What is the median of the following data set?\n\n$4, 7, 9, 10, 13, 16, 18$",
      choices: [
        { id: "A", text: "$10$" },
        // distractor: gives the mean, 77/7 = 11
        { id: "B", text: "$11$" },
        // distractor: gives the range, 18 - 4
        { id: "C", text: "$14$" },
        // distractor: gives the greatest value
        { id: "D", text: "$18$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Median of a Sorted List**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Seven values, already sorted — the median is the 4th one, $10$.\n\n**The Full Solution:**\nStep 1: The list $4, 7, 9, 10, 13, 16, 18$ is already in order.\nStep 2: With $7$ values, the middle position is the $\\frac{7 + 1}{2} = 4$th term.\nStep 3: The 4th term is $10$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($11$): computes the mean, $\\frac{77}{7} = 11$, not the median.\n* Choice C ($14$): gives the range, $18 - 4$.\n* Choice D ($18$): reports the greatest value rather than the middle one.\n\n**Test Day Takeaway:** For a sorted list of odd length $n$, the median is the term in position $\\frac{n+1}{2}$; for even length, average the two middle terms.",
      skills: ["find-median"]
    },
    {
      id: 11,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A camera tripod is on sale for $\\$102$ after a $15\\%$ discount off its original price. What was the original price of the tripod, in dollars?",
      correctAnswer: "120",
      explanation: "**SAT Pattern: Reverse Percent**\n\n**The correct answer is $120$.**\n\n**The Fast Way (~15s):** A $15\\%$ discount leaves $85\\%$, so $\\$102$ is $85\\%$ of the original: $\\frac{102}{0.85} = 120$.\n\n**The Full Solution:**\nStep 1: Let $x$ be the original price. After a $15\\%$ discount the price is $85\\%$ of $x$: $0.85x = 102$.\nStep 2: Divide both sides by $0.85$: $x = \\frac{102}{0.85} = 120$.\nStep 3: Check: $15\\%$ of $\\$120$ is $\\$18$, so the sale price is $120 - 18 = \\$102$. $\\checkmark$\n\n**Common Mistakes:** Multiplying $102$ by $0.85$ instead of dividing; dividing by $0.15$ instead of $0.85$; adding $15\\%$ of $102$ to get $117.30$.\n\n**Test Day Takeaway:** \"After a $15\\%$ discount\" means the sale price is $85\\%$ of the original — reverse it by dividing by $0.85$, not by $0.15$.",
      skills: ["percent-change", "percent-word-problems"]
    },
    {
      id: 12,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "Which expression is equivalent to $4(3x - 2) - 3(x - 5)$?",
      choices: [
        // distractor: fails to flip the sign when distributing -3 across -5
        { id: "A", text: "$9x - 23$" },
        { id: "B", text: "$9x + 7$" },
        // distractor: distributes the 4 to only the first term inside its parentheses
        { id: "C", text: "$9x + 13$" },
        // distractor: adds the x-terms 12x + 3x instead of subtracting
        { id: "D", text: "$15x + 7$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Distribute and Combine**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Distribute both factors: $12x - 8 - 3x + 15 = 9x + 7$.\n\n**The Full Solution:**\nStep 1: Distribute the $4$: $4(3x - 2) = 12x - 8$.\nStep 2: Distribute the $-3$: $-3(x - 5) = -3x + 15$ — two negatives make the $+15$.\nStep 3: Combine like terms: $(12x - 3x) + (-8 + 15) = 9x + 7$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($9x - 23$): keeps $-15$ instead of $+15$ when distributing $-3$ across $-5$.\n* Choice C ($9x + 13$): distributes the $4$ to the $3x$ but not the $-2$, giving $12x - 2 - 3x + 15$.\n* Choice D ($15x + 7$): adds $12x + 3x$ instead of subtracting.\n\n**Test Day Takeaway:** A negative outside parentheses flips the sign of EVERY term inside: $-3(x - 5) = -3x + 15$.",
      skills: ["distributive-property", "combining-like-terms"]
    },
    {
      id: 13,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The bar graph shows the number of campers who completed each of five ropes courses at a camp in one afternoon. What is the average (arithmetic mean) number of campers per course?",
      diagram: {
        type: "barChart",
        params: {
          data: [
            { label: "Cedar", value: 4 },
            { label: "Maple", value: 8 },
            { label: "Oak", value: 12 },
            { label: "Pine", value: 12 },
            { label: "Spruce", value: 14 }
          ],
          xAxisLabel: "Ropes course",
          yAxisLabel: "Number of campers",
          yMax: 16,
          yStep: 4
        }
      },
      choices: [
        { id: "A", text: "$10$" },
        // distractor: gives the median of the five values
        { id: "B", text: "$12$" },
        // distractor: gives the tallest bar's value (the maximum)
        { id: "C", text: "$14$" },
        // distractor: gives the total without dividing
        { id: "D", text: "$50$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Mean of a Small Data Set**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Add the five values and divide by $5$: $\\dfrac{4 + 8 + 12 + 12 + 14}{5} = \\dfrac{50}{5} = 10$.\n\n**The Full Solution:**\nStep 1: Read the bar heights: $4, 8, 12, 12, 14$.\nStep 2: Sum the counts: $4 + 8 + 12 + 12 + 14 = 50$.\nStep 3: Divide by the number of courses: $\\dfrac{50}{5} = 10$ campers.\n\n**Why the wrong answers are tempting:**\n* Choice B ($12$): gives the median (the middle value when sorted), not the mean.\n* Choice C ($14$): reads the tallest bar instead of averaging.\n* Choice D ($50$): the sum, with the divide-by-$5$ step skipped.\n\n**Test Day Takeaway:** Mean $= \\dfrac{\\text{sum}}{\\text{count}}$. The last step is always dividing by how many values you added.",
      skills: ["calculate-mean"]
    },
    {
      id: 14,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The graph of the linear function $g$ is shown in the $xy$-plane. The graph passes through the points $(-4, 3)$ and $(2, 3)$. What is the slope of the graph of $g$?",
      diagram: {
        type: "linearGraph",
        params: {
          slope: 0, yIntercept: 3,
          xRange: [-6, 6], yRange: [-6, 6],
          xTickInterval: 2, yTickInterval: 2, gridInterval: 1,
          showPoints: [[-4, 3], [2, 3]],
          label: "y = g(x)"
        }
      },
      choices: [
        { id: "A", text: "$0$" },
        // distractor: reports the constant y-value of the line
        { id: "B", text: "$3$" },
        // distractor: reports the run between the marked points, 2 - (-4)
        { id: "C", text: "$6$" },
        // distractor: confuses horizontal with vertical
        { id: "D", text: "$\\text{undefined}$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Slope of a Horizontal Line**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Both marked points have $y = 3$: the graph is horizontal, and every horizontal graph has slope $0$.\n\n**The Full Solution:**\nStep 1: Read the two marked points: $(-4, 3)$ and $(2, 3)$.\nStep 2: Apply the slope formula: $m = \\dfrac{3 - 3}{2 - (-4)} = \\dfrac{0}{6} = 0$.\nStep 3: Interpretation: as $x$ changes, $y$ never changes — a flat, horizontal graph.\n\n**Why the wrong answers are tempting:**\n* Choice B ($3$): reports the constant $y$-value of the graph, not its slope.\n* Choice C ($6$): reports the run between the marked points with no rise divided in.\n* Choice D (undefined): mixes up horizontal and vertical — slope is undefined only when the $x$-coordinates match.\n\n**Test Day Takeaway:** Same $y$-values $\\Rightarrow$ horizontal $\\Rightarrow$ slope $0$. Same $x$-values $\\Rightarrow$ vertical $\\Rightarrow$ slope undefined. Zero and undefined are not the same thing.",
      skills: ["slope-from-points", "slope-intercept-form"]
    },
    {
      id: 15,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "In the right triangle shown, one leg has length $5$ and the hypotenuse has length $13$. What is the length of the other leg?",
      diagram: {
        type: "rightTriangle",
        params: {
          sideLabels: ["5", "", "13"],
          rightAngleVertex: 1
        }
      },
      correctAnswer: "12",
      explanation: "**SAT Pattern: Pythagorean Theorem (5-12-13)**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~5s):** Recognize $5$ and $13$ as the leg and hypotenuse of a $5$-$12$-$13$ triple. The missing leg is $12$.\n\n**The Full Solution:**\nStep 1: Apply $a^2 + b^2 = c^2$ with leg $5$ and hypotenuse $13$: $5^2 + b^2 = 13^2$.\nStep 2: $25 + b^2 = 169 \\Rightarrow b^2 = 144$.\nStep 3: $b = \\sqrt{144} = 12$. Check: $5^2 + 12^2 = 25 + 144 = 169 = 13^2$. $\\checkmark$\n\n**Common Mistakes:** Computing $\\sqrt{13^2 + 5^2} = \\sqrt{194}$ (treating the hypotenuse as a leg and adding); adding the lengths $5 + 13 = 18$; reporting $b^2 = 144$ without the final square root.\n\n**Test Day Takeaway:** Memorize the common Pythagorean triples — $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$ — and spot them before reaching for the formula.",
      skills: ["pythagorean-theorem", "triangles"]
    },
    {
      id: 16,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "If $\\dfrac{2}{3}$ of a number is $24$, what is $\\dfrac{1}{6}$ of the same number?",
      choices: [
        // distractor: divides 24 by 6 as if 24 were the whole number
        { id: "A", text: "$4$" },
        { id: "B", text: "$6$" },
        // distractor: finds 1/3 of the number instead of 1/6
        { id: "C", text: "$12$" },
        // distractor: solves for the number itself and stops
        { id: "D", text: "$36$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Fraction of an Unknown with a Shifted Ask**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $\\frac{2}{3} = \\frac{4}{6}$, so four sixths make $24$ and one sixth is $\\frac{24}{4} = 6$ — no need to find the number at all.\n\n**The Full Solution:**\nStep 1: Let $n$ be the number: $\\dfrac{2}{3}n = 24$.\nStep 2: Multiply both sides by $\\dfrac{3}{2}$: $n = 24 \\cdot \\dfrac{3}{2} = 36$.\nStep 3: The question asks for $\\dfrac{1}{6}$ of the number: $\\dfrac{36}{6} = 6$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): divides $24$ by $6$, treating $24$ as the whole number.\n* Choice C ($12$): finds $\\dfrac{1}{3}$ of the number instead of $\\dfrac{1}{6}$.\n* Choice D ($36$): solves for the number itself and stops — but the question asks for a sixth of it.\n\n**Test Day Takeaway:** Re-read what the question actually asks — the SAT loves putting the natural stopping point ($n = 36$) among the choices.",
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
      question: "A cover-crop seed mixture requires ryegrass seed and clover seed in a ratio of $3$ to $5$ by mass. How many kilograms of ryegrass seed are needed to make $48$ kilograms of the mixture?",
      choices: [
        // distractor: the mass of one part, not the 3-part ryegrass share
        { id: "A", text: "$6$" },
        // distractor: divides the total by 3 instead of using parts
        { id: "B", text: "$16$" },
        { id: "C", text: "$18$" },
        // distractor: computes the clover share (5 parts) instead
        { id: "D", text: "$30$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Ratios with a Total**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Total parts $= 3 + 5 = 8$. One part $= \\dfrac{48}{8} = 6$ kilograms. Ryegrass is $3$ parts: $3 \\cdot 6 = 18$ kilograms.\n\n**The Full Solution:**\nStep 1: The ratio $3 : 5$ gives $3 + 5 = 8$ total parts, so ryegrass is $\\dfrac{3}{8}$ of the mixture.\nStep 2: Ryegrass $= \\dfrac{3}{8} \\cdot 48 = 18$ kilograms.\nStep 3: Check: ryegrass $18$ + clover $30 = 48$, and $18 : 30 = 3 : 5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): the value of one part, not the $3$-part ryegrass amount.\n* Choice B ($16$): divides $48$ by the ratio number $3$ instead of by the total parts.\n* Choice D ($30$): solves for the clover ($5$ parts) instead of the ryegrass.\n\n**Test Day Takeaway:** For a ratio $a : b$ with total $T$, each part $= \\dfrac{T}{a + b}$; multiply by the part count you want.",
      skills: ["rate-conversion", "percent-word-problems"]
    },
    {
      id: 18,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "If $4x + 3y = 50$ and $x = 8$, what is the value of $y$?",
      choices: [
        { id: "A", text: "$6$" },
        // distractor: reuses the given x-value as the answer
        { id: "B", text: "$8$" },
        // distractor: divides 50 by 4 without substituting
        { id: "C", text: "$12.5$" },
        // distractor: stops at 3y = 18 without dividing
        { id: "D", text: "$18$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Substitution into a Two-Variable Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Put $x = 8$ in: $4(8) + 3y = 50 \\Rightarrow 32 + 3y = 50 \\Rightarrow 3y = 18 \\Rightarrow y = 6$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 8$: $4(8) + 3y = 50$.\nStep 2: $32 + 3y = 50 \\Rightarrow 3y = 18$.\nStep 3: $y = \\dfrac{18}{3} = 6$. Check: $4(8) + 3(6) = 32 + 18 = 50$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($8$): reuses the given $x = 8$ as the answer.\n* Choice C ($12.5$): divides $50$ by $4$ without ever substituting.\n* Choice D ($18$): stops at $3y = 18$ instead of dividing by $3$.\n\n**Test Day Takeaway:** Substitute, then isolate the asked variable — don't quit at the line before the last division.",
      skills: ["substitution-method", "solving-equations"]
    },
    {
      id: 19,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "The function $h$ models the height, in feet, of a water balloon $t$ seconds after it is launched upward: $h(t) = -16t^2 + 48t + 4$. What is the height, in feet, of the balloon $2$ seconds after launch?",
      correctAnswer: "36",
      explanation: "**SAT Pattern: Function Evaluation in Context**\n\n**The correct answer is $36$.**\n\n**The Fast Way (~15s):** $h(2) = -16(4) + 48(2) + 4 = -64 + 96 + 4 = 36$ feet.\n\n**The Full Solution:**\nStep 1: Substitute $t = 2$: $h(2) = -16(2)^2 + 48(2) + 4$.\nStep 2: $(2)^2 = 4$, so $h(2) = -64 + 96 + 4$.\nStep 3: $= 36$ feet.\n\n**Common Mistakes:** A sign slip on the $-16t^2$ term, giving $64 + 96 + 4 = 164$; squaring after multiplying, computing $-(16 \\cdot 2)^2$; dropping the $+4$ constant and reporting $32$.\n\n**Test Day Takeaway:** Evaluate the squared term first, keep its negative coefficient, then add the pieces — order of operations decides everything here.",
      skills: ["function-evaluation"]
    },
    {
      id: 20,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "A hotel service elevator has a posted load limit of $840$ kilograms. A loaded linen cart has a mass equal to $35\\%$ of the load limit. What is the mass of the cart, in kilograms?",
      choices: [
        // distractor: uses 25% (a quarter) instead of 35%
        { id: "A", text: "$210$" },
        { id: "B", text: "$294$" },
        // distractor: uses the complement 65% instead of 35%
        { id: "C", text: "$546$" },
        // distractor: subtracts 35 from 840 instead of taking a percent
        { id: "D", text: "$805$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Percent of a Whole**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $35\\%$ of $840 = 0.35 \\cdot 840 = 294$ kilograms.\n\n**The Full Solution:**\nStep 1: Convert the percent: $35\\% = 0.35$.\nStep 2: Multiply by the whole: $0.35 \\cdot 840 = 294$ kilograms.\nStep 3: Check: $10\\%$ of $840$ is $84$, so $35\\% = 3.5 \\times 84 = 294$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($210$): uses $25\\%$ (a quarter of $840$) instead of $35\\%$.\n* Choice C ($546$): uses the complement $65\\%$ — the capacity NOT used by the cart.\n* Choice D ($805$): subtracts the number $35$ from $840$ instead of taking a percent.\n\n**Test Day Takeaway:** \"$P\\%$ of a number\" means multiply by $\\dfrac{P}{100}$. The $10\\%$-anchor trick ($84$, then $\\times 3.5$) is fast and calculator-free.",
      skills: ["percent-of-value"]
    },
    {
      id: 21,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "If $(x - 7)(x + 3) = 0$, what are the solutions to the equation?",
      choices: [
        // distractor: multiplies the constants 7 and -3 instead of setting factors to zero
        { id: "A", text: "$x = -21$" },
        // distractor: copies the constants' signs instead of flipping them
        { id: "B", text: "$x = -7 \\text{ and } x = 3$" },
        { id: "C", text: "$x = -3 \\text{ and } x = 7$" },
        // distractor: finds only one of the two roots
        { id: "D", text: "$x = 7$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Zero Product Property**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** A product equals $0$ only if a factor is $0$: $x - 7 = 0 \\Rightarrow x = 7$ and $x + 3 = 0 \\Rightarrow x = -3$.\n\n**The Full Solution:**\nStep 1: $(x - 7)(x + 3) = 0$ means $x - 7 = 0$ or $x + 3 = 0$.\nStep 2: Solve each: $x = 7$ or $x = -3$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($x = -21$): multiplies the constants $-7 \\cdot 3$ rather than setting each factor to $0$.\n* Choice B: copies the constants' signs straight from the factors instead of flipping them.\n* Choice D ($x = 7$): finds only one of the two roots.\n\n**Test Day Takeaway:** Set each factor equal to $0$ and flip the sign of its constant: $(x - 7)$ gives $x = 7$, $(x + 3)$ gives $x = -3$.",
      skills: ["finding-roots-factoring"]
    },
    {
      id: 22,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "A vending machine sells granola bars for $\\$2$ each and trail-mix packs for $\\$3$ each. In one day, the machine sold $60$ items in total for $\\$145$. How many trail-mix packs did the machine sell?",
      correctAnswer: "25",
      explanation: "**SAT Pattern: System of Equations from Word Problem**\n\n**The correct answer is $25$.**\n\n**The Fast Way (~30s):** Let $t$ = trail-mix packs, so granola bars $= 60 - t$. Revenue: $3t + 2(60 - t) = 145 \\Rightarrow t + 120 = 145 \\Rightarrow t = 25$.\n\n**The Full Solution:**\nStep 1: Set up two equations with $t$ trail-mix packs and $g$ granola bars: $t + g = 60$ and $3t + 2g = 145$.\nStep 2: Solve the first for $g = 60 - t$ and substitute: $3t + 2(60 - t) = 145$.\nStep 3: $3t + 120 - 2t = 145 \\Rightarrow t = 25$.\nStep 4: Check: $25$ packs + $35$ bars $= 60$ items, revenue $3(25) + 2(35) = 75 + 70 = \\$145$. $\\checkmark$\n\n**Common Mistakes:** Solving for the granola bars ($g = 35$) and reporting that; writing only the revenue equation $3t = 145$; subtracting the prices ($3 - 2 = 1$) but then dividing $145$ by it instead of first removing the $2 \\times 60$ baseline.\n\n**Test Day Takeaway:** Two unknowns need two equations. Solve one for a variable and substitute into the other, then confirm you answered for the quantity asked.",
      skills: ["setting-up-systems", "substitution-method"]
    }
  ]
};

export default practiceTest11M2Easy;
