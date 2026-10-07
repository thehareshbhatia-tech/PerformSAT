// Practice questions for Quadratics module
// Questions are organized by SECTION (question type)

export const quadraticsQuestions = {
  // Section: Overview
  "Overview": [
    {
      id: 1,
      difficulty: "easy",
      question: "$x^{2} + 28 = 92$\nWhat is the positive solution to the given equation?",
      choices: [
        { id: "A", text: "$8$" },
        // distractor: divides 64 by 2 instead of taking its square root
        { id: "B", text: "$32$" },
        // distractor: finds x^2 = 64 but stops before taking the square root
        { id: "C", text: "$64$" },
        // distractor: adds 28 to 92 instead of subtracting, and does not take the square root
        { id: "D", text: "$120$" }
      ],
      correctAnswer: "A",
      hint: "Isolate $x^{2}$ first, then take the square root.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** Subtract $28$ to get $x^{2} = 64$, so the positive solution is $x = 8$.\n\n**The Full Solution:**\nStep 1: Subtract $28$ from both sides: $x^{2} = 92 - 28 = 64$.\nStep 2: Take the square root of both sides: $x = 8$ or $x = -8$.\nStep 3: The positive solution is $8$.\n\nCheck: $8^{2} + 28 = 64 + 28 = 92$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($32$): halves $64$ instead of taking its square root.\n* Choice C ($64$): is the value of $x^{2}$, not of $x$.\n* Choice D ($120$): adds $28$ to $92$ and never takes the square root.\n\n**Test Day Takeaway:** For $x^{2} = c$, isolate $x^{2}$, then take the square root; the question tells you which sign it wants.",
      skills: ["identify-quadratic"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "$x(x - 9) = 0$\nWhat are the solutions to the given equation?",
      choices: [
        // distractor: solves x - 9 = 0 as x = -9
        { id: "A", text: "$-9$ and $0$" },
        // distractor: treats the equation as x^2 = 81 and takes both square roots
        { id: "B", text: "$-9$ and $9$" },
        { id: "C", text: "$0$ and $9$" },
        // distractor: divides both sides by x, which loses the solution x = 0
        { id: "D", text: "$9$ only" }
      ],
      correctAnswer: "C",
      hint: "A product is 0 when one of its factors is 0.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** A product equals $0$ when a factor equals $0$: $x = 0$ or $x - 9 = 0$, so the solutions are $0$ and $9$.\n\n**The Full Solution:**\nStep 1: The left side is the product of $x$ and $x - 9$, and the product is $0$.\nStep 2: So either $x = 0$ or $x - 9 = 0$.\nStep 3: Solving $x - 9 = 0$ gives $x = 9$. The solutions are $0$ and $9$.\n\nCheck: $0(0 - 9) = 0$ and $9(9 - 9) = 9(0) = 0$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-9$ and $0$): solves $x - 9 = 0$ with the wrong sign; $-9 - 9 = -18$, not $0$.\n* Choice B ($-9$ and $9$): treats the equation as $x^{2} = 81$; but $(-9)(-9 - 9) = 162$, not $0$.\n* Choice D ($9$ only): divides both sides by $x$, which throws away the solution $x = 0$.\n\n**Test Day Takeaway:** Never divide both sides of an equation by $x$; set each factor equal to $0$ instead.",
      skills: ["identify-quadratic"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "The graph of the quadratic function $f$ is shown, where $y = f(x)$. Which equation could define $f$?",
      diagram: { type: "quadraticVertex", params: { vertex: [3, 6], a: -1, showVertex: true } },
      choices: [
        // distractor: swaps the coordinates of the vertex (3, 6)
        { id: "A", text: "$f(x) = -(x - 6)^{2} + 3$" },
        { id: "B", text: "$f(x) = -(x - 3)^{2} + 6$" },
        // distractor: uses x + 3 for a vertex with x-coordinate 3, which would put the vertex at (-3, 6)
        { id: "C", text: "$f(x) = -(x + 3)^{2} + 6$" },
        // distractor: has the correct vertex but a positive leading coefficient, so the graph would open upward
        { id: "D", text: "$f(x) = (x - 3)^{2} + 6$" }
      ],
      correctAnswer: "B",
      hint: "Read the vertex from the graph, then decide whether the parabola opens up or down.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** The vertex is $(3, 6)$ and the parabola opens downward, so $f(x) = -(x - 3)^{2} + 6$.\n\n**The Full Solution:**\nStep 1: The highest point of the graph, the vertex, is at $(3, 6)$.\nStep 2: A parabola with vertex $(h, k)$ can be written as $f(x) = a(x - h)^{2} + k$, so $f(x) = a(x - 3)^{2} + 6$.\nStep 3: The graph opens downward, so $a$ is negative. Of the choices, only $f(x) = -(x - 3)^{2} + 6$ fits.\n\nCheck: $f(2) = -(-1)^{2} + 6 = 5$ and $f(4) = -(1)^{2} + 6 = 5$, and the graph passes through $(2, 5)$ and $(4, 5)$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-(x - 6)^{2} + 3$): swaps the coordinates; its vertex is $(6, 3)$.\n* Choice C ($-(x + 3)^{2} + 6$): has its vertex at $(-3, 6)$; the sign inside the parentheses is the opposite of the $x$-coordinate.\n* Choice D ($(x - 3)^{2} + 6$): has the right vertex, but a positive leading coefficient makes the graph open upward.\n\n**Test Day Takeaway:** In $f(x) = a(x - h)^{2} + k$, the vertex is $(h, k)$, and $a < 0$ means the graph opens downward.",
      skills: ["identify-quadratic", "parabola-direction"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "$f(x) = (5 - x)(x + 1)$\nWhat is the maximum value of the given function?",
      choices: [
        // distractor: takes the zeros as -5 and 1, so uses x = -2 for the vertex: f(-2) = -7
        { id: "A", text: "$-7$" },
        // distractor: gives the x-coordinate of the vertex instead of the maximum value
        { id: "B", text: "$2$" },
        // distractor: gives f(0) = 5, the y-intercept
        { id: "C", text: "$5$" },
        { id: "D", text: "$9$" }
      ],
      correctAnswer: "D",
      hint: "The vertex is halfway between the zeros of the function.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~30s):** The zeros are $5$ and $-1$, so the vertex is at $x = 2$, and $f(2) = (3)(3) = 9$.\n\n**The Full Solution:**\nStep 1: Expanding gives $f(x) = -x^{2} + 4x + 5$; the leading coefficient is negative, so the graph opens downward and the vertex gives the maximum.\nStep 2: The zeros of $f$ are $x = 5$ and $x = -1$, so the vertex is at $x = \\frac{5 + (-1)}{2} = 2$.\nStep 3: The maximum value is $f(2) = (5 - 2)(2 + 1) = 9$.\n\nCheck: $f(1) = (4)(2) = 8$ and $f(3) = (2)(4) = 8$, both less than $9$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-7$): uses the zeros $-5$ and $1$, so it evaluates $f(-2) = (7)(-1) = -7$.\n* Choice B ($2$): is the $x$-coordinate of the vertex, not the maximum value.\n* Choice C ($5$): is $f(0)$, the $y$-intercept.\n\n**Test Day Takeaway:** For a quadratic in factored form, average the zeros to find the vertex, then substitute to get the maximum or minimum value.",
      skills: ["parabola-direction"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "$f(x) = (2x + 3)^{2} - (x - 4)^{2}$\nThe given function can be written as $f(x) = ax^{2} + bx + c$, where $a$, $b$, and $c$ are constants. What is the value of $a + b + c$?",
      choices: [
        // distractor: subtracts 8x instead of adding it, getting 3x^2 + 4x - 7
        { id: "A", text: "$0$" },
        { id: "B", text: "$16$" },
        // distractor: evaluates only the first square, (2 + 3)^2, at x = 1
        { id: "C", text: "$25$" },
        // distractor: adds the two squares instead of subtracting, getting 5x^2 + 4x + 25
        { id: "D", text: "$34$" }
      ],
      correctAnswer: "B",
      hint: "The sum $a + b + c$ is the value of $ax^{2} + bx + c$ when $x = 1$.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** $a + b + c = f(1) = (5)^{2} - (-3)^{2} = 25 - 9 = 16$.\n\n**The Full Solution:**\nStep 1: Expand each square: $(2x + 3)^{2} = 4x^{2} + 12x + 9$ and $(x - 4)^{2} = x^{2} - 8x + 16$.\nStep 2: Subtract: $4x^{2} + 12x + 9 - x^{2} + 8x - 16 = 3x^{2} + 20x - 7$.\nStep 3: So $a = 3$, $b = 20$, and $c = -7$, and $a + b + c = 3 + 20 - 7 = 16$.\n\nCheck: $f(1) = (2 + 3)^{2} - (1 - 4)^{2} = 25 - 9 = 16$, which matches. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0$): changes the sign of $16$ but not of $-8x$ when subtracting, giving $3x^{2} + 4x - 7$.\n* Choice C ($25$): evaluates $(2x + 3)^{2}$ at $x = 1$ but forgets to subtract $(x - 4)^{2}$.\n* Choice D ($34$): adds the two squares, giving $5x^{2} + 4x + 25$.\n\n**Test Day Takeaway:** When a question asks for $a + b + c$, substitute $x = 1$ into the original expression instead of expanding.",
      skills: ["identify-quadratic"]
    }
  ],

  // Section: Roots
  "Roots": [
    {
      id: 1,
      difficulty: "easy",
      question: "$x^{2} - 11x + 24 = 0$\nWhat are the solutions to the given equation?",
      choices: [
        // distractor: factors as (x + 3)(x + 8), which would give a middle term of +11x rather than -11x
        { id: "A", text: "$-8$ and $-3$" },
        // distractor: picks 6 and 4, which multiply to 24 but add to 10, and uses the wrong signs as well
        { id: "B", text: "$-6$ and $-4$" },
        { id: "C", text: "$3$ and $8$" },
        // distractor: picks 4 and 6, which multiply to 24 but add to 10, not 11
        { id: "D", text: "$4$ and $6$" }
      ],
      correctAnswer: "C",
      hint: "Factor the expression and read the values that make each factor zero.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** $x^{2} - 11x + 24 = (x - 3)(x - 8)$, so the solutions are $3$ and $8$.\n\n**The Full Solution:**\nStep 1: Factor. Two numbers multiply to $24$ and add to $-11$: they are $-3$ and $-8$, so the equation is $(x - 3)(x - 8) = 0$.\nStep 2: Set each factor equal to zero. $x - 3 = 0$ gives $x = 3$, and $x - 8 = 0$ gives $x = 8$.\nStep 3: Check both. $3^{2} - 11(3) + 24 = 9 - 33 + 24 = 0$, and $8^{2} - 11(8) + 24 = 64 - 88 + 24 = 0$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-8$ and $-3$): comes from $(x + 3)(x + 8)$, which expands with a middle term of $+11x$, not $-11x$.\n* Choice B ($-6$ and $-4$): uses $6$ and $4$, which multiply to $24$ but add to $10$, and with the wrong signs besides.\n* Choice D ($4$ and $6$): uses $4$ and $6$: their product is $24$ but their sum is $10$, not $11$.\n\n**Test Day Takeaway:** Factor pairs must match BOTH the product and the sum. Check the sum before committing to a pair.",
      skills: ["finding-roots-factoring"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "$x^{2} - 9x + k = 0$\nIn the given equation, $k$ is a constant. One solution to the equation is $2$. What is the value of $k$?",
      choices: [
        // distractor: sign error isolating k
        { id: "A", text: "$-14$" },
        // distractor: subtracts the root from the coefficient
        { id: "B", text: "$7$" },
        { id: "C", text: "$14$" },
        // distractor: ignores the squared term
        { id: "D", text: "$18$" }
      ],
      correctAnswer: "C",
      hint: "A solution makes the equation true, so substitute it and solve for the unknown constant.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~20s):** $4 - 18 + k = 0$ gives $k = 14$.\n\n**The Full Solution:**\nStep 1: Since $x = 2$ is a solution, substituting $2$ must make the equation true: $2^2 - 9(2) + k = 0$.\nStep 2: Simplify the numbers: $4 - 18 + k = 0$, so $-14 + k = 0$.\nStep 3: Add $14$ to both sides: $k = 14$. Check by factoring: $x^2 - 9x + 14 = (x - 2)(x - 7)$, whose solutions are $2$ and $7$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-14$): solves $-14 + k = 0$ as $k = -14$, moving the term across without changing its sign.\n* Choice B ($7$): subtracts the solution from the middle coefficient, computing $9 - 2$.\n* Choice D ($18$): uses only the product $9(2) = 18$ and never accounts for the $x^2$ term.\n\n**Test Day Takeaway:** Substituting a known solution turns a quadratic with an unknown coefficient into a one-step linear equation.",
      skills: ["roots-from-factors", "finding-roots-factoring"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "$4x^{2} - 9x - 28 = 0$\nWhat is the positive solution to the given equation?",
      choices: [
        // distractor: factors with the signs reversed, (4x - 7)(x + 4), and takes 7/4
        { id: "A", text: "$\\frac{7}{4}$" },
        // distractor: gives the sum of the two solutions, 9/4
        { id: "B", text: "$\\frac{9}{4}$" },
        { id: "C", text: "$4$" },
        // distractor: divides the constant 28 by the leading coefficient 4
        { id: "D", text: "$7$" }
      ],
      correctAnswer: "C",
      hint: "Factor the quadratic and set each factor equal to $0$.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~40s):** The equation factors as $(x - 4)(4x + 7) = 0$, so the solutions are $4$ and $-\\frac{7}{4}$; the positive one is $4$.\n\n**The Full Solution:**\nStep 1: Look for two numbers whose product is $4(-28) = -112$ and whose sum is $-9$: they are $-16$ and $7$.\nStep 2: Rewrite and factor: $4x^{2} - 16x + 7x - 28 = 4x(x - 4) + 7(x - 4) = (x - 4)(4x + 7)$.\nStep 3: Set each factor to $0$: $x = 4$ or $x = -\\frac{7}{4}$. The positive solution is $4$.\n\nCheck: $4(16) - 9(4) - 28 = 64 - 36 - 28 = 0$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{7}{4}$): comes from the factors $(4x - 7)(x + 4)$, whose middle term is $+9x$, not $-9x$.\n* Choice B ($\\frac{9}{4}$): is the sum of the solutions, $4 + \\left(-\\frac{7}{4}\\right)$, not a solution.\n* Choice D ($7$): divides $28$ by $4$ instead of solving the equation.\n\n**Test Day Takeaway:** After factoring, check the middle term by expanding; a sign swap in the factors changes which solution is positive.",
      skills: ["difference-of-squares", "finding-roots-factoring"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "The graph of $y = f(x)$ is shown, where $f$ is a quadratic function. Which equation defines $f$?",
      diagram: { type: "parabola", params: { vertex: { h: 4, k: -9 }, a: 1, xRange: [0, 8], yRange: [-10, 8], showVertex: false, xTickInterval: 1, yTickInterval: 2, gridInterval: 1 } },
      choices: [
        // distractor: places both zeros at negative values, x = -7 and x = -1, copying the signs of the intercepts into the factors the wrong way
        { id: "A", text: "$f(x) = (x + 1)(x + 7)$" },
        // distractor: keeps the zero at x = 1 but reflects the other one, putting a zero at x = -7
        { id: "B", text: "$f(x) = (x - 1)(x + 7)$" },
        // distractor: keeps the zero at x = 7 but reflects the other one, putting a zero at x = -1
        { id: "C", text: "$f(x) = (x - 7)(x + 1)$" },
        { id: "D", text: "$f(x) = (x - 1)(x - 7)$" }
      ],
      correctAnswer: "D",
      hint: "Each factor of f is zero at one of the graph's x-intercepts.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~20s):** The graph crosses the $x$-axis at $x = 1$ and $x = 7$, so $f(x) = (x - 1)(x - 7)$.\n\n**The Full Solution:**\nStep 1: Read the $x$-intercepts. The graph meets the $x$-axis at $(1, 0)$ and $(7, 0)$, so $f(1) = 0$ and $f(7) = 0$.\nStep 2: Build the factors. A zero at $x = 1$ needs the factor $(x - 1)$; a zero at $x = 7$ needs $(x - 7)$.\nStep 3: Check the lowest point. The graph's vertex is $(4, -9)$, and $(4 - 1)(4 - 7) = (3)(-3) = -9$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($(x + 1)(x + 7)$): has zeros at $-1$ and $-7$; the graph shown never meets the $x$-axis at a negative value.\n* Choice B ($(x - 1)(x + 7)$): keeps the zero at $x = 1$ but puts the second one at $x = -7$ instead of $x = 7$.\n* Choice C ($(x - 7)(x + 1)$): keeps the zero at $x = 7$ but puts the first one at $x = -1$ instead of $x = 1$.\n\n**Test Day Takeaway:** A zero at $x = r$ comes from the factor $(x - r)$, so the sign inside the parentheses is the OPPOSITE of the intercept.",
      skills: ["roots-from-factors"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "$x^{2} - 6x - 11 = 0$\nOne solution to the given equation can be written as $x = 3 + \\sqrt{k}$, where $k$ is a constant. What is the value of $k$?",
      choices: [
        // distractor: subtracts 9 from 11 instead of adding 9 when completing the square
        { id: "A", text: "$2$" },
        // distractor: moves 11 to the right side but forgets to add 9 to complete the square
        { id: "B", text: "$11$" },
        { id: "C", text: "$20$" },
        // distractor: uses the discriminant, 36 + 44, without dividing the square root by 2
        { id: "D", text: "$80$" }
      ],
      correctAnswer: "C",
      hint: "Complete the square, or use the quadratic formula and simplify.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~40s):** Completing the square gives $(x - 3)^{2} = 20$, so $x = 3 \\pm \\sqrt{20}$ and $k = 20$.\n\n**The Full Solution:**\nStep 1: Add $11$ to both sides: $x^{2} - 6x = 11$.\nStep 2: Add $9$ to both sides to complete the square: $x^{2} - 6x + 9 = 20$, so $(x - 3)^{2} = 20$.\nStep 3: Then $x - 3 = \\pm\\sqrt{20}$, so $x = 3 + \\sqrt{20}$ is a solution and $k = 20$.\n\nCheck: The quadratic formula gives $x = \\frac{6 \\pm \\sqrt{36 + 44}}{2} = \\frac{6 \\pm \\sqrt{80}}{2} = 3 \\pm \\sqrt{20}$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): computes $11 - 9$ instead of $11 + 9$ when completing the square.\n* Choice B ($11$): stops at $x^{2} - 6x = 11$ without adding $9$ to both sides.\n* Choice D ($80$): is the discriminant; the formula gives $\\frac{\\sqrt{80}}{2} = \\sqrt{20}$, not $\\sqrt{80}$.\n\n**Test Day Takeaway:** Match the form the question gives: here $x = 3 + \\sqrt{k}$ comes straight from completing the square.",
      skills: ["finding-roots-factoring"]
    }
  ],

  // Section: Vertex
  "Vertex": [
    {
      id: 1,
      difficulty: "easy",
      question: "$f(x) = x^{2} + 6x - 16$\nIn the $xy$-plane, what is the $x$-coordinate of the vertex of the graph of $y = f(x)$?",
      choices: [
        // distractor: reports the constant term, which is the y-intercept
        { id: "A", text: "$-16$" },
        { id: "B", text: "$-3$" },
        // distractor: computes b/(2a) and drops the minus sign in the formula
        { id: "C", text: "$3$" },
        // distractor: reports b itself instead of -b/(2a)
        { id: "D", text: "$6$" }
      ],
      correctAnswer: "B",
      hint: "Use $x = -\\frac{b}{2a}$, or find the point halfway between the two $x$-intercepts.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** $x = -\\frac{b}{2a} = -\\frac{6}{2(1)} = -3$.\n\n**The Full Solution:**\nStep 1: Identify the coefficients: $a = 1$, $b = 6$, and $c = -16$.\nStep 2: The vertex of $y = ax^2 + bx + c$ has $x = -\\frac{b}{2a}$, so $x = -\\frac{6}{2} = -3$.\nStep 3: Confirm with the $x$-intercepts. Factoring gives $(x + 8)(x - 2)$, so the intercepts are $-8$ and $2$, whose midpoint is $\\frac{-8 + 2}{2} = -3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-16$): reports the constant term $c$, which is the $y$-intercept rather than anything about the vertex.\n* Choice C ($3$): computes $\\frac{b}{2a}$ and forgets the leading negative sign in the formula.\n* Choice D ($6$): reports $b$ itself instead of $-\\frac{b}{2a}$.\n\n**Test Day Takeaway:** Two routes give the same vertex $x$-value: $-\\frac{b}{2a}$, or the midpoint of the two $x$-intercepts when they exist.",
      skills: ["vertex-formula"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "$f(x) = 3(x - 40)^{2} + 12$\nWhat is the minimum value of the given function?",
      choices: [
        // distractor: reports the leading coefficient 3, which sets the width of the parabola, not its lowest value
        { id: "A", text: "$3$" },
        { id: "B", text: "$12$" },
        // distractor: reports 40, the x-value where the minimum occurs, instead of the minimum value itself
        { id: "C", text: "$40$" },
        // distractor: adds the two numbers in the vertex, 40 + 12, as if the minimum were their sum
        { id: "D", text: "$52$" }
      ],
      correctAnswer: "B",
      hint: "A squared term is never negative, so ask when it is smallest.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** $3(x - 40)^{2}$ is never negative and equals $0$ at $x = 40$, so the least value of $f$ is $0 + 12 = 12$.\n\n**The Full Solution:**\nStep 1: $(x - 40)^{2} \\ge 0$ for every $x$, and $3$ is positive, so $3(x - 40)^{2} \\ge 0$.\nStep 2: The squared term equals $0$ only when $x = 40$, so the smallest possible output is $f(40) = 3(0)^{2} + 12 = 12$.\nStep 3: The minimum value is $12$, reached at $x = 40$.\n\nCheck: A nearby input gives a larger value: $f(41) = 3(1)^{2} + 12 = 15$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): is the leading coefficient. It controls how wide the parabola is, not how low it goes.\n* Choice C ($40$): is the $x$-coordinate of the vertex, the input where the minimum occurs, not the minimum value.\n* Choice D ($52$): adds the two coordinates of the vertex $(40, 12)$; the value of the function is only the $y$-coordinate.\n\n**Test Day Takeaway:** In $f(x) = a(x - h)^{2} + k$ with $a > 0$, the minimum value is $k$ and it occurs at $x = h$.",
      skills: ["vertex-form"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "$h(t) = -2t^{2} + 12t$\nThe function $h$ gives the height, in meters, of a ball above the ground $t$ seconds after it is thrown upward. What is the maximum height, in meters, of the ball?",
      choices: [
        // distractor: reports the time of the maximum, 3 seconds, not the height
        { id: "A", text: "$3$" },
        // distractor: reports 6, the time when the ball returns to the ground
        { id: "B", text: "$6$" },
        // distractor: reports the coefficient of t instead of evaluating the model at the vertex
        { id: "C", text: "$12$" },
        { id: "D", text: "$18$" }
      ],
      correctAnswer: "D",
      hint: "A negative leading coefficient means the vertex is the highest point, so find the time first and then the height.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~25s):** The vertex is at $t = -\\frac{12}{2(-2)} = 3$, and $h(3) = -18 + 36 = 18$.\n\n**The Full Solution:**\nStep 1: The leading coefficient $-2$ is negative, so the parabola opens downward and the vertex gives the maximum height.\nStep 2: The vertex occurs at $t = -\\frac{b}{2a} = -\\frac{12}{2(-2)} = 3$ seconds.\nStep 3: Evaluate the model there: $h(3) = -2(3)^2 + 12(3) = -18 + 36 = 18$ meters.\n\nCheck: $h(0) = 0$ and $h(6) = -72 + 72 = 0$, and $3$ is halfway between $0$ and $6$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): reports the time at which the maximum occurs rather than the height.\n* Choice B ($6$): reports the time at which the ball returns to the ground.\n* Choice C ($12$): reports the coefficient of $t$ instead of evaluating the model at the vertex.\n\n**Test Day Takeaway:** A maximum-value question has two steps: find the input at the vertex, then substitute it back to get the output the question actually asks for.",
      skills: ["parabola-direction", "vertex-formula"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "$f(x) = -2x^{2} + kx + 90$\nIn the given function, $k$ is a constant. The maximum value of $f$ occurs when $x = 9$. What is the value of $k$?",
      choices: [
        // distractor: uses x = k / (2a) with a = -2, giving 9 = k / -4 and k = -36, dropping the minus in the formula
        { id: "A", text: "$-36$" },
        // distractor: uses x = -k / 2, ignoring the leading coefficient, which gives k = -18
        { id: "B", text: "$-18$" },
        // distractor: uses x = -k / a instead of x = -k / (2a), which gives k = 18
        { id: "C", text: "$18$" },
        { id: "D", text: "$36$" }
      ],
      correctAnswer: "D",
      hint: "The maximum of a parabola is on its axis of symmetry.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~20s):** The maximum is at $x = -\\frac{k}{2(-2)} = \\frac{k}{4}$, so $\\frac{k}{4} = 9$ and $k = 36$.\n\n**The Full Solution:**\nStep 1: Locate the maximum. For $f(x) = ax^{2} + bx + c$ the vertex is at $x = -\\frac{b}{2a}$; here $a = -2$ and $b = k$, so $x = -\\frac{k}{-4} = \\frac{k}{4}$.\nStep 2: Set that equal to $9$: $\\frac{k}{4} = 9$, so $k = 36$.\nStep 3: Check. $f(x) = -2x^{2} + 36x + 90$ has $f(9) = -162 + 324 + 90 = 252$, which is greater than $f(8) = 250$ and $f(10) = 250$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-36$): uses $x = \\frac{k}{2a}$ and drops the minus sign in front of $b$.\n* Choice B ($-18$): uses $x = -\\frac{k}{2}$, leaving the leading coefficient out of the denominator.\n* Choice C ($18$): uses $x = -\\frac{k}{a}$, missing the factor of $2$ in $2a$.\n\n**Test Day Takeaway:** The axis of symmetry is $x = -\\frac{b}{2a}$. Both the minus sign and the $2$ matter, and a negative $a$ makes sign slips especially easy.",
      skills: ["vertex-formula"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "$h(x) = -2x^{2} + 24x - 55$\nWhich of the following is an equivalent form of the given function that shows the maximum value of $h$ as a constant or coefficient?",
      choices: [
        { id: "A", text: "$h(x) = -2(x - 6)^2 + 17$" },
        // distractor: keeps the original constant -55 outside the square instead of adjusting it by +72
        { id: "B", text: "$h(x) = -2(x - 6)^2 - 55$" },
        // distractor: factors to (x + 6)^2, which puts the peak at x = -6 rather than x = 6
        { id: "C", text: "$h(x) = -2(x + 6)^2 + 17$" },
        // distractor: halves nothing and uses 12 inside the square, placing the peak at x = 12
        { id: "D", text: "$h(x) = -2(x - 12)^2 + 17$" }
      ],
      correctAnswer: "A",
      hint: "Factor the -2 out of the first two terms before completing the square.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~30s):** $-2(x^2 - 12x) - 55 = -2(x - 6)^2 + 72 - 55 = -2(x - 6)^2 + 17$, so the maximum value of $h$ is $17$.\n\n**The Full Solution:**\nStep 1: Factor $-2$ from the variable terms. $h(x) = -2(x^2 - 12x) - 55$.\nStep 2: Complete the square inside. $x^2 - 12x = (x - 6)^2 - 36$, so $h(x) = -2\\left[(x - 6)^2 - 36\\right] - 55 = -2(x - 6)^2 + 72 - 55$.\nStep 3: Combine and check. $h(x) = -2(x - 6)^2 + 17$. At $x = 6$ the original gives $-72 + 144 - 55 = 17$, and the squared term is never positive, so $17$ is the maximum. ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-2(x - 6)^2 - 55$): keeps the original constant. Completing the square inside the bracket changes what must be added outside.\n* Choice C ($-2(x + 6)^2 + 17$): places the peak at $x = -6$; expanding it gives $-2x^2 - 24x - 55$, the wrong middle term.\n* Choice D ($-2(x - 12)^2 + 17$): uses $12$ instead of half of $12$ inside the square.\n\n**Test Day Takeaway:** When $a \\ne 1$, factor $a$ out of the first two terms FIRST; the number you add inside the bracket is multiplied by $a$ on its way out.",
      skills: ["vertex-formula"]
    }
  ],

  // Section: Discriminant
  "Discriminant": [
    {
      id: 1,
      difficulty: "easy",
      question: "$x^{2} = 2x + 8$\nHow many distinct real solutions does the given equation have?",
      choices: [
        // distractor: factors x^2 - 2x - 8 = 0 as (x - 4)(x + 2) = 0 and counts only the positive solution, 4
        { id: "A", text: "Exactly one" },
        { id: "B", text: "Exactly two" },
        // distractor: treats the equation as an identity; a quadratic equation has at most two solutions
        { id: "C", text: "Infinitely many" },
        // distractor: moves 8 to the left side without changing its sign, getting x^2 - 2x + 8 = 0, whose discriminant 4 - 32 = -28 is negative
        { id: "D", text: "Zero" }
      ],
      correctAnswer: "B",
      hint: "Write the equation as $ax^{2} + bx + c = 0$ first, then find the sign of $b^{2} - 4ac$.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** Rewrite as $x^{2} - 2x - 8 = 0$. Then $b^{2} - 4ac = (-2)^{2} - 4(1)(-8) = 4 + 32 = 36$, which is positive, so there are two distinct real solutions.\n\n**The Full Solution:**\nStep 1: Subtract $2x$ and $8$ from both sides: $x^{2} - 2x - 8 = 0$, so $a = 1$, $b = -2$, and $c = -8$.\nStep 2: Compute the discriminant: $b^{2} - 4ac = 4 - 4(1)(-8) = 4 + 32 = 36$.\nStep 3: A positive discriminant gives two distinct real solutions. Check: $x^{2} - 2x - 8 = (x - 4)(x + 2)$, so $x = 4$ or $x = -2$, and $4^{2} = 2(4) + 8$ and $(-2)^{2} = 2(-2) + 8$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A (Exactly one): factors correctly but keeps only the positive solution, $4$; the solution $-2$ also satisfies the equation.\n* Choice C (Infinitely many): a quadratic equation can never have more than two solutions.\n* Choice D (Zero): moves $8$ to the left side as $+8$, getting $x^{2} - 2x + 8 = 0$ and a discriminant of $4 - 32 = -28$. Subtracting $8$ from both sides gives $-8$.\n\n**Test Day Takeaway:** Put every term on one side before reading $a$, $b$, and $c$; a sign slip in $c$ can flip the sign of the discriminant.",
      skills: ["discriminant-analysis"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "$9x^{2} + 4 = 12x$\nHow many distinct real solutions does the given equation have?",
      choices: [
        { id: "A", text: "Exactly one" },
        // distractor: moves 12x correctly but changes the sign of 4, getting 9x^2 - 12x - 4 = 0, whose discriminant 144 + 144 = 288 is positive
        { id: "B", text: "Exactly two" },
        // distractor: thinks an equation that factors into two equal factors is true for every x
        { id: "C", text: "Infinitely many" },
        // distractor: thinks a discriminant of 0 means no real solutions
        { id: "D", text: "Zero" }
      ],
      correctAnswer: "A",
      hint: "Move every term to one side, then find the discriminant or factor.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~20s):** Rewrite as $9x^{2} - 12x + 4 = 0$. The discriminant is $(-12)^{2} - 4(9)(4) = 144 - 144 = 0$, so there is exactly one real solution.\n\n**The Full Solution:**\nStep 1: Subtract $12x$ from both sides: $9x^{2} - 12x + 4 = 0$, so $a = 9$, $b = -12$, and $c = 4$.\nStep 2: Compute the discriminant: $b^{2} - 4ac = 144 - 4(9)(4) = 144 - 144 = 0$.\nStep 3: A discriminant of $0$ means exactly one distinct real solution. Check: $9x^{2} - 12x + 4 = (3x - 2)^{2}$, which equals $0$ only when $x = \\frac{2}{3}$, and $9\\left(\\frac{2}{3}\\right)^{2} + 4 = 8 = 12\\left(\\frac{2}{3}\\right)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B (Exactly two): changes the sign of $4$ while rearranging, getting $9x^{2} - 12x - 4 = 0$ and a discriminant of $144 + 144 = 288$. The $4$ stays on the left side, so it stays positive.\n* Choice C (Infinitely many): $(3x - 2)^{2} = 0$ is true only for $x = \\frac{2}{3}$, not for every $x$.\n* Choice D (Zero): a discriminant of $0$ gives one solution; zero real solutions needs a negative discriminant.\n\n**Test Day Takeaway:** Rearrange to $ax^{2} + bx + c = 0$, then read the sign of $b^{2} - 4ac$: positive gives two solutions, zero gives one, negative gives none.",
      skills: ["discriminant-analysis"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "$y = 8$\n$y = -x^{2} + 6x - 1$\nAt how many points do the graphs of the given equations intersect in the $xy$-plane?",
      choices: [
        // distractor: thinks a line that only touches the parabola at its vertex does not count as an intersection
        { id: "A", text: "Zero" },
        { id: "B", text: "Exactly one" },
        // distractor: sets the quadratic equal to 0 instead of 8, and 36 - 4(-1)(-1) = 32 > 0 gives two solutions
        { id: "C", text: "Exactly two" },
        // distractor: treats a discriminant of 0 as meaning every value of x is a solution
        { id: "D", text: "Infinitely many" }
      ],
      correctAnswer: "B",
      hint: "Substitute $y = 8$ into the second equation and check the discriminant of the result.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** Setting $-x^{2} + 6x - 1 = 8$ gives $x^{2} - 6x + 9 = 0$, whose discriminant is $0$: one intersection point, at $x = 3$.\n\n**The Full Solution:**\nStep 1: Substitute $y = 8$: $-x^{2} + 6x - 1 = 8$, so $-x^{2} + 6x - 9 = 0$.\nStep 2: Multiply by $-1$: $x^{2} - 6x + 9 = 0$. Its discriminant is $(-6)^{2} - 4(1)(9) = 36 - 36 = 0$.\nStep 3: A discriminant of $0$ gives exactly one solution, $x = 3$, so the graphs meet at one point, $(3, 8)$.\n\nCheck: $-(3)^{2} + 6(3) - 1 = -9 + 18 - 1 = 8$, so the line $y = 8$ touches the parabola at its vertex. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A (Zero): treats a point where the line only touches the parabola as no intersection; touching at the vertex is one point.\n* Choice C (Exactly two): solves $-x^{2} + 6x - 1 = 0$ instead of setting the expression equal to $8$; that discriminant is $36 - 4 = 32$.\n* Choice D (Infinitely many): a discriminant of $0$ means exactly one solution, $x = 3$, not that every $x$ works; a line and a parabola share at most two points.\n\n**Test Day Takeaway:** To count intersection points of a line and a parabola, set the expressions equal, move everything to one side, and use the discriminant.",
      skills: ["discriminant-analysis"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "$2x^{2} - kx + 18 = 0$\nIn the given equation, $k$ is a positive constant. For what value of $k$ does the equation have exactly one real solution?",
      choices: [
        // distractor: takes the square root of ac = 36 instead of 4ac = 144
        { id: "A", text: "$6$" },
        // distractor: divides the constant by the leading coefficient, 18 / 2 = 9, which is not the discriminant condition
        { id: "B", text: "$9$" },
        { id: "C", text: "$12$" },
        // distractor: reports k squared, 144, instead of k
        { id: "D", text: "$144$" }
      ],
      correctAnswer: "C",
      hint: "Exactly one real solution means the discriminant is zero.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~20s):** Exactly one solution means $k^2 - 4(2)(18) = 0$, so $k^2 = 144$ and, since $k > 0$, $k = 12$.\n\n**The Full Solution:**\nStep 1: Write the discriminant. For $2x^2 - kx + 18 = 0$ the discriminant is $(-k)^2 - 4(2)(18) = k^2 - 144$.\nStep 2: Set it to zero. Exactly one solution requires $k^2 - 144 = 0$, so $k^2 = 144$ and $k = \\pm 12$. The problem states $k$ is positive, so $k = 12$.\nStep 3: Check. $2x^2 - 12x + 18 = 2(x - 3)^2$, which is zero only at $x = 3$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): is $\\sqrt{2 \\times 18} = \\sqrt{36}$, using $ac$ instead of $4ac$ in the discriminant.\n* Choice B ($9$): is $\\frac{18}{2}$, dividing the constant by the leading coefficient. That is not what the discriminant tests.\n* Choice D ($144$): is $k^2$. The question asks for $k$ itself.\n\n**Test Day Takeaway:** Exactly one real solution means discriminant $= 0$. Solve $b^2 = 4ac$, then take the root the problem allows.",
      skills: ["discriminant-analysis"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "$3x^{2} + 12x + n = 0$\nIn the given equation, $n$ is a positive integer. The equation has two distinct real solutions. What is the greatest possible value of $n$?",
      choices: [
        { id: "A", text: "$11$" },
        // distractor: uses the boundary value, where the discriminant is 0 and the equation has exactly one solution
        { id: "B", text: "$12$" },
        // distractor: leaves out the leading coefficient 3, solving 144 - 4n > 0
        { id: "C", text: "$35$" },
        // distractor: leaves out the 4 in b^2 - 4ac, solving 144 - 3n > 0
        { id: "D", text: "$47$" }
      ],
      correctAnswer: "A",
      hint: "Two distinct real solutions means the discriminant is positive.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~35s):** The discriminant $144 - 12n$ must be positive, so $n < 12$; the greatest integer value is $11$.\n\n**The Full Solution:**\nStep 1: For $3x^{2} + 12x + n = 0$, the discriminant is $b^{2} - 4ac = 12^{2} - 4(3)(n) = 144 - 12n$.\nStep 2: Two distinct real solutions require $144 - 12n > 0$, so $n < 12$.\nStep 3: The greatest integer less than $12$ is $11$.\n\nCheck: For $n = 11$ the discriminant is $144 - 132 = 12 > 0$; for $n = 12$ it is $0$, which gives only one solution. ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($12$): makes the discriminant exactly $0$, which gives one solution, not two.\n* Choice C ($35$): drops the leading coefficient and solves $144 - 4n > 0$.\n* Choice D ($47$): drops the $4$ and solves $144 - 3n > 0$.\n\n**Test Day Takeaway:** Positive discriminant: two solutions; zero: one; negative: none. A strict inequality excludes the boundary value.",
      skills: ["discriminant-analysis"]
    }
  ],

  // Section: Deriving Standard Form
  "Deriving Standard Form": [
    {
      id: 1,
      difficulty: "easy",
      question: "$f(x) = (x - 4)^{2} + 3$\nWhich of the following defines an equivalent form of the given function?",
      choices: [
        // distractor: expands (x - 4)^2 as x^2 - 8x, leaving out the 16
        { id: "A", text: "$f(x) = x^{2} - 8x + 3$" },
        { id: "B", text: "$f(x) = x^{2} - 8x + 19$" },
        // distractor: forgets to double the middle term, writing -4x instead of -8x
        { id: "C", text: "$f(x) = x^{2} - 4x + 19$" },
        // distractor: uses + 8x, the middle term of (x + 4)^2
        { id: "D", text: "$f(x) = x^{2} + 8x + 19$" }
      ],
      correctAnswer: "B",
      hint: "Expand $(x - 4)^{2}$ as $(x - 4)(x - 4)$, then add $3$.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** $(x - 4)^{2} = x^{2} - 8x + 16$, and $16 + 3 = 19$, so $f(x) = x^{2} - 8x + 19$.\n\n**The Full Solution:**\nStep 1: Expand the square: $(x - 4)^{2} = (x - 4)(x - 4) = x^{2} - 4x - 4x + 16 = x^{2} - 8x + 16$.\nStep 2: Add $3$: $f(x) = x^{2} - 8x + 16 + 3$.\nStep 3: Combine the constants: $f(x) = x^{2} - 8x + 19$.\n\nCheck: At $x = 0$, $(0 - 4)^{2} + 3 = 19$ and $0 - 0 + 19 = 19$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($x^{2} - 8x + 3$): leaves out the $16$ from $(-4)(-4)$.\n* Choice C ($x^{2} - 4x + 19$): counts the $-4x$ term only once.\n* Choice D ($x^{2} + 8x + 19$): has the wrong sign on the middle term; that is the expansion of $(x + 4)^{2} + 3$.\n\n**Test Day Takeaway:** $(x - h)^{2} = x^{2} - 2hx + h^{2}$: the middle term is doubled and the last term is positive.",
      skills: ["converting-quadratic-forms", "vertex-form"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "The graph of a quadratic function is shown in the $xy$-plane. Which of the following equations represents the graph?",
      diagram: { type: "parabola", params: { vertex: { h: 3, k: -4 }, a: 1, xRange: [0, 6], yRange: [-6, 6], showVertex: false, xTickInterval: 1, yTickInterval: 2, gridInterval: 1 } },
      choices: [
        // distractor: uses the vertex y-coordinate -4 as the constant term instead of the y-intercept 5
        { id: "A", text: "$y = x^2 - 6x - 4$" },
        { id: "B", text: "$y = x^2 - 6x + 5$" },
        // distractor: writes the vertex form as (x - 3)^2 + 4, flipping the sign of the vertex y-coordinate, which expands to x^2 - 6x + 13
        { id: "C", text: "$y = x^2 - 6x + 13$" },
        // distractor: writes the vertex form as (x + 3)^2 - 4, flipping the sign of the vertex x-coordinate, which expands to x^2 + 6x + 5
        { id: "D", text: "$y = x^2 + 6x + 5$" }
      ],
      correctAnswer: "B",
      hint: "Read the vertex and one more point from the graph, then expand.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** The graph crosses the $x$-axis at $x = 1$ and $x = 5$ and opens upward with vertex $(3, -4)$, so $y = (x - 1)(x - 5) = x^{2} - 6x + 5$.\n\n**The Full Solution:**\nStep 1: Read the graph. The vertex is $(3, -4)$, and the graph crosses the $x$-axis at $x = 1$ and $x = 5$, so $y = a(x - 1)(x - 5)$.\nStep 2: Find $a$ from the vertex: $-4 = a(3 - 1)(3 - 5) = -4a$, so $a = 1$.\nStep 3: Expand: $(x - 1)(x - 5) = x^{2} - 6x + 5$. Check with the $y$-intercept on the graph: at $x = 0$, $y = 5$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = x^{2} - 6x - 4$): uses the vertex's $y$-coordinate, $-4$, as the constant term; the constant term is the $y$-intercept, $5$.\n* Choice C ($y = x^{2} - 6x + 13$): expands $(x - 3)^{2} + 4$, which has the wrong sign on the vertex's $y$-coordinate.\n* Choice D ($y = x^{2} + 6x + 5$): expands $(x + 3)^{2} - 4$, which puts the vertex at $x = -3$ instead of $x = 3$.\n\n**Test Day Takeaway:** From a graph of a parabola, read the vertex and the $y$-intercept: the vertex fixes $h$ and $k$, and the $y$-intercept is the constant term $c$.",
      skills: ["vertex-form"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "Which expression is equivalent to $-2(x + 7)(x - 3)$?",
      choices: [
        // distractor: multiplies -2 by -21 as -42 instead of +42, dropping the sign of the product of the constants
        { id: "A", text: "$-2x^2 - 8x - 42$" },
        { id: "B", text: "$-2x^2 - 8x + 42$" },
        // distractor: expands (x + 7)(x - 3) as x^2 - 4x - 21, reversing the sign of the middle term
        { id: "C", text: "$-2x^2 + 8x + 42$" },
        // distractor: leaves the constant term at 21, never multiplying it by the -2 outside
        { id: "D", text: "$-2x^2 - 8x + 21$" }
      ],
      correctAnswer: "B",
      hint: "Multiply the two binomials first, then distribute the -2 to every term.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** $(x + 7)(x - 3) = x^2 + 4x - 21$, and multiplying by $-2$ gives $-2x^2 - 8x + 42$.\n\n**The Full Solution:**\nStep 1: Multiply the binomials. $(x + 7)(x - 3) = x^2 - 3x + 7x - 21 = x^2 + 4x - 21$.\nStep 2: Distribute the $-2$ to all three terms. $-2(x^2) = -2x^2$, $-2(4x) = -8x$, and $-2(-21) = +42$.\nStep 3: Check one value. At $x = 0$ the original gives $-2(7)(-3) = 42$, and the expanded form gives $42$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2x^2 - 8x - 42$): signs the constant as $-42$; two negatives, $-2$ and $-21$, multiply to a positive.\n* Choice C ($-2x^2 + 8x + 42$): expands the binomials to $x^2 - 4x - 21$, reversing the middle term. The $+7$ outweighs the $-3$.\n* Choice D ($-2x^2 - 8x + 21$): leaves $21$ untouched. Every term inside the parentheses gets the $-2$.\n\n**Test Day Takeaway:** Multiply the binomials completely, then distribute the outside factor to all three terms, the constant included.",
      skills: ["roots-from-factors", "converting-quadratic-forms"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "A rectangle is $x$ units wide and $(x + 6)$ units long. A second rectangle is $4$ units narrower and $4$ units shorter than the first rectangle. Which expression represents the area, in square units, of the second rectangle?",
      choices: [
        { id: "A", text: "$x^2 - 2x - 8$" },
        // distractor: multiplies -4 by 2 and gets +8 for the constant term
        { id: "B", text: "$x^2 - 2x + 8$" },
        // distractor: reduces only the width by 4, computing (x - 4)(x + 6)
        { id: "C", text: "$x^2 + 2x - 24$" },
        // distractor: subtracts 4 + 4 from the area x(x + 6) instead of from the side lengths
        { id: "D", text: "$x^2 + 6x - 8$" }
      ],
      correctAnswer: "A",
      hint: "Write the new width and the new length first, then multiply.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~30s):** The second rectangle is $(x - 4)$ by $(x + 2)$, and $(x - 4)(x + 2) = x^{2} - 2x - 8$.\n\n**The Full Solution:**\nStep 1: The new width is $x - 4$ units.\nStep 2: The new length is $(x + 6) - 4 = x + 2$ units.\nStep 3: The area is $(x - 4)(x + 2) = x^{2} + 2x - 4x - 8 = x^{2} - 2x - 8$.\n\nCheck: For $x = 10$, the second rectangle is $6$ by $12$, with area $72$, and $10^{2} - 2(10) - 8 = 72$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($x^2 - 2x + 8$): gets the sign of the constant wrong: $(-4)(2) = -8$.\n* Choice C ($x^2 + 2x - 24$): shortens only the width, computing $(x - 4)(x + 6)$.\n* Choice D ($x^2 + 6x - 8$): subtracts $8$ from the original area instead of shrinking each side.\n\n**Test Day Takeaway:** For area after a change in dimensions, change each side length first, then multiply.",
      skills: ["roots-from-factors", "converting-quadratic-forms"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "$f(x) = -3(x - 4)^{2} + 27$\nThe given function can be written in the form $f(x) = a(x - r)(x - s)$, where $a$, $r$, and $s$ are constants. What is the value of $r + s$?",
      choices: [
        // distractor: attaches the sign of a to the sum
        { id: "A", text: "$-8$" },
        // distractor: reports the axis of symmetry
        { id: "B", text: "$4$" },
        // distractor: reports the distance between the zeros
        { id: "C", text: "$6$" },
        { id: "D", text: "$8$" }
      ],
      correctAnswer: "D",
      hint: "The constants $r$ and $s$ are the zeros of the function, so set the vertex form equal to zero.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~35s):** $-3(x - 4)^2 + 27 = 0$ gives $(x - 4)^2 = 9$, so the zeros are $1$ and $7$ and their sum is $8$.\n\n**The Full Solution:**\nStep 1: In the form $a(x - r)(x - s)$ the constants $r$ and $s$ are the zeros of $f$, so solve $f(x) = 0$.\nStep 2: From $-3(x - 4)^2 + 27 = 0$, isolate the square: $(x - 4)^2 = 9$, so $x - 4 = \\pm 3$ and $x = 1$ or $x = 7$.\nStep 3: With $r = 1$ and $s = 7$, the sum is $r + s = 8$. Check: $-3(x - 1)(x - 7) = -3(x^2 - 8x + 7) = -3x^2 + 24x - 21$, and expanding the vertex form gives the same. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-8$): attaches the sign of $a = -3$ to the sum, but the leading coefficient does not affect where the zeros are.\n* Choice B ($4$): reports the axis of symmetry, which is the AVERAGE of the two zeros rather than their sum.\n* Choice C ($6$): reports $7 - 1$, the distance between the zeros, instead of their sum.\n\n**Test Day Takeaway:** Vertex form converts to factored form through the zeros; the vertex's $x$-coordinate is always the midpoint of those zeros, never their sum.",
      skills: ["converting-quadratic-forms", "vertex-form"]
    }
  ]
};
