// Practice Test 12 — Math Module 2 Easy variant (22 questions)
// For students routed to easier path after Module 1 (~<60% correct).
// Distribution: 3E / 13M / 6H. Q1-3 easy openers. Max-score ceiling: ~650.
// Official-calibration recreation (2026-09-01): all content re-authored
// fresh against the CB register (docs/TEST_RECREATION_SPEC.md); slot
// metadata and SAT Pattern headers frozen. Figure density lifted to 4
// diagram items (Q9 barChart, Q12 rightTriangle, Q16 scatterplot, Q21 table).
// Scenario families: airport shuttle vans, minigolf, escape rooms, riverboat.

export const practiceTest12M2Easy = {
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
      question: "What is $20 - 2 \\cdot 6$?",
      choices: [
        { id: "A", text: "$8$" },
        // distractor: adds the product instead of subtracting it (20 + 12)
        { id: "B", text: "$32$" },
        // distractor: subtracts first — (20 - 2) * 6
        { id: "C", text: "$108$" },
        // distractor: multiplies all three numbers together
        { id: "D", text: "$240$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Order of Operations (PEMDAS)**\n\n**Choice A is correct.**\n\n**The Fast Way (~3s):** Multiplication comes before subtraction, so $2 \\cdot 6 = 12$, then $20 - 12 = 8$.\n\n**The Full Solution:**\nStep 1: Under PEMDAS, do the multiplication first: $2 \\cdot 6 = 12$.\nStep 2: Then subtract: $20 - 12 = 8$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($32$): adds the product instead of subtracting, computing $20 + 12$.\n* Choice C ($108$): subtracts first, computing $(20 - 2) \\cdot 6 = 108$.\n* Choice D ($240$): multiplies all three numbers, $20 \\cdot 2 \\cdot 6$.\n\n**Test Day Takeaway:** Multiplication and division outrank addition and subtraction. Resolve every $\\times$ and $\\div$ before any $+$ or $-$.",
      skills: ["solving-equations"]
    },
    {
      id: 2,
      type: "multiple-choice",
      difficulty: "easy",
      band: 3,
      question: "Which expression is equivalent to $6(y + 4)$?",
      choices: [
        // distractor: distributes to the first term only
        { id: "A", text: "$6y + 4$" },
        { id: "B", text: "$6y + 24$" },
        // distractor: distributes to the second term only, dropping the 6 on y
        { id: "C", text: "$y + 24$" },
        // distractor: multiplies the distributed terms instead of adding them
        { id: "D", text: "$6y \\cdot 24$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Distributive Property**\n\n**Choice B is correct.**\n\n**The Fast Way (~3s):** Multiply the $6$ by each term inside: $6 \\cdot y + 6 \\cdot 4 = 6y + 24$.\n\n**The Full Solution:**\nStep 1: The distributive property says $a(b + c) = ab + ac$.\nStep 2: $6(y + 4) = 6y + 24$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($6y + 4$): distributed to $y$ only, leaving the $4$ untouched.\n* Choice C ($y + 24$): distributed to $4$ only, dropping the $6$ on $y$.\n* Choice D ($6y \\cdot 24$): multiplied the two distributed terms instead of keeping the sum.\n\n**Test Day Takeaway:** Distribute to EVERY term inside the parentheses; the operation between the terms stays the same.",
      skills: ["distributive-property"]
    },
    {
      id: 3,
      type: "multiple-choice",
      difficulty: "easy",
      band: 3,
      question: "What is the value of $\\sqrt{81}$?",
      choices: [
        // distractor: takes the square root twice (sqrt of 9)
        { id: "A", text: "$3$" },
        { id: "B", text: "$9$" },
        // distractor: doubles the root instead of reporting it
        { id: "C", text: "$18$" },
        // distractor: squares 81 instead of square-rooting it
        { id: "D", text: "$6561$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Perfect Square Root**\n\n**Choice B is correct.**\n\n**The Fast Way (~3s):** Ask what squares to $81$: since $9^2 = 81$, $\\sqrt{81} = 9$.\n\n**The Full Solution:**\nStep 1: $\\sqrt{81}$ asks for the nonnegative number whose square is $81$.\nStep 2: $9 \\cdot 9 = 81$, so $\\sqrt{81} = 9$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): takes the square root twice, computing $\\sqrt{9} = 3$.\n* Choice C ($18$): doubles the root, treating $\\sqrt{81}$ as $2 \\cdot 9$.\n* Choice D ($6561$): squares $81$ instead of taking the root ($81^2$).\n\n**Test Day Takeaway:** A square root undoes squaring. Memorize the perfect squares through $144$ so these are instant.",
      skills: ["solving-equations"]
    },
    // ============================================================
    // Q4-Q16: Medium core (band 4-5)
    // ============================================================
    {
      id: 4,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "If $3(x + 4) = 27$, what is the value of $x$?",
      choices: [
        { id: "A", text: "$5$" },
        // distractor: subtracts the 4 from the right side before dividing — (27 - 4)/3
        { id: "B", text: "$\\dfrac{23}{3}$" },
        // distractor: stops at x + 4 = 9 and reports 9
        { id: "C", text: "$9$" },
        // distractor: adds 4 after dividing instead of subtracting
        { id: "D", text: "$13$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Linear Equation with Distribution**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Divide both sides by $3$: $x + 4 = 9$, so $x = 5$.\n\n**The Full Solution:**\nStep 1: $3(x + 4) = 27$. Divide both sides by $3$: $x + 4 = 9$.\nStep 2: Subtract $4$: $x = 5$.\nStep 3: Check: $3(5 + 4) = 3(9) = 27$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{23}{3}$): subtracts the $4$ from $27$ BEFORE dividing — but the $4$ is inside the parentheses.\n* Choice C ($9$): stops at $x + 4 = 9$ and reports that value.\n* Choice D ($13$): adds $4$ after dividing instead of subtracting, computing $9 + 4$.\n\n**Test Day Takeaway:** When the variable sits inside multiplied parentheses, divide both sides by that factor first — then undo what is inside.",
      skills: ["solving-equations"]
    },
    {
      id: 5,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "An airport shuttle van travels at an average speed of $24$ miles per hour. How many miles does the van travel in $2.5$ hours?",
      choices: [
        // distractor: divides the speed by the time (24 / 2.5)
        { id: "A", text: "$9.6$" },
        // distractor: adds the numbers instead of multiplying
        { id: "B", text: "$26.5$" },
        // distractor: uses 2 hours and drops the half hour
        { id: "C", text: "$48$" },
        { id: "D", text: "$60$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Distance = Rate * Time**\n\n**Choice D is correct.**\n\n**The Fast Way (~5s):** Distance $=$ rate $\\times$ time $= 24 \\times 2.5 = 60$ miles.\n\n**The Full Solution:**\nStep 1: Constant speed means distance $=$ rate $\\times$ time.\nStep 2: $24 \\times 2.5 = 24 \\times 2 + 24 \\times 0.5 = 48 + 12 = 60$ miles.\n\n**Why the wrong answers are tempting:**\n* Choice A ($9.6$): divides $24 \\div 2.5$ instead of multiplying.\n* Choice B ($26.5$): adds $24 + 2.5$ instead of multiplying.\n* Choice C ($48$): uses only $2$ hours, dropping the half hour.\n\n**Test Day Takeaway:** Distance $=$ rate $\\times$ time. Multiply, and keep the full time value, including any fractional hour.",
      skills: ["rate-conversion"]
    },
    {
      id: 6,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "If $5x - 9 = 3x + 5$, what is the value of $x$?",
      correctAnswer: "7",
      explanation: "**SAT Pattern: Linear Equation with Variables on Both Sides**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~10s):** Subtract $3x$ from both sides: $2x - 9 = 5$, so $2x = 14$ and $x = 7$.\n\n**The Full Solution:**\nStep 1: $5x - 9 = 3x + 5$. Subtract $3x$: $2x - 9 = 5$.\nStep 2: Add $9$: $2x = 14$.\nStep 3: Divide by $2$: $x = 7$. Check: $5(7) - 9 = 26$ and $3(7) + 5 = 26$. $\\checkmark$\n\n**Common Mistakes:** Subtracting $5x$ instead of $3x$ and mishandling the resulting $-2x$; adding the $9$ to the wrong side and landing on $x = 2$.\n\n**Test Day Takeaway:** Move all variable terms to one side and all constants to the other, then verify by substituting into the original equation.",
      skills: ["solving-equations"]
    },
    {
      id: 7,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The function $h$ is defined by $h(x) = 6x + 5$. For what value of $x$ does $h(x) = 41$?",
      choices: [
        // distractor: divides 41 by 6 first, then subtracts 5
        { id: "A", text: "$\\dfrac{11}{6}$" },
        { id: "B", text: "$6$" },
        // distractor: adds 5 to 41 before dividing
        { id: "C", text: "$\\dfrac{23}{3}$" },
        // distractor: stops at 6x = 36 without dividing
        { id: "D", text: "$36$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Solving for Input from Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Set the rule equal to the output: $6x + 5 = 41 \\Rightarrow 6x = 36 \\Rightarrow x = 6$.\n\n**The Full Solution:**\nStep 1: $h(x) = 41$ means $6x + 5 = 41$.\nStep 2: Subtract $5$: $6x = 36$.\nStep 3: Divide by $6$: $x = 6$. Check: $h(6) = 6(6) + 5 = 41$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{11}{6}$): divides $41$ by $6$ first, then subtracts $5$ — the undo steps in the wrong order.\n* Choice C ($\\frac{23}{3}$): adds $5$ to $41$ instead of subtracting, computing $\\frac{46}{6}$.\n* Choice D ($36$): stops at $6x = 36$ without dividing.\n\n**Test Day Takeaway:** To find the input for a given output, undo the operations in reverse order: subtract the constant first, then divide by the coefficient.",
      skills: ["function-evaluation", "solving-equations"]
    },
    {
      id: 8,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A circle has a radius of $8$. What is the circumference of the circle?",
      choices: [
        // distractor: computes 2r = 16 but drops the pi
        { id: "A", text: "$16$" },
        // distractor: uses pi * r and forgets the factor of 2
        { id: "B", text: "$8\\pi$" },
        { id: "C", text: "$16\\pi$" },
        // distractor: uses the area formula pi r^2 instead
        { id: "D", text: "$64\\pi$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Circumference of a Circle**\n\n**Choice C is correct.**\n\n**The Fast Way (~3s):** $C = 2\\pi r = 2\\pi(8) = 16\\pi$.\n\n**The Full Solution:**\nStep 1: Circumference is $C = 2\\pi r$.\nStep 2: With $r = 8$: $C = 2\\pi(8) = 16\\pi$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($16$): computes $2r = 16$ but drops the $\\pi$.\n* Choice B ($8\\pi$): uses $\\pi r$ and forgets the factor of $2$.\n* Choice D ($64\\pi$): uses the area formula $\\pi r^2 = \\pi(8)^2$ instead of circumference.\n\n**Test Day Takeaway:** Circumference is $2\\pi r$ (a length); area is $\\pi r^2$ (a region). Check which one the question wants.",
      skills: ["circumference"]
    },
    {
      id: 9,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The bar graph shows the number of rounds played on each of the $4$ courses at a minigolf center one afternoon. What is the average (arithmetic mean) number of rounds played per course?",
      diagram: { type: "barChart", params: {
        data: [
          { label: "1", value: 16 },
          { label: "2", value: 40 },
          { label: "3", value: 28 },
          { label: "4", value: 24 }
        ],
        xAxisLabel: "Course",
        yAxisLabel: "Number of rounds",
        yMax: 40,
        yStep: 4
      } },
      choices: [
        // distractor: gives the range (40 - 16) instead of the mean
        { id: "A", text: "$24$" },
        // distractor: gives the median of the four values
        { id: "B", text: "$26$" },
        { id: "C", text: "$27$" },
        // distractor: reports the total without dividing by the count
        { id: "D", text: "$108$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Average of a Small Data Set**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Read the bars: $16, 40, 28, 24$. Mean $= \\frac{16 + 40 + 28 + 24}{4} = \\frac{108}{4} = 27$.\n\n**The Full Solution:**\nStep 1: Read each bar's height: $16$, $40$, $28$, and $24$ rounds.\nStep 2: Add the values: $16 + 40 + 28 + 24 = 108$.\nStep 3: Divide by the count of $4$ courses: $\\frac{108}{4} = 27$ rounds per course.\n\n**Why the wrong answers are tempting:**\n* Choice A ($24$): gives the range, $40 - 16$, instead of the mean.\n* Choice B ($26$): gives the median — the average of the middle values $24$ and $28$.\n* Choice D ($108$): reports the total without dividing by the number of courses.\n\n**Test Day Takeaway:** Average $= \\frac{\\text{sum}}{\\text{count}}$. After summing bar heights, always divide by how many bars there are.",
      skills: ["calculate-mean"]
    },
    {
      id: 10,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "If $|x + 2| = 7$, which of the following could be the value of $x$?",
      choices: [
        // distractor: keeps only the positive case
        { id: "A", text: "$5$ only" },
        // distractor: solves x - 2 = ±7, shifting in the wrong direction
        { id: "B", text: "$9$ or $-5$" },
        { id: "C", text: "$5$ or $-9$" },
        // distractor: reports ±7 without ever undoing the +2
        { id: "D", text: "$7$ or $-7$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Split into two cases: $x + 2 = 7$ gives $x = 5$, and $x + 2 = -7$ gives $x = -9$.\n\n**The Full Solution:**\nStep 1: $|x + 2| = 7$ means $x + 2 = 7$ or $x + 2 = -7$.\nStep 2: Case 1: $x = 5$. Case 2: $x = -9$.\nStep 3: Check: $|5 + 2| = 7$ and $|-9 + 2| = |-7| = 7$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$ only): keeps only the positive case, missing $x = -9$.\n* Choice B ($9$ or $-5$): solves $x - 2 = \\pm 7$, shifting in the wrong direction.\n* Choice D ($7$ or $-7$): reports $\\pm 7$ without undoing the $+2$ at all.\n\n**Test Day Takeaway:** $|f(x)| = c$ with $c > 0$ splits into $f(x) = c$ and $f(x) = -c$. Solve both branches, then verify each.",
      skills: ["solving-equations"]
    },
    {
      id: 11,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The graph of the line $y = \\dfrac{3}{4}x - 6$ crosses the $x$-axis at what value of $x$?",
      correctAnswer: "8",
      explanation: "**SAT Pattern: Finding the X-Intercept**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~10s):** The $x$-intercept is where $y = 0$: $\\frac{3}{4}x - 6 = 0 \\Rightarrow \\frac{3}{4}x = 6 \\Rightarrow x = 8$.\n\n**The Full Solution:**\nStep 1: A line crosses the $x$-axis where $y = 0$. Set $\\frac{3}{4}x - 6 = 0$.\nStep 2: Add $6$: $\\frac{3}{4}x = 6$.\nStep 3: Multiply by $\\frac{4}{3}$: $x = 8$. Check: $\\frac{3}{4}(8) - 6 = 0$. $\\checkmark$\n\n**Common Mistakes:** Setting $x = 0$ instead of $y = 0$ (that gives the $y$-intercept, $-6$); multiplying by $\\frac{3}{4}$ instead of its reciprocal and getting $4.5$.\n\n**Test Day Takeaway:** For the $x$-intercept set $y = 0$; for the $y$-intercept set $x = 0$. They are opposite substitutions.",
      skills: ["slope-intercept-form", "solving-equations"]
    },
    {
      id: 12,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "In the right triangle shown, the two legs have lengths $9$ and $12$. What is the perimeter of the triangle?",
      diagram: {
        type: "rightTriangle",
        params: {
          sideLabels: ["9", "12", ""],
          rightAngleVertex: 1
        }
      },
      choices: [
        // distractor: reports just the hypotenuse
        { id: "A", text: "$15$" },
        // distractor: adds only the two legs, forgetting the hypotenuse
        { id: "B", text: "$21$" },
        { id: "C", text: "$36$" },
        // distractor: computes the area (1/2 * 9 * 12) instead of the perimeter
        { id: "D", text: "$54$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Perimeter of a Right Triangle (3-4-5)**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Legs $9$ and $12$ are $3 \\times (3$-$4$-$5)$, so the hypotenuse is $15$ and the perimeter is $9 + 12 + 15 = 36$.\n\n**The Full Solution:**\nStep 1: Find the hypotenuse: $c = \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15$.\nStep 2: Perimeter is the sum of all three sides: $9 + 12 + 15 = 36$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($15$): reports just the hypotenuse.\n* Choice B ($21$): adds only the two legs, $9 + 12$, forgetting the hypotenuse.\n* Choice D ($54$): computes the area $\\frac{1}{2}(9)(12)$ instead of the perimeter.\n\n**Test Day Takeaway:** Perimeter sums all three sides. Spot scaled $3$-$4$-$5$ triples ($9$-$12$-$15$) instantly so the hypotenuse costs no time.",
      skills: ["pythagorean-theorem", "triangles"]
    },
    {
      id: 13,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "Of the $250$ groups that visited an escape-room venue last month, $130$ booked the mystery room and the rest booked the adventure room. What percent of the groups booked the adventure room?",
      choices: [
        { id: "A", text: "$48\\%$" },
        // distractor: assumes an even split instead of computing from the counts
        { id: "B", text: "$50\\%$" },
        // distractor: gives the mystery-room percent instead
        { id: "C", text: "$52\\%$" },
        // distractor: reports the raw adventure count mislabeled as a percent
        { id: "D", text: "$120\\%$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Percent from Counts**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The rest booked adventure: $250 - 130 = 120$. Then $\\frac{120}{250} = 0.48 = 48\\%$.\n\n**The Full Solution:**\nStep 1: Find the adventure count: $250 - 130 = 120$ groups.\nStep 2: Divide by the whole: $\\frac{120}{250} = 0.48$.\nStep 3: Convert to a percent: $48\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($50\\%$): assumes an even split instead of using the actual counts.\n* Choice C ($52\\%$): the mystery-room percent, $\\frac{130}{250}$ — the question asks about adventure.\n* Choice D ($120\\%$): reports the raw count $120$ mislabeled as a percent.\n\n**Test Day Takeaway:** Percent of a part $= \\frac{\\text{part}}{\\text{whole}}$. Read carefully WHICH group is asked for — here it is the leftover after the named group.",
      skills: ["percent-of-value", "percent-word-problems"]
    },
    {
      id: 14,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "If $\\dfrac{a}{b} = 7$ and $b = 6$, what is the value of $a$?",
      choices: [
        // distractor: subtracts 6 from 7 instead of multiplying
        { id: "A", text: "$1$" },
        // distractor: divides 7 by 6 instead of multiplying
        { id: "B", text: "$\\dfrac{7}{6}$" },
        // distractor: adds 6 to 7 instead of multiplying
        { id: "C", text: "$13$" },
        { id: "D", text: "$42$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Solving a Simple Proportion**\n\n**Choice D is correct.**\n\n**The Fast Way (~5s):** $\\frac{a}{6} = 7 \\Rightarrow a = 7 \\cdot 6 = 42$.\n\n**The Full Solution:**\nStep 1: Substitute $b = 6$ into $\\frac{a}{b} = 7$, giving $\\frac{a}{6} = 7$.\nStep 2: Multiply both sides by $6$: $a = 42$.\nStep 3: Check: $\\frac{42}{6} = 7$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($1$): subtracts $6$ from $7$ instead of multiplying.\n* Choice B ($\\frac{7}{6}$): divides by $6$ instead of multiplying by it.\n* Choice C ($13$): adds $7 + 6$ instead of multiplying.\n\n**Test Day Takeaway:** $\\frac{a}{b} = c \\Rightarrow a = bc$. Clear the denominator by multiplying both sides by it.",
      skills: ["solving-equations"]
    },
    {
      id: 15,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A right triangle has an angle $\\theta$ where $\\tan \\theta = \\dfrac{5}{12}$. What is the value of $\\sin \\theta$?",
      correctAnswer: "5/13",
      explanation: "**SAT Pattern: Building Triangle from Tangent**\n\n**The correct answer is $\\frac{5}{13}$.**\n\n**The Fast Way (~15s):** $\\tan \\theta = \\frac{\\text{opp}}{\\text{adj}} = \\frac{5}{12}$ is a $5$-$12$-$13$ triangle, so $\\sin \\theta = \\frac{5}{13}$.\n\n**The Full Solution:**\nStep 1: $\\tan \\theta = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{5}{12}$, so take opposite $= 5$ and adjacent $= 12$.\nStep 2: Find the hypotenuse: $\\sqrt{5^2 + 12^2} = \\sqrt{169} = 13$.\nStep 3: $\\sin \\theta = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{5}{13}$.\n\n**Common Mistakes:** Reporting $\\frac{5}{12}$ (that is $\\tan \\theta$, not $\\sin \\theta$); reporting $\\frac{12}{13}$ (that is $\\cos \\theta$); skipping the hypotenuse step entirely.\n\n**Test Day Takeaway:** Given one trig ratio, sketch the right triangle, fill in the missing side with the Pythagorean theorem, then read off the ratio you need.",
      skills: ["soh-cah-toa"]
    },
    {
      id: 16,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The scatterplot below shows the relationship between the length $x$, in miles, of a riverboat cruise and its scheduled duration $y$, in minutes, for $10$ cruises. The line of best fit has equation $y = 6x + 15$. According to the line, what is the predicted duration, in minutes, of a $12$-mile cruise?",
      diagram: { type: "scatterplot", params: {
        points: [[2,26],[3,35],[4,41],[5,44],[6,49],[7,60],[8,62],[9,70],[10,73],[13,90]],
        xMin: 0, xMax: 14, yMin: 0, yMax: 100,
        xGridStep: 1, xLabelStep: 2, yGridStep: 10, yLabelStep: 20,
        xLabel: "Cruise length (miles)", yLabel: "Duration (minutes)",
        bestFitLine: { slope: 6, intercept: 15 },
      } },
      choices: [
        // distractor: adds the numbers 6 + 12 + 15 instead of following the equation
        { id: "A", text: "$33$" },
        // distractor: computes 6(12) but drops the intercept
        { id: "B", text: "$72$" },
        { id: "C", text: "$87$" },
        // distractor: substitutes x = 15 (the intercept) instead of x = 12
        { id: "D", text: "$105$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Line of Best Fit Prediction**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Substitute $x = 12$: $y = 6(12) + 15 = 72 + 15 = 87$.\n\n**The Full Solution:**\nStep 1: The line of best fit gives the predicted duration for any cruise length, so plug in $x = 12$.\nStep 2: $y = 6(12) + 15 = 72 + 15 = 87$ minutes.\n\n**Why the wrong answers are tempting:**\n* Choice A ($33$): adds the numbers $6 + 12 + 15$ instead of following the equation.\n* Choice B ($72$): computes $6 \\times 12$ but forgets to add the intercept $15$.\n* Choice D ($105$): substitutes $x = 15$, confusing the intercept with the input.\n\n**Test Day Takeaway:** \"Predicted\" means use the line's EQUATION: substitute the given $x$, multiply by the slope, then add the intercept.",
      skills: ["function-evaluation", "slope-intercept-form"]
    },
    // ============================================================
    // Q17-Q22: Medium-hard ceiling (band 6-7)
    // ============================================================
    {
      id: 17,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "A rectangular shipping crate has a length of $12$ feet, a width of $8$ feet, and a height of $6$ feet. What is the volume of the crate, in cubic feet?",
      choices: [
        // distractor: adds the three dimensions instead of multiplying
        { id: "A", text: "$26$" },
        // distractor: stops at length * width and forgets the height
        { id: "B", text: "$96$" },
        // distractor: computes the total surface area 2(96 + 72 + 48)
        { id: "C", text: "$432$" },
        { id: "D", text: "$576$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Volume of a Rectangular Prism**\n\n**Choice D is correct.**\n\n**The Fast Way (~5s):** $V = 12 \\cdot 8 \\cdot 6 = 576$ cubic feet.\n\n**The Full Solution:**\nStep 1: A crate is a rectangular prism, so $V = \\ell \\cdot w \\cdot h$.\nStep 2: $V = 12 \\cdot 8 \\cdot 6 = 96 \\cdot 6 = 576$ cubic feet.\n\n**Why the wrong answers are tempting:**\n* Choice A ($26$): adds the dimensions $12 + 8 + 6$ instead of multiplying.\n* Choice B ($96$): stops at $\\ell \\cdot w = 12 \\cdot 8$ and forgets the height.\n* Choice C ($432$): computes the total surface area $2(96 + 72 + 48)$ instead of the volume.\n\n**Test Day Takeaway:** Volume of a rectangular prism is $\\ell \\cdot w \\cdot h$ — the product of all three dimensions, never a sum and never an area.",
      skills: ["volume-prism"]
    },
    {
      id: 18,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "A packaging machine was purchased for $\\$30{,}000$. Each year, the machine loses $20\\%$ of its value from the previous year. What is the value of the machine, in dollars, after $2$ years?",
      correctAnswer: "19200",
      explanation: "**SAT Pattern: Exponential Decay**\n\n**The correct answer is $19200$.**\n\n**The Fast Way (~20s):** Losing $20\\%$ leaves $80\\%$, so multiply by $0.80$ each year: $30{,}000 \\cdot (0.80)^2 = 30{,}000 \\cdot 0.64 = 19{,}200$.\n\n**The Full Solution:**\nStep 1: Losing $20\\%$ keeps $80\\%$ of the value, so the yearly factor is $0.80$.\nStep 2: After $1$ year: $30{,}000 \\cdot 0.80 = 24{,}000$.\nStep 3: After $2$ years: $24{,}000 \\cdot 0.80 = 19{,}200$.\n\n**Common Mistakes:** Applying the loss only once and stopping at $24{,}000$; treating two years as a flat $40\\%$ loss, which gives $18{,}000$; subtracting $20\\%$ of the ORIGINAL price twice — the second year's loss is $20\\%$ of the smaller current value.\n\n**Test Day Takeaway:** Percent decay compounds: multiply by $(1 - r)$ once per period. Two years of $20\\%$ loss is $(0.80)^2 = 0.64$, not a $40\\%$ cut.",
      skills: ["exponential-growth-decay", "successive-percent-change"]
    },
    {
      id: 19,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "If $x^2 = 121$, what are all possible values of $x$?",
      choices: [
        // distractor: keeps only the positive root
        { id: "A", text: "$x = 11$" },
        { id: "B", text: "$x = 11$ or $x = -11$" },
        // distractor: keeps only the negative root — the mirror-image omission
        { id: "C", text: "$x = -11$" },
        // distractor: divides 121 by 2 instead of taking a square root
        { id: "D", text: "$x = 60.5$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Square-Root Equation with Both Roots**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $x^2 = 121 \\Rightarrow x = \\pm\\sqrt{121} = \\pm 11$.\n\n**The Full Solution:**\nStep 1: Take the square root of both sides, keeping both signs: $x = \\pm\\sqrt{121}$.\nStep 2: $\\sqrt{121} = 11$, so $x = 11$ or $x = -11$.\nStep 3: Check: $11^2 = 121$ $\\checkmark$ and $(-11)^2 = 121$ $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($x = 11$): the positive root only — misses $-11$.\n* Choice C ($x = -11$): the negative root only — the mirror image of choice A's omission.\n* Choice D ($x = 60.5$): divides $121$ by $2$ instead of taking a square root.\n\n**Test Day Takeaway:** Solving $x^2 = c$ gives BOTH $\\sqrt{c}$ and $-\\sqrt{c}$. Include both roots unless the context rules one out.",
      skills: ["finding-roots-factoring"]
    },
    {
      id: 20,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "The amount of money $A$, in dollars, in a savings account after $t$ years is given by $A = 800(1.05)^t$. What was the initial amount in the account?",
      choices: [
        // distractor: reports the growth factor instead of the starting amount
        { id: "A", text: "$\\$1.05$" },
        { id: "B", text: "$\\$800$" },
        // distractor: adds the 5 from 5% to the coefficient
        { id: "C", text: "$\\$805$" },
        // distractor: computes the value after 1 year, not the start
        { id: "D", text: "$\\$840$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Initial Value in Exponential Function**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Initial means $t = 0$: $A = 800(1.05)^0 = 800 \\cdot 1 = 800$.\n\n**The Full Solution:**\nStep 1: \"Initial\" means the value at $t = 0$.\nStep 2: $A = 800(1.05)^0$, and any nonzero base to the power $0$ is $1$.\nStep 3: $A = 800 \\cdot 1 = \\$800$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$1.05$): reports the growth factor, not the starting amount.\n* Choice C ($\\$805$): adds the $5$ from $5\\%$ to the coefficient.\n* Choice D ($\\$840$): computes $800 \\cdot 1.05$, the value after $1$ year.\n\n**Test Day Takeaway:** In $y = a \\cdot b^t$, the coefficient $a$ IS the initial value (at $t = 0$) and $b$ is the per-period growth or decay factor.",
      skills: ["exponential-growth-decay", "exponential-y-intercept"]
    },
    {
      id: 21,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "The table gives two values of $x$ and the corresponding values of $f(x)$ for the linear function $f$. What is the value of $f(0)$?",
      diagram: { type: "table", params: {
        xHeader: "x", yHeader: "f(x)",
        rows: [["3", "5"], ["7", "17"]]
      } },
      choices: [
        { id: "A", text: "$-4$" },
        // distractor: reports the slope instead of f(0)
        { id: "B", text: "$3$" },
        // distractor: sign error solving for the intercept (5 - 9 read as +4)
        { id: "C", text: "$4$" },
        // distractor: averages the two outputs 5 and 17
        { id: "D", text: "$11$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Linear Function from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Slope $= \\frac{17 - 5}{7 - 3} = 3$. From $f(3) = 5$: $5 = 3(3) + b \\Rightarrow b = -4$, so $f(0) = -4$.\n\n**The Full Solution:**\nStep 1: From the table's points $(3, 5)$ and $(7, 17)$: slope $m = \\frac{17 - 5}{7 - 3} = \\frac{12}{4} = 3$.\nStep 2: Write $f(x) = 3x + b$ and use $f(3) = 5$: $5 = 9 + b \\Rightarrow b = -4$.\nStep 3: $f(x) = 3x - 4$, so $f(0) = -4$. Check: $f(7) = 21 - 4 = 17$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($3$): reports the slope rather than $f(0)$.\n* Choice C ($4$): a sign error solving $5 = 9 + b$, reading $b$ as $+4$.\n* Choice D ($11$): averages the two outputs $5$ and $17$ instead of building the line.\n\n**Test Day Takeaway:** $f(0)$ is the $y$-intercept. Get the slope from the two table rows, then plug one row back in to solve for $b$.",
      skills: ["slope-from-points", "function-evaluation", "slope-intercept-form"]
    },
    {
      id: 22,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "A drawer contains $4$ solid-color ties and $9$ striped ties. If one tie is selected at random, what is the probability that it is striped? Express your answer as a fraction in the form $a/b$.",
      correctAnswer: "9/13",
      explanation: "**SAT Pattern: Basic Probability**\n\n**The correct answer is $\\frac{9}{13}$.**\n\n**The Fast Way (~5s):** Total $= 4 + 9 = 13$ ties, so $P(\\text{striped}) = \\frac{9}{13}$.\n\n**The Full Solution:**\nStep 1: Favorable outcomes are the $9$ striped ties.\nStep 2: Total outcomes are all ties: $4 + 9 = 13$.\nStep 3: $P(\\text{striped}) = \\frac{9}{13}$, which does not reduce.\n\n**Common Mistakes:** Writing $\\frac{9}{4}$ (striped over solid instead of striped over total); writing $\\frac{4}{13}$ (the probability of a solid-color tie); using $9$ as the denominator.\n\n**Test Day Takeaway:** Probability $= \\frac{\\text{favorable}}{\\text{total}}$, and the total is ALL outcomes together, not just the other group.",
      skills: ["probability-basics"]
    }
  ]
};

export default practiceTest12M2Easy;
