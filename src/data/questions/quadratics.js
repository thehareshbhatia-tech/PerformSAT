// Practice questions for Quadratics module
// Questions are organized by SECTION (question type)

export const quadraticsQuestions = {
  // Section: Overview
  "Overview": [
    {
      id: 1,
      difficulty: "easy",
      question: "Each of the following defines a function $f$ of the variable $x$. For which definition is $f$ a quadratic function?",
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
      question: "The quadratic function $g$ is defined by $g(x) = 9 - 5x + 6x^2$. When $g(x)$ is written in the form $ax^2 + bx + c$, what is the value of $b$?",
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
      question: "In the $xy$-plane, the graph of the quadratic function $f$ is shown. Which of the following statements about $f$ must be true?",
      diagram: { type: "quadraticVertex", params: { vertex: [3, 6], a: -1, showVertex: true } },
      choices: [
        // distractor: describes an upward-opening graph
        { id: "A", text: "The coefficient of $x^2$ in $f(x)$ is positive, and $f$ has a minimum value." },
        // distractor: positive a cannot give a maximum
        { id: "B", text: "The coefficient of $x^2$ in $f(x)$ is positive, and $f$ has a maximum value." },
        // distractor: right sign, wrong extreme
        { id: "C", text: "The coefficient of $x^2$ in $f(x)$ is negative, and $f$ has a minimum value." },
        { id: "D", text: "The coefficient of $x^2$ in $f(x)$ is negative, and $f$ has a maximum value." }
      ],
      correctAnswer: "D",
      hint: "The direction the arms point decides the sign of the leading coefficient, and that sign decides which extreme value exists.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~15s):** The parabola opens downward, so the leading coefficient is negative and the vertex is the highest point.\n\n**The Full Solution:**\nStep 1: The graph is a parabola whose arms point downward, away from the vertex at the top.\nStep 2: For $f(x) = ax^2 + bx + c$, the parabola opens downward exactly when $a < 0$, so the coefficient of $x^2$ is negative.\nStep 3: When the arms fall away from the vertex, no output is larger than the vertex's output, so $f$ has a maximum value and no minimum. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: describes an upward-opening parabola, which is the graph you would see if $a$ were positive.\n* Choice B: pairs a positive leading coefficient with a maximum, but a positive coefficient forces a minimum.\n* Choice C: reads the sign of the coefficient correctly but then names the wrong extreme value.\n\n**Test Day Takeaway:** Sign of $a$ and type of extreme value are locked together: $a > 0$ opens upward with a minimum, $a < 0$ opens downward with a maximum.",
      skills: ["identify-quadratic", "parabola-direction"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "A parabola in the $xy$-plane is the graph of $y = px^2 + qx + r$, where $p$, $q$, and $r$ are constants with $p < 0$. Which of the following must be true about this parabola?",
      choices: [
        { id: "A", text: "It opens downward, and its vertex is its highest point." },
        // distractor: downward curves have no lowest point
        { id: "B", text: "It opens downward, and its vertex is its lowest point." },
        // distractor: impossible pairing
        { id: "C", text: "It opens upward, and its vertex is its highest point." },
        // distractor: describes the case p > 0
        { id: "D", text: "It opens upward, and its vertex is its lowest point." }
      ],
      correctAnswer: "A",
      hint: "Only the sign of the squared term's coefficient matters here; the other two constants slide the curve but never flip it over.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** A negative leading coefficient turns the arms downward, so the vertex sits above every other point.\n\n**The Full Solution:**\nStep 1: Completing the square rewrites the equation as $y = p(x - h)^2 + k$ with the same leading constant $p$, since that step never changes it.\nStep 2: The squared quantity $(x - h)^2$ is never negative, so with $p < 0$ the product $p(x - h)^2$ is never positive, and therefore $y \\leq k$ for every $x$.\nStep 3: Equality holds only at $x = h$, so the vertex $(h, k)$ is the highest point on the curve and both arms fall away from it. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: reads the direction correctly but then calls the vertex the lowest point; a downward-opening curve has no lowest point.\n* Choice C: pairs an upward opening with a highest point, a combination no parabola can have.\n* Choice D: describes what happens when $p > 0$, the opposite of the stated condition.\n\n**Test Day Takeaway:** The constants $q$ and $r$ slide a parabola around the plane, but only the sign of the squared term's coefficient decides maximum versus minimum.",
      skills: ["parabola-direction"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "The function $f$ is defined by $f(x) = (x + 4)^3 - x^3$, where $x$ is a real number. The function can be written in the form $f(x) = ax^2 + bx + c$, where $a$, $b$, and $c$ are constants. What is the value of $a + b + c$?",
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
      hint: "Expand $(x + 4)^3$ completely before you subtract — the exponent does not distribute over a sum.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~30s):** $a + b + c$ is the value of the polynomial at $x = 1$, and $f(1) = 5^3 - 1^3 = 124$.\n\n**The Full Solution:**\nStep 1: Expand the cube term by term: $(x + 4)^3 = x^3 + 3(4)x^2 + 3(16)x + 64 = x^3 + 12x^2 + 48x + 64$.\nStep 2: Subtract $x^3$. The two cubic terms cancel, leaving $f(x) = 12x^2 + 48x + 64$, so $a = 12$, $b = 48$, and $c = 64$.\nStep 3: Add the three coefficients: $12 + 48 + 64 = 124$. Check against the original definition at $x = 1$: $(1 + 4)^3 - 1^3 = 125 - 1 = 124$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($64$): subtracts inside the cube, reading the expression as $(x + 4 - x)^3 = 4^3$.\n* Choice B ($84$): expands the cube as $x^3 + 4x^2 + 16x + 64$, leaving out the binomial coefficients of $3$, and then adds $4 + 16 + 64$.\n* Choice D ($125$): never subtracts $x^3$, so all four coefficients of the cube get added: $1 + 12 + 48 + 64$.\n\n**Test Day Takeaway:** The sum of a polynomial's coefficients is its value at $x = 1$, so substitute $1$ into the ORIGINAL expression instead of expanding.",
      skills: ["identify-quadratic"]
    }
  ],

  // Section: Roots
  "Roots": [
    {
      id: 1,
      difficulty: "easy",
      question: "In the equation $x^2 + 4x - 21 = 0$, what are all values of $x$ that satisfy the equation?",
      choices: [
        { id: "A", text: "$x = -7$ and $x = 3$" },
        // distractor: reverses both signs
        { id: "B", text: "$x = -3$ and $x = 7$" },
        // distractor: uses the constant term as a solution
        { id: "C", text: "$x = -21$ and $x = 1$" },
        // distractor: product would be positive
        { id: "D", text: "$x = 3$ and $x = 7$" }
      ],
      correctAnswer: "A",
      hint: "Look for two numbers whose product is $-21$ and whose sum is $4$.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~20s):** $7$ and $-3$ multiply to $-21$ and add to $4$, so $(x + 7)(x - 3) = 0$ and $x = -7$ or $x = 3$.\n\n**The Full Solution:**\nStep 1: To factor $x^2 + 4x - 21$, find two numbers whose product is $-21$ and whose sum is $4$. Those numbers are $7$ and $-3$.\nStep 2: So the equation becomes $(x + 7)(x - 3) = 0$.\nStep 3: A product is zero only when a factor is zero, so $x + 7 = 0$ or $x - 3 = 0$, giving $x = -7$ and $x = 3$. Check: $(-7)^2 + 4(-7) - 21 = 49 - 28 - 21 = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: reverses both signs, which comes from factoring as $(x + 3)(x - 7)$ and getting a middle term of $-4x$.\n* Choice C: uses the constant term and $1$ as the solutions, since $-21 \\cdot 1 = -21$, but those numbers sum to $-20$, not $4$.\n* Choice D: takes both solutions positive, but then their product would be $+21$ rather than $-21$.\n\n**Test Day Takeaway:** A negative constant term forces the two solutions to have OPPOSITE signs — that single check eliminates two choices instantly.",
      skills: ["finding-roots-factoring"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "One solution to the equation $x^2 - 9x + k = 0$ is $x = 2$, where $k$ is a constant. What is the value of $k$?",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~20s):** $4 - 18 + k = 0$ gives $k = 14$.\n\n**The Full Solution:**\nStep 1: Because $x = 2$ is a solution, substituting $2$ must make the equation true: $2^2 - 9(2) + k = 0$.\nStep 2: Simplify the numbers: $4 - 18 + k = 0$, so $-14 + k = 0$.\nStep 3: Add $14$ to both sides: $k = 14$. Check by factoring: $x^2 - 9x + 14 = (x - 2)(x - 7)$, whose solutions are $2$ and $7$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-14$): solves $-14 + k = 0$ as $k = -14$, moving the term across without changing its sign.\n* Choice B ($7$): subtracts the solution from the middle coefficient, computing $9 - 2$.\n* Choice D ($18$): uses only the product $9(2) = 18$ and never accounts for the $x^2$ term.\n\n**Test Day Takeaway:** Substituting a known solution turns a quadratic with an unknown coefficient into a one-step linear equation.",
      skills: ["roots-from-factors", "finding-roots-factoring"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "In the $xy$-plane, the graph of $y = x^2 - 36$ crosses the $x$-axis at two points. What are the $x$-coordinates of those two points?",
      choices: [
        // distractor: no square root taken
        { id: "A", text: "$-36$ and $36$" },
        // distractor: divides by 2 instead of taking a root
        { id: "B", text: "$-18$ and $18$" },
        { id: "C", text: "$-6$ and $6$" },
        // distractor: reads a linear term that is not there
        { id: "D", text: "$0$ and $36$" }
      ],
      correctAnswer: "C",
      hint: "A difference of two squares factors into a sum times a difference.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** $x^2 - 36 = (x - 6)(x + 6)$, so the graph crosses at $x = 6$ and $x = -6$.\n\n**The Full Solution:**\nStep 1: A graph crosses the $x$-axis where $y = 0$, so solve $x^2 - 36 = 0$.\nStep 2: Both terms are perfect squares, so factor as a difference of squares: $x^2 - 36 = (x - 6)(x + 6)$.\nStep 3: Setting each factor to zero gives $x = 6$ and $x = -6$. Check: $6^2 - 36 = 0$ and $(-6)^2 - 36 = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: treats $x^2 = 36$ as $x = \\pm 36$, taking no square root at all.\n* Choice B: divides $36$ by $2$ instead of taking its square root.\n* Choice D: reads the equation as $x^2 - 36x = 0$ and factors out an $x$.\n\n**Test Day Takeaway:** $a^2 - b^2$ always factors as $(a - b)(a + b)$; solving $x^2 = c$ takes a square root, never a division by $2$.",
      skills: ["difference-of-squares", "finding-roots-factoring"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "In the $xy$-plane, the graph of the quadratic function $f$ is shown, and its two $x$-intercepts are marked. Which equation defines $f$?",
      diagram: { type: "parabola", params: { vertex: { h: 2, k: -16 }, a: 1, xRange: [-6, 10], yRange: [-20, 12], xTickInterval: 2, yTickInterval: 4, gridInterval: 2, showVertex: false, highlightPoints: [[-2, 0], [6, 0]] } },
      choices: [
        { id: "A", text: "$y = x^2 - 4x - 12$" },
        // distractor: swaps the signs of the intercepts
        { id: "B", text: "$y = x^2 + 4x - 12$" },
        // distractor: flips the constant's sign, leaving no real x-intercepts
        { id: "C", text: "$y = x^2 - 4x + 12$" },
        // distractor: treats both intercepts as negative
        { id: "D", text: "$y = x^2 + 8x + 12$" }
      ],
      correctAnswer: "A",
      hint: "Each $x$-intercept at $x = r$ contributes the factor $(x - r)$.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~25s):** Intercepts at $-2$ and $6$ give $(x + 2)(x - 6) = x^2 - 4x - 12$.\n\n**The Full Solution:**\nStep 1: The marked intercepts are $(-2, 0)$ and $(6, 0)$, so $x = -2$ and $x = 6$ make $f(x) = 0$.\nStep 2: An intercept at $x = r$ comes from the factor $(x - r)$, so the factors are $(x + 2)$ and $(x - 6)$, and the graph's shape shows a leading coefficient of $1$.\nStep 3: Expand: $(x + 2)(x - 6) = x^2 - 6x + 2x - 12 = x^2 - 4x - 12$. Check the $y$-intercept: the equation gives $-12$, and the graph passes below the origin. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: uses $(x - 2)(x + 6)$, swapping which intercept is negative.\n* Choice C: flips the sign of the constant term; $x^2 - 4x + 12$ has a negative discriminant, so its graph has no $x$-intercepts at all.\n* Choice D: uses $(x + 2)(x + 6)$, treating both intercepts as negative numbers.\n\n**Test Day Takeaway:** Read intercepts off the graph, flip each sign to build its factor, then expand — and confirm with the $y$-intercept.",
      skills: ["roots-from-factors"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "In the equation $ax^2 = bx$, $a$ and $b$ are positive constants. Which of the following lists all values of $x$ that satisfy this equation?",
      choices: [
        // distractor: divides by x and loses a solution
        { id: "A", text: "$x = \\frac{b}{a}$ only" },
        { id: "B", text: "$x = 0$ and $x = \\frac{b}{a}$" },
        // distractor: inverts the ratio
        { id: "C", text: "$x = 0$ and $x = \\frac{a}{b}$" },
        // distractor: subtracts instead of dividing
        { id: "D", text: "$x = 0$ and $x = b - a$" }
      ],
      correctAnswer: "B",
      hint: "Move everything to one side and factor; dividing both sides by the variable can throw a solution away.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~30s):** $ax^2 - bx = x(ax - b) = 0$, so $x = 0$ or $x = \\frac{b}{a}$.\n\n**The Full Solution:**\nStep 1: Bring every term to one side: $ax^2 - bx = 0$.\nStep 2: Factor out the common factor $x$: $x(ax - b) = 0$.\nStep 3: A product is zero when a factor is zero, so $x = 0$ or $ax - b = 0$, which gives $x = \\frac{b}{a}$ (defined because $a$ is positive). Check with $a = 2$ and $b = 6$: $2x^2 = 6x$ holds at $x = 0$ and at $x = 3 = \\frac{6}{2}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: divides both sides by $x$ at the start, which is only legal when $x \\neq 0$ and silently discards the solution $x = 0$.\n* Choice C: inverts the ratio, solving $bx = a$ instead of $ax = b$.\n* Choice D: subtracts the constants instead of dividing, as if $ax = b$ were $x = b - a$.\n\n**Test Day Takeaway:** Never divide an equation by the variable. Factor instead, so the solution $x = 0$ survives.",
      skills: ["finding-roots-factoring"]
    }
  ],

  // Section: Vertex
  "Vertex": [
    {
      id: 1,
      difficulty: "easy",
      question: "In the $xy$-plane, the graph of $f(x) = x^2 - 10x + 21$ is shown, with its two $x$-intercepts marked. What is the $x$-coordinate of the vertex of this graph?",
      diagram: { type: "quadraticVertex", params: { vertex: [5, -4], a: 1, showVertex: false, showPoints: [[3, 0], [7, 0]] } },
      choices: [
        // distractor: reports b
        { id: "A", text: "$-10$" },
        // distractor: drops the leading negative sign
        { id: "B", text: "$-5$" },
        { id: "C", text: "$5$" },
        // distractor: reports the constant term
        { id: "D", text: "$21$" }
      ],
      correctAnswer: "C",
      hint: "The vertex sits halfway between the two $x$-intercepts, and $x = -\\frac{b}{2a}$ says the same thing.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** $x = -\\frac{b}{2a} = -\\frac{-10}{2(1)} = 5$.\n\n**The Full Solution:**\nStep 1: Identify the coefficients: $a = 1$, $b = -10$, and $c = 21$.\nStep 2: The vertex of $y = ax^2 + bx + c$ has $x = -\\frac{b}{2a}$, so $x = -\\frac{-10}{2} = 5$.\nStep 3: Confirm with the marked intercepts. Factoring gives $(x - 3)(x - 7)$, so the intercepts are $3$ and $7$, whose midpoint is $\\frac{3 + 7}{2} = 5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-10$): reports $b$ itself instead of $-\\frac{b}{2a}$.\n* Choice B ($-5$): computes $\\frac{b}{2a}$ and forgets the leading negative sign in the formula.\n* Choice D ($21$): reports the constant term $c$, which is the $y$-intercept rather than anything about the vertex.\n\n**Test Day Takeaway:** Two routes give the same vertex $x$-value: $-\\frac{b}{2a}$, or the midpoint of the two $x$-intercepts when they exist.",
      skills: ["vertex-formula"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "The function $h$ is defined by $h(x) = (x + 5)^2 - 8$. What is the vertex of the graph of $y = h(x)$ in the $xy$-plane?",
      choices: [
        { id: "A", text: "$(-5, -8)$" },
        // distractor: reads h with the wrong sign
        { id: "B", text: "$(5, -8)$" },
        // distractor: flips the sign of k
        { id: "C", text: "$(-5, 8)$" },
        // distractor: flips both signs
        { id: "D", text: "$(5, 8)$" }
      ],
      correctAnswer: "A",
      hint: "Vertex form reads $a(x - h)^2 + k$, so watch the minus sign already built into the formula.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** $(x + 5)^2$ is $(x - (-5))^2$, so $h = -5$ and $k = -8$.\n\n**The Full Solution:**\nStep 1: Vertex form is $y = a(x - h)^2 + k$, and the vertex is the point $(h, k)$.\nStep 2: Match the given rule to that form: $(x + 5)^2 = (x - (-5))^2$, so $h = -5$, and the constant added outside is $k = -8$.\nStep 3: The vertex is $(-5, -8)$. Check: $h(-5) = 0 - 8 = -8$, and every other input makes the square positive, so $-8$ is the smallest output. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: reads $h$ straight off the parentheses as $+5$, ignoring the subtraction built into the form.\n* Choice C: flips the sign of $k$, placing the vertex above the $x$-axis.\n* Choice D: flips both signs at once.\n\n**Test Day Takeaway:** The $x$-coordinate of the vertex is the value that makes the squared quantity zero — solve $x + 5 = 0$ if the sign is ever in doubt.",
      skills: ["vertex-form"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "The height, in meters, of a drone above its launch pad $t$ seconds after takeoff is modeled by $h(t) = -2t^2 + 12t$, and the graph of this model is shown. What is the maximum height, in meters, that the drone reaches?",
      diagram: { type: "parabola", params: { vertex: { h: 3, k: 18 }, a: -2, xRange: [0, 7], yRange: [0, 20], xTickInterval: 1, yTickInterval: 4, gridInterval: 2, showVertex: false } },
      choices: [
        // distractor: reports the time, not the height
        { id: "A", text: "$3$" },
        // distractor: reports the landing time
        { id: "B", text: "$6$" },
        // distractor: reports the coefficient of t
        { id: "C", text: "$12$" },
        { id: "D", text: "$18$" }
      ],
      correctAnswer: "D",
      hint: "A negative leading coefficient means the vertex is the highest point, so find the time first and then the height.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~25s):** The vertex is at $t = -\\frac{12}{2(-2)} = 3$, and $h(3) = -18 + 36 = 18$.\n\n**The Full Solution:**\nStep 1: The leading coefficient $-2$ is negative, so the parabola opens downward and the vertex gives the maximum height.\nStep 2: The vertex occurs at $t = -\\frac{b}{2a} = -\\frac{12}{2(-2)} = 3$ seconds.\nStep 3: Evaluate the model there: $h(3) = -2(3)^2 + 12(3) = -18 + 36 = 18$ meters. Check the symmetry: $h(0) = 0$ and $h(6) = -72 + 72 = 0$, and $3$ is the midpoint of $0$ and $6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): reports the TIME at which the maximum occurs rather than the height.\n* Choice B ($6$): reports the time at which the drone returns to the launch pad's height.\n* Choice C ($12$): reports the coefficient of $t$ instead of evaluating the model at the vertex.\n\n**Test Day Takeaway:** A maximum-value question has two steps: find the input at the vertex, then substitute it back to get the output the question actually asks for.",
      skills: ["parabola-direction", "vertex-formula"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "The function $f$ is defined by $f(x) = x^2 - 12x + 40$. What is the minimum value of $f(x)$ for all real values of $x$?",
      choices: [
        // distractor: drops the negative in the vertex formula
        { id: "A", text: "$-6$" },
        { id: "B", text: "$4$" },
        // distractor: reports the input, not the output
        { id: "C", text: "$6$" },
        // distractor: reports the constant term
        { id: "D", text: "$40$" }
      ],
      correctAnswer: "B",
      hint: "Find the input at the vertex first, then evaluate the function there.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** The vertex is at $x = 6$, and $f(6) = 36 - 72 + 40 = 4$.\n\n**The Full Solution:**\nStep 1: The leading coefficient is $1$, which is positive, so the parabola opens upward and the vertex gives the minimum value.\nStep 2: The vertex occurs at $x = -\\frac{b}{2a} = -\\frac{-12}{2} = 6$.\nStep 3: Evaluate: $f(6) = 6^2 - 12(6) + 40 = 36 - 72 + 40 = 4$. Check by completing the square: $f(x) = (x - 6)^2 + 4$, whose smallest value is $4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): computes $\\frac{b}{2a}$ without the leading negative sign and reports that instead of an output.\n* Choice C ($6$): reports the input at which the minimum occurs rather than the minimum value itself.\n* Choice D ($40$): reports $f(0)$, the constant term, which is a value of the function but not the smallest one.\n\n**Test Day Takeaway:** Minimum VALUE means a $y$-value. The vertex formula gives you the $x$-value, and you still have to substitute.",
      skills: ["vertex-formula"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "In the $xy$-plane, the graph of $y = 3x^2 + kx + 7$ has an axis of symmetry given by the line $x = -4$, where $k$ is a constant. What is the value of $k$?",
      choices: [
        // distractor: drops the leading minus sign
        { id: "A", text: "$-24$" },
        // distractor: reports the axis value
        { id: "B", text: "$-4$" },
        // distractor: uses 2 instead of 2a
        { id: "C", text: "$8$" },
        { id: "D", text: "$24$" }
      ],
      correctAnswer: "D",
      hint: "Set the axis-of-symmetry formula equal to $-4$ and solve for the unknown coefficient.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~30s):** $-\\frac{k}{2(3)} = -4$ gives $k = 24$.\n\n**The Full Solution:**\nStep 1: For $y = ax^2 + bx + c$, the axis of symmetry is the vertical line $x = -\\frac{b}{2a}$. Here $a = 3$ and $b = k$.\nStep 2: Set the formula equal to the given line: $-\\frac{k}{6} = -4$.\nStep 3: Multiply both sides by $-6$: $k = 24$. Check: with $k = 24$ the vertex is at $x = -\\frac{24}{6} = -4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-24$): drops the leading minus sign and solves $\\frac{k}{6} = -4$.\n* Choice B ($-4$): reports the axis of symmetry itself as the value of $k$.\n* Choice C ($8$): uses $-\\frac{k}{2} = -4$, forgetting to multiply the $2$ by the leading coefficient $3$.\n\n**Test Day Takeaway:** In $-\\frac{b}{2a}$ the denominator is $2a$, not $2$ — a leading coefficient other than $1$ is exactly what this kind of item is testing.",
      skills: ["vertex-formula"]
    }
  ],

  // Section: Discriminant
  "Discriminant": [
    {
      id: 1,
      difficulty: "easy",
      question: "In the quadratic equation $2x^2 + 7x + 3 = 0$, the coefficients are $a = 2$, $b = 7$, and $c = 3$. What is the value of the discriminant $b^2 - 4ac$?",
      choices: [
        // distractor: reverses the subtraction
        { id: "A", text: "$-25$" },
        { id: "B", text: "$25$" },
        // distractor: omits a from 4ac
        { id: "C", text: "$37$" },
        // distractor: adds instead of subtracting
        { id: "D", text: "$73$" }
      ],
      correctAnswer: "B",
      hint: "Substitute all three coefficients, and perform the subtraction last.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** $7^2 - 4(2)(3) = 49 - 24 = 25$.\n\n**The Full Solution:**\nStep 1: Square the middle coefficient: $b^2 = 7^2 = 49$.\nStep 2: Multiply the other three factors: $4ac = 4(2)(3) = 24$.\nStep 3: Subtract in the order the formula gives: $49 - 24 = 25$. Check: $25$ is a perfect square, and indeed $2x^2 + 7x + 3 = (2x + 1)(x + 3)$ has two rational solutions. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-25$): reverses the subtraction, computing $4ac - b^2 = 24 - 49$.\n* Choice C ($37$): leaves $a$ out of the product, computing $49 - 4(3) = 49 - 12$.\n* Choice D ($73$): adds the two pieces instead of subtracting, computing $49 + 24$.\n\n**Test Day Takeaway:** The discriminant is $b^2$ MINUS $4ac$, and $4ac$ uses all three coefficients — dropping one is the most common slip.",
      skills: ["discriminant-analysis"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "For a quadratic equation of the form $ax^2 + bx + c = 0$ with real coefficients and $a \\neq 0$, the value of $b^2 - 4ac$ is $0$. How many distinct real solutions does this equation have?",
      choices: [
        // distractor: the negative-discriminant case
        { id: "A", text: "Zero" },
        { id: "B", text: "Exactly one" },
        // distractor: the positive-discriminant case
        { id: "C", text: "Exactly two" },
        // distractor: impossible for a quadratic
        { id: "D", text: "Infinitely many" }
      ],
      correctAnswer: "B",
      hint: "The discriminant sits under the square root in the quadratic formula.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** The quadratic formula becomes $x = \\frac{-b \\pm 0}{2a}$, a single value.\n\n**The Full Solution:**\nStep 1: The quadratic formula gives $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$, and the discriminant is what sits under the radical.\nStep 2: With $b^2 - 4ac = 0$, the radical contributes $\\sqrt{0} = 0$, so the plus and the minus produce the same number.\nStep 3: Both branches collapse to $x = \\frac{-b}{2a}$, so there is exactly one distinct real solution. Check the geometry: the parabola touches the $x$-axis at its vertex and does not cross. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: describes a NEGATIVE discriminant, where the radical has no real value.\n* Choice C: describes a POSITIVE discriminant, where the plus and the minus give different numbers.\n* Choice D: no quadratic equation with $a \\neq 0$ can have infinitely many solutions, since a parabola meets a line at most twice.\n\n**Test Day Takeaway:** Sign of the discriminant, not its size, sets the count: negative gives none, zero gives one, positive gives two.",
      skills: ["discriminant-analysis"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "In the $xy$-plane, the graph of $y = 2x^2 - 8x + 11$ is a parabola. How many $x$-intercepts does this parabola have?",
      choices: [
        { id: "A", text: "No $x$-intercepts" },
        // distractor: the zero-discriminant case
        { id: "B", text: "One $x$-intercept" },
        // distractor: assumes two crossings
        { id: "C", text: "Two $x$-intercepts" },
        // distractor: impossible for a parabola
        { id: "D", text: "Three $x$-intercepts" }
      ],
      correctAnswer: "A",
      hint: "Count the real solutions of $y = 0$ without solving the equation itself.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~20s):** $(-8)^2 - 4(2)(11) = 64 - 88 = -24 < 0$, so there are no real solutions and no $x$-intercepts.\n\n**The Full Solution:**\nStep 1: An $x$-intercept is a real solution of $2x^2 - 8x + 11 = 0$, so count those solutions.\nStep 2: Compute the discriminant: $b^2 - 4ac = (-8)^2 - 4(2)(11) = 64 - 88 = -24$.\nStep 3: A negative discriminant means no real solutions, so the parabola never meets the $x$-axis. Check by completing the square: $y = 2(x - 2)^2 + 3$, whose smallest value is $3$, always above zero. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: is the case of a discriminant equal to zero, where the vertex sits exactly on the axis.\n* Choice C: assumes every parabola crosses the $x$-axis twice, which is only true when the discriminant is positive.\n* Choice D: a parabola and a line meet at most twice, so three intercepts are impossible.\n\n**Test Day Takeaway:** Counting intercepts never requires solving — one discriminant computation answers the question.",
      skills: ["discriminant-analysis"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "In the $xy$-plane, the graph of $y = x^2 + 12x + n$ touches the $x$-axis at exactly one point, where $n$ is a constant. What is the value of $n$?",
      choices: [
        // distractor: reports the touch point, not n
        { id: "A", text: "$6$" },
        // distractor: reports the coefficient of x
        { id: "B", text: "$12$" },
        { id: "C", text: "$36$" },
        // distractor: never divides by 4
        { id: "D", text: "$144$" }
      ],
      correctAnswer: "C",
      hint: "A curve that meets the axis only once has a discriminant of zero.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** $12^2 - 4(1)n = 0$ gives $144 = 4n$, so $n = 36$.\n\n**The Full Solution:**\nStep 1: The graph meets the $x$-axis where $x^2 + 12x + n = 0$, and exactly one such point means exactly one real solution.\nStep 2: One real solution requires a discriminant of zero: $12^2 - 4(1)(n) = 0$, so $144 - 4n = 0$.\nStep 3: Solve: $4n = 144$, so $n = 36$. Check: $x^2 + 12x + 36 = (x + 6)^2$, which is zero only at $x = -6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): reports the $x$-coordinate where the curve meets the axis, $x = -6$, without its sign, instead of the constant $n$.\n* Choice B ($12$): reports the coefficient of $x$ rather than solving for $n$.\n* Choice D ($144$): stops at $b^2 = 144$ and never divides by the $4$ in $4ac$.\n\n**Test Day Takeaway:** One point of contact with the $x$-axis is the geometric version of a zero discriminant, and the resulting trinomial is always a perfect square.",
      skills: ["discriminant-analysis"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "The equation $3x^2 + 12x + c = 0$ has no real solutions, where $c$ is a constant. Which of the following could be the value of $c$?",
      choices: [
        // distractor: gives a positive discriminant
        { id: "A", text: "$-12$" },
        // distractor: gives two real solutions
        { id: "B", text: "$0$" },
        // distractor: boundary value gives exactly one solution
        { id: "C", text: "$12$" },
        { id: "D", text: "$15$" }
      ],
      correctAnswer: "D",
      hint: "No real solutions means the discriminant is strictly negative, so solve the resulting inequality.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~30s):** $144 - 12c < 0$ gives $c > 12$, and only $15$ clears that bar.\n\n**The Full Solution:**\nStep 1: Write the discriminant with $a = 3$, $b = 12$: $b^2 - 4ac = 12^2 - 4(3)c = 144 - 12c$.\nStep 2: No real solutions requires $144 - 12c < 0$, so $144 < 12c$ and $c > 12$.\nStep 3: Among the choices, only $15$ satisfies $c > 12$. Check: with $c = 15$ the discriminant is $144 - 180 = -36 < 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-12$): gives a discriminant of $144 + 144 = 288$, which is positive, so there are two real solutions.\n* Choice B ($0$): gives a discriminant of $144$, and the equation $3x^2 + 12x = 0$ has the real solutions $0$ and $-4$.\n* Choice C ($12$): gives a discriminant of exactly $0$, which is one real solution, not none — the boundary value is excluded.\n\n**Test Day Takeaway:** Strict wording matters: no real solutions is a strict inequality, so the value that makes the discriminant zero is the trap, not the answer.",
      skills: ["discriminant-analysis"]
    }
  ],

  // Section: Deriving Standard Form
  "Deriving Standard Form": [
    {
      id: 1,
      difficulty: "easy",
      question: "The function $g$ is defined by $g(x) = (x - 6)^2 + 5$. Which of the following is equivalent to $g(x)$?",
      choices: [
        { id: "A", text: "$x^2 - 12x + 41$" },
        // distractor: subtracts the outside constant
        { id: "B", text: "$x^2 - 12x + 31$" },
        // distractor: drops the cross term
        { id: "C", text: "$x^2 + 41$" },
        // distractor: forgets to double the cross term
        { id: "D", text: "$x^2 - 6x + 41$" }
      ],
      correctAnswer: "A",
      hint: "Write the square as a product of two identical binomials before combining the constants.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~20s):** $(x - 6)^2 = x^2 - 12x + 36$, and $36 + 5 = 41$.\n\n**The Full Solution:**\nStep 1: Expand the square: $(x - 6)^2 = (x - 6)(x - 6) = x^2 - 6x - 6x + 36 = x^2 - 12x + 36$.\nStep 2: Add the outside constant: $x^2 - 12x + 36 + 5$.\nStep 3: Combine like terms: $g(x) = x^2 - 12x + 41$. Check at $x = 6$: the original gives $0 + 5 = 5$, and $36 - 72 + 41 = 5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($x^2 - 12x + 31$): subtracts the $5$ instead of adding it, giving $36 - 5$.\n* Choice C ($x^2 + 41$): squares each term separately and loses the cross term $-12x$.\n* Choice D ($x^2 - 6x + 41$): uses $-6x$ rather than $-12x$, forgetting that the cross term is $2(-6)x$.\n\n**Test Day Takeaway:** Expanding $(x - h)^2$ always produces three terms, and the middle one is twice $-h$ times $x$.",
      skills: ["converting-quadratic-forms", "vertex-form"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "The graph of the quadratic function $f$ is shown in the $xy$-plane. The vertex of the graph is $(-3, -4)$, and the graph passes through the marked point $(-1, 4)$. If $f(x) = a(x + 3)^2 - 4$, what is the value of $a$?",
      diagram: { type: "parabola", params: { vertex: { h: -3, k: -4 }, a: 2, xRange: [-8, 2], yRange: [-6, 14], xTickInterval: 2, yTickInterval: 2, gridInterval: 2, showVertex: false, highlightPoints: [[-1, 4]] } },
      choices: [
        // distractor: never adds k back
        { id: "A", text: "$1$" },
        { id: "B", text: "$2$" },
        // distractor: forgets to square the horizontal difference
        { id: "C", text: "$4$" },
        // distractor: reports 4a instead of a
        { id: "D", text: "$8$" }
      ],
      correctAnswer: "B",
      hint: "Substitute the second point into the vertex form and square the horizontal difference before dividing.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** $4 = a(2)^2 - 4$ gives $4a = 8$, so $a = 2$.\n\n**The Full Solution:**\nStep 1: The point $(-1, 4)$ is on the graph, so substituting gives $4 = a(-1 + 3)^2 - 4$.\nStep 2: Simplify inside the parentheses and square: $(-1 + 3)^2 = 2^2 = 4$, so $4 = 4a - 4$.\nStep 3: Add $4$ to both sides and divide: $4a = 8$, so $a = 2$. Check: $f(-1) = 2(4) - 4 = 4$, matching the marked point. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($1$): forgets to add the $4$ back, solving $4a = 4$.\n* Choice C ($4$): divides $8$ by $2$ instead of by $2^2$, skipping the squaring step.\n* Choice D ($8$): stops at $4a = 8$ and reports $4a$ rather than $a$.\n\n**Test Day Takeaway:** With the vertex known, one extra point determines $a$ — isolate the squared term first, then divide by the SQUARE of the horizontal difference.",
      skills: ["vertex-form"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "In the $xy$-plane, a parabola has $x$-intercepts at $(-4, 0)$ and $(2, 0)$ and passes through the point $(0, -16)$. Which equation represents this parabola?",
      choices: [
        // distractor: assumes a = 1
        { id: "A", text: "$y = x^2 + 2x - 8$" },
        { id: "B", text: "$y = 2x^2 + 4x - 16$" },
        // distractor: reverses the intercept signs
        { id: "C", text: "$y = 2x^2 - 4x - 16$" },
        // distractor: sign error solving for a
        { id: "D", text: "$y = -2x^2 - 4x + 16$" }
      ],
      correctAnswer: "B",
      hint: "Start from the factored form with an unknown leading coefficient, then use the third point to pin it down.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~35s):** $y = a(x + 4)(x - 2)$ and $-16 = a(4)(-2)$ give $a = 2$, so $y = 2x^2 + 4x - 16$.\n\n**The Full Solution:**\nStep 1: Intercepts at $x = -4$ and $x = 2$ give the factors $(x + 4)$ and $(x - 2)$, so $y = a(x + 4)(x - 2)$ for some constant $a$.\nStep 2: Substitute the third point: $-16 = a(0 + 4)(0 - 2) = -8a$, so $a = 2$.\nStep 3: Expand: $y = 2(x^2 + 2x - 8) = 2x^2 + 4x - 16$. Check the intercepts: at $x = -4$, $y = 32 - 16 - 16 = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: uses $a = 1$ and never checks the third point; its $y$-intercept is $-8$, not $-16$.\n* Choice C: builds the factors as $(x - 4)(x + 2)$, reversing which intercept is negative.\n* Choice D: solves $-8a = -16$ as $a = -2$, dropping a negative sign.\n\n**Test Day Takeaway:** Two intercepts fix the factors but not the whole equation — a third point is what determines the leading coefficient.",
      skills: ["roots-from-factors", "converting-quadratic-forms"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "A quadratic function $f$ has zeros at $x = -1$ and $x = 6$, and $f(2) = -24$. Which of the following defines $f$?",
      choices: [
        // distractor: sign error solving for a
        { id: "A", text: "$f(x) = -2x^2 + 10x + 12$" },
        // distractor: assumes a = 1
        { id: "B", text: "$f(x) = x^2 - 5x - 6$" },
        { id: "C", text: "$f(x) = 2x^2 - 10x - 12$" },
        // distractor: reverses the signs of the zeros
        { id: "D", text: "$f(x) = 2x^2 + 10x - 12$" }
      ],
      correctAnswer: "C",
      hint: "The zeros give the factors; the extra ordered pair is what determines the leading coefficient.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~35s):** $f(x) = a(x + 1)(x - 6)$ and $-24 = a(3)(-4)$ give $a = 2$, so $f(x) = 2x^2 - 10x - 12$.\n\n**The Full Solution:**\nStep 1: Zeros at $-1$ and $6$ give the factors $(x + 1)$ and $(x - 6)$, so $f(x) = a(x + 1)(x - 6)$.\nStep 2: Use the given value: $f(2) = a(2 + 1)(2 - 6) = a(3)(-4) = -12a$. Setting $-12a = -24$ gives $a = 2$.\nStep 3: Expand: $f(x) = 2(x^2 - 5x - 6) = 2x^2 - 10x - 12$. Check: $f(6) = 72 - 60 - 12 = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: solves $-12a = -24$ as $a = -2$, so its graph opens the wrong way and $f(2)$ comes out $+24$.\n* Choice B: keeps $a = 1$ and ignores the condition $f(2) = -24$; it gives $f(2) = -12$.\n* Choice D: builds the factors as $(x - 1)(x + 6)$, reversing the signs of the zeros.\n\n**Test Day Takeaway:** Always test a candidate equation against EVERY given condition; two of these choices have the right zeros but the wrong value at $x = 2$.",
      skills: ["roots-from-factors", "converting-quadratic-forms"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "The function $f$ is defined by $f(x) = -3(x - 4)^2 + 27$. This function can also be written as $f(x) = a(x - r)(x - s)$, where $a$, $r$, and $s$ are constants and $r < s$. What is the value of $r + s$?",
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
