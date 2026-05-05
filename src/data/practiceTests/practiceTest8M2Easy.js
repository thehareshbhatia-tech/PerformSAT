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
      explanation: "**SAT Pattern: Percent of a Number**\n\n**The correct answer is $16$.**\n\n**The Fast Way (~5s):** $20\\%$ of $80 = 0.20 \\cdot 80 = 16$.\n\n**The Full Solution:**\nConvert percent to decimal: $20\\% = 0.20$.\nMultiply: $0.20 \\cdot 80 = 16$.\n\nAlternative method: $\\dfrac{20}{100} \\cdot 80 = \\dfrac{1}{5} \\cdot 80 = 16$.\n\n**Common Mistakes to Avoid:**\n* Forgetting to convert: $20 \\cdot 80 = 1600$.\n* Dividing instead of multiplying: $80 / 20 = 4$.\n\n**Test Day Takeaway:** \"Percent of a number\" $=$ percent (as decimal) $\\times$ number. Convert $X\\%$ to $\\dfrac{X}{100}$ or move the decimal two places left.",
      skills: ["percent-of-value", "percents"]
    },
    {
      id: 2,
      type: "multiple-choice",
      difficulty: "easy",
      band: 2,
      question: "If $\\dfrac{x}{4} = 7$, what is the value of $x$?",
      choices: [
        // distractor: divides instead of multiplies
        { id: "A", text: "$\\dfrac{7}{4}$" },
        // distractor: stops one step early — keeps as 7
        { id: "B", text: "$7$" },
        { id: "C", text: "$28$" },
        // distractor: subtracts instead
        { id: "D", text: "$3$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~3s):** Multiply both sides by $4$: $x = 7 \\cdot 4 = 28$.\n\n**The Full Solution:**\nTo isolate $x$, undo the division by $4$ by multiplying both sides by $4$:\n$\\dfrac{x}{4} = 7$\n$x = 7 \\cdot 4 = 28$.\n\nVerification: $\\dfrac{28}{4} = 7$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — divides $7$ by $4$ instead of multiplying.\n* Choice B: \"stops one step early\" — keeps the right side without operating.\n* Choice D: \"wrong operation\" — subtracts $4$ from $7$.\n\n**Test Day Takeaway:** To undo division, MULTIPLY. To undo subtraction, ADD. Always operate on BOTH sides equally.",
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
      explanation: "**SAT Pattern: Counting Values in a Data Set**\n\n**Choice B is correct.**\n\n**The Fast Way (~3s):** Count the elements: $\\{3, 7, 8, 12, 15\\}$ has $5$ values.\n\n**The Full Solution:**\nThe number of values in a data set is simply the count of distinct entries (unless duplicates are explicitly listed).\nThe set $\\{3, 7, 8, 12, 15\\}$ contains $5$ values.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — gives the maximum value.\n* Choice C: \"wrong base\" — gives the median (middle value).\n* Choice D: \"wrong base\" — gives the minimum.\n\n**Test Day Takeaway:** \"How many values\" asks for the COUNT of entries, not their sum or any specific value. Read questions carefully.",
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
      explanation: "**SAT Pattern: Percent Discount**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Pay $85\\%$ of original: $0.85 \\cdot 240 = 204$.\n\n**The Full Solution:**\nDiscount amount: $15\\%$ of $240 = 0.15 \\cdot 240 = 36$.\nDiscounted price: $240 - 36 = 204$.\n\nFaster shortcut: pay $100\\% - 15\\% = 85\\%$ of original. $0.85 \\cdot 240 = 204$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — subtracts $15$ dollars instead of $15\\%$.\n* Choice C: \"stops one step early\" — gives the discount amount only ($36$).\n* Choice D: \"wrong sign\" — adds the discount instead of subtracting.\n\n**Test Day Takeaway:** Discount: pay $(100 - X)\\%$ of original. Markup: pay $(100 + X)\\%$ of original. Decimal multiplication is faster than two-step subtract.",
      skills: ["percent-word-problems", "percents"]
    },
    {
      id: 5,
      type: "fill-in",
      difficulty: "medium",
      band: 4,
      question: "If $5(x + 3) = 35$, what is the value of $x$?",
      correctAnswer: "4",
      explanation: "**SAT Pattern: Linear Equation with Distribution**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~5s):** Divide by $5$ first: $x + 3 = 7 \\Rightarrow x = 4$.\n\n**The Full Solution:**\nMethod 1 (divide first):\n$5(x + 3) = 35 \\Rightarrow x + 3 = 7 \\Rightarrow x = 4$.\n\nMethod 2 (distribute first):\n$5x + 15 = 35 \\Rightarrow 5x = 20 \\Rightarrow x = 4$.\n\nBoth methods give the same answer; dividing first is usually faster.\n\n**Common Mistakes to Avoid:**\n* Adding $5$ to $3$ first ($35 - 8 = 27$, then dividing by $5$).\n* Forgetting that $35 / 5 = 7$, not $5$.\n\n**Test Day Takeaway:** When a number multiplies a parenthesis, you can either DIVIDE BOTH SIDES first or DISTRIBUTE first. Dividing first is usually cleaner when the right side is divisible.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 6,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "A right triangle has legs of length $5$ and $12$. What is the length of the hypotenuse?",
      choices: [
        // distractor: subtracts squares
        { id: "A", text: "$\\sqrt{119}$" },
        { id: "B", text: "$13$" },
        // distractor: adds without squaring
        { id: "C", text: "$17$" },
        // distractor: uses pythagorean for legs only
        { id: "D", text: "$169$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Pythagorean Theorem (5-12-13)**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Recognize the $5$-$12$-$13$ Pythagorean triple. Hypotenuse $= 13$.\n\n**The Full Solution:**\n$c^2 = 5^2 + 12^2 = 25 + 144 = 169$\n$c = \\sqrt{169} = 13$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong sign\" — subtracts squares: $\\sqrt{144 - 25} = \\sqrt{119}$.\n* Choice C: \"wrong operation\" — adds legs without squaring: $5 + 12 = 17$.\n* Choice D: \"stops one step early\" — gives $c^2 = 169$ instead of $c$.\n\n**Test Day Takeaway:** Memorize Pythagorean triples: $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$, $7$-$24$-$25$. Spotting them saves $20+$ seconds.",
      skills: ["pythagorean-theorem", "right-triangles"]
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
      explanation: "**SAT Pattern: Median of an Odd-Sized Data Set**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** With $7$ values already sorted, the median is the $4$th value, which is $8$.\n\n**The Full Solution:**\nThe median is the middle value of an ordered data set.\nFor $n = 7$ values, the middle position is $\\dfrac{7+1}{2} = 4$th.\nIn $\\{2, 4, 6, 8, 10, 12, 14\\}$, the $4$th value is $8$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"off-by-one\" — picks the value just below the middle.\n* Choice C: \"wrong base\" — picks the range ($14 - 2 = 12$).\n* Choice D: \"wrong base\" — picks the maximum value.\n\n**Test Day Takeaway:** Median position for ordered data: middle of an odd list is the $\\frac{n+1}{2}$th value. For an even list, it's the average of the two middle values.",
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
      explanation: "**SAT Pattern: Equation of a Line from Slope and Point**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Use $y = mx + b$ with $m = -2$. Plug in $(3, 4)$: $4 = -2(3) + b \\Rightarrow b = 10$. So $y = -2x + 10$.\n\n**The Full Solution:**\nUse point-slope form: $y - y_1 = m(x - x_1)$.\nWith $m = -2$ and $(x_1, y_1) = (3, 4)$:\n$y - 4 = -2(x - 3)$\n$y - 4 = -2x + 6$\n$y = -2x + 10$.\n\nVerification: at $(3, 4)$, $y = -2(3) + 10 = 4$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong sign\" — uses $+2$ instead of $-2$ for slope.\n* Choice C: \"stops one step early\" — uses $y = -2x + 4$ (just the $y$-coordinate as intercept).\n* Choice D: \"wrong sign\" — sign error in computing $b$.\n\n**Test Day Takeaway:** To write a line equation from slope $m$ and point $(x_1, y_1)$: substitute into $y = mx + b$ and solve for $b$. Or use point-slope form directly.",
      skills: ["slope-intercept-form", "linear-functions"]
    },
    {
      id: 9,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A juice container holds $32$ ounces. If $1$ cup equals $8$ ounces, how many cups does the container hold?",
      correctAnswer: "4",
      explanation: "**SAT Pattern: Unit Conversion**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~5s):** $\\dfrac{32 \\text{ oz}}{8 \\text{ oz/cup}} = 4$ cups.\n\n**The Full Solution:**\nUse dimensional analysis:\n$32 \\text{ oz} \\cdot \\dfrac{1 \\text{ cup}}{8 \\text{ oz}} = \\dfrac{32}{8} = 4$ cups.\n\nUnits cancel: oz $\\cdot \\dfrac{\\text{cup}}{\\text{oz}} = $ cup. \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Multiplying $32 \\cdot 8 = 256$ (using the wrong direction of conversion).\n* Adding $32 + 8 = 40$.\n\n**Test Day Takeaway:** When converting units, set up the conversion factor so the original units CANCEL. \"$1$ cup $= 8$ oz\" means $\\frac{1 \\text{ cup}}{8 \\text{ oz}}$ or $\\frac{8 \\text{ oz}}{1 \\text{ cup}}$, depending on direction.",
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
      explanation: "**SAT Pattern: Solving for the Input Given the Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $3c + 2 = 17 \\Rightarrow 3c = 15 \\Rightarrow c = 5$.\n\n**The Full Solution:**\nGiven $f(c) = 17$ and $f(x) = 3x + 2$:\n$3c + 2 = 17$\n$3c = 15$\n$c = 5$.\n\nVerification: $f(5) = 3(5) + 2 = 17$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives $3c = 15$ instead of $c = 5$.\n* Choice C: \"applies the inverse operation\" — divides $17$ by $3$ without subtracting $2$.\n* Choice D: \"wrong sign\" — adds $2$ to $17$ instead of subtracting.\n\n**Test Day Takeaway:** $f(c) = $ value $\\Rightarrow$ replace $f(x)$ with the value, then solve for $c$. The variable name doesn't change the procedure.",
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
      explanation: "**SAT Pattern: Area of a Circle**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Area $= \\pi r^2 = \\pi (6)^2 = 36\\pi$.\n\n**The Full Solution:**\nArea of a circle: $A = \\pi r^2$.\n$A = \\pi (6)^2 = 36\\pi$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — gives circumference $C = 2\\pi r = 12\\pi$.\n* Choice C: \"wrong base\" — uses $\\pi \\cdot 2 \\cdot r^2$.\n* Choice D: \"applies the inverse operation\" — uses diameter squared: $\\pi (2r)^2 = 4\\pi r^2$.\n\n**Test Day Takeaway:** Area $= \\pi r^2$ uses the RADIUS squared. Circumference $= 2\\pi r$. If diameter is given, divide by $2$ to get the radius first.",
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
      explanation: "**SAT Pattern: FOIL — Multiplying Two Binomials**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** FOIL: $x^2 - 2x + 4x - 8 = x^2 + 2x - 8$.\n\n**The Full Solution:**\nFOIL (First, Outer, Inner, Last):\n* First: $x \\cdot x = x^2$\n* Outer: $x \\cdot (-2) = -2x$\n* Inner: $4 \\cdot x = 4x$\n* Last: $4 \\cdot (-2) = -8$\n\nSum: $x^2 - 2x + 4x - 8 = x^2 + 2x - 8$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — drops the cross terms entirely.\n* Choice C: \"wrong sign\" — sign error on the cross term.\n* Choice D: \"wrong base\" — adds the constants $4 + 2 = 6$ instead of $-2 + 4 = 2$.\n\n**Test Day Takeaway:** FOIL gives FOUR products. The middle term is the SUM of Outer + Inner; track signs carefully.",
      skills: ["distributive-property", "polynomial-operations"]
    },
    {
      id: 13,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The line $y = 3x - 4$ passes through the point $(a, 5)$. What is the value of $a$?",
      correctAnswer: "3",
      explanation: "**SAT Pattern: Finding x Given y on a Line**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~10s):** Set $y = 5$: $5 = 3a - 4 \\Rightarrow 3a = 9 \\Rightarrow a = 3$.\n\n**The Full Solution:**\nThe point $(a, 5)$ is on the line, so substitute $x = a$, $y = 5$:\n$5 = 3a - 4$\n$9 = 3a$\n$a = 3$.\n\nVerification: at $x = 3$: $y = 3(3) - 4 = 5$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Substituting $5$ for $x$ instead of $y$: $y = 3(5) - 4 = 11$ (gives the wrong variable).\n* Forgetting to add $4$: $a = \\frac{5}{3}$.\n\n**Test Day Takeaway:** When a point $(a, b)$ lies on a curve $y = f(x)$, the first coordinate is $x$ and the second is $y$. Substitute and solve for the unknown.",
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
      explanation: "**SAT Pattern: Exponent Laws (Product and Quotient)**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Add exponents in numerator: $6 + 4 = 10$. Subtract denominator: $10 - 2 = 8$. So $x^8$.\n\n**The Full Solution:**\nProduct rule (same base): $x^a \\cdot x^b = x^{a+b}$.\nQuotient rule (same base): $\\dfrac{x^a}{x^b} = x^{a-b}$.\n\n$\\dfrac{x^6 \\cdot x^4}{x^2} = \\dfrac{x^{6+4}}{x^2} = \\dfrac{x^{10}}{x^2} = x^{10-2} = x^8$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong operation\" — multiplies exponents in numerator.\n* Choice C: \"wrong sign\" — subtracts the wrong direction: $6 + 4 - 6 = 4$ or similar error.\n* Choice D: \"stops one step early\" — adds all three without dividing.\n\n**Test Day Takeaway:** Multiply same-base $\\Rightarrow$ ADD exponents. Divide same-base $\\Rightarrow$ SUBTRACT exponents. The base stays the same.",
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
      explanation: "**SAT Pattern: Algebraic Manipulation of Ratios**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $\\dfrac{a + b}{b} = \\dfrac{a}{b} + 1 = \\dfrac{3}{5} + 1 = \\dfrac{8}{5}$.\n\n**The Full Solution:**\nSplit the fraction:\n$\\dfrac{a + b}{b} = \\dfrac{a}{b} + \\dfrac{b}{b} = \\dfrac{a}{b} + 1 = \\dfrac{3}{5} + 1 = \\dfrac{3}{5} + \\dfrac{5}{5} = \\dfrac{8}{5}$.\n\nAlternative method: pick numbers. If $a = 3$ and $b = 5$, then $\\dfrac{a + b}{b} = \\dfrac{3 + 5}{5} = \\dfrac{8}{5}$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — uses $a$ as denominator: $\\frac{8}{3}$.\n* Choice C: \"stops one step early\" — repeats the original ratio.\n* Choice D: \"wrong sign\" — subtracts instead of adds.\n\n**Test Day Takeaway:** Split fractions: $\\dfrac{p + q}{r} = \\dfrac{p}{r} + \\dfrac{q}{r}$. Or pick easy numbers consistent with the given ratio and compute directly.",
      skills: ["ratios", "proportions"]
    },
    {
      id: 16,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A movie theater has $24$ rows of seats with $18$ seats in each row. If $5\\%$ of the seats are reserved for staff, how many seats are reserved?",
      correctAnswer: "21.6",
      explanation: "**SAT Pattern: Multi-Step Percent**\n\n**The correct answer is $21.6$.**\n\n**The Fast Way (~10s):** Total seats $= 24 \\cdot 18 = 432$. $5\\%$ of $432 = 0.05 \\cdot 432 = 21.6$.\n\n**The Full Solution:**\nStep 1: total seats $= 24 \\text{ rows} \\times 18 \\text{ seats/row} = 432$ seats.\nStep 2: $5\\%$ of $432 = 0.05 \\cdot 432 = 21.6$.\n\n(In a real theater this would round to a whole number, but the SAT may report a decimal answer.)\n\n**Common Mistakes to Avoid:**\n* Multiplying $24 + 18 = 42$ instead of multiplying ($24 \\cdot 18$).\n* Treating $5\\%$ as $5$ (e.g., $432 - 5 = 427$).\n\n**Test Day Takeaway:** Two-step problems: solve in order. (1) Find the relevant total. (2) Apply the percent or fraction.",
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
      explanation: "**SAT Pattern: Two-Variable Word Problem**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Let smaller $= x$, larger $= 4x$. Then $x + 4x = 30 \\Rightarrow 5x = 30 \\Rightarrow x = 6$. Larger $= 4(6) = 24$.\n\n**The Full Solution:**\nLet $x$ = smaller number. Then larger $= 4x$.\nSum: $x + 4x = 30 \\Rightarrow 5x = 30 \\Rightarrow x = 6$.\nLarger number $= 4x = 4(6) = 24$.\n\nVerification: $6 + 24 = 30$ \\checkmark and $24 = 4 \\cdot 6$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives the smaller number.\n* Choice C: \"wrong base\" — gives the difference $24 - 6 = 18$.\n* Choice D: \"wrong base\" — uses incorrect ratio split.\n\n**Test Day Takeaway:** When one quantity is a multiple of another, define the SMALLER variable as $x$. The phrase \"$4$ times the other\" means multiply the smaller by $4$ to get the larger.",
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
      explanation: "**SAT Pattern: Similar Triangles — Side Ratios**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Scale factor: $\\dfrac{DE}{AB} = \\dfrac{9}{6} = \\dfrac{3}{2}$. Then $EF = \\dfrac{3}{2} \\cdot BC = \\dfrac{3}{2} \\cdot 8 = 12$.\n\n**The Full Solution:**\nIn similar triangles, corresponding sides are in proportion.\n$\\dfrac{AB}{DE} = \\dfrac{BC}{EF}$\n$\\dfrac{6}{9} = \\dfrac{8}{EF}$\n$6 \\cdot EF = 9 \\cdot 8 = 72$\n$EF = 12$.\n\nVerification: ratio $\\frac{DE}{AB} = \\frac{9}{6} = 1.5$ matches $\\frac{EF}{BC} = \\frac{12}{8} = 1.5$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong operation\" — subtracts the difference: $9 - 6 = 3$, then $8 - 3 = 5$.\n* Choice C: \"stops one step early\" — keeps original length without scaling.\n* Choice D: \"applies the inverse operation\" — uses the ratio backwards: $\\frac{2}{3} \\cdot 8 = \\frac{16}{3}$.\n\n**Test Day Takeaway:** In similar figures, corresponding sides are proportional. Set up $\\dfrac{\\text{small}}{\\text{small}} = \\dfrac{\\text{big}}{\\text{big}}$ (matched corners) and cross-multiply.",
      skills: ["similar-triangles", "triangles"]
    },
    {
      id: 19,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "If $2x + 3y = 12$ and $4x + 3y = 18$, what is the value of $x$?",
      correctAnswer: "3",
      explanation: "**SAT Pattern: Linear System by Elimination**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~10s):** Subtract equation 1 from equation 2: $(4x + 3y) - (2x + 3y) = 18 - 12 \\Rightarrow 2x = 6 \\Rightarrow x = 3$.\n\n**The Full Solution:**\nThe $y$-coefficients are equal, so subtract to eliminate:\n$(4x + 3y) - (2x + 3y) = 18 - 12$\n$2x = 6$\n$x = 3$.\n\nVerification: from equation 1, $2(3) + 3y = 12 \\Rightarrow 3y = 6 \\Rightarrow y = 2$.\nCheck equation 2: $4(3) + 3(2) = 12 + 6 = 18$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Adding the equations: $(4x + 3y) + (2x + 3y) = 6x + 6y = 30$ (doesn't eliminate anything).\n* Subtracting in the wrong order: $(2x + 3y) - (4x + 3y) = -2x = -6$, so $x = 3$. Same answer, but careful with signs.\n\n**Test Day Takeaway:** Elimination works when one variable's coefficients are EQUAL or OPPOSITE. Equal coefficients $\\Rightarrow$ SUBTRACT. Opposite coefficients $\\Rightarrow$ ADD.",
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
      explanation: "**SAT Pattern: Radians to Degrees**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $\\pi$ radians $= 180^{\\circ}$, so $\\dfrac{\\pi}{4} = \\dfrac{180}{4} = 45^{\\circ}$.\n\n**The Full Solution:**\nConversion factor: $\\pi \\text{ rad} = 180^{\\circ}$.\n$\\dfrac{\\pi}{4} \\text{ rad} \\cdot \\dfrac{180^{\\circ}}{\\pi \\text{ rad}} = \\dfrac{180}{4} = 45^{\\circ}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — drops the $\\pi$ term and reports just $\\frac{1}{4}$.\n* Choice C: \"wrong base\" — uses $90^{\\circ}/4$ instead of $180^{\\circ}/4$.\n* Choice D: \"wrong base\" — uses the full conversion $\\frac{\\pi}{2} = 90^{\\circ}$.\n\n**Test Day Takeaway:** $\\pi$ rad $= 180^{\\circ}$. To convert radians to degrees, multiply by $\\dfrac{180^{\\circ}}{\\pi}$. Common values: $\\frac{\\pi}{6} = 30^{\\circ}$, $\\frac{\\pi}{4} = 45^{\\circ}$, $\\frac{\\pi}{3} = 60^{\\circ}$, $\\frac{\\pi}{2} = 90^{\\circ}$.",
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
      explanation: "**SAT Pattern: Solving for a Coefficient Given a Root**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $f(2) = 4 + 2b + 12 = 0 \\Rightarrow 2b = -16 \\Rightarrow b = -8$.\n\n**The Full Solution:**\n$f(2) = (2)^2 + b(2) + 12 = 4 + 2b + 12 = 2b + 16 = 0$\n$2b = -16 \\Rightarrow b = -8$.\n\nVerification: $f(x) = x^2 - 8x + 12 = (x - 2)(x - 6)$. So $f(2) = 0$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong sign\" — drops the negative.\n* Choice C: \"stops one step early\" — gives $2b$ instead of $b$.\n* Choice D: \"applies the inverse operation\" — divides $-16$ by $4$ (the squared term) instead of by $2$.\n\n**Test Day Takeaway:** \"$f(a) = 0$\" means $a$ is a root. Substitute $x = a$, set the expression to $0$, and solve for the unknown coefficient.",
      skills: ["function-evaluation", "quadratic-equations"]
    },
    {
      id: 22,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "A scatterplot shows that as $x$ increases, $y$ tends to decrease. The line of best fit has slope $-2.5$. If $x$ increases by $4$, by approximately how many units does the predicted value of $y$ change? (Give your answer as a positive number.)",
      correctAnswer: "10",
      explanation: "**SAT Pattern: Slope as Rate of Change**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~10s):** $\\Delta y = m \\cdot \\Delta x = -2.5 \\cdot 4 = -10$. The MAGNITUDE of the change is $10$.\n\n**The Full Solution:**\nSlope $= \\dfrac{\\Delta y}{\\Delta x}$, so $\\Delta y = m \\cdot \\Delta x = (-2.5)(4) = -10$.\n\nThe predicted $y$ DECREASES by $10$ units. The question asks for a positive number, so the answer is $10$.\n\n**Common Mistakes to Avoid:**\n* Reporting $-10$ when the question explicitly asks for a positive number.\n* Adding instead of multiplying: $-2.5 + 4 = 1.5$.\n* Using $|{-2.5}| / 4 = 0.625$ (dividing instead of multiplying).\n\n**Test Day Takeaway:** Slope $\\times$ change in $x$ $=$ change in $y$. Read the question carefully: a negative slope means $y$ DECREASES; the magnitude of the change is the absolute value.",
      skills: ["slope", "linear-functions"]
    }
  ]
};

export default practiceTest8M2Easy;
