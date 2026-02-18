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
        { id: "A", text: "f(x) = 3x + 2" },
        { id: "B", text: "f(x) = x² + 5x - 3" },
        { id: "C", text: "f(x) = x³ - x" },
        { id: "D", text: "f(x) = √x + 1" }
      ],
      correctAnswer: "B",
      hint: "A quadratic function always has an x² term as its highest power. Look for the function where the variable is raised to exactly the second power.",
      explanation: "**Choice B is correct.** A quadratic function has the standard form $f(x) = ax^2 + bx + c$ where $a \\neq 0$, and the highest power of $x$ is exactly 2.\n\n**Step 1:** Check each function's highest degree term.\n\n**Step 2:** $f(x) = x^2 + 5x - 3$ has $a = 1$, $b = 5$, $c = -3$. The highest power is $x^2$, so this is quadratic.\n\n**Verification:** Confirm $a = 1 \\neq 0$ and degree $= 2$. This matches the definition.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: reversed_operation] $f(x) = 3x + 2$ is a linear function (degree 1). Students sometimes confuse linear and quadratic forms because both appear in $ax^2 + bx + c$ — but here $a = 0$, so the $x^2$ term vanishes.\n• Choice C: [TRAP: partial_calculation] $f(x) = x^3 - x$ is a cubic function (degree 3). Students who only glance at the exponents may think any polynomial with an $x$ term is quadratic, but the highest power must be exactly 2.\n• Choice D: [TRAP: reversed_operation] $f(x) = \\sqrt{x} + 1 = x^{1/2} + 1$ is a radical function. The exponent $\\frac{1}{2}$ is not an integer degree, so this is not a polynomial at all.\n\n**Key concept:** A quadratic function is a polynomial of degree exactly 2: $f(x) = ax^2 + bx + c$ with $a \\neq 0$.\n\n**Calculator tip:** In Desmos, graph each function — the quadratic will produce a U-shaped parabola, instantly distinguishing it from lines, cubics, and radical curves.",
      skills: ['identify-quadratic']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "In the quadratic function f(x) = 2x² - 4x + 7, what is the value of 'a'?",
      choices: [
        { id: "A", text: "−4" },
        { id: "B", text: "2" },
        { id: "C", text: "7" },
        { id: "D", text: "x²" }
      ],
      correctAnswer: "B",
      hint: "In standard form f(x) = ax² + bx + c, the coefficient 'a' is the number multiplying the x² term.",
      explanation: "**Choice B is correct.** In the standard form $f(x) = ax^2 + bx + c$, the coefficient $a$ is the number multiplying $x^2$.\n\n**Step 1:** Align $f(x) = 2x^2 - 4x + 7$ with $f(x) = ax^2 + bx + c$.\n\n**Step 2:** Match coefficients: $a = 2$, $b = -4$, $c = 7$.\n\n**Verification:** Substituting back: $2x^2 + (-4)x + 7 = 2x^2 - 4x + 7$. Confirmed.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: sign_error] $-4$ is the value of $b$, not $a$. Students confuse coefficients when scanning left to right — $b$ is the coefficient of the $x$ term, not the $x^2$ term.\n• Choice C: [TRAP: reversed_operation] $7$ is the value of $c$ (the constant term). This is a common mix-up: $c$ is the y-intercept, not the leading coefficient.\n• Choice D: [TRAP: reversed_operation] $x^2$ is the variable expression, not a coefficient. The coefficient $a$ is a number, not an algebraic term. Students sometimes conflate the variable with its coefficient.\n\n**Key concept:** In $f(x) = ax^2 + bx + c$, the coefficient $a$ determines the parabola's width and direction: $|a|$ controls how narrow or wide it opens, and the sign of $a$ determines whether it opens up ($a > 0$) or down ($a < 0$).",
      skills: ['identify-quadratic']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "The graph of a quadratic function is called a:",
      choices: [
        { id: "A", text: "Line" },
        { id: "B", text: "Circle" },
        { id: "C", text: "Parabola" },
        { id: "D", text: "Hyperbola" }
      ],
      correctAnswer: "C",
      hint: "Think of the U-shaped curve you see when graphing y = x². This shape has a specific name in mathematics.",
      explanation: "**Choice C is correct.** Every quadratic function $f(x) = ax^2 + bx + c$ (with $a \\neq 0$) produces a U-shaped curve called a parabola.\n\n**Step 1:** Recognize that the graph of any degree-2 polynomial in one variable is, by definition, a parabola.\n\n**Step 2:** A parabola opens upward when $a > 0$ and downward when $a < 0$, but it is always called a parabola regardless of orientation.\n\n**Verification:** Graph $y = x^2$ on any graphing tool — the resulting U-shape is the simplest parabola, confirming the definition.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: reversed_operation] A line is the graph of a linear function $f(x) = mx + b$ (degree 1). Students who confuse polynomial degrees may select this, but quadratics always curve.\n• Choice B: [TRAP: partial_calculation] A circle is defined by $x^2 + y^2 = r^2$. While it contains $x^2$, a circle is not a function (it fails the vertical line test) and involves both $x^2$ and $y^2$.\n• Choice D: [TRAP: partial_calculation] A hyperbola (e.g., $y = 1/x$ or $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$) is a conic section with two separate branches. It may look vaguely similar to a parabola, but it is a fundamentally different curve.\n\n**Key concept:** The four conic sections are circles, ellipses, parabolas, and hyperbolas. Quadratic functions in the form $y = ax^2 + bx + c$ always produce parabolas.",
      skills: ['identify-quadratic', 'parabola-direction']
    },
    {
      id: 4,
      difficulty: "medium",
      question: "If a > 0 in f(x) = ax² + bx + c, the parabola:",
      choices: [
        { id: "A", text: "Opens upward" },
        { id: "B", text: "Opens downward" },
        { id: "C", text: "Opens to the right" },
        { id: "D", text: "Opens to the left" }
      ],
      correctAnswer: "A",
      hint: "The sign of 'a' determines the direction. When 'a' is positive, think of a smile; when negative, think of a frown.",
      explanation: "**Choice A is correct.** When $a > 0$, the parabola opens upward, forming a U-shape (like a smile).\n\n**Step 1:** The leading coefficient $a$ controls the direction of opening. As $x \\to \\pm\\infty$, the $ax^2$ term dominates.\n\n**Step 2:** If $a > 0$, then $ax^2 \\to +\\infty$ as $|x| \\to \\infty$, meaning both arms of the parabola rise — it opens upward.\n\n**Verification:** Graph $y = x^2$ (where $a = 1 > 0$). Both sides rise from the vertex, confirming upward opening.\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: sign_error] \"Opens downward\" applies when $a < 0$, not $a > 0$. This is the most common trap — students reverse the sign rule. Remember: positive $a$ = smile (up), negative $a$ = frown (down).\n• Choice C: [TRAP: reversed_operation] A parabola of the form $y = ax^2 + bx + c$ never opens left or right. Sideways parabolas arise from equations like $x = ay^2 + by + c$, which are not functions of $x$.\n• Choice D: [TRAP: reversed_operation] Same reasoning as Choice C — left/right opening requires $x$ to be expressed as a function of $y$, which is a different type of equation entirely.\n\n**Key concept:** For $f(x) = ax^2 + bx + c$: if $a > 0$, the vertex is a minimum (parabola opens up); if $a < 0$, the vertex is a maximum (parabola opens down).\n\n**Calculator tip:** In Desmos, type $y = ax^2$ and add a slider for $a$. Watch the parabola flip as $a$ crosses zero.",
      skills: ['parabola-direction']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "What is the y-intercept of f(x) = 3x² - 2x + 5?",
      choices: [
        { id: "A", text: "3" },
        { id: "B", text: "−2" },
        { id: "C", text: "5" },
        { id: "D", text: "0" }
      ],
      correctAnswer: "C",
      hint: "To find the y-intercept, substitute x = 0 into the function. Notice what happens to all the terms with x in them.",
      explanation: "**Choice C is correct.** The y-intercept is the point where the graph crosses the y-axis, which occurs at $x = 0$.\n\n**Step 1:** Substitute $x = 0$ into $f(x) = 3x^2 - 2x + 5$:\n$$f(0) = 3(0)^2 - 2(0) + 5 = 0 - 0 + 5 = 5$$\n\n**Step 2:** Therefore the y-intercept is $(0, 5)$, and the y-intercept value is $5$.\n\n**Verification:** In the standard form $f(x) = ax^2 + bx + c$, setting $x = 0$ always gives $f(0) = c$. Here $c = 5$. Confirmed.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: reversed_operation] $3$ is the value of $a$ (the leading coefficient), not the y-intercept. Students who confuse $a$ with $c$ pick this — but $a$ controls the parabola's width and direction, not the y-intercept.\n• Choice B: [TRAP: sign_error] $-2$ is the value of $b$ (the coefficient of $x$). This is a coefficient-identification error. The y-intercept is always the constant term $c$.\n• Choice D: [TRAP: arithmetic_slip] Choosing $0$ suggests the student may have thought the y-intercept is always at the origin, or incorrectly evaluated $f(0)$ by dropping the constant term.\n\n**Key concept:** For any polynomial $f(x) = ax^2 + bx + c$, the y-intercept equals $c$ because $f(0) = a(0)^2 + b(0) + c = c$.\n\n**Calculator tip:** In Desmos, graph $y = 3x^2 - 2x + 5$ and click the point where the curve meets the y-axis to confirm it's at $(0, 5)$.",
      skills: ['identify-quadratic']
    }
  ],

  // Section: Roots
  "Roots": [
    {
      id: 1,
      difficulty: "easy",
      question: "What are the roots of x² - 5x + 6 = 0?",
      choices: [
        { id: "A", text: "x = 2 and x = 3" },
        { id: "B", text: "x = -2 and x = -3" },
        { id: "C", text: "x = 1 and x = 6" },
        { id: "D", text: "x = -1 and x = -6" }
      ],
      correctAnswer: "A",
      hint: "Try factoring the quadratic. Find two numbers that multiply to give +6 and add to give -5.",
      explanation: "**Choice A is correct.** We need two numbers that multiply to $+6$ and add to $-5$.\n\n**Step 1:** Factor the quadratic. We need integers $p$ and $q$ such that $p \\cdot q = 6$ and $p + q = -5$. The pair $(-2, -3)$ works: $(-2)(-3) = 6$ and $(-2) + (-3) = -5$.\n\n**Step 2:** Write the factored form:\n$$x^2 - 5x + 6 = (x - 2)(x - 3) = 0$$\n\n**Step 3:** Apply the zero-product property: $x - 2 = 0 \\Rightarrow x = 2$, or $x - 3 = 0 \\Rightarrow x = 3$.\n\n**Verification:** Plug $x = 2$: $(2)^2 - 5(2) + 6 = 4 - 10 + 6 = 0$. Plug $x = 3$: $(3)^2 - 5(3) + 6 = 9 - 15 + 6 = 0$. Both check out.\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: sign_error] $x = -2$ and $x = -3$ would come from $(x + 2)(x + 3) = x^2 + 5x + 6$, which has $+5x$ instead of $-5x$. Students who forget that $(x - r) = 0$ gives $x = r$ (not $x = -r$) fall into this sign trap.\n• Choice C: [TRAP: partial_calculation] While $1 \\times 6 = 6$ (product is correct), $1 + 6 = 7 \\neq -5$ (sum is wrong). Students sometimes find a factor pair of $c$ but forget to check that the pair also sums to $b$.\n• Choice D: [TRAP: sign_error] $(-1)(-6) = 6$ (product is correct), but $(-1) + (-6) = -7 \\neq -5$ (sum is wrong). This combines the sign error from Choice B with the wrong factor pair.\n\n**Key concept:** To factor $x^2 + bx + c$, find two numbers whose product is $c$ and whose sum is $b$. Then write $(x - r_1)(x - r_2) = 0$.\n\n**Calculator tip:** In Desmos, graph $y = x^2 - 5x + 6$ and observe it crosses the x-axis at $x = 2$ and $x = 3$.",
      skills: ['finding-roots-factoring']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "If x = -4 is a root of x² + 7x + k = 0, what is the value of k?",
      choices: [
        { id: "A", text: "−12" },
        { id: "B", text: "12" },
        { id: "C", text: "−28" },
        { id: "D", text: "28" }
      ],
      correctAnswer: "B",
      hint: "If x = -4 is a root, the equation equals zero when you substitute -4 for x. Plug in and solve for k.",
      explanation: "**Choice B is correct.** If $x = -4$ is a root, then substituting into the equation must yield $0$.\n\n**Step 1:** Substitute $x = -4$ into $x^2 + 7x + k = 0$:\n$$(-4)^2 + 7(-4) + k = 0$$\n\n**Step 2:** Simplify:\n$$16 - 28 + k = 0$$\n$$-12 + k = 0$$\n$$k = 12$$\n\n**Verification:** With $k = 12$, the equation is $x^2 + 7x + 12 = 0$. Factor: $(x + 3)(x + 4) = 0$, giving $x = -3$ or $x = -4$. Confirmed that $x = -4$ is a root.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: sign_error] $k = -12$ comes from computing $16 - 28 = -12$ but then stopping — forgetting to solve $-12 + k = 0$ for $k$. The student confuses the intermediate value with the answer.\n• Choice C: [TRAP: arithmetic_slip] $k = -28$ suggests the student computed $7(-4) = -28$ and stopped there, ignoring the $(-4)^2 = 16$ term entirely.\n• Choice D: [TRAP: sign_error] $k = 28$ suggests the student computed $|7 \\times (-4)| = 28$, dropping the negative sign from the multiplication.\n\n**Key concept:** If $r$ is a root of $f(x) = 0$, then $f(r) = 0$. Substituting the root and solving for the unknown parameter is a standard SAT technique.\n\n**Calculator tip:** In Desmos, graph $y = x^2 + 7x + k$ with a slider for $k$, and adjust until the graph passes through $(-4, 0)$. You will find $k = 12$.",
      skills: ['roots-from-factors', 'finding-roots-factoring']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "The equation x² - 9 = 0 has roots at:",
      choices: [
        { id: "A", text: "x = 9 only" },
        { id: "B", text: "x = 3 only" },
        { id: "C", text: "x = 3 and x = -3" },
        { id: "D", text: "x = 81 and x = -81" }
      ],
      correctAnswer: "C",
      hint: "This is a difference of squares. Remember that x² = 9 has two solutions: one positive and one negative.",
      explanation: "**Choice C is correct.** This is a difference of squares, one of the most important patterns on the SAT.\n\n**Step 1:** Recognize the structure: $x^2 - 9 = x^2 - 3^2$, a difference of squares.\n\n**Step 2:** Factor using $a^2 - b^2 = (a - b)(a + b)$:\n$$x^2 - 9 = (x - 3)(x + 3) = 0$$\n\n**Step 3:** Apply zero-product property: $x - 3 = 0 \\Rightarrow x = 3$, or $x + 3 = 0 \\Rightarrow x = -3$.\n\n**Verification:** Plug $x = 3$: $(3)^2 - 9 = 9 - 9 = 0$. Plug $x = -3$: $(-3)^2 - 9 = 9 - 9 = 0$. Both work.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: partial_calculation] $x = 9$ comes from confusing $x^2 = 9$ with $x = 9$. The student forgot to take the square root. Also, even if they had taken $\\sqrt{9} = 3$, they forgot the $\\pm$ and found only one root.\n• Choice B: [TRAP: partial_calculation] $x = 3$ is one correct root, but the student forgot $\\pm$. When solving $x^2 = 9$, both $x = 3$ and $x = -3$ are valid because both $(3)^2$ and $(-3)^2$ equal $9$.\n• Choice D: [TRAP: arithmetic_slip] $x = 81$ and $x = -81$ comes from squaring $9$ instead of taking its square root. The student applied the wrong inverse operation: $9^2 = 81$ instead of $\\sqrt{9} = 3$.\n\n**Key concept:** The difference of squares identity $a^2 - b^2 = (a-b)(a+b)$ and the rule $x^2 = k \\Rightarrow x = \\pm\\sqrt{k}$ (always include both roots).\n\n**Calculator tip:** In Desmos, graph $y = x^2 - 9$ and verify the two x-intercepts at $x = -3$ and $x = 3$.",
      skills: ['difference-of-squares', 'finding-roots-factoring']
    },
    {
      id: 4,
      difficulty: "medium",
      question: "If a quadratic equation has roots at x = 1 and x = 5, which could be the equation?",
      choices: [
        { id: "A", text: "x² - 6x + 5 = 0" },
        { id: "B", text: "x² + 6x + 5 = 0" },
        { id: "C", text: "x² - 4x + 5 = 0" },
        { id: "D", text: "x² - 6x - 5 = 0" }
      ],
      correctAnswer: "A",
      hint: "Work backwards from the roots. If r and s are roots, then the equation can be written as (x - r)(x - s) = 0. Expand this product.",
      explanation: "**Choice A is correct.** Given roots $x = 1$ and $x = 5$, we build the equation from factored form.\n\n**Step 1:** Write the factored form using the roots:\n$$(x - 1)(x - 5) = 0$$\n\n**Step 2:** Expand using FOIL:\n$$x^2 - 5x - x + 5 = x^2 - 6x + 5 = 0$$\n\n**Verification:** Check roots of $x^2 - 6x + 5 = 0$. For $x = 1$: $1 - 6 + 5 = 0$. For $x = 5$: $25 - 30 + 5 = 0$. Both confirmed.\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: sign_error] $x^2 + 6x + 5 = (x + 1)(x + 5) = 0$ has roots $x = -1$ and $x = -5$. The student reversed all signs — using $(x + r)$ instead of $(x - r)$. By Vieta's formulas, the sum of roots should be $1 + 5 = 6 = -b/a$, so $b = -6$, not $+6$.\n• Choice C: [TRAP: arithmetic_slip] In $x^2 - 4x + 5$, the coefficient $-4$ suggests the student computed the sum of roots as $1 + 5 = 6$ but then mistakenly used $5 - 1 = 4$ (the difference, not the sum) as $-b$.\n• Choice D: [TRAP: sign_error] $x^2 - 6x - 5$ has $c = -5$ instead of $c = +5$. By Vieta's formulas, the product of roots should be $1 \\times 5 = 5 = c/a$, so $c = +5$. The student likely made a sign error when multiplying the constant terms $(-1)(-5) = +5$, not $-5$.\n\n**Key concept:** If $r_1$ and $r_2$ are roots, then $x^2 - (r_1 + r_2)x + (r_1 \\cdot r_2) = 0$. This is Vieta's formulas: sum of roots $= -b/a$ and product of roots $= c/a$.\n\n**Calculator tip:** In Desmos, graph $y = x^2 - 6x + 5$ and verify the x-intercepts are at $(1, 0)$ and $(5, 0)$.",
      skills: ['roots-from-factors']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "For what value of x does 2x² - 8x = 0?",
      choices: [
        { id: "A", text: "x = 0 only" },
        { id: "B", text: "x = 4 only" },
        { id: "C", text: "x = 0 and x = 4" },
        { id: "D", text: "x = 2 and x = -4" }
      ],
      correctAnswer: "C",
      hint: "Factor out the greatest common factor first. Both terms share a common factor of 2x.",
      explanation: "**Choice C is correct.** This equation requires factoring out the GCF before applying the zero-product property.\n\n**Step 1:** Factor out the GCF of $2x$:\n$$2x^2 - 8x = 2x(x - 4) = 0$$\n\n**Step 2:** Apply the zero-product property. Either $2x = 0$ or $x - 4 = 0$:\n$$2x = 0 \\Rightarrow x = 0$$\n$$x - 4 = 0 \\Rightarrow x = 4$$\n\n**Verification:** For $x = 0$: $2(0)^2 - 8(0) = 0$. For $x = 4$: $2(16) - 8(4) = 32 - 32 = 0$. Both confirmed.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: partial_calculation] Finding only $x = 0$ means the student divided both sides by $x$ (or $2x$) instead of factoring. Dividing by a variable discards the solution $x = 0$. Never divide both sides of an equation by an expression that could equal zero.\n• Choice B: [TRAP: partial_calculation] Finding only $x = 4$ means the student recognized the $x - 4$ factor but ignored the $2x$ factor, forgetting that $x = 0$ is also a valid root. Every factor set to zero yields a solution.\n• Choice D: [TRAP: sign_error] $x = 2$ and $x = -4$ would come from incorrectly factoring as $2(x - 2)(x + 4)$, which expands to $2x^2 + 4x - 16$ — a completely different expression. The student likely made errors in both the GCF and the sign.\n\n**Key concept:** When a quadratic has no constant term ($c = 0$), always factor out $x$ first: $ax^2 + bx = x(ax + b) = 0$. One root is always $x = 0$.\n\n**Calculator tip:** In Desmos, graph $y = 2x^2 - 8x$ and note the two x-intercepts at $(0, 0)$ and $(4, 0)$. The parabola passes through the origin.",
      skills: ['finding-roots-factoring']
    }
  ],

  // Section: Vertex
  "Vertex": [
    {
      id: 1,
      difficulty: "easy",
      question: "What is the x-coordinate of the vertex of f(x) = x² - 6x + 5?",
      choices: [
        { id: "A", text: "−6" },
        { id: "B", text: "−3" },
        { id: "C", text: "3" },
        { id: "D", text: "6" }
      ],
      correctAnswer: "C",
      hint: "Use the vertex formula x = -b/(2a). Identify the values of a and b from the standard form.",
      explanation: "**Choice C is correct.** The x-coordinate of the vertex is found using the formula $x = -\\frac{b}{2a}$.\n\n**Step 1:** Identify the coefficients from $f(x) = x^2 - 6x + 5$: $a = 1$, $b = -6$, $c = 5$.\n\n**Step 2:** Apply the vertex formula:\n$$x = -\\frac{b}{2a} = -\\frac{-6}{2(1)} = \\frac{6}{2} = 3$$\n\n**Verification:** The roots of $x^2 - 6x + 5 = (x-1)(x-5) = 0$ are $x = 1$ and $x = 5$. The vertex x-coordinate is the midpoint: $\\frac{1+5}{2} = 3$. Confirmed.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: partial_calculation] $-6$ is simply the value of $b$, not the vertex. The student grabbed the coefficient without applying the formula $x = -b/(2a)$.\n• Choice B: [TRAP: sign_error] $-3$ results from computing $\\frac{b}{2a} = \\frac{-6}{2} = -3$ — forgetting the negative sign in front. The correct formula is $x = -\\frac{b}{2a}$, so the negatives cancel: $-\\frac{(-6)}{2} = +3$.\n• Choice D: [TRAP: reversed_operation] $6$ comes from computing $-b = -(-6) = 6$ but forgetting to divide by $2a$. The student applied only part of the formula.\n\n**Key concept:** For $f(x) = ax^2 + bx + c$, the vertex x-coordinate is $x = -\\frac{b}{2a}$, which is also the axis of symmetry and the midpoint of the two roots.\n\n**Calculator tip:** In Desmos, graph $y = x^2 - 6x + 5$ and click the vertex to confirm it's at $(3, -4)$.",
      skills: ['vertex-formula']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "The vertex of f(x) = (x - 2)² + 3 is at:",
      choices: [
        { id: "A", text: "(2, 3)" },
        { id: "B", text: "(-2, 3)" },
        { id: "C", text: "(2, -3)" },
        { id: "D", text: "(-2, -3)" }
      ],
      correctAnswer: "A",
      hint: "This is already in vertex form f(x) = a(x - h)² + k. The vertex is at (h, k). Be careful with the sign inside the parentheses.",
      explanation: "**Choice A is correct.** The function is already in vertex form, so we can read off the vertex directly.\n\n**Step 1:** Match $f(x) = (x - 2)^2 + 3$ with the vertex form $f(x) = a(x - h)^2 + k$.\n\n**Step 2:** Identify: $a = 1$, $h = 2$, $k = 3$. The vertex is $(h, k) = (2, 3)$.\n\n**Verification:** The expression $(x - 2)^2 \\geq 0$ for all real $x$, and equals $0$ when $x = 2$. So the minimum value of $f$ is $0 + 3 = 3$, occurring at $x = 2$. The vertex is $(2, 3)$. Confirmed.\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: sign_error] $(-2, 3)$ results from reading $(x - 2)$ and incorrectly taking $h = -2$. The vertex form is $(x - h)^2$, so $(x - 2)$ means $h = +2$, not $-2$. This is the most common SAT trap with vertex form — the sign inside the parentheses is opposite to $h$.\n• Choice C: [TRAP: sign_error] $(2, -3)$ gets $h$ correct but flips the sign of $k$. In vertex form $a(x - h)^2 + k$, the $+3$ means $k = +3$ directly. There is no sign change for $k$.\n• Choice D: [TRAP: sign_error] $(-2, -3)$ has both signs wrong. The student applied the sign-reversal rule (meant only for $h$) to both $h$ and $k$.\n\n**Key concept:** In vertex form $f(x) = a(x - h)^2 + k$, the vertex is $(h, k)$. The sign of $h$ is reversed from what appears inside the parentheses (since it's $x - h$), but $k$ keeps its sign as written.\n\n**Calculator tip:** In Desmos, graph $y = (x-2)^2 + 3$ and click the lowest point to confirm the vertex at $(2, 3)$.",
      skills: ['vertex-form']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "For f(x) = -2x² + 8x - 3, does the vertex represent a maximum or minimum?",
      choices: [
        { id: "A", text: "Maximum, because a < 0" },
        { id: "B", text: "Minimum, because a < 0" },
        { id: "C", text: "Maximum, because a > 0" },
        { id: "D", text: "Neither" }
      ],
      correctAnswer: "A",
      hint: "Look at the coefficient of x². If it's negative, the parabola opens downward, making the vertex the highest point.",
      explanation: "**Choice A is correct.** The sign of $a$ determines whether the vertex is a maximum or minimum.\n\n**Step 1:** Identify $a = -2$ from $f(x) = -2x^2 + 8x - 3$. Since $a = -2 < 0$, the parabola opens downward.\n\n**Step 2:** A downward-opening parabola has its vertex at the highest point, so the vertex represents a maximum.\n\n**Verification:** Find the vertex: $x = -\\frac{b}{2a} = -\\frac{8}{2(-2)} = -\\frac{8}{-4} = 2$. Then $f(2) = -2(4) + 8(2) - 3 = -8 + 16 - 3 = 5$. Check nearby: $f(1) = -2 + 8 - 3 = 3 < 5$ and $f(3) = -18 + 24 - 3 = 3 < 5$. The vertex value $5$ is indeed the maximum. Confirmed.\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: reversed_operation] This correctly identifies $a < 0$ but draws the wrong conclusion. When $a < 0$, the parabola opens downward, making the vertex a maximum, not a minimum. Students who memorize \"negative = minimum\" without understanding the geometry fall into this trap.\n• Choice C: [TRAP: sign_error] This incorrectly claims $a > 0$. The leading coefficient is $-2$, which is clearly negative. The student may have looked at the $+8$ (the value of $b$) instead of $-2$ (the value of $a$).\n• Choice D: [TRAP: reversed_operation] \"Neither\" is never correct for a quadratic function with $a \\neq 0$. Every parabola has exactly one vertex, and it is always either a maximum or a minimum.\n\n**Key concept:** For $f(x) = ax^2 + bx + c$: $a > 0 \\Rightarrow$ vertex is a minimum (parabola opens up); $a < 0 \\Rightarrow$ vertex is a maximum (parabola opens down).",
      skills: ['parabola-direction', 'vertex-formula']
    },
    {
      id: 4,
      difficulty: "medium",
      question: "What is the minimum value of f(x) = x² + 4x + 7?",
      choices: [
        { id: "A", text: "3" },
        { id: "B", text: "4" },
        { id: "C", text: "7" },
        { id: "D", text: "−2" }
      ],
      correctAnswer: "A",
      hint: "First find the x-coordinate of the vertex using x = -b/(2a), then substitute this x-value back into the function to find the minimum y-value.",
      explanation: "**Choice A is correct.** Since $a = 1 > 0$, the parabola opens upward and the vertex gives the minimum value.\n\n**Step 1:** Find the x-coordinate of the vertex:\n$$x = -\\frac{b}{2a} = -\\frac{4}{2(1)} = -2$$\n\n**Step 2:** Substitute $x = -2$ into $f(x)$ to find the minimum value:\n$$f(-2) = (-2)^2 + 4(-2) + 7 = 4 - 8 + 7 = 3$$\n\n**Verification:** Complete the square: $x^2 + 4x + 7 = (x^2 + 4x + 4) + 3 = (x + 2)^2 + 3$. Since $(x + 2)^2 \\geq 0$, the minimum value is $3$, achieved when $x = -2$. Confirmed.\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: partial_calculation] $4$ is the value of $b$, or possibly $(-2)^2 = 4$. The student may have computed the vertex x-coordinate but stopped partway through the evaluation of $f(-2)$.\n• Choice C: [TRAP: reversed_operation] $7$ is the constant term $c$ (the y-intercept), not the minimum value. Students confuse the y-intercept with the vertex y-value — they are only equal when the vertex happens to be at $x = 0$.\n• Choice D: [TRAP: partial_calculation] $-2$ is the x-coordinate of the vertex, not the minimum value. The question asks for the minimum value of $f(x)$, which is $f(-2) = 3$ — the y-coordinate, not the x-coordinate.\n\n**Key concept:** The minimum (or maximum) value of a quadratic is the y-coordinate of the vertex: $f\\left(-\\frac{b}{2a}\\right)$. Do not confuse the x-coordinate of the vertex with the minimum/maximum value.\n\n**Calculator tip:** In Desmos, graph $y = x^2 + 4x + 7$ and click the vertex to read the minimum value directly as $y = 3$.",
      skills: ['vertex-formula']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "The axis of symmetry of f(x) = 2x² + 12x - 5 is:",
      choices: [
        { id: "A", text: "x = 3" },
        { id: "B", text: "x = -3" },
        { id: "C", text: "x = 6" },
        { id: "D", text: "x = -6" }
      ],
      correctAnswer: "B",
      hint: "The axis of symmetry is a vertical line that passes through the vertex. Use x = -b/(2a) to find it.",
      explanation: "**Choice B is correct.** The axis of symmetry is the vertical line through the vertex, given by $x = -\\frac{b}{2a}$.\n\n**Step 1:** Identify coefficients from $f(x) = 2x^2 + 12x - 5$: $a = 2$, $b = 12$.\n\n**Step 2:** Apply the formula:\n$$x = -\\frac{b}{2a} = -\\frac{12}{2(2)} = -\\frac{12}{4} = -3$$\n\nThe axis of symmetry is $x = -3$.\n\n**Verification:** Check symmetry: $f(-3 + 1) = f(-2) = 2(4) + 12(-2) - 5 = 8 - 24 - 5 = -21$. And $f(-3 - 1) = f(-4) = 2(16) + 12(-4) - 5 = 32 - 48 - 5 = -21$. Since $f(-2) = f(-4)$, the axis of symmetry at $x = -3$ is confirmed.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: sign_error] $x = 3$ results from dropping the negative sign in the formula: $\\frac{b}{2a} = \\frac{12}{4} = 3$ instead of $-\\frac{b}{2a} = -3$. Always remember the negative sign in $x = -\\frac{b}{2a}$.\n• Choice C: [TRAP: partial_calculation] $x = 6$ comes from computing $-\\frac{b}{a} = -\\frac{12}{2} = -6$ but then dropping the negative, or computing $\\frac{b}{a} = 6$. The student forgot to include the factor of $2$ in the denominator.\n• Choice D: [TRAP: partial_calculation] $x = -6$ results from using $-\\frac{b}{a} = -\\frac{12}{2} = -6$ instead of $-\\frac{b}{2a} = -\\frac{12}{4} = -3$. The student forgot the factor of $2$ in the denominator of the vertex formula.\n\n**Key concept:** The axis of symmetry is $x = -\\frac{b}{2a}$. It is a vertical line, always written in the form $x = \\text{constant}$. Every parabola is symmetric about this line.\n\n**Calculator tip:** In Desmos, graph $y = 2x^2 + 12x - 5$ and use the vertex coordinates to verify the axis of symmetry passes through $x = -3$.",
      skills: ['vertex-formula']
    }
  ],

  // Section: Discriminant
  "Discriminant": [
    {
      id: 1,
      difficulty: "easy",
      question: "What is the discriminant of x² - 4x + 4 = 0?",
      choices: [
        { id: "A", text: "−32" },
        { id: "B", text: "0" },
        { id: "C", text: "32" },
        { id: "D", text: "48" }
      ],
      correctAnswer: "B",
      hint: "The discriminant is b² - 4ac. Identify a, b, and c from the equation, then substitute into this formula.",
      explanation: "**Choice B is correct.** The discriminant is calculated using $\\Delta = b^2 - 4ac$.\n\n**Step 1:** Identify coefficients from $x^2 - 4x + 4 = 0$: $a = 1$, $b = -4$, $c = 4$.\n\n**Step 2:** Compute the discriminant:\n$$\\Delta = b^2 - 4ac = (-4)^2 - 4(1)(4) = 16 - 16 = 0$$\n\n**Verification:** A discriminant of $0$ means one repeated root. Factor: $x^2 - 4x + 4 = (x - 2)^2 = 0$, so $x = 2$ is a double root. Confirmed.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: sign_error] $-32$ could arise from computing $-4^2 - 4(1)(4)$ where the student evaluates $-4^2$ as $-(4^2) = -16$ instead of $(-4)^2 = +16$. This is a critical order-of-operations error: $(-4)^2 = 16$, but $-4^2 = -16$.\n• Choice C: [TRAP: sign_error] $32$ might come from computing $(-4)^2 + 4(1)(4) = 16 + 16 = 32$ — using addition instead of subtraction in $b^2 - 4ac$. The formula has a minus sign, not a plus.\n• Choice D: [TRAP: arithmetic_slip] $48$ could come from $(-4)^2 - 4(1)(-4) = 16 + 16 = 32$... no, more likely from a different arithmetic error, such as misidentifying $c$ as $-4$ giving $16 - 4(1)(-4) = 16 + 16 = 32$, or other computational mistakes. Regardless, it does not match the correct calculation.\n\n**Key concept:** The discriminant $\\Delta = b^2 - 4ac$ determines the nature of the roots:\n• $\\Delta > 0$: two distinct real roots\n• $\\Delta = 0$: one repeated real root (perfect square trinomial)\n• $\\Delta < 0$: no real roots (two complex conjugate roots)\n\n**Calculator tip:** In Desmos, graph $y = x^2 - 4x + 4$. The parabola touches the x-axis at exactly one point $(2, 0)$, confirming a discriminant of zero.",
      skills: ['discriminant-analysis']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "If the discriminant is negative, the quadratic equation has:",
      choices: [
        { id: "A", text: "Two real solutions" },
        { id: "B", text: "One real solution" },
        { id: "C", text: "No real solutions" },
        { id: "D", text: "Infinitely many solutions" }
      ],
      correctAnswer: "C",
      hint: "The discriminant tells you about the number of real solutions. A negative discriminant means you would be taking the square root of a negative number.",
      explanation: "**Choice C is correct.** A negative discriminant means the quadratic has no real solutions.\n\n**Step 1:** In the quadratic formula $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$, the expression under the square root is the discriminant $\\Delta = b^2 - 4ac$.\n\n**Step 2:** If $\\Delta < 0$, then $\\sqrt{\\Delta}$ involves the square root of a negative number, which has no real value. Therefore, the formula produces no real solutions.\n\n**Verification:** Example: $x^2 + 1 = 0$ has $\\Delta = 0 - 4(1)(1) = -4 < 0$. Solving: $x^2 = -1$, which has no real solution (since no real number squared gives $-1$). Confirmed.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: reversed_operation] Two real solutions occurs when $\\Delta > 0$ (positive), not negative. The student reversed the sign conditions. Mnemonic: positive discriminant = positive news (two solutions).\n• Choice B: [TRAP: reversed_operation] One real solution (a repeated root) occurs when $\\Delta = 0$ exactly, not when it is negative. This is the boundary case between two real roots and no real roots.\n• Choice D: [TRAP: reversed_operation] A quadratic equation can never have infinitely many solutions (unless it is the trivial equation $0 = 0$). A degree-2 polynomial has at most 2 roots by the Fundamental Theorem of Algebra.\n\n**Key concept:** The discriminant $\\Delta = b^2 - 4ac$ is the \"decision-maker\" for quadratic equations:\n$$\\Delta > 0 \\Rightarrow \\text{2 real roots} \\quad | \\quad \\Delta = 0 \\Rightarrow \\text{1 real root} \\quad | \\quad \\Delta < 0 \\Rightarrow \\text{0 real roots}$$",
      skills: ['discriminant-analysis']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "How many x-intercepts does y = x² + 2x + 5 have?",
      choices: [
        { id: "A", text: "0" },
        { id: "B", text: "1" },
        { id: "C", text: "2" },
        { id: "D", text: "Cannot determine" }
      ],
      correctAnswer: "A",
      hint: "X-intercepts occur where the parabola crosses the x-axis. Calculate the discriminant to determine if there are real roots.",
      explanation: "**Choice A is correct.** The number of x-intercepts equals the number of real roots, which is determined by the discriminant.\n\n**Step 1:** Identify coefficients: $a = 1$, $b = 2$, $c = 5$.\n\n**Step 2:** Compute the discriminant:\n$$\\Delta = b^2 - 4ac = (2)^2 - 4(1)(5) = 4 - 20 = -16$$\n\n**Step 3:** Since $\\Delta = -16 < 0$, there are no real roots, which means no x-intercepts.\n\n**Verification:** Complete the square: $x^2 + 2x + 5 = (x + 1)^2 + 4$. Since $(x + 1)^2 \\geq 0$, the minimum value is $4 > 0$. The parabola never reaches $y = 0$, so it never crosses the x-axis. Confirmed.\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: partial_calculation] One x-intercept occurs only when $\\Delta = 0$. Here $\\Delta = -16 \\neq 0$. The student may have confused \"the vertex is the lowest point\" with \"the vertex touches the x-axis.\"\n• Choice C: [TRAP: reversed_operation] Two x-intercepts occurs when $\\Delta > 0$. Since $\\Delta = -16 < 0$, this is incorrect. The student may have assumed all quadratics cross the x-axis twice.\n• Choice D: [TRAP: reversed_operation] The number of x-intercepts can always be determined for a quadratic — just compute the discriminant. There is never ambiguity for a quadratic equation.\n\n**Key concept:** X-intercepts of $y = ax^2 + bx + c$ correspond to real solutions of $ax^2 + bx + c = 0$. The discriminant $\\Delta = b^2 - 4ac$ tells you how many: $\\Delta > 0$ gives 2, $\\Delta = 0$ gives 1, $\\Delta < 0$ gives 0.\n\n**Calculator tip:** In Desmos, graph $y = x^2 + 2x + 5$ and observe that the entire parabola sits above the x-axis — it has no x-intercepts.",
      skills: ['discriminant-analysis']
    },
    {
      id: 4,
      difficulty: "medium",
      question: "For what value of k does x² + kx + 9 = 0 have exactly one solution?",
      choices: [
        { id: "A", text: "k = 3 only" },
        { id: "B", text: "k = 6 only" },
        { id: "C", text: "k = ±6" },
        { id: "D", text: "k = ±3" }
      ],
      correctAnswer: "C",
      hint: "One solution means the discriminant equals zero. Set b² - 4ac = 0 and solve for k. Remember that k² has two square roots.",
      explanation: "**Choice C is correct.** Exactly one solution means the discriminant equals zero.\n\n**Step 1:** Identify coefficients: $a = 1$, $b = k$, $c = 9$.\n\n**Step 2:** Set the discriminant equal to zero:\n$$\\Delta = k^2 - 4(1)(9) = 0$$\n$$k^2 - 36 = 0$$\n$$k^2 = 36$$\n$$k = \\pm 6$$\n\n**Verification:** For $k = 6$: $x^2 + 6x + 9 = (x + 3)^2 = 0 \\Rightarrow x = -3$ (one solution). For $k = -6$: $x^2 - 6x + 9 = (x - 3)^2 = 0 \\Rightarrow x = 3$ (one solution). Both values of $k$ give exactly one repeated root. Confirmed.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: partial_calculation] $k = 3$ gives $\\Delta = 9 - 36 = -27 < 0$, which means no real solutions — not one solution. The student may have solved $\\sqrt{36} = 6$ but then divided by $2$ unnecessarily.\n• Choice B: [TRAP: partial_calculation] $k = 6$ is one valid answer, but not the only one. The equation $k^2 = 36$ has two solutions: $k = 6$ and $k = -6$. Forgetting the $\\pm$ when taking a square root is the classic partial-calculation trap.\n• Choice D: [TRAP: arithmetic_slip] $k = \\pm 3$ comes from solving $k^2 = 9$ instead of $k^2 = 36$. The student likely computed $4ac = 4(9) = 36$ but then accidentally used $\\sqrt{9} = 3$ instead of $\\sqrt{36} = 6$.\n\n**Key concept:** To find parameter values that give exactly one solution, set $\\Delta = b^2 - 4ac = 0$ and solve. Always remember that $k^2 = n$ gives $k = \\pm\\sqrt{n}$ — don't forget both solutions.\n\n**Calculator tip:** In Desmos, graph $y = x^2 + kx + 9$ with a slider for $k$. At $k = 6$ and $k = -6$, the parabola will just touch the x-axis at exactly one point.",
      skills: ['discriminant-analysis']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "The equation 2x² - 5x + 1 = 0 has:",
      choices: [
        { id: "A", text: "Two distinct real roots" },
        { id: "B", text: "One repeated real root" },
        { id: "C", text: "No real roots" },
        { id: "D", text: "Cannot be determined" }
      ],
      correctAnswer: "A",
      hint: "Calculate the discriminant and check its sign. Positive means two solutions, zero means one, negative means none.",
      explanation: "**Choice A is correct.** We determine the nature of the roots by computing the discriminant.\n\n**Step 1:** Identify coefficients from $2x^2 - 5x + 1 = 0$: $a = 2$, $b = -5$, $c = 1$.\n\n**Step 2:** Compute the discriminant:\n$$\\Delta = b^2 - 4ac = (-5)^2 - 4(2)(1) = 25 - 8 = 17$$\n\n**Step 3:** Since $\\Delta = 17 > 0$, the equation has two distinct real roots.\n\n**Verification:** Using the quadratic formula: $x = \\frac{5 \\pm \\sqrt{17}}{4}$. Since $\\sqrt{17} \\approx 4.12$, the roots are approximately $x \\approx \\frac{5 + 4.12}{4} \\approx 2.28$ and $x \\approx \\frac{5 - 4.12}{4} \\approx 0.22$. Two distinct real values. Confirmed.\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: reversed_operation] One repeated root requires $\\Delta = 0$ exactly. Here $\\Delta = 17 \\neq 0$. Students sometimes confuse \"the equation has solutions\" with \"it has one repeated root.\"\n• Choice C: [TRAP: sign_error] No real roots requires $\\Delta < 0$. Here $\\Delta = 17 > 0$. A student might miscalculate $(-5)^2$ as $-25$ (forgetting that squaring a negative gives a positive), yielding $-25 - 8 = -33 < 0$. Always remember: $(-5)^2 = 25$, not $-25$.\n• Choice D: [TRAP: reversed_operation] The nature of roots can always be determined for a quadratic — the discriminant provides complete information. There is never a case where it \"cannot be determined\" when you have the coefficients.\n\n**Key concept:** The discriminant $\\Delta = b^2 - 4ac$ is your definitive test:\n$$\\Delta = 17 > 0 \\Rightarrow \\text{two distinct real roots}$$\nWhen $\\Delta$ is a positive non-perfect-square (like $17$), the roots are irrational.\n\n**Calculator tip:** In Desmos, graph $y = 2x^2 - 5x + 1$ and observe two x-intercepts near $x \\approx 0.22$ and $x \\approx 2.28$.",
      skills: ['discriminant-analysis']
    }
  ],

  // Section: Deriving Standard Form
  "Deriving Standard Form": [
    {
      id: 1,
      difficulty: "easy",
      question: "Convert f(x) = (x + 3)² - 4 to standard form.",
      choices: [
        { id: "A", text: "f(x) = x² + 6x + 5" },
        { id: "B", text: "f(x) = x² + 6x + 9" },
        { id: "C", text: "f(x) = x² - 6x + 5" },
        { id: "D", text: "f(x) = x² + 3x - 4" }
      ],
      correctAnswer: "A",
      hint: "Expand (x + 3)² using FOIL or the pattern (a + b)² = a² + 2ab + b², then combine with the -4.",
      explanation: "**Choice A is correct.** Expand the vertex form step by step to reach standard form.\n\n**Step 1:** Expand $(x + 3)^2$ using the identity $(a + b)^2 = a^2 + 2ab + b^2$:\n$$(x + 3)^2 = x^2 + 2(x)(3) + 3^2 = x^2 + 6x + 9$$\n\n**Step 2:** Subtract $4$:\n$$(x + 3)^2 - 4 = x^2 + 6x + 9 - 4 = x^2 + 6x + 5$$\n\n**Verification:** Factor $x^2 + 6x + 5 = (x + 1)(x + 5)$. Roots at $x = -1$ and $x = -5$. Vertex at $x = \\frac{-1 + (-5)}{2} = -3$, and $f(-3) = (-3+3)^2 - 4 = 0 - 4 = -4$. The vertex form $(x + 3)^2 - 4$ has vertex $(-3, -4)$. Confirmed.\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: partial_calculation] $x^2 + 6x + 9$ is just the expansion of $(x + 3)^2$ without the $-4$. The student stopped after expanding the square and forgot to subtract $4$. Always complete all operations.\n• Choice C: [TRAP: sign_error] $x^2 - 6x + 5$ has $-6x$ instead of $+6x$. This would come from expanding $(x - 3)^2 - 4$ instead of $(x + 3)^2 - 4$. The student flipped the sign of the middle term when expanding.\n• Choice D: [TRAP: reversed_operation] $x^2 + 3x - 4$ appears to come from incorrectly distributing — treating the $+3$ and $-4$ as separate coefficients rather than properly expanding the squared binomial.\n\n**Key concept:** To convert vertex form to standard form, expand $(x \\pm h)^2$ using the perfect square pattern, then combine like terms: $(x + h)^2 + k = x^2 + 2hx + h^2 + k$.\n\n**Calculator tip:** In Desmos, graph both $y = (x+3)^2 - 4$ and $y = x^2 + 6x + 5$ — they should produce identical parabolas, confirming the conversion.",
      skills: ['converting-quadratic-forms', 'vertex-form']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "If a parabola has vertex (2, -1) and passes through (0, 3), what is the value of 'a' in f(x) = a(x - 2)² - 1?",
      choices: [
        { id: "A", text: "1" },
        { id: "B", text: "−1" },
        { id: "C", text: "2" },
        { id: "D", text: "−2" }
      ],
      correctAnswer: "A",
      hint: "Substitute the point (0, 3) into the vertex form equation. This gives you an equation with only 'a' as the unknown.",
      explanation: "**Choice A is correct.** Substitute the known point into the vertex form and solve for $a$.\n\n**Step 1:** The vertex form with vertex $(2, -1)$ is $f(x) = a(x - 2)^2 - 1$.\n\n**Step 2:** Substitute the point $(0, 3)$ — meaning $f(0) = 3$:\n$$3 = a(0 - 2)^2 - 1$$\n$$3 = a(4) - 1$$\n$$4 = 4a$$\n$$a = 1$$\n\n**Verification:** With $a = 1$: $f(x) = (x - 2)^2 - 1$. Check: $f(0) = (0-2)^2 - 1 = 4 - 1 = 3$. Also check vertex: $f(2) = (2-2)^2 - 1 = -1$. Both confirmed.\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: sign_error] $a = -1$ would give $f(0) = -1(4) - 1 = -5 \\neq 3$. This error might arise from incorrectly computing $(0 - 2)^2 = -4$ instead of $+4$, then solving $3 = -4a - 1 \\Rightarrow a = -1$.\n• Choice C: [TRAP: arithmetic_slip] $a = 2$ would give $f(0) = 2(4) - 1 = 7 \\neq 3$. The student may have solved $3 = 4a - 1$ as $3 = 2a$, skipping the step of adding $1$ to both sides first.\n• Choice D: [TRAP: sign_error] $a = -2$ would give $f(0) = -2(4) - 1 = -9 \\neq 3$. This combines the sign error from Choice B with the arithmetic error from Choice C.\n\n**Key concept:** To find $a$ in vertex form $f(x) = a(x - h)^2 + k$, substitute any known point $(x_0, y_0)$ other than the vertex and solve $y_0 = a(x_0 - h)^2 + k$ for $a$.\n\n**Calculator tip:** In Desmos, graph $y = a(x-2)^2 - 1$ with a slider for $a$. Adjust until the curve passes through $(0, 3)$ to confirm $a = 1$.",
      skills: ['vertex-form']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "A parabola has x-intercepts at 1 and 5 and passes through (0, -10). What is the equation?",
      choices: [
        { id: "A", text: "y = 2(x - 1)(x - 5)" },
        { id: "B", text: "y = -2(x - 1)(x - 5)" },
        { id: "C", text: "y = (x - 1)(x - 5)" },
        { id: "D", text: "y = -10(x - 1)(x - 5)" }
      ],
      correctAnswer: "B",
      hint: "Start with factored form y = a(x - 1)(x - 5) using the x-intercepts. Then substitute the point (0, -10) to find 'a'.",
      explanation: "**Choice B is correct.** Use the intercept (factored) form and a known point to determine the leading coefficient.\n\n**Step 1:** Write the factored form using the x-intercepts $x = 1$ and $x = 5$:\n$$y = a(x - 1)(x - 5)$$\n\n**Step 2:** Substitute the point $(0, -10)$ to find $a$:\n$$-10 = a(0 - 1)(0 - 5)$$\n$$-10 = a(-1)(-5)$$\n$$-10 = 5a$$\n$$a = -2$$\n\n**Step 3:** The equation is $y = -2(x - 1)(x - 5)$.\n\n**Verification:** Check $(0, -10)$: $y = -2(-1)(-5) = -2(5) = -10$. Check $x = 1$: $y = -2(0)(-4) = 0$. Check $x = 5$: $y = -2(4)(0) = 0$. All points confirmed.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: sign_error] $a = 2$ (positive) gives $y = 2(0-1)(0-5) = 2(5) = 10$ at $x = 0$, not $-10$. The student computed $(-1)(-5) = 5$ correctly but then divided $-10 \\div 5 = -2$ and dropped the negative sign.\n• Choice C: [TRAP: partial_calculation] $a = 1$ gives $y = (-1)(-5) = 5$ at $x = 0$, not $-10$. The student assumed $a = 1$ without checking the additional point. The default $a = 1$ only works when the given point happens to satisfy it.\n• Choice D: [TRAP: arithmetic_slip] $a = -10$ gives $y = -10(-1)(-5) = -50$ at $x = 0$, not $-10$. The student may have set $a = -10$ by confusing the y-value of the given point with the value of $a$.\n\n**Key concept:** Given x-intercepts $r_1$ and $r_2$, write $y = a(x - r_1)(x - r_2)$. Then use one additional point to solve for $a$. The factored form is the most efficient starting point when roots are given.\n\n**Calculator tip:** In Desmos, graph $y = -2(x-1)(x-5)$ and verify it passes through $(1, 0)$, $(5, 0)$, and $(0, -10)$.",
      skills: ['roots-from-factors', 'converting-quadratic-forms']
    },
    {
      id: 4,
      difficulty: "medium",
      question: "What is the standard form of a quadratic with roots 2 and -3 that passes through (1, -8)?",
      choices: [
        { id: "A", text: "y = 2x² + 2x - 12" },
        { id: "B", text: "y = x² + x - 6" },
        { id: "C", text: "y = 2x² - 2x - 12" },
        { id: "D", text: "y = -2x² - 2x + 12" }
      ],
      correctAnswer: "A",
      hint: "Write in factored form using the roots: y = a(x - 2)(x + 3). Find 'a' using the given point, then expand to standard form.",
      explanation: "**Choice A is correct.** Build from factored form, find the leading coefficient, then expand to standard form.\n\n**Step 1:** Write the factored form using roots $x = 2$ and $x = -3$:\n$$y = a(x - 2)(x + 3)$$\n\n**Step 2:** Substitute the point $(1, -8)$ to find $a$:\n$$-8 = a(1 - 2)(1 + 3)$$\n$$-8 = a(-1)(4)$$\n$$-8 = -4a$$\n$$a = 2$$\n\n**Step 3:** Expand to standard form:\n$$y = 2(x - 2)(x + 3) = 2(x^2 + 3x - 2x - 6) = 2(x^2 + x - 6) = 2x^2 + 2x - 12$$\n\n**Verification:** Check roots: $2(2)^2 + 2(2) - 12 = 8 + 4 - 12 = 0$ and $2(-3)^2 + 2(-3) - 12 = 18 - 6 - 12 = 0$. Check point: $2(1)^2 + 2(1) - 12 = 2 + 2 - 12 = -8$. All confirmed.\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: partial_calculation] $y = x^2 + x - 6$ is the expansion of $(x - 2)(x + 3)$ with $a = 1$. The student forgot to solve for $a$ using the given point. Check: at $(1, -8)$: $1 + 1 - 6 = -4 \\neq -8$. The factor of $2$ is missing.\n• Choice C: [TRAP: sign_error] $y = 2x^2 - 2x - 12$ has the wrong sign on the middle term ($-2x$ instead of $+2x$). This would come from incorrectly expanding $(x - 2)(x + 3)$ as $x^2 - x - 6$ (sign error in the cross terms: $3x - 2x = x$, not $-x$).\n• Choice D: [TRAP: sign_error] $y = -2x^2 - 2x + 12$ has $a = -2$ instead of $a = +2$. The student may have solved $-8 = -4a$ as $a = -2$ by incorrectly dividing $-8 \\div -4 = -2$ instead of $+2$.\n\n**Key concept:** The three-step process for building a quadratic from roots and a point: (1) write factored form, (2) solve for $a$ using the extra point, (3) expand. Always verify with all given information.\n\n**Calculator tip:** In Desmos, graph $y = 2(x-2)(x+3)$ and confirm it passes through $(2, 0)$, $(-3, 0)$, and $(1, -8)$.",
      skills: ['roots-from-factors', 'converting-quadratic-forms']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "Convert f(x) = -2(x - 1)² + 8 to standard form.",
      choices: [
        { id: "A", text: "f(x) = -2x² + 4x + 6" },
        { id: "B", text: "f(x) = -2x² - 4x + 6" },
        { id: "C", text: "f(x) = -2x² + 4x - 6" },
        { id: "D", text: "f(x) = 2x² - 4x + 6" }
      ],
      correctAnswer: "A",
      hint: "First expand (x - 1)², then distribute the -2 to all terms inside the parentheses, and finally add the 8.",
      explanation: "**Choice A is correct.** Carefully expand the vertex form, distributing the leading coefficient to every term.\n\n**Step 1:** Expand $(x - 1)^2$:\n$$(x - 1)^2 = x^2 - 2x + 1$$\n\n**Step 2:** Distribute $-2$ to all terms:\n$$-2(x^2 - 2x + 1) = -2x^2 + 4x - 2$$\n\n**Step 3:** Add the constant $+8$:\n$$-2x^2 + 4x - 2 + 8 = -2x^2 + 4x + 6$$\n\n**Verification:** Check the vertex: the vertex form $-2(x-1)^2 + 8$ has vertex $(1, 8)$. In standard form, $x = -\\frac{b}{2a} = -\\frac{4}{2(-2)} = -\\frac{4}{-4} = 1$ and $f(1) = -2(1) + 4(1) + 6 = -2 + 4 + 6 = 8$. Vertex $(1, 8)$ confirmed.\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: sign_error] $-2x^2 - 4x + 6$ has $-4x$ instead of $+4x$. This comes from distributing $-2$ to $-2x$ and getting $-2 \\times (-2x) = -4x$ instead of $+4x$. The multiplication of two negatives must give a positive: $(-2)(-2x) = +4x$.\n• Choice C: [TRAP: arithmetic_slip] $-2x^2 + 4x - 6$ has $-6$ instead of $+6$. The student correctly expanded $-2(x^2 - 2x + 1) = -2x^2 + 4x - 2$ but then computed $-2 + 8 = -6$ instead of $+6$. Check: $-2 + 8 = 6$, not $-6$.\n• Choice D: [TRAP: sign_error] $2x^2 - 4x + 6$ has the wrong sign on $a$: $+2$ instead of $-2$. The student dropped the negative from the leading coefficient entirely, essentially computing $+2(x-1)^2 + 8$ instead of $-2(x-1)^2 + 8$. This would flip the parabola from opening downward to opening upward.\n\n**Key concept:** When converting vertex form $a(x - h)^2 + k$ to standard form, the most common errors are sign mistakes during distribution. Always distribute $a$ to every term inside the expanded square, then combine with $k$.\n\n**Calculator tip:** In Desmos, graph both $y = -2(x-1)^2 + 8$ and $y = -2x^2 + 4x + 6$ — they should overlap perfectly, confirming the conversion is correct.",
      skills: ['converting-quadratic-forms', 'vertex-form']
    }
  ]
};
