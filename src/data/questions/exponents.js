// Practice questions for Exponents module
// Questions are organized by SECTION (question type)

export const exponentsQuestions = {
  // Section: Laws of Exponents
  "Laws of Exponents": [
    {
      id: 1,
      difficulty: "easy",
      question: "Simplify: x⁴ · $x^3$",
      choices: [
        { id: "A", text: "x⁷" },
        { id: "B", text: "x¹²" },
        { id: "C", text: "x¹" },
        { id: "D", text: "2x⁷" }
      ],
      correctAnswer: "A",
      hint: "When multiplying terms with the same base, think about what happens to the exponents. Do you add, subtract, or multiply them?",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~10s):** Same base, multiplication, so add the exponents: $x^4 \\cdot x^3 = x^{4+3} = x^7$.\n\n**The Full Solution:**\nStep 1: The product rule for powers with a matching base is $x^a \\cdot x^b = x^{a+b}$.\nStep 2: Apply it: $x^4 \\cdot x^3 = x^{4+3} = x^7$, which is Choice A.\nStep 3: Sanity check by counting factors: $x^4$ is four $x$'s and $x^3$ is three $x$'s, so the product has seven $x$'s.\n\n**Why the wrong answers are tempting:**\n* Choice B ($x^{12}$): multiplied the exponents ($4 \\times 3$) — that rule is for a power raised to a power, not a product.\n* Choice C ($x^1$): subtracted the exponents ($4-3$) — subtraction is for division of like bases.\n* Choice D ($2x^7$): added the exponents correctly but also added the implied coefficients $1+1$; coefficients multiply, so $1 \\cdot 1 = 1$.\n\n**Test Day Takeaway:** Same base, multiply: add the exponents. Match the operation to the rule before you touch the numbers.",
      skills: ['exponent-laws']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "Simplify: (x³)⁴",
      choices: [
        { id: "A", text: "x⁷" },
        { id: "B", text: "x¹²" },
        { id: "C", text: "$4x^3$" },
        { id: "D", text: "x⁶⁴" }
      ],
      correctAnswer: "B",
      hint: "When you raise a power to another power, you need to combine the exponents. Think about what operation connects them.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** A power raised to a power multiplies the exponents: $(x^3)^4 = x^{3 \\times 4} = x^{12}$.\n\n**The Full Solution:**\nStep 1: The power-of-a-power rule is $(x^a)^b = x^{a \\cdot b}$.\nStep 2: Apply it: $(x^3)^4 = x^{3 \\cdot 4} = x^{12}$, which is Choice B.\nStep 3: Confirm by expanding: $(x^3)^4 = x^3 \\cdot x^3 \\cdot x^3 \\cdot x^3 = x^{3+3+3+3} = x^{12}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($x^7$): added the exponents ($3+4$) — addition is for $x^3 \\cdot x^4$, not $(x^3)^4$.\n* Choice C ($4x^3$): pulled the outer exponent down as a coefficient instead of applying it as a power.\n* Choice D ($x^{64}$): computed $4^3 = 64$ from the digits instead of multiplying the exponents $3 \\cdot 4 = 12$.\n\n**Test Day Takeaway:** Power raised to a power: multiply the exponents. Reserve adding for products of like bases.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~10s):** Same base, division, so subtract the exponents: $\\frac{x^8}{x^3} = x^{8-3} = x^5$.\n\n**The Full Solution:**\nStep 1: The quotient rule for powers with a matching base is $\\frac{x^a}{x^b} = x^{a-b}$.\nStep 2: Apply it: $\\frac{x^8}{x^3} = x^{8-3} = x^5$, which is Choice A.\nStep 3: Check by cancelling: write eight $x$'s over three $x$'s, cancel three pairs, and five $x$'s remain on top.\n\n**Why the wrong answers are tempting:**\n* Choice B ($x^{24}$): multiplied the exponents ($8 \\times 3$) — that is the power-of-a-power rule.\n* Choice C ($x^{11}$): added the exponents ($8+3$) — addition is for multiplying like bases.\n* Choice D ($x^{8/3}$): turned the exponent into a fraction, confusing dividing the expressions with dividing the exponents.\n\n**Test Day Takeaway:** Same base, divide: subtract the exponents, top minus bottom.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~5s):** Any nonzero number to the zero power is $1$, so $3^0 = 1$, which is Choice B.\n\n**The Full Solution:**\nStep 1: The zero-exponent rule states $a^0 = 1$ for every $a \\neq 0$.\nStep 2: With $a = 3$, this gives $3^0 = 1$.\nStep 3: See why with the quotient rule: $\\frac{3^2}{3^2} = 3^{2-2} = 3^0$, and $\\frac{9}{9} = 1$, so $3^0 = 1$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($0$): assumed a zero exponent forces a zero value — the exponent of $0$ does not zero out the base.\n* Choice C ($3$): treated $3^0$ as $3^1$, mixing up the zero exponent with the identity exponent.\n* Choice D (Undefined): only $0^0$ is debatable; a nonzero base to the zero power is always defined as $1$.\n\n**Test Day Takeaway:** $a^0 = 1$ for any nonzero $a$ — it follows from $\\frac{a^n}{a^n} = a^{n-n} = a^0$.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** The cube hits every factor: $2^3 = 8$, $(x^2)^3 = x^6$, $y^3$, giving $8x^6y^3$ — Choice B.\n\n**The Full Solution:**\nStep 1: The power-of-a-product rule is $(abc)^n = a^n \\cdot b^n \\cdot c^n$, so $(2x^2y)^3 = 2^3 \\cdot (x^2)^3 \\cdot y^3$.\nStep 2: Evaluate each: $2^3 = 8$, $(x^2)^3 = x^{2 \\cdot 3} = x^6$, and $y^3 = y^3$.\nStep 3: Combine into $8x^6y^3$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($6x^6y^3$): multiplied the coefficient by the exponent ($2 \\times 3$) instead of cubing it.\n* Choice C ($2x^6y^3$): never raised the coefficient at all — every factor inside, including the number, takes the outer exponent.\n* Choice D ($8x^5y^4$): cubed the coefficient correctly but added exponents instead of multiplying: $x^2$ became $x^{2+3}$ and $y^1$ became $y^{1+3}$.\n\n**Test Day Takeaway:** An outer exponent distributes to every factor in the parentheses — coefficient included — and you multiply the inner exponents, never add them.",
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
        { id: "B", text: "$5^2$" },
        { id: "C", text: "They are equal" },
        { id: "D", text: "Cannot be determined" }
      ],
      correctAnswer: "A",
      hint: "Calculate each expression separately. Remember, 2⁵ means 2 multiplied by itself 5 times, and 5² means 5 multiplied by itself 2 times.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~10s):** $2^5 = 32$ and $5^2 = 25$, so $2^5$ is greater — Choice A.\n\n**The Full Solution:**\nStep 1: Compute $2^5 = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32$.\nStep 2: Compute $5^2 = 5 \\cdot 5 = 25$.\nStep 3: Compare: $32 > 25$, so $2^5$ wins.\n\n**Why the wrong answers are tempting:**\n* Choice B ($5^2$): assumed the bigger base always wins, but the exponent does heavy lifting here.\n* Choice C (They are equal): saw the same two digits and assumed $a^b = b^a$ — exponentiation is not commutative.\n* Choice D (Cannot be determined): both expressions are exact numbers, so there is nothing undetermined.\n\n**Test Day Takeaway:** $a^b \\neq b^a$ in general — to compare exponentials with different bases and exponents, just compute both values.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** Double up from $2$: $2,4,8,16,32,64$ — six doublings, so $n = 6$, Choice C.\n\n**The Full Solution:**\nStep 1: List the powers of $2$: $2^1=2$, $2^2=4$, $2^3=8$, $2^4=16$, $2^5=32$, $2^6=64$.\nStep 2: $2^6 = 64$, so $n = 6$.\nStep 3: Confirm: $2^6 = 64$ matches the equation $2^n = 64$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): $2^4 = 16$, two steps short of $64$.\n* Choice B ($5$): $2^5 = 32$, one doubling short — a classic off-by-one.\n* Choice D ($8$): $2^8 = 256$, overshooting by treating $8$ as a guess rather than counting doublings.\n\n**Test Day Takeaway:** Memorize the powers of $2$ through $1024$ — recognizing $64 = 2^6$ on sight saves real time.",
      skills: ['comparing-exponentials', 'exponent-laws']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "Which expression has the greatest value: 3⁴, 4³, or 2⁶?",
      choices: [
        { id: "A", text: "3⁴" },
        { id: "B", text: "$4^3$" },
        { id: "C", text: "2⁶" },
        { id: "D", text: "All are equal" }
      ],
      correctAnswer: "A",
      hint: "Evaluate each expression by computing the actual numerical value. Sometimes smaller bases with larger exponents can surprise you!",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** $3^4 = 81$, while $4^3 = 64$ and $2^6 = 64$, so $3^4$ is greatest — Choice A.\n\n**The Full Solution:**\nStep 1: Compute $3^4 = 3 \\cdot 3 \\cdot 3 \\cdot 3 = 81$.\nStep 2: Compute $4^3 = 4 \\cdot 4 \\cdot 4 = 64$.\nStep 3: Compute $2^6 = 64$. Note $4^3 = (2^2)^3 = 2^6$, so those two tie at $64$.\nStep 4: Compare: $81 > 64$, so $3^4$ is the largest.\n\n**Why the wrong answers are tempting:**\n* Choice B ($4^3$): equals $64$, less than $81$ — the larger base does not guarantee the larger value.\n* Choice C ($2^6$): also $64$, tying $4^3$ but still below $3^4$ — a bigger exponent alone does not win.\n* Choice D (All are equal): $4^3$ and $2^6$ match, but $3^4 = 81$ is different and larger.\n\n**Test Day Takeaway:** With different bases and exponents, compute each value — you cannot rank exponentials by base or exponent alone.",
      skills: ['comparing-exponentials']
    },
    {
      id: 4,
      difficulty: "medium",
      question: "If $x > 1$, which is greater: x² or $x^3$?",
      choices: [
        { id: "A", text: "$x^2$" },
        { id: "B", text: "$x^3$" },
        { id: "C", text: "They are equal" },
        { id: "D", text: "Cannot be determined" }
      ],
      correctAnswer: "B",
      hint: "Think about what x³ equals in terms of $x^2$. Since $x > 1$, consider what happens when you multiply a number greater than 1 by itself again.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** For $x > 1$, multiplying by an extra $x$ grows the value, so $x^3 = x^2 \\cdot x > x^2$ — Choice B.\n\n**The Full Solution:**\nStep 1: Write $x^3 = x^2 \\cdot x$.\nStep 2: Since $x > 1$, the factor $x$ exceeds $1$, so $x^2 \\cdot x > x^2 \\cdot 1 = x^2$.\nStep 3: Therefore $x^3 > x^2$ whenever $x > 1$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($x^2$): this is larger only when $0 < x < 1$, where multiplying by a fraction shrinks the value — the constraint here is $x > 1$.\n* Choice C (They are equal): they match only at $x = 1$, which is excluded by $x > 1$.\n* Choice D (Cannot be determined): the condition $x > 1$ pins the relationship down completely.\n\n**Test Day Takeaway:** For $x > 1$, higher exponent means bigger value; for $0 < x < 1$ the inequality flips. The base relative to $1$ controls everything.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** Rewrite both sides base $2$: $4^x = 2^{2x}$ and $8 = 2^3$, so $2x = 3$ and $x = 1.5$ — Choice A.\n\n**The Full Solution:**\nStep 1: Express both sides with base $2$: $4 = 2^2$ and $8 = 2^3$.\nStep 2: Substitute: $(2^2)^x = 2^3$, which is $2^{2x} = 2^3$.\nStep 3: Equal bases force equal exponents: $2x = 3$, so $x = 1.5$.\nStep 4: Verify: $4^{1.5} = 4^{3/2} = (\\sqrt{4})^3 = 2^3 = 8$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($2$): $4^2 = 16$, overshooting $8$.\n* Choice C ($0.75$): $4^{0.75} \\approx 2.83$, from a slip in solving $2x = 3$.\n* Choice D ($3$): $4^3 = 64$, far past $8$ — a stray whole-number guess.\n\n**Test Day Takeaway:** To solve $a^x = b$, rewrite both sides over a common base; matching exponents turns the equation into simple algebra.",
      skills: ['comparing-exponentials', 'exponent-laws']
    }
  ],

  // Section: Exponential Functions
  "Exponential Functions": [
    {
      id: 1,
      difficulty: "easy",
      question: "The function $f(x) = 2$ˣ represents exponential:",
      choices: [
        { id: "A", text: "Decay" },
        { id: "B", text: "Growth" },
        { id: "C", text: "Neither" },
        { id: "D", text: "Linear increase" }
      ],
      correctAnswer: "B",
      hint: "Look at the base of the exponential. Is it greater than 1 or between 0 and 1? This determines whether the function grows or decays.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~5s):** The base is $2 > 1$, so $f(x) = 2^x$ is exponential growth — Choice B.\n\n**The Full Solution:**\nStep 1: For $f(x) = b^x$, the base $b$ decides the behavior.\nStep 2: Here $b = 2$, and $2 > 1$ means growth.\nStep 3: Check the outputs: $f(0)=1$, $f(1)=2$, $f(2)=4$, $f(3)=8$ — they double each step, confirming growth.\n\n**Why the wrong answers are tempting:**\n* Choice A (Decay): decay needs $0 < b < 1$ (like $0.5^x$); a base of $2$ grows.\n* Choice C (Neither): any $b^x$ with $b > 0$ and $b \\neq 1$ is one or the other, never neither.\n* Choice D (Linear increase): it does rise, but by a constant ratio (doubling), not a constant amount, so it is exponential, not linear.\n\n**Test Day Takeaway:** For $f(x) = b^x$: $b > 1$ is growth, $0 < b < 1$ is decay. Read the base first.",
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
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~15s):** Double three times: $100 \\to 200 \\to 400 \\to 800$, so the answer is $800$ — Choice D.\n\n**The Full Solution:**\nStep 1: Doubling each year means a growth factor of $2$: $P = 100 \\cdot 2^t$.\nStep 2: Substitute $t = 3$: $P = 100 \\cdot 2^3 = 100 \\cdot 8 = 800$.\nStep 3: Track it year by year — Year 1: $200$, Year 2: $400$, Year 3: $800$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($300$): used $100 \\times 3$, treating doubling as a constant linear add instead of repeated multiplication.\n* Choice B ($400$): stopped at two doublings ($100 \\cdot 2^2$) — the population after Year 2, not Year 3.\n* Choice C ($600$): computed $100 \\times 2 \\times 3$ or summed intermediates, mixing exponential with linear.\n\n**Test Day Takeaway:** Exponential growth is $P = P_0 \\cdot b^t$; for doubling, $b = 2$ and the exponent counts the periods, so multiply repeatedly rather than adding.",
      skills: ['exponential-growth-decay']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "The function $f(x) = 500(0.8)$ˣ represents a quantity that:",
      choices: [
        { id: "A", text: "Increases by 80% each time period" },
        { id: "B", text: "Decreases by 80% each time period" },
        { id: "C", text: "Decreases by 20% each time period" },
        { id: "D", text: "Increases by 20% each time period" }
      ],
      correctAnswer: "C",
      hint: "The base 0.8 means the quantity keeps 80% of its value each period. What percentage is being lost?",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** In $f(x)=500(0.8)^x$ the base is $0.8$, so each period keeps $80\\%$ and loses $1-0.8=0.2=20\\%$. That is a $20\\%$ decrease.\n\n**The Full Solution:**\nStep 1: Read the base. For $f(x)=a\\cdot b^x$, the base $b$ is the per-period multiplier. Here $b=0.8$.\nStep 2: Since $0.8<1$, the quantity shrinks each period — exponential decay.\nStep 3: Multiplying by $0.8$ keeps $80\\%$ of the value, so it drops by $20\\%$ each period.\nStep 4: Check: $f(0)=500$, $f(1)=500\\times0.8=400$, and $\\frac{500-400}{500}=0.2=20\\%$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($80\\%$ increase): an $80\\%$ increase needs base $1+0.8=1.8$, not $0.8$.\n* Choice B ($80\\%$ decrease): $80\\%$ is the part retained, not the part lost.\n* Choice D ($20\\%$ increase): a $20\\%$ increase needs base $1.2$; base $0.8$ is below $1$, so the value falls.\n\n**Test Day Takeaway:** For $f(x)=a\\cdot b^x$, a base $b=1-r$ means a decrease of $r$ each period; the percent lost is $1-b$, not $b$ itself.",
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
      hint: "The y-intercept occurs when $x = 0$. Substitute $x = 0$ into each function and remember that any number raised to the power of 0 equals 1.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** The $y$-intercept is $f(0)$, and any nonzero base to the power $0$ is $1$. Test each: only $5(2)^0=5$ gives $5$.\n\n**The Full Solution:**\nStep 1: The $y$-intercept happens at $x=0$, so evaluate $f(0)$ for each choice.\nStep 2: Choice A: $f(0)=5(2)^0=5\\cdot1=5$.\nStep 3: Choice B: $2(5)^0=2$; Choice C: $2^0+5=6$; Choice D: $5^0+2=3$.\nStep 4: Only Choice A lands on $5$.\n\n**Why the wrong answers are tempting:**\n* Choice B: the $5$ sits in the base, not the coefficient; $f(0)=2$, the front coefficient.\n* Choice C: $2^0+5=1+5=6$, since $2^0=1$ — the constant shifts the intercept.\n* Choice D: $5^0+2=1+2=3$; remember $5^0=1$, not $5$.\n\n**Test Day Takeaway:** For $f(x)=a\\cdot b^x$, the $y$-intercept is the coefficient $a$, because $b^0=1$. For a shifted form like $b^x+c$, the intercept is $1+c$.",
      skills: ['exponential-y-intercept']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "A car depreciates by 15% per year. If its initial value is \\$20,000, which expression gives its value after t years?",
      choices: [
        { id: "A", text: "20000(0.15)ᵗ" },
        { id: "B", text: "20000(0.85)ᵗ" },
        { id: "C", text: "20000(1.15)ᵗ" },
        { id: "D", text: "$20000 - 0.15t$" }
      ],
      correctAnswer: "B",
      hint: "Depreciation means losing value. If the car loses 15% of its value each year, what percentage of its value does it retain?",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** Depreciating $15\\%$ per year keeps $100\\%-15\\%=85\\%=0.85$ each year, so the value is $20{,}000(0.85)^t$.\n\n**The Full Solution:**\nStep 1: Decay model: $V(t)=P_0(1-r)^t$ with starting value $P_0=20{,}000$ and rate $r=0.15$.\nStep 2: The base is $1-r=1-0.15=0.85$, the fraction retained each year.\nStep 3: So $V(t)=20{,}000(0.85)^t$.\nStep 4: Check year $1$: $20{,}000\\times0.85=17{,}000$, matching $20{,}000-0.15\\times20{,}000=17{,}000$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: uses $0.15$ as the base — that is the fraction lost, not retained; $20{,}000\\times0.15=3{,}000$ is the year-one loss, not the value.\n* Choice C: base $1.15$ means $15\\%$ growth (appreciation), so the car would gain value.\n* Choice D: $20{,}000-0.15t$ is linear, subtracting a tiny fixed amount yearly instead of a percentage.\n\n**Test Day Takeaway:** Percent decrease uses base $1-r$ (the part kept), percent increase uses $1+r$. Never put the bare rate $r$ in the base.",
      skills: ['exponential-growth-decay']
    }
  ]
};
