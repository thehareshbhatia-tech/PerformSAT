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
      explanation: "**SAT Pattern: Order of Operations (PEMDAS)**\n\n**Choice B is correct.**\n\n**The Fast Way (~3s):** Multiply first: $3 \\cdot 4 = 12$. Then add: $7 + 12 = 19$.\n\n**The Full Solution:**\nPEMDAS: multiplication before addition.\n$7 + 3 \\cdot 4 = 7 + 12 = 19$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — adds first ($10$), then multiplies.\n* Choice C: \"applies the inverse operation\" — multiplies everything.\n* Choice D: \"wrong base\" — multiplies the first two ($21$) then adds $4$.\n\n**Test Day Takeaway:** PEMDAS: Parentheses, Exponents, Multiplication/Division, Addition/Subtraction. Always work multiplication before addition.",
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
      explanation: "**SAT Pattern: Distributive Property**\n\n**Choice B is correct.**\n\n**The Fast Way (~3s):** $3(x + 5) = 3 \\cdot x + 3 \\cdot 5 = 3x + 15$.\n\n**The Full Solution:**\nThe distributive property: $a(b + c) = ab + ac$.\n$3(x + 5) = 3x + 15$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — distributes only to $x$.\n* Choice C: \"wrong base\" — distributes only to $5$, drops $3$ on $x$.\n* Choice D: \"applies the inverse operation\" — multiplies instead of adding.\n\n**Test Day Takeaway:** Distribute to EVERY term inside the parentheses. Watch out: $3(x + 5) = 3x + 15$, NOT $3x + 5$.",
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
      explanation: "**SAT Pattern: Perfect Square Root**\n\n**Choice A is correct.**\n\n**The Fast Way (~3s):** $7^2 = 49$, so $\\sqrt{49} = 7$.\n\n**The Full Solution:**\n$\\sqrt{49} = 7$ because $7 \\cdot 7 = 49$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"applies the inverse operation\" — divides $49$ by $2$.\n* Choice C: \"applies the inverse operation\" — squares instead of taking the square root.\n* Choice D: \"wrong base\" — doubles instead of square-rooting.\n\n**Test Day Takeaway:** Memorize perfect squares up to $15^2$: $1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225$.",
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
      explanation: "**SAT Pattern: Linear Equation with Distribution**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Divide by $5$: $x - 2 = 5$. Add $2$: $x = 7$.\n\n**The Full Solution:**\n$5(x - 2) = 25$\nDivide by $5$: $x - 2 = 5$.\nAdd $2$: $x = 7$.\n\nVerification: $5(7 - 2) = 5(5) = 25$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives $x - 2 = 5$ as the answer.\n* Choice C: \"wrong order\" — adds before dividing incorrectly.\n* Choice D: \"applies the inverse operation\" — subtracts $2$ instead of adding.\n\n**Test Day Takeaway:** When the variable is inside parentheses, you can either distribute first or divide first. Dividing is often quicker.",
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
      explanation: "**SAT Pattern: Distance = Rate * Time**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $60 \\cdot 2.5 = 150$ miles.\n\n**The Full Solution:**\nDistance $=$ rate $\\times$ time $= 60 \\cdot 2.5 = 150$ miles.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — divides $60$ by $2.5$.\n* Choice C: \"applies the inverse operation\" — adds the values.\n* Choice D: \"stops one step early\" — uses $2$ hours instead of $2.5$.\n\n**Test Day Takeaway:** Distance $= $ rate $\\times$ time. Always include the half hour: $2.5 = 2 + 0.5$.",
      skills: ["rate-conversion"]
    },
    {
      id: 6,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "If $3x - 5 = 2x + 7$, what is the value of $x$?",
      correctAnswer: "12",
      explanation: "**SAT Pattern: Linear Equation with Variables on Both Sides**\n\n**Answer: $12$.**\n\n**The Fast Way (~10s):** Subtract $2x$: $x - 5 = 7$. Add $5$: $x = 12$.\n\n**The Full Solution:**\n$3x - 5 = 2x + 7$\nSubtract $2x$: $x - 5 = 7$.\nAdd $5$: $x = 12$.\n\nVerification: $3(12) - 5 = 31$ and $2(12) + 7 = 31$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Subtracting $3x$ instead of $2x$, ending with $-x = 12$ and forgetting the sign.\n* Adding $-5$ to $7$ in the wrong direction.\n* Solving $5 - 7$ instead of $-5 - 7 \\to +5 + 7$ shift.\n\n**Test Day Takeaway:** Move variables to one side and constants to the other. Always verify by substituting back into the ORIGINAL equation.",
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
      explanation: "**SAT Pattern: Solving for Input from Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $4x - 9 = 11 \\Rightarrow 4x = 20 \\Rightarrow x = 5$.\n\n**The Full Solution:**\nSet $g(x) = 11$:\n$4x - 9 = 11$\n$4x = 20$\n$x = 5$.\n\nVerification: $g(5) = 4(5) - 9 = 20 - 9 = 11$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — subtracts $9$ from $11$ instead of adding.\n* Choice C: \"wrong order\" — divides before adding.\n* Choice D: \"stops one step early\" — gives $4x = 20$ as the answer.\n\n**Test Day Takeaway:** When given $g(x)$ as an output, set the function rule equal to that output and solve for $x$.",
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
      explanation: "**SAT Pattern: Circumference of a Circle**\n\n**Choice B is correct.**\n\n**The Fast Way (~3s):** $C = 2\\pi r = 2\\pi(5) = 10\\pi$.\n\n**The Full Solution:**\nCircumference $C = 2\\pi r = 2\\pi(5) = 10\\pi$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — gives the area $\\pi r^2 = 25\\pi$.\n* Choice C: \"stops one step early\" — uses $\\pi r$ instead of $2\\pi r$.\n* Choice D: \"stops one step early\" — gives $2r = 10$ without $\\pi$.\n\n**Test Day Takeaway:** Circumference $= 2\\pi r$ (linear units). Area $= \\pi r^2$ (square units). Always check whether the question asks for length or area.",
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
      explanation: "**SAT Pattern: Average of a Small Data Set**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $\\dfrac{25 + 30 + 20 + 15}{4} = \\dfrac{90}{4} = 22.5$.\n\n**The Full Solution:**\nSum $= 25 + 30 + 20 + 15 = 90$.\nAverage $= \\dfrac{90}{4} = 22.5$ books per shelf.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives the total without dividing.\n* Choice C: \"wrong base\" — averages two values incorrectly.\n* Choice D: \"wrong base\" — gives the smallest value or range.\n\n**Test Day Takeaway:** Average $= \\dfrac{\\text{sum}}{\\text{count}}$. Don't forget the final division.",
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
      explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Two cases: $x - 4 = 9 \\Rightarrow x = 13$, OR $x - 4 = -9 \\Rightarrow x = -5$.\n\n**The Full Solution:**\n$|x - 4| = 9$ means $x - 4 = 9$ or $x - 4 = -9$.\nCase 1: $x = 13$.\nCase 2: $x = -5$.\n\nVerification: $|13 - 4| = |9| = 9$ \\checkmark and $|-5 - 4| = |-9| = 9$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives only the positive case.\n* Choice C: \"wrong base\" — drops the $-4$ shift.\n* Choice D: \"wrong base\" — gives $\\pm 9$ without applying the $-4$ shift.\n\n**Test Day Takeaway:** $|f(x)| = c$ ($c > 0$) splits into two equations: $f(x) = c$ and $f(x) = -c$. Both must be checked.",
      skills: ["solving-equations"]
    },
    {
      id: 11,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The graph of the line $y = \\dfrac{1}{2}x - 3$ crosses the $x$-axis at what value of $x$?",
      correctAnswer: "6",
      explanation: "**SAT Pattern: Finding the X-Intercept**\n\n**Answer: $6$.**\n\n**The Fast Way (~10s):** Set $y = 0$: $\\dfrac{1}{2}x - 3 = 0 \\Rightarrow \\dfrac{1}{2}x = 3 \\Rightarrow x = 6$.\n\n**The Full Solution:**\nThe line crosses the $x$-axis when $y = 0$.\n$0 = \\dfrac{1}{2}x - 3$\n$\\dfrac{1}{2}x = 3$\n$x = 6$.\n\nVerification: at $x = 6$, $y = \\dfrac{1}{2}(6) - 3 = 3 - 3 = 0$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Setting $x = 0$ (that gives the $y$-intercept, not the $x$-intercept).\n* Stopping at $\\dfrac{1}{2}x = 3$ — must multiply by $2$.\n* Sign error: getting $-6$ instead of $6$.\n\n**Test Day Takeaway:** $x$-intercept: set $y = 0$. $y$-intercept: set $x = 0$. They're opposites!",
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
      explanation: "**SAT Pattern: Perimeter of a Right Triangle (3-4-5)**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $3$-$4$-$5$ right triangle. Perimeter $= 3 + 4 + 5 = 12$.\n\n**The Full Solution:**\nFind the hypotenuse: $c = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$.\nPerimeter $= 3 + 4 + 5 = 12$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — sums only the two legs.\n* Choice C: \"stops one step early\" — gives only the hypotenuse.\n* Choice D: \"wrong base\" — gives the area $\\dfrac{1}{2}(3)(4) = 6$.\n\n**Test Day Takeaway:** Perimeter sums all three sides. The $3$-$4$-$5$ triple is one of the most common SAT shortcuts.",
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
      explanation: "**SAT Pattern: Percent from Counts**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Oranges $= 300 - 180 = 120$. Percent $= \\dfrac{120}{300} = 0.40 = 40\\%$.\n\n**The Full Solution:**\nOranges count: $300 - 180 = 120$.\nFraction: $\\dfrac{120}{300} = \\dfrac{2}{5} = 0.40$.\nAs a percent: $40\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — gives the apple percent.\n* Choice C: \"wrong base\" — gives the count, mislabeled as percent.\n* Choice D: \"wrong base\" — accidentally uses the apple count $180$ as the orange count.\n\n**Test Day Takeaway:** Re-read carefully — the question asks for ORANGES, not apples. Always identify the part and the whole.",
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
      explanation: "**SAT Pattern: Solving a Simple Proportion**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $\\dfrac{a}{4} = 5 \\Rightarrow a = 5 \\cdot 4 = 20$.\n\n**The Full Solution:**\n$\\dfrac{a}{b} = 5$ and $b = 4$.\nSubstitute: $\\dfrac{a}{4} = 5$.\nMultiply by $4$: $a = 20$.\n\nVerification: $\\dfrac{20}{4} = 5$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — subtracts.\n* Choice C: \"applies the inverse operation\" — adds.\n* Choice D: \"applies the inverse operation\" — divides instead of multiplying.\n\n**Test Day Takeaway:** $\\dfrac{a}{b} = c \\Rightarrow a = bc$. Move the denominator to the other side by multiplication.",
      skills: ["solving-equations"]
    },
    {
      id: 15,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A right triangle has an angle $\\theta$ where $\\tan \\theta = \\dfrac{3}{4}$. What is the value of $\\sin \\theta$?",
      correctAnswer: "3/5",
      explanation: "**SAT Pattern: Building Triangle from Tangent**\n\n**Answer: $\\dfrac{3}{5}$.**\n\n**The Fast Way (~15s):** $\\tan \\theta = \\dfrac{\\text{opp}}{\\text{adj}} = \\dfrac{3}{4}$ gives a $3$-$4$-$5$ triangle. So $\\sin \\theta = \\dfrac{3}{5}$.\n\n**The Full Solution:**\n$\\tan \\theta = \\dfrac{\\text{opposite}}{\\text{adjacent}} = \\dfrac{3}{4}$, so opposite $= 3$ and adjacent $= 4$.\nHypotenuse $= \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$.\n$\\sin \\theta = \\dfrac{\\text{opposite}}{\\text{hypotenuse}} = \\dfrac{3}{5}$.\n\n**Common Mistakes to Avoid:**\n* Reporting $\\tan \\theta$ as $\\sin \\theta$.\n* Using $\\sin = \\dfrac{4}{5}$ (that's $\\cos$).\n* Forgetting to compute the hypotenuse.\n\n**Test Day Takeaway:** When given a trig ratio, sketch the triangle. Use Pythagorean theorem to find the missing side, then read off the requested ratio.",
      skills: ["soh-cah-toa"]
    },
    {
      id: 16,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A scatterplot shows the relationship between time spent watching TV per day ($x$, in hours) and a student's grade ($y$, on a $100$-point scale). The line of best fit has equation $y = -3x + 90$. According to the line, what grade is predicted for a student who watches $4$ hours of TV per day?",
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
      explanation: "**SAT Pattern: Line of Best Fit Prediction**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $y = -3(4) + 90 = -12 + 90 = 78$.\n\n**The Full Solution:**\nSubstitute $x = 4$:\n$y = -3(4) + 90 = -12 + 90 = 78$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"sign error\" — uses $+3$ instead of $-3$.\n* Choice C: \"stops one step early\" — gives $-12$ without adding $90$.\n* Choice D: \"wrong base\" — subtracts $3$ from $90$ instead of multiplying $-3$ by $4$.\n\n**Test Day Takeaway:** Plug the given $x$ into the line of best fit to predict $y$. Apply the slope's sign carefully.",
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
      explanation: "**SAT Pattern: Volume of a Rectangular Prism**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $V = 20 \\cdot 10 \\cdot 5 = 1000$ cubic feet.\n\n**The Full Solution:**\nVolume $= \\ell \\cdot w \\cdot h = 20 \\cdot 10 \\cdot 5 = 1000$ cubic feet.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — gives a surface area sum.\n* Choice C: \"stops one step early\" — gives only $\\ell \\cdot w$.\n* Choice D: \"applies the inverse operation\" — adds dimensions.\n\n**Test Day Takeaway:** Volume of a rectangular prism is always $\\ell \\cdot w \\cdot h$, regardless of orientation.",
      skills: ["volume-prism"]
    },
    {
      id: 18,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "A car was purchased for $\\$24{,}000$. Each year, the car loses $10\\%$ of its value from the previous year. What is the value of the car, in dollars, after $2$ years?",
      correctAnswer: "19440",
      explanation: "**SAT Pattern: Exponential Decay**\n\n**Answer: $19440$.**\n\n**The Fast Way (~20s):** After $1$ year: $24{,}000 \\cdot 0.90 = 21{,}600$. After $2$ years: $21{,}600 \\cdot 0.90 = 19{,}440$.\n\n**The Full Solution:**\nEach year retains $90\\%$ of value (loses $10\\%$).\nAfter $1$ year: $24{,}000 \\cdot 0.90 = 21{,}600$.\nAfter $2$ years: $21{,}600 \\cdot 0.90 = 19{,}440$.\nOr in one shot: $24{,}000 \\cdot (0.90)^2 = 24{,}000 \\cdot 0.81 = 19{,}440$.\n\n**Common Mistakes to Avoid:**\n* Subtracting $10\\%$ once: $24{,}000 - 2{,}400 = 21{,}600$ (only $1$ year).\n* Subtracting $20\\%$ total: $24{,}000 - 4{,}800 = 19{,}200$ (treats it as simple, not compound).\n* Squaring the original: $24{,}000^2$.\n\n**Test Day Takeaway:** Compound percent decrease compounds: multiply by $(1 - r)$ for each period. The total reduction over multiple years is NOT the simple sum of yearly percentages.",
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
      explanation: "**SAT Pattern: Square-Root Equation with Both Roots**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $x = \\pm\\sqrt{49} = \\pm 7$.\n\n**The Full Solution:**\n$x^2 = 49$\n$x = \\pm \\sqrt{49} = \\pm 7$.\nSo $x = 7$ or $x = -7$.\n\nVerification: $7^2 = 49$ \\checkmark and $(-7)^2 = 49$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives only the positive root.\n* Choice C: \"stops one step early\" — same as $7$, but doesn't include $-7$.\n* Choice D: \"applies the inverse operation\" — divides by $2$ instead of square-rooting.\n\n**Test Day Takeaway:** When solving $x^2 = c$, both $\\sqrt{c}$ and $-\\sqrt{c}$ are valid. Always include both unless context restricts it.",
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
      explanation: "**SAT Pattern: Initial Value in Exponential Function**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Initial value is $A(0) = 500(1.03)^0 = 500 \\cdot 1 = 500$.\n\n**The Full Solution:**\nAt $t = 0$: $A(0) = 500(1.03)^0 = 500 \\cdot 1 = 500$.\nThe coefficient in front of the exponential expression IS the initial amount.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — multiplies $500 \\cdot 1.03 = 515$ (year-1 value).\n* Choice C: \"wrong base\" — gives the multiplier, mislabeled.\n* Choice D: \"wrong base\" — adds $3$ to $500$.\n\n**Test Day Takeaway:** In $y = a \\cdot b^t$, $a$ is the initial value (when $t = 0$) and $b$ is the growth/decay factor.",
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
      explanation: "**SAT Pattern: Linear Function from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Slope $= \\dfrac{16 - 7}{5 - 2} = 3$. From $f(2) = 7$: $7 = 3(2) + b \\Rightarrow b = 1$. So $f(0) = 1$.\n\n**The Full Solution:**\nSlope $m = \\dfrac{16 - 7}{5 - 2} = \\dfrac{9}{3} = 3$.\nWrite $f(x) = 3x + b$. Use $f(2) = 7$: $7 = 6 + b \\Rightarrow b = 1$.\n$f(x) = 3x + 1$, so $f(0) = 1$.\n\nVerification: $f(5) = 3(5) + 1 = 16$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — averages the two outputs.\n* Choice C: \"stops one step early\" — gives the slope as the answer.\n* Choice D: \"sign error\" — sign-flips $b$.\n\n**Test Day Takeaway:** A linear function $f(0)$ is the $y$-intercept. Find the slope, then plug in one given point to find $b$.",
      skills: ["slope-from-points", "function-evaluation", "slope-intercept-form"]
    },
    {
      id: 22,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "A bag contains $5$ red marbles and $7$ blue marbles. If one marble is drawn at random, what is the probability that it is red? Express your answer as a fraction in the form $a/b$.",
      correctAnswer: "5/12",
      explanation: "**SAT Pattern: Basic Probability**\n\n**Answer: $\\dfrac{5}{12}$.**\n\n**The Fast Way (~5s):** Total $= 5 + 7 = 12$. $P(\\text{red}) = \\dfrac{5}{12}$.\n\n**The Full Solution:**\nFavorable outcomes: $5$ red marbles.\nTotal outcomes: $5 + 7 = 12$ marbles.\n$P(\\text{red}) = \\dfrac{5}{12}$.\n\n**Common Mistakes to Avoid:**\n* Using $\\dfrac{5}{7}$ (red over blue, not red over total).\n* Using $\\dfrac{7}{12}$ ($P(\\text{blue})$ instead of $P(\\text{red})$).\n* Reducing wrong: $\\dfrac{5}{12}$ doesn't simplify.\n\n**Test Day Takeaway:** Probability $= \\dfrac{\\text{favorable}}{\\text{total}}$. The total is the sum of ALL outcomes, not just the unfavorable ones.",
      skills: ["probability-basics"]
    }
  ]
};

export default practiceTest12M2Easy;
