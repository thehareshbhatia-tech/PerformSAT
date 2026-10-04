// Practice questions for Functions module
// Questions are organized by SECTION (question type)

export const functionsQuestions = {
  // Section: Fundamentals
  "Fundamentals": [
    {
      id: 1,
      difficulty: "easy",
      question: "The function $g$ is defined by $g(x) = 8x + 13$. What is the value of $g(6)$?",
      choices: [
        // distractor: subtracts the constant instead of adding it, computing 48 - 13
        { id: "A", text: "$35$" },
        { id: "B", text: "$61$" },
        // distractor: multiplies 13 by 8 and adds the input, computing 8(13) + 6
        { id: "C", text: "$110$" },
        // distractor: adds before multiplying, computing 8(6 + 13)
        { id: "D", text: "$152$" }
      ],
      correctAnswer: "B",
      hint: "Replace $x$ with $6$, then multiply before you add.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** Substitute $6$ for $x$: $8(6) + 13 = 48 + 13 = 61$.\n\n**The Full Solution:**\nStep 1: The value of $g(6)$ is the value of $g(x)$ when $x = 6$, so replace $x$ with $6$ in $g(x) = 8x + 13$.\nStep 2: Multiply first: $8(6) = 48$.\nStep 3: Add the constant: $48 + 13 = 61$. Check by reversing the steps: $61 - 13 = 48$, and $48 \\div 8 = 6$, the input ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($35$): subtracts the constant instead of adding it, giving $48 - 13$.\n* Choice C ($110$): multiplies the constant by $8$ and then adds the input, giving $8(13) + 6$.\n* Choice D ($152$): adds inside first, giving $8(6 + 13)$, which ignores order of operations.\n\n**Test Day Takeaway:** $g(6)$ means substitute $6$ for the variable everywhere it appears, then follow order of operations: multiplication before addition.",
      skills: ["function-evaluation", "function-notation"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "$g(x) = x^{2} + 3x$\nFor the given function $g$, what is the value of $g(-5)$?",
      choices: [
        // distractor: evaluates (-5)^2 as -25, giving -25 - 15
        { id: "A", text: "$-40$" },
        // distractor: doubles -5 instead of squaring it, giving -10 - 15
        { id: "B", text: "$-25$" },
        { id: "C", text: "$10$" },
        // distractor: drops the negative sign in the 3x term, giving 25 + 15
        { id: "D", text: "$40$" }
      ],
      correctAnswer: "C",
      hint: "Put $-5$ in parentheses everywhere $x$ appears.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** $g(-5) = (-5)^{2} + 3(-5) = 25 - 15 = 10$.\n\n**The Full Solution:**\nStep 1: Substitute $-5$ for $x$, keeping it in parentheses: $g(-5) = (-5)^{2} + 3(-5)$.\nStep 2: Evaluate each term: $(-5)^{2} = 25$ and $3(-5) = -15$.\nStep 3: Combine: $25 + (-15) = 10$. Check by factoring: $g(x) = x(x + 3)$, so $g(-5) = (-5)(-2) = 10$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-40$): treats $(-5)^{2}$ as $-25$, giving $-25 - 15$.\n* Choice B ($-25$): doubles $-5$ instead of squaring it, giving $-10 - 15$.\n* Choice D ($40$): squares correctly but loses the sign of the second term, giving $25 + 15$.\n\n**Test Day Takeaway:** When the input is negative, wrap it in parentheses before squaring; a negative number squared is positive.",
      skills: ["function-evaluation", "function-notation"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "$f(x) = kx - 7$\nIn the given function $f$, $k$ is a constant. If $f(4) = 13$, what is the value of $f(1)$?",
      choices: [
        // distractor: evaluates f(0) = -7 instead of f(1)
        { id: "A", text: "$-7$" },
        { id: "B", text: "$-2$" },
        // distractor: reports the constant k = 5 instead of f(1)
        { id: "C", text: "$5$" },
        // distractor: repeats the given value f(4) = 13
        { id: "D", text: "$13$" }
      ],
      correctAnswer: "B",
      hint: "Find $k$ from the value you are given first.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~30s):** $4k - 7 = 13$ gives $k = 5$, so $f(1) = 5 - 7 = -2$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 4$: $f(4) = 4k - 7$, and this equals $13$.\nStep 2: Solve for the constant: $4k = 20$, so $k = 5$ and $f(x) = 5x - 7$.\nStep 3: Evaluate at $x = 1$: $f(1) = 5(1) - 7 = -2$. Check: $f(4) = 5(4) - 7 = 13$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-7$): evaluates at $x = 0$, which returns the constant term instead of $f(1)$.\n* Choice C ($5$): finds $k$ correctly but reports it instead of $f(1)$.\n* Choice D ($13$): repeats the value given at $x = 4$.\n\n**Test Day Takeaway:** One known input-output pair pins down an unknown constant; only then can another input be evaluated.",
      skills: ["function-evaluation", "function-notation", "finding-function-from-conditions"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "The function $h$ is defined by $h(t) = 40 - 8t$, where $h(t)$ is the amount of water, in liters, in a tank $t$ minutes after the tank begins to drain. What is the best interpretation of $h(3) = 16$ in this context?",
      choices: [
        { id: "A", text: "The tank contains $16$ liters of water $3$ minutes after it begins to drain." },
        // distractor: reads the output 16 as a change in the amount, though the tank loses 40 - 16 = 24 liters
        { id: "B", text: "The amount of water in the tank decreases by $16$ liters in the first $3$ minutes." },
        // distractor: swaps the input and the output
        { id: "C", text: "The tank contains $3$ liters of water $16$ minutes after it begins to drain." },
        // distractor: reads the input 3 as the rate, though the tank loses 8 liters each minute
        { id: "D", text: "The amount of water in the tank decreases by $3$ liters each minute." }
      ],
      correctAnswer: "A",
      hint: "Which number is the time and which is the amount of water?",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** In $h(3) = 16$ the input $3$ is the time in minutes and the output $16$ is the amount of water in liters.\n\n**The Full Solution:**\nStep 1: The input $t$ is the number of minutes after the tank begins to drain, so $t = 3$ means $3$ minutes.\nStep 2: The output $h(t)$ is the amount of water, in liters, in the tank at that time, so $h(3) = 16$ means the tank holds $16$ liters.\nStep 3: Together: $3$ minutes after the tank begins to drain, it contains $16$ liters. Check: $40 - 8(3) = 40 - 24 = 16$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B: treats $16$ as the amount drained. The tank starts with $40$ liters, so it loses $40 - 16 = 24$ liters in $3$ minutes.\n* Choice C: swaps the roles of the input and the output.\n* Choice D: treats the input $3$ as a rate. The rate is the coefficient of $t$: the tank loses $8$ liters each minute.\n\n**Test Day Takeaway:** In a statement $h(a) = b$, the number inside the parentheses is the input quantity and the number after the equals sign is the output quantity.",
      skills: ["function-notation"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "$f(x) = \\dfrac{7}{x^{2} - 10x + c}$\nIn the given function, $c$ is a constant. If $f$ is undefined for exactly one value of $x$, what is the value of $c$?",
      choices: [
        // distractor: makes a sign error in the discriminant, solving 100 + 4c = 0
        { id: "A", text: "$-25$" },
        // distractor: copies the magnitude of the x-coefficient as c
        { id: "B", text: "$10$" },
        { id: "C", text: "$25$" },
        // distractor: sets c equal to b^2 = 100, forgetting the factor of 4 in b^2 - 4ac
        { id: "D", text: "$100$" }
      ],
      correctAnswer: "C",
      hint: "When does a quadratic have exactly one zero?",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~30s):** The denominator must have exactly one zero, so its discriminant is $0$: $(-10)^{2} - 4(1)(c) = 0$, giving $c = 25$.\n\n**The Full Solution:**\nStep 1: A fraction is undefined exactly where its denominator equals $0$, so $x^{2} - 10x + c = 0$ must have exactly one real solution.\nStep 2: A quadratic has exactly one real solution when its discriminant is $0$: $(-10)^{2} - 4(1)(c) = 100 - 4c = 0$.\nStep 3: Solve: $4c = 100$, so $c = 25$. Check: $x^{2} - 10x + 25 = (x - 5)^{2}$, which equals $0$ only at $x = 5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-25$): drops the minus sign in $b^{2} - 4ac$ and solves $100 + 4c = 0$. With $c = -25$ the denominator has two zeros.\n* Choice B ($10$): copies the coefficient of $x$. With $c = 10$ the discriminant is $60$, so there are two zeros.\n* Choice D ($100$): sets $c = b^{2}$ and forgets the factor of $4$; the discriminant would then be $-300$, and $f$ would be defined everywhere.\n\n**Test Day Takeaway:** A rational function is undefined at the zeros of its denominator; \"exactly one\" value means a perfect-square denominator, or a discriminant of $0$.",
      skills: ["domain-restrictions", "function-notation"]
    }
  ],

  // Section: Simple Function Problems
  "Simple Function Problems": [
    {
      id: 1,
      difficulty: "easy",
      question: "The functions $h$ and $m$ are defined by $h(x) = 2x + 5$ and $m(x) = 3x - 1$. What is the value of $m(h(4))$?",
      choices: [
        // distractor: evaluates m(4) and never applies h
        { id: "A", text: "$11$" },
        // distractor: composes in the wrong order, computing h(m(4))
        { id: "B", text: "$27$" },
        { id: "C", text: "$38$" },
        // distractor: multiplies h(4) by m(4) instead of composing
        { id: "D", text: "$143$" }
      ],
      correctAnswer: "C",
      hint: "Work from the inside out: the output of $h$ is the input of $m$.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~20s):** $h(4) = 13$, and $m(13) = 39 - 1 = 38$.\n\n**The Full Solution:**\nStep 1: Evaluate the inner function: $h(4) = 2(4) + 5 = 13$.\nStep 2: Use that output as the input of $m$: $m(h(4)) = m(13)$.\nStep 3: Evaluate: $m(13) = 3(13) - 1 = 38$. Check with the combined rule: $m(h(x)) = 3(2x + 5) - 1 = 6x + 14$, and $6(4) + 14 = 38$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($11$): evaluates $m(4)$ and skips the inner function.\n* Choice B ($27$): applies the functions in the wrong order: $m(4) = 11$ and $h(11) = 27$.\n* Choice D ($143$): multiplies $h(4) = 13$ by $m(4) = 11$ instead of feeding one into the other.\n\n**Test Day Takeaway:** In $m(h(4))$, $h$ acts first because it is innermost; its output becomes the input of $m$.",
      skills: ["function-composition", "function-evaluation"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "The function $k$ is defined by $k(x) = 6x + 5$. Which expression is equivalent to $k(x - 2)$?",
      choices: [
        // distractor: drops the constant +5
        { id: "A", text: "$6x - 12$" },
        { id: "B", text: "$6x - 7$" },
        // distractor: subtracts 2 from the constant instead of substituting
        { id: "C", text: "$6x + 3$" },
        // distractor: substitutes x + 2, flipping the sign inside the input
        { id: "D", text: "$6x + 17$" }
      ],
      correctAnswer: "B",
      hint: "Substitute the whole expression $x - 2$ for $x$, then distribute.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** $k(x - 2) = 6(x - 2) + 5 = 6x - 12 + 5 = 6x - 7$.\n\n**The Full Solution:**\nStep 1: Replace $x$ with $x - 2$: $k(x - 2) = 6(x - 2) + 5$.\nStep 2: Distribute the $6$ across both terms: $6(x - 2) = 6x - 12$.\nStep 3: Combine the constants: $6x - 12 + 5 = 6x - 7$. Check at $x = 3$: $k(1) = 6(1) + 5 = 11$, and $6(3) - 7 = 11$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6x - 12$): distributes correctly but drops the $+5$ from the original rule.\n* Choice C ($6x + 3$): subtracts $2$ from the constant term instead of substituting, giving $5 - 2 = 3$.\n* Choice D ($6x + 17$): substitutes $x + 2$, flipping the sign inside the input, and gets $6x + 12 + 5$.\n\n**Test Day Takeaway:** When the input is an expression, put it in parentheses and distribute; only the variable is replaced, never the constant term.",
      skills: ["function-evaluation", "function-transformations"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "The table shows three values of $x$ and their corresponding values of $f(x)$ and $g(x)$, where $f$ and $g$ are linear functions. Which expression is equivalent to $f(x) + g(x)$?",
      diagram: { type: "dataTable", params: { headers: ["x", "f(x)", "g(x)"], rows: [["1", "7", "8"], ["2", "10", "7"], ["3", "13", "6"]] } },
      choices: [
        // distractor: keeps only f's intercept
        { id: "A", text: "$2x + 4$" },
        { id: "B", text: "$2x + 13$" },
        // distractor: uses the value at x = 1 as the intercept
        { id: "C", text: "$2x + 15$" },
        // distractor: adds slope magnitudes, ignoring g's sign
        { id: "D", text: "$4x + 13$" }
      ],
      correctAnswer: "B",
      hint: "Add the two outputs at each $x$ first, then find the line that fits those three sums.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** The sums are $15$, $17$, and $19$, a rise of $2$ per step, so the sum is $2x + 13$.\n\n**The Full Solution:**\nStep 1: Add the two table values at each input: $7 + 8 = 15$, $10 + 7 = 17$, and $13 + 6 = 19$.\nStep 2: The inputs go up by $1$ and the sums go up by $2$, so the sum function is linear with slope $2$.\nStep 3: Back up one step from $x = 1$: at $x = 0$ the sum would be $15 - 2 = 13$, so $f(x) + g(x) = 2x + 13$. Check at $x = 3$: $2(3) + 13 = 19$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2x + 4$): finds the slope of the sum correctly but keeps only $f$'s $y$-intercept of $4$.\n* Choice C ($2x + 15$): uses the sum at $x = 1$ as the $y$-intercept without backing up to $x = 0$.\n* Choice D ($4x + 13$): adds the sizes of the two slopes, $3$ and $1$, ignoring that $g$ decreases.\n\n**Test Day Takeaway:** To add two linear functions, add their outputs column by column; the slopes add with their signs and so do the intercepts.",
      skills: ["function-evaluation", "function-notation"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "$f(x) = 2x^{2} - 5x$\nThe function $f$ is defined by the given equation. What is the value of $f(4) - f(-1)$?",
      choices: [
        { id: "A", text: "$5$" },
        // distractor: evaluates f(-1) as 2 - 5 = -3, losing the sign of -5(-1)
        { id: "B", text: "$15$" },
        // distractor: adds f(4) and f(-1) instead of subtracting
        { id: "C", text: "$19$" },
        // distractor: evaluates f(4 - (-1)) = f(5) instead of subtracting outputs
        { id: "D", text: "$25$" }
      ],
      correctAnswer: "A",
      hint: "Find each output separately, then subtract.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~30s):** $f(4) = 32 - 20 = 12$ and $f(-1) = 2 + 5 = 7$, so the difference is $12 - 7 = 5$.\n\n**The Full Solution:**\nStep 1: Evaluate at $4$: $f(4) = 2(4)^{2} - 5(4) = 32 - 20 = 12$.\nStep 2: Evaluate at $-1$: $f(-1) = 2(-1)^{2} - 5(-1) = 2 + 5 = 7$.\nStep 3: Subtract the outputs: $f(4) - f(-1) = 12 - 7 = 5$. Check by factoring: $f(x) = x(2x - 5)$, so $f(4) = 4(3) = 12$ and $f(-1) = (-1)(-7) = 7$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($15$): computes $-5(-1)$ as $-5$, so $f(-1) = -3$ and $12 - (-3) = 15$.\n* Choice C ($19$): adds the two outputs, $12 + 7$, instead of subtracting.\n* Choice D ($25$): subtracts the inputs first and evaluates $f(5) = 50 - 25 = 25$.\n\n**Test Day Takeaway:** $f(a) - f(b)$ is a difference of outputs; evaluate each one fully before subtracting, and it is not the same as $f(a - b)$.",
      skills: ["function-evaluation"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "$q(x) = ax^{2} + bx + 9$\nIn the given function $q$, $a$ and $b$ are constants. If $q(2) = 21$ and $q(4) = 25$, what is the value of $q(6)$?",
      choices: [
        // distractor: drops the constant term 9, reporting -36 + 48 = 12
        { id: "A", text: "$12$" },
        { id: "B", text: "$21$" },
        // distractor: evaluates at x = 5 instead of x = 6, giving 24
        { id: "C", text: "$24$" },
        // distractor: extends 21, 25 as an arithmetic pattern to 29 instead of using the function
        { id: "D", text: "$29$" }
      ],
      correctAnswer: "B",
      hint: "The two given values produce two equations in $a$ and $b$.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~55s):** The two values give $2a + b = 6$ and $4a + b = 4$, so $a = -1$ and $b = 8$; then $q(6) = -36 + 48 + 9 = 21$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 2$: $4a + 2b + 9 = 21$, so $4a + 2b = 12$ and $2a + b = 6$.\nStep 2: Substitute $x = 4$: $16a + 4b + 9 = 25$, so $16a + 4b = 16$ and $4a + b = 4$.\nStep 3: Subtract the first result from the second: $2a = -2$, so $a = -1$ and $b = 6 - 2(-1) = 8$. Then $q(6) = -(36) + 8(6) + 9 = 21$. Check: $q(2) = -4 + 16 + 9 = 21$ and $q(4) = -16 + 32 + 9 = 25$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): finds $a = -1$ and $b = 8$ but drops the constant term, reporting $-36 + 48 = 12$.\n* Choice C ($24$): evaluates at $x = 5$ instead of $x = 6$, giving $-25 + 40 + 9 = 24$.\n* Choice D ($29$): treats $21$ and $25$ as an arithmetic pattern and extends it to $29$, ignoring that $q$ is quadratic.\n\n**Test Day Takeaway:** Two input-output pairs pin down two unknown constants; solve that system before evaluating anywhere else.",
      skills: ["function-evaluation", "finding-function-from-conditions"]
    }
  ],

  // Section: Complex Function Problems
  "Complex Function Problems": [
    {
      id: 1,
      difficulty: "easy",
      question: "The table shows four values of $x$ and their corresponding values of $f(x)$. What is the value of $f(f(3))$?",
      diagram: { type: "dataTable", params: { headers: ["x", "f(x)"], rows: [["1", "3"], ["2", "5"], ["3", "4"], ["4", "1"]] } },
      choices: [
        { id: "A", text: "$1$" },
        // distractor: starts from x = 4 instead of x = 3
        { id: "B", text: "$3$" },
        // distractor: stops at the inner value f(3)
        { id: "C", text: "$4$" },
        // distractor: adds f(3) and f(4)
        { id: "D", text: "$5$" }
      ],
      correctAnswer: "A",
      hint: "Look up the inner output in the table first, then treat that number as a new input.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** $f(3) = 4$, and the row for $4$ gives $f(4) = 1$.\n\n**The Full Solution:**\nStep 1: Read the inner value. The row with $x = 3$ shows $f(3) = 4$.\nStep 2: Replace the inside: $f(f(3)) = f(4)$.\nStep 3: Read $f(4)$ from the row with $x = 4$: $f(4) = 1$. Check the order: applying $f$ twice starting at $3$ gives $3 \\to 4 \\to 1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($3$): starts from the wrong input and computes $f(f(4)) = f(1) = 3$.\n* Choice C ($4$): stops after the inner step and reports $f(3)$.\n* Choice D ($5$): adds the two table values $f(3) + f(4) = 4 + 1$ instead of composing them.\n\n**Test Day Takeaway:** With a table, composition is two lookups: find the inner output, then find that number in the input column.",
      skills: ["function-composition", "function-evaluation"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "The functions $f$ and $g$ are defined by $f(x) = 2x + 5$ and $g(x) = 3x - 4$. Which expression is equivalent to $g(f(x))$?",
      choices: [
        // distractor: composes in the wrong order, computing f(g(x)) = 2(3x - 4) + 5
        { id: "A", text: "$6x - 3$" },
        // distractor: multiplies only the x-term of f(x) by 3, giving 6x + 5 - 4
        { id: "B", text: "$6x + 1$" },
        { id: "C", text: "$6x + 11$" },
        // distractor: distributes the 3 but drops the -4 from g
        { id: "D", text: "$6x + 15$" }
      ],
      correctAnswer: "C",
      hint: "Replace $x$ in $g$ with the whole expression $2x + 5$.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~20s):** $g(f(x)) = 3(2x + 5) - 4 = 6x + 15 - 4 = 6x + 11$.\n\n**The Full Solution:**\nStep 1: In $g(f(x))$, the output of $f$ is the input of $g$, so replace $x$ in $g(x) = 3x - 4$ with $2x + 5$: $g(f(x)) = 3(2x + 5) - 4$.\nStep 2: Distribute: $3(2x + 5) = 6x + 15$.\nStep 3: Combine the constants: $6x + 15 - 4 = 6x + 11$. Check at $x = 1$: $f(1) = 7$ and $g(7) = 17$, while $6(1) + 11 = 17$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6x - 3$): composes in the wrong order, computing $f(g(x)) = 2(3x - 4) + 5$.\n* Choice B ($6x + 1$): multiplies only the $x$-term of $f(x)$ by $3$, giving $6x + 5 - 4$.\n* Choice D ($6x + 15$): distributes correctly but drops the $-4$ from $g$.\n\n**Test Day Takeaway:** Write the inner expression in parentheses inside the outer rule, then distribute; the outer function's constant still applies at the end.",
      skills: ["function-composition"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "$f(x) = 2x + 5$\nThe function $g$ is defined such that $f(g(x)) = 6x - 1$ for all values of $x$. Which expression is equivalent to $g(x)$?",
      choices: [
        { id: "A", text: "$3x - 3$" },
        // distractor: adds 5 instead of subtracting it before halving, giving (6x + 4)/2
        { id: "B", text: "$3x + 2$" },
        // distractor: subtracts the 5 but never divides by 2
        { id: "C", text: "$6x - 6$" },
        // distractor: divides only the constant term by 2
        { id: "D", text: "$6x - 3$" }
      ],
      correctAnswer: "A",
      hint: "Undo what $f$ does, one step at a time.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~30s):** $2g(x) + 5 = 6x - 1$ gives $2g(x) = 6x - 6$, so $g(x) = 3x - 3$.\n\n**The Full Solution:**\nStep 1: Applying $f$ to $g(x)$ means $2g(x) + 5$, and that equals $6x - 1$.\nStep 2: Subtract $5$ from both sides: $2g(x) = 6x - 6$.\nStep 3: Divide by $2$: $g(x) = 3x - 3$. Check at $x = 2$: $g(2) = 3$ and $f(3) = 11$, matching $6(2) - 1 = 11$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($3x + 2$): adds the $5$ instead of subtracting it, producing $\\dfrac{6x + 4}{2}$.\n* Choice C ($6x - 6$): removes the $5$ correctly but never divides by the coefficient $2$.\n* Choice D ($6x - 3$): divides only the constant by $2$ and leaves the $x$-term untouched.\n\n**Test Day Takeaway:** To recover the inner function, undo the outer function's operations in reverse order.",
      skills: ["function-composition", "finding-function-from-conditions"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "The graph of $y = h(x)$ is shown. The function $p$ is defined by $p(x) = h(x + 3)$. What is the value of $p(1)$?",
      diagram: { type: "linearGraph", params: { slope: -1, yIntercept: 5, xRange: [-3, 8], yRange: [-4, 8], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[0, 5], [5, 0]], label: "y = h(x)" } },
      choices: [
        // distractor: evaluates h(7), adding the shift to the input twice
        { id: "A", text: "$-2$" },
        { id: "B", text: "$1$" },
        // distractor: evaluates h(1), ignoring the shift entirely
        { id: "C", text: "$4$" },
        // distractor: evaluates h(-2), subtracting the shift instead of adding it
        { id: "D", text: "$7$" }
      ],
      correctAnswer: "B",
      hint: "Decide which input of $h$ the value $p(1)$ asks for.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** $p(1) = h(1 + 3) = h(4)$, and the graph gives $h(4) = 1$.\n\n**The Full Solution:**\nStep 1: From the graph, $h$ passes through $(0, 5)$ and $(5, 0)$, so $h(x) = -x + 5$.\nStep 2: The definition $p(x) = h(x + 3)$ means the input handed to $h$ is $1 + 3 = 4$.\nStep 3: Read or compute $h(4) = -4 + 5 = 1$, so $p(1) = 1$. Check: the graph passes through $(4, 1)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$): uses $h(7)$, adding the $3$ a second time.\n* Choice C ($4$): reads $h(1)$ straight off the graph and ignores the shift.\n* Choice D ($7$): uses $h(-2)$, subtracting the $3$ instead of adding it.\n\n**Test Day Takeaway:** $h(x + 3)$ asks $h$ about a larger input even though the graph moves to the left.",
      skills: ["function-transformations", "function-evaluation"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "For the function $f$, $f(x + 1) = 2f(x)$ for all values of $x$. If $f(3) = 5$, which expression is equal to $f(6)$?",
      choices: [
        // distractor: counts two steps from x = 3 to x = 6 instead of three
        { id: "A", text: "$5(2)^{2}$" },
        { id: "B", text: "$5(2)^{3}$" },
        // distractor: uses the step count as the base and the base as the exponent
        { id: "C", text: "$5(3)^{2}$" },
        // distractor: uses the input 6 as the number of doublings
        { id: "D", text: "$5(2)^{6}$" }
      ],
      correctAnswer: "B",
      hint: "Count how many single steps separate $x = 3$ from $x = 6$.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~30s):** Going from $x = 3$ to $x = 6$ takes three doublings, so $f(6) = 5(2)^{3}$.\n\n**The Full Solution:**\nStep 1: The rule doubles the value each time the input rises by $1$.\nStep 2: From $3$ to $6$ the input rises by $1$ three times, so the value doubles three times.\nStep 3: Therefore $f(6) = 5 \\cdot 2 \\cdot 2 \\cdot 2 = 5(2)^{3}$. Check step by step: $f(4) = 10$, $f(5) = 20$, $f(6) = 40$, and $5(2)^3 = 40$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($5(2)^{2}$): counts only two doublings, which lands on $f(5) = 20$.\n* Choice C ($5(3)^{2}$): swaps the roles of the doubling factor and the step count.\n* Choice D ($5(2)^{6}$): uses the input $6$ as the number of doublings, ignoring that the count starts at $x = 3$.\n\n**Test Day Takeaway:** A recursive rule multiplies once per step, so count the steps between inputs, not the inputs themselves.",
      skills: ["function-evaluation", "finding-function-from-conditions"]
    }
  ]
};
