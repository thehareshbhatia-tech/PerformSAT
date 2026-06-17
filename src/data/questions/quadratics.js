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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** A quadratic has highest power exactly $2$. Only $f(x)=x^2+5x-3$ tops out at $x^2$.\n\n**The Full Solution:**\nStep 1: A quadratic function has the form $f(x)=ax^2+bx+c$ with $a\\neq 0$ — the highest power of $x$ is exactly $2$.\nStep 2: Scan each choice for its highest power: A is degree $1$, B is degree $2$, C is degree $3$, D has $\\sqrt{x}=x^{1/2}$ (not a whole number).\nStep 3: Only B has highest power exactly $2$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($f(x)=3x+2$): linear, degree $1$. The $x^2$ term is missing entirely.\n* Choice C ($f(x)=x^3-x$): cubic, degree $3$ — too high.\n* Choice D ($f(x)=\\sqrt{x}+1$): the exponent $\\frac{1}{2}$ is not a whole number, so it is not even a polynomial.\n\n**Test Day Takeaway:** Classify a polynomial by its single highest power of $x$: degree $1$ is linear, degree $2$ is quadratic, degree $3$ is cubic.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** In $ax^2+bx+c$, $a$ is the number in front of $x^2$. Here that number is $2$.\n\n**The Full Solution:**\nStep 1: Line up $f(x)=2x^2-4x+7$ with the standard form $f(x)=ax^2+bx+c$.\nStep 2: Match term by term: $a=2$, $b=-4$, $c=7$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): that is $b$, the coefficient of $x$, not $a$.\n* Choice C ($7$): that is $c$, the constant term.\n* Choice D ($x^2$): $a$ is a number, not the variable part it multiplies.\n\n**Test Day Takeaway:** The leading coefficient $a$ is whatever number multiplies $x^2$ — read it straight off the standard form.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~5s):** The graph of any quadratic is a parabola.\n\n**The Full Solution:**\nStep 1: A quadratic function $f(x)=ax^2+bx+c$ with $a\\neq 0$ always graphs as a U-shaped curve.\nStep 2: That U-shaped curve is, by definition, a parabola — it opens up when $a>0$ and down when $a<0$, but it is always a parabola.\n\n**Why the wrong answers are tempting:**\n* Choice A (Line): that is the graph of a linear function $f(x)=mx+b$, degree $1$.\n* Choice B (Circle): a circle comes from $x^2+y^2=r^2$ and is not a function of $x$.\n* Choice D (Hyperbola): a different conic with two separate branches, not a single U.\n\n**Test Day Takeaway:** Quadratic in, parabola out — every degree-$2$ function graphs as a parabola.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~5s):** Positive $a$ means the parabola opens upward — a smile.\n\n**The Full Solution:**\nStep 1: The leading coefficient $a$ sets the direction. For large $|x|$, the $ax^2$ term dominates $f(x)$.\nStep 2: With $a>0$, $ax^2\\to +\\infty$ as $|x|\\to\\infty$, so both arms rise — the parabola opens upward.\n\n**Why the wrong answers are tempting:**\n* Choice B (Opens downward): that is the $a<0$ case — the rule reversed.\n* Choice C (Opens to the right): sideways parabolas come from $x=ay^2+by+c$, which is not a function of $x$.\n* Choice D (Opens to the left): same issue as C — left/right opening requires $x$ written in terms of $y$.\n\n**Test Day Takeaway:** For $f(x)=ax^2+bx+c$: $a>0$ opens up (smile, minimum vertex); $a<0$ opens down (frown, maximum vertex).",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** The $y$-intercept is $f(0)$, which is just the constant term $c=5$.\n\n**The Full Solution:**\nStep 1: The $y$-intercept happens where the graph crosses the $y$-axis, at $x=0$.\nStep 2: Substitute: $f(0)=3(0)^2-2(0)+5=5$. So the $y$-intercept is $(0,5)$ and its value is $5$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): that is $a$, the leading coefficient, not the $y$-intercept.\n* Choice B ($-2$): that is $b$, the coefficient of $x$.\n* Choice D ($0$): the $x$-value where you evaluate, not the resulting $y$-value.\n\n**Test Day Takeaway:** For $f(x)=ax^2+bx+c$, the $y$-intercept is always $c$, because $f(0)=c$.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** Find two numbers that multiply to $+6$ and add to $-5$: that is $-2$ and $-3$, so the roots are $x=2$ and $x=3$.\n\n**The Full Solution:**\nStep 1: Factor $x^2-5x+6$. Need $p\\cdot q=6$ and $p+q=-5$; the pair $-2,-3$ works.\nStep 2: Write $x^2-5x+6=(x-2)(x-3)=0$.\nStep 3: Zero-product property: $x-2=0\\Rightarrow x=2$, or $x-3=0\\Rightarrow x=3$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($x=-2$ and $x=-3$): these come from $(x+2)(x+3)=x^2+5x+6$, the wrong middle sign. A factor $(x-2)$ gives $x=+2$.\n* Choice C ($x=1$ and $x=6$): the product $1\\times 6=6$ checks, but $1+6=7\\neq -5$.\n* Choice D ($x=-1$ and $x=-6$): product checks but $-1+(-6)=-7\\neq -5$.\n\n**Test Day Takeaway:** To factor $x^2+bx+c$, find two numbers whose product is $c$ and whose sum is $b$; the roots are the opposites of the numbers inside the factors.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** A root makes the equation $0$. Plug in $x=-4$: $16-28+k=0$, so $k=12$.\n\n**The Full Solution:**\nStep 1: Substitute $x=-4$ into $x^2+7x+k=0$: $(-4)^2+7(-4)+k=0$.\nStep 2: Simplify: $16-28+k=0$, so $-12+k=0$.\nStep 3: Solve: $k=12$. Check: $x^2+7x+12=(x+3)(x+4)$, which has $x=-4$ as a root.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-12$): stopped at $16-28=-12$ and forgot to solve $-12+k=0$ for $k$.\n* Choice C ($-28$): used only $7(-4)=-28$ and dropped the $(-4)^2=16$ term.\n* Choice D ($28$): computed $7\\times 4=28$ but ignored the negative sign on $-4$.\n\n**Test Day Takeaway:** If $r$ is a root, then plugging $r$ into the equation gives $0$ — substitute and solve for the unknown.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** $x^2-9=0$ means $x^2=9$, so $x=\\pm 3$ — both $3$ and $-3$.\n\n**The Full Solution:**\nStep 1: Recognize the difference of squares: $x^2-9=x^2-3^2$.\nStep 2: Factor with $a^2-b^2=(a-b)(a+b)$: $(x-3)(x+3)=0$.\nStep 3: Zero-product property: $x=3$ or $x=-3$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($x=9$ only): confused $x^2=9$ with $x=9$ — forgot to take the square root.\n* Choice B ($x=3$ only): correct root but dropped the negative; $(-3)^2=9$ too.\n* Choice D ($x=81$ and $x=-81$): squared $9$ instead of taking the square root.\n\n**Test Day Takeaway:** $x^2=k$ always gives $x=\\pm\\sqrt{k}$ — keep both signs. And $a^2-b^2$ factors as $(a-b)(a+b)$.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** Roots $1$ and $5$ build $(x-1)(x-5)=x^2-6x+5$. Sum $=6$ (so $-b=6$), product $=5$ (so $c=5$) — only A fits.\n\n**The Full Solution:**\nStep 1: Write the factored form from the roots: $(x-1)(x-5)=0$.\nStep 2: Expand: $x^2-5x-x+5=x^2-6x+5=0$.\nStep 3: Confirm: $x=1$ gives $1-6+5=0$; $x=5$ gives $25-30+5=0$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($x^2+6x+5$): factors to $(x+1)(x+5)$, roots $-1$ and $-5$ — all signs flipped.\n* Choice C ($x^2-4x+5$): used the difference $5-1=4$ instead of the sum $1+5=6$ for the middle term.\n* Choice D ($x^2-6x-5$): the product of roots is $1\\times 5=+5$, so $c$ must be $+5$, not $-5$.\n\n**Test Day Takeaway:** From roots $r_1,r_2$, the equation is $x^2-(r_1+r_2)x+(r_1\\cdot r_2)=0$: minus the sum, plus the product.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** Factor out $2x$: $2x(x-4)=0$, giving $x=0$ and $x=4$.\n\n**The Full Solution:**\nStep 1: There is no constant term, so factor out the common $2x$: $2x^2-8x=2x(x-4)=0$.\nStep 2: Zero-product property: $2x=0\\Rightarrow x=0$, or $x-4=0\\Rightarrow x=4$.\nStep 3: Check: $2(0)^2-8(0)=0$; $2(16)-8(4)=32-32=0$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($x=0$ only): divided both sides by $x$, which throws away the $x=0$ solution. Never divide by a variable.\n* Choice B ($x=4$ only): kept the $x-4$ factor but ignored the $2x$ factor, missing $x=0$.\n* Choice D ($x=2$ and $x=-4$): comes from a wrong factoring; expanding $2(x-2)(x+4)$ gives $2x^2+4x-16$, not the original.\n\n**Test Day Takeaway:** When a quadratic has no constant term, factor out $x$ first — one root is always $x=0$.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** Vertex $x=-\\frac{b}{2a}=-\\frac{-6}{2}=3$.\n\n**The Full Solution:**\nStep 1: From $f(x)=x^2-6x+5$, read $a=1$, $b=-6$.\nStep 2: Apply $x=-\\frac{b}{2a}=-\\frac{-6}{2(1)}=\\frac{6}{2}=3$.\nStep 3: Check via roots: $(x-1)(x-5)=0$ gives $x=1,5$; their midpoint is $\\frac{1+5}{2}=3$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): just grabbed $b$ without using the formula.\n* Choice B ($-3$): computed $\\frac{b}{2a}=\\frac{-6}{2}=-3$ but forgot the leading minus sign — the two negatives cancel.\n* Choice D ($6$): found $-b=6$ but forgot to divide by $2a$.\n\n**Test Day Takeaway:** The vertex $x$-coordinate is $x=-\\frac{b}{2a}$ — and it equals the midpoint of the two roots.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~5s):** In vertex form $a(x-h)^2+k$, the vertex is $(h,k)$. Here $(x-2)^2+3$ gives $(2,3)$.\n\n**The Full Solution:**\nStep 1: Match $f(x)=(x-2)^2+3$ to $f(x)=a(x-h)^2+k$: $h=2$, $k=3$.\nStep 2: The vertex is $(h,k)=(2,3)$. Since $(x-2)^2\\ge 0$ and equals $0$ at $x=2$, the minimum value $3$ occurs at $x=2$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($(-2,3)$): read $h=-2$ from the $-2$ inside, but $(x-h)$ with $-2$ means $h=+2$.\n* Choice C ($(2,-3)$): flipped the sign of $k$; the $+3$ means $k=+3$ as written.\n* Choice D ($(-2,-3)$): applied the sign-flip to both $h$ and $k$ — it only applies to $h$.\n\n**Test Day Takeaway:** In $a(x-h)^2+k$, flip the sign inside the parentheses to get $h$, but keep $k$ exactly as written.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~10s):** The sign of the leading coefficient decides the shape. Here $a=-2<0$, so the parabola opens downward and the vertex is the highest point — a maximum.\n\n**The Full Solution:**\nStep 1: Read $a$ from $f(x)=-2x^2+8x-3$. The leading coefficient is $a=-2$, which is negative.\nStep 2: $a<0$ means the parabola opens downward, so its vertex sits at the top — a maximum.\nStep 3 (confirm): The vertex is at $x=-\\frac{b}{2a}=-\\frac{8}{2(-2)}=2$, and $f(2)=-2(4)+16-3=5$. Neighbors are lower: $f(1)=3$ and $f(3)=3$. So $5$ is a peak. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: identifies $a<0$ correctly but flips the conclusion. Downward-opening means a maximum, not a minimum.\n* Choice C: misreads the sign of $a$ as positive, perhaps eyeing the $+8$ ($b$) instead of the $-2$ ($a$).\n* Choice D: \"Neither\" is never right for a quadratic with $a\\neq0$ — every parabola has exactly one vertex, either a max or a min.\n\n**Test Day Takeaway:** $a>0$ opens up (vertex is a minimum); $a<0$ opens down (vertex is a maximum). Read the leading coefficient first.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** Since $a=1>0$ the parabola opens up, so its minimum is the vertex value. The vertex is at $x=-\\frac{b}{2a}=-\\frac{4}{2}=-2$, and $f(-2)=4-8+7=3$.\n\n**The Full Solution:**\nStep 1: $a=1$, $b=4$, $c=7$. Because $a>0$, the lowest point is the vertex.\nStep 2: $x$-coordinate of the vertex: $x=-\\frac{b}{2a}=-\\frac{4}{2(1)}=-2$.\nStep 3: Minimum value $=f(-2)=(-2)^2+4(-2)+7=4-8+7=3$.\nStep 4 (confirm): Complete the square: $x^2+4x+7=(x+2)^2+3$. Since $(x+2)^2\\ge0$, the smallest value is $3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($4$): grabs $b$, or stops at $(-2)^2=4$ partway through evaluating $f(-2)$.\n* Choice C ($7$): reports the constant $c$ (the $y$-intercept). That equals the minimum only when the vertex sits at $x=0$, which it doesn't here.\n* Choice D ($-2$): reports the $x$-coordinate of the vertex, not the minimum value of $f(x)$.\n\n**Test Day Takeaway:** The minimum or maximum value is the $y$-coordinate of the vertex. Find $x=-\\frac{b}{2a}$ first, then substitute back to get the value.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** The axis of symmetry is $x=-\\frac{b}{2a}$. With $a=2$, $b=12$: $x=-\\frac{12}{2(2)}=-3$.\n\n**The Full Solution:**\nStep 1: Read coefficients from $f(x)=2x^2+12x-5$: $a=2$, $b=12$.\nStep 2: Apply $x=-\\frac{b}{2a}=-\\frac{12}{4}=-3$.\nStep 3 (confirm): Symmetric inputs give equal outputs: $f(-2)=8-24-5=-21$ and $f(-4)=32-48-5=-21$. Both sit one step from $x=-3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x=3$): drops the leading negative sign — computes $\\frac{12}{4}=3$ instead of $-\\frac{12}{4}=-3$.\n* Choice C ($x=6$): divides by $a$ instead of $2a$ and drops the sign, giving $\\frac{12}{2}=6$.\n* Choice D ($x=-6$): divides by $a$ instead of $2a$, giving $-\\frac{12}{2}=-6$ — forgets the factor of $2$ in the denominator.\n\n**Test Day Takeaway:** The axis of symmetry is the vertical line $x=-\\frac{b}{2a}$. Keep both the minus sign and the $2$ in the denominator.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** $x^2-4x+4$ is the perfect square $(x-2)^2$, so it has a repeated root and the discriminant is $0$. Directly: $\\Delta=(-4)^2-4(1)(4)=16-16=0$.\n\n**The Full Solution:**\nStep 1: Read $a=1$, $b=-4$, $c=4$.\nStep 2: $\\Delta=b^2-4ac=(-4)^2-4(1)(4)=16-16=0$.\nStep 3 (confirm): $\\Delta=0$ signals a double root, and indeed $x^2-4x+4=(x-2)^2=0$ gives $x=2$ twice. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-32$): evaluates $-4^2$ as $-16$ instead of $(-4)^2=16$, giving $-16-16=-32$. Squaring a negative is positive.\n* Choice C ($32$): adds instead of subtracts: $16+16=32$. The formula is $b^2-4ac$, a minus.\n* Choice D ($48$): a downstream arithmetic slip; no correct reading of $a$, $b$, $c$ produces $48$.\n\n**Test Day Takeaway:** $\\Delta=b^2-4ac$. Always square $b$ as $(b)^2$ — a negative $b$ still gives a positive $b^2$.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** The discriminant sits under the square root in the quadratic formula. If it is negative, the square root has no real value, so there are no real solutions.\n\n**The Full Solution:**\nStep 1: In $x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$, the radicand is the discriminant $\\Delta=b^2-4ac$.\nStep 2: $\\Delta<0$ means $\\sqrt{\\Delta}$ is the square root of a negative number — not real.\nStep 3 (confirm): $x^2+1=0$ has $\\Delta=-4<0$, and $x^2=-1$ has no real solution since no real number squares to $-1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: two real solutions happen when $\\Delta>0$ — the opposite sign condition.\n* Choice B: one real solution (a repeated root) happens when $\\Delta=0$ exactly, the boundary case.\n* Choice D: a quadratic has at most two roots, never infinitely many.\n\n**Test Day Takeaway:** Sign of $\\Delta$ counts real roots: $\\Delta>0$ gives two, $\\Delta=0$ gives one, $\\Delta<0$ gives none.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** $x$-intercepts are real roots, counted by the discriminant. Here $\\Delta=2^2-4(1)(5)=4-20=-16<0$, so there are no real roots and no $x$-intercepts.\n\n**The Full Solution:**\nStep 1: Read $a=1$, $b=2$, $c=5$.\nStep 2: $\\Delta=b^2-4ac=(2)^2-4(1)(5)=4-20=-16$.\nStep 3: $\\Delta<0$ means no real roots, so the graph never touches the $x$-axis — $0$ intercepts.\nStep 4 (confirm): $x^2+2x+5=(x+1)^2+4\\ge4>0$, so the parabola stays above the $x$-axis. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($1$): one intercept requires $\\Delta=0$, but $\\Delta=-16$.\n* Choice C ($2$): two intercepts require $\\Delta>0$; assuming every parabola crosses twice fails here.\n* Choice D: the count is never ambiguous for a quadratic — the discriminant settles it.\n\n**Test Day Takeaway:** Number of $x$-intercepts equals the number of real roots: compute $\\Delta=b^2-4ac$ and read its sign.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** Exactly one solution means $\\Delta=0$. So $k^2-4(1)(9)=0\\Rightarrow k^2=36\\Rightarrow k=\\pm6$.\n\n**The Full Solution:**\nStep 1: Read $a=1$, $b=k$, $c=9$.\nStep 2: Set $\\Delta=0$: $k^2-4(1)(9)=0$, so $k^2-36=0$.\nStep 3: $k^2=36\\Rightarrow k=\\pm6$ — both signs.\nStep 4 (confirm): $k=6$ gives $(x+3)^2=0$; $k=-6$ gives $(x-3)^2=0$. Each has one repeated root. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($k=3$ only): $k=3$ gives $\\Delta=9-36=-27<0$ — no real solution, not one. An unneeded extra divide.\n* Choice B ($k=6$ only): correct value but misses $k=-6$. Square roots come in $\\pm$ pairs.\n* Choice D ($k=\\pm3$): solves $k^2=9$ instead of $k^2=36$ — used $\\sqrt{9}$ where $\\sqrt{36}=6$ was needed.\n\n**Test Day Takeaway:** \"Exactly one solution\" means $\\Delta=b^2-4ac=0$. When solving $k^2=n$, keep both roots: $k=\\pm\\sqrt{n}$.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** Compute the discriminant: $\\Delta=(-5)^2-4(2)(1)=25-8=17$. Positive, so two distinct real roots.\n\n**The Full Solution:**\nStep 1: Read $a=2$, $b=-5$, $c=1$ from $2x^2-5x+1=0$.\nStep 2: $\\Delta=b^2-4ac=(-5)^2-4(2)(1)=25-8=17$.\nStep 3: $\\Delta=17>0$, so the equation has two distinct real roots.\nStep 4 (confirm): $x=\\frac{5\\pm\\sqrt{17}}{4}$, with $\\sqrt{17}\\approx4.12$, gives $x\\approx2.28$ and $x\\approx0.22$ — two distinct values. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: a repeated root needs $\\Delta=0$, but $\\Delta=17$.\n* Choice C: no real roots needs $\\Delta<0$. Mis-squaring $(-5)^2$ as $-25$ would wrongly give $-33<0$ — but $(-5)^2=25$.\n* Choice D: with the coefficients in hand, the discriminant always determines the answer.\n\n**Test Day Takeaway:** $\\Delta=b^2-4ac$ classifies the roots. A positive non-perfect-square like $17$ gives two distinct irrational roots.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** Expand $(x+3)^2=x^2+6x+9$, then subtract $4$: $x^2+6x+5$.\n\n**The Full Solution:**\nStep 1: Use $(a+b)^2=a^2+2ab+b^2$: $(x+3)^2=x^2+6x+9$.\nStep 2: Apply the $-4$: $x^2+6x+9-4=x^2+6x+5$.\nStep 3 (confirm): $x^2+6x+5=(x+1)(x+5)$ has vertex at $x=-3$, and $f(-3)=0-4=-4$, matching the vertex $(-3,-4)$ of $(x+3)^2-4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($x^2+6x+9$): stops after expanding the square and forgets the $-4$.\n* Choice C ($x^2-6x+5$): expands $(x-3)^2$ — wrong sign on the middle term.\n* Choice D ($x^2+3x-4$): never squares the binomial, just drops $+3$ and $-4$ in as loose terms.\n\n**Test Day Takeaway:** Convert vertex form to standard form by expanding the square with $(x+h)^2=x^2+2hx+h^2$, then combine the constant.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** Plug the point $(0,3)$ into $f(x)=a(x-2)^2-1$: $3=a(4)-1$, so $4a=4$ and $a=1$.\n\n**The Full Solution:**\nStep 1: The vertex form is given: $f(x)=a(x-2)^2-1$.\nStep 2: Use $f(0)=3$: $3=a(0-2)^2-1=4a-1$.\nStep 3: $4a=4\\Rightarrow a=1$.\nStep 4 (confirm): $f(x)=(x-2)^2-1$ gives $f(0)=4-1=3$ and $f(2)=-1$. Both fit. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-1$): treats $(0-2)^2$ as $-4$ instead of $+4$, solving $3=-4a-1$.\n* Choice C ($2$): solves $3=4a-1$ as $3=2a$ — forgets to add $1$ to both sides first.\n* Choice D ($-2$): combines the sign error of B with the slip of C.\n\n**Test Day Takeaway:** To find $a$ in $f(x)=a(x-h)^2+k$, substitute a non-vertex point and solve. Add the constant across before dividing.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** Factored form is $y=a(x-1)(x-5)$. Plug in $(0,-10)$: $-10=a(-1)(-5)=5a$, so $a=-2$, giving $y=-2(x-1)(x-5)$.\n\n**The Full Solution:**\nStep 1: Write the factored form from the intercepts: $y=a(x-1)(x-5)$.\nStep 2: Use $(0,-10)$: $-10=a(0-1)(0-5)=a(5)$.\nStep 3: $5a=-10\\Rightarrow a=-2$, so $y=-2(x-1)(x-5)$.\nStep 4 (confirm): at $x=0$, $y=-2(-1)(-5)=-10$; at $x=1$ and $x=5$, $y=0$. All check. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($a=2$): drops the negative when dividing $-10\\div5$, giving $+10$ at $x=0$ instead of $-10$.\n* Choice C ($a=1$): assumes $a=1$ without using the point; that gives $y=5$ at $x=0$.\n* Choice D ($a=-10$): mistakes the point's $y$-value for $a$; that gives $y=-50$ at $x=0$.\n\n**Test Day Takeaway:** With intercepts $r_1,r_2$ write $y=a(x-r_1)(x-r_2)$, then solve for $a$ with one extra point. Watch the sign when dividing.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~20s):** Factored form $y=a(x-2)(x+3)$. Plug in $(1,-8)$: $-8=a(-1)(4)=-4a$, so $a=2$. Expand: $2(x^2+x-6)=2x^2+2x-12$.\n\n**The Full Solution:**\nStep 1: Write the factored form from roots $2$ and $-3$: $y=a(x-2)(x+3)$.\nStep 2: Use $(1,-8)$: $-8=a(1-2)(1+3)=a(-1)(4)=-4a$, so $a=2$.\nStep 3: Expand: $y=2(x-2)(x+3)=2(x^2+x-6)=2x^2+2x-12$.\nStep 4 (confirm): roots check ($2(4)+4-12=0$, $2(9)-6-12=0$) and $(1,-8)$ checks ($2+2-12=-8$). $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($y=x^2+x-6$): expands with $a=1$, never solving for $a$ — gives $-4$ at $x=1$, not $-8$.\n* Choice C ($y=2x^2-2x-12$): wrong sign on the middle term; $(x-2)(x+3)=x^2+x-6$, not $x^2-x-6$.\n* Choice D ($y=-2x^2-2x+12$): divides $-8\\div(-4)$ as $-2$ instead of $+2$.\n\n**Test Day Takeaway:** Build from roots: factored form, solve for $a$ with the extra point, then expand. Mind the cross-term sign and the sign when dividing.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~20s):** Expand $(x-1)^2=x^2-2x+1$, multiply by $-2$ to get $-2x^2+4x-2$, then add $8$: $-2x^2+4x+6$. That matches Choice A.\n\n**The Full Solution:**\nStep 1: Square the binomial: $(x-1)^2=x^2-2x+1$.\nStep 2: Distribute the leading $-2$ to every term: $-2(x^2-2x+1)=-2x^2+4x-2$. Note $(-2)(-2x)=+4x$.\nStep 3: Add the outside constant: $-2x^2+4x-2+8=-2x^2+4x+6$.\nCheck the vertex: $x=-\\frac{b}{2a}=-\\frac{4}{2(-2)}=1$ and $f(1)=-2+4+6=8$, so the vertex is $(1,8)$, exactly as the original vertex form says. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-2x^2-4x+6$): treated $(-2)(-2x)$ as $-4x$ — two negatives multiply to a positive, so the middle term is $+4x$.\n* Choice C ($-2x^2+4x-6$): computed the constant as $-2+8=-6$ instead of $+6$.\n* Choice D ($2x^2-4x+6$): dropped the negative on the leading coefficient, flipping the parabola to open upward.\n\n**Test Day Takeaway:** To convert $a(x-h)^2+k$ to standard form, expand the square first, then distribute $a$ to all three terms before adding $k$ — and watch the sign when a negative multiplies a negative.",
      skills: ['converting-quadratic-forms', 'vertex-form']
    }
  ]
};
