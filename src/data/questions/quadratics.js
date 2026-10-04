// Practice questions for Quadratics module
// Questions are organized by SECTION (question type)

export const quadraticsQuestions = {
  // Section: Overview
  "Overview": [
    {
      id: 1,
      difficulty: "easy",
      question: "Which of the following is a quadratic function?",
      choices: [
        // distractor: degree 1
        { id: "A", text: "$f(x) = 5x - 9$" },
        // distractor: degree 3
        { id: "B", text: "$f(x) = 4x^3 - x$" },
        { id: "C", text: "$f(x) = 7 - 2x^2$" },
        // distractor: variable in the denominator gives exponent -2
        { id: "D", text: "$f(x) = \\dfrac{6}{x^2}$" }
      ],
      correctAnswer: "C",
      hint: "Look for a highest power of exactly $2$, with the variable in the numerator.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** Only $7 - 2x^2$ has a highest power of $2$ with a nonzero coefficient.\n\n**The Full Solution:**\nStep 1: A quadratic function can be written as $f(x) = ax^2 + bx + c$ with $a \\neq 0$.\nStep 2: Rewriting choice C in that order gives $f(x) = -2x^2 + 0x + 7$, so $a = -2$, $b = 0$, and $c = 7$.\nStep 3: Since $a \\neq 0$ and no higher power appears, $f$ is quadratic. Check the shape: its graph is a parabola opening downward. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: the highest power of $x$ is $1$, so this is a linear function.\n* Choice B: the highest power is $3$, making this a cubic function even though a lower-degree term is present.\n* Choice D: the variable sits in the denominator, so the exponent is $-2$; this is a rational function, not a quadratic one.\n\n**Test Day Takeaway:** Degree is decided by the HIGHEST power of the variable, and a variable in a denominator carries a negative exponent.",
      skills: ["identify-quadratic"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "$g(x) = 9 - 5x + 6x^{2}$\nThe given function can be written in the form $g(x) = ax^{2} + bx + c$, where $a$, $b$, and $c$ are constants. What is the value of $b$?",
      choices: [
        { id: "A", text: "$-5$" },
        // distractor: drops the sign
        { id: "B", text: "$5$" },
        // distractor: reports a
        { id: "C", text: "$6$" },
        // distractor: reports c
        { id: "D", text: "$9$" }
      ],
      correctAnswer: "A",
      hint: "Reorder the terms by descending power first, and carry each sign with its coefficient.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~10s):** Reordered, $g(x) = 6x^2 - 5x + 9$, so $b = -5$.\n\n**The Full Solution:**\nStep 1: The form $ax^2 + bx + c$ lists the terms from the highest power down, so rewrite $g(x) = 9 - 5x + 6x^2$ as $g(x) = 6x^2 - 5x + 9$.\nStep 2: Match term by term: $a = 6$, $b = -5$, and $c = 9$.\nStep 3: The coefficient of $x$ is $b = -5$. Check by evaluating both forms at $x = 1$: $9 - 5 + 6 = 10$ and $6 - 5 + 9 = 10$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($5$): reads the coefficient of $x$ but drops the minus sign that belongs to it.\n* Choice C ($6$): reports $a$, the coefficient of $x^2$.\n* Choice D ($9$): reports $c$, the constant term, which happens to be written first here.\n\n**Test Day Takeaway:** A coefficient always travels with the sign in front of it, and the order the terms happen to be printed in is not the standard-form order.",
      skills: ["identify-quadratic"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "The graph of $y = f(x)$ is shown, where $f(x) = ax^{2} + bx + c$ and $a$, $b$, and $c$ are constants. Which of the following must be true?",
      diagram: { type: "quadraticVertex", params: { vertex: [3, 6], a: -1, showVertex: true } },
      choices: [
        // distractor: reads the downward parabola as opening upward and reports the x-coordinate of the vertex, 3, as the extreme value
        { id: "A", text: "$a > 0$, and the minimum value of $f$ is $3$." },
        // distractor: gets the extreme value 6 right but reverses the direction, treating the top of the curve as a minimum with a > 0
        { id: "B", text: "$a > 0$, and the minimum value of $f$ is $6$." },
        // distractor: gets the direction right but reports the x-coordinate of the vertex, 3, instead of its y-coordinate, 6
        { id: "C", text: "$a < 0$, and the maximum value of $f$ is $3$." },
        { id: "D", text: "$a < 0$, and the maximum value of $f$ is $6$." }
      ],
      correctAnswer: "D",
      hint: "Decide the direction of the parabola first, then read which coordinate of the vertex is the function's value.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~20s):** The parabola opens downward, so $a < 0$, and its highest point is the vertex $(3, 6)$, so the maximum value of $f$ is $6$.\n\n**The Full Solution:**\nStep 1: The arms of the parabola point downward, so the coefficient of $x^{2}$ is negative: $a < 0$.\nStep 2: A parabola that opens downward has a highest point, its vertex, so $f$ has a maximum value rather than a minimum value.\nStep 3: The vertex is at $(3, 6)$. The value of a function is its $y$-coordinate, so the maximum value of $f$ is $6$, reached at $x = 3$. Check: every other point on the graph lies below the line $y = 6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: reverses the direction and also reports $3$, the $x$-coordinate of the vertex, as the value of $f$.\n* Choice B: has the right number, $6$, but a parabola that opens downward has no minimum value, and its leading coefficient is negative.\n* Choice C: has the right direction but reports $3$. The maximum VALUE of $f$ is the output $f(3) = 6$, not the input $3$.\n\n**Test Day Takeaway:** Read a parabola in two steps: the direction gives the sign of $a$ (down means $a < 0$ and a maximum), and the $y$-coordinate of the vertex gives that maximum or minimum value.",
      skills: ["identify-quadratic", "parabola-direction"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "$f(x) = (5 - x)(x + 1)$\nWhich of the following is true about the graph of $y = f(x)$ in the $xy$-plane?",
      choices: [
        // distractor: finds the direction correctly but takes the vertex x-coordinate as +b/(2a) = -2, then evaluates f(-2) = -7
        { id: "A", text: "It opens downward, and its vertex is $(-2, -7)$." },
        { id: "B", text: "It opens downward, and its vertex is $(2, 9)$." },
        // distractor: expands the product as x^2 - 4x - 5, losing the minus sign on x^2, so the parabola opens upward with vertex (2, -9)
        { id: "C", text: "It opens upward, and its vertex is $(2, -9)$." },
        // distractor: finds the vertex (2, 9) correctly but misses that (5 - x) contributes -x, so it reads the leading coefficient as positive and the graph as opening upward
        { id: "D", text: "It opens upward, and its vertex is $(2, 9)$." }
      ],
      correctAnswer: "B",
      hint: "Expand the product to see the sign of the x-squared term before you look for the vertex.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~30s):** The product of $-x$ and $x$ gives $-x^{2}$, so the graph opens downward. The zeros are $-1$ and $5$, so the vertex is at $x = 2$, and $f(2) = (3)(3) = 9$.\n\n**The Full Solution:**\nStep 1: Expand: $(5 - x)(x + 1) = 5x + 5 - x^{2} - x = -x^{2} + 4x + 5$. The coefficient of $x^{2}$ is $-1$, so the parabola opens downward.\nStep 2: The zeros of $f$ are $x = 5$ and $x = -1$. The vertex lies halfway between them, at $x = \\frac{5 + (-1)}{2} = 2$; the formula $-\\frac{b}{2a} = -\\frac{4}{2(-1)} = 2$ agrees.\nStep 3: Evaluate: $f(2) = (5 - 2)(2 + 1) = 9$, so the vertex is $(2, 9)$. Check with the expanded form: $-(2)^{2} + 4(2) + 5 = -4 + 8 + 5 = 9$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-2, -7)$): drops the minus sign in $-\\frac{b}{2a}$, uses $x = -2$, and evaluates $f(-2) = (7)(-1) = -7$.\n* Choice C ($(2, -9)$): expands the product as $x^{2} - 4x - 5$, losing the sign of the $x^{2}$ term; that parabola would open upward with vertex $(2, -9)$.\n* Choice D: finds the right vertex but misses that $(5 - x)$ contributes $-x$, so the leading coefficient is negative.\n\n**Test Day Takeaway:** For a function in factored form, the sign of $x^{2}$ is the product of the $x$-coefficients in the factors, and the vertex sits midway between the zeros.",
      skills: ["parabola-direction"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "$f(x) = (x + 4)^{3} - x^{3}$\nThe given function can be written as $f(x) = ax^{2} + bx + c$, where $a$, $b$, and $c$ are constants. What is the value of $a + b + c$?",
      choices: [
        // distractor: subtracts inside the cube, reading it as (x + 4 - x)^3
        { id: "A", text: "$64$" },
        // distractor: omits the binomial coefficients of 3 when expanding the cube
        { id: "B", text: "$84$" },
        { id: "C", text: "$124$" },
        // distractor: never subtracts x^3 and sums all four cube coefficients
        { id: "D", text: "$125$" }
      ],
      correctAnswer: "C",
      hint: "Expand $(x + 4)^3$ completely before you subtract; the exponent does not distribute over a sum.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~30s):** $a + b + c$ is the value of the polynomial at $x = 1$, and $f(1) = 5^3 - 1^3 = 124$.\n\n**The Full Solution:**\nStep 1: Expand the cube term by term: $(x + 4)^3 = x^3 + 3(4)x^2 + 3(16)x + 64 = x^3 + 12x^2 + 48x + 64$.\nStep 2: Subtract $x^3$. The two cubic terms cancel, leaving $f(x) = 12x^2 + 48x + 64$, so $a = 12$, $b = 48$, and $c = 64$.\nStep 3: Add the three coefficients: $12 + 48 + 64 = 124$. Check against the original definition at $x = 1$: $(1 + 4)^3 - 1^3 = 125 - 1 = 124$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($64$): subtracts inside the cube, reading the expression as $(x + 4 - x)^3 = 4^3$.\n* Choice B ($84$): expands the cube as $x^3 + 4x^2 + 16x + 64$, leaving out the binomial coefficients of $3$, and then adds $4 + 16 + 64$.\n* Choice D ($125$): never subtracts $x^3$, so all four coefficients of the cube get added: $1 + 12 + 48 + 64$.\n\n**Test Day Takeaway:** The sum of a polynomial's coefficients is its value at $x = 1$, so substitute $1$ into the ORIGINAL expression instead of expanding.",
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
      question: "$9x^{2} - c = 0$\nIn the given equation, $c$ is a positive constant. The two solutions to the equation differ by $\\frac{8}{3}$. What is the value of $c$?",
      choices: [
        // distractor: solves x^2 = c, ignoring the coefficient 9, which gives 2 sqrt(c) = 8/3 and c = 16/9
        { id: "A", text: "$\\frac{16}{9}$" },
        // distractor: stops at sqrt(c) = 4 and reports that instead of c
        { id: "B", text: "$4$" },
        { id: "C", text: "$16$" },
        // distractor: sets one solution equal to the full gap 8/3 instead of half of it, giving c = 9(64/9) = 64
        { id: "D", text: "$64$" }
      ],
      correctAnswer: "C",
      hint: "Write the two solutions in terms of c before you use the gap between them.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** The solutions are $\\pm\\frac{\\sqrt{c}}{3}$, so the gap is $\\frac{2\\sqrt{c}}{3} = \\frac{8}{3}$, giving $\\sqrt{c} = 4$ and $c = 16$.\n\n**The Full Solution:**\nStep 1: Solve for the two solutions. $9x^2 = c$ gives $x^2 = \\frac{c}{9}$, so $x = \\pm\\frac{\\sqrt{c}}{3}$.\nStep 2: Use the gap. The two solutions differ by $\\frac{\\sqrt{c}}{3} - \\left(-\\frac{\\sqrt{c}}{3}\\right) = \\frac{2\\sqrt{c}}{3}$, and that equals $\\frac{8}{3}$, so $\\sqrt{c} = 4$.\nStep 3: Square and check. $c = 16$, so $9x^2 = 16$ gives $x = \\pm\\frac{4}{3}$, and $\\frac{4}{3} - \\left(-\\frac{4}{3}\\right) = \\frac{8}{3}$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{16}{9}$): drops the coefficient $9$ and solves $x^2 = c$, so the gap becomes $2\\sqrt{c}$.\n* Choice B ($4$): is $\\sqrt{c}$, one step short of the requested $c$.\n* Choice D ($64$): sets one solution equal to the whole gap $\\frac{8}{3}$ rather than half of it.\n\n**Test Day Takeaway:** For $ax^2 = c$ the two solutions are symmetric about $0$, so their difference is TWICE the positive one, so halve the gap before squaring.",
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
      question: "$x^{2} + bx + 45 = 0$\nIn the given equation, $b$ is a constant. The equation has two positive solutions that differ by $4$. What is the value of $b$?",
      choices: [
        { id: "A", text: "$-14$" },
        // distractor: negates the larger solution, 9, instead of negating the sum of the two solutions
        { id: "B", text: "$-9$" },
        // distractor: reports the larger solution, 9, rather than a value of b
        { id: "C", text: "$9$" },
        // distractor: reports the sum of the solutions, 14, without the minus sign that b carries
        { id: "D", text: "$14$" }
      ],
      correctAnswer: "A",
      hint: "The two solutions multiply to 45 and their sum is tied to b.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~30s):** The two solutions multiply to $45$ and differ by $4$, so they are $5$ and $9$; their sum is $14$, and $b = -14$.\n\n**The Full Solution:**\nStep 1: Use the product. For $x^2 + bx + 45 = 0$, the two solutions multiply to $45$. Positive pairs are $1$ and $45$, $3$ and $15$, $5$ and $9$.\nStep 2: Use the gap. Only $5$ and $9$ differ by $4$.\nStep 3: Convert the sum to $b$ and check. The solutions sum to $-b$, so $5 + 9 = 14$ gives $b = -14$. Then $x^2 - 14x + 45 = (x - 5)(x - 9)$, with solutions $5$ and $9$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-9$): negates the larger solution instead of the sum of the two.\n* Choice C ($9$): is the larger solution, not the coefficient $b$.\n* Choice D ($14$): is the sum of the two solutions. For $x^2 + bx + c$ the sum equals $-b$, so the sign flips.\n\n**Test Day Takeaway:** For $x^2 + bx + c = 0$: the solutions multiply to $c$ and sum to $-b$. Two positive solutions force $b$ to be negative.",
      skills: ["finding-roots-factoring"]
    }
  ],

  // Section: Vertex
  "Vertex": [
    {
      id: 1,
      difficulty: "easy",
      question: "$f(x) = x^{2} - 10x + 21$\nWhat is the $x$-coordinate of the vertex of the graph of $y = f(x)$ in the $xy$-plane?",
      choices: [
        // distractor: reports b itself instead of -b/(2a)
        { id: "A", text: "$-10$" },
        // distractor: computes b/(2a) and drops the minus sign in the formula
        { id: "B", text: "$-5$" },
        { id: "C", text: "$5$" },
        // distractor: reports the constant term, which is the y-intercept
        { id: "D", text: "$21$" }
      ],
      correctAnswer: "C",
      hint: "Use $x = -\\frac{b}{2a}$, or find the point halfway between the two $x$-intercepts.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** $x = -\\frac{b}{2a} = -\\frac{-10}{2(1)} = 5$.\n\n**The Full Solution:**\nStep 1: Identify the coefficients: $a = 1$, $b = -10$, and $c = 21$.\nStep 2: The vertex of $y = ax^2 + bx + c$ has $x = -\\frac{b}{2a}$, so $x = -\\frac{-10}{2} = 5$.\nStep 3: Confirm with the $x$-intercepts. Factoring gives $(x - 3)(x - 7)$, so the intercepts are $3$ and $7$, whose midpoint is $\\frac{3 + 7}{2} = 5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-10$): reports $b$ itself instead of $-\\frac{b}{2a}$.\n* Choice B ($-5$): computes $\\frac{b}{2a}$ and forgets the leading negative sign in the formula.\n* Choice D ($21$): reports the constant term $c$, which is the $y$-intercept rather than anything about the vertex.\n\n**Test Day Takeaway:** Two routes give the same vertex $x$-value: $-\\frac{b}{2a}$, or the midpoint of the two $x$-intercepts when they exist.",
      skills: ["vertex-formula"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "$f(x) = 0.5(x - 40)^{2} + 12$\nWhat is the minimum value of the given function?",
      choices: [
        // distractor: reports the leading coefficient 0.5, which sets the width of the parabola, not its lowest value
        { id: "A", text: "$0.5$" },
        { id: "B", text: "$12$" },
        // distractor: reports 40, the x-value where the minimum occurs, instead of the minimum value itself
        { id: "C", text: "$40$" },
        // distractor: adds the two numbers in the vertex, 40 + 12, as if the minimum were their sum
        { id: "D", text: "$52$" }
      ],
      correctAnswer: "B",
      hint: "A squared term is never negative, so ask when it is smallest.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** $0.5(x - 40)^{2}$ is never negative and equals $0$ at $x = 40$, so the least value of $f$ is $0 + 12 = 12$.\n\n**The Full Solution:**\nStep 1: Look at the squared term. $(x - 40)^{2} \\ge 0$ for every $x$, and $0.5$ is positive, so $0.5(x - 40)^{2} \\ge 0$.\nStep 2: The squared term equals $0$ only when $x = 40$, so the smallest possible output is $f(40) = 0.5(0)^{2} + 12 = 12$.\nStep 3: The minimum value is $12$, reached at $x = 40$. Check a nearby input: $f(42) = 0.5(2)^{2} + 12 = 14$, which is larger. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.5$): is the leading coefficient. It controls how wide the parabola is, not how low it goes.\n* Choice C ($40$): is the $x$-coordinate of the vertex, the INPUT where the minimum occurs, not the minimum value.\n* Choice D ($52$): adds the two coordinates of the vertex $(40, 12)$; the value of the function is only the $y$-coordinate.\n\n**Test Day Takeaway:** In $f(x) = a(x - h)^{2} + k$ with $a > 0$, the minimum value is $k$ and it occurs at $x = h$; a question about the VALUE wants $k$.",
      skills: ["vertex-form"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "The function $h(t) = -2t^{2} + 12t$ models the height, in meters, of a ball above the ground $t$ seconds after it is thrown upward. According to the model, what is the maximum height, in meters, of the ball?",
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
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~25s):** The vertex is at $t = -\\frac{12}{2(-2)} = 3$, and $h(3) = -18 + 36 = 18$.\n\n**The Full Solution:**\nStep 1: The leading coefficient $-2$ is negative, so the parabola opens downward and the vertex gives the maximum height.\nStep 2: The vertex occurs at $t = -\\frac{b}{2a} = -\\frac{12}{2(-2)} = 3$ seconds.\nStep 3: Evaluate the model there: $h(3) = -2(3)^2 + 12(3) = -18 + 36 = 18$ meters. Check the symmetry: $h(0) = 0$ and $h(6) = -72 + 72 = 0$, and $3$ is the midpoint of $0$ and $6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): reports the TIME at which the maximum occurs rather than the height.\n* Choice B ($6$): reports the time at which the ball returns to the ground.\n* Choice C ($12$): reports the coefficient of $t$ instead of evaluating the model at the vertex.\n\n**Test Day Takeaway:** A maximum-value question has two steps: find the input at the vertex, then substitute it back to get the output the question actually asks for.",
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
      question: "$x^{2} - 6x - 9 = 0$\nHow many distinct real solutions does the given equation have?",
      choices: [
        // distractor: computes the discriminant as 36 - 36 = 0, treating the constant -9 as +9 (the equation looks like the perfect square x^2 - 6x + 9)
        { id: "A", text: "Exactly one" },
        { id: "B", text: "Exactly two" },
        // distractor: treats the equation as an identity; a quadratic equation has at most two solutions
        { id: "C", text: "Infinitely many" },
        // distractor: assumes a negative constant term keeps the parabola y = x^2 - 6x - 9 off the x-axis; with a > 0 and c < 0 the graph must cross the x-axis twice
        { id: "D", text: "Zero" }
      ],
      correctAnswer: "B",
      hint: "Compute b squared minus 4ac and look only at its sign.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** $b^{2} - 4ac = (-6)^{2} - 4(1)(-9) = 36 + 36 = 72$, which is positive, so there are two distinct real solutions.\n\n**The Full Solution:**\nStep 1: Identify the coefficients: $a = 1$, $b = -6$, and $c = -9$.\nStep 2: Compute the discriminant: $b^{2} - 4ac = 36 - 4(1)(-9) = 36 + 36 = 72$.\nStep 3: A positive discriminant gives two distinct real solutions. Check with the quadratic formula: $x = \\frac{6 \\pm \\sqrt{72}}{2} = 3 \\pm 3\\sqrt{2}$, two different real numbers. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A (Exactly one): uses $c = +9$, getting $36 - 36 = 0$. The equation resembles the perfect square $x^{2} - 6x + 9$, but its constant is $-9$.\n* Choice C (Infinitely many): a quadratic equation can never have more than two solutions.\n* Choice D (Zero): assumes the negative constant keeps the graph of $y = x^{2} - 6x - 9$ off the $x$-axis. The graph passes through $(0, -9)$, below the axis, and opens upward, so it must cross the axis twice.\n\n**Test Day Takeaway:** When $a$ and $c$ have opposite signs, $-4ac$ is positive, so the discriminant is positive and the equation has two real solutions.",
      skills: ["discriminant-analysis"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "Which of the following equations has no real solutions?",
      choices: [
        // distractor: confuses x^2 - 9 = 0 with x^2 + 9 = 0; x^2 = 9 has the real solutions 3 and -3
        { id: "A", text: "$x^{2} - 9 = 0$" },
        // distractor: treats a discriminant of 0 as "no solutions"; x^2 + 4x + 4 = (x + 2)^2 has the one solution -2
        { id: "B", text: "$x^{2} + 4x + 4 = 0$" },
        // distractor: assumes a negative constant means no real solutions; the discriminant is 16 + 20 = 36 > 0
        { id: "C", text: "$x^{2} + 4x - 5 = 0$" },
        { id: "D", text: "$x^{2} + 4x + 7 = 0$" }
      ],
      correctAnswer: "D",
      hint: "A negative discriminant means no real solutions.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~20s):** For $x^{2} + 4x + 7 = 0$, $b^{2} - 4ac = 16 - 28 = -12 < 0$, so it has no real solutions.\n\n**The Full Solution:**\nStep 1: An equation $ax^{2} + bx + c = 0$ has no real solutions exactly when $b^{2} - 4ac < 0$.\nStep 2: Compute each discriminant: A: $0 - 4(1)(-9) = 36$; B: $16 - 16 = 0$; C: $16 - 4(1)(-5) = 36$; D: $16 - 4(1)(7) = -12$.\nStep 3: Only choice D is negative. Check by completing the square: $x^{2} + 4x + 7 = (x + 2)^{2} + 3$, which is at least $3$ for every real $x$, so it is never $0$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($x^{2} - 9 = 0$): has the real solutions $3$ and $-3$. The equation with no real solutions would be $x^{2} + 9 = 0$.\n* Choice B ($x^{2} + 4x + 4 = 0$): has discriminant $0$, which means exactly one real solution, $x = -2$, not zero solutions.\n* Choice C ($x^{2} + 4x - 5 = 0$): a negative constant makes $-4ac$ positive; this equation factors as $(x + 5)(x - 1) = 0$.\n\n**Test Day Takeaway:** Zero real solutions means a NEGATIVE discriminant; a discriminant of exactly $0$ still gives one real solution.",
      skills: ["discriminant-analysis"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "$y = 8$\n$y = -0.5x^{2} + 6x - 10$\nAt how many points do the graphs of the given equations intersect in the $xy$-plane?",
      choices: [
        // distractor: drops the 0.5 when computing 4ac, getting 36 - 4(1)(18) = -36 < 0
        { id: "A", text: "Zero" },
        { id: "B", text: "Exactly one" },
        // distractor: sets the quadratic equal to 0 instead of 8, and 36 - 4(-0.5)(-10) = 16 > 0 gives two solutions
        { id: "C", text: "Exactly two" },
        // distractor: thinks a horizontal line can cross a parabola more than twice
        { id: "D", text: "More than two" }
      ],
      correctAnswer: "B",
      hint: "Substitute y = 8 into the second equation and check the discriminant of the result.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** Setting $-0.5x^{2} + 6x - 10 = 8$ gives $x^{2} - 12x + 36 = 0$, whose discriminant is $0$: one intersection point, at $x = 6$.\n\n**The Full Solution:**\nStep 1: Substitute $y = 8$: $-0.5x^{2} + 6x - 10 = 8$, so $-0.5x^{2} + 6x - 18 = 0$.\nStep 2: Multiply by $-2$: $x^{2} - 12x + 36 = 0$. Its discriminant is $(-12)^{2} - 4(1)(36) = 144 - 144 = 0$.\nStep 3: A discriminant of $0$ gives exactly one solution, $x = 6$, so the graphs meet at one point, $(6, 8)$. Check: $-0.5(36) + 36 - 10 = 8$, so the line $y = 8$ touches the parabola at its vertex. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A (Zero): drops the $0.5$ when computing $4ac$, getting $36 - 4(1)(18) = -36$.\n* Choice C (Exactly two): solves $-0.5x^{2} + 6x - 10 = 0$ instead of setting the expression equal to $8$; that discriminant is $36 - 20 = 16$.\n* Choice D (More than two): a line and a parabola can intersect at most twice.\n\n**Test Day Takeaway:** To count intersection points of a line and a parabola, set the expressions equal, move everything to one side, and use the discriminant.",
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
      question: "$3x^{2} + 12x + n = 0$\nIn the given equation, $n$ is a positive integer. For how many values of $n$ does the equation have two distinct real solutions?",
      choices: [
        { id: "A", text: "$11$" },
        // distractor: uses b^2 - 4ac >= 0, counting n = 12, where the discriminant is 0 and the equation has only one solution
        { id: "B", text: "$12$" },
        // distractor: leaves a = 3 out of 4ac, solving 144 - 4n > 0 to get n < 36 and counting 35 values
        { id: "C", text: "$35$" },
        // distractor: leaves the 4 out of 4ac, solving 144 - 3n > 0 to get n < 48 and counting 47 values
        { id: "D", text: "$47$" }
      ],
      correctAnswer: "A",
      hint: "Two distinct real solutions require a positive discriminant; solve for n, then count the positive integers.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~30s):** Two solutions need $144 - 12n > 0$, so $n < 12$, and the positive integers $1$ through $11$ qualify: $11$ values.\n\n**The Full Solution:**\nStep 1: Write the condition. The equation has two distinct real solutions exactly when $12^{2} - 4(3)(n) > 0$, that is, $144 - 12n > 0$.\nStep 2: Solve the inequality: $12n < 144$, so $n < 12$.\nStep 3: Count the positive integers less than $12$: $1, 2, \\ldots, 11$, which is $11$ values. Check the boundary: at $n = 11$ the discriminant is $144 - 132 = 12 > 0$, and at $n = 12$ it is $0$, which gives only one solution. ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($12$): uses $\\ge$ instead of $>$ and counts $n = 12$, where the equation $3(x + 2)^{2} = 0$ has only one solution.\n* Choice C ($35$): leaves $a = 3$ out of $4ac$, solving $144 - 4n > 0$.\n* Choice D ($47$): leaves the $4$ out of $4ac$, solving $144 - 3n > 0$.\n\n**Test Day Takeaway:** Translate \"two distinct real solutions\" into $b^{2} - 4ac > 0$, solve for the parameter, and test the boundary value before you count.",
      skills: ["discriminant-analysis"]
    }
  ],

  // Section: Deriving Standard Form
  "Deriving Standard Form": [
    {
      id: 1,
      difficulty: "easy",
      question: "$f(x) = 3(x - 8)^{2} + 55$\nWhich of the following defines an equivalent form of the given function?",
      choices: [
        // distractor: drops the 3(64) = 192 term entirely, keeping only the 55
        { id: "A", text: "$f(x) = 3x^{2} - 48x + 55$" },
        // distractor: adds 64 to 55 without tripling it: 55 + 64 = 119, so the 3 never reaches the constant
        { id: "B", text: "$f(x) = 3x^{2} - 48x + 119$" },
        { id: "C", text: "$f(x) = 3x^{2} - 48x + 247$" },
        // distractor: expands (x - 8)^2 as x^2 + 16x + 64, losing the minus sign on the middle term
        { id: "D", text: "$f(x) = 3x^{2} + 48x + 247$" }
      ],
      correctAnswer: "C",
      hint: "Square the binomial completely before you distribute the 3.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~20s):** $(x - 8)^{2} = x^{2} - 16x + 64$, so $3(x^{2} - 16x + 64) + 55 = 3x^{2} - 48x + 192 + 55 = 3x^{2} - 48x + 247$.\n\n**The Full Solution:**\nStep 1: Square the binomial. $(x - 8)^{2} = x^{2} - 16x + 64$.\nStep 2: Distribute the $3$. $3(x^{2} - 16x + 64) = 3x^{2} - 48x + 192$.\nStep 3: Combine the constants: $192 + 55 = 247$, so $f(x) = 3x^{2} - 48x + 247$. Check at $x = 8$: the original gives $55$, and $3(64) - 48(8) + 247 = 192 - 384 + 247 = 55$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3x^{2} - 48x + 55$): never multiplies the $64$ by $3$, so the $192$ is missing from the constant term.\n* Choice B ($3x^{2} - 48x + 119$): adds $64$ to $55$ without tripling it, giving $119$ instead of $247$.\n* Choice D ($3x^{2} + 48x + 247$): expands $(x - 8)^{2}$ with a plus sign on the middle term. Squaring $x - 8$ gives $-16x$.\n\n**Test Day Takeaway:** Expand the square first, then distribute, then combine. The constant outside the square never reaches the middle term.",
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
      question: "A rectangular garden is $x$ feet wide and $(x + 6)$ feet long. A path $2$ feet wide runs along the inside of its four edges. Which expression represents the area, in square feet, of the region inside the path?",
      choices: [
        { id: "A", text: "$x^2 - 2x - 8$" },
        // distractor: uses the correct factors (x - 4)(x + 2) but records (-4)(+2) as +8, a sign slip on the constant term
        { id: "B", text: "$x^2 - 2x + 8$" },
        // distractor: expands (x + 4)(x - 2), adding the path to the width rather than removing it
        { id: "C", text: "$x^2 + 2x - 8$" },
        // distractor: subtracts 8 from the whole area x(x + 6) instead of shrinking each dimension first
        { id: "D", text: "$x^2 + 6x - 8$" }
      ],
      correctAnswer: "A",
      hint: "The path takes 2 feet from each end of both dimensions.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~25s):** The region inside the path is $(x - 4)$ feet by $(x + 2)$ feet, and that product is $x^{2} - 2x - 8$.\n\n**The Full Solution:**\nStep 1: Shrink each dimension twice. The path is $2$ feet wide on both sides, so the width drops by $4$ to $x - 4$ and the length drops by $4$ to $(x + 6) - 4 = x + 2$.\nStep 2: Multiply. $(x - 4)(x + 2) = x^{2} + 2x - 4x - 8 = x^{2} - 2x - 8$ square feet.\nStep 3: Check with a number. If $x = 10$, the garden is $10$ by $16$ and the region inside the path is $6$ by $12$, or $72$ square feet; the expression gives $100 - 20 - 8 = 72$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($x^{2} - 2x + 8$): uses the right factors, $(x - 4)(x + 2)$, but signs the constant as $+8$. The product $(-4)(+2)$ is $-8$.\n* Choice C ($x^{2} + 2x - 8$): comes from $(x + 4)(x - 2)$, adding the path to the width instead of removing it.\n* Choice D ($x^{2} + 6x - 8$): subtracts $8$ from the whole garden area $x(x + 6)$, but a border removes a frame, not a fixed $8$ square feet.\n\n**Test Day Takeaway:** A uniform border of width $w$ removes $2w$ from EACH dimension. Shrink both dimensions, then multiply.",
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
