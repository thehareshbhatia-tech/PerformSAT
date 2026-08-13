// Practice Test 8 — Math Module 2 Easy variant (22 questions)
// For students routed to easier path after Module 1 (~<60% correct).
// Distribution: 3E / 13M / 6H. Q1-3 easy openers. Max-score ceiling: ~650.
// Domain mix: 7 Algebra / 6 Advanced Math / 5 Problem-Solving / 4 Geometry & Trig.

export const practiceTest8M2Easy = {
  id: "module-2-easy",
  title: "Module 2 (Easy)",
  variant: "easy",
  timeLimit: 35,
  questions: [
    {
      id: 1,
      type: "fill-in",
      difficulty: "easy",
      band: 2,
      question: "What is $20\\%$ of $80$?",
      correctAnswer: "16",
      explanation: "**SAT Pattern: Percent of a Number**\n\n**The correct answer is $16$.**\n\n**The Fast Way (~5s):** $20\\%$ is $\\frac{1}{5}$, and $\\frac{1}{5}$ of $80$ is $16$.\n\n**The Full Solution:**\nStep 1: Convert the percent to a decimal: $20\\% = 0.20$.\nStep 2: Multiply by the number: $0.20 \\cdot 80 = 16$.\n\n**Common Mistakes:** Forgetting to convert and computing $20 \\cdot 80 = 1600$; dividing instead of multiplying and getting $80 \\div 20 = 4$.\n\n**Test Day Takeaway:** \"Percent of a number\" means multiply: turn $X\\%$ into $\\frac{X}{100}$ (or shift the decimal two places left), then multiply by the number.",
      skills: ["percent-of-value", "percents"]
    },
    {
      id: 2,
      type: "multiple-choice",
      difficulty: "easy",
      band: 2,
      question: "Which value of $w$ is the solution of the equation $2w = w + 11$?",
      choices: [
        // distractor: treats the equation as 2w = 11
        { id: "A", text: "$\\dfrac{11}{2}$" },
        // distractor: multiplies 11 by 2
        { id: "B", text: "$22$" },
        { id: "C", text: "$11$" },
        // distractor: sign slip when moving w across
        { id: "D", text: "$-11$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Variable on Both Sides**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Subtract $w$ from both sides: $2w - w = 11$, so $w = 11$.\n\n**The Full Solution:**\nStep 1: The variable appears on both sides, so gather it on one side. Subtract $w$ from both sides of $2w = w + 11$.\nStep 2: $2w - w = 11 \\Rightarrow w = 11$.\nStep 3: Check: $2(11) = 22$ and $11 + 11 = 22$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\dfrac{11}{2}$): ignores the $w$ on the right and solves $2w = 11$.\n* Choice B ($22$): reports $2w$, the value of each side, instead of $w$ itself.\n* Choice D ($-11$): flips the sign while moving the $w$ across the equals sign.\n\n**Test Day Takeaway:** When the variable shows up on both sides, subtract to collect it on one side first — only then divide.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 3,
      type: "multiple-choice",
      difficulty: "easy",
      band: 3,
      question: "The data set $\\{3, 7, 8, 12, 15\\}$ has how many values?",
      choices: [
        // distractor: gives the maximum
        { id: "A", text: "$15$" },
        { id: "B", text: "$5$" },
        // distractor: gives the median
        { id: "C", text: "$8$" },
        // distractor: gives the minimum
        { id: "D", text: "$3$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Counting Values in a Data Set**\n\n**Choice B is correct.**\n\n**The Fast Way (~3s):** Count the entries in $\\{3, 7, 8, 12, 15\\}$: there are $5$.\n\n**The Full Solution:**\nStep 1: \"How many values\" asks for the number of entries, not their sum or any single entry.\nStep 2: List them out: $3, 7, 8, 12, 15$ — that is $5$ values.\n\n**Why the wrong answers are tempting:**\n* Choice A ($15$): reports the largest value instead of the count.\n* Choice C ($8$): reports the median (middle value) instead of the count.\n* Choice D ($3$): reports the smallest value instead of the count.\n\n**Test Day Takeaway:** \"How many values\" means count the entries. Don't confuse the count with the max, min, or median.",
      skills: ["statistics"]
    },
    {
      id: 4,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "A bicycle costs $\\$240$. A bike shop offers a $15\\%$ discount. What is the discounted price, in dollars?",
      choices: [
        // distractor: subtracts 15 from 240
        { id: "A", text: "$\\$225$" },
        { id: "B", text: "$\\$204$" },
        // distractor: gives just the discount amount
        { id: "C", text: "$\\$36$" },
        // distractor: applies 15% discount but keeps full
        { id: "D", text: "$\\$276$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Percent Discount**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** A $15\\%$ discount means you pay $85\\%$: $0.85 \\cdot 240 = 204$, so the price is $\\$204$.\n\n**The Full Solution:**\nStep 1: The discount is $15\\%$ of $\\$240$: $0.15 \\cdot 240 = 36$ dollars.\nStep 2: Subtract from the original: $240 - 36 = 204$, so the discounted price is $\\$204$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$225$): subtracted $\\$15$ instead of $15\\%$ of the price.\n* Choice C ($\\$36$): reported the discount amount, not the new price.\n* Choice D ($\\$276$): added the discount instead of subtracting it.\n\n**Test Day Takeaway:** For a discount, pay $(100 - X)\\%$ of the original; for a markup, pay $(100 + X)\\%$. Multiplying by the single decimal factor beats the two-step subtraction.",
      skills: ["percent-word-problems", "percents"]
    },
    {
      id: 5,
      type: "fill-in",
      difficulty: "medium",
      band: 4,
      question: "Twice a number, decreased by $7$, is equal to the number increased by $5$. What is the number?",
      correctAnswer: "12",
      explanation: "**SAT Pattern: Translating a Sentence with the Variable on Both Sides**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~10s):** Translate: $2n - 7 = n + 5$. Subtract $n$: $n - 7 = 5$, so $n = 12$.\n\n**The Full Solution:**\nStep 1: Let $n$ be the number. \"Twice a number, decreased by $7$\" is $2n - 7$; \"the number increased by $5$\" is $n + 5$.\nStep 2: Set them equal: $2n - 7 = n + 5$.\nStep 3: Subtract $n$ from both sides: $n - 7 = 5$, then add $7$: $n = 12$.\nStep 4: Check: $2(12) - 7 = 17$ and $12 + 5 = 17$. $\\checkmark$\n\n**Common Mistakes:** Translating \"decreased by $7$\" as $7 - 2n$ (order matters in subtraction); or combining the $7$ and $5$ by subtraction to get $n = 2$.\n\n**Test Day Takeaway:** Translate phrase by phrase before solving. \"Twice a number decreased by $7$\" means $2n - 7$ — the subtraction comes after the doubling.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 6,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "A triangle has a base of length $10$ and an area of $35$. What is the height of the triangle drawn to that base?",
      choices: [
        // distractor: forgets the 1/2 in the area formula — 35/10
        { id: "A", text: "$3.5$" },
        { id: "B", text: "$7$" },
        // distractor: doubles the correct height
        { id: "C", text: "$14$" },
        // distractor: subtracts the base from the area
        { id: "D", text: "$25$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Solving the Triangle Area Formula for Height**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $A = \\frac{1}{2}bh \\Rightarrow 35 = \\frac{1}{2}(10)h = 5h \\Rightarrow h = 7$.\n\n**The Full Solution:**\nStep 1: Start with the triangle area formula $A = \\frac{1}{2}bh$.\nStep 2: Substitute what is known: $35 = \\frac{1}{2}(10)h$, which simplifies to $35 = 5h$.\nStep 3: Divide by $5$: $h = 7$.\nStep 4: Check: $\\frac{1}{2}(10)(7) = 35$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3.5$): forgets the $\\frac{1}{2}$ and solves $10h = 35$.\n* Choice C ($14$): applies the $\\frac{1}{2}$ in the wrong direction, doubling instead of halving the base's effect.\n* Choice D ($25$): subtracts the base from the area, $35 - 10$ — the formula multiplies, it never subtracts.\n\n**Test Day Takeaway:** Area formulas run backward too: substitute what you know into $A = \\frac{1}{2}bh$ and solve for the missing dimension.",
      skills: ["area", "triangles"]
    },
    {
      id: 7,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "What is the median of the data set $\\{2, 4, 6, 8, 10, 12, 14\\}$?",
      choices: [
        // distractor: gives the mean (which is also 8)
        { id: "A", text: "$7$" },
        { id: "B", text: "$8$" },
        // distractor: gives the range
        { id: "C", text: "$12$" },
        // distractor: gives the max
        { id: "D", text: "$14$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Median of an Odd-Sized Data Set**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** The list is already sorted with $7$ values, so the median is the $4$th: $8$.\n\n**The Full Solution:**\nStep 1: For $n = 7$ ordered values, the middle position is $\\frac{7+1}{2} = 4$.\nStep 2: The $4$th value in $\\{2, 4, 6, 8, 10, 12, 14\\}$ is $8$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): averaged neighbors or slipped one position below the middle.\n* Choice C ($12$): reported the range ($14 - 2$) instead of the median.\n* Choice D ($14$): reported the maximum value.\n\n**Test Day Takeaway:** For an ordered odd-length list, the median is the $\\frac{n+1}{2}$th value; for an even-length list, average the two middle values.",
      skills: ["find-median", "statistics"]
    },
    {
      id: 8,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A line in the $xy$-plane has slope $-2$ and passes through the point $(3, 4)$. Which of the following is the equation of the line?",
      choices: [
        // distractor: uses positive slope
        { id: "A", text: "$y = 2x - 2$" },
        { id: "B", text: "$y = -2x + 10$" },
        // distractor: stops at point-slope without simplifying
        { id: "C", text: "$y = -2x + 4$" },
        // distractor: swaps point coords
        { id: "D", text: "$y = -2x - 10$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Equation of a Line from Slope and Point**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Use $y = mx + b$ with $m = -2$ and $(3, 4)$: $4 = -2(3) + b \\Rightarrow b = 10$, so $y = -2x + 10$.\n\n**The Full Solution:**\nStep 1: Start from $y = -2x + b$ and substitute the point $(3, 4)$: $4 = -2(3) + b = -6 + b$.\nStep 2: Solve for the intercept: $b = 10$, giving $y = -2x + 10$. Check: $-2(3) + 10 = 4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = 2x - 2$): used $+2$ for the slope instead of $-2$.\n* Choice C ($y = -2x + 4$): used the point's $y$-coordinate as the intercept without solving.\n* Choice D ($y = -2x - 10$): sign-slipped when solving for $b$.\n\n**Test Day Takeaway:** Given slope $m$ and a point, plug the point into $y = mx + b$ and solve for $b$ — one substitution gives the whole equation.",
      skills: ["slope-intercept-form", "linear-functions"]
    },
    {
      id: 9,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A juice container holds $32$ ounces. If $1$ cup equals $8$ ounces, how many cups does the container hold?",
      correctAnswer: "4",
      explanation: "**SAT Pattern: Unit Conversion**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~5s):** Divide total ounces by ounces per cup: $\\frac{32}{8} = 4$ cups.\n\n**The Full Solution:**\nStep 1: Set up the conversion so ounces cancel: $32 \\text{ oz} \\cdot \\frac{1 \\text{ cup}}{8 \\text{ oz}}$.\nStep 2: $\\frac{32}{8} = 4$ cups.\n\n**Common Mistakes:** Multiplying $32 \\cdot 8 = 256$ by flipping the conversion factor; adding $32 + 8 = 40$.\n\n**Test Day Takeaway:** Arrange the conversion factor so the unit you start with cancels, leaving only the unit you want.",
      skills: ["unit-conversion"]
    },
    {
      id: 10,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "If $f(x) = 3x + 2$ and $f(c) = 17$, what is the value of $c$?",
      choices: [
        // distractor: stops one step early
        { id: "A", text: "$15$" },
        { id: "B", text: "$5$" },
        // distractor: divides 17 by 3
        { id: "C", text: "$\\dfrac{17}{3}$" },
        // distractor: adds instead of subtracts
        { id: "D", text: "$\\dfrac{19}{3}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Solving for the Input Given the Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Set $3c + 2 = 17$, so $3c = 15$ and $c = 5$.\n\n**The Full Solution:**\nStep 1: $f(c) = 17$ means $3c + 2 = 17$.\nStep 2: Subtract $2$: $3c = 15$. Divide by $3$: $c = 5$. Check: $f(5) = 3(5) + 2 = 17$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($15$): stopped at $3c = 15$ without dividing by $3$.\n* Choice C ($\\frac{17}{3}$): divided $17$ by $3$ without first subtracting $2$.\n* Choice D ($\\frac{19}{3}$): added $2$ to $17$ instead of subtracting it.\n\n**Test Day Takeaway:** When given the output, set the function equal to that value and solve for the input. Undo the constant before the coefficient.",
      skills: ["function-evaluation", "linear-equations"]
    },
    {
      id: 11,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A circle has a radius of $6$. What is the area of the circle?",
      choices: [
        // distractor: gives circumference
        { id: "A", text: "$12\\pi$" },
        { id: "B", text: "$36\\pi$" },
        // distractor: doubles the radius squared
        { id: "C", text: "$72\\pi$" },
        // distractor: gives diameter squared
        { id: "D", text: "$144\\pi$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Area of a Circle**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $A = \\pi r^2 = \\pi (6)^2 = 36\\pi$.\n\n**The Full Solution:**\nStep 1: The area of a circle is $A = \\pi r^2$.\nStep 2: Substitute $r = 6$: $A = \\pi (6)^2 = 36\\pi$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($12\\pi$): computed the circumference $2\\pi r = 12\\pi$ instead of the area.\n* Choice C ($72\\pi$): used $2\\pi r^2$ — an extra factor of $2$.\n* Choice D ($144\\pi$): squared the diameter instead of the radius: $\\pi(2r)^2 = 144\\pi$.\n\n**Test Day Takeaway:** Area uses the radius squared, $\\pi r^2$; circumference uses $2\\pi r$. If you're given the diameter, halve it first.",
      skills: ["circle-area", "circles"]
    },
    {
      id: 12,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "Which of the following is equivalent to $(x + 4)(x - 2)$?",
      choices: [
        // distractor: forgets the cross term
        { id: "A", text: "$x^2 - 8$" },
        { id: "B", text: "$x^2 + 2x - 8$" },
        // distractor: wrong sign on cross term
        { id: "C", text: "$x^2 - 2x - 8$" },
        // distractor: adds inside parentheses
        { id: "D", text: "$x^2 + 6x - 8$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: FOIL — Multiplying Two Binomials**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** FOIL: $x^2 - 2x + 4x - 8 = x^2 + 2x - 8$.\n\n**The Full Solution:**\nStep 1: Multiply each pair — First $x \\cdot x = x^2$, Outer $x \\cdot (-2) = -2x$, Inner $4 \\cdot x = 4x$, Last $4 \\cdot (-2) = -8$.\nStep 2: Combine the middle terms: $-2x + 4x = 2x$, giving $x^2 + 2x - 8$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($x^2 - 8$): dropped the cross terms entirely.\n* Choice C ($x^2 - 2x - 8$): combined the middle terms with the wrong sign.\n* Choice D ($x^2 + 6x - 8$): added the constants $4 + 2$ for the middle term instead of $-2 + 4$.\n\n**Test Day Takeaway:** FOIL produces four products; the middle coefficient is the sum of the Outer and Inner terms, so track those signs carefully.",
      skills: ["distributive-property", "polynomial-operations"]
    },
    {
      id: 13,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The line $y = 3x - 4$ passes through the point $(a, 5)$. What is the value of $a$?",
      correctAnswer: "3",
      explanation: "**SAT Pattern: Finding x Given y on a Line**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~10s):** The point $(a, 5)$ has $y = 5$, so set $3x - 4 = 5$: $3a = 9$, $a = 3$.\n\n**The Full Solution:**\nStep 1: The point $(a, 5)$ lies on the line, so its coordinates satisfy $y = 3x - 4$. Here $x = a$ and $y = 5$.\nStep 2: Substitute: $5 = 3a - 4$.\nStep 3: Add $4$ to both sides: $9 = 3a$. Divide by $3$: $a = 3$.\n\nCheck: at $x = 3$, $y = 3(3) - 4 = 5$. $\\checkmark$\n\n**Common Mistakes:** Plugging $5$ in for $x$ instead of $y$ gives $y = 3(5) - 4 = 11$ — the wrong coordinate. Forgetting to add the $4$ before dividing lands on $a = \\frac{5}{3}$.\n\n**Test Day Takeaway:** A point $(a, b)$ on $y = f(x)$ means the first coordinate is the $x$-value and the second is the $y$-value. Match them to the equation before you solve.",
      skills: ["linear-functions", "function-evaluation"]
    },
    {
      id: 14,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "Which of the following is equivalent to $\\dfrac{x^6 \\cdot x^4}{x^2}$ for $x \\neq 0$?",
      choices: [
        // distractor: divides exponents instead of subtracting
        { id: "A", text: "$x^{12}$" },
        { id: "B", text: "$x^{8}$" },
        // distractor: subtracts wrong way
        { id: "C", text: "$x^{4}$" },
        // distractor: adds all three exponents
        { id: "D", text: "$x^{10}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Exponent Laws (Product and Quotient)**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Same base, so combine the exponents: $6 + 4 - 2 = 8$. The answer is $x^8$.\n\n**The Full Solution:**\nStep 1: Product rule on the numerator: $x^6 \\cdot x^4 = x^{6+4} = x^{10}$.\nStep 2: Quotient rule with the denominator: $\\dfrac{x^{10}}{x^2} = x^{10-2} = x^8$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($x^{12}$): multiplied the numerator exponents ($6 \\times 4 = 24$, or some product slip) instead of adding them.\n* Choice C ($x^4$): subtracted in the wrong place, dropping too much.\n* Choice D ($x^{10}$): stopped at the numerator and forgot to divide by $x^2$.\n\n**Test Day Takeaway:** Same base means multiply $\\Rightarrow$ ADD exponents, divide $\\Rightarrow$ SUBTRACT exponents. The base never changes.",
      skills: ["exponent-laws", "exponent-rules"]
    },
    {
      id: 15,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "If $\\dfrac{a}{b} = \\dfrac{3}{5}$, what is the value of $\\dfrac{a + b}{b}$?",
      choices: [
        // distractor: adds top and bottom of original
        { id: "A", text: "$\\dfrac{8}{3}$" },
        { id: "B", text: "$\\dfrac{8}{5}$" },
        // distractor: drops the addition
        { id: "C", text: "$\\dfrac{3}{5}$" },
        // distractor: subtracts instead
        { id: "D", text: "$\\dfrac{2}{5}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Algebraic Manipulation of Ratios**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Split the fraction: $\\dfrac{a+b}{b} = \\dfrac{a}{b} + 1 = \\dfrac{3}{5} + 1 = \\dfrac{8}{5}$.\n\n**The Full Solution:**\nStep 1: Break the single fraction into two: $\\dfrac{a+b}{b} = \\dfrac{a}{b} + \\dfrac{b}{b}$.\nStep 2: $\\dfrac{b}{b} = 1$ and $\\dfrac{a}{b} = \\dfrac{3}{5}$, so the sum is $\\dfrac{3}{5} + 1 = \\dfrac{3}{5} + \\dfrac{5}{5} = \\dfrac{8}{5}$.\n\nOr pick numbers: $a = 3$, $b = 5$ gives $\\dfrac{3+5}{5} = \\dfrac{8}{5}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{8}{3}$): put $a$ in the denominator instead of $b$.\n* Choice C ($\\frac{3}{5}$): stopped at the original ratio and forgot to add $1$.\n* Choice D ($\\frac{2}{5}$): subtracted, computing $\\frac{a-b}{b}$-style instead of adding.\n\n**Test Day Takeaway:** Split a fraction over a common denominator: $\\dfrac{p+q}{r} = \\dfrac{p}{r} + \\dfrac{q}{r}$. Or substitute easy numbers that fit the given ratio.",
      skills: ["ratios", "proportions"]
    },
    {
      id: 16,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A movie theater has $24$ rows of seats with $18$ seats in each row. If $5\\%$ of the seats are reserved for staff, how many seats are reserved?",
      correctAnswer: "21.6",
      explanation: "**SAT Pattern: Multi-Step Percent**\n\n**The correct answer is $21.6$.**\n\n**The Fast Way (~10s):** Total seats $= 24 \\cdot 18 = 432$. Then $5\\%$ of $432 = 0.05 \\cdot 432 = 21.6$.\n\n**The Full Solution:**\nStep 1: Find the total number of seats: $24$ rows $\\times$ $18$ seats per row $= 432$.\nStep 2: Take $5\\%$ of that total: $0.05 \\cdot 432 = 21.6$.\n\n**Common Mistakes:** Adding the dimensions ($24 + 18 = 42$) instead of multiplying. Treating $5\\%$ as a flat $5$ (e.g., $432 - 5 = 427$) rather than as $0.05$.\n\n**Test Day Takeaway:** Two-step problems run in order: first find the total the percent acts on, then multiply by the decimal form of the percent.",
      skills: ["percent-of-value", "percents"]
    },
    {
      id: 17,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "The sum of two numbers is $30$, and one number is $4$ times the other. What is the larger number?",
      choices: [
        // distractor: gives the smaller number
        { id: "A", text: "$6$" },
        { id: "B", text: "$24$" },
        // distractor: gives the difference
        { id: "C", text: "$18$" },
        // distractor: gives total times 4/5 then divides
        { id: "D", text: "$20$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Two-Variable Word Problem**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Let the smaller number be $x$ and the larger be $4x$. Then $x + 4x = 30 \\Rightarrow 5x = 30 \\Rightarrow x = 6$, so the larger is $4(6) = 24$.\n\n**The Full Solution:**\nStep 1: Let $x$ be the smaller number. \"One number is $4$ times the other\" makes the larger $4x$.\nStep 2: Their sum is $30$: $x + 4x = 5x = 30$, so $x = 6$.\nStep 3: The larger number is $4x = 4(6) = 24$.\n\nCheck: $6 + 24 = 30$ and $24 = 4 \\cdot 6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): reports the smaller number instead of the larger one the question asks for.\n* Choice C ($18$): gives the difference $24 - 6 = 18$.\n* Choice D ($20$): comes from splitting $30$ by an incorrect ratio.\n\n**Test Day Takeaway:** When one quantity is a multiple of another, set the SMALLER one as $x$ so the multiple stays whole. \"$4$ times the other\" means multiply $x$ by $4$ to get the larger.",
      skills: ["word-problem-to-equation", "linear-equations"]
    },
    {
      id: 18,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "Triangle $ABC$ is similar to triangle $DEF$. If $AB = 6$, $DE = 9$, and $BC = 8$, what is the length of $EF$?",
      choices: [
        // distractor: subtracts ratios
        { id: "A", text: "$5$" },
        { id: "B", text: "$12$" },
        // distractor: keeps same length
        { id: "C", text: "$8$" },
        // distractor: uses inverse ratio
        { id: "D", text: "$\\dfrac{16}{3}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Similar Triangles — Side Ratios**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The scale factor from $ABC$ to $DEF$ is $\\dfrac{DE}{AB} = \\dfrac{9}{6} = \\dfrac{3}{2}$. So $EF = \\dfrac{3}{2} \\cdot BC = \\dfrac{3}{2} \\cdot 8 = 12$.\n\n**The Full Solution:**\nStep 1: Corresponding sides of similar triangles are proportional: $\\dfrac{AB}{DE} = \\dfrac{BC}{EF}$.\nStep 2: Substitute the known lengths: $\\dfrac{6}{9} = \\dfrac{8}{EF}$.\nStep 3: Cross-multiply: $6 \\cdot EF = 9 \\cdot 8 = 72$, so $EF = 12$.\n\nCheck: $\\dfrac{EF}{BC} = \\dfrac{12}{8} = \\dfrac{3}{2}$, matching $\\dfrac{DE}{AB} = \\dfrac{9}{6} = \\dfrac{3}{2}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): subtracted the difference ($9 - 6 = 3$, then $8 - 3 = 5$) instead of scaling.\n* Choice C ($8$): left $BC$ unchanged, forgetting to apply the scale factor.\n* Choice D ($\\frac{16}{3}$): used the ratio upside down, multiplying $8$ by $\\frac{2}{3}$ instead of $\\frac{3}{2}$.\n\n**Test Day Takeaway:** In similar figures, set up matched-corner proportions: $\\dfrac{\\text{side of small}}{\\text{side of small}} = \\dfrac{\\text{matching side of big}}{\\text{matching side of big}}$, then cross-multiply.",
      skills: ["similar-triangles", "triangles"]
    },
    {
      id: 19,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "If $2x + 3y = 12$ and $4x + 3y = 18$, what is the value of $x$?",
      correctAnswer: "3",
      explanation: "**SAT Pattern: Linear System by Elimination**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~10s):** The $y$-terms are identical, so subtract the equations: $(4x + 3y) - (2x + 3y) = 18 - 12$ gives $2x = 6$, so $x = 3$.\n\n**The Full Solution:**\nStep 1: Both equations have $3y$, so subtracting eliminates $y$.\nStep 2: $(4x + 3y) - (2x + 3y) = 18 - 12 \\Rightarrow 2x = 6$.\nStep 3: Divide by $2$: $x = 3$.\n\nCheck: from equation 1, $2(3) + 3y = 12 \\Rightarrow y = 2$; then $4(3) + 3(2) = 18$. $\\checkmark$\n\n**Common Mistakes:** Adding the equations instead of subtracting ($6x + 6y = 30$) eliminates nothing. Subtracting in the reverse order gives $-2x = -6$ — still $x = 3$, but watch the signs.\n\n**Test Day Takeaway:** Elimination works when a variable's coefficients match or are opposite. Equal coefficients $\\Rightarrow$ SUBTRACT; opposite coefficients $\\Rightarrow$ ADD.",
      skills: ["elimination-method", "systems-of-equations"]
    },
    {
      id: 20,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "An angle measures $\\dfrac{\\pi}{4}$ radians. What is the measure of the angle in degrees?",
      choices: [
        // distractor: divides by π instead of converting
        { id: "A", text: "$\\dfrac{1}{4}$" },
        { id: "B", text: "$45$" },
        // distractor: uses 90 in the conversion
        { id: "C", text: "$22.5$" },
        // distractor: confuses with full circle conversion
        { id: "D", text: "$90$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Radians to Degrees**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $\\pi$ radians $= 180^\\circ$, so $\\dfrac{\\pi}{4} = \\dfrac{180^\\circ}{4} = 45^\\circ$.\n\n**The Full Solution:**\nStep 1: Use the conversion $\\pi$ rad $= 180^\\circ$, which means $1$ rad $= \\dfrac{180^\\circ}{\\pi}$.\nStep 2: Multiply: $\\dfrac{\\pi}{4} \\cdot \\dfrac{180^\\circ}{\\pi} = \\dfrac{180^\\circ}{4} = 45^\\circ$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{4}$): dropped the $\\pi$ and reported the bare fraction with no conversion.\n* Choice C ($22.5$): divided $90^\\circ$ by $4$ instead of $180^\\circ$ by $4$.\n* Choice D ($90$): treated the angle as $\\frac{\\pi}{2}$, which is $90^\\circ$.\n\n**Test Day Takeaway:** To convert radians to degrees, multiply by $\\dfrac{180^\\circ}{\\pi}$. Memorize the anchors: $\\frac{\\pi}{6} = 30^\\circ$, $\\frac{\\pi}{4} = 45^\\circ$, $\\frac{\\pi}{3} = 60^\\circ$, $\\frac{\\pi}{2} = 90^\\circ$.",
      skills: ["radians-to-degrees", "radians-degrees"]
    },
    {
      id: 21,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "A function $f$ is defined by $f(x) = x^2 + bx + 12$. If $f(2) = 0$, what is the value of $b$?",
      choices: [
        // distractor: wrong sign
        { id: "A", text: "$8$" },
        { id: "B", text: "$-8$" },
        // distractor: doesn't divide by 2
        { id: "C", text: "$-16$" },
        // distractor: stops one step early
        { id: "D", text: "$-4$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Solving for a Coefficient Given a Root**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $f(2) = 4 + 2b + 12 = 0$, so $2b = -16$ and $b = -8$.\n\n**The Full Solution:**\nStep 1: $f(2) = 0$ means substituting $x = 2$ makes the expression zero.\nStep 2: $f(2) = (2)^2 + b(2) + 12 = 4 + 2b + 12 = 2b + 16$.\nStep 3: Set it to $0$: $2b + 16 = 0 \\Rightarrow 2b = -16 \\Rightarrow b = -8$.\n\nCheck: $f(x) = x^2 - 8x + 12 = (x-2)(x-6)$, so $f(2) = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): solved correctly in magnitude but dropped the negative sign.\n* Choice C ($-16$): stopped at $2b = -16$ and never divided by $2$.\n* Choice D ($-4$): divided $-16$ by $4$ (the squared term) instead of by the coefficient $2$.\n\n**Test Day Takeaway:** \"$f(a) = 0$\" tells you $a$ is a root. Plug $x = a$ in, set the result to $0$, and solve for the unknown coefficient.",
      skills: ["function-evaluation", "quadratic-equations"]
    },
    {
      id: 22,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "The scatterplot below shows data with a line of best fit that has slope $-2.5$. If $x$ increases by $4$, by approximately how many units does the predicted value of $y$ change? (Give your answer as a positive number.)",
      diagram: { type: "scatterplot", params: {
        points: [[1,46],[2,42],[3,40],[4,38],[5,32],[6,32],[7,28],[8,26],[9,18],[10,18],[11,12],[12,12]],
        xMin: 0, xMax: 14, yMin: 0, yMax: 55,
        xGridStep: 1, yGridStep: 5, xLabelStep: 2, yLabelStep: 10,
        bestFitLine: { slope: -2.5, intercept: 50 },
      } },
      correctAnswer: "10",
      explanation: "**SAT Pattern: Slope as Rate of Change**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~10s):** $\\Delta y = m \\cdot \\Delta x = -2.5 \\cdot 4 = -10$. The question wants a positive number, so report the magnitude, $10$.\n\n**The Full Solution:**\nStep 1: Slope is the rate of change: $m = \\dfrac{\\Delta y}{\\Delta x}$, so $\\Delta y = m \\cdot \\Delta x$.\nStep 2: With $m = -2.5$ and $\\Delta x = 4$: $\\Delta y = (-2.5)(4) = -10$.\nStep 3: The predicted $y$ drops by $10$ units. Since the prompt asks for a positive number, the answer is $10$.\n\n**Common Mistakes:** Reporting $-10$ when the question explicitly asks for a positive value. Adding instead of multiplying ($-2.5 + 4 = 1.5$). Dividing instead of multiplying ($\\frac{2.5}{4} = 0.625$).\n\n**Test Day Takeaway:** Change in $y$ equals slope $\\times$ change in $x$. A negative slope means $y$ decreases; the size of that change is the absolute value.",
      skills: ["slope", "linear-functions"]
    }
  ]
};

export default practiceTest8M2Easy;
