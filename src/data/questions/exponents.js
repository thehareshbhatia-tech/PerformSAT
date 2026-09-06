// Practice questions for Exponents module
// Questions are organized by SECTION (question type)

export const exponentsQuestions = {
  // Section: Laws of Exponents
  "Laws of Exponents": [
    {
      id: 1,
      difficulty: "easy",
      question: "For all positive values of $a$, the expression $a^6 \\cdot a^5$ is equivalent to which of the following?",
      choices: [
        // distractor: subtracts the exponents
        { id: "A", text: "$a$" },
        { id: "B", text: "$a^{11}$" },
        // distractor: adds the coefficients too
        { id: "C", text: "$2a^{11}$" },
        // distractor: multiplies the exponents
        { id: "D", text: "$a^{30}$" }
      ],
      correctAnswer: "B",
      hint: "Identify which operation is being performed on the two powers before touching the exponents.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** Same base, multiplication, so add the exponents: $a^{6+5} = a^{11}$.\n\n**The Full Solution:**\nStep 1: The product rule for powers with the same base is $a^m \\cdot a^n = a^{m+n}$.\nStep 2: Apply it: $a^6 \\cdot a^5 = a^{6+5}$.\nStep 3: The result is $a^{11}$. Check by counting factors: six copies of $a$ times five copies of $a$ is eleven copies of $a$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($a$): subtracts the exponents, $6 - 5$, which is the rule for division, not multiplication.\n* Choice C ($2a^{11}$): adds the two understood coefficients of $1$; coefficients multiply, and $1 \\cdot 1 = 1$.\n* Choice D ($a^{30}$): multiplies the exponents, which is the rule for a power raised to a power.\n\n**Test Day Takeaway:** Match the operation to the rule first: multiply the powers and you add the exponents, divide them and you subtract.",
      skills: ["exponent-laws"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "For all positive values of $x$, the expression $\\left(x^5\\right)^3$ is equivalent to which of the following?",
      choices: [
        // distractor: adds the exponents
        { id: "A", text: "$x^8$" },
        { id: "B", text: "$x^{15}$" },
        // distractor: pulls the outer exponent down as a coefficient
        { id: "C", text: "$3x^5$" },
        // distractor: cubes the inner exponent
        { id: "D", text: "$x^{125}$" }
      ],
      correctAnswer: "B",
      hint: "Writing the expression out as three identical factors settles which rule applies.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** A power raised to a power multiplies the exponents: $\\left(x^5\\right)^3 = x^{5 \\cdot 3} = x^{15}$.\n\n**The Full Solution:**\nStep 1: The power-of-a-power rule is $\\left(x^m\\right)^n = x^{mn}$.\nStep 2: Apply it: $\\left(x^5\\right)^3 = x^{5 \\cdot 3}$.\nStep 3: The result is $x^{15}$. Check by expanding: $x^5 \\cdot x^5 \\cdot x^5 = x^{5+5+5} = x^{15}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($x^8$): adds the exponents, the rule for $x^5 \\cdot x^3$ rather than for $\\left(x^5\\right)^3$.\n* Choice C ($3x^5$): brings the outer exponent down as a coefficient instead of applying it as a power.\n* Choice D ($x^{125}$): computes $5^3 = 125$ and uses that as the exponent.\n\n**Test Day Takeaway:** Nested parentheses mean multiply the exponents. If you are unsure, expand the outer power once and the addition inside does the rest.",
      skills: ["exponent-laws"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "For all positive values of $x$ and $y$, the expression $\\dfrac{24x^7y^3}{6x^2y^3}$ is equivalent to which of the following?",
      choices: [
        { id: "A", text: "$4x^5$" },
        // distractor: adds the y exponents
        { id: "B", text: "$4x^5y^6$" },
        // distractor: adds the x exponents
        { id: "C", text: "$4x^9$" },
        // distractor: subtracts the coefficients
        { id: "D", text: "$18x^5$" }
      ],
      correctAnswer: "A",
      hint: "Handle the numbers and each variable as separate, independent divisions.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~20s):** $\\frac{24}{6} = 4$, $\\frac{x^7}{x^2} = x^5$, and $\\frac{y^3}{y^3} = 1$, so the quotient is $4x^5$.\n\n**The Full Solution:**\nStep 1: Divide the coefficients: $\\frac{24}{6} = 4$.\nStep 2: Divide the powers of $x$ by subtracting exponents: $x^{7-2} = x^5$.\nStep 3: The powers of $y$ are identical, so $y^{3-3} = y^0 = 1$, leaving $4x^5$. Check at $x = y = 1$: the original is $\\frac{24}{6} = 4$, and $4(1)^5 = 4$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($4x^5y^6$): adds the $y$-exponents instead of subtracting them, so a factor that should cancel survives.\n* Choice C ($4x^9$): adds the $x$-exponents, $7 + 2$, applying the product rule to a quotient.\n* Choice D ($18x^5$): subtracts the coefficients, $24 - 6$, instead of dividing them.\n\n**Test Day Takeaway:** In a quotient of monomials, coefficients divide and exponents subtract. Treat each base on its own line of work.",
      skills: ["exponent-laws"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "For every value of $x$ with $x \\ne 0$, the expression $\\dfrac{x^{-3}}{x^{-7}}$ is equivalent to which of the following?",
      choices: [
        // distractor: adds the exponents
        { id: "A", text: "$x^{-10}$" },
        // distractor: subtracts in the wrong order
        { id: "B", text: "$x^{-4}$" },
        { id: "C", text: "$x^4$" },
        // distractor: ignores both negative signs
        { id: "D", text: "$x^{10}$" }
      ],
      correctAnswer: "C",
      hint: "If the negatives feel slippery, rewrite each power with a positive exponent before dividing.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~20s):** Subtract exponents: $x^{-3 - (-7)} = x^{4}$.\n\n**The Full Solution:**\nStep 1: The quotient rule is $\\frac{x^m}{x^n} = x^{m-n}$, with $m = -3$ and $n = -7$.\nStep 2: Compute the exponent: $-3 - (-7) = -3 + 7 = 4$.\nStep 3: The expression equals $x^4$. Check by clearing the negatives first: $\\frac{x^{-3}}{x^{-7}} = \\frac{x^7}{x^3} = x^4$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($x^{-10}$): adds the exponents, $-3 + (-7)$, instead of subtracting.\n* Choice B ($x^{-4}$): subtracts in the wrong order, computing $-7 - (-3) = -4$.\n* Choice D ($x^{10}$): drops both negative signs and adds $3 + 7$.\n\n**Test Day Takeaway:** A negative exponent in the denominator becomes positive in the numerator. Flipping first turns the sign work into ordinary subtraction.",
      skills: ["zero-negative-exponents"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "For all positive values of $x$ and $y$, the expression $\\left(\\dfrac{8x^6}{y^{-3}}\\right)^{\\frac{2}{3}}$ is equivalent to which of the following?",
      choices: [
        // distractor: drops the negative sign on the y exponent
        { id: "A", text: "$\\dfrac{4x^4}{y^2}$" },
        { id: "B", text: "$4x^4y^2$" },
        // distractor: multiplies 8 by two-thirds
        { id: "C", text: "$\\dfrac{16x^4y^2}{3}$" },
        // distractor: never raises the coefficient
        { id: "D", text: "$8x^4y^2$" }
      ],
      correctAnswer: "B",
      hint: "Clear the negative exponent out of the denominator before the outer power is applied.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~50s):** The inside is $8x^6y^3$; raising each factor to the $\\frac{2}{3}$ power gives $4x^4y^2$.\n\n**The Full Solution:**\nStep 1: A negative exponent in the denominator moves to the numerator: $\\frac{8x^6}{y^{-3}} = 8x^6y^3$.\nStep 2: Distribute the outer exponent over every factor: $8^{\\frac{2}{3}}\\left(x^6\\right)^{\\frac{2}{3}}\\left(y^3\\right)^{\\frac{2}{3}}$.\nStep 3: $8^{\\frac{2}{3}} = \\left(\\sqrt[3]{8}\\right)^2 = 2^2 = 4$, $x^{6 \\cdot \\frac{2}{3}} = x^4$, and $y^{3 \\cdot \\frac{2}{3}} = y^2$, so the expression is $4x^4y^2$. Check at $x = y = 1$: the original is $8^{\\frac{2}{3}} = 4$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{4x^4}{y^2}$): drops the negative sign and treats the denominator as $y^3$, so $\\left(y^3\\right)^{\\frac{2}{3}} = y^2$ stays underneath instead of moving up.\n* Choice C ($\\frac{16x^4y^2}{3}$): multiplies $8$ by $\\frac{2}{3}$ instead of raising $8$ to the $\\frac{2}{3}$ power.\n* Choice D ($8x^4y^2$): applies the outer exponent to the variables but leaves the coefficient $8$ untouched.\n\n**Test Day Takeaway:** A rational exponent is a root and a power: the denominator takes the root, the numerator raises it. The coefficient obeys the same rule as the variables.",
      skills: ["exponent-laws"]
    }
  ],

  // Section: Comparing Exponential Expressions
  "Comparing Exponential Expressions": [
    {
      id: 1,
      difficulty: "easy",
      question: "Each of the following expressions is a power of a positive integer. Which of these expressions has the greatest value?",
      choices: [
        // distractor: picks the largest exponent
        { id: "A", text: "$2^5$" },
        { id: "B", text: "$3^4$" },
        // distractor: assumes a larger base wins
        { id: "C", text: "$4^3$" },
        // distractor: compares base times exponent
        { id: "D", text: "$7^2$" }
      ],
      correctAnswer: "B",
      hint: "None of these is hard to evaluate — evaluate all four before choosing.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** $2^5 = 32$, $3^4 = 81$, $4^3 = 64$, and $7^2 = 49$, so $3^4$ is the largest.\n\n**The Full Solution:**\nStep 1: Evaluate each power: $2^5 = 32$ and $3^4 = 81$.\nStep 2: Evaluate the rest: $4^3 = 64$ and $7^2 = 49$.\nStep 3: Compare $32$, $81$, $64$, and $49$; the greatest is $81$, so the answer is $3^4$. Check: $81 > 64$, the nearest competitor.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2^5 = 32$): picks the expression with the largest exponent, but the smallest base holds it back.\n* Choice C ($4^3 = 64$): assumes a larger base beats a larger exponent and stops before checking $3^4$.\n* Choice D ($7^2 = 49$): compares $b \\times n$ instead of $b^n$; $7 \\times 2 = 14$ is the largest such product, but the value is not.\n\n**Test Day Takeaway:** Neither the base nor the exponent alone decides the size of a power. When the numbers are small, just compute all four.",
      skills: ["comparing-exponentials"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "In the equation $3^n = 243$, $n$ is a positive integer. What is the value of $n$?",
      choices: [
        // distractor: reports the base
        { id: "A", text: "$3$" },
        // distractor: stops one factor short
        { id: "B", text: "$4$" },
        { id: "C", text: "$5$" },
        // distractor: divides 243 by 3
        { id: "D", text: "$81$" }
      ],
      correctAnswer: "C",
      hint: "Multiply by $3$ and keep count until you reach $243$.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** $3^5 = 243$, so $n = 5$.\n\n**The Full Solution:**\nStep 1: List the powers of $3$: $3^1 = 3$, $3^2 = 9$, $3^3 = 27$.\nStep 2: Continue: $3^4 = 81$ and $3^5 = 243$.\nStep 3: The exponent that produces $243$ is $n = 5$. Check: $81 \\cdot 3 = 243$, so one more factor past $3^4$ is exactly right.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): reports the base rather than the exponent.\n* Choice B ($4$): stops one factor short at $3^4 = 81$.\n* Choice D ($81$): divides $243$ by $3$ and reports the quotient instead of the exponent.\n\n**Test Day Takeaway:** For a small base, listing the powers is faster and safer than guessing. Answer the question asked: the exponent, not the value.",
      skills: ["comparing-exponentials", "exponent-laws"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "The expressions $2^{12}$ and $8^k$ are equal, where $k$ is a constant. What is the value of $k$?",
      choices: [
        // distractor: reports the rewriting exponent
        { id: "A", text: "$3$" },
        { id: "B", text: "$4$" },
        // distractor: subtracts 3 from 12
        { id: "C", text: "$9$" },
        // distractor: multiplies 12 by 3
        { id: "D", text: "$36$" }
      ],
      correctAnswer: "B",
      hint: "Rewrite both sides as powers of the same base.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~30s):** $8 = 2^3$, so $8^k = 2^{3k}$; setting $3k = 12$ gives $k = 4$.\n\n**The Full Solution:**\nStep 1: Write $8$ as a power of $2$: $8 = 2^3$.\nStep 2: Then $8^k = \\left(2^3\\right)^k = 2^{3k}$, so $2^{3k} = 2^{12}$.\nStep 3: Equal powers of the same base have equal exponents, so $3k = 12$ and $k = 4$. Check: $8^4 = 4{,}096 = 2^{12}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): reports the exponent used to rewrite $8$ as $2^3$ rather than solving for $k$.\n* Choice C ($9$): subtracts, computing $12 - 3$, as if the bases were being divided.\n* Choice D ($36$): multiplies $12$ by $3$ instead of dividing.\n\n**Test Day Takeaway:** Common base, then compare exponents. Rewriting one side is almost always faster than taking logarithms.",
      skills: ["comparing-exponentials"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "If $x$ is a number such that $0 < x < 1$, which of the following expressions has the greatest value?",
      choices: [
        // distractor: assumes a bigger exponent means a bigger value
        { id: "A", text: "$x^4$" },
        // distractor: same habit, one step less extreme
        { id: "B", text: "$x^2$" },
        // distractor: assumes no power can exceed the base
        { id: "C", text: "$x$" },
        { id: "D", text: "$\\sqrt{x}$" }
      ],
      correctAnswer: "D",
      hint: "Test a convenient value such as $x = \\frac{1}{4}$ and compare.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~30s):** For a base between $0$ and $1$, larger exponents give smaller values, so the smallest exponent wins: $\\sqrt{x} = x^{\\frac{1}{2}}$.\n\n**The Full Solution:**\nStep 1: When $0 < x < 1$, multiplying by $x$ makes a number smaller, so $x^4 < x^2 < x$.\nStep 2: Since $\\sqrt{x} = x^{\\frac{1}{2}}$ and $\\frac{1}{2} < 1$, the square root is larger than $x$ itself.\nStep 3: The order is $x^4 < x^2 < x < \\sqrt{x}$, so $\\sqrt{x}$ is greatest. Check at $x = \\frac{1}{4}$: the values are $\\frac{1}{256}$, $\\frac{1}{16}$, $\\frac{1}{4}$, and $\\frac{1}{2}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($x^4$): applies the habit that a bigger exponent means a bigger value, which is true only for bases greater than $1$.\n* Choice B ($x^2$): the same habit, one step less extreme; at $x = \\frac{1}{4}$ it is only $\\frac{1}{16}$.\n* Choice C ($x$): assumes no power of $x$ can exceed $x$, overlooking that a fractional exponent enlarges a number between $0$ and $1$.\n\n**Test Day Takeaway:** Between $0$ and $1$ the size order of powers reverses. Testing $x = \\frac{1}{4}$ settles the comparison in seconds.",
      skills: ["comparing-exponentials", "exponent-laws"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "The equation $9^{x + 1} = 27^{x - 1}$ is true for exactly one value of $x$, where $x$ is a real number. What is the value of $x$?",
      choices: [
        // distractor: sign slip isolating x
        { id: "A", text: "$-5$" },
        // distractor: reads the right exponent as x plus 1
        { id: "B", text: "$-1$" },
        // distractor: distributes to the variable only
        { id: "C", text: "$2$" },
        { id: "D", text: "$5$" }
      ],
      correctAnswer: "D",
      hint: "Both $9$ and $27$ are powers of the same base.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~50s):** Writing both sides base $3$ gives $3^{2(x+1)} = 3^{3(x-1)}$, so $2x + 2 = 3x - 3$ and $x = 5$.\n\n**The Full Solution:**\nStep 1: Rewrite each side with base $3$: $9^{x+1} = \\left(3^2\\right)^{x+1} = 3^{2x+2}$ and $27^{x-1} = \\left(3^3\\right)^{x-1} = 3^{3x-3}$.\nStep 2: Equal powers of $3$ force equal exponents: $2x + 2 = 3x - 3$.\nStep 3: Subtract $2x$ from both sides to get $2 = x - 3$, so $x = 5$. Check: $9^6 = 3^{12}$ and $27^4 = 3^{12}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): reaches $2x + 2 = 3x - 3$ but drops a sign while isolating $x$.\n* Choice B ($-1$): reads the right side as $27^{x+1}$, producing $2x + 2 = 3x + 3$.\n* Choice C ($2$): distributes the new exponent to the variable only, producing $2x + 1 = 3x - 1$.\n\n**Test Day Takeaway:** Convert to a common base, then distribute the outer exponent across the entire binomial exponent — constant included.",
      skills: ["comparing-exponentials", "exponent-laws"]
    }
  ],

  // Section: Exponential Functions
  "Exponential Functions": [
    {
      id: 1,
      difficulty: "easy",
      question: "For the function $f$, the table lists the value of $f(x)$ at four values of $x$. Which of the following best describes $f$?",
      diagram: { type: "table", params: { xHeader: "x", yHeader: "f(x)", rows: [["0", "5"], ["1", "15"], ["2", "45"], ["3", "135"]] } },
      choices: [
        // distractor: reads the table bottom to top
        { id: "A", text: "Decreasing linear" },
        // distractor: right pattern, wrong direction
        { id: "B", text: "Decreasing exponential" },
        // distractor: sees growth but not its shape
        { id: "C", text: "Increasing linear" },
        { id: "D", text: "Increasing exponential" }
      ],
      correctAnswer: "D",
      hint: "Compare the differences between consecutive values with the ratios between them.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~25s):** Each value is $3$ times the one before it, and the values are rising, so $f$ is an increasing exponential function.\n\n**The Full Solution:**\nStep 1: The differences between consecutive values are $10$, $30$, and $90$, which are not constant, so $f$ is not linear.\nStep 2: The ratios are $\\frac{15}{5} = 3$, $\\frac{45}{15} = 3$, and $\\frac{135}{45} = 3$, a constant multiplier — the signature of an exponential function.\nStep 3: Because the multiplier is greater than $1$, the values increase, so $f$ is an increasing exponential function. Check: $f(x) = 5(3)^x$ reproduces every entry in the table.\n\n**Why the wrong answers are tempting:**\n* Choice A (Decreasing linear): reads the table from the bottom up, where the values appear to fall.\n* Choice B (Decreasing exponential): spots the constant ratio but reverses the direction of the change.\n* Choice C (Increasing linear): notices that the values grow and stops there, without checking whether they grow by a constant amount.\n\n**Test Day Takeaway:** Constant differences mean linear; constant ratios mean exponential. Compute one of each before you name the model.",
      skills: ["exponential-growth-decay"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "The table gives the number of cells in a laboratory culture at three times, where $t$ is the number of hours since the culture was prepared. The number of cells triples every hour. How many cells are in the culture when $t = 5$?",
      diagram: { type: "table", params: { xHeader: "t (hours)", yHeader: "Number of cells", rows: [["0", "40"], ["1", "120"], ["2", "360"]] } },
      choices: [
        // distractor: treats the growth as linear
        { id: "A", text: "$600$" },
        // distractor: uses four triplings
        { id: "B", text: "$3{,}240$" },
        { id: "C", text: "$9{,}720$" },
        // distractor: uses six triplings
        { id: "D", text: "$29{,}160$" }
      ],
      correctAnswer: "C",
      hint: "Count how many triplings separate $t = 0$ from $t = 5$.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~30s):** Five triplings from $40$ give $40 \\cdot 3^5 = 40(243) = 9{,}720$ cells.\n\n**The Full Solution:**\nStep 1: The table starts at $40$ cells when $t = 0$, and each hour multiplies the count by $3$.\nStep 2: After $t$ hours the count is $40(3)^t$; the table confirms this, since $40(3)^2 = 360$.\nStep 3: At $t = 5$: $40(3)^5 = 40(243) = 9{,}720$ cells. Check: continuing the table gives $1{,}080$, then $3{,}240$, then $9{,}720$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($600$): multiplies $40$ by $3$ and then by the $5$ hours, treating tripling as a constant hourly increase.\n* Choice B ($3{,}240$): uses four triplings, $40(3)^4$, stopping one hour early.\n* Choice D ($29{,}160$): uses six triplings, $40(3)^6$, counting one hour too many.\n\n**Test Day Takeaway:** In exponential growth the exponent counts the periods, not the total. Anchor at $t = 0$ and count the steps.",
      skills: ["exponential-growth-decay"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "The table gives the value $v$, in dollars, of a printing machine $t$ years after it was purchased. Which of the following equations gives the relationship between $v$ and $t$?",
      diagram: { type: "dataTable", params: { headers: ["Years after purchase, t", "Value v (dollars)"], rows: [["0", "6,400"], ["1", "4,800"], ["2", "3,600"], ["3", "2,700"]] } },
      choices: [
        // distractor: uses the first drop as a constant rate
        { id: "A", text: "$v = 6{,}400 - 1{,}600t$" },
        // distractor: uses the percent lost as the multiplier
        { id: "B", text: "$v = 6{,}400(0.25)^t$" },
        { id: "C", text: "$v = 6{,}400(0.75)^t$" },
        // distractor: models growth instead of decay
        { id: "D", text: "$v = 6{,}400(1.25)^t$" }
      ],
      correctAnswer: "C",
      hint: "Check whether the values fall by a fixed amount each year or by a fixed factor.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~40s):** Each value is $0.75$ times the one before it and the starting value is $6{,}400$, so $v = 6{,}400(0.75)^t$.\n\n**The Full Solution:**\nStep 1: The drops are $1{,}600$, then $1{,}200$, then $900$ — not constant, so the relationship is not linear.\nStep 2: The ratios are $\\frac{4{,}800}{6{,}400} = 0.75$, $\\frac{3{,}600}{4{,}800} = 0.75$, and $\\frac{2{,}700}{3{,}600} = 0.75$, a constant decay factor.\nStep 3: With $v = 6{,}400$ at $t = 0$, the model is $v = 6{,}400(0.75)^t$. Check at $t = 3$: $6{,}400(0.75)^3 = 6{,}400(0.421875) = 2{,}700$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($v = 6{,}400 - 1{,}600t$): uses the first year's drop of $1{,}600$ as a constant rate, but the second year's drop is $1{,}200$.\n* Choice B ($v = 6{,}400(0.25)^t$): uses the $25\\%$ lost each year as the multiplier instead of the $75\\%$ that remains, which would leave $1{,}600$ after one year.\n* Choice D ($v = 6{,}400(1.25)^t$): adds the $25\\%$ change instead of subtracting it, which would make the machine gain value.\n\n**Test Day Takeaway:** Test differences and ratios before choosing a model, and remember that the base of a decay model is what remains, not what is lost.",
      skills: ["exponential-growth-decay"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "The function $g$ is exponential, $g(2) = 45$, and the value of $g$ is multiplied by $3$ for every increase of $1$ in $x$. What is the $y$-intercept of the graph of $y = g(x)$ in the $xy$-plane?",
      choices: [
        { id: "A", text: "$(0, 5)$" },
        // distractor: divides by 3 only once
        { id: "B", text: "$(0, 15)$" },
        // distractor: subtracts 3 instead of dividing
        { id: "C", text: "$(0, 42)$" },
        // distractor: reports g of 2
        { id: "D", text: "$(0, 45)$" }
      ],
      correctAnswer: "A",
      hint: "Walk backwards from $x = 2$ to $x = 0$, one step at a time.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~30s):** Going backwards divides by $3$ each step: $g(1) = 15$ and $g(0) = 5$, so the $y$-intercept is $(0, 5)$.\n\n**The Full Solution:**\nStep 1: The $y$-intercept is the point where $x = 0$, so the question asks for $g(0)$.\nStep 2: Each increase of $1$ in $x$ multiplies the value by $3$, so each decrease of $1$ divides it by $3$: $g(1) = \\frac{45}{3} = 15$.\nStep 3: One more step back gives $g(0) = \\frac{15}{3} = 5$, so the $y$-intercept is $(0, 5)$. Check: $g(x) = 5(3)^x$ gives $g(2) = 5(9) = 45$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($(0, 15)$): divides by $3$ once and reports $g(1)$ instead of $g(0)$.\n* Choice C ($(0, 42)$): subtracts $3$ from $45$, treating the growth as additive rather than multiplicative.\n* Choice D ($(0, 45)$): reports the given value $g(2)$ as if it were the intercept.\n\n**Test Day Takeaway:** The $y$-intercept of an exponential function is its value at $x = 0$. Step backwards by dividing by the growth factor once per unit.",
      skills: ["exponential-y-intercept"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "A sample of a radioactive material loses $12\\%$ of its mass every $6$ years. If the sample has a mass of $500$ grams today, which of the following expressions gives its mass, in grams, $t$ years from now?",
      choices: [
        // distractor: uses the percent lost as the factor
        { id: "A", text: "$500(0.12)^{\\frac{t}{6}}$" },
        // distractor: multiplies the time by 6
        { id: "B", text: "$500(0.88)^{6t}$" },
        { id: "C", text: "$500(0.88)^{\\frac{t}{6}}$" },
        // distractor: ignores the 6-year period
        { id: "D", text: "$500(0.88)^t$" }
      ],
      correctAnswer: "C",
      hint: "The exponent has to count how many $6$-year periods have gone by.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~45s):** Losing $12\\%$ leaves $88\\%$, and $t$ years contain $\\frac{t}{6}$ six-year periods, so the mass is $500(0.88)^{\\frac{t}{6}}$.\n\n**The Full Solution:**\nStep 1: After one $6$-year period, $100\\% - 12\\% = 88\\%$ of the mass remains, so the decay factor per period is $0.88$.\nStep 2: In $t$ years the number of complete $6$-year periods is $\\frac{t}{6}$, and that count is the exponent.\nStep 3: The mass is $500(0.88)^{\\frac{t}{6}}$ grams. Check at $t = 6$: the expression gives $500(0.88)^1 = 440$ grams, which is $12\\%$ less than $500$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($500(0.12)^{\\frac{t}{6}}$): uses the $12\\%$ lost as the decay factor, which would erase almost the entire sample in a single period.\n* Choice B ($500(0.88)^{6t}$): multiplies the time by $6$, packing six periods of decay into every year.\n* Choice D ($500(0.88)^t$): ignores the $6$-year period and applies the $12\\%$ loss once per year.\n\n**Test Day Takeaway:** In an exponential model the base is what remains after one period, and the exponent is time divided by the length of that period.",
      skills: ["exponential-growth-decay"]
    }
  ]
};
