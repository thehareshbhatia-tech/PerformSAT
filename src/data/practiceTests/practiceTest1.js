// Practice Test 1 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Questions calibrated to College Board official practice test difficulty

export const practiceTest1 = {
  id: "practice-test-1",
  title: "Practice Test 1",
  description: "Full-length SAT Math practice test with 2 modules",
  totalQuestions: 44,
  timePerModule: 35,
  modules: [
    {
      id: "module-1",
      title: "Module 1",
      timeLimit: 35,
      questions: [
        {
          id: 1,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A runner burns $12$ calories per minute while jogging. How many calories does the runner burn in $45$ minutes?",
          choices: [
            { id: "A", text: "$480$" },
            { id: "B", text: "$540$" },
            { id: "C", text: "$57$" },
            { id: "D", text: "$600$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Unit Rate Multiplication**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** $12 \\times 45 = 540$.\n\n**The Full Solution:**\nCalories burned $= 12 \\text{ cal/min} \\times 45 \\text{ min} = 540$ calories.\n\n**Why the wrong answers are tempting:**\n• Choice A ($480$): Comes from multiplying $12 \\times 40$, forgetting the last $5$ minutes.\n• Choice C ($57$): Comes from adding $12 + 45$ instead of multiplying.\n• Choice D ($600$): Comes from multiplying $12 \\times 50$, rounding up the time.\n\n**Test Day Takeaway:** Rate times time equals total. Just multiply.",
          skills: ["word-problems", "unit-conversion"]
        },
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "What is $25\\%$ of $240$?",
          choices: [
            { id: "A", text: "$48$" },
            { id: "B", text: "$60$" },
            { id: "C", text: "$80$" },
            { id: "D", text: "$96$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Basic Percent Calculation**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $25\\%$ means one-quarter. $240 \\div 4 = 60$.\n\n**The Full Solution:**\n$25\\%$ of $240 = 0.25 \\times 240 = 60$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($48$): This is $20\\%$ of $240$.\n• Choice C ($80$): This is $\\frac{240}{3}$, confusing $25\\%$ with one-third.\n• Choice D ($96$): This is $40\\%$ of $240$.\n\n**Test Day Takeaway:** $25\\%$ = divide by $4$. Know your common percent shortcuts.",
          skills: ["percents"]
        },
        {
          id: 3,
          type: "fill-in",
          difficulty: "easy",
          question: "If $p + 5 + 7 = 15$, what is the value of $p$?",
          correctAnswer: "3",
          explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**The correct answer is 3.**\n\n**The Fast Way (10 seconds):** $p + 12 = 15$, so $p = 3$.\n\n**The Full Solution:**\n$p + 5 + 7 = 15$\n$p + 12 = 15$\n$p = 15 - 12 = 3$\n\n**Common Mistakes to Avoid:**\n• Adding $5 + 7$ incorrectly\n• Forgetting to subtract from both sides\n\n**Verification:** $3 + 5 + 7 = 15$ ✓\n\n**Test Day Takeaway:** Combine constants first, then isolate the variable.",
          skills: ["solving-equations"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A recipe calls for $3$ cups of flour for every $2$ cups of sugar. If a baker uses $9$ cups of flour, how many cups of sugar are needed?",
          choices: [
            { id: "A", text: "$4$" },
            { id: "B", text: "$5$" },
            { id: "C", text: "$6$" },
            { id: "D", text: "$8$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Basic Proportion**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** Flour tripled from $3$ to $9$, so sugar also triples: $2 \\times 3 = 6$.\n\n**The Full Solution:**\n$\\frac{3}{2} = \\frac{9}{x}$\n$3x = 18$\n$x = 6$\n\n**Why the wrong answers are tempting:**\n• Choice A ($4$): Doubling instead of tripling the sugar.\n• Choice B ($5$): Adding $3$ to sugar instead of multiplying.\n• Choice D ($8$): Multiplying $2 \\times 4$ from a wrong scale factor.\n\n**Test Day Takeaway:** Find the scale factor first, then apply it to the other quantity.",
          skills: ["ratios-proportions"]
        },
        {
          id: 5,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Which expression is equivalent to $9x^2 - 4x^2$?",
          choices: [
            { id: "A", text: "$5x^2$" },
            { id: "B", text: "$5x$" },
            { id: "C", text: "$5x^4$" },
            { id: "D", text: "$13x^2$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Combining Like Terms**\n\n**Choice A is correct.**\n\n**The Fast Way (10 seconds):** $9x^2 - 4x^2 = (9-4)x^2 = 5x^2$.\n\n**The Full Solution:**\nSubtract the coefficients of like terms: $9 - 4 = 5$. The variable part $x^2$ stays the same.\n\n**Why the wrong answers are tempting:**\n• Choice B ($5x$): Incorrectly reduces the exponent when subtracting.\n• Choice C ($5x^4$): Subtracts coefficients but incorrectly adds exponents.\n• Choice D ($13x^2$): Adds the coefficients instead of subtracting.\n\n**Test Day Takeaway:** When combining like terms, only the coefficients change. The exponent stays the same.",
          skills: ["polynomial-operations"]
        },
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A gym membership costs $\\$35$ per month plus a one-time registration fee of $\\$50$. Which function $f(m)$ gives the total cost, in dollars, for $m$ months?",
          choices: [
            { id: "A", text: "$f(m) = 35m + 50$" },
            { id: "B", text: "$f(m) = 50m + 35$" },
            { id: "C", text: "$f(m) = 85m$" },
            { id: "D", text: "$f(m) = 35m - 50$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Linear Function from Context**\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** Monthly cost is the slope ($35$), one-time fee is the $y$-intercept ($50$). So $f(m) = 35m + 50$.\n\n**The Full Solution:**\nTotal cost = (cost per month)(number of months) + registration fee\n$f(m) = 35m + 50$\n\n**Why the wrong answers are tempting:**\n• Choice B: Swaps the monthly cost and registration fee.\n• Choice C: Adds $35 + 50 = 85$ and treats it as a single monthly rate.\n• Choice D: Subtracts the registration fee instead of adding it.\n\n**Test Day Takeaway:** In linear models, the repeated cost is the slope and the one-time cost is the $y$-intercept.",
          skills: ["linear-functions", "word-problems"]
        },
        {
          id: 7,
          type: "fill-in",
          difficulty: "easy",
          question: "A coach spent $\\$72$ on water bottles at $\\$4$ per bottle. How many bottles did the coach buy?",
          correctAnswer: "18",
          explanation: "**SAT Pattern: Simple Division Word Problem**\n\n**The correct answer is 18.**\n\n**The Fast Way (10 seconds):** $72 \\div 4 = 18$.\n\n**The Full Solution:**\nNumber of bottles $= \\frac{\\text{total cost}}{\\text{cost per bottle}} = \\frac{72}{4} = 18$.\n\n**Common Mistakes to Avoid:**\n• Multiplying instead of dividing ($72 \\times 4 = 288$)\n• Division error: $72 \\div 4 \\neq 16$\n\n**Verification:** $18 \\times 4 = 72$ ✓\n\n**Test Day Takeaway:** Total divided by rate gives the quantity.",
          skills: ["word-problems"]
        },
        {
          id: 8,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A savings account starts with $\\$500$ and earns $\\$25$ each month. A second account starts with $\\$200$ and earns $\\$50$ each month. After how many months will both accounts have the same balance?",
          choices: [
            { id: "A", text: "$8$" },
            { id: "B", text: "$10$" },
            { id: "C", text: "$12$" },
            { id: "D", text: "$15$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Setting Two Linear Expressions Equal**\n\n**Choice C is correct.**\n\n**The Fast Way (30 seconds):** $500 + 25m = 200 + 50m$. Subtract: $300 = 25m$, so $m = 12$.\n\n**The Full Solution:**\nAccount 1: $500 + 25m$\nAccount 2: $200 + 50m$\nSet equal: $500 + 25m = 200 + 50m$\n$500 - 200 = 50m - 25m$\n$300 = 25m$\n$m = 12$\n\n**Why the wrong answers are tempting:**\n• Choice A ($8$): From $200 \\div 25 = 8$, dividing the difference by the wrong rate.\n• Choice B ($10$): From $500 \\div 50 = 10$, a common setup error.\n• Choice D ($15$): From $300 \\div 20$, subtracting rates incorrectly.\n\n**Test Day Takeaway:** When two quantities start differently and grow at different rates, set their expressions equal and solve for the variable.",
          skills: ["linear-equations", "systems-of-equations"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Line $\\ell$ has a slope of $\\frac{2}{3}$ and passes through the point $(6, 5)$. What is the $y$-intercept of line $\\ell$?",
          choices: [
            { id: "A", text: "$1$" },
            { id: "B", text: "$3$" },
            { id: "C", text: "$-1$" },
            { id: "D", text: "$9$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Finding y-intercept from Slope and a Point**\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** Use $y = mx + b$: $5 = \\frac{2}{3}(6) + b = 4 + b$, so $b = 1$.\n\n**The Full Solution:**\n$y = \\frac{2}{3}x + b$\nPlug in $(6, 5)$: $5 = \\frac{2}{3}(6) + b$\n$5 = 4 + b$\n$b = 1$\n\n**Why the wrong answers are tempting:**\n• Choice B ($3$): Confusing the slope numerator with the intercept.\n• Choice C ($-1$): Sign error when solving for $b$.\n• Choice D ($9$): Adding $5 + 4$ instead of subtracting.\n\n**Test Day Takeaway:** Plug the point into $y = mx + b$ and solve for $b$.",
          skills: ["slope", "linear-functions"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A travel agency surveyed $200$ customers about their preferred vacation type. $80$ chose beach, $60$ chose mountain, $40$ chose city, and $20$ chose cruise. What is the probability that a randomly selected customer preferred beach or mountain?",
          choices: [
            { id: "A", text: "$0.40$" },
            { id: "B", text: "$0.60$" },
            { id: "C", text: "$0.70$" },
            { id: "D", text: "$0.80$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Probability from Data**\n\n**Choice C is correct.**\n\n**The Fast Way (20 seconds):** Beach + Mountain $= 80 + 60 = 140$. Probability $= \\frac{140}{200} = 0.70$.\n\n**The Full Solution:**\n$P(\\text{beach or mountain}) = \\frac{80 + 60}{200} = \\frac{140}{200} = 0.70$\n\n**Why the wrong answers are tempting:**\n• Choice A ($0.40$): This is just $P(\\text{beach}) = \\frac{80}{200}$.\n• Choice B ($0.60$): This is just $P(\\text{mountain}) + P(\\text{city}) = \\frac{60+60}{200}$, a misread.\n• Choice D ($0.80$): This is $\\frac{80+60+20}{200}$, accidentally including cruise.\n\n**Test Day Takeaway:** For \"or\" probability with non-overlapping categories, just add the individual counts and divide by the total.",
          skills: ["probability", "statistics"]
        },
        {
          id: 11,
          type: "fill-in",
          difficulty: "medium",
          question: "If $3x + 7 = 28$, what is the value of $6x + 14$?",
          correctAnswer: "56",
          explanation: "**SAT Pattern: Algebraic Manipulation Shortcut**\n\n**The correct answer is 56.**\n\n**The Fast Way (10 seconds):** $6x + 14 = 2(3x + 7) = 2(28) = 56$.\n\n**The Full Solution:**\nNotice that $6x + 14 = 2(3x + 7)$.\nSince $3x + 7 = 28$:\n$6x + 14 = 2(28) = 56$\n\n**Common Mistakes to Avoid:**\n• Solving for $x$ first (unnecessary extra work): $3x = 21$, $x = 7$, then $6(7) + 14 = 56$. Correct but slower.\n• Not recognizing the factor-of-$2$ relationship.\n\n**Verification:** $x = 7$: $6(7) + 14 = 42 + 14 = 56$ ✓\n\n**Test Day Takeaway:** Before solving for a variable, check if the expression you need is a multiple of what you already have.",
          skills: ["algebraic-manipulation", "solving-equations"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The function $f$ is defined by $f(x) = 3(2)^x$. What is the value of $f(4)$?",
          choices: [
            { id: "A", text: "$24$" },
            { id: "B", text: "$48$" },
            { id: "C", text: "$96$" },
            { id: "D", text: "$1{,}296$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Evaluating an Exponential Function**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** $f(4) = 3 \\cdot 2^4 = 3 \\cdot 16 = 48$.\n\n**The Full Solution:**\n$f(4) = 3(2)^4 = 3 \\times 16 = 48$\n\n**Why the wrong answers are tempting:**\n• Choice A ($24$): From $3 \\cdot 2^3 = 24$, using the wrong exponent.\n• Choice C ($96$): From $3 \\cdot 2^5 = 96$, using exponent $5$ instead of $4$.\n• Choice D ($1{,}296$): From $(3 \\cdot 2)^4 = 6^4 = 1296$, multiplying before exponentiating.\n\n**Test Day Takeaway:** In $a \\cdot b^x$, the exponent applies only to $b$, not to $a \\cdot b$.",
          skills: ["exponential-functions", "function-evaluation"]
        },
        {
          id: 13,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Two parallel lines are cut by a transversal. One of the angles formed measures $65°$. Which of the following could NOT be the measure of another angle formed?",
          choices: [
            { id: "A", text: "$65°$" },
            { id: "B", text: "$115°$" },
            { id: "C", text: "$125°$" },
            { id: "D", text: "$180° - 65°$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Parallel Lines and Transversals**\n\n**Choice C is correct.**\n\n**The Fast Way (20 seconds):** When parallel lines are cut by a transversal, all angles are either $65°$ or $180° - 65° = 115°$. $125°$ is neither.\n\n**The Full Solution:**\nParallel lines cut by a transversal create only two distinct angle measures that are supplementary: $65°$ and $115°$.\n• Choice A: $65°$ (corresponding or alternate interior angle) ✓\n• Choice B: $115°$ (supplementary angle) ✓\n• Choice C: $125°$ is not $65°$ or $115°$ ✗\n• Choice D: $180° - 65° = 115°$ ✓\n\n**Why the wrong answers are tempting:**\n• Choice C ($125°$) looks close to $115°$ and could be confused with a supplementary calculation.\n\n**Test Day Takeaway:** Parallel lines + transversal = only two angle measures that add to $180°$.",
          skills: ["angles", "parallel-lines"]
        },
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A fitness tracker recorded the following daily step counts over $5$ days: $8{,}200$, $9{,}400$, $7{,}800$, $10{,}600$, and $9{,}000$. What is the mean daily step count?",
          choices: [
            { id: "A", text: "$8{,}800$" },
            { id: "B", text: "$9{,}000$" },
            { id: "C", text: "$9{,}200$" },
            { id: "D", text: "$9{,}400$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Calculating the Mean**\n\n**Choice B is correct.**\n\n**The Fast Way (30 seconds):** Sum $= 8200 + 9400 + 7800 + 10600 + 9000 = 45{,}000$. Mean $= 45{,}000 \\div 5 = 9{,}000$.\n\n**The Full Solution:**\nMean $= \\frac{8200 + 9400 + 7800 + 10600 + 9000}{5} = \\frac{45{,}000}{5} = 9{,}000$\n\n**Why the wrong answers are tempting:**\n• Choice A ($8{,}800$): From a summation error giving $44{,}000$.\n• Choice C ($9{,}200$): From a summation error giving $46{,}000$.\n• Choice D ($9{,}400$): Confusing the mean with the median (middle value when ordered).\n\n**Test Day Takeaway:** Mean = sum of all values divided by number of values. Use Desmos for the addition.",
          skills: ["mean-median-mode", "statistics"]
        },
        {
          id: 15,
          type: "fill-in",
          difficulty: "medium",
          question: "If $\\frac{x}{5} = 12$, what is the value of $x$?",
          correctAnswer: "60",
          explanation: "**SAT Pattern: Solving a One-Step Equation**\n\n**The correct answer is 60.**\n\n**The Fast Way (10 seconds):** Multiply both sides by $5$: $x = 60$.\n\n**The Full Solution:**\n$\\frac{x}{5} = 12$\n$x = 12 \\times 5 = 60$\n\n**Common Mistakes to Avoid:**\n• Dividing instead of multiplying: $12 \\div 5 = 2.4$\n• Subtracting: $12 - 5 = 7$\n\n**Verification:** $\\frac{60}{5} = 12$ ✓\n\n**Test Day Takeaway:** To undo division, multiply both sides by the denominator.",
          skills: ["solving-equations"]
        },
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The equation $y = 2x^2 - 12x + 22$ can be rewritten in the form $y = a(x - h)^2 + k$. What is the value of $k$?",
          choices: [
            { id: "A", text: "$4$" },
            { id: "B", text: "$-4$" },
            { id: "C", text: "$22$" },
            { id: "D", text: "$18$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Converting to Vertex Form**\n\n**Choice A is correct.**\n\n**The Fast Way (45 seconds):** Factor out $2$: $y = 2(x^2 - 6x) + 22$. Complete the square: $y = 2(x^2 - 6x + 9 - 9) + 22 = 2(x-3)^2 - 18 + 22 = 2(x-3)^2 + 4$. So $k = 4$.\n\n**The Full Solution:**\n$y = 2x^2 - 12x + 22$\n$y = 2(x^2 - 6x) + 22$\n$y = 2(x^2 - 6x + 9 - 9) + 22$\n$y = 2(x - 3)^2 - 18 + 22$\n$y = 2(x - 3)^2 + 4$\n\nSo $k = 4$.\n\n**Why the wrong answers are tempting:**\n• Choice B ($-4$): Sign error on the last step.\n• Choice C ($22$): Using the original constant term without completing the square.\n• Choice D ($18$): Using $2 \\times 9 = 18$ but forgetting to subtract and add back.\n\n**Test Day Takeaway:** To find the vertex, complete the square. Remember to multiply the adjustment by the leading coefficient when adding it back.",
          skills: ["vertex-form", "quadratic-functions"]
        },
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A ball is kicked into the air. Its height, in feet, after $t$ seconds is modeled by $h(t) = -16t^2 + 48t$. What is the maximum height the ball reaches?",
          choices: [
            { id: "A", text: "$36$ feet" },
            { id: "B", text: "$48$ feet" },
            { id: "C", text: "$64$ feet" },
            { id: "D", text: "$32$ feet" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Maximum of a Quadratic Function**\n\n**Choice A is correct.**\n\n**The Fast Way (30 seconds):** The vertex is at $t = \\frac{-b}{2a} = \\frac{-48}{2(-16)} = \\frac{-48}{-32} = 1.5$. Then $h(1.5) = -16(2.25) + 48(1.5) = -36 + 72 = 36$.\n\n**The Full Solution:**\n$h(t) = -16t^2 + 48t$\nVertex at $t = \\frac{-48}{2(-16)} = 1.5$\n$h(1.5) = -16(1.5)^2 + 48(1.5) = -16(2.25) + 72 = -36 + 72 = 36$\n\n**Why the wrong answers are tempting:**\n• Choice B ($48$): Using the coefficient of $t$ as the max height.\n• Choice C ($64$): From $-16 \\times 4 + 48 \\times 4$, evaluating at $t = 4$ instead of $t = 1.5$. Actually gives $64$... wait, $h(4)= -256+192 = -64$. Likely from a calculation error.\n• Choice D ($32$): From evaluating at $t = 1$: $-16 + 48 = 32$, close but not the maximum.\n\n**Test Day Takeaway:** Maximum height = plug $t = \\frac{-b}{2a}$ back into the function.",
          skills: ["quadratic-functions", "function-evaluation"]
        },
        {
          id: 18,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The function $g$ is defined by $g(x) = (x-4)(x+6)$. The graph of $y = g(x)$ in the $xy$-plane has $x$-intercepts at $(a, 0)$ and $(b, 0)$, where $a < b$. What is the value of $b - a$?",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$8$" },
            { id: "C", text: "$10$" },
            { id: "D", text: "$24$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Distance Between x-intercepts**\n\n**Choice C is correct.**\n\n**The Fast Way (20 seconds):** The $x$-intercepts are $x = 4$ and $x = -6$. Distance $= 4 - (-6) = 10$.\n\n**The Full Solution:**\nSet $g(x) = 0$: $(x-4)(x+6) = 0$\n$x = 4$ or $x = -6$\nSince $a < b$: $a = -6$ and $b = 4$\n$b - a = 4 - (-6) = 10$\n\n**Why the wrong answers are tempting:**\n• Choice A ($2$): From $4 + (-6) = -2$, taking absolute value.\n• Choice B ($8$): From subtracting without the double negative: $4 - 6 = -2$... no. Possibly from a sign confusion.\n• Choice D ($24$): From multiplying $4 \\times 6$.\n\n**Test Day Takeaway:** The $x$-intercepts of $(x - r)(x - s)$ are $r$ and $s$. Watch the signs carefully.",
          skills: ["quadratic-equations", "factoring"]
        },
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A right triangle has legs of length $5$ and $12$. What is the area of a square whose side length equals the hypotenuse of the triangle?",
          choices: [
            { id: "A", text: "$144$" },
            { id: "B", text: "$169$" },
            { id: "C", text: "$60$" },
            { id: "D", text: "$289$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Pythagorean Theorem + Area**\n\n**Choice B is correct.**\n\n**The Fast Way (30 seconds):** Hypotenuse $= \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$. Area of square $= 13^2 = 169$.\n\n**The Full Solution:**\nBy the Pythagorean theorem: $c = \\sqrt{5^2 + 12^2} = \\sqrt{169} = 13$.\nArea of square $= c^2 = 13^2 = 169$.\n\nAlternatively, the area of the square equals $c^2 = 5^2 + 12^2 = 169$ directly, without finding $c$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($144$): Using only $12^2$.\n• Choice C ($60$): Computing the area of the triangle: $\\frac{1}{2}(5)(12) = 30$... actually $60$ would be $2 \\times 30$, a common error.\n• Choice D ($289$): From $(5+12)^2 = 17^2 = 289$, adding legs instead of using Pythagorean theorem.\n\n**Test Day Takeaway:** Know $5$-$12$-$13$ as a Pythagorean triple. Also, the area of a square with side = hypotenuse is just $a^2 + b^2$.",
          skills: ["triangles", "area"]
        },
        {
          id: 20,
          type: "fill-in",
          difficulty: "hard",
          question: "If $3(x - 4) + 2 = 20$, what is the value of $x$?",
          correctAnswer: "10",
          explanation: "**SAT Pattern: Multi-Step Equation with Distribution**\n\n**The correct answer is 10.**\n\n**The Fast Way (20 seconds):** $3(x-4) + 2 = 20$. $3(x-4) = 18$. $x - 4 = 6$. $x = 10$.\n\n**The Full Solution:**\n$3(x - 4) + 2 = 20$\n$3x - 12 + 2 = 20$\n$3x - 10 = 20$\n$3x = 30$\n$x = 10$\n\n**Common Mistakes to Avoid:**\n• Distributing incorrectly: $3(x-4) = 3x - 4$ instead of $3x - 12$\n• Combining $-12 + 2 = -14$ instead of $-10$\n\n**Verification:** $3(10-4) + 2 = 3(6) + 2 = 18 + 2 = 20$ ✓\n\n**Test Day Takeaway:** Distribute first, combine like terms, then isolate the variable.",
          skills: ["solving-equations", "algebraic-manipulation"]
        },
        {
          id: 21,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A circle in the $xy$-plane has center $(3, -2)$ and radius $5$. Which of the following is an equation of the circle?",
          choices: [
            { id: "A", text: "$(x+3)^2 + (y-2)^2 = 25$" },
            { id: "B", text: "$(x-3)^2 + (y+2)^2 = 25$" },
            { id: "C", text: "$(x-3)^2 + (y+2)^2 = 5$" },
            { id: "D", text: "$(x+3)^2 + (y-2)^2 = 5$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Equation of a Circle**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Standard form: $(x-h)^2 + (y-k)^2 = r^2$. Center $(3,-2)$: $h=3, k=-2$. Radius $5$: $r^2 = 25$.\n$(x-3)^2 + (y-(-2))^2 = 25$ → $(x-3)^2 + (y+2)^2 = 25$.\n\n**The Full Solution:**\nThe standard equation of a circle with center $(h,k)$ and radius $r$ is $(x-h)^2 + (y-k)^2 = r^2$.\nPlugging in: $(x-3)^2 + (y+2)^2 = 25$.\n\n**Why the wrong answers are tempting:**\n• Choice A: Flips the signs on both $h$ and $k$.\n• Choice C: Uses $r = 5$ instead of $r^2 = 25$.\n• Choice D: Both errors combined.\n\n**Test Day Takeaway:** Circle formula uses subtraction: $(x - h)$. If center has a negative coordinate, you get a plus sign. Radius is squared.",
          skills: ["circle-equations", "coordinate-geometry"]
        },
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The quadratic equation $x^2 - 10x + c = 0$ has exactly one real solution. What is the value of $c$?",
          choices: [
            { id: "A", text: "$10$" },
            { id: "B", text: "$20$" },
            { id: "C", text: "$25$" },
            { id: "D", text: "$100$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Discriminant Equals Zero**\n\n**Choice C is correct.**\n\n**The Fast Way (30 seconds):** One real solution means discriminant $= 0$: $b^2 - 4ac = 0$. Here $a=1, b=-10$: $100 - 4c = 0$, so $c = 25$.\n\n**The Full Solution:**\nFor exactly one solution, the discriminant must equal zero:\n$b^2 - 4ac = 0$\n$(-10)^2 - 4(1)(c) = 0$\n$100 - 4c = 0$\n$4c = 100$\n$c = 25$\n\n**Why the wrong answers are tempting:**\n• Choice A ($10$): Half of $b$ value, a common guess.\n• Choice B ($20$): From $100 \\div 5$ instead of $100 \\div 4$.\n• Choice D ($100$): Using $b^2$ without dividing by $4a$.\n\n**Test Day Takeaway:** Exactly one solution = discriminant is zero. The formula $b^2 - 4ac = 0$ directly gives you the missing value.",
          skills: ["discriminant", "quadratic-equations"]
        }
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
        {
          id: 1,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A road trip covers $210$ miles in $3$ hours. What is the average speed in miles per hour?",
          choices: [
            { id: "A", text: "$60$" },
            { id: "B", text: "$65$" },
            { id: "C", text: "$70$" },
            { id: "D", text: "$75$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Average Speed**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** $210 \\div 3 = 70$ mph.\n\n**The Full Solution:**\nAverage speed $= \\frac{\\text{distance}}{\\text{time}} = \\frac{210}{3} = 70$ mph.\n\n**Why the wrong answers are tempting:**\n• Choice A ($60$): A common driving speed, but not what the math gives.\n• Choice B ($65$): Halfway between $60$ and $70$, a guess.\n• Choice D ($75$): From a division error.\n\n**Test Day Takeaway:** Speed = distance divided by time.",
          skills: ["word-problems", "unit-conversion"]
        },
        {
          id: 2,
          type: "fill-in",
          difficulty: "easy",
          question: "If $4x = 36$, what is the value of $x$?",
          correctAnswer: "9",
          explanation: "**SAT Pattern: One-Step Equation**\n\n**The correct answer is 9.**\n\n**The Fast Way (5 seconds):** $x = 36 \\div 4 = 9$.\n\n**The Full Solution:**\n$4x = 36$\n$x = \\frac{36}{4} = 9$\n\n**Common Mistakes to Avoid:**\n• Subtracting $4$ instead of dividing: $36 - 4 = 32$\n• Multiplying instead: $36 \\times 4 = 144$\n\n**Verification:** $4(9) = 36$ ✓\n\n**Test Day Takeaway:** To undo multiplication, divide both sides.",
          skills: ["solving-equations"]
        },
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A hiker walks $3$ miles per hour. The function $d(t) = 3t$ gives the distance walked after $t$ hours. What is the best interpretation of the number $3$ in this function?",
          choices: [
            { id: "A", text: "The total distance in miles" },
            { id: "B", text: "The number of hours hiked" },
            { id: "C", text: "The speed in miles per hour" },
            { id: "D", text: "The number of rest stops" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Interpreting Linear Function Coefficients**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** In $d(t) = 3t$, the coefficient $3$ is the rate of change — miles per hour.\n\n**The Full Solution:**\nIn a linear function $f(t) = mt + b$, the coefficient $m$ represents the rate of change. Here $m = 3$ means the hiker covers $3$ miles each hour.\n\n**Why the wrong answers are tempting:**\n• Choice A: Total distance depends on time, not a fixed number.\n• Choice B: The number of hours is $t$, the input variable.\n• Choice D: Nothing in the function relates to rest stops.\n\n**Test Day Takeaway:** In a linear function, the slope is always the rate of change per unit of the input.",
          skills: ["function-interpretation", "linear-functions"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "How many minutes are equivalent to $3$ hours and $15$ minutes?",
          choices: [
            { id: "A", text: "$180$" },
            { id: "B", text: "$195$" },
            { id: "C", text: "$200$" },
            { id: "D", text: "$315$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Unit Conversion**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $3 \\times 60 + 15 = 180 + 15 = 195$.\n\n**The Full Solution:**\n$3$ hours $= 3 \\times 60 = 180$ minutes\n$180 + 15 = 195$ minutes\n\n**Why the wrong answers are tempting:**\n• Choice A ($180$): Forgot to add the extra $15$ minutes.\n• Choice C ($200$): Rounded $195$ up.\n• Choice D ($315$): Wrote $3$ and $15$ together instead of converting.\n\n**Test Day Takeaway:** Convert hours to minutes by multiplying by $60$, then add remaining minutes.",
          skills: ["unit-conversion"]
        },
        {
          id: 5,
          type: "multiple-choice",
          difficulty: "easy",
          question: "The equation $5x + 3 = 23$ is true for what value of $x$?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$5$" },
            { id: "D", text: "$6$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $5x = 20$, so $x = 4$.\n\n**The Full Solution:**\n$5x + 3 = 23$\n$5x = 20$\n$x = 4$\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): From $23 \\div 5 \\approx 4.6$, rounding down, or guessing.\n• Choice C ($5$): From dividing $25 \\div 5$, not subtracting $3$ first.\n• Choice D ($6$): From $23 - 3 = 20$, then incorrectly dividing $20 \\div 3$.\n\n**Test Day Takeaway:** Subtract first, then divide.",
          skills: ["solving-equations", "linear-equations"]
        },
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The system of equations below has solution $(x, y)$. What is the value of $x$?",
          questionFormula: {
            equation: "$$\\begin{cases} 2x + y = 11 \\\\ x - y = 1 \\end{cases}$$"
          },
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$5$" },
            { id: "D", text: "$7$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Solving a System by Elimination**\n\n**Choice B is correct.**\n\n**The Fast Way (30 seconds):** Add the equations: $2x + y + x - y = 11 + 1$ → $3x = 12$ → $x = 4$.\n\n**The Full Solution:**\n$2x + y = 11$\n$x - y = 1$\nAdding: $3x = 12$, so $x = 4$.\nCheck: $y = 11 - 2(4) = 3$. Then $4 - 3 = 1$ ✓\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): This is the $y$-value, not $x$.\n• Choice C ($5$): From adding $11 + 1 = 12$ and dividing by $2$ instead of $3$.\n• Choice D ($7$): From $11 - 1 = 10$... no clear path, likely a guess.\n\n**Test Day Takeaway:** When $y$ terms have opposite signs, add the equations to eliminate $y$.",
          skills: ["systems-of-equations"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A store sells trail mix for $\\$6$ per pound and dried fruit for $\\$9$ per pound. A customer buys a total of $5$ pounds and spends $\\$36$. How many pounds of trail mix did the customer buy?",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$3$" },
            { id: "C", text: "$4$" },
            { id: "D", text: "$5$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: System of Equations from a Word Problem**\n\n**Choice B is correct.**\n\n**The Fast Way (30 seconds):** Let $t$ = trail mix pounds. Then dried fruit $= 5 - t$. Cost: $6t + 9(5-t) = 36$. $6t + 45 - 9t = 36$. $-3t = -9$. $t = 3$.\n\n**The Full Solution:**\n$t + d = 5$ and $6t + 9d = 36$\nSubstitute $d = 5 - t$:\n$6t + 9(5-t) = 36$\n$6t + 45 - 9t = 36$\n$-3t = -9$\n$t = 3$\n\n**Why the wrong answers are tempting:**\n• Choice A ($2$): Check: $6(2) + 9(3) = 12 + 27 = 39 \\neq 36$.\n• Choice C ($4$): Check: $6(4) + 9(1) = 24 + 9 = 33 \\neq 36$.\n• Choice D ($5$): All trail mix: $6(5) = 30 \\neq 36$.\n\n**Test Day Takeaway:** For mixture problems, set up two equations (total quantity and total cost) and use substitution.",
          skills: ["systems-of-equations", "word-problems"]
        },
        {
          id: 8,
          type: "fill-in",
          difficulty: "medium",
          question: "If $f(x) = 2x^2 - 3x + 1$, what is the value of $f(3)$?",
          correctAnswer: "10",
          explanation: "**SAT Pattern: Function Evaluation**\n\n**The correct answer is 10.**\n\n**The Fast Way (15 seconds):** $f(3) = 2(9) - 3(3) + 1 = 18 - 9 + 1 = 10$.\n\n**The Full Solution:**\n$f(3) = 2(3)^2 - 3(3) + 1$\n$= 2(9) - 9 + 1$\n$= 18 - 9 + 1$\n$= 10$\n\n**Common Mistakes to Avoid:**\n• Computing $(2 \\cdot 3)^2 = 36$ instead of $2 \\cdot 3^2 = 18$\n• Sign error: $18 - 9 + 1 = 8$ (subtracting $1$ instead of adding)\n\n**Verification:** $f(3) = 18 - 9 + 1 = 10$ ✓\n\n**Test Day Takeaway:** Replace every $x$ with the input value. Follow order of operations carefully.",
          skills: ["function-evaluation", "quadratic-functions"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The table below shows the number of students who play different sports at a school.\n\n| Sport | Boys | Girls |\n|-------|------|-------|\n| Soccer | $30$ | $25$ |\n| Basketball | $20$ | $15$ |\n| Swimming | $10$ | $20$ |\n\nWhat fraction of the students who play swimming are boys?",
          choices: [
            { id: "A", text: "$\\frac{1}{12}$" },
            { id: "B", text: "$\\frac{1}{3}$" },
            { id: "C", text: "$\\frac{1}{2}$" },
            { id: "D", text: "$\\frac{2}{3}$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Two-Way Table Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Swimming total $= 10 + 20 = 30$. Boys in swimming $= 10$. Fraction $= \\frac{10}{30} = \\frac{1}{3}$.\n\n**The Full Solution:**\nTotal swimming students: $10 + 20 = 30$\nBoys in swimming: $10$\nFraction $= \\frac{10}{30} = \\frac{1}{3}$\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{1}{12}$): Dividing $10$ by total students ($120$).\n• Choice C ($\\frac{1}{2}$): Assuming equal split.\n• Choice D ($\\frac{2}{3}$): This is the girls' fraction of swimming.\n\n**Test Day Takeaway:** Read the table carefully. The denominator is the row/column total for the condition, not the grand total.",
          skills: ["two-way-tables", "probability"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A survey estimates that $62\\%$ of voters support a measure, with a margin of error of $\\pm 4\\%$. Which of the following is the best conclusion?",
          choices: [
            { id: "A", text: "Exactly $62\\%$ of all voters support the measure." },
            { id: "B", text: "Between $58\\%$ and $66\\%$ of all voters likely support the measure." },
            { id: "C", text: "At least $66\\%$ of all voters support the measure." },
            { id: "D", text: "Fewer than $58\\%$ of all voters support the measure." }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Margin of Error Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** $62\\% \\pm 4\\%$ gives the interval $[58\\%, 66\\%]$.\n\n**The Full Solution:**\nA margin of error of $\\pm 4\\%$ means the true proportion is likely between $62 - 4 = 58\\%$ and $62 + 4 = 66\\%$.\n\n**Why the wrong answers are tempting:**\n• Choice A: Surveys give estimates, not exact values.\n• Choice C: $66\\%$ is the upper bound, not a minimum.\n• Choice D: $58\\%$ is the lower bound, not a maximum.\n\n**Test Day Takeaway:** Margin of error creates a confidence interval: estimate $\\pm$ margin.",
          skills: ["margin-of-error", "statistics"]
        },
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If a line passes through the points $(0, 4)$ and $(6, 16)$, what is the slope of the line?",
          choices: [
            { id: "A", text: "$\\frac{1}{2}$" },
            { id: "B", text: "$2$" },
            { id: "C", text: "$3$" },
            { id: "D", text: "$6$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Slope $= \\frac{16 - 4}{6 - 0} = \\frac{12}{6} = 2$.\n\n**The Full Solution:**\n$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{16 - 4}{6 - 0} = \\frac{12}{6} = 2$\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{1}{2}$): Flipping the fraction (run over rise).\n• Choice C ($3$): Possibly from $\\frac{12}{4}$, a subtraction error.\n• Choice D ($6$): Using just the $x$-distance.\n\n**Test Day Takeaway:** Slope = rise over run = $\\frac{\\Delta y}{\\Delta x}$. Never flip it.",
          skills: ["slope", "linear-functions"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which of the following is equivalent to $(3x + 2)(x - 5)$?",
          choices: [
            { id: "A", text: "$3x^2 - 13x - 10$" },
            { id: "B", text: "$3x^2 - 15x + 2$" },
            { id: "C", text: "$3x^2 + 13x - 10$" },
            { id: "D", text: "$3x^2 - 17x - 10$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: FOIL / Expanding Binomials**\n\n**Choice A is correct.**\n\n**The Fast Way (30 seconds):** $(3x+2)(x-5) = 3x^2 - 15x + 2x - 10 = 3x^2 - 13x - 10$.\n\n**The Full Solution:**\nFirst: $3x \\cdot x = 3x^2$\nOuter: $3x \\cdot (-5) = -15x$\nInner: $2 \\cdot x = 2x$\nLast: $2 \\cdot (-5) = -10$\nCombine: $3x^2 - 15x + 2x - 10 = 3x^2 - 13x - 10$\n\n**Why the wrong answers are tempting:**\n• Choice B: Forgot the inner term $2x$.\n• Choice C: Sign error on the middle term ($+13x$ instead of $-13x$).\n• Choice D: Added $-15x - 2x = -17x$ instead of $-15x + 2x = -13x$.\n\n**Test Day Takeaway:** FOIL carefully and watch the signs when multiplying by a negative.",
          skills: ["polynomial-operations", "factoring"]
        },
        {
          id: 13,
          type: "fill-in",
          difficulty: "medium",
          question: "A triangle has angles measuring $x°$, $50°$, and $70°$. What is the value of $x$?",
          correctAnswer: "60",
          explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**The correct answer is 60.**\n\n**The Fast Way (10 seconds):** $x + 50 + 70 = 180$, so $x = 60$.\n\n**The Full Solution:**\nThe sum of angles in a triangle is $180°$.\n$x + 50 + 70 = 180$\n$x + 120 = 180$\n$x = 60$\n\n**Common Mistakes to Avoid:**\n• Using $360°$ instead of $180°$\n• Subtraction error: $180 - 120 = 50$ (getting confused with the other angle)\n\n**Verification:** $60 + 50 + 70 = 180$ ✓\n\n**Test Day Takeaway:** Triangle angles always sum to $180°$.",
          skills: ["triangles", "angles"]
        },
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A population of bacteria doubles every $3$ hours. If there are $500$ bacteria initially, which function models the population after $t$ hours?",
          choices: [
            { id: "A", text: "$P(t) = 500(2)^{t/3}$" },
            { id: "B", text: "$P(t) = 500(2)^{3t}$" },
            { id: "C", text: "$P(t) = 500 + 2t$" },
            { id: "D", text: "$P(t) = 1000^t$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** Doubles every $3$ hours means the base is $2$ and the exponent is $t/3$ (number of doubling periods). Initial value is $500$.\n\n**The Full Solution:**\nGeneral form: $P(t) = P_0 \\cdot b^{t/\\text{period}}$\n$P_0 = 500$, doubles means $b = 2$, period $= 3$ hours.\n$P(t) = 500(2)^{t/3}$\n\nCheck: At $t = 3$: $P(3) = 500 \\cdot 2^1 = 1000$ ✓ (doubled)\n\n**Why the wrong answers are tempting:**\n• Choice B: Uses $3t$ in the exponent, which would mean tripling the rate.\n• Choice C: Models linear growth, not exponential.\n• Choice D: Ignores the initial value and period entirely.\n\n**Test Day Takeaway:** For exponential growth: initial value times growth factor raised to $t$ divided by the period.",
          skills: ["exponential-functions"]
        },
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $|x - 3| = 7$, what is the sum of all possible values of $x$?",
          choices: [
            { id: "A", text: "$6$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$10$" },
            { id: "D", text: "$14$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** $x - 3 = 7$ gives $x = 10$. $x - 3 = -7$ gives $x = -4$. Sum $= 10 + (-4) = 6$.\n\n**The Full Solution:**\n$|x - 3| = 7$ means $x - 3 = 7$ or $x - 3 = -7$.\nCase 1: $x = 10$\nCase 2: $x = -4$\nSum $= 10 + (-4) = 6$\n\n**Why the wrong answers are tempting:**\n• Choice B ($4$): Only finding $x = -4 + ... $ or confusing the cases.\n• Choice C ($10$): Only using the positive case.\n• Choice D ($14$): Adding $10 + 4$ instead of $10 + (-4)$.\n\n**Test Day Takeaway:** Absolute value equations always give two cases. The sum of solutions for $|x - a| = b$ is always $2a$.",
          skills: ["absolute-value-equations", "solving-equations"]
        },
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The equation $y = x^2 - 8x + 12$ is graphed in the $xy$-plane. What is the $x$-coordinate of the vertex?",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$6$" },
            { id: "D", text: "$8$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Vertex of a Parabola**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** $x = \\frac{-b}{2a} = \\frac{-(-8)}{2(1)} = \\frac{8}{2} = 4$.\n\n**The Full Solution:**\nFor $y = ax^2 + bx + c$, vertex $x$-coordinate $= \\frac{-b}{2a}$.\n$a = 1, b = -8$: $x = \\frac{8}{2} = 4$.\n\nAlternatively, factor: $y = (x-2)(x-6)$. The vertex is midway between the roots: $\\frac{2+6}{2} = 4$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($2$): One of the $x$-intercepts.\n• Choice C ($6$): The other $x$-intercept.\n• Choice D ($8$): The value of $-b$, not $\\frac{-b}{2a}$.\n\n**Test Day Takeaway:** Vertex $x = \\frac{-b}{2a}$, or average the two roots.",
          skills: ["quadratic-functions", "vertex-form"]
        },
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "If $\\sqrt{3x + 7} = 5$, what is the value of $x$?",
          choices: [
            { id: "A", text: "$4$" },
            { id: "B", text: "$6$" },
            { id: "C", text: "$\\frac{32}{3}$" },
            { id: "D", text: "$18$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Solving a Radical Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** Square both sides: $3x + 7 = 25$. $3x = 18$. $x = 6$.\n\n**The Full Solution:**\n$\\sqrt{3x + 7} = 5$\n$(\\sqrt{3x + 7})^2 = 5^2$\n$3x + 7 = 25$\n$3x = 18$\n$x = 6$\n\n**Why the wrong answers are tempting:**\n• Choice A ($4$): Check: $\\sqrt{12 + 7} = \\sqrt{19} \\neq 5$.\n• Choice C ($\\frac{32}{3}$): From $3x = 32$, squaring $5$ as $32$ somehow.\n• Choice D ($18$): Using $3x = 18$ but then not dividing, or squaring again.\n\n**Test Day Takeaway:** Square both sides to remove a square root, then solve the resulting linear equation. Always check by plugging back in.",
          skills: ["radical-equations", "solving-equations"]
        },
        {
          id: 18,
          type: "fill-in",
          difficulty: "hard",
          question: "The perimeter of a square is $48$ inches. What is the area of the square, in square inches?",
          correctAnswer: "144",
          explanation: "**SAT Pattern: Perimeter to Area**\n\n**The correct answer is 144.**\n\n**The Fast Way (15 seconds):** Side $= 48 \\div 4 = 12$. Area $= 12^2 = 144$.\n\n**The Full Solution:**\nPerimeter of a square $= 4s$, so $4s = 48$ and $s = 12$.\nArea $= s^2 = 12^2 = 144$ square inches.\n\n**Common Mistakes to Avoid:**\n• Using $48^2 = 2304$ (squaring the perimeter, not the side)\n• Dividing by $2$ instead of $4$: side $= 24$, area $= 576$\n\n**Verification:** Perimeter $= 4(12) = 48$ ✓, Area $= 144$ ✓\n\n**Test Day Takeaway:** Find the side length first from the perimeter, then square it for the area.",
          skills: ["area"]
        },
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A cylinder has a radius of $4$ inches and a height of $10$ inches. What is the volume, in cubic inches, of the cylinder?",
          choices: [
            { id: "A", text: "$40\\pi$" },
            { id: "B", text: "$80\\pi$" },
            { id: "C", text: "$160\\pi$" },
            { id: "D", text: "$640\\pi$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Volume of a Cylinder**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** $V = \\pi r^2 h = \\pi(16)(10) = 160\\pi$.\n\n**The Full Solution:**\n$V = \\pi r^2 h = \\pi (4)^2 (10) = \\pi (16)(10) = 160\\pi$\n\n**Why the wrong answers are tempting:**\n• Choice A ($40\\pi$): From $\\pi(4)(10) = 40\\pi$, forgetting to square the radius.\n• Choice B ($80\\pi$): From $\\pi(8)(10)$, doubling $r$ instead of squaring.\n• Choice D ($640\\pi$): From $\\pi(4)^2(10) \\cdot 4$, an extra multiplication.\n\n**Test Day Takeaway:** Cylinder volume = $\\pi r^2 h$. The radius gets squared, not doubled. This formula is on the reference sheet.",
          skills: ["volume"]
        },
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The function $f$ is defined by $f(x) = a \\cdot b^x$, where $a$ and $b$ are constants. If $f(0) = 5$ and $f(2) = 45$, what is the value of $b$?",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$3$" },
            { id: "C", text: "$5$" },
            { id: "D", text: "$9$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Finding the Base of an Exponential Function**\n\n**Choice B is correct.**\n\n**The Fast Way (30 seconds):** $f(0) = a \\cdot b^0 = a = 5$. Then $f(2) = 5b^2 = 45$, so $b^2 = 9$, $b = 3$.\n\n**The Full Solution:**\nFrom $f(0) = 5$: $a \\cdot b^0 = a = 5$.\nFrom $f(2) = 45$: $5 \\cdot b^2 = 45$, so $b^2 = 9$, $b = 3$ (since $b > 0$ for exponential functions).\n\n**Why the wrong answers are tempting:**\n• Choice A ($2$): Guessing. Check: $5(4) = 20 \\neq 45$.\n• Choice C ($5$): Confusing $b$ with $a$.\n• Choice D ($9$): This is $b^2$, not $b$.\n\n**Test Day Takeaway:** Use $f(0)$ to find $a$ (since $b^0 = 1$), then use another point to find $b$.",
          skills: ["exponential-functions", "function-evaluation"]
        },
        {
          id: 21,
          type: "multiple-choice",
          difficulty: "hard",
          question: "For what value of $b$ does the equation $x^2 + bx + 9 = 0$ have exactly one real solution?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$6$" },
            { id: "C", text: "$9$" },
            { id: "D", text: "$18$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Discriminant for One Solution**\n\n**Choice B is correct.**\n\n**The Fast Way (30 seconds):** One solution means $b^2 - 4ac = 0$. Here $a = 1, c = 9$: $b^2 - 36 = 0$, so $b^2 = 36$, $b = 6$ (positive value).\n\n**The Full Solution:**\nDiscriminant $= b^2 - 4(1)(9) = b^2 - 36$.\nFor one solution: $b^2 - 36 = 0$, so $b = \\pm 6$.\nSince $6$ is among the choices, $b = 6$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): This is $\\sqrt{9}$, related to $c$ but not the discriminant.\n• Choice C ($9$): This is the value of $c$.\n• Choice D ($18$): From $2 \\times 9$, not using the discriminant formula.\n\n**Test Day Takeaway:** One real solution means discriminant $= 0$: $b^2 = 4ac$.",
          skills: ["discriminant", "quadratic-equations"]
        },
        {
          id: 22,
          type: "fill-in",
          difficulty: "hard",
          question: "In a right triangle, one leg has length $8$ and the hypotenuse has length $17$. What is the length of the other leg?",
          correctAnswer: "15",
          explanation: "**SAT Pattern: Pythagorean Theorem**\n\n**The correct answer is 15.**\n\n**The Fast Way (20 seconds):** $a^2 + 8^2 = 17^2$. $a^2 = 289 - 64 = 225$. $a = 15$.\n\n**The Full Solution:**\n$a^2 + b^2 = c^2$\n$a^2 + 64 = 289$\n$a^2 = 225$\n$a = 15$\n\nThis is the $8$-$15$-$17$ Pythagorean triple.\n\n**Common Mistakes to Avoid:**\n• Adding instead of subtracting: $289 + 64 = 353$\n• Forgetting to take the square root: answering $225$\n\n**Verification:** $8^2 + 15^2 = 64 + 225 = 289 = 17^2$ ✓\n\n**Test Day Takeaway:** Know common Pythagorean triples: $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$, $7$-$24$-$25$.",
          skills: ["triangles", "right-triangle-trig"]
        }
      ]
    }
  ]
};

export default practiceTest1;
