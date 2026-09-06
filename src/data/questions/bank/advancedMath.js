export const advancedMathBank = [
  // ── identify-quadratic (4 questions) ──────────────────────────────
  {
    id: "bank-am-001",
    domain: "advanced-math",
    skills: ["identify-quadratic"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A quadratic equation in one variable can be written in the form $ax^2 + bx + c = 0$, where $a$, $b$, and $c$ are constants and $a \\neq 0$. Which of the following is a quadratic equation in $x$?",
    choices: [
      // distractor: degree 1 — a linear equation
      { id: "A", text: "$13x - 26 = 0$" },
      // distractor: variable in a denominator — not a polynomial equation at all
      { id: "B", text: "$\\dfrac{6}{x} + 4 = 0$" },
      { id: "C", text: "$2x^2 - 5x + 3 = 0$" },
      // distractor: degree 3 — a cubic equation
      { id: "D", text: "$x^3 - 8x = 0$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Identify Quadratic Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Look for a highest power of exactly $2$ with the variable in the numerator. Only $2x^2 - 5x + 3 = 0$ qualifies.\n\n**The Full Solution:**\nStep 1: A quadratic equation in $x$ has a term with $x^2$ and no higher power of $x$, and every power of $x$ must be a whole number in the numerator.\nStep 2: Test each equation. $13x - 26 = 0$ has highest power $1$. $\\dfrac{6}{x} + 4 = 0$ has $x$ in a denominator, which is the power $x^{-1}$. $x^3 - 8x = 0$ has highest power $3$.\nStep 3: $2x^2 - 5x + 3 = 0$ matches $ax^2 + bx + c = 0$ with $a = 2$, $b = -5$, $c = 3$, and $a \\neq 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($13x - 26 = 0$): the largest power of $x$ is $1$, so this is linear, not quadratic.\n* Choice B ($\\dfrac{6}{x} + 4 = 0$): the variable sits in a denominator, so the equation is rational, not polynomial.\n* Choice D ($x^3 - 8x = 0$): the largest power of $x$ is $3$, so this is cubic.\n\n**Test Day Takeaway:** Classify by the HIGHEST power of the variable, and check that the variable never appears in a denominator or under a radical.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "concept-identification",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-002",
    domain: "advanced-math",
    skills: ["identify-quadratic"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A concert hall models its ticket revenue as $R(p) = p(900 - 15p)$ dollars, where $p$ is the ticket price in dollars. The table gives $R(p)$ for three ticket prices. Which of the following best describes $R$ as a function of $p$?",
    diagram: { type: "dataTable", params: { headers: ["Ticket price p (dollars)", "Revenue R(p) (dollars)"], rows: [["10", "7,500"], ["20", "12,000"], ["30", "13,500"]] } },
    choices: [
      // distractor: treats "increasing" as proof of linearity; the differences 4,500 and 1,500 are not constant
      { id: "A", text: "Linear, because $R(p)$ increases as $p$ increases." },
      // distractor: classifies one factor instead of the product
      { id: "B", text: "Linear, because the factor $900 - 15p$ is linear in $p$." },
      { id: "C", text: "Quadratic, because expanding gives $R(p) = -15p^2 + 900p$." },
      // distractor: claims a constant ratio; the ratios are 1.6 then 1.125
      { id: "D", text: "Exponential, because $R(p)$ grows by a constant factor." }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Classify Model by Expanding**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Distribute: $p(900 - 15p) = 900p - 15p^2$. A $p^2$ term with a nonzero coefficient makes $R$ quadratic.\n\n**The Full Solution:**\nStep 1: Expand the product. $R(p) = p(900) - p(15p) = 900p - 15p^2$, or $R(p) = -15p^2 + 900p$.\nStep 2: The highest power of $p$ is $2$ and its coefficient $-15$ is not zero, so $R$ is a quadratic function of $p$.\nStep 3: Check against the table. From $p = 10$ to $p = 20$ revenue rises by $12{,}000 - 7{,}500 = 4{,}500$; from $p = 20$ to $p = 30$ it rises by only $13{,}500 - 12{,}000 = 1{,}500$. Unequal increases over equal steps rule out a linear model, and the ratios $\\frac{12{,}000}{7{,}500} = 1.6$ and $\\frac{13{,}500}{12{,}000} = 1.125$ rule out an exponential one. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: \"increasing\" is not the same as \"linear\" — the table's increases are $4{,}500$ then $1{,}500$, not equal.\n* Choice B: $900 - 15p$ is linear by itself, but multiplying it by $p$ raises the degree to $2$.\n* Choice D: an exponential model needs a constant ratio between outputs at equally spaced inputs; here the ratios are $1.6$ and $1.125$.\n\n**Test Day Takeaway:** Classify a model only after expanding it. A product of two linear factors is quadratic, no matter how linear each factor looks.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "model-classification",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-003",
    domain: "advanced-math",
    skills: ["identify-quadratic"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Three expressions in $m$ are given below.\n\nI. $(m + 6)^2 - m^2$\nII. $(3m - 2)(m + 5)$\nIII. $\\dfrac{m^4 - m^2}{m^2}$, where $m \\neq 0$\n\nAfter simplification, which of the expressions are quadratic in $m$?",
    choices: [
      // distractor: assumes squaring a binomial always leaves an $m^2$ term
      { id: "A", text: "I only" },
      // distractor: stops before reducing III, which becomes $m^2 - 1$
      { id: "B", text: "II only" },
      { id: "C", text: "II and III only" },
      // distractor: counts I, whose $m^2$ terms cancel
      { id: "D", text: "I, II, and III" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Classify After Simplification**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** I collapses to $12m + 36$ (linear). II expands to $3m^2 + 13m - 10$ and III reduces to $m^2 - 1$, both quadratic.\n\n**The Full Solution:**\nStep 1: Expression I: $(m + 6)^2 - m^2 = m^2 + 12m + 36 - m^2 = 12m + 36$. The $m^2$ terms cancel, so I is linear.\nStep 2: Expression II: $(3m - 2)(m + 5) = 3m^2 + 15m - 2m - 10 = 3m^2 + 13m - 10$, which is quadratic.\nStep 3: Expression III: $\\dfrac{m^4 - m^2}{m^2} = \\dfrac{m^2(m^2 - 1)}{m^2} = m^2 - 1$ for $m \\neq 0$, which is quadratic. So II and III only. Check at $m = 2$: I gives $60 = 12(2) + 36$, II gives $(4)(7) = 28 = 3(4) + 26 - 10$, III gives $\\frac{16 - 4}{4} = 3 = 2^2 - 1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: expanding $(m + 6)^2$ does produce an $m^2$ term, but subtracting $m^2$ removes it — I is linear.\n* Choice B: III looks like a fourth-degree expression until the common factor $m^2$ is divided out.\n* Choice D: includes I, which loses its quadratic term in the subtraction.\n\n**Test Day Takeaway:** Degree is a property of the SIMPLIFIED expression. Expand and reduce first, then read the highest surviving power.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "classify-after-simplify",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-004",
    domain: "advanced-math",
    skills: ["identify-quadratic"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The height above the nozzle, in feet, of a stream of water $x$ feet horizontally from a fountain nozzle is modeled by $h(x) = -0.5x^2 + 4x$. The graph of $y = h(x)$ is shown. Which statement about this model is true?",
    diagram: { type: "parabola", params: { vertex: { h: 4, k: 8 }, a: -0.5, xRange: [0, 10], yRange: [0, 10], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showVertex: false } },
    choices: [
      // distractor: calls a curved graph linear
      { id: "A", text: "The model is linear, because the height changes at a constant rate." },
      // distractor: labels any rise-then-fall shape exponential
      { id: "B", text: "The model is exponential, because the height falls off after its peak." },
      { id: "C", text: "The model is quadratic, and the stream rises to a greatest height of $8$ feet." },
      // distractor: reports the vertex's $x$-coordinate as the maximum height
      { id: "D", text: "The model is quadratic, and the stream rises to a greatest height of $4$ feet." }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Classify Physical Motion Model**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The $x^2$ term makes $h$ quadratic, and its vertex is at $x = -\\dfrac{4}{2(-0.5)} = 4$, where $h(4) = -8 + 16 = 8$ feet.\n\n**The Full Solution:**\nStep 1: $h(x) = -0.5x^2 + 4x$ has degree $2$, so the model is quadratic and its graph is a parabola. Because $-0.5 < 0$, the parabola opens downward and has a maximum.\nStep 2: The maximum occurs at the vertex, $x = -\\dfrac{b}{2a} = -\\dfrac{4}{2(-0.5)} = 4$ feet from the nozzle.\nStep 3: The greatest height is $h(4) = -0.5(16) + 4(4) = -8 + 16 = 8$ feet. Check with the symmetric points: $h(0) = 0$ and $h(8) = -32 + 32 = 0$, and $4$ is halfway between them. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: the graph is curved, so the height does not change at a constant rate.\n* Choice B: exponential models never come back down to a previous value the way this stream does at $x = 0$ and $x = 8$.\n* Choice D ($4$ feet): $4$ is the horizontal distance at which the peak occurs, not the peak height.\n\n**Test Day Takeaway:** In a quadratic model the vertex has two numbers with two different jobs: the input tells you WHERE the extreme happens, the output tells you WHAT it is.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "model-classification",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // ── parabola-direction (4 questions) ──────────────────────────────
  {
    id: "bank-am-005",
    domain: "advanced-math",
    skills: ["parabola-direction"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In the $xy$-plane, the graph of $y = -\\dfrac{1}{4}x^2 + 6x - 11$ is a parabola. Which of the following correctly describes the direction in which the parabola opens, and why?",
    choices: [
      // distractor: reads the coefficient of $x$ instead of the coefficient of $x^2$
      { id: "A", text: "Upward, because the coefficient of $x$ is positive." },
      // distractor: reads the constant term instead of the leading coefficient
      { id: "B", text: "Upward, because the constant term is negative." },
      { id: "C", text: "Downward, because the coefficient of $x^2$ is negative." },
      // distractor: reaches the right direction from the wrong coefficient
      { id: "D", text: "Downward, because the constant term is negative." }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Parabola Direction**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Only the coefficient of $x^2$ controls direction. Here it is $-\\dfrac{1}{4} < 0$, so the parabola opens downward.\n\n**The Full Solution:**\nStep 1: Write the equation as $y = ax^2 + bx + c$ with $a = -\\dfrac{1}{4}$, $b = 6$, and $c = -11$.\nStep 2: A parabola opens upward when $a > 0$ and downward when $a < 0$. Neither $b$ nor $c$ affects the direction.\nStep 3: Since $a = -\\dfrac{1}{4} < 0$, the parabola opens downward. Check with two far-out inputs: $y(100) = -2500 + 600 - 11 < 0$ and $y(-100) = -2500 - 600 - 11 < 0$, so both arms fall. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: $b = 6$ is positive, but $b$ shifts the vertex sideways; it never flips the parabola.\n* Choice B: $c = -11$ is the $y$-intercept, not the leading coefficient.\n* Choice D: the direction is right but the reason is wrong — the constant term does not determine which way a parabola opens.\n\n**Test Day Takeaway:** Direction is decided by one number: the sign of the coefficient on $x^2$. Ignore everything else.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "parabola-orientation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-006",
    domain: "advanced-math",
    skills: ["parabola-direction"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A vehicle's fuel efficiency $E$, in miles per gallon, at a speed of $v$ miles per hour is modeled by $E(v) = -0.02v^2 + 2v + 6$. The graph of $E$ is shown. Does $E$ have a maximum value or a minimum value, and why?",
    diagram: { type: "parabola", params: { vertex: { h: 50, k: 56 }, a: -0.02, xRange: [0, 80], yRange: [0, 60], xTickInterval: 20, yTickInterval: 10, gridInterval: 10, showVertex: true } },
    choices: [
      { id: "A", text: "A maximum, because the coefficient of $v^2$ is negative." },
      // distractor: credits the constant term for the shape of the graph
      { id: "B", text: "A maximum, because the constant term $6$ is positive." },
      // distractor: reads the coefficient of $v$ and inverts the conclusion
      { id: "C", text: "A minimum, because the coefficient of $v$ is positive." },
      // distractor: treats the vertex's position as evidence of a minimum
      { id: "D", text: "A minimum, because the vertex lies to the right of the $E$-axis." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Max vs Min Reasoning**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The coefficient of $v^2$ is $-0.02 < 0$, so the parabola opens downward and its vertex is the highest point — a maximum.\n\n**The Full Solution:**\nStep 1: In $E(v) = -0.02v^2 + 2v + 6$, the leading coefficient is $a = -0.02$.\nStep 2: When $a < 0$ a parabola opens downward, so the vertex is the highest point of the graph and the function has a maximum value (and no minimum).\nStep 3: Locate it: $v = -\\dfrac{2}{2(-0.02)} = 50$ miles per hour, and $E(50) = -0.02(2500) + 100 + 6 = 56$ miles per gallon. Check a nearby speed: $E(40) = -32 + 80 + 6 = 54 < 56$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: the verdict is right, but $6$ is only $E(0)$ — the constant term never decides which way a parabola opens.\n* Choice C: $b = 2$ is positive, yet $b$ only slides the vertex; the sign of $a$ is what matters.\n* Choice D: the vertex does sit to the right of the vertical axis, but a downward parabola with a right-of-center vertex still has a maximum.\n\n**Test Day Takeaway:** Downward-opening ($a < 0$) means maximum; upward-opening ($a > 0$) means minimum. The verdict and the reason must both come from $a$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "max-min-reasoning",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-007",
    domain: "advanced-math",
    skills: ["parabola-direction"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the $xy$-plane, the graph of $y = (5 - k)x^2 + 8x + 3$ opens downward, where $k$ is a constant. Which of the following describes all possible values of $k$?",
    choices: [
      // distractor: solves the condition for opening UPWARD
      { id: "A", text: "$k < 5$" },
      { id: "B", text: "$k > 5$" },
      // distractor: moves $k$ across the inequality without changing its sign correctly
      { id: "C", text: "$k < -5$" },
      // distractor: only rules out the case where the graph stops being a parabola
      { id: "D", text: "$k \\neq 5$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Parameter Constraint on Leading Coefficient**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Downward means the leading coefficient is negative: $5 - k < 0$, so $k > 5$.\n\n**The Full Solution:**\nStep 1: The leading coefficient of $y = (5 - k)x^2 + 8x + 3$ is $5 - k$.\nStep 2: A parabola opens downward exactly when its leading coefficient is negative, so $5 - k < 0$.\nStep 3: Add $k$ to both sides: $5 < k$, that is, $k > 5$. Check with $k = 9$: the coefficient is $5 - 9 = -4 < 0$, and the graph opens downward. Check with $k = 1$: the coefficient is $4 > 0$, and it opens upward. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($k < 5$): this makes $5 - k > 0$, which is the upward-opening case.\n* Choice C ($k < -5$): this comes from solving $5 - k < 0$ as $-k < -5$ and then dropping the sign flip.\n* Choice D ($k \\neq 5$): $k = 5$ does have to be excluded — at $k = 5$ the graph is a line, not a parabola — but that alone allows values like $k = 1$, which open upward.\n\n**Test Day Takeaway:** When a parameter sits in the leading coefficient, translate the picture into one inequality about that whole coefficient, then solve it like any linear inequality.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "parameter-constraint",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-008",
    domain: "advanced-math",
    skills: ["parabola-direction", "vertex-form"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The function $C$ defined by $C(x) = 0.5(x - 6)^2 + 4$ gives the production cost, in dollars per unit, when $x$ thousand units are made. The graph of $y = C(x)$ is shown. Which of the following must be true?",
    diagram: { type: "parabola", params: { vertex: { h: 6, k: 4 }, a: 0.5, xRange: [0, 12], yRange: [0, 24], xTickInterval: 2, yTickInterval: 4, gridInterval: 2, showVertex: true } },
    choices: [
      // distractor: swaps the two vertex coordinates
      { id: "A", text: "The least cost per unit is $\\$6$, and it occurs when $x = 4$." },
      { id: "B", text: "The cost per unit is the same when $x = 2$ as it is when $x = 10$." },
      // distractor: reads the vertex output as the value at $x = 0$
      { id: "C", text: "The cost per unit is $\\$4$ when $x = 0$." },
      // distractor: assumes the curve keeps falling past the vertex
      { id: "D", text: "The cost per unit decreases as $x$ increases, for every $x > 0$." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Interpret Vertex Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The vertex is at $x = 6$, and $2$ and $10$ are each $4$ units from $6$. Equal distances from the axis of symmetry give equal outputs.\n\n**The Full Solution:**\nStep 1: In $C(x) = 0.5(x - 6)^2 + 4$ the vertex is $(6, 4)$, so the axis of symmetry is the vertical line $x = 6$ and the least cost per unit is $\\$4$ at $x = 6$.\nStep 2: A parabola takes the same value at inputs that are the same distance from its axis of symmetry. Since $6 - 2 = 4$ and $10 - 6 = 4$, the inputs $x = 2$ and $x = 10$ are a matched pair.\nStep 3: Confirm by computing: $C(2) = 0.5(-4)^2 + 4 = 8 + 4 = 12$ and $C(10) = 0.5(4)^2 + 4 = 8 + 4 = 12$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: it reverses the vertex — the minimum VALUE is $4$ dollars and it happens AT $x = 6$, not the other way around.\n* Choice C: $4$ is the minimum, not $C(0)$; in fact $C(0) = 0.5(36) + 4 = 22$ dollars per unit.\n* Choice D: the cost falls only until $x = 6$; past the vertex it rises again, as $C(10) = 12 > C(6) = 4$ shows.\n\n**Test Day Takeaway:** Vertex form hands you the axis of symmetry for free. Two inputs equally far from it always produce the same output — that is the fastest \"must be true\" to verify.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "vertex-form-interpretation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // ── finding-roots-factoring (5 questions) ─────────────────────────
  {
    id: "bank-am-009",
    domain: "advanced-math",
    skills: ["finding-roots-factoring"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In the equation $x^2 - 13x + 30 = 0$, the left side is the product of two binomials with integer constants. What are all solutions to this equation?",
    choices: [
      // distractor: keeps the signs of the numbers inside the factors instead of solving
      { id: "A", text: "$x = -10$ and $x = -3$" },
      // distractor: flips the sign of only one factor
      { id: "B", text: "$x = -3$ and $x = 10$" },
      { id: "C", text: "$x = 3$ and $x = 10$" },
      // distractor: pairs one true root with the constant term
      { id: "D", text: "$x = 3$ and $x = 30$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Factor and Solve**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Two numbers multiply to $30$ and add to $-13$: $-3$ and $-10$. So $(x - 3)(x - 10) = 0$ and $x = 3$ or $x = 10$.\n\n**The Full Solution:**\nStep 1: Factor $x^2 - 13x + 30$. The constant is positive and the middle coefficient is negative, so both numbers are negative: $(-3)(-10) = 30$ and $-3 + (-10) = -13$.\nStep 2: Write $(x - 3)(x - 10) = 0$.\nStep 3: Set each factor to zero: $x - 3 = 0$ gives $x = 3$, and $x - 10 = 0$ gives $x = 10$. Check $x = 3$: $9 - 39 + 30 = 0$. Check $x = 10$: $100 - 130 + 30 = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-10$ and $-3$): reports the numbers that appear inside the factors instead of the values that make each factor zero.\n* Choice B ($-3$ and $10$): flips the sign of one root only; then the product of the roots would be $-30$, not $30$.\n* Choice D ($3$ and $30$): keeps one correct root and grabs the constant term $30$ for the other.\n\n**Test Day Takeaway:** After factoring, the roots are the values that make each factor zero — the OPPOSITES of the numbers you see inside the parentheses.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "factor-and-solve",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-010",
    domain: "advanced-math",
    skills: ["finding-roots-factoring"],
    difficulty: "easy",
    type: "fill-in",
    question: "The equation $x^2 + 3x - 54 = 0$ has two solutions. What is the positive solution to this equation?",
    correctAnswer: "6",
    explanation: "**SAT Pattern: Factor and Solve (Fill-in)**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~15s):** Two numbers multiply to $-54$ and add to $3$: $9$ and $-6$. So $(x + 9)(x - 6) = 0$, and the positive root is $6$.\n\n**The Full Solution:**\nStep 1: The constant $-54$ is negative, so the two numbers have opposite signs, and their sum is $+3$, so the positive one is larger in size.\nStep 2: $9 \\cdot (-6) = -54$ and $9 + (-6) = 3$, so $x^2 + 3x - 54 = (x + 9)(x - 6)$.\nStep 3: Setting each factor to zero gives $x = -9$ and $x = 6$. The positive solution is $6$. Check: $36 + 18 - 54 = 0$. $\\checkmark$\n\n**Common Mistakes:** Reporting $-9$, which is the other (negative) solution. Mis-signing the binomials as $(x - 9)(x + 6)$ and answering $9$ — but that product expands to $x^2 - 3x - 54$, with the wrong middle term.\n\n**Test Day Takeaway:** With a negative constant, the two factor numbers have opposite signs; the sign of the middle coefficient tells you which one is larger in absolute value.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "factor-and-solve",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-011",
    domain: "advanced-math",
    skills: ["finding-roots-factoring"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The function $f$ is defined by $f(x) = 3x^2 - 11x - 20$. What are all values of $x$ for which $f(x) = 0$?",
    choices: [
      { id: "A", text: "$x = -\\dfrac{4}{3}$ and $x = 5$" },
      // distractor: inverts the fraction from the factor $3x + 4$
      { id: "B", text: "$x = -\\dfrac{3}{4}$ and $x = 5$" },
      // distractor: flips the sign of both roots
      { id: "C", text: "$x = \\dfrac{4}{3}$ and $x = -5$" },
      // distractor: forgets to divide by the leading coefficient in $3x + 4 = 0$
      { id: "D", text: "$x = -4$ and $x = 5$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Factor with Leading Coefficient ≠ 1**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Split $-11x$ using $-15$ and $+4$ (product $3 \\cdot (-20) = -60$): $3x^2 - 15x + 4x - 20 = (3x + 4)(x - 5)$, so $x = -\\dfrac{4}{3}$ or $x = 5$.\n\n**The Full Solution:**\nStep 1: Multiply the leading coefficient by the constant: $3(-20) = -60$. Find two numbers with product $-60$ and sum $-11$: $-15$ and $4$.\nStep 2: Rewrite and group: $3x^2 - 15x + 4x - 20 = 3x(x - 5) + 4(x - 5) = (3x + 4)(x - 5)$.\nStep 3: Set each factor to zero. $3x + 4 = 0$ gives $x = -\\dfrac{4}{3}$; $x - 5 = 0$ gives $x = 5$. Check $x = -\\dfrac{4}{3}$: $3\\left(\\dfrac{16}{9}\\right) + \\dfrac{44}{3} - 20 = \\dfrac{16}{3} + \\dfrac{44}{3} - 20 = 20 - 20 = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-\\dfrac{3}{4}$ and $5$): reverses the fraction — solving $3x + 4 = 0$ gives $-\\dfrac{4}{3}$, not $-\\dfrac{3}{4}$.\n* Choice C ($\\dfrac{4}{3}$ and $-5$): flips both signs; then $f(-5) = 75 + 55 - 20 \\neq 0$.\n* Choice D ($-4$ and $5$): reads $3x + 4 = 0$ as $x = -4$, skipping the division by $3$.\n\n**Test Day Takeaway:** When the leading coefficient is not $1$, one root is a fraction. Solve each factor as its own tiny linear equation instead of reading numbers off the parentheses.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "factor-and-solve",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-012",
    domain: "advanced-math",
    skills: ["finding-roots-factoring"],
    difficulty: "medium",
    type: "fill-in",
    question: "A rectangular photographic print has width $(x - 2)$ inches and height $(x + 5)$ inches. The area of the print is $60$ square inches. What is the value of $x$?",
    correctAnswer: "7",
    explanation: "**SAT Pattern: Area Equation to Quadratic**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~30s):** $(x - 2)(x + 5) = 60$ becomes $x^2 + 3x - 70 = 0$, or $(x + 10)(x - 7) = 0$. Only $x = 7$ gives positive side lengths.\n\n**The Full Solution:**\nStep 1: Area is width times height: $(x - 2)(x + 5) = 60$.\nStep 2: Expand and move everything to one side: $x^2 + 3x - 10 = 60$, so $x^2 + 3x - 70 = 0$.\nStep 3: Factor: $(x + 10)(x - 7) = 0$, so $x = -10$ or $x = 7$. A width of $x - 2$ must be positive, which rules out $x = -10$. Check $x = 7$: the print is $5$ inches by $12$ inches, and $5 \\cdot 12 = 60$. $\\checkmark$\n\n**Common Mistakes:** Reporting $-10$, which makes both dimensions negative. Forgetting to subtract $60$ and solving $x^2 + 3x - 10 = 0$ instead, which gives $x = 2$ — a width of $0$ inches.\n\n**Test Day Takeaway:** Set the product equal to the area, move the area across so one side is $0$, then throw out any root that makes a length zero or negative.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "area-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-013",
    domain: "advanced-math",
    skills: ["finding-roots-factoring"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the quadratic equation $5x^2 + kx - 12 = 0$, $k$ is a constant and the equation has two solutions. One of the solutions is $x = -3$. What is the other solution?",
    choices: [
      // distractor: reports the product of the roots instead of dividing it by the known root
      { id: "A", text: "$-\\dfrac{12}{5}$" },
      // distractor: divides the product of the roots by $3$ instead of by $-3$
      { id: "B", text: "$-\\dfrac{4}{5}$" },
      { id: "C", text: "$\\dfrac{4}{5}$" },
      // distractor: reports $\frac{k}{5}$ after finding $k = 11$
      { id: "D", text: "$\\dfrac{11}{5}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Back-Solve Parameter, Then Find Other Root**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** The product of the roots is $\\dfrac{-12}{5}$. Dividing by the known root: $\\dfrac{-12/5}{-3} = \\dfrac{4}{5}$ — and $k$ is never needed.\n\n**The Full Solution:**\nStep 1: Substitute $x = -3$ to find $k$: $5(9) + k(-3) - 12 = 0$, so $45 - 3k - 12 = 0$ and $3k = 33$, giving $k = 11$.\nStep 2: The equation is $5x^2 + 11x - 12 = 0$. For $ax^2 + bx + c = 0$ the product of the roots is $\\dfrac{c}{a} = \\dfrac{-12}{5}$.\nStep 3: If one root is $-3$ and the product is $-\\dfrac{12}{5}$, the other root is $\\dfrac{-12/5}{-3} = \\dfrac{4}{5}$. Check: $5\\left(\\dfrac{16}{25}\\right) + 11\\left(\\dfrac{4}{5}\\right) - 12 = \\dfrac{16}{5} + \\dfrac{44}{5} - 12 = 12 - 12 = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\dfrac{12}{5}$): this is $\\dfrac{c}{a}$, the PRODUCT of the two roots, not the second root.\n* Choice B ($-\\dfrac{4}{5}$): divides $-\\dfrac{12}{5}$ by $3$ rather than by $-3$, losing a sign.\n* Choice D ($\\dfrac{11}{5}$): finds $k = 11$ correctly and then reports $\\dfrac{k}{a}$, mistaking the parameter for the answer.\n\n**Test Day Takeaway:** Once one root is known, $\\dfrac{c}{a}$ (product) or $-\\dfrac{b}{a}$ (sum) delivers the other root in a single division or subtraction.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "back-solve-parameter",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // ── roots-from-factors (4 questions) ──────────────────────────────
  {
    id: "bank-am-014",
    domain: "advanced-math",
    skills: ["roots-from-factors"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In the $xy$-plane, the graph of $y = (x + 9)(x - 4)$ crosses the $x$-axis at two points. What are the $x$-coordinates of those two points?",
    choices: [
      // distractor: keeps the sign of $-4$ instead of solving $x - 4 = 0$
      { id: "A", text: "$-9$ and $-4$" },
      { id: "B", text: "$-9$ and $4$" },
      // distractor: flips the sign of both numbers
      { id: "C", text: "$-4$ and $9$" },
      // distractor: reads the numbers inside the parentheses as the roots
      { id: "D", text: "$4$ and $9$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Zero Product Property**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The graph meets the $x$-axis where $y = 0$, so $(x + 9)(x - 4) = 0$ and $x = -9$ or $x = 4$.\n\n**The Full Solution:**\nStep 1: A point on the $x$-axis has $y = 0$, so set $(x + 9)(x - 4) = 0$.\nStep 2: A product is zero only when a factor is zero: $x + 9 = 0$ or $x - 4 = 0$.\nStep 3: Solving gives $x = -9$ and $x = 4$. Check $x = -9$: $(0)(-13) = 0$. Check $x = 4$: $(13)(0) = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-9$ and $-4$): solves the first factor correctly but copies the $-4$ straight out of the second.\n* Choice C ($-4$ and $9$): flips both signs, which would come from the factors $(x + 4)(x - 9)$.\n* Choice D ($4$ and $9$): reads $9$ and $4$ off the parentheses without changing signs.\n\n**Test Day Takeaway:** Each factor contributes one root, and that root is the value that makes the factor zero — so the sign always flips.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "zero-product-property",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-015",
    domain: "advanced-math",
    skills: ["roots-from-factors"],
    difficulty: "easy",
    type: "fill-in",
    question: "The equation $(x - 13)(x + 6) = 0$ has two solutions. What is the sum of the two solutions?",
    correctAnswer: "7",
    explanation: "**SAT Pattern: Sum of Roots from Factors**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~10s):** The roots are $13$ and $-6$, so their sum is $13 + (-6) = 7$.\n\n**The Full Solution:**\nStep 1: A product equals zero only when one of its factors is zero, so $x - 13 = 0$ or $x + 6 = 0$.\nStep 2: The solutions are $x = 13$ and $x = -6$.\nStep 3: Their sum is $13 + (-6) = 7$. Check with the expanded form: $(x - 13)(x + 6) = x^2 - 7x - 78$, and the sum of the roots is $-\\dfrac{b}{a} = -\\dfrac{-7}{1} = 7$. $\\checkmark$\n\n**Common Mistakes:** Adding the numbers as they appear in the parentheses, $-13 + 6 = -7$, instead of the actual roots. Reporting the PRODUCT of the roots, $13 \\cdot (-6) = -78$, when the question asks for the sum.\n\n**Test Day Takeaway:** Flip the sign inside each factor to get the roots, then read the question once more — sum and product are different requests.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "zero-product-property",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-016",
    domain: "advanced-math",
    skills: ["roots-from-factors"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The solutions to the equation $(4x - 3)(2x + 7) = 0$ are $x = r$ and $x = s$. What is the value of $rs$?",
    choices: [
      // distractor: multiplies the constants $3$ and $-7$ as if the roots were $3$ and $-7$
      { id: "A", text: "$-21$" },
      // distractor: reports the SUM of the roots instead of their product
      { id: "B", text: "$-\\dfrac{11}{4}$" },
      { id: "C", text: "$-\\dfrac{21}{8}$" },
      // distractor: drops the negative sign from the product
      { id: "D", text: "$\\dfrac{21}{8}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Product of Roots from Factors**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The roots are $\\dfrac{3}{4}$ and $-\\dfrac{7}{2}$, so $rs = \\dfrac{3}{4} \\cdot \\left(-\\dfrac{7}{2}\\right) = -\\dfrac{21}{8}$.\n\n**The Full Solution:**\nStep 1: Set each factor to zero: $4x - 3 = 0$ gives $x = \\dfrac{3}{4}$, and $2x + 7 = 0$ gives $x = -\\dfrac{7}{2}$.\nStep 2: Multiply the two roots: $\\dfrac{3}{4} \\cdot \\left(-\\dfrac{7}{2}\\right) = -\\dfrac{21}{8}$.\nStep 3: Confirm with the expanded equation. $(4x - 3)(2x + 7) = 8x^2 + 22x - 21$, and the product of the roots of $ax^2 + bx + c = 0$ is $\\dfrac{c}{a} = \\dfrac{-21}{8}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-21$): multiplies the constants $3$ and $-7$ straight from the parentheses, ignoring the coefficients $4$ and $2$.\n* Choice B ($-\\dfrac{11}{4}$): this is $\\dfrac{3}{4} + \\left(-\\dfrac{7}{2}\\right)$, the sum of the roots, not the product.\n* Choice D ($\\dfrac{21}{8}$): loses the negative sign, which would require both roots to have the same sign.\n\n**Test Day Takeaway:** Solve each factor for its own root before combining. Alternatively, expand once and read $\\dfrac{c}{a}$ for the product and $-\\dfrac{b}{a}$ for the sum.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "root-product",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-017",
    domain: "advanced-math",
    skills: ["roots-from-factors"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The expression $10x^2 + 11x - 6$ can be written as the product of two binomials, one of which is $(5x - 2)$. What is the other binomial factor, and what is the sum of the solutions to $10x^2 + 11x - 6 = 0$?",
    choices: [
      { id: "A", text: "$(2x + 3)$ and $-\\dfrac{11}{10}$" },
      // distractor: flips the sign inside the second factor, which changes the constant term to $+6$
      { id: "B", text: "$(2x - 3)$ and $-\\dfrac{11}{10}$" },
      // distractor: drops the negative sign in $-\frac{b}{a}$
      { id: "C", text: "$(2x + 3)$ and $\\dfrac{11}{10}$" },
      // distractor: reports $\frac{c}{a}$, the product of the roots, instead of the sum
      { id: "D", text: "$(2x + 3)$ and $-\\dfrac{3}{5}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Factor Division + Vieta's**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** The leading terms force $5x \\cdot 2x = 10x^2$ and the constants force $(-2)(3) = -6$, so the other factor is $(2x + 3)$. The sum of the roots is $-\\dfrac{b}{a} = -\\dfrac{11}{10}$.\n\n**The Full Solution:**\nStep 1: Write $10x^2 + 11x - 6 = (5x - 2)(px + q)$. Matching the $x^2$ terms gives $5p = 10$, so $p = 2$; matching the constants gives $-2q = -6$, so $q = 3$.\nStep 2: Check the middle term: $(5x - 2)(2x + 3) = 10x^2 + 15x - 4x - 6 = 10x^2 + 11x - 6$. $\\checkmark$\nStep 3: The roots are $x = \\dfrac{2}{5}$ and $x = -\\dfrac{3}{2}$, and their sum is $\\dfrac{4}{10} - \\dfrac{15}{10} = -\\dfrac{11}{10}$, which matches $-\\dfrac{b}{a} = -\\dfrac{11}{10}$.\n\n**Why the wrong answers are tempting:**\n* Choice B: with $(2x - 3)$ the constant term would be $(-2)(-3) = +6$, not $-6$.\n* Choice C: the factor is right, but the sum of the roots is $-\\dfrac{b}{a}$, and $b = 11$ is positive, so the sum is negative.\n* Choice D ($-\\dfrac{3}{5}$): this is $\\dfrac{c}{a} = \\dfrac{-6}{10}$, the product of the roots, not the sum.\n\n**Test Day Takeaway:** Recover a missing factor by matching the leading and constant terms, then verify with the middle term. For the sum of the roots, $-\\dfrac{b}{a}$ beats solving.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "factor-division-vieta",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // ── vertex-formula (5 questions) ──────────────────────────────────
  {
    id: "bank-am-018",
    domain: "advanced-math",
    skills: ["vertex-formula"],
    difficulty: "easy",
    type: "fill-in",
    question: "In the $xy$-plane, the graph of $y = x^2 - 16x + 55$ is a parabola. What is the $x$-coordinate of the vertex of this parabola?",
    correctAnswer: "8",
    explanation: "**SAT Pattern: Vertex x-coordinate Formula**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~10s):** $x = -\\dfrac{b}{2a} = -\\dfrac{-16}{2(1)} = 8$.\n\n**The Full Solution:**\nStep 1: Read the coefficients from $y = ax^2 + bx + c$: $a = 1$, $b = -16$, $c = 55$.\nStep 2: The vertex of a parabola lies on its axis of symmetry, $x = -\\dfrac{b}{2a}$.\nStep 3: $x = -\\dfrac{-16}{2(1)} = \\dfrac{16}{2} = 8$. Check with symmetry: $y(7) = 49 - 112 + 55 = -8$ and $y(9) = 81 - 144 + 55 = -8$, equal values on either side of $x = 8$. $\\checkmark$\n\n**Common Mistakes:** Reporting $-8$ by using $\\dfrac{b}{2a}$ and forgetting the leading negative sign. Reporting $16$ or $-16$ by stopping at $b$ without dividing by $2a$.\n\n**Test Day Takeaway:** The axis of symmetry is $x = -\\dfrac{b}{2a}$; the minus sign is part of the formula, so a negative $b$ produces a positive vertex.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "vertex-coordinate",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-019",
    domain: "advanced-math",
    skills: ["vertex-formula"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The table shows the value of the quadratic function $f$ at five values of $x$. In the $xy$-plane, what is the vertex of the graph of $y = f(x)$?",
    diagram: { type: "dataTable", params: { headers: ["x", "f(x)"], rows: [["1", "0"], ["2", "-3"], ["3", "-4"], ["4", "-3"], ["5", "0"]] } },
    choices: [
      // distractor: reports the first $x$-intercept listed in the table
      { id: "A", text: "$(1, 0)$" },
      { id: "B", text: "$(3, -4)$" },
      // distractor: reverses the coordinates of the vertex
      { id: "C", text: "$(-4, 3)$" },
      // distractor: reports the other $x$-intercept, the largest $x$ in the table
      { id: "D", text: "$(5, 0)$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Vertex Coordinates**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The outputs fall to $-4$ at $x = 3$ and rise again symmetrically, so the vertex is $(3, -4)$.\n\n**The Full Solution:**\nStep 1: A quadratic function is symmetric about the vertical line through its vertex. In the table, $f(2) = f(4) = -3$ and $f(1) = f(5) = 0$, so the axis of symmetry is halfway between each pair: $x = 3$.\nStep 2: The vertex sits on that axis, so its $x$-coordinate is $3$ and its $y$-coordinate is $f(3) = -4$.\nStep 3: The vertex is $(3, -4)$, and because the outputs are larger on both sides of $x = 3$, it is a minimum. Check: the values $0, -3, -4, -3, 0$ mirror across the middle entry. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(1, 0)$): this is where the graph crosses the $x$-axis, not where it turns.\n* Choice C ($(-4, 3)$): the two vertex coordinates are swapped and one sign is carried along with them.\n* Choice D ($(5, 0)$): the other $x$-intercept — the last row of the table, not the middle one.\n\n**Test Day Takeaway:** In a table of a quadratic, the vertex is the row where the outputs stop falling and start rising; matched outputs on either side confirm the axis of symmetry.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "vertex-coordinate",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-020",
    domain: "advanced-math",
    skills: ["vertex-formula"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The height, in feet, of a model rocket $t$ seconds after launch is $h(t) = -16t^2 + 96t + 5$. The table gives the rocket's height at four times. At what time, in seconds, does the rocket reach its greatest height?",
    diagram: { type: "dataTable", params: { headers: ["Time t (seconds)", "Height h(t) (feet)"], rows: [["1", "85"], ["2", "133"], ["4", "133"], ["5", "85"]] } },
    choices: [
      // distractor: picks the earlier of the two tied rows instead of the midpoint
      { id: "A", text: "$2$" },
      { id: "B", text: "$3$" },
      // distractor: picks the later of the two tied rows instead of the midpoint
      { id: "C", text: "$4$" },
      // distractor: computes $-\frac{b}{a} = \frac{96}{16}$, dropping the $2$
      { id: "D", text: "$6$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Vertex Time for Projectile Motion**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $t = -\\dfrac{b}{2a} = -\\dfrac{96}{2(-16)} = 3$ seconds — also the midpoint of the tied heights at $t = 2$ and $t = 4$.\n\n**The Full Solution:**\nStep 1: The model is quadratic with $a = -16 < 0$, so the graph is a downward parabola and the greatest height occurs at the vertex.\nStep 2: The vertex time is $t = -\\dfrac{b}{2a} = -\\dfrac{96}{-32} = 3$ seconds.\nStep 3: The table confirms it: $h(2) = h(4) = 133$ feet, and equal heights sit at equal distances from the axis of symmetry, so the axis is at $t = \\dfrac{2 + 4}{2} = 3$. Check: $h(3) = -144 + 288 + 5 = 149 > 133$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): the greatest height IN THE TABLE is tied at $t = 2$ and $t = 4$; picking the first of them misses the true peak between them.\n* Choice C ($4$): same trap from the other end of the tie.\n* Choice D ($6$): uses $\\dfrac{96}{16}$, forgetting the $2$ in $-\\dfrac{b}{2a}$ — that is when the rocket returns near its launch height, not its peak.\n\n**Test Day Takeaway:** Two equal outputs bracket the vertex; the vertex time is their average, which must agree with $-\\dfrac{b}{2a}$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "vertex-application",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-021",
    domain: "advanced-math",
    skills: ["vertex-formula"],
    difficulty: "medium",
    type: "fill-in",
    question: "A workshop's weekly profit, in dollars, is modeled by $P(n) = -3n^2 + 72n - 180$, where $n$ is the number of chairs built that week. What is the greatest weekly profit, in dollars, this model predicts?",
    correctAnswer: "252",
    explanation: "**SAT Pattern: Max Profit via Vertex**\n\n**The correct answer is $252$.**\n\n**The Fast Way (~25s):** The peak is at $n = -\\dfrac{72}{2(-3)} = 12$, and $P(12) = -432 + 864 - 180 = 252$ dollars.\n\n**The Full Solution:**\nStep 1: The leading coefficient $-3$ is negative, so the parabola opens downward and the vertex gives the greatest profit.\nStep 2: The vertex input is $n = -\\dfrac{b}{2a} = -\\dfrac{72}{-6} = 12$ chairs.\nStep 3: Evaluate: $P(12) = -3(144) + 72(12) - 180 = -432 + 864 - 180 = 252$. Check a neighbor: $P(11) = -363 + 792 - 180 = 249 < 252$. $\\checkmark$\n\n**Common Mistakes:** Reporting $12$, the number of chairs at which the maximum occurs, instead of the profit itself. Losing the sign in $-\\frac{b}{2a}$ and evaluating $P(-12) = -432 - 864 - 180 = -1{,}476$.\n\n**Test Day Takeaway:** \"How much\" wants the vertex's OUTPUT, so finding $-\\dfrac{b}{2a}$ is only half the work — substitute it back in.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "vertex-application",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-022",
    domain: "advanced-math",
    skills: ["vertex-formula"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the $xy$-plane, the vertex of the graph of $y = 2x^2 + bx + 50$ lies on the $x$-axis, where $b$ is a constant. Which of the following could be the value of $b$?",
    choices: [
      // distractor: sets the vertex's $x$-coordinate to zero instead of its $y$-coordinate
      { id: "A", text: "$0$" },
      // distractor: uses $b^2 = ac$, dropping the factor of $4$
      { id: "B", text: "$10$" },
      { id: "C", text: "$20$" },
      // distractor: finds $4ac = 400$ but never takes the square root
      { id: "D", text: "$400$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Vertex Constraint via Discriminant**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** A vertex on the $x$-axis means one repeated root, so $b^2 - 4ac = 0$: $b^2 = 4(2)(50) = 400$ and $b = 20$ (or $-20$).\n\n**The Full Solution:**\nStep 1: The vertex lies on the $x$-axis exactly when the parabola touches the axis at a single point, so $2x^2 + bx + 50 = 0$ has exactly one real solution.\nStep 2: One real solution means the discriminant is zero: $b^2 - 4(2)(50) = 0$, so $b^2 = 400$.\nStep 3: Then $b = 20$ or $b = -20$; of these, $20$ appears among the choices. Check: $2x^2 + 20x + 50 = 2(x + 5)^2$, whose only zero is $x = -5$, and the vertex $(-5, 0)$ is on the $x$-axis. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0$): $b = 0$ puts the vertex ON the $y$-axis at $(0, 50)$, which is nowhere near the $x$-axis.\n* Choice B ($10$): comes from $b^2 = ac = 2(50) = 100$, which drops the $4$ in $b^2 = 4ac$.\n* Choice D ($400$): this is $4ac$ itself; the square root step is missing.\n\n**Test Day Takeaway:** \"Vertex on the $x$-axis\", \"exactly one solution\", and \"perfect square trinomial\" are three names for $b^2 - 4ac = 0$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "vertex-constraint",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // ── vertex-form (4 questions) ─────────────────────────────────────
  {
    id: "bank-am-023",
    domain: "advanced-math",
    skills: ["vertex-form"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The function $g$ is defined by $g(x) = -4(x + 7)^2 + 11$. In the $xy$-plane, what is the vertex of the graph of $y = g(x)$?",
    choices: [
      { id: "A", text: "$(-7, 11)$" },
      // distractor: flips the sign of $k$
      { id: "B", text: "$(-7, -11)$" },
      // distractor: reads $x + 7$ as $h = 7$ instead of $h = -7$
      { id: "C", text: "$(7, 11)$" },
      // distractor: reverses the two coordinates
      { id: "D", text: "$(11, -7)$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Read Vertex Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Vertex form $a(x - h)^2 + k$ has vertex $(h, k)$. Here $x + 7 = x - (-7)$, so the vertex is $(-7, 11)$.\n\n**The Full Solution:**\nStep 1: Match $g(x) = -4(x + 7)^2 + 11$ to $a(x - h)^2 + k$. Rewrite $x + 7$ as $x - (-7)$, so $h = -7$ and $k = 11$.\nStep 2: The vertex is $(h, k) = (-7, 11)$.\nStep 3: Check: $g(-7) = -4(0)^2 + 11 = 11$, and since $a = -4 < 0$ every other input gives a smaller output, for example $g(-6) = -4 + 11 = 7$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($(-7, -11)$): negates $k$; the $+11$ is added, not subtracted.\n* Choice C ($(7, 11)$): reads the $7$ straight out of $(x + 7)$ without flipping its sign.\n* Choice D ($(11, -7)$): swaps the coordinates, reporting the output first.\n\n**Test Day Takeaway:** In $a(x - h)^2 + k$ the $h$ flips sign and the $k$ does not — $(x + 7)$ means the vertex sits at $x = -7$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "read-vertex-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-024",
    domain: "advanced-math",
    skills: ["vertex-form"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The parabola shown in the $xy$-plane is the graph of the function $f$. Its vertex is $(2, -9)$, and it passes through the point $(5, 0)$. Which equation defines $f$?",
    diagram: { type: "quadraticVertex", params: { vertex: [2, -9], a: 1, showPoints: [[5, 0], [-1, 0]], showVertex: true } },
    choices: [
      { id: "A", text: "$f(x) = (x - 2)^2 - 9$" },
      // distractor: flips the sign of $h$, moving the vertex to $x = -2$
      { id: "B", text: "$f(x) = (x + 2)^2 - 9$" },
      // distractor: flips the sign of $k$, moving the vertex above the $x$-axis
      { id: "C", text: "$f(x) = (x - 2)^2 + 9$" },
      // distractor: divides $9$ by $5 - 2 = 3$ instead of by $(5 - 2)^2 = 9$
      { id: "D", text: "$f(x) = 3(x - 2)^2 - 9$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Construct Vertex Form from Conditions**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Vertex $(2, -9)$ gives $f(x) = a(x - 2)^2 - 9$. Substituting $(5, 0)$: $0 = 9a - 9$, so $a = 1$.\n\n**The Full Solution:**\nStep 1: Vertex form is $f(x) = a(x - h)^2 + k$ with vertex $(h, k)$. The graphed vertex is $(2, -9)$, so $f(x) = a(x - 2)^2 - 9$.\nStep 2: Use the second marked point to pin down $a$: $0 = a(5 - 2)^2 - 9 = 9a - 9$, so $a = 1$.\nStep 3: Therefore $f(x) = (x - 2)^2 - 9$. Check the other marked point: $f(-1) = (-3)^2 - 9 = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: $(x + 2)^2$ places the vertex at $x = -2$, but the graph turns at $x = 2$.\n* Choice C: $+9$ raises the vertex to $(2, 9)$, a graph that never reaches the $x$-axis.\n* Choice D: solves $9 = a(5 - 2)$ instead of $9 = a(5 - 2)^2$, forgetting to square the horizontal difference.\n\n**Test Day Takeaway:** Read $h$ and $k$ from the vertex first, then force the curve through one more point — and remember to square the horizontal difference before dividing.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "construct-vertex-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-025",
    domain: "advanced-math",
    skills: ["vertex-form", "converting-quadratic-forms"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The function $f$ is defined by $f(x) = x^2 + 12x + 41$. Which of the following equivalent forms of $f(x)$ displays the coordinates of the vertex of the graph of $y = f(x)$ as constants?",
    choices: [
      { id: "A", text: "$(x + 6)^2 + 5$" },
      // distractor: subtracts the leftover constant instead of adding it
      { id: "B", text: "$(x + 6)^2 - 5$" },
      // distractor: forgets to remove the $36$ that completing the square adds
      { id: "C", text: "$(x + 6)^2 + 41$" },
      // distractor: uses $b$ rather than $\frac{b}{2}$ inside the square
      { id: "D", text: "$(x + 12)^2 + 41$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Complete the Square (Vertex Form)**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Half of $12$ is $6$, and $6^2 = 36$: $x^2 + 12x + 41 = (x + 6)^2 + (41 - 36) = (x + 6)^2 + 5$.\n\n**The Full Solution:**\nStep 1: To complete the square on $x^2 + 12x$, take half the coefficient of $x$: $\\dfrac{12}{2} = 6$, then square it: $36$.\nStep 2: Write $x^2 + 12x + 41 = (x^2 + 12x + 36) + 41 - 36$, since adding $36$ inside requires subtracting $36$ outside.\nStep 3: This is $(x + 6)^2 + 5$, so the vertex is $(-6, 5)$. Check by expanding: $(x + 6)^2 + 5 = x^2 + 12x + 36 + 5 = x^2 + 12x + 41$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: expands to $x^2 + 12x + 31$ — the leftover $41 - 36 = 5$ is added, not subtracted.\n* Choice C: expands to $x^2 + 12x + 77$; the $36$ introduced by the square was never compensated for.\n* Choice D: uses the full $12$ inside the parentheses, which expands to $x^2 + 24x + 185$.\n\n**Test Day Takeaway:** Completing the square adds $\\left(\\dfrac{b}{2}\\right)^2$ inside, so subtract the same amount outside — then expand once to confirm.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "complete-the-square",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-026",
    domain: "advanced-math",
    skills: ["vertex-form"],
    difficulty: "hard",
    type: "fill-in",
    question: "The function $h$ is defined by $h(x) = 3(x - 5)^2 + c$, where $c$ is a constant. The graph of $y = h(x)$ in the $xy$-plane passes through the point $(2, 40)$. What is the minimum value of $h$?",
    correctAnswer: "13",
    explanation: "**SAT Pattern: Read Minimum from Vertex Form**\n\n**The correct answer is $13$.**\n\n**The Fast Way (~30s):** $40 = 3(2 - 5)^2 + c = 27 + c$, so $c = 13$; in vertex form the minimum value IS $c$.\n\n**The Full Solution:**\nStep 1: Substitute the given point into $h(x) = 3(x - 5)^2 + c$: $40 = 3(2 - 5)^2 + c$.\nStep 2: Simplify: $(2 - 5)^2 = 9$, so $40 = 27 + c$ and $c = 13$.\nStep 3: Since $3 > 0$, the squared term is never negative and is $0$ only at $x = 5$. The minimum value is therefore $h(5) = 0 + 13 = 13$. Check: $h(2) = 3(9) + 13 = 40$, as given. $\\checkmark$\n\n**Common Mistakes:** Reporting $5$, the input where the minimum occurs, instead of the minimum value. Reporting $40$, the output at the given point. Forgetting to square $(2 - 5)$ and solving $3(-3) + c = 40$, which gives $c = 49$.\n\n**Test Day Takeaway:** In $a(x - h)^2 + k$ with $a > 0$, the minimum value is $k$ — so a question about the minimum really asks for the constant term outside the square.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "vertex-form-interpretation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // ── discriminant-analysis (5 questions) ───────────────────────────
  {
    id: "bank-am-027",
    domain: "advanced-math",
    skills: ["discriminant-analysis"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The equation $2x^2 - 5x + 9 = 0$ is given. How many distinct real solutions does this equation have?",
    choices: [
      { id: "A", text: "Zero" },
      // distractor: the count for a discriminant of exactly $0$
      { id: "B", text: "Exactly one" },
      // distractor: the count for a positive discriminant
      { id: "C", text: "Exactly two" },
      // distractor: no quadratic equation with $a \neq 0$ has infinitely many solutions
      { id: "D", text: "Infinitely many" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Count Real Solutions via Discriminant**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $b^2 - 4ac = (-5)^2 - 4(2)(9) = 25 - 72 = -47 < 0$, so there are no real solutions.\n\n**The Full Solution:**\nStep 1: Identify $a = 2$, $b = -5$, $c = 9$.\nStep 2: Compute the discriminant: $b^2 - 4ac = 25 - 72 = -47$.\nStep 3: A negative discriminant means the quadratic formula would require the square root of a negative number, so the equation has zero real solutions. Check graphically: the parabola opens upward and its minimum value is $9 - \\dfrac{25}{8} > 0$, so it never touches the $x$-axis. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: exactly one real solution requires $b^2 - 4ac = 0$, but here it is $-47$.\n* Choice C: two real solutions requires a positive discriminant; a student who computes $25 + 72$ instead of $25 - 72$ lands here.\n* Choice D: a quadratic equation with $a \\neq 0$ has at most two solutions, never infinitely many.\n\n**Test Day Takeaway:** Compute $b^2 - 4ac$ and read its SIGN: negative means none, zero means one, positive means two.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "discriminant-count",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-028",
    domain: "advanced-math",
    skills: ["discriminant-analysis"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "What is the value of the discriminant of the quadratic equation $3x^2 - 12x + 7 = 0$?",
    choices: [
      { id: "A", text: "$60$" },
      // distractor: omits the leading coefficient, computing $144 - 4(7)$
      { id: "B", text: "$116$" },
      // distractor: stops at $b^2$ and never subtracts $4ac$
      { id: "C", text: "$144$" },
      // distractor: adds $4ac$ instead of subtracting it
      { id: "D", text: "$228$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Compute Discriminant**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $b^2 - 4ac = (-12)^2 - 4(3)(7) = 144 - 84 = 60$.\n\n**The Full Solution:**\nStep 1: Match the equation to $ax^2 + bx + c = 0$: $a = 3$, $b = -12$, $c = 7$.\nStep 2: Square $b$: $(-12)^2 = 144$. The square removes the negative sign.\nStep 3: Subtract $4ac$: $4(3)(7) = 84$, so the discriminant is $144 - 84 = 60$. Since $60 > 0$, the equation has two real solutions. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($116$): computes $144 - 4(7) = 116$, leaving the leading coefficient $3$ out of $4ac$.\n* Choice C ($144$): reports $b^2$ alone, skipping the $-4ac$ term entirely.\n* Choice D ($228$): computes $144 + 84$, treating the discriminant as a sum.\n\n**Test Day Takeaway:** The discriminant is $b^2 - 4ac$ — three numbers, one square, one product, one subtraction. Substitute all three coefficients, signs included.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "discriminant-compute",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-029",
    domain: "advanced-math",
    skills: ["discriminant-analysis"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the equation $x^2 - 14x + c = 0$, $c$ is a constant. In the $xy$-plane, the graph of $y = x^2 - 14x + c$ intersects the $x$-axis at exactly one point. What is the value of $c$?",
    choices: [
      // distractor: reports $-\frac{b}{2} = 7$, the $x$-coordinate of the single intersection point
      { id: "A", text: "$7$" },
      // distractor: reports $|b|$ without using the discriminant
      { id: "B", text: "$14$" },
      { id: "C", text: "$49$" },
      // distractor: sets $c = b^2$, dropping the factor of $4a$
      { id: "D", text: "$196$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Parameter for Discriminant = 0**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** One intersection point means one repeated root, so $b^2 - 4ac = 0$: $196 - 4c = 0$ and $c = 49$.\n\n**The Full Solution:**\nStep 1: The graph meets the $x$-axis where $y = 0$, so the number of intersection points equals the number of real solutions of $x^2 - 14x + c = 0$. Here $a = 1$ and $b = -14$.\nStep 2: One intersection point means one repeated real solution, which happens exactly when the discriminant is zero: $(-14)^2 - 4(1)c = 0$, so $196 - 4c = 0$.\nStep 3: Solve: $4c = 196$, so $c = 49$. Check: $x^2 - 14x + 49 = (x - 7)^2$, whose only zero is $x = 7$, so the graph touches the axis at the single point $(7, 0)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): $7$ is where the graph touches the axis, not the constant term that puts it there.\n* Choice B ($14$): copies the size of $b$ instead of using the discriminant.\n* Choice D ($196$): stops at $b^2$ and never divides by $4a$.\n\n**Test Day Takeaway:** A graph that touches the $x$-axis once is a perfect square, so with $a = 1$ the constant must be $\\left(\\dfrac{b}{2}\\right)^2$ — exactly what $b^2 - 4ac = 0$ gives.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "discriminant-parameter",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-030",
    domain: "advanced-math",
    skills: ["discriminant-analysis"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the equation $2x^2 + mx + 18 = 0$, $m$ is a constant. If the equation has no real solutions, which of the following could be the value of $m$?",
    choices: [
      // distractor: $|-15| > 12$, so the discriminant is positive and there are two real solutions
      { id: "A", text: "$-15$" },
      // distractor: the boundary case: the discriminant is exactly $0$, giving one real solution
      { id: "B", text: "$-12$" },
      { id: "C", text: "$9$" },
      // distractor: $13 > 12$, so the discriminant is positive
      { id: "D", text: "$13$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Discriminant Inequality**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** No real solutions means $m^2 - 4(2)(18) < 0$, so $m^2 < 144$ and $-12 < m < 12$. Only $9$ lies strictly inside.\n\n**The Full Solution:**\nStep 1: With $a = 2$ and $c = 18$, the discriminant is $m^2 - 4(2)(18) = m^2 - 144$.\nStep 2: \"No real solutions\" means the discriminant is negative: $m^2 - 144 < 0$, so $m^2 < 144$.\nStep 3: Taking square roots gives $-12 < m < 12$. Of the choices, only $m = 9$ satisfies this. Check: with $m = 9$ the discriminant is $81 - 144 = -63 < 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-15$): $(-15)^2 = 225 > 144$, so the discriminant is $+81$ and there are two real solutions.\n* Choice B ($-12$): the discriminant is exactly $0$ — one repeated real solution, which the question excludes.\n* Choice D ($13$): $169 > 144$, again a positive discriminant.\n\n**Test Day Takeaway:** $m^2 < k$ becomes a two-sided band $-\\sqrt{k} < m < \\sqrt{k}$, and the endpoints belong to the \"exactly one solution\" case, not to \"none.\"",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "discriminant-inequality",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-031",
    domain: "advanced-math",
    skills: ["discriminant-analysis"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the $xy$-plane, the graphs of $y = x^2 - 6x + 14$ and $y = 2x + k$ meet at exactly one point, where $k$ is a constant. What is the value of $k$?",
    choices: [
      // distractor: solves $4k = -56$, dropping the $+64$ from $b^2$
      { id: "A", text: "$-14$" },
      { id: "B", text: "$-2$" },
      // distractor: sign slip when solving $8 + 4k = 0$
      { id: "C", text: "$2$" },
      // distractor: copies the parabola's constant term
      { id: "D", text: "$14$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Tangent Line to Parabola (Discriminant Method)**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** Setting the sides equal gives $x^2 - 8x + (14 - k) = 0$. One shared point means the discriminant is $0$: $64 - 4(14 - k) = 0$, so $k = -2$.\n\n**The Full Solution:**\nStep 1: At a shared point both equations give the same $y$, so $x^2 - 6x + 14 = 2x + k$.\nStep 2: Move everything to one side: $x^2 - 8x + (14 - k) = 0$. The two graphs meet exactly once when this quadratic has exactly one real solution.\nStep 3: Set the discriminant to zero: $(-8)^2 - 4(1)(14 - k) = 0$, so $64 - 56 + 4k = 0$ and $4k = -8$, giving $k = -2$. Check: $x^2 - 8x + 16 = (x - 4)^2 = 0$ has the single root $x = 4$, and both graphs pass through $(4, 6)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-14$): solves $4k = -56$, forgetting that $b^2 = 64$ also enters the discriminant.\n* Choice C ($2$): reaches $8 + 4k = 0$ but reports the positive value.\n* Choice D ($14$): grabs the parabola's constant term without forming the combined equation.\n\n**Test Day Takeaway:** Two graphs meeting exactly once collapse to one quadratic with a zero discriminant — combine first, then set $b^2 - 4ac = 0$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "system-tangency",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // ── converting-quadratic-forms (4 questions) ──────────────────────
  {
    id: "bank-am-032",
    domain: "advanced-math",
    skills: ["converting-quadratic-forms"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In the $xy$-plane, the graph of $y = (x - 7)^2 + 4$ is a parabola. Which of the following equations, written in the form $y = ax^2 + bx + c$, defines the same parabola?",
    choices: [
      { id: "A", text: "$y = x^2 - 14x + 53$" },
      // distractor: subtracts the $4$ instead of adding it
      { id: "B", text: "$y = x^2 - 14x + 45$" },
      // distractor: loses the negative sign on the middle term
      { id: "C", text: "$y = x^2 + 14x + 53$" },
      // distractor: squares term by term, treating $(x - 7)^2$ as $x^2 + 49$ with no middle term
      { id: "D", text: "$y = x^2 + 53$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Vertex to Standard Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $(x - 7)^2 = x^2 - 14x + 49$, and adding $4$ gives $x^2 - 14x + 53$.\n\n**The Full Solution:**\nStep 1: Expand the square: $(x - 7)^2 = (x - 7)(x - 7) = x^2 - 7x - 7x + 49 = x^2 - 14x + 49$.\nStep 2: Add the constant outside the square: $x^2 - 14x + 49 + 4 = x^2 - 14x + 53$.\nStep 3: Check at $x = 7$: the vertex form gives $0 + 4 = 4$, and the expanded form gives $49 - 98 + 53 = 4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: uses $49 - 4$; the $+4$ sits outside the square and is added.\n* Choice C: writes $+14x$, which would come from $(x + 7)^2$ and move the vertex to $x = -7$.\n* Choice D: squares each term separately, dropping the middle term $-14x$ entirely.\n\n**Test Day Takeaway:** $(x - h)^2$ always contributes three terms, not two — the middle term $-2hx$ is where expansions go wrong.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "vertex-to-standard",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-033",
    domain: "advanced-math",
    skills: ["converting-quadratic-forms"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The expression $3x^2 - 30x + 82$ can be written in the form $3(x + h)^2 + k$, where $h$ and $k$ are constants. What is the value of $h + k$?",
    choices: [
      // distractor: halves $-30$ before factoring out the $3$, giving $h = -15$
      { id: "A", text: "$-8$" },
      { id: "B", text: "$2$" },
      // distractor: reads $h = 5$ from $(x - 5)^2$ instead of $h = -5$ in $(x + h)^2$
      { id: "C", text: "$12$" },
      // distractor: subtracts $25$ instead of $3 \cdot 25 = 75$ when balancing
      { id: "D", text: "$52$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Complete the Square with Leading Coefficient**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Factor: $3(x^2 - 10x) + 82 = 3(x - 5)^2 - 75 + 82 = 3(x - 5)^2 + 7$. So $h = -5$, $k = 7$, and $h + k = 2$.\n\n**The Full Solution:**\nStep 1: Factor $3$ out of the two $x$-terms only: $3x^2 - 30x + 82 = 3(x^2 - 10x) + 82$.\nStep 2: Complete the square inside: half of $-10$ is $-5$, and $(-5)^2 = 25$. Adding $25$ inside adds $3(25) = 75$ overall, so subtract $75$ outside: $3(x^2 - 10x + 25) - 75 + 82 = 3(x - 5)^2 + 7$.\nStep 3: Match to $3(x + h)^2 + k$: $x - 5 = x + (-5)$, so $h = -5$ and $k = 7$, giving $h + k = 2$. Check by expanding: $3(x - 5)^2 + 7 = 3x^2 - 30x + 75 + 7 = 3x^2 - 30x + 82$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-8$): halves $-30$ directly to get $h = -15$ without first dividing by the $3$, then keeps $k = 7$.\n* Choice C ($12$): uses $h = 5$; but the target form is $(x + h)^2$, and $(x - 5)^2$ means $h = -5$.\n* Choice D ($52$): subtracts only $25$ instead of $3 \\cdot 25 = 75$, leaving $k = 57$.\n\n**Test Day Takeaway:** When a leading coefficient is factored out, whatever you add inside the parentheses is multiplied by that coefficient before you subtract it outside.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "complete-the-square",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-034",
    domain: "advanced-math",
    skills: ["converting-quadratic-forms"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The parabola shown is the graph of the function $g$ in the $xy$-plane. Its vertex is $(1, 8)$, and its $x$-intercepts are $(-1, 0)$ and $(3, 0)$. What is the value of $g(-3)$?",
    diagram: { type: "quadraticVertex", params: { vertex: [1, 8], a: -2, showPoints: [[-1, 0], [3, 0]], showVertex: true } },
    choices: [
      { id: "A", text: "$-24$" },
      // distractor: evaluates at $x = 3$ instead of $x = -3$
      { id: "B", text: "$0$" },
      // distractor: forgets to square the horizontal difference
      { id: "C", text: "$16$" },
      // distractor: uses $a = 2$ instead of $a = -2$
      { id: "D", text: "$40$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Vertex Form from Vertex + Intercepts**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** From the vertex, $g(x) = a(x - 1)^2 + 8$; the intercept $(3, 0)$ gives $4a + 8 = 0$, so $a = -2$. Then $g(-3) = -2(16) + 8 = -24$.\n\n**The Full Solution:**\nStep 1: Vertex $(1, 8)$ gives $g(x) = a(x - 1)^2 + 8$.\nStep 2: Substitute the intercept $(3, 0)$: $0 = a(3 - 1)^2 + 8 = 4a + 8$, so $a = -2$ and $g(x) = -2(x - 1)^2 + 8$.\nStep 3: Evaluate at $x = -3$: $g(-3) = -2(-3 - 1)^2 + 8 = -2(16) + 8 = -32 + 8 = -24$. Check the other intercept: $g(-1) = -2(4) + 8 = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($0$): this is $g(3)$ — reading the intercept instead of evaluating at $x = -3$.\n* Choice C ($16$): computes $-2(-3 - 1) + 8$, skipping the square.\n* Choice D ($40$): uses $a = +2$, which contradicts a graph that opens downward.\n\n**Test Day Takeaway:** A vertex plus one more point determines a parabola completely. Solve for $a$ first, then substitute — and square the difference before multiplying.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "factored-to-standard",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-am-035",
    domain: "advanced-math",
    skills: ["converting-quadratic-forms"],
    difficulty: "medium",
    type: "fill-in",
    question: "The equation $y = x^2 + 22x + 130$ is rewritten in the form $y = (x + h)^2 + k$, where $h$ and $k$ are constants. What is the value of $k$?",
    correctAnswer: "9",
    explanation: "**SAT Pattern: Standard to Vertex (k value)**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~20s):** Half of $22$ is $11$ and $11^2 = 121$, so $y = (x + 11)^2 + (130 - 121) = (x + 11)^2 + 9$.\n\n**The Full Solution:**\nStep 1: To complete the square on $x^2 + 22x$, take half the coefficient of $x$: $\\dfrac{22}{2} = 11$, then square it: $121$.\nStep 2: Rewrite: $x^2 + 22x + 130 = (x^2 + 22x + 121) + 130 - 121$.\nStep 3: This is $(x + 11)^2 + 9$, so $h = 11$ and $k = 9$. Check by expanding: $(x + 11)^2 + 9 = x^2 + 22x + 121 + 9 = x^2 + 22x + 130$. $\\checkmark$\n\n**Common Mistakes:** Reporting $11$, which is $h$, not $k$. Reporting $130$ by forgetting to subtract the $121$ that completing the square introduced. Reporting $-9$ by subtracting in the wrong order, $121 - 130$.\n\n**Test Day Takeaway:** After completing the square, $k$ is what is LEFT OVER from the original constant: $c - \\left(\\dfrac{b}{2}\\right)^2$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "standard-to-vertex",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // ── exponent-laws (5 questions) ───────────────────────────────────
  {
    id: "bank-am-036",
    domain: "advanced-math",
    skills: ["exponent-laws"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "For $x > 0$, which of the following expressions is equivalent to $\\dfrac{x^{11}}{x^{4}}$?",
    choices: [
      // distractor: subtracts in the wrong order, $4 - 11$
      { id: "A", text: "$x^{-7}$" },
      { id: "B", text: "$x^{7}$" },
      // distractor: adds the exponents instead of subtracting them
      { id: "C", text: "$x^{15}$" },
      // distractor: multiplies the exponents
      { id: "D", text: "$x^{44}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Quotient Rule of Exponents**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Dividing powers of the same base subtracts exponents: $11 - 4 = 7$, so the quotient is $x^{7}$.\n\n**The Full Solution:**\nStep 1: The quotient rule says $\\dfrac{x^{m}}{x^{n}} = x^{m - n}$ for $x \\neq 0$.\nStep 2: Here $m = 11$ and $n = 4$, so the exponent is $11 - 4 = 7$.\nStep 3: The expression equals $x^{7}$. Check with $x = 2$: $\\dfrac{2^{11}}{2^{4}} = \\dfrac{2048}{16} = 128 = 2^{7}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x^{-7}$): subtracts the numerator's exponent from the denominator's, reversing the order.\n* Choice C ($x^{15}$): adds $11 + 4$, which is the rule for MULTIPLYING powers.\n* Choice D ($x^{44}$): multiplies $11 \\cdot 4$, which is the rule for a power raised to a power.\n\n**Test Day Takeaway:** Multiply powers, add exponents; divide powers, subtract exponents; raise a power to a power, multiply exponents. The operation on the bases is always one step gentler than the operation on the exponents.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "exponent-simplify",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-037",
    domain: "advanced-math",
    skills: ["exponent-laws"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "For all positive values of $a$ and $b$, which of the following expressions is equivalent to $(2a^{3}b)^{4}$?",
    choices: [
      // distractor: computes $2^{3}$ instead of $2^{4}$ for the coefficient
      { id: "A", text: "$8a^{12}b^{4}$" },
      // distractor: adds the exponents $3 + 4$ instead of multiplying them
      { id: "B", text: "$16a^{7}b^{4}$" },
      { id: "C", text: "$16a^{12}b^{4}$" },
      // distractor: leaves $b$ unraised, forgetting that the outer exponent hits every factor
      { id: "D", text: "$16a^{12}b$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Power of a Product**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Raise each factor to the fourth power: $2^{4} = 16$, $(a^{3})^{4} = a^{12}$, $b^{4} = b^{4}$.\n\n**The Full Solution:**\nStep 1: The power-of-a-product rule gives $(2a^{3}b)^{4} = 2^{4} \\cdot (a^{3})^{4} \\cdot b^{4}$.\nStep 2: Evaluate each piece: $2^{4} = 16$; $(a^{3})^{4} = a^{3 \\cdot 4} = a^{12}$; $b^{4}$ stays as is.\nStep 3: The product is $16a^{12}b^{4}$. Check with $a = b = 1$: the original is $2^{4} = 16$ and the answer is $16$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($8a^{12}b^{4}$): raises the coefficient to the third power instead of the fourth.\n* Choice B ($16a^{7}b^{4}$): adds $3 + 4$; a power raised to a power multiplies exponents.\n* Choice D ($16a^{12}b$): never applies the outer exponent to $b$.\n\n**Test Day Takeaway:** An exponent outside parentheses lands on EVERY factor inside, including the numerical coefficient.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "power-of-product",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-038",
    domain: "advanced-math",
    skills: ["exponent-laws"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the equation $\\dfrac{(2^{n})^{3} \\cdot 2^{6}}{2^{3}} = 2^{21}$, what is the value of $n$?",
    choices: [
      // distractor: adds the denominator's exponent instead of subtracting it
      { id: "A", text: "$4$" },
      { id: "B", text: "$6$" },
      // distractor: drops the factor $2^{6}$ from the numerator
      { id: "C", text: "$8$" },
      // distractor: treats $(2^{n})^{3}$ as $2^{n + 3}$
      { id: "D", text: "$15$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Exponent Equation (Combine then Solve)**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The left side is $2^{3n + 6 - 3} = 2^{3n + 3}$, so $3n + 3 = 21$ and $n = 6$.\n\n**The Full Solution:**\nStep 1: A power raised to a power multiplies exponents: $(2^{n})^{3} = 2^{3n}$.\nStep 2: Multiplying adds exponents and dividing subtracts them: $\\dfrac{2^{3n} \\cdot 2^{6}}{2^{3}} = 2^{3n + 6 - 3} = 2^{3n + 3}$.\nStep 3: With the same base on both sides, the exponents must be equal: $3n + 3 = 21$, so $3n = 18$ and $n = 6$. Check: $\\dfrac{(2^{6})^{3} \\cdot 2^{6}}{2^{3}} = \\dfrac{2^{18} \\cdot 2^{6}}{2^{3}} = 2^{21}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): solves $3n + 6 + 3 = 21$, adding the denominator's exponent instead of subtracting it.\n* Choice C ($8$): solves $3n - 3 = 21$, ignoring the $\\cdot 2^{6}$ in the numerator.\n* Choice D ($15$): reads $(2^{n})^{3}$ as $2^{n + 3}$ and solves $n + 3 + 6 - 3 = 21$.\n\n**Test Day Takeaway:** Collapse the whole side to a single power of the common base first; only then set the exponents equal.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "exponent-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-039",
    domain: "advanced-math",
    skills: ["exponent-laws"],
    difficulty: "medium",
    type: "fill-in",
    question: "For all positive values of $x$, the equation $\\dfrac{x^{3a - 4}}{x^{a}} = x^{16}$ is true, where $a$ is a constant. What is the value of $a$?",
    correctAnswer: "10",
    explanation: "**SAT Pattern: Exponent Laws — Quotient Rule + Solve**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~20s):** Subtract exponents: $(3a - 4) - a = 2a - 4 = 16$, so $a = 10$.\n\n**The Full Solution:**\nStep 1: The quotient rule gives $\\dfrac{x^{3a - 4}}{x^{a}} = x^{(3a - 4) - a} = x^{2a - 4}$.\nStep 2: Since the bases match and $x > 0$, the exponents must be equal: $2a - 4 = 16$.\nStep 3: Solve: $2a = 20$, so $a = 10$. Check: with $a = 10$ the numerator is $x^{26}$ and the denominator is $x^{10}$, and $\\dfrac{x^{26}}{x^{10}} = x^{16}$. $\\checkmark$\n\n**Common Mistakes:** Adding the exponents instead of subtracting, which gives $4a - 4 = 16$ and $a = 5$. Dropping the $-4$ and solving $2a = 16$, which gives $a = 8$.\n\n**Test Day Takeaway:** Subtract the ENTIRE denominator exponent — put parentheses around $3a - 4$ before subtracting $a$ so no term gets lost.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "exponent-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-am-040",
    domain: "advanced-math",
    skills: ["exponent-laws"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "For all positive values of $x$ and $y$, the equation $\\dfrac{20x^{a}y^{b}}{5x^{2}y^{-4}} = 4x^{9}y^{-1}$ is true, where $a$ and $b$ are constants. What is the value of $a + b$?",
    choices: [
      // distractor: adds the denominator's $x$-exponent instead of subtracting it
      { id: "A", text: "$2$" },
      { id: "B", text: "$6$" },
      // distractor: makes both errors: adds for $x$ and subtracts the wrong sign for $y$
      { id: "C", text: "$10$" },
      // distractor: computes $b - 4 = -1$, missing that subtracting $-4$ adds $4$
      { id: "D", text: "$14$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Match Coefficients After Exponent Simplification**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** The left side simplifies to $4x^{a - 2}y^{b + 4}$, so $a - 2 = 9$ and $b + 4 = -1$, giving $a = 11$, $b = -5$, and $a + b = 6$.\n\n**The Full Solution:**\nStep 1: Divide the coefficients: $\\dfrac{20}{5} = 4$, which already matches the right side.\nStep 2: Subtract exponents for each variable: $x^{a - 2}$ and $y^{b - (-4)} = y^{b + 4}$.\nStep 3: Match to $4x^{9}y^{-1}$: $a - 2 = 9$ gives $a = 11$, and $b + 4 = -1$ gives $b = -5$. So $a + b = 11 + (-5) = 6$. Check: $\\dfrac{20x^{11}y^{-5}}{5x^{2}y^{-4}} = 4x^{9}y^{-1}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): solves $a + 2 = 9$, adding instead of subtracting, so $a = 7$ while $b = -5$.\n* Choice C ($10$): combines both slips, $a = 7$ and $b = 3$.\n* Choice D ($14$): solves $b - 4 = -1$, forgetting that subtracting the exponent $-4$ ADDS $4$.\n\n**Test Day Takeaway:** A negative exponent in the denominator becomes positive when you subtract it. Handle each variable, and the coefficient, as a separate equation.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "simplify-exponent-quotient",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-am-041",
    domain: "advanced-math",
    skills: ["zero-negative-exponents"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In the expression $3^{0} + 3^{-2}$, one term has an exponent of zero and one has a negative exponent. What is the value of the expression?",
    choices: [
      // distractor: reads $3^{-2}$ as $-9$
      { id: "A", text: "$-8$" },
      // distractor: sets $3^{0} = 0$ instead of $1$
      { id: "B", text: "$\\dfrac{1}{9}$" },
      { id: "C", text: "$\\dfrac{10}{9}$" },
      // distractor: reads $3^{-2}$ as $9$
      { id: "D", text: "$10$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Zero and Negative Exponent Evaluation**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $3^{0} = 1$ and $3^{-2} = \\dfrac{1}{9}$, so the sum is $1 + \\dfrac{1}{9} = \\dfrac{10}{9}$.\n\n**The Full Solution:**\nStep 1: Any nonzero number raised to the power $0$ equals $1$, so $3^{0} = 1$.\nStep 2: A negative exponent means a reciprocal: $3^{-2} = \\dfrac{1}{3^{2}} = \\dfrac{1}{9}$.\nStep 3: Add: $1 + \\dfrac{1}{9} = \\dfrac{9}{9} + \\dfrac{1}{9} = \\dfrac{10}{9}$. Check as a decimal: $1 + 0.111\\ldots \\approx 1.11$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-8$): treats $3^{-2}$ as $-3^{2} = -9$, giving $1 - 9$; a negative exponent never makes the value negative.\n* Choice B ($\\dfrac{1}{9}$): sets $3^{0} = 0$; the zero exponent gives $1$, not $0$.\n* Choice D ($10$): treats $3^{-2}$ as $9$, dropping the reciprocal.\n\n**Test Day Takeaway:** A negative exponent flips the base into a denominator; it never changes the sign of the value.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "zero-neg-exponent-eval",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-042",
    domain: "advanced-math",
    skills: ["zero-negative-exponents"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "For $x \\neq 0$, which of the following expressions is equivalent to $\\dfrac{1}{x^{6}}$?",
    choices: [
      // distractor: negates the expression rather than the exponent
      { id: "A", text: "$-x^{6}$" },
      { id: "B", text: "$x^{-6}$" },
      // distractor: confuses a negative exponent with a fractional exponent, which means a root
      { id: "C", text: "$x^{\\frac{1}{6}}$" },
      // distractor: moves the negative sign onto the base
      { id: "D", text: "$(-x)^{6}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Reciprocal as Negative Exponent**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** A reciprocal of a power is that power with the opposite exponent: $\\dfrac{1}{x^{6}} = x^{-6}$.\n\n**The Full Solution:**\nStep 1: The definition of a negative exponent is $x^{-n} = \\dfrac{1}{x^{n}}$ for $x \\neq 0$.\nStep 2: Reading it right to left with $n = 6$ gives $\\dfrac{1}{x^{6}} = x^{-6}$.\nStep 3: Check with $x = 2$: $\\dfrac{1}{2^{6}} = \\dfrac{1}{64}$ and $2^{-6} = \\dfrac{1}{64}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-x^{6}$): at $x = 2$ this is $-64$, not $\\dfrac{1}{64}$ — the minus sign belongs on the exponent, not on the whole expression.\n* Choice C ($x^{\\frac{1}{6}}$): a fractional exponent means a root, so at $x = 64$ this equals $2$, not $\\dfrac{1}{64^{6}}$.\n* Choice D ($(-x)^{6}$): at $x = 2$ this is $64$, since an even power erases the sign.\n\n**Test Day Takeaway:** Negative exponent means reciprocal; fractional exponent means root. They are different operations and cannot be swapped.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "negative-exponent-rewrite",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-043",
    domain: "advanced-math",
    skills: ["zero-negative-exponents"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "For $x > 0$, which of the following expressions is equivalent to $\\dfrac{(3x)^{-3}}{x^{-6}}$?",
    choices: [
      { id: "A", text: "$\\dfrac{x^{3}}{27}$" },
      // distractor: computes $3^{-3}$ as $\frac{1}{9}$ by multiplying the base and the exponent
      { id: "B", text: "$\\dfrac{x^{3}}{9}$" },
      // distractor: adds the exponents, $-3 + (-6)$, instead of subtracting
      { id: "C", text: "$\\dfrac{1}{27x^{9}}$" },
      // distractor: moves the $27$ to the numerator, treating $3^{-3}$ as $27$
      { id: "D", text: "$27x^{3}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Negative Exponent Simplification**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** $(3x)^{-3} = \\dfrac{1}{27x^{3}}$, and dividing by $x^{-6}$ multiplies by $x^{6}$: $\\dfrac{x^{6}}{27x^{3}} = \\dfrac{x^{3}}{27}$.\n\n**The Full Solution:**\nStep 1: Apply the outer exponent to both factors: $(3x)^{-3} = 3^{-3}x^{-3} = \\dfrac{1}{27}x^{-3}$.\nStep 2: Divide by $x^{-6}$ by subtracting exponents: $x^{-3 - (-6)} = x^{3}$.\nStep 3: The expression is $\\dfrac{x^{3}}{27}$. Check with $x = 1$: the original is $\\dfrac{3^{-3}}{1} = \\dfrac{1}{27}$, and the answer is $\\dfrac{1}{27}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\dfrac{x^{3}}{9}$): computes $3^{-3}$ as $\\dfrac{1}{9}$ by multiplying $3 \\cdot 3$ instead of cubing.\n* Choice C ($\\dfrac{1}{27x^{9}}$): adds the exponents $-3$ and $-6$ instead of subtracting the denominator's.\n* Choice D ($27x^{3}$): puts the $27$ in the numerator, as if $3^{-3} = 27$.\n\n**Test Day Takeaway:** Clear the negative exponents one factor at a time — the numerical base and the variable base each follow the same rule separately.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "negative-exponent-simplify",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-044",
    domain: "advanced-math",
    skills: ["zero-negative-exponents"],
    difficulty: "hard",
    type: "fill-in",
    question: "The function $f$ is defined by $f(n) = 2^{-3n}$, and the function $g$ is defined by $g(n) = \\dfrac{1}{4^{n + 3}}$. For what value of $n$ is $f(n) = g(n)$?",
    correctAnswer: "6",
    explanation: "**SAT Pattern: Negative Exponent Equation**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~35s):** Write $g$ in base $2$: $\\dfrac{1}{4^{n + 3}} = 2^{-2(n + 3)} = 2^{-2n - 6}$. Then $-3n = -2n - 6$, so $n = 6$.\n\n**The Full Solution:**\nStep 1: Rewrite $4$ as $2^{2}$: $4^{n + 3} = (2^{2})^{n + 3} = 2^{2n + 6}$.\nStep 2: A reciprocal flips the sign of the exponent: $g(n) = \\dfrac{1}{2^{2n + 6}} = 2^{-2n - 6}$.\nStep 3: Set $f(n) = g(n)$. With equal bases the exponents are equal: $-3n = -2n - 6$, so $-n = -6$ and $n = 6$. Check: $f(6) = 2^{-18}$ and $g(6) = \\dfrac{1}{4^{9}} = \\dfrac{1}{2^{18}} = 2^{-18}$. $\\checkmark$\n\n**Common Mistakes:** Leaving the bases unmatched and setting $-3n = -(n + 3)$, which gives $n = \\dfrac{3}{2}$. Forgetting that the reciprocal flips the sign and solving $-3n = 2n + 6$, which gives $n = -\\dfrac{6}{5}$.\n\n**Test Day Takeaway:** Two exponent rules run in order here: rewrite every base as a power of the smallest base, then convert the reciprocal into a negative exponent. Only then compare exponents.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "negative-exponent-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // ── comparing-exponentials (3 questions) ──────────────────────────
  {
    id: "bank-am-045",
    domain: "advanced-math",
    skills: ["comparing-exponentials"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A biologist records the cell count of two cultures, $P$ and $Q$, every $3$ hours. The table gives the counts. Each culture grows exponentially. Which of the following statements comparing the cultures is true?",
    diagram: { type: "dataTable", params: { headers: ["Time (hours)", "Culture P", "Culture Q"], rows: [["0", "250", "640"], ["3", "500", "960"], ["6", "1,000", "1,440"]] } },
    choices: [
      // distractor: misreads the hour-$0$ row
      { id: "A", text: "Culture $P$ has the larger count at hour $0$, and $P$ grows by the larger constant factor." },
      { id: "B", text: "Culture $Q$ has the larger count at hour $0$, and $P$ grows by the larger constant factor." },
      // distractor: compares the size of the first increase ($320$ vs $250$) instead of the ratio
      { id: "C", text: "Culture $Q$ has the larger count at hour $0$, and $Q$ grows by the larger constant factor." },
      // distractor: assumes both columns double
      { id: "D", text: "Both cultures grow by the same constant factor every $3$ hours." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Compare Exponential Growth Models**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** At hour $0$, $640 > 250$, so $Q$ starts larger. The ratios are $\\dfrac{500}{250} = 2$ for $P$ and $\\dfrac{960}{640} = 1.5$ for $Q$, so $P$ grows faster.\n\n**The Full Solution:**\nStep 1: Read the hour-$0$ row: $P$ has $250$ cells and $Q$ has $640$, so $Q$ starts with more cells.\nStep 2: For an exponential model, divide consecutive counts. Culture $P$: $\\dfrac{500}{250} = 2$ and $\\dfrac{1000}{500} = 2$. Culture $Q$: $\\dfrac{960}{640} = 1.5$ and $\\dfrac{1440}{960} = 1.5$.\nStep 3: $P$ multiplies by $2$ every $3$ hours while $Q$ multiplies by $1.5$, so $P$ has the larger growth factor even though it starts smaller. Check: continuing the pattern, $P$ reaches $4{,}000$ at hour $12$ while $Q$ reaches only $3{,}240$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: reverses the hour-$0$ comparison; $250 < 640$.\n* Choice C: compares the raw increases over the first interval, $320$ for $Q$ against $250$ for $P$; exponential growth is compared by RATIOS, not differences.\n* Choice D: the factors are $2$ and $1.5$, not equal.\n\n**Test Day Takeaway:** Compare exponential models by dividing consecutive outputs, and keep the starting value and the growth factor as two separate comparisons.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "compare-growth-models",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-046",
    domain: "advanced-math",
    skills: ["comparing-exponentials"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Account $J$ has a value of $2{,}000(1.05)^{t}$ dollars $t$ years after it was opened, and Account $K$ has a value of $2{,}000(1.09)^{t}$ dollars $t$ years after it was opened. To the nearest dollar, how much greater is the value of Account $K$ than the value of Account $J$ after $10$ years?",
    choices: [
      // distractor: uses simple interest instead of compounding
      { id: "A", text: "$800$" },
      { id: "B", text: "$1{,}477$" },
      // distractor: reports Account $J$'s value rather than the difference
      { id: "C", text: "$3{,}258$" },
      // distractor: reports Account $K$'s value rather than the difference
      { id: "D", text: "$4{,}735$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Compare Compound Interest**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** $2{,}000(1.09)^{10} \\approx 4{,}734.73$ and $2{,}000(1.05)^{10} \\approx 3{,}257.79$; the difference is about $1{,}477$ dollars.\n\n**The Full Solution:**\nStep 1: Evaluate each model at $t = 10$. Account $K$: $2{,}000(1.09)^{10} \\approx 2{,}000(2.36736) \\approx 4{,}734.73$ dollars.\nStep 2: Account $J$: $2{,}000(1.05)^{10} \\approx 2{,}000(1.62889) \\approx 3{,}257.79$ dollars.\nStep 3: Subtract: $4{,}734.73 - 3{,}257.79 \\approx 1{,}476.94$, which rounds to $1{,}477$ dollars. Check the sizes: $K$ is roughly $45\\%$ larger than $J$, and $\\dfrac{1{,}477}{3{,}258} \\approx 0.45$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($800$): treats the growth as simple interest, computing $2{,}000(0.09)(10) - 2{,}000(0.05)(10) = 1{,}800 - 1{,}000$.\n* Choice C ($3{,}258$): stops after evaluating Account $J$.\n* Choice D ($4{,}735$): stops after evaluating Account $K$ and never subtracts.\n\n**Test Day Takeaway:** \"How much greater\" always ends in a subtraction. Evaluate both exponential models fully before comparing — the gap grows much faster than the rate difference suggests.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "exponential-comparison",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-047",
    domain: "advanced-math",
    skills: ["comparing-exponentials"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The table gives the purchase price and the annual percent decrease in value of two machines. The value of each machine decreases exponentially from its purchase price at the given annual rate. Which of the following statements comparing the two machines is true?",
    diagram: { type: "dataTable", params: { headers: ["Machine", "Purchase price (dollars)", "Annual percent decrease"], rows: [["R", "36,000", "20%"], ["S", "24,000", "10%"]] } },
    choices: [
      { id: "A", text: "Machine $R$ loses a greater percent of its value each year, and Machine $R$ is worth more than Machine $S$ at the end of year $3$." },
      // distractor: true through year 3 but false from year 4 on, when Machine $S$ is worth more
      { id: "B", text: "Machine $R$ loses a greater percent of its value each year, and Machine $R$ is worth more than Machine $S$ at the end of every year." },
      // distractor: confuses percent rate with dollar loss: $S$ loses $2{,}400$ and $R$ loses $7{,}200$ in year 1
      { id: "C", text: "Machine $S$ loses a greater dollar amount during the first year, because its value decreases more slowly." },
      // distractor: the year-2 values are $23{,}040$ and $19{,}440$, not equal
      { id: "D", text: "The two machines are worth the same amount at the end of year $2$." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Compare Depreciation Models**\n\n**Choice A is correct.**\n\n**The Fast Way (~45s):** The models are $36{,}000(0.80)^{t}$ and $24{,}000(0.90)^{t}$. At $t = 3$: $18{,}432$ versus $17{,}496$, so $R$ is still worth more — but only just.\n\n**The Full Solution:**\nStep 1: A $20\\%$ annual decrease multiplies the value by $0.80$ each year, and a $10\\%$ decrease multiplies it by $0.90$. So $V_R(t) = 36{,}000(0.80)^{t}$ and $V_S(t) = 24{,}000(0.90)^{t}$.\nStep 2: Machine $R$ loses the greater PERCENT each year, since $20\\% > 10\\%$.\nStep 3: Compare at $t = 3$: $V_R(3) = 36{,}000(0.512) = 18{,}432$ dollars and $V_S(3) = 24{,}000(0.729) = 17{,}496$ dollars, so $R$ is worth more. Check the next year: $V_R(4) = 14{,}745.60$ and $V_S(4) = 15{,}746.40$, so the ranking flips after year $3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: correct through year $3$, but at $t = 4$ Machine $S$ is worth $15{,}746.40$ against Machine $R$'s $14{,}745.60$ — \"every year\" is too strong.\n* Choice C: reverses the dollar comparison. In year $1$, $S$ loses $2{,}400$ dollars while $R$ loses $7{,}200$ dollars.\n* Choice D: at $t = 2$ the values are $23{,}040$ and $19{,}440$ dollars, which are not equal.\n\n**Test Day Takeaway:** A larger percent decrease does not mean a smaller value right away — the starting amount can keep the faster-depreciating item ahead for several years. Test the specific year the choice names.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "depreciation-comparison",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // ── exponential-growth-decay (5 questions) ────────────────────────
  {
    id: "bank-am-048",
    domain: "advanced-math",
    skills: ["exponential-growth-decay"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A colony of algae doubles in size every $6$ hours. The colony contains $150$ cells at time $t = 0$. Which of the following functions models the number of cells in the colony $t$ hours after $t = 0$?",
    choices: [
      // distractor: swaps the starting amount and the growth factor
      { id: "A", text: "$f(t) = 2(150)^{t/6}$" },
      // distractor: multiplies $t$ by the doubling time instead of dividing
      { id: "B", text: "$f(t) = 150(2)^{6t}$" },
      { id: "C", text: "$f(t) = 150(2)^{t/6}$" },
      // distractor: swaps the growth factor and the doubling time
      { id: "D", text: "$f(t) = 150(6)^{t/2}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Exponential Model from Doubling Time**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Start at $150$, multiply by $2$ once per $6$ hours: $f(t) = 150(2)^{t/6}$.\n\n**The Full Solution:**\nStep 1: An exponential model has the form (starting amount)(growth factor) raised to (number of growth periods). The starting amount is $150$ and the growth factor is $2$.\nStep 2: One doubling period is $6$ hours, so in $t$ hours the number of periods is $\\dfrac{t}{6}$.\nStep 3: The model is $f(t) = 150(2)^{t/6}$. Check: $f(0) = 150(2)^{0} = 150$, and $f(6) = 150(2)^{1} = 300$, exactly double. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: puts $150$ in the base, so $f(0) = 2$ — the colony would start with $2$ cells.\n* Choice B: $f(6) = 150(2)^{36}$, an absurd jump; multiplying by $6$ counts $6$ doublings per hour.\n* Choice D: uses $6$ as the growth factor, so $f(2) = 150(6) = 900$, which is six times the start after only $2$ hours.\n\n**Test Day Takeaway:** The doubling time belongs in the DENOMINATOR of the exponent — it converts elapsed time into a count of growth periods.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "exponential-model-setup",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-049",
    domain: "advanced-math",
    skills: ["exponential-growth-decay"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A tractor purchased for $\\$48{,}000$ loses $15\\%$ of its value each year. Which of the following expressions gives the tractor's value, in dollars, $t$ years after it was purchased?",
    choices: [
      // distractor: uses the percent lost as the multiplier instead of the percent kept
      { id: "A", text: "$48{,}000(0.15)^{t}$" },
      { id: "B", text: "$48{,}000(0.85)^{t}$" },
      // distractor: models a 15% increase instead of a decrease
      { id: "C", text: "$48{,}000(1.15)^{t}$" },
      // distractor: models a constant dollar loss rather than a constant percent
      { id: "D", text: "$48{,}000 - 0.15t$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Compound Depreciation Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Losing $15\\%$ leaves $85\\%$, so each year multiplies the value by $0.85$: $48{,}000(0.85)^{t}$.\n\n**The Full Solution:**\nStep 1: A constant percent decrease is exponential decay: value $=$ (starting value)(decay factor)$^{t}$.\nStep 2: If $15\\%$ is lost, $100\\% - 15\\% = 85\\%$ remains, so the decay factor is $0.85$.\nStep 3: The value after $t$ years is $48{,}000(0.85)^{t}$. Check after one year: $48{,}000(0.85) = 40{,}800$, and $48{,}000 - 0.15(48{,}000) = 48{,}000 - 7{,}200 = 40{,}800$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: after one year this gives $7{,}200$ dollars — the amount LOST, not the amount remaining.\n* Choice C: $1.15$ makes the value grow by $15\\%$ a year.\n* Choice D: subtracts $0.15$ dollars per year, a linear model that ignores both the percent and the compounding.\n\n**Test Day Takeaway:** For a percent decrease the multiplier is $1 - r$, and it sits in the base with $t$ as the exponent — never as a subtraction.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "decay-model",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-050",
    domain: "advanced-math",
    skills: ["exponential-growth-decay"],
    difficulty: "medium",
    type: "fill-in",
    question: "The table gives the mass, in grams, of a sample of a radioactive isotope at two times after the sample was first measured. The mass of the sample decreases exponentially. What is the mass of the sample, in grams, $72$ hours after it was first measured?",
    diagram: { type: "dataTable", params: { headers: ["Time (hours)", "Mass (grams)"], rows: [["0", "1,920"], ["12", "960"]] } },
    correctAnswer: "30",
    explanation: "**SAT Pattern: Half-Life Evaluation**\n\n**The correct answer is $30$.**\n\n**The Fast Way (~35s):** The mass halves in $12$ hours, and $72$ hours is $6$ half-lives: $\\dfrac{1{,}920}{2^{6}} = \\dfrac{1{,}920}{64} = 30$ grams.\n\n**The Full Solution:**\nStep 1: From the table, the mass falls from $1{,}920$ grams to $960$ grams in $12$ hours, and $\\dfrac{960}{1{,}920} = \\dfrac{1}{2}$, so the half-life is $12$ hours.\nStep 2: The model is $A(t) = 1{,}920\\left(\\dfrac{1}{2}\\right)^{t/12}$, where $t$ is in hours.\nStep 3: At $t = 72$, the exponent is $\\dfrac{72}{12} = 6$, so $A(72) = 1{,}920\\left(\\dfrac{1}{2}\\right)^{6} = \\dfrac{1{,}920}{64} = 30$ grams. Check by halving six times: $1{,}920 \\to 960 \\to 480 \\to 240 \\to 120 \\to 60 \\to 30$. $\\checkmark$\n\n**Common Mistakes:** Dividing by $6$ instead of halving six times, which gives $320$ grams. Counting only five half-lives and answering $60$ grams.\n\n**Test Day Takeaway:** Convert the elapsed time into a COUNT of half-lives first, then halve that many times — the count is the exponent, not the divisor.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "half-life-evaluation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-051",
    domain: "advanced-math",
    skills: ["exponential-growth-decay"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A deposit of $\\$5{,}000$ earns $7\\%$ interest compounded annually, and no money is added or withdrawn. After how many full years does the balance first exceed $\\$7{,}500$?",
    choices: [
      // distractor: reads the ratio $1.5$ as a number of years
      { id: "A", text: "$2$" },
      // distractor: rounds $t \approx 5.99$ down instead of taking the next whole year
      { id: "B", text: "$5$" },
      { id: "C", text: "$6$" },
      // distractor: uses simple interest instead of compounding
      { id: "D", text: "$8$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Compound Growth Threshold**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Need $(1.07)^{t} > 1.5$. Since $(1.07)^{5} \\approx 1.403$ and $(1.07)^{6} \\approx 1.501$, the balance first passes $\\$7{,}500$ at $t = 6$.\n\n**The Full Solution:**\nStep 1: The balance after $t$ years is $5{,}000(1.07)^{t}$, and the target is $5{,}000(1.07)^{t} > 7{,}500$.\nStep 2: Divide by $5{,}000$: $(1.07)^{t} > 1.5$.\nStep 3: Test whole years. $(1.07)^{5} \\approx 1.4026$, giving a balance of about $\\$7{,}013$ — still short. $(1.07)^{6} \\approx 1.5007$, giving about $\\$7{,}504$ — past the target. So the first full year is $6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): reads $\\dfrac{7{,}500}{5{,}000} = 1.5$ as \"about $2$ years\" without using the growth factor at all.\n* Choice B ($5$): the exact crossing is near $t = 5.99$, so year $5$ is the last year BELOW the target, not the first above it.\n* Choice D ($8$): uses simple interest, $5{,}000(1 + 0.07t) > 7{,}500$, which needs $t > 7.1$.\n\n**Test Day Takeaway:** Divide out the starting amount first, then test whole-number exponents. \"First exceeds\" means round the crossing time UP.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "growth-threshold",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-052",
    domain: "advanced-math",
    skills: ["exponential-growth-decay"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The number of deer in a preserve $t$ years after monitoring began is modeled by $D(t) = \\dfrac{5{,}400}{3 + 24e^{-0.4t}}$. As $t$ increases without bound, the value of $D(t)$ gets closer and closer to which of the following?",
    choices: [
      // distractor: reports $D(0) = 200$, the herd size when monitoring began
      { id: "A", text: "$200$" },
      // distractor: reports half the ceiling, the size at the model's steepest point
      { id: "B", text: "$900$" },
      { id: "C", text: "$1{,}800$" },
      // distractor: quotes the numerator, assuming the denominator's constant is $1$ rather than $3$
      { id: "D", text: "$5{,}400$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Logistic Carrying Capacity**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** As $t \\to \\infty$, $e^{-0.4t} \\to 0$, so the denominator approaches $3$, not $1$. The value approaches $\\dfrac{5{,}400}{3} = 1{,}800$ deer.\n\n**The Full Solution:**\nStep 1: The only place $t$ appears is in $e^{-0.4t}$. Because the exponent $-0.4t$ becomes large and negative as $t$ grows, $e^{-0.4t}$ shrinks toward $0$.\nStep 2: The denominator $3 + 24e^{-0.4t}$ therefore approaches $3 + 24(0) = 3$. The constant term of the denominator survives, and here that constant is $3$ rather than the $1$ of the textbook form.\nStep 3: So $D(t)$ approaches $\\dfrac{5{,}400}{3} = 1{,}800$ deer, the largest population the model allows. Check the trend: $D(0) = \\dfrac{5{,}400}{27} = 200$, $D(10) \\approx 1{,}570$, and $D(20) \\approx 1{,}795$ — rising toward $1{,}800$ but never reaching it. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($200$): this is $D(0) = \\dfrac{5{,}400}{3 + 24}$, the starting herd size, not the long-run size.\n* Choice B ($900$): half of $1{,}800$ is the population at the model's steepest point, not its ceiling.\n* Choice D ($5{,}400$): quotes the numerator, which is the ceiling only when the denominator's constant term is $1$; here it is $3$.\n\n**Test Day Takeaway:** In $\\dfrac{N}{c + Ae^{-kt}}$ with $k > 0$ the decaying term dies out, so the long-run value is $\\dfrac{N}{c}$ — read the denominator's constant before quoting the numerator.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "logistic-carrying-capacity",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // ── exponential-y-intercept (3 questions) ─────────────────────────
  {
    id: "bank-am-053",
    domain: "advanced-math",
    skills: ["exponential-y-intercept"],
    difficulty: "easy",
    type: "fill-in",
    question: "The table shows the value of the exponential function $f$ at three values of $x$. In the $xy$-plane, the graph of $y = f(x)$ intersects the $y$-axis at the point $(0, k)$. What is the value of $k$?",
    diagram: { type: "dataTable", params: { headers: ["x", "f(x)"], rows: [["0", "400"], ["1", "600"], ["2", "900"]] } },
    correctAnswer: "400",
    explanation: "**SAT Pattern: y-intercept of Exponential**\n\n**The correct answer is $400$.**\n\n**The Fast Way (~10s):** The $y$-intercept is the output at $x = 0$, and the table gives $f(0) = 400$.\n\n**The Full Solution:**\nStep 1: A graph crosses the $y$-axis where $x = 0$, so $k = f(0)$.\nStep 2: The first row of the table gives $f(0) = 400$.\nStep 3: So the graph passes through $(0, 400)$ and $k = 400$. Check that the table really is exponential: $\\dfrac{600}{400} = 1.5$ and $\\dfrac{900}{600} = 1.5$, a constant ratio, so $f(x) = 400(1.5)^{x}$ and $f(0) = 400$. $\\checkmark$\n\n**Common Mistakes:** Reporting $600$, the value at $x = 1$ rather than at $x = 0$. Reporting $1.5$, the growth factor, which is the base rather than the initial value.\n\n**Test Day Takeaway:** For $f(x) = ab^{x}$ the $y$-intercept is always $a$, the value at $x = 0$ — the growth factor never appears in it.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "y-intercept-eval",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-054",
    domain: "advanced-math",
    skills: ["exponential-y-intercept"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The function $M$ defined by $M(t) = 320(1.15)^{t}$ models the number of members of a hiking club $t$ years after the club was founded. Which of the following is the best interpretation of $320$ in this context?",
    choices: [
      { id: "A", text: "The club had $320$ members when it was founded." },
      // distractor: reads the initial value as a constant yearly increase
      { id: "B", text: "The club gains $320$ members each year." },
      // distractor: confuses the initial value with the growth rate
      { id: "C", text: "The number of members increases by $320\\%$ each year." },
      // distractor: evaluates at $t = 1$ instead of $t = 0$
      { id: "D", text: "The club had $320$ members one year after it was founded." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Interpret Initial Value in Context**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $M(0) = 320(1.15)^{0} = 320$, so $320$ is the membership at the founding.\n\n**The Full Solution:**\nStep 1: In $M(t) = ab^{t}$, the constant $a$ is the output when the exponent is $0$.\nStep 2: Substituting $t = 0$ gives $M(0) = 320(1.15)^{0} = 320(1) = 320$.\nStep 3: Since $t$ counts years since the club was founded, $t = 0$ is the founding, so the club began with $320$ members. Check the other constant: $1.15$ means membership grows by $15\\%$ per year. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: a fixed yearly gain would be a linear model like $320 + ct$; here the yearly gain grows every year.\n* Choice C: the growth rate is $15\\%$, carried by the base $1.15$, not by $320$.\n* Choice D: after one year the club has $M(1) = 320(1.15) = 368$ members, not $320$.\n\n**Test Day Takeaway:** In an exponential model the coefficient out front is the value at time zero; the base carries the rate. Read each constant's job before interpreting.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "interpret-initial-value",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-055",
    domain: "advanced-math",
    skills: ["exponential-y-intercept"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The value of a rare coin, in dollars, $t$ years after it was appraised is modeled by $V(t) = a \\cdot b^{t}$, where $a$ and $b$ are constants. The table gives the coin's value at two times. What is the value of $b$?",
    diagram: { type: "dataTable", params: { headers: ["Time t (years)", "Value (dollars)"], rows: [["0", "400"], ["2", "576"]] } },
    choices: [
      // distractor: divides the two-year ratio by $2$ instead of taking its square root
      { id: "A", text: "$0.72$" },
      { id: "B", text: "$1.2$" },
      // distractor: reports the two-year growth factor as the annual factor
      { id: "C", text: "$1.44$" },
      // distractor: subtracts the square roots instead of dividing them
      { id: "D", text: "$4$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Find Base from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** $\\dfrac{V(2)}{V(0)} = \\dfrac{576}{400} = 1.44 = b^{2}$, so $b = \\sqrt{1.44} = 1.2$.\n\n**The Full Solution:**\nStep 1: At $t = 0$, $V(0) = a \\cdot b^{0} = a$, and the table gives $V(0) = 400$, so $a = 400$.\nStep 2: At $t = 2$, $400b^{2} = 576$, so $b^{2} = \\dfrac{576}{400} = 1.44$.\nStep 3: Since a growth factor is positive, $b = \\sqrt{1.44} = 1.2$. Check: $400(1.2)^{2} = 400(1.44) = 576$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.72$): divides $1.44$ by $2$; two years of growth compound, so the ratio is a square, not a doubling.\n* Choice C ($1.44$): this is the factor over TWO years, not one.\n* Choice D ($4$): computes $\\sqrt{576} - \\sqrt{400} = 24 - 20$ instead of $\\dfrac{\\sqrt{576}}{\\sqrt{400}}$.\n\n**Test Day Takeaway:** Two points that are $n$ periods apart give $b^{n}$, so take the $n$th root — dividing by $n$ is the linear reflex and is always wrong here.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "find-base-from-points",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // ── distributive-property (4 questions) ───────────────────────────
  {
    id: "bank-am-056",
    domain: "advanced-math",
    skills: ["distributive-property"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "For all values of $x$, which of the following expressions is equivalent to $-6(2x - 9)$?",
    choices: [
      // distractor: keeps the second term negative instead of flipping its sign
      { id: "A", text: "$-12x - 54$" },
      { id: "B", text: "$-12x + 54$" },
      // distractor: distributes to the first term only
      { id: "C", text: "$-12x - 9$" },
      // distractor: loses the negative on the first term
      { id: "D", text: "$12x + 54$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Distribute a Negative**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $-6 \\cdot 2x = -12x$ and $-6 \\cdot (-9) = +54$, so the expression is $-12x + 54$.\n\n**The Full Solution:**\nStep 1: The distributive property multiplies the outside factor by EACH term inside: $-6(2x) + (-6)(-9)$.\nStep 2: $-6(2x) = -12x$, and a negative times a negative is positive, so $(-6)(-9) = 54$.\nStep 3: The result is $-12x + 54$. Check at $x = 1$: the original is $-6(2 - 9) = -6(-7) = 42$, and the answer gives $-12 + 54 = 42$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-12x - 54$): multiplies $-6$ by $9$ and keeps the minus sign, ignoring that the $9$ inside is already negative.\n* Choice C ($-12x - 9$): distributes only to the $2x$ and copies the $-9$ unchanged.\n* Choice D ($12x + 54$): drops the negative on the first product; at $x = 1$ this gives $66$, not $42$.\n\n**Test Day Takeaway:** Distribute the sign along with the number, term by term, then test one value of $x$ to confirm.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "distribute-monomial",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-057",
    domain: "advanced-math",
    skills: ["distributive-property"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "For all values of $x$, which of the following expressions is equivalent to $(3x - 4)(5x + 2)$?",
    choices: [
      // distractor: makes the outer product negative, combining $-6x$ with $-20x$
      { id: "A", text: "$15x^2 - 26x - 8$" },
      { id: "B", text: "$15x^2 - 14x - 8$" },
      // distractor: gets the size of the middle term right but the sign wrong
      { id: "C", text: "$15x^2 + 14x - 8$" },
      // distractor: multiplies only the first terms and the last terms
      { id: "D", text: "$15x^2 - 8$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: FOIL Two Binomials**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $15x^2$ from the first terms; $6x - 20x = -14x$ in the middle; $-8$ from the last terms.\n\n**The Full Solution:**\nStep 1: Multiply the first terms: $3x \\cdot 5x = 15x^2$.\nStep 2: Multiply the outer and inner pairs and combine: $3x \\cdot 2 = 6x$ and $-4 \\cdot 5x = -20x$, so the middle term is $6x - 20x = -14x$.\nStep 3: Multiply the last terms: $-4 \\cdot 2 = -8$. The product is $15x^2 - 14x - 8$. Check at $x = 1$: $(3 - 4)(5 + 2) = -7$, and $15 - 14 - 8 = -7$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-26x$): treats the outer product as $-6x$, then adds $-20x$.\n* Choice C ($+14x$): reverses the sign of the middle term; at $x = 1$ this gives $21$, not $-7$.\n* Choice D ($15x^2 - 8$): multiplies first-by-first and last-by-last only, skipping the outer and inner products.\n\n**Test Day Takeaway:** Every term of the first binomial meets every term of the second — four products. Substituting $x = 1$ is a two-second check on the whole expansion.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "foil-binomials",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-058",
    domain: "advanced-math",
    skills: ["distributive-property"],
    difficulty: "medium",
    type: "fill-in",
    question: "For all values of $x$, the equation $(x + 9)(x - 5) = x^2 + bx + c$ is true, where $b$ and $c$ are constants. What is the value of $c$?",
    correctAnswer: "-45",
    explanation: "**SAT Pattern: Constant Term from Factored Form**\n\n**The correct answer is $-45$.**\n\n**The Fast Way (~10s):** The constant term of the product is the product of the constants: $9 \\cdot (-5) = -45$.\n\n**The Full Solution:**\nStep 1: Expand: $(x + 9)(x - 5) = x^2 - 5x + 9x - 45$.\nStep 2: Combine like terms: $x^2 + 4x - 45$.\nStep 3: Matching to $x^2 + bx + c$ gives $b = 4$ and $c = -45$. Check at $x = 0$: the left side is $(9)(-5) = -45$, and the right side is $c$. $\\checkmark$\n\n**Common Mistakes:** Reporting $4$, which is $b$, not $c$. Reporting $45$ by dropping the negative from $9 \\cdot (-5)$.\n\n**Test Day Takeaway:** Substituting $x = 0$ isolates the constant term instantly — both sides reduce to the product of the two constants.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "foil-identify-constant",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-059",
    domain: "advanced-math",
    skills: ["distributive-property"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The expression $(2x - 3)^3$ is equivalent to $ax^3 + bx^2 + cx + d$ for all values of $x$, where $a$, $b$, $c$, and $d$ are constants. What is the value of $a - b + c - d$?",
    choices: [
      // distractor: reports $-a + b - c + d$, the value at $x = -1$, without negating it
      { id: "A", text: "$-125$" },
      // distractor: substitutes $x = 1$, which produces $a + b + c + d$
      { id: "B", text: "$-1$" },
      // distractor: loses the sign on $d$, computing $8 + 36 + 54 - 27$
      { id: "C", text: "$71$" },
      { id: "D", text: "$125$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Alternating-Sign Coefficient Sum via $f(-1)$**\n\n**Choice D is correct.**\n\n**The Fast Way (~35s):** Substituting $x = -1$ gives $-a + b - c + d = (2(-1) - 3)^3 = -125$. The requested sum is its opposite: $a - b + c - d = 125$.\n\n**The Full Solution:**\nStep 1: Let $f(x) = ax^3 + bx^2 + cx + d$. Then $f(-1) = -a + b - c + d$, which is exactly the negative of the requested expression.\nStep 2: Because the two expressions are equivalent, $f(-1) = (2(-1) - 3)^3 = (-5)^3 = -125$.\nStep 3: Therefore $a - b + c - d = -f(-1) = 125$. Check by expanding: $(2x - 3)^3 = 8x^3 - 36x^2 + 54x - 27$, so $a - b + c - d = 8 + 36 + 54 + 27 = 125$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-125$): stops at $f(-1)$, which equals $-a + b - c + d$ — every sign is backwards.\n* Choice B ($-1$): substitutes $x = 1$, which gives $a + b + c + d = (2 - 3)^3 = -1$, the all-plus combination.\n* Choice C ($71$): expands correctly but subtracts $d$'s magnitude instead of subtracting $d = -27$, giving $8 + 36 + 54 - 27$.\n\n**Test Day Takeaway:** An alternating sum of coefficients is $\\pm f(-1)$. Decide which sign the odd-power terms need, then evaluate the original expression once — no expansion required.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "cube-of-binomial",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-am-060",
    domain: "advanced-math",
    skills: ["combining-like-terms"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "For all values of $x$, which of the following expressions is equivalent to $5x^2 + 8x - 9x^2 - 3x + 7$?",
    choices: [
      // distractor: reverses the sign of the combined $x$-term
      { id: "A", text: "$-4x^2 - 5x + 7$" },
      { id: "B", text: "$-4x^2 + 5x + 7$" },
      // distractor: adds $8x$ and $3x$ instead of subtracting
      { id: "C", text: "$-4x^2 + 11x + 7$" },
      // distractor: adds the $x^2$ coefficients instead of subtracting
      { id: "D", text: "$14x^2 + 5x + 7$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Combine Like Terms**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $5x^2 - 9x^2 = -4x^2$, $8x - 3x = 5x$, and the $7$ stands alone: $-4x^2 + 5x + 7$.\n\n**The Full Solution:**\nStep 1: Group the $x^2$ terms: $5x^2 - 9x^2 = (5 - 9)x^2 = -4x^2$.\nStep 2: Group the $x$ terms: $8x - 3x = (8 - 3)x = 5x$.\nStep 3: The constant $7$ has no partner, so the simplified expression is $-4x^2 + 5x + 7$. Check at $x = 1$: the original is $5 + 8 - 9 - 3 + 7 = 8$, and the answer gives $-4 + 5 + 7 = 8$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5x$): flips the sign of the $x$-term; at $x = 1$ this gives $-2$, not $8$.\n* Choice C ($+11x$): adds $8$ and $3$ instead of subtracting, ignoring the minus in front of $3x$.\n* Choice D ($14x^2$): adds $5$ and $9$ rather than subtracting, ignoring the minus in front of $9x^2$.\n\n**Test Day Takeaway:** Carry the sign that sits in FRONT of each term into the grouping, then check the whole simplification with $x = 1$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "combine-polynomial",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-am-061",
    domain: "advanced-math",
    skills: ["combining-like-terms"],
    difficulty: "easy",
    type: "fill-in",
    question: "The expression $7m + 4n - 3m + 9n$ is equivalent to $am + bn$, where $a$ and $b$ are constants. What is the value of $b$?",
    correctAnswer: "13",
    explanation: "**SAT Pattern: Coefficient After Combining**\n\n**The correct answer is $13$.**\n\n**The Fast Way (~10s):** Only the $n$-terms decide $b$: $4n + 9n = 13n$, so $b = 13$.\n\n**The Full Solution:**\nStep 1: Group the like terms: $(7m - 3m) + (4n + 9n)$.\nStep 2: Combine each group separately: $7m - 3m = 4m$, and $4n + 9n = 13n$, so the expression equals $4m + 13n$.\nStep 3: Matching $4m + 13n$ with $am + bn$ gives $a = 4$ and $b = 13$. Check with $m = 1$ and $n = 1$: the original is $7 + 4 - 3 + 9 = 17$, and $4(1) + 13(1) = 17$. $\\checkmark$\n\n**Common Mistakes:** Reporting $4$, the coefficient of $m$, when the question asks for the coefficient of $n$; adding every coefficient in sight, $7 + 4 - 3 + 9 = 17$; letting the minus sign in front of $3m$ leak into the $n$-terms and computing $9 - 4 = 5$.\n\n**Test Day Takeaway:** Combining like terms is two independent sums, one per variable. Decide which coefficient the question wants before you simplify.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "combine-terms",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-062",
    domain: "advanced-math",
    skills: ["combining-like-terms"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "For all values of $x$, which of the following expressions is equivalent to $(5x^2 - 3x + 8) - (2x^2 + 7x - 5)$?",
    choices: [
      { id: "A", text: "$3x^2 - 10x + 13$" },
      // distractor: distributes the minus sign to the first two terms but adds the constants, $8 + (-5) = 3$
      { id: "B", text: "$3x^2 - 10x + 3$" },
      // distractor: distributes the minus sign to only the first term of the second polynomial
      { id: "C", text: "$3x^2 + 4x + 3$" },
      // distractor: adds the two polynomials instead of subtracting
      { id: "D", text: "$7x^2 + 4x + 3$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Subtract Polynomials**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Flip every sign in the second polynomial and add: $5x^2 - 3x + 8 - 2x^2 - 7x + 5 = 3x^2 - 10x + 13$.\n\n**The Full Solution:**\nStep 1: Distribute the subtraction across all three terms: $-(2x^2 + 7x - 5) = -2x^2 - 7x + 5$.\nStep 2: Combine like terms: $5x^2 - 2x^2 = 3x^2$; $-3x - 7x = -10x$; $8 + 5 = 13$.\nStep 3: The result is $3x^2 - 10x + 13$. Check at $x = 1$: the original is $(5 - 3 + 8) - (2 + 7 - 5) = 10 - 4 = 6$, and $3 - 10 + 13 = 6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($3x^2 - 10x + 3$): subtracts the $x^2$- and $x$-terms correctly but adds the constants, $8 + (-5) = 3$, missing the sign change on $-5$.\n* Choice C ($3x^2 + 4x + 3$): applies the minus sign only to $2x^2$, so $-3x + 7x = 4x$ and $8 - 5 = 3$.\n* Choice D ($7x^2 + 4x + 3$): adds the two polynomials instead of subtracting.\n\n**Test Day Takeaway:** The minus sign in front of a parenthesis belongs to every term inside it. Rewrite the subtraction as an addition of the opposite before you combine anything.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "subtract-polynomials",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-063",
    domain: "advanced-math",
    skills: ["combining-like-terms", "distributive-property"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The expression $5(3x^2 - ax) + 4(x^2 + 2x - b)$ is equivalent to $19x^2 - 7x + 12$ for all values of $x$, where $a$ and $b$ are constants. What is the value of $ab$?",
    choices: [
      // distractor: distributes the $5$ to $3x^2$ only, solving $8 - a = -7$ to get $a = 15$
      { id: "A", text: "$-45$" },
      { id: "B", text: "$-9$" },
      // distractor: reports $a + b$ instead of $ab$
      { id: "C", text: "$0$" },
      // distractor: solves $-4b = 12$ as $b = 3$, dropping the negative sign
      { id: "D", text: "$9$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Match Coefficients of Equivalent Polynomials**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Expanding gives $19x^2 + (8 - 5a)x - 4b$. Matching coefficients, $8 - 5a = -7$ gives $a = 3$ and $-4b = 12$ gives $b = -3$, so $ab = -9$.\n\n**The Full Solution:**\nStep 1: Distribute: $5(3x^2 - ax) = 15x^2 - 5ax$ and $4(x^2 + 2x - b) = 4x^2 + 8x - 4b$.\nStep 2: Collect like terms: $(15 + 4)x^2 + (8 - 5a)x - 4b = 19x^2 + (8 - 5a)x - 4b$. Two polynomials are equivalent for all $x$ only when matching coefficients are equal.\nStep 3: $8 - 5a = -7$ gives $5a = 15$, so $a = 3$; $-4b = 12$ gives $b = -3$. Then $ab = (3)(-3) = -9$. Check: $5(3x^2 - 3x) + 4(x^2 + 2x + 3) = 15x^2 - 15x + 4x^2 + 8x + 12 = 19x^2 - 7x + 12$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-45$): multiplies the $5$ only into $3x^2$, so the $x$-equation becomes $8 - a = -7$ and $a = 15$, giving $(15)(-3) = -45$.\n* Choice C ($0$): finds $a = 3$ and $b = -3$ correctly but reports $a + b = 0$ instead of the product.\n* Choice D ($9$): solves $-4b = 12$ as $b = 3$, losing the negative sign, and gets $(3)(3) = 9$.\n\n**Test Day Takeaway:** \"Equivalent for all values of $x$\" means coefficient-by-coefficient equality. Expand fully, then set up one small equation per power of $x$ — and reread which combination of the constants is being asked for.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "multi-distribute-combine",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-am-064",
    domain: "advanced-math",
    skills: ["difference-of-squares"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "For all values of $x$, which of the following is equivalent to $49x^2 - 4$?",
    choices: [
      // distractor: uses the constant $4$ itself instead of its square root, $2$
      { id: "A", text: "$(7x - 4)(7x + 4)$" },
      // distractor: squares a single factor, which produces a $-28x$ middle term
      { id: "B", text: "$(7x - 2)(7x - 2)$" },
      { id: "C", text: "$(7x - 2)(7x + 2)$" },
      // distractor: squares a single factor, which produces a $+28x$ middle term
      { id: "D", text: "$(7x + 2)(7x + 2)$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Difference of Squares**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $49x^2 - 4 = (7x)^2 - 2^2$, and $A^2 - B^2 = (A - B)(A + B)$, so the factorization is $(7x - 2)(7x + 2)$.\n\n**The Full Solution:**\nStep 1: Write each term as a perfect square: $49x^2 = (7x)^2$ and $4 = 2^2$.\nStep 2: Apply the difference-of-squares identity with $A = 7x$ and $B = 2$: $(7x)^2 - 2^2 = (7x - 2)(7x + 2)$.\nStep 3: Expand to confirm: $(7x - 2)(7x + 2) = 49x^2 + 14x - 14x - 4 = 49x^2 - 4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(7x - 4)(7x + 4)$): uses the constant $4$ in the factors instead of $\\sqrt{4} = 2$; this product is $49x^2 - 16$.\n* Choice B ($(7x - 2)(7x - 2)$): squares one factor instead of pairing the two signs; this product is $49x^2 - 28x + 4$.\n* Choice D ($(7x + 2)(7x + 2)$): the same squaring error with the other sign; this product is $49x^2 + 28x + 4$.\n\n**Test Day Takeaway:** A binomial with a minus sign between two perfect squares always factors into a difference and a sum of the square roots — and it never has a middle term.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "difference-of-squares",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-065",
    domain: "advanced-math",
    skills: ["difference-of-squares"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Which of the following is the complete factorization of $81a^4 - b^4$ over the integers?",
    choices: [
      // distractor: treats the binomial as a perfect square instead of a difference of squares
      { id: "A", text: "$(9a^2 - b^2)^2$" },
      // distractor: stops after the first difference-of-squares step, leaving $9a^2 - b^2$ factorable
      { id: "B", text: "$(9a^2 - b^2)(9a^2 + b^2)$" },
      { id: "C", text: "$(3a - b)(3a + b)(9a^2 + b^2)$" },
      // distractor: factors the sum $9a^2 + b^2$ as if it were a difference of squares
      { id: "D", text: "$(3a - b)(3a + b)(3a - b)(3a + b)$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Two-Step Difference of Squares**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** $81a^4 - b^4 = (9a^2 - b^2)(9a^2 + b^2)$, and $9a^2 - b^2$ is itself a difference of squares: $(3a - b)(3a + b)(9a^2 + b^2)$.\n\n**The Full Solution:**\nStep 1: Both terms are perfect squares: $81a^4 = (9a^2)^2$ and $b^4 = (b^2)^2$, so $81a^4 - b^4 = (9a^2 - b^2)(9a^2 + b^2)$.\nStep 2: The first factor is again a difference of squares, $(3a)^2 - b^2 = (3a - b)(3a + b)$. The second factor, $9a^2 + b^2$, is a sum of squares and does not factor over the integers.\nStep 3: The complete factorization is $(3a - b)(3a + b)(9a^2 + b^2)$. Check with $a = 1$, $b = 1$: the original is $81 - 1 = 80$, and $(2)(4)(10) = 80$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(9a^2 - b^2)^2$): reads the expression as a perfect square; expanding gives $81a^4 - 18a^2b^2 + b^4$, which has an extra middle term.\n* Choice B ($(9a^2 - b^2)(9a^2 + b^2)$): a correct first step, but $9a^2 - b^2$ still factors, so the factorization is not complete.\n* Choice D ($(3a - b)(3a + b)(3a - b)(3a + b)$): factors the sum of squares $9a^2 + b^2$ as $(3a - b)(3a + b)$, which equals $9a^2 - b^2$, not the sum.\n\n**Test Day Takeaway:** After every difference-of-squares split, look at each factor again. A sum of squares stops the process; a difference of squares keeps it going.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "difference-of-squares",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-am-066",
    domain: "advanced-math",
    skills: ["difference-of-squares"],
    difficulty: "medium",
    type: "fill-in",
    question: "If $p^2 - q^2 = 96$ and $p - q = 8$, what is the value of $p + q$?",
    correctAnswer: "12",
    explanation: "**SAT Pattern: Difference of Squares Application**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~15s):** Since $p^2 - q^2 = (p - q)(p + q)$, the equation reads $8(p + q) = 96$, so $p + q = 12$.\n\n**The Full Solution:**\nStep 1: Factor the left side of the first equation: $p^2 - q^2 = (p - q)(p + q)$.\nStep 2: Substitute the given value $p - q = 8$: $8(p + q) = 96$.\nStep 3: Divide both sides by $8$: $p + q = 12$. Check: $p - q = 8$ and $p + q = 12$ give $p = 10$ and $q = 2$, and $10^2 - 2^2 = 100 - 4 = 96$. $\\checkmark$\n\n**Common Mistakes:** Subtracting instead of dividing, $96 - 8 = 88$; multiplying, $96 \\times 8 = 768$; or assuming $p^2 - q^2 = (p - q)^2$, which would force $p - q = \\sqrt{96} \\approx 9.80$ and contradict the given $p - q = 8$.\n\n**Test Day Takeaway:** When a question hands you $a^2 - b^2$ together with $a - b$ or $a + b$, the difference-of-squares identity turns it into one division. You never need the individual values.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "difference-of-squares-application",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-067",
    domain: "advanced-math",
    skills: ["difference-of-squares"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "Which expression is the complete factorization of $3x^5 - 243x$ over the integers?",
    choices: [
      // distractor: removes the common factor $3x$ and stops
      { id: "A", text: "$3x(x^4 - 81)$" },
      // distractor: stops after the first difference-of-squares split, leaving $x^2 - 9$ factorable
      { id: "B", text: "$3x(x^2 - 9)(x^2 + 9)$" },
      { id: "C", text: "$3x(x - 3)(x + 3)(x^2 + 9)$" },
      // distractor: factors the sum $x^2 + 9$ as $(x + 3)(x - 3)$
      { id: "D", text: "$3x(x - 3)^2(x + 3)^2$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Nested Difference of Squares**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Pull out $3x$ first: $3x(x^4 - 81)$. Then $x^4 - 81 = (x^2 - 9)(x^2 + 9)$ and $x^2 - 9 = (x - 3)(x + 3)$, giving $3x(x - 3)(x + 3)(x^2 + 9)$.\n\n**The Full Solution:**\nStep 1: The greatest common factor of $3x^5$ and $243x$ is $3x$, so $3x^5 - 243x = 3x(x^4 - 81)$.\nStep 2: $x^4 - 81 = (x^2)^2 - 9^2 = (x^2 - 9)(x^2 + 9)$.\nStep 3: $x^2 - 9 = (x - 3)(x + 3)$, while $x^2 + 9$ is a sum of squares and is irreducible over the integers. The complete factorization is $3x(x - 3)(x + 3)(x^2 + 9)$. Check at $x = 2$: the original is $3(32) - 486 = -390$, and $3(2)(-1)(5)(13) = -390$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3x(x^4 - 81)$): a correct first move, but $x^4 - 81$ is still a difference of squares.\n* Choice B ($3x(x^2 - 9)(x^2 + 9)$): stops one step early — $x^2 - 9$ factors further.\n* Choice D ($3x(x - 3)^2(x + 3)^2$): treats $x^2 + 9$ as $(x - 3)(x + 3)$, but that product is $x^2 - 9$.\n\n**Test Day Takeaway:** Always factor out the greatest common factor first; it often exposes a difference of squares that then splits twice.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "nested-difference-of-squares",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // ── perfect-square-trinomial (4 questions) ────────────────────────
  {
    id: "bank-am-068",
    domain: "advanced-math",
    skills: ["perfect-square-trinomial"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "For all values of $x$, the expression $(2x + 5)^2$ is equivalent to which of the following?",
    choices: [
      // distractor: squares only the variable in $2x$, writing $(2x)^2$ as $2x^2$
      { id: "A", text: "$2x^2 + 20x + 25$" },
      // distractor: squares each term separately and drops the middle term
      { id: "B", text: "$4x^2 + 25$" },
      // distractor: uses $2(x)(5) = 10x$ for the middle term, ignoring the coefficient $2$ in $2x$
      { id: "C", text: "$4x^2 + 10x + 25$" },
      { id: "D", text: "$4x^2 + 20x + 25$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Expand Perfect Square**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** $(A + B)^2 = A^2 + 2AB + B^2$ with $A = 2x$ and $B = 5$: $4x^2 + 2(2x)(5) + 25 = 4x^2 + 20x + 25$.\n\n**The Full Solution:**\nStep 1: Write the square as a product: $(2x + 5)^2 = (2x + 5)(2x + 5)$.\nStep 2: Multiply term by term: $(2x)(2x) = 4x^2$, $(2x)(5) + (5)(2x) = 20x$, and $(5)(5) = 25$.\nStep 3: The expansion is $4x^2 + 20x + 25$. Check at $x = 1$: $(2 + 5)^2 = 49$, and $4 + 20 + 25 = 49$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2x^2 + 20x + 25$): squares the variable but not its coefficient, writing $(2x)^2$ as $2x^2$.\n* Choice B ($4x^2 + 25$): squares each term separately, which is the most common perfect-square error — the middle term $2AB$ disappears.\n* Choice C ($4x^2 + 10x + 25$): computes the middle term as $2(x)(5) = 10x$, forgetting that $A = 2x$, not $x$.\n\n**Test Day Takeaway:** A binomial square always has three terms. Write $2AB$ explicitly, using the entire first term including its coefficient.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "expand-perfect-square",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-069",
    domain: "advanced-math",
    skills: ["perfect-square-trinomial"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Which of the following is a factorization of the expression $25x^2 + 40x + 16$?",
    choices: [
      // distractor: sign slip: this square has a $-40x$ middle term
      { id: "A", text: "$(5x - 4)^2$" },
      { id: "B", text: "$(5x + 4)^2$" },
      // distractor: treats the trinomial as a difference of squares, which erases the middle term
      { id: "C", text: "$(5x + 4)(5x - 4)$" },
      // distractor: uses $25$ and $16$ themselves as the factor terms instead of their square roots
      { id: "D", text: "$(25x + 16)(x + 1)$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Factor Perfect Square Trinomial**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $25x^2 = (5x)^2$, $16 = 4^2$, and $2(5x)(4) = 40x$ matches the middle term, so the trinomial is $(5x + 4)^2$.\n\n**The Full Solution:**\nStep 1: Check the outer terms for perfect squares: $\\sqrt{25x^2} = 5x$ and $\\sqrt{16} = 4$.\nStep 2: Test the middle term against $2AB$: $2(5x)(4) = 40x$, which is exactly the middle term, and it is positive, so both signs are positive.\nStep 3: Therefore $25x^2 + 40x + 16 = (5x + 4)^2$. Check at $x = 1$: $25 + 40 + 16 = 81$, and $(5 + 4)^2 = 81$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(5x - 4)^2$): the right square roots with the wrong sign; expanding gives $25x^2 - 40x + 16$.\n* Choice C ($(5x + 4)(5x - 4)$): applies the difference-of-squares pattern, giving $25x^2 - 16$ with no middle term at all.\n* Choice D ($(25x + 16)(x + 1)$): uses $25$ and $16$ as the factor terms rather than $5$ and $4$; expanding gives $25x^2 + 41x + 16$.\n\n**Test Day Takeaway:** A trinomial is a perfect square only if the middle term equals $2AB$. Verify that product before you commit to the squared form, and let its sign choose the sign inside.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "factor-perfect-square",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-070",
    domain: "advanced-math",
    skills: ["perfect-square-trinomial"],
    difficulty: "medium",
    type: "fill-in",
    question: "In the expression $x^2 - 18x + c$, $c$ is a constant. If the expression can be written in the form $(x - d)^2$, where $d$ is a constant, what is the value of $c$?",
    correctAnswer: "81",
    explanation: "**SAT Pattern: Complete the Square (Find Constant)**\n\n**The correct answer is $81$.**\n\n**The Fast Way (~15s):** Half of $18$ is $9$, and $9^2 = 81$, so $c = 81$ and the expression is $(x - 9)^2$.\n\n**The Full Solution:**\nStep 1: Expand the target form: $(x - d)^2 = x^2 - 2dx + d^2$.\nStep 2: Match the $x$-coefficients: $-2d = -18$, so $d = 9$.\nStep 3: Match the constants: $c = d^2 = 81$. Check: $(x - 9)^2 = x^2 - 18x + 81$. $\\checkmark$\n\n**Common Mistakes:** Reporting $9$, the value of $d$, instead of $d^2$; squaring the whole coefficient without halving it first, $18^2 = 324$; or writing $c = -81$ because the middle term is negative, even though a square is never negative.\n\n**Test Day Takeaway:** To complete the square on $x^2 + bx$, add $\\left(\\frac{b}{2}\\right)^2$. Halve first, then square — the order matters.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "complete-perfect-square",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-071",
    domain: "advanced-math",
    skills: ["perfect-square-trinomial"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The expression $9x^2 + kx + 64$ is a perfect-square trinomial, where $k$ is a constant. Which of the following gives all possible values of $k$?",
    choices: [
      // distractor: uses $3 \cdot 8 = 24$ and omits the factor of $2$ in $2AB$
      { id: "A", text: "$-24$ and $24$" },
      // distractor: uses $2 \cdot 8 = 16$, treating the leading coefficient as $1$
      { id: "B", text: "$-16$ and $16$" },
      // distractor: finds the magnitude but keeps only the positive value
      { id: "C", text: "$48$ only" },
      { id: "D", text: "$-48$ and $48$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Find k for Perfect Square Trinomial (Both Signs)**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** With $A = 3x$ and $B = 8$, the middle term must be $\\pm 2AB = \\pm 2(3)(8)x = \\pm 48x$, so $k = 48$ or $k = -48$.\n\n**The Full Solution:**\nStep 1: For $(Ax + B)^2 = A^2x^2 + 2ABx + B^2$, match the outer terms: $A^2 = 9$ gives $A = 3$, and $B^2 = 64$ gives $B = 8$ or $B = -8$.\nStep 2: The middle coefficient is $2AB$. With $B = 8$, $k = 2(3)(8) = 48$; with $B = -8$, $k = 2(3)(-8) = -48$.\nStep 3: Both work: $(3x + 8)^2 = 9x^2 + 48x + 64$ and $(3x - 8)^2 = 9x^2 - 48x + 64$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-24$ and $24$): computes $AB = 3 \\cdot 8 = 24$ and forgets to double it.\n* Choice B ($-16$ and $16$): uses $2(1)(8) = 16$, reading the leading coefficient as $1$ instead of taking $\\sqrt{9} = 3$.\n* Choice C ($48$ only): finds the correct magnitude but overlooks that $B^2 = 64$ has two square roots, so the middle term can be negative.\n\n**Test Day Takeaway:** A constant term that is a perfect square has two square roots, so \"perfect-square trinomial\" questions with an unknown middle coefficient almost always have a $\\pm$ answer.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "pst-parameter",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // ── simplifying-rational-expressions (4 questions) ────────────────
  {
    id: "bank-am-072",
    domain: "advanced-math",
    skills: ["simplifying-rational-expressions"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The expression $\\dfrac{x^2 - 9}{x^2 - 7x + 12}$ is defined for all values of $x$ except $x = 3$ and $x = 4$. Which of the following is equivalent to this expression?",
    choices: [
      { id: "A", text: "$\\dfrac{x + 3}{x - 4}$" },
      // distractor: cancels $(x + 3)$ instead of $(x - 3)$, keeping the wrong numerator factor
      { id: "B", text: "$\\dfrac{x - 3}{x - 4}$" },
      // distractor: factors the denominator as $(x - 3)(x + 4)$, a sign slip
      { id: "C", text: "$\\dfrac{x + 3}{x + 4}$" },
      // distractor: cancels the $x^2$ terms as if they were factors
      { id: "D", text: "$\\dfrac{9}{7x - 12}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Simplify Rational Expression (Cancel Common Factor)**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** $\\frac{(x - 3)(x + 3)}{(x - 3)(x - 4)}$ — the $(x - 3)$ factors cancel, leaving $\\frac{x + 3}{x - 4}$.\n\n**The Full Solution:**\nStep 1: Factor the numerator as a difference of squares: $x^2 - 9 = (x - 3)(x + 3)$.\nStep 2: Factor the denominator: two numbers with product $12$ and sum $-7$ are $-3$ and $-4$, so $x^2 - 7x + 12 = (x - 3)(x - 4)$.\nStep 3: Cancel the common factor $(x - 3)$, which is nonzero because $x \\neq 3$: the expression equals $\\frac{x + 3}{x - 4}$. Check at $x = 0$: the original is $\\frac{-9}{12} = -\\frac{3}{4}$, and $\\frac{3}{-4} = -\\frac{3}{4}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{x - 3}{x - 4}$): cancels the $(x + 3)$ factor, which appears only in the numerator, instead of the shared $(x - 3)$.\n* Choice C ($\\frac{x + 3}{x + 4}$): factors the denominator as $(x - 3)(x + 4)$; that product is $x^2 + x - 12$, not the given denominator.\n* Choice D ($\\frac{9}{7x - 12}$): cancels the $x^2$ terms term by term. Only common *factors* cancel, never individual terms of a sum.\n\n**Test Day Takeaway:** Factor both parts completely before you cancel anything, and cancel only whole factors that appear in both.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "simplify-rational",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-073",
    domain: "advanced-math",
    skills: ["simplifying-rational-expressions"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The expression $\\dfrac{3x^2 - 27}{6x + 18}$ is defined for all $x \\neq -3$. Which of the following is equivalent to this expression?",
    choices: [
      // distractor: reduces $\frac{3}{6}$ to $\frac{1}{3}$ instead of $\frac{1}{2}$
      { id: "A", text: "$\\dfrac{x - 3}{3}$" },
      // distractor: divides the $6$ by $3$ but leaves the $3$ in the numerator
      { id: "B", text: "$\\dfrac{3(x - 3)}{2}$" },
      // distractor: cancels $(x - 3)$ instead of the shared factor $(x + 3)$
      { id: "C", text: "$\\dfrac{x + 3}{2}$" },
      { id: "D", text: "$\\dfrac{x - 3}{2}$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Factor Out GCF then Cancel**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** $\\frac{3(x - 3)(x + 3)}{6(x + 3)}$ — cancel $(x + 3)$ and reduce $\\frac{3}{6}$ to get $\\frac{x - 3}{2}$.\n\n**The Full Solution:**\nStep 1: Factor the greatest common factor out of each part: $3x^2 - 27 = 3(x^2 - 9)$ and $6x + 18 = 6(x + 3)$.\nStep 2: Factor the difference of squares: $3(x^2 - 9) = 3(x - 3)(x + 3)$.\nStep 3: Cancel the common factor $(x + 3)$ and reduce $\\frac{3}{6} = \\frac{1}{2}$, leaving $\\frac{x - 3}{2}$. Check at $x = 0$: the original is $\\frac{-27}{18} = -\\frac{3}{2}$, and $\\frac{-3}{2} = -\\frac{3}{2}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{x - 3}{3}$): cancels the $3$ into the $6$ but records the result as $\\frac{1}{3}$ rather than $\\frac{1}{2}$.\n* Choice B ($\\frac{3(x - 3)}{2}$): divides the denominator's $6$ by $3$ but forgets to remove the matching $3$ from the numerator, so the value is tripled.\n* Choice C ($\\frac{x + 3}{2}$): cancels the $(x - 3)$ factor, which the denominator does not contain.\n\n**Test Day Takeaway:** Numeric coefficients cancel by division, variable factors by matching. Do both, and check the reduced coefficient by plugging in a number.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "simplify-rational",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-074",
    domain: "advanced-math",
    skills: ["simplifying-rational-expressions"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "Which expression is equivalent to $\\dfrac{x^2 - 2x - 15}{x^2 - 25} \\cdot \\dfrac{x^2 + 5x}{x^2 - 9}$ for all values of $x$ where the expression is defined?",
    choices: [
      { id: "A", text: "$\\dfrac{x}{x - 3}$" },
      // distractor: drops the leftover factor $x$ from $x^2 + 5x$
      { id: "B", text: "$\\dfrac{1}{x - 3}$" },
      // distractor: cancels $(x - 3)$ instead of $(x + 3)$ from $x^2 - 9$
      { id: "C", text: "$\\dfrac{x}{x + 3}$" },
      // distractor: moves the leftover $(x + 3)$ into the numerator instead of cancelling it
      { id: "D", text: "$\\dfrac{x(x + 3)}{x - 3}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Multiply Rational Expressions (Factor + Cancel)**\n\n**Choice A is correct.**\n\n**The Fast Way (~50s):** Factor everything: $\\frac{(x - 5)(x + 3)}{(x - 5)(x + 5)} \\cdot \\frac{x(x + 5)}{(x - 3)(x + 3)}$. The $(x - 5)$, $(x + 5)$, and $(x + 3)$ pairs all cancel, leaving $\\frac{x}{x - 3}$.\n\n**The Full Solution:**\nStep 1: Factor each quadratic: $x^2 - 2x - 15 = (x - 5)(x + 3)$, $x^2 - 25 = (x - 5)(x + 5)$, $x^2 + 5x = x(x + 5)$, and $x^2 - 9 = (x - 3)(x + 3)$.\nStep 2: Write the product as one fraction: $\\frac{(x - 5)(x + 3) \\cdot x(x + 5)}{(x - 5)(x + 5) \\cdot (x - 3)(x + 3)}$.\nStep 3: Cancel the matching factors $(x - 5)$, $(x + 5)$, and $(x + 3)$, leaving $\\frac{x}{x - 3}$. Check at $x = 1$: the original is $\\frac{-16}{-24} \\cdot \\frac{6}{-8} = \\frac{2}{3} \\cdot \\left(-\\frac{3}{4}\\right) = -\\frac{1}{2}$, and $\\frac{1}{1 - 3} = -\\frac{1}{2}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{1}{x - 3}$): cancels the whole factor $x(x + 5)$ against $(x + 5)$, discarding the $x$ that should survive.\n* Choice C ($\\frac{x}{x + 3}$): cancels $(x - 3)$ with $(x + 3)$; those are different factors and never cancel.\n* Choice D ($\\frac{x(x + 3)}{x - 3}$): keeps the numerator's $(x + 3)$ even though the denominator of the second fraction contains the same factor.\n\n**Test Day Takeaway:** For a product of rational expressions, factor all four pieces first and cancel across the whole product — never multiply the quadratics out.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "multiply-rational",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-075",
    domain: "advanced-math",
    skills: ["simplifying-rational-expressions"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "For $x \\neq 0$ and $x \\neq 5$, which expression is equivalent to $\\dfrac{\\frac{1}{x} - \\frac{1}{5}}{\\frac{x - 5}{10}}$?",
    choices: [
      // distractor: inverts the top fraction instead of the bottom one
      { id: "A", text: "$-\\dfrac{x}{2}$" },
      { id: "B", text: "$-\\dfrac{2}{x}$" },
      // distractor: cancels $\frac{10}{5}$ as $1$ instead of $2$
      { id: "C", text: "$-\\dfrac{1}{x}$" },
      // distractor: writes the numerator as $\frac{x - 5}{5x}$, reversing the subtraction
      { id: "D", text: "$\\dfrac{2}{x}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Complex Fraction Simplification**\n\n**Choice B is correct.**\n\n**The Fast Way (~50s):** The top combines to $\\frac{5 - x}{5x}$. Dividing by $\\frac{x - 5}{10}$ means multiplying by $\\frac{10}{x - 5}$, and $\\frac{5 - x}{x - 5} = -1$, so the result is $-\\frac{10}{5x} = -\\frac{2}{x}$.\n\n**The Full Solution:**\nStep 1: Combine the numerator over the common denominator $5x$: $\\frac{1}{x} - \\frac{1}{5} = \\frac{5 - x}{5x}$.\nStep 2: Division by a fraction is multiplication by its reciprocal: $\\frac{5 - x}{5x} \\cdot \\frac{10}{x - 5}$.\nStep 3: Since $5 - x = -(x - 5)$, the $(x - 5)$ factors cancel with a leftover $-1$: $-\\frac{10}{5x} = -\\frac{2}{x}$. Check at $x = 1$: the original is $\\frac{1 - 0.2}{-0.4} = -2$, and $-\\frac{2}{1} = -2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{x}{2}$): flips the numerator fraction instead of the denominator fraction, computing $\\frac{5x}{5 - x} \\cdot \\frac{x - 5}{10} = -\\frac{x}{2}$.\n* Choice C ($-\\frac{1}{x}$): handles the sign correctly but reduces $\\frac{10}{5x}$ to $\\frac{1}{x}$, losing the factor $2$.\n* Choice D ($\\frac{2}{x}$): writes $\\frac{1}{x} - \\frac{1}{5}$ as $\\frac{x - 5}{5x}$, which reverses the subtraction and flips the sign of the answer.\n\n**Test Day Takeaway:** Simplify a complex fraction in two moves: combine the top into a single fraction, then multiply by the reciprocal of the bottom. Watch for $a - b$ against $b - a$ — that pair cancels to $-1$, not $1$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "complex-fraction",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // === EXPONENTIAL GROWTH/DECAY (8 questions) — Phase 2 priority pattern ===
  // 19x in 12 tests = 3.6% of test items. Covers: model construction from
  // doubling/halving language, factor interpretation, percent-change extraction,
  // period mismatch, and compounded-to-annual rate conversion.
  {
    id: "bank-am-076",
    domain: "advanced-math",
    skills: ["exponential-growth-decay"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The table gives the mass, in grams, of a yeast culture at three times during an experiment, and the mass grows exponentially with time. Which function $m$ gives the mass, in grams, $t$ hours after the experiment began?",
    questionTable: { headers: ["Time t (hours)", "Mass (grams)"], rows: [["0", "40"], ["1", "120"], ["2", "360"]] },
    choices: [
      { id: "A", text: "$m(t) = 40(3)^t$" },
      // distractor: swaps the initial amount and the growth factor
      { id: "B", text: "$m(t) = 3(40)^t$" },
      // distractor: multiplies by $3t$ instead of raising $3$ to the power $t$
      { id: "C", text: "$m(t) = 40(3t)$" },
      // distractor: uses the mass at $t = 1$ as the initial amount
      { id: "D", text: "$m(t) = 120(3)^t$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The mass triples each hour ($40 \\to 120 \\to 360$) and starts at $40$ grams, so $m(t) = 40(3)^t$.\n\n**The Full Solution:**\nStep 1: An exponential model has the form $m(t) = m_0(b)^t$, where $m_0$ is the value at $t = 0$ and $b$ is the factor per hour.\nStep 2: The table gives $m_0 = 40$ grams, and each step multiplies the mass by $\\frac{120}{40} = 3$, so $b = 3$.\nStep 3: The model is $m(t) = 40(3)^t$. Check at $t = 2$: $40(3)^2 = 40(9) = 360$ grams, matching the table. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($m(t) = 3(40)^t$): puts the growth factor in front and the initial mass in the exponent's base; at $t = 0$ this gives $3$ grams, not $40$.\n* Choice C ($m(t) = 40(3t)$): multiplies by $3t$ instead of raising $3$ to the $t$, which describes a linear pattern; at $t = 2$ it gives $240$ grams.\n* Choice D ($m(t) = 120(3)^t$): reads the initial amount from the $t = 1$ row instead of the $t = 0$ row.\n\n**Test Day Takeaway:** In $m_0(b)^t$, the coefficient is the value at $t = 0$ and the base is the constant multiplier per unit of time. Get both from the table before you look at the choices.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "exponential-growth-decay",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-077",
    domain: "advanced-math",
    skills: ["exponential-growth-decay"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The function $h$ is defined by $h(x) = 250(1.12)^x$, where $h(x)$ is the number of members of a hiking club $x$ years after 2018. Which of the following is the best interpretation of $1.12$ in this context?",
    choices: [
      // distractor: reads the base as an initial amount, which is the role of $250$
      { id: "A", text: "The club had $112$ members in 2018." },
      { id: "B", text: "The number of members increases by $12\\%$ each year." },
      // distractor: reads the base as a constant amount added each year (a linear model)
      { id: "C", text: "The number of members increases by $1.12$ members each year." },
      // distractor: reads the digits $12$ as a multiplier instead of a percent increase
      { id: "D", text: "The number of members is $12$ times as great each year." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** In $a(b)^x$, the base is $1 + r$. Here $1.12 = 1 + 0.12$, so membership grows by $12\\%$ per year.\n\n**The Full Solution:**\nStep 1: The model $h(x) = 250(1.12)^x$ multiplies the membership by $1.12$ for each increase of $1$ in $x$, where $x$ counts years.\nStep 2: Multiplying by $1.12$ keeps $100\\%$ of the previous total and adds $12\\%$ of it, since $1.12 = 1 + 0.12$.\nStep 3: So the yearly percent increase is $12\\%$. Check: $250(1.12) = 280$, and $\\frac{280 - 250}{250} = 0.12$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: assigns the base the role of the initial value; the $2018$ membership is the coefficient $250$.\n* Choice C: describes adding $1.12$ members per year, which would be linear growth, not repeated multiplication.\n* Choice D: reads \"$12$\" as the multiplier; a $12$-fold yearly increase would need a base of $12$, not $1.12$.\n\n**Test Day Takeaway:** Split an exponential base into $1 + r$ or $1 - r$. The digits after the decimal point are the percent change per unit of the exponent.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "exponential-growth-decay",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-078",
    domain: "advanced-math",
    skills: ["exponential-growth-decay", "percent-change"],
    difficulty: "medium",
    type: "fill-in",
    question: "The number of bees in a hive is modeled by $B(t) = 9{,}400(0.76)^{\\frac{t}{3}}$, where $t$ is the number of months since the count began. By what percent does the number of bees decrease every $3$ months?",
    correctAnswer: "24",
    explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**The correct answer is $24$.**\n\n**The Fast Way (~20s):** Every $3$ months the exponent increases by $1$, so the count is multiplied by $0.76$ — a decrease of $1 - 0.76 = 0.24$, or $24\\%$.\n\n**The Full Solution:**\nStep 1: Replacing $t$ with $t + 3$ raises the exponent $\\frac{t}{3}$ by exactly $1$, so $B(t + 3) = 0.76 \\cdot B(t)$.\nStep 2: A factor of $0.76$ leaves $76\\%$ of the previous count, so the count drops by $1 - 0.76 = 0.24$ of itself.\nStep 3: As a percent, that is $24\\%$. Check: $B(0) = 9{,}400$ and $B(3) = 9{,}400(0.76) = 7{,}144$, and $\\frac{9{,}400 - 7{,}144}{9{,}400} = 0.24$. $\\checkmark$\n\n**Common Mistakes:** Reporting $76$, the percent that remains rather than the percent lost; reporting $0.76$ instead of converting the factor to a percent decrease; or dividing the $24\\%$ by the $3$ months in the exponent to get $8$, which answers a question about one month that the model does not support.\n\n**Test Day Takeaway:** The percent change belongs to whatever period makes the exponent increase by $1$. Read the denominator in the exponent before you name the period.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "exponential-growth-decay",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-079",
    domain: "advanced-math",
    skills: ["exponential-growth-decay"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A sample of a compound has a mass of $180$ milligrams, and the mass is reduced by half every $12$ minutes. Which function $M$ gives the mass, in milligrams, $t$ minutes after the sample was measured?",
    choices: [
      // distractor: halves the initial mass instead of using it as the coefficient
      { id: "A", text: "$M(t) = 90\\left(\\frac{1}{2}\\right)^{\\frac{t}{12}}$" },
      // distractor: multiplies $t$ by $12$ instead of dividing, so the mass halves every minute twelve times over
      { id: "B", text: "$M(t) = 180\\left(\\frac{1}{2}\\right)^{12t}$" },
      { id: "C", text: "$M(t) = 180\\left(\\frac{1}{2}\\right)^{\\frac{t}{12}}$" },
      // distractor: uses a base of $2$, which doubles the mass instead of halving it
      { id: "D", text: "$M(t) = 180(2)^{\\frac{t}{12}}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Start at $180$, multiply by $\\frac{1}{2}$, and let the exponent count $12$-minute periods: $M(t) = 180\\left(\\frac{1}{2}\\right)^{\\frac{t}{12}}$.\n\n**The Full Solution:**\nStep 1: The model is $M(t) = M_0(b)^{\\frac{t}{p}}$, where $M_0$ is the initial mass, $b$ is the factor per period, and $p$ is the length of one period.\nStep 2: Here $M_0 = 180$ milligrams, $b = \\frac{1}{2}$ because the mass halves, and $p = 12$ minutes.\nStep 3: So $M(t) = 180\\left(\\frac{1}{2}\\right)^{\\frac{t}{12}}$. Check at $t = 12$: $180\\left(\\frac{1}{2}\\right)^1 = 90$ milligrams, exactly half the starting mass. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: uses $90$ as the coefficient, which is the mass after one half-life, not at $t = 0$.\n* Choice B: writes the exponent as $12t$, so at $t = 12$ the mass would be halved $144$ times.\n* Choice D: keeps the right period but uses base $2$, which models doubling; at $t = 12$ it gives $360$ milligrams.\n\n**Test Day Takeaway:** Divide the time variable by the length of one period. If a period is $p$ units long, the exponent is $\\frac{t}{p}$ — never $pt$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "exponential-growth-decay",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-080",
    domain: "advanced-math",
    skills: ["exponential-growth-decay"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The number of subscribers to a streaming service increases by $8\\%$ every $6$ months. The service had $45{,}000$ subscribers on January 1, 2022. Which expression gives the number of subscribers $y$ years after January 1, 2022?",
    choices: [
      { id: "A", text: "$45{,}000(1.08)^{2y}$" },
      // distractor: divides by $2$ instead of multiplying, giving one increase every two years
      { id: "B", text: "$45{,}000(1.08)^{\\frac{y}{2}}$" },
      // distractor: uses the $6$ from "6 months" as the number of periods per year
      { id: "C", text: "$45{,}000(1.08)^{6y}$" },
      // distractor: doubles the rate instead of doubling the number of periods
      { id: "D", text: "$45{,}000(1.16)^{y}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** There are $2$ six-month periods per year, so the factor $1.08$ is applied $2y$ times: $45{,}000(1.08)^{2y}$.\n\n**The Full Solution:**\nStep 1: An $8\\%$ increase multiplies the count by $1 + 0.08 = 1.08$ once per six-month period.\nStep 2: In $y$ years there are $2y$ six-month periods, so the factor $1.08$ is applied $2y$ times.\nStep 3: The expression is $45{,}000(1.08)^{2y}$. Check at $y = 1$: $45{,}000(1.08)^2 = 52{,}488$, which is $45{,}000$ increased by $8\\%$ twice. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($45{,}000(1.08)^{\\frac{y}{2}}$): divides instead of multiplying, modeling one $8\\%$ increase every two years.\n* Choice C ($45{,}000(1.08)^{6y}$): reads \"$6$ months\" as six periods per year, applying the increase six times a year.\n* Choice D ($45{,}000(1.16)^y$): doubles the rate to $16\\%$ per year; compounding twice gives $16.64\\%$, not $16\\%$.\n\n**Test Day Takeaway:** When the period is shorter than the time unit, multiply the exponent by how many periods fit in one unit. Two half-years per year means an exponent of $2y$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "exponential-growth-decay",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-081",
    domain: "advanced-math",
    skills: ["exponential-growth-decay"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A machine's resale value is modeled by $R(t) = 42{,}000(0.85)^t$, where $R(t)$ is the resale value in dollars and $t$ is the number of years since the machine was purchased. Which statement best describes what $0.85$ represents in this model?",
    choices: [
      // distractor: reads the decay factor itself as the percent decrease
      { id: "A", text: "The resale value decreases by $85\\%$ each year." },
      { id: "B", text: "The resale value decreases by $15\\%$ each year." },
      // distractor: treats the factor as a fixed dollar amount subtracted each year
      { id: "C", text: "The resale value decreases by $0.85$ dollar each year." },
      // distractor: swaps the percent retained with the percent lost
      { id: "D", text: "The resale value is $15\\%$ of its value the previous year." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $0.85 = 1 - 0.15$, so each year the machine keeps $85\\%$ of its value and loses $15\\%$ of it.\n\n**The Full Solution:**\nStep 1: Each increase of $1$ in $t$ multiplies the resale value by $0.85$.\nStep 2: Write the factor as $1 - r$: $0.85 = 1 - 0.15$, so $r = 0.15$ is the fraction of the value lost each year.\nStep 3: That is a $15\\%$ decrease per year. Check: $R(0) = 42{,}000$ and $R(1) = 35{,}700$, and $\\frac{42{,}000 - 35{,}700}{42{,}000} = 0.15$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: reports the factor as the loss; an $85\\%$ drop would leave a factor of $0.15$.\n* Choice C: describes subtracting a fixed amount each year, which is a linear model, not repeated multiplication.\n* Choice D: reverses the roles — the machine retains $85\\%$ of its previous value, not $15\\%$.\n\n**Test Day Takeaway:** For a decay factor $b$, the percent decrease is $1 - b$, not $b$. Always convert the base to $1 \\pm r$ before choosing an interpretation.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "exponential-growth-decay",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-082",
    domain: "advanced-math",
    skills: ["exponential-growth-decay", "percent-change"],
    difficulty: "hard",
    type: "fill-in",
    question: "The value of an investment account is modeled by $V(t) = 6{,}200(1.015)^{4t}$, where $V(t)$ is the value in dollars and $t$ is the number of years since the account was opened. To the nearest tenth of a percent, what is the annual percent increase in the value of the account?",
    correctAnswer: "6.1",
    explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**The correct answer is $6.1$.**\n\n**The Fast Way (~40s):** One year multiplies the value by $(1.015)^4 \\approx 1.0614$, an increase of about $6.1\\%$.\n\n**The Full Solution:**\nStep 1: Rewrite the model with a yearly base: $6{,}200(1.015)^{4t} = 6{,}200\\left[(1.015)^4\\right]^t$.\nStep 2: Compute the yearly factor: $(1.015)^4 = 1.06136\\ldots$\nStep 3: Subtract $1$ and convert: $1.06136 - 1 = 0.06136$, which is $6.136\\%$, or $6.1\\%$ to the nearest tenth. Check: $6{,}200(1.015)^4 = 6{,}580.45$, and one $6.136\\%$ increase gives $6{,}200(1.06136) = 6{,}580.43$ — the same amount to the nearest dollar. $\\checkmark$\n\n**Common Mistakes:** Multiplying the quarterly rate by $4$ to get $6.0$, which ignores compounding; reporting $1.5$, the rate for one quarter rather than one year; or reporting $106.1$, the growth factor as a percent instead of the percent increase.\n\n**Test Day Takeaway:** To convert a model with exponent $nt$ into a per-unit rate, raise the base to the $n$ and subtract $1$. Compounding always makes the annual rate slightly larger than $n$ times the periodic rate.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "exponential-growth-decay",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-083",
    domain: "advanced-math",
    skills: ["exponential-growth-decay", "percent-change"],
    difficulty: "hard",
    type: "fill-in",
    question: "A sample of a radioactive isotope decays according to $A(t) = 750(0.5)^{\\frac{t}{18}}$, where $A(t)$ is the mass in grams and $t$ is the time in hours. To the nearest hundredth of a percent, by what percent does the mass decrease each hour?",
    correctAnswer: "3.78",
    explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**The correct answer is $3.78$.**\n\n**The Fast Way (~40s):** The hourly factor is $(0.5)^{\\frac{1}{18}} \\approx 0.96222$, so the hourly loss is $1 - 0.96222 = 0.03778$, about $3.78\\%$.\n\n**The Full Solution:**\nStep 1: Rewrite the model so the exponent counts hours: $750(0.5)^{\\frac{t}{18}} = 750\\left[(0.5)^{\\frac{1}{18}}\\right]^t$.\nStep 2: Compute the hourly factor: $(0.5)^{\\frac{1}{18}} = 0.9622238\\ldots$\nStep 3: The percent decrease is $1 - 0.9622238 = 0.0377762$, or $3.77762\\%$, which rounds to $3.78\\%$. Check: $(0.9622238)^{18} = 0.5$, so eighteen hours of this decrease do halve the mass. $\\checkmark$\n\n**Common Mistakes:** Dividing the $50\\%$ half-life loss by $18$ to get $2.78$, which assumes the loss is spread evenly instead of compounded; reporting $96.22$, the percent of the mass that remains; or rounding $3.7776$ to $3.8$ when the question asks for hundredths.\n\n**Test Day Takeaway:** To rescale an exponential model to a new time unit, take the appropriate root of the base — $\\left(b^{\\frac{1}{p}}\\right)$ — and only then convert to a percent change.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "exponential-growth-decay",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },

  // === EXPONENT RULES WITH RADICALS (8 questions) — Phase 2 priority pattern ===
  // 15x in 12 tests = 2.8% of test items. Covers: multiply same-base radicals,
  // divide same-base radicals, nested radical with outer power, negative
  // exponent, p+q from rational form, identity-based value computation.
  {
    id: "bank-am-084",
    domain: "advanced-math",
    skills: ["exponent-laws"],
    difficulty: "easy",
    type: "fill-in",
    question: "For $x > 0$, the product $\\sqrt{x} \\cdot x^5$ is written in the form $x^k$. What is the value of $k$? Give your answer as a fraction.",
    correctAnswer: "11/2",
    explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $\\frac{11}{2}$.**\n\n**The Fast Way (~15s):** $\\sqrt{x} = x^{\\frac{1}{2}}$, and multiplying like bases adds exponents: $\\frac{1}{2} + 5 = \\frac{11}{2}$.\n\n**The Full Solution:**\nStep 1: Rewrite the radical as a fractional exponent: $\\sqrt{x} = x^{\\frac{1}{2}}$.\nStep 2: Multiply the powers by adding exponents: $x^{\\frac{1}{2}} \\cdot x^5 = x^{\\frac{1}{2} + 5}$.\nStep 3: $\\frac{1}{2} + 5 = \\frac{1}{2} + \\frac{10}{2} = \\frac{11}{2}$, so $k = \\frac{11}{2}$. Check at $x = 4$: $\\sqrt{4} \\cdot 4^5 = 2 \\cdot 1024 = 2048$, and $4^{\\frac{11}{2}} = 2^{11} = 2048$. $\\checkmark$\n\n**Common Mistakes:** Ignoring the radical and answering $5$; reading $\\sqrt{x}$ as $x^2$ and answering $7$; or multiplying the exponents instead of adding them, which gives $\\frac{5}{2}$.\n\n**Test Day Takeaway:** Convert every radical to a fractional exponent first. A square root is the power $\\frac{1}{2}$, and multiplication of like bases adds the exponents.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "exponent-rules-with-radicals",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-085",
    domain: "advanced-math",
    skills: ["exponent-laws"],
    difficulty: "easy",
    type: "fill-in",
    question: "If $3^y = 81$, what is the value of $3^{y + 2}$?",
    correctAnswer: "729",
    explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $729$.**\n\n**The Fast Way (~10s):** $3^{y + 2} = 3^y \\cdot 3^2 = 81 \\cdot 9 = 729$.\n\n**The Full Solution:**\nStep 1: Split the exponent using the product rule: $3^{y + 2} = 3^y \\cdot 3^2$.\nStep 2: Substitute the given value $3^y = 81$ and evaluate $3^2 = 9$: the expression is $81 \\cdot 9$.\nStep 3: $81 \\cdot 9 = 729$. Check: $3^y = 81$ means $y = 4$, and $3^{4 + 2} = 3^6 = 729$. $\\checkmark$\n\n**Common Mistakes:** Adding $2$ to the value and answering $83$; multiplying the value by $2$ and answering $162$; or reporting $6$, the new exponent $y + 2$, instead of the power's value.\n\n**Test Day Takeaway:** An added constant in an exponent becomes a multiplied factor: $b^{m + n} = b^m \\cdot b^n$. You rarely need to solve for the variable itself.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "exponent-rules-with-radicals",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-086",
    domain: "advanced-math",
    skills: ["exponent-laws"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "For $x > 0$, the expression $\\sqrt[4]{x^3} \\cdot \\sqrt{x^7}$ is equivalent to $x^{\\frac{p}{q}}$, where $\\frac{p}{q}$ is in lowest terms. What is the value of $p + q$?",
    choices: [
      // distractor: adds numerators and denominators separately, giving $\frac{10}{6} = \frac{5}{3}$
      { id: "A", text: "$8$" },
      { id: "B", text: "$21$" },
      // distractor: multiplies the exponents instead of adding them, giving $\frac{21}{8}$
      { id: "C", text: "$29$" },
      // distractor: inverts each fractional exponent, giving $x^{\frac{4}{3}} \cdot x^{\frac{2}{7}} = x^{\frac{34}{21}}$
      { id: "D", text: "$55$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The exponents are $\\frac{3}{4}$ and $\\frac{7}{2}$, and $\\frac{3}{4} + \\frac{7}{2} = \\frac{17}{4}$, so $p + q = 17 + 4 = 21$.\n\n**The Full Solution:**\nStep 1: Convert both radicals: $\\sqrt[4]{x^3} = x^{\\frac{3}{4}}$ and $\\sqrt{x^7} = x^{\\frac{7}{2}}$.\nStep 2: Multiplying like bases adds exponents: $\\frac{3}{4} + \\frac{7}{2} = \\frac{3}{4} + \\frac{14}{4} = \\frac{17}{4}$, which is already in lowest terms.\nStep 3: So $p = 17$, $q = 4$, and $p + q = 21$. Check at $x = 16$: $\\sqrt[4]{16^3} \\cdot \\sqrt{16^7} = 8 \\cdot 16384 = 131072 = 2^{17}$, and $16^{\\frac{17}{4}} = 2^{17}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): adds the numerators and the denominators, $\\frac{3 + 7}{4 + 2} = \\frac{5}{3}$, giving $5 + 3$.\n* Choice C ($29$): multiplies the exponents, $\\frac{3}{4} \\cdot \\frac{7}{2} = \\frac{21}{8}$, giving $21 + 8$.\n* Choice D ($55$): flips each fractional exponent to $\\frac{4}{3}$ and $\\frac{2}{7}$, whose sum $\\frac{34}{21}$ gives $34 + 21$.\n\n**Test Day Takeaway:** In $\\sqrt[n]{x^m} = x^{\\frac{m}{n}}$ the index is the denominator. Rewrite first, then add exponents over a common denominator.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "exponent-rules-with-radicals",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-087",
    domain: "advanced-math",
    skills: ["exponent-laws"],
    difficulty: "medium",
    type: "fill-in",
    question: "If $x$ is a positive number and $\\dfrac{x^{\\frac{7}{3}}}{x^{\\frac{1}{4}}} = x^k$, what is the value of $k$? Give your answer as a fraction.",
    correctAnswer: "25/12",
    explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $\\frac{25}{12}$.**\n\n**The Fast Way (~20s):** Dividing like bases subtracts exponents: $\\frac{7}{3} - \\frac{1}{4} = \\frac{28 - 3}{12} = \\frac{25}{12}$.\n\n**The Full Solution:**\nStep 1: Apply the quotient rule: $\\frac{x^{\\frac{7}{3}}}{x^{\\frac{1}{4}}} = x^{\\frac{7}{3} - \\frac{1}{4}}$.\nStep 2: Use the common denominator $12$: $\\frac{7}{3} = \\frac{28}{12}$ and $\\frac{1}{4} = \\frac{3}{12}$.\nStep 3: $\\frac{28}{12} - \\frac{3}{12} = \\frac{25}{12}$, so $k = \\frac{25}{12}$. Check at $x = 2^{12}$: the numerator is $2^{28}$, the denominator is $2^3$, and $\\frac{2^{28}}{2^3} = 2^{25} = \\left(2^{12}\\right)^{\\frac{25}{12}}$. $\\checkmark$\n\n**Common Mistakes:** Adding the exponents instead of subtracting, giving $\\frac{31}{12}$; dividing the exponents, giving $\\frac{7}{3} \\div \\frac{1}{4} = \\frac{28}{3}$; or subtracting numerators and denominators separately, which is not a valid operation on fractions.\n\n**Test Day Takeaway:** Division of like bases subtracts exponents — and subtracting fractions needs a common denominator, not a shortcut.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "exponent-rules-with-radicals",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-088",
    domain: "advanced-math",
    skills: ["exponent-laws"],
    difficulty: "medium",
    type: "fill-in",
    question: "For positive values of $x$, $(x^3 \\cdot \\sqrt{x})^5 = x^k$, where $k$ is a constant. What is the value of $k$? Enter your answer as a fraction.",
    correctAnswer: "35/2",
    explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $\\frac{35}{2}$.**\n\n**The Fast Way (~25s):** Inside the parentheses, $3 + \\frac{1}{2} = \\frac{7}{2}$; raising to the fifth power multiplies: $\\frac{7}{2} \\cdot 5 = \\frac{35}{2}$.\n\n**The Full Solution:**\nStep 1: Rewrite the radical and combine inside the parentheses: $x^3 \\cdot x^{\\frac{1}{2}} = x^{3 + \\frac{1}{2}} = x^{\\frac{7}{2}}$.\nStep 2: Apply the power-of-a-power rule: $\\left(x^{\\frac{7}{2}}\\right)^5 = x^{\\frac{7}{2} \\cdot 5}$.\nStep 3: $\\frac{7}{2} \\cdot 5 = \\frac{35}{2}$, so $k = \\frac{35}{2}$. Check at $x = 4$: $4^3 \\cdot \\sqrt{4} = 128 = 2^7$, and $\\left(2^7\\right)^5 = 2^{35} = 4^{\\frac{35}{2}}$. $\\checkmark$\n\n**Common Mistakes:** Adding the outer $5$ instead of multiplying by it, giving $\\frac{17}{2}$; multiplying only the $3$ by $5$ and leaving the $\\frac{1}{2}$ alone, giving $\\frac{31}{2}$; or reading $\\sqrt{x}$ as $x^2$, giving $(3 + 2)(5) = 25$.\n\n**Test Day Takeaway:** Work from the inside out: combine the exponents inside the parentheses first, then multiply by the outer power.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "exponent-rules-with-radicals",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-089",
    domain: "advanced-math",
    skills: ["exponent-laws"],
    difficulty: "medium",
    type: "fill-in",
    question: "The equation $\\dfrac{x^{\\frac{5}{2}} \\cdot x^{-\\frac{3}{4}}}{x^{\\frac{1}{3}}} = x^k$ is true for all $x > 0$. What is the value of $k$? Write your answer as a fraction.",
    correctAnswer: "17/12",
    explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $\\frac{17}{12}$.**\n\n**The Fast Way (~30s):** Add the two exponents on top and subtract the one below: $\\frac{5}{2} - \\frac{3}{4} - \\frac{1}{3} = \\frac{30 - 9 - 4}{12} = \\frac{17}{12}$.\n\n**The Full Solution:**\nStep 1: Combine the numerator with the product rule: $x^{\\frac{5}{2}} \\cdot x^{-\\frac{3}{4}} = x^{\\frac{5}{2} - \\frac{3}{4}}$.\nStep 2: Divide using the quotient rule: the exponent becomes $\\frac{5}{2} - \\frac{3}{4} - \\frac{1}{3}$.\nStep 3: Over the common denominator $12$: $\\frac{30}{12} - \\frac{9}{12} - \\frac{4}{12} = \\frac{17}{12}$, so $k = \\frac{17}{12}$. Check at $x = 2^{12}$: the expression is $\\frac{2^{30} \\cdot 2^{-9}}{2^4} = 2^{17}$, and $\\left(2^{12}\\right)^{\\frac{17}{12}} = 2^{17}$. $\\checkmark$\n\n**Common Mistakes:** Treating the negative exponent as positive and computing $\\frac{5}{2} + \\frac{3}{4} - \\frac{1}{3} = \\frac{35}{12}$; adding the denominator's exponent instead of subtracting it, giving $\\frac{25}{12}$; or moving $x^{-\\frac{3}{4}}$ to the denominator and then subtracting it a second time.\n\n**Test Day Takeaway:** Every factor above the bar contributes $+$ its exponent, every factor below contributes $-$. Write one signed sum and evaluate it over a common denominator.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "exponent-rules-with-radicals",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-090",
    domain: "advanced-math",
    skills: ["exponent-laws"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The constant $a$ is positive and satisfies $a^{\\frac{3}{4}} = 8$. What is the value of $a^{\\frac{9}{4}}$?",
    choices: [
      // distractor: reports $a$ itself, since $a = 8^{\frac{4}{3}} = 16$
      { id: "A", text: "$16$" },
      // distractor: multiplies $8$ by $3$ instead of cubing it
      { id: "B", text: "$24$" },
      { id: "C", text: "$512$" },
      // distractor: raises $8$ to the fourth power, using the denominator of the exponent
      { id: "D", text: "$4{,}096$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** $\\frac{9}{4} = 3 \\cdot \\frac{3}{4}$, so $a^{\\frac{9}{4}} = \\left(a^{\\frac{3}{4}}\\right)^3 = 8^3 = 512$.\n\n**The Full Solution:**\nStep 1: Notice that the target exponent is a multiple of the given one: $\\frac{9}{4} = 3 \\cdot \\frac{3}{4}$.\nStep 2: By the power-of-a-power rule, $a^{\\frac{9}{4}} = \\left(a^{\\frac{3}{4}}\\right)^3$.\nStep 3: Substitute the given value: $8^3 = 512$. Check by solving for $a$: $a = 8^{\\frac{4}{3}} = 16$, and $16^{\\frac{9}{4}} = \\left(2^4\\right)^{\\frac{9}{4}} = 2^9 = 512$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($16$): solves for $a$ and stops there; $a = 16$, but the question asks for $a^{\\frac{9}{4}}$.\n* Choice B ($24$): multiplies $8$ by $3$ instead of raising it to the third power.\n* Choice D ($4{,}096$): computes $8^4$, using the denominator $4$ rather than the ratio $\\frac{9/4}{3/4} = 3$.\n\n**Test Day Takeaway:** When one exponent is a multiple of another, treat the given power as a single block and raise that block — you never have to find the base.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "exponent-rules-with-radicals",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-091",
    domain: "advanced-math",
    skills: ["exponent-laws"],
    difficulty: "hard",
    type: "fill-in",
    question: "The quotient $\\dfrac{\\sqrt[4]{x^5}}{\\sqrt[3]{x^2}}$ is equal to $x^{\\frac{p}{q}}$ for every $x > 0$, where $\\frac{p}{q}$ is in lowest terms. What is the value of $p + q$?",
    correctAnswer: "19",
    explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $19$.**\n\n**The Fast Way (~35s):** The exponents are $\\frac{5}{4}$ and $\\frac{2}{3}$, and $\\frac{5}{4} - \\frac{2}{3} = \\frac{7}{12}$, so $p + q = 7 + 12 = 19$.\n\n**The Full Solution:**\nStep 1: Convert both radicals: $\\sqrt[4]{x^5} = x^{\\frac{5}{4}}$ and $\\sqrt[3]{x^2} = x^{\\frac{2}{3}}$.\nStep 2: Dividing like bases subtracts exponents: $\\frac{5}{4} - \\frac{2}{3} = \\frac{15}{12} - \\frac{8}{12} = \\frac{7}{12}$, which is in lowest terms.\nStep 3: So $p = 7$, $q = 12$, and $p + q = 19$. Check at $x = 2^{12}$: the expression is $\\frac{2^{15}}{2^8} = 2^7$, and $\\left(2^{12}\\right)^{\\frac{7}{12}} = 2^7$. $\\checkmark$\n\n**Common Mistakes:** Adding the exponents instead of subtracting, which gives $\\frac{23}{12}$ and an answer of $35$; reporting only the numerator $7$; or writing the exponents upside down as $\\frac{4}{5}$ and $\\frac{3}{2}$, which puts the index on top.\n\n**Test Day Takeaway:** $\\sqrt[n]{x^m} = x^{\\frac{m}{n}}$ — the power goes on top, the index underneath. Reduce the final fraction before reading off $p$ and $q$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "exponent-rules-with-radicals",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },

  // === VERTEX FORM FROM TWO CONDITIONS (8 questions) — Phase 2 batch 2 ===
  // 12x in 12 tests. Covers: solve-for-a from vertex+point, h+k/h-k/a+k
  // recovery from given form, y-intercept from vertex+point, function shift +
  // minimum, minimum-condition + point. SAT Pattern kebab matches:
  // 'vertex-form-from-two-conditions'.
  {
    id: "bank-am-092",
    domain: "advanced-math",
    skills: ["vertex-form", "function-evaluation"],
    difficulty: "easy",
    type: "fill-in",
    question: "In the $xy$-plane, the graph of $y = a(x - 1)^2 - 6$ is shown, where $a$ is a constant. The graph passes through the marked point $(3, 6)$. What is the value of $a$?",
    diagram: { type: "quadraticVertex", params: { vertex: [1, -6], a: 3, showPoints: [[3, 6]], showVertex: true } },
    correctAnswer: "3",
    explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~20s):** Substitute $(3, 6)$: $a(2)^2 - 6 = 6$, so $4a = 12$ and $a = 3$.\n\n**The Full Solution:**\nStep 1: Every point on the graph satisfies the equation, so replace $x$ with $3$ and $y$ with $6$: $6 = a(3 - 1)^2 - 6$.\nStep 2: Simplify the square: $(3 - 1)^2 = 4$, so $6 = 4a - 6$.\nStep 3: Add $6$ to both sides and divide: $12 = 4a$, so $a = 3$. Check: $y = 3(3 - 1)^2 - 6 = 12 - 6 = 6$, and the vertex is at $(1, -6)$ as shown. $\\checkmark$\n\n**Common Mistakes:** Forgetting to undo the $-6$ and solving $4a = 6$ to get $\\frac{3}{2}$; dividing by $2$ instead of $(3 - 1)^2 = 4$ and answering $6$; or computing the slope between the vertex and the marked point, $\\frac{6 - (-6)}{3 - 1} = 6$, which is not what $a$ measures.\n\n**Test Day Takeaway:** In vertex form the vertex is already built in, so one extra point is all you need. Substitute, undo the constant, then divide by the squared factor.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "vertex-form-from-two-conditions",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-093",
    domain: "advanced-math",
    skills: ["vertex-form", "function-evaluation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The graph of the quadratic function $f$ is shown in the $xy$-plane, and $f(x) = a(x - 2)^2 + k$, where $a$ and $k$ are constants. The graph passes through the marked point $(4, 4)$. What is the value of $a + k$?",
    diagram: { type: "quadraticVertex", params: { vertex: [2, -4], a: 2, showPoints: [[4, 4]], showVertex: true } },
    choices: [
      // distractor: computes $k - a$ instead of $a + k$
      { id: "A", text: "$-6$" },
      // distractor: solves $4a = 4$ without adding $k$ back, getting $a = 1$
      { id: "B", text: "$-3$" },
      { id: "C", text: "$-2$" },
      // distractor: reports the value of $a$ alone
      { id: "D", text: "$2$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The vertex is $(2, -4)$, so $k = -4$. Substituting $(4, 4)$ gives $4a - 4 = 4$, so $a = 2$ and $a + k = -2$.\n\n**The Full Solution:**\nStep 1: In $f(x) = a(x - 2)^2 + k$ the vertex is $(2, k)$; the graph shows the vertex at $(2, -4)$, so $k = -4$.\nStep 2: Substitute the marked point $(4, 4)$: $4 = a(4 - 2)^2 - 4$, so $4 = 4a - 4$ and $4a = 8$, giving $a = 2$.\nStep 3: Then $a + k = 2 + (-4) = -2$. Check: $f(x) = 2(x - 2)^2 - 4$ gives $f(4) = 8 - 4 = 4$ and $f(2) = -4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): computes $k - a = -4 - 2$ instead of the requested sum.\n* Choice B ($-3$): solves $4a = 4$ by forgetting to add the $4$ back when undoing $k = -4$, which gives $a = 1$ and $1 + (-4)$.\n* Choice D ($2$): finds $a = 2$ correctly but never adds $k$.\n\n**Test Day Takeaway:** Read $k$ straight off the vertex, then use the extra point for $a$. Finish by rereading exactly which combination of constants the question wants.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "vertex-form-from-two-conditions",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-094",
    domain: "advanced-math",
    skills: ["vertex-form"],
    difficulty: "medium",
    type: "fill-in",
    question: "The parabola shown in the $xy$-plane has its vertex at $(-1, -8)$ and passes through the marked point $(1, 0)$. What is the $y$-coordinate of the point on this parabola whose $x$-coordinate is $3$?",
    diagram: { type: "quadraticVertex", params: { vertex: [-1, -8], a: 2, showPoints: [[1, 0]], showVertex: true } },
    correctAnswer: "24",
    explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**The correct answer is $24$.**\n\n**The Fast Way (~40s):** Vertex form gives $y = a(x + 1)^2 - 8$; the point $(1, 0)$ forces $a = 2$, so at $x = 3$, $y = 2(16) - 8 = 24$.\n\n**The Full Solution:**\nStep 1: With vertex $(-1, -8)$, the equation is $y = a(x + 1)^2 - 8$.\nStep 2: Substitute $(1, 0)$: $0 = a(1 + 1)^2 - 8 = 4a - 8$, so $a = 2$ and $y = 2(x + 1)^2 - 8$.\nStep 3: Evaluate at $x = 3$: $y = 2(3 + 1)^2 - 8 = 2(16) - 8 = 24$. Check the symmetry: $x = 3$ is $4$ units right of the vertex and $x = -5$ is $4$ units left, and both give $y = 24$. $\\checkmark$\n\n**Common Mistakes:** Using $a = 1$ and answering $8$; writing the squared factor as $(x - 1)^2$ because the vertex's $x$-coordinate is negative, which gives $2(2)^2 - 8 = 0$; or trying to read the answer off the grid, where the curve has already left the visible window.\n\n**Test Day Takeaway:** A vertex plus one point pins down the whole parabola. Solve for $a$ first, then evaluate — the figure is a check, not a lookup table.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "vertex-form-from-two-conditions",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-095",
    domain: "advanced-math",
    skills: ["vertex-form"],
    difficulty: "medium",
    type: "fill-in",
    question: "In the $xy$-plane, the parabola with equation $y = 2(x - h)^2 + k$ has its vertex on the line $x = -3$ and passes through the point $(-1, 7)$, where $h$ and $k$ are constants. What is the value of $k$?",
    correctAnswer: "-1",
    explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**The correct answer is $-1$.**\n\n**The Fast Way (~30s):** The vertex lies on $x = -3$, so $h = -3$. Then $2(-1 + 3)^2 + k = 7$ gives $8 + k = 7$, so $k = -1$.\n\n**The Full Solution:**\nStep 1: In $y = 2(x - h)^2 + k$ the vertex is $(h, k)$. The vertex is on the line $x = -3$, so $h = -3$ and the equation is $y = 2(x + 3)^2 + k$.\nStep 2: Substitute the point $(-1, 7)$: $7 = 2(-1 + 3)^2 + k = 2(4) + k = 8 + k$.\nStep 3: So $k = 7 - 8 = -1$. Check: $y = 2(x + 3)^2 - 1$ gives $y = 2(4) - 1 = 7$ at $x = -1$. $\\checkmark$\n\n**Common Mistakes:** Using $h = 3$ instead of $h = -3$, which gives $2(-4)^2 + k = 7$ and $k = -25$; forgetting to square and computing $2(2) + k = 7$ to get $k = 3$; or reporting $h$ when the question asks for $k$.\n\n**Test Day Takeaway:** \"The vertex is on the line $x = c$\" is just $h = c$ in disguise. Substitute it into $(x - h)$ carefully — a negative $h$ turns the factor into a sum.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "vertex-form-from-two-conditions",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-096",
    domain: "advanced-math",
    skills: ["vertex-form", "function-evaluation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The graph of the quadratic function $g$ is shown in the $xy$-plane. Its vertex is $(1, -2)$, and the graph passes through the marked point $(3, 2)$. What is the value of $g(5)$?",
    diagram: { type: "quadraticVertex", params: { vertex: [1, -2], a: 1, showPoints: [[3, 2]], showVertex: true } },
    choices: [
      // distractor: forgets to square, computing $(5 - 1) - 2$
      { id: "A", text: "$2$" },
      { id: "B", text: "$14$" },
      // distractor: uses $+2$ for the vertex constant instead of $-2$
      { id: "C", text: "$18$" },
      // distractor: computes $5^2 - 2$, ignoring the horizontal shift
      { id: "D", text: "$23$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** The vertex gives $g(x) = a(x - 1)^2 - 2$; the point $(3, 2)$ forces $a = 1$, so $g(5) = (5 - 1)^2 - 2 = 14$.\n\n**The Full Solution:**\nStep 1: With vertex $(1, -2)$, write $g(x) = a(x - 1)^2 - 2$.\nStep 2: Substitute the marked point: $2 = a(3 - 1)^2 - 2$, so $4a = 4$ and $a = 1$. The function is $g(x) = (x - 1)^2 - 2$.\nStep 3: Evaluate: $g(5) = (5 - 1)^2 - 2 = 16 - 2 = 14$. Check with symmetry: $x = 5$ is $4$ units right of the vertex, and $x = -3$ is $4$ units left; $g(-3) = 16 - 2 = 14$ as well. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): computes $(5 - 1) - 2$ and never squares the shifted input.\n* Choice C ($18$): uses $+2$ as the constant, so $(5 - 1)^2 + 2 = 18$; the vertex $y$-value is $-2$.\n* Choice D ($23$): computes $5^2 - 2$, forgetting that the input is shifted by the vertex's $x$-coordinate.\n\n**Test Day Takeaway:** Build the equation from the vertex, pin $a$ with the marked point, and only then substitute. Reading a value straight off the grid fails as soon as the curve leaves the window.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "vertex-form-from-two-conditions",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-097",
    domain: "advanced-math",
    skills: ["vertex-form", "function-transformations"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The function $f$ is defined by $f(x) = (x + 5)^2 - 1$. The function $g$ is defined by $g(x) = f(x - 2) + 6$. At what value of $x$ does $g$ attain its minimum value?",
    choices: [
      // distractor: shifts left by $2$ instead of right, computing $-5 - 2$
      { id: "A", text: "$-7$" },
      // distractor: reports where $f$ is smallest, ignoring the horizontal shift
      { id: "B", text: "$-5$" },
      { id: "C", text: "$-3$" },
      // distractor: reads the vertex of $f$ as $x = 5$, dropping the sign
      { id: "D", text: "$3$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** $f$ bottoms out where its squared factor is zero, at $x = -5$. In $g(x) = f(x - 2) + 6$ that happens when $x - 2 = -5$, so $x = -3$.\n\n**The Full Solution:**\nStep 1: $f(x) = (x + 5)^2 - 1$ has its minimum where $(x + 5)^2 = 0$, that is, at $x = -5$.\nStep 2: $g(x) = f(x - 2) + 6$ evaluates $f$ at the input $x - 2$, so $g$ is smallest when $x - 2 = -5$.\nStep 3: Solving gives $x = -3$; the outside $+6$ raises every output by $6$ but never moves the low point sideways. Check by expanding: $g(x) = (x - 2 + 5)^2 - 1 + 6 = (x + 3)^2 + 5$, whose minimum is at $x = -3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-7$): computes $-5 - 2$, shifting the graph left when replacing $x$ with $x - 2$ shifts it right.\n* Choice B ($-5$): reports the location of the minimum of $f$ and ignores the transformation entirely.\n* Choice D ($3$): reads the vertex of $f$ as $x = 5$ from the \"$+5$\" inside the parentheses, then subtracts $2$.\n\n**Test Day Takeaway:** Replacing $x$ with $x - c$ moves the graph $c$ units in the $+x$ direction. Set the inside of the squared factor equal to zero and solve — the outside constant is irrelevant to *where* the minimum is.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "vertex-form-from-two-conditions",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-098",
    domain: "advanced-math",
    skills: ["vertex-form", "function-evaluation"],
    difficulty: "hard",
    type: "fill-in",
    question: "The function $f$ is defined by $f(x) = a(x - h)^2 + k$, where $a$, $h$, and $k$ are constants. The minimum value of $f$ is $-7$ and occurs at $x = -2$, and $f(2) = 25$. What is the value of $f(4)$?",
    correctAnswer: "65",
    explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**The correct answer is $65$.**\n\n**The Fast Way (~50s):** The minimum puts the vertex at $(-2, -7)$, so $f(x) = a(x + 2)^2 - 7$; $f(2) = 25$ gives $16a = 32$ and $a = 2$, so $f(4) = 2(36) - 7 = 65$.\n\n**The Full Solution:**\nStep 1: A minimum value of $-7$ at $x = -2$ means $h = -2$ and $k = -7$, so $f(x) = a(x + 2)^2 - 7$ with $a > 0$.\nStep 2: Use $f(2) = 25$: $a(2 + 2)^2 - 7 = 25$, so $16a = 32$ and $a = 2$. The function is $f(x) = 2(x + 2)^2 - 7$.\nStep 3: Evaluate at $x = 4$: $f(4) = 2(4 + 2)^2 - 7 = 2(36) - 7 = 65$. Check the minimum: $f(-2) = -7$, and $f(2) = 2(16) - 7 = 25$. $\\checkmark$\n\n**Common Mistakes:** Assuming $a = 1$ and answering $29$; forgetting to add the $7$ back when solving for $a$, which gives $16a = 25$, $a = 1.5625$, and $f(4) = 49.25$; or reading \"minimum value $-7$ at $x = -2$\" as the vertex $(-7, -2)$.\n\n**Test Day Takeaway:** \"Minimum value $m$ at $x = c$\" hands you the vertex $(c, m)$. One more function value then determines $a$, and the function is fully known.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "vertex-form-from-two-conditions",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-099",
    domain: "advanced-math",
    skills: ["vertex-form"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the $xy$-plane, the graph of $y = a(x - h)^2 + k$ is shown, where $a$, $h$, and $k$ are constants. The vertex of the graph is $(-2, -6)$, and the graph passes through the marked point $(0, 2)$. What is the value of $ahk$?",
    diagram: { type: "quadraticVertex", params: { vertex: [-2, -6], a: 2, showPoints: [[0, 2]], showVertex: true } },
    choices: [
      // distractor: reads $h$ as $2$ rather than $-2$
      { id: "A", text: "$-24$" },
      // distractor: solves $4a = 2$ without undoing $k$, getting $a = \frac{1}{2}$
      { id: "B", text: "$6$" },
      // distractor: assumes $a = 1$ instead of using the marked point
      { id: "C", text: "$12$" },
      { id: "D", text: "$24$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice D is correct.**\n\n**The Fast Way (~50s):** The vertex gives $h = -2$ and $k = -6$; the point $(0, 2)$ gives $4a - 6 = 2$, so $a = 2$ and $ahk = 2(-2)(-6) = 24$.\n\n**The Full Solution:**\nStep 1: In $y = a(x - h)^2 + k$ the vertex is $(h, k)$, so $h = -2$ and $k = -6$ and the equation is $y = a(x + 2)^2 - 6$.\nStep 2: Substitute the marked point $(0, 2)$: $2 = a(0 + 2)^2 - 6 = 4a - 6$, so $4a = 8$ and $a = 2$.\nStep 3: Multiply: $ahk = (2)(-2)(-6) = 24$. Check: $y = 2(x + 2)^2 - 6$ gives $y = 2$ at $x = 0$ and $y = -6$ at $x = -2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-24$): takes $h = 2$ because the equation displays $(x - h)$, missing that the graph is shifted left; that gives $(2)(2)(-6)$.\n* Choice B ($6$): solves $4a = 2$, forgetting to add $6$ to both sides, so $a = \\frac{1}{2}$ and the product is $\\left(\\frac{1}{2}\\right)(-2)(-6)$.\n* Choice C ($12$): assumes the leading coefficient is $1$ without using the marked point, giving $(1)(-2)(-6)$.\n\n**Test Day Takeaway:** A vertex at $(-2, -6)$ means $h = -2$, so the factor is $(x + 2)$. Get $h$ and $k$ from the vertex, $a$ from a second point, and then read the question once more.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "vertex-form-from-two-conditions",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },

  // === RATIONAL EXPRESSION SIMPLIFICATION (8 questions) — Phase 2 batch 3 ===
  // 10x in 12 tests. Covers: simplify single fraction by factoring,
  // multiply two rationals, add rationals, solve rational equation,
  // identify equivalent factored form.
  // SAT Pattern kebab matches test bundle: 'rational-expression-simplification'.
  {
    id: "bank-am-100",
    domain: "advanced-math",
    skills: ["simplifying-rational-expressions", "difference-of-squares"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Which expression is equivalent to $\\dfrac{x^2 - 64}{x + 8}$ for all values of $x$ where the expression is defined?",
    choices: [
      { id: "A", text: "$x - 8$" },
      // distractor: subtracts the denominator's $8$ from the $64$ instead of factoring
      { id: "B", text: "$x - 56$" },
      // distractor: cancels $(x - 8)$ instead of the shared factor $(x + 8)$
      { id: "C", text: "$x + 8$" },
      // distractor: divides only the constants, $\frac{64}{8}$, and keeps $x^2$
      { id: "D", text: "$x^2 - 8$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $x^2 - 64 = (x - 8)(x + 8)$, so the $(x + 8)$ factors cancel and the expression equals $x - 8$.\n\n**The Full Solution:**\nStep 1: Factor the numerator as a difference of squares: $x^2 - 64 = (x - 8)(x + 8)$.\nStep 2: The fraction becomes $\\frac{(x - 8)(x + 8)}{x + 8}$.\nStep 3: Cancel the common factor $(x + 8)$, valid because $x \\neq -8$, leaving $x - 8$. Check at $x = 0$: $\\frac{-64}{8} = -8$, and $0 - 8 = -8$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($x - 56$): subtracts $8$ from $64$ term by term instead of factoring; at $x = 0$ this gives $-56$, not $-8$.\n* Choice C ($x + 8$): cancels the factor that is not shared; the denominator contains $(x + 8)$, so that is the one that cancels.\n* Choice D ($x^2 - 8$): divides the constants only, treating $\\frac{64}{8}$ as a legal cancellation inside a sum.\n\n**Test Day Takeaway:** Factor before you cancel. A difference of squares over one of its own factors always collapses to the other factor.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "rational-expression-simplification",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-101",
    domain: "advanced-math",
    skills: ["simplifying-rational-expressions", "difference-of-squares"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Which expression is equivalent to $\\dfrac{x^2 - 4x}{x^2 - 16}$ for all values of $x$ where the expression is defined?",
    choices: [
      // distractor: cancels the factor $x$ along with $(x - 4)$, losing it from the numerator
      { id: "A", text: "$\\dfrac{1}{x + 4}$" },
      // distractor: cancels the $x^2$ terms as if they were factors
      { id: "B", text: "$\\dfrac{x}{4}$" },
      // distractor: cancels $(x + 4)$ instead of the shared factor $(x - 4)$
      { id: "C", text: "$\\dfrac{x}{x - 4}$" },
      { id: "D", text: "$\\dfrac{x}{x + 4}$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** $\\frac{x(x - 4)}{(x - 4)(x + 4)}$ — the $(x - 4)$ factors cancel, leaving $\\frac{x}{x + 4}$.\n\n**The Full Solution:**\nStep 1: Factor the numerator by its common monomial: $x^2 - 4x = x(x - 4)$.\nStep 2: Factor the denominator as a difference of squares: $x^2 - 16 = (x - 4)(x + 4)$.\nStep 3: Cancel $(x - 4)$, leaving $\\frac{x}{x + 4}$. Check at $x = 1$: $\\frac{1 - 4}{1 - 16} = \\frac{-3}{-15} = \\frac{1}{5}$, and $\\frac{1}{1 + 4} = \\frac{1}{5}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{x + 4}$): cancels the whole numerator $x(x - 4)$ against $(x - 4)$, discarding the $x$ that should remain.\n* Choice B ($\\frac{x}{4}$): cancels the $x^2$ terms, leaving $\\frac{-4x}{-16}$; individual terms of a difference never cancel.\n* Choice C ($\\frac{x}{x - 4}$): cancels $(x + 4)$, which appears in the denominator only.\n\n**Test Day Takeaway:** Pull out a common monomial before looking for a special pattern — the leftover factor often matches something in the denominator.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "rational-expression-simplification",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-102",
    domain: "advanced-math",
    skills: ["simplifying-rational-expressions", "perfect-square-trinomial", "difference-of-squares"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Which expression is equivalent to $\\dfrac{x^2 - 10x + 25}{x^2 - 25}$ for all values of $x$ where the expression is defined?",
    choices: [
      // distractor: cancels the entire squared factor $(x - 5)^2$ against one $(x - 5)$
      { id: "A", text: "$\\dfrac{1}{x + 5}$" },
      // distractor: cancels the $x^2$ terms as if they were factors
      { id: "B", text: "$\\dfrac{2x - 5}{5}$" },
      // distractor: factors the numerator as $(x + 5)^2$, a sign slip
      { id: "C", text: "$\\dfrac{x + 5}{x - 5}$" },
      { id: "D", text: "$\\dfrac{x - 5}{x + 5}$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** $\\frac{(x - 5)^2}{(x - 5)(x + 5)}$ — one $(x - 5)$ cancels, leaving $\\frac{x - 5}{x + 5}$.\n\n**The Full Solution:**\nStep 1: The numerator is a perfect-square trinomial: $x^2 - 10x + 25 = (x - 5)^2$, since $2(5) = 10$.\nStep 2: The denominator is a difference of squares: $x^2 - 25 = (x - 5)(x + 5)$.\nStep 3: Cancel one factor of $(x - 5)$ from each part: $\\frac{x - 5}{x + 5}$. Check at $x = 0$: $\\frac{25}{-25} = -1$, and $\\frac{-5}{5} = -1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{x + 5}$): cancels both copies of $(x - 5)$ from the numerator against the single one below, leaving $1$ on top.\n* Choice B ($\\frac{2x - 5}{5}$): cancels the $x^2$ terms, then reduces $\\frac{-10x + 25}{-25}$; terms of a sum are not factors.\n* Choice C ($\\frac{x + 5}{x - 5}$): factors the numerator as $(x + 5)^2$; that square has a $+10x$ middle term, not $-10x$.\n\n**Test Day Takeaway:** A squared factor cancels only once against a single copy. Count the factors on each side before you strike anything out.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "rational-expression-simplification",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-103",
    domain: "advanced-math",
    skills: ["simplifying-rational-expressions", "difference-of-squares"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Which expression is equivalent to $\\dfrac{x^2 - 36}{x^2 - 4} \\cdot \\dfrac{x + 2}{x + 6}$ for all values of $x$ where the expression is defined?",
    choices: [
      // distractor: cancels $(x + 2)$ against $(x - 2)$ as if they were the same factor
      { id: "A", text: "$x - 6$" },
      { id: "B", text: "$\\dfrac{x - 6}{x - 2}$" },
      // distractor: cancels $(x - 2)$ instead of $(x + 2)$ from $x^2 - 4$
      { id: "C", text: "$\\dfrac{x - 6}{x + 2}$" },
      // distractor: cancels $(x - 6)$ instead of $(x + 6)$ from $x^2 - 36$
      { id: "D", text: "$\\dfrac{x + 6}{x - 2}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** $\\frac{(x - 6)(x + 6)}{(x - 2)(x + 2)} \\cdot \\frac{x + 2}{x + 6}$ — the $(x + 6)$ and $(x + 2)$ pairs cancel, leaving $\\frac{x - 6}{x - 2}$.\n\n**The Full Solution:**\nStep 1: Factor both differences of squares: $x^2 - 36 = (x - 6)(x + 6)$ and $x^2 - 4 = (x - 2)(x + 2)$.\nStep 2: Write the product as a single fraction: $\\frac{(x - 6)(x + 6)(x + 2)}{(x - 2)(x + 2)(x + 6)}$.\nStep 3: Cancel $(x + 6)$ and $(x + 2)$, leaving $\\frac{x - 6}{x - 2}$. Check at $x = 0$: the original is $\\frac{-36}{-4} \\cdot \\frac{2}{6} = 9 \\cdot \\frac{1}{3} = 3$, and $\\frac{-6}{-2} = 3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x - 6$): cancels $(x + 2)$ with $(x - 2)$; opposite signs mean different factors, and they never cancel.\n* Choice C ($\\frac{x - 6}{x + 2}$): cancels the $(x - 2)$ factor, which has no match anywhere in the product.\n* Choice D ($\\frac{x + 6}{x - 2}$): cancels $(x - 6)$ against the $(x + 6)$ in the second denominator.\n\n**Test Day Takeaway:** Factor all four pieces, then cancel factor against identical factor across the whole product. $(x + a)$ and $(x - a)$ are never the same factor.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "rational-expression-simplification",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-104",
    domain: "advanced-math",
    skills: ["simplifying-rational-expressions", "difference-of-squares"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Which expression is equivalent to $\\dfrac{9x^2 - 16}{3x^2 + 2x - 8}$ for all values of $x$ where the expression is defined?",
    choices: [
      // distractor: factors the denominator as $(3x + 4)(x - 2)$ and cancels $(3x + 4)$
      { id: "A", text: "$\\dfrac{3x - 4}{x - 2}$" },
      // distractor: cancels $(3x + 4)$ against $(3x - 4)$ as if they were the same factor
      { id: "B", text: "$\\dfrac{3x - 4}{x + 2}$" },
      // distractor: factors the denominator as $(3x - 4)(x - 2)$, a sign slip
      { id: "C", text: "$\\dfrac{3x + 4}{x - 2}$" },
      { id: "D", text: "$\\dfrac{3x + 4}{x + 2}$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** $\\frac{(3x - 4)(3x + 4)}{(3x - 4)(x + 2)}$ — the $(3x - 4)$ factors cancel, leaving $\\frac{3x + 4}{x + 2}$.\n\n**The Full Solution:**\nStep 1: The numerator is a difference of squares: $9x^2 - 16 = (3x)^2 - 4^2 = (3x - 4)(3x + 4)$.\nStep 2: Factor the denominator: $3x^2 + 2x - 8 = (3x - 4)(x + 2)$, since $(3x)(x) = 3x^2$ and $-4(x) + 2(3x) = 2x$.\nStep 3: Cancel $(3x - 4)$, leaving $\\frac{3x + 4}{x + 2}$. Check at $x = 0$: $\\frac{-16}{-8} = 2$, and $\\frac{4}{2} = 2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{3x - 4}{x - 2}$): factors the denominator as $(3x + 4)(x - 2)$, whose expansion is $3x^2 - 2x - 8$ — the middle sign is wrong.\n* Choice B ($\\frac{3x - 4}{x + 2}$): keeps the wrong numerator factor by cancelling $(3x + 4)$ against $(3x - 4)$.\n* Choice C ($\\frac{3x + 4}{x - 2}$): factors the denominator as $(3x - 4)(x - 2)$, whose expansion is $3x^2 - 10x + 8$.\n\n**Test Day Takeaway:** Always expand your trial factorization mentally to confirm the middle term before cancelling. One sign controls the entire answer.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "rational-expression-simplification",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-105",
    domain: "advanced-math",
    skills: ["simplifying-rational-expressions"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Which expression is equivalent to $\\dfrac{4}{x + 1} + \\dfrac{5}{x - 3}$ for all values of $x$ where the expression is defined?",
    choices: [
      // distractor: adds numerators and denominators straight across
      { id: "A", text: "$\\dfrac{9}{2x - 2}$" },
      // distractor: uses the correct common denominator but adds only the original numerators
      { id: "B", text: "$\\dfrac{9}{x^2 - 2x - 3}$" },
      { id: "C", text: "$\\dfrac{9x - 7}{x^2 - 2x - 3}$" },
      // distractor: distributes $4(x - 3)$ as $4x + 12$, a sign slip
      { id: "D", text: "$\\dfrac{9x + 17}{x^2 - 2x - 3}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Over the common denominator $(x + 1)(x - 3)$ the numerator is $4(x - 3) + 5(x + 1) = 9x - 7$, so the sum is $\\frac{9x - 7}{x^2 - 2x - 3}$.\n\n**The Full Solution:**\nStep 1: The common denominator is $(x + 1)(x - 3) = x^2 - 2x - 3$.\nStep 2: Rewrite each fraction: $\\frac{4}{x + 1} = \\frac{4(x - 3)}{(x + 1)(x - 3)}$ and $\\frac{5}{x - 3} = \\frac{5(x + 1)}{(x + 1)(x - 3)}$.\nStep 3: Add the numerators: $4x - 12 + 5x + 5 = 9x - 7$, giving $\\frac{9x - 7}{x^2 - 2x - 3}$. Check at $x = 0$: $\\frac{4}{1} + \\frac{5}{-3} = 4 - \\frac{5}{3} = \\frac{7}{3}$, and $\\frac{-7}{-3} = \\frac{7}{3}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{9}{2x - 2}$): adds numerators and denominators separately, which is never a valid way to add fractions.\n* Choice B ($\\frac{9}{x^2 - 2x - 3}$): finds the right common denominator but forgets to multiply each numerator by the missing factor.\n* Choice D ($\\frac{9x + 17}{x^2 - 2x - 3}$): distributes $4(x - 3)$ as $4x + 12$, so the constants become $12 + 5$.\n\n**Test Day Takeaway:** Each numerator must be multiplied by whatever its denominator was missing. Distribute carefully — the constant term is where the sign slips.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "rational-expression-simplification",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-106",
    domain: "advanced-math",
    skills: ["simplifying-rational-expressions"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The equation $\\dfrac{5}{x - 3} + \\dfrac{2}{x + 3} = \\dfrac{30}{x^2 - 9}$ is given, where $x$ is a real number. How many solutions does the equation have?",
    choices: [
      { id: "A", text: "Zero" },
      // distractor: solves to $x = 3$ and never checks it against the restrictions
      { id: "B", text: "Exactly one" },
      // distractor: expects two solutions because $x^2 - 9$ appears in a denominator
      { id: "C", text: "Exactly two" },
      // distractor: concludes the two sides are identical after clearing denominators
      { id: "D", text: "Infinitely many" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**Choice A is correct.**\n\n**The Fast Way (~50s):** Clearing denominators gives $7x + 9 = 30$, so $x = 3$ — but $x = 3$ makes $x - 3$ zero, so it is extraneous and no solution remains.\n\n**The Full Solution:**\nStep 1: Since $x^2 - 9 = (x - 3)(x + 3)$, the expression is undefined at $x = 3$ and $x = -3$; neither can be a solution.\nStep 2: Multiply every term by $(x - 3)(x + 3)$: $5(x + 3) + 2(x - 3) = 30$, so $5x + 15 + 2x - 6 = 30$ and $7x + 9 = 30$.\nStep 3: Then $7x = 21$ and $x = 3$, which is excluded. Check by substituting $x = 3$ into the original equation: the first and third terms have denominator $0$, so the equation has no solution. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B (Exactly one): stops at $x = 3$ without testing it in the original equation, where that value is undefined.\n* Choice C (Exactly two): assumes the $x^2$ in the denominator forces a quadratic; after clearing denominators the equation is linear.\n* Choice D (Infinitely many): mistakes the cleared equation $7x + 9 = 30$ for an identity; it is a single linear equation with one root.\n\n**Test Day Takeaway:** List the excluded values before you solve a rational equation, and check every root against that list. A \"solution\" that kills a denominator is not a solution.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "rational-expression-simplification",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-107",
    domain: "advanced-math",
    skills: ["simplifying-rational-expressions", "finding-roots-factoring"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "Which expression is equivalent to $\\dfrac{x^2 - 4}{x^2 + 7x + 10} \\cdot \\dfrac{x^2 + 10x + 25}{x^2 - 3x + 2}$ for all values of $x$ where the expression is defined?",
    choices: [
      { id: "A", text: "$\\dfrac{x + 5}{x - 1}$" },
      // distractor: cancels both copies of $(x + 5)$ against the single one below
      { id: "B", text: "$\\dfrac{1}{x - 1}$" },
      // distractor: cancels $(x - 1)$ instead of $(x - 2)$ from $x^2 - 3x + 2$
      { id: "C", text: "$\\dfrac{x + 5}{x - 2}$" },
      // distractor: factors $x^2 + 10x + 25$ as $(x - 5)^2$, a sign slip
      { id: "D", text: "$\\dfrac{x - 5}{x - 1}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**Choice A is correct.**\n\n**The Fast Way (~60s):** Factored, the product is $\\frac{(x - 2)(x + 2)}{(x + 2)(x + 5)} \\cdot \\frac{(x + 5)^2}{(x - 1)(x - 2)}$. Cancelling $(x + 2)$, $(x - 2)$, and one $(x + 5)$ leaves $\\frac{x + 5}{x - 1}$.\n\n**The Full Solution:**\nStep 1: Factor all four quadratics: $x^2 - 4 = (x - 2)(x + 2)$, $x^2 + 7x + 10 = (x + 2)(x + 5)$, $x^2 + 10x + 25 = (x + 5)^2$, and $x^2 - 3x + 2 = (x - 1)(x - 2)$.\nStep 2: Write one fraction: $\\frac{(x - 2)(x + 2)(x + 5)^2}{(x + 2)(x + 5)(x - 1)(x - 2)}$.\nStep 3: Cancel $(x - 2)$, $(x + 2)$, and one copy of $(x + 5)$, leaving $\\frac{x + 5}{x - 1}$. Check at $x = 0$: the original is $\\frac{-4}{10} \\cdot \\frac{25}{2} = -5$, and $\\frac{5}{-1} = -5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{1}{x - 1}$): cancels $(x + 5)^2$ entirely against the single $(x + 5)$ below, when only one copy cancels.\n* Choice C ($\\frac{x + 5}{x - 2}$): cancels the $(x - 1)$ factor, which has no partner, instead of the $(x - 2)$ that matches the first numerator.\n* Choice D ($\\frac{x - 5}{x - 1}$): reads $x^2 + 10x + 25$ as $(x - 5)^2$; that square has a $-10x$ middle term.\n\n**Test Day Takeaway:** In a product of four quadratics, factor everything first and track how many copies of each factor sit above and below. Squared factors cancel one at a time.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "rational-expression-simplification",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },

  // === FUNCTION TRANSFORMATION (8 questions) — Phase 2 batch 3 priority pattern ===
  // 10x in 12 tests. Covers: horizontal shift, vertical shift, evaluate
  // transformed function, find x of min after shift, find min value after
  // shift, combined shifts, reflection + scaling.
  // SAT Pattern kebab matches test bundle: 'function-transformation'.
  {
    id: "bank-am-108",
    domain: "advanced-math",
    skills: ["function-transformations", "function-evaluation"],
    difficulty: "easy",
    type: "fill-in",
    question: "For the function $f$, the table lists $f(x)$ at four values of $x$. The function $g$ is defined by $g(x) = f(x - 2)$. What is the value of $g(6)$?",
    diagram: { type: "table", params: { xHeader: "x", yHeader: "f(x)", rows: [["0", "5"], ["2", "1"], ["4", "-3"], ["6", "9"]] } },
    correctAnswer: "-3",
    explanation: "**SAT Pattern: Function Transformation**\n\n**The correct answer is $-3$.**\n\n**The Fast Way (~15s):** $g(6) = f(6 - 2) = f(4)$, and the table gives $f(4) = -3$.\n\n**The Full Solution:**\nStep 1: The rule $g(x) = f(x - 2)$ says: subtract $2$ from the input, then apply $f$.\nStep 2: With $x = 6$, the input to $f$ is $6 - 2 = 4$.\nStep 3: The table gives $f(4) = -3$, so $g(6) = -3$. Check with another entry: $g(2) = f(0) = 5$, which also comes straight from the table. $\\checkmark$\n\n**Common Mistakes:** Reading the table at $x = 6$ and answering $9$, which is $f(6)$, not $g(6)$; subtracting $2$ from the output instead of the input, giving $9 - 2 = 7$; or shifting the wrong way and looking for $f(8)$, a value the table does not list.\n\n**Test Day Takeaway:** $f(x - 2)$ changes the input, not the output. Compute the inside first, then look that number up.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "function-transformation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-109",
    domain: "advanced-math",
    skills: ["function-transformations", "function-evaluation"],
    difficulty: "easy",
    type: "fill-in",
    question: "The function $f$ is defined by $f(x) = 5x + 2$, and the function $g$ is defined by $g(x) = f(x) - 9$. What is the value of $g(4)$?",
    correctAnswer: "13",
    explanation: "**SAT Pattern: Function Transformation**\n\n**The correct answer is $13$.**\n\n**The Fast Way (~15s):** $f(4) = 22$, and $g$ subtracts $9$ from the output: $22 - 9 = 13$.\n\n**The Full Solution:**\nStep 1: Evaluate $f$ at $4$: $f(4) = 5(4) + 2 = 22$.\nStep 2: The rule $g(x) = f(x) - 9$ subtracts $9$ after $f$ has been applied.\nStep 3: So $g(4) = 22 - 9 = 13$. Check with a formula for $g$: $g(x) = 5x + 2 - 9 = 5x - 7$, and $5(4) - 7 = 13$. $\\checkmark$\n\n**Common Mistakes:** Reporting $22$ and forgetting the shift; subtracting $9$ from the input instead of the output, computing $f(-5) = -23$; or subtracting $9$ from the slope and evaluating $-4x + 2$ at $4$, which gives $-14$.\n\n**Test Day Takeaway:** A constant added or subtracted *outside* the function changes every output by that amount. Evaluate first, then shift.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "function-transformation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-110",
    domain: "advanced-math",
    skills: ["function-transformations", "vertex-form"],
    difficulty: "medium",
    type: "fill-in",
    question: "In the $xy$-plane, the parabola shown is the graph of $y = f(x)$, and its vertex is at $(3, -5)$. The function $g$ is defined by $g(x) = f(x + 4) - 2$. What is the minimum value of $g$?",
    diagram: { type: "quadraticVertex", params: { vertex: [3, -5], a: 1, showVertex: true } },
    correctAnswer: "-7",
    explanation: "**SAT Pattern: Function Transformation**\n\n**The correct answer is $-7$.**\n\n**The Fast Way (~25s):** A horizontal shift cannot change the smallest output, so the minimum of $g$ is the minimum of $f$ lowered by $2$: $-5 - 2 = -7$.\n\n**The Full Solution:**\nStep 1: The graph shows that the smallest value $f$ takes is $-5$, at $x = 3$.\nStep 2: In $g(x) = f(x + 4) - 2$, replacing $x$ with $x + 4$ only relocates that low point: it now occurs when $x + 4 = 3$, that is, at $x = -1$.\nStep 3: The $-2$ then lowers every output by $2$, so the minimum value is $-5 - 2 = -7$. Check: $g(-1) = f(3) - 2 = -5 - 2 = -7$. $\\checkmark$\n\n**Common Mistakes:** Answering $-5$ by ignoring the outside $-2$; answering $-3$ by adding $2$ instead of subtracting; or answering $-1$ by letting the inside $+4$ raise the minimum value, when a horizontal shift never changes the value.\n\n**Test Day Takeaway:** Inside the parentheses moves the graph sideways; outside moves it up or down. Only the outside constant can change a minimum *value*.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "function-transformation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-111",
    domain: "advanced-math",
    skills: ["function-transformations", "function-evaluation"],
    difficulty: "medium",
    type: "fill-in",
    question: "The table gives five values of the function $h$. The function $p$ is defined by $p(x) = h(x + 2) - 5$. What is the value of $p(-1)$?",
    diagram: { type: "table", params: { xHeader: "x", yHeader: "h(x)", rows: [["-3", "8"], ["-1", "0"], ["1", "-4"], ["3", "0"], ["5", "8"]] } },
    correctAnswer: "-9",
    explanation: "**SAT Pattern: Function Transformation**\n\n**The correct answer is $-9$.**\n\n**The Fast Way (~25s):** $p(-1) = h(-1 + 2) - 5 = h(1) - 5 = -4 - 5 = -9$.\n\n**The Full Solution:**\nStep 1: The rule $p(x) = h(x + 2) - 5$ adds $2$ to the input before applying $h$, then subtracts $5$ from the result.\nStep 2: With $x = -1$, the input to $h$ is $-1 + 2 = 1$, and the table gives $h(1) = -4$.\nStep 3: Subtract $5$: $p(-1) = -4 - 5 = -9$. Check another entry: $p(1) = h(3) - 5 = 0 - 5 = -5$. $\\checkmark$\n\n**Common Mistakes:** Subtracting $2$ from the input instead of adding, which uses $h(-3) = 8$ and gives $3$; ignoring the inside shift and using $h(-1) = 0$ to get $-5$; or adding the $5$ instead of subtracting it, which gives $1$.\n\n**Test Day Takeaway:** Handle the inside first, the outside second. $h(x + 2)$ needs the table entry at $x + 2$, not at $x$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "function-transformation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-112",
    domain: "advanced-math",
    skills: ["function-transformations", "vertex-form"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The graph of the function $f$ is shown in the $xy$-plane, and $f$ has its minimum at the point $(-2, -6)$. The function $g$ is defined by $g(x) = f(x - 3)$. For what value of $x$ does $g$ attain its minimum value?",
    diagram: { type: "quadraticVertex", params: { vertex: [-2, -6], a: 1, showVertex: true } },
    choices: [
      // distractor: shifts left by $3$, computing $-2 - 3$
      { id: "A", text: "$-5$" },
      // distractor: reports where $f$ is smallest, ignoring the shift
      { id: "B", text: "$-2$" },
      { id: "C", text: "$1$" },
      // distractor: reports the size of the shift instead of the new location
      { id: "D", text: "$3$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Function Transformation**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** $g$ is smallest when its inside matches $f$'s low point: $x - 3 = -2$, so $x = 1$.\n\n**The Full Solution:**\nStep 1: The graph shows $f$ attaining its minimum at $x = -2$.\nStep 2: $g(x) = f(x - 3)$ feeds the number $x - 3$ into $f$, so $g$ is smallest when $x - 3 = -2$.\nStep 3: Solving gives $x = 1$. Check: $g(1) = f(1 - 3) = f(-2) = -6$, the same minimum value, three units to the right. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): computes $-2 - 3$, moving the graph left; replacing $x$ with $x - 3$ moves it right.\n* Choice B ($-2$): reports the minimum location of $f$ and ignores the transformation.\n* Choice D ($3$): reports the shift amount rather than the new $x$-value of the minimum.\n\n**Test Day Takeaway:** Set the expression inside the function equal to the original key input and solve. The sign inside always points the opposite way from the shift.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "function-transformation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-113",
    domain: "advanced-math",
    skills: ["function-transformations"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The graph of the quadratic function $f$ is shown in the $xy$-plane, where $f$ has vertex $(2, -3)$ and passes through the marked point $(0, 1)$. The function $h$ is defined by $h(x) = f(x) + 7$. What is the $y$-coordinate of the $y$-intercept of the graph of $h$?",
    diagram: { type: "quadraticVertex", params: { vertex: [2, -3], a: 1, showPoints: [[0, 1]], showVertex: true } },
    choices: [
      // distractor: reports $f(0)$ and forgets the shift
      { id: "A", text: "$1$" },
      // distractor: reports the minimum value of $h$, $-3 + 7$, instead of its $y$-intercept
      { id: "B", text: "$4$" },
      // distractor: reports the size of the shift
      { id: "C", text: "$7$" },
      { id: "D", text: "$8$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Function Transformation**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** The graph gives $f(0) = 1$, and $h$ raises every output by $7$: $h(0) = 1 + 7 = 8$.\n\n**The Full Solution:**\nStep 1: A $y$-intercept is the value of the function at $x = 0$, so the question asks for $h(0)$.\nStep 2: The marked point shows $f(0) = 1$.\nStep 3: Since $h(x) = f(x) + 7$, $h(0) = 1 + 7 = 8$. Check with a formula: the vertex form is $f(x) = (x - 2)^2 - 3$, so $f(0) = 4 - 3 = 1$ and $h(0) = 8$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($1$): reads $f(0)$ off the graph and never applies the $+7$.\n* Choice B ($4$): shifts the vertex value instead, $-3 + 7$, which is the minimum of $h$, not its $y$-intercept.\n* Choice C ($7$): reports the shift amount by itself, as if $f(0)$ were $0$.\n\n**Test Day Takeaway:** A vertical shift moves the $y$-intercept by exactly the shift amount. Locate $f(0)$ first, then add.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "function-transformation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-114",
    domain: "advanced-math",
    skills: ["function-transformations", "vertex-form"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The graph of the function $f$ is shown in the $xy$-plane, and the vertex of the graph is $(4, 1)$. The function $g$ is defined by $g(x) = 3f(x + 2) - 5$. Which of the following is the vertex of the graph of $y = g(x)$?",
    diagram: { type: "quadraticVertex", params: { vertex: [4, 1], a: 1, showVertex: true } },
    choices: [
      // distractor: reads the $+2$ inside the parentheses as the new $x$-coordinate
      { id: "A", text: "$(-2, -2)$" },
      { id: "B", text: "$(2, -2)$" },
      // distractor: applies the $-5$ but not the factor $3$, computing $1 - 5$
      { id: "C", text: "$(2, -4)$" },
      // distractor: shifts right by $2$ instead of left
      { id: "D", text: "$(6, -2)$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Function Transformation**\n\n**Choice B is correct.**\n\n**The Fast Way (~45s):** The vertex moves when $x + 2 = 4$, so $x = 2$; its height becomes $3(1) - 5 = -2$. The vertex of $g$ is $(2, -2)$.\n\n**The Full Solution:**\nStep 1: The graph shows the vertex of $f$ at $(4, 1)$, so $f(4) = 1$ is the extreme output.\nStep 2: In $g(x) = 3f(x + 2) - 5$, the extreme output occurs when the inside matches $4$: $x + 2 = 4$, so $x = 2$.\nStep 3: The output is scaled by $3$ and then lowered by $5$: $g(2) = 3f(4) - 5 = 3(1) - 5 = -2$. The vertex is $(2, -2)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-2, -2)$): reads the \"$+2$\" as the new $x$-coordinate instead of solving $x + 2 = 4$.\n* Choice C ($(2, -4)$): finds the correct $x$ but applies only the $-5$, forgetting that the output is first tripled.\n* Choice D ($(6, -2)$): computes $4 + 2$, shifting the graph right; $f(x + 2)$ shifts it left.\n\n**Test Day Takeaway:** Transform the input and the output separately: solve the inside for the new $x$, then run the old $y$-value through the outside operations in order.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "function-transformation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-115",
    domain: "advanced-math",
    skills: ["function-transformations", "vertex-form"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The function $f$ is defined by $f(x) = (x - 3)^2$, and the function $g$ is defined by $g(x) = -4f(x + 2) + 5$. What is the vertex of the graph of $y = g(x)$ in the $xy$-plane?",
    choices: [
      { id: "A", text: "$(1, 5)$" },
      // distractor: multiplies the $+5$ by the $-4$ as well
      { id: "B", text: "$(1, -5)$" },
      // distractor: keeps the vertex of $f$, ignoring the horizontal shift
      { id: "C", text: "$(3, 5)$" },
      // distractor: computes $3 + 2$, shifting right instead of left
      { id: "D", text: "$(5, 5)$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Function Transformation**\n\n**Choice A is correct.**\n\n**The Fast Way (~45s):** $f$ has its vertex where $x - 3 = 0$. For $g$, the inside is $x + 2$, so $x + 2 = 3$ gives $x = 1$, and $g(1) = -4(0) + 5 = 5$: the vertex is $(1, 5)$.\n\n**The Full Solution:**\nStep 1: $f(x) = (x - 3)^2$ has vertex $(3, 0)$, its minimum, since a square is never negative.\nStep 2: In $g(x) = -4f(x + 2) + 5$, the vertex occurs where the input to $f$ equals $3$: $x + 2 = 3$, so $x = 1$.\nStep 3: The output there is $-4 \\cdot f(3) + 5 = -4(0) + 5 = 5$, so the vertex is $(1, 5)$. Check by expanding: $g(x) = -4(x + 2 - 3)^2 + 5 = -4(x - 1)^2 + 5$, a downward parabola with vertex $(1, 5)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($(1, -5)$): multiplies the $+5$ by $-4$; the $-4$ scales only $f$, not the constant added afterward.\n* Choice C ($(3, 5)$): keeps $x = 3$ from $f$ and never solves $x + 2 = 3$.\n* Choice D ($(5, 5)$): computes $3 + 2$, moving the graph right when $f(x + 2)$ moves it left.\n\n**Test Day Takeaway:** With a stretch, a reflection, and two shifts at once, solve the inside for $x$ first, then apply the outside operations to the old output in the order written.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "function-transformation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },

  // === COMMON-BASE EXPONENT SIMPLIFICATION (8 questions) — Phase 2 batch 4 ===
  // 8x in 12 tests. Covers: rewrite-to-common-base equations, simplify
  // monomial division (subtract exponents), cross-base (e.g., 9 vs 27),
  // multi-variable monomials with negative exponents.
  // SAT Pattern uses hyphen in "Common-Base": kebab is
  // 'common-base-exponent-simplification'.
  {
    id: "bank-am-116",
    domain: "advanced-math",
    skills: ["exponent-laws"],
    difficulty: "easy",
    type: "fill-in",
    question: "What value of $x$ satisfies the equation $5^{x - 2} = 125$?",
    correctAnswer: "5",
    explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~10s):** $125 = 5^3$, so $x - 2 = 3$ and $x = 5$.\n\n**The Full Solution:**\nStep 1: Write both sides with base $5$: $125 = 5 \\cdot 5 \\cdot 5 = 5^3$, so the equation is $5^{x - 2} = 5^3$.\nStep 2: Equal powers of the same base have equal exponents: $x - 2 = 3$.\nStep 3: So $x = 5$. Check: $5^{5 - 2} = 5^3 = 125$. $\\checkmark$\n\n**Common Mistakes:** Reporting $3$, which is the value of $x - 2$ rather than $x$; dividing $125$ by $5$ and answering $25$; or adding $2$ to $125$ instead of solving for the exponent.\n\n**Test Day Takeaway:** Rewrite both sides as powers of the same base, set the exponents equal, and then finish solving for the variable itself.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "common-base-exponent-simplification",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-117",
    domain: "advanced-math",
    skills: ["exponent-laws"],
    difficulty: "easy",
    type: "fill-in",
    question: "The expression $\\dfrac{y^9}{y^4}$ is equivalent to $y^n$ for $y \\neq 0$, where $n$ is a constant. What is the value of $n$?",
    correctAnswer: "5",
    explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~10s):** Dividing like bases subtracts exponents: $9 - 4 = 5$.\n\n**The Full Solution:**\nStep 1: The quotient rule says $\\frac{y^m}{y^p} = y^{m - p}$ when $y \\neq 0$.\nStep 2: Here $m = 9$ and $p = 4$, so the exponent is $9 - 4$.\nStep 3: Therefore $n = 5$. Check at $y = 2$: $\\frac{2^9}{2^4} = \\frac{512}{16} = 32 = 2^5$. $\\checkmark$\n\n**Common Mistakes:** Multiplying the exponents and answering $36$; adding them and answering $13$; or dividing them and answering $2.25$.\n\n**Test Day Takeaway:** Division subtracts exponents, multiplication adds them, and a power of a power multiplies them. Name the operation before you touch the numbers.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "common-base-exponent-simplification",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-118",
    domain: "advanced-math",
    skills: ["exponent-laws"],
    difficulty: "medium",
    type: "fill-in",
    question: "If $8^x = 16^{x - 1}$, what is the value of $x$?",
    correctAnswer: "4",
    explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~30s):** Both sides are powers of $2$: $2^{3x} = 2^{4(x - 1)}$, so $3x = 4x - 4$ and $x = 4$.\n\n**The Full Solution:**\nStep 1: Rewrite each base as a power of $2$: $8 = 2^3$ and $16 = 2^4$, so $8^x = 2^{3x}$ and $16^{x - 1} = 2^{4(x - 1)}$.\nStep 2: Equal powers of $2$ have equal exponents: $3x = 4(x - 1) = 4x - 4$.\nStep 3: Subtracting $3x$ from both sides gives $0 = x - 4$, so $x = 4$. Check: $8^4 = 4096$ and $16^3 = 4096$. $\\checkmark$\n\n**Common Mistakes:** Treating the bases as coefficients and solving $8x = 16(x - 1)$, which gives $x = 2$; forgetting to distribute the $4$ and solving $3x = 4x - 1$, which gives $x = 1$; or trying to compare $8$ and $16$ directly without a common base.\n\n**Test Day Takeaway:** When the bases differ, rewrite both as powers of the same small base. Then the equation becomes linear in the exponents.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "common-base-exponent-simplification",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-119",
    domain: "advanced-math",
    skills: ["exponent-laws"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The expression $\\dfrac{12a^6b^3}{3a^2b^7}$ is defined for $a \\neq 0$ and $b \\neq 0$. Which of the following is equivalent to this expression?",
    choices: [
      // distractor: divides the exponents, $\frac{6}{2} = 3$, instead of subtracting them
      { id: "A", text: "$\\dfrac{4a^3}{b^4}$" },
      // distractor: subtracts the coefficients, $12 - 3$, instead of dividing them
      { id: "B", text: "$\\dfrac{9a^4}{b^4}$" },
      // distractor: drops the negative sign on the $b$-exponent, leaving $b^4$ in the numerator
      { id: "C", text: "$4a^4b^4$" },
      { id: "D", text: "$\\dfrac{4a^4}{b^4}$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** $\\frac{12}{3} = 4$, $a^{6 - 2} = a^4$, and $b^{3 - 7} = b^{-4}$, so the expression is $\\frac{4a^4}{b^4}$.\n\n**The Full Solution:**\nStep 1: Divide the coefficients: $\\frac{12}{3} = 4$.\nStep 2: Subtract exponents on each base: $a^{6 - 2} = a^4$ and $b^{3 - 7} = b^{-4}$.\nStep 3: A negative exponent moves its base to the denominator: $4a^4b^{-4} = \\frac{4a^4}{b^4}$. Check at $a = b = 2$: $\\frac{12(64)(8)}{3(4)(128)} = \\frac{6144}{1536} = 4$, and $\\frac{4(16)}{16} = 4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{4a^3}{b^4}$): divides the $a$-exponents, $\\frac{6}{2} = 3$, instead of subtracting them.\n* Choice B ($\\frac{9a^4}{b^4}$): subtracts the coefficients, $12 - 3 = 9$; coefficients divide, exponents subtract.\n* Choice C ($4a^4b^4$): keeps $b^4$ in the numerator, ignoring that the larger $b$-exponent is in the denominator.\n\n**Test Day Takeaway:** Handle coefficients and each variable separately: divide the numbers, subtract the exponents, and rewrite any negative exponent as a denominator.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "common-base-exponent-simplification",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-120",
    domain: "advanced-math",
    skills: ["exponent-laws"],
    difficulty: "medium",
    type: "fill-in",
    question: "In the equation $27^{x + 1} = 9^{2x}$, what is the value of $x$?",
    correctAnswer: "3",
    explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~30s):** Rewrite with base $3$: $3^{3(x + 1)} = 3^{4x}$, so $3x + 3 = 4x$ and $x = 3$.\n\n**The Full Solution:**\nStep 1: Express both bases as powers of $3$: $27 = 3^3$ and $9 = 3^2$, so $27^{x + 1} = 3^{3(x + 1)}$ and $9^{2x} = 3^{2(2x)} = 3^{4x}$.\nStep 2: Equate the exponents: $3(x + 1) = 4x$, so $3x + 3 = 4x$.\nStep 3: Subtract $3x$: $x = 3$. Check: $27^4 = 531{,}441$ and $9^6 = 531{,}441$. $\\checkmark$\n\n**Common Mistakes:** Forgetting to double the exponent on the right and solving $3x + 3 = 2x$, which gives $x = -3$; distributing the $3$ to only the $x$ and solving $3x + 1 = 4x$, which gives $1$; or treating the bases as coefficients and solving $27(x + 1) = 18x$.\n\n**Test Day Takeaway:** A power of a power multiplies exponents, so $9^{2x} = 3^{4x}$. Convert both sides to the same base before comparing anything.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "common-base-exponent-simplification",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: 'bank-am-121',
    domain: 'advanced-math',
    skills: ['exponent-laws', 'simplifying-rational-expressions'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'Which expression is equivalent to $\\dfrac{12x^5 y^3}{4x^2 y^7}$ for $x \\neq 0$ and $y \\neq 0$?',
    choices: [
      { id: 'A', text: '$\\dfrac{3x^3}{y^4}$' },
      // distractor: sign wrong on y exponent
      { id: 'B', text: '$3x^3 y^4$' },
      // distractor: wrong coefficient
      { id: 'C', text: '$\\dfrac{8x^3}{y^4}$' },
      // distractor: swaps x and y signs
      { id: 'D', text: '$\\dfrac{3y^4}{x^3}$' }
    ],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Divide piece by piece. Coefficients: $\\frac{12}{4}=3$. The $x$'s: $5-2=3$. The $y$'s: $3-7=-4$. So $3x^3y^{-4}=\\frac{3x^3}{y^4}$.\n\n**The Full Solution:**\nStep 1: Split the fraction into constant, $x$, and $y$ parts: $\\frac{12x^5y^3}{4x^2y^7}=\\frac{12}{4}\\cdot\\frac{x^5}{x^2}\\cdot\\frac{y^3}{y^7}$.\nStep 2: Subtract exponents on matching bases: $3\\cdot x^{5-2}\\cdot y^{3-7}=3x^3y^{-4}$.\nStep 3: A negative exponent moves to the denominator: $3x^3y^{-4}=\\frac{3x^3}{y^4}$, which is Choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($3x^3y^4$): kept $y^4$ in the numerator instead of dropping it down for the negative exponent.\n* Choice C ($\\frac{8x^3}{y^4}$): subtracted the coefficients ($12-4=8$) instead of dividing them ($\\frac{12}{4}=3$).\n* Choice D ($\\frac{3y^4}{x^3}$): flipped which variable goes where, inverting the whole ratio.\n\n**Test Day Takeaway:** A negative exponent never means a negative number — it means \"put it in the denominator\": $y^{-n}=\\frac{1}{y^n}$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'common-base-exponent-simplification',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-122',
    domain: 'advanced-math',
    skills: ['exponent-laws'],
    difficulty: 'hard',
    type: 'fill-in',
    question: 'What value of $x$ satisfies the equation $\\left(\\dfrac{1}{4}\\right)^{2x} = 16^{x - 3}$? Express your answer as a fraction.',
    correctAnswer: '3/2',
    explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**The correct answer is $\\frac{3}{2}$.**\n\n**The Fast Way (~25s):** Write everything as a power of $4$. $\\left(\\frac{1}{4}\\right)^{2x}=4^{-2x}$ and $16^{x-3}=4^{2x-6}$. Equal bases means equal exponents: $-2x=2x-6$, so $x=\\frac{3}{2}$.\n\n**The Full Solution:**\nStep 1: Convert the left side: $\\frac{1}{4}=4^{-1}$, so $\\left(\\frac{1}{4}\\right)^{2x}=4^{-2x}$.\nStep 2: Convert the right side: $16=4^2$, so $16^{x-3}=(4^2)^{x-3}=4^{2x-6}$.\nStep 3: With one shared base, set exponents equal: $-2x=2x-6 \\Rightarrow -4x=-6 \\Rightarrow x=\\frac{6}{4}=\\frac{3}{2}$.\nStep 4: Check: $\\left(\\frac{1}{4}\\right)^{3}=\\frac{1}{64}$ and $16^{-3/2}=\\frac{1}{16^{3/2}}=\\frac{1}{64}$. $\\checkmark$\n\n**Common Mistakes:** Reading $\\left(\\frac{1}{4}\\right)^{2x}$ as $4^{2x}$ and dropping the reciprocal's negative sign; expanding $(4^2)^{x-3}$ to $4^{2x-3}$ instead of $4^{2x-6}$.\n\n**Test Day Takeaway:** Before equating exponents, force every base into the same number. A fractional base like $\\frac{1}{4}$ is just $4$ to a negative power.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'common-base-exponent-simplification',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-123',
    domain: 'advanced-math',
    skills: ['exponent-laws'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'Which expression is equivalent to $(6x^4 y^{-2})^2 \\cdot (3x^{-1} y^3)$ for $x \\neq 0$ and $y \\neq 0$?',
    choices: [
      { id: 'A', text: '$\\dfrac{108 x^7}{y}$' },
      // distractor: doesn't square 6 fully
      { id: 'B', text: '$\\dfrac{18 x^7}{y}$' },
      // distractor: sign wrong on y
      { id: 'C', text: '$108 x^7 y$' },
      // distractor: wrong squaring of 6
      { id: 'D', text: '$\\dfrac{36 x^7}{y}$' }
    ],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Square the first factor: $(6x^4y^{-2})^2=36x^8y^{-4}$. Multiply by $3x^{-1}y^3$: coefficients $36\\cdot 3=108$, $x^{8-1}=x^7$, $y^{-4+3}=y^{-1}$. That gives $\\frac{108x^7}{y}$.\n\n**The Full Solution:**\nStep 1: Distribute the square across the product: $(6x^4y^{-2})^2=6^2(x^4)^2(y^{-2})^2=36x^8y^{-4}$.\nStep 2: Multiply by $3x^{-1}y^3$, base by base. Coefficients: $36\\cdot 3=108$. The $x$'s: $x^8\\cdot x^{-1}=x^7$. The $y$'s: $y^{-4}\\cdot y^3=y^{-1}$.\nStep 3: Move the negative power down: $108x^7y^{-1}=\\frac{108x^7}{y}$, which is Choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{18x^7}{y}$): used $6\\cdot 3=18$ instead of squaring first ($6^2=36$, then $\\cdot 3=108$).\n* Choice C ($108x^7y$): treated $y^{-1}$ as $y^{+1}$, leaving the $y$ on top.\n* Choice D ($\\frac{36x^7}{y}$): squared the $6$ correctly but forgot to multiply by the extra factor of $3$.\n\n**Test Day Takeaway:** Power-of-a-product means every factor gets the exponent: $(abc)^n=a^nb^nc^n$. Handle coefficients separately from each variable, then send negative powers to the denominator last.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'common-base-exponent-simplification',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  // ===== Phase 2 batch 5/2: tangent-line-and-discriminant (8 items) =====
  // Pattern: line tangent to parabola ⟺ system has exactly one solution ⟺ discriminant = 0.
  // Test bundles use this 7x across PT7, PT8, PT9. SAT Pattern title (verbatim from explanations):
  // 'Tangent Line and Discriminant' → kebab 'tangent-line-and-discriminant'.
  {
    id: 'bank-am-124',
    domain: 'advanced-math',
    skills: ['tangent-lines', 'discriminant-analysis'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'In the $xy$-plane, the line $y = 2x + b$ is tangent to the parabola $y = x^2 + 4x + 3$. What is the value of $b$?',
    choices: [
      { id: 'A', text: '$2$' },
      // distractor: sign error in disc formula
      { id: 'B', text: '$-2$' },
      // distractor: forgets the discriminant condition (just plugs in)
      { id: 'C', text: '$3$' },
      // distractor: uses the wrong middle term
      { id: 'D', text: '$0$' }
    ],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Tangent means one shared point, so set them equal and force the discriminant to $0$. $x^2+2x+(3-b)=0$ gives $4-4(3-b)=0 \\Rightarrow 3-b=1 \\Rightarrow b=2$.\n\n**The Full Solution:**\nStep 1: Set the line equal to the parabola: $x^2+4x+3=2x+b$.\nStep 2: Collect on one side: $x^2+2x+(3-b)=0$.\nStep 3: Tangency means exactly one solution, so the discriminant is zero: $2^2-4(1)(3-b)=0 \\Rightarrow 4-12+4b=0 \\Rightarrow 4b=8 \\Rightarrow b=2$, which is Choice A.\nStep 4: Check: at $b=2$, $x^2+2x+1=(x+1)^2=0$, one repeated root at $x=-1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-2$): sign slip when moving $b$ across the equals sign.\n* Choice C ($3$): just copied the parabola's constant term.\n* Choice D ($0$): set the middle term to zero instead of the discriminant.\n\n**Test Day Takeaway:** Tangent line and parabola means one solution means discriminant $=0$. Move everything to one side first, then apply $b^2-4ac=0$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'tangent-line-and-discriminant',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-125',
    domain: 'advanced-math',
    skills: ['tangent-lines', 'discriminant-analysis'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'In the $xy$-plane, the line $y = 6x + 1$ is tangent to the parabola $y = x^2 + c$. What is the value of $c$?',
    correctAnswer: '10',
    explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~20s):** Set them equal: $x^2-6x+(c-1)=0$. Tangency forces the discriminant to $0$: $36-4(c-1)=0 \\Rightarrow c-1=9 \\Rightarrow c=10$.\n\n**The Full Solution:**\nStep 1: Set line equal to parabola: $x^2+c=6x+1$.\nStep 2: Rearrange to one side: $x^2-6x+(c-1)=0$.\nStep 3: For exactly one intersection, set the discriminant to zero: $(-6)^2-4(1)(c-1)=0 \\Rightarrow 36-4c+4=0 \\Rightarrow 4c=40 \\Rightarrow c=10$.\nStep 4: Check: at $c=10$, $x^2-6x+9=(x-3)^2=0$, a single root at $x=3$. $\\checkmark$\n\n**Common Mistakes:** Forgetting to subtract the $1$ when moving it to the parabola side; setting the discriminant to a positive number (which gives two intersections, not tangency).\n\n**Test Day Takeaway:** The sign of the middle term doesn't matter inside $b^2-4ac$ because it's squared, but the constant you build by rearranging does. Move everything over carefully, then set $b^2-4ac=0$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'tangent-line-and-discriminant',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-126',
    domain: 'advanced-math',
    skills: ['tangent-lines', 'discriminant-analysis'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'In the $xy$-plane, the line $y = 3x - 5$ is tangent to the parabola $y = kx^2 + 5x + 1$. What is the value of $k$?',
    choices: [
      { id: 'A', text: '$\\dfrac{1}{6}$' },
      // distractor: inverts the fraction
      { id: 'B', text: '$6$' },
      // distractor: sign / formula error
      { id: 'C', text: '$-\\dfrac{1}{6}$' },
      // distractor: arithmetic slip
      { id: 'D', text: '$\\dfrac{1}{3}$' }
    ],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Set equal: $kx^2+2x+6=0$. Tangency forces the discriminant to $0$: $2^2-4(k)(6)=0 \\Rightarrow 4-24k=0 \\Rightarrow k=\\frac{1}{6}$.\n\n**The Full Solution:**\nStep 1: Set line equal to parabola: $kx^2+5x+1=3x-5$.\nStep 2: Rearrange: $kx^2+2x+6=0$. Here $a=k$, $b=2$, $c=6$.\nStep 3: One intersection means discriminant $=0$: $2^2-4(k)(6)=0 \\Rightarrow 4-24k=0 \\Rightarrow k=\\frac{4}{24}=\\frac{1}{6}$, which is Choice A.\nStep 4: Check: at $k=\\frac{1}{6}$, multiply through by $6$ to get $x^2+12x+36=(x+6)^2=0$, a single root at $x=-6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($6$): flipped the fraction at the end ($\\frac{1}{6}\\to 6$).\n* Choice C ($-\\frac{1}{6}$): dropped a sign while rearranging.\n* Choice D ($\\frac{1}{3}$): used the wrong middle term (e.g., $b=3$ instead of $2$).\n\n**Test Day Takeaway:** It's fine for the unknown to sit in the leading-coefficient slot. With $a=k$, the discriminant equation $b^2-4ac=0$ is still just a clean linear equation in $k$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'tangent-line-and-discriminant',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-127',
    domain: 'advanced-math',
    skills: ['tangent-lines', 'discriminant-analysis'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'In the $xy$-plane, the line $y = 4x + 1$ is tangent to the parabola $y = x^2 + bx + 5$, where $b > 0$. What is the value of $b$?',
    correctAnswer: '8',
    explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~30s):** Set equal: $x^2+(b-4)x+4=0$. Discriminant $=0$ gives $(b-4)^2=16$, so $b-4=\\pm 4$ and $b=0$ or $8$. The condition $b>0$ picks $b=8$.\n\n**The Full Solution:**\nStep 1: Set line equal to parabola: $x^2+bx+5=4x+1$.\nStep 2: Rearrange: $x^2+(b-4)x+4=0$.\nStep 3: One intersection means discriminant $=0$: $(b-4)^2-4(1)(4)=0 \\Rightarrow (b-4)^2=16 \\Rightarrow b-4=\\pm 4 \\Rightarrow b=8$ or $b=0$.\nStep 4: The given condition $b>0$ selects $b=8$.\nStep 5: Check: at $b=8$, $x^2+4x+4=(x+2)^2=0$, a single root at $x=-2$. $\\checkmark$\n\n**Common Mistakes:** Stopping at one root and reporting $0$; misreading the discriminant as $(b-4)^2+16=0$, which has no real solutions.\n\n**Test Day Takeaway:** When the unknown is a coefficient, the discriminant condition is often quadratic in that unknown, producing two candidates. Use the stated constraint (here $b>0$) to choose the right one.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'tangent-line-and-discriminant',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-128',
    domain: 'advanced-math',
    skills: ['tangent-lines', 'discriminant-analysis'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'In the $xy$-plane, the line $y = 5x - c$ is tangent to the parabola $y = 2x^2 + 3x + 1$. What is the value of $c$?',
    choices: [
      { id: 'A', text: '$-\\dfrac{1}{2}$' },
      // distractor: sign flip
      { id: 'B', text: '$\\dfrac{1}{2}$' },
      // distractor: arithmetic error
      { id: 'C', text: '$1$' },
      // distractor: forgets to divide by 8
      { id: 'D', text: '$-4$' }
    ],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Set equal: $2x^2-2x+(1+c)=0$. Discriminant $=0$: $(-2)^2-4(2)(1+c)=0 \\Rightarrow 1+c=\\frac{1}{2} \\Rightarrow c=-\\frac{1}{2}$.\n\n**The Full Solution:**\nStep 1: Set line equal to parabola: $2x^2+3x+1=5x-c$.\nStep 2: Rearrange. The $-c$ on the right becomes $+c$ when moved over: $2x^2-2x+(1+c)=0$.\nStep 3: One intersection means discriminant $=0$: $(-2)^2-4(2)(1+c)=0 \\Rightarrow 4-8-8c=0 \\Rightarrow -8c=4 \\Rightarrow c=-\\frac{1}{2}$, which is Choice A.\nStep 4: Check: at $c=-\\frac{1}{2}$, the equation becomes $4x^2-4x+1=(2x-1)^2=0$, a single root at $x=\\frac{1}{2}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{1}{2}$): dropped the negative when isolating $c$.\n* Choice C ($1$): solved $1+c=0$ incorrectly.\n* Choice D ($-4$): grabbed an unrelated constant instead of finishing the algebra.\n\n**Test Day Takeaway:** When the unknown lives in the constant term, track the sign as you rearrange. A $-c$ on the line side flips to $+c$ once it crosses the equals sign.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'tangent-line-and-discriminant',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-129',
    domain: 'advanced-math',
    skills: ['tangent-lines', 'discriminant-analysis'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'In the $xy$-plane, the line $y = mx + 1$ is tangent to the parabola $y = x^2 + 5$, where $m > 0$. What is the value of $m$?',
    correctAnswer: '4',
    explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~25s):** Set equal: $x^2-mx+4=0$. Discriminant $=0$: $m^2-16=0$, so $m=\\pm 4$. The condition $m>0$ gives $m=4$.\n\n**The Full Solution:**\nStep 1: Set line equal to parabola: $x^2+5=mx+1$.\nStep 2: Rearrange: $x^2-mx+4=0$.\nStep 3: One intersection means discriminant $=0$: $(-m)^2-4(1)(4)=0 \\Rightarrow m^2-16=0 \\Rightarrow m^2=16 \\Rightarrow m=\\pm 4$.\nStep 4: The given condition $m>0$ selects $m=4$.\nStep 5: Check: at $m=4$, $x^2-4x+4=(x-2)^2=0$, a single root at $x=2$. $\\checkmark$\n\n**Common Mistakes:** Reporting $-4$, the root excluded by $m>0$; forgetting the square root and reporting $m=16$.\n\n**Test Day Takeaway:** When the slope $m$ is the unknown, the discriminant gives $m^2=$ a positive number, so two opposite-sign answers appear. The problem's sign constraint chooses one.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'tangent-line-and-discriminant',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-130',
    domain: 'advanced-math',
    skills: ['tangent-lines', 'discriminant-analysis'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'In the $xy$-plane, the line $y = 6x + b$ is tangent to the parabola $y = 3x^2 - 12$. What is the value of $b$?',
    choices: [
      { id: 'A', text: '$-15$' },
      // distractor: sign flip
      { id: 'B', text: '$15$' },
      // distractor: forgets to divide by 12
      { id: 'C', text: '$-3$' },
      // distractor: ignores the constant from the parabola
      { id: 'D', text: '$-12$' }
    ],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Set equal: $3x^2-6x-(12+b)=0$. Discriminant $=0$: $36+12(12+b)=0 \\Rightarrow 12+b=-3 \\Rightarrow b=-15$.\n\n**The Full Solution:**\nStep 1: Set line equal to parabola: $3x^2-12=6x+b$.\nStep 2: Rearrange to one side: $3x^2-6x-(12+b)=0$. Here $a=3$, $b_{\\text{quad}}=-6$, and the constant is $-(12+b)$.\nStep 3: One intersection means discriminant $=0$: $(-6)^2-4(3)\\bigl[-(12+b)\\bigr]=0 \\Rightarrow 36+12(12+b)=0 \\Rightarrow 36+144+12b=0 \\Rightarrow 12b=-180 \\Rightarrow b=-15$, which is Choice A.\nStep 4: Check: at $b=-15$, $3x^2-6x+3=0 \\Rightarrow (x-1)^2=0$, a single root at $x=1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($15$): dropped the negative when solving for $b$.\n* Choice C ($-3$): stopped at $12+b=-3$ and read off $-3$ instead of solving for $b$.\n* Choice D ($-12$): grabbed the parabola's constant as if no algebra were needed.\n\n**Test Day Takeaway:** When the parabola already carries a constant and the line adds another, both fold into the rearranged constant term. Sign discipline through the rearrangement is everything.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'tangent-line-and-discriminant',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-131',
    domain: 'advanced-math',
    skills: ['tangent-lines', 'discriminant-analysis'],
    difficulty: 'hard',
    type: 'fill-in',
    question: 'In the $xy$-plane, the line $y = 2x + 5$ is tangent to the parabola $y = x^2 + kx + 9$ for two different values of $k$. What is the sum of those two values of $k$?',
    correctAnswer: '4',
    explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~30s):** Set equal: $x^2+(k-2)x+4=0$. Discriminant $=0$ gives $(k-2)^2=16$, so the roots in $k$ are symmetric about $k=2$. Their sum is $2\\times 2=4$ by Vieta's, no need to find each one.\n\n**The Full Solution:**\nStep 1: Set line equal to parabola: $x^2+kx+9=2x+5$.\nStep 2: Rearrange: $x^2+(k-2)x+4=0$.\nStep 3: One intersection means discriminant $=0$: $(k-2)^2-4(1)(4)=0 \\Rightarrow (k-2)^2=16 \\Rightarrow k-2=\\pm 4 \\Rightarrow k=6$ or $k=-2$.\nStep 4: Sum the two values: $6+(-2)=4$.\nStep 5: Check: $k=6$ gives $(x+2)^2=0$; $k=-2$ gives $(x-2)^2=0$. Both are tangent. $\\checkmark$\n\n**Common Mistakes:** Reporting a single $k$ instead of the sum; computing the difference $6-(-2)=8$; missing the second solution by ignoring the $\\pm$.\n\n**Test Day Takeaway:** A \"sum of two values\" question on a perfect-square equation $(k-2)^2=16$ is a Vieta's shortcut: the two roots are symmetric about $k=2$, so their sum is $2\\times 2=4$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'tangent-line-and-discriminant',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  // ===== Phase 2 batch 5/5: discriminant-analysis (8 items) =====
  // Pattern: classify the number of real solutions of a quadratic by the sign of the
  // discriminant b² - 4ac. Δ > 0 (two real), Δ = 0 (one real), Δ < 0 (no real).
  // 7 test occurrences across PT8, PT12 and friends. SAT Pattern title (verbatim):
  // 'Discriminant Analysis' → kebab 'discriminant-analysis'.
  // Distinct from tangent-line-and-discriminant: this pattern is on a STANDALONE
  // quadratic, not a system between a line and a parabola.
  {
    id: 'bank-am-132',
    domain: 'advanced-math',
    skills: ['discriminant-analysis'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'For what value of $c$ does the equation $x^2 + 8x + c = 0$ have exactly one real solution?',
    choices: [
      { id: 'A', text: '$16$' },
      // distractor: forgets the 4 in 4ac
      { id: 'B', text: '$64$' },
      // distractor: doubles instead of halves
      { id: 'C', text: '$32$' },
      // distractor: uses b directly
      { id: 'D', text: '$8$' }
    ],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Exactly one real solution means discriminant $=0$: $8^2-4(1)(c)=0 \\Rightarrow 64=4c \\Rightarrow c=16$.\n\n**The Full Solution:**\nStep 1: One real solution means the discriminant is zero: $b^2-4ac=0$.\nStep 2: With $a=1$, $b=8$: $8^2-4(1)(c)=0 \\Rightarrow 64-4c=0 \\Rightarrow c=16$, which is Choice A.\nStep 3: Check: $x^2+8x+16=(x+4)^2=0$, one repeated solution at $x=-4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($64$): stopped at $b^2=64$ without dividing by $4$.\n* Choice C ($32$): divided $64$ by $2$ instead of by $4$.\n* Choice D ($8$): read off the coefficient $b=8$ directly.\n\n**Test Day Takeaway:** Exactly one real solution means $b^2-4ac=0$. Two real solutions means it's positive; no real solutions means it's negative.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'discriminant-analysis',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-133',
    domain: 'advanced-math',
    skills: ['discriminant-analysis'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'If the equation $x^2 + kx + 9 = 0$ has exactly one real solution and $k > 0$, what is the value of $k$?',
    correctAnswer: '6',
    explanation: "**SAT Pattern: Discriminant Analysis**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~15s):** \"Exactly one real solution\" means the discriminant is zero: $k^2 - 4(1)(9) = 0 \\Rightarrow k^2 = 36 \\Rightarrow k = \\pm 6$. The constraint $k > 0$ picks $k = 6$.\n\n**The Full Solution:**\nStep 1: A quadratic $ax^2 + bx + c = 0$ has exactly one real solution when $\\Delta = b^2 - 4ac = 0$.\nStep 2: Here $a = 1$, $b = k$, $c = 9$, so $\\Delta = k^2 - 36 = 0$.\nStep 3: Solve: $k^2 = 36 \\Rightarrow k = \\pm 6$. Since $k > 0$, take $k = 6$.\nStep 4: Check: $x^2 + 6x + 9 = (x + 3)^2 = 0$ gives the repeated root $x = -3$. $\\checkmark$\n\n**Common Mistakes:** Reporting $-6$ (the rejected negative root); writing $k = 36$ by forgetting to take the square root; treating the discriminant as $k - 36$ instead of $k^2 - 36$.\n\n**Test Day Takeaway:** When the unknown $b$ sits inside a squared discriminant, expect a $\\pm$. The problem's sign constraint resolves which root to report.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'discriminant-analysis',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-134',
    domain: 'advanced-math',
    skills: ['discriminant-analysis'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'For what positive value of $b$ does the equation $2x^2 + bx + 8 = 0$ have exactly one real solution?',
    choices: [
      { id: 'A', text: '$8$' },
      // distractor: forgets the 2 in 4ac
      { id: 'B', text: '$\\sqrt{32}$' },
      // distractor: drops the leading coefficient entirely
      { id: 'C', text: '$\\sqrt{64}/\\sqrt{2}$' },
      // distractor: arithmetic slip
      { id: 'D', text: '$16$' }
    ],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** \"Exactly one real solution\" means $\\Delta = 0$: $b^2 - 4(2)(8) = 0 \\Rightarrow b^2 = 64 \\Rightarrow b = \\pm 8$. The positive value is $b = 8$, Choice A.\n\n**The Full Solution:**\nStep 1: One real solution requires $\\Delta = b^2 - 4ac = 0$.\nStep 2: With $a = 2$, $c = 8$: $b^2 - 4(2)(8) = b^2 - 64 = 0$.\nStep 3: $b^2 = 64 \\Rightarrow b = \\pm 8$. The positive value is $b = 8$.\nStep 4: Check: $2x^2 + 8x + 8 = 0 \\Rightarrow x^2 + 4x + 4 = (x + 2)^2 = 0$, a repeated root at $x = -2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\sqrt{32}$): drops the leading coefficient, using $b^2 = 4(8) = 32$ instead of $4(2)(8)$.\n* Choice C ($\\frac{\\sqrt{64}}{\\sqrt{2}}$): divides by $a$ inside the discriminant instead of multiplying.\n* Choice D ($16$): doubles $b = 8$ after correctly finding $b^2 = 64$.\n\n**Test Day Takeaway:** Never skip the leading coefficient in $4ac$. For $2x^2 + bx + 8 = 0$, $a = 2$, so $4ac = 4 \\cdot 2 \\cdot 8 = 64$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'discriminant-analysis',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-135',
    domain: 'advanced-math',
    skills: ['discriminant-analysis'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'If the equation $3x^2 + 12x + c = 0$ has no real solutions, what is the least integer value of $c$?',
    correctAnswer: '13',
    explanation: "**SAT Pattern: Discriminant Analysis**\n\n**The correct answer is $13$.**\n\n**The Fast Way (~25s):** \"No real solutions\" means $\\Delta < 0$: $144 - 12c < 0 \\Rightarrow c > 12$. The least integer greater than $12$ is $13$.\n\n**The Full Solution:**\nStep 1: No real solutions requires $\\Delta = b^2 - 4ac < 0$.\nStep 2: With $a = 3$, $b = 12$, $c$ unknown: $(12)^2 - 4(3)(c) = 144 - 12c < 0$.\nStep 3: $12c > 144 \\Rightarrow c > 12$.\nStep 4: The smallest integer strictly greater than $12$ is $13$. Check: $\\Delta = 144 - 12(13) = -12 < 0$. $\\checkmark$ At $c = 12$, $\\Delta = 0$ gives one solution, not none.\n\n**Common Mistakes:** Reporting $c = 12$ (that boundary gives exactly one solution); dropping $a = 3$ and solving $144 - 4c < 0 \\Rightarrow c > 36$; reading \"least\" as the boundary value itself.\n\n**Test Day Takeaway:** A strict inequality $\\Delta < 0$ excludes the boundary. \"Least integer\" with strict $>$ means the next integer above the boundary.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'discriminant-analysis',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-136',
    domain: 'advanced-math',
    skills: ['discriminant-analysis'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'For which value of $k$ does the equation $4x^2 - kx + 9 = 0$ have two distinct real solutions?',
    choices: [
      { id: 'A', text: '$13$' },
      // distractor: at the boundary
      { id: 'B', text: '$12$' },
      // distractor: inside the no-solution range
      { id: 'C', text: '$5$' },
      // distractor: also at the boundary
      { id: 'D', text: '$-12$' }
    ],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** \"Two distinct real solutions\" means $\\Delta > 0$: $k^2 - 144 > 0 \\Rightarrow |k| > 12$. Only Choice A ($k = 13$) clears $|k| > 12$.\n\n**The Full Solution:**\nStep 1: Two distinct real solutions require $\\Delta = b^2 - 4ac > 0$.\nStep 2: With $a = 4$, $b = -k$, $c = 9$: $\\Delta = k^2 - 4(4)(9) = k^2 - 144 > 0$.\nStep 3: $k^2 > 144 \\Rightarrow |k| > 12$, so $k > 12$ or $k < -12$.\nStep 4: Test the choices: $k = 13$ gives $|k| = 13 > 12$ $\\checkmark$; $k = 12$ and $k = -12$ sit on the boundary ($\\Delta = 0$, one root); $k = 5$ gives $\\Delta < 0$ (no real roots). Confirm: at $k = 13$, $\\Delta = 169 - 144 = 25 > 0$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($12$): boundary value — uses $\\ge$ instead of $>$, giving one repeated root.\n* Choice C ($5$): lands inside the no-solution range where $\\Delta < 0$.\n* Choice D ($-12$): the other boundary value, also one solution, not two distinct.\n\n**Test Day Takeaway:** \"Two distinct\" means strictly $\\Delta > 0$. At $\\Delta = 0$ the two roots coincide into one repeated root.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'discriminant-analysis',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-137',
    domain: 'advanced-math',
    skills: ['discriminant-analysis'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'If the equation $x^2 + (k + 1)x + 4 = 0$ has exactly one real solution and $k > 0$, what is the value of $k$?',
    correctAnswer: '3',
    explanation: "**SAT Pattern: Discriminant Analysis**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~25s):** \"Exactly one real solution\" means $\\Delta = 0$: $(k+1)^2 - 4(1)(4) = 0 \\Rightarrow (k+1)^2 = 16 \\Rightarrow k + 1 = \\pm 4$, so $k = 3$ or $k = -5$. The constraint $k > 0$ picks $k = 3$.\n\n**The Full Solution:**\nStep 1: One real solution requires $\\Delta = b^2 - 4ac = 0$. Here $b = k + 1$, $c = 4$.\nStep 2: $(k + 1)^2 - 16 = 0 \\Rightarrow (k + 1)^2 = 16$.\nStep 3: Take the root: $k + 1 = \\pm 4$, so $k = 3$ or $k = -5$.\nStep 4: Apply $k > 0$: $k = 3$. Check: $x^2 + 4x + 4 = (x + 2)^2 = 0$ has the repeated root $x = -2$. $\\checkmark$\n\n**Common Mistakes:** Expanding $(k + 1)^2$ as $k^2 + 1$ and losing the cross term; stopping at $k + 1 = 4$ and never considering $k + 1 = -4$; reporting the rejected root $-5$.\n\n**Test Day Takeaway:** When $b$ holds the parameter as $(k + \\text{constant})$, set the discriminant to zero, take both $\\pm$ roots, then filter with the given constraint.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'discriminant-analysis',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-138',
    domain: 'advanced-math',
    skills: ['discriminant-analysis'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'For which of the following values of $a$ does the equation $ax^2 - 4x + 1 = 0$ have no real solutions?',
    choices: [
      { id: 'A', text: '$5$' },
      // distractor: at the boundary
      { id: 'B', text: '$4$' },
      // distractor: in the two-solution range
      { id: 'C', text: '$3$' },
      // distractor: a = 0 makes it linear
      { id: 'D', text: '$0$' }
    ],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** \"No real solutions\" means $\\Delta < 0$: $16 - 4a < 0 \\Rightarrow a > 4$. Only Choice A ($a = 5$) satisfies $a > 4$ while keeping the equation quadratic ($a \\neq 0$).\n\n**The Full Solution:**\nStep 1: No real solutions requires $\\Delta = b^2 - 4ac < 0$.\nStep 2: With $a$ unknown, $b = -4$, $c = 1$: $\\Delta = (-4)^2 - 4(a)(1) = 16 - 4a < 0$.\nStep 3: $4a > 16 \\Rightarrow a > 4$.\nStep 4: Test the choices: $a = 5$ gives $\\Delta = 16 - 20 = -4 < 0$ $\\checkmark$; $a = 4$ gives $\\Delta = 0$ (one solution); $a = 3$ gives $\\Delta = 4 > 0$ (two solutions); $a = 0$ collapses the equation to the linear $-4x + 1 = 0$, which has the single solution $x = \\frac{1}{4}$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($4$): the boundary value gives one solution, not zero.\n* Choice C ($3$): in this range $\\Delta > 0$, so there are two solutions.\n* Choice D ($0$): kills the quadratic, leaving a linear equation with one solution.\n\n**Test Day Takeaway:** When the leading coefficient is the parameter, also require $a \\neq 0$, or the equation stops being quadratic.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'discriminant-analysis',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-139',
    domain: 'advanced-math',
    skills: ['discriminant-analysis'],
    difficulty: 'hard',
    type: 'fill-in',
    question: 'If the equation $x^2 + bx + 25 = 0$ has exactly one real solution, what is the sum of all possible values of $b$?',
    correctAnswer: '0',
    explanation: "**SAT Pattern: Discriminant Analysis**\n\n**The correct answer is $0$.**\n\n**The Fast Way (~15s):** \"Exactly one real solution\" means $\\Delta = 0$: $b^2 - 4(1)(25) = 0 \\Rightarrow b = \\pm 10$. The two values are symmetric about zero, so their sum is $10 + (-10) = 0$.\n\n**The Full Solution:**\nStep 1: One real solution requires $\\Delta = b^2 - 4ac = 0$.\nStep 2: With $a = 1$, $c = 25$: $b^2 - 100 = 0 \\Rightarrow b^2 = 100$.\nStep 3: $b = \\pm 10$. Sum of all possible values: $10 + (-10) = 0$.\nStep 4: Check both. $b = 10$: $x^2 + 10x + 25 = (x + 5)^2 = 0$ $\\checkmark$. $b = -10$: $x^2 - 10x + 25 = (x - 5)^2 = 0$ $\\checkmark$.\n\n**Common Mistakes:** Reporting only $10$ (one value, not the sum); computing $10 - (-10) = 20$ (the difference); taking only the positive root of $b^2 = 100$.\n\n**Test Day Takeaway:** When a parameter's square equals a constant, the two values are a $\\pm$-pair that sums to $0$. Spot the symmetry and skip the arithmetic.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'discriminant-analysis',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  // ===== Phase 2 batch 7/4: quadratic-via-factoring (8 items) =====
  // Pattern: solve x^2 + bx + c = 0 by finding two numbers with product c and
  // sum b. 7 test occurrences across PT1/2/3 M2Easy variants. SAT Pattern
  // title (verbatim): 'Quadratic via Factoring' → 'quadratic-via-factoring'.
  {
    id: 'bank-am-140',
    domain: 'advanced-math',
    skills: ['finding-roots-factoring'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'What are the solutions of the equation $x^2 + 7x + 12 = 0$?',
    choices: [
      { id: 'A', text: '$x = -3, x = -4$' },
      // distractor: sign error - gives factor numbers as roots
      { id: 'B', text: '$x = 3, x = 4$' },
      // distractor: uses coefficients
      { id: 'C', text: '$x = 7, x = 12$' },
      // distractor: stops at the factor sum/product values
      { id: 'D', text: '$x = -7, x = -12$' }
    ],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Find two numbers with product $12$ and sum $7$: $3$ and $4$. Then $(x + 3)(x + 4) = 0$ gives roots $x = -3$ and $x = -4$, Choice A.\n\n**The Full Solution:**\nStep 1: To factor $x^2 + 7x + 12$, find two numbers whose product is $12$ and sum is $7$.\nStep 2: $3 \\times 4 = 12$ and $3 + 4 = 7$ $\\checkmark$.\nStep 3: So $x^2 + 7x + 12 = (x + 3)(x + 4) = 0$, giving $x = -3$ or $x = -4$.\nStep 4: Check: $(-3)^2 + 7(-3) + 12 = 9 - 21 + 12 = 0$ $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($3, 4$): reports the factor numbers without negating them to get the roots.\n* Choice C ($7, 12$): grabs the original coefficients as solutions.\n* Choice D ($-7, -12$): negates the coefficients instead of factoring.\n\n**Test Day Takeaway:** For $x^2 + bx + c$, find numbers with product $c$ and sum $b$. The roots are the opposites of those numbers.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'quadratic-via-factoring',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-141',
    domain: 'advanced-math',
    skills: ['finding-roots-factoring'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'If $(x - 6)(x + 2) = 0$ and $x > 0$, what is the value of $x$?',
    correctAnswer: '6',
    explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~5s):** By the zero-product property, $x - 6 = 0 \\Rightarrow x = 6$ or $x + 2 = 0 \\Rightarrow x = -2$. The constraint $x > 0$ picks $x = 6$.\n\n**The Full Solution:**\nStep 1: A product is zero only when a factor is zero.\nStep 2: $x - 6 = 0 \\Rightarrow x = 6$, or $x + 2 = 0 \\Rightarrow x = -2$.\nStep 3: Apply $x > 0$: $x = 6$. Check: $(6 - 6)(6 + 2) = 0 \\cdot 8 = 0$ $\\checkmark$.\n\n**Common Mistakes:** Reporting $-2$ (the excluded negative root); multiplying the constants to get $12$ (the product, not a root).\n\n**Test Day Takeaway:** For an already-factored quadratic, each root is the opposite of the constant inside its factor: $(x - 6)$ gives $6$, $(x + 2)$ gives $-2$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'quadratic-via-factoring',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-142',
    domain: 'advanced-math',
    skills: ['finding-roots-factoring'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'What is the positive solution of the equation $x^2 - 5x - 14 = 0$?',
    choices: [
      { id: 'A', text: '$7$' },
      // distractor: other root
      { id: 'B', text: '$-2$' },
      // distractor: sign error
      { id: 'C', text: '$-7$' },
      // distractor: factor not root
      { id: 'D', text: '$14$' }
    ],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Find two numbers with product $-14$ and sum $-5$: $-7$ and $2$. Then $(x - 7)(x + 2) = 0$ gives $x = 7$ or $x = -2$. The positive solution is $x = 7$, Choice A.\n\n**The Full Solution:**\nStep 1: Factor $x^2 - 5x - 14$ by finding numbers with product $-14$ and sum $-5$.\nStep 2: Since the product is negative, the numbers have opposite signs. Try $-7$ and $2$: $-7 \\cdot 2 = -14$ $\\checkmark$ and $-7 + 2 = -5$ $\\checkmark$.\nStep 3: $x^2 - 5x - 14 = (x - 7)(x + 2) = 0$, so $x = 7$ or $x = -2$. Positive: $x = 7$.\nStep 4: Check: $7^2 - 5(7) - 14 = 49 - 35 - 14 = 0$ $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-2$): the negative root, ignoring the \"positive\" constraint.\n* Choice C ($-7$): reports the factor number $-7$ instead of its opposite, $7$.\n* Choice D ($14$): uses the constant term as a root.\n\n**Test Day Takeaway:** When $c < 0$, the two factor numbers have opposite signs, and the larger-magnitude one carries the sign of $b$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'quadratic-via-factoring',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-143',
    domain: 'advanced-math',
    skills: ['finding-roots-factoring'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'What is the sum of the solutions of the equation $x^2 + 4x - 21 = 0$?',
    correctAnswer: '-4',
    explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**The correct answer is $-4$.**\n\n**The Fast Way (~10s):** By Vieta's formula, the sum of the roots of $x^2 + 4x - 21 = 0$ is $-\\frac{b}{a} = -\\frac{4}{1} = -4$. No factoring needed.\n\n**The Full Solution:**\nStep 1: For $ax^2 + bx + c = 0$, the sum of the roots is $-\\frac{b}{a}$.\nStep 2: Here $a = 1$, $b = 4$, so the sum is $-4$.\nStep 3: Verify by factoring: numbers with product $-21$ and sum $4$ are $-3$ and $7$, giving roots $x = 3$ and $x = -7$. Sum: $3 + (-7) = -4$ $\\checkmark$.\n\n**Common Mistakes:** Reporting $4$ (dropping the negative sign in $-\\frac{b}{a}$); using the constant $-21$ or $21$ (that's tied to the product, not the sum); finding only one root.\n\n**Test Day Takeaway:** For $x^2 + bx + c = 0$, the sum of the roots is $-b$ and the product is $c$. Use Vieta's instead of factoring when you only need the sum or product.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'quadratic-via-factoring',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-144',
    domain: 'advanced-math',
    skills: ['finding-roots-factoring'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'Which of the following is a solution to the equation $x^2 - x - 30 = 0$?',
    choices: [
      { id: 'A', text: '$6$' },
      // distractor: sign error
      { id: 'B', text: '$-6$' },
      // distractor: factor not root
      { id: 'C', text: '$5$' },
      // distractor: wrong base
      { id: 'D', text: '$30$' }
    ],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Find two numbers with product $-30$ and sum $-1$: $-6$ and $5$. Then $(x - 6)(x + 5) = 0$ gives roots $x = 6$ and $x = -5$. Only Choice A ($6$) is a root.\n\n**The Full Solution:**\nStep 1: Factor $x^2 - x - 30$ by finding numbers with product $-30$ and sum $-1$.\nStep 2: Try $-6$ and $5$: $-6 \\cdot 5 = -30$ $\\checkmark$ and $-6 + 5 = -1$ $\\checkmark$.\nStep 3: $x^2 - x - 30 = (x - 6)(x + 5) = 0$, so $x = 6$ or $x = -5$.\nStep 4: Check: $6^2 - 6 - 30 = 36 - 6 - 30 = 0$ $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-6$): uses the factor number $-6$ directly; the root is its opposite, $6$.\n* Choice C ($5$): drops the sign on the actual other root, $-5$.\n* Choice D ($30$): picks the constant term as a root.\n\n**Test Day Takeaway:** When asked which value is a solution, factor and read off the roots — each is the opposite of the constant inside its factor.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'quadratic-via-factoring',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-145',
    domain: 'advanced-math',
    skills: ['finding-roots-factoring'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'What is the greater of the two solutions of the equation $x^2 - 11x + 24 = 0$?',
    correctAnswer: '8',
    explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~15s):** Find two numbers with product $24$ and sum $-11$: $-3$ and $-8$. So $(x-3)(x-8)=0$, giving roots $x=3$ and $x=8$. The greater is $8$.\n\n**The Full Solution:**\nStep 1: Factor $x^2-11x+24$. The constant $24$ is positive and the middle coefficient $-11$ is negative, so both factors are negative.\nStep 2: The pair with product $24$ and sum $-11$ is $-3$ and $-8$, so $x^2-11x+24=(x-3)(x-8)=0$.\nStep 3: Set each factor to zero: $x=3$ or $x=8$. The greater solution is $8$.\nCheck: $8^2-11(8)+24=64-88+24=0$. $\\checkmark$\n\n**Common Mistakes:** Reporting $3$ (the smaller root); reporting $-8$ (sign-slip on the factor); using $\\frac{11}{2}=5.5$ (the vertex $x$, not a root).\n\n**Test Day Takeaway:** When the constant is positive and the middle term is negative, both roots are positive. Read whether the question wants the greater, the lesser, or the sum.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'quadratic-via-factoring',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-146',
    domain: 'advanced-math',
    skills: ['finding-roots-factoring'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'For the equation $2x^2 + 7x - 4 = 0$, what is the positive solution?',
    choices: [
      { id: 'A', text: '$\\dfrac{1}{2}$' },
      // distractor: other root
      { id: 'B', text: '$-4$' },
      // distractor: sign flip
      { id: 'C', text: '$4$' },
      // distractor: doesn't divide
      { id: 'D', text: '$2$' }
    ],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** AC method: $a\\cdot c=2\\cdot(-4)=-8$. Two numbers with product $-8$ and sum $7$ are $-1$ and $8$, so $(2x-1)(x+4)=0$, giving $x=\\frac{1}{2}$ or $x=-4$. The positive root is $\\frac{1}{2}$, choice A.\n\n**The Full Solution:**\nStep 1: For $2x^2+7x-4$, compute $a\\cdot c=2\\cdot(-4)=-8$. Find two numbers with product $-8$ and sum $7$: $-1$ and $8$.\nStep 2: Split the middle term: $2x^2-x+8x-4=x(2x-1)+4(2x-1)=(2x-1)(x+4)$.\nStep 3: Set each factor to zero: $2x-1=0\\Rightarrow x=\\frac{1}{2}$, or $x+4=0\\Rightarrow x=-4$.\nStep 4: The positive solution is $x=\\frac{1}{2}$.\nCheck: $2\\left(\\frac{1}{2}\\right)^2+7\\left(\\frac{1}{2}\\right)-4=\\frac{1}{2}+\\frac{7}{2}-4=4-4=0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-4$): the negative root — ignores the word \"positive.\"\n* Choice C ($4$): the opposite sign of the negative root, not a solution.\n* Choice D ($2$): grabs the leading coefficient $a=2$ instead of solving.\n\n**Test Day Takeaway:** For a quadratic with leading coefficient $\\neq 1$, use the AC method: the product target is $a\\cdot c$, but the sum target is still $b$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'quadratic-via-factoring',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-147',
    domain: 'advanced-math',
    skills: ['finding-roots-factoring'],
    difficulty: 'hard',
    type: 'fill-in',
    question: 'For what value of $k$ does the equation $x^2 + 8x + k = 0$ have $-3$ as one of its solutions?',
    correctAnswer: '15',
    explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**The correct answer is $15$.**\n\n**The Fast Way (~15s):** A root must satisfy the equation, so substitute $x=-3$: $9-24+k=0\\Rightarrow k=15$.\n\n**The Full Solution:**\nStep 1: Since $-3$ is a solution, plug it in: $(-3)^2+8(-3)+k=0$.\nStep 2: Simplify: $9-24+k=0$, so $-15+k=0$.\nStep 3: Solve: $k=15$.\nCheck: at $k=15$, $x^2+8x+15=(x+3)(x+5)=0$, so $x=-3$ or $x=-5$ — $-3$ is indeed a root. $\\checkmark$\n\n**Common Mistakes:** Writing $(-3)^2$ as $-9$; writing $8(-3)$ as $+24$; trying to factor before using the given root.\n\n**Test Day Takeaway:** When a root is handed to you, substitute it and solve for the unknown coefficient — no factoring needed.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'quadratic-via-factoring',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  // ===== Phase 2 batch 8/3: function-evaluation-with-negative-input (8 items) =====
  // Pattern: f(x) defined; evaluate at NEGATIVE input. 7 test occurrences across
  // M2Easy variants. Title verbatim: 'Function Evaluation with Negative Input'.
  { id: 'bank-am-148', domain: 'advanced-math', skills: ['function-evaluation'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = 3x + 4$. What is the value of $f(-2)$?',
    choices: [{ id: 'A', text: '$-2$' }, { id: 'B', text: '$2$' }, { id: 'C', text: '$-10$' }, { id: 'D', text: '$10$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $f(-2)=3(-2)+4=-6+4=-2$, choice A.\n\n**The Full Solution:**\nStep 1: Replace $x$ with $-2$: $f(-2)=3(-2)+4$.\nStep 2: Multiply first: $3(-2)=-6$.\nStep 3: Add: $-6+4=-2$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($2$): drops the negative sign on $3(-2)$.\n* Choice C ($-10$): subtracts $4$ instead of adding it.\n* Choice D ($10$): treats the input as $+2$ and adds, ignoring the negative.\n\n**Test Day Takeaway:** Carry the sign through the multiplication: $3\\cdot(-2)=-6$, not $+6$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-evaluation-with-negative-input', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-149', domain: 'advanced-math', skills: ['function-evaluation'], difficulty: 'easy', type: 'fill-in',
    question: 'The function $g$ is defined by $g(x) = -2x + 5$. What is the value of $g(-3)$?',
    correctAnswer: '11',
    explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**The correct answer is $11$.**\n\n**The Fast Way (~10s):** $g(-3)=-2(-3)+5=6+5=11$.\n\n**The Full Solution:**\nStep 1: Replace $x$ with $-3$: $g(-3)=-2(-3)+5$.\nStep 2: Multiply: $-2\\cdot(-3)=6$ (two negatives make a positive).\nStep 3: Add: $6+5=11$.\n\n**Common Mistakes:** Reporting $-1$ (treating $-2(-3)$ as $-6$); reporting $-11$ (sign error on the whole expression).\n\n**Test Day Takeaway:** Two negatives multiply to a positive: $-2\\cdot(-3)=+6$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-evaluation-with-negative-input', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-150', domain: 'advanced-math', skills: ['function-evaluation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = x^2 - 4x + 7$. What is the value of $f(-2)$?',
    choices: [{ id: 'A', text: '$19$' }, { id: 'B', text: '$3$' }, { id: 'C', text: '$15$' }, { id: 'D', text: '$11$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $f(-2)=(-2)^2-4(-2)+7=4+8+7=19$, choice A.\n\n**The Full Solution:**\nStep 1: Square first: $(-2)^2=4$ (squaring removes the sign).\nStep 2: Next term: $-4(-2)=+8$.\nStep 3: Add everything: $4+8+7=19$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($3$): substitutes $+2$ instead of $-2$.\n* Choice C ($15$): drops the sign on $-4(-2)$, using $-8$.\n* Choice D ($11$): forgets to square or omits a term.\n\n**Test Day Takeaway:** $(-a)^2=a^2$ and $-b(-a)=+ba$ — a negative input flips signs twice, so watch both spots.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-evaluation-with-negative-input', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-151', domain: 'advanced-math', skills: ['function-evaluation'], difficulty: 'medium', type: 'fill-in',
    question: 'The function $h$ is defined by $h(x) = 2x^2 + 5x - 1$. What is the value of $h(-4)$?',
    correctAnswer: '11',
    explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**The correct answer is $11$.**\n\n**The Fast Way (~15s):** $h(-4)=2(-4)^2+5(-4)-1=2(16)-20-1=11$.\n\n**The Full Solution:**\nStep 1: Square first: $(-4)^2=16$.\nStep 2: Apply the leading coefficient: $2(16)=32$.\nStep 3: Next term: $5(-4)=-20$.\nStep 4: Combine: $32-20-1=11$.\n\n**Common Mistakes:** Treating $(-4)^2$ as $-16$; sign error on $5(-4)$.\n\n**Test Day Takeaway:** Square the negative input first, then multiply by the leading coefficient: $2(-4)^2=2(16)=32$, not $-32$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-evaluation-with-negative-input', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-152', domain: 'advanced-math', skills: ['function-evaluation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = -x^2 + 3x + 5$. What is the value of $f(-3)$?',
    choices: [{ id: 'A', text: '$-13$' }, { id: 'B', text: '$5$' }, { id: 'C', text: '$13$' }, { id: 'D', text: '$-5$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $f(-3)=-(-3)^2+3(-3)+5=-9-9+5=-13$, choice A.\n\n**The Full Solution:**\nStep 1: Square first, then negate: $-(-3)^2=-(9)=-9$.\nStep 2: Next term: $3(-3)=-9$.\nStep 3: Combine: $-9-9+5=-13$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($5$): drops the leading negative, computing $+9-9+5=5$.\n* Choice C ($13$): keeps $+9$ and mis-signs the middle term.\n* Choice D ($-5$): an arithmetic slip combining the terms.\n\n**Test Day Takeaway:** With a leading $-x^2$, square first and negate after: $-(-3)^2=-9$, not $+9$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-evaluation-with-negative-input', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-153', domain: 'advanced-math', skills: ['function-evaluation'], difficulty: 'medium', type: 'fill-in',
    question: 'The function $f$ is defined by $f(x) = (x + 2)^2 - 5$. What is the value of $f(-5)$?',
    correctAnswer: '4',
    explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~10s):** $f(-5)=(-5+2)^2-5=(-3)^2-5=9-5=4$.\n\n**The Full Solution:**\nStep 1: Work inside the parentheses first: $-5+2=-3$.\nStep 2: Square: $(-3)^2=9$.\nStep 3: Subtract: $9-5=4$.\n\n**Common Mistakes:** Treating $(-3)^2$ as $-9$; computing $(-5-2)^2=49$ by misreading the $+2$ as $-2$.\n\n**Test Day Takeaway:** Follow PEMDAS — finish the inside of the parentheses before squaring.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-evaluation-with-negative-input', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-154', domain: 'advanced-math', skills: ['function-evaluation'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The functions $f$ and $g$ are defined by $f(x) = 3x^2 - 2x - 1$ and $g(x) = -x + 1$. What is the value of $f(-1) + g(-1)$?',
    choices: [{ id: 'A', text: '$6$' }, { id: 'B', text: '$4$' }, { id: 'C', text: '$2$' }, { id: 'D', text: '$0$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $f(-1)=3(-1)^2-2(-1)-1=3+2-1=4$ and $g(-1)=-(-1)+1=2$, so $f(-1)+g(-1)=4+2=6$, choice A.\n\n**The Full Solution:**\nStep 1: Evaluate $f(-1)$: $3(-1)^2-2(-1)-1=3(1)+2-1=4$.\nStep 2: Evaluate $g(-1)$: $-(-1)+1=1+1=2$.\nStep 3: Add: $4+2=6$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($4$): gives $f(-1)$ only, forgetting to add $g(-1)$.\n* Choice C ($2$): gives $g(-1)$ only.\n* Choice D ($0$): drops the squared term in $f$.\n\n**Test Day Takeaway:** For a sum of two functions at the same input, evaluate each separately, then combine.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-evaluation-with-negative-input', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-155', domain: 'advanced-math', skills: ['function-evaluation'], difficulty: 'hard', type: 'fill-in',
    question: 'The function $f$ is defined by $f(x) = x^3 + 2x$. What is the value of $f(-3)$?',
    correctAnswer: '-33',
    explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**The correct answer is $-33$.**\n\n**The Fast Way (~10s):** $f(-3)=(-3)^3+2(-3)=-27-6=-33$.\n\n**The Full Solution:**\nStep 1: Cube the input: $(-3)^3=-27$ (an odd power keeps the negative sign).\nStep 2: Next term: $2(-3)=-6$.\nStep 3: Add: $-27-6=-33$.\n\n**Common Mistakes:** Treating $(-3)^3$ as $+27$ (only even powers cancel the sign); slipping on $-27-6$.\n\n**Test Day Takeaway:** $(-a)^3=-a^3$ — odd powers keep the sign, only even powers neutralize the negative.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'function-evaluation-with-negative-input', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  // ===== Phase 2 batch 8/4: discriminant-with-integer-bound (8 items) =====
  // Pattern: solve b² − 4ac < 0 (or > 0) and find the greatest/least integer
  // satisfying the bound. 7 test occurrences across PT2/3 + M2Easy. Title:
  // 'Discriminant with Integer Bound'.
  { id: 'bank-am-156', domain: 'advanced-math', skills: ['discriminant-analysis'], difficulty: 'easy', type: 'multiple-choice',
    question: 'If $x^2 + bx + 16 = 0$ has no real solutions and $b > 0$, which value of $b$ is possible?',
    choices: [{ id: 'A', text: '$7$' }, { id: 'B', text: '$8$' }, { id: 'C', text: '$9$' }, { id: 'D', text: '$10$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** No real solutions means the discriminant is negative: $b^2-4(1)(16)<0\\Rightarrow b^2<64\\Rightarrow |b|<8$. With $b>0$, that is $0<b<8$, so only $b=7$ works, choice A.\n\n**The Full Solution:**\nStep 1: For $x^2+bx+16=0$, the discriminant is $b^2-4ac=b^2-64$.\nStep 2: No real solutions requires $b^2-64<0$, so $b^2<64$, meaning $-8<b<8$.\nStep 3: Combine with $b>0$: $0<b<8$. Of the choices, only $7$ falls in this range.\n\n**Why the wrong answers are tempting:**\n* Choice B ($8$): sits exactly at the boundary, where the discriminant is $0$ — one real solution, not none.\n* Choice C ($9$): gives $b^2-64=17>0$, two real solutions.\n* Choice D ($10$): gives $b^2-64=36>0$, two real solutions.\n\n**Test Day Takeaway:** A strict inequality excludes the boundary value — $b=8$ produces a repeated real root, so it does not count as \"no real solutions.\"",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'discriminant-with-integer-bound', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-157', domain: 'advanced-math', skills: ['discriminant-analysis'], difficulty: 'easy', type: 'fill-in',
    question: 'For $x^2 + bx + 25 = 0$ to have no real solutions and $b > 0$, what is the greatest positive integer value $b$ can take?',
    correctAnswer: '9',
    explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~15s):** No real solutions means the discriminant is negative: $b^2-4(1)(25)<0 \\Rightarrow b^2<100 \\Rightarrow b<10$. The greatest integer below $10$ is $9$.\n\n**The Full Solution:**\nStep 1: For $ax^2+bx+c=0$ to have no real solutions, $b^2-4ac<0$.\nStep 2: Here $a=1$, $c=25$, so $b^2-100<0 \\Rightarrow b^2<100$.\nStep 3: With $b>0$, this gives $b<10$. The largest integer strictly less than $10$ is $9$. Check: $9^2=81<100$, so $b=9$ works; $b=10$ gives $b^2=100$, a repeated real root.\n\n**Common Mistakes:** Reporting $10$ — at $b=10$ the discriminant equals $0$, which is one real (repeated) solution, not zero solutions.\n\n**Test Day Takeaway:** \"Greatest integer strictly less than $n$\" is $n-1$. The boundary value always produces $\\Delta=0$, so it is excluded when you need NO real solutions.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'discriminant-with-integer-bound', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-158', domain: 'advanced-math', skills: ['discriminant-analysis'], difficulty: 'medium', type: 'multiple-choice',
    question: 'For $5x^2 + bx + 45 = 0$ to have no real solutions, what is the greatest positive integer value of $b$?',
    choices: [{ id: 'A', text: '$29$' }, { id: 'B', text: '$30$' }, { id: 'C', text: '$28$' }, { id: 'D', text: '$900$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** No real solutions means $b^2-4ac<0$. Here $4ac=4(5)(45)=900$, so $b^2<900 \\Rightarrow b<30$. The greatest integer below $30$ is $29$, choice A.\n\n**The Full Solution:**\nStep 1: Set the discriminant negative: $b^2-4(5)(45)<0$.\nStep 2: $4(5)(45)=900$, so $b^2<900$.\nStep 3: With $b>0$, $b<30$. The largest integer strictly below $30$ is $29$. Check: $29^2=841<900$, while $30^2=900$ gives $\\Delta=0$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($30$): the boundary value, where $\\Delta=0$ gives a repeated real root, not zero solutions.\n* Choice C ($28$): an extra off-by-one step past the correct $29$.\n* Choice D ($900$): that is the value of the $b^2$ bound, not $b$ itself — forgot to take the square root.\n\n**Test Day Takeaway:** Don't drop the leading coefficient $a$ when computing $4ac$. Here $4(5)(45)=900$, not $4(45)=180$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'discriminant-with-integer-bound', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-159', domain: 'advanced-math', skills: ['discriminant-analysis'], difficulty: 'medium', type: 'fill-in',
    question: 'For $2x^2 - kx + 8 = 0$ to have two distinct real solutions where $k > 0$, what is the least positive integer value of $k$?',
    correctAnswer: '9',
    explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~15s):** Two distinct real solutions means $\\Delta>0$: $k^2-4(2)(8)>0 \\Rightarrow k^2>64 \\Rightarrow k>8$. The least integer above $8$ is $9$.\n\n**The Full Solution:**\nStep 1: Two distinct real roots require $b^2-4ac>0$ (strictly).\nStep 2: Here $a=2$, $c=8$, so $k^2-64>0 \\Rightarrow k^2>64$.\nStep 3: With $k>0$, $k>8$. The smallest integer strictly greater than $8$ is $9$. Check: $9^2=81>64$, while $k=8$ gives $\\Delta=0$ (one repeated root).\n\n**Common Mistakes:** Reporting $8$ — the boundary gives $\\Delta=0$, a single repeated root, not two distinct ones. Reporting $7$ flips the inequality direction.\n\n**Test Day Takeaway:** \"Two distinct real solutions\" means $\\Delta$ is strictly $>0$, so the boundary value is excluded.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'discriminant-with-integer-bound', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-160', domain: 'advanced-math', skills: ['discriminant-analysis'], difficulty: 'medium', type: 'multiple-choice',
    question: 'For $x^2 + bx + 9 = 0$ to have no real solutions, the integer $b$ satisfies which of the following?',
    choices: [{ id: 'A', text: '$-5 \\leq b \\leq 5$' }, { id: 'B', text: '$-6 \\leq b \\leq 6$' }, { id: 'C', text: '$b > 6$' }, { id: 'D', text: '$b < -6$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** No real solutions means $\\Delta<0$: $b^2-4(1)(9)<0 \\Rightarrow b^2<36 \\Rightarrow -6<b<6$. The integers in that open interval run from $-5$ to $5$, i.e. $-5\\le b\\le 5$, choice A.\n\n**The Full Solution:**\nStep 1: Set the discriminant negative: $b^2-36<0 \\Rightarrow b^2<36$.\nStep 2: This means $-6<b<6$ (strict, since $b=\\pm 6$ gives $\\Delta=0$).\nStep 3: The integers strictly between $-6$ and $6$ are $-5,-4,\\ldots,4,5$, which is exactly $-5\\le b\\le 5$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-6\\le b\\le 6$): includes the endpoints $\\pm 6$, where $\\Delta=0$ gives a repeated real root.\n* Choice C ($b>6$): gives $b^2>36$, so $\\Delta>0$ — two real solutions, the opposite condition.\n* Choice D ($b<-6$): also gives $b^2>36$ and $\\Delta>0$, again two real solutions.\n\n**Test Day Takeaway:** A strict bound $|b|<6$ combined with the integer constraint tightens to $|b|\\le 5$, because the boundary integers $\\pm 6$ are excluded.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'discriminant-with-integer-bound', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-161', domain: 'advanced-math', skills: ['discriminant-analysis'], difficulty: 'medium', type: 'fill-in',
    question: 'For $3x^2 + 12x + c = 0$ to have no real solutions, what is the least integer value of $c$?',
    correctAnswer: '13',
    explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**The correct answer is $13$.**\n\n**The Fast Way (~15s):** No real solutions means $\\Delta<0$: $12^2-4(3)c<0 \\Rightarrow 144-12c<0 \\Rightarrow c>12$. The least integer above $12$ is $13$.\n\n**The Full Solution:**\nStep 1: Set the discriminant negative: $b^2-4ac<0$ with $a=3$, $b=12$.\nStep 2: $144-12c<0 \\Rightarrow 144<12c \\Rightarrow c>12$.\nStep 3: The smallest integer strictly greater than $12$ is $13$. Check: at $c=13$, $\\Delta=144-156=-12<0$, while $c=12$ gives $\\Delta=0$.\n\n**Common Mistakes:** Reporting $12$ — the boundary gives $\\Delta=0$, a repeated real root, not zero solutions.\n\n**Test Day Takeaway:** \"Least integer strictly greater than $n$\" is $n+1$. The boundary value always gives $\\Delta=0$, so it is excluded.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'discriminant-with-integer-bound', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-162', domain: 'advanced-math', skills: ['discriminant-analysis'], difficulty: 'hard', type: 'multiple-choice',
    question: 'How many integer values of $b$ result in $x^2 + bx + 12 = 0$ having no real solutions?',
    choices: [{ id: 'A', text: '$13$' }, { id: 'B', text: '$12$' }, { id: 'C', text: '$11$' }, { id: 'D', text: '$15$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** No real solutions means $b^2-4(1)(12)<0 \\Rightarrow b^2<48$. Since $\\sqrt{48}\\approx 6.93$, the integers with $|b|\\le 6$ run from $-6$ to $6$, a count of $6-(-6)+1=13$, choice A.\n\n**The Full Solution:**\nStep 1: Set the discriminant negative: $b^2-48<0 \\Rightarrow b^2<48$.\nStep 2: $\\sqrt{48}\\approx 6.93$, so $b$ must satisfy $|b|<6.93$.\nStep 3: The integers in $[-6,6]$ are $-6,-5,\\ldots,0,\\ldots,5,6$. Count them: $2(6)+1=13$. ($b=\\pm 7$ fails since $49>48$.)\n\n**Why the wrong answers are tempting:**\n* Choice B ($12$): counted only one endpoint or dropped $0$ from the list.\n* Choice C ($11$): an off-by-one that drops both endpoints or miscounts the range.\n* Choice D ($15$): extended the bound to $|b|\\le 7$, but $7^2=49>48$ fails.\n\n**Test Day Takeaway:** The number of integers in $[-n,n]$ is $2n+1$ — count both endpoints and don't forget $0$.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'discriminant-with-integer-bound', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-163', domain: 'advanced-math', skills: ['discriminant-analysis'], difficulty: 'hard', type: 'fill-in',
    question: 'For $x^2 + bx + 50 = 0$ to have no real solutions and $b$ a positive integer, what is the greatest possible value of $b$?',
    correctAnswer: '14',
    explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**The correct answer is $14$.**\n\n**The Fast Way (~20s):** No real solutions means $b^2-4(1)(50)<0 \\Rightarrow b^2<200$. Since $\\sqrt{200}\\approx 14.14$, the greatest positive integer with $b^2<200$ is $14$.\n\n**The Full Solution:**\nStep 1: Set the discriminant negative: $b^2-200<0 \\Rightarrow b^2<200$.\nStep 2: $\\sqrt{200}\\approx 14.14$, so $b<14.14$.\nStep 3: The largest positive integer satisfying this is $14$. Check: $14^2=196<200$, while $15^2=225>200$ gives two real roots.\n\n**Common Mistakes:** Reporting $15$ — $15^2=225>200$, so the discriminant is positive and the equation has two real solutions. Reporting $13$ is an unnecessary off-by-one below the true floor.\n\n**Test Day Takeaway:** Take the square root to find the bound, then take the floor for the greatest integer — and verify the candidate by squaring it.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'discriminant-with-integer-bound', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  // ===== Phase 2 batch 8/5: vertex-form-maximum (8 items) =====
  // Pattern: find the maximum/minimum value (or x-coordinate of vertex) of a
  // quadratic by completing the square or using x = -b/(2a). 6 test occurrences
  // across PT3, PT7 etc. Title: 'Vertex Form Maximum'.
  { id: 'bank-am-164', domain: 'advanced-math', skills: ['converting-quadratic-forms'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = (x - 3)^2 + 4$. What is the minimum value of $f(x)$?',
    choices: [{ id: 'A', text: '$4$' }, { id: 'B', text: '$3$' }, { id: 'C', text: '$-4$' }, { id: 'D', text: '$13$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** In vertex form $(x-h)^2+k$, the squared term is never negative, so the minimum value is $k$. Here $k=4$, choice A.\n\n**The Full Solution:**\nStep 1: $(x-3)^2\\ge 0$ for every $x$, with equality only at $x=3$.\nStep 2: So $f(x)=(x-3)^2+4\\ge 4$, and the minimum is reached at $x=3$: $f(3)=0+4=4$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($3$): that is $h$, the $x$-coordinate of the vertex, not the minimum value.\n* Choice C ($-4$): a sign flip on $k$.\n* Choice D ($13$): expanded incorrectly and added $9+4$, treating $(x-3)^2$ as if it contributed $+9$ to the minimum.\n\n**Test Day Takeaway:** In vertex form $f(x)=(x-h)^2+k$, the minimum value is $k$ and the vertex is $(h,k)$. Read off $k$ directly.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-maximum', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-165', domain: 'advanced-math', skills: ['converting-quadratic-forms'], difficulty: 'easy', type: 'fill-in',
    question: 'What is the maximum value of $f(x) = -(x + 2)^2 + 7$?',
    correctAnswer: '7',
    explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~10s):** The negative leading coefficient means the parabola opens down, so the vertex is a maximum. In $-(x-h)^2+k$ form, that maximum value is $k=7$.\n\n**The Full Solution:**\nStep 1: $(x+2)^2\\ge 0$, so $-(x+2)^2\\le 0$, with equality at $x=-2$.\nStep 2: Then $f(x)=-(x+2)^2+7\\le 7$, and the maximum is $f(-2)=0+7=7$.\n\n**Common Mistakes:** Reporting $-2$ (the $x$-coordinate of the vertex, $h$) or $-7$ (a sign flip on $k$).\n\n**Test Day Takeaway:** For $f(x)=-(x-h)^2+k$ the parabola opens down, so the maximum value is $k$, reached at $x=h$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-maximum', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-166', domain: 'advanced-math', skills: ['converting-quadratic-forms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What is the minimum value of $g(x) = 2x^2 - 8x + 11$?',
    choices: [{ id: 'A', text: '$3$' }, { id: 'B', text: '$11$' }, { id: 'C', text: '$2$' }, { id: 'D', text: '$-3$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The vertex sits at $x=-\\frac{b}{2a}=\\frac{8}{4}=2$. Then $g(2)=2(4)-8(2)+11=8-16+11=3$, choice A.\n\n**The Full Solution:**\nStep 1: Complete the square: $g(x)=2(x^2-4x)+11=2(x-2)^2-8+11=2(x-2)^2+3$.\nStep 2: Since $2(x-2)^2\\ge 0$, the minimum value is $3$, reached at $x=2$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($11$): that is $g(0)$, the $y$-intercept, not the minimum.\n* Choice C ($2$): that is the leading coefficient $a$, not a function value.\n* Choice D ($-3$): a sign error in the completed-square constant.\n\n**Test Day Takeaway:** For $ax^2+bx+c$ with $a>0$, the minimum is at $x=-\\frac{b}{2a}$ — find that $x$ first, then substitute back to get the value.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-maximum', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-167', domain: 'advanced-math', skills: ['converting-quadratic-forms'], difficulty: 'medium', type: 'fill-in',
    question: 'The function $h(t) = -16t^2 + 64t + 5$ models the height in feet of a ball $t$ seconds after being thrown upward. At what time, in seconds, does the ball reach its maximum height?',
    correctAnswer: '2',
    explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~10s):** Maximum height of a quadratic occurs at the vertex, $t=-\\frac{b}{2a}=\\frac{-64}{2(-16)}=2$ seconds.\n\n**The Full Solution:**\nStep 1: Identify $a=-16$, $b=64$. The negative $a$ means the parabola opens down, so the vertex is the maximum.\nStep 2: $t=-\\frac{b}{2a}=\\frac{-64}{2(-16)}=\\frac{-64}{-32}=2$ seconds.\n\n**Common Mistakes:** Solving $h(t)=0$ — that finds when the ball lands (hits the ground), not when it is highest.\n\n**Test Day Takeaway:** For projectile-height quadratics, the time at MAXIMUM height is $t=-\\frac{b}{2a}$, not where $h=0$.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'vertex-form-maximum', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-168', domain: 'advanced-math', skills: ['converting-quadratic-forms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What is the maximum value of $f(x) = -x^2 + 6x - 4$?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$-4$' }, { id: 'C', text: '$3$' }, { id: 'D', text: '$9$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The vertex is at $x=-\\frac{b}{2a}=\\frac{-6}{-2}=3$. Then $f(3)=-(3)^2+6(3)-4=-9+18-4=5$, choice A.\n\n**The Full Solution:**\nStep 1: The negative leading coefficient means the parabola opens down, so its vertex is the maximum.\nStep 2: $x=-\\frac{b}{2a}=\\frac{-6}{2(-1)}=3$.\nStep 3: Evaluate: $f(3)=-9+18-4=5$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-4$): that is $f(0)$, the constant term, not the maximum.\n* Choice C ($3$): that is the $x$-coordinate of the vertex, not the maximum value.\n* Choice D ($9$): stopped at $-9+18$ and forgot to subtract $4$.\n\n**Test Day Takeaway:** A negative leading coefficient makes the parabola open down, so the vertex is the MAXIMUM — find $x=-\\frac{b}{2a}$, then substitute back for the value.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-maximum', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-169', domain: 'advanced-math', skills: ['converting-quadratic-forms'], difficulty: 'medium', type: 'fill-in',
    question: 'What is the $x$-coordinate of the vertex of the parabola $y = x^2 + 10x + 21$?',
    correctAnswer: '-5',
    explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**The correct answer is $-5$.**\n\n**The Fast Way (~10s):** The vertex $x$-coordinate is $x=-\\frac{b}{2a}$. Here $a=1$, $b=10$, so $x=-\\frac{10}{2}=-5$.\n\n```seva-figure\n{\"type\":\"parabola\",\"params\":{\"vertex\":{\"h\":-5,\"k\":-4},\"a\":1,\"xRange\":[-11,1],\"yRange\":[-7,21],\"yTickInterval\":6},\"caption\":\"The vertex $(-5, -4)$ is the turning point.\"}\n```\n\n**The Full Solution:**\nStep 1: For $y=x^2+10x+21$, read off $a=1$ and $b=10$.\nStep 2: Apply $x=-\\frac{b}{2a}=-\\frac{10}{2(1)}=-5$.\n\n**Common Mistakes:** Reporting $5$ (dropping the leading negative sign in the formula); reporting $-21$ (using $c$ instead of computing the vertex).\n\n**Test Day Takeaway:** The $x$-coordinate of a parabola's vertex is $x=-\\frac{b}{2a}$. The sign of $b$ flips when it enters the formula.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-maximum', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-170', domain: 'advanced-math', skills: ['converting-quadratic-forms'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The function $f(x) = 3x^2 - 12x + 17$ has its minimum value at $x = a$. What is the minimum value of $f(x)$?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$2$' }, { id: 'C', text: '$17$' }, { id: 'D', text: '$-5$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The minimum sits at $x=-\\frac{b}{2a}=-\\frac{-12}{2(3)}=\\frac{12}{6}=2$. Then $f(2)=3(4)-12(2)+17=12-24+17=5$.\n\n**The Full Solution:**\nStep 1: A parabola with $a>0$ opens upward, so its minimum value is the $y$-coordinate of the vertex.\nStep 2: Find $x=-\\frac{b}{2a}=-\\frac{-12}{2(3)}=2$, which is the location $a$.\nStep 3: Evaluate the function there: $f(2)=3(2)^2-12(2)+17=12-24+17=5$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($2$): reports $a$, the vertex $x$-coordinate, instead of the minimum value $f(a)$.\n* Choice C ($17$): uses $f(0)=17$, the constant term, mistaking the $y$-intercept for the minimum.\n* Choice D ($-5$): sign error in the final arithmetic — flips $5$ to $-5$.\n\n**Test Day Takeaway:** A minimum value is a two-step job: find $x=-\\frac{b}{2a}$, then evaluate the function there.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'vertex-form-maximum', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-171', domain: 'advanced-math', skills: ['converting-quadratic-forms'], difficulty: 'hard', type: 'fill-in',
    question: 'The function $f$ is defined by $f(x) = -2x^2 + 8x + k$. If the maximum value of $f$ is $15$, what is the value of $k$?',
    correctAnswer: '7',
    explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~25s):** The maximum is at $x=-\\frac{b}{2a}=-\\frac{8}{2(-2)}=2$. Then $f(2)=-2(4)+16+k=8+k$. Set $8+k=15\\Rightarrow k=7$.\n\n**The Full Solution:**\nStep 1: Since $a=-2<0$, the parabola opens downward, so its maximum value is $f$ at the vertex.\nStep 2: Locate the vertex: $x=-\\frac{b}{2a}=-\\frac{8}{2(-2)}=2$.\nStep 3: Evaluate: $f(2)=-2(2)^2+8(2)+k=-8+16+k=8+k$.\nStep 4: The maximum value is $15$, so $8+k=15\\Rightarrow k=7$.\n\n**Common Mistakes:** Setting $k=15$ (treating $k$ as the maximum directly, ignoring the $-8+16$ contribution); a sign error on $-2(2)^2=-8$.\n\n**Test Day Takeaway:** When a maximum or minimum value is given, evaluate the function at the vertex and solve the resulting equation for the unknown coefficient.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'vertex-form-maximum', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  // ===== Phase 2 batch 9/2: function-composition (8 items) =====
  // 6 test occurrences. Title verbatim: 'Function Composition'.
  { id: 'bank-am-172', domain: 'advanced-math', skills: ['function-composition'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The functions $f$ and $g$ are defined by $f(x) = 2x + 1$ and $g(x) = x - 3$. What is the value of $f(g(5))$?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$8$' }, { id: 'C', text: '$11$' }, { id: 'D', text: '$2$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Function Composition**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Inner first: $g(5)=5-3=2$. Then outer: $f(2)=2(2)+1=5$.\n\n**The Full Solution:**\nStep 1: $f(g(5))$ means apply $g$ to $5$ first, then feed the result into $f$.\nStep 2: $g(5)=5-3=2$.\nStep 3: $f(2)=2(2)+1=5$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($8$): reverses the order — computes $g(f(5))=g(11)=8$ instead of $f(g(5))$.\n* Choice C ($11$): stops at $f(5)=11$, forgetting to apply $g$ first.\n* Choice D ($2$): reports $g(5)=2$ alone, forgetting the outer $f$.\n\n**Test Day Takeaway:** For $f(g(x))$, evaluate the inner function first, then substitute into the outer.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-composition', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-173', domain: 'advanced-math', skills: ['function-composition'], difficulty: 'easy', type: 'fill-in',
    question: 'The functions $f$ and $g$ are defined by $f(x) = x^2$ and $g(x) = x + 1$. What is the value of $f(g(2))$?',
    correctAnswer: '9',
    explanation: "**SAT Pattern: Function Composition**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~10s):** Inner first: $g(2)=2+1=3$. Then $f(3)=3^2=9$.\n\n**The Full Solution:**\nStep 1: $f(g(2))$ applies $g$ first, then $f$.\nStep 2: $g(2)=2+1=3$.\nStep 3: $f(3)=3^2=9$.\n\n**Common Mistakes:** Squaring before adding ($f(2)=4$ then $+1=5$), which applies the functions in the wrong order.\n\n**Test Day Takeaway:** In $f(g(x))$, the inner function runs first and its output becomes the input to the outer.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-composition', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-174', domain: 'advanced-math', skills: ['function-composition'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The functions $f$ and $g$ are defined by $f(x) = 3x + 4$ and $g(x) = x - 1$. What is the value of $g(f(2))$?',
    choices: [{ id: 'A', text: '$9$' }, { id: 'B', text: '$10$' }, { id: 'C', text: '$2$' }, { id: 'D', text: '$7$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Function Composition**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Inner first: $f(2)=3(2)+4=10$. Then $g(10)=10-1=9$.\n\n**The Full Solution:**\nStep 1: $g(f(2))$ means apply $f$ to $2$ first, then feed that into $g$.\nStep 2: $f(2)=3(2)+4=10$.\nStep 3: $g(10)=10-1=9$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($10$): stops at $f(2)=10$, forgetting to apply $g$.\n* Choice C ($2$): reports the original input rather than computing anything.\n* Choice D ($7$): reverses the order — computes $f(g(2))=f(1)=7$ instead of $g(f(2))$.\n\n**Test Day Takeaway:** $g(f(x))$ and $f(g(x))$ are different — the outer function is always applied last.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-composition', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-175', domain: 'advanced-math', skills: ['function-composition'], difficulty: 'medium', type: 'fill-in',
    question: 'The functions $f$ and $g$ are defined by $f(x) = 2x^2 - 3x + 4$ and $g(x) = x + 1$. What is the value of $f(g(2))$?',
    correctAnswer: '13',
    explanation: "**SAT Pattern: Function Composition**\n\n**The correct answer is $13$.**\n\n**The Fast Way (~15s):** Inner first: $g(2)=2+1=3$. Then $f(3)=2(3)^2-3(3)+4=18-9+4=13$.\n\n**The Full Solution:**\nStep 1: $f(g(2))$ applies $g$ first, then $f$.\nStep 2: $g(2)=2+1=3$.\nStep 3: $f(3)=2(3)^2-3(3)+4=18-9+4=13$.\n\n**Common Mistakes:** Forgetting the inner step and computing $f(2)=8-6+4=6$; mis-squaring in $2(3)^2$ as $2\\cdot3\\cdot2$ instead of $2\\cdot9$.\n\n**Test Day Takeaway:** The inner function's output is the input to the outer — substitute carefully into every term.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-composition', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-176', domain: 'advanced-math', skills: ['function-composition'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The functions $f$ and $g$ are defined by $f(x) = x^2 + 1$ and $g(x) = 2x - 3$, and the function $h$ is defined by $h(x) = f(g(x))$. What is the value of $h(2)$?',
    choices: [{ id: 'A', text: '$2$' }, { id: 'B', text: '$5$' }, { id: 'C', text: '$3$' }, { id: 'D', text: '$1$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Function Composition**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $h(2)=f(g(2))$. Inner first: $g(2)=2(2)-3=1$. Then $f(1)=1^2+1=2$.\n\n**The Full Solution:**\nStep 1: $h(x)=f(g(x))$, so $h(2)=f(g(2))$ — evaluate $g$ first.\nStep 2: $g(2)=2(2)-3=1$.\nStep 3: $f(1)=(1)^2+1=2$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($5$): computes $f(2)=2^2+1=5$, skipping the inner $g$.\n* Choice C ($3$): unrelated value with no consistent path to it.\n* Choice D ($1$): stops at $g(2)=1$, forgetting to apply $f$.\n\n**Test Day Takeaway:** When $h(x)=f(g(x))$, evaluate the inner $g$ first and feed its output into $f$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-composition', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-177', domain: 'advanced-math', skills: ['function-composition'], difficulty: 'medium', type: 'fill-in',
    question: 'The functions $f$ and $g$ are defined by $f(x) = x + 4$ and $g(x) = 3x$. What is the value of $f(g(2)) - g(f(2))$?',
    correctAnswer: '-8',
    explanation: "**SAT Pattern: Function Composition**\n\n**The correct answer is $-8$.**\n\n**The Fast Way (~20s):** $f(g(2))=f(6)=6+4=10$ and $g(f(2))=g(6)=3(6)=18$, so the difference is $10-18=-8$.\n\n**The Full Solution:**\nStep 1: Compute $g(2)=3(2)=6$, then $f(g(2))=f(6)=6+4=10$.\nStep 2: Compute $f(2)=2+4=6$, then $g(f(2))=g(6)=3(6)=18$.\nStep 3: Subtract in the order written: $10-18=-8$.\n\n**Common Mistakes:** Subtracting in the wrong order to get $+8$; assuming the two compositions are equal because both inner steps land on $6$.\n\n**Test Day Takeaway:** Order matters in composition — even when both inner functions produce the same value, the outer step can differ, so compute each composition fully before subtracting.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-composition', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-178', domain: 'advanced-math', skills: ['function-composition'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = 2x + 5$. If $f(g(3)) = 13$, what is the value of $g(3)$?',
    choices: [{ id: 'A', text: '$4$' }, { id: 'B', text: '$3$' }, { id: 'C', text: '$13$' }, { id: 'D', text: '$11$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Function Composition**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $f$ takes some input to $13$: $2(\\text{input})+5=13\\Rightarrow \\text{input}=4$. That input is $g(3)$, so $g(3)=4$.\n\n**The Full Solution:**\nStep 1: $f(g(3))=13$ means $f$ evaluated at $g(3)$ equals $13$.\nStep 2: $f(x)=2x+5$, so $2\\cdot g(3)+5=13$.\nStep 3: Solve: $2\\cdot g(3)=8\\Rightarrow g(3)=4$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($3$): reports the inner input $3$ rather than the inner output $g(3)$.\n* Choice C ($13$): copies the right-hand side back as the answer.\n* Choice D ($11$): forward-solves $f(3)=2(3)+5=11$, applying $f$ to $3$ directly and ignoring $g$.\n\n**Test Day Takeaway:** When the outer output is given, work backward through the outer function to recover its input, which is the inner value you want.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-composition', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-179', domain: 'advanced-math', skills: ['function-composition'], difficulty: 'hard', type: 'fill-in',
    question: 'The functions $f$ and $g$ are defined by $f(x) = x^2 + 2$ and $g(x) = ax - 1$, where $a$ is a positive constant. If $f(g(2)) = 11$, what is the value of $a$?',
    correctAnswer: '2',
    explanation: "**SAT Pattern: Function Composition**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~25s):** $f(g(2))=11\\Rightarrow (g(2))^2+2=11\\Rightarrow (g(2))^2=9$. Since $a>0$ makes $g(2)=2a-1$ positive, take $g(2)=3$, so $2a-1=3\\Rightarrow a=2$.\n\n**The Full Solution:**\nStep 1: $f(x)=x^2+2$, so $f(g(2))=(g(2))^2+2=11$.\nStep 2: $(g(2))^2=9\\Rightarrow g(2)=3$ or $g(2)=-3$.\nStep 3: $g(2)=a(2)-1=2a-1$. With $a$ a positive constant, $2a-1>-1$, and only $g(2)=3$ fits, so discard $-3$.\nStep 4: Solve $2a-1=3\\Rightarrow 2a=4\\Rightarrow a=2$.\n\n**Common Mistakes:** Taking $g(2)=-3$ and getting a negative $a$, violating the \"$a$ is positive\" constraint; forgetting to subtract $2$ before taking the square root.\n\n**Test Day Takeaway:** Backward composition with an unknown coefficient: undo the outer function first, then use the given constraint (here $a>0$) to pick the valid root before solving.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'function-composition', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  // ===== Phase 2 batch 13/5: exponential-growth-model (8 items) =====
  { id: 'bank-am-180', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A bacteria culture begins with $50$ bacteria, and the number of bacteria in the culture doubles every $2$ hours. What is the number of bacteria in the culture after $8$ hours?',
    choices: [{ id: 'A', text: '$800$' }, { id: 'B', text: '$200$' }, { id: 'C', text: '$400$' }, { id: 'D', text: '$1{,}600$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** In $8$ hours there are $\\frac{8}{2}=4$ doubling periods, so $50\\cdot2^4=50\\cdot16=800$.\n\n**The Full Solution:**\nStep 1: The population doubles every $2$ hours, so the number of doublings in $8$ hours is $\\frac{8}{2}=4$.\nStep 2: $P(8)=50\\cdot2^4=50\\cdot16=800$.\nStep 3: Verify by stepping: $t=2\\to100$, $t=4\\to200$, $t=6\\to400$, $t=8\\to800$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($200$): treats the doubling period as $1$ hour or stops early — only $2$ doublings ($50\\cdot2^2$).\n* Choice C ($400$): off by one — counts $3$ doublings instead of $4$ ($50\\cdot2^3$).\n* Choice D ($1{,}600$): off by one the other way — counts $5$ doublings, or uses $8$ as the exponent ($50\\cdot2^5$).\n\n**Test Day Takeaway:** When the doubling period is not $1$ unit, the exponent is $\\frac{\\text{elapsed time}}{\\text{doubling period}}$, not the elapsed time itself.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-growth-model', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-am-181', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'easy', type: 'fill-in',
    question: 'A population grows according to $P(t) = 100 \\cdot 3^t$ where $t$ is years. What is the population at $t = 2$?',
    correctAnswer: '900',
    explanation: "**SAT Pattern: Exponential Growth Model**\n\n**The correct answer is $900$.**\n\n**The Fast Way (~10s):** Substitute $t=2$: $3^2=9$, so $P(2)=100 \\cdot 9=900$.\n\n**The Full Solution:**\nStep 1: The model is $P(t)=100 \\cdot 3^t$. Plug in $t=2$.\nStep 2: $P(2)=100 \\cdot 3^2=100 \\cdot 9=900$.\n\n**Common Mistakes:** Computing $100 \\cdot 3 \\cdot 2=600$ (multiplying the exponent instead of raising to it); getting $300$ by reading $3^2$ as $3 \\cdot 2$ then using only one factor of $100$.\n\n**Test Day Takeaway:** In $P(t)=P_0 b^t$, raise the base $b$ to the power $t$ first, then multiply by the starting value $P_0$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-growth-model', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-182', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'medium', type: 'multiple-choice',
    question: 'An investment grows according to $V(t) = 1000(1.05)^t$. By what factor does the investment grow each year?',
    choices: [{ id: 'A', text: '$1.05$' }, { id: 'B', text: '$0.05$' }, { id: 'C', text: '$1000$' }, { id: 'D', text: '$5\\%$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** In $V(t)=1000(1.05)^t$, the base $1.05$ is the yearly growth factor, so the answer is A.\n\n**The Full Solution:**\nStep 1: An exponential model is $V_0 \\cdot (\\text{factor})^t$. The number raised to the power $t$ is the per-year multiplier.\nStep 2: Here that number is $1.05$, so the investment is multiplied by $1.05$ each year.\n\n**Why the wrong answers are tempting:**\n* Choice B ($0.05$): reports the growth rate $r$, not the factor — the factor is $1+r=1.05$.\n* Choice C ($1000$): reports the initial value, confusing the starting amount with the multiplier.\n* Choice D ($5\\%$): the rate written as a percent — correct as a rate, but a factor must include the principal.\n\n**Test Day Takeaway:** The base of the exponent is the growth factor $1+r$; the rate $r$ alone leaves off the $1$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-growth-model', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-183', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'medium', type: 'fill-in',
    question: 'A population of $200$ animals grows by $8\\%$ each year. Which formula gives the population after $t$ years? (Express as a decimal multiplier.)',
    correctAnswer: '1.08',
    explanation: "**SAT Pattern: Exponential Growth Model**\n\n**The correct answer is $1.08$.**\n\n**The Fast Way (~5s):** $8\\%$ growth means each year you keep $100\\%$ and add $8\\%$, so the multiplier is $1+0.08=1.08$.\n\n**The Full Solution:**\nStep 1: A rate $r$ produces a per-year multiplier of $1+r$.\nStep 2: Here $r=0.08$, so the multiplier is $1+0.08=1.08$, giving $P(t)=200(1.08)^t$.\n\n**Common Mistakes:** Reporting $0.08$ (the rate, not the multiplier); reporting $1.8$ (misplacing the decimal); reporting $8$ (using the percent number without converting).\n\n**Test Day Takeaway:** Growth rate $r$ converts to multiplier $1+r$; decay rate $r$ converts to multiplier $1-r$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-growth-model', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-184', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'medium', type: 'multiple-choice',
    question: 'An exponential decay function is $f(t) = 500(0.85)^t$. By what percent does the function decrease each year?',
    choices: [{ id: 'A', text: '$15\\%$' }, { id: 'B', text: '$85\\%$' }, { id: 'C', text: '$50\\%$' }, { id: 'D', text: '$5\\%$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** The decay factor is $0.85=1-0.15$, so the function drops $15\\%$ each year — choice A.\n\n**The Full Solution:**\nStep 1: For decay, the multiplier equals $1-r$, where $r$ is the percent decrease as a decimal.\nStep 2: Here the multiplier is $0.85$, so $1-r=0.85 \\Rightarrow r=0.15=15\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($85\\%$): reads the multiplier $0.85$ as the decrease — but $0.85$ is what remains, not what is lost.\n* Choice C ($50\\%$): no support in the model; a guess that the function halves.\n* Choice D ($5\\%$): grabs the last digit of $0.85$ instead of computing $1-0.85$.\n\n**Test Day Takeaway:** A decay multiplier $0.85$ means $1-0.85=0.15$ is lost — the percent change is $1$ minus the base, not the base itself.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-growth-model', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-185', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'medium', type: 'fill-in',
    question: 'A car worth $\\$20{,}000$ depreciates at $10\\%$ per year. What is its value, in dollars, after $2$ years?',
    correctAnswer: '16200',
    explanation: "**SAT Pattern: Exponential Growth Model**\n\n**The correct answer is $16200$.**\n\n**The Fast Way (~15s):** Each year keeps $90\\%$, so after $2$ years: $20000 \\cdot (0.9)^2=20000 \\cdot 0.81=16200$ dollars.\n\n**The Full Solution:**\nStep 1: A $10\\%$ drop gives a multiplier of $1-0.10=0.9$ per year.\nStep 2: After $2$ years the value is $20000 \\cdot (0.9)^2$.\nStep 3: $(0.9)^2=0.81$, so $20000 \\cdot 0.81=16200$.\n\n**Common Mistakes:** Subtracting $10\\%$ twice from the original ($20000-2000-2000=16000$) instead of compounding; reporting $18000$ (only one year of depreciation).\n\n**Test Day Takeaway:** Depreciation is exponential decay: apply $(1-r)^t$, multiplying by $0.9$ each year rather than subtracting a flat amount.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'exponential-growth-model', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-186', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A population is modeled by $P(t) = 1000 \\cdot 2^{t/4}$ where $t$ is years. After how many years will the population reach $4000$?',
    choices: [{ id: 'A', text: '$8$' }, { id: 'B', text: '$4$' }, { id: 'C', text: '$2$' }, { id: 'D', text: '$16$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Set $1000 \\cdot 2^{t/4}=4000$, so $2^{t/4}=4=2^2$. Match exponents: $\\frac{t}{4}=2 \\Rightarrow t=8$, choice A.\n\n**The Full Solution:**\nStep 1: Divide both sides by $1000$: $2^{t/4}=\\frac{4000}{1000}=4$.\nStep 2: Write $4$ as a power of $2$: $4=2^2$, so $2^{t/4}=2^2$.\nStep 3: Equal bases mean equal exponents: $\\frac{t}{4}=2$, so $t=8$ years.\n\n**Why the wrong answers are tempting:**\n* Choice B ($4$): solves $2^t=4$, ignoring the $\\frac{t}{4}$ scaling in the exponent.\n* Choice C ($2$): stops at $\\frac{t}{4}=2$ and reports that value as $t$.\n* Choice D ($16$): multiplies by $4$ instead of by $2$ when undoing $\\frac{t}{4}=2$.\n\n**Test Day Takeaway:** When the variable is in the exponent, rewrite both sides with the same base, then set the exponents equal.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-growth-model', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-187', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'hard', type: 'fill-in',
    question: 'A radioactive substance has a half-life of $10$ years. If the initial amount is $80$ grams, how many grams remain after $30$ years?',
    correctAnswer: '10',
    explanation: "**SAT Pattern: Exponential Growth Model**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~15s):** $30$ years is $\\frac{30}{10}=3$ half-lives, so the amount halves three times: $80 \\to 40 \\to 20 \\to 10$ grams.\n\n**The Full Solution:**\nStep 1: A half-life of $10$ years gives the model $A(t)=80 \\cdot \\left(\\frac{1}{2}\\right)^{t/10}$.\nStep 2: At $t=30$: the exponent is $\\frac{30}{10}=3$.\nStep 3: $A(30)=80 \\cdot \\left(\\frac{1}{2}\\right)^3=\\frac{80}{8}=10$ grams.\n\n**Common Mistakes:** Subtracting half the original each time ($80-40-40$) instead of halving the current amount; using $\\frac{30}{10}=3$ then computing $80-3 \\cdot$ something linear; stopping after one or two halvings.\n\n**Test Day Takeaway:** Count half-lives as $\\frac{t}{h}$, then multiply the start amount by $\\left(\\frac{1}{2}\\right)$ that many times.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-growth-model', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },

  // ─── VIETA'S SUM/PRODUCT OF ROOTS (bank-am-188..195) ──────────────────────
  // Granularity principle (2026-05-12): Vieta's (sum=-b/a, product=c/a) is a
  // DISTINCT method from factoring. Items pin direct-Vieta's approach.
  { id: 'bank-am-188', domain: 'advanced-math', skills: ['quadratic-factoring'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The quadratic equation $2x^2 - 10x + 7 = 0$ has two real solutions. What is the sum of these solutions?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$-5$' }, { id: 'C', text: '$10$' }, { id: 'D', text: '$3.5$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Sum/Product of Roots — Vieta's**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Sum of roots $=-\\frac{b}{a}=-\\frac{-10}{2}=5$, so the answer is A — no need to solve the quadratic.\n\n**The Full Solution:**\nStep 1: For $ax^2+bx+c=0$ with roots $r_1, r_2$, Vieta's gives $r_1+r_2=-\\frac{b}{a}$.\nStep 2: Here $a=2$ and $b=-10$, so the sum $=-\\frac{-10}{2}=5$.\nStep 3: Check with the quadratic formula: roots are $\\frac{10 \\pm \\sqrt{44}}{4}$, and $\\frac{10+\\sqrt{44}}{4}+\\frac{10-\\sqrt{44}}{4}=\\frac{20}{4}=5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-5$): uses $+\\frac{b}{a}$ and forgets the leading negative sign in $-\\frac{b}{a}$.\n* Choice C ($10$): drops the division by $a$, using only $-b=10$.\n* Choice D ($3.5$): uses $\\frac{c}{a}=\\frac{7}{2}$, the product formula, instead of the sum.\n\n**Test Day Takeaway:** Sum of roots $=-\\frac{b}{a}$, product $=\\frac{c}{a}$ — far faster than solving when roots are irrational.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vieta-sum-product-of-roots', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-am-189', domain: 'advanced-math', skills: ['quadratic-factoring'], difficulty: 'easy', type: 'fill-in',
    question: 'The quadratic equation $3x^2 + 12x + 9 = 0$ has two real solutions. What is the product of these solutions?',
    correctAnswer: '3',
    explanation: "**SAT Pattern: Sum/Product of Roots — Vieta's**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~5s):** Product of roots $=\\frac{c}{a}=\\frac{9}{3}=3$.\n\n**The Full Solution:**\nStep 1: For $ax^2+bx+c=0$, Vieta's gives $r_1 \\cdot r_2=\\frac{c}{a}$.\nStep 2: Here $a=3$ and $c=9$, so the product $=\\frac{9}{3}=3$.\nStep 3: Check by factoring: $3x^2+12x+9=3(x+1)(x+3)$, roots $-1$ and $-3$, product $(-1)(-3)=3$. $\\checkmark$\n\n**Common Mistakes:** Reporting $9$ (forgetting to divide by $a$); reporting $-3$ (sign slip — two negative roots multiply to a positive); reporting $12$ (using $b$ instead of $c$).\n\n**Test Day Takeaway:** Product of roots $=\\frac{c}{a}$, regardless of $b$. Divide by the leading coefficient whenever $a \\neq 1$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vieta-sum-product-of-roots', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-am-190', domain: 'advanced-math', skills: ['quadratic-factoring'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The equation $x^2 - 8x + k = 0$ has two roots. One of the roots is $5$. What is the other root?',
    choices: [{ id: 'A', text: '$3$' }, { id: 'B', text: '$-3$' }, { id: 'C', text: '$13$' }, { id: 'D', text: '$-13$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Sum/Product of Roots — Vieta's**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Sum of roots $=-\\frac{b}{a}=\\frac{8}{1}=8$. With one root $=5$, the other is $8-5=3$, choice A.\n\n**The Full Solution:**\nStep 1: For $x^2-8x+k=0$, Vieta's sum gives $r_1+r_2=-\\frac{-8}{1}=8$.\nStep 2: Given $r_1=5$, solve $5+r_2=8 \\Rightarrow r_2=3$.\nStep 3: Check: roots $3$ and $5$ make $(x-3)(x-5)=x^2-8x+15$, so $k=15$ and $x=3$ gives $9-24+15=0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-3$): negates the correct $3$ after the subtraction $8-5$.\n* Choice C ($13$): adds $5+8=13$ instead of subtracting from the sum.\n* Choice D ($-13$): stacks both errors — adds, then negates.\n\n**Test Day Takeaway:** Given one root, the other is (sum of roots) minus that root. The constant $k$ is never needed here.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vieta-sum-product-of-roots', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-am-191', domain: 'advanced-math', skills: ['quadratic-factoring'], difficulty: 'medium', type: 'fill-in',
    question: 'The equation $2x^2 + bx - 18 = 0$ has $x = 3$ as one of its roots. What is the other root?',
    correctAnswer: '-3',
    explanation: "**SAT Pattern: Sum/Product of Roots — Vieta's**\n\n**The correct answer is $-3$.**\n\n**The Fast Way (~10s):** Product of roots $=\\frac{c}{a}=\\frac{-18}{2}=-9$. With one root $=3$, the other is $\\frac{-9}{3}=-3$.\n\n**The Full Solution:**\nStep 1: For $2x^2+bx-18=0$, Vieta's product gives $r_1 \\cdot r_2=\\frac{c}{a}=\\frac{-18}{2}=-9$.\nStep 2: Given $r_1=3$, solve $3 \\cdot r_2=-9 \\Rightarrow r_2=-3$.\nStep 3: Check: roots $3$ and $-3$ give $2(x-3)(x+3)=2x^2-18$, so $b=0$, and $x=3$ gives $18-18=0$. $\\checkmark$\n\n**Common Mistakes:** Reporting $-9$ (the product, not the second root); reporting $3$ (the given root); forgetting to divide by $a$ when $a \\neq 1$.\n\n**Test Day Takeaway:** Product of roots $=\\frac{c}{a}$ works even when $b$ is unknown — divide the product by the known root to get the other.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vieta-sum-product-of-roots', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-am-192', domain: 'advanced-math', skills: ['quadratic-factoring'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A quadratic equation $x^2 + bx + c = 0$ has two real solutions whose sum is $7$ and whose product is $12$. What is the value of $b + c$?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$-5$' }, { id: 'C', text: '$19$' }, { id: 'D', text: '$-19$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Sum/Product of Roots — Vieta's**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** For a monic quadratic, $b=-(\\text{sum})=-7$ and $c=\\text{product}=12$, so $b+c=-7+12=5$, choice A.\n\n**The Full Solution:**\nStep 1: For $x^2+bx+c=0$ ($a=1$), Vieta's gives sum $=-b$ and product $=c$.\nStep 2: Sum $=7 \\Rightarrow b=-7$; product $=12 \\Rightarrow c=12$.\nStep 3: $b+c=-7+12=5$. Check: $x^2-7x+12=(x-3)(x-4)$, roots $3$ and $4$, sum $7$ and product $12$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-5$): flips the sign of the final result.\n* Choice C ($19$): uses $b=+7$, forgetting the negation, then adds $7+12$.\n* Choice D ($-19$): combines both the missing negation and a sign flip.\n\n**Test Day Takeaway:** For monic quadratics, sum $=-b$ and product $=c$. The most common slip is forgetting the negative sign on $b$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vieta-sum-product-of-roots', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-am-193', domain: 'advanced-math', skills: ['quadratic-factoring'], difficulty: 'medium', type: 'fill-in',
    question: 'The roots of $5x^2 + 25x + c = 0$ have a product equal to $6$. What is the value of $c$?',
    correctAnswer: '30',
    explanation: "**SAT Pattern: Sum/Product of Roots — Vieta's**\n\n**The correct answer is $30$.**\n\n**The Fast Way (~5s):** Vieta's says the product of the roots is $\\frac{c}{a}$. Here $\\frac{c}{5}=6$, so $c=30$.\n\n**The Full Solution:**\nStep 1: For $ax^2+bx+c=0$, the product of the roots equals $\\frac{c}{a}$.\nStep 2: With $a=5$ and product $=6$: $\\frac{c}{5}=6 \\Rightarrow c=5 \\cdot 6=30$.\n\nVerification: $5x^2+25x+30=5(x+2)(x+3)$, with roots $-2$ and $-3$. Their product is $(-2)(-3)=6$. $\\checkmark$\n\n**Common Mistakes:** Reporting $6$ (copies the product straight into $c$, forgetting to scale by $a$); reporting $1.2$ (divides $6 \\div 5$ instead of multiplying); reporting $-30$ (sign slip).\n\n**Test Day Takeaway:** When $a \\neq 1$, the product of the roots is $\\frac{c}{a}$, not $c$. Solve for $c$ as $c=a \\cdot (\\text{product})$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vieta-sum-product-of-roots', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-am-194', domain: 'advanced-math', skills: ['quadratic-factoring'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The roots of $x^2 - 6x + 4 = 0$ are $r$ and $s$. What is the value of $r^2 + s^2$?',
    choices: [{ id: 'A', text: '$28$' }, { id: 'B', text: '$32$' }, { id: 'C', text: '$24$' }, { id: 'D', text: '$40$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Sum/Product of Roots — Vieta's**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Use the identity $r^2+s^2=(r+s)^2-2rs$. Vieta's gives $r+s=6$ and $rs=4$, so $r^2+s^2=36-8=28$.\n\n**The Full Solution:**\nStep 1: Don't solve for $r$ and $s$ separately. The symmetric expression $r^2+s^2$ rewrites as $(r+s)^2-2rs$.\nStep 2: From Vieta's on $x^2-6x+4=0$: $r+s=-\\frac{b}{a}=6$ and $rs=\\frac{c}{a}=4$.\nStep 3: Substitute: $r^2+s^2=6^2-2(4)=36-8=28$.\n\nVerification: the roots are $3 \\pm \\sqrt{5}$, and $(3+\\sqrt{5})^2+(3-\\sqrt{5})^2=(14+6\\sqrt{5})+(14-6\\sqrt{5})=28$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($32$): an arithmetic slip after the correct setup.\n* Choice C ($24$): drops the factor of $2$, computing $36-rs$ instead of $36-2rs$.\n* Choice D ($40$): adds $2rs$ instead of subtracting it.\n\n**Test Day Takeaway:** Symmetric expressions in the roots reduce to Vieta's through identities. Memorize $r^2+s^2=(r+s)^2-2rs$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vieta-sum-product-of-roots', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-am-195', domain: 'advanced-math', skills: ['quadratic-factoring'], difficulty: 'hard', type: 'fill-in',
    question: 'The equation $3x^2 + bx - 24 = 0$ has $x = 2$ as one of its roots. What is the value of $b$?',
    correctAnswer: '6',
    explanation: "**SAT Pattern: Sum/Product of Roots — Vieta's**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~15s):** Product $=\\frac{-24}{3}=-8$, so the other root is $\\frac{-8}{2}=-4$. Sum $=2+(-4)=-2=-\\frac{b}{3}$, giving $b=6$.\n\n**The Full Solution:**\nStep 1: For $3x^2+bx-24=0$, the product of the roots is $\\frac{c}{a}=\\frac{-24}{3}=-8$.\nStep 2: One root is $2$, so the other is $\\frac{-8}{2}=-4$.\nStep 3: The sum of the roots is $-\\frac{b}{a}$. So $2+(-4)=-2=-\\frac{b}{3} \\Rightarrow b=6$.\n\nVerification: plug $x=2$ into $3x^2+6x-24$: $3(4)+6(2)-24=12+12-24=0$. $\\checkmark$\n\n**Common Mistakes:** Reporting $-6$ (sign error on $-\\frac{b}{a}$); reporting $-2$ (stops at the sum of the roots instead of solving for $b$); reporting $2$ (just restates the given root).\n\n**Test Day Takeaway:** When $a \\neq 1$ and one root is given, chain Vieta's: use the product to find the missing root, then the sum to find the coefficient. No factoring needed.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vieta-sum-product-of-roots', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  // ─── INTERPRET EXPONENTIAL PARAMETERS (bank-am-196..203) ──────────────────
  // Granularity principle: interpreting a, b, exponent-denominator in
  // a·b^(t/k) is a DISTINCT method from building the model from words.
  { id: 'bank-am-196', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The function $f(t) = 800(1.04)^t$ models the value of an investment $t$ years after it was opened. Which of the following best describes the meaning of $1.04$ in this context?',
    choices: [{ id: 'A', text: 'The investment increases by $4\\%$ each year.' }, { id: 'B', text: 'The investment increases by $104\\%$ each year.' }, { id: 'C', text: 'The investment is worth $\\$1.04$ initially.' }, { id: 'D', text: 'The investment increases by $\\$1.04$ each year.' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** The base $1.04=1+0.04$. The $0.04$ is the per-year growth rate, which is $4\\%$ each year.\n\n**The Full Solution:**\nStep 1: In an exponential model $a \\cdot b^t$, the base $b$ is the per-period multiplier, not the percent change itself.\nStep 2: Here $b=1.04$, so the growth rate is $b-1=0.04=4\\%$ per year.\n\nVerification: at $t=1$, $f(1)=800 \\cdot 1.04=832$, which is $4\\%$ more than $800$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: reads the base $1.04$ as $104\\%$ growth instead of as a multiplier.\n* Choice C: confuses the base with the initial value (the initial value is $800$).\n* Choice D: treats the change as additive ($\\$1.04$ per year) rather than multiplicative.\n\n**Test Day Takeaway:** In $a \\cdot b^t$, the base $b$ means \"multiply by $b$ each period.\" The growth rate is $b-1$, expressed as $(b-1) \\cdot 100\\%$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-growth-interpretation', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-am-197', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'easy', type: 'fill-in',
    question: 'A population is modeled by $P(t) = 5000(0.92)^t$ where $t$ is years. By what percent does the population decrease each year?',
    correctAnswer: '8',
    explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~5s):** The base $0.92=1-0.08$. The decay rate is $0.08=8\\%$ per year.\n\n**The Full Solution:**\nStep 1: For a decay model $a \\cdot b^t$ with $b<1$, the decay rate is $1-b$.\nStep 2: Here $1-0.92=0.08=8\\%$ per year.\n\nVerification: at $t=1$, $P=5000 \\cdot 0.92=4600$, which is $8\\%$ less than $5000$. $\\checkmark$\n\n**Common Mistakes:** Reporting $92$ (reads the base as a percent); reporting $108$ (treats it as growth instead of decay); reporting $0.08$ (leaves it as a decimal instead of a percent).\n\n**Test Day Takeaway:** Decay rate $=1-b$; growth rate $=b-1$. Either way, it is how far the base sits from $1$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-growth-interpretation', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-am-198', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The function $V(t) = 12000(0.85)^{t/5}$ models the value (in dollars) of a piece of equipment $t$ years after purchase. By what percent does the equipment\'s value decrease every $5$ years?',
    choices: [{ id: 'A', text: '$15\\%$' }, { id: 'B', text: '$85\\%$' }, { id: 'C', text: '$5\\%$' }, { id: 'D', text: '$3\\%$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The exponent's denominator $5$ matches the question's \"$5$ years,\" so the base $0.85$ describes one $5$-year step. Decay rate $=1-0.85=0.15=15\\%$.\n\n**The Full Solution:**\nStep 1: In $V(t)=12000 \\cdot 0.85^{t/5}$, the denominator $5$ in the exponent means the base is applied once every $5$ years.\nStep 2: Each $5$-year period multiplies the value by $0.85$, a decrease of $1-0.85=0.15=15\\%$.\n\nVerification: $V(0)=12000$ and $V(5)=12000 \\cdot 0.85=10200$. The drop is $1800$, which is $15\\%$ of $12000$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($85\\%$): reports the multiplier $0.85$ as a percent, confusing what remains with what is lost.\n* Choice C ($5\\%$): copies the exponent denominator $5$ (in years) as if it were a percent.\n* Choice D ($3\\%$): divides $15\\% \\div 5$ to get a per-year rate, answering a question that was not asked.\n\n**Test Day Takeaway:** In $b^{t/k}$, the base $b$ describes the change over $k$ time units, not per single unit. Match the question's stated period to the denominator.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-growth-interpretation', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-am-199', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'medium', type: 'fill-in',
    question: 'A bacteria population is modeled by $B(t) = 200(2)^{t/3}$ where $t$ is hours. By what factor does the population grow every $3$ hours?',
    correctAnswer: '2',
    explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~5s):** The exponent's denominator $3$ matches the \"$3$ hours\" in the question, so the base $2$ is the factor over each $3$-hour period: the population doubles.\n\n**The Full Solution:**\nStep 1: In $B(t)=200 \\cdot 2^{t/3}$, the denominator $3$ means the base is applied once every $3$ hours.\nStep 2: Over a $3$-hour step, the population is multiplied by $2^{3/3}=2^1=2$.\n\nVerification: $B(0)=200$ and $B(3)=200 \\cdot 2^1=400$, so $\\frac{400}{200}=2$. $\\checkmark$\n\n**Common Mistakes:** Reporting $3$ (the exponent denominator); reporting $200$ (the initial value); reporting $100$ (mistaking the factor for $200\\%$).\n\n**Test Day Takeaway:** In $b^{t/k}$, the factor over $k$ units is $b$; the factor over $1$ unit is $b^{1/k}$. Read the denominator before answering.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-growth-interpretation', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-am-200', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The function $A(t) = 1000(1.05)^t$ models a savings account, where $A$ is the balance after $t$ years. Which statement is best supported by this model?',
    choices: [{ id: 'A', text: 'The initial balance is $\\$1000$ and the account grows by $5\\%$ each year.' }, { id: 'B', text: 'The initial balance is $\\$5\\%$ and the account grows by $\\$1000$ each year.' }, { id: 'C', text: 'The account grows by $\\$1.05$ each year.' }, { id: 'D', text: 'The account grows by $50\\%$ each year.' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** In $a \\cdot b^t$, $a=1000$ is the initial value and $b=1.05$ gives the growth rate $b-1=0.05=5\\%$. That is Choice A exactly.\n\n**The Full Solution:**\nStep 1: The coefficient $a=1000$ is the balance at $t=0$, the initial balance.\nStep 2: The base $b=1.05$ is the per-year multiplier, so the growth rate is $1.05-1=0.05=5\\%$ each year.\n\nVerification: $A(0)=1000$ and $A(1)=1050$, a $5\\%$ increase. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: swaps the roles of $a$ and $b$.\n* Choice C: treats growth as additive ($\\$1.05$ per year) instead of multiplicative.\n* Choice D: misreads $1.05$ as $1+0.5$, giving $50\\%$.\n\n**Test Day Takeaway:** Two parameters to interpret: $a$ (initial value, at $t=0$) and $b$ (multiplier). Convert $b$ to a rate with $b-1$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-growth-interpretation', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-am-201', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'medium', type: 'fill-in',
    question: 'A car\'s value is modeled by $V(t) = 25000(0.88)^t$, where $V$ is in dollars and $t$ is years since purchase. What is the initial value of the car, in dollars?',
    correctAnswer: '25000',
    explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**The correct answer is $25000$.**\n\n**The Fast Way (~3s):** The initial value is the coefficient $a$ in $a \\cdot b^t$. Here $a=25000$, since $V(0)=25000 \\cdot 0.88^0=25000 \\cdot 1=25000$.\n\n**The Full Solution:**\nStep 1: In $a \\cdot b^t$, set $t=0$. Because $b^0=1$, the value is just $a$.\nStep 2: Here $a=25000$, so the initial value is $\\$25{,}000$.\n\n**Common Mistakes:** Reporting $0.88$ (the base); reporting $22000$ ($0.88 \\times 25000$, the value after one year, not the initial value); reporting $12$ ($1-0.88$ as a percent).\n\n**Test Day Takeaway:** The initial value is always the coefficient $a$ in front of $b^t$ — read it off, no computation needed.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-growth-interpretation', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-am-202', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A population is modeled by $P(t) = a(1.03)^t$, where $t$ is years. If the population is $1545$ at $t = 0$, what is the meaning of $a$ and what is its value?',
    choices: [{ id: 'A', text: '$a$ is the initial population, equal to $1545$.' }, { id: 'B', text: '$a$ is the growth rate, equal to $1545$.' }, { id: 'C', text: '$a$ is the growth factor, equal to $1.03$.' }, { id: 'D', text: '$a$ is the population in $1$ year, equal to $1545$.' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** At $t=0$, $P(0)=a \\cdot 1.03^0=a$. Since $P(0)=1545$, $a=1545$, the initial population.\n\n**The Full Solution:**\nStep 1: In $a \\cdot b^t$, evaluate at $t=0$: $P(0)=a \\cdot b^0=a \\cdot 1=a$.\nStep 2: The problem states $P(0)=1545$, so $a=1545$, which is the population at the start.\n\nVerification: at $t=1$, $P=1545 \\cdot 1.03=1591.35$, a $3\\%$ increase. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: confuses the initial value with the growth rate.\n* Choice C: confuses $a$ (the coefficient) with $b$ (the growth factor, $1.03$).\n* Choice D: confuses $P(0)$ with $P(1)$, the population after one year.\n\n**Test Day Takeaway:** In $a \\cdot b^t$, $a$ is always the value at $t=0$. If unsure, re-derive: $a \\cdot b^0=a$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-growth-interpretation', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-am-203', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'hard', type: 'fill-in',
    question: 'The function $f$ defined by $f(t) = 50 \\cdot 4^{t/3}$ models a quantity that grows over time $t$, where $t$ is measured in days. By what factor does the quantity grow over a period of $9$ days?',
    correctAnswer: '64',
    explanation: "**SAT Pattern: Exponential Growth Factor over a Period**\n\n**The correct answer is $64$.**\n\n**The Fast Way (~15s):** The growth factor over $9$ days is $\\frac{f(9)}{f(0)}=\\frac{50 \\cdot 4^{9/3}}{50 \\cdot 4^0}=4^3=64$.\n\n**The Full Solution:**\nStep 1: The factor by which the quantity grows from $t=0$ to $t=9$ is the ratio $\\frac{f(9)}{f(0)}$; the leading constant $50$ cancels.\nStep 2: $\\frac{f(9)}{f(0)}=\\frac{50 \\cdot 4^{9/3}}{50 \\cdot 4^{0/3}}=4^{9/3}=4^3=64$.\n\nVerification: $f(0)=50$ and $f(9)=50 \\cdot 4^3=50 \\cdot 64=3{,}200$. The ratio is $\\frac{3{,}200}{50}=64$. $\\checkmark$\n\n**Common Mistakes:** Reporting $9$ (the time interval, not the factor); reporting $4$ (the base, not the factor over $9$ days); reporting $12$ (computing $4 \\cdot \\frac{9}{3}$ instead of $4^{9/3}$); reporting $3$ (the value of the reduced exponent).\n\n**Test Day Takeaway:** For $f(t)=a \\cdot b^{t/k}$, the growth factor over $n$ time units is $b^{n/k}$. The leading constant $a$ never affects the ratio. Reduce the exponent first: $\\frac{9}{3}=3$, so $4^{9/3}=4^3=64$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-growth-interpretation', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  // ── classify-physical-motion-model (5 questions, batch 2026-05-13) ────────
  // Pattern: given a verbal description of how something changes over time,
  // identify whether the relationship is linear, exponential, or quadratic.
  // Aligns to Bluebook M2-Hard Q1 (airplane descending at constant rate).
  { id: 'bank-am-204', domain: 'advanced-math', skills: ['function-interpretation', 'linear-functions'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A swimming pool initially holds $8{,}000$ gallons of water and drains at a constant rate of $25$ gallons per minute. What type of function best models the relationship between the amount of water remaining in the pool and time?',
    choices: [{ id: 'A', text: 'Decreasing exponential' }, { id: 'B', text: 'Decreasing linear' }, { id: 'C', text: 'Increasing linear' }, { id: 'D', text: 'Increasing exponential' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Classify Physical Motion Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** \"Constant rate\" plus \"drains\" means a decreasing linear function — the same $25$ gallons leave every minute, so the change per minute is constant.\n\n**The Full Solution:**\nStep 1: A linear function is defined by a constant rate of change. \"Drains at a constant rate of $25$ gallons per minute\" is exactly that.\nStep 2: The water amount goes down, so the slope is negative — a decreasing linear function, $W(t)=8000-25t$.\n\nVerification: $W(0)=8000$, $W(1)=7975$, $W(2)=7950$. The differences are $-25$ and $-25$, constant. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: exponential decay loses a constant percent each minute, so the gallons removed would shrink over time — not a fixed $25$.\n* Choice C: gets the type right but the direction wrong; \"drains\" means the slope is negative.\n* Choice D: wrong direction and wrong type at once.\n\n**Test Day Takeaway:** \"Constant rate of X per unit\" signals a linear model; the sign comes from the verb (\"gains\" vs \"drains/loses\"). Reserve exponential for \"multiplied by\" or \"grows by X percent\" language.",
    calculatorAllowed: true, tags: ['model-classification'], sourceStyleRef: 'model-classification', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-am-205', domain: 'advanced-math', skills: ['function-interpretation', 'exponential-growth-decay'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A biologist places $200$ bacteria in a petri dish. The number of bacteria doubles every $30$ minutes. What type of function best models the number of bacteria over time?',
    choices: [{ id: 'A', text: 'Increasing linear' }, { id: 'B', text: 'Decreasing exponential' }, { id: 'C', text: 'Increasing exponential' }, { id: 'D', text: 'Quadratic' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Classify Physical Motion Model**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** \"Doubles every $30$ minutes\" means the count is multiplied by a fixed factor over a fixed period $\\Rightarrow$ exponential. The factor $2 > 1$, so it grows: increasing exponential.\n\n**The Full Solution:**\nStep 1: A quantity multiplied by a constant factor (here $2$) over each constant interval (here $30$ minutes) is modeled by an exponential function.\nStep 2: A model is $N(t) = 200 \\cdot 2^{t/30}$, with $t$ in minutes.\nStep 3: Check the growth: $N(0) = 200$, $N(30) = 400$, $N(60) = 800$. Each interval doubles the previous total rather than adding a fixed amount. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: linear would mean adding the same number every $30$ minutes (e.g., $+200$). Doubling adds increasing amounts ($+200$, then $+400$, then $+800$).\n* Choice B: doubling is growth, not decay. Decay would say \"halves every $30$ minutes.\"\n* Choice D: a quadratic has a constant second difference, not a constant multiplicative factor.\n\n**Test Day Takeaway:** \"Doubles, triples, or grows by a percent every period\" $\\Rightarrow$ exponential. \"Adds a fixed amount every period\" $\\Rightarrow$ linear. The split is multiplicative vs. additive.",
    calculatorAllowed: true, tags: ['model-classification'], sourceStyleRef: 'model-classification', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-am-206', domain: 'advanced-math', skills: ['function-interpretation', 'exponential-growth-decay'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A small town\'s population is currently $12{,}500$ and is projected to increase by $4\\%$ each year for the next decade. Which type of function best models the projected population as a function of time?',
    choices: [{ id: 'A', text: 'Increasing linear, because the percent change is constant.' }, { id: 'B', text: 'Increasing exponential, because the amount added each year grows over time.' }, { id: 'C', text: 'Decreasing linear, because $4\\%$ is small.' }, { id: 'D', text: 'Quadratic, because compound growth is curved.' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Classify Physical Motion Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** \"Increases by $4\\%$ each year\" means each year's population is $1.04$ times the prior year's $\\Rightarrow$ exponential growth.\n\n**The Full Solution:**\nStep 1: A percent change is taken on the current value, not a fixed amount. Year 1 adds $0.04 \\cdot 12{,}500 = 500$; year 2 adds $0.04 \\cdot 13{,}000 = 520$. The amount added grows each year, which is the signature of exponential growth.\nStep 2: A model is $P(t) = 12{,}500 \\cdot (1.04)^t$.\nStep 3: Check: $P(0) = 12{,}500$, $P(1) = 13{,}000$, $P(2) = 13{,}520$. Year-over-year ratios are constant at $1.04$; the differences ($500$, $520$) are not constant. That confirms exponential, not linear. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: confuses \"constant percent\" with \"constant amount.\" A constant amount $\\Rightarrow$ linear; a constant percent $\\Rightarrow$ exponential.\n* Choice C: \"increases\" is growth regardless of how small $4\\%$ is.\n* Choice D: an exponential is not quadratic; its second differences are not constant.\n\n**Test Day Takeaway:** \"Increases by X percent each period\" $\\Rightarrow$ exponential. \"Increases by X units each period\" $\\Rightarrow$ linear. The word \"percent\" scales with the current value, so it is the giveaway.",
    calculatorAllowed: true, tags: ['model-classification'], sourceStyleRef: 'model-classification', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-am-207', domain: 'advanced-math', skills: ['function-interpretation', 'identify-quadratic'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A ball is dropped from the top of a cliff and falls under gravity (with negligible air resistance). Which type of function best models the ball\'s height above the ground as a function of the time elapsed since release?',
    choices: [{ id: 'A', text: 'Decreasing linear' }, { id: 'B', text: 'Decreasing exponential' }, { id: 'C', text: 'Decreasing quadratic' }, { id: 'D', text: 'Increasing quadratic' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Classify Physical Motion Model**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Free fall under constant gravity produces a $-\\frac{1}{2}g t^2$ term $\\Rightarrow$ a quadratic with a negative leading coefficient $\\Rightarrow$ decreasing quadratic.\n\n**The Full Solution:**\nStep 1: Under constant gravitational acceleration $g$, height follows $h(t) = h_0 - \\frac{1}{2}g t^2$. The $t^2$ term makes the model quadratic.\nStep 2: The coefficient on $t^2$ is negative, so the parabola opens downward and the height decreases over time.\nStep 3: Check the $t^2$ signature: from rest, the drop at $t = 1$ is about $4.9$ m, and at $t = 2$ it is about $19.6$ m — quadrupling for a doubling of time, exactly what $t^2$ gives. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: a constant rate of fall would require zero acceleration, but the ball speeds up as it falls.\n* Choice B: exponential decay never reaches zero (it is asymptotic); free fall reaches the ground in finite time.\n* Choice D: the height decreases from the cliff top, so the parabola opens downward (negative leading coefficient), not upward.\n\n**Test Day Takeaway:** Projectile and free-fall problems under constant gravity are always quadratic: $h(t) = h_0 + v_0 t - \\frac{1}{2}g t^2$. The $-\\frac{1}{2}g$ coefficient on $t^2$ opens the parabola downward.",
    calculatorAllowed: true, tags: ['model-classification'], sourceStyleRef: 'model-classification', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-am-208', domain: 'advanced-math', skills: ['function-interpretation', 'exponential-growth-decay'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A patient receives a single dose of a medication. The amount of medication in the patient\'s bloodstream is reduced by half every $6$ hours as the body metabolizes it. Which type of function best models the amount of medication remaining as a function of time since the dose?',
    choices: [{ id: 'A', text: 'Decreasing linear, because the same fraction is removed each interval.' }, { id: 'B', text: 'Decreasing exponential, because the amount is multiplied by a fixed factor each interval.' }, { id: 'C', text: 'Increasing exponential, because metabolism speeds up over time.' }, { id: 'D', text: 'Quadratic, because the rate of reduction changes.' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Classify Physical Motion Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** \"Half every $6$ hours\" means the amount is multiplied by $\\frac{1}{2}$ over a fixed period $\\Rightarrow$ exponential decay.\n\n**The Full Solution:**\nStep 1: \"Reduced by half\" means multiplied by $\\frac{1}{2}$ — a fixed multiplicative factor over a fixed interval, which is the definition of an exponential function.\nStep 2: The base $\\frac{1}{2} < 1$, so the function decreases: exponential decay.\nStep 3: Check: $A(t) = A_0 \\cdot \\left(\\frac{1}{2}\\right)^{t/6}$ gives full dose at $t = 0$, half at $t = 6$, a quarter at $t = 12$, an eighth at $t = 18$. Each interval removes less in absolute terms, unlike linear decay. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: a constant fraction removed is exactly what makes it exponential. Linear would need the same number of milligrams removed each interval.\n* Choice C: \"reduced\" means the amount goes down, so this is decay, not growth.\n* Choice D: the rate of reduction changes multiplicatively (factor $\\frac{1}{2}$), not in the constant-second-difference way of a quadratic.\n\n**Test Day Takeaway:** \"Halves\" or \"loses X percent\" every fixed period $\\Rightarrow$ exponential decay (base between $0$ and $1$). Half-life problems are exponential, never linear.",
    calculatorAllowed: true, tags: ['model-classification'], sourceStyleRef: 'model-classification', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  // ── interpret-initial-value-in-context (5 questions, batch 2026-05-13) ────
  // Pattern: given f(x) modeling a real scenario, interpret the y-intercept
  // (or initial value) in plain language. Aligns to Bluebook M2-Hard Q3
  // (popsicles, juice remaining y-intercept).
  { id: 'bank-am-209', domain: 'advanced-math', skills: ['function-interpretation', 'linear-functions'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A delivery truck started its route with a full tank of gas. The function $g(t) = -2.5t + 80$ approximates the number of gallons of gas remaining in the tank after the truck has been driving for $t$ hours. Which statement is the best interpretation of the $y$-intercept of the graph of $y = g(t)$ in the $ty$-plane in this context?',
    choices: [{ id: 'A', text: 'The truck used approximately $2.5$ gallons of gas each hour.' }, { id: 'B', text: 'The truck started the route with approximately $80$ gallons of gas in the tank.' }, { id: 'C', text: 'The truck started the route with approximately $2.5$ gallons of gas in the tank.' }, { id: 'D', text: 'The truck used approximately $80$ gallons of gas each hour.' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Interpret Initial Value in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The $y$-intercept of $g(t) = -2.5t + 80$ is $g(0) = 80$. At $t = 0$ (the start of the route), $80$ gallons remain.\n\n**The Full Solution:**\nStep 1: For a linear function $g(t) = mt + b$, the $y$-intercept is $b$, the value at $t = 0$. Here $b = 80$.\nStep 2: The context says $t$ is hours since the truck started driving, so $t = 0$ is the start of the route.\nStep 3: Therefore the tank held about $80$ gallons at the start. The slope $m = -2.5$ separately tells us the truck uses $2.5$ gallons per hour. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: confuses the slope (the per-hour rate, $2.5$) with the $y$-intercept (the initial value).\n* Choice C: uses the slope's magnitude $2.5$ as the starting tank size.\n* Choice D: combines the slope/intercept swap with treating the starting amount as a rate.\n\n**Test Day Takeaway:** In $f(x) = mx + b$ for a real-world context, $b$ (the $y$-intercept) is the initial value at $x = 0$ and $m$ (the slope) is the rate of change per unit. \"Interpret the $y$-intercept\" always asks for the starting value.",
    calculatorAllowed: true, tags: ['interpret-parameter'], sourceStyleRef: 'interpret-y-intercept', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-am-210', domain: 'advanced-math', skills: ['function-interpretation', 'linear-functions'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A library held a one-time book sale. The function $B(d) = -45d + 2{,}700$ approximates the number of books remaining at the end of day $d$ of the sale. Which statement is the best interpretation of the $y$-intercept of the graph of $y = B(d)$ in the $dy$-plane in this context?',
    choices: [{ id: 'A', text: 'The library sold approximately $45$ books each day.' }, { id: 'B', text: 'The sale ended after approximately $45$ days.' }, { id: 'C', text: 'The library started the sale with approximately $2{,}700$ books available.' }, { id: 'D', text: 'The library sold approximately $2{,}700$ books each day.' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Interpret Initial Value in Context**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The $y$-intercept of $B(d) = -45d + 2{,}700$ is $B(0) = 2{,}700$. At $d = 0$ (before the sale started), $2{,}700$ books remain.\n\n**The Full Solution:**\nStep 1: The $y$-intercept of $B(d) = -45d + 2{,}700$ is $2{,}700$, the value of $B$ at $d = 0$.\nStep 2: Since $d$ counts days into the sale, $d = 0$ is the moment the sale began.\nStep 3: So the library started with about $2{,}700$ books. The slope $-45$ separately says about $45$ books sell per day; the sale's length would be the $d$-intercept, $\\frac{2{,}700}{45} = 60$ days. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: confuses the slope (books per day, $45$) with the $y$-intercept (initial inventory).\n* Choice B: describes when $B = 0$ (the $d$-intercept), not when $d = 0$.\n* Choice D: treats the initial inventory $2{,}700$ as a daily rate.\n\n**Test Day Takeaway:** \"Interpret the $y$-intercept\" $\\Rightarrow$ the value at the start (input $= 0$). \"Interpret the $x$-intercept\" $\\Rightarrow$ when the output hits $0$. Don't mix them.",
    calculatorAllowed: true, tags: ['interpret-parameter'], sourceStyleRef: 'interpret-y-intercept', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-am-211', domain: 'advanced-math', skills: ['function-interpretation', 'exponential-growth-decay'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A magazine\'s print subscriber count is decreasing over time. The function $L(t) = 1{,}200 \\cdot (0.97)^t$ approximates the number of print subscribers $t$ years after $2020$. Which statement is the best interpretation of the value $1{,}200$ in this context?',
    choices: [{ id: 'A', text: 'The magazine loses approximately $1{,}200$ subscribers each year.' }, { id: 'B', text: 'The magazine had approximately $1{,}200$ print subscribers in $2020$.' }, { id: 'C', text: 'The magazine\'s subscriber count is decreasing by approximately $1{,}200\\%$ each year.' }, { id: 'D', text: 'The magazine will have approximately $1{,}200$ print subscribers in $2021$.' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Interpret Initial Value in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $L(0) = 1{,}200 \\cdot (0.97)^0 = 1{,}200$. With $t$ in years after $2020$, $t = 0$ is $2020$, so $1{,}200$ is the $2020$ subscriber count.\n\n**The Full Solution:**\nStep 1: In an exponential model $a \\cdot b^t$, the coefficient $a$ is the value at $t = 0$ because $b^0 = 1$.\nStep 2: The problem states $t$ is years after $2020$, so $t = 0$ corresponds to $2020$.\nStep 3: So $1{,}200$ is the subscriber count in $2020$. The base $0.97$ separately gives a $3\\%$ annual decrease ($1 - 0.97 = 0.03$): at $t = 1$ (year $2021$), $L = 1{,}200 \\cdot 0.97 = 1{,}164$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: confuses the initial value with an annual loss; this decay is multiplicative, not a fixed yearly subtraction.\n* Choice C: misreads the coefficient $1{,}200$ as a percent rate. The decay rate is $3\\%$, from $0.97$.\n* Choice D: places the initial value at $t = 1$ ($2021$) instead of $t = 0$ ($2020$).\n\n**Test Day Takeaway:** In $a \\cdot b^t$, the coefficient $a$ is the initial value at $t = 0$. Always pin down what $t = 0$ means in context — \"$t$ years after $2020$\" makes $t = 0$ the year $2020$.",
    calculatorAllowed: true, tags: ['interpret-parameter'], sourceStyleRef: 'interpret-y-intercept', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-am-212', domain: 'advanced-math', skills: ['function-interpretation', 'linear-functions'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A pet shelter began the year with several dogs already in foster care and continued to take in new dogs at a steady rate. The function $f(w) = 4w + 28$ approximates the number of dogs in foster care after $w$ weeks into the year. Which statement is the best interpretation of the $y$-intercept of the graph of $y = f(w)$ in this context?',
    choices: [{ id: 'A', text: 'The shelter had approximately $28$ dogs in foster care at the start of the year.' }, { id: 'B', text: 'The shelter took in approximately $28$ new dogs each week.' }, { id: 'C', text: 'The shelter took in approximately $4$ new dogs each week, starting from zero.' }, { id: 'D', text: 'The shelter had approximately $4$ dogs in foster care at the start of the year.' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Interpret Initial Value in Context**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** The $y$-intercept of $f(w) = 4w + 28$ is $f(0) = 28$. At $w = 0$ (start of the year), there are $28$ dogs in foster care.\n\n**The Full Solution:**\nStep 1: $f(w) = 4w + 28$ is linear, so its $y$-intercept is $28$ — the value when $w = 0$.\nStep 2: Since $w$ counts weeks into the year, $w = 0$ is the start of the year.\nStep 3: So the shelter began with about $28$ dogs. Check the slope: $f(1) = 32 = 28 + 4$, confirming $28$ at the start and $4$ added per week. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: uses the $y$-intercept $28$ as a weekly rate; the weekly rate is the slope, $4$.\n* Choice C: ignores the $+28$ and treats the starting count as zero.\n* Choice D: uses the slope $4$ as the initial value.\n\n**Test Day Takeaway:** The $y$-intercept is the value at input $0$ — the starting point of the story. The slope is the rate of change per unit. Don't swap them.",
    calculatorAllowed: true, tags: ['interpret-parameter'], sourceStyleRef: 'interpret-y-intercept', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-am-213', domain: 'advanced-math', skills: ['function-interpretation', 'exponential-growth-decay'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A bowl of hot soup is left on a counter to cool. The temperature of the soup, in degrees Fahrenheit, after $t$ minutes is modeled by $T(t) = 70 + 110 \\cdot (0.85)^t$. Which statement is the best interpretation of the value $180$ that appears at $t = 0$ (i.e., the value of $T(0)$)?',
    choices: [{ id: 'A', text: 'The room temperature is approximately $180^\\circ \\text{F}$.' }, { id: 'B', text: 'The initial temperature of the soup is approximately $180^\\circ \\text{F}$.' }, { id: 'C', text: 'The soup cools by approximately $180^\\circ \\text{F}$ each minute.' }, { id: 'D', text: 'The soup will reach approximately $180^\\circ \\text{F}$ after a long time.' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Interpret Initial Value in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $T(0) = 70 + 110 \\cdot (0.85)^0 = 70 + 110 = 180$. At $t = 0$ the soup is at $180^\\circ$F — its initial temperature.\n\n**The Full Solution:**\nStep 1: The model $T(t) = 70 + 110 \\cdot (0.85)^t$ is a shifted exponential decay. The term $110 \\cdot (0.85)^t$ shrinks toward $0$, so $T$ approaches $70^\\circ$F (the room temperature, the asymptote).\nStep 2: At $t = 0$, the decaying term equals its maximum, $110$, so $T(0) = 70 + 110 = 180^\\circ$F.\nStep 3: As $t$ grows large, $T \\to 70$, not $180$ — so $180$ is the starting temperature, not the long-run value. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: confuses the initial value $T(0) = 180$ with the asymptote (room temperature, $70$). Both numbers appear in the formula but play different roles.\n* Choice C: confuses $T(0)$ with a per-minute rate; the cooling is multiplicative (factor $0.85$), not a drop of $180$ per minute.\n* Choice D: $180$ is where the soup starts, not where it ends; the end value is the asymptote, $70$.\n\n**Test Day Takeaway:** In a shifted exponential $T(t) = A + B \\cdot b^t$ with $0 < b < 1$, $A$ is the long-run asymptote and $A + B$ is the value at $t = 0$. The wording tells you which one the question wants.",
    calculatorAllowed: true, tags: ['interpret-parameter'], sourceStyleRef: 'interpret-y-intercept', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  // ── interpret-vertex-form (5 questions, batch 2026-05-13) ─────────────────
  // Pattern: given a quadratic in vertex form modeling a scenario, interpret
  // the vertex (h, k) as a real-world max/min and its time. Aligns to Bluebook
  // M2-Hard Q4 (toy rocket vertex interpretation).
  { id: 'bank-am-214', domain: 'advanced-math', skills: ['function-interpretation', 'quadratic-equations'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A physics class is studying the trajectory of a pumpkin launched from a rooftop. The equation $y = -16(t - 1.25)^2 + 45$ gives the estimated height $y$, in feet, of the pumpkin $t$ seconds after it is launched. Which of the following is the best interpretation of the vertex of the graph of the equation in the $ty$-plane?',
    choices: [{ id: 'A', text: 'The pumpkin reaches an estimated maximum height of $45$ feet $1.25$ seconds after launch.' }, { id: 'B', text: 'The pumpkin reaches an estimated maximum height of $1.25$ feet $45$ seconds after launch.' }, { id: 'C', text: 'The pumpkin reaches an estimated maximum height of $45$ feet $16$ seconds after launch.' }, { id: 'D', text: 'The pumpkin starts at a height of $45$ feet, $1.25$ seconds before it is launched.' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Interpret Vertex Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The vertex of $a(t - h)^2 + k$ is $(h, k) = (1.25, 45)$. Since $a = -16 < 0$ the vertex is a maximum: max height $45$ ft at $t = 1.25$ s.\n\n**The Full Solution:**\nStep 1: Vertex form $y = a(t - h)^2 + k$ has vertex $(h, k) = (1.25, 45)$.\nStep 2: The leading coefficient $a = -16 < 0$, so the parabola opens downward and the vertex is the maximum.\nStep 3: The $t$-coordinate $1.25$ is when the maximum occurs; the $y$-coordinate $45$ is the maximum height. Check symmetry: $y$ at $t = 0$ is $-16(1.5625) + 45 = 20$, and at $t = 2.5$ it is also $20$ — symmetric about $t = 1.25$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: swaps the $t$ and $y$ values of the vertex.\n* Choice C: uses the leading coefficient $-16$ as the time of the maximum.\n* Choice D: describes a moment $1.25$ seconds before launch, which has no meaning here (the model starts at $t = 0$).\n\n**Test Day Takeaway:** In vertex form $a(t - h)^2 + k$, the vertex is $(h, k)$: $h$ is the input (time) and $k$ is the output (height). If $a < 0$ the vertex is a maximum; if $a > 0$ it is a minimum.",
    calculatorAllowed: true, tags: ['interpret-parameter'], sourceStyleRef: 'interpret-vertex', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-am-215', domain: 'advanced-math', skills: ['function-interpretation', 'quadratic-equations'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A restaurant\'s daily profit, in dollars, from a special menu item is modeled by $P(x) = -5(x - 14)^2 + 980$, where $x$ is the price (in dollars) charged for the item. Which of the following is the best interpretation of the vertex of the graph of $y = P(x)$ in the $xy$-plane?',
    choices: [{ id: 'A', text: 'The restaurant\'s maximum daily profit is $\\$14$, achieved at a price of $\\$980$.' }, { id: 'B', text: 'The restaurant\'s maximum daily profit is $\\$980$, achieved at a price of $\\$14$.' }, { id: 'C', text: 'The restaurant\'s daily profit is $\\$980$ regardless of the price charged.' }, { id: 'D', text: 'The restaurant\'s daily profit is maximized at a price of $\\$5$ per item.' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Interpret Vertex Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The vertex of $P(x) = -5(x - 14)^2 + 980$ is $(14, 980)$. Since $a = -5 < 0$ it is a maximum: at price $x = \\$14$, the max daily profit is $\\$980$.\n\n**The Full Solution:**\nStep 1: Vertex form gives the vertex $(h, k) = (14, 980)$, where $h$ is the price and $k$ is the profit at that price.\nStep 2: The leading coefficient $a = -5 < 0$, so the parabola opens downward and the vertex is the maximum.\nStep 3: Check: $P(14) = 0 + 980 = 980$, while $P(13) = -5 + 980 = 975$ and $P(15) = -5 + 980 = 975$ — both below $980$, confirming the maximum. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: swaps the price ($x = 14$) and profit ($y = 980$) coordinates of the vertex.\n* Choice C: reads the vertex value as a constant function; profit actually varies with price.\n* Choice D: uses the leading coefficient $-5$ as the price.\n\n**Test Day Takeaway:** For profit or revenue models $a(x - h)^2 + k$ with $a < 0$, $h$ is the input that maximizes and $k$ is the maximum value. Let the units in the answer choices tell you which is being asked.",
    calculatorAllowed: true, tags: ['interpret-parameter'], sourceStyleRef: 'interpret-vertex', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-am-216', domain: 'advanced-math', skills: ['function-interpretation', 'quadratic-equations'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A scuba diver descends to a particular depth and then ascends back toward the surface. Their depth below sea level, in meters, is modeled by $d(t) = (t - 8)^2 - 36$, where $t$ is minutes after the dive begins. (Negative values of $d$ indicate the diver is below sea level.) Which of the following is the best interpretation of the vertex of the graph of $y = d(t)$ in the $ty$-plane?',
    choices: [{ id: 'A', text: 'The diver reaches a deepest point of $36$ meters below sea level $8$ minutes after the dive begins.' }, { id: 'B', text: 'The diver reaches a deepest point of $8$ meters below sea level $36$ minutes after the dive begins.' }, { id: 'C', text: 'The diver returns to sea level $8$ minutes after the dive begins.' }, { id: 'D', text: 'The diver descends $36$ meters per minute starting at $t = 8$.' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Interpret Vertex Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The vertex of $d(t) = (t - 8)^2 - 36$ is $(8, -36)$. Since $a = 1 > 0$ it is a minimum of $d$; the most-negative depth $-36$ means $36$ m below sea level, reached at $t = 8$ minutes.\n\n**The Full Solution:**\nStep 1: Vertex form gives the vertex $(h, k) = (8, -36)$.\nStep 2: The leading coefficient $a = 1 > 0$, so the parabola opens upward and the vertex is a minimum of $d$.\nStep 3: The problem states negative $d$ means below sea level, so the most-negative $d$ is the greatest depth. The minimum $d = -36$ at $t = 8$ means the diver is deepest — $36$ m below sea level — at $8$ minutes. Check symmetry: $d(0) = 64 - 36 = 28$ and $d(16) = 64 - 36 = 28$, symmetric about $t = 8$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: swaps the depth ($-36$) and the time ($8$).\n* Choice C: confuses the vertex time $8$ with the time the diver returns to the surface (where $d = 0$, not the vertex).\n* Choice D: treats $-36$ as a rate per minute, but $-36$ is a vertex coordinate, not a rate of change.\n\n**Test Day Takeaway:** Watch the sign of $a$: $a > 0$ gives a minimum, $a < 0$ a maximum. Then read the context's sign convention — \"deepest below sea level\" is the most-negative depth, which is the minimum when the positive direction is upward.",
    calculatorAllowed: true, tags: ['interpret-parameter'], sourceStyleRef: 'interpret-vertex', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-am-217', domain: 'advanced-math', skills: ['function-interpretation', 'quadratic-equations'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A drone is launched from a platform. The drone\'s altitude above the ground, in meters, is modeled by $a(t) = -3(t - 6)^2 + 110$, where $t$ is seconds after launch. Which of the following is the best interpretation of the vertex of the graph of $y = a(t)$ in the $ty$-plane?',
    choices: [{ id: 'A', text: 'The drone\'s maximum altitude is $110$ meters, reached $6$ seconds after launch.' }, { id: 'B', text: 'The drone\'s maximum altitude is $6$ meters, reached $110$ seconds after launch.' }, { id: 'C', text: 'The drone is launched from an altitude of $110$ meters.' }, { id: 'D', text: 'The drone reaches the ground after $6$ seconds.' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Interpret Vertex Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** In $a(t) = -3(t - 6)^2 + 110$ the vertex is $(6, 110)$. The leading coefficient $-3$ is negative, so the parabola opens down and the vertex is a maximum: the drone tops out at $110$ m, $6$ seconds after launch.\n\n**The Full Solution:**\nStep 1: Vertex form $a(t)=a(t-h)^2+k$ has vertex $(h,k)$. Here $h=6$ and $k=110$, so the vertex is $(6, 110)$.\nStep 2: Since $-3 < 0$, the parabola opens downward, so the vertex is the highest point. The maximum altitude is $110$ m, reached at $t=6$ s.\nStep 3: Check the endpoints. $a(6) = 0 + 110 = 110$ and $a(7) = -3 + 110 = 107 < 110$, confirming the peak. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: swaps the coordinates, calling $6$ the altitude and $110$ the time.\n* Choice C: reads $110$ as the launch height; the launch height is $a(0) = -3(36)+110 = 2$ m, not $110$.\n* Choice D: describes a $t$-intercept (when altitude is $0$), not the vertex.\n\n**Test Day Takeaway:** In vertex form $a(t-h)^2+k$, the vertex is $(h,k)$. A negative leading coefficient makes it a maximum; never confuse the vertex with the $y$-intercept or the $t$-intercepts.",
    calculatorAllowed: true, tags: ['interpret-parameter'], sourceStyleRef: 'interpret-vertex', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-am-218', domain: 'advanced-math', skills: ['function-interpretation', 'quadratic-equations'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A factory\'s daily production cost, in thousands of dollars, depends on the number of units produced. The cost is modeled by $C(u) = 0.2(u - 90)^2 + 4$, where $u$ is the number of units produced per day. Which of the following is the best interpretation of the vertex of the graph of $y = C(u)$ in the $uy$-plane?',
    choices: [{ id: 'A', text: 'The factory\'s lowest daily cost is approximately $\\$90{,}000$, achieved when producing $4$ units per day.' }, { id: 'B', text: 'The factory\'s lowest daily cost is approximately $\\$4{,}000$, achieved when producing $90$ units per day.' }, { id: 'C', text: 'The factory\'s highest daily cost is approximately $\\$4{,}000$, achieved when producing $90$ units per day.' }, { id: 'D', text: 'The factory cannot operate below a cost of $\\$0.2$.' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Interpret Vertex Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** In $C(u) = 0.2(u - 90)^2 + 4$ the vertex is $(90, 4)$. The coefficient $0.2 > 0$, so it is a minimum. Cost is in thousands, so the minimum cost is $\\$4{,}000$, at $u = 90$ units per day.\n\n**The Full Solution:**\nStep 1: Vertex form gives vertex $(h,k) = (90, 4)$.\nStep 2: Because $a = 0.2 > 0$, the parabola opens upward and the vertex is the minimum point.\nStep 3: $C$ is measured in thousands of dollars, so $C = 4$ means $\\$4{,}000$. The lowest daily cost is $\\$4{,}000$, achieved at $u = 90$ units per day.\nStep 4: Check: $C(80) = 0.2(100) + 4 = 24$ (thousand) $= \\$24{,}000 > \\$4{,}000$, confirming $90$ is the optimum. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: swaps the coordinates and the units, treating $90$ as a dollar amount.\n* Choice C: since $a > 0$ the vertex is a minimum, not a maximum.\n* Choice D: misreads the leading coefficient $0.2$ as a dollar amount.\n\n**Test Day Takeaway:** A positive leading coefficient means the vertex is a minimum (cost optimization). Always convert the dependent variable's units — here $C$ is in thousands — before reporting the dollar value.",
    calculatorAllowed: true, tags: ['interpret-parameter'], sourceStyleRef: 'interpret-vertex', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  // ─── REVERSE EXPONENTIAL BACK IN TIME (bank-am-219..226) ──────────────────
  // Given current value + growth/decay rate, find a PAST value (divide by b^n,
  // not multiply). Distinct from forward `build-exponential-model`. See
  // audit §B4. CB precedent: PT11-M1-Q14, PT11-M2-Q11.
  { id: 'bank-am-219', domain: 'advanced-math', skills: ['exponential-functions', 'exponential-growth-decay'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A bacteria culture doubles in size every $3$ hours. The current count is $640$ bacteria. What was the count $3$ hours ago?',
    choices: [{ id: 'A', text: '$160$' }, { id: 'B', text: '$320$' }, { id: 'C', text: '$637$' }, { id: 'D', text: '$1{,}280$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Reverse Exponential Back in Time**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Doubling forward every $3$ hours means halving when you go $3$ hours backward: $640 \\div 2 = 320$.\n\n**The Full Solution:**\nStep 1: Model the count as $P(t) = 640 \\cdot 2^{\\frac{t}{3}}$, with $t=0$ being now.\nStep 2: Three hours ago is $t = -3$: $P(-3) = 640 \\cdot 2^{-1} = 640 \\cdot \\dfrac{1}{2} = 320$.\nStep 3: Check forward: $320 \\cdot 2 = 640$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($160$): halves twice ($640 \\div 4$), using $6$ hours back instead of $3$.\n* Choice C ($637$): subtracts $3$ from $640$, confusing the time with the count.\n* Choice D ($1{,}280$): doubles forward instead of halving backward.\n\n**Test Day Takeaway:** Moving backward in exponential time divides by the base; moving forward multiplies. The direction sets whether you multiply or divide.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'reverse-exponential-back-in-time', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-220', domain: 'advanced-math', skills: ['exponential-functions', 'exponential-growth-decay'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A population grows by $20\\%$ each year. The current population is $720$. What was the population one year ago?',
    choices: [{ id: 'A', text: '$576$' }, { id: 'B', text: '$600$' }, { id: 'C', text: '$700$' }, { id: 'D', text: '$864$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Reverse Exponential Back in Time**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Growing $20\\%$ means now $= 1.20 \\times$ (one year ago). Reverse it by dividing: $720 \\div 1.20 = 600$.\n\n**The Full Solution:**\nStep 1: The growth rule is $P_{\\text{now}} = 1.20 \\cdot P_{\\text{prev}}$.\nStep 2: Solve for last year: $P_{\\text{prev}} = \\dfrac{720}{1.20} = 600$.\nStep 3: Check: $600 \\cdot 1.20 = 720$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($576$): subtracts $20\\%$ from $720$ ($720 \\cdot 0.80$). Dividing by $1.20$ is the correct inverse, not multiplying by $0.80$.\n* Choice C ($700$): subtracts the literal number $20$ from $720$.\n* Choice D ($864$): adds $20\\%$ to $720$, moving forward in time instead of back.\n\n**Test Day Takeaway:** To reverse an $X\\%$ increase, divide by $1 + \\dfrac{X}{100}$ — do not subtract $X\\%$. Multiplying by $0.80$ is not the inverse of multiplying by $1.20$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'reverse-exponential-back-in-time', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-221', domain: 'advanced-math', skills: ['exponential-functions', 'exponential-growth-decay'], difficulty: 'medium', type: 'multiple-choice',
    question: 'An investment grows at a constant rate of $5\\%$ per year, compounded annually. After $3$ years, the investment is worth $\\$11{,}576.25$. What was the initial value of the investment?',
    choices: [{ id: 'A', text: '$\\$8{,}000$' }, { id: 'B', text: '$\\$10{,}000$' }, { id: 'C', text: '$\\$10{,}500$' }, { id: 'D', text: '$\\$13{,}400$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Reverse Exponential Back in Time**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Three years of $5\\%$ compound growth gives $V_{\\text{now}} = V_0 \\cdot 1.05^3$. Reverse it: $V_0 = \\dfrac{11{,}576.25}{1.05^3} = \\dfrac{11{,}576.25}{1.157625} = 10{,}000$, so $\\$10{,}000$.\n\n**The Full Solution:**\nStep 1: Compound growth over $3$ years: $V_3 = V_0 \\cdot 1.05^3$.\nStep 2: Compute $1.05^3 = 1.157625$.\nStep 3: Solve: $V_0 = \\dfrac{11{,}576.25}{1.157625} = 10{,}000$.\nStep 4: Check: $10{,}000 \\cdot 1.157625 = 11{,}576.25$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$8{,}000$): divides by $1.05 \\cdot 3 = 3.15$, treating compound growth as linear.\n* Choice C ($\\$10{,}500$): reverses only one year, stopping short of three years back.\n* Choice D ($\\$13{,}400$): multiplies by $1.05^3$ instead of dividing, moving forward in time.\n\n**Test Day Takeaway:** To reverse $n$ years of compound growth, divide by $(1+r)^n$, not by $1 + nr$. Compound and simple growth diverge more with each year.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'reverse-exponential-back-in-time', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-222', domain: 'advanced-math', skills: ['exponential-functions', 'exponential-growth-decay'], difficulty: 'medium', type: 'fill-in',
    question: 'A radioactive sample decays so that its mass halves every $24$ years. The sample currently has a mass of $5$ grams. What was the mass, in grams, of the sample $48$ years ago?',
    correctAnswer: '20',
    explanation: "**SAT Pattern: Reverse Exponential Back in Time**\n\n**The correct answer is $20$.**\n\n**The Fast Way (~10s):** $48$ years is $2$ half-lives. Going backward, each half-life multiplies the mass by $2$, so the past mass is $5 \\cdot 2^2 = 20$ g.\n\n**The Full Solution:**\nStep 1: Model the mass as $M(t) = 5 \\cdot \\left(\\dfrac{1}{2}\\right)^{\\frac{t}{24}}$, with $t=0$ now.\nStep 2: $48$ years ago is $t = -48$: $M(-48) = 5 \\cdot \\left(\\dfrac{1}{2}\\right)^{-\\frac{48}{24}} = 5 \\cdot \\left(\\dfrac{1}{2}\\right)^{-2} = 5 \\cdot 4 = 20$ g.\nStep 3: Check forward: $20 \\to 10 \\to 5$ over two $24$-year half-lives. $\\checkmark$\n\n**Common Mistakes:** Reporting $10$ (only one half-life back); reporting $1.25$ ($5 \\div 4$, going forward instead of backward); reporting $48$ (confusing the time with the mass).\n\n**Test Day Takeaway:** Count how many half-lives fit the time window, then multiply by $2^n$ to go backward (or divide by $2^n$ to go forward).",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'reverse-exponential-back-in-time', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-223', domain: 'advanced-math', skills: ['exponential-functions', 'exponential-growth-decay'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A car loses $15\\%$ of its value each year due to depreciation. The car is currently worth $\\$8{,}500$. What was the car worth one year ago?',
    choices: [{ id: 'A', text: '$\\$7{,}225$' }, { id: 'B', text: '$\\$9{,}775$' }, { id: 'C', text: '$\\$10{,}000$' }, { id: 'D', text: '$\\$11{,}333$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Reverse Exponential Back in Time**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Losing $15\\%$ means $85\\%$ survives, so $V_{\\text{now}} = 0.85 \\cdot V_{\\text{prev}}$. Reverse it: $V_{\\text{prev}} = \\dfrac{8{,}500}{0.85} = 10{,}000$, so $\\$10{,}000$.\n\n**The Full Solution:**\nStep 1: Depreciation rule: $V_{\\text{now}} = (1 - 0.15) \\cdot V_{\\text{prev}} = 0.85 \\cdot V_{\\text{prev}}$.\nStep 2: Solve for last year by dividing by the surviving multiplier: $V_{\\text{prev}} = \\dfrac{8{,}500}{0.85} = 10{,}000$.\nStep 3: Check: $10{,}000 \\cdot 0.85 = 8{,}500$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$7{,}225$): multiplies by $0.85$ again ($8{,}500 \\cdot 0.85$), moving forward in time.\n* Choice B ($\\$9{,}775$): multiplies by $1.15$; the inverse of \"lose $15\\%$\" is divide by $0.85$, not multiply by $1.15$.\n* Choice D ($\\$11{,}333$): divides by $0.75$, using $25\\%$ instead of $15\\%$.\n\n**Test Day Takeaway:** The inverse of multiplying by $0.85$ is dividing by $0.85$ (about $\\times 1.176$), not multiplying by $1.15$.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'reverse-exponential-back-in-time', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-224', domain: 'advanced-math', skills: ['exponential-functions', 'exponential-growth-decay'], difficulty: 'medium', type: 'multiple-choice',
    question: "A small town's population is modeled by $P(t) = 200 \\cdot (1.10)^t$, where $t$ is the number of years from now (with $t = 0$ corresponding to today). Which of the following is closest to the population of the town two years ago?",
    choices: [{ id: 'A', text: '$160$' }, { id: 'B', text: '$165$' }, { id: 'C', text: '$180$' }, { id: 'D', text: '$242$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Reverse Exponential Back in Time**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Evaluate the model at $t = -2$: $P(-2) = 200 \\cdot (1.10)^{-2} = \\dfrac{200}{1.21} \\approx 165.29$, closest to $165$.\n\n**The Full Solution:**\nStep 1: Two years ago is $t = -2$, so $P(-2) = 200 \\cdot (1.10)^{-2} = \\dfrac{200}{1.10^2}$.\nStep 2: $1.10^2 = 1.21$, so $P(-2) = \\dfrac{200}{1.21} \\approx 165.29$, which rounds to $165$.\nStep 3: Check forward: $165.29 \\cdot 1.21 \\approx 200$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($160$): treats two years of $10\\%$ growth as a flat $20\\%$ and reverses it incorrectly.\n* Choice C ($180$): reverses only one year ($200 \\div 1.10 \\approx 182$) instead of two.\n* Choice D ($242$): goes forward two years ($200 \\cdot 1.21$) instead of backward.\n\n**Test Day Takeaway:** A negative exponent in a growth model means a past value: $b^{-n} = \\dfrac{1}{b^n}$. The sign of $t$ sets the direction; the base $b$ sets the rate.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'reverse-exponential-back-in-time', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-225', domain: 'advanced-math', skills: ['exponential-functions', 'exponential-growth-decay'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The number of users on a platform grew at a constant rate of $25\\%$ per year for the past four years. There are currently $3{,}125$ users. How many users were there four years ago?',
    choices: [{ id: 'A', text: '$625$' }, { id: 'B', text: '$1{,}024$' }, { id: 'C', text: '$1{,}280$' }, { id: 'D', text: '$2{,}500$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Reverse Exponential Back in Time**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Four years of $25\\%$ growth gives $U_{\\text{now}} = U_{-4} \\cdot 1.25^4$. Reverse it: $U_{-4} = \\dfrac{3{,}125}{1.25^4} = \\dfrac{3{,}125}{2.44140625} = 1{,}280$.\n\n**The Full Solution:**\nStep 1: Total multiplier over four years is $1.25^4$.\nStep 2: Compute $1.25^2 = 1.5625$, so $1.25^4 = 1.5625^2 = 2.44140625$.\nStep 3: Solve: $U_{-4} = \\dfrac{3{,}125}{2.44140625} = 1{,}280$.\nStep 4: Check: $1{,}280 \\cdot 2.44140625 = 3{,}125$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($625$): divides by $5$, treating four years of growth as a single factor.\n* Choice B ($1{,}024$): divides by a wrong compound base, roughly $1.25^4 \\approx 3$.\n* Choice D ($2{,}500$): reverses only one year ($3{,}125 \\div 1.25$) instead of four.\n\n**Test Day Takeaway:** For multi-year reversal, raise the multiplier to the full power, then divide: $1.25^4 \\neq 1.25 \\cdot 4$ and $\\neq 1 + 4 \\cdot 0.25$.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'reverse-exponential-back-in-time', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-226', domain: 'advanced-math', skills: ['exponential-functions', 'exponential-growth-decay'], difficulty: 'hard', type: 'fill-in',
    question: 'A medication concentration in the bloodstream decays exponentially with a half-life of $8$ hours. The current concentration is $4$ mg/L. How many hours ago was the concentration $32$ mg/L?',
    correctAnswer: '24',
    explanation: "**SAT Pattern: Reverse Exponential Back in Time**\n\n**The correct answer is $24$.**\n\n**The Fast Way (~15s):** $\\dfrac{32}{4} = 8 = 2^3$, so the concentration was $3$ half-lives higher. At $8$ hours each, that is $3 \\cdot 8 = 24$ hours ago.\n\n**The Full Solution:**\nStep 1: Going backward, the concentration doubles each half-life. Set $32 = 4 \\cdot 2^n$.\nStep 2: $\\dfrac{32}{4} = 2^n \\Rightarrow 8 = 2^n \\Rightarrow n = 3$ half-lives.\nStep 3: Each half-life is $8$ hours, so the time is $3 \\cdot 8 = 24$ hours ago.\nStep 4: Check forward: $32 \\to 16 \\to 8 \\to 4$ across $3$ half-lives = $24$ hours. $\\checkmark$\n\n**Common Mistakes:** Reporting $8$ (only one half-life back, $32 \\to 16$); reporting $3$ (the number of half-lives, not converted to hours); reporting $16$ from a miscount.\n\n**Test Day Takeaway:** Factor the ratio $\\dfrac{C_{\\text{past}}}{C_{\\text{now}}}$ into a power of $2$; the exponent is the number of half-lives, then multiply by the half-life duration.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'reverse-exponential-back-in-time', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── FUNCTION FROM SHIFTED GRAPH (bank-am-227..234) ───────────────────────
  // Reverse direction of `function-transformation`: given a description of
  // y = f(x + h) or y = f(x) + k, recover f. CB precedent: PT11-M1-Q23.
  // See audit §B5.
  { id: 'bank-am-227', domain: 'advanced-math', skills: ['function-transformations', 'function-interpretation'], difficulty: 'easy', type: 'multiple-choice',
    question: 'In the $xy$-plane, the graph of $y = f(x + 4)$ passes through the point $(0, 5)$. Which of the following could be the function $f$?',
    choices: [
      { id: 'A', text: '$f(x) = x + 5$' },
      { id: 'B', text: '$f(x) = x + 1$' },
      { id: 'C', text: '$f(x) = x - 5$' },
      { id: 'D', text: '$f(x) = 4x + 5$' },
    ],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Function from Shifted Graph**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Since $y = f(x + 4)$ passes through $(0, 5)$, plug in $x = 0$: $f(0 + 4) = f(4) = 5$. Test each choice for $f(4) = 5$; only $f(x) = x + 1$ gives $f(4) = 5$.\n\n**The Full Solution:**\nStep 1: The point $(0, 5)$ on $y = f(x+4)$ means $f(0+4) = f(4) = 5$.\nStep 2: Evaluate each candidate at $x = 4$:\n* A: $f(4) = 4 + 5 = 9 \\neq 5$.\n* B: $f(4) = 4 + 1 = 5$. $\\checkmark$\n* C: $f(4) = 4 - 5 = -1 \\neq 5$.\n* D: $f(4) = 4 \\cdot 4 + 5 = 21 \\neq 5$.\n\n**Why the wrong answers are tempting:**\n* Choice A: uses the $+5$ from the point $(0,5)$ as the constant, confusing the point with the rule.\n* Choice C: subtracts instead of adds the shift.\n* Choice D: introduces a slope of $4$ that does not match.\n\n**Test Day Takeaway:** If $y = f(x + h)$ passes through $(a, b)$, then $f(a + h) = b$. Test candidates at the shifted $x$-value, not the original.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-from-shifted-graph', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-228', domain: 'advanced-math', skills: ['function-transformations', 'function-interpretation'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The graph of $y = g(x) + 3$ in the $xy$-plane has its lowest point at $(0, 3)$. Which of the following could be the function $g$?',
    choices: [
      { id: 'A', text: '$g(x) = x^2$' },
      { id: 'B', text: '$g(x) = x^2 + 3$' },
      { id: 'C', text: '$g(x) = (x - 2)^2$' },
      { id: 'D', text: '$g(x) = -x^2$' },
    ],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Function from Shifted Graph**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The lowest point of $y = g(x) + 3$ is $(0, 3)$, so undoing the $+3$ shift gives $g$ a lowest point at $(0, 0)$. A parabola with minimum value $0$ at $x = 0$ is $g(x) = x^2$.\n\n**The Full Solution:**\nStep 1: $y = g(x) + 3$ shifts $g$ up by $3$. Its lowest point at $(0, 3)$ means $g$ has its lowest point at $(0, 0)$.\nStep 2: So $g$ must have a minimum value of $0$ occurring at $x = 0$.\nStep 3: $g(x) = x^2$ has its minimum at $(0, 0)$, matching exactly.\n\n**Why the wrong answers are tempting:**\n* Choice B: $g(x) = x^2 + 3$ has minimum $(0, 3)$, so $g + 3$ would bottom out at $(0, 6)$.\n* Choice C: $g(x) = (x - 2)^2$ has its minimum at $x = 2$, not $x = 0$.\n* Choice D: $g(x) = -x^2$ opens downward, giving a maximum at $(0, 0)$, not a minimum.\n\n**Test Day Takeaway:** A vertical shift moves every point up or down. To undo a $+k$ shift, subtract $k$ from each point's $y$-coordinate.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-from-shifted-graph', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-229', domain: 'advanced-math', skills: ['function-transformations', 'function-interpretation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'In the $xy$-plane, the graph of $y = h(x - 5)$ passes through the point $(0, 12)$. What is the value of $h(-5)$?',
    choices: [{ id: 'A', text: '$-12$' }, { id: 'B', text: '$-5$' }, { id: 'C', text: '$0$' }, { id: 'D', text: '$12$' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Function from Shifted Graph**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Plug $x = 0$ into $y = h(x - 5)$: the right side becomes $h(0 - 5) = h(-5)$, and the point tells you $y = 12$, so $h(-5) = 12$.\n\n**The Full Solution:**\nStep 1: \"The graph of $y = h(x - 5)$ passes through $(0, 12)$\" means substituting $x = 0$ produces $y = 12$.\nStep 2: $12 = h(0 - 5) = h(-5)$, so $h(-5) = 12$. No algebra needed — read it straight off the definition.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-12$): negates the $y$-value for no reason.\n* Choice B ($-5$): reports the input to $h$ instead of the output.\n* Choice C ($0$): reports the original $x$-coordinate, not $h(-5)$.\n\n**Test Day Takeaway:** When $y = f(x \\pm h)$ passes through $(a, b)$, substitute $a$ for $x$: $b = f(a \\pm h)$. The argument of $f$ is the shifted value, and the $y$-coordinate is the output.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-from-shifted-graph', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-230', domain: 'advanced-math', skills: ['function-transformations', 'function-interpretation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The function $g$ is defined by $g(x) = f(x - 2) + 7$. If the graph of $y = g(x)$ has its vertex at $(5, 11)$, then the graph of $y = f(x)$ has its vertex at which point?',
    choices: [{ id: 'A', text: '$(3, 4)$' }, { id: 'B', text: '$(3, 18)$' }, { id: 'C', text: '$(7, 4)$' }, { id: 'D', text: '$(7, 18)$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Function from Shifted Graph**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $g(x) = f(x - 2) + 7$ moves $f$ RIGHT $2$ and UP $7$. To get $f$'s vertex back from $g$'s, undo both: left $2$, down $7$. $(5, 11) \\to (5 - 2,\\ 11 - 7) = (3, 4)$.\n\n**The Full Solution:**\nStep 1: $g(x) = f(x - 2) + 7$ sends each point $(a, b)$ on $y = f(x)$ to $(a + 2,\\ b + 7)$ on $y = g(x)$. So $f$'s vertex maps to $g$'s vertex with $+2$ on $x$ and $+7$ on $y$.\nStep 2: Reverse it: $g$'s vertex $(5, 11)$ came from $f$'s vertex $(5 - 2,\\ 11 - 7) = (3, 4)$.\nStep 3: Check: if $f$'s vertex is $(3, 4)$, then $g(5) = f(5 - 2) + 7 = f(3) + 7 = 4 + 7 = 11$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($3, 18$): undoes the $x$-shift but ADDS the $y$-shift instead of subtracting.\n* Choice C ($7, 4$): adds the $x$-shift (wrong direction) but handles $y$ correctly.\n* Choice D ($7, 18$): wrong direction on both shifts.\n\n**Test Day Takeaway:** $f(x - h) + k$ shifts $f$ RIGHT $h$ and UP $k$. To recover $f$ from $g$, subtract $h$ from the $x$-coordinate and $k$ from the $y$-coordinate.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-from-shifted-graph', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-231', domain: 'advanced-math', skills: ['function-transformations', 'function-interpretation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The graph of $y = f(x)$ in the $xy$-plane is a V-shape with vertex at the origin. The graph of $y = f(x + 6)$ has its vertex at which point?',
    choices: [{ id: 'A', text: '$(-6, 0)$' }, { id: 'B', text: '$(0, -6)$' }, { id: 'C', text: '$(0, 6)$' }, { id: 'D', text: '$(6, 0)$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Function from Shifted Graph**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $y = f(x + 6)$ shifts $f$ LEFT $6$. The vertex slides from $(0, 0)$ to $(-6, 0)$.\n\n**The Full Solution:**\nStep 1: Replacing $x$ with $x + 6$ inside the function shifts the graph $6$ units LEFT — the opposite of the sign you see inside.\nStep 2: The vertex of $y = f(x)$ at $(0, 0)$ moves to $(-6, 0)$.\nStep 3: Check: at $x = -6$, $f(x + 6) = f(0) = 0$, the same height as $f$'s vertex. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($0, -6$): treats $+6$ as a vertical shift DOWN — confuses inside with outside.\n* Choice C ($0, 6$): treats $+6$ as a vertical shift UP.\n* Choice D ($6, 0$): shifts horizontally the wrong way; $f(x + 6)$ moves LEFT, not right.\n\n**Test Day Takeaway:** Inside the function, $f(x + h)$ shifts LEFT (counter-intuitive sign). Outside, $f(x) + k$ shifts UP. Inside acts on $x$ and flips; outside acts on $y$ and stays intuitive.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-from-shifted-graph', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-232', domain: 'advanced-math', skills: ['function-transformations', 'function-interpretation'], difficulty: 'medium', type: 'fill-in',
    question: 'The function $g$ is defined by $g(x) = f(x) - 4$. The graph of $y = g(x)$ in the $xy$-plane passes through the point $(2, 10)$. What is the value of $f(2)$?',
    correctAnswer: '14',
    explanation: "**SAT Pattern: Function from Shifted Graph**\n\n**The correct answer is $14$.**\n\n**The Fast Way (~5s):** $g(2) = f(2) - 4 = 10$, so $f(2) = 14$.\n\n**The Full Solution:**\nStep 1: $g(x) = f(x) - 4$ shifts $f$ down $4$, so $g(2) = f(2) - 4$.\nStep 2: With $g(2) = 10$, solve $f(2) - 4 = 10$, giving $f(2) = 14$.\nStep 3: Check: $g(2) = 14 - 4 = 10$. $\\checkmark$\n\n**Common Mistakes:** Reporting $6$ by subtracting again ($10 - 4$) instead of reversing the shift; reporting $-4$ (the shift amount, not $f(2)$); reporting $10$ by confusing $g(2)$ with $f(2)$.\n\n**Test Day Takeaway:** Reversing a vertical shift flips the sign: if $g = f - k$, then $f = g + k$. Add back what the shift subtracted.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-from-shifted-graph', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-233', domain: 'advanced-math', skills: ['function-transformations', 'function-interpretation'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The graph of $y = f(x)$ in the $xy$-plane is a V-shape with vertex at $(3, 0)$ and the two sides have slopes $+1$ and $-1$. Which of the following defines $f$?',
    choices: [
      { id: 'A', text: '$f(x) = |x - 3|$' },
      { id: 'B', text: '$f(x) = |x + 3|$' },
      { id: 'C', text: '$f(x) = |x| - 3$' },
      { id: 'D', text: '$f(x) = |x - 3| + 3$' },
    ],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Function from Shifted Graph**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** A V with vertex $(h, k)$ and slopes $\\pm 1$ is $f(x) = |x - h| + k$. Here $(h, k) = (3, 0)$, so $f(x) = |x - 3|$.\n\n**The Full Solution:**\nStep 1: The standard absolute-value V is $f(x) = |x - h| + k$ with vertex at $(h, k)$ and side slopes $\\pm 1$.\nStep 2: Vertex $(3, 0)$ gives $h = 3$ and $k = 0$, so $f(x) = |x - 3|$.\nStep 3: Check: $f(3) = 0$ (vertex on the $x$-axis), and $f(0) = 3$, $f(6) = 3$ — symmetric about $x = 3$ with slopes $\\pm 1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: $|x + 3|$ puts the vertex at $x = -3$ — wrong shift direction.\n* Choice C: $|x| - 3$ has vertex $(0, -3)$ — shifts the wrong axis.\n* Choice D: the extra $+3$ raises the vertex to $(3, 3)$.\n\n**Test Day Takeaway:** Inside the absolute value, $|x - h|$ moves the vertex to $x = h$ (subtraction). Outside, $+k$ raises it to $y = k$ (addition, intuitive direction).",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-from-shifted-graph', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-234', domain: 'advanced-math', skills: ['function-transformations', 'function-interpretation'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The graph of $y = g(x)$ is the graph of $y = f(x)$ shifted LEFT $4$ units and DOWN $2$ units. If $g$ is given by $g(x) = (x + 4)^2 - 2$, which of the following defines $f$?',
    choices: [
      { id: 'A', text: '$f(x) = x^2$' },
      { id: 'B', text: '$f(x) = x^2 - 2$' },
      { id: 'C', text: '$f(x) = (x - 4)^2 + 2$' },
      { id: 'D', text: '$f(x) = (x + 4)^2 + 2$' },
    ],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Function from Shifted Graph**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Reverse the shifts on $g$ — RIGHT $4$ (replace $x$ with $x - 4$) and UP $2$ (add $2$): $f(x) = (x - 4 + 4)^2 - 2 + 2 = x^2$.\n\n**The Full Solution:**\nStep 1: \"$g$ is $f$ shifted left $4$ and down $2$\" means $g(x) = f(x + 4) - 2$.\nStep 2: Match to the given $g$: $(x + 4)^2 - 2 = f(x + 4) - 2$, so $f(x + 4) = (x + 4)^2$.\nStep 3: Let $u = x + 4$; then $f(u) = u^2$, i.e. $f(x) = x^2$.\nStep 4: Check: shifting $f(x) = x^2$ left $4$ and down $2$ gives $(x + 4)^2 - 2 = g(x)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: keeps the $-2$ — fails to reverse the vertical shift.\n* Choice C: $(x - 4)^2 + 2$ mishandles the horizontal undo and over-corrects.\n* Choice D: reverses only one of the two transformations.\n\n**Test Day Takeaway:** To recover $f$ from $g$ when $g$ is $f$ shifted left $h$ and down $k$, shift $g$ RIGHT $h$ and UP $k$. Reversing a transformation negates every component.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-from-shifted-graph', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── TANGENT LINE WITH PARAMETER — FIND X (bank-am-235..238) ──────────────
  // CB PT4-M1-Q24 variant: asks for the x-COORDINATE at the tangent point
  // (not the parameter). Same SAT Pattern as `tangent-line-and-discriminant`,
  // adding 4 items to ensure both directions of the question are covered.
  // See audit §B7.
  { id: 'bank-am-235', domain: 'advanced-math', skills: ['tangent-lines', 'discriminant-analysis'], difficulty: 'medium', type: 'fill-in',
    question: 'In the $xy$-plane, the line $y = 3x + a$ is tangent to the parabola $y = 2x^2 - 21x + 64$ at the point $(x_0, y_0)$, where $a$ is a constant. What is the value of $x_0$?',
    correctAnswer: '6',
    explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~25s):** Set the expressions equal and collect: $2x^2 - 24x + (64 - a) = 0$. Tangency forces a double root, which sits at $x_0 = -\\frac{B}{2A} = \\frac{24}{4} = 6$.\n\n**The Full Solution:**\nStep 1: $2x^2 - 21x + 64 = 3x + a$ rearranges to $2x^2 - 24x + (64 - a) = 0$.\nStep 2: A tangent line meets the parabola at exactly one point, so this quadratic has a double root at the axis of symmetry: $x_0 = -\\frac{B}{2A} = \\frac{-(-24)}{2 \\cdot 2} = 6$.\nStep 3: The constant $a$ only shifts the line up or down, so it changes the value of $a$ needed, not $x_0$. (Solving: $\\Delta = 24^2 - 8(64 - a) = 0 \\Rightarrow a = -8$.) Check: $y = 3(6) - 8 = 10$ and $2(36) - 21(6) + 64 = 10$. $\\checkmark$\n\n**Common Mistakes:** Reporting $-8$ (finds $a$, not $x_0$); reporting $12$ (uses $-\\frac{B}{A}$ instead of $-\\frac{B}{2A}$); reporting $21$ (grabs a coefficient from the parabola's middle term).\n\n**Test Day Takeaway:** When the parameter lives in the line's CONSTANT term, the tangent $x$-coordinate is independent of it: just compute $x_0 = -\\frac{B}{2A}$ of the rearranged quadratic.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'tangent-line-and-discriminant', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-236', domain: 'advanced-math', skills: ['tangent-lines', 'discriminant-analysis'], difficulty: 'medium', type: 'multiple-choice',
    question: 'In the $xy$-plane, the line $y = 4x + c$ is tangent to the parabola $y = x^2 - 8x + 11$ at the point $(x_0, y_0)$, where $c$ is a constant. What is the value of $x_0$?',
    choices: [{ id: 'A', text: '$-6$' }, { id: 'B', text: '$4$' }, { id: 'C', text: '$6$' }, { id: 'D', text: '$8$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Set equal and collect: $x^2 - 12x + (11 - c) = 0$. The double root is at $x_0 = -\\frac{B}{2A} = \\frac{12}{2} = 6$.\n\n**The Full Solution:**\nStep 1: $x^2 - 8x + 11 = 4x + c$ rearranges to $x^2 - 12x + (11 - c) = 0$.\nStep 2: Tangency means one double root, located at $x_0 = -\\frac{-12}{2 \\cdot 1} = 6$.\nStep 3: Check via the discriminant: $144 - 4(11 - c) = 0 \\Rightarrow c = -25$. Then $y = 4(6) - 25 = -1$ and $36 - 48 + 11 = -1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): sign flip in $-\\frac{B}{2A}$.\n* Choice B ($4$): uses the line's slope as $x_0$.\n* Choice D ($8$): uses $-B$ alone, forgetting to divide by $2A$.\n\n**Test Day Takeaway:** A constant parameter $c$ slides the line vertically and never moves WHERE tangency occurs — only WHETHER it occurs. Read $x_0$ straight off $-\\frac{B}{2A}$ of the rearranged quadratic.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'tangent-line-and-discriminant', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-237', domain: 'advanced-math', skills: ['tangent-lines', 'discriminant-analysis'], difficulty: 'hard', type: 'multiple-choice',
    question: 'In the $xy$-plane, the line $y = mx + 1$ is tangent to the parabola $y = x^2 + 2x + 5$, where $m$ is a positive constant. What is the $x$-coordinate of the point of tangency?',
    choices: [{ id: 'A', text: '$-2$' }, { id: 'B', text: '$2$' }, { id: 'C', text: '$3$' }, { id: 'D', text: '$6$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Set equal: $x^2 + (2 - m)x + 4 = 0$. Tangency needs $(2 - m)^2 = 16$, so $m = 6$ (the positive root). The double root is $x_0 = -\\frac{2 - m}{2} = \\frac{6 - 2}{2} = 2$.\n\n**The Full Solution:**\nStep 1: $x^2 + 2x + 5 = mx + 1$ rearranges to $x^2 + (2 - m)x + 4 = 0$.\nStep 2: Tangency means the discriminant is zero: $(2 - m)^2 - 4(1)(4) = 0$, so $(2 - m)^2 = 16$ and $2 - m = \\pm 4$, giving $m = -2$ or $m = 6$.\nStep 3: With $m > 0$, take $m = 6$. The double root is $x_0 = -\\frac{2 - 6}{2} = \\frac{4}{2} = 2$.\nStep 4: Check: at $m = 6$, $x^2 + 2x + 5 = 6x + 1 \\Rightarrow x^2 - 4x + 4 = (x - 2)^2 = 0$, so $x = 2$, and $y = 6(2) + 1 = 13 = 4 + 4 + 5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$): sign flip in $-\\frac{B}{2A}$.\n* Choice C ($3$): computes $\\frac{m}{2} = \\frac{6}{2}$ instead of $x_0$.\n* Choice D ($6$): reports $m$ (the slope) instead of $x_0$.\n\n**Test Day Takeaway:** When the SLOPE is the parameter, the discriminant gives two candidate lines (one per sign), and the stated constraint ($m > 0$) picks one. Solve for $m$ first, then read off the double root.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'tangent-line-and-discriminant', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-238', domain: 'advanced-math', skills: ['tangent-lines', 'discriminant-analysis'], difficulty: 'hard', type: 'fill-in',
    question: 'In the $xy$-plane, the line $y = 7x + a$ is tangent to the parabola $y = x^2 + 5x + 11$, where $a$ is a constant. What is the $x$-coordinate of the point of tangency?',
    correctAnswer: '1',
    explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**The correct answer is $1$.**\n\n**The Fast Way (~25s):** Set equal and collect: $x^2 - 2x + (11 - a) = 0$. The double root sits at $x_0 = -\\frac{-2}{2} = 1$.\n\n**The Full Solution:**\nStep 1: $x^2 + 5x + 11 = 7x + a$ rearranges to $x^2 - 2x + (11 - a) = 0$.\nStep 2: Tangency means a double root at $x_0 = -\\frac{-2}{2 \\cdot 1} = 1$.\nStep 3: Confirm with the discriminant: $\\Delta = 4 - 4(11 - a) = 0 \\Rightarrow 11 - a = 1 \\Rightarrow a = 10$. Then $x^2 - 2x + 1 = (x - 1)^2 = 0$, so $x = 1$, and $y = 7(1) + 10 = 17 = 1 + 5 + 11$. $\\checkmark$\n\n**Common Mistakes:** Reporting $10$ (solves for $a$, not $x_0$); reporting $2$ (uses $-B$ without dividing by $2A$); reporting $-1$ (sign flip on $-\\frac{B}{2A}$).\n\n**Test Day Takeaway:** A parameter $a$ in the line's CONSTANT term sets vertical position, not horizontal. The tangent $x$-coordinate comes only from the leading and middle coefficients after rearranging.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'tangent-line-and-discriminant', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── VERTICAL SHIFT (bank-am-239..246) ───────────────────────────────────
  // y = f(x) + k shifts vertically. Distinct from horizontal shift,
  // reflection, and vertical stretch in METHOD (you add/subtract k from y).
  { id: 'bank-am-239', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The function $g$ is defined by $g(x) = f(x) + 3$. If $f(2) = 5$, what is the value of $g(2)$?',
    choices: [{ id: 'A', text: '$2$' }, { id: 'B', text: '$5$' }, { id: 'C', text: '$8$' }, { id: 'D', text: '$15$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Vertical Shift**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** $g(2) = f(2) + 3 = 5 + 3 = 8$.\n\n**The Full Solution:**\nStep 1: $g(x) = f(x) + 3$ adds $3$ to every output of $f$.\nStep 2: At $x = 2$: $g(2) = f(2) + 3 = 5 + 3 = 8$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): reports the input $x = 2$ instead of the output.\n* Choice B ($5$): reports $f(2)$ unchanged — forgets the $+3$.\n* Choice D ($15$): multiplies by $3$ instead of adding.\n\n**Test Day Takeaway:** $f(x) + k$ shifts the graph $k$ units UP (down if $k < 0$), adding $k$ to each $y$-value.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertical-shift', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-240', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The graph of $y = f(x) + 7$ in the $xy$-plane is the graph of $y = f(x)$ shifted in which direction?',
    choices: [{ id: 'A', text: '$7$ units up' }, { id: 'B', text: '$7$ units down' }, { id: 'C', text: '$7$ units right' }, { id: 'D', text: '$7$ units left' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Vertical Shift**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Adding outside the function, $f(x) + 7$, shifts the graph UP $7$ units.\n\n**The Full Solution:**\nStep 1: $y = f(x) + k$ adds $k$ to every $y$-value; positive $k$ moves the graph up, negative $k$ down.\nStep 2: With $k = 7 > 0$, the graph shifts UP $7$. Horizontal shifts only come from changes INSIDE the function, like $f(x - h)$.\n\n**Why the wrong answers are tempting:**\n* Choice B: correct axis, wrong direction (down).\n* Choice C: treats an outside change as a horizontal shift; horizontal shifts are $f(x \\pm h)$, not $f(x) \\pm k$.\n* Choice D: same inside-vs-outside confusion, opposite horizontal direction.\n\n**Test Day Takeaway:** OUTSIDE the function means a VERTICAL shift in the intuitive direction ($+$ is up). INSIDE the function means a HORIZONTAL shift in the opposite direction ($-$ is right).",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertical-shift', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-241', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The function $f$ satisfies $f(0) = 4$. If $g(x) = f(x) - 5$, what is the value of $g(0)$?',
    choices: [{ id: 'A', text: '$-9$' }, { id: 'B', text: '$-1$' }, { id: 'C', text: '$4$' }, { id: 'D', text: '$9$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Vertical Shift**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $g$ is just $f$ shifted down $5$, so $g(0)=f(0)-5=4-5=-1$.\n\n**The Full Solution:**\nStep 1: The rule $g(x)=f(x)-5$ subtracts $5$ from every output of $f$.\nStep 2: Evaluate at $x=0$: $g(0)=f(0)-5$.\nStep 3: Substitute $f(0)=4$: $g(0)=4-5=-1$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-9$): computes $-5-4=-9$ — subtracts $f(0)$ instead of adding it.\n* Choice C ($4$): reports $f(0)$ and forgets to apply the shift.\n* Choice D ($9$): adds the $5$ instead of subtracting it.\n\n**Test Day Takeaway:** A vertical shift acts on the output: $f(x)-k$ lowers every value by $k$. Apply the shift after plugging in.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertical-shift', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-242', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'medium', type: 'fill-in',
    question: 'The graph of $y = f(x)$ in the $xy$-plane has a maximum value of $8$. What is the maximum value of $y = f(x) + 2$?',
    correctAnswer: '10',
    explanation: "**SAT Pattern: Vertical Shift**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~5s):** Adding $2$ raises every $y$-value, including the peak: new max $=8+2=10$.\n\n**The Full Solution:**\nStep 1: $y=f(x)+2$ adds $2$ to every output of $f$.\nStep 2: The maximum is one of those outputs, so it rises by $2$ too.\nStep 3: New maximum $=8+2=10$. The $x$-location of the max does not change.\n\n**Common Mistakes:** Reporting $8$ (the old maximum, ignoring the shift) or $2$ (the shift amount alone).\n\n**Test Day Takeaway:** A vertical shift moves every point — extrema included — so it shifts the maximum and minimum values by the same constant.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertical-shift', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-243', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'medium', type: 'multiple-choice',
    question: 'If $h(x) = x^2$, which of the following functions represents the graph of $h$ shifted DOWN by $5$ units?',
    choices: [{ id: 'A', text: '$h(x) = (x - 5)^2$' }, { id: 'B', text: '$h(x) = (x + 5)^2$' }, { id: 'C', text: '$h(x) = x^2 - 5$' }, { id: 'D', text: '$h(x) = x^2 + 5$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Vertical Shift**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Down means subtract on the OUTSIDE: $x^2-5$.\n\n**The Full Solution:**\nStep 1: Changes outside the function move it vertically; changes inside move it horizontally.\nStep 2: Shifting down $5$ subtracts $5$ from the output: $h(x)-5=x^2-5$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(x-5)^2$): subtracting inside shifts the graph RIGHT, not down.\n* Choice B ($(x+5)^2$): adding inside shifts the graph LEFT.\n* Choice D ($x^2+5$): adding outside shifts the graph UP, the wrong direction.\n\n**Test Day Takeaway:** Up/down lives outside the function; left/right lives inside. To go down by $k$, subtract $k$ from the whole expression.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertical-shift', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-244', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The graph of $y = g(x)$ in the $xy$-plane passes through the point $(3, 7)$. Which of the following points must lie on the graph of $y = g(x) - 4$?',
    choices: [{ id: 'A', text: '$(-1, 7)$' }, { id: 'B', text: '$(3, 3)$' }, { id: 'C', text: '$(3, 11)$' }, { id: 'D', text: '$(7, 3)$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Vertical Shift**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $y=g(x)-4$ drops every point $4$, so $(3,7)$ becomes $(3,7-4)=(3,3)$.\n\n**The Full Solution:**\nStep 1: Subtracting $4$ outside the function lowers each output by $4$, leaving inputs unchanged.\nStep 2: A point $(a,b)$ on $g$ maps to $(a,b-4)$.\nStep 3: So $(3,7)\\to(3,3)$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-1,7)$): subtracts $4$ from $x$ — that would be a horizontal shift, not vertical.\n* Choice C ($(3,11)$): adds $4$ to $y$, the wrong direction.\n* Choice D ($(7,3)$): swaps the coordinates.\n\n**Test Day Takeaway:** A vertical shift changes only the $y$-coordinate; the $x$-coordinate stays put.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertical-shift', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-245', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The graph of $y = (x - 3)^2 + 5$ is the graph of $y = (x - 3)^2 + 2$ transformed in which way?',
    choices: [{ id: 'A', text: 'shifted $3$ units up' }, { id: 'B', text: 'shifted $3$ units down' }, { id: 'C', text: 'shifted $5$ units up' }, { id: 'D', text: 'shifted $2$ units up' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Vertical Shift**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Both graphs share $(x-3)^2$; the constants differ by $5-2=3$, so the new graph is $3$ units up.\n\n**The Full Solution:**\nStep 1: The inside parts $(x-3)^2$ match, so the shape and horizontal position are identical.\nStep 2: Only the added constant changed: from $2$ to $5$, a gain of $3$.\nStep 3: Adding $3$ to the output raises the graph $3$ units up.\n\n**Why the wrong answers are tempting:**\n* Choice B (down $3$): right size, wrong direction — $5>2$, so it moved up.\n* Choice C (up $5$): reports the new constant alone, not the change.\n* Choice D (up $2$): reports the old constant alone, not the change.\n\n**Test Day Takeaway:** When two vertex-form graphs share the same $(x-h)^2$, the difference of their constants is the vertical shift between them.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertical-shift', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-246', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'hard', type: 'fill-in',
    question: 'The graph of $y = f(x) + k$ in the $xy$-plane passes through the point $(0, 10)$. If $f(0) = -2$, what is the value of $k$?',
    correctAnswer: '12',
    explanation: "**SAT Pattern: Vertical Shift**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~10s):** At $x=0$, $y=f(0)+k=-2+k=10$, so $k=12$.\n\n**The Full Solution:**\nStep 1: The graph $y=f(x)+k$ passes through $(0,10)$, so plug in $x=0$, $y=10$.\nStep 2: $f(0)+k=10$. With $f(0)=-2$: $-2+k=10$.\nStep 3: Solve: $k=12$. Check: $-2+12=10$. $\\checkmark$\n\n**Common Mistakes:** Getting $k=8$ by computing $10-2$ instead of $10-(-2)$, or sign-flipping to $k=-12$.\n\n**Test Day Takeaway:** To find an unknown vertical shift, substitute a known point and solve the resulting equation for the constant.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertical-shift', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── HORIZONTAL SHIFT (bank-am-247..254) ─────────────────────────────────
  // y = f(x ± h). Counter-intuitive sign: f(x - h) shifts RIGHT, f(x + h) LEFT.
  { id: 'bank-am-247', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'easy', type: 'multiple-choice',
    question: 'If $g(x) = f(x - 4)$ and $f(3) = 7$, what is the value of $g(7)$?',
    choices: [{ id: 'A', text: '$3$' }, { id: 'B', text: '$4$' }, { id: 'C', text: '$7$' }, { id: 'D', text: '$11$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Horizontal Shift**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** $g(7)=f(7-4)=f(3)=7$.\n\n**The Full Solution:**\nStep 1: The rule is $g(x)=f(x-4)$, so the input to $f$ is always $x-4$.\nStep 2: At $x=7$: $g(7)=f(7-4)=f(3)$.\nStep 3: Given $f(3)=7$, so $g(7)=7$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): reports the shifted input $7-4=3$, not the output.\n* Choice B ($4$): reports the shift amount.\n* Choice D ($11$): uses $7+4$ instead of $7-4$ inside $f$.\n\n**Test Day Takeaway:** For $g(x)=f(x-h)$, the input fed to $f$ at any $x$ is $x-h$. Subtract first, then read off $f$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'horizontal-shift', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-248', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'easy', type: 'multiple-choice',
    question: 'In the $xy$-plane, the graph of $y = f(x + 5)$ is the graph of $y = f(x)$ shifted in which direction?',
    choices: [{ id: 'A', text: '$5$ units up' }, { id: 'B', text: '$5$ units down' }, { id: 'C', text: '$5$ units left' }, { id: 'D', text: '$5$ units right' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Horizontal Shift**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Inside-function shifts go opposite the sign: $f(x+5)$ moves the graph $5$ units LEFT.\n\n**The Full Solution:**\nStep 1: A change inside the function affects the input, i.e. the horizontal direction.\nStep 2: $f(x+5)$ reaches the value $f$ once had at $x=5$ when the new input is $x=0$, since $0+5=5$.\nStep 3: The feature that sat at $x=5$ now sits at $x=0$ — the graph moved $5$ units left.\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$ up) / Choice B ($5$ down): vertical shifts come from changes OUTSIDE the function, not inside.\n* Choice D ($5$ right): wrong direction; a $+$ inside means LEFT.\n\n**Test Day Takeaway:** Inside the function, the sign flips the direction: $f(x+h)$ shifts LEFT, $f(x-h)$ shifts RIGHT.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'horizontal-shift', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-249', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'medium', type: 'multiple-choice',
    question: 'If $h(x) = x^2$, which of the following functions represents the graph of $h$ shifted to the RIGHT by $3$ units?',
    choices: [{ id: 'A', text: '$h(x) = (x - 3)^2$' }, { id: 'B', text: '$h(x) = (x + 3)^2$' }, { id: 'C', text: '$h(x) = x^2 - 3$' }, { id: 'D', text: '$h(x) = x^2 + 3$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Horizontal Shift**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Right means SUBTRACT inside: $(x-3)^2$.\n\n**The Full Solution:**\nStep 1: Horizontal shifts live inside the function and run opposite the sign.\nStep 2: Moving right by $3$ subtracts $3$ from the input: $h(x-3)=(x-3)^2$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($(x+3)^2$): adding inside shifts LEFT, not right.\n* Choice C ($x^2-3$): subtracting outside shifts DOWN.\n* Choice D ($x^2+3$): adding outside shifts UP.\n\n**Test Day Takeaway:** Right $=$ subtract inside, left $=$ add inside; up/down stays outside. The inside sign is always counter-intuitive.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'horizontal-shift', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-250', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'medium', type: 'fill-in',
    question: 'The graph of $y = f(x)$ in the $xy$-plane has its vertex at $(2, -1)$. The graph of $y = f(x + 6)$ has its vertex at $(a, -1)$. What is the value of $a$?',
    correctAnswer: '-4',
    explanation: "**SAT Pattern: Horizontal Shift**\n\n**The correct answer is $-4$.**\n\n**The Fast Way (~5s):** $f(x+6)$ shifts the graph LEFT $6$, so the vertex $x$-coordinate goes from $2$ to $2-6=-4$.\n\n**The Full Solution:**\nStep 1: Adding $6$ inside the function moves the graph $6$ units left.\nStep 2: The vertex moves with the graph: $(2,-1)\\to(2-6,-1)=(-4,-1)$.\nStep 3: So $a=-4$. Check: $f(x+6)$ hits its extreme value where $x+6=2$, i.e. $x=-4$. $\\checkmark$\n\n**Common Mistakes:** Getting $a=8$ by shifting right (using $+6$) instead of left, or changing the $y$-coordinate.\n\n**Test Day Takeaway:** The vertex shifts the same way the graph does: $f(x+h)$ moves it LEFT by $h$, $y$ unchanged.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'horizontal-shift', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-251', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The graph of $y = g(x)$ in the $xy$-plane passes through the point $(5, 12)$. Which of the following points must lie on the graph of $y = g(x - 3)$?',
    choices: [{ id: 'A', text: '$(2, 12)$' }, { id: 'B', text: '$(5, 9)$' }, { id: 'C', text: '$(5, 15)$' }, { id: 'D', text: '$(8, 12)$' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Horizontal Shift**\n\n**Choice D is correct.**\n\n**The Fast Way (~5s):** $g(x-3)$ shifts the graph RIGHT $3$, so $(5,12)\\to(8,12)$.\n\n**The Full Solution:**\nStep 1: Subtracting $3$ inside the function moves the graph $3$ units right.\nStep 2: A point $(a,b)$ on $g$ maps to $(a+3,b)$ — verify by checking $g\\big((a+3)-3\\big)=g(a)=b$.\nStep 3: So $(5,12)\\to(8,12)$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(2,12)$): subtracts $3$ from $x$ — wrong direction for $g(x-3)$.\n* Choice B ($(5,9)$): subtracts from $y$ — confuses horizontal with vertical.\n* Choice C ($(5,15)$): adds to $y$ — same vertical/horizontal mix-up.\n\n**Test Day Takeaway:** For $g(x-h)$, every point's $x$-coordinate increases by $h$ and $y$ stays fixed — feed in a value $h$ higher to recover the same output.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'horizontal-shift', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-252', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'medium', type: 'multiple-choice',
    question: 'If $g(x) = f(x + 2)$ and $g(0) = 5$, what is the value of $f(2)$?',
    choices: [{ id: 'A', text: '$-3$' }, { id: 'B', text: '$0$' }, { id: 'C', text: '$2$' }, { id: 'D', text: '$5$' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Horizontal Shift**\n\n**Choice D is correct.**\n\n**The Fast Way (~5s):** $g(0)=f(0+2)=f(2)$, and $g(0)=5$, so $f(2)=5$.\n\n**The Full Solution:**\nStep 1: The rule is $g(x)=f(x+2)$, so the input to $f$ is $x+2$.\nStep 2: At $x=0$: $g(0)=f(0+2)=f(2)$.\nStep 3: Given $g(0)=5$, therefore $f(2)=5$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): a sign mix-up, treating the shift as a subtraction.\n* Choice B ($0$): reports the input $x=0$ instead of the value.\n* Choice C ($2$): reports the shift amount.\n\n**Test Day Takeaway:** To evaluate $f$ at a target input from $g$-values, pick the $x$ that makes $x+h$ equal that input, then read off $g(x)$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'horizontal-shift', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-253', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The function $f$ has its minimum at $x = 4$. At what value of $x$ does the function defined by $f(x - 6)$ attain its minimum?',
    choices: [{ id: 'A', text: '$-10$' }, { id: 'B', text: '$-2$' }, { id: 'C', text: '$2$' }, { id: 'D', text: '$10$' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Horizontal Shift**\n\n**Choice D is correct.**\n\n**The Fast Way (~5s):** $f(x-6)$ shifts the graph right by $6$, so the minimum moves from $x=4$ to $x=4+6=10$.\n\n**The Full Solution:**\nStep 1: $f(x-6)$ hits the same output that $f$ does when their inputs match. The minimum of $f$ occurs when $f$'s argument equals $4$.\nStep 2: Set the inside argument to $4$: $x-6=4$.\nStep 3: Solve: $x=10$. At $x=10$, $f(10-6)=f(4)$, which is the minimum. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-10$): negated the answer, treating the shift as a sign flip.\n* Choice B ($-2$): solved $x-6=4$ as $x=4-6$, shifting left instead of right.\n* Choice C ($2$): subtracted, getting $4-6$ — shifted the wrong direction.\n\n**Test Day Takeaway:** $f(x-h)$ shifts every key $x$-value right by $h$. Set the inside equal to the original input and solve.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'horizontal-shift', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-254', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'hard', type: 'fill-in',
    question: 'The graph of $y = f(x)$ in the $xy$-plane has an $x$-intercept at $x = -3$. The graph of $y = f(x - 7)$ has an $x$-intercept at $x = a$. What is the value of $a$?',
    correctAnswer: '4',
    explanation: "**SAT Pattern: Horizontal Shift**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~5s):** $f(x-7)$ shifts the graph right by $7$, so the $x$-intercept moves from $-3$ to $-3+7=4$.\n\n**The Full Solution:**\nStep 1: An $x$-intercept of $y=f(x-7)$ is where $f(x-7)=0$. Since $f(-3)=0$, the inside argument must equal $-3$.\nStep 2: Set $x-7=-3$.\nStep 3: Solve: $x=4$. Check: $f(4-7)=f(-3)=0$. $\\checkmark$\n\n**Common Mistakes:** Reporting $-10$ by solving $x=-3-7$ (shifting the wrong way); leaving the zero at $-3$ as if the shift didn't apply.\n\n**Test Day Takeaway:** Zeros shift exactly like every other $x$-coordinate. For $f(x-h)$, set the inside equal to the known zero and solve.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'horizontal-shift', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── REFLECTION OF GRAPH (bank-am-255..262) ──────────────────────────────
  // y = -f(x) reflects over x-axis. y = f(-x) reflects over y-axis. EVEN
  // functions are unchanged by f(-x); ODD functions become -f(x).
  { id: 'bank-am-255', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The graph of $y = -f(x)$ in the $xy$-plane is the graph of $y = f(x)$ reflected over which axis?',
    choices: [{ id: 'A', text: 'the $x$-axis' }, { id: 'B', text: 'the $y$-axis' }, { id: 'C', text: 'the line $y = x$' }, { id: 'D', text: 'no reflection — it is a vertical stretch' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Reflection of Graph**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Negating the output, $-f(x)$, flips every $y$-value, which is a reflection over the $x$-axis.\n\n**The Full Solution:**\n$y=-f(x)$ sends each point $(a,b)$ on $y=f(x)$ to $(a,-b)$: the $x$-coordinate stays, the $y$-coordinate flips sign. A graph whose $y$-values flip while $x$-values hold is reflected over the $x$-axis.\n\n**Why the wrong answers are tempting:**\n* Choice B: reflection over the $y$-axis comes from $f(-x)$, which negates the input — not the output.\n* Choice C: reflection over $y=x$ swaps $x$ and $y$ (the inverse function), not a sign flip.\n* Choice D: a true vertical stretch multiplies by a constant other than $-1$; the $-1$ here is specifically a reflection.\n\n**Test Day Takeaway:** Negate the output $\\Rightarrow$ reflect over the $x$-axis. Negate the input $\\Rightarrow$ reflect over the $y$-axis.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'reflection-of-graph', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-256', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'easy', type: 'multiple-choice',
    question: 'If $g(x) = f(-x)$ and $f(3) = 8$, what is the value of $g(-3)$?',
    choices: [{ id: 'A', text: '$-8$' }, { id: 'B', text: '$-3$' }, { id: 'C', text: '$3$' }, { id: 'D', text: '$8$' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Reflection of Graph**\n\n**Choice D is correct.**\n\n**The Fast Way (~5s):** $g(-3)=f(-(-3))=f(3)=8$.\n\n**The Full Solution:**\nStep 1: Use the definition $g(x)=f(-x)$ with $x=-3$.\nStep 2: $g(-3)=f(-(-3))=f(3)$.\nStep 3: Since $f(3)=8$, $g(-3)=8$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-8$): confuses $f(-x)$ (reflect over $y$-axis) with $-f(x)$ (reflect over $x$-axis), which would flip the output sign.\n* Choice B ($-3$): reports the input value instead of evaluating.\n* Choice C ($3$): reports the simplified input $-(-3)=3$ instead of $f(3)$.\n\n**Test Day Takeaway:** $f(-x)$ negates the input only; the output value is unchanged. Substitute carefully and watch the double negative.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'reflection-of-graph', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-257', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The graph of $y = f(x)$ in the $xy$-plane passes through the point $(2, 5)$. Which of the following points must lie on the graph of $y = -f(x)$?',
    choices: [{ id: 'A', text: '$(-2, 5)$' }, { id: 'B', text: '$(-2, -5)$' }, { id: 'C', text: '$(2, -5)$' }, { id: 'D', text: '$(5, 2)$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Reflection of Graph**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** $y=-f(x)$ flips the $y$-coordinate and keeps $x$, so $(2,5)\\to(2,-5)$.\n\n**The Full Solution:**\n$y=-f(x)$ reflects the graph over the $x$-axis: each point $(a,b)$ maps to $(a,-b)$. Apply to $(2,5)$: the $x$-coordinate stays $2$, the $y$-coordinate becomes $-5$, giving $(2,-5)$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-2,5)$): negates only $x$ — that's a reflection over the $y$-axis.\n* Choice B ($(-2,-5)$): negates both coordinates — combines two reflections.\n* Choice D ($(5,2)$): swaps $x$ and $y$ — that's the inverse, not a reflection over the $x$-axis.\n\n**Test Day Takeaway:** $-f(x)$ flips $y$ and keeps $x$. The only fixed points are on the $x$-axis, where $y=0$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'reflection-of-graph', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-258', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'medium', type: 'multiple-choice',
    question: 'If $h(x) = x^2 + 3x$, which of the following defines a function whose graph is the reflection of $y = h(x)$ over the $x$-axis?',
    choices: [{ id: 'A', text: '$h(-x) = x^2 - 3x$' }, { id: 'B', text: '$-h(x) = -x^2 - 3x$' }, { id: 'C', text: '$h(x) + 1 = x^2 + 3x + 1$' }, { id: 'D', text: '$-h(-x) = -x^2 + 3x$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Reflection of Graph**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Reflection over the $x$-axis negates the entire output: $-h(x)=-(x^2+3x)=-x^2-3x$.\n\n**The Full Solution:**\nStep 1: A reflection over the $x$-axis is $y=-h(x)$ — negate the whole function.\nStep 2: $-h(x)=-(x^2+3x)$.\nStep 3: Distribute the negative across both terms: $-x^2-3x$. That matches Choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A: $h(-x)=x^2-3x$ negates the input — a reflection over the $y$-axis.\n* Choice C: $h(x)+1$ is a vertical shift up, not a reflection.\n* Choice D: $-h(-x)=-x^2+3x$ reflects over both axes (origin symmetry).\n\n**Test Day Takeaway:** Reflection over the $x$-axis means negate the whole output. Distribute the sign onto every term, not just the first.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'reflection-of-graph', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-259', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'medium', type: 'fill-in',
    question: 'The graph of $y = f(x)$ in the $xy$-plane has a maximum value of $12$. What is the minimum value of $y = -f(x)$?',
    correctAnswer: '-12',
    explanation: "**SAT Pattern: Reflection of Graph**\n\n**The correct answer is $-12$.**\n\n**The Fast Way (~5s):** Reflecting over the $x$-axis turns the maximum into a minimum and flips its sign: $\\max=12\\to\\min=-12$.\n\n**The Full Solution:**\n$y=-f(x)$ is $y=f(x)$ flipped over the $x$-axis. Every $y$-value changes sign, so the largest $y$-value of $f$ (the maximum $12$) becomes the smallest $y$-value of $-f$ (the minimum $-12$). The $x$-coordinate where it occurs is unchanged.\n\n**Common Mistakes:** Reporting $12$ (forgetting the sign flip); reporting $0$ as if reflection averaged the value.\n\n**Test Day Takeaway:** Reflection over the $x$-axis swaps max and min and flips the extreme's sign.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'reflection-of-graph', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-260', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Which of the following transformations produces the graph of $y = f(-x)$ from the graph of $y = f(x)$?',
    choices: [{ id: 'A', text: 'reflection over the $x$-axis' }, { id: 'B', text: 'reflection over the $y$-axis' }, { id: 'C', text: 'reflection over the line $y = x$' }, { id: 'D', text: 'rotation by $90°$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Reflection of Graph**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Negating the input, $f(-x)$, reflects the graph over the $y$-axis.\n\n**The Full Solution:**\n$y=f(-x)$ sends each point $(a,b)$ on $f$ to $(-a,b)$: the $y$-coordinate stays, the $x$-coordinate flips sign. A graph whose $x$-values flip while $y$-values hold is reflected over the $y$-axis.\n\n**Why the wrong answers are tempting:**\n* Choice A: reflection over the $x$-axis comes from $-f(x)$, which negates the output — not the input.\n* Choice C: reflection over $y=x$ is the inverse function, swapping $x$ and $y$.\n* Choice D: a rotation is not what $f(-x)$ produces.\n\n**Test Day Takeaway:** Reflection over the $y$-axis means negate the input only. The output value stays the same.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'reflection-of-graph', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-261', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The graph of $y = g(x)$ in the $xy$-plane passes through the point $(-4, 6)$. Which of the following points must lie on the graph of $y = g(-x)$?',
    choices: [{ id: 'A', text: '$(-4, -6)$' }, { id: 'B', text: '$(4, -6)$' }, { id: 'C', text: '$(4, 6)$' }, { id: 'D', text: '$(6, -4)$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Reflection of Graph**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** $y=g(-x)$ reflects over the $y$-axis: negate $x$, keep $y$. So $(-4,6)\\to(4,6)$.\n\n**The Full Solution:**\n$y=g(-x)$ maps each point $(a,b)$ on $g$ to $(-a,b)$. Apply to $(-4,6)$: the $x$-coordinate becomes $-(-4)=4$ and the $y$-coordinate stays $6$, giving $(4,6)$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-4,-6)$): negates only $y$ — a reflection over the $x$-axis.\n* Choice B ($(4,-6)$): negates both coordinates — two reflections combined.\n* Choice D ($(6,-4)$): swaps the coordinates instead of reflecting.\n\n**Test Day Takeaway:** $g(-x)$ flips $x$ and keeps $y$. The only fixed points are on the $y$-axis, where $x=0$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'reflection-of-graph', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-262', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'hard', type: 'fill-in',
    question: 'A function $f$ is EVEN, meaning $f(-x) = f(x)$ for every $x$ in its domain. If $f(5) = 7$, what is the value of $f(-5)$?',
    correctAnswer: '7',
    explanation: "**SAT Pattern: Reflection of Graph**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~5s):** By the definition of even, $f(-x)=f(x)$, so $f(-5)=f(5)=7$.\n\n**The Full Solution:**\nAn even function satisfies $f(-x)=f(x)$ for all $x$. Apply it at $x=5$: $f(-5)=f(5)=7$. Geometrically, an even function is symmetric over the $y$-axis, so $(5,7)$ and $(-5,7)$ are mirror images.\n\n**Common Mistakes:** Reporting $-7$ confuses even with odd ($f(-x)=-f(x)$ would give $-7$); reporting $5$ or $-5$ reports an $x$-value instead of the output.\n\n**Test Day Takeaway:** Even means symmetric over the $y$-axis, so the input sign doesn't change the output. Odd means symmetric over the origin, $f(-x)=-f(x)$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'reflection-of-graph', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── VERTICAL STRETCH (bank-am-263..270) ─────────────────────────────────
  // y = a·f(x) stretches vertically by factor a. a > 1: stretch; 0 < a < 1:
  // compression. Negative a combines reflection over x-axis.
  { id: 'bank-am-263', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'easy', type: 'multiple-choice',
    question: 'If $g(x) = 3 \\cdot f(x)$ and $f(2) = 4$, what is the value of $g(2)$?',
    choices: [{ id: 'A', text: '$3$' }, { id: 'B', text: '$7$' }, { id: 'C', text: '$12$' }, { id: 'D', text: '$24$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Vertical Stretch**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** $g(2)=3\\cdot f(2)=3\\cdot 4=12$.\n\n**The Full Solution:**\nStep 1: $g(x)=3\\cdot f(x)$ scales every output of $f$ by $3$.\nStep 2: At $x=2$, $f(2)=4$.\nStep 3: $g(2)=3\\cdot 4=12$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): reports the stretch factor alone.\n* Choice B ($7$): adds instead of multiplies, $3+4=7$.\n* Choice D ($24$): multiplies the input by $3$ first and re-uses an output — wrong operation order.\n\n**Test Day Takeaway:** $a\\cdot f(x)$ scales the output by $a$. Multiply the function value; never add the factor.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertical-stretch', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-264', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The graph of $y = 2 f(x)$ in the $xy$-plane is the graph of $y = f(x)$ stretched vertically by a factor of:',
    choices: [{ id: 'A', text: '$0.5$' }, { id: 'B', text: '$2$' }, { id: 'C', text: '$4$' }, { id: 'D', text: '$-2$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Vertical Stretch**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** The coefficient $2$ in $2f(x)$ is the vertical stretch factor.\n\n**The Full Solution:**\nMultiplying $f(x)$ by $2$ doubles every $y$-value, so the graph stretches vertically by a factor of $2$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.5$): the reciprocal — that would be a vertical compression.\n* Choice C ($4$): squares the factor instead of using it directly.\n* Choice D ($-2$): a negative factor would also reflect over the $x$-axis, which isn't happening here.\n\n**Test Day Takeaway:** For $a\\cdot f(x)$: $a>1$ stretches by $a$, $0<a<1$ compresses by $a$, and $a<0$ stretches by $|a|$ while reflecting over the $x$-axis.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertical-stretch', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-265', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'medium', type: 'multiple-choice',
    question: 'If $h(x) = x^2$, which of the following functions stretches $h$ vertically by a factor of $5$?',
    choices: [{ id: 'A', text: '$h(x) = (5x)^2$' }, { id: 'B', text: '$h(x) = 5x^2$' }, { id: 'C', text: '$h(x) = x^2 + 5$' }, { id: 'D', text: '$h(x) = x^{10}$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Vertical Stretch**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** A vertical stretch multiplies the output from the OUTSIDE: $5 \\cdot x^2 = 5x^2$. That is choice B.\n\n**The Full Solution:**\nStep 1: A vertical stretch by a factor of $5$ takes $h(x)$ to $5 \\cdot h(x)$.\nStep 2: Since $h(x) = x^2$, that is $5x^2$ — every $y$-value is multiplied by $5$.\n\n**Why the wrong answers are tempting:**\n* Choice A: $(5x)^2 = 25x^2$ multiplies INSIDE, which is a horizontal compression — and the net vertical effect is a factor of $25$, not $5$.\n* Choice C: $x^2 + 5$ is a vertical SHIFT up by $5$, not a stretch.\n* Choice D: $x^{10}$ changes the exponent, which is not a stretch at all.\n\n**Test Day Takeaway:** Multiplying a function on the OUTSIDE, $a \\cdot f(x)$, stretches it vertically by $a$. Changes INSIDE the function affect the input (horizontal) axis instead.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertical-stretch', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-266', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'medium', type: 'fill-in',
    question: 'The graph of $y = f(x)$ in the $xy$-plane has a maximum value of $10$. What is the maximum value of $y = 4 f(x)$?',
    correctAnswer: '40',
    explanation: "**SAT Pattern: Vertical Stretch**\n\n**The correct answer is $40$.**\n\n**The Fast Way (~5s):** Stretching by $4$ multiplies the max: $4 \\cdot 10 = 40$.\n\n**The Full Solution:**\nStep 1: $y = 4f(x)$ multiplies every output of $f$ by $4$, including the maximum.\nStep 2: The maximum of $f$ is $10$, so the new maximum is $4 \\cdot 10 = 40$.\n\n**Common Mistakes:** Reporting $10$ (forgetting to apply the stretch); reporting $14$ (adding $4$ instead of multiplying).\n\n**Test Day Takeaway:** A vertical stretch by $a > 0$ multiplies the $y$-value of every extremum by $a$; the $x$-coordinate where the extremum occurs does not move.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertical-stretch', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-267', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The graph of $y = g(x)$ in the $xy$-plane passes through the point $(1, 6)$. Which of the following points must lie on the graph of $y = \\dfrac{1}{2} g(x)$?',
    choices: [{ id: 'A', text: '$(0.5, 6)$' }, { id: 'B', text: '$(1, 3)$' }, { id: 'C', text: '$(1, 12)$' }, { id: 'D', text: '$(2, 6)$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Vertical Stretch**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $\\frac{1}{2}g(x)$ halves the $y$-value: $(1, 6) \\to (1, 3)$. That is choice B.\n\n**The Full Solution:**\nStep 1: $y = \\frac{1}{2}g(x)$ keeps each $x$ the same and multiplies each $y$ by $\\frac{1}{2}$.\nStep 2: At $x = 1$, the new $y$ is $\\frac{1}{2} \\cdot 6 = 3$, so $(1, 3)$ must lie on the graph.\n\n**Why the wrong answers are tempting:**\n* Choice A: $(0.5, 6)$ halves the $x$-value — vertical scaling does not touch $x$.\n* Choice C: $(1, 12)$ doubles $y$ instead of halving it.\n* Choice D: $(2, 6)$ doubles $x$ — again the wrong axis.\n\n**Test Day Takeaway:** In $a \\cdot g(x)$, only the $y$-coordinate scales (by $a$); the $x$-coordinate stays put.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertical-stretch', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-268', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Which of the following transformations produces the graph of $y = 0.5 f(x)$ from the graph of $y = f(x)$?',
    choices: [{ id: 'A', text: 'vertical stretch by a factor of $2$' }, { id: 'B', text: 'vertical compression by a factor of $\\dfrac{1}{2}$' }, { id: 'C', text: 'horizontal stretch by a factor of $2$' }, { id: 'D', text: 'reflection over the $x$-axis' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Vertical Stretch**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Multiplying by $0.5$, a number between $0$ and $1$, squeezes the graph toward the $x$-axis — a vertical compression by $\\frac{1}{2}$. That is choice B.\n\n**The Full Solution:**\nStep 1: For $a \\cdot f(x)$, $a > 1$ stretches vertically and $0 < a < 1$ compresses vertically.\nStep 2: Here $a = 0.5$, so the graph is compressed vertically by a factor of $\\frac{1}{2}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: a vertical stretch by $2$ would require multiplying by $2$, not $0.5$.\n* Choice C: horizontal stretching comes from a change INSIDE the function, not the outside factor $0.5$.\n* Choice D: a reflection over the $x$-axis would require a NEGATIVE multiplier.\n\n**Test Day Takeaway:** For $a \\cdot f(x)$ with $a > 0$: $a > 1 \\Rightarrow$ vertical stretch, $0 < a < 1 \\Rightarrow$ vertical compression. Match the description to where $a$ sits relative to $1$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertical-stretch', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-269', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'hard', type: 'multiple-choice',
    question: 'If $f(x) = x^2 - 4$ and $g(x) = 3 f(x)$, what is the minimum value of $g(x)$?',
    choices: [{ id: 'A', text: '$-12$' }, { id: 'B', text: '$-4$' }, { id: 'C', text: '$-1$' }, { id: 'D', text: '$0$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Vertical Stretch**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $f$ bottoms out at $-4$. Multiplying by $3$ stretches that minimum to $3 \\cdot (-4) = -12$. That is choice A.\n\n**The Full Solution:**\nStep 1: $f(x) = x^2 - 4$ has its minimum at $x = 0$, where $f(0) = -4$.\nStep 2: $g(x) = 3f(x) = 3(x^2 - 4) = 3x^2 - 12$, still minimized at $x = 0$.\nStep 3: $g(0) = 3 \\cdot 0 - 12 = -12$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-4$): reports $f$'s minimum unchanged, forgetting the stretch.\n* Choice C ($-1$): no valid path to this value — a distractor.\n* Choice D ($0$): confuses the minimum value with an $x$-axis crossing.\n\n**Test Day Takeaway:** A vertical stretch by $a > 0$ multiplies the minimum VALUE by $a$ too — a negative minimum becomes more negative, not less.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertical-stretch', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-270', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'hard', type: 'fill-in',
    question: 'The function $h$ has an $x$-intercept at $x = 5$. The function $k$ is defined by $k(x) = 4 h(x)$. What is an $x$-intercept of $k$?',
    correctAnswer: '5',
    explanation: "**SAT Pattern: Vertical Stretch**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~5s):** A vertical stretch leaves $x$-intercepts fixed, because $4 \\cdot 0 = 0$. So $k$ still crosses at $x = 5$.\n\n**The Full Solution:**\nStep 1: An $x$-intercept of $h$ at $x = 5$ means $h(5) = 0$.\nStep 2: $k(5) = 4 \\cdot h(5) = 4 \\cdot 0 = 0$, so $k$ also has an $x$-intercept at $x = 5$.\n\n**Common Mistakes:** Reporting $20$ (multiplying the $x$-value by $4$ instead of the $y$-value); reporting $1.25$ (dividing the $x$-value by $4$); reporting $0$ (confusing the $x$-intercept with the $y$-intercept).\n\n**Test Day Takeaway:** Vertical scaling never moves $x$-intercepts: $a \\cdot 0 = 0$ for any $a$, so the zeros of $f$ are exactly the zeros of $a \\cdot f$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertical-stretch', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── COMPOUND INTEREST (bank-am-271..278) ────────────────────────────────
  // Formula: A = P(1 + r/n)^(nt). SAT typically uses annual compounding (n=1).
  // Distinct from generic exponential growth via the financial framing and
  // standard $A = P(1+r)^t$ form.
  { id: 'bank-am-271', domain: 'advanced-math', skills: ['exponential-functions'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A savings account opens with $\\$1{,}000$ and earns $5\\%$ annual interest, compounded annually. What is the balance, in dollars, after $1$ year?',
    choices: [{ id: 'A', text: '$\\$50$' }, { id: 'B', text: '$\\$1{,}005$' }, { id: 'C', text: '$\\$1{,}050$' }, { id: 'D', text: '$\\$5{,}000$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Compound Interest**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** One year of $5\\%$ growth: $\\$1{,}000 \\cdot 1.05 = \\$1{,}050$. That is choice C.\n\n**The Full Solution:**\nStep 1: After one year the balance is the principal plus the interest earned: $1000 + 1000(0.05)$.\nStep 2: Factor: $1000(1 + 0.05) = 1000(1.05) = 1050$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$50$): reports only the interest earned, not the new balance.\n* Choice B ($\\$1{,}005$): treats $5\\%$ as $0.005$ instead of $0.05$.\n* Choice D ($\\$5{,}000$): multiplies by $5$ instead of by $1.05$.\n\n**Test Day Takeaway:** Balance after one year $=$ principal $\\times (1 + \\text{rate})$. The $1$ preserves the original principal; the rate adds the new interest.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'compound-interest', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-272', domain: 'advanced-math', skills: ['exponential-functions'], difficulty: 'easy', type: 'multiple-choice',
    question: 'An investment of $\\$2{,}000$ earns $4\\%$ annual interest, compounded annually. Which of the following functions gives the balance $B(t)$, in dollars, after $t$ years?',
    choices: [{ id: 'A', text: '$B(t) = 2000 + 0.04 t$' }, { id: 'B', text: '$B(t) = 2000(1.04)^t$' }, { id: 'C', text: '$B(t) = 2000(4)^t$' }, { id: 'D', text: '$B(t) = 2000 \\cdot 1.04 \\cdot t$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Compound Interest**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Annual compounding follows $A = P(1 + r)^t$. With $P = 2000$ and $r = 0.04$, that is $B(t) = 2000(1.04)^t$ — choice B.\n\n**The Full Solution:**\nStep 1: Each year multiplies the balance by the same factor $1 + r = 1.04$.\nStep 2: After $t$ years that factor applies $t$ times: $B(t) = 2000(1.04)^t$, which grows exponentially.\n\n**Why the wrong answers are tempting:**\n* Choice A: $2000 + 0.04t$ is SIMPLE (linear) interest, not compound.\n* Choice C: $2000(4)^t$ uses $4$ as the base instead of the growth factor $1.04$.\n* Choice D: $2000 \\cdot 1.04 \\cdot t$ applies the multiplier just once and scales by $t$ — that is not exponential growth.\n\n**Test Day Takeaway:** Compound interest is exponential in time: $P(1 + r)^t$. The base is $1 + r$, where the $1$ keeps the principal and the $r$ adds each period's interest.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'compound-interest', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-273', domain: 'advanced-math', skills: ['exponential-functions'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A principal of $\\$500$ is invested at $6\\%$ annual interest, compounded annually. What is the balance, in dollars, after $3$ years? (Round to the nearest cent.)',
    choices: [{ id: 'A', text: '$\\$518$' }, { id: 'B', text: '$\\$540$' }, { id: 'C', text: '$\\$590$' }, { id: 'D', text: '$\\$595.51$' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Compound Interest**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** $500 \\cdot 1.06^3 = 500 \\cdot 1.191016 \\approx 595.51$. That is choice D.\n\n**The Full Solution:**\nStep 1: Use $A = P(1 + r)^t = 500(1.06)^3$.\nStep 2: $1.06^2 = 1.1236$, then $1.06^3 = 1.06 \\cdot 1.1236 = 1.191016$.\nStep 3: $500 \\cdot 1.191016 = 595.508$, which rounds to $\\$595.51$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$518$): close to a single year of growth, not three years.\n* Choice B ($\\$540$): uses SIMPLE interest: $500 + 500 \\cdot 0.06 \\cdot 3 = 540$.\n* Choice C ($\\$590$): a rough undercount of the compounded total.\n\n**Test Day Takeaway:** At the same rate, compound interest beats simple interest once $t > 1$, because each year's growth is applied to the new, larger balance.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'compound-interest', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-274', domain: 'advanced-math', skills: ['exponential-functions'], difficulty: 'medium', type: 'fill-in',
    question: 'An account earns $8\\%$ annual interest, compounded annually. How much, in dollars, must be deposited today to have $\\$10{,}000$ after $2$ years? Round to the nearest dollar.',
    correctAnswer: '8573',
    explanation: "**SAT Pattern: Compound Interest**\n\n**The correct answer is $8573$.**\n\n**The Fast Way (~15s):** Solve $P \\cdot 1.08^2 = 10000$, so $P = \\frac{10000}{1.1664} \\approx 8573$.\n\n**The Full Solution:**\nStep 1: Present value reverses compounding: $P = \\frac{A}{(1 + r)^t} = \\frac{10000}{(1.08)^2}$.\nStep 2: $1.08^2 = 1.1664$, so $P = \\frac{10000}{1.1664} \\approx 8573.39$, which rounds to $\\$8573$.\nStep 3: Check: $8573 \\cdot 1.1664 \\approx 10000$. $\\checkmark$\n\n**Common Mistakes:** Reporting $9259$ (dividing by $1.08$ only once, reversing a single year); reporting $9200$ (subtracting $8\\%$ once via $10000 \\cdot 0.92$); reporting $8000$ (subtracting $20\\%$).\n\n**Test Day Takeaway:** For present value, divide the future amount by $(1 + r)^t$ — not by $(1 + rt)$ and not by $r$ alone.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'compound-interest', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-275', domain: 'advanced-math', skills: ['exponential-functions', 'function-interpretation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The function $A(t) = 5{,}000(1.03)^t$ models a savings account balance, in dollars, $t$ years after a deposit. Which of the following best describes the meaning of $1.03$ in this function?',
    choices: [
      { id: 'A', text: 'The account earns $1.03\\%$ interest per year.' },
      { id: 'B', text: 'The account balance multiplies by $1.03$ each year, indicating $3\\%$ annual interest.' },
      { id: 'C', text: 'The account balance increases by $\\$1.03$ each year.' },
      { id: 'D', text: 'The initial deposit was $\\$1.03$ million.' },
    ],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Compound Interest**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $1.03 = 1 + 0.03$ is the annual growth factor, so the balance multiplies by $1.03$ each year — a $3\\%$ annual interest rate. That is choice B.\n\n**The Full Solution:**\nStep 1: Match $A(t) = 5000(1.03)^t$ to the form $P(1 + r)^t$.\nStep 2: The base $1.03 = 1 + 0.03$ gives $r = 0.03 = 3\\%$, the factor by which the balance grows each year.\n\n**Why the wrong answers are tempting:**\n* Choice A: $1.03\\%$ confuses the multiplier $1.03$ with the percent rate.\n* Choice C: treats $1.03$ as a flat $\\$1.03$ added each year (additive, not multiplicative).\n* Choice D: misreads $1.03$ as the principal, which is actually $\\$5{,}000$.\n\n**Test Day Takeaway:** In $A = P(1 + r)^t$, the base is $1 + r$. Recover the percent rate with $r = \\text{base} - 1$, then multiply by $100$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'compound-interest', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-276', domain: 'advanced-math', skills: ['exponential-functions'], difficulty: 'medium', type: 'multiple-choice',
    question: 'An investment of $\\$1{,}500$ doubles after $10$ years at a constant annual compound interest rate. Which of the following is closest to the annual interest rate?',
    choices: [{ id: 'A', text: '$5\\%$' }, { id: 'B', text: '$7.2\\%$' }, { id: 'C', text: '$10\\%$' }, { id: 'D', text: '$20\\%$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Compound Interest**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Doubling means $(1 + r)^{10} = 2$, so $1 + r = 2^{1/10} \\approx 1.072$, giving $r \\approx 7.2\\%$ — choice B. The Rule of 72 confirms it: $\\frac{72}{10} = 7.2$.\n\n**The Full Solution:**\nStep 1: Doubling $\\$1{,}500$ gives $1500(1 + r)^{10} = 3000$, so $(1 + r)^{10} = 2$.\nStep 2: Take the $10$th root: $1 + r = 2^{1/10} \\approx 1.0718$, so $r \\approx 0.072 = 7.2\\%$.\nStep 3: Check: $1500 \\cdot 1.072^{10} \\approx 1500 \\cdot 2.00 \\approx 3000$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5\\%$): a low guess that does not double the balance in $10$ years.\n* Choice C ($10\\%$): uses simple-interest logic, $r \\cdot 10 = 100\\%$, which ignores compounding.\n* Choice D ($20\\%$): far too high — it would more than double the balance.\n\n**Test Day Takeaway:** Rule of 72: doubling time $\\approx \\frac{72}{r}$ with $r$ in percent. Here $\\frac{72}{10} = 7.2$, matching a doubling in $10$ years.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'compound-interest', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-277', domain: 'advanced-math', skills: ['exponential-functions'], difficulty: 'hard', type: 'multiple-choice',
    question: 'An investment grows by $5\\%$ per year, compounded annually. Approximately how many years does it take for the investment to double in value?',
    choices: [{ id: 'A', text: '$5$ years' }, { id: 'B', text: '$10$ years' }, { id: 'C', text: '$14.2$ years' }, { id: 'D', text: '$20$ years' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Compound Interest**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Rule of 72: doubling time $\\approx \\frac{72}{r} = \\frac{72}{5} = 14.4$ years, which rounds to choice C, $14.2$ years.\n\n**The Full Solution:**\nStep 1: Doubling means the growth factor reaches $2$: $1.05^t = 2$.\nStep 2: Take logs of both sides: $t \\cdot \\ln(1.05) = \\ln 2$.\nStep 3: Solve: $t = \\frac{\\ln 2}{\\ln 1.05} \\approx \\frac{0.6931}{0.04879} \\approx 14.2$ years.\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): just echoes the rate $r=5$; that's the percent per year, not the years to double.\n* Choice B ($10$): a round guess with no derivation — too fast for $5\\%$ growth.\n* Choice D ($20$): the simple-interest answer, $\\frac{100\\%}{5\\%} = 20$. Compound growth doubles faster than simple, so $20$ is too long.\n\n**Test Day Takeaway:** Rule of 72 gives a fast doubling estimate: $t_{\\text{double}} \\approx \\frac{72}{r}$ with $r$ as a percent — no logarithm needed.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'compound-interest', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-278', domain: 'advanced-math', skills: ['exponential-functions'], difficulty: 'hard', type: 'fill-in',
    question: 'An investment of $\\$2{,}000$ grows to $\\$2{,}205$ after $2$ years at a constant compound interest rate $r$, expressed as a percent. What is the value of $r$?',
    correctAnswer: '5',
    explanation: "**SAT Pattern: Compound Interest**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~15s):** $\\frac{2205}{2000} = 1.1025 = \\left(1 + \\frac{r}{100}\\right)^2$, and $1.1025 = 1.05^2$, so $1 + \\frac{r}{100} = 1.05$ and $r = 5$.\n\n**The Full Solution:**\nStep 1: Set up the compound-interest model: $2000\\left(1 + \\frac{r}{100}\\right)^2 = 2205$.\nStep 2: Divide by $2000$: $\\left(1 + \\frac{r}{100}\\right)^2 = \\frac{2205}{2000} = 1.1025$.\nStep 3: Take the square root: $1 + \\frac{r}{100} = \\sqrt{1.1025} = 1.05$.\nStep 4: So $\\frac{r}{100} = 0.05$, giving $r = 5$.\n\nVerification: $2000 \\cdot 1.05^2 = 2000 \\cdot 1.1025 = 2205$. $\\checkmark$\n\n**Common Mistakes:** Reporting $10$ by treating the factor as $1.1$ instead of $1.1025$ (dropping the square); reporting $0.05$ by forgetting to convert the decimal rate to a percent.\n\n**Test Day Takeaway:** With a $2$-year period, take a square root, not a log. Watch for clean perfect squares like $1.1025 = 1.05^2$.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'compound-interest', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── RATIONAL EQUATION WITH EXTRANEOUS SOLUTION (bank-am-279..286) ───────
  // Solving a rational equation can produce candidates that fail the original
  // (denominator-zero). The pattern: solve, check, identify extraneous roots.
  { id: 'bank-am-279', domain: 'advanced-math', skills: ['rational-expressions'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What is the solution to the equation $\\dfrac{x^2 - 9}{x - 3} = 6$?',
    choices: [{ id: 'A', text: '$x = -3$' }, { id: 'B', text: '$x = 3$' }, { id: 'C', text: '$x = 6$' }, { id: 'D', text: 'No solution' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Rational Equation with Extraneous Solution**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Factor the top: $\\frac{(x+3)(x-3)}{x-3} = 6$. For $x \\neq 3$ this is $x + 3 = 6$, so $x = 3$ — but $x = 3$ is excluded. No solution.\n\n**The Full Solution:**\nStep 1: The expression $\\frac{x^2 - 9}{x - 3}$ is undefined at $x = 3$, so the domain requires $x \\neq 3$.\nStep 2: Factor: $\\frac{(x+3)(x-3)}{x-3} = x + 3$ for $x \\neq 3$.\nStep 3: Set $x + 3 = 6$, giving $x = 3$ — exactly the excluded value.\n\nSo the only algebraic candidate is barred by the domain, and there is no valid solution. At $x = 3$ the original expression is $\\frac{0}{0}$, undefined.\n\n**Why the wrong answers are tempting:**\n* Choice A ($x=-3$): makes the numerator zero, but then the expression equals $\\frac{0}{-6} = 0 \\neq 6$.\n* Choice B ($x=3$): the extraneous root the algebra produces — the domain rules it out.\n* Choice C ($x=6$): an unrelated value that doesn't satisfy the equation.\n\n**Test Day Takeaway:** Always check a solution against the original denominators. Canceling a factor can hide a domain restriction.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'rational-equation-with-extraneous-solution', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-280', domain: 'advanced-math', skills: ['rational-expressions'], difficulty: 'easy', type: 'multiple-choice',
    question: 'How many solutions does the equation $\\dfrac{x + 5}{x - 2} = \\dfrac{7}{x - 2}$ have?',
    choices: [{ id: 'A', text: '$0$' }, { id: 'B', text: '$1$' }, { id: 'C', text: '$2$' }, { id: 'D', text: 'infinitely many' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Rational Equation with Extraneous Solution**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Multiply both sides by $(x-2)$: $x + 5 = 7$, so $x = 2$. But $x = 2$ makes the denominator zero — extraneous. Zero valid solutions.\n\n**The Full Solution:**\nStep 1: Both fractions are undefined at $x = 2$, so the domain requires $x \\neq 2$.\nStep 2: Multiply through by $(x-2)$: $x + 5 = 7$.\nStep 3: Solve: $x = 2$ — the excluded value.\n\nThe lone algebraic root is barred by the domain, so the equation has $0$ valid solutions.\n\n**Why the wrong answers are tempting:**\n* Choice B ($1$): counts the algebraic root and forgets to check the domain.\n* Choice C ($2$): confuses the count of solutions with the value $x = 2$.\n* Choice D (infinitely many): would require an identity; both sides reduce to a single linear equation, not an identity.\n\n**Test Day Takeaway:** When the only algebraic root equals a domain restriction, the equation has zero solutions.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'rational-equation-with-extraneous-solution', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-281', domain: 'advanced-math', skills: ['rational-expressions'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What is the solution set of the equation $\\dfrac{1}{x - 3} + \\dfrac{2}{x + 3} = \\dfrac{6}{x^2 - 9}$?',
    choices: [{ id: 'A', text: '$\\{3\\}$' }, { id: 'B', text: '$\\{-3\\}$' }, { id: 'C', text: '$\\{3, -3\\}$' }, { id: 'D', text: 'No solution' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Rational Equation with Extraneous Solution**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Multiply by $x^2 - 9 = (x-3)(x+3)$: $(x+3) + 2(x-3) = 6 \\Rightarrow 3x - 3 = 6 \\Rightarrow x = 3$. But $x = 3$ is excluded — extraneous. No solution.\n\n**The Full Solution:**\nStep 1: The denominators require $x \\neq 3$ and $x \\neq -3$.\nStep 2: Multiply through by $(x-3)(x+3) = x^2 - 9$: $(x+3) + 2(x-3) = 6$.\nStep 3: Expand: $x + 3 + 2x - 6 = 6$, so $3x - 3 = 6$.\nStep 4: Solve: $3x = 9$, giving $x = 3$ — one of the excluded values.\n\nThe only candidate root violates the domain, so there is no valid solution.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\{3\\}$): reports the extraneous root without checking the domain.\n* Choice B ($\\{-3\\}$): the other excluded value; it makes a denominator zero, not a solution.\n* Choice C ($\\{3, -3\\}$): collects both excluded values, neither of which is valid.\n\n**Test Day Takeaway:** Identify domain restrictions before solving. When the algebraic root lands in the excluded set, the answer is \"no solution.\"",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'rational-equation-with-extraneous-solution', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-282', domain: 'advanced-math', skills: ['rational-expressions'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Solve for $x$: $\\dfrac{x + 4}{x - 1} = \\dfrac{5}{x - 1}$',
    choices: [{ id: 'A', text: '$x = -1$' }, { id: 'B', text: '$x = 1$' }, { id: 'C', text: '$x = 5$' }, { id: 'D', text: 'No solution' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Rational Equation with Extraneous Solution**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Same denominator on both sides, so equate numerators: $x + 4 = 5$, giving $x = 1$. But $x = 1$ makes the denominator zero — extraneous. No solution.\n\n**The Full Solution:**\nStep 1: Both sides are undefined at $x = 1$, so the domain requires $x \\neq 1$.\nStep 2: Multiply through by $(x-1)$: $x + 4 = 5$.\nStep 3: Solve: $x = 1$ — the excluded value.\n\nThe only candidate root is barred by the domain, so there is no valid solution.\n\n**Why the wrong answers are tempting:**\n* Choice A ($x=-1$): a sign slip while isolating $x$ from $x + 4 = 5$.\n* Choice B ($x=1$): the extraneous algebraic root the domain excludes.\n* Choice C ($x=5$): copies the right-hand-side numerator instead of solving.\n\n**Test Day Takeaway:** When both sides share a denominator you can equate numerators, but the domain restriction still rules out matching values.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'rational-equation-with-extraneous-solution', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-283', domain: 'advanced-math', skills: ['rational-expressions'], difficulty: 'medium', type: 'fill-in',
    question: 'What is the value of $x$ that satisfies the equation $\\dfrac{x}{x - 4} + \\dfrac{4}{x - 4} = 3$, provided that $x$ is in the domain of the original expression?',
    correctAnswer: '8',
    explanation: "**SAT Pattern: Rational Equation with Extraneous Solution**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~10s):** Combine the like-denominator terms: $\\frac{x+4}{x-4} = 3$, so $x + 4 = 3(x-4) \\Rightarrow 16 = 2x \\Rightarrow x = 8$.\n\n**The Full Solution:**\nStep 1: The denominators require $x \\neq 4$.\nStep 2: Add the fractions: $\\frac{x + 4}{x - 4} = 3$.\nStep 3: Cross-multiply: $x + 4 = 3(x - 4)$.\nStep 4: Expand and solve: $x + 4 = 3x - 12 \\Rightarrow 16 = 2x \\Rightarrow x = 8$.\nSince $8 \\neq 4$, the solution is valid.\n\nVerification: $\\frac{8 + 4}{8 - 4} = \\frac{12}{4} = 3$. $\\checkmark$\n\n**Common Mistakes:** Reporting $4$ — that's the excluded value, which makes the denominator zero; reporting $-8$ from a sign error in the cross-multiplication.\n\n**Test Day Takeaway:** Not every rational equation has an extraneous root, but always test the answer against the domain. Here $8 \\neq 4$, so it survives.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'rational-equation-with-extraneous-solution', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-284', domain: 'advanced-math', skills: ['rational-expressions'], difficulty: 'medium', type: 'multiple-choice',
    question: 'For which value of $x$ is the equation $\\dfrac{2x}{x - 5} = \\dfrac{10}{x - 5}$ undefined?',
    choices: [{ id: 'A', text: '$x = 0$' }, { id: 'B', text: '$x = 2$' }, { id: 'C', text: '$x = 5$' }, { id: 'D', text: '$x = 10$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Rational Equation with Extraneous Solution**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** A rational expression is undefined where its denominator is zero: $x - 5 = 0$ gives $x = 5$.\n\n**The Full Solution:**\nStep 1: Both fractions share the denominator $x - 5$.\nStep 2: That denominator is zero when $x - 5 = 0$, i.e. $x = 5$, where both fractions are undefined.\n\nNote: solving $\\frac{2x}{x-5} = \\frac{10}{x-5}$ algebraically gives $2x = 10$, so $x = 5$ — the same excluded value, meaning the equation also has no valid solution. But the question asks only where the expression is undefined.\n\n**Why the wrong answers are tempting:**\n* Choice A ($x=0$): makes the left numerator zero, not the denominator — the expression is defined and equals $0$ there.\n* Choice B ($x=2$): an unrelated value.\n* Choice D ($x=10$): an unrelated value.\n\n**Test Day Takeaway:** \"Undefined\" for a rational expression means a zero denominator. A zero numerator is fine — the expression just equals $0$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'rational-equation-with-extraneous-solution', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-285', domain: 'advanced-math', skills: ['rational-expressions'], difficulty: 'hard', type: 'multiple-choice',
    question: 'What is the solution to the equation $\\dfrac{3}{x - 2} - \\dfrac{2}{x + 2} = \\dfrac{20}{x^2 - 4}$?',
    choices: [{ id: 'A', text: '$x = -2$' }, { id: 'B', text: '$x = 2$' }, { id: 'C', text: '$x = 10$' }, { id: 'D', text: 'No solution' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Rational Equation with Extraneous Solution**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Multiply by $(x-2)(x+2) = x^2 - 4$: $3(x+2) - 2(x-2) = 20 \\Rightarrow x + 10 = 20 \\Rightarrow x = 10$. Since $10 \\neq \\pm 2$, it's valid.\n\n**The Full Solution:**\nStep 1: The denominators require $x \\neq 2$ and $x \\neq -2$, and $x^2 - 4 = (x-2)(x+2)$.\nStep 2: Multiply through by $(x-2)(x+2)$: $3(x+2) - 2(x-2) = 20$.\nStep 3: Expand: $3x + 6 - 2x + 4 = 20$, so $x + 10 = 20$.\nStep 4: Solve: $x = 10$ — outside the excluded set, so it's valid.\n\nVerification: $\\frac{3}{8} - \\frac{2}{12} = \\frac{9}{24} - \\frac{4}{24} = \\frac{5}{24}$, and $\\frac{20}{100 - 4} = \\frac{20}{96} = \\frac{5}{24}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x=-2$): an excluded value that makes a denominator zero.\n* Choice B ($x=2$): the other excluded value.\n* Choice D (No solution): tempting because two restrictions appear in the stem, but the root $x = 10$ avoids both.\n\n**Test Day Takeaway:** After solving, check the candidate against the domain. A restriction only kills a root when the root equals an excluded value.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'rational-equation-with-extraneous-solution', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-286', domain: 'advanced-math', skills: ['rational-expressions'], difficulty: 'hard', type: 'fill-in',
    question: "Which value of $x$, if any, is an EXTRANEOUS solution to the equation $\\dfrac{x^2 - 25}{x - 5} = 10$? (Report the value of $x$; if none, report $0$.)",
    correctAnswer: '5',
    explanation: "**SAT Pattern: Rational Equation with Extraneous Solution**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~10s):** Factor: $\\frac{(x+5)(x-5)}{x-5} = 10 \\Rightarrow x + 5 = 10 \\Rightarrow x = 5$. But $x = 5$ is excluded — that makes it extraneous.\n\n**The Full Solution:**\nStep 1: The expression $\\frac{x^2 - 25}{x - 5}$ is undefined at $x = 5$, so the domain requires $x \\neq 5$.\nStep 2: Factor and cancel: $\\frac{(x+5)(x-5)}{x-5} = x + 5$ for $x \\neq 5$.\nStep 3: Set $x + 5 = 10$, giving $x = 5$ — the one excluded value.\n\nSo $x = 5$ is the extraneous solution: the algebra produces it, but the domain forbids it.\n\n**Common Mistakes:** Reporting $0$ (\"none\") by forgetting that the canceled factor $x - 5$ still restricts the domain.\n\n**Test Day Takeaway:** Extraneous solutions are exactly the algebraic roots that violate the original domain restriction. Factor and cancel, but never drop the restriction.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'rational-equation-with-extraneous-solution', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── P.A. FACTOR BY GROUPING (bank-am-287..290) ──────────────────────────
  // Group terms to extract common factors; technique for factoring polynomials
  // that have no overall GCF.
  { id: 'bank-am-287', domain: 'advanced-math', skills: ['factoring'], difficulty: 'easy', type: 'multiple-choice',
    question: 'Which of the following is the factored form of $x^3 + 2x^2 + 3x + 6$?',
    choices: [{ id: 'A', text: '$(x + 2)(x^2 + 3)$' }, { id: 'B', text: '$(x + 3)(x^2 + 2)$' }, { id: 'C', text: '$x(x^2 + 2x + 3) + 6$' }, { id: 'D', text: '$(x + 1)(x^2 + 6)$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Factor by Grouping**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Group in pairs: $(x^3 + 2x^2) + (3x + 6) = x^2(x+2) + 3(x+2) = (x+2)(x^2+3)$.\n\n**The Full Solution:**\nStep 1: Split into pairs: $(x^3 + 2x^2) + (3x + 6)$.\nStep 2: Factor each pair: $x^2(x + 2) + 3(x + 2)$.\nStep 3: Both terms share $(x+2)$; factor it out: $(x + 2)(x^2 + 3)$.\n\nVerification: $(x+2)(x^2+3) = x^3 + 3x + 2x^2 + 6 = x^3 + 2x^2 + 3x + 6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($(x+3)(x^2+2)$): expands to $x^3 + 2x + 3x^2 + 6$, the wrong middle terms.\n* Choice C ($x(x^2+2x+3)+6$): incomplete — that's a partial factor, not a product of factors.\n* Choice D ($(x+1)(x^2+6)$): expands to $x^3 + 6x + x^2 + 6$, not the original.\n\n**Test Day Takeaway:** For a four-term polynomial, group into pairs, factor each pair, then pull out the shared binomial.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'factor-by-grouping', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-288', domain: 'advanced-math', skills: ['factoring'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Which expression is equivalent to $2x^3 - 3x^2 + 8x - 12$?',
    choices: [{ id: 'A', text: '$(x - 3)(2x^2 + 4)$' }, { id: 'B', text: '$(2x - 3)(x^2 + 4)$' }, { id: 'C', text: '$(x + 4)(2x^2 - 3)$' }, { id: 'D', text: '$(2x + 3)(x^2 - 4)$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Factor by Grouping**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Group in pairs: $(2x^3 - 3x^2) + (8x - 12) = x^2(2x-3) + 4(2x-3) = (2x-3)(x^2+4)$.\n\n**The Full Solution:**\nStep 1: Split into pairs: $(2x^3 - 3x^2) + (8x - 12)$.\nStep 2: Factor each pair: $x^2(2x - 3) + 4(2x - 3)$.\nStep 3: Both terms share $(2x - 3)$; factor it out: $(2x - 3)(x^2 + 4)$.\n\nVerification: $(2x-3)(x^2+4) = 2x^3 + 8x - 3x^2 - 12 = 2x^3 - 3x^2 + 8x - 12$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(x-3)(2x^2+4)$): expands to $2x^3 + 4x - 6x^2 - 12$, the wrong $x^2$ and $x$ terms.\n* Choice C ($(x+4)(2x^2-3)$): expands to $2x^3 - 3x + 8x^2 - 12$, not the original.\n* Choice D ($(2x+3)(x^2-4)$): expands to $2x^3 - 8x + 3x^2 - 12$, wrong signs throughout the middle.\n\n**Test Day Takeaway:** When factoring each pair, choose the factor that leaves the same binomial in both halves — here $(2x-3)$ — so it can be pulled out.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'factor-by-grouping', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-289', domain: 'advanced-math', skills: ['factoring'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Which is a factor of $x^3 - 5x^2 + 4x - 20$?',
    choices: [{ id: 'A', text: '$x + 5$' }, { id: 'B', text: '$x - 5$' }, { id: 'C', text: '$x + 4$' }, { id: 'D', text: '$x - 4$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Factor by Grouping**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Group the first two and last two terms: $x^2(x-5)+4(x-5)=(x-5)(x^2+4)$. The binomial factor is $x-5$.\n\n**The Full Solution:**\nStep 1: Split into pairs: $(x^3-5x^2)+(4x-20)$.\nStep 2: Pull the GCF from each pair: $x^2(x-5)+4(x-5)$.\nStep 3: Both pairs share $(x-5)$, so factor it out: $(x-5)(x^2+4)$.\nStep 4: Check: $(x-5)(x^2+4)=x^3+4x-5x^2-20=x^3-5x^2+4x-20$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x+5$): flips the sign of the grouping factor.\n* Choice C ($x+4$): treats $4$ from $x^2+4$ as a binomial root; $x^2+4$ has no real factor.\n* Choice D ($x-4$): pulls the constant from the wrong pair.\n\n**Test Day Takeaway:** Once a cubic groups cleanly, each binomial that comes out is a factor (divisor) of the original polynomial.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'factor-by-grouping', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-290', domain: 'advanced-math', skills: ['factoring'], difficulty: 'hard', type: 'multiple-choice',
    question: 'Which of the following is equivalent to $6x^3 + 9x^2 - 4x - 6$?',
    choices: [{ id: 'A', text: '$(3x - 2)(2x^2 + 3)$' }, { id: 'B', text: '$(2x + 3)(3x^2 - 2)$' }, { id: 'C', text: '$(3x + 2)(2x^2 - 3)$' }, { id: 'D', text: '$(2x - 3)(3x^2 + 2)$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Factor by Grouping**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Group: $(6x^3+9x^2)+(-4x-6)=3x^2(2x+3)-2(2x+3)=(2x+3)(3x^2-2)$.\n\n**The Full Solution:**\nStep 1: Pair the terms: $(6x^3+9x^2)+(-4x-6)$.\nStep 2: First pair: $3x^2(2x+3)$. Second pair: factor out $-2$ to match the binomial: $-2(2x+3)$.\nStep 3: Both share $(2x+3)$: $(2x+3)(3x^2-2)$.\nStep 4: Check: $(2x+3)(3x^2-2)=6x^3-4x+9x^2-6=6x^3+9x^2-4x-6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(3x-2)(2x^2+3)$): mixes up which factor carries the cubic term.\n* Choice C ($(3x+2)(2x^2-3)$): wrong sign and wrong split of coefficients.\n* Choice D ($(2x-3)(3x^2+2)$): both signs flipped from the correct factorization.\n\n**Test Day Takeaway:** When the last pair is negative, factor out a negative ($-4x-6=-2(2x+3)$) so the binomial matches the first pair exactly.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'factor-by-grouping', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── P.A. COMPLETING THE SQUARE (bank-am-291..298) — new canonical ────────
  // Forward direction: ax² + bx + c → a(x − h)² + k. Distinct from
  // vertex-form-to-standard-form (reverse direction; we already have that).
  { id: 'bank-am-291', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'easy', type: 'multiple-choice',
    question: 'Which expression is equivalent to $x^2 + 6x + 5$ in vertex form?',
    choices: [{ id: 'A', text: '$(x + 3)^2 - 4$' }, { id: 'B', text: '$(x + 3)^2 + 4$' }, { id: 'C', text: '$(x + 6)^2 - 31$' }, { id: 'D', text: '$(x - 3)^2 - 4$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Completing the Square**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Half of $6$ is $3$, and $3^2=9$. Write $x^2+6x+9-9+5=(x+3)^2-4$.\n\n**The Full Solution:**\nStep 1: To complete the square on $x^2+6x$, add and subtract $\\left(\\frac{6}{2}\\right)^2=9$.\nStep 2: $x^2+6x+9-9+5=(x+3)^2-4$.\nStep 3: Check by expanding: $(x+3)^2-4=x^2+6x+9-4=x^2+6x+5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($(x+3)^2+4$): wrong sign on the constant; you must subtract the $9$ you added.\n* Choice C ($(x+6)^2-31$): used $6$ inside the binomial instead of half of $6$.\n* Choice D ($(x-3)^2-4$): wrong sign inside the binomial.\n\n**Test Day Takeaway:** To complete the square on $x^2+bx$, add $\\left(\\frac{b}{2}\\right)^2$ inside, then subtract the same amount so the value is unchanged.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'completing-the-square', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-292', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'easy', type: 'multiple-choice',
    question: 'Which of the following is equivalent to $x^2 - 8x + 10$?',
    choices: [{ id: 'A', text: '$(x - 4)^2 + 26$' }, { id: 'B', text: '$(x - 4)^2 - 6$' }, { id: 'C', text: '$(x - 8)^2 - 54$' }, { id: 'D', text: '$(x + 4)^2 - 6$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Completing the Square**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Half of $-8$ is $-4$, and $(-4)^2=16$. Write $x^2-8x+16-16+10=(x-4)^2-6$.\n\n**The Full Solution:**\nStep 1: Add and subtract $\\left(\\frac{-8}{2}\\right)^2=16$ on $x^2-8x$.\nStep 2: $x^2-8x+16-16+10=(x-4)^2-6$.\nStep 3: Check: $(x-4)^2-6=x^2-8x+16-6=x^2-8x+10$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(x-4)^2+26$): added $16$ instead of subtracting it back.\n* Choice C ($(x-8)^2-54$): used $-8$ inside the binomial instead of half of $-8$.\n* Choice D ($(x+4)^2-6$): wrong sign on the linear term.\n\n**Test Day Takeaway:** For $x^2+bx$, the perfect square is $\\left(x+\\frac{b}{2}\\right)^2$ — the sign of $b$ carries straight through.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'completing-the-square', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-293', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'medium', type: 'fill-in',
    question: 'When $f(x) = x^2 + 12x - 4$ is written in the form $(x + a)^2 + b$, what is the value of $b$?',
    correctAnswer: '-40',
    explanation: "**SAT Pattern: Completing the Square**\n\n**The correct answer is $-40$.**\n\n**The Fast Way (~15s):** Half of $12$ is $6$, and $6^2=36$. Then $x^2+12x+36-36-4=(x+6)^2-40$, so $b=-40$.\n\n**The Full Solution:**\nStep 1: Add and subtract $\\left(\\frac{12}{2}\\right)^2=36$ on $x^2+12x$.\nStep 2: $x^2+12x+36-36-4=(x+6)^2-40$.\nStep 3: Matching $(x+a)^2+b$, the constant is $b=-40$.\n\n**Common Mistakes:** Reporting $a=6$ instead of $b$; forgetting the original constant $-4$ and reporting $-36$; sign-slipping to $+40$.\n\n**Test Day Takeaway:** After completing the square, $b$ is the leftover constant: $b=c-\\left(\\frac{b_{\\text{linear}}}{2}\\right)^2$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'completing-the-square', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-294', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Which expression is equivalent to $2x^2 - 12x + 5$?',
    choices: [{ id: 'A', text: '$2(x - 3)^2 - 13$' }, { id: 'B', text: '$2(x - 3)^2 + 5$' }, { id: 'C', text: '$(x - 6)^2 + 5$' }, { id: 'D', text: '$2(x - 6)^2 - 67$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Completing the Square**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Factor $2$ from the $x$ terms: $2(x^2-6x)+5$. Half of $-6$ is $-3$, so $2(x^2-6x+9-9)+5=2(x-3)^2-18+5=2(x-3)^2-13$.\n\n**The Full Solution:**\nStep 1: Factor the leading coefficient out of the $x$ terms only: $2(x^2-6x)+5$.\nStep 2: Inside the parentheses, $\\left(\\frac{-6}{2}\\right)^2=9$: $2(x^2-6x+9-9)+5$.\nStep 3: The $-9$ is inside the factor of $2$, so it leaves as $2\\cdot(-9)=-18$: $2(x-3)^2-18+5=2(x-3)^2-13$.\nStep 4: Check: $2(x-3)^2-13=2x^2-12x+18-13=2x^2-12x+5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($2(x-3)^2+5$): forgot to subtract $2\\cdot9=18$.\n* Choice C ($(x-6)^2+5$): never factored out the $2$.\n* Choice D ($2(x-6)^2-67$): used $-6$ inside the binomial instead of half of $-6$.\n\n**Test Day Takeaway:** When the leading coefficient $\\neq1$, factor $a$ out of the $x$ terms first, complete the square inside, then multiply the subtracted constant by $a$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'completing-the-square', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-295', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = x^2 - 10x + 21$. What is the minimum value of $f(x)$?',
    choices: [{ id: 'A', text: '$-25$' }, { id: 'B', text: '$-4$' }, { id: 'C', text: '$0$' }, { id: 'D', text: '$21$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Completing the Square**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Complete the square: $(x-5)^2-25+21=(x-5)^2-4$. The minimum equals the constant, $-4$ (reached at $x=5$).\n\n**The Full Solution:**\nStep 1: Add and subtract $\\left(\\frac{-10}{2}\\right)^2=25$: $x^2-10x+25-25+21$.\nStep 2: $=(x-5)^2-4$.\nStep 3: A parabola opening up has its minimum at the vertex, so the least value of $f(x)$ is $-4$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-25$): forgot to fold in the $+21$.\n* Choice C ($0$): assumed the minimum of any squared term is $0$.\n* Choice D ($21$): reported the constant $c$, which is $f(0)$, not the minimum.\n\n**Test Day Takeaway:** In vertex form $f(x)=(x-h)^2+k$, the minimum of an upward parabola is $k$, reached at $x=h$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'completing-the-square', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-296', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'hard', type: 'fill-in',
    question: 'The function $g(x) = -3x^2 + 12x - 7$ has its maximum value at $x = c$. What is the value of $c$?',
    correctAnswer: '2',
    explanation: "**SAT Pattern: Completing the Square**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~15s):** The vertex sits at $x=-\\frac{b}{2a}=-\\frac{12}{2(-3)}=2$, so $c=2$.\n\n**The Full Solution:**\nStep 1: Factor $-3$ from the $x$ terms: $-3(x^2-4x)-7$.\nStep 2: Complete the square inside: $\\left(\\frac{-4}{2}\\right)^2=4$, giving $-3(x^2-4x+4-4)-7$.\nStep 3: $=-3(x-2)^2+12-7=-3(x-2)^2+5$. The vertex is at $x=2$.\nStep 4: Since $a=-3<0$, the parabola opens down, so this vertex is the maximum, located at $x=2$.\n\n**Common Mistakes:** Reporting the maximum value $5$ instead of the location $x=2$; sign-slipping on $-\\frac{b}{2a}$ and getting $x=-2$.\n\n**Test Day Takeaway:** A negative leading coefficient means the parabola opens down, so the vertex is the maximum; its $x$-coordinate is $-\\frac{b}{2a}$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'completing-the-square', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-297', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'hard', type: 'multiple-choice',
    question: 'When $4x^2 + 24x + 7$ is rewritten in the form $a(x + b)^2 + c$, what is the value of $a + b + c$?',
    choices: [{ id: 'A', text: '$-22$' }, { id: 'B', text: '$-15$' }, { id: 'C', text: '$-19$' }, { id: 'D', text: '$33$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Completing the Square**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Factor $4$ from the $x$ terms: $4(x^2+6x)+7$. Half of $6$ is $3$, so $4(x^2+6x+9-9)+7=4(x+3)^2-36+7=4(x+3)^2-29$. Then $a+b+c=4+3+(-29)=-22$.\n\n**The Full Solution:**\nStep 1: Factor the leading coefficient from the $x$ terms: $4(x^2+6x)+7$.\nStep 2: Inside, $\\left(\\frac{6}{2}\\right)^2=9$: $4(x^2+6x+9-9)+7$.\nStep 3: The $-9$ is multiplied by $4$ on the way out: $4(x+3)^2-4(9)+7=4(x+3)^2-29$.\nStep 4: So $a=4$, $b=3$, $c=-29$, and $a+b+c=4+3-29=-22$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-15$): subtracted only $9$ instead of $4\\cdot9=36$ when pulling the constant out.\n* Choice C ($-19$): an arithmetic slip in the constant term.\n* Choice D ($33$): forgot to subtract the completion constant entirely.\n\n**Test Day Takeaway:** When $a\\neq1$, the amount you subtract back is $a\\cdot\\left(\\frac{b_{\\text{linear}}}{2}\\right)^2$, not just $\\left(\\frac{b_{\\text{linear}}}{2}\\right)^2$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'completing-the-square', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-298', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The graph of $y = x^2 + bx + c$ has its vertex at $(4, -7)$. What is the value of $b$?',
    choices: [{ id: 'A', text: '$-8$' }, { id: 'B', text: '$-4$' }, { id: 'C', text: '$4$' }, { id: 'D', text: '$8$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Completing the Square**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** A vertex at $(4,-7)$ means the vertex form is $(x-4)^2-7$. Expanding gives $x^2-8x+9$, so $b=-8$.\n\n**The Full Solution:**\nStep 1: With $a=1$ and vertex $(h,k)=(4,-7)$, write $y=(x-4)^2-7$.\nStep 2: Expand: $(x-4)^2-7=x^2-8x+16-7=x^2-8x+9$.\nStep 3: Compare to $x^2+bx+c$: $b=-8$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-4$): used $-h$ instead of $-2h$ for the linear coefficient.\n* Choice C ($4$): right magnitude on the halving but wrong sign.\n* Choice D ($8$): dropped the negative sign entirely.\n\n**Test Day Takeaway:** For $y=x^2+bx+c$ with vertex $(h,k)$, the linear coefficient is $b=-2h$, since $(x-h)^2=x^2-2hx+h^2$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'completing-the-square', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  // ─── P.B. POLYNOMIAL REMAINDER THEOREM (bank-am-299..306) — new canonical ─
  // p(a) = remainder when p(x) is divided by (x − a).
  { id: 'bank-am-299', domain: 'advanced-math', skills: ['polynomials'], difficulty: 'easy', type: 'multiple-choice',
    question: 'When the polynomial $p(x) = x^3 - 4x + 5$ is divided by $(x - 2)$, what is the remainder?',
    choices: [{ id: 'A', text: '$-5$' }, { id: 'B', text: '$0$' }, { id: 'C', text: '$5$' }, { id: 'D', text: '$13$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Polynomial Remainder Theorem**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** By the Remainder Theorem, the remainder of dividing by $(x-2)$ is $p(2)=2^3-4(2)+5=8-8+5=5$.\n\n**The Full Solution:**\nStep 1: The Remainder Theorem says dividing $p(x)$ by $(x-a)$ leaves remainder $p(a)$. Here $a=2$.\nStep 2: $p(2)=(2)^3-4(2)+5$.\nStep 3: $=8-8+5=5$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): a sign flip on the final value.\n* Choice B ($0$): assumed $(x-2)$ divides evenly, but $p(2)\\neq0$.\n* Choice D ($13$): mis-evaluated, treating the middle term as $+4(2)$ instead of $-4(2)$: $8+8-3$.\n\n**Test Day Takeaway:** The remainder of $p(x)\\div(x-a)$ is just $p(a)$ — substitute, no long division needed.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'polynomial-remainder-theorem', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-300', domain: 'advanced-math', skills: ['polynomials'], difficulty: 'easy', type: 'fill-in',
    question: 'What is the remainder when $f(x) = 2x^3 + x^2 - 7$ is divided by $(x - 1)$?',
    correctAnswer: '-4',
    explanation: "**SAT Pattern: Polynomial Remainder Theorem**\n\n**The correct answer is $-4$.**\n\n**The Fast Way (~10s):** Dividing by $(x-1)$ leaves remainder $f(1)=2(1)^3+(1)^2-7=2+1-7=-4$.\n\n**The Full Solution:**\nStep 1: By the Remainder Theorem, the remainder of $f(x)\\div(x-1)$ is $f(1)$.\nStep 2: $f(1)=2(1)^3+(1)^2-7=2+1-7=-4$.\n\n**Common Mistakes:** Evaluating $f(-1)$ instead of $f(1)$; dropping a term and getting $-5$ or $-3$.\n\n**Test Day Takeaway:** Plug $a$ into $f(x)$; that value is the remainder when dividing by $(x-a)$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'polynomial-remainder-theorem', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-301', domain: 'advanced-math', skills: ['polynomials'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The polynomial $p(x) = x^3 + kx + 6$ has a remainder of $0$ when divided by $(x - 2)$. What is the value of $k$?',
    choices: [{ id: 'A', text: '$-7$' }, { id: 'B', text: '$-3$' }, { id: 'C', text: '$3$' }, { id: 'D', text: '$7$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Polynomial Remainder Theorem**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** A remainder of $0$ when dividing by $(x-2)$ means $p(2)=0$. So $2^3+2k+6=0 \\Rightarrow 8+2k+6=0 \\Rightarrow 2k=-14 \\Rightarrow k=-7$.\n\n**The Full Solution:**\nStep 1: By the Remainder Theorem, the remainder on division by $(x-2)$ equals $p(2)$. Remainder $0$ means $p(2)=0$.\nStep 2: Substitute: $p(2)=8+2k+6=14+2k$.\nStep 3: Set $14+2k=0 \\Rightarrow k=-7$, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-3$): drops the constant $+6$, solving $8+2k=0$.\n* Choice C ($3$): correct magnitude but a sign flip — gives $+7$ wrong sign, or solves $2k=14$.\n* Choice D ($7$): solves $2k=14$ instead of $2k=-14$ (sign error).\n\n**Test Day Takeaway:** Remainder $0$ on division by $(x-a)$ means $(x-a)$ is a factor — so set $p(a)=0$ and solve for the unknown.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'polynomial-remainder-theorem', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-302', domain: 'advanced-math', skills: ['polynomials'], difficulty: 'medium', type: 'multiple-choice',
    question: 'When $p(x) = x^3 + ax^2 + bx + 10$ is divided by $(x + 1)$, the remainder is $20$. Which equation must $a$ and $b$ satisfy?',
    choices: [{ id: 'A', text: '$a + b = 9$' }, { id: 'B', text: '$a - b = 11$' }, { id: 'C', text: '$a + b = 11$' }, { id: 'D', text: '$-a + b = 11$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Polynomial Remainder Theorem**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The divisor $(x+1)$ corresponds to $x=-1$, so the remainder is $p(-1)$. Compute $p(-1)=-1+a-b+10=a-b+9$ and set it equal to $20$: $a-b+9=20 \\Rightarrow a-b=11$.\n\n**The Full Solution:**\nStep 1: Rewrite $(x+1)$ as $(x-(-1))$, so the Remainder Theorem value is $p(-1)$.\nStep 2: Substitute $x=-1$: $(-1)^3+a(-1)^2+b(-1)+10=-1+a-b+10=a-b+9$.\nStep 3: That remainder equals $20$, so $a-b+9=20 \\Rightarrow a-b=11$, which is choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($a+b=9$): keeps the constant on the wrong side, forgetting the $+10$ and $-1$ combine to $+9$ on the left.\n* Choice C ($a+b=11$): adds $b$ instead of subtracting — misses that $b(-1)=-b$.\n* Choice D ($-a+b=11$): flips the sign on $a$, since $a(-1)^2=+a$, not $-a$.\n\n**Test Day Takeaway:** For divisor $(x+k)$, plug in $x=-k$. Watch the signs of each term carefully when substituting a negative value.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'polynomial-remainder-theorem', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-303', domain: 'advanced-math', skills: ['polynomials'], difficulty: 'medium', type: 'fill-in',
    question: 'If $f(x) = x^4 - 3x^3 + 2x - 1$, what is the remainder when $f(x)$ is divided by $(x - 3)$?',
    correctAnswer: '5',
    explanation: "**SAT Pattern: Polynomial Remainder Theorem**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~15s):** The remainder on division by $(x-3)$ is $f(3)$. Compute $f(3)=3^4-3(3^3)+2(3)-1=81-81+6-1=5$.\n\n**The Full Solution:**\nStep 1: By the Remainder Theorem, dividing by $(x-3)$ leaves remainder $f(3)$ — no long division needed.\nStep 2: Evaluate term by term: $3^4=81$, $3(3^3)=3 \\cdot 27=81$, $2(3)=6$.\nStep 3: Combine: $f(3)=81-81+6-1=5$.\n\n**Common Mistakes:** Mis-powering $3^4$ as $12$ (treating it as $3 \\times 4$) or dropping the $-1$ constant. Both throw off the final value.\n\n**Test Day Takeaway:** To find a remainder on division by $(x-a)$, just compute $f(a)$ — but evaluate the higher powers carefully.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'polynomial-remainder-theorem', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-304', domain: 'advanced-math', skills: ['polynomials'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A polynomial $p(x)$ leaves a remainder of $4$ when divided by $(x - 2)$ and a remainder of $-2$ when divided by $(x + 1)$. Which of the following is equal to $p(2) - p(-1)$?',
    choices: [{ id: 'A', text: '$-6$' }, { id: 'B', text: '$-2$' }, { id: 'C', text: '$2$' }, { id: 'D', text: '$6$' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Polynomial Remainder Theorem**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** The Remainder Theorem turns each divisor condition directly into a function value: $p(2)=4$ and $p(-1)=-2$. So $p(2)-p(-1)=4-(-2)=6$, which is choice D.\n\n**The Full Solution:**\nStep 1: Remainder $4$ on division by $(x-2)$ means $p(2)=4$.\nStep 2: Remainder $-2$ on division by $(x+1)$ means $p(-1)=-2$.\nStep 3: Subtract: $p(2)-p(-1)=4-(-2)=4+2=6$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): computes $p(-1)-p(2)$ — the difference in the wrong order.\n* Choice B ($-2$): reports $p(-1)$ alone instead of the difference.\n* Choice C ($2$): drops the double-negative, computing $4-2$ instead of $4-(-2)$.\n\n**Test Day Takeaway:** Each \"remainder on division by $(x-a)$\" is just the value $p(a)$. Read these problems as a free table of function values.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'polynomial-remainder-theorem', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-305', domain: 'advanced-math', skills: ['polynomials'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The polynomial $p(x) = x^3 + ax^2 + bx - 12$ has $(x - 2)$ and $(x + 3)$ as factors. What is the value of $a$?',
    choices: [{ id: 'A', text: '$-3$' }, { id: 'B', text: '$-1$' }, { id: 'C', text: '$1$' }, { id: 'D', text: '$3$' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Polynomial Remainder Theorem**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** Each factor gives a root: $p(2)=0$ and $p(-3)=0$. These become $2a+b=2$ and $3a-b=13$. Adding eliminates $b$: $5a=15 \\Rightarrow a=3$, which is choice D.\n\n**The Full Solution:**\nStep 1: $(x-2)$ a factor means $p(2)=0$: $8+4a+2b-12=0 \\Rightarrow 4a+2b=4 \\Rightarrow 2a+b=2$.\nStep 2: $(x+3)$ a factor means $p(-3)=0$: $-27+9a-3b-12=0 \\Rightarrow 9a-3b=39 \\Rightarrow 3a-b=13$.\nStep 3: Add the two equations to cancel $b$: $(2a+b)+(3a-b)=2+13 \\Rightarrow 5a=15 \\Rightarrow a=3$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): a sign error on $a$ when combining the equations.\n* Choice B ($-1$): solves for $b$ (back-substituting gives $b=-4$, but mis-tracking the target lands near here).\n* Choice C ($1$): an arithmetic slip dividing $15$ by $5$ or mis-adding the equations.\n\n**Test Day Takeaway:** Two factors give two equations in the unknown coefficients. Add or subtract to eliminate one variable in a single step.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'polynomial-remainder-theorem', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-306', domain: 'advanced-math', skills: ['polynomials'], difficulty: 'hard', type: 'fill-in',
    question: 'The polynomial $f(x) = 2x^3 - 5x^2 + ax + 6$ has $(x - 3)$ as a factor. What is the value of $a$?',
    correctAnswer: '-5',
    explanation: "**SAT Pattern: Polynomial Remainder Theorem**\n\n**The correct answer is $-5$.**\n\n**The Fast Way (~20s):** $(x-3)$ a factor means $f(3)=0$. So $2(27)-5(9)+3a+6=0 \\Rightarrow 54-45+3a+6=0 \\Rightarrow 15+3a=0 \\Rightarrow a=-5$.\n\n**The Full Solution:**\nStep 1: By the Factor Theorem, $(x-3)$ is a factor exactly when $f(3)=0$.\nStep 2: Substitute: $f(3)=2(3^3)-5(3^2)+a(3)+6=2(27)-5(9)+3a+6$.\nStep 3: Simplify the constants: $54-45+6=15$, so $15+3a=0 \\Rightarrow a=-5$.\n\n**Common Mistakes:** Mis-evaluating $2(3^3)$ as $2(9)=18$ instead of $2(27)=54$, or forgetting the $+6$ constant — both leave the wrong constant total.\n\n**Test Day Takeaway:** $(x-r)$ is a factor exactly when $f(r)=0$. Plug in $r$, collect the constants, and solve.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'polynomial-remainder-theorem', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  // ─── P.B. QUADRATIC INEQUALITY FROM CONTEXT (bank-am-307..314) ─────────────
  // From a real-world story → set up ax² + bx + c ≷ 0 → solve.
  { id: 'bank-am-307', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The height of a ball thrown vertically upward is modeled by $h(t) = -16t^2 + 64t + 6$, where $h$ is in feet and $t$ is in seconds. For which values of $t$ is the ball more than $54$ feet above the ground?',
    choices: [{ id: 'A', text: '$t < 1$' }, { id: 'B', text: '$1 < t < 3$' }, { id: 'C', text: '$0 < t < 4$' }, { id: 'D', text: '$t > 3$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Quadratic Inequality from Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Set $h(t)>54$: $-16t^2+64t+6>54 \\Rightarrow -16t^2+64t-48>0$. Divide by $-16$ (flip the sign): $t^2-4t+3<0 \\Rightarrow (t-1)(t-3)<0$. An upward parabola is negative between its roots, so $1<t<3$, which is choice B.\n\n**The Full Solution:**\nStep 1: Translate \"more than $54$ feet\" into $-16t^2+64t+6>54$.\nStep 2: Move everything to one side: $-16t^2+64t-48>0$.\nStep 3: Divide by $-16$ and flip the inequality: $t^2-4t+3<0$. Factor: $(t-1)(t-3)<0$.\nStep 4: The product is negative between the roots $t=1$ and $t=3$, giving $1<t<3$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($t<1$): takes only the region left of the smaller root.\n* Choice C ($0<t<4$): the full time the ball is airborne, not the stretch above $54$ feet.\n* Choice D ($t>3$): takes only the region right of the larger root.\n\n**Test Day Takeaway:** After factoring, an upward parabola ($a>0$) is negative between its roots and positive outside them. Dividing by a negative flips the inequality sign.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'quadratic-inequality-from-context', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-308', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A rectangular garden has length $(x + 4)$ meters and width $x$ meters. For which values of $x$ is the area of the garden more than $32$ square meters?',
    choices: [{ id: 'A', text: '$x > 4$' }, { id: 'B', text: '$x > 8$' }, { id: 'C', text: '$x < 4$' }, { id: 'D', text: '$-8 < x < 4$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Quadratic Inequality from Context**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Area $=x(x+4)>32 \\Rightarrow x^2+4x-32>0 \\Rightarrow (x+8)(x-4)>0$, true for $x<-8$ or $x>4$. A width must be positive, so $x>4$, which is choice A.\n\n**The Full Solution:**\nStep 1: Area is length times width: $x(x+4)>32$.\nStep 2: Expand and move over: $x^2+4x-32>0$.\nStep 3: Factor: $(x+8)(x-4)>0$. The product is positive outside the roots: $x<-8$ or $x>4$.\nStep 4: A side length must be positive, so discard $x<-8$, leaving $x>4$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($x>8$): misreads the root $x=4$ as $x=8$, perhaps from the $(x+8)$ factor.\n* Choice C ($x<4$): takes the interval where area is less than $32$.\n* Choice D ($-8<x<4$): the region between the roots, where the product is negative (area under $32$), and ignores the width-positive filter.\n\n**Test Day Takeaway:** Solve the algebra, then filter by context — a length or width can never be negative, so toss any solution interval with $x\\le0$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'quadratic-inequality-from-context', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-309', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'medium', type: 'fill-in',
    question: 'A projectile\'s height is given by $h(t) = -5t^2 + 30t + 10$, where $h$ is in meters and $t$ in seconds. What is the greatest integer value of $t$ for which $h(t) \\geq 50$?',
    correctAnswer: '4',
    explanation: "**SAT Pattern: Quadratic Inequality from Context**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~30s):** Set $h(t)\\ge50$: $-5t^2+30t+10\\ge50 \\Rightarrow -5t^2+30t-40\\ge0$. Divide by $-5$ (flip): $t^2-6t+8\\le0 \\Rightarrow (t-2)(t-4)\\le0$, so $2\\le t\\le4$. The greatest integer is $4$.\n\n**The Full Solution:**\nStep 1: Translate the condition: $-5t^2+30t+10\\ge50$.\nStep 2: Subtract $50$: $-5t^2+30t-40\\ge0$.\nStep 3: Divide by $-5$ and flip the inequality: $t^2-6t+8\\le0$. Factor: $(t-2)(t-4)\\le0$.\nStep 4: The product is $\\le0$ between the roots, so $2\\le t\\le4$. The largest integer in that range is $4$.\n\n**Common Mistakes:** Reporting $2$ (the lower endpoint) instead of the greatest value, or forgetting that $\\ge$ keeps the endpoint $t=4$ as a valid solution.\n\n**Test Day Takeaway:** A weak inequality ($\\le$ or $\\ge$) includes its endpoints; \"greatest integer value\" then means take the right end of the solution interval.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'quadratic-inequality-from-context', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-310', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The profit, in dollars, from selling $x$ items is $P(x) = -x^2 + 50x - 400$. For which values of $x$ is the profit positive?',
    choices: [{ id: 'A', text: '$x < 10$' }, { id: 'B', text: '$10 < x < 40$' }, { id: 'C', text: '$x > 40$' }, { id: 'D', text: '$0 < x < 50$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Quadratic Inequality from Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Set profit positive: $-x^2+50x-400>0 \\Rightarrow x^2-50x+400<0 \\Rightarrow (x-10)(x-40)<0$. An upward parabola is negative between its roots, so $10<x<40$, which is choice B.\n\n**The Full Solution:**\nStep 1: \"Profit positive\" means $P(x)>0$: $-x^2+50x-400>0$.\nStep 2: Multiply by $-1$ and flip the inequality: $x^2-50x+400<0$.\nStep 3: Factor: $(x-10)(x-40)<0$. The product is negative between the roots $x=10$ and $x=40$.\nStep 4: So profit is positive for $10<x<40$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($x<10$): takes the region left of the smaller root, where profit is negative.\n* Choice C ($x>40$): takes the region right of the larger root, also negative.\n* Choice D ($0<x<50$): uses $0$ and $50$ as if they were the break-even points, but the actual roots are $10$ and $40$.\n\n**Test Day Takeaway:** A downward parabola is positive between its roots. Flip the inequality when you multiply by a negative, then read the interval between the factors' zeros.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'quadratic-inequality-from-context', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-311', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A landscaper plans a rectangular plot where the length is $5$ meters more than twice the width. For what widths $w$ (in meters) is the area at least $50$ square meters?',
    choices: [{ id: 'A', text: '$w \\geq 2.5$' }, { id: 'B', text: '$w \\geq 5$' }, { id: 'C', text: '$w \\geq 10$' }, { id: 'D', text: '$w \\leq 5$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Quadratic Inequality from Context**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Length is $2w+5$, so Area $=w(2w+5)\\ge50 \\Rightarrow 2w^2+5w-50\\ge0 \\Rightarrow (2w-5)(w+10)\\ge0$, giving $w\\le-10$ or $w\\ge\\frac{5}{2}$. A width is positive, so $w\\ge2.5$, which is choice A.\n\n**The Full Solution:**\nStep 1: Translate the description: length $=2w+5$, so Area $=w(2w+5)$.\nStep 2: Require Area $\\ge50$: $2w^2+5w\\ge50 \\Rightarrow 2w^2+5w-50\\ge0$.\nStep 3: Factor: $(2w-5)(w+10)\\ge0$. The roots are $w=\\frac{5}{2}$ and $w=-10$; the product is non-negative outside them: $w\\le-10$ or $w\\ge\\frac{5}{2}$.\nStep 4: A width must be positive, so the answer is $w\\ge2.5$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($w\\ge5$): treats $w=5$ as the root, ignoring the leading coefficient $2$ that makes the root $\\frac{5}{2}$.\n* Choice C ($w\\ge10$): mis-reads the $w+10$ factor or makes an arithmetic slip on the root.\n* Choice D ($w\\le5$): flips the inequality direction.\n\n**Test Day Takeaway:** With a leading coefficient other than $1$, solve $(2w-5)=0$ as $w=\\frac{5}{2}$ — don't read the root straight off the constant. Then keep only the context-valid (positive) interval.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'quadratic-inequality-from-context', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-312', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A ball is dropped from a building. Its height, in meters, $t$ seconds after release is $h(t) = 80 - 5t^2$. For what value of $t$ does the ball first reach the ground?',
    choices: [{ id: 'A', text: '$2$' }, { id: 'B', text: '$4$' }, { id: 'C', text: '$8$' }, { id: 'D', text: '$16$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Quadratic Inequality from Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** \"Reaches the ground\" means height $0$: $80-5t^2=0 \\Rightarrow t^2=16 \\Rightarrow t=4$ (the positive root, since time is non-negative), which is choice B.\n\n**The Full Solution:**\nStep 1: Set $h(t)=0$: $80-5t^2=0$.\nStep 2: Solve: $5t^2=80 \\Rightarrow t^2=16 \\Rightarrow t=\\pm4$.\nStep 3: Time cannot be negative, so $t=4$ seconds.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): solves $t^2=4$, perhaps from dividing $80$ by $5$ and then by another factor incorrectly.\n* Choice C ($8$): takes $\\frac{80}{5}=16$ and halves it, or otherwise skips the square root.\n* Choice D ($16$): stops at $t^2=16$ and reports that instead of $\\sqrt{16}=4$.\n\n**Test Day Takeaway:** \"Strikes the ground\" or \"first reaches the ground\" means solve $h(t)=0$, then keep the positive root.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'quadratic-inequality-from-context', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-313', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A company\'s daily revenue is modeled by $R(p) = -2p^2 + 80p$, where $p$ is the price per item in dollars. What is the range of prices for which revenue exceeds $\\$600$?',
    choices: [{ id: 'A', text: '$p < 10$' }, { id: 'B', text: '$10 < p < 30$' }, { id: 'C', text: '$p > 30$' }, { id: 'D', text: '$0 < p < 40$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Quadratic Inequality from Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Set $R(p)>600$, divide out the $-2$ (flip the sign), and factor: $p^2-40p+300<0 \\Rightarrow (p-10)(p-30)<0$. The product is negative between the roots, so $10<p<30$.\n\n**The Full Solution:**\nStep 1: Write the inequality: $-2p^2+80p>600$.\nStep 2: Move everything to one side: $-2p^2+80p-600>0$. Divide by $-2$ and flip: $p^2-40p+300<0$.\nStep 3: Factor: $(p-10)(p-30)<0$. A product of two factors is negative only when one is positive and the other negative, which happens strictly between the roots.\nStep 4: So $10<p<30$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($p<10$): the region to the left of both roots, where the parabola is positive (revenue is below $\\$600$, not above).\n* Choice C ($p>30$): the region to the right of both roots — also outside the between-roots band.\n* Choice D ($0<p<40$): the full range where revenue is positive ($R>0$), not where it exceeds $\\$600$.\n\n**Test Day Takeaway:** For a downward parabola, \"value exceeds $k$\" is the region BETWEEN the two roots. Factor, find the roots, and read off the interval between them.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'quadratic-inequality-from-context', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-314', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'medium', type: 'fill-in',
    question: 'A rectangle has width $x$ and length $(x + 6)$. For what integer values of $x$ is the area between $40$ and $112$ square units, inclusive?',
    correctAnswer: '5',
    explanation: "**SAT Pattern: Quadratic Inequality from Context**\n\n**The correct answer is $5$.** (Any integer in $4$ to $8$ works; one is required.)\n\n**The Fast Way (~30s):** Solve $40 \\le x(x+6) \\le 112$ as two pieces. Lower bound: $x^2+6x-40 \\ge 0 \\Rightarrow (x+10)(x-4) \\ge 0 \\Rightarrow x \\ge 4$ (width must be positive). Upper bound: $x^2+6x-112 \\le 0 \\Rightarrow (x+14)(x-8) \\le 0 \\Rightarrow x \\le 8$. So $4 \\le x \\le 8$; pick any integer, e.g. $5$.\n\n**The Full Solution:**\nStep 1: Area is $x(x+6)=x^2+6x$. The condition is $40 \\le x^2+6x \\le 112$.\nStep 2: Lower side: $x^2+6x-40 \\ge 0$ factors to $(x+10)(x-4) \\ge 0$. Since $x>0$ in context, this gives $x \\ge 4$.\nStep 3: Upper side: $x^2+6x-112 \\le 0$ factors to $(x+14)(x-8) \\le 0$, so $-14 \\le x \\le 8$; with $x>0$ that is $x \\le 8$.\nStep 4: Intersect: $4 \\le x \\le 8$. The integers are $4,5,6,7,8$; any single value such as $5$ is acceptable.\n\n**Common Mistakes:** Solving only one inequality and ignoring the other bound; forgetting that a width must be positive, so the negative root is rejected.\n\n**Test Day Takeaway:** For a \"between two values\" condition, split into two inequalities, solve each, then take the overlap of the two solution sets.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'quadratic-inequality-from-context', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  // ─── P.B. RADICAL EQUATION (bank-am-315..322) — sqrt(...) = x ──────────────
  // Isolate the radical, square, check for extraneous solutions.
  { id: 'bank-am-315', domain: 'advanced-math', skills: ['radical-equations'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What value of $x$ satisfies the equation $\\sqrt{x + 5} = 4$?',
    choices: [{ id: 'A', text: '$-1$' }, { id: 'B', text: '$1$' }, { id: 'C', text: '$11$' }, { id: 'D', text: '$21$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Radical Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Square both sides: $x+5=16$, so $x=11$. Check: $\\sqrt{11+5}=\\sqrt{16}=4$. $\\checkmark$\n\n**The Full Solution:**\nStep 1: The radical is already isolated, so square both sides: $x+5=4^2=16$.\nStep 2: Solve: $x=16-5=11$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-1$): subtracted $5$ before squaring, computing $4-5$.\n* Choice B ($1$): an unmotivated small value.\n* Choice D ($21$): squared the right side but added $5$ instead of subtracting it ($16+5$).\n\n**Test Day Takeaway:** Isolate the radical, then square both sides. Squaring can create extraneous roots, so always plug your answer back into the original.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'radical-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-316', domain: 'advanced-math', skills: ['radical-equations'], difficulty: 'easy', type: 'fill-in',
    question: 'What is the solution to $\\sqrt{2x - 3} = 5$?',
    correctAnswer: '14',
    explanation: "**SAT Pattern: Radical Equation**\n\n**The correct answer is $14$.**\n\n**The Fast Way (~10s):** Square both sides: $2x-3=25$, so $2x=28$ and $x=14$. Check: $\\sqrt{2(14)-3}=\\sqrt{25}=5$. $\\checkmark$\n\n**The Full Solution:**\nStep 1: The radical stands alone, so square both sides: $2x-3=5^2=25$.\nStep 2: Solve the linear equation: $2x=28 \\Rightarrow x=14$.\n\n**Common Mistakes:** Forgetting to divide by $2$ and reporting $28$; adding $3$ on the wrong side.\n\n**Test Day Takeaway:** Square first to clear the root, then solve the resulting linear equation.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'radical-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-317', domain: 'advanced-math', skills: ['radical-equations'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Which value(s) of $x$ satisfy the equation $\\sqrt{x + 7} = x + 1$?',
    choices: [{ id: 'A', text: '$-3$ only' }, { id: 'B', text: '$2$ only' }, { id: 'C', text: '$-3$ and $2$' }, { id: 'D', text: 'No solution' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Radical Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Square both sides: $x+7=(x+1)^2=x^2+2x+1 \\Rightarrow x^2+x-6=0 \\Rightarrow (x+3)(x-2)=0$, giving $x=-3$ or $x=2$. Check each: $x=2$ gives $\\sqrt{9}=3=2+1$ $\\checkmark$, but $x=-3$ gives $\\sqrt{4}=2 \\neq -3+1=-2$. Only $x=2$ works.\n\n**The Full Solution:**\nStep 1: Square both sides to remove the radical: $x+7=x^2+2x+1$.\nStep 2: Rearrange: $x^2+x-6=0$, which factors as $(x+3)(x-2)=0$.\nStep 3: Candidate solutions: $x=-3$ and $x=2$.\nStep 4: Verify in the original. For $x=2$: $\\sqrt{2+7}=\\sqrt{9}=3$ equals $2+1=3$. $\\checkmark$ For $x=-3$: $\\sqrt{-3+7}=\\sqrt{4}=2$, but $-3+1=-2$, and $2 \\neq -2$, so $-3$ is extraneous.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$ only): kept the extraneous root and discarded the valid one.\n* Choice C ($-3$ and $2$): accepted both algebraic candidates without checking them in the original.\n* Choice D (No solution): wrongly concluded both candidates fail.\n\n**Test Day Takeaway:** A square root returns the non-negative value, so any candidate that makes the right side negative is extraneous. Always test both candidates in the original equation.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'radical-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-318', domain: 'advanced-math', skills: ['radical-equations'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What is the solution to $\\sqrt{3x - 5} - 2 = 5$?',
    choices: [{ id: 'A', text: '$3$' }, { id: 'B', text: '$10$' }, { id: 'C', text: '$18$' }, { id: 'D', text: '$28$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Radical Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Isolate first: $\\sqrt{3x-5}=7$. Square: $3x-5=49 \\Rightarrow 3x=54 \\Rightarrow x=18$.\n\n**The Full Solution:**\nStep 1: Move the $-2$ over: $\\sqrt{3x-5}=5+2=7$.\nStep 2: Square both sides: $3x-5=49$.\nStep 3: Solve: $3x=54 \\Rightarrow x=18$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): squared before isolating, so the constant terms were mishandled.\n* Choice B ($10$): computed $5+5$ and ignored the radical entirely.\n* Choice D ($28$): reached $3x=54$ but stopped short of dividing by $3$.\n\n**Test Day Takeaway:** Isolate the radical first. Only square once the root stands alone on one side.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'radical-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-319', domain: 'advanced-math', skills: ['radical-equations'], difficulty: 'medium', type: 'fill-in',
    question: 'If $\\sqrt{x} + 3 = 8$, what is the value of $x$?',
    correctAnswer: '25',
    explanation: "**SAT Pattern: Radical Equation**\n\n**The correct answer is $25$.**\n\n**The Fast Way (~10s):** Isolate: $\\sqrt{x}=8-3=5$. Square: $x=25$.\n\n**The Full Solution:**\nStep 1: Subtract $3$ from both sides: $\\sqrt{x}=5$.\nStep 2: Square: $x=5^2=25$. Check: $\\sqrt{25}+3=5+3=8$. $\\checkmark$\n\n**Common Mistakes:** Squaring before isolating ($8^2=64$ style errors); forgetting to subtract the $3$ first.\n\n**Test Day Takeaway:** Get the radical by itself before squaring.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'radical-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-320', domain: 'advanced-math', skills: ['radical-equations'], difficulty: 'hard', type: 'multiple-choice',
    question: 'Which value(s) of $x$ satisfy $\\sqrt{2x + 5} = x + 1$?',
    choices: [{ id: 'A', text: '$-2$ only' }, { id: 'B', text: '$2$ only' }, { id: 'C', text: '$-2$ and $2$' }, { id: 'D', text: 'No solution' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Radical Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Square both sides: $2x+5=(x+1)^2=x^2+2x+1 \\Rightarrow x^2-4=0 \\Rightarrow x=\\pm 2$. Check $x=2$: $\\sqrt{9}=3=2+1$ $\\checkmark$. Check $x=-2$: $\\sqrt{1}=1$ but $-2+1=-1$, so $-2$ is extraneous. Only $x=2$.\n\n**The Full Solution:**\nStep 1: Square both sides: $2x+5=x^2+2x+1$.\nStep 2: The $2x$ terms cancel: $5=x^2+1 \\Rightarrow x^2-4=0 \\Rightarrow x=\\pm 2$.\nStep 3: Verify in the original. For $x=2$: $\\sqrt{2(2)+5}=\\sqrt{9}=3$ equals $2+1=3$. $\\checkmark$ For $x=-2$: $\\sqrt{2(-2)+5}=\\sqrt{1}=1$, but $-2+1=-1$, and $1 \\neq -1$, so $-2$ is extraneous.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$ only): kept the extraneous root and dropped the valid one.\n* Choice C ($-2$ and $2$): took both algebraic roots without checking them.\n* Choice D (No solution): wrongly rejected both.\n\n**Test Day Takeaway:** Squaring can introduce extraneous roots. Test each candidate in the original equation; the right side must equal the non-negative square root.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'radical-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-321', domain: 'advanced-math', skills: ['radical-equations'], difficulty: 'hard', type: 'multiple-choice',
    question: 'What is the solution to $\\sqrt{x + 6} + x = 6$?',
    choices: [{ id: 'A', text: '$3$' }, { id: 'B', text: '$5$' }, { id: 'C', text: '$10$' }, { id: 'D', text: 'No solution' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Radical Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Isolate: $\\sqrt{x+6}=6-x$. Square: $x+6=x^2-12x+36 \\Rightarrow x^2-13x+30=0 \\Rightarrow (x-3)(x-10)=0$, so $x=3$ or $x=10$. Check $x=3$: $\\sqrt{9}+3=6$ $\\checkmark$. Check $x=10$: $\\sqrt{16}+10=14 \\neq 6$, extraneous. Only $x=3$.\n\n**The Full Solution:**\nStep 1: Move $x$ over to isolate the radical: $\\sqrt{x+6}=6-x$.\nStep 2: Square both sides: $x+6=(6-x)^2=x^2-12x+36$.\nStep 3: Rearrange: $x^2-13x+30=0$, which factors as $(x-3)(x-10)=0$.\nStep 4: Candidates $x=3$ and $x=10$. Verify: $x=3$ gives $\\sqrt{9}+3=3+3=6$ $\\checkmark$; $x=10$ gives $\\sqrt{16}+10=4+10=14 \\neq 6$, so $10$ is extraneous.\n\n**Why the wrong answers are tempting:**\n* Choice B ($5$): an unmotivated value that does not satisfy the equation.\n* Choice C ($10$): the extraneous root introduced by squaring.\n* Choice D (No solution): wrongly discards the valid root $x=3$.\n\n**Test Day Takeaway:** Always check both candidates in the original; when you square, the larger root is often the extraneous one.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'radical-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-322', domain: 'advanced-math', skills: ['radical-equations'], difficulty: 'medium', type: 'multiple-choice',
    question: 'If $\\sqrt{x - 3} = 2\\sqrt{x - 9}$, what is the value of $x$?',
    choices: [{ id: 'A', text: '$10$' }, { id: 'B', text: '$11$' }, { id: 'C', text: '$12$' }, { id: 'D', text: '$15$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Radical Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Square both sides: $x-3=4(x-9)$ (the coefficient $2$ squares to $4$). Then $x-3=4x-36 \\Rightarrow 33=3x \\Rightarrow x=11$.\n\n**The Full Solution:**\nStep 1: Square both sides once: $(\\sqrt{x-3})^2=(2\\sqrt{x-9})^2$ gives $x-3=4(x-9)$.\nStep 2: Expand and solve: $x-3=4x-36 \\Rightarrow 33=3x \\Rightarrow x=11$.\nStep 3: Check domain and value: $\\sqrt{11-3}=\\sqrt{8}=2\\sqrt{2}$ and $2\\sqrt{11-9}=2\\sqrt{2}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($10$): forgot to square the coefficient $2$, using $x-3=2(x-9)$.\n* Choice C ($12$): arithmetic slip when distributing the $4$.\n* Choice D ($15$): another distribution or transposition error.\n\n**Test Day Takeaway:** When you square a term like $2\\sqrt{x-9}$, the coefficient squares too: it becomes $4(x-9)$, not $2(x-9)$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'radical-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  // ─── P.B. EXPONENTIAL EQ WITH COMMON BASE (bank-am-323..330) ──────────────
  // Rewrite both sides as same base, set exponents equal.
  { id: 'bank-am-323', domain: 'advanced-math', skills: ['exponential-functions'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What value of $x$ satisfies $2^x = 32$?',
    choices: [{ id: 'A', text: '$3$' }, { id: 'B', text: '$4$' }, { id: 'C', text: '$5$' }, { id: 'D', text: '$16$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** $32=2^5$, so $2^x=2^5$ forces $x=5$.\n\n**The Full Solution:**\nStep 1: Write the right side as a power of the same base: $32=2^5$.\nStep 2: With equal bases, the exponents must match: $x=5$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): $2^3=8$, a lower power of $2$.\n* Choice B ($4$): $2^4=16$, still short of $32$.\n* Choice D ($16$): computed $\\frac{32}{2}$ instead of recognizing the exponent.\n\n**Test Day Takeaway:** Rewrite both sides as powers of the same base, then set the exponents equal.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-equation-with-common-base', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-324', domain: 'advanced-math', skills: ['exponential-functions'], difficulty: 'easy', type: 'fill-in',
    question: 'If $3^x = 81$, what is the value of $x$?',
    correctAnswer: '4',
    explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~5s):** $81=3^4$, so $3^x=3^4$ gives $x=4$.\n\n**The Full Solution:**\nStep 1: Express the right side as a power of $3$: $81=3^4$.\nStep 2: Equal bases mean equal exponents: $x=4$.\n\n**Common Mistakes:** Computing $\\frac{81}{3}=27$; confusing $3^4$ with $4^3$.\n\n**Test Day Takeaway:** Match the base on both sides, then equate the exponents.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-equation-with-common-base', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-325', domain: 'advanced-math', skills: ['exponential-functions'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What value of $x$ satisfies $2^{3x} = 64$?',
    choices: [{ id: 'A', text: '$2$' }, { id: 'B', text: '$6$' }, { id: 'C', text: '$8$' }, { id: 'D', text: '$18$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Write $64$ as a power of $2$: $64 = 2^6$. Now both sides share base $2$, so the exponents must match: $3x = 6 \\Rightarrow x = 2$.\n\n**The Full Solution:**\nStep 1: Rewrite the right side over base $2$: $64 = 2^6$, so $2^{3x} = 2^6$.\nStep 2: Equal bases force equal exponents: $3x = 6$.\nStep 3: Divide by $3$: $x = 2$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($6$): set the exponent equal to $6$ but read it as $x$, ignoring the coefficient $3$.\n* Choice C ($8$): no clean route — likely $2 \\cdot 4$ from mishandling $64$.\n* Choice D ($18$): multiplied by $3$ instead of dividing, treating $3x = 6$ as $x = 6 \\cdot 3$.\n\n**Test Day Takeaway:** Match the full exponent EXPRESSIONS, not the raw numbers. Here $3x = 6$, so divide by the coefficient to finish.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-equation-with-common-base', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-326', domain: 'advanced-math', skills: ['exponential-functions'], difficulty: 'medium', type: 'multiple-choice',
    question: 'If $5^{x + 2} = 125$, what is the value of $x$?',
    choices: [{ id: 'A', text: '$1$' }, { id: 'B', text: '$3$' }, { id: 'C', text: '$5$' }, { id: 'D', text: '$25$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $125 = 5^3$, so with both sides over base $5$ the exponents match: $x + 2 = 3 \\Rightarrow x = 1$.\n\n**The Full Solution:**\nStep 1: Rewrite the right side as a power of $5$: $125 = 5^3$, so $5^{x+2} = 5^3$.\nStep 2: Equal bases force equal exponents: $x + 2 = 3$.\nStep 3: Subtract $2$: $x = 1$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($3$): stopped at the exponent equation and reported $3$ instead of solving for $x$.\n* Choice C ($5$): copied the base $5$ rather than solving.\n* Choice D ($25$): computed $5^2$ instead of treating the exponent linearly.\n\n**Test Day Takeaway:** Once the bases match, the exponent equation is just a linear equation — solve it normally.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-equation-with-common-base', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-327', domain: 'advanced-math', skills: ['exponential-functions'], difficulty: 'medium', type: 'fill-in',
    question: 'If $9^x = 27$, what is the value of $x$?',
    correctAnswer: '1.5',
    explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**The correct answer is $1.5$ (or $\\frac{3}{2}$).**\n\n**The Fast Way (~15s):** Both $9$ and $27$ are powers of $3$: $9 = 3^2$, $27 = 3^3$. So $(3^2)^x = 3^3 \\Rightarrow 3^{2x} = 3^3 \\Rightarrow 2x = 3 \\Rightarrow x = \\frac{3}{2}$.\n\n**The Full Solution:**\nStep 1: Find a common underlying base. Both sides are powers of $3$: $9 = 3^2$ and $27 = 3^3$.\nStep 2: Rewrite the left side: $9^x = (3^2)^x = 3^{2x}$, so $3^{2x} = 3^3$.\nStep 3: Equate exponents: $2x = 3$, so $x = \\frac{3}{2} = 1.5$.\n\n**Common Mistakes:** Reporting $x = 3$ by forgetting that $9 = 3^2$ doubles the exponent; or guessing $1$ because $27 \\approx 9 \\cdot 3$ without converting bases.\n\n**Test Day Takeaway:** When the bases differ, rewrite both as powers of a common base, then multiply the exponents when raising a power to a power.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-equation-with-common-base', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-328', domain: 'advanced-math', skills: ['exponential-functions'], difficulty: 'hard', type: 'multiple-choice',
    question: 'What is the solution to $4^{x + 1} = 8^{x - 2}$?',
    choices: [{ id: 'A', text: '$2$' }, { id: 'B', text: '$4$' }, { id: 'C', text: '$8$' }, { id: 'D', text: '$10$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Use base $2$: $4 = 2^2$ and $8 = 2^3$. Then $4^{x+1} = 2^{2(x+1)} = 2^{2x+2}$ and $8^{x-2} = 2^{3(x-2)} = 2^{3x-6}$. Equate exponents: $2x + 2 = 3x - 6 \\Rightarrow x = 8$.\n\n**The Full Solution:**\nStep 1: Both $4$ and $8$ are powers of $2$, so convert: $4 = 2^2$, $8 = 2^3$.\nStep 2: Distribute the exponents. Left: $2^{2(x+1)} = 2^{2x+2}$. Right: $2^{3(x-2)} = 2^{3x-6}$.\nStep 3: Equate exponents: $2x + 2 = 3x - 6$. Subtract $2x$: $2 = x - 6$, so $x = 8$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): a sign slip when moving terms across the equals sign.\n* Choice B ($4$): dropped a constant while distributing the exponent.\n* Choice D ($10$): a small arithmetic slip in the final subtraction.\n\n**Test Day Takeaway:** With different bases, rewrite over a common UNDERLYING base, then distribute the multiplier across every term in the exponent before equating.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-equation-with-common-base', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-329', domain: 'advanced-math', skills: ['exponential-functions'], difficulty: 'hard', type: 'multiple-choice',
    question: 'If $2^{x^2 - 4} = 1$, which of the following is a possible value of $x$?',
    choices: [{ id: 'A', text: '$0$' }, { id: 'B', text: '$1$' }, { id: 'C', text: '$2$' }, { id: 'D', text: '$4$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Anything nonzero raised to the $0$ power is $1$, so $1 = 2^0$. That forces $x^2 - 4 = 0 \\Rightarrow x = \\pm 2$. Of the choices, only $2$ works.\n\n**The Full Solution:**\nStep 1: Write the right side as a power of $2$: $1 = 2^0$, so $2^{x^2 - 4} = 2^0$.\nStep 2: Equate exponents: $x^2 - 4 = 0$.\nStep 3: Solve: $x^2 = 4 \\Rightarrow x = \\pm 2$. The only matching choice is $2$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($0$): gives $2^{-4} = \\frac{1}{16} \\neq 1$.\n* Choice B ($1$): gives $2^{-3} = \\frac{1}{8} \\neq 1$.\n* Choice D ($4$): gives $2^{12} \\neq 1$, far too large.\n\n**Test Day Takeaway:** When an exponential equals $1$, set the exponent equal to $0$ — that is the only way a nonzero base produces $1$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-equation-with-common-base', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-330', domain: 'advanced-math', skills: ['exponential-functions'], difficulty: 'medium', type: 'multiple-choice',
    question: 'If $\\left(\\dfrac{1}{2}\\right)^x = 8$, what is the value of $x$?',
    choices: [{ id: 'A', text: '$-3$' }, { id: 'B', text: '$-1/3$' }, { id: 'C', text: '$1/3$' }, { id: 'D', text: '$3$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** A reciprocal base is a negative exponent: $\\frac{1}{2} = 2^{-1}$ and $8 = 2^3$. So $(2^{-1})^x = 2^3 \\Rightarrow 2^{-x} = 2^3 \\Rightarrow -x = 3 \\Rightarrow x = -3$.\n\n**The Full Solution:**\nStep 1: Rewrite both sides over base $2$: $\\frac{1}{2} = 2^{-1}$, $8 = 2^3$.\nStep 2: Apply the power: $\\left(2^{-1}\\right)^x = 2^{-x}$, so $2^{-x} = 2^3$.\nStep 3: Equate exponents: $-x = 3$, so $x = -3$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-\\frac{1}{3}$): inverted the exponent instead of just negating it.\n* Choice C ($\\frac{1}{3}$): same inversion error without tracking the sign.\n* Choice D ($3$): forgot that the reciprocal base flips the sign of the exponent.\n\n**Test Day Takeaway:** Rewrite a reciprocal base as a negative exponent: $\\frac{1}{a} = a^{-1}$. The negative sign carries straight into the exponent equation.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-equation-with-common-base', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  // ─── P.B. DISTANCE BETWEEN X-INTERCEPTS (bank-am-331..338) ─────────────────
  // |root_a − root_b| for a parabola. Often via Vieta's: |a − b| = √((a+b)² − 4ab).
  { id: 'bank-am-331', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The graph of $y = x^2 - 5x + 6$ crosses the $x$-axis at two points. What is the distance between these two $x$-intercepts?',
    choices: [{ id: 'A', text: '$1$' }, { id: 'B', text: '$2$' }, { id: 'C', text: '$5$' }, { id: 'D', text: '$6$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Factor: $x^2 - 5x + 6 = (x - 2)(x - 3)$, so the intercepts are $x = 2$ and $x = 3$. Distance $= |3 - 2| = 1$.\n\n**The Full Solution:**\nStep 1: Set $y = 0$ and factor: $(x - 2)(x - 3) = 0$.\nStep 2: The roots are $x = 2$ and $x = 3$.\nStep 3: The distance between the intercepts is the absolute difference: $|3 - 2| = 1$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($2$): copied the smaller root instead of the gap between roots.\n* Choice C ($5$): used the sum of the roots, $-\\frac{b}{a} = 5$.\n* Choice D ($6$): used the product of the roots, $\\frac{c}{a} = 6$.\n\n**Test Day Takeaway:** Find the roots, then take the ABSOLUTE DIFFERENCE — the distance between intercepts is never the sum or product.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'distance-between-x-intercepts', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-332', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'easy', type: 'fill-in',
    question: 'The function $f(x) = x^2 - 9$ has two $x$-intercepts. What is the distance between them?',
    correctAnswer: '6',
    explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~5s):** This is a difference of squares: $x^2 - 9 = 0 \\Rightarrow x^2 = 9 \\Rightarrow x = \\pm 3$. Distance $= 3 - (-3) = 6$.\n\n**The Full Solution:**\nStep 1: Set $f(x) = 0$: $x^2 - 9 = 0$.\nStep 2: Solve: $x^2 = 9$, so $x = 3$ and $x = -3$.\nStep 3: Distance between the intercepts: $|3 - (-3)| = 6$.\n\n**Common Mistakes:** Answering $3$ (just one root) or $9$ (the constant, not a root). The intercepts are $\\pm 3$, so the gap is $6$.\n\n**Test Day Takeaway:** For $x^2 - c = 0$, the roots are $\\pm\\sqrt{c}$ and the distance between them is $2\\sqrt{c}$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'distance-between-x-intercepts', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-333', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The parabola $y = x^2 - 6x + 5$ intersects the $x$-axis at points $P$ and $Q$. What is the length of segment $PQ$?',
    choices: [{ id: 'A', text: '$1$' }, { id: 'B', text: '$4$' }, { id: 'C', text: '$5$' }, { id: 'D', text: '$6$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Factor: $x^2 - 6x + 5 = (x - 1)(x - 5)$, so $P$ and $Q$ sit at $x = 1$ and $x = 5$. Length $|PQ| = |5 - 1| = 4$.\n\n**The Full Solution:**\nStep 1: Set $y = 0$ and factor: $(x - 1)(x - 5) = 0$.\nStep 2: The intercepts are at $x = 1$ and $x = 5$.\nStep 3: The segment length is the absolute difference: $|5 - 1| = 4$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($1$): copied the smaller root.\n* Choice C ($5$): copied the larger root.\n* Choice D ($6$): used the sum of the roots, $-\\frac{b}{a} = 6$, instead of their difference.\n\n**Test Day Takeaway:** The segment between two $x$-intercepts has length equal to the absolute difference of the roots — subtract, don't add.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'distance-between-x-intercepts', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-334', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The function $g(x) = 2x^2 + 4x - 6$ has two $x$-intercepts. What is the distance between them?',
    choices: [{ id: 'A', text: '$2$' }, { id: 'B', text: '$4$' }, { id: 'C', text: '$6$' }, { id: 'D', text: '$8$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Divide out the leading $2$ first — it doesn't move the roots: $x^2 + 2x - 3 = 0 \\Rightarrow (x + 3)(x - 1) = 0$, so $x = -3, 1$. Distance $= |1 - (-3)| = 4$.\n\n**The Full Solution:**\nStep 1: Set $g(x) = 0$: $2x^2 + 4x - 6 = 0$. Divide by $2$: $x^2 + 2x - 3 = 0$.\nStep 2: Factor: $(x + 3)(x - 1) = 0$, giving $x = -3$ and $x = 1$.\nStep 3: Distance: $|1 - (-3)| = 4$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): stopped at half the true gap.\n* Choice C ($6$): used the original constant $-6$ rather than the root difference.\n* Choice D ($8$): forgot to divide by $2$ and let the leading coefficient inflate the work.\n\n**Test Day Takeaway:** Dividing both sides by the leading coefficient simplifies the algebra without changing the roots — do it before factoring.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'distance-between-x-intercepts', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-335', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'medium', type: 'fill-in',
    question: 'The parabola defined by $y = -(x + 2)(x - 8)$ crosses the $x$-axis at two points. What is the distance between them?',
    correctAnswer: '10',
    explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~5s):** The factored form hands you the roots directly. $-(x + 2)(x - 8) = 0$ gives $x = -2$ and $x = 8$. Distance $= |8 - (-2)| = 10$.\n\n**The Full Solution:**\nStep 1: Set $y = 0$: $-(x + 2)(x - 8) = 0$. The leading $-1$ doesn't affect where the zeros are.\nStep 2: Each factor gives a root: $x = -2$ and $x = 8$.\nStep 3: Distance between the intercepts: $|8 - (-2)| = 10$.\n\n**Common Mistakes:** Reading the factors as $+2$ and $-8$ (the roots are the values that make each factor zero, so signs flip); or answering $6$ from $8 - 2$ while dropping the negative root.\n\n**Test Day Takeaway:** In factored form, each root is the value that zeroes its factor — flip the sign inside the parentheses, then subtract.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'distance-between-x-intercepts', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-336', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The graph of $y = x^2 - 4x + k$ intersects the $x$-axis at two points $A$ and $B$. If $|AB| = 6$, what is the value of $k$?',
    choices: [{ id: 'A', text: '$-5$' }, { id: 'B', text: '$-3$' }, { id: 'C', text: '$1$' }, { id: 'D', text: '$3$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** For roots $a$ and $b$, $a + b = 4$ and $ab = k$ (Vieta). The distance is $|a - b| = \\sqrt{(a+b)^2 - 4ab} = \\sqrt{16 - 4k}$. Set this to $6$: $16 - 4k = 36 \\Rightarrow k = -5$.\n\n**The Full Solution:**\nStep 1: By Vieta's formulas for $x^2 - 4x + k$, the roots satisfy $a + b = 4$ and $ab = k$.\nStep 2: Use the identity $(a - b)^2 = (a + b)^2 - 4ab = 16 - 4k$, so $|AB| = \\sqrt{16 - 4k}$.\nStep 3: Set the distance to $6$: $\\sqrt{16 - 4k} = 6 \\Rightarrow 16 - 4k = 36 \\Rightarrow -4k = 20 \\Rightarrow k = -5$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-3$): solved $16 - 4k = 28$ from squaring $6$ incorrectly.\n* Choice C ($1$): used $16 - 4k = 12$ or confused the distance with the sum.\n* Choice D ($3$): dropped the negative sign when isolating $k$.\n\n**Test Day Takeaway:** The distance between the roots is $\\sqrt{(a+b)^2 - 4ab}$ — a Vieta's-style shortcut that turns root-spacing problems into one equation in the unknown coefficient.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'distance-between-x-intercepts', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-337', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A parabola has vertex at $(3, -8)$ and passes through the origin. What is the distance between its two $x$-intercepts?',
    choices: [{ id: 'A', text: '$3$' }, { id: 'B', text: '$4\\sqrt{3}$' }, { id: 'C', text: '$6$' }, { id: 'D', text: '$8$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The vertex sits on the axis of symmetry at $x=3$, which is the midpoint of the two roots. One root is the origin, $x=0$, so the other reflects across $x=3$ to $x=6$. The distance between them is $6-0=6$.\n\n**The Full Solution:**\nStep 1: The axis of symmetry passes through the vertex, so it is the line $x=3$.\nStep 2: The two $x$-intercepts are mirror images across this line. The parabola passes through the origin, so $x=0$ is one intercept.\nStep 3: Reflect $x=0$ across $x=3$: it lands the same distance $3$ on the other side, at $x=6$. The intercepts are $0$ and $6$, so the distance is $6$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): this is the distance from one root to the axis, not the full span between both roots.\n* Choice B ($4\\sqrt{3}$): comes from forcing the algebraic form $y=a(x-3)^2-8$ and mishandling the root spacing.\n* Choice D ($8$): grabs the vertex $y$-value $|-8|$ instead of computing the horizontal distance between intercepts.\n\n**Test Day Takeaway:** The axis of symmetry is the midpoint of the two roots. Know one root and the axis, and the other root is its reflection — equally far on the opposite side.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'distance-between-x-intercepts', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-338', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A parabola is symmetric about the line $x = 4$ and has one $x$-intercept at $x = 1$. What is the location of its other $x$-intercept?',
    choices: [{ id: 'A', text: '$x = -1$' }, { id: 'B', text: '$x = 3$' }, { id: 'C', text: '$x = 5$' }, { id: 'D', text: '$x = 7$' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** The root $x=1$ is $|4-1|=3$ units left of the axis $x=4$. The other root is $3$ units right of the axis: $4+3=7$.\n\n**The Full Solution:**\nStep 1: The two $x$-intercepts are reflections of each other across the axis of symmetry $x=4$.\nStep 2: The given root $x=1$ is $3$ units left of the axis.\nStep 3: The matching root is $3$ units right of the axis: $4+3=7$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($x=-1$): reflects in the wrong direction, going further from the axis instead of past it.\n* Choice B ($x=3$): subtracts $1$ from the axis instead of building the symmetric partner.\n* Choice C ($x=5$): moves only $1$ unit past the axis instead of the full $3$.\n\n**Test Day Takeaway:** Roots sit equidistant on either side of the axis of symmetry. Measure the distance from the known root to the axis, then step that same distance to the other side.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'distance-between-x-intercepts', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  // === TIER 0 BANK GROWTH (2026-05-21): common-base-exponent-simplification 3 → 5 items ===

  { id: 'bank-am-339', domain: 'advanced-math', skills: ['exponent-laws'], difficulty: 'easy', type: 'multiple-choice',
    question: 'Which expression is equivalent to $\\dfrac{12 x^6 y^4}{3 x^2 y}$ for $x \\neq 0$ and $y \\neq 0$?',
    choices: [{ id: 'A', text: '$4 x^4 y^3$' }, { id: 'B', text: '$4 x^3 y^4$' }, { id: 'C', text: '$9 x^4 y^3$' }, { id: 'D', text: '$4 x^8 y^5$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Divide piece by piece: $\\frac{12}{3}=4$, $x^{6-2}=x^4$, $y^{4-1}=y^3$. Combined: $4x^4y^3$.\n\n**The Full Solution:**\nStep 1: Divide the coefficients: $\\frac{12}{3}=4$.\nStep 2: Apply the quotient rule to each variable: $\\frac{x^6}{x^2}=x^{6-2}=x^4$ and $\\frac{y^4}{y}=y^{4-1}=y^3$.\nStep 3: Combine the results: $4x^4y^3$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($4x^3y^4$): swaps the exponents, assigning $x^3$ and $y^4$ instead of subtracting correctly.\n* Choice C ($9x^4y^3$): subtracts the coefficients ($12-3$) instead of dividing them.\n* Choice D ($4x^8y^5$): adds the exponents instead of subtracting, confusing the product rule with the quotient rule.\n\n**Test Day Takeaway:** When dividing same-base powers, subtract the exponents; when multiplying, add them. Coefficients are divided or multiplied normally, never exponentiated.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'common-base-exponent-simplification', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-340', domain: 'advanced-math', skills: ['exponent-laws'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Which expression is equivalent to $\\dfrac{(2 x^3)^2 \\cdot 5 x^4}{4 x^5}$ for $x \\neq 0$?',
    choices: [{ id: 'A', text: '$5 x^5$' }, { id: 'B', text: '$\\dfrac{5 x^5}{2}$' }, { id: 'C', text: '$5 x^7$' }, { id: 'D', text: '$10 x^5$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Square the parenthesis: $(2x^3)^2=4x^6$. Numerator becomes $4x^6\\cdot 5x^4=20x^{10}$. Divide: $\\frac{20x^{10}}{4x^5}=5x^5$.\n\n**The Full Solution:**\nStep 1: Distribute the power over every factor: $(2x^3)^2=2^2\\cdot x^{3\\cdot 2}=4x^6$.\nStep 2: Multiply in the numerator: $4x^6\\cdot 5x^4=20x^{6+4}=20x^{10}$.\nStep 3: Divide: $\\frac{20}{4}=5$ and $\\frac{x^{10}}{x^5}=x^5$, giving $5x^5$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{5x^5}{2}$): leaves a stray $2$ in the denominator instead of fully canceling $\\frac{20}{4}=5$.\n* Choice C ($5x^7$): adds the exponents when dividing instead of subtracting.\n* Choice D ($10x^5$): forgets to square the coefficient, using $2$ instead of $4$ for $(2x^3)^2$.\n\n**Test Day Takeaway:** Distribute an outer exponent over both the coefficient and the variable inside the parentheses, then use the product rule (add) for multiplication and the quotient rule (subtract) for division.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'common-base-exponent-simplification', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // === TIER 1 BANK GROWTH (2026-05-21): advanced math patterns @ 4 items → @ 10 items ===

  // --- build-exponential-model (4 → 10) ---
  { id: 'bank-am-341', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A colony of bacteria doubles in size every hour. If the initial population is $50$ bacteria, which function $P$ gives the population $t$ hours later?',
    choices: [{ id: 'A', text: '$P(t) = 50 \\cdot 2^t$' }, { id: 'B', text: '$P(t) = 50 + 2t$' }, { id: 'C', text: '$P(t) = 50t \\cdot 2$' }, { id: 'D', text: '$P(t) = 2 \\cdot 50^t$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Build Exponential Model**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Exponential form is (initial value) $\\times$ (growth factor)$^t$. Doubling means the factor is $2$, so $P(t)=50\\cdot 2^t$.\n\n**The Full Solution:**\nStep 1: The starting population $50$ is the coefficient (the value at $t=0$).\nStep 2: \"Doubles every hour\" makes the growth factor $2$, applied once per hour, so the exponent is $t$.\nStep 3: Assemble: $P(t)=50\\cdot 2^t$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($P(t)=50+2t$): a linear model that adds a fixed amount, not exponential doubling.\n* Choice C ($P(t)=50t\\cdot 2$): also linear, just $100t$ in disguise.\n* Choice D ($P(t)=2\\cdot 50^t$): swaps the base and the initial value.\n\n**Test Day Takeaway:** \"Doubles\" makes the base $2$. The initial amount is the coefficient out front, never the base.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'build-exponential-model', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-342', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'easy', type: 'multiple-choice',
    question: 'An investment of $\\$1{,}000$ grows by $5\\%$ each year. Which function $B$ gives the balance, in dollars, after $t$ years?',
    choices: [{ id: 'A', text: '$B(t) = 1000 \\cdot (1.05)^t$' }, { id: 'B', text: '$B(t) = 1000 + 0.05t$' }, { id: 'C', text: '$B(t) = 1000 \\cdot (0.05)^t$' }, { id: 'D', text: '$B(t) = 1000 \\cdot (1.5)^t$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Build Exponential Model**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** For growth, base $=1+r=1+0.05=1.05$. With a \\$1{,}000 start: $B(t)=1000\\cdot (1.05)^t$.\n\n**The Full Solution:**\nStep 1: The initial balance \\$1{,}000 is the coefficient.\nStep 2: Growing by $5\\%$ each year multiplies by $1+0.05=1.05$ annually, so $1.05$ is the base.\nStep 3: Assemble: $B(t)=1000\\cdot (1.05)^t$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($B(t)=1000+0.05t$): linear simple interest, not compounding.\n* Choice C ($B(t)=1000\\cdot (0.05)^t$): uses the bare rate $0.05$ as the base, which models rapid decay.\n* Choice D ($B(t)=1000\\cdot (1.5)^t$): misreads $5\\%$ as $50\\%$.\n\n**Test Day Takeaway:** Growth by rate $r$ (as a decimal) gives base $1+r$; decay by $r$ gives base $1-r$. Add the rate to $1$, don't use the rate alone.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'build-exponential-model', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-343', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A car depreciates by $12\\%$ each year. If its initial value is $\\$24{,}000$, which function $V$ gives its value, in dollars, after $t$ years?',
    choices: [{ id: 'A', text: '$V(t) = 24000 \\cdot (0.88)^t$' }, { id: 'B', text: '$V(t) = 24000 \\cdot (1.12)^t$' }, { id: 'C', text: '$V(t) = 24000 - 0.12t$' }, { id: 'D', text: '$V(t) = 24000 \\cdot (0.12)^t$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Build Exponential Model**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Depreciation is decay, so base $=1-r=1-0.12=0.88$. With a \\$24{,}000 start: $V(t)=24000\\cdot (0.88)^t$.\n\n**The Full Solution:**\nStep 1: The initial value \\$24{,}000 is the coefficient.\nStep 2: Losing $12\\%$ each year keeps $88\\%$, so each year multiplies by $1-0.12=0.88$.\nStep 3: Assemble: $V(t)=24000\\cdot (0.88)^t$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($V(t)=24000\\cdot (1.12)^t$): base above $1$ models growth, the opposite of depreciation.\n* Choice C ($V(t)=24000-0.12t$): linear depreciation, not the exponential drop described.\n* Choice D ($V(t)=24000\\cdot (0.12)^t$): uses the bare rate $0.12$, which would erase almost the entire value in one year.\n\n**Test Day Takeaway:** Depreciation or decay by rate $r$ multiplies by $1-r$ each period. Subtract the rate from $1$ to get the base.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'build-exponential-model', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-344', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A radioactive substance has a half-life of $5$ years. If the initial amount is $80$ grams, which function $A$ gives the amount, in grams, remaining after $t$ years?',
    choices: [{ id: 'A', text: '$A(t) = 80 \\cdot \\left(\\dfrac{1}{2}\\right)^{t/5}$' }, { id: 'B', text: '$A(t) = 80 \\cdot \\left(\\dfrac{1}{2}\\right)^t$' }, { id: 'C', text: '$A(t) = 80 \\cdot 2^{t/5}$' }, { id: 'D', text: '$A(t) = 80 \\cdot 0.5t$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Build Exponential Model**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Half-life means the base is $\\frac{1}{2}$, and the exponent counts how many half-lives have passed: $\\frac{t}{5}$. So $A(t)=80\\cdot \\left(\\frac{1}{2}\\right)^{t/5}$.\n\n**The Full Solution:**\nStep 1: The starting amount $80$ grams is the coefficient.\nStep 2: Each half-life multiplies the amount by $\\frac{1}{2}$, so the base is $\\frac{1}{2}$.\nStep 3: One half-life takes $5$ years, so after $t$ years the number of half-lives elapsed is $\\frac{t}{5}$, giving the exponent.\n\n**Why the wrong answers are tempting:**\n* Choice B ($A(t)=80\\cdot \\left(\\frac{1}{2}\\right)^t$): halves every single year instead of every $5$ years.\n* Choice C ($A(t)=80\\cdot 2^{t/5}$): base $2$ doubles the amount rather than halving it.\n* Choice D ($A(t)=80\\cdot 0.5t$): linear decay, not exponential.\n\n**Test Day Takeaway:** For a process with period $T$, the exponent is $\\frac{t}{T}$. A half-life pairs the base $\\frac{1}{2}$ with the exponent $\\frac{t}{T}$.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'build-exponential-model', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-345', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The population of a town was $1{,}200$ in 2020 and $1{,}452$ in 2022. Assuming exponential growth, which function $P$ gives the population $t$ years after 2020?',
    choices: [{ id: 'A', text: '$P(t) = 1200 \\cdot (1.1)^t$' }, { id: 'B', text: '$P(t) = 1200 + 126t$' }, { id: 'C', text: '$P(t) = 1200 \\cdot (1.21)^t$' }, { id: 'D', text: '$P(t) = 1200 \\cdot (1.252)^{t/2}$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Build Exponential Model**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The two-year growth factor is $\\frac{1452}{1200}=1.21$. The one-year factor is $\\sqrt{1.21}=1.1$, so $P(t)=1200\\cdot (1.1)^t$.\n\n**The Full Solution:**\nStep 1: The 2020 population $1{,}200$ is the coefficient (value at $t=0$).\nStep 2: Over $2$ years it grows to $1{,}452$, a factor of $\\frac{1452}{1200}=1.21$.\nStep 3: That factor covers $2$ years, so the annual factor is its square root: $\\sqrt{1.21}=1.1$. Assemble: $P(t)=1200\\cdot (1.1)^t$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($P(t)=1200+126t$): linear model with slope $126$ per year, not exponential.\n* Choice C ($P(t)=1200\\cdot (1.21)^t$): uses the two-year factor as if it were the annual factor.\n* Choice D ($P(t)=1200\\cdot (1.252)^{t/2}$): mis-builds both the factor and the exponent.\n\n**Test Day Takeaway:** Given two data points $N$ years apart, the per-year factor is the $N$-th root of the ratio of the values.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'build-exponential-model', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-346', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'hard', type: 'multiple-choice',
    question: 'An account is compounded monthly. Its balance, in dollars, after $0$, $1$, and $2$ months is $800$, $840$, and $882$. Which function $B$ gives the balance after $t$ months?',
    choices: [{ id: 'A', text: '$B(t) = 800 \\cdot (1.05)^t$' }, { id: 'B', text: '$B(t) = 800 + 40t$' }, { id: 'C', text: '$B(t) = 800 \\cdot (1.04)^t$' }, { id: 'D', text: '$B(t) = 800 \\cdot (1.10)^t$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Build Exponential Model**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The monthly ratio is $\\frac{840}{800}=1.05$. Confirm it holds: $840\\cdot 1.05=882$. So $B(t)=800\\cdot (1.05)^t$.\n\n**The Full Solution:**\nStep 1: The balance at $t=0$ is $800$, the coefficient.\nStep 2: From month $0$ to month $1$, the balance multiplies by $\\frac{840}{800}=1.05$.\nStep 3: Check the next step: $840\\cdot 1.05=882$, matching the data. The constant ratio confirms exponential growth with base $1.05$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($B(t)=800+40t$): the differences are $40$ then $42$, not constant, so the growth is not linear.\n* Choice C ($B(t)=800\\cdot (1.04)^t$): underestimates the rate; $800\\cdot 1.04=832$, not $840$.\n* Choice D ($B(t)=800\\cdot (1.10)^t$): doubles the true monthly rate; $800\\cdot 1.10=880$, not $840$.\n\n**Test Day Takeaway:** Test ratios versus differences. A constant ratio between consecutive values signals exponential growth; a constant difference signals linear.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'build-exponential-model', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- discriminant-analysis (4 → 10) ---
  { id: 'bank-am-347', domain: 'advanced-math', skills: ['discriminant-analysis'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What is the value of the discriminant of the equation $2x^2 + 5x + 3 = 0$?',
    choices: [{ id: 'A', text: '$1$' }, { id: 'B', text: '$-1$' }, { id: 'C', text: '$49$' }, { id: 'D', text: '$25$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $D=b^2-4ac=5^2-4(2)(3)=25-24=1$.\n\n**The Full Solution:**\nStep 1: Match $2x^2+5x+3=0$ to $ax^2+bx+c$: $a=2$, $b=5$, $c=3$.\nStep 2: Apply the discriminant formula: $D=b^2-4ac$.\nStep 3: Compute: $5^2-4(2)(3)=25-24=1$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-1$): a sign error in the subtraction $25-24$.\n* Choice C ($49$): computes $b^2+4ac=25+24$, flipping the sign of the $4ac$ term.\n* Choice D ($25$): stops at $b^2$ and forgets to subtract $4ac$.\n\n**Test Day Takeaway:** The discriminant is $D=b^2-4ac$. Read $a$, $b$, $c$ straight off $ax^2+bx+c$, mind the minus sign.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'discriminant-analysis', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-348', domain: 'advanced-math', skills: ['discriminant-analysis'], difficulty: 'easy', type: 'multiple-choice',
    question: 'How many real solutions does the equation $x^2 - 4x + 7 = 0$ have?',
    choices: [{ id: 'A', text: 'Zero' }, { id: 'B', text: 'One' }, { id: 'C', text: 'Two' }, { id: 'D', text: 'Infinitely many' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $D=b^2-4ac=(-4)^2-4(1)(7)=16-28=-12$. A negative discriminant means no real solutions.\n\n**The Full Solution:**\nStep 1: Match $x^2-4x+7=0$ to $ax^2+bx+c$: $a=1$, $b=-4$, $c=7$.\nStep 2: Compute the discriminant: $D=(-4)^2-4(1)(7)=16-28=-12$.\nStep 3: Since $D<0$, the equation has zero real solutions.\n\n**Why the wrong answers are tempting:**\n* Choice B (One): would require $D=0$, a repeated root.\n* Choice C (Two): would require $D>0$, two distinct real roots.\n* Choice D (Infinitely many): a quadratic has at most two solutions, never infinitely many.\n\n**Test Day Takeaway:** $D<0$ gives no real roots, $D=0$ gives one repeated root, and $D>0$ gives two distinct roots.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'discriminant-analysis', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-349', domain: 'advanced-math', skills: ['discriminant-analysis'], difficulty: 'easy', type: 'multiple-choice',
    question: 'How many real solutions does the equation $x^2 + 6x + 9 = 0$ have?',
    choices: [{ id: 'A', text: 'Exactly one' }, { id: 'B', text: 'Zero' }, { id: 'C', text: 'Two' }, { id: 'D', text: 'Three' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The discriminant is $D=b^2-4ac=6^2-4(1)(9)=36-36=0$. A discriminant of $0$ means exactly one (repeated) real root.\n\n**The Full Solution:**\nStep 1: Identify $a=1$, $b=6$, $c=9$.\nStep 2: Compute $D=6^2-4(1)(9)=36-36=0$.\nStep 3: $D=0 \\Rightarrow$ exactly one real solution. (In fact $x^2+6x+9=(x+3)^2$, so $x=-3$ is the single repeated root.)\n\n**Why the wrong answers are tempting:**\n* Choice B (Zero): true only when $D<0$; here $D=0$.\n* Choice C (Two): true only when $D>0$; here $D=0$.\n* Choice D (Three): a quadratic can have at most two real roots.\n\n**Test Day Takeaway:** A perfect-square trinomial like $(x+3)^2$ always has discriminant $0$ — one repeated root.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'discriminant-analysis', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-350', domain: 'advanced-math', skills: ['discriminant-analysis'], difficulty: 'medium', type: 'multiple-choice',
    question: 'For what value of $k$ does the equation $x^2 + 8x + k = 0$ have exactly one real solution?',
    choices: [{ id: 'A', text: '$16$' }, { id: 'B', text: '$8$' }, { id: 'C', text: '$4$' }, { id: 'D', text: '$-16$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** \"Exactly one real solution\" means $D=0$: $8^2-4(1)k=0 \\Rightarrow 64-4k=0 \\Rightarrow k=16$.\n\n**The Full Solution:**\nStep 1: With $a=1$, $b=8$, $c=k$, the discriminant is $D=64-4k$.\nStep 2: One real solution requires $D=0$, so $64-4k=0$.\nStep 3: Solve: $4k=64 \\Rightarrow k=16$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($8$): copies the middle coefficient $b$.\n* Choice C ($4$): half of $b$, the value $\\frac{b}{2}$.\n* Choice D ($-16$): sign error solving $64-4k=0$.\n\n**Test Day Takeaway:** Set $D=0$ for \"exactly one solution,\" then solve for the unknown parameter.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'discriminant-analysis', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-351', domain: 'advanced-math', skills: ['discriminant-analysis'], difficulty: 'medium', type: 'multiple-choice',
    question: 'For which value of $c$ does the equation $2x^2 + cx + 8 = 0$ have no real solutions?',
    choices: [{ id: 'A', text: '$4$' }, { id: 'B', text: '$8$' }, { id: 'C', text: '$10$' }, { id: 'D', text: '$12$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** \"No real solutions\" means $D<0$: $c^2-4(2)(8)<0 \\Rightarrow c^2-64<0 \\Rightarrow |c|<8$. Only $c=4$ satisfies $|c|<8$.\n\n**The Full Solution:**\nStep 1: With $a=2$, $b=c$, $c_{\\text{const}}=8$, the discriminant is $D=c^2-4(2)(8)=c^2-64$.\nStep 2: No real solutions requires $D<0$, so $c^2<64 \\Rightarrow -8<c<8$.\nStep 3: Test the choices: only $4$ lies strictly between $-8$ and $8$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($8$): the boundary, where $D=0$ gives one solution, not zero.\n* Choice C ($10$): $D=100-64=36>0$, two real solutions.\n* Choice D ($12$): $D=144-64=80>0$, two real solutions.\n\n**Test Day Takeaway:** Solve the discriminant inequality first to get the allowed range, then check which choice falls inside it.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'discriminant-analysis', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-352', domain: 'advanced-math', skills: ['discriminant-analysis'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The equation $x^2 - px + 12 = 0$ has two equal real roots. What is the value of $|p|$?',
    choices: [{ id: 'A', text: '$4\\sqrt{3}$' }, { id: 'B', text: '$12$' }, { id: 'C', text: '$\\sqrt{12}$' }, { id: 'D', text: '$48$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Two equal roots means $D=0$: $(-p)^2-4(1)(12)=0 \\Rightarrow p^2=48 \\Rightarrow |p|=\\sqrt{48}=4\\sqrt{3}$.\n\n**The Full Solution:**\nStep 1: With $a=1$, $b=-p$, $c=12$, the discriminant is $D=p^2-48$.\nStep 2: Equal roots requires $D=0$, so $p^2=48$.\nStep 3: Then $|p|=\\sqrt{48}=\\sqrt{16\\cdot 3}=4\\sqrt{3}$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($12$): copies the constant $c$.\n* Choice C ($\\sqrt{12}$): forgets the factor of $4$ in $4ac$, using $p^2=12$ instead of $48$.\n* Choice D ($48$): stops at $p^2=48$ instead of taking the square root.\n\n**Test Day Takeaway:** $\\sqrt{48}=\\sqrt{16\\cdot 3}=4\\sqrt{3}$ — always pull out perfect-square factors to simplify a radical.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'discriminant-analysis', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- discriminant-with-integer-bound (4 → 10) ---
  { id: 'bank-am-353', domain: 'advanced-math', skills: ['discriminant-analysis'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What is the largest integer value of $k$ such that the equation $x^2 - 5x + k = 0$ has two distinct real solutions?',
    choices: [{ id: 'A', text: '$6$' }, { id: 'B', text: '$5$' }, { id: 'C', text: '$7$' }, { id: 'D', text: '$25$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Two distinct real solutions means $D>0$: $25-4k>0 \\Rightarrow k<6.25$. The largest integer below $6.25$ is $6$.\n\n**The Full Solution:**\nStep 1: With $a=1$, $b=-5$, $c=k$, the discriminant is $D=25-4k$.\nStep 2: Two distinct real solutions requires $D>0$, so $25-4k>0 \\Rightarrow k<\\frac{25}{4}=6.25$.\nStep 3: The largest integer strictly less than $6.25$ is $6$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($5$): a valid value but not the largest allowed.\n* Choice C ($7$): exceeds $6.25$, so $D<0$ — no real solutions.\n* Choice D ($25$): copies $b^2$ from the discriminant.\n\n**Test Day Takeaway:** A strict inequality excludes its boundary; when the bound is not a whole number, the largest integer answer is the floor of that bound.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'discriminant-with-integer-bound', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-354', domain: 'advanced-math', skills: ['discriminant-analysis'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What is the smallest integer value of $k$ such that the equation $2x^2 + 6x + k = 0$ has no real solutions?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$4$' }, { id: 'C', text: '$6$' }, { id: 'D', text: '$3$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** No real solutions means $D<0$: $36-8k<0 \\Rightarrow k>4.5$. The smallest integer above $4.5$ is $5$.\n\n**The Full Solution:**\nStep 1: With $a=2$, $b=6$, $c=k$, the discriminant is $D=36-8k$.\nStep 2: No real solutions requires $D<0$, so $36-8k<0 \\Rightarrow k>\\frac{36}{8}=4.5$.\nStep 3: The smallest integer strictly greater than $4.5$ is $5$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($4$): below the bound; $D=36-32=4>0$, two real solutions.\n* Choice C ($6$): works but is not the smallest.\n* Choice D ($3$): well below the bound; $D=36-24=12>0$.\n\n**Test Day Takeaway:** \"No real solutions\" uses $D<0$ strictly, so the boundary value $4.5$ is excluded.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'discriminant-with-integer-bound', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-355', domain: 'advanced-math', skills: ['discriminant-analysis'], difficulty: 'hard', type: 'multiple-choice',
    question: 'What is the greatest integer value of $m$ such that the equation $mx^2 + 12x + 9 = 0$ has two distinct real solutions?',
    choices: [{ id: 'A', text: '$3$' }, { id: 'B', text: '$4$' }, { id: 'C', text: '$2$' }, { id: 'D', text: '$5$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Two distinct real solutions means $D>0$: $144-36m>0 \\Rightarrow m<4$. Also $m\\neq 0$ (else the equation is linear). The greatest integer below $4$ is $3$.\n\n**The Full Solution:**\nStep 1: With $a=m$, $b=12$, $c=9$, the discriminant is $D=144-36m$.\nStep 2: Two distinct real solutions requires $D>0$, so $144-36m>0 \\Rightarrow m<4$.\nStep 3: For a quadratic, $m\\neq 0$. The greatest integer satisfying $m<4$ is $3$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($4$): the boundary, where $D=0$ gives one repeated solution, not two distinct.\n* Choice C ($2$): valid but not the greatest.\n* Choice D ($5$): exceeds the bound; $D=144-180<0$, no real solutions.\n\n**Test Day Takeaway:** When the unknown is the leading coefficient, also exclude $m=0$ — that value collapses the quadratic into a linear equation.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'discriminant-with-integer-bound', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-356', domain: 'advanced-math', skills: ['discriminant-analysis'], difficulty: 'medium', type: 'multiple-choice',
    question: 'For how many integer values of $k$ in the range $-10 \\leq k \\leq 10$ does the equation $3x^2 + kx + 3 = 0$ have NO real solutions?',
    choices: [{ id: 'A', text: '$11$' }, { id: 'B', text: '$12$' }, { id: 'C', text: '$10$' }, { id: 'D', text: '$9$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** No real solutions means $D<0$: $k^2-4(3)(3)<0 \\Rightarrow k^2-36<0 \\Rightarrow -6<k<6$. The integers $-5,-4,\\dots,5$ number $11$.\n\n**The Full Solution:**\nStep 1: With $a=3$, $b=k$, $c=3$, the discriminant is $D=k^2-36$.\nStep 2: No real solutions requires $D<0$, so $k^2<36 \\Rightarrow -6<k<6$.\nStep 3: The integers strictly between $-6$ and $6$ are $-5,-4,-3,-2,-1,0,1,2,3,4,5$ — that is $11$ values.\n\n**Why the wrong answers are tempting:**\n* Choice B ($12$): includes the endpoints $\\pm 6$, where $D=0$ gives one solution (real, not \"no real\").\n* Choice C ($10$): an off-by-one undercount.\n* Choice D ($9$): undercounts the open interval.\n\n**Test Day Takeaway:** The count of integers in an open interval $(L,U)$ is $U-L-1$; strict bounds exclude the endpoints.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'discriminant-with-integer-bound', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-357', domain: 'advanced-math', skills: ['discriminant-analysis'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What is the smallest positive integer $p$ such that the equation $x^2 + px + 9 = 0$ has at least one real solution?',
    choices: [{ id: 'A', text: '$6$' }, { id: 'B', text: '$5$' }, { id: 'C', text: '$3$' }, { id: 'D', text: '$9$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** \"At least one real solution\" means $D\\geq 0$: $p^2-4(1)(9)\\geq 0 \\Rightarrow p^2\\geq 36 \\Rightarrow p\\geq 6$ for positive $p$. The smallest positive integer is $6$.\n\n**The Full Solution:**\nStep 1: With $a=1$, $b=p$, $c=9$, the discriminant is $D=p^2-36$.\nStep 2: At least one real solution requires $D\\geq 0$, so $p^2\\geq 36$.\nStep 3: For positive $p$ this gives $p\\geq 6$, so the smallest positive integer is $6$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($5$): below the bound; $D=25-36<0$, no real solution.\n* Choice C ($3$): far below the bound; $D=9-36<0$.\n* Choice D ($9$): copies the constant $c$.\n\n**Test Day Takeaway:** \"At least one real solution\" uses $D\\geq 0$, so the boundary value $p=6$ is included.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'discriminant-with-integer-bound', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-358', domain: 'advanced-math', skills: ['discriminant-analysis'], difficulty: 'hard', type: 'multiple-choice',
    question: 'For what range of values of $c$ does the equation $x^2 + cx + 25 = 0$ have no real solutions?',
    choices: [{ id: 'A', text: '$-10 < c < 10$' }, { id: 'B', text: '$c < -10$ or $c > 10$' }, { id: 'C', text: '$c < 25$' }, { id: 'D', text: '$c > 0$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** No real solutions means $D<0$: $c^2-4(1)(25)<0 \\Rightarrow c^2-100<0 \\Rightarrow |c|<10 \\Rightarrow -10<c<10$.\n\n**The Full Solution:**\nStep 1: With $a=1$, $b=c$, $c_{\\text{const}}=25$, the discriminant is $D=c^2-100$.\nStep 2: No real solutions requires $D<0$, so $c^2<100$.\nStep 3: $c^2<100 \\Rightarrow |c|<10 \\Rightarrow -10<c<10$, which is Choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($c<-10$ or $c>10$): this is $|c|>10$, giving $D>0$ — two real solutions.\n* Choice C ($c<25$): ignores the discriminant and just compares to the constant.\n* Choice D ($c>0$): unrelated to the discriminant condition.\n\n**Test Day Takeaway:** $c^2<k \\Leftrightarrow -\\sqrt{k}<c<\\sqrt{k}$ — solving a squared inequality always produces a symmetric open interval.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'discriminant-with-integer-bound', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- factor-by-grouping (4 → 10) ---
  { id: 'bank-am-359', domain: 'advanced-math', skills: ['factoring'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Which of the following is equivalent to $x^3 + 2x^2 + 3x + 6$?',
    choices: [{ id: 'A', text: '$(x + 2)(x^2 + 3)$' }, { id: 'B', text: '$(x + 3)(x^2 + 2)$' }, { id: 'C', text: '$(x^2 + 2)(x + 3)$' }, { id: 'D', text: '$(x + 2)(x^2 - 3)$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Factor by Grouping**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Group in pairs: $x^2(x+2)+3(x+2)=(x+2)(x^2+3)$.\n\n**The Full Solution:**\nStep 1: Split into two groups: $(x^3+2x^2)+(3x+6)$.\nStep 2: Factor each group: $x^2(x+2)+3(x+2)$.\nStep 3: The common binomial $(x+2)$ factors out: $(x+2)(x^2+3)$.\n\n**Why the wrong answers are tempting:**\n* Choice B: $(x+3)(x^2+2)$ expands to $x^3+2x+3x^2+6$, which is $x^3+3x^2+2x+6$ — not the original.\n* Choice C: the same product as B with factors reordered, so also wrong.\n* Choice D: $(x+2)(x^2-3)$ has a sign error and expands to $x^3+2x^2-3x-6$.\n\n**Test Day Takeaway:** Group the first two and last two terms, factor each pair, then pull out the shared binomial.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'factor-by-grouping', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-360', domain: 'advanced-math', skills: ['factoring'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Which of the following is equivalent to $2x^3 - x^2 + 8x - 4$?',
    choices: [{ id: 'A', text: '$(2x - 1)(x^2 + 4)$' }, { id: 'B', text: '$(x - 4)(2x^2 + 1)$' }, { id: 'C', text: '$(2x + 1)(x^2 - 4)$' }, { id: 'D', text: '$(2x - 1)(x^2 - 4)$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Factor by Grouping**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Group in pairs: $x^2(2x-1)+4(2x-1)=(2x-1)(x^2+4)$.\n\n**The Full Solution:**\nStep 1: Split into two groups: $(2x^3-x^2)+(8x-4)$.\nStep 2: Factor each group: $x^2(2x-1)+4(2x-1)$.\nStep 3: The common binomial $(2x-1)$ factors out: $(2x-1)(x^2+4)$.\n\n**Why the wrong answers are tempting:**\n* Choice B: $(x-4)(2x^2+1)$ expands to $2x^3+x-8x^2-4$ — wrong middle terms.\n* Choice C: $(2x+1)(x^2-4)$ flips the sign on the linear factor; it expands to $2x^3-8x+x^2-4$.\n* Choice D: $(2x-1)(x^2-4)$ has a sign error on the constant; it expands to $2x^3-x^2-8x+4$.\n\n**Test Day Takeaway:** Grouping works only when both pairs leave the same binomial factor; if they differ, regroup or re-check the signs.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'factor-by-grouping', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-361', domain: 'advanced-math', skills: ['factoring'], difficulty: 'easy', type: 'multiple-choice',
    question: 'Which of the following is equivalent to $6x^2 - 9x + 10x - 15$?',
    choices: [{ id: 'A', text: '$(2x - 3)(3x + 5)$' }, { id: 'B', text: '$(3x - 5)(2x + 3)$' }, { id: 'C', text: '$(2x + 3)(3x - 5)$' }, { id: 'D', text: '$(2x - 3)(3x - 5)$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Factor by Grouping**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Group the four terms in pairs and pull out each GCF: $6x^2-9x=3x(2x-3)$ and $10x-15=5(2x-3)$. Both share $(2x-3)$, so the result is $(2x-3)(3x+5)$.\n\n**The Full Solution:**\nStep 1: Split into pairs: $(6x^2-9x)+(10x-15)$.\nStep 2: Factor each pair: $3x(2x-3)+5(2x-3)$.\nStep 3: The common binomial $(2x-3)$ factors out: $(2x-3)(3x+5)$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($(3x-5)(2x+3)$): uses the wrong constants and signs from a misgrouping.\n* Choice C ($(2x+3)(3x-5)$): flips the signs on both factors.\n* Choice D ($(2x-3)(3x-5)$): keeps the right first factor but makes the second factor negative instead of $+5$.\n\n**Test Day Takeaway:** After grouping and factoring each pair, the two pairs must leave the same binomial — if they don't, regroup or recheck a sign.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'factor-by-grouping', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-362', domain: 'advanced-math', skills: ['factoring'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Which of the following is equivalent to $x^3 - 3x^2 + 5x - 15$?',
    choices: [{ id: 'A', text: '$(x - 3)(x^2 + 5)$' }, { id: 'B', text: '$(x + 3)(x^2 - 5)$' }, { id: 'C', text: '$(x - 5)(x^2 + 3)$' }, { id: 'D', text: '$(x - 3)(x^2 - 5)$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Factor by Grouping**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Pair the terms: $x^3-3x^2=x^2(x-3)$ and $5x-15=5(x-3)$. Both share $(x-3)$, giving $(x-3)(x^2+5)$.\n\n**The Full Solution:**\nStep 1: Group: $(x^3-3x^2)+(5x-15)$.\nStep 2: Factor each pair: $x^2(x-3)+5(x-3)$.\nStep 3: Pull out the shared $(x-3)$: $(x-3)(x^2+5)$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($(x+3)(x^2-5)$): sign-flips both factors.\n* Choice C ($(x-5)(x^2+3)$): swaps the $3$ and the $5$ between factors.\n* Choice D ($(x-3)(x^2-5)$): right first factor, but the second pair gives $+5$, not $-5$.\n\n**Test Day Takeaway:** The binomial from the first pair must match the binomial from the second pair exactly, sign and all, before you factor it out.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'factor-by-grouping', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-363', domain: 'advanced-math', skills: ['factoring'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Which of the following is equivalent to $4ab + 6a + 10b + 15$?',
    choices: [{ id: 'A', text: '$(2b + 3)(2a + 5)$' }, { id: 'B', text: '$(2a + 3)(2b + 5)$' }, { id: 'C', text: '$(2b + 5)(2a + 3)$' }, { id: 'D', text: '$(2a - 3)(2b - 5)$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Factor by Grouping**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Group by the variable $a$: $4ab+6a=2a(2b+3)$ and $10b+15=5(2b+3)$. Both share $(2b+3)$, so the answer is $(2b+3)(2a+5)$.\n\n**The Full Solution:**\nStep 1: Group: $(4ab+6a)+(10b+15)$.\nStep 2: Factor each pair: $2a(2b+3)+5(2b+3)$.\nStep 3: Factor out $(2b+3)$: $(2b+3)(2a+5)$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($(2a+3)(2b+5)$): pairs the constants $3$ and $5$ with the wrong variables.\n* Choice C ($(2b+5)(2a+3)$): same swap as B, just written in the other order.\n* Choice D ($(2a-3)(2b-5)$): introduces negative signs that the all-positive expression never produces.\n\n**Test Day Takeaway:** Group along one variable first; the GCF you pull from each pair tells you which binomial is shared.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'factor-by-grouping', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-364', domain: 'advanced-math', skills: ['factoring'], difficulty: 'hard', type: 'multiple-choice',
    question: 'Which of the following is equivalent to $2x^3 + 5x^2 - 2x - 5$?',
    choices: [{ id: 'A', text: '$(2x + 5)(x - 1)(x + 1)$' }, { id: 'B', text: '$(2x + 5)(x^2 - 1)$' }, { id: 'C', text: '$(2x - 5)(x + 1)(x - 1)$' }, { id: 'D', text: '$(2x + 5)(x^2 + 1)$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Factor by Grouping**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Group: $2x^3+5x^2=x^2(2x+5)$ and $-2x-5=-(2x+5)$. That gives $(2x+5)(x^2-1)$, and the difference of squares finishes it: $(2x+5)(x-1)(x+1)$.\n\n**The Full Solution:**\nStep 1: Group: $(2x^3+5x^2)+(-2x-5)$.\nStep 2: Factor each pair: $x^2(2x+5)-1(2x+5)$, so $(2x+5)(x^2-1)$.\nStep 3: $x^2-1$ is a difference of squares: $x^2-1=(x-1)(x+1)$, giving $(2x+5)(x-1)(x+1)$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($(2x+5)(x^2-1)$): correct but stops one step early — $x^2-1$ still factors.\n* Choice C ($(2x-5)(x+1)(x-1)$): sign error on the linear factor; grouping gives $+5$.\n* Choice D ($(2x+5)(x^2+1)$): wrote a sum of squares instead of the difference $x^2-1$.\n\n**Test Day Takeaway:** After grouping, always scan the leftover quadratic for a further factor — $x^2-1$ is a difference of squares hiding in plain sight.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'factor-by-grouping', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- function-composition (4 → 10) ---
  { id: 'bank-am-365', domain: 'advanced-math', skills: ['function-composition'], difficulty: 'easy', type: 'multiple-choice',
    question: 'Functions $f$ and $g$ are defined by $f(x) = 2x + 3$ and $g(x) = x - 1$. What is the value of $f(g(4))$?',
    choices: [{ id: 'A', text: '$9$' }, { id: 'B', text: '$10$' }, { id: 'C', text: '$8$' }, { id: 'D', text: '$11$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Function Composition**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Inner first: $g(4)=4-1=3$. Then $f(3)=2(3)+3=9$.\n\n**The Full Solution:**\nStep 1: $f(g(4))$ means evaluate $g$ at $4$, then feed the result into $f$.\nStep 2: $g(4)=4-1=3$.\nStep 3: $f(3)=2(3)+3=6+3=9$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($10$): computes $g(f(4))$ instead — wrong order.\n* Choice C ($8$): drops the $+3$ in $f$, computing $2(3)+2$.\n* Choice D ($11$): arithmetic slip, treating $g(4)=4$ then $f(4)=11$.\n\n**Test Day Takeaway:** In $f(g(x))$, evaluate the inner function first, then substitute its output into the outer function.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-composition', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-366', domain: 'advanced-math', skills: ['function-composition'], difficulty: 'easy', type: 'multiple-choice',
    question: 'Functions $f$ and $g$ are defined by $f(x) = x^2$ and $g(x) = x + 5$. What is the value of $f(g(2))$?',
    choices: [{ id: 'A', text: '$49$' }, { id: 'B', text: '$9$' }, { id: 'C', text: '$27$' }, { id: 'D', text: '$25$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Function Composition**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Inner first: $g(2)=2+5=7$. Then $f(7)=7^2=49$.\n\n**The Full Solution:**\nStep 1: $f(g(2))$ means compute $g(2)$, then square it with $f$.\nStep 2: $g(2)=2+5=7$.\nStep 3: $f(7)=7^2=49$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($9$): swaps the order — $g(f(2))=g(4)=9$.\n* Choice C ($27$): an unrelated value such as $3^3$; not produced by either composition.\n* Choice D ($25$): squares the input $2$ and ignores the $+5$ inside $g$.\n\n**Test Day Takeaway:** Order matters in composition: $f(g(x))\\neq g(f(x))$ in general — always start from the innermost function.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-composition', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-367', domain: 'advanced-math', skills: ['function-composition'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Functions $f$ and $g$ are defined by $f(x) = 3x - 1$ and $g(x) = x^2$. What is the value of $g(f(2))$?',
    choices: [{ id: 'A', text: '$25$' }, { id: 'B', text: '$5$' }, { id: 'C', text: '$11$' }, { id: 'D', text: '$10$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Function Composition**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Inner first: $f(2)=3(2)-1=5$. Then $g(5)=5^2=25$.\n\n**The Full Solution:**\nStep 1: $g(f(2))$ means compute $f(2)$, then square it with $g$.\nStep 2: $f(2)=3(2)-1=6-1=5$.\nStep 3: $g(5)=5^2=25$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($5$): stops at $f(2)$ and forgets to apply $g$.\n* Choice C ($11$): swaps the order — $f(g(2))=f(4)=3(4)-1=11$.\n* Choice D ($10$): arithmetic slip, e.g. doubling $5$ instead of squaring it.\n\n**Test Day Takeaway:** $g(f(x))$ reads right to left in evaluation order: do $f(x)$ first, then drop that result into $g$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-composition', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-368', domain: 'advanced-math', skills: ['function-composition'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Functions $f$ and $g$ are defined by $f(x) = x + 4$ and $g(x) = 2x$. Which of the following is an expression for $f(g(x))$?',
    choices: [{ id: 'A', text: '$2x + 4$' }, { id: 'B', text: '$2x + 8$' }, { id: 'C', text: '$x + 8$' }, { id: 'D', text: '$2(x + 4)$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Function Composition**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Wherever $x$ sits in $f$, write $g(x)=2x$: $f(g(x))=2x+4$.\n\n**The Full Solution:**\nStep 1: $f(g(x))$ substitutes the whole inner function into $f(x)=x+4$.\nStep 2: Replace $x$ with $2x$: $f(2x)=2x+4$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($2x+8$): doubles the constant $4$ as well, but $f$ only adds $4$.\n* Choice C ($x+8$): adds the inputs rather than substituting $2x$ for $x$.\n* Choice D ($2(x+4)$): this is $g(f(x))=2(x+4)$ — the reversed order.\n\n**Test Day Takeaway:** To compose, copy the inner function into every $x$ of the outer function — substitution, not arithmetic.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-composition', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-369', domain: 'advanced-math', skills: ['function-composition'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Functions $f$ and $g$ are defined by $f(x) = x^2 - 3$ and $g(x) = x + 1$. Which of the following is an expression for $f(g(x))$?',
    choices: [{ id: 'A', text: '$x^2 + 2x - 2$' }, { id: 'B', text: '$x^2 - 2$' }, { id: 'C', text: '$x^2 + 1$' }, { id: 'D', text: '$x^2 + 2x + 1$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Function Composition**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Substitute $g(x)=x+1$ into $f$: $f(g(x))=(x+1)^2-3=x^2+2x+1-3=x^2+2x-2$.\n\n**The Full Solution:**\nStep 1: $f(g(x))$ replaces $x$ in $f(x)=x^2-3$ with $x+1$.\nStep 2: $(x+1)^2=x^2+2x+1$.\nStep 3: Subtract $3$: $x^2+2x+1-3=x^2+2x-2$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($x^2-2$): treats $(x+1)^2$ as $x^2+1$, dropping the $2x$ cross term.\n* Choice C ($x^2+1$): forgets to subtract the $3$ from $f$.\n* Choice D ($x^2+2x+1$): expands the square correctly but never subtracts the $3$.\n\n**Test Day Takeaway:** Expand a squared binomial in full — $(x+1)^2=x^2+2x+1$ — before applying the rest of the outer function.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-composition', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-370', domain: 'advanced-math', skills: ['function-composition'], difficulty: 'hard', type: 'multiple-choice',
    question: 'Function $f$ is defined by $f(x) = 2x - 5$. If $f(g(x)) = 6x + 1$ for all values of $x$, which of the following is an expression for $g(x)$?',
    choices: [{ id: 'A', text: '$3x + 3$' }, { id: 'B', text: '$3x - 3$' }, { id: 'C', text: '$6x - 4$' }, { id: 'D', text: '$3x + 6$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Function Composition**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $f(g(x))=2\\,g(x)-5$. Set it equal to the target: $2g(x)-5=6x+1\\Rightarrow 2g(x)=6x+6\\Rightarrow g(x)=3x+3$.\n\n**The Full Solution:**\nStep 1: Since $f(x)=2x-5$, composing gives $f(g(x))=2\\,g(x)-5$.\nStep 2: That must equal $6x+1$: $2g(x)-5=6x+1$.\nStep 3: Add $5$: $2g(x)=6x+6$. Divide by $2$: $g(x)=3x+3$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($3x-3$): a sign slip on the constant — solving $2g(x)=6x-6$ instead of $6x+6$.\n* Choice C ($6x-4$): adds $5$ to the wrong side and forgets to divide by $2$.\n* Choice D ($3x+6$): divides the $6x$ term but not the constant, leaving the $+6$ undivided.\n\n**Test Day Takeaway:** When the outer function and the composite are given, write $f(g(x))$ symbolically, set it equal to the target, and solve for $g(x)$ — dividing every term, not just one.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-composition', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- function-evaluation-with-negative-input (4 → 10) ---
  { id: 'bank-am-371', domain: 'advanced-math', skills: ['function-evaluation'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = x^2 + 2x - 1$. What is the value of $f(-3)$?',
    choices: [{ id: 'A', text: '$2$' }, { id: 'B', text: '$14$' }, { id: 'C', text: '$-4$' }, { id: 'D', text: '$-2$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $f(-3)=(-3)^2+2(-3)-1=9-6-1=2$.\n\n**The Full Solution:**\nStep 1: Substitute $x=-3$ into $f(x)=x^2+2x-1$.\nStep 2: $(-3)^2=9$, $2(-3)=-6$.\nStep 3: Combine: $9-6-1=2$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($14$): treats $(-3)^2$ as needing extra positive terms, or adds instead of subtracting.\n* Choice C ($-4$): sign error on the $2x$ term, using $+6$ instead of $-6$ with a further slip.\n* Choice D ($-2$): mishandles $(-3)^2$ as $-9$, giving $-9+6+1$.\n\n**Test Day Takeaway:** A negative raised to an even power is positive: $(-3)^2=+9$. Then carry each term's sign through the sum.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-evaluation-with-negative-input', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-372', domain: 'advanced-math', skills: ['function-evaluation'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The function $g$ is defined by $g(x) = 2x^2 - 5x + 3$. What is the value of $g(-2)$?',
    choices: [{ id: 'A', text: '$21$' }, { id: 'B', text: '$1$' }, { id: 'C', text: '$-3$' }, { id: 'D', text: '$13$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $g(-2)=2(-2)^2-5(-2)+3=2(4)+10+3=21$.\n\n**The Full Solution:**\nStep 1: Substitute $x=-2$ into $g(x)=2x^2-5x+3$.\nStep 2: $2(-2)^2=2(4)=8$ and $-5(-2)=+10$.\nStep 3: Combine: $8+10+3=21$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($1$): treats $-5(-2)$ as $-10$ instead of $+10$.\n* Choice C ($-3$): drops the quadratic term entirely.\n* Choice D ($13$): misses the $+10$ from $-5(-2)$, using $8+2+3$.\n\n**Test Day Takeaway:** A negative times a negative is positive: $-5\\cdot(-2)=+10$. Track that sign flip on every linear term.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-evaluation-with-negative-input', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-373', domain: 'advanced-math', skills: ['function-evaluation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The function $h$ is defined by $h(x) = -x^3 + 4$. What is the value of $h(-1)$?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$3$' }, { id: 'C', text: '$-3$' }, { id: 'D', text: '$-5$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $h(-1) = -(-1)^3 + 4$. Since $(-1)^3 = -1$, this is $-(-1) + 4 = 1 + 4 = 5$.\n\n**The Full Solution:**\nStep 1: Substitute $x = -1$: $h(-1) = -(-1)^3 + 4$.\nStep 2: An odd power keeps the sign, so $(-1)^3 = -1$.\nStep 3: Apply the leading negation: $-(-1) = 1$, then add: $1 + 4 = 5$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($3$): treats $(-1)^3$ as $+1$, computing $-(+1) + 4 = 3$.\n* Choice C ($-3$): drops the leading negation and also flips the constant, computing $-1 - 2$ or a similar double sign slip.\n* Choice D ($-5$): drops the leading negation and treats the constant as $-4$: $-1 - 4 = -5$.\n\n**Test Day Takeaway:** A negative base raised to an odd power stays negative; then apply any leading sign and combine.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-evaluation-with-negative-input', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-374', domain: 'advanced-math', skills: ['function-evaluation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = 3x^2 - x - 7$. What is the value of $f(-4)$?',
    choices: [{ id: 'A', text: '$45$' }, { id: 'B', text: '$-43$' }, { id: 'C', text: '$53$' }, { id: 'D', text: '$37$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $f(-4) = 3(-4)^2 - (-4) - 7 = 3(16) + 4 - 7 = 48 + 4 - 7 = 45$.\n\n**The Full Solution:**\nStep 1: Substitute $x = -4$: $f(-4) = 3(-4)^2 - (-4) - 7$.\nStep 2: Square first: $(-4)^2 = 16$, so $3(16) = 48$.\nStep 3: The middle term $-(-4) = +4$, and the constant is $-7$.\nStep 4: Combine: $48 + 4 - 7 = 45$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-43$): mishandles the signs on the squared and middle terms.\n* Choice C ($53$): forgets to subtract the $7$.\n* Choice D ($37$): drops the $+4$ from the $-x$ term.\n\n**Test Day Takeaway:** When $x$ is negative, $-x$ becomes positive: at $x = -4$, the $-x$ term contributes $+4$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-evaluation-with-negative-input', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-375', domain: 'advanced-math', skills: ['function-evaluation'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = 2 - x^2$. What is the value of $f(-5)$?',
    choices: [{ id: 'A', text: '$-23$' }, { id: 'B', text: '$27$' }, { id: 'C', text: '$-27$' }, { id: 'D', text: '$23$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $f(-5) = 2 - (-5)^2 = 2 - 25 = -23$.\n\n**The Full Solution:**\nStep 1: Substitute $x = -5$: $f(-5) = 2 - (-5)^2$.\nStep 2: Square first: $(-5)^2 = 25$ (an even power makes it positive).\nStep 3: Subtract: $2 - 25 = -23$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($27$): treats $(-5)^2$ as $-25$, giving $2 - (-25)$.\n* Choice C ($-27$): subtracts $25$ from $-2$ or sign-slips on the constant.\n* Choice D ($23$): drops the negative on the result.\n\n**Test Day Takeaway:** A negative base raised to an even power is positive; square before applying the surrounding subtraction.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-evaluation-with-negative-input', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-376', domain: 'advanced-math', skills: ['function-evaluation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = x^2 + 2x + c$. If $f(-3) = 4$, what is the value of $c$?',
    choices: [{ id: 'A', text: '$1$' }, { id: 'B', text: '$7$' }, { id: 'C', text: '$-5$' }, { id: 'D', text: '$13$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $f(-3) = (-3)^2 + 2(-3) + c = 9 - 6 + c = 3 + c$. Set $3 + c = 4 \\Rightarrow c = 1$.\n\n**The Full Solution:**\nStep 1: Substitute $x = -3$: $f(-3) = (-3)^2 + 2(-3) + c$.\nStep 2: Evaluate the numeric terms: $9 - 6 + c = 3 + c$.\nStep 3: Set equal to the given value: $3 + c = 4$.\nStep 4: Solve: $c = 1$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($7$): uses $+6$ instead of $-6$ for $2(-3)$, getting $9 + 6 + c = 15 + c = 4$ — but then mishandles the algebra to land on $7$.\n* Choice C ($-5$): mishandles the substitution of the squared or linear term.\n* Choice D ($13$): adds rather than subtracts when isolating $c$.\n\n**Test Day Takeaway:** Substitute the input, simplify the known terms, then set equal to the target value and solve for the unknown parameter.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-evaluation-with-negative-input', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- function-transformation (4 → 10) ---
  { id: 'bank-am-377', domain: 'advanced-math', skills: ['function-transformations', 'vertex-form'], difficulty: 'easy', type: 'multiple-choice',
    question: 'If $f(x) = x^2$, the graph of $y = f(x) - 3$ in the $xy$-plane is the graph of $f$ shifted in which direction?',
    choices: [{ id: 'A', text: 'Down $3$ units' }, { id: 'B', text: 'Up $3$ units' }, { id: 'C', text: 'Left $3$ units' }, { id: 'D', text: 'Right $3$ units' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Function Transformation**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $y = f(x) - 3$ subtracts from the output, which shifts the graph DOWN by $3$ units.\n\n**The Full Solution:**\nStep 1: A change made outside the function (to the output $y$) is a vertical shift.\nStep 2: Subtracting $3$ from every output lowers each point: $y = f(x) - 3$ moves down $3$.\n\n**Why the wrong answers are tempting:**\n* Choice B (up $3$): that would be $f(x) + 3$.\n* Choice C (left $3$): that would be $f(x + 3)$, an inside change moving opposite its sign.\n* Choice D (right $3$): that would be $f(x - 3)$.\n\n**Test Day Takeaway:** Outside the function is a vertical shift in the same direction; inside the function is a horizontal shift in the opposite direction.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-transformation', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-378', domain: 'advanced-math', skills: ['function-transformations', 'vertex-form'], difficulty: 'easy', type: 'multiple-choice',
    question: 'If $f(x) = x^2$, the graph of $y = f(x + 2)$ in the $xy$-plane is the graph of $f$ shifted in which direction?',
    choices: [{ id: 'A', text: 'Left $2$ units' }, { id: 'B', text: 'Right $2$ units' }, { id: 'C', text: 'Up $2$ units' }, { id: 'D', text: 'Down $2$ units' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Function Transformation**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $y = f(x + 2)$ changes the input, so the shift is OPPOSITE the sign: $+2$ moves the graph LEFT by $2$ units.\n\n**The Full Solution:**\nStep 1: A change made inside the function (to the input $x$) is a horizontal shift.\nStep 2: Horizontal shifts go opposite the sign: $f(x + 2)$ moves left $2$, $f(x - 2)$ moves right $2$.\n\n**Why the wrong answers are tempting:**\n* Choice B (right $2$): reads $+2$ as \"right,\" but inside-the-function shifts go the opposite way.\n* Choice C (up $2$): a vertical shift would come from a change outside the function.\n* Choice D (down $2$): also a vertical shift, not a horizontal one.\n\n**Test Day Takeaway:** Inside-the-function shifts move opposite their sign: $f(x + h)$ goes left by $h$; $f(x - h)$ goes right by $h$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-transformation', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-379', domain: 'advanced-math', skills: ['function-transformations', 'vertex-form'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The function $g$ is defined by $g(x) = (x - 4)^2 + 1$. What is the vertex of the graph of $y = g(x)$ in the $xy$-plane?',
    choices: [{ id: 'A', text: '$(4, 1)$' }, { id: 'B', text: '$(-4, 1)$' }, { id: 'C', text: '$(4, -1)$' }, { id: 'D', text: '$(-4, -1)$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Function Transformation**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** In vertex form $a(x - h)^2 + k$, the vertex is $(h, k)$. Here $g(x) = (x - 4)^2 + 1$, so $(h, k) = (4, 1)$.\n\n**The Full Solution:**\nStep 1: Match $(x - 4)^2 + 1$ to $a(x - h)^2 + k$.\nStep 2: $x - h = x - 4$ gives $h = 4$; the added constant gives $k = 1$.\nStep 3: The vertex is $(4, 1)$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($(-4, 1)$): reads $h$ with the wrong sign, using the $-4$ as written.\n* Choice C ($(4, -1)$): flips the sign of $k$.\n* Choice D ($(-4, -1)$): sign errors on both $h$ and $k$.\n\n**Test Day Takeaway:** In $a(x - h)^2 + k$, $h$ is the value that makes the squared term zero, so read it with the opposite sign of what appears inside.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-transformation', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-380', domain: 'advanced-math', skills: ['function-transformations', 'vertex-form'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The graph of $y = f(x)$ is shown in the $xy$-plane. The graph of $y = -f(x) + 5$ is obtained from the graph of $f$ by which sequence of transformations?',
    // Generic cubic-shaped f: the stem promises a shown graph, but the answer is
    // determined purely by the algebraic form -f(x) + 5, so no specific curve
    // feature leaks the answer. Peaks near ±4.9 stay inside the y-range.
    diagram: { type: 'cubicGraph', params: { a: 0.2, roots: [-4, 0, 4], xRange: [-6, 6], yRange: [-8, 8], label: 'y = f(x)' } },
    choices: [{ id: 'A', text: 'Reflection across the $x$-axis, then shift up $5$ units' }, { id: 'B', text: 'Reflection across the $y$-axis, then shift up $5$ units' }, { id: 'C', text: 'Reflection across the $x$-axis, then shift down $5$ units' }, { id: 'D', text: 'Shift up $5$ units, then reflection across the $x$-axis' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Function Transformation**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $-f(x)$ negates the output, which reflects the graph across the $x$-axis. The $+5$ then shifts it up $5$ units.\n\n**The Full Solution:**\nStep 1: $y = -f(x) + 5$ first negates $f(x)$: multiplying every output by $-1$ reflects the graph across the $x$-axis.\nStep 2: Adding $5$ to the result shifts the reflected graph up $5$ units.\nStep 3: So the order is reflect across the $x$-axis, then shift up $5$.\n\n**Why the wrong answers are tempting:**\n* Choice B: a reflection across the $y$-axis comes from $f(-x)$, not $-f(x)$.\n* Choice C: the $+5$ shifts up, not down.\n* Choice D: reflecting after shifting up would negate the $+5$ as well, giving $-f(x) - 5$, not $-f(x) + 5$.\n\n**Test Day Takeaway:** $-f(x)$ flips across the $x$-axis; $f(-x)$ flips across the $y$-axis. Apply the reflection built into the negation first, then the outside shift.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-transformation', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-381', domain: 'advanced-math', skills: ['function-transformations', 'vertex-form'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Function $f$ has zeros at $x = -1$ and $x = 3$. What are the zeros of $g(x) = f(x - 2)$?',
    choices: [{ id: 'A', text: '$x = 1$ and $x = 5$' }, { id: 'B', text: '$x = -3$ and $x = 1$' }, { id: 'C', text: '$x = -1$ and $x = 3$' }, { id: 'D', text: '$x = 1$ and $x = -5$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Function Transformation**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $g(x) = f(x - 2)$ shifts the graph RIGHT by $2$, so each zero moves right by $2$: $-1 + 2 = 1$ and $3 + 2 = 5$.\n\n**The Full Solution:**\nStep 1: $f(x - 2)$ is an inside change, a horizontal shift opposite the sign, so the graph moves right $2$.\nStep 2: A zero is where the graph crosses the $x$-axis, so the zeros move with the graph.\nStep 3: Shift each zero right $2$: $-1 \\to 1$ and $3 \\to 5$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($x = -3$ and $x = 1$): shifts left by $2$ instead of right.\n* Choice C ($x = -1$ and $x = 3$): leaves the zeros unchanged.\n* Choice D ($x = 1$ and $x = -5$): shifts one zero the wrong direction.\n\n**Test Day Takeaway:** A horizontal shift moves the zeros the same way it moves the graph; $f(x - h)$ adds $h$ to each zero.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-transformation', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-382', domain: 'advanced-math', skills: ['function-transformations', 'vertex-form'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = x^2 - 4x + 7$. Which of the following describes the graph of $f$ as a transformation of the graph of $y = x^2$?',
    choices: [{ id: 'A', text: 'Shift right $2$ units and up $3$ units' }, { id: 'B', text: 'Shift left $2$ units and up $3$ units' }, { id: 'C', text: 'Shift right $2$ units and up $7$ units' }, { id: 'D', text: 'Shift left $4$ units and up $7$ units' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Function Transformation**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Complete the square: $x^2 - 4x + 7 = (x - 2)^2 - 4 + 7 = (x - 2)^2 + 3$. That is $y = x^2$ shifted right $2$ and up $3$.\n\n**The Full Solution:**\nStep 1: Take half of the $x$-coefficient: $\\frac{-4}{2} = -2$, and square it: $(-2)^2 = 4$.\nStep 2: Rewrite: $x^2 - 4x + 7 = (x - 2)^2 - 4 + 7$.\nStep 3: Combine the constants: $-4 + 7 = 3$, giving $(x - 2)^2 + 3$.\nStep 4: Compared to $y = x^2$, this is a shift right $2$ (from $h = 2$) and up $3$ (from $k = 3$).\n\n**Why the wrong answers are tempting:**\n* Choice B (left $2$, up $3$): wrong direction on the horizontal shift; $h = 2$ means right.\n* Choice C (right $2$, up $7$): forgets to subtract the $4$ when completing the square, leaving the original $7$.\n* Choice D (left $4$, up $7$): reads the raw coefficient $-4$ and constant $7$ directly instead of converting to vertex form.\n\n**Test Day Takeaway:** Complete the square to reach $a(x - h)^2 + k$; then $h > 0$ is a shift right and $k > 0$ is a shift up.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-transformation', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- interpret-exponential-parameters (4 → 10) ---
  { id: 'bank-am-383', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'easy', type: 'multiple-choice',
    question: 'An account balance, in dollars, is modeled by $B(t) = 5000 \\cdot (1.04)^t$, where $t$ is the time in years. Which of the following is the BEST interpretation of the value $1.04$ in this model?',
    choices: [{ id: 'A', text: 'The balance grows by $4\\%$ each year.' }, { id: 'B', text: 'The balance grows by $104\\%$ each year.' }, { id: 'C', text: 'The initial balance is $\\$1.04$.' }, { id: 'D', text: 'The balance is $\\$1.04$ after $1$ year.' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Interpret Exponential Parameters**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The base $1.04 = 1 + 0.04$, so the balance grows by $4\\%$ each year.\n\n**The Full Solution:**\nStep 1: In $B(t) = 5000 \\cdot (1.04)^t$, the base $1.04$ is the per-year multiplier.\nStep 2: Write it as $1 + r$: $1.04 = 1 + 0.04$, so $r = 0.04 = 4\\%$.\nStep 3: A multiplier above $1$ means growth, so the balance grows $4\\%$ per year.\n\n**Why the wrong answers are tempting:**\n* Choice B ($104\\%$ growth): reads the whole multiplier as the rate; $104\\%$ of the prior balance is only $4\\%$ growth.\n* Choice C ($\\$1.04$ initial): confuses the base with the initial value, which is the $5000$ out front.\n* Choice D ($\\$1.04$ after $1$ year): misreads the base as a balance, ignoring the $5000$.\n\n**Test Day Takeaway:** For an exponential model, the growth rate is the base minus $1$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'interpret-exponential-parameters', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-384', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A population, $P$, is modeled by $P(t) = 200 \\cdot (0.85)^t$, where $t$ is years. Which of the following is the BEST interpretation of $0.85$?',
    choices: [{ id: 'A', text: 'The population decreases by $15\\%$ each year.' }, { id: 'B', text: 'The population is $85$ each year.' }, { id: 'C', text: 'The population decreases by $85\\%$ each year.' }, { id: 'D', text: 'The initial population is $0.85$.' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Interpret Exponential Parameters**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The base $0.85 = 1 - 0.15$, so the population decreases by $15\\%$ each year.\n\n**The Full Solution:**\nStep 1: In $P(t) = 200 \\cdot (0.85)^t$, the base $0.85$ is the per-year multiplier.\nStep 2: Write it as $1 - r$: $0.85 = 1 - 0.15$, so $r = 0.15 = 15\\%$.\nStep 3: A multiplier below $1$ means decay, so the population drops $15\\%$ per year.\n\n**Why the wrong answers are tempting:**\n* Choice B ($85$ each year): misreads the base as a fixed count rather than a multiplier.\n* Choice C ($85\\%$ decrease): reads the base $0.85$ as the loss; retaining $85\\%$ means losing only $15\\%$.\n* Choice D ($0.85$ initial): confuses the base with the initial value, which is the $200$ out front.\n\n**Test Day Takeaway:** For decay, the rate lost is $1$ minus the base; the population keeps a fraction equal to the base.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'interpret-exponential-parameters', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-385', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A bacterial population, $N$, is modeled by $N(t) = 80 \\cdot 2^{t/5}$, where $t$ is time in hours. Which of the following is the BEST interpretation of the $5$ in the exponent?',
    choices: [{ id: 'A', text: 'The population doubles every $5$ hours.' }, { id: 'B', text: 'The population is $5$ at $t = 0$.' }, { id: 'C', text: 'The population grows by $5\\%$ each hour.' }, { id: 'D', text: 'It takes $5$ hours for the population to grow by $80$.' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Interpret Exponential Parameters**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The base is $2$, so the population multiplies by $2$ (doubles) once for every full unit of the exponent. The exponent $\\frac{t}{5}$ reaches $1$ when $t=5$, so the population doubles every $5$ hours.\n\n**The Full Solution:**\nStep 1: Write the model as $N(t)=80\\cdot 2^{t/5}$. The base $2$ controls what the population is multiplied by.\nStep 2: The exponent $\\frac{t}{5}$ equals $1$ exactly when $t=5$. At that moment $N=80\\cdot 2^{1}=160$, double the start.\nStep 3: So $5$ is the time for one doubling. Choice A matches.\n\n**Why the wrong answers are tempting:**\n* Choice B: confuses the $5$ with the initial population, but that is the coefficient $80$.\n* Choice C: treats the doubling period as a percent growth rate; the period and the rate are different parameters.\n* Choice D: scrambles the model into a meaningless statement.\n\n**Test Day Takeaway:** In $a\\cdot b^{t/T}$, the value $T$ is the time for one full multiplication by the base $b$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'interpret-exponential-parameters', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-386', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A function is given by $y = 120 \\cdot (0.5)^{t/10}$, where $t$ is measured in years. What is the half-life, in years, of the quantity modeled by $y$?',
    choices: [{ id: 'A', text: '$10$' }, { id: 'B', text: '$5$' }, { id: 'C', text: '$120$' }, { id: 'D', text: '$0.5$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Interpret Exponential Parameters**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Base $0.5$ halves the quantity once per full unit of the exponent. The exponent $\\frac{t}{10}$ equals $1$ at $t=10$, so the half-life is $10$ years.\n\n**The Full Solution:**\nStep 1: In $y=120\\cdot(0.5)^{t/10}$, the base $0.5$ means each full step multiplies $y$ by $\\frac{1}{2}$.\nStep 2: The exponent $\\frac{t}{10}$ reaches $1$ when $t=10$. There $y=120\\cdot(0.5)^{1}=60$, exactly half.\nStep 3: One halving takes $10$ years, so the half-life is $10$. Choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($5$): half of the exponent's denominator, an unmotivated shortcut.\n* Choice C ($120$): copies the initial value.\n* Choice D ($0.5$): copies the base, not the period.\n\n**Test Day Takeaway:** Half-life is the value of $T$ in $a\\cdot(0.5)^{t/T}$ — the time it takes the quantity to halve once.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'interpret-exponential-parameters', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-387', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'easy', type: 'multiple-choice',
    question: 'An investment account is modeled by $A(t) = 2000 \\cdot (1.06)^t$, where $t$ is years since the account was opened. Which of the following is the BEST interpretation of $2000$?',
    choices: [{ id: 'A', text: 'The initial investment, in dollars.' }, { id: 'B', text: 'The annual growth rate, as a percent.' }, { id: 'C', text: 'The balance after $1$ year.' }, { id: 'D', text: 'The number of years the account has been open.' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Interpret Exponential Parameters**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Set $t=0$: $A(0)=2000\\cdot(1.06)^{0}=2000$. The coefficient is the balance at the start — the initial investment.\n\n**The Full Solution:**\nStep 1: In $A(t)=2000\\cdot(1.06)^{t}$, the coefficient $2000$ is the value when $t=0$.\nStep 2: Confirm: $(1.06)^{0}=1$, so $A(0)=2000$. That is the amount deposited when the account opened.\n\n**Why the wrong answers are tempting:**\n* Choice B: the annual growth rate is read from the base $1.06$ (a $6\\%$ rate), not from $2000$.\n* Choice C: the balance after $1$ year is $A(1)=2000\\cdot 1.06=2120$, not $2000$.\n* Choice D: $t$ is the number of years; it is the input, not the coefficient.\n\n**Test Day Takeaway:** In $a\\cdot b^{t}$, the coefficient $a$ is the value when $t=0$ — the starting amount.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'interpret-exponential-parameters', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-388', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The town of Greenfield, with current population $40{,}000$, is growing at an annual rate of $8\\%$. Which function $P$ gives the predicted population $t$ years from now?',
    choices: [{ id: 'A', text: '$P(t) = 40000 \\cdot (1.08)^t$' }, { id: 'B', text: '$P(t) = 40000 \\cdot (0.08)^t$' }, { id: 'C', text: '$P(t) = 40000 + 0.08t$' }, { id: 'D', text: '$P(t) = 40000 \\cdot (8)^t$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Interpret Exponential Parameters**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Annual growth of $8\\%$ means each year multiplies by $1+0.08=1.08$. Start at $40{,}000$, so $P(t)=40000\\cdot(1.08)^{t}$. Choice A.\n\n**The Full Solution:**\nStep 1: A percent growth rate $r$ becomes a base of $1+r$. Here $r=0.08$, so the base is $1.08$.\nStep 2: The starting population is $40{,}000$, the coefficient. Each year multiplies it by $1.08$.\nStep 3: That gives $P(t)=40000\\cdot(1.08)^{t}$, Choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B: uses $0.08$ as the base — a base below $1$ models decay, the opposite of growth.\n* Choice C: a linear model that adds a fixed amount each year, not a fixed percent.\n* Choice D: misreads $8\\%$ as the whole number $8$, which would multiply the population eightfold every year.\n\n**Test Day Takeaway:** A growth rate $r$ (as a decimal) gives base $1+r$; a decay rate gives base $1-r$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'interpret-exponential-parameters', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- vertex-form-from-two-conditions (4 → 10) ---
  { id: 'bank-am-389', domain: 'advanced-math', skills: ['vertex-form', 'function-evaluation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A parabola with vertex $(3, 5)$ passes through the point $(5, 9)$. The parabola can be written as $y = a(x - 3)^2 + 5$. What is the value of $a$?',
    choices: [{ id: 'A', text: '$1$' }, { id: 'B', text: '$2$' }, { id: 'C', text: '$\\dfrac{1}{2}$' }, { id: 'D', text: '$4$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Substitute the point $(5,9)$ into $y=a(x-3)^2+5$: $9=a(5-3)^2+5=4a+5$, so $4a=4$ and $a=1$. Choice A.\n\n**The Full Solution:**\nStep 1: The vertex $(3,5)$ is already built into the form $y=a(x-3)^2+5$.\nStep 2: Plug in the other point, $x=5$, $y=9$: $9=a(2)^2+5=4a+5$.\nStep 3: Solve: $4a=4\\Rightarrow a=1$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($2$): an arithmetic slip in solving $4a+5=9$.\n* Choice C ($\\frac{1}{2}$): inverts the relationship, dividing $4$ by $8$ or similar.\n* Choice D ($4$): stops at $(5-3)^2=4$ without isolating $a$.\n\n**Test Day Takeaway:** With the vertex already in the equation, substitute the extra point and solve the single equation for $a$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-from-two-conditions', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-390', domain: 'advanced-math', skills: ['vertex-form', 'function-evaluation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A parabola $f(x) = a(x - h)^2$ has $f(2) = 0$ and $f(4) = 8$. What is the value of $a$?',
    choices: [{ id: 'A', text: '$2$' }, { id: 'B', text: '$4$' }, { id: 'C', text: '$\\dfrac{1}{2}$' }, { id: 'D', text: '$1$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $f(x)=a(x-h)^2$ has its only zero at the vertex, so $f(2)=0$ gives $h=2$. Then $f(4)=a(4-2)^2=4a=8$, so $a=2$. Choice A.\n\n**The Full Solution:**\nStep 1: With no constant term, $a(x-h)^2=0$ only when $x=h$. Since $f(2)=0$, set $h=2$.\nStep 2: Use $f(4)=8$: $8=a(4-2)^2=a(2)^2=4a$.\nStep 3: Solve: $a=\\frac{8}{4}=2$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($4$): forgets to square $(4-2)$, treating the equation as $8=2a$.\n* Choice C ($\\frac{1}{2}$): inverts, dividing $4$ by $8$ instead of $8$ by $4$.\n* Choice D ($1$): an arithmetic slip in dividing.\n\n**Test Day Takeaway:** In $a(x-h)^2$ with no added constant, the single zero is at $x=h$ — that pins down $h$ before solving for $a$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-from-two-conditions', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-391', domain: 'advanced-math', skills: ['vertex-form', 'function-evaluation'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The graph of $y = (x - h)^2 + k$ in the $xy$-plane has vertex $(4, -1)$. What is the value of $h + k$?',
    choices: [{ id: 'A', text: '$3$' }, { id: 'B', text: '$5$' }, { id: 'C', text: '$-5$' }, { id: 'D', text: '$-3$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Vertex form $y=(x-h)^2+k$ reads its vertex off directly as $(h,k)$. So $h=4$, $k=-1$, and $h+k=3$. Choice A.\n\n**The Full Solution:**\nStep 1: The vertex of $y=(x-h)^2+k$ is the point $(h,k)$. Given vertex $(4,-1)$, match coordinates: $h=4$, $k=-1$.\nStep 2: Add: $h+k=4+(-1)=3$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($5$): adds the absolute values, $4+1$.\n* Choice C ($-5$): sign error, $-4-1$.\n* Choice D ($-3$): negates the correct sum.\n\n**Test Day Takeaway:** The vertex $(h,k)$ reads straight off $a(x-h)^2+k$ — watch the sign flip inside the parentheses.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-from-two-conditions', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-392', domain: 'advanced-math', skills: ['vertex-form', 'function-evaluation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The graph of $y = a(x + 1)^2 + 7$ passes through $(2, 16)$. What is the value of $a$?',
    choices: [{ id: 'A', text: '$1$' }, { id: 'B', text: '$3$' }, { id: 'C', text: '$\\dfrac{9}{16}$' }, { id: 'D', text: '$\\dfrac{7}{9}$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Plug $(2,16)$ into $y=a(x+1)^2+7$: $16=a(2+1)^2+7=9a+7$, so $9a=9$ and $a=1$. Choice A.\n\n**The Full Solution:**\nStep 1: The vertex form $y=a(x+1)^2+7$ has the constant $7$ and the shift built in.\nStep 2: Substitute $x=2$, $y=16$: $16=a(3)^2+7=9a+7$.\nStep 3: Solve: $9a=9\\Rightarrow a=1$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($3$): forgets to square the binomial, treating $(2+1)^2$ as $3$.\n* Choice C ($\\frac{9}{16}$): inverts a ratio of the numbers in the problem.\n* Choice D ($\\frac{7}{9}$): an unmotivated fraction built from the constant and the squared term.\n\n**Test Day Takeaway:** Substitute the known point's $x$ and $y$ into the equation and solve for the one remaining parameter.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-from-two-conditions', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-393', domain: 'advanced-math', skills: ['vertex-form', 'function-evaluation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The graph of $y = (x - h)^2$ has its only zero at $x = 4$. What is the value of $h$?',
    choices: [{ id: 'A', text: '$4$' }, { id: 'B', text: '$-4$' }, { id: 'C', text: '$2$' }, { id: 'D', text: '$0$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $(x-h)^2=0$ exactly when $x=h$. The only zero is at $x=4$, so $h=4$. Choice A.\n\n**The Full Solution:**\nStep 1: $y=(x-h)^2$ touches zero only where the squared term is zero, at $x=h$.\nStep 2: The graph's only zero is $x=4$, so $h=4$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-4$): flips the sign inside $(x-h)$.\n* Choice C ($2$): takes a square root that does not belong here.\n* Choice D ($0$): copies the $y$-value at the zero instead of the $x$-value.\n\n**Test Day Takeaway:** $(x-h)^2=0$ if and only if $x=h$, so a single zero of $(x-h)^2$ gives $h$ directly.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-from-two-conditions', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-394', domain: 'advanced-math', skills: ['vertex-form', 'function-evaluation'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A parabola can be written as $y = a(x - h)^2 + k$. The parabola has vertex $(-3, 8)$ and passes through the point $(0, -1)$. What is the value of $a$?',
    choices: [{ id: 'A', text: '$-1$' }, { id: 'B', text: '$1$' }, { id: 'C', text: '$-3$' }, { id: 'D', text: '$\\dfrac{1}{3}$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Vertex $(-3,8)$ fixes $h=-3$, $k=8$. Plug in $(0,-1)$: $-1=a(0-(-3))^2+8=9a+8$, so $9a=-9$ and $a=-1$. Choice A.\n\n**The Full Solution:**\nStep 1: From vertex $(-3,8)$, the form is $y=a(x+3)^2+8$.\nStep 2: Substitute the point $(0,-1)$: $-1=a(0+3)^2+8=9a+8$.\nStep 3: Solve: $9a=-1-8=-9\\Rightarrow a=-1$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($1$): drops the negative when solving $9a=-9$.\n* Choice C ($-3$): mishandles the squaring, dividing by $3$ instead of $9$.\n* Choice D ($\\frac{1}{3}$): inverts and loses the sign.\n\n**Test Day Takeaway:** Vertex form pre-fills $h$ and $k$; one additional point gives a single equation that solves for $a$ — keep the sign.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-from-two-conditions', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- vertex-form-maximum (4 → 10) ---
  { id: 'bank-am-395', domain: 'advanced-math', skills: ['converting-quadratic-forms'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What is the maximum value of $f(x) = -(x - 3)^2 + 8$?',
    choices: [{ id: 'A', text: '$8$' }, { id: 'B', text: '$3$' }, { id: 'C', text: '$-8$' }, { id: 'D', text: '$11$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** The leading coefficient is $-1<0$, so the parabola opens down and the vertex is the maximum. The vertex value is $k=8$. Choice A.\n\n**The Full Solution:**\nStep 1: In $f(x)=-(x-3)^2+8$, the squared term is never positive after the negative sign — it is at most $0$.\nStep 2: $f$ is largest when $-(x-3)^2=0$, i.e. at $x=3$, leaving $f=8$.\nStep 3: So the maximum value is $8$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($3$): reports $h$, the location of the max, not the value.\n* Choice C ($-8$): sign error on the constant.\n* Choice D ($11$): adds $h$ and $k$ ($3+8$) instead of reading $k$ alone.\n\n**Test Day Takeaway:** The max or min value of $a(x-h)^2+k$ is $k$ — a maximum when $a<0$, a minimum when $a>0$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-maximum', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-396', domain: 'advanced-math', skills: ['converting-quadratic-forms'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What is the maximum value of $g(x) = -2(x + 1)^2 + 12$?',
    choices: [{ id: 'A', text: '$12$' }, { id: 'B', text: '$-2$' }, { id: 'C', text: '$1$' }, { id: 'D', text: '$10$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Leading coefficient $-2<0$ means the parabola opens down, so its vertex is the maximum. The vertex value is $k=12$. Choice A.\n\n**The Full Solution:**\nStep 1: In $g(x)=-2(x+1)^2+12$, the term $-2(x+1)^2$ is at most $0$.\nStep 2: $g$ peaks when $(x+1)^2=0$, at $x=-1$, leaving $g=12$.\nStep 3: The maximum value is $12$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-2$): copies the leading coefficient $a$.\n* Choice C ($1$): copies the shift related to $h$, not the value.\n* Choice D ($10$): subtracts $a$ from $k$ ($12-2$) instead of reading $k$ alone.\n\n**Test Day Takeaway:** The constant outside the squared term in $a(x-h)^2+k$ is the max or min value — here, $k=12$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-maximum', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-397', domain: 'advanced-math', skills: ['converting-quadratic-forms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What is the maximum value of $y = -x^2 + 4x + 5$?',
    choices: [{ id: 'A', text: '$9$' }, { id: 'B', text: '$5$' }, { id: 'C', text: '$4$' }, { id: 'D', text: '$8$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** A downward parabola peaks at $x=-\\frac{b}{2a}=-\\frac{4}{2(-1)}=2$. Then $y=-(2)^2+4(2)+5=-4+8+5=9$.\n\n**The Full Solution:**\nStep 1: Since $a=-1<0$, the parabola opens down, so its maximum is the vertex's $y$-value.\nStep 2: Complete the square: $-(x^2-4x)+5=-(x-2)^2+4+5=-(x-2)^2+9$.\nStep 3: The vertex is $(2,9)$, so the maximum value is $9$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($5$): copies the constant from the original equation, not the vertex value.\n* Choice C ($4$): stops at the $+4$ from completing the square and forgets to add the $+5$.\n* Choice D ($8$): arithmetic slip when combining the constants.\n\n**Test Day Takeaway:** For a maximum or minimum *value*, convert to vertex form (or use $x=-\\frac{b}{2a}$ then substitute) and read off the $y$-coordinate, never the constant term.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-maximum', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-398', domain: 'advanced-math', skills: ['converting-quadratic-forms'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = 10 - 3(x - 2)^2$. At what value of $x$ does $f$ attain its maximum?',
    choices: [{ id: 'A', text: '$2$' }, { id: 'B', text: '$10$' }, { id: 'C', text: '$-3$' }, { id: 'D', text: '$0$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** In $f(x)=10-3(x-2)^2$, the vertex is at $x=h=2$, and since the squared term is subtracted the parabola opens down, so the maximum occurs there.\n\n**The Full Solution:**\nStep 1: The form $a(x-h)^2+k$ has its vertex at $x=h$. Here $h=2$.\nStep 2: The coefficient $a=-3<0$, so the vertex is a maximum.\nStep 3: The maximum is attained at $x=2$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($10$): returns $k$, the maximum *value*, not the $x$ where it occurs.\n* Choice C ($-3$): copies the leading coefficient $a$.\n* Choice D ($0$): default guess with no basis in the form.\n\n**Test Day Takeaway:** Max/min OCCURS at $x=h$; the max/min VALUE is $k$. The question asks which one.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-maximum', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-399', domain: 'advanced-math', skills: ['converting-quadratic-forms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What is the maximum value of $y = -2x^2 + 8x - 3$?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$3$' }, { id: 'C', text: '$8$' }, { id: 'D', text: '$-3$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Vertex at $x=-\\frac{b}{2a}=-\\frac{8}{2(-2)}=2$. Then $y=-2(2)^2+8(2)-3=-8+16-3=5$.\n\n**The Full Solution:**\nStep 1: $a=-2<0$, so the parabola opens down and the maximum is the vertex's $y$-value.\nStep 2: Vertex $x$: $-\\frac{b}{2a}=-\\frac{8}{-4}=2$.\nStep 3: Substitute: $-2(4)+16-3=5$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($3$): negates the constant $-3$.\n* Choice C ($8$): copies $b$.\n* Choice D ($-3$): copies the original constant term.\n\n**Test Day Takeaway:** Use $x=-\\frac{b}{2a}$ to locate the vertex, then plug back in for the maximum $y$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-maximum', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-400', domain: 'advanced-math', skills: ['converting-quadratic-forms'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The function $f(x) = a(x - 4)^2 + 11$ has maximum value $11$. If $f(0) = 2$, what is the value of $a$?',
    choices: [{ id: 'A', text: '$-\\dfrac{9}{16}$' }, { id: 'B', text: '$\\dfrac{9}{16}$' }, { id: 'C', text: '$-1$' }, { id: 'D', text: '$\\dfrac{2}{11}$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** With the vertex value already $11$, just use $f(0)$: $a(0-4)^2+11=16a+11=2$, so $16a=-9$ and $a=-\\frac{9}{16}$.\n\n**The Full Solution:**\nStep 1: The form $a(x-4)^2+11$ has vertex value $11$, and \"maximum value $11$\" forces $a<0$ (opens down).\nStep 2: Plug in $f(0)=2$: $a(-4)^2+11=2 \\Rightarrow 16a+11=2$.\nStep 3: Solve: $16a=-9 \\Rightarrow a=-\\frac{9}{16}$, which is negative as required.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{9}{16}$): drops the negative sign, contradicting that the parabola has a maximum.\n* Choice C ($-1$): rounds $-\\frac{9}{16}$ to a \"clean\" value.\n* Choice D ($\\frac{2}{11}$): forms a fraction from the given numbers instead of solving.\n\n**Test Day Takeaway:** A parabola with a maximum must have $a<0$ — use the sign as a built-in check on your answer.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-maximum', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- vieta-sum-product-of-roots (4 → 10) ---
  { id: 'bank-am-401', domain: 'advanced-math', skills: ['quadratic-factoring'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What is the sum of the solutions of the equation $x^2 - 7x + 12 = 0$?',
    choices: [{ id: 'A', text: '$7$' }, { id: 'B', text: '$12$' }, { id: 'C', text: '$-7$' }, { id: 'D', text: '$-12$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Vieta Sum & Product of Roots**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** For $x^2+bx+c=0$, the sum of the roots is $-b$. Here $b=-7$, so the sum is $-(-7)=7$.\n\n**The Full Solution:**\nStep 1: Factor: $x^2-7x+12=(x-3)(x-4)=0$, so the roots are $3$ and $4$.\nStep 2: Their sum is $3+4=7$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($12$): the *product* of the roots, not the sum.\n* Choice C ($-7$): copies the middle coefficient without negating it.\n* Choice D ($-12$): negates the product.\n\n**Test Day Takeaway:** For $x^2+bx+c=0$: sum of roots $=-b$, product $=c$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vieta-sum-product-of-roots', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-402', domain: 'advanced-math', skills: ['quadratic-factoring'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What is the product of the solutions of the equation $x^2 - 3x - 10 = 0$?',
    choices: [{ id: 'A', text: '$-10$' }, { id: 'B', text: '$10$' }, { id: 'C', text: '$3$' }, { id: 'D', text: '$-3$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Vieta Sum & Product of Roots**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** For $x^2+bx+c=0$, the product of the roots is $c$. Here $c=-10$, so the product is $-10$.\n\n**The Full Solution:**\nStep 1: Factor: $x^2-3x-10=(x-5)(x+2)=0$, so the roots are $5$ and $-2$.\nStep 2: Their product is $5 \\cdot (-2)=-10$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($10$): drops the negative sign.\n* Choice C ($3$): the negated middle coefficient (sum), not the product.\n* Choice D ($-3$): copies the middle coefficient.\n\n**Test Day Takeaway:** For $x^2+bx+c=0$, the product of the roots equals the constant $c$ — keep its sign.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vieta-sum-product-of-roots', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-403', domain: 'advanced-math', skills: ['quadratic-factoring'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What is the sum of the solutions of $2x^2 - 10x + 8 = 0$?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$10$' }, { id: 'C', text: '$4$' }, { id: 'D', text: '$-5$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Vieta Sum & Product of Roots**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** For $ax^2+bx+c=0$, the sum of the roots is $-\\frac{b}{a}=-\\frac{-10}{2}=5$.\n\n**The Full Solution:**\nStep 1: Here $a=2$, $b=-10$, $c=8$.\nStep 2: Sum of roots $=-\\frac{b}{a}=-\\frac{-10}{2}=5$. (Check: $2x^2-10x+8=2(x-1)(x-4)$, roots $1$ and $4$, sum $5$.)\n\n**Why the wrong answers are tempting:**\n* Choice B ($10$): negates $b$ but forgets to divide by $a$.\n* Choice C ($4$): the product $\\frac{c}{a}=\\frac{8}{2}$, not the sum.\n* Choice D ($-5$): sign error on the negation.\n\n**Test Day Takeaway:** When $a\\neq 1$, sum $=-\\frac{b}{a}$ and product $=\\frac{c}{a}$ — always divide by the leading coefficient.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vieta-sum-product-of-roots', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-404', domain: 'advanced-math', skills: ['quadratic-factoring'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What is the product of the solutions of $3x^2 + 6x - 15 = 0$?',
    choices: [{ id: 'A', text: '$-5$' }, { id: 'B', text: '$-15$' }, { id: 'C', text: '$5$' }, { id: 'D', text: '$15$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Vieta Sum & Product of Roots**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** For $ax^2+bx+c=0$, the product of the roots is $\\frac{c}{a}=\\frac{-15}{3}=-5$.\n\n**The Full Solution:**\nStep 1: Here $a=3$, $b=6$, $c=-15$.\nStep 2: Product of roots $=\\frac{c}{a}=\\frac{-15}{3}=-5$. (Equivalently, $3x^2+6x-15=3(x^2+2x-5)$, and the roots of $x^2+2x-5$ multiply to $-5$.)\n\n**Why the wrong answers are tempting:**\n* Choice B ($-15$): copies $c$ but forgets to divide by $a$.\n* Choice C ($5$): drops the negative sign.\n* Choice D ($15$): drops the sign and forgets to divide by $a$.\n\n**Test Day Takeaway:** When $a\\neq 1$, divide by the leading coefficient: product $=\\frac{c}{a}$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vieta-sum-product-of-roots', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-405', domain: 'advanced-math', skills: ['quadratic-factoring'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The equation $x^2 + kx + 12 = 0$ has solutions $r$ and $s$ with $r + s = -7$. What is the value of $k$?',
    choices: [{ id: 'A', text: '$7$' }, { id: 'B', text: '$-7$' }, { id: 'C', text: '$12$' }, { id: 'D', text: '$-12$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Vieta Sum & Product of Roots**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** For $x^2+kx+12=0$, the sum of roots is $-k$. Given $r+s=-7$, set $-k=-7$, so $k=7$.\n\n**The Full Solution:**\nStep 1: For $x^2+bx+c=0$, sum of roots $=-b$. Here the middle coefficient is $k$, so $r+s=-k$.\nStep 2: $-k=-7 \\Rightarrow k=7$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-7$): copies the given sum without negating to recover $k$.\n* Choice C ($12$): copies the constant term.\n* Choice D ($-12$): negates the constant term.\n\n**Test Day Takeaway:** The middle coefficient is the negative of the root sum: $k=-(r+s)$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vieta-sum-product-of-roots', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-406', domain: 'advanced-math', skills: ['quadratic-factoring'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The solutions of the equation $x^2 - bx + c = 0$ are $4$ and $9$. What is the value of $b + c$?',
    choices: [{ id: 'A', text: '$49$' }, { id: 'B', text: '$13$' }, { id: 'C', text: '$36$' }, { id: 'D', text: '$45$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Vieta Sum & Product of Roots**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** For $x^2-bx+c=0$, sum of roots $=b$ and product $=c$. So $b=4+9=13$ and $c=4 \\cdot 9=36$, giving $b+c=13+36=49$.\n\n**The Full Solution:**\nStep 1: The equation $x^2-bx+c$ has middle coefficient $-b$, so sum of roots $=-(-b)=b=4+9=13$.\nStep 2: Product of roots $=c=4 \\cdot 9=36$.\nStep 3: $b+c=13+36=49$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($13$): returns only $b$.\n* Choice C ($36$): returns only $c$.\n* Choice D ($45$): arithmetic slip when adding $13+36$.\n\n**Test Day Takeaway:** From roots, build the equation: sum gives $b$ (here the coefficient is $-b$), product gives $c$. Then combine as the question asks.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vieta-sum-product-of-roots', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // === DIFFICULT-QUESTIONS PDF BATCH (2026-05-22) — 18 advanced-math items reskinned ===

  { id: 'bank-am-407', domain: 'advanced-math', skills: ['vertex-form', 'discriminant-analysis'], difficulty: 'hard', type: 'multiple-choice',
    question: 'In the $xy$-plane, the graph of the equation $y=-x^2+7x-80$ intersects the line $y=c$ at exactly one point. What is the value of $c$?',
    choices: [{ id: 'A', text: '$-\\dfrac{271}{4}$' }, { id: 'B', text: '$-80$' }, { id: 'C', text: '$-\\dfrac{49}{4}$' }, { id: 'D', text: '$-\\dfrac{7}{2}$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Horizontal Tangent to a Parabola (Max/Min)**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The line $y=c$ meets the parabola at exactly one point only when $c$ equals the vertex's $y$-value. Vertex $x=-\\frac{b}{2a}=\\frac{7}{2}$, so $c=-\\left(\\frac{7}{2}\\right)^2+7\\cdot\\frac{7}{2}-80=-\\frac{49}{4}+\\frac{49}{2}-80=-\\frac{271}{4}$.\n\n**The Full Solution:**\nStep 1: One intersection of a parabola with a horizontal line happens at the vertex (the turning point).\nStep 2: Vertex $x=-\\frac{7}{2(-1)}=\\frac{7}{2}$.\nStep 3: $y=-\\frac{49}{4}+\\frac{49}{2}-80=-\\frac{49}{4}+\\frac{98}{4}-\\frac{320}{4}=-\\frac{271}{4}$, so $c=-\\frac{271}{4}$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-80$): copies the constant from the equation.\n* Choice C ($-\\frac{49}{4}$): uses only $-\\left(\\frac{7}{2}\\right)^2$ and drops the rest of the vertex evaluation.\n* Choice D ($-\\frac{7}{2}$): returns the vertex $x$-coordinate (with a sign slip), not its $y$-value.\n\n**Test Day Takeaway:** \"Intersects a horizontal line at exactly one point\" means the line sits at the parabola's max or min — set $c$ equal to the vertex $y$-value.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-maximum', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-am-408', domain: 'advanced-math', skills: ['exponential-growth-decay', 'exponential-y-intercept'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A model estimates that at the end of each year from $2017$ to $2022$, the number of deer in a population was $150\\%$ more than the number of deer in the population at the end of the previous year. The model estimates that at the end of $2018$, there were $200$ deer in the population. Which of the following equations represents this model, where $n$ is the estimated number of deer in the population $t$ years after the end of $2017$ and $t\\le 5$?',
    choices: [{ id: 'A', text: '$n = 80(1.5)^t$' }, { id: 'B', text: '$n = 80(2.5)^t$' }, { id: 'C', text: '$n = 200(1.5)^t$' }, { id: 'D', text: '$n = 200(2.5)^t$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Build Exponential Growth Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** \"$150\\%$ more\" multiplies by $1+\\frac{150}{100}=2.5$ each year, so the base is $2.5$. The end of $2017$ is $t=0$; the end of $2018$ is $t=1$, where there are $200$ deer, so $n_0=\\frac{200}{2.5}=80$. Thus $n=80(2.5)^t$.\n\n**The Full Solution:**\nStep 1: \"$150\\%$ more than the previous year\" means each year's count is the previous year plus $150\\%$ of it, a factor of $2.5$.\nStep 2: $t$ counts years after the end of $2017$, so $t=0$ is the end of $2017$ and $t=1$ is the end of $2018$.\nStep 3: At $t=1$, $n=200$: $n_0(2.5)^1=200 \\Rightarrow n_0=80$.\nStep 4: The model is $n=80(2.5)^t$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($80(1.5)^t$): uses $1.5$ for \"$150\\%$\" instead of $2.5$ for \"$150\\%$ more.\"\n* Choice C ($200(1.5)^t$): wrong base and treats $200$ as the $t=0$ value.\n* Choice D ($200(2.5)^t$): correct base but uses $200$ as the initial amount, ignoring that $200$ is the $t=1$ value.\n\n**Test Day Takeaway:** \"$p\\%$ more\" gives a growth factor of $1+\\frac{p}{100}$; anchor the initial value at the stated $t=0$, not at whatever year the data point names.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'build-exponential-model', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-am-409', domain: 'advanced-math', skills: ['discriminant-analysis', 'identify-quadratic'], difficulty: 'hard', type: 'fill-in',
    question: '$$y = -2.5$$\n$$y = x^2 + 10x + a$$\n\nIn the given system of equations, $a$ is a positive constant. The system has exactly one distinct real solution. What is the value of $a$?',
    correctAnswer: '22.5',
    explanation: "**SAT Pattern: Discriminant Equals Zero (System of Quadratic and Horizontal Line)**\n\n**The correct answer is $22.5$.**\n\n**The Fast Way (~30s):** Set the curves equal and move everything to one side: $x^2+10x+a=-2.5 \\Rightarrow x^2+10x+(a+2.5)=0$. One solution means discriminant $=0$: $10^2-4(a+2.5)=0 \\Rightarrow a+2.5=25 \\Rightarrow a=22.5$.\n\n**The Full Solution:**\nStep 1: Substitute $y=-2.5$ into the parabola: $-2.5=x^2+10x+a$.\nStep 2: Rearrange to a single quadratic $=0$: $x^2+10x+(a+2.5)=0$.\nStep 3: \"Exactly one distinct real solution\" means the discriminant $b^2-4ac=0$, with $a=1$, $b=10$, $c=a+2.5$: $100-4(a+2.5)=0$.\nStep 4: Solve: $4(a+2.5)=100 \\Rightarrow a+2.5=25 \\Rightarrow a=22.5$. This is positive, as required. $\\checkmark$\n\n**Common Mistakes:** Leaving the $-2.5$ on the right side and applying the discriminant to $x^2+10x+a$ (gives $a=25$); confusing the discriminant condition with setting the quadratic formula's numerator to zero.\n\n**Test Day Takeaway:** A parabola meets a horizontal line at exactly one point precisely when the merged quadratic has discriminant zero. Move the line over first, then set $b^2-4ac=0$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'discriminant-analysis', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-am-410', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x)=(x+8)(x+3)(x-5)$. Which of the following must be true about the values of $y=f(x)-4$ at $x=-8,\\,-3,\\,5$?',
    choices: [{ id: 'A', text: 'All three $y$-values equal $-12$.' }, { id: 'B', text: 'All three $y$-values equal $-4$.' }, { id: 'C', text: 'All three $y$-values equal $4$.' }, { id: 'D', text: 'The three $y$-values equal $-4$, $-3$, and $5$ respectively.' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Vertical Shift of a Polynomial**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The inputs $x=-8,\\,-3,\\,5$ are exactly the roots of $f$, so $f(x)=0$ at each. Subtracting $4$ gives $y=0-4=-4$ for all three.\n\n**The Full Solution:**\nStep 1: $f(x)=(x+8)(x+3)(x-5)$ has zeros where any factor is $0$: at $x=-8$, $x=-3$, and $x=5$.\nStep 2: So $f(-8)=f(-3)=f(5)=0$.\nStep 3: The new function is $y=f(x)-4$, a downward shift by $4$. At each of those inputs, $y=0-4=-4$. All three $y$-values equal $-4$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-12$): subtracts $4$ from each of three nonzero outputs as if $f$ were not zero there.\n* Choice C ($4$): shifts up by $4$ instead of down, sign-flipping the $-4$.\n* Choice D ($-4,-3,5$): reads off the root inputs themselves as the outputs.\n\n**Test Day Takeaway:** At a polynomial's roots the output is $0$, so $f(x)+k$ evaluated at any root equals $k$. A vertical shift moves every output by the same constant.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertical-shift', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-am-411', domain: 'advanced-math', skills: ['exponential-growth-decay', 'exponential-y-intercept'], difficulty: 'hard', type: 'multiple-choice',
    question: 'For the function $q$, the value of $q(x)$ decreases by $35\\%$ for every increase in the value of $x$ by $1$. If $q(0)=22$, which equation defines $q$?',
    choices: [{ id: 'A', text: '$q(x) = 0.65(22)^x$' }, { id: 'B', text: '$q(x) = 1.35(22)^x$' }, { id: 'C', text: '$q(x) = 22(0.65)^x$' }, { id: 'D', text: '$q(x) = 22(1.35)^x$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Exponential Decay — Standard Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** A $35\\%$ decrease per step means multiply by $1-0.35=0.65$ each time. Starting at $q(0)=22$ gives $q(x)=22(0.65)^x$.\n\n**The Full Solution:**\nStep 1: Exponential form is $q(x)=a\\cdot b^x$, where $a=q(0)$ is the starting value and $b$ is the per-step multiplier.\nStep 2: $q(0)=22$, so $a=22$.\nStep 3: \"Decreases by $35\\%$\" means $b=1-\\frac{35}{100}=0.65$.\nStep 4: So $q(x)=22(0.65)^x$, which is choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A: swaps the base and the initial value, writing $0.65(22)^x$.\n* Choice B: uses $1.35$ as if the quantity grew by $35\\%$, and also swaps base and start.\n* Choice D: uses the growth factor $1.35$ instead of the decay factor for a decreasing model.\n\n**Test Day Takeaway:** Decay factor $=1-\\frac{p}{100}$. In $a\\cdot b^x$, $a$ is the start and $b$ is the ratio per step — keep them in the right slots.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-decay-expression', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-am-412', domain: 'advanced-math', skills: ['exponent-laws', 'zero-negative-exponents'], difficulty: 'hard', type: 'fill-in',
    question: 'The expression $5\\sqrt[4]{2^4 x^{20}}\\cdot\\sqrt[6]{3^6 x}$ is equivalent to $ax^b$, where $a$ and $b$ are positive constants and $x>1$. What is the value of $a+b$?',
    correctAnswer: '211/6',
    explanation: "**SAT Pattern: Radical with Rational Exponents**\n\n**The correct answer is $\\dfrac{211}{6}$ (about $35.17$).**\n\n**The Fast Way (~40s):** $\\sqrt[4]{2^4 x^{20}}=2x^5$ and $\\sqrt[6]{3^6 x}=3x^{1/6}$. Multiply with the leading $5$: $5\\cdot 2\\cdot 3\\cdot x^{5+\\frac{1}{6}}=30x^{31/6}$. So $a=30$, $b=\\dfrac{31}{6}$, and $a+b=\\dfrac{180+31}{6}=\\dfrac{211}{6}$.\n\n**The Full Solution:**\nStep 1: Simplify the fourth root: $\\sqrt[4]{2^4 x^{20}}=2^{4/4}x^{20/4}=2x^5$.\nStep 2: Simplify the sixth root: $\\sqrt[6]{3^6 x}=3^{6/6}x^{1/6}=3x^{1/6}$.\nStep 3: Combine everything, including the coefficient $5$: $5\\cdot 2x^5\\cdot 3x^{1/6}=30\\,x^{5+\\frac{1}{6}}$.\nStep 4: Add the exponents: $5+\\dfrac{1}{6}=\\dfrac{31}{6}$, so the expression is $30x^{31/6}$, giving $a=30$ and $b=\\dfrac{31}{6}$.\nStep 5: $a+b=30+\\dfrac{31}{6}=\\dfrac{180}{6}+\\dfrac{31}{6}=\\dfrac{211}{6}$.\n\n**Common Mistakes:** Leaving the integer factors $2$ and $3$ trapped inside the radicals instead of pulling them out; adding the radical indices $4$ and $6$ instead of converting to fractional exponents and adding the exponents on $x$.\n\n**Test Day Takeaway:** $\\sqrt[n]{k^n\\cdot x^m}=k\\cdot x^{m/n}$. Convert every root to a fractional exponent, then add exponents on like bases.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'exponent-rules-with-radicals', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-am-413', domain: 'advanced-math', skills: ['vertex-form', 'parabola-direction'], difficulty: 'hard', type: 'multiple-choice',
    question: 'In the $xy$-plane, a parabola has vertex $(8,\\,-20)$ and intersects the $x$-axis at two points. If the equation of the parabola is written in the form $y=ax^2+bx+c$, where $a$, $b$, and $c$ are constants, which of the following could be the value of $a+b+c$?',
    choices: [{ id: 'A', text: '$-25$' }, { id: 'B', text: '$-22$' }, { id: 'C', text: '$-20$' }, { id: 'D', text: '$-18$' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Vertex + Sign-of-Coefficient Reasoning**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** A vertex below the $x$-axis with two $x$-intercepts forces the parabola to open upward, so $a>0$. Then $a+b+c=y(1)=a(1-8)^2-20=49a-20$, and since $a>0$ this exceeds $-20$. Among the choices, only $-18$ is greater than $-20$.\n\n**The Full Solution:**\nStep 1: Write vertex form: $y=a(x-8)^2-20$.\nStep 2: The vertex $(8,-20)$ is below the $x$-axis. For the parabola to cross the $x$-axis twice, it must open upward, so $a>0$.\nStep 3: $a+b+c$ is just $y$ at $x=1$: $y(1)=a(1-8)^2-20=49a-20$.\nStep 4: Since $a>0$, $49a>0$, so $a+b+c>-20$. The value must be strictly greater than $-20$.\nStep 5: Test the choices: $-25$, $-22$, and $-20$ are all $\\le -20$; only $-18$ satisfies $>-20$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-25$): treats the bound the wrong direction, allowing values below $-20$.\n* Choice B ($-22$): same direction error, picking a value still under $-20$.\n* Choice C ($-20$): uses the vertex $y$-value as if $a+b+c$ could equal it, but $a>0$ makes it strictly larger.\n\n**Test Day Takeaway:** $a+b+c$ equals $y(1)$. Pair that single evaluation with the sign of $a$ — fixed here by \"vertex below axis, two intercepts $\\Rightarrow$ opens up\" — to bound the answer.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-application', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-am-414', domain: 'advanced-math', skills: ['exponential-growth-decay', 'exponential-y-intercept'], difficulty: 'hard', type: 'fill-in',
    question: 'The function $f$ is defined by $f(x)=-a^x+b$, where $a$ and $b$ are constants. In the $xy$-plane, the graph of $y=f(x)-10$ has a $y$-intercept at $\\left(0,\\,-\\dfrac{59}{6}\\right)$. The product of $a$ and $b$ is $7$. What is the value of $a$?',
    correctAnswer: '6',
    explanation: "**SAT Pattern: Exponential Shifted Form — Recover Base**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~50s):** The $y$-intercept of $y=f(x)-10$ is $f(0)-10=-\\dfrac{59}{6}$, so $f(0)=-\\dfrac{59}{6}+\\dfrac{60}{6}=\\dfrac{1}{6}$. Since $f(0)=-a^0+b=-1+b$, we get $b=\\dfrac{7}{6}$. Then $ab=7 \\Rightarrow a=\\dfrac{7}{7/6}=6$.\n\n**The Full Solution:**\nStep 1: The graph $y=f(x)-10$ passes through $\\left(0,-\\dfrac{59}{6}\\right)$, so $f(0)-10=-\\dfrac{59}{6}$.\nStep 2: Solve for $f(0)$: $f(0)=-\\dfrac{59}{6}+10=-\\dfrac{59}{6}+\\dfrac{60}{6}=\\dfrac{1}{6}$.\nStep 3: Evaluate the definition at $x=0$: $f(0)=-a^0+b=-1+b$ because $a^0=1$.\nStep 4: Set equal: $-1+b=\\dfrac{1}{6} \\Rightarrow b=\\dfrac{7}{6}$.\nStep 5: Use $ab=7$: $a=\\dfrac{7}{b}=\\dfrac{7}{7/6}=7\\cdot\\dfrac{6}{7}=6$.\n\n**Common Mistakes:** Treating $a^0$ as $0$ instead of $1$, which corrupts $f(0)$; mishandling the shift and writing $f(0)=-\\dfrac{59}{6}-10$ instead of adding $10$.\n\n**Test Day Takeaway:** Plug in $x=0$ to pin one constant from the intercept, then use the given product to recover the other.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'interpret-exponential-parameters', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-am-415', domain: 'advanced-math', skills: ['finding-roots-factoring', 'roots-from-factors'], difficulty: 'hard', type: 'fill-in',
    question: 'The function $g$ is defined by $g(x)=x(x-3)(x+5)^2$. The value of $g(9-w)$ is $0$, where $w$ is a constant. What is the sum of all possible values of $w$?',
    correctAnswer: '29',
    explanation: "**SAT Pattern: Sum of Roots via Input Shift**\n\n**The correct answer is $29$.**\n\n**The Fast Way (~30s):** $g$ is zero at its roots $0$, $3$, and $-5$. Set the input $9-w$ equal to each: $9-w=0,3,-5$ gives $w=9,6,14$. Their sum is $9+6+14=29$.\n\n**The Full Solution:**\nStep 1: $g(x)=x(x-3)(x+5)^2$ equals $0$ when any factor is $0$: at $x=0$, $x=3$, and $x=-5$.\nStep 2: $g(9-w)=0$ requires the input $9-w$ to be one of those roots.\nStep 3: Solve each case: $9-w=0\\Rightarrow w=9$; $9-w=3\\Rightarrow w=6$; $9-w=-5\\Rightarrow w=14$.\nStep 4: Sum the distinct $w$-values: $9+6+14=29$.\n\n**Common Mistakes:** Dropping the $-5$ root because its factor is squared — multiplicity does not remove the root, and $9-w=-5$ still gives a valid $w$; sign errors when solving $9-w=-5$ (landing on $w=4$ instead of $14$).\n\n**Test Day Takeaway:** For $g(c-w)=0$, list the roots of $g$ and back-solve $c-w$ to each one. A repeated factor counts the root once — it produces no extra $w$-value.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'roots-from-factors', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-am-416', domain: 'advanced-math', skills: ['percent-change', 'percent-word-problems'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The result of increasing the quantity $x$ by $350\\%$ is $90$. What is the value of $x$?',
    choices: [{ id: 'A', text: '$20$' }, { id: 'B', text: '$25.7$' }, { id: 'C', text: '$315$' }, { id: 'D', text: '$405$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Reverse Percent Increase**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Increasing by $350\\%$ multiplies by $1+3.5=4.5$. So $4.5x=90 \\Rightarrow x=20$.\n\n**The Full Solution:**\nStep 1: \"Increase by $p\\%$\" multiplies the original by $1+\\dfrac{p}{100}$. Here $1+\\dfrac{350}{100}=4.5$.\nStep 2: The result is $90$: $4.5x=90$.\nStep 3: Solve: $x=\\dfrac{90}{4.5}=20$, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($25.7$): divides $90$ by $3.5$, forgetting to add the original $1$ to the factor.\n* Choice C ($315$): computes $90\\cdot 3.5$, multiplying instead of dividing and dropping the $+1$.\n* Choice D ($405$): computes $90\\cdot 4.5$, multiplying when reversing calls for dividing.\n\n**Test Day Takeaway:** \"Increase by $p\\%$\" means multiply by $1+\\dfrac{p}{100}$. To reverse it, divide the result by that same factor.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'reverse-percent', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-am-417', domain: 'advanced-math', skills: ['exponential-growth-decay', 'exponent-laws'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The function $P$ is defined by $P(t)=380(1.05)^{(8/6)t}$ and models the population, in thousands, of a certain city $t$ years after $2005$. According to the model, the population is predicted to increase by $5\\%$ every $n$ months. What is the value of $n$?',
    choices: [{ id: 'A', text: '$9$' }, { id: 'B', text: '$12$' }, { id: 'C', text: '$16$' }, { id: 'D', text: '$72$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Period of Exponential Growth — Months Interpretation**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The model multiplies by $1.05$ (a $5\\%$ jump) each time the exponent $\\dfrac{8}{6}t$ rises by $1$. That happens when $t$ rises by $\\dfrac{6}{8}=\\dfrac{3}{4}$ year, which is $9$ months.\n\n**The Full Solution:**\nStep 1: $P(t)=380(1.05)^{(8/6)t}$ grows by $5\\%$ each time the exponent increases by exactly $1$.\nStep 2: Set the change in the exponent to $1$: $\\dfrac{8}{6}\\,\\Delta t=1$.\nStep 3: Solve for $\\Delta t$: $\\Delta t=\\dfrac{6}{8}=\\dfrac{3}{4}$ year.\nStep 4: Convert to months: $\\dfrac{3}{4}\\times 12=9$ months, so $n=9$, choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($12$): ignores the $\\dfrac{8}{6}$ factor and assumes one $5\\%$ jump per full year.\n* Choice C ($16$): flips the period, using $\\dfrac{8}{6}$ year instead of $\\dfrac{6}{8}$ year.\n* Choice D ($72$): misreads the rate as occurring over $6$ years, then converts to months.\n\n**Test Day Takeaway:** In $(1+r)^{kt}$, one full multiplication by $(1+r)$ occurs whenever $kt$ advances by $1$ — that is, whenever $t$ advances by $\\dfrac{1}{k}$.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'interpret-exponential-parameters', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-am-418', domain: 'advanced-math', skills: ['vertex-form', 'converting-quadratic-forms'], difficulty: 'hard', type: 'fill-in',
    question: 'The graph of $y=3x^2+bx+c$ has a vertex at $(-2,\\,-10)$, where $b$ and $c$ are constants. What is the value of $bc$?',
    correctAnswer: '24',
    explanation: "**SAT Pattern: Vertex Form to Standard Form — Recover Coefficients**\n\n**The correct answer is $24$.**\n\n**The Fast Way (~40s):** Write vertex form with $a=3$ and vertex $(-2,-10)$: $y=3(x+2)^2-10$. Expand: $3(x^2+4x+4)-10=3x^2+12x+2$. So $b=12$, $c=2$, and $bc=24$.\n\n**The Full Solution:**\nStep 1: The leading coefficient stays $3$, so vertex form is $y=3(x-(-2))^2-10=3(x+2)^2-10$.\nStep 2: Expand the square: $(x+2)^2=x^2+4x+4$.\nStep 3: Distribute the $3$: $3x^2+12x+12$, then add the $-10$: $3x^2+12x+2$.\nStep 4: Match to $3x^2+bx+c$: $b=12$, $c=2$.\nStep 5: $bc=12\\cdot 2=24$.\n\n**Common Mistakes:** Expanding $(x+2)^2$ but forgetting to multiply the whole thing by the leading $3$ (gives $b=4$); using $(x-2)^2$ from a sign slip on the vertex's $x$-coordinate.\n\n**Test Day Takeaway:** To convert vertex form to standard form, expand $(x-h)^2$, distribute $a$ across all three terms, then add $k$ to the constant.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-to-standard-form', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-am-419', domain: 'advanced-math', skills: ['exponential-growth-decay', 'exponential-y-intercept'], difficulty: 'hard', type: 'multiple-choice',
    question: 'At the time that an article was first featured on the home page of a news website, there were $60$ reviews on the article. An exponential model estimates that at the end of each hour after the article was first featured on the home page, the number of reviews on the article had increased by $220\\%$ of the number of reviews on the article at the end of the previous hour. Which of the following equations best represents this model, where $C$ is the estimated number of reviews on the article $t$ hours after the article was first featured on the home page and $t\\le 4$?',
    choices: [{ id: 'A', text: '$C = 60(1.22)^t$' }, { id: 'B', text: '$C = 60(2.2)^t$' }, { id: 'C', text: '$C = 60(22)^t$' }, { id: 'D', text: '$C = 60(3.2)^t$' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Build Exponential Growth — \"$p\\%$ More\" Trap**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Increasing by $220\\%$ of the previous amount multiplies by $1+2.2=3.2$ each hour. Starting at $60$ reviews: $C=60(3.2)^t$.\n\n**The Full Solution:**\nStep 1: Each hour, the count grows by $220\\%$ of the previous count, so the new total is the old total plus $2.2$ times itself: a factor of $1+2.2=3.2$.\nStep 2: The starting value at $t=0$ is $60$ reviews.\nStep 3: Exponential form is $C=C_0\\cdot(\\text{factor})^t=60(3.2)^t$, which is choice D.\n\n**Why the wrong answers are tempting:**\n* Choice A ($1.22$): misreads \"$220\\%$\" as \"$22\\%$\" and uses $1+0.22$.\n* Choice B ($2.2$): uses the percent alone as the factor, forgetting that \"more\" adds $1$.\n* Choice C ($22$): treats the percent number $22$ as the base instead of converting properly.\n\n**Test Day Takeaway:** \"$p\\%$ more\" means multiply by $1+\\dfrac{p}{100}$. A percent above $100$ still adds $1$ — $220\\%$ more is a factor of $3.2$, not $2.2$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'build-exponential-model', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-am-420', domain: 'advanced-math', skills: ['exponent-laws', 'exponential-growth-decay'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x)=(1.62)^{x/3}$. The equation can be rewritten as $f(x)=\\left(1+\\dfrac{p}{100}\\right)^x$, where $p$ is a constant. Which of the following is closest to the value of $p$?',
    choices: [{ id: 'A', text: '$17$' }, { id: 'B', text: '$21$' }, { id: 'C', text: '$54$' }, { id: 'D', text: '$62$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Rewriting Exponential Form — Equivalent Rate**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Rewrite $(1.62)^{x/3}=\\left((1.62)^{1/3}\\right)^x$. Since $(1.62)^{1/3}\\approx 1.174$, set $1+\\dfrac{p}{100}\\approx 1.174$, so $p\\approx 17$.\n\n**The Full Solution:**\nStep 1: Use the power rule to factor the exponent: $(1.62)^{x/3}=\\left((1.62)^{1/3}\\right)^x$.\nStep 2: This matches $\\left(1+\\dfrac{p}{100}\\right)^x$ when the per-step base $(1.62)^{1/3}$ equals $1+\\dfrac{p}{100}$.\nStep 3: Compute the cube root: $(1.62)^{1/3}\\approx 1.174$.\nStep 4: So $1+\\dfrac{p}{100}\\approx 1.174 \\Rightarrow \\dfrac{p}{100}\\approx 0.174 \\Rightarrow p\\approx 17$, closest to choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($21$): overestimates the cube root, pushing the rate too high.\n* Choice C ($54$): roughly $\\dfrac{1.62}{3}$ scaled — mishandles the root entirely.\n* Choice D ($62$): ignores the $\\dfrac{x}{3}$ and reads the rate straight off $1.62$.\n\n**Test Day Takeaway:** $a^{x/k}=\\left(a^{1/k}\\right)^x$. To find the per-unit rate, take the $k$-th root of the base, then subtract $1$.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'interpret-exponential-parameters', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-am-421', domain: 'advanced-math', skills: ['discriminant-analysis', 'identify-quadratic'], difficulty: 'hard', type: 'fill-in',
    question: '$$3x^2 - 10x - 6 = 0$$\n\nOne solution to the given equation can be written as $\\dfrac{10-\\sqrt{k}}{6}$, where $k$ is a constant. What is the value of $k$?',
    correctAnswer: '172',
    explanation: "**SAT Pattern: Quadratic Formula — Discriminant Recovery**\n\n**The correct answer is $172$.**\n\n**The Fast Way (~25s):** With $a=3$, $b=-10$, $c=-6$, the quadratic formula gives $x=\\dfrac{10\\pm\\sqrt{(-10)^2-4(3)(-6)}}{2(3)}=\\dfrac{10\\pm\\sqrt{172}}{6}$. Match the given form $\\dfrac{10-\\sqrt{k}}{6}$: $k=172$.\n\n**The Full Solution:**\nStep 1: Identify the coefficients: $a=3$, $b=-10$, $c=-6$.\nStep 2: Compute the discriminant: $b^2-4ac=(-10)^2-4(3)(-6)=100+72=172$.\nStep 3: The denominator is $2a=6$, so $x=\\dfrac{10\\pm\\sqrt{172}}{6}$, which matches the given solution with $k=172$.\n\n**Common Mistakes:** Treating $-4ac$ as $-72$ (the sign error from $c=-6$) gives a discriminant of $28$; using $2a=3$ instead of $6$ in the denominator misreads the form.\n\n**Test Day Takeaway:** When a solution is written as $\\dfrac{-b\\pm\\sqrt{k}}{2a}$, the unknown $k$ is just the discriminant $b^2-4ac$ — watch the sign on $c$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'discriminant-compute', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-am-422', domain: 'advanced-math', skills: ['simplifying-rational-expressions'], difficulty: 'hard', type: 'multiple-choice',
    question: '$$\\dfrac{x^2}{\\sqrt{x^2-c^2}}=\\dfrac{c^2}{\\sqrt{x^2-c^2}}+42$$\n\nIn the given equation, $c$ is a positive constant. Which of the following is one of the solutions to the given equation?',
    choices: [{ id: 'A', text: '$-c$' }, { id: 'B', text: '$-c^2 - 42^2$' }, { id: 'C', text: '$-\\sqrt{42^2 - c^2}$' }, { id: 'D', text: '$-\\sqrt{c^2 + 42^2}$' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Radical Equation — Extraneous Filter**\n\n**Choice D is correct.**\n\n**The Fast Way (~50s):** Both sides share the denominator $\\sqrt{x^2-c^2}$, so multiply through: $x^2-c^2=42\\sqrt{x^2-c^2}$. Let $u=\\sqrt{x^2-c^2}\\ge 0$, so $u^2=42u\\Rightarrow u=42$ (reject $u=0$, which would kill the denominator). Then $x^2-c^2=42^2\\Rightarrow x=\\pm\\sqrt{c^2+42^2}$, so $-\\sqrt{c^2+42^2}$ is a solution — choice D.\n\n**The Full Solution:**\nStep 1: Multiply both sides by $\\sqrt{x^2-c^2}$ to clear the fractions: $x^2=c^2+42\\sqrt{x^2-c^2}$, i.e. $x^2-c^2=42\\sqrt{x^2-c^2}$.\nStep 2: Substitute $u=\\sqrt{x^2-c^2}$, where $u\\ge 0$. The equation becomes $u^2=42u$, so $u(u-42)=0$.\nStep 3: $u=0$ forces $x^2-c^2=0$, making the original denominator zero — discard it. Take $u=42$, so $x^2-c^2=42^2$.\nStep 4: Solve: $x^2=c^2+42^2\\Rightarrow x=\\pm\\sqrt{c^2+42^2}$. Choice D, $-\\sqrt{c^2+42^2}$, is one solution.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-c$): comes from the rejected case $x^2-c^2=0$, which breaks the domain.\n* Choice B ($-c^2-42^2$): squares-vs-roots confusion — this is $-(c^2+42^2)$, not its square root.\n* Choice C ($-\\sqrt{42^2-c^2}$): sign error inside the radical; the constant adds, it does not subtract.\n\n**Test Day Takeaway:** When a radical appears on its own, substitute $u=\\sqrt{\\cdot}$ to linearize, then filter solutions against $u\\ge 0$ and any denominator that cannot be zero.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'rational-equation-with-extraneous-solution', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-am-423', domain: 'advanced-math', skills: ['finding-roots-factoring', 'roots-from-factors'], difficulty: 'hard', type: 'multiple-choice',
    question: 'Which of the following expressions has a factor of $x+3b$, where $b$ is a positive integer constant?',
    choices: [{ id: 'A', text: '$4x^2 + 14x + 12b$' }, { id: 'B', text: '$4x^2 + 22x + 12b$' }, { id: 'C', text: '$4x^2 + 30x + 12b$' }, { id: 'D', text: '$4x^2 + 40x + 12b$' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Factor with Parameter — Integer Constraint**\n\n**Choice D is correct.**\n\n**The Fast Way (~45s):** If $(x+3b)$ divides $4x^2+Mx+12b$, the other factor must be $(4x+4)$ so the product's constant is $(3b)(4)=12b$. That product is $4x^2+(4+12b)x+12b$, so $M=4+12b\\Rightarrow b=\\dfrac{M-4}{12}$. Only $M=40$ gives an integer $b=3$ — choice D.\n\n**The Full Solution:**\nStep 1: Write the factorization as $(x+3b)(4x+n)=4x^2+(n+12b)x+3bn$.\nStep 2: Match the constant term: $3bn=12b\\Rightarrow n=4$. So the middle coefficient is $n+12b=4+12b$.\nStep 3: Set $4+12b=M$, giving $b=\\dfrac{M-4}{12}$, and require $b$ to be a positive integer.\nStep 4: Test each $M$: $14\\Rightarrow b=\\frac{10}{12}$, $22\\Rightarrow b=\\frac{18}{12}$, $30\\Rightarrow b=\\frac{26}{12}$, $40\\Rightarrow b=3$. Only $M=40$ works.\n\n**Why the wrong answers are tempting:**\n* Choice A ($M=14$): $b=\\frac{10}{12}$ is not an integer.\n* Choice B ($M=22$): $b=\\frac{18}{12}=\\frac{3}{2}$ is not an integer.\n* Choice C ($M=30$): $b=\\frac{26}{12}=\\frac{13}{6}$ is not an integer.\n\n**Test Day Takeaway:** Force the factorization to match the constant first; that pins the second factor, leaves one equation for the parameter, and the integer constraint picks the winner.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'polynomial-remainder-theorem', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-am-424', domain: 'advanced-math', skills: ['vertex-form', 'finding-function-from-conditions'], difficulty: 'hard', type: 'fill-in',
    question: 'The quadratic function $g$ models the depth, in meters, below the surface of the water of a seal $t$ minutes after the seal entered the water during a dive. The function estimates that the seal reached its maximum depth of $384$ meters $8$ minutes after it entered the water and then reached the surface of the water $16$ minutes after it entered the water. Based on the function, what was the estimated depth, to the nearest meter, of the seal $12$ minutes after it entered the water?',
    correctAnswer: '288',
    explanation: "**SAT Pattern: Quadratic Model from Vertex + Zero**\n\n**The correct answer is $288$.**\n\n**The Fast Way (~50s):** The maximum depth $384$ at $t=8$ is the vertex, so $g(t)=a(t-8)^2+384$. The surface ($g=0$) at $t=16$ gives $a(16-8)^2+384=0\\Rightarrow 64a=-384\\Rightarrow a=-6$. Then $g(12)=-6(12-8)^2+384=-96+384=288$.\n\n**The Full Solution:**\nStep 1: The vertex is $(8,384)$, so write vertex form $g(t)=a(t-8)^2+384$.\nStep 2: Use the zero at $t=16$: $a(16-8)^2+384=0\\Rightarrow 64a=-384\\Rightarrow a=-6$.\nStep 3: Evaluate at $t=12$: $g(12)=-6(12-8)^2+384=-6(16)+384=-96+384=288$.\n\n**Common Mistakes:** Making $a$ positive turns the model upside down and gives the wrong sign; treating $(12-8)^2$ as $8$ instead of $16$ undercounts the squared term.\n\n**Test Day Takeaway:** Build a quadratic from its vertex with $a(t-h)^2+k$, then solve for $a$ using a second known point such as a zero before evaluating anywhere else.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'vertex-form-from-two-conditions', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-am-425', domain: 'advanced-math', skills: ['roots-from-factors', 'vertex-formula'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = (x - a)(x - b)$, where $a$ and $b$ are integer constants such that $a < b < 0$. Which of the following statements about the graph of $y = f(x)$ in the $xy$-plane must be true?\n\nI. The $y$-intercept of the graph is above the $x$-axis.\nII. The $x$-coordinate of the vertex of the graph is negative.\nIII. The minimum value of $f$ is positive.',
    choices: [{ id: 'A', text: 'I only' }, { id: 'B', text: 'II and III' }, { id: 'C', text: 'I and II' }, { id: 'D', text: 'I, II, and III' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Quadratic Must-Be-True Statements**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The zeros $a$ and $b$ are both negative. $y$-intercept: $f(0) = ab > 0$ (negative times negative) — I true. Vertex: midway between the zeros at $x = \\frac{a+b}{2} < 0$ — II true. The parabola opens upward and crosses the $x$-axis at two distinct points, so its minimum is BELOW the axis — III false.\n\n**The Full Solution:**\nStatement I: $f(0) = (0-a)(0-b) = ab$. With $a < 0$ and $b < 0$, the product $ab$ is positive, so the $y$-intercept $(0, ab)$ lies above the $x$-axis. Must be true.\nStatement II: The zeros of $f$ are $x = a$ and $x = b$, and the vertex lies on the axis of symmetry halfway between them: $x = \\frac{a+b}{2}$. A sum of two negative numbers is negative. Must be true.\nStatement III: Since $a < b$, the zeros are distinct, so the graph crosses the $x$-axis twice. An upward-opening parabola with two distinct real zeros dips below the axis between them, so the minimum value is negative — III can NEVER be true. (Try $a = -4$, $b = -1$: minimum $f(-2.5) = (1.5)(-1.5) = -2.25 < 0$.)\n\n**Why the wrong answers are tempting:**\n* Choice A (I only): a sign slip on the vertex — expanding gives $f(x) = x^2 - (a+b)x + ab$, and mishandling the double negative in $x_{vertex} = \\frac{a+b}{2}$ makes the vertex look positive.\n* Choice B (II and III): misreads negative $\\times$ negative as negative (rejecting I) and assumes an upward-opening parabola keeps its vertex above the axis (accepting III).\n* Choice D (I, II, and III): accepts III by forgetting that two DISTINCT real zeros force the minimum below the $x$-axis.\n\n**Test Day Takeaway:** In must-be-true problems, hunt for the statement that fails structurally, not numerically: distinct real zeros always pin an upward parabola's vertex below the axis, no matter what the constants are.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'roman-numeral-must-be-true', sourceRef: 'pilot-m3-roman-quadratic', authoredBy: 'seva-cb-craft-pilot', createdAt: '2026-08-13' }
];
