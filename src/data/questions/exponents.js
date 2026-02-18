// Practice questions for Exponents module
// Questions are organized by SECTION (question type)

export const exponentsQuestions = {
  // Section: Laws of Exponents
  "Laws of Exponents": [
    {
      id: 1,
      difficulty: "easy",
      question: "Simplify: x⁴ · x³",
      choices: [
        { id: "A", text: "x⁷" },
        { id: "B", text: "x¹²" },
        { id: "C", text: "x¹" },
        { id: "D", text: "2x⁷" }
      ],
      correctAnswer: "A",
      hint: "When multiplying terms with the same base, think about what happens to the exponents. Do you add, subtract, or multiply them?",
      explanation: "**Choice A is correct.** When multiplying powers with the same base, add the exponents.\n\n**Step 1:** Identify the rule. The product rule for exponents states $x^a \\cdot x^b = x^{a+b}$.\n\n**Step 2:** Apply the rule: $x^4 \\cdot x^3 = x^{4+3} = x^7$.\n\n**Verification:** Expand to confirm: $x^4 = x \\cdot x \\cdot x \\cdot x$ and $x^3 = x \\cdot x \\cdot x$, so the product has 7 factors of $x$, giving $x^7$.\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: reversed_operation] Multiplied the exponents ($4 \\times 3 = 12$) instead of adding them. Multiplying exponents is the rule for a power raised to a power, not for a product of powers.\n• Choice C: [TRAP: reversed_operation] Subtracted the exponents ($4 - 3 = 1$). Subtraction applies when dividing like bases, not multiplying.\n• Choice D: [TRAP: partial_calculation] Added the exponents correctly to get $x^7$ but also mistakenly combined the coefficients as $1 + 1 = 2$. Both terms have an implied coefficient of 1, but coefficients multiply (not add) in a product, giving $1 \\cdot 1 = 1$.\n\n**Key concept:** Product of powers rule: $x^a \\cdot x^b = x^{a+b}$. When bases match in multiplication, ADD exponents.\n\n**Calculator tip:** On Desmos, test with $x = 2$: enter $2^4 \\cdot 2^3$ and $2^7$ to verify both equal 128.",
      skills: ['exponent-laws']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "Simplify: (x³)⁴",
      choices: [
        { id: "A", text: "x⁷" },
        { id: "B", text: "x¹²" },
        { id: "C", text: "4x³" },
        { id: "D", text: "x⁶⁴" }
      ],
      correctAnswer: "B",
      hint: "When you raise a power to another power, you need to combine the exponents. Think about what operation connects them.",
      explanation: "**Choice B is correct.** When raising a power to a power, multiply the exponents.\n\n**Step 1:** Identify the rule. The power rule for exponents states $(x^a)^b = x^{a \\cdot b}$.\n\n**Step 2:** Apply the rule: $(x^3)^4 = x^{3 \\times 4} = x^{12}$.\n\n**Verification:** $(x^3)^4$ means multiplying $x^3$ by itself 4 times: $x^3 \\cdot x^3 \\cdot x^3 \\cdot x^3 = x^{3+3+3+3} = x^{12}$.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: reversed_operation] Added the exponents ($3 + 4 = 7$) instead of multiplying. Adding exponents is the rule for $x^3 \\cdot x^4$, not $(x^3)^4$.\n• Choice C: [TRAP: partial_calculation] Moved the outer exponent in front as a coefficient ($4x^3$) instead of applying the power rule. The exponent applies to the entire expression, not just the coefficient.\n• Choice D: [TRAP: reversed_operation] Computed $x^{3^4} = x^{81}$, treating the exponents as an exponential tower ($3^4 = 81$) rather than multiplying them.\n\n**Key concept:** Power of a power rule: $(x^a)^b = x^{a \\cdot b}$. When raising a power to another power, MULTIPLY the exponents.\n\n**Calculator tip:** On Desmos, verify with $x = 2$: enter $(2^3)^4$ and $2^{12}$ to confirm both equal 4096.",
      skills: ['exponent-laws']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "Simplify: x⁸/x³",
      choices: [
        { id: "A", text: "x⁵" },
        { id: "B", text: "x²⁴" },
        { id: "C", text: "x¹¹" },
        { id: "D", text: "x⁸/³" }
      ],
      correctAnswer: "A",
      hint: "Division is the opposite of multiplication. If multiplying bases means adding exponents, what does dividing bases mean for the exponents?",
      explanation: "**Choice A is correct.** When dividing powers with the same base, subtract the exponents.\n\n**Step 1:** Identify the rule. The quotient rule for exponents states $\\frac{x^a}{x^b} = x^{a-b}$.\n\n**Step 2:** Apply the rule: $\\frac{x^8}{x^3} = x^{8-3} = x^5$.\n\n**Verification:** Write it out: $\\frac{x \\cdot x \\cdot x \\cdot x \\cdot x \\cdot x \\cdot x \\cdot x}{x \\cdot x \\cdot x}$. Cancel 3 factors of $x$ from top and bottom, leaving 5 factors of $x$ on top, which is $x^5$.\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: reversed_operation] Multiplied the exponents ($8 \\times 3 = 24$). Multiplying exponents is the rule for $(x^8)^3$, not $\\frac{x^8}{x^3}$.\n• Choice C: [TRAP: reversed_operation] Added the exponents ($8 + 3 = 11$). Adding exponents is the rule for $x^8 \\cdot x^3$, not division.\n• Choice D: [TRAP: reversed_operation] Wrote the exponent as a fraction $x^{8/3}$, confusing division of expressions with division of exponents. The bases are divided, so the exponents are subtracted.\n\n**Key concept:** Quotient of powers rule: $\\frac{x^a}{x^b} = x^{a-b}$. When bases match in division, SUBTRACT the exponents (top minus bottom).\n\n**Calculator tip:** On Desmos, verify with $x = 3$: enter $\\frac{3^8}{3^3}$ and $3^5$ to confirm both equal 243.",
      skills: ['exponent-laws']
    },
    {
      id: 4,
      difficulty: "medium",
      question: "What is the value of 3⁰?",
      choices: [
        { id: "A", text: "0" },
        { id: "B", text: "1" },
        { id: "C", text: "3" },
        { id: "D", text: "Undefined" }
      ],
      correctAnswer: "B",
      hint: "There's a special rule for any nonzero number raised to the power of zero. This is a fundamental exponent property to memorize.",
      explanation: "**Choice B is correct.** Any nonzero number raised to the zero power equals 1.\n\n**Step 1:** Apply the zero exponent rule. For any $a \\neq 0$: $a^0 = 1$.\n\n**Step 2:** Therefore $3^0 = 1$.\n\n**Verification:** Use the quotient rule to see why: $\\frac{3^2}{3^2} = 3^{2-2} = 3^0$. But $\\frac{3^2}{3^2} = \\frac{9}{9} = 1$, so $3^0 = 1$.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: reversed_operation] Confused the exponent 0 with the result being 0. Students often think \"zero power means zero,\" but $3^0 \\neq 0$. An exponent of 0 does not make the value 0.\n• Choice C: [TRAP: partial_calculation] Assumed $3^0 = 3$, effectively treating $x^0$ as $x^1$. The zero exponent rule is distinct from the identity exponent ($x^1 = x$).\n• Choice D: $3^0$ is defined and equals 1. While $0^0$ is sometimes considered indeterminate, any nonzero base raised to 0 is always 1.\n\n**Key concept:** Zero exponent rule: $a^0 = 1$ for all $a \\neq 0$. This follows from $\\frac{a^n}{a^n} = a^{n-n} = a^0 = 1$.",
      skills: ['zero-negative-exponents']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "Simplify: (2x²y)³",
      choices: [
        { id: "A", text: "6x⁶y³" },
        { id: "B", text: "8x⁶y³" },
        { id: "C", text: "2x⁶y³" },
        { id: "D", text: "8x⁵y⁴" }
      ],
      correctAnswer: "B",
      hint: "The exponent outside applies to every factor inside the parentheses. Don't forget to raise the coefficient (2) to the power as well!",
      explanation: "**Choice B is correct.** Distribute the outer exponent to every factor inside the parentheses.\n\n**Step 1:** Apply the power of a product rule: $(abc)^n = a^n \\cdot b^n \\cdot c^n$. So $(2x^2y)^3 = 2^3 \\cdot (x^2)^3 \\cdot y^3$.\n\n**Step 2:** Evaluate each piece: $2^3 = 8$, $(x^2)^3 = x^{2 \\times 3} = x^6$, and $y^3 = y^3$.\n\n**Step 3:** Combine: $8x^6y^3$.\n\n**Verification:** Test with $x = 1, y = 1$: $(2 \\cdot 1 \\cdot 1)^3 = 2^3 = 8$, and $8 \\cdot 1^6 \\cdot 1^3 = 8$.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: partial_calculation] Multiplied the coefficient $2 \\times 3 = 6$ instead of raising it to the power: $2^3 = 8$. The exponent applies as a power, not as a multiplier of the coefficient.\n• Choice C: [TRAP: partial_calculation] Kept the coefficient as 2 without raising it to the third power. Every factor inside the parentheses -- including the numerical coefficient -- must be raised to the outer exponent.\n• Choice D: [TRAP: arithmetic_slip] Got the coefficient correct ($8$) but made errors on the variable exponents. For $x^2$ raised to the 3rd power, multiply $2 \\times 3 = 6$, not $2 + 3 = 5$. For $y^1$ raised to the 3rd power, $1 \\times 3 = 3$, not $1 + 3 = 4$.\n\n**Key concept:** Power of a product: $(abc)^n = a^n \\cdot b^n \\cdot c^n$. The outer exponent distributes to EVERY factor, including numerical coefficients.\n\n**Calculator tip:** On Desmos, test with specific values like $x = 2, y = 3$: enter $(2 \\cdot 2^2 \\cdot 3)^3$ and $8 \\cdot 2^6 \\cdot 3^3$ to verify both equal 13824.",
      skills: ['exponent-laws']
    }
  ],

  // Section: Comparing Exponential Expressions
  "Comparing Exponential Expressions": [
    {
      id: 1,
      difficulty: "easy",
      question: "Which is greater: 2⁵ or 5²?",
      choices: [
        { id: "A", text: "2⁵" },
        { id: "B", text: "5²" },
        { id: "C", text: "They are equal" },
        { id: "D", text: "Cannot be determined" }
      ],
      correctAnswer: "A",
      hint: "Calculate each expression separately. Remember, 2⁵ means 2 multiplied by itself 5 times, and 5² means 5 multiplied by itself 2 times.",
      explanation: "**Choice A is correct.** Evaluate each expression numerically and compare.\n\n**Step 1:** Compute $2^5$: $2^5 = 2 \\times 2 \\times 2 \\times 2 \\times 2 = 32$.\n\n**Step 2:** Compute $5^2$: $5^2 = 5 \\times 5 = 25$.\n\n**Step 3:** Compare: $32 > 25$, so $2^5$ is greater.\n\n**Verification:** $32 - 25 = 7$, confirming $2^5$ exceeds $5^2$ by 7.\n\n**Why other choices are incorrect:**\n• Choice B: Concluded $5^2 > 2^5$ -- likely assumed the larger base always wins. While 5 is a bigger number than 2, the exponent matters enormously. A smaller base with a larger exponent can (and here does) produce a bigger result.\n• Choice C: Assumed $2^5 = 5^2$ because they use the same two numbers. Exponentiation is NOT commutative: $a^b \\neq b^a$ in general.\n• Choice D: These are specific numerical values that can be calculated exactly. There is no ambiguity.\n\n**Key concept:** Exponentiation is not commutative: $a^b \\neq b^a$ in general. Always compute the actual values to compare exponential expressions with different bases and exponents.\n\n**Calculator tip:** Type $2^5$ and $5^2$ directly into Desmos to compare. You can also graph $y = 2^x$ and $y = x^2$ to see where each dominates.",
      skills: ['comparing-exponentials']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "If 2ⁿ = 64, what is the value of n?",
      choices: [
        { id: "A", text: "4" },
        { id: "B", text: "5" },
        { id: "C", text: "6" },
        { id: "D", text: "8" }
      ],
      correctAnswer: "C",
      hint: "Start doubling from 2: 2, 4, 8, 16... Count how many times you need to multiply 2 by itself to reach 64.",
      explanation: "**Choice C is correct.** Find the exponent $n$ such that $2^n = 64$ by repeatedly doubling.\n\n**Step 1:** List powers of 2: $2^1 = 2$, $2^2 = 4$, $2^3 = 8$, $2^4 = 16$, $2^5 = 32$, $2^6 = 64$.\n\n**Step 2:** Since $2^6 = 64$, we have $n = 6$.\n\n**Verification:** Confirm $2^6 = 2 \\times 2 \\times 2 \\times 2 \\times 2 \\times 2 = 64$.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: off_by_one] $2^4 = 16$, not 64. This is two steps too early. Students may lose count when listing powers.\n• Choice B: [TRAP: off_by_one] $2^5 = 32$, not 64. This is one step short -- a common off-by-one error when counting repeated multiplications.\n• Choice D: [TRAP: reversed_operation] May have divided $64 \\div 2 = 32$ and then divided again to get $64 / 8 = 8$, confusing the process with division steps instead of counting the number of multiplications.\n\n**Key concept:** Know your powers of 2: $2, 4, 8, 16, 32, 64, 128, 256, 512, 1024$. These appear frequently on the SAT and being fluent with them saves critical time.\n\n**Calculator tip:** On Desmos, type $\\log_2(64)$ or equivalently $\\frac{\\ln(64)}{\\ln(2)}$ to get 6.",
      skills: ['comparing-exponentials', 'exponent-laws']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "Which expression has the greatest value: 3⁴, 4³, or 2⁶?",
      choices: [
        { id: "A", text: "3⁴" },
        { id: "B", text: "4³" },
        { id: "C", text: "2⁶" },
        { id: "D", text: "All are equal" }
      ],
      correctAnswer: "A",
      hint: "Evaluate each expression by computing the actual numerical value. Sometimes smaller bases with larger exponents can surprise you!",
      explanation: "**Choice A is correct.** Evaluate each expression and compare the results.\n\n**Step 1:** Compute $3^4$: $3^4 = 3 \\times 3 \\times 3 \\times 3 = 81$.\n\n**Step 2:** Compute $4^3$: $4^3 = 4 \\times 4 \\times 4 = 64$.\n\n**Step 3:** Compute $2^6$: $2^6 = 2 \\times 2 \\times 2 \\times 2 \\times 2 \\times 2 = 64$.\n\n**Step 4:** Compare: $81 > 64 = 64$, so $3^4$ is the greatest.\n\n**Verification:** Notice that $4^3 = (2^2)^3 = 2^6$, which confirms $4^3 = 2^6 = 64$. This is a useful pattern: rewriting expressions with a common base can reveal equalities.\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: partial_calculation] $4^3 = 64$, which is less than $3^4 = 81$. Students may assume the largest base wins, but the exponent also matters.\n• Choice C: [TRAP: partial_calculation] $2^6 = 64$, which ties with $4^3$ but is still less than $3^4 = 81$. A higher exponent does not guarantee a larger value when the base is smaller.\n• Choice D: They are not all equal. While $4^3$ and $2^6$ happen to be equal (both 64), $3^4 = 81$ is different and larger.\n\n**Key concept:** When comparing exponential expressions with different bases and exponents, compute each value directly. You cannot compare just bases or just exponents in isolation.\n\n**Calculator tip:** Enter all three expressions into Desmos side by side to compare: $3^4$, $4^3$, $2^6$.",
      skills: ['comparing-exponentials']
    },
    {
      id: 4,
      difficulty: "medium",
      question: "If x > 1, which is greater: x² or x³?",
      choices: [
        { id: "A", text: "x²" },
        { id: "B", text: "x³" },
        { id: "C", text: "They are equal" },
        { id: "D", text: "Cannot be determined" }
      ],
      correctAnswer: "B",
      hint: "Think about what x³ equals in terms of x². Since x > 1, consider what happens when you multiply a number greater than 1 by itself again.",
      explanation: "**Choice B is correct.** For $x > 1$, raising to a higher power produces a larger result.\n\n**Step 1:** Write $x^3$ in terms of $x^2$: $x^3 = x^2 \\cdot x$.\n\n**Step 2:** Since $x > 1$, multiplying $x^2$ by $x$ (a number greater than 1) makes the product larger: $x^2 \\cdot x > x^2 \\cdot 1 = x^2$.\n\n**Step 3:** Therefore $x^3 > x^2$ whenever $x > 1$.\n\n**Verification:** Test with $x = 2$: $2^3 = 8$ and $2^2 = 4$. Indeed $8 > 4$.\n\n**Why other choices are incorrect:**\n• Choice A: $x^2 < x^3$ when $x > 1$, not greater. This would only be true if $0 < x < 1$, where multiplying by $x$ (a fraction) reduces the value.\n• Choice C: They are only equal when $x = 1$ (since $1^2 = 1^3 = 1$), but the problem specifies $x > 1$, so they cannot be equal.\n• Choice D: The relationship can be determined. The constraint $x > 1$ provides enough information to conclude $x^3 > x^2$ definitively.\n\n**Key concept:** For $x > 1$: $x^a > x^b$ whenever $a > b$. For $0 < x < 1$: the inequality reverses. The behavior of exponents depends critically on whether the base exceeds 1.",
      skills: ['comparing-exponentials', 'exponent-laws']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "For what value of x does 4ˣ = 8?",
      choices: [
        { id: "A", text: "1.5" },
        { id: "B", text: "2" },
        { id: "C", text: "0.75" },
        { id: "D", text: "3" }
      ],
      correctAnswer: "A",
      hint: "Try rewriting both 4 and 8 as powers of 2. This will let you compare the exponents directly.",
      explanation: "**Choice A is correct.** Rewrite both sides with a common base to solve for $x$.\n\n**Step 1:** Express 4 and 8 as powers of 2: $4 = 2^2$ and $8 = 2^3$.\n\n**Step 2:** Substitute: $(2^2)^x = 2^3$, which gives $2^{2x} = 2^3$.\n\n**Step 3:** Since the bases are equal, set the exponents equal: $2x = 3$, so $x = 1.5$.\n\n**Verification:** $4^{1.5} = 4^{3/2} = (\\sqrt{4})^3 = 2^3 = 8$.\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: partial_calculation] $4^2 = 16 \\neq 8$. Students may guess $x = 2$ because 8 is close to a power of 4, but $4^2$ overshoots to 16.\n• Choice C: [TRAP: arithmetic_slip] $4^{0.75} = 4^{3/4} = (\\sqrt[4]{4})^3 \\approx 2.83$, not 8. This likely comes from an error in solving $2x = 3$.\n• Choice D: [TRAP: reversed_operation] $4^3 = 64 \\neq 8$. Students may confuse $4^x = 8$ with asking \"what power gives 64\" or simply guess a whole number.\n\n**Key concept:** To solve $a^x = b$, try rewriting $a$ and $b$ with the same base. If $a = c^m$ and $b = c^n$, then $c^{mx} = c^n$ gives $x = \\frac{n}{m}$.\n\n**Calculator tip:** On Desmos, graph $y = 4^x$ and $y = 8$ to find the intersection at $x = 1.5$. Or compute $\\frac{\\ln(8)}{\\ln(4)} = 1.5$.",
      skills: ['comparing-exponentials', 'exponent-laws']
    }
  ],

  // Section: Exponential Functions
  "Exponential Functions": [
    {
      id: 1,
      difficulty: "easy",
      question: "The function f(x) = 2ˣ represents exponential:",
      choices: [
        { id: "A", text: "Decay" },
        { id: "B", text: "Growth" },
        { id: "C", text: "Neither" },
        { id: "D", text: "Linear increase" }
      ],
      correctAnswer: "B",
      hint: "Look at the base of the exponential. Is it greater than 1 or between 0 and 1? This determines whether the function grows or decays.",
      explanation: "**Choice B is correct.** The base of the exponential function determines growth vs. decay.\n\n**Step 1:** Identify the base in $f(x) = 2^x$. The base is $2$.\n\n**Step 2:** Apply the rule: if the base $b > 1$, the function exhibits exponential growth. Since $2 > 1$, this is growth.\n\n**Verification:** Evaluate a few points: $f(0) = 1$, $f(1) = 2$, $f(2) = 4$, $f(3) = 8$. The output doubles each time $x$ increases by 1, confirming growth.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: reversed_operation] Exponential decay occurs when $0 < b < 1$ (e.g., $f(x) = 0.5^x$). Since the base here is $2 > 1$, this is growth, not decay.\n• Choice C: An exponential function $f(x) = b^x$ with $b > 0$ and $b \\neq 1$ is always either growth or decay. It cannot be neither.\n• Choice D: [TRAP: reversed_operation] While the function does increase, it is NOT linear. Linear functions increase by a constant amount; exponential functions increase by a constant ratio (here, doubling).\n\n**Key concept:** For $f(x) = b^x$: if $b > 1$, exponential growth; if $0 < b < 1$, exponential decay. The base determines the behavior.\n\n**Calculator tip:** Graph $y = 2^x$ on Desmos. Note the curve rising steeply to the right -- the hallmark of exponential growth.",
      skills: ['exponential-growth-decay']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "A population doubles every year. If it starts at 100, what is the population after 3 years?",
      choices: [
        { id: "A", text: "300" },
        { id: "B", text: "400" },
        { id: "C", text: "600" },
        { id: "D", text: "800" }
      ],
      correctAnswer: "D",
      hint: "Doubling means multiplying by 2. Track the population year by year, or use the formula: initial value times 2 raised to the number of years.",
      explanation: "**Choice D is correct.** Use the exponential growth formula with a doubling pattern.\n\n**Step 1:** Set up the formula. Doubling means the growth factor is 2, so $P = 100 \\cdot 2^t$ where $t$ is years.\n\n**Step 2:** Substitute $t = 3$: $P = 100 \\cdot 2^3 = 100 \\cdot 8 = 800$.\n\n**Verification:** Track year by year: Year 0: 100, Year 1: $100 \\times 2 = 200$, Year 2: $200 \\times 2 = 400$, Year 3: $400 \\times 2 = 800$.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: reversed_operation] $300 = 100 \\times 3$. This treats doubling as multiplying by the number of years (linear growth: $100 + 100 + 100$) instead of applying the doubling repeatedly.\n• Choice B: [TRAP: partial_calculation] $400 = 100 \\times 2^2$. This computes only 2 doublings instead of 3, an off-by-one error. The population after 2 years is 400, not after 3.\n• Choice C: [TRAP: arithmetic_slip] $600 = 100 \\times 6$. This may come from adding all intermediate populations ($100 + 200 + 300$) or computing $100 \\times 2 \\times 3 = 600$, confusing exponential with linear patterns.\n\n**Key concept:** Exponential growth formula: $P = P_0 \\cdot b^t$, where $P_0$ is the initial value, $b$ is the growth factor, and $t$ is time. For doubling, $b = 2$.\n\n**Calculator tip:** On Desmos, graph $y = 100 \\cdot 2^x$ and evaluate at $x = 3$ to confirm $y = 800$.",
      skills: ['exponential-growth-decay']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "The function f(x) = 500(0.8)ˣ represents a quantity that:",
      choices: [
        { id: "A", text: "Increases by 80% each time period" },
        { id: "B", text: "Decreases by 80% each time period" },
        { id: "C", text: "Decreases by 20% each time period" },
        { id: "D", text: "Increases by 20% each time period" }
      ],
      correctAnswer: "C",
      hint: "The base 0.8 means the quantity keeps 80% of its value each period. What percentage is being lost?",
      explanation: "**Choice C is correct.** The base of an exponential decay function tells you what fraction is retained each period.\n\n**Step 1:** Identify the base in $f(x) = 500(0.8)^x$. The base is $0.8$.\n\n**Step 2:** Since $0.8 < 1$, this is exponential decay. The quantity retains $0.8 = 80\\%$ of its value each period.\n\n**Step 3:** The amount lost each period is $1 - 0.8 = 0.2 = 20\\%$.\n\n**Verification:** $f(0) = 500$, $f(1) = 500 \\times 0.8 = 400$. The decrease is $500 - 400 = 100$, and $\\frac{100}{500} = 0.2 = 20\\%$.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: percent_confusion] The base $0.8$ does not mean an 80% increase. An 80% increase per period would use a base of $1 + 0.80 = 1.80$, making the function $f(x) = 500(1.80)^x$.\n• Choice B: [TRAP: percent_confusion] The quantity does not lose 80% each period. It retains 80% and loses 20%. Students often confuse the retention rate with the decay rate.\n• Choice D: [TRAP: reversed_operation] A 20% increase would use a base of $1 + 0.20 = 1.20$. Here the base is $0.8 = 1 - 0.20$, indicating a 20% decrease.\n\n**Key concept:** For $f(x) = a \\cdot b^x$: if $b = 1 - r$, the function decays by $r \\times 100\\%$ per period. If $b = 1 + r$, it grows by $r \\times 100\\%$ per period.\n\n**Calculator tip:** Graph $y = 500(0.8)^x$ on Desmos and click successive integer points to watch the value decrease by 20% each step.",
      skills: ['exponential-growth-decay']
    },
    {
      id: 4,
      difficulty: "medium",
      question: "Which function has the y-intercept of 5?",
      choices: [
        { id: "A", text: "f(x) = 5(2)ˣ" },
        { id: "B", text: "f(x) = 2(5)ˣ" },
        { id: "C", text: "f(x) = 2ˣ + 5" },
        { id: "D", text: "f(x) = 5ˣ + 2" }
      ],
      correctAnswer: "A",
      hint: "The y-intercept occurs when x = 0. Substitute x = 0 into each function and remember that any number raised to the power of 0 equals 1.",
      explanation: "**Choice A is correct.** The y-intercept occurs at $x = 0$. Substitute $x = 0$ into each function.\n\n**Step 1:** Choice A: $f(0) = 5(2)^0 = 5 \\cdot 1 = 5$.\n\n**Step 2:** Choice B: $f(0) = 2(5)^0 = 2 \\cdot 1 = 2$. Choice C: $f(0) = 2^0 + 5 = 1 + 5 = 6$. Choice D: $f(0) = 5^0 + 2 = 1 + 2 = 3$.\n\n**Step 3:** Only Choice A gives a y-intercept of 5.\n\n**Verification:** In the standard form $f(x) = a \\cdot b^x$, the coefficient $a$ is the y-intercept because $f(0) = a \\cdot b^0 = a \\cdot 1 = a$. In Choice A, $a = 5$, confirming the answer.\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: reversed_operation] The 5 appears as the base, not the coefficient. The y-intercept of $f(x) = 2(5)^x$ is 2, not 5. Students confuse the roles of the coefficient and the base.\n• Choice C: [TRAP: arithmetic_slip] $f(0) = 2^0 + 5 = 1 + 5 = 6$, not 5. The added constant shifts the y-intercept above what you might expect.\n• Choice D: [TRAP: arithmetic_slip] $f(0) = 5^0 + 2 = 1 + 2 = 3$. Remember that $5^0 = 1$, not 5.\n\n**Key concept:** In $f(x) = a \\cdot b^x$, the y-intercept is $a$ (the coefficient in front). Since $b^0 = 1$, the y-intercept equals the initial value $a$.\n\n**Calculator tip:** On Desmos, graph all four functions and check where each crosses the y-axis.",
      skills: ['exponential-y-intercept']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "A car depreciates by 15% per year. If its initial value is $20,000, which expression gives its value after t years?",
      choices: [
        { id: "A", text: "20000(0.15)ᵗ" },
        { id: "B", text: "20000(0.85)ᵗ" },
        { id: "C", text: "20000(1.15)ᵗ" },
        { id: "D", text: "20000 - 0.15t" }
      ],
      correctAnswer: "B",
      hint: "Depreciation means losing value. If the car loses 15% of its value each year, what percentage of its value does it retain?",
      explanation: "**Choice B is correct.** Depreciation is exponential decay: each year the car retains a fixed percentage of its value.\n\n**Step 1:** A 15% depreciation means the car loses 15% of its value each year, so it retains $100\\% - 15\\% = 85\\% = 0.85$ of its value.\n\n**Step 2:** Apply the exponential decay formula: $V(t) = P_0 \\cdot (1 - r)^t$, where $P_0 = 20{,}000$ and $r = 0.15$.\n\n**Step 3:** $V(t) = 20{,}000(0.85)^t$.\n\n**Verification:** After 1 year: $20{,}000 \\times 0.85 = 17{,}000$. Check: $20{,}000 - 15\\% \\times 20{,}000 = 20{,}000 - 3{,}000 = 17{,}000$.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: percent_confusion] Uses $0.15$ as the base instead of $0.85$. The base should be the retention rate (what remains), not the decay rate (what is lost). After 1 year, $20{,}000 \\times 0.15 = 3{,}000$, which is the amount lost, not the remaining value.\n• Choice C: [TRAP: sign_error] Uses $1.15$ as the base, which represents a 15% increase per year (appreciation), not a 15% decrease (depreciation). This would make the car gain value over time.\n• Choice D: [TRAP: reversed_operation] This is a linear model ($20{,}000 - 0.15t$), not exponential. It subtracts a fixed amount each year, which does not correctly model percentage-based depreciation. Also, $0.15t$ would subtract only pennies per year.\n\n**Key concept:** Exponential decay formula: $V = P_0(1 - r)^t$. The base is $1 - r$ where $r$ is the decay rate. Do not confuse the rate of loss ($r$) with the retention factor ($1 - r$).\n\n**Calculator tip:** On Desmos, graph $y = 20000(0.85)^x$ and use the slider to see the car's value drop year by year.",
      skills: ['exponential-growth-decay']
    }
  ]
};
