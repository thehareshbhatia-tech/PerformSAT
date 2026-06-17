// Practice Test 12 — Math Module 2 Easy variant (22 questions)
// For students routed to easier path after Module 1 (~<60% correct).
// Distribution: 3E / 13M / 6H. Q1-3 easy openers. Max-score ceiling: ~650.

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
      question: "What is $7 + 3 \\cdot 4$?",
      choices: [
        // distractor: adds first — (7+3)*4 = 40
        { id: "A", text: "$40$" },
        { id: "B", text: "$19$" },
        // distractor: multiplies all — 7*3*4
        { id: "C", text: "$84$" },
        // distractor: 7 * 3 + 4
        { id: "D", text: "$25$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Order of Operations (PEMDAS)**\n\n**Choice B is correct.**\n\n**The Fast Way (~3s):** Multiplication comes before addition, so $3 \\cdot 4 = 12$, then $7 + 12 = 19$.\n\n**The Full Solution:**\nStep 1: Under PEMDAS, do multiplication first: $3 \\cdot 4 = 12$.\nStep 2: Then add: $7 + 12 = 19$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($40$): added left to right first, $7 + 3 = 10$, then $\\times 4$.\n* Choice C ($84$): multiplied all three together, $7 \\cdot 3 \\cdot 4$.\n* Choice D ($25$): multiplied $7 \\cdot 3 = 21$ first, then added $4$.\n\n**Test Day Takeaway:** Multiplication and division outrank addition and subtraction. Resolve every $\\times$ and $\\div$ before any $+$ or $-$.",
      skills: ["solving-equations"]
    },
    {
      id: 2,
      type: "multiple-choice",
      difficulty: "easy",
      band: 3,
      question: "Which expression is equivalent to $3(x + 5)$?",
      choices: [
        // distractor: distributes to first only
        { id: "A", text: "$3x + 5$" },
        { id: "B", text: "$3x + 15$" },
        // distractor: doesn't distribute at all
        { id: "C", text: "$x + 15$" },
        // distractor: multiplies the variables
        { id: "D", text: "$3x \\cdot 15$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Distributive Property**\n\n**Choice B is correct.**\n\n**The Fast Way (~3s):** Multiply the $3$ by each term inside: $3 \\cdot x + 3 \\cdot 5 = 3x + 15$.\n\n**The Full Solution:**\nStep 1: The distributive property says $a(b + c) = ab + ac$.\nStep 2: $3(x + 5) = 3x + 15$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3x + 5$): distributed to $x$ only, leaving the $5$ untouched.\n* Choice C ($x + 15$): distributed to $5$ only, dropping the $3$ on $x$.\n* Choice D ($3x \\cdot 15$): multiplied the two distributed terms instead of keeping the sum.\n\n**Test Day Takeaway:** Distribute to every term inside the parentheses. The factor outside multiplies each addend, and the operation between them stays the same.",
      skills: ["distributive-property"]
    },
    {
      id: 3,
      type: "multiple-choice",
      difficulty: "easy",
      band: 3,
      question: "What is the value of $\\sqrt{49}$?",
      choices: [
        { id: "A", text: "$7$" },
        // distractor: divides by 2
        { id: "B", text: "$24.5$" },
        // distractor: 49 - sqrt = wrong concept
        { id: "C", text: "$2401$" },
        // distractor: 49^2
        { id: "D", text: "$14$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Perfect Square Root**\n\n**Choice A is correct.**\n\n**The Fast Way (~3s):** Ask what squares to $49$: since $7^2 = 49$, $\\sqrt{49} = 7$.\n\n**The Full Solution:**\nStep 1: $\\sqrt{49}$ asks for the nonnegative number whose square is $49$.\nStep 2: $7 \\cdot 7 = 49$, so $\\sqrt{49} = 7$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($24.5$): divided $49$ by $2$ instead of taking a root.\n* Choice C ($2401$): squared $49$ instead of square-rooting it ($49^2$).\n* Choice D ($14$): doubled the root, treating $\\sqrt{49}$ as $2 \\cdot 7$ instead of $7$.\n\n**Test Day Takeaway:** A square root undoes squaring. Memorize the perfect squares: $1, 4, 9, 16, 25, 36, 49, 64, 81, 100$.",
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
      question: "If $5(x - 2) = 25$, what is the value of $x$?",
      choices: [
        // distractor: forgets to add 2
        { id: "A", text: "$5$" },
        { id: "B", text: "$7$" },
        // distractor: 25/5 + 2 done wrong, 25 + 2 / 5
        { id: "C", text: "$5.4$" },
        // distractor: distributes wrong
        { id: "D", text: "$3$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Linear Equation with Distribution**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Divide both sides by $5$ to clear the parentheses: $x - 2 = 5$, so $x = 7$.\n\n**The Full Solution:**\nStep 1: $5(x - 2) = 25$. Divide both sides by $5$: $x - 2 = 5$.\nStep 2: Add $2$: $x = 7$.\nStep 3: Check: $5(7 - 2) = 5(5) = 25$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): stopped at $x - 2 = 5$ and reported that value.\n* Choice C ($5.4$): added the $2$ to the right side before dividing, computing $\\frac{25 + 2}{5} = \\frac{27}{5}$.\n* Choice D ($3$): subtracted $2$ instead of adding it after dividing, giving $5 - 2$.\n\n**Test Day Takeaway:** When a variable sits inside parentheses multiplied by a number, dividing both sides by that number first is usually the fastest route.",
      skills: ["solving-equations"]
    },
    {
      id: 5,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A car travels at a constant speed of $60$ miles per hour. How many miles does the car travel in $2.5$ hours?",
      choices: [
        // distractor: 60/2.5
        { id: "A", text: "$24$" },
        { id: "B", text: "$150$" },
        // distractor: 60 + 2.5
        { id: "C", text: "$62.5$" },
        // distractor: 60*2 only
        { id: "D", text: "$120$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Distance = Rate * Time**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Distance $=$ rate $\\times$ time $= 60 \\times 2.5 = 150$ miles.\n\n**The Full Solution:**\nStep 1: Constant speed means distance $=$ rate $\\times$ time.\nStep 2: $60 \\times 2.5 = 150$ miles.\n\n**Why the wrong answers are tempting:**\n* Choice A ($24$): divided $60 \\div 2.5$ instead of multiplying.\n* Choice C ($62.5$): added $60 + 2.5$ instead of multiplying.\n* Choice D ($120$): used $2$ hours and dropped the half hour.\n\n**Test Day Takeaway:** Distance $=$ rate $\\times$ time. Multiply, and keep the full time value, including any fractional hour.",
      skills: ["rate-conversion"]
    },
    {
      id: 6,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "If $3x - 5 = 2x + 7$, what is the value of $x$?",
      correctAnswer: "12",
      explanation: "**SAT Pattern: Linear Equation with Variables on Both Sides**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~10s):** Subtract $2x$ from both sides to gather the variable on the left: $x - 5 = 7$, so $x = 12$.\n\n**The Full Solution:**\nStep 1: $3x - 5 = 2x + 7$. Subtract $2x$: $x - 5 = 7$.\nStep 2: Add $5$: $x = 12$.\nStep 3: Check: $3(12) - 5 = 31$ and $2(12) + 7 = 31$. $\\checkmark$\n\n**Common Mistakes:** Subtracting $3x$ instead of $2x$ and mishandling the resulting $-x = 12$; adding $5$ to the wrong side and getting $x = 2$.\n\n**Test Day Takeaway:** Move all variable terms to one side and all constants to the other, then verify by substituting into the original equation.",
      skills: ["solving-equations"]
    },
    {
      id: 7,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The function $g$ is defined by $g(x) = 4x - 9$. For what value of $x$ does $g(x) = 11$?",
      choices: [
        // distractor: 11 - 9 = 2
        { id: "A", text: "$2$" },
        { id: "B", text: "$5$" },
        // distractor: 11 + 9 / 4 wrong order
        { id: "C", text: "$\\dfrac{11}{4} - 9$" },
        // distractor: 11 + 9 = 20
        { id: "D", text: "$20$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Solving for Input from Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Set the rule equal to the output: $4x - 9 = 11 \\Rightarrow 4x = 20 \\Rightarrow x = 5$.\n\n**The Full Solution:**\nStep 1: $g(x) = 11$ means $4x - 9 = 11$.\nStep 2: Add $9$: $4x = 20$.\nStep 3: Divide by $4$: $x = 5$. Check: $g(5) = 4(5) - 9 = 11$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): subtracted $9$ from $11$ to get $2$, then forgot to divide.\n* Choice C ($\\frac{11}{4} - 9$): divided the output by $4$ before undoing the $-9$.\n* Choice D ($20$): stopped at $4x = 20$ instead of dividing by $4$.\n\n**Test Day Takeaway:** To find the input for a given output, set the function rule equal to that output and solve for $x$. Undo the addition or subtraction before the multiplication.",
      skills: ["function-evaluation", "solving-equations"]
    },
    {
      id: 8,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A circle has radius $5$. What is the circumference of the circle?",
      choices: [
        // distractor: gives area
        { id: "A", text: "$25\\pi$" },
        { id: "B", text: "$10\\pi$" },
        // distractor: pi * r
        { id: "C", text: "$5\\pi$" },
        // distractor: 2r without pi
        { id: "D", text: "$10$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Circumference of a Circle**\n\n**Choice B is correct.**\n\n**The Fast Way (~3s):** $C = 2\\pi r = 2\\pi(5) = 10\\pi$.\n\n**The Full Solution:**\nStep 1: Circumference is $C = 2\\pi r$.\nStep 2: With $r = 5$: $C = 2\\pi(5) = 10\\pi$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($25\\pi$): used the area formula $\\pi r^2 = \\pi(5)^2$ instead of circumference.\n* Choice C ($5\\pi$): used $\\pi r$ and forgot the factor of $2$.\n* Choice D ($10$): computed $2r = 10$ but dropped the $\\pi$.\n\n**Test Day Takeaway:** Circumference is $2\\pi r$; area is $\\pi r^2$. Check whether the question wants a length (circumference) or a region (area).",
      skills: ["circumference"]
    },
    {
      id: 9,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A bookshelf has $4$ shelves. The first shelf holds $25$ books, the second $30$, the third $20$, and the fourth $15$. What is the average number of books per shelf?",
      choices: [
        // distractor: gives total
        { id: "A", text: "$90$" },
        { id: "B", text: "$22.5$" },
        // distractor: middle value (mean of first two)
        { id: "C", text: "$27.5$" },
        // distractor: range
        { id: "D", text: "$15$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Average of a Small Data Set**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $\\frac{25 + 30 + 20 + 15}{4} = \\frac{90}{4} = 22.5$.\n\n**The Full Solution:**\nStep 1: Add the values: $25 + 30 + 20 + 15 = 90$.\nStep 2: Divide by the count of $4$ shelves: $\\frac{90}{4} = 22.5$ books per shelf.\n\n**Why the wrong answers are tempting:**\n* Choice A ($90$): reported the total without dividing by the count.\n* Choice C ($27.5$): averaged only two of the four values.\n* Choice D ($15$): reported the smallest single value instead of the average.\n\n**Test Day Takeaway:** Average $= \\frac{\\text{sum}}{\\text{count}}$. After summing, always divide by how many values there are.",
      skills: ["calculate-mean"]
    },
    {
      id: 10,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "If $|x - 4| = 9$, which of the following could be the value of $x$?",
      choices: [
        // distractor: only one solution
        { id: "A", text: "$13$ only" },
        { id: "B", text: "$13$ or $-5$" },
        // distractor: drops absolute value
        { id: "C", text: "$5$ or $-5$" },
        // distractor: adds rather than subtracts
        { id: "D", text: "$9$ or $-9$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Split into two cases: $x - 4 = 9$ gives $x = 13$, and $x - 4 = -9$ gives $x = -5$.\n\n**The Full Solution:**\nStep 1: $|x - 4| = 9$ means $x - 4 = 9$ or $x - 4 = -9$.\nStep 2: Case 1: $x = 13$. Case 2: $x = -5$.\nStep 3: Check: $|13 - 4| = 9$ and $|-5 - 4| = 9$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($13$ only): kept only the positive case, missing $x = -5$.\n* Choice C ($5$ or $-5$): used $\\pm 9$ but mishandled the shift, landing on $\\pm 5$ instead of $13$ and $-5$.\n* Choice D ($9$ or $-9$): reported $\\pm 9$ without ever undoing the $-4$.\n\n**Test Day Takeaway:** $|f(x)| = c$ with $c > 0$ splits into $f(x) = c$ and $f(x) = -c$. Solve both branches.",
      skills: ["solving-equations"]
    },
    {
      id: 11,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The graph of the line $y = \\dfrac{1}{2}x - 3$ crosses the $x$-axis at what value of $x$?",
      correctAnswer: "6",
      explanation: "**SAT Pattern: Finding the X-Intercept**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~10s):** The $x$-intercept is where $y = 0$: $\\frac{1}{2}x - 3 = 0 \\Rightarrow \\frac{1}{2}x = 3 \\Rightarrow x = 6$.\n\n**The Full Solution:**\nStep 1: A line crosses the $x$-axis where $y = 0$. Set $\\frac{1}{2}x - 3 = 0$.\nStep 2: Add $3$: $\\frac{1}{2}x = 3$.\nStep 3: Multiply by $2$: $x = 6$. Check: $\\frac{1}{2}(6) - 3 = 0$. $\\checkmark$\n\n**Common Mistakes:** Setting $x = 0$ instead of $y = 0$ (that gives the $y$-intercept, $-3$); stopping at $\\frac{1}{2}x = 3$ and reporting $3$.\n\n**Test Day Takeaway:** For the $x$-intercept set $y = 0$; for the $y$-intercept set $x = 0$. They are opposite substitutions.",
      skills: ["slope-intercept-form", "solving-equations"]
    },
    {
      id: 12,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A right triangle has legs of length $3$ and $4$. What is the perimeter of the triangle?",
      choices: [
        // distractor: just the sum of legs
        { id: "A", text: "$7$" },
        { id: "B", text: "$12$" },
        // distractor: hypotenuse only
        { id: "C", text: "$5$" },
        // distractor: gives area
        { id: "D", text: "$6$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Perimeter of a Right Triangle (3-4-5)**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Legs $3$ and $4$ form a $3$-$4$-$5$ right triangle, so perimeter $= 3 + 4 + 5 = 12$.\n\n**The Full Solution:**\nStep 1: Find the hypotenuse: $c = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$.\nStep 2: Perimeter is the sum of all three sides: $3 + 4 + 5 = 12$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): added only the two legs, $3 + 4$, forgetting the hypotenuse.\n* Choice C ($5$): reported just the hypotenuse.\n* Choice D ($6$): computed the area $\\frac{1}{2}(3)(4) = 6$ instead of the perimeter.\n\n**Test Day Takeaway:** Perimeter sums all three sides. Recognize the $3$-$4$-$5$ triple instantly so you never re-derive the hypotenuse.",
      skills: ["pythagorean-theorem", "triangles"]
    },
    {
      id: 13,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "Of $300$ students surveyed, $180$ said they prefer apples and the rest prefer oranges. What percent of students prefer oranges?",
      choices: [
        // distractor: gives apple percent
        { id: "A", text: "$60\\%$" },
        { id: "B", text: "$40\\%$" },
        // distractor: gives count
        { id: "C", text: "$120\\%$" },
        // distractor: 180 / 300
        { id: "D", text: "$50\\%$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Percent from Counts**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The rest prefer oranges: $300 - 180 = 120$. Then $\\frac{120}{300} = 0.40 = 40\\%$.\n\n**The Full Solution:**\nStep 1: Find the orange count. $300 - 180 = 120$ students prefer oranges.\nStep 2: Divide by the whole. $\\frac{120}{300} = \\frac{2}{5} = 0.40$.\nStep 3: Convert to a percent. $0.40 = 40\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($60\\%$): the apple percent, $\\frac{180}{300}$ — the question asks for oranges.\n* Choice C ($120\\%$): reports the raw orange count $120$ mislabeled as a percent.\n* Choice D ($50\\%$): assumes an even split instead of computing from the actual counts.\n\n**Test Day Takeaway:** Percent of a part $= \\frac{\\text{part}}{\\text{whole}}$. Read which group is asked for; here it is oranges, the leftover after apples.",
      skills: ["percent-of-value", "percent-word-problems"]
    },
    {
      id: 14,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "If $\\dfrac{a}{b} = 5$ and $b = 4$, what is the value of $a$?",
      choices: [
        // distractor: 5 - 4
        { id: "A", text: "$1$" },
        { id: "B", text: "$20$" },
        // distractor: 5 + 4
        { id: "C", text: "$9$" },
        // distractor: 5/4
        { id: "D", text: "$\\dfrac{5}{4}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Solving a Simple Proportion**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $\\frac{a}{4} = 5 \\Rightarrow a = 5 \\cdot 4 = 20$.\n\n**The Full Solution:**\nStep 1: Substitute $b = 4$ into $\\frac{a}{b} = 5$, giving $\\frac{a}{4} = 5$.\nStep 2: Multiply both sides by $4$: $a = 5 \\cdot 4 = 20$.\nStep 3: Check: $\\frac{20}{4} = 5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($1$): subtracts $4$ from $5$ instead of multiplying.\n* Choice C ($9$): adds $4$ to $5$ instead of multiplying.\n* Choice D ($\\frac{5}{4}$): divides by $4$ instead of multiplying by it.\n\n**Test Day Takeaway:** $\\frac{a}{b} = c \\Rightarrow a = bc$. Clear the denominator by multiplying both sides by it.",
      skills: ["solving-equations"]
    },
    {
      id: 15,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A right triangle has an angle $\\theta$ where $\\tan \\theta = \\dfrac{3}{4}$. What is the value of $\\sin \\theta$?",
      correctAnswer: "3/5",
      explanation: "**SAT Pattern: Building Triangle from Tangent**\n\n**The correct answer is $\\frac{3}{5}$.**\n\n**The Fast Way (~15s):** $\\tan \\theta = \\frac{\\text{opp}}{\\text{adj}} = \\frac{3}{4}$ is a $3$-$4$-$5$ triangle, so $\\sin \\theta = \\frac{3}{5}$.\n\n**The Full Solution:**\nStep 1: $\\tan \\theta = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{3}{4}$, so take opposite $= 3$ and adjacent $= 4$.\nStep 2: Find the hypotenuse: $\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$.\nStep 3: $\\sin \\theta = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{3}{5}$.\n\n**Common Mistakes:** Reporting $\\frac{3}{4}$ (that is $\\tan \\theta$, not $\\sin \\theta$); reporting $\\frac{4}{5}$ (that is $\\cos \\theta$); skipping the hypotenuse step.\n\n**Test Day Takeaway:** Given one trig ratio, sketch the right triangle, fill the missing side with the Pythagorean theorem, then read off the ratio you need.",
      skills: ["soh-cah-toa"]
    },
    {
      id: 16,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The scatterplot below shows the relationship between time spent watching TV per day ($x$, in hours) and a student's grade ($y$, on a $100$-point scale). The line of best fit has equation $y = -3x + 90$. According to the line, what grade is predicted for a student who watches $4$ hours of TV per day?",
      diagram: { type: "scatterplot", params: {
        points: [[0,92],[1,89],[2,86],[3,80],[4,76],[5,76],[6,70],[7,71],[8,64],[9,65]],
        xMin: 0, xMax: 10, yMin: 50, yMax: 95,
        xGridStep: 1, yGridStep: 5, xLabelStep: 2, yLabelStep: 10,
        xLabel: "Hours of TV per day", yLabel: "Grade",
        bestFitLine: { slope: -3, intercept: 90 },
      } },
      choices: [
        { id: "A", text: "$78$" },
        // distractor: ignores negative slope — 3*4 + 90
        { id: "B", text: "$102$" },
        // distractor: only multiplies, drops constant
        { id: "C", text: "$-12$" },
        // distractor: subtracts 3 instead of multiplying
        { id: "D", text: "$87$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Line of Best Fit Prediction**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Substitute $x = 4$: $y = -3(4) + 90 = -12 + 90 = 78$.\n\n**The Full Solution:**\nStep 1: The line is $y = -3x + 90$. To predict a grade, plug in the TV hours.\nStep 2: With $x = 4$: $y = -3(4) + 90 = -12 + 90 = 78$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($102$): uses $+3(4)$ instead of $-3(4)$, flipping the slope's sign.\n* Choice C ($-12$): stops at $-3(4) = -12$ and forgets to add $90$.\n* Choice D ($87$): subtracts the slope $3$ from $90$ instead of multiplying $-3$ by $4$.\n\n**Test Day Takeaway:** To predict from a line of best fit, substitute the given $x$ and carry the slope's sign through both the multiply and the add.",
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
      question: "A rectangular swimming pool has length $20$ feet, width $10$ feet, and depth $5$ feet. What is the volume of the pool, in cubic feet?",
      choices: [
        // distractor: gives surface area component
        { id: "A", text: "$700$" },
        { id: "B", text: "$1000$" },
        // distractor: just length * width
        { id: "C", text: "$200$" },
        // distractor: 20 + 10 + 5 sum
        { id: "D", text: "$35$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Volume of a Rectangular Prism**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $V = 20 \\cdot 10 \\cdot 5 = 1000$ cubic feet.\n\n**The Full Solution:**\nStep 1: A rectangular pool is a rectangular prism, so $V = \\ell \\cdot w \\cdot h$.\nStep 2: $V = 20 \\cdot 10 \\cdot 5 = 1000$ cubic feet.\n\n**Why the wrong answers are tempting:**\n* Choice A ($700$): adds face-area pieces rather than multiplying all three dimensions.\n* Choice C ($200$): stops at $\\ell \\cdot w = 20 \\cdot 10$ and forgets the depth.\n* Choice D ($35$): adds the dimensions $20 + 10 + 5$ instead of multiplying.\n\n**Test Day Takeaway:** Volume of a rectangular prism is $\\ell \\cdot w \\cdot h$ — always a product of all three dimensions, never a sum.",
      skills: ["volume-prism"]
    },
    {
      id: 18,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "A car was purchased for $\\$24{,}000$. Each year, the car loses $10\\%$ of its value from the previous year. What is the value of the car, in dollars, after $2$ years?",
      correctAnswer: "19440",
      explanation: "**SAT Pattern: Exponential Decay**\n\n**The correct answer is $19440$.**\n\n**The Fast Way (~20s):** Losing $10\\%$ leaves $90\\%$, so multiply by $0.90$ each year: $24{,}000 \\cdot (0.90)^2 = 24{,}000 \\cdot 0.81 = 19{,}440$.\n\n**The Full Solution:**\nStep 1: Losing $10\\%$ keeps $90\\%$ of the value, so the yearly factor is $0.90$.\nStep 2: After $1$ year: $24{,}000 \\cdot 0.90 = 21{,}600$.\nStep 3: After $2$ years: $21{,}600 \\cdot 0.90 = 19{,}440$.\n\n**Common Mistakes:** Subtracting $10\\%$ only once and stopping at $21{,}600$; treating it as a flat $20\\%$ loss for $19{,}200$; squaring the price itself as $24{,}000^2$.\n\n**Test Day Takeaway:** Percent decrease compounds — multiply by $(1 - r)$ for each period. Two years of $10\\%$ loss is $(0.90)^2$, not a single $20\\%$ cut.",
      skills: ["exponential-growth-decay", "successive-percent-change"]
    },
    {
      id: 19,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "If $x^2 = 49$, what are all possible values of $x$?",
      choices: [
        // distractor: only positive root
        { id: "A", text: "$x = 7$" },
        { id: "B", text: "$x = 7$ or $x = -7$" },
        // distractor: sqrt without considering negative
        { id: "C", text: "$x = \\sqrt{49}$" },
        // distractor: divides by 2
        { id: "D", text: "$x = 24.5$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Square-Root Equation with Both Roots**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $x^2 = 49 \\Rightarrow x = \\pm\\sqrt{49} = \\pm 7$.\n\n**The Full Solution:**\nStep 1: Take the square root of both sides, keeping both signs: $x = \\pm\\sqrt{49}$.\nStep 2: $\\sqrt{49} = 7$, so $x = 7$ or $x = -7$.\nStep 3: Check: $7^2 = 49$ $\\checkmark$ and $(-7)^2 = 49$ $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($x = 7$): the positive root only — misses $-7$.\n* Choice C ($x = \\sqrt{49}$): just the positive root rewritten, still missing $-7$.\n* Choice D ($x = 24.5$): divides $49$ by $2$ instead of taking a square root.\n\n**Test Day Takeaway:** Solving $x^2 = c$ gives both $\\sqrt{c}$ and $-\\sqrt{c}$. Always include both roots unless the context rules one out.",
      skills: ["finding-roots-factoring"]
    },
    {
      id: 20,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "The amount of money $A$ in a savings account after $t$ years is given by $A = 500(1.03)^t$. What was the initial amount in the account?",
      choices: [
        // distractor: includes 1.03 multiplier
        { id: "A", text: "$\\$515$" },
        { id: "B", text: "$\\$500$" },
        // distractor: 1.03 reading
        { id: "C", text: "$\\$1.03$" },
        // distractor: misreads as final amount
        { id: "D", text: "$\\$503$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Initial Value in Exponential Function**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Initial means $t = 0$: $A(0) = 500(1.03)^0 = 500 \\cdot 1 = 500$.\n\n**The Full Solution:**\nStep 1: \"Initial\" means the value at $t = 0$.\nStep 2: $A(0) = 500(1.03)^0$, and any nonzero base to the $0$ power is $1$.\nStep 3: $A(0) = 500 \\cdot 1 = 500$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$515$): computes $500 \\cdot 1.03$, the value after $1$ year, not the start.\n* Choice C ($\\$1.03$): reports the growth factor instead of the starting amount.\n* Choice D ($\\$503$): adds $3$ to $500$ instead of recognizing the coefficient.\n\n**Test Day Takeaway:** In $y = a \\cdot b^t$, the coefficient $a$ is the initial value (at $t = 0$) and $b$ is the growth or decay factor.",
      skills: ["exponential-growth-decay", "exponential-y-intercept"]
    },
    {
      id: 21,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "A linear function $f$ satisfies $f(2) = 7$ and $f(5) = 16$. What is the value of $f(0)$?",
      choices: [
        // distractor: average of given outputs
        { id: "A", text: "$11.5$" },
        { id: "B", text: "$1$" },
        // distractor: stops at slope
        { id: "C", text: "$3$" },
        // distractor: sign error
        { id: "D", text: "$-1$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Linear Function from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Slope $= \\frac{16 - 7}{5 - 2} = 3$. From $f(2) = 7$: $7 = 3(2) + b \\Rightarrow b = 1$, so $f(0) = 1$.\n\n**The Full Solution:**\nStep 1: Slope $m = \\frac{16 - 7}{5 - 2} = \\frac{9}{3} = 3$.\nStep 2: Write $f(x) = 3x + b$ and use $f(2) = 7$: $7 = 6 + b \\Rightarrow b = 1$.\nStep 3: $f(x) = 3x + 1$, so $f(0) = 1$. Check: $f(5) = 3(5) + 1 = 16$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($11.5$): averages the two outputs $7$ and $16$ instead of building the line.\n* Choice C ($3$): reports the slope rather than $f(0)$.\n* Choice D ($-1$): flips the sign of $b$.\n\n**Test Day Takeaway:** $f(0)$ is the $y$-intercept. Find the slope from two points, then plug one point in to solve for $b$.",
      skills: ["slope-from-points", "function-evaluation", "slope-intercept-form"]
    },
    {
      id: 22,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "A bag contains $5$ red marbles and $7$ blue marbles. If one marble is drawn at random, what is the probability that it is red? Express your answer as a fraction in the form $a/b$.",
      correctAnswer: "5/12",
      explanation: "**SAT Pattern: Basic Probability**\n\n**The correct answer is $\\frac{5}{12}$.**\n\n**The Fast Way (~5s):** Total $= 5 + 7 = 12$, so $P(\\text{red}) = \\frac{5}{12}$.\n\n**The Full Solution:**\nStep 1: Favorable outcomes are the $5$ red marbles.\nStep 2: Total outcomes are all marbles: $5 + 7 = 12$.\nStep 3: $P(\\text{red}) = \\frac{5}{12}$, which does not reduce.\n\n**Common Mistakes:** Writing $\\frac{5}{7}$ (red over blue instead of red over total); writing $\\frac{7}{12}$ (the probability of blue); trying to reduce $\\frac{5}{12}$, which is already in lowest terms.\n\n**Test Day Takeaway:** Probability $= \\frac{\\text{favorable}}{\\text{total}}$, and the total is the sum of all outcomes, not just the other color.",
      skills: ["probability-basics"]
    }
  ]
};

export default practiceTest12M2Easy;
