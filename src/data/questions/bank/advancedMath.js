export const advancedMathBank = [
  // ── identify-quadratic (4 questions) ──────────────────────────────
  {
    id: "bank-am-001",
    domain: "advanced-math",
    skills: ["identify-quadratic"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "$x(3x - 4) = 7$\nWhich equation is equivalent to the given equation?",
    choices: [
      // distractor: multiplies x by +4 instead of -4
      { id: "A", text: "$3x^{2} + 4x - 7 = 0$" },
      { id: "B", text: "$3x^{2} - 4x - 7 = 0$" },
      // distractor: moves 7 to the left side without changing its sign
      { id: "C", text: "$3x^{2} - 4x + 7 = 0$" },
      // distractor: multiplies only 3x by x, giving 3x^2 - 4 = 7
      { id: "D", text: "$3x^{2} - 11 = 0$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Identify Quadratic Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Distribute $x$ to get $3x^{2} - 4x = 7$, then subtract $7$ from each side: $3x^{2} - 4x - 7 = 0$.\n\n**The Full Solution:**\nStep 1: Distribute $x$ over both terms in the parentheses: $x(3x) - x(4) = 3x^{2} - 4x$.\nStep 2: The equation becomes $3x^{2} - 4x = 7$.\nStep 3: Subtract $7$ from each side: $3x^{2} - 4x - 7 = 0$. Check with $x = -1$: the given equation gives $(-1)(-3 - 4) = 7$, and $3(1) + 4 - 7 = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3x^{2} + 4x - 7 = 0$): multiplies $x$ by $+4$ instead of $-4$.\n* Choice C ($3x^{2} - 4x + 7 = 0$): moves $7$ to the left side without changing its sign.\n* Choice D ($3x^{2} - 11 = 0$): multiplies only $3x$ by $x$, which gives $3x^{2} - 4 = 7$.\n\n**Test Day Takeaway:** To write a quadratic equation as $ax^{2} + bx + c = 0$, distribute to every term in the parentheses, then move every term to one side, changing its sign as it crosses.",
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
    question: "A theater's revenue $R(p)$, in dollars, from ticket sales depends on the price $p$, in dollars, of each ticket. The table shows three values of $p$ and their corresponding values of $R(p)$. Which equation could define $R$?",
    diagram: { type: "dataTable", params: { headers: ["Ticket price p (dollars)", "Revenue R(p) (dollars)"], rows: [["10", "7,500"], ["20", "12,000"], ["30", "13,500"]] } },
    choices: [
      // distractor: checks only the first row: it gives 7,500 at p = 10 but 9,000 at p = 20
      { id: "A", text: "$R(p) = -15p^{2} + 600p + 3{,}000$" },
      { id: "B", text: "$R(p) = -15p^{2} + 900p$" },
      // distractor: checks only the first two rows: it gives 14,500, not 13,500, at p = 30
      { id: "C", text: "$R(p) = -10p^{2} + 750p + 1{,}000$" },
      // distractor: checks only the first row: it gives 18,000, not 12,000, at p = 20
      { id: "D", text: "$R(p) = 15p^{2} + 600p$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Classify Model by Expanding**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Every choice gives $7{,}500$ at $p = 10$, so test the other rows. Only $R(p) = -15p^{2} + 900p = p(900 - 15p)$ gives $12{,}000$ at $p = 20$ and $13{,}500$ at $p = 30$.\n\n**The Full Solution:**\nStep 1: Substitute $p = 10$ into each choice. All four give $7{,}500$, so this row does not decide the answer.\nStep 2: Substitute $p = 20$. Choice A gives $-6{,}000 + 12{,}000 + 3{,}000 = 9{,}000$ and choice D gives $6{,}000 + 12{,}000 = 18{,}000$, so both are out. Choices B and C give $12{,}000$.\nStep 3: Substitute $p = 30$. Choice B gives $-15(900) + 900(30) = -13{,}500 + 27{,}000 = 13{,}500$, and choice C gives $-9{,}000 + 22{,}500 + 1{,}000 = 14{,}500$. Check choice B against all three rows: $7{,}500$, $12{,}000$, and $13{,}500$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: matches only the first row; it gives $9{,}000$ at $p = 20$.\n* Choice C: matches the first two rows, but it gives $14{,}500$ at $p = 30$.\n* Choice D: matches only the first row; it gives $18{,}000$ at $p = 20$.\n\n**Test Day Takeaway:** An equation could define a function from a table only if it matches EVERY row. Several equations can share one point, so keep testing until one choice is left.",
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
    question: "$m^{2} - 9$\nFor $m > 0$, the given expression is equivalent to which of the following?\nI. $(m - 3)^{2} + 6m$\nII. $\\dfrac{m^{4} - 9m^{2}}{m^{2}}$",
    choices: [
      // distractor: expands (m - 3)^2 as m^2 - 6m - 9, which makes I look like m^2 - 9, and does not factor m^2 out of II
      { id: "A", text: "I only" },
      { id: "B", text: "II only" },
      // distractor: expands (m - 3)^2 as m^2 - 6m - 9, a sign error on the 9, so I looks equivalent
      { id: "C", text: "I and II" },
      // distractor: correctly rejects I but does not factor m^2 out of the numerator of II
      { id: "D", text: "Neither I nor II" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Classify After Simplification**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Expression I is $m^{2} - 6m + 9 + 6m = m^{2} + 9$, not $m^{2} - 9$. Expression II is $\\dfrac{m^{2}(m^{2} - 9)}{m^{2}} = m^{2} - 9$.\n\n**The Full Solution:**\nStep 1: Expand expression I: $(m - 3)^{2} + 6m = m^{2} - 6m + 9 + 6m = m^{2} + 9$. Its constant term is $+9$, so I is not equivalent to $m^{2} - 9$.\nStep 2: Factor the numerator of expression II: $m^{4} - 9m^{2} = m^{2}(m^{2} - 9)$.\nStep 3: Since $m > 0$, $m^{2} \\neq 0$, and the common factor cancels: II is $m^{2} - 9$. Check with $m = 2$: $m^{2} - 9 = -5$; I gives $1 + 12 = 13$; II gives $\\dfrac{16 - 36}{4} = -5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A (I only): expands $(m - 3)^{2}$ with a constant of $-9$ and does not factor $m^{2}$ out of II.\n* Choice C (I and II): expands $(m - 3)^{2}$ as $m^{2} - 6m - 9$, a sign error on the $9$.\n* Choice D (Neither I nor II): rejects I correctly but does not factor $m^{2}$ out of the numerator of II.\n\n**Test Day Takeaway:** Simplify each expression completely before comparing it with the target, and test a value such as $m = 2$ to confirm.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "classify-after-simplify",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-004",
    domain: "advanced-math",
    skills: ["converting-quadratic-forms"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The function $h(x) = -0.5x^{2} + 4x$ models the height, in feet, of a stream of water from a fountain when the water is $x$ feet horizontally from the nozzle. The graph of $y = h(x)$ is shown. What is the best interpretation of the vertex of the graph in this context?",
    diagram: { type: "parabola", params: { vertex: { h: 4, k: 8 }, a: -0.5, xRange: [0, 10], yRange: [0, 10], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showVertex: false } },
    choices: [
      // distractor: swaps the coordinates of the vertex (4, 8)
      { id: "A", text: "The water reaches its greatest height, $4$ feet, when it is $8$ feet horizontally from the nozzle." },
      { id: "B", text: "The water reaches its greatest height, $8$ feet, when it is $4$ feet horizontally from the nozzle." },
      // distractor: describes the x-intercept (8, 0) instead of the vertex
      { id: "C", text: "The water reaches the ground when it is $8$ feet horizontally from the nozzle." },
      // distractor: reads the coefficient 4 as a starting height; h(0) = 0
      { id: "D", text: "The water leaves the nozzle at a height of $4$ feet." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The vertex is the highest point of the graph, $(4, 8)$: at $x = 4$ feet from the nozzle, the water is at its greatest height, $8$ feet.\n\n**The Full Solution:**\nStep 1: The vertex is at $x = -\\dfrac{b}{2a} = -\\dfrac{4}{2(-0.5)} = 4$.\nStep 2: The height there is $h(4) = -0.5(16) + 4(4) = -8 + 16 = 8$, so the vertex is $(4, 8)$. Because $-0.5 < 0$, the parabola opens downward and the vertex is the highest point.\nStep 3: In context, $x = 4$ is a horizontal distance and $y = 8$ is a height, so the water reaches its greatest height, $8$ feet, $4$ feet horizontally from the nozzle. Check with symmetric points: $h(0) = 0$ and $h(8) = -32 + 32 = 0$, and $4$ is halfway between $0$ and $8$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: swaps the two coordinates of the vertex $(4, 8)$.\n* Choice C: describes the $x$-intercept $(8, 0)$, not the vertex.\n* Choice D: reads the coefficient $4$ as a starting height, but $h(0) = 0$.\n\n**Test Day Takeaway:** The vertex of a quadratic model carries two numbers with two different jobs: the input says WHERE the greatest or least value happens, and the output says WHAT that value is.",
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
    question: "$y = -\\dfrac{1}{3}x^{2} + 5x - 8$\nThe graph of the given equation in the $xy$-plane is a parabola. Which of the following correctly describes the parabola?",
    choices: [
      // distractor: judges the direction by the positive coefficient of x instead of the coefficient of x^2
      { id: "A", text: "It opens upward, and its $y$-intercept is $(0, -8)$." },
      // distractor: judges the direction by the coefficient of x and uses that coefficient, 5, as the y-intercept
      { id: "B", text: "It opens upward, and its $y$-intercept is $(0, 5)$." },
      { id: "C", text: "It opens downward, and its $y$-intercept is $(0, -8)$." },
      // distractor: uses the coefficient of x, 5, as the y-intercept instead of the constant term
      { id: "D", text: "It opens downward, and its $y$-intercept is $(0, 5)$." }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Parabola Direction**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The coefficient of $x^{2}$, $-\\dfrac{1}{3}$, is negative, so the parabola opens downward. Setting $x = 0$ gives $y = -8$.\n\n**The Full Solution:**\nStep 1: A parabola $y = ax^{2} + bx + c$ opens downward when $a < 0$. Here $a = -\\dfrac{1}{3}$, so it opens downward.\nStep 2: The $y$-intercept is where $x = 0$: $y = -\\dfrac{1}{3}(0) + 5(0) - 8 = -8$.\nStep 3: So the parabola opens downward and its $y$-intercept is $(0, -8)$. Check with $x = 3$: $y = -3 + 15 - 8 = 4$, and the parabola rises from $(0, -8)$ to $(3, 4)$ before it turns down at its vertex, $x = 7.5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: judges the direction by the positive coefficient of $x$ instead of the coefficient of $x^{2}$.\n* Choice B: judges the direction by the coefficient of $x$ and also uses that $5$ as the $y$-intercept.\n* Choice D: uses the coefficient of $x$, $5$, as the $y$-intercept instead of the constant term, $-8$.\n\n**Test Day Takeaway:** In $y = ax^{2} + bx + c$, the sign of $a$ alone sets the direction, and $c$ alone is the $y$-coordinate of the $y$-intercept.",
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
    question: "A car's fuel efficiency $E$, in miles per gallon, when it travels at a speed of $v$ miles per hour is modeled by $E(v) = -0.02v^{2} + 2v + 6$. The graph of $y = E(v)$ is shown. Which of the following is true about $E$?",
    diagram: { type: "parabola", params: { vertex: { h: 50, k: 56 }, a: -0.02, xRange: [0, 80], yRange: [0, 60], xTickInterval: 20, yTickInterval: 10, gridInterval: 10, showVertex: false } },
    choices: [
      { id: "A", text: "$E$ has a maximum value of $56$." },
      // distractor: reports the speed at the vertex, v = 50, instead of the value of E there
      { id: "B", text: "$E$ has a maximum value of $50$." },
      // distractor: takes the y-intercept E(0) = 6 as a minimum of a downward-opening parabola
      { id: "C", text: "$E$ has a minimum value of $6$." },
      // distractor: finds the vertex value but calls it a minimum, ignoring the negative leading coefficient
      { id: "D", text: "$E$ has a minimum value of $56$." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Max vs Min Reasoning**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** The coefficient of $v^{2}$ is negative, so the parabola opens downward and $E$ has a maximum. At $v = -\\dfrac{2}{2(-0.02)} = 50$, $E(50) = -50 + 100 + 6 = 56$.\n\n**The Full Solution:**\nStep 1: The leading coefficient is $-0.02 < 0$, so the graph opens downward and its vertex is the highest point: $E$ has a maximum, not a minimum.\nStep 2: The vertex is at $v = -\\dfrac{b}{2a} = -\\dfrac{2}{2(-0.02)} = 50$.\nStep 3: The maximum value is $E(50) = -0.02(2{,}500) + 2(50) + 6 = -50 + 100 + 6 = 56$. Check: $E(40) = -32 + 80 + 6 = 54$ and $E(60) = -72 + 120 + 6 = 54$, both less than $56$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($50$): $50$ is the speed at which the maximum occurs, not the maximum fuel efficiency.\n* Choice C ($6$): $E(0) = 6$ is the $y$-intercept; a downward-opening parabola has no minimum value.\n* Choice D: $56$ is the vertex value, but the negative leading coefficient makes it a maximum.\n\n**Test Day Takeaway:** Read the sign of the squared term first to decide maximum or minimum, then evaluate the function at $-\\dfrac{b}{2a}$ to get the value.",
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
    question: "$y = (7 - k)x^{2} + 6x - 2$\nIn the given equation, $k$ is a constant. The graph of the equation in the $xy$-plane is a parabola that opens downward. Which of the following must be true?",
    choices: [
      // distractor: sets k + 7 < 0, misreading the coefficient 7 - k as 7 + k
      { id: "A", text: "$k < -7$" },
      // distractor: solves 7 - k > 0, the condition for opening upward
      { id: "B", text: "$k < 7$" },
      { id: "C", text: "$k > 7$" },
      // distractor: keeps only the condition that the equation is quadratic, without the sign
      { id: "D", text: "$k \\neq 7$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Parameter Constraint on Leading Coefficient**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** A parabola opens downward when its $x^{2}$ coefficient is negative, so $7 - k < 0$, which gives $k > 7$.\n\n**The Full Solution:**\nStep 1: The coefficient of $x^{2}$ is $7 - k$.\nStep 2: The parabola opens downward exactly when this coefficient is negative: $7 - k < 0$.\nStep 3: Adding $k$ to both sides gives $7 < k$, or $k > 7$. Check with $k = 8$: the equation becomes $y = -x^{2} + 6x - 2$, which opens downward; with $k = 6$ it becomes $y = x^{2} + 6x - 2$, which opens upward ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($k < -7$): treats the coefficient as $7 + k$ and solves $7 + k < 0$.\n* Choice B ($k < 7$): solves $7 - k > 0$, which is the condition for opening upward.\n* Choice D ($k \\neq 7$): only guarantees that the graph is a parabola; it allows upward-opening parabolas such as $k = 0$.\n\n**Test Day Takeaway:** Translate the direction into an inequality on the leading coefficient (negative for down, positive for up), then solve for the constant.",
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
    question: "The function $C$ is defined by $C(x) = 0.5(x - 6)^{2} + 4$, where $C(x)$ is the cost per unit, in dollars, when a company makes $x$ thousand units of a product. The graph of $y = C(x)$ is shown. Which of the following must be true?",
    diagram: { type: "parabola", params: { vertex: { h: 6, k: 4 }, a: 0.5, xRange: [0, 12], yRange: [0, 24], xTickInterval: 2, yTickInterval: 4, gridInterval: 2, showVertex: false } },
    choices: [
      // distractor: swaps the coordinates of the vertex (6, 4)
      { id: "A", text: "The least cost per unit is $\\$6$, and it occurs when $x = 4$." },
      { id: "B", text: "The cost per unit is the same when $x = 2$ as it is when $x = 10$." },
      // distractor: treats the k-value 4 as the y-intercept; C(0) = 0.5(36) + 4 = 22
      { id: "C", text: "The cost per unit is $\\$4$ when $x = 0$." },
      // distractor: ignores that the cost rises again after x = 6
      { id: "D", text: "The cost per unit decreases as $x$ increases, for every $x > 0$." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Interpret Vertex Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The vertex is $(6, 4)$, so the graph is symmetric about $x = 6$. The inputs $2$ and $10$ are each $4$ away from $6$, so they give the same cost.\n\n**The Full Solution:**\nStep 1: $C(x) = 0.5(x - 6)^{2} + 4$ is in vertex form $a(x - h)^{2} + k$ with $h = 6$ and $k = 4$, so the vertex is $(6, 4)$ and the graph is symmetric about the line $x = 6$.\nStep 2: Since $2 = 6 - 4$ and $10 = 6 + 4$, the two inputs are the same distance from the axis of symmetry.\nStep 3: Compute both: $C(2) = 0.5(-4)^{2} + 4 = 8 + 4 = 12$ and $C(10) = 0.5(4)^{2} + 4 = 12$. The costs are equal, $\\$12$ per unit ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: swaps the coordinates of the vertex. The least cost is $\\$4$, and it occurs when $x = 6$.\n* Choice C: $4$ is the $k$-value of the vertex, not the $y$-intercept; $C(0) = 0.5(36) + 4 = 22$.\n* Choice D: the cost decreases only until $x = 6$ and increases after that, because $a = 0.5 > 0$.\n\n**Test Day Takeaway:** In vertex form, $(h, k)$ is the turning point and $x = h$ is a mirror line: inputs equally far from $h$ always give equal outputs.",
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
    question: "$x^{2} - 14x + 40 = 0$\nWhat are the solutions to the given equation?",
    choices: [
      // distractor: reads the solutions straight from the factors (x - 4)(x - 10) without changing the signs
      { id: "A", text: "$-10$ and $-4$" },
      // distractor: picks a factor pair of 40 whose sum is 22, not 14
      { id: "B", text: "$2$ and $20$" },
      { id: "C", text: "$4$ and $10$" },
      // distractor: picks a factor pair of 40 whose sum is 13, not 14
      { id: "D", text: "$5$ and $8$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Factor and Solve**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Find two numbers with product $40$ and sum $-14$: $-4$ and $-10$. So $(x - 4)(x - 10) = 0$, and $x = 4$ or $x = 10$.\n\n**The Full Solution:**\nStep 1: Look for two numbers whose product is $40$ and whose sum is $-14$. They are $-4$ and $-10$.\nStep 2: The equation factors as $(x - 4)(x - 10) = 0$.\nStep 3: By the zero-product property, $x - 4 = 0$ or $x - 10 = 0$, so $x = 4$ or $x = 10$. Check: $16 - 56 + 40 = 0$ and $100 - 140 + 40 = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: reads $-4$ and $-10$ from the factoring step as the solutions; setting each factor equal to $0$ flips the signs.\n* Choice B: $2 \\cdot 20 = 40$, but $2 + 20 = 22$, not $14$.\n* Choice D: $5 \\cdot 8 = 40$, but $5 + 8 = 13$, not $14$.\n\n**Test Day Takeaway:** Both conditions must hold: the pair multiplies to $c$ AND adds to $b$. Then set each factor equal to zero.",
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
    question: "$x^{2} + 4x - 45 = 0$\nWhat is the positive solution to the given equation?",
    correctAnswer: "5",
    explanation: "**SAT Pattern: Factor and Solve (Fill-in)**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~15s):** $x^{2} + 4x - 45 = (x + 9)(x - 5)$, so the solutions are $-9$ and $5$, and the positive one is $5$.\n\n**The Full Solution:**\nStep 1: Look for two numbers whose product is $-45$ and whose sum is $4$: they are $9$ and $-5$.\nStep 2: The equation factors as $(x + 9)(x - 5) = 0$.\nStep 3: So $x = -9$ or $x = 5$, and the positive solution is $5$. Check: $5^{2} + 4(5) - 45 = 25 + 20 - 45 = 0$ ✓\n\n**Common Mistakes:**\n* $9$: reading the $9$ from the factor $x + 9$ instead of solving $x + 9 = 0$, which gives $-9$.\n* $45$: quoting the constant term, which is the product of the solutions, not a solution.\n\n**Test Day Takeaway:** The number inside a factor is the OPPOSITE of the solution it gives. Set each factor equal to zero before reading anything off.",
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
    question: "Which expression is equivalent to $6x^{2} + 11x - 35$?",
    choices: [
      // distractor: pairs the factors so the middle term is 14x - 15x = -x
      { id: "A", text: "$(2x - 5)(3x + 7)$" },
      // distractor: has the signs reversed, giving a middle term of -21x + 10x = -11x
      { id: "B", text: "$(3x + 5)(2x - 7)$" },
      { id: "C", text: "$(3x - 5)(2x + 7)$" },
      // distractor: splits 6x^2 as 6x times x, giving a middle term of 42x - 5x = 37x
      { id: "D", text: "$(6x - 5)(x + 7)$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Factor with Leading Coefficient ≠ 1**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Every choice has first terms that multiply to $6x^{2}$ and last terms that multiply to $-35$, so check the middle term: $(3x - 5)(2x + 7)$ gives $21x - 10x = 11x$.\n\n**The Full Solution:**\nStep 1: Expand choice C: $(3x - 5)(2x + 7) = 6x^{2} + 21x - 10x - 35$.\nStep 2: Combine like terms: $6x^{2} + 11x - 35$, which matches the given expression.\nStep 3: Check at $x = 1$: $6 + 11 - 35 = -18$ and $(3 - 5)(2 + 7) = (-2)(9) = -18$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: the outer and inner products are $14x$ and $-15x$, so the middle term is $-x$.\n* Choice B: the signs are reversed, giving $-21x + 10x = -11x$.\n* Choice D: the outer and inner products are $42x$ and $-5x$, so the middle term is $37x$.\n\n**Test Day Takeaway:** When the first and last terms all match, the middle term decides it. Compute outer plus inner for each choice.",
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
    question: "A rectangular photo that is $9$ inches by $12$ inches is placed in a frame of uniform width $w$ inches. The combined area of the photo and the frame is $208$ square inches. What is the value of $w$?",
    correctAnswer: "2",
    explanation: "**SAT Pattern: Area Equation to Quadratic**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~40s):** With the frame, the dimensions are $9 + 2w$ and $12 + 2w$, so $(9 + 2w)(12 + 2w) = 208$. Since $13 \\cdot 16 = 208$, $w = 2$.\n\n**The Full Solution:**\nStep 1: The frame adds $w$ on each side, so the outer dimensions are $9 + 2w$ by $12 + 2w$, and $(9 + 2w)(12 + 2w) = 208$.\nStep 2: Expand and simplify: $108 + 42w + 4w^{2} = 208$, so $4w^{2} + 42w - 100 = 0$, or $2w^{2} + 21w - 50 = 0$.\nStep 3: Factor: $(2w + 25)(w - 2) = 0$, so $w = 2$ or $w = -12.5$. A width must be positive, so $w = 2$. Check: $(9 + 4)(12 + 4) = 13 \\cdot 16 = 208$ ✓\n\n**Common Mistakes:**\n* $4$: adding $w$ only once to each dimension, $(9 + w)(12 + w) = 208$, which gives $w = 4$.\n* $100$: subtracting the photo's area, $208 - 108$, and stopping there; $100$ is the area of the frame, not its width.\n\n**Test Day Takeaway:** A border of width $w$ on all sides adds $2w$ to each dimension. Write the area as a product, then keep only the positive solution.",
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
    question: "$f(x) = -2x^{2} + kx - 36$\nIn the given function, $k$ is a constant. The table shows three values of $x$ and their corresponding values of $f(x)$. For what value of $x$, other than $3$, does $f(x) = 0$?",
    questionTable: { headers: ["$x$", "$f(x)$"], rows: [["$1$", "$-20$"], ["$3$", "$0$"], ["$7$", "$-8$"]] },
    choices: [
      // distractor: solves -18 + 3k - 36 = 0 with a sign slip to get k = -18, whose zeros are -3 and -6
      { id: "A", text: "$-6$" },
      // distractor: gives the axis of symmetry, x = 18/4 = 4.5, instead of the other zero
      { id: "B", text: "$4.5$" },
      { id: "C", text: "$6$" },
      // distractor: gives k/2 = 9, the sum of the zeros, instead of the other zero
      { id: "D", text: "$9$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Back-Solve Parameter, Then Find Other Root**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** The table shows $f(3) = 0$, so $-18 + 3k - 36 = 0$ and $k = 18$. Then $-2x^{2} + 18x - 36 = -2(x - 3)(x - 6)$, so the other zero is $6$.\n\n**The Full Solution:**\nStep 1: From the table, $f(3) = 0$: $-2(3)^{2} + 3k - 36 = 0$, so $3k = 54$ and $k = 18$.\nStep 2: Set $-2x^{2} + 18x - 36 = 0$ and divide by $-2$: $x^{2} - 9x + 18 = 0$, which factors as $(x - 3)(x - 6) = 0$.\nStep 3: The zeros are $3$ and $6$, so the other value is $6$. Check the remaining rows with $k = 18$: $f(1) = -2 + 18 - 36 = -20$ and $f(7) = -98 + 126 - 36 = -8$, and $f(6) = -72 + 108 - 36 = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): a sign slip gives $k = -18$; then $x^{2} + 9x + 18 = 0$ has zeros $-3$ and $-6$.\n* Choice B ($4.5$): $x = \\frac{18}{2(2)} = 4.5$ is the axis of symmetry, halfway between the zeros, not a zero.\n* Choice D ($9$): $9$ is the sum of the zeros, $3 + 6$, not the other zero.\n\n**Test Day Takeaway:** A known zero is an equation for the missing constant. Solve for the constant first, then factor the completed quadratic.",
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
    question: "$(x + 7)(x - 3) = 0$\nWhich of the following gives all the solutions to the given equation?",
    choices: [
      // distractor: changes the sign for x + 7 but not for x - 3, giving -3 instead of 3
      { id: "A", text: "$-7$ and $-3$" },
      { id: "B", text: "$-7$ and $3$" },
      // distractor: takes the numbers in the factors, 7 and -3, as the solutions without changing their signs
      { id: "C", text: "$-3$ and $7$" },
      // distractor: drops both signs and uses the absolute values 3 and 7
      { id: "D", text: "$3$ and $7$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Zero Product Property**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** A product is $0$ only when a factor is $0$: $x + 7 = 0$ gives $x = -7$, and $x - 3 = 0$ gives $x = 3$.\n\n**The Full Solution:**\nStep 1: By the zero-product property, $(x + 7)(x - 3) = 0$ means $x + 7 = 0$ or $x - 3 = 0$.\nStep 2: Solve each: $x = -7$ or $x = 3$.\nStep 3: Check: $(-7 + 7)(-7 - 3) = 0 \\cdot (-10) = 0$ and $(3 + 7)(3 - 3) = 10 \\cdot 0 = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: gets $-7$ right but keeps the sign shown in $x - 3$, writing $-3$.\n* Choice C: copies the numbers in the factors, $7$ and $-3$, without changing their signs.\n* Choice D: ignores signs entirely.\n\n**Test Day Takeaway:** Each solution is the value that makes its factor zero, which is the OPPOSITE of the number added to $x$ inside the factor.",
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
    question: "$(t - 4)(t - 13) = 0$\nWhat is the sum of the solutions to the given equation?",
    correctAnswer: "17",
    explanation: "**SAT Pattern: Sum of Roots from Factors**\n\n**The correct answer is $17$.**\n\n**The Fast Way (~10s):** The solutions are $t = 4$ and $t = 13$, and $4 + 13 = 17$.\n\n**The Full Solution:**\nStep 1: By the zero-product property, $t - 4 = 0$ or $t - 13 = 0$.\nStep 2: So the solutions are $t = 4$ and $t = 13$.\nStep 3: Their sum is $4 + 13 = 17$. Check: expanding gives $t^{2} - 17t + 52 = 0$, and the sum of the solutions is $-\\frac{-17}{1} = 17$ ✓\n\n**Common Mistakes:**\n* $-17$: reading the solutions as $-4$ and $-13$ straight from the factors.\n* $52$: giving the product of the solutions, $4 \\cdot 13$, instead of the sum.\n\n**Test Day Takeaway:** Get each solution by setting its factor to zero, then add. In expanded form, the sum is also $-\\frac{b}{a}$.",
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
    question: "$(3x - 4)(x + m) = 0$\nIn the given equation, $m$ is a constant. The product of the solutions to the equation is $-8$. What is the value of $m$?",
    choices: [
      // distractor: sets m equal to the product of the solutions
      { id: "A", text: "$-8$" },
      // distractor: takes the solution -m as m, giving -6
      { id: "B", text: "$-6$" },
      // distractor: uses 4 as the first solution instead of 4/3, so 4(-m) = -8 and m = 2
      { id: "C", text: "$2$" },
      { id: "D", text: "$6$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Product of Roots from Factors**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** The solutions are $\\frac{4}{3}$ and $-m$, so $\\frac{4}{3}(-m) = -8$, which gives $m = 6$.\n\n**The Full Solution:**\nStep 1: Set each factor equal to $0$: $3x - 4 = 0$ gives $x = \\frac{4}{3}$, and $x + m = 0$ gives $x = -m$.\nStep 2: The product of the solutions is $\\frac{4}{3} \\cdot (-m) = -\\frac{4m}{3}$, and this equals $-8$.\nStep 3: So $4m = 24$ and $m = 6$. Check: the solutions are $\\frac{4}{3}$ and $-6$, and $\\frac{4}{3}(-6) = -8$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-8$): uses the product itself as the value of $m$.\n* Choice B ($-6$): $-6$ is the second solution, $-m$, not $m$.\n* Choice C ($2$): treats the first solution as $4$ instead of $\\frac{4}{3}$, so $4(-m) = -8$ gives $m = 2$.\n\n**Test Day Takeaway:** Solve each factor for $x$ before multiplying. A coefficient on $x$ inside a factor makes that solution a fraction.",
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
    question: "$10x^{2} + kx - 6 = 0$\nIn the given equation, $k$ is a constant, and $5x - 2$ is a factor of $10x^{2} + kx - 6$. What is the sum of the solutions to the given equation?",
    choices: [
      // distractor: finds the other factor 2x + 3 but takes its solution as -3 instead of -3/2, so 2/5 + (-3) = -13/5
      { id: "A", text: "$-\\dfrac{13}{5}$" },
      { id: "B", text: "$-\\dfrac{11}{10}$" },
      // distractor: gives the product of the solutions, (2/5)(-3/2) = -3/5
      { id: "C", text: "$-\\dfrac{3}{5}$" },
      // distractor: uses -k/a with the sign reversed, giving 11/10
      { id: "D", text: "$\\dfrac{11}{10}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Factor Division + Vieta's**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Since $5x \\cdot 2x = 10x^{2}$ and $(-2)(3) = -6$, the other factor is $2x + 3$. The solutions are $\\frac{2}{5}$ and $-\\frac{3}{2}$, whose sum is $-\\frac{11}{10}$.\n\n**The Full Solution:**\nStep 1: Write $10x^{2} + kx - 6 = (5x - 2)(ax + b)$. Matching the $x^{2}$ terms gives $5a = 10$, so $a = 2$; matching the constants gives $-2b = -6$, so $b = 3$. The other factor is $2x + 3$.\nStep 2: Expanding $(5x - 2)(2x + 3) = 10x^{2} + 15x - 4x - 6 = 10x^{2} + 11x - 6$ shows $k = 11$. The solutions are $x = \\frac{2}{5}$ and $x = -\\frac{3}{2}$.\nStep 3: The sum is $\\frac{2}{5} - \\frac{3}{2} = \\frac{4}{10} - \\frac{15}{10} = -\\frac{11}{10}$. Check: $-\\frac{k}{a} = -\\frac{11}{10}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{13}{5}$): solves $2x + 3 = 0$ as $x = -3$, forgetting to divide by $2$.\n* Choice C ($-\\frac{3}{5}$): this is the product of the solutions, $\\frac{c}{a} = -\\frac{6}{10}$, not the sum.\n* Choice D ($\\frac{11}{10}$): uses $\\frac{k}{a}$ instead of $-\\frac{k}{a}$.\n\n**Test Day Takeaway:** A known factor pins down the other factor by matching the first and last terms. Then the sum of the solutions is $-\\frac{b}{a}$.",
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
    question: "$f(x) = 3x^{2} - 30x + 8$\nFor what value of $x$ does the given function $f$ reach its minimum value?",
    correctAnswer: "5",
    explanation: "**SAT Pattern: Vertex x-coordinate Formula**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~10s):** The minimum of an upward-opening parabola is at $x = -\\dfrac{b}{2a} = -\\dfrac{-30}{2(3)} = 5$.\n\n**The Full Solution:**\nStep 1: The coefficient of $x^{2}$ is $3 > 0$, so the graph opens upward and its vertex is the minimum.\nStep 2: The vertex is at $x = -\\dfrac{b}{2a}$ with $a = 3$ and $b = -30$.\nStep 3: $x = -\\dfrac{-30}{6} = 5$. Check: $f(4) = 48 - 120 + 8 = -64$, $f(5) = 75 - 150 + 8 = -67$, and $f(6) = 108 - 180 + 8 = -64$, so $f(5)$ is the least ✓\n\n**Common Mistakes:**\n* $-5$: dropping the negative sign in $-\\dfrac{b}{2a}$.\n* $10$: computing $-\\dfrac{b}{a}$, which forgets the $2$ in the denominator.\n* $-67$: giving the minimum value $f(5)$ instead of the $x$-value where it occurs.\n\n**Test Day Takeaway:** For $ax^{2} + bx + c$, the turning point is at $x = -\\dfrac{b}{2a}$; read the question to see whether it wants that $x$-value or the value of the function there.",
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
    question: "The table shows values of the quadratic function $f$ for five values of $x$. Which of the following is the vertex of the parabola that is the graph of $f$?",
    diagram: { type: "dataTable", params: { headers: ["x", "f(x)"], rows: [["0", "16"], ["1", "7"], ["2", "4"], ["3", "7"], ["4", "16"]] } },
    choices: [
      // distractor: takes the first row of the table as the vertex
      { id: "A", text: "$(0, 16)$" },
      // distractor: picks a point next to the vertex instead of the turning point
      { id: "B", text: "$(1, 7)$" },
      { id: "C", text: "$(2, 4)$" },
      // distractor: reverses the coordinates of the vertex (2, 4)
      { id: "D", text: "$(4, 2)$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Vertex Coordinates**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The values of $f(x)$ are symmetric about $x = 2$ ($f(1) = f(3) = 7$ and $f(0) = f(4) = 16$), so the vertex is at $x = 2$, where $f(2) = 4$.\n\n**The Full Solution:**\nStep 1: The graph of a quadratic function is symmetric about the vertical line through its vertex.\nStep 2: In the table, $f(1) = f(3) = 7$ and $f(0) = f(4) = 16$, so the axis of symmetry is $x = 2$.\nStep 3: The vertex is $(2, f(2)) = (2, 4)$. Check: $4$ is less than every other value in the table, so the parabola opens upward and $(2, 4)$ is its lowest point ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($(0, 16)$): the first row of a table is not the vertex.\n* Choice B ($(1, 7)$): this point is beside the vertex; $f(2) = 4$ is lower.\n* Choice D ($(4, 2)$): reverses the $x$- and $y$-coordinates of the vertex.\n\n**Test Day Takeaway:** In a table of a quadratic, find the $x$-value where the outputs mirror each other; that $x$ and its output are the vertex.",
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
    question: "The function $h(t) = -16t^{2} + 96t + 5$ gives the height, in feet, of a ball $t$ seconds after it is thrown upward. The table shows four values of $t$ and their corresponding values of $h(t)$. How many seconds after the ball is thrown does it reach its maximum height?",
    diagram: { type: "dataTable", params: { headers: ["Time t (seconds)", "Height h(t) (feet)"], rows: [["0", "5"], ["1", "85"], ["2", "133"], ["4.5", "113"]] } },
    choices: [
      // distractor: picks the time with the greatest height in the table, 133 feet at t = 2
      { id: "A", text: "$2$" },
      { id: "B", text: "$3$" },
      // distractor: computes -b/a = 96/16 = 6, forgetting the 2 in -b/(2a)
      { id: "C", text: "$6$" },
      // distractor: gives the maximum height h(3) = 149 instead of the time
      { id: "D", text: "$149$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Vertex Time for Projectile Motion**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The maximum of $h$ is at the vertex, $t = -\\dfrac{96}{2(-16)} = 3$ seconds.\n\n**The Full Solution:**\nStep 1: The coefficient of $t^{2}$ is $-16 < 0$, so the graph opens downward and the vertex is the maximum.\nStep 2: The vertex is at $t = -\\dfrac{b}{2a} = -\\dfrac{96}{2(-16)} = \\dfrac{96}{32} = 3$.\nStep 3: So the ball reaches its maximum height $3$ seconds after it is thrown. Check: $h(3) = -144 + 288 + 5 = 149$, which is more than the table's values $h(2) = 133$ and $h(4.5) = 113$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): $133$ is the greatest height in the table, but the table does not include the vertex.\n* Choice C ($6$): $\\dfrac{96}{16} = 6$ forgets the $2$ in $-\\dfrac{b}{2a}$; $6$ is when the ball is back at its starting height of $5$ feet.\n* Choice D ($149$): $149$ feet is the maximum height, not the time at which it occurs.\n\n**Test Day Takeaway:** For a projectile model, the time of the maximum is $-\\dfrac{b}{2a}$. A table only samples the function, so do not assume it contains the peak.",
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
    question: "A workshop's weekly profit $P$, in dollars, from building $n$ chairs is modeled by $P(n) = -2n^{2} + 64n - 150$. According to the model, what is the maximum weekly profit, in dollars?",
    correctAnswer: "362",
    explanation: "**SAT Pattern: Max Profit via Vertex**\n\n**The correct answer is $362$.**\n\n**The Fast Way (~25s):** The vertex is at $n = -\\dfrac{64}{2(-2)} = 16$, and $P(16) = -512 + 1{,}024 - 150 = 362$.\n\n**The Full Solution:**\nStep 1: The coefficient of $n^{2}$ is $-2 < 0$, so the graph opens downward and the vertex gives the maximum profit.\nStep 2: The vertex is at $n = -\\dfrac{b}{2a} = -\\dfrac{64}{2(-2)} = 16$ chairs.\nStep 3: The maximum profit is $P(16) = -2(256) + 64(16) - 150 = -512 + 1{,}024 - 150 = 362$ dollars. Check: $P(15) = -450 + 960 - 150 = 360$ and $P(17) = -578 + 1{,}088 - 150 = 360$, both less than $362$ ✓\n\n**Common Mistakes:**\n* $16$: giving the number of chairs at the vertex instead of the profit there.\n* $662$: adding $150$ instead of subtracting it when evaluating $P(16)$.\n\n**Test Day Takeaway:** A maximum-value question wants the OUTPUT at the vertex: find $-\\dfrac{b}{2a}$, then substitute it back into the model.",
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
    question: "$y = 3x^{2} + bx + 27$\nIn the given equation, $b$ is a constant. The vertex of the graph of the equation in the $xy$-plane lies on the $x$-axis. Which of the following could be the value of $b$?",
    choices: [
      // distractor: assumes the vertex must be at the origin, which would require b = 0 and a constant of 0
      { id: "A", text: "$0$" },
      // distractor: sets b^2 = ac = 81, leaving out the 4 in b^2 - 4ac
      { id: "B", text: "$9$" },
      { id: "C", text: "$18$" },
      // distractor: stops at b^2 = 324 without taking the square root
      { id: "D", text: "$324$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Vertex Constraint via Discriminant**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** A vertex on the $x$-axis means the graph touches the $x$-axis exactly once, so $b^{2} - 4(3)(27) = 0$. Then $b^{2} = 324$ and $b = \\pm 18$.\n\n**The Full Solution:**\nStep 1: If the vertex lies on the $x$-axis, the parabola meets the $x$-axis at exactly one point, so $3x^{2} + bx + 27 = 0$ has exactly one real solution.\nStep 2: That happens when the discriminant is $0$: $b^{2} - 4(3)(27) = 0$, so $b^{2} = 324$.\nStep 3: So $b = 18$ or $b = -18$, and $18$ is a choice. Check: $3x^{2} + 18x + 27 = 3(x^{2} + 6x + 9) = 3(x + 3)^{2}$, whose vertex $(-3, 0)$ is on the $x$-axis ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0$): with $b = 0$ the graph is $y = 3x^{2} + 27$, whose vertex $(0, 27)$ is above the $x$-axis.\n* Choice B ($9$): solves $b^{2} = 3 \\cdot 27 = 81$, leaving out the factor $4$.\n* Choice D ($324$): this is $b^{2}$, not $b$.\n\n**Test Day Takeaway:** \"Vertex on the $x$-axis\" means one $x$-intercept, so set $b^{2} - 4ac = 0$ and remember both square roots.",
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
    question: "$g(x) = -3(x + 5)^{2} + 8$\nWhat is the vertex of the graph of $y = g(x)$ in the $xy$-plane?",
    choices: [
      { id: "A", text: "$(-5, 8)$" },
      // distractor: changes the sign of k as well as h
      { id: "B", text: "$(-5, -8)$" },
      // distractor: reads h as +5 from (x + 5) instead of -5
      { id: "C", text: "$(5, 8)$" },
      // distractor: reverses the coordinates of the vertex
      { id: "D", text: "$(8, -5)$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Read Vertex Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Write $(x + 5)$ as $(x - (-5))$: in $a(x - h)^{2} + k$, $h = -5$ and $k = 8$, so the vertex is $(-5, 8)$.\n\n**The Full Solution:**\nStep 1: Vertex form is $y = a(x - h)^{2} + k$, with vertex $(h, k)$.\nStep 2: Since $x + 5 = x - (-5)$, $h = -5$; the constant outside the square gives $k = 8$.\nStep 3: The vertex is $(-5, 8)$. Check: $g(-5) = -3(0)^{2} + 8 = 8$, and every other $x$ makes $-3(x + 5)^{2}$ negative, so $8$ is the greatest value ✓\n\n**Why the wrong answers are tempting:**\n* Choice B: only $h$ changes sign; $k$ is read exactly as written, $+8$.\n* Choice C: takes the $+5$ inside the parentheses as $h$.\n* Choice D: lists the coordinates in reverse order.\n\n**Test Day Takeaway:** In $a(x - h)^{2} + k$, flip the sign of the number inside the parentheses for $h$, and read $k$ as it stands.",
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
    question: "The graph of the quadratic function $f$ is shown. The vertex of the graph is $(2, -9)$, and the graph passes through the point $(5, 0)$. Which equation defines $f$?",
    diagram: { type: "quadraticVertex", params: { vertex: [2, -9], a: 1, showPoints: [[5, 0], [-1, 0]], showVertex: true } },
    choices: [
      { id: "A", text: "$f(x) = (x - 2)^{2} - 9$" },
      // distractor: uses x + 2, which puts the vertex at x = -2
      { id: "B", text: "$f(x) = (x + 2)^{2} - 9$" },
      // distractor: uses +9, which puts the vertex above the x-axis
      { id: "C", text: "$f(x) = (x - 2)^{2} + 9$" },
      // distractor: takes a = 3 from the horizontal distance 5 - 2 instead of solving 9a - 9 = 0
      { id: "D", text: "$f(x) = 3(x - 2)^{2} - 9$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Construct Vertex Form from Conditions**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Start from $f(x) = a(x - 2)^{2} - 9$. Substituting $(5, 0)$ gives $9a - 9 = 0$, so $a = 1$.\n\n**The Full Solution:**\nStep 1: A parabola with vertex $(2, -9)$ has the form $f(x) = a(x - 2)^{2} - 9$.\nStep 2: The point $(5, 0)$ is on the graph, so $0 = a(5 - 2)^{2} - 9 = 9a - 9$.\nStep 3: So $a = 1$ and $f(x) = (x - 2)^{2} - 9$. Check: $f(5) = 9 - 9 = 0$, and $f(-1) = 9 - 9 = 0$ matches the other $x$-intercept on the graph ✓\n\n**Why the wrong answers are tempting:**\n* Choice B: $(x + 2)$ shifts the vertex to $x = -2$.\n* Choice C: $+9$ moves the vertex to $(2, 9)$, above the $x$-axis.\n* Choice D: with $a = 3$, $f(5) = 27 - 9 = 18$, not $0$.\n\n**Test Day Takeaway:** Vertex form needs the vertex AND one more point: plug the vertex into $a(x - h)^{2} + k$, then use the point to solve for $a$.",
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
    question: "$q(x) = x^{2} - 8x + 11$\nThe table shows four values of $x$ and their corresponding values of $q(x)$ for the given function. What is the minimum value of $q(x)$?",
    questionTable: { headers: ["$x$", "$q(x)$"], rows: [["$1$", "$4$"], ["$3$", "$-4$"], ["$5$", "$-4$"], ["$7$", "$4$"]] },
    choices: [
      { id: "A", text: "$-5$" },
      // distractor: takes the least value in the table, which skips the vertex at x = 4
      { id: "B", text: "$-4$" },
      // distractor: gives the x-coordinate of the vertex, 4, instead of its value
      { id: "C", text: "$4$" },
      // distractor: uses the constant term 11 as the minimum
      { id: "D", text: "$11$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Complete the Square (Vertex Form)**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Complete the square: $x^{2} - 8x + 11 = (x - 4)^{2} - 16 + 11 = (x - 4)^{2} - 5$, so the minimum value is $-5$.\n\n**The Full Solution:**\nStep 1: Half of $-8$ is $-4$, and $(-4)^{2} = 16$. Add and subtract $16$: $q(x) = (x^{2} - 8x + 16) - 16 + 11$.\nStep 2: So $q(x) = (x - 4)^{2} - 5$, and since $(x - 4)^{2} \\geq 0$, the least value is $-5$, at $x = 4$.\nStep 3: The table's least value, $-4$, comes from $x = 3$ and $x = 5$, which are on either side of $x = 4$. Check: $q(4) = 16 - 32 + 11 = -5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-4$): the table never shows $x = 4$, where the minimum occurs.\n* Choice C ($4$): $4$ is the $x$-coordinate of the vertex, not the minimum value.\n* Choice D ($11$): $11$ is $q(0)$, the $y$-intercept.\n\n**Test Day Takeaway:** Completing the square turns $x^{2} + bx + c$ into $(x - h)^{2} + k$, and $k$ is the minimum. A table can miss the vertex.",
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
    question: "$f(x) = 3(x - h)^{2} + k$\nIn the given function, $h$ and $k$ are constants. If $f(2) = f(10)$ and $f(4) = 19$, what is the minimum value of $f(x)$?",
    correctAnswer: "7",
    explanation: "**SAT Pattern: Read Minimum from Vertex Form**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~30s):** Equal outputs at $2$ and $10$ put the axis of symmetry at $h = 6$. Then $f(4) = 3(4 - 6)^{2} + k = 12 + k = 19$, so the minimum is $k = 7$.\n\n**The Full Solution:**\nStep 1: The graph is symmetric about $x = h$, and $f(2) = f(10)$, so $h$ is halfway between $2$ and $10$: $h = \\frac{2 + 10}{2} = 6$.\nStep 2: Substitute $x = 4$: $f(4) = 3(4 - 6)^{2} + k = 3(4) + k = 12 + k$. Since $f(4) = 19$, $k = 7$.\nStep 3: Because $3 > 0$, the parabola opens upward and its minimum is $k = 7$, at $x = 6$. Check: $f(2) = 3(16) + 7 = 55$, $f(10) = 3(16) + 7 = 55$, and $f(4) = 12 + 7 = 19$ ✓\n\n**Common Mistakes:**\n* $6$: giving $h$, the $x$-value of the vertex, instead of the minimum value.\n* $19$: giving $f(4)$, which is a point on the graph, not the vertex.\n* $25$: forgetting to square $(4 - 6)$, so $3(-2) + k = 19$ and $k = 25$.\n\n**Test Day Takeaway:** Two inputs with equal outputs locate $h$ at their midpoint. One more point then gives $k$, which is the minimum when $a > 0$.",
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
    question: "$x^{2} + 8x + 17 = 0$\nHow many distinct real solutions does the given equation have?",
    choices: [
      // distractor: leaves the 4 out of b^2 - 4ac, getting 64 - 17 = 47 > 0
      { id: "A", text: "Exactly two" },
      // distractor: treats x^2 + 8x + 17 as the perfect square (x + 4)^2, which is x^2 + 8x + 16
      { id: "B", text: "Exactly one" },
      { id: "C", text: "Zero" },
      // distractor: a quadratic equation can have at most two real solutions
      { id: "D", text: "Infinitely many" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Count Real Solutions via Discriminant**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The discriminant is $8^{2} - 4(1)(17) = 64 - 68 = -4$. A negative discriminant means no real solutions.\n\n**The Full Solution:**\nStep 1: Match the equation to $ax^{2} + bx + c = 0$: $a = 1$, $b = 8$, and $c = 17$.\nStep 2: The discriminant is $b^{2} - 4ac = 8^{2} - 4(1)(17) = 64 - 68 = -4$.\nStep 3: Since $-4 < 0$, the equation has no real solutions. Check by completing the square: $x^{2} + 8x + 17 = (x + 4)^{2} + 1$, which is at least $1$ for every real $x$, so it never equals $0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A (Exactly two): leaving the $4$ out of $b^{2} - 4ac$ gives $64 - 17 = 47 > 0$, which would mean two solutions.\n* Choice B (Exactly one): $x^{2} + 8x + 17$ looks like the perfect square $(x + 4)^{2}$, but that square expands to $x^{2} + 8x + 16$.\n* Choice D (Infinitely many): a quadratic equation has at most two real solutions.\n\n**Test Day Takeaway:** Count real solutions with the sign of $b^{2} - 4ac$: positive means two, zero means one, negative means none.",
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
    question: "$x^{2} + 10x + 25 = 0$\nWhat is the solution to the given equation?",
    choices: [
      // distractor: uses the coefficient of x, 10, with a negative sign
      { id: "A", text: "$-10$" },
      { id: "B", text: "$-5$" },
      // distractor: sets x - 5 = 0, a sign error in the factor x + 5
      { id: "C", text: "$5$" },
      // distractor: gives the constant term 25
      { id: "D", text: "$25$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Compute Discriminant**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The left side is a perfect square, $(x + 5)^{2}$, so $x + 5 = 0$ and $x = -5$.\n\n**The Full Solution:**\nStep 1: With $a = 1$, $b = 10$, and $c = 25$, the discriminant is $b^{2} - 4ac = 100 - 4(1)(25) = 0$, so the equation has exactly one real solution.\nStep 2: That matches a perfect square: $x^{2} + 10x + 25 = (x + 5)^{2}$, so $(x + 5)^{2} = 0$.\nStep 3: So $x + 5 = 0$ and $x = -5$. Check: $(-5)^{2} + 10(-5) + 25 = 25 - 50 + 25 = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-10$): uses the coefficient of $x$ with a negative sign.\n* Choice C ($5$): solves $x - 5 = 0$, a sign error in the factor $x + 5$.\n* Choice D ($25$): gives the constant term instead of solving.\n\n**Test Day Takeaway:** When $b^{2} - 4ac = 0$, the quadratic is a perfect square, and its one solution is $x = -\\dfrac{b}{2a}$.",
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
    question: "$x^{2} - 18x + c = 0$\nFor what value of the constant $c$ does the given equation have exactly one real solution?",
    choices: [
      // distractor: gives the solution x = 9 instead of c
      { id: "A", text: "$9$" },
      // distractor: uses the coefficient 18 itself
      { id: "B", text: "$18$" },
      { id: "C", text: "$81$" },
      // distractor: solves 324 - c = 0, leaving out the 4 in b^2 - 4ac
      { id: "D", text: "$324$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Parameter for Discriminant = 0**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Exactly one real solution means $(-18)^{2} - 4(1)(c) = 0$, so $324 = 4c$ and $c = 81$.\n\n**The Full Solution:**\nStep 1: A quadratic equation has exactly one real solution when its discriminant is $0$.\nStep 2: Here $a = 1$ and $b = -18$, so $(-18)^{2} - 4(1)(c) = 324 - 4c = 0$.\nStep 3: So $c = 81$. Check: $x^{2} - 18x + 81 = (x - 9)^{2}$, which equals $0$ only when $x = 9$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($9$): $9$ is the single solution, not the value of $c$.\n* Choice B ($18$): repeats the coefficient of $x$.\n* Choice D ($324$): sets $b^{2} - c = 0$, leaving out the $4$.\n\n**Test Day Takeaway:** One real solution means a perfect square: $c = \\left(\\frac{b}{2}\\right)^{2}$ when $a = 1$.",
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
    question: "$2x^{2} + kx + 18 = 0$\nIn the given equation, $k$ is a constant. The equation has two distinct real solutions. Which of the following could be the value of $k$?",
    choices: [
      // distractor: gives a discriminant of 36 - 144 = -108 < 0, so there are no real solutions
      { id: "A", text: "$-6$" },
      // distractor: gives a discriminant of -144 < 0, so there are no real solutions
      { id: "B", text: "$0$" },
      // distractor: gives a discriminant of 144 - 144 = 0, so there is only one real solution
      { id: "C", text: "$12$" },
      { id: "D", text: "$15$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Discriminant Inequality**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** Two distinct real solutions need $k^{2} - 4(2)(18) > 0$, or $k^{2} > 144$. Of the choices, only $15^{2} = 225$ is greater than $144$.\n\n**The Full Solution:**\nStep 1: A quadratic equation has two distinct real solutions exactly when its discriminant is positive: $k^{2} - 4(2)(18) > 0$.\nStep 2: Simplify: $k^{2} - 144 > 0$, so $k^{2} > 144$, which means $k < -12$ or $k > 12$.\nStep 3: Only $15$ satisfies this. Check: $k = 15$ gives $225 - 144 = 81 > 0$, so there are two solutions; in fact $2x^{2} + 15x + 18 = (2x + 3)(x + 6)$, with solutions $-\\dfrac{3}{2}$ and $-6$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): the discriminant is $36 - 144 = -108$, so there are no real solutions.\n* Choice B ($0$): the discriminant is $-144$, so there are no real solutions.\n* Choice C ($12$): the discriminant is $144 - 144 = 0$, which gives only one real solution.\n\n**Test Day Takeaway:** \"Two distinct real solutions\" means a STRICT inequality, $b^{2} - 4ac > 0$; a value that makes the discriminant exactly $0$ gives only one solution.",
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
    question: "$y = 2x^{2} + 5x + 4$\n$y = -3x + p$\nIn the given system of equations, $p$ is a constant. If the graphs of the equations in the $xy$-plane intersect at exactly one point, what is the value of $p$?",
    choices: [
      { id: "A", text: "$-4$" },
      // distractor: solves 4 - p = 8 but reports p as positive 4
      { id: "B", text: "$4$" },
      // distractor: reports 4 - p = 8 instead of solving for p
      { id: "C", text: "$8$" },
      // distractor: sets 4 - p = -8, a sign error, which gives p = 12
      { id: "D", text: "$12$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Tangent Line to Parabola (Discriminant Method)**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** Equating gives $2x^2+8x+(4-p)=0$; tangency forces $64-8(4-p)=0$, so $4-p=8$ and $p=-4$.\n\n**The Full Solution:**\nStep 1: Set $2x^2+5x+4=-3x+p$, which rearranges to $2x^2+8x+(4-p)=0$.\nStep 2: Exactly one solution means $8^2-4(2)(4-p)=0$, that is $64-8(4-p)=0$.\nStep 3: So $4-p=8$ and $p=-4$. Check: $2x^2+8x+8=2(x+2)^2=0$ has the single solution $x=-2$, where both equations give $y=2$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($4$): reaches $4-p=8$ but reports $p$ without the sign change.\n* Choice C ($8$): reports the value of $4-p$ rather than $p$.\n* Choice D ($12$): sets $4-p=-8$, a sign error, which gives $p=12$.\n\n**Test Day Takeaway:** Set the two equations equal, move every term to one side, and require $b^2-4ac=0$ for exactly one intersection point.",
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
    question: "Which expression is equivalent to $(x - 7)^{2} + 4$?",
    choices: [
      { id: "A", text: "$x^{2} - 14x + 53$" },
      // distractor: forgets to double the middle term, writing $-7x$ instead of $2(-7)x = -14x$
      { id: "B", text: "$x^{2} - 7x + 53$" },
      // distractor: loses the negative sign on the middle term
      { id: "C", text: "$x^{2} + 14x + 53$" },
      // distractor: squares term by term, treating $(x - 7)^{2}$ as $x^{2} + 49$ with no middle term
      { id: "D", text: "$x^{2} + 53$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Vertex to Standard Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $(x - 7)^{2} = x^{2} - 14x + 49$, and adding $4$ gives $x^{2} - 14x + 53$.\n\n**The Full Solution:**\nStep 1: Expand the square: $(x - 7)^{2} = (x - 7)(x - 7) = x^{2} - 7x - 7x + 49 = x^{2} - 14x + 49$.\nStep 2: Add the constant outside the square: $x^{2} - 14x + 49 + 4 = x^{2} - 14x + 53$.\nStep 3: Check at $x = 7$: the given expression is $0 + 4 = 4$, and $49 - 98 + 53 = 4$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B: writes the middle term as $-7x$; the two cross products $-7x$ and $-7x$ add to $-14x$.\n* Choice C: writes $+14x$, which would come from $(x + 7)^{2}$.\n* Choice D: squares each term separately, dropping the middle term $-14x$ entirely.\n\n**Test Day Takeaway:** $(x - h)^{2}$ always expands to three terms, and the middle term is $-2hx$, not $-hx$.",
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
    question: "$3x^{2} + 24x + 41 = 3(x + 4)^{2} + n$\nThe given equation is true for all values of $x$, where $n$ is a constant. What is the value of $n$?",
    choices: [
      { id: "A", text: "$-7$" },
      // distractor: subtracts in the wrong order, computing $48 - 41 = 7$
      { id: "B", text: "$7$" },
      // distractor: subtracts $16$ instead of $3 \cdot 16 = 48$, ignoring the leading coefficient
      { id: "C", text: "$25$" },
      // distractor: adds $48$ to $41$ instead of subtracting it
      { id: "D", text: "$89$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Complete the Square with Leading Coefficient**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $3(x + 4)^{2} = 3x^{2} + 24x + 48$, so the constant must drop from $48$ to $41$: $n = 41 - 48 = -7$.\n\n**The Full Solution:**\nStep 1: Expand the right side: $3(x + 4)^{2} + n = 3(x^{2} + 8x + 16) + n = 3x^{2} + 24x + 48 + n$.\nStep 2: The $x^{2}$ and $x$ terms already match, so the constant terms must match: $48 + n = 41$.\nStep 3: Solve: $n = -7$. Check at $x = 0$: the left side is $41$ and the right side is $3(16) - 7 = 41$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($7$): subtracts in the wrong order, computing $48 - 41$.\n* Choice C ($25$): subtracts $4^{2} = 16$ instead of $3 \\cdot 16 = 48$, forgetting that the $3$ multiplies the whole square.\n* Choice D ($89$): adds $48$ to $41$ instead of subtracting it.\n\n**Test Day Takeaway:** When a leading coefficient sits outside the square, it multiplies the square's constant too; expand the target form and match constant terms.",
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
    question: "$f(x) = ax^{2} + bx + c$\nThe graph of $y = f(x)$ is shown, where $a$, $b$, and $c$ are constants. What is the value of $b$?",
    diagram: { type: "quadraticVertex", params: { vertex: [2, -8], a: 0.5, showVertex: true, showPoints: [[-2, 0], [6, 0]] } },
    choices: [
      // distractor: reports the constant term c instead of b
      { id: "A", text: "$-6$" },
      { id: "B", text: "$-2$" },
      // distractor: reports the leading coefficient a instead of b
      { id: "C", text: "$0.5$" },
      // distractor: drops the negative sign when expanding -2ah
      { id: "D", text: "$2$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Vertex Form from Vertex + Intercepts**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** The intercepts $-2$ and $6$ with vertex $(2,-8)$ give $a=\\frac{1}{2}$; expanding $\\frac{1}{2}(x-2)^2-8$ gives $b=-2$.\n\n**The Full Solution:**\nStep 1: The graph crosses the $x$-axis at $-2$ and $6$, so $f(x)=a(x+2)(x-6)$, and the vertex sits halfway between them at $x=2$.\nStep 2: The vertex output is $-8$: $a(2+2)(2-6)=-16a=-8$, so $a=\\frac{1}{2}$.\nStep 3: Expand $\\frac{1}{2}(x+2)(x-6)=\\frac{1}{2}(x^2-4x-12)=\\frac{1}{2}x^2-2x-6$, so $b=-2$. Check: $-\\frac{b}{2a}=-\\frac{-2}{1}=2$, matching the vertex's $x$-coordinate ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): reports the constant term $c$ instead of $b$.\n* Choice C ($0.5$): reports the leading coefficient $a$ instead of $b$.\n* Choice D ($2$): drops the negative sign when expanding, since $-4a=-2$, not $2$.\n\n**Test Day Takeaway:** Intercepts give the factored form and the vertex gives the stretch — expand once and read off whichever coefficient is asked for.",
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
    question: "$f(x) = x^{2} - 10x + 31$\nThe function $f$ can be written in the form $f(x) = (x - h)^{2} + k$, where $h$ and $k$ are constants. What is the value of $k$?",
    correctAnswer: "6",
    explanation: "**SAT Pattern: Standard to Vertex (k value)**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~25s):** Half of $-10$ is $-5$, and $(-5)^{2} = 25$, so $f(x) = (x - 5)^{2} + 31 - 25 = (x - 5)^{2} + 6$.\n\n**The Full Solution:**\nStep 1: Take half the coefficient of $x$: $\\frac{-10}{2} = -5$, so the completed square is $(x - 5)^{2}$.\nStep 2: Expanding $(x - 5)^{2}$ gives $x^{2} - 10x + 25$, which has constant $25$ instead of $31$.\nStep 3: Add the difference back: $k = 31 - 25 = 6$, so $f(x) = (x - 5)^{2} + 6$. Check: $f(5) = 25 - 50 + 31 = 6$, matching $k$ ✓\n\n**Common Mistakes:**\n* Reporting $5$, the value of $h$, instead of $k$.\n* Subtracting $10$ rather than $\\left(\\frac{10}{2}\\right)^{2} = 25$, which gives $31 - 10 = 21$.\n\n**Test Day Takeaway:** Completing the square subtracts the square of half the $x$-coefficient from the constant; $k$ is what is left, and it equals $f(h)$.",
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
    question: "Which expression is equivalent to $\\dfrac{6x^{9}}{2x^{4}}$, where $x > 0$?",
    choices: [
      { id: "A", text: "$3x^{5}$" },
      // distractor: adds the exponents, 9 + 4 = 13, instead of subtracting them
      { id: "B", text: "$3x^{13}$" },
      // distractor: subtracts the coefficients, 6 - 2 = 4, instead of dividing them
      { id: "C", text: "$4x^{5}$" },
      // distractor: multiplies the coefficients, 6 times 2 = 12, instead of dividing them
      { id: "D", text: "$12x^{5}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Quotient Rule of Exponents**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Divide the coefficients and subtract the exponents: $\\frac{6}{2} = 3$ and $x^{9 - 4} = x^{5}$, so the expression is $3x^{5}$.\n\n**The Full Solution:**\nStep 1: Separate the numbers from the powers: $\\dfrac{6x^{9}}{2x^{4}} = \\dfrac{6}{2} \\cdot \\dfrac{x^{9}}{x^{4}}$.\nStep 2: Divide the numerical parts: $6 \\div 2 = 3$.\nStep 3: For like bases, subtract the exponents: $x^{9 - 4} = x^{5}$, giving $3x^{5}$. Check with $x = 2$: $\\frac{6(512)}{2(16)} = \\frac{3{,}072}{32} = 96$, and $3(2)^{5} = 96$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($3x^{13}$): adds the exponents instead of subtracting them.\n* Choice C ($4x^{5}$): subtracts the coefficients rather than dividing them.\n* Choice D ($12x^{5}$): multiplies the coefficients rather than dividing them.\n\n**Test Day Takeaway:** In a quotient, coefficients divide and exponents on a common base subtract: two different operations in the same step.",
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
    question: "Which expression is equivalent to $(2p^{3})^{4}$?",
    choices: [
      // distractor: applies the exponent 4 to $p^{3}$ only and leaves the coefficient 2 unchanged
      { id: "A", text: "$2p^{12}$" },
      // distractor: multiplies the base 2 by the exponent 4 instead of raising it, giving 8 instead of 16
      { id: "B", text: "$8p^{12}$" },
      // distractor: adds the exponents 3 and 4 instead of multiplying them, giving $p^{7}$
      { id: "C", text: "$16p^{7}$" },
      { id: "D", text: "$16p^{12}$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Power of a Product**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Raise each factor to the fourth power: $2^{4} = 16$ and $(p^{3})^{4} = p^{12}$, so the expression is $16p^{12}$.\n\n**The Full Solution:**\nStep 1: A power of a product applies to every factor: $(2p^{3})^{4} = 2^{4} \\cdot (p^{3})^{4}$.\nStep 2: Evaluate the numerical factor: $2^{4} = 16$.\nStep 3: For a power of a power, multiply the exponents: $(p^{3})^{4} = p^{3 \\cdot 4} = p^{12}$, giving $16p^{12}$. Check with $p = 2$: $(2 \\cdot 8)^{4} = 16^{4} = 65{,}536$, and $16 \\cdot 2^{12} = 16 \\cdot 4{,}096 = 65{,}536$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2p^{12}$): raises only $p^{3}$ to the fourth power and leaves the coefficient as $2$.\n* Choice B ($8p^{12}$): multiplies the base $2$ by the exponent $4$ instead of raising it, producing $8$.\n* Choice C ($16p^{7}$): adds the exponents $3$ and $4$ instead of multiplying them.\n\n**Test Day Takeaway:** Every factor inside the parentheses takes the outside exponent, and stacked exponents multiply.",
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
    question: "$(2^{3})(2^{n}) = 2^{5n - 9}$\nWhat value of $n$ satisfies the given equation?",
    choices: [
      // distractor: reads the right side as $2^{5n + 9}$, solving $3 + n = 5n + 9$
      { id: "A", text: "$-1.5$" },
      // distractor: divides the powers on the left instead of multiplying, solving $n - 3 = 5n - 9$
      { id: "B", text: "$1.5$" },
      { id: "C", text: "$3$" },
      // distractor: multiplies the exponents on the left instead of adding them, solving $3n = 5n - 9$
      { id: "D", text: "$4.5$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Exponent Equation (Combine then Solve)**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The left side is $2^{3 + n}$, so $3 + n = 5n - 9$, giving $4n = 12$ and $n = 3$.\n\n**The Full Solution:**\nStep 1: Multiplying powers of the same base adds the exponents: $(2^3)(2^n) = 2^{3 + n}$.\nStep 2: With equal bases the exponents must match, so $3 + n = 5n - 9$.\nStep 3: Subtract $n$ and add $9$ to get $12 = 4n$, so $n = 3$. Check: the left side is $2^{6} = 64$ and the right side is $2^{15 - 9} = 2^6 = 64$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-1.5$): flips the sign of the $-9$, turning the equation into $3 + n = 5n + 9$.\n* Choice B ($1.5$): divides the two powers on the left instead of multiplying them, solving $n - 3 = 5n - 9$.\n* Choice D ($4.5$): multiplies the exponents on the left, producing $3n = 5n - 9$.\n\n**Test Day Takeaway:** Collapse each side to a single power of the shared base first; only then may you set the exponents equal.",
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
    question: "$\\dfrac{y^{5k}}{y^{k + 4}} = y^{20}$\nThe given equation is true for all positive values of $y$, where $k$ is a constant. What is the value of $k$?",
    correctAnswer: "6",
    explanation: "**SAT Pattern: Exponent Laws — Quotient Rule + Solve**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~20s):** Dividing subtracts exponents: $5k - (k + 4) = 4k - 4$, so $4k - 4 = 20$ and $k = 6$.\n\n**The Full Solution:**\nStep 1: The quotient rule gives $\\dfrac{y^{5k}}{y^{k+4}} = y^{5k - (k + 4)}$.\nStep 2: Simplify the exponent: $5k - k - 4 = 4k - 4$, so the equation of exponents is $4k - 4 = 20$.\nStep 3: Adding $4$ gives $4k = 24$, so $k = 6$. Check: the exponents become $30$ and $10$, and $30 - 10 = 20$ ✓\n\n**Common Mistakes:**\n* $4$ — subtracting only the first term of the denominator's exponent, which leaves $4k + 4 = 20$.\n* $5$ — dividing $20$ by $4$ before adding the $4$ back, which solves $4k = 20$ instead of $4k - 4 = 20$.\n\n**Test Day Takeaway:** Wrap the whole denominator exponent in parentheses before subtracting — the minus sign has to reach every term inside it.",
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
    question: "$\\dfrac{24m^{-4}n^{6}}{6m^{3}n^{-1}} = \\dfrac{an^{c}}{m^{d}}$\nThe given equation is true for all positive values of $m$ and $n$, where $a$, $c$, and $d$ are constants. What is the value of $a + c + d$?",
    choices: [
      // distractor: makes both exponent slips, taking d = 1 from -4 + 3 and c = 5 from 6 - 1: 4 + 5 + 1 = 10
      { id: "A", text: "$10$" },
      // distractor: adds the m exponents instead of subtracting, giving d = 1: 4 + 7 + 1 = 12
      { id: "B", text: "$12$" },
      // distractor: subtracts the n exponents as 6 - 1 = 5 instead of 6 - (-1): 4 + 5 + 7 = 16
      { id: "C", text: "$16$" },
      { id: "D", text: "$18$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Match Coefficients After Exponent Simplification**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** $\\frac{24}{6}=4$, the $m$ exponent is $-4-3=-7$, and the $n$ exponent is $6-(-1)=7$, so $a=4$, $c=7$, $d=7$ and the sum is 18.\n\n**The Full Solution:**\nStep 1: Divide the numerical parts: $\\frac{24}{6}=4$, so $a=4$.\nStep 2: Subtract exponents for each base: $m^{-4-3}=m^{-7}$ and $n^{6-(-1)}=n^{7}$.\nStep 3: Writing $4m^{-7}n^{7}$ as $\\frac{4n^{7}}{m^{7}}$ gives $c=7$ and $d=7$, so $a+c+d=18$. Check: at $m=n=2$ the original is $\\frac{24(2^{-4})(2^{6})}{6(2^{3})(2^{-1})}=\\frac{24(4)}{6(4)}=4$, and $\\frac{4(2^{7})}{2^{7}}=4$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($10$): mishandles both bases, using $-4+3$ and $6-1$.\n* Choice B ($12$): adds the $m$ exponents instead of subtracting, giving $d=1$.\n* Choice C ($16$): treats the denominator's $n^{-1}$ as $n^{1}$, giving $c=5$.\n\n**Test Day Takeaway:** Subtracting a negative exponent adds — write the subtraction with parentheses before simplifying.",
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
    question: "What is the value of $3^{0} + 3^{-2}$?",
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
    question: "$\\dfrac{3}{x^{2}\\sqrt{x}} = 3x^{k}$\nThe given equation is true for all $x > 0$, where $k$ is a constant. What is the value of $k$?",
    choices: [
      { id: "A", text: "$-\\frac{5}{2}$" },
      // distractor: subtracts the radical's exponent instead of adding it, using -(2 - 1/2) = -3/2
      { id: "B", text: "$-\\frac{3}{2}$" },
      // distractor: makes the same subtraction error and then drops the negative sign
      { id: "C", text: "$\\frac{3}{2}$" },
      // distractor: forgets that a factor in the denominator produces a negative exponent
      { id: "D", text: "$\\frac{5}{2}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Reciprocal as Negative Exponent**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The denominator is $x^{2}\\cdot x^{1/2}=x^{5/2}$, and moving it up flips the sign: $3x^{-5/2}$.\n\n**The Full Solution:**\nStep 1: Write the radical as a power: $\\sqrt{x}=x^{1/2}$.\nStep 2: Combine the denominator's factors by adding exponents: $x^{2}\\cdot x^{1/2}=x^{2+\\frac{1}{2}}=x^{5/2}$.\nStep 3: A factor in the denominator becomes a negative exponent in the numerator, so $\\frac{3}{x^{5/2}}=3x^{-5/2}$ and $k=-\\frac{5}{2}$. Check at $x=4$: $\\frac{3}{16\\cdot2}=\\frac{3}{32}$, and $3\\cdot4^{-5/2}=\\frac{3}{32}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-\\frac{3}{2}$): subtracts the radical's exponent instead of adding it.\n* Choice C ($\\frac{3}{2}$): makes that same subtraction and then loses the negative sign.\n* Choice D ($\\frac{5}{2}$): combines the denominator correctly but forgets that moving it up negates the exponent.\n\n**Test Day Takeaway:** Add exponents to combine a denominator into one power, then negate that exponent once when you lift it into the numerator.",
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
    question: "Which expression is equivalent to $\\left(2a^{-3}b^{2}\\right)\\left(\\dfrac{b^{3}}{8a^{2}}\\right)$, where $a > 0$ and $b > 0$?",
    choices: [
      // distractor: inverts the numerical factor, using 8/2 instead of 2/8
      { id: "A", text: "$\\frac{4b^{5}}{a^{5}}$" },
      { id: "B", text: "$\\frac{b^{5}}{4a^{5}}$" },
      // distractor: combines the a exponents as -3 + 2 = -1 instead of -3 - 2 = -5
      { id: "C", text: "$\\frac{b^{5}}{4a}$" },
      // distractor: swaps which variable lands in the denominator
      { id: "D", text: "$\\frac{a^{5}}{4b^{5}}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Negative Exponent Simplification**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** $\\frac{2}{8}=\\frac{1}{4}$, the $a$ exponents give $-3-2=-5$, and the $b$ exponents give $2+3=5$, so the product is $\\frac{b^{5}}{4a^{5}}$.\n\n**The Full Solution:**\nStep 1: Multiply the numerical factors: $2\\cdot\\frac{1}{8}=\\frac{1}{4}$.\nStep 2: The factor $\\frac{1}{a^{2}}$ is $a^{-2}$, so $a^{-3}\\cdot a^{-2}=a^{-5}$.\nStep 3: For $b$, $b^{2}\\cdot b^{3}=b^{5}$, giving $\\frac{1}{4}a^{-5}b^{5}=\\frac{b^{5}}{4a^{5}}$. Check: at $a=b=2$ the original is $\\left(2\\cdot\\frac{1}{8}\\cdot 4\\right)\\left(\\frac{8}{32}\\right)=1\\cdot\\frac{1}{4}=\\frac{1}{4}$, and $\\frac{32}{4(32)}=\\frac{1}{4}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{4b^{5}}{a^{5}}$): flips the numerical factor to 4.\n* Choice C ($\\frac{b^{5}}{4a}$): adds $-3$ and $+2$, treating the denominator's $a^{2}$ as a positive exponent to combine.\n* Choice D ($\\frac{a^{5}}{4b^{5}}$): puts $a$ on top and $b$ underneath, reversing both exponents.\n\n**Test Day Takeaway:** Rewrite every denominator factor as a negative exponent first; then all the exponent work is addition.",
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
    question: "$8^{n} = \\left(\\dfrac{1}{4}\\right)^{n - 10}$\nWhat value of $n$ is the solution to the given equation?",
    correctAnswer: "4",
    explanation: "**SAT Pattern: Negative Exponent Equation**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~35s):** Write both sides base 2: $2^{3n}=2^{-2(n-10)}$, so $3n=-2n+20$ and $n=4$.\n\n**The Full Solution:**\nStep 1: $8=2^{3}$ and $\\frac{1}{4}=2^{-2}$, so the equation becomes $2^{3n}=2^{-2(n-10)}$.\nStep 2: Equal powers of the same base force equal exponents: $3n=-2n+20$.\nStep 3: Adding $2n$ gives $5n=20$, so $n=4$. Check: $8^{4}=4{,}096$ and $\\left(\\frac{1}{4}\\right)^{-6}=4^{6}=4{,}096$ ✓\n\n**Common Mistakes:** Reading $\\frac{1}{4}$ as $2^{2}$ drops the reciprocal and gives $3n=2n-20$, so $n=-20$. Writing $8$ as $2^{4}$ gives $4n=-2n+20$ and the non-integer $\\frac{10}{3}$. Distributing $-2$ over $n-10$ as $-2n-20$ gives $5n=-20$ and $n=-4$.\n\n**Test Day Takeaway:** A reciprocal base is a negative exponent — convert both sides to one base before matching exponents.",
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
    question: "The table shows the number of bacteria in two cultures, $P$ and $Q$, at three times. The number of bacteria in each culture grows exponentially. Which of the following statements is true?",
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
    explanation: "**SAT Pattern: Compare Exponential Growth Models**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** At hour $0$, $640 > 250$, so $Q$ starts larger. The ratios are $\\dfrac{500}{250} = 2$ for $P$ and $\\dfrac{960}{640} = 1.5$ for $Q$, so $P$ grows faster.\n\n**The Full Solution:**\nStep 1: Read the hour-$0$ row: $P$ has $250$ bacteria and $Q$ has $640$, so $Q$ starts with more bacteria.\nStep 2: For an exponential model, divide consecutive counts. Culture $P$: $\\dfrac{500}{250} = 2$ and $\\dfrac{1000}{500} = 2$. Culture $Q$: $\\dfrac{960}{640} = 1.5$ and $\\dfrac{1440}{960} = 1.5$.\nStep 3: $P$ multiplies by $2$ every $3$ hours while $Q$ multiplies by $1.5$, so $P$ has the larger growth factor even though it starts smaller. Check: continuing the pattern, $P$ reaches $4{,}000$ at hour $12$ while $Q$ reaches only $3{,}240$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: reverses the hour-$0$ comparison; $250 < 640$.\n* Choice C: compares the raw increases over the first interval, $320$ for $Q$ against $250$ for $P$; exponential growth is compared by RATIOS, not differences.\n* Choice D: the factors are $2$ and $1.5$, not equal.\n\n**Test Day Takeaway:** Compare exponential models by dividing consecutive outputs, and keep the starting value and the growth factor as two separate comparisons.",
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
    question: "The functions $J$ and $K$ give the values, in dollars, of two savings accounts $t$ years after they were opened, where $J(t) = 2{,}000(1.05)^{t}$ and $K(t) = 2{,}000(1.09)^{t}$. To the nearest dollar, how much greater is $K(10)$ than $J(10)$?",
    choices: [
      // distractor: uses simple interest instead of compounding
      { id: "A", text: "$800$" },
      { id: "B", text: "$1{,}477$" },
      // distractor: reports $J(10)$ rather than the difference
      { id: "C", text: "$3{,}258$" },
      // distractor: reports $K(10)$ rather than the difference
      { id: "D", text: "$4{,}735$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Compare Compound Interest**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** $2{,}000(1.09)^{10} \\approx 4{,}734.73$ and $2{,}000(1.05)^{10} \\approx 3{,}257.79$; the difference is about $1{,}477$ dollars.\n\n**The Full Solution:**\nStep 1: Evaluate each function at $t = 10$. For $K$: $2{,}000(1.09)^{10} \\approx 2{,}000(2.36736) \\approx 4{,}734.73$ dollars.\nStep 2: For $J$: $2{,}000(1.05)^{10} \\approx 2{,}000(1.62889) \\approx 3{,}257.79$ dollars.\nStep 3: Subtract: $4{,}734.73 - 3{,}257.79 \\approx 1{,}476.94$, which rounds to $1{,}477$ dollars. Check the sizes: $K(10)$ is roughly $45\\%$ larger than $J(10)$, and $\\dfrac{1{,}477}{3{,}258} \\approx 0.45$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($800$): treats the growth as simple interest, computing $2{,}000(0.09)(10) - 2{,}000(0.05)(10) = 1{,}800 - 1{,}000$.\n* Choice C ($3{,}258$): stops after evaluating $J(10)$.\n* Choice D ($4{,}735$): stops after evaluating $K(10)$ and never subtracts.\n\n**Test Day Takeaway:** \"How much greater\" always ends in a subtraction. Evaluate both exponential models fully before comparing — the gap grows much faster than the rate difference suggests.",
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
    question: "The table shows the purchase price and the annual percent decrease in value of two machines, $R$ and $S$. The value of each machine decreases exponentially. Which of the following statements is true?",
    diagram: { type: "dataTable", params: { headers: ["Machine", "Purchase price (dollars)", "Annual percent decrease"], rows: [["R", "36,000", "20%"], ["S", "24,000", "10%"]] } },
    choices: [
      { id: "A", text: "Machine $R$ loses a greater percent of its value each year, and Machine $R$ is worth more than Machine $S$ at the end of year $3$." },
      // distractor: true through year 3 but false from year 4 on, when Machine $S$ is worth more
      { id: "B", text: "Machine $R$ loses a greater percent of its value each year, and Machine $R$ is worth more than Machine $S$ at the end of every year." },
      // distractor: confuses percent rate with dollar loss: $S$ loses $2{,}400$ and $R$ loses $7{,}200$ in year 1
      { id: "C", text: "Machine $S$ loses a greater dollar amount of value during the first year than Machine $R$ does." },
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
    question: "An algae colony has $150$ cells at time $t = 0$, and the number of cells doubles every $6$ hours. The function $f$ gives the number of cells $t$ hours after $t = 0$. Which equation defines $f$?",
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
    question: "A car was bought for $\\$24{,}000$, and its value decreases by $15\\%$ each year. Which equation gives the value $V(t)$, in dollars, of the car $t$ years after it was bought?",
    choices: [
      // distractor: uses the loss rate 0.15 as the growth factor instead of 1 - 0.15
      { id: "A", text: "$V(t) = 24{,}000(0.15)^{t}$" },
      { id: "B", text: "$V(t) = 24{,}000(0.85)^{t}$" },
      // distractor: uses 1.15, which increases the value by 15% each year
      { id: "C", text: "$V(t) = 24{,}000(1.15)^{t}$" },
      // distractor: uses the value after one year, 20,400, as the value at t = 0
      { id: "D", text: "$V(t) = 20{,}400(0.85)^{t}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Compound Depreciation Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Losing $15\\%$ each year keeps $85\\%$, and the value at $t = 0$ is $\\$24{,}000$, so $V(t) = 24{,}000(0.85)^{t}$.\n\n**The Full Solution:**\nStep 1: A decrease of $15\\%$ leaves $100\\% - 15\\% = 85\\%$ of the value, so each year the value is multiplied by $0.85$.\nStep 2: An exponential decay model has the form $V(t) = V_{0}(1 - r)^{t}$, with $V_{0} = 24{,}000$ and $r = 0.15$.\nStep 3: So $V(t) = 24{,}000(0.85)^{t}$. Check at $t = 1$: $24{,}000(0.85) = 20{,}400$, which is $24{,}000 - 0.15(24{,}000) = 24{,}000 - 3{,}600$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($V(t) = 24{,}000(0.15)^{t}$): uses the loss rate as the factor, giving only $\\$3{,}600$ after one year.\n* Choice C ($V(t) = 24{,}000(1.15)^{t}$): increases the value by $15\\%$ each year instead of decreasing it.\n* Choice D ($V(t) = 20{,}400(0.85)^{t}$): starts from the value after one year instead of the purchase price.\n\n**Test Day Takeaway:** A percent decrease becomes the factor $1 - r$, and the coefficient is the value when $t = 0$.",
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
    question: "The table shows the mass, in grams, of a sample of a radioactive substance at two times. The mass of the sample decreases exponentially. What is the mass, in grams, of the sample at $72$ hours?",
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
    skills: ["exponential-functions"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Maria deposits $\\$2{,}500$ in a savings account. The balance increases by $8\\%$ each year, and she makes no other deposits or withdrawals. Which of the following is closest to the balance, in dollars, after $3$ years?",
    choices: [
      // distractor: applies the 8% increase for only 1 year
      { id: "A", text: "$2{,}700$" },
      // distractor: adds 8% of the original deposit, 200 dollars, each year instead of multiplying by 1.08
      { id: "B", text: "$3{,}100$" },
      { id: "C", text: "$3{,}150$" },
      // distractor: multiplies 2,500(1.08) by 3 instead of raising 1.08 to the 3rd power
      { id: "D", text: "$8{,}100$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Compound Interest**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** An $8\\%$ yearly increase multiplies the balance by $1.08$ each year: $2{,}500(1.08)^{3} \\approx 3{,}149.28$, which is closest to $3{,}150$.\n\n**The Full Solution:**\nStep 1: Increasing by $8\\%$ means multiplying by $1 + 0.08 = 1.08$, so the balance after $t$ years is $2{,}500(1.08)^{t}$.\nStep 2: Substitute $t = 3$: $2{,}500(1.08)^{3} = 2{,}500(1.259712)$.\nStep 3: This is $3{,}149.28$, which is closest to $3{,}150$. Check year by year: $2{,}500 \\to 2{,}700 \\to 2{,}916 \\to 3{,}149.28$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2{,}700$): applies the increase for only $1$ year.\n* Choice B ($3{,}100$): adds $8\\%$ of the original deposit, $\\$200$, each year instead of multiplying by $1.08$.\n* Choice D ($8{,}100$): multiplies $2{,}500(1.08)$ by $3$ instead of raising $1.08$ to the $3$rd power.\n\n**Test Day Takeaway:** A percent increase \"each year\" is a repeated multiplication: the number of years goes in the exponent, not in front.",
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
    question: "$D(t) = 500(1.2)^{\\frac{t}{3}}$\nThe function $D$ models the number of deer in a park $t$ years after 2015. According to the model, the number of deer increases by what percent every $6$ years?",
    choices: [
      // distractor: gives the percent increase every 3 years, not every 6 years
      { id: "A", text: "$20\\%$" },
      // distractor: doubles the 3-year increase of 20% instead of multiplying the factors
      { id: "B", text: "$40\\%$" },
      { id: "C", text: "$44\\%$" },
      // distractor: reads the growth factor 1.44 as a 144% increase
      { id: "D", text: "$144\\%$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Exponential Growth Factor over a Period**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Every $6$ years the exponent $\\dfrac{t}{3}$ increases by $2$, so the number of deer is multiplied by $(1.2)^{2} = 1.44$, a $44\\%$ increase.\n\n**The Full Solution:**\nStep 1: When $t$ increases by $6$, the exponent $\\dfrac{t}{3}$ increases by $\\dfrac{6}{3} = 2$.\nStep 2: So $D(t + 6) = 500(1.2)^{\\frac{t}{3} + 2} = D(t)(1.2)^{2} = 1.44D(t)$.\nStep 3: Multiplying by $1.44$ is an increase of $1.44 - 1 = 0.44$, or $44\\%$. Check with numbers: $D(0) = 500$ and $D(6) = 500(1.44) = 720$, and $720 - 500 = 220$, which is $44\\%$ of $500$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($20\\%$): gives the increase every $3$ years, not every $6$ years.\n* Choice B ($40\\%$): adds the two $3$-year increases of $20\\%$ instead of multiplying the factors.\n* Choice D ($144\\%$): reads the growth factor $1.44$ as the percent increase.\n\n**Test Day Takeaway:** For $a(b)^{\\frac{t}{n}}$, the factor over any time span $s$ is $b^{\\frac{s}{n}}$; subtract $1$ from the factor to get the percent increase.",
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
    question: "$f(x) = 640(0.75)^{x}$\nThe $y$-intercept of the graph of the given function in the $xy$-plane is $(0, b)$. What is the value of $b$?",
    correctAnswer: "640",
    explanation: "**SAT Pattern: y-intercept of Exponential**\n\n**The correct answer is $640$.**\n\n**The Fast Way (~10s):** The graph crosses the $y$-axis where $x = 0$, and $f(0) = 640(0.75)^{0} = 640$.\n\n**The Full Solution:**\nStep 1: Every point on the $y$-axis has $x$-coordinate $0$, so $b = f(0)$.\nStep 2: Substitute $x = 0$: $f(0) = 640(0.75)^{0}$.\nStep 3: Any nonzero number to the power $0$ is $1$, so $f(0) = 640(1) = 640$ and $b = 640$. Check: $f(1) = 640(0.75) = 480$, smaller than $640$, as a decreasing exponential should be ✓\n\n**Common Mistakes:** Reporting $480$, the value at $x = 1$ instead of $x = 0$. Reporting $0.75$, the base, which sets the rate of decay rather than the starting value.\n\n**Test Day Takeaway:** For $f(x) = ab^{x}$, the $y$-intercept is always $(0, a)$; the base never affects it.",
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
    question: "The function $M(t) = 320(1.15)^{t}$ gives the number of members of a hiking club $t$ years after the club was founded. What is the best interpretation of $320$ in this context?",
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
    question: "The value, in dollars, of a rare coin $t$ years after $2020$ is modeled by $V(t) = ab^{t}$, where $a$ and $b$ are positive constants. The table shows two values of $V(t)$. What is the value of $b$?",
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
    question: "Which expression is equivalent to $-4(2r - 7) + 3r$?",
    choices: [
      // distractor: subtracts the $3r$ instead of adding it, giving $-8r - 3r = -11r$
      { id: "A", text: "$-11r + 28$" },
      // distractor: multiplies $-4$ by $-7$ but keeps the result negative, giving $-28$
      { id: "B", text: "$-5r - 28$" },
      { id: "C", text: "$-5r + 28$" },
      // distractor: distributes $+4$ instead of $-4$, giving $8r - 28 + 3r$
      { id: "D", text: "$11r - 28$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Distribute a Negative**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Distributing gives $-8r + 28$, and adding the trailing $3r$ leaves $-5r + 28$.\n\n**The Full Solution:**\nStep 1: Multiply each term inside the parentheses by $-4$: $-4(2r) = -8r$ and $-4(-7) = +28$.\nStep 2: The expression becomes $-8r + 28 + 3r$.\nStep 3: Combine the like terms $-8r$ and $3r$ to get $-5r + 28$. Check: at $r = 1$ the original is $-4(-5) + 3 = 23$, and $-5(1) + 28 = 23$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-11r + 28$): treats the $+3r$ as a subtraction, combining $-8r$ and $-3r$.\n* Choice B ($-5r - 28$): forgets that a negative times a negative is positive, so $-4(-7)$ is recorded as $-28$.\n* Choice D ($11r - 28$): drops the minus sign from the $-4$ before distributing, flipping both signs.\n\n**Test Day Takeaway:** Attach the minus sign to the factor before distributing, then combine like terms — checking one value of the variable catches a stray sign instantly.",
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
    question: "$(4x + c)(3x - 5) = 12x^{2} + x - 35$\nIn the given equation, $c$ is a constant. If the equation is true for all values of $x$, what is the value of $c$?",
    choices: [
      // distractor: solves $-5c = 35$, flipping the sign of the constant term
      { id: "A", text: "$-7$" },
      // distractor: reports the coefficient of $x$, $1$, rather than the constant $c$
      { id: "B", text: "$1$" },
      // distractor: quotes the $5$ inside $3x - 5$ instead of solving for $c$
      { id: "C", text: "$5$" },
      { id: "D", text: "$7$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: FOIL Two Binomials**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** The constant term of the product is $c(-5) = -35$, so $c = 7$.\n\n**The Full Solution:**\nStep 1: Expand: $(4x + c)(3x - 5) = 12x^{2} - 20x + 3cx - 5c$.\nStep 2: The constant term is $-5c$, and it must equal $-35$, so $c = 7$.\nStep 3: Confirm with the middle term: $-20 + 3(7) = 1$, matching $1x$. Check: $(4x + 7)(3x - 5) = 12x^{2} + x - 35$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-7$): loses a negative sign, since $-5c = -35$ gives a positive $c$.\n* Choice B ($1$): reads off the coefficient of $x$, which is $-20 + 3c$, not $c$.\n* Choice C ($5$): copies a number out of the given binomial.\n\n**Test Day Takeaway:** The constant term of a product comes only from the two constants — solve there first, then use the middle term as a check.",
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
    question: "$(2x - 5)(x + k) = 2x^{2} + bx - 35$\nIn the given equation, $b$ and $k$ are constants. If the equation is true for all values of $x$, what is the value of $b$?",
    correctAnswer: "9",
    explanation: "**SAT Pattern: Constant Term from Factored Form**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~25s):** The constant term is $-5k=-35$, so $k=7$, and $b=2k-5=9$.\n\n**The Full Solution:**\nStep 1: Expand: $(2x-5)(x+k)=2x^{2}+2kx-5x-5k=2x^{2}+(2k-5)x-5k$.\nStep 2: Set the constant term equal to $-35$: $-5k=-35$, so $k=7$.\nStep 3: Match the coefficients of $x$: $b=2k-5=14-5=9$. Check: $(2x-5)(x+7)=2x^{2}+9x-35$ ✓\n\n**Common Mistakes:**\n* $7$: reported $k$ instead of $b$.\n* $19$: used $2k+5$ instead of $2k-5$, dropping the sign of the $-5$.\n* $-35$: reported the constant term already given in the equation.\n\n**Test Day Takeaway:** The constant term of a product of binomials is the product of their constants — solve for the parameter there first, then match the middle coefficient.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "foil-identify-constant",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-am-059",
    domain: "advanced-math",
    skills: ["combining-like-terms", "distributive-property"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "$(x^{2} + kx + 3)(3x - 2) = 3x^{3} + bx^{2} + cx - 6$\nThe given equation is true for all values of $x$, where $b$, $c$, and $k$ are constants. If $b = 7$, what is the value of $c$?",
    choices: [
      // distractor: forgets the 9x term from 3(3x), giving c = -2k = -6
      { id: "A", text: "$-6$" },
      { id: "B", text: "$3$" },
      // distractor: forgets the -2kx term from kx(-2), giving c = 9
      { id: "C", text: "$9$" },
      // distractor: takes kx(-2) as +2kx, giving c = 9 + 2k = 15
      { id: "D", text: "$15$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Match Coefficients of Equivalent Polynomials**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** The $x^{2}$-terms of the product are $-2x^{2} + 3kx^{2}$, so $3k - 2 = 7$ and $k = 3$. The $x$-terms are $-2kx + 9x$, so $c = 9 - 2(3) = 3$.\n\n**The Full Solution:**\nStep 1: Expand the left side: $(x^{2} + kx + 3)(3x - 2) = 3x^{3} - 2x^{2} + 3kx^{2} - 2kx + 9x - 6 = 3x^{3} + (3k - 2)x^{2} + (9 - 2k)x - 6$.\nStep 2: Match the $x^{2}$-coefficients: $b = 3k - 2 = 7$, so $3k = 9$ and $k = 3$.\nStep 3: Match the $x$-coefficients: $c = 9 - 2k = 9 - 6 = 3$. Check: $(x^{2} + 3x + 3)(3x - 2) = 3x^{3} + 7x^{2} + 3x - 6$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): forgets the $9x$ term that comes from $3(3x)$.\n* Choice C ($9$): forgets the $-2kx$ term that comes from $kx(-2)$.\n* Choice D ($15$): takes $kx(-2)$ as $+2kx$, so it gets $c = 9 + 2k$.\n\n**Test Day Takeaway:** When two polynomials are equal for all $x$, match coefficients one power at a time: use the coefficient you know to find the parameter, then the parameter to find the coefficient you need.",
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
    question: "Which expression is equivalent to $(7a^{2} - 3a + 6) + (2a^{2} + 8a - 11)$?",
    choices: [
      // distractor: combined -3a and 8a as 8 - 3 = 5 but kept the sign of the first term, giving -5a
      { id: "A", text: "$9a^{2}-5a-5$" },
      { id: "B", text: "$9a^{2}+5a-5$" },
      // distractor: computed the constants as 6 - (-11) = 17 instead of 6 + (-11) = -5
      { id: "C", text: "$9a^{2}+5a+17$" },
      // distractor: added the exponents of the two a-squared terms instead of adding their coefficients
      { id: "D", text: "$9a^{4}+5a-5$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Combine Like Terms**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Add matching terms: $7a^{2}+2a^{2}=9a^{2}$, $-3a+8a=5a$, $6-11=-5$.\n\n**The Full Solution:**\nStep 1: Group like terms: $(7a^{2}+2a^{2})+(-3a+8a)+(6-11)$.\nStep 2: Combine each group: $9a^{2}$, $5a$, and $-5$.\nStep 3: The sum is $9a^{2}+5a-5$. Check at $a=2$: the original is $(28-6+6)+(8+16-11)=28+13=41$, and $36+10-5=41$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($9a^{2}-5a-5$): combines $-3a$ and $8a$ as $8-3=5$ but keeps the sign of the first term, giving $-5a$.\n* Choice C ($9a^{2}+5a+17$): computes the constants as $6-(-11)=17$.\n* Choice D ($9a^{4}+5a-5$): adds the exponents of the two $a^{2}$ terms instead of their coefficients.\n\n**Test Day Takeaway:** Adding polynomials only ever changes coefficients — the exponents stay exactly where they were.",
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
    question: "Which expression is equivalent to $(5x^{2} - 3x + 8) - (2x^{2} + 7x - 4)$?",
    choices: [
      // distractor: subtracts the x^2-terms but adds the x-terms and constants, using -3x + 7x and 8 + (-4)
      { id: "A", text: "$3x^{2} + 4x + 4$" },
      // distractor: stops distributing the minus sign before the constant, computing 8 - 4 = 4
      { id: "B", text: "$3x^{2} - 10x + 4$" },
      // distractor: adds the two polynomials instead of subtracting them
      { id: "C", text: "$7x^{2} + 4x + 4$" },
      { id: "D", text: "$3x^{2} - 10x + 12$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Subtract Polynomials**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** Send the minus sign through all three terms of the second polynomial: $5x^{2} - 3x + 8 - 2x^{2} - 7x + 4 = 3x^{2} - 10x + 12$.\n\n**The Full Solution:**\nStep 1: Distribute the subtraction to every term in the second parentheses: $5x^{2} - 3x + 8 - 2x^{2} - 7x + 4$.\nStep 2: Group like terms: $(5x^{2} - 2x^{2}) + (-3x - 7x) + (8 + 4)$.\nStep 3: Combine: $3x^{2} - 10x + 12$. Check at $x = 1$: the original is $(5 - 3 + 8) - (2 + 7 - 4) = 10 - 5 = 5$, and $3 - 10 + 12 = 5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3x^{2} + 4x + 4$): subtracts the $x^{2}$-terms but adds the other two pairs, using $-3x + 7x$ and $8 + (-4)$.\n* Choice B ($3x^{2} - 10x + 4$): stops distributing the minus sign before the constant, computing $8 - 4$ instead of $8 + 4$.\n* Choice C ($7x^{2} + 4x + 4$): adds the two polynomials instead of subtracting them.\n\n**Test Day Takeaway:** A minus sign in front of parentheses changes the sign of every term inside, the constant included.",
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
    question: "$(3x - 4)(2x + k) = 6x^{2} + bx - 28$\nThe given equation is true for all values of $x$, where $b$ and $k$ are constants. What is the value of $b$?",
    choices: [
      // distractor: solves -4k = -28 as k = -7, then computes 3(-7) - 8 = -29
      { id: "A", text: "$-29$" },
      // distractor: finds k = 7 but writes the middle coefficient as 8 - 3k = -13
      { id: "B", text: "$-13$" },
      { id: "C", text: "$13$" },
      // distractor: reports 3k = 21, leaving out the -8x from the inner product
      { id: "D", text: "$21$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Match Coefficients of Equivalent Polynomials**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** The constant terms give $-4k = -28$, so $k = 7$; the $x$-terms give $b = 3k - 8 = 13$.\n\n**The Full Solution:**\nStep 1: Expand the left side: $(3x - 4)(2x + k) = 6x^{2} + 3kx - 8x - 4k = 6x^{2} + (3k - 8)x - 4k$.\nStep 2: Because the equation holds for all $x$, the constant terms match: $-4k = -28$, so $k = 7$.\nStep 3: The $x$-coefficients match: $b = 3k - 8 = 3(7) - 8 = 13$. Check: $(3x - 4)(2x + 7) = 6x^{2} + 21x - 8x - 28 = 6x^{2} + 13x - 28$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-29$): solves $-4k = -28$ as $k = -7$, then computes $3(-7) - 8 = -29$.\n* Choice B ($-13$): uses $k = 7$ but writes the middle coefficient as $8 - 3k$, flipping its sign.\n* Choice D ($21$): reports $3k$, the product of the outer terms, and leaves out the $-8x$ from the inner terms.\n\n**Test Day Takeaway:** When two polynomials are equal for all $x$, match the coefficient you can solve in one step first (here the constant), then use it to get the one asked for.",
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
    question: "Which expression is equivalent to $9x^{2} - 49$?",
    choices: [
      // distractor: writes a squared binomial, which has a middle term -42x
      { id: "A", text: "$(3x - 7)^{2}$" },
      // distractor: takes the square root of 9x^2 but not of 49
      { id: "B", text: "$(3x - 49)(3x + 49)$" },
      { id: "C", text: "$(3x - 7)(3x + 7)$" },
      // distractor: takes the square root of 49 but not of 9x^2
      { id: "D", text: "$(9x - 7)(9x + 7)$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Difference of Squares**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $9x^{2} = (3x)^{2}$ and $49 = 7^{2}$, so $9x^{2} - 49 = (3x - 7)(3x + 7)$.\n\n**The Full Solution:**\nStep 1: Write each term as a square: $9x^{2} = (3x)^{2}$ and $49 = 7^{2}$.\nStep 2: Apply $a^{2} - b^{2} = (a - b)(a + b)$ with $a = 3x$ and $b = 7$.\nStep 3: The result is $(3x - 7)(3x + 7)$. Check: $(3x - 7)(3x + 7) = 9x^{2} + 21x - 21x - 49 = 9x^{2} - 49$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($(3x - 7)^{2}$): squares a binomial, which produces a middle term: $9x^{2} - 42x + 49$.\n* Choice B ($(3x - 49)(3x + 49)$): takes the square root of $9x^{2}$ but not of $49$; the product is $9x^{2} - 2{,}401$.\n* Choice D ($(9x - 7)(9x + 7)$): takes the square root of $49$ but not of $9x^{2}$; the product is $81x^{2} - 49$.\n\n**Test Day Takeaway:** A difference of two perfect squares factors as (difference of the roots)(sum of the roots); take the square root of both terms.",
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
    question: "$81x^{4} - 16y^{4}$\nWhich of the following is a factored form of the given expression?",
    choices: [
      // distractor: writes 81x^4 as (9x)^2, so the product is 81x^2 - 16y^4
      { id: "A", text: "$(9x - 4y^{2})(9x + 4y^{2})$" },
      // distractor: squares both linear factors, which gives (9x^2 - 4y^2)^2 with a middle term
      { id: "B", text: "$(3x - 2y)^{2}(3x + 2y)^{2}$" },
      // distractor: takes the square root of the sum factor 9x^2 + 4y^2 as well
      { id: "C", text: "$(3x - 2y)(3x + 2y)(3x^{2} + 2y^{2})$" },
      { id: "D", text: "$(3x - 2y)(3x + 2y)(9x^{2} + 4y^{2})$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Two-Step Difference of Squares**\n\n**Choice D is correct.**\n\n**The Fast Way (~35s):** $81x^{4} - 16y^{4} = (9x^{2} - 4y^{2})(9x^{2} + 4y^{2})$, and the first factor splits again into $(3x - 2y)(3x + 2y)$.\n\n**The Full Solution:**\nStep 1: Treat the expression as a difference of squares: $81x^{4} = (9x^{2})^{2}$ and $16y^{4} = (4y^{2})^{2}$, so it equals $(9x^{2} - 4y^{2})(9x^{2} + 4y^{2})$.\nStep 2: The factor $9x^{2} - 4y^{2}$ is again a difference of squares: $(3x - 2y)(3x + 2y)$. The sum $9x^{2} + 4y^{2}$ does not factor over the real numbers.\nStep 3: So $81x^{4} - 16y^{4} = (3x - 2y)(3x + 2y)(9x^{2} + 4y^{2})$. Check at $x = 1$, $y = 1$: $81 - 16 = 65$, and $(1)(5)(13) = 65$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($(9x - 4y^{2})(9x + 4y^{2})$): writes $81x^{4}$ as $(9x)^{2}$, but $(9x)^{2} = 81x^{2}$; the product is $81x^{2} - 16y^{4}$.\n* Choice B ($(3x - 2y)^{2}(3x + 2y)^{2}$): this equals $(9x^{2} - 4y^{2})^{2}$, which contains a middle term $-72x^{2}y^{2}$.\n* Choice C ($(3x - 2y)(3x + 2y)(3x^{2} + 2y^{2})$): takes the square root of the sum factor as well; $9x^{2} + 4y^{2}$ must stay whole.\n\n**Test Day Takeaway:** After a first difference-of-squares split, check the difference factor again; the sum factor stays as it is.",
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
    question: "If $a^{2} - b^{2} = 96$ and $a + b = 16$, what is the value of $a - b$?",
    correctAnswer: "6",
    explanation: "**SAT Pattern: Difference of Squares Application**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~15s):** $a^{2} - b^{2} = (a + b)(a - b)$, so $16(a - b) = 96$ and $a - b = 6$.\n\n**The Full Solution:**\nStep 1: Factor the left side of the first equation: $a^{2} - b^{2} = (a + b)(a - b)$.\nStep 2: Substitute $a + b = 16$: $16(a - b) = 96$.\nStep 3: Divide by $16$: $a - b = 6$. Check: with $a + b = 16$ and $a - b = 6$, $a = 11$ and $b = 5$, and $11^{2} - 5^{2} = 121 - 25 = 96$ ✓\n\n**Common Mistakes:**\n* $80$: subtracts $96 - 16$ instead of dividing.\n* $1{,}536$: multiplies $96 \\cdot 16$ instead of dividing.\n* $11$: solves for $a$ and reports it instead of $a - b$.\n\n**Test Day Takeaway:** When an item gives $a^{2} - b^{2}$ and one of $a + b$ or $a - b$, factor and divide; there is no need to find $a$ and $b$.",
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
    question: "Which expression is equivalent to $(x^{2} - 9)(x^{2} + 9)(x^{4} + 81)$?",
    choices: [
      { id: "A", text: "$x^{8} - 6{,}561$" },
      // distractor: squares x^4 in the last step but leaves 81 unsquared
      { id: "B", text: "$x^{8} - 81$" },
      // distractor: loses the minus sign, treating the last product as a sum of squares
      { id: "C", text: "$x^{8} + 6{,}561$" },
      // distractor: computes (x^4)^2 as x^16 by multiplying 4 by 4 twice
      { id: "D", text: "$x^{16} - 6{,}561$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Nested Difference of Squares**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** $(x^{2} - 9)(x^{2} + 9) = x^{4} - 81$, and $(x^{4} - 81)(x^{4} + 81) = x^{8} - 6{,}561$.\n\n**The Full Solution:**\nStep 1: Multiply the first two factors as a difference of squares: $(x^{2} - 9)(x^{2} + 9) = x^{4} - 81$.\nStep 2: The remaining product is another difference of squares: $(x^{4} - 81)(x^{4} + 81) = (x^{4})^{2} - 81^{2}$.\nStep 3: Since $(x^{4})^{2} = x^{8}$ and $81^{2} = 6{,}561$, the expression equals $x^{8} - 6{,}561$. Check at $x = 1$: $(-8)(10)(82) = -6{,}560$, and $1 - 6{,}561 = -6{,}560$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($x^{8} - 81$): squares $x^{4}$ in the last step but leaves $81$ unsquared.\n* Choice C ($x^{8} + 6{,}561$): treats the last product as a sum of squares and loses the minus sign.\n* Choice D ($x^{16} - 6{,}561$): multiplies the exponents $4 \\cdot 4$ instead of computing $(x^{4})^{2} = x^{8}$.\n\n**Test Day Takeaway:** Pair the conjugates one at a time; each pair collapses to a difference of squares, which sets up the next pair.",
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
    question: "Which expression is equivalent to $(3w + 5)^{2}$?",
    choices: [
      // distractor: doubles 3w instead of squaring it
      { id: "A", text: "$6w^{2} + 30w + 25$" },
      // distractor: squares each term and drops the middle term
      { id: "B", text: "$9w^{2} + 25$" },
      // distractor: includes only one of the two cross products 15w
      { id: "C", text: "$9w^{2} + 15w + 25$" },
      { id: "D", text: "$9w^{2} + 30w + 25$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Expand Perfect Square**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** $(a + b)^{2} = a^{2} + 2ab + b^{2}$: $(3w)^{2} + 2(3w)(5) + 5^{2} = 9w^{2} + 30w + 25$.\n\n**The Full Solution:**\nStep 1: Write the square as a product: $(3w + 5)(3w + 5)$.\nStep 2: Multiply term by term: $9w^{2} + 15w + 15w + 25$.\nStep 3: Combine the middle terms: $9w^{2} + 30w + 25$. Check at $w = 1$: $(3 + 5)^{2} = 64$, and $9 + 30 + 25 = 64$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6w^{2} + 30w + 25$): doubles $3w$ instead of squaring it.\n* Choice B ($9w^{2} + 25$): squares each term and drops the middle term $2(3w)(5)$.\n* Choice C ($9w^{2} + 15w + 25$): counts only one of the two cross products $15w$.\n\n**Test Day Takeaway:** A squared binomial always has a middle term equal to twice the product of its two terms.",
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
    question: "Which expression is equivalent to $49t^{2} - 56t + 16$?",
    choices: [
      // distractor: uses 16 instead of its square root 4 inside the binomial
      { id: "A", text: "$(7t - 16)^{2}$" },
      // distractor: ignores the sign of the middle term -56t
      { id: "B", text: "$(7t + 4)^{2}$" },
      // distractor: writes a difference of squares, which has no middle term
      { id: "C", text: "$(7t - 4)(7t + 4)$" },
      { id: "D", text: "$(7t - 4)^{2}$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Factor Perfect Square Trinomial**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** $49t^{2} = (7t)^{2}$, $16 = 4^{2}$, and $2(7t)(4) = 56t$ with a minus sign, so the expression is $(7t - 4)^{2}$.\n\n**The Full Solution:**\nStep 1: The first and last terms are perfect squares: $49t^{2} = (7t)^{2}$ and $16 = 4^{2}$.\nStep 2: The middle term is twice their product with a negative sign: $-2(7t)(4) = -56t$, which matches.\nStep 3: So the expression equals $(7t - 4)^{2}$. Check at $t = 1$: $49 - 56 + 16 = 9$, and $(7 - 4)^{2} = 9$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($(7t - 16)^{2}$): uses $16$ instead of its square root; this expands to $49t^{2} - 224t + 256$.\n* Choice B ($(7t + 4)^{2}$): ignores the negative middle term; this expands to $49t^{2} + 56t + 16$.\n* Choice C ($(7t - 4)(7t + 4)$): writes a difference of squares, $49t^{2} - 16$, which has no middle term.\n\n**Test Day Takeaway:** To spot a perfect-square trinomial, check that the middle term is $\\pm 2$ times the product of the square roots of the end terms; its sign is the sign inside the binomial.",
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
    question: "$x^{2} - 26x + c$\nIn the given expression, $c$ is a constant. The expression is equivalent to $(x - d)^{2}$, where $d$ is a constant. What is the value of $c$?",
    correctAnswer: "169",
    explanation: "**SAT Pattern: Complete the Square (Find Constant)**\n\n**The correct answer is $169$.**\n\n**The Fast Way (~20s):** $(x - d)^{2} = x^{2} - 2dx + d^{2}$, so $2d = 26$, $d = 13$, and $c = 13^{2} = 169$.\n\n**The Full Solution:**\nStep 1: Expand the binomial: $(x - d)^{2} = x^{2} - 2dx + d^{2}$.\nStep 2: Match the $x$-terms: $-2d = -26$, so $d = 13$.\nStep 3: Match the constants: $c = d^{2} = 169$. Check: $(x - 13)^{2} = x^{2} - 26x + 169$ ✓\n\n**Common Mistakes:**\n* $13$: stops at $d$ and reports half the coefficient instead of its square.\n* $676$: squares $26$ without halving it first.\n* $-169$: carries the minus sign of $-26x$ into the constant; a square is never negative.\n\n**Test Day Takeaway:** For $x^{2} + bx + c$ to be a perfect square, $c$ must equal $\\left(\\frac{b}{2}\\right)^{2}$: halve, then square.",
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
    question: "$9y^{2} + cy + 64$\nIn the given expression, $c$ is a constant. If the expression is equivalent to $(ay + b)^{2}$, where $a$ and $b$ are constants, which of the following gives all possible values of $c$?",
    choices: [
      // distractor: uses c = ab = 24, leaving out the factor of 2 in the middle term 2ab
      { id: "A", text: "$-24$ and $24$" },
      { id: "B", text: "$-48$ and $48$" },
      // distractor: finds 48 but forgets that (3y - 8)^2 gives -48
      { id: "C", text: "$48$ only" },
      // distractor: multiplies 9 and 64 instead of their square roots
      { id: "D", text: "$-576$ and $576$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Find k for Perfect Square Trinomial (Both Signs)**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** $(ay + b)^{2} = a^{2}y^{2} + 2aby + b^{2}$, so $a = \\pm 3$, $b = \\pm 8$, and $c = 2ab = \\pm 48$.\n\n**The Full Solution:**\nStep 1: Expand: $(ay + b)^{2} = a^{2}y^{2} + 2aby + b^{2}$. Matching terms gives $a^{2} = 9$, $b^{2} = 64$, and $c = 2ab$.\nStep 2: So $a = 3$ or $a = -3$, and $b = 8$ or $b = -8$. The product $ab$ is $24$ when the signs agree and $-24$ when they differ.\nStep 3: Therefore $c = 2ab$ is $48$ or $-48$. Check: $(3y + 8)^{2} = 9y^{2} + 48y + 64$ and $(3y - 8)^{2} = 9y^{2} - 48y + 64$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-24$ and $24$): uses $ab = \\pm 24$ and leaves out the factor of $2$ in the middle term $2ab$.\n* Choice C ($48$ only): finds the positive value but forgets that $(3y - 8)^{2}$ also works.\n* Choice D ($-576$ and $576$): multiplies $9 \\cdot 64$ instead of the square roots $3$ and $8$.\n\n**Test Day Takeaway:** A perfect-square trinomial's middle coefficient is $\\pm 2\\sqrt{\\text{first}}\\sqrt{\\text{last}}$; both signs work unless the item rules one out.",
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
    question: "Which expression is equivalent to $\\frac{x^{2} - 9}{x^{2} + 7x + 12}$, where $x > 0$?",
    choices: [
      // distractor: cancels the x^2 terms as though they were common factors
      { id: "A", text: "$\\frac{-9}{7x + 12}$" },
      { id: "B", text: "$\\frac{x - 3}{x + 4}$" },
      // distractor: factors x^2 - 9 as (x + 3)^2 before cancelling
      { id: "C", text: "$\\frac{x + 3}{x + 4}$" },
      // distractor: factors the denominator as (x + 3)^2 instead of (x + 3)(x + 4)
      { id: "D", text: "$\\frac{x - 3}{x + 3}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Simplify Rational Expression (Cancel Common Factor)**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Factor: $\\frac{(x - 3)(x + 3)}{(x + 3)(x + 4)}$, and cancel $x + 3$ to get $\\frac{x - 3}{x + 4}$.\n\n**The Full Solution:**\nStep 1: Factor the numerator as a difference of squares: $x^{2} - 9 = (x - 3)(x + 3)$.\nStep 2: Factor the denominator: $x^{2} + 7x + 12 = (x + 3)(x + 4)$, since $3 \\cdot 4 = 12$ and $3 + 4 = 7$.\nStep 3: Cancel the common factor $x + 3$, which is not zero for $x > 0$: $\\frac{x - 3}{x + 4}$. Check at $x = 1$: $\\frac{1 - 9}{1 + 7 + 12} = \\frac{-8}{20} = -\\frac{2}{5}$, and $\\frac{1 - 3}{1 + 4} = -\\frac{2}{5}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{-9}{7x + 12}$): cancels the $x^{2}$ terms as if they were factors; only common factors cancel, not common terms.\n* Choice C ($\\frac{x + 3}{x + 4}$): factors $x^{2} - 9$ as $(x + 3)^{2}$, then cancels one $x + 3$.\n* Choice D ($\\frac{x - 3}{x + 3}$): factors the denominator as $(x + 3)^{2}$ instead of $(x + 3)(x + 4)$.\n\n**Test Day Takeaway:** Factor the top and bottom completely before cancelling, and cancel only whole factors.",
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
    question: "$\\frac{4x^{2} - 36}{8x + 24}$\nWhich of the following is equivalent to the given expression for $x > 0$?",
    choices: [
      { id: "A", text: "$\\frac{x - 3}{2}$" },
      // distractor: factors x^2 - 9 as (x + 3)^2 and cancels one factor
      { id: "B", text: "$\\frac{x + 3}{2}$" },
      // distractor: cancels x + 3 but drops the factor 4 from the numerator
      { id: "C", text: "$\\frac{x - 3}{8}$" },
      // distractor: inverts the numerical ratio, using 8/4 = 2 instead of 4/8
      { id: "D", text: "$2(x - 3)$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Factor Out GCF then Cancel**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** $\\frac{4(x - 3)(x + 3)}{8(x + 3)} = \\frac{x - 3}{2}$.\n\n**The Full Solution:**\nStep 1: Factor out the greatest common factors: $4x^{2} - 36 = 4(x^{2} - 9)$ and $8x + 24 = 8(x + 3)$.\nStep 2: Factor the difference of squares: $4(x - 3)(x + 3)$ over $8(x + 3)$.\nStep 3: Cancel $x + 3$ and reduce $\\frac{4}{8} = \\frac{1}{2}$: the expression equals $\\frac{x - 3}{2}$. Check at $x = 5$: $\\frac{100 - 36}{40 + 24} = \\frac{64}{64} = 1$, and $\\frac{5 - 3}{2} = 1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{x + 3}{2}$): factors $x^{2} - 9$ as $(x + 3)^{2}$, then cancels one factor of $x + 3$.\n* Choice C ($\\frac{x - 3}{8}$): cancels $x + 3$ but drops the factor of $4$ from the numerator.\n* Choice D ($2(x - 3)$): inverts the numerical ratio, using $\\frac{8}{4} = 2$ instead of $\\frac{4}{8}$.\n\n**Test Day Takeaway:** Pull out each greatest common factor first; the leftover polynomials usually reveal the factor that cancels.",
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
    question: "$\\frac{2x^{2} - 8}{x^{2} + 5x + 6} \\cdot \\frac{x^{2} + 6x + 9}{4x - 8}$\nIf $x > 2$, which of the following is equivalent to the given expression?",
    choices: [
      // distractor: factors x^2 + 6x + 9 as (x + 3)(x - 3) instead of (x + 3)^2
      { id: "A", text: "$\\frac{x - 3}{2}$" },
      { id: "B", text: "$\\frac{x + 3}{2}$" },
      // distractor: cancels both factors of x + 3 and keeps the x + 2 from the first numerator
      { id: "C", text: "$\\frac{x + 2}{2}$" },
      // distractor: drops the factor 2 pulled out of 2x^2 - 8
      { id: "D", text: "$\\frac{x + 3}{4}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Multiply Rational Expressions (Factor + Cancel)**\n\n**Choice B is correct.**\n\n**The Fast Way (~50s):** Factored, the product is $\\frac{2(x - 2)(x + 2)}{(x + 2)(x + 3)} \\cdot \\frac{(x + 3)^{2}}{4(x - 2)}$; everything cancels except $\\frac{2(x + 3)}{4} = \\frac{x + 3}{2}$.\n\n**The Full Solution:**\nStep 1: Factor each part: $2x^{2} - 8 = 2(x - 2)(x + 2)$, $x^{2} + 5x + 6 = (x + 2)(x + 3)$, $x^{2} + 6x + 9 = (x + 3)^{2}$, and $4x - 8 = 4(x - 2)$.\nStep 2: Cancel the common factors $x - 2$, $x + 2$, and one $x + 3$, none of which is zero for $x > 2$. What remains is $\\frac{2(x + 3)}{4}$.\nStep 3: Reduce: $\\frac{x + 3}{2}$. Check at $x = 3$: $\\frac{10}{30} \\cdot \\frac{36}{4} = \\frac{1}{3} \\cdot 9 = 3$, and $\\frac{3 + 3}{2} = 3$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{x - 3}{2}$): factors $x^{2} + 6x + 9$ as $(x + 3)(x - 3)$, so an $x - 3$ survives.\n* Choice C ($\\frac{x + 2}{2}$): cancels $x + 3$ completely and leaves the $x + 2$ from the first numerator uncancelled.\n* Choice D ($\\frac{x + 3}{4}$): cancels the variable factors but drops the $2$ factored out of $2x^{2} - 8$.\n\n**Test Day Takeaway:** With products of rational expressions, factor all four polynomials first, including any constant factor, then cancel across the whole product.",
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
    question: "$\\dfrac{\\frac{1}{x} - \\frac{1}{k}}{\\frac{1}{x} + \\frac{1}{k}}$\nIf $x > 0$ and $k > 0$, which of the following is equivalent to the given expression?",
    choices: [
      // distractor: simplifies correctly and then inverts the fraction
      { id: "A", text: "$\\frac{k + x}{k - x}$" },
      // distractor: drops the reciprocals, treating 1/x - 1/k as x - k
      { id: "B", text: "$\\frac{x - k}{x + k}$" },
      // distractor: drops the reciprocals and inverts the fraction
      { id: "C", text: "$\\frac{x + k}{x - k}$" },
      { id: "D", text: "$\\frac{k - x}{k + x}$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Complex Fraction Simplification**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** Multiply the numerator and denominator by $xk$: $\\frac{k - x}{k + x}$.\n\n**The Full Solution:**\nStep 1: Multiply the top and bottom of the main fraction by $xk$, the common denominator of the small fractions.\nStep 2: Numerator: $xk\\left(\\frac{1}{x} - \\frac{1}{k}\\right) = k - x$. Denominator: $xk\\left(\\frac{1}{x} + \\frac{1}{k}\\right) = k + x$.\nStep 3: The expression equals $\\frac{k - x}{k + x}$. Check with $x = 1$ and $k = 2$: $\\frac{1 - \\frac{1}{2}}{1 + \\frac{1}{2}} = \\frac{1}{3}$, and $\\frac{2 - 1}{2 + 1} = \\frac{1}{3}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{k + x}{k - x}$): simplifies correctly, then inverts the result.\n* Choice B ($\\frac{x - k}{x + k}$): drops the reciprocals, treating $\\frac{1}{x} - \\frac{1}{k}$ as if it were $x - k$; this gives the negative of the answer.\n* Choice C ($\\frac{x + k}{x - k}$): both drops the reciprocals and inverts the fraction.\n\n**Test Day Takeaway:** Clear a complex fraction by multiplying its top and bottom by the common denominator of the small fractions; then check with simple numbers such as $x = 1$, $k = 2$.",
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
    question: "The exponential function $m$ gives the mass, in grams, of a yeast culture $t$ hours after an experiment began. The table shows three values of $t$ and their corresponding values of $m(t)$. Which equation defines $m$?",
    questionTable: { headers: ["$t$", "$m(t)$"], rows: [["$0$", "$40$"], ["$1$", "$120$"], ["$2$", "$360$"]] },
    choices: [
      { id: "A", text: "$m(t) = 40(3)^{t}$" },
      // distractor: swaps the initial value and the growth factor
      { id: "B", text: "$m(t) = 3(40)^{t}$" },
      // distractor: writes a linear function, multiplying 40 by 3t
      { id: "C", text: "$m(t) = 40(3t)$" },
      // distractor: uses the mass at t = 1, 120, as the initial value
      { id: "D", text: "$m(t) = 120(3)^{t}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** At $t = 0$ the mass is $40$, and it triples each hour ($40 \\to 120 \\to 360$), so $m(t) = 40(3)^{t}$.\n\n**The Full Solution:**\nStep 1: An exponential function has the form $m(t) = a(b)^{t}$, where $a = m(0)$. The table shows $m(0) = 40$, so $a = 40$.\nStep 2: Each hour the mass is multiplied by the same factor: $\\frac{120}{40} = 3$ and $\\frac{360}{120} = 3$, so $b = 3$.\nStep 3: So $m(t) = 40(3)^{t}$. Check: $m(2) = 40(9) = 360$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($m(t) = 3(40)^{t}$): swaps the initial value and the growth factor; it gives $m(0) = 3$.\n* Choice C ($m(t) = 40(3t)$): is linear, not exponential; it gives $m(2) = 240$ instead of $360$.\n* Choice D ($m(t) = 120(3)^{t}$): uses the mass at $t = 1$ as the starting value; it gives $m(0) = 120$.\n\n**Test Day Takeaway:** In $a(b)^{t}$, read $a$ from the row where $t = 0$ and $b$ from the ratio of consecutive outputs.",
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
    question: "A beehive has $3{,}500$ worker bees, and the number is predicted to increase by $8\\%$ each week. Which of the following functions best models the number of worker bees $w$ weeks from now?",
    choices: [
      // distractor: uses the rate 0.08 alone as the growth factor
      { id: "A", text: "$h(w) = 3{,}500(0.08)^{w}$" },
      // distractor: uses 1 - 0.08, which models a decrease
      { id: "B", text: "$h(w) = 3{,}500(0.92)^{w}$" },
      { id: "C", text: "$h(w) = 3{,}500(1.08)^{w}$" },
      // distractor: writes 8% as 0.8, giving a factor of 1.8
      { id: "D", text: "$h(w) = 3{,}500(1.8)^{w}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** An $8\\%$ weekly increase multiplies the count by $1 + 0.08 = 1.08$ each week, so $h(w) = 3{,}500(1.08)^{w}$.\n\n**The Full Solution:**\nStep 1: A quantity that increases by the same percent each period is modeled by $h(w) = a(1 + r)^{w}$, where $a$ is the starting amount and $r$ is the rate as a decimal.\nStep 2: Here $a = 3{,}500$ and $r = 0.08$, so the weekly growth factor is $1.08$.\nStep 3: So $h(w) = 3{,}500(1.08)^{w}$. Check: after $1$ week, $3{,}500(1.08) = 3{,}780$, which is $280$ more bees, and $280$ is $8\\%$ of $3{,}500$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($h(w) = 3{,}500(0.08)^{w}$): uses the rate alone as the factor, which would leave only $8\\%$ of the bees each week.\n* Choice B ($h(w) = 3{,}500(0.92)^{w}$): models an $8\\%$ decrease instead of an increase.\n* Choice D ($h(w) = 3{,}500(1.8)^{w}$): writes $8\\%$ as $0.8$, which is an $80\\%$ weekly increase.\n\n**Test Day Takeaway:** For a percent increase, the growth factor is $1 +$ the rate as a decimal; for a decrease, it is $1 -$ the rate.",
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
    question: "The population of a town is predicted by $P(t) = 8{,}600(0.94)^{\\frac{t}{3}}$, where $t$ is the number of years after 2020. According to the model, the population decreases by $p\\%$ every $3$ years. What is the value of $p$?",
    correctAnswer: "6",
    explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~20s):** Every $3$ years the exponent $\\frac{t}{3}$ goes up by $1$, so the population is multiplied by $0.94$, a decrease of $1 - 0.94 = 0.06$, or $6\\%$.\n\n**The Full Solution:**\nStep 1: When $t$ increases by $3$, the exponent $\\frac{t}{3}$ increases by $1$, so the population is multiplied by $0.94$ once.\nStep 2: Multiplying by $0.94$ keeps $94\\%$ of the population and removes $100\\% - 94\\% = 6\\%$.\nStep 3: So $p = 6$. Check: $P(0) = 8{,}600$ and $P(3) = 8{,}600(0.94) = 8{,}084$; the drop is $516$, and $\\frac{516}{8{,}600} = 0.06$ ✓\n\n**Common Mistakes:**\n* $94$: reports the percent that remains instead of the percent lost.\n* $2$: divides the $6\\%$ by $3$, as if the question asked for the decrease each year.\n* $0.06$: gives the decrease as a decimal rather than as the percent $p$.\n\n**Test Day Takeaway:** In $a(b)^{\\frac{t}{k}}$, the factor $b$ applies once every $k$ units of time; the percent change per $k$ units is $|1 - b|$ written as a percent.",
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
    question: "The mass of a sample of a substance is $180$ milligrams and decreases by half every $12$ minutes. Which of the following functions best models the mass, in milligrams, of the sample $t$ minutes from now?",
    choices: [
      // distractor: halves the starting mass in the coefficient
      { id: "A", text: "$M(t) = 90\\left(\\frac{1}{2}\\right)^{\\frac{t}{12}}$" },
      // distractor: multiplies t by 12 instead of dividing
      { id: "B", text: "$M(t) = 180\\left(\\frac{1}{2}\\right)^{12t}$" },
      { id: "C", text: "$M(t) = 180\\left(\\frac{1}{2}\\right)^{\\frac{t}{12}}$" },
      // distractor: uses a factor of 2, which doubles the mass
      { id: "D", text: "$M(t) = 180(2)^{\\frac{t}{12}}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Start at $180$, multiply by $\\frac{1}{2}$ once per $12$ minutes: $M(t) = 180\\left(\\frac{1}{2}\\right)^{\\frac{t}{12}}$.\n\n**The Full Solution:**\nStep 1: Halving at regular intervals is exponential decay of the form $M(t) = a\\left(\\frac{1}{2}\\right)^{\\frac{t}{h}}$, where $a$ is the starting mass and $h$ is the time it takes to halve.\nStep 2: The starting mass is $a = 180$, and the mass halves every $h = 12$ minutes.\nStep 3: So $M(t) = 180\\left(\\frac{1}{2}\\right)^{\\frac{t}{12}}$. Check: $M(24) = 180\\left(\\frac{1}{2}\\right)^{2} = 45$, and halving $180$ twice gives $90$, then $45$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($M(t) = 90\\left(\\frac{1}{2}\\right)^{\\frac{t}{12}}$): halves the starting mass in the coefficient, so it gives $M(0) = 90$.\n* Choice B ($M(t) = 180\\left(\\frac{1}{2}\\right)^{12t}$): multiplies $t$ by $12$, which halves the mass $12$ times every minute.\n* Choice D ($M(t) = 180(2)^{\\frac{t}{12}}$): uses a factor of $2$, which doubles the mass instead of halving it.\n\n**Test Day Takeaway:** For a halving time $h$, the exponent is $\\frac{t}{h}$: time divided by the length of one halving period.",
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
    question: "On January 1, 2022, a streaming service had $45{,}000$ subscribers. The number of subscribers increased by $8\\%$ every $6$ months. The function $f$ gives the number of subscribers $y$ years after January 1, 2022. Which equation defines $f$?",
    choices: [
      { id: "A", text: "$f(y) = 45{,}000(1.08)^{2y}$" },
      // distractor: divides by 2 instead of multiplying, one increase every 2 years
      { id: "B", text: "$f(y) = 45{,}000(1.08)^{\\frac{y}{2}}$" },
      // distractor: multiplies by 6, the months in a period, instead of 2 periods per year
      { id: "C", text: "$f(y) = 45{,}000(1.08)^{6y}$" },
      // distractor: adds 8% + 8% = 16% per year, ignoring compounding
      { id: "D", text: "$f(y) = 45{,}000(1.16)^{y}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** There are $2$ six-month periods in a year, so $y$ years contain $2y$ increases of $8\\%$: $f(y) = 45{,}000(1.08)^{2y}$.\n\n**The Full Solution:**\nStep 1: Each $6$-month increase of $8\\%$ multiplies the count by $1.08$.\nStep 2: In $y$ years there are $2y$ six-month periods, so the factor $1.08$ is applied $2y$ times.\nStep 3: So $f(y) = 45{,}000(1.08)^{2y}$. Check: after $1$ year, $f(1) = 45{,}000(1.08)^{2} = 52{,}488$, the same as applying $8\\%$ twice: $45{,}000 \\to 48{,}600 \\to 52{,}488$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($f(y) = 45{,}000(1.08)^{\\frac{y}{2}}$): divides by $2$ instead of multiplying, which gives one increase every $2$ years.\n* Choice C ($f(y) = 45{,}000(1.08)^{6y}$): multiplies by the number of months in a period instead of the number of periods in a year.\n* Choice D ($f(y) = 45{,}000(1.16)^{y}$): adds the two $8\\%$ increases to get $16\\%$ a year, ignoring compounding; the true yearly factor is $1.08^{2} = 1.1664$.\n\n**Test Day Takeaway:** When the growth period differs from the unit of the input, the exponent counts how many periods fit in the input.",
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
    question: "$V(t) = 24{,}500(0.91)^{t}$\nThe given function $V$ models the value, in dollars, of a car $t$ years after it was purchased. Which of the following is the best interpretation of $0.91$ in this context?",
    choices: [
      { id: "A", text: "The value of the car decreases by $9\\%$ each year." },
      // distractor: reads 0.91 as the percent lost each year
      { id: "B", text: "The value of the car decreases by $91\\%$ each year." },
      // distractor: reads 0.91 as a dollar amount lost each year
      { id: "C", text: "The value of the car decreases by \\$0.91 each year." },
      // distractor: treats the first year's loss, 0.09(24,500) = 2,205, as a constant yearly loss
      { id: "D", text: "The value of the car decreases by \\$2,205 each year." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Multiplying by $0.91$ each year keeps $91\\%$ of the value, so the value drops by $9\\%$ each year.\n\n**The Full Solution:**\nStep 1: In $V(t) = a(b)^{t}$, the base $b$ is the factor the value is multiplied by each year.\nStep 2: Here $b = 0.91 = 1 - 0.09$, so each year the car keeps $91\\%$ of its value from the year before and loses $9\\%$.\nStep 3: So the value decreases by $9\\%$ each year. Check: $V(1) = 24{,}500(0.91) = 22{,}295$, a drop of $2{,}205$, and $\\frac{2{,}205}{24{,}500} = 0.09$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B: reads $0.91$ as the percent lost; a $91\\%$ yearly loss would use a factor of $0.09$.\n* Choice C: reads $0.91$ as a fixed dollar amount, which would make the model linear.\n* Choice D: takes the first year's dollar loss, $0.09(24{,}500) = 2{,}205$, as a constant yearly loss; in an exponential model the dollar loss shrinks each year.\n\n**Test Day Takeaway:** A base $b$ between $0$ and $1$ means a decrease of $(1 - b) \\times 100\\%$ per period, never a fixed dollar amount.",
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
    question: "The number of fish in a lake decreases by $27.1\\%$ every $3$ years. The number of fish can be modeled by $f(t) = ab^{t}$, where $t$ is the number of years from now and $a$ and $b$ are positive constants. What is the value of $b$?",
    correctAnswer: "0.9",
    explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**The correct answer is $0.9$.**\n\n**The Fast Way (~35s):** Over $3$ years the factor is $1 - 0.271 = 0.729$, so $b^{3} = 0.729$ and $b = \\sqrt[3]{0.729} = 0.9$.\n\n**The Full Solution:**\nStep 1: A $27.1\\%$ decrease every $3$ years means the count is multiplied by $1 - 0.271 = 0.729$ every $3$ years.\nStep 2: In $f(t) = ab^{t}$, going forward $3$ years multiplies the count by $b^{3}$, so $b^{3} = 0.729$.\nStep 3: Take the cube root: $b = 0.9$. Check: $0.9^{3} = 0.729$, and $1 - 0.729 = 0.271$, a $27.1\\%$ decrease ✓\n\n**Common Mistakes:**\n* $0.729$: gives the $3$-year factor instead of the $1$-year factor.\n* $0.243$: divides $0.729$ by $3$ instead of taking the cube root.\n* $0.9097$: divides the percent by $3$ to get about $9.03\\%$ a year and uses $1 - 0.0903$; percent changes compound, so they cannot be split evenly.\n\n**Test Day Takeaway:** To turn a factor over $n$ periods into a factor per period, take the $n$th root, never divide by $n$.",
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
    question: "$S(t) = 2{,}400(1.005)^{12t}$\nThe given function $S$ models the balance, in dollars, of a savings account $t$ years after it was opened. According to the model, the balance increases by approximately $p\\%$ each year. To the nearest tenth, what is the value of $p$?",
    correctAnswer: "6.2",
    explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**The correct answer is $6.2$.**\n\n**The Fast Way (~45s):** One year multiplies the balance by $1.005^{12} \\approx 1.0617$, an increase of about $6.17\\%$, which rounds to $6.2$.\n\n**The Full Solution:**\nStep 1: Rewrite the model with a yearly factor: $(1.005)^{12t} = \\left(1.005^{12}\\right)^{t}$.\nStep 2: Compute the yearly factor: $1.005^{12} \\approx 1.06168$, so each year the balance is multiplied by about $1.06168$.\nStep 3: That is an increase of about $6.168\\%$, so $p \\approx 6.2$. Check: $S(1) = 2{,}400(1.005)^{12} \\approx 2{,}548.03$, and $\\frac{2{,}548.03 - 2{,}400}{2{,}400} \\approx 0.0617$ ✓\n\n**Common Mistakes:**\n* $0.5$: reads the monthly rate as the yearly rate.\n* $6$: multiplies $0.5\\% \\times 12$, which ignores compounding.\n* $106.2$: reports the yearly factor as a percent instead of the increase.\n\n**Test Day Takeaway:** When the exponent is a multiple of $t$, fold it into the base, $(b^{k})^{t}$, to read the change per unit of $t$.",
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
    question: "$\\sqrt[4]{d^{12}} = d^{n}$\nIf $d > 0$, what is the value of $n$?",
    correctAnswer: "3",
    explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~10s):** A fourth root is the power $\\frac{1}{4}$: $\\left(d^{12}\\right)^{\\frac{1}{4}} = d^{3}$, so $n = 3$.\n\n**The Full Solution:**\nStep 1: Rewrite the radical as a fractional exponent: $\\sqrt[4]{d^{12}} = \\left(d^{12}\\right)^{\\frac{1}{4}}$.\nStep 2: Multiply the exponents: $12 \\cdot \\frac{1}{4} = 3$, so the left side is $d^{3}$.\nStep 3: So $n = 3$. Check with $d = 2$: $\\sqrt[4]{2^{12}} = \\sqrt[4]{4{,}096} = 8$, and $2^{3} = 8$ ✓\n\n**Common Mistakes:**\n* $48$: multiplies $12$ by $4$ instead of dividing.\n* $8$: subtracts $12 - 4$.\n* $16$: adds $12 + 4$.\n\n**Test Day Takeaway:** $\\sqrt[k]{x^{m}} = x^{\\frac{m}{k}}$: the power goes on top, the index of the root goes on the bottom.",
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
    question: "If $x > 0$ and $\\sqrt{x^{7}} = x^{k}$, what is the value of $k$?",
    correctAnswer: "3.5",
    explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $3.5$ (or $\\frac{7}{2}$).**\n\n**The Fast Way (~10s):** A square root is the power $\\frac{1}{2}$: $\\left(x^{7}\\right)^{\\frac{1}{2}} = x^{\\frac{7}{2}}$, so $k = 3.5$.\n\n**The Full Solution:**\nStep 1: Rewrite the square root as an exponent of $\\frac{1}{2}$: $\\sqrt{x^{7}} = \\left(x^{7}\\right)^{\\frac{1}{2}}$.\nStep 2: Multiply the exponents: $7 \\cdot \\frac{1}{2} = \\frac{7}{2}$.\nStep 3: So $k = \\frac{7}{2} = 3.5$. Check with $x = 4$: $\\sqrt{4^{7}} = \\sqrt{16{,}384} = 128$, and $4^{3.5} = 4^{3} \\cdot 4^{0.5} = 64 \\cdot 2 = 128$ ✓\n\n**Common Mistakes:**\n* $14$: multiplies $7$ by $2$ instead of dividing.\n* $5$: subtracts $7 - 2$.\n* $49$: squares the exponent instead of halving it.\n\n**Test Day Takeaway:** A square root halves the exponent; a cube root divides it by $3$.",
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
    question: "$\\sqrt{x^{a}} \\cdot x^{3} = x^{10}$\nIn the given equation, $a$ is a constant. If the equation is true for all $x > 0$, what is the value of $a$?",
    choices: [
      // distractor: treats the square root as squaring, solving 2a + 3 = 10
      { id: "A", text: "$3.5$" },
      { id: "B", text: "$14$" },
      // distractor: doubles 10 and ignores the factor x^3
      { id: "C", text: "$20$" },
      // distractor: adds 3 instead of subtracting it, then doubles: 2(10 + 3)
      { id: "D", text: "$26$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $\\sqrt{x^{a}} = x^{\\frac{a}{2}}$, so $\\frac{a}{2} + 3 = 10$ and $a = 14$.\n\n**The Full Solution:**\nStep 1: Write the radical as a power: $\\sqrt{x^{a}} = x^{\\frac{a}{2}}$, so the left side is $x^{\\frac{a}{2}} \\cdot x^{3} = x^{\\frac{a}{2} + 3}$.\nStep 2: The equation holds for all $x > 0$, so the exponents are equal: $\\frac{a}{2} + 3 = 10$.\nStep 3: Solve: $\\frac{a}{2} = 7$, so $a = 14$. Check with $x = 2$: $\\sqrt{2^{14}} \\cdot 2^{3} = 2^{7} \\cdot 2^{3} = 2^{10}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3.5$): solves $2a + 3 = 10$, treating the square root as squaring.\n* Choice C ($20$): doubles $10$ and ignores the factor $x^{3}$.\n* Choice D ($26$): adds $3$ to $10$ instead of subtracting, then doubles: $2(10 + 3) = 26$.\n\n**Test Day Takeaway:** Convert every radical to a fractional exponent, add exponents for a product, then set the exponents equal.",
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
    question: "$\\dfrac{\\sqrt{x^{5}}}{\\sqrt[3]{x}}$\nFor $x > 0$, the given expression is equivalent to $x^{n}$, where $n$ is a constant. What is the value of $n$?",
    correctAnswer: "13/6",
    explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $\\frac{13}{6}$ (or $2.166$, $2.167$).**\n\n**The Fast Way (~30s):** $\\frac{x^{\\frac{5}{2}}}{x^{\\frac{1}{3}}} = x^{\\frac{5}{2} - \\frac{1}{3}} = x^{\\frac{13}{6}}$.\n\n**The Full Solution:**\nStep 1: Rewrite each radical as a power: $\\sqrt{x^{5}} = x^{\\frac{5}{2}}$ and $\\sqrt[3]{x} = x^{\\frac{1}{3}}$.\nStep 2: Dividing powers of the same base subtracts the exponents: $\\frac{5}{2} - \\frac{1}{3} = \\frac{15}{6} - \\frac{2}{6} = \\frac{13}{6}$.\nStep 3: So $n = \\frac{13}{6}$. Check with $x = 64$: $\\sqrt{64^{5}} = 32{,}768$ and $\\sqrt[3]{64} = 4$, so the quotient is $8{,}192 = 2^{13}$; and $64^{\\frac{13}{6}} = \\left(2^{6}\\right)^{\\frac{13}{6}} = 2^{13}$ ✓\n\n**Common Mistakes:**\n* $\\frac{17}{6}$: adds the exponents instead of subtracting them.\n* $-\\frac{1}{2}$: treats $\\sqrt[3]{x}$ as $x^{3}$ and computes $\\frac{5}{2} - 3$.\n* $\\frac{5}{6}$: multiplies the exponents, $\\frac{5}{2} \\cdot \\frac{1}{3}$, instead of subtracting them.\n\n**Test Day Takeaway:** Change radicals to fractional exponents before combining; for a quotient, subtract using a common denominator.",
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
    question: "$\\sqrt[3]{x^{k}} = x^{2}\\sqrt[3]{x}$\nIn the given equation, $k$ is a constant. For what value of $k$ is the equation true for all positive values of $x$?",
    correctAnswer: "7",
    explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~25s):** The right side is $x^{2 + \\frac{1}{3}} = x^{\\frac{7}{3}}$, and the left side is $x^{\\frac{k}{3}}$, so $k = 7$.\n\n**The Full Solution:**\nStep 1: Write both sides with fractional exponents: $\\sqrt[3]{x^{k}} = x^{\\frac{k}{3}}$ and $x^{2}\\sqrt[3]{x} = x^{2} \\cdot x^{\\frac{1}{3}} = x^{\\frac{7}{3}}$.\nStep 2: For the equation to hold for all positive $x$, the exponents must be equal: $\\frac{k}{3} = \\frac{7}{3}$.\nStep 3: So $k = 7$. Check with $x = 8$: $\\sqrt[3]{8^{7}} = 2^{7} = 128$, and $8^{2} \\cdot \\sqrt[3]{8} = 64 \\cdot 2 = 128$ ✓\n\n**Common Mistakes:**\n* $3$: adds $2 + 1$ and ignores the cube root on the $x$.\n* $\\frac{7}{3}$: finds the exponent of the right side but does not multiply by $3$ to get $k$.\n* $9$: multiplies $2 \\cdot 3$ and adds $3$, treating $\\sqrt[3]{x}$ as $x^{3}$.\n\n**Test Day Takeaway:** Put both sides over the same root (or the same fractional exponent), then match the numerators.",
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
    question: "$\\sqrt[3]{cx^{6}} = 4x^{2}$\nThe given equation is true for all positive values of $x$, where $c$ is a constant. What is the value of $c$?",
    correctAnswer: "64",
    explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $64$.**\n\n**The Fast Way (~20s):** $\\sqrt[3]{cx^{6}} = \\sqrt[3]{c} \\cdot x^{2}$, so $\\sqrt[3]{c} = 4$ and $c = 64$.\n\n**The Full Solution:**\nStep 1: Split the cube root: $\\sqrt[3]{cx^{6}} = \\sqrt[3]{c} \\cdot \\sqrt[3]{x^{6}} = \\sqrt[3]{c} \\cdot x^{2}$.\nStep 2: Match with $4x^{2}$: $\\sqrt[3]{c} = 4$.\nStep 3: Cube both sides: $c = 4^{3} = 64$. Check with $x = 1$: $\\sqrt[3]{64} = 4$ and $4(1)^{2} = 4$ ✓\n\n**Common Mistakes:**\n* $4$: stops at $\\sqrt[3]{c} = 4$ without cubing.\n* $16$: squares $4$ instead of cubing it, mixing up the cube root with a square root.\n* $12$: multiplies $4$ by $3$ instead of raising it to the third power.\n\n**Test Day Takeaway:** Separate a root of a product into a root of each factor; undo a cube root by cubing.",
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
    question: "$\\dfrac{\\sqrt[3]{m^{7}p^{2}}}{m\\sqrt{p}}$\nIf $m > 0$ and $p > 0$, which of the following is equivalent to the given expression?",
    choices: [
      { id: "A", text: "$m^{\\frac{4}{3}}p^{\\frac{1}{6}}$" },
      // distractor: adds the p exponents, 2/3 + 1/2 = 7/6, instead of subtracting
      { id: "B", text: "$m^{\\frac{4}{3}}p^{\\frac{7}{6}}$" },
      // distractor: forgets to divide by the m in the denominator
      { id: "C", text: "$m^{\\frac{7}{3}}p^{\\frac{1}{6}}$" },
      // distractor: adds the m exponents, 7/3 + 1 = 10/3, instead of subtracting
      { id: "D", text: "$m^{\\frac{10}{3}}p^{\\frac{1}{6}}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**Choice A is correct.**\n\n**The Fast Way (~45s):** $m^{\\frac{7}{3} - 1} = m^{\\frac{4}{3}}$ and $p^{\\frac{2}{3} - \\frac{1}{2}} = p^{\\frac{1}{6}}$.\n\n**The Full Solution:**\nStep 1: Rewrite with fractional exponents: the numerator is $m^{\\frac{7}{3}}p^{\\frac{2}{3}}$ and the denominator is $m^{1}p^{\\frac{1}{2}}$.\nStep 2: Subtract exponents for each variable: $m^{\\frac{7}{3} - 1} = m^{\\frac{4}{3}}$ and $p^{\\frac{2}{3} - \\frac{1}{2}} = p^{\\frac{4}{6} - \\frac{3}{6}} = p^{\\frac{1}{6}}$.\nStep 3: So the expression is $m^{\\frac{4}{3}}p^{\\frac{1}{6}}$. Check with $m = 8$ and $p = 64$: $\\frac{\\sqrt[3]{8^{7} \\cdot 64^{2}}}{8 \\cdot 8} = \\frac{\\sqrt[3]{2^{33}}}{64} = \\frac{2^{11}}{64} = 32$, and $8^{\\frac{4}{3}} \\cdot 64^{\\frac{1}{6}} = 16 \\cdot 2 = 32$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($m^{\\frac{4}{3}}p^{\\frac{7}{6}}$): adds the $p$ exponents, $\\frac{2}{3} + \\frac{1}{2} = \\frac{7}{6}$, instead of subtracting.\n* Choice C ($m^{\\frac{7}{3}}p^{\\frac{1}{6}}$): forgets to divide by the $m$ in the denominator.\n* Choice D ($m^{\\frac{10}{3}}p^{\\frac{1}{6}}$): adds the $m$ exponents, $\\frac{7}{3} + 1$, instead of subtracting.\n\n**Test Day Takeaway:** Handle one variable at a time: convert each root to a fractional exponent, then subtract denominator exponents from numerator exponents.",
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
    question: "$\\left(\\sqrt[4]{x^{n}}\\right)^{3} = x^{5}\\sqrt[4]{x}$\nThe given equation is true for all positive values of $x$, where $n$ is a constant. What is the value of $n$?",
    correctAnswer: "7",
    explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~35s):** The left side is $x^{\\frac{3n}{4}}$ and the right side is $x^{5 + \\frac{1}{4}} = x^{\\frac{21}{4}}$, so $3n = 21$ and $n = 7$.\n\n**The Full Solution:**\nStep 1: Rewrite the left side with a fractional exponent: $\\sqrt[4]{x^{n}} = x^{\\frac{n}{4}}$, and raising it to the third power multiplies the exponents, giving $x^{\\frac{3n}{4}}$.\nStep 2: Rewrite the right side: $x^{5}\\sqrt[4]{x} = x^{5} \\cdot x^{\\frac{1}{4}} = x^{\\frac{21}{4}}$.\nStep 3: The bases match, so the exponents must match: $\\frac{3n}{4} = \\frac{21}{4}$, which gives $3n = 21$ and $n = 7$. Check: $\\left(\\sqrt[4]{x^{7}}\\right)^{3} = x^{\\frac{21}{4}} = x^{5} \\cdot x^{\\frac{1}{4}}$ ✓\n\n**Common Mistakes:**\n* $\\frac{20}{3}$: drops the $\\sqrt[4]{x}$ factor and solves $\\frac{3n}{4} = 5$.\n* $21$: clears the fourths but forgets to divide by the outer exponent $3$.\n* $5.25$: finds the right side's exponent, $\\frac{21}{4}$, and reports it instead of solving for $n$.\n\n**Test Day Takeaway:** Turn every radical into a fractional exponent and write both sides over the same denominator; then only a one-step equation in $n$ remains.",
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
    question: "$f(x) = a(x + 2)^{2} + 1$\nThe graph of the given function $f$ is shown, where $a$ is a constant. If the graph passes through the point $(2, 9)$, what is the value of $a$?",
    diagram: { type: "quadraticVertex", params: { vertex: [-2, 1], a: 0.5, showVertex: true, showPoints: [[2, 9]] } },
    correctAnswer: "0.5",
    explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**The correct answer is $0.5$.**\n\n**The Fast Way (~20s):** Substituting $(2, 9)$ gives $9 = a(4)^{2} + 1$, so $16a = 8$ and $a = 0.5$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 2$ and $f(x) = 9$ into the equation: $9 = a(2 + 2)^{2} + 1$.\nStep 2: Square and subtract $1$ from both sides: $16a = 8$.\nStep 3: Divide by $16$: $a = 0.5$. Check: $f(2) = 0.5(16) + 1 = 9$, and the lowest point of the graph is $(-2, 1)$, the vertex the equation names ✓\n\n**Common Mistakes:**\n* $2$: divides the wrong way, computing $\\frac{16}{8}$.\n* $8$: stops at $16a = 8$ and reports $8$.\n* $0.5625$: divides $9$ by $16$ without first subtracting the $1$.\n\n**Test Day Takeaway:** When the vertex is already in the equation, one more point is one equation in one unknown; subtract $k$ before dividing.",
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
    question: "The graph of the quadratic function $f$ is shown. Which equation defines $f$?",
    diagram: { type: "quadraticVertex", params: { vertex: [4, -3], a: 0.5, showVertex: true, showPoints: [[8, 5]] } },
    choices: [
      // distractor: flips the sign of h, writing (x + 4) for a vertex at x = 4
      { id: "A", text: "$f(x) = \\frac{1}{2}(x + 4)^{2} - 3$" },
      { id: "B", text: "$f(x) = \\frac{1}{2}(x - 4)^{2} - 3$" },
      // distractor: flips the sign of k, writing + 3 for a vertex at y = -3
      { id: "C", text: "$f(x) = \\frac{1}{2}(x - 4)^{2} + 3$" },
      // distractor: solves 16a = 8 upside down, getting a = 16/8 = 2
      { id: "D", text: "$f(x) = 2(x - 4)^{2} - 3$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The vertex is $(4, -3)$, so $f(x) = a(x - 4)^{2} - 3$; the marked point $(8, 5)$ gives $16a - 3 = 5$, so $a = \\frac{1}{2}$.\n\n**The Full Solution:**\nStep 1: Read the vertex from the graph: the lowest point is $(4, -3)$, so $f(x) = a(x - 4)^{2} - 3$ for some constant $a$.\nStep 2: Use the other marked point, $(8, 5)$: $5 = a(8 - 4)^{2} - 3$, so $16a = 8$.\nStep 3: Divide: $a = \\frac{1}{2}$, so $f(x) = \\frac{1}{2}(x - 4)^{2} - 3$. Check: $f(8) = \\frac{1}{2}(16) - 3 = 5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($f(x) = \\frac{1}{2}(x + 4)^{2} - 3$): uses $x + 4$, which puts the vertex at $x = -4$, not $x = 4$.\n* Choice C ($f(x) = \\frac{1}{2}(x - 4)^{2} + 3$): uses $+3$, which puts the vertex above the $x$-axis at $y = 3$.\n* Choice D ($f(x) = 2(x - 4)^{2} - 3$): solves $16a = 8$ as $a = \\frac{16}{8}$; this graph would pass through $(8, 29)$, not $(8, 5)$.\n\n**Test Day Takeaway:** Vertex form needs two facts: the vertex gives $h$ and $k$, and any second point gives $a$. Test the point in your final equation.",
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
    question: "$y = ax^{2} + bx + c$\nIn the given equation, $a$, $b$, and $c$ are constants. The graph of the equation in the $xy$-plane is shown. What is the value of $b$?",
    diagram: { type: "quadraticVertex", params: { vertex: [-2, 6], a: -0.5, showVertex: true, showPoints: [[2, -2]] } },
    correctAnswer: "-2",
    explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**The correct answer is $-2$.**\n\n**The Fast Way (~40s):** The vertex $(-2, 6)$ and the point $(2, -2)$ give $y = -\\frac{1}{2}(x + 2)^{2} + 6 = -\\frac{1}{2}x^{2} - 2x + 4$, so $b = -2$.\n\n**The Full Solution:**\nStep 1: Read the vertex from the graph: the highest point is $(-2, 6)$, so $y = a(x + 2)^{2} + 6$.\nStep 2: Use the other marked point, $(2, -2)$: $-2 = a(4)^{2} + 6$, so $16a = -8$ and $a = -\\frac{1}{2}$.\nStep 3: Expand: $-\\frac{1}{2}(x^{2} + 4x + 4) + 6 = -\\frac{1}{2}x^{2} - 2x + 4$, so $b = -2$. Check: the vertex of $y = ax^{2} + bx + c$ is at $x = -\\frac{b}{2a} = -\\frac{-2}{2\\left(-\\frac{1}{2}\\right)} = -2$ ✓\n\n**Common Mistakes:**\n* $2$: expands $-\\frac{1}{2}(x + 2)^{2}$ but drops the negative sign on the $x$-term.\n* $4$: reports $c$, the $y$-intercept, instead of $b$.\n* $-0.5$: reports $a$ instead of $b$.\n\n**Test Day Takeaway:** To get standard-form coefficients from a graph, write vertex form first, find $a$ with a second point, then expand.",
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
    question: "For the quadratic function $h$, $h(1) = h(9) = 36$, and the minimum value of $h$ is $4$. What is the value of $h(7)$?",
    correctAnswer: "12",
    explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~35s):** Equal outputs at $1$ and $9$ put the vertex at $x = 5$, so $h(x) = a(x - 5)^{2} + 4$; then $16a + 4 = 36$ gives $a = 2$, and $h(7) = 2(4) + 4 = 12$.\n\n**The Full Solution:**\nStep 1: Since $h(1) = h(9)$, the axis of symmetry is halfway between: $x = \\frac{1 + 9}{2} = 5$. The minimum value $4$ occurs there, so $h(x) = a(x - 5)^{2} + 4$.\nStep 2: Use $h(1) = 36$: $a(1 - 5)^{2} + 4 = 36$, so $16a = 32$ and $a = 2$.\nStep 3: Evaluate: $h(7) = 2(7 - 5)^{2} + 4 = 8 + 4 = 12$. Check: $h(9) = 2(16) + 4 = 36$ ✓\n\n**Common Mistakes:**\n* $4$: reports the minimum value of $h$ instead of $h(7)$.\n* $8$: assumes $a = 1$ and computes $(7 - 5)^{2} + 4$.\n* $36$: treats $7$ as a mirror partner of $1$ or $9$; the partner of $7$ about $x = 5$ is $3$.\n\n**Test Day Takeaway:** Two equal outputs locate the axis of symmetry, and a stated minimum supplies the vertex; one of the given points then fixes $a$.",
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
    question: "$p(x) = (x - 3)^{2} + k$\nThe graph of the given function $p$ is shown, where $k$ is a constant. What is the value of $p(-1)$?",
    diagram: { type: "quadraticVertex", params: { vertex: [3, -4], a: 1, showVertex: true } },
    choices: [
      // distractor: reports the constant k instead of p(-1)
      { id: "A", text: "$-4$" },
      // distractor: computes (-1 + 3)^2 = 4 instead of (-1 - 3)^2 = 16, then adds k = -4
      { id: "B", text: "$0$" },
      { id: "C", text: "$12$" },
      // distractor: computes (-1 - 3)^2 = 16 and forgets to add k
      { id: "D", text: "$16$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The graph's lowest point is $(3, -4)$, so $k = -4$ and $p(-1) = (-4)^{2} - 4 = 12$.\n\n**The Full Solution:**\nStep 1: The form $p(x) = (x - 3)^{2} + k$ has its vertex at $(3, k)$. The graph's lowest point is $(3, -4)$, so $k = -4$.\nStep 2: Substitute $x = -1$: $p(-1) = (-1 - 3)^{2} - 4$.\nStep 3: Compute: $16 - 4 = 12$. Check: $x = 7$ is the mirror of $x = -1$ about $x = 3$, and $p(7) = 4^{2} - 4 = 12$ as well ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): reports $k$, the minimum value, instead of $p(-1)$.\n* Choice B ($0$): substitutes as if the binomial were $x + 3$, computing $(-1 + 3)^{2} - 4 = 4 - 4$.\n* Choice D ($16$): squares correctly but never adds $k = -4$.\n\n**Test Day Takeaway:** A graph often supplies exactly one missing constant; read it from the vertex, then evaluate.",
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
    question: "$f(x) = a(x - 6)^{2} + k$\nIn the given function $f$, $a$ and $k$ are constants. If $f(6) = -5$ and $f(2) = 27$, what is the value of $a$?",
    choices: [
      // distractor: inverts the last division, computing 16/32
      { id: "A", text: "$0.5$" },
      { id: "B", text: "$2$" },
      // distractor: divides 32 by |2 - 6| = 4 instead of by (2 - 6)^2 = 16
      { id: "C", text: "$8$" },
      // distractor: reports f(2) - f(6) = 32 without dividing by 16
      { id: "D", text: "$32$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $f(6) = k$, so $k = -5$; then $f(2) = 16a - 5 = 27$ gives $16a = 32$ and $a = 2$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 6$: the squared term is $0$, so $f(6) = k$ and $k = -5$.\nStep 2: Substitute $x = 2$: $a(2 - 6)^{2} - 5 = 27$, which is $16a - 5 = 27$.\nStep 3: So $16a = 32$ and $a = 2$. Check: $f(x) = 2(x - 6)^{2} - 5$ gives $f(2) = 2(16) - 5 = 27$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.5$): inverts the division, computing $\\frac{16}{32}$.\n* Choice C ($8$): divides $32$ by $|2 - 6| = 4$, forgetting that the difference is squared.\n* Choice D ($32$): finds $f(2) - f(6) = 32$ but never divides by $(2 - 6)^{2} = 16$.\n\n**Test Day Takeaway:** Plugging the vertex's $x$-value into vertex form isolates $k$ at once; use that condition first, then the other point gives $a$.",
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
    question: "$q(x) = a(x - 3)^{2} + k$\nIn the given quadratic function, $a$ and $k$ are constants. If $q(-1) = 10$ and $q(6) = -11$, what is the value of $a + k$?",
    correctAnswer: "-35",
    explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**The correct answer is $-35$.**\n\n**The Fast Way (~40s):** The conditions give $16a + k = 10$ and $9a + k = -11$; subtracting gives $7a = 21$, so $a = 3$, $k = -38$, and $a + k = -35$.\n\n**The Full Solution:**\nStep 1: Substitute $x = -1$: $a(-1 - 3)^{2} + k = 10$, so $16a + k = 10$.\nStep 2: Substitute $x = 6$: $a(6 - 3)^{2} + k = -11$, so $9a + k = -11$. Subtracting this equation from the first gives $7a = 21$, so $a = 3$.\nStep 3: Then $k = 10 - 16(3) = -38$, and $a + k = 3 + (-38) = -35$. Check: $q(-1) = 3(16) - 38 = 10$ and $q(6) = 3(9) - 38 = -11$ ✓\n\n**Common Mistakes:**\n* $3$: solves for $a$ and stops.\n* $-38$: reports $k$ instead of $a + k$.\n* $41$: drops the sign of $k$ and adds $3 + 38$.\n\n**Test Day Takeaway:** Two points on a vertex-form function give a linear system in $a$ and $k$; subtract to eliminate $k$, then answer the exact quantity asked.",
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
    question: "The graph of the quadratic function $f$ is shown. The quadratic function $g$ has the same vertex as $f$, and $g(5) = 25$. What is the value of $g(-2)$?",
    diagram: { type: "quadraticVertex", params: { vertex: [1, 9], a: -1, showVertex: true } },
    choices: [
      // distractor: reports the shared vertex value 9 instead of g(-2)
      { id: "A", text: "$9$" },
      // distractor: adds 3 to 9 instead of adding b(-3)^2 = 9
      { id: "B", text: "$12$" },
      { id: "C", text: "$18$" },
      // distractor: treats -2 and 5 as mirror points about x = 1; the mirror of 5 is -3
      { id: "D", text: "$25$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** The shared vertex is $(1, 9)$, so $g(x) = b(x - 1)^{2} + 9$; $g(5) = 16b + 9 = 25$ gives $b = 1$, and $g(-2) = 9 + 9 = 18$.\n\n**The Full Solution:**\nStep 1: Read the vertex of $f$ from the graph: $(1, 9)$. Since $g$ has the same vertex, $g(x) = b(x - 1)^{2} + 9$ for some constant $b$.\nStep 2: Use $g(5) = 25$: $b(5 - 1)^{2} + 9 = 25$, so $16b = 16$ and $b = 1$. The graph of $f$ opens downward, but $g$ opens upward; sharing a vertex does not mean sharing the leading coefficient.\nStep 3: Evaluate: $g(-2) = (-2 - 1)^{2} + 9 = 9 + 9 = 18$. Check: $g(4) = 3^{2} + 9 = 18$ too, and $4$ is the mirror of $-2$ about $x = 1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($9$): reports the shared vertex value instead of $g(-2)$.\n* Choice B ($12$): adds $3$ to $9$ instead of adding $b(-2 - 1)^{2} = 9$.\n* Choice D ($25$): treats $-2$ and $5$ as mirror points about $x = 1$; the mirror of $5$ is $-3$.\n\n**Test Day Takeaway:** A shared vertex fixes only $h$ and $k$; the leading coefficient, sign included, must come from the second condition.",
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
    question: "Which expression is equivalent to $\\dfrac{x^{2} - 64}{x + 8}$, where $x > 0$?",
    choices: [
      // distractor: cancels x squared against x term by term and leaves the 64 untouched
      { id: "A", text: "$x - 64$" },
      { id: "B", text: "$x - 8$" },
      // distractor: cancels the factor x - 8 instead of the factor x + 8
      { id: "C", text: "$x + 8$" },
      // distractor: divides only the constant 64 by 8 and leaves x squared alone
      { id: "D", text: "$x^{2} - 8$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $x^{2} - 64 = (x - 8)(x + 8)$, and the factor $x + 8$ cancels, leaving $x - 8$.\n\n**The Full Solution:**\nStep 1: Factor the numerator as a difference of squares: $x^{2} - 64 = (x - 8)(x + 8)$.\nStep 2: The expression becomes $\\frac{(x - 8)(x + 8)}{x + 8}$.\nStep 3: For $x > 0$, the factor $x + 8$ is not zero, so it cancels and leaves $x - 8$. Check at $x = 2$: $\\frac{4 - 64}{10} = -6$ and $2 - 8 = -6$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($x - 64$): cancels $x^{2}$ against $x$ as if they were factors and keeps the $64$.\n* Choice C ($x + 8$): cancels $x - 8$, which is not in the denominator.\n* Choice D ($x^{2} - 8$): divides only the constant $64$ by $8$.\n\n**Test Day Takeaway:** Factor first; only a whole factor that appears in both the numerator and the denominator can cancel.",
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
    question: "$\\dfrac{x^{2} + x - 12}{x - 3}$\nThe given expression is equivalent to $x + b$ for $x > 3$, where $b$ is a constant. What is the value of $b$?",
    choices: [
      // distractor: factors the numerator as (x - 4)(x + 3), a sign error
      { id: "A", text: "$-4$" },
      // distractor: copies the constant term of the denominator
      { id: "B", text: "$-3$" },
      // distractor: divides only the first two terms of the numerator by x, getting x + 1
      { id: "C", text: "$1$" },
      { id: "D", text: "$4$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Factor the numerator: $x^{2} + x - 12 = (x + 4)(x - 3)$. Canceling $x - 3$ leaves $x + 4$, so $b = 4$.\n\n**The Full Solution:**\nStep 1: Find two numbers whose product is $-12$ and whose sum is $1$: $4$ and $-3$. So $x^{2} + x - 12 = (x + 4)(x - 3)$.\nStep 2: For $x > 3$, $x - 3 \\neq 0$, so $\\dfrac{(x + 4)(x - 3)}{x - 3} = x + 4$.\nStep 3: Matching $x + 4$ with $x + b$ gives $b = 4$. Check with $x = 5$: $\\dfrac{25 + 5 - 12}{5 - 3} = \\dfrac{18}{2} = 9$, and $5 + 4 = 9$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): factors the numerator as $(x - 4)(x + 3)$, which multiplies to $x^{2} - x - 12$.\n* Choice B ($-3$): copies the constant term of the denominator.\n* Choice C ($1$): divides only $x^{2}$ and $x$ by $x$, getting $x + 1$, and ignores the $-12$.\n\n**Test Day Takeaway:** To simplify a rational expression, factor the numerator completely and cancel the factor it shares with the denominator.",
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
    question: "$\\dfrac{P(x)}{x^{2} - 36} = \\dfrac{x + 6}{x - 6}$\nIn the given equation, $P(x)$ is a polynomial and $x > 6$. Which of the following is $P(x)$?",
    choices: [
      // distractor: expands (x + 6) squared with the wrong sign on the middle term
      { id: "A", text: "$x^{2} - 12x + 36$" },
      { id: "B", text: "$x^{2} + 12x + 36$" },
      // distractor: squares x and 6 separately and drops the 12x cross term
      { id: "C", text: "$x^{2} + 36$" },
      // distractor: multiplies x by (x + 6) instead of (x + 6) by itself
      { id: "D", text: "$x^{2} + 6x$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** $P(x) = \\frac{x + 6}{x - 6} \\cdot (x - 6)(x + 6) = (x + 6)^{2} = x^{2} + 12x + 36$.\n\n**The Full Solution:**\nStep 1: Factor the denominator on the left: $x^{2} - 36 = (x - 6)(x + 6)$.\nStep 2: Multiply both sides by $(x - 6)(x + 6)$: $P(x) = \\frac{x + 6}{x - 6} \\cdot (x - 6)(x + 6)$, and the $x - 6$ cancels.\nStep 3: What remains is $(x + 6)^{2} = x^{2} + 12x + 36$. Check at $x = 7$: $\\frac{49 + 84 + 36}{49 - 36} = \\frac{169}{13} = 13$ and $\\frac{7 + 6}{7 - 6} = 13$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($x^{2} - 12x + 36$): expands $(x + 6)^{2}$ with a negative middle term; that is $(x - 6)^{2}$.\n* Choice C ($x^{2} + 36$): squares each term separately and loses the cross term $12x$.\n* Choice D ($x^{2} + 6x$): multiplies $x$ by $x + 6$ instead of $x + 6$ by itself.\n\n**Test Day Takeaway:** To recover a missing numerator, multiply the simplified form by the full factored denominator and cancel what matches.",
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
    question: "Which expression is equivalent to $\\dfrac{9x^{2} - 4}{3x^{2} + 5x + 2}$, where $x > 0$?",
    choices: [
      // distractor: factors the denominator as (3x + 2)(x - 1), a sign slip, then cancels 3x + 2
      { id: "A", text: "$\\dfrac{3x - 2}{x - 1}$" },
      { id: "B", text: "$\\dfrac{3x - 2}{x + 1}$" },
      // distractor: factors the denominator as (3x - 2)(x - 1), a sign slip, then cancels 3x - 2
      { id: "C", text: "$\\dfrac{3x + 2}{x - 1}$" },
      // distractor: cancels 3x - 2 from the numerator even though the denominator does not contain it
      { id: "D", text: "$\\dfrac{3x + 2}{x + 1}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** $\\frac{(3x - 2)(3x + 2)}{(3x + 2)(x + 1)}$; cancel $3x + 2$ to get $\\frac{3x - 2}{x + 1}$.\n\n**The Full Solution:**\nStep 1: Factor the numerator as a difference of squares: $9x^{2} - 4 = (3x - 2)(3x + 2)$.\nStep 2: Factor the denominator: $3x^{2} + 5x + 2 = (3x + 2)(x + 1)$, since $(3x + 2)(x + 1) = 3x^{2} + 3x + 2x + 2$.\nStep 3: Cancel the shared factor $3x + 2$, leaving $\\frac{3x - 2}{x + 1}$. Check at $x = 2$: $\\frac{36 - 4}{12 + 10 + 2} = \\frac{32}{24} = \\frac{4}{3}$ and $\\frac{6 - 2}{2 + 1} = \\frac{4}{3}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{3x - 2}{x - 1}$): uses $(3x + 2)(x - 1)$ for the denominator, but that product is $3x^{2} - x - 2$.\n* Choice C ($\\frac{3x + 2}{x - 1}$): uses $(3x - 2)(x - 1)$ for the denominator, but that product is $3x^{2} - 5x + 2$.\n* Choice D ($\\frac{3x + 2}{x + 1}$): cancels $3x - 2$, a factor the denominator does not have.\n\n**Test Day Takeaway:** Factor the numerator and the denominator completely, check the factoring by expanding, and cancel only the factor that appears in both.",
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
    question: "$\\dfrac{5x^{2} - 45}{x^{2} + 3x}$\nWhich expression is equivalent to the given expression, where $x > 0$?",
    choices: [
      // distractor: drops the common factor 5 when factoring 5x squared minus 45
      { id: "A", text: "$\\dfrac{x - 3}{x}$" },
      { id: "B", text: "$\\dfrac{5(x - 3)}{x}$" },
      // distractor: cancels the factor x - 3 instead of the factor x + 3
      { id: "C", text: "$\\dfrac{5(x + 3)}{x}$" },
      // distractor: divides only the x-terms by x (5x^2 to 5x, x^2 to x, 3x to 3) and leaves -45 alone, instead of factoring
      { id: "D", text: "$\\dfrac{5x - 45}{x + 3}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** $\\frac{5(x - 3)(x + 3)}{x(x + 3)}$; cancel $x + 3$ to get $\\frac{5(x - 3)}{x}$.\n\n**The Full Solution:**\nStep 1: Factor the numerator in two stages: $5x^{2} - 45 = 5(x^{2} - 9) = 5(x - 3)(x + 3)$.\nStep 2: Factor the denominator: $x^{2} + 3x = x(x + 3)$.\nStep 3: For $x > 0$, the factor $x + 3$ is not zero and cancels, leaving $\\frac{5(x - 3)}{x}$. Check at $x = 5$: $\\frac{125 - 45}{25 + 15} = \\frac{80}{40} = 2$ and $\\frac{5(2)}{5} = 2$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{x - 3}{x}$): loses the common factor $5$ pulled out of the numerator.\n* Choice C ($\\frac{5(x + 3)}{x}$): cancels $x - 3$, which the denominator does not contain.\n* Choice D ($\\frac{5x - 45}{x + 3}$): divides only the terms that contain $x$ by $x$ and leaves $-45$ alone; a factor can be canceled only when it divides the whole numerator and the whole denominator.\n\n**Test Day Takeaway:** Pull out a numerical common factor first; the difference of squares is easier to see once the coefficient is outside.",
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
    question: "For $x > 9$, the expression $\\dfrac{x^{2} - 81}{Q(x)}$ is equivalent to $\\dfrac{x + 9}{3}$, where $Q(x)$ is a polynomial. Which of the following is $Q(x)$?",
    choices: [
      // distractor: drops the factor 3 that comes from the denominator of the simplified form
      { id: "A", text: "$x - 9$" },
      { id: "B", text: "$3x - 27$" },
      // distractor: cancels x - 9 instead of x + 9, leaving 3(x + 9)
      { id: "C", text: "$3x + 27$" },
      // distractor: multiplies by 9, the constant in x + 9, instead of by the denominator 3
      { id: "D", text: "$9x - 81$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** $Q(x) = \\frac{3(x^{2} - 81)}{x + 9} = 3(x - 9) = 3x - 27$.\n\n**The Full Solution:**\nStep 1: Cross multiply the equivalence: $3(x^{2} - 81) = (x + 9)Q(x)$.\nStep 2: Factor the left side: $3(x - 9)(x + 9) = (x + 9)Q(x)$.\nStep 3: For $x > 9$, divide both sides by $x + 9$: $Q(x) = 3(x - 9) = 3x - 27$. Check at $x = 10$: $\\frac{100 - 81}{30 - 27} = \\frac{19}{3}$ and $\\frac{10 + 9}{3} = \\frac{19}{3}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($x - 9$): forgets the factor $3$ from the simplified form's denominator.\n* Choice C ($3x + 27$): cancels $x - 9$ instead of $x + 9$.\n* Choice D ($9x - 81$): multiplies by $9$ instead of by $3$.\n\n**Test Day Takeaway:** Cross multiply first; the unknown polynomial then sits next to a factor you can cancel.",
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
    question: "The expression $\\dfrac{3x^{2} + kx - 28}{x^{2} - 16}$, where $k$ is a constant and $x > 4$, is equivalent to $\\dfrac{3x + 7}{x + 4}$. What is the value of $k$?",
    choices: [
      // distractor: keeps only the -12x from 3x times -4 and ignores the +7x from 7 times x
      { id: "A", text: "$-12$" },
      { id: "B", text: "$-5$" },
      // distractor: reports the coefficient without its negative sign
      { id: "C", text: "$5$" },
      // distractor: copies the constant 7 from the numerator of the simplified form
      { id: "D", text: "$7$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** The numerator must be $(3x + 7)(x - 4) = 3x^{2} - 5x - 28$, so $k = -5$.\n\n**The Full Solution:**\nStep 1: Factor the denominator: $x^{2} - 16 = (x + 4)(x - 4)$, so the simplified form comes from cancelling a factor of $x - 4$.\nStep 2: Undo that cancellation: $\\frac{3x + 7}{x + 4} = \\frac{(3x + 7)(x - 4)}{(x + 4)(x - 4)}$, so the original numerator equals $(3x + 7)(x - 4)$.\nStep 3: Expand: $(3x + 7)(x - 4) = 3x^{2} - 12x + 7x - 28 = 3x^{2} - 5x - 28$. Matching coefficients gives $k = -5$, and the constant $-28$ matches too. Check at $x = 5$: $\\frac{75 - 25 - 28}{25 - 16} = \\frac{22}{9}$ and $\\frac{15 + 7}{5 + 4} = \\frac{22}{9}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-12$): keeps only the $-12x$ term and drops the $+7x$.\n* Choice C ($5$): combines $-12x + 7x$ correctly in size but loses the negative sign.\n* Choice D ($7$): copies the constant from the simplified numerator.\n\n**Test Day Takeaway:** To recover a hidden coefficient, multiply the simplified form back by the cancelled factor and match terms.",
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
    question: "$\\dfrac{2x^{3} - 18x}{x^{2} + 6x + 9}$\nWhich of the following is equivalent to the given expression for $x > 0$?",
    choices: [
      // distractor: drops the factor x pulled out of the numerator along with the 2
      { id: "A", text: "$\\dfrac{2(x - 3)}{x + 3}$" },
      // distractor: cancels the factor x - 3 instead of one copy of x + 3
      { id: "B", text: "$\\dfrac{2x(x + 3)}{x - 3}$" },
      // distractor: removes x + 3 from the numerator but keeps the full square in the denominator
      { id: "C", text: "$\\dfrac{2x(x - 3)}{(x + 3)^{2}}$" },
      { id: "D", text: "$\\dfrac{2x(x - 3)}{x + 3}$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** $\\frac{2x(x - 3)(x + 3)}{(x + 3)^{2}}$; one factor of $x + 3$ cancels, leaving $\\frac{2x(x - 3)}{x + 3}$.\n\n**The Full Solution:**\nStep 1: Factor the numerator: $2x^{3} - 18x = 2x(x^{2} - 9) = 2x(x - 3)(x + 3)$.\nStep 2: Factor the denominator as a perfect square: $x^{2} + 6x + 9 = (x + 3)^{2}$.\nStep 3: One factor of $x + 3$ cancels, leaving $\\frac{2x(x - 3)}{x + 3}$. Check at $x = 1$: $\\frac{2 - 18}{1 + 6 + 9} = \\frac{-16}{16} = -1$ and $\\frac{2(1)(-2)}{4} = -1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{2(x - 3)}{x + 3}$): pulls out $2x$ but keeps only the $2$.\n* Choice B ($\\frac{2x(x + 3)}{x - 3}$): cancels $x - 3$, which the denominator does not contain.\n* Choice C ($\\frac{2x(x - 3)}{(x + 3)^{2}}$): removes $x + 3$ from the numerator without removing a copy from the denominator.\n\n**Test Day Takeaway:** A squared factor in the denominator cancels only once; count the copies on each side before you write the answer.",
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
    question: "The table shows selected values of the function $f$. If $g(x) = f(x) - 6$, what is the value of $g(2)$?",
    diagram: { type: "table", params: { xHeader: "x", yHeader: "f(x)", rows: [["0", "5"], ["2", "1"], ["4", "-3"], ["6", "9"]] } },
    correctAnswer: "-5",
    explanation: "**SAT Pattern: Function Transformation**\n\n**The correct answer is $-5$.**\n\n**The Fast Way (~15s):** The table gives $f(2) = 1$, so $g(2) = 1 - 6 = -5$.\n\n**The Full Solution:**\nStep 1: The rule $g(x) = f(x) - 6$ changes only the output, so look up $f$ at the same input: the row $x = 2$ gives $f(2) = 1$.\nStep 2: Apply the rule: $g(2) = f(2) - 6 = 1 - 6$.\nStep 3: So $g(2) = -5$. Check: every output of $g$ is $6$ less than the matching output of $f$, and $-5$ is $6$ less than $1$ ✓\n\n**Common Mistakes:**\n* $7$: adds $6$ instead of subtracting it.\n* $3$: reads the row $x = 6$ instead of $x = 2$, computing $9 - 6$.\n* $1$: reports $f(2)$ and never subtracts $6$.\n\n**Test Day Takeaway:** A constant subtracted outside the function changes outputs only; the input you look up stays the same.",
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
    question: "$f(x) = x^{2} - 3$\nThe function $g$ is defined by $g(x) = f(x) + 10$. What is the value of $g(4)$?",
    correctAnswer: "23",
    explanation: "**SAT Pattern: Function Transformation**\n\n**The correct answer is $23$.**\n\n**The Fast Way (~15s):** $f(4) = 16 - 3 = 13$, so $g(4) = 13 + 10 = 23$.\n\n**The Full Solution:**\nStep 1: By definition, $g(4) = f(4) + 10$.\nStep 2: Evaluate $f$ at $4$: $f(4) = 4^{2} - 3 = 16 - 3 = 13$.\nStep 3: Add $10$: $g(4) = 13 + 10 = 23$. Check: $g(x) = x^{2} + 7$, and $4^{2} + 7 = 23$ ✓\n\n**Common Mistakes:**\n* $13$: finds $f(4)$ and forgets to add $10$.\n* $15$: computes $4^{2}$ as $2(4) = 8$, so $8 - 3 + 10 = 15$.\n\n**Test Day Takeaway:** For $g(x) = f(x) + c$, find the output of $f$ first, then add $c$.",
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
    question: "In the $xy$-plane, the graph of $y = f(x)$ is shown. If $g(x) = f(x - 4)$, what is the value of $g(2)$?",
    diagram: { type: "quadraticVertex", params: { vertex: [-2, -9], a: 1, showPoints: [[-5, 0], [1, 0]], showVertex: true } },
    correctAnswer: "-9",
    explanation: "**SAT Pattern: Function Transformation**\n\n**The correct answer is $-9$.**\n\n**The Fast Way (~20s):** $g(2) = f(2 - 4) = f(-2)$, and the graph shows its lowest point at $(-2, -9)$, so $g(2) = -9$.\n\n**The Full Solution:**\nStep 1: Substitute $2$ for $x$ in the definition of $g$: $g(2) = f(2 - 4) = f(-2)$.\nStep 2: Read $f(-2)$ from the graph: the point on the graph with $x = -2$ is the vertex, $(-2, -9)$.\nStep 3: So $g(2) = f(-2) = -9$. Check: the graph has $x$-intercepts $-5$ and $1$ and vertex $(-2, -9)$, so $f(x) = (x + 2)^{2} - 9$ and $f(-2) = 0 - 9 = -9$ ✓\n\n**Common Mistakes:**\n* $7$: reads $f(2)$ and ignores the $- 4$ inside $f$.\n* $55$: adds $4$ instead of subtracting it, finding $f(6)$.\n\n**Test Day Takeaway:** To evaluate $f(x - c)$ at a number, subtract $c$ from the number first, then read $f$ at the result.",
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
    question: "For the function $d$, the table shows five values of $x$ and their corresponding values of $d(x)$. If $e(x) = d(x) - 6$, what value of $x$ satisfies $e(x) = -11$?",
    diagram: { type: "table", params: { xHeader: "x", yHeader: "d(x)", rows: [["-2", "13"], ["0", "5"], ["2", "1"], ["4", "-5"], ["6", "-11"]] } },
    correctAnswer: "4",
    explanation: "**SAT Pattern: Function Transformation**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~20s):** $d(x) - 6 = -11$ means $d(x) = -5$, and the table gives $d(4) = -5$.\n\n**The Full Solution:**\nStep 1: Write $e(x) = -11$ in terms of $d$: $d(x) - 6 = -11$.\nStep 2: Add $6$ to both sides: $d(x) = -5$.\nStep 3: In the table, $d(x) = -5$ when $x = 4$. Check: $e(4) = d(4) - 6 = -5 - 6 = -11$ ✓\n\n**Common Mistakes:**\n* $6$: finds the row where $d(x) = -11$, skipping the $- 6$ in the definition of $e$.\n* $-5$: reports the value of $d(x)$ instead of the value of $x$.\n\n**Test Day Takeaway:** Turn a condition on $e(x)$ into a condition on $d(x)$, then look up the input in the table.",
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
    question: "The function $h$ is defined by $h(x) = f(x - 5)$, where the graph of $y = f(x)$ is shown. For what value of $x$ does $h(x)$ reach its maximum?",
    diagram: { type: "quadraticVertex", params: { vertex: [-1, 7], a: -1, showPoints: [[-3, 3], [1, 3]], showVertex: true } },
    choices: [
      // distractor: moves the vertex 5 units left instead of right: -1 - 5
      { id: "A", text: "$-6$" },
      // distractor: gives the x-coordinate of the vertex of f, ignoring the shift
      { id: "B", text: "$-1$" },
      { id: "C", text: "$4$" },
      // distractor: gives the maximum value of h instead of the x-value where it occurs
      { id: "D", text: "$7$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Function Transformation**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The graph of $f$ peaks at $x = -1$. Since $h(x) = f(x - 5)$, $h$ peaks where $x - 5 = -1$, so $x = 4$.\n\n**The Full Solution:**\nStep 1: The graph of $f$ reaches its maximum, $7$, at its vertex $(-1, 7)$.\nStep 2: $h(x) = f(x - 5)$ reaches its maximum when the input of $f$ is $-1$: $x - 5 = -1$.\nStep 3: Solve: $x = 4$. Check: $h(4) = f(-1) = 7$, the greatest value of $f$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): moves the vertex $5$ units left; replacing $x$ with $x - 5$ moves the graph right.\n* Choice B ($-1$): is where $f$ reaches its maximum; $h$ is $f$ moved $5$ units right.\n* Choice D ($7$): is the maximum value of $h$, not the value of $x$ where it occurs.\n\n**Test Day Takeaway:** The graph of $y = f(x - c)$ is the graph of $f$ moved $c$ units right, so its vertex moves right by $c$.",
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
    question: "The graph of $y = f(x)$ is shown. If $h(x) = f(x) + 5$, what is the $y$-coordinate of the $y$-intercept of the graph of $y = h(x)$?",
    diagram: { type: "quadraticVertex", params: { vertex: [2, -3], a: 1, showPoints: [[0, 1]], showVertex: true } },
    choices: [
      // distractor: reports f(0) and forgets the shift
      { id: "A", text: "$1$" },
      // distractor: shifts the vertex instead, computing -3 + 5, the minimum of h
      { id: "B", text: "$2$" },
      // distractor: reports the size of the shift by itself
      { id: "C", text: "$5$" },
      { id: "D", text: "$6$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Function Transformation**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** The graph crosses the $y$-axis at $(0, 1)$, so $f(0) = 1$ and $h(0) = 1 + 5 = 6$.\n\n**The Full Solution:**\nStep 1: The $y$-intercept of $y = h(x)$ is the point where $x = 0$, so the question asks for $h(0)$.\nStep 2: The graph of $f$ crosses the $y$-axis at $(0, 1)$, so $f(0) = 1$.\nStep 3: So $h(0) = f(0) + 5 = 6$. Check: the graph is $f(x) = (x - 2)^{2} - 3$, so $f(0) = 4 - 3 = 1$ and $h(0) = 6$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($1$): reads $f(0)$ but never adds $5$.\n* Choice B ($2$): adds $5$ to the vertex value, $-3 + 5$, which is the minimum of $h$, not its $y$-intercept.\n* Choice C ($5$): reports the shift alone, as if $f(0)$ were $0$.\n\n**Test Day Takeaway:** A vertical shift moves every point, the $y$-intercept included, by the shift amount; find $f(0)$ first, then shift it.",
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
    question: "The graph of the quadratic function $f$ is shown. If $g(x) = f(x + 3)$, which equation defines $g$?",
    diagram: { type: "quadraticVertex", params: { vertex: [4, 1], a: 1, showPoints: [[2, 5], [6, 5]], showVertex: true } },
    choices: [
      // distractor: replaces x with x - 3, moving the graph right instead of left
      { id: "A", text: "$g(x) = (x - 7)^{2} + 1$" },
      // distractor: adds 3 to the output, which is f(x) + 3, not f(x + 3)
      { id: "B", text: "$g(x) = (x - 4)^{2} + 4$" },
      { id: "C", text: "$g(x) = (x - 1)^{2} + 1$" },
      // distractor: simplifies (x + 3) - 4 as x + 1
      { id: "D", text: "$g(x) = (x + 1)^{2} + 1$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Function Transformation**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** The graph has vertex $(4, 1)$ and passes through $(2, 5)$, so $f(x) = (x - 4)^{2} + 1$. Then $g(x) = f(x + 3) = (x + 3 - 4)^{2} + 1 = (x - 1)^{2} + 1$.\n\n**The Full Solution:**\nStep 1: The vertex of the graph is $(4, 1)$, so $f(x) = a(x - 4)^{2} + 1$ for some constant $a$.\nStep 2: The point $(2, 5)$ is on the graph: $5 = a(2 - 4)^{2} + 1$, so $4a = 4$ and $a = 1$. Thus $f(x) = (x - 4)^{2} + 1$.\nStep 3: Replace $x$ with $x + 3$: $g(x) = ((x + 3) - 4)^{2} + 1 = (x - 1)^{2} + 1$. Check: $g(-1) = f(2) = 5$, and $(-1 - 1)^{2} + 1 = 5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($g(x) = (x - 7)^{2} + 1$): moves the vertex $3$ units right; replacing $x$ with $x + 3$ moves the graph $3$ units left.\n* Choice B ($g(x) = (x - 4)^{2} + 4$): adds $3$ to the output, which describes $f(x) + 3$, not $f(x + 3)$.\n* Choice D ($g(x) = (x + 1)^{2} + 1$): simplifies $(x + 3) - 4$ as $x + 1$ instead of $x - 1$.\n\n**Test Day Takeaway:** For $g(x) = f(x + c)$, substitute $x + c$ for every $x$ in $f$; the graph moves $c$ units left.",
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
    question: "$f(x) = (x - 6)(x + 2)$\nThe function $f$ is defined by the given equation. If $g(x) = f(x + 5)$, what is the $x$-coordinate of the positive $x$-intercept of the graph of $y = g(x)$ in the $xy$-plane?",
    choices: [
      // distractor: gives the other x-intercept of g, which is negative
      { id: "A", text: "$-7$" },
      { id: "B", text: "$1$" },
      // distractor: reports the positive x-intercept of f, without the shift
      { id: "C", text: "$6$" },
      // distractor: moves the intercept 5 units right instead of left: 6 + 5
      { id: "D", text: "$11$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Function Transformation**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** $g(x) = (x + 5 - 6)(x + 5 + 2) = (x - 1)(x + 7)$, so the $x$-intercepts are at $x = 1$ and $x = -7$; the positive one is $1$.\n\n**The Full Solution:**\nStep 1: Replace $x$ with $x + 5$ in $f$: $g(x) = ((x + 5) - 6)((x + 5) + 2) = (x - 1)(x + 7)$.\nStep 2: The graph of $y = g(x)$ meets the $x$-axis where $g(x) = 0$: $x - 1 = 0$ or $x + 7 = 0$, so $x = 1$ or $x = -7$.\nStep 3: The positive $x$-intercept is $(1, 0)$, so its $x$-coordinate is $1$. Check: $g(1) = f(6) = (0)(8) = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-7$): is the other $x$-intercept of the graph of $g$, which is negative.\n* Choice C ($6$): is the positive $x$-intercept of $f$ itself; $g(6) = f(11) = 65$, not $0$.\n* Choice D ($11$): moves the intercept $5$ units right; replacing $x$ with $x + 5$ moves the graph $5$ units left.\n\n**Test Day Takeaway:** The graph of $y = f(x + c)$ is the graph of $f$ moved $c$ units left, so each $x$-intercept of $f$ decreases by $c$.",
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
    question: "$\\dfrac{7^{12}}{7^{5}} = 7^{n}$\nWhat is the value of $n$?",
    correctAnswer: "7",
    explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~10s):** Same base, so subtract the exponents: $12 - 5 = 7$.\n\n**The Full Solution:**\nStep 1: Both powers have the base $7$.\nStep 2: Dividing powers of the same base subtracts the exponents: $\\frac{7^{12}}{7^{5}} = 7^{12 - 5}$.\nStep 3: So $7^{n} = 7^{7}$ and $n = 7$. Check: $7^{7} \\cdot 7^{5} = 7^{12}$ ✓\n\n**Common Mistakes:**\n* $17$: adds the exponents instead of subtracting.\n* $2.4$: divides the exponents, computing $\\frac{12}{5}$.\n* $60$: multiplies the exponents.\n\n**Test Day Takeaway:** Dividing powers of the same base subtracts exponents; the answer asked for is usually the exponent, not the power.",
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
    question: "If $4 \\cdot 4^{9} = 4^{m}$, what is the value of $m$?",
    correctAnswer: "10",
    explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~10s):** $4 \\cdot 4^{9} = 4^{1} \\cdot 4^{9} = 4^{10}$, so $m = 10$.\n\n**The Full Solution:**\nStep 1: Write the lone factor $4$ as a power: $4 = 4^{1}$.\nStep 2: The product is $4^{1} \\cdot 4^{9}$.\nStep 3: Multiplying powers of the same base adds exponents: $4^{1 + 9} = 4^{10}$, so $m = 10$. Check: $\\frac{4^{10}}{4^{9}} = 4$ ✓\n\n**Common Mistakes:**\n* $9$: ignores the extra factor of $4$.\n* $13$: adds the base $4$ to the exponent instead of adding $1$.\n* $36$: multiplies $4$ and $9$, treating the product as $\\left(4^{9}\\right)^{4}$.\n\n**Test Day Takeaway:** A base with no visible exponent has exponent $1$; write it that way before combining.",
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
    question: "$\\dfrac{9^{x}}{3^{5}} = 3^{13}$\nWhat value of $x$ satisfies the given equation?",
    correctAnswer: "9",
    explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~20s):** Rewrite $9^{x}$ as $3^{2x}$: $3^{2x - 5} = 3^{13}$, so $2x = 18$ and $x = 9$.\n\n**The Full Solution:**\nStep 1: Since $9 = 3^{2}$, $9^{x} = \\left(3^{2}\\right)^{x} = 3^{2x}$.\nStep 2: The left side becomes $\\frac{3^{2x}}{3^{5}} = 3^{2x - 5}$, so $2x - 5 = 13$.\nStep 3: Solve: $2x = 18$, so $x = 9$. Check: $9^{9} = 3^{18}$, and $\\frac{3^{18}}{3^{5}} = 3^{13}$ ✓\n\n**Common Mistakes:**\n* $18$: solves $2x = 18$ and reports $2x$.\n* $4$: subtracts $5$ instead of adding it, solving $2x = 8$.\n* $6.5$: ignores the $3^{5}$ and solves $2x = 13$.\n\n**Test Day Takeaway:** Put both sides on one base before matching exponents; $9$, $27$, and $81$ are all powers of $3$.",
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
    question: "Which expression is equivalent to $\\dfrac{\\left(2x^{5}\\right)^{3}}{4x^{6}}$, where $x > 0$?",
    choices: [
      // distractor: leaves the coefficient 2 uncubed, getting 2/4 = 1/2
      { id: "A", text: "$\\frac{1}{2}x^{9}$" },
      // distractor: adds the exponents 5 + 3 instead of multiplying them, then subtracts 6
      { id: "B", text: "$2x^{2}$" },
      { id: "C", text: "$2x^{9}$" },
      // distractor: cubes the coefficient but never divides by 4
      { id: "D", text: "$8x^{9}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** $\\left(2x^{5}\\right)^{3} = 8x^{15}$, and $\\frac{8x^{15}}{4x^{6}} = 2x^{9}$.\n\n**The Full Solution:**\nStep 1: Raise both factors to the third power: $\\left(2x^{5}\\right)^{3} = 2^{3}x^{15} = 8x^{15}$.\nStep 2: Divide the coefficients: $\\frac{8}{4} = 2$.\nStep 3: Subtract the exponents: $x^{15 - 6} = x^{9}$, so the expression is $2x^{9}$. Check at $x = 1$: $\\frac{8}{4} = 2$ and $2(1)^{9} = 2$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{2}x^{9}$): leaves the $2$ uncubed, giving $\\frac{2}{4}$.\n* Choice B ($2x^{2}$): adds $5 + 3 = 8$ instead of multiplying, then subtracts $6$.\n* Choice D ($8x^{9}$): cubes the coefficient but never divides by $4$.\n\n**Test Day Takeaway:** An outer exponent applies to the coefficient too, and a power of a power multiplies exponents.",
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
    question: "$8^{x} = 4^{x + 3} \\cdot 2^{5}$\nWhat is the solution to the given equation?",
    correctAnswer: "11",
    explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**The correct answer is $11$.**\n\n**The Fast Way (~25s):** Write every base as a power of $2$: $2^{3x} = 2^{2x + 6} \\cdot 2^{5} = 2^{2x + 11}$, so $3x = 2x + 11$ and $x = 11$.\n\n**The Full Solution:**\nStep 1: Since $8 = 2^{3}$ and $4 = 2^{2}$, the equation becomes $\\left(2^{3}\\right)^{x} = \\left(2^{2}\\right)^{x + 3} \\cdot 2^{5}$.\nStep 2: Simplify each side: $2^{3x} = 2^{2x + 6 + 5} = 2^{2x + 11}$.\nStep 3: Equal powers of the same base have equal exponents, so $3x = 2x + 11$ and $x = 11$. Check: $8^{11} = 2^{33}$, and $4^{14} \\cdot 2^{5} = 2^{28} \\cdot 2^{5} = 2^{33}$ ✓\n\n**Common Mistakes:**\n* $8$: does not distribute the $2$ over $x + 3$, solving $3x = 2x + 3 + 5$.\n* $1$: subtracts the $5$ instead of adding it, solving $3x = 2x + 6 - 5$.\n* $33$: reports the exponent $3x$ instead of $x$.\n\n**Test Day Takeaway:** Rewrite every base as a power of the smallest base first; only then compare exponents.",
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
    question: "The expression $\\dfrac{(2x^{a})^{3}}{x^{4}}$ is equivalent to $8x^{11}$, where $a$ is a constant and $x > 0$. What is the value of $a$?",
    choices: [
      // distractor: adds the 4 instead of subtracting it, solving 3a + 4 = 11
      { id: "A", text: "$\\frac{7}{3}$" },
      // distractor: ignores the division by x^4 and solves 3a = 11
      { id: "B", text: "$\\frac{11}{3}$" },
      { id: "C", text: "$5$" },
      // distractor: forgets to multiply the exponent a by 3, solving a - 4 = 11
      { id: "D", text: "$15$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Cubing gives $8x^{3a}$ and dividing by $x^{4}$ gives $8x^{3a-4}$, so $3a - 4 = 11$ and $a = 5$.\n\n**The Full Solution:**\nStep 1: Raise the numerator to the third power: $(2x^{a})^{3} = 2^{3}x^{3a} = 8x^{3a}$.\nStep 2: Divide by subtracting exponents: $\\dfrac{8x^{3a}}{x^{4}} = 8x^{3a-4}$.\nStep 3: Match the exponent of $8x^{11}$: $3a - 4 = 11$, so $3a = 15$ and $a = 5$. Check: $\\dfrac{(2x^{5})^{3}}{x^{4}} = \\dfrac{8x^{15}}{x^{4}} = 8x^{11}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{7}{3}$): adds the $4$ instead of subtracting it, solving $3a + 4 = 11$.\n* Choice B ($\\frac{11}{3}$): ignores the division by $x^{4}$ and solves $3a = 11$.\n* Choice D ($15$): forgets to multiply the exponent $a$ by $3$ when cubing, solving $a - 4 = 11$.\n\n**Test Day Takeaway:** A power of a power multiplies exponents and a quotient subtracts them; build one exponent first, then match it.",
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
    question: "$\\dfrac{4^{x+3}\\cdot 8^{x}}{2^{x-1}} = 2^{27}$\nWhat is the solution to the given equation?",
    correctAnswer: "5",
    explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~30s):** In base $2$ the exponent is $2(x+3) + 3x - (x-1) = 4x + 7$, so $4x + 7 = 27$ and $x = 5$.\n\n**The Full Solution:**\nStep 1: Rewrite each base as a power of $2$: $4^{x+3} = 2^{2x+6}$ and $8^{x} = 2^{3x}$.\nStep 2: Combine: $\\dfrac{2^{2x+6}\\cdot 2^{3x}}{2^{x-1}} = 2^{(2x+6) + 3x - (x-1)} = 2^{4x+7}$.\nStep 3: Set the exponents equal: $4x + 7 = 27$, so $4x = 20$ and $x = 5$. Check: $4^{8}\\cdot 8^{5} = 2^{16}\\cdot 2^{15} = 2^{31}$, and $2^{31} \\div 2^{4} = 2^{27}$ ✓\n\n**Common Mistakes:**\n* $5.75$: writes $4^{x+3}$ as $2^{2x+3}$, doubling the $x$ but not the $3$, which gives $4x + 4 = 27$.\n* $5.5$: subtracts the denominator's exponent as $x + 1$ instead of $x - 1$, which gives $4x + 5 = 27$.\n* $23$: adds and subtracts the exponents without converting the bases, solving $(x + 3) + x - (x - 1) = 27$.\n\n**Test Day Takeaway:** Convert every base to the common base before combining, and multiply the whole exponent, not just its variable.",
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
    question: "Which expression is equivalent to $\\left(\\dfrac{a^{3}b^{-4}}{a^{-2}b}\\right)^{-3}$, where $a > 0$ and $b > 0$?",
    choices: [
      // distractor: adds -3 to each exponent instead of multiplying by -3: a^(5-3) b^(-5-3)
      { id: "A", text: "$a^{2}b^{-8}$" },
      // distractor: drops the negative sign of the outer exponent and cubes a^5 b^-5
      { id: "B", text: "$a^{15}b^{-15}$" },
      // distractor: computes 3 - (-2) as 1 for the exponent of a, then applies -3 correctly
      { id: "C", text: "$a^{-3}b^{15}$" },
      { id: "D", text: "$a^{-15}b^{15}$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** Inside the parentheses the quotient is $a^{3-(-2)}b^{-4-1} = a^{5}b^{-5}$; raising it to the $-3$ power gives $a^{-15}b^{15}$.\n\n**The Full Solution:**\nStep 1: Simplify the quotient inside the parentheses: $\\dfrac{a^{3}}{a^{-2}} = a^{3-(-2)} = a^{5}$ and $\\dfrac{b^{-4}}{b^{1}} = b^{-4-1} = b^{-5}$.\nStep 2: Raise $a^{5}b^{-5}$ to the $-3$ power by multiplying each exponent by $-3$: $a^{-15}b^{15}$.\nStep 3: So the expression is equivalent to $a^{-15}b^{15}$. Check with $a = 2$ and $b = 1$: the inside is $\\dfrac{8}{1/4} = 32 = 2^{5}$, and $(2^{5})^{-3} = 2^{-15}$, which matches $2^{-15}\\cdot 1^{15}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($a^{2}b^{-8}$): adds $-3$ to each exponent instead of multiplying by $-3$, turning $a^{5}b^{-5}$ into $a^{2}b^{-8}$.\n* Choice B ($a^{15}b^{-15}$): drops the negative sign of the outer exponent and cubes $a^{5}b^{-5}$.\n* Choice C ($a^{-3}b^{15}$): computes the exponent of $a$ inside as $3 + (-2) = 1$ instead of $3 - (-2) = 5$.\n\n**Test Day Takeaway:** Simplify inside the parentheses first, then multiply every exponent by the outer exponent, sign included.",
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
    question: "The graph of $y = g(x)$, where $g$ is a quadratic function, is shown. For what value of $k$ does the line $y = k$ intersect the graph at exactly one point?",
    diagram: { type: "quadraticVertex", params: { vertex: [2, -5], a: 0.5, showVertex: true } },
    choices: [
      { id: "A", text: "$-5$" },
      // distractor: uses the y-intercept of the graph, -3; the line y = -3 crosses the graph twice
      { id: "B", text: "$-3$" },
      // distractor: assumes the x-axis, y = 0, meets the graph once; it crosses it twice
      { id: "C", text: "$0$" },
      // distractor: uses the x-coordinate of the vertex instead of its y-coordinate
      { id: "D", text: "$2$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** A horizontal line meets a parabola exactly once only at the vertex, and the vertex is $(2, -5)$, so $k = -5$.\n\n**The Full Solution:**\nStep 1: The line $y = k$ is horizontal. It crosses an upward-opening parabola twice above the vertex, misses it below the vertex, and touches it once at the vertex.\nStep 2: Read the vertex from the graph: $(2, -5)$.\nStep 3: So $k = -5$. Check: the line $y = -3$ meets the graph at both $(0, -3)$ and $(4, -3)$, while $y = -5$ meets it only at $(2, -5)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-3$): uses the graph's $y$-intercept; the line $y = -3$ crosses the graph twice, at $x = 0$ and $x = 4$.\n* Choice C ($0$): assumes the $x$-axis is the line that meets the graph once, but the graph crosses it twice.\n* Choice D ($2$): uses the $x$-coordinate of the vertex instead of its $y$-coordinate.\n\n**Test Day Takeaway:** A horizontal line touches a parabola at exactly one point only at the vertex, so $k$ is the vertex's $y$-coordinate.",
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
    question: "$y = 2(x - 3)^{2} + 7$\n$y = k$\nIn the given system of equations, $k$ is a constant. For what value of $k$ does the system have exactly one real solution?",
    correctAnswer: "7",
    explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~15s):** The parabola opens upward with vertex $(3, 7)$, so the horizontal line $y = k$ meets it exactly once when $k = 7$.\n\n**The Full Solution:**\nStep 1: The first equation is in vertex form with vertex $(3, 7)$. Its leading coefficient, $2$, is positive, so the parabola opens upward and $7$ is its least $y$-value.\nStep 2: The graph of $y = k$ is a horizontal line. It meets the parabola twice if $k > 7$, never if $k < 7$, and exactly once when it passes through the vertex.\nStep 3: So $k = 7$. Check: $2(x - 3)^{2} + 7 = 7$ gives $(x - 3)^{2} = 0$, whose only solution is $x = 3$ ✓\n\n**Common Mistakes:**\n* $3$: reports the $x$-coordinate of the vertex instead of the $y$-coordinate.\n* $2$: reports the leading coefficient, which only sets how wide the parabola is.\n* $-7$: changes the sign of $7$ as if it were the $3$ inside $(x - 3)$; the $+7$ is read as written.\n\n**Test Day Takeaway:** A horizontal line meets a parabola exactly once only at the vertex, so $k$ is the $y$-coordinate of the vertex.",
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
    question: "In the $xy$-plane, the graph of $y = x^{2} + 5x + 10$ intersects the line $y = mx + 1$ at exactly one point. If $m$ is a positive constant, what is the value of $m$?",
    choices: [
      // distractor: keeps the negative solution of (5 - m)^2 = 36 even though m is positive
      { id: "A", text: "$-1$" },
      // distractor: combines 5x - mx as (5 + m)x, so (5 + m)^2 = 36 gives m = 1
      { id: "B", text: "$1$" },
      // distractor: sets m equal to the square root of 36, forgetting the 5 in 5 - m
      { id: "C", text: "$6$" },
      { id: "D", text: "$11$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** Setting the expressions equal gives $x^{2} + (5 - m)x + 9 = 0$, which has one solution when $(5 - m)^{2} = 36$; the positive choice is $m = 11$.\n\n**The Full Solution:**\nStep 1: Set the expressions equal: $x^{2} + 5x + 10 = mx + 1$, so $x^{2} + (5 - m)x + 9 = 0$.\nStep 2: Exactly one intersection point means the discriminant is $0$: $(5 - m)^{2} - 4(1)(9) = 0$, so $(5 - m)^{2} = 36$.\nStep 3: Then $5 - m = 6$ or $5 - m = -6$, so $m = -1$ or $m = 11$; since $m$ is positive, $m = 11$. Check: $x^{2} - 6x + 9 = (x - 3)^{2}$, so the only intersection is at $x = 3$, where both equations give $y = 34$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-1$): is the other solution of $(5 - m)^{2} = 36$, but $m$ must be positive.\n* Choice B ($1$): combines $5x - mx$ as $(5 + m)x$, so $(5 + m)^{2} = 36$ gives $m = 1$.\n* Choice C ($6$): sets $m$ equal to $\\sqrt{36}$, forgetting the $5$ in the coefficient $5 - m$.\n\n**Test Day Takeaway:** When a squared expression equals a positive number, keep both signs, then use the given condition to choose.",
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
    question: "$y = x^{2} - 4x + k$\n$y = 2x - 7$\nThe given system of equations, where $k$ is a constant, has exactly one real solution $(x, y)$. What is the value of $x$?",
    correctAnswer: "3",
    explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~20s):** The combined equation $x^{2} - 6x + (k + 7) = 0$ must have a repeated root, and a repeated root of $x^{2} - 6x + \\dots$ is half of $6$, so $x = 3$.\n\n**The Full Solution:**\nStep 1: Set the expressions equal: $x^{2} - 4x + k = 2x - 7$, so $x^{2} - 6x + (k + 7) = 0$.\nStep 2: Exactly one solution means this quadratic is a perfect square with a repeated root: $(x - 3)^{2} = x^{2} - 6x + 9$, so the root is $x = 3$ and $k + 7 = 9$.\nStep 3: So $x = 3$ (and $k = 2$). Check: at $x = 3$, $y = 9 - 12 + 2 = -1$ and $y = 2(3) - 7 = -1$, and $x^{2} - 6x + 9 = 0$ has no other root ✓\n\n**Common Mistakes:**\n* $2$: reports the value of $k$ instead of $x$.\n* $-1$: reports the $y$-coordinate of the solution.\n* $-3$: writes the perfect square as $(x + 3)^{2}$, dropping the sign of $-6x$.\n\n**Test Day Takeaway:** For a tangent line, the combined quadratic is a perfect square; its repeated root is $-\\frac{b}{2a}$, even when another constant is unknown.",
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
    question: "The graph of the quadratic function $f$ is shown. Which of the following lines intersects the graph of $y = f(x)$ at exactly one point?",
    diagram: { type: "quadraticVertex", params: { vertex: [-2, 1], a: 1, showVertex: true, showPoints: [[0, 5]] } },
    choices: [
      { id: "A", text: "$y = 2x + 4$" },
      // distractor: passes through the vertex (-2, 1) and the point (0, 5), so it crosses the graph twice
      { id: "B", text: "$y = 2x + 5$" },
      // distractor: uses b^2 + 4ac instead of b^2 - 4ac: 4 + 4(5 - b) = 0 gives b = 6
      { id: "C", text: "$y = 2x + 6$" },
      // distractor: uses the vertex's y-coordinate, 1, as the y-intercept; this line misses the graph
      { id: "D", text: "$y = 4x + 1$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** From the vertex $(-2, 1)$ and the point $(0, 5)$, $f(x) = x^{2} + 4x + 5$; setting it equal to $2x + 4$ gives $(x + 1)^{2} = 0$, exactly one solution.\n\n**The Full Solution:**\nStep 1: The vertex is $(-2, 1)$, so $f(x) = a(x + 2)^{2} + 1$. The point $(0, 5)$ gives $5 = 4a + 1$, so $a = 1$ and $f(x) = x^{2} + 4x + 5$.\nStep 2: Test $y = 2x + 4$: $x^{2} + 4x + 5 = 2x + 4$ gives $x^{2} + 2x + 1 = 0$, or $(x + 1)^{2} = 0$, exactly one solution.\nStep 3: The other lines give $x^{2} + 2x = 0$ (two solutions), $x^{2} + 2x - 1 = 0$ (discriminant $8$, two solutions) and $x^{2} + 4 = 0$ (none). Check: $f(-1) = 1 - 4 + 5 = 2$ and $2(-1) + 4 = 2$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($y = 2x + 5$): passes through the vertex $(-2, 1)$ and also through $(0, 5)$, so it meets the graph twice.\n* Choice C ($y = 2x + 6$): uses $b^{2} + 4ac$ instead of $b^{2} - 4ac$, so $4 + 4(5 - b) = 0$ gives $6$; this line crosses the graph twice.\n* Choice D ($y = 4x + 1$): uses the vertex's $y$-coordinate, $1$, as the $y$-intercept; $x^{2} + 4 = 0$ has no real solutions, so this line misses the graph.\n\n**Test Day Takeaway:** Write the quadratic from the graph, set it equal to the line, and look for a discriminant of exactly $0$.",
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
    question: "In the $xy$-plane, the graphs of $y = x^{2} - 8x + k$ and $y = 2x - 5$, where $k$ is a constant, have exactly one point in common. What is the value of $k$?",
    correctAnswer: "20",
    explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**The correct answer is $20$.**\n\n**The Fast Way (~25s):** Setting the expressions equal gives $x^{2} - 10x + (k + 5) = 0$, which has one solution when $100 = 4(k + 5)$, so $k = 20$.\n\n**The Full Solution:**\nStep 1: Set the expressions equal: $x^{2} - 8x + k = 2x - 5$, so $x^{2} - 10x + (k + 5) = 0$.\nStep 2: One common point means the discriminant is $0$: $(-10)^{2} - 4(1)(k + 5) = 0$, so $100 = 4k + 20$.\nStep 3: Solve: $4k = 80$, so $k = 20$. Check: $x^{2} - 10x + 25 = (x - 5)^{2}$, and at $x = 5$ both equations give $y = 5$ ✓\n\n**Common Mistakes:**\n* $25$: forgets to move the $-5$, using $x^{2} - 10x + k = 0$.\n* $30$: moves the $-5$ with the wrong sign, using $k - 5$ as the constant term.\n* $11$: forgets to subtract $2x$, using $x^{2} - 8x + (k + 5) = 0$.\n\n**Test Day Takeaway:** Gather every term on one side before using the discriminant; a sign slip in the constant term changes the answer.",
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
    question: "$y = x^{2} - 6x + 14$\n$y = 2x + t$\nIn the given system of equations, $t$ is a constant. If the system has no real solutions, which of the following describes all possible values of $t$?",
    choices: [
      // distractor: writes the constant term as 14 + t instead of 14 - t
      { id: "A", text: "$t > 2$" },
      // distractor: solves discriminant > 0, which is the condition for two solutions
      { id: "B", text: "$t > -2$" },
      { id: "C", text: "$t < -2$" },
      // distractor: only requires the constant term 14 - t to be positive
      { id: "D", text: "$t < 14$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** Setting the expressions equal gives $x^{2} - 8x + (14 - t) = 0$; no real solutions means $64 - 4(14 - t) < 0$, so $8 + 4t < 0$ and $t < -2$.\n\n**The Full Solution:**\nStep 1: Set the expressions equal: $x^{2} - 6x + 14 = 2x + t$, so $x^{2} - 8x + (14 - t) = 0$.\nStep 2: No real solutions means the discriminant is negative: $(-8)^{2} - 4(1)(14 - t) < 0$, so $64 - 56 + 4t < 0$.\nStep 3: Then $8 + 4t < 0$, so $t < -2$. Check: $t = -3$ gives $x^{2} - 8x + 17 = 0$ with discriminant $-4 < 0$, and the boundary $t = -2$ gives $(x - 4)^{2} = 0$, one solution ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($t > 2$): writes the constant term as $14 + t$ instead of $14 - t$.\n* Choice B ($t > -2$): solves discriminant $> 0$, the condition for two solutions, not none.\n* Choice D ($t < 14$): only requires the constant term $14 - t$ to be positive, which does not rule out real solutions.\n\n**Test Day Takeaway:** No intersection means a negative discriminant; test one value on each side of the boundary to confirm the direction.",
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
    question: "In the $xy$-plane, the line $y = kx - 5$, where $k$ is a constant, intersects the graph of $y = 2x^{2} + 3$ at exactly one point. If $k < 0$, what is the value of $k$?",
    correctAnswer: "-8",
    explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**The correct answer is $-8$.**\n\n**The Fast Way (~30s):** Setting the expressions equal gives $2x^{2} - kx + 8 = 0$, which has one solution when $k^{2} = 4(2)(8) = 64$; since $k < 0$, $k = -8$.\n\n**The Full Solution:**\nStep 1: Set the expressions equal: $2x^{2} + 3 = kx - 5$, so $2x^{2} - kx + 8 = 0$.\nStep 2: One intersection point means the discriminant is $0$: $(-k)^{2} - 4(2)(8) = 0$, so $k^{2} = 64$.\nStep 3: Then $k = 8$ or $k = -8$, and $k < 0$, so $k = -8$. Check: $2x^{2} + 8x + 8 = 2(x + 2)^{2}$, and at $x = -2$ both equations give $y = 11$ ✓\n\n**Common Mistakes:**\n* $8$: solves $k^{2} = 64$ correctly but ignores the condition $k < 0$.\n* $-4\\sqrt{2}$ (about $-5.66$): drops the leading coefficient $2$, solving $k^{2} = 4(8)$.\n* No real answer: writes the constant term as $3 - 5 = -2$, so $k^{2} = -16$.\n\n**Test Day Takeaway:** Keep the leading coefficient in $b^{2} - 4ac$, and apply the sign condition only after finding both roots.",
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
    question: "$x^{2} - 6x + 11 = 0$\nHow many distinct real solutions does the given equation have?",
    choices: [
      // distractor: completes the square to (x - 3)^2 = -2 and reads x = 3 as one solution
      { id: "A", text: "Exactly one" },
      // distractor: computes the discriminant as 36 + 44 or assumes every quadratic has two solutions
      { id: "B", text: "Exactly two" },
      // distractor: treats the equation as an identity that every x satisfies
      { id: "C", text: "Infinitely many" },
      { id: "D", text: "Zero" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** The discriminant is $(-6)^{2} - 4(1)(11) = 36 - 44 = -8$, which is negative, so there are no real solutions.\n\n**The Full Solution:**\nStep 1: Identify $a = 1$, $b = -6$ and $c = 11$.\nStep 2: Compute the discriminant: $b^{2} - 4ac = 36 - 44 = -8$.\nStep 3: A negative discriminant means zero real solutions. Check: the equation is $(x - 3)^{2} + 2 = 0$, so $(x - 3)^{2} = -2$, which no real number satisfies ✓\n\n**Why the wrong answers are tempting:**\n* Choice A (Exactly one): completes the square to $(x - 3)^{2} = -2$ and reads $x = 3$ as a solution, but a square cannot equal $-2$.\n* Choice B (Exactly two): computes the discriminant as $36 + 44$, or assumes every quadratic equation has two solutions.\n* Choice C (Infinitely many): treats the equation as true for every $x$, but $x = 0$ gives $11 = 0$.\n\n**Test Day Takeaway:** The sign of $b^{2} - 4ac$ counts the real solutions: positive gives two, zero gives one, negative gives none.",
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
    question: "In the $xy$-plane, the graph of $y = x^{2} + 10x + c$, where $c$ is a constant, intersects the $x$-axis at exactly one point. What is the value of $c$?",
    correctAnswer: "25",
    explanation: "**SAT Pattern: Discriminant Analysis**\n\n**The correct answer is $25$.**\n\n**The Fast Way (~15s):** The graph meets the $x$-axis once when $x^{2} + 10x + c = 0$ has one real solution: $10^{2} - 4c = 0$, so $c = 25$.\n\n**The Full Solution:**\nStep 1: The graph meets the $x$-axis where $y = 0$, so $x^{2} + 10x + c = 0$ must have exactly one real solution.\nStep 2: Exactly one real solution means the discriminant is $0$: $10^{2} - 4(1)(c) = 0$, so $100 = 4c$.\nStep 3: Solve: $c = 25$. Check: $x^{2} + 10x + 25 = (x + 5)^{2}$, which is $0$ only at $x = -5$, so the graph touches the $x$-axis only at $(-5, 0)$ ✓\n\n**Common Mistakes:**\n* $100$: forgets the factor $4$, solving $10^{2} - c = 0$.\n* $5$: halves $10$ but does not square it.\n\n**Test Day Takeaway:** A graph of $y = x^{2} + bx + c$ touches the $x$-axis exactly once when $c = \\left(\\frac{b}{2}\\right)^{2}$.",
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
    question: "Which of the following equations has two distinct real solutions?",
    choices: [
      // distractor: has discriminant 0, so its one solution, 3, is repeated rather than two distinct
      { id: "A", text: "$x^{2} - 6x + 9 = 0$" },
      // distractor: computes b^2 + 4ac = 16 + 28 instead of b^2 - 4ac = 16 - 28
      { id: "B", text: "$x^{2} + 4x + 7 = 0$" },
      { id: "C", text: "$3x^{2} - 5x + 2 = 0$" },
      // distractor: drops the factor 4 in 4ac and computes 16 - 10 = 6 instead of 16 - 40
      { id: "D", text: "$2x^{2} + 4x + 5 = 0$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Only $3x^{2} - 5x + 2 = 0$ has a positive discriminant: $25 - 24 = 1$.\n\n**The Full Solution:**\nStep 1: Two distinct real solutions require $b^{2} - 4ac > 0$.\nStep 2: Compute each discriminant: A: $36 - 36 = 0$; B: $16 - 28 = -12$; C: $25 - 24 = 1$; D: $16 - 40 = -24$.\nStep 3: Only choice C is positive. Check: $3x^{2} - 5x + 2 = (3x - 2)(x - 1)$, with the two solutions $\\frac{2}{3}$ and $1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($x^{2} - 6x + 9 = 0$): has discriminant $36 - 36 = 0$, so it has one repeated solution, not two distinct ones.\n* Choice B ($x^{2} + 4x + 7 = 0$): computes $b^{2} + 4ac = 16 + 28$ instead of $b^{2} - 4ac = 16 - 28 = -12$.\n* Choice D ($2x^{2} + 4x + 5 = 0$): drops the factor $4$ in $4ac$, computing $16 - 10$ instead of $16 - 40 = -24$.\n\n**Test Day Takeaway:** Compute $b^{2} - 4ac$ for each choice with the signs kept; only a strictly positive value gives two distinct solutions.",
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
    question: "$ax^{2} + 18x + 3 = 0$\nIn the given equation, $a$ is a constant. For what value of $a$ does the equation have exactly one real solution?",
    correctAnswer: "27",
    explanation: "**SAT Pattern: Discriminant Analysis**\n\n**The correct answer is $27$.**\n\n**The Fast Way (~20s):** One real solution means $18^{2} - 4(a)(3) = 0$, so $324 = 12a$ and $a = 27$.\n\n**The Full Solution:**\nStep 1: Identify the coefficients: $a$, $b = 18$ and $c = 3$.\nStep 2: Exactly one real solution means the discriminant is $0$: $18^{2} - 4(a)(3) = 0$, so $324 = 12a$.\nStep 3: Solve: $a = 27$. Check: $27x^{2} + 18x + 3 = 3(9x^{2} + 6x + 1) = 3(3x + 1)^{2}$, which is $0$ only at $x = -\\frac{1}{3}$ ✓\n\n**Common Mistakes:**\n* $108$: forgets the factor $4$, solving $324 = 3a$.\n* $54$: uses $2ac$ instead of $4ac$, solving $324 = 6a$.\n* $6$: divides $18$ by $3$ instead of using the discriminant.\n\n**Test Day Takeaway:** When the unknown is the leading coefficient, it still sits inside $4ac$; write the discriminant in full before solving.",
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
    question: "$3x^{2} - 12x + c = 0$\nIn the given equation, $c$ is a constant. If the equation has two distinct real solutions, which of the following could be the value of $c$?",
    choices: [
      { id: "A", text: "$10$" },
      // distractor: uses the boundary value, where the discriminant is 0 and there is only one solution
      { id: "B", text: "$12$" },
      // distractor: drops the leading coefficient 3, solving 144 - 4c > 0 to get c < 36
      { id: "C", text: "$24$" },
      // distractor: reverses the inequality and solves c > 12
      { id: "D", text: "$48$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Two distinct solutions need $144 - 4(3)c > 0$, so $c < 12$; only $10$ qualifies.\n\n**The Full Solution:**\nStep 1: Two distinct real solutions require $b^{2} - 4ac > 0$: $(-12)^{2} - 4(3)(c) > 0$.\nStep 2: Simplify: $144 - 12c > 0$, so $c < 12$.\nStep 3: Among the choices, only $10$ is less than $12$. Check: $c = 10$ gives a discriminant of $144 - 120 = 24 > 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($12$): is the boundary value: the discriminant is $144 - 144 = 0$, so there is only one solution.\n* Choice C ($24$): drops the leading coefficient $3$, solving $144 - 4c > 0$ to get $c < 36$.\n* Choice D ($48$): reverses the inequality, solving $c > 12$.\n\n**Test Day Takeaway:** For \"two distinct solutions,\" the discriminant must be strictly positive, so the boundary value itself is excluded.",
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
    question: "$x^{2} + (k - 2)x + 9 = 0$\nIn the given equation, $k$ is a positive constant. The equation has exactly one real solution. What is the value of $k$?",
    correctAnswer: "8",
    explanation: "**SAT Pattern: Discriminant Analysis**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~25s):** One solution means $(k - 2)^{2} = 4(9) = 36$, so $k - 2 = \\pm 6$; the positive value is $k = 8$.\n\n**The Full Solution:**\nStep 1: Exactly one real solution means the discriminant is $0$: $(k - 2)^{2} - 4(1)(9) = 0$.\nStep 2: So $(k - 2)^{2} = 36$, which gives $k - 2 = 6$ or $k - 2 = -6$.\nStep 3: Then $k = 8$ or $k = -4$; since $k$ is positive, $k = 8$. Check: $x^{2} + 6x + 9 = (x + 3)^{2}$, which is $0$ only at $x = -3$ ✓\n\n**Common Mistakes:**\n* $6$: sets $k$ equal to $6$, forgetting the $-2$ in the coefficient.\n* $4$: solves $k - 2 = 6$ as $k = 6 - 2$.\n* $-4$: keeps the negative root even though $k$ is positive.\n\n**Test Day Takeaway:** Treat the whole coefficient $(k - 2)$ as $b$, solve for both signs, then apply the condition on $k$.",
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
    question: "$kx^{2} + 6x + k = 0$\nIn the given equation, $k$ is a constant. For which of the following values of $k$ does the equation have no real solutions?",
    choices: [
      // distractor: solves k^2 > 9 as k < 3, or assumes a negative leading coefficient means no solutions
      { id: "A", text: "$-2$" },
      // distractor: assumes k = 0 leaves no solution, but 6x = 0 still gives x = 0
      { id: "B", text: "$0$" },
      // distractor: uses the boundary k = 3, where the discriminant is 0 and there is one solution
      { id: "C", text: "$3$" },
      { id: "D", text: "$4$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice D is correct.**\n\n**The Fast Way (~35s):** No real solutions means $36 - 4k^{2} < 0$, so $k^{2} > 9$; among the choices only $4$ works.\n\n**The Full Solution:**\nStep 1: For $k \\neq 0$ the equation is quadratic with $a = k$, $b = 6$ and $c = k$, so the discriminant is $36 - 4k^{2}$.\nStep 2: No real solutions requires $36 - 4k^{2} < 0$, so $k^{2} > 9$, which means $k > 3$ or $k < -3$.\nStep 3: Only $4$ satisfies this; $k = 0$ gives the linear equation $6x = 0$, which has a solution. Check: $k = 4$ gives a discriminant of $36 - 64 = -28 < 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$): solves $k^{2} > 9$ as $k < 3$; in fact the discriminant is $36 - 16 = 20 > 0$, so there are two solutions.\n* Choice B ($0$): assumes $k = 0$ removes every solution, but the equation becomes $6x = 0$, which has the solution $x = 0$.\n* Choice C ($3$): is the boundary value: the discriminant is $36 - 36 = 0$, so there is one solution.\n\n**Test Day Takeaway:** When the constant appears in both $a$ and $c$, the discriminant is quadratic in $k$; solve $k^{2} > 9$ as two intervals and check $k = 0$ separately.",
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
    question: "$x^{2} + bx + 2b - 3 = 0$\nIn the given equation, $b$ is a constant. If the equation has exactly one real solution, what is the sum of all possible values of $b$?",
    correctAnswer: "8",
    explanation: "**SAT Pattern: Discriminant Analysis**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~35s):** One solution means $b^{2} - 4(2b - 3) = 0$, or $b^{2} - 8b + 12 = 0$, so $b = 2$ or $b = 6$, and the sum is $8$.\n\n**The Full Solution:**\nStep 1: Exactly one real solution means the discriminant is $0$: $b^{2} - 4(1)(2b - 3) = 0$.\nStep 2: Expand: $b^{2} - 8b + 12 = 0$, which factors as $(b - 2)(b - 6) = 0$.\nStep 3: So $b = 2$ or $b = 6$, and the sum is $2 + 6 = 8$. Check: $b = 2$ gives $(x + 1)^{2} = 0$ and $b = 6$ gives $(x + 3)^{2} = 0$, each with one solution ✓\n\n**Common Mistakes:**\n* $6$: finds only the larger value of $b$.\n* $12$: multiplies the two values instead of adding them.\n* $-8$: uses $-\\frac{b}{a}$ with the wrong sign when summing the roots of $b^{2} - 8b + 12 = 0$.\n\n**Test Day Takeaway:** When the constant term depends on $b$, the discriminant becomes its own quadratic in $b$; its roots are the possible values.",
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
    question: "$x^{2} - 11x + 28 = 0$\nWhich of the following is a solution to the given equation?",
    choices: [
      // distractor: factors correctly as (x - 4)(x - 7) but writes the solution as -7
      { id: "A", text: "$-7$" },
      // distractor: factors correctly but writes the solution as -4
      { id: "B", text: "$-4$" },
      { id: "C", text: "$4$" },
      // distractor: uses the coefficient 11, which is the sum of the solutions
      { id: "D", text: "$11$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $x^{2} - 11x + 28 = (x - 4)(x - 7)$, so the solutions are $4$ and $7$.\n\n**The Full Solution:**\nStep 1: Find two numbers whose product is $28$ and whose sum is $-11$: $-4$ and $-7$.\nStep 2: Factor: $(x - 4)(x - 7) = 0$.\nStep 3: So $x = 4$ or $x = 7$, and only $4$ is a choice. Check: $16 - 44 + 28 = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-7$): factors as $(x - 4)(x - 7)$ but takes the sign shown in the factor, $-7$.\n* Choice B ($-4$): factors as $(x - 4)(x - 7)$ but takes the sign shown in the factor, $-4$.\n* Choice D ($11$): uses $11$, which is the sum of the two solutions, not a solution.\n\n**Test Day Takeaway:** A factor $(x - r)$ gives the solution $x = r$, with the opposite sign of the number shown in the factor.",
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
    question: "$(x + 9)(x - 4) = 0$\nWhat is the negative solution to the given equation?",
    correctAnswer: "-9",
    explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**The correct answer is $-9$.**\n\n**The Fast Way (~10s):** Set each factor equal to $0$: $x = -9$ or $x = 4$; the negative solution is $-9$.\n\n**The Full Solution:**\nStep 1: A product is $0$ only when a factor is $0$.\nStep 2: $x + 9 = 0$ gives $x = -9$, and $x - 4 = 0$ gives $x = 4$.\nStep 3: The negative solution is $-9$. Check: $(-9 + 9)(-9 - 4) = 0\\cdot(-13) = 0$ ✓\n\n**Common Mistakes:**\n* $-4$: flips the sign of the second factor instead of the first.\n* $9$: reads the number in the factor $(x + 9)$ without changing its sign.\n\n**Test Day Takeaway:** Solve each factor separately, and the solution has the opposite sign of the number in the factor.",
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
    question: "$x^{2} + bx - 36 = 0$\nIn the given equation, $b$ is a constant. If $-9$ is a solution to the equation, what is the value of $b$?",
    choices: [
      // distractor: finds the other solution, 4, then takes b as the sum of the solutions, -9 + 4, instead of its opposite
      { id: "A", text: "$-5$" },
      // distractor: reports the other solution, 4, instead of b
      { id: "B", text: "$4$" },
      { id: "C", text: "$5$" },
      // distractor: uses the opposite of the given solution
      { id: "D", text: "$9$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Substituting $-9$ gives $81 - 9b - 36 = 0$, so $9b = 45$ and $b = 5$.\n\n**The Full Solution:**\nStep 1: Substitute $x = -9$: $(-9)^{2} + b(-9) - 36 = 0$.\nStep 2: Simplify: $81 - 9b - 36 = 0$, so $45 = 9b$.\nStep 3: Solve: $b = 5$. Check: $x^{2} + 5x - 36 = (x + 9)(x - 4)$, which is $0$ at $x = -9$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): finds the other solution, $4$, then takes $b$ as the sum $-9 + 4$ instead of the opposite of the sum.\n* Choice B ($4$): is the other solution of the equation, not the value of $b$.\n* Choice D ($9$): uses the opposite of the given solution, $-9$.\n\n**Test Day Takeaway:** A given solution makes the equation true, so substitute it first and solve for the constant.",
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
    question: "$3x^{2} - 13x - 10 = 0$\nWhat is the positive solution to the given equation?",
    correctAnswer: "5",
    explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~25s):** $3x^{2} - 13x - 10 = (3x + 2)(x - 5)$, so the solutions are $-\\frac{2}{3}$ and $5$; the positive one is $5$.\n\n**The Full Solution:**\nStep 1: Look for a factorization $(3x + p)(x + q)$ with $pq = -10$ and $3q + p = -13$.\nStep 2: The pair $p = 2$, $q = -5$ works, since $3(-5) + 2 = -13$. So the equation is $(3x + 2)(x - 5) = 0$.\nStep 3: Then $3x + 2 = 0$ or $x - 5 = 0$, so $x = -\\frac{2}{3}$ or $x = 5$. The positive solution is $5$. Check: $3(25) - 13(5) - 10 = 75 - 65 - 10 = 0$ ✓\n\n**Common Mistakes:**\n* $\\frac{2}{3}$: factors as $(3x - 2)(x + 5)$, whose middle term is $+13x$, not $-13x$.\n* $\\frac{5}{3}$: factors correctly but also divides the solution $5$ by $3$.\n\n**Test Day Takeaway:** When the leading coefficient is not $1$, factor into $(ax + p)(x + q)$ and check the middle term before solving each factor.",
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
    question: "The graph of $y = 2(x - r)(x - s)$, where $r$ and $s$ are constants, is shown. What is the value of $rs$?",
    diagram: { type: "quadraticVertex", params: { vertex: [3, -8], a: 2, showPoints: [[1, 0], [5, 0]], showVertex: true } },
    choices: [
      // distractor: reports the y-coordinate of the vertex, -8
      { id: "A", text: "$-8$" },
      { id: "B", text: "$5$" },
      // distractor: adds the x-intercepts, 1 + 5, instead of multiplying them
      { id: "C", text: "$6$" },
      // distractor: includes the leading coefficient, computing 2rs = 10, which is the y-intercept
      { id: "D", text: "$10$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The $x$-intercepts are $1$ and $5$, so $r$ and $s$ are $1$ and $5$, and $rs = 5$.\n\n**The Full Solution:**\nStep 1: The graph is $0$ where $x = r$ or $x = s$, so $r$ and $s$ are the $x$-intercepts.\nStep 2: Read the $x$-intercepts from the graph: $(1, 0)$ and $(5, 0)$.\nStep 3: So $rs = 1\\cdot 5 = 5$. Check: the vertex is halfway between the intercepts, at $x = 3$, and $2(3 - 1)(3 - 5) = -8$ matches the vertex $(3, -8)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-8$): is the $y$-coordinate of the vertex, not a product of the $x$-intercepts.\n* Choice C ($6$): adds the $x$-intercepts, $1 + 5$, instead of multiplying them.\n* Choice D ($10$): includes the leading coefficient and computes $2rs$, which is the $y$-intercept, $10$.\n\n**Test Day Takeaway:** In factored form $a(x - r)(x - s)$, the numbers $r$ and $s$ are the $x$-intercepts of the graph.",
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
    question: "The function $f$ is defined by $f(x) = x^{2} - 6x - 16$. For what positive value of $x$ does $f(x) = 39$?",
    correctAnswer: "11",
    explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**The correct answer is $11$.**\n\n**The Fast Way (~25s):** $x^{2} - 6x - 16 = 39$ gives $x^{2} - 6x - 55 = 0$, or $(x - 11)(x + 5) = 0$, so the positive value is $11$.\n\n**The Full Solution:**\nStep 1: Set the function equal to $39$: $x^{2} - 6x - 16 = 39$, so $x^{2} - 6x - 55 = 0$.\nStep 2: Factor: two numbers with product $-55$ and sum $-6$ are $-11$ and $5$, so $(x - 11)(x + 5) = 0$.\nStep 3: So $x = 11$ or $x = -5$, and the positive value is $11$. Check: $f(11) = 121 - 66 - 16 = 39$ ✓\n\n**Common Mistakes:**\n* $8$: solves $f(x) = 0$ instead of $f(x) = 39$.\n* $-5$: chooses the negative solution.\n* $55$: stops after moving $39$ and reports the constant term.\n\n**Test Day Takeaway:** Move every term to one side so the equation equals $0$ before you factor.",
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
    question: "The function $f$ is defined by $f(x) = ax^{2} - 7x - 15$, where $a$ is a constant. If $f(5) = 0$, what is the sum of the solutions to $f(x) = 0$?",
    choices: [
      // distractor: uses b/a = -7/2 as the sum instead of -b/a
      { id: "A", text: "$-\\frac{7}{2}$" },
      // distractor: reports the other solution, -3/2, instead of the sum
      { id: "B", text: "$-\\frac{3}{2}$" },
      { id: "C", text: "$\\frac{7}{2}$" },
      // distractor: takes the sum as -b without dividing by a = 2
      { id: "D", text: "$7$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** $f(5) = 25a - 50 = 0$ gives $a = 2$, and the solutions of $2x^{2} - 7x - 15 = 0$ add to $\\frac{7}{2}$.\n\n**The Full Solution:**\nStep 1: Use $f(5) = 0$: $25a - 35 - 15 = 0$, so $25a = 50$ and $a = 2$.\nStep 2: Factor $2x^{2} - 7x - 15 = (2x + 3)(x - 5)$, so the solutions are $5$ and $-\\frac{3}{2}$.\nStep 3: Their sum is $5 - \\frac{3}{2} = \\frac{7}{2}$. Check: $-\\frac{b}{a} = -\\frac{-7}{2} = \\frac{7}{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{7}{2}$): uses $\\frac{b}{a} = -\\frac{7}{2}$ as the sum instead of $-\\frac{b}{a}$.\n* Choice B ($-\\frac{3}{2}$): is the other solution, not the sum of the two solutions.\n* Choice D ($7$): takes the sum as $-b = 7$ without dividing by $a = 2$.\n\n**Test Day Takeaway:** Use the known zero to find the missing coefficient, then factor or use $-\\frac{b}{a}$ for the sum.",
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
    question: "$(3x - 2)^{2} - 5(3x - 2) - 6 = 0$\nWhat is the sum of the solutions to the given equation?",
    correctAnswer: "3",
    explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~40s):** With $u = 3x - 2$, the equation is $(u - 6)(u + 1) = 0$, so $3x - 2 = 6$ or $3x - 2 = -1$, giving $x = \\frac{8}{3}$ and $x = \\frac{1}{3}$, which add to $3$.\n\n**The Full Solution:**\nStep 1: Let $u = 3x - 2$. The equation becomes $u^{2} - 5u - 6 = 0$, which factors as $(u - 6)(u + 1) = 0$.\nStep 2: So $3x - 2 = 6$, giving $x = \\frac{8}{3}$, or $3x - 2 = -1$, giving $x = \\frac{1}{3}$.\nStep 3: The sum is $\\frac{8}{3} + \\frac{1}{3} = 3$. Check: expanding gives $9x^{2} - 27x + 8 = 0$, whose solutions add to $\\frac{27}{9} = 3$ ✓\n\n**Common Mistakes:**\n* $5$: adds the values of $u$, $6 + (-1)$, and never solves for $x$.\n* $\\frac{8}{3}$: finds only one solution.\n* $-\\frac{1}{3}$: factors as $(u + 6)(u - 1)$, getting $u = -6$ or $u = 1$.\n\n**Test Day Takeaway:** When the same expression repeats, substitute a single letter, factor, and then solve back for $x$.",
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
    question: "The function $f$ is defined by $f(x) = 2x^{2} - 9$. What is the value of $f(-4)$?",
    choices: [
      // distractor: squares -4 as -16
      { id: "A", text: "$-41$" },
      // distractor: doubles -4 instead of squaring it
      { id: "B", text: "$-25$" },
      { id: "C", text: "$23$" },
      // distractor: squares 2x instead of x
      { id: "D", text: "$55$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $f(-4) = 2(-4)^{2} - 9 = 2(16) - 9 = 23$.\n\n**The Full Solution:**\nStep 1: Substitute $-4$ for $x$: $f(-4) = 2(-4)^{2} - 9$.\nStep 2: Square first: $(-4)^{2} = 16$.\nStep 3: Then $2(16) - 9 = 32 - 9 = 23$. Check: $f(4)$ is also $23$, as it must be, since $f$ depends only on $x^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-41$): squares $-4$ as $-16$, computing $2(-16) - 9$.\n* Choice B ($-25$): doubles $-4$ instead of squaring it, computing $2(-8) - 9$.\n* Choice D ($55$): squares $2x$ instead of $x$, computing $(2\\cdot(-4))^{2} - 9 = 64 - 9$.\n\n**Test Day Takeaway:** Put a negative input in parentheses before squaring: $(-4)^{2} = 16$, not $-16$.",
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
    question: "If $g(x) = x^{2} - 7x + 2$, what is the value of $g(-3)$?",
    correctAnswer: "32",
    explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**The correct answer is $32$.**\n\n**The Fast Way (~15s):** $g(-3) = (-3)^{2} - 7(-3) + 2 = 9 + 21 + 2 = 32$.\n\n**The Full Solution:**\nStep 1: Substitute $-3$ for $x$: $g(-3) = (-3)^{2} - 7(-3) + 2$.\nStep 2: Evaluate each term: $(-3)^{2} = 9$ and $-7(-3) = 21$.\nStep 3: Add: $9 + 21 + 2 = 32$. Check: $g(-3)$ is greater than $g(3) = 9 - 21 + 2 = -10$, as expected, because $-7x$ is positive when $x$ is negative ✓\n\n**Common Mistakes:**\n* $-10$: treats $-7(-3)$ as $-21$.\n* $14$: squares $-3$ as $-9$.\n* $-28$: makes both sign errors.\n\n**Test Day Takeaway:** Wrap a negative input in parentheses; a negative times a negative makes $-7x$ positive.",
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
    question: "For the function $f$, the table shows four values of $x$ and their corresponding values of $f(x)$. What is the value of $f(-3) - f(-6)$?",
    diagram: { type: "dataTable", params: { headers: ["x", "f(x)"], rows: [["-9", "-17"], ["-6", "-14"], ["-3", "-8"], ["0", "-2"]] } },
    choices: [
      // distractor: adds the two values instead of subtracting: -8 + (-14) = -22
      { id: "A", text: "$-22$" },
      // distractor: subtracts in the reverse order: f(-6) - f(-3) = -14 + 8 = -6
      { id: "B", text: "$-6$" },
      { id: "C", text: "$6$" },
      // distractor: ignores both negative signs and computes 8 + 14 = 22
      { id: "D", text: "$22$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** From the table, $f(-3) = -8$ and $f(-6) = -14$, so $f(-3) - f(-6) = -8 - (-14) = 6$.\n\n**The Full Solution:**\nStep 1: Find the row with $x = -3$: $f(-3) = -8$.\nStep 2: Find the row with $x = -6$: $f(-6) = -14$.\nStep 3: Subtract in the order given: $-8 - (-14) = -8 + 14 = 6$. Check: $-14 + 6 = -8$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-22$): adds the two values, $-8 + (-14)$, instead of subtracting.\n* Choice B ($-6$): subtracts in the reverse order, $f(-6) - f(-3)$.\n* Choice D ($22$): drops both negative signs and adds $8 + 14$.\n\n**Test Day Takeaway:** Subtracting a negative value adds its size; write the parentheses before you compute.",
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
    question: "The function $f$ is defined by $f(x) = \\frac{x^{2} + 11}{x - 2}$. What is the value of $f(-4)$?",
    correctAnswer: "-4.5",
    explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**The correct answer is $-4.5$.**\n\n**The Fast Way (~25s):** The numerator is $16 + 11 = 27$ and the denominator is $-4 - 2 = -6$, so $f(-4) = \\frac{27}{-6} = -4.5$.\n\n**The Full Solution:**\nStep 1: Substitute $-4$ into the numerator: $(-4)^{2} + 11 = 16 + 11 = 27$.\nStep 2: Substitute $-4$ into the denominator: $-4 - 2 = -6$.\nStep 3: Divide: $f(-4) = \\frac{27}{-6} = -4.5$, which can also be entered as $-\\frac{9}{2}$. Check: $-4.5 \\times (-6) = 27$, the numerator ✓\n\n**Common Mistakes:**\n* $\\frac{5}{6}$: writes $(-4)^{2}$ as $-16$, so the numerator becomes $-5$ and the quotient is $\\frac{-5}{-6}$.\n* $-13.5$: computes the denominator as $-4 + 2 = -2$, giving $\\frac{27}{-2}$.\n* $4.5$: loses the negative sign of the denominator.\n\n**Test Day Takeaway:** With a negative input, put it in parentheses everywhere it appears; $(-4)^{2}$ is $+16$, and the sign of the denominator decides the sign of the answer.",
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
    question: "$f(x) = x^{2} + kx - 8$\nIn the given function $f$, $k$ is a constant. If $f(-4) = 20$, what is the value of $k$?",
    choices: [
      // distractor: squares -4 as -16, solving -16 - 4k - 8 = 20 to get k = -11
      { id: "A", text: "$-11$" },
      { id: "B", text: "$-3$" },
      // distractor: changes the constant -8 to +8, solving 16 - 4k + 8 = 20 to get k = 1
      { id: "C", text: "$1$" },
      // distractor: substitutes 4 instead of -4, solving 16 + 4k - 8 = 20 to get k = 3
      { id: "D", text: "$3$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** $f(-4) = 16 - 4k - 8 = 8 - 4k$, and $8 - 4k = 20$ gives $k = -3$.\n\n**The Full Solution:**\nStep 1: Substitute $x = -4$: $f(-4) = (-4)^{2} + k(-4) - 8 = 16 - 4k - 8 = 8 - 4k$.\nStep 2: Set this equal to the given value: $8 - 4k = 20$, so $-4k = 12$.\nStep 3: Divide by $-4$: $k = -3$. Check: $f(x) = x^{2} - 3x - 8$ gives $f(-4) = 16 + 12 - 8 = 20$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-11$): writes $(-4)^{2}$ as $-16$, so $-16 - 4k - 8 = 20$ and $k = -11$.\n* Choice C ($1$): changes the constant $-8$ to $+8$, so $16 - 4k + 8 = 20$ and $k = 1$.\n* Choice D ($3$): substitutes $4$ instead of $-4$, so $16 + 4k - 8 = 20$ and $k = 3$.\n\n**Test Day Takeaway:** When the input is negative, the $x^{2}$ term stays positive but the $kx$ term changes sign; write $k(-4)$ before simplifying.",
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
    question: "The function $g$ is defined by $g(x) = 5 - x^{3}$. If $g(a) = 69$, what is the value of $a$?",
    correctAnswer: "-4",
    explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**The correct answer is $-4$.**\n\n**The Fast Way (~25s):** $5 - a^{3} = 69$ gives $a^{3} = -64$, so $a = -4$.\n\n**The Full Solution:**\nStep 1: Replace $x$ with $a$ and set the output equal to $69$: $5 - a^{3} = 69$.\nStep 2: Subtract $5$ from each side: $-a^{3} = 64$, so $a^{3} = -64$.\nStep 3: The cube root of $-64$ is $-4$, because $(-4)^{3} = -64$. Check: $g(-4) = 5 - (-64) = 69$ ✓\n\n**Common Mistakes:**\n* $4$: drops the negative sign, solving $a^{3} = 64$; but $g(4) = 5 - 64 = -59$.\n* $-64$: stops at $a^{3} = -64$ without taking the cube root.\n* about $-4.2$: adds $5$ to $69$ instead of subtracting it, solving $a^{3} = -74$.\n\n**Test Day Takeaway:** $g(a) = 69$ means the output is $69$; set the expression equal to $69$ and solve. An odd power can have a negative input, so a cube root of a negative number is negative.",
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
    question: "The table shows five values of $x$ and their corresponding values of $f(x)$, where $f$ is a quadratic function. What is the value of $f(-6)$?",
    diagram: { type: "dataTable", params: { headers: ["x", "f(x)"], rows: [["-4", "21"], ["-2", "5"], ["0", "-3"], ["2", "-3"], ["4", "5"]] } },
    choices: [
      // distractor: sign slip on the linear term: computes 36 - 12 - 3 = 21, which is f(6), instead of 36 + 12 - 3
      { id: "A", text: "$21$" },
      // distractor: extends the table by repeating the change of 16 instead of the growing changes, getting 21 + 16 = 37
      { id: "B", text: "$37$" },
      { id: "C", text: "$45$" },
      // distractor: drops the constant term -3, computing 36 + 12 = 48
      { id: "D", text: "$48$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice C is correct.**\n\n**The Fast Way (~45s):** The equal outputs $f(0) = f(2) = -3$ put the axis of symmetry at $x = 1$, and fitting the table gives $f(x) = x^{2} - 2x - 3$, so $f(-6) = 36 + 12 - 3 = 45$.\n\n**The Full Solution:**\nStep 1: From $f(0) = -3$, write $f(x) = ax^{2} + bx - 3$.\nStep 2: Use two more rows. $f(2) = 4a + 2b - 3 = -3$ gives $2a + b = 0$, and $f(4) = 16a + 4b - 3 = 5$ gives $4a + b = 2$. Subtracting, $2a = 2$, so $a = 1$ and $b = -2$. Thus $f(x) = x^{2} - 2x - 3$.\nStep 3: Evaluate at $-6$: $f(-6) = (-6)^{2} - 2(-6) - 3 = 36 + 12 - 3 = 45$. Check: $f(-4) = 16 + 8 - 3 = 21$ and $f(-2) = 4 + 4 - 3 = 5$, matching the table ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($21$): makes a sign slip on the linear term, computing $36 - 12 - 3$, which is $f(6)$ rather than $f(-6)$.\n* Choice B ($37$): extends the table by repeating the last change of $16$ (from $x = -2$ to $x = -4$) instead of noticing the changes grow by $8$ each step.\n* Choice D ($48$): drops the constant term, computing $36 + 12$.\n\n**Test Day Takeaway:** For a quadratic in a table, the constant is $f(0)$ and two more rows give $a$ and $b$; then substitute the negative input with parentheses, so $-2(-6) = +12$.",
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
    question: "$f(x) = 3x^{2} + 18x - 5$\nFor the given function $f$, $f(-10) = f(c)$, where $c$ is a constant and $c \\neq -10$. What is the value of $c$?",
    correctAnswer: "4",
    explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~30s):** The axis of symmetry is $x = -\\frac{18}{2(3)} = -3$. The input $-10$ is $7$ units left of $-3$, so the matching input is $7$ units right: $c = 4$.\n\n**The Full Solution:**\nStep 1: A parabola takes equal values at inputs the same distance from its axis of symmetry, $x = -\\frac{b}{2a} = -\\frac{18}{6} = -3$.\nStep 2: The input $-10$ is $-3 - (-10) = 7$ units to the left of the axis, so the other input with the same output is $-3 + 7 = 4$.\nStep 3: So $c = 4$. Check: $f(-10) = 3(100) + 18(-10) - 5 = 300 - 180 - 5 = 115$ and $f(4) = 3(16) + 72 - 5 = 115$ ✓\n\n**Common Mistakes:**\n* $10$: assumes the parabola is symmetric about the $y$-axis and just flips the sign of $-10$; but $f(10) = 475$.\n* $16$: places the axis at $x = 3$ instead of $-3$, then reflects $-10$ across $x = 3$.\n* $-3$: reports the axis of symmetry itself rather than the second input.\n\n**Test Day Takeaway:** \"Same output, different input\" on a quadratic means reflect across the axis $x = -\\frac{b}{2a}$: the two inputs average to that value, so $\\frac{-10 + c}{2} = -3$.",
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
    question: "$x^{2} + 10x + k = 0$\nIn the given equation, $k$ is a constant, and the equation has no real solutions. Which of the following could be the value of $k$?",
    choices: [
      // distractor: k = 0 factors as x(x + 10) = 0, which has two real solutions
      { id: "A", text: "$0$" },
      // distractor: reverses the inequality to k < 25; 16 gives a discriminant of 36 and two real solutions
      { id: "B", text: "$16$" },
      // distractor: the boundary value: the discriminant is 0, giving exactly one real solution
      { id: "C", text: "$25$" },
      { id: "D", text: "$30$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** No real solutions means $10^{2} - 4k < 0$, so $k > 25$. Only $30$ works.\n\n**The Full Solution:**\nStep 1: The discriminant of $x^{2} + 10x + k = 0$ is $10^{2} - 4(1)(k) = 100 - 4k$.\nStep 2: The equation has no real solutions when the discriminant is negative: $100 - 4k < 0$, so $k > 25$.\nStep 3: Of the choices, only $30$ is greater than $25$. Check: $k = 30$ gives $100 - 120 = -20 < 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0$): the equation becomes $x(x + 10) = 0$, which has two real solutions, $0$ and $-10$.\n* Choice B ($16$): reverses the inequality to $k < 25$; this gives a discriminant of $36$ and two real solutions.\n* Choice C ($25$): the boundary value; the discriminant is $0$ and the equation has exactly one real solution, $x = -5$.\n\n**Test Day Takeaway:** No real solutions means $b^{2} - 4ac < 0$, strictly; the boundary value always gives exactly one solution.",
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
    question: "$x^{2} - 6x + k = 0$\nIn the given equation, $k$ is an integer. If the equation has no real solutions, what is the least possible value of $k$?",
    correctAnswer: "10",
    explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~20s):** $36 - 4k < 0$ gives $k > 9$, so the least integer is $10$.\n\n**The Full Solution:**\nStep 1: The discriminant is $(-6)^{2} - 4(1)(k) = 36 - 4k$.\nStep 2: No real solutions requires $36 - 4k < 0$, so $4k > 36$ and $k > 9$.\nStep 3: The least integer greater than $9$ is $10$. Check: $k = 10$ gives $36 - 40 = -4 < 0$, while $k = 9$ gives $0$ (one solution) ✓\n\n**Common Mistakes:**\n* $9$: the boundary value; the discriminant is $0$ and $x = 3$ is a solution.\n* $3$: uses half of the coefficient $6$ instead of the discriminant.\n* $8$: reverses the inequality and takes the integer just below $9$.\n\n**Test Day Takeaway:** Solve $b^{2} - 4ac < 0$ for the parameter, then step one integer past the boundary; the boundary itself never satisfies a strict inequality.",
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
    question: "In the $xy$-plane, the graph of $y = 2x^{2} - bx + 50$, where $b$ is a positive integer, has no $x$-intercepts. What is the greatest possible value of $b$?",
    choices: [
      // distractor: ignores the leading coefficient 2, using b^2 < 4(50) = 200, so b < 14.1
      { id: "A", text: "$14$" },
      { id: "B", text: "$19$" },
      // distractor: the boundary value: the discriminant is 0, so the graph touches the x-axis once
      { id: "C", text: "$20$" },
      // distractor: forgets to square b, solving b - 400 < 0
      { id: "D", text: "$399$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** No $x$-intercepts means $b^{2} - 4(2)(50) < 0$, so $b^{2} < 400$ and $b < 20$. The greatest integer is $19$.\n\n**The Full Solution:**\nStep 1: The graph has no $x$-intercepts exactly when $2x^{2} - bx + 50 = 0$ has no real solutions, that is, when the discriminant is negative.\nStep 2: The discriminant is $(-b)^{2} - 4(2)(50) = b^{2} - 400$, so $b^{2} < 400$. For positive $b$, this means $b < 20$.\nStep 3: The greatest positive integer less than $20$ is $19$. Check: $19^{2} - 400 = 361 - 400 = -39 < 0$, while $20^{2} - 400 = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($14$): ignores the leading coefficient $2$, using $b^{2} < 4(50) = 200$.\n* Choice C ($20$): the boundary value; the discriminant is $0$ and the graph touches the $x$-axis once.\n* Choice D ($399$): forgets to square $b$, solving $b - 400 < 0$.\n\n**Test Day Takeaway:** \"No $x$-intercepts\" is the same condition as \"no real solutions\": $b^{2} - 4ac < 0$, with $a$ included in $4ac$.",
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
    question: "$ax^{2} + 14x + 6 = 0$\nIn the given equation, $a$ is a positive integer. If the equation has two distinct real solutions, what is the greatest possible value of $a$?",
    correctAnswer: "8",
    explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~25s):** $196 - 24a > 0$ gives $a < 8.1\\overline{6}$, so the greatest integer is $8$.\n\n**The Full Solution:**\nStep 1: The discriminant is $14^{2} - 4(a)(6) = 196 - 24a$.\nStep 2: Two distinct real solutions require $196 - 24a > 0$, so $24a < 196$ and $a < \\frac{196}{24} \\approx 8.17$.\nStep 3: The greatest positive integer less than $8.17$ is $8$. Check: $a = 8$ gives $196 - 192 = 4 > 0$, while $a = 9$ gives $196 - 216 = -20 < 0$ ✓\n\n**Common Mistakes:**\n* $9$: rounds $8.17$ up instead of down.\n* $48$: leaves the constant $6$ out of $4ac$, solving $196 - 4a > 0$.\n* $32$: forgets the factor $4$, solving $196 - 6a > 0$ to get $a < 32.7$.\n\n**Test Day Takeaway:** When the parameter is the leading coefficient, it still sits inside $4ac$; solve the inequality, then round toward the side the inequality allows.",
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
    question: "$x^{2} + bx + 9 = 0$\nIn the given equation, $b$ is a constant. If the equation has no real solutions, which of the following describes all possible values of $b$?",
    choices: [
      // distractor: leaves the 4 out of 4ac, solving b^2 < 9
      { id: "A", text: "$-3 < b < 3$" },
      { id: "B", text: "$-6 < b < 6$" },
      // distractor: reverses the inequality and keeps only the positive branch
      { id: "C", text: "$b > 6$" },
      // distractor: the condition for two distinct real solutions, b^2 > 36, not for no real solutions
      { id: "D", text: "$b < -6$ or $b > 6$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $b^{2} - 36 < 0$ means $b^{2} < 36$, so $-6 < b < 6$.\n\n**The Full Solution:**\nStep 1: The discriminant is $b^{2} - 4(1)(9) = b^{2} - 36$.\nStep 2: No real solutions requires $b^{2} - 36 < 0$, so $b^{2} < 36$.\nStep 3: A number whose square is less than $36$ lies strictly between $-6$ and $6$, so $-6 < b < 6$. Check: $b = 5$ gives $25 - 36 = -11 < 0$, and $b = -6$ gives $0$, one solution ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3 < b < 3$): leaves the $4$ out of $4ac$, using $b^{2} < 9$.\n* Choice C ($b > 6$): reverses the inequality and keeps only the positive branch.\n* Choice D ($b < -6$ or $b > 6$): describes when the equation has two distinct real solutions, the reverse condition.\n\n**Test Day Takeaway:** $b^{2} < n$ gives a band between $-\\sqrt{n}$ and $\\sqrt{n}$; $b^{2} > n$ gives the two outer pieces. Keep both signs of $b$.",
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
    question: "The graph of $y = x^{2} + kx + 40$ does not intersect the $x$-axis, where $k$ is an integer. What is the least possible value of $k$?",
    correctAnswer: "-12",
    explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**The correct answer is $-12$.**\n\n**The Fast Way (~30s):** $k^{2} - 160 < 0$ means $k^{2} < 160$. Since $12^{2} = 144$ and $13^{2} = 169$, $k$ runs from $-12$ to $12$, so the least value is $-12$.\n\n**The Full Solution:**\nStep 1: The graph misses the $x$-axis exactly when $x^{2} + kx + 40 = 0$ has no real solutions, so the discriminant $k^{2} - 4(1)(40) = k^{2} - 160$ must be negative.\nStep 2: $k^{2} < 160$, so $-\\sqrt{160} < k < \\sqrt{160}$, and $\\sqrt{160} \\approx 12.65$.\nStep 3: The integers in this interval are $-12, -11, \\ldots, 12$, so the least is $-12$. Check: $(-12)^{2} - 160 = -16 < 0$, while $(-13)^{2} - 160 = 9 > 0$ ✓\n\n**Common Mistakes:**\n* $12$: finds only the positive bound and misses that negative $k$ works too.\n* $-13$: rounds $-12.65$ down to $-13$, which lies outside the interval.\n* $-6$: leaves the $4$ out of $4ac$, solving $k^{2} < 40$.\n\n**Test Day Takeaway:** A squared parameter gives a symmetric interval; \"least possible value\" points to the negative end.",
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
    question: "$x^{2} + kx + 30 = 0$\nIn the given equation, $k$ is an integer. If the equation has no real solutions, what is the least possible value of $k$?",
    choices: [
      // distractor: includes k = -11, but (-11)^2 = 121 is greater than 120
      { id: "A", text: "$-11$" },
      { id: "B", text: "$-10$" },
      // distractor: leaves out the 4 in the discriminant, solving k^2 < 30
      { id: "C", text: "$-5$" },
      // distractor: gives the greatest possible value of k instead of the least
      { id: "D", text: "$10$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** No real solutions means $k^{2} - 120 < 0$, so $k^{2} < 120$. Since $10^{2} = 100 < 120 < 121 = 11^{2}$, the least integer is $-10$.\n\n**The Full Solution:**\nStep 1: The equation has no real solutions when its discriminant is negative: $k^{2} - 4(1)(30) < 0$, so $k^{2} < 120$.\nStep 2: Because $10^{2} = 100$ and $11^{2} = 121$, the integers that satisfy $k^{2} < 120$ are $-10, -9, \\ldots, 9, 10$.\nStep 3: The least of these is $-10$. Check: $(-10)^{2} - 120 = -20 < 0$, while $(-11)^{2} - 120 = 1 > 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-11$): $(-11)^{2} = 121$ is greater than $120$, so the equation would have two real solutions.\n* Choice C ($-5$): leaves out the factor $4$ in the discriminant, solving $k^{2} < 30$.\n* Choice D ($10$): is the greatest possible value of $k$, not the least.\n\n**Test Day Takeaway:** For no real solutions, set $b^{2} - 4ac < 0$; a squared parameter allows both negative and positive values.",
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
    question: "$x^{2} + bx + 3b = 0$\nIn the given equation, $b$ is a positive integer. If the equation has no real solutions, what is the greatest possible value of $b$?",
    correctAnswer: "11",
    explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**The correct answer is $11$.**\n\n**The Fast Way (~35s):** $b^{2} - 12b < 0$ factors as $b(b - 12) < 0$; for positive $b$ this needs $b < 12$, so the greatest integer is $11$.\n\n**The Full Solution:**\nStep 1: Here $a = 1$ and the constant term is $3b$, so the discriminant is $b^{2} - 4(1)(3b) = b^{2} - 12b$.\nStep 2: No real solutions requires $b^{2} - 12b < 0$, that is, $b(b - 12) < 0$. Since $b > 0$, divide by $b$: $b - 12 < 0$, so $b < 12$.\nStep 3: The greatest integer less than $12$ is $11$. Check: $b = 11$ gives $121 - 132 = -11 < 0$, while $b = 12$ gives $144 - 144 = 0$ ✓\n\n**Common Mistakes:**\n* $12$: the boundary value, which gives a discriminant of $0$ and one real solution.\n* $3$: leaves the $b$ out of the constant term, solving $b^{2} - 12 < 0$ to get $b < 3.46$.\n* $13$: reverses the inequality and finds the least $b$ that gives two real solutions.\n\n**Test Day Takeaway:** When the parameter appears in two coefficients, substitute it into both places of $b^{2} - 4ac$, then factor the resulting inequality.",
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
    question: "The graph of the quadratic function $f$ is shown, where $f(x) = (x - h)^{2} + k$ and $h$ and $k$ are constants. What is the value of $h + k$?",
    diagram: { type: "quadraticVertex", params: { vertex: [3, -5], a: 1, showVertex: true } },
    choices: [
      // distractor: misreads the sign in (x - h), taking h = -3, so -3 + (-5) = -8
      { id: "A", text: "$-8$" },
      // distractor: reports k, the minimum value, without adding h
      { id: "B", text: "$-5$" },
      { id: "C", text: "$-2$" },
      // distractor: computes h - k = 3 - (-5) = 8 instead of h + k
      { id: "D", text: "$8$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The minimum point is $(3, -5)$, so $h = 3$ and $k = -5$, and $h + k = -2$.\n\n**The Full Solution:**\nStep 1: In $f(x) = (x - h)^{2} + k$, the vertex is $(h, k)$, and because the parabola opens upward, the vertex is the minimum point.\nStep 2: The marked minimum point on the graph is $(3, -5)$, so $h = 3$ and $k = -5$.\nStep 3: Then $h + k = 3 + (-5) = -2$. Check: $f(x) = (x - 3)^{2} - 5$ gives $f(3) = -5$ and $f(0) = 9 - 5 = 4$, matching the graph's $y$-intercept ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-8$): misreads the sign in $(x - h)$, taking $h = -3$.\n* Choice B ($-5$): reports $k$, the minimum value, without adding $h$.\n* Choice D ($8$): subtracts instead of adding, computing $3 - (-5)$.\n\n**Test Day Takeaway:** In $(x - h)^{2} + k$ the vertex is $(h, k)$ exactly as read from the graph; the minus sign is already built into the form.",
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
    question: "$f(x) = -2(x + 4)^{2} + 19$\nWhat is the maximum value of the given function?",
    correctAnswer: "19",
    explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**The correct answer is $19$.**\n\n**The Fast Way (~10s):** In vertex form the maximum value is the constant $k$, here $19$.\n\n**The Full Solution:**\nStep 1: The function has the form $a(x - h)^{2} + k$ with $a = -2$, $h = -4$, and $k = 19$.\nStep 2: Because $a < 0$, the term $-2(x + 4)^{2}$ is never positive, so it is largest, $0$, when $x = -4$.\nStep 3: The maximum value is therefore $0 + 19 = 19$. Check: $f(-4) = -2(0) + 19 = 19$, and $f(-3) = -2 + 19 = 17 < 19$ ✓\n\n**Common Mistakes:**\n* $-4$: reports the $x$-value where the maximum occurs instead of the maximum value.\n* $4$: reads the $x$-coordinate of the vertex with the wrong sign.\n\n**Test Day Takeaway:** For $a(x - h)^{2} + k$ with $a < 0$, the maximum value is $k$ and it occurs at $x = h$; the question asks for the value, not the location.",
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
    question: "The graph of the quadratic function $f$ is shown, where $f(x) = -\\frac{1}{2}x^{2} + bx + c$ and $b$ and $c$ are constants. What is the value of $c$?",
    diagram: { type: "quadraticVertex", params: { vertex: [-1, 8], a: -0.5, showVertex: true } },
    choices: [
      // distractor: reports the x-coordinate of the vertex (also the value of b) instead of c
      { id: "A", text: "$-1$" },
      { id: "B", text: "$7.5$" },
      // distractor: reports the maximum value 8 as c
      { id: "C", text: "$8$" },
      // distractor: adds 1/2 to 8 instead of subtracting it
      { id: "D", text: "$8.5$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The vertex is $(-1, 8)$, so $f(x) = -\\frac{1}{2}(x + 1)^{2} + 8$, and $c = f(0) = -\\frac{1}{2} + 8 = 7.5$.\n\n**The Full Solution:**\nStep 1: The graph's maximum point is $(-1, 8)$, and the leading coefficient is $-\\frac{1}{2}$, so $f(x) = -\\frac{1}{2}(x + 1)^{2} + 8$.\nStep 2: In $-\\frac{1}{2}x^{2} + bx + c$, the constant $c$ is the value of $f(0)$.\nStep 3: $f(0) = -\\frac{1}{2}(1)^{2} + 8 = 7.5$, so $c = 7.5$. Check: expanding gives $-\\frac{1}{2}x^{2} - x - \\frac{1}{2} + 8 = -\\frac{1}{2}x^{2} - x + 7.5$, and the vertex is at $x = -\\frac{-1}{2(-1/2)} = -1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-1$): reports the $x$-coordinate of the vertex, which is also the value of $b$.\n* Choice C ($8$): reports the maximum value as $c$; the maximum and the $y$-intercept differ unless the vertex is on the $y$-axis.\n* Choice D ($8.5$): adds $\\frac{1}{2}$ to $8$ instead of subtracting it.\n\n**Test Day Takeaway:** In standard form, $c$ is the $y$-intercept, $f(0)$; build vertex form from the graph's vertex and evaluate at $0$.",
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
    question: "$f(x) = -x^{2} + kx + 7$\nIn the given function, $k$ is a positive constant. If the maximum value of $f$ is $23$, what is the value of $k$?",
    correctAnswer: "8",
    explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~35s):** The maximum occurs at $x = \\frac{k}{2}$, where $f = -\\frac{k^{2}}{4} + \\frac{k^{2}}{2} + 7 = \\frac{k^{2}}{4} + 7$. Setting $\\frac{k^{2}}{4} + 7 = 23$ gives $k^{2} = 64$, so $k = 8$.\n\n**The Full Solution:**\nStep 1: The vertex is at $x = -\\frac{k}{2(-1)} = \\frac{k}{2}$.\nStep 2: Substitute: $f\\left(\\frac{k}{2}\\right) = -\\frac{k^{2}}{4} + \\frac{k^{2}}{2} + 7 = \\frac{k^{2}}{4} + 7$. Set this equal to $23$: $\\frac{k^{2}}{4} = 16$, so $k^{2} = 64$.\nStep 3: $k = 8$ or $k = -8$, and $k$ is positive, so $k = 8$. Check: $f(x) = -x^{2} + 8x + 7 = -(x - 4)^{2} + 23$, whose maximum is $23$ ✓\n\n**Common Mistakes:**\n* $4$: reports the $x$-coordinate of the vertex, $\\frac{k}{2}$, instead of $k$.\n* $16$: stops at $\\frac{k^{2}}{4} = 16$.\n* $64$: stops at $k^{2} = 64$ without taking the square root.\n\n**Test Day Takeaway:** For an unknown linear coefficient, write the maximum in terms of $k$ at $x = -\\frac{b}{2a}$, set it equal to the given maximum, and keep the root the conditions allow.",
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
    question: "The graph of $y = f(x)$ is shown. If $g(x) = f(x - 2)$, what is the maximum value of $g$?",
    diagram: { type: "quadraticVertex", params: { vertex: [3, 8], a: -0.5, showVertex: true } },
    choices: [
      // distractor: gives the x-coordinate of the vertex of f, not a value of the function
      { id: "A", text: "$3$" },
      // distractor: gives the x-coordinate where g reaches its maximum: 3 + 2
      { id: "B", text: "$5$" },
      { id: "C", text: "$8$" },
      // distractor: adds the shift of 2 to the maximum value: 8 + 2
      { id: "D", text: "$10$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The graph of $f$ peaks at $(3, 8)$. Replacing $x$ with $x - 2$ only moves the graph $2$ units right, so the maximum value is still $8$.\n\n**The Full Solution:**\nStep 1: The graph of $f$ opens downward with vertex $(3, 8)$, so the maximum value of $f$ is $8$.\nStep 2: The graph of $g(x) = f(x - 2)$ is the graph of $f$ moved $2$ units right, so its vertex is $(5, 8)$.\nStep 3: A horizontal move does not change the outputs, so the maximum value of $g$ is $8$. Check: $g(5) = f(3) = 8$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): is the $x$-coordinate of the vertex of $f$, not a value of the function.\n* Choice B ($5$): is the $x$-coordinate where $g$ reaches its maximum, not the maximum value.\n* Choice D ($10$): adds the shift to the output; $f(x - 2)$ moves the graph right, not up.\n\n**Test Day Takeaway:** A change inside the parentheses, $f(x - c)$, moves the graph left or right and leaves the maximum value unchanged.",
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
    question: "$f(x) = -3(x - c)^{2} + 50$\nIn the given function, $c$ is a positive constant. If $f(1) = -25$, what is the value of $c$?",
    correctAnswer: "6",
    explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~30s):** $-3(1 - c)^{2} + 50 = -25$ gives $(1 - c)^{2} = 25$, so $1 - c = \\pm 5$ and $c = -4$ or $c = 6$. Since $c$ is positive, $c = 6$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 1$: $-3(1 - c)^{2} + 50 = -25$.\nStep 2: Subtract $50$ and divide by $-3$: $(1 - c)^{2} = 25$, so $1 - c = 5$ or $1 - c = -5$.\nStep 3: These give $c = -4$ or $c = 6$, and only $6$ is positive. Check: $f(1) = -3(1 - 6)^{2} + 50 = -3(25) + 50 = -25$ ✓\n\n**Common Mistakes:**\n* $-4$: keeps the root from $1 - c = 5$ and ignores the condition that $c$ is positive.\n* $5$: solves $c^{2} = 25$, dropping the $1$ inside the parentheses.\n\n**Test Day Takeaway:** Isolate the squared factor, take both square roots, then use the stated condition on the constant to pick one.",
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
    question: "$f(x) = ax^{2} + 12x + 7$\nIn the given function, $a$ is a constant. If the maximum value of $f$ is $25$, what is the value of $a$?",
    choices: [
      // distractor: uses b^2/(2a) instead of b^2/(4a), solving 7 - 72/a = 25
      { id: "A", text: "$-4$" },
      { id: "B", text: "$-2$" },
      // distractor: inverts the last division, computing -18/36
      { id: "C", text: "$-0.5$" },
      // distractor: sign error: solves 7 + 36/a = 25; a positive a gives a minimum
      { id: "D", text: "$2$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** The maximum occurs at $x = -\\frac{12}{2a} = -\\frac{6}{a}$, where $f = a\\cdot\\frac{36}{a^{2}} - \\frac{72}{a} + 7 = 7 - \\frac{36}{a}$. Setting $7 - \\frac{36}{a} = 25$ gives $a = -2$.\n\n**The Full Solution:**\nStep 1: A quadratic has a maximum only when $a < 0$, and the maximum occurs at $x = -\\frac{b}{2a} = -\\frac{6}{a}$.\nStep 2: Substitute: $f\\left(-\\frac{6}{a}\\right) = \\frac{36}{a} - \\frac{72}{a} + 7 = 7 - \\frac{36}{a}$. Set this equal to $25$: $-\\frac{36}{a} = 18$.\nStep 3: Solve: $a = -\\frac{36}{18} = -2$, which is negative as required. Check: $f(x) = -2x^{2} + 12x + 7$ has its vertex at $x = 3$, and $f(3) = -18 + 36 + 7 = 25$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): uses $\\frac{b^{2}}{2a}$ instead of $\\frac{b^{2}}{4a}$, solving $7 - \\frac{72}{a} = 25$.\n* Choice C ($-0.5$): inverts the last division, computing $-\\frac{18}{36}$.\n* Choice D ($2$): makes a sign error, solving $7 + \\frac{36}{a} = 25$; a positive $a$ gives a minimum, not a maximum.\n\n**Test Day Takeaway:** The extreme value of $ax^{2} + bx + c$ is $c - \\frac{b^{2}}{4a}$; a stated maximum also tells you $a$ is negative, which rules out positive choices at once.",
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
    question: "The function $h(t) = -16t^{2} + 40t + 75$ gives the height, in feet, of a ball above the ground $t$ seconds after it is thrown upward from the roof of a building. What is the maximum height, in feet, that the ball reaches above the roof?",
    correctAnswer: "25",
    explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**The correct answer is $25$.**\n\n**The Fast Way (~35s):** The vertex is at $t = \\frac{40}{32} = 1.25$, where $h = -25 + 50 + 75 = 100$. The roof is at $h(0) = 75$, so the ball rises $100 - 75 = 25$ feet.\n\n**The Full Solution:**\nStep 1: The ball's greatest height occurs at the vertex, $t = -\\frac{40}{2(-16)} = 1.25$ seconds.\nStep 2: The greatest height is $h(1.25) = -16(1.5625) + 40(1.25) + 75 = -25 + 50 + 75 = 100$ feet.\nStep 3: The ball starts at the roof, $h(0) = 75$ feet, so it rises $100 - 75 = 25$ feet above the roof. Check: $h(t) - 75 = -16t^{2} + 40t$, whose maximum is $\\frac{40^{2}}{4(16)} = 25$ ✓\n\n**Common Mistakes:**\n* $100$: reports the greatest height above the ground instead of above the roof.\n* $1.25$: reports the time of the greatest height.\n* $75$: reports the height of the roof.\n\n**Test Day Takeaway:** Read what is being compared: \"above the roof\" means greatest height minus $h(0)$, not the greatest height itself.",
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
    question: "The table shows some values of the functions $f$ and $g$. If $h(x) = f(x) + g(x)$, what is the value of $h(3)$?",
    diagram: { type: "dataTable", params: { headers: ["x", "f(x)", "g(x)"], rows: [["1", "5", "3"], ["2", "8", "1"], ["3", "2", "4"], ["4", "7", "2"]] } },
    choices: [
      // distractor: reports f(3) and leaves out g(3)
      { id: "A", text: "$2$" },
      // distractor: reports g(3) and leaves out f(3)
      { id: "B", text: "$4$" },
      { id: "C", text: "$6$" },
      // distractor: adds the values in the row x = 2, 8 + 1
      { id: "D", text: "$9$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Function Composition**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** In the row $x = 3$, $f(3) = 2$ and $g(3) = 4$, so $h(3) = 2 + 4 = 6$.\n\n**The Full Solution:**\nStep 1: By definition, $h(3) = f(3) + g(3)$, so both values come from the same row, $x = 3$.\nStep 2: The row $x = 3$ gives $f(3) = 2$ and $g(3) = 4$.\nStep 3: So $h(3) = 2 + 4 = 6$. Check: both functions are evaluated at the same input, $3$, and $6$ is the sum of the two outputs in that row ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): reports $f(3)$ and leaves out $g(3)$.\n* Choice B ($4$): reports $g(3)$ and leaves out $f(3)$.\n* Choice D ($9$): adds the values in the row $x = 2$, $8 + 1$, instead of the row $x = 3$.\n\n**Test Day Takeaway:** For $h(x) = f(x) + g(x)$, evaluate both functions at the same input and add the outputs.",
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
    question: "The functions $f$ and $g$ are defined by $f(x) = 4x - 5$ and $g(x) = x^{2} + 1$. If $h(x) = f(x) + g(x)$, what is the value of $h(2)$?",
    correctAnswer: "8",
    explanation: "**SAT Pattern: Function Composition**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~15s):** $f(2) = 3$ and $g(2) = 5$, so $h(2) = 3 + 5 = 8$.\n\n**The Full Solution:**\nStep 1: Find $f(2)$: $4(2) - 5 = 3$.\nStep 2: Find $g(2)$: $2^{2} + 1 = 5$.\nStep 3: Add: $h(2) = f(2) + g(2) = 3 + 5 = 8$. Check: $h(x) = x^{2} + 4x - 4$, and $4 + 8 - 4 = 8$ ✓\n\n**Common Mistakes:**\n* $15$: puts $g(2) = 5$ into $f$, computing $f(g(2))$ instead of adding the two outputs.\n* $3$: reports $f(2)$ and leaves out $g(2)$.\n* $5$: reports $g(2)$ and leaves out $f(2)$.\n\n**Test Day Takeaway:** For $h(x) = f(x) + g(x)$, evaluate each function at the same input, then add.",
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
    question: "The table shows some values of the functions $p$ and $q$. If $h(x) = p(x) - q(x)$, for what value of $x$ does $h(x) = 4$?",
    diagram: { type: "dataTable", params: { headers: ["x", "p(x)", "q(x)"], rows: [["0", "7", "3"], ["1", "2", "6"], ["2", "4", "5"], ["3", "1", "3"]] } },
    choices: [
      { id: "A", text: "$0$" },
      // distractor: subtracts in the wrong order: q(1) - p(1) = 6 - 2 = 4
      { id: "B", text: "$1$" },
      // distractor: finds the row where p(x) = 4 and ignores q
      { id: "C", text: "$2$" },
      // distractor: adds instead of subtracting: p(3) + q(3) = 1 + 3 = 4
      { id: "D", text: "$3$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Function Composition**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Compute $p(x) - q(x)$ in each row: $4$, $-4$, $-1$, $-2$. Only $x = 0$ gives $4$.\n\n**The Full Solution:**\nStep 1: $h(x) = 4$ means $p(x) - q(x) = 4$, so check each row of the table.\nStep 2: $x = 0$: $7 - 3 = 4$. $x = 1$: $2 - 6 = -4$. $x = 2$: $4 - 5 = -1$. $x = 3$: $1 - 3 = -2$.\nStep 3: Only $x = 0$ gives $h(x) = 4$. Check: $h(0) = p(0) - q(0) = 7 - 3 = 4$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($1$): subtracts in the wrong order, $q(1) - p(1) = 6 - 2 = 4$; in fact $h(1) = -4$.\n* Choice C ($2$): finds the row where $p(x) = 4$ and ignores $q$; $h(2) = -1$.\n* Choice D ($3$): adds instead of subtracting, $1 + 3 = 4$; $h(3) = -2$.\n\n**Test Day Takeaway:** When a function is built from table values, compute it row by row and keep the order of subtraction.",
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
    question: "$f(x) = x^{2} + 2$\n$g(x) = x + k$\nIn the given functions, $k$ is a constant. The function $h$ is defined by $h(x) = f(x) + g(x)$. If $h(2) = 27$, what is the value of $k$?",
    correctAnswer: "19",
    explanation: "**SAT Pattern: Function Composition**\n\n**The correct answer is $19$.**\n\n**The Fast Way (~25s):** $f(2) = 6$ and $g(2) = 2 + k$, so $h(2) = 8 + k = 27$ and $k = 19$.\n\n**The Full Solution:**\nStep 1: Find $f(2)$: $2^{2} + 2 = 6$.\nStep 2: Find $g(2)$: $2 + k$.\nStep 3: Then $h(2) = 6 + (2 + k) = 8 + k$. Setting $8 + k = 27$ gives $k = 19$. Check: $g(2) = 21$, and $6 + 21 = 27$ ✓\n\n**Common Mistakes:**\n* $21$: uses $g(2) = k$, dropping the $x$ in $g(x) = x + k$.\n* $3$: treats $h$ as $f(g(x))$, solving $(2 + k)^{2} + 2 = 27$.\n\n**Test Day Takeaway:** For $h(x) = f(x) + g(x)$, evaluate each function at the input first, then set the sum equal to the given value.",
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
    question: "The graph of the quadratic function $f$ is shown. If $g(x) = 2x - 6$ and $h(x) = f(x) + g(x)$, what is the value of $h(4)$?",
    diagram: { type: "quadraticVertex", params: { vertex: [1, -4], a: 1, showPoints: [[-1, 0], [3, 0]], showVertex: true } },
    choices: [
      // distractor: reports g(4) and leaves out f(4)
      { id: "A", text: "$2$" },
      // distractor: subtracts g(4) from f(4) instead of adding: 5 - 2
      { id: "B", text: "$3$" },
      // distractor: reports f(4) and leaves out g(4)
      { id: "C", text: "$5$" },
      { id: "D", text: "$7$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Function Composition**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** The graph gives $f(x) = (x + 1)(x - 3)$, so $f(4) = 5$; also $g(4) = 2$, so $h(4) = 5 + 2 = 7$.\n\n**The Full Solution:**\nStep 1: The graph has $x$-intercepts $-1$ and $3$ and vertex $(1, -4)$, so $f(x) = (x + 1)(x - 3)$; check: $f(1) = (2)(-2) = -4$. Then $f(4) = (5)(1) = 5$.\nStep 2: Find $g(4)$: $2(4) - 6 = 2$.\nStep 3: So $h(4) = f(4) + g(4) = 5 + 2 = 7$. Check: in vertex form, $f(4) = (4 - 1)^{2} - 4 = 5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): reports $g(4)$ and leaves out $f(4)$.\n* Choice B ($3$): subtracts, $5 - 2$, instead of adding.\n* Choice C ($5$): reports $f(4)$ and leaves out $g(4)$.\n\n**Test Day Takeaway:** Read or build $f$ from the graph, evaluate both functions at the same input, then combine as the definition says.",
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
    question: "$f(x) = x + 6$\n$g(x) = x - 2$\nThe function $h$ is defined by $h(x) = f(x) \\cdot g(x)$. For what positive value of $x$ is $h(x) = 84$?",
    correctAnswer: "8",
    explanation: "**SAT Pattern: Function Composition**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~30s):** $(x + 6)(x - 2) = 84$ gives $x^{2} + 4x - 96 = 0$, or $(x + 12)(x - 8) = 0$; the positive solution is $8$.\n\n**The Full Solution:**\nStep 1: Write $h$: $h(x) = (x + 6)(x - 2) = x^{2} + 4x - 12$.\nStep 2: Set $h(x) = 84$: $x^{2} + 4x - 12 = 84$, so $x^{2} + 4x - 96 = 0$.\nStep 3: Factor: $(x + 12)(x - 8) = 0$, so $x = -12$ or $x = 8$. The positive value is $8$. Check: $f(8) = 14$, $g(8) = 6$, and $14 \\cdot 6 = 84$ ✓\n\n**Common Mistakes:**\n* $40$: adds the functions instead of multiplying, solving $2x + 4 = 84$.\n* $78$: sets only $f(x) = x + 6$ equal to $84$.\n\n**Test Day Takeaway:** Build $h$ exactly as defined (here a product), move everything to one side, and factor.",
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
    question: "The table shows some values of the exponential function $f$. The function $g$ is defined by $g(x) = f(x + 1)$. Which equation defines $g$?",
    diagram: { type: "dataTable", params: { headers: ["x", "f(x)"], rows: [["0", "3"], ["1", "6"], ["2", "12"]] } },
    choices: [
      // distractor: finds f but ignores the shift, giving f(x) itself
      { id: "A", text: "$g(x) = 3(2)^{x}$" },
      // distractor: adds 1 to the growth factor instead of to the input
      { id: "B", text: "$g(x) = 3(3)^{x}$" },
      // distractor: adds 1 to the initial value 3 instead of to the input
      { id: "C", text: "$g(x) = 4(2)^{x}$" },
      { id: "D", text: "$g(x) = 6(2)^{x}$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Function Composition**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** The table gives $f(x) = 3(2)^{x}$, so $g(x) = 3(2)^{x + 1} = 3(2)(2)^{x} = 6(2)^{x}$.\n\n**The Full Solution:**\nStep 1: The table gives $f(0) = 3$, and each increase of $1$ in $x$ doubles the output ($3$, $6$, $12$), so $f(x) = 3(2)^{x}$.\nStep 2: Replace $x$ with $x + 1$: $g(x) = f(x + 1) = 3(2)^{x + 1}$.\nStep 3: Rewrite: $3(2)^{x + 1} = 3(2)(2)^{x} = 6(2)^{x}$. Check: $g(0) = f(1) = 6$ and $6(2)^{0} = 6$; $g(1) = f(2) = 12$ and $6(2)^{1} = 12$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($g(x) = 3(2)^{x}$): finds $f$ correctly but leaves out the shift; this is $f(x)$.\n* Choice B ($g(x) = 3(3)^{x}$): adds $1$ to the growth factor instead of to the input.\n* Choice C ($g(x) = 4(2)^{x}$): adds $1$ to the initial value $3$ instead of to the input.\n\n**Test Day Takeaway:** Shifting the input of an exponential function changes its initial value: $a(b)^{x + 1} = ab(b)^{x}$.",
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
    question: "$f(x) = x^{2} - 10x + 31$\nThe function $g$ is defined by $g(x) = f(x - 4)$. The graph of $y = g(x)$ in the $xy$-plane has its vertex at $(h, k)$. What is the value of $h$?",
    correctAnswer: "9",
    explanation: "**SAT Pattern: Function Composition**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~40s):** $f(x) = (x - 5)^{2} + 6$ has its vertex at $x = 5$; replacing $x$ with $x - 4$ moves the graph $4$ units right, so $h = 9$.\n\n**The Full Solution:**\nStep 1: Complete the square: $x^{2} - 10x + 31 = (x^{2} - 10x + 25) + 6 = (x - 5)^{2} + 6$, so the vertex of the graph of $f$ is $(5, 6)$.\nStep 2: Replace $x$ with $x - 4$: $g(x) = ((x - 4) - 5)^{2} + 6 = (x - 9)^{2} + 6$.\nStep 3: The vertex of the graph of $g$ is $(9, 6)$, so $h = 9$. Check: $g(9) = f(5) = 25 - 50 + 31 = 6$, the least value of $g$ ✓\n\n**Common Mistakes:**\n* $1$: moves the vertex $4$ units left instead of right.\n* $5$: reports the vertex of $f$ without the shift.\n* $6$: reports $k$, the $y$-coordinate of the vertex, instead of $h$.\n\n**Test Day Takeaway:** The graph of $y = f(x - c)$ is the graph of $f$ moved $c$ units right; find the vertex of $f$, then shift it.",
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
    question: "The table shows the number of bacteria in a sample at three times after the sample was collected. The number of bacteria increases exponentially. How many bacteria are in the sample $16$ hours after it was collected?",
    diagram: { type: "dataTable", params: { headers: ["Hours after collection", "Number of bacteria"], rows: [["0", "20"], ["4", "60"], ["8", "180"]] } },
    choices: [
      // distractor: multiplies the starting count by the number of periods, 20 x 4, instead of applying the growth factor
      { id: "A", text: "$80$" },
      // distractor: uses three tripling periods instead of four, which is the count at 12 hours
      { id: "B", text: "$540$" },
      { id: "C", text: "$1{,}620$" },
      // distractor: uses five tripling periods, which is the count at 20 hours
      { id: "D", text: "$4{,}860$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The count triples every $4$ hours ($20 \\to 60 \\to 180$), and $16$ hours is $4$ tripling periods, so the count is $20 \\cdot 3^{4} = 20 \\cdot 81 = 1{,}620$.\n\n**The Full Solution:**\nStep 1: The table starts at $20$ bacteria at $0$ hours, and $\\frac{60}{20} = \\frac{180}{60} = 3$, so the count triples every $4$ hours and the number after $t$ hours is $20 \\cdot 3^{t/4}$.\nStep 2: At $t = 16$, the exponent is $\\frac{16}{4} = 4$.\nStep 3: $20 \\cdot 3^{4} = 20 \\cdot 81 = 1{,}620$. Check: continuing the table, $180 \\to 540$ at $12$ hours $\\to 1{,}620$ at $16$ hours ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($80$): multiplies the starting count by the number of periods, $20 \\times 4$, instead of applying the growth factor.\n* Choice B ($540$): uses three tripling periods instead of four, which is the count at $12$ hours.\n* Choice D ($4{,}860$): uses five tripling periods, which is the count at $20$ hours.\n\n**Test Day Takeaway:** For \"multiplies every $p$ hours,\" the exponent is the number of periods, $\\frac{t}{p}$, not the number of hours.",
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
    question: "The function $f$ is defined by $f(x) = 5(3)^{x}$. What is the value of $f(4)$?",
    correctAnswer: "405",
    explanation: "**SAT Pattern: Exponential Growth Model**\n\n**The correct answer is $405$.**\n\n**The Fast Way (~15s):** $f(4) = 5(3)^{4} = 5(81) = 405$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 4$ into the definition: $f(4) = 5(3)^{4}$.\nStep 2: Evaluate the power first: $3^{4} = 81$.\nStep 3: Multiply by the coefficient: $5(81) = 405$. Check by stepping up from $f(0) = 5$, multiplying by $3$ each time: $5 \\to 15 \\to 45 \\to 135 \\to 405$ ✓\n\n**Common Mistakes:**\n* $50{,}625$: multiplies $5$ by $3$ first and then raises $15$ to the fourth power. The exponent applies only to the base $3$.\n* $60$: multiplies $5$, $3$, and $4$, treating the exponent as a factor.\n* $1{,}215$: steps up one time too many and computes $f(5)$.\n\n**Test Day Takeaway:** In $a(b)^{x}$, the exponent belongs to $b$ alone; evaluate the power, then multiply by $a$.",
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
    question: "A ferry carried $4{,}800$ riders per week in $2015$, and this number decreased by $6\\%$ each year after $2015$. The function $R$ gives the number of riders per week $t$ years after $2015$. Which equation defines $R$?",
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
    question: "A coin was bought for \\$3,000. Its value increased by $10\\%$ each year after it was bought. What was the value of the coin, in dollars, $2$ years after it was bought?",
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
    question: "For the exponential function $g$, the table shows three values of $x$ and their corresponding values of $g(x)$. Which equation defines $g$?",
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
    question: "A business pays \\$8,000 this year for insurance. The cost is expected to increase by $5\\%$ each year. What will the cost be, in dollars, $3$ years from now?",
    correctAnswer: "9261",
    explanation: "**SAT Pattern: Exponential Growth Model**\n\n**The correct answer is $9261$.**\n\n**The Fast Way (~25s):** Three $5\\%$ increases multiply by $(1.05)^3$, and $8{,}000(1.05)^3 = 9{,}261$.\n\n**The Full Solution:**\nStep 1: A $5\\%$ increase multiplies the cost by $1.05$, so $C(t) = 8{,}000(1.05)^t$ dollars $t$ years from now.\nStep 2: Substituting $t = 3$ gives $C(3) = 8{,}000(1.05)^3$.\nStep 3: Year by year: $8{,}000 \\to 8{,}400 \\to 8{,}820 \\to 9{,}261$. $\\checkmark$\n\n**Common Mistakes:** Adding $5\\%$ of the current $\\$8{,}000$ three times gives $8{,}000 + 3(400) = 9{,}200$, which ignores the compounding. Stopping after two increases gives $8{,}820$.\n\n**Test Day Takeaway:** Repeated percent change is repeated MULTIPLICATION; count the number of increases carefully and raise the multiplier to that power.",
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
    question: "The function $f$ is defined by $f(x) = ab^{x}$, where $a$ and $b$ are positive constants. The table shows two values of $x$ and their corresponding values of $f(x)$. What is the value of $f(2)$?",
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
    question: "$M(d) = 6(2)^{\\frac{d}{3}}$\nThe given function models the mass, in milligrams, of an algae sample $d$ days after it was first measured. How many days does it take for the mass to increase from $24$ milligrams to $384$ milligrams?",
    correctAnswer: "12",
    explanation: "**SAT Pattern: Exponential Growth Model**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~35s):** $384 \\div 24 = 16 = 2^4$, so four doublings are needed, and each doubling takes $3$ days: $4(3) = 12$ days.\n\n**The Full Solution:**\nStep 1: Solve $6 \\cdot 2^{d/3} = 24$. Dividing by $6$ gives $2^{d/3} = 4 = 2^2$, so $\\dfrac{d}{3} = 2$ and $d = 6$.\nStep 2: Solve $6 \\cdot 2^{d/3} = 384$. Dividing by $6$ gives $2^{d/3} = 64 = 2^6$, so $\\dfrac{d}{3} = 6$ and $d = 18$.\nStep 3: The elapsed time is $18 - 6 = 12$ days. Check: $24 \\to 48 \\to 96 \\to 192 \\to 384$ is four doublings at $3$ days each. $\\checkmark$\n\n**Common Mistakes:** Answering $18$, the day the mass REACHES $384$ milligrams, instead of the time since it was $24$ milligrams. Answering $4$, the number of doublings, without multiplying by the $3$-day doubling period.\n\n**Test Day Takeaway:** When an exponent is $\\frac{d}{k}$, the quantity multiplies by the base once every $k$ units — count the multiplications first, then scale by $k$.",
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
    question: "$2x^{2} - 26x + 72 = 0$\nWhat is the sum of the solutions to the given equation?",
    choices: [
      // distractor: uses b/a instead of -b/a, giving -13
      { id: "A", text: "$-13$" },
      { id: "B", text: "$13$" },
      // distractor: uses -b and never divides by a = 2, giving 26
      { id: "C", text: "$26$" },
      // distractor: reports the product c/a = 36 instead of the sum
      { id: "D", text: "$36$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Sum/Product of Roots — Vieta's**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** For $ax^2+bx+c=0$ the solutions add to $-\\frac{b}{a}=-\\frac{-26}{2}=13$.\n\n**The Full Solution:**\nStep 1: Identify $a=2$, $b=-26$, $c=72$.\nStep 2: The sum of the solutions is $-\\frac{b}{a}=-\\frac{-26}{2}$.\nStep 3: Simplify to $13$. Check: the equation factors as $2(x-4)(x-9)=0$, and $4+9=13$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-13$): uses $\\frac{b}{a}$ instead of $-\\frac{b}{a}$, producing $-13$.\n* Choice C ($26$): uses $-b=26$ and forgets to divide by $a=2$.\n* Choice D ($36$): computes the product $\\frac{c}{a}=\\frac{72}{2}=36$ rather than the sum.\n\n**Test Day Takeaway:** Sum of solutions is $-\\frac{b}{a}$ and product is $\\frac{c}{a}$ — the leading coefficient divides both.",
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
    question: "$3x^{2} - 21x + 30 = 0$\nWhat is the product of the solutions to the given equation?",
    correctAnswer: "10",
    explanation: "**SAT Pattern: Sum/Product of Roots — Vieta's**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~10s):** The product of the solutions of $ax^2+bx+c=0$ is $\\frac{c}{a}=\\frac{30}{3}=10$.\n\n**The Full Solution:**\nStep 1: Read off $a=3$, $b=-21$, $c=30$.\nStep 2: The product of the solutions is $\\frac{c}{a}=\\frac{30}{3}$.\nStep 3: Simplify to $10$. Check: $3x^2-21x+30=3(x-2)(x-5)$, and $2\\cdot5=10$ ✓\n\n**Common Mistakes:**\n* $30$: uses $c$ alone and forgets to divide by $a=3$.\n* $7$: reports the sum $-\\frac{b}{a}=7$ instead of the product.\n* $-10$: attaches a negative sign that belongs only to the sum formula.\n\n**Test Day Takeaway:** Product is $\\frac{c}{a}$ with no sign change; only the sum carries the minus.",
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
    question: "$7x^{2} + cx + 63 = 0$\nIn the given equation, $c$ is a constant. The equation has two distinct real solutions. Which expression represents the sum of the solutions?",
    choices: [
      // distractor: inverts the ratio and drops the negative sign
      { id: "A", text: "$\\frac{7}{c}$" },
      // distractor: inverts -b/a into -a/b
      { id: "B", text: "$-\\frac{7}{c}$" },
      // distractor: uses b/a and drops the negative sign
      { id: "C", text: "$\\frac{c}{7}$" },
      { id: "D", text: "$-\\frac{c}{7}$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Sum/Product of Roots — Vieta's**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** With $a=7$ and $b=c$, the two solutions add to $-\\frac{b}{a}=-\\frac{c}{7}$.\n\n**The Full Solution:**\nStep 1: Match $7x^2+cx+63=0$ to $ax^2+bx+c_0=0$, so $a=7$ and the linear coefficient is $c$.\nStep 2: The sum of the solutions is $-\\frac{\\text{linear coefficient}}{a}$.\nStep 3: Substitute to get $-\\frac{c}{7}$. Check: with $c=-70$ the equation is $7x^2-70x+63=0$, which factors as $7(x-1)(x-9)=0$; its solutions $1$ and $9$ add to $10=-\\frac{-70}{7}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{7}{c}$): inverts the ratio and also drops the negative sign.\n* Choice B ($-\\frac{7}{c}$): keeps the sign but inverts $-\\frac{b}{a}$ into $-\\frac{a}{b}$.\n* Choice C ($\\frac{c}{7}$): uses $\\frac{b}{a}$ and omits the negative sign.\n\n**Test Day Takeaway:** Vieta's sum works with letters exactly as with numbers: divide the linear coefficient by the leading one, then negate.",
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
    question: "$x^{2} + (k - 3)x + 18 = 0$\nIn the given equation, $k$ is a constant. The sum of the solutions is $11$. What is the value of $k$?",
    correctAnswer: "-8",
    explanation: "**SAT Pattern: Sum/Product of Roots — Vieta's**\n\n**The correct answer is $-8$.**\n\n**The Fast Way (~20s):** The sum of the solutions is $-(k-3)$, so $-(k-3)=11$ gives $k-3=-11$ and $k=-8$.\n\n**The Full Solution:**\nStep 1: With $a=1$, the sum of the solutions is $-\\frac{b}{a}=-(k-3)$.\nStep 2: Set $-(k-3)=11$, so $k-3=-11$.\nStep 3: Add $3$ to both sides: $k=-8$. Check: $k=-8$ gives $x^2-11x+18=0$, whose solutions $2$ and $9$ add to $11$ ✓\n\n**Common Mistakes:**\n* $14$: sets $k-3=11$ and skips the negative sign in $-\\frac{b}{a}$.\n* $8$: solves correctly to $k=-8$ but reports the value without its negative sign.\n* $-11$: stops at $k-3=-11$ and reports that instead of $k$.\n\n**Test Day Takeaway:** Write the sum as $-\\frac{b}{a}$ first, then solve for the constant — the minus sign is where these items are won or lost.",
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
    question: "$2x^{2} = 18x - 40$\nWhat is the sum of the solutions to the given equation?",
    choices: [
      // distractor: uses b/a instead of -b/a after rearranging
      { id: "A", text: "$-9$" },
      { id: "B", text: "$9$" },
      // distractor: uses -b without dividing by a = 2
      { id: "C", text: "$18$" },
      // distractor: reports the product of the solutions, 40/2 = 20
      { id: "D", text: "$20$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Sum/Product of Roots — Vieta's**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Rewrite as $2x^{2} - 18x + 40 = 0$; the sum of the solutions is $\\frac{18}{2} = 9$.\n\n**The Full Solution:**\nStep 1: Move every term to one side: $2x^{2} - 18x + 40 = 0$.\nStep 2: Divide by $2$: $x^{2} - 9x + 20 = 0$, which factors as $(x - 4)(x - 5) = 0$.\nStep 3: The solutions are $4$ and $5$, and their sum is $9$. Check: $2(4)^{2} = 32 = 18(4) - 40$ and $2(5)^{2} = 50 = 18(5) - 40$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-9$): uses $\\frac{b}{a}$ instead of $-\\frac{b}{a}$.\n* Choice C ($18$): uses $-b$ without dividing by $a = 2$.\n* Choice D ($20$): reports the product of the solutions, $\\frac{40}{2}$, instead of the sum.\n\n**Test Day Takeaway:** Put the equation in the form $ax^{2} + bx + c = 0$ first; then the sum of the solutions is $-\\frac{b}{a}$.",
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
    question: "$2x^{2} - 9x - 35 = 0$\nWhat is the sum of the solutions to the given equation?",
    correctAnswer: "9/2",
    explanation: "**SAT Pattern: Sum/Product of Roots — Vieta's**\n\n**The correct answer is $\\frac{9}{2}$.**\n\n**The Fast Way (~20s):** For $ax^{2} + bx + c = 0$, the sum of the solutions is $-\\frac{b}{a} = -\\frac{-9}{2} = \\frac{9}{2}$.\n\n**The Full Solution:**\nStep 1: Here $a = 2$, $b = -9$, and $c = -35$.\nStep 2: The sum of the solutions is $-\\frac{b}{a} = \\frac{9}{2}$.\nStep 3: Check by factoring: $(2x + 5)(x - 7) = 0$, so the solutions are $-\\frac{5}{2}$ and $7$, and $-\\frac{5}{2} + 7 = \\frac{9}{2}$ ✓ (Either $9/2$ or $4.5$ is accepted.)\n\n**Common Mistakes:**\n* $9$: uses $-b$ without dividing by $a = 2$.\n* $-\\frac{9}{2}$: uses $\\frac{b}{a}$ instead of $-\\frac{b}{a}$.\n* $-\\frac{35}{2}$: computes the product of the solutions, $\\frac{c}{a}$, instead of the sum.\n\n**Test Day Takeaway:** The sum of the solutions of $ax^{2} + bx + c = 0$ is $-\\frac{b}{a}$; divide by the leading coefficient.",
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
    question: "$2x(x - 5) = x^{2} + 3x - 7$\nWhat is the sum of the solutions to the given equation?",
    choices: [
      // distractor: uses b/a instead of -b/a
      { id: "A", text: "$-13$" },
      // distractor: reports the product of the solutions, 7
      { id: "B", text: "$7$" },
      // distractor: expands 2x(x - 5) as 2x^2 - 5x, which leads to x^2 - 8x + 7 = 0
      { id: "C", text: "$8$" },
      { id: "D", text: "$13$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Sum/Product of Roots — Vieta's**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** Expanding and collecting gives $x^{2} - 13x + 7 = 0$, so the sum of the solutions is $13$.\n\n**The Full Solution:**\nStep 1: Expand the left side: $2x^{2} - 10x = x^{2} + 3x - 7$.\nStep 2: Collect every term on the left: $x^{2} - 13x + 7 = 0$. Its discriminant, $169 - 28 = 141$, is positive, so there are two real solutions (not integers).\nStep 3: The sum of the solutions is $-\\frac{-13}{1} = 13$. Check: the solutions are $\\frac{13 \\pm \\sqrt{141}}{2}$, which add to $\\frac{26}{2} = 13$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-13$): uses $\\frac{b}{a}$ instead of $-\\frac{b}{a}$.\n* Choice B ($7$): reports the product of the solutions, $\\frac{7}{1}$, instead of the sum.\n* Choice C ($8$): expands $2x(x - 5)$ as $2x^{2} - 5x$, which leads to $x^{2} - 8x + 7 = 0$.\n\n**Test Day Takeaway:** When the solutions are messy, do not solve; write the equation in standard form and read the sum as $-\\frac{b}{a}$.",
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
    question: "$(x - 9)^{2} = 3x - 27$\nWhat is the sum of the solutions to the given equation?",
    correctAnswer: "21",
    explanation: "**SAT Pattern: Sum/Product of Roots — Vieta's**\n\n**The correct answer is $21$.**\n\n**The Fast Way (~30s):** Expanding gives $x^{2} - 21x + 108 = 0$, so the sum of the solutions is $21$.\n\n**The Full Solution:**\nStep 1: The right side is $3(x - 9)$, so the equation is $(x - 9)^{2} - 3(x - 9) = 0$.\nStep 2: Factor out $x - 9$: $(x - 9)(x - 9 - 3) = (x - 9)(x - 12) = 0$.\nStep 3: The solutions are $9$ and $12$, and their sum is $21$. Check: expanding gives $x^{2} - 18x + 81 = 3x - 27$, or $x^{2} - 21x + 108 = 0$, and $-\\frac{-21}{1} = 21$ ✓\n\n**Common Mistakes:**\n* $12$: divides both sides by $x - 9$, which loses the solution $x = 9$.\n* $18$: uses only the $-18x$ from expanding the left side and forgets the $3x$ on the right.\n\n**Test Day Takeaway:** Never divide both sides by an expression that can equal $0$; factor it out instead, or a solution is lost.",
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
    question: "The table shows the amount of water, in millions of liters, in a reservoir $t$ years after $2018$. The amount is modeled by an exponential function. Which of the following best describes how the amount of water changes over time?",
    diagram: { type: "dataTable", params: { headers: ["t", "Water (millions of liters)"], rows: [["0", "8"], ["1", "10"], ["2", "12.5"]] } },
    choices: [
      // distractor: reads the first gap, $10 - 8 = 2$, as a constant yearly increase, but the next gap is $2.5$
      { id: "A", text: "The amount of water increases by $2$ million liters each year." },
      { id: "B", text: "The amount of water increases by $25\\%$ each year." },
      // distractor: reports the multiplier $1.25$ as a percent increase instead of the extra $0.25$
      { id: "C", text: "The amount of water increases by $125\\%$ each year." },
      // distractor: divides the increase by the LATER value, $\frac{2}{10}$, instead of by the earlier one
      { id: "D", text: "The amount of water increases by $20\\%$ each year." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $\\frac{10}{8} = \\frac{12.5}{10} = 1.25$, a constant multiplier, so the amount of water rises $25\\%$ each year.\n\n**The Full Solution:**\nStep 1: For an exponential function, consecutive values have a constant ratio, so divide: $10 \\div 8 = 1.25$.\nStep 2: The next ratio confirms it: $12.5 \\div 10 = 1.25$.\nStep 3: A multiplier of $1.25$ is an increase of $0.25$, or $25\\%$, per year. Check: $8(1.25)^{2} = 12.5$, matching the table ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$ million liters each year): the gaps are $2$ and then $2.5$, so no constant amount is added.\n* Choice C ($125\\%$): confuses the whole multiplier with the part that is added; a $125\\%$ increase would more than double the amount of water.\n* Choice D ($20\\%$): divides the $2$ million increase by $10$ rather than by the starting value $8$.\n\n**Test Day Takeaway:** Percent change always divides by the EARLIER value, and the multiplier is $1$ plus that percent.",
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
    question: "$v(t) = 18{,}000(0.86)^{t}$\nThe function $v$ gives the value, in dollars, of a car $t$ years after it was bought. The value of the car decreases by $p\\%$ each year. What is the value of $p$?",
    correctAnswer: "14",
    explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**The correct answer is $14$.**\n\n**The Fast Way (~15s):** The base $0.86$ keeps $86\\%$ of the value, so $100\\% - 86\\% = 14\\%$ is lost each year.\n\n**The Full Solution:**\nStep 1: Each year the value is multiplied by $b = 0.86$.\nStep 2: For decay, $b = 1 - r$, so $0.86=1-r$ and $r = 0.14$.\nStep 3: As a percent, $r = 14\\%$. Check: $v(0) = 18{,}000$ and $v(1) = 15{,}480$, a drop of $2{,}520$, and $\\dfrac{2{,}520}{18{,}000} = 0.14$. $\\checkmark$\n\n**Common Mistakes:** Answering $86$, which is the percent of the value that REMAINS, not the percent lost. Answering $0.14$: that is the rate as a decimal, but $p$ is the percent, so the decimal must be converted.\n\n**Test Day Takeaway:** With a base below $1$, the percent decrease is $1 - b$ written as a percent; the base itself always reports what is left over.",
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
    question: "The function $N$ defined by $N(t) = 4{,}500(0.6)^{\\frac{t}{8}}$ gives the estimated number of seals in a bay $t$ years after $2000$. Which of the following best describes how the estimated number of seals changes over time?",
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
    question: "$A(t) = 60(2.25)^{\\frac{t}{2}}$\nThe function $A$ gives the area, in square centimeters, covered by a patch of moss $t$ weeks after it was first measured. The area increases by $p\\%$ each week. What is the value of $p$?",
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
    question: "The table shows the number of otters living along a river $t$ years after otters were reintroduced there. If the pattern continues, which of the following best describes how the number of otters changes over time?",
    diagram: { type: "dataTable", params: { headers: ["Years after reintroduction", "Otters counted"], rows: [["0", "40"], ["3", "120"], ["6", "360"]] } },
    choices: [
      // distractor: attaches the multiplier of $3$ to one year rather than to the three-year interval in the table
      { id: "A", text: "The population triples each year." },
      // distractor: spreads the first jump of $80$ otters evenly, but the next jump is $240$, not $80$
      { id: "B", text: "The population increases by $80$ otters each year." },
      // distractor: turns a multiplier of $3$ into a $300\%$ increase, which would multiply the count by $4$
      { id: "C", text: "The population increases by $300\\%$ every three years." },
      { id: "D", text: "The population triples every three years." }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** $\\frac{120}{40} = \\frac{360}{120} = 3$, and each step in the table covers three years, so the count triples every three years.\n\n**The Full Solution:**\nStep 1: Divide consecutive counts: $120 \\div 40 = 3$ and $360 \\div 120 = 3$, a constant ratio.\nStep 2: The inputs advance by $3$ years between rows, so the multiplier of $3$ belongs to a three-year span.\nStep 3: Therefore the population triples every three years. Check: after six years the count is $40 \\cdot 3 \\cdot 3 = 360$, matching the table ✓\n\n**Why the wrong answers are tempting:**\n* Choice A (triples each year): would give $40 \\cdot 3^{3} = 1{,}080$ otters at year $3$, far above the recorded $120$.\n* Choice B ($80$ otters each year): the increases are $80$ then $240$, so the growth is not a fixed amount.\n* Choice C ($300\\%$ every three years): a $300\\%$ increase means multiplying by $4$, which would give $160$ at year $3$.\n\n**Test Day Takeaway:** Read the ratio AND the input step together — a constant ratio describes the interval between rows, not automatically one unit.",
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
    question: "$B(t) = a(1.04)^{t}$\nThe function $B$ gives the balance, in dollars, in a savings account $t$ years after it was opened, where $a$ is a constant. If $B(2) = 1{,}352$, what is the value of $a$?",
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
    question: "$P(t) = a(1.02)^{t}$\nThe function $P$ models the population of a town $t$ years after $2010$, where $a$ is a constant. The model predicts a population of $k$ in $2016$. Which expression represents the population the model predicts for $2022$?",
    choices: [
      // distractor: moves 6 years backward instead of forward, giving the population in 2010
      { id: "A", text: "$\\dfrac{k}{(1.02)^{6}}$" },
      { id: "B", text: "$k(1.02)^{6}$" },
      // distractor: counts 12 years from 2010 instead of 6 years from 2016
      { id: "C", text: "$k(1.02)^{12}$" },
      // distractor: adds the 2% rate six times into a single 12% increase instead of compounding
      { id: "D", text: "$k(1.12)$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** From $2016$ to $2022$ is $6$ years, and each year multiplies the population by $1.02$, so the prediction is $k(1.02)^{6}$.\n\n**The Full Solution:**\nStep 1: The year $2016$ is $t = 6$, so $P(6) = a(1.02)^{6} = k$.\nStep 2: The year $2022$ is $t = 12$, so $P(12) = a(1.02)^{12} = a(1.02)^{6} \\cdot (1.02)^{6}$.\nStep 3: Replacing $a(1.02)^{6}$ with $k$ gives $P(12) = k(1.02)^{6}$. Check with $a = 100$: $k = 100(1.02)^{6} \\approx 112.62$, and $100(1.02)^{12} \\approx 126.82$, which equals $112.62(1.02)^{6}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{k}{(1.02)^{6}}$): this is the population in $2010$; dividing runs the model backward $6$ years.\n* Choice C ($k(1.02)^{12}$): applies $12$ years of growth, counting from $2010$, to a population that is already the $2016$ value.\n* Choice D ($k(1.12)$): treats six years of $2\\%$ growth as a flat $12\\%$ increase; compounding makes the true factor, about $1.126$, slightly larger.\n\n**Test Day Takeaway:** When the model's value at one time is named, measure the exponent from THAT time; the constant $a$ never has to be found.",
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
    question: "$D(t) = 24(9)^{\\frac{t}{6}}$\nThe function $D$ gives the estimated number of bacteria in a culture $t$ hours after it was started. Every $15$ hours, the estimated number of bacteria is multiplied by $k$. What is the value of $k$?",
    correctAnswer: "243",
    explanation: "**SAT Pattern: Exponential Growth Factor over a Period**\n\n**The correct answer is $243$.**\n\n**The Fast Way (~30s):** Over $15$ hours the exponent rises by $\\frac{15}{6} = \\frac{5}{2}$, so $k = 9^{5/2} = 3^5 = 243$.\n\n**The Full Solution:**\nStep 1: The factor over any span of $15$ hours is $\\dfrac{D(t + 15)}{D(t)} = 9^{(t+15)/6 - t/6} = 9^{15/6}$.\nStep 2: $\\dfrac{15}{6} = \\dfrac{5}{2}$, so the factor is $9^{5/2} = \\left(9^{1/2}\\right)^5 = 3^5$.\nStep 3: $k = 3^5 = 243$. Check from $t = 0$: $D(0) = 24$ and $D(15) = 24 \\cdot 243 = 5{,}832$. $\\checkmark$\n\n**Common Mistakes:** Answering $81$, which rounds the exponent $\\frac{5}{2}$ down to $2$. Answering $22.5$, which multiplies $9$ by $\\frac{15}{6}$ instead of raising $9$ to that power.\n\n**Test Day Takeaway:** The growth factor over a span depends only on how much the exponent changes — subtract exponents, and rewrite a half-power as a square root to keep the arithmetic exact.",
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
    question: "A print shop charges \\$12 per order plus \\$0.06 per page. Which type of function best models the total charge for an order as a function of the number of pages?",
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
    question: "The area of a pond covered by duckweed doubles every $4$ days. Which type of function best models the covered area as a function of time?",
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
    question: "A worker unloads boxes from a pallet. The table shows the number of boxes remaining on the pallet $h$ hours after the worker started. Which type of function best models the number of boxes remaining as a function of $h$?",
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
    question: "The table shows the number of members in a book club at the start of each of three consecutive years. Which type of function best models the number of members as a function of time?",
    diagram: { type: "dataTable", params: { headers: ["Years after 2020", "Members"], rows: [["0", "500"], ["1", "600"], ["2", "720"]] } },
    choices: [
      // distractor: the right family, but the number of members is rising, not falling
      { id: "A", text: "Decreasing exponential" },
      // distractor: the number of members is rising, and the yearly changes are not constant
      { id: "B", text: "Decreasing linear" },
      { id: "C", text: "Increasing exponential" },
      // distractor: the yearly increases, 100 and then 120, are not constant; the ratios are
      { id: "D", text: "Increasing linear" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Classify Physical Motion Model**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** $\\frac{600}{500} = 1.2$ and $\\frac{720}{600} = 1.2$: a constant ratio greater than $1$, so the model is increasing exponential.\n\n**The Full Solution:**\nStep 1: Check the differences: $600 - 500 = 100$ and $720 - 600 = 120$. They are not equal, so a linear model does not fit.\nStep 2: Check the ratios: $\\frac{600}{500} = 1.2$ and $\\frac{720}{600} = 1.2$. They are equal, so the number of members is multiplied by $1.2$ each year, which is exponential.\nStep 3: Because the factor $1.2$ is greater than $1$, the model is increasing exponential. Check: $500(1.2)^{2} = 720$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A (Decreasing exponential): the right family, but the number of members is rising, not falling.\n* Choice B (Decreasing linear): the number of members is rising, and the yearly changes are not constant.\n* Choice D (Increasing linear): the yearly increases, $100$ and then $120$, are not constant; the ratios are.\n\n**Test Day Takeaway:** Equal differences mean linear; equal ratios mean exponential; a factor above $1$ means increasing.",
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
    question: "The concentration of chlorine in a swimming pool decreases by half every $3$ days. Which type of function best models the concentration as a function of time?",
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
    explanation: "**SAT Pattern: Classify Physical Motion Model**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Halving over equal time spans multiplies by the constant factor $\\frac{1}{2}$, which is exponential decay.\n\n**The Full Solution:**\nStep 1: Let $c$ be the concentration at the start. After $3$ days it is $\\frac{1}{2}c$, after $6$ days $\\frac{1}{4}c$, after $9$ days $\\frac{1}{8}c$.\nStep 2: Equal time steps multiply by $\\frac{1}{2}$, so the model is exponential with base $\\frac{1}{2}$.\nStep 3: A base between $0$ and $1$ makes the function decreasing. Check the drops: $\\frac{1}{2}c$, then $\\frac{1}{4}c$, then $\\frac{1}{8}c$ — the amount lost shrinks each period, so no line fits. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B (decreasing linear): a line would remove the SAME amount every $3$ days; halving removes less and less.\n* Choice C (increasing exponential): the right family, but a factor of $\\frac{1}{2}$ makes it decrease.\n* Choice D (increasing linear): the concentration is falling.\n\n**Test Day Takeaway:** Half-life language always means exponential decay; the tell for linear decay is a constant amount removed per unit of time.",
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
    question: "A garden center gave away free tomato plants during a spring event. The graph shown models the number of plants $y$ remaining $x$ weeks after the event began. What is the best interpretation of the $y$-intercept of the graph in this context?",
    diagram: { type: "parabola", params: { vertex: { h: 10, k: 0 }, a: 0.4, xRange: [0, 10], yRange: [0, 50], xTickInterval: 5, yTickInterval: 10, gridInterval: 5, showVertex: false, highlightPoints: [[0, 40], [10, 0]] } },
    choices: [
      // distractor: reads the intercept as a weekly rate
      { id: "A", text: "The garden center gave away $40$ plants each week." },
      { id: "B", text: "The garden center had $40$ plants when the event began." },
      // distractor: pairs the y-value 40 with the x-intercept, 10 weeks, where the graph shows 0 plants
      { id: "C", text: "The garden center had $40$ plants remaining $10$ weeks after the event began." },
      // distractor: reads the intercept, a number of plants, as a number of weeks
      { id: "D", text: "The event lasted $40$ weeks." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Interpret Initial Value in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The graph crosses the $y$-axis at $(0, 40)$: when $x = 0$ weeks, $40$ plants remained, which is the number the garden center had when the event began.\n\n**The Full Solution:**\nStep 1: The $y$-intercept of a graph is the point where $x = 0$. The graph shown crosses the $y$-axis at $(0, 40)$.\nStep 2: Here $x$ is the number of weeks since the event began and $y$ is the number of plants remaining, so $x = 0$ is the moment the event began.\nStep 3: So the garden center had $40$ plants when the event began. Check: the curve falls from $40$ to $0$ at $x = 10$, so $40$ is the starting number of plants, not a number of weeks or a weekly amount ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($40$ plants each week): reads the intercept as a weekly rate; $40$ is the number of plants at the start.\n* Choice C ($40$ plants after $10$ weeks): at $x = 10$ the graph shows $0$ plants remaining, not $40$.\n* Choice D ($40$ weeks): $40$ is measured on the $y$-axis, in plants; the graph reaches $0$ at $x = 10$ weeks.\n\n**Test Day Takeaway:** The $y$-intercept answers \"what was the output when the input was $0$?\"; state it in the units of the output.",
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
    question: "$F(d) = 2{,}400(1.25)^{\\frac{d}{7}}$\nThe function $F$ gives the number of members of an online gardening forum $d$ days after the forum was launched. What is the best interpretation of $2{,}400$ in this context?",
    choices: [
      // distractor: reads the initial value as a daily increase
      { id: "A", text: "The number of members increased by $2{,}400$ each day." },
      // distractor: reads the initial value as the change over each 7-day period; the growth is by a factor of 1.25, not by a fixed amount
      { id: "B", text: "The number of members increased by $2{,}400$ every $7$ days." },
      { id: "C", text: "The forum had $2{,}400$ members when it was launched." },
      // distractor: pairs 2,400 with d = 7; F(7) = 2,400(1.25) = 3,000
      { id: "D", text: "The forum had $2{,}400$ members $7$ days after it was launched." }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Interpret Initial Value in Context**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** $F(0) = 2{,}400(1.25)^{0} = 2{,}400$, so the forum had $2{,}400$ members when it was launched.\n\n**The Full Solution:**\nStep 1: The forum was launched at $d = 0$.\nStep 2: Substitute $0$ for $d$: $F(0) = 2{,}400(1.25)^{\\frac{0}{7}} = 2{,}400(1) = 2{,}400$.\nStep 3: So $2{,}400$ is the number of members at launch. Check: $F(7) = 2{,}400(1.25) = 3{,}000$, so $2{,}400$ is not the number after $7$ days ✓\n\n**Why the wrong answers are tempting:**\n* Choice A (increase of $2{,}400$ each day): the model multiplies by a factor; it does not add a fixed amount each day.\n* Choice B (increase of $2{,}400$ every $7$ days): every $7$ days the number of members is multiplied by $1.25$; $2{,}400$ is the starting value.\n* Choice D ($2{,}400$ members after $7$ days): $F(7) = 3{,}000$; $2{,}400$ is the value at $d = 0$.\n\n**Test Day Takeaway:** In $a(b)^{\\frac{t}{k}}$, the coefficient $a$ is the value at $t = 0$.",
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
    question: "The function $P(t) = 18{,}000(0.94)^{t}$ gives the estimated population of a town $t$ years after 2015. What is the best interpretation of $18{,}000$ in this context?",
    choices: [
      // distractor: treats the coefficient as a fixed yearly decrease; the yearly change is 6% of the current population
      { id: "A", text: "The estimated population of the town decreases by 18,000 each year." },
      { id: "B", text: "The estimated population of the town in 2015 was 18,000." },
      // distractor: reads t = 1 as the starting year; the model gives 16,920 for 2016
      { id: "C", text: "The estimated population of the town in 2016 was 18,000." },
      // distractor: reads the coefficient as a long-run level; the population falls below 18,000 right after 2015
      { id: "D", text: "The estimated population of the town will eventually decrease to 18,000." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Interpret Initial Value in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** At $t = 0$ the power equals 1, so $P(0) = 18{,}000$, the estimate for 2015.\n\n**The Full Solution:**\nStep 1: The variable $t$ counts years after 2015, so 2015 corresponds to $t = 0$.\nStep 2: $(0.94)^{0} = 1$, so $P(0) = 18{,}000(1) = 18{,}000$.\nStep 3: The coefficient is therefore the estimated population in 2015. Check: $P(1) = 18{,}000(0.94) = 16{,}920$, which is 6% below 18,000, as the base requires ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: reads the coefficient as a yearly drop; the model's drop is 6% of the current population, not a fixed 18,000.\n* Choice C: shifts the start by one year; the model gives $16{,}920$ for 2016.\n* Choice D: reads 18,000 as where the population levels off; it is the starting value, and the population falls below it immediately.\n\n**Test Day Takeaway:** Evaluate the model at the input that means 'the start' — the coefficient is what remains when the power equals 1.",
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
    question: "The function $h(t) = -5t^{2} + 20t + 45$ gives the height, in meters, of a ball above the ground $t$ seconds after it is thrown upward from a balcony. What is the best interpretation of $45$ in this context?",
    choices: [
      { id: "A", text: "The ball was thrown from a height of $45$ meters above the ground." },
      // distractor: takes the constant term as the maximum height; the maximum is h(2) = 65 meters
      { id: "B", text: "The ball reaches a maximum height of $45$ meters above the ground." },
      // distractor: reads a height in meters as a time in seconds
      { id: "C", text: "The ball hits the ground $45$ seconds after it is thrown." },
      // distractor: reads the constant term as a rate of change in height
      { id: "D", text: "The height of the ball increases by $45$ meters each second." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Interpret Initial Value in Context**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $h(0) = 45$, so $45$ meters is the height of the ball when it is thrown, which is the height of the balcony.\n\n**The Full Solution:**\nStep 1: The ball is thrown at $t = 0$.\nStep 2: Substitute $0$ for $t$: $h(0) = -5(0)^{2} + 20(0) + 45 = 45$.\nStep 3: So the ball was thrown from a height of $45$ meters above the ground. Check: the maximum height is $h(2) = -20 + 40 + 45 = 65$ meters, so $45$ is the starting height, not the maximum ✓\n\n**Why the wrong answers are tempting:**\n* Choice B (maximum height of $45$ meters): the ball keeps rising after it is thrown; its maximum height is $h(2) = 65$ meters.\n* Choice C ($45$ seconds): $45$ is a height in meters, not a time.\n* Choice D (increases by $45$ meters each second): a constant term is not a rate of change.\n\n**Test Day Takeaway:** The constant term of a model is its value when the input is $0$; state it in the units of the output.",
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
    question: "The function $h(t) = a(0.5)^{t}$ gives the mass, in grams, of a radioactive substance in a sample $t$ hours after the sample was first measured, where $a$ is a constant. If $h(3) = 289$, which of the following is the best interpretation of $a$ in this context?",
    choices: [
      { id: "A", text: "The mass of the substance when the sample was first measured was 2,312 grams." },
      // distractor: multiplies by 0.5 cubed instead of dividing: 289(0.125) = 36.125
      { id: "B", text: "The mass of the substance when the sample was first measured was about 36 grams." },
      // distractor: attaches the starting value to t = 3 rather than t = 0
      { id: "C", text: "The mass of the substance 3 hours after the sample was first measured was 2,312 grams." },
      // distractor: reads the starting mass as the amount lost; the loss is 2,312 - 289 = 2,023 grams
      { id: "D", text: "The mass of the substance decreased by 2,312 grams during the first 3 hours." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Interpret Initial Value in Context**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** $a(0.5)^{3} = 289$ gives $\\frac{a}{8} = 289$, so $a = 2{,}312$, the mass at $t = 0$.\n\n**The Full Solution:**\nStep 1: The constant $a$ is the output at $t = 0$, since $(0.5)^{0} = 1$.\nStep 2: Substituting $t = 3$ gives $a(0.5)^{3} = a\\left(\\frac{1}{8}\\right) = 289$.\nStep 3: Multiplying by 8 gives $a = 2{,}312$ grams, the mass when the sample was first measured. Check: $2{,}312\\left(\\frac{1}{8}\\right) = 289$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B (about 36 grams): multiplies 289 by $\\frac{1}{8}$ instead of dividing, running the model forward.\n* Choice C: keeps the right number but attaches it to $t = 3$, where the mass is 289 grams.\n* Choice D: reports the starting mass as a loss; the loss over three hours is 2,023 grams.\n\n**Test Day Takeaway:** To recover a starting value from a later reading, divide by the growth factor raised to the elapsed time.",
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
    question: "The function $h(t) = -0.05(t - 30)^{2} + 45$ models the height, in meters, of a drone above the ground $t$ seconds after takeoff. The graph of $y = h(t)$ is shown. Which of the following is the best interpretation of the vertex of the graph in this context?",
    diagram: { type: "parabola", params: { vertex: { h: 30, k: 45 }, a: -0.05, xRange: [0, 60], yRange: [0, 50], xTickInterval: 10, yTickInterval: 10, gridInterval: 10, showVertex: false } },
    choices: [
      { id: "A", text: "The drone reaches its greatest height, $45$ meters, $30$ seconds after takeoff." },
      // distractor: swaps the two coordinates of the vertex
      { id: "B", text: "The drone reaches its greatest height, $30$ meters, $45$ seconds after takeoff." },
      // distractor: reads the maximum as the starting height
      { id: "C", text: "The drone's height was $45$ meters at takeoff." },
      // distractor: reads the maximum height as a time
      { id: "D", text: "The drone lands $45$ seconds after takeoff." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Interpret Vertex Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** The model is in vertex form, so the vertex is $(30, 45)$, and the negative leading coefficient makes it a maximum: $45$ meters at $t = 30$ seconds.\n\n**The Full Solution:**\nStep 1: In $h(t) = -0.05(t - 30)^{2} + 45$, the vertex of the graph is $(30, 45)$.\nStep 2: The leading coefficient $-0.05$ is negative, so the parabola opens downward and the vertex is the highest point.\nStep 3: The input $30$ is seconds after takeoff and the output $45$ is meters of height, so the drone peaks at $45$ meters, $30$ seconds after takeoff. Check: $h(0) = -0.05(900) + 45 = 0$, so the flight starts at ground level, and $h(60) = 0$ is the landing ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($30$ meters at $45$ seconds): reverses the vertex coordinates; the first coordinate is a time and the second is a height.\n* Choice C ($45$ meters at takeoff): takeoff is $t = 0$, where the height is $0$.\n* Choice D (lands after $45$ seconds): uses the height as a time; the model returns to $0$ at $t = 60$.\n\n**Test Day Takeaway:** Read the vertex as an ordered pair with units — the input gives the time, the output gives the extreme value — and let the sign of the leading coefficient decide maximum versus minimum.",
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
    question: "A bakery estimates its daily profit $P$, in dollars, from selling a cake at a price of $x$ dollars by the function $P(x) = -3(x - 24)^{2} + 1{,}900$. What is the best interpretation of $24$ in this context?",
    choices: [
      // distractor: reads the vertex's x-coordinate as the maximum output; the greatest profit is 1,900
      { id: "A", text: "The greatest estimated daily profit is \\$24." },
      { id: "B", text: "The price that gives the greatest estimated daily profit is \\$24." },
      // distractor: treats 24 as a rate of change, as if the model were linear
      { id: "C", text: "The estimated daily profit increases by \\$24 for each \\$1 increase in price." },
      // distractor: reads 24 as the value at x = 0; the model gives P(0) = 172
      { id: "D", text: "The estimated daily profit is \\$24 when the price is \\$0." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Interpret Vertex Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** In vertex form the number subtracted from $x$ is the input of the vertex; with a negative leading coefficient that vertex is a maximum, so a price of \\$24 gives the greatest profit.\n\n**The Full Solution:**\nStep 1: $P(x) = -3(x - 24)^{2} + 1{,}900$ has vertex $(24, 1{,}900)$.\nStep 2: Because $-3 < 0$, the parabola opens downward and the vertex is the highest point of the graph.\nStep 3: The input $x$ is the price, so $24$ is the price, in dollars, that gives the greatest estimated profit, \\$1,900. Check: $P(20) = -48 + 1{,}900 = 1{,}852$ and $P(25) = -3 + 1{,}900 = 1{,}897$, both less than $P(24) = 1{,}900$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: names 24 as the greatest profit; the greatest profit is the other vertex coordinate, 1,900.\n* Choice C: treats 24 as a slope, but the model is quadratic and 24 sits inside the squared term.\n* Choice D: reads 24 as the profit at a price of \\$0; $P(0) = -3(576) + 1{,}900 = 172$.\n\n**Test Day Takeaway:** In $a(x - h)^{2} + k$, $h$ is an input value and $k$ is an output value — match each to its units before reading the choices.",
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
    question: "The function $C(n) = 0.04(n - 45)^{2} + 7$ gives the shipping cost per package, in dollars, when a company ships $n$ packages in one order, where $n > 0$. Which of the following must be true?",
    choices: [
      { id: "A", text: "The shipping cost per package is the same when $40$ packages are shipped as when $50$ packages are shipped." },
      // distractor: reads only the left branch of the parabola
      { id: "B", text: "The shipping cost per package decreases as $n$ increases, for every $n > 0$." },
      // distractor: swaps the vertex coordinates, using the minimum cost 7 as the input
      { id: "C", text: "The least shipping cost per package occurs when $7$ packages are shipped." },
      // distractor: treats the constant 7 as the value at the smallest input; C(1) = 84.44
      { id: "D", text: "The shipping cost per package is \\$7 when $1$ package is shipped." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Interpret Vertex Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** $40$ and $50$ are each $5$ units from the vertex input $45$, and $(n - 45)^{2}$ depends only on that distance, so both give the same cost.\n\n**The Full Solution:**\nStep 1: The vertex of the graph of $C$ is $(45, 7)$, so the graph is symmetric about the line $n = 45$.\nStep 2: $40$ and $50$ are the same distance from $45$: $(40 - 45)^{2} = (50 - 45)^{2} = 25$.\nStep 3: Therefore $C(40) = 0.04(25) + 7 = 8$ and $C(50) = 0.04(25) + 7 = 8$ — equal, as choice A states ✓\n\n**Why the wrong answers are tempting:**\n* Choice B (always decreasing): true only for $n < 45$; past the vertex the cost rises again, reaching $C(90) = 88$.\n* Choice C (least cost at $7$ packages): reverses the vertex; the least cost, \\$7, occurs at $n = 45$, and $C(7) \\approx 64.76$.\n* Choice D (\\$7 for one package): $C(1) = 0.04(1{,}936) + 7 = 84.44$, nowhere near \\$7.\n\n**Test Day Takeaway:** Two inputs equidistant from $h$ always give the same output — symmetry answers \"must be true\" questions without heavy computation.",
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
    question: "A cable hangs between two poles. The height of the cable above the ground, in feet, at a distance of $x$ feet from the first pole is modeled by $y = 0.05(x - 30)^{2} + 14$, and the graph of this model is shown. Which of the following is the best interpretation of the vertex of the graph in this context?",
    diagram: { type: "parabola", params: { vertex: { h: 30, k: 14 }, a: 0.05, xRange: [0, 60], yRange: [0, 60], xTickInterval: 10, yTickInterval: 10, gridInterval: 10, showVertex: false } },
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
    explanation: "**SAT Pattern: Interpret Vertex Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The vertex is $(30, 14)$ and $0.05>0$, so the cable dips to its lowest height, $14$ feet, at a horizontal distance of $30$ feet.\n\n**The Full Solution:**\nStep 1: The equation is in vertex form $a(x - h)^2 + k$ with $h = 30$ and $k = 14$, so the vertex is $(30, 14)$.\nStep 2: The leading coefficient $0.05$ is positive, so the parabola opens upward and the vertex is the lowest point.\nStep 3: The input is a horizontal distance in feet and the output is a height in feet: the cable's lowest point is $14$ feet up, $30$ feet from the first pole. Check the attachment height: at $x = 0$, $y = 0.05(900) + 14 = 59$ feet. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($14$ feet at the pole): at the pole $x = 0$, where the model gives $59$ feet.\n* Choice B ($30$ feet high, $14$ feet along): reverses the coordinates of the vertex.\n* Choice D (poles $14$ feet apart): $14$ is a height; the graph shows the second pole at $x = 60$ feet.\n\n**Test Day Takeaway:** With a positive leading coefficient the vertex is a MINIMUM — for hanging cables, costs, and fuel use, that lowest point is usually what the question is after.",
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
    question: "The function $F(v) = 0.006(v - 55)^{2} + 9$ models a bus's fuel use, in gallons per $100$ miles, at a constant speed of $v$ miles per hour. At which of the following speeds, in miles per hour, does the model give the same fuel use as at $40$ miles per hour?",
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
    question: "An ant colony triples in size every $2$ weeks and now has $1{,}080$ ants. How many ants did it have $2$ weeks ago?",
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
    question: "The amount of material a town recycles increases by $25\\%$ each year. The town recycled $900$ tons this year. How many tons did it recycle last year?",
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
    question: "An investment's value increased by $20\\%$ each year for $2$ years, to \\$7,200. What was its value, in dollars, $2$ years ago?",
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
    question: "The table shows three values of $t$ and their corresponding values of $P(t)$, where $P(t) = k(2)^{t/5}$ and $k$ is a constant. What is the value of $k$?",
    diagram: { type: "table", params: { xHeader: "t", yHeader: "P(t)", rows: [["5", "24"], ["10", "48"], ["15", "96"]] } },
    correctAnswer: "12",
    explanation: "**SAT Pattern: Reverse Exponential Back in Time**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~30s):** $k = P(0)$, and $P$ doubles every $5$ units of $t$, so stepping back from $P(5) = 24$ gives $k = 12$.\n\n**The Full Solution:**\n\nStep 1: Substituting $t = 0$ gives $P(0) = k(2)^{0} = k$, so $k$ is the value of $P$ at $t = 0$.\n\nStep 2: The exponent $\\frac{t}{5}$ increases by $1$ each time $t$ increases by $5$, so each step of $5$ multiplies $P$ by $2$; the table confirms this with $24$, $48$, $96$.\n\nStep 3: Stepping back from $t = 5$ to $t = 0$ halves the value: $k = \\frac{24}{2} = 12$. Check: $P(15) = 12(2)^{3} = 12 \\cdot 8 = 96$, matching the last row ✓\n\n**Common Mistakes:**\n\n* Reading $k$ as the first value in the table, $24$, which is $P(5)$ and not $P(0)$.\n* Dividing $96$ by $3$ instead of by $2^{3} = 8$ gives $32$.\n\n**Test Day Takeaway:** In $k \\cdot b^{t/n}$ the constant $k$ is the value at $t = 0$; walk backward one full period at a time rather than dividing by the number of periods.",
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
    question: "The table shows the amount $A$, in grams, of a radioactive substance in a sample $t$ days after the sample was first measured. The amount decreases exponentially. Based on the table, how many grams of the substance were in the sample $3$ days before it was first measured?",
    diagram: { type: "dataTable", params: { headers: ["t (days)", "A (grams)"], rows: [["0", "320"], ["3", "160"], ["6", "80"], ["9", "40"]] } },
    choices: [
      // distractor: steps forward in time instead of backward, reporting the amount 3 days after the first measurement
      { id: "A", text: "$160$" },
      // distractor: extrapolates linearly, adding the first difference 320 - 160 = 160 to 320
      { id: "B", text: "$480$" },
      { id: "C", text: "$640$" },
      // distractor: steps back 6 days instead of 3, doubling twice to reach 1,280
      { id: "D", text: "$1{,}280$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Reverse Exponential Back in Time**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The amount halves every $3$ days, so going back $3$ days doubles it: $2 \\times 320 = 640$.\n\n**The Full Solution:**\n\nStep 1: Divide consecutive entries: $\\frac{160}{320} = \\frac{1}{2}$, $\\frac{80}{160} = \\frac{1}{2}$, and $\\frac{40}{80} = \\frac{1}{2}$, so each $3$-day step multiplies the amount by $\\frac{1}{2}$.\n\nStep 2: Moving backward in time reverses that step, multiplying by $2$.\n\nStep 3: Three days before the first measurement the amount was $320 \\times 2 = 640$ grams. Check: halving $640$ once gives $320$, the entry at $t = 0$ ✓\n\n**Why the wrong answers are tempting:**\n\n* Choice A ($160$): moves forward $3$ days instead of backward.\n* Choice B ($480$): treats the decrease as linear and adds the difference $160$ to $320$.\n* Choice D ($1{,}280$): goes back two steps, a total of $6$ days.\n\n**Test Day Takeaway:** Going backward through exponential data means dividing by the growth factor — here, multiplying by $2$ — exactly once per period.",
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
    question: "The number of users of a website increased exponentially from 2020 to 2022. The table shows the number of users $t$ years after 2020. If this pattern also held before 2020, how many users did the website have in 2018?",
    diagram: { type: "dataTable", params: { headers: ["t", "Number of users"], rows: [["0", "2,000"], ["1", "4,000"], ["2", "8,000"]] } },
    choices: [
      // distractor: steps back three years instead of two
      { id: "A", text: "$250$" },
      { id: "B", text: "$500$" },
      // distractor: steps back only one year
      { id: "C", text: "$1{,}000$" },
      // distractor: reads the t = 1 row, moving forward in time instead of back
      { id: "D", text: "$4{,}000$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Reverse Exponential Back in Time**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The number of users doubles each year, so two years back halves twice: $2{,}000 \\to 1{,}000 \\to 500$.\n\n**The Full Solution:**\nStep 1: From the table, $\\dfrac{4{,}000}{2{,}000} = 2$ and $\\dfrac{8{,}000}{4{,}000} = 2$, so the number of users doubles each year and $U(t) = 2{,}000(2)^{t}$.\nStep 2: The year 2018 is $t = -2$, so $U(-2) = 2{,}000(2)^{-2} = \\dfrac{2{,}000}{4}$.\nStep 3: $U(-2) = 500$ users. Check forward: $500 \\to 1{,}000 \\to 2{,}000$, matching the $t = 0$ row ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($250$): divides by $2$ three times, reaching 2017.\n* Choice C ($1{,}000$): divides by $2$ once, reaching 2019.\n* Choice D ($4{,}000$): reads the $t = 1$ row, moving forward in time.\n\n**Test Day Takeaway:** A year before the start is a negative input — divide by the growth factor once for each year before $t = 0$.",
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
    question: "A website's listings have increased by $50\\%$ every $2$ years. If there are $6{,}750$ listings now, how many were there $6$ years ago?",
    choices: [
      { id: "A", text: "$2{,}000$" },
      // distractor: adds the three 50% increases into a single 150% increase and divides by 2.5
      { id: "B", text: "$2{,}700$" },
      // distractor: undoes only two of the three growth periods
      { id: "C", text: "$3{,}000$" },
      // distractor: undoes only one growth period
      { id: "D", text: "$4{,}500$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Reverse Exponential Back in Time**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Six years hold three $2$-year periods, so divide by $1.5$ three times: $6{,}750 \\div 3.375 = 2{,}000$.\n\n**The Full Solution:**\nStep 1: A $50\\%$ increase multiplies by $1.5$, and $6 \\div 2 = 3$ periods have passed.\nStep 2: If $L$ is the count $6$ years ago, then $L(1.5)^3 = 6{,}750$, and $(1.5)^3 = 3.375$.\nStep 3: $L = \\dfrac{6{,}750}{3.375} = 2{,}000$ listings. Check forward: $2{,}000 \\to 3{,}000 \\to 4{,}500 \\to 6{,}750$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($2{,}700$): adds the three $50\\%$ increases into one $150\\%$ increase and divides by $2.5$; growth compounds, so the true factor is $3.375$, not $2.5$.\n* Choice C ($3{,}000$): divides by $1.5$ twice, reaching only $4$ years ago.\n* Choice D ($4{,}500$): divides by $1.5$ once, reaching $2$ years ago.\n\n**Test Day Takeaway:** When the growth period is not one year, convert the elapsed time into periods FIRST — here $6$ years is three periods, so the multiplier is $(1.5)^3$.",
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
    question: "The mass of a radioactive substance in a sample decreases by half every $12$ hours. The sample now contains $5$ grams of the substance. How many hours ago did the sample contain $320$ grams of the substance?",
    correctAnswer: "72",
    explanation: "**SAT Pattern: Reverse Exponential Back in Time**\n\n**The correct answer is $72$.**\n\n**The Fast Way (~30s):** $320 \\div 5 = 64 = 2^{6}$, so six half-lives have passed: $6 \\cdot 12 = 72$ hours.\n\n**The Full Solution:**\nStep 1: Each $12$-hour period divides the mass by $2$, so the number of periods $n$ satisfies $320\\left(\\frac{1}{2}\\right)^{n} = 5$.\nStep 2: Rearranging gives $2^{n} = \\dfrac{320}{5} = 64$, so $n = 6$.\nStep 3: Six periods of $12$ hours each is $6 \\cdot 12 = 72$ hours. Check: $320 \\to 160 \\to 80 \\to 40 \\to 20 \\to 10 \\to 5$, six halvings ✓\n\n**Common Mistakes:** Answering $6$, the number of halvings, without multiplying by the $12$-hour period. Answering $64$, the factor by which the mass fell, as if it were a time.\n\n**Test Day Takeaway:** Turn the ratio into a power of the decay factor, read the exponent as a COUNT of periods, then multiply by the length of one period.",
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
    question: "$f(x) = 2x$\nThe graph of $y = f(x) + k$, where $k$ is a constant, is shown. Which equation represents this graph?",
    diagram: { type: "linearGraph", params: { slope: 2, yIntercept: -6, xRange: [0, 10], yRange: [-8, 14], xTickInterval: 2, yTickInterval: 4, gridInterval: 2, showPoints: [[0, -6], [3, 0]] } },
    choices: [
      // distractor: shifts the input instead of the output, giving the line y = 2x - 12
      { id: "A", text: "$y=2(x-6)$" },
      // distractor: negates the slope as well as the constant
      { id: "B", text: "$y=6-2x$" },
      // distractor: shifts the parent line up 6 instead of down 6
      { id: "C", text: "$y=2x+6$" },
      { id: "D", text: "$y=2x-6$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Function from Shifted Graph**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Adding $k$ to $f(x) = 2x$ only moves the line up or down; the graph crosses the $y$-axis at $-6$, so $k = -6$ and the line is $y = 2x - 6$.\n\n**The Full Solution:**\nStep 1: The graph of $y = f(x) + k$ is the graph of $y = 2x$ translated $k$ units vertically, so the slope stays 2.\nStep 2: The line $y = 2x$ passes through the origin, while the graphed line has a $y$-intercept of $-6$, so $k = -6$.\nStep 3: The equation is $y = 2x - 6$. Check: at $x = 3$ the equation gives $0$, and the graph crosses the $x$-axis at $x = 3$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = 2(x - 6)$): subtracts 6 from the input, which puts the $y$-intercept at $-12$.\n* Choice B ($y = 6 - 2x$): reverses the slope, giving a line that falls instead of rises.\n* Choice C ($y = 2x + 6$): translates up 6 rather than down 6.\n\n**Test Day Takeaway:** Adding a constant to a function moves its graph vertically only — read the new $y$-intercept to get the constant.",
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
    question: "The graph of $y = (x - h)^{2} + k$, where $h$ and $k$ are constants, is shown. Which of the following equations represents the graph?",
    diagram: { type: "quadraticVertex", params: { vertex: [3, -4], a: 1, showPoints: [[1, 0], [5, 0]], showVertex: true } },
    choices: [
      { id: "A", text: "$y=(x-3)^{2}-4$" },
      // distractor: reads the vertex's x-coordinate as -3, putting the vertex at (-3, -4)
      { id: "B", text: "$y=(x+3)^{2}-4$" },
      // distractor: reads the vertex's y-coordinate as +4 instead of -4
      { id: "C", text: "$y=(x-3)^{2}+4$" },
      // distractor: swaps h and k, placing the vertex at (4, -3)
      { id: "D", text: "$y=(x-4)^{2}-3$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Function from Shifted Graph**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The vertex is at $(3, -4)$, so $h = 3$ and $k = -4$, giving $y = (x - 3)^{2} - 4$.\n\n**The Full Solution:**\nStep 1: In $y = (x - h)^{2} + k$ the vertex is $(h, k)$, the point where the curve turns.\nStep 2: The graph turns at $(3, -4)$, so $h = 3$ and $k = -4$.\nStep 3: Substituting gives $y = (x - 3)^{2} - 4$. Check: at $x = 1$ this gives $4 - 4 = 0$, matching the marked point $(1, 0)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($y = (x + 3)^{2} - 4$): flips the sign inside the parentheses, moving the vertex to $x = -3$.\n* Choice C ($y = (x - 3)^{2} + 4$): flips the sign of the vertical shift, putting the vertex above the $x$-axis.\n* Choice D ($y = (x - 4)^{2} - 3$): swaps the two constants, placing the vertex at $(4, -3)$.\n\n**Test Day Takeaway:** In vertex form the number subtracted from $x$ is the vertex's $x$-coordinate — the sign you see is the opposite of the shift.",
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
    question: "$g(x) = f(x - 6)$\nThe graph of $y = g(x)$ has a minimum at $(10, -3)$. For what value of $x$ does the graph of $y = f(x)$ have a minimum?",
    choices: [
      // distractor: reports the y-coordinate of the minimum instead of the x-coordinate
      { id: "A", text: "$-3$" },
      { id: "B", text: "$4$" },
      // distractor: reports where g has its minimum, ignoring the shift
      { id: "C", text: "$10$" },
      // distractor: reads x - 6 as a shift left, adding 6 to 10 instead of subtracting
      { id: "D", text: "$16$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Function from Shifted Graph**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $g(x) = f(x - 6)$ is the graph of $f$ shifted 6 units right, so the minimum of $f$ is 6 units left of $x = 10$: $10 - 6 = 4$.\n\n**The Full Solution:**\nStep 1: Since $g(x) = f(x - 6)$, the value of $g$ at any input equals the value of $f$ at an input 6 less.\nStep 2: The graph of $g$ has its minimum at $x = 10$, where $g(10) = f(10 - 6) = f(4) = -3$.\nStep 3: So the minimum of $f$ occurs at $x = 4$. Check: shifting $(4, -3)$ six units right lands on $(10, -3)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): gives the minimum value, the $y$-coordinate, instead of the $x$-coordinate.\n* Choice C ($10$): reports where $g$ has its minimum, ignoring the shift.\n* Choice D ($16$): reads $x - 6$ as a shift left, moving 6 units right of 10 instead of left.\n\n**Test Day Takeaway:** In $g(x) = f(x - h)$ the graph of $g$ sits $h$ units right of the graph of $f$ — to go from $g$ back to $f$, subtract $h$ from the $x$-coordinate.",
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
    question: "In the $xy$-plane, the graph of $y = g(x)$ is the result of translating the graph of $y = f(x)$ to the right $3$ units. Which equation defines $g$?",
    choices: [
      // distractor: moves the graph up 3 units instead of right
      { id: "A", text: "$g(x) = f(x) + 3$" },
      // distractor: moves the graph down 3 units, a vertical change rather than a horizontal one
      { id: "B", text: "$g(x) = f(x) - 3$" },
      // distractor: moves the graph left 3 units instead of right
      { id: "C", text: "$g(x) = f(x + 3)$" },
      { id: "D", text: "$g(x) = f(x - 3)$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Function from Shifted Graph**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** A shift right of 3 replaces $x$ with $x - 3$ inside the function: $g(x) = f(x - 3)$.\n\n**The Full Solution:**\nStep 1: Translating right 3 units sends each point $(p, q)$ on the graph of $f$ to $(p + 3, q)$, so $g(p + 3) = f(p)$.\nStep 2: Writing $x = p + 3$ gives $p = x - 3$, so $g(x) = f(x - 3)$.\nStep 3: The equation is $g(x) = f(x - 3)$. Check: if $f$ has its minimum at $x = 2$, then $g(5) = f(2)$, so the minimum of $g$ is at $x = 5$, three units to the right ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($g(x) = f(x) + 3$): adds 3 to every output, which moves the graph up.\n* Choice B ($g(x) = f(x) - 3$): moves the graph down 3 units.\n* Choice C ($g(x) = f(x + 3)$): follows the sign of the direction word; adding inside the function moves the graph left.\n\n**Test Day Takeaway:** A shift right subtracts inside the function, and a shift left adds — the sign is the opposite of the direction.",
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
    question: "$g(x) = f(x) + 5$\nFor the function $f$ whose graph is shown, which equation defines $g$?",
    diagram: { type: "absoluteValue", params: { vertex: [2, -3], slope: 1, showPoints: [[-1, 0], [5, 0]] } },
    choices: [
      // distractor: flips the sign inside the absolute value, moving the vertex to x = -2
      { id: "A", text: "$g(x)=|x+2|+2$" },
      { id: "B", text: "$g(x)=|x-2|+2$" },
      // distractor: subtracts 5 from f instead of adding it, giving a vertex at (2, -8)
      { id: "C", text: "$g(x)=|x-2|-8$" },
      // distractor: applies the 5 to the input instead of the output: f(x + 5) = |x + 3| - 3
      { id: "D", text: "$g(x)=|x+3|-3$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Function from Shifted Graph**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The drawn graph is $f(x)=|x-2|-3$, so adding 5 raises the vertex to $(2,2)$: $g(x)=|x-2|+2$.\n\n**The Full Solution:**\nStep 1: The graph has a V with its corner at $(2,-3)$ and arms of slope $\\pm 1$, so $f(x)=|x-2|-3$.\nStep 2: Adding 5 to every output raises the whole graph 5 units: $g(x)=|x-2|-3+5$.\nStep 3: Simplifying gives $g(x)=|x-2|+2$. Check: $f(5)=0$ from the graph, and $g(5)=3=0+5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($g(x)=|x+2|+2$): reads the corner at $x=-2$, reversing the sign inside the bars.\n* Choice C ($g(x)=|x-2|-8$): subtracts 5 instead of adding it.\n* Choice D ($g(x)=|x+3|-3$): adds the 5 inside the function, computing $f(x+5)$ instead of $f(x)+5$.\n\n**Test Day Takeaway:** Adding a constant to a function moves the whole graph up; the horizontal position of the corner does not change.",
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
    question: "$g(x) = f(x - 4) + 7$\nThe functions $f$ and $g$ satisfy the given equation for all values of $x$. If $f(10) = 23$, what is the value of $g(14)$?",
    correctAnswer: "30",
    explanation: "**SAT Pattern: Function from Shifted Graph**\n\n**The correct answer is $30$.**\n\n**The Fast Way (~20s):** $g(14) = f(14 - 4) + 7 = f(10) + 7 = 23 + 7 = 30$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 14$ into the given equation: $g(14) = f(14 - 4) + 7 = f(10) + 7$.\nStep 2: The value $f(10) = 23$ is given.\nStep 3: Add the constant: $g(14) = 23 + 7 = 30$. Check: the graph of $g$ is the graph of $f$ moved 4 right and 7 up, so the point $(10, 23)$ on $f$ moves to $(14, 30)$ on $g$ ✓\n\n**Common Mistakes:** Adding 4 to the input gives $f(18) + 7$, a value the problem never supplies. Dropping the constant gives 23. Subtracting the 7 instead of adding it gives 16.\n\n**Test Day Takeaway:** In $f(x - h) + k$ the shift $h$ acts on the input before the function runs, and $k$ acts on the output afterward.",
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
    question: "The graph of $y = f(x)$ is shown. If $g(x) = f(x + 4) + 1$, which of the following equations defines $g$?",
    diagram: { type: "absoluteValue", params: { vertex: [2, -3], slope: 1 } },
    choices: [
      // distractor: reads x + 4 as a shift right instead of left
      { id: "A", text: "$g(x) = |x - 6| - 2$" },
      // distractor: subtracts 1 from the output instead of adding it
      { id: "B", text: "$g(x) = |x + 2| - 4$" },
      { id: "C", text: "$g(x) = |x + 2| - 2$" },
      // distractor: copies x + 4 inside the bars instead of combining it with the -2 already there
      { id: "D", text: "$g(x) = |x + 4| - 2$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Function from Shifted Graph**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** The graph gives $f(x) = |x - 2| - 3$; the rule moves the vertex $(2, -3)$ left 4 and up 1 to $(-2, -2)$, so $g(x) = |x + 2| - 2$.\n\n**The Full Solution:**\nStep 1: The graph is a V with vertex $(2, -3)$ and sides of slope $1$ and $-1$, so $f(x) = |x - 2| - 3$.\nStep 2: Replace $x$ with $x + 4$: $f(x + 4) = |x + 4 - 2| - 3 = |x + 2| - 3$.\nStep 3: Add $1$: $g(x) = |x + 2| - 3 + 1 = |x + 2| - 2$. Check the vertex: $g(-2) = 0 - 2 = -2$, and $(-2, -2)$ is $(2, -3)$ moved left $4$ and up $1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($|x - 6| - 2$): vertex $(6, -2)$ — reads $x + 4$ as a shift right.\n* Choice B ($|x + 2| - 4$): vertex $(-2, -4)$ — subtracts the 1 instead of adding it.\n* Choice D ($|x + 4| - 2$): vertex $(-4, -2)$ — copies $x + 4$ into the bars instead of combining it with the $-2$ already there.\n\n**Test Day Takeaway:** Write $f$ from the graph first, then substitute — combining $x + 4$ with the existing $-2$ is what turns $|x - 2|$ into $|x + 2|$.",
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
    question: "$g(x) = f(x + 7) - 4$\nThe functions $f$ and $g$ are defined for all real numbers and satisfy the given equation. The maximum value of $f$ is $M$, which occurs at $x = a$. Which of the following must be true?",
    choices: [
      // distractor: shifts the input right instead of left, reading x + 7 as a delay
      { id: "A", text: "The maximum value of $g$ is $M - 4$, which occurs at $x = a + 7$." },
      // distractor: applies the horizontal shift but ignores the 4 subtracted from every output
      { id: "B", text: "The maximum value of $g$ is $M$, which occurs at $x = a - 7$." },
      { id: "C", text: "The maximum value of $g$ is $M - 4$, which occurs at $x = a - 7$." },
      // distractor: subtracts both 7 and 4 from the maximum value, treating the horizontal shift as vertical
      { id: "D", text: "The maximum value of $g$ is $M - 11$, which occurs at $x = a - 7$." }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Function from Shifted Graph**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** $g$ reaches its maximum when its inner input equals $a$, so $x+7=a$ and $x=a-7$; the output there is $M-4$.\n\n**The Full Solution:**\nStep 1: The outputs of $g$ are outputs of $f$ lowered by 4, so the maximum value of $g$ is $M-4$.\nStep 2: That maximum value occurs where $f$ is evaluated at $a$, that is, where $x+7=a$.\nStep 3: Solving gives $x=a-7$, so the maximum of $g$ is $M-4$ at $x=a-7$. Check: with $f(x)=-x^{2}$, $M=0$ at $a=0$, and $g(x)=-(x+7)^{2}-4$ peaks at $-4$ when $x=-7$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: reads $x+7$ as a shift to the right; adding inside the function moves the graph left.\n* Choice B: tracks the horizontal shift but leaves the maximum value unchanged.\n* Choice D: subtracts the horizontal shift from the maximum value as well, giving $M-11$.\n\n**Test Day Takeaway:** Inside the function, changes move the graph horizontally and in the opposite direction; outside, they move it vertically in the direction written.",
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
    question: "$y = 2x + 3$\n$y = x^{2} + 6x + c$\nIn the $xy$-plane, the graphs of the given equations, where $c$ is a constant, intersect at exactly one point, $(x, y)$. What is the value of $y$?",
    correctAnswer: "-1",
    explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**The correct answer is $-1$.**\n\n**The Fast Way (~30s):** Equating gives $x^{2} + 4x + (c - 3) = 0$, whose double root is $x = -\\frac{4}{2} = -2$; substituting into $y = 2x + 3$ gives $y = -1$.\n\n**The Full Solution:**\nStep 1: Set $x^{2} + 6x + c = 2x + 3$, which rearranges to $x^{2} + 4x + (c - 3) = 0$.\nStep 2: Exactly one intersection point means this quadratic has a double root, located at $x = -\\frac{4}{2(1)} = -2$.\nStep 3: Put $x = -2$ into the line: $y = 2(-2) + 3 = -1$. Check: a double root at $-2$ makes the quadratic $(x + 2)^{2} = x^{2} + 4x + 4$, so $c - 3 = 4$ and $c = 7$; then $y = 4 - 12 + 7 = -1$ on the parabola as well ✓\n\n**Common Mistakes:**\n* $-2$: reports the $x$-coordinate of the intersection point instead of the $y$-coordinate.\n* $7$: reports the value of $c$.\n* $3$: reports the $y$-intercept of the line.\n\n**Test Day Takeaway:** Find the tangency input from $-\\frac{b}{2a}$ of the difference quadratic, then read the output off the line — it is the easier of the two equations.",
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
    question: "The graph of the quadratic function $f$ is shown. The line $y = 2x - 7$ intersects the graph of $y = f(x)$ at exactly one point. What is the $x$-coordinate of this point?",
    diagram: { type: "parabola", params: { vertex: { h: 1, k: -4 }, a: 1, xRange: [-6, 8], yRange: [-6, 10], showVertex: false, highlightPoints: [[-1, 0], [1, -4], [3, 0]], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, label: "y = f(x)" } },
    choices: [
      // distractor: reports the y-intercept of the parabola
      { id: "A", text: "$-3$" },
      // distractor: reports the axis of symmetry of f
      { id: "B", text: "$1$" },
      { id: "C", text: "$2$" },
      // distractor: uses -b instead of -b/(2a) in x^2 - 4x + 4 = 0
      { id: "D", text: "$4$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The graph is $f(x) = (x - 1)^{2} - 4 = x^{2} - 2x - 3$; setting it equal to $2x - 7$ gives $(x - 2)^{2} = 0$, so $x = 2$.\n\n**The Full Solution:**\nStep 1: Read the vertex $(1, -4)$ and the $x$-intercepts $-1$ and $3$ from the graph, so $f(x) = (x - 1)^{2} - 4 = x^{2} - 2x - 3$.\nStep 2: Set $x^{2} - 2x - 3 = 2x - 7$, which rearranges to $x^{2} - 4x + 4 = 0$.\nStep 3: Factor: $(x - 2)^{2} = 0$, so $x = 2$. Check: $f(2) = 4 - 4 - 3 = -3$ and $2(2) - 7 = -3$, the same point ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): reports the parabola's $y$-intercept instead of an $x$-coordinate.\n* Choice B ($1$): reports the $x$-coordinate of the vertex of $f$, not the root of the difference quadratic.\n* Choice D ($4$): uses $-b = 4$ instead of $-\\frac{b}{2a} = 2$ in $x^{2} - 4x + 4 = 0$.\n\n**Test Day Takeaway:** The contact point belongs to the difference quadratic, whose axis of symmetry is generally not the original parabola's.",
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
    question: "$y = ax^{2} + 2x + 3$\n$y = 10x - 1$\nIn the given system, $a$ is a nonzero constant. If the system has exactly one real solution, what is the value of $a$?",
    choices: [
      // distractor: solves 64 + 16a = 0 after mis-signing the constant term
      { id: "A", text: "$-4$" },
      { id: "B", text: "$4$" },
      // distractor: computes the constant term as 3 - 1 = 2, giving 64 - 8a = 0
      { id: "C", text: "$8$" },
      // distractor: uses ac instead of 4ac, solving 64 = 4a
      { id: "D", text: "$16$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** Equating gives $ax^{2} - 8x + 4 = 0$; exactly one solution forces $64 - 16a = 0$, so $a = 4$.\n\n**The Full Solution:**\nStep 1: Set $ax^{2} + 2x + 3 = 10x - 1$, which rearranges to $ax^{2} - 8x + 4 = 0$ since $3 - (-1) = 4$.\nStep 2: Exactly one real solution means the discriminant is $0$: $(-8)^{2} - 4(a)(4) = 0$, or $64 - 16a = 0$.\nStep 3: Solve: $a = 4$. Check: $4x^{2} - 8x + 4 = 4(x - 1)^{2} = 0$ has the single solution $x = 1$, where both equations give $y = 9$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): mis-signs the constant term and solves $64 + 16a = 0$.\n* Choice C ($8$): computes the constant as $3 - 1 = 2$, producing $64 - 8a = 0$.\n* Choice D ($16$): uses $ac$ in place of $4ac$, solving $64 = 4a$.\n\n**Test Day Takeaway:** Subtracting a line changes only the linear and constant terms — recheck the constant's sign before applying $b^{2} - 4ac = 0$.",
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
    question: "$y = x^{2} - 4x + 7$\n$y = kx + 3$\nIn the given system of equations, $k$ is a constant. For exactly two values of $k$, the system has exactly one real solution. What is the sum of the two values of $k$?",
    correctAnswer: "-8",
    explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**The correct answer is $-8$.**\n\n**The Fast Way (~40s):** Equating gives $x^{2} - (4 + k)x + 4 = 0$, so $(4 + k)^{2} = 16$ and $k = 0$ or $k = -8$; the sum is $-8$.\n\n**The Full Solution:**\nStep 1: Set $x^{2} - 4x + 7 = kx + 3$, which rearranges to $x^{2} - (4 + k)x + 4 = 0$.\nStep 2: Exactly one solution means $(4 + k)^{2} - 4(1)(4) = 0$, so $(4 + k)^{2} = 16$ and $4 + k = \\pm 4$.\nStep 3: That gives $k = 0$ and $k = -8$, whose sum is $-8$. Check: $k = 0$ makes $x^{2} - 4x + 4 = (x - 2)^{2} = 0$, and $k = -8$ makes $x^{2} + 4x + 4 = (x + 2)^{2} = 0$ — both single solutions ✓\n\n**Common Mistakes:**\n* $0$: finds $k = 0$ first and reports it, missing the second value.\n* $8$: solves $4 + k = \\pm 4$ but reads the roots as $0$ and $8$.\n* $-4$: sets $(4 + k)^{2} = 0$ rather than $(4 + k)^{2} = 16$.\n\n**Test Day Takeaway:** \"Exactly two values of the constant\" signals that the discriminant equation is itself a square — expect a $\\pm$ and answer for both.",
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
    question: "$g(x) = f(x) + 6$\nThe function $g$ is defined by the given equation, and selected values of $f(x)$ are shown in the table. What is the value of $g(2)$?",
    diagram: { type: "dataTable", params: { headers: ["x", "f(x)"], rows: [["0", "7"], ["1", "3"], ["2", "-2"], ["3", "6"]] } },
    choices: [
      // distractor: subtracts 6 instead of adding it
      { id: "A", text: "$-8$" },
      // distractor: reports f(2) without applying the shift
      { id: "B", text: "$-2$" },
      { id: "C", text: "$4$" },
      // distractor: applies the shift to the x = 0 row instead of the x = 2 row
      { id: "D", text: "$13$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Vertical Shift**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The table gives $f(2)=-2$, so $g(2)=-2+6=4$.\n\n**The Full Solution:**\nStep 1: Find the row with $x=2$ in the table: $f(2)=-2$.\nStep 2: Apply the rule $g(x)=f(x)+6$ at $x=2$: $g(2)=f(2)+6$.\nStep 3: Compute: $-2+6=4$. Check: every output rises by $6$, so the four values of $g$ are $13$, $9$, $4$, and $12$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-8$): subtracts $6$ instead of adding it.\n* Choice B ($-2$): reports $f(2)$ and never applies the shift.\n* Choice D ($13$): applies the shift to the $x=0$ row instead of the $x=2$ row.\n\n**Test Day Takeaway:** Adding a constant outside the function changes only the outputs — locate the right row first, then shift.",
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
    question: "The function $f$ gives the temperature, in degrees Fahrenheit, inside a house $t$ hours after midnight. At every time $t$, the function $g$ gives a temperature $3$ degrees higher than $f$. Which equation defines $g$?",
    choices: [
      // distractor: multiplies each temperature by 3 rather than adding 3
      { id: "A", text: "$g(t)=3f(t)$" },
      // distractor: lowers each temperature by 3 instead of raising it
      { id: "B", text: "$g(t)=f(t)-3$" },
      // distractor: shifts the time by 3 hours instead of the temperature
      { id: "C", text: "$g(t)=f(t+3)$" },
      { id: "D", text: "$g(t)=f(t)+3$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Vertical Shift**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Raising every output by $3$ adds $3$ outside the function: $g(t)=f(t)+3$.\n\n**The Full Solution:**\nStep 1: The outputs of $f$ are temperatures; $g$ raises each of those outputs by $3$ degrees and leaves the times unchanged.\nStep 2: Adding a constant outside the function raises every output by that constant.\nStep 3: So $g(t)=f(t)+3$. Check: if the temperature at $t=6$ was $68$, the new one is $71=f(6)+3$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($g(t)=3f(t)$): multiplies each temperature by $3$ instead of adding $3$.\n* Choice B ($g(t)=f(t)-3$): lowers each temperature by $3$.\n* Choice C ($g(t)=f(t+3)$): shifts the clock by $3$ hours instead of changing the temperature.\n\n**Test Day Takeaway:** Changes to outputs live outside the parentheses; changes to inputs live inside them.",
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
    question: "The table shows four values of $x$ and their corresponding values of $f(x)$. The function $h$ is defined by $h(x) = f(x) + k$, where $k$ is a constant. If $h(2) = -6$, what is the value of $h(4)$?",
    diagram: { type: "dataTable", params: { headers: ["x", "f(x)"], rows: [["1", "9"], ["2", "1"], ["3", "-3"], ["4", "5"]] } },
    choices: [
      // distractor: applies the shift to f(3) = -3 instead of f(4) = 5
      { id: "A", text: "$-10$" },
      { id: "B", text: "$-2$" },
      // distractor: takes k = -6 straight from h(2) = -6 without subtracting f(2) = 1
      { id: "C", text: "$-1$" },
      // distractor: reports f(4) without applying the shift
      { id: "D", text: "$5$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Vertical Shift**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** From the table $f(2) = 1$, so $1 + k = -6$ and $k = -7$; then $h(4) = f(4) - 7 = 5 - 7 = -2$.\n\n**The Full Solution:**\nStep 1: The table shows $f(2) = 1$. Since $h(2) = f(2) + k$, the given value gives $1 + k = -6$.\nStep 2: Subtract $1$ from both sides: $k = -7$.\nStep 3: The table shows $f(4) = 5$, so $h(4) = f(4) + k = 5 + (-7) = -2$. Check: $h(2) = 1 + (-7) = -6$, which matches the given value ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-10$): applies the shift to $f(3) = -3$ instead of $f(4) = 5$, giving $-3 - 7 = -10$.\n* Choice C ($-1$): takes $k = -6$ directly from $h(2) = -6$ without subtracting $f(2) = 1$, giving $5 - 6 = -1$.\n* Choice D ($5$): reports $f(4)$ from the table without adding $k$.\n\n**Test Day Takeaway:** One known output of $h$ pins down the constant $k$; after that, every output of $h$ is the matching output of $f$ moved by the same $k$.",
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
    question: "$f(x) = x^{2} - 6x + 2$\nThe function $g$ is defined by $g(x) = f(x) + k$, where $k$ is a constant. The minimum value of $g(x)$ is $5$. What is the value of $k$?",
    correctAnswer: "12",
    explanation: "**SAT Pattern: Vertical Shift**\n\n**The correct answer is 12.**\n\n**The Fast Way (~30s):** The minimum of $f$ is $f(3) = 9 - 18 + 2 = -7$, and adding $k$ moves it to $-7 + k = 5$, so $k = 12$.\n\n**The Full Solution:**\nStep 1: The vertex of the graph of $y = f(x)$ has $x$-coordinate $-\\frac{-6}{2(1)} = 3$, so the minimum value of $f(x)$ is $f(3) = 9 - 18 + 2 = -7$.\nStep 2: Adding $k$ raises every output by $k$, so the minimum value of $g(x)$ is $-7 + k$.\nStep 3: Set $-7 + k = 5$, so $k = 12$. Check: $g(x) = x^{2} - 6x + 14$ gives $g(3) = 9 - 18 + 14 = 5$ ✓\n\n**Common Mistakes:**\n* $3$: treats the constant term $2$ as the minimum value of $f(x)$, solving $2 + k = 5$.\n* $-2$: drops the sign of the minimum, solving $7 + k = 5$.\n* $-12$: subtracts in the wrong order, computing $-7 - 5$.\n\n**Test Day Takeaway:** Find the original minimum first; a vertical shift moves the minimum by exactly the constant that is added.",
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
    question: "$q(x) = x^{3} - 2x$\nIn the $xy$-plane, the graph of $y = h(x)$ is the result of shifting the graph of $y = q(x)$ down $8$ units. Which equation defines $h$?",
    choices: [
      // distractor: shifts the graph 8 units left by replacing x with x + 8
      { id: "A", text: "$h(x) = (x + 8)^{3} - 2(x + 8)$" },
      // distractor: shifts the graph 8 units right by replacing x with x - 8
      { id: "B", text: "$h(x) = (x - 8)^{3} - 2(x - 8)$" },
      { id: "C", text: "$h(x) = x^{3} - 2x - 8$" },
      // distractor: adds 8 to the output, which shifts the graph up
      { id: "D", text: "$h(x) = x^{3} - 2x + 8$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Vertical Shift**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Shifting down $8$ units subtracts $8$ from every output: $h(x) = q(x) - 8 = x^{3} - 2x - 8$.\n\n**The Full Solution:**\nStep 1: A vertical shift changes outputs, not inputs, so $h(x) = q(x) + c$ for some constant $c$.\nStep 2: Moving the graph down $8$ units means $c = -8$, so $h(x) = q(x) - 8$.\nStep 3: Substitute $q(x)$: $h(x) = x^{3} - 2x - 8$. Check: $q(2) = 8 - 4 = 4$ and $h(2) = 8 - 4 - 8 = -4$, which is $8$ units lower ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: replaces $x$ with $x + 8$, which shifts the graph $8$ units to the left.\n* Choice B: replaces $x$ with $x - 8$, which shifts the graph $8$ units to the right.\n* Choice D: adds $8$ to the output, which shifts the graph up instead of down.\n\n**Test Day Takeaway:** A change outside the function moves the graph up or down; a change inside, next to $x$, moves it left or right.",
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
    question: "The graph of $y = C(x)$ in the $xy$-plane passes through the point $(6, 41)$. The function $D$ is defined by $D(x) = C(x) - 15$. Which point lies on the graph of $y = D(x)$?",
    choices: [
      // distractor: subtracts 15 from the x-coordinate instead of the y-coordinate
      { id: "A", text: "$(-9, 41)$" },
      { id: "B", text: "$(6, 26)$" },
      // distractor: adds 15 to the y-coordinate, shifting the point up
      { id: "C", text: "$(6, 56)$" },
      // distractor: adds 15 to the x-coordinate, treating the change as a horizontal shift
      { id: "D", text: "$(21, 41)$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Vertical Shift**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $D(6) = C(6) - 15 = 41 - 15 = 26$, so the point $(6, 26)$ lies on the graph of $y = D(x)$.\n\n**The Full Solution:**\nStep 1: Since $(6, 41)$ is on the graph of $y = C(x)$, $C(6) = 41$.\nStep 2: Evaluate $D$ at the same input: $D(6) = C(6) - 15 = 41 - 15 = 26$.\nStep 3: So the graph of $y = D(x)$ passes through $(6, 26)$. Check: subtracting $15$ from every output moves each point straight down $15$ units, and $(6, 41)$ moves to $(6, 26)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-9, 41)$): subtracts $15$ from the $x$-coordinate instead of the $y$-coordinate.\n* Choice C ($(6, 56)$): adds $15$ to the $y$-coordinate, which would be the graph of $y = C(x) + 15$.\n* Choice D ($(21, 41)$): moves the point horizontally, as if $D(x) = C(x - 15)$.\n\n**Test Day Takeaway:** Subtracting a constant from the output keeps the $x$-coordinate and lowers the $y$-coordinate by that constant.",
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
    question: "The graph of $y = f(x)$ is shown. The function $g$ is defined by $g(x) = f(x) + c$, where $c$ is a constant. The graph of $y = g(x)$ has no $x$-intercepts. Which of the following could be the value of $c$?",
    diagram: { type: "quadraticVertex", params: { vertex: [-2, -4], a: 1, showVertex: true, showPoints: [[-4, 0], [0, 0]] } },
    choices: [
      // distractor: shifts the parabola down, which keeps two x-intercepts
      { id: "A", text: "$-6$" },
      // distractor: shifts up by less than 4, so the vertex is still below the x-axis
      { id: "B", text: "$2$" },
      // distractor: moves the vertex onto the x-axis, which leaves exactly one x-intercept
      { id: "C", text: "$4$" },
      { id: "D", text: "$6$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Vertical Shift**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** The vertex of the graph is $(-2, -4)$, so the minimum of $g(x)$ is $-4 + c$; no $x$-intercepts requires $-4 + c > 0$, or $c > 4$, and only $6$ works.\n\n**The Full Solution:**\nStep 1: The parabola opens upward with vertex $(-2, -4)$, so the minimum value of $f(x)$ is $-4$.\nStep 2: Adding $c$ raises every output by $c$, so the minimum value of $g(x)$ is $-4 + c$. The graph of $y = g(x)$ misses the $x$-axis exactly when this minimum is positive: $-4 + c > 0$, so $c > 4$.\nStep 3: Of the choices, only $c = 6$ is greater than $4$. Check: with $c = 6$ the vertex moves to $(-2, 2)$, above the $x$-axis, and the parabola opens upward, so it never reaches $y = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): shifts the parabola down, which moves the vertex to $(-2, -10)$ and keeps two $x$-intercepts.\n* Choice B ($2$): moves the vertex to $(-2, -2)$, still below the $x$-axis, so the graph still crosses it twice.\n* Choice C ($4$): moves the vertex to $(-2, 0)$, onto the $x$-axis, so the graph has exactly one $x$-intercept, not none.\n\n**Test Day Takeaway:** Track the vertex: an upward-opening parabola has no $x$-intercepts only when its vertex is strictly above the $x$-axis.",
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
    question: "$q(x) = p(x) + n$\nIn the given equation, $n$ is a constant. The minimum value of $p(x)$ is $-4$, and the minimum value of $q(x)$ is $9$. If $p(5) = 12$, what is the value of $q(5)$?",
    correctAnswer: "25",
    explanation: "**SAT Pattern: Vertical Shift**\n\n**The correct answer is 25.**\n\n**The Fast Way (~30s):** The minimum rises from $-4$ to $9$, so $n = 13$, and $q(5) = p(5) + 13 = 25$.\n\n**The Full Solution:**\nStep 1: Adding $n$ raises every output of $p$ by $n$, including the minimum, so $-4 + n = 9$.\nStep 2: Solve: $n = 13$.\nStep 3: Then $q(5) = p(5) + n = 12 + 13 = 25$. Check: both the minimum and the value at $x = 5$ move up by the same $13$: $-4 \\to 9$ and $12 \\to 25$ ✓\n\n**Common Mistakes:**\n* $21$: uses the minimum value of $q$, $9$, as the shift, computing $12 + 9$.\n* $17$: adds the two minimums, $-4 + 9 = 5$, and uses $5$ as the shift, computing $12 + 5$.\n* $13$: finds the shift $n$ and reports it instead of $q(5)$.\n\n**Test Day Takeaway:** A vertical shift adds the same constant to every output, so find that constant from one pair of matching outputs and apply it to the other.",
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
    question: "$f(x) = 2x^{2} + 3$\nIf $g(x) = f(x - 4)$, what is the value of $g(5)$?",
    choices: [
      { id: "A", text: "$5$" },
      // distractor: computes f(5) - 4, subtracting 4 from the output instead of the input
      { id: "B", text: "$49$" },
      // distractor: computes f(5), ignoring the shift
      { id: "C", text: "$53$" },
      // distractor: computes f(9), adding 4 to the input instead of subtracting
      { id: "D", text: "$165$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Horizontal Shift**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $g(5) = f(5 - 4) = f(1) = 2(1)^{2} + 3 = 5$.\n\n**The Full Solution:**\nStep 1: By definition, $g(5) = f(5 - 4)$.\nStep 2: Simplify the input: $5 - 4 = 1$, so $g(5) = f(1)$.\nStep 3: Evaluate: $f(1) = 2(1)^{2} + 3 = 5$. Check: $g(x) = 2(x - 4)^{2} + 3$, and $2(5 - 4)^{2} + 3 = 5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($49$): computes $f(5) - 4 = 53 - 4$, subtracting $4$ from the output instead of the input.\n* Choice C ($53$): computes $f(5)$ and ignores the $-4$ inside the function.\n* Choice D ($165$): computes $f(9)$, adding $4$ to the input instead of subtracting it.\n\n**Test Day Takeaway:** To evaluate $f(x - h)$, do the arithmetic inside the parentheses first, then evaluate $f$ at that new input.",
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
    question: "$f(x) = |x|$\nThe graph of $y = g(x)$ is the graph of $y = f(x)$ shifted $6$ units to the left. Which equation defines $g$?",
    choices: [
      // distractor: subtracts 6 from the output, which shifts the graph down
      { id: "A", text: "$g(x) = |x| - 6$" },
      // distractor: adds 6 to the output, which shifts the graph up
      { id: "B", text: "$g(x) = |x| + 6$" },
      // distractor: replaces x with x - 6, which shifts the graph to the right
      { id: "C", text: "$g(x) = |x - 6|$" },
      { id: "D", text: "$g(x) = |x + 6|$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Horizontal Shift**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** A shift of $6$ units to the left replaces $x$ with $x + 6$, so $g(x) = |x + 6|$.\n\n**The Full Solution:**\nStep 1: A horizontal shift changes the input: shifting left $6$ units gives $g(x) = f(x + 6)$.\nStep 2: Substitute into $f$: $g(x) = |x + 6|$.\nStep 3: The vertex moves from $(0, 0)$ to the point where $x + 6 = 0$, which is $(-6, 0)$. Check: $(0, 0)$ moved $6$ units to the left is $(-6, 0)$, and $g(-6) = |0| = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($|x| - 6$): changes the output, which shifts the graph down $6$ units.\n* Choice B ($|x| + 6$): changes the output, which shifts the graph up $6$ units.\n* Choice C ($|x - 6|$): moves the vertex to $(6, 0)$, which is a shift to the right.\n\n**Test Day Takeaway:** Inside the function, $x + h$ moves the graph left and $x - h$ moves it right; check by finding where the vertex goes.",
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
    question: "In the $xy$-plane, the graph of $y = f(x)$ is shifted $6$ units to the left. The resulting graph is defined by $y = (x + 2)^{2}$. Which equation defines $f$?",
    choices: [
      // distractor: uses the shift of 6 as the whole horizontal position and ignores the +2
      { id: "A", text: "$f(x) = (x - 6)^{2}$" },
      // distractor: undoes the shift vertically instead of horizontally
      { id: "B", text: "$f(x) = (x + 2)^{2} - 6$" },
      { id: "C", text: "$f(x) = (x - 4)^{2}$" },
      // distractor: shifts the given graph 6 more units to the left instead of undoing the shift
      { id: "D", text: "$f(x) = (x + 8)^{2}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Horizontal Shift**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The vertex of $y = (x + 2)^{2}$ is $(-2, 0)$; before the shift to the left, it was $6$ units to the right, at $(4, 0)$, so $f(x) = (x - 4)^{2}$.\n\n**The Full Solution:**\nStep 1: The resulting graph $y = (x + 2)^{2}$ has its vertex at $(-2, 0)$.\nStep 2: That graph is the graph of $y = f(x)$ moved $6$ units to the left, so the vertex of the graph of $y = f(x)$ is $6$ units to the right of $(-2, 0)$, at $(4, 0)$.\nStep 3: A parabola congruent to $y = x^{2}$ with vertex $(4, 0)$ is $f(x) = (x - 4)^{2}$. Check: $f(x + 6) = (x + 6 - 4)^{2} = (x + 2)^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($(x - 6)^{2}$): puts the vertex at $(6, 0)$, using only the size of the shift and ignoring where the shifted graph is.\n* Choice B ($(x + 2)^{2} - 6$): undoes the shift vertically, which moves the graph down instead of to the right.\n* Choice D ($(x + 8)^{2}$): moves the given graph another $6$ units to the left instead of moving it back to the right.\n\n**Test Day Takeaway:** To recover the original graph, undo the shift: a graph that was moved left must be moved back to the right.",
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
    question: "The graph of $y = f(x)$ is shown. The function $h$ is defined by $h(x) = f(x + 3)$. The graph of $y = h(x)$ has its vertex at $(a, b)$. What is the value of $a$?",
    diagram: { type: "parabola", params: { vertex: { h: -4, k: 1 }, a: 0.5, xRange: [-9, 1], yRange: [0, 14], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showVertex: false } },
    correctAnswer: "-7",
    explanation: "**SAT Pattern: Horizontal Shift**\n\n**The correct answer is -7.**\n\n**The Fast Way (~20s):** The vertex of the graph shown is $(-4, 1)$, and $f(x + 3)$ moves the graph $3$ units to the left, so $a = -4 - 3 = -7$.\n\n**The Full Solution:**\nStep 1: The graph shows the vertex of $y = f(x)$ at $(-4, 1)$.\nStep 2: Replacing $x$ with $x + 3$ shifts the graph $3$ units to the left, so the vertex moves to $(-4 - 3, 1) = (-7, 1)$.\nStep 3: Therefore $a = -7$. Check: $h(-7) = f(-7 + 3) = f(-4)$, the minimum value of $f$, so the vertex of the graph of $y = h(x)$ is at $x = -7$ ✓\n\n**Common Mistakes:**\n* $-1$: moves the vertex $3$ units to the right, reading $x + 3$ as a shift in the positive direction.\n* $-4$: reports the $x$-coordinate of the vertex of the graph of $y = f(x)$ without shifting it.\n* $1$: reports the $y$-coordinate of the vertex, which is $b$, not $a$.\n\n**Test Day Takeaway:** For $f(x + h)$ with $h > 0$, ask which input makes the inside equal the old vertex's $x$-coordinate: $x + 3 = -4$ gives $x = -7$.",
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
    question: "$f(x) = (x - 12)^{2}$\nThe function $h$ is defined by $h(x) = f(x + 5)$. For what value of $x$ does $h(x) = 0$?",
    choices: [
      // distractor: solves x + 5 = 0 instead of x + 5 = 12
      { id: "A", text: "$-5$" },
      { id: "B", text: "$7$" },
      // distractor: reports the zero of f without shifting it
      { id: "C", text: "$12$" },
      // distractor: adds 5 to the zero of f, shifting it to the right
      { id: "D", text: "$17$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Horizontal Shift**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $h(x) = (x + 5 - 12)^{2} = (x - 7)^{2}$, which equals $0$ only when $x = 7$.\n\n**The Full Solution:**\nStep 1: Substitute $x + 5$ into $f$: $h(x) = (x + 5 - 12)^{2} = (x - 7)^{2}$.\nStep 2: Set $h(x) = 0$: $(x - 7)^{2} = 0$, so $x - 7 = 0$.\nStep 3: Therefore $x = 7$. Check: $h(7) = f(12) = (12 - 12)^{2} = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): sets the shifted input $x + 5$ equal to $0$ instead of $12$.\n* Choice C ($12$): reports the zero of $f$, forgetting that $h$ is a shifted copy.\n* Choice D ($17$): adds $5$ to the zero of $f$, which shifts it to the right instead of the left.\n\n**Test Day Takeaway:** A zero of $f(x + h)$ is the input that makes $x + h$ equal a zero of $f$; solve that equation instead of guessing the direction.",
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
    question: "The functions $f$ and $q$ satisfy $q(x) = f(x - 15)$ for all values of $x$, and $f(32) = 90$. For which of the following values of $x$ is $q(x) = 90$?",
    choices: [
      // distractor: subtracts 15 from 32, shifting in the wrong direction
      { id: "A", text: "$17$" },
      // distractor: reports the input of f without shifting it
      { id: "B", text: "$32$" },
      { id: "C", text: "$47$" },
      // distractor: adds 15 to the output 90 instead of to the input
      { id: "D", text: "$105$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Horizontal Shift**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $q(x) = f(x - 15)$ equals $f(32)$ when $x - 15 = 32$, so $x = 47$.\n\n**The Full Solution:**\nStep 1: $q(x) = 90$ means $f(x - 15) = 90$, and $f(32) = 90$.\nStep 2: So the input to $f$ must be $32$: $x - 15 = 32$.\nStep 3: Solve: $x = 47$. Check: $q(47) = f(47 - 15) = f(32) = 90$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($17$): computes $32 - 15$, moving the input the wrong way.\n* Choice B ($32$): uses the input of $f$ without accounting for the shift.\n* Choice D ($105$): adds $15$ to the output $90$ instead of solving for the input.\n\n**Test Day Takeaway:** The graph of $f(x - h)$ reaches each output $h$ units later in $x$ than the graph of $f$ does; set the inside equal to the known input and solve.",
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
    question: "The graph of $y = g(x)$ is shown, where $g(x) = f(x + 5)$ for all values of $x$. For what value of $x$ does $f(x)$ reach its minimum value?",
    diagram: { type: "quadraticVertex", params: { vertex: [-1, -7], a: 0.6, showVertex: true } },
    choices: [
      // distractor: reports the minimum value of g instead of an x-value
      { id: "A", text: "$-7$" },
      // distractor: subtracts 5 from the vertex x-coordinate, moving the wrong way
      { id: "B", text: "$-6$" },
      // distractor: reports where g, not f, reaches its minimum
      { id: "C", text: "$-1$" },
      { id: "D", text: "$4$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Horizontal Shift**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** $g$ reaches its minimum at $x = -1$, where its input to $f$ is $-1 + 5 = 4$; so $f$ reaches its minimum at $x = 4$.\n\n**The Full Solution:**\nStep 1: The graph shows the vertex of $y = g(x)$ at $(-1, -7)$, so $g$ reaches its minimum value, $-7$, at $x = -1$.\nStep 2: Since $g(x) = f(x + 5)$, the minimum of $g$ at $x = -1$ is the value $f(-1 + 5) = f(4)$.\nStep 3: Every output of $g$ is an output of $f$, so $f(4) = -7$ is also the minimum of $f$, reached at $x = 4$. Check: the graph of $y = f(x + 5)$ is the graph of $y = f(x)$ shifted $5$ units left, and $4 - 5 = -1$ matches the vertex shown ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-7$): reports the minimum value, a $y$-coordinate, instead of the $x$-value where it occurs.\n* Choice B ($-6$): subtracts $5$ from $-1$, moving the vertex the wrong way.\n* Choice C ($-1$): reports where $g$ reaches its minimum, not where $f$ does.\n\n**Test Day Takeaway:** When you know the shifted graph and need the original, reverse the shift: $g(x) = f(x + 5)$ is $5$ units left of $f$, so $f$ is $5$ units right of $g$.",
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
    question: "$f(x) = x^{2} - 4x - 45$\nThe function $h$ is defined by $h(x) = f(x - 3)$. What is the sum of the zeros of $h$?",
    correctAnswer: "10",
    explanation: "**SAT Pattern: Horizontal Shift**\n\n**The correct answer is 10.**\n\n**The Fast Way (~30s):** The zeros of $f$ are $9$ and $-5$, and $h(x) = f(x - 3)$ moves each one $3$ units right, to $12$ and $-2$, so the sum is $10$.\n\n**The Full Solution:**\nStep 1: Factor: $f(x) = (x - 9)(x + 5)$, so the zeros of $f$ are $9$ and $-5$.\nStep 2: $h(x) = 0$ when $x - 3 = 9$ or $x - 3 = -5$, so the zeros of $h$ are $12$ and $-2$.\nStep 3: Their sum is $12 + (-2) = 10$. Check: $h(12) = f(9) = 81 - 36 - 45 = 0$ and $h(-2) = f(-5) = 25 + 20 - 45 = 0$ ✓\n\n**Common Mistakes:**\n* $4$: adds the zeros of $f$, $9 + (-5)$, without shifting them.\n* $-2$: moves each zero $3$ units left, to $6$ and $-8$.\n* $7$: adds $3$ to the sum of the zeros only once, instead of once for each zero.\n\n**Test Day Takeaway:** A horizontal shift moves every zero by the same amount, so a quadratic's sum of zeros changes by twice the shift.",
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
    question: "The graph of the quadratic function $f$ is shown. One $x$-intercept of the graph of $y = f(x)$ is $(-1, 0)$. What is the other $x$-intercept?",
    diagram: { type: "quadraticVertex", params: { vertex: [2, -9], a: 1, showPoints: [[-1, 0], [5, 0]], showVertex: true } },
    choices: [
      // distractor: gives the y-intercept, where the graph crosses the y-axis
      { id: "A", text: "$(0, -5)$" },
      // distractor: reflects (-1, 0) across the y-axis instead of across the line x = 2 through the vertex
      { id: "B", text: "$(1, 0)$" },
      // distractor: gives the vertex, which is not on the x-axis
      { id: "C", text: "$(2, -9)$" },
      { id: "D", text: "$(5, 0)$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Reflection of Graph**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** The graph meets the $x$-axis at $x = -1$ and again at $x = 5$, so the other $x$-intercept is $(5, 0)$.\n\n**The Full Solution:**\nStep 1: An $x$-intercept is a point where the graph meets the $x$-axis, so its $y$-coordinate is $0$.\nStep 2: The graph shown meets the $x$-axis at $x = -1$ and at $x = 5$.\nStep 3: The other $x$-intercept is $(5, 0)$. Check: the vertex is at $x = 2$, and $-1$ and $5$ are each $3$ units from $2$, as the two $x$-intercepts of a parabola must be ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($(0, -5)$): this is where the graph crosses the $y$-axis, the $y$-intercept.\n* Choice B ($(1, 0)$): reflects $(-1, 0)$ across the $y$-axis, but the graph is symmetric about the line $x = 2$ through its vertex.\n* Choice C ($(2, -9)$): this is the vertex, the lowest point of the graph, and it is not on the $x$-axis.\n\n**Test Day Takeaway:** The two $x$-intercepts of a parabola are mirror images across the vertical line through the vertex.",
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
    question: "The graph of $y = f(x)$ is shown. For what value of $x$, other than $0$, is $f(x) = 5$?",
    diagram: { type: "quadraticVertex", params: { vertex: [3, -4], a: 1, showPoints: [[0, 5], [6, 5]], showVertex: true } },
    choices: [
      // distractor: gives an x-intercept, where f(x) = 0
      { id: "A", text: "$1$" },
      // distractor: gives the x-coordinate of the vertex
      { id: "B", text: "$3$" },
      // distractor: confuses the output 5 with an input
      { id: "C", text: "$5$" },
      { id: "D", text: "$6$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Reflection of Graph**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** The graph is at height $5$ at $x = 0$ and again at $x = 6$, on the other side of the vertex.\n\n**The Full Solution:**\nStep 1: $f(x) = 5$ asks for points on the graph whose $y$-coordinate is $5$.\nStep 2: The graph shown passes through $(0, 5)$ and through $(6, 5)$.\nStep 3: Other than $0$, the value is $x = 6$. Check: the vertex is at $x = 3$, and $0$ and $6$ are each $3$ units from $3$, so the graph has the same height at both ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($1$): the graph crosses the $x$-axis at $x = 1$, so $f(1) = 0$, not $5$.\n* Choice B ($3$): this is the $x$-coordinate of the vertex, where $f(3) = -4$.\n* Choice C ($5$): treats the output $5$ as an input; the graph shows $f(5) = 0$.\n\n**Test Day Takeaway:** Points at the same height on a parabola sit at equal distances on either side of the vertex.",
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
    question: "The table shows several values of $x$ and $f(x)$ for the quadratic function $f$. For what value of $x$ does $f(x)$ reach its maximum?",
    diagram: { type: "table", params: { xHeader: "x", yHeader: "f(x)", rows: [["1", "-4"], ["3", "8"], ["6", "11"], ["9", "-4"]] } },
    choices: [
      // distractor: reports the output that repeats instead of an x-value
      { id: "A", text: "$-4$" },
      { id: "B", text: "$5$" },
      // distractor: picks the x-value with the greatest listed output; the maximum lies between rows
      { id: "C", text: "$6$" },
      // distractor: reports the greatest output in the table instead of an x-value
      { id: "D", text: "$11$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Reflection of Graph**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** $f(1) = f(9) = -4$, so the graph is symmetric about $x = 5$, halfway between $1$ and $9$; that is where the maximum occurs.\n\n**The Full Solution:**\nStep 1: The graph of a quadratic function is symmetric about the vertical line through its vertex, so two inputs with the same output are equally far from the vertex.\nStep 2: $f(1) = -4$ and $f(9) = -4$, so the vertex is at $x = \\frac{1 + 9}{2} = 5$.\nStep 3: $f(6) = 11$ is greater than $f(1) = -4$, so the parabola opens downward and the vertex is a maximum, at $x = 5$. Check: $f(x) = -(x - 5)^{2} + 12$ gives $-4$, $8$, $11$, and $-4$ at $x = 1, 3, 6, 9$, matching the table ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): this is the output that repeats, not the input where the maximum occurs.\n* Choice C ($6$): the greatest listed output occurs at $x = 6$, but the true maximum lies between the rows, at $x = 5$.\n* Choice D ($11$): this is the greatest output listed in the table, not an input.\n\n**Test Day Takeaway:** Two inputs with equal outputs on a parabola are mirror images; the vertex is halfway between them.",
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
    question: "The graph of the quadratic function $f$ is shown. The point $(4, 21)$ lies on the graph of $y = f(x)$. Which of the following points also lies on the graph?",
    diagram: { type: "quadraticVertex", params: { vertex: [-1, -4], a: 1, showPoints: [[-3, 0], [1, 0]], showVertex: true } },
    choices: [
      { id: "A", text: "$(-6, 21)$" },
      // distractor: reflects (4, 21) across the y-axis instead of across x = -1
      { id: "B", text: "$(-4, 21)$" },
      // distractor: reflects (4, 21) across x = 1, an x-intercept, instead of across x = -1
      { id: "C", text: "$(-2, 21)$" },
      // distractor: reflects (4, 21) across the x-axis
      { id: "D", text: "$(4, -21)$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Reflection of Graph**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** The vertex is at $x = -1$, and $4$ is $5$ units to its right; the matching point is $5$ units to its left, at $x = -6$, with the same $y$-value, $21$.\n\n**The Full Solution:**\nStep 1: From the graph, the vertex is $(-1, -4)$, so the graph is symmetric about the line $x = -1$.\nStep 2: $4$ is $4 - (-1) = 5$ units to the right of $-1$, so the mirror input is $-1 - 5 = -6$.\nStep 3: The point $(-6, 21)$ lies on the graph. Check: the graph has $x$-intercepts $-3$ and $1$ and vertex $(-1, -4)$, so $f(x) = (x + 1)^{2} - 4$; then $f(4) = 25 - 4 = 21$ and $f(-6) = 25 - 4 = 21$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($(-4, 21)$): reflects across the $y$-axis; $f(-4) = 9 - 4 = 5$, not $21$.\n* Choice C ($(-2, 21)$): reflects across the line $x = 1$ through an $x$-intercept; $f(-2) = 1 - 4 = -3$.\n* Choice D ($(4, -21)$): reflects across the $x$-axis; the graph has only one point with $x = 4$, and it is $(4, 21)$.\n\n**Test Day Takeaway:** Find the vertex's $x$-coordinate, measure the distance to the given input, and step the same distance to the other side.",
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
    question: "The graph of the quadratic function $f$ is shown. If $f(-4) = 27$, what is the value of $f(8)$?",
    diagram: { type: "parabola", params: { vertex: { h: 2, k: -9 }, a: 1, xRange: [-2, 6], yRange: [-10, 8], xTickInterval: 1, yTickInterval: 2, gridInterval: 1, showVertex: false, highlightPoints: [[-1, 0], [2, -9], [5, 0]] } },
    correctAnswer: "27",
    explanation: "**SAT Pattern: Reflection of Graph**\n\n**The correct answer is $27$.**\n\n**The Fast Way (~25s):** The vertex is at $x = 2$; $-4$ and $8$ are each $6$ units from $2$, so $f(8) = f(-4) = 27$.\n\n**The Full Solution:**\nStep 1: From the graph, the vertex is $(2, -9)$, so the graph is symmetric about the line $x = 2$.\nStep 2: $-4$ is $6$ units to the left of $2$, and $8$ is $6$ units to the right of $2$.\nStep 3: Mirror inputs give the same output, so $f(8) = 27$. Check: the graph has $x$-intercepts $-1$ and $5$ and vertex $(2, -9)$, so $f(x) = (x - 2)^{2} - 9$; then $f(-4) = 36 - 9 = 27$ and $f(8) = 36 - 9 = 27$ ✓\n\n**Common Mistakes:**\n* $-27$: reflects across the $x$-axis instead of across the line $x = 2$.\n* $-5$: mirrors $-4$ across the $y$-axis and computes $f(4) = 4 - 9 = -5$.\n\n**Test Day Takeaway:** On a parabola, inputs equally far from the vertex's $x$-coordinate have equal outputs.",
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
    question: "The graph of $y = f(x)$ is shown. For which of the following values of $x$ is $f(x) = f(-1)$?",
    diagram: { type: "absoluteValue", params: { vertex: [3, -2], slope: 1, showPoints: [[1, 0], [5, 0]] } },
    choices: [
      // distractor: reflects -1 across the y-axis instead of across x = 3
      { id: "A", text: "$1$" },
      // distractor: gives the x-coordinate of the vertex
      { id: "B", text: "$3$" },
      // distractor: gives the right x-intercept, the mirror of the left intercept rather than of -1
      { id: "C", text: "$5$" },
      { id: "D", text: "$7$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Reflection of Graph**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** The graph is symmetric about $x = 3$, the vertex; $-1$ is $4$ units left of $3$, so the matching input is $3 + 4 = 7$.\n\n**The Full Solution:**\nStep 1: From the graph, the vertex is $(3, -2)$, and the graph is symmetric about the line $x = 3$.\nStep 2: $-1$ is $3 - (-1) = 4$ units to the left of $3$, so the mirror input is $3 + 4 = 7$.\nStep 3: Therefore $f(7) = f(-1)$. Check: the graph has vertex $(3, -2)$ and slope $1$ to the right, so $f(x) = |x - 3| - 2$; $f(-1) = 4 - 2 = 2$ and $f(7) = 4 - 2 = 2$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($1$): reflects $-1$ across the $y$-axis; $f(1) = 0$, not $2$.\n* Choice B ($3$): this is the vertex's $x$-coordinate, where $f(3) = -2$.\n* Choice C ($5$): this is the right $x$-intercept, so $f(5) = 0$; it mirrors the left intercept, $x = 1$, not $x = -1$.\n\n**Test Day Takeaway:** The graph of an absolute value function is symmetric about the vertical line through its vertex, just like a parabola.",
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
    question: "For the quadratic function $f$, the table shows four values of $x$ and their corresponding values of $f(x)$. What is the minimum value of $f(x)$?",
    diagram: { type: "table", params: { xHeader: "x", yHeader: "f(x)", rows: [["1", "4"], ["2", "-2"], ["5", "4"], ["6", "14"]] } },
    choices: [
      { id: "A", text: "$-4$" },
      // distractor: takes the least value in the table; the vertex lies between rows
      { id: "B", text: "$-2$" },
      // distractor: gives the x-value where the minimum occurs
      { id: "C", text: "$3$" },
      // distractor: reports the output that repeats
      { id: "D", text: "$4$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Reflection of Graph**\n\n**Choice A is correct.**\n\n**The Fast Way (~50s):** $f(1) = f(5)$ puts the vertex at $x = 3$, so $f(x) = a(x - 3)^{2} + k$; then $f(1) = 4a + k = 4$ and $f(2) = a + k = -2$ give $a = 2$ and $k = -4$.\n\n**The Full Solution:**\nStep 1: $f(1) = f(5) = 4$, so the graph is symmetric about $x = \\frac{1 + 5}{2} = 3$, and $f(x) = a(x - 3)^{2} + k$ for some constants $a$ and $k$.\nStep 2: Use two rows: $f(1) = 4a + k = 4$ and $f(2) = a + k = -2$. Subtracting gives $3a = 6$, so $a = 2$ and $k = -4$.\nStep 3: Because $a > 0$, the parabola opens upward, and the minimum value is $k = -4$. Check: $f(6) = 2(9) - 4 = 14$, matching the table ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-2$): this is the least value in the table, at $x = 2$, but the vertex is at $x = 3$, between rows.\n* Choice C ($3$): this is the $x$-value where the minimum occurs, not the minimum value.\n* Choice D ($4$): this is the output that repeats at $x = 1$ and $x = 5$.\n\n**Test Day Takeaway:** Use a pair of equal outputs to locate the vertex, then use the rows to find the remaining constants.",
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
    question: "$f(x) = x^{2} + bx + c$\nIn the given function, $b$ and $c$ are constants. If $f(-2) = f(8)$, what is the value of $b$?",
    correctAnswer: "-6",
    explanation: "**SAT Pattern: Reflection of Graph**\n\n**The correct answer is $-6$.**\n\n**The Fast Way (~35s):** Equal outputs at $-2$ and $8$ put the vertex at $x = 3$; the vertex of $y = x^{2} + bx + c$ is at $x = -\\frac{b}{2}$, so $b = -6$.\n\n**The Full Solution:**\nStep 1: The graph of $f$ is a parabola, symmetric about the vertical line through its vertex, so $f(-2) = f(8)$ means the vertex is at $x = \\frac{-2 + 8}{2} = 3$.\nStep 2: For $f(x) = x^{2} + bx + c$, the vertex is at $x = -\\frac{b}{2}$, so $-\\frac{b}{2} = 3$.\nStep 3: Solve: $b = -6$. Check: $f(-2) = 4 + 12 + c = 16 + c$ and $f(8) = 64 - 48 + c = 16 + c$, which are equal ✓\n\n**Common Mistakes:**\n* $6$: drops the negative sign, setting $\\frac{b}{2} = 3$.\n* $3$: reports the $x$-coordinate of the vertex instead of $b$.\n* $-3$: sets $-b = 3$, forgetting the $2$ in $-\\frac{b}{2}$.\n\n**Test Day Takeaway:** If $f(p) = f(q)$ for a quadratic $f$, the vertex is at $x = \\frac{p + q}{2}$.",
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
    question: "The table shows three values of $x$ and their corresponding values of $f(x)$, where $f(x) = kx^{2}$ and $k$ is a constant. What is the value of $k$?",
    diagram: { type: "dataTable", params: { headers: ["x", "f(x)"], rows: [["1", "3"], ["2", "12"], ["3", "27"]] } },
    choices: [
      { id: "A", text: "$3$" },
      // distractor: divides f(3) = 27 by 3 instead of by 3^2
      { id: "B", text: "$9$" },
      // distractor: reports f(2)
      { id: "C", text: "$12$" },
      // distractor: reports f(3)
      { id: "D", text: "$27$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Vertical Stretch**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** At $x = 1$, $f(1) = k(1)^{2} = k$, and the table gives $f(1) = 3$, so $k = 3$.\n\n**The Full Solution:**\nStep 1: Substitute a row of the table into $f(x) = kx^{2}$.\nStep 2: The row $x = 1$ gives $k(1)^{2} = 3$.\nStep 3: So $k = 3$. Check: $3(2)^{2} = 12$ and $3(3)^{2} = 27$, matching the other rows ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($9$): divides $27$ by $3$ instead of by $3^{2} = 9$.\n* Choice C ($12$): reports $f(2)$, an output, instead of $k$.\n* Choice D ($27$): reports $f(3)$, an output, instead of $k$.\n\n**Test Day Takeaway:** To find a constant in a function, substitute one known input-output pair and solve.",
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
    question: "The function $f$ is defined by $f(x) = ax^{2}$, where $a$ is a constant. In the $xy$-plane, the graph of $y = f(x)$ passes through the point $(2, 28)$. What is the value of $a$?",
    choices: [
      { id: "A", text: "$7$" },
      // distractor: divides 28 by 2 instead of by 2^2
      { id: "B", text: "$14$" },
      // distractor: subtracts 2 from 28
      { id: "C", text: "$26$" },
      // distractor: multiplies 28 by 2^2 instead of dividing
      { id: "D", text: "$112$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Vertical Stretch**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Substitute $(2, 28)$: $a(2)^{2} = 28$, so $4a = 28$ and $a = 7$.\n\n**The Full Solution:**\nStep 1: A point on the graph satisfies the equation, so substitute $x = 2$ and $f(x) = 28$.\nStep 2: This gives $a(2)^{2} = 28$, or $4a = 28$.\nStep 3: Divide by $4$: $a = 7$. Check: $f(2) = 7(4) = 28$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($14$): divides $28$ by $2$ instead of by $2^{2} = 4$.\n* Choice C ($26$): subtracts the input $2$ from the output $28$.\n* Choice D ($112$): multiplies $28$ by $4$ instead of dividing.\n\n**Test Day Takeaway:** Square the input before solving for the coefficient.",
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
    question: "$f(x) = a\\sqrt{x} + 2$\nIn the given function, $a$ is a constant. If $f(9) = 14$, what is the value of $f(25)$?",
    choices: [
      // distractor: finds a = 4 but drops the + 2 when computing f(25)
      { id: "A", text: "$20$" },
      { id: "B", text: "$22$" },
      // distractor: adds the change in x, 16, to 14 as if f increased 1 for each unit of x
      { id: "C", text: "$30$" },
      // distractor: uses 25 instead of the square root of 25
      { id: "D", text: "$102$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Vertical Stretch**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** $3a + 2 = 14$ gives $a = 4$, so $f(25) = 4(5) + 2 = 22$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 9$: $a\\sqrt{9} + 2 = 14$, so $3a + 2 = 14$.\nStep 2: Solve: $3a = 12$, so $a = 4$ and $f(x) = 4\\sqrt{x} + 2$.\nStep 3: Then $f(25) = 4\\sqrt{25} + 2 = 4(5) + 2 = 22$. Check: $f(9) = 4(3) + 2 = 14$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($20$): finds $a = 4$ but forgets to add $2$ when computing $f(25)$.\n* Choice C ($30$): adds $25 - 9 = 16$ to $14$, as if $f$ increased by $1$ for each unit of $x$.\n* Choice D ($102$): computes $4(25) + 2$, using $25$ instead of $\\sqrt{25} = 5$.\n\n**Test Day Takeaway:** Find the constant from the given value first, then evaluate the function at the new input.",
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
    question: "$f(x) = a(2x^{2} - 5x + 1)$\nIn the given function, $a$ is a constant. If $f(3) = 24$, what is the value of $a$?",
    correctAnswer: "6",
    explanation: "**SAT Pattern: Vertical Stretch**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~25s):** At $x = 3$ the expression in parentheses is $18 - 15 + 1 = 4$, so $4a = 24$ and $a = 6$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 3$ into the expression in parentheses: $2(3)^{2} - 5(3) + 1 = 18 - 15 + 1 = 4$.\nStep 2: So $f(3) = 4a$, and $4a = 24$.\nStep 3: Divide by $4$: $a = 6$. Check: $f(3) = 6(4) = 24$ ✓\n\n**Common Mistakes:**\n* $\\frac{12}{17}$: adds $5x$ instead of subtracting it, so the parentheses equal $18 + 15 + 1 = 34$.\n* $-12$: evaluates $2x^{2}$ as $2(2)(3) = 12$, so the parentheses equal $12 - 15 + 1 = -2$.\n\n**Test Day Takeaway:** Evaluate everything except the unknown constant first; then one division finishes the problem.",
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
    question: "The graph of $y = a(x - 3)^{2} - 2$, where $a$ is a constant, is shown. What is the value of $a$?",
    diagram: { type: "quadraticVertex", params: { vertex: [3, -2], a: 2, showPoints: [[1, 6], [5, 6]], showVertex: true } },
    choices: [
      // distractor: drops the square, solving a(1 - 3) - 2 = 6
      { id: "A", text: "$-4$" },
      // distractor: drops the - 2, solving 4a = 6
      { id: "B", text: "$\\frac{3}{2}$" },
      { id: "C", text: "$2$" },
      // distractor: reports the y-coordinate of a marked point
      { id: "D", text: "$6$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Vertical Stretch**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The graph passes through $(1, 6)$, so $a(1 - 3)^{2} - 2 = 6$, which gives $4a = 8$ and $a = 2$.\n\n**The Full Solution:**\nStep 1: The graph passes through the marked point $(1, 6)$, so substitute $x = 1$ and $y = 6$.\nStep 2: $6 = a(1 - 3)^{2} - 2 = 4a - 2$, so $4a = 8$.\nStep 3: Solve: $a = 2$. Check: the other marked point, $(5, 6)$, gives $2(5 - 3)^{2} - 2 = 8 - 2 = 6$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): drops the square, solving $a(1 - 3) - 2 = 6$, or $-2a = 8$.\n* Choice B ($\\frac{3}{2}$): drops the $-2$, solving $4a = 6$.\n* Choice D ($6$): reports the $y$-coordinate of the marked point instead of solving for $a$.\n\n**Test Day Takeaway:** Read one exact point off the graph and substitute it to find the missing constant.",
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
    question: "$h(x) = c(x^{2} - 6x + 5)$\nIn the given function, $c$ is a positive constant. The minimum value of $h(x)$ is $-20$. What is the value of $c$?",
    choices: [
      // distractor: reports the size of the minimum of x^2 - 6x + 5 instead of solving for c
      { id: "A", text: "$4$" },
      { id: "B", text: "$5$" },
      // distractor: treats c as a shift, computing -20 - (-4) = -16 and dropping the sign
      { id: "C", text: "$16$" },
      // distractor: takes the minimum value -20 as the size of c
      { id: "D", text: "$20$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Vertical Stretch**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The minimum of $x^{2} - 6x + 5$ is $-4$, at $x = 3$; multiplying by $c > 0$ scales it to $-4c = -20$, so $c = 5$.\n\n**The Full Solution:**\nStep 1: The expression $x^{2} - 6x + 5$ has its vertex at $x = -\\frac{-6}{2} = 3$, and its value there is $9 - 18 + 5 = -4$. So its minimum value is $-4$.\nStep 2: Because $c$ is positive, multiplying by $c$ keeps the minimum at $x = 3$ and scales it to $-4c$.\nStep 3: Set $-4c = -20$, so $c = 5$. Check: $h(3) = 5(-4) = -20$, and $h(x) = 5(x - 3)^{2} - 20 \\ge -20$ for every $x$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): reports the size of the minimum of $x^{2} - 6x + 5$ instead of solving for $c$.\n* Choice C ($16$): treats $c$ as a vertical shift, computing $-20 - (-4) = -16$ and dropping the sign.\n* Choice D ($20$): takes the minimum value $-20$ as the size of $c$, skipping the minimum of the expression.\n\n**Test Day Takeaway:** A positive constant multiplying a function multiplies its minimum by the same constant, so divide the new minimum by the old one.",
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
    question: "$f(x) = a(x - 3)^{2} + k$\nIn the given function, $a$ and $k$ are constants. The table shows two values of $x$ and their corresponding values of $f(x)$. What is the value of $f(6)$?",
    questionTable: { headers: ["$x$", "$f(x)$"], rows: [["$1$", "$9$"], ["$2$", "$3$"]] },
    choices: [
      // distractor: continues the drop of 6 per unit as if f were linear
      { id: "A", text: "$-21$" },
      // distractor: assumes f(6) = f(1), mirroring across x = 3.5 instead of x = 3
      { id: "B", text: "$9$" },
      // distractor: finds a = 2 but drops k when computing f(6)
      { id: "C", text: "$18$" },
      { id: "D", text: "$19$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Vertical Stretch**\n\n**Choice D is correct.**\n\n**The Fast Way (~50s):** The rows give $4a + k = 9$ and $a + k = 3$, so $a = 2$ and $k = 1$; then $f(6) = 2(9) + 1 = 19$.\n\n**The Full Solution:**\nStep 1: Substitute the rows: $f(1) = a(1 - 3)^{2} + k = 4a + k = 9$ and $f(2) = a(2 - 3)^{2} + k = a + k = 3$.\nStep 2: Subtract the second equation from the first: $3a = 6$, so $a = 2$ and $k = 1$.\nStep 3: Then $f(6) = 2(6 - 3)^{2} + 1 = 18 + 1 = 19$. Check: $f(1) = 8 + 1 = 9$ and $f(2) = 2 + 1 = 3$, matching the table ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-21$): continues the drop of $6$ from $x = 1$ to $x = 2$ as if $f$ were linear: $9 - 6(5) = -21$.\n* Choice B ($9$): assumes $f(6) = f(1)$, but $1$ and $6$ are mirror inputs only across $x = 3.5$; the vertex is at $x = 3$.\n* Choice C ($18$): finds $a = 2$ but leaves out $k = 1$.\n\n**Test Day Takeaway:** Two unknown constants need two equations: substitute two rows, solve, then evaluate.",
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
    question: "$f(x) = ax(x - 12)$\nIn the given function, $a$ is a constant. If $f(2) = 60$, what is the maximum value of $f(x)$?",
    correctAnswer: "108",
    explanation: "**SAT Pattern: Vertical Stretch**\n\n**The correct answer is $108$.**\n\n**The Fast Way (~40s):** $f(2) = a(2)(-10) = -20a = 60$, so $a = -3$; the maximum is at $x = 6$, halfway between the zeros $0$ and $12$: $f(6) = -3(6)(-6) = 108$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 2$: $f(2) = a(2)(2 - 12) = -20a$, so $-20a = 60$ and $a = -3$.\nStep 2: Because $a < 0$, the parabola opens downward, and its maximum is at the vertex, halfway between the zeros $x = 0$ and $x = 12$, at $x = 6$.\nStep 3: $f(6) = -3(6)(6 - 12) = -3(6)(-6) = 108$. Check: $f(2) = -3(2)(-10) = 60$ ✓\n\n**Common Mistakes:**\n* $6$: reports the $x$-value where the maximum occurs.\n* $-3$: reports the value of $a$.\n* $-108$: drops the negative sign, using $a = 3$.\n\n**Test Day Takeaway:** For $f(x) = a(x - r)(x - s)$, the vertex is at $x = \\frac{r + s}{2}$; find $a$ from the given value, then evaluate there.",
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
    question: "The value of an investment increases by the same percentage each year. The table shows the value, in dollars, of the investment at the time of purchase and at the end of each of the first three years. By what percentage does the value increase each year?",
    questionTable: { headers: ["Years after purchase", "Value (dollars)"], rows: [["$0$", "$8{,}000$"], ["$1$", "$8{,}400$"], ["$2$", "$8{,}820$"], ["$3$", "$9{,}261$"]] },
    choices: [
      // distractor: divided the first year increase of 400 by the end-of-year value 8,400 instead of by 8,000
      { id: "A", text: "$4.8\\%$" },
      { id: "B", text: "$5\\%$" },
      // distractor: used the two-year increase of 820 over 8,000
      { id: "C", text: "$10.3\\%$" },
      // distractor: used the three-year increase of 1,261 over 8,000
      { id: "D", text: "$15.8\\%$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Compound Interest**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $8{,}400/8{,}000=1.05$, an increase of $5\\%$ per year.\n\n**The Full Solution:**\nStep 1: A constant percentage increase means a constant ratio between consecutive values.\nStep 2: Compute the ratios: $8400/8000=1.05$, $8820/8400=1.05$, and $9261/8820=1.05$.\nStep 3: A factor of $1.05$ is an increase of $5\\%$ each year. Check: $8000(1.05)^{3}=9{,}261$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4.8\\%$): divides the first year's increase of $\\$400$ by the end-of-year value $\\$8{,}400$.\n* Choice C ($10.3\\%$): uses the two-year increase, $\\$820$ over $\\$8{,}000$.\n* Choice D ($15.8\\%$): uses the three-year increase, $\\$1{,}261$ over $\\$8{,}000$.\n\n**Test Day Takeaway:** Percent change always divides by the earlier value — the ratio of consecutive rows is the growth factor.",
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
    question: "The balance of a savings account increases by $10\\%$ each year. The table shows the balance, in dollars, at the end of each of the first three years. What will the balance be, in dollars, at the end of the fourth year?",
    questionTable: { headers: ["Year", "Balance (dollars)"], rows: [["$1$", "$2{,}000$"], ["$2$", "$2{,}200$"], ["$3$", "$2{,}420$"]] },
    choices: [
      // distractor: adds the first increase, 200, as if the growth were linear
      { id: "A", text: "$2{,}620$" },
      // distractor: adds the second increase, 220, again
      { id: "B", text: "$2{,}640$" },
      { id: "C", text: "$2{,}662$" },
      // distractor: increases the balance by 20% instead of 10%
      { id: "D", text: "$2{,}904$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Compound Interest**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Increase the year-3 balance by $10\\%$: $2{,}420(1.10) = 2{,}662$.\n\n**The Full Solution:**\nStep 1: An increase of $10\\%$ each year multiplies the balance by $1.10$ each year.\nStep 2: The balance at the end of year 3 is $2{,}420$.\nStep 3: At the end of year 4 it is $2{,}420(1.10) = 2{,}662$. Check: $2{,}000(1.10) = 2{,}200$ and $2{,}200(1.10) = 2{,}420$, matching the table ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2{,}620$): adds $200$, the first year's increase, as if the balance grew by the same amount each year.\n* Choice B ($2{,}640$): adds $220$, the second year's increase, again; each year's increase is larger than the last.\n* Choice D ($2{,}904$): increases $2{,}420$ by $20\\%$ instead of $10\\%$.\n\n**Test Day Takeaway:** A percent increase is applied to the latest value, so the dollar increase grows every year.",
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
    question: "A savings account was opened with a deposit of \\$5,000, and no other deposits or withdrawals are made. The table shows the balance, in dollars, at the end of each of the first two 6-month periods. Which equation gives the balance $B$, in dollars, $t$ years after the account was opened?",
    questionTable: { headers: ["6-month periods", "Balance (dollars)"], rows: [["$1$", "$5{,}100$"], ["$2$", "$5{,}202$"]] },
    choices: [
      // distractor: applies the 6-month factor once per year instead of twice
      { id: "A", text: "$B = 5{,}000(1.02)^{t}$" },
      { id: "B", text: "$B = 5{,}000(1.02)^{2t}$" },
      // distractor: halves the number of periods instead of doubling it
      { id: "C", text: "$B = 5{,}000(1.02)^{\\frac{t}{2}}$" },
      // distractor: uses the yearly increase of 4% for each 6-month period
      { id: "D", text: "$B = 5{,}000(1.04)^{2t}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Compound Interest**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Each 6-month period multiplies the balance by $\\frac{5{,}100}{5{,}000} = 1.02$, and $t$ years contain $2t$ such periods.\n\n**The Full Solution:**\nStep 1: Divide consecutive balances: $\\frac{5{,}100}{5{,}000} = 1.02$ and $\\frac{5{,}202}{5{,}100} = 1.02$, so the balance increases by $2\\%$ every 6 months.\nStep 2: There are $2$ six-month periods in a year, so $t$ years contain $2t$ periods.\nStep 3: So $B = 5{,}000(1.02)^{2t}$. Check: $t = 1$ gives $5{,}000(1.02)^{2} = 5{,}202$, the balance after $2$ periods ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: uses the exponent $t$, applying the $2\\%$ increase once per year instead of twice.\n* Choice C: uses the exponent $\\frac{t}{2}$, which counts one period every $2$ years.\n* Choice D: uses $1.04$, a $4\\%$ increase, for each 6-month period; the table shows $2\\%$ per period.\n\n**Test Day Takeaway:** When the growth period is not one year, the exponent counts periods: $t$ years of 6-month periods is $2t$.",
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
    question: "$3{,}200\\left(1+\\frac{r}{100}\\right)^{2}=3{,}528$\nThe balance of a savings account increases by $r\\%$ each year. The given equation shows that a deposit of \\$3,200 grows to \\$3,528 after $2$ years. What is the value of $r$?",
    correctAnswer: "5",
    explanation: "**SAT Pattern: Compound Interest**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~25s):** $3528/3200=1.1025$, and $\\sqrt{1.1025}=1.05$, so $r=5$.\n\n**The Full Solution:**\nStep 1: Divide both sides by $3200$: $\\left(1+\\dfrac{r}{100}\\right)^{2}=\\dfrac{3528}{3200}=1.1025$.\nStep 2: Take the positive square root: $1+\\dfrac{r}{100}=1.05$.\nStep 3: So $\\dfrac{r}{100}=0.05$ and $r=5$. Check: $3200(1.05)^{2}=3200(1.1025)=3{,}528$ ✓\n\n**Common Mistakes:**\n* $10.25$: used the two-year growth of $10.25\\%$ as the annual rate, skipping the square root.\n* $1.05$: reported the annual growth factor instead of the percent rate.\n* $328$: reported the total interest earned rather than the rate.\n\n**Test Day Takeaway:** Two years of growth at the same rate is the yearly factor squared — undo it with a square root, not by halving.",
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
    question: "The table shows the value, in dollars, of an investment at the end of each of the first three years after it was bought. The value grew by the same percentage each year. Based on the table, what will the value be at the end of the fifth year?",
    questionTable: { headers: ["Year", "Value (dollars)"], rows: [["$1$", "$6{,}250$"], ["$2$", "$7{,}500$"], ["$3$", "$9{,}000$"]] },
    choices: [
      // distractor: applies only one more year of growth, giving the year-4 value
      { id: "A", text: "$10{,}800$" },
      // distractor: adds 1,500 each year, treating the growth as linear
      { id: "B", text: "$12{,}000$" },
      { id: "C", text: "$12{,}960$" },
      // distractor: applies three more years of growth, giving the year-6 value
      { id: "D", text: "$15{,}552$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Compound Interest**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Each year multiplies the value by $\\frac{7{,}500}{6{,}250} = 1.2$, so year 5 is $9{,}000(1.2)^{2} = 12{,}960$.\n\n**The Full Solution:**\nStep 1: Divide consecutive values: $\\frac{7{,}500}{6{,}250} = 1.2$ and $\\frac{9{,}000}{7{,}500} = 1.2$, so the value is multiplied by $1.2$ each year.\nStep 2: From year 3 to year 5 is $2$ years, so multiply by $1.2$ twice: $(1.2)^{2} = 1.44$.\nStep 3: The year-5 value is $9{,}000(1.44) = 12{,}960$. Check: year 4 is $9{,}000(1.2) = 10{,}800$, and $10{,}800(1.2) = 12{,}960$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($10{,}800$): applies one year of growth, which gives the value at the end of year 4.\n* Choice B ($12{,}000$): adds the last increase, $1{,}500$, twice, as if the value grew by the same amount each year.\n* Choice D ($15{,}552$): applies $3$ years of growth to the year-3 value, which gives year 6.\n\n**Test Day Takeaway:** Same percentage each year means the same ratio between consecutive values; count the years and apply the factor that many times.",
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
    question: "The balance of a savings account increases exponentially, and no deposits or withdrawals are made. The table shows the balance at the end of each of the first two years after the account was opened. By what percentage does the balance increase each year?",
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
    explanation: "**SAT Pattern: Compound Interest**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** $\\dfrac{5{,}832}{5{,}400} = 1.08$, so the balance grows by $8\\%$ in one year.\n\n**The Full Solution:**\nStep 1: Consecutive balances are exactly one year apart, so their ratio is the growth multiplier $1 + r$.\nStep 2: $\\dfrac{5{,}832}{5{,}400} = 1.08$, so $1 + r = 1.08$ and $r = 0.08$.\nStep 3: As a percent, the annual rate is $8\\%$. Check: the increase is $5{,}832 - 5{,}400 = 432$, and $\\dfrac{432}{5{,}400} = 0.08$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4\\%$): this halves the $\\$432$ increase, as if it had accumulated over two years; the table already shows a single year of growth.\n* Choice B ($7.4\\%$): this computes $\\dfrac{432}{5{,}832} \\approx 0.074$, dividing by the ending balance instead of the starting one.\n* Choice D ($16\\%$): this doubles the correct rate, treating the two listed balances as two years of growth from the original deposit.\n\n**Test Day Takeaway:** For a constant percentage increase, divide any balance by the one from the period before; percent change is always measured against the EARLIER amount.",
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
    question: "$B(t) = 2{,}000(1.10)^{t}$\nThe function $B$ gives the balance, in dollars, of a savings account $t$ years after it was opened. By what percentage does the balance increase every $2$ years?",
    choices: [
      // distractor: gives the increase for one year
      { id: "A", text: "$10\\%$" },
      // distractor: doubles the yearly rate instead of applying it twice
      { id: "B", text: "$20\\%$" },
      { id: "C", text: "$21\\%$" },
      // distractor: reports the 2-year growth factor 1.21 as a percentage
      { id: "D", text: "$121\\%$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Compound Interest**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Two years multiply the balance by $(1.10)^{2} = 1.21$, an increase of $21\\%$.\n\n**The Full Solution:**\nStep 1: Each year the balance is multiplied by $1.10$.\nStep 2: Over $2$ years it is multiplied by $(1.10)^{2} = 1.21$, so $B(t) = 2{,}000(1.21)^{\\frac{t}{2}}$.\nStep 3: A factor of $1.21$ is an increase of $21\\%$. Check: $B(0) = 2{,}000$ and $B(2) = 2{,}000(1.21) = 2{,}420$, and $\\frac{420}{2{,}000} = 0.21$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($10\\%$): this is the increase for one year, not for two.\n* Choice B ($20\\%$): adds $10\\%$ twice; the second year's $10\\%$ is taken on the larger balance, so the total is more than $20\\%$.\n* Choice D ($121\\%$): treats the factor $1.21$ as the percentage; a factor of $1.21$ means $121\\%$ OF the starting balance, an increase of $21\\%$.\n\n**Test Day Takeaway:** To change the period of an exponential model, raise the factor to the number of years in the new period.",
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
    question: "The value of an investment increases by the same percentage each year. Its value is \\$3,000 at the end of the first year and \\$4,320 at the end of the third year. What was the value, in dollars, of the investment when it was purchased?",
    correctAnswer: "2500",
    explanation: "**SAT Pattern: Compound Interest**\n\n**The correct answer is $2500$.**\n\n**The Fast Way (~40s):** Two years multiply the value by $\\frac{4{,}320}{3{,}000} = 1.44 = (1.2)^{2}$, so the yearly factor is $1.2$ and the purchase value is $\\frac{3{,}000}{1.2} = 2{,}500$.\n\n**The Full Solution:**\nStep 1: From the end of year 1 to the end of year 3 is $2$ years, so the yearly factor $b$ satisfies $b^{2} = \\frac{4{,}320}{3{,}000} = 1.44$.\nStep 2: The positive square root gives $b = 1.2$, an increase of $20\\%$ each year.\nStep 3: The value one year before the end of year 1 is $\\frac{3{,}000}{1.2} = 2{,}500$. Check: $2{,}500(1.2) = 3{,}000$ and $2{,}500(1.2)^{3} = 4{,}320$ ✓\n\n**Common Mistakes:**\n* $2{,}340$: treats the growth as linear, subtracting half of the $1{,}320$ increase from $3{,}000$.\n* $2{,}400$: takes $20\\%$ off $3{,}000$ instead of dividing by $1.2$.\n* $2{,}083.33$: divides $3{,}000$ by the 2-year factor $1.44$ instead of the yearly factor $1.2$.\n\n**Test Day Takeaway:** Two values $n$ years apart give the factor for $n$ years; take the $n$th root to get the yearly factor, then divide to go back in time.",
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
    question: "$\\dfrac{x}{x-7}=\\dfrac{4}{x-7}$\nWhat are all the solutions to the given equation?",
    choices: [
      { id: "A", text: "$4$ only" },
      // distractor: reports x = 7, the value that makes both denominators zero, as the solution
      { id: "B", text: "$7$ only" },
      // distractor: cross-multiplies to x(x - 7) = 4(x - 7), solves to get 4 and 7, and keeps the excluded value 7
      { id: "C", text: "$4$ and $7$" },
      // distractor: rejects x = 4 as well, as if every value found after clearing denominators were extraneous
      { id: "D", text: "There is no solution." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Rational Equation with Extraneous Solution**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The denominators are equal, so the numerators must be equal: $x=4$. Since $4\\neq 7$, it is a valid solution.\n\n**The Full Solution:**\nStep 1: Both sides are undefined at $x=7$, so $x=7$ cannot be a solution.\nStep 2: For every other value of $x$, multiplying both sides by $x-7$ gives $x=4$.\nStep 3: $x=4$ is not the excluded value, so it is the only solution. Check: $\\dfrac{4}{4-7}=-\\dfrac{4}{3}$ on both sides ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($7$ only): reports the value that makes both denominators zero; at $x=7$ neither side is defined.\n* Choice C ($4$ and $7$): cross-multiplies to $x(x-7)=4(x-7)$, whose solutions are $4$ and $7$, and keeps the excluded value $7$.\n* Choice D (There is no solution.): rejects $x=4$ too, as if every value found after clearing denominators were extraneous.\n\n**Test Day Takeaway:** Write down the excluded value first; a candidate is thrown out only if it equals that value.",
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
    question: "$\\dfrac{x^{2}-49}{x+7}=2$\nWhat is the solution to the given equation?",
    choices: [
      // distractor: multiplies by x + 7 to get x^2 - 2x - 63 = 0, factors as (x - 9)(x + 7), and keeps the excluded root -7
      { id: "A", text: "$-7$" },
      // distractor: cancels the wrong factor, solving x + 7 = 2
      { id: "B", text: "$-5$" },
      // distractor: moves the 7 with the wrong sign, computing x = 7 - 2
      { id: "C", text: "$5$" },
      { id: "D", text: "$9$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Rational Equation with Extraneous Solution**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** For $x\\neq -7$, $\\dfrac{x^{2}-49}{x+7}=x-7$, so $x-7=2$ and $x=9$.\n\n**The Full Solution:**\nStep 1: The expression is undefined at $x=-7$, so $-7$ is excluded.\nStep 2: Factor the numerator: $\\dfrac{(x+7)(x-7)}{x+7}=x-7$ for $x\\neq -7$.\nStep 3: Solve $x-7=2$: $x=9$, which is not excluded. Check: $\\dfrac{81-49}{9+7}=\\dfrac{32}{16}=2$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-7$): multiplies both sides by $x+7$ to get $x^{2}-2x-63=0$, or $(x-9)(x+7)=0$, and keeps the root $-7$, which makes the denominator zero.\n* Choice B ($-5$): cancels the wrong factor and solves $x+7=2$.\n* Choice C ($5$): solves $x-7=2$ with a sign slip, computing $7-2$.\n\n**Test Day Takeaway:** When a factor cancels, the value that zeroes it is still off-limits; any root equal to that value is extraneous.",
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
    question: "$\\dfrac{x}{x-2}=\\dfrac{8}{x^{2}-4}$\nWhat value of $x$ is the solution to the given equation?",
    choices: [
      { id: "A", text: "$-4$" },
      // distractor: keeps x = 2, which makes the denominators 0
      { id: "B", text: "$2$" },
      // distractor: factors x^2 + 2x - 8 as (x - 4)(x + 2)
      { id: "C", text: "$4$" },
      // distractor: sets the numerators equal
      { id: "D", text: "$8$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Rational Equation with Extraneous Solution**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** Multiply both sides by $(x - 2)(x + 2)$: $x(x + 2) = 8$, so $(x + 4)(x - 2) = 0$; $x = 2$ makes a denominator $0$, so $x = -4$.\n\n**The Full Solution:**\nStep 1: Since $x^{2} - 4 = (x - 2)(x + 2)$, multiply both sides by $(x - 2)(x + 2)$: $x(x + 2) = 8$.\nStep 2: Rearrange and factor: $x^{2} + 2x - 8 = 0$, so $(x + 4)(x - 2) = 0$ and $x = -4$ or $x = 2$.\nStep 3: $x = 2$ makes the denominators $0$, so it is not a solution; the solution is $x = -4$. Check: $\\frac{-4}{-6} = \\frac{2}{3}$ and $\\frac{8}{16 - 4} = \\frac{2}{3}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($2$): solves the quadratic but keeps $x = 2$, which makes both denominators $0$.\n* Choice C ($4$): factors $x^{2} + 2x - 8$ as $(x - 4)(x + 2)$, reversing the signs.\n* Choice D ($8$): sets the numerators equal, ignoring that the denominators differ.\n\n**Test Day Takeaway:** After clearing denominators, test every solution in the original equation; any value that makes a denominator $0$ is thrown out.",
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
    question: "$\\dfrac{x^{2}}{x+5}=\\dfrac{25}{x+5}$\nHow many distinct real solutions does the given equation have?",
    choices: [
      // distractor: rejects both roots of x^2 = 25, as if 5 were excluded along with -5
      { id: "A", text: "Zero" },
      { id: "B", text: "Exactly one" },
      // distractor: solves x^2 = 25 and keeps both 5 and -5, though -5 makes the denominators zero
      { id: "C", text: "Exactly two" },
      // distractor: treats equal denominators as making the equation true for every x
      { id: "D", text: "Infinitely many" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Rational Equation with Extraneous Solution**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Equal denominators give $x^{2}=25$, so $x=5$ or $x=-5$; $x=-5$ zeroes the denominators, leaving one solution.\n\n**The Full Solution:**\nStep 1: Both sides are undefined at $x=-5$, so $-5$ is excluded.\nStep 2: For every other $x$, multiplying by $x+5$ gives $x^{2}=25$, so $x=5$ or $x=-5$.\nStep 3: Discard $-5$. Only $x=5$ remains, so the equation has exactly one solution. Check: $\\dfrac{25}{10}=\\dfrac{25}{10}$ at $x=5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A (Zero): rejects $x=5$ along with $-5$, but only $-5$ makes a denominator zero.\n* Choice C (Exactly two): keeps both roots of $x^{2}=25$, including the excluded value $-5$.\n* Choice D (Infinitely many): treats equal denominators as making the two sides identical; the numerators $x^{2}$ and $25$ are equal only at $x=\\pm 5$.\n\n**Test Day Takeaway:** Count solutions only after removing every candidate that makes a denominator zero.",
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
    question: "$\\dfrac{2x}{x-6}=x+\\dfrac{12}{x-6}$\nWhat value of $x$ satisfies the given equation?",
    correctAnswer: "2",
    explanation: "**SAT Pattern: Rational Equation with Extraneous Solution**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~35s):** Multiplying by $x-6$ gives $x^{2}-8x+12=0$, or $(x-2)(x-6)=0$. The root $6$ is excluded, so $x=2$.\n\n**The Full Solution:**\nStep 1: The equation is undefined at $x=6$. Multiply both sides by $x-6$: $2x=x(x-6)+12$.\nStep 2: Expand and collect: $2x=x^{2}-6x+12$, so $x^{2}-8x+12=0$, which factors as $(x-2)(x-6)=0$.\nStep 3: The candidates are $2$ and $6$; $6$ is excluded, so $x=2$. Check: $\\dfrac{4}{-4}=-1$ and $2+\\dfrac{12}{-4}=2-3=-1$ ✓\n\n**Common Mistakes:**\n* $6$: keeps the root that makes the denominators zero.\n* $8$: adds the two roots of $x^{2}-8x+12=0$ instead of solving it.\n* $12$: forgets to multiply the $x$ term by $x-6$, getting $2x=x+12$.\n\n**Test Day Takeaway:** Clearing denominators can add a root that the original equation does not allow; check each root against the excluded value.",
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
    question: "$\\dfrac{x^{2}+2x}{x-3}=\\dfrac{15}{x-3}$\nWhat is the sum of the solutions to the given equation?",
    choices: [
      // distractor: multiplies the two roots of x^2 + 2x - 15 = 0 instead of adding them
      { id: "A", text: "$-15$" },
      { id: "B", text: "$-5$" },
      // distractor: adds both roots -5 and 3 of the cleared equation, keeping the excluded value 3
      { id: "C", text: "$-2$" },
      // distractor: factors x^2 + 2x - 15 as (x - 5)(x + 3), reversing the signs, and adds 5 and -3
      { id: "D", text: "$2$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Rational Equation with Extraneous Solution**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Equal denominators give $x^{2}+2x-15=0$, or $(x+5)(x-3)=0$. The root $3$ is excluded, so the only solution is $-5$, and the sum is $-5$.\n\n**The Full Solution:**\nStep 1: Both sides are undefined at $x=3$. For every other $x$, multiplying by $x-3$ gives $x^{2}+2x=15$.\nStep 2: Rewrite as $x^{2}+2x-15=0$ and factor: $(x+5)(x-3)=0$, so the candidates are $-5$ and $3$.\nStep 3: Discard $3$. The only solution is $-5$, so the sum of the solutions is $-5$. Check: $\\dfrac{25-10}{-8}=-\\dfrac{15}{8}$ and $\\dfrac{15}{-8}=-\\dfrac{15}{8}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-15$): multiplies the roots, $(-5)(3)$, instead of adding them.\n* Choice C ($-2$): adds both roots of the quadratic, $-5+3$, keeping the excluded value $3$.\n* Choice D ($2$): factors with the signs reversed, $(x-5)(x+3)$, and adds $5$ and $-3$.\n\n**Test Day Takeaway:** The sum-of-roots shortcut counts every root of the cleared equation; remove extraneous roots before you add.",
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
    question: "$\\dfrac{x+a}{x-5}=\\dfrac{9}{x-5}$\nIn the given equation, $a$ is a constant. For what value of $a$ does the equation have no solution?",
    choices: [
      // distractor: solves 9 + a = 5 instead of 9 - a = 5
      { id: "A", text: "$-4$" },
      { id: "B", text: "$4$" },
      // distractor: sets a equal to the excluded value 5 instead of making the candidate 9 - a equal 5
      { id: "C", text: "$5$" },
      // distractor: copies the 9 from the right side; then x + 9 = 9 gives the valid solution x = 0
      { id: "D", text: "$9$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Rational Equation with Extraneous Solution**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** Equal denominators force $x+a=9$, so $x=9-a$. There is no solution only when that candidate is the excluded value $5$: $9-a=5$, so $a=4$.\n\n**The Full Solution:**\nStep 1: Both sides are undefined at $x=5$. For every other $x$, the equation reduces to $x+a=9$.\nStep 2: That equation always has exactly one candidate, $x=9-a$.\nStep 3: The candidate is unusable exactly when $9-a=5$, that is, when $a=4$. Check: with $a=4$, the equation is $\\dfrac{x+4}{x-5}=\\dfrac{9}{x-5}$, whose only candidate is $x=5$, an excluded value, so there is no solution ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): solves $9+a=5$ instead of $9-a=5$.\n* Choice C ($5$): sets $a$ equal to the excluded value itself; with $a=5$ the candidate is $x=4$, which works.\n* Choice D ($9$): copies the right-hand numerator; then $x+9=9$ gives $x=0$, a valid solution.\n\n**Test Day Takeaway:** A rational equation has no solution exactly when its only candidate is a value the denominators forbid.",
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
    question: "$\\dfrac{x}{x-5}-\\dfrac{3}{x+1}=\\dfrac{18}{x^{2}-4x-5}$\nWhat is the solution to the given equation?",
    correctAnswer: "3",
    explanation: "**SAT Pattern: Rational Equation with Extraneous Solution**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~45s):** Since $x^{2}-4x-5=(x-5)(x+1)$, multiplying through gives $x^{2}-2x-3=0$, or $(x-3)(x+1)=0$. The root $-1$ is excluded, so $x=3$.\n\n**The Full Solution:**\nStep 1: Factor the right-hand denominator: $x^{2}-4x-5=(x-5)(x+1)$, so $5$ and $-1$ are excluded. Multiply both sides by $(x-5)(x+1)$: $x(x+1)-3(x-5)=18$.\nStep 2: Expand and collect: $x^{2}+x-3x+15-18=0$, so $x^{2}-2x-3=0$, which factors as $(x-3)(x+1)=0$.\nStep 3: The candidates are $3$ and $-1$; $-1$ is excluded, so $x=3$. Check: $\\dfrac{3}{-2}-\\dfrac{3}{4}=-\\dfrac{9}{4}$ and $\\dfrac{18}{9-12-5}=\\dfrac{18}{-8}=-\\dfrac{9}{4}$ ✓\n\n**Common Mistakes:**\n* $-1$: keeps the root that makes $x+1$, and the right-hand denominator, zero.\n* $2$: adds the two roots of $x^{2}-2x-3=0$ instead of solving it.\n* $5$: reports the other excluded value, which zeroes $x-5$.\n\n**Test Day Takeaway:** Factor every denominator first; the factors tell you both what to multiply by and which roots to throw away.",
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
    question: "Which expression is equivalent to $10x^{3}+15x^{2}+8x+12$?",
    choices: [
      { id: "A", text: "$(5x^2 + 4)(2x + 3)$" },
      // distractor: regroups as $3$ and $4$, which expands to $10x^3 + 20x^2 + 6x + 12$
      { id: "B", text: "$(5x^2 + 3)(2x + 4)$" },
      // distractor: flips the sign of the $4$, which expands to $10x^3 + 15x^2 - 8x - 12$
      { id: "C", text: "$(5x^2 - 4)(2x + 3)$" },
      // distractor: flips the sign of the $3$, which expands to $10x^3 - 15x^2 + 8x - 12$
      { id: "D", text: "$(5x^2 + 4)(2x - 3)$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Factor by Grouping**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Group in pairs: $5x^2(2x + 3) + 4(2x + 3) = (5x^2 + 4)(2x + 3)$.\n\n**The Full Solution:**\nStep 1: Split the four terms into two pairs: $(10x^3 + 15x^2) + (8x + 12)$.\nStep 2: Factor each pair: the first gives $5x^2(2x + 3)$ and the second gives $4(2x + 3)$.\nStep 3: Both pairs share $(2x + 3)$, so the expression is $(5x^2 + 4)(2x + 3)$. Check: expanding gives $10x^3 + 15x^2 + 8x + 12$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($(5x^2 + 3)(2x + 4)$): swaps which constant goes where; expanding gives a middle term of $20x^2$.\n* Choice C ($(5x^2 - 4)(2x + 3)$): a sign slip on the second pair, producing $-8x - 12$.\n* Choice D ($(5x^2 + 4)(2x - 3)$): a sign slip inside the shared binomial, producing $-15x^2$.\n\n**Test Day Takeaway:** After factoring each pair, the two leftover binomials must be IDENTICAL — if they are not, regroup or recheck a sign.",
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
    question: "$12x^{3}+8x^{2}+15x+k$\nIn the given expression, $k$ is a constant. If $3x+2$ is a factor of the expression, what is the value of $k$?",
    choices: [
      // distractor: reports the $5$ from the other factor rather than the product $5 \cdot 2$
      { id: "A", text: "$5$" },
      { id: "B", text: "$10$" },
      // distractor: quotes the coefficient of $x$ instead of the constant term
      { id: "C", text: "$15$" },
      // distractor: pairs $15$ with the $2$ from $3x + 2$, multiplying where it should divide
      { id: "D", text: "$30$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Factor by Grouping**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** $12x^3 + 8x^2 = 4x^2(3x + 2)$, so the last pair must be $5(3x + 2) = 15x + 10$, giving $k = 10$.\n\n**The Full Solution:**\nStep 1: Factor the first pair: $12x^3 + 8x^2 = 4x^2(3x + 2)$.\nStep 2: For $3x + 2$ to divide the whole polynomial, the second pair must also be a multiple of $3x + 2$. Since the $x$-term is $15x$, that multiple is $5(3x + 2)$.\nStep 3: Then $5(3x + 2) = 15x + 10$, so $k = 10$. Check: $(4x^2 + 5)(3x + 2) = 12x^3 + 8x^2 + 15x + 10$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): that is the multiplier in front of $3x + 2$, not the constant it produces.\n* Choice C ($15$): the coefficient of $x$ in the same pair, one column too far left.\n* Choice D ($30$): multiplies $15$ by $2$ instead of matching $15x$ to $5(3x)$.\n\n**Test Day Takeaway:** Factor the pair you can, then force the remaining pair to carry the SAME binomial — the constant falls out of that match.",
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
    question: "Which of the following is a factor of $9x^{3}+6x^{2}+12x+8$?",
    choices: [
      // distractor: pairs the $4$ from the quadratic factor with the $3x$ from the binomial
      { id: "A", text: "$3x + 4$" },
      // distractor: reports the quadratic factor with the wrong constant; the true one is $3x^2 + 4$
      { id: "B", text: "$3x^2 + 2$" },
      { id: "C", text: "$3x + 2$" },
      // distractor: keeps the constant but drops the coefficient $3$ from the shared binomial
      { id: "D", text: "$x + 2$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Factor by Grouping**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** $3x^2(3x + 2) + 4(3x + 2) = (3x^2 + 4)(3x + 2)$, so $3x + 2$ is a factor.\n\n**The Full Solution:**\nStep 1: Pair the terms: $(9x^3 + 6x^2) + (12x + 8)$.\nStep 2: Factor each pair: $3x^2(3x + 2)$ and $4(3x + 2)$.\nStep 3: The shared binomial is $3x + 2$, and the full factorization is $(3x^2 + 4)(3x + 2)$. Check: expanding gives $9x^3 + 6x^2 + 12x + 8$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3x + 4$): mixes the $3x$ of one factor with the $4$ of the other.\n* Choice B ($3x^2 + 2$): the quadratic factor is $3x^2 + 4$; the $2$ belongs to the binomial.\n* Choice D ($x + 2$): dividing by $x + 2$ leaves a remainder, since the pairs share $3x + 2$, not $x + 2$.\n\n**Test Day Takeaway:** Grouping hands you BOTH factors at once — check a candidate by seeing whether it is the binomial the two pairs share.",
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
    question: "$6x^{3}+ax^{2}+14x+21$\nIn the given expression, $a$ is a constant. The expression is equivalent to $(3x^{2}+b)(2x+c)$, where $b$ and $c$ are constants. What is the value of $a$?",
    choices: [
      // distractor: reports c = 3, the constant in the binomial, instead of a = 3c
      { id: "A", text: "$3$" },
      // distractor: reports b = 7, the constant in the quadratic factor
      { id: "B", text: "$7$" },
      { id: "C", text: "$9$" },
      // distractor: matches a to the constant term bc = 21
      { id: "D", text: "$21$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Factor by Grouping**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** $(3x^{2}+b)(2x+c)=6x^{3}+3cx^{2}+2bx+bc$. Then $2b=14$ gives $b=7$, $bc=21$ gives $c=3$, and $a=3c=9$.\n\n**The Full Solution:**\nStep 1: Expand the product: $(3x^{2}+b)(2x+c)=6x^{3}+3cx^{2}+2bx+bc$.\nStep 2: Match the $x$ terms and the constants: $2b=14$, so $b=7$; then $7c=21$, so $c=3$.\nStep 3: Match the $x^{2}$ terms: $a=3c=9$. Check: $(3x^{2}+7)(2x+3)=6x^{3}+9x^{2}+14x+21$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): reports $c$, the constant in $2x+c$, instead of the coefficient $3c$.\n* Choice B ($7$): reports $b$, the constant in the quadratic factor.\n* Choice D ($21$): matches $a$ to the constant term $bc$ instead of the $x^{2}$ coefficient.\n\n**Test Day Takeaway:** A grouping factorization has the form $(px^{2}+b)(qx+c)$; expand it once and match one coefficient at a time, starting with the ones you know.",
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
    question: "Which expression is equivalent to $x^{2}+10x+18$?",
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
    explanation: "**SAT Pattern: Completing the Square**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Half of $10$ is $5$, and $(x+5)^{2}=x^{2}+10x+25$, which is $7$ too big, so $x^{2}+10x+18=(x+5)^{2}-7$.\n\n**The Full Solution:**\nStep 1: To complete the square on $x^{2}+10x$, take half the coefficient of $x$: $\\dfrac{10}{2}=5$, and note $(x+5)^{2}=x^{2}+10x+25$.\nStep 2: Add and subtract $25$: $x^{2}+10x+18=(x^{2}+10x+25)-25+18$.\nStep 3: So the expression is $(x+5)^{2}-7$. Check: $(x+5)^{2}-7=x^{2}+10x+25-7=x^{2}+10x+18$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($(x+5)^{2}+7$): adds the leftover $7$ instead of subtracting it; this expands to $x^{2}+10x+32$.\n* Choice C ($(x+5)^{2}+18$): keeps the original constant and never subtracts the $25$, giving $x^{2}+10x+43$.\n* Choice D ($(x+10)^{2}-82$): uses $b$ instead of $\\dfrac{b}{2}$ inside the square, giving $x^{2}+20x+18$.\n\n**Test Day Takeaway:** Halve the $x$-coefficient, square it, then add and subtract it. Expanding your answer takes five seconds and catches every version of this slip.",
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
    question: "$y=x^{2}-6x+2$\nWhich equation is equivalent to the given equation?",
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
    explanation: "**SAT Pattern: Completing the Square**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Half of $-6$ is $-3$, and $(x - 3)^2 = x^2 - 6x + 9$, which is $7$ too big, so $y = (x - 3)^2 - 7$.\n\n**The Full Solution:**\nStep 1: Complete the square on $x^2 - 6x$: half of $-6$ is $-3$, and $(x - 3)^2 = x^2 - 6x + 9$.\nStep 2: Rewrite: $y = (x^2 - 6x + 9) - 9 + 2 = (x - 3)^2 - 7$.\nStep 3: So the given equation is equivalent to $y = (x - 3)^2 - 7$. Check: $(x - 3)^2 - 7 = x^2 - 6x + 9 - 7 = x^2 - 6x + 2$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($y = (x - 3)^2 + 2$): the constant $2$ was carried over unchanged; this expands to $x^2 - 6x + 11$, not $x^2 - 6x + 2$.\n* Choice C ($y = (x - 3)^2 + 11$): the $9$ was added instead of subtracted.\n* Choice D ($y = (x - 6)^2 - 34$): the full coefficient $-6$ was used inside the square, which expands to $x^2 - 12x + 2$.\n\n**Test Day Takeaway:** To complete the square, add and subtract the square of half the $x$-coefficient; expand your answer to confirm it matches the original equation.",
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
    question: "$x^{2}+14x+22$\nIf the given expression is rewritten in the form $(x+h)^{2}+k$, where $h$ and $k$ are constants, what is the value of $h+k$?",
    correctAnswer: "-20",
    explanation: "**SAT Pattern: Completing the Square**\n\n**The correct answer is $-20$.**\n\n**The Fast Way (~20s):** Half of $14$ is $7$, so $h=7$ and $k=22-49=-27$, giving $h+k=-20$.\n\n**The Full Solution:**\nStep 1: Complete the square: $x^{2}+14x=(x+7)^{2}-49$.\nStep 2: So $x^{2}+14x+22=(x+7)^{2}-49+22=(x+7)^{2}-27$, giving $h=7$ and $k=-27$.\nStep 3: Then $h+k=7+(-27)=-20$. Check at $x=0$: $(0+7)^{2}-27=49-27=22$ ✓\n\n**Common Mistakes:**\n* $22$: used $k=22-7=15$, subtracting $h$ instead of $h^{2}$.\n* $34$: dropped the sign of $k$ and computed $7+27$.\n* $-27$: reported $k$ alone instead of $h+k$.\n\n**Test Day Takeaway:** Completing the square subtracts the square of half the linear coefficient — that square is what changes the constant.",
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
    question: "$x^{2}+kx+40=(x+h)^{2}+4$\nThe given equation is true for every value of $x$, where $h$ and $k$ are positive constants. What is the value of $h+k$?",
    choices: [
      // distractor: reported h alone instead of h + k
      { id: "A", text: "$6$" },
      // distractor: reported k alone instead of h + k
      { id: "B", text: "$12$" },
      { id: "C", text: "$18$" },
      // distractor: added h to the constant term 40 instead of to k
      { id: "D", text: "$46$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Completing the Square**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Constants give $h^{2}+4=40$, so $h=6$; then $k=2h=12$ and $h+k=18$.\n\n**The Full Solution:**\nStep 1: Expand the right side: $(x+h)^{2}+4=x^{2}+2hx+h^{2}+4$.\nStep 2: Match constants: $h^{2}+4=40$, so $h^{2}=36$ and $h=6$ because $h$ is positive.\nStep 3: Match the $x$-terms: $k=2h=12$, so $h+k=18$. Check: $(x+6)^{2}+4=x^{2}+12x+40$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): reports $h$ alone.\n* Choice B ($12$): reports $k$ alone.\n* Choice D ($46$): adds $h$ to the constant term $40$ instead of to $k$.\n\n**Test Day Takeaway:** Matching two forms means matching every coefficient — the constants pin down $h$, and the $x$-terms then pin down $k$.",
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
    question: "$g(x)=(x-5)^{2}-31$\nThe function $g$ can be written in the form $g(x)=x^{2}+bx+c$, where $b$ and $c$ are constants. What is the value of $c-b$?",
    choices: [
      // distractor: forgot the +25 from expanding the square, using c = -31
      { id: "A", text: "$-21$" },
      // distractor: sign slip, using b = 10 instead of b = -10
      { id: "B", text: "$-16$" },
      // distractor: computed b - c instead of c - b
      { id: "C", text: "$-4$" },
      { id: "D", text: "$4$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Completing the Square**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Expanding gives $x^{2}-10x-6$, so $c-b=-6-(-10)=4$.\n\n**The Full Solution:**\nStep 1: Expand: $(x-5)^{2}-31=x^{2}-10x+25-31$.\nStep 2: Combine constants: $g(x)=x^{2}-10x-6$, so $b=-10$ and $c=-6$.\nStep 3: Then $c-b=-6+10=4$. Check at $x=0$: $g(0)=25-31=-6$, matching $c=-6$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-21$): forgets the $+25$ from expanding the square, using $c=-31$.\n* Choice B ($-16$): sign slip, using $b=10$ instead of $-10$.\n* Choice C ($-4$): computes $b-c$ instead of $c-b$.\n\n**Test Day Takeaway:** Expanding vertex form always leaves a leftover square — that $+25$ is what makes $c$ different from the vertex's $y$-value.",
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
    question: "$f(x)=x^{2}-kx+45$\nIn the given function, $k$ is a positive constant. The minimum value of $f(x)$ is $9$. What is the value of $k$?",
    correctAnswer: "12",
    explanation: "**SAT Pattern: Completing the Square**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~25s):** The minimum value of $x^{2}-kx+45$ is $45-\\dfrac{k^{2}}{4}$, so $\\dfrac{k^{2}}{4}=36$, $k^{2}=144$, and $k=12$.\n\n**The Full Solution:**\nStep 1: Complete the square: $x^{2}-kx+45=\\left(x-\\dfrac{k}{2}\\right)^{2}+45-\\dfrac{k^{2}}{4}$.\nStep 2: The squared term is never negative, so the minimum value of $f(x)$ is $45-\\dfrac{k^{2}}{4}$. Set it equal to $9$: $\\dfrac{k^{2}}{4}=36$.\nStep 3: So $k^{2}=144$ and $k=12$, since $k$ is positive. Check: $x^{2}-12x+45=(x-6)^{2}+9$, whose minimum value is $9$ ✓\n\n**Common Mistakes:**\n* $6$: solves $45-k^{2}=9$, forgetting to divide $k^{2}$ by $4$.\n* $36$: reports $\\dfrac{k^{2}}{4}$ instead of $k$.\n* $-12$: takes the negative square root although $k$ is positive.\n\n**Test Day Takeaway:** For $x^{2}-kx+c$, the minimum value is $c-\\dfrac{k^{2}}{4}$; set it equal to the given minimum and the constant falls out in one line.",
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
    question: "$3x^{2}+12x+c$\nIn the given expression, $c$ is a constant. If the least possible value of the expression is $0$, what is the value of $c$?",
    choices: [
      // distractor: squared the vertex input b/(2a) = 2 instead of computing b^2/(4a)
      { id: "A", text: "$4$" },
      { id: "B", text: "$12$" },
      // distractor: used b^2/4 = 36, omitting the factor a in the denominator
      { id: "C", text: "$36$" },
      // distractor: multiplied b^2/4 = 36 by a = 3 instead of dividing by a
      { id: "D", text: "$108$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Completing the Square**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The least value of $ax^{2}+bx+c$ is $c-\\dfrac{b^{2}}{4a}$, so $c-\\dfrac{144}{12}=0$ and $c=12$.\n\n**The Full Solution:**\nStep 1: Factor the leading coefficient: $3x^{2}+12x+c=3(x^{2}+4x)+c$.\nStep 2: Complete the square inside: $3\\left[(x+2)^{2}-4\\right]+c=3(x+2)^{2}-12+c$.\nStep 3: The least value is $c-12$, so $c-12=0$ and $c=12$. Check: $3x^{2}+12x+12=3(x+2)^{2}$, whose least value is $0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): squares the vertex input $\\dfrac{b}{2a}=2$ instead of computing $\\dfrac{b^{2}}{4a}$.\n* Choice C ($36$): uses $\\dfrac{b^{2}}{4}=36$, omitting the factor $a$ in the denominator.\n* Choice D ($108$): multiplies $36$ by $a=3$ instead of dividing.\n\n**Test Day Takeaway:** Factor the leading coefficient out of the $x$-terms first; forgetting it is the whole trap in this item.",
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
    question: "The graph of $y=x^{2}+bx+c$, where $b$ and $c$ are constants, is shown. The vertex of the graph is the marked point. What is the value of $b+c$?",
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
    skills: ["finding-roots-factoring"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "For the polynomial function $p$, the table shows four values of $x$ and their corresponding values of $p(x)$. Which of the following must be a factor of $p(x)$?",
    diagram: { type: "table", params: { xHeader: "x", yHeader: "p(x)", rows: [["-3", "12"], ["0", "6"], ["3", "0"], ["5", "14"]] } },
    choices: [
      // distractor: treats the y-intercept value p(0) = 6 as a zero
      { id: "A", text: "$x - 6$" },
      { id: "B", text: "$x - 3$" },
      // distractor: flips the sign of the zero x = 3
      { id: "C", text: "$x + 3$" },
      // distractor: treats p(0) = 6 as a zero and flips the sign
      { id: "D", text: "$x + 6$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Polynomial Factoring with Given Factor**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The table shows $p(3) = 0$, so $x = 3$ is a zero of $p$ and $x - 3$ is a factor.\n\n**The Full Solution:**\nStep 1: If $p(a) = 0$, then $x - a$ is a factor of $p(x)$.\nStep 2: The table shows $p(3) = 0$.\nStep 3: So $x - 3$ must be a factor of $p(x)$. Check: $x - 3$ equals $0$ at $x = 3$, exactly where the table shows $p(x) = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($x - 6$): treats $6$, the value of $p(0)$, as a zero; $p(6)$ is not given.\n* Choice C ($x + 3$): flips the sign; $x + 3$ is a factor only if $p(-3) = 0$, but $p(-3) = 12$.\n* Choice D ($x + 6$): treats the output $6$ as a zero and flips the sign as well.\n\n**Test Day Takeaway:** A zero at $x = a$ means the factor $x - a$; look for the row where the output is $0$.",
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
    question: "$p(x)=x^{3}-6x^{2}+11x+7$\nWhat is the value of $p(4)$?",
    correctAnswer: "19",
    explanation: "**SAT Pattern: Polynomial Remainder Theorem**\n\n**The correct answer is $19$.**\n\n**The Fast Way (~20s):** $p(4) = 64 - 96 + 44 + 7 = 19$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 4$ into every term of $p(x)$.\nStep 2: $4^{3} = 64$, $6(4)^{2} = 96$, and $11(4) = 44$.\nStep 3: $p(4) = 64 - 96 + 44 + 7 = 19$. Check: $64 - 96 = -32$, $-32 + 44 = 12$, and $12 + 7 = 19$ ✓\n\n**Common Mistakes:**\n* $12$: drops the constant term $7$.\n* $211$: adds $6(4)^{2}$ instead of subtracting it: $64 + 96 + 44 + 7 = 211$.\n* $-197$: substitutes $x = -4$ instead of $x = 4$.\n\n**Test Day Takeaway:** Evaluate a polynomial one term at a time, keeping every sign.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "polynomial-remainder-theorem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-301",
    domain: "advanced-math",
    skills: ["finding-roots-factoring"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "$p(x) = 2x^{3} - 7x^{2} + cx - 9$\nIn the given equation, $c$ is a constant, and $x - 3$ is a factor of $p(x)$. What is the value of $c$?",
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
    explanation: "**SAT Pattern: Polynomial Factoring with Given Factor**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** If $x - 3$ is a factor, then $p(3) = 0$. Substituting gives $54 - 63 + 3c - 9 = 0$, so $3c = 18$ and $c = 6$.\n\n**The Full Solution:**\nStep 1: The factor theorem says $x - 3$ is a factor of $p(x)$ exactly when $p(3) = 0$.\nStep 2: $p(3) = 2(27) - 7(9) + c(3) - 9 = 54 - 63 + 3c - 9 = 3c - 18$.\nStep 3: Setting $3c - 18 = 0$ gives $c = 6$. Check: with $c = 6$, $p(3) = 54 - 63 + 18 - 9 = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0$): treats the constant term as $+9$, solving $54 - 63 + 3c + 9 = 0$.\n* Choice B ($3$): drops the constant term $-9$ entirely, solving $54 - 63 + 3c = 0$.\n* Choice D ($18$): substitutes $x = 3$ into every term except $cx$, solving $54 - 63 + c - 9 = 0$.\n\n**Test Day Takeaway:** A factor $x - r$ means the polynomial is zero at $x = r$ — substitute $r$, keep every term, and solve the resulting linear equation.",
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
    question: "$q(x) = x^{3} + mx^{2} + nx - 4$\nFor the given function $q$, $m$ and $n$ are constants. The table shows two values of $x$ and their corresponding values of $q(x)$. Which of the following must be true?",
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
    explanation: "**SAT Pattern: Polynomial Remainder Theorem**\n\n**Choice D is correct.**\n\n**The Fast Way (~35s):** The table shows $q(2) = 10$. Substituting $x = 2$ gives $8 + 4m + 2n - 4 = 10$, which reduces to $2m + n = 3$.\n\n**The Full Solution:**\nStep 1: The second row of the table says $q(2) = 10$, so substitute $x = 2$ into the definition of $q$.\nStep 2: $q(2) = 8 + 4m + 2n - 4 = 4m + 2n + 4$, so $4m + 2n + 4 = 10$.\nStep 3: Subtracting $4$ gives $4m + 2n = 6$, and dividing by $2$ gives $2m + n = 3$. Check: $m = 1$ and $n = 1$ satisfy this, and $q(x) = x^3 + x^2 + x - 4$ does give $q(2) = 8 + 4 + 2 - 4 = 10$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2m - n = 11$): substitutes $x = -2$ instead of $x = 2$, giving $-8 + 4m - 2n - 4 = 10$.\n* Choice B ($2m + n = -2$): sets $q(2) = 0$ instead of the listed value $10$.\n* Choice C ($2m + n = 1$): drops the constant term $-4$ when substituting, solving $8 + 4m + 2n = 10$.\n\n**Test Day Takeaway:** A table entry is an instruction to substitute: put the listed $x$ into the expression and set it equal to the listed output.",
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
    question: "$p(x) = (x + 3)(2x^{2} - x + 4) - 5x$\nWhat is the value of $p(2)$?",
    correctAnswer: "40",
    explanation: "**SAT Pattern: Polynomial Remainder Theorem**\n\n**The correct answer is $40$.**\n\n**The Fast Way (~25s):** $p(2) = (5)(8 - 2 + 4) - 10 = 50 - 10 = 40$; the factored form never has to be expanded.\n\n**The Full Solution:**\nStep 1: Evaluate the first factor at $x = 2$: $2 + 3 = 5$.\nStep 2: Evaluate the second factor at $x = 2$: $2(2)^{2} - 2 + 4 = 8 - 2 + 4 = 10$.\nStep 3: Combine: $p(2) = 5 \\cdot 10 - 5(2) = 50 - 10 = 40$. Check: expanding gives $p(x) = 2x^{3} + 5x^{2} - 4x + 12$, and $16 + 20 - 8 + 12 = 40$ ✓\n\n**Common Mistakes:**\n* $50$: forgets the trailing $-5x$.\n* $24$: substitutes $x = -2$ instead of $x = 2$: $(1)(8 + 2 + 4) + 10 = 24$.\n\n**Test Day Takeaway:** Evaluate a function exactly as it is written; a factored form is faster to substitute into than to expand.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "polynomial-remainder-theorem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-304",
    domain: "advanced-math",
    skills: ["finding-roots-factoring"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The table shows three values of $x$ and their corresponding values of $p(x)$ for the polynomial function $p$. The function $q$ is defined by $q(x) = p(x) - 2x + 1$. Which of the following must be a factor of $q(x)$?",
    diagram: { type: "dataTable", params: { headers: ["x", "p(x)"], rows: [["-1", "8"], ["1", "-4"], ["3", "5"]] } },
    choices: [
      // distractor: flips the sign of the zero x = 3
      { id: "A", text: "$x + 3$" },
      // distractor: picks the row where p(x) is negative; q(1) = -5, not 0
      { id: "B", text: "$x - 1$" },
      { id: "C", text: "$x - 3$" },
      // distractor: treats the output p(3) = 5 as a zero
      { id: "D", text: "$x - 5$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Polynomial Factoring with Given Factor**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** $q(3) = p(3) - 6 + 1 = 5 - 5 = 0$, so $x - 3$ is a factor of $q(x)$.\n\n**The Full Solution:**\nStep 1: $q$ is a polynomial, and $x - a$ is a factor of $q(x)$ exactly when $q(a) = 0$.\nStep 2: Use the table: $q(-1) = 8 + 2 + 1 = 11$, $q(1) = -4 - 2 + 1 = -5$, and $q(3) = 5 - 6 + 1 = 0$.\nStep 3: The zero at $x = 3$ gives the factor $x - 3$. Check: $q(3) = p(3) - 2(3) + 1 = 5 - 6 + 1 = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($x + 3$): flips the sign; $x + 3$ would require $q(-3) = 0$, and the table says nothing about $x = -3$.\n* Choice B ($x - 1$): $p(1)$ is negative, but $q(1) = -5$, not $0$.\n* Choice D ($x - 5$): treats the output $p(3) = 5$ as if it were a zero.\n\n**Test Day Takeaway:** To find a factor of a new function, compute its value at each listed input and look for $0$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "polynomial-remainder-theorem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-305",
    domain: "advanced-math",
    skills: ["finding-roots-factoring"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "Values of the polynomial function $f$ at three values of $x$ are shown in the table. Which of the following must be a factor of $f(x) - 5$?",
    diagram: { type: "table", params: { xHeader: "x", yHeader: "f(x)", rows: [["-2", "5"], ["1", "-3"], ["4", "5"]] } },
    choices: [
      // distractor: flips the sign: f(4) - 5 = 0 makes x - 4 a factor, and x + 4 would need f(-4) - 5 = 0
      { id: "A", text: "$x + 4$" },
      { id: "B", text: "$x - 4$" },
      // distractor: treats the output 5 as an input, writing x - 5
      { id: "C", text: "$x - 5$" },
      // distractor: reads the output -3 at x = 1 as a zero, writing x + 3
      { id: "D", text: "$x + 3$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Polynomial Factoring with Given Factor**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** Let $g(x) = f(x) - 5$. The table gives $g(-2) = 0$ and $g(4) = 0$, so $x + 2$ and $x - 4$ are factors of $g(x)$, and only $x - 4$ is a choice.\n\n**The Full Solution:**\nStep 1: $g(x) = f(x) - 5$ is a polynomial, and $x - a$ is a factor of $g(x)$ exactly when $g(a) = 0$.\nStep 2: From the table, $g(-2) = 5 - 5 = 0$, $g(1) = -3 - 5 = -8$, and $g(4) = 5 - 5 = 0$.\nStep 3: The zeros $x = -2$ and $x = 4$ give the factors $x + 2$ and $x - 4$; of the choices, only $x - 4$ appears. Check: $g(4) = f(4) - 5 = 5 - 5 = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($x + 4$): flips the sign. A factor $x + 4$ would need $g(-4) = 0$, and the table says nothing about $x = -4$.\n* Choice C ($x - 5$): treats the output $5$ as if it were an input that makes the expression zero.\n* Choice D ($x + 3$): reads the output $-3$ at $x = 1$ as a zero, but $g(1) = -8$, not $0$.\n\n**Test Day Takeaway:** For a factor of $f(x) - c$, look for the inputs where $f(x) = c$; each such input $a$ gives the factor $x - a$.",
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
    question: "$p(x) = x^{3} + kx^{2} - 2x + 5$\nIn the given function, $k$ is a constant. If $p(4) = 5p(-2)$, what is the value of $k$?",
    correctAnswer: "14",
    explanation: "**SAT Pattern: Polynomial Remainder Theorem**\n\n**The correct answer is $14$.**\n\n**The Fast Way (~45s):** $p(4) = 61 + 16k$ and $p(-2) = 1 + 4k$; setting $61 + 16k = 5(1 + 4k)$ gives $56 = 4k$, so $k = 14$.\n\n**The Full Solution:**\nStep 1: Evaluate $p(4) = 64 + 16k - 8 + 5 = 61 + 16k$.\nStep 2: Evaluate $p(-2) = -8 + 4k + 4 + 5 = 1 + 4k$.\nStep 3: Set $61 + 16k = 5(1 + 4k) = 5 + 20k$, so $56 = 4k$ and $k = 14$. Check: $p(4) = 61 + 224 = 285$, $p(-2) = 1 + 56 = 57$, and $5 \\cdot 57 = 285$ ✓\n\n**Common Mistakes:**\n* $-4$: attaches the $5$ to the wrong side, solving $5p(4) = p(-2)$: $305 + 80k = 1 + 4k$.\n* $-24$: substitutes $x = -4$ and $x = 2$ instead of $x = 4$ and $x = -2$.\n\n**Test Day Takeaway:** Write each function value as an expression in the unknown constant first; the given relationship then becomes a linear equation.",
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
    skills: ["finding-roots-factoring"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The height $y$, in meters, of a tunnel's ceiling above the road $x$ meters from the center of the tunnel is modeled by $y = -\\frac{1}{4}x^{2} + 9$, and the graph of this model is shown. For what positive value of $x$ is $y = 5$?",
    diagram: { type: "parabola", params: { vertex: { h: 0, k: 9 }, a: -0.25, xRange: [-8, 8], yRange: [-2, 10], xTickInterval: 2, yTickInterval: 2, gridInterval: 2, showVertex: false } },
    choices: [
      // distractor: drops the 1/4, solving x^2 = 4
      { id: "A", text: "$2$" },
      { id: "B", text: "$4$" },
      // distractor: finds where the ceiling meets the road, at height 0
      { id: "C", text: "$6$" },
      // distractor: reports x^2 instead of x
      { id: "D", text: "$16$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $-\\frac{1}{4}x^{2} + 9 = 5$ gives $\\frac{1}{4}x^{2} = 4$, so $x^{2} = 16$ and $x = 4$.\n\n**The Full Solution:**\nStep 1: Set the height equal to $5$: $-\\frac{1}{4}x^{2} + 9 = 5$.\nStep 2: Subtract $9$ and multiply by $-4$: $x^{2} = 16$.\nStep 3: The positive solution is $x = 4$. Check: $-\\frac{1}{4}(16) + 9 = -4 + 9 = 5$, and the graph is at height $5$ at $x = 4$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): drops the $\\frac{1}{4}$, solving $x^{2} = 4$.\n* Choice C ($6$): finds where the ceiling meets the road: $-\\frac{1}{4}(36) + 9 = 0$.\n* Choice D ($16$): stops at $x^{2} = 16$ without taking the square root.\n\n**Test Day Takeaway:** Set the model equal to the given height and solve; the context tells you which solution to keep.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "quadratic-inequality-from-context",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-308",
    domain: "advanced-math",
    skills: ["finding-roots-factoring"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A rectangular rug is $3$ feet longer than it is wide, and its area is $54$ square feet. What is the width, in feet, of the rug?",
    choices: [
      { id: "A", text: "$6$" },
      // distractor: gives the length instead of the width
      { id: "B", text: "$9$" },
      // distractor: divides the area by 3
      { id: "C", text: "$18$" },
      // distractor: divides the area by 2
      { id: "D", text: "$27$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** $w(w + 3) = 54$ gives $w^{2} + 3w - 54 = 0$, or $(w + 9)(w - 6) = 0$, so $w = 6$.\n\n**The Full Solution:**\nStep 1: Let $w$ be the width, in feet; the length is $w + 3$, so $w(w + 3) = 54$.\nStep 2: Rearrange and factor: $w^{2} + 3w - 54 = 0$, so $(w + 9)(w - 6) = 0$.\nStep 3: A width must be positive, so $w = 6$. Check: $6 \\times 9 = 54$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($9$): this is the length, $6 + 3$, not the width.\n* Choice C ($18$): divides $54$ by $3$, using the difference in side lengths as a side.\n* Choice D ($27$): divides $54$ by $2$.\n\n**Test Day Takeaway:** Write the area as width times length in terms of one variable, then keep the positive solution.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "quadratic-inequality-from-context",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-309",
    domain: "advanced-math",
    skills: ["finding-roots-factoring"],
    difficulty: "medium",
    type: "fill-in",
    question: "$P(n) = -n^{2} + 34n - 168$\nThe function $P$ gives a store's daily profit, in dollars, from selling $n$ posters. What is the least value of $n$ for which $P(n) = 0$?",
    correctAnswer: "6",
    explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~30s):** $-n^{2} + 34n - 168 = 0$ is $n^{2} - 34n + 168 = 0$, or $(n - 6)(n - 28) = 0$, so the least value is $6$.\n\n**The Full Solution:**\nStep 1: Set $P(n) = 0$ and multiply by $-1$: $n^{2} - 34n + 168 = 0$.\nStep 2: Factor: two numbers with product $168$ and sum $34$ are $6$ and $28$, so $(n - 6)(n - 28) = 0$.\nStep 3: The solutions are $n = 6$ and $n = 28$; the least is $6$. Check: $P(6) = -36 + 204 - 168 = 0$ ✓\n\n**Common Mistakes:**\n* $28$: gives the greater solution.\n* $17$: gives the number of posters for the greatest profit, halfway between the solutions.\n* $7$: gives the least number of posters for a positive profit, not a profit of $0$.\n\n**Test Day Takeaway:** Set the function equal to the given value, factor, and read which solution the question asks for.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "quadratic-inequality-from-context",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-310",
    domain: "advanced-math",
    skills: ["finding-roots-factoring"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The height $y$, in meters, of a cable above a road $x$ meters from the cable's left end is modeled by $y = \\frac{1}{2}x^{2} - 4x + 12$, and the graph of this model is shown. For which values of $x$ is $y = 6$?",
    diagram: { type: "parabola", params: { vertex: { h: 4, k: 4 }, a: 0.5, xRange: [0, 8], yRange: [0, 14], xTickInterval: 2, yTickInterval: 2, gridInterval: 2, showVertex: false } },
    choices: [
      // distractor: keeps only the smaller solution
      { id: "A", text: "$2$ only" },
      // distractor: gives the x-value of the lowest point, where the height is 4
      { id: "B", text: "$4$ only" },
      // distractor: keeps only the larger solution
      { id: "C", text: "$6$ only" },
      { id: "D", text: "$2$ and $6$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**Choice D is correct.**\n\n**The Fast Way (~35s):** $\\frac{1}{2}x^{2} - 4x + 12 = 6$ gives $x^{2} - 8x + 12 = 0$, or $(x - 2)(x - 6) = 0$, so $x = 2$ and $x = 6$.\n\n**The Full Solution:**\nStep 1: Set the height equal to $6$: $\\frac{1}{2}x^{2} - 4x + 12 = 6$.\nStep 2: Subtract $6$ and multiply by $2$: $x^{2} - 8x + 12 = 0$, so $(x - 2)(x - 6) = 0$.\nStep 3: Both $x = 2$ and $x = 6$ are distances along the cable shown, so the cable is $6$ meters high at both. Check: $\\frac{1}{2}(4) - 8 + 12 = 6$ and $\\frac{1}{2}(36) - 24 + 12 = 6$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$ only): stops after the first solution; the cable is also $6$ meters high at $x = 6$.\n* Choice B ($4$ only): this is the lowest point of the cable, where the height is $4$ meters.\n* Choice C ($6$ only): keeps only the larger solution; $x = 2$ also works.\n\n**Test Day Takeaway:** A height below the starting value is usually reached twice by a U-shaped cable; check both solutions against the graph.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "quadratic-inequality-from-context",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-311",
    domain: "advanced-math",
    skills: ["finding-roots-factoring"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A rectangular garden is enclosed by $48$ meters of fencing and has an area of $140$ square meters. What is the difference, in meters, between the lengths of the longer and shorter sides of the garden?",
    choices: [
      { id: "A", text: "$4$" },
      // distractor: gives the shorter side
      { id: "B", text: "$10$" },
      // distractor: gives the longer side
      { id: "C", text: "$14$" },
      // distractor: gives half the perimeter, the sum of the two sides
      { id: "D", text: "$24$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**Choice A is correct.**\n\n**The Fast Way (~45s):** The two sides add to $24$ and multiply to $140$, so they are $10$ and $14$, a difference of $4$.\n\n**The Full Solution:**\nStep 1: Half the perimeter is $24$, so if one side is $w$ meters, the other is $24 - w$ meters, and $w(24 - w) = 140$.\nStep 2: Rearrange and factor: $w^{2} - 24w + 140 = 0$, so $(w - 10)(w - 14) = 0$.\nStep 3: The sides are $10$ and $14$ meters, and the difference is $14 - 10 = 4$. Check: $2(10 + 14) = 48$ and $10 \\times 14 = 140$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($10$): this is the shorter side, not the difference.\n* Choice C ($14$): this is the longer side, not the difference.\n* Choice D ($24$): this is half the perimeter, the sum of the two sides.\n\n**Test Day Takeaway:** Perimeter gives the sum of two sides and area gives their product; one quadratic then gives both sides.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "quadratic-inequality-from-context",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-312",
    domain: "advanced-math",
    skills: ["finding-roots-factoring"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "$h(t) = -16t^{2} + 128t$\nThe function $h$ gives the height, in feet, of a model rocket $t$ seconds after it is launched from the ground. How many seconds after launch is the rocket first $240$ feet above the ground?",
    choices: [
      { id: "A", text: "$3$" },
      // distractor: gives the time of the greatest height
      { id: "B", text: "$4$" },
      // distractor: gives the second time, on the way down
      { id: "C", text: "$5$" },
      // distractor: gives the time the rocket returns to the ground
      { id: "D", text: "$8$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** $-16t^{2} + 128t = 240$ gives $t^{2} - 8t + 15 = 0$, or $(t - 3)(t - 5) = 0$; the first time is $t = 3$.\n\n**The Full Solution:**\nStep 1: Set the height equal to $240$: $-16t^{2} + 128t = 240$.\nStep 2: Divide by $-16$ and rearrange: $t^{2} - 8t + 15 = 0$, so $(t - 3)(t - 5) = 0$.\nStep 3: The rocket is at $240$ feet at $t = 3$ (going up) and $t = 5$ (coming down); the first time is $3$ seconds. Check: $-16(9) + 128(3) = -144 + 384 = 240$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($4$): this is the time of the greatest height, $h(4) = 256$ feet.\n* Choice C ($5$): this is the second time the rocket is at $240$ feet, on the way down.\n* Choice D ($8$): this is when the rocket returns to the ground, $h(8) = 0$.\n\n**Test Day Takeaway:** A launched object passes each height below its peak twice; \"first\" means the smaller solution.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "quadratic-inequality-from-context",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-313",
    domain: "advanced-math",
    skills: ["finding-roots-factoring"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The function $h$ models the depth, in centimeters, of the water in a tank $x$ minutes after a drain is opened, where $h(x) = x^{2} - 18x + 90$ for $0 \\le x \\le 9$. How many minutes after the drain is opened is the depth $25$ centimeters?",
    choices: [
      { id: "A", text: "$5$" },
      // distractor: gives the time of the least depth, 9 centimeters
      { id: "B", text: "$9$" },
      // distractor: keeps the solution outside 0 <= x <= 9
      { id: "C", text: "$13$" },
      // distractor: gives the sum of the two solutions
      { id: "D", text: "$18$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** $x^{2} - 18x + 90 = 25$ gives $(x - 5)(x - 13) = 0$; only $x = 5$ is in $0 \\le x \\le 9$.\n\n**The Full Solution:**\nStep 1: Set the depth equal to $25$: $x^{2} - 18x + 90 = 25$, so $x^{2} - 18x + 65 = 0$.\nStep 2: Factor: $(x - 5)(x - 13) = 0$, so $x = 5$ or $x = 13$.\nStep 3: The model applies only for $0 \\le x \\le 9$, so $x = 13$ is out; the answer is $5$ minutes. Check: $25 - 90 + 90 = 25$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($9$): this is the end of the model's domain, where the depth is least, $h(9) = 9$ centimeters.\n* Choice C ($13$): solves the equation correctly but keeps the solution outside $0 \\le x \\le 9$.\n* Choice D ($18$): this is the sum of the two solutions, not a solution.\n\n**Test Day Takeaway:** After solving, check each solution against the interval where the model applies.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "quadratic-inequality-from-context",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-am-314",
    domain: "advanced-math",
    skills: ["finding-roots-factoring"],
    difficulty: "medium",
    type: "fill-in",
    question: "A rectangular photograph is $x$ inches wide and $x + 4$ inches long. The area of the photograph is $96$ square inches. What is the value of $x$?",
    correctAnswer: "8",
    explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~25s):** $x(x + 4) = 96$ gives $x^{2} + 4x - 96 = 0$, or $(x + 12)(x - 8) = 0$, so $x = 8$.\n\n**The Full Solution:**\nStep 1: The area is width times length: $x(x + 4) = 96$.\nStep 2: Rearrange and factor: $x^{2} + 4x - 96 = 0$, so $(x + 12)(x - 8) = 0$.\nStep 3: A width must be positive, so $x = 8$. Check: $8 \\times 12 = 96$ ✓\n\n**Common Mistakes:**\n* $12$: gives the length, $x + 4$, instead of the width.\n* $-12$: keeps the negative solution, which cannot be a width.\n* $24$: divides $96$ by $4$.\n\n**Test Day Takeaway:** Write the area in one variable, factor, and keep the solution that makes sense as a length.",
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
    question: "$\\sqrt{2x - 6} = 4$\nWhat is the solution to the given equation?",
    choices: [
      // distractor: never squares
      { id: "A", text: "$5$" },
      // distractor: doubles 4 instead of squaring it
      { id: "B", text: "$7$" },
      { id: "C", text: "$11$" },
      // distractor: solves 2x = 22 but does not divide by 2
      { id: "D", text: "$22$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Radical Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Square both sides: $2x - 6 = 16$, so $2x = 22$ and $x = 11$.\n\n**The Full Solution:**\nStep 1: The radical already stands alone, so squaring both sides is legal: $\\left(\\sqrt{2x - 6}\\right)^2 = 4^2$ gives $2x - 6 = 16$.\nStep 2: Adding $6$ to each side gives $2x = 22$.\nStep 3: Dividing by $2$ gives $x = 11$. Check: $\\sqrt{2(11) - 6} = \\sqrt{16} = 4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): never squares, solving $2x - 6 = 4$.\n* Choice B ($7$): doubles the $4$ instead of squaring it, solving $2x - 6 = 8$.\n* Choice D ($22$): reaches $2x = 22$ but stops without dividing by $2$.\n\n**Test Day Takeaway:** Squaring undoes a square root only when the radical stands alone,, and the equation is not solved until $x$ itself stands alone.",
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
    question: "$\\sqrt{3x + 4} = 7$\nWhat value of $x$ is the solution to the given equation?",
    correctAnswer: "15",
    explanation: "**SAT Pattern: Radical Equation**\n\n**The correct answer is $15$.**\n\n**The Fast Way (~20s):** Square both sides to get $3x + 4 = 49$, so $3x = 45$ and $x = 15$.\n\n**The Full Solution:**\nStep 1: The radical is already alone on the left side, so square both sides: $\\left(\\sqrt{3x + 4}\\right)^{2} = 7^{2}$.\nStep 2: The radical disappears, leaving $3x + 4 = 49$.\nStep 3: Subtract $4$ and divide by $3$: $3x = 45$, so $x = 15$. Check: $\\sqrt{3(15) + 4} = \\sqrt{49} = 7$ ✓\n\n**Common Mistakes:**\n* $1$ — solving $3x + 4 = 7$ without squaring the $7$.\n* $45$ — stopping at $3x = 45$ instead of dividing by $3$.\n\n**Test Day Takeaway:** Isolate the radical, square once, and finish the linear equation; then substitute back to confirm the square root comes out to the given value.",
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
    question: "The function $f$ is defined by $f(x) = \\sqrt{4x + 12} - 2$. If $f(a) = 8$, what is the value of $a$?",
    choices: [
      // distractor: drops the -2, solving sqrt(4a + 12) = 8, so 4a + 12 = 64
      { id: "A", text: "$13$" },
      { id: "B", text: "$22$" },
      // distractor: ignores the +12 under the radical, solving 4a = 100
      { id: "C", text: "$25$" },
      // distractor: adds 12 instead of subtracting it, solving 4a = 112
      { id: "D", text: "$28$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Radical Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Add $2$ to get $\\sqrt{4a + 12} = 10$, square to get $4a + 12 = 100$, and solve: $a = 22$.\n\n**The Full Solution:**\nStep 1: $f(a) = 8$ means $\\sqrt{4a + 12} - 2 = 8$. Add $2$ to isolate the radical: $\\sqrt{4a + 12} = 10$.\nStep 2: Square both sides: $4a + 12 = 100$.\nStep 3: Subtract $12$ and divide by $4$: $4a = 88$, so $a = 22$. Check: $f(22) = \\sqrt{88 + 12} - 2 = 10 - 2 = 8$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($13$): leaves out the $-2$, solving $\\sqrt{4a + 12} = 8$, so $4a + 12 = 64$.\n* Choice C ($25$): ignores the $12$ under the radical, solving $4a = 100$.\n* Choice D ($28$): adds $12$ to $100$ instead of subtracting it, solving $4a = 112$.\n\n**Test Day Takeaway:** Get the radical alone before squaring; squaring $\\sqrt{4a + 12} - 2$ as it stands does not remove the root.",
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
    question: "$\\sqrt{x - 3} = 2\\sqrt{x - 9}$\nWhat is the solution to the given equation?",
    choices: [
      // distractor: squares the 2 but multiplies only the x by 4, solving x - 3 = 4x - 9
      { id: "A", text: "$2$" },
      { id: "B", text: "$11$" },
      // distractor: forgets to square the coefficient 2, solving x - 3 = 2(x - 9)
      { id: "C", text: "$15$" },
      // distractor: stops at 3x = 33 without dividing by 3
      { id: "D", text: "$33$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Radical Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Squaring gives $x - 3 = 4(x - 9) = 4x - 36$, so $3x = 33$ and $x = 11$.\n\n**The Full Solution:**\nStep 1: Square both sides. The coefficient $2$ is squared too: $x - 3 = 4(x - 9)$.\nStep 2: Distribute: $x - 3 = 4x - 36$, so $33 = 3x$.\nStep 3: Divide by $3$: $x = 11$. Check: $\\sqrt{11 - 3} = \\sqrt{8} = 2\\sqrt{2}$ and $2\\sqrt{11 - 9} = 2\\sqrt{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): squares the $2$ but multiplies only the $x$ by $4$, solving $x - 3 = 4x - 9$. At $x = 2$ both radicands are negative.\n* Choice C ($15$): forgets to square the coefficient, solving $x - 3 = 2(x - 9)$.\n* Choice D ($33$): stops at $3x = 33$ without dividing by $3$.\n\n**Test Day Takeaway:** Squaring $a\\sqrt{u}$ gives $a^{2}u$: the coefficient is squared, and it multiplies the entire radicand.",
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
    question: "$\\sqrt{x + k} = x - 3$\nIn the given equation, $k$ is a constant, and $x = 7$ is a solution to the equation. What is the value of $k$?",
    correctAnswer: "9",
    explanation: "**SAT Pattern: Radical Equation**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~30s):** At $x=7$ the right side is $4$, so $\\sqrt{7+k}=4$, giving $7+k=16$ and $k=9$.\n\n**The Full Solution:**\n\nStep 1: Substitute $x=7$: $\\sqrt{7+k}=7-3=4$.\n\nStep 2: Square both sides: $7+k=16$.\n\nStep 3: Solve: $k=9$. Check: with $k=9$ the equation reads $\\sqrt{x+9}=x-3$, and at $x=7$ both sides equal $4$.\n\n**Common Mistakes:**\n\n* Failing to square the right side, so $7+k=4$ and $k=-3$.\n* Squaring $x-3$ as $x^{2}-9$, so $7+k=49-9=40$ and $k=33$.\n\n**Test Day Takeaway:** When a solution is handed to you, substitute first — the radical becomes a number and the unknown constant falls out in one line.",
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
    question: "$\\sqrt{x + 9} - \\sqrt{x} = 1$\nWhat is the solution to the given equation?",
    choices: [
      // distractor: reports the value of sqrt(x) instead of x
      { id: "A", text: "$4$" },
      { id: "B", text: "$16$" },
      // distractor: reports x + 9, the radicand of the first square root
      { id: "C", text: "$25$" },
      // distractor: leaves out the 2 in the middle term when squaring 1 + sqrt(x), so sqrt(x) = 8
      { id: "D", text: "$64$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Radical Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Write $\\sqrt{x + 9} = 1 + \\sqrt{x}$ and square: the $x$ terms cancel, leaving $8 = 2\\sqrt{x}$, so $\\sqrt{x} = 4$ and $x = 16$.\n\n**The Full Solution:**\nStep 1: Isolate one radical: $\\sqrt{x + 9} = 1 + \\sqrt{x}$.\nStep 2: Square both sides: $x + 9 = 1 + 2\\sqrt{x} + x$. Subtracting $x + 1$ gives $8 = 2\\sqrt{x}$, so $\\sqrt{x} = 4$.\nStep 3: Square again: $x = 16$. Check: $\\sqrt{25} - \\sqrt{16} = 5 - 4 = 1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): stops at $\\sqrt{x} = 4$ and reports the square root instead of $x$.\n* Choice C ($25$): reports $x + 9$, the radicand of the first square root.\n* Choice D ($64$): squares $1 + \\sqrt{x}$ as $1 + \\sqrt{x} + x$, leaving out the $2$, so $\\sqrt{x} = 8$.\n\n**Test Day Takeaway:** Squaring a sum such as $1 + \\sqrt{x}$ produces the middle term $2\\sqrt{x}$; with two radicals, isolate one, square, and the remaining radical is usually all that is left.",
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
    question: "$\\sqrt{x + 10} = x - 2$\nHow many distinct real solutions does the given equation have?",
    choices: [
      // distractor: squares only the radical, getting x + 10 = x - 2, which has no solution
      { id: "A", text: "Zero" },
      { id: "B", text: "Exactly one" },
      // distractor: keeps the extraneous solution x = -1 from the squared equation
      { id: "C", text: "Exactly two" },
      // distractor: treats the equation as true for every x once it has been squared
      { id: "D", text: "Infinitely many" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Radical Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~45s):** Squaring gives $x^{2} - 5x - 6 = 0$, so $x = 6$ or $x = -1$. At $x = -1$ the right side is $-3$, which a square root can never equal, so only $x = 6$ works.\n\n**The Full Solution:**\nStep 1: Square both sides: $x + 10 = (x - 2)^{2} = x^{2} - 4x + 4$, so $x^{2} - 5x - 6 = 0$.\nStep 2: Factor: $(x - 6)(x + 1) = 0$, so the squared equation has the solutions $x = 6$ and $x = -1$.\nStep 3: Test each in the original equation. At $x = 6$: $\\sqrt{16} = 4$ and $6 - 2 = 4$ ✓. At $x = -1$: $\\sqrt{9} = 3$ but $-1 - 2 = -3$, so $x = -1$ is extraneous. The equation has exactly one solution. Check: $\\sqrt{6 + 10} = 4 = 6 - 2$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A (Zero): squares only the left side, writing $x + 10 = x - 2$, which has no solution.\n* Choice C (Exactly two): counts both solutions of the squared equation without testing them in the original.\n* Choice D (Infinitely many): assumes that squaring makes the two sides the same expression for every $x$.\n\n**Test Day Takeaway:** Squaring can add a solution that makes the radical equal a negative number; a principal square root is never negative, so test every candidate in the original equation before counting.",
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
    question: "Which of the following equations has no real solution?",
    choices: [
      // distractor: assumes a principal square root cannot equal 0, but x = -3 makes the radicand 0 and the equation true
      { id: "A", text: "$\\sqrt{x+3}=0$" },
      // distractor: assumes the radicand x - 3 is always negative, but x = 7 makes it 4
      { id: "B", text: "$\\sqrt{x-3}=2$" },
      // distractor: assumes 3 - x is always negative, but x = -22 makes it 25
      { id: "C", text: "$\\sqrt{3-x}=5$" },
      { id: "D", text: "$\\sqrt{x+3}=-2$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Radical Equation**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** A principal square root is never negative, so no real $x$ can make $\\sqrt{x+3}$ equal $-2$.\n\n**The Full Solution:**\n\nStep 1: For every real number in the domain of a square root, the output of $\\sqrt{\\ }$ is greater than or equal to $0$.\n\nStep 2: In choice D the right side is $-2$, which is less than $0$, so no input can produce it.\n\nStep 3: Each other equation does have a solution: $x=-3$ solves choice A, $x=7$ solves choice B, and $x=-22$ solves choice C. Check: $\\sqrt{-3+3}=0$, $\\sqrt{7-3}=2$, and $\\sqrt{3-(-22)}=\\sqrt{25}=5$.\n\n**Why the wrong answers are tempting:**\n\n* Choice A: assumes a square root cannot equal $0$; it does, at $x=-3$.\n* Choice B: assumes $x-3$ must be negative; at $x=7$ it is $4$.\n* Choice C: assumes $3-x$ must be negative; at $x=-22$ it is $25$.\n\n**Test Day Takeaway:** Check the sign of the isolated side before doing any algebra — a negative value on the far side of a principal square root ends the question.",
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
    question: "Selected values of the exponential function $C$ are shown in the table. For what value of $t$ is $C(t) = 4^{6}$?",
    diagram: { type: "dataTable", params: { headers: ["t", "C(t)"], rows: [["0", "4"], ["1", "16"], ["2", "64"]] } },
    choices: [
      // distractor: fits C(t) = 4^(2t) to the t = 1 row (16 = 4^2) and solves 2t = 6
      { id: "A", text: "$3$" },
      // distractor: shifts by 2 instead of 1, using C(t) = 4^(t+2)
      { id: "B", text: "$4$" },
      { id: "C", text: "$5$" },
      // distractor: reads the exponent 6 as t, ignoring that C(0) is already 4
      { id: "D", text: "$6$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The table's values are $4^{1}$, $4^{2}$, $4^{3}$, so $C(t) = 4^{t+1}$; setting $t + 1 = 6$ gives $t = 5$.\n\n**The Full Solution:**\nStep 1: Rewrite each table entry as a power of $4$: $4 = 4^{1}$, $16 = 4^{2}$, and $64 = 4^{3}$.\nStep 2: The exponent is one more than $t$ in every row, so $C(t) = 4^{t+1}$.\nStep 3: With equal bases, $4^{t+1} = 4^{6}$ forces $t + 1 = 6$, so $t = 5$. Check: $C(5) = 4^{6} = 4096$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): fits the rule $C(t) = 4^{2t}$ to the $t = 1$ row, since $16 = 4^{2}$, and solves $2t = 6$; that rule fails at $t = 2$, where it gives $256$, not $64$.\n* Choice B ($4$): uses the rule $C(t) = 4^{t+2}$, off by one row.\n* Choice D ($6$): treats the exponent on the right as $t$ itself, forgetting that the table already shows $C(0) = 4^{1}$.\n\n**Test Day Takeaway:** Write every table value as a power of the same base first; the rule then reads straight off the exponents.",
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
    question: "$9^{x} = 27^{4}$\nWhat value of $x$ is the solution to the given equation?",
    correctAnswer: "6",
    explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~15s):** Both sides are powers of $3$: $3^{2x} = 3^{12}$, so $2x = 12$ and $x = 6$.\n\n**The Full Solution:**\nStep 1: Write each base as a power of $3$: $9 = 3^{2}$ and $27 = 3^{3}$.\nStep 2: Then $9^{x} = 3^{2x}$ and $27^{4} = 3^{12}$.\nStep 3: Equal bases force $2x = 12$, so $x = 6$. Check: $9^{6} = 531{,}441$ and $27^{4} = 531{,}441$ ✓\n\n**Common Mistakes:**\n* $12$ — matching $x$ to the exponent $12$ without dividing by the $2$ that came from $9 = 3^{2}$.\n* $4$ — writing $27^{4}$ as $3^{8}$, as if $27$ were $3^{2}$, so that $2x = 8$.\n\n**Test Day Takeaway:** Rewrite both sides over the smallest shared base; only then are the exponents safe to equate.",
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
    question: "For the exponential function $P$, the table shows three values of $t$ and their corresponding values of $P(t)$. If $P(t) = 81^{3}$, what is the value of $t$?",
    diagram: { type: "dataTable", params: { headers: ["t", "P(t)"], rows: [["0", "3"], ["2", "27"], ["4", "243"]] } },
    choices: [
      // distractor: reads 81^3 as 3^(4+3) = 3^7, solving t + 1 = 7
      { id: "A", text: "$6$" },
      { id: "B", text: "$11$" },
      // distractor: ignores that P(0) = 3, setting t equal to the exponent 12
      { id: "C", text: "$12$" },
      // distractor: adds 1 instead of subtracting when isolating t in t + 1 = 12
      { id: "D", text: "$13$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The table shows $P(t) = 3^{t+1}$, and $81^{3} = 3^{12}$, so $t + 1 = 12$ and $t = 11$.\n\n**The Full Solution:**\nStep 1: Each listed value is a power of $3$: $3 = 3^{1}$ at $t = 0$, $27 = 3^{3}$ at $t = 2$, and $243 = 3^{5}$ at $t = 4$.\nStep 2: The exponent runs one ahead of $t$, so $P(t) = 3^{t+1}$. Also $81 = 3^{4}$, so $81^{3} = 3^{12}$.\nStep 3: Equal bases force $t + 1 = 12$, so $t = 11$. Check: $P(11) = 3^{12} = 531{,}441$, which equals $81^{3}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): adds the exponents in $81^{3}$ instead of multiplying, turning $3^{12}$ into $3^{7}$.\n* Choice C ($12$): matches $t$ directly to the exponent, missing the shift the table shows at $t = 0$.\n* Choice D ($13$): solves $t + 1 = 12$ in the wrong direction.\n\n**Test Day Takeaway:** A power of a power multiplies exponents — convert both the model and the target to one base before comparing.",
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
    question: "The table shows the mass, in grams, of a sample $d$ days after it was prepared. The mass decreases exponentially. For what value of $d$ is the mass $\\frac{1}{25}$ gram?",
    diagram: { type: "dataTable", params: { headers: ["d", "Mass (grams)"], rows: [["0", "625"], ["1", "125"], ["2", "25"], ["3", "5"]] } },
    choices: [
      // distractor: matches 1/25 to the 25 in the table, dropping the negative exponent
      { id: "A", text: "$2$" },
      // distractor: quotes the starting exponent 4 instead of solving for d
      { id: "B", text: "$4$" },
      // distractor: stops at 1/5 gram, which is 5 to the power -1, one day too early
      { id: "C", text: "$5$" },
      { id: "D", text: "$6$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** The masses are $5^{4}$, $5^{3}$, $5^{2}$, $5^{1}$, so the mass after $d$ days is $5^{4-d}$; setting $4 - d = -2$ gives $d = 6$.\n\n**The Full Solution:**\nStep 1: Rewrite the table entries as powers of $5$: $625 = 5^{4}$, $125 = 5^{3}$, $25 = 5^{2}$, and $5 = 5^{1}$.\nStep 2: The exponent drops by $1$ each day, so the mass after $d$ days is $5^{4-d}$ grams, and $\\frac{1}{25} = 5^{-2}$.\nStep 3: Equal bases force $4 - d = -2$, so $d = 6$. Check: $625\\left(\\frac{1}{5}\\right)^{6} = \\frac{625}{15{,}625} = \\frac{1}{25}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): matches $\\frac{1}{25}$ to the $25$ in the table, dropping the negative exponent.\n* Choice B ($4$): quotes the starting exponent instead of solving for $d$.\n* Choice C ($5$): stops at $5^{-1} = \\frac{1}{5}$ gram, one day too early.\n\n**Test Day Takeaway:** A reciprocal is a negative exponent: write $\\frac{1}{b^{n}}$ as $b^{-n}$ before matching exponents.",
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
    question: "$25^{3x} = 5^{kx}$\nIn the given equation, $k$ is a constant. The equation is true for all positive values of $x$. What is the value of $k$?",
    correctAnswer: "6",
    explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~20s):** $25^{3x} = 5^{6x}$, so matching with $5^{kx}$ gives $k = 6$.\n\n**The Full Solution:**\nStep 1: Write the left base over the shared base $5$: $25 = 5^{2}$, so $25^{3x} = \\left(5^{2}\\right)^{3x}$.\nStep 2: A power of a power multiplies exponents: $\\left(5^{2}\\right)^{3x} = 5^{6x}$.\nStep 3: Since $5^{6x} = 5^{kx}$ for every positive $x$, the exponents match and $k = 6$. Check: at $x = 2$, $25^{6} = 244{,}140{,}625$ and $5^{12} = 244{,}140{,}625$ ✓\n\n**Common Mistakes:**\n* $3$ — leaving the exponent as it stands and never converting $25$ to $5^{2}$.\n* $15$ — multiplying $5$ by $3$, using the base as though it were an exponent.\n\n**Test Day Takeaway:** Converting a base to a power of a smaller base multiplies the exponent by that power — here every exponent doubles.",
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
    question: "The table shows three values of $n$ and their corresponding values of $g(n)$, where $g$ is an exponential function. If $g(3n) = 9g(n + 6)$, what is the value of $n$?",
    questionTable: { headers: ["$n$", "$g(n)$"], rows: [["$1$", "$3$"], ["$2$", "$9$"], ["$3$", "$27$"]] },
    choices: [
      // distractor: drops the factor of $9$, solving $3n = n + 6$
      { id: "A", text: "$3$" },
      { id: "B", text: "$4$" },
      // distractor: converts the factor $9$ to $3^{9}$ instead of $3^{2}$, solving $3n = n + 15$
      { id: "C", text: "$7.5$" },
      // distractor: treats $9 \cdot 3^{\,n+6}$ as $3^{2(n+6)}$, solving $3n = 2n + 12$
      { id: "D", text: "$12$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** The table shows $g(n) = 3^{n}$, so the equation is $3^{3n} = 3^{2} \\cdot 3^{\\,n+6} = 3^{\\,n+8}$, and $3n = n + 8$ gives $n = 4$.\n\n**The Full Solution:**\nStep 1: The listed values $3$, $9$, $27$ are $3^{1}$, $3^{2}$, $3^{3}$, so $g(n) = 3^{n}$.\nStep 2: Then $g(3n) = 3^{3n}$, and $9\\,g(n + 6) = 3^{2} \\cdot 3^{\\,n+6} = 3^{\\,n+8}$.\nStep 3: Equal bases force $3n = n + 8$, so $2n = 8$ and $n = 4$. Check: $g(12) = 3^{12} = 531{,}441$ and $9\\,g(10) = 9 \\cdot 3^{10} = 531{,}441$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): ignores the coefficient $9$, which is worth two extra factors of $3$.\n* Choice C ($7.5$): converts the factor $9$ to $3^{9}$ rather than $3^{2}$, solving $3n = n + 15$.\n* Choice D ($12$): treats $9 \\cdot 3^{\\,n+6}$ as $3^{2(n+6)}$, multiplying the exponent instead of adding to it.\n\n**Test Day Takeaway:** A numerical coefficient in front of a power is itself a power of the same base — fold it in by ADDING to the exponent.",
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
    question: "The table shows four values of $x$ and their corresponding values of $h(x)$ for the exponential function $h$. For what value of $x$ does $h(x) \\cdot 4^{3x}$ equal $4^{16}$?",
    diagram: { type: "dataTable", params: { headers: ["x", "h(x)"], rows: [["0", "256"], ["1", "64"], ["2", "16"], ["3", "4"]] } },
    choices: [
      // distractor: quotes the exponent of h(0) = 4^4 instead of solving for x
      { id: "A", text: "$4$" },
      // distractor: uses h(x) = 4^(x - 4), reversing the sign of the exponent and solving 4x - 4 = 16
      { id: "B", text: "$5$" },
      { id: "C", text: "$6$" },
      // distractor: drops the constant 4 from the exponent of h, solving 2x = 16
      { id: "D", text: "$8$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** The table shows $h(x) = 4^{\\,4-x}$, so the left side is $4^{\\,4-x+3x} = 4^{\\,4+2x}$; setting $4 + 2x = 16$ gives $x = 6$.\n\n**The Full Solution:**\nStep 1: Written as powers of $4$, the table reads $256 = 4^{4}$, $64 = 4^{3}$, $16 = 4^{2}$, $4 = 4^{1}$, so $h(x) = 4^{\\,4-x}$.\nStep 2: Multiplying by $4^{3x}$ adds exponents: $4^{\\,4-x} \\cdot 4^{3x} = 4^{\\,4+2x}$.\nStep 3: Equal bases force $4 + 2x = 16$, so $2x = 12$ and $x = 6$. Check: $h(6) = 4^{-2}$ and $4^{-2} \\cdot 4^{18} = 4^{16}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): reports the exponent at $x = 0$, which is a value of the function, not a solution.\n* Choice B ($5$): reads the decay as $4^{\\,x-4}$, so the exponent sum becomes $4x - 4$.\n* Choice D ($8$): forgets the leading $4$ in $4 + 2x$, solving $2x = 16$.\n\n**Test Day Takeaway:** Convert the table to a single power first, then add the exponents — a decaying table means the exponent counts DOWN as the input rises.",
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
    question: "The table shows the number of bacteria $B(k)$ in a sample $k$ hours after an experiment began, where $B$ is an exponential function. For what value of $k$ is $B(k) = 2^{15}$?",
    questionTable: { headers: ["$k$", "$B(k)$"], rows: [["$1$", "$32$"], ["$2$", "$128$"], ["$3$", "$512$"]] },
    choices: [
      // distractor: divides $15$ by $2$ before subtracting the $3$, reversing the order of operations
      { id: "A", text: "$4.5$" },
      { id: "B", text: "$6$" },
      // distractor: ignores the constant $3$ in the exponent, solving $2k = 15$
      { id: "C", text: "$7.5$" },
      // distractor: subtracts $3$ from $15$ but never divides by the $2$
      { id: "D", text: "$12$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The values are $2^{5}$, $2^{7}$, $2^{9}$, so $B(k) = 2^{\\,2k+3}$; setting $2k + 3 = 15$ gives $k = 6$.\n\n**The Full Solution:**\nStep 1: Write each value as a power of $2$: $32 = 2^{5}$, $128 = 2^{7}$, and $512 = 2^{9}$.\nStep 2: The exponent climbs by $2$ per hour and equals $5$ at $k = 1$, so $B(k) = 2^{\\,2k+3}$.\nStep 3: Equal bases force $2k + 3 = 15$, so $2k = 12$ and $k = 6$. Check: $B(6) = 2^{15} = 32{,}768$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4.5$): halves before undoing the $+3$, so the two inverse steps are applied in the wrong order.\n* Choice C ($7.5$): leaves out the $+3$, which is what the exponent $5$ at $k = 1$ pins down.\n* Choice D ($12$): undoes the $+3$ but not the coefficient $2$.\n\n**Test Day Takeaway:** From a table, read the exponent's step and its value at one input — that gives the linear rule inside the exponent in one line.",
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
    question: "The graph of $y = f(x)$ is shown, where $f$ is a quadratic function. What is the distance between the two $x$-intercepts of the graph?",
    diagram: { type: "parabola", params: { vertex: { h: 5, k: -9 }, a: 1, xRange: [0, 10], yRange: [-12, 10], xTickInterval: 1, yTickInterval: 3, gridInterval: 1, showVertex: false } },
    choices: [
      // distractor: measures from the axis of symmetry x = 5 out to one intercept, which is half the distance
      { id: "A", text: "$3$" },
      { id: "B", text: "$6$" },
      // distractor: reports the x-coordinate of the right-hand intercept, 8, instead of the distance between the intercepts
      { id: "C", text: "$8$" },
      // distractor: adds the x-coordinates of the intercepts, 2 + 8, instead of subtracting them
      { id: "D", text: "$10$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The graph crosses the $x$-axis at $x = 2$ and $x = 8$, so the distance between them is $8 - 2 = 6$.\n\n**The Full Solution:**\nStep 1: The $x$-intercepts of the graph are the points where $y = 0$.\nStep 2: Reading the grid, the graph crosses the $x$-axis at $(2, 0)$ and $(8, 0)$.\nStep 3: Both points lie on the $x$-axis, so the distance between them is the difference of their $x$-coordinates: $8 - 2 = 6$. Check: the lowest point of the graph is at $x = 5$, and both intercepts are $3$ units from it, for a total of $3 + 3 = 6$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): the distance from the axis of symmetry $x = 5$ to one intercept, which is only half the distance.\n* Choice C ($8$): the $x$-coordinate of the right-hand intercept, not the distance between the two intercepts.\n* Choice D ($10$): adds the $x$-coordinates, $2 + 8$, instead of subtracting them.\n\n**Test Day Takeaway:** The distance between two points on the $x$-axis is the larger $x$-coordinate minus the smaller one; the axis of symmetry sits exactly halfway between them.",
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
    question: "$f(x) = x^{2} - 11x + 24$\nThe graph of $y = f(x)$ in the $xy$-plane has two $x$-intercepts. What is the distance between them?",
    correctAnswer: "5",
    explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**The correct answer is 5.**\n\n**The Fast Way (~15s):** $x^{2} - 11x + 24 = (x - 3)(x - 8)$, so the $x$-intercepts are at $x = 3$ and $x = 8$, which are $8 - 3 = 5$ units apart.\n\n**The Full Solution:**\nStep 1: The $x$-intercepts are where $f(x) = 0$, so solve $x^{2} - 11x + 24 = 0$.\nStep 2: Two numbers with product $24$ and sum $-11$ are $-3$ and $-8$, so the equation factors as $(x - 3)(x - 8) = 0$, giving $x = 3$ and $x = 8$.\nStep 3: The intercepts $(3, 0)$ and $(8, 0)$ are $8 - 3 = 5$ units apart. Check: $f(3) = 9 - 33 + 24 = 0$ and $f(8) = 64 - 88 + 24 = 0$ ✓\n\n**Common Mistakes:**\n* $2.5$: the distance from the axis of symmetry $x = 5.5$ to one intercept, which is half the answer.\n* $8$: the larger $x$-intercept itself, not the distance between the two.\n* $11$: the sum of the two zeros, $3 + 8$, which is the opposite of the coefficient of $x$, not a distance.\n\n**Test Day Takeaway:** Factor, find both zeros, and subtract the smaller from the larger; a distance between intercepts is never one of the zeros by itself.",
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
    question: "The graph of the quadratic function $f$ is shown. The function $g$ is defined by $g(x) = f(x - 3)$. What is the distance between the two $x$-intercepts of the graph of $y = g(x)$?",
    diagram: { type: "parabola", params: { vertex: { h: -2, k: -16 }, a: 1, xRange: [-8, 4], yRange: [-18, 8], xTickInterval: 2, yTickInterval: 4, gridInterval: 1, showVertex: false } },
    choices: [
      // distractor: reports the distance from the axis of symmetry to one intercept, half of the correct distance
      { id: "A", text: "$4$" },
      // distractor: subtracts the shift of 3 from the distance 8, as if moving the graph right narrowed it
      { id: "B", text: "$5$" },
      { id: "C", text: "$8$" },
      // distractor: adds the shift of 3 to the distance 8, as if moving the graph right widened it
      { id: "D", text: "$11$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The graph of $f$ crosses the $x$-axis at $x = -6$ and $x = 2$, and $g(x) = f(x - 3)$ moves both intercepts $3$ units right, to $x = -3$ and $x = 5$, so the distance stays $5 - (-3) = 8$.\n\n**The Full Solution:**\nStep 1: From the graph, the $x$-intercepts of $f$ are $(-6, 0)$ and $(2, 0)$.\nStep 2: $g(x) = 0$ exactly when $f(x - 3) = 0$, that is, when $x - 3 = -6$ or $x - 3 = 2$. So the $x$-intercepts of the graph of $g$ are at $x = -3$ and $x = 5$.\nStep 3: The distance between them is $5 - (-3) = 8$. Check: replacing $x$ with $x - 3$ slides the whole graph $3$ units to the right without changing its shape, so the gap between the intercepts must equal the gap for $f$, $2 - (-6) = 8$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): the distance from the axis of symmetry to one intercept, which is half of the correct distance.\n* Choice B ($5$): subtracts the shift from the distance, $8 - 3$, but a horizontal shift moves both intercepts the same amount.\n* Choice D ($11$): adds the shift to the distance, $8 + 3$, for the same reason.\n\n**Test Day Takeaway:** A horizontal shift moves every point of a graph the same distance, so it never changes the distance between two $x$-intercepts.",
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
    question: "$h(x) = 3x^{2} + 6x - 45$\nThe graph of $y = h(x)$ in the $xy$-plane has $x$-intercepts at $(a, 0)$ and $(b, 0)$, where $a < b$. What is the value of $b - a$?",
    choices: [
      // distractor: adds the zeros instead of subtracting them, computing |-5 + 3| = 2
      { id: "A", text: "$2$" },
      // distractor: reports the positive zero, b = 3, instead of b - a
      { id: "B", text: "$3$" },
      // distractor: reports the distance from the axis of symmetry x = -1 to one intercept, half of b - a
      { id: "C", text: "$4$" },
      { id: "D", text: "$8$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** $3x^{2} + 6x - 45 = 3(x + 5)(x - 3)$, so $a = -5$, $b = 3$, and $b - a = 3 - (-5) = 8$.\n\n**The Full Solution:**\nStep 1: The $x$-intercepts are where $h(x) = 0$. Factor out the common factor $3$: $3\\left(x^{2} + 2x - 15\\right) = 0$.\nStep 2: $x^{2} + 2x - 15 = (x + 5)(x - 3)$, so the zeros are $x = -5$ and $x = 3$. Since $a < b$, $a = -5$ and $b = 3$.\nStep 3: $b - a = 3 - (-5) = 8$. Check: $h(-5) = 75 - 30 - 45 = 0$ and $h(3) = 27 + 18 - 45 = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): adds the zeros, $-5 + 3 = -2$, and drops the sign.\n* Choice B ($3$): reports $b$ alone instead of $b - a$.\n* Choice C ($4$): the distance from the axis of symmetry $x = -1$ to one intercept, which is half of $b - a$.\n\n**Test Day Takeaway:** Factor out the leading coefficient first; it changes how steep the parabola is, not where it crosses the $x$-axis.",
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
    question: "In the $xy$-plane, the graph of $y = 5x^{2} - 40x + 35$ intersects the $x$-axis at the points $(r, 0)$ and $(s, 0)$, where $r > s$. What is the value of $r - s$?",
    correctAnswer: "6",
    explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**The correct answer is 6.**\n\n**The Fast Way (~25s):** Dividing by $5$ gives $x^{2} - 8x + 7 = (x - 1)(x - 7)$, so $r = 7$, $s = 1$, and $r - s = 6$.\n\n**The Full Solution:**\nStep 1: The points where the graph meets the $x$-axis satisfy $5x^{2} - 40x + 35 = 0$.\nStep 2: Divide every term by $5$: $x^{2} - 8x + 7 = 0$, which factors as $(x - 1)(x - 7) = 0$. So the solutions are $x = 1$ and $x = 7$, and since $r > s$, $r = 7$ and $s = 1$.\nStep 3: $r - s = 7 - 1 = 6$. Check: $5(1)^{2} - 40(1) + 35 = 0$ and $5(7)^{2} - 40(7) + 35 = 245 - 280 + 35 = 0$ ✓\n\n**Common Mistakes:**\n* $3$: the distance from the axis of symmetry $x = 4$ to one intercept, which is half of $r - s$.\n* $7$: reports $r$ alone instead of $r - s$.\n* $8$: the sum of the solutions, $7 + 1$, instead of their difference.\n\n**Test Day Takeaway:** Divide out a common factor before factoring; dividing every term of the equation by the same nonzero number never changes its solutions.",
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
    question: "The graph of the quadratic function $f$ is shown, with its vertex labeled. The function $g$ is defined by $g(x) = f(x) + 7$. What is the distance between the two $x$-intercepts of the graph of $y = g(x)$?",
    diagram: { type: "parabola", params: { vertex: { h: 3, k: -16 }, a: 1, xRange: [-3, 9], yRange: [-18, 7], xTickInterval: 2, yTickInterval: 4, gridInterval: 1, showVertex: true } },
    choices: [
      { id: "A", text: "$6$" },
      // distractor: gives the distance between the x-intercepts of f itself, ignoring the shift of 7
      { id: "B", text: "$8$" },
      // distractor: reports 9, the depth of the vertex of g below the x-axis, as if it were a horizontal distance
      { id: "C", text: "$9$" },
      // distractor: reports 16, the depth of the vertex of f below the x-axis, as if it were a horizontal distance
      { id: "D", text: "$16$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** The vertex $(3, -16)$ and the intercept $(-1, 0)$ give $f(x) = (x - 3)^{2} - 16$, so $g(x) = (x - 3)^{2} - 9$, whose zeros are $3 \\pm 3$: a distance of $6$.\n\n**The Full Solution:**\nStep 1: The vertex is $(3, -16)$, so $f(x) = a(x - 3)^{2} - 16$. The graph passes through $(-1, 0)$: $a(16) - 16 = 0$, so $a = 1$ and $f(x) = (x - 3)^{2} - 16$.\nStep 2: Then $g(x) = (x - 3)^{2} - 16 + 7 = (x - 3)^{2} - 9$.\nStep 3: $g(x) = 0$ when $(x - 3)^{2} = 9$, so $x - 3 = \\pm 3$, giving $x = 0$ and $x = 6$. The distance is $6 - 0 = 6$. Check: $g(0) = 9 - 9 = 0$ and $g(6) = 9 - 9 = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($8$): the distance between the $x$-intercepts of $f$, read off the graph without applying the shift.\n* Choice C ($9$): the depth of the vertex of $g$ below the $x$-axis, a vertical distance, not a horizontal one.\n* Choice D ($16$): the depth of the vertex of $f$ below the $x$-axis, again a vertical distance.\n\n**Test Day Takeaway:** Shifting an upward-opening parabola up pulls its $x$-intercepts toward the axis of symmetry; write the vertex form, add the shift to the constant, and solve again.",
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
    question: "The graph of the quadratic function $f$ is shown, with its vertex labeled. The function $g$ is defined by $g(x) = f(x) + k$, where $k$ is a constant. The graph of $y = g(x)$ intersects the $x$-axis at two points that are $4$ units apart. What is the value of $k$?",
    diagram: { type: "parabola", params: { vertex: { h: 2, k: -18 }, a: 2, xRange: [-3, 7], yRange: [-20, 5], xTickInterval: 2, yTickInterval: 4, gridInterval: 1, showVertex: true } },
    choices: [
      // distractor: uses $4$ as the distance from the axis of symmetry to each intercept: $2(4)^{2} = 32$, so $k = 18 - 32$
      { id: "A", text: "$-14$" },
      // distractor: uses $4$ as the distance from the axis to each intercept and ignores $a = 2$: $4^{2} = 16$, so $k = 18 - 16$
      { id: "B", text: "$2$" },
      { id: "C", text: "$10$" },
      // distractor: uses the correct half-distance $2$ but ignores $a = 2$: $2^{2} = 4$, so $k = 18 - 4$
      { id: "D", text: "$14$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**Choice C is correct.**\n\n**The Fast Way (~45s):** From the graph, $f(x) = 2(x - 2)^{2} - 18$. The intercepts of $g$ are $2$ units on each side of $x = 2$, so $2(2)^{2} - 18 + k = 0$ and $k = 10$.\n\n**The Full Solution:**\nStep 1: The vertex is $(2, -18)$ and the graph crosses the $x$-axis at $(-1, 0)$ and $(5, 0)$, so $f(x) = a(x - 2)^{2} - 18$ with $a(5 - 2)^{2} - 18 = 0$, which gives $a = 2$.\nStep 2: Adding $k$ shifts the graph vertically, so the axis of symmetry stays $x = 2$. Intercepts $4$ units apart are $2$ units on each side of it: $x = 0$ and $x = 4$.\nStep 3: $g(4) = 2(4 - 2)^{2} - 18 + k = 8 - 18 + k = 0$, so $k = 10$. Check: $g(x) = 2(x - 2)^{2} - 8$ is $0$ when $(x - 2)^{2} = 4$, at $x = 0$ and $x = 4$, which are $4$ units apart ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-14$): places each intercept $4$ units from the axis instead of $2$, giving $2(4)^{2} - 18 + k = 0$.\n* Choice B ($2$): places each intercept $4$ units from the axis and also drops the factor $a = 2$.\n* Choice D ($14$): uses the correct half-distance $2$ but forgets that $a = 2$, so it solves $2^{2} - 18 + k = 0$.\n\n**Test Day Takeaway:** A vertical shift keeps the axis of symmetry; split the distance between the intercepts in half on each side of it, and read $a$ from a second point on the graph.",
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
    question: "The graph of a quadratic function in the $xy$-plane has its vertex at $(-1, 12)$ and an $x$-intercept at $(5, 0)$. Which of the following is the other $x$-intercept of the graph?",
    choices: [
      { id: "A", text: "$(-7, 0)$" },
      // distractor: computes -1 - 5 = -6 instead of reflecting 5 across x = -1
      { id: "B", text: "$(-6, 0)$" },
      // distractor: reflects the intercept across the y-axis instead of across the axis of symmetry x = -1
      { id: "C", text: "$(-5, 0)$" },
      // distractor: uses the x-coordinate of the vertex, which lies on the axis of symmetry, not on the graph's x-intercepts
      { id: "D", text: "$(-1, 0)$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** The axis of symmetry is $x = -1$. The intercept $x = 5$ is $6$ units to its right, so the other intercept is $6$ units to its left, at $x = -7$.\n\n**The Full Solution:**\nStep 1: The axis of symmetry of a parabola passes through its vertex, so it is the line $x = -1$, and the two $x$-intercepts are equally far from it.\nStep 2: The known intercept is $5 - (-1) = 6$ units to the right of $x = -1$.\nStep 3: The other intercept is $6$ units to the left: $x = -1 - 6 = -7$, so it is $(-7, 0)$. Check: the midpoint of $-7$ and $5$ is $\\dfrac{-7 + 5}{2} = -1$, the $x$-coordinate of the vertex ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($(-6, 0)$): computes $-1 - 5 = -6$, subtracting the intercept from the axis instead of reflecting across it.\n* Choice C ($(-5, 0)$): reflects the intercept across the $y$-axis instead of across the line $x = -1$.\n* Choice D ($(-1, 0)$): uses the $x$-coordinate of the vertex; the vertex is at height $12$, so $(-1, 0)$ is not on the graph.\n\n**Test Day Takeaway:** The two $x$-intercepts of a parabola are mirror images across the vertical line through the vertex, so the vertex's $x$-coordinate is their average.",
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
    question: "Which expression is equivalent to $\\dfrac{w^{9} \\cdot w^{2}}{w^{4}}$, where $w > 0$?",
    choices: [
      // distractor: ignores the factor w^2 and computes w^(9-4)
      { id: "A", text: "$w^{5}$" },
      { id: "B", text: "$w^{7}$" },
      // distractor: multiplies the numerator exponents, 9 times 2 = 18, then subtracts 4
      { id: "C", text: "$w^{14}$" },
      // distractor: adds all three exponents, 9 + 2 + 4, instead of subtracting the exponent in the denominator
      { id: "D", text: "$w^{15}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Add the exponents in the numerator and subtract the exponent in the denominator: $9 + 2 - 4 = 7$, so the expression is $w^{7}$.\n\n**The Full Solution:**\nStep 1: Multiply in the numerator by adding exponents: $w^{9} \\cdot w^{2} = w^{11}$.\nStep 2: Divide by subtracting exponents: $\\dfrac{w^{11}}{w^{4}} = w^{11 - 4}$.\nStep 3: The expression is equivalent to $w^{7}$. Check at $w = 2$: $\\dfrac{512 \\cdot 4}{16} = 128 = 2^{7}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($w^{5}$): drops the factor $w^{2}$ and computes $w^{9 - 4}$.\n* Choice C ($w^{14}$): multiplies the numerator's exponents, $9 \\cdot 2 = 18$, and then subtracts $4$.\n* Choice D ($w^{15}$): adds all three exponents, $9 + 2 + 4$.\n\n**Test Day Takeaway:** Multiplying powers of the same base adds exponents and dividing subtracts them; finish the numerator before you divide.",
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
    question: "$\\dfrac{9^{n + 3}}{3^{2n}} = 3^{k}$\nThe given equation is true for all positive integers $n$, where $k$ is a constant. What is the value of $k$?",
    choices: [
      // distractor: subtracts the exponents in the wrong order, computing 2n - (2n + 6) = -6
      { id: "A", text: "$-6$" },
      // distractor: rewrites 9^(n+3) as 3^(2n+3), doubling only the n in the exponent
      { id: "B", text: "$3$" },
      { id: "C", text: "$6$" },
      // distractor: doubles the exponent twice when converting 9^3 to base 3, going from 3 to 6 to 12
      { id: "D", text: "$12$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** $9^{n + 3} = 3^{2n + 6}$, so the quotient is $3^{(2n + 6) - 2n} = 3^{6}$ and $k = 6$.\n\n**The Full Solution:**\nStep 1: Write $9$ as $3^{2}$: $9^{n + 3} = \\left(3^{2}\\right)^{n + 3} = 3^{2(n + 3)} = 3^{2n + 6}$.\nStep 2: Divide by $3^{2n}$ by subtracting exponents: $\\dfrac{3^{2n + 6}}{3^{2n}} = 3^{(2n + 6) - 2n} = 3^{6}$.\nStep 3: The terms with $n$ cancel, so $3^{6} = 3^{k}$ for every $n$ and $k = 6$. Check at $n = 1$: $\\dfrac{9^{4}}{3^{2}} = \\dfrac{6{,}561}{9} = 729 = 3^{6}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): subtracts in the wrong order, $2n - (2n + 6)$.\n* Choice B ($3$): rewrites $9^{n + 3}$ as $3^{2n + 3}$, doubling the $n$ but not the $3$.\n* Choice D ($12$): doubles the exponent twice when converting to base $3$.\n\n**Test Day Takeaway:** Rewrite every power in the same base before combining; when the result must hold for all $n$, the terms with $n$ have to cancel, which is a built-in check.",
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
    question: "The function $N$ gives the number of yeast cells in a culture $t$ hours after the culture was prepared. The table shows three values of $t$ and their corresponding values of $N(t)$. Which equation defines $N$?",
    diagram: { type: "dataTable", params: { headers: ["t (hours)", "N(t)"], rows: [["0", "40"], ["1", "120"], ["2", "360"]] } },
    choices: [
      // distractor: swaps the initial value and the growth factor, so N(0) would be 3
      { id: "A", text: "$N(t) = 3(40)^{t}$" },
      // distractor: uses a power function with exponent 3, so N(0) would be 0
      { id: "B", text: "$N(t) = 40t^{3}$" },
      // distractor: treats the first change, 120 - 40 = 80, as a constant hourly increase, which fails at t = 2
      { id: "C", text: "$N(t) = 40 + 80t$" },
      { id: "D", text: "$N(t) = 40(3)^{t}$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Build Exponential Model**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** The count starts at $40$ and triples each hour ($40 \\to 120 \\to 360$), so $N(t) = 40(3)^{t}$.\n\n**The Full Solution:**\nStep 1: When $t = 0$, $N(t) = 40$, so the initial number of cells is $40$.\nStep 2: The ratios of consecutive values are $\\dfrac{120}{40} = 3$ and $\\dfrac{360}{120} = 3$, so the number of cells is multiplied by $3$ each hour.\nStep 3: Starting at $40$ and multiplying by $3$ each hour gives $N(t) = 40(3)^{t}$. Check: $N(2) = 40(9) = 360$, which matches the table ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($N(t) = 3(40)^{t}$): swaps the initial value and the growth factor, so $N(0) = 3$.\n* Choice B ($N(t) = 40t^{3}$): puts the variable in the base, so $N(0) = 0$.\n* Choice C ($N(t) = 40 + 80t$): adds the first increase of $80$ every hour, giving $N(2) = 200$ instead of $360$.\n\n**Test Day Takeaway:** Divide consecutive outputs: a constant ratio means exponential, and the value at $t = 0$ goes in front.",
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
    question: "The table shows the mass, in milligrams, of a crystal $t$ hours after it began to grow. The mass of the crystal increases exponentially. What is the mass, in milligrams, of the crystal $5$ hours after it began to grow?",
    questionTable: { headers: ["$t$ (hours)", "Mass (milligrams)"], rows: [["$0$", "$5$"], ["$1$", "$10$"], ["$2$", "$20$"], ["$3$", "$40$"]] },
    choices: [
      // distractor: stops one hour early and gives the mass at t = 4
      { id: "A", text: "$80$" },
      // distractor: adds 40 milligrams for each of the two remaining hours, treating the growth as linear
      { id: "B", text: "$120$" },
      { id: "C", text: "$160$" },
      // distractor: multiplies the 3-hour mass, 40, by 5 instead of doubling it twice
      { id: "D", text: "$200$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Build Exponential Model**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The mass doubles every hour, so double the $3$-hour mass twice: $40 \\to 80 \\to 160$ milligrams.\n\n**The Full Solution:**\nStep 1: The ratios of consecutive masses are $\\dfrac{10}{5} = \\dfrac{20}{10} = \\dfrac{40}{20} = 2$, so the mass doubles each hour.\nStep 2: Starting from $5$ milligrams, the mass is $5(2)^{t}$ milligrams after $t$ hours.\nStep 3: At $t = 5$, the mass is $5(2)^{5} = 5(32) = 160$ milligrams. Check: $40 \\cdot 2 \\cdot 2 = 160$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($80$): the mass at $t = 4$, one hour too early.\n* Choice B ($120$): adds $40$ milligrams for each of hours $4$ and $5$, treating the growth as a constant increase.\n* Choice D ($200$): multiplies the $3$-hour mass by $5$ instead of doubling it twice.\n\n**Test Day Takeaway:** Extend an exponential table by multiplying by the growth factor, never by adding the last increase again.",
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
    question: "The function $V$ gives the value, in dollars, of a car $t$ years after it was purchased. The table shows three values of $t$ and their corresponding values of $V(t)$. If $V$ is an exponential function, which equation defines $V$?",
    diagram: { type: "dataTable", params: { headers: ["t (years)", "V(t) (dollars)"], rows: [["0", "36,000"], ["1", "30,600"], ["2", "26,010"]] } },
    choices: [
      // distractor: uses the 15% lost each year as the factor instead of the 85% kept
      { id: "A", text: "$V(t) = 36{,}000(0.15)^{t}$" },
      { id: "B", text: "$V(t) = 36{,}000(0.85)^{t}$" },
      // distractor: adds the 15% rate instead of subtracting it, modeling growth instead of a decrease
      { id: "C", text: "$V(t) = 36{,}000(1.15)^{t}$" },
      // distractor: subtracts the first-year loss of 5,400 dollars every year, which gives 25,200 instead of 26,010 at t = 2
      { id: "D", text: "$V(t) = 36{,}000 - 5{,}400t$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Build Exponential Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** $\\dfrac{30{,}600}{36{,}000} = 0.85$, so the value is multiplied by $0.85$ each year and $V(t) = 36{,}000(0.85)^{t}$.\n\n**The Full Solution:**\nStep 1: When $t = 0$, $V(t) = 36{,}000$, so the purchase price is $\\$36{,}000$.\nStep 2: The ratios of consecutive values are $\\dfrac{30{,}600}{36{,}000} = 0.85$ and $\\dfrac{26{,}010}{30{,}600} = 0.85$, so each year the car keeps $85\\%$ of its value from the year before.\nStep 3: The function is $V(t) = 36{,}000(0.85)^{t}$. Check: $36{,}000(0.85)^{2} = 36{,}000(0.7225) = 26{,}010$, which matches the table ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($V(t) = 36{,}000(0.15)^{t}$): uses the $15\\%$ lost as the factor, which would leave only $\\$5{,}400$ after one year.\n* Choice C ($V(t) = 36{,}000(1.15)^{t}$): increases the value by $15\\%$ each year instead of decreasing it.\n* Choice D ($V(t) = 36{,}000 - 5{,}400t$): subtracts the first year's loss every year, giving $\\$25{,}200$ at $t = 2$ instead of $\\$26{,}010$.\n\n**Test Day Takeaway:** For a decreasing exponential, the factor is the fraction KEPT each period, $1 - r$; confirm it with a ratio of two table values.",
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
    question: "The function $m$ gives the mass, in milligrams, of a radioactive substance remaining $t$ days after the mass was first measured. The table shows three values of $t$ and their corresponding values of $m(t)$. Which equation defines $m$?",
    diagram: { type: "dataTable", params: { headers: ["t (days)", "m(t) (milligrams)"], rows: [["0", "96"], ["8", "48"], ["16", "24"]] } },
    choices: [
      // distractor: multiplies t by the 8-day halving period instead of dividing by it
      { id: "A", text: "$m(t) = 96\\left(\\dfrac{1}{2}\\right)^{8t}$" },
      { id: "B", text: "$m(t) = 96\\left(\\dfrac{1}{2}\\right)^{\\frac{t}{8}}$" },
      // distractor: treats the mass as halving every day instead of every 8 days
      { id: "C", text: "$m(t) = 96\\left(\\dfrac{1}{2}\\right)^{t}$" },
      // distractor: treats the first drop of 48 milligrams over 8 days as a constant loss of 6 milligrams per day, which gives 0 instead of 24 at t = 16
      { id: "D", text: "$m(t) = 96 - 6t$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Build Exponential Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The mass halves every $8$ days ($96 \\to 48 \\to 24$), so after $t$ days it has halved $\\dfrac{t}{8}$ times: $m(t) = 96\\left(\\dfrac{1}{2}\\right)^{\\frac{t}{8}}$.\n\n**The Full Solution:**\nStep 1: When $t = 0$, $m(t) = 96$, so the initial mass is $96$ milligrams.\nStep 2: The mass is $48$ at $t = 8$ and $24$ at $t = 16$, so it is multiplied by $\\dfrac{1}{2}$ once every $8$ days. In $t$ days that happens $\\dfrac{t}{8}$ times.\nStep 3: So $m(t) = 96\\left(\\dfrac{1}{2}\\right)^{\\frac{t}{8}}$. Check: at $t = 16$ the exponent is $2$, and $96\\left(\\dfrac{1}{4}\\right) = 24$, which matches the table ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($m(t) = 96\\left(\\dfrac{1}{2}\\right)^{8t}$): multiplies $t$ by $8$ instead of dividing, so the mass would halve $64$ times by $t = 8$.\n* Choice C ($m(t) = 96\\left(\\dfrac{1}{2}\\right)^{t}$): halves the mass every day, giving $m(8) = 0.375$ instead of $48$.\n* Choice D ($m(t) = 96 - 6t$): spreads the first drop of $48$ milligrams evenly over $8$ days, which gives $m(16) = 0$ instead of $24$.\n\n**Test Day Takeaway:** The exponent counts how many times the factor has been applied, so divide the elapsed time by the length of one period.",
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
    question: "The table shows the area, in square meters, of a pond's surface covered by algae at the start of three consecutive years. The area grows exponentially. Which of the following functions best models the area $A(t)$, in square meters, covered $t$ years after the start of 2018?",
    diagram: { type: "dataTable", params: { headers: ["Year", "Area covered (square meters)"], rows: [["2018", "250"], ["2019", "300"], ["2020", "360"]] } },
    choices: [
      // distractor: uses the average yearly increase, (360 - 250)/2 = 55, treating the growth as linear
      { id: "A", text: "$A(t) = 250 + 55t$" },
      { id: "B", text: "$A(t) = 250(1.2)^{t}$" },
      // distractor: doubles the exponent, applying two years of growth in each year
      { id: "C", text: "$A(t) = 250(1.2)^{2t}$" },
      // distractor: uses the two-year factor 360/250 = 1.44 as the yearly factor
      { id: "D", text: "$A(t) = 250(1.44)^{t}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Build Exponential Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $\\dfrac{300}{250} = \\dfrac{360}{300} = 1.2$, so the area is multiplied by $1.2$ each year starting from $250$: $A(t) = 250(1.2)^{t}$.\n\n**The Full Solution:**\nStep 1: With $t$ measured from the start of 2018, $A(0) = 250$.\nStep 2: The ratio of each year's area to the year before is $\\dfrac{300}{250} = 1.2$ and $\\dfrac{360}{300} = 1.2$, so the yearly growth factor is $1.2$.\nStep 3: The model is $A(t) = 250(1.2)^{t}$. Check: $A(2) = 250(1.44) = 360$, which matches the 2020 row ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($A(t) = 250 + 55t$): adds the average increase of $55$ square meters each year, which is linear growth.\n* Choice C ($A(t) = 250(1.2)^{2t}$): doubles the exponent, so $A(1) = 360$ instead of $300$.\n* Choice D ($A(t) = 250(1.44)^{t}$): uses the two-year factor $\\dfrac{360}{250} = 1.44$ as if it applied every year.\n\n**Test Day Takeaway:** Find the growth factor from two values exactly one time unit apart, so that it matches the unit of $t$ in the exponent.",
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
    question: "The table shows the number of users of a new app $m$ months after the app was launched. The number of users grows exponentially. Which of the following equations represents the number of users $N(t)$, $t$ years after the app was launched?",
    diagram: { type: "dataTable", params: { headers: ["m (months)", "Number of users"], rows: [["0", "500"], ["1", "550"], ["2", "605"]] } },
    choices: [
      // distractor: uses the monthly factor with t in years, so a whole year counts as one month
      { id: "A", text: "$N(t) = 500(1.1)^{t}$" },
      // distractor: divides t by 12 instead of multiplying, converting years to months in the wrong direction
      { id: "B", text: "$N(t) = 500(1.1)^{\\frac{t}{12}}$" },
      { id: "C", text: "$N(t) = 500(1.1)^{12t}$" },
      // distractor: multiplies the starting number of users by 12 instead of only the exponent
      { id: "D", text: "$N(t) = 6{,}000(1.1)^{12t}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Build Exponential Model**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** The number of users is multiplied by $1.1$ each month, and $t$ years is $12t$ months, so $N(t) = 500(1.1)^{12t}$.\n\n**The Full Solution:**\nStep 1: The table gives $\\dfrac{550}{500} = 1.1$ and $\\dfrac{605}{550} = 1.1$, so the number of users starts at $500$ and is multiplied by $1.1$ each month.\nStep 2: After $m$ months the number of users is $500(1.1)^{m}$. There are $12$ months in a year, so $t$ years is $m = 12t$ months.\nStep 3: Substituting $12t$ for $m$ gives $N(t) = 500(1.1)^{12t}$. Check: two months is $t = \\dfrac{1}{6}$ year, and $500(1.1)^{12 \\cdot \\frac{1}{6}} = 500(1.1)^{2} = 605$, which matches the table ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($N(t) = 500(1.1)^{t}$): applies the monthly factor once per year.\n* Choice B ($N(t) = 500(1.1)^{\\frac{t}{12}}$): divides by $12$ instead of multiplying, so the factor would be applied once every $12$ years.\n* Choice D ($N(t) = 6{,}000(1.1)^{12t}$): multiplies the starting number of users by $12$ as well, so $N(0) = 6{,}000$ instead of $500$.\n\n**Test Day Takeaway:** Change units inside the exponent, never in the starting amount: $t$ years is $12t$ months when the factor is monthly.",
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
    question: "$x^{2} - 10x + 25 = 0$\nHow many distinct real solutions does the given equation have?",
    choices: [
      { id: "A", text: "Exactly one" },
      // distractor: assumes every quadratic equation has two solutions, or counts the repeated solution 5 twice
      { id: "B", text: "Exactly two" },
      // distractor: confuses a repeated solution with an equation that is true for every value of x
      { id: "C", text: "Infinitely many" },
      // distractor: reads a discriminant of 0 as negative, the case with no real solutions
      { id: "D", text: "Zero" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The discriminant is $(-10)^{2} - 4(1)(25) = 100 - 100 = 0$, and a discriminant of $0$ means exactly one real solution.\n\n**The Full Solution:**\nStep 1: The equation has the form $ax^{2} + bx + c = 0$ with $a = 1$, $b = -10$, and $c = 25$.\nStep 2: The discriminant is $b^{2} - 4ac = 100 - 100 = 0$. A positive discriminant gives two real solutions, $0$ gives one, and a negative value gives none.\nStep 3: So the equation has exactly one distinct real solution. Check: $x^{2} - 10x + 25 = (x - 5)^{2}$, which equals $0$ only when $x = 5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B (Exactly two): assumes every quadratic has two solutions; here both factors are $x - 5$, so the two solutions are the same number.\n* Choice C (Infinitely many): mistakes a repeated solution for an equation that is true for every value of $x$.\n* Choice D (Zero): treats a discriminant of $0$ as if it were negative.\n\n**Test Day Takeaway:** Count real solutions with the sign of $b^{2} - 4ac$: positive means two, zero means one, negative means none. A perfect-square trinomial always has exactly one.",
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
    question: "$f(x) = 2x^{2} - 7x + 4$\nSome values of the given function $f$ are shown in the table. How many distinct real solutions does the equation $f(x) = 0$ have?",
    questionTable: { headers: ["$x$", "$f(x)$"], rows: [["$1$", "$-1$"], ["$2$", "$-2$"], ["$3$", "$1$"], ["$4$", "$8$"]] },
    choices: [
      // distractor: concludes that because no value of f(x) in the table is 0, the equation has no solutions
      { id: "A", text: "Zero" },
      // distractor: counts only the one sign change shown in the table, between x = 2 and x = 3
      { id: "B", text: "Exactly one" },
      { id: "C", text: "Exactly two" },
      // distractor: confuses the infinitely many inputs of f with the solutions of f(x) = 0
      { id: "D", text: "Infinitely many" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The discriminant of $2x^{2} - 7x + 4$ is $(-7)^{2} - 4(2)(4) = 49 - 32 = 17$, which is positive, so there are exactly two real solutions.\n\n**The Full Solution:**\nStep 1: The solutions of $f(x) = 0$ are the solutions of $2x^{2} - 7x + 4 = 0$, with $a = 2$, $b = -7$, and $c = 4$.\nStep 2: The discriminant is $b^{2} - 4ac = 49 - 32 = 17$.\nStep 3: A positive discriminant means exactly two distinct real solutions. Check: $f(0) = 4$ and $f(1) = -1$, so $f(x)$ changes sign between $x = 0$ and $x = 1$, and the table shows a second sign change between $x = 2$ and $x = 3$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A (Zero): no table value is $0$, but the solutions lie between values of $x$.\n* Choice B (Exactly one): the table shows only one sign change, but the other solution lies between $x = 0$ and $x = 1$, outside the listed rows.\n* Choice D (Infinitely many): $f$ has infinitely many inputs, but a quadratic equation has at most two solutions.\n\n**Test Day Takeaway:** The discriminant counts the real solutions; a table only shows a few points, so use it as a check, not as the answer.",
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
    question: "The graph of $y = 2x^{2} + bx + 5$, where $b$ is a constant, is shown in the $xy$-plane. Which of the following must be true?",
    diagram: { type: "parabola", params: { vertex: { h: -1, k: 3 }, a: 2, xRange: [-6, 4], yRange: [-2, 18], showVertex: false, gridInterval: 2, xTickInterval: 2, yTickInterval: 2, label: "y = 2x^2 + bx + 5" } },
    choices: [
      { id: "A", text: "$b^{2} - 40 < 0$" },
      // distractor: would mean the graph touches the x-axis at exactly one point
      { id: "B", text: "$b^{2} - 40 = 0$" },
      // distractor: would mean the graph crosses the x-axis at two points
      { id: "C", text: "$b^{2} - 40 > 0$" },
      // distractor: uses ac = 10 in place of 4ac = 40, leaving out the 4
      { id: "D", text: "$b^{2} - 10 < 0$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The graph never meets the $x$-axis, so $2x^{2} + bx + 5 = 0$ has no real solutions and its discriminant, $b^{2} - 4(2)(5) = b^{2} - 40$, is negative.\n\n**The Full Solution:**\nStep 1: The $x$-intercepts of the graph are the real solutions of $2x^{2} + bx + 5 = 0$.\nStep 2: The graph lies entirely above the $x$-axis, so the equation has no real solutions, which means its discriminant is negative.\nStep 3: With $a = 2$ and $c = 5$, the discriminant is $b^{2} - 4(2)(5) = b^{2} - 40$, so $b^{2} - 40 < 0$. Check: the graph passes through $(0, 5)$ and $(-2, 5)$, so its axis of symmetry is $x = -1 = -\\dfrac{b}{2(2)}$, which gives $b = 4$, and $4^{2} - 40 = -24 < 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($b^{2} - 40 = 0$): would mean the graph touches the $x$-axis at exactly one point.\n* Choice C ($b^{2} - 40 > 0$): would mean the graph crosses the $x$-axis twice.\n* Choice D ($b^{2} - 10 < 0$): uses $ac = 10$ in place of $4ac = 40$; with $b = 4$, $b^{2} - 10 = 6$, which is not negative.\n\n**Test Day Takeaway:** Count the $x$-intercepts on the graph, then translate: none means $b^{2} - 4ac < 0$, one means $= 0$, two means $> 0$.",
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
    question: "$px^{2} + qx + r = 0$\nIn the given equation, $p$, $q$, and $r$ are nonzero constants, and the equation has exactly one real solution. Which of the following is the solution?",
    choices: [
      // distractor: leaves out the 2 in the denominator of -b/(2a)
      { id: "A", text: "$-\\dfrac{q}{p}$" },
      // distractor: drops the negative sign of -b/(2a)
      { id: "B", text: "$\\dfrac{q}{2p}$" },
      { id: "C", text: "$-\\dfrac{q}{2p}$" },
      // distractor: gives the product of the roots, c/a, instead of the root
      { id: "D", text: "$\\dfrac{r}{p}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** With exactly one real solution, the square root in the quadratic formula is $0$, leaving $x = -\\dfrac{q}{2p}$.\n\n**The Full Solution:**\nStep 1: By the quadratic formula, $x = \\dfrac{-q \\pm \\sqrt{q^{2} - 4pr}}{2p}$.\nStep 2: The equation has exactly one real solution, so its discriminant is zero: $q^{2} - 4pr = 0$, and the $\\pm$ term is $0$.\nStep 3: The formula becomes $x = \\dfrac{-q}{2p} = -\\dfrac{q}{2p}$. Check with $x^{2} + 6x + 9 = 0$, where $p = 1$ and $q = 6$: its only solution is $x = -3 = -\\dfrac{6}{2(1)}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\dfrac{q}{p}$): leaves out the $2$ in the denominator; $-\\dfrac{q}{p}$ is the SUM of two roots.\n* Choice B ($\\dfrac{q}{2p}$): drops the negative sign.\n* Choice D ($\\dfrac{r}{p}$): is the product of the roots, not the root.\n\n**Test Day Takeaway:** When the discriminant is zero, the one solution is the $x$-coordinate of the vertex, $-\\dfrac{b}{2a}$.",
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
    question: "$3x^{2} + bx + 27 = 0$\nIn the given equation, $b$ is a constant. What is the sum of the two values of $b$ for which the equation has exactly one real solution?",
    choices: [
      // distractor: finds only the negative value of b, -18
      { id: "A", text: "$-18$" },
      { id: "B", text: "$0$" },
      // distractor: finds only the positive value of b, 18
      { id: "C", text: "$18$" },
      // distractor: adds 18 and 18, treating both values of b as positive
      { id: "D", text: "$36$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Exactly one real solution means $b^{2} - 4(3)(27) = 0$, so $b^{2} = 324$ and $b = \\pm 18$; the sum is $0$.\n\n**The Full Solution:**\nStep 1: A quadratic equation has exactly one real solution when its discriminant is $0$: $b^{2} - 4(3)(27) = 0$.\nStep 2: So $b^{2} = 324$, and $b = 18$ or $b = -18$.\nStep 3: The sum of the two values is $18 + (-18) = 0$. Check: $3x^{2} + 18x + 27 = 3(x + 3)^{2}$ and $3x^{2} - 18x + 27 = 3(x - 3)^{2}$, and each has exactly one solution ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-18$): only one of the two values.\n* Choice C ($18$): only the other value.\n* Choice D ($36$): adds $18$ to itself, forgetting that one value is negative.\n\n**Test Day Takeaway:** Solving $b^{2} = k$ gives two opposite values, so their sum is $0$; read whether the question wants one value or both.",
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
    question: "$ax^{2} + 24x + c = 0$\nIn the given equation, $a$ and $c$ are positive constants and $a = c + 10$. The equation has exactly one real solution. What is the value of $a$?",
    choices: [
      // distractor: solves correctly for c = 8 and reports c instead of a
      { id: "A", text: "$8$" },
      // distractor: ignores a = c + 10 and assumes a = c, so a^2 = 144
      { id: "B", text: "$12$" },
      { id: "C", text: "$18$" },
      // distractor: reports the product ac = 144 instead of a
      { id: "D", text: "$144$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** One real solution means $24^{2} - 4ac = 0$, so $ac = 144$. The positive factor pair of $144$ that differs by $10$ is $18$ and $8$, so $a = 18$.\n\n**The Full Solution:**\nStep 1: The equation has exactly one real solution, so its discriminant is $0$: $24^{2} - 4ac = 0$, or $576 = 4ac$, which gives $ac = 144$.\nStep 2: Substitute $a = c + 10$: $(c + 10)c = 144$, or $c^{2} + 10c - 144 = 0$, which factors as $(c + 18)(c - 8) = 0$.\nStep 3: Since $c$ is positive, $c = 8$ and $a = 8 + 10 = 18$. Check: $18x^{2} + 24x + 8 = 2(3x + 2)^{2}$, which has the single solution $x = -\\dfrac{2}{3}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): the value of $c$, not $a$.\n* Choice B ($12$): assumes $a = c$, so $a^{2} = 144$; this ignores $a = c + 10$.\n* Choice D ($144$): the product $ac$, an intermediate result.\n\n**Test Day Takeaway:** A zero discriminant fixes the product $ac$; the second condition then picks one factor pair, so list the pairs before using the quadratic formula.",
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
    question: "$3x^{2} + 10 = bx$\nThe given equation has two distinct real solutions, where $b$ is a positive integer constant. What is the least possible value of $b$?",
    choices: [
      // distractor: uses b^2 > 30, leaving the 4 out of 4ac
      { id: "A", text: "$6$" },
      // distractor: uses b^2 > 40, leaving the leading coefficient 3 out of 4ac
      { id: "B", text: "$7$" },
      // distractor: rounds the square root of 120, about 10.95, down instead of up
      { id: "C", text: "$10$" },
      { id: "D", text: "$11$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** Rewritten as $3x^{2} - bx + 10 = 0$, the equation has two distinct real solutions when $b^{2} > 4(3)(10) = 120$. Since $10^{2} = 100$ and $11^{2} = 121$, the least positive integer is $11$.\n\n**The Full Solution:**\nStep 1: Subtract $bx$ from each side: $3x^{2} - bx + 10 = 0$. The discriminant is $(-b)^{2} - 4(3)(10) = b^{2} - 120$.\nStep 2: Two distinct real solutions require a positive discriminant: $b^{2} > 120$, so $b > \\sqrt{120} \\approx 10.95$ for positive $b$.\nStep 3: The least integer greater than $10.95$ is $11$. Check: $b = 11$ gives $121 - 120 = 1 > 0$, while $b = 10$ gives $100 - 120 = -20 < 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): uses $b^{2} > 30$, leaving the $4$ out of $4ac$.\n* Choice B ($7$): uses $b^{2} > 40$, leaving the leading coefficient $3$ out of $4ac$.\n* Choice C ($10$): rounds $\\sqrt{120} \\approx 10.95$ down instead of up.\n\n**Test Day Takeaway:** Put the equation in the form $ax^{2} + bx + c = 0$ first, then test the two integers on either side of the square-root boundary instead of rounding by habit.",
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
    question: "$x^{2} - 22x + c = 0$\nIn the given equation, $c$ is an integer. What is the greatest possible value of $c$ if the equation has two distinct real solutions?",
    choices: [
      { id: "A", text: "$120$" },
      // distractor: allows the discriminant to equal 0, which gives one repeated solution, not two
      { id: "B", text: "$121$" },
      // distractor: replaces 4ac with 2ac, giving 484 - 2c > 0 and c < 242
      { id: "C", text: "$241$" },
      // distractor: leaves out the 4 entirely, giving 484 - c > 0 and c < 484
      { id: "D", text: "$483$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Two distinct real solutions need $(-22)^{2} - 4c > 0$, so $484 > 4c$ and $c < 121$. The greatest integer less than $121$ is $120$.\n\n**The Full Solution:**\nStep 1: Here $a = 1$, $b = -22$, and the constant term is $c$, so the discriminant is $(-22)^{2} - 4(1)(c) = 484 - 4c$.\nStep 2: Two distinct real solutions require $484 - 4c > 0$, so $4c < 484$ and $c < 121$.\nStep 3: The greatest integer less than $121$ is $120$. Check: at $c = 120$ the discriminant is $484 - 480 = 4 > 0$, and $x^{2} - 22x + 120 = (x - 10)(x - 12)$ has the two solutions $10$ and $12$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($121$): at $c = 121$ the discriminant is $0$ and $x^{2} - 22x + 121 = (x - 11)^{2}$ has only one solution.\n* Choice C ($241$): uses $2ac$ instead of $4ac$, so the bound becomes $c < 242$.\n* Choice D ($483$): leaves out the $4$ and solves $484 - c > 0$.\n\n**Test Day Takeaway:** \"Two distinct real solutions\" is a strict inequality, so an integer answer sits one unit inside the boundary value.",
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
    question: "$2x^{2} + k = 18x - 5$\nIn the given equation, $k$ is an integer, and the equation has no real solutions. What is the least possible value of $k$?",
    choices: [
      // distractor: takes the greatest integer below 35.5 instead of the least integer above it
      { id: "A", text: "$35$" },
      { id: "B", text: "$36$" },
      // distractor: leaves the -5 on the right side, so the constant term is read as k and k > 40.5
      { id: "C", text: "$41$" },
      // distractor: uses 2ac instead of 4ac, solving 324 - 4(k + 5) < 0 and getting k > 76
      { id: "D", text: "$77$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** In standard form the equation is $2x^{2} - 18x + (k + 5) = 0$, so the discriminant is $324 - 8(k + 5) = 284 - 8k$. No real solutions means $284 - 8k < 0$, or $k > 35.5$, so the least integer is $36$.\n\n**The Full Solution:**\nStep 1: Move every term to the left side: $2x^{2} - 18x + k + 5 = 0$. So $a = 2$, $b = -18$, and the constant term is $k + 5$.\nStep 2: The equation has no real solutions when the discriminant is negative: $(-18)^{2} - 4(2)(k + 5) < 0$, or $324 - 8k - 40 < 0$.\nStep 3: That simplifies to $284 < 8k$, so $k > 35.5$, and the least integer value is $36$. Check: at $k = 36$ the discriminant is $284 - 288 = -4 < 0$; at $k = 35$ it is $284 - 280 = 4 > 0$, and the equation $2x^{2} - 18x + 40 = 0$ has the solutions $4$ and $5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($35$): rounds $35.5$ down; at $k = 35$ the equation still has two solutions.\n* Choice C ($41$): never moves the $-5$ across, so the constant term is read as $k$ and the bound becomes $k > 40.5$.\n* Choice D ($77$): uses $2ac$ in place of $4ac$, which gives $324 - 4(k + 5) < 0$ and $k > 76$.\n\n**Test Day Takeaway:** Put a quadratic equation in standard form before reading $a$, $b$, and $c$; a constant on the other side of the equals sign changes the discriminant.",
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
    question: "$9x^{2} + kx + 16 = 0$\nIn the given equation, $k$ is an integer. For how many values of $k$ does the equation have no real solutions?",
    choices: [
      // distractor: counts only the positive integers from 1 to 23 and forgets zero and the negative values
      { id: "A", text: "$23$" },
      // distractor: reports the boundary value 24 as the number of values
      { id: "B", text: "$24$" },
      { id: "C", text: "$47$" },
      // distractor: includes k = -24 and k = 24, where the discriminant is 0 and the equation has one solution
      { id: "D", text: "$49$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** No real solutions means $k^{2} - 4(9)(16) < 0$, so $k^{2} < 576$ and $-24 < k < 24$. The integers from $-23$ to $23$ number $47$.\n\n**The Full Solution:**\nStep 1: The discriminant is $k^{2} - 4(9)(16) = k^{2} - 576$.\nStep 2: The equation has no real solutions when $k^{2} - 576 < 0$, that is, $k^{2} < 576$, so $-24 < k < 24$.\nStep 3: The integers that satisfy this are $-23, -22, \\ldots, 22, 23$: that is $23$ negative values, $23$ positive values, and $0$, for $23 + 23 + 1 = 47$ values. Check: $k = 24$ gives $576 - 576 = 0$ and $9x^{2} + 24x + 16 = (3x + 4)^{2}$, which has one solution, so $24$ is correctly excluded ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($23$): counts only the positive integers.\n* Choice B ($24$): reports the boundary value instead of counting the integers.\n* Choice D ($49$): includes $k = \\pm 24$, where the equation has exactly one solution.\n\n**Test Day Takeaway:** \"No real solutions\" is a strict inequality; count the integers strictly between the two boundary values, remembering $0$.",
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
    question: "$x^{2} - 6x + c = 0$\nIn the given equation, $c$ is a constant, and the equation has no real solutions. Which of the following must be true?",
    choices: [
      // distractor: divides -4c < -36 by -4 without reversing the inequality sign
      { id: "A", text: "$c < 9$" },
      // distractor: reverses the inequality and includes c = 9, where x = 3 is a solution
      { id: "B", text: "$c \\le 9$" },
      { id: "C", text: "$c > 9$" },
      // distractor: leaves out the 4, solving 36 - c < 0
      { id: "D", text: "$c > 36$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** No real solutions means $(-6)^{2} - 4c < 0$, so $36 < 4c$ and $c > 9$.\n\n**The Full Solution:**\nStep 1: Here $a = 1$, $b = -6$, and the constant term is $c$, so the discriminant is $36 - 4c$.\nStep 2: The equation has no real solutions exactly when the discriminant is negative: $36 - 4c < 0$.\nStep 3: Adding $4c$ to both sides gives $36 < 4c$, so $c > 9$. Check: at $c = 10$ the discriminant is $36 - 40 = -4 < 0$, while at $c = 9$ the equation $(x - 3)^{2} = 0$ has the solution $x = 3$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($c < 9$): divides $-4c < -36$ by $-4$ without reversing the inequality.\n* Choice B ($c \\le 9$): includes $c = 9$, which gives the solution $x = 3$.\n* Choice D ($c > 36$): treats the discriminant as $36 - c$.\n\n**Test Day Takeaway:** Move the variable term to the side where it is positive before dividing, so the inequality never has to be flipped.",
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
    question: "$2x^{2} - bx + 2b = 0$\nIn the given equation, $b$ is a constant. Which of the following gives all values of $b$ for which the equation has no real solutions?",
    choices: [
      { id: "A", text: "$0 < b < 16$" },
      // distractor: includes b = 0 and b = 16, where the discriminant is 0 and the equation has one solution
      { id: "B", text: "$0 \\le b \\le 16$" },
      // distractor: solves b^2 - 16b > 0, the condition for two real solutions instead of none
      { id: "C", text: "$b < 0$ or $b > 16$" },
      // distractor: keeps only the upper bound and loses the condition that b must be greater than 0
      { id: "D", text: "$b < 16$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** No real solutions means $(-b)^{2} - 4(2)(2b) < 0$, so $b^{2} - 16b < 0$, or $b(b - 16) < 0$, which is true exactly when $0 < b < 16$.\n\n**The Full Solution:**\nStep 1: With $a = 2$, middle coefficient $-b$, and constant term $2b$, the discriminant is $(-b)^{2} - 4(2)(2b) = b^{2} - 16b$.\nStep 2: The equation has no real solutions when $b^{2} - 16b < 0$, which factors as $b(b - 16) < 0$.\nStep 3: A product of two factors is negative only when the factors have opposite signs, which happens for $0 < b < 16$. Check: at $b = 8$ the discriminant is $64 - 128 = -64 < 0$; at $b = 20$ it is $400 - 320 = 80 > 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($0 \\le b \\le 16$): at $b = 0$ and $b = 16$ the discriminant is $0$, so the equation has one solution.\n* Choice C ($b < 0$ or $b > 16$): this is where $b^{2} - 16b > 0$, the case of two real solutions.\n* Choice D ($b < 16$): ignores the factor $b$; at $b = -1$ the discriminant is $1 + 16 = 17 > 0$.\n\n**Test Day Takeaway:** When the discriminant is itself a quadratic in the constant, factor it and find where it is negative: strictly between its zeros.",
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
    question: "$15x^{3} + 10x^{2} + 3kx + 2k$\nIn the given expression, $k$ is a constant. Which of the following is equivalent to the given expression?",
    choices: [
      { id: "A", text: "$(5x^{2} + k)(3x + 2)$" },
      // distractor: splits the constant as 2k and 1, which expands to 15x^3 + 5x^2 + 6kx + 2k
      { id: "B", text: "$(5x^{2} + 2k)(3x + 1)$" },
      // distractor: flips the sign in the binomial, which turns +10x^2 into -10x^2 and +2k into -2k
      { id: "C", text: "$(5x^{2} + k)(3x - 2)$" },
      // distractor: puts the squared term in the wrong factor, which expands to 15x^3 + 10x + 3kx^2 + 2k
      { id: "D", text: "$(5x + k)(3x^{2} + 2)$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Factor by Grouping**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Group the first two terms and the last two: $5x^{2}(3x + 2) + k(3x + 2) = (5x^{2} + k)(3x + 2)$.\n\n**The Full Solution:**\nStep 1: Group the terms in pairs: $\\left(15x^{3} + 10x^{2}\\right) + \\left(3kx + 2k\\right)$.\nStep 2: Factor each pair: $15x^{3} + 10x^{2} = 5x^{2}(3x + 2)$ and $3kx + 2k = k(3x + 2)$.\nStep 3: The common factor is $3x + 2$, so the expression is $(5x^{2} + k)(3x + 2)$. Check: expanding gives $15x^{3} + 10x^{2} + 3kx + 2k$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($(5x^{2} + 2k)(3x + 1)$): expands to $15x^{3} + 5x^{2} + 6kx + 2k$, which has the wrong middle terms.\n* Choice C ($(5x^{2} + k)(3x - 2)$): expands to $15x^{3} - 10x^{2} + 3kx - 2k$; the sign in the binomial is wrong.\n* Choice D ($(5x + k)(3x^{2} + 2)$): expands to $15x^{3} + 10x + 3kx^{2} + 2k$, with the powers of $x$ on the wrong terms.\n\n**Test Day Takeaway:** A letter constant groups exactly like a number: factor each pair, and the shared binomial is one of the two factors.",
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
    question: "$21x^{3} - 14x^{2} + 3mx - 10$\nIn the given expression, $m$ is a constant. If $3x - 2$ is a factor of the expression, what is the value of $m$?",
    choices: [
      // distractor: takes the 2 from the factor 3x - 2 instead of solving for m
      { id: "A", text: "$2$" },
      { id: "B", text: "$5$" },
      // distractor: uses the magnitude of the constant term, 10, without dividing by the 2 in 3x - 2
      { id: "C", text: "$10$" },
      // distractor: reports 3m = 15, the coefficient of x, instead of m
      { id: "D", text: "$15$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Factor by Grouping**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** $21x^{3} - 14x^{2} = 7x^{2}(3x - 2)$, so $3mx - 10$ must equal $5(3x - 2) = 15x - 10$. Then $3m = 15$ and $m = 5$.\n\n**The Full Solution:**\nStep 1: Factor the first pair of terms: $21x^{3} - 14x^{2} = 7x^{2}(3x - 2)$.\nStep 2: For $3x - 2$ to be a factor of the whole expression, the second pair, $3mx - 10$, must also be a multiple of $3x - 2$. Its constant term is $-10 = 5(-2)$, so that multiple is $5(3x - 2) = 15x - 10$.\nStep 3: Matching the $x$-terms gives $3m = 15$, so $m = 5$. Check: $(7x^{2} + 5)(3x - 2) = 21x^{3} - 14x^{2} + 15x - 10$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): takes a number from the factor $3x - 2$ instead of solving for $m$.\n* Choice C ($10$): uses the constant term, which is $-2$ times the multiplier $5$.\n* Choice D ($15$): the whole coefficient $3m$, before dividing by $3$.\n\n**Test Day Takeaway:** Use the constant term to find the multiplier of the binomial, then match the $x$-term to solve for the constant.",
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
    question: "Which expression is equivalent to $10x^{2} + 4x - 15x - 6$?",
    choices: [
      // distractor: swaps the signs of both constants, giving a product that expands to 10x^2 + 11x - 6
      { id: "A", text: "$(2x + 3)(5x - 2)$" },
      // distractor: factors +3 instead of -3 out of -15x - 6, giving a product that expands to 10x^2 + 19x + 6
      { id: "B", text: "$(2x + 3)(5x + 2)$" },
      { id: "C", text: "$(2x - 3)(5x + 2)$" },
      // distractor: writes the second pair as -3(5x - 2), a sign error inside the binomial; this product expands to 10x^2 - 19x + 6
      { id: "D", text: "$(2x - 3)(5x - 2)$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Factor by Grouping**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Group in pairs: $2x(5x + 2) - 3(5x + 2) = (2x - 3)(5x + 2)$.\n\n**The Full Solution:**\nStep 1: Split the four terms into two pairs: $(10x^{2} + 4x) + (-15x - 6)$.\nStep 2: Factor each pair. The first pair is $2x(5x + 2)$, and taking $-3$ out of the second pair gives $-3(5x + 2)$. Both pairs share the binomial $5x + 2$.\nStep 3: Factor out the shared binomial: $(2x - 3)(5x + 2)$. Check by expanding: $10x^{2} + 4x - 15x - 6$, which matches the given expression ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($(2x + 3)(5x - 2)$): swaps the sign of both constants. It expands to $10x^{2} + 11x - 6$, but the given expression simplifies to $10x^{2} - 11x - 6$.\n* Choice B ($(2x + 3)(5x + 2)$): takes $+3$ out of $-15x - 6$. It expands to $10x^{2} + 19x + 6$.\n* Choice D ($(2x - 3)(5x - 2)$): writes the second pair as $-3(5x - 2)$, but $-3(5x - 2) = -15x + 6$, not $-15x - 6$. This product expands to $10x^{2} - 19x + 6$.\n\n**Test Day Takeaway:** When the second pair starts with a negative term, factor out the negative number; the two leftover binomials must be identical before you factor them out.",
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
    question: "$x^{3} - 4x^{2} + 3x - 12$\nWhich of the following is a factor of the given expression?",
    choices: [
      // distractor: factors -3 instead of 3 out of 3x - 12, which gives -3(-x + 4) and leads to x^2 - 3
      { id: "A", text: "$x^{2} - 3$" },
      // distractor: pairs x^2 with the 4 from the first pair instead of with the 3 from the second pair
      { id: "B", text: "$x^{2} + 4$" },
      // distractor: reverses the sign in the shared binomial, writing x + 4 instead of x - 4
      { id: "C", text: "$x + 4$" },
      { id: "D", text: "$x - 4$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Factor by Grouping**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Group in pairs: $x^{2}(x - 4) + 3(x - 4) = (x - 4)(x^{2} + 3)$, so $x - 4$ is a factor.\n\n**The Full Solution:**\nStep 1: Split the terms into two pairs: $(x^{3} - 4x^{2}) + (3x - 12)$.\nStep 2: Factor each pair: $x^{3} - 4x^{2} = x^{2}(x - 4)$ and $3x - 12 = 3(x - 4)$.\nStep 3: Factor out the shared binomial: $(x - 4)(x^{2} + 3)$. The factors are $x - 4$ and $x^{2} + 3$, and only $x - 4$ is a choice. Check at $x = 4$: $64 - 64 + 12 - 12 = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($x^{2} - 3$): uses the wrong sign for the common factor of $3x - 12$. That pair is $3(x - 4)$, so the other factor is $x^{2} + 3$.\n* Choice B ($x^{2} + 4$): pairs $x^{2}$ with the $4$ from the first pair. The $4$ belongs inside the binomial $x - 4$.\n* Choice C ($x + 4$): reverses the sign in the binomial. At $x = -4$ the expression equals $-64 - 64 - 12 - 12 = -152$, not $0$.\n\n**Test Day Takeaway:** A cubic with four terms usually factors by grouping; the shared binomial that appears in both pairs is a factor of the whole expression.",
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
    question: "Which expression is equivalent to $6pq - 8p + 9q - 12$?",
    choices: [
      // distractor: reverses both signs, giving a product that expands to 6pq + 8p - 9q - 12
      { id: "A", text: "$(2p - 3)(3q + 4)$" },
      // distractor: factors -3 instead of +3 out of 9q - 12, giving a product that expands to 6pq - 8p - 9q + 12
      { id: "B", text: "$(2p - 3)(3q - 4)$" },
      // distractor: swaps the constants 3 and 4 between the two factors, giving 6pq - 6p + 12q - 12
      { id: "C", text: "$(2p + 4)(3q - 3)$" },
      { id: "D", text: "$(2p + 3)(3q - 4)$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Factor by Grouping**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** Group in pairs: $2p(3q - 4) + 3(3q - 4) = (2p + 3)(3q - 4)$.\n\n**The Full Solution:**\nStep 1: Split the terms into two pairs: $(6pq - 8p) + (9q - 12)$.\nStep 2: Factor each pair: $6pq - 8p = 2p(3q - 4)$ and $9q - 12 = 3(3q - 4)$. Both pairs share $3q - 4$.\nStep 3: Factor out the shared binomial: $(2p + 3)(3q - 4)$. Check by expanding: $6pq - 8p + 9q - 12$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($(2p - 3)(3q + 4)$): reverses both signs. It expands to $6pq + 8p - 9q - 12$.\n* Choice B ($(2p - 3)(3q - 4)$): takes $-3$ out of $9q - 12$. It expands to $6pq - 8p - 9q + 12$.\n* Choice C ($(2p + 4)(3q - 3)$): swaps the $3$ and the $4$ between the factors. It expands to $6pq - 6p + 12q - 12$.\n\n**Test Day Takeaway:** Two variables do not change the method: pull the greatest common factor from each pair, then factor out the binomial they share.",
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
    question: "$2x^{3} - 6x^{2} + kx - 3k$\nIn the given expression, $k$ is a positive constant. Which of the following must be a factor of the expression?",
    choices: [
      { id: "A", text: "$x - 3$" },
      // distractor: reverses the sign in the shared binomial, writing x + 3 instead of x - 3
      { id: "B", text: "$x + 3$" },
      // distractor: drops the factor of 2 from 2x^2 when writing the second factor
      { id: "C", text: "$x^{2} + k$" },
      // distractor: uses the wrong sign for the common factor of kx - 3k, writing -k instead of +k
      { id: "D", text: "$2x^{2} - k$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Factor by Grouping**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** Group in pairs: $2x^{2}(x - 3) + k(x - 3) = (x - 3)(2x^{2} + k)$, so $x - 3$ is a factor no matter what $k$ is.\n\n**The Full Solution:**\nStep 1: Split the terms into two pairs: $(2x^{3} - 6x^{2}) + (kx - 3k)$.\nStep 2: Factor each pair: $2x^{3} - 6x^{2} = 2x^{2}(x - 3)$ and $kx - 3k = k(x - 3)$. The binomial $x - 3$ appears in both, whatever the value of $k$.\nStep 3: Factor out the shared binomial: $(x - 3)(2x^{2} + k)$. So $x - 3$ is a factor for every value of $k$. Check with $k = 4$: at $x = 3$ the expression is $54 - 54 + 12 - 12 = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($x + 3$): reverses the sign in the binomial. At $x = -3$ the expression is $-108 - 6k$, which is never $0$ for positive $k$.\n* Choice C ($x^{2} + k$): drops the $2$ from $2x^{2}$. The second factor is $2x^{2} + k$, and $x^{2} + k$ is not a factor of it.\n* Choice D ($2x^{2} - k$): uses the wrong sign for $k$. The pair $kx - 3k$ is $k(x - 3)$, so the second factor is $2x^{2} + k$.\n\n**Test Day Takeaway:** A letter in the coefficients does not block grouping; factor it out of its pair like any number, and the shared binomial is the factor that must hold for every value.",
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
    skills: ["function-transformations"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The function $f$ is defined by $f(x) = 3(2)^{x}$. In the $xy$-plane, the graph of $y = g(x)$ is the result of shifting the graph of $y = f(x)$ down $4$ units. Which equation defines $g$?",
    choices: [
      // distractor: shifts the graph up instead of down
      { id: "A", text: "$g(x) = 3(2)^{x} + 4$" },
      { id: "B", text: "$g(x) = 3(2)^{x} - 4$" },
      // distractor: changes the input, which shifts the graph left $4$ units
      { id: "C", text: "$g(x) = 3(2)^{x + 4}$" },
      // distractor: changes the input, which shifts the graph right $4$ units
      { id: "D", text: "$g(x) = 3(2)^{x - 4}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Vertical Shift**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Shifting a graph down $4$ units subtracts $4$ from every output, so $g(x) = 3(2)^{x} - 4$.\n\n**The Full Solution:**\nStep 1: Each point $(x, y)$ on the graph of $f$ moves to $(x, y - 4)$.\nStep 2: So every output of $g$ is $4$ less than the output of $f$: $g(x) = f(x) - 4$.\nStep 3: Substitute: $g(x) = 3(2)^{x} - 4$. Check: $f(0) = 3$ and $g(0) = 3 - 4 = -1$, which is $4$ units lower ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3(2)^{x} + 4$): adds $4$, which shifts the graph up.\n* Choice C ($3(2)^{x + 4}$): changes the input; that moves the graph left $4$ units, not down.\n* Choice D ($3(2)^{x - 4}$): changes the input; that moves the graph right $4$ units, not down.\n\n**Test Day Takeaway:** Up or down means add to or subtract from the whole function; left or right means change the input $x$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-composition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-366",
    domain: "advanced-math",
    skills: ["function-transformations"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The function $g$ is defined by $g(x) = f(x) + 5$, and some values of the function $f$ are shown in the table. For what value of $x$ is $g(x) = 24$?",
    questionTable: { headers: ["$x$", "$f(x)$"], rows: [["$0$", "$11$"], ["$2$", "$19$"], ["$4$", "$24$"], ["$6$", "$29$"]] },
    choices: [
      { id: "A", text: "$2$" },
      // distractor: looks for $f(x) = 24$, ignoring the $+5$ in $g$
      { id: "B", text: "$4$" },
      // distractor: adds $5$ to $24$ and looks for $f(x) = 29$
      { id: "C", text: "$6$" },
      // distractor: gives the value of $f(x)$ instead of the value of $x$
      { id: "D", text: "$19$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Vertical Shift**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $g(x) = 24$ means $f(x) + 5 = 24$, so $f(x) = 19$, which the table shows at $x = 2$.\n\n**The Full Solution:**\nStep 1: Substitute the definition of $g$: $f(x) + 5 = 24$.\nStep 2: Subtract $5$ from each side: $f(x) = 19$.\nStep 3: In the table, $f(x) = 19$ when $x = 2$. Check: $g(2) = f(2) + 5 = 19 + 5 = 24$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($4$): finds where $f(x) = 24$, which is where $f$, not $g$, equals $24$.\n* Choice C ($6$): adds $5$ to $24$ and finds $f(x) = 29$, but $f(x)$ must be $5$ less than $24$.\n* Choice D ($19$): finds $f(x) = 19$ but reports that output instead of the input $x$.\n\n**Test Day Takeaway:** When $g(x) = f(x) + 5$, an output of $g$ is $5$ more than the matching output of $f$; undo the $+5$ first, then read the table.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-composition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-367",
    domain: "advanced-math",
    skills: ["function-transformations"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "For the function $f$, $f(2) = 9$. The function $g$ is defined by $g(x) = f(x - 3) + 4$. Which point lies on the graph of $y = g(x)$ in the $xy$-plane?",
    choices: [
      // distractor: moves the point left $3$ units instead of right
      { id: "A", text: "$(-1, 13)$" },
      // distractor: moves the point down $4$ units instead of up
      { id: "B", text: "$(5, 5)$" },
      { id: "C", text: "$(5, 13)$" },
      // distractor: swaps the shifts, moving right $4$ and up $3$
      { id: "D", text: "$(6, 12)$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Horizontal Shift**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The point $(2, 9)$ is on the graph of $f$, and $f(x - 3) + 4$ moves the graph right $3$ and up $4$, so it moves to $(5, 13)$.\n\n**The Full Solution:**\nStep 1: Since $f(2) = 9$, choose $x$ so that the input $x - 3$ equals $2$: $x = 5$.\nStep 2: Then $y = f(5 - 3) + 4 = f(2) + 4 = 9 + 4 = 13$.\nStep 3: So $(5, 13)$ is on the graph. Check: $(5, 13)$ is $3$ units right of and $4$ units above $(2, 9)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-1, 13)$): reads $x - 3$ as a shift left; the input must be $2$, so $x = 5$.\n* Choice B ($(5, 5)$): subtracts $4$ from the output instead of adding it.\n* Choice D ($(6, 12)$): pairs the $4$ with $x$ and the $3$ with $y$.\n\n**Test Day Takeaway:** Inside the parentheses, $x - 3$ shifts the graph right $3$; outside, $+ 4$ shifts it up $4$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-composition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-368",
    domain: "advanced-math",
    skills: ["function-transformations", "function-interpretation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The function $f$ is defined by $f(x) = x^{2} + 5$. In the $xy$-plane, the graph of $y = g(x)$ is the result of translating the graph of $y = f(x)$ $2$ units to the right and $3$ units down. Which equation defines $g$?",
    choices: [
      // distractor: replaces $x$ with $x + 2$, which translates the graph to the left
      { id: "A", text: "$g(x) = (x + 2)^{2} + 2$" },
      { id: "B", text: "$g(x) = (x - 2)^{2} + 2$" },
      // distractor: adds $3$, which translates the graph up
      { id: "C", text: "$g(x) = (x - 2)^{2} + 8$" },
      // distractor: swaps the shifts, moving $3$ units right and $2$ units down
      { id: "D", text: "$g(x) = (x - 3)^{2} + 3$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Function from Shifted Graph**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Right $2$ replaces $x$ with $x - 2$, and down $3$ subtracts $3$: $g(x) = (x - 2)^{2} + 5 - 3 = (x - 2)^{2} + 2$.\n\n**The Full Solution:**\nStep 1: The vertex of the graph of $f$ is $(0, 5)$.\nStep 2: Moving it $2$ units right and $3$ units down gives the vertex $(2, 2)$.\nStep 3: The shape is unchanged, so $g(x) = (x - 2)^{2} + 2$. Check: $g(2) = 2$, which is $f(0) - 3$ at an $x$-value $2$ units to the right ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($(x + 2)^{2} + 2$): uses $x + 2$, which moves the graph left.\n* Choice C ($(x - 2)^{2} + 8$): adds $3$ to the output, which moves the graph up.\n* Choice D ($(x - 3)^{2} + 3$): moves the graph $3$ units right and $2$ units down, swapping the two shifts.\n\n**Test Day Takeaway:** Track the vertex: a translation moves it, and the coefficient of $x^{2}$ stays the same.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-composition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-369",
    domain: "advanced-math",
    skills: ["function-evaluation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "$f(x) = ax^{3} + 4$\nIn the given function, $a$ is a constant. If $f(2) = 28$, what is the value of $f(-2)$?",
    choices: [
      // distractor: assumes $f(-2)$ is the opposite of $f(2)$, ignoring the constant $4$
      { id: "A", text: "$-28$" },
      // distractor: finds $a(-2)^{3} = -24$ and forgets to add $4$
      { id: "B", text: "$-24$" },
      { id: "C", text: "$-20$" },
      // distractor: evaluates $(-2)^{3}$ as $8$
      { id: "D", text: "$28$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** $8a + 4 = 28$ gives $a = 3$, so $f(-2) = 3(-8) + 4 = -20$.\n\n**The Full Solution:**\nStep 1: Use $f(2) = 28$: $a(2)^{3} + 4 = 28$, so $8a = 24$ and $a = 3$.\nStep 2: Then $f(x) = 3x^{3} + 4$.\nStep 3: $f(-2) = 3(-2)^{3} + 4 = -24 + 4 = -20$. Check: $f(2) = 24 + 4 = 28$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-28$): flips the sign of $f(2)$; only the $3x^{3}$ part changes sign, not the $+ 4$.\n* Choice B ($-24$): computes $3(-2)^{3}$ correctly but leaves off the $+ 4$.\n* Choice D ($28$): treats $(-2)^{3}$ as $8$; an odd power of a negative number is negative.\n\n**Test Day Takeaway:** Find the constant first, then substitute the negative input in parentheses.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-composition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-am-370",
    domain: "advanced-math",
    skills: ["function-transformations", "vertex-form"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "$f(x) = 2x^{2} - 12x + 13$\nIn the $xy$-plane, the graph of $y = g(x)$ is the result of translating the graph of $y = f(x)$ $4$ units to the right. The function $g$ can be written as $g(x) = 2x^{2} + bx + c$, where $b$ and $c$ are constants. What is the value of $b$?",
    choices: [
      { id: "A", text: "$-28$" },
      // distractor: moves the vertex to $x = 7$ but writes $b = -2(7)$, leaving out the leading coefficient $2$
      { id: "B", text: "$-14$" },
      // distractor: assumes a translation does not change the $x$-coefficient
      { id: "C", text: "$-12$" },
      // distractor: translates the graph to the left, moving the vertex to $x = -1$
      { id: "D", text: "$4$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Function Transformation**\n\n**Choice A is correct.**\n\n**The Fast Way (~45s):** The vertex of $f$ is at $x = \\frac{12}{4} = 3$, so the vertex of $g$ is at $x = 7$; then $-\\frac{b}{2(2)} = 7$ and $b = -28$.\n\n**The Full Solution:**\nStep 1: Complete the square: $f(x) = 2(x - 3)^{2} - 5$, so the vertex of the graph of $f$ is $(3, -5)$.\nStep 2: Moving $4$ units to the right gives the vertex $(7, -5)$, so $g(x) = 2(x - 7)^{2} - 5$.\nStep 3: Expand: $g(x) = 2x^{2} - 28x + 93$, so $b = -28$. Check: $f(x - 4) = 2(x - 4)^{2} - 12(x - 4) + 13 = 2x^{2} - 28x + 93$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-14$): finds the new vertex $x = 7$ but uses $b = -2h$ instead of $b = -2ah = -2(2)(7)$.\n* Choice C ($-12$): keeps the $x$-coefficient of $f$; a horizontal translation changes $b$ and $c$.\n* Choice D ($4$): moves the vertex left to $x = -1$, which gives $g(x) = 2x^{2} + 4x - 3$.\n\n**Test Day Takeaway:** For a horizontal translation, move the vertex and keep $a$; then $b = -2ah$ for the new vertex $(h, k)$.",
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
    question: "The function $f$ is defined by $f(x) = x^{2} - 5x + 2$. What is the value of $f(-3)$?",
    choices: [
      // distractor: computes (-3)^2 as -9 and -5(-3) as -15
      { id: "A", text: "$-22$" },
      // distractor: computes -5(-3) as -15 instead of 15
      { id: "B", text: "$-4$" },
      // distractor: computes (-3)^2 as -9 instead of 9
      { id: "C", text: "$8$" },
      { id: "D", text: "$26$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** $f(-3) = (-3)^{2} - 5(-3) + 2 = 9 + 15 + 2 = 26$.\n\n**The Full Solution:**\nStep 1: Substitute $-3$ for every $x$, keeping the parentheses: $f(-3) = (-3)^{2} - 5(-3) + 2$.\nStep 2: Evaluate each term: $(-3)^{2} = 9$ and $-5(-3) = 15$.\nStep 3: Add: $9 + 15 + 2 = 26$. Check: both $x^{2}$ and $-5x$ are positive when $x$ is negative, so the value must exceed $2$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-22$): makes both sign errors, computing $-9 - 15 + 2$.\n* Choice B ($-4$): squares correctly but treats $-5(-3)$ as $-15$, computing $9 - 15 + 2$.\n* Choice C ($8$): treats $(-3)^{2}$ as $-9$, computing $-9 + 15 + 2$.\n\n**Test Day Takeaway:** Put a negative input in parentheses before you square it or multiply it; a negative number squared is positive, and a negative times a negative is positive.",
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
    question: "$g(x) = 7 - 2x^{3}$\nWhat is the value of $g(-2)$ for the given function $g$?",
    choices: [
      // distractor: computes (-2)^3 as 8 instead of -8, getting 7 - 16
      { id: "A", text: "$-9$" },
      // distractor: computes (-2)^3 as -6 by multiplying by 3, getting 7 + 12
      { id: "B", text: "$19$" },
      { id: "C", text: "$23$" },
      // distractor: cubes 2 times the input, computing 7 - (2 * -2)^3 = 7 + 64
      { id: "D", text: "$71$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $(-2)^{3} = -8$, so $g(-2) = 7 - 2(-8) = 7 + 16 = 23$.\n\n**The Full Solution:**\nStep 1: Substitute $-2$ for $x$: $g(-2) = 7 - 2(-2)^{3}$.\nStep 2: Cube first: $(-2)^{3} = (-2)(-2)(-2) = -8$.\nStep 3: Then multiply and subtract: $7 - 2(-8) = 7 + 16 = 23$. Check: $-2x^{3}$ is positive for negative $x$, so $g(-2)$ must be greater than $7$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-9$): treats $(-2)^{3}$ as $8$. An odd power of a negative number is negative.\n* Choice B ($19$): multiplies $-2$ by $3$ instead of cubing it, so the cube becomes $-6$.\n* Choice D ($71$): multiplies by $2$ before cubing, computing $(-4)^{3} = -64$. The exponent applies only to $x$.\n\n**Test Day Takeaway:** Evaluate the power before the coefficient, and remember that an odd power keeps a negative sign while an even power removes it.",
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
    question: "If $f(x) = 2^{x} + x^{2}$, what is the value of $f(-2)$?",
    choices: [
      // distractor: computes (-2)^2 as -4, getting 0.25 - 4
      { id: "A", text: "$-3.75$" },
      // distractor: computes 2^(-2) as -4, getting -4 + 4
      { id: "B", text: "$0$" },
      // distractor: computes 2^(-2) as -0.25, getting -0.25 + 4
      { id: "C", text: "$3.75$" },
      { id: "D", text: "$4.25$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** $2^{-2} = \\frac{1}{4} = 0.25$ and $(-2)^{2} = 4$, so $f(-2) = 4.25$.\n\n**The Full Solution:**\nStep 1: Substitute $-2$ for $x$: $f(-2) = 2^{-2} + (-2)^{2}$.\nStep 2: A negative exponent means a reciprocal: $2^{-2} = \\frac{1}{2^{2}} = \\frac{1}{4} = 0.25$. The square is $(-2)^{2} = 4$.\nStep 3: Add: $\\frac{1}{4} + 4 = 4.25$. Check: both terms are positive, since $2^{x}$ is always positive and so is a nonzero square ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3.75$): treats $(-2)^{2}$ as $-4$, computing $\\frac{1}{4} - 4$.\n* Choice B ($0$): treats $2^{-2}$ as $-4$, computing $-4 + 4$.\n* Choice C ($3.75$): treats $2^{-2}$ as $-\\frac{1}{4}$. A negative exponent gives a reciprocal, not a negative number.\n\n**Test Day Takeaway:** A negative exponent flips the base into a fraction; it never makes the value negative.",
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
    question: "$f(x) = x^{2} + bx - 6$\nIn the given function $f$, $b$ is a constant. If $f(-4) = 18$, what is the value of $b$?",
    choices: [
      // distractor: computes (-4)^2 as -16, solving -16 - 4b - 6 = 18
      { id: "A", text: "$-10$" },
      { id: "B", text: "$-2$" },
      // distractor: drops the constant -6, solving 16 - 4b = 18
      { id: "C", text: "$-\\frac{1}{2}$" },
      // distractor: writes b(-4) as +4b, solving 16 + 4b - 6 = 18
      { id: "D", text: "$2$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $f(-4) = 16 - 4b - 6 = 10 - 4b$, so $10 - 4b = 18$ and $b = -2$.\n\n**The Full Solution:**\nStep 1: Substitute $-4$ for $x$: $f(-4) = (-4)^{2} + b(-4) - 6 = 16 - 4b - 6$.\nStep 2: Simplify and set equal to $18$: $10 - 4b = 18$, so $-4b = 8$.\nStep 3: Divide by $-4$: $b = -2$. Check: $f(x) = x^{2} - 2x - 6$ gives $f(-4) = 16 + 8 - 6 = 18$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-10$): treats $(-4)^{2}$ as $-16$, which leads to $-22 - 4b = 18$.\n* Choice C ($-\\frac{1}{2}$): leaves out the $-6$, solving $16 - 4b = 18$.\n* Choice D ($2$): writes $b(-4)$ as $+4b$, solving $10 + 4b = 18$. The product of $b$ and $-4$ is $-4b$.\n\n**Test Day Takeaway:** With an unknown constant, substitute the given input, simplify to a linear equation in the constant, and check by evaluating again.",
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
    question: "For the function $f$ defined by $f(x) = 6 - x^{2}$, what is the value of $f(-4)$?",
    choices: [
      { id: "A", text: "$-10$" },
      // distractor: doubles -4 instead of squaring it, using 8 for the square and getting 6 - 8
      { id: "B", text: "$-2$" },
      // distractor: uses -8 for the square (multiplying by 2 instead of squaring), getting 6 + 8
      { id: "C", text: "$14$" },
      // distractor: treats (-4)^2 as -16, getting 6 + 16
      { id: "D", text: "$22$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $(-4)^{2} = 16$, so $f(-4) = 6 - 16 = -10$.\n\n**The Full Solution:**\nStep 1: Substitute $-4$ for $x$: $f(-4) = 6 - (-4)^{2}$.\nStep 2: Square first: $(-4)^{2} = 16$.\nStep 3: Subtract: $6 - 16 = -10$. Check: $x^{2}$ is the same for $4$ and $-4$, and $f(4) = 6 - 16 = -10$ as well ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-2$): doubles $4$ to get $8$ instead of squaring it.\n* Choice C ($14$): multiplies $-4$ by $2$ to get $-8$ and subtracts that, computing $6 + 8$.\n* Choice D ($22$): treats $(-4)^{2}$ as $-16$. The square of a negative number is positive, so $6 - 16$ is subtracted, not added.\n\n**Test Day Takeaway:** In $6 - x^{2}$, square the input first; the minus sign in front of $x^{2}$ then subtracts that positive square.",
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
    question: "For the exponential function $f$, the table shows three values of $x$ and their corresponding values of $f(x)$. What is the value of $f(-1)$?",
    questionTable: { headers: ["$x$", "$f(x)$"], rows: [["$0$", "$12$"], ["$1$", "$36$"], ["$2$", "$108$"]] },
    choices: [
      // distractor: treats 3^(-1) as -3, computing 12(-3)
      { id: "A", text: "$-36$" },
      // distractor: assumes the values change by a constant difference of 24, computing 12 - 24
      { id: "B", text: "$-12$" },
      { id: "C", text: "$4$" },
      // distractor: subtracts the growth factor 3 from 12 instead of dividing by it
      { id: "D", text: "$9$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Each step of $1$ in $x$ multiplies $f(x)$ by $3$, so going from $x = 0$ back to $x = -1$ divides by $3$: $\\frac{12}{3} = 4$.\n\n**The Full Solution:**\nStep 1: Find the growth factor: $\\frac{36}{12} = 3$ and $\\frac{108}{36} = 3$. With $f(0) = 12$, the function is $f(x) = 12(3)^{x}$.\nStep 2: Substitute $x = -1$: $f(-1) = 12(3)^{-1} = 12 \\cdot \\frac{1}{3}$.\nStep 3: Compute: $f(-1) = 4$. Check: multiplying $4$ by $3$ gives $12 = f(0)$, so the pattern continues backward ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-36$): treats $3^{-1}$ as $-3$. A negative exponent gives the reciprocal $\\frac{1}{3}$.\n* Choice B ($-12$): uses a constant difference of $24$, as if $f$ were linear. The table grows by a factor, not by a fixed amount.\n* Choice D ($9$): subtracts the factor $3$ from $12$ instead of dividing by it.\n\n**Test Day Takeaway:** For an exponential function, moving one step left in $x$ divides by the growth factor; a negative input never makes the output negative.",
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
    question: "The function $f$ is defined by $f(x) = x^{3} - 4$. The graph of $y = g(x)$ is the result of shifting the graph of $y = f(x)$ up $6$ units. Which equation defines $g$?",
    choices: [
      { id: "A", text: "$g(x) = x^{3} + 2$" },
      // distractor: shifts down 6 units instead of up, subtracting 6 from f(x)
      { id: "B", text: "$g(x) = x^{3} - 10$" },
      // distractor: shifts the graph horizontally (6 units left) instead of up
      { id: "C", text: "$g(x) = (x + 6)^{3} - 4$" },
      // distractor: shifts the graph horizontally (6 units right) instead of up
      { id: "D", text: "$g(x) = (x - 6)^{3} - 4$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Function Transformation**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** A shift up $6$ adds $6$ to every output: $g(x) = x^{3} - 4 + 6 = x^{3} + 2$.\n\n**The Full Solution:**\nStep 1: Shifting a graph up $6$ units adds $6$ to each $y$-value, so $g(x) = f(x) + 6$.\nStep 2: Substitute $f(x) = x^{3} - 4$: $g(x) = x^{3} - 4 + 6$.\nStep 3: Simplify: $g(x) = x^{3} + 2$. Check at $x = 0$: $f(0) = -4$ and $g(0) = 2$, which is $6$ units higher ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($g(x) = x^{3} - 10$): subtracts $6$, which shifts the graph down.\n* Choice C ($g(x) = (x + 6)^{3} - 4$): changes the input, which moves the graph $6$ units left.\n* Choice D ($g(x) = (x - 6)^{3} - 4$): changes the input, which moves the graph $6$ units right.\n\n**Test Day Takeaway:** Up and down shifts change the output, so they are added outside the function; left and right shifts change the input inside it.",
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
    question: "In the $xy$-plane, the graph of $y = f(x)$ passes through the point $(3, -2)$. Which point lies on the graph of $y = f(x) + 5$?",
    choices: [
      // distractor: moves the point 5 units left instead of 5 units up
      { id: "A", text: "$(-2, -2)$" },
      // distractor: moves the point 5 units down instead of up
      { id: "B", text: "$(3, -7)$" },
      { id: "C", text: "$(3, 3)$" },
      // distractor: moves the point 5 units right instead of up
      { id: "D", text: "$(8, -2)$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Function Transformation**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Adding $5$ to $f(x)$ raises every point $5$ units, so $(3, -2)$ moves to $(3, 3)$.\n\n**The Full Solution:**\nStep 1: Since $(3, -2)$ is on the graph of $y = f(x)$, $f(3) = -2$.\nStep 2: On the new graph, the $y$-value at $x = 3$ is $f(3) + 5 = -2 + 5 = 3$.\nStep 3: So the point $(3, 3)$ lies on the graph of $y = f(x) + 5$. Check: the $x$-coordinate is unchanged, because only the output was changed ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-2, -2)$): moves the point left $5$ units, which is what replacing $x$ with $x + 5$ would do.\n* Choice B ($(3, -7)$): subtracts $5$ from the $y$-coordinate instead of adding it.\n* Choice D ($(8, -2)$): moves the point right $5$ units, as if the $5$ were added to $x$.\n\n**Test Day Takeaway:** A number added outside $f(x)$ changes only the $y$-coordinates of the graph's points.",
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
    question: "The function $h$ is defined by $h(x) = f(x + 7)$. Which of the following is the best description of the graph of $y = h(x)$ in relation to the graph of $y = f(x)$?",
    choices: [
      // distractor: treats the 7 inside the parentheses as a change to the output
      { id: "A", text: "The graph of $f$ shifted $7$ units up" },
      // distractor: treats the 7 as a change to the output and also reverses its direction
      { id: "B", text: "The graph of $f$ shifted $7$ units down" },
      { id: "C", text: "The graph of $f$ shifted $7$ units left" },
      // distractor: recognizes a horizontal shift but moves in the direction of the plus sign
      { id: "D", text: "The graph of $f$ shifted $7$ units right" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Function Transformation**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Adding $7$ to the input reaches each output $7$ units sooner, so the graph moves $7$ units left.\n\n**The Full Solution:**\nStep 1: The $7$ is inside the parentheses, so it changes the input, which is a horizontal shift.\nStep 2: If $f(a) = b$, then $h(a - 7) = f(a - 7 + 7) = f(a) = b$. Each point $(a, b)$ on the graph of $f$ corresponds to $(a - 7, b)$ on the graph of $h$.\nStep 3: Every point moves $7$ units left. Check: if $f(0) = 1$, then $h(-7) = f(0) = 1$, so the point at $x = 0$ appears at $x = -7$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A (shifted up): a vertical shift would be $f(x) + 7$, with the $7$ outside the function.\n* Choice B (shifted down): this is $f(x) - 7$, a change to the output.\n* Choice D (shifted right): follows the plus sign. Adding inside the parentheses moves the graph left.\n\n**Test Day Takeaway:** Inside the parentheses, $x + c$ shifts the graph $c$ units left and $x - c$ shifts it right.",
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
    question: "The graph of $y = f(x)$ is shown. What are the $x$-intercepts of the graph of $y = f(x - 4)$?",
    diagram: { type: "cubicGraph", params: { a: 0.3, roots: [-3, 0, 2], xRange: [-4, 3], yRange: [-8, 6], label: "y = f(x)" } },
    choices: [
      // distractor: multiplies each x-intercept by 4 instead of adding 4
      { id: "A", text: "$-12$, $0$, and $8$" },
      // distractor: subtracts 4 from each x-intercept, shifting the graph left
      { id: "B", text: "$-7$, $-4$, and $-2$" },
      // distractor: leaves the x-intercepts unchanged, treating the 4 as a vertical change
      { id: "C", text: "$-3$, $0$, and $2$" },
      { id: "D", text: "$1$, $4$, and $6$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Function Transformation**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** The graph crosses the $x$-axis at $-3$, $0$, and $2$; replacing $x$ with $x - 4$ moves each crossing $4$ units right, to $1$, $4$, and $6$.\n\n**The Full Solution:**\nStep 1: Read the $x$-intercepts of $y = f(x)$ from the graph: $x = -3$, $x = 0$, and $x = 2$.\nStep 2: The graph of $y = f(x - 4)$ meets the $x$-axis where $x - 4$ equals one of those values.\nStep 3: Solve $x - 4 = -3$, $x - 4 = 0$, and $x - 4 = 2$: $x = 1$, $x = 4$, and $x = 6$. Check: the gaps between the intercepts, $3$ and $2$, are unchanged by a shift ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-12$, $0$, and $8$): multiplies each intercept by $4$. A stretch would change the gaps; a shift keeps them.\n* Choice B ($-7$, $-4$, and $-2$): subtracts $4$, which moves the graph left. Subtracting inside the parentheses moves it right.\n* Choice C ($-3$, $0$, and $2$): keeps the original intercepts, as if the $4$ changed the output.\n\n**Test Day Takeaway:** For $f(x - h)$, set the inside expression equal to each original root; every $x$-intercept moves $h$ units right.",
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
    question: "The graph of $y = f(x)$, where $f$ is a quadratic function, is shown. If $g(x) = f(x + 3)$, what is the $x$-coordinate of the vertex of the graph of $y = g(x)$?",
    diagram: { type: "quadraticIntercepts", params: { intercepts: [-2, 6] } },
    choices: [
      // distractor: shifts the left x-intercept, -2, instead of the vertex
      { id: "A", text: "$-5$" },
      { id: "B", text: "$-1$" },
      // distractor: reports the vertex of f without applying the shift
      { id: "C", text: "$2$" },
      // distractor: shifts the vertex 3 units right instead of left
      { id: "D", text: "$5$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Function Transformation**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The vertex of $f$ is midway between the $x$-intercepts $-2$ and $6$, at $x = 2$; $f(x + 3)$ moves it $3$ units left, to $x = -1$.\n\n**The Full Solution:**\nStep 1: The graph crosses the $x$-axis at $x = -2$ and $x = 6$. A parabola is symmetric, so its vertex is at $x = \\frac{-2 + 6}{2} = 2$.\nStep 2: Replacing $x$ with $x + 3$ shifts the graph $3$ units left.\nStep 3: The vertex of the graph of $y = g(x)$ is at $x = 2 - 3 = -1$. Check: $g(-1) = f(-1 + 3) = f(2)$, the minimum value of $f$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): shifts the left $x$-intercept, $-2$, instead of the vertex.\n* Choice C ($2$): gives the vertex of $f$ and leaves out the shift.\n* Choice D ($5$): moves the vertex $3$ units right. Adding inside the parentheses moves the graph left.\n\n**Test Day Takeaway:** Find the vertex of a parabola from its $x$-intercepts by averaging them, then apply the shift to that single point.",
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
    question: "$g(x) = 2x^{2} - 12x + 23$\nThe graph of $y = g(x)$ in the $xy$-plane is the result of translating the graph of $y = 2x^{2}$ to the right $h$ units and up $k$ units, where $h$ and $k$ are constants. What is the value of $h + k$?",
    choices: [
      // distractor: takes h = -3 by reading the sign of (x - 3) backward, so h + k = -3 + 5
      { id: "A", text: "$2$" },
      { id: "B", text: "$8$" },
      // distractor: completes the square without multiplying 9 by 2, getting k = 14 and h + k = 17
      { id: "C", text: "$17$" },
      // distractor: uses 12/2 = 6 for h without dividing by the leading coefficient, so k = g(6) = 23 and h + k = 29
      { id: "D", text: "$29$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Function Transformation**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** $2x^{2} - 12x + 23 = 2(x - 3)^{2} + 5$, so the graph is $y = 2x^{2}$ moved $3$ right and $5$ up: $h + k = 8$.\n\n**The Full Solution:**\nStep 1: Factor $2$ from the $x$-terms: $g(x) = 2(x^{2} - 6x) + 23$.\nStep 2: Complete the square: $x^{2} - 6x = (x - 3)^{2} - 9$, so $g(x) = 2(x - 3)^{2} - 18 + 23 = 2(x - 3)^{2} + 5$.\nStep 3: Translating $y = 2x^{2}$ right $3$ and up $5$ gives $y = 2(x - 3)^{2} + 5$, so $h = 3$, $k = 5$, and $h + k = 8$. Check: $g(3) = 18 - 36 + 23 = 5$, the vertex height ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): takes $h = -3$ from $(x - 3)$. Subtracting $3$ inside the square moves the graph right, so $h = 3$.\n* Choice C ($17$): subtracts only $9$ instead of $2(9) = 18$ when completing the square, so $k$ becomes $14$.\n* Choice D ($29$): halves $12$ without dividing by the leading coefficient $2$, so it uses $h = 6$ and $k = g(6) = 23$.\n\n**Test Day Takeaway:** The vertex of $ax^{2} + bx + c$ is at $x = -\\frac{b}{2a}$; once you have it, the vertical shift is the function's value there.",
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
    question: "The estimated value, in dollars, of a car $t$ years after it was purchased is given by $v(t) = 24{,}000(0.85)^{t}$. What is the best interpretation of $0.85$ in this context?",
    choices: [
      { id: "A", text: "The estimated value of the car decreases by $15\\%$ each year." },
      // distractor: reads the base 0.85 as the percent lost rather than the percent kept
      { id: "B", text: "The estimated value of the car decreases by $85\\%$ each year." },
      // distractor: notices the 15% difference from 1 but reads it as growth
      { id: "C", text: "The estimated value of the car increases by $15\\%$ each year." },
      // distractor: treats the base as an amount subtracted each year, as in a linear model
      { id: "D", text: "The estimated value of the car decreases by \\$0.85 each year." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Interpret Exponential Parameters**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Each year the value is multiplied by $0.85$, so it keeps $85\\%$ and loses $15\\%$.\n\n**The Full Solution:**\nStep 1: In $v(t) = 24{,}000(0.85)^{t}$, increasing $t$ by $1$ multiplies the value by $0.85$.\nStep 2: Multiplying by $0.85 = 1 - 0.15$ keeps $85\\%$ of the value and removes $15\\%$.\nStep 3: So the estimated value decreases by $15\\%$ each year. Check: after $1$ year, $24{,}000(0.85) = 20{,}400$, which is $3{,}600$, or $15\\%$, less than $24{,}000$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($85\\%$ decrease): the base is the part that remains. A decrease of $85\\%$ would use a base of $0.15$.\n* Choice C ($15\\%$ increase): a base less than $1$ means decay, not growth.\n* Choice D (\\$0.85 decrease): a fixed amount subtracted each year describes a linear model, not an exponential one.\n\n**Test Day Takeaway:** In $a(b)^{t}$, a base below $1$ is the fraction kept each period; the percent decrease is $1 - b$.",
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
    question: "The table shows the mass, in grams, of a sample $d$ days after it was prepared. The mass can be modeled by $M(d) = a(b)^{d}$, where $a$ and $b$ are constants. What is the value of $b$?",
    questionTable: { headers: ["$d$", "$M(d)$"], rows: [["$0$", "$320$"], ["$1$", "$240$"], ["$2$", "$180$"], ["$3$", "$135$"]] },
    choices: [
      // distractor: gives the fraction of the mass lost each day, 80/320, instead of the fraction kept
      { id: "A", text: "$0.25$" },
      { id: "B", text: "$0.75$" },
      // distractor: divides each mass by the next one, 320/240, instead of the next by the previous
      { id: "C", text: "$\\frac{4}{3}$" },
      // distractor: gives the drop in mass from day 0 to day 1, 320 - 240
      { id: "D", text: "$80$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Interpret Exponential Parameters**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $b$ is the ratio of consecutive masses: $\\frac{240}{320} = 0.75$.\n\n**The Full Solution:**\nStep 1: In $M(d) = a(b)^{d}$, each increase of $1$ in $d$ multiplies the mass by $b$, so $b = \\frac{M(1)}{M(0)}$.\nStep 2: From the table, $\\frac{240}{320} = 0.75$.\nStep 3: So $b = 0.75$, and $a = M(0) = 320$. Check the other rows: $240(0.75) = 180$ and $180(0.75) = 135$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.25$): gives the fraction lost each day, $\\frac{80}{320}$. The base is the fraction kept.\n* Choice C ($\\frac{4}{3}$): divides the earlier mass by the later one. That ratio would describe growth.\n* Choice D ($80$): gives the first-day drop, $320 - 240$, which is a difference, not a growth factor.\n\n**Test Day Takeaway:** The base of an exponential model is a ratio of consecutive outputs, later over earlier; a difference of outputs is a linear rate.",
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
    question: "The table shows the attendance at a museum exhibit during each of its first five weeks. Which statement best describes how the attendance changed from each week to the next?",
    questionTable: { headers: ["Week", "Attendance"], rows: [["$1$", "$625$"], ["$2$", "$750$"], ["$3$", "$900$"], ["$4$", "$1{,}080$"], ["$5$", "$1{,}296$"]] },
    choices: [
      // distractor: uses the first difference, 750 - 625 = 125, as a constant change, but the later differences are larger
      { id: "A", text: "The attendance increased by $125$ people each week." },
      // distractor: reads the growth factor 1.2 as a percent
      { id: "B", text: "The attendance increased by $1.2\\%$ each week." },
      // distractor: reads the growth factor 1.2 as 120% growth instead of 120% of the previous week
      { id: "C", text: "The attendance increased by $120\\%$ each week." },
      { id: "D", text: "The attendance increased by $20\\%$ each week." }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Interpret Exponential Parameters**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** Each week's attendance divided by the previous week's is $1.2$, so the attendance grew by $20\\%$ each week.\n\n**The Full Solution:**\nStep 1: Find the ratios of consecutive weeks: $\\frac{750}{625} = 1.2$, $\\frac{900}{750} = 1.2$, $\\frac{1{,}080}{900} = 1.2$, and $\\frac{1{,}296}{1{,}080} = 1.2$.\nStep 2: Multiplying by $1.2$ means each week's attendance is $120\\%$ of the week before, which is an increase of $20\\%$.\nStep 3: So the attendance increased by $20\\%$ each week. Check: $625(1.2)^{4} = 1{,}296$, matching week $5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($125$ people): the differences are $125$, $150$, $180$, and $216$, so the change is not a constant number of people.\n* Choice B ($1.2\\%$): uses the factor $1.2$ as a percent. A factor of $1.2$ is a $20\\%$ increase.\n* Choice C ($120\\%$): an increase of $120\\%$ would multiply by $2.2$ each week.\n\n**Test Day Takeaway:** If consecutive ratios are equal, the change is exponential; subtract $1$ from the ratio to get the percent increase.",
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
    question: "The amount of a medication, in milligrams, in a patient's bloodstream $t$ hours after a dose is modeled by $A(t) = 500(0.25)^{\\frac{t}{12}}$. What is the best interpretation of $12$ in this context?",
    choices: [
      // distractor: treats the exponential model as linear, reading 12 as a constant hourly decrease
      { id: "A", text: "The number of milligrams by which the amount of medication decreases each hour" },
      // distractor: reads the factor 0.25 as the percent decrease instead of the fraction that remains
      { id: "B", text: "The number of hours it takes for the amount of medication to decrease by $25\\%$" },
      // distractor: assumes the time in the exponent is always the time it takes for the amount to decrease by half
      { id: "C", text: "The number of hours it takes for the amount of medication to decrease by $50\\%$" },
      { id: "D", text: "The number of hours it takes for the amount of medication to decrease by $75\\%$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Interpret Exponential Parameters**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Each time $t$ increases by $12$, the amount is multiplied by $0.25$, so $25\\%$ remains and the amount has decreased by $75\\%$.\n\n**The Full Solution:**\nStep 1: When $t$ increases by $12$, the exponent $\\frac{t}{12}$ increases by $1$, so the amount is multiplied by $0.25$ one more time.\nStep 2: Multiplying by $0.25$ leaves $25\\%$ of the amount, which is a decrease of $100\\% - 25\\% = 75\\%$.\nStep 3: So $12$ is the number of hours it takes for the amount of medication to decrease by $75\\%$. Check: $A(0) = 500$ and $A(12) = 500(0.25) = 125$, and $125$ is $75\\%$ less than $500$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: treats the model as linear; an exponential model decreases by a percent, not by a fixed number of milligrams.\n* Choice B: reads $0.25$ as the percent decrease, but $0.25$ is the fraction that remains.\n* Choice C: assumes the time in the exponent is the time it takes for the amount to fall by half; after $12$ hours only a quarter remains, not a half.\n\n**Test Day Takeaway:** In $a(b)^{\\frac{t}{k}}$, the amount is multiplied by $b$ every $k$ units of time; for a decay factor $b$, the percent decrease over that time is $(1 - b) \\times 100\\%$.",
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
    question: "The value, in dollars, of a savings account $t$ years after it was opened is modeled by $A(t) = 1{,}500(1.03)^{t}$. Which statement is the best interpretation of $1{,}500$ in this context?",
    choices: [
      // distractor: treats the starting value as a fixed yearly increase, as in a linear model
      { id: "A", text: "The value of the account increases by \\$1,500 each year." },
      // distractor: evaluates the model at t = 1 instead of t = 0
      { id: "B", text: "The value of the account $1$ year after it was opened was \\$1,500." },
      { id: "C", text: "The value of the account when it was opened was \\$1,500." },
      // distractor: treats the coefficient as an upper limit, but an exponential growth model keeps increasing
      { id: "D", text: "The greatest value the account will reach is \\$1,500." }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Interpret Exponential Parameters**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** At $t = 0$, $A(0) = 1{,}500(1.03)^{0} = 1{,}500$, so $1{,}500$ is the value when the account was opened.\n\n**The Full Solution:**\nStep 1: The account was opened at $t = 0$.\nStep 2: Substitute $t = 0$: $A(0) = 1{,}500(1.03)^{0} = 1{,}500(1) = 1{,}500$.\nStep 3: So the value of the account when it was opened was \\$1,500. Check: after $1$ year the model gives $1{,}500(1.03) = 1{,}545$, which is larger, as growth requires ✓\n\n**Why the wrong answers are tempting:**\n* Choice A (increases by \\$1,500): a fixed yearly increase belongs to a linear model. Here the yearly change is $3\\%$ of the current value.\n* Choice B (value after $1$ year): $A(1) = 1{,}545$, not $1{,}500$.\n* Choice D (greatest value): the base $1.03$ is greater than $1$, so the value keeps increasing past $1{,}500$.\n\n**Test Day Takeaway:** In $a(b)^{t}$, the coefficient $a$ is the value at $t = 0$, the starting amount.",
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
    question: "The table shows the number of members in a library's reading program at the end of years $0$, $1$, and $2$. The number of members increased by the same percentage each year. The function $m$ gives the number of members at the end of year $t$. Which equation defines $m$?",
    questionTable: { headers: ["Year, $t$", "Members"], rows: [["$0$", "$800$"], ["$1$", "$920$"], ["$2$", "$1{,}058$"]] },
    choices: [
      // distractor: uses the first-year increase of 120 as a constant yearly change, which gives 1,040 at year 2, not 1,058
      { id: "A", text: "$m(t) = 800 + 120t$" },
      // distractor: uses the growth rate 0.15 as the base instead of 1 + 0.15
      { id: "B", text: "$m(t) = 800(0.15)^{t}$" },
      { id: "C", text: "$m(t) = 800(1.15)^{t}$" },
      // distractor: uses the year-1 count, 920, as the starting value
      { id: "D", text: "$m(t) = 920(1.15)^{t}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Interpret Exponential Parameters**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The starting value is $800$ and the ratio is $\\frac{920}{800} = 1.15$, so $m(t) = 800(1.15)^{t}$.\n\n**The Full Solution:**\nStep 1: The value at $t = 0$ is the coefficient: $800$.\nStep 2: The yearly growth factor is $\\frac{920}{800} = 1.15$, an increase of $15\\%$ per year.\nStep 3: So $m(t) = 800(1.15)^{t}$. Check: $m(2) = 800(1.15)^{2} = 800(1.3225) = 1{,}058$, matching the table ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($800 + 120t$): adds $120$ every year. That gives $1{,}040$ at year $2$, but the table shows $1{,}058$.\n* Choice B ($800(0.15)^{t}$): uses the rate as the base, which would make the number of members shrink.\n* Choice D ($920(1.15)^{t}$): starts at the year-$1$ count. Then $m(0)$ would be $920$, not $800$.\n\n**Test Day Takeaway:** For a constant percent increase $r$, the model is $a(1 + r)^{t}$, where $a$ is the value at $t = 0$.",
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
    question: "The graph of $y = f(x)$ is shown, where $f(x) = a(x + 1)^{2} + k$ and $a$ and $k$ are constants. What is the value of $a + k$?",
    diagram: { type: "quadraticVertex", params: { vertex: [-1, -4], a: 2, showVertex: true, showPoints: [[1, 4]] } },
    choices: [
      // distractor: solves a(2)^2 = 4 for a without subtracting k = -4 from the point's y-value, getting a = 1
      { id: "A", text: "$-3$" },
      { id: "B", text: "$-2$" },
      // distractor: uses the slope from the vertex to the marked point, 8/2 = 4, as a
      { id: "C", text: "$0$" },
      // distractor: finds a = 2 but drops the negative sign of the vertex's y-coordinate, computing 2 + 4
      { id: "D", text: "$6$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The vertex is $(-1, -4)$, so $k = -4$; the marked point $(1, 4)$ gives $a(2)^{2} - 4 = 4$, so $a = 2$ and $a + k = -2$.\n\n**The Full Solution:**\nStep 1: Read the vertex from the graph: $(-1, -4)$. In $f(x) = a(x + 1)^{2} + k$, the vertex is $(-1, k)$, so $k = -4$.\nStep 2: The graph passes through $(1, 4)$. Substitute: $a(1 + 1)^{2} - 4 = 4$, so $4a = 8$ and $a = 2$.\nStep 3: Add: $a + k = 2 + (-4) = -2$. Check: $f(1) = 2(2)^{2} - 4 = 4$, matching the marked point ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): solves $4a = 4$, forgetting to account for $k$ in the point's $y$-value, so $a = 1$.\n* Choice C ($0$): uses the slope between the vertex and the marked point, $\\frac{8}{2} = 4$, as $a$. The rise is $a$ times the square of the run, not $a$ times the run.\n* Choice D ($6$): finds $a = 2$ but uses $k = 4$, dropping the sign of the vertex's $y$-coordinate. The vertex is below the $x$-axis, so $k = -4$.\n\n**Test Day Takeaway:** In vertex form, read $k$ from the vertex first, then substitute one other point to solve for $a$.",
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
    question: "$f(x) = -3(x - h)^{2} + k$\nIn the given function, $h$ and $k$ are constants. The maximum value of $f$ is $40$, and $f(2) = f(10)$. What is the value of $f(4)$?",
    choices: [
      { id: "A", text: "$28$" },
      // distractor: reports the maximum value k = 40 instead of evaluating f(4)
      { id: "B", text: "$40$" },
      // distractor: skips the square, computing -3(-2) + 40
      { id: "C", text: "$46$" },
      // distractor: drops the negative sign of the leading coefficient, adding 3(4 - 6)^2 = 12 to 40
      { id: "D", text: "$52$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Equal outputs at $x = 2$ and $x = 10$ put the vertex at $x = 6$, so $f(x) = -3(x - 6)^{2} + 40$ and $f(4) = -12 + 40 = 28$.\n\n**The Full Solution:**\nStep 1: The maximum value of $f$ is the $y$-coordinate of the vertex, so $k = 40$.\nStep 2: A parabola is symmetric about its vertex. Since $f(2) = f(10)$, the vertex is midway between: $h = \\frac{2 + 10}{2} = 6$.\nStep 3: Evaluate: $f(4) = -3(4 - 6)^{2} + 40 = -3(4) + 40 = 28$. Check: $f(8) = -3(2)^{2} + 40 = 28$ as well, as symmetry about $x = 6$ requires ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($40$): gives the maximum value, which occurs at $x = 6$, not at $x = 4$.\n* Choice C ($46$): skips the square, computing $-3(-2) + 40$.\n* Choice D ($52$): drops the negative sign of the leading coefficient, adding $3(4 - 6)^{2} = 12$ to $40$. Since $40$ is the maximum, no value of $f$ can exceed it.\n\n**Test Day Takeaway:** Two inputs with equal outputs locate the axis of symmetry at their midpoint; the maximum or minimum value is $k$.",
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
    question: "$f(x) = (x + 4)^{2} + c$\nIn the given function, $c$ is a constant. If $f(-1) = 6$, what is the value of $c$?",
    choices: [
      { id: "A", text: "$-3$" },
      // distractor: forgets to square, using $-1 + 4 = 3$ and $6 - 3 = 3$
      { id: "B", text: "$3$" },
      // distractor: reports $(-1 + 4)^2 = 9$, the value of the squared term, instead of $c$
      { id: "C", text: "$9$" },
      // distractor: adds $9$ to $6$ instead of subtracting it
      { id: "D", text: "$15$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Substitute $x = -1$: $(-1 + 4)^{2} + c = 6$, so $9 + c = 6$ and $c = -3$.\n\n**The Full Solution:**\nStep 1: $f(-1) = 6$, so $(-1 + 4)^{2} + c = 6$.\nStep 2: $(-1 + 4)^{2} = 3^{2} = 9$, so $9 + c = 6$.\nStep 3: Subtract $9$: $c = -3$. Check: $f(x) = (x + 4)^{2} - 3$ gives $f(-1) = 9 - 3 = 6$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($3$): forgets to square $-1 + 4$, so it solves $3 + c = 6$.\n* Choice C ($9$): stops at the value of the squared term, $(-1 + 4)^{2} = 9$, and never solves for $c$.\n* Choice D ($15$): adds $9$ to $6$ instead of subtracting it.\n\n**Test Day Takeaway:** A known output is an equation: substitute the input and the output, then solve for the one constant that is left.",
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
    question: "The function $q$ is defined by $q(x) = a(x + 2)^{2} + 9$, where $a$ is a constant. If $q(1) = 0$, what is the value of $a$?",
    choices: [
      // distractor: uses $(1 - 2)^2 = 1$, as if the squared term were $(x - 2)^2$
      { id: "A", text: "$-9$" },
      // distractor: divides $-9$ by $3$ instead of by $3^2 = 9$
      { id: "B", text: "$-3$" },
      { id: "C", text: "$-1$" },
      // distractor: drops the negative sign when solving $9a = -9$
      { id: "D", text: "$1$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** $q(1) = 0$ gives $a(1 + 2)^{2} + 9 = 0$, so $9a = -9$ and $a = -1$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 1$ and $q(1) = 0$: $a(1 + 2)^{2} + 9 = 0$.\nStep 2: $(1 + 2)^{2} = 9$, so $9a + 9 = 0$ and $9a = -9$.\nStep 3: Divide by $9$: $a = -1$. Check: $q(x) = -(x + 2)^{2} + 9$ gives $q(1) = -9 + 9 = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-9$): computes $(1 - 2)^{2} = 1$, as if the squared term were $(x - 2)^{2}$, and gets $a + 9 = 0$.\n* Choice B ($-3$): divides $-9$ by $3$ instead of by $3^{2} = 9$.\n* Choice D ($1$): finds the right size but loses the sign; $a = 1$ gives $q(1) = 18$, not $0$.\n\n**Test Day Takeaway:** The vertex form already fixes the vertex; one more condition, such as a value of the function, pins down $a$.",
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
    question: "$y = a(x - 3)^{2} + k$\nIn the given equation, $a$ and $k$ are constants. The graph of the equation in the $xy$-plane passes through the points $(1, 5)$ and $(4, -1)$. What is the value of $k$?",
    choices: [
      { id: "A", text: "$-3$" },
      // distractor: takes the $y$-coordinate of $(4, -1)$ as $k$ without using the first point
      { id: "B", text: "$-1$" },
      // distractor: subtracts the equations in the wrong order, getting $a = -2$ and then $k = 1$
      { id: "C", text: "$1$" },
      // distractor: solves correctly for $a = 2$ and reports $a$ instead of $k$
      { id: "D", text: "$2$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** The points give $4a + k = 5$ and $a + k = -1$; subtracting gives $3a = 6$, so $a = 2$ and $k = -3$.\n\n**The Full Solution:**\nStep 1: Substitute $(1, 5)$: $a(1 - 3)^{2} + k = 5$, so $4a + k = 5$. Substitute $(4, -1)$: $a(4 - 3)^{2} + k = -1$, so $a + k = -1$.\nStep 2: Subtract the second equation from the first: $3a = 6$, so $a = 2$.\nStep 3: Then $2 + k = -1$, so $k = -3$. Check: $y = 2(x - 3)^{2} - 3$ gives $2(4) - 3 = 5$ at $x = 1$ and $2(1) - 3 = -1$ at $x = 4$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-1$): reads $k$ off the point $(4, -1)$, but at $x = 4$ the squared term is $a(1)^{2} = a$, not $0$.\n* Choice C ($1$): subtracts in the wrong order, writing $3a = -6$, so $a = -2$ and $k = -1 - (-2) = 1$.\n* Choice D ($2$): solves the system correctly but reports $a$ instead of $k$.\n\n**Test Day Takeaway:** Two unknown constants need two conditions: substitute each point to get a linear system in $a$ and $k$, then solve it.",
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
    question: "The parabola shown in the $xy$-plane has the equation $y = a(x - h)^{2} + k$, where $a$, $h$, and $k$ are constants. What is the value of $a + h + k$?",
    diagram: { type: "quadraticVertex", params: { vertex: [2, -6], a: 0.5, showPoints: [[6, 2]], showVertex: true } },
    choices: [
      // distractor: reads the vertex as $(-2, -6)$, giving $\frac{1}{2} - 2 - 6$
      { id: "A", text: "$-\\dfrac{15}{2}$" },
      { id: "B", text: "$-\\dfrac{7}{2}$" },
      // distractor: takes $a = 2$ from dividing the rise $8$ by the run $4$, giving $2 + 2 - 6$
      { id: "C", text: "$-2$" },
      // distractor: reads the vertex as $(2, 6)$, giving $\frac{1}{2} + 2 + 6$
      { id: "D", text: "$\\dfrac{17}{2}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** The vertex is $(2, -6)$, so $h = 2$ and $k = -6$; the point $(6, 2)$ gives $16a - 6 = 2$, so $a = \\frac{1}{2}$ and $a + h + k = -\\frac{7}{2}$.\n\n**The Full Solution:**\nStep 1: The vertex of the graph is $(2, -6)$, so $h = 2$ and $k = -6$, and $y = a(x - 2)^{2} - 6$.\nStep 2: The marked point $(6, 2)$ is on the graph: $a(6 - 2)^{2} - 6 = 2$, so $16a = 8$ and $a = \\frac{1}{2}$.\nStep 3: $a + h + k = \\frac{1}{2} + 2 - 6 = -\\frac{7}{2}$. Check: $\\frac{1}{2}(6 - 2)^{2} - 6 = 8 - 6 = 2$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{15}{2}$): uses $h = -2$, the sign flip from the form $(x - h)$, giving $\\frac{1}{2} - 2 - 6$.\n* Choice C ($-2$): treats $a$ as a slope, $\\frac{2 - (-6)}{6 - 2} = 2$, instead of dividing by $4^{2}$; then $2 + 2 - 6 = -2$.\n* Choice D ($\\frac{17}{2}$): reads the vertex as $(2, 6)$, giving $\\frac{1}{2} + 2 + 6$.\n\n**Test Day Takeaway:** Read $h$ and $k$ from the vertex, then use any other point on the graph to find $a$; the horizontal distance gets squared.",
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
    question: "The graph of $y = g(x)$ is shown in the $xy$-plane, where $g$ is a quadratic function. What is the maximum value of $g(x)$?",
    diagram: { type: "parabola", params: { vertex: { h: 4, k: 7 }, a: -1, xRange: [-4, 10], yRange: [-10, 10], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showVertex: false } },
    choices: [
      // distractor: reads the $y$-intercept, $g(0) = -9$, instead of the highest point
      { id: "A", text: "$-9$" },
      // distractor: reports the $x$-coordinate of the vertex instead of its $y$-coordinate
      { id: "B", text: "$4$" },
      { id: "C", text: "$7$" },
      // distractor: adds the two coordinates of the vertex, $4 + 7$
      { id: "D", text: "$11$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The graph opens downward, so its maximum is the $y$-coordinate of the vertex, $(4, 7)$: the maximum value is $7$.\n\n**The Full Solution:**\nStep 1: The parabola opens downward, so $g(x)$ has a maximum at the vertex.\nStep 2: The highest point of the graph is $(4, 7)$.\nStep 3: The maximum value of $g(x)$ is the $y$-coordinate, $7$. Check: every other point on the graph, such as $(0, -9)$ or $(6, 3)$, has a $y$-coordinate less than $7$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-9$): reads the $y$-intercept, where the graph crosses the $y$-axis, not the highest point.\n* Choice B ($4$): gives where the maximum occurs, the $x$-coordinate, rather than the maximum value.\n* Choice D ($11$): adds the coordinates of the vertex, which has no meaning here.\n\n**Test Day Takeaway:** The maximum value of a function is a $y$-value. Find the highest point, then read its $y$-coordinate.",
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
    question: "$P(x) = -3(x - 24)^{2} + 1{,}200$\nThe given function $P$ models a store's daily profit, in dollars, when each puzzle is sold for $x$ dollars. What is the best interpretation of the vertex of the graph of $y = P(x)$ in this context?",
    choices: [
      // distractor: treats $1{,}200$ as $P(0)$, which is actually $-528$
      { id: "A", text: "The store's daily profit is \\$1,200 when each puzzle is sold for \\$0." },
      // distractor: swaps the two coordinates of the vertex
      { id: "B", text: "The store's greatest daily profit, \\$24, occurs when each puzzle is sold for \\$1,200." },
      // distractor: misses that the negative leading coefficient makes the vertex a maximum
      { id: "C", text: "The store's least daily profit, \\$1,200, occurs when each puzzle is sold for \\$24." },
      { id: "D", text: "The store's greatest daily profit, \\$1,200, occurs when each puzzle is sold for \\$24." }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** The vertex is $(24, 1{,}200)$, and $-3 < 0$ makes it the highest point: the greatest profit, \\$1,200, comes from a price of \\$24.\n\n**The Full Solution:**\nStep 1: In vertex form $a(x - h)^{2} + k$, the vertex is $(h, k)$, so the vertex is $(24, 1{,}200)$.\nStep 2: The leading coefficient $-3$ is negative, so the parabola opens downward and the vertex is a maximum.\nStep 3: $x = 24$ is the price of each puzzle and $P = 1{,}200$ is the profit in dollars, so the greatest daily profit, \\$1,200, occurs when each puzzle is sold for \\$24. Check: $P(23) = P(25) = 1{,}197$, both less than $1{,}200$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: treats $1{,}200$ as the profit at $x = 0$, but $P(0) = -3(576) + 1{,}200 = -528$.\n* Choice B: swaps the coordinates; $24$ is the price and $1{,}200$ is the profit.\n* Choice C: calls the vertex a minimum, but a negative leading coefficient makes it the highest point.\n\n**Test Day Takeaway:** In $a(x - h)^{2} + k$, $h$ is the input where the extreme happens and $k$ is the extreme value; the sign of $a$ says whether it is a maximum or a minimum.",
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
    question: "The table shows three values of $x$ and their corresponding values of $f(x)$, where $f$ is a quadratic function. What is the maximum value of $f(x)$?",
    diagram: { type: "dataTable", params: { headers: ["x", "f(x)"], rows: [["0", "1"], ["1", "10"], ["4", "1"]] } },
    choices: [
      // distractor: reports a table value that occurs twice, $f(0) = f(4) = 1$
      { id: "A", text: "$1$" },
      // distractor: reports the $x$-coordinate of the vertex instead of the maximum value
      { id: "B", text: "$2$" },
      // distractor: takes the largest value in the table, $10$, as the maximum
      { id: "C", text: "$10$" },
      { id: "D", text: "$13$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** $f(0) = f(4)$, so the vertex is at $x = 2$; writing $f(x) = a(x - 2)^{2} + k$, the rows give $4a + k = 1$ and $a + k = 10$, so $a = -3$ and $k = 13$.\n\n**The Full Solution:**\nStep 1: $f(0) = f(4) = 1$, so the axis of symmetry is halfway between $0$ and $4$, at $x = 2$. Write $f(x) = a(x - 2)^{2} + k$.\nStep 2: The rows $(0, 1)$ and $(1, 10)$ give $4a + k = 1$ and $a + k = 10$. Subtracting, $3a = -9$, so $a = -3$ and $k = 13$.\nStep 3: Since $a < 0$, the maximum value is $k = 13$. Check: $f(x) = -3(x - 2)^{2} + 13$ gives $f(0) = 1$, $f(1) = 10$, and $f(4) = 1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($1$): reports the value that appears twice in the table, which only locates the axis of symmetry.\n* Choice B ($2$): gives the $x$-coordinate of the vertex, where the maximum occurs, not the maximum value.\n* Choice C ($10$): assumes the largest table value is the maximum, but the vertex at $x = 2$ is not in the table.\n\n**Test Day Takeaway:** Equal outputs mark the axis of symmetry. Use it to write vertex form, then solve for $a$ and $k$; the maximum is $k$.",
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
    question: "$f(x) = 14 - 2(x - 6)^{2}$\nFor what value of $x$ does the given function $f$ reach its maximum value?",
    choices: [
      // distractor: reads $(x - 6)$ as a shift to $x = -6$
      { id: "A", text: "$-6$" },
      // distractor: reports the coefficient $2$ of the squared term
      { id: "B", text: "$2$" },
      { id: "C", text: "$6$" },
      // distractor: gives the maximum value $14$ instead of the $x$-value where it occurs
      { id: "D", text: "$14$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $-2(x - 6)^{2}$ is never positive and equals $0$ only at $x = 6$, so $f$ is greatest at $x = 6$.\n\n**The Full Solution:**\nStep 1: The term $-2(x - 6)^{2}$ is $0$ when $x = 6$ and negative for every other $x$.\nStep 2: So $f(x) = 14 - 2(x - 6)^{2}$ is largest when that term is $0$, at $x = 6$.\nStep 3: The maximum value is $f(6) = 14$, reached at $x = 6$. Check: $f(5) = f(7) = 12$, both less than $14$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): flips the sign of the shift; $(x - 6)$ is $0$ at $x = 6$, not $x = -6$.\n* Choice B ($2$): reports the coefficient of the squared term, which only controls how narrow the parabola is.\n* Choice D ($14$): gives the maximum value of $f(x)$, but the question asks for the value of $x$.\n\n**Test Day Takeaway:** \"For what value of $x$\" asks where the maximum happens, the $x$-coordinate of the vertex; \"the maximum value\" asks for the $y$-coordinate.",
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
    question: "$f(x) = -3(x - b)^{2} + 54$\nIn the given function, $b$ is a constant greater than $2$. If $f(2) = 27$, what is the value of $b$?",
    choices: [
      // distractor: takes the solution $b = -1$, which is not greater than $2$
      { id: "A", text: "$-1$" },
      // distractor: stops at $\sqrt{9} = 3$ and never adds the $2$
      { id: "B", text: "$3$" },
      { id: "C", text: "$5$" },
      // distractor: stops at $(b - 2)^2 = 9$ and reports $9$
      { id: "D", text: "$9$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** $-3(2 - b)^{2} + 54 = 27$ gives $(b - 2)^{2} = 9$, so $b = 5$ or $b = -1$, and only $5$ is greater than $2$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 2$: $-3(2 - b)^{2} + 54 = 27$, so $-3(2 - b)^{2} = -27$.\nStep 2: Divide by $-3$: $(b - 2)^{2} = 9$, so $b - 2 = 3$ or $b - 2 = -3$, giving $b = 5$ or $b = -1$.\nStep 3: $b$ is greater than $2$, so $b = 5$. Check: $f(2) = -3(2 - 5)^{2} + 54 = -27 + 54 = 27$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-1$): the other solution of $(b - 2)^{2} = 9$, which the condition $b > 2$ rules out.\n* Choice B ($3$): finds $b - 2 = 3$ and reports $3$ without adding $2$.\n* Choice D ($9$): stops at $(b - 2)^{2} = 9$ without taking the square root.\n\n**Test Day Takeaway:** Squaring hides a sign, so solving for a vertex constant gives two candidates; the stated condition decides which one to keep.",
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
    question: "$f(x) = -2(x - p)(x - p - 10)$\nIn the given function, $p$ is a constant. What is the maximum value of $f(x)$?",
    choices: [
      // distractor: drops the negative sign of the product $(5)(-5)$
      { id: "A", text: "$-50$" },
      // distractor: reports the distance $5$ from a zero to the axis of symmetry
      { id: "B", text: "$5$" },
      // distractor: computes $(5)(5)$ and ignores the factor $-2$
      { id: "C", text: "$25$" },
      { id: "D", text: "$50$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice D is correct.**\n\n**The Fast Way (~35s):** The zeros are $p$ and $p + 10$, so the maximum is at $x = p + 5$, where $f = -2(5)(-5) = 50$ for every value of $p$.\n\n**The Full Solution:**\nStep 1: $f(x) = 0$ at $x = p$ and $x = p + 10$. The leading coefficient is $-2 < 0$, so the parabola opens downward and its maximum is at the midpoint, $x = p + 5$.\nStep 2: At $x = p + 5$: $x - p = 5$ and $x - p - 10 = -5$.\nStep 3: $f(p + 5) = -2(5)(-5) = 50$. Check with $p = 0$: $f(x) = -2x^{2} + 20x$ has its vertex at $x = 5$, and $f(5) = -50 + 100 = 50$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-50$): loses a negative sign, treating $(5)(-5)$ as $25$.\n* Choice B ($5$): gives the distance from each zero to the axis of symmetry, which locates the vertex but is not its height.\n* Choice C ($25$): multiplies $5 \\cdot 5$ and drops the factor $-2$.\n\n**Test Day Takeaway:** For a quadratic in factored form, the vertex sits midway between the zeros; plug that $x$ in, and a parameter that only slides the graph sideways drops out.",
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
    question: "$x^{2} - 13x + 36 = 0$\nWhat is the sum of the solutions to the given equation?",
    choices: [
      // distractor: uses the coefficient $-13$ itself instead of its opposite
      { id: "A", text: "$-13$" },
      // distractor: subtracts the solutions, $9 - 4$, instead of adding them
      { id: "B", text: "$5$" },
      { id: "C", text: "$13$" },
      // distractor: gives the product of the solutions instead of the sum
      { id: "D", text: "$36$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Vieta Sum & Product of Roots**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** For $x^{2} + bx + c = 0$, the solutions add to $-b$, so the sum is $-(-13) = 13$.\n\n**The Full Solution:**\nStep 1: Factor: $x^{2} - 13x + 36 = (x - 4)(x - 9)$.\nStep 2: The solutions are $x = 4$ and $x = 9$.\nStep 3: Their sum is $4 + 9 = 13$, which matches $-b = 13$. Check: $4^{2} - 13(4) + 36 = 0$ and $9^{2} - 13(9) + 36 = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-13$): takes the coefficient $-13$ as the sum, forgetting that the sum is its opposite.\n* Choice B ($5$): finds the solutions $4$ and $9$ but subtracts them.\n* Choice D ($36$): gives the product of the solutions, the constant term.\n\n**Test Day Takeaway:** When the leading coefficient is $1$, the sum of the solutions is the opposite of the $x$-coefficient and the product is the constant term.",
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
    question: "The two solutions to which of the following equations have a sum of $6$ and a product of $-16$?",
    choices: [
      // distractor: writes the sum $6$ as the $x$-coefficient without changing its sign
      { id: "A", text: "$x^{2} + 6x - 16 = 0$" },
      { id: "B", text: "$x^{2} - 6x - 16 = 0$" },
      // distractor: changes the signs of both the sum and the product
      { id: "C", text: "$x^{2} + 6x + 16 = 0$" },
      // distractor: writes the product $-16$ with the opposite sign
      { id: "D", text: "$x^{2} - 6x + 16 = 0$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Vieta Sum & Product of Roots**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** An equation $x^{2} - (\\text{sum})x + (\\text{product}) = 0$ has the given solutions, so it is $x^{2} - 6x - 16 = 0$.\n\n**The Full Solution:**\nStep 1: If the solutions are $r$ and $s$, the equation is $(x - r)(x - s) = x^{2} - (r + s)x + rs = 0$.\nStep 2: Substitute $r + s = 6$ and $rs = -16$: $x^{2} - 6x - 16 = 0$.\nStep 3: This is choice B. Check: $x^{2} - 6x - 16 = (x - 8)(x + 2)$, so the solutions are $8$ and $-2$, with sum $6$ and product $-16$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: puts $+6$ on the $x$-term; its solutions, $-8$ and $2$, have a sum of $-6$.\n* Choice C: flips both signs; its solutions have a sum of $-6$ and a product of $16$.\n* Choice D: has the right $x$-term but a product of $16$, not $-16$ (it has no real solutions).\n\n**Test Day Takeaway:** Build the equation as $x^{2} - (\\text{sum})x + (\\text{product}) = 0$; the sign change happens only on the $x$-term.",
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
    question: "The quadratic function $f$ is defined by $f(x) = ax^{2} + bx + c$, where $a$, $b$, and $c$ are constants. The graph of $y = f(x)$ is shown. What is the value of $\\dfrac{b}{a}$?",
    diagram: { type: "quadraticIntercepts", params: { intercepts: [-7, 3] } },
    choices: [
      // distractor: computes the product of the zeros, $(-7)(3)$, which equals $\frac{c}{a}$
      { id: "A", text: "$-21$" },
      // distractor: uses the sum of the zeros, $-4$, without changing its sign
      { id: "B", text: "$-4$" },
      { id: "C", text: "$4$" },
      // distractor: takes the opposite of the product of the zeros
      { id: "D", text: "$21$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Vieta Sum & Product of Roots**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The zeros are $-7$ and $3$, whose sum is $-4$; since the sum of the zeros equals $-\\frac{b}{a}$, $\\frac{b}{a} = 4$.\n\n**The Full Solution:**\nStep 1: The graph crosses the $x$-axis at $x = -7$ and $x = 3$, so $y = a(x + 7)(x - 3)$.\nStep 2: Expand: $a(x^{2} + 4x - 21) = ax^{2} + 4ax - 21a$, so $b = 4a$ and $c = -21a$.\nStep 3: $\\frac{b}{a} = \\frac{4a}{a} = 4$. Check: the sum of the zeros, $-7 + 3 = -4$, equals $-\\frac{b}{a} = -4$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-21$): computes the product of the zeros, which equals $\\frac{c}{a}$, not $\\frac{b}{a}$.\n* Choice B ($-4$): gives the sum of the zeros, which is $-\\frac{b}{a}$, and forgets the sign change.\n* Choice D ($21$): uses the product of the zeros with its sign flipped.\n\n**Test Day Takeaway:** From the zeros $r$ and $s$: $r + s = -\\frac{b}{a}$ and $rs = \\frac{c}{a}$, whatever the value of $a$.",
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
    question: "$x^{2} - kx + 18 = 0$\nIn the given equation, $k$ is a constant. The solutions to the equation are $m$ and $n$. Which expression is equivalent to $\\dfrac{1}{m} + \\dfrac{1}{n}$?",
    choices: [
      // distractor: inverts the fraction, dividing the product by the sum
      { id: "A", text: "$\\dfrac{18}{k}$" },
      // distractor: adds the reciprocals of the sum and the product instead of the reciprocals of the solutions
      { id: "B", text: "$\\dfrac{1}{k} + \\dfrac{1}{18}$" },
      // distractor: takes the sum of the solutions as $-k$
      { id: "C", text: "$-\\dfrac{k}{18}$" },
      { id: "D", text: "$\\dfrac{k}{18}$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Vieta Sum & Product of Roots**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** $\\frac{1}{m} + \\frac{1}{n} = \\frac{m + n}{mn}$, and the equation gives $m + n = k$ and $mn = 18$, so the expression is $\\frac{k}{18}$.\n\n**The Full Solution:**\nStep 1: Combine the fractions: $\\frac{1}{m} + \\frac{1}{n} = \\frac{n + m}{mn}$.\nStep 2: For $x^{2} - kx + 18 = 0$, the sum of the solutions is $m + n = k$ and the product is $mn = 18$.\nStep 3: So $\\frac{1}{m} + \\frac{1}{n} = \\frac{k}{18}$. Check with $k = 9$: the solutions are $3$ and $6$, and $\\frac{1}{3} + \\frac{1}{6} = \\frac{1}{2} = \\frac{9}{18}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{18}{k}$): divides the product by the sum, the reciprocal of the right answer.\n* Choice B ($\\frac{1}{k} + \\frac{1}{18}$): adds the reciprocals of the sum and the product, not of the solutions.\n* Choice C ($-\\frac{k}{18}$): uses $-k$ as the sum; the sum is the opposite of the $x$-coefficient $-k$, which is $k$.\n\n**Test Day Takeaway:** Rewrite any symmetric expression in the solutions in terms of $m + n$ and $mn$, then read both from the coefficients.",
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
    question: "$4x^{2} - 28x + 33 = 0$\nWhat is the product of the solutions to the given equation?",
    choices: [
      // distractor: attaches a negative sign to the product, as for the sum
      { id: "A", text: "$-\\dfrac{33}{4}$" },
      // distractor: gives the sum of the solutions, $\frac{28}{4}$
      { id: "B", text: "$7$" },
      { id: "C", text: "$\\dfrac{33}{4}$" },
      // distractor: uses the constant term without dividing by the leading coefficient $4$
      { id: "D", text: "$33$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Vieta Sum & Product of Roots**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** For $ax^{2} + bx + c = 0$, the product of the solutions is $\\frac{c}{a} = \\frac{33}{4}$.\n\n**The Full Solution:**\nStep 1: Divide the equation by $4$: $x^{2} - 7x + \\frac{33}{4} = 0$.\nStep 2: When the leading coefficient is $1$, the product of the solutions is the constant term.\nStep 3: So the product is $\\frac{33}{4}$. Check: the solutions are $\\frac{11}{2}$ and $\\frac{3}{2}$, since $4x^{2} - 28x + 33 = (2x - 11)(2x - 3)$, and $\\frac{11}{2} \\cdot \\frac{3}{2} = \\frac{33}{4}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{33}{4}$): adds a negative sign; only the sum, $-\\frac{b}{a}$, involves a sign change.\n* Choice B ($7$): gives the sum of the solutions, $\\frac{28}{4}$, not the product.\n* Choice D ($33$): forgets to divide the constant term by the leading coefficient $4$.\n\n**Test Day Takeaway:** Product $= \\frac{c}{a}$ and sum $= -\\frac{b}{a}$; divide by the leading coefficient before reading either one.",
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
    question: "$x(2x - 3) - 10 = 5(x + 4)$\nWhat is the sum of the solutions to the given equation?",
    choices: [
      // distractor: uses $\frac{b}{a} = \frac{-8}{2}$ and drops the sign change in $-\frac{b}{a}$
      { id: "A", text: "$-4$" },
      // distractor: computes $-\frac{b}{2a}$, the average of the two solutions, instead of their sum
      { id: "B", text: "$2$" },
      { id: "C", text: "$4$" },
      // distractor: reads the sum as $-b = 8$ from $2x^{2} - 8x - 30 = 0$ without dividing by the leading coefficient $2$
      { id: "D", text: "$8$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Vieta Sum & Product of Roots**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Expand and collect: $2x^{2} - 8x - 30 = 0$, so the sum of the solutions is $-\\frac{b}{a} = -\\frac{-8}{2} = 4$.\n\n**The Full Solution:**\nStep 1: Expand each side: $2x^{2} - 3x - 10 = 5x + 20$.\nStep 2: Move every term to one side: $2x^{2} - 8x - 30 = 0$, which is equivalent to $x^{2} - 4x - 15 = 0$.\nStep 3: For $x^{2} + bx + c = 0$, the solutions add to $-b$, so the sum is $4$. Check: the quadratic formula gives $x = 2 + \\sqrt{19}$ and $x = 2 - \\sqrt{19}$, and $(2 + \\sqrt{19}) + (2 - \\sqrt{19}) = 4$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): computes $\\frac{b}{a} = \\frac{-8}{2}$ and forgets that the sum of the solutions is the opposite, $-\\frac{b}{a}$.\n* Choice B ($2$): finds $-\\frac{b}{2a} = 2$, which is the average of the two solutions (the $x$-coordinate of the vertex), not their sum.\n* Choice D ($8$): takes $-b = 8$ from $2x^{2} - 8x - 30 = 0$ without dividing by the leading coefficient $2$.\n\n**Test Day Takeaway:** The solutions here are not integers, so don't solve: write the equation as $ax^{2} + bx + c = 0$ and use sum $= -\\frac{b}{a}$.",
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
    question: "$g(x) = -2x^{2} + kx + 11$\nIn the given function, $k$ is a positive constant. If the maximum value of $g(x)$ is $19$, what is the value of $k$?",
    choices: [
      // distractor: takes the negative square root, but $k$ is positive
      { id: "A", text: "$-8$" },
      // distractor: reports the $x$-coordinate of the vertex, $\frac{k}{4} = 2$
      { id: "B", text: "$2$" },
      { id: "C", text: "$8$" },
      // distractor: stops at $k^2 = 64$ without taking the square root
      { id: "D", text: "$64$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Horizontal Tangent to a Parabola (Max/Min)**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** The line $y = 19$ touches the graph once, so $-2x^{2} + kx - 8 = 0$ has one solution: $k^{2} - 4(-2)(-8) = k^{2} - 64 = 0$, and $k = 8$.\n\n**The Full Solution:**\nStep 1: The maximum is $19$, so the horizontal line $y = 19$ meets the graph at exactly one point, the vertex. Set $-2x^{2} + kx + 11 = 19$, which gives $-2x^{2} + kx - 8 = 0$.\nStep 2: One solution means the discriminant is $0$: $k^{2} - 4(-2)(-8) = k^{2} - 64 = 0$, so $k^{2} = 64$.\nStep 3: $k = 8$ or $k = -8$; $k$ is positive, so $k = 8$. Check: the vertex is at $x = \\frac{8}{4} = 2$, and $g(2) = -8 + 16 + 11 = 19$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-8$): the negative root of $k^{2} = 64$, which the condition that $k$ is positive rules out.\n* Choice B ($2$): gives the $x$-coordinate of the vertex instead of $k$.\n* Choice D ($64$): stops at $k^{2} = 64$.\n\n**Test Day Takeaway:** A maximum value $M$ means the line $y = M$ touches the parabola exactly once; set the discriminant of $g(x) - M = 0$ to zero.",
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
    question: "The table shows the number of bacteria, $B$, in a sample $h$ hours after an experiment began. For the first $6$ hours, $B$ increased by the same factor every hour. Which equation represents this relationship?",
    questionTable: { headers: ["Hours, $h$", "Bacteria, $B$"], rows: [["$0$", "$700$"], ["$2$", "$2{,}100$"], ["$4$", "$6{,}300$"], ["$6$", "$18{,}900$"]] },
    choices: [
      // distractor: treats $3$ as the hourly factor, although the rows are $2$ hours apart
      { id: "A", text: "$B = 700(3)^{h}$" },
      { id: "B", text: "$B = 700(3)^{\\frac{h}{2}}$" },
      // distractor: multiplies $h$ by $2$ instead of dividing by $2$
      { id: "C", text: "$B = 700(3)^{2h}$" },
      // distractor: uses the second table value, $2{,}100$, as the value at $h = 0$
      { id: "D", text: "$B = 2{,}100(3)^{\\frac{h}{2}}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Build Exponential Growth Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The count triples every $2$ hours and starts at $700$, so $B = 700(3)^{\\frac{h}{2}}$.\n\n**The Full Solution:**\nStep 1: At $h = 0$, $B = 700$, so the initial value is $700$.\nStep 2: Each row is $2$ hours after the one before it, and $2{,}100 \\div 700 = 6{,}300 \\div 2{,}100 = 18{,}900 \\div 6{,}300 = 3$, so $B$ triples every $2$ hours.\nStep 3: Tripling every $2$ hours means $h$ hours contain $\\frac{h}{2}$ triplings: $B = 700(3)^{\\frac{h}{2}}$. Check: $h = 4$ gives $700(3)^{2} = 6{,}300$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: uses $3$ as the factor for each hour; at $h = 2$ it gives $6{,}300$, not $2{,}100$.\n* Choice C: multiplies the exponent by $2$; at $h = 2$ it gives $700(3)^{4} = 56{,}700$.\n* Choice D: starts from $2{,}100$, the value at $h = 2$, so every prediction is $3$ times too large.\n\n**Test Day Takeaway:** Read the initial value at $h = 0$, find the factor between rows, and divide $h$ by the spacing between rows in the exponent.",
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
    question: "$y = 2x^{2} - 16x + c$\n$y = 3$\nIn the given system of equations, $c$ is a constant. If the graphs of the equations in the $xy$-plane intersect at exactly one point, what is the value of $c$?",
    correctAnswer: "35",
    explanation: "**SAT Pattern: Discriminant Equals Zero (System of Quadratic and Horizontal Line)**\n\n**The correct answer is $35$.**\n\n**The Fast Way (~30s):** Substituting gives $2x^{2} - 16x + (c - 3) = 0$, and one solution means $256 - 8(c - 3) = 0$, so $c = 35$.\n\n**The Full Solution:**\nStep 1: Substitute $y = 3$ into the first equation: $2x^{2} - 16x + c = 3$, so $2x^{2} - 16x + (c - 3) = 0$.\nStep 2: One intersection point means the combined equation has exactly one real solution, so the discriminant is $0$: $(-16)^{2} - 4(2)(c - 3) = 256 - 8(c - 3) = 0$.\nStep 3: So $c - 3 = 32$ and $c = 35$. Check: $2x^{2} - 16x + 32 = 2(x - 4)^{2} = 0$ has the single solution $x = 4$, and the vertex of $y = 2x^{2} - 16x + 35$ is $(4, 3)$ ✓\n\n**Common Mistakes:**\n* $32$: solves for $c - 3$ and forgets to add the $3$ back.\n* $-29$: gets the sign wrong, solving $256 + 8(c - 3) = 0$.\n* $67$: uses $4(c - 3)$ instead of $4(2)(c - 3)$, forgetting the leading coefficient.\n\n**Test Day Takeaway:** A horizontal line meets a parabola exactly once only at the vertex; set the discriminant of the combined equation to $0$.",
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
    question: "$f(x) = (x + 7)(x + 1)(x - 3)$\nThe graph of $y = f(x) - 5$ in the $xy$-plane passes through the points $(-7, y_1)$, $(-1, y_2)$, and $(3, y_3)$. Which of the following must be true?",
    choices: [
      // distractor: uses the zeros of $f$ but forgets the $-5$
      { id: "A", text: "$y_1 = y_2 = y_3 = 0$" },
      { id: "B", text: "$y_1 = y_2 = y_3 = -5$" },
      // distractor: shifts the graph up $5$ units instead of down
      { id: "C", text: "$y_1 = y_2 = y_3 = 5$" },
      // distractor: assumes three different inputs must give three different outputs
      { id: "D", text: "$y_1$, $y_2$, and $y_3$ are three different negative numbers" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Vertical Shift of a Polynomial**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $-7$, $-1$, and $3$ are the zeros of $f$, so at each of them $f(x) - 5 = 0 - 5 = -5$.\n\n**The Full Solution:**\nStep 1: $f(x) = 0$ when $x + 7 = 0$, $x + 1 = 0$, or $x - 3 = 0$, so the zeros of $f$ are $-7$, $-1$, and $3$.\nStep 2: At each zero, $y = f(x) - 5 = 0 - 5 = -5$.\nStep 3: So $y_1 = y_2 = y_3 = -5$. Check: $f(-1) = (6)(0)(-4) = 0$, so $y_2 = 0 - 5 = -5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: these are the outputs of $f$ at its zeros; the graph of $y = f(x) - 5$ is $5$ units lower.\n* Choice C: shifts up instead of down; subtracting $5$ lowers every output.\n* Choice D: the three inputs are all zeros of $f$, so the outputs are equal, not different.\n\n**Test Day Takeaway:** Subtracting a constant from $f(x)$ moves every point of the graph down by that amount, so the zeros of $f$ all land at the same height.",
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
    question: "The table shows the number of birds, $f(t)$, nesting on an island $t$ years after a count began. The number of birds decreases by the same percentage each year. Which equation defines $f$?",
    diagram: { type: "dataTable", params: { headers: ["t", "f(t)"], rows: [["0", "1,250"], ["2", "800"], ["4", "512"]] } },
    choices: [
      // distractor: uses $1 - 0.64 = 0.36$, the fraction lost every $2$ years, as the factor
      { id: "A", text: "$f(t) = 1{,}250(0.36)^{\\frac{t}{2}}$" },
      // distractor: applies the $2$-year factor $0.64$ every year
      { id: "B", text: "$f(t) = 1{,}250(0.64)^{t}$" },
      // distractor: doubles the exponent instead of taking a square root of the $2$-year factor
      { id: "C", text: "$f(t) = 1{,}250(0.8)^{2t}$" },
      { id: "D", text: "$f(t) = 1{,}250(0.8)^{t}$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Exponential Decay — Standard Form**\n\n**Choice D is correct.**\n\n**The Fast Way (~35s):** Every $2$ years the number is multiplied by $\\frac{800}{1{,}250} = 0.64$, so each year it is multiplied by $\\sqrt{0.64} = 0.8$: $f(t) = 1{,}250(0.8)^{t}$.\n\n**The Full Solution:**\nStep 1: At $t = 0$, $f(0) = 1{,}250$, the initial value.\nStep 2: Across each $2$-year gap the factor is $\\frac{800}{1{,}250} = \\frac{512}{800} = 0.64$. The yearly factor $r$ satisfies $r^{2} = 0.64$, so $r = 0.8$.\nStep 3: So $f(t) = 1{,}250(0.8)^{t}$. Check: $f(4) = 1{,}250(0.8)^{4} = 1{,}250(0.4096) = 512$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: uses $0.36$, the fraction lost every $2$ years, as the factor; it gives $f(2) = 450$, not $800$.\n* Choice B: applies the $2$-year factor every year; it gives $f(2) = 512$, not $800$.\n* Choice C: doubles the exponent; it gives $f(2) = 1{,}250(0.8)^{4} = 512$, not $800$.\n\n**Test Day Takeaway:** When rows are $2$ units apart, the per-unit factor is the square root of the factor between rows.",
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
    question: "$\\dfrac{\\sqrt[4]{x^{7}}}{x^{\\frac{1}{2}}\\sqrt[3]{x}}$\nFor $x > 0$, the given expression is equivalent to $x^{k}$, where $k$ is a constant. What is the value of $k$?",
    correctAnswer: "11/12",
    explanation: "**SAT Pattern: Radical with Rational Exponents**\n\n**The correct answer is $\\frac{11}{12}$.**\n\n**The Fast Way (~30s):** Write each factor as a power of $x$: $\\frac{7}{4} - \\frac{1}{2} - \\frac{1}{3} = \\frac{21 - 6 - 4}{12} = \\frac{11}{12}$.\n\n**The Full Solution:**\nStep 1: Convert the radicals: $\\sqrt[4]{x^{7}} = x^{\\frac{7}{4}}$ and $\\sqrt[3]{x} = x^{\\frac{1}{3}}$.\nStep 2: The denominator is $x^{\\frac{1}{2}} \\cdot x^{\\frac{1}{3}} = x^{\\frac{5}{6}}$.\nStep 3: Divide by subtracting exponents: $\\frac{7}{4} - \\frac{5}{6} = \\frac{21}{12} - \\frac{10}{12} = \\frac{11}{12}$. Check with $x = 4096 = 2^{12}$: the expression is $\\frac{2^{21}}{2^{6} \\cdot 2^{4}} = 2^{11} = (2^{12})^{\\frac{11}{12}}$ ✓\n\n**Common Mistakes:**\n* $\\frac{19}{12}$: adds the exponent of $\\sqrt[3]{x}$ instead of subtracting it.\n* $-\\frac{11}{42}$: writes $\\sqrt[4]{x^{7}}$ as $x^{\\frac{4}{7}}$, flipping the fraction.\n* $\\frac{31}{20}$: combines $x^{\\frac{1}{2}} \\cdot x^{\\frac{1}{3}}$ as $x^{\\frac{1}{5}}$ by adding the denominators.\n\n**Test Day Takeaway:** Turn every radical into a fractional exponent first: $\\sqrt[n]{x^{m}} = x^{\\frac{m}{n}}$. Then multiply by adding exponents and divide by subtracting them.",
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
    question: "$y = ax^{2} + bx + c$\nIn the given equation, $a$, $b$, and $c$ are constants. The graph of the equation in the $xy$-plane is a parabola with vertex $(-5, 12)$ that intersects the $x$-axis at two points. Which of the following must be true?",
    choices: [
      { id: "A", text: "$a < 0$ and $b < 0$" },
      // distractor: uses $b = 2ah$ instead of $b = -2ah$, getting the sign of $b$ wrong
      { id: "B", text: "$a < 0$ and $b > 0$" },
      // distractor: assumes the parabola opens upward and also gets the sign of $b$ backward
      { id: "C", text: "$a > 0$ and $b < 0$" },
      // distractor: assumes the parabola opens upward; with $b = 10a$, that makes $b$ positive
      { id: "D", text: "$a > 0$ and $b > 0$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Vertex + Sign-of-Coefficient Reasoning**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** The vertex is above the $x$-axis and the graph crosses it twice, so it opens downward ($a < 0$); the axis $x = -\\frac{b}{2a} = -5$ gives $b = 10a < 0$.\n\n**The Full Solution:**\nStep 1: The vertex $(-5, 12)$ is above the $x$-axis. For the parabola to reach the $x$-axis, it must open downward, so $a < 0$.\nStep 2: The $x$-coordinate of the vertex is $-\\frac{b}{2a}$, so $-\\frac{b}{2a} = -5$, which gives $b = 10a$.\nStep 3: Since $a < 0$, $b = 10a < 0$. So $a < 0$ and $b < 0$. Check with $a = -1$: $y = -(x + 5)^{2} + 12 = -x^{2} - 10x - 13$ has $b = -10 < 0$, and $-(x + 5)^{2} + 12 = 0$ at $x = -5 \\pm 2\\sqrt{3}$, two points ✓\n\n**Why the wrong answers are tempting:**\n* Choice B: uses $b = 2ah = 2a(-5) = -10a$, a sign error that makes $b$ positive.\n* Choice C: assumes the parabola opens upward, which is impossible with the vertex above the $x$-axis, and also reverses the sign of $b$.\n* Choice D: assumes the parabola opens upward; then $b = 10a$ would be positive, but an upward parabola with its vertex above the $x$-axis never reaches the axis.\n\n**Test Day Takeaway:** The vertex's position relative to the $x$-axis plus the number of $x$-intercepts gives the sign of $a$; then $h = -\\frac{b}{2a}$ links the sign of $b$ to $a$.",
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
    question: "The function $f$ is defined by $f(x) = 3b^{x} + c$, where $b$ and $c$ are constants and $b > 0$. If $f(0) = 7$ and $f(2) = 52$, what is the value of $b$?",
    correctAnswer: "4",
    explanation: "**SAT Pattern: Exponential Shifted Form — Recover Base**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~30s):** $f(0) = 3 + c = 7$, so $c = 4$; then $3b^{2} + 4 = 52$, so $b^{2} = 16$ and $b = 4$.\n\n**The Full Solution:**\nStep 1: Any positive base to the power $0$ is $1$, so $f(0) = 3(1) + c = 7$ and $c = 4$.\nStep 2: Then $f(2) = 3b^{2} + 4 = 52$, so $3b^{2} = 48$ and $b^{2} = 16$.\nStep 3: $b > 0$, so $b = 4$. Check: $f(x) = 3(4)^{x} + 4$ gives $f(0) = 7$ and $f(2) = 48 + 4 = 52$ ✓\n\n**Common Mistakes:**\n* $16$: stops at $b^{2} = 16$.\n* $\\sqrt{15}$: treats $f(0) = 7$ as $c = 7$, forgetting the $3b^{0} = 3$, and solves $3b^{2} = 45$.\n* $-4$: the negative square root, which $b > 0$ rules out.\n\n**Test Day Takeaway:** Use the input $0$ first: it removes the base and isolates the shift. Then one more point recovers the base.",
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
    question: "$q(x) = x^{2} - 9x + 5$\nIn the $xy$-plane, the graph of $y = w(x)$ is the result of translating the graph of $y = q(x)$ $6$ units to the right. What is the sum of the solutions to $w(x) = 0$?",
    correctAnswer: "21",
    explanation: "**SAT Pattern: Sum of Roots via Input Shift**\n\n**The correct answer is $21$.**\n\n**The Fast Way (~30s):** The solutions to $q(x) = 0$ add to $9$. Moving the graph $6$ units right adds $6$ to each of the two solutions, so the sum is $9 + 2(6) = 21$.\n\n**The Full Solution:**\nStep 1: The solutions to $x^{2} - 9x + 5 = 0$ have sum $-(-9) = 9$; they are not integers, so there is no need to find them.\nStep 2: Translating the graph $6$ units right moves each $x$-intercept $6$ units right, so each solution to $w(x) = 0$ is $6$ more than a solution to $q(x) = 0$.\nStep 3: The sum is $9 + 6 + 6 = 21$. Check: $w(x) = q(x - 6) = (x - 6)^{2} - 9(x - 6) + 5 = x^{2} - 21x + 95$, whose solutions add to $21$ ✓\n\n**Common Mistakes:**\n* $9$: gives the sum of the solutions to $q(x) = 0$ and ignores the translation.\n* $15$: adds $6$ only once, but each of the two solutions moves $6$ units.\n* $-3$: moves the graph left, subtracting $6$ from each solution: $9 - 12$.\n\n**Test Day Takeaway:** A horizontal translation moves every $x$-intercept by the same amount; with two solutions, the sum changes by twice that amount.",
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
    question: "The table shows the number of visitors to three museums in 2024. For each museum, the number of visitors in 2024 was $24\\%$ greater than the number of visitors in 2023. How many visitors did Museum B have in 2023?",
    diagram: { type: "dataTable", params: { headers: ["Museum", "Visitors in 2024"], rows: [["A", "2,604"], ["B", "2,325"], ["C", "3,906"]] } },
    choices: [
      // distractor: computes $24\%$ of $2{,}325$, the size of an increase rather than the 2023 total
      { id: "A", text: "$558$" },
      // distractor: takes $24\%$ off the 2024 number, computing $2{,}325(0.76)$
      { id: "B", text: "$1{,}767$" },
      { id: "C", text: "$1{,}875$" },
      // distractor: increases the 2024 number by $24\%$ instead of undoing the increase
      { id: "D", text: "$2{,}883$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Reverse Percent Increase**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The 2024 number is $1.24$ times the 2023 number, so the 2023 number is $\\frac{2{,}325}{1.24} = 1{,}875$.\n\n**The Full Solution:**\nStep 1: Let $v$ be Museum B's number of visitors in 2023. A $24\\%$ increase means $1.24v = 2{,}325$.\nStep 2: Divide: $v = \\frac{2{,}325}{1.24}$.\nStep 3: $v = 1{,}875$. Check: $1{,}875 + 0.24(1{,}875) = 1{,}875 + 450 = 2{,}325$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($558$): computes $0.24(2{,}325)$, which is not a number of visitors in either year.\n* Choice B ($1{,}767$): subtracts $24\\%$ of the 2024 number, but the $24\\%$ is a percent of the 2023 number.\n* Choice D ($2{,}883$): applies the increase again instead of undoing it.\n\n**Test Day Takeaway:** To undo a $p\\%$ increase, divide by $1 + \\frac{p}{100}$; taking $p\\%$ off the new value does not get you back.",
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
    question: "The table shows the population, $N$, of a town $t$ years after 2010, where $N$ grows exponentially. The population increases by $50\\%$ every $m$ months. What is the value of $m$?",
    diagram: { type: "dataTable", params: { headers: ["t", "N"], rows: [["0", "1,240"], ["2", "1,860"], ["4", "2,790"], ["6", "4,185"]] } },
    choices: [
      // distractor: divides the $12$ months of a year by the $2$-year row spacing instead of multiplying
      { id: "A", text: "$6$" },
      // distractor: treats consecutive rows as one year apart
      { id: "B", text: "$12$" },
      { id: "C", text: "$24$" },
      // distractor: multiplies the factor $1.5$ by $24$ months
      { id: "D", text: "$36$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Period of Exponential Growth — Months Interpretation**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Each row is $1.5$ times the row above it, and the rows are $2$ years apart, so the population grows by $50\\%$ every $24$ months.\n\n**The Full Solution:**\nStep 1: Divide consecutive values: $\\frac{1{,}860}{1{,}240} = \\frac{2{,}790}{1{,}860} = \\frac{4{,}185}{2{,}790} = 1.5$.\nStep 2: A factor of $1.5$ is a $50\\%$ increase, and it happens over the $2$ years between consecutive rows.\nStep 3: $2$ years is $2 \\times 12 = 24$ months, so $m = 24$. Check: $1.5 \\times 2{,}790 = 4{,}185$, the value $24$ months later ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): divides $12$ by the $2$-year spacing instead of multiplying.\n* Choice B ($12$): reads consecutive rows as $1$ year apart.\n* Choice D ($36$): multiplies the factor $1.5$ by $24$, mixing a growth factor with a time.\n\n**Test Day Takeaway:** Find the factor between rows, then convert the spacing between those rows into the units the question asks for.",
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
    question: "$y = 2x^{2} + bx + c$\nIn the given equation, $b$ and $c$ are constants. The graph of the equation in the $xy$-plane is a parabola with vertex $(3, -7)$. What is the value of $c$?",
    correctAnswer: "11",
    explanation: "**SAT Pattern: Vertex Form to Standard Form — Recover Coefficients**\n\n**The correct answer is $11$.**\n\n**The Fast Way (~30s):** The leading coefficient is $2$, so $y = 2(x - 3)^{2} - 7 = 2x^{2} - 12x + 11$, and $c = 11$.\n\n**The Full Solution:**\nStep 1: A parabola with leading coefficient $2$ and vertex $(3, -7)$ is $y = 2(x - 3)^{2} - 7$.\nStep 2: Expand: $2(x^{2} - 6x + 9) - 7 = 2x^{2} - 12x + 18 - 7$.\nStep 3: So $y = 2x^{2} - 12x + 11$, and $c = 11$. Check: the vertex of $2x^{2} - 12x + 11$ is at $x = \\frac{12}{4} = 3$, and $2(9) - 36 + 11 = -7$ ✓\n\n**Common Mistakes:**\n* $-7$: takes the $y$-coordinate of the vertex as $c$; $c$ is the $y$-intercept.\n* $2$: expands $(x - 3)^{2}$ but forgets to multiply the $9$ by $2$, getting $9 - 7$.\n* $-25$: subtracts $18$ instead of adding it, getting $-7 - 18$.\n\n**Test Day Takeaway:** Write vertex form with the given leading coefficient, then expand; $c$ is the value of $y$ at $x = 0$.",
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
    question: "A website had $125$ subscribers on January 1. At the end of each month after that, the number of subscribers was $120\\%$ more than the number at the end of the previous month. Which equation gives the number of subscribers, $S$, $m$ months after January 1?",
    choices: [
      // distractor: uses $1.2 - 1 = 0.2$ as the factor, which would shrink the number each month
      { id: "A", text: "$S = 125(0.2)^{m}$" },
      // distractor: reads $120\%$ more as $120\%$ of, using the factor $1.2$
      { id: "B", text: "$S = 125(1.2)^{m}$" },
      { id: "C", text: "$S = 125(2.2)^{m}$" },
      // distractor: adds the same amount, $125(1.2) = 150$, each month instead of multiplying
      { id: "D", text: "$S = 125 + 150m$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Build Exponential Growth — \"$p\\%$ More\" Trap**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** $120\\%$ more than a number is $100\\% + 120\\% = 220\\%$ of it, so the monthly factor is $2.2$ and $S = 125(2.2)^{m}$.\n\n**The Full Solution:**\nStep 1: The starting value, at $m = 0$, is $125$.\nStep 2: Each month the number is the previous number plus $120\\%$ of it: $1 + 1.2 = 2.2$ times the previous number.\nStep 3: So $S = 125(2.2)^{m}$. Check: after $1$ month, $125 + 1.2(125) = 125 + 150 = 275$, and $125(2.2)^{1} = 275$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: uses $0.2$ as the factor, which would make the number fall each month.\n* Choice B: uses $1.2$, which is $120\\%$ of the previous number, a $20\\%$ increase rather than $120\\%$ more.\n* Choice D: adds a fixed $150$ each month, which is linear growth, not growth by the same percent.\n\n**Test Day Takeaway:** \"$p\\%$ more than\" means multiply by $1 + \\frac{p}{100}$; \"$p\\%$ of\" means multiply by $\\frac{p}{100}$.",
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
    question: "The table shows the number of subscribers, $N$, to an online newsletter $t$ years after it was launched, where $N$ increases exponentially. What is the percent increase in $N$ every $6$ months?",
    diagram: { type: "dataTable", params: { headers: ["t", "N"], rows: [["0", "10,000"], ["1", "12,100"], ["2", "14,641"]] } },
    choices: [
      { id: "A", text: "$10\\%$" },
      // distractor: halves the yearly $21\%$ increase instead of taking a square root of the growth factor
      { id: "B", text: "$10.5\\%$" },
      // distractor: reports the yearly increase of $21\%$ as the increase every $6$ months
      { id: "C", text: "$21\\%$" },
      // distractor: doubles the yearly $21\%$ because a year has two $6$-month periods
      { id: "D", text: "$42\\%$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Rewriting Exponential Form — Equivalent Rate**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** $N$ is multiplied by $1.21$ each year, and $1.21 = (1.1)^{2}$, so $N$ is multiplied by $1.1$ every $6$ months, an increase of $10\\%$.\n\n**The Full Solution:**\nStep 1: Divide consecutive values: $\\frac{12{,}100}{10{,}000} = \\frac{14{,}641}{12{,}100} = 1.21$, so $N = 10{,}000(1.21)^{t}$.\nStep 2: A year has two $6$-month periods, so the factor $q$ for each period satisfies $q^{2} = 1.21$, and $q = 1.1$.\nStep 3: A factor of $1.1$ is an increase of $10\\%$ every $6$ months. Check: $10{,}000(1.1)^{2} = 12{,}100$ and $10{,}000(1.1)^{4} = 14{,}641$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($10.5\\%$): halves $21\\%$; two increases of $10.5\\%$ give $(1.105)^{2} \\approx 1.221$, an increase of about $22.1\\%$, not $21\\%$.\n* Choice C ($21\\%$): is the yearly increase, not the increase every $6$ months.\n* Choice D ($42\\%$): doubles $21\\%$, but a shorter period means a smaller increase, not a larger one.\n\n**Test Day Takeaway:** To convert a growth factor to a shorter period, take a root of the factor; for half a year, $N$ grows by the square root of the yearly factor.",
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
    question: "$5x^{2} - 14x - 4 = 0$\nOne solution to the given equation can be written as $\\frac{7 - \\sqrt{k}}{5}$, where $k$ is a constant. What is the value of $k$?",
    correctAnswer: "69",
    explanation: "**SAT Pattern: Quadratic Formula — Discriminant Recovery**\n\n**The correct answer is $69$.**\n\n**The Fast Way (~45s):** The quadratic formula gives $x = \\frac{14 \\pm \\sqrt{276}}{10}$, and $\\sqrt{276} = 2\\sqrt{69}$, so $x = \\frac{7 \\pm \\sqrt{69}}{5}$ and $k = 69$.\n\n**The Full Solution:**\n\nStep 1: With $a = 5$, $b = -14$, and $c = -4$, the discriminant is $b^{2} - 4ac = (-14)^{2} - 4(5)(-4) = 196 + 80 = 276$.\n\nStep 2: The quadratic formula gives $x = \\frac{14 \\pm \\sqrt{276}}{2(5)} = \\frac{14 \\pm \\sqrt{276}}{10}$.\n\nStep 3: Since $276 = 4 \\cdot 69$, $\\sqrt{276} = 2\\sqrt{69}$, and dividing the numerator and denominator by $2$ gives $x = \\frac{7 \\pm \\sqrt{69}}{5}$. Matching $\\frac{7 - \\sqrt{k}}{5}$ gives $k = 69$. Check: $\\frac{7 - \\sqrt{69}}{5} \\approx -0.2613$, and $5(-0.2613)^{2} - 14(-0.2613) - 4 \\approx 0.3414 + 3.6582 - 4 \\approx 0$ ✓\n\n**Common Mistakes:**\n\n* $276$: stops at the discriminant. The target form has a denominator of $5$, not $10$, so the $2$ inside $\\sqrt{276} = 2\\sqrt{69}$ must come out before the fraction is reduced.\n* $29$: uses $196 - 80 = 116$ for the discriminant, losing the sign of $c = -4$, and then simplifies $\\sqrt{116} = 2\\sqrt{29}$.\n\n**Test Day Takeaway:** When a solution is given in a reduced form, run the quadratic formula, pull every perfect-square factor out of the radical, and reduce the fraction until its denominator matches the one in the question.",
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
    question: "$\\sqrt{x + b} = x - 6$\nIn the given equation, $b$ is an integer constant. For what value of $b$ does the equation have exactly two distinct real solutions?",
    choices: [
      // distractor: squaring gives x squared minus 13x plus 44 = 0, whose discriminant -7 is negative, so there are no real solutions at all
      { id: "A", text: "$-8$" },
      { id: "B", text: "$-6$" },
      // distractor: squaring gives solutions 9 and 4, but 4 makes x - 6 negative and is extraneous, leaving one solution
      { id: "C", text: "$0$" },
      // distractor: squaring gives solutions 11 and 2, and 2 is extraneous, leaving one solution
      { id: "D", text: "$14$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Radical Equation — Extraneous Filter**\n\n**Choice B is correct.**\n\n**The Fast Way (~60s):** Squaring gives $x^{2} - 13x + (36 - b) = 0$, and a root counts only when $x \\ge 6$; with $b = -6$ the roots are $6$ and $7$, and both pass.\n\n**The Full Solution:**\n\nStep 1: Squaring $\\sqrt{x + b} = x - 6$ gives $x + b = x^{2} - 12x + 36$, so $x^{2} - 13x + (36 - b) = 0$.\n\nStep 2: The left side of the original equation is never negative, so a root of the squared equation is a solution only if $x - 6 \\ge 0$, that is, $x \\ge 6$.\n\nStep 3: With $b = -6$ the quadratic is $x^{2} - 13x + 42 = (x - 6)(x - 7) = 0$, giving $x = 6$ and $x = 7$, and both are at least $6$. Check: $\\sqrt{6 - 6} = 0 = 6 - 6$ and $\\sqrt{7 - 6} = 1 = 7 - 6$ ✓\n\n**Why the wrong answers are tempting:**\n\n* Choice A ($-8$): the squared equation becomes $x^{2} - 13x + 44 = 0$, whose discriminant is $169 - 176 = -7$, so there are no real solutions at all.\n* Choice C ($0$): the squared equation has roots $9$ and $4$, but $x = 4$ makes $x - 6 = -2$ and is extraneous, leaving one solution.\n* Choice D ($14$): the squared equation has roots $11$ and $2$, and $x = 2$ is extraneous for the same reason, leaving one solution.\n\n**Test Day Takeaway:** Squaring can add solutions but never removes them, so test every root of the squared equation against the sign the original equation forces.",
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
    question: "$x^{2} + bx - 24$\nIn the given expression, $b$ is a constant. The expression can be written as $(x + p)(x + q)$, where $p$ and $q$ are integers. What is the greatest possible value of $b$?",
    choices: [
      // distractor: stops at the factor pair 6 and -4, a valid factorization whose sum, 2, is not the greatest
      { id: "A", text: "$2$" },
      // distractor: stops at the factor pair 8 and -3, whose sum, 5, is not the greatest
      { id: "B", text: "$5$" },
      // distractor: stops at the factor pair 12 and -2, the second-largest sum
      { id: "C", text: "$10$" },
      { id: "D", text: "$23$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Factor with Parameter — Integer Constraint**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** $b$ is the sum of two integers whose product is $-24$, and the sum is greatest for the pair farthest apart: $24 + (-1) = 23$.\n\n**The Full Solution:**\nStep 1: Expanding $(x + p)(x + q)$ gives $x^{2} + (p + q)x + pq$, so $pq = -24$ and $b = p + q$.\nStep 2: The integer pairs with product $-24$ are $(1, -24)$, $(2, -12)$, $(3, -8)$, $(4, -6)$ and the same pairs with the signs switched, giving sums $-23$, $-10$, $-5$, $-2$, $2$, $5$, $10$, and $23$.\nStep 3: The greatest of those sums is $23$. Check: $(x + 24)(x - 1) = x^{2} + 23x - 24$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): comes from $(x + 6)(x - 4)$, a valid factorization but not the one with the greatest sum.\n* Choice B ($5$): comes from $(x + 8)(x - 3)$.\n* Choice C ($10$): comes from $(x + 12)(x - 2)$, the second-greatest sum.\n\n**Test Day Takeaway:** For a negative constant term, the factor pair that uses $1$ is the one farthest apart, so it produces the greatest and least possible values of the middle coefficient.",
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
    question: "The graph shown models the height $y$, in inches, of a stream of water from a fountain at a horizontal distance of $x$ inches from the nozzle, where $0 \\le x \\le 50$. According to the model, what is the height, in inches, of the stream at $x = 8$?",
    diagram: { type: "parabola", params: { vertex: { h: 20, k: 45 }, a: -0.05, xRange: [0, 50], yRange: [0, 50], xTickInterval: 10, yTickInterval: 10, gridInterval: 5, showVertex: true } },
    correctAnswer: "37.8",
    explanation: "**SAT Pattern: Quadratic Model from Vertex + Zero**\n\n**The correct answer is $37.8$.**\n\n**The Fast Way (~30s):** The vertex is $(20, 45)$, so $y = a(x - 20)^{2} + 45$; the graph meets the $x$-axis at $x = 50$, which forces $a = -0.05$, so the height at $x = 8$ is $-0.05(144) + 45 = 37.8$.\n\n**The Full Solution:**\nStep 1: The graph's highest point is the vertex $(20, 45)$, so the model has the form $y = a(x - 20)^{2} + 45$ for some constant $a$.\nStep 2: The graph meets the $x$-axis at $(50, 0)$, so $0 = a(50 - 20)^{2} + 45$, which gives $900a = -45$ and $a = -0.05$.\nStep 3: Evaluate at $x = 8$: $y = -0.05(8 - 20)^{2} + 45 = -0.05(144) + 45 = -7.2 + 45 = 37.8$ inches. Check with symmetry: $x = 32$ is the same distance from the vertex as $x = 8$, and $-0.05(32 - 20)^{2} + 45 = 37.8$ as well ✓\n\n**Common Mistakes:**\n* $-171$: divides by the horizontal distance instead of its square, using $a = -\\frac{45}{30} = -1.5$, which gives $-1.5(144) + 45 = -171$, a height below the ground.\n* $44.4$: multiplies $a$ by $12$ rather than by $12^{2}$, computing $-0.05(12) + 45 = 44.4$.\n* $45$: reports the greatest height instead of the height at $x = 8$.\n\n**Test Day Takeaway:** A vertex plus one more point determines a quadratic model completely. Write $a(x - h)^{2} + k$, solve for $a$ with the extra point, and square the horizontal distance before multiplying.",
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
    question: "The graph of $y = g(x)$ is shown, where $g$ is a quadratic function. Which of the following must be true?\n\nI. $x + 5$ is a factor of $g(x)$.\nII. $g(x)$ decreases as $x$ increases for $x < -2$.\nIII. The maximum value of $g(x)$ is $-9$.",
    diagram: { type: "parabola", params: { vertex: { h: -2, k: -9 }, a: 1, xRange: [-6, 2], yRange: [-10, 8], xTickInterval: 1, yTickInterval: 2, gridInterval: 1, showVertex: false } },
    choices: [
      // distractor: accepts the factor from the intercept at x = -5 but reads the branch left of the vertex as rising, rejecting II
      { id: "A", text: "I only" },
      { id: "B", text: "I and II only" },
      // distractor: accepts III by reading the lowest point -9 as a maximum, and drops I after missing the intercept at x = -5
      { id: "C", text: "II and III only" },
      // distractor: accepts all three, including the false claim that the upward-opening parabola has a maximum of -9
      { id: "D", text: "I, II, and III" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Quadratic Must-Be-True Statements**\n\n**Choice B is correct.**\n\n**The Fast Way (~50s):** The graph crosses the $x$-axis at $x = -5$ and $x = 1$ and turns upward at $(-2, -9)$, so I and II hold, while III calls the minimum a maximum.\n\n**The Full Solution:**\n\nStep 1: Statement I. The graph meets the $x$-axis at $x = -5$, so $g(-5) = 0$ and $x - (-5) = x + 5$ is a factor of $g(x)$. I is true.\n\nStep 2: Statement II. The vertex is at $x = -2$ and the parabola opens upward, so for all $x < -2$ the graph falls as $x$ increases. II is true.\n\nStep 3: Statement III. A parabola that opens upward has no maximum value; $-9$ is the minimum value of $g(x)$. III is false, so I and II only must be true. Check: the graph passes through $(-6, 7)$ and $(2, 7)$, values greater than $-9$, so $-9$ cannot be a maximum ✓\n\n**Why the wrong answers are tempting:**\n\n* Choice A: keeps I but rejects II by reading the left side of the graph as rising instead of falling.\n* Choice C: keeps the false statement III by calling the lowest point a maximum, and overlooks the $x$-intercept at $-5$ that makes I true.\n* Choice D: accepts every statement, including the claim that an upward-opening parabola has a maximum.\n\n**Test Day Takeaway:** For a must-be-true question about a graph, test each statement against one feature of the graph, such as an intercept, the vertex, or the direction it opens.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "roman-numeral-must-be-true",
    sourceRef: "pilot-m3-roman-quadratic",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-08-13"
  }
];
