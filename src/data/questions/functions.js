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
      question: "$f(x) = x^{2} - 10x + c$\nIn the given function, $c$ is a constant. The minimum value of $f(x)$ is $3$. What is the value of $f(2)$?",
      choices: [
        // distractor: takes c = 3, treating the minimum value as the constant term
        { id: "A", text: "$-13$" },
        // distractor: reports the minimum value of f
        { id: "B", text: "$3$" },
        { id: "C", text: "$12$" },
        // distractor: reports c instead of evaluating f(2)
        { id: "D", text: "$28$" }
      ],
      correctAnswer: "C",
      hint: "The minimum of a parabola that opens upward occurs at its vertex.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~50s):** The minimum occurs at $x = \\frac{10}{2} = 5$, so $f(5) = 25 - 50 + c = 3$ gives $c = 28$; then $f(2) = 4 - 20 + 28 = 12$.\n\n**The Full Solution:**\nStep 1: The graph opens upward, so the minimum is at the vertex, where $x = -\\frac{-10}{2(1)} = 5$.\nStep 2: Set $f(5) = 3$: $25 - 50 + c = 3$, so $c = 28$.\nStep 3: Evaluate: $f(2) = 2^{2} - 10(2) + 28 = 4 - 20 + 28 = 12$. Check: $f(x) = (x - 5)^{2} + 3$, and $(2 - 5)^{2} + 3 = 9 + 3 = 12$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-13$): takes $c = 3$, treating the minimum value as the constant term, so $f(2) = 4 - 20 + 3$.\n* Choice B ($3$): is the minimum value of $f$, which occurs at $x = 5$, not $x = 2$.\n* Choice D ($28$): is the value of $c$, found halfway through the solution.\n\n**Test Day Takeaway:** A minimum (or maximum) value of a quadratic is its value at the vertex; use it to find the missing constant.",
      skills: ["domain-restrictions", "function-notation"]
    }
  ],

  // Section: Simple Function Problems
  "Simple Function Problems": [
    {
      id: 1,
      difficulty: "easy",
      question: "The function $h$ is defined by $h(x) = 3\\sqrt{x} - 2$. What is the value of $h(25)$?",
      choices: [
        // distractor: reports only the square root of 25
        { id: "A", text: "$5$" },
        { id: "B", text: "$13$" },
        // distractor: forgets to subtract 2
        { id: "C", text: "$15$" },
        // distractor: multiplies 3 by 25 without taking the square root
        { id: "D", text: "$73$" }
      ],
      correctAnswer: "B",
      hint: "Take the square root first, then multiply by 3 and subtract 2.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** $\\sqrt{25} = 5$, so $h(25) = 3(5) - 2 = 13$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 25$: $h(25) = 3\\sqrt{25} - 2$.\nStep 2: $\\sqrt{25} = 5$, so $3\\sqrt{25} = 15$.\nStep 3: $15 - 2 = 13$. Check: $13 + 2 = 15 = 3 \\cdot 5$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): stops after taking the square root of $25$.\n* Choice C ($15$): forgets to subtract $2$.\n* Choice D ($73$): computes $3(25) - 2$, skipping the square root.\n\n**Test Day Takeaway:** Substitute, then follow the order of operations: root, multiply, subtract.",
      skills: ["function-composition", "function-evaluation"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "The function $k$ is defined by $k(x) = 6x + 5$. For what value of $x$ is $k(x) = 47$?",
      choices: [
        { id: "A", text: "$7$" },
        // distractor: adds 5 instead of subtracting it, getting 6x = 52
        { id: "B", text: "$\\frac{26}{3}$" },
        // distractor: subtracts 5 but does not divide by 6
        { id: "C", text: "$42$" },
        // distractor: evaluates k(47) instead of solving k(x) = 47
        { id: "D", text: "$287$" }
      ],
      correctAnswer: "A",
      hint: "Set 6x + 5 equal to 47 and solve for x.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** $6x + 5 = 47$ gives $6x = 42$, so $x = 7$.\n\n**The Full Solution:**\nStep 1: Set the function equal to $47$: $6x + 5 = 47$.\nStep 2: Subtract $5$ from both sides: $6x = 42$.\nStep 3: Divide both sides by $6$: $x = 7$. Check: $k(7) = 6(7) + 5 = 47$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{26}{3}$): adds $5$ to both sides instead of subtracting, giving $6x = 52$.\n* Choice C ($42$): subtracts $5$ but forgets to divide by $6$.\n* Choice D ($287$): evaluates $k(47) = 6(47) + 5$ instead of solving $k(x) = 47$.\n\n**Test Day Takeaway:** \"For what value of $x$ is $k(x) = 47$?\" means solve for the input, not plug $47$ in.",
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
      question: "For the function $f$, the table shows four values of $x$ and their corresponding values of $f(x)$. Which equation defines $f$?",
      diagram: { type: "dataTable", params: { headers: ["x", "f(x)"], rows: [["1", "3"], ["2", "6"], ["3", "11"], ["4", "18"]] } },
      choices: [
        // distractor: fits only the first row of the table
        { id: "A", text: "$f(x) = x + 2$" },
        // distractor: fits the first two rows but gives f(3) = 9, not 11
        { id: "B", text: "$f(x) = 3x$" },
        { id: "C", text: "$f(x) = x^{2} + 2$" },
        // distractor: fits only the first row; it gives f(2) = 9
        { id: "D", text: "$f(x) = 2x^{2} + 1$" }
      ],
      correctAnswer: "C",
      hint: "Test each equation on every row, not just the first one.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** $x^{2} + 2$ gives $3, 6, 11, 18$ for $x = 1, 2, 3, 4$, matching every row.\n\n**The Full Solution:**\nStep 1: Check $f(x) = x^{2} + 2$ at $x = 1$ and $x = 2$: $1 + 2 = 3$ and $4 + 2 = 6$.\nStep 2: Check $x = 3$ and $x = 4$: $9 + 2 = 11$ and $16 + 2 = 18$.\nStep 3: Every row matches, so $f(x) = x^{2} + 2$. Check: the outputs rise by $3, 5, 7$, the pattern of $x^{2}$ plus a constant. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($f(x) = x + 2$): fits the first row but gives $f(2) = 4$, not $6$.\n* Choice B ($f(x) = 3x$): fits the first two rows but gives $f(3) = 9$, not $11$.\n* Choice D ($f(x) = 2x^{2} + 1$): fits the first row but gives $f(2) = 9$, not $6$.\n\n**Test Day Takeaway:** An equation defines a table only if it matches every row; check past the first two.",
      skills: ["function-composition", "function-evaluation"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "The function $f$ is defined by $f(x) = 5(2)^{x}$. What is the value of $f(3)$?",
      choices: [
        // distractor: adds 5 and 2^3 instead of multiplying
        { id: "A", text: "$13$" },
        // distractor: multiplies 2 by 3 instead of raising 2 to the third power
        { id: "B", text: "$30$" },
        { id: "C", text: "$40$" },
        // distractor: multiplies 5 by 2 first and then cubes 10
        { id: "D", text: "$1{,}000$" }
      ],
      correctAnswer: "C",
      hint: "Evaluate the power before multiplying by 5.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** $2^{3} = 8$, so $f(3) = 5 \\cdot 8 = 40$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 3$: $f(3) = 5(2)^{3}$.\nStep 2: The exponent applies only to $2$: $2^{3} = 8$.\nStep 3: Multiply: $5 \\cdot 8 = 40$. Check: $40 \\div 5 = 8 = 2 \\cdot 2 \\cdot 2$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($13$): adds $5 + 2^{3}$ instead of multiplying.\n* Choice B ($30$): treats $2^{3}$ as $2 \\cdot 3$.\n* Choice D ($1{,}000$): multiplies $5 \\cdot 2$ first and cubes $10$; the exponent applies only to $2$.\n\n**Test Day Takeaway:** In $a(b)^{x}$, raise $b$ to the power first, then multiply by $a$.",
      skills: ["function-composition"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "$f(x) = 2x^{2} + c$\nThe function $f$ is defined by the given equation, where $c$ is a constant. If $f(3) = 11$, what is the value of $f(-2)$?",
      choices: [
        // distractor: squares -2 as -4 when evaluating f(-2)
        { id: "A", text: "$-15$" },
        // distractor: reports c instead of f(-2)
        { id: "B", text: "$-7$" },
        { id: "C", text: "$1$" },
        // distractor: assumes f(-2) equals f(3)
        { id: "D", text: "$11$" }
      ],
      correctAnswer: "C",
      hint: "Use f(3) = 11 to find c first.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** $2(9) + c = 11$ gives $c = -7$, so $f(-2) = 2(4) - 7 = 1$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 3$: $f(3) = 2(3)^{2} + c = 18 + c$.\nStep 2: Set $18 + c = 11$, so $c = -7$.\nStep 3: Evaluate: $f(-2) = 2(-2)^{2} - 7 = 8 - 7 = 1$. Check: $f(3) = 18 - 7 = 11$, as given. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-15$): squares $-2$ as $-4$, giving $2(-4) - 7$.\n* Choice B ($-7$): is the value of $c$, not $f(-2)$.\n* Choice D ($11$): assumes $f(-2) = f(3)$; the graph is symmetric about $x = 0$, so $f(-3) = 11$, not $f(-2)$.\n\n**Test Day Takeaway:** Use the given point to find the constant, then evaluate; $(-2)^{2} = 4$, not $-4$.",
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
      question: "A bike rental shop charges \\$24 for the first hour and \\$9 for each additional hour. Which function $f$ gives the total charge, in dollars, for renting a bike for $h$ hours, where $h$ is a positive integer?",
      choices: [
        { id: "A", text: "$f(h) = 9h + 15$" },
        // distractor: charges 9 dollars for every hour on top of the 24-dollar first hour
        { id: "B", text: "$f(h) = 9h + 24$" },
        // distractor: swaps the two rates, charging 9 for the first hour and 24 for each additional hour
        { id: "C", text: "$f(h) = 24h - 15$" },
        // distractor: uses 24 as the hourly rate and 9 as a fixed fee
        { id: "D", text: "$f(h) = 24h + 9$" }
      ],
      correctAnswer: "A",
      hint: "The first hour costs 24 dollars; only the remaining h - 1 hours cost 9 dollars each.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~40s):** The charge is $24 + 9(h - 1) = 9h + 15$.\n\n**The Full Solution:**\nStep 1: The first hour costs \\$24, and the other $h - 1$ hours cost \\$9 each.\nStep 2: Total charge: $f(h) = 24 + 9(h - 1)$.\nStep 3: Distribute and combine: $24 + 9h - 9 = 9h + 15$. Check: $f(1) = 9 + 15 = 24$ and $f(3) = 27 + 15 = 42 = 24 + 9 + 9$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($f(h) = 9h + 24$): charges \\$9 for every hour, including the first, on top of the \\$24; this gives $f(1) = 33$.\n* Choice C ($f(h) = 24h - 15$): swaps the rates, charging \\$9 for the first hour and \\$24 for each additional hour.\n* Choice D ($f(h) = 24h + 9$): uses \\$24 as the hourly rate and \\$9 as a fixed fee.\n\n**Test Day Takeaway:** When the first unit has its own price, the rest are counted as $h - 1$; test $h = 1$ to check.",
      skills: ["function-evaluation", "finding-function-from-conditions"]
    }
  ]
};
