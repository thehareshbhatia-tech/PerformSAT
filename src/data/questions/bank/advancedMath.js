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
    question: "The function $q$ is defined by $q(x) = 2(x + 1)^2 - 8$, and the function $r$ is defined by $r(x) = q(x - c) + d$, where $c$ and $d$ are constants. In the $xy$-plane, the vertex of the graph of $y = r(x)$ is $(3, 1)$. What is the value of $c + d$?",
    choices: [
      // distractor: reverses both shifts, taking $c = -4$ and $d = -9$
      { id: "A", text: "$-13$" },
      // distractor: reads the $+ d$ as a downward shift, taking $d = -9$
      { id: "B", text: "$-5$" },
      // distractor: reads $x - c$ as a shift to the left, taking $c = -4$
      { id: "C", text: "$5$" },
      { id: "D", text: "$13$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Function Transformation**\n\n**Choice D is correct.**\n\n**The Fast Way (~45s):** The vertex of $q$ is $(-1, -8)$, and $r$ moves it to $(-1 + c, -8 + d)$. Matching that to $(3, 1)$ gives $c = 4$ and $d = 9$, so $c + d = 13$.\n\n**The Full Solution:**\nStep 1: The equation $q(x) = 2(x + 1)^2 - 8$ is already in vertex form, so the vertex of $q$ is $(-1, -8)$.\nStep 2: Replacing $x$ with $x - c$ slides the graph $c$ units in the $+x$ direction, and adding $d$ raises it $d$ units, so the vertex of $r$ is $(-1 + c, -8 + d)$.\nStep 3: Match coordinates with the given vertex $(3, 1)$: $-1 + c = 3$ gives $c = 4$, and $-8 + d = 1$ gives $d = 9$, so $c + d = 13$. Check: $r(x) = 2(x - 4 + 1)^2 - 8 + 9 = 2(x - 3)^2 + 1$, whose vertex is $(3, 1)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-13$): reverses both shifts, solving $-1 - c = 3$ and $-8 - d = 1$ to get $c = -4$ and $d = -9$.\n* Choice B ($-5$): finds $c = 4$ but reads the $+ d$ as a downward shift, solving $-8 - d = 1$ for $d = -9$.\n* Choice C ($5$): finds $d = 9$ but reads $x - c$ as a shift to the left, solving $-1 - c = 3$ for $c = -4$.\n\n**Test Day Takeaway:** Push the known vertex through the transformation first — $q(x - c) + d$ sends $(h, k)$ to $(h + c, k + d)$ — then match it to the new vertex. Each coordinate becomes one small equation for one constant.",
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
    id: "bank-am-121",
    domain: "advanced-math",
    skills: ["exponent-laws", "simplifying-rational-expressions"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The expression $\\dfrac{18a^7b^2}{6a^3b^5}$ is defined for $a \\neq 0$ and $b \\neq 0$. Which of the following is equivalent to this expression?",
    choices: [
      { id: "A", text: "$\\dfrac{3a^4}{b^3}$" },
      // distractor: subtracts each pair of exponents in the wrong direction, so the surviving powers land under the wrong variables
      { id: "B", text: "$\\dfrac{3b^3}{a^4}$" },
      // distractor: adds the exponents ($7+3$ and $2+5$) instead of subtracting them
      { id: "C", text: "$\\dfrac{3a^{10}}{b^{7}}$" },
      // distractor: subtracts the coefficients, $18-6=12$, instead of dividing them
      { id: "D", text: "$\\dfrac{12a^4}{b^3}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Divide the coefficients, $18 \\div 6 = 3$, and subtract exponents on matching bases: $a^{7-3} = a^4$ and $b^{2-5} = b^{-3}$, which gives $\\dfrac{3a^4}{b^3}$.\n\n**The Full Solution:**\nStep 1: Split the quotient into a coefficient part and one part per base: $\\dfrac{18}{6}\\cdot\\dfrac{a^7}{a^3}\\cdot\\dfrac{b^2}{b^5}$.\nStep 2: Apply $\\dfrac{x^m}{x^n} = x^{m-n}$ to each base. The coefficient is $3$, the $a$ part is $a^{7-3} = a^4$, and the $b$ part is $b^{2-5} = b^{-3}$.\nStep 3: A negative exponent means the factor belongs in the denominator, so $3a^4b^{-3} = \\dfrac{3a^4}{b^3}$. Check with $a = b = 2$: the original is $\\dfrac{18 \\cdot 128 \\cdot 4}{6 \\cdot 8 \\cdot 32} = 6$, and $\\dfrac{3 \\cdot 16}{8} = 6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: the exponents are subtracted in the wrong direction, so $a$ and $b$ trade places; $a^{3-7}$ and $b^{5-2}$ describe the reciprocal of the answer.\n* Choice C: adding exponents is the rule for multiplying powers, not dividing them; it produces $a^{10}$ and $b^{7}$.\n* Choice D: the coefficients are divided, not subtracted, so $18 - 6 = 12$ is the wrong first move.\n\n**Test Day Takeaway:** Handle the number and each base separately. Divide coefficients, subtract exponents top minus bottom, then move any negative exponent across the fraction bar.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "common-base-exponent-simplification",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-122",
    domain: "advanced-math",
    skills: ["exponent-laws"],
    difficulty: "hard",
    type: "fill-in",
    question: "In the equation $\\left(\\dfrac{1}{9}\\right)^{x-2} = 27^{x+1}$, both sides can be written as powers of $3$. What is the value of $x$?",
    correctAnswer: "1/5",
    explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**The correct answer is $\\dfrac{1}{5}$.**\n\n**The Fast Way (~35s):** Rewrite both sides base $3$: $3^{-2(x-2)} = 3^{3(x+1)}$. Setting the exponents equal gives $-2x + 4 = 3x + 3$, so $x = \\dfrac{1}{5}$.\n\n**The Full Solution:**\nStep 1: Write each side as a power of $3$. Since $\\dfrac{1}{9} = 3^{-2}$, the left side is $\\left(3^{-2}\\right)^{x-2} = 3^{-2(x-2)} = 3^{-2x+4}$. Since $27 = 3^3$, the right side is $\\left(3^{3}\\right)^{x+1} = 3^{3x+3}$.\nStep 2: Equal powers of the same base force equal exponents: $-2x + 4 = 3x + 3$.\nStep 3: Subtracting $-2x$ and $3$ from both sides gives $1 = 5x$, so $x = \\dfrac{1}{5}$. Check: the left side is $9^{-(1/5 - 2)} = 9^{9/5} = 3^{18/5}$ and the right side is $27^{6/5} = 3^{18/5}$. $\\checkmark$\n\n**Common Mistakes:**\n* Forgetting the negative sign on $\\dfrac{1}{9} = 3^{-2}$ and solving $2x - 4 = 3x + 3$ instead, which gives $x = -7$.\n* Distributing only the first term of $-2(x-2)$ and writing $-2x - 2$; that error leads to $-2x - 2 = 3x + 3$ and $x = -1$.\n* Matching $9$ to $27$ by comparing bases directly rather than converting both to base $3$.\n\n**Test Day Takeaway:** When both sides are powers of one small base, convert everything to that base first; a reciprocal simply contributes a negative exponent.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "common-base-exponent-simplification",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-123",
    domain: "advanced-math",
    skills: ["exponent-laws"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "For $x \\neq 0$ and $y \\neq 0$, which of the following is equivalent to $\\left(2x^3y^{-4}\\right)^{-2} \\cdot \\left(8x^{-1}y^{5}\\right)$?",
    choices: [
      // distractor: adds the outer exponent to each inner exponent instead of multiplying, giving $x^{1}y^{-6}$ before the second factor is applied
      { id: "A", text: "$\\dfrac{2}{y}$" },
      { id: "B", text: "$\\dfrac{2y^{13}}{x^{7}}$" },
      // distractor: applies the outer $-2$ to the variables but leaves the coefficient $2$ untouched
      { id: "C", text: "$\\dfrac{8y^{13}}{x^{7}}$" },
      // distractor: applies $+2$ instead of $-2$ to every factor inside the first parentheses
      { id: "D", text: "$\\dfrac{32x^{5}}{y^{3}}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** $\\left(2x^3y^{-4}\\right)^{-2} = 2^{-2}x^{-6}y^{8}$. Multiplying by $8x^{-1}y^{5}$ gives $\\dfrac{8}{4}x^{-7}y^{13} = \\dfrac{2y^{13}}{x^{7}}$.\n\n**The Full Solution:**\nStep 1: Raise every factor inside the parentheses to the $-2$ power, multiplying exponents: $2^{-2} = \\dfrac{1}{4}$, $\\left(x^{3}\\right)^{-2} = x^{-6}$, and $\\left(y^{-4}\\right)^{-2} = y^{8}$.\nStep 2: Multiply by the second factor, adding exponents on matching bases: $\\dfrac{1}{4}x^{-6}y^{8} \\cdot 8x^{-1}y^{5} = \\dfrac{8}{4}\\,x^{-6-1}\\,y^{8+5} = 2x^{-7}y^{13}$.\nStep 3: Move the negative exponent to the denominator: $2x^{-7}y^{13} = \\dfrac{2y^{13}}{x^{7}}$. Check with $x = y = 1$: the original is $2^{-2} \\cdot 8 = 2$, and the answer is $2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{2}{y}$): the outer exponent is added to each inner exponent ($3 + (-2) = 1$, $-4 + (-2) = -6$) instead of multiplied, and the $x$ powers then cancel.\n* Choice C ($\\frac{8y^{13}}{x^{7}}$): the coefficient $2$ never gets raised to the $-2$ power, so the $\\frac{1}{4}$ that turns $8$ into $2$ is missing.\n* Choice D ($\\frac{32x^{5}}{y^{3}}$): the sign of the outer exponent is dropped, giving $4x^{6}y^{-8}$ before the second factor.\n\n**Test Day Takeaway:** A power outside parentheses hits every factor inside, coefficient included, and exponents multiply rather than add.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "common-base-exponent-simplification",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 5/2: tangent-line-and-discriminant (8 items) =====
  // Pattern: line tangent to parabola ⟺ system has exactly one solution ⟺ discriminant = 0.
  // Test bundles use this 7x across PT7, PT8, PT9. SAT Pattern title (verbatim from explanations):
  // 'Tangent Line and Discriminant' → kebab 'tangent-line-and-discriminant'.
  {
    id: "bank-am-124",
    domain: "advanced-math",
    skills: ["tangent-lines", "discriminant-analysis"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The graph of $y = x^2 - 6x + 11$ is shown in the $xy$-plane. The line $y = -2x + b$, where $b$ is a constant, is tangent to this parabola. What is the value of $b$?",
    diagram: { type: "quadraticVertex", params: { vertex: [3, 2], a: 1, showVertex: true } },
    choices: [
      // distractor: distributes $-4(11 - b)$ as $-44 - 4b$, solving $16 - 44 - 4b = 0$
      { id: "A", text: "$-7$" },
      // distractor: subtracts $2x$ instead of adding it, producing $x^2 - 8x + 11 - b = 0$
      { id: "B", text: "$-5$" },
      { id: "C", text: "$7$" },
      // distractor: assumes the line must touch the parabola at its vertex $(3, 2)$ and solves $2 = -2(3) + b$
      { id: "D", text: "$8$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** Setting the two expressions equal gives $x^2 - 4x + (11 - b) = 0$. Tangency means one repeated solution, so $16 - 4(11 - b) = 0$ and $b = 7$.\n\n**The Full Solution:**\nStep 1: A tangent line meets the parabola exactly once, so the system has exactly one solution. Substituting gives $x^2 - 6x + 11 = -2x + b$, which rearranges to $x^2 - 4x + (11 - b) = 0$.\nStep 2: A quadratic has exactly one real solution when its discriminant is $0$: $(-4)^2 - 4(1)(11 - b) = 0$, so $16 - 44 + 4b = 0$.\nStep 3: Then $4b = 28$ and $b = 7$. Check: with $b = 7$ the equation is $x^2 - 4x + 4 = 0$, or $(x - 2)^2 = 0$, a single solution at $x = 2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-7$): the $-4(11 - b)$ term is distributed as $-44 - 4b$, flipping the sign on $b$.\n* Choice B ($-5$): moving $-2x$ across the equals sign as a subtraction gives $x^2 - 8x + 11 - b = 0$ and a discriminant of $64 - 4(11-b)$.\n* Choice D ($8$): the tangent point is assumed to be the vertex $(3, 2)$, but a tangent line with slope $-2$ touches this parabola at $x = 2$, not at the vertex.\n\n**Test Day Takeaway:** Tangent means one shared point. Set the two expressions equal, collect everything on one side, and force the discriminant to zero.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "tangent-line-and-discriminant",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-125",
    domain: "advanced-math",
    skills: ["tangent-lines", "discriminant-analysis"],
    difficulty: "easy",
    type: "fill-in",
    question: "In the $xy$-plane, the line $y = -8x + 5$ is tangent to the graph of $y = x^2 + c$, where $c$ is a constant. What is the value of $c$?",
    correctAnswer: "21",
    explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**The correct answer is $21$.**\n\n**The Fast Way (~30s):** Setting the expressions equal gives $x^2 + 8x + (c - 5) = 0$. Tangency forces $64 - 4(c - 5) = 0$, so $c = 21$.\n\n**The Full Solution:**\nStep 1: A tangent line touches the parabola exactly once, so $x^2 + c = -8x + 5$ must have exactly one solution. Rearranged, that is $x^2 + 8x + (c - 5) = 0$.\nStep 2: Set the discriminant equal to zero: $8^2 - 4(1)(c - 5) = 0$, so $64 - 4c + 20 = 0$.\nStep 3: Then $4c = 84$ and $c = 21$. Check: with $c = 21$ the equation becomes $x^2 + 8x + 16 = 0$, or $(x + 4)^2 = 0$, whose only solution is $x = -4$. $\\checkmark$\n\n**Common Mistakes:**\n* Distributing $-4(c - 5)$ as $-4c - 20$, which gives $64 - 4c - 20 = 0$ and the incorrect value $c = 11$.\n* Leaving the $5$ on the right side and solving $64 - 4c = 0$, which gives $c = 16$.\n* Setting the discriminant greater than zero instead of equal to zero, which describes a line that cuts the parabola twice.\n\n**Test Day Takeaway:** One intersection point means one repeated root. Move every term to one side before computing $b^2 - 4ac$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "tangent-line-and-discriminant",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-126",
    domain: "advanced-math",
    skills: ["tangent-lines", "discriminant-analysis"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the $xy$-plane, the line $y = -x + 4$ is tangent to the graph of $y = kx^2 + 3x - 2$, where $k$ is a nonzero constant. What is the value of $k$?",
    choices: [
      // distractor: leaves the $4$ on the right side, solving $16 + 8k = 0$ from $kx^2 + 4x - 2 = 0$
      { id: "A", text: "$-2$" },
      { id: "B", text: "$-\\dfrac{2}{3}$" },
      // distractor: moves $-x$ across the equals sign as a subtraction, producing $kx^2 + 2x - 6 = 0$
      { id: "C", text: "$-\\dfrac{1}{6}$" },
      // distractor: writes the discriminant as $16 - 24k$, dropping the sign of the negative constant term
      { id: "D", text: "$\\dfrac{2}{3}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Combining gives $kx^2 + 4x - 6 = 0$. Tangency forces $16 - 4(k)(-6) = 16 + 24k = 0$, so $k = -\\dfrac{2}{3}$.\n\n**The Full Solution:**\nStep 1: Set the expressions equal: $kx^2 + 3x - 2 = -x + 4$. Adding $x$ and subtracting $4$ from both sides gives $kx^2 + 4x - 6 = 0$.\nStep 2: A tangent line produces exactly one intersection, so the discriminant is zero: $4^2 - 4(k)(-6) = 0$, which is $16 + 24k = 0$.\nStep 3: Then $24k = -16$ and $k = -\\dfrac{2}{3}$. Check: $-\\dfrac{2}{3}x^2 + 4x - 6 = -\\dfrac{2}{3}\\left(x^2 - 6x + 9\\right) = -\\dfrac{2}{3}(x-3)^2$, which is zero only at $x = 3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$): the constant $4$ is never moved to the left, leaving $kx^2 + 4x - 2 = 0$ and the equation $16 + 8k = 0$.\n* Choice C ($-\\frac{1}{6}$): subtracting $x$ instead of adding it gives $kx^2 + 2x - 6 = 0$ and the equation $4 + 24k = 0$.\n* Choice D ($\\frac{2}{3}$): the product $-4(k)(-6)$ is written as $-24k$, so the sign of $k$ flips.\n\n**Test Day Takeaway:** With the unknown in the leading coefficient, still collect every term on one side first; the sign of the constant term decides the sign of your answer.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "tangent-line-and-discriminant",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-127",
    domain: "advanced-math",
    skills: ["tangent-lines", "discriminant-analysis"],
    difficulty: "medium",
    type: "fill-in",
    question: "In the $xy$-plane, the line $y = 4x - 9$ is tangent to the graph of $y = x^2 + bx + 7$, where $b$ is a constant and $b < 0$. What is the value of $b$?",
    correctAnswer: "-4",
    explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**The correct answer is $-4$.**\n\n**The Fast Way (~40s):** Combining gives $x^2 + (b - 4)x + 16 = 0$, so $(b-4)^2 = 64$ and $b = 12$ or $b = -4$. Only $b = -4$ is negative.\n\n**The Full Solution:**\nStep 1: Set the expressions equal: $x^2 + bx + 7 = 4x - 9$. Subtracting $4x$ and adding $9$ gives $x^2 + (b - 4)x + 16 = 0$.\nStep 2: Tangency means one repeated solution, so $(b - 4)^2 - 4(1)(16) = 0$, which gives $(b - 4)^2 = 64$.\nStep 3: Taking both square roots, $b - 4 = 8$ or $b - 4 = -8$, so $b = 12$ or $b = -4$. The condition $b < 0$ selects $b = -4$. Check: $x^2 - 4x + 7 = 4x - 9$ becomes $x^2 - 8x + 16 = (x - 4)^2 = 0$. $\\checkmark$\n\n**Common Mistakes:**\n* Taking only the positive square root of $64$ and reporting $b = 12$, which violates the stated condition $b < 0$.\n* Forgetting to move the $-9$, which leaves $x^2 + (b-4)x + 7 = 0$ and gives $(b-4)^2 = 28$, not a perfect square.\n* Reading $b - 4 = -8$ as $b = -12$ instead of $b = -4$.\n\n**Test Day Takeaway:** A squared binomial equation has two roots. Solve for both, then let the stated inequality pick the one the question wants.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "tangent-line-and-discriminant",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-128",
    domain: "advanced-math",
    skills: ["tangent-lines", "discriminant-analysis"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The graph of $y = 2x^2 - 4x + 5$ is shown in the $xy$-plane. The line $y = 8x + c$, where $c$ is a constant, is tangent to this parabola. What is the value of $c$?",
    diagram: { type: "quadraticVertex", params: { vertex: [1, 3], a: 2, showVertex: true } },
    choices: [
      // distractor: uses $a = 1$ in the discriminant instead of $a = 2$, solving $144 - 4(5 - c) = 0$
      { id: "A", text: "$-31$" },
      { id: "B", text: "$-13$" },
      // distractor: assumes the tangent point is the vertex $(1, 3)$ and solves $3 = 8(1) + c$
      { id: "C", text: "$-5$" },
      // distractor: distributes $-8(5 - c)$ as $-40 - 8c$, flipping the sign of $c$
      { id: "D", text: "$13$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Combining gives $2x^2 - 12x + (5 - c) = 0$. Tangency forces $144 - 8(5 - c) = 0$, so $c = -13$.\n\n**The Full Solution:**\nStep 1: Set the expressions equal: $2x^2 - 4x + 5 = 8x + c$. Subtracting $8x$ and $c$ gives $2x^2 - 12x + (5 - c) = 0$.\nStep 2: Exactly one intersection means the discriminant is zero: $(-12)^2 - 4(2)(5 - c) = 0$, so $144 - 40 + 8c = 0$.\nStep 3: Then $8c = -104$ and $c = -13$. Check: $2x^2 - 12x + 18 = 2(x - 3)^2$, which is zero only at $x = 3$, and the line gives $8(3) - 13 = 11 = 2(9) - 12 + 5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-31$): the leading coefficient $2$ is ignored in $b^2 - 4ac$, so $4(1)(5-c)$ replaces $4(2)(5-c)$.\n* Choice C ($-5$): the vertex of the parabola is $(1, 3)$, but the tangent line with slope $8$ touches at $x = 3$, not at the vertex.\n* Choice D ($13$): distributing $-8(5 - c)$ as $-40 - 8c$ reverses the sign of the answer.\n\n**Test Day Takeaway:** Keep the leading coefficient in $b^2 - 4ac$. Tangency is about a repeated root, not about the vertex.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "tangent-line-and-discriminant",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-129",
    domain: "advanced-math",
    skills: ["tangent-lines", "discriminant-analysis"],
    difficulty: "medium",
    type: "fill-in",
    question: "In the $xy$-plane, the line $y = mx - 7$ is tangent to the graph of $y = x^2 - 3x + 2$, where $m$ is a constant and $m > 0$. What is the value of $m$?",
    correctAnswer: "3",
    explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~40s):** Combining gives $x^2 - (3 + m)x + 9 = 0$, so $(3 + m)^2 = 36$ and $m = 3$ or $m = -9$. The condition $m > 0$ selects $m = 3$.\n\n**The Full Solution:**\nStep 1: Set the expressions equal: $x^2 - 3x + 2 = mx - 7$. Subtracting $mx$ and adding $7$ gives $x^2 - (3 + m)x + 9 = 0$.\nStep 2: Tangency means one repeated solution, so $\\left[-(3+m)\\right]^2 - 4(1)(9) = 0$, which is $(3 + m)^2 = 36$.\nStep 3: Then $3 + m = 6$ or $3 + m = -6$, giving $m = 3$ or $m = -9$; only $m = 3$ is positive. Check: $x^2 - 6x + 9 = (x - 3)^2 = 0$ has the single solution $x = 3$. $\\checkmark$\n\n**Common Mistakes:**\n* Writing the middle coefficient as $m - 3$ rather than $-(3 + m)$, which produces $(m-3)^2 = 36$ and the incorrect values $m = 9$ and $m = -3$.\n* Reporting $m = -9$, the root that the condition $m > 0$ rules out.\n* Adding $7$ to only one side, which leaves the constant term as $-5$ instead of $9$.\n\n**Test Day Takeaway:** Group the whole coefficient of $x$ in parentheses before squaring it; a sign lost there changes both answers.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "tangent-line-and-discriminant",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-130",
    domain: "advanced-math",
    skills: ["tangent-lines", "discriminant-analysis"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the $xy$-plane, the line $y = 6x + b$ is tangent to the graph of $y = ax^2 + 2x - 5$ at the point where $x = 2$, where $a$ and $b$ are constants. What is the value of $a + b$?",
    choices: [
      // distractor: reports $b$ alone rather than the requested sum
      { id: "A", text: "$-9$" },
      { id: "B", text: "$-8$" },
      // distractor: drops the minus sign and solves $5 + b = 4$, getting $b = -1$ and the sum $1 + (-1)$
      { id: "C", text: "$0$" },
      // distractor: reports $a$ alone rather than the requested sum
      { id: "D", text: "$1$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice B is correct.**\n\n**The Fast Way (~50s):** Subtracting the line gives $ax^2 - 4x - (5 + b) = 0$ with a double root at $x = 2$. The two roots sum to $\\dfrac{4}{a} = 4$, so $a = 1$; their product is $\\dfrac{-(5+b)}{1} = 4$, so $b = -9$ and $a + b = -8$.\n\n**The Full Solution:**\nStep 1: Set the expressions equal and collect terms: $ax^2 + 2x - 5 = 6x + b$ becomes $ax^2 - 4x - (5 + b) = 0$. Tangency at $x = 2$ means this quadratic has the repeated root $x = 2$.\nStep 2: A repeated root at $2$ means the roots sum to $4$. For $ax^2 - 4x - (5+b) = 0$ the sum of the roots is $\\dfrac{4}{a}$, so $\\dfrac{4}{a} = 4$ and $a = 1$.\nStep 3: The roots also multiply to $2 \\cdot 2 = 4$, and that product equals $\\dfrac{-(5+b)}{a} = -(5+b)$. So $-(5+b) = 4$, giving $b = -9$ and $a + b = 1 + (-9) = -8$. Check: $x^2 + 2x - 5 = 6x - 9$ becomes $x^2 - 4x + 4 = (x-2)^2 = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-9$): this is $b$ by itself; the question asks for $a + b$.\n* Choice C ($0$): dropping the minus sign in $-(5 + b) = 4$ turns it into $5 + b = 4$, so $b = -1$ and the sum becomes $1 + (-1) = 0$.\n* Choice D ($1$): this is $a$ by itself, found correctly but reported instead of the sum.\n\n**Test Day Takeaway:** A stated point of tangency turns the difference into a perfect square. Match it with $(x - 2)^2$, then reread which combination of constants the question wants.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "tangent-line-and-discriminant",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-131",
    domain: "advanced-math",
    skills: ["tangent-lines", "discriminant-analysis"],
    difficulty: "hard",
    type: "fill-in",
    question: "In the $xy$-plane, the line $y = -4x + 1$ is tangent to the graph of $y = x^2 + kx + 10$ for exactly two values of the constant $k$. What is the product of those two values?",
    correctAnswer: "-20",
    explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**The correct answer is $-20$.**\n\n**The Fast Way (~50s):** Combining gives $x^2 + (k+4)x + 9 = 0$, so $(k+4)^2 = 36$ and $k = 2$ or $k = -10$. Their product is $-20$.\n\n**The Full Solution:**\nStep 1: Set the expressions equal: $x^2 + kx + 10 = -4x + 1$. Adding $4x$ and subtracting $1$ gives $x^2 + (k + 4)x + 9 = 0$.\nStep 2: Tangency means exactly one repeated solution, so $(k + 4)^2 - 4(1)(9) = 0$, which gives $(k + 4)^2 = 36$.\nStep 3: Then $k + 4 = 6$ or $k + 4 = -6$, so $k = 2$ or $k = -10$, and the product is $2 \\times (-10) = -20$. Check with $k = 2$: $x^2 + 6x + 9 = (x+3)^2 = 0$; with $k = -10$: $x^2 - 6x + 9 = (x-3)^2 = 0$. $\\checkmark$\n\n**Common Mistakes:**\n* Reporting the sum $-8$ instead of the product; the question asks for the product.\n* Taking only $k + 4 = 6$ and answering $2$, missing the negative square root.\n* Leaving the constant as $10$ rather than $9$, which gives $(k+4)^2 = 40$ and no integer values of $k$.\n\n**Test Day Takeaway:** When a tangency condition produces a squared binomial, both square roots are legitimate; read whether the question wants their sum, product, or one of them.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "tangent-line-and-discriminant",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 5/5: discriminant-analysis (8 items) =====
  // Pattern: classify the number of real solutions of a quadratic by the sign of the
  // discriminant b² - 4ac. Δ > 0 (two real), Δ = 0 (one real), Δ < 0 (no real).
  // 7 test occurrences across PT8, PT12 and friends. SAT Pattern title (verbatim):
  // 'Discriminant Analysis' → kebab 'discriminant-analysis'.
  // Distinct from tangent-line-and-discriminant: this pattern is on a STANDALONE
  // quadratic, not a system between a line and a parabola.
  {
    id: "bank-am-132",
    domain: "advanced-math",
    skills: ["discriminant-analysis"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In the equation $x^2 - 10x + c = 0$, $c$ is a constant. The equation has exactly one real solution. What is the value of $c$?",
    choices: [
      // distractor: solves $100 = -4c$, moving the term to the wrong side of the equation
      { id: "A", text: "$-25$" },
      // distractor: stops at $\frac{-b}{2} = 5$ without squaring it
      { id: "B", text: "$5$" },
      { id: "C", text: "$25$" },
      // distractor: uses $b^2 - 2ac$ in place of $b^2 - 4ac$, solving $100 - 2c = 0$
      { id: "D", text: "$50$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** One real solution means $b^2 - 4ac = 0$, so $(-10)^2 - 4(1)(c) = 0$ and $c = 25$.\n\n**The Full Solution:**\nStep 1: For $ax^2 + bx + c = 0$, the number of real solutions is decided by the discriminant $b^2 - 4ac$: positive gives two, zero gives exactly one, negative gives none.\nStep 2: Here $a = 1$, $b = -10$, and the constant term is $c$, so the condition is $(-10)^2 - 4(1)(c) = 0$, or $100 - 4c = 0$.\nStep 3: Then $4c = 100$ and $c = 25$. Check: $x^2 - 10x + 25 = (x - 5)^2$, whose only zero is $x = 5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-25$): moving $-4c$ to the wrong side turns $100 = 4c$ into $100 = -4c$.\n* Choice B ($5$): $5$ is the repeated solution of the equation, not the value of $c$.\n* Choice D ($50$): using $b^2 - 2ac$ gives $100 - 2c = 0$; the discriminant uses a factor of $4$.\n\n**Test Day Takeaway:** Exactly one real solution is the perfect-square case: set $b^2 - 4ac = 0$ and solve for the missing constant.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "discriminant-analysis",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-133",
    domain: "advanced-math",
    skills: ["discriminant-analysis"],
    difficulty: "easy",
    type: "fill-in",
    question: "The equation $x^2 + kx + 49 = 0$, where $k$ is a constant, has exactly one real solution. If $k < 0$, what is the value of $k$?",
    correctAnswer: "-14",
    explanation: "**SAT Pattern: Discriminant Analysis**\n\n**The correct answer is $-14$.**\n\n**The Fast Way (~25s):** Exactly one real solution means $k^2 - 4(1)(49) = 0$, so $k^2 = 196$ and $k = \\pm 14$; the condition $k < 0$ gives $k = -14$.\n\n**The Full Solution:**\nStep 1: A quadratic has exactly one real solution when its discriminant is zero, so $k^2 - 4(1)(49) = 0$.\nStep 2: That gives $k^2 = 196$, so $k = 14$ or $k = -14$.\nStep 3: The condition $k < 0$ selects $k = -14$. Check: $x^2 - 14x + 49 = (x - 7)^2$, whose only zero is $x = 7$. $\\checkmark$\n\n**Common Mistakes:**\n* Reporting $14$, the positive root, even though the question restricts $k$ to negative values.\n* Taking $k = -7$ by using $\\sqrt{49}$ instead of $\\sqrt{4 \\cdot 49}$.\n* Setting the discriminant less than zero, which is the condition for no real solutions.\n\n**Test Day Takeaway:** $b^2 = 4ac$ always yields a matched pair $\\pm b$; the stated inequality is there to pick one.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "discriminant-analysis",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-134",
    domain: "advanced-math",
    skills: ["discriminant-analysis"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The equation $9x^2 - bx + 4 = 0$, where $b$ is a positive constant, has exactly one real solution. What is the value of $b$?",
    choices: [
      // distractor: drops the leading coefficient, solving $b^2 = 4(4) = 16$
      { id: "A", text: "$4$" },
      // distractor: drops the factor of $4$, solving $b^2 = (9)(4) = 36$
      { id: "B", text: "$6$" },
      { id: "C", text: "$12$" },
      // distractor: stops at $b^2 = 4ac = 144$ and reports that value as $b$
      { id: "D", text: "$144$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** One real solution means $b^2 = 4ac = 4(9)(4) = 144$, so $b = 12$ for positive $b$.\n\n**The Full Solution:**\nStep 1: The equation is quadratic with $a = 9$ and constant term $4$, and its middle coefficient is $-b$. Exactly one real solution means the discriminant is zero: $(-b)^2 - 4(9)(4) = 0$.\nStep 2: Since $(-b)^2 = b^2$, the condition becomes $b^2 = 144$, so $b = 12$ or $b = -12$.\nStep 3: The problem states $b$ is positive, so $b = 12$. Check: $9x^2 - 12x + 4 = (3x - 2)^2$, whose only zero is $x = \\dfrac{2}{3}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): the leading coefficient $9$ is left out, so $b^2 = 4(4) = 16$.\n* Choice B ($6$): the factor of $4$ is left out, so $b^2 = 9 \\cdot 4 = 36$.\n* Choice D ($144$): this is $4ac$, which equals $b^2$, not $b$; the square root is still owed.\n\n**Test Day Takeaway:** Write out $a$, $b$, and $c$ before touching the discriminant, and remember the final square root.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "discriminant-analysis",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-135",
    domain: "advanced-math",
    skills: ["discriminant-analysis"],
    difficulty: "medium",
    type: "fill-in",
    question: "The equation $2x^2 - 8x + c = 0$, where $c$ is a constant, has no real solutions. What is the least integer value of $c$?",
    correctAnswer: "9",
    explanation: "**SAT Pattern: Discriminant Analysis**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~30s):** No real solutions means $64 - 8c < 0$, so $c > 8$ and the least integer is $9$.\n\n**The Full Solution:**\nStep 1: With $a = 2$ and $b = -8$, the discriminant is $(-8)^2 - 4(2)(c) = 64 - 8c$.\nStep 2: An equation has no real solutions exactly when the discriminant is negative: $64 - 8c < 0$, so $8c > 64$ and $c > 8$.\nStep 3: The smallest integer strictly greater than $8$ is $9$. Check: with $c = 9$ the discriminant is $64 - 72 = -8 < 0$, while $c = 8$ gives $0$, which is one real solution rather than none. $\\checkmark$\n\n**Common Mistakes:**\n* Answering $8$, the boundary value, which produces exactly one real solution instead of none.\n* Forgetting the leading coefficient and solving $64 - 4c < 0$, which gives $c > 16$ and the answer $17$.\n* Reversing the inequality when dividing by $-8$.\n\n**Test Day Takeaway:** Solve the discriminant inequality first, then check the boundary: a strict inequality never includes its endpoint.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "discriminant-analysis",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-136",
    domain: "advanced-math",
    skills: ["discriminant-analysis"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the equation $x^2 + kx + 6 = 0$, $k$ is a constant. For which of the following values of $k$ does the equation have two distinct real solutions?",
    choices: [
      // distractor: treats any negative $k$ as producing two solutions; $(-4)^2 = 16 < 24$
      { id: "A", text: "$-4$" },
      // distractor: reads $x^2 = -6$ as having the two symmetric solutions $\pm\sqrt{6}$
      { id: "B", text: "$0$" },
      // distractor: compares $k^2$ with $4$ rather than with $4ac = 24$
      { id: "C", text: "$2$" },
      { id: "D", text: "$5$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** Two distinct real solutions require $k^2 > 4(1)(6) = 24$. Only $5^2 = 25$ exceeds $24$.\n\n**The Full Solution:**\nStep 1: For $ax^2 + bx + c = 0$, two distinct real solutions occur exactly when $b^2 - 4ac > 0$. Here $a = 1$ and $c = 6$, so the condition is $k^2 - 24 > 0$, or $k^2 > 24$.\nStep 2: Test each choice: $(-4)^2 = 16$, $0^2 = 0$, $2^2 = 4$, and $5^2 = 25$.\nStep 3: Only $25 > 24$, so $k = 5$. Check: $x^2 + 5x + 6 = (x+2)(x+3)$, giving the two distinct solutions $x = -2$ and $x = -3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): the sign of $k$ is irrelevant because $k$ is squared, and $16$ is still less than $24$.\n* Choice B ($0$): with $k = 0$ the equation is $x^2 = -6$, which has no real solutions at all.\n* Choice C ($2$): comparing $k^2$ to $4$ instead of $4ac$ makes $2$ look like a boundary value.\n\n**Test Day Takeaway:** Convert the wording into an inequality on $b^2 - 4ac$ first, then test the choices; squaring erases the sign of $k$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "discriminant-analysis",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-137",
    domain: "advanced-math",
    skills: ["discriminant-analysis"],
    difficulty: "medium",
    type: "fill-in",
    question: "The equation $x^2 + (k - 3)x + 16 = 0$, where $k$ is a constant, has exactly one real solution. If $k > 0$, what is the value of $k$?",
    correctAnswer: "11",
    explanation: "**SAT Pattern: Discriminant Analysis**\n\n**The correct answer is $11$.**\n\n**The Fast Way (~35s):** One real solution means $(k-3)^2 = 4(1)(16) = 64$, so $k - 3 = \\pm 8$ and $k = 11$ or $k = -5$; the positive value is $11$.\n\n**The Full Solution:**\nStep 1: The middle coefficient is the whole quantity $k - 3$, so the discriminant is $(k - 3)^2 - 4(1)(16)$.\nStep 2: Exactly one real solution means that discriminant is zero: $(k - 3)^2 = 64$, so $k - 3 = 8$ or $k - 3 = -8$.\nStep 3: That gives $k = 11$ or $k = -5$, and the condition $k > 0$ selects $k = 11$. Check: with $k = 11$ the equation is $x^2 + 8x + 16 = (x + 4)^2 = 0$. $\\checkmark$\n\n**Common Mistakes:**\n* Squaring only $k$ and writing $k^2 - 3 = 64$, which gives the non-integer $k = \\sqrt{67}$.\n* Answering $8$, the value of $k - 3$, instead of solving for $k$ itself.\n* Reporting $-5$, the root ruled out by the condition $k > 0$.\n\n**Test Day Takeaway:** When the coefficient of $x$ is an expression, square the whole expression, then solve the resulting equation for the letter the question names.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "discriminant-analysis",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-138",
    domain: "advanced-math",
    skills: ["discriminant-analysis"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the equation $ax^2 - 8x + 8 = 0$, $a$ is a nonzero constant. For which of the following values of $a$ does the equation have no real solutions?",
    choices: [
      // distractor: assumes a negative leading coefficient prevents real solutions; here the discriminant is $64 + 32 = 96$
      { id: "A", text: "$-1$" },
      // distractor: treats any $a$ less than $1$ as too small; the discriminant is $64 - 16 = 48$
      { id: "B", text: "$\\dfrac{1}{2}$" },
      // distractor: stops at the boundary $a = 2$, where the discriminant is $0$ and there is exactly one real solution
      { id: "C", text: "$2$" },
      { id: "D", text: "$3$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** No real solutions requires $64 - 32a < 0$, so $a > 2$. Among the choices only $3$ qualifies.\n\n**The Full Solution:**\nStep 1: With $b = -8$ and $c = 8$, the discriminant is $(-8)^2 - 4(a)(8) = 64 - 32a$.\nStep 2: There are no real solutions exactly when $64 - 32a < 0$, which gives $32a > 64$ and $a > 2$.\nStep 3: Of the four choices only $a = 3$ satisfies $a > 2$. Check: $3x^2 - 8x + 8 = 0$ has discriminant $64 - 96 = -32 < 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-1$): a negative $a$ makes $-4ac$ positive, so the discriminant grows to $96$ and there are two real solutions.\n* Choice B ($\\frac{1}{2}$): the discriminant is $64 - 16 = 48 > 0$, again two real solutions.\n* Choice C ($2$): the discriminant is exactly $0$, which is one real solution, not none.\n\n**Test Day Takeaway:** Solve the discriminant inequality for the parameter before testing choices, and treat the boundary value as the one-solution case.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "discriminant-analysis",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-139",
    domain: "advanced-math",
    skills: ["discriminant-analysis"],
    difficulty: "hard",
    type: "fill-in",
    question: "In the $xy$-plane, the graph of $y = 9x^2 + kx + k$, where $k$ is a positive constant, touches the $x$-axis at exactly one point. What is the value of $k$?",
    correctAnswer: "36",
    explanation: "**SAT Pattern: Discriminant Analysis**\n\n**The correct answer is $36$.**\n\n**The Fast Way (~45s):** The discriminant is $k^2 - 36k$. Setting it to zero gives $k(k - 36) = 0$, and the positive solution is $k = 36$.\n\n**The Full Solution:**\nStep 1: Touching the $x$-axis at exactly one point means $9x^2 + kx + k = 0$ has exactly one real solution. The constant $k$ fills two slots here, so with $a = 9$, $b = k$, and $c = k$ the discriminant is $k^2 - 4(9)(k) = k^2 - 36k$.\nStep 2: Exactly one real solution means $k^2 - 36k = 0$, so $k(k - 36) = 0$ and $k = 0$ or $k = 36$.\nStep 3: The problem states $k$ is positive, ruling out $k = 0$, so $k = 36$. Check: $9x^2 + 36x + 36 = 9(x + 2)^2$, whose only zero is $x = -2$. $\\checkmark$\n\n**Common Mistakes:**\n* Answering $0$, which does satisfy the discriminant equation but is excluded by the condition that $k$ is positive.\n* Treating the two appearances of $k$ as different letters and never forming the factorable equation $k^2 = 36k$.\n* Dividing $k^2 = 36k$ by $k$ without noting that $k = 0$ is also a root of the discriminant equation.\n\n**Test Day Takeaway:** When one constant fills two slots, the discriminant becomes an equation in that constant; factor rather than divide so you see every root.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "discriminant-analysis",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 7/4: quadratic-via-factoring (8 items) =====
  // Pattern: solve x^2 + bx + c = 0 by finding two numbers with product c and
  // sum b. 7 test occurrences across PT1/2/3 M2Easy variants. SAT Pattern
  // title (verbatim): 'Quadratic via Factoring' → 'quadratic-via-factoring'.
  {
    id: "bank-am-140",
    domain: "advanced-math",
    skills: ["finding-roots-factoring"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The left side of the equation $x^2 - 9x + 20 = 0$ is the product of two binomials with integer constants. What are the solutions to this equation?",
    choices: [
      { id: "A", text: "$x = 4$ and $x = 5$" },
      // distractor: factors as $(x+4)(x+5)$, which expands to $x^2 + 9x + 20$
      { id: "B", text: "$x = -5$ and $x = -4$" },
      // distractor: keeps one sign from the factoring and flips the other, giving $(x+5)(x-4)$
      { id: "C", text: "$x = -5$ and $x = 4$" },
      // distractor: reads the coefficient and the constant of the equation as the solutions
      { id: "D", text: "$x = 9$ and $x = 20$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Two numbers multiplying to $20$ and adding to $-9$ are $-4$ and $-5$, so $(x-4)(x-5) = 0$ and $x = 4$ or $x = 5$.\n\n**The Full Solution:**\nStep 1: To factor $x^2 - 9x + 20$, look for two integers whose product is $20$ and whose sum is $-9$. Since the product is positive and the sum is negative, both integers are negative.\nStep 2: The pairs multiplying to $20$ are $(-1, -20)$, $(-2, -10)$, and $(-4, -5)$; only $-4$ and $-5$ add to $-9$. So $x^2 - 9x + 20 = (x - 4)(x - 5)$.\nStep 3: Setting each factor to zero gives $x = 4$ and $x = 5$. Check: $4^2 - 9(4) + 20 = 0$ and $5^2 - 9(5) + 20 = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: both signs are flipped, which factors $x^2 + 9x + 20$ instead of the given equation.\n* Choice C: mixed signs give a product of $-20$, not $+20$, so this pair cannot come from this equation.\n* Choice D: the numbers $9$ and $20$ are coefficients, not solutions; substituting $9$ gives $20$, not $0$.\n\n**Test Day Takeaway:** Read the signs off the quadratic first: a positive constant with a negative middle term means both factors are subtractions.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "quadratic-via-factoring",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-141",
    domain: "advanced-math",
    skills: ["finding-roots-factoring"],
    difficulty: "easy",
    type: "fill-in",
    question: "The equation $(x + 7)(x - 3) = 0$ has two solutions, one positive and one negative. What is the value of the negative solution?",
    correctAnswer: "-7",
    explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**The correct answer is $-7$.**\n\n**The Fast Way (~15s):** A product is zero when a factor is zero, so $x = -7$ or $x = 3$; the negative one is $-7$.\n\n**The Full Solution:**\nStep 1: The zero-product property says that if a product of two factors is $0$, at least one factor is $0$. So $x + 7 = 0$ or $x - 3 = 0$.\nStep 2: Solving each gives $x = -7$ and $x = 3$.\nStep 3: The negative solution is $-7$. Check: $(-7 + 7)(-7 - 3) = (0)(-10) = 0$. $\\checkmark$\n\n**Common Mistakes:**\n* Picking the factor that already contains a minus sign, $(x - 3)$, and answering $-3$; that factor's solution is $+3$.\n* Expanding to $x^2 + 4x - 21 = 0$ and then re-factoring, which wastes time on an equation that is already factored.\n* Reporting $3$, the positive solution, when the question asks for the negative one.\n\n**Test Day Takeaway:** A factored equation is already solved: set each factor to zero and flip the sign of the constant inside it.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "quadratic-via-factoring",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-142",
    domain: "advanced-math",
    skills: ["finding-roots-factoring"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The equation $x^2 - 6x - 27 = 0$ has one positive solution and one negative solution. What is the positive solution?",
    choices: [
      // distractor: flips the sign of the correct solution, as if the factors were $(x+9)(x-3)$
      { id: "A", text: "$-9$" },
      // distractor: reports the negative solution instead of the positive one
      { id: "B", text: "$-3$" },
      // distractor: flips the sign of the negative solution and reports that
      { id: "C", text: "$3$" },
      { id: "D", text: "$9$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Two numbers multiplying to $-27$ and adding to $-6$ are $-9$ and $3$, so $(x - 9)(x + 3) = 0$ and the positive solution is $9$.\n\n**The Full Solution:**\nStep 1: Factor $x^2 - 6x - 27$ by finding two integers with product $-27$ and sum $-6$. A negative product means the integers have opposite signs.\nStep 2: The pair $-9$ and $3$ works, since $(-9)(3) = -27$ and $-9 + 3 = -6$. So the equation is $(x - 9)(x + 3) = 0$.\nStep 3: The solutions are $x = 9$ and $x = -3$, so the positive solution is $9$. Check: $9^2 - 6(9) - 27 = 81 - 54 - 27 = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-9$): the sign inside the factor $(x - 9)$ is carried straight to the answer instead of being reversed.\n* Choice B ($-3$): this is the negative solution; the question asks for the positive one.\n* Choice C ($3$): the constant $3$ appears in the factor $(x + 3)$, whose solution is $-3$, not $3$.\n\n**Test Day Takeaway:** After factoring, each solution is the opposite of the constant in its factor; then reread which solution is requested.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "quadratic-via-factoring",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-143",
    domain: "advanced-math",
    skills: ["finding-roots-factoring"],
    difficulty: "medium",
    type: "fill-in",
    question: "The equation $x^2 + 5x - 24 = 0$ has two solutions. What is the sum of those two solutions?",
    correctAnswer: "-5",
    explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**The correct answer is $-5$.**\n\n**The Fast Way (~20s):** For $x^2 + bx + c = 0$ the solutions sum to $-b$, so the sum is $-5$.\n\n**The Full Solution:**\nStep 1: Factor the left side. Two integers with product $-24$ and sum $5$ are $8$ and $-3$, so $x^2 + 5x - 24 = (x + 8)(x - 3)$.\nStep 2: The solutions are $x = -8$ and $x = 3$.\nStep 3: Their sum is $-8 + 3 = -5$, which matches $-b = -5$ directly. Check: $(-8)^2 + 5(-8) - 24 = 64 - 40 - 24 = 0$ and $3^2 + 15 - 24 = 0$. $\\checkmark$\n\n**Common Mistakes:**\n* Reporting $5$, the value of $b$, instead of $-b$.\n* Adding the constants inside the factors, $8 + (-3) = 5$, rather than the solutions themselves.\n* Reporting the product $-24$ instead of the sum.\n\n**Test Day Takeaway:** The solutions of $x^2 + bx + c = 0$ add to $-b$ and multiply to $c$; that shortcut answers sum and product questions without factoring.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "quadratic-via-factoring",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-144",
    domain: "advanced-math",
    skills: ["finding-roots-factoring"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the $xy$-plane, the graph of $y = x^2 + bx + c$, where $b$ and $c$ are constants, crosses the $x$-axis at the two points shown. What is the value of $b + c$?",
    diagram: { type: "quadraticVertex", params: { vertex: [1.5, -6.25], a: 1, showPoints: [[-1, 0], [4, 0]], showVertex: false } },
    choices: [
      { id: "A", text: "$-7$" },
      // distractor: reports $c$ alone rather than the requested sum
      { id: "B", text: "$-4$" },
      // distractor: reports $b$ alone rather than the requested sum
      { id: "C", text: "$-3$" },
      // distractor: uses $b = 3$, the sum of the two $x$-intercepts, instead of $b = -3$
      { id: "D", text: "$-1$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The $x$-intercepts are $-1$ and $4$, so $y = (x + 1)(x - 4) = x^2 - 3x - 4$. Then $b + c = -3 + (-4) = -7$.\n\n**The Full Solution:**\nStep 1: The graph meets the $x$-axis at $(-1, 0)$ and $(4, 0)$, so $x = -1$ and $x = 4$ are the solutions of $x^2 + bx + c = 0$. That makes $(x + 1)$ and $(x - 4)$ the factors.\nStep 2: Because the leading coefficient is $1$, the equation is exactly $y = (x + 1)(x - 4)$. Expanding gives $x^2 - 4x + x - 4 = x^2 - 3x - 4$.\nStep 3: Matching coefficients gives $b = -3$ and $c = -4$, so $b + c = -7$. Check: at $x = -1$, $1 + 3 - 4 = 0$; at $x = 4$, $16 - 12 - 4 = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-4$): this is $c$, the $y$-intercept value, reported without adding $b$.\n* Choice C ($-3$): this is $b$ alone.\n* Choice D ($-1$): using the sum of the intercepts, $-1 + 4 = 3$, as $b$ reverses its sign; the coefficient of $x$ is the negative of that sum.\n\n**Test Day Takeaway:** Read the roots off the graph, write the factored form, expand once, and only then combine the constants the question asks about.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "quadratic-via-factoring",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-145",
    domain: "advanced-math",
    skills: ["finding-roots-factoring"],
    difficulty: "medium",
    type: "fill-in",
    question: "The equation $x^2 - 2x - 35 = 0$ has two solutions. What is the greater of the two solutions?",
    correctAnswer: "7",
    explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~20s):** Two integers with product $-35$ and sum $-2$ are $-7$ and $5$, so $(x - 7)(x + 5) = 0$ and the greater solution is $7$.\n\n**The Full Solution:**\nStep 1: Look for integers whose product is $-35$ and whose sum is $-2$. The candidate pairs are $\\pm 1$ with $\\mp 35$ and $\\pm 5$ with $\\mp 7$.\nStep 2: The pair $-7$ and $5$ gives $(-7)(5) = -35$ and $-7 + 5 = -2$, so $x^2 - 2x - 35 = (x - 7)(x + 5)$.\nStep 3: The solutions are $x = 7$ and $x = -5$, and the greater is $7$. Check: $7^2 - 2(7) - 35 = 49 - 14 - 35 = 0$. $\\checkmark$\n\n**Common Mistakes:**\n* Reporting $-5$; it is a solution but it is the smaller one.\n* Attaching the signs to the wrong factors as $(x + 7)(x - 5)$, which expands to $x^2 + 2x - 35$ and has the wrong middle term.\n* Answering $35$ by treating the constant term as a solution.\n\n**Test Day Takeaway:** List the factor pairs of the constant, pick the pair whose signed sum matches the middle coefficient, then answer the exact question asked.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "quadratic-via-factoring",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-146",
    domain: "advanced-math",
    skills: ["finding-roots-factoring"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The equation $2x^2 + bx - 15 = 0$, where $b$ is a constant, has two solutions, and one of them is $x = -5$. What is the other solution?",
    choices: [
      // distractor: solves $2x - 3 = 0$ as $x = -\frac{3}{2}$, keeping the sign of the constant inside the factor
      { id: "A", text: "$-\\dfrac{3}{2}$" },
      { id: "B", text: "$\\dfrac{3}{2}$" },
      // distractor: misfactors as $(2x - 5)(x + 3)$, which expands to $2x^2 + x - 15$ rather than $2x^2 + 7x - 15$
      { id: "C", text: "$\\dfrac{5}{2}$" },
      // distractor: ignores the leading $2$ and factors $(x + 5)(x - 3)$, which expands to $x^2 + 2x - 15$
      { id: "D", text: "$3$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**Choice B is correct.**\n\n**The Fast Way (~45s):** Substituting $x = -5$ gives $50 - 5b - 15 = 0$, so $b = 7$. Then $2x^2 + 7x - 15 = (x + 5)(2x - 3)$, and the other solution is $\\dfrac{3}{2}$.\n\n**The Full Solution:**\nStep 1: Because $x = -5$ is a solution, it satisfies the equation: $2(-5)^2 + b(-5) - 15 = 0$, which is $50 - 5b - 15 = 0$.\nStep 2: That gives $5b = 35$, so $b = 7$ and the equation is $2x^2 + 7x - 15 = 0$. Since $x = -5$ is a solution, $(x + 5)$ is a factor: $2x^2 + 7x - 15 = (x + 5)(2x - 3)$.\nStep 3: Setting $2x - 3 = 0$ gives the other solution $x = \\dfrac{3}{2}$. Check: $2\\left(\\dfrac{9}{4}\\right) + 7\\left(\\dfrac{3}{2}\\right) - 15 = \\dfrac{9}{2} + \\dfrac{21}{2} - 15 = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{3}{2}$): the factor is $2x - 3$, so its zero is $+\\frac{3}{2}$; carrying the minus sign forward flips it.\n* Choice C ($\\frac{5}{2}$): the misfactoring $(2x - 5)(x + 3)$ has the right constant term but expands to $2x^2 + x - 15$.\n* Choice D ($3$): dropping the leading $2$ and factoring $(x + 5)(x - 3)$ also gives $-15$, but its middle term is $2x$, not $7x$.\n\n**Test Day Takeaway:** Use the known solution to pin the missing coefficient first; then the known factor divides the quadratic and the second factor falls out.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "quadratic-via-factoring",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-147",
    domain: "advanced-math",
    skills: ["finding-roots-factoring"],
    difficulty: "hard",
    type: "fill-in",
    question: "In the equation $x^2 + bx + 24 = 0$, $b$ is a positive integer and both solutions are negative integers. What is the greatest possible value of $b$?",
    correctAnswer: "25",
    explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**The correct answer is $25$.**\n\n**The Fast Way (~50s):** The two solutions multiply to $24$ and add to $-b$. The factor pair $-1$ and $-24$ is spread widest, giving $b = 25$.\n\n**The Full Solution:**\nStep 1: If the solutions are $-m$ and $-n$ with $m$ and $n$ positive integers, then $x^2 + bx + 24 = (x + m)(x + n)$, so $mn = 24$ and $m + n = b$.\nStep 2: The positive factor pairs of $24$ are $(1, 24)$, $(2, 12)$, $(3, 8)$, and $(4, 6)$, giving $b = 25$, $14$, $11$, and $10$.\nStep 3: The greatest of those is $b = 25$. Check: $x^2 + 25x + 24 = (x + 1)(x + 24)$, whose solutions $-1$ and $-24$ are both negative integers. $\\checkmark$\n\n**Common Mistakes:**\n* Answering $10$ by picking the factor pair closest together instead of the pair farthest apart.\n* Answering $24$ by reporting the constant term rather than the sum of the factors.\n* Allowing the pair $(-1, -24)$ to be read as $b = -25$, which the condition that $b$ is positive rules out.\n\n**Test Day Takeaway:** With a fixed product, the sum is largest when the two factors are farthest apart; scan every factor pair before answering a greatest-value question.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "quadratic-via-factoring",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 8/3: function-evaluation-with-negative-input (8 items) =====
  // Pattern: f(x) defined; evaluate at NEGATIVE input. 7 test occurrences across
  // M2Easy variants. Title verbatim: 'Function Evaluation with Negative Input'.
  {
    id: "bank-am-148",
    domain: "advanced-math",
    skills: ["function-evaluation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The function $f$ is defined by $f(x) = 5 - 4x$. What is the value of $f(-3)$?",
    choices: [
      // distractor: computes $17$ and then attaches the sign of the input
      { id: "A", text: "$-17$" },
      // distractor: substitutes $x = 3$ instead of $x = -3$
      { id: "B", text: "$-7$" },
      // distractor: evaluates $-4(-3) = 12$ but never adds the constant $5$
      { id: "C", text: "$12$" },
      { id: "D", text: "$17$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** $f(-3) = 5 - 4(-3) = 5 + 12 = 17$.\n\n**The Full Solution:**\nStep 1: Substitute $-3$ for every $x$ in the rule: $f(-3) = 5 - 4(-3)$.\nStep 2: Multiply first: $-4(-3) = 12$, because a negative times a negative is positive.\nStep 3: Add: $5 + 12 = 17$. Check: the function decreases by $4$ for each increase of $1$ in $x$, so moving from $f(0) = 5$ down to $x = -3$ adds three steps of $4$, giving $17$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-17$): the arithmetic is right but the answer is given the sign of the input.\n* Choice B ($-7$): substituting $3$ rather than $-3$ gives $5 - 12$.\n* Choice C ($12$): this is only the second term, $-4(-3)$, with the constant $5$ dropped.\n\n**Test Day Takeaway:** Put the negative input in parentheses before multiplying; the sign rule then takes care of itself.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-evaluation-with-negative-input",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-149",
    domain: "advanced-math",
    skills: ["function-evaluation"],
    difficulty: "easy",
    type: "fill-in",
    question: "The function $g$ is defined by $g(x) = 7 - 2x$. What is the value of $g(-4)$?",
    correctAnswer: "15",
    explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**The correct answer is $15$.**\n\n**The Fast Way (~15s):** $g(-4) = 7 - 2(-4) = 7 + 8 = 15$.\n\n**The Full Solution:**\nStep 1: Replace $x$ with $-4$: $g(-4) = 7 - 2(-4)$.\nStep 2: Evaluate the product: $-2(-4) = 8$.\nStep 3: Add: $7 + 8 = 15$. Check: $g(0) = 7$ and each step left along the $x$-axis raises the output by $2$, so four steps add $8$. $\\checkmark$\n\n**Common Mistakes:**\n* Writing $7 - 2 \\cdot 4 = -1$ by ignoring the negative sign on the input.\n* Multiplying $7$ and $-2$ first and computing $(7 - 2)(-4) = -20$, which ignores the order of operations.\n* Answering $8$, the value of $-2(-4)$, and forgetting the constant $7$.\n\n**Test Day Takeaway:** Substituting a negative value turns a subtraction into an addition; write the parentheses so the double negative is visible.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-evaluation-with-negative-input",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-150",
    domain: "advanced-math",
    skills: ["function-evaluation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The function $f$ is defined by $f(x) = x^2 + kx + 6$, where $k$ is a constant. The table gives two values of $f$. What is the value of $f(-3)$?",
    diagram: { type: "dataTable", params: { headers: ["x", "f(x)"], rows: [["-1", "10"], ["2", "4"]] } },
    choices: [
      // distractor: treats $(-3)^2$ as $-9$, giving $-9 + 9 + 6$
      { id: "A", text: "$6$" },
      // distractor: drops the linear term when substituting, giving $9 + 6$
      { id: "B", text: "$15$" },
      { id: "C", text: "$24$" },
      // distractor: solves $f(2) = 0$ instead of $f(2) = 4$, which produces $k = -5$
      { id: "D", text: "$30$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice C is correct.**\n\n**The Fast Way (~45s):** From $f(2) = 4$: $4 + 2k + 6 = 4$, so $k = -3$. Then $f(-3) = 9 + 9 + 6 = 24$.\n\n**The Full Solution:**\nStep 1: Use a table entry to find $k$. Substituting $x = 2$ gives $f(2) = 2^2 + 2k + 6 = 10 + 2k$, and the table says $f(2) = 4$, so $10 + 2k = 4$ and $k = -3$.\nStep 2: The rule is therefore $f(x) = x^2 - 3x + 6$. Verify with the other row: $f(-1) = 1 + 3 + 6 = 10$, which matches the table.\nStep 3: Substitute $-3$: $f(-3) = (-3)^2 - 3(-3) + 6 = 9 + 9 + 6 = 24$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): squaring $-3$ as $-9$ turns the sum into $-9 + 9 + 6$.\n* Choice B ($15$): the middle term $-3(-3) = 9$ is left out, leaving $9 + 6$.\n* Choice D ($30$): setting $f(2) = 0$ rather than $4$ gives $k = -5$ and $f(-3) = 9 + 15 + 6$.\n\n**Test Day Takeaway:** Pin the unknown constant with one table row, confirm it with a second, and only then evaluate at the requested input.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-evaluation-with-negative-input",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-151",
    domain: "advanced-math",
    skills: ["function-evaluation"],
    difficulty: "medium",
    type: "fill-in",
    question: "The function $h$ is defined by $h(x) = 3x^2 + 4x - 5$. What is the value of $h(-3)$?",
    correctAnswer: "10",
    explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~25s):** $h(-3) = 3(9) + 4(-3) - 5 = 27 - 12 - 5 = 10$.\n\n**The Full Solution:**\nStep 1: Substitute $-3$ for $x$: $h(-3) = 3(-3)^2 + 4(-3) - 5$.\nStep 2: Square before multiplying: $(-3)^2 = 9$, so the first term is $3(9) = 27$. The second term is $4(-3) = -12$.\nStep 3: Combine: $27 - 12 - 5 = 10$. Check: rewriting as $3x^2 + 4x - 5$ at $x = -3$ gives $27 + (-12) + (-5)$, and $27 - 17 = 10$. $\\checkmark$\n\n**Common Mistakes:**\n* Computing $3(-3)^2$ as $(3 \\cdot -3)^2 = 81$, which multiplies before squaring.\n* Treating $(-3)^2$ as $-9$, which gives $-27 - 12 - 5 = -44$.\n* Adding the last term and reporting $20$ instead of subtracting $5$.\n\n**Test Day Takeaway:** Exponents come before multiplication, so square the input first and only then apply the coefficient.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-evaluation-with-negative-input",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-152",
    domain: "advanced-math",
    skills: ["function-evaluation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The function $f$ is defined by $f(x) = -2x^2 + x + 9$. What is the value of $f(-4)$?",
    choices: [
      // distractor: drops the constant $9$, leaving $-32 - 4$
      { id: "A", text: "$-36$" },
      { id: "B", text: "$-27$" },
      // distractor: substitutes $+4$ in the linear term only, giving $-32 + 4 + 9$
      { id: "C", text: "$-19$" },
      // distractor: treats $(-4)^2$ as $-16$, so $-2(-16) = 32$
      { id: "D", text: "$37$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $f(-4) = -2(16) + (-4) + 9 = -32 - 4 + 9 = -27$.\n\n**The Full Solution:**\nStep 1: Substitute: $f(-4) = -2(-4)^2 + (-4) + 9$.\nStep 2: Square first: $(-4)^2 = 16$, so $-2(16) = -32$. The linear term contributes $-4$.\nStep 3: Combine: $-32 - 4 + 9 = -27$. Check: $-32 + 5 = -27$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-36$): the constant $9$ is never added.\n* Choice C ($-19$): the linear term is entered as $+4$ instead of $-4$.\n* Choice D ($37$): reading $(-4)^2$ as $-16$ makes the leading term $+32$ instead of $-32$.\n\n**Test Day Takeaway:** The coefficient $-2$ applies after the square; a negative input squared is always positive.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-evaluation-with-negative-input",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-153",
    domain: "advanced-math",
    skills: ["function-evaluation"],
    difficulty: "medium",
    type: "fill-in",
    question: "The function $f$ is defined by $f(x) = (x - 4)^2 + 3$. What is the value of $f(-1)$?",
    correctAnswer: "28",
    explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**The correct answer is $28$.**\n\n**The Fast Way (~20s):** $f(-1) = (-1 - 4)^2 + 3 = (-5)^2 + 3 = 28$.\n\n**The Full Solution:**\nStep 1: Substitute $-1$ inside the parentheses: $f(-1) = (-1 - 4)^2 + 3$.\nStep 2: Simplify inside the parentheses first: $-1 - 4 = -5$, so the expression is $(-5)^2 + 3$.\nStep 3: Square and add: $25 + 3 = 28$. Check: expanding gives $f(x) = x^2 - 8x + 19$, and $1 + 8 + 19 = 28$. $\\checkmark$\n\n**Common Mistakes:**\n* Computing $(-1)^2 - 4$ by squaring before subtracting, which ignores the parentheses.\n* Reading $(-5)^2$ as $-25$, which gives $-22$.\n* Adding the $3$ inside the parentheses before squaring.\n\n**Test Day Takeaway:** In vertex form, finish the arithmetic inside the parentheses before squaring, then add the constant.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-evaluation-with-negative-input",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-154",
    domain: "advanced-math",
    skills: ["function-evaluation"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The function $f$ is defined by $f(x) = x^2 + bx + 1$, where $b$ is a constant, and the table gives three values of the function $g$. If $f(2) = g(2)$, what is the value of $f(-2) - g(-2)$?",
    diagram: { type: "dataTable", params: { headers: ["x", "g(x)"], rows: [["-2", "7"], ["0", "3"], ["2", "-1"]] } },
    choices: [
      // distractor: computes $g(-2) - f(-2)$, reversing the order of the subtraction
      { id: "A", text: "$-4$" },
      { id: "B", text: "$4$" },
      // distractor: reports $f(-2) = 11$ and stops before subtracting $g(-2)$
      { id: "C", text: "$11$" },
      // distractor: subtracts $g(2) = -1$ from the wrong row instead of $g(-2) = 7$
      { id: "D", text: "$12$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice B is correct.**\n\n**The Fast Way (~45s):** The table gives $g(2) = -1$, so $5 + 2b = -1$ and $b = -3$. Then $f(-2) = 4 + 6 + 1 = 11$ and $11 - 7 = 4$.\n\n**The Full Solution:**\nStep 1: The table gives $g(2) = -1$, so the condition $f(2) = g(2)$ reads $2^2 + 2b + 1 = -1$, which is $5 + 2b = -1$.\nStep 2: That gives $2b = -6$, so $b = -3$ and $f(x) = x^2 - 3x + 1$. At the negative input, $f(-2) = (-2)^2 - 3(-2) + 1 = 4 + 6 + 1 = 11$.\nStep 3: The row with $x = -2$ gives $g(-2) = 7$, so $f(-2) - g(-2) = 11 - 7 = 4$. Check: $f(2) = 4 - 6 + 1 = -1$, which matches $g(2)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): the two values are subtracted in the reverse order, $7 - 11$.\n* Choice C ($11$): this is $f(-2)$ alone, reported before $g(-2)$ is subtracted.\n* Choice D ($12$): the row $x = 2$ is used, so $g(2) = -1$ is subtracted instead of $g(-2) = 7$, giving $11 + 1$.\n\n**Test Day Takeaway:** Pin the unknown constant with the stated condition first, then evaluate at the negative input and keep the subtraction in the order written.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-evaluation-with-negative-input",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-155",
    domain: "advanced-math",
    skills: ["function-evaluation"],
    difficulty: "hard",
    type: "fill-in",
    question: "The function $f$ is defined by $f(x) = 2x^3 + ax^2 + x$, where $a$ is a constant. If $f(-2) = -6$, what is the value of $f(-3)$?",
    correctAnswer: "-30",
    explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**The correct answer is $-30$.**\n\n**The Fast Way (~50s):** $f(-2) = -16 + 4a - 2 = -6$ gives $a = 3$, and then $f(-3) = -54 + 27 - 3 = -30$.\n\n**The Full Solution:**\nStep 1: Substitute $-2$: $f(-2) = 2(-2)^3 + a(-2)^2 + (-2) = -16 + 4a - 2$. The odd power keeps the sign, so $(-2)^3 = -8$, while the even power does not, so $(-2)^2 = 4$.\nStep 2: The given value makes that $4a - 18 = -6$, so $4a = 12$ and $a = 3$. The rule is $f(x) = 2x^3 + 3x^2 + x$.\nStep 3: Now substitute $-3$: $f(-3) = 2(-27) + 3(9) + (-3) = -54 + 27 - 3 = -30$. Check: $f(-2) = -16 + 12 - 2 = -6$, matching the given value. $\\checkmark$\n\n**Common Mistakes:**\n* Writing $2(-2)^3 = 16$, losing the sign that an odd power keeps; that gives $4a + 14 = -6$ and $a = -5$.\n* Writing $a(-2)^2 = -4a$ by attaching the input's sign to the squared term; that gives $-4a - 18 = -6$ and $a = -3$.\n* Stopping at $a = 3$ and reporting the constant instead of evaluating $f(-3)$.\n\n**Test Day Takeaway:** Track parity term by term — odd powers of a negative stay negative, even powers turn positive — then reread which value the question actually asks for.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "function-evaluation-with-negative-input",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 8/4: discriminant-with-integer-bound (8 items) =====
  // Pattern: solve b² − 4ac < 0 (or > 0) and find the greatest/least integer
  // satisfying the bound. 7 test occurrences across PT2/3 + M2Easy. Title:
  // 'Discriminant with Integer Bound'.
  {
    id: "bank-am-156",
    domain: "advanced-math",
    skills: ["discriminant-analysis"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In the equation $x^2 + bx + 36 = 0$, $b$ is a positive constant and the equation has no real solutions. Which of the following could be the value of $b$?",
    choices: [
      { id: "A", text: "$5$" },
      // distractor: picks the boundary $b = 12$, where the discriminant is $0$ and there is exactly one real solution
      { id: "B", text: "$12$" },
      // distractor: looks for $b$ larger than $2\sqrt{c}$ instead of smaller; $15^2 = 225 > 144$
      { id: "C", text: "$15$" },
      // distractor: treats a large $b$ as making the parabola miss the $x$-axis; $20^2 = 400 > 144$
      { id: "D", text: "$20$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** No real solutions requires $b^2 < 4(1)(36) = 144$, so $0 < b < 12$. Only $5$ fits.\n\n**The Full Solution:**\nStep 1: The discriminant is $b^2 - 4(1)(36) = b^2 - 144$. No real solutions means $b^2 - 144 < 0$.\nStep 2: So $b^2 < 144$, which for positive $b$ means $b < 12$.\nStep 3: Among the choices only $b = 5$ satisfies $0 < b < 12$. Check: $x^2 + 5x + 36$ has discriminant $25 - 144 = -119 < 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($12$): this is the boundary, where $144 - 144 = 0$ gives exactly one real solution, not none.\n* Choice C ($15$): $225 - 144 = 81 > 0$, so there are two real solutions.\n* Choice D ($20$): a bigger middle coefficient makes the discriminant larger, not smaller; $400 - 144 = 256 > 0$.\n\n**Test Day Takeaway:** No real solutions means the middle coefficient is small compared with $2\\sqrt{ac}$, and the endpoint itself is the one-solution case.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "discriminant-with-integer-bound",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-157",
    domain: "advanced-math",
    skills: ["discriminant-analysis"],
    difficulty: "easy",
    type: "fill-in",
    question: "In the equation $x^2 + bx + 16 = 0$, $b$ is a positive integer and the equation has no real solutions. What is the greatest possible value of $b$?",
    correctAnswer: "7",
    explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~30s):** No real solutions means $b^2 < 64$, so $b < 8$ and the greatest positive integer is $7$.\n\n**The Full Solution:**\nStep 1: The discriminant is $b^2 - 4(1)(16) = b^2 - 64$, and no real solutions means $b^2 - 64 < 0$.\nStep 2: For positive $b$ that inequality becomes $b < 8$.\nStep 3: The greatest integer strictly less than $8$ is $7$. Check: $b = 7$ gives $49 - 64 = -15 < 0$, while $b = 8$ gives $0$, which is one real solution. $\\checkmark$\n\n**Common Mistakes:**\n* Answering $8$, the endpoint, where the equation has exactly one real solution rather than none.\n* Using $\\sqrt{16} = 4$ instead of $\\sqrt{64} = 8$ and answering $3$.\n* Reading the inequality as $b^2 > 64$, which describes two real solutions.\n\n**Test Day Takeaway:** Translate the condition into an inequality on $b$, then step one integer inside the boundary.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "discriminant-with-integer-bound",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-158",
    domain: "advanced-math",
    skills: ["discriminant-analysis"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the $xy$-plane, the graph of $y = 2x^2 - bx + 50$ has no $x$-intercepts, where $b$ is a positive integer. What is the greatest possible value of $b$?",
    choices: [
      // distractor: drops the factor of $4$, using $b^2 < ac = 100$ and stopping one integer below $10$
      { id: "A", text: "$9$" },
      { id: "B", text: "$19$" },
      // distractor: stops at the boundary $b = 20$, where the graph touches the $x$-axis at exactly one point
      { id: "C", text: "$20$" },
      // distractor: uses $b < 4\sqrt{ac} = 40$ instead of $b < 2\sqrt{ac} = 20$
      { id: "D", text: "$39$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** No $x$-intercepts means $b^2 < 4(2)(50) = 400$, so $b < 20$ and the greatest integer is $19$.\n\n**The Full Solution:**\nStep 1: The graph crosses the $x$-axis where $2x^2 - bx + 50 = 0$, so having no $x$-intercepts means that equation has no real solutions.\nStep 2: With $a = 2$ and $c = 50$, the discriminant is $(-b)^2 - 4(2)(50) = b^2 - 400$, and no real solutions requires $b^2 < 400$, so for positive $b$, $b < 20$.\nStep 3: The greatest integer strictly less than $20$ is $19$. Check: $19^2 = 361 < 400$, while $20^2 = 400$ makes the discriminant zero. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($9$): dropping the $4$ gives $b^2 < 100$ and $b < 10$.\n* Choice C ($20$): at $b = 20$ the discriminant is exactly $0$, so the graph touches the $x$-axis once rather than missing it.\n* Choice D ($39$): using $4\\sqrt{ac} = 40$ in place of $2\\sqrt{ac} = 20$ doubles the bound.\n\n**Test Day Takeaway:** A parabola misses the $x$-axis exactly when the discriminant is negative; compute $4ac$ in full, then step one integer inside the boundary.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "discriminant-with-integer-bound",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-159",
    domain: "advanced-math",
    skills: ["discriminant-analysis"],
    difficulty: "medium",
    type: "fill-in",
    question: "In the equation $4x^2 - kx + 9 = 0$, $k$ is a positive integer and the equation has two distinct real solutions. What is the least possible value of $k$?",
    correctAnswer: "13",
    explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**The correct answer is $13$.**\n\n**The Fast Way (~35s):** Two distinct real solutions require $k^2 > 4(4)(9) = 144$, so $k > 12$ and the least integer is $13$.\n\n**The Full Solution:**\nStep 1: With $a = 4$ and $c = 9$, the discriminant is $(-k)^2 - 4(4)(9) = k^2 - 144$.\nStep 2: Two distinct real solutions means $k^2 - 144 > 0$, so for positive $k$, $k > 12$.\nStep 3: The least integer strictly greater than $12$ is $13$. Check: $13^2 - 144 = 25 > 0$, while $k = 12$ gives $0$, which is a single repeated solution. $\\checkmark$\n\n**Common Mistakes:**\n* Answering $12$, where the discriminant is zero and the two solutions collapse into one.\n* Using $\\sqrt{4 \\cdot 9} = 6$ instead of $\\sqrt{4 \\cdot 4 \\cdot 9} = 12$ and answering $7$.\n* Reversing the inequality and looking for the greatest $k$ below $12$.\n\n**Test Day Takeaway:** Two distinct solutions is the strict inequality $b^2 > 4ac$; the endpoint always belongs to the one-solution case.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "discriminant-with-integer-bound",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-160",
    domain: "advanced-math",
    skills: ["discriminant-analysis"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the equation $x^2 + bx + 4 = 0$, $b$ is a constant and the equation has no real solutions. Which of the following describes all possible values of $b$?",
    choices: [
      { id: "A", text: "$-4 < b < 4$" },
      // distractor: uses $\sqrt{c} = 2$ as the bound instead of $2\sqrt{c} = 4$
      { id: "B", text: "$-2 < b < 2$" },
      // distractor: keeps only the positive half of the interval and reverses its direction
      { id: "C", text: "$b > 4$" },
      // distractor: solves $b^2 > 16$, the condition for two distinct real solutions
      { id: "D", text: "$b < -4$ or $b > 4$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** No real solutions means $b^2 < 4(1)(4) = 16$, which is $-4 < b < 4$.\n\n**The Full Solution:**\nStep 1: The discriminant is $b^2 - 4(1)(4) = b^2 - 16$.\nStep 2: No real solutions means $b^2 - 16 < 0$, so $b^2 < 16$.\nStep 3: Taking square roots of $b^2 < 16$ gives $|b| < 4$, which is the interval $-4 < b < 4$. Check: $b = 3$ gives $9 - 16 = -7 < 0$, and $b = -5$ gives $25 - 16 = 9 > 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: the bound $2$ comes from $\\sqrt{4}$; the discriminant needs $\\sqrt{4ac} = \\sqrt{16} = 4$.\n* Choice C: this keeps only values above $4$, which actually give two real solutions.\n* Choice D: this is the solution set of $b^2 > 16$, the two-solution case, not the no-solution case.\n\n**Test Day Takeaway:** $b^2 < k$ becomes a single interval around zero; $b^2 > k$ becomes two rays. Match the shape to the condition asked.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "discriminant-with-integer-bound",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-161",
    domain: "advanced-math",
    skills: ["discriminant-analysis"],
    difficulty: "medium",
    type: "fill-in",
    question: "In the equation $5x^2 + 20x + c = 0$, $c$ is a constant and the equation has no real solutions. What is the least integer value of $c$?",
    correctAnswer: "21",
    explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**The correct answer is $21$.**\n\n**The Fast Way (~30s):** No real solutions means $400 - 20c < 0$, so $c > 20$ and the least integer is $21$.\n\n**The Full Solution:**\nStep 1: With $a = 5$ and $b = 20$, the discriminant is $20^2 - 4(5)(c) = 400 - 20c$.\nStep 2: No real solutions requires $400 - 20c < 0$, so $20c > 400$ and $c > 20$.\nStep 3: The least integer strictly greater than $20$ is $21$. Check: $c = 21$ gives $400 - 420 = -20 < 0$, while $c = 20$ gives $0$, exactly one real solution. $\\checkmark$\n\n**Common Mistakes:**\n* Answering $20$, the boundary, which produces a single repeated solution.\n* Forgetting the leading coefficient and solving $400 - 4c < 0$, which gives $c > 100$.\n* Failing to reverse the inequality after dividing by $-20$.\n\n**Test Day Takeaway:** Keep the leading coefficient inside $4ac$; then take the first integer past the boundary, never the boundary itself.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "discriminant-with-integer-bound",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-162",
    domain: "advanced-math",
    skills: ["discriminant-analysis"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the equation $x^2 + bx + 20 = 0$, $b$ is an integer. For how many values of $b$ does the equation have no real solutions?",
    choices: [
      // distractor: counts only the positive integers $1$ through $8$
      { id: "A", text: "$8$" },
      // distractor: counts $0$ through $8$ and never includes the negative values of $b$
      { id: "B", text: "$9$" },
      // distractor: counts $-8$ through $8$ but leaves out $b = 0$
      { id: "C", text: "$16$" },
      { id: "D", text: "$17$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice D is correct.**\n\n**The Fast Way (~50s):** No real solutions means $b^2 < 80$, so $-8 \\le b \\le 8$ for integers, which is $17$ values.\n\n**The Full Solution:**\nStep 1: The discriminant is $b^2 - 4(1)(20) = b^2 - 80$, and no real solutions means $b^2 < 80$.\nStep 2: Since $8^2 = 64 < 80$ and $9^2 = 81 > 80$, the integers satisfying $b^2 < 80$ run from $-8$ to $8$.\nStep 3: Counting from $-8$ to $8$ inclusive gives $8 + 8 + 1 = 17$ values. Check: $b = 8$ gives $64 - 80 = -16 < 0$; $b = 9$ gives $81 - 80 = 1 > 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): only the positive values $1$ through $8$ are counted.\n* Choice B ($9$): the negative values are omitted even though squaring removes the sign.\n* Choice C ($16$): the count of $-8$ through $8$ is taken as $2 \\times 8$, forgetting $b = 0$.\n\n**Test Day Takeaway:** Squaring makes the solution set symmetric about $0$; count both signs and remember zero itself.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "discriminant-with-integer-bound",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-163",
    domain: "advanced-math",
    skills: ["discriminant-analysis"],
    difficulty: "hard",
    type: "fill-in",
    question: "In the equation $2x^2 + bx + 21 = 0$, $b$ is a positive integer and the equation has no real solutions. What is the greatest possible value of $b$?",
    correctAnswer: "12",
    explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~45s):** No real solutions means $b^2 < 4(2)(21) = 168$. Since $12^2 = 144$ and $13^2 = 169$, the greatest integer is $12$.\n\n**The Full Solution:**\nStep 1: With $a = 2$ and $c = 21$, the discriminant is $b^2 - 4(2)(21) = b^2 - 168$.\nStep 2: No real solutions requires $b^2 < 168$, so $b < \\sqrt{168}$, a value between $12$ and $13$.\nStep 3: Testing integers, $12^2 = 144 < 168$ but $13^2 = 169 > 168$, so the greatest possible value is $b = 12$. $\\checkmark$\n\n**Common Mistakes:**\n* Rounding $\\sqrt{168} \\approx 12.96$ up to $13$; that value makes the discriminant positive.\n* Dropping the leading coefficient and using $b^2 < 84$, which gives $9$.\n* Reporting $168$ or $\\sqrt{168}$ rather than the greatest integer below the bound.\n\n**Test Day Takeaway:** When $4ac$ is not a perfect square, test the two integers around its square root rather than rounding.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "discriminant-with-integer-bound",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 8/5: vertex-form-maximum (8 items) =====
  // Pattern: find the maximum/minimum value (or x-coordinate of vertex) of a
  // quadratic by completing the square or using x = -b/(2a). 6 test occurrences
  // across PT3, PT7 etc. Title: 'Vertex Form Maximum'.
  {
    id: "bank-am-164",
    domain: "advanced-math",
    skills: ["converting-quadratic-forms"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The graph of the quadratic function $f$ is shown in the $xy$-plane, and its minimum occurs at the marked point. If $f(x) = (x - h)^2 + k$, where $h$ and $k$ are constants, what is the value of $h + k$?",
    diagram: { type: "quadraticVertex", params: { vertex: [3, -5], a: 1, showVertex: true } },
    choices: [
      // distractor: reads $h$ as $-3$ from the $(x - h)$ form, giving $-3 + (-5)$
      { id: "A", text: "$-8$" },
      // distractor: reports $k$ alone rather than the requested sum
      { id: "B", text: "$-5$" },
      { id: "C", text: "$-2$" },
      // distractor: computes $h - k$ instead of $h + k$
      { id: "D", text: "$8$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The minimum sits at $(3, -5)$, so $h = 3$ and $k = -5$, and $h + k = -2$.\n\n**The Full Solution:**\nStep 1: In vertex form $f(x) = (x - h)^2 + k$, the vertex is the point $(h, k)$, and for an upward-opening parabola that vertex is the minimum.\nStep 2: The marked minimum on the graph is $(3, -5)$, so $h = 3$ and $k = -5$.\nStep 3: Then $h + k = 3 + (-5) = -2$. Check: $f(x) = (x - 3)^2 - 5$ gives $f(3) = -5$, and $f(0) = 9 - 5 = 4$, matching the graph's $y$-intercept. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-8$): the sign in $(x - h)$ is misread, making $h = -3$.\n* Choice B ($-5$): this is $k$, the minimum value, reported without adding $h$.\n* Choice D ($8$): subtracting instead of adding gives $3 - (-5)$.\n\n**Test Day Takeaway:** In $(x - h)^2 + k$ the vertex is $(h, k)$ with the sign of $h$ already flipped; read both coordinates before combining them.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertex-form-maximum",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-165",
    domain: "advanced-math",
    skills: ["converting-quadratic-forms"],
    difficulty: "easy",
    type: "fill-in",
    question: "The function $f$ is defined by $f(x) = 9 - (x + 5)^2$. What is the maximum value of $f(x)$?",
    correctAnswer: "9",
    explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~20s):** The squared term is never negative, so subtracting it from $9$ makes $9$ the largest possible output.\n\n**The Full Solution:**\nStep 1: Rewrite the rule as $f(x) = -(x + 5)^2 + 9$, which is vertex form with $a = -1$, vertex $(-5, 9)$.\nStep 2: Since $(x + 5)^2 \\ge 0$ for every $x$, the term $-(x+5)^2$ is at most $0$, so $f(x) \\le 9$.\nStep 3: The value $9$ is reached when $x = -5$, so the maximum value is $9$. Check: $f(-5) = 9 - 0 = 9$ and $f(-4) = 9 - 1 = 8$. $\\checkmark$\n\n**Common Mistakes:**\n* Answering $-5$, the $x$-value where the maximum occurs, instead of the maximum value itself.\n* Answering $5$ by reading the constant inside the parentheses without flipping its sign.\n* Calling $9$ a minimum; the negative coefficient on the squared term opens the parabola downward.\n\n**Test Day Takeaway:** In vertex form the constant outside the square is the extreme value, and the sign in front of the square says whether it is a maximum or a minimum.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertex-form-maximum",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-166",
    domain: "advanced-math",
    skills: ["converting-quadratic-forms"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The graph of $g(x) = 3x^2 + bx + 7$, where $b$ is a constant, is shown in the $xy$-plane with its minimum at the marked point. What is the value of $b$?",
    diagram: { type: "quadraticVertex", params: { vertex: [-2, -5], a: 3, showVertex: true } },
    choices: [
      // distractor: drops the minus sign in $x = -\frac{b}{2a}$ and solves $\frac{b}{6} = -2$
      { id: "A", text: "$-12$" },
      // distractor: forgets the leading coefficient and solves $-\frac{b}{2} = -2$
      { id: "B", text: "$4$" },
      // distractor: uses $x = -\frac{b}{a}$ instead of $x = -\frac{b}{2a}$
      { id: "C", text: "$6$" },
      { id: "D", text: "$12$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice D is correct.**\n\n**The Fast Way (~35s):** The minimum is at $x = -2$, and the vertex of $g$ sits at $x = -\\dfrac{b}{2(3)}$, so $-\\dfrac{b}{6} = -2$ and $b = 12$.\n\n**The Full Solution:**\nStep 1: For $g(x) = ax^2 + bx + c$ the vertex has $x$-coordinate $-\\dfrac{b}{2a}$. Here $a = 3$, so that $x$-coordinate is $-\\dfrac{b}{6}$.\nStep 2: The graph shows the minimum at $x = -2$, so $-\\dfrac{b}{6} = -2$, which gives $b = 12$.\nStep 3: Check with the marked point $(-2, -5)$: $g(-2) = 3(4) + 12(-2) + 7 = 12 - 24 + 7 = -5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-12$): dropping the minus sign in $-\\frac{b}{2a}$ reverses the answer.\n* Choice B ($4$): using $-\\frac{b}{2}$ ignores the leading coefficient $3$.\n* Choice C ($6$): using $-\\frac{b}{a}$ leaves out the factor of $2$ in the denominator.\n\n**Test Day Takeaway:** The vertex formula is $x = -\\frac{b}{2a}$; both the minus sign and the $2a$ have to be there when you solve for $b$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertex-form-maximum",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-167",
    domain: "advanced-math",
    skills: ["converting-quadratic-forms"],
    difficulty: "medium",
    type: "fill-in",
    question: "A model rocket's height above the ground, in meters, is given by $h(t) = -5t^2 + 40t + 2$, where $t$ is the number of seconds after launch. At what time, in seconds, does the rocket reach its greatest height?",
    correctAnswer: "4",
    explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~25s):** The greatest height occurs at the vertex, $t = -\\dfrac{40}{2(-5)} = 4$ seconds.\n\n**The Full Solution:**\nStep 1: The height is a quadratic in $t$ with a negative leading coefficient, so its graph is a downward parabola and the greatest height occurs at the vertex.\nStep 2: The vertex is at $t = -\\dfrac{b}{2a} = -\\dfrac{40}{2(-5)} = -\\dfrac{40}{-10} = 4$.\nStep 3: So the rocket is highest $4$ seconds after launch. Check: $h(3) = -45 + 120 + 2 = 77$, $h(4) = -80 + 160 + 2 = 82$, and $h(5) = -125 + 200 + 2 = 77$. $\\checkmark$\n\n**Common Mistakes:**\n* Answering $82$, the greatest height, when the question asks for the time at which it occurs.\n* Dropping the minus sign and computing $\\frac{40}{-10} = -4$, a time before launch.\n* Using $-\\frac{b}{a} = 8$, which is when the rocket has already returned near the ground.\n\n**Test Day Takeaway:** For a projectile model, the vertex time is $-\\frac{b}{2a}$; decide first whether the question wants that time or the height there.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "vertex-form-maximum",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-168",
    domain: "advanced-math",
    skills: ["converting-quadratic-forms"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The graph of $f(x) = -x^2 + bx + c$, where $b$ and $c$ are constants, is shown in the $xy$-plane with its maximum at the marked point. What is the value of $b + c$?",
    diagram: { type: "quadraticVertex", params: { vertex: [3, 4], a: -1, showVertex: true } },
    choices: [
      // distractor: reports $c$ alone rather than the requested sum
      { id: "A", text: "$-5$" },
      { id: "B", text: "$1$" },
      // distractor: reports $b$ alone rather than the requested sum
      { id: "C", text: "$6$" },
      // distractor: computes $b - c$ instead of $b + c$
      { id: "D", text: "$11$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** The maximum is at $(3, 4)$, so $-\\dfrac{b}{2(-1)} = 3$ gives $b = 6$; then $-9 + 18 + c = 4$ gives $c = -5$, and $b + c = 1$.\n\n**The Full Solution:**\nStep 1: The vertex of $f(x) = -x^2 + bx + c$ has $x$-coordinate $-\\dfrac{b}{2(-1)} = \\dfrac{b}{2}$. The graph shows the maximum at $x = 3$, so $\\dfrac{b}{2} = 3$ and $b = 6$.\nStep 2: The maximum value is $4$, so $f(3) = 4$. Substituting, $-(3)^2 + 6(3) + c = 4$, which is $-9 + 18 + c = 4$.\nStep 3: That gives $c = -5$, so $b + c = 6 + (-5) = 1$. Check: $f(x) = -x^2 + 6x - 5$ gives $f(3) = -9 + 18 - 5 = 4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): this is $c$ by itself, which is also the $y$-intercept of the graph.\n* Choice C ($6$): this is $b$ by itself.\n* Choice D ($11$): subtracting gives $6 - (-5)$ instead of adding.\n\n**Test Day Takeaway:** Use the vertex's $x$-coordinate to find $b$, then substitute the vertex point to find $c$; finish by combining them the way the question asks.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertex-form-maximum",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-169",
    domain: "advanced-math",
    skills: ["converting-quadratic-forms"],
    difficulty: "medium",
    type: "fill-in",
    question: "In the $xy$-plane, the graph of $y = 2x^2 - 14x + 9$ is a parabola. What is the $x$-coordinate of the vertex of this parabola?",
    correctAnswer: "3.5",
    explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**The correct answer is $3.5$.**\n\n**The Fast Way (~20s):** The vertex is at $x = -\\dfrac{-14}{2(2)} = \\dfrac{14}{4} = 3.5$.\n\n**The Full Solution:**\nStep 1: For $y = ax^2 + bx + c$ the vertex has $x$-coordinate $-\\dfrac{b}{2a}$. Here $a = 2$ and $b = -14$.\nStep 2: Substituting gives $-\\dfrac{-14}{2(2)} = \\dfrac{14}{4}$.\nStep 3: That simplifies to $3.5$. Check: the parabola is symmetric, and $y$ at $x = 3$ is $18 - 42 + 9 = -15$, the same as at $x = 4$, $32 - 56 + 9 = -15$; the midpoint of $3$ and $4$ is $3.5$. $\\checkmark$\n\n**Common Mistakes:**\n* Forgetting the leading coefficient and computing $\\frac{14}{2} = 7$.\n* Dropping the minus sign in the formula and answering $-3.5$.\n* Reporting the $y$-coordinate of the vertex instead of the $x$-coordinate.\n\n**Test Day Takeaway:** The axis of symmetry is $x = -\\frac{b}{2a}$, and a non-integer result is perfectly normal when $2a$ does not divide $b$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertex-form-maximum",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-170",
    domain: "advanced-math",
    skills: ["converting-quadratic-forms"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The function $f$ is defined by $f(x) = 4x^2 - 24x + 41$. The minimum value of $f$ is $m$, and it occurs at $x = a$. What is the value of $a + m$?",
    choices: [
      // distractor: computes $m - a$ instead of $a + m$
      { id: "A", text: "$2$" },
      // distractor: reports $a$ alone rather than the requested sum
      { id: "B", text: "$3$" },
      // distractor: reports $m$ alone rather than the requested sum
      { id: "C", text: "$5$" },
      { id: "D", text: "$8$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** The vertex is at $a = \\dfrac{24}{8} = 3$, and $f(3) = 36 - 72 + 41 = 5$, so $a + m = 8$.\n\n**The Full Solution:**\nStep 1: The leading coefficient $4$ is positive, so the parabola opens upward and the minimum is at the vertex, $a = -\\dfrac{-24}{2(4)} = \\dfrac{24}{8} = 3$.\nStep 2: The minimum value is $f(3) = 4(9) - 24(3) + 41 = 36 - 72 + 41 = 5$, so $m = 5$.\nStep 3: Then $a + m = 3 + 5 = 8$. Check by completing the square: $4x^2 - 24x + 41 = 4(x - 3)^2 + 5$, confirming the vertex $(3, 5)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): this is $m - a$, the difference rather than the sum.\n* Choice B ($3$): this is $a$, the location of the minimum, not combined with $m$.\n* Choice C ($5$): this is $m$, the minimum value, not combined with $a$.\n\n**Test Day Takeaway:** Find where the minimum happens and what it equals, keep the two labeled, and combine exactly as the question defines them.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "vertex-form-maximum",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-171",
    domain: "advanced-math",
    skills: ["converting-quadratic-forms"],
    difficulty: "hard",
    type: "fill-in",
    question: "The function $f$ is defined by $f(x) = -3x^2 + 18x + k$, where $k$ is a constant. If the maximum value of $f$ is $20$, what is the value of $k$?",
    correctAnswer: "-7",
    explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**The correct answer is $-7$.**\n\n**The Fast Way (~45s):** The maximum is at $x = \\dfrac{18}{6} = 3$, where $f(3) = 27 + k$. Setting $27 + k = 20$ gives $k = -7$.\n\n**The Full Solution:**\nStep 1: Because the leading coefficient $-3$ is negative, the parabola opens downward and the maximum occurs at the vertex, $x = -\\dfrac{18}{2(-3)} = 3$.\nStep 2: Evaluate there: $f(3) = -3(9) + 18(3) + k = -27 + 54 + k = 27 + k$.\nStep 3: The maximum is given as $20$, so $27 + k = 20$ and $k = -7$. Check: $f(x) = -3x^2 + 18x - 7$ gives $f(3) = -27 + 54 - 7 = 20$. $\\checkmark$\n\n**Common Mistakes:**\n* Setting $k = 20$ directly, as if the constant term were the maximum; that is only true when the vertex is on the $y$-axis.\n* Computing the vertex as $x = -3$ by dropping a sign, which gives $f(-3) = -81 + k$ and $k = 101$.\n* Answering $7$ after solving $27 + k = 20$ without keeping the negative sign.\n\n**Test Day Takeaway:** Locate the vertex first, evaluate the function there in terms of the unknown constant, and only then set it equal to the stated extreme value.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "vertex-form-maximum",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 9/2: function-composition (8 items) =====
  // 6 test occurrences. Title verbatim: 'Function Composition'.
  {
    id: "bank-am-172",
    domain: "advanced-math",
    skills: ["function-composition"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "For the functions $f$ and $g$, the table lists $f(x)$ and $g(x)$ at four values of $x$. What is the value of $f(g(1))$?",
    diagram: { type: "dataTable", params: { headers: ["x", "f(x)", "g(x)"], rows: [["-1", "3", "1"], ["0", "2", "-1"], ["1", "5", "0"], ["2", "-1", "2"]] } },
    choices: [
      // distractor: reports $g(1) = 0$ and stops before applying $f$
      { id: "A", text: "$0$" },
      { id: "B", text: "$2$" },
      // distractor: evaluates $f(-1) = 3$, reading the wrong row of the table
      { id: "C", text: "$3$" },
      // distractor: evaluates $f(1) = 5$, applying the two functions in the wrong order
      { id: "D", text: "$5$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Function Composition**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The table gives $g(1) = 0$, and then $f(0) = 2$.\n\n**The Full Solution:**\nStep 1: In $f(g(1))$ the inner function is evaluated first, so start with $g(1)$.\nStep 2: The row with $x = 1$ gives $g(1) = 0$, so $f(g(1)) = f(0)$.\nStep 3: The row with $x = 0$ gives $f(0) = 2$. Check: reversing the order would give $g(f(1)) = g(5)$, which the table does not even list, so the order matters. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0$): this is $g(1)$, the intermediate value, not the final output.\n* Choice C ($3$): this is $f(-1)$, read from the $x = -1$ row instead of the $x = 0$ row.\n* Choice D ($5$): this is $f(1)$, which applies $f$ to the original input rather than to $g(1)$.\n\n**Test Day Takeaway:** Work a composition from the inside out, and use the inner output as the new input value when you return to the table.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-composition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-173",
    domain: "advanced-math",
    skills: ["function-composition"],
    difficulty: "easy",
    type: "fill-in",
    question: "The functions $f$ and $g$ are defined by $f(x) = x^2 + 5$ and $g(x) = x - 7$. What is the value of $f(g(3))$?",
    correctAnswer: "21",
    explanation: "**SAT Pattern: Function Composition**\n\n**The correct answer is $21$.**\n\n**The Fast Way (~20s):** $g(3) = -4$, and then $f(-4) = 16 + 5 = 21$.\n\n**The Full Solution:**\nStep 1: Evaluate the inner function first: $g(3) = 3 - 7 = -4$.\nStep 2: Use that output as the input to $f$: $f(g(3)) = f(-4) = (-4)^2 + 5$.\nStep 3: Then $(-4)^2 = 16$, so the value is $16 + 5 = 21$. Check: composing symbolically, $f(g(x)) = (x - 7)^2 + 5$, and at $x = 3$ that is $16 + 5 = 21$. $\\checkmark$\n\n**Common Mistakes:**\n* Computing $g(f(3)) = g(14) = 7$ by applying the two rules in the wrong order.\n* Reading $(-4)^2$ as $-16$, which gives $-11$.\n* Answering $-4$, the value of $g(3)$, without applying $f$.\n\n**Test Day Takeaway:** The inner function runs first; substitute its numerical output, parentheses included, into the outer rule.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-composition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-174",
    domain: "advanced-math",
    skills: ["function-composition"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The table lists the value of the function $h$ at five values of $x$, and the function $p$ is defined by $p(x) = 2x - 1$. What is the value of $h(p(3))$?",
    diagram: { type: "dataTable", params: { headers: ["x", "h(x)"], rows: [["1", "4"], ["3", "-2"], ["5", "6"], ["7", "0"], ["9", "-5"]] } },
    choices: [
      // distractor: computes $p(h(3)) = p(-2)$, reversing the order of the composition
      { id: "A", text: "$-5$" },
      // distractor: reads $h(3) = -2$ without first applying $p$
      { id: "B", text: "$-2$" },
      // distractor: uses the row $x = 7$ instead of the row $x = 5$
      { id: "C", text: "$0$" },
      { id: "D", text: "$6$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Function Composition**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** $p(3) = 5$, and the table gives $h(5) = 6$.\n\n**The Full Solution:**\nStep 1: Evaluate the inner function: $p(3) = 2(3) - 1 = 5$.\nStep 2: That output becomes the input to $h$, so $h(p(3)) = h(5)$.\nStep 3: The row with $x = 5$ gives $h(5) = 6$. Check: the reverse composition $p(h(3)) = p(-2) = -5$ is a different value, so order matters. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): this is $p(h(3))$, the composition in the opposite order.\n* Choice B ($-2$): this is $h(3)$, using the original input instead of $p(3)$.\n* Choice C ($0$): this is $h(7)$, one row past the correct entry.\n\n**Test Day Takeaway:** Compute the inner value, then look up that number in the table — not the number that appeared in the original expression.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-composition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-175",
    domain: "advanced-math",
    skills: ["function-composition"],
    difficulty: "medium",
    type: "fill-in",
    question: "The functions $f$ and $g$ are defined by $f(x) = 3x^2 - x + 2$ and $g(x) = x - 4$. What is the value of $f(g(6))$?",
    correctAnswer: "12",
    explanation: "**SAT Pattern: Function Composition**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~25s):** $g(6) = 2$, and then $f(2) = 12 - 2 + 2 = 12$.\n\n**The Full Solution:**\nStep 1: Evaluate the inner function: $g(6) = 6 - 4 = 2$.\nStep 2: Substitute that output into $f$: $f(2) = 3(2)^2 - 2 + 2$.\nStep 3: Then $3(4) = 12$ and $-2 + 2 = 0$, so $f(2) = 12$. Check: $f(g(x)) = 3(x-4)^2 - (x-4) + 2$, and at $x = 6$ that is $12 - 2 + 2 = 12$. $\\checkmark$\n\n**Common Mistakes:**\n* Evaluating $f(6) = 108 - 6 + 2 = 104$ by skipping the inner function.\n* Computing $g(f(6))$, which gives $104 - 4 = 100$.\n* Squaring after multiplying and writing $3(2)^2$ as $36$.\n\n**Test Day Takeaway:** Reduce the inner function to a single number before touching the outer rule; that keeps the order of operations simple.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-composition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-176",
    domain: "advanced-math",
    skills: ["function-composition"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The graph of the function $g$ is shown in the $xy$-plane, and the function $f$ is defined by $f(x) = 2x + 5$. What is the value of $f(g(1))$?",
    diagram: { type: "quadraticVertex", params: { vertex: [2, -3], a: 1, showVertex: true } },
    choices: [
      // distractor: reports $g(1) = -2$ and stops before applying $f$
      { id: "A", text: "$-2$" },
      { id: "B", text: "$1$" },
      // distractor: computes $f(1) + g(1) = 7 + (-2)$ instead of the composition
      { id: "C", text: "$5$" },
      // distractor: reads $g(-1) = 6$ from the graph instead of $g(1) = -2$
      { id: "D", text: "$17$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Function Composition**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The graph gives $g(1) = -2$, and $f(-2) = -4 + 5 = 1$.\n\n**The Full Solution:**\nStep 1: Evaluate the inner function from the graph. At $x = 1$ the curve passes through $(1, -2)$, so $g(1) = -2$.\nStep 2: Use that output as the input to $f$: $f(g(1)) = f(-2) = 2(-2) + 5$.\nStep 3: That equals $-4 + 5 = 1$. Check: the vertex of the graph is $(2, -3)$, and $(1, -2)$ is one unit left and one unit up from it, consistent with reading $g(1) = -2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$): this is $g(1)$, read correctly but never fed into $f$.\n* Choice C ($5$): adding $f(1) = 7$ and $g(1) = -2$ treats the composition as a sum.\n* Choice D ($17$): reading the graph at $x = -1$ gives $6$, and $f(6) = 17$.\n\n**Test Day Takeaway:** A graph is just another way to state the inner function; read the output at the given $x$, then substitute that number into the outer rule.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-composition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-177",
    domain: "advanced-math",
    skills: ["function-composition"],
    difficulty: "medium",
    type: "fill-in",
    question: "The functions $f$ and $g$ are defined by $f(x) = 4x$ and $g(x) = x - 3$. What is the value of $g(f(3)) - f(g(3))$?",
    correctAnswer: "9",
    explanation: "**SAT Pattern: Function Composition**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~30s):** $g(f(3)) = g(12) = 9$ and $f(g(3)) = f(0) = 0$, so the difference is $9$.\n\n**The Full Solution:**\nStep 1: For $g(f(3))$, evaluate the inner function first: $f(3) = 12$, so $g(f(3)) = g(12) = 12 - 3 = 9$.\nStep 2: For $f(g(3))$, evaluate $g(3) = 3 - 3 = 0$, so $f(g(3)) = f(0) = 4(0) = 0$.\nStep 3: Subtract in the stated order: $9 - 0 = 9$. Check symbolically, $g(f(x)) = 4x - 3$ and $f(g(x)) = 4x - 12$, so the difference is always $9$. $\\checkmark$\n\n**Common Mistakes:**\n* Assuming the two compositions are equal and answering $0$.\n* Computing $f(g(3)) - g(f(3)) = -9$ by reversing the order of the subtraction.\n* Treating $g(f(3))$ as $g(3) \\cdot f(3)$, a product rather than a composition.\n\n**Test Day Takeaway:** Composition is not commutative; build each composition separately and keep the subtraction in the order written.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-composition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-178",
    domain: "advanced-math",
    skills: ["function-composition"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The function $f$ is defined by $f(x) = x^2 + 3$, and the table lists the value of the function $g$ at four values of $x$. If $f(g(a)) = 28$ and $g(a) > 0$, what is the value of $a$?",
    diagram: { type: "dataTable", params: { headers: ["x", "g(x)"], rows: [["1", "25"], ["2", "-5"], ["3", "5"], ["4", "28"]] } },
    choices: [
      // distractor: solves $g(a) + 3 = 28$, treating $f$ as adding $3$, and looks up $g(a) = 25$
      { id: "A", text: "$1$" },
      // distractor: uses the negative square root $g(a) = -5$, which the condition $g(a) > 0$ rules out
      { id: "B", text: "$2$" },
      { id: "C", text: "$3$" },
      // distractor: searches the $g$ column for the target value $28$ instead of feeding $g(a)$ into $f$
      { id: "D", text: "$4$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Function Composition**\n\n**Choice C is correct.**\n\n**The Fast Way (~45s):** $f(g(a)) = 28$ gives $g(a)^2 = 25$, so $g(a) = 5$ since $g(a) > 0$. The table shows $g(3) = 5$, so $a = 3$.\n\n**The Full Solution:**\nStep 1: Let $u = g(a)$. Then $f(u) = u^2 + 3 = 28$, so $u^2 = 25$ and $u = 5$ or $u = -5$.\nStep 2: The condition $g(a) > 0$ selects $u = 5$, so $g(a) = 5$.\nStep 3: Scan the table for the input whose output is $5$: the row $x = 3$ gives $g(3) = 5$, so $a = 3$. Check: $f(g(3)) = f(5) = 25 + 3 = 28$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($1$): treating $f$ as adding $3$ gives $g(a) = 25$, which the table matches at $x = 1$.\n* Choice B ($2$): $g(2) = -5$ also squares to $25$, but the condition $g(a) > 0$ excludes it.\n* Choice D ($4$): $g(4) = 28$ matches the target value, but $28$ is the output of $f$, not of $g$.\n\n**Test Day Takeaway:** Name the inner output, solve the outer equation for it, apply the stated sign condition, and only then read the table backwards.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-composition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-179",
    domain: "advanced-math",
    skills: ["function-composition"],
    difficulty: "hard",
    type: "fill-in",
    question: "The functions $f$ and $g$ are defined by $f(x) = x^2 - 3$ and $g(x) = 2x + c$, where $c$ is a constant. If $f(g(1)) = 22$ and $g(1) > 0$, what is the value of $c$?",
    correctAnswer: "3",
    explanation: "**SAT Pattern: Function Composition**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~45s):** $f(g(1)) = 22$ gives $g(1)^2 = 25$, so $g(1) = 5$. Then $2 + c = 5$ and $c = 3$.\n\n**The Full Solution:**\nStep 1: Let $u = g(1)$. Then $f(u) = u^2 - 3 = 22$, so $u^2 = 25$ and $u = 5$ or $u = -5$.\nStep 2: The condition $g(1) > 0$ selects $u = 5$, so $g(1) = 5$.\nStep 3: Since $g(1) = 2(1) + c = 2 + c$, the equation $2 + c = 5$ gives $c = 3$. Check: $g(1) = 5$ and $f(5) = 25 - 3 = 22$. $\\checkmark$\n\n**Common Mistakes:**\n* Taking $u = -5$, which gives $c = -7$ but makes $g(1)$ negative, contrary to the stated condition.\n* Solving $u^2 - 3 = 22$ as $u^2 = 19$ by adding $3$ to the wrong side.\n* Setting $g(1) = 22$ directly and answering $20$, which skips the outer function entirely.\n\n**Test Day Takeaway:** Unwind a composition one layer at a time: solve for the inner output first, then use the inner rule to find the unknown constant.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "function-composition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 13/5: exponential-growth-model (8 items) =====
  {
    id: "bank-am-180",
    domain: "advanced-math",
    skills: ["exponential-growth-decay"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A culture of protozoa triples in number every $4$ hours, and the table lists the number of protozoa at three times after the culture was started. How many protozoa are in the culture $16$ hours after it was started?",
    diagram: { type: "dataTable", params: { headers: ["Hours after start", "Number of protozoa"], rows: [["0", "20"], ["4", "60"], ["8", "180"]] } },
    choices: [
      // distractor: multiplies the starting count by the number of periods, $20 \times 4$, instead of applying the growth factor
      { id: "A", text: "$80$" },
      // distractor: uses three tripling periods instead of four, which lands at $12$ hours
      { id: "B", text: "$540$" },
      { id: "C", text: "$1{,}620$" },
      // distractor: uses five tripling periods, which lands at $20$ hours
      { id: "D", text: "$4{,}860$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** In $16$ hours there are $16 \\div 4 = 4$ tripling periods, so the count is $20 \\times 3^4 = 1{,}620$.\n\n**The Full Solution:**\nStep 1: The table shows $20$ protozoa at the start, $60$ after $4$ hours, and $180$ after $8$ hours, confirming a growth factor of $3$ per $4$-hour period.\nStep 2: The number after $t$ hours is $20 \\cdot 3^{t/4}$. At $t = 16$ that exponent is $\\dfrac{16}{4} = 4$.\nStep 3: So the count is $20 \\cdot 3^4 = 20 \\cdot 81 = 1{,}620$. Check by extending the table: $180$ at $8$ hours, $540$ at $12$ hours, $1{,}620$ at $16$ hours. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($80$): multiplying $20$ by the number of periods treats the growth as linear.\n* Choice B ($540$): three triplings reach only $12$ hours.\n* Choice D ($4{,}860$): five triplings overshoot to $20$ hours.\n\n**Test Day Takeaway:** Count how many whole growth periods fit in the elapsed time, then raise the growth factor to that count; never multiply by the count itself.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "exponential-growth-model",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-am-181",
    domain: "advanced-math",
    skills: ["exponential-growth-decay"],
    difficulty: "easy",
    type: "fill-in",
    question: "A digital archive currently holds $6$ terabytes of data, and the amount of data it holds triples each year. The function $A$ gives the amount of data, in terabytes, the archive holds $d$ years from now. What is the value of $A(3)$?",
    correctAnswer: "162",
    explanation: "**SAT Pattern: Exponential Growth Model**\n\n**The correct answer is $162$.**\n\n**The Fast Way (~15s):** Tripling three times multiplies the starting amount by $3^3 = 27$, and $6 \\cdot 27 = 162$.\n\n**The Full Solution:**\nStep 1: \"Triples each year\" means the growth factor is $3$ per year, so $A(d) = 6 \\cdot 3^d$.\nStep 2: Substituting $d = 3$ gives $A(3) = 6 \\cdot 3^3 = 6 \\cdot 27$.\nStep 3: $6 \\cdot 27 = 162$ terabytes. Check year by year: $6 \\to 18 \\to 54 \\to 162$. $\\checkmark$\n\n**Common Mistakes:** Tripling only once and answering $18$, or stopping a year early at $54$. Adding $3$ terabytes each year gives $6 + 3(3) = 15$, which models constant growth instead of tripling.\n\n**Test Day Takeaway:** A phrase like \"triples each year\" names a growth FACTOR, so the number belongs in the base of an exponent, never as a term added each year.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "exponential-growth-model",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-182",
    domain: "advanced-math",
    skills: ["exponential-growth-decay"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In $2015$, a coastal ferry carried $4{,}800$ riders each week. The weekly ridership decreased by $6\\%$ each year after $2015$. Which function $R$ models the weekly ridership $t$ years after $2015$?",
    choices: [
      // distractor: uses the rate itself as the multiplier (a 94% drop per year)
      { id: "A", text: "$R(t) = 4{,}800(0.06)^t$" },
      { id: "B", text: "$R(t) = 4{,}800(0.94)^t$" },
      // distractor: grows by 6% instead of decreasing
      { id: "C", text: "$R(t) = 4{,}800(1.06)^t$" },
      // distractor: subtracts 6% of the ORIGINAL ridership each year (linear decrease)
      { id: "D", text: "$R(t) = 4{,}800 - 288t$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** A $6\\%$ decrease leaves $94\\%$, so the yearly multiplier is $0.94$ and the model is $4{,}800(0.94)^t$.\n\n**The Full Solution:**\nStep 1: An exponential model has the form $R(t) = R_0 b^t$, where $R_0$ is the value at $t = 0$. Here $R_0 = 4{,}800$.\nStep 2: Decreasing by $6\\%$ multiplies the previous year's ridership by $1 - 0.06 = 0.94$, so $b = 0.94$.\nStep 3: $R(t) = 4{,}800(0.94)^t$. Check at $t = 1$: $4{,}800(0.94) = 4{,}512$, which is $4{,}800 - 288$, a $6\\%$ drop. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4{,}800(0.06)^t$): puts the rate in the base instead of $1 - $ the rate; after one year it predicts $288$ riders, a $94\\%$ collapse.\n* Choice C ($4{,}800(1.06)^t$): the multiplier for a $6\\%$ INCREASE; the stem says the ridership decreased.\n* Choice D ($4{,}800 - 288t$): subtracts $6\\%$ of the original $4{,}800$ every year, which is constant (linear) loss, not a constant percent loss.\n\n**Test Day Takeaway:** For a constant percent change, the base is $1 + r$ for growth and $1 - r$ for decay — the rate alone is never the base.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "exponential-growth-model",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-183",
    domain: "advanced-math",
    skills: ["exponential-growth-decay"],
    difficulty: "medium",
    type: "fill-in",
    question: "A collector bought a coin for $\\$3{,}000$. The value of the coin increases by $10\\%$ each year after the purchase. What is the value of the coin, in dollars, $2$ years after the purchase?",
    correctAnswer: "3630",
    explanation: "**SAT Pattern: Exponential Growth Model**\n\n**The correct answer is $3630$.**\n\n**The Fast Way (~20s):** Two $10\\%$ increases multiply by $(1.1)^2 = 1.21$, and $3{,}000(1.21) = 3{,}630$.\n\n**The Full Solution:**\nStep 1: A $10\\%$ increase multiplies the value by $1.1$, so $V(t) = 3{,}000(1.1)^t$ dollars after $t$ years.\nStep 2: Substituting $t = 2$ gives $V(2) = 3{,}000(1.1)^2 = 3{,}000(1.21)$.\nStep 3: $3{,}000(1.21) = 3{,}630$. Check one year at a time: $3{,}000 \\to 3{,}300 \\to 3{,}630$. $\\checkmark$\n\n**Common Mistakes:** Adding $10\\%$ of the ORIGINAL price twice gives $3{,}000 + 300 + 300 = 3{,}600$; it misses the $\\$30$ earned on the first year's $\\$300$ increase. Applying the increase only once gives $3{,}300$.\n\n**Test Day Takeaway:** Percent growth compounds — the second year's increase is computed on the NEW value, so multiply by $1.1$ twice rather than adding the same dollar amount twice.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "exponential-growth-model",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-184",
    domain: "advanced-math",
    skills: ["exponential-growth-decay"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "For the exponential function $g$, the table lists the value of $g(x)$ at three values of $x$. Which equation defines $g$?",
    diagram: { type: "dataTable", params: { headers: ["x", "g(x)"], rows: [["1", "12"], ["2", "48"], ["3", "192"]] } },
    choices: [
      // distractor: uses the first listed output as the growth factor
      { id: "A", text: "$g(x) = 3(12)^x$" },
      { id: "B", text: "$g(x) = 3(4)^x$" },
      // distractor: swaps the roles of the growth factor and the first listed output
      { id: "C", text: "$g(x) = 4(12)^x$" },
      // distractor: treats $g(1) = 12$ as the value at $x = 0$
      { id: "D", text: "$g(x) = 12(4)^x$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Each step in $x$ multiplies $g$ by $48 \\div 12 = 4$, so $b = 4$; backing up from $g(1) = 12$ gives $g(0) = 3$, and $g(x) = 3(4)^x$.\n\n**The Full Solution:**\nStep 1: For $g(x) = ab^x$, the ratio of consecutive outputs is the growth factor: $\\dfrac{48}{12} = 4$ and $\\dfrac{192}{48} = 4$, so $b = 4$.\nStep 2: The value $a$ is $g(0)$, one step BELOW the first row, so $a = 12 \\div 4 = 3$.\nStep 3: $g(x) = 3(4)^x$. Check every row: $g(1) = 12$, $g(2) = 48$, $g(3) = 192$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3(12)^x$): takes $12$, the first output, as the growth factor; it gives $g(1) = 36$.\n* Choice C ($4(12)^x$): reverses the two constants, using the growth factor $4$ as the initial value and the first output $12$ as the base; it gives $g(1) = 48$, which is the $x = 2$ value, not the $x = 1$ value.\n* Choice D ($12(4)^x$): uses $g(1) = 12$ as the initial value $a$; every output is then four times too large.\n\n**Test Day Takeaway:** In $ab^x$, $a$ is the output at $x = 0$. When the table starts at $x = 1$, divide by the growth factor once to step back to $a$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "exponential-growth-model",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-185",
    domain: "advanced-math",
    skills: ["exponential-growth-decay"],
    difficulty: "medium",
    type: "fill-in",
    question: "A machine shop pays $\\$8{,}000$ this year for its equipment insurance. The premium is projected to rise by $5\\%$ each year. What will the premium be, in dollars, $3$ years from now?",
    correctAnswer: "9261",
    explanation: "**SAT Pattern: Exponential Growth Model**\n\n**The correct answer is $9261$.**\n\n**The Fast Way (~25s):** Three $5\\%$ increases multiply by $(1.05)^3$, and $8{,}000(1.05)^3 = 9{,}261$.\n\n**The Full Solution:**\nStep 1: A $5\\%$ increase multiplies the premium by $1.05$, so $P(t) = 8{,}000(1.05)^t$ dollars $t$ years from now.\nStep 2: Substituting $t = 3$ gives $P(3) = 8{,}000(1.05)^3$.\nStep 3: Year by year: $8{,}000 \\to 8{,}400 \\to 8{,}820 \\to 9{,}261$. $\\checkmark$\n\n**Common Mistakes:** Adding $5\\%$ of the current $\\$8{,}000$ three times gives $8{,}000 + 3(400) = 9{,}200$, which ignores the compounding. Stopping after two increases gives $8{,}820$.\n\n**Test Day Takeaway:** Repeated percent change is repeated MULTIPLICATION; count the number of increases carefully and raise the multiplier to that power.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "exponential-growth-model",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-186",
    domain: "advanced-math",
    skills: ["exponential-growth-decay"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The function $f$ is defined by $f(x) = ab^x$, where $a$ and $b$ are positive constants. The table gives the value of $f$ at two values of $x$. What is the value of $f(2)$?",
    diagram: { type: "dataTable", params: { headers: ["x", "f(x)"], rows: [["0", "5"], ["3", "320"]] } },
    choices: [
      // distractor: evaluates $f(1)$ instead of $f(2)$
      { id: "A", text: "$20$" },
      { id: "B", text: "$80$" },
      // distractor: treats the change from $5$ to $320$ as constant addition
      { id: "C", text: "$215$" },
      // distractor: evaluates $f(4)$, multiplying by $b$ twice too often
      { id: "D", text: "$1{,}280$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** $f(0) = a = 5$, so $5b^3 = 320$ gives $b^3 = 64$ and $b = 4$; then $f(2) = 5(4)^2 = 80$.\n\n**The Full Solution:**\nStep 1: Substituting $x = 0$ gives $f(0) = ab^0 = a$, and the table gives $f(0) = 5$, so $a = 5$.\nStep 2: Substituting $x = 3$ gives $5b^3 = 320$, so $b^3 = 64$ and $b = 4$ (the positive cube root).\nStep 3: $f(2) = 5(4)^2 = 5(16) = 80$. Check the chain: $5 \\to 20 \\to 80 \\to 320$, four times at each step. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($20$): this is $f(1) = 5(4)$, one factor short.\n* Choice C ($215$): treats the model as linear — the total increase is $315$ over $3$ units, so $5 + 2(105) = 215$. But $f$ multiplies, it does not add.\n* Choice D ($1{,}280$): this is $f(4) = 5(4)^4$, one factor past the requested input.\n\n**Test Day Takeaway:** Two points determine $ab^x$: read $a$ off the $x = 0$ row, then take the appropriate root of the ratio to get $b$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "exponential-growth-model",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-am-187",
    domain: "advanced-math",
    skills: ["exponential-growth-decay"],
    difficulty: "hard",
    type: "fill-in",
    question: "The biomass of an algae culture, in milligrams, is modeled by $M(d) = 6 \\cdot 2^{d/3}$, where $d$ is the number of days since the culture was started. Over how many days does the biomass increase from $24$ milligrams to $384$ milligrams?",
    correctAnswer: "12",
    explanation: "**SAT Pattern: Exponential Growth Model**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~35s):** $384 \\div 24 = 16 = 2^4$, so four doublings are needed, and each doubling takes $3$ days: $4(3) = 12$ days.\n\n**The Full Solution:**\nStep 1: Solve $6 \\cdot 2^{d/3} = 24$. Dividing by $6$ gives $2^{d/3} = 4 = 2^2$, so $\\dfrac{d}{3} = 2$ and $d = 6$.\nStep 2: Solve $6 \\cdot 2^{d/3} = 384$. Dividing by $6$ gives $2^{d/3} = 64 = 2^6$, so $\\dfrac{d}{3} = 6$ and $d = 18$.\nStep 3: The elapsed time is $18 - 6 = 12$ days. Check: $24 \\to 48 \\to 96 \\to 192 \\to 384$ is four doublings at $3$ days each. $\\checkmark$\n\n**Common Mistakes:** Answering $18$, the day the biomass REACHES $384$ mg, instead of the time since it was $24$ mg. Answering $4$, the number of doublings, without multiplying by the $3$-day doubling period.\n\n**Test Day Takeaway:** When an exponent is $\\frac{d}{k}$, the quantity multiplies by the base once every $k$ units — count the multiplications first, then scale by $k$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "exponential-growth-model",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },

  // ─── VIETA'S SUM/PRODUCT OF ROOTS (bank-am-188..195) ──────────────────────
  // Granularity principle (2026-05-12): Vieta's (sum=-b/a, product=c/a) is a
  // DISTINCT method from factoring. Items pin direct-Vieta's approach.
  {
    id: "bank-am-188",
    domain: "advanced-math",
    skills: ["quadratic-factoring"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The equation $5x^2 - 45x + 20 = 0$ has two distinct real solutions. What is the sum of the two solutions?",
    choices: [
      // distractor: keeps the sign of $b$ instead of using $-b$
      { id: "A", text: "$-9$" },
      // distractor: reports the product $\frac{c}{a}$
      { id: "B", text: "$4$" },
      { id: "C", text: "$9$" },
      // distractor: forgets to divide by the leading coefficient
      { id: "D", text: "$45$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Sum/Product of Roots — Vieta's**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The sum of the solutions of $ax^2 + bx + c = 0$ is $-\\dfrac{b}{a} = -\\dfrac{-45}{5} = 9$.\n\n**The Full Solution:**\nStep 1: Match the equation to $ax^2 + bx + c = 0$: $a = 5$, $b = -45$, $c = 20$.\nStep 2: The sum of the two solutions is $-\\dfrac{b}{a}$.\nStep 3: $-\\dfrac{-45}{5} = 9$. Check by dividing through by $5$: $x^2 - 9x + 4 = 0$, whose solutions sum to $9$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-9$): drops the minus sign in $-\\frac{b}{a}$; the sum has the OPPOSITE sign of $b$.\n* Choice B ($4$): this is $\\frac{c}{a} = \\frac{20}{5}$, the PRODUCT of the solutions, not the sum.\n* Choice D ($45$): uses $-b$ alone and never divides by $a = 5$.\n\n**Test Day Takeaway:** Sum $= -\\frac{b}{a}$, product $= \\frac{c}{a}$ — both are divided by the leading coefficient, and only the sum flips sign.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vieta-sum-product-of-roots",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-am-189",
    domain: "advanced-math",
    skills: ["quadratic-factoring"],
    difficulty: "easy",
    type: "fill-in",
    question: "The equation $3x^2 - 21x + 24 = 0$ has two distinct real solutions. What is the product of the two solutions?",
    correctAnswer: "8",
    explanation: "**SAT Pattern: Sum/Product of Roots — Vieta's**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~15s):** The product of the solutions is $\\dfrac{c}{a} = \\dfrac{24}{3} = 8$.\n\n**The Full Solution:**\nStep 1: Match the equation to $ax^2 + bx + c = 0$: $a = 3$, $b = -21$, $c = 24$.\nStep 2: For any quadratic with two solutions, their product is $\\dfrac{c}{a}$.\nStep 3: $\\dfrac{24}{3} = 8$. Check by dividing through by $3$: $x^2 - 7x + 8 = 0$, whose solutions multiply to $8$ and add to $7$. $\\checkmark$\n\n**Common Mistakes:** Answering $7$, which is the SUM $-\\frac{b}{a}$. Answering $24$, which forgets to divide by the leading coefficient $a = 3$. Attaching a negative sign — only the sum formula carries the minus.\n\n**Test Day Takeaway:** You never have to solve the quadratic: the product of the roots is $\\frac{c}{a}$, even when the roots themselves are irrational.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vieta-sum-product-of-roots",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-am-190",
    domain: "advanced-math",
    skills: ["quadratic-factoring"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the equation $x^2 + 14x + k = 0$, where $k$ is a constant, one of the two solutions is $-3$. What is the other solution?",
    choices: [
      // distractor: subtracts $3$ from $-14$ instead of subtracting $-3$
      { id: "A", text: "$-17$" },
      { id: "B", text: "$-11$" },
      // distractor: uses $+14$ as the sum and $+3$ as the given solution
      { id: "C", text: "$11$" },
      // distractor: uses $+14$ as the sum and then subtracts $-3$
      { id: "D", text: "$17$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Sum/Product of Roots — Vieta's**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The two solutions add to $-\\dfrac{14}{1} = -14$, so the other one is $-14 - (-3) = -11$.\n\n**The Full Solution:**\nStep 1: Here $a = 1$ and $b = 14$, so the sum of the two solutions is $-\\dfrac{b}{a} = -14$.\nStep 2: If one solution is $-3$ and the other is $r$, then $-3 + r = -14$.\nStep 3: $r = -14 + 3 = -11$. Check: the product is $(-3)(-11) = 33 = k$, and $x^2 + 14x + 33 = (x + 3)(x + 11)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-17$): computes $-14 - 3$, forgetting that the known solution is already negative.\n* Choice C ($11$): uses $+14$ for the sum AND drops the minus on the given solution, computing $14 - 3 = 11$.\n* Choice D ($17$): combines both slips — sum taken as $+14$, then $14 - (-3)$.\n\n**Test Day Takeaway:** With one root given and $k$ unknown, use the SUM (which needs only $a$ and $b$); the product would require the missing constant.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vieta-sum-product-of-roots",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-am-191",
    domain: "advanced-math",
    skills: ["quadratic-factoring"],
    difficulty: "medium",
    type: "fill-in",
    question: "In the equation $3x^2 + bx - 45 = 0$, where $b$ is a constant, one of the two solutions is $5$. What is the other solution?",
    correctAnswer: "-3",
    explanation: "**SAT Pattern: Sum/Product of Roots — Vieta's**\n\n**The correct answer is $-3$.**\n\n**The Fast Way (~20s):** The solutions multiply to $\\dfrac{-45}{3} = -15$, so the other one is $\\dfrac{-15}{5} = -3$.\n\n**The Full Solution:**\nStep 1: Since $b$ is unknown, use the product: for $ax^2 + bx + c = 0$ the solutions multiply to $\\dfrac{c}{a} = \\dfrac{-45}{3} = -15$.\nStep 2: If one solution is $5$ and the other is $r$, then $5r = -15$.\nStep 3: $r = -3$. Check: the sum is $5 + (-3) = 2 = -\\frac{b}{3}$, so $b = -6$, and $3x^2 - 6x - 45 = 3(x - 5)(x + 3)$. $\\checkmark$\n\n**Common Mistakes:** Answering $3$, which drops the negative sign carried by $c = -45$. Answering $-9$, which divides $-45$ by $5$ without first dividing by the leading coefficient $3$.\n\n**Test Day Takeaway:** When the MIDDLE coefficient is the unknown, the product relationship is the one that still works — it uses only $a$ and $c$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vieta-sum-product-of-roots",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-am-192",
    domain: "advanced-math",
    skills: ["quadratic-factoring"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the equation $x^2 + bx + c = 0$, where $b$ and $c$ are constants, the two solutions have a sum of $-5$ and a product of $-24$. What is the value of $b - c$?",
    choices: [
      // distractor: uses $b = -5$ and $c = 24$, flipping both signs
      { id: "A", text: "$-29$" },
      // distractor: uses $c = 24$, flipping the sign of the product
      { id: "B", text: "$-19$" },
      // distractor: sets $b$ equal to the sum instead of its opposite
      { id: "C", text: "$19$" },
      { id: "D", text: "$29$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Sum/Product of Roots — Vieta's**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** With $a = 1$, $b = -(\\text{sum}) = 5$ and $c = \\text{product} = -24$, so $b - c = 5 - (-24) = 29$.\n\n**The Full Solution:**\nStep 1: For $x^2 + bx + c = 0$, the sum of the solutions is $-b$ and the product is $c$.\nStep 2: The sum is $-5$, so $-b = -5$ and $b = 5$. The product is $-24$, so $c = -24$.\nStep 3: $b - c = 5 - (-24) = 29$. Check: $x^2 + 5x - 24 = (x + 8)(x - 3)$, whose roots $-8$ and $3$ sum to $-5$ and multiply to $-24$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-29$): takes $b$ as the sum itself and $c$ as the opposite of the product.\n* Choice B ($-19$): gets $b = 5$ right but flips the product to $c = 24$.\n* Choice C ($19$): sets $b = -5$ (the sum) while keeping $c = -24$; the sum is $-b$, not $b$.\n\n**Test Day Takeaway:** In a monic quadratic the constant term IS the product, and the middle coefficient is the NEGATIVE of the sum — write both down before combining them.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vieta-sum-product-of-roots",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-am-193",
    domain: "advanced-math",
    skills: ["quadratic-factoring"],
    difficulty: "medium",
    type: "fill-in",
    question: "The two solutions of $2x^2 + 9x + c = 0$, where $c$ is a constant, have a product of $-6$. What is the value of $c$?",
    correctAnswer: "-12",
    explanation: "**SAT Pattern: Sum/Product of Roots — Vieta's**\n\n**The correct answer is $-12$.**\n\n**The Fast Way (~20s):** The product of the solutions is $\\dfrac{c}{a} = \\dfrac{c}{2}$, so $\\dfrac{c}{2} = -6$ and $c = -12$.\n\n**The Full Solution:**\nStep 1: For $ax^2 + bx + c = 0$, the product of the two solutions is $\\dfrac{c}{a}$; here $a = 2$.\nStep 2: Setting $\\dfrac{c}{2} = -6$ and multiplying both sides by $2$ gives $c = -12$.\nStep 3: Check with $2x^2 + 9x - 12 = 0$: dividing by $2$ gives $x^2 + 4.5x - 6 = 0$, whose solutions multiply to $-6$. $\\checkmark$\n\n**Common Mistakes:** Answering $-6$, reporting the product itself and forgetting that it equals $\\frac{c}{a}$, not $c$. Answering $-3$, which divides by $2$ instead of multiplying.\n\n**Test Day Takeaway:** $\\frac{c}{a} = \\text{product}$ rearranges to $c = a \\cdot \\text{product}$ — when $a \\neq 1$, the constant term is a multiple of the product, not equal to it.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vieta-sum-product-of-roots",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-am-194",
    domain: "advanced-math",
    skills: ["quadratic-factoring"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The solutions of $x^2 - 10x + 18 = 0$ are $p$ and $q$. What is the value of $\\dfrac{1}{p} + \\dfrac{1}{q}$?",
    choices: [
      // distractor: uses $-10$ as the sum of the solutions
      { id: "A", text: "$-\\dfrac{5}{9}$" },
      // distractor: computes $\frac{1}{p+q}$ instead of $\frac{1}{p} + \frac{1}{q}$
      { id: "B", text: "$\\dfrac{1}{10}$" },
      { id: "C", text: "$\\dfrac{5}{9}$" },
      // distractor: inverts the ratio, dividing the product by the sum
      { id: "D", text: "$\\dfrac{9}{5}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Sum/Product of Roots — Vieta's**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** $\\dfrac{1}{p} + \\dfrac{1}{q} = \\dfrac{p + q}{pq} = \\dfrac{10}{18} = \\dfrac{5}{9}$.\n\n**The Full Solution:**\nStep 1: Combine over a common denominator: $\\dfrac{1}{p} + \\dfrac{1}{q} = \\dfrac{q + p}{pq}$.\nStep 2: By Vieta's formulas, $p + q = -\\dfrac{-10}{1} = 10$ and $pq = \\dfrac{18}{1} = 18$.\nStep 3: $\\dfrac{10}{18} = \\dfrac{5}{9}$. Check: the discriminant is $100 - 72 = 28$, so the roots are the irrational numbers $5 \\pm \\sqrt{7}$ — and $\\frac{1}{5+\\sqrt7} + \\frac{1}{5-\\sqrt7} = \\frac{10}{25 - 7} = \\frac{10}{18}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{5}{9}$): uses $p + q = -10$; the sum is $-\\frac{b}{a}$, and $b$ is already negative.\n* Choice B ($\\frac{1}{10}$): adds the reciprocals as if $\\frac{1}{p} + \\frac{1}{q} = \\frac{1}{p+q}$, which is never true for nonzero $p$ and $q$.\n* Choice D ($\\frac{9}{5}$): computes $\\frac{pq}{p+q} = \\frac{18}{10}$, the reciprocal of the correct value.\n\n**Test Day Takeaway:** Rewrite any symmetric expression in the roots ($\\frac{1}{p}+\\frac{1}{q}$, $p^2+q^2$, $\\frac{p}{q}+\\frac{q}{p}$) in terms of $p+q$ and $pq$ — then Vieta's formulas finish it without solving.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vieta-sum-product-of-roots",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-am-195",
    domain: "advanced-math",
    skills: ["quadratic-factoring"],
    difficulty: "hard",
    type: "fill-in",
    question: "In the equation $x^2 - 24x + k = 0$, where $k$ is a constant, one of the two solutions is $3$ times the other solution. What is the value of $k$?",
    correctAnswer: "108",
    explanation: "**SAT Pattern: Sum/Product of Roots — Vieta's**\n\n**The correct answer is $108$.**\n\n**The Fast Way (~35s):** If the roots are $r$ and $3r$, then $4r = 24$, so $r = 6$ and $k = (6)(18) = 108$.\n\n**The Full Solution:**\nStep 1: Let the solutions be $r$ and $3r$. Their sum is $-\\dfrac{-24}{1} = 24$, so $r + 3r = 24$.\nStep 2: $4r = 24$ gives $r = 6$, so the solutions are $6$ and $18$.\nStep 3: The product of the solutions is $\\dfrac{k}{1} = k$, so $k = (6)(18) = 108$. Check: $x^2 - 24x + 108 = (x - 6)(x - 18)$. $\\checkmark$\n\n**Common Mistakes:** Answering $18$, the larger solution, instead of the constant $k$. Using $24$ as the PRODUCT instead of the sum: $3r^2 = 24$ gives $r^2 = 8$ and the incorrect $k = 24$.\n\n**Test Day Takeaway:** When a problem states a relationship between the roots, name them with one variable ($r$ and $3r$), then let the sum equation solve for it and the product equation deliver the constant.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vieta-sum-product-of-roots",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  // ─── INTERPRET EXPONENTIAL PARAMETERS (bank-am-196..203) ──────────────────
  // Granularity principle: interpreting a, b, exponent-denominator in
  // a·b^(t/k) is a DISTINCT method from building the model from words.
  {
    id: "bank-am-196",
    domain: "advanced-math",
    skills: ["exponential-growth-decay"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The function $c$ defined by $c(t) = 200(1.07)^t$ gives the number of members of a hiking club $t$ years after $2018$. Which of the following is the best interpretation of $1.07$ in this context?",
    choices: [
      // distractor: reads the multiplier as a count of new members
      { id: "A", text: "The number of members increased by $107$ each year." },
      { id: "B", text: "The number of members increased by $7\\%$ each year." },
      // distractor: reads the multiplier as the amount added each year
      { id: "C", text: "The number of members increased by $1.07$ each year." },
      // distractor: converts the multiplier to a percent instead of the percent CHANGE
      { id: "D", text: "The number of members increased by $107\\%$ each year." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** In $a(b)^t$ the base is $1 + r$; here $1.07 = 1 + 0.07$, a $7\\%$ increase per year.\n\n**The Full Solution:**\nStep 1: The model has the form $c(t) = a(b)^t$, so each year the membership is multiplied by $b = 1.07$.\nStep 2: Multiplying by $1.07$ keeps the original $100\\%$ and adds $7\\%$ more, since $1.07 - 1 = 0.07$.\nStep 3: So the club's membership grew by $7\\%$ per year. Check: $c(0) = 200$ and $c(1) = 214$, and $\\dfrac{214 - 200}{200} = 0.07$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($107$ members per year): treats a multiplier as a count; the club would have to gain the same $107$ members every year, which is linear growth.\n* Choice C ($1.07$ members per year): also treats the multiplier as an amount added; the base multiplies the membership, it is never a number of members joining.\n* Choice D ($107\\%$): reports the whole base as the percent change; a $107\\%$ increase would multiply by $2.07$.\n\n**Test Day Takeaway:** Subtract $1$ from the base before converting to a percent: $1.07 \\to 7\\%$ growth, $0.93 \\to 7\\%$ decay.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "exponential-growth-interpretation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-am-197",
    domain: "advanced-math",
    skills: ["exponential-growth-decay"],
    difficulty: "easy",
    type: "fill-in",
    question: "The function $v$ defined by $v(t) = 18{,}000(0.86)^t$ gives the estimated value, in dollars, of a delivery van $t$ years after it was purchased. By what percent does the estimated value of the van decrease each year?",
    correctAnswer: "14",
    explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**The correct answer is $14$.**\n\n**The Fast Way (~15s):** The base $0.86$ keeps $86\\%$ of the value, so $100\\% - 86\\% = 14\\%$ is lost each year.\n\n**The Full Solution:**\nStep 1: Each year the value is multiplied by $b = 0.86$.\nStep 2: For decay, $b = 1 - r$, so $0.86 = 1 - r$ and $r = 0.14$.\nStep 3: As a percent, $r = 14\\%$. Check: $v(0) = 18{,}000$ and $v(1) = 15{,}480$, a drop of $2{,}520$, and $\\dfrac{2{,}520}{18{,}000} = 0.14$. $\\checkmark$\n\n**Common Mistakes:** Answering $86$, which is the percent of the value that REMAINS, not the percent lost. Answering $0.14$ — the question asks for a percent, so the decimal must be converted.\n\n**Test Day Takeaway:** With a base below $1$, the percent decrease is $1 - b$ written as a percent; the base itself always reports what is left over.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "exponential-growth-interpretation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-am-198",
    domain: "advanced-math",
    skills: ["exponential-growth-decay"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The function $N$ defined by $N(t) = 4{,}500(0.6)^{t/8}$ models the number of harbor seals counted at a monitoring site $t$ years after $2000$. Which statement best describes how the estimated number of seals changes over time?",
    choices: [
      // distractor: splits the 40% decrease evenly across the 8 years
      { id: "A", text: "It decreases by $5\\%$ each year." },
      // distractor: ignores the $8$ in the exponent
      { id: "B", text: "It decreases by $40\\%$ each year." },
      { id: "C", text: "It decreases by $40\\%$ every $8$ years." },
      // distractor: reads the base $0.6$ as the percent decrease
      { id: "D", text: "It decreases by $60\\%$ every $8$ years." }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The exponent advances by $1$ when $t$ advances by $8$, so every $8$ years the count is multiplied by $0.6$ — a $40\\%$ decrease.\n\n**The Full Solution:**\nStep 1: In $N(t) = 4{,}500(0.6)^{t/8}$, replacing $t$ with $t + 8$ raises the exponent by exactly $1$.\nStep 2: So $N(t + 8) = 0.6 \\cdot N(t)$: each $8$-year span multiplies the count by $0.6$.\nStep 3: Multiplying by $0.6$ keeps $60\\%$ and loses $40\\%$. Check: $N(0) = 4{,}500$ and $N(8) = 2{,}700$, and $\\dfrac{4{,}500 - 2{,}700}{4{,}500} = 0.40$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5\\%$ per year): divides the $40\\%$ by $8$; percent decay does not split evenly across a period.\n* Choice B ($40\\%$ per year): correct percent, wrong time frame — it ignores the $8$ in the denominator of the exponent.\n* Choice D ($60\\%$ every $8$ years): reports the base as the loss; $0.6$ is the fraction that REMAINS.\n\n**Test Day Takeaway:** In $b^{t/k}$, the quantity is multiplied by $b$ once every $k$ units of $t$ — name the period before naming the percent.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "exponential-growth-interpretation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-am-199",
    domain: "advanced-math",
    skills: ["exponential-growth-decay"],
    difficulty: "medium",
    type: "fill-in",
    question: "The area covered by a patch of lichen, in square centimeters, is modeled by $A(t) = 60(2.25)^{t/2}$, where $t$ is the number of weeks since the patch was first measured. By what percent does the area increase each week?",
    correctAnswer: "50",
    explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**The correct answer is $50$.**\n\n**The Fast Way (~30s):** One week raises the exponent by $\\frac{1}{2}$, so the weekly factor is $\\sqrt{2.25} = 1.5$, a $50\\%$ increase.\n\n**The Full Solution:**\nStep 1: Replacing $t$ with $t + 1$ multiplies the area by $(2.25)^{1/2}$.\nStep 2: $(2.25)^{1/2} = 1.5$, because $1.5^2 = 2.25$.\nStep 3: A factor of $1.5$ means $1.5 - 1 = 0.5$, or a $50\\%$ increase each week. Check: $60 \\to 90 \\to 135$, and $135 = 60(2.25)$, the two-week factor. $\\checkmark$\n\n**Common Mistakes:** Answering $125$, the percent increase over $2$ weeks (the factor $2.25$), not over $1$ week. Answering $62.5$, which splits that $125\\%$ evenly between the two weeks; percent growth compounds, so the weekly factor is the SQUARE ROOT of the two-week factor, not half of it.\n\n**Test Day Takeaway:** To move from a period factor to a one-unit factor, take a root — never divide the percent.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "exponential-growth-interpretation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-am-200",
    domain: "advanced-math",
    skills: ["exponential-growth-decay"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The function $E$ defined by $E(t) = 12(1.5)^t$ models the number of electric buses in a city's fleet $t$ years after $2022$. Which statement is best supported by the model?",
    choices: [
      // distractor: reads the growth factor as buses added per year
      { id: "A", text: "The fleet had $12$ buses in $2022$ and gains $1.5$ buses each year." },
      // distractor: misreads the factor $1.5$ as $15\%$
      { id: "B", text: "The fleet had $12$ buses in $2022$ and grows by $15\\%$ each year." },
      // distractor: reports $E(1) = 18$ as the value in 2022
      { id: "C", text: "The fleet had $18$ buses in $2022$ and grows by $50\\%$ each year." },
      { id: "D", text: "The fleet had $12$ buses in $2022$ and grows by $50\\%$ each year." }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** $E(0) = 12$ gives the $2022$ fleet, and the base $1.5 = 1 + 0.5$ gives $50\\%$ growth per year.\n\n**The Full Solution:**\nStep 1: The year $2022$ corresponds to $t = 0$, and $E(0) = 12(1.5)^0 = 12$ buses.\nStep 2: Each year multiplies the fleet by $1.5$, and $1.5 - 1 = 0.5$, so the fleet grows by $50\\%$ per year.\nStep 3: Both parts of choice D match. Check: $E(1) = 18$, and $18$ is $50\\%$ more than $12$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($1.5$ buses per year): adds the base instead of multiplying by it; that would be the linear model $12 + 1.5t$.\n* Choice B ($15\\%$): slides the decimal point; $15\\%$ growth would give the base $1.15$.\n* Choice C ($18$ buses in $2022$): uses $E(1)$, the $2023$ value, as the starting fleet.\n\n**Test Day Takeaway:** Read the two constants separately — the coefficient is the value at $t = 0$, and the base minus $1$ is the percent change.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "exponential-growth-interpretation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-am-201",
    domain: "advanced-math",
    skills: ["exponential-growth-decay"],
    difficulty: "medium",
    type: "fill-in",
    question: "The function $B$ defined by $B(t) = a(1.04)^t$ models the balance, in dollars, of an account $t$ years after it was opened, where $a$ is a constant. The balance was $\\$1{,}352$ two years after the account was opened. What is the value of $a$?",
    correctAnswer: "1250",
    explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**The correct answer is $1250$.**\n\n**The Fast Way (~30s):** $a(1.04)^2 = 1{,}352$, so $a = \\dfrac{1{,}352}{1.0816} = 1{,}250$.\n\n**The Full Solution:**\nStep 1: The constant $a$ is $B(0)$, the balance when the account was opened.\nStep 2: Two years of growth give $B(2) = a(1.04)^2 = 1.0816a$, and the stem gives $B(2) = 1{,}352$.\nStep 3: $a = \\dfrac{1{,}352}{1.0816} = 1{,}250$. Check forward: $1{,}250 \\to 1{,}300 \\to 1{,}352$. $\\checkmark$\n\n**Common Mistakes:** Answering $1{,}352$, treating the balance after two years as the starting balance. Answering $1{,}300$, which undoes only one year of growth.\n\n**Test Day Takeaway:** The coefficient in $a(b)^t$ is the value at $t = 0$; when a later value is given, divide by the growth factor once for each elapsed unit.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "exponential-growth-interpretation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-am-202",
    domain: "advanced-math",
    skills: ["exponential-growth-decay"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The population of a town is modeled by $P(t) = a(1.02)^t$, where $a$ is a constant and $t$ is the number of years after $2010$. According to the model, the population in $2015$ was $k$. Which expression represents the population the model predicts for $2020$?",
    choices: [
      // distractor: moves 5 years backward instead of forward
      { id: "A", text: "$\\dfrac{k}{(1.02)^5}$" },
      { id: "B", text: "$k(1.02)^5$" },
      // distractor: counts the years from 2010 rather than from 2015
      { id: "C", text: "$k(1.02)^{10}$" },
      // distractor: adds the 2% rate five times into a single 10% increase
      { id: "D", text: "$k(1.10)$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** From $2015$ to $2020$ is $5$ years, and each year multiplies by $1.02$, so the population is $k(1.02)^5$.\n\n**The Full Solution:**\nStep 1: The year $2015$ is $t = 5$, so $P(5) = a(1.02)^5 = k$.\nStep 2: The year $2020$ is $t = 10$, so $P(10) = a(1.02)^{10} = a(1.02)^5 \\cdot (1.02)^5$.\nStep 3: Replacing $a(1.02)^5$ with $k$ gives $P(10) = k(1.02)^5$. Check with $a = 100$: $k = 100(1.02)^5 \\approx 110.41$, and $100(1.02)^{10} \\approx 121.90 = k(1.02)^5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{k}{(1.02)^5}$): this is the population in $2010$ — dividing runs the model backward.\n* Choice C ($k(1.02)^{10}$): applies ten years of growth to a population that is already five years in.\n* Choice D ($k(1.10)$): treats five years of $2\\%$ growth as a flat $10\\%$; compounding makes the true factor slightly larger.\n\n**Test Day Takeaway:** When a model's value at one time is named, measure the exponent from THAT time — the constant $a$ never has to be found.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "exponential-growth-interpretation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-am-203",
    domain: "advanced-math",
    skills: ["exponential-growth-decay"],
    difficulty: "hard",
    type: "fill-in",
    question: "The number of connected devices in a sensor network is modeled by $D(t) = 24 \\cdot 9^{t/6}$, where $t$ is the number of hours after the network is switched on. By what factor does the number of devices grow over a period of $15$ hours?",
    correctAnswer: "243",
    explanation: "**SAT Pattern: Exponential Growth Factor over a Period**\n\n**The correct answer is $243$.**\n\n**The Fast Way (~30s):** Over $15$ hours the exponent rises by $\\frac{15}{6} = \\frac{5}{2}$, so the factor is $9^{5/2} = 3^5 = 243$.\n\n**The Full Solution:**\nStep 1: The factor over any span of $15$ hours is $\\dfrac{D(t + 15)}{D(t)} = 9^{(t+15)/6 - t/6} = 9^{15/6}$.\nStep 2: $\\dfrac{15}{6} = \\dfrac{5}{2}$, so the factor is $9^{5/2} = \\left(9^{1/2}\\right)^5 = 3^5$.\nStep 3: $3^5 = 243$. Check from $t = 0$: $D(0) = 24$ and $D(15) = 24 \\cdot 243 = 5{,}832$. $\\checkmark$\n\n**Common Mistakes:** Answering $81$, which rounds the exponent $\\frac{5}{2}$ down to $2$. Answering $22.5$, which multiplies $9$ by $\\frac{15}{6}$ instead of raising $9$ to that power.\n\n**Test Day Takeaway:** The growth factor over a span depends only on how much the exponent changes — subtract exponents, and rewrite a half-power as a square root to keep the arithmetic exact.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "exponential-growth-interpretation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  // ── classify-physical-motion-model (5 questions, batch 2026-05-13) ────────
  // Pattern: given a verbal description of how something changes over time,
  // identify whether the relationship is linear, exponential, or quadratic.
  // Aligns to Bluebook M2-Hard Q1 (airplane descending at constant rate).
  {
    id: "bank-am-204",
    domain: "advanced-math",
    skills: ["function-interpretation", "linear-functions"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A copy center charges a flat fee of $\\$12$ for each order plus $\\$0.06$ for each page printed. Which type of function best models the total charge for an order as a function of the number of pages printed?",
    choices: [
      // distractor: the charge rises with each page, and the change is not a constant percent
      { id: "A", text: "Decreasing exponential" },
      // distractor: the charge rises rather than falls
      { id: "B", text: "Decreasing linear" },
      // distractor: treats a fixed charge per page as a constant percent increase
      { id: "C", text: "Increasing exponential" },
      { id: "D", text: "Increasing linear" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Classify Physical Motion Model**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Each page adds the same $\\$0.06$, so the total rises by a constant amount per page — increasing linear.\n\n**The Full Solution:**\nStep 1: Let $p$ be the number of pages. The total charge is $12 + 0.06p$ dollars.\nStep 2: A function of the form $mx + b$ is linear, and here $m = 0.06 > 0$, so the total charge increases.\nStep 3: The charge is therefore modeled by an increasing linear function. Check: $100$ pages cost $\\$18$ and $200$ pages cost $\\$24$ — each extra $100$ pages adds the same $\\$6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (decreasing exponential): would require the total to fall toward a floor as pages are added.\n* Choice B (decreasing linear): the constant $\\$0.06$ per page is added, not subtracted.\n* Choice C (increasing exponential): would require each page to multiply the total by a fixed factor, so page $200$ would cost far more than page $2$.\n\n**Test Day Takeaway:** Constant amount per unit means linear; constant PERCENT per unit means exponential.",
    calculatorAllowed: true,
    tags: ["model-classification"],
    sourceStyleRef: "model-classification",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-13"
  },

  {
    id: "bank-am-205",
    domain: "advanced-math",
    skills: ["function-interpretation", "exponential-growth-decay"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The area of a pond's surface covered by duckweed doubles every $4$ days. Which type of function best models the covered area as a function of the number of days since the duckweed was first observed?",
    choices: [
      // distractor: the right family, but a decreasing model needs a factor below 1
      { id: "A", text: "Decreasing exponential" },
      // distractor: the covered area is growing, not shrinking
      { id: "B", text: "Decreasing linear" },
      { id: "C", text: "Increasing exponential" },
      // distractor: treats doubling as adding the same area every 4 days
      { id: "D", text: "Increasing linear" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Classify Physical Motion Model**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Doubling is multiplication by a constant factor over equal time spans — the signature of exponential growth.\n\n**The Full Solution:**\nStep 1: Let $a$ be the area first observed. After $4$ days the area is $2a$, after $8$ days $4a$, after $12$ days $8a$.\nStep 2: Equal time steps multiply the area by $2$ rather than adding a fixed area, so the model is exponential, not linear.\nStep 3: Because the factor $2$ is greater than $1$, the function increases. Check the differences: $a$, then $2a$, then $4a$ — the increases ($a$, $2a$) are not constant, so no line fits. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (decreasing exponential): the correct family, but the area grows; a decreasing model needs a factor between $0$ and $1$.\n* Choice B (decreasing linear): the area is increasing.\n* Choice D (increasing linear): a line would add the same area every $4$ days; doubling adds more and more each period.\n\n**Test Day Takeaway:** \"Doubles / halves / triples every $k$ units\" always signals an exponential model — the direction comes from whether the factor exceeds $1$.",
    calculatorAllowed: true,
    tags: ["model-classification"],
    sourceStyleRef: "model-classification",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-13"
  },

  {
    id: "bank-am-206",
    domain: "advanced-math",
    skills: ["function-interpretation", "exponential-growth-decay"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A worker unloads boxes from a pallet at a steady rate. The table gives the number of boxes remaining on the pallet after $0$, $2$, and $4$ hours of work. Which type of function best models the number of boxes remaining as a function of the number of hours worked?",
    diagram: { type: "dataTable", params: { headers: ["Hours worked", "Boxes remaining"], rows: [["0", "480"], ["2", "432"], ["4", "384"]] } },
    choices: [
      // distractor: the successive DIFFERENCES are constant, not the ratios
      { id: "A", text: "Decreasing exponential" },
      { id: "B", text: "Decreasing linear" },
      // distractor: the count is falling, and the ratios are not constant
      { id: "C", text: "Increasing exponential" },
      // distractor: the count is falling
      { id: "D", text: "Increasing linear" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Classify Physical Motion Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The count drops by the same $48$ boxes every $2$ hours, a constant rate — decreasing linear.\n\n**The Full Solution:**\nStep 1: From the table, $480 \\to 432 \\to 384$: each $2$-hour step subtracts $48$ boxes.\nStep 2: Constant differences over equal steps define a linear function, with slope $\\dfrac{-48}{2} = -24$ boxes per hour.\nStep 3: The slope is negative, so the model is decreasing linear: $b(h) = 480 - 24h$. Check: $b(4) = 480 - 96 = 384$, matching the table. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (decreasing exponential): the ratios $\\frac{432}{480} = 0.9$ and $\\frac{384}{432} \\approx 0.889$ are NOT equal, so no constant factor exists.\n* Choice C (increasing exponential): the number of boxes is falling.\n* Choice D (increasing linear): the slope is negative, since boxes are being removed.\n\n**Test Day Takeaway:** Test a table both ways — equal differences mean linear, equal ratios mean exponential.",
    calculatorAllowed: true,
    tags: ["model-classification"],
    sourceStyleRef: "model-classification",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-13"
  },

  {
    id: "bank-am-207",
    domain: "advanced-math",
    skills: ["function-interpretation", "identify-quadratic"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A rectangular pen will be enclosed with $120$ meters of fencing, so the width $w$ and the length of the pen add to $60$ meters. The table gives the area of the pen, in square meters, for three values of $w$. Which type of function best models the area of the pen as a function of $w$?",
    diagram: { type: "dataTable", params: { headers: ["w (meters)", "Area (square meters)"], rows: [["10", "500"], ["30", "900"], ["50", "500"]] } },
    choices: [
      // distractor: the area rises before it falls
      { id: "A", text: "Decreasing linear" },
      // distractor: the area falls after $w = 30$
      { id: "B", text: "Increasing linear" },
      // distractor: an exponential function never turns around
      { id: "C", text: "Increasing exponential" },
      { id: "D", text: "Quadratic" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Classify Physical Motion Model**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** The length is $60 - w$, so the area is $w(60 - w) = 60w - w^2$ — a squared term, so the model is quadratic.\n\n**The Full Solution:**\nStep 1: Since $w + \\text{length} = 60$, the length is $60 - w$ and the area is $A(w) = w(60 - w)$.\nStep 2: Expanding gives $A(w) = 60w - w^2$, a degree-$2$ polynomial, so $A$ is quadratic.\nStep 3: The table confirms the shape: the area rises from $500$ to $900$, then falls back to $500$. Check: $A(10) = 10(50) = 500$, $A(30) = 30(30) = 900$, $A(50) = 50(10) = 500$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (decreasing linear): matches only the second half of the table; the area increases from $w = 10$ to $w = 30$.\n* Choice B (increasing linear): matches only the first half; the area decreases after $w = 30$.\n* Choice C (increasing exponential): an exponential model rises without ever turning around, and equal steps in $w$ here do not give equal ratios.\n\n**Test Day Takeaway:** A quantity that rises to a maximum and then falls symmetrically is quadratic — a product of two expressions that move in opposite directions is the usual source.",
    calculatorAllowed: true,
    tags: ["model-classification"],
    sourceStyleRef: "model-classification",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-13"
  },

  {
    id: "bank-am-208",
    domain: "advanced-math",
    skills: ["function-interpretation", "exponential-growth-decay"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The concentration of chlorine in a sample of cooling water falls by half every $3$ days. Which type of function best models the chlorine concentration as a function of the number of days since the sample was collected?",
    choices: [
      { id: "A", text: "Decreasing exponential" },
      // distractor: halving removes a smaller amount each period, so the rate is not constant
      { id: "B", text: "Decreasing linear" },
      // distractor: the concentration falls, so the factor is less than 1
      { id: "C", text: "Increasing exponential" },
      // distractor: the concentration falls
      { id: "D", text: "Increasing linear" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Classify Physical Motion Model**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Halving over equal time spans multiplies by the constant factor $\\frac{1}{2}$, which is exponential decay.\n\n**The Full Solution:**\nStep 1: Let $c$ be the concentration when the sample was collected. After $3$ days it is $\\frac{1}{2}c$, after $6$ days $\\frac{1}{4}c$, after $9$ days $\\frac{1}{8}c$.\nStep 2: Equal time steps multiply by $\\frac{1}{2}$, so the model is exponential with base $\\frac{1}{2}$.\nStep 3: A base between $0$ and $1$ makes the function decreasing. Check the drops: $\\frac{1}{2}c$, then $\\frac{1}{4}c$, then $\\frac{1}{8}c$ — the amount lost shrinks each period, so no line fits. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B (decreasing linear): a line would remove the SAME amount every $3$ days; halving removes less and less.\n* Choice C (increasing exponential): the right family, but a factor of $\\frac{1}{2}$ makes it decrease.\n* Choice D (increasing linear): the concentration is falling.\n\n**Test Day Takeaway:** Half-life language always means exponential decay; the tell for linear decay is a constant amount removed per unit of time.",
    calculatorAllowed: true,
    tags: ["model-classification"],
    sourceStyleRef: "model-classification",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-13"
  },

  // ── interpret-initial-value-in-context (5 questions, batch 2026-05-13) ────
  // Pattern: given f(x) modeling a real scenario, interpret the y-intercept
  // (or initial value) in plain language. Aligns to Bluebook M2-Hard Q3
  // (popsicles, juice remaining y-intercept).
  {
    id: "bank-am-209",
    domain: "advanced-math",
    skills: ["function-interpretation", "linear-functions"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A plant nursery gave away seedling flats at a steady rate during a spring event. The function $s$ defined by $s(w) = -6w + 48$ gives the number of flats remaining $w$ weeks into the event, and the graph of $y = s(w)$ is shown. Which statement is the best interpretation of the $y$-intercept of the graph in this context?",
    diagram: { type: "linearGraph", params: { slope: -6, yIntercept: 48, xRange: [0, 10], yRange: [0, 50], xTickInterval: 5, yTickInterval: 10, gridInterval: 5, showPoints: [[0, 48], [8, 0]] } },
    choices: [
      // distractor: interprets the slope instead of the $y$-intercept
      { id: "A", text: "The nursery gave away $6$ flats each week." },
      { id: "B", text: "The nursery had $48$ flats when the event began." },
      // distractor: reads the intercept as a total given away rather than a starting stock
      { id: "C", text: "The nursery had given away $48$ flats when the event ended." },
      // distractor: reads the intercept as a number of weeks
      { id: "D", text: "The event lasted $48$ weeks." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Interpret Initial Value in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The $y$-intercept is $s(0) = 48$, the number of flats remaining after $0$ weeks — the stock the nursery started with.\n\n**The Full Solution:**\nStep 1: The $y$-intercept of the graph is the point where $w = 0$.\nStep 2: $s(0) = -6(0) + 48 = 48$, so the graph passes through $(0, 48)$.\nStep 3: Since $s(w)$ counts flats remaining, $48$ flats remained at the moment the event began. Check the other constant: $-6$ is the weekly change, and the graph reaches $s(8) = 0$, so the flats ran out after $8$ weeks. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$ flats per week): interprets $-6$, the slope, not the intercept.\n* Choice C ($48$ given away by the end): $48$ is the count at the START; by the end the count is $0$.\n* Choice D ($48$ weeks): $48$ is measured on the vertical axis, in flats; the graph reaches zero at $w = 8$ weeks.\n\n**Test Day Takeaway:** The $y$-intercept always answers \"what was the output when the input was $0$?\" — state it in the units of the output.",
    calculatorAllowed: true,
    tags: ["interpret-parameter"],
    sourceStyleRef: "interpret-y-intercept",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-13"
  },

  {
    id: "bank-am-210",
    domain: "advanced-math",
    skills: ["function-interpretation", "linear-functions"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A charity's campaign opened with money already pledged and then raised money at a steady rate. The function $F$ defined by $F(d) = 250d + 3{,}000$ gives the total amount raised, in dollars, $d$ days after the campaign opened. Which statement is the best interpretation of the $y$-intercept of the graph of $y = F(d)$ in the $xy$-plane?",
    choices: [
      // distractor: reports the slope as the starting amount
      { id: "A", text: "The campaign had raised $\\$250$ when it opened." },
      // distractor: reads the intercept as a daily rate
      { id: "B", text: "The campaign raised $\\$3{,}000$ on each day it was open." },
      { id: "C", text: "The campaign had raised $\\$3{,}000$ when it opened." },
      // distractor: reads the intercept as a number of days
      { id: "D", text: "The campaign raised money for $3{,}000$ days." }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Interpret Initial Value in Context**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The $y$-intercept is $F(0) = 3{,}000$, the amount already raised on day $0$.\n\n**The Full Solution:**\nStep 1: The $y$-intercept of $y = F(d)$ occurs at $d = 0$, the day the campaign opened.\nStep 2: $F(0) = 250(0) + 3{,}000 = 3{,}000$, so the graph passes through $(0, 3{,}000)$.\nStep 3: In context, $\\$3{,}000$ had already been raised when the campaign opened. Check the slope: $F(1) - F(0) = 250$, the amount raised per day. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$250$ at opening): swaps the two constants; $250$ is the daily rate.\n* Choice B ($\\$3{,}000$ per day): assigns the intercept the slope's job; the campaign raised $\\$250$ per day.\n* Choice D ($3{,}000$ days): $3{,}000$ is measured in dollars on the vertical axis, not in days.\n\n**Test Day Takeaway:** Attach units before choosing: the intercept carries the OUTPUT units (dollars), and the slope carries output-per-input units (dollars per day).",
    calculatorAllowed: true,
    tags: ["interpret-parameter"],
    sourceStyleRef: "interpret-y-intercept",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-13"
  },

  {
    id: "bank-am-211",
    domain: "advanced-math",
    skills: ["function-interpretation", "exponential-growth-decay"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The function $M$ defined by $M(t) = 640(0.94)^t$ models the number of members of a vinyl record club $t$ years after $2019$. Which statement is the best interpretation of $640$ in this context?",
    choices: [
      // distractor: reads the coefficient as a loss rather than a count
      { id: "A", text: "The club lost $640$ members between $2019$ and $2020$." },
      { id: "B", text: "The club had $640$ members in $2019$." },
      // distractor: assigns the coefficient the role of a constant yearly decrease
      { id: "C", text: "The club's membership decreased by $640$ members each year." },
      // distractor: shifts the starting year by one
      { id: "D", text: "The club had $640$ members in $2020$." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Interpret Initial Value in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $M(0) = 640(0.94)^0 = 640$, and $t = 0$ is $2019$.\n\n**The Full Solution:**\nStep 1: In $a(b)^t$, the coefficient $a$ is the value at $t = 0$.\nStep 2: Here $t$ counts years after $2019$, so $t = 0$ corresponds to $2019$ and $M(0) = 640$ members.\nStep 3: The base $0.94$ handles the change: membership falls by $6\\%$ per year. Check: $M(1) = 601.6 \\approx 602$ members in $2020$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (lost $640$ members): the club had only $640$ members to begin with; the actual one-year loss is about $38$.\n* Choice C (down $640$ each year): describes linear decay; this model loses a constant PERCENT, not a constant number.\n* Choice D ($640$ in $2020$): $2020$ is $t = 1$, where the model gives about $602$.\n\n**Test Day Takeaway:** In an exponential model, the coefficient is the output at $t = 0$ — check what real-world moment $t = 0$ names before writing the interpretation.",
    calculatorAllowed: true,
    tags: ["interpret-parameter"],
    sourceStyleRef: "interpret-y-intercept",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-13"
  },

  {
    id: "bank-am-212",
    domain: "advanced-math",
    skills: ["function-interpretation", "linear-functions"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A wildlife refuge began the year with nesting boxes already installed, and crews added more boxes at a steady rate. The function $b$ defined by $b(w) = 6w + 84$ gives the number of nesting boxes at the refuge after $w$ weeks of the year. Which statement is the best interpretation of $84$ in this context?",
    choices: [
      { id: "A", text: "The refuge had $84$ nesting boxes at the start of the year." },
      // distractor: reads the constant term as the weekly rate
      { id: "B", text: "The crews installed $84$ nesting boxes each week." },
      // distractor: reads the starting count as an ending count
      { id: "C", text: "The refuge had $84$ nesting boxes at the end of the year." },
      // distractor: reads a count of boxes as a number of weeks
      { id: "D", text: "The crews installed nesting boxes for $84$ weeks." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Interpret Initial Value in Context**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $b(0) = 6(0) + 84 = 84$, the count at week $0$ — the start of the year.\n\n**The Full Solution:**\nStep 1: The constant term of a linear function is its value when the input is $0$.\nStep 2: $w = 0$ means no weeks of the year have passed, so $b(0) = 84$ is the starting number of boxes.\nStep 3: The coefficient $6$ then adds $6$ boxes per week. Check: after $10$ weeks, $b(10) = 60 + 84 = 144$ boxes. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($84$ per week): that is the slope's job, and the slope here is $6$.\n* Choice C ($84$ at the end): the count grows, so the year ends with far more than $84$ boxes.\n* Choice D ($84$ weeks): $84$ counts boxes, and a year has about $52$ weeks.\n\n**Test Day Takeaway:** For $mx + b$ in context, $b$ is \"the amount already there\" and $m$ is \"the amount added per unit\" — name both before answering.",
    calculatorAllowed: true,
    tags: ["interpret-parameter"],
    sourceStyleRef: "interpret-y-intercept",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-13"
  },

  {
    id: "bank-am-213",
    domain: "advanced-math",
    skills: ["function-interpretation", "exponential-growth-decay"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A greenhouse heater is switched off. The temperature inside the greenhouse, in degrees Fahrenheit, $t$ hours after the heater is switched off is modeled by $H(t) = 46 + 32(0.7)^t$. Which statement is the best interpretation of $46$ in this context?",
    choices: [
      // distractor: reads the constant as the value at $t = 0$, which is $78^\circ$F
      { id: "A", text: "The temperature inside the greenhouse was $46^\\circ$F when the heater was switched off." },
      // distractor: reads the constant as an hourly rate of cooling
      { id: "B", text: "The temperature inside the greenhouse falls by $46^\\circ$F each hour." },
      { id: "C", text: "The temperature inside the greenhouse approaches $46^\\circ$F as $t$ increases." },
      // distractor: invents a finishing time from the other constant
      { id: "D", text: "The temperature inside the greenhouse reaches $46^\\circ$F after $32$ hours." }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Interpret Initial Value in Context**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** As $t$ grows, $32(0.7)^t$ shrinks toward $0$, so $H(t)$ settles toward the constant $46^\\circ$F.\n\n**The Full Solution:**\nStep 1: The model is a constant plus a decaying term: $H(t) = 46 + 32(0.7)^t$.\nStep 2: Because $0 < 0.7 < 1$, the term $32(0.7)^t$ decreases toward $0$ but never reaches it, so $H(t)$ decreases toward $46$.\nStep 3: In context, $46^\\circ$F is the temperature the greenhouse approaches — the surrounding temperature. Check values: $H(0) = 78$, $H(1) = 68.4$, $H(2) = 61.68$, $H(10) \\approx 46.9$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($46^\\circ$F at switch-off): the starting temperature is $H(0) = 46 + 32 = 78^\\circ$F; $46$ is the floor, not the start.\n* Choice B (falls $46^\\circ$F per hour): the first hour's drop is only $9.6^\\circ$F, and later drops are smaller still.\n* Choice D (reaches $46^\\circ$F after $32$ hours): $32$ is the size of the temperature gap at $t = 0$, not a number of hours, and the model never quite reaches $46$.\n\n**Test Day Takeaway:** When an exponential model has a constant ADDED to it, that constant is the level the output approaches, while the coefficient of the exponential is the initial gap.",
    calculatorAllowed: true,
    tags: ["interpret-parameter"],
    sourceStyleRef: "interpret-y-intercept",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-13"
  },

  // ── interpret-vertex-form (5 questions, batch 2026-05-13) ─────────────────
  // Pattern: given a quadratic in vertex form modeling a scenario, interpret
  // the vertex (h, k) as a real-world max/min and its time. Aligns to Bluebook
  // M2-Hard Q4 (toy rocket vertex interpretation).
  {
    id: "bank-am-214",
    domain: "advanced-math",
    skills: ["function-interpretation", "quadratic-equations"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A drone rises and then descends during a test flight. Its altitude above the ground, in meters, $t$ seconds after takeoff is modeled by $a(t) = -0.05(t - 30)^2 + 45$, and the graph of $y = a(t)$ is shown. Which of the following is the best interpretation of the vertex of the graph in this context?",
    diagram: { type: "parabola", params: { vertex: { h: 30, k: 45 }, a: -0.05, xRange: [0, 60], yRange: [0, 50], xTickInterval: 10, yTickInterval: 10, gridInterval: 10, showVertex: true } },
    choices: [
      { id: "A", text: "The drone reaches its greatest altitude, $45$ meters, $30$ seconds after takeoff." },
      // distractor: swaps the two coordinates of the vertex
      { id: "B", text: "The drone reaches its greatest altitude, $30$ meters, $45$ seconds after takeoff." },
      // distractor: reads the maximum as the starting altitude
      { id: "C", text: "The drone's altitude was $45$ meters at takeoff." },
      // distractor: reads the maximum altitude as a time
      { id: "D", text: "The drone lands $45$ seconds after takeoff." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Interpret Vertex Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** In $a(t - h)^2 + k$ the vertex is $(h, k) = (30, 45)$, and $a = -0.05 < 0$ makes it a maximum: $45$ meters at $t = 30$ seconds.\n\n**The Full Solution:**\nStep 1: The model is in vertex form, so the vertex of the graph is $(30, 45)$.\nStep 2: The leading coefficient $-0.05$ is negative, so the parabola opens downward and the vertex is the highest point.\nStep 3: The input $30$ is seconds after takeoff and the output $45$ is meters of altitude, so the drone peaks at $45$ meters, $30$ seconds after takeoff. Check: $a(0) = -0.05(900) + 45 = 0$, so the flight starts at ground level, and $a(60) = 0$ is the landing. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($30$ meters at $45$ seconds): reverses the vertex coordinates; $h$ is a time and $k$ is an altitude.\n* Choice C ($45$ meters at takeoff): takeoff is $t = 0$, where the altitude is $0$.\n* Choice D (lands after $45$ seconds): uses the altitude as a time; the model returns to $0$ at $t = 60$.\n\n**Test Day Takeaway:** Read the vertex as an ordered pair with units — \"$h$ input-units gives the extreme output $k$\" — and let the sign of the leading coefficient decide maximum versus minimum.",
    calculatorAllowed: true,
    tags: ["interpret-parameter"],
    sourceStyleRef: "interpret-vertex",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-13"
  },

  {
    id: "bank-am-215",
    domain: "advanced-math",
    skills: ["function-interpretation", "quadratic-equations"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A bike-share operator's daily revenue from one station, in dollars, is modeled by $R(p) = -8(p - 6)^2 + 1{,}152$, where $p$ is the price per ride in dollars. Which of the following is the best interpretation of the vertex of the graph of $y = R(p)$ in the $xy$-plane?",
    choices: [
      // distractor: reads the maximum revenue as the revenue at $p = 0$
      { id: "A", text: "The daily revenue is $\\$1{,}152$ when rides are free." },
      { id: "B", text: "The greatest daily revenue, $\\$1{,}152$, occurs at a price of $\\$6$ per ride." },
      // distractor: swaps the two coordinates of the vertex
      { id: "C", text: "The greatest daily revenue, $\\$6$, occurs at a price of $\\$1{,}152$ per ride." },
      // distractor: reads the leading coefficient as a constant rate of change
      { id: "D", text: "The daily revenue drops by $\\$8$ for each $\\$1$ increase in the price." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Interpret Vertex Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Vertex form gives the vertex $(6, 1{,}152)$, and the negative leading coefficient makes it the maximum: $\\$1{,}152$ at $\\$6$ per ride.\n\n**The Full Solution:**\nStep 1: $R(p) = -8(p - 6)^2 + 1{,}152$ is in vertex form, so the vertex is $(6, 1{,}152)$.\nStep 2: Since $-8 < 0$, the parabola opens downward and the vertex is the highest point of the graph.\nStep 3: The input is a price in dollars and the output is revenue in dollars, so revenue peaks at $\\$1{,}152$ when the price is $\\$6$ per ride. Check: $R(0) = -8(36) + 1{,}152 = 864$, less than $1{,}152$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (free rides): $R(0) = 864$, not $1{,}152$ — the squared term is zero only at $p = 6$.\n* Choice C ($\\$6$ of revenue at a $\\$1{,}152$ price): reverses the coordinates of the vertex.\n* Choice D (drops $\\$8$ per dollar): $-8$ is a stretch factor, not a slope; revenue RISES as the price moves from $\\$0$ toward $\\$6$.\n\n**Test Day Takeaway:** Vertex form hands you the optimum for free — the only work is deciding whether it is a maximum or a minimum and attaching the right units.",
    calculatorAllowed: true,
    tags: ["interpret-parameter"],
    sourceStyleRef: "interpret-vertex",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-13"
  },

  {
    id: "bank-am-216",
    domain: "advanced-math",
    skills: ["function-interpretation", "quadratic-equations"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The function $k$ defined by $k(u) = 0.04(u - 45)^2 + 7$ gives the handling cost, in dollars, per package when $u$ packages are loaded on a pallet, where $u > 0$. Which of the following statements is true?",
    choices: [
      { id: "A", text: "The handling cost per package is the same when $40$ packages are loaded as when $50$ packages are loaded." },
      // distractor: reads only the left branch of the parabola
      { id: "B", text: "The handling cost per package decreases as $u$ increases, for every $u > 0$." },
      // distractor: swaps the vertex coordinates, using $k$ as the input
      { id: "C", text: "The least handling cost per package occurs when $7$ packages are loaded." },
      // distractor: treats the constant $7$ as the value at the smallest input
      { id: "D", text: "The handling cost per package is $\\$7$ when $1$ package is loaded." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Interpret Vertex Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** $40$ and $50$ are each $5$ units from the vertex input $45$, and $(u - 45)^2$ depends only on that distance, so both give the same cost.\n\n**The Full Solution:**\nStep 1: The vertex of $k$ is $(45, 7)$, so the graph is symmetric about the vertical line $u = 45$.\nStep 2: $40$ and $50$ are the same distance from $45$: $(40 - 45)^2 = (50 - 45)^2 = 25$.\nStep 3: Therefore $k(40) = 0.04(25) + 7 = 8$ and $k(50) = 0.04(25) + 7 = 8$ — equal, as choice A states. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B (always decreasing): true only for $u < 45$; past the vertex the cost rises again, reaching $k(90) = 88$.\n* Choice C (least cost at $7$ packages): reverses the vertex; the least cost, $\\$7$, occurs at $u = 45$, and $k(7) \\approx 64.76$.\n* Choice D ($\\$7$ at one package): $k(1) = 0.04(1{,}936) + 7 \\approx 84.44$, nowhere near $\\$7$.\n\n**Test Day Takeaway:** Two inputs equidistant from $h$ always give the same output — symmetry answers \"which must be true\" questions without any computation.",
    calculatorAllowed: true,
    tags: ["interpret-parameter"],
    sourceStyleRef: "interpret-vertex",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-13"
  },

  {
    id: "bank-am-217",
    domain: "advanced-math",
    skills: ["function-interpretation", "quadratic-equations"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A cable is strung between two poles. The height of the cable above the ground, in feet, at a horizontal distance $x$ feet from the first pole is modeled by $y = 0.05(x - 30)^2 + 14$, and the graph of this model is shown. Which of the following is the best interpretation of the vertex of the graph in this context?",
    diagram: { type: "parabola", params: { vertex: { h: 30, k: 14 }, a: 0.05, xRange: [0, 60], yRange: [0, 60], xTickInterval: 10, yTickInterval: 10, gridInterval: 10, showVertex: true } },
    choices: [
      // distractor: reads the minimum height as the height at $x = 0$
      { id: "A", text: "The cable is attached to the first pole $14$ feet above the ground." },
      // distractor: swaps the two coordinates of the vertex
      { id: "B", text: "The cable's lowest point is $30$ feet above the ground, $14$ feet from the first pole." },
      { id: "C", text: "The cable's lowest point is $14$ feet above the ground, $30$ feet from the first pole." },
      // distractor: reads a height as a horizontal distance
      { id: "D", text: "The two poles stand $14$ feet apart." }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Interpret Vertex Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The vertex is $(30, 14)$ and $0.05 > 0$, so the cable dips to its lowest height, $14$ feet, at a horizontal distance of $30$ feet.\n\n**The Full Solution:**\nStep 1: The equation is in vertex form $a(x - h)^2 + k$ with $h = 30$ and $k = 14$, so the vertex is $(30, 14)$.\nStep 2: The leading coefficient $0.05$ is positive, so the parabola opens upward and the vertex is the lowest point.\nStep 3: The input is a horizontal distance in feet and the output is a height in feet: the cable's lowest point is $14$ feet up, $30$ feet from the first pole. Check the attachment height: at $x = 0$, $y = 0.05(900) + 14 = 59$ feet. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($14$ feet at the pole): at the pole $x = 0$, where the model gives $59$ feet.\n* Choice B ($30$ feet high, $14$ feet along): reverses the coordinates of the vertex.\n* Choice D (poles $14$ feet apart): $14$ is a height; the graph shows the second pole at $x = 60$ feet.\n\n**Test Day Takeaway:** With a positive leading coefficient the vertex is a MINIMUM — for hanging cables, costs, and fuel use, that lowest point is usually what the question is after.",
    calculatorAllowed: true,
    tags: ["interpret-parameter"],
    sourceStyleRef: "interpret-vertex",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-13"
  },

  {
    id: "bank-am-218",
    domain: "advanced-math",
    skills: ["function-interpretation", "quadratic-equations"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A bus route's average fuel use, in gallons per $100$ miles, at a steady speed of $v$ miles per hour is modeled by $F(v) = 0.006(v - 55)^2 + 9$, where $v > 0$. At which of the following speeds does the model predict the same average fuel use as at $40$ miles per hour?",
    choices: [
      // distractor: subtracts $40$ from the vertex speed $55$
      { id: "A", text: "$15$" },
      // distractor: names the vertex speed itself
      { id: "B", text: "$55$" },
      { id: "C", text: "$70$" },
      // distractor: adds $40$ to the vertex speed $55$
      { id: "D", text: "$95$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Interpret Vertex Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The graph is symmetric about $v = 55$, and $40$ is $15$ below it, so the matching speed is $55 + 15 = 70$.\n\n**The Full Solution:**\nStep 1: $F$ is in vertex form with vertex $(55, 9)$, so its graph is symmetric about the line $v = 55$.\nStep 2: Two speeds give the same fuel use exactly when they are equidistant from $55$: $55 - 40 = 15$, so the partner speed is $55 + 15 = 70$.\nStep 3: Check both: $F(40) = 0.006(225) + 9 = 10.35$ and $F(70) = 0.006(225) + 9 = 10.35$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($15$): that is the DISTANCE from $40$ to the vertex speed, not a speed. $F(15) = 0.006(1{,}600) + 9 = 18.6$.\n* Choice B ($55$): the vertex speed, where fuel use is least ($9$ gallons per $100$ miles), not equal to the value at $40$.\n* Choice D ($95$): adds $40$ to $55$ instead of adding the distance $15$; $F(95) = 0.006(1{,}600) + 9 = 18.6$.\n\n**Test Day Takeaway:** Equal outputs on a parabola sit at equal distances from $h$ — find that distance, then reflect it to the other side.",
    calculatorAllowed: true,
    tags: ["interpret-parameter"],
    sourceStyleRef: "interpret-vertex",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-13"
  },

  // ─── REVERSE EXPONENTIAL BACK IN TIME (bank-am-219..226) ──────────────────
  // Given current value + growth/decay rate, find a PAST value (divide by b^n,
  // not multiply). Distinct from forward `build-exponential-model`. See
  // audit §B4. CB precedent: PT11-M1-Q14, PT11-M2-Q11.
  {
    id: "bank-am-219",
    domain: "advanced-math",
    skills: ["exponential-functions", "exponential-growth-decay"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The number of ants in a colony triples every $2$ weeks. The colony contains $1{,}080$ ants today. How many ants did the colony contain $2$ weeks ago?",
    choices: [
      // distractor: divides by $9$, stepping back two periods instead of one
      { id: "A", text: "$120$" },
      { id: "B", text: "$360$" },
      // distractor: halves the count instead of dividing by the growth factor $3$
      { id: "C", text: "$540$" },
      // distractor: multiplies by $3$, moving forward in time
      { id: "D", text: "$3{,}240$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Reverse Exponential Back in Time**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Going back one $2$-week period undoes one tripling: $1{,}080 \\div 3 = 360$.\n\n**The Full Solution:**\nStep 1: Each $2$-week period multiplies the colony by $3$, so the count $2$ weeks ago, call it $c$, satisfies $3c = 1{,}080$.\nStep 2: Dividing both sides by $3$ gives $c = 360$.\nStep 3: Check forward: $360 \\cdot 3 = 1{,}080$ ants today. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($120$): divides by $3$ twice, which reaches $4$ weeks ago.\n* Choice C ($540$): halves the current count; the growth factor is $3$, not $2$.\n* Choice D ($3{,}240$): multiplies instead of divides, giving the count $2$ weeks from now.\n\n**Test Day Takeaway:** Going backward in time DIVIDES by the growth factor once per period — count the periods before touching the arithmetic.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "reverse-exponential-back-in-time",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-220",
    domain: "advanced-math",
    skills: ["exponential-functions", "exponential-growth-decay"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The amount of material collected each year by a town's recycling program increases by $25\\%$ each year. The program collected $900$ tons this year. How many tons did it collect last year?",
    choices: [
      // distractor: subtracts 25% of this year's total
      { id: "A", text: "$675$" },
      { id: "B", text: "$720$" },
      // distractor: increases this year's total by 25%
      { id: "C", text: "$1{,}125$" },
      // distractor: divides by the rate $0.25$ instead of by $1.25$
      { id: "D", text: "$3{,}600$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Reverse Exponential Back in Time**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Last year's total times $1.25$ is $900$, so last year's total is $900 \\div 1.25 = 720$ tons.\n\n**The Full Solution:**\nStep 1: A $25\\%$ increase multiplies by $1.25$, so if $L$ is last year's total, $1.25L = 900$.\nStep 2: Dividing both sides by $1.25$ gives $L = \\dfrac{900}{1.25} = 720$.\nStep 3: Check forward: $720 + 0.25(720) = 720 + 180 = 900$ tons. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($675$): computes $900 - 0.25(900)$; the $25\\%$ increase was applied to LAST year's total, not this year's.\n* Choice C ($1{,}125$): increases $900$ by $25\\%$, which projects forward to next year.\n* Choice D ($3{,}600$): divides by $0.25$; the multiplier for growth is $1 + 0.25$.\n\n**Test Day Takeaway:** Undo a percent increase by DIVIDING by $1 + r$ — subtracting the same percent from the new value always overshoots.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "reverse-exponential-back-in-time",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-221",
    domain: "advanced-math",
    skills: ["exponential-functions", "exponential-growth-decay"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The value of an investment fund has grown by $20\\%$ each year for the past two years, and the fund is now worth $\\$7{,}200$. What was the value of the fund, in dollars, two years ago?",
    choices: [
      // distractor: subtracts 40% from the current value
      { id: "A", text: "$4{,}320$" },
      { id: "B", text: "$5{,}000$" },
      // distractor: undoes only one year of growth
      { id: "C", text: "$6{,}000$" },
      // distractor: applies two more years of growth instead of undoing them
      { id: "D", text: "$10{,}368$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Reverse Exponential Back in Time**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Two years of $20\\%$ growth multiply by $1.2^2 = 1.44$, so the original value is $7{,}200 \\div 1.44 = 5{,}000$.\n\n**The Full Solution:**\nStep 1: If $V$ is the value two years ago, then $V(1.2)^2 = 7{,}200$.\nStep 2: $(1.2)^2 = 1.44$, so $1.44V = 7{,}200$ and $V = \\dfrac{7{,}200}{1.44}$.\nStep 3: $V = 5{,}000$ dollars. Check forward: $5{,}000 \\to 6{,}000 \\to 7{,}200$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4{,}320$): computes $7{,}200(0.6)$, subtracting two $20\\%$ shares of the CURRENT value.\n* Choice C ($6{,}000$): divides by $1.2$ only once, landing one year ago.\n* Choice D ($10{,}368$): multiplies by $1.44$, projecting two years into the future.\n\n**Test Day Takeaway:** Each year backward divides by $1 + r$ once; raise the multiplier to the number of years and divide a single time.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "reverse-exponential-back-in-time",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-222",
    domain: "advanced-math",
    skills: ["exponential-functions", "exponential-growth-decay"],
    difficulty: "medium",
    type: "fill-in",
    question: "The mass of a mineral sample decays so that it is cut in half every $15$ days. The sample now has a mass of $7$ grams. What was the mass, in grams, of the sample $45$ days ago?",
    correctAnswer: "56",
    explanation: "**SAT Pattern: Reverse Exponential Back in Time**\n\n**The correct answer is $56$.**\n\n**The Fast Way (~20s):** $45$ days is three half-lives, so the mass then was $7 \\cdot 2^3 = 56$ grams.\n\n**The Full Solution:**\nStep 1: The mass halves every $15$ days, and $45 \\div 15 = 3$, so three halvings have occurred.\nStep 2: Going backward undoes each halving by doubling: $7 \\to 14 \\to 28 \\to 56$.\nStep 3: The mass $45$ days ago was $56$ grams. Check forward: $56 \\to 28 \\to 14 \\to 7$. $\\checkmark$\n\n**Common Mistakes:** Doubling only once and answering $14$, which is the mass $15$ days ago. Halving instead of doubling gives $0.875$ grams, which runs the decay the wrong way. Multiplying $7$ by $3$ gives $21$, treating three half-lives as a factor of $3$ rather than $2^3$.\n\n**Test Day Takeaway:** Count half-lives first ($45 \\div 15 = 3$), then double once per half-life to move backward — the factor is $2^3$, never $3$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "reverse-exponential-back-in-time",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-223",
    domain: "advanced-math",
    skills: ["exponential-functions", "exponential-growth-decay"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A tractor loses $20\\%$ of its value each year. The tractor is now worth $\\$25{,}600$. What was the tractor worth, in dollars, one year ago?",
    choices: [
      // distractor: applies the 20% loss again instead of undoing it
      { id: "A", text: "$20{,}480$" },
      // distractor: adds 20% of the current value
      { id: "B", text: "$30{,}720$" },
      { id: "C", text: "$32{,}000$" },
      // distractor: divides by $0.5$, treating the loss as a halving
      { id: "D", text: "$51{,}200$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Reverse Exponential Back in Time**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Last year's value times $0.8$ is $25{,}600$, so it was $25{,}600 \\div 0.8 = 32{,}000$ dollars.\n\n**The Full Solution:**\nStep 1: Losing $20\\%$ multiplies the value by $1 - 0.20 = 0.8$, so if $V$ is last year's value, $0.8V = 25{,}600$.\nStep 2: Dividing both sides by $0.8$ gives $V = \\dfrac{25{,}600}{0.8} = 32{,}000$.\nStep 3: Check forward: $20\\%$ of $32{,}000$ is $6{,}400$, and $32{,}000 - 6{,}400 = 25{,}600$ dollars. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($20{,}480$): multiplies by $0.8$ again, giving next year's value.\n* Choice B ($30{,}720$): adds $20\\%$ of $25{,}600$; the $20\\%$ was taken from the LARGER earlier value, so adding it back is not enough.\n* Choice D ($51{,}200$): divides by $0.5$, as if the tractor had lost half its value.\n\n**Test Day Takeaway:** Reversing a percent decrease means dividing by $1 - r$ — and the answer must be bigger than the current value by MORE than the same percent.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "reverse-exponential-back-in-time",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-224",
    domain: "advanced-math",
    skills: ["exponential-functions", "exponential-growth-decay"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The number of registered users of a scheduling app is an exponential function of time. The table gives the number of registered users $t$ years from now for three values of $t$. How many registered users did the app have two years ago?",
    diagram: { type: "dataTable", params: { headers: ["t (years from now)", "Registered users"], rows: [["0", "200"], ["1", "400"], ["2", "800"]] } },
    choices: [
      // distractor: steps back three years instead of two
      { id: "A", text: "$25$" },
      { id: "B", text: "$50$" },
      // distractor: steps back only one year
      { id: "C", text: "$100$" },
      // distractor: moves one year forward instead of two years back
      { id: "D", text: "$400$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Reverse Exponential Back in Time**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The table doubles each year, so two years back halves twice: $200 \\to 100 \\to 50$.\n\n**The Full Solution:**\nStep 1: From the table, $\\dfrac{400}{200} = 2$ and $\\dfrac{800}{400} = 2$, so the number of users doubles each year and the model is $U(t) = 200(2)^t$.\nStep 2: Two years ago is $t = -2$, so $U(-2) = 200(2)^{-2} = \\dfrac{200}{4}$.\nStep 3: $U(-2) = 50$ users. Check forward: $50 \\to 100 \\to 200$, matching the $t = 0$ row. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($25$): divides by $2$ three times, reaching three years ago.\n* Choice C ($100$): divides by $2$ once, reaching one year ago.\n* Choice D ($400$): reads the $t = 1$ row, moving forward in time.\n\n**Test Day Takeaway:** A negative input is just the model run backward — divide by the growth factor once for each unit before $t = 0$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "reverse-exponential-back-in-time",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-225",
    domain: "advanced-math",
    skills: ["exponential-functions", "exponential-growth-decay"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The number of active listings on an online marketplace has increased by $50\\%$ every $2$ years, and there are $6{,}750$ active listings today. How many active listings were there $6$ years ago?",
    choices: [
      { id: "A", text: "$2{,}000$" },
      // distractor: undoes only two of the three growth periods
      { id: "B", text: "$3{,}000$" },
      // distractor: subtracts 50% of today's count
      { id: "C", text: "$3{,}375$" },
      // distractor: undoes only one growth period
      { id: "D", text: "$4{,}500$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Reverse Exponential Back in Time**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Six years hold three $2$-year periods, so divide by $1.5$ three times: $6{,}750 \\div 3.375 = 2{,}000$.\n\n**The Full Solution:**\nStep 1: A $50\\%$ increase multiplies by $1.5$, and $6 \\div 2 = 3$ periods have passed.\nStep 2: If $L$ is the count $6$ years ago, then $L(1.5)^3 = 6{,}750$, and $(1.5)^3 = 3.375$.\nStep 3: $L = \\dfrac{6{,}750}{3.375} = 2{,}000$ listings. Check forward: $2{,}000 \\to 3{,}000 \\to 4{,}500 \\to 6{,}750$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($3{,}000$): divides by $1.5$ twice, reaching only $4$ years ago.\n* Choice C ($3{,}375$): halves today's count, treating \"increased by $50\\%$\" as \"doubled.\"\n* Choice D ($4{,}500$): divides by $1.5$ once, reaching $2$ years ago.\n\n**Test Day Takeaway:** When the growth period is not one year, convert the elapsed time into periods FIRST — here $6$ years is three periods, so the multiplier is $(1.5)^3$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "reverse-exponential-back-in-time",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-226",
    domain: "advanced-math",
    skills: ["exponential-functions", "exponential-growth-decay"],
    difficulty: "hard",
    type: "fill-in",
    question: "The activity of a radioactive tracer decays exponentially with a half-life of $12$ hours. The activity of the tracer is now $5$ units. How many hours ago was the activity of the tracer $320$ units?",
    correctAnswer: "72",
    explanation: "**SAT Pattern: Reverse Exponential Back in Time**\n\n**The correct answer is $72$.**\n\n**The Fast Way (~30s):** $320 \\div 5 = 64 = 2^6$, so six half-lives have passed: $6 \\cdot 12 = 72$ hours.\n\n**The Full Solution:**\nStep 1: Each half-life divides the activity by $2$, so the number of half-lives $n$ satisfies $320 \\cdot \\left(\\frac{1}{2}\\right)^n = 5$.\nStep 2: Rearranging gives $2^n = \\dfrac{320}{5} = 64$, so $n = 6$.\nStep 3: Six half-lives of $12$ hours each is $6 \\cdot 12 = 72$ hours. Check: $320 \\to 160 \\to 80 \\to 40 \\to 20 \\to 10 \\to 5$, six halvings. $\\checkmark$\n\n**Common Mistakes:** Answering $6$, the number of half-lives, without multiplying by the $12$-hour period. Answering $64$, the factor by which the activity fell, as if it were a time.\n\n**Test Day Takeaway:** Turn the ratio into a power of the decay factor, read the exponent as a COUNT of periods, then multiply by the length of one period.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "reverse-exponential-back-in-time",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  // ─── FUNCTION FROM SHIFTED GRAPH (bank-am-227..234) ───────────────────────
  // Reverse direction of `function-transformation`: given a description of
  // y = f(x + h) or y = f(x) + k, recover f. CB precedent: PT11-M1-Q23.
  // See audit §B5.
  {
    id: "bank-am-227",
    domain: "advanced-math",
    skills: ["function-transformations", "function-interpretation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In the $xy$-plane, the graph of $y = f(x - 3)$ passes through the point $(8, 20)$. Which of the following could define the function $f$?",
    choices: [
      // distractor: satisfies $f(8) = 20$, using the point's $x$-coordinate directly
      { id: "A", text: "$f(x) = x + 12$" },
      { id: "B", text: "$f(x) = 4x$" },
      // distractor: satisfies $f(11) = 20$, shifting in the wrong direction
      { id: "C", text: "$f(x) = 2x - 2$" },
      // distractor: satisfies $f(0) = 20$, ignoring the $x$-coordinate
      { id: "D", text: "$f(x) = x + 20$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Function from Shifted Graph**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The point $(8, 20)$ on $y = f(x - 3)$ means $f(8 - 3) = f(5) = 20$, and $4(5) = 20$.\n\n**The Full Solution:**\nStep 1: Substituting $x = 8$ and $y = 20$ into $y = f(x - 3)$ gives $20 = f(8 - 3)$.\nStep 2: So the function $f$ must satisfy $f(5) = 20$.\nStep 3: Test the choices at $x = 5$: choice B gives $4(5) = 20$. $\\checkmark$ (Choice A gives $17$, choice C gives $8$, choice D gives $25$.)\n\n**Why the wrong answers are tempting:**\n* Choice A ($x + 12$): satisfies $f(8) = 20$ — it plugs the point's $x$-coordinate into $f$ without undoing the shift.\n* Choice C ($2x - 2$): satisfies $f(11) = 20$ — it ADDS $3$ instead of subtracting it.\n* Choice D ($x + 20$): satisfies $f(0) = 20$ — it uses only the $y$-coordinate.\n\n**Test Day Takeaway:** The input to $f$ is the whole expression inside the parentheses: evaluate $x - 3$ at the given $x$ first, then test the choices at that number.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-from-shifted-graph",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-228",
    domain: "advanced-math",
    skills: ["function-transformations", "function-interpretation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The graph of $y = g(x) - 6$ in the $xy$-plane is shown, and its lowest point is $(0, -6)$. Which of the following could define the function $g$?",
    diagram: { type: "quadraticVertex", params: { vertex: [0, -6], a: 1, showVertex: true } },
    choices: [
      { id: "A", text: "$g(x) = x^2$" },
      // distractor: subtracts the $6$ a second time
      { id: "B", text: "$g(x) = x^2 - 6$" },
      // distractor: adds $6$ instead of undoing the subtraction of $6$
      { id: "C", text: "$g(x) = x^2 + 6$" },
      // distractor: shifts horizontally instead of vertically
      { id: "D", text: "$g(x) = (x - 6)^2$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Function from Shifted Graph**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Undo the \"$-6$\": the lowest point of $y = g(x)$ is $(0, -6 + 6) = (0, 0)$, and $g(x) = x^2$ has its lowest point at the origin.\n\n**The Full Solution:**\nStep 1: The graph of $y = g(x) - 6$ is the graph of $y = g(x)$ shifted DOWN $6$ units.\nStep 2: To recover $g$, shift the given lowest point back UP $6$ units: $(0, -6) \\to (0, 0)$.\nStep 3: So $g$ must have its lowest point at $(0, 0)$, which $g(x) = x^2$ does. Check: $x^2 - 6$ has its lowest point at $(0, -6)$, exactly as shown. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($x^2 - 6$): then $y = g(x) - 6 = x^2 - 12$, whose lowest point is $(0, -12)$.\n* Choice C ($x^2 + 6$): then $y = g(x) - 6 = x^2$, whose lowest point is $(0, 0)$, not $(0, -6)$.\n* Choice D ($(x - 6)^2$): moves the lowest point sideways to $(6, -6)$; the $-6$ outside the function shifts vertically only.\n\n**Test Day Takeaway:** A constant added OUTSIDE the function moves the graph vertically — to recover the original function, move the given point the opposite way.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-from-shifted-graph",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-229",
    domain: "advanced-math",
    skills: ["function-transformations", "function-interpretation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The function $h$ is defined for all real numbers. In the $xy$-plane, the graph of $y = h(x + 7)$ passes through the point $(2, 45)$. What is the value of $h(9)$?",
    choices: [
      // distractor: reports the $x$-coordinate of the given point
      { id: "A", text: "$2$" },
      // distractor: reports the size of the shift
      { id: "B", text: "$7$" },
      // distractor: reports the input to $h$ rather than the output
      { id: "C", text: "$9$" },
      { id: "D", text: "$45$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Function from Shifted Graph**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** At $x = 2$, the expression $x + 7$ equals $9$, so $h(9) = 45$.\n\n**The Full Solution:**\nStep 1: Substituting $x = 2$, $y = 45$ into $y = h(x + 7)$ gives $45 = h(2 + 7)$.\nStep 2: Simplifying the input gives $45 = h(9)$.\nStep 3: So $h(9) = 45$. Check: the graph of $y = h(x + 7)$ is the graph of $y = h(x)$ shifted LEFT $7$ units, which sends $(9, 45)$ on $h$ to $(2, 45)$ — the given point. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): the $x$-coordinate of the plotted point, not a value of $h$.\n* Choice B ($7$): the size of the shift.\n* Choice C ($9$): the input to $h$; the question asks for the output at that input.\n\n**Test Day Takeaway:** Evaluate the inside expression at the given $x$; whatever it equals is the input where $h$ takes the given $y$-value.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-from-shifted-graph",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-230",
    domain: "advanced-math",
    skills: ["function-transformations", "function-interpretation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The function $q$ is defined by $q(x) = f(x + 6) - 5$. In the $xy$-plane, the graph of $y = q(x)$ has its vertex at $(-2, 3)$. The graph of $y = f(x)$ has its vertex at which point?",
    choices: [
      // distractor: applies both shifts in the wrong direction
      { id: "A", text: "$(-8, -2)$" },
      // distractor: subtracts $6$ from the $x$-coordinate instead of adding it
      { id: "B", text: "$(-8, 8)$" },
      // distractor: subtracts $5$ from the $y$-coordinate instead of adding it
      { id: "C", text: "$(4, -2)$" },
      { id: "D", text: "$(4, 8)$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Function from Shifted Graph**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** At the vertex, $x + 6 = -2 + 6 = 4$ and $f(4) - 5 = 3$, so $f(4) = 8$: the vertex of $f$ is $(4, 8)$.\n\n**The Full Solution:**\nStep 1: The vertex of $q$ occurs at $x = -2$, where $q(-2) = 3$.\nStep 2: Substituting into $q(x) = f(x + 6) - 5$ gives $f(-2 + 6) - 5 = 3$, so $f(4) = 8$.\nStep 3: Because the transformation only slides the graph, that point is the vertex of $f$: $(4, 8)$. Check with $f(x) = (x - 4)^2 + 8$: then $q(x) = (x + 6 - 4)^2 + 8 - 5 = (x + 2)^2 + 3$, whose vertex is $(-2, 3)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-8, -2)$): moves both coordinates the wrong way, subtracting $6$ and subtracting $5$.\n* Choice B ($(-8, 8)$): handles the vertical shift correctly but subtracts the $6$; inside the parentheses, $x + 6$ means the graph moved LEFT, so $f$ sits to the right.\n* Choice C ($(4, -2)$): finds the input correctly but subtracts $5$ instead of adding it back.\n\n**Test Day Takeaway:** Substitute the vertex coordinates into the defining equation instead of memorizing shift directions — the algebra names the point for you.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-from-shifted-graph",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-231",
    domain: "advanced-math",
    skills: ["function-transformations", "function-interpretation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The V-shaped graph of $y = f(x)$ in the $xy$-plane is shown. The graph of $y = f(x - 5) + 2$ has its vertex at which point?",
    diagram: { type: "absoluteValue", params: { vertex: [-1, 4], slope: 1 } },
    choices: [
      // distractor: shifts left and replaces the $y$-coordinate with the shift
      { id: "A", text: "$(-6, 2)$" },
      // distractor: shifts left instead of right
      { id: "B", text: "$(-6, 6)$" },
      // distractor: replaces the $y$-coordinate with the shift instead of adding it
      { id: "C", text: "$(4, 2)$" },
      { id: "D", text: "$(4, 6)$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Function from Shifted Graph**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** The graph shows the vertex of $f$ at $(-1, 4)$; moving right $5$ and up $2$ gives $(4, 6)$.\n\n**The Full Solution:**\nStep 1: Read the vertex of $y = f(x)$ from the graph: $(-1, 4)$.\nStep 2: Replacing $x$ with $x - 5$ shifts the graph RIGHT $5$ units: $-1 + 5 = 4$.\nStep 3: Adding $2$ outside the function shifts it UP $2$ units: $4 + 2 = 6$. The new vertex is $(4, 6)$. Check: at $x = 4$, $f(4 - 5) + 2 = f(-1) + 2 = 4 + 2 = 6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-6, 2)$): moves left and uses $2$ itself as the new height.\n* Choice B ($(-6, 6)$): subtracts $5$ from the $x$-coordinate; $f(x - 5)$ moves the graph in the POSITIVE direction.\n* Choice C ($(4, 2)$): shifts horizontally correctly but reports the shift $2$ instead of $4 + 2$.\n\n**Test Day Takeaway:** Inside the parentheses, $x - c$ moves the graph $c$ units RIGHT; outside, $+d$ moves it $d$ units up — apply each to the matching coordinate of the vertex.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-from-shifted-graph",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-232",
    domain: "advanced-math",
    skills: ["function-transformations", "function-interpretation"],
    difficulty: "medium",
    type: "fill-in",
    question: "The function $g$ is defined by $g(x) = 2f(x) + 5$. If $g(4) = 41$, what is the value of $f(4)$?",
    correctAnswer: "18",
    explanation: "**SAT Pattern: Function from Shifted Graph**\n\n**The correct answer is $18$.**\n\n**The Fast Way (~20s):** $2f(4) + 5 = 41$ gives $2f(4) = 36$, so $f(4) = 18$.\n\n**The Full Solution:**\nStep 1: Substituting $x = 4$ into the definition gives $g(4) = 2f(4) + 5$, and $g(4) = 41$.\nStep 2: Subtracting $5$ from both sides gives $2f(4) = 36$.\nStep 3: Dividing by $2$ gives $f(4) = 18$. Check: $2(18) + 5 = 41$. $\\checkmark$\n\n**Common Mistakes:** Answering $36$, which subtracts the $5$ but forgets to undo the vertical stretch. Answering $15.5$, which divides by $2$ first and then subtracts $5$ — the operations must be undone in the reverse of the order they were applied.\n\n**Test Day Takeaway:** Treat $f(4)$ as a single unknown and solve the equation as usual: peel off the addition first, then the multiplication.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-from-shifted-graph",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-233",
    domain: "advanced-math",
    skills: ["function-transformations", "function-interpretation"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The V-shaped graph of $y = f(x)$ in the $xy$-plane is shown. The function $g$ is defined so that the graph of $y = g(x)$ is the graph of $y = f(x)$ shifted $4$ units left and $1$ unit up. Which of the following defines $g$?",
    diagram: { type: "absoluteValue", params: { vertex: [2, -3], slope: 1 } },
    choices: [
      // distractor: shifts $4$ units right instead of left
      { id: "A", text: "$g(x) = |x - 6| - 2$" },
      // distractor: shifts $1$ unit down instead of up
      { id: "B", text: "$g(x) = |x + 2| - 4$" },
      { id: "C", text: "$g(x) = |x + 2| - 2$" },
      // distractor: puts the shift $4$ inside the bars instead of combining it with the original $-2$
      { id: "D", text: "$g(x) = |x + 4| - 2$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Function from Shifted Graph**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** The graph gives $f(x) = |x - 2| - 3$; moving left $4$ and up $1$ sends the vertex $(2, -3)$ to $(-2, -2)$, so $g(x) = |x + 2| - 2$.\n\n**The Full Solution:**\nStep 1: The graph is a V with vertex $(2, -3)$ and sides of slope $1$ and $-1$, so $f(x) = |x - 2| - 3$.\nStep 2: Shifting left $4$ units replaces $x$ with $x + 4$: $f(x + 4) = |x + 4 - 2| - 3 = |x + 2| - 3$.\nStep 3: Shifting up $1$ unit adds $1$: $g(x) = |x + 2| - 3 + 1 = |x + 2| - 2$. Check the vertex: $g(-2) = 0 - 2 = -2$, and $(-2, -2)$ is $(2, -3)$ moved left $4$ and up $1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($|x - 6| - 2$): vertex $(6, -2)$ — the horizontal shift went right.\n* Choice B ($|x + 2| - 4$): vertex $(-2, -4)$ — the vertical shift went down.\n* Choice D ($|x + 4| - 2$): vertex $(-4, -2)$ — it writes the shift $4$ inside the bars instead of applying it to the vertex's $x$-coordinate of $2$.\n\n**Test Day Takeaway:** Write the parent equation from the vertex first, then substitute — combining $x + 4$ with the existing $-2$ is what turns $|x - 2|$ into $|x + 2|$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-from-shifted-graph",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-234",
    domain: "advanced-math",
    skills: ["function-transformations", "function-interpretation"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the $xy$-plane, the graph of $y = g(x)$ is the graph of $y = f(x)$ shifted $3$ units right and $6$ units up. The function $g$ is defined by $g(x) = (x - 1)^2 + 10$. Which of the following defines $f$?",
    choices: [
      // distractor: shifts right again instead of undoing the shift
      { id: "A", text: "$f(x) = (x - 4)^2 + 4$" },
      // distractor: applies both shifts forward instead of backward
      { id: "B", text: "$f(x) = (x - 4)^2 + 16$" },
      { id: "C", text: "$f(x) = (x + 2)^2 + 4$" },
      // distractor: adds $6$ instead of subtracting it
      { id: "D", text: "$f(x) = (x + 2)^2 + 16$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Function from Shifted Graph**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** The vertex of $g$ is $(1, 10)$; undoing \"right $3$, up $6$\" moves it to $(-2, 4)$, so $f(x) = (x + 2)^2 + 4$.\n\n**The Full Solution:**\nStep 1: The described transformation means $g(x) = f(x - 3) + 6$, so $f(x - 3) = g(x) - 6$.\nStep 2: Replacing $x$ with $x + 3$ gives $f(x) = g(x + 3) - 6 = \\left((x + 3) - 1\\right)^2 + 10 - 6$.\nStep 3: Simplifying, $f(x) = (x + 2)^2 + 4$. Check by shifting forward: $f(x - 3) + 6 = (x - 3 + 2)^2 + 4 + 6 = (x - 1)^2 + 10 = g(x)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(x - 4)^2 + 4$): vertex $(4, 4)$ — the vertical shift is undone but the horizontal shift is applied a second time.\n* Choice B ($(x - 4)^2 + 16$): vertex $(4, 16)$ — both shifts are applied forward instead of reversed.\n* Choice D ($(x + 2)^2 + 16$): vertex $(-2, 16)$ — the horizontal shift is undone but $6$ is added instead of subtracted.\n\n**Test Day Takeaway:** To recover the original function, reverse BOTH shifts: subtract what was added outside and move the input the opposite way.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-from-shifted-graph",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  // ─── TANGENT LINE WITH PARAMETER — FIND X (bank-am-235..238) ──────────────
  // CB PT4-M1-Q24 variant: asks for the x-COORDINATE at the tangent point
  // (not the parameter). Same SAT Pattern as `tangent-line-and-discriminant`,
  // adding 4 items to ensure both directions of the question are covered.
  // See audit §B7.
  {
    id: "bank-am-235",
    domain: "advanced-math",
    skills: ["tangent-lines", "discriminant-analysis"],
    difficulty: "medium",
    type: "fill-in",
    question: "In the $xy$-plane, the line $y = 5x + a$, where $a$ is a constant, is tangent to the parabola $y = x^2 - 9x + 40$ at the point $(x_0, y_0)$. What is the value of $x_0$?",
    correctAnswer: "7",
    explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~35s):** Setting the two expressions equal gives $x^2 - 14x + (40 - a) = 0$; tangency means one repeated solution, so $x_0 = \\dfrac{14}{2} = 7$.\n\n**The Full Solution:**\nStep 1: A point of tangency is a point the line and the parabola share, so $x^2 - 9x + 40 = 5x + a$, which rearranges to $x^2 - 14x + (40 - a) = 0$.\nStep 2: Tangency means this quadratic has exactly one solution, so its discriminant is $0$ and the single solution is the vertex value $x = -\\dfrac{b}{2a} = \\dfrac{14}{2} = 7$.\nStep 3: So $x_0 = 7$. Check: the parabola gives $y = 49 - 63 + 40 = 26$, and with $a = -9$ the line gives $y = 35 - 9 = 26$. $\\checkmark$\n\n**Common Mistakes:** Answering $14$, which uses $-b$ without dividing by $2a$. Answering $4.5$, the vertex of the parabola $y = x^2 - 9x + 40$ — the tangency point sits at the vertex of the DIFFERENCE, not of the parabola itself.\n\n**Test Day Takeaway:** Subtract the line from the parabola first; a tangent line makes that new quadratic a perfect square, so its single root is $-\\frac{b}{2a}$ and the unknown constant is never needed.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "tangent-line-and-discriminant",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-236",
    domain: "advanced-math",
    skills: ["tangent-lines", "discriminant-analysis"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the $xy$-plane, the parabola $y = x^2 + 10x + 34$ and the line $y = 4x + k$ intersect at exactly one point, where $k$ is a constant. Both graphs are shown. What is the $x$-coordinate of that point of intersection?",
    diagram: { type: "parabola", params: { vertex: { h: -5, k: 9 }, a: 1, xRange: [-10, 0], yRange: [0, 20], xTickInterval: 2, yTickInterval: 4, gridInterval: 2, overlayLine: { slope: 4, yIntercept: 25 }, showVertex: false } },
    choices: [
      // distractor: uses $-b$ without dividing by $2a$
      { id: "A", text: "$-6$" },
      // distractor: reports the vertex of the parabola
      { id: "B", text: "$-5$" },
      { id: "C", text: "$-3$" },
      // distractor: drops the sign when computing $-\frac{b}{2a}$
      { id: "D", text: "$3$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Equating gives $x^2 + 6x + (34 - k) = 0$; exactly one intersection makes it a perfect square, so $x = -\\dfrac{6}{2} = -3$.\n\n**The Full Solution:**\nStep 1: At a shared point the two $y$-values agree: $x^2 + 10x + 34 = 4x + k$, which rearranges to $x^2 + 6x + (34 - k) = 0$.\nStep 2: \"Exactly one point of intersection\" means this quadratic has one repeated solution, so its discriminant is $0$ and the solution is $x = -\\dfrac{b}{2a} = -\\dfrac{6}{2(1)} = -3$.\nStep 3: So the $x$-coordinate is $-3$. Check: the parabola gives $y = 9 - 30 + 34 = 13$, and with $k = 25$ the line gives $y = -12 + 25 = 13$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): reads $-b = -6$ from $x^2 + 6x + \\dots$ and never divides by $2a$.\n* Choice B ($-5$): the vertex of $y = x^2 + 10x + 34$; the single shared point sits at the vertex of the DIFFERENCE of the two functions, which the line's slope moves.\n* Choice D ($3$): keeps the sign of $b$; $-\\frac{b}{2a}$ is negative when $b$ is positive.\n\n**Test Day Takeaway:** Combine the two equations into one quadratic first — a single intersection makes it a perfect square, so the shared input is just $-\\frac{b}{2a}$ and the unknown constant never has to be found.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "tangent-line-and-discriminant",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-237",
    domain: "advanced-math",
    skills: ["tangent-lines", "discriminant-analysis"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the $xy$-plane, the line $y = mx + 3$ is tangent to the parabola $y = x^2 - 4x + 12$, where $m$ is a positive constant. What is the $x$-coordinate of the point of tangency?",
    choices: [
      // distractor: uses the negative solution $m = -10$, which the stem rules out
      { id: "A", text: "$-3$" },
      // distractor: reports the vertex of the parabola
      { id: "B", text: "$2$" },
      { id: "C", text: "$3$" },
      // distractor: forgets to divide $4 + m$ by $2$
      { id: "D", text: "$6$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice C is correct.**\n\n**The Fast Way (~45s):** Equating gives $x^2 - (4 + m)x + 9 = 0$; setting the discriminant to $0$ gives $(4 + m)^2 = 36$, so $m = 2$ (positive), and the repeated root is $\\dfrac{4 + 2}{2} = 3$.\n\n**The Full Solution:**\nStep 1: Setting the expressions equal gives $x^2 - 4x + 12 = mx + 3$, or $x^2 - (4 + m)x + 9 = 0$.\nStep 2: Tangency forces the discriminant to be zero: $(4 + m)^2 - 4(1)(9) = 0$, so $(4 + m)^2 = 36$ and $4 + m = 6$ or $4 + m = -6$, giving $m = 2$ or $m = -10$. The stem says $m$ is positive, so $m = 2$.\nStep 3: The repeated root is $x = \\dfrac{4 + m}{2} = \\dfrac{6}{2} = 3$. Check: the parabola gives $y = 9 - 12 + 12 = 9$, and the line gives $y = 2(3) + 3 = 9$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): comes from the rejected slope $m = -10$, giving $x = \\frac{4 - 10}{2}$; the stem restricts $m$ to positive values.\n* Choice B ($2$): the vertex of $y = x^2 - 4x + 12$, which is where a HORIZONTAL tangent line would touch.\n* Choice D ($6$): stops at $4 + m = 6$ and never divides by $2a = 2$.\n\n**Test Day Takeaway:** When the slope itself is unknown, the discriminant equation produces two candidate slopes — use the stem's restriction to pick one before finding the point.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "tangent-line-and-discriminant",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-238",
    domain: "advanced-math",
    skills: ["tangent-lines", "discriminant-analysis"],
    difficulty: "hard",
    type: "fill-in",
    question: "In the $xy$-plane, the line $y = 9x + b$, where $b$ is a constant, is tangent to the parabola $y = 2x^2 - 3x + 17$. What is the value of $b$?",
    correctAnswer: "-1",
    explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**The correct answer is $-1$.**\n\n**The Fast Way (~45s):** Equating gives $2x^2 - 12x + (17 - b) = 0$; the repeated root is $x = 3$, and substituting gives $18 - 36 + 17 - b = 0$, so $b = -1$.\n\n**The Full Solution:**\nStep 1: Setting the expressions equal gives $2x^2 - 3x + 17 = 9x + b$, or $2x^2 - 12x + (17 - b) = 0$.\nStep 2: Tangency means one repeated solution, so the discriminant is zero: $(-12)^2 - 4(2)(17 - b) = 0$, or $144 = 8(17 - b)$.\nStep 3: Then $17 - b = 18$, so $b = -1$. Check: the repeated root is $x = \\frac{12}{4} = 3$, where the parabola gives $y = 18 - 9 + 17 = 26$ and the line gives $y = 27 - 1 = 26$. $\\checkmark$\n\n**Common Mistakes:** Answering $1$, a sign slip in solving $17 - b = 18$. Answering $3$, the $x$-coordinate of the point of tangency, or $26$, its $y$-coordinate — the question asks for the constant in the line's equation.\n\n**Test Day Takeaway:** Set the discriminant of the combined quadratic to zero and solve for the unknown constant directly; the leading coefficient $2$ must stay in the $4ac$ term.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "tangent-line-and-discriminant",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  // ─── VERTICAL SHIFT (bank-am-239..246) ───────────────────────────────────
  // y = f(x) + k shifts vertically. Distinct from horizontal shift,
  // reflection, and vertical stretch in METHOD (you add/subtract k from y).
  {
    id: "bank-am-239",
    domain: "advanced-math",
    skills: ["function-transformations"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The function $g$ is defined by $g(x) = f(x) + 3$. The table gives the value of $f(x)$ at three values of $x$. What is the value of $g(2)$?",
    diagram: { type: "dataTable", params: { headers: ["x", "f(x)"], rows: [["1", "9"], ["2", "5"], ["3", "-1"]] } },
    choices: [
      // distractor: subtracts $3$ instead of adding it
      { id: "A", text: "$2$" },
      // distractor: reports $f(2)$ without applying the shift
      { id: "B", text: "$5$" },
      { id: "C", text: "$8$" },
      // distractor: multiplies by $3$ instead of adding $3$
      { id: "D", text: "$15$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Vertical Shift**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The table gives $f(2) = 5$, so $g(2) = 5 + 3 = 8$.\n\n**The Full Solution:**\nStep 1: Substituting $x = 2$ into the definition gives $g(2) = f(2) + 3$.\nStep 2: The row of the table with $x = 2$ gives $f(2) = 5$.\nStep 3: So $g(2) = 5 + 3 = 8$. Check: adding $3$ to every output raises each point of the graph by $3$, so $(2, 5)$ becomes $(2, 8)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): subtracts $3$; the $+3$ raises the output.\n* Choice B ($5$): reports $f(2)$ itself and never applies the shift.\n* Choice D ($15$): multiplies by $3$; a vertical stretch would be written $3f(x)$.\n\n**Test Day Takeaway:** A constant added outside the function changes the OUTPUT only — read $f$ at the same input, then adjust.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertical-shift",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-240",
    domain: "advanced-math",
    skills: ["function-transformations"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In the $xy$-plane, the graph of $y = f(x) + 7$ is the graph of $y = f(x)$ shifted in which direction?",
    choices: [
      { id: "A", text: "Up $7$ units" },
      // distractor: reverses the direction of a positive vertical shift
      { id: "B", text: "Down $7$ units" },
      // distractor: treats the outside constant as a horizontal shift
      { id: "C", text: "Left $7$ units" },
      // distractor: treats the outside constant as a horizontal shift in the other direction
      { id: "D", text: "Right $7$ units" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Vertical Shift**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Adding $7$ outside the function adds $7$ to every output, lifting the graph $7$ units up.\n\n**The Full Solution:**\nStep 1: If $(p, q)$ is on the graph of $y = f(x)$, then $f(p) = q$.\nStep 2: At the same input, the new function gives $f(p) + 7 = q + 7$, so the point $(p, q + 7)$ is on the new graph.\nStep 3: Every point keeps its $x$-coordinate and gains $7$ on its $y$-coordinate, so the graph shifts up $7$ units. Check: $y = x^2$ has its lowest point at $(0, 0)$, while $y = x^2 + 7$ has its lowest point at $(0, 7)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B (down $7$): a shift DOWN comes from $f(x) - 7$.\n* Choice C (left $7$): a shift left comes from $f(x + 7)$, with the $7$ inside the function.\n* Choice D (right $7$): a shift right comes from $f(x - 7)$, again with the constant inside.\n\n**Test Day Takeaway:** Outside the function moves the graph vertically in the direction of the sign; inside the function moves it horizontally the OPPOSITE way.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertical-shift",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-241",
    domain: "advanced-math",
    skills: ["function-transformations"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The table shows the value of the function $f$ at four values of $x$. The function $g$ is defined by $g(x) = f(x) - 11$. What is the value of $g(7)$?",
    diagram: { type: "dataTable", params: { headers: ["x", "f(x)"], rows: [["0", "5"], ["3", "-1"], ["5", "8"], ["7", "20"]] } },
    choices: [
      // distractor: computes $11 - f(7)$ instead of $f(7) - 11$
      { id: "A", text: "$-9$" },
      // distractor: uses the row $x = 5$ instead of the row $x = 7$
      { id: "B", text: "$-3$" },
      { id: "C", text: "$9$" },
      // distractor: adds $11$ instead of subtracting it
      { id: "D", text: "$31$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Vertical Shift**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Read $f(7) = 20$ from the table, then subtract $11$: $20 - 11 = 9$.\n\n**The Full Solution:**\nStep 1: The rule $g(x) = f(x) - 11$ says: evaluate $f$ at the same input, then move the output down $11$. The input is never changed.\nStep 2: The table gives $f(7) = 20$.\nStep 3: $g(7) = f(7) - 11 = 20 - 11 = 9$. Check: the point $(7, 20)$ on the graph of $f$ becomes $(7, 9)$ on the graph of $g$, which is $11$ units lower. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-9$): this is $11 - 20$, the subtraction performed in the wrong order.\n* Choice B ($-3$): this uses $f(5) = 8$ and gives $8 - 11$, the right arithmetic on the wrong row.\n* Choice D ($31$): this adds $11$; the minus sign in $f(x) - 11$ shifts the graph down, not up.\n\n**Test Day Takeaway:** A constant added or subtracted OUTSIDE the function changes only the output. Find the matching row first, then apply the shift once.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertical-shift",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-242",
    domain: "advanced-math",
    skills: ["function-transformations"],
    difficulty: "medium",
    type: "fill-in",
    question: "The graph of $y = f(x)$ in the $xy$-plane has a minimum value of $-14$. The function $h$ is defined by $h(x) = f(x) + 9$. What is the minimum value of $h$?",
    correctAnswer: "-5",
    explanation: "**SAT Pattern: Vertical Shift**\n\n**The correct answer is $-5$.**\n\n**The Fast Way (~10s):** Adding $9$ outside the function lifts every output by $9$, so the lowest output rises from $-14$ to $-5$.\n\n**The Full Solution:**\nStep 1: For every $x$, $h(x) = f(x) + 9$. Adding the same constant to every output slides the whole graph up $9$ units and preserves which input produces the smallest output.\nStep 2: The smallest output of $f$ is $-14$, produced at some input $x = c$.\nStep 3: The smallest output of $h$ is therefore $h(c) = -14 + 9 = -5$. Check: no output of $h$ can be below $-5$, since every output of $f$ is at least $-14$. $\\checkmark$\n\n**Common Mistakes:**\n* Subtracting instead of adding gives $-14 - 9 = -23$; the $+9$ raises the graph.\n* Reporting $9$ treats the size of the shift as the new minimum.\n* Reporting $-14$ assumes a vertical shift leaves extreme values unchanged, which is true only for the input, not the output.\n\n**Test Day Takeaway:** A vertical shift moves maximum and minimum VALUES by the shift amount, but leaves the $x$-values where they occur alone.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertical-shift",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-243",
    domain: "advanced-math",
    skills: ["function-transformations"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The function $q$ is defined by $q(x) = x^3 - 2x$. In the $xy$-plane, the graph of which function is the graph of $y = q(x)$ shifted down $8$ units?",
    choices: [
      // distractor: replaces $x$ with $x + 8$, a shift left
      { id: "A", text: "$y = (x + 8)^3 - 2(x + 8)$" },
      // distractor: adds $8$, a shift up
      { id: "B", text: "$y = x^3 - 2x + 8$" },
      { id: "C", text: "$y = x^3 - 2x - 8$" },
      // distractor: replaces $x$ with $x - 8$, a shift right
      { id: "D", text: "$y = (x - 8)^3 - 2(x - 8)$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Vertical Shift**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Down $8$ means subtract $8$ from the whole output: $q(x) - 8 = x^3 - 2x - 8$.\n\n**The Full Solution:**\nStep 1: A shift down by $k$ units replaces $y = q(x)$ with $y = q(x) - k$. Here $k = 8$.\nStep 2: Substituting the rule for $q$ gives $y = (x^3 - 2x) - 8$, or $y = x^3 - 2x - 8$.\nStep 3: Check with a point. $q(0) = 0$, so $(0, 0)$ is on the original graph; the shifted graph should contain $(0, -8)$, and $0^3 - 2(0) - 8 = -8$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = (x + 8)^3 - 2(x + 8)$): changing the INPUT to $x + 8$ shifts the graph $8$ units left, not down.\n* Choice B ($y = x^3 - 2x + 8$): the sign is reversed; $+8$ raises the graph $8$ units.\n* Choice D ($y = (x - 8)^3 - 2(x - 8)$): changing the input to $x - 8$ shifts the graph $8$ units right.\n\n**Test Day Takeaway:** Outside the function means vertical; inside the function means horizontal. Down $8$ is the outside operation $-8$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertical-shift",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-244",
    domain: "advanced-math",
    skills: ["function-transformations"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the $xy$-plane, the point $(-6, 15)$ lies on the graph of $y = w(x)$. Which of the following points must lie on the graph of $y = w(x) - 9$?",
    choices: [
      // distractor: subtracts $9$ from the $x$-coordinate
      { id: "A", text: "$(-15, 15)$" },
      { id: "B", text: "$(-6, 6)$" },
      // distractor: adds $9$ to the $y$-coordinate
      { id: "C", text: "$(-6, 24)$" },
      // distractor: adds $9$ to the $x$-coordinate
      { id: "D", text: "$(3, 15)$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Vertical Shift**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Keep the input, drop the output by $9$: $(-6,\\ 15 - 9) = (-6, 6)$.\n\n**The Full Solution:**\nStep 1: The point $(-6, 15)$ on $y = w(x)$ means $w(-6) = 15$.\nStep 2: Let $u(x) = w(x) - 9$. Then $u(-6) = w(-6) - 9 = 15 - 9 = 6$.\nStep 3: So the point $(-6, 6)$ is on the graph of $y = w(x) - 9$. Check: the new point sits $9$ units directly below the old one, exactly what subtracting $9$ from every output does. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-15, 15)$): the $9$ was applied to the $x$-coordinate, which a vertical shift never touches.\n* Choice C ($(-6, 24)$): the shift was added rather than subtracted, moving the point up.\n* Choice D ($(3, 15)$): the $9$ was added to the input, which would be a horizontal shift.\n\n**Test Day Takeaway:** In $y = f(x) + k$ the $x$-coordinate is untouched; only the $y$-coordinate moves, and it moves by exactly $k$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertical-shift",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-245",
    domain: "advanced-math",
    skills: ["function-transformations"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the $xy$-plane, the graph of $y = f(x)$ is shown. The function $g$ is defined by $g(x) = f(x) + 9$. Which of the following must be true about the graph of $y = g(x)$?",
    diagram: { type: "quadraticVertex", params: { vertex: [2, -9], a: 1, showVertex: true } },
    choices: [
      { id: "A", text: "It has exactly one $x$-intercept." },
      // distractor: assumes the number of $x$-intercepts is unchanged by the shift
      { id: "B", text: "It has exactly two $x$-intercepts." },
      // distractor: shifts the graph down $9$ instead of up
      { id: "C", text: "It has no $x$-intercept." },
      // distractor: applies the $+9$ to the $x$-coordinate of the lowest point
      { id: "D", text: "Its lowest point is $(11, -9)$." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Vertical Shift**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** The lowest point of the graph shown is $(2, -9)$. Adding $9$ raises it to $(2, 0)$, so the shifted graph touches the $x$-axis exactly once.\n\n**The Full Solution:**\nStep 1: From the graph, the minimum value of $f$ is $-9$, attained at $x = 2$, and $f$ has two $x$-intercepts.\nStep 2: $g(x) = f(x) + 9$ raises every point $9$ units, so the minimum value of $g$ is $-9 + 9 = 0$, still at $x = 2$.\nStep 3: Because $0$ is the smallest value $g$ takes, $g(x) = 0$ only at $x = 2$, and $g(x) > 0$ everywhere else. The graph meets the $x$-axis exactly once. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B (exactly two): true of $f$, but the shift moves the whole curve up so that the two crossings merge into a single touch point.\n* Choice C (none): this is what happens if the graph is pushed DOWN $9$ units, or up by more than $9$.\n* Choice D (lowest point $(11, -9)$): the $9$ was added to the $x$-coordinate; a vertical shift changes only the $y$-coordinate, giving $(2, 0)$.\n\n**Test Day Takeaway:** To count $x$-intercepts after a vertical shift, compare the shift to the extreme value: the intercept count changes exactly when the extreme value crosses $0$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertical-shift",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-246",
    domain: "advanced-math",
    skills: ["function-transformations"],
    difficulty: "hard",
    type: "fill-in",
    question: "The minimum value of the function $p$ is $-4$, and $p(5) = 12$. The function $q$ is defined by $q(x) = p(x) + n$, where $n$ is a constant, and the minimum value of $q$ is $9$. What is the value of $q(5)$?",
    correctAnswer: "25",
    explanation: "**SAT Pattern: Vertical Shift**\n\n**The correct answer is $25$.**\n\n**The Fast Way (~30s):** The minimum climbed from $-4$ to $9$, so $n = 13$; every output rises by $13$, and $q(5) = 12 + 13 = 25$.\n\n**The Full Solution:**\nStep 1: Adding the constant $n$ to every output raises the minimum value by exactly $n$, so the minimum of $q$ is $-4 + n$.\nStep 2: Setting $-4 + n = 9$ gives $n = 13$.\nStep 3: Then $q(5) = p(5) + 13 = 12 + 13 = 25$. Check: with $n = 13$ the lowest output of $q$ is $-4 + 13 = 9$, matching the given minimum. $\\checkmark$\n\n**Common Mistakes:**\n* Answering $21$ uses $n = 9$, treating the new minimum as the size of the shift instead of solving $-4 + n = 9$.\n* Answering $13$ stops at the shift $n$ and never evaluates $q$ at $x = 5$.\n* Answering $17$ comes from $n = 9 - 4 = 5$: the shift is $9 - (-4) = 13$, and subtracting a negative ADDS.\n\n**Test Day Takeaway:** A vertical shift changes every output by the same constant, so one known pair of minima pins the shift — then apply that same shift to any other point.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertical-shift",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  // ─── HORIZONTAL SHIFT (bank-am-247..254) ─────────────────────────────────
  // y = f(x ± h). Counter-intuitive sign: f(x - h) shifts RIGHT, f(x + h) LEFT.
  {
    id: "bank-am-247",
    domain: "advanced-math",
    skills: ["function-transformations"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The function $g$ is defined by $g(x) = f(x - 9)$, where $f$ is a function. If $f(2) = 13$, what is the value of $g(11)$?",
    choices: [
      // distractor: reports the input $2$ fed to $f$ rather than the output
      { id: "A", text: "$2$" },
      // distractor: subtracts $9$ from the output
      { id: "B", text: "$4$" },
      { id: "C", text: "$13$" },
      // distractor: adds $9$ to the output
      { id: "D", text: "$22$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Horizontal Shift**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $g(11) = f(11 - 9) = f(2) = 13$. The shift moves the input, never the output.\n\n**The Full Solution:**\nStep 1: The rule $g(x) = f(x - 9)$ says: subtract $9$ from the input, then feed that number to $f$.\nStep 2: With $x = 11$, the input to $f$ is $11 - 9 = 2$.\nStep 3: So $g(11) = f(2) = 13$. Check: the point $(2, 13)$ on the graph of $f$ corresponds to $(11, 13)$ on the graph of $g$ — same height, moved $9$ units right. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): this is the input handed to $f$, not the value $f$ returns.\n* Choice B ($4$): this subtracts the $9$ from the output, $13 - 9$; the $9$ belongs inside the parentheses.\n* Choice D ($22$): this adds the $9$ to the output, $13 + 9$.\n\n**Test Day Takeaway:** For $g(x) = f(x - h)$, do the subtraction to the INPUT first, then read the corresponding output of $f$ unchanged.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "horizontal-shift",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-248",
    domain: "advanced-math",
    skills: ["function-transformations"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The graph of $y = f(x)$ in the $xy$-plane has exactly one $x$-intercept, at $x = 4$. The function $g$ is defined by $g(x) = f(x + 7)$. At what value of $x$ does the graph of $y = g(x)$ have its $x$-intercept?",
    choices: [
      // distractor: sets the inside expression equal to $0$, solving $x + 7 = 0$
      { id: "A", text: "$-7$" },
      { id: "B", text: "$-3$" },
      // distractor: copies the intercept of $f$, assuming a horizontal shift leaves it in place
      { id: "C", text: "$4$" },
      // distractor: computes $4 + 7$, shifting right by following the plus sign
      { id: "D", text: "$11$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Horizontal Shift**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $g(x) = 0$ when the number handed to $f$ is $4$, so $x + 7 = 4$ and $x = -3$.\n\n**The Full Solution:**\nStep 1: An $x$-intercept of $y = g(x)$ is a value of $x$ with $g(x) = 0$, and $g(x) = f(x + 7)$, so the condition is $f(x + 7) = 0$.\nStep 2: The only input that makes $f$ equal $0$ is $4$, so $x + 7 = 4$, giving $x = -3$.\nStep 3: The graph of $y = g(x)$ has its only $x$-intercept at $x = -3$. Check: $g(-3) = f(-3 + 7) = f(4) = 0$, and the intercept sits $7$ units left of $f$'s, which is what a $+7$ inside the function does. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-7$): this solves $x + 7 = 0$; the inside expression must equal $4$, the input where $f$ is zero, not $0$ itself.\n* Choice C ($4$): this copies $f$'s intercept unchanged, but a constant inside the function moves every input, intercepts included.\n* Choice D ($11$): this computes $4 + 7 = 11$, following the plus sign; a $+7$ inside the parentheses moves the graph LEFT.\n\n**Test Day Takeaway:** Zeros are inputs. Set the inside expression equal to the old zero and solve — that one equation fixes both the direction and the size of the shift.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "horizontal-shift",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-249",
    domain: "advanced-math",
    skills: ["function-transformations"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The function $r$ is defined by $r(x) = |x| + 4$. Which function's graph in the $xy$-plane is the graph of $y = r(x)$ translated $5$ units to the right?",
    choices: [
      { id: "A", text: "$y = |x - 5| + 4$" },
      // distractor: uses $x + 5$, which shifts the graph left
      { id: "B", text: "$y = |x + 5| + 4$" },
      // distractor: adds $5$ outside, a shift up
      { id: "C", text: "$y = |x| + 9$" },
      // distractor: subtracts $5$ outside, a shift down
      { id: "D", text: "$y = |x| - 1$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Horizontal Shift**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Right $5$ means replace every $x$ inside the function with $x - 5$: $y = |x - 5| + 4$.\n\n**The Full Solution:**\nStep 1: A translation $h$ units to the right sends $y = r(x)$ to $y = r(x - h)$. Here $h = 5$.\nStep 2: $r(x - 5) = |x - 5| + 4$. The $+4$ is untouched, because it was already outside the absolute value.\nStep 3: Check the corner point. The graph of $r$ has its corner at $(0, 4)$; the shifted graph should have its corner at $(5, 4)$, and $|5 - 5| + 4 = 4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($y = |x + 5| + 4$): its corner is at $(-5, 4)$ — a shift $5$ units LEFT.\n* Choice C ($y = |x| + 9$): the $5$ was added outside, raising the graph instead of sliding it sideways.\n* Choice D ($y = |x| - 1$): the $5$ was subtracted outside, lowering the graph.\n\n**Test Day Takeaway:** Track one landmark point (a corner, a vertex, an intercept) through the transformation — it settles the direction faster than any rule.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "horizontal-shift",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-250",
    domain: "advanced-math",
    skills: ["function-transformations"],
    difficulty: "medium",
    type: "fill-in",
    question: "The graph of the quadratic function $f$ is shown in the $xy$-plane. The function $g$ is defined by $g(x) = f(x + 6)$, and the lowest point on the graph of $y = g(x)$ is $(a, -8)$. What is the value of $a$?",
    diagram: { type: "quadraticVertex", params: { vertex: [3, -8], a: 1, showVertex: true } },
    correctAnswer: "-3",
    explanation: "**SAT Pattern: Horizontal Shift**\n\n**The correct answer is $-3$.**\n\n**The Fast Way (~20s):** The lowest point shown is at $x = 3$. Replacing $x$ with $x + 6$ slides the graph $6$ units left: $3 - 6 = -3$.\n\n**The Full Solution:**\nStep 1: From the graph, the lowest point of $y = f(x)$ is $(3, -8)$, so $f$ attains its minimum value $-8$ at $x = 3$.\nStep 2: $g(x) = f(x + 6)$ produces that same minimum when its input matches: $x + 6 = 3$, so $x = -3$.\nStep 3: Therefore the lowest point on the graph of $g$ is $(-3, -8)$ and $a = -3$. Check: $g(-3) = f(-3 + 6) = f(3) = -8$, matching the given $y$-coordinate. $\\checkmark$\n\n**Common Mistakes:**\n* Answering $9$ shifts right instead of left; $f(x + 6)$ moves the graph in the negative $x$-direction.\n* Answering $3$ forgets the shift entirely and copies the vertex of $f$.\n* Answering $-2$ comes from applying the $6$ to the $y$-coordinate ($-8 + 6$) rather than the $x$-coordinate.\n\n**Test Day Takeaway:** Set the inside expression equal to the old input ($x + 6 = 3$) and solve. That single equation gets the direction right every time.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "horizontal-shift",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-251",
    domain: "advanced-math",
    skills: ["function-transformations"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The point $(8, -3)$ is on the graph of $y = v(x)$ in the $xy$-plane. The graph of $y = v(x - 4)$ must contain which of the following points?",
    choices: [
      // distractor: shifts left instead of right
      { id: "A", text: "$(4, -3)$" },
      // distractor: subtracts $4$ from the $y$-coordinate
      { id: "B", text: "$(8, -7)$" },
      // distractor: adds $4$ to the $y$-coordinate
      { id: "C", text: "$(8, 1)$" },
      { id: "D", text: "$(12, -3)$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Horizontal Shift**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** The height stays $-3$; the input must satisfy $x - 4 = 8$, so $x = 12$.\n\n**The Full Solution:**\nStep 1: The given point means $v(8) = -3$.\nStep 2: Let $u(x) = v(x - 4)$. To get the output $-3$ out of $u$, the number handed to $v$ must be $8$, so $x - 4 = 8$ and $x = 12$.\nStep 3: Then $u(12) = v(8) = -3$, so $(12, -3)$ lies on the new graph. Check: the point moved $4$ units right at the same height, which is what $v(x - 4)$ does. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(4, -3)$): this subtracts $4$ from the $x$-coordinate; the minus sign inside the function shifts the graph the other way.\n* Choice B ($(8, -7)$): this applies the $4$ to the output, which a horizontal shift never does.\n* Choice C ($(8, 1)$): this adds $4$ to the output for the same reason.\n\n**Test Day Takeaway:** Solve the inside equation ($x - 4 = 8$) instead of guessing the direction; the $y$-coordinate rides along unchanged.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "horizontal-shift",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-252",
    domain: "advanced-math",
    skills: ["function-transformations"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The functions $f$ and $g$ satisfy $g(x) = f(x + 6)$ for every value of $x$. If $g(-4) = 21$, what is the value of $f(2)$?",
    choices: [
      // distractor: reports the input $-4$ rather than an output
      { id: "A", text: "$-4$" },
      // distractor: subtracts $6$ from the output
      { id: "B", text: "$15$" },
      { id: "C", text: "$21$" },
      // distractor: adds $6$ to the output
      { id: "D", text: "$27$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Horizontal Shift**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $g(-4) = f(-4 + 6) = f(2)$, so $f(2) = 21$ directly.\n\n**The Full Solution:**\nStep 1: Substitute $x = -4$ into the relationship: $g(-4) = f(-4 + 6)$.\nStep 2: The inside simplifies to $f(2)$, so $f(2) = g(-4)$.\nStep 3: Since $g(-4) = 21$, it follows that $f(2) = 21$. Check: the point $(-4, 21)$ on the graph of $g$ sits $6$ units left of the point $(2, 21)$ on the graph of $f$, which is exactly the shift $f(x + 6)$ produces. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): this reports the input to $g$; the question asks for an output of $f$.\n* Choice B ($15$): this subtracts the $6$ from the output, $21 - 6$; the $6$ is already used inside the parentheses.\n* Choice D ($27$): this adds the $6$ to the output for the same reason.\n\n**Test Day Takeaway:** A horizontal shift relabels inputs only. Once the inside expressions match, the outputs are equal — no further arithmetic.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "horizontal-shift",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-253",
    domain: "advanced-math",
    skills: ["function-transformations"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The graph of $y = g(x)$ is shown in the $xy$-plane, where $g(x) = f(x + 5)$ for some function $f$. At what value of $x$ does $f$ attain its minimum value?",
    diagram: { type: "quadraticVertex", params: { vertex: [-1, -7], a: 0.6, showVertex: true } },
    choices: [
      // distractor: reports the minimum value instead of where it occurs
      { id: "A", text: "$-7$" },
      // distractor: shifts the wrong way, computing $-1 - 5$
      { id: "B", text: "$-6$" },
      // distractor: reports where $g$ is smallest without undoing the shift
      { id: "C", text: "$-1$" },
      { id: "D", text: "$4$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Horizontal Shift**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** $g$ bottoms out at $x = -1$, and $g(-1) = f(-1 + 5) = f(4)$, so $f$ bottoms out at $x = 4$.\n\n**The Full Solution:**\nStep 1: From the graph, the lowest point of $y = g(x)$ is $(-1, -7)$, so the smallest output of $g$ is $-7$, produced at $x = -1$.\nStep 2: Since $g(x) = f(x + 5)$, that smallest output is $g(-1) = f(-1 + 5) = f(4)$. The functions $f$ and $g$ take exactly the same set of outputs, so $-7$ is also the smallest output of $f$.\nStep 3: $f$ attains it at the input $4$. Check: $g(-1) = f(4) = -7$, and the graph of $g$ is the graph of $f$ slid $5$ units LEFT, so $f$'s low point sits $5$ units right of $-1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-7$): that is the minimum VALUE read off the graph, not the input that produces it.\n* Choice B ($-6$): this shifts left again ($-1 - 5$); going from $g$ back to $f$ reverses the direction.\n* Choice C ($-1$): this is where $g$ is smallest; the question asks about $f$.\n\n**Test Day Takeaway:** When the shifted function is the one you can see, run the substitution backwards: set the inside expression equal to the unknown input and solve.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "horizontal-shift",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-254",
    domain: "advanced-math",
    skills: ["function-transformations"],
    difficulty: "hard",
    type: "fill-in",
    question: "The zeros of the function $f$ are $x = -4$ and $x = 10$, and $f$ has no other zeros. The function $h$ is defined by $h(x) = f(x - 3)$. What is the sum of the zeros of $h$?",
    correctAnswer: "12",
    explanation: "**SAT Pattern: Horizontal Shift**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~25s):** Each zero moves $3$ units right: $-4 \\to -1$ and $10 \\to 13$, and $-1 + 13 = 12$.\n\n**The Full Solution:**\nStep 1: $h(x) = 0$ exactly when $f(x - 3) = 0$, which happens exactly when $x - 3$ is a zero of $f$.\nStep 2: Setting $x - 3 = -4$ gives $x = -1$; setting $x - 3 = 10$ gives $x = 13$. Since $f$ has no other zeros, these are the only zeros of $h$.\nStep 3: Their sum is $-1 + 13 = 12$. Check: the original zeros sum to $-4 + 10 = 6$, and shifting two zeros right by $3$ each adds $2(3) = 6$, giving $6 + 6 = 12$. $\\checkmark$\n\n**Common Mistakes:**\n* Answering $0$ shifts the zeros LEFT, to $-7$ and $7$, whose sum is $0$.\n* Answering $6$ leaves the zeros unmoved; a horizontal shift does move them.\n* Answering $13$ shifts only the larger zero and forgets the smaller one.\n\n**Test Day Takeaway:** Zeros are inputs, so a horizontal shift moves every one of them — set the inside expression equal to each old zero and solve.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "horizontal-shift",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  // ─── REFLECTION OF GRAPH (bank-am-255..262) ──────────────────────────────
  // y = -f(x) reflects over x-axis. y = f(-x) reflects over y-axis. EVEN
  // functions are unchanged by f(-x); ODD functions become -f(x).
  {
    id: "bank-am-255",
    domain: "advanced-math",
    skills: ["function-transformations"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In the $xy$-plane, the graph of $y = -f(x)$ is the reflection of the graph of $y = f(x)$ across which of the following?",
    choices: [
      { id: "A", text: "The $x$-axis" },
      // distractor: is the reflection produced by $f(-x)$, where the sign is inside
      { id: "B", text: "The $y$-axis" },
      // distractor: describes an inverse relationship, not a sign change
      { id: "C", text: "The line $y = x$" },
      // distractor: combines both reflections
      { id: "D", text: "The line $y = -x$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Reflection of Graph**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The negative sign is outside the function, so it flips the sign of every output — a reflection across the $x$-axis.\n\n**The Full Solution:**\nStep 1: If $(a, b)$ is on the graph of $y = f(x)$, then $f(a) = b$.\nStep 2: For $y = -f(x)$, the same input gives $-f(a) = -b$, so $(a, -b)$ is on the new graph.\nStep 3: Replacing $(a, b)$ with $(a, -b)$ keeps the horizontal position and mirrors the vertical one, which is a reflection across the $x$-axis. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B (the $y$-axis): that reflection sends $(a, b)$ to $(-a, b)$ and comes from $y = f(-x)$, where the sign sits inside.\n* Choice C (the line $y = x$): that swaps the coordinates to $(b, a)$, the graph of the inverse relation.\n* Choice D (the line $y = -x$): that sends $(a, b)$ to $(-b, -a)$, which is neither transformation alone.\n\n**Test Day Takeaway:** Outside negative flips $y$ (across the $x$-axis); inside negative flips $x$ (across the $y$-axis).",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "reflection-of-graph",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-256",
    domain: "advanced-math",
    skills: ["function-transformations"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The function $g$ is defined by $g(x) = f(-x)$, where $f$ is a function. If $f(-7) = 24$, what is the value of $g(7)$?",
    choices: [
      // distractor: negates the output, which is $-f(x)$ rather than $f(-x)$
      { id: "A", text: "$-24$" },
      // distractor: reports the input rather than the output
      { id: "B", text: "$7$" },
      // distractor: subtracts $7$ from the output
      { id: "C", text: "$17$" },
      { id: "D", text: "$24$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Reflection of Graph**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** $g(7) = f(-7) = 24$. The negative sign changes the input only.\n\n**The Full Solution:**\nStep 1: Substitute $x = 7$ into the definition: $g(7) = f(-7)$.\nStep 2: The problem gives $f(-7) = 24$.\nStep 3: So $g(7) = 24$. Check: the point $(-7, 24)$ on the graph of $f$ becomes $(7, 24)$ on the graph of $g$ — same height, mirrored across the $y$-axis. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-24$): this flips the sign of the OUTPUT, which is what $-f(x)$ does; here the sign is inside the parentheses.\n* Choice B ($7$): this reports the input to $g$ instead of the value it returns.\n* Choice C ($17$): this subtracts $7$ from $24$, treating the reflection as a vertical shift.\n\n**Test Day Takeaway:** In $f(-x)$, replace the input with its opposite and read the output off unchanged.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "reflection-of-graph",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-257",
    domain: "advanced-math",
    skills: ["function-transformations"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the $xy$-plane, the graph of $y = m(x)$ contains the point $(-5, 12)$. Which of the following points must be on the graph of $y = -m(x)$?",
    choices: [
      // distractor: negates both coordinates and then swaps them, a reflection across the line $y = -x$
      { id: "A", text: "$(-12, 5)$" },
      { id: "B", text: "$(-5, -12)$" },
      // distractor: reflects across the $y$-axis, which is $m(-x)$
      { id: "C", text: "$(5, 12)$" },
      // distractor: negates both coordinates
      { id: "D", text: "$(5, -12)$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Reflection of Graph**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Keep the input, negate the output: $(-5,\\ -12)$.\n\n**The Full Solution:**\nStep 1: The given point means $m(-5) = 12$.\nStep 2: Let $n(x) = -m(x)$. Then $n(-5) = -m(-5) = -12$.\nStep 3: So $(-5, -12)$ is on the graph of $y = -m(x)$. Check: the two points are the same distance from the $x$-axis on opposite sides, which is what reflecting across the $x$-axis means. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-12, 5)$): both coordinates were negated and then swapped, which reflects the point across the line $y = -x$; the sign in front of $m$ never moves the $x$-coordinate.\n* Choice C ($(5, 12)$): only the $x$-coordinate was negated, which is the graph of $y = m(-x)$.\n* Choice D ($(5, -12)$): both coordinates were negated, which is a rotation about the origin, not a single reflection.\n\n**Test Day Takeaway:** The minus sign in front of the function touches the $y$-coordinate only; the $x$-coordinate stays put.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "reflection-of-graph",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-258",
    domain: "advanced-math",
    skills: ["function-transformations"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The graph of $y = h(x)$ is shown in the $xy$-plane, where $h(x) = x^2 - 6x + 5$. The graph of which function is the reflection of the graph of $y = h(x)$ across the $x$-axis?",
    diagram: { type: "quadraticVertex", params: { vertex: [3, -4], a: 1, showVertex: true } },
    choices: [
      // distractor: negates only the leading term
      { id: "A", text: "$y = -x^2 - 6x + 5$" },
      { id: "B", text: "$y = -x^2 + 6x - 5$" },
      // distractor: is $h(-x)$, a reflection across the $y$-axis
      { id: "C", text: "$y = x^2 + 6x + 5$" },
      // distractor: forgets to negate the constant term
      { id: "D", text: "$y = -x^2 + 6x + 5$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Reflection of Graph**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Reflecting across the $x$-axis means negating the ENTIRE expression: $-(x^2 - 6x + 5) = -x^2 + 6x - 5$.\n\n**The Full Solution:**\nStep 1: A reflection across the $x$-axis sends $y = h(x)$ to $y = -h(x)$, so every term changes sign.\nStep 2: $-h(x) = -(x^2 - 6x + 5) = -x^2 + 6x - 5$.\nStep 3: Check with the low point. The graph shown has its lowest point at $(3, -4)$; the reflected graph should have its highest point at $(3, 4)$, and $-(3)^2 + 6(3) - 5 = -9 + 18 - 5 = 4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -x^2 - 6x + 5$): only the $x^2$ term was negated, so the graph is not a mirror image.\n* Choice C ($y = x^2 + 6x + 5$): this is $h(-x)$, the reflection across the $y$-axis, whose lowest point is $(-3, -4)$.\n* Choice D ($y = -x^2 + 6x + 5$): the constant was left positive, so the vertex lands at $(3, 14)$ instead of $(3, 4)$.\n\n**Test Day Takeaway:** Distribute the negative across every term, then verify with the vertex — one point catches a missed sign instantly.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "reflection-of-graph",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-259",
    domain: "advanced-math",
    skills: ["function-transformations"],
    difficulty: "medium",
    type: "fill-in",
    question: "The graph of $y = f(x)$ is shown in the $xy$-plane. The function $g$ is defined by $g(x) = -f(x)$. What is the minimum value of $g$?",
    diagram: { type: "quadraticVertex", params: { vertex: [2, 9], a: -0.5, showVertex: true } },
    correctAnswer: "-9",
    explanation: "**SAT Pattern: Reflection of Graph**\n\n**The correct answer is $-9$.**\n\n**The Fast Way (~20s):** The highest point of the graph shown is $9$; flipping the graph across the $x$-axis turns that peak into the lowest point, $-9$.\n\n**The Full Solution:**\nStep 1: From the graph, the largest output of $f$ is $9$, attained at $x = 2$, and the graph opens downward, so $f(x) \\le 9$ for every $x$.\nStep 2: Multiplying by $-1$ reverses every inequality: $-f(x) \\ge -9$, so $g(x) \\ge -9$ for every $x$.\nStep 3: Equality happens at $x = 2$, where $g(2) = -f(2) = -9$. So the minimum value of $g$ is $-9$. $\\checkmark$\n\n**Common Mistakes:**\n* Answering $9$ keeps the sign; reflecting across the $x$-axis changes the sign of every output.\n* Answering $2$ reports the $x$-coordinate of the peak instead of the value.\n* Answering $-2$ negates that $x$-coordinate rather than the output.\n\n**Test Day Takeaway:** A reflection across the $x$-axis swaps maximums and minimums and negates their values, while the inputs where they occur stay the same.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "reflection-of-graph",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-260",
    domain: "advanced-math",
    skills: ["function-transformations"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Which of the following describes how the graph of $y = f(-x)$ is obtained from the graph of $y = f(x)$ in the $xy$-plane?",
    choices: [
      // distractor: is the effect of $-f(x)$, with the sign outside
      { id: "A", text: "Reflect the graph across the $x$-axis." },
      { id: "B", text: "Reflect the graph across the $y$-axis." },
      // distractor: treats the sign as a horizontal translation
      { id: "C", text: "Translate the graph $1$ unit to the left." },
      // distractor: treats the sign as a scale factor
      { id: "D", text: "Stretch the graph vertically by a factor of $2$." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Reflection of Graph**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The sign change is inside the function, so it acts on the inputs: every $x$-coordinate flips sign, mirroring the graph across the $y$-axis.\n\n**The Full Solution:**\nStep 1: Take any point $(a, b)$ on the graph of $y = f(x)$, so $f(a) = b$.\nStep 2: For the new function, the input $-a$ gives $f(-(-a)) = f(a) = b$, so $(-a, b)$ is on the graph of $y = f(-x)$.\nStep 3: Every point keeps its height and lands at the opposite horizontal position, which is a reflection across the $y$-axis. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (across the $x$-axis): that comes from $y = -f(x)$, where the sign multiplies the output.\n* Choice C (translate $1$ unit left): a translation requires a constant added to the input, such as $f(x + 1)$; a sign change is not a translation.\n* Choice D (stretch by a factor of $2$): stretches come from a constant multiplying the output, such as $2f(x)$.\n\n**Test Day Takeaway:** Read where the negative sign lives. Inside the parentheses it reflects across the $y$-axis; outside it reflects across the $x$-axis.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "reflection-of-graph",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-261",
    domain: "advanced-math",
    skills: ["function-transformations"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The graph of $y = q(x)$ in the $xy$-plane passes through the point $(-3, 8)$. Which of the following points must lie on the graph of $y = -q(-x)$?",
    choices: [
      // distractor: negates both coordinates but then writes them in the wrong order
      { id: "A", text: "$(-8, 3)$" },
      // distractor: applies only the outside negative, giving $-q(x)$
      { id: "B", text: "$(-3, -8)$" },
      { id: "C", text: "$(3, -8)$" },
      // distractor: applies only the inside negative, giving $q(-x)$
      { id: "D", text: "$(3, 8)$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Reflection of Graph**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Two reflections: the inside negative flips $-3$ to $3$, and the outside negative flips $8$ to $-8$, giving $(3, -8)$.\n\n**The Full Solution:**\nStep 1: The given point means $q(-3) = 8$.\nStep 2: Let $s(x) = -q(-x)$. To use the known value, feed in $x = 3$: $s(3) = -q(-3)$.\nStep 3: Since $q(-3) = 8$, $s(3) = -8$, so the point $(3, -8)$ is on the graph. Check: reflecting $(-3, 8)$ across the $y$-axis gives $(3, 8)$, and reflecting that across the $x$-axis gives $(3, -8)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-8, 3)$): this is the correct pair of numbers written in the wrong order; neither reflection exchanges the roles of $x$ and $y$.\n* Choice B ($(-3, -8)$): only the output was negated, so the inside $-x$ was ignored.\n* Choice D ($(3, 8)$): only the input was negated, so the leading minus sign was ignored.\n\n**Test Day Takeaway:** With a sign inside AND outside, apply them one at a time: inside changes the $x$-coordinate, outside changes the $y$-coordinate.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "reflection-of-graph",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-262",
    domain: "advanced-math",
    skills: ["function-transformations"],
    difficulty: "hard",
    type: "fill-in",
    question: "The graph of $y = f(x)$ in the $xy$-plane has $x$-intercepts at $x = -2$, $x = 5$, and $x = 9$, and no others. The function $g$ is defined by $g(x) = f(-x)$. What is the greatest $x$-intercept of the graph of $y = g(x)$?",
    correctAnswer: "2",
    explanation: "**SAT Pattern: Reflection of Graph**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~30s):** Reflecting across the $y$-axis negates every intercept: $-2$, $5$, $9$ become $2$, $-5$, $-9$. The greatest of those is $2$.\n\n**The Full Solution:**\nStep 1: $g(x) = 0$ exactly when $f(-x) = 0$, which happens exactly when $-x$ is one of $-2$, $5$, $9$.\nStep 2: Solving $-x = -2$, $-x = 5$, and $-x = 9$ gives $x = 2$, $x = -5$, and $x = -9$.\nStep 3: Among $2$, $-5$, and $-9$, the greatest is $2$. Check: $g(2) = f(-2) = 0$, so $x = 2$ really is an $x$-intercept of $g$. $\\checkmark$\n\n**Common Mistakes:**\n* Answering $9$ assumes the intercepts are unchanged; a reflection across the $y$-axis moves every one of them.\n* Answering $-9$ negates correctly but then picks the value with the largest size instead of the largest value; $-9$ is the LEAST of the three.\n* Answering $-2$ copies an $x$-intercept of $f$ unchanged instead of negating it; $g(-2) = f(2)$, which need not be $0$.\n\n**Test Day Takeaway:** \"Greatest\" means farthest right on the number line, not largest in absolute value — sort the reflected list before choosing.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "reflection-of-graph",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  // ─── VERTICAL STRETCH (bank-am-263..270) ─────────────────────────────────
  // y = a·f(x) stretches vertically by factor a. a > 1: stretch; 0 < a < 1:
  // compression. Negative a combines reflection over x-axis.
  {
    id: "bank-am-263",
    domain: "advanced-math",
    skills: ["function-transformations"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The function $g$ is defined by $g(x) = 6f(x)$, where $f$ is the function given in the table. What is the value of $g(4)$?",
    diagram: { type: "dataTable", params: { headers: ["x", "f(x)"], rows: [["0", "-3"], ["4", "7"], ["9", "2"]] } },
    choices: [
      // distractor: multiplies $f(0)$ by $6$, using the wrong row
      { id: "A", text: "$-18$" },
      // distractor: subtracts $6$ from the output
      { id: "B", text: "$1$" },
      // distractor: adds $6$ to the output
      { id: "C", text: "$13$" },
      { id: "D", text: "$42$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Vertical Stretch**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** The table gives $f(4) = 7$, and $g(4) = 6(7) = 42$.\n\n**The Full Solution:**\nStep 1: The rule $g(x) = 6f(x)$ multiplies each output of $f$ by $6$ and leaves the input alone.\nStep 2: From the row $x = 4$, $f(4) = 7$.\nStep 3: $g(4) = 6 \\cdot 7 = 42$. Check: the point $(4, 7)$ on the graph of $f$ becomes $(4, 42)$ on the graph of $g$ — six times as far from the $x$-axis. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-18$): this is $6 \\cdot f(0) = 6(-3)$, the right operation on the wrong row.\n* Choice B ($1$): this computes $7 - 6$; a stretch multiplies, it does not subtract.\n* Choice C ($13$): this computes $7 + 6$, treating the factor as a vertical shift.\n\n**Test Day Takeaway:** A coefficient in front of $f$ multiplies outputs. Match the row to the input first, then multiply once.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertical-stretch",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-264",
    domain: "advanced-math",
    skills: ["function-transformations"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In the $xy$-plane, the graph of $y = 4f(x)$ is the graph of $y = f(x)$ stretched vertically by a factor of $c$, where $c$ is a positive constant. What is the value of $c$?",
    choices: [
      // distractor: uses the reciprocal, which would compress the graph
      { id: "A", text: "$\\dfrac{1}{4}$" },
      // distractor: assumes the coefficient leaves the graph unchanged
      { id: "B", text: "$1$" },
      { id: "C", text: "$4$" },
      // distractor: squares the coefficient
      { id: "D", text: "$16$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Vertical Stretch**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The coefficient in front of $f$ IS the vertical stretch factor, so $c = 4$.\n\n**The Full Solution:**\nStep 1: If $(a, b)$ is on the graph of $y = f(x)$, then $f(a) = b$.\nStep 2: The same input in the new function gives $4f(a) = 4b$, so $(a, 4b)$ is on the graph of $y = 4f(x)$.\nStep 3: Every point is $4$ times as far from the $x$-axis as before, at the same $x$-coordinate, so the stretch factor is $4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\dfrac{1}{4}$): a factor less than $1$ pulls the graph toward the $x$-axis; that would be $y = \\dfrac{1}{4}f(x)$.\n* Choice B ($1$): a factor of $1$ leaves the graph exactly where it was.\n* Choice D ($16$): this squares the coefficient; the outputs are multiplied by $4$ once, not twice.\n\n**Test Day Takeaway:** In $y = cf(x)$ with $c > 0$, the number in front is the vertical stretch factor — no extra arithmetic.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertical-stretch",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-265",
    domain: "advanced-math",
    skills: ["function-transformations"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The function $f$ is defined by $f(x) = \\sqrt{x} + 2$. The graph of which function is the graph of $y = f(x)$ stretched vertically by a factor of $4$?",
    choices: [
      // distractor: multiplies only the radical term and leaves the constant alone
      { id: "A", text: "$y = 4\\sqrt{x} + 2$" },
      { id: "B", text: "$y = 4\\sqrt{x} + 8$" },
      // distractor: multiplies the input, which compresses the graph horizontally
      { id: "C", text: "$y = \\sqrt{4x} + 2$" },
      // distractor: multiplies only the constant term
      { id: "D", text: "$y = \\sqrt{x} + 8$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Vertical Stretch**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Multiply the WHOLE output by $4$: $4(\\sqrt{x} + 2) = 4\\sqrt{x} + 8$.\n\n**The Full Solution:**\nStep 1: A vertical stretch by a factor of $4$ replaces $y = f(x)$ with $y = 4f(x)$.\nStep 2: Distribute: $4f(x) = 4(\\sqrt{x} + 2) = 4\\sqrt{x} + 8$.\nStep 3: Check one point. $f(9) = 3 + 2 = 5$, so the stretched graph should contain $(9, 20)$, and $4\\sqrt{9} + 8 = 12 + 8 = 20$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = 4\\sqrt{x} + 2$): the $4$ was applied to only one term; at $x = 9$ this gives $14$, not $20$.\n* Choice C ($y = \\sqrt{4x} + 2$): the $4$ went inside the radical, which is a horizontal change; at $x = 9$ this gives $8$.\n* Choice D ($y = \\sqrt{x} + 8$): only the constant was multiplied; at $x = 9$ this gives $11$.\n\n**Test Day Takeaway:** A vertical stretch multiplies the entire function rule — distribute the factor over every term before comparing choices.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertical-stretch",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-266",
    domain: "advanced-math",
    skills: ["function-transformations"],
    difficulty: "medium",
    type: "fill-in",
    question: "In the $xy$-plane, the graph of $y = f(x)$ has a minimum value of $-6$ and a maximum value of $15$. The function $g$ is defined by $g(x) = 3f(x)$. What is the maximum value of $g$?",
    correctAnswer: "45",
    explanation: "**SAT Pattern: Vertical Stretch**\n\n**The correct answer is $45$.**\n\n**The Fast Way (~15s):** Multiplying every output by the positive number $3$ multiplies the largest output by $3$: $3(15) = 45$.\n\n**The Full Solution:**\nStep 1: For every $x$, $-6 \\le f(x) \\le 15$.\nStep 2: Multiplying an inequality by the positive constant $3$ preserves the direction: $-18 \\le 3f(x) \\le 45$.\nStep 3: So $g(x) \\le 45$, with equality at the input where $f$ reaches $15$. The maximum value of $g$ is $45$. $\\checkmark$\n\n**Common Mistakes:**\n* Answering $18$ adds $3$ to the maximum instead of multiplying by it.\n* Answering $-18$ stretches the MINIMUM, $3(-6)$, which is the smallest output of $g$, not the largest.\n* Answering $5$ divides by $3$ instead of multiplying.\n\n**Test Day Takeaway:** Multiplying by a positive constant scales the maximum and the minimum by that constant and keeps them in the same roles.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertical-stretch",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-267",
    domain: "advanced-math",
    skills: ["function-transformations"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The graph of $y = f(x)$ is shown in the $xy$-plane, and the marked point is the $y$-intercept of the graph. The function $g$ is defined by $g(x) = \\dfrac{1}{3}f(x)$. What is the $y$-intercept of the graph of $y = g(x)$?",
    diagram: { type: "quadraticVertex", params: { vertex: [3, 0], a: 1, showVertex: false, showPoints: [[0, 9]] } },
    choices: [
      { id: "A", text: "$(0, 3)$" },
      // distractor: subtracts $3$ instead of dividing by $3$
      { id: "B", text: "$(0, 6)$" },
      // distractor: adds $3$ to the output
      { id: "C", text: "$(0, 12)$" },
      // distractor: multiplies by $3$ instead of by $\dfrac{1}{3}$
      { id: "D", text: "$(0, 27)$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Vertical Stretch**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The marked point says $f(0) = 9$, so $g(0) = \\dfrac{1}{3}(9) = 3$.\n\n**The Full Solution:**\nStep 1: The $y$-intercept of a graph is the point where $x = 0$. From the figure, that point is $(0, 9)$, so $f(0) = 9$.\nStep 2: $g(0) = \\dfrac{1}{3}f(0) = \\dfrac{1}{3}(9) = 3$.\nStep 3: So the $y$-intercept of $y = g(x)$ is $(0, 3)$. Check: multiplying by $\\dfrac{1}{3}$ pulls every point one third of the way to the $x$-axis, and $3$ is one third of $9$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($(0, 6)$): this computes $9 - 3$, treating the factor as a downward shift.\n* Choice C ($(0, 12)$): this computes $9 + 3$, an upward shift.\n* Choice D ($(0, 27)$): this multiplies by $3$; a factor of $\\dfrac{1}{3}$ compresses the graph toward the axis.\n\n**Test Day Takeaway:** A factor between $0$ and $1$ shrinks outputs toward the $x$-axis. Apply it to the intercept's $y$-coordinate and leave $x = 0$ alone.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertical-stretch",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-268",
    domain: "advanced-math",
    skills: ["function-transformations"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Which of the following describes the relationship between the graph of $y = 0.4f(x)$ and the graph of $y = f(x)$ in the $xy$-plane?",
    choices: [
      { id: "A", text: "Each $y$-coordinate is multiplied by $0.4$, and each $x$-coordinate is unchanged." },
      // distractor: applies the factor to the input instead of the output
      { id: "B", text: "Each $x$-coordinate is multiplied by $0.4$, and each $y$-coordinate is unchanged." },
      // distractor: treats the coefficient as a vertical translation
      { id: "C", text: "Each point is translated $0.4$ unit down." },
      // distractor: divides by the factor instead of multiplying by it
      { id: "D", text: "Each $y$-coordinate is divided by $0.4$, and each $x$-coordinate is unchanged." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Vertical Stretch**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** A coefficient in front of $f$ scales outputs, so each $y$-coordinate is multiplied by $0.4$ while the $x$-coordinates stay put.\n\n**The Full Solution:**\nStep 1: Let $(a, b)$ be on the graph of $y = f(x)$, so $f(a) = b$.\nStep 2: The same input in the new function gives $0.4f(a) = 0.4b$, so $(a, 0.4b)$ is on the new graph.\nStep 3: Only the second coordinate changed, and it changed by a factor of $0.4$. Since $0 < 0.4 < 1$, every point moves closer to the $x$-axis. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: scaling $x$-coordinates comes from a coefficient INSIDE the function, as in $f(0.4x)$.\n* Choice C: a translation requires a constant added to the output, as in $f(x) - 0.4$; a coefficient multiplies instead.\n* Choice D: dividing by $0.4$ multiplies the outputs by $2.5$, stretching the graph away from the axis rather than toward it.\n\n**Test Day Takeaway:** Coefficient outside means multiply the $y$-values; coefficient inside means change the $x$-values.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertical-stretch",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-269",
    domain: "advanced-math",
    skills: ["function-transformations"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The function $f$ is defined by $f(x) = 2x^2 + 12x + 7$, and the function $g$ is defined by $g(x) = 3f(x)$. What is the minimum value of $g$?",
    choices: [
      { id: "A", text: "$-33$" },
      // distractor: finds the minimum of $f$ and forgets the factor of $3$
      { id: "B", text: "$-11$" },
      // distractor: multiplies only the constant term, $3(7)$
      { id: "C", text: "$21$" },
      // distractor: drops the negative sign on the minimum value
      { id: "D", text: "$33$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Vertical Stretch**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** $f(x) = 2(x + 3)^2 - 11$, so the minimum of $f$ is $-11$; tripling every output gives $3(-11) = -33$.\n\n**The Full Solution:**\nStep 1: Complete the square: $f(x) = 2(x^2 + 6x) + 7 = 2\\left[(x + 3)^2 - 9\\right] + 7 = 2(x + 3)^2 - 11$.\nStep 2: Since $2(x + 3)^2 \\ge 0$, the smallest value of $f$ is $-11$, attained at $x = -3$.\nStep 3: Multiplying by the positive constant $3$ scales that smallest value: the minimum of $g$ is $3(-11) = -33$. Check: $g(-3) = 3f(-3) = 3(18 - 36 + 7) = 3(-11) = -33$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-11$): this is the minimum of $f$; the factor of $3$ was never applied.\n* Choice C ($21$): this multiplies only the constant term, $3(7)$, ignoring the vertex form.\n* Choice D ($33$): the sign was dropped; multiplying $-11$ by a positive number keeps it negative.\n\n**Test Day Takeaway:** Find the extreme value of the inner function FIRST, then apply the outside multiplier once — a positive multiplier keeps a minimum a minimum.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertical-stretch",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-270",
    domain: "advanced-math",
    skills: ["function-transformations"],
    difficulty: "hard",
    type: "fill-in",
    question: "The graph of $y = h(x)$ in the $xy$-plane has exactly three $x$-intercepts, at $x = -7$, $x = 1$, and $x = 5$. The function $k$ is defined by $k(x) = -8h(x)$. What is the sum of the $x$-intercepts of the graph of $y = k(x)$?",
    correctAnswer: "-1",
    explanation: "**SAT Pattern: Vertical Stretch**\n\n**The correct answer is $-1$.**\n\n**The Fast Way (~25s):** Multiplying by $-8$ scales outputs but cannot move a zero, so the intercepts are still $-7$, $1$, and $5$, summing to $-1$.\n\n**The Full Solution:**\nStep 1: $k(x) = 0$ exactly when $-8h(x) = 0$, and since $-8 \\ne 0$, that happens exactly when $h(x) = 0$.\nStep 2: So $k$ and $h$ have the same $x$-intercepts: $-7$, $1$, and $5$.\nStep 3: Their sum is $-7 + 1 + 5 = -1$. Check: a point $(a, 0)$ scales to $(a, -8 \\cdot 0) = (a, 0)$ — points already on the $x$-axis stay put. $\\checkmark$\n\n**Common Mistakes:**\n* Answering $8$ multiplies each intercept by $-8$ and then sums $56 - 8 - 40$; the factor scales outputs, not inputs.\n* Answering $1$ negates each intercept, giving $7 - 1 - 5$, which confuses a vertical stretch with a reflection across the $y$-axis.\n* Answering $-8$ reports the scale factor instead of the requested sum.\n\n**Test Day Takeaway:** Multiplying a function by any nonzero constant leaves its zeros exactly where they were — only the shape between the zeros changes.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertical-stretch",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  // ─── COMPOUND INTEREST (bank-am-271..278) ────────────────────────────────
  // Formula: A = P(1 + r/n)^(nt). SAT typically uses annual compounding (n=1).
  // Distinct from generic exponential growth via the financial framing and
  // standard $A = P(1+r)^t$ form.
  {
    id: "bank-am-271",
    domain: "advanced-math",
    skills: ["exponential-functions"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A certificate of deposit is opened with $\\$3{,}200$ and earns $2\\%$ interest, compounded annually. What is the value of the certificate, in dollars, at the end of $1$ year?",
    choices: [
      // distractor: reports the interest earned instead of the new value
      { id: "A", text: "$64$" },
      // distractor: subtracts the $2\%$ instead of adding it
      { id: "B", text: "$3{,}136$" },
      { id: "C", text: "$3{,}264$" },
      // distractor: uses $4\%$, two years' worth of interest
      { id: "D", text: "$3{,}328$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Compound Interest**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** One year of $2\\%$ growth multiplies by $1.02$: $3{,}200(1.02) = 3{,}264$.\n\n**The Full Solution:**\nStep 1: Compounding annually at $2\\%$ means the value after one year is the starting value plus $2\\%$ of it, which is $3{,}200 + 0.02(3{,}200)$.\nStep 2: $0.02(3{,}200) = 64$, so the value is $3{,}200 + 64$.\nStep 3: The value is $3{,}264$ dollars. Check: $3{,}200(1.02) = 3{,}264$, the same number by the multiplier method. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($64$): this is the interest earned in the year, not the value of the certificate.\n* Choice B ($3{,}136$): this subtracts $64$; interest is added to the balance.\n* Choice D ($3{,}328$): this applies $4\\%$, as if two years had passed.\n\n**Test Day Takeaway:** Turn a growth rate into a multiplier ($2\\% \\to 1.02$) and multiply once per compounding period.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "compound-interest",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-272",
    domain: "advanced-math",
    skills: ["exponential-functions"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A deposit of $\\$4{,}500$ is made into an account that earns $3\\%$ interest, compounded annually, and no further deposits or withdrawals are made. Which of the following gives the account balance $B(t)$, in dollars, $t$ years after the deposit?",
    choices: [
      // distractor: uses the rate itself as the multiplier, which shrinks the balance
      { id: "A", text: "$B(t) = 4{,}500(0.03)^t$" },
      { id: "B", text: "$B(t) = 4{,}500(1.03)^t$" },
      // distractor: misplaces the decimal point, modeling $30\%$ growth
      { id: "C", text: "$B(t) = 4{,}500(1.3)^t$" },
      // distractor: models simple interest, adding the same $\$135$ every year
      { id: "D", text: "$B(t) = 4{,}500 + 135t$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Compound Interest**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Compound growth is (starting amount)(multiplier)$^t$, and a $3\\%$ increase has multiplier $1 + 0.03 = 1.03$.\n\n**The Full Solution:**\nStep 1: Each year the balance is multiplied by $1 + r$, where $r = 0.03$ is the annual rate written as a decimal.\nStep 2: After $t$ years the starting amount has been multiplied by that factor $t$ times, giving $B(t) = 4{,}500(1.03)^t$.\nStep 3: Check with $t = 1$: $4{,}500(1.03) = 4{,}635$, which is $4{,}500$ plus $3\\%$ of $4{,}500$, or $\\$135$ of interest. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($B(t) = 4{,}500(0.03)^t$): a base of $0.03$ makes the balance shrink to $\\$135$ after one year.\n* Choice C ($B(t) = 4{,}500(1.3)^t$): a base of $1.3$ is $30\\%$ growth per year, ten times the stated rate.\n* Choice D ($B(t) = 4{,}500 + 135t$): this is simple interest — the same $\\$135$ each year — so it never earns interest on interest.\n\n**Test Day Takeaway:** Compound growth is multiplicative and lives in the exponent; simple interest is additive and lives in a linear term.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "compound-interest",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-273",
    domain: "advanced-math",
    skills: ["exponential-functions"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A principal of $\\$1{,}800$ is invested in a bond fund that earns $7\\%$ interest, compounded annually. To the nearest dollar, what is the value of the investment, in dollars, after $4$ years?",
    choices: [
      // distractor: uses an exponent of $3$ instead of $4$
      { id: "A", text: "$2{,}205$" },
      // distractor: uses simple interest: $1{,}800(1 + 0.07 \cdot 4)$
      { id: "B", text: "$2{,}304$" },
      { id: "C", text: "$2{,}359$" },
      // distractor: multiplies by $1.07$ once and then by $4$
      { id: "D", text: "$7{,}704$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Compound Interest**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** $1{,}800(1.07)^4 \\approx 1{,}800(1.3108) \\approx 2{,}359$.\n\n**The Full Solution:**\nStep 1: Annual compounding at $7\\%$ multiplies the balance by $1.07$ each year, so after $4$ years the value is $1{,}800(1.07)^4$.\nStep 2: $(1.07)^4 \\approx 1.310796$.\nStep 3: $1{,}800(1.310796) \\approx 2{,}359.43$, which is $\\$2{,}359$ to the nearest dollar. Check: the interest earned, about $\\$559$, is more than $4$ years of simple interest ($\\$504$), as compounding requires. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2{,}205$): this is $1{,}800(1.07)^3 \\approx 2{,}205$ — one compounding period short.\n* Choice B ($2{,}304$): this is simple interest, $1{,}800(1.28)$, which ignores interest earned on interest.\n* Choice D ($7{,}704$): this computes $1{,}800(1.07)(4)$, multiplying by the number of years instead of raising to that power.\n\n**Test Day Takeaway:** The number of periods belongs in the EXPONENT. If your answer is several times the principal after a few years at a small rate, you multiplied when you should have raised a power.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "compound-interest",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-274",
    domain: "advanced-math",
    skills: ["exponential-functions"],
    difficulty: "medium",
    type: "fill-in",
    question: "A college fund earns $6\\%$ interest, compounded annually. What amount, in dollars, must be deposited today so that the fund is worth $\\$5{,}618$ after $2$ years?",
    correctAnswer: "5000",
    explanation: "**SAT Pattern: Compound Interest**\n\n**The correct answer is $5000$.**\n\n**The Fast Way (~25s):** Undo two years of growth by dividing: $\\dfrac{5{,}618}{(1.06)^2} = \\dfrac{5{,}618}{1.1236} = 5{,}000$.\n\n**The Full Solution:**\nStep 1: Let $P$ be the deposit. Two years of annual compounding at $6\\%$ gives $P(1.06)^2 = 5{,}618$.\nStep 2: $(1.06)^2 = 1.1236$, so $1.1236P = 5{,}618$.\nStep 3: $P = \\dfrac{5{,}618}{1.1236} = 5{,}000$. Check forward: $5{,}000(1.06) = 5{,}300$ and $5{,}300(1.06) = 5{,}618$. $\\checkmark$\n\n**Common Mistakes:**\n* Multiplying instead of dividing gives $5{,}618(1.1236) \\approx 6{,}312$, a future value rather than a present one.\n* Subtracting $12\\%$ of $\\$5{,}618$ gives about $\\$4{,}944$; percent decrease and percent increase do not undo each other.\n* Dividing by $1.12$ (two years of simple interest) gives about $\\$5{,}016$, missing the interest earned on interest.\n\n**Test Day Takeaway:** To move money backward in time, DIVIDE by the growth factor once per period; adding and subtracting the same percent never cancels.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "compound-interest",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-275",
    domain: "advanced-math",
    skills: ["exponential-functions", "function-interpretation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The function $V(t) = 6{,}000(1.05)^t$ gives the value, in dollars, of a retirement account $t$ years after it was opened, and the table shows three of its values. Which of the following is the best interpretation of $1.05$ in this context?",
    diagram: { type: "dataTable", params: { headers: ["t (years)", "V(t) (dollars)"], rows: [["0", "6,000"], ["1", "6,300"], ["2", "6,615"]] } },
    choices: [
      // distractor: reads the multiplier as a dollar amount
      { id: "A", text: "The account's value increases by $\\$1.05$ each year." },
      { id: "B", text: "The account's value increases by $5\\%$ each year." },
      // distractor: reads the whole multiplier as the percent increase instead of the part above $1$
      { id: "C", text: "The account's value increases by $105\\%$ each year." },
      // distractor: confuses the multiplier with the initial value
      { id: "D", text: "The account's value when it was opened was $\\$1.05$." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Compound Interest**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** In $a(b)^t$, the base $b = 1.05$ means each year's value is $1.05$ times the previous one — a $5\\%$ increase per year.\n\n**The Full Solution:**\nStep 1: Increasing a quantity by $r$ (as a decimal) multiplies it by $1 + r$. Here $1 + r = 1.05$, so $r = 0.05$.\nStep 2: As a percent, $r = 5\\%$, and the exponent $t$ counts years, so the increase happens once per year.\nStep 3: The table confirms it: $\\dfrac{6{,}300}{6{,}000} = 1.05$ and $\\dfrac{6{,}615}{6{,}300} = 1.05$, a constant $5\\%$ rise each year. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$1.05$ each year): the base is a multiplier, not a dollar amount; the first year adds $\\$300$, not $\\$1.05$.\n* Choice C ($105\\%$ each year): that would multiply the value by $2.05$ each year, more than doubling it.\n* Choice D (opening value $\\$1.05$): the opening value is the coefficient $6{,}000$, the value at $t = 0$.\n\n**Test Day Takeaway:** In an exponential model, the coefficient is the starting amount and the base minus $1$ is the percent change per period.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "compound-interest",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-276",
    domain: "advanced-math",
    skills: ["exponential-functions"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A money-market account earns interest at a constant annual rate, compounded annually. The table gives the balance in the account at the end of each of the first two years. What is the annual interest rate?",
    diagram: { type: "dataTable", params: { headers: ["End of year", "Balance (dollars)"], rows: [["1", "5,400"], ["2", "5,832"]] } },
    choices: [
      // distractor: splits the one-year increase across two years
      { id: "A", text: "$4\\%$" },
      // distractor: divides the increase by the later balance instead of the earlier one
      { id: "B", text: "$7.4\\%$" },
      { id: "C", text: "$8\\%$" },
      // distractor: doubles the annual rate, as if the table spanned two years of growth
      { id: "D", text: "$16\\%$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Compound Interest**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** $\\dfrac{5{,}832}{5{,}400} = 1.08$, so the balance grows by $8\\%$ in one year.\n\n**The Full Solution:**\nStep 1: Consecutive balances differ by exactly one year of compounding, so their ratio is the growth multiplier $1 + r$.\nStep 2: $\\dfrac{5{,}832}{5{,}400} = 1.08$, so $1 + r = 1.08$ and $r = 0.08$.\nStep 3: As a percent, the annual rate is $8\\%$. Check: the increase is $5{,}832 - 5{,}400 = 432$, and $\\dfrac{432}{5{,}400} = 0.08$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4\\%$): this halves the $\\$432$ increase, as if it had accumulated over two years; the table already shows a single year of growth.\n* Choice B ($7.4\\%$): this computes $\\dfrac{432}{5{,}832} \\approx 0.074$, dividing by the ending balance instead of the starting one.\n* Choice D ($16\\%$): this doubles the correct rate, treating the two listed balances as two years of growth from the original deposit.\n\n**Test Day Takeaway:** For a constant compound rate, divide any balance by the one from the period before; percent change is always measured against the EARLIER amount.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "compound-interest",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-277",
    domain: "advanced-math",
    skills: ["exponential-functions"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A trust account earns $9\\%$ interest, compounded annually, and no deposits or withdrawals are made. Which of the following is closest to the number of years required for the value of the account to triple?",
    choices: [
      // distractor: finds the time to double rather than to triple
      { id: "A", text: "$8$" },
      { id: "B", text: "$13$" },
      // distractor: computes $\dfrac{200}{9}$, treating the growth as simple interest
      { id: "C", text: "$22$" },
      // distractor: computes $\dfrac{300}{9}$, dividing the target percent by the rate
      { id: "D", text: "$33$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Compound Interest**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** Solve $(1.09)^t = 3$. Since $(1.09)^{12} \\approx 2.81$ and $(1.09)^{13} \\approx 3.07$, the value first reaches triple near $t = 13$.\n\n**The Full Solution:**\nStep 1: Let $P$ be the starting value. After $t$ years the account holds $P(1.09)^t$, and tripling means $P(1.09)^t = 3P$, so $(1.09)^t = 3$.\nStep 2: Test values: $(1.09)^{10} \\approx 2.37$, $(1.09)^{12} \\approx 2.81$, $(1.09)^{13} \\approx 3.07$.\nStep 3: The multiplier passes $3$ between $t = 12$ and $t = 13$, and $3.07$ is closer to $3$ than $2.81$ is, so $13$ years is closest. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): $(1.09)^8 \\approx 1.99$ — that is the doubling time, not the tripling time.\n* Choice C ($22$): this divides $200$ by $9$, which would be right only for simple interest on the original $200\\%$ gain.\n* Choice D ($33$): this divides $300$ by $9$, mistaking the target multiple for a percent to be divided by the rate.\n\n**Test Day Takeaway:** \"Doubles/triples\" means the MULTIPLIER hits $2$ or $3$; set $(1 + r)^t$ equal to that number and test exponents rather than dividing percents.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "compound-interest",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-278",
    domain: "advanced-math",
    skills: ["exponential-functions"],
    difficulty: "hard",
    type: "fill-in",
    question: "A deposit of $\\$4{,}000$ into a mutual fund grows to $\\$4{,}840$ after $2$ years, with interest compounded annually at a constant rate $r$. What is the value of $r$, expressed as a percent?",
    correctAnswer: "10",
    explanation: "**SAT Pattern: Compound Interest**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~30s):** $\\dfrac{4{,}840}{4{,}000} = 1.21$, and $\\sqrt{1.21} = 1.1$, so the annual rate is $10\\%$.\n\n**The Full Solution:**\nStep 1: Two years of annual compounding gives $4{,}000(1 + r)^2 = 4{,}840$.\nStep 2: Dividing both sides by $4{,}000$ gives $(1 + r)^2 = 1.21$, so $1 + r = 1.1$ (the rate is positive).\nStep 3: Then $r = 0.1$, or $10\\%$. Check: $4{,}000(1.1) = 4{,}400$ and $4{,}400(1.1) = 4{,}840$. $\\checkmark$\n\n**Common Mistakes:**\n* Answering $21$ uses the total two-year increase, $\\dfrac{840}{4{,}000} = 21\\%$, as if it were one year's rate.\n* Answering $10.5$ splits that $21\\%$ evenly across the two years; compounding is multiplicative, so you take a square root, not a half.\n* Forgetting to divide by the principal first and taking $\\sqrt{4{,}840}$ produces a meaningless number, not a rate.\n\n**Test Day Takeaway:** With two compounding periods, isolate $(1 + r)^2$ and take the square root — never divide the total percent change by the number of years.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "compound-interest",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  // ─── RATIONAL EQUATION WITH EXTRANEOUS SOLUTION (bank-am-279..286) ───────
  // Solving a rational equation can produce candidates that fail the original
  // (denominator-zero). The pattern: solve, check, identify extraneous roots.
  {
    id: "bank-am-279",
    domain: "advanced-math",
    skills: ["rational-expressions"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The equation $\\dfrac{x^2 - 49}{x + 7} = 4$ has exactly one solution. What is that solution?",
    choices: [
      // distractor: reports the value excluded from the domain
      { id: "A", text: "$-7$" },
      // distractor: cancels to $x + 7 = 4$ instead of $x - 7 = 4$
      { id: "B", text: "$-3$" },
      // distractor: copies the right-hand side
      { id: "C", text: "$4$" },
      { id: "D", text: "$11$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Rational Equation with Extraneous Solution**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** $\\dfrac{(x + 7)(x - 7)}{x + 7} = x - 7$ for $x \\ne -7$, so $x - 7 = 4$ and $x = 11$.\n\n**The Full Solution:**\nStep 1: Factor the numerator as a difference of squares: $x^2 - 49 = (x + 7)(x - 7)$. The denominator forces $x \\ne -7$.\nStep 2: Cancel the common factor $x + 7$, leaving $x - 7 = 4$.\nStep 3: So $x = 11$, and $11 \\ne -7$, so it is in the domain. Check: $\\dfrac{121 - 49}{18} = \\dfrac{72}{18} = 4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-7$): this is the value that makes the denominator zero, so it can never be a solution.\n* Choice B ($-3$): this cancels the wrong factor and solves $x + 7 = 4$.\n* Choice C ($4$): this copies the number on the right side instead of solving for $x$.\n\n**Test Day Takeaway:** Factor and cancel first, but record the excluded value before you cancel — it is the classic trap answer.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "rational-equation-with-extraneous-solution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-280",
    domain: "advanced-math",
    skills: ["rational-expressions"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The equation $\\dfrac{x - 3}{x + 4} = \\dfrac{-7}{x + 4}$ is given, where $x$ is a real number. How many solutions does the equation have?",
    choices: [
      { id: "A", text: "Zero" },
      // distractor: accepts $x = -4$ without testing it in the original equation
      { id: "B", text: "Exactly one" },
      // distractor: expects a second solution from clearing the denominators
      { id: "C", text: "Exactly two" },
      // distractor: treats the matching denominators as making the equation an identity
      { id: "D", text: "Infinitely many" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Rational Equation with Extraneous Solution**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Equal denominators force $x - 3 = -7$, so $x = -4$ — exactly the value the denominator forbids. No solutions remain.\n\n**The Full Solution:**\nStep 1: The expression $\\dfrac{1}{x + 4}$ is undefined at $x = -4$, so $x = -4$ is excluded from the domain of the equation.\nStep 2: For $x \\ne -4$, multiply both sides by $x + 4$: $x - 3 = -7$, so $x = -4$.\nStep 3: That candidate is excluded, so it is extraneous and the equation has no solution. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B (exactly one): this reports $x = -4$ without checking it against the domain; substituting gives $\\dfrac{-7}{0}$, which is undefined.\n* Choice C (exactly two): clearing the denominators leaves a linear equation, which cannot have two solutions.\n* Choice D (infinitely many): the two sides have equal denominators but different numerators, so they are never equal.\n\n**Test Day Takeaway:** List the excluded values BEFORE solving. When the only candidate is on that list, the answer is zero solutions.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "rational-equation-with-extraneous-solution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-281",
    domain: "advanced-math",
    skills: ["rational-expressions"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the equation $\\dfrac{2}{x - 4} + \\dfrac{3}{x + 4} = \\dfrac{16}{x^2 - 16}$, $x$ is a real number. Which of the following gives all solutions of the equation?",
    choices: [
      // distractor: names an excluded value that never arises from the algebra
      { id: "A", text: "$-4$ only" },
      // distractor: solves correctly but keeps $x = 4$, which makes two denominators zero
      { id: "B", text: "$4$ only" },
      // distractor: keeps both excluded values
      { id: "C", text: "$-4$ and $4$" },
      { id: "D", text: "The equation has no solution." }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Rational Equation with Extraneous Solution**\n\n**Choice D is correct.**\n\n**The Fast Way (~35s):** Clearing the denominators gives $5x - 4 = 16$, so $x = 4$ — a value that makes $x - 4$ and $x^2 - 16$ zero. It is extraneous, so nothing survives.\n\n**The Full Solution:**\nStep 1: Factor the right denominator: $x^2 - 16 = (x - 4)(x + 4)$. So $x \\ne 4$ and $x \\ne -4$.\nStep 2: Multiply every term by $(x - 4)(x + 4)$: $2(x + 4) + 3(x - 4) = 16$, which simplifies to $2x + 8 + 3x - 12 = 16$, or $5x - 4 = 16$.\nStep 3: Then $5x = 20$ and $x = 4$. Because $x = 4$ is excluded, it is extraneous and the equation has no solution. Check: substituting $4$ gives $\\dfrac{2}{0}$, which is undefined. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$ only): $-4$ is excluded from the domain, and it is not even produced by the algebra.\n* Choice B ($4$ only): this is the candidate the algebra produces, but it must be rejected because it makes denominators zero.\n* Choice C ($-4$ and $4$): both are excluded values, so neither can be a solution.\n\n**Test Day Takeaway:** Clearing denominators can manufacture a solution. Always test the candidate against the excluded values before answering.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "rational-equation-with-extraneous-solution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-282",
    domain: "advanced-math",
    skills: ["rational-expressions"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "For what value of $x$ is $\\dfrac{x + 14}{x - 2} = 5$ true, where $x$ is a real number?",
    choices: [
      // distractor: sign slip when collecting the $x$-terms
      { id: "A", text: "$-6$" },
      // distractor: reports the value excluded from the domain
      { id: "B", text: "$2$" },
      // distractor: fails to distribute the $5$ over the $-2$
      { id: "C", text: "$3.5$" },
      { id: "D", text: "$6$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Rational Equation with Extraneous Solution**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Cross-multiply: $x + 14 = 5(x - 2) = 5x - 10$, so $24 = 4x$ and $x = 6$.\n\n**The Full Solution:**\nStep 1: The denominator forces $x \\ne 2$. For any other $x$, multiply both sides by $x - 2$: $x + 14 = 5(x - 2)$.\nStep 2: Distribute and collect: $x + 14 = 5x - 10$, so $14 + 10 = 5x - x$, giving $24 = 4x$.\nStep 3: Then $x = 6$, which is in the domain. Check: $\\dfrac{6 + 14}{6 - 2} = \\dfrac{20}{4} = 5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): the sign flipped while moving terms, turning $24 = 4x$ into $-24 = 4x$.\n* Choice B ($2$): this is the excluded value; substituting it makes the denominator zero.\n* Choice C ($3.5$): this comes from $x + 14 = 5x$, forgetting to multiply the $5$ by $-2$; then $14 = 4x$.\n\n**Test Day Takeaway:** Distribute across the whole binomial when you clear a denominator, and confirm the answer is not the excluded value.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "rational-equation-with-extraneous-solution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-283",
    domain: "advanced-math",
    skills: ["rational-expressions"],
    difficulty: "medium",
    type: "fill-in",
    question: "What value of $x$ satisfies the equation $\\dfrac{2x}{x - 3} = \\dfrac{9}{x - 3} + 1$?",
    correctAnswer: "6",
    explanation: "**SAT Pattern: Rational Equation with Extraneous Solution**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~25s):** Multiply everything by $x - 3$: $2x = 9 + (x - 3)$, so $2x = x + 6$ and $x = 6$.\n\n**The Full Solution:**\nStep 1: The denominators exclude $x = 3$. For $x \\ne 3$, multiply each term by $x - 3$, including the lone $1$ on the right.\nStep 2: That gives $2x = 9 + (x - 3)$, which simplifies to $2x = x + 6$.\nStep 3: Subtracting $x$ gives $x = 6$, which is in the domain. Check: $\\dfrac{12}{3} = 4$ and $\\dfrac{9}{3} + 1 = 3 + 1 = 4$. $\\checkmark$\n\n**Common Mistakes:**\n* Leaving the $1$ unmultiplied gives $2x = 9 + 1$, so $x = 5$ — and $\\dfrac{10}{2} = 5$ while $\\dfrac{9}{2} + 1 = 5.5$, so $5$ fails the check.\n* Answering $3$ reports the excluded value, which makes both denominators zero.\n* Answering $9$ cancels the denominators as if the equation read $2x = 9$, ignoring the $+1$.\n\n**Test Day Takeaway:** When you clear denominators, multiply EVERY term — the constant term is the one most often forgotten.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "rational-equation-with-extraneous-solution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-284",
    domain: "advanced-math",
    skills: ["rational-expressions"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "For which values of $x$ is the expression $\\dfrac{x + 8}{x^2 - 4x - 21}$ undefined?",
    choices: [
      // distractor: sets the numerator equal to zero
      { id: "A", text: "$-8$ only" },
      // distractor: factors with the signs reversed
      { id: "B", text: "$-7$ and $3$" },
      { id: "C", text: "$-3$ and $7$" },
      // distractor: includes the numerator's zero along with the denominator's
      { id: "D", text: "$-8$, $-3$, and $7$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Rational Equation with Extraneous Solution**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** A fraction is undefined only where its denominator is $0$: $x^2 - 4x - 21 = (x - 7)(x + 3) = 0$ at $x = 7$ and $x = -3$.\n\n**The Full Solution:**\nStep 1: The expression is undefined exactly when the denominator equals $0$; the numerator plays no role.\nStep 2: Factor: two numbers with product $-21$ and sum $-4$ are $-7$ and $3$, so $x^2 - 4x - 21 = (x - 7)(x + 3)$.\nStep 3: Setting each factor to zero gives $x = 7$ and $x = -3$. Check: $(7)^2 - 4(7) - 21 = 49 - 28 - 21 = 0$ and $(-3)^2 - 4(-3) - 21 = 9 + 12 - 21 = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-8$ only): $x = -8$ makes the NUMERATOR zero, which makes the expression equal $0$, not undefined.\n* Choice B ($-7$ and $3$): the signs of the factors were reversed; $(x + 7)(x - 3) = x^2 + 4x - 21$, not the given denominator.\n* Choice D ($-8$, $-3$, and $7$): this adds the numerator's zero to the correct list.\n\n**Test Day Takeaway:** \"Undefined\" is a denominator question. Factor the denominator, set it to zero, and ignore the numerator entirely.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "rational-equation-with-extraneous-solution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-285",
    domain: "advanced-math",
    skills: ["rational-expressions"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "For which value of $x$ are the two sides of the equation $\\dfrac{x^2}{x + 6} = \\dfrac{36}{x + 6} - 5$ equal?",
    choices: [
      // distractor: the extraneous root, which makes both denominators zero
      { id: "A", text: "$-6$" },
      // distractor: factors $x^2 + 5x - 6$ as $(x + 1)(x - 6)$ and takes the negative root
      { id: "B", text: "$-1$" },
      { id: "C", text: "$1$" },
      // distractor: uses that same reversed factoring and takes the positive root
      { id: "D", text: "$6$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Rational Equation with Extraneous Solution**\n\n**Choice C is correct.**\n\n**The Fast Way (~45s):** Multiplying by $x + 6$ gives $x^2 = 6 - 5x$, so $(x + 6)(x - 1) = 0$. The root $x = -6$ is excluded, leaving $x = 1$.\n\n**The Full Solution:**\nStep 1: The denominators exclude $x = -6$. For every other $x$, multiply each term by $x + 6$: $x^2 = 36 - 5(x + 6)$.\nStep 2: Simplify: $x^2 = 36 - 5x - 30 = 6 - 5x$, so $x^2 + 5x - 6 = 0$, which factors as $(x + 6)(x - 1) = 0$.\nStep 3: The candidates are $x = -6$ and $x = 1$; the first is excluded, so only $x = 1$ works. Check: $\\dfrac{1}{7}$ on the left, and $\\dfrac{36}{7} - 5 = \\dfrac{36 - 35}{7} = \\dfrac{1}{7}$ on the right. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): this root comes out of the algebra but makes both denominators zero, so it is extraneous.\n* Choice B ($-1$): this comes from factoring $x^2 + 5x - 6$ as $(x + 1)(x - 6)$, which expands to $x^2 - 5x - 6$.\n* Choice D ($6$): this is the other root of that same incorrect factoring.\n\n**Test Day Takeaway:** Multiplying by a variable denominator can create a root that was never legal. Factor, then delete any candidate that zeroes a denominator.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "rational-equation-with-extraneous-solution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-286",
    domain: "advanced-math",
    skills: ["rational-expressions"],
    difficulty: "hard",
    type: "fill-in",
    question: "What is the solution to the equation $\\dfrac{2x^2 + x}{x + 5} = \\dfrac{45}{x + 5}$, where $x$ is a real number?",
    correctAnswer: "4.5",
    explanation: "**SAT Pattern: Rational Equation with Extraneous Solution**\n\n**The correct answer is $4.5$.**\n\n**The Fast Way (~45s):** Equal denominators give $2x^2 + x = 45$, so $(2x - 9)(x + 5) = 0$. The root $x = -5$ is excluded, leaving $x = 4.5$.\n\n**The Full Solution:**\nStep 1: The denominator $x + 5$ excludes $x = -5$. For every other $x$, the two fractions are equal exactly when their numerators are equal: $2x^2 + x = 45$.\nStep 2: Rearrange: $2x^2 + x - 45 = 0$. Factoring gives $(2x - 9)(x + 5) = 0$, so $x = \\dfrac{9}{2}$ or $x = -5$.\nStep 3: Discard $x = -5$ as extraneous. The solution is $x = 4.5$. Check: $2(4.5)^2 + 4.5 = 40.5 + 4.5 = 45$, and $4.5 + 5 = 9.5 \\ne 0$. $\\checkmark$\n\n**Common Mistakes:**\n* Answering $-5$ reports the extraneous root; substituting it gives $\\dfrac{45}{0}$, which is undefined.\n* Answering $9$ solves $2x - 9 = 0$ as $2x = 9$ and then forgets to divide by $2$.\n* Answering $-4.5$ flips the sign of the valid root; $2(-4.5)^2 + (-4.5) = 40.5 - 4.5 = 36 \\ne 45$.\n\n**Test Day Takeaway:** When both sides share a denominator, set the numerators equal — then check every root against the value that denominator forbids.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "rational-equation-with-extraneous-solution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  // ─── P.A. FACTOR BY GROUPING (bank-am-287..290) ──────────────────────────
  // Group terms to extract common factors; technique for factoring polynomials
  // that have no overall GCF.
  {
    id: "bank-am-287",
    domain: "advanced-math",
    skills: ["factoring"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Which of the following is equivalent to $x^3 + 5x^2 + 4x + 20$ for all values of $x$?",
    choices: [
      // distractor: swaps the two constants between the factors
      { id: "A", text: "$(x + 4)(x^2 + 5)$" },
      // distractor: takes $-4$ out of the second pair instead of $+4$
      { id: "B", text: "$(x + 5)(x^2 - 4)$" },
      { id: "C", text: "$(x + 5)(x^2 + 4)$" },
      // distractor: reverses the sign of the common binomial factor
      { id: "D", text: "$(x - 5)(x^2 + 4)$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Factor by Grouping**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Group as $x^2(x + 5) + 4(x + 5)$, then pull out the common $(x + 5)$: $(x + 5)(x^2 + 4)$.\n\n**The Full Solution:**\nStep 1: Split the four terms into two pairs: $(x^3 + 5x^2) + (4x + 20)$.\nStep 2: Factor each pair: $x^2(x + 5) + 4(x + 5)$. Both pairs now share the factor $x + 5$.\nStep 3: Factor it out: $(x + 5)(x^2 + 4)$. Check by expanding: $x^3 + 4x + 5x^2 + 20$, which matches the original. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(x + 4)(x^2 + 5)$): the constants were exchanged; expanding gives $x^3 + 4x^2 + 5x + 20$.\n* Choice B ($(x + 5)(x^2 - 4)$): the second pair was factored as $4(x + 5)$ but recorded with a minus sign; expanding gives $x^3 + 5x^2 - 4x - 20$.\n* Choice D ($(x - 5)(x^2 + 4)$): the shared factor is $x + 5$, not $x - 5$; expanding gives $x^3 - 5x^2 + 4x - 20$.\n\n**Test Day Takeaway:** After factoring each pair, the leftover binomials must be IDENTICAL. If they are not, regroup or change the sign you pulled out.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "factor-by-grouping",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-288",
    domain: "advanced-math",
    skills: ["factoring"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The expression $3x^3 - 2x^2 + 15x - 10$ is equivalent to which of the following products?",
    choices: [
      // distractor: pulls $-5$ out of the second pair instead of $+5$
      { id: "A", text: "$(3x - 2)(x^2 - 5)$" },
      { id: "B", text: "$(3x - 2)(x^2 + 5)$" },
      // distractor: reverses the sign inside the common factor
      { id: "C", text: "$(3x + 2)(x^2 + 5)$" },
      // distractor: pairs the terms in the wrong order
      { id: "D", text: "$(x^2 - 2)(3x + 5)$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Factor by Grouping**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $x^2(3x - 2) + 5(3x - 2) = (3x - 2)(x^2 + 5)$.\n\n**The Full Solution:**\nStep 1: Pair the terms: $(3x^3 - 2x^2) + (15x - 10)$.\nStep 2: Factor each pair: $x^2(3x - 2) + 5(3x - 2)$. The binomial $3x - 2$ is common to both.\nStep 3: Factor it out: $(3x - 2)(x^2 + 5)$. Check by expanding: $3x^3 + 15x - 2x^2 - 10$, which matches. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(3x - 2)(x^2 - 5)$): expanding gives $3x^3 - 2x^2 - 15x + 10$; the last two signs are wrong.\n* Choice C ($(3x + 2)(x^2 + 5)$): expanding gives $3x^3 + 2x^2 + 15x + 10$; the common factor is $3x - 2$.\n* Choice D ($(x^2 - 2)(3x + 5)$): expanding gives $3x^3 + 5x^2 - 6x - 10$, so this grouping does not reproduce the expression.\n\n**Test Day Takeaway:** Verify a grouped factorization by expanding it mentally — matching the first and last terms is not enough, the middle terms must match too.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "factor-by-grouping",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-289",
    domain: "advanced-math",
    skills: ["factoring"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Which of the following is a factor of the polynomial $x^3 - 6x^2 + 7x - 42$?",
    choices: [
      // distractor: reads the coefficient $7$ as a root
      { id: "A", text: "$x - 7$" },
      { id: "B", text: "$x - 6$" },
      // distractor: reverses the sign of the common binomial
      { id: "C", text: "$x + 6$" },
      // distractor: combines both sign errors
      { id: "D", text: "$x + 7$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Factor by Grouping**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $x^2(x - 6) + 7(x - 6) = (x - 6)(x^2 + 7)$, so $x - 6$ is a factor.\n\n**The Full Solution:**\nStep 1: Pair the terms: $(x^3 - 6x^2) + (7x - 42)$.\nStep 2: Factor each pair: $x^2(x - 6) + 7(x - 6)$, so the shared binomial is $x - 6$.\nStep 3: The full factorization is $(x - 6)(x^2 + 7)$, so $x - 6$ is a factor. Check with the factor theorem: $6^3 - 6(6)^2 + 7(6) - 42 = 216 - 216 + 42 - 42 = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x - 7$): substituting $x = 7$ gives $343 - 294 + 49 - 42 = 56 \\ne 0$; the $7$ ends up inside $x^2 + 7$, which has no real zeros.\n* Choice C ($x + 6$): substituting $x = -6$ gives $-216 - 216 - 42 - 42 = -516 \\ne 0$.\n* Choice D ($x + 7$): substituting $x = -7$ gives $-343 - 294 - 49 - 42 = -728 \\ne 0$.\n\n**Test Day Takeaway:** A linear factor $x - r$ means $r$ is a zero. Group to find the factor, then confirm by substituting $r$ — the arithmetic is fast and decisive.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "factor-by-grouping",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-am-290",
    domain: "advanced-math",
    skills: ["factoring"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The expression $10x^3 - 15x^2 - 8x + 12$ can be written as $(ax + b)(cx^2 + d)$, where $a$, $b$, $c$, and $d$ are integer constants. What is the value of $a + b + c + d$?",
    choices: [
      { id: "A", text: "$0$" },
      // distractor: records $b$ as $+3$ instead of $-3$
      { id: "B", text: "$6$" },
      // distractor: records $d$ as $+4$ instead of $-4$
      { id: "C", text: "$8$" },
      // distractor: makes both constants positive
      { id: "D", text: "$14$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Factor by Grouping**\n\n**Choice A is correct.**\n\n**The Fast Way (~45s):** $5x^2(2x - 3) - 4(2x - 3) = (2x - 3)(5x^2 - 4)$, so $a + b + c + d = 2 - 3 + 5 - 4 = 0$.\n\n**The Full Solution:**\nStep 1: Pair the terms: $(10x^3 - 15x^2) + (-8x + 12)$.\nStep 2: Factor each pair, watching the sign: $5x^2(2x - 3) - 4(2x - 3)$. Pulling out $-4$ (not $+4$) is what makes the second binomial match the first.\nStep 3: Factor out the common binomial: $(2x - 3)(5x^2 - 4)$, so $a = 2$, $b = -3$, $c = 5$, $d = -4$ and the sum is $2 + (-3) + 5 + (-4) = 0$. Check by expanding: $10x^3 - 8x - 15x^2 + 12$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($6$): this uses $b = 3$, giving $2 + 3 + 5 - 4 = 6$; but $(2x + 3)$ does not match the first pair.\n* Choice C ($8$): this uses $d = 4$, giving $2 - 3 + 5 + 4 = 8$; factoring $+4$ out of $-8x + 12$ leaves $-2x + 3$, not $2x - 3$.\n* Choice D ($14$): both signs were dropped, giving $2 + 3 + 5 + 4 = 14$.\n\n**Test Day Takeaway:** When the third term is negative, factor out a NEGATIVE constant so the two binomials match — then read the constants with their signs attached.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "factor-by-grouping",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  // ─── P.A. COMPLETING THE SQUARE (bank-am-291..298) — new canonical ────────
  // Forward direction: ax² + bx + c → a(x − h)² + k. Distinct from
  // vertex-form-to-standard-form (reverse direction; we already have that).
  {
    id: "bank-am-291",
    domain: "advanced-math",
    skills: ["quadratics"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The function $f$ is defined by $f(x) = x^2 + 10x + 18$. Which of the following equivalent forms of $f(x)$ displays the minimum value of $f$ as a constant?",
    choices: [
      { id: "A", text: "$(x + 5)^2 - 7$" },
      // distractor: adds the leftover $7$ instead of subtracting it
      { id: "B", text: "$(x + 5)^2 + 7$" },
      // distractor: keeps the original constant and never subtracts the $25$
      { id: "C", text: "$(x + 5)^2 + 18$" },
      // distractor: uses $b$ instead of $\dfrac{b}{2}$ inside the square
      { id: "D", text: "$(x + 10)^2 - 82$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Completing the Square**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Half of $10$ is $5$, and $(x + 5)^2 = x^2 + 10x + 25$, which is $7$ too big — so $f(x) = (x + 5)^2 - 7$.\n\n**The Full Solution:**\nStep 1: To complete the square on $x^2 + 10x$, take half the coefficient of $x$: $\\dfrac{10}{2} = 5$, and note $(x + 5)^2 = x^2 + 10x + 25$.\nStep 2: Rewrite: $f(x) = (x^2 + 10x + 25) - 25 + 18 = (x + 5)^2 - 7$.\nStep 3: Since $(x + 5)^2 \\ge 0$, the smallest value of $f$ is $-7$, displayed as the constant. Check: $f(-5) = 25 - 50 + 18 = -7$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($(x + 5)^2 + 7$): expanding gives $x^2 + 10x + 32$; the $25$ must be SUBTRACTED after it is added.\n* Choice C ($(x + 5)^2 + 18$): the original constant was carried along untouched, giving $x^2 + 10x + 43$.\n* Choice D ($(x + 10)^2 - 82$): this squares $b$ itself instead of $\\dfrac{b}{2}$, giving $x^2 + 20x + 18$.\n\n**Test Day Takeaway:** Halve the $x$-coefficient, square it, add and subtract it. Expanding your answer takes five seconds and catches every version of this slip.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "completing-the-square",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-292",
    domain: "advanced-math",
    skills: ["quadratics"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The graph of $y = x^2 - 6x + 2$ is shown in the $xy$-plane. Which of the following equivalent forms of the equation displays the coordinates of the vertex as constants?",
    diagram: { type: "quadraticVertex", params: { vertex: [3, -7], a: 1, showVertex: true } },
    choices: [
      { id: "A", text: "$y = (x - 3)^2 - 7$" },
      // distractor: keeps the original constant term
      { id: "B", text: "$y = (x - 3)^2 + 2$" },
      // distractor: adds $9$ instead of subtracting it
      { id: "C", text: "$y = (x - 3)^2 + 11$" },
      // distractor: uses $b = -6$ in place of $\dfrac{b}{2} = -3$
      { id: "D", text: "$y = (x - 6)^2 - 34$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Completing the Square**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Half of $-6$ is $-3$, and $(x - 3)^2 = x^2 - 6x + 9$, which is $7$ too big — so $y = (x - 3)^2 - 7$, matching the low point $(3, -7)$ on the graph.\n\n**The Full Solution:**\nStep 1: Complete the square on $x^2 - 6x$: half of $-6$ is $-3$, and $(x - 3)^2 = x^2 - 6x + 9$.\nStep 2: Rewrite: $y = (x^2 - 6x + 9) - 9 + 2 = (x - 3)^2 - 7$.\nStep 3: In the form $y = (x - h)^2 + k$, the vertex is $(h, k) = (3, -7)$, which is exactly the lowest point shown on the graph. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($y = (x - 3)^2 + 2$): the constant $2$ was carried over unchanged; this expands to $x^2 - 6x + 11$ and puts the vertex at $(3, 2)$, above the $x$-axis.\n* Choice C ($y = (x - 3)^2 + 11$): the $9$ was added instead of subtracted.\n* Choice D ($y = (x - 6)^2 - 34$): the full coefficient $-6$ was used inside the square, giving a vertex at $(6, -34)$, far below the graph shown.\n\n**Test Day Takeaway:** Vertex form reads the vertex straight off. When a graph is given, match your $(h, k)$ to the picture before choosing.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "completing-the-square",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-293",
    domain: "advanced-math",
    skills: ["quadratics"],
    difficulty: "medium",
    type: "fill-in",
    question: "When $f(x) = x^2 + 16x + 5$ is written in the form $(x + a)^2 + b$, where $a$ and $b$ are constants, what is the value of $b$?",
    correctAnswer: "-59",
    explanation: "**SAT Pattern: Completing the Square**\n\n**The correct answer is $-59$.**\n\n**The Fast Way (~25s):** $a = \\dfrac{16}{2} = 8$, and $b = 5 - 8^2 = 5 - 64 = -59$.\n\n**The Full Solution:**\nStep 1: Expanding the target form gives $(x + a)^2 + b = x^2 + 2ax + a^2 + b$.\nStep 2: Matching the $x$-coefficients: $2a = 16$, so $a = 8$.\nStep 3: Matching the constants: $a^2 + b = 5$, so $64 + b = 5$ and $b = -59$. Check: $(x + 8)^2 - 59 = x^2 + 16x + 64 - 59 = x^2 + 16x + 5$. $\\checkmark$\n\n**Common Mistakes:**\n* Answering $8$ reports $a$ rather than $b$.\n* Answering $-64$ subtracts the square but forgets to add the original constant $5$.\n* Answering $69$ adds instead of subtracts: $5 + 64$, which would make the expansion $x^2 + 16x + 133$.\n\n**Test Day Takeaway:** Match coefficients term by term. The constant equation is $a^2 + b = c$, so $b = c - a^2$ — never just $-a^2$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "completing-the-square",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-294",
    domain: "advanced-math",
    skills: ["quadratics"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "For all values of $x$, the expression $3x^2 + 24x + 5$ is equivalent to which of the following?",
    choices: [
      // distractor: completes the square on $3x$ instead of factoring the $3$ out first
      { id: "A", text: "$(3x + 4)^2 - 11$" },
      { id: "B", text: "$3(x + 4)^2 - 43$" },
      // distractor: forgets to subtract the $3(16) = 48$ that was introduced
      { id: "C", text: "$3(x + 4)^2 + 5$" },
      // distractor: halves $24$ before factoring out the $3$
      { id: "D", text: "$3(x + 8)^2 - 187$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Completing the Square**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** Factor the $3$ out of the first two terms: $3(x^2 + 8x) + 5 = 3(x + 4)^2 - 48 + 5 = 3(x + 4)^2 - 43$.\n\n**The Full Solution:**\nStep 1: Factor the leading coefficient out of the $x$-terms only: $3x^2 + 24x + 5 = 3(x^2 + 8x) + 5$.\nStep 2: Complete the square inside: half of $8$ is $4$, and $x^2 + 8x = (x + 4)^2 - 16$. So the expression is $3\\left[(x + 4)^2 - 16\\right] + 5$.\nStep 3: Distribute the $3$: $3(x + 4)^2 - 48 + 5 = 3(x + 4)^2 - 43$. Check by expanding: $3(x^2 + 8x + 16) - 43 = 3x^2 + 24x + 48 - 43 = 3x^2 + 24x + 5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(3x + 4)^2 - 11$): expanding gives $9x^2 + 24x + 5$; the leading coefficient became $9$.\n* Choice C ($3(x + 4)^2 + 5$): expanding gives $3x^2 + 24x + 53$; the $3(16) = 48$ was never subtracted.\n* Choice D ($3(x + 8)^2 - 187$): the $24$ was halved before the $3$ was factored out, giving $3x^2 + 48x + 5$.\n\n**Test Day Takeaway:** Factor the leading coefficient out FIRST, complete the square inside the brackets, then multiply the correction back through.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "completing-the-square",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-295",
    domain: "advanced-math",
    skills: ["quadratics"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The function $f$ is defined by $f(x) = x^2 + 4x - 12$. What is the minimum value of $f$?",
    choices: [
      { id: "A", text: "$-16$" },
      // distractor: reports $f(0)$, the constant term
      { id: "B", text: "$-12$" },
      // distractor: reports the $x$-value where the minimum occurs
      { id: "C", text: "$-2$" },
      // distractor: evaluates $f(2)$ instead of $f(-2)$
      { id: "D", text: "$0$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Completing the Square**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** $f(x) = (x + 2)^2 - 16$, so the smallest output is $-16$.\n\n**The Full Solution:**\nStep 1: Complete the square: half of $4$ is $2$, and $x^2 + 4x = (x + 2)^2 - 4$.\nStep 2: So $f(x) = (x + 2)^2 - 4 - 12 = (x + 2)^2 - 16$.\nStep 3: Since $(x + 2)^2 \\ge 0$, $f(x) \\ge -16$, with equality at $x = -2$. The minimum value is $-16$. Check: $f(-2) = 4 - 8 - 12 = -16$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-12$): this is $f(0)$, the value where the graph crosses the $y$-axis, not the lowest point.\n* Choice C ($-2$): this is the $x$-coordinate of the vertex; the question asks for the minimum VALUE.\n* Choice D ($0$): this evaluates $f(2) = 4 + 8 - 12 = 0$, using the wrong sign for the vertex input.\n\n**Test Day Takeaway:** Vertex form separates the two answers a quadratic can offer: $h$ is where the extreme occurs, $k$ is the extreme value itself.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "completing-the-square",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-296",
    domain: "advanced-math",
    skills: ["quadratics"],
    difficulty: "hard",
    type: "fill-in",
    question: "The function $g$ is defined by $g(x) = -2x^2 + bx - 5$, where $b$ is a positive constant. The maximum value of $g$ is $3$. What is the value of $b$?",
    correctAnswer: "8",
    explanation: "**SAT Pattern: Completing the Square**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~50s):** The maximum of $g$ is $\\dfrac{b^2}{8} - 5$. Setting $\\dfrac{b^2}{8} - 5 = 3$ gives $b^2 = 64$, and $b > 0$, so $b = 8$.\n\n**The Full Solution:**\nStep 1: Because the coefficient of $x^2$ is negative, the graph opens downward and the maximum occurs at the vertex, $x = \\dfrac{-b}{2(-2)} = \\dfrac{b}{4}$.\nStep 2: Evaluate: $g\\left(\\dfrac{b}{4}\\right) = -2 \\cdot \\dfrac{b^2}{16} + b \\cdot \\dfrac{b}{4} - 5 = -\\dfrac{b^2}{8} + \\dfrac{b^2}{4} - 5 = \\dfrac{b^2}{8} - 5$.\nStep 3: Set that equal to $3$: $\\dfrac{b^2}{8} = 8$, so $b^2 = 64$ and $b = \\pm 8$. The problem states $b > 0$, so $b = 8$. Check: $g(x) = -2x^2 + 8x - 5 = -2(x - 2)^2 + 3$, whose maximum is $3$. $\\checkmark$\n\n**Common Mistakes:**\n* Answering $-8$ ignores the condition that $b$ is positive; $b = -8$ also gives a maximum of $3$, but it is excluded.\n* Answering $12$ sets the vertex's $x$-coordinate equal to the maximum: $\\dfrac{b}{4} = 3$. The maximum is a $y$-value, not an $x$-value.\n* Answering $64$ stops at $b^2 = 64$ and reports the square instead of $b$ itself.\n\n**Test Day Takeaway:** With a parameter in the middle term, write the vertex value in terms of that parameter first — then the given maximum becomes a single equation to solve.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "completing-the-square",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-297",
    domain: "advanced-math",
    skills: ["quadratics"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The expression $4x^2 + 40x + 9$ can be written in the form $a(x + b)^2 + c$, where $a$, $b$, and $c$ are constants. What is the value of $a + b + c$?",
    choices: [
      // distractor: halves $40$ before factoring out the $4$, giving $b = 10$ and $c = 9 - 400$
      { id: "A", text: "$-377$" },
      { id: "B", text: "$-82$" },
      // distractor: subtracts $25$ instead of $4(25) = 100$
      { id: "C", text: "$-7$" },
      // distractor: adds $91$ instead of subtracting it
      { id: "D", text: "$100$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Completing the Square**\n\n**Choice B is correct.**\n\n**The Fast Way (~50s):** $4(x^2 + 10x) + 9 = 4(x + 5)^2 - 100 + 9 = 4(x + 5)^2 - 91$, so $a + b + c = 4 + 5 - 91 = -82$.\n\n**The Full Solution:**\nStep 1: Factor $4$ out of the $x$-terms: $4x^2 + 40x + 9 = 4(x^2 + 10x) + 9$.\nStep 2: Complete the square inside: half of $10$ is $5$, so $x^2 + 10x = (x + 5)^2 - 25$, giving $4\\left[(x + 5)^2 - 25\\right] + 9$.\nStep 3: Distribute: $4(x + 5)^2 - 100 + 9 = 4(x + 5)^2 - 91$. So $a = 4$, $b = 5$, $c = -91$ and $a + b + c = -82$. Check by expanding: $4(x^2 + 10x + 25) - 91 = 4x^2 + 40x + 100 - 91 = 4x^2 + 40x + 9$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-377$): halving $40$ before factoring out the $4$ gives $b = 10$ and $c = 9 - 400 = -391$, so $4 + 10 - 391 = -377$.\n* Choice C ($-7$): the correction $25$ was subtracted without being multiplied by $4$, giving $c = 9 - 25 = -16$ and $4 + 5 - 16 = -7$.\n* Choice D ($100$): the sign of $c$ was dropped, giving $4 + 5 + 91$.\n\n**Test Day Takeaway:** The number you subtract at the end is $a$ times the square you added inside the brackets — that factor of $a$ is the most commonly dropped step.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "completing-the-square",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-298",
    domain: "advanced-math",
    skills: ["quadratics"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the $xy$-plane, the graph of $y = x^2 + bx + c$ is shown, where $b$ and $c$ are constants and the vertex of the graph is the marked point. What is the value of $b + c$?",
    diagram: { type: "quadraticVertex", params: { vertex: [-3, -4], a: 1, showVertex: true } },
    choices: [
      // distractor: uses $c = k - \dfrac{b^2}{4}$ instead of $c = k + \dfrac{b^2}{4}$, giving $c = -13$
      { id: "A", text: "$-7$" },
      // distractor: reads $b = 2h = -6$, dropping the negative sign in $x = -\dfrac{b}{2}$
      { id: "B", text: "$-1$" },
      // distractor: reports the vertex's $y$-coordinate as $c$ instead of the $y$-intercept
      { id: "C", text: "$2$" },
      { id: "D", text: "$11$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Completing the Square**\n\n**Choice D is correct.**\n\n**The Fast Way (~50s):** The marked vertex $(-3, -4)$ and a leading coefficient of $1$ give $y = (x + 3)^2 - 4 = x^2 + 6x + 5$, so $b + c = 6 + 5 = 11$.\n\n**The Full Solution:**\nStep 1: From the graph the vertex is the marked point $(-3, -4)$, and the coefficient of $x^2$ is $1$, so the vertex form of the equation is $y = (x + 3)^2 - 4$.\nStep 2: Expand to return to standard form: $(x + 3)^2 - 4 = x^2 + 6x + 9 - 4 = x^2 + 6x + 5$. Matching coefficients with $y = x^2 + bx + c$ gives $b = 6$ and $c = 5$.\nStep 3: Therefore $b + c = 6 + 5 = 11$. Check: completing the square on $x^2 + 6x + 5$ returns $(x + 3)^2 - 4$, and the graph does cross the $y$-axis at $(0, 5)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-7$): this takes $c = k - \\dfrac{b^2}{4} = -4 - 9 = -13$ and adds $6$; the $9$ that completing the square subtracts must be added BACK on the way to standard form.\n* Choice B ($-1$): this reads $b = 2(-3) = -6$ from the vertex, dropping the negative sign in $x = -\\dfrac{b}{2}$, then adds the correct $c = 5$.\n* Choice C ($2$): this uses $c = -4$, the $y$-coordinate of the vertex; $c$ is the $y$-intercept of the graph, which the figure puts at $(0, 5)$.\n\n**Test Day Takeaway:** Read the vertex form straight off the marked point, then expand. The constant term $c$ is the $y$-intercept, never the height of the vertex.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "completing-the-square",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  // ─── P.B. POLYNOMIAL REMAINDER THEOREM (bank-am-299..306) — new canonical ─
  // p(a) = remainder when p(x) is divided by (x − a).
  {
    id: "bank-am-299",
    domain: "advanced-math",
    skills: ["polynomials"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The table gives the value of the polynomial function $p$ at four values of $x$. What is the remainder when $p(x)$ is divided by $x - 5$?",
    diagram: { type: "dataTable", params: { headers: ["x", "p(x)"], rows: [["0", "-6"], ["2", "3"], ["5", "17"], ["8", "41"]] } },
    choices: [
      // distractor: reports $p(0)$
      { id: "A", text: "$-6$" },
      // distractor: reports $p(2)$
      { id: "B", text: "$3$" },
      // distractor: reports the zero of the divisor rather than the remainder
      { id: "C", text: "$5$" },
      { id: "D", text: "$17$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Polynomial Remainder Theorem**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Dividing by $x - 5$ leaves the remainder $p(5)$, and the table gives $p(5) = 17$.\n\n**The Full Solution:**\nStep 1: The remainder theorem says that when a polynomial $p(x)$ is divided by $x - r$, the remainder equals $p(r)$.\nStep 2: Here the divisor is $x - 5$, so $r = 5$ and the remainder is $p(5)$.\nStep 3: The table's row $x = 5$ gives $p(5) = 17$, so the remainder is $17$. Check: $p(x) = (x - 5)q(x) + 17$ for some polynomial $q$, and substituting $x = 5$ returns $17$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): this is $p(0)$, which is the remainder on division by $x$, not by $x - 5$.\n* Choice B ($3$): this is $p(2)$, the remainder on division by $x - 2$.\n* Choice C ($5$): this reports the divisor's zero instead of the function value there.\n\n**Test Day Takeaway:** Divisor $x - r$ means evaluate at $x = r$. When a table is supplied, the remainder is a lookup, not a long division.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "polynomial-remainder-theorem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-300",
    domain: "advanced-math",
    skills: ["polynomials"],
    difficulty: "easy",
    type: "fill-in",
    question: "What is the remainder when the polynomial $3x^3 - 5x + 8$ is divided by $x + 2$?",
    correctAnswer: "-6",
    explanation: "**SAT Pattern: Polynomial Remainder Theorem**\n\n**The correct answer is $-6$.**\n\n**The Fast Way (~20s):** $x + 2 = x - (-2)$, so the remainder is the value at $x = -2$: $3(-8) + 10 + 8 = -6$.\n\n**The Full Solution:**\nStep 1: Write the divisor in the form $x - r$: $x + 2 = x - (-2)$, so $r = -2$.\nStep 2: By the remainder theorem, the remainder is $p(-2)$ where $p(x) = 3x^3 - 5x + 8$.\nStep 3: $p(-2) = 3(-2)^3 - 5(-2) + 8 = -24 + 10 + 8 = -6$. Check: $-24 + 18 = -6$, and since the divisor is linear the remainder is a constant, as expected. $\\checkmark$\n\n**Common Mistakes:**\n* Answering $22$ evaluates $p(2) = 24 - 10 + 8$, using the sign shown in the divisor instead of its opposite.\n* Answering $8$ reports the constant term, which is the remainder on division by $x$, not by $x + 2$.\n* Answering $-36$ comes from $3(-2)^3 - 5(-2)^2 + 8 = -24 - 20 + 8$, squaring the input in a term the polynomial does not have.\n\n**Test Day Takeaway:** Flip the sign in the divisor before substituting: $x + 2$ tests $x = -2$. Missing terms count as zero coefficients.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "polynomial-remainder-theorem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-301",
    domain: "advanced-math",
    skills: ["polynomials"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The polynomial function $p$ is defined by $p(x) = 2x^3 - 7x^2 + cx - 9$, where $c$ is a constant. If $x - 3$ is a factor of $p(x)$, what is the value of $c$?",
    choices: [
      // distractor: treats the constant term as +9
      { id: "A", text: "$0$" },
      // distractor: drops the constant term
      { id: "B", text: "$3$" },
      { id: "C", text: "$6$" },
      // distractor: forgets the factor of 3 on cx
      { id: "D", text: "$18$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Polynomial Remainder Theorem**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** If $x - 3$ is a factor, then $p(3) = 0$. Substituting gives $54 - 63 + 3c - 9 = 0$, so $3c = 18$ and $c = 6$.\n\n**The Full Solution:**\nStep 1: The factor theorem says $x - 3$ is a factor of $p(x)$ exactly when $p(3) = 0$.\nStep 2: $p(3) = 2(27) - 7(9) + c(3) - 9 = 54 - 63 + 3c - 9 = 3c - 18$.\nStep 3: Setting $3c - 18 = 0$ gives $c = 6$. Check: with $c = 6$, $p(3) = 54 - 63 + 18 - 9 = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0$): treats the constant term as $+9$, solving $54 - 63 + 3c + 9 = 0$.\n* Choice B ($3$): drops the constant term $-9$ entirely, solving $54 - 63 + 3c = 0$.\n* Choice D ($18$): substitutes $x = 3$ into every term except $cx$, solving $54 - 63 + c - 9 = 0$.\n\n**Test Day Takeaway:** A factor $x - r$ means the polynomial is zero at $x = r$ — substitute $r$, keep every term, and solve the resulting linear equation.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "polynomial-remainder-theorem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-302",
    domain: "advanced-math",
    skills: ["polynomials"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Selected values of the polynomial function $q$ are given in the table, where $q(x) = x^3 + mx^2 + nx - 4$ and $m$ and $n$ are constants. Which equation relating $m$ and $n$ must be true?",
    diagram: { type: "dataTable", params: { headers: ["x", "q(x)"], rows: [["0", "-4"], ["2", "10"]] } },
    choices: [
      // distractor: substitutes x = -2
      { id: "A", text: "$2m - n = 11$" },
      // distractor: sets q(2) = 0
      { id: "B", text: "$2m + n = -2$" },
      // distractor: drops the constant term
      { id: "C", text: "$2m + n = 1$" },
      { id: "D", text: "$2m + n = 3$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Polynomial Remainder Theorem**\n\n**Choice D is correct.**\n\n**The Fast Way (~35s):** The table gives $q(2) = 10$. Substituting $x = 2$ gives $8 + 4m + 2n - 4 = 10$, which reduces to $2m + n = 3$.\n\n**The Full Solution:**\nStep 1: The second row of the table says $q(2) = 10$, so substitute $x = 2$ into the definition of $q$.\nStep 2: $q(2) = 8 + 4m + 2n - 4 = 4m + 2n + 4$, so $4m + 2n + 4 = 10$.\nStep 3: Subtracting $4$ gives $4m + 2n = 6$, and dividing by $2$ gives $2m + n = 3$. Check: $m = 1$ and $n = 1$ satisfy this, and $q(x) = x^3 + x^2 + x - 4$ does give $q(2) = 8 + 4 + 2 - 4 = 10$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2m - n = 11$): substitutes $x = -2$ instead of $x = 2$, giving $-8 + 4m - 2n - 4 = 10$.\n* Choice B ($2m + n = -2$): sets $q(2) = 0$ instead of the listed value $10$.\n* Choice C ($2m + n = 1$): drops the constant term $-4$ when substituting, solving $8 + 4m + 2n = 10$.\n\n**Test Day Takeaway:** A table entry is an instruction to substitute: put the listed $x$ into the expression and set it equal to the listed output.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "polynomial-remainder-theorem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-303",
    domain: "advanced-math",
    skills: ["polynomials"],
    difficulty: "medium",
    type: "fill-in",
    question: "The polynomial function $g$ is defined by $g(x) = x^4 - 2x^3 - 5x + 7$. What is the remainder when $g(x)$ is divided by $x + 2$?",
    correctAnswer: "49",
    explanation: "**SAT Pattern: Polynomial Remainder Theorem**\n\n**The correct answer is $49$.**\n\n**The Fast Way (~30s):** Dividing by $x + 2$ leaves the remainder $g(-2) = 16 + 16 + 10 + 7 = 49$.\n\n**The Full Solution:**\nStep 1: The remainder theorem says division by $x - r$ leaves the remainder $g(r)$. Here $x + 2 = x - (-2)$, so $r = -2$.\nStep 2: $g(-2) = (-2)^4 - 2(-2)^3 - 5(-2) + 7 = 16 - 2(-8) + 10 + 7$.\nStep 3: $16 + 16 + 10 + 7 = 49$. Check: every term with an odd power changes sign at $x = -2$, so the two subtractions both become additions. $\\checkmark$\n\n**Common Mistakes:** Substituting $x = 2$ instead of $x = -2$ gives $16 - 16 - 10 + 7 = -3$. Mishandling one sign and treating $-2(-2)^3$ as $-16$ gives $16 - 16 + 10 + 7 = 17$. Long division reaches the same $49$, but it takes several times as long as one substitution.\n\n**Test Day Takeaway:** Rewrite $x + 2$ as $x - (-2)$ before substituting; the remainder is the function value at the divisor's root.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "polynomial-remainder-theorem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-304",
    domain: "advanced-math",
    skills: ["polynomials"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The table gives the value of the polynomial function $p$ at three values of $x$. The function $q$ is defined by $q(x) = p(x) - 2x + 1$. What is the remainder when $q(x)$ is divided by $x - 3$?",
    diagram: { type: "dataTable", params: { headers: ["x", "p(x)"], rows: [["-1", "8"], ["1", "-4"], ["3", "5"]] } },
    choices: [
      // distractor: evaluates q at x = 1
      { id: "A", text: "$-5$" },
      { id: "B", text: "$0$" },
      // distractor: assumes the subtraction leaves the remainder unchanged
      { id: "C", text: "$5$" },
      // distractor: evaluates q at x = -1
      { id: "D", text: "$11$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Polynomial Remainder Theorem**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** The remainder is $q(3) = p(3) - 2(3) + 1$. The table gives $p(3) = 5$, so $q(3) = 5 - 6 + 1 = 0$.\n\n**The Full Solution:**\nStep 1: By the remainder theorem, dividing $q(x)$ by $x - 3$ leaves the remainder $q(3)$.\nStep 2: $q(3) = p(3) - 2(3) + 1 = p(3) - 5$.\nStep 3: The table's third row gives $p(3) = 5$, so $q(3) = 5 - 5 = 0$. Check: a remainder of $0$ means $x - 3$ divides $q(x)$ exactly, which is consistent with $q(3) = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): evaluates $q$ at $x = 1$ instead of $x = 3$: $-4 - 2 + 1 = -5$.\n* Choice C ($5$): reports $p(3)$, assuming that subtracting $2x - 1$ leaves the remainder unchanged.\n* Choice D ($11$): evaluates $q$ at $x = -1$, using the sign of the divisor's constant: $8 + 2 + 1 = 11$.\n\n**Test Day Takeaway:** Dividing by $x - 3$ always asks for the value at $x = 3$ — pick the row the divisor names, then apply the rest of the definition.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "polynomial-remainder-theorem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-305",
    domain: "advanced-math",
    skills: ["polynomials"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The polynomial function $h$ is defined by $h(x) = x^3 + ax^2 + bx + 20$, where $a$ and $b$ are constants. Both $x + 4$ and $x - 1$ are factors of $h(x)$. What is the value of $b$?",
    choices: [
      // distractor: uses only h(1) = 0 and assumes a = 0
      { id: "A", text: "$-21$" },
      { id: "B", text: "$-19$" },
      // distractor: reports a instead of b
      { id: "C", text: "$-2$" },
      // distractor: reports the third zero
      { id: "D", text: "$5$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Polynomial Remainder Theorem**\n\n**Choice B is correct.**\n\n**The Fast Way (~60s):** Two factors give two equations: $h(1) = 0$ gives $a + b = -21$, and $h(-4) = 0$ gives $4a - b = 11$. Adding them gives $5a = -10$, so $a = -2$ and $b = -19$.\n\n**The Full Solution:**\nStep 1: $h(1) = 1 + a + b + 20 = 0$, so $a + b = -21$.\nStep 2: $h(-4) = -64 + 16a - 4b + 20 = 0$, so $16a - 4b = 44$, or $4a - b = 11$.\nStep 3: Adding the two equations eliminates $b$: $5a = -10$, so $a = -2$ and therefore $b = -21 - (-2) = -19$. Check: $h(x) = x^3 - 2x^2 - 19x + 20$ gives $h(1) = 1 - 2 - 19 + 20 = 0$ and $h(-4) = -64 - 32 + 76 + 20 = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-21$): uses only $h(1) = 0$ and assumes $a = 0$, reading $b = -21$ straight off.\n* Choice C ($-2$): solves the system correctly but reports $a$ instead of $b$.\n* Choice D ($5$): reports the third zero, since $h(x) = (x + 4)(x - 1)(x - 5)$.\n\n**Test Day Takeaway:** Each stated factor is one equation in the unknown constants — build the system, solve it, then answer the constant the question names.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "polynomial-remainder-theorem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-306",
    domain: "advanced-math",
    skills: ["polynomials"],
    difficulty: "hard",
    type: "fill-in",
    question: "The polynomial function $f$ is defined by $f(x) = 3x^3 + kx^2 - 11x + 4$, where $k$ is a constant. If $3x - 1$ is a factor of $f(x)$, what is the value of $k$?",
    correctAnswer: "-4",
    explanation: "**SAT Pattern: Polynomial Remainder Theorem**\n\n**The correct answer is $-4$.**\n\n**The Fast Way (~50s):** $3x - 1$ is zero at $x = \\dfrac{1}{3}$, so $f\\left(\\dfrac{1}{3}\\right) = 0$. That gives $\\dfrac{1}{9} + \\dfrac{k}{9} + \\dfrac{1}{3} = 0$, and multiplying by $9$ gives $k = -4$.\n\n**The Full Solution:**\nStep 1: A linear factor $3x - 1$ vanishes at its root $x = \\dfrac{1}{3}$, so the factor theorem gives $f\\left(\\dfrac{1}{3}\\right) = 0$.\nStep 2: $f\\left(\\dfrac{1}{3}\\right) = 3\\left(\\dfrac{1}{27}\\right) + k\\left(\\dfrac{1}{9}\\right) - \\dfrac{11}{3} + 4 = \\dfrac{1}{9} + \\dfrac{k}{9} + \\dfrac{1}{3}$, since $-\\dfrac{11}{3} + 4 = \\dfrac{1}{3}$.\nStep 3: Multiplying by $9$ gives $1 + k + 3 = 0$, so $k = -4$. Check: $3x^3 - 4x^2 - 11x + 4 = (3x - 1)(x^2 - x - 4)$. $\\checkmark$\n\n**Common Mistakes:** Reading $3x - 1$ as $x - 1$ and substituting $x = 1$ gives $3 + k - 11 + 4 = 0$, or $k = 4$ — the right size with the wrong sign. Substituting $x = -\\dfrac{1}{3}$ gives $k = -68$. Substituting $x = 3$ gives $9k = -52$, which is not an integer; a non-integer here is a signal that the root was read off wrong.\n\n**Test Day Takeaway:** The root of $ax - b$ is $x = \\dfrac{b}{a}$, not $b$ — a leading coefficient in the factor changes where the polynomial is zero.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "polynomial-remainder-theorem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  // ─── P.B. QUADRATIC INEQUALITY FROM CONTEXT (bank-am-307..314) ─────────────
  // From a real-world story → set up ax² + bx + c ≷ 0 → solve.
  {
    id: "bank-am-307",
    domain: "advanced-math",
    skills: ["quadratics"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The cross section of a tunnel is modeled by $y = -\\dfrac{1}{4}x^2 + 9$, where $x$ is the horizontal distance in meters from the center of the tunnel and $y$ is the height in meters above the road. The graph of this model is shown. For which values of $x$ is the tunnel more than $5$ meters high?",
    diagram: { type: "parabola", params: { vertex: { h: 0, k: 9 }, a: -0.25, xRange: [-8, 8], yRange: [-2, 10], xTickInterval: 2, yTickInterval: 2, gridInterval: 2, showVertex: true } },
    choices: [
      // distractor: solves y > 0, the road-level width
      { id: "A", text: "$-6 < x < 6$" },
      // distractor: fails to reverse the inequality
      { id: "B", text: "$x < -4$ or $x > 4$" },
      { id: "C", text: "$-4 < x < 4$" },
      // distractor: keeps only the right half
      { id: "D", text: "$0 < x < 4$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Quadratic Inequality from Context**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Solve $-\\dfrac{1}{4}x^2 + 9 > 5$. Then $\\dfrac{1}{4}x^2 < 4$, so $x^2 < 16$ and $-4 < x < 4$.\n\n**The Full Solution:**\nStep 1: \"More than $5$ meters high\" means $-\\dfrac{1}{4}x^2 + 9 > 5$.\nStep 2: Subtracting $9$ gives $-\\dfrac{1}{4}x^2 > -4$. Multiplying by $-4$ reverses the inequality: $x^2 < 16$.\nStep 3: $x^2 < 16$ means $|x| < 4$, so $-4 < x < 4$. Check: at $x = 0$ the height is $9$, which is more than $5$; at $x = 5$ the height is $-6.25 + 9 = 2.75$, which is not. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6 < x < 6$): solves $y > 0$ instead of $y > 5$, giving the tunnel's full width at road level.\n* Choice B ($x < -4$ or $x > 4$): forgets to reverse the inequality when multiplying by $-4$.\n* Choice D ($0 < x < 4$): keeps only the right half of the tunnel and drops the negative distances.\n\n**Test Day Takeaway:** Multiplying an inequality by a negative number flips it, and $x^2 < k$ always produces a two-sided interval around $0$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "quadratic-inequality-from-context",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-308",
    domain: "advanced-math",
    skills: ["quadratics"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A rectangular solar panel is $3$ feet longer than it is wide. If the width of the panel is $w$ feet, for which values of $w$ is the area of the panel less than $54$ square feet?",
    choices: [
      // distractor: keeps widths that cannot exist
      { id: "A", text: "$-9 < w < 6$" },
      // distractor: uses 9 as the upper bound
      { id: "B", text: "$0 < w < 9$" },
      // distractor: reverses the inequality
      { id: "C", text: "$w > 6$" },
      { id: "D", text: "$0 < w < 6$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Quadratic Inequality from Context**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** $w(w + 3) < 54$ becomes $(w + 9)(w - 6) < 0$, so $-9 < w < 6$. A width must be positive, leaving $0 < w < 6$.\n\n**The Full Solution:**\nStep 1: The length is $w + 3$, so the area is $w(w + 3)$ and the condition is $w(w + 3) < 54$.\nStep 2: Expanding and collecting gives $w^2 + 3w - 54 < 0$, which factors as $(w + 9)(w - 6) < 0$. The product is negative between the critical values, so $-9 < w < 6$.\nStep 3: A physical width satisfies $w > 0$, so the answer is $0 < w < 6$. Check: $w = 5$ gives an area of $5(8) = 40 < 54$, and $w = 6$ gives exactly $54$, which is not less. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-9 < w < 6$): solves the inequality correctly but keeps negative widths the context forbids.\n* Choice B ($0 < w < 9$): uses $9$, the size of the negative critical value, as the upper bound.\n* Choice C ($w > 6$): reverses the inequality and describes the widths for which the area exceeds $54$.\n\n**Test Day Takeaway:** Solve the quadratic inequality first, then intersect the solution set with the values the context allows.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "quadratic-inequality-from-context",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-309",
    domain: "advanced-math",
    skills: ["quadratics"],
    difficulty: "medium",
    type: "fill-in",
    question: "The daily profit, in dollars, of a print shop that sells $n$ posters is modeled by $P(n) = -n^2 + 34n - 168$. What is the least number of posters the shop must sell for its daily profit to be positive?",
    correctAnswer: "7",
    explanation: "**SAT Pattern: Quadratic Inequality from Context**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~45s):** $-n^2 + 34n - 168 > 0$ becomes $(n - 6)(n - 28) < 0$, so $6 < n < 28$. The least whole number in that interval is $7$.\n\n**The Full Solution:**\nStep 1: Positive profit means $-n^2 + 34n - 168 > 0$. Multiplying by $-1$ reverses the inequality: $n^2 - 34n + 168 < 0$.\nStep 2: $n^2 - 34n + 168 = (n - 6)(n - 28)$, and this product is negative exactly when $6 < n < 28$.\nStep 3: $n$ counts posters, so the least whole number strictly greater than $6$ is $7$. Check: $P(6) = -36 + 204 - 168 = 0$, which is not positive, and $P(7) = -49 + 238 - 168 = 21$, which is. $\\checkmark$\n\n**Common Mistakes:** Answering $6$ uses the break-even count, where the profit is exactly $\\$0$ rather than positive. Answering $28$ gives the largest profitable count instead of the least. Forgetting to reverse the inequality when multiplying by $-1$ makes the solution set look like $n < 6$ or $n > 28$, which points to $n = 1$.\n\n**Test Day Takeaway:** \"Positive\" is strict — the boundary value breaks even, so step one past it.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "quadratic-inequality-from-context",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-310",
    domain: "advanced-math",
    skills: ["quadratics"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A cable is suspended between two towers. Its height above the roadway, in meters, at a horizontal distance of $x$ meters from the left tower is modeled by $y = \\dfrac{1}{2}x^2 - 4x + 12$ for $0 \\le x \\le 8$. The graph of this model is shown. For which values of $x$ is the cable less than $6$ meters above the roadway?",
    diagram: { type: "parabola", params: { vertex: { h: 4, k: 4 }, a: 0.5, xRange: [0, 8], yRange: [0, 14], xTickInterval: 2, yTickInterval: 2, gridInterval: 2, showVertex: true } },
    choices: [
      // distractor: takes the stretch before the first crossing
      { id: "A", text: "$0 \\le x < 2$" },
      { id: "B", text: "$2 < x < 6$" },
      // distractor: uses the domain endpoint as the second crossing
      { id: "C", text: "$2 < x \\le 8$" },
      // distractor: solves the reversed inequality
      { id: "D", text: "$x < 2$ or $x > 6$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Quadratic Inequality from Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** $\\dfrac{1}{2}x^2 - 4x + 12 < 6$ doubles to $x^2 - 8x + 12 < 0$, which factors as $(x - 2)(x - 6) < 0$, so $2 < x < 6$.\n\n**The Full Solution:**\nStep 1: The condition is $\\dfrac{1}{2}x^2 - 4x + 12 < 6$. Multiplying by $2$ gives $x^2 - 8x + 24 < 12$, or $x^2 - 8x + 12 < 0$.\nStep 2: $x^2 - 8x + 12 = (x - 2)(x - 6)$, and an upward parabola is below the axis strictly between its zeros, so $2 < x < 6$.\nStep 3: Both critical values lie inside the stated domain $0 \\le x \\le 8$, so no trimming is needed. Check: at $x = 4$ the height is $8 - 16 + 12 = 4$, which is less than $6$; at $x = 2$ it is $2 - 8 + 12 = 6$ exactly. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0 \\le x < 2$): takes the stretch before the first crossing, where the cable is still higher than $6$ meters.\n* Choice C ($2 < x \\le 8$): replaces the second crossing with the right end of the domain.\n* Choice D ($x < 2$ or $x > 6$): solves $y > 6$, the outside interval, instead of $y < 6$.\n\n**Test Day Takeaway:** An upward parabola sits below a horizontal level between its two crossings and above it outside them.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "quadratic-inequality-from-context",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-311",
    domain: "advanced-math",
    skills: ["quadratics"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A rectangular courtyard is enclosed by $48$ meters of fencing along its four sides. If the width of the courtyard is $w$ meters, for which values of $w$ is the enclosed area at least $140$ square meters?",
    choices: [
      // distractor: stops at the first critical value
      { id: "A", text: "$0 < w \\le 10$" },
      // distractor: does not reverse the inequality
      { id: "B", text: "$w \\le 10$ or $w \\ge 14$" },
      { id: "C", text: "$10 \\le w \\le 14$" },
      // distractor: uses the semiperimeter as the upper bound
      { id: "D", text: "$10 \\le w \\le 24$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Quadratic Inequality from Context**\n\n**Choice C is correct.**\n\n**The Fast Way (~50s):** The perimeter forces length $= 24 - w$, so $w(24 - w) \\ge 140$ becomes $(w - 10)(w - 14) \\le 0$, giving $10 \\le w \\le 14$.\n\n**The Full Solution:**\nStep 1: A perimeter of $48$ means width plus length is $24$, so the length is $24 - w$ and the area is $w(24 - w)$.\nStep 2: $w(24 - w) \\ge 140$ gives $24w - w^2 \\ge 140$; moving everything to one side gives $w^2 - 24w + 140 \\le 0$.\nStep 3: $w^2 - 24w + 140 = (w - 10)(w - 14)$, which is at most $0$ exactly when $10 \\le w \\le 14$. Check: $w = 12$ gives $12(12) = 144 \\ge 140$, and $w = 9$ gives $9(15) = 135$, which falls short. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0 < w \\le 10$): stops at the first critical value instead of using the interval between the two.\n* Choice B ($w \\le 10$ or $w \\ge 14$): keeps the original direction after multiplying through by $-1$.\n* Choice D ($10 \\le w \\le 24$): replaces the second critical value with $24$, the sum of the width and length.\n\n**Test Day Takeaway:** When a perimeter is given, halve it first: the two adjacent sides sum to $\\dfrac{P}{2}$, not $P$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "quadratic-inequality-from-context",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-312",
    domain: "advanced-math",
    skills: ["quadratics"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A firework is launched from the ground, and its height above the ground, in feet, $t$ seconds after launch is $h(t) = -16t^2 + 128t$. The firework is designed to explode while it is at least $240$ feet above the ground. What is the greatest whole number of seconds after launch at which it can explode?",
    choices: [
      // distractor: reports the first time the height reaches 240
      { id: "A", text: "$3$" },
      // distractor: reports the time of maximum height
      { id: "B", text: "$4$" },
      { id: "C", text: "$5$" },
      // distractor: reports the time the firework returns to the ground
      { id: "D", text: "$8$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Quadratic Inequality from Context**\n\n**Choice C is correct.**\n\n**The Fast Way (~45s):** $-16t^2 + 128t \\ge 240$ divides to $t^2 - 8t + 15 \\le 0$, or $(t - 3)(t - 5) \\le 0$, so $3 \\le t \\le 5$ and the greatest whole second is $5$.\n\n**The Full Solution:**\nStep 1: The condition is $-16t^2 + 128t \\ge 240$. Dividing by $-16$ reverses the inequality: $t^2 - 8t \\le -15$, or $t^2 - 8t + 15 \\le 0$.\nStep 2: $t^2 - 8t + 15 = (t - 3)(t - 5)$, so the height is at least $240$ feet exactly when $3 \\le t \\le 5$.\nStep 3: The greatest whole number of seconds in that window is $5$. Check: $h(5) = -400 + 640 = 240$, exactly at the limit, and $h(6) = -576 + 768 = 192$, which is too low. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): reports the first time the firework reaches $240$ feet rather than the last.\n* Choice B ($4$): reports the time of maximum height, $t = \\dfrac{-128}{2(-16)} = 4$.\n* Choice D ($8$): reports the time the firework returns to the ground, where $h(t) = 0$.\n\n**Test Day Takeaway:** \"At least\" includes the boundary — solve for the whole interval, then read off the end the question asks for.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "quadratic-inequality-from-context",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-313",
    domain: "advanced-math",
    skills: ["quadratics"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The concentration of a chemical in a tank, in milligrams per liter, $x$ hours after treatment is modeled by $C(x) = x^2 - 18x + 90$ for $0 \\le x \\le 9$. For which values of $x$ is the concentration less than $25$ milligrams per liter?",
    choices: [
      // distractor: takes the hours before the first crossing
      { id: "A", text: "$0 \\le x < 5$" },
      // distractor: solves the reversed inequality
      { id: "B", text: "$x < 5$ or $x > 13$" },
      // distractor: ignores the stated domain
      { id: "C", text: "$5 < x < 13$" },
      { id: "D", text: "$5 < x \\le 9$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Quadratic Inequality from Context**\n\n**Choice D is correct.**\n\n**The Fast Way (~50s):** $x^2 - 18x + 90 < 25$ gives $(x - 5)(x - 13) < 0$, so $5 < x < 13$; the model only runs to $x = 9$, leaving $5 < x \\le 9$.\n\n**The Full Solution:**\nStep 1: The condition is $x^2 - 18x + 90 < 25$, or $x^2 - 18x + 65 < 0$.\nStep 2: $x^2 - 18x + 65 = (x - 5)(x - 13)$, which is negative exactly when $5 < x < 13$.\nStep 3: The model is defined only for $0 \\le x \\le 9$, so intersect: $5 < x \\le 9$. Check: $C(5) = 25 - 90 + 90 = 25$, which is not less than $25$, and $C(9) = 81 - 162 + 90 = 9$, which is. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0 \\le x < 5$): takes the hours before the first crossing, where the concentration is still above $25$.\n* Choice B ($x < 5$ or $x > 13$): solves $C(x) > 25$ instead of $C(x) < 25$.\n* Choice C ($5 < x < 13$): solves the inequality correctly but ignores the stated domain $0 \\le x \\le 9$.\n\n**Test Day Takeaway:** A model's domain is part of the answer — trim the solution set to the values the model actually covers.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "quadratic-inequality-from-context",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-314",
    domain: "advanced-math",
    skills: ["quadratics"],
    difficulty: "medium",
    type: "fill-in",
    question: "A rectangular photograph is $x$ inches wide and $x + 4$ inches tall, where $x$ is a positive integer. For how many values of $x$ is the area of the photograph greater than $45$ square inches and less than $140$ square inches?",
    correctAnswer: "4",
    explanation: "**SAT Pattern: Quadratic Inequality from Context**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~50s):** The area is $x(x + 4)$. Since $5(9) = 45$ and $10(14) = 140$, the strict inequalities leave $x = 6$, $7$, $8$, and $9$ — four values.\n\n**The Full Solution:**\nStep 1: The area condition is $45 < x(x + 4) < 140$, so solve the two inequalities separately.\nStep 2: $x^2 + 4x - 45 > 0$ factors as $(x + 9)(x - 5) > 0$, which for positive $x$ means $x > 5$; $x^2 + 4x - 140 < 0$ factors as $(x + 14)(x - 10) < 0$, which means $x < 10$.\nStep 3: So $5 < x < 10$, and the integer widths are $6$, $7$, $8$, $9$, a count of $4$. Check: $6(10) = 60$ and $9(13) = 117$, both strictly between $45$ and $140$. $\\checkmark$\n\n**Common Mistakes:** Counting $x = 5$ and $x = 10$ as well gives $6$; those widths give areas of exactly $45$ and exactly $140$, which the strict inequalities exclude. Answering $9$ reports the largest width instead of how many widths work. Solving only the lower bound gives $5$.\n\n**Test Day Takeaway:** When the question asks \"how many values,\" finish by listing the integers — the count, not an endpoint, is the answer.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "quadratic-inequality-from-context",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  // ─── P.B. RADICAL EQUATION (bank-am-315..322) — sqrt(...) = x ──────────────
  // Isolate the radical, square, check for extraneous solutions.
  {
    id: "bank-am-315",
    domain: "advanced-math",
    skills: ["radical-equations"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The equation $\\sqrt{2x - 6} = 4$ has exactly one solution, and that solution is a positive integer. What is the value of $x$?",
    choices: [
      // distractor: never squares
      { id: "A", text: "$5$" },
      // distractor: doubles 4 instead of squaring it
      { id: "B", text: "$7$" },
      { id: "C", text: "$11$" },
      // distractor: squares term by term inside the radical
      { id: "D", text: "$26$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Radical Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Square both sides: $2x - 6 = 16$, so $2x = 22$ and $x = 11$.\n\n**The Full Solution:**\nStep 1: The radical already stands alone, so squaring both sides is legal: $\\left(\\sqrt{2x - 6}\\right)^2 = 4^2$ gives $2x - 6 = 16$.\nStep 2: Adding $6$ to each side gives $2x = 22$.\nStep 3: Dividing by $2$ gives $x = 11$. Check: $\\sqrt{2(11) - 6} = \\sqrt{16} = 4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): never squares, solving $2x - 6 = 4$.\n* Choice B ($7$): doubles the $4$ instead of squaring it, solving $2x - 6 = 8$.\n* Choice D ($26$): squares the radicand term by term, solving $2x - 36 = 16$.\n\n**Test Day Takeaway:** Squaring undoes a square root only when the radical stands alone, and it applies to the whole side at once — never term by term.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "radical-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-316",
    domain: "advanced-math",
    skills: ["radical-equations"],
    difficulty: "easy",
    type: "fill-in",
    question: "The equation $\\sqrt{x - 4} = 8$ has one real solution. What is the value of $x$?",
    correctAnswer: "68",
    explanation: "**SAT Pattern: Radical Equation**\n\n**The correct answer is $68$.**\n\n**The Fast Way (~20s):** Square both sides: $x - 4 = 64$, so $x = 68$.\n\n**The Full Solution:**\nStep 1: The radical stands alone, so square each side: $\\left(\\sqrt{x - 4}\\right)^2 = 8^2$, giving $x - 4 = 64$.\nStep 2: Add $4$ to each side.\nStep 3: $x = 68$. Check: $\\sqrt{68 - 4} = \\sqrt{64} = 8$. $\\checkmark$\n\n**Common Mistakes:** Forgetting to square gives $x - 4 = 8$, or $x = 12$. Doubling the $8$ instead of squaring it gives $x - 4 = 16$, or $x = 20$. Squaring the radicand term by term gives $x - 16 = 64$, or $x = 80$ — squaring applies to the whole side, not to each term.\n\n**Test Day Takeaway:** Square once, across the entire equation, and then check the result in the original equation.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "radical-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-317",
    domain: "advanced-math",
    skills: ["radical-equations"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The equation $\\sqrt{x + 12} = x$ is given. Which value or values of $x$ satisfy this equation?",
    choices: [
      // distractor: selects the extraneous root
      { id: "A", text: "$x = -3$ only" },
      // distractor: sign error when factoring
      { id: "B", text: "$x = -4$ and $x = 3$" },
      { id: "C", text: "$x = 4$ only" },
      // distractor: skips the extraneous check
      { id: "D", text: "$x = -3$ and $x = 4$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Radical Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~45s):** Squaring gives $x + 12 = x^2$, so $(x - 4)(x + 3) = 0$ and $x = 4$ or $x = -3$. A square root is never negative, so $x = -3$ fails and only $x = 4$ works.\n\n**The Full Solution:**\nStep 1: Square both sides: $x + 12 = x^2$, so $x^2 - x - 12 = 0$.\nStep 2: Factoring gives $(x - 4)(x + 3) = 0$, so the candidates are $x = 4$ and $x = -3$.\nStep 3: Test both in the ORIGINAL equation. For $x = 4$: $\\sqrt{16} = 4$, true. For $x = -3$: $\\sqrt{9} = 3$, but the right side is $-3$, so it fails. Check: squaring can create solutions the original equation never had, which is why the test is required. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x = -3$ only): keeps the extraneous root and discards the valid one.\n* Choice B ($x = -4$ and $x = 3$): factors $x^2 - x - 12$ as $(x + 4)(x - 3)$, flipping both signs.\n* Choice D ($x = -3$ and $x = 4$): solves the quadratic correctly but never checks for extraneous solutions.\n\n**Test Day Takeaway:** After squaring a radical equation, substitute every candidate back — the principal square root cannot equal a negative number.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "radical-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-318",
    domain: "advanced-math",
    skills: ["radical-equations"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The equation $\\sqrt{2x + 7} - 4 = 5$ has exactly one solution. What is the value of $x$?",
    choices: [
      // distractor: subtracts 4 instead of adding it
      { id: "A", text: "$-3$" },
      // distractor: squares before isolating the radical
      { id: "B", text: "$11$" },
      // distractor: squares the radicand term by term
      { id: "C", text: "$17$" },
      { id: "D", text: "$37$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Radical Equation**\n\n**Choice D is correct.**\n\n**The Fast Way (~35s):** Isolate first: $\\sqrt{2x + 7} = 9$. Squaring gives $2x + 7 = 81$, so $x = 37$.\n\n**The Full Solution:**\nStep 1: Add $4$ to each side so the radical stands alone: $\\sqrt{2x + 7} = 9$.\nStep 2: Square both sides: $2x + 7 = 81$.\nStep 3: $2x = 74$, so $x = 37$. Check: $\\sqrt{2(37) + 7} - 4 = \\sqrt{81} - 4 = 9 - 4 = 5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): subtracts $4$ from each side instead of adding, then squares $1$ to get $2x + 7 = 1$.\n* Choice B ($11$): squares before isolating, treating $\\left(\\sqrt{2x + 7} - 4\\right)^2$ as $2x + 7 - 4$ and solving $2x + 3 = 25$.\n* Choice C ($17$): squares term by term, solving $2x + 7 - 16 = 25$.\n\n**Test Day Takeaway:** Isolate the radical before squaring — a constant sitting outside the radical does not simply come along for the ride.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "radical-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-319",
    domain: "advanced-math",
    skills: ["radical-equations"],
    difficulty: "medium",
    type: "fill-in",
    question: "If $\\sqrt{x} - 2 = 9$, what is the value of $x$?",
    correctAnswer: "121",
    explanation: "**SAT Pattern: Radical Equation**\n\n**The correct answer is $121$.**\n\n**The Fast Way (~25s):** Isolate the radical: $\\sqrt{x} = 11$. Squaring gives $x = 121$.\n\n**The Full Solution:**\nStep 1: Add $2$ to each side so the radical stands alone: $\\sqrt{x} = 11$.\nStep 2: Square both sides: $x = 11^2$.\nStep 3: $x = 121$. Check: $\\sqrt{121} - 2 = 11 - 2 = 9$. $\\checkmark$\n\n**Common Mistakes:** Squaring before isolating gives $x - 4 = 81$, or $x = 85$. Squaring the $9$ first and then adding $2$ gives $x = 83$. Subtracting $2$ instead of adding gives $\\sqrt{x} = 7$ and $x = 49$.\n\n**Test Day Takeaway:** Get the radical alone on one side first; only then does squaring produce an equivalent equation.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "radical-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-320",
    domain: "advanced-math",
    skills: ["radical-equations"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The equation $\\sqrt{5x + 4} = x - 4$ is given. How many distinct real solutions does this equation have?",
    choices: [
      // distractor: rejects both candidates
      { id: "A", text: "Zero" },
      { id: "B", text: "Exactly one" },
      // distractor: skips the extraneous check
      { id: "C", text: "Exactly two" },
      // distractor: treats the equation as an identity
      { id: "D", text: "Infinitely many" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Radical Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~50s):** Squaring gives $x^2 - 13x + 12 = 0$, so $x = 1$ or $x = 12$. Only $x = 12$ survives the check, so there is exactly one solution.\n\n**The Full Solution:**\nStep 1: Square both sides: $5x + 4 = x^2 - 8x + 16$, so $x^2 - 13x + 12 = 0$.\nStep 2: $(x - 1)(x - 12) = 0$, giving the candidates $x = 1$ and $x = 12$.\nStep 3: Test each in the original equation. For $x = 12$: $\\sqrt{64} = 8$ and $12 - 4 = 8$, true. For $x = 1$: $\\sqrt{9} = 3$ but $1 - 4 = -3$, false. Check: the surviving solution is unique, so the equation has exactly one real solution. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (Zero): rejects both candidates, as if squaring always manufactured extraneous roots.\n* Choice C (Exactly two): reports both roots of the squared equation without testing them.\n* Choice D (Infinitely many): would require the two sides to be the same expression for every $x$, which they are not.\n\n**Test Day Takeaway:** Squaring can add roots but never loses them — solve the squared equation, then keep only the candidates that satisfy the original.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "radical-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-321",
    domain: "advanced-math",
    skills: ["radical-equations"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The equation $x - \\sqrt{x + 7} = 5$ is given. Which value or values of $x$ satisfy this equation?",
    choices: [
      // distractor: selects the extraneous root
      { id: "A", text: "$x = 2$ only" },
      // distractor: sign error when factoring
      { id: "B", text: "$x = -9$ and $x = -2$" },
      // distractor: skips the extraneous check
      { id: "C", text: "$x = 2$ and $x = 9$" },
      { id: "D", text: "$x = 9$ only" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Radical Equation**\n\n**Choice D is correct.**\n\n**The Fast Way (~55s):** Isolate the radical: $\\sqrt{x + 7} = x - 5$. Squaring gives $(x - 2)(x - 9) = 0$, and only $x = 9$ satisfies the original equation.\n\n**The Full Solution:**\nStep 1: Move the radical: $x - 5 = \\sqrt{x + 7}$.\nStep 2: Square both sides: $x^2 - 10x + 25 = x + 7$, so $x^2 - 11x + 18 = 0$, which factors as $(x - 2)(x - 9) = 0$.\nStep 3: Test both candidates in the original equation. For $x = 9$: $9 - \\sqrt{16} = 9 - 4 = 5$, true. For $x = 2$: $2 - \\sqrt{9} = 2 - 3 = -1$, not $5$. Check: only $x = 9$ makes the right side of the isolated equation nonnegative, as a square root must be. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x = 2$ only): keeps the extraneous candidate and drops the valid one.\n* Choice B ($x = -9$ and $x = -2$): factors $x^2 - 11x + 18$ as $(x + 2)(x + 9)$, flipping both signs.\n* Choice C ($x = 2$ and $x = 9$): solves the quadratic correctly but skips the check in the original equation.\n\n**Test Day Takeaway:** Isolate, square, solve, then test — the isolated side that equals the radical must be nonnegative.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "radical-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-322",
    domain: "advanced-math",
    skills: ["radical-equations"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The equation $\\sqrt{3x + 4} = 2\\sqrt{x - 2}$ has exactly one solution. What is the value of $x$?",
    choices: [
      // distractor: distributes 4(x-2) as 4x+8
      { id: "A", text: "$-4$" },
      // distractor: does not square the coefficient 2
      { id: "B", text: "$-3$" },
      // distractor: distributes 4(x-2) as 4x-2
      { id: "C", text: "$6$" },
      { id: "D", text: "$12$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Radical Equation**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** Squaring both sides gives $3x + 4 = 4(x - 2)$, so $3x + 4 = 4x - 8$ and $x = 12$.\n\n**The Full Solution:**\nStep 1: Square each side in full. The right side is $\\left(2\\sqrt{x - 2}\\right)^2 = 2^2(x - 2) = 4(x - 2)$, so $3x + 4 = 4(x - 2)$.\nStep 2: Distribute: $3x + 4 = 4x - 8$, so $12 = x$.\nStep 3: $x = 12$. Check: $\\sqrt{3(12) + 4} = \\sqrt{40}$ and $2\\sqrt{12 - 2} = 2\\sqrt{10} = \\sqrt{40}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): distributes $4(x - 2)$ as $4x + 8$, flipping the sign of the constant.\n* Choice B ($-3$): forgets to square the coefficient $2$, solving $3x + 4 = x - 2$.\n* Choice C ($6$): distributes $4(x - 2)$ as $4x - 2$, multiplying only the first term.\n\n**Test Day Takeaway:** Squaring $c\\sqrt{E}$ gives $c^2E$ — the coefficient gets squared too, and it multiplies the entire radicand.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "radical-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  // ─── P.B. EXPONENTIAL EQ WITH COMMON BASE (bank-am-323..330) ──────────────
  // Rewrite both sides as same base, set exponents equal.
  {
    id: "bank-am-323",
    domain: "advanced-math",
    skills: ["exponential-functions"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The equation $2^x = 128$ is given, where $x$ is a positive integer. What is the value of $x$?",
    choices: [
      // distractor: stops at 2^6 = 64
      { id: "A", text: "$6$" },
      { id: "B", text: "$7$" },
      // distractor: overshoots to 2^8 = 256
      { id: "C", text: "$8$" },
      // distractor: divides 128 by 2
      { id: "D", text: "$64$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $128 = 2^7$, so $2^x = 2^7$ and $x = 7$.\n\n**The Full Solution:**\nStep 1: Write the right side as a power of the same base: $2, 4, 8, 16, 32, 64, 128$ is the list of powers of $2$, and $128$ is the seventh.\nStep 2: The equation becomes $2^x = 2^7$.\nStep 3: Equal powers of the same base force equal exponents, so $x = 7$. Check: $2^7 = 128$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): stops one doubling short, since $2^6 = 64$.\n* Choice C ($8$): goes one doubling too far, since $2^8 = 256$.\n* Choice D ($64$): divides $128$ by $2$ instead of solving for the exponent.\n\n**Test Day Takeaway:** Rewrite both sides as powers of one base, then set the exponents equal.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "exponential-equation-with-common-base",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-324",
    domain: "advanced-math",
    skills: ["exponential-functions"],
    difficulty: "easy",
    type: "fill-in",
    question: "The expression $7^{2x}$ is equal to $7^{10}$ for exactly one value of $x$. What is that value?",
    correctAnswer: "5",
    explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~15s):** The bases already match, so $2x = 10$ and $x = 5$.\n\n**The Full Solution:**\nStep 1: Both sides are powers of $7$, so the exponents must be equal: $2x = 10$.\nStep 2: Divide each side by $2$.\nStep 3: $x = 5$. Check: $7^{2(5)} = 7^{10}$. $\\checkmark$\n\n**Common Mistakes:** Answering $10$ sets $x$ equal to the exponent on the right without undoing the coefficient $2$. Answering $20$ multiplies by $2$ instead of dividing. Trying to compute $7^{10}$ as a number wastes time; the bases match, so only the exponents matter.\n\n**Test Day Takeaway:** Once the bases agree, the problem is the linear equation formed by the exponents.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "exponential-equation-with-common-base",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-325",
    domain: "advanced-math",
    skills: ["exponential-functions"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The equation $3^{2x} = 27^{x - 4}$ has exactly one solution. What is the value of $x$?",
    choices: [
      // distractor: sign slip in the last step
      { id: "A", text: "$-12$" },
      // distractor: never rewrites 27 as a power of 3
      { id: "B", text: "$-4$" },
      // distractor: distributes the 3 to x only
      { id: "C", text: "$4$" },
      { id: "D", text: "$12$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**Choice D is correct.**\n\n**The Fast Way (~35s):** $27 = 3^3$, so $3^{2x} = 3^{3(x - 4)}$. Then $2x = 3x - 12$, so $x = 12$.\n\n**The Full Solution:**\nStep 1: Rewrite the right side with base $3$: $27^{x - 4} = \\left(3^3\\right)^{x - 4} = 3^{3x - 12}$.\nStep 2: Equal powers of $3$ force $2x = 3x - 12$.\nStep 3: Subtracting $3x$ gives $-x = -12$, so $x = 12$. Check: $3^{24}$ on the left and $27^{8} = \\left(3^3\\right)^8 = 3^{24}$ on the right. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-12$): reaches $-x = -12$ and then reports $x = -12$, dropping the final sign change.\n* Choice B ($-4$): sets the exponents equal without rewriting $27$, solving $2x = x - 4$.\n* Choice C ($4$): rewrites $27$ as $3^3$ but multiplies only the $x$ term, solving $2x = 3x - 4$.\n\n**Test Day Takeaway:** When you raise a power to a power, the outer exponent multiplies the ENTIRE inner exponent, parentheses included.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "exponential-equation-with-common-base",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-326",
    domain: "advanced-math",
    skills: ["exponential-functions"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The equation $3^{x - 2} = 243$ has exactly one solution. What is the value of $x$?",
    choices: [
      // distractor: subtracts 2 instead of adding
      { id: "A", text: "$3$" },
      // distractor: reports the exponent 5 without undoing the -2
      { id: "B", text: "$5$" },
      // distractor: uses 243 = 3^4
      { id: "C", text: "$6$" },
      { id: "D", text: "$7$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** $243 = 3^5$, so $x - 2 = 5$ and $x = 7$.\n\n**The Full Solution:**\nStep 1: List powers of $3$: $3, 9, 27, 81, 243$. So $243 = 3^5$.\nStep 2: The equation becomes $3^{x - 2} = 3^5$, so $x - 2 = 5$.\nStep 3: $x = 7$. Check: $3^{7 - 2} = 3^5 = 243$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): subtracts $2$ from $5$ instead of adding it.\n* Choice B ($5$): reports the exponent $5$ and forgets to undo the $-2$.\n* Choice C ($6$): miscounts and uses $243 = 3^4$, solving $x - 2 = 4$.\n\n**Test Day Takeaway:** Matching the bases turns the problem into a one-step linear equation — finish that step.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "exponential-equation-with-common-base",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-327",
    domain: "advanced-math",
    skills: ["exponential-functions"],
    difficulty: "medium",
    type: "fill-in",
    question: "If $27^x = 9$, what is the value of $x$?",
    correctAnswer: "2/3",
    explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**The correct answer is $\\dfrac{2}{3}$.**\n\n**The Fast Way (~30s):** Write both sides in base $3$: $3^{3x} = 3^2$, so $3x = 2$ and $x = \\dfrac{2}{3}$.\n\n**The Full Solution:**\nStep 1: $27 = 3^3$ and $9 = 3^2$, so the equation becomes $\\left(3^3\\right)^x = 3^2$.\nStep 2: The left side is $3^{3x}$, so $3x = 2$.\nStep 3: $x = \\dfrac{2}{3}$. Check: $27^{2/3} = \\left(\\sqrt[3]{27}\\right)^2 = 3^2 = 9$. $\\checkmark$\n\n**Common Mistakes:** Dividing $27$ by $9$ gives $3$, which answers a different question. Setting $2x = 3$ instead of $3x = 2$ inverts the fraction and gives $\\dfrac{3}{2}$. Answering $1.5$ is the same inversion written as a decimal.\n\n**Test Day Takeaway:** Choose the smallest base that generates both numbers, then read the exponents off carefully — the base's exponent multiplies $x$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "exponential-equation-with-common-base",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-328",
    domain: "advanced-math",
    skills: ["exponential-functions"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The equation $9^{2x - 1} = 27^{x + 4}$ has exactly one solution. What is the value of $x$?",
    choices: [
      // distractor: sets exponents equal without converting bases
      { id: "A", text: "$5$" },
      // distractor: sign slip moving the -2
      { id: "B", text: "$10$" },
      // distractor: distributes the 2 to 2x only
      { id: "C", text: "$13$" },
      { id: "D", text: "$14$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**Choice D is correct.**\n\n**The Fast Way (~45s):** In base $3$ the equation is $3^{4x - 2} = 3^{3x + 12}$, so $4x - 2 = 3x + 12$ and $x = 14$.\n\n**The Full Solution:**\nStep 1: $9 = 3^2$ and $27 = 3^3$, so the left side is $3^{2(2x - 1)} = 3^{4x - 2}$ and the right side is $3^{3(x + 4)} = 3^{3x + 12}$.\nStep 2: Equal powers of $3$ force $4x - 2 = 3x + 12$.\nStep 3: Subtracting $3x$ and adding $2$ gives $x = 14$. Check: $4(14) - 2 = 54$ and $3(14) + 12 = 54$, so both sides are $3^{54}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): sets $2x - 1 = x + 4$, never converting $9$ and $27$ to a common base.\n* Choice B ($10$): moves the $-2$ to the wrong side, solving $4x + 2 = 3x + 12$.\n* Choice C ($13$): distributes the outer $2$ only to the $2x$ term, solving $4x - 1 = 3x + 12$.\n\n**Test Day Takeaway:** Convert both sides to the same base FIRST, and distribute each outer exponent across the whole inner expression.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "exponential-equation-with-common-base",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-329",
    domain: "advanced-math",
    skills: ["exponential-functions"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "Which of the following is a solution to the equation $5^{x^2 - 3x} = 5^{10}$?",
    choices: [
      // distractor: sign error in the factoring
      { id: "A", text: "$-5$" },
      { id: "B", text: "$-2$" },
      // distractor: sets the exponent equal to 0
      { id: "C", text: "$3$" },
      // distractor: reports the exponent instead of x
      { id: "D", text: "$10$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** The bases match, so $x^2 - 3x = 10$. Then $(x - 5)(x + 2) = 0$, and of the two solutions, $x = -2$ is listed.\n\n**The Full Solution:**\nStep 1: Equal powers of $5$ force the exponents to be equal: $x^2 - 3x = 10$.\nStep 2: Rearranging gives $x^2 - 3x - 10 = 0$, which factors as $(x - 5)(x + 2) = 0$.\nStep 3: The solutions are $x = 5$ and $x = -2$; only $-2$ appears among the choices. Check: $(-2)^2 - 3(-2) = 4 + 6 = 10$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): factors as $(x + 5)(x - 2)$, flipping both signs; $(-5)^2 - 3(-5) = 40$, not $10$.\n* Choice C ($3$): solves $x^2 - 3x = 0$, ignoring the exponent on the right; $3^2 - 3(3) = 0$.\n* Choice D ($10$): reports the exponent $10$ as if it were $x$; $10^2 - 3(10) = 70$.\n\n**Test Day Takeaway:** Matching bases can leave a QUADRATIC in the exponents — solve it, then check which root the choices actually offer.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "exponential-equation-with-common-base",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-330",
    domain: "advanced-math",
    skills: ["exponential-functions"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The equation $\\left(\\dfrac{1}{3}\\right)^{x} = 81$ has exactly one solution. What is the value of $x$?",
    choices: [
      { id: "A", text: "$-4$" },
      // distractor: uses 81 = 3^3 with the reciprocal
      { id: "B", text: "$-3$" },
      // distractor: uses 81 = 3^3 and ignores the reciprocal
      { id: "C", text: "$3$" },
      // distractor: ignores the reciprocal base
      { id: "D", text: "$4$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** $\\dfrac{1}{3} = 3^{-1}$ and $81 = 3^4$, so $3^{-x} = 3^4$ and $x = -4$.\n\n**The Full Solution:**\nStep 1: Rewrite the base as a power of $3$: $\\left(\\dfrac{1}{3}\\right)^x = \\left(3^{-1}\\right)^x = 3^{-x}$.\nStep 2: Rewrite the right side: $81 = 3^4$, so $3^{-x} = 3^4$ and $-x = 4$.\nStep 3: $x = -4$. Check: $\\left(\\dfrac{1}{3}\\right)^{-4} = 3^4 = 81$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-3$): handles the reciprocal but miscounts, using $81 = 3^3$.\n* Choice C ($3$): makes both errors, using $81 = 3^3$ and dropping the negative from the reciprocal base.\n* Choice D ($4$): ignores the reciprocal entirely, solving $3^x = 81$.\n\n**Test Day Takeaway:** A reciprocal base is a negative exponent: $\\left(\\dfrac{1}{b}\\right)^x = b^{-x}$, so the sign of the answer flips.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "exponential-equation-with-common-base",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  // ─── P.B. DISTANCE BETWEEN X-INTERCEPTS (bank-am-331..338) ─────────────────
  // |root_a − root_b| for a parabola. Often via Vieta's: |a − b| = √((a+b)² − 4ab).
  {
    id: "bank-am-331",
    domain: "advanced-math",
    skills: ["quadratics"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In the $xy$-plane, the graph of $y = (x + 1)(x - 5)$ is shown. The graph crosses the $x$-axis at two points. What is the distance between those two points?",
    diagram: { type: "parabola", params: { vertex: { h: 2, k: -9 }, a: 1, xRange: [-4, 8], yRange: [-10, 10], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showVertex: true } },
    choices: [
      // distractor: adds the zeros
      { id: "A", text: "$4$" },
      // distractor: reports only the greater zero
      { id: "B", text: "$5$" },
      { id: "C", text: "$6$" },
      // distractor: doubles the greater zero
      { id: "D", text: "$10$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The factored form gives zeros at $x = -1$ and $x = 5$, so the intercepts are $5 - (-1) = 6$ units apart.\n\n**The Full Solution:**\nStep 1: The graph crosses the $x$-axis where $y = 0$, so $(x + 1)(x - 5) = 0$.\nStep 2: The zero-product property gives $x = -1$ and $x = 5$, matching the two crossings on the graph.\nStep 3: The distance between $(-1, 0)$ and $(5, 0)$ is $|5 - (-1)| = 6$. Check: the axis of symmetry sits at $x = 2$, exactly $3$ units from each intercept, and $3 + 3 = 6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): adds the zeros, $-1 + 5 = 4$, instead of subtracting them.\n* Choice B ($5$): reports only the greater zero rather than the gap between the two.\n* Choice D ($10$): doubles the greater zero, as if the graph were symmetric about the $y$-axis.\n\n**Test Day Takeaway:** Distance along the $x$-axis is a subtraction: greater zero minus lesser zero, never a sum.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "distance-between-x-intercepts",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-332",
    domain: "advanced-math",
    skills: ["quadratics"],
    difficulty: "easy",
    type: "fill-in",
    question: "The function $f$ is defined by $f(x) = 4x^2 - 25$. In the $xy$-plane, the graph of $y = f(x)$ crosses the $x$-axis at two points. What is the distance between those two points?",
    correctAnswer: "5",
    explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~25s):** $4x^2 = 25$ gives $x = \\pm\\dfrac{5}{2}$, so the intercepts are $\\dfrac{5}{2} - \\left(-\\dfrac{5}{2}\\right) = 5$ apart.\n\n**The Full Solution:**\nStep 1: Set $f(x) = 0$: $4x^2 - 25 = 0$, a difference of squares that factors as $(2x - 5)(2x + 5) = 0$.\nStep 2: The zeros are $x = \\dfrac{5}{2}$ and $x = -\\dfrac{5}{2}$.\nStep 3: The distance is $\\dfrac{5}{2} + \\dfrac{5}{2} = 5$. Check: the graph is symmetric about the $y$-axis, so each intercept is $2.5$ units from the origin. $\\checkmark$\n\n**Common Mistakes:** Answering $2.5$ reports one intercept instead of the gap between two. Answering $6.25$ solves $x^2 = \\dfrac{25}{4}$ and stops before taking the square root. Answering $10$ doubles the full distance rather than doubling one intercept.\n\n**Test Day Takeaway:** With a difference of squares the two zeros are opposites, so the distance is simply twice the positive zero.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "distance-between-x-intercepts",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-333",
    domain: "advanced-math",
    skills: ["quadratics"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The graph of the quadratic function $g$, where $g(x) = x^2 + 4x - 21$, is shown in the $xy$-plane. The graph intersects the $x$-axis at two points. What is the distance between those two points?",
    diagram: { type: "parabola", params: { vertex: { h: -2, k: -25 }, a: 1, xRange: [-9, 5], yRange: [-28, 8], xTickInterval: 2, yTickInterval: 4, gridInterval: 2, showVertex: true } },
    choices: [
      // distractor: uses the sum of the zeros
      { id: "A", text: "$4$" },
      // distractor: reports half the distance
      { id: "B", text: "$5$" },
      { id: "C", text: "$10$" },
      // distractor: uses the constant term
      { id: "D", text: "$21$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** $x^2 + 4x - 21 = (x + 7)(x - 3)$, so the zeros are $-7$ and $3$ and the distance is $3 - (-7) = 10$.\n\n**The Full Solution:**\nStep 1: The intercepts satisfy $g(x) = 0$, so factor: $x^2 + 4x - 21 = (x + 7)(x - 3)$.\nStep 2: The zeros are $x = -7$ and $x = 3$, the two crossings visible on the graph.\nStep 3: The distance between $(-7, 0)$ and $(3, 0)$ is $|3 - (-7)| = 10$. Check: the vertex sits at $x = -2$, which is $5$ units from each intercept. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): uses $|-7 + 3| = 4$, adding the zeros instead of subtracting them.\n* Choice B ($5$): reports the distance from the axis of symmetry to one intercept, which is half the answer.\n* Choice D ($21$): reads the constant term as a length.\n\n**Test Day Takeaway:** Factor, list the zeros, subtract — and remember the vertex is the midpoint, so half-distances are a common trap.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "distance-between-x-intercepts",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-334",
    domain: "advanced-math",
    skills: ["quadratics"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The function $h$ is defined by $h(x) = 3x^2 + 6x - 45$. In the $xy$-plane, the graph of $y = h(x)$ intersects the $x$-axis at points $M$ and $N$. What is the length of $\\overline{MN}$?",
    choices: [
      // distractor: uses the sum of the zeros
      { id: "A", text: "$2$" },
      // distractor: reports only the positive zero
      { id: "B", text: "$3$" },
      // distractor: reports half the distance
      { id: "C", text: "$4$" },
      { id: "D", text: "$8$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**Choice D is correct.**\n\n**The Fast Way (~35s):** Factor out $3$: $3(x^2 + 2x - 15) = 3(x + 5)(x - 3)$, so the zeros are $-5$ and $3$ and $MN = 8$.\n\n**The Full Solution:**\nStep 1: Set $h(x) = 0$ and factor out the common factor: $3\\left(x^2 + 2x - 15\\right) = 0$.\nStep 2: $x^2 + 2x - 15 = (x + 5)(x - 3)$, so the zeros are $x = -5$ and $x = 3$; dividing by $3$ does not change where the graph crosses.\nStep 3: $MN = |3 - (-5)| = 8$. Check: $h(-5) = 75 - 30 - 45 = 0$ and $h(3) = 27 + 18 - 45 = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): uses $|-5 + 3| = 2$, adding the zeros instead of subtracting.\n* Choice B ($3$): reports only the positive zero.\n* Choice C ($4$): reports the distance from the axis of symmetry $x = -1$ to one intercept, which is half of $MN$.\n\n**Test Day Takeaway:** Divide out the leading coefficient before factoring — it changes the shape of the parabola but not its $x$-intercepts.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "distance-between-x-intercepts",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-335",
    domain: "advanced-math",
    skills: ["quadratics"],
    difficulty: "medium",
    type: "fill-in",
    question: "In the $xy$-plane, the graph of $y = -2(x - 3)(x + 9)$ crosses the $x$-axis at two points. What is the distance between those two points?",
    correctAnswer: "12",
    explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~20s):** The factors give zeros at $x = 3$ and $x = -9$, so the distance is $3 - (-9) = 12$.\n\n**The Full Solution:**\nStep 1: The graph crosses the $x$-axis where $y = 0$: $-2(x - 3)(x + 9) = 0$.\nStep 2: The factor $-2$ is never zero, so the zeros come from $x - 3 = 0$ and $x + 9 = 0$, giving $x = 3$ and $x = -9$.\nStep 3: The distance is $|3 - (-9)| = 12$. Check: the axis of symmetry is $x = -3$, which is $6$ units from each intercept. $\\checkmark$\n\n**Common Mistakes:** Answering $6$ adds the zeros, $|3 + (-9)| = 6$, instead of subtracting them — and it happens to equal the half-distance, which makes it doubly tempting. Answering $9$ reports the size of the lesser zero. Answering $24$ multiplies the distance by the leading factor $2$, which affects the parabola's width but not its intercepts.\n\n**Test Day Takeaway:** A leading coefficient in factored form never moves the $x$-intercepts — read the zeros straight from the binomials.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "distance-between-x-intercepts",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-336",
    domain: "advanced-math",
    skills: ["quadratics"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the $xy$-plane, the graph of $y = x^2 + 6x + c$, where $c$ is a constant, intersects the $x$-axis at two points that are $10$ units apart. What is the value of $c$?",
    choices: [
      // distractor: reports the y-coordinate of the vertex
      { id: "A", text: "$-25$" },
      { id: "B", text: "$-16$" },
      // distractor: sign error solving 36 + 4c = 100
      { id: "C", text: "$16$" },
      // distractor: sign error solving 4c - 36 = 100
      { id: "D", text: "$34$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**Choice B is correct.**\n\n**The Fast Way (~60s):** If the zeros are $r$ and $s$, then $r + s = -6$ and $rs = c$, so $(r - s)^2 = (r + s)^2 - 4rs = 36 - 4c = 100$, giving $c = -16$.\n\n**The Full Solution:**\nStep 1: For $x^2 + 6x + c$, the zeros satisfy $r + s = -6$ and $rs = c$.\nStep 2: The identity $(r - s)^2 = (r + s)^2 - 4rs$ turns the distance condition $|r - s| = 10$ into $36 - 4c = 100$.\nStep 3: $-4c = 64$, so $c = -16$. Check: $x^2 + 6x - 16 = (x + 8)(x - 2)$, whose zeros $-8$ and $2$ are exactly $10$ apart. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-25$): finds $c$ but then reports the vertex's $y$-coordinate, $(-3)^2 + 6(-3) - 16 = -25$.\n* Choice C ($16$): writes $(r - s)^2 = (r + s)^2 + 4rs$, solving $36 + 4c = 100$.\n* Choice D ($34$): moves the $36$ to the wrong side, solving $4c - 36 = 100$.\n\n**Test Day Takeaway:** The gap between the zeros is $\\sqrt{b^2 - 4ac}$ divided by $|a|$ — squaring the given distance turns a geometry fact into an equation for the missing constant.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "distance-between-x-intercepts",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-337",
    domain: "advanced-math",
    skills: ["quadratics"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the $xy$-plane, a parabola has its vertex at $(-2, -18)$ and passes through the point $(1, 0)$. What is the distance between the parabola's two $x$-intercepts?",
    choices: [
      // distractor: reports half the distance
      { id: "A", text: "$3$" },
      { id: "B", text: "$6$" },
      // distractor: stops at (x + 2)^2 = 9
      { id: "C", text: "$9$" },
      // distractor: uses the depth of the vertex
      { id: "D", text: "$18$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**Choice B is correct.**\n\n**The Fast Way (~55s):** The point $(1, 0)$ is an $x$-intercept $3$ units right of the axis $x = -2$, so the other intercept is $3$ units left, at $x = -5$. The distance is $6$.\n\n**The Full Solution:**\nStep 1: Vertex form gives $y = a(x + 2)^2 - 18$. Substituting $(1, 0)$ gives $0 = 9a - 18$, so $a = 2$.\nStep 2: Setting $y = 0$ gives $2(x + 2)^2 = 18$, so $(x + 2)^2 = 9$ and $x + 2 = \\pm 3$.\nStep 3: The intercepts are $x = 1$ and $x = -5$, a distance of $6$ apart. Check: their midpoint is $x = -2$, the axis of symmetry, as it must be. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): reports the distance from the vertex to one intercept, which is half the answer.\n* Choice C ($9$): stops at $(x + 2)^2 = 9$ and reports $9$ instead of taking the square root.\n* Choice D ($18$): uses $18$, the vertex's distance below the $x$-axis, as a horizontal length.\n\n**Test Day Takeaway:** The vertex is the midpoint of the two $x$-intercepts, so one intercept plus the axis of symmetry already determines the other.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "distance-between-x-intercepts",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-338",
    domain: "advanced-math",
    skills: ["quadratics"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the $xy$-plane, the graph of a quadratic function has its axis of symmetry at $x = -1$, and one of its $x$-intercepts is $(5, 0)$. What are the coordinates of the other $x$-intercept?",
    choices: [
      { id: "A", text: "$(-7, 0)$" },
      // distractor: computes -1 - 5 instead of reflecting
      { id: "B", text: "$(-6, 0)$" },
      // distractor: reflects across the y-axis
      { id: "C", text: "$(-5, 0)$" },
      // distractor: reports a point on the axis of symmetry
      { id: "D", text: "$(-1, 0)$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The intercept $x = 5$ lies $6$ units right of the axis $x = -1$, so the other lies $6$ units left, at $x = -1 - 6 = -7$.\n\n**The Full Solution:**\nStep 1: A parabola is symmetric about its axis, so the axis is the midpoint of the two $x$-intercepts.\nStep 2: The known intercept is $5 - (-1) = 6$ units to the right of $x = -1$.\nStep 3: The other intercept is $6$ units to the left: $x = -7$, so the point is $(-7, 0)$. Check: the midpoint of $-7$ and $5$ is $\\dfrac{-7 + 5}{2} = -1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($(-6, 0)$): computes $-1 - 5 = -6$, subtracting the intercept's coordinate from the axis instead of reflecting across it.\n* Choice C ($(-5, 0)$): reflects across the $y$-axis rather than across the axis of symmetry.\n* Choice D ($(-1, 0)$): reports a point on the axis of symmetry, which is not an intercept here.\n\n**Test Day Takeaway:** Reflect across the axis by matching distances: axis minus (intercept minus axis).",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "distance-between-x-intercepts",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  // === TIER 0 BANK GROWTH (2026-05-21): common-base-exponent-simplification 3 → 5 items ===

  {
    id: "bank-am-339",
    domain: "advanced-math",
    skills: ["exponent-laws"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The expression $\\dfrac{20a^7b^5}{4a^3b^2}$ is defined for $a > 0$ and $b > 0$. Which of the following is equivalent to this expression?",
    choices: [
      // distractor: adds the exponents
      { id: "A", text: "$5a^{10}b^{7}$" },
      // distractor: multiplies the exponents
      { id: "B", text: "$5a^{21}b^{10}$" },
      { id: "C", text: "$5a^4b^3$" },
      // distractor: subtracts the coefficients
      { id: "D", text: "$16a^4b^3$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Divide the coefficients and subtract the exponents: $\\dfrac{20}{4} = 5$, $a^{7-3} = a^4$, $b^{5-2} = b^3$.\n\n**The Full Solution:**\nStep 1: Split the quotient into three factors: $\\dfrac{20}{4} \\cdot \\dfrac{a^7}{a^3} \\cdot \\dfrac{b^5}{b^2}$.\nStep 2: The coefficients divide to $5$, and the quotient rule $\\dfrac{x^m}{x^n} = x^{m-n}$ gives $a^4$ and $b^3$.\nStep 3: The expression equals $5a^4b^3$. Check: $5a^4b^3 \\cdot 4a^3b^2 = 20a^7b^5$, the original numerator. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5a^{10}b^{7}$): adds the exponents, which is the rule for multiplying, not dividing.\n* Choice B ($5a^{21}b^{10}$): multiplies the exponents, which is the rule for a power of a power.\n* Choice D ($16a^4b^3$): subtracts the coefficients, $20 - 4$, instead of dividing them.\n\n**Test Day Takeaway:** Coefficients divide; exponents on the same base subtract. The two operations are not the same.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "common-base-exponent-simplification",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-340",
    domain: "advanced-math",
    skills: ["exponent-laws"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The expression $\\dfrac{\\left(3x^4\\right)^3}{9x^5}$ is defined for $x > 0$. Which of the following is equivalent to this expression?",
    choices: [
      // distractor: adds 4 and 3 in the numerator
      { id: "A", text: "$3x^2$" },
      // distractor: adds the exponents when dividing
      { id: "B", text: "$3x^{17}$" },
      // distractor: does not cube the coefficient
      { id: "C", text: "$\\dfrac{x^7}{3}$" },
      { id: "D", text: "$3x^7$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** $\\left(3x^4\\right)^3 = 27x^{12}$, and $\\dfrac{27x^{12}}{9x^5} = 3x^7$.\n\n**The Full Solution:**\nStep 1: Raise both factors inside the parentheses to the third power: $\\left(3x^4\\right)^3 = 3^3 \\cdot x^{4 \\cdot 3} = 27x^{12}$.\nStep 2: Divide the coefficients: $\\dfrac{27}{9} = 3$.\nStep 3: Subtract the exponents: $x^{12-5} = x^7$, so the expression is $3x^7$. Check: $3x^7 \\cdot 9x^5 = 27x^{12}$, which is $\\left(3x^4\\right)^3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3x^2$): adds $4 + 3$ inside the parentheses, using $27x^7$ in the numerator.\n* Choice B ($3x^{17}$): adds the exponents when dividing instead of subtracting them.\n* Choice C ($\\dfrac{x^7}{3}$): raises only $x^4$ to the third power and leaves the $3$ alone, using $3x^{12}$ in the numerator.\n\n**Test Day Takeaway:** A power outside parentheses hits every factor inside — the coefficient gets raised to that power too.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "common-base-exponent-simplification",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // === TIER 1 BANK GROWTH (2026-05-21): advanced math patterns @ 4 items → @ 10 items ===

  // --- build-exponential-model (4 → 10) ---
  {
    id: "bank-am-341",
    domain: "advanced-math",
    skills: ["exponential-growth-decay"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The table gives the number of yeast cells in a culture at three times after the culture was prepared. The number of cells grows exponentially. Which function $N$ gives the number of yeast cells $t$ hours after the culture was prepared?",
    diagram: { type: "dataTable", params: { headers: ["Time t (hours)", "Number of yeast cells"], rows: [["0", "40"], ["1", "120"], ["2", "360"]] } },
    choices: [
      // distractor: swaps the initial value and the growth factor
      { id: "A", text: "$N(t) = 3(40)^t$" },
      // distractor: uses a power function
      { id: "B", text: "$N(t) = 40t^3$" },
      // distractor: models a constant increase
      { id: "C", text: "$N(t) = 40 + 80t$" },
      { id: "D", text: "$N(t) = 40(3)^t$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Build Exponential Model**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** The count starts at $40$ and triples each hour ($40 \\to 120 \\to 360$), so $N(t) = 40(3)^t$.\n\n**The Full Solution:**\nStep 1: An exponential model has the form $N(t) = N_0(b)^t$, where $N_0$ is the value at $t = 0$. The table gives $N_0 = 40$.\nStep 2: The growth factor is the ratio of consecutive values: $\\dfrac{120}{40} = 3$ and $\\dfrac{360}{120} = 3$, so $b = 3$.\nStep 3: $N(t) = 40(3)^t$. Check: $N(2) = 40(9) = 360$, matching the table. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($N(t) = 3(40)^t$): swaps the initial value and the growth factor, giving $N(0) = 3$.\n* Choice B ($N(t) = 40t^3$): uses a power function instead of an exponential one, giving $N(0) = 0$.\n* Choice C ($N(t) = 40 + 80t$): models the first change, $120 - 40 = 80$, as a constant hourly increase, which fails at $t = 2$.\n\n**Test Day Takeaway:** Divide consecutive outputs, not subtract them — a constant RATIO means exponential, a constant DIFFERENCE means linear.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "build-exponential-model",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-342",
    domain: "advanced-math",
    skills: ["exponential-growth-decay"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A savings account is opened with a deposit of $\\$2{,}500$, and the balance increases by $4\\%$ each year. Which function $B$ gives the balance, in dollars, $t$ years after the account was opened?",
    choices: [
      // distractor: uses the rate as the growth factor
      { id: "A", text: "$B(t) = 2{,}500(0.04)^t$" },
      // distractor: uses the percent number as the factor
      { id: "B", text: "$B(t) = 2{,}500(4)^t$" },
      { id: "C", text: "$B(t) = 2{,}500(1.04)^t$" },
      // distractor: adds simple interest each year
      { id: "D", text: "$B(t) = 2{,}500 + 100t$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Build Exponential Model**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Growing by $4\\%$ multiplies the balance by $1 + 0.04 = 1.04$ each year, so $B(t) = 2{,}500(1.04)^t$.\n\n**The Full Solution:**\nStep 1: The model is $B(t) = B_0(b)^t$ with $B_0 = 2{,}500$, the opening deposit.\nStep 2: An increase of $4\\%$ means the new balance is $100\\% + 4\\% = 104\\%$ of the old one, so $b = 1.04$.\nStep 3: $B(t) = 2{,}500(1.04)^t$. Check: after one year the balance is $2{,}500(1.04) = 2{,}600$, which is $\\$100$ more, exactly $4\\%$ of $\\$2{,}500$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($B(t) = 2{,}500(0.04)^t$): uses the rate itself as the factor, which would shrink the balance to $\\$100$ after one year.\n* Choice B ($B(t) = 2{,}500(4)^t$): uses the percent number $4$ as the factor, quadrupling the balance each year.\n* Choice D ($B(t) = 2{,}500 + 100t$): adds a flat $\\$100$ per year, which is simple interest rather than compounding.\n\n**Test Day Takeaway:** A percent increase becomes the factor $1 + r$, not $r$ — the original amount is still there after the growth.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "build-exponential-model",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-343",
    domain: "advanced-math",
    skills: ["exponential-growth-decay"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A tractor purchased for $\\$36{,}000$ loses $15\\%$ of its value each year. The table gives the tractor's value at purchase and at the end of each of the first two years. Which function $V$ gives the tractor's value, in dollars, $t$ years after it was purchased?",
    diagram: { type: "dataTable", params: { headers: ["Years after purchase", "Value (dollars)"], rows: [["0", "36,000"], ["1", "30,600"], ["2", "26,010"]] } },
    choices: [
      { id: "A", text: "$V(t) = 36{,}000(0.85)^t$" },
      // distractor: uses the percent lost as the factor
      { id: "B", text: "$V(t) = 36{,}000(0.15)^t$" },
      // distractor: adds the rate instead of subtracting
      { id: "C", text: "$V(t) = 36{,}000(1.15)^t$" },
      // distractor: subtracts a constant each year
      { id: "D", text: "$V(t) = 36{,}000 - 5{,}400t$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Build Exponential Model**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Losing $15\\%$ leaves $85\\%$, so the factor is $0.85$ and $V(t) = 36{,}000(0.85)^t$.\n\n**The Full Solution:**\nStep 1: The model is $V(t) = V_0(b)^t$ with $V_0 = 36{,}000$, the purchase price.\nStep 2: A $15\\%$ loss leaves $100\\% - 15\\% = 85\\%$ of the previous value, so $b = 0.85$.\nStep 3: $V(t) = 36{,}000(0.85)^t$. Check: $36{,}000(0.85) = 30{,}600$ and $30{,}600(0.85) = 26{,}010$, matching the last two table rows. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($V(t) = 36{,}000(0.15)^t$): uses the percent lost as the factor, which would leave only $\\$5{,}400$ after one year.\n* Choice C ($V(t) = 36{,}000(1.15)^t$): adds the rate instead of subtracting it, modeling growth rather than depreciation.\n* Choice D ($V(t) = 36{,}000 - 5{,}400t$): subtracts a fixed $\\$5{,}400$ each year, which would give $\\$25{,}200$ at $t = 2$ instead of $\\$26{,}010$.\n\n**Test Day Takeaway:** A percent DECREASE gives the factor $1 - r$; the table's second row is the fastest way to confirm you chose it correctly.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "build-exponential-model",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-344",
    domain: "advanced-math",
    skills: ["exponential-growth-decay"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A sample of a radioactive isotope has a mass of $96$ milligrams, and the isotope has a half-life of $8$ days. The table gives the mass remaining at the time of measurement and at two later times. Which function $m$ gives the mass, in milligrams, remaining $t$ days after the sample was measured?",
    diagram: { type: "dataTable", params: { headers: ["Time (days)", "Mass remaining (milligrams)"], rows: [["0", "96"], ["8", "48"], ["16", "24"]] } },
    choices: [
      // distractor: multiplies by the half-life instead of dividing
      { id: "A", text: "$m(t) = 96\\left(\\dfrac{1}{2}\\right)^{8t}$" },
      { id: "B", text: "$m(t) = 96\\left(\\dfrac{1}{2}\\right)^{t/8}$" },
      // distractor: treats the half-life as one day
      { id: "C", text: "$m(t) = 96\\left(\\dfrac{1}{2}\\right)^{t}$" },
      // distractor: models a constant loss per day
      { id: "D", text: "$m(t) = 96 - 6t$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Build Exponential Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** The mass halves once per $8$ days, so the number of halvings is $\\dfrac{t}{8}$ and $m(t) = 96\\left(\\dfrac{1}{2}\\right)^{t/8}$.\n\n**The Full Solution:**\nStep 1: Half-life decay has the form $m(t) = m_0\\left(\\dfrac{1}{2}\\right)^{t/H}$, where $H$ is the half-life and $m_0$ is the starting mass.\nStep 2: Here $m_0 = 96$ and $H = 8$, so the exponent is $\\dfrac{t}{8}$.\nStep 3: $m(t) = 96\\left(\\dfrac{1}{2}\\right)^{t/8}$. Check: at $t = 8$ the exponent is $1$, giving $48$; at $t = 16$ it is $2$, giving $24$ — the last two table rows. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($m(t) = 96\\left(\\dfrac{1}{2}\\right)^{8t}$): multiplies by the half-life instead of dividing, which would leave far less than $48$ milligrams at $t = 8$.\n* Choice C ($m(t) = 96\\left(\\dfrac{1}{2}\\right)^{t}$): treats the half-life as one day, halving the mass every day.\n* Choice D ($m(t) = 96 - 6t$): treats the first $48$-milligram drop as a constant $6$ milligrams per day, which would reach $0$ at $t = 16$.\n\n**Test Day Takeaway:** The exponent counts how many half-lives have passed, so divide the elapsed time by the half-life.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "build-exponential-model",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-345",
    domain: "advanced-math",
    skills: ["exponential-growth-decay"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The table gives the area covered by algae in a lake at the start of each of three consecutive years. The area covered grows exponentially. Which function $A$ gives the area covered, in square meters, $t$ years after 2018?",
    diagram: { type: "dataTable", params: { headers: ["Year", "Area covered (square meters)"], rows: [["2018", "250"], ["2019", "300"], ["2020", "360"]] } },
    choices: [
      // distractor: models a constant yearly increase
      { id: "A", text: "$A(t) = 250 + 55t$" },
      // distractor: uses the two-year factor as the yearly factor
      { id: "B", text: "$A(t) = 250(1.44)^t$" },
      { id: "C", text: "$A(t) = 250(1.2)^t$" },
      // distractor: doubles the exponent
      { id: "D", text: "$A(t) = 250(1.2)^{2t}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Build Exponential Model**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** Consecutive years give $\\dfrac{300}{250} = 1.2$ and $\\dfrac{360}{300} = 1.2$, so $A(t) = 250(1.2)^t$ with $t$ measured from 2018.\n\n**The Full Solution:**\nStep 1: Measure $t$ from 2018, so the initial area is $A(0) = 250$ square meters.\nStep 2: The ratio of each year's area to the previous year's is $1.2$ in both cases, so the yearly growth factor is $1.2$.\nStep 3: $A(t) = 250(1.2)^t$. Check: $A(2) = 250(1.44) = 360$, matching the 2020 row. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($A(t) = 250 + 55t$): uses the average yearly increase of $\\dfrac{360 - 250}{2} = 55$ square meters, treating the growth as linear.\n* Choice B ($A(t) = 250(1.44)^t$): uses the two-year factor $\\dfrac{360}{250} = 1.44$ as if it applied every year.\n* Choice D ($A(t) = 250(1.2)^{2t}$): doubles the exponent, applying two years of growth in each single year.\n\n**Test Day Takeaway:** Match the growth factor to the time step of the exponent — a factor measured over two years belongs with an exponent of $\\dfrac{t}{2}$, not $t$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "build-exponential-model",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-346",
    domain: "advanced-math",
    skills: ["exponential-growth-decay"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The table gives the balance of an account when it was opened and at the end of each of the first two months. The balance grows exponentially. Which function $B$ gives the balance, in dollars, $t$ years after the account was opened?",
    diagram: { type: "dataTable", params: { headers: ["Months after opening", "Balance (dollars)"], rows: [["0", "500"], ["1", "550"], ["2", "605"]] } },
    choices: [
      // distractor: leaves the exponent in months
      { id: "A", text: "$B(t) = 500(1.1)^{t}$" },
      // distractor: divides by 12 instead of multiplying
      { id: "B", text: "$B(t) = 500(1.1)^{t/12}$" },
      { id: "C", text: "$B(t) = 500(1.1)^{12t}$" },
      // distractor: scales the initial deposit by 12
      { id: "D", text: "$B(t) = 6{,}000(1.1)^{12t}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Build Exponential Model**\n\n**Choice C is correct.**\n\n**The Fast Way (~60s):** The balance multiplies by $1.1$ each MONTH, and a year holds $12$ months, so after $t$ years the factor has been applied $12t$ times: $B(t) = 500(1.1)^{12t}$.\n\n**The Full Solution:**\nStep 1: The table gives $\\dfrac{550}{500} = 1.1$ and $\\dfrac{605}{550} = 1.1$, so the monthly growth factor is $1.1$ and the opening balance is $500$.\nStep 2: In months the model is $500(1.1)^{\\text{months}}$. The question asks for $t$ in YEARS, and $t$ years is $12t$ months.\nStep 3: Substituting gives $B(t) = 500(1.1)^{12t}$. Check: at $t = \\dfrac{1}{6}$ (two months) the exponent is $2$, giving $500(1.21) = 605$, the third table row. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($B(t) = 500(1.1)^{t}$): leaves the exponent in months, so one year of growth is counted as one month.\n* Choice B ($B(t) = 500(1.1)^{t/12}$): divides by $12$ instead of multiplying, which is the conversion for going from years to months in the wrong direction.\n* Choice D ($B(t) = 6{,}000(1.1)^{12t}$): multiplies the opening balance by $12$ rather than the exponent.\n\n**Test Day Takeaway:** Convert the TIME UNIT inside the exponent, never the initial amount — $t$ years is $12t$ compounding periods when the period is a month.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "build-exponential-model",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- discriminant-analysis (4 → 10) ---
  {
    id: "bank-am-347",
    domain: "advanced-math",
    skills: ["discriminant-analysis"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "For a quadratic equation written in the form $ax^2 + bx + c = 0$, the discriminant is $b^2 - 4ac$. What is the value of the discriminant of the equation $3x^2 - 7x + 2 = 0$?",
    choices: [
      // distractor: squares -7 as -49
      { id: "A", text: "$-73$" },
      { id: "B", text: "$25$" },
      // distractor: omits the factor of 4
      { id: "C", text: "$43$" },
      // distractor: adds 4ac instead of subtracting
      { id: "D", text: "$73$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** With $a = 3$, $b = -7$, $c = 2$: $(-7)^2 - 4(3)(2) = 49 - 24 = 25$.\n\n**The Full Solution:**\nStep 1: Match the equation to $ax^2 + bx + c = 0$: $a = 3$, $b = -7$, and $c = 2$.\nStep 2: Square $b$ first: $(-7)^2 = 49$, since squaring a negative gives a positive.\nStep 3: $49 - 4(3)(2) = 49 - 24 = 25$. Check: $25$ is a perfect square, and indeed $3x^2 - 7x + 2 = (3x - 1)(x - 2)$ has two rational solutions. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-73$): treats $(-7)^2$ as $-49$ and then subtracts $24$.\n* Choice C ($43$): omits the factor of $4$, computing $49 - 3(2)$.\n* Choice D ($73$): adds $4ac$ instead of subtracting it.\n\n**Test Day Takeaway:** Square $b$ before doing anything else — a negative $b$ always produces a positive $b^2$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "discriminant-analysis",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-348",
    domain: "advanced-math",
    skills: ["discriminant-analysis"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In the $xy$-plane, the graph of $y = x^2 - 4x + 9$ is shown. How many distinct real solutions does the equation $x^2 - 4x + 9 = 0$ have?",
    diagram: { type: "parabola", params: { vertex: { h: 2, k: 5 }, a: 1, xRange: [-2, 6], yRange: [0, 12], xTickInterval: 2, yTickInterval: 2, gridInterval: 2, showVertex: true } },
    choices: [
      { id: "A", text: "Zero" },
      // distractor: treats the vertex as a touching point
      { id: "B", text: "Exactly one" },
      // distractor: assumes every quadratic has two real solutions
      { id: "C", text: "Exactly two" },
      // distractor: treats the equation as an identity
      { id: "D", text: "Infinitely many" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The discriminant is $(-4)^2 - 4(1)(9) = 16 - 36 = -20$. A negative discriminant means no real solutions, matching a graph that never reaches the $x$-axis.\n\n**The Full Solution:**\nStep 1: Real solutions of $x^2 - 4x + 9 = 0$ are exactly the $x$-intercepts of the graph of $y = x^2 - 4x + 9$.\nStep 2: The discriminant is $b^2 - 4ac = 16 - 36 = -20$, which is negative.\nStep 3: A negative discriminant gives zero real solutions. Check: the vertex is at $x = 2$, where $y = 4 - 8 + 9 = 5$, so the lowest point of the graph is $5$ units ABOVE the $x$-axis. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B (Exactly one): reads the vertex as a point where the graph touches the $x$-axis, which happens only when the discriminant is $0$.\n* Choice C (Exactly two): assumes every quadratic crosses the $x$-axis twice.\n* Choice D (Infinitely many): would require every real number to satisfy the equation, which no quadratic does.\n\n**Test Day Takeaway:** The sign of the discriminant and the position of the vertex tell the same story — negative discriminant, no crossings.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "discriminant-analysis",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-349",
    domain: "advanced-math",
    skills: ["discriminant-analysis"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The graph of the function $g$, where $g(x) = 2x^2 - 12x + 18$, is shown in the $xy$-plane. At how many points does the graph of $g$ intersect the $x$-axis?",
    diagram: { type: "parabola", params: { vertex: { h: 3, k: 0 }, a: 2, xRange: [0, 6], yRange: [-2, 10], xTickInterval: 1, yTickInterval: 2, gridInterval: 1, showVertex: true } },
    choices: [
      // distractor: treats a zero discriminant as no intersection
      { id: "A", text: "$0$" },
      { id: "B", text: "$1$" },
      // distractor: counts the repeated zero twice
      { id: "C", text: "$2$" },
      // distractor: counts the vertex plus both branches
      { id: "D", text: "$3$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The discriminant is $(-12)^2 - 4(2)(18) = 144 - 144 = 0$, so the graph touches the $x$-axis at exactly one point.\n\n**The Full Solution:**\nStep 1: The graph meets the $x$-axis where $g(x) = 0$, so count the real solutions of $2x^2 - 12x + 18 = 0$.\nStep 2: The discriminant is $144 - 144 = 0$, which means one repeated real solution.\nStep 3: The graph therefore intersects the $x$-axis at exactly $1$ point. Check: $2x^2 - 12x + 18 = 2(x - 3)^2$, which is zero only at $x = 3$ — the vertex shown on the axis. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0$): treats a discriminant of $0$ as if it were negative; a zero discriminant still gives a real solution.\n* Choice C ($2$): counts the repeated factor $(x - 3)^2$ as two separate intersection points.\n* Choice D ($3$): counts the vertex plus both branches as separate crossings; a parabola meets a line at most twice.\n\n**Test Day Takeaway:** Discriminant $0$ means the parabola is tangent to the $x$-axis — one point of contact, not zero and not two.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "discriminant-analysis",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-350",
    domain: "advanced-math",
    skills: ["discriminant-analysis"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The equation $2x^2 - 12x + k = 0$, where $k$ is a constant, has exactly one real solution. What is the value of $k$?",
    choices: [
      // distractor: sign slip solving for k
      { id: "A", text: "$-18$" },
      // distractor: ignores the factor of 2 when completing the square
      { id: "B", text: "$9$" },
      { id: "C", text: "$18$" },
      // distractor: uses a = 1
      { id: "D", text: "$36$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Exactly one real solution means the discriminant is $0$: $(-12)^2 - 4(2)(k) = 0$, so $144 = 8k$ and $k = 18$.\n\n**The Full Solution:**\nStep 1: Here $a = 2$, $b = -12$, and $c = k$, so the discriminant is $144 - 8k$.\nStep 2: A single (repeated) real solution occurs exactly when the discriminant is $0$: $144 - 8k = 0$.\nStep 3: $8k = 144$, so $k = 18$. Check: $2x^2 - 12x + 18 = 2(x - 3)^2$, whose only zero is $x = 3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-18$): slips a sign and solves $8k = -144$.\n* Choice B ($9$): completes the square as $(x - 3)^2$ and reports $9$, ignoring the factor of $2$ multiplying the parentheses.\n* Choice D ($36$): uses $a = 1$ instead of $a = 2$, solving $144 - 4k = 0$.\n\n**Test Day Takeaway:** \"Exactly one real solution\" is the discriminant-equals-zero condition, and the leading coefficient belongs in $4ac$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "discriminant-analysis",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-351",
    domain: "advanced-math",
    skills: ["discriminant-analysis"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The equation $3x^2 + cx + 12 = 0$, where $c$ is a constant, has no real solutions. Which of the following could be the value of $c$?",
    choices: [
      // distractor: discriminant 81, two real solutions
      { id: "A", text: "$-15$" },
      // distractor: discriminant 0, exactly one real solution
      { id: "B", text: "$-12$" },
      { id: "C", text: "$6$" },
      // distractor: discriminant 25, two real solutions
      { id: "D", text: "$13$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** No real solutions means $c^2 - 4(3)(12) < 0$, so $c^2 < 144$ and $-12 < c < 12$. Of the choices, only $6$ lies in that interval.\n\n**The Full Solution:**\nStep 1: The equation has $a = 3$, middle coefficient $c$, and constant term $12$, so the discriminant is $c^2 - 4(3)(12) = c^2 - 144$.\nStep 2: No real solutions requires $c^2 - 144 < 0$, that is $c^2 < 144$, so $-12 < c < 12$.\nStep 3: Testing the choices, $6^2 = 36 < 144$, so $c = 6$ works. Check: $3x^2 + 6x + 12 = 0$ has discriminant $36 - 144 = -108 < 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-15$): gives $225 - 144 = 81 > 0$, so the equation has two distinct real solutions.\n* Choice B ($-12$): gives $144 - 144 = 0$, exactly one real solution, not none.\n* Choice D ($13$): gives $169 - 144 = 25 > 0$, again two real solutions.\n\n**Test Day Takeaway:** $c^2 < 144$ allows negative values too — test the size of $c$, not just its sign.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "discriminant-analysis",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-352",
    domain: "advanced-math",
    skills: ["discriminant-analysis"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the equation $x^2 + bx + c = 0$, $b$ and $c$ are positive constants and $b = 2c$. If the equation has exactly one real solution, what is the value of $b$?",
    choices: [
      // distractor: reports c instead of b
      { id: "A", text: "$1$" },
      { id: "B", text: "$2$" },
      // distractor: squares 2c as 2c^2
      { id: "C", text: "$4$" },
      // distractor: divides only one side by 4
      { id: "D", text: "$8$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice B is correct.**\n\n**The Fast Way (~70s):** One real solution means $b^2 - 4c = 0$. Substituting $b = 2c$ gives $4c^2 = 4c$, so $c = 1$ (since $c > 0$) and $b = 2$.\n\n**The Full Solution:**\nStep 1: With $a = 1$, the discriminant is $b^2 - 4c$, and exactly one real solution requires $b^2 - 4c = 0$.\nStep 2: Substitute $b = 2c$: $(2c)^2 - 4c = 0$, so $4c^2 - 4c = 0$ and $4c(c - 1) = 0$.\nStep 3: The roots are $c = 0$ and $c = 1$; since $c$ is positive, $c = 1$ and $b = 2(1) = 2$. Check: $x^2 + 2x + 1 = (x + 1)^2$, which has the single solution $x = -1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($1$): solves the system correctly but reports $c$ instead of $b$.\n* Choice C ($4$): squares $2c$ as $2c^2$, solving $2c^2 = 4c$ to get $c = 2$ and $b = 4$.\n* Choice D ($8$): divides only the left side of $4c^2 = 4c$ by $4$, solving $c^2 = 4c$ to get $c = 4$ and $b = 8$.\n\n**Test Day Takeaway:** Substitute the relationship between the constants INTO the discriminant condition, then discard any root the stated restrictions forbid.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "discriminant-analysis",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- discriminant-with-integer-bound (4 → 10) ---
  {
    id: "bank-am-353",
    domain: "advanced-math",
    skills: ["discriminant-analysis"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The equation $x^2 - 9x + k = 0$, where $k$ is a constant, has two distinct real solutions. What is the greatest possible integer value of $k$?",
    choices: [
      // distractor: forgets to square b
      { id: "A", text: "$2$" },
      { id: "B", text: "$20$" },
      // distractor: rounds 20.25 up
      { id: "C", text: "$21$" },
      // distractor: divides 81 by 2
      { id: "D", text: "$40$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Two distinct real solutions means $81 - 4k > 0$, so $k < 20.25$ and the greatest integer is $20$.\n\n**The Full Solution:**\nStep 1: With $a = 1$ and $b = -9$, the discriminant is $81 - 4k$.\nStep 2: Two DISTINCT real solutions requires a strictly positive discriminant: $81 - 4k > 0$, so $4k < 81$ and $k < 20.25$.\nStep 3: The greatest integer strictly below $20.25$ is $20$. Check: $k = 20$ gives $81 - 80 = 1 > 0$ (two solutions), while $k = 21$ gives $81 - 84 = -3 < 0$ (none). $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): forgets to square $b$, solving $9 - 4k > 0$ to get $k < 2.25$.\n* Choice C ($21$): rounds $20.25$ up instead of taking the greatest integer below it, which pushes the discriminant negative.\n* Choice D ($40$): divides $81$ by $2$ instead of by $4$.\n\n**Test Day Takeaway:** Solve for the bound, then test the integer on each side of it — rounding in the wrong direction is the whole trap.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "discriminant-with-integer-bound",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-354",
    domain: "advanced-math",
    skills: ["discriminant-analysis"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The equation $3x^2 + 8x + m = 0$, where $m$ is a constant, has no real solutions. What is the least possible integer value of $m$?",
    choices: [
      // distractor: rounds 16/3 down
      { id: "A", text: "$5$" },
      { id: "B", text: "$6$" },
      // distractor: omits the leading coefficient
      { id: "C", text: "$17$" },
      // distractor: omits the factor of 4
      { id: "D", text: "$22$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** No real solutions means $64 - 12m < 0$, so $m > \\dfrac{16}{3} \\approx 5.33$ and the least integer is $6$.\n\n**The Full Solution:**\nStep 1: With $a = 3$ and $b = 8$, the discriminant is $64 - 4(3)(m) = 64 - 12m$.\nStep 2: No real solutions requires $64 - 12m < 0$, so $12m > 64$ and $m > \\dfrac{16}{3}$.\nStep 3: $\\dfrac{16}{3} \\approx 5.33$, so the least integer greater than it is $6$. Check: $m = 6$ gives $64 - 72 = -8 < 0$ (no real solutions), while $m = 5$ gives $64 - 60 = 4 > 0$ (two). $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): rounds $5.33$ down instead of up, leaving a positive discriminant.\n* Choice C ($17$): omits the leading coefficient $3$, solving $64 - 4m < 0$.\n* Choice D ($22$): omits the factor of $4$, solving $64 - 3m < 0$.\n\n**Test Day Takeaway:** \"Least integer greater than\" rounds UP; confirm by testing the integer just below your answer.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "discriminant-with-integer-bound",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-355",
    domain: "advanced-math",
    skills: ["discriminant-analysis"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The equation $ax^2 + 12x + 5 = 0$, where $a$ is a positive constant, has two distinct real solutions. What is the greatest possible integer value of $a$?",
    choices: [
      { id: "A", text: "$7$" },
      // distractor: rounds 7.2 up
      { id: "B", text: "$8$" },
      // distractor: omits the factor of 4
      { id: "C", text: "$28$" },
      // distractor: drops the constant term
      { id: "D", text: "$35$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice A is correct.**\n\n**The Fast Way (~50s):** Two distinct real solutions means $144 - 20a > 0$, so $a < 7.2$ and the greatest integer is $7$.\n\n**The Full Solution:**\nStep 1: With $b = 12$ and $c = 5$, the discriminant is $144 - 4a(5) = 144 - 20a$.\nStep 2: Two distinct real solutions requires $144 - 20a > 0$, so $20a < 144$ and $a < 7.2$.\nStep 3: The greatest integer below $7.2$ is $7$, and $a = 7$ is positive as required. Check: $a = 7$ gives $144 - 140 = 4 > 0$, while $a = 8$ gives $144 - 160 = -16 < 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($8$): rounds $7.2$ up instead of taking the greatest integer below it.\n* Choice C ($28$): omits the factor of $4$, solving $144 - 5a > 0$ to get $a < 28.8$.\n* Choice D ($35$): drops the constant term $5$, solving $144 - 4a > 0$ to get $a < 36$.\n\n**Test Day Takeaway:** When the unknown sits in the leading coefficient, it still enters the discriminant through $4ac$ — multiply by $c$, not by $1$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "discriminant-with-integer-bound",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-356",
    domain: "advanced-math",
    skills: ["discriminant-analysis"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the equation $2x^2 + nx + 5 = 0$, $n$ is an integer with $-8 \\le n \\le 8$. For how many of these values of $n$ does the equation have no real solutions?",
    choices: [
      // distractor: counts only positive n
      { id: "A", text: "$6$" },
      // distractor: omits n = 0
      { id: "B", text: "$12$" },
      { id: "C", text: "$13$" },
      // distractor: counts the whole range
      { id: "D", text: "$17$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice C is correct.**\n\n**The Fast Way (~60s):** No real solutions means $n^2 - 40 < 0$, so $|n| \\le 6$ for integers. That is $n = -6$ through $n = 6$, which is $13$ values.\n\n**The Full Solution:**\nStep 1: With $a = 2$ and $c = 5$, the discriminant is $n^2 - 4(2)(5) = n^2 - 40$.\nStep 2: No real solutions requires $n^2 < 40$. Since $6^2 = 36 < 40$ and $7^2 = 49 > 40$, the integers that work are $-6 \\le n \\le 6$.\nStep 3: Counting from $-6$ to $6$ inclusive gives $6 + 1 + 6 = 13$ values. Check: $n = 6$ gives $36 - 40 = -4 < 0$, and $n = 7$ gives $49 - 40 = 9 > 0$, so the boundary is exactly where it should be. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): counts only the positive values $n = 1$ through $n = 6$.\n* Choice B ($12$): counts $-6$ through $6$ but forgets $n = 0$.\n* Choice D ($17$): counts every integer from $-8$ to $8$, ignoring the discriminant condition entirely.\n\n**Test Day Takeaway:** $n^2 < k$ is a symmetric condition — count both signs and do not lose $n = 0$ when you total them.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "discriminant-with-integer-bound",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-357",
    domain: "advanced-math",
    skills: ["discriminant-analysis"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The equation $x^2 + bx + 16 = 0$, where $b$ is a positive constant, has at least one real solution. What is the least possible value of $b$?",
    choices: [
      // distractor: reports the square root of the constant term
      { id: "A", text: "$4$" },
      { id: "B", text: "$8$" },
      // distractor: excludes the zero-discriminant case
      { id: "C", text: "$9$" },
      // distractor: reports b^2 instead of b
      { id: "D", text: "$64$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** At least one real solution means $b^2 - 64 \\ge 0$, so $b \\ge 8$ for positive $b$, and the least value is $8$.\n\n**The Full Solution:**\nStep 1: With $a = 1$ and $c = 16$, the discriminant is $b^2 - 64$.\nStep 2: \"At least one real solution\" allows a discriminant of $0$ or more: $b^2 - 64 \\ge 0$, so $b^2 \\ge 64$.\nStep 3: For a positive $b$ this means $b \\ge 8$, so the least value is $b = 8$. Check: $x^2 + 8x + 16 = (x + 4)^2$, which has the real solution $x = -4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): reports $\\sqrt{16}$, the square root of the constant term, instead of solving the discriminant condition.\n* Choice C ($9$): rules out $b = 8$, forgetting that a discriminant of $0$ still produces a real solution.\n* Choice D ($64$): reports $b^2$ rather than $b$.\n\n**Test Day Takeaway:** \"At least one\" includes the repeated-root case, so the discriminant condition uses $\\ge$, and the boundary value is the answer.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "discriminant-with-integer-bound",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-358",
    domain: "advanced-math",
    skills: ["discriminant-analysis"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The equation $2x^2 + cx + 8 = 0$, where $c$ is a constant, has no real solutions. Which of the following describes all possible values of $c$?",
    choices: [
      // distractor: omits the factor of 4
      { id: "A", text: "$-4 < c < 4$" },
      // distractor: keeps only the upper bound
      { id: "B", text: "$c < 8$" },
      // distractor: describes when there ARE two real solutions
      { id: "C", text: "$c < -8$ or $c > 8$" },
      { id: "D", text: "$-8 < c < 8$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice D is correct.**\n\n**The Fast Way (~45s):** No real solutions means $c^2 - 4(2)(8) < 0$, so $c^2 < 64$ and $-8 < c < 8$.\n\n**The Full Solution:**\nStep 1: With $a = 2$ and constant term $8$, the discriminant is $c^2 - 4(2)(8) = c^2 - 64$.\nStep 2: No real solutions requires $c^2 - 64 < 0$, that is $c^2 < 64$.\nStep 3: $c^2 < 64$ means $|c| < 8$, so $-8 < c < 8$. Check: $c = 0$ gives $2x^2 + 8 = 0$, which has no real solution, while $c = 9$ gives $81 - 64 = 17 > 0$, which has two. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4 < c < 4$): omits the factor of $4$, using $ac = 16$ and solving $c^2 < 16$.\n* Choice B ($c < 8$): keeps only the upper bound and wrongly admits every large negative value of $c$.\n* Choice C ($c < -8$ or $c > 8$): describes exactly when the equation DOES have two distinct real solutions.\n\n**Test Day Takeaway:** $c^2 < k$ always becomes a two-sided interval $-\\sqrt{k} < c < \\sqrt{k}$; the \"or\" form is its opposite.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "discriminant-with-integer-bound",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- factor-by-grouping (4 → 10) ---
  {
    id: "bank-am-359",
    domain: "advanced-math",
    skills: ["factoring"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Which of the following is equivalent to the expression $x^3 - 5x^2 + 4x - 20$, where $x$ is any real number?",
    choices: [
      // distractor: flips both signs
      { id: "A", text: "$(x + 5)(x^2 - 4)$" },
      { id: "B", text: "$(x - 5)(x^2 + 4)$" },
      // distractor: sign error on the second group
      { id: "C", text: "$(x - 5)(x^2 - 4)$" },
      // distractor: pairs the wrong terms
      { id: "D", text: "$(x^2 - 5)(x + 4)$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Factor by Grouping**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Group as $x^2(x - 5) + 4(x - 5)$; the common factor $x - 5$ gives $(x - 5)(x^2 + 4)$.\n\n**The Full Solution:**\nStep 1: Pair the first two terms and the last two: $\\left(x^3 - 5x^2\\right) + (4x - 20)$.\nStep 2: Factor each pair: $x^2(x - 5) + 4(x - 5)$. The identical binomial $x - 5$ confirms the grouping was chosen correctly.\nStep 3: Factor out $x - 5$: $(x - 5)\\left(x^2 + 4\\right)$. Check: expanding gives $x^3 + 4x - 5x^2 - 20 = x^3 - 5x^2 + 4x - 20$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(x + 5)(x^2 - 4)$): flips both signs and expands to $x^3 + 5x^2 - 4x - 20$.\n* Choice C ($(x - 5)(x^2 - 4)$): factors $-4$ instead of $+4$ out of $4x - 20$ and expands to $x^3 - 5x^2 - 4x + 20$.\n* Choice D ($(x^2 - 5)(x + 4)$): moves the constants into the wrong factors and expands to $x^3 + 4x^2 - 5x - 20$.\n\n**Test Day Takeaway:** Grouping only works if BOTH pairs leave the same binomial — if they do not match, change the sign you factor out and try again.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "factor-by-grouping",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-360",
    domain: "advanced-math",
    skills: ["factoring"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Which of the following is equivalent to the expression $3x^3 + 2x^2 - 12x - 8$, where $x$ is any real number?",
    choices: [
      // distractor: flips both signs
      { id: "A", text: "$(3x - 2)(x^2 + 4)$" },
      // distractor: factors +4 out of -12x - 8
      { id: "B", text: "$(3x + 2)(x^2 + 4)$" },
      { id: "C", text: "$(3x + 2)(x^2 - 4)$" },
      // distractor: sign error in the binomial factor
      { id: "D", text: "$(3x - 2)(x^2 - 4)$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Factor by Grouping**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** Group as $x^2(3x + 2) - 4(3x + 2)$; the common factor $3x + 2$ gives $(3x + 2)\\left(x^2 - 4\\right)$.\n\n**The Full Solution:**\nStep 1: Pair the terms: $\\left(3x^3 + 2x^2\\right) + (-12x - 8)$.\nStep 2: Factor each pair. The first gives $x^2(3x + 2)$; the second needs $-4$ pulled out to match, since $-4(3x + 2) = -12x - 8$.\nStep 3: Factoring out $3x + 2$ gives $(3x + 2)\\left(x^2 - 4\\right)$. Check: expanding gives $3x^3 - 12x + 2x^2 - 8 = 3x^3 + 2x^2 - 12x - 8$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(3x - 2)(x^2 + 4)$): flips both signs and expands to $3x^3 - 2x^2 + 12x - 8$.\n* Choice B ($(3x + 2)(x^2 + 4)$): pulls $+4$ out of $-12x - 8$ instead of $-4$ and expands to $3x^3 + 2x^2 + 12x + 8$.\n* Choice D ($(3x - 2)(x^2 - 4)$): changes the sign inside the first binomial and expands to $3x^3 - 2x^2 - 12x + 8$.\n\n**Test Day Takeaway:** When the second pair starts with a minus, factor out a NEGATIVE so the binomial matches the first pair exactly.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "factor-by-grouping",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-361",
    domain: "advanced-math",
    skills: ["factoring"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The expression $8x^2 + 12x - 14x - 21$ can be written as the product of two binomials. Which of the following is that product?",
    choices: [
      // distractor: flips the sign inside each factor
      { id: "A", text: "$(2x - 3)(4x + 7)$" },
      { id: "B", text: "$(2x + 3)(4x - 7)$" },
      // distractor: pairs 4x with 3 and 2x with 7
      { id: "C", text: "$(4x + 3)(2x - 7)$" },
      // distractor: swaps the constants 3 and 7
      { id: "D", text: "$(2x + 7)(4x - 3)$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Factor by Grouping**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Group in pairs: $4x(2x + 3) - 7(2x + 3) = (2x + 3)(4x - 7)$.\n\n**The Full Solution:**\nStep 1: Split the four terms into two pairs: $(8x^2 + 12x) + (-14x - 21)$.\nStep 2: Factor each pair. The first pair gives $4x(2x + 3)$; the second gives $-7(2x + 3)$. Both pairs now share the binomial $2x + 3$.\nStep 3: Factor out that shared binomial: $(2x + 3)(4x - 7)$. Check by expanding: $8x^2 - 14x + 12x - 21$, which matches the original. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(2x - 3)(4x + 7)$): flips the sign inside each factor and expands to $8x^2 + 2x - 21$.\n* Choice C ($(4x + 3)(2x - 7)$): pairs the $4x$ with the $3$ instead of with the $-7$, giving $8x^2 - 22x - 21$.\n* Choice D ($(2x + 7)(4x - 3)$): swaps the constants $3$ and $7$, giving $8x^2 + 22x - 21$.\n\n**Test Day Takeaway:** After factoring each pair, the two leftover binomials must be IDENTICAL; if they are not, regroup or change the sign you pull out.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "factor-by-grouping",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-362",
    domain: "advanced-math",
    skills: ["factoring"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Which of the following expressions is equivalent to $x^3 + 4x^2 - 7x - 28$ for all values of $x$?",
    choices: [
      // distractor: flips the sign of the shared binomial
      { id: "A", text: "$(x - 4)(x^2 - 7)$" },
      { id: "B", text: "$(x + 4)(x^2 - 7)$" },
      // distractor: factors $+7$ out of the second pair instead of $-7$
      { id: "C", text: "$(x + 4)(x^2 + 7)$" },
      // distractor: pairs the first and third terms together
      { id: "D", text: "$(x^2 + 4)(x - 7)$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Factor by Grouping**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $x^2(x + 4) - 7(x + 4) = (x + 4)(x^2 - 7)$.\n\n**The Full Solution:**\nStep 1: Pair the terms in order: $(x^3 + 4x^2) + (-7x - 28)$.\nStep 2: Factor $x^2$ from the first pair to get $x^2(x + 4)$. To make the second pair match, factor out $-7$: $-7(x + 4)$.\nStep 3: The common binomial $x + 4$ comes out front: $(x + 4)(x^2 - 7)$. Expanding gives $x^3 - 7x + 4x^2 - 28$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(x - 4)(x^2 - 7)$): changes $x + 4$ to $x - 4$; expanding gives $x^3 - 4x^2 - 7x + 28$.\n* Choice C ($(x + 4)(x^2 + 7)$): factors $+7$ instead of $-7$ out of $-7x - 28$, which flips the sign of the constant.\n* Choice D ($(x^2 + 4)(x - 7)$): groups the $x^3$ with the $-7x$ and expands to $x^3 - 7x^2 + 4x - 28$.\n\n**Test Day Takeaway:** When the third term is negative, pull out a NEGATIVE factor so the leftover binomial matches the first pair exactly.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "factor-by-grouping",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-363",
    domain: "advanced-math",
    skills: ["factoring"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The expression $6mn + 15m + 8n + 20$ can be written as the product of two binomials. Which of the following is that product?",
    choices: [
      { id: "A", text: "$(2n + 5)(3m + 4)$" },
      // distractor: swaps the constants 4 and 5
      { id: "B", text: "$(2n + 4)(3m + 5)$" },
      // distractor: attaches the coefficients to the wrong variables
      { id: "C", text: "$(3n + 4)(2m + 5)$" },
      // distractor: factors $-4$ out of the second pair
      { id: "D", text: "$(2n + 5)(3m - 4)$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Factor by Grouping**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $3m(2n + 5) + 4(2n + 5) = (2n + 5)(3m + 4)$.\n\n**The Full Solution:**\nStep 1: Group as $(6mn + 15m) + (8n + 20)$.\nStep 2: The first pair has common factor $3m$: $3m(2n + 5)$. The second pair has common factor $4$: $4(2n + 5)$.\nStep 3: Both share $2n + 5$, so the expression is $(2n + 5)(3m + 4)$. Expanding: $6mn + 8n + 15m + 20$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($(2n + 4)(3m + 5)$): swaps the constants $4$ and $5$; this expands to $6mn + 10n + 12m + 20$.\n* Choice C ($(3n + 4)(2m + 5)$): attaches the $3$ to $n$ and the $2$ to $m$, giving $6mn + 15n + 8m + 20$ — the $m$ and $n$ terms are interchanged.\n* Choice D ($(2n + 5)(3m - 4)$): factors $-4$ from $8n + 20$, which would require those terms to be negative.\n\n**Test Day Takeaway:** With two variables, check the expansion term by term — the $mn$ term matching is not enough, the single-variable terms must match too.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "factor-by-grouping",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-364",
    domain: "advanced-math",
    skills: ["factoring"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "Which of the following expressions is the complete factorization of $12x^3 - 8x^2 - 27x + 18$?",
    choices: [
      // distractor: treats $4x^2 - 9$ as a perfect square
      { id: "A", text: "$(3x - 2)(2x - 3)^2$" },
      { id: "B", text: "$(3x - 2)(2x - 3)(2x + 3)$" },
      // distractor: flips the sign of the shared binomial
      { id: "C", text: "$(3x + 2)(2x - 3)(2x + 3)$" },
      // distractor: keeps $+9$ and never applies the difference of squares
      { id: "D", text: "$(3x - 2)(4x^2 + 9)$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Factor by Grouping**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** $4x^2(3x - 2) - 9(3x - 2) = (3x - 2)(4x^2 - 9)$, and $4x^2 - 9 = (2x - 3)(2x + 3)$.\n\n**The Full Solution:**\nStep 1: Group: $(12x^3 - 8x^2) + (-27x + 18)$. Factor $4x^2$ from the first pair and $-9$ from the second: $4x^2(3x - 2) - 9(3x - 2)$.\nStep 2: Pull out the shared binomial: $(3x - 2)(4x^2 - 9)$.\nStep 3: The second factor is a difference of squares, $(2x)^2 - 3^2$, so it factors as $(2x - 3)(2x + 3)$. The complete factorization is $(3x - 2)(2x - 3)(2x + 3)$; expanding the last two factors gives $4x^2 - 9$, and $(3x-2)(4x^2-9) = 12x^3 - 27x - 8x^2 + 18$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(3x - 2)(2x - 3)^2$): treats $4x^2 - 9$ as the perfect square $(2x - 3)^2$, which is $4x^2 - 12x + 9$.\n* Choice C ($(3x + 2)(2x - 3)(2x + 3)$): factors $+9$ instead of $-9$ out of $-27x + 18$, flipping the sign inside the first binomial.\n* Choice D ($(3x - 2)(4x^2 + 9)$): keeps a $+9$, so it never reaches the difference of squares — and $4x^2 + 9$ does not factor over the real numbers anyway.\n\n**Test Day Takeaway:** Grouping is only step one; always ask whether the quadratic factor left behind is itself a difference of squares.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "factor-by-grouping",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- function-composition (4 → 10) ---
  {
    id: "bank-am-365",
    domain: "advanced-math",
    skills: ["function-composition"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The functions $f$ and $g$ are defined by $f(x) = 4x - 7$ and $g(x) = x + 6$. What is the value of $f(g(1))$?",
    choices: [
      // distractor: reports $f(1)$ instead of $f(g(1))$
      { id: "A", text: "$-3$" },
      // distractor: computes $g(f(1))$, reversing the order
      { id: "B", text: "$3$" },
      // distractor: adds $f(1)$ and $g(1)$
      { id: "C", text: "$4$" },
      { id: "D", text: "$21$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Function Composition**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** $g(1) = 7$, then $f(7) = 4(7) - 7 = 21$.\n\n**The Full Solution:**\nStep 1: Work from the inside out. The inner function is $g$, so evaluate $g(1) = 1 + 6 = 7$.\nStep 2: Feed that output into $f$: $f(7) = 4(7) - 7$.\nStep 3: $28 - 7 = 21$. Check: $f(g(1)) = 4(1 + 6) - 7 = 4(7) - 7 = 21$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): evaluates $f(1) = 4(1) - 7 = -3$ and stops, ignoring $g$ entirely.\n* Choice B ($3$): computes $g(f(1)) = g(-3) = 3$ — the functions applied in the reverse order.\n* Choice C ($4$): adds the two separate outputs, $f(1) + g(1) = -3 + 7$, instead of composing them.\n\n**Test Day Takeaway:** In $f(g(1))$ the input $1$ goes into $g$ first; the parentheses tell you the order, and reversing it almost always changes the answer.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-composition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-366",
    domain: "advanced-math",
    skills: ["function-composition"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Three input-output pairs for the function $g$ are listed in the table shown. The function $f$ is defined by $f(x) = x^2 - 3$. What is the value of $f(g(5))$?",
    diagram: { type: "dataTable", params: { headers: ["x", "g(x)"], rows: [["1", "4"], ["3", "7"], ["5", "2"]] } },
    choices: [
      { id: "A", text: "$1$" },
      // distractor: stops after finding $g(5)$
      { id: "B", text: "$2$" },
      // distractor: uses the row $x = 1$ instead of $x = 5$
      { id: "C", text: "$13$" },
      // distractor: computes $f(5)$ instead of $f(g(5))$
      { id: "D", text: "$22$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Function Composition**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The table gives $g(5) = 2$, so $f(g(5)) = f(2) = 2^2 - 3 = 1$.\n\n**The Full Solution:**\nStep 1: Read the inner value from the table. In the row where $x = 5$, the value of $g(x)$ is $2$, so $g(5) = 2$.\nStep 2: Substitute that output into $f$: $f(2) = 2^2 - 3$.\nStep 3: $4 - 3 = 1$. Check: the outer function is applied to $2$, not to $5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($2$): reports $g(5)$ and never applies $f$.\n* Choice C ($13$): reads the wrong row, using $g(1) = 4$ and computing $f(4) = 16 - 3$.\n* Choice D ($22$): applies $f$ directly to $5$, giving $25 - 3$, instead of to the table output.\n\n**Test Day Takeaway:** With a table, the input listed in the first column feeds the INNER function; the number you carry to the outer function is the table's output.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-composition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-367",
    domain: "advanced-math",
    skills: ["function-composition"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The functions $f$ and $g$ are defined by $f(x) = x^2 + 2$ and $g(x) = 3x - 4$. What is the value of $g(f(-2))$?",
    choices: [
      // distractor: treats $(-2)^2$ as $-4$
      { id: "A", text: "$-10$" },
      // distractor: stops after computing $f(-2)$
      { id: "B", text: "$6$" },
      { id: "C", text: "$14$" },
      // distractor: computes $f(g(-2))$, reversing the order
      { id: "D", text: "$102$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Function Composition**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $f(-2) = 4 + 2 = 6$, then $g(6) = 18 - 4 = 14$.\n\n**The Full Solution:**\nStep 1: The inner function is $f$. Substitute: $f(-2) = (-2)^2 + 2 = 4 + 2 = 6$.\nStep 2: Feed $6$ into $g$: $g(6) = 3(6) - 4$.\nStep 3: $18 - 4 = 14$. Check: squaring a negative gives a positive, so the inner output really is $6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-10$): treats $(-2)^2$ as $-4$, so $f(-2) = -2$ and $g(-2) = -10$.\n* Choice B ($6$): stops at $f(-2) = 6$ without applying $g$.\n* Choice D ($102$): applies the functions in the reverse order: $g(-2) = -10$ and $f(-10) = 102$.\n\n**Test Day Takeaway:** Square the negative FIRST, then apply the sign of the coefficient — $(-2)^2 = 4$, never $-4$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-composition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-368",
    domain: "advanced-math",
    skills: ["function-composition"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The functions $f$ and $g$ are defined by $f(x) = 3x - 5$ and $g(x) = x^2 + 1$. Which of the following expressions defines $g(f(x))$?",
    choices: [
      // distractor: builds $f(g(x))$ instead
      { id: "A", text: "$3x^2 - 2$" },
      // distractor: squares only the $3x$ term
      { id: "B", text: "$9x^2 + 1$" },
      // distractor: drops the $+1$ from $g$
      { id: "C", text: "$9x^2 - 30x + 25$" },
      { id: "D", text: "$9x^2 - 30x + 26$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Function Composition**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** Substitute $3x - 5$ for $x$ in $g$: $(3x - 5)^2 + 1 = 9x^2 - 30x + 26$.\n\n**The Full Solution:**\nStep 1: $g(f(x))$ means the whole expression $3x - 5$ takes the place of $x$ inside $g$, so $g(f(x)) = (3x - 5)^2 + 1$.\nStep 2: Expand the square: $(3x - 5)^2 = 9x^2 - 15x - 15x + 25 = 9x^2 - 30x + 25$.\nStep 3: Add the $1$: $9x^2 - 30x + 26$. Check at $x = 0$: $f(0) = -5$ and $g(-5) = 26$, matching the constant term. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3x^2 - 2$): builds $f(g(x)) = 3(x^2 + 1) - 5$, the composition in the reverse order.\n* Choice B ($9x^2 + 1$): squares only the $3x$ and forgets that $(3x - 5)^2$ has a middle term.\n* Choice C ($9x^2 - 30x + 25$): expands the square correctly but never adds the $+1$ that belongs to $g$.\n\n**Test Day Takeaway:** Substituting a binomial always produces a middle term — write $(3x-5)(3x-5)$ out rather than squaring term by term.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-composition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-369",
    domain: "advanced-math",
    skills: ["function-composition"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The functions $f$ and $g$ are defined by $f(x) = x^2 - 4x$ and $g(x) = x + 3$. Which of the following expressions defines $f(g(x))$?",
    choices: [
      // distractor: expands $(x + 3)^2$ as $x^2 + 9$
      { id: "A", text: "$x^2 - 4x - 3$" },
      { id: "B", text: "$x^2 + 2x - 3$" },
      // distractor: substitutes into the squared term only
      { id: "C", text: "$x^2 + 2x + 9$" },
      // distractor: builds $g(f(x))$ instead
      { id: "D", text: "$x^2 - 4x + 3$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Function Composition**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $f(g(x)) = (x + 3)^2 - 4(x + 3) = x^2 + 6x + 9 - 4x - 12 = x^2 + 2x - 3$.\n\n**The Full Solution:**\nStep 1: Replace every $x$ in $f$ with $x + 3$: $f(g(x)) = (x + 3)^2 - 4(x + 3)$.\nStep 2: Expand: $(x + 3)^2 = x^2 + 6x + 9$ and $-4(x + 3) = -4x - 12$.\nStep 3: Combine: $x^2 + 6x + 9 - 4x - 12 = x^2 + 2x - 3$. Check at $x = 0$: $g(0) = 3$ and $f(3) = 9 - 12 = -3$, matching the constant term. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x^2 - 4x - 3$): expands $(x + 3)^2$ as $x^2 + 9$, dropping the $6x$ middle term.\n* Choice C ($x^2 + 2x + 9$): substitutes into the squared term but leaves the second term as $-4x$ instead of $-4(x + 3)$.\n* Choice D ($x^2 - 4x + 3$): builds $g(f(x)) = x^2 - 4x + 3$, the reverse composition.\n\n**Test Day Takeaway:** EVERY $x$ in the outer function gets replaced — including the one in the linear term.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-composition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-370",
    domain: "advanced-math",
    skills: ["function-composition"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The function $f$ is defined by $f(x) = 4x + 9$. If $f(g(x)) = 12x - 7$ for all values of $x$, which of the following expressions defines $g(x)$?",
    choices: [
      // distractor: solves $g(f(x)) = 12x - 7$ instead
      { id: "A", text: "$3x - 34$" },
      // distractor: divides only the $x$-term by $4$
      { id: "B", text: "$3x - 16$" },
      { id: "C", text: "$3x - 4$" },
      // distractor: subtracts $9$ but never divides by $4$
      { id: "D", text: "$12x - 16$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Function Composition**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** $4g(x) + 9 = 12x - 7 \\Rightarrow 4g(x) = 12x - 16 \\Rightarrow g(x) = 3x - 4$.\n\n**The Full Solution:**\nStep 1: Applying $f$ to $g(x)$ gives $f(g(x)) = 4 \\cdot g(x) + 9$, so $4g(x) + 9 = 12x - 7$.\nStep 2: Subtract $9$ from both sides: $4g(x) = 12x - 16$.\nStep 3: Divide every term by $4$: $g(x) = 3x - 4$. Check: $f(3x - 4) = 4(3x - 4) + 9 = 12x - 16 + 9 = 12x - 7$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3x - 34$): solves the reversed equation $g(f(x)) = 12x - 7$, which gives $g(x) = 3x - 34$.\n* Choice B ($3x - 16$): divides the $x$-term by $4$ but leaves the constant $-16$ undivided.\n* Choice D ($12x - 16$): subtracts the $9$ correctly but never divides by the leading coefficient $4$.\n\n**Test Day Takeaway:** Treat $g(x)$ as a single unknown block, isolate it, and only then divide EVERY term by the coefficient.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-composition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- function-evaluation-with-negative-input (4 → 10) ---
  {
    id: "bank-am-371",
    domain: "advanced-math",
    skills: ["function-evaluation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The function $f$ is defined by $f(x) = x^2 - 6x + 2$. What is the value of $f(-4)$?",
    choices: [
      // distractor: makes both sign errors at once
      { id: "A", text: "$-38$" },
      // distractor: computes $-6(-4)$ as $-24$
      { id: "B", text: "$-6$" },
      // distractor: treats $(-4)^2$ as $-16$
      { id: "C", text: "$10$" },
      { id: "D", text: "$42$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** $(-4)^2 - 6(-4) + 2 = 16 + 24 + 2 = 42$.\n\n**The Full Solution:**\nStep 1: Substitute $-4$ for every $x$: $f(-4) = (-4)^2 - 6(-4) + 2$.\nStep 2: Evaluate each term. $(-4)^2 = 16$ because a negative times a negative is positive, and $-6(-4) = +24$ for the same reason.\nStep 3: $16 + 24 + 2 = 42$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-38$): makes both sign errors at once, computing $-16 - 24 + 2$.\n* Choice B ($-6$): keeps $(-4)^2 = 16$ but writes $-6(-4)$ as $-24$, giving $16 - 24 + 2$.\n* Choice C ($10$): treats $(-4)^2$ as $-16$, giving $-16 + 24 + 2$.\n\n**Test Day Takeaway:** Write the substituted expression with parentheses around the negative input before you simplify — that is where the two sign errors get caught.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-evaluation-with-negative-input",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-372",
    domain: "advanced-math",
    skills: ["function-evaluation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The function $g$ is defined by $g(x) = 3x^2 + 4x - 1$. What is the value of $g(-3)$?",
    choices: [
      // distractor: treats $(-3)^2$ as $-9$
      { id: "A", text: "$-40$" },
      { id: "B", text: "$14$" },
      // distractor: computes $4(-3)$ as $+12$
      { id: "C", text: "$38$" },
      // distractor: squares $3x$ instead of $x$
      { id: "D", text: "$68$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $3(9) + 4(-3) - 1 = 27 - 12 - 1 = 14$.\n\n**The Full Solution:**\nStep 1: Substitute: $g(-3) = 3(-3)^2 + 4(-3) - 1$.\nStep 2: The exponent applies only to $x$, so square first: $(-3)^2 = 9$, and $3 \\cdot 9 = 27$. Then $4(-3) = -12$.\nStep 3: $27 - 12 - 1 = 14$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-40$): treats $(-3)^2$ as $-9$, giving $-27 - 12 - 1$.\n* Choice C ($38$): computes $4(-3)$ as $+12$, giving $27 + 12 - 1$.\n* Choice D ($68$): squares the whole product $3x$ instead of just $x$: $(-9)^2 = 81$, then $81 - 12 - 1$.\n\n**Test Day Takeaway:** In $3x^2$ the exponent belongs to $x$ alone — square the input, then multiply by the coefficient.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-evaluation-with-negative-input",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-373",
    domain: "advanced-math",
    skills: ["function-evaluation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The function $h$ is defined by $h(x) = -2x^3 + 5x$. What is the value of $h(-2)$?",
    choices: [
      // distractor: treats $(-2)^3$ as $+8$
      { id: "A", text: "$-26$" },
      { id: "B", text: "$6$" },
      // distractor: computes $5(-2)$ as $+10$
      { id: "C", text: "$26$" },
      // distractor: cubes $-2x$ instead of $x$
      { id: "D", text: "$54$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $-2(-8) + 5(-2) = 16 - 10 = 6$.\n\n**The Full Solution:**\nStep 1: Substitute: $h(-2) = -2(-2)^3 + 5(-2)$.\nStep 2: An odd power keeps the sign, so $(-2)^3 = -8$. Then $-2(-8) = 16$, and $5(-2) = -10$.\nStep 3: $16 - 10 = 6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-26$): treats $(-2)^3$ as $+8$, giving $-16 - 10$.\n* Choice C ($26$): computes $5(-2)$ as $+10$, giving $16 + 10$.\n* Choice D ($54$): cubes the product $-2x$ instead of $x$ alone: $(-2 \\cdot -2)^3 = 64$, then $64 - 10$.\n\n**Test Day Takeaway:** Odd powers of a negative stay negative; even powers turn positive — decide the sign before you multiply by the coefficient.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-evaluation-with-negative-input",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-374",
    domain: "advanced-math",
    skills: ["function-evaluation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The function $f$ is defined by $f(x) = 5x^2 - 3x - 8$. What is the value of $f(-3)$?",
    choices: [
      // distractor: treats $(-3)^2$ as $-9$
      { id: "A", text: "$-44$" },
      // distractor: computes $-3(-3)$ as $-9$
      { id: "B", text: "$28$" },
      { id: "C", text: "$46$" },
      // distractor: squares $5x$ instead of $x$
      { id: "D", text: "$226$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $5(9) - 3(-3) - 8 = 45 + 9 - 8 = 46$.\n\n**The Full Solution:**\nStep 1: Substitute: $f(-3) = 5(-3)^2 - 3(-3) - 8$.\nStep 2: $(-3)^2 = 9$, so the first term is $45$. The middle term is $-3(-3) = +9$.\nStep 3: $45 + 9 - 8 = 46$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-44$): treats $(-3)^2$ as $-9$, giving $-45 + 9 - 8$.\n* Choice B ($28$): computes $-3(-3)$ as $-9$, giving $45 - 9 - 8$.\n* Choice D ($226$): squares $5x$ instead of $x$: $(-15)^2 = 225$, then $225 + 9 - 8$.\n\n**Test Day Takeaway:** A negative input flips the sign of the linear term — expect the $-3x$ piece to ADD when $x$ is negative.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-evaluation-with-negative-input",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-375",
    domain: "advanced-math",
    skills: ["function-evaluation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The function $f$ is defined by $f(x) = 7 - x^2$. What is the value of $f(-6)$?",
    choices: [
      // distractor: subtracts from $-7$ instead of $7$
      { id: "A", text: "$-43$" },
      { id: "B", text: "$-29$" },
      // distractor: uses $2x$ in place of $x^2$
      { id: "C", text: "$19$" },
      // distractor: treats $(-6)^2$ as $-36$
      { id: "D", text: "$43$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $7 - (-6)^2 = 7 - 36 = -29$.\n\n**The Full Solution:**\nStep 1: Substitute: $f(-6) = 7 - (-6)^2$.\nStep 2: Square first: $(-6)^2 = 36$. The subtraction sign in front stays where it is, so the expression is $7 - 36$.\nStep 3: $7 - 36 = -29$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-43$): applies the minus sign to both terms, computing $-7 - 36$.\n* Choice C ($19$): uses $2x = -12$ in place of $x^2$, giving $7 - (-12)$.\n* Choice D ($43$): treats $(-6)^2$ as $-36$, turning the subtraction into $7 + 36$.\n\n**Test Day Takeaway:** Order of operations puts the exponent before the subtraction — the leading $7$ is never inside the squaring.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-evaluation-with-negative-input",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-376",
    domain: "advanced-math",
    skills: ["function-evaluation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The function $f$ is defined by $f(x) = x^2 + bx - 6$, where $b$ is a constant. The table gives the value of $f$ at three values of $x$. What is the value of $b$?",
    diagram: { type: "dataTable", params: { headers: ["x", "f(x)"], rows: [["-5", "9"], ["0", "-6"], ["3", "9"]] } },
    choices: [
      // distractor: treats $(-5)^2$ as $-25$
      { id: "A", text: "$-8$" },
      // distractor: reports the constant term instead of $b$
      { id: "B", text: "$-6$" },
      // distractor: writes $b(-5)$ as $+5b$
      { id: "C", text: "$-2$" },
      { id: "D", text: "$2$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** $f(-5) = 25 - 5b - 6 = 9$, so $5b = 10$ and $b = 2$.\n\n**The Full Solution:**\nStep 1: Use the row $x = -5$, where $f(x) = 9$: $(-5)^2 + b(-5) - 6 = 9$.\nStep 2: Simplify the numbers: $25 - 5b - 6 = 9$, so $19 - 5b = 9$.\nStep 3: $-5b = -10$, so $b = 2$. Check with the row $x = 3$: $9 + 2(3) - 6 = 9$, which matches the table. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-8$): treats $(-5)^2$ as $-25$, producing $-25 - 5b - 6 = 9$ and $b = -8$.\n* Choice B ($-6$): reports the constant term of $f$ (the value of $f(0)$) rather than the coefficient $b$.\n* Choice C ($-2$): writes $b(-5)$ as $+5b$, producing $25 + 5b - 6 = 9$ and $b = -2$.\n\n**Test Day Takeaway:** A negative input makes the $bx$ term $-5b$, not $5b$ — and the two outer table rows share the same output, which is a fast symmetry check.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-evaluation-with-negative-input",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- function-transformation (4 → 10) ---
  {
    id: "bank-am-377",
    domain: "advanced-math",
    skills: ["function-transformations", "vertex-form"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The function $f$ is defined by $f(x) = x^3$. In the $xy$-plane, the graph of $y = f(x) + 6$ is the graph of $y = f(x)$ shifted in which direction?",
    choices: [
      // distractor: flips the sign of an outside change
      { id: "A", text: "Down $6$ units" },
      // distractor: treats an outside change as horizontal
      { id: "B", text: "Left $6$ units" },
      // distractor: treats an outside change as horizontal and keeps the sign
      { id: "C", text: "Right $6$ units" },
      { id: "D", text: "Up $6$ units" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Function Transformation**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Adding $6$ outside the function raises every output by $6$, so the graph moves up $6$.\n\n**The Full Solution:**\nStep 1: The $+6$ is added AFTER $f$ acts on $x$, so it changes outputs ($y$-values), not inputs.\nStep 2: Every point $(x, y)$ on $y = f(x)$ becomes $(x, y + 6)$; the $x$-coordinate is untouched.\nStep 3: Raising every $y$-value by $6$ is a shift up $6$ units. Check with one point: $(2, 8)$ on $y = x^3$ becomes $(2, 14)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (Down $6$ units): flips the sign; a shift down would come from $y = f(x) - 6$.\n* Choice B (Left $6$ units): treats the outside change as horizontal; a left shift comes from $y = f(x + 6)$.\n* Choice C (Right $6$ units): also treats the outside change as horizontal, this time from $y = f(x - 6)$.\n\n**Test Day Takeaway:** Changes OUTSIDE the function move the graph vertically in the direction of the sign; changes INSIDE move it horizontally, opposite the sign.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-transformation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-378",
    domain: "advanced-math",
    skills: ["function-transformations", "vertex-form"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The function $g$ is defined by $g(x) = |x|$. In the $xy$-plane, the graph of $y = g(x - 5)$ is the graph of $y = g(x)$ shifted in which direction?",
    choices: [
      // distractor: treats an inside change as vertical
      { id: "A", text: "Down $5$ units" },
      // distractor: shifts opposite to the correct direction
      { id: "B", text: "Left $5$ units" },
      { id: "C", text: "Right $5$ units" },
      // distractor: treats an inside change as vertical and keeps the sign
      { id: "D", text: "Up $5$ units" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Function Transformation**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The $-5$ is inside the function, so the graph moves the opposite way: right $5$.\n\n**The Full Solution:**\nStep 1: The subtraction happens to the INPUT, before $g$ acts, so the shift is horizontal.\nStep 2: For $y = g(x - 5)$ to output the value $g$ used to give at $x = 0$, the new input must be $x = 5$. Every feature therefore lands $5$ units farther right.\nStep 3: The corner of $y = |x|$ at $(0, 0)$ moves to $(5, 0)$, so the shift is right $5$ units. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (Down $5$ units): treats an inside change as vertical; $y = g(x) - 5$ would shift down.\n* Choice B (Left $5$ units): applies the sign literally; the inside shift always runs opposite the sign.\n* Choice D (Up $5$ units): treats an inside change as vertical and keeps the sign as positive.\n\n**Test Day Takeaway:** Set the inside expression equal to $0$ to locate the moved key point — $x - 5 = 0$ gives $x = 5$, a shift right.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-transformation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-379",
    domain: "advanced-math",
    skills: ["function-transformations", "vertex-form"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The function $h$ is defined by $h(x) = (x + 7)^2 - 9$. What is the vertex of the graph of $y = h(x)$ in the $xy$-plane?",
    choices: [
      // distractor: swaps the two coordinates
      { id: "A", text: "$(-9, -7)$" },
      { id: "B", text: "$(-7, -9)$" },
      // distractor: reads $h$ straight off the parentheses
      { id: "C", text: "$(7, -9)$" },
      // distractor: keeps both constants as written
      { id: "D", text: "$(7, 9)$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Function Transformation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Vertex form $a(x - h)^2 + k$ has vertex $(h, k)$; here $x + 7 = x - (-7)$, so the vertex is $(-7, -9)$.\n\n**The Full Solution:**\nStep 1: Match $h(x) = (x + 7)^2 - 9$ to the template $(x - h)^2 + k$.\nStep 2: The template subtracts $h$, so $x + 7$ means $h = -7$. The constant added at the end is $k = -9$.\nStep 3: The vertex is $(-7, -9)$. Check: $h(-7) = 0 - 9 = -9$, the lowest possible value since the square cannot be negative. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-9, -7)$): swaps the coordinates, listing $k$ first.\n* Choice C ($(7, -9)$): reads the $7$ straight off the parentheses without flipping its sign.\n* Choice D ($(7, 9)$): keeps both constants exactly as written, flipping neither sign.\n\n**Test Day Takeaway:** The $x$-coordinate of the vertex is the value that makes the squared expression zero — solve $x + 7 = 0$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-transformation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-380",
    domain: "advanced-math",
    skills: ["function-transformations", "vertex-form"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The graph of $y = f(x)$ is shown in the $xy$-plane. The graph of $y = -f(x) + 4$ can be obtained from the graph of $f$ by which sequence of transformations?",
    diagram: { type: "cubicGraph", params: { a: 0.2, roots: [-4, 0, 3], xRange: [-6, 6], yRange: [-10, 10], label: "y = f(x)" } },
    choices: [
      { id: "A", text: "A reflection across the $x$-axis, then a translation up $4$ units" },
      // distractor: treats the outside $+4$ as a horizontal shift
      { id: "B", text: "A reflection across the $x$-axis, then a translation right $4$ units" },
      // distractor: confuses $-f(x)$ with $f(-x)$
      { id: "C", text: "A reflection across the $y$-axis, then a translation up $4$ units" },
      // distractor: applies the two steps in the wrong order
      { id: "D", text: "A translation up $4$ units, then a reflection across the $x$-axis" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Function Transformation**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The leading minus flips outputs across the $x$-axis; the $+4$ then lifts the whole picture $4$ units.\n\n**The Full Solution:**\nStep 1: In $-f(x)$ the negative multiplies the OUTPUT, so each point $(x, y)$ becomes $(x, -y)$ — a reflection across the $x$-axis.\nStep 2: Adding $4$ afterward sends $(x, -y)$ to $(x, -y + 4)$ — a translation up $4$ units.\nStep 3: The graph shown has a zero at $x = 3$, where $y = 0$; after both steps that point sits at $(3, 4)$, on the line $y = 4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: reflects correctly but reads the outside $+4$ as a horizontal shift, which would require $-f(x - 4)$.\n* Choice C: confuses $-f(x)$ with $f(-x)$; only $f(-x)$ reflects across the $y$-axis.\n* Choice D: reverses the order, producing $-(f(x) + 4) = -f(x) - 4$, which lands $8$ units below the correct graph.\n\n**Test Day Takeaway:** Read a composed transformation in the order the operations reach the output: reflect first when the negative sits outside, then translate.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-transformation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-381",
    domain: "advanced-math",
    skills: ["function-transformations", "vertex-form"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the $xy$-plane, the graph of the quadratic function $f$ is shown, and the two points where it meets the $x$-axis are marked. What are the $x$-intercepts of the graph of $y = f(x + 3)$?",
    diagram: { type: "quadraticIntercepts", params: { intercepts: [-2, 6] } },
    choices: [
      // distractor: applies no shift at all
      { id: "A", text: "$-2$ and $6$" },
      { id: "B", text: "$-5$ and $3$" },
      // distractor: moves the two intercepts in opposite directions
      { id: "C", text: "$-5$ and $9$" },
      // distractor: shifts right instead of left
      { id: "D", text: "$1$ and $9$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Function Transformation**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $f(x + 3)$ slides the graph left $3$, so $-2$ and $6$ become $-5$ and $3$.\n\n**The Full Solution:**\nStep 1: The marked points show that $f(-2) = 0$ and $f(6) = 0$.\nStep 2: $y = f(x + 3)$ is zero exactly when the inside expression equals a zero of $f$: $x + 3 = -2$ or $x + 3 = 6$.\nStep 3: Solving gives $x = -5$ and $x = 3$. Check: $f(-5 + 3) = f(-2) = 0$ and $f(3 + 3) = f(6) = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$ and $6$): copies the original intercepts, applying no shift at all.\n* Choice C ($-5$ and $9$): moves one intercept left and the other right; a translation moves every point the same way.\n* Choice D ($1$ and $9$): adds $3$ to each intercept, shifting right — but $f(x + 3)$ shifts left.\n\n**Test Day Takeaway:** Set the inside expression equal to each known zero and solve; that mechanical step never gets the direction backward.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-transformation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-382",
    domain: "advanced-math",
    skills: ["function-transformations", "vertex-form"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The function $f$ is defined by $f(x) = x^2 + 10x + 21$. In the $xy$-plane, the graph of $y = f(x)$ can be obtained from the graph of $y = x^2$ by which translation?",
    choices: [
      // distractor: uses $b$ instead of $\frac{b}{2}$ for the horizontal shift
      { id: "A", text: "Left $10$ units and down $4$ units" },
      // distractor: uses the constant term as the vertical shift
      { id: "B", text: "Left $5$ units and up $21$ units" },
      { id: "C", text: "Left $5$ units and down $4$ units" },
      // distractor: shifts right instead of left
      { id: "D", text: "Right $5$ units and down $4$ units" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Function Transformation**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Complete the square: $x^2 + 10x + 21 = (x + 5)^2 - 4$, so the vertex moves from $(0, 0)$ to $(-5, -4)$.\n\n**The Full Solution:**\nStep 1: Take half of the coefficient of $x$: half of $10$ is $5$, and $(x + 5)^2 = x^2 + 10x + 25$.\nStep 2: That is $4$ more than the original constant, so $f(x) = (x + 5)^2 + 21 - 25 = (x + 5)^2 - 4$.\nStep 3: Vertex form $(x - h)^2 + k$ has vertex $(h, k) = (-5, -4)$, so the parabola $y = x^2$ moves left $5$ and down $4$. Check: $f(-5) = 25 - 50 + 21 = -4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: uses the full coefficient $10$ as the horizontal shift instead of half of it.\n* Choice B: keeps the original constant $21$ as the vertical shift, skipping the correction from completing the square.\n* Choice D: reads $(x + 5)^2$ as a shift right; the vertex sits where $x + 5 = 0$, which is $x = -5$.\n\n**Test Day Takeaway:** Completing the square converts standard form into a pair of shifts — half the $x$-coefficient sets the horizontal move, and the leftover constant sets the vertical one.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-transformation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- interpret-exponential-parameters (4 → 10) ---
  {
    id: "bank-am-383",
    domain: "advanced-math",
    skills: ["exponential-growth-decay"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The area covered by a patch of invasive plants, in square meters, is modeled by $A(t) = 320(1.09)^t$, where $t$ is the number of weeks since monitoring began. Which of the following is the best interpretation of $1.09$ in this model?",
    choices: [
      // distractor: reads a growth factor as a constant amount
      { id: "A", text: "The area covered increases by $1.09$ square meters each week." },
      { id: "B", text: "The area covered increases by $9\\%$ each week." },
      // distractor: reads the whole factor as the percent increase
      { id: "C", text: "The area covered increases by $109\\%$ each week." },
      // distractor: confuses the base with the initial value
      { id: "D", text: "The area covered was $1.09$ square meters when monitoring began." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Interpret Exponential Parameters**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** In $a(b)^t$ the base $b = 1.09$ means multiply by $1.09$ each week, which is a $9\\%$ increase.\n\n**The Full Solution:**\nStep 1: The model has the exponential form $A(t) = a(b)^t$ with $a = 320$ and $b = 1.09$.\nStep 2: Each time $t$ increases by $1$, the area is multiplied by $1.09$, so the new area is $109\\%$ of the previous area.\nStep 3: Being $109\\%$ of the previous value means gaining $9\\%$, so the area grows by $9\\%$ per week. Check: $320(1.09) = 348.8$, which is $28.8$ more than $320$, and $\\frac{28.8}{320} = 0.09$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: reads a multiplier as an added amount; a constant increase of $1.09$ square meters would need a linear model.\n* Choice C: reports the entire factor as the percent change instead of the part above $100\\%$.\n* Choice D: confuses the base with the initial value; the area at $t = 0$ is $320$ square meters.\n\n**Test Day Takeaway:** For a base $b > 1$, the percent increase is $(b - 1) \\times 100\\%$ — subtract the $1$ before converting.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "interpret-exponential-parameters",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-384",
    domain: "advanced-math",
    skills: ["exponential-growth-decay"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A chemist models the mass of a sample, in grams, by $M(d) = 240(0.75)^d$, where $d$ is the number of days since the sample was prepared. The table shows the mass for the first three days. Which of the following is the best interpretation of $0.75$ in this model?",
    diagram: { type: "dataTable", params: { headers: ["Days, d", "Mass (grams)"], rows: [["0", "240"], ["1", "180"], ["2", "135"]] } },
    choices: [
      // distractor: reads the decay factor as the percent lost
      { id: "A", text: "Each day, the mass of the sample is $75\\%$ less than the mass on the previous day." },
      // distractor: reads a multiplier as a constant amount
      { id: "B", text: "Each day, the mass of the sample decreases by $0.75$ gram." },
      { id: "C", text: "Each day, the mass of the sample is $75\\%$ of the mass on the previous day." },
      // distractor: turns the percent lost into a fixed amount
      { id: "D", text: "Each day, the mass of the sample decreases by $25$ grams." }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Interpret Exponential Parameters**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** A base of $0.75$ means each day's mass is $0.75$ times, or $75\\%$ of, the previous day's mass.\n\n**The Full Solution:**\nStep 1: The model is $M(d) = a(b)^d$ with $a = 240$ grams and $b = 0.75$.\nStep 2: Increasing $d$ by $1$ multiplies the mass by $0.75$. The table shows this: $240 \\to 180 \\to 135$, and $\\frac{180}{240} = 0.75$.\nStep 3: So each day's mass is $75\\%$ of the day before, which is a $25\\%$ decrease. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: reads $0.75$ as the fraction LOST; losing $75\\%$ would leave a base of $0.25$.\n* Choice B: reads the multiplier as an amount in grams, which would describe a linear model.\n* Choice D: converts the $25\\%$ loss into a fixed $25$ grams; the actual drops are $60$ grams and then $45$ grams.\n\n**Test Day Takeaway:** For $0 < b < 1$, the base is the fraction that REMAINS; the percent lost is $(1 - b) \\times 100\\%$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "interpret-exponential-parameters",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-385",
    domain: "advanced-math",
    skills: ["exponential-growth-decay"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The number of cells in a culture is modeled by $N(h) = 45 \\cdot 2^{h/6}$, where $h$ is the number of hours after the culture was prepared. The table lists $N(h)$ at three values of $h$. Which of the following is the best interpretation of the $6$ in the exponent?",
    diagram: { type: "dataTable", params: { headers: ["Hours, h", "Number of cells"], rows: [["0", "45"], ["6", "90"], ["12", "180"]] } },
    choices: [
      // distractor: confuses the exponent divisor with the initial amount
      { id: "A", text: "The culture contained $6$ cells when it was prepared." },
      { id: "B", text: "The number of cells doubles every $6$ hours." },
      // distractor: reads the divisor as a constant rate of change
      { id: "C", text: "The number of cells increases by $6$ cells each hour." },
      // distractor: swaps the roles of the base and the divisor
      { id: "D", text: "The number of cells is $6$ times as great every $2$ hours." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Interpret Exponential Parameters**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The exponent $\\frac{h}{6}$ reaches $1$ when $h = 6$, so one doubling takes $6$ hours.\n\n**The Full Solution:**\nStep 1: The base $2$ tells you the quantity doubles once the exponent increases by $1$.\nStep 2: The exponent is $\\frac{h}{6}$, which increases by $1$ each time $h$ increases by $6$.\nStep 3: So the count doubles every $6$ hours. The table confirms it: $45$ at $h = 0$, $90$ at $h = 6$, and $180$ at $h = 12$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: confuses the divisor in the exponent with the initial amount, which the model gives as $45$.\n* Choice C: treats the $6$ as a constant increase per hour, which would require a linear model.\n* Choice D: swaps the roles of the base and the divisor, reading the $2$ as a time and the $6$ as a growth factor.\n\n**Test Day Takeaway:** In $a \\cdot b^{t/k}$ the constant $k$ is the TIME needed for one multiplication by $b$ — set the exponent equal to $1$ to read it off.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "interpret-exponential-parameters",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-386",
    domain: "advanced-math",
    skills: ["exponential-growth-decay"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The amount of a radioactive substance remaining in a sealed container, in milligrams, is modeled by $A(t) = 168\\left(\\dfrac{1}{2}\\right)^{t/24}$, where $t$ is the number of days since the container was sealed. What is the half-life, in days, of the substance?",
    choices: [
      // distractor: halves the divisor in the exponent
      { id: "A", text: "$12$" },
      { id: "B", text: "$24$" },
      // distractor: doubles the divisor in the exponent
      { id: "C", text: "$48$" },
      // distractor: halves the initial amount and reports milligrams as days
      { id: "D", text: "$84$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Interpret Exponential Parameters**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The exponent $\\frac{t}{24}$ equals $1$ when $t = 24$, and one factor of $\\frac{1}{2}$ is one half-life.\n\n**The Full Solution:**\nStep 1: The half-life is the time it takes for the amount to be multiplied by $\\frac{1}{2}$ exactly once.\nStep 2: That happens when the exponent $\\frac{t}{24}$ equals $1$.\nStep 3: $\\frac{t}{24} = 1$ gives $t = 24$ days. Check: $A(24) = 168\\left(\\frac{1}{2}\\right)^1 = 84$, which is half of $168$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): halves the divisor, as if the exponent had to reach $2$ for one halving.\n* Choice C ($48$): doubles the divisor, confusing the half-life with the time for two halvings.\n* Choice D ($84$): reports the amount remaining after one half-life, in milligrams, instead of the time in days.\n\n**Test Day Takeaway:** Solve \"exponent $= 1$\" to read a half-life or doubling time straight out of the model.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "interpret-exponential-parameters",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-387",
    domain: "advanced-math",
    skills: ["exponential-growth-decay"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The value of a piece of manufacturing equipment, in dollars, is modeled by $V(t) = 18{,}500(0.88)^t$, where $t$ is the number of years since the equipment was purchased. Which of the following is the best interpretation of $18{,}500$ in this model?",
    choices: [
      // distractor: reads the initial value as a yearly change
      { id: "A", text: "The value of the equipment, in dollars, decreases by $18{,}500$ each year." },
      { id: "B", text: "The value of the equipment, in dollars, at the time it was purchased." },
      // distractor: shifts the starting time by one year
      { id: "C", text: "The value of the equipment, in dollars, one year after it was purchased." },
      // distractor: reads a dollar amount as a number of years
      { id: "D", text: "The number of years until the equipment has no value." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Interpret Exponential Parameters**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** In $a(b)^t$ the coefficient $a$ is the value at $t = 0$, the moment of purchase.\n\n**The Full Solution:**\nStep 1: Substitute $t = 0$: $V(0) = 18{,}500(0.88)^0$.\nStep 2: Any nonzero number to the zero power is $1$, so $V(0) = 18{,}500$.\nStep 3: Since $t$ counts years since purchase, $t = 0$ is the purchase date, so $18{,}500$ dollars is the value then. Check: $V(1) = 16{,}280$, a smaller value one year later. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: reads the initial value as a constant yearly drop; the actual first-year drop is $2{,}220$ dollars.\n* Choice C: shifts the starting point by a year; the value after one year is $18{,}500(0.88)$.\n* Choice D: interprets a dollar amount as a number of years, and an exponential model never reaches zero.\n\n**Test Day Takeaway:** Evaluate the model at $t = 0$ — the coefficient in front is always the starting value.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "interpret-exponential-parameters",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-388",
    domain: "advanced-math",
    skills: ["exponential-growth-decay"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A streaming service had $6{,}000$ active accounts at the end of year $0$, and the number of active accounts grows by $15\\%$ each year. The table gives the number of active accounts at the end of years $0$, $1$, and $2$. Which of the following functions models the number of active accounts at the end of year $t$?",
    diagram: { type: "dataTable", params: { headers: ["Year, t", "Active accounts"], rows: [["0", "6,000"], ["1", "6,900"], ["2", "7,935"]] } },
    choices: [
      // distractor: uses the growth rate itself as the base
      { id: "A", text: "$A(t) = 6{,}000(0.15)^t$" },
      { id: "B", text: "$A(t) = 6{,}000(1.15)^t$" },
      // distractor: drops the percent sign, using 15 as the base
      { id: "C", text: "$A(t) = 6{,}000(15)^t$" },
      // distractor: models the change as a constant yearly amount
      { id: "D", text: "$A(t) = 6{,}000 + 900t$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Interpret Exponential Parameters**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Growth of $15\\%$ per year means multiply by $1.15$ each year: $A(t) = 6{,}000(1.15)^t$.\n\n**The Full Solution:**\nStep 1: A constant percent change each year is exponential, of the form $A(t) = a(b)^t$ with $a$ the starting amount, so $a = 6{,}000$.\nStep 2: Growing by $15\\%$ leaves $100\\% + 15\\% = 115\\%$ of the previous year, so $b = 1.15$.\nStep 3: $A(t) = 6{,}000(1.15)^t$. Check against the table: $A(1) = 6{,}900$ and $A(2) = 7{,}935$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: uses the rate $0.15$ as the base, which would shrink the count to $15\\%$ of its size each year.\n* Choice C: drops the percent sign entirely, multiplying by $15$ each year.\n* Choice D: adds the first year's increase of $900$ forever; the table shows the second increase is $1{,}035$, not $900$.\n\n**Test Day Takeaway:** A percent GROWTH rate becomes the base $1 + r$; only the amount above $1$ is the percent itself.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "interpret-exponential-parameters",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- vertex-form-from-two-conditions (4 → 10) ---
  {
    id: "bank-am-389",
    domain: "advanced-math",
    skills: ["vertex-form", "function-evaluation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The parabola shown in the $xy$-plane has its vertex at $(-1, 9)$ and passes through the marked point $(5, -9)$. An equation of the parabola is $y = a(x + 1)^2 + 9$, where $a$ is a constant. What is the value of $a$?",
    diagram: { type: "quadraticVertex", params: { vertex: [-1, 9], a: -0.5, showPoints: [[5, -9]], showVertex: true } },
    choices: [
      // distractor: divides by $5 - (-1)$ instead of its square
      { id: "A", text: "$-3$" },
      // distractor: inverts the final division
      { id: "B", text: "$-2$" },
      { id: "C", text: "$-\\dfrac{1}{2}$" },
      // distractor: drops the negative sign
      { id: "D", text: "$\\dfrac{1}{2}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** $-9 = a(5 + 1)^2 + 9 \\Rightarrow 36a = -18 \\Rightarrow a = -\\dfrac{1}{2}$.\n\n**The Full Solution:**\nStep 1: Substitute the marked point $(5, -9)$ into $y = a(x + 1)^2 + 9$: $-9 = a(5 + 1)^2 + 9$.\nStep 2: $(5 + 1)^2 = 36$, so $-9 = 36a + 9$ and $36a = -18$.\nStep 3: $a = -\\dfrac{18}{36} = -\\dfrac{1}{2}$. The negative value fits the picture: the vertex is the highest point, so the parabola opens downward. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): divides $-18$ by $5 - (-1) = 6$ instead of by $6^2 = 36$.\n* Choice B ($-2$): inverts the final division, computing $\\dfrac{36}{-18}$ instead of $\\dfrac{-18}{36}$.\n* Choice D ($\\dfrac{1}{2}$): gets the size right but keeps the sign positive, which would open the parabola upward.\n\n**Test Day Takeaway:** Square the horizontal distance from the vertex BEFORE dividing, and let the opening direction confirm the sign of $a$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertex-form-from-two-conditions",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-390",
    domain: "advanced-math",
    skills: ["vertex-form", "function-evaluation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The function $f$ is defined by $f(x) = a(x - h)^2$, where $a$ and $h$ are constants. Given that $f(6) = 0$ and $f(10) = 48$, what is the value of $a$?",
    choices: [
      // distractor: inverts the final division
      { id: "A", text: "$\\dfrac{1}{3}$" },
      { id: "B", text: "$3$" },
      // distractor: reports $h$ instead of $a$
      { id: "C", text: "$6$" },
      // distractor: divides by $10 - 6$ instead of its square
      { id: "D", text: "$12$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $f(6) = 0$ forces $h = 6$, then $a(10 - 6)^2 = 48$ gives $16a = 48$ and $a = 3$.\n\n**The Full Solution:**\nStep 1: $f(x) = a(x - h)^2$ equals $0$ only where $x = h$, so $f(6) = 0$ means $h = 6$.\nStep 2: Substitute the second condition: $f(10) = a(10 - 6)^2 = 16a = 48$.\nStep 3: $a = 3$. Check: $f(x) = 3(x - 6)^2$ gives $f(6) = 0$ and $f(10) = 3(16) = 48$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\dfrac{1}{3}$): inverts the division, computing $\\dfrac{16}{48}$ instead of $\\dfrac{48}{16}$.\n* Choice C ($6$): reports the value of $h$, which the first condition supplies, rather than $a$.\n* Choice D ($12$): divides $48$ by $10 - 6 = 4$ instead of by $(10 - 6)^2 = 16$.\n\n**Test Day Takeaway:** A zero of $a(x - h)^2$ hands you $h$ for free; the second point then pins down $a$ once you square the horizontal gap.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertex-form-from-two-conditions",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-391",
    domain: "advanced-math",
    skills: ["vertex-form", "function-evaluation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In the $xy$-plane, the graph of $y = (x - h)^2 + k$ has its vertex at $(-6, -2)$, where $h$ and $k$ are constants. What is the value of $h + k$?",
    choices: [
      { id: "A", text: "$-8$" },
      // distractor: flips the sign of $k$
      { id: "B", text: "$-4$" },
      // distractor: flips the sign of $h$
      { id: "C", text: "$4$" },
      // distractor: flips the sign of both constants
      { id: "D", text: "$8$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Vertex $(h, k) = (-6, -2)$, so $h + k = -8$.\n\n**The Full Solution:**\nStep 1: For $y = (x - h)^2 + k$ the vertex is $(h, k)$, read directly from the form.\nStep 2: The given vertex is $(-6, -2)$, so $h = -6$ and $k = -2$.\nStep 3: $h + k = -6 + (-2) = -8$. Check: with $h = -6$ the equation is $y = (x + 6)^2 - 2$, whose lowest point is $(-6, -2)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-4$): flips the sign of $k$, computing $-6 + 2$.\n* Choice C ($4$): flips the sign of $h$, computing $6 - 2$.\n* Choice D ($8$): flips both signs, computing $6 + 2$.\n\n**Test Day Takeaway:** In vertex form, $h$ and $k$ ARE the coordinates of the vertex — no sign flip is needed once the vertex is given to you.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertex-form-from-two-conditions",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-392",
    domain: "advanced-math",
    skills: ["vertex-form", "function-evaluation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The function $q$ is defined by $q(x) = a(x + 2)^2 + 9$, where $a$ is a constant. In the $xy$-plane, the graph of $y = q(x)$ has an $x$-intercept at $(1, 0)$. What is the value of $a$?",
    choices: [
      // distractor: uses $(x - 2)^2$, placing the vertex at $x = 2$
      { id: "A", text: "$-9$" },
      // distractor: divides by $3$ instead of $3^2$
      { id: "B", text: "$-3$" },
      { id: "C", text: "$-1$" },
      // distractor: drops the negative sign
      { id: "D", text: "$1$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** $q(1) = 0$ gives $a(1 + 2)^2 + 9 = 0$, so $9a = -9$ and $a = -1$.\n\n**The Full Solution:**\nStep 1: An $x$-intercept at $(1, 0)$ means $q(1) = 0$, so $a(1 + 2)^2 + 9 = 0$.\nStep 2: $(1 + 2)^2 = 9$, so the equation becomes $9a + 9 = 0$ and $9a = -9$.\nStep 3: $a = -1$. Check: $q(x) = -(x + 2)^2 + 9$ gives $q(1) = -9 + 9 = 0$, and the highest point is $q(-2) = 9$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-9$): uses $(1 - 2)^2 = 1$, as if the squared term were $(x - 2)^2$.\n* Choice B ($-3$): divides $-9$ by the horizontal distance $3$ instead of by $3^2 = 9$.\n* Choice D ($1$): finds the right size but keeps the sign positive, which would give $q(1) = 18$, not $0$.\n\n**Test Day Takeaway:** An $x$-intercept is just a second condition in disguise — set the output to $0$ and solve for the remaining constant.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertex-form-from-two-conditions",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-393",
    domain: "advanced-math",
    skills: ["vertex-form", "function-evaluation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the $xy$-plane, the graph of $y = 2(x - h)^2 - 18$ crosses the $x$-axis at $x = -9$ and $x = -3$, where $h$ is a constant. What is the value of $h$?",
    choices: [
      // distractor: adds the two intercepts instead of averaging them
      { id: "A", text: "$-12$" },
      { id: "B", text: "$-6$" },
      // distractor: reports the larger intercept
      { id: "C", text: "$-3$" },
      // distractor: flips the sign of $h$
      { id: "D", text: "$6$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The vertex sits midway between the intercepts, so $h = \\dfrac{-9 + (-3)}{2} = -6$.\n\n**The Full Solution:**\nStep 1: A parabola is symmetric about its vertical axis, and that axis is $x = h$ for $y = 2(x - h)^2 - 18$.\nStep 2: The axis passes through the midpoint of the two $x$-intercepts: $\\dfrac{-9 + (-3)}{2} = \\dfrac{-12}{2} = -6$.\nStep 3: $h = -6$. Check: $y = 2(x + 6)^2 - 18$ gives $2(9) - 18 = 0$ at $x = -9$ and $2(9) - 18 = 0$ at $x = -3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-12$): adds the intercepts but forgets to divide by $2$.\n* Choice C ($-3$): reports one of the intercepts rather than the value halfway between them.\n* Choice D ($6$): finds the correct distance but flips the sign, reading $(x - h)$ as $(x + h)$.\n\n**Test Day Takeaway:** The axis of symmetry is the AVERAGE of the two $x$-intercepts, and that average is exactly $h$ in vertex form.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertex-form-from-two-conditions",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-394",
    domain: "advanced-math",
    skills: ["vertex-form", "function-evaluation"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The graph shown in the $xy$-plane is the parabola $y = a(x - h)^2 + k$, where $a$, $h$, and $k$ are constants. The vertex and one other point on the curve are marked. What is the value of $a + h + k$?",
    diagram: { type: "quadraticVertex", params: { vertex: [2, -6], a: 0.5, showPoints: [[6, 2]], showVertex: true } },
    choices: [
      // distractor: takes $h = -2$, flipping the sign of the vertex $x$-coordinate
      { id: "A", text: "$-\\dfrac{15}{2}$" },
      { id: "B", text: "$-\\dfrac{7}{2}$" },
      // distractor: divides by $6 - 2$ instead of its square
      { id: "C", text: "$-2$" },
      // distractor: takes $k = 6$, flipping the sign of the vertex $y$-coordinate
      { id: "D", text: "$\\dfrac{17}{2}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** Vertex $(2, -6)$ gives $h = 2$, $k = -6$; the point $(6, 2)$ gives $16a - 6 = 2$, so $a = \\dfrac{1}{2}$ and the sum is $-\\dfrac{7}{2}$.\n\n**The Full Solution:**\nStep 1: Read the vertex from the graph: $(2, -6)$. In $y = a(x - h)^2 + k$ that means $h = 2$ and $k = -6$.\nStep 2: The second marked point is $(6, 2)$. Substitute: $2 = a(6 - 2)^2 - 6 = 16a - 6$, so $16a = 8$ and $a = \\dfrac{1}{2}$.\nStep 3: $a + h + k = \\dfrac{1}{2} + 2 - 6 = -\\dfrac{7}{2}$. Check: $y = \\dfrac{1}{2}(x - 2)^2 - 6$ gives $y = -6$ at $x = 2$ and $y = 8 - 6 = 2$ at $x = 6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\dfrac{15}{2}$): takes $h = -2$; vertex form SUBTRACTS $h$, so a vertex at $x = 2$ gives $h = +2$.\n* Choice C ($-2$): divides $8$ by $6 - 2 = 4$ instead of by $(6 - 2)^2 = 16$, producing $a = 2$.\n* Choice D ($\\dfrac{17}{2}$): takes $k = 6$ instead of $-6$, reading the vertex height with the wrong sign.\n\n**Test Day Takeaway:** Read $h$ and $k$ straight off the vertex with their own signs, then use the second point only to solve for $a$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertex-form-from-two-conditions",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- vertex-form-maximum (4 → 10) ---
  {
    id: "bank-am-395",
    domain: "advanced-math",
    skills: ["converting-quadratic-forms"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In the $xy$-plane, the graph of the quadratic function $g$ is shown, with its vertex marked. What is the maximum value of $g(x)$?",
    diagram: { type: "parabola", params: { vertex: { h: 4, k: 7 }, a: -1, xRange: [-4, 10], yRange: [-10, 10], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showVertex: true } },
    choices: [
      // distractor: reports the leading coefficient
      { id: "A", text: "$-1$" },
      // distractor: reports the $x$-coordinate of the vertex
      { id: "B", text: "$4$" },
      { id: "C", text: "$7$" },
      // distractor: adds the two vertex coordinates
      { id: "D", text: "$11$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The parabola opens downward, so its highest point is the vertex $(4, 7)$; the maximum value is $7$.\n\n**The Full Solution:**\nStep 1: The graph opens downward, so $g$ has a maximum and it occurs at the vertex.\nStep 2: The marked vertex is at $(4, 7)$.\nStep 3: The MAXIMUM VALUE is the output there, the $y$-coordinate $7$; the $x$-coordinate $4$ tells you only where the maximum happens. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-1$): reports the leading coefficient of the curve rather than a function value.\n* Choice B ($4$): reports where the maximum occurs instead of the maximum value itself.\n* Choice D ($11$): adds the two vertex coordinates, $4 + 7$.\n\n**Test Day Takeaway:** \"Maximum value\" always means the $y$-coordinate of the vertex; \"at what value of $x$\" asks for the other coordinate.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertex-form-maximum",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-396",
    domain: "advanced-math",
    skills: ["converting-quadratic-forms"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The function $h$ is defined by $h(x) = 26 - 3(x + 5)^2$. What is the maximum value of $h(x)$?",
    choices: [
      // distractor: reports the $x$-value where the maximum occurs
      { id: "A", text: "$-5$" },
      // distractor: reports the coefficient of the squared term
      { id: "B", text: "$3$" },
      // distractor: subtracts the coefficient 3 from 26
      { id: "C", text: "$23$" },
      { id: "D", text: "$26$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** The squared term is subtracted, so $h$ is largest when $(x + 5)^2 = 0$, leaving $h = 26$.\n\n**The Full Solution:**\nStep 1: $(x + 5)^2$ is never negative, so $3(x + 5)^2$ is never negative either.\nStep 2: Subtracting a nonnegative quantity from $26$ can only lower the value, so the largest possible output happens when $3(x + 5)^2 = 0$.\nStep 3: That occurs at $x = -5$, and $h(-5) = 26 - 0 = 26$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): reports where the maximum occurs instead of the maximum value.\n* Choice B ($3$): reports the coefficient in front of the squared term.\n* Choice C ($23$): subtracts the coefficient $3$ from $26$, as if the squared factor contributed $3$ at the vertex.\n\n**Test Day Takeaway:** When a squared term is subtracted, set it to zero — the constant left behind is the maximum value.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertex-form-maximum",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-397",
    domain: "advanced-math",
    skills: ["converting-quadratic-forms"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The quadratic function $f$ satisfies the three input-output pairs listed in the table. What is the maximum value of $f(x)$?",
    diagram: { type: "dataTable", params: { headers: ["x", "f(x)"], rows: [["0", "1"], ["1", "10"], ["4", "1"]] } },
    choices: [
      // distractor: reports the repeated output value
      { id: "A", text: "$1$" },
      // distractor: reports the $x$-value of the vertex
      { id: "B", text: "$2$" },
      // distractor: assumes the largest listed output is the maximum
      { id: "C", text: "$10$" },
      { id: "D", text: "$13$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** $f(0) = f(4)$ puts the vertex at $x = 2$; writing $f(x) = a(x - 2)^2 + k$ and using two rows gives $a = -3$, $k = 13$.\n\n**The Full Solution:**\nStep 1: The outputs at $x = 0$ and $x = 4$ are equal, so by symmetry the axis of the parabola is $x = \\dfrac{0 + 4}{2} = 2$ and $f(x) = a(x - 2)^2 + k$.\nStep 2: Substitute two rows. From $x = 0$: $4a + k = 1$. From $x = 1$: $a + k = 10$.\nStep 3: Subtracting gives $3a = -9$, so $a = -3$ and $k = 13$. Since $a < 0$ the vertex is a maximum, so the maximum value is $13$. Check: $f(0) = -3(4) + 13 = 1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($1$): reports the repeated output, which locates the axis but is not the peak.\n* Choice B ($2$): reports the $x$-value of the vertex instead of the value of $f$ there.\n* Choice C ($10$): assumes the largest number in the table must be the maximum; the vertex sits between the listed inputs.\n\n**Test Day Takeaway:** Two equal outputs pin the axis of symmetry halfway between them — the maximum lives there, usually at an $x$ the table never lists.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertex-form-maximum",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-398",
    domain: "advanced-math",
    skills: ["converting-quadratic-forms"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The function $f$ is defined by $f(x) = 14 - 5(x - 8)^2$. At what value of $x$ does $f$ attain its maximum value?",
    choices: [
      // distractor: flips the sign inside the parentheses
      { id: "A", text: "$-8$" },
      // distractor: reports the coefficient of the squared term
      { id: "B", text: "$5$" },
      { id: "C", text: "$8$" },
      // distractor: reports the maximum value instead of where it occurs
      { id: "D", text: "$14$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The subtracted square is smallest at $x = 8$, so the maximum occurs there.\n\n**The Full Solution:**\nStep 1: $5(x - 8)^2 \\ge 0$ for every $x$, and it is subtracted from $14$.\nStep 2: The output is therefore largest exactly when $5(x - 8)^2 = 0$.\nStep 3: $(x - 8)^2 = 0$ gives $x = 8$. Check: $f(8) = 14$, while $f(7) = 14 - 5 = 9$ and $f(9) = 9$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-8$): flips the sign inside the parentheses; the square is zero at $x = 8$, not $x = -8$.\n* Choice B ($5$): reports the coefficient of the squared term.\n* Choice D ($14$): reports the maximum VALUE rather than the input where it happens.\n\n**Test Day Takeaway:** Set the squared expression equal to zero to find WHERE the extreme value occurs; the leftover constant is the value itself.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertex-form-maximum",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-399",
    domain: "advanced-math",
    skills: ["converting-quadratic-forms"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the $xy$-plane, the graph of $y = -3x^2 + 24x - 5$ is a parabola that opens downward. What is the maximum value of $y$?",
    choices: [
      // distractor: reports the constant term
      { id: "A", text: "$-5$" },
      // distractor: reports the $x$-value of the vertex
      { id: "B", text: "$4$" },
      { id: "C", text: "$43$" },
      // distractor: omits the constant term when evaluating
      { id: "D", text: "$48$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The vertex is at $x = \\dfrac{-24}{2(-3)} = 4$, and $y = -3(16) + 96 - 5 = 43$.\n\n**The Full Solution:**\nStep 1: For $y = ax^2 + bx + c$ the vertex occurs at $x = -\\dfrac{b}{2a}$. Here $a = -3$ and $b = 24$, so $x = -\\dfrac{24}{-6} = 4$.\nStep 2: Substitute: $y = -3(4)^2 + 24(4) - 5 = -48 + 96 - 5$.\nStep 3: $y = 43$. Since $a < 0$ the parabola opens downward, so this is a maximum. Check by symmetry: $y = 40$ at both $x = 3$ and $x = 5$, on either side of $43$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): reports the constant term, which is the value at $x = 0$, not at the vertex.\n* Choice B ($4$): reports the $x$-value of the vertex instead of the maximum value.\n* Choice D ($48$): evaluates $-3(16) + 24(4)$ but forgets to subtract the constant $5$.\n\n**Test Day Takeaway:** $x = -\\dfrac{b}{2a}$ finds WHERE; you must substitute back — including the constant term — to get the maximum value.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertex-form-maximum",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-400",
    domain: "advanced-math",
    skills: ["converting-quadratic-forms"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The function $f$ is defined by $f(x) = a(x - 6)^2 + k$, where $a$ and $k$ are constants. The maximum value of $f$ is $17$, and $f(2) = 1$. What is the value of $a$?",
    choices: [
      // distractor: squares only the input, using $2^2$ instead of $(2 - 6)^2$
      { id: "A", text: "$-4$" },
      { id: "B", text: "$-1$" },
      // distractor: drops the negative sign required by a maximum
      { id: "C", text: "$1$" },
      // distractor: divides by $2 - 6$ instead of its square
      { id: "D", text: "$4$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** A maximum means $k = 17$; then $16a + 17 = 1$, so $a = -1$.\n\n**The Full Solution:**\nStep 1: For $f(x) = a(x - 6)^2 + k$ the extreme value is $k$. Because that extreme value is a MAXIMUM, $a$ must be negative and $k = 17$.\nStep 2: Substitute $f(2) = 1$: $a(2 - 6)^2 + 17 = 1$, and $(2 - 6)^2 = 16$, so $16a = -16$.\nStep 3: $a = -1$, which is indeed negative as required. Check: $f(x) = -(x - 6)^2 + 17$ gives $f(6) = 17$ and $f(2) = -16 + 17 = 1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): squares the input alone, solving $4a + 17 = 1$ instead of $16a + 17 = 1$.\n* Choice C ($1$): gets the size right but keeps $a$ positive, which would make $17$ a minimum, not a maximum.\n* Choice D ($4$): divides $-16$ by $2 - 6 = -4$ instead of by $(2 - 6)^2 = 16$.\n\n**Test Day Takeaway:** The word \"maximum\" fixes both facts at once: $k$ is that value and $a$ must be negative — use the sign as a final check.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertex-form-maximum",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- vieta-sum-product-of-roots (4 → 10) ---
  {
    id: "bank-am-401",
    domain: "advanced-math",
    skills: ["quadratic-factoring"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The equation $x^2 - 11x + 24 = 0$ has two distinct real solutions. What is the sum of the two solutions?",
    choices: [
      // distractor: uses $b$ rather than $-b$
      { id: "A", text: "$-11$" },
      // distractor: reports only the smaller solution
      { id: "B", text: "$3$" },
      { id: "C", text: "$11$" },
      // distractor: reports the product instead of the sum
      { id: "D", text: "$24$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Vieta Sum & Product of Roots**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** For $x^2 + bx + c = 0$ the sum of the solutions is $-b$, so the sum is $-(-11) = 11$.\n\n**The Full Solution:**\nStep 1: The equation is already in the form $x^2 + bx + c = 0$ with $b = -11$ and $c = 24$.\nStep 2: If the solutions are $r$ and $s$, then $x^2 + bx + c = (x - r)(x - s) = x^2 - (r + s)x + rs$, so $r + s = -b$.\nStep 3: $r + s = -(-11) = 11$. Check by factoring: $x^2 - 11x + 24 = (x - 3)(x - 8)$, and $3 + 8 = 11$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-11$): copies the coefficient $b$ without the sign change built into $-b$.\n* Choice B ($3$): reports only the smaller of the two solutions.\n* Choice D ($24$): reports the PRODUCT of the solutions, which is the constant term.\n\n**Test Day Takeaway:** With a leading coefficient of $1$, the sum of the solutions is the OPPOSITE of the middle coefficient and the product is the constant.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vieta-sum-product-of-roots",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-402",
    domain: "advanced-math",
    skills: ["quadratic-factoring"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The equation $x^2 + 9x - 36 = 0$ has solutions $m$ and $n$. What is the value of $mn$?",
    choices: [
      { id: "A", text: "$-36$" },
      // distractor: reports one solution instead of the product
      { id: "B", text: "$-12$" },
      // distractor: reports the sum of the solutions
      { id: "C", text: "$-9$" },
      // distractor: drops the sign of the constant term
      { id: "D", text: "$36$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Vieta Sum & Product of Roots**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** For $x^2 + bx + c = 0$ the product of the solutions is $c$, so $mn = -36$.\n\n**The Full Solution:**\nStep 1: The equation is in the form $x^2 + bx + c = 0$ with $b = 9$ and $c = -36$.\nStep 2: If the solutions are $m$ and $n$, then $x^2 + bx + c = (x - m)(x - n) = x^2 - (m + n)x + mn$, so $mn = c$.\nStep 3: $mn = -36$. Check by factoring: $x^2 + 9x - 36 = (x + 12)(x - 3)$, so the solutions are $-12$ and $3$, and $(-12)(3) = -36$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-12$): reports one of the two solutions rather than their product.\n* Choice C ($-9$): reports the SUM of the solutions, which is $-b$, not the product.\n* Choice D ($36$): takes the constant term but drops its negative sign.\n\n**Test Day Takeaway:** With a leading coefficient of $1$, the product of the solutions is the constant term exactly as written — sign included.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vieta-sum-product-of-roots",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-403",
    domain: "advanced-math",
    skills: ["quadratic-factoring"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The graph of $y = g(x)$ is shown in the $xy$-plane, where $g$ is a quadratic function whose two zeros are marked. The function is defined by $g(x) = ax^2 + bx + c$, where $a$, $b$, and $c$ are nonzero constants. What is the value of $\\dfrac{b}{a}$?",
    diagram: { type: "quadraticIntercepts", params: { intercepts: [-7, 3] } },
    choices: [
      // distractor: reports $\frac{c}{a}$, the product of the zeros
      { id: "A", text: "$-21$" },
      // distractor: reports the sum of the zeros without the sign change
      { id: "B", text: "$-4$" },
      { id: "C", text: "$4$" },
      // distractor: reports the product of the zeros with the sign dropped
      { id: "D", text: "$21$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Vieta Sum & Product of Roots**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The zeros are $-7$ and $3$, so $-\\dfrac{b}{a} = -7 + 3 = -4$ and $\\dfrac{b}{a} = 4$.\n\n**The Full Solution:**\nStep 1: The marked points show the zeros of $g$ are $x = -7$ and $x = 3$.\nStep 2: For $ax^2 + bx + c = 0$ the sum of the solutions is $-\\dfrac{b}{a}$. Here that sum is $-7 + 3 = -4$.\nStep 3: So $-\\dfrac{b}{a} = -4$, giving $\\dfrac{b}{a} = 4$. Check with a concrete case: $a = 1$ gives $g(x) = (x + 7)(x - 3) = x^2 + 4x - 21$, and $\\dfrac{4}{1} = 4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-21$): reports $\\dfrac{c}{a}$, the PRODUCT of the zeros, instead of the ratio asked for.\n* Choice B ($-4$): reports the sum of the zeros itself, forgetting that the sum equals $-\\dfrac{b}{a}$, not $\\dfrac{b}{a}$.\n* Choice D ($21$): takes the product of the zeros and drops its negative sign.\n\n**Test Day Takeaway:** The sum and product rules work for any leading coefficient once you divide by it: sum $= -\\dfrac{b}{a}$ and product $= \\dfrac{c}{a}$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vieta-sum-product-of-roots",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-404",
    domain: "advanced-math",
    skills: ["quadratic-factoring"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The solutions of the equation $4x^2 + 20x - 96 = 0$ are $r$ and $s$. What is the value of $rs$?",
    choices: [
      // distractor: uses $c$ without dividing by $a$
      { id: "A", text: "$-96$" },
      { id: "B", text: "$-24$" },
      // distractor: reports the sum of the solutions
      { id: "C", text: "$-5$" },
      // distractor: drops the negative sign
      { id: "D", text: "$24$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Vieta Sum & Product of Roots**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The product of the solutions is $\\dfrac{c}{a} = \\dfrac{-96}{4} = -24$.\n\n**The Full Solution:**\nStep 1: For $ax^2 + bx + c = 0$, dividing by $a$ gives $x^2 + \\dfrac{b}{a}x + \\dfrac{c}{a} = 0$, so the product of the solutions is $\\dfrac{c}{a}$.\nStep 2: Here $a = 4$ and $c = -96$, so $rs = \\dfrac{-96}{4}$.\nStep 3: $rs = -24$. Check by factoring: $4x^2 + 20x - 96 = 4(x + 8)(x - 3)$, so the solutions are $-8$ and $3$, and $(-8)(3) = -24$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-96$): uses the constant term directly, which is only correct when the leading coefficient is $1$.\n* Choice C ($-5$): reports the SUM of the solutions, $-\\dfrac{20}{4}$, instead of their product.\n* Choice D ($24$): divides correctly but drops the negative sign.\n\n**Test Day Takeaway:** When $a \\ne 1$, always divide: the product is $\\dfrac{c}{a}$, never $c$ alone.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vieta-sum-product-of-roots",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-405",
    domain: "advanced-math",
    skills: ["quadratic-factoring"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The equation $x^2 + kx + 40 = 0$ has solutions $p$ and $q$, where $k$ is a constant and $p + q = 13$. What is the value of $k$?",
    choices: [
      // distractor: reports the negative of the constant term
      { id: "A", text: "$-40$" },
      { id: "B", text: "$-13$" },
      // distractor: sets $k$ equal to the sum instead of its opposite
      { id: "C", text: "$13$" },
      // distractor: reports the constant term, which is the product
      { id: "D", text: "$40$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Vieta Sum & Product of Roots**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $p + q = -k$, so $-k = 13$ and $k = -13$.\n\n**The Full Solution:**\nStep 1: With a leading coefficient of $1$, the sum of the solutions of $x^2 + kx + 40 = 0$ is $-k$.\nStep 2: The problem states that sum is $13$, so $-k = 13$.\nStep 3: $k = -13$. Check: $x^2 - 13x + 40 = (x - 5)(x - 8)$, whose solutions $5$ and $8$ add to $13$ and multiply to $40$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-40$): reports the negative of the constant term, mixing up the product rule with the sum rule.\n* Choice C ($13$): sets $k$ equal to the sum directly, skipping the sign change in $-k$.\n* Choice D ($40$): reports the constant term, which is the PRODUCT of the solutions, not $k$.\n\n**Test Day Takeaway:** The middle coefficient is the NEGATIVE of the sum of the solutions — write $-k = p + q$ before solving.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vieta-sum-product-of-roots",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-406",
    domain: "advanced-math",
    skills: ["quadratic-factoring"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The solutions of the equation $2x^2 + bx + c = 0$ are $-5$ and $\\dfrac{3}{2}$, where $b$ and $c$ are constants. What is the value of $b + c$?",
    choices: [
      // distractor: flips the sign of $b$
      { id: "A", text: "$-22$" },
      { id: "B", text: "$-8$" },
      // distractor: omits the leading coefficient 2 from both formulas
      { id: "C", text: "$-4$" },
      // distractor: flips the sign of both constants
      { id: "D", text: "$22$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Vieta Sum & Product of Roots**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Sum $-\\dfrac{7}{2} = -\\dfrac{b}{2}$ gives $b = 7$; product $-\\dfrac{15}{2} = \\dfrac{c}{2}$ gives $c = -15$; the sum is $-8$.\n\n**The Full Solution:**\nStep 1: For $2x^2 + bx + c = 0$ the sum of the solutions is $-\\dfrac{b}{2}$ and the product is $\\dfrac{c}{2}$.\nStep 2: The sum of the given solutions is $-5 + \\dfrac{3}{2} = -\\dfrac{7}{2}$, so $-\\dfrac{b}{2} = -\\dfrac{7}{2}$ and $b = 7$.\nStep 3: The product is $(-5)\\left(\\dfrac{3}{2}\\right) = -\\dfrac{15}{2}$, so $\\dfrac{c}{2} = -\\dfrac{15}{2}$ and $c = -15$. Then $b + c = 7 - 15 = -8$. Check by expanding $(x + 5)(2x - 3) = 2x^2 + 7x - 15$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-22$): flips the sign of $b$, using $b = -7$ with $c = -15$.\n* Choice C ($-4$): ignores the leading coefficient, taking $b = \\dfrac{7}{2}$ and $c = -\\dfrac{15}{2}$.\n* Choice D ($22$): flips the signs of both constants, using $b = 7$ and $c = 15$.\n\n**Test Day Takeaway:** Building the factored form $(x + 5)(2x - 3)$ and expanding is a fast way to confirm both coefficients at once.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vieta-sum-product-of-roots",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // === DIFFICULT-QUESTIONS PDF BATCH (2026-05-22) — 18 advanced-math items reskinned ===

  {
    id: "bank-am-407",
    domain: "advanced-math",
    skills: ["vertex-form", "discriminant-analysis"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the $xy$-plane, the graph of $y = 2x^2 + 24x + 55$ intersects the line $y = d$ at exactly one point, where $d$ is a constant. What is the value of $d$?",
    choices: [
      { id: "A", text: "$-17$" },
      // distractor: reports the $x$-coordinate of the vertex
      { id: "B", text: "$-6$" },
      // distractor: reports the $y$-intercept
      { id: "C", text: "$55$" },
      // distractor: substitutes $x = 6$ instead of $x = -6$
      { id: "D", text: "$271$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Horizontal Tangent to a Parabola (Max/Min)**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** One intersection means $y = d$ passes through the vertex; $x = \\dfrac{-24}{4} = -6$ and $y = 2(36) - 144 + 55 = -17$.\n\n**The Full Solution:**\nStep 1: A horizontal line meets an upward-opening parabola twice, once, or never. Exactly one point means the line touches the vertex, so $d$ is the minimum value of $y$.\nStep 2: The vertex is at $x = -\\dfrac{b}{2a} = -\\dfrac{24}{2(2)} = -6$.\nStep 3: $y = 2(-6)^2 + 24(-6) + 55 = 72 - 144 + 55 = -17$, so $d = -17$. Check algebraically: $2x^2 + 24x + 55 = d$ has one solution when its discriminant $24^2 - 4(2)(55 - d) = 0$, giving $576 = 440 - 8d$, so $d = -17$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-6$): reports the $x$-coordinate of the vertex rather than the height of the tangent line.\n* Choice C ($55$): reports the $y$-intercept, the value at $x = 0$ instead of at the vertex.\n* Choice D ($271$): substitutes $x = 6$ instead of $x = -6$, giving $72 + 144 + 55$.\n\n**Test Day Takeaway:** \"Exactly one intersection with a horizontal line\" is another way of saying \"the line sits at the vertex\" — find the extreme value, not the location.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertex-form-maximum",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-am-408",
    domain: "advanced-math",
    skills: ["exponential-growth-decay", "exponential-y-intercept"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A model estimates that at the end of each year from $2014$ through $2020$, the number of nesting pairs at a wildlife preserve was $150\\%$ more than the number at the end of the previous year. The model estimates that there were $400$ nesting pairs at the end of $2016$. Which equation gives the estimated number of nesting pairs, $P$, $t$ years after $2014$, where $0 \\le t \\le 6$?",
    choices: [
      // distractor: reads "150% more" as a factor of 1.5
      { id: "A", text: "$P = 64(1.5)^t$" },
      { id: "B", text: "$P = 64(2.5)^t$" },
      // distractor: divides the 2016 count by the growth factor only once
      { id: "C", text: "$P = 160(2.5)^t$" },
      // distractor: uses the 2016 count as the value at $t = 0$
      { id: "D", text: "$P = 400(2.5)^t$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Build Exponential Growth Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~45s):** \"$150\\%$ more\" means multiply by $2.5$ each year; working back two years from $400$ gives $\\dfrac{400}{2.5^2} = 64$.\n\n**The Full Solution:**\nStep 1: Being $150\\%$ MORE than the previous year means the new value is $100\\% + 150\\% = 250\\%$ of the old one, a growth factor of $2.5$. So $P = P_0(2.5)^t$.\nStep 2: The end of $2016$ is $t = 2$, and the model gives $400$ there: $P_0(2.5)^2 = 400$, so $6.25P_0 = 400$.\nStep 3: $P_0 = 64$, and the equation is $P = 64(2.5)^t$. Check: $64 \\to 160 \\to 400$ for $t = 0, 1, 2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: reads \"$150\\%$ more\" as a factor of $1.5$, which is the factor for a $50\\%$ increase.\n* Choice C: divides $400$ by $2.5$ only once, landing on the $2015$ value instead of the $2014$ value.\n* Choice D: uses the $2016$ count as the starting value, ignoring that $t$ is measured from $2014$.\n\n**Test Day Takeaway:** \"$p\\%$ MORE than\" gives the factor $1 + \\dfrac{p}{100}$, and an anchor at $t = k$ must be divided back by the factor $k$ times to reach the initial value.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "build-exponential-model",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-am-409",
    domain: "advanced-math",
    skills: ["discriminant-analysis", "identify-quadratic"],
    difficulty: "hard",
    type: "fill-in",
    question: "$$y = -3.5$$\n$$y = x^2 - 12x + a$$\n\nIn the given system of equations, $a$ is a positive constant. In the $xy$-plane, the graphs of the two equations intersect at exactly one point. What is the value of $a$?",
    correctAnswer: "32.5",
    explanation: "**SAT Pattern: Discriminant Equals Zero (System of Quadratic and Horizontal Line)**\n\n**The correct answer is $32.5$.**\n\n**The Fast Way (~40s):** Setting the two expressions equal gives $x^2 - 12x + (a + 3.5) = 0$; a single intersection needs $144 - 4(a + 3.5) = 0$, so $a = 32.5$.\n\n**The Full Solution:**\nStep 1: At an intersection both equations give the same $y$, so $-3.5 = x^2 - 12x + a$, which rearranges to $x^2 - 12x + (a + 3.5) = 0$.\nStep 2: A quadratic equation has one repeated solution — one intersection point — when its discriminant is $0$: $(-12)^2 - 4(1)(a + 3.5) = 0$.\nStep 3: $144 = 4(a + 3.5)$, so $a + 3.5 = 36$ and $a = 32.5$, which is positive as required. Check: $x^2 - 12x + 36 = (x - 6)^2$ touches zero only at $x = 6$, and $6^2 - 12(6) + 32.5 = -3.5$. $\\checkmark$\n\n**Common Mistakes:**\n* Forgetting to move the $-3.5$ across: solving $144 - 4a = 0$ gives $a = 36$, and then the curve never reaches the line $y = -3.5$.\n* Adding instead of subtracting when rearranging: solving $144 - 4(a - 3.5) = 0$ gives $a = 39.5$.\n* Writing $(-12)^2$ as $-144$: that gives $a + 3.5 = -36$, so $a = -39.5$, which contradicts the requirement that $a$ be positive.\n\n**Test Day Takeaway:** Move EVERYTHING to one side first — the constant from the horizontal line joins $c$ before you apply $b^2 - 4ac = 0$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "discriminant-analysis",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-am-410",
    domain: "advanced-math",
    skills: ["function-transformations"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The function $f$ is defined by $f(x) = (x + 9)(x - 2)(x + 4)$. In the $xy$-plane, the graph of $y = f(x) - 6$ passes through the points $(-9, y_1)$, $(-4, y_2)$, and $(2, y_3)$. Which of the following must be true?",
    choices: [
      // distractor: forgets the vertical shift
      { id: "A", text: "$y_1 = y_2 = y_3 = 0$" },
      { id: "B", text: "$y_1 = y_2 = y_3 = -6$" },
      // distractor: shifts up instead of down
      { id: "C", text: "$y_1 = y_2 = y_3 = 6$" },
      // distractor: assumes the three outputs must differ
      { id: "D", text: "$y_1$, $y_2$, and $y_3$ are three distinct negative numbers" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Vertical Shift of a Polynomial**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Each listed input is a zero of $f$, so $f(x) = 0$ there and $y = 0 - 6 = -6$ at all three.\n\n**The Full Solution:**\nStep 1: $f$ is written in factored form, so it is zero exactly where one factor is zero: $x = -9$, $x = 2$, and $x = -4$.\nStep 2: The three given inputs are precisely those zeros, so $f(-9) = f(-4) = f(2) = 0$.\nStep 3: Subtracting $6$ lowers every output by $6$: $y_1 = y_2 = y_3 = 0 - 6 = -6$. Check one directly: $f(-4) = (5)(-6)(0) = 0$, so the shifted value is $-6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: evaluates $f$ at its zeros but forgets that the graph is $y = f(x) - 6$, not $y = f(x)$.\n* Choice C: shifts the graph up instead of down, treating $-6$ as $+6$.\n* Choice D: assumes three different inputs must give three different outputs; here all three are zeros, so the shifted values coincide.\n\n**Test Day Takeaway:** A vertical shift moves every point by the same amount, so inputs that shared an output before still share one after.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertical-shift",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-am-411",
    domain: "advanced-math",
    skills: ["exponential-growth-decay", "exponential-y-intercept"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "For the function $q$, the value of $q(x)$ decreases by $20\\%$ for every increase in the value of $x$ by $1$. Given that $q(3) = 128$, which of the following equations defines $q$?",
    choices: [
      // distractor: uses the percent lost as the base and keeps $128$ as the initial value
      { id: "A", text: "$q(x) = 128(0.2)^x$" },
      // distractor: has the right base but reads $q(3)$ as the value at $x = 0$
      { id: "B", text: "$q(x) = 128(0.8)^x$" },
      { id: "C", text: "$q(x) = 250(0.8)^x$" },
      // distractor: treats the $20\%$ decrease as a $20\%$ increase
      { id: "D", text: "$q(x) = 250(1.2)^x$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Exponential Decay — Standard Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Losing $20\\%$ leaves the base $0.8$, and the value given sits at $x = 3$, so $q(0) = \\dfrac{128}{0.8^3} = \\dfrac{128}{0.512} = 250$.\n\n**The Full Solution:**\nStep 1: A constant percent change per unit increase in $x$ is exponential: $q(x) = a(b)^x$, where $a = q(0)$. Decreasing by $20\\%$ leaves $100\\% - 20\\% = 80\\%$ of the previous value, so $b = 0.8$.\nStep 2: The value supplied is at $x = 3$, not at $x = 0$, so $a$ is not $128$. Substitute: $a(0.8)^3 = 128$, and $(0.8)^3 = \\dfrac{64}{125}$, so $\\dfrac{64a}{125} = 128$.\nStep 3: $a = 128 \\cdot \\dfrac{125}{64} = 250$, so $q(x) = 250(0.8)^x$. Check by stepping down from $x = 0$: $250 \\to 200 \\to 160 \\to 128$, each value $80\\%$ of the one before. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: uses the percent LOST as the base and keeps $128$ as the starting value; that model gives $q(3) = 128(0.008) = 1.024$, not $128$.\n* Choice B: has the correct base but reads $q(3) = 128$ as the value at $x = 0$; that model gives $q(3) = 128(0.512) = 65.536$.\n* Choice D: builds the base as $1 + 0.20$, which models a $20\\%$ increase, so the values would rise rather than fall.\n\n**Test Day Takeaway:** The coefficient in $a(b)^x$ is the value at $x = 0$ — when the problem hands you the value at a different input, divide by the base that many times before writing the model.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "exponential-decay-expression",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-am-412",
    domain: "advanced-math",
    skills: ["exponent-laws", "zero-negative-exponents"],
    difficulty: "hard",
    type: "fill-in",
    question: "The expression $\\sqrt[3]{8x^9} \\cdot \\sqrt[4]{81x^2}$ is equivalent to $ax^b$, where $a$ and $b$ are positive constants and $x > 1$. What is the value of $a + b$?",
    correctAnswer: "9.5",
    explanation: "**SAT Pattern: Radical with Rational Exponents**\n\n**The correct answer is $9.5$.**\n\n**The Fast Way (~45s):** $\\sqrt[3]{8x^9} = 2x^3$ and $\\sqrt[4]{81x^2} = 3x^{1/2}$, so the product is $6x^{7/2}$ and $a + b = 6 + 3.5$.\n\n**The Full Solution:**\nStep 1: A radical of index $n$ raises the radicand to the power $\\dfrac{1}{n}$. So $\\sqrt[3]{8x^9} = 8^{1/3}x^{9/3} = 2x^3$.\nStep 2: Likewise $\\sqrt[4]{81x^2} = 81^{1/4}x^{2/4} = 3x^{1/2}$.\nStep 3: Multiply: $(2x^3)(3x^{1/2}) = 6x^{3 + 1/2} = 6x^{7/2}$. So $a = 6$, $b = \\dfrac{7}{2}$, and $a + b = 6 + 3.5 = 9.5$. Check at $x = 16$: $\\sqrt[3]{8 \\cdot 16^9} = 2 \\cdot 16^3 = 8192$ and $\\sqrt[4]{81 \\cdot 256} = 3 \\cdot 4 = 12$; the product $98{,}304$ equals $6 \\cdot 16^{3.5} = 6 \\cdot 16384$. $\\checkmark$\n\n**Common Mistakes:**\n* Multiplying the radicands' numerical parts instead of taking their roots: $8 \\cdot 81 = 648$ gives $a + b = 651.5$.\n* Adding the exponents inside before dividing by an index: $\\dfrac{9 + 2}{3} = \\dfrac{11}{3}$ gives $a + b = \\dfrac{29}{3}$, about $9.67$.\n* Multiplying the two exponents instead of adding them: $3 \\cdot \\dfrac{1}{2} = \\dfrac{3}{2}$ gives $a + b = 7.5$.\n\n**Test Day Takeaway:** Convert every radical to a fractional exponent first; then the only rules you need are $\\left(x^m\\right)^{1/n} = x^{m/n}$ and $x^p \\cdot x^q = x^{p + q}$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "exponent-rules-with-radicals",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-am-413",
    domain: "advanced-math",
    skills: ["vertex-form", "parabola-direction"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the $xy$-plane, a parabola with vertex $(-6, 4)$ intersects the $x$-axis at exactly two points. An equation of the parabola is $y = ax^2 + bx + c$, where $a$, $b$, and $c$ are constants. What is the value of $\\dfrac{b}{a}$?",
    choices: [
      // distractor: solves $\frac{-b}{2a} = -6$ as $b = -12a$
      { id: "A", text: "$-12$" },
      // distractor: reports the $x$-coordinate of the vertex
      { id: "B", text: "$-6$" },
      // distractor: omits the factor of 2 in the axis formula
      { id: "C", text: "$6$" },
      { id: "D", text: "$12$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Vertex + Sign-of-Coefficient Reasoning**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** The axis of symmetry is $x = -\\dfrac{b}{2a} = -6$, so $\\dfrac{b}{2a} = 6$ and $\\dfrac{b}{a} = 12$.\n\n**The Full Solution:**\nStep 1: For $y = ax^2 + bx + c$ the vertex lies on the vertical line $x = -\\dfrac{b}{2a}$. The vertex here has $x$-coordinate $-6$, so $-\\dfrac{b}{2a} = -6$.\nStep 2: Multiply both sides by $-1$: $\\dfrac{b}{2a} = 6$. Multiply by $2$: $\\dfrac{b}{a} = 12$.\nStep 3: Sign check. The vertex sits ABOVE the $x$-axis at height $4$, and the parabola still meets the axis twice, so it must open downward and $a < 0$. Then $b = 12a$ is also negative, and their ratio is positive — consistent with $12$. A concrete case: $y = -(x + 6)^2 + 4 = -x^2 - 12x - 32$, where $\\dfrac{-12}{-1} = 12$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-12$): drops a negative when clearing $-\\dfrac{b}{2a} = -6$, concluding $b = -12a$.\n* Choice B ($-6$): reports the $x$-coordinate of the vertex itself instead of the ratio.\n* Choice C ($6$): forgets the factor of $2$ in $-\\dfrac{b}{2a}$.\n\n**Test Day Takeaway:** The vertex $x$-coordinate always gives you $\\dfrac{b}{a}$ — and the position of the vertex relative to the $x$-axis tells you the sign of $a$ as a free check.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertex-application",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-am-414",
    domain: "advanced-math",
    skills: ["exponential-growth-decay", "exponential-y-intercept"],
    difficulty: "hard",
    type: "fill-in",
    question: "The function $f$ is defined by $f(x) = -a^x + b$, where $a$ and $b$ are positive constants. In the $xy$-plane, the graph of $y = f(x) - 5$ has its $y$-intercept at $(0, 2)$. The product of $a$ and $b$ is $6$. What is the value of $a$?",
    correctAnswer: "3/4",
    explanation: "**SAT Pattern: Exponential Shifted Form — Recover Base**\n\n**The correct answer is $\\dfrac{3}{4}$.**\n\n**The Fast Way (~45s):** At $x = 0$, $-a^0 + b - 5 = 2$, so $b = 8$ and $a = \\dfrac{6}{8} = \\dfrac{3}{4}$.\n\n**The Full Solution:**\nStep 1: The $y$-intercept of $y = f(x) - 5$ is its value at $x = 0$: $f(0) - 5 = 2$.\nStep 2: $f(0) = -a^0 + b = -1 + b$ because any positive base to the zero power is $1$. So $-1 + b - 5 = 2$, giving $b - 6 = 2$ and $b = 8$.\nStep 3: The product $ab = 6$, so $a = \\dfrac{6}{8} = \\dfrac{3}{4}$, which is positive as required. Check: $f(x) = -\\left(\\dfrac{3}{4}\\right)^x + 8$, so $f(0) = 7$ and $7 - 5 = 2$. $\\checkmark$\n\n**Common Mistakes:**\n* Treating $a^0$ as $0$: that gives $b - 5 = 2$ and $b = 7$, so $a = \\dfrac{6}{7}$ instead of $\\dfrac{3}{4}$.\n* Adding the $5$ instead of subtracting it: $-1 + b + 5 = 2$ gives $b = -2$, which contradicts the requirement that $b$ be positive.\n* Answering with $b$ instead of $a$, giving $8$, or multiplying instead of dividing, giving $6 \\cdot 8 = 48$.\n\n**Test Day Takeaway:** Every \"$y$-intercept of a shifted graph\" question reduces to substituting $x = 0$ — and $a^0 = 1$ is the step most often skipped.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "interpret-exponential-parameters",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-am-415",
    domain: "advanced-math",
    skills: ["finding-roots-factoring", "roots-from-factors"],
    difficulty: "hard",
    type: "fill-in",
    question: "The polynomial function $p$ is defined by $p(x) = x(x - 4)^2(x + 9)$. If $p(5 - k) = 0$, what is the sum of all distinct values of $k$ that satisfy this equation?",
    correctAnswer: "20",
    explanation: "**SAT Pattern: Sum of Roots via Input Shift**\n\n**The correct answer is $20$.**\n\n**The Fast Way (~50s):** $p$ is zero at $0$, $4$, and $-9$; setting $5 - k$ equal to each gives $k = 5$, $1$, and $14$, which add to $20$.\n\n**The Full Solution:**\nStep 1: A product equals zero only when a factor equals zero, so $p(t) = 0$ when $t = 0$, $t = 4$, or $t = -9$. The squared factor $(x - 4)^2$ repeats the value $4$ but contributes no new one.\nStep 2: The input is $5 - k$, so require $5 - k = 0$, $5 - k = 4$, or $5 - k = -9$.\nStep 3: Solving gives $k = 5$, $k = 1$, and $k = 14$, and $5 + 1 + 14 = 20$. Check: $p(5 - 5) = p(0) = 0$, $p(5 - 1) = p(4) = 0$, and $p(5 - 14) = p(-9) = 0$. $\\checkmark$\n\n**Common Mistakes:**\n* Counting the repeated zero twice, giving $5 + 1 + 1 + 14 = 21$ instead of $20$.\n* Adding the zeros of $p$ themselves and reporting $0 + 4 - 9 = -5$, ignoring the shifted input.\n* Solving $k - 5$ instead of $5 - k$: that gives $k = 5$, $9$, and $-4$, a sum of $10$.\n\n**Test Day Takeaway:** Set the shifted input equal to each zero and solve for the variable — a squared factor supplies only ONE distinct value.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "roots-from-factors",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-am-416",
    domain: "advanced-math",
    skills: ["percent-change", "percent-word-problems"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The result of increasing a quantity $x$ by $150\\%$ is $210$. What is the value of $x$?",
    choices: [
      // distractor: subtracts 150% of 210 from 210
      { id: "A", text: "$-105$" },
      { id: "B", text: "$84$" },
      // distractor: divides by 1.5 instead of 2.5
      { id: "C", text: "$140$" },
      // distractor: multiplies by 2.5 instead of dividing
      { id: "D", text: "$525$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Reverse Percent Increase**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Increasing by $150\\%$ multiplies by $2.5$, so $2.5x = 210$ and $x = 84$.\n\n**The Full Solution:**\nStep 1: Increasing $x$ by $150\\%$ adds $1.5x$ to $x$, giving $x + 1.5x = 2.5x$.\nStep 2: Set that equal to the result: $2.5x = 210$.\nStep 3: $x = \\dfrac{210}{2.5} = 84$. Check: $150\\%$ of $84$ is $126$, and $84 + 126 = 210$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-105$): works forward instead of backward, computing $210 - 1.5(210)$.\n* Choice C ($140$): divides by $1.5$, treating \"increased by $150\\%$\" as \"is $150\\%$ of\".\n* Choice D ($525$): multiplies by $2.5$ instead of dividing, which finds the result of increasing $210$.\n\n**Test Day Takeaway:** \"Increased BY $p\\%$\" means multiplied by $1 + \\dfrac{p}{100}$; to go backward, divide by that factor.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "reverse-percent",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-am-417",
    domain: "advanced-math",
    skills: ["exponential-growth-decay", "exponent-laws"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The function $V$ is defined by $V(t) = 24{,}000(1.08)^{(3/4)t}$ and models the value, in dollars, of an account $t$ years after it was opened. According to the model, the value of the account increases by $8\\%$ every how many months?",
    choices: [
      // distractor: multiplies 12 months by 3/4 instead of dividing
      { id: "A", text: "$9$" },
      // distractor: ignores the coefficient in the exponent
      { id: "B", text: "$12$" },
      { id: "C", text: "$16$" },
      // distractor: converts 4 years to months, using only the numerator
      { id: "D", text: "$48$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Period of Exponential Growth — Months Interpretation**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** One factor of $1.08$ needs $\\dfrac{3}{4}t = 1$, so $t = \\dfrac{4}{3}$ years, which is $16$ months.\n\n**The Full Solution:**\nStep 1: The base $1.08$ produces an $8\\%$ increase each time the exponent grows by $1$.\nStep 2: The exponent is $\\dfrac{3}{4}t$, so it increases by $1$ when $\\dfrac{3}{4}t = 1$, that is, $t = \\dfrac{4}{3}$ year.\nStep 3: $\\dfrac{4}{3}$ year $= \\dfrac{4}{3}(12) = 16$ months. Check: $V\\left(\\dfrac{4}{3}\\right) = 24{,}000(1.08)^1 = 25{,}920$, an $8\\%$ increase. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($9$): multiplies $12$ by $\\dfrac{3}{4}$ instead of dividing, reversing the conversion.\n* Choice B ($12$): ignores the coefficient in the exponent and assumes the $8\\%$ applies once per year.\n* Choice D ($48$): uses the numerator $4$ as a number of years and converts that to months.\n\n**Test Day Takeaway:** Set the whole exponent equal to $1$ and solve for $t$ — that time span is the period of one percent change, then convert units last.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "interpret-exponential-parameters",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-am-418",
    domain: "advanced-math",
    skills: ["vertex-form", "converting-quadratic-forms"],
    difficulty: "hard",
    type: "fill-in",
    question: "In the $xy$-plane, the graph of $y = 4x^2 + bx + c$ has its vertex at $(-3, -14)$, where $b$ and $c$ are constants. What is the value of $b + c$?",
    correctAnswer: "46",
    explanation: "**SAT Pattern: Vertex Form to Standard Form — Recover Coefficients**\n\n**The correct answer is $46$.**\n\n**The Fast Way (~45s):** $y = 4(x + 3)^2 - 14 = 4x^2 + 24x + 22$, so $b + c = 24 + 22 = 46$.\n\n**The Full Solution:**\nStep 1: With leading coefficient $4$ and vertex $(-3, -14)$, vertex form gives $y = 4(x + 3)^2 - 14$.\nStep 2: Expand: $4(x^2 + 6x + 9) = 4x^2 + 24x + 36$, so $y = 4x^2 + 24x + 36 - 14 = 4x^2 + 24x + 22$.\nStep 3: Matching coefficients, $b = 24$ and $c = 22$, so $b + c = 46$. Check with the axis formula: $-\\dfrac{b}{2a} = -\\dfrac{24}{8} = -3$, and $y$ at $x = -3$ is $36 - 72 + 22 = -14$. $\\checkmark$\n\n**Common Mistakes:**\n* Forgetting to multiply the $9$ by the leading coefficient: using $c = 9 - 14 = -5$ gives $b + c = 19$.\n* Getting the sign of $b$ backward: taking $b = -24$ from the vertex $x$-coordinate $-3$ gives $b + c = -2$.\n* Computing the product $bc = 528$ instead of the sum.\n\n**Test Day Takeaway:** Write vertex form with the SAME leading coefficient, expand fully, and distribute that coefficient to every term inside the square.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertex-form-to-standard-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-am-419",
    domain: "advanced-math",
    skills: ["exponential-growth-decay", "exponential-y-intercept"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "When a video was first posted, it had $125$ saves. An exponential model estimates that at the end of each hour after it was posted, the number of saves was $120\\%$ more than the number at the end of the previous hour. Which equation gives the estimated number of saves, $S$, $h$ hours after the video was posted?",
    choices: [
      // distractor: uses only the decimal part of the percent
      { id: "A", text: "$S = 125(0.2)^h$" },
      // distractor: reads "120% more" as a factor of 1.2
      { id: "B", text: "$S = 125(1.2)^h$" },
      { id: "C", text: "$S = 125(2.2)^h$" },
      // distractor: adds the first hour's increase forever
      { id: "D", text: "$S = 125 + 150h$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Build Exponential Growth — \"$p\\%$ More\" Trap**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** \"$120\\%$ more\" makes each hour $220\\%$ of the hour before, a factor of $2.2$, so $S = 125(2.2)^h$.\n\n**The Full Solution:**\nStep 1: The starting count is $125$ at $h = 0$, so the model has the form $S = 125(b)^h$.\nStep 2: Being $120\\%$ MORE than the previous hour means the new count is $100\\% + 120\\% = 220\\%$ of the old one, so $b = 2.2$.\nStep 3: $S = 125(2.2)^h$. Check: after one hour, $125(2.2) = 275$, and $275 - 125 = 150$, which is $120\\%$ of $125$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: uses $0.2$, the decimal left after discarding the $100\\%$, which would shrink the count each hour.\n* Choice B: reads \"$120\\%$ more\" as a factor of $1.2$; that factor describes a $20\\%$ increase, not a $120\\%$ one.\n* Choice D: adds the first hour's increase of $150$ every hour, which is linear rather than exponential.\n\n**Test Day Takeaway:** \"$p\\%$ MORE than\" always gives the factor $1 + \\dfrac{p}{100}$ — when $p$ exceeds $100$, that factor is greater than $2$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "build-exponential-model",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-am-420",
    domain: "advanced-math",
    skills: ["exponent-laws", "exponential-growth-decay"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The function $f$ is defined by $f(x) = (1.44)^{x/4}$. The equation can be rewritten as $f(x) = \\left(1 + \\dfrac{r}{100}\\right)^x$, where $r$ is a constant. Which of the following is closest to the value of $r$?",
    choices: [
      { id: "A", text: "$9.5$" },
      // distractor: divides the percent 44 by 4
      { id: "B", text: "$11$" },
      // distractor: divides 144 by 4
      { id: "C", text: "$36$" },
      // distractor: ignores the divisor in the exponent
      { id: "D", text: "$44$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Rewriting Exponential Form — Equivalent Rate**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** $(1.44)^{x/4} = \\left((1.44)^{1/4}\\right)^x$ and $(1.44)^{1/4} \\approx 1.0954$, so $r \\approx 9.5$.\n\n**The Full Solution:**\nStep 1: Rewrite the exponent using $\\left(b^{1/n}\\right)^x = b^{x/n}$: $(1.44)^{x/4} = \\left((1.44)^{1/4}\\right)^x$.\nStep 2: Matching this to $\\left(1 + \\dfrac{r}{100}\\right)^x$ requires $1 + \\dfrac{r}{100} = (1.44)^{1/4}$.\nStep 3: $(1.44)^{1/2} = 1.2$ and $(1.2)^{1/2} \\approx 1.0954$, so $\\dfrac{r}{100} \\approx 0.0954$ and $r \\approx 9.54$, closest to $9.5$. Check: $(1.0954)^4 \\approx 1.44$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($11$): divides the percent increase $44$ by the $4$ in the exponent, which treats compounding as if it were linear.\n* Choice C ($36$): divides $144$ by $4$ rather than working with the growth factor $1.44$.\n* Choice D ($44$): reads the percent increase per $4$ units of $x$ as though it applied to each unit.\n\n**Test Day Takeaway:** To change the period of an exponential, take the ROOT of the growth factor — dividing the percent is only an approximation and is never the intended answer.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "interpret-exponential-parameters",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-am-421",
    domain: "advanced-math",
    skills: ["discriminant-analysis", "identify-quadratic"],
    difficulty: "hard",
    type: "fill-in",
    question: "$$3x^2 - 8x - 5 = 0$$\n\nOne solution to the given equation can be written as $\\dfrac{4 + \\sqrt{k}}{3}$, where $k$ is a positive constant. What is the value of $k$?",
    correctAnswer: "31",
    explanation: "**SAT Pattern: Quadratic Formula — Discriminant Recovery**\n\n**The correct answer is $31$.**\n\n**The Fast Way (~35s):** Substitute $x = \\dfrac{4 + \\sqrt{k}}{3}$ into the equation and clear the denominator: $(4 + \\sqrt{k})^2 - 8(4 + \\sqrt{k}) - 15 = 0$. The $\\sqrt{k}$ terms cancel, leaving $k - 31 = 0$.\n\n**The Full Solution:**\nStep 1: With $a = 3$, $b = -8$, and $c = -5$, the quadratic formula gives $x = \\dfrac{8 \\pm \\sqrt{(-8)^2 - 4(3)(-5)}}{2(3)} = \\dfrac{8 \\pm \\sqrt{64 + 60}}{6} = \\dfrac{8 \\pm \\sqrt{124}}{6}$.\nStep 2: The given form has denominator $3$, not $6$, so divide the numerator and the denominator by $2$. Since $\\dfrac{\\sqrt{124}}{2} = \\sqrt{\\dfrac{124}{4}} = \\sqrt{31}$, the two solutions are $\\dfrac{4 \\pm \\sqrt{31}}{3}$.\nStep 3: Matching $\\dfrac{4 + \\sqrt{k}}{3}$ to $\\dfrac{4 + \\sqrt{31}}{3}$ gives $k = 31$. Check: $3\\left(\\dfrac{4 + \\sqrt{31}}{3}\\right)^2 - 8\\left(\\dfrac{4 + \\sqrt{31}}{3}\\right) - 5 = \\dfrac{(47 + 8\\sqrt{31}) - (32 + 8\\sqrt{31}) - 15}{3} = 0$. $\\checkmark$\n\n**Common Mistakes:** Stopping at the discriminant and entering $124$; that value of $k$ belongs to the unreduced form $\\dfrac{8 + \\sqrt{k}}{6}$, not to the form with denominator $3$. Losing a sign inside the radical and computing $64 - 60 = 4$, which would make the solutions $\\dfrac{8 \\pm 2}{6}$ and give $k = 4$. Halving the radicand instead of dividing the radical by $2$, which turns $\\sqrt{124}$ into $\\sqrt{62}$ and gives $k = 62$.\n\n**Test Day Takeaway:** When a solution is handed to you in a specific fraction form, reduce your quadratic-formula output to that exact denominator before reading off the constant, or substitute the given form back in and let the radical terms cancel.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "discriminant-compute",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-am-422",
    domain: "advanced-math",
    skills: ["simplifying-rational-expressions"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "$$\\dfrac{x^2 - 9n^2}{\\sqrt{x - 3n}} = 8n\\sqrt{x - 3n}$$\n\nIn the given equation, $n$ is a positive constant. Which of the following is the solution to the given equation?",
    choices: [
      // distractor: extra root produced by squaring both sides; it makes the radicand negative
      { id: "A", text: "$-11n$" },
      // distractor: root of the cleared equation that makes the radical in the denominator zero
      { id: "B", text: "$3n$" },
      { id: "C", text: "$5n$" },
      // distractor: divides by the wrong factor, solving $x - 3n = 8n$ instead of $x + 3n = 8n$
      { id: "D", text: "$11n$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Radical Equation — Extraneous Filter**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** Multiplying both sides by $\\sqrt{x - 3n}$ gives $(x - 3n)(x + 3n) = 8n(x - 3n)$. The radical forces $x - 3n \\ne 0$, so dividing by $x - 3n$ leaves $x + 3n = 8n$, or $x = 5n$.\n\n**The Full Solution:**\nStep 1: Fix the domain first. The expression $\\sqrt{x - 3n}$ sits in a denominator, so $x - 3n$ must be positive; any candidate with $x \\le 3n$ is disqualified before any algebra.\nStep 2: Multiply both sides by $\\sqrt{x - 3n}$: $x^2 - 9n^2 = 8n(x - 3n)$. Factor the left side as a difference of squares to expose the shared factor: $(x - 3n)(x + 3n) = 8n(x - 3n)$.\nStep 3: Because $x - 3n \\ne 0$, divide both sides by it: $x + 3n = 8n$, so $x = 5n$. Check: $x - 3n = 2n > 0$, the left side is $\\dfrac{25n^2 - 9n^2}{\\sqrt{2n}} = \\dfrac{16n^2}{\\sqrt{2n}}$, and the right side is $8n\\sqrt{2n} = \\dfrac{8n(2n)}{\\sqrt{2n}} = \\dfrac{16n^2}{\\sqrt{2n}}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-11n$): squaring both sides instead of clearing the radical gives $(x - 3n)^2(x + 3n)^2 = 64n^2(x - 3n)^2$, whose roots are $-11n$, $3n$, and $5n$. At $x = -11n$ the radicand is $-14n$, which is negative, so the original expression is undefined.\n* Choice B ($3n$): this is a root of the cleared equation $x^2 - 9n^2 = 8n(x - 3n)$, but it makes $\\sqrt{x - 3n} = 0$ in the denominator. Dividing by the factor $x - 3n$ is legal precisely because that value is already excluded.\n* Choice D ($11n$): cancels the difference of squares carelessly and solves $x - 3n = 8n$. Substituting $x = 11n$ gives $\\dfrac{112n^2}{\\sqrt{8n}}$ on the left but $8n\\sqrt{8n} = \\dfrac{64n^2}{\\sqrt{8n}}$ on the right.\n\n**Test Day Takeaway:** State the domain of a radical before you solve, then clear the radical by multiplying rather than squaring; a shared factor you are allowed to cancel is usually the value the domain has already ruled out.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "rational-equation-with-extraneous-solution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-am-423",
    domain: "advanced-math",
    skills: ["finding-roots-factoring", "roots-from-factors"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the expressions below, $k$ is a positive integer constant. Which expression has $x - 4k$ as a factor for every such value of $k$?",
    choices: [
      { id: "A", text: "$2x^2 - 3kx - 20k^2$" },
      // distractor: flips the sign of the constant term; substituting $x = 4k$ leaves $40k^2$
      { id: "B", text: "$2x^2 - 3kx + 20k^2$" },
      // distractor: factors as $(x + 4k)(2x - 5k)$, so the linear factor is $x + 4k$
      { id: "C", text: "$2x^2 + 3kx - 20k^2$" },
      // distractor: factors as $(x + 4k)(2x + 5k)$, so $-4k$ is the root, not $4k$
      { id: "D", text: "$2x^2 + 13kx + 20k^2$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Factor with Parameter — Integer Constraint**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** By the factor theorem, $x - 4k$ divides an expression exactly when substituting $x = 4k$ returns $0$. Only choice A does: $2(4k)^2 - 3k(4k) - 20k^2 = 32k^2 - 12k^2 - 20k^2 = 0$.\n\n**The Full Solution:**\nStep 1: $x - 4k$ is a factor of a polynomial in $x$ if and only if $x = 4k$ is a zero of that polynomial, so evaluate each choice at $x = 4k$ and keep the one that returns $0$.\nStep 2: Choice A gives $32k^2 - 12k^2 - 20k^2 = 0$. Choice B gives $32k^2 - 12k^2 + 20k^2 = 40k^2$. Choice C gives $32k^2 + 12k^2 - 20k^2 = 24k^2$. Choice D gives $32k^2 + 52k^2 + 20k^2 = 104k^2$. Because $k$ is a positive integer, $40k^2$, $24k^2$, and $104k^2$ are all nonzero.\nStep 3: Confirm by factoring choice A directly: $2x^2 - 3kx - 20k^2 = (x - 4k)(2x + 5k)$. Expanding, $(x - 4k)(2x + 5k) = 2x^2 + 5kx - 8kx - 20k^2 = 2x^2 - 3kx - 20k^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($2x^2 - 3kx + 20k^2$): the middle term is copied from the correct answer, but with $+20k^2$ the discriminant is $9k^2 - 160k^2 = -151k^2$, so this expression has no real zeros and therefore no linear factor at all.\n* Choice C ($2x^2 + 3kx - 20k^2$): this factors as $(x + 4k)(2x - 5k)$. The number $4k$ appears, but as the root $x = -4k$; substituting $x = 4k$ leaves $24k^2$.\n* Choice D ($2x^2 + 13kx + 20k^2$): this factors as $(x + 4k)(2x + 5k)$, so both of its zeros, $-4k$ and $-\\dfrac{5k}{2}$, are negative when $k$ is positive.\n\n**Test Day Takeaway:** A parameter changes nothing about the factor theorem. Substitute the candidate root, in this case $x = 4k$, and let the $k^2$ coefficients decide; only the expression that evaluates to exactly $0$ carries the factor.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "polynomial-remainder-theorem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-am-424",
    domain: "advanced-math",
    skills: ["vertex-form", "finding-function-from-conditions"],
    difficulty: "hard",
    type: "fill-in",
    question: "The graph shown models the height above the deck, in inches, of the water stream from a fountain nozzle at a horizontal distance of $x$ inches from the nozzle. The stream reaches its greatest height, $45$ inches, at $x = 20$, and it meets the deck at $x = 50$. What height above the deck, in inches, does the model give at $x = 8$?",
    diagram: { type: "parabola", params: { vertex: { h: 20, k: 45 }, a: -0.05, xRange: [0, 50], yRange: [0, 50], xTickInterval: 10, yTickInterval: 10, gridInterval: 5, showVertex: true } },
    correctAnswer: "37.8",
    explanation: "**SAT Pattern: Quadratic Model from Vertex + Zero**\n\n**The correct answer is $37.8$.**\n\n**The Fast Way (~30s):** Vertex form gives $h(x) = a(x - 20)^2 + 45$; the deck crossing $h(50) = 0$ forces $a = -0.05$, so $h(8) = -0.05(144) + 45 = 37.8$.\n\n**The Full Solution:**\nStep 1: The greatest height occurs at $x = 20$, so the vertex is $(20, 45)$ and $h(x) = a(x - 20)^2 + 45$ for some constant $a$.\nStep 2: The stream meets the deck at $x = 50$, so $h(50) = 0$: $a(50 - 20)^2 + 45 = 0$, which gives $900a = -45$ and $a = -0.05$.\nStep 3: Evaluate at $x = 8$: $h(8) = -0.05(8 - 20)^2 + 45 = -0.05(144) + 45 = -7.2 + 45 = 37.8$ inches. Check with symmetry: $x = 8$ is $12$ units left of the vertex and $x = 32$ is $12$ units right of it, and $h(32) = -0.05(144) + 45 = 37.8$ as well. $\\checkmark$\n\n**Common Mistakes:** Dividing by the horizontal distance instead of its square, $a = -\\dfrac{45}{30} = -1.5$, which gives $h(8) = -1.5(144) + 45 = -171$, a height below the deck. Multiplying $a$ by $12$ rather than by $12^2$, which gives $-0.05(12) + 45 = 44.4$. Answering $45$, the greatest height, instead of the height at $x = 8$.\n\n**Test Day Takeaway:** Vertex plus one more point pins a quadratic model completely. Write $a(x - h)^2 + k$ first, solve for $a$ with the extra point, and square the horizontal difference before multiplying.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "vertex-form-from-two-conditions",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-am-425",
    domain: "advanced-math",
    skills: ["roots-from-factors", "vertex-formula"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The function $f$ is defined by $f(x) = (x - c)(x - 4c)$, where $c$ is a nonzero constant. Which of the following statements about the graph of $y = f(x)$ in the $xy$-plane must be true?\n\nI. The graph has exactly two $x$-intercepts.\nII. The vertex of the graph lies to the right of the $y$-axis.",
    choices: [
      { id: "A", text: "I only" },
      // distractor: worries the two zeros could coincide while assuming $c$ is positive
      { id: "B", text: "II only" },
      // distractor: reads nonzero as positive, so the vertex at $x = \dfrac{5c}{2}$ looks automatically positive
      { id: "C", text: "I and II" },
      // distractor: rejects statement I on the grounds that $c$ and $4c$ might be equal
      { id: "D", text: "Neither I nor II" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Quadratic Must-Be-True Statements**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** The zeros $c$ and $4c$ are different for every nonzero $c$, so I always holds; the vertex sits at $x = \\dfrac{5c}{2}$, which is negative whenever $c$ is negative, so II can fail.\n\n**The Full Solution:**\nStep 1: Statement I. The factored form makes $f(x) = 0$ exactly when $x = c$ or $x = 4c$. These coincide only if $c = 4c$, that is, only if $c = 0$, and $c = 0$ is excluded. So the graph meets the $x$-axis at exactly two points, and I must be true.\nStep 2: Statement II. A parabola is symmetric about the midpoint of its zeros, so the vertex has $x$-coordinate $\\dfrac{c + 4c}{2} = \\dfrac{5c}{2}$. That is positive when $c > 0$ but negative when $c < 0$, and nonzero permits both. A statement that fails for even one permitted value of $c$ is not a must.\nStep 3: Only statement I must be true, so the answer is I only. Check with $c = -2$: $f(x) = (x + 2)(x + 8) = x^2 + 10x + 16$, whose zeros $-8$ and $-2$ are distinct, and whose vertex $(-5, -9)$ lies to the left of the $y$-axis. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: this keeps the vertex claim, which depends on the sign of $c$, and discards the intercept claim, which does not. The two zeros $c$ and $4c$ differ by $3c$, and $3c \\ne 0$ for every value $c$ is allowed to take.\n* Choice C: correct on statement I, but it silently upgrades nonzero to positive. Testing a single negative value, such as $c = -2$, puts the vertex at $x = -5$.\n* Choice D: rejects statement I as well, presumably on the worry that $c$ and $4c$ could be equal; that happens only at $c = 0$, the one value the problem rules out.\n\n**Test Day Takeaway:** On must-be-true items, read the constraint on the constant exactly as written. Nonzero is not positive, so test one negative value before you accept any claim about position in the plane.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "roman-numeral-must-be-true",
    sourceRef: "pilot-m3-roman-quadratic",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-08-13"
  }
];
