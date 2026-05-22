export const advancedMathBank = [
  // ── identify-quadratic (4 questions) ──────────────────────────────
  {
    id: 'bank-am-001',
    domain: 'advanced-math',
    skills: ['identify-quadratic'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'Which of the following is a quadratic equation?',
    choices: [
      // distractor: degree 1 (linear), not quadratic
      { id: 'A', text: '$3x + 7 = 0$' },
      { id: 'B', text: '$x^2 - 5x + 6 = 0$' },
      // distractor: rational equation, not polynomial
      { id: 'C', text: '$\\frac{1}{x} + 2 = 5$' },
      // distractor: degree 3 (cubic)
      { id: 'D', text: '$x^3 - x = 0$' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Identify Quadratic Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Quadratic = degree exactly $2$. Only $x^2 - 5x + 6 = 0$ has $x^2$ as the highest power.\n\n**The Full Solution:**\nA quadratic equation has the standard form $ax^2 + bx + c = 0$ with $a \\neq 0$. The highest power of the variable must be exactly $2$.\n* B: $x^2 - 5x + 6 = 0$ has $a = 1$, $b = -5$, $c = 6$. Quadratic. ✓\n\nVerification: B factors as $(x - 2)(x - 3) = 0$, giving two roots — characteristic of a quadratic \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — degree $1$ (linear).\n* Choice C: "wrong formula" — rational, not polynomial. Multiplying by $x$ gives $1 + 2x = 5x$, a linear equation.\n* Choice D: "off-by-one" — degree $3$ (cubic).\n\n**Test Day Takeaway:** Quadratic means highest power is EXACTLY $2$. Don\'t be fooled by equations that contain $x^2$ as a term but have higher powers too, or by rational forms that simplify to lower degree.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'concept-identification',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-002',
    domain: 'advanced-math',
    skills: ['identify-quadratic'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A landscaper models the area $A$ of a rectangular flower bed as $A = w(18 - w)$, where $w$ is the width in feet. What type of equation best describes this model?',
    choices: [
      // distractor: looks linear before expanding
      { id: 'A', text: 'Linear' },
      // distractor: confuses any growth with exponential
      { id: 'B', text: 'Exponential' },
      { id: 'C', text: 'Quadratic' },
      // distractor: not rational (no variable in denominator)
      { id: 'D', text: 'Rational' },
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Classify Model by Expanding**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Expand: $A = w(18 - w) = -w^2 + 18w$. Highest power is $w^2$, so quadratic.\n\n**The Full Solution:**\nDistribute the $w$:\n$A = w(18 - w) = 18w - w^2 = -w^2 + 18w$.\nThis is degree $2$ in $w$, so the model is quadratic. The graph would be a downward parabola.\n\nVerification: at $w = 0$, $A = 0$. At $w = 18$, $A = 0$. The model is zero at both endpoints, which only quadratics (or higher-degree polynomials with these roots) achieve smoothly \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "stops one step early" — looks linear in $w$ before expanding the product.\n* Choice B: "wrong formula" — exponential models have a base raised to $w$, not a polynomial in $w$.\n* Choice D: "wrong base" — rational equations have variables in the denominator.\n\n**Test Day Takeaway:** Always EXPAND products before classifying. A product of two linear factors is quadratic, not linear. Recognize $w(18 - w)$ as a classic vertex-form-friendly shape with roots at $0$ and $18$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'model-classification',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-003',
    domain: 'advanced-math',
    skills: ['identify-quadratic'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'After simplification, which expression is equivalent to a quadratic in $t$?\n\nI. $t(t + 4) - t^2$\nII. $(2t - 1)(t + 3)$\nIII. $\\frac{t^3 - t}{t}$, $t \\neq 0$',
    choices: [
      // distractor: misses III which simplifies to t² - 1
      { id: 'A', text: 'II only' },
      // distractor: includes I, which collapses to 4t (linear)
      { id: 'B', text: 'I and II only' },
      { id: 'C', text: 'II and III only' },
      // distractor: includes I incorrectly
      { id: 'D', text: 'I, II, and III' },
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Classify After Simplification**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Simplify each:\nI: $t^2 + 4t - t^2 = 4t$ (linear).\nII: expand $(2t - 1)(t + 3) = 2t^2 + 5t - 3$ (quadratic).\nIII: $\\frac{t(t^2 - 1)}{t} = t^2 - 1$ (quadratic).\nSo II and III are quadratic.\n\n**The Full Solution:**\nI. $t(t + 4) - t^2 = t^2 + 4t - t^2 = 4t$. Linear.\nII. $(2t - 1)(t + 3) = 2t^2 + 6t - t - 3 = 2t^2 + 5t - 3$. Quadratic.\nIII. $\\frac{t^3 - t}{t} = \\frac{t(t^2 - 1)}{t} = t^2 - 1$ for $t \\neq 0$. Quadratic.\n\nSo II and III are quadratic.\n\nVerification: degree counts — I has highest power $1$, II has $2$, III has $2$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "stops one step early" — fails to simplify III, missing that it\'s quadratic.\n* Choice B: "wrong base" — incorrectly keeps I as quadratic before noticing the $t^2$ terms cancel.\n* Choice D: "applies the inverse operation" — fails to simplify I and treats it as quadratic.\n\n**Test Day Takeaway:** ALWAYS simplify first. Cancellations (like $t^2 - t^2 = 0$ in I, or the $t$ in III\'s numerator and denominator) can change an expression\'s degree.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'classify-after-simplify',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-004',
    domain: 'advanced-math',
    skills: ['identify-quadratic'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'The height, in meters, of a drone $t$ seconds after launch is modeled by $h(t) = -4.9t^2 + 20t + 1.5$. Which statement about this model is true?',
    choices: [
      // distractor: ignores the t² term
      { id: 'A', text: 'The model is linear because height changes at a constant rate.' },
      // distractor: confuses acceleration with exponential growth
      { id: 'B', text: 'The model is exponential because the drone accelerates.' },
      { id: 'C', text: 'The model is quadratic because the highest power of $t$ is 2.' },
      // distractor: any curve must be cubic (wrong)
      { id: 'D', text: 'The model is cubic because the drone path curves.' },
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Classify Physical Motion Model**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $h(t) = -4.9t^2 + 20t + 1.5$ has highest power $t^2$, so it\'s quadratic.\n\n**The Full Solution:**\nProjectile motion under constant gravity is classically quadratic in $t$. The coefficient $-4.9$ comes from $-\\frac{g}{2}$ where $g \\approx 9.8$ m/s². The $t^2$ term makes the model quadratic.\n\nVerification: the path of any projectile under gravity is a parabola (quadratic), not linear, exponential, or cubic \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — height does NOT change at constant rate; the $t^2$ term creates acceleration.\n* Choice B: "wrong formula" — acceleration produces quadratic, not exponential, motion.\n* Choice D: "wrong base" — curving is a feature of any non-linear model, not just cubics.\n\n**Test Day Takeaway:** Projectile motion under gravity is ALWAYS quadratic, with the $-\\frac{g}{2}t^2$ term creating the parabolic path. Recognize this pattern instantly.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'model-classification',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },

  // ── parabola-direction (4 questions) ──────────────────────────────
  {
    id: 'bank-am-005',
    domain: 'advanced-math',
    skills: ['parabola-direction'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'The graph of $y = -3x^2 + 12x - 7$ is a parabola. In which direction does it open?',
    choices: [
      // distractor: confuses leading coefficient sign
      { id: 'A', text: 'Upward' },
      { id: 'B', text: 'Downward' },
      // distractor: applies to x = f(y) parabolas, not y = f(x)
      { id: 'C', text: 'To the right' },
      // distractor: applies to x = f(y) parabolas
      { id: 'D', text: 'To the left' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Parabola Direction**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Leading coefficient $a = -3 < 0$, so the parabola opens DOWN.\n\n**The Full Solution:**\nFor $y = ax^2 + bx + c$:\n* $a > 0$: parabola opens upward (vertex is minimum)\n* $a < 0$: parabola opens downward (vertex is maximum)\n\nHere $a = -3 < 0$, so the parabola opens downward.\n\nVerification: $y(0) = -7$ is below the vertex; since the parabola opens down, it must rise to a max then fall. The leading coefficient confirms direction \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — focuses on the positive $12x$ term instead of the leading coefficient $-3$.\n* Choice C: "wrong formula" — sideways parabolas come from $x = f(y)$ equations, not $y = f(x)$.\n* Choice D: "wrong formula" — same as C.\n\n**Test Day Takeaway:** Direction of $y = ax^2 + bx + c$: look at the SIGN of $a$ ONLY. The other coefficients don\'t affect direction.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'parabola-orientation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-006',
    domain: 'advanced-math',
    skills: ['parabola-direction'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A ball\'s height is modeled by $h = -16t^2 + 48t + 5$. Does the parabola have a maximum or minimum value, and why?',
    choices: [
      { id: 'A', text: 'Maximum, because $a = -16 < 0$' },
      // distractor: wrong direction (a < 0 means max, not min)
      { id: 'B', text: 'Minimum, because $a = -16 < 0$' },
      // distractor: uses c (initial height) instead of a
      { id: 'C', text: 'Maximum, because $c = 5 > 0$' },
      // distractor: uses b (initial velocity) instead of a
      { id: 'D', text: 'Minimum, because $b = 48 > 0$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Max vs Min Reasoning**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $a = -16 < 0$ means the parabola opens DOWN, so the vertex is a MAXIMUM.\n\n**The Full Solution:**\nThe leading coefficient $a$ determines whether the parabola opens up (minimum vertex) or down (maximum vertex):\n* $a > 0$: opens up, vertex is the minimum point.\n* $a < 0$: opens down, vertex is the maximum point.\n\nHere $a = -16 < 0$, so the vertex is a maximum height.\n\nVerification: the ball goes up, peaks, comes down — physical max is consistent with the math \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "applies the inverse operation" — correct premise ($a < 0$), wrong conclusion.\n* Choice C: "wrong base" — uses $c$ (the initial height) to justify the answer.\n* Choice D: "wrong base" — uses $b$ (the initial velocity) to justify.\n\n**Test Day Takeaway:** ONLY $a$ (the leading coefficient) determines whether the vertex is a max or min. The other coefficients shift the parabola but don\'t flip its direction.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'max-min-reasoning',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-007',
    domain: 'advanced-math',
    skills: ['parabola-direction'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'For what values of $k$ does the graph of $y = (k - 2)x^2 + 5x - 1$ open upward?',
    choices: [
      { id: 'A', text: '$k > 2$' },
      // distractor: opposite inequality
      { id: 'B', text: '$k < 2$' },
      // distractor: ignores the shift by 2
      { id: 'C', text: '$k > 0$' },
      // distractor: gives degenerate case (no quadratic at all)
      { id: 'D', text: '$k = 2$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Parameter Constraint on Leading Coefficient**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Opens upward $\\Rightarrow a > 0 \\Rightarrow k - 2 > 0 \\Rightarrow k > 2$.\n\n**The Full Solution:**\nFor the parabola to open upward, the leading coefficient $a$ must be positive:\n$a = k - 2 > 0$\n$k > 2$.\n\nVerification: at $k = 3$, $a = 1 > 0$, opens up. At $k = 1$, $a = -1 < 0$, opens down \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "applies the inverse operation" — opposite inequality.\n* Choice C: "wrong base" — uses $k > 0$ directly, ignoring the $-2$ shift.\n* Choice D: "wrong formula" — at $k = 2$, the coefficient is $0$ and the equation isn\'t quadratic.\n\n**Test Day Takeaway:** When the leading coefficient is a parameter, solve the inequality $a > 0$ (or $a < 0$). Watch for the degenerate case where $a = 0$ — there\'s no parabola at all.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'parameter-constraint',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-008',
    domain: 'advanced-math',
    skills: ['parabola-direction', 'vertex-form'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'The function $f(x) = -2(x - 4)^2 + 18$ models daily profit in thousands of dollars, where $x$ is the unit price. Which statement must be true?',
    choices: [
      // distractor: wrong direction (a < 0 means max, not min)
      { id: 'A', text: 'Profit is minimized at a unit price of 4.' },
      { id: 'B', text: 'Profit is maximized at 18 thousand dollars.' },
      // distractor: wrong direction past the vertex (decreases for x > 4)
      { id: 'C', text: 'Profit increases for all $x > 4$.' },
      // distractor: swaps h and k from the vertex (4, 18)
      { id: 'D', text: 'Profit is maximized at a unit price of 18.' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Interpret Vertex Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Vertex form $a(x - h)^2 + k$: vertex is $(h, k) = (4, 18)$. $a = -2 < 0$, so $k = 18$ is the maximum.\n\n**The Full Solution:**\nVertex form $f(x) = a(x - h)^2 + k$ has vertex $(h, k)$. Here $h = 4$ (the price that maximizes profit) and $k = 18$ (the max profit in thousands).\n\nSince $a = -2 < 0$, the parabola opens down and the vertex is a MAXIMUM. So the maximum profit is $18$ thousand dollars, achieved at price $x = 4$.\n\nVerification: at $x = 4$, $f(4) = -2(0) + 18 = 18$. At $x = 5$, $f(5) = -2(1) + 18 = 16 < 18$, confirming $18$ is the max \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "applies the inverse operation" — calls the max a min.\n* Choice C: "wrong direction" — past the vertex (which is a max), the parabola DECREASES, not increases.\n* Choice D: "wrong base" — confuses the vertex coordinates: price is $4$, max profit is $18$. The price that maximizes is NOT $18$.\n\n**Test Day Takeaway:** Vertex form $a(x - h)^2 + k$: vertex is $(h, k)$. $h$ is the $x$-value, $k$ is the $y$-value at the vertex. For a profit model with $a < 0$, $k$ is the max profit and $h$ is the price that achieves it.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'vertex-form-interpretation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },

  // ── finding-roots-factoring (5 questions) ─────────────────────────
  {
    id: 'bank-am-009',
    domain: 'advanced-math',
    skills: ['finding-roots-factoring'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'What are the solutions to $x^2 - 9x + 20 = 0$?',
    choices: [
      { id: 'A', text: '$x = 4$ and $x = 5$' },
      // distractor: reverses both signs
      { id: 'B', text: '$x = -4$ and $x = -5$' },
      // distractor: uses pair that multiplies to 20 but sums to wrong value
      { id: 'C', text: '$x = 2$ and $x = 10$' },
      // distractor: mixes signs incorrectly
      { id: 'D', text: '$x = -4$ and $x = 5$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Factor and Solve**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Need two numbers that multiply to $20$ and sum to $9$: $4$ and $5$. So $(x - 4)(x - 5) = 0$, giving $x = 4$ or $x = 5$.\n\n**The Full Solution:**\nFor $x^2 + bx + c = 0$ with leading coefficient $1$: find two numbers that multiply to $c$ and sum to $-b$ (note the sign).\nHere $b = -9$ and $c = 20$. Need product $= 20$ and sum $= 9$: $4 + 5 = 9$ ✓ and $4 \\cdot 5 = 20$ ✓.\nFactored form: $(x - 4)(x - 5) = 0$.\nRoots: $x = 4$ or $x = 5$.\n\nVerification: $(4)^2 - 9(4) + 20 = 16 - 36 + 20 = 0$ \\checkmark. $(5)^2 - 9(5) + 20 = 25 - 45 + 20 = 0$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "applies the inverse operation" — reverses both signs.\n* Choice C: "wrong formula" — uses $2 \\cdot 10 = 20$ but $2 + 10 = 12 \\neq 9$.\n* Choice D: "sign error" — mixes signs incorrectly.\n\n**Test Day Takeaway:** For $x^2 + bx + c$ with $a = 1$: find factor pair of $c$ that sums to $-b$. Sign of each root is OPPOSITE to the sign in the factor: $(x - 4)$ gives root $x = 4$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'factor-and-solve',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-010',
    domain: 'advanced-math',
    skills: ['finding-roots-factoring'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'What is the positive solution to $x^2 + 2x - 35 = 0$?',
    correctAnswer: '5',
    explanation: '**SAT Pattern: Factor and Solve (Fill-in)**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~15s):** Two numbers with product $-35$ and sum $2$: $7$ and $-5$. Factor: $(x + 7)(x - 5) = 0$. Roots: $-7$ and $5$. Positive: $5$.\n\n**The Full Solution:**\nFind factor pair of $-35$ that sums to $2$: $7$ and $-5$ ($7 + (-5) = 2$ ✓, $7 \\cdot (-5) = -35$ ✓).\nFactored: $(x + 7)(x - 5) = 0$.\nRoots: $x = -7$ or $x = 5$.\nThe positive solution is $5$.\n\nVerification: $5^2 + 2(5) - 35 = 25 + 10 - 35 = 0$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting $-7$ (the negative root).\n* Reporting both roots when only the positive one is asked.\n* Sign error in factoring: confusing $(x + 7)$ vs $(x - 7)$.\n\n**Test Day Takeaway:** When $c$ is negative, one factor is positive and one is negative. The factor pair must have opposite signs and the right magnitudes.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'factor-and-solve',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-011',
    domain: 'advanced-math',
    skills: ['finding-roots-factoring'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'What are all solutions to $2x^2 - 7x - 15 = 0$?',
    choices: [
      { id: 'A', text: '$x = -\\frac{3}{2}$ and $x = 5$' },
      // distractor: flips both signs
      { id: 'B', text: '$x = \\frac{3}{2}$ and $x = -5$' },
      // distractor: uses (x - 3)(2x + 5) factoring
      { id: 'C', text: '$x = 3$ and $x = -\\frac{5}{2}$' },
      // distractor: flips signs of choice C
      { id: 'D', text: '$x = -3$ and $x = \\frac{5}{2}$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Factor with Leading Coefficient ≠ 1**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Try AC method: $a \\cdot c = 2 \\cdot (-15) = -30$. Find factor pair summing to $b = -7$: $-10$ and $3$. Rewrite: $2x^2 - 10x + 3x - 15 = 2x(x - 5) + 3(x - 5) = (2x + 3)(x - 5)$. Roots: $x = -3/2$, $x = 5$.\n\n**The Full Solution:**\nUse the AC method or grouping:\n$2x^2 - 7x - 15 = 0$\nLook for two numbers with product $a \\cdot c = -30$ and sum $b = -7$: $-10$ and $3$.\nSplit the middle term: $2x^2 - 10x + 3x - 15$\nGroup: $2x(x - 5) + 3(x - 5) = (2x + 3)(x - 5) = 0$.\nRoots: $2x + 3 = 0 \\Rightarrow x = -\\frac{3}{2}$, or $x - 5 = 0 \\Rightarrow x = 5$.\n\nVerification: $2(-3/2)^2 - 7(-3/2) - 15 = 2(9/4) + 21/2 - 15 = 9/2 + 21/2 - 30/2 = 0$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "applies the inverse operation" — flips both signs.\n* Choice C: "wrong factoring" — uses $(x - 3)(2x + 5)$ which expands incorrectly.\n* Choice D: "sign error" — flips both signs of C.\n\n**Test Day Takeaway:** AC method for $ax^2 + bx + c$: find factor pair of $ac$ that sums to $b$. Split, group, factor. The roots have sign OPPOSITE to the constant in each factor, and the denominators come from the variable coefficients.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'factor-and-solve',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-012',
    domain: 'advanced-math',
    skills: ['finding-roots-factoring'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'A rectangular garden has length $(x + 3)$ meters and width $(x - 1)$ meters. If the area is 45 square meters, what is the value of $x$?',
    correctAnswer: '6',
    explanation: '**SAT Pattern: Area Equation to Quadratic**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~25s):** $(x + 3)(x - 1) = 45 \\Rightarrow x^2 + 2x - 48 = 0 \\Rightarrow (x + 8)(x - 6) = 0$. Positive root: $x = 6$.\n\n**The Full Solution:**\nSet area equal: $(x + 3)(x - 1) = 45$.\nExpand: $x^2 + 2x - 3 = 45$.\nMove to one side: $x^2 + 2x - 48 = 0$.\nFactor pair of $-48$ summing to $2$: $8$ and $-6$.\n$(x + 8)(x - 6) = 0$. Roots: $x = -8$ or $x = 6$.\nDimensions must be positive ($x - 1 > 0$ requires $x > 1$), so $x = 6$.\n\nVerification: at $x = 6$, length $= 9$, width $= 5$, area $= 45$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting $-8$ (gives negative width, impossible).\n* Stopping after expansion without solving.\n* Forgetting to subtract $45$ from both sides.\n\n**Test Day Takeaway:** Area = length × width problems become quadratics after expansion. Always check that the answer makes geometric sense (positive dimensions).',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'area-equation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-013',
    domain: 'advanced-math',
    skills: ['finding-roots-factoring'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'If $3x^2 + kx - 14 = 0$ has $x = 2$ as a root, what is the other root?',
    choices: [
      { id: 'A', text: '$x = -\\frac{7}{3}$' },
      // distractor: drops the negative sign
      { id: 'B', text: '$x = \\frac{7}{3}$' },
      // distractor: uses c/a = -14/3 ... wait, treats c directly
      { id: 'C', text: '$x = -7$' },
      // distractor: gives c/a as a root
      { id: 'D', text: '$x = -\\frac{14}{3}$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Back-Solve Parameter, Then Find Other Root**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Plug $x = 2$: $12 + 2k - 14 = 0 \\Rightarrow k = 1$. Then $3x^2 + x - 14 = (3x + 7)(x - 2) = 0$. Other root: $x = -7/3$.\n\n**Alternative: Vieta\'s.** Product of roots $= c/a = -14/3$. Since one root is $2$: other root $= -14/3 \\div 2 = -7/3$.\n\n**The Full Solution:**\nStep 1: Find $k$ by plugging $x = 2$ into the equation:\n$3(4) + 2k - 14 = 0$\n$12 + 2k - 14 = 0$\n$2k = 2 \\Rightarrow k = 1$.\n\nStep 2: Solve $3x^2 + x - 14 = 0$. AC method: $ac = -42$, factor pair summing to $1$: $7$ and $-6$. Split: $3x^2 + 7x - 6x - 14 = x(3x + 7) - 2(3x + 7) = (3x + 7)(x - 2) = 0$. Roots: $x = -7/3$ or $x = 2$.\nOther root: $-7/3$.\n\nVerification (Vieta\'s): product of roots = $c/a = -14/3$. Check: $2 \\cdot (-7/3) = -14/3$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "sign error" — drops the negative.\n* Choice C: "wrong base" — uses $-7$ instead of $-7/3$.\n* Choice D: "wrong formula" — gives $c/a$ as a root (which is the PRODUCT of roots, not a root itself).\n\n**Test Day Takeaway:** When one root is given, Vieta\'s formulas are the fastest: sum of roots $= -b/a$, product $= c/a$. Use the product when you know one root.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'back-solve-parameter',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },

  // ── roots-from-factors (4 questions) ──────────────────────────────
  {
    id: 'bank-am-014',
    domain: 'advanced-math',
    skills: ['roots-from-factors'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'What are the solutions to the equation $(x - 7)(x + 2) = 0$?',
    choices: [
      { id: 'A', text: '$x = 7$ and $x = -2$' },
      // distractor: flips both signs
      { id: 'B', text: '$x = -7$ and $x = 2$' },
      // distractor: keeps both signs the same (positive)
      { id: 'C', text: '$x = 7$ and $x = 2$' },
      // distractor: keeps both signs the same (negative)
      { id: 'D', text: '$x = -7$ and $x = -2$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Zero Product Property**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Set each factor $= 0$: $x - 7 = 0 \\to x = 7$; $x + 2 = 0 \\to x = -2$.\n\n**The Full Solution:**\nZero Product Property: if $AB = 0$, then $A = 0$ or $B = 0$.\nApplied here: $(x - 7)(x + 2) = 0$ requires:\n* $x - 7 = 0 \\Rightarrow x = 7$, OR\n* $x + 2 = 0 \\Rightarrow x = -2$.\n\nVerification: $(7 - 7)(7 + 2) = 0 \\cdot 9 = 0$ \\checkmark. $(-2 - 7)(-2 + 2) = -9 \\cdot 0 = 0$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "sign error" — flips signs of both roots.\n* Choice C: "applies the inverse operation" — keeps both signs positive.\n* Choice D: "applies the inverse operation" — keeps both signs negative.\n\n**Test Day Takeaway:** The sign of each root is OPPOSITE to the sign in its factor: $(x - 7)$ gives $x = 7$ (not $-7$); $(x + 2)$ gives $x = -2$ (not $2$).',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'zero-product-property',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-015',
    domain: 'advanced-math',
    skills: ['roots-from-factors'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'If $(x - 11)(x + 3) = 0$, what is the sum of all solutions?',
    correctAnswer: '8',
    explanation: '**SAT Pattern: Sum of Roots from Factors**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~5s):** Roots are $11$ and $-3$. Sum: $11 + (-3) = 8$.\n\n**The Full Solution:**\nSet each factor to zero:\n* $x - 11 = 0 \\Rightarrow x = 11$\n* $x + 3 = 0 \\Rightarrow x = -3$\nSum of roots: $11 + (-3) = 8$.\n\nVerification (Vieta\'s): expand $(x - 11)(x + 3) = x^2 - 8x - 33$. Sum of roots $= -b/a = 8$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting $14$ (adds the magnitudes, ignoring signs).\n* Reporting $-33$ (product of roots, not sum).\n* Reporting only one root.\n\n**Test Day Takeaway:** Sum of roots of $x^2 + bx + c$ is $-b$ (for leading coefficient $1$). Faster than finding each root when the polynomial is in expanded form.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'zero-product-property',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-016',
    domain: 'advanced-math',
    skills: ['roots-from-factors'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'The equation $(2x - 5)(3x + 4) = 0$ has solutions $x = a$ and $x = b$. What is $a \\cdot b$?',
    choices: [
      // distractor: equivalent value but unsimplified
      { id: 'A', text: '$-\\frac{20}{6}$' },
      // distractor: sign error
      { id: 'B', text: '$\\frac{20}{6}$' },
      { id: 'C', text: '$-\\frac{10}{3}$' },
      // distractor: arbitrary
      { id: 'D', text: '$-1$' },
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Product of Roots from Factors**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Roots: $x = 5/2$ and $x = -4/3$. Product: $\\frac{5}{2} \\cdot \\frac{-4}{3} = \\frac{-20}{6} = -\\frac{10}{3}$.\n\n**The Full Solution:**\nFind each root:\n* $2x - 5 = 0 \\Rightarrow x = \\frac{5}{2}$\n* $3x + 4 = 0 \\Rightarrow x = -\\frac{4}{3}$\nProduct: $\\frac{5}{2} \\cdot \\left(-\\frac{4}{3}\\right) = -\\frac{20}{6} = -\\frac{10}{3}$.\n\nVerification (Vieta\'s): expand $(2x - 5)(3x + 4) = 6x^2 - 7x - 20$. Product of roots $= c/a = -20/6 = -10/3$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "unsimplified" — numerically equal to C but the SAT lists simplified form as correct.\n* Choice B: "sign error" — drops the negative.\n* Choice D: "wrong base" — random value.\n\n**Test Day Takeaway:** Product of roots of $ax^2 + bx + c$ is $c/a$. Vieta\'s formulas often beat finding each root. ALWAYS reduce fractions to lowest terms.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'root-product',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-017',
    domain: 'advanced-math',
    skills: ['roots-from-factors'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'If one factor of $6x^2 - x - 12$ is $(2x - 3)$, what is the other factor and the sum of the roots?',
    choices: [
      { id: 'A', text: '$(3x + 4)$; sum $= \\frac{1}{6}$' },
      // distractor: wrong factor + wrong sum
      { id: 'B', text: '$(3x - 4)$; sum $= \\frac{17}{6}$' },
      // distractor: right factor, wrong sum sign
      { id: 'C', text: '$(3x + 4)$; sum $= -\\frac{1}{6}$' },
      // distractor: wrong factor with right-looking sum
      { id: 'D', text: '$(3x - 4)$; sum $= \\frac{1}{6}$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Factor Division + Vieta\'s**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** $6x^2 - x - 12 \\div (2x - 3)$: leading coefficient on the other factor must be $3$ (to get $6x^2$), constant must be $+4$ (to get $-12$ when multiplied by $-3$). Check middle: $(2x)(4) + (-3)(3x) = 8x - 9x = -x$ ✓. Other factor: $(3x + 4)$. Sum of roots $= -b/a = -(-1)/6 = 1/6$.\n\n**The Full Solution:**\nDivide: $\\frac{6x^2 - x - 12}{2x - 3}$. The other factor must be $(3x + 4)$:\n* Verify: $(2x - 3)(3x + 4) = 6x^2 + 8x - 9x - 12 = 6x^2 - x - 12$ ✓.\n\nRoots: $2x - 3 = 0 \\Rightarrow x = 3/2$; $3x + 4 = 0 \\Rightarrow x = -4/3$.\nSum: $\\frac{3}{2} + \\left(-\\frac{4}{3}\\right) = \\frac{9}{6} - \\frac{8}{6} = \\frac{1}{6}$.\n\nVerification (Vieta\'s): sum of roots $= -b/a = -(-1)/6 = 1/6$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "sign error" — wrong factor and wrong sum.\n* Choice C: "sign error" — right factor but flips the sum sign.\n* Choice D: "wrong factoring" — uses $(3x - 4)$ which would give $6x^2 + 17x - 12$, not the original.\n\n**Test Day Takeaway:** Vieta\'s formulas are FASTER than computing each root: sum $= -b/a$, product $= c/a$. Use them for "sum of roots" or "product of roots" questions.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'factor-division-vieta',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },

  // ── vertex-formula (5 questions) ──────────────────────────────────
  {
    id: 'bank-am-018',
    domain: 'advanced-math',
    skills: ['vertex-formula'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'What is the $x$-coordinate of the vertex of $y = x^2 - 10x + 21$?',
    correctAnswer: '5',
    explanation: '**SAT Pattern: Vertex x-coordinate Formula**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~10s):** $x_{\\text{vertex}} = -b/(2a) = -(-10)/2 = 5$.\n\n**The Full Solution:**\nFor $y = ax^2 + bx + c$, the $x$-coordinate of the vertex is $-\\frac{b}{2a}$. Here $a = 1$, $b = -10$:\n$x = -\\frac{-10}{2(1)} = \\frac{10}{2} = 5$.\n\nVerification: factor as $(x - 3)(x - 7) = 0$ gives roots $3$ and $7$. The vertex $x$-coordinate is the midpoint: $\\frac{3 + 7}{2} = 5$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Forgetting the negative sign: $-(-10) = 10$, not $-10$.\n* Dividing by $a$ instead of $2a$.\n* Using the constant $c = 21$ as the answer.\n\n**Test Day Takeaway:** Vertex $x$-coordinate $= -b/(2a)$ — the axis of symmetry. Equivalent: average of the two roots (when they exist).',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'vertex-coordinate',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-019',
    domain: 'advanced-math',
    skills: ['vertex-formula'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'What is the vertex of the parabola $y = x^2 + 6x + 5$?',
    choices: [
      { id: 'A', text: '$(-3, -4)$' },
      // distractor: wrong sign on x
      { id: 'B', text: '$(3, -4)$' },
      // distractor: wrong sign on y
      { id: 'C', text: '$(-3, 4)$' },
      // distractor: uses b and c directly without computing
      { id: 'D', text: '$(6, 5)$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Vertex Coordinates**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $x = -b/(2a) = -6/2 = -3$. $y = (-3)^2 + 6(-3) + 5 = 9 - 18 + 5 = -4$. Vertex: $(-3, -4)$.\n\n**The Full Solution:**\n$x$-coordinate: $-\\frac{b}{2a} = -\\frac{6}{2(1)} = -3$.\n$y$-coordinate: plug back in: $y = (-3)^2 + 6(-3) + 5 = 9 - 18 + 5 = -4$.\nVertex: $(-3, -4)$.\n\nVerification: complete the square: $y = (x + 3)^2 - 9 + 5 = (x + 3)^2 - 4$. Vertex form gives vertex $(-3, -4)$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "sign error" — wrong sign on the $x$-coordinate.\n* Choice C: "sign error" — wrong sign on the $y$-coordinate.\n* Choice D: "wrong base" — uses $b$ and $c$ as the vertex without computing.\n\n**Test Day Takeaway:** Vertex = $\\left(-\\frac{b}{2a},\\ f\\left(-\\frac{b}{2a}\\right)\\right)$. Compute $x$ first, then plug into the original equation for $y$. Don\'t just guess from coefficients.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'vertex-coordinate',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-020',
    domain: 'advanced-math',
    skills: ['vertex-formula'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A fireworks shell\'s height in feet is $h(t) = -16t^2 + 128t + 4$. At what time does the shell reach its maximum height?',
    choices: [
      // distractor: half of correct
      { id: 'A', text: '2 seconds' },
      { id: 'B', text: '4 seconds' },
      // distractor: divides 128 by 16 instead of 32
      { id: 'C', text: '8 seconds' },
      // distractor: uses 128/8 or similar wrong factor
      { id: 'D', text: '16 seconds' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Vertex Time for Projectile Motion**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $t = -b/(2a) = -128/(2 \\cdot -16) = 128/32 = 4$ seconds.\n\n**The Full Solution:**\nThe shell reaches max height at the vertex of the parabola, which has $t$-coordinate:\n$t = -\\frac{b}{2a} = -\\frac{128}{2(-16)} = -\\frac{128}{-32} = 4$ seconds.\n\nVerification: $h(4) = -16(16) + 128(4) + 4 = -256 + 512 + 4 = 260$ ft. $h(3) = -144 + 384 + 4 = 244 < 260$ \\checkmark and $h(5) = -400 + 640 + 4 = 244 < 260$ \\checkmark. So $t = 4$ is indeed the max.\n\n**Why the wrong answers are tempting:**\n* Choice A: "off-by-one" — half the correct value.\n* Choice C: "wrong base" — divides $128$ by $16$ instead of $32$.\n* Choice D: "wrong formula" — uses $128/8$ or similar.\n\n**Test Day Takeaway:** For projectile motion $h(t) = -16t^2 + v_0 t + h_0$, max height occurs at $t = v_0/32$. Memorize this shortcut — $-b/(2a) = v_0/32$ for the standard $-16t^2$ form.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'vertex-application',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-021',
    domain: 'advanced-math',
    skills: ['vertex-formula'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'A toy company models its monthly profit as $P(x) = -2x^2 + 40x - 150$, where $x$ is the number of toys produced in hundreds. What is the maximum profit in dollars?',
    correctAnswer: '50',
    explanation: '**SAT Pattern: Max Profit via Vertex**\n\n**The correct answer is $50$.**\n\n**The Fast Way (~20s):** Vertex $x = -40/(2 \\cdot -2) = 10$. $P(10) = -200 + 400 - 150 = 50$.\n\n**The Full Solution:**\nMax profit occurs at the vertex of the downward parabola.\n$x$-coordinate: $-\\frac{b}{2a} = -\\frac{40}{-4} = 10$.\nPlug back: $P(10) = -2(100) + 40(10) - 150 = -200 + 400 - 150 = 50$.\nMax profit is $\\$50$.\n\nVerification: complete the square: $P(x) = -2(x^2 - 20x) - 150 = -2(x - 10)^2 + 200 - 150 = -2(x - 10)^2 + 50$. Vertex form gives max $= 50$ at $x = 10$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting $10$ (the $x$-value, not the profit).\n* Forgetting the negative on $-150$ at the end.\n* Computing $P$ at the wrong $x$.\n\n**Test Day Takeaway:** Max/min of profit/revenue/cost functions: find the vertex $x = -b/(2a)$, plug back. The $y$-value at the vertex IS the max/min profit.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'vertex-application',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-022',
    domain: 'advanced-math',
    skills: ['vertex-formula'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'The parabola $y = 3x^2 + bx + 27$ has its vertex on the $x$-axis. Which could be a value of $b$?',
    choices: [
      { id: 'A', text: '$-18$' },
      // distractor: random value, not from discriminant
      { id: 'B', text: '$9$' },
      // distractor: uses c = -27 as b
      { id: 'C', text: '$-27$' },
      // distractor: random value
      { id: 'D', text: '$12$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Vertex Constraint via Discriminant**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Vertex on $x$-axis $\\Rightarrow$ discriminant $= 0$. $b^2 - 4(3)(27) = 0 \\Rightarrow b^2 = 324 \\Rightarrow b = \\pm 18$.\n\n**The Full Solution:**\nThe vertex lies on the $x$-axis $\\Leftrightarrow$ the parabola TOUCHES the $x$-axis at exactly one point $\\Leftrightarrow$ the quadratic has a double root $\\Leftrightarrow$ discriminant $= 0$.\n\nDiscriminant: $b^2 - 4ac = 0$.\n$b^2 - 4(3)(27) = 0$\n$b^2 - 324 = 0$\n$b^2 = 324 \\Rightarrow b = \\pm 18$.\n\nChoice A ($-18$) is one valid value.\n\nVerification: at $b = -18$: $y = 3x^2 - 18x + 27 = 3(x^2 - 6x + 9) = 3(x - 3)^2$. Vertex $(3, 0)$, on the $x$-axis \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong base" — random value, doesn\'t make discriminant zero.\n* Choice C: "wrong base" — uses constant $27$ as $b$.\n* Choice D: "wrong formula" — random value.\n\n**Test Day Takeaway:** Vertex on $x$-axis $\\Leftrightarrow$ double root $\\Leftrightarrow$ discriminant $= 0$. Solve $b^2 = 4ac$ for the parameter.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'vertex-constraint',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },

  // ── vertex-form (4 questions) ─────────────────────────────────────
  {
    id: 'bank-am-023',
    domain: 'advanced-math',
    skills: ['vertex-form'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'What is the vertex of $f(x) = (x - 3)^2 + 7$?',
    choices: [
      { id: 'A', text: '$(3, 7)$' },
      // distractor: misreads (x - 3) as h = -3
      { id: 'B', text: '$(-3, 7)$' },
      // distractor: flips sign of k
      { id: 'C', text: '$(3, -7)$' },
      // distractor: flips both signs
      { id: 'D', text: '$(-3, -7)$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Read Vertex Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Vertex form $a(x - h)^2 + k$ has vertex $(h, k)$. Here $h = 3$, $k = 7$: vertex $(3, 7)$.\n\n**The Full Solution:**\nVertex form: $f(x) = a(x - h)^2 + k$ with vertex at $(h, k)$.\nHere $(x - 3)^2 + 7$ corresponds to $h = 3$, $k = 7$. Vertex: $(3, 7)$.\n\nVerification: at $x = 3$, $f(3) = 0 + 7 = 7$ (the minimum since $a = 1 > 0$). Vertex $(3, 7)$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "sign error" — reads $(x - 3)$ as $h = -3$, flipping the sign.\n* Choice C: "sign error" — flips $k$ to $-7$.\n* Choice D: "applies the inverse operation" — flips both signs.\n\n**Test Day Takeaway:** Vertex form $a(x - h)^2 + k$: $h$ is OPPOSITE the sign inside the parentheses. $(x - 3)$ means $h = +3$; $(x + 3)$ means $h = -3$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'read-vertex-form',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-024',
    domain: 'advanced-math',
    skills: ['vertex-form'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'Which function has vertex $(-2, 5)$ and passes through the point $(0, 13)$?',
    choices: [
      { id: 'A', text: '$f(x) = 2(x + 2)^2 + 5$' },
      // distractor: wrong sign inside parentheses
      { id: 'B', text: '$f(x) = 2(x - 2)^2 + 5$' },
      // distractor: a = 1 gives f(0) = 9 ≠ 13
      { id: 'C', text: '$f(x) = (x + 2)^2 + 5$' },
      // distractor: a = 3 gives f(0) = 17 ≠ 13
      { id: 'D', text: '$f(x) = 3(x + 2)^2 + 5$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Construct Vertex Form from Conditions**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Vertex $(-2, 5)$: $f(x) = a(x + 2)^2 + 5$. Plug $(0, 13)$: $a(4) + 5 = 13 \\Rightarrow a = 2$.\n\n**The Full Solution:**\nFrom vertex $(-2, 5)$: start with $f(x) = a(x - (-2))^2 + 5 = a(x + 2)^2 + 5$.\nUse the second point $(0, 13)$ to find $a$:\n$f(0) = a(2)^2 + 5 = 4a + 5 = 13$\n$4a = 8 \\Rightarrow a = 2$.\nFinal: $f(x) = 2(x + 2)^2 + 5$.\n\nVerification: $f(0) = 2(4) + 5 = 13$ ✓; $f(-2) = 0 + 5 = 5$ ✓ (vertex y-coordinate) \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "sign error" — uses $(x - 2)$ instead of $(x + 2)$, putting vertex at $(2, 5)$.\n* Choice C: "stops one step early" — uses $a = 1$ (skips computing $a$); gives $f(0) = 9 \\neq 13$.\n* Choice D: "off-by-one" — uses $a = 3$; gives $f(0) = 17 \\neq 13$.\n\n**Test Day Takeaway:** Vertex form construction: vertex gives $h$ and $k$ directly; another point pins down $a$. Always verify with the second point.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'construct-vertex-form',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-025',
    domain: 'advanced-math',
    skills: ['vertex-form', 'converting-quadratic-forms'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'Which of the following is equivalent to $y = x^2 - 8x + 19$ written in vertex form?',
    choices: [
      { id: 'A', text: '$y = (x - 4)^2 + 3$' },
      // distractor: subtracts instead of adds the remainder
      { id: 'B', text: '$y = (x - 4)^2 - 3$' },
      // distractor: wrong sign on h
      { id: 'C', text: '$y = (x + 4)^2 + 3$' },
      // distractor: doesn\'t complete the square at all
      { id: 'D', text: '$y = (x - 8)^2 + 19$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Complete the Square (Vertex Form)**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Half of $-8$ is $-4$; square is $16$. $(x - 4)^2 = x^2 - 8x + 16$. Original has $+19$, so add $19 - 16 = 3$: $(x - 4)^2 + 3$.\n\n**The Full Solution:**\n$y = x^2 - 8x + 19$.\nComplete the square: take half of the $-8$ coefficient ($= -4$), square it ($= 16$). Add and subtract:\n$y = (x^2 - 8x + 16) + 19 - 16 = (x - 4)^2 + 3$.\n\nVerification: expand $(x - 4)^2 + 3 = x^2 - 8x + 16 + 3 = x^2 - 8x + 19$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "sign error" — subtracts the remainder instead of adding.\n* Choice C: "sign error" — uses $(x + 4)$ instead of $(x - 4)$.\n* Choice D: "wrong formula" — uses $b$ as $h$ ($8 \\to (x - 8)$) without completing.\n\n**Test Day Takeaway:** Complete the square: half of the linear coefficient, squared, added and balanced. The vertex $h$ is half of the linear coefficient (with sign flipped if needed).',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'complete-the-square',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-026',
    domain: 'advanced-math',
    skills: ['vertex-form'],
    difficulty: 'hard',
    type: 'fill-in',
    question: 'A cable hangs in the shape $y = 0.5(x - 6)^2 + 2$, where $y$ is the height in meters above the ground and $x$ is the horizontal distance in meters. What is the minimum height of the cable above the ground?',
    correctAnswer: '2',
    explanation: '**SAT Pattern: Read Minimum from Vertex Form**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~10s):** Vertex form $a(x - h)^2 + k$ with $a > 0$: minimum $y$-value is $k = 2$.\n\n**The Full Solution:**\nIn vertex form $y = 0.5(x - 6)^2 + 2$:\n* $a = 0.5 > 0$, so the parabola opens upward.\n* Vertex is $(6, 2)$.\n* Minimum $y$-value is $k = 2$ (at $x = 6$).\n\nVerification: at $x = 6$, $(x - 6)^2 = 0$, so $y = 0 + 2 = 2$. For any other $x$, $(x - 6)^2 > 0$ so $y > 2$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting $6$ (the $x$-coordinate of the vertex).\n* Reporting $0.5$ (the leading coefficient).\n* Reporting $0$ (mistaking $(x - 6)^2$ for the minimum).\n\n**Test Day Takeaway:** For vertex form $a(x - h)^2 + k$ with $a > 0$: min $y = k$. With $a < 0$: max $y = k$. The vertex $y$-value is the extreme value of the function.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'vertex-form-interpretation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },

  // ── discriminant-analysis (5 questions) ───────────────────────────
  {
    id: 'bank-am-027',
    domain: 'advanced-math',
    skills: ['discriminant-analysis'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'How many real solutions does $x^2 + 4x + 7 = 0$ have?',
    choices: [
      { id: 'A', text: '0' },
      // distractor: thinks discriminant = 0
      { id: 'B', text: '1' },
      // distractor: assumes quadratics always have 2 real roots
      { id: 'C', text: '2' },
      // distractor: confuses with identities (0 = 0)
      { id: 'D', text: 'Infinitely many' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Count Real Solutions via Discriminant**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Discriminant $= b^2 - 4ac = 16 - 28 = -12 < 0$. Negative discriminant means $0$ real solutions.\n\n**The Full Solution:**\nDiscriminant $\\Delta = b^2 - 4ac$ for $ax^2 + bx + c$:\n* $\\Delta > 0$: $2$ distinct real solutions\n* $\\Delta = 0$: $1$ repeated real solution\n* $\\Delta < 0$: $0$ real solutions (two complex conjugate roots)\n\nHere $a = 1$, $b = 4$, $c = 7$:\n$\\Delta = 16 - 4(1)(7) = 16 - 28 = -12 < 0$.\nSo there are $0$ real solutions.\n\nVerification: complete the square: $x^2 + 4x + 7 = (x + 2)^2 + 3 \\geq 3 > 0$ always. So $= 0$ has no solutions \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "off-by-one" — assumes $\\Delta = 0$.\n* Choice C: "wrong base" — assumes all quadratics have $2$ roots.\n* Choice D: "wrong formula" — confuses with identities.\n\n**Test Day Takeaway:** Discriminant determines the number of real solutions. Memorize: $\\Delta > 0$: $2$; $\\Delta = 0$: $1$; $\\Delta < 0$: $0$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'discriminant-count',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-028',
    domain: 'advanced-math',
    skills: ['discriminant-analysis'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'The discriminant of $2x^2 - 8x + 8 = 0$ is:',
    choices: [
      { id: 'A', text: '0' },
      // distractor: forgets to subtract 4ac
      { id: 'B', text: '64' },
      // distractor: sign error
      { id: 'C', text: '$-64$' },
      // distractor: adds 4ac instead of subtracting
      { id: 'D', text: '128' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Compute Discriminant**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $b^2 - 4ac = (-8)^2 - 4(2)(8) = 64 - 64 = 0$.\n\n**The Full Solution:**\n$\\Delta = b^2 - 4ac$ for $ax^2 + bx + c$:\nHere $a = 2$, $b = -8$, $c = 8$.\n$\\Delta = (-8)^2 - 4(2)(8) = 64 - 64 = 0$.\n\nVerification: $\\Delta = 0$ means one repeated root. Factor: $2x^2 - 8x + 8 = 2(x^2 - 4x + 4) = 2(x - 2)^2$. Root: $x = 2$ (double) \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "stops one step early" — gives $b^2$ without subtracting $4ac$.\n* Choice C: "sign error" — incorrect signs.\n* Choice D: "applies the inverse operation" — adds $4ac$ instead of subtracting ($64 + 64$).\n\n**Test Day Takeaway:** Discriminant formula: $b^2 - 4ac$. Sign of $b$ doesn\'t matter (gets squared). $\\Delta = 0$ means a perfect-square trinomial.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'discriminant-compute',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-029',
    domain: 'advanced-math',
    skills: ['discriminant-analysis'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'For what value of $c$ does $x^2 - 6x + c = 0$ have exactly one real solution?',
    choices: [
      // distractor: gives -b/2a = 3 (vertex x-coord, not c)
      { id: 'A', text: '3' },
      // distractor: gives b (or |b|) as c
      { id: 'B', text: '6' },
      { id: 'C', text: '9' },
      // distractor: arbitrary
      { id: 'D', text: '12' },
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Parameter for Discriminant = 0**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** One real solution $\\Rightarrow \\Delta = 0$. $b^2 - 4ac = 36 - 4c = 0 \\Rightarrow c = 9$.\n\n**The Full Solution:**\nFor exactly one real solution, discriminant $= 0$.\n$\\Delta = b^2 - 4ac = (-6)^2 - 4(1)(c) = 36 - 4c = 0$\n$4c = 36 \\Rightarrow c = 9$.\n\nVerification: $x^2 - 6x + 9 = (x - 3)^2 = 0$ has double root $x = 3$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — gives $-b/(2a) = 3$ (the vertex $x$-coord), not the constant.\n* Choice B: "wrong base" — confuses $|b|$ with $c$.\n* Choice D: "off-by-one" — random value.\n\n**Test Day Takeaway:** Quadratic with one repeated root $\\Leftrightarrow$ perfect-square trinomial $\\Leftrightarrow$ discriminant $= 0$. For $x^2 + bx + c$, $c$ must equal $(b/2)^2$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'discriminant-parameter',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-030',
    domain: 'advanced-math',
    skills: ['discriminant-analysis'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'The equation $3x^2 - mx + 12 = 0$ has no real solutions. Which of the following could be the value of $m$?',
    choices: [
      // distractor: boundary (gives Δ = 0, one root)
      { id: 'A', text: '12' },
      // distractor: outside the range
      { id: 'B', text: '13' },
      // distractor: boundary
      { id: 'C', text: '$-12$' },
      { id: 'D', text: '11' },
    ],
    correctAnswer: 'D',
    explanation: '**SAT Pattern: Discriminant Inequality**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** No real solutions $\\Rightarrow \\Delta < 0$. $m^2 - 4(3)(12) < 0 \\Rightarrow m^2 < 144 \\Rightarrow |m| < 12$. So $-12 < m < 12$. Only $m = 11$ qualifies.\n\n**The Full Solution:**\nNo real solutions $\\Leftrightarrow$ discriminant $< 0$.\n$\\Delta = (-m)^2 - 4(3)(12) = m^2 - 144 < 0$\n$m^2 < 144$\n$|m| < 12 \\Rightarrow -12 < m < 12$.\n\nCheck each choice: $12$ (boundary, $\\Delta = 0$, not $< 0$), $13$ (outside), $-12$ (boundary), $11$ (inside ✓).\n\nVerification: at $m = 11$: $\\Delta = 121 - 144 = -23 < 0$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "off-by-one" — boundary $\\Delta = 0$ gives ONE real root, not zero.\n* Choice B: "wrong direction" — outside the range.\n* Choice C: "off-by-one" — boundary at the other end.\n\n**Test Day Takeaway:** Strict inequality $< 0$ means STRICTLY inside the range. Boundary values $\\Delta = 0$ give one root, not zero. Always check whether equality is included.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'discriminant-inequality',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-031',
    domain: 'advanced-math',
    skills: ['discriminant-analysis'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'The system $y = x^2 + 2$ and $y = 4x + k$ has exactly one solution. What is the value of $k$?',
    choices: [
      { id: 'A', text: '$-2$' },
      // distractor: sign error
      { id: 'B', text: '$2$' },
      // distractor: arbitrary
      { id: 'C', text: '$-4$' },
      // distractor: arbitrary
      { id: 'D', text: '$4$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Tangent Line to Parabola (Discriminant Method)**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Substitute: $x^2 + 2 = 4x + k \\Rightarrow x^2 - 4x + (2 - k) = 0$. One solution $\\Rightarrow \\Delta = 0$. $16 - 4(2 - k) = 0 \\Rightarrow 16 - 8 + 4k = 0 \\Rightarrow k = -2$.\n\n**The Full Solution:**\nSet the two expressions equal: $x^2 + 2 = 4x + k$\nMove all terms: $x^2 - 4x + (2 - k) = 0$\nOne solution $\\Leftrightarrow$ discriminant $= 0$:\n$\\Delta = (-4)^2 - 4(1)(2 - k) = 16 - 8 + 4k = 8 + 4k = 0$\n$k = -2$.\n\nVerification: at $k = -2$: $x^2 - 4x + 4 = 0 \\Rightarrow (x - 2)^2 = 0$, so $x = 2$ (single solution). Line $y = 4x - 2$ touches parabola at $(2, 6)$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "sign error" — opposite sign.\n* Choice C: "wrong base" — random.\n* Choice D: "wrong base" — random.\n\n**Test Day Takeaway:** For system with parabola and line to have one solution: line is TANGENT to parabola $\\Leftrightarrow$ substitution gives quadratic with $\\Delta = 0$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'system-tangency',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },

  // ── converting-quadratic-forms (4 questions) ──────────────────────
  {
    id: 'bank-am-032',
    domain: 'advanced-math',
    skills: ['converting-quadratic-forms'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'Which is the expanded (standard) form of $y = (x + 5)^2 - 4$?',
    choices: [
      { id: 'A', text: '$y = x^2 + 10x + 21$' },
      // distractor: doesn\'t expand the square (uses 5x instead of 10x + 25)
      { id: 'B', text: '$y = x^2 + 5x - 4$' },
      // distractor: uses 25x as middle term (squares incorrectly)
      { id: 'C', text: '$y = x^2 + 25x - 4$' },
      // distractor: adds 4 instead of subtracting (25 + 4 = 29)
      { id: 'D', text: '$y = x^2 + 10x + 29$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Vertex to Standard Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $(x + 5)^2 = x^2 + 10x + 25$. Subtract $4$: $x^2 + 10x + 21$.\n\n**The Full Solution:**\nExpand the square using $(a + b)^2 = a^2 + 2ab + b^2$:\n$(x + 5)^2 = x^2 + 2(5)x + 5^2 = x^2 + 10x + 25$.\nThen subtract $4$: $y = x^2 + 10x + 25 - 4 = x^2 + 10x + 21$.\n\nVerification: at $x = 0$, original $(0 + 5)^2 - 4 = 21$. Standard form: $0 + 0 + 21 = 21$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "stops one step early" — uses $5x$ instead of $10x + 25$ (forgets to fully expand).\n* Choice C: "wrong formula" — uses $25x$ as middle term (squares the wrong thing).\n* Choice D: "sign error" — adds $4$ instead of subtracting.\n\n**Test Day Takeaway:** $(x + a)^2 = x^2 + 2ax + a^2$ — middle term is $2a$, not $a$. Always expand completely before combining with the constant.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'vertex-to-standard',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-033',
    domain: 'advanced-math',
    skills: ['converting-quadratic-forms'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'The function $f(x) = 2x^2 + 12x + 14$ can be written as $f(x) = 2(x + h)^2 + k$. What is $h + k$?',
    choices: [
      // distractor: sign error
      { id: 'A', text: '$1$' },
      { id: 'B', text: '$-1$' },
      // distractor: arbitrary
      { id: 'C', text: '$5$' },
      // distractor: sign error variant
      { id: 'D', text: '$-5$' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Complete the Square with Leading Coefficient**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Factor $2$: $2(x^2 + 6x) + 14$. Complete: half of $6$ is $3$, $3^2 = 9$. $2(x^2 + 6x + 9) + 14 - 2(9) = 2(x + 3)^2 - 4$. So $h = 3$, $k = -4$, $h + k = -1$.\n\n**The Full Solution:**\nFactor out $2$ from the first two terms:\n$f(x) = 2(x^2 + 6x) + 14$.\nComplete the square inside: half of $6$ is $3$, $3^2 = 9$.\n$= 2(x^2 + 6x + 9) + 14 - 2(9)$\n$= 2(x + 3)^2 + 14 - 18$\n$= 2(x + 3)^2 - 4$.\nSo $h = 3$, $k = -4$, $h + k = -1$.\n\nVerification: expand $2(x + 3)^2 - 4 = 2(x^2 + 6x + 9) - 4 = 2x^2 + 12x + 18 - 4 = 2x^2 + 12x + 14$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "sign error" — opposite sign.\n* Choice C: "wrong base" — computes $h - k$ or similar.\n* Choice D: "sign error" — negates the wrong quantity.\n\n**Test Day Takeaway:** When completing the square with a leading coefficient $a \\neq 1$, factor $a$ out FIRST, complete inside the parentheses, then multiply the offset by $a$ when balancing.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'complete-the-square',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  { id: 'bank-am-034', domain: 'advanced-math', skills: ['converting-quadratic-forms'], difficulty: 'hard', type: 'multiple-choice',
    question: 'In the $xy$-plane, the graph of $y = f(x)$ is a parabola with vertex $(2, 9)$. The parabola intersects the $x$-axis at $x = -1$ and $x = 5$. What is the value of $f(-3)$?',
    choices: [{ id: 'A', text: '$-25$' }, { id: 'B', text: '$-16$' }, { id: 'C', text: '$0$' }, { id: 'D', text: '$9$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Vertex Form from Vertex + Intercepts**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Vertex form $f(x) = a(x - 2)^2 + 9$. Plug in the intercept $x = -1$: $a(9) + 9 = 0 \\Rightarrow a = -1$. So $f(x) = -(x - 2)^2 + 9$. Then $f(-3) = -(-5)^2 + 9 = -25 + 9 = -16$.\n\n**The Full Solution:**\nStep 1: Write $f$ in vertex form using the vertex $(2, 9)$.\n$\\quad f(x) = a(x - 2)^2 + 9$.\nStep 2: Use one $x$-intercept to solve for $a$. At $x = -1$, $f(-1) = 0$:\n$\\quad a(-1 - 2)^2 + 9 = 0$\n$\\quad 9a + 9 = 0$\n$\\quad a = -1$.\nStep 3: Substitute $a$: $f(x) = -(x - 2)^2 + 9$.\nStep 4: Evaluate at $x = -3$:\n$\\quad f(-3) = -(-3 - 2)^2 + 9 = -(-5)^2 + 9 = -25 + 9 = -16$.\n\nVerification: the other intercept should also satisfy $f(5) = -(3)^2 + 9 = 0$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-25$): correctly computes $-(-3 - 2)^2 = -25$ but forgets to add $k = 9$. The vertex form has a final additive term that is easy to drop.\n* Choice B ($-16$): correct.\n* Choice C ($0$): mistakes $-3$ for an $x$-intercept (perhaps confusing the symmetry: $-3$ is the reflection of $7$ across $x = 2$, not of an intercept). $f$ equals zero only at $x = -1$ and $x = 5$.\n* Choice D ($9$): reports the MAXIMUM value of $f$ (the $y$-coordinate of the vertex) rather than the value at the specific input $x = -3$.\n\n**Test Day Takeaway:** When given the vertex and one other point on a parabola, vertex form $f(x) = a(x - h)^2 + k$ lets you read $(h, k)$ directly and solve for $a$ in one step. Then evaluate carefully: the $-(x - 2)^2$ piece is negative for ALL $x \\ne 2$, while the $+ 9$ piece is constant — track both.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'factored-to-standard', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  {
    id: 'bank-am-035',
    domain: 'advanced-math',
    skills: ['converting-quadratic-forms'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'When $y = x^2 - 14x + 53$ is rewritten in vertex form $y = (x - h)^2 + k$, what is the value of $k$?',
    correctAnswer: '4',
    explanation: '**SAT Pattern: Standard to Vertex (k value)**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~15s):** Half of $-14$ is $-7$; $(-7)^2 = 49$. $53 - 49 = 4$. So $k = 4$.\n\n**The Full Solution:**\nComplete the square: half of $-14$ is $-7$, square is $49$.\n$y = (x^2 - 14x + 49) + 53 - 49 = (x - 7)^2 + 4$.\nSo $h = 7$, $k = 4$.\n\nVerification: expand $(x - 7)^2 + 4 = x^2 - 14x + 49 + 4 = x^2 - 14x + 53$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting $7$ (the $h$ value, not $k$).\n* Reporting $-4$ (sign error after subtraction).\n* Reporting $53$ (the original constant, not adjusted).\n\n**Test Day Takeaway:** For $y = x^2 + bx + c$, vertex form: $h = -b/2$, $k = c - (b/2)^2$. So $k = c - h^2$ when $a = 1$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'standard-to-vertex',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },

  // ── exponent-laws (5 questions) ───────────────────────────────────
  {
    id: 'bank-am-036',
    domain: 'advanced-math',
    skills: ['exponent-laws'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'Which expression is equivalent to $\\frac{x^8}{x^3}$?',
    choices: [
      // distractor: adds instead of subtracting
      { id: 'A', text: '$x^{11}$' },
      { id: 'B', text: '$x^5$' },
      // distractor: multiplies exponents
      { id: 'C', text: '$x^{24}$' },
      // distractor: divides exponents
      { id: 'D', text: '$x^{8/3}$' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Quotient Rule of Exponents**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $\\frac{x^8}{x^3} = x^{8-3} = x^5$.\n\n**The Full Solution:**\nQuotient rule: $\\frac{x^m}{x^n} = x^{m-n}$ for $x \\neq 0$.\nHere: $\\frac{x^8}{x^3} = x^{8-3} = x^5$.\n\nVerification: $x^5 \\cdot x^3 = x^{5+3} = x^8$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "applies the inverse operation" — ADDS exponents ($8 + 3 = 11$).\n* Choice C: "wrong formula" — MULTIPLIES exponents ($8 \\cdot 3 = 24$, which would be $(x^8)^3$).\n* Choice D: "wrong formula" — DIVIDES exponents ($8/3$).\n\n**Test Day Takeaway:** Exponent rules: multiplication ADDS exponents, division SUBTRACTS, power of power MULTIPLIES. Don\'t mix them up.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'exponent-simplify',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-037',
    domain: 'advanced-math',
    skills: ['exponent-laws'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'Which expression is equivalent to $(3a^2b)^3$?',
    choices: [
      // distractor: 3² = 9 instead of 3³
      { id: 'A', text: '$9a^6b^3$' },
      { id: 'B', text: '$27a^6b^3$' },
      // distractor: 2 + 3 instead of 2 × 3
      { id: 'C', text: '$27a^5b^3$' },
      // distractor: doesn\'t raise 3 to the power
      { id: 'D', text: '$3a^6b^3$' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Power of a Product**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $(3a^2b)^3 = 3^3 \\cdot a^{2 \\cdot 3} \\cdot b^3 = 27a^6b^3$.\n\n**The Full Solution:**\nPower of a product rule: $(xyz)^n = x^n y^n z^n$. And power of a power: $(x^m)^n = x^{mn}$.\n$(3a^2b)^3 = 3^3 \\cdot (a^2)^3 \\cdot b^3 = 27 \\cdot a^6 \\cdot b^3 = 27a^6b^3$.\n\nVerification: at $a = 1$, $b = 1$: $(3 \\cdot 1 \\cdot 1)^3 = 27$. Standard: $27 \\cdot 1 \\cdot 1 = 27$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "off-by-one" — uses $3^2 = 9$ instead of $3^3 = 27$.\n* Choice C: "wrong formula" — adds exponents ($2 + 3 = 5$) instead of multiplying.\n* Choice D: "stops one step early" — doesn\'t raise $3$ to the power at all.\n\n**Test Day Takeaway:** EVERY factor inside parentheses gets raised to the outside exponent, including numerical coefficients. $(3 \\cdot \\ldots)^3$ includes $3^3 = 27$, not just $3$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'power-of-product',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-038',
    domain: 'advanced-math',
    skills: ['exponent-laws'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'What value of $n$ satisfies the equation $\\frac{(2^n)^4 \\cdot 2^3}{2^7} = 2^{12}$?',
    choices: [
      // distractor: solves 4n = 12 without other exponent terms
      { id: 'A', text: '3' },
      { id: 'B', text: '4' },
      // distractor: arithmetic slip
      { id: 'C', text: '5' },
      // distractor: arithmetic slip
      { id: 'D', text: '6' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Exponent Equation (Combine then Solve)**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Combine: $\\frac{2^{4n} \\cdot 2^3}{2^7} = 2^{4n + 3 - 7} = 2^{4n - 4} = 2^{12}$. So $4n - 4 = 12 \\Rightarrow n = 4$.\n\n**The Full Solution:**\nCombine all the exponents on the same base. $(2^n)^4 = 2^{4n}$. Multiplication adds; division subtracts:\n$\\frac{2^{4n} \\cdot 2^3}{2^7} = 2^{4n + 3 - 7} = 2^{4n - 4}$.\nSet equal to $2^{12}$: $4n - 4 = 12 \\Rightarrow 4n = 16 \\Rightarrow n = 4$.\n\nVerification: at $n = 4$: $(2^4)^4 \\cdot 2^3 / 2^7 = 2^{16} \\cdot 2^3 / 2^7 = 2^{12}$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "stops one step early" — solves $4n = 12$ without combining the other exponent terms.\n* Choice C: "off-by-one" — arithmetic slip.\n* Choice D: "off-by-one" — arithmetic slip.\n\n**Test Day Takeaway:** With same base, the exponents form a linear equation. Combine ALL terms before solving — don\'t solve fragments.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'exponent-equation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  { id: 'bank-am-039', domain: 'advanced-math', skills: ['exponent-laws'], difficulty: 'medium', type: 'fill-in',
    question: 'For all positive values of $x$, the equation $\\dfrac{x^{2a + 3}}{x^a} = x^{12}$ holds. What is the value of $a$?',
    correctAnswer: '9',
    explanation: "**SAT Pattern: Exponent Laws — Quotient Rule + Solve**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~10s):** Quotient rule: $\\dfrac{x^{2a + 3}}{x^a} = x^{(2a + 3) - a} = x^{a + 3}$. Set $a + 3 = 12 \\Rightarrow a = 9$.\n\n**The Full Solution:**\nStep 1: Apply the quotient rule for exponents: $\\dfrac{x^m}{x^n} = x^{m - n}$.\n$\\quad \\dfrac{x^{2a + 3}}{x^a} = x^{(2a + 3) - a} = x^{a + 3}$.\nStep 2: Equate the exponents (valid because the equation holds for ALL $x > 0$, not just $x = 0$ or $x = 1$):\n$\\quad a + 3 = 12 \\Rightarrow a = 9$.\n\nVerification: $\\dfrac{x^{2(9) + 3}}{x^9} = \\dfrac{x^{21}}{x^9} = x^{12}$ \\checkmark.\n\n**Common Mistakes:** Reporting $5$ (gets the right equation $a + 3 = 12$ but solves $a + 3 = 8$ by mis-reading the exponent on the right); reporting $12$ (substitutes the target exponent for $a$ directly); reporting $6$ (mis-applies the quotient rule as $2a + 3 - a = 12$ but solves arithmetic-wrong).\n\n**Test Day Takeaway:** Quotient rule: $\\dfrac{x^m}{x^n} = x^{m - n}$ — SUBTRACT exponents when dividing same-base powers. The 'for all positive $x$' clause is what lets you equate exponents on both sides.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponent-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-am-040', domain: 'advanced-math', skills: ['exponent-laws'], difficulty: 'hard', type: 'multiple-choice',
    question: 'For all positive values of $x$ and $y$, the equation $\\dfrac{12 x^a y^b}{4 x^{-1} y^3} = 3 x^6 y^{-5}$ is true, where $a$ and $b$ are constants. What is the value of $a + b$?',
    choices: [{ id: 'A', text: '$-7$' }, { id: 'B', text: '$-2$' }, { id: 'C', text: '$3$' }, { id: 'D', text: '$5$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Match Coefficients After Exponent Simplification**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Simplify LHS: $\\dfrac{12 x^a y^b}{4 x^{-1} y^3} = 3 x^{a + 1} y^{b - 3}$. Match exponents with $3 x^6 y^{-5}$: $a + 1 = 6 \\Rightarrow a = 5$; $b - 3 = -5 \\Rightarrow b = -2$. So $a + b = 5 + (-2) = 3$.\n\n**The Full Solution:**\nStep 1: Apply the quotient rule for exponents on each variable: $\\dfrac{x^a}{x^{-1}} = x^{a - (-1)} = x^{a + 1}$ and $\\dfrac{y^b}{y^3} = y^{b - 3}$. The coefficient is $12/4 = 3$.\nLHS simplified: $3 x^{a + 1} y^{b - 3}$.\nStep 2: Match each piece to the RHS $3 x^6 y^{-5}$:\n$\\quad a + 1 = 6 \\Rightarrow a = 5$.\n$\\quad b - 3 = -5 \\Rightarrow b = -2$.\nStep 3: Compute the sum: $a + b = 5 + (-2) = 3$.\n\nVerification: with $a = 5$, $b = -2$: $\\dfrac{12 x^5 y^{-2}}{4 x^{-1} y^3} = 3 x^{5 - (-1)} y^{-2 - 3} = 3 x^6 y^{-5}$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-7$): sign-flips both: $a + 1 = -6 \\Rightarrow a = -7$ (uses $-6$ instead of $+6$ for the $x$-exponent). Combined with correct $b$, gets $-7 + (-2)$, but reads just $-7$ in confusion.\n* Choice B ($-2$): reports $b$ alone (stops one step early after solving the $y$-exponent equation).\n* Choice C ($3$): correct.\n* Choice D ($5$): reports $a$ alone (stops one step early after solving the $x$-exponent equation).\n\n**Test Day Takeaway:** When the equation is given as the SIMPLIFIED form, work backward by reversing the exponent rules. The quotient rule $\\dfrac{x^a}{x^b} = x^{a - b}$ gives one equation per variable; pair with the target exponent to solve for each unknown. Always re-read what the question wants — $a$, $b$, $a + b$, or some other combination.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'simplify-exponent-quotient', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  {
    id: 'bank-am-041',
    domain: 'advanced-math',
    skills: ['zero-negative-exponents'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'What is the value of $5^0 + 5^{-1}$?',
    choices: [
      { id: 'A', text: '$\\frac{6}{5}$' },
      // distractor: assumes 5^0 = 0
      { id: 'B', text: '$0$' },
      // distractor: skips the 5^0 term
      { id: 'C', text: '$\\frac{1}{5}$' },
      // distractor: skips the 5^-1 term
      { id: 'D', text: '$1$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Zero and Negative Exponent Evaluation**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $5^0 = 1$, $5^{-1} = 1/5$. Sum: $1 + 1/5 = 6/5$.\n\n**The Full Solution:**\nKey rules:\n* $x^0 = 1$ for $x \\neq 0$.\n* $x^{-n} = \\frac{1}{x^n}$.\nSo $5^0 = 1$ and $5^{-1} = \\frac{1}{5}$.\nSum: $1 + \\frac{1}{5} = \\frac{5}{5} + \\frac{1}{5} = \\frac{6}{5}$.\n\nVerification: $\\frac{6}{5} = 1.2$, which is just above $1$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong base" — assumes $5^0 = 0$ (a classic mistake).\n* Choice C: "stops one step early" — skips the $5^0$ term, gives only $1/5$.\n* Choice D: "stops one step early" — skips the $5^{-1}$ term.\n\n**Test Day Takeaway:** $x^0 = 1$ ALWAYS (for $x \\neq 0$). $x^{-1} = 1/x$. Both rules are tested constantly.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'zero-neg-exponent-eval',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-042',
    domain: 'advanced-math',
    skills: ['zero-negative-exponents'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'Which expression equals $\\frac{1}{x^4}$ for $x \\neq 0$?',
    choices: [
      // distractor: doesn\'t invert
      { id: 'A', text: '$x^4$' },
      { id: 'B', text: '$x^{-4}$' },
      // distractor: confuses reciprocal with negation
      { id: 'C', text: '$-x^4$' },
      // distractor: confuses negative with fractional exponent
      { id: 'D', text: '$x^{1/4}$' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Reciprocal as Negative Exponent**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $\\frac{1}{x^n} = x^{-n}$. So $\\frac{1}{x^4} = x^{-4}$.\n\n**The Full Solution:**\nDefinition: $x^{-n} = \\frac{1}{x^n}$ for $x \\neq 0$. Equivalently, $\\frac{1}{x^n} = x^{-n}$.\nApplied: $\\frac{1}{x^4} = x^{-4}$.\n\nVerification: $x^{-4} \\cdot x^4 = x^0 = 1$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "applies the inverse operation" — doesn\'t invert at all.\n* Choice C: "wrong formula" — confuses reciprocal with negation.\n* Choice D: "wrong formula" — $x^{1/4} = \\sqrt[4]{x}$ (fourth root), not reciprocal.\n\n**Test Day Takeaway:** Negative exponent = reciprocal. Fractional exponent = root. They\'re different operations.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'negative-exponent-rewrite',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-043',
    domain: 'advanced-math',
    skills: ['zero-negative-exponents'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'Simplify $\\frac{(2x)^{-3}}{x^{-1}}$ for $x \\neq 0$.',
    choices: [
      { id: 'A', text: '$\\frac{1}{8x^2}$' },
      // distractor: wrong x exponent (-3 - 1 = -4)
      { id: 'B', text: '$\\frac{1}{8x^4}$' },
      // distractor: x exponent error
      { id: 'C', text: '$\\frac{x}{8}$' },
      // distractor: forgets to cube the 2
      { id: 'D', text: '$\\frac{1}{2x^2}$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Negative Exponent Simplification**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** $(2x)^{-3} = \\frac{1}{8x^3}$. Divide by $x^{-1}$ (= multiply by $x$): $\\frac{1}{8x^3} \\cdot x = \\frac{1}{8x^2}$.\n\n**The Full Solution:**\nExpand $(2x)^{-3}$:\n$(2x)^{-3} = \\frac{1}{(2x)^3} = \\frac{1}{8x^3}$.\n\nDividing by $x^{-1}$ is the same as multiplying by $x$:\n$\\frac{1/(8x^3)}{x^{-1}} = \\frac{1}{8x^3} \\cdot x = \\frac{x}{8x^3} = \\frac{1}{8x^2}$.\n\nVerification: combine exponents: $\\frac{(2x)^{-3}}{x^{-1}} = \\frac{2^{-3} x^{-3}}{x^{-1}} = \\frac{1}{8} \\cdot x^{-3 - (-1)} = \\frac{1}{8} x^{-2} = \\frac{1}{8x^2}$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "sign error" — combines $x$ exponents as $-3 - 1 = -4$ instead of $-3 - (-1) = -2$.\n* Choice C: "wrong base" — gets $x^1$ instead of $x^{-2}$.\n* Choice D: "stops one step early" — forgets to cube the $2$ ($(2x)^{-3}$ involves $2^{-3} = 1/8$, not $1/2$).\n\n**Test Day Takeaway:** $(ab)^n = a^n b^n$ — the exponent applies to BOTH factors, including the coefficient. Dividing by a negative exponent flips sign.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'negative-exponent-simplify',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-044',
    domain: 'advanced-math',
    skills: ['zero-negative-exponents'],
    difficulty: 'hard',
    type: 'fill-in',
    question: 'What value of $n$ satisfies the equation $4^{-n} = \\frac{1}{256}$?',
    correctAnswer: '4',
    explanation: '**SAT Pattern: Negative Exponent Equation**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~15s):** $\\frac{1}{256} = \\frac{1}{4^4} = 4^{-4}$. So $4^{-n} = 4^{-4} \\Rightarrow n = 4$.\n\n**The Full Solution:**\nRewrite $\\frac{1}{256}$ as a power of $4$. Note $256 = 4^4$:\n$\\frac{1}{256} = \\frac{1}{4^4} = 4^{-4}$.\nEquate exponents: $4^{-n} = 4^{-4}$, so $-n = -4 \\Rightarrow n = 4$.\n\nVerification: $4^{-4} = 1/4^4 = 1/256$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting $-4$ (sign error).\n* Computing $256/4 = 64$ instead.\n* Confusing $\\frac{1}{256}$ with $\\frac{1}{4^{256}}$.\n\n**Test Day Takeaway:** $\\frac{1}{a^n} = a^{-n}$. To solve exponent equations with the same base, equate the exponents.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'negative-exponent-equation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },

  // ── comparing-exponentials (3 questions) ──────────────────────────
  {
    id: 'bank-am-045',
    domain: 'advanced-math',
    skills: ['comparing-exponentials'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'Town A has a population of 8,000 growing at 3% per year. Town B has a population of 10,000 growing at 1% per year. Which comparison of their growth models is correct?',
    choices: [
      { id: 'A', text: 'Town A: $8000(1.03)^t$; Town B: $10000(1.01)^t$; Town A will eventually surpass Town B.' },
      // distractor: uses growth rates as the base (shrinks)
      { id: 'B', text: 'Town A: $8000(0.03)^t$; Town B: $10000(0.01)^t$; both shrink over time.' },
      // distractor: uses linear growth instead of exponential
      { id: 'C', text: 'Town A: $8000 + 240t$; Town B: $10000 + 100t$; Town A grows faster linearly.' },
      // distractor: correct models but wrong conclusion
      { id: 'D', text: 'Town A: $8000(1.03)^t$; Town B: $10000(1.01)^t$; Town B always has a larger population.' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Compare Exponential Growth Models**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Growth rate $r$ gives multiplier $(1 + r)$ per year. Higher rate eventually dominates regardless of starting value.\n\n**The Full Solution:**\nFor exponential growth at rate $r$ per year, population is $P_0(1 + r)^t$:\n* Town A: $8000(1.03)^t$\n* Town B: $10000(1.01)^t$\n\nTown A starts lower but grows faster ($3\\% > 1\\%$). For long enough time, A overtakes B because exponential growth dominates linear starting differences.\n\nFind crossover: $8000(1.03)^t = 10000(1.01)^t$. Take ratio: $(1.03/1.01)^t = 10000/8000 = 1.25$. $\\log(1.25) / \\log(1.03/1.01) \\approx 11.4$ years. So A passes B around year $12$.\n\nVerification: at $t = 20$: A $\\approx 8000 \\cdot 1.81 = 14460$; B $\\approx 10000 \\cdot 1.22 = 12200$. A wins \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong base" — uses growth rate $r$ as the multiplier instead of $1 + r$.\n* Choice C: "wrong formula" — models linear growth instead of exponential.\n* Choice D: "stops one step early" — correct models but ignores that A\'s higher rate eventually overtakes B.\n\n**Test Day Takeaway:** Exponential growth model: $P_0(1 + r)^t$. Higher growth rate ALWAYS eventually overtakes lower, regardless of initial values.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'compare-growth-models',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-046',
    domain: 'advanced-math',
    skills: ['comparing-exponentials'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'Account X earns interest according to $V_X = 500(1.04)^t$, and Account Y earns interest according to $V_Y = 500(1.06)^t$. After 5 years, approximately how much more is Account Y worth than Account X?',
    choices: [
      // distractor: ignores compounding, uses simple difference
      { id: 'A', text: '$\\$10$' },
      { id: 'B', text: '$\\$60$' },
      // distractor: underestimates by rounding down too aggressively
      { id: 'C', text: '$\\$59$' },
      // distractor: overestimates the gap
      { id: 'D', text: '$\\$100$' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Compare Compound Interest**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** $V_X(5) = 500(1.04)^5 \\approx 608.33$. $V_Y(5) = 500(1.06)^5 \\approx 669.11$. Difference $\\approx 60.78 \\to \\$60$.\n\n**The Full Solution:**\nCompute each account value at $t = 5$:\n* $V_X(5) = 500(1.04)^5 \\approx 500 \\times 1.2167 = 608.33$\n* $V_Y(5) = 500(1.06)^5 \\approx 500 \\times 1.3382 = 669.11$\nDifference: $669.11 - 608.33 \\approx 60.78$, which rounds to $\\$60$.\n\nVerification: $1.04^5 = 1.04 \\cdot 1.04^4 \\approx 1.04 \\cdot 1.1699 = 1.2167$ ✓; $1.06^5 \\approx 1.3382$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong formula" — uses simple interest difference: $(0.06 - 0.04) \\cdot 500 = \\$10$.\n* Choice C: "off-by-one" — underestimates by rounding down too aggressively.\n* Choice D: "wrong base" — overestimates the gap.\n\n**Test Day Takeaway:** Compound interest grows like $(1 + r)^t$. The DIFFERENCE between two accounts at different rates grows over time. Round answers to the nearest provided choice.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'exponential-comparison',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-047',
    domain: 'advanced-math',
    skills: ['comparing-exponentials'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'Machine A depreciates according to $V_A = 20000(0.85)^t$ and Machine B according to $V_B = 15000(0.90)^t$, where $t$ is in years. Which statement is true?',
    choices: [
      // distractor: starts higher but eventually loses lead
      { id: 'A', text: 'Machine A always has a higher value than Machine B.' },
      { id: 'B', text: 'Machine A loses a greater fraction of its value each year than Machine B.' },
      // distractor: confuses initial value with depreciation rate
      { id: 'C', text: 'Machine B depreciates faster because its initial value is lower.' },
      // distractor: ignores compounding (dollar amounts differ)
      { id: 'D', text: 'Both machines lose the same dollar amount per year.' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Compare Depreciation Models**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Machine A multiplier $0.85$ means loses $15\\%$ per year. Machine B multiplier $0.90$ means loses $10\\%$ per year. A loses more fraction.\n\n**The Full Solution:**\nThe multiplier $(1 - r)$ gives the retention rate; $r$ is the depreciation fraction per year.\n* Machine A: retains $85\\%$, loses $15\\%$.\n* Machine B: retains $90\\%$, loses $10\\%$.\n\nA loses a GREATER fraction of its value annually ($15\\% > 10\\%$).\n\nVerification: at $t = 10$: $V_A \\approx 20000 \\cdot 0.197 \\approx 3940$; $V_B \\approx 15000 \\cdot 0.349 \\approx 5230$. B eventually surpasses A despite starting lower \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "stops one step early" — A starts higher but B\'s slower depreciation eventually wins.\n* Choice C: "wrong reasoning" — initial value has no bearing on depreciation rate.\n* Choice D: "wrong formula" — depreciation is multiplicative (percent), not additive (dollars).\n\n**Test Day Takeaway:** Compound depreciation: multiplier $= 1 - r$. Lower multiplier $\\Rightarrow$ faster decline. Initial value affects WHERE the decline starts but not the rate.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'depreciation-comparison',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },

  // ── exponential-growth-decay (5 questions) ────────────────────────
  {
    id: 'bank-am-048',
    domain: 'advanced-math',
    skills: ['exponential-growth-decay'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A colony of bacteria doubles every 4 hours. If there are initially 300 bacteria, which function models the population after $t$ hours?',
    choices: [
      { id: 'A', text: '$P(t) = 300(2)^{t/4}$' },
      // distractor: t × 4 in exponent (grows way too fast)
      { id: 'B', text: '$P(t) = 300(2)^{4t}$' },
      // distractor: linear instead of exponential
      { id: 'C', text: '$P(t) = 300 + 2t$' },
      // distractor: wrong base (4 instead of 2)
      { id: 'D', text: '$P(t) = 300(4)^{t/2}$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Exponential Model from Doubling Time**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Doubling time $T = 4$ hours: $P(t) = P_0 \\cdot 2^{t/T} = 300 \\cdot 2^{t/4}$.\n\n**The Full Solution:**\nExponential growth with doubling time $T$: $P(t) = P_0 \\cdot 2^{t/T}$.\nHere $P_0 = 300$ and $T = 4$ hours:\n$P(t) = 300(2)^{t/4}$.\n\nVerification: at $t = 0$, $P = 300 \\cdot 2^0 = 300$ ✓. At $t = 4$, $P = 300 \\cdot 2 = 600$ (doubled) ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "applies the inverse operation" — uses $4t$ in exponent instead of $t/4$, growing too fast.\n* Choice C: "wrong formula" — linear instead of exponential.\n* Choice D: "wrong base" — uses base $4$ instead of $2$.\n\n**Test Day Takeaway:** Doubling time formula: $P_0 \\cdot 2^{t/T}$. The exponent is "time divided by doubling time" — fractional through one period, $1$ at exactly one period.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'exponential-model-setup',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-049',
    domain: 'advanced-math',
    skills: ['exponential-growth-decay'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A car purchased for $\\$22{,}000$ depreciates at 12% per year. Which expression represents its value after $t$ years?',
    choices: [
      // distractor: uses rate as base (would shrink to near zero fast)
      { id: 'A', text: '$22000(0.12)^t$' },
      // distractor: applies growth multiplier (would grow, not decay)
      { id: 'B', text: '$22000(1.12)^t$' },
      { id: 'C', text: '$22000(0.88)^t$' },
      // distractor: linear (simple) instead of compound depreciation
      { id: 'D', text: '$22000 - 0.12t$' },
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Compound Depreciation Model**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Depreciation rate $12\\%$ means retention $88\\%$: multiplier $0.88$. So $V(t) = 22000(0.88)^t$.\n\n**The Full Solution:**\nDepreciation at rate $r$ per period: retention rate is $1 - r$. So the value model is:\n$V(t) = V_0 (1 - r)^t = 22000(0.88)^t$.\n\nVerification: at $t = 0$: $22000$. At $t = 1$: $22000 \\cdot 0.88 = 19360$, which is $22000 \\times (1 - 0.12) = 22000 - 2640$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — uses the depreciation rate itself ($0.12$), giving near-zero values after a few years.\n* Choice B: "applies the inverse operation" — uses growth multiplier ($1.12$) instead of decay.\n* Choice D: "wrong formula" — linear depreciation; would give $0$ at $t \\approx 8.3$ years, but compound depreciation never reaches $0$.\n\n**Test Day Takeaway:** Depreciation: $V_0(1 - r)^t$. Growth: $V_0(1 + r)^t$. The base is the RETENTION rate, not the change rate.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'decay-model',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-050',
    domain: 'advanced-math',
    skills: ['exponential-growth-decay'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'A radioactive sample decays according to $A(t) = 800(0.5)^{t/6}$, where $t$ is in hours. How many grams remain after 18 hours?',
    correctAnswer: '100',
    explanation: '**SAT Pattern: Half-Life Evaluation**\n\n**The correct answer is $100$.**\n\n**The Fast Way (~15s):** $t/6 = 18/6 = 3$. $(0.5)^3 = 1/8$. $800/8 = 100$.\n\n**The Full Solution:**\nThe half-life is $6$ hours (since the model has $(0.5)^{t/6}$). After $18$ hours, exactly $3$ half-lives have passed.\n$A(18) = 800(0.5)^{18/6} = 800(0.5)^3 = 800 \\cdot \\frac{1}{8} = 100$ grams.\n\nVerification: half-life count: $800 \\to 400 \\to 200 \\to 100$ after $3$ half-lives ✓ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Computing $0.5^{18}$ (huge denominator) instead of $0.5^3$.\n* Reporting $400$ (only $1$ half-life).\n* Reporting $50$ (one too many half-lives).\n\n**Test Day Takeaway:** Half-life model: $A_0(0.5)^{t/T}$. Compute $t/T$ first — this is the number of half-lives, often a small integer.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'half-life-evaluation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-051',
    domain: 'advanced-math',
    skills: ['exponential-growth-decay'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'An investment of $\\$5{,}000$ grows at 6% compounded annually. After how many full years will the investment first exceed $\\$7{,}000$?',
    choices: [
      // distractor: rounds down prematurely
      { id: 'A', text: '5' },
      { id: 'B', text: '6' },
      // distractor: overshoots by one year
      { id: 'C', text: '7' },
      // distractor: overshoots by two years
      { id: 'D', text: '8' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Compound Growth Threshold**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $5000(1.06)^t > 7000 \\Rightarrow (1.06)^t > 1.4$. Test: $(1.06)^5 \\approx 1.338 < 1.4$; $(1.06)^6 \\approx 1.419 > 1.4$. First full year exceeding: $6$.\n\n**The Full Solution:**\nSet up inequality:\n$5000(1.06)^t > 7000$\n$(1.06)^t > 7000/5000 = 1.4$.\n\nTest integer values:\n* $(1.06)^5 = 1.06 \\cdot 1.06^4 \\approx 1.06 \\cdot 1.262 = 1.338 < 1.4$\n* $(1.06)^6 \\approx 1.419 > 1.4$ ✓\n\nFirst full year where value exceeds $7000$: $t = 6$.\n\nVerification: $5000 \\cdot 1.338 \\approx 6690 < 7000$. $5000 \\cdot 1.419 \\approx 7095 > 7000$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "off-by-one" — value at year $5$ is below $7000$.\n* Choice C: "off-by-one" — overshoots by a year.\n* Choice D: "wrong base" — overshoots by two.\n\n**Test Day Takeaway:** "First full year exceeding": test $(1 + r)^t$ for integer $t$ and find the smallest where value crosses the threshold.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'growth-threshold',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-052',
    domain: 'advanced-math',
    skills: ['exponential-growth-decay'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'A lake\'s fish population is modeled by $P(t) = \\frac{4000}{1 + 19e^{-0.3t}}$, where $t$ is in years. What is the long-term maximum population the lake can sustain?',
    choices: [
      // distractor: P(0) = 4000/20 = 200 (initial, not max)
      { id: 'A', text: '200' },
      { id: 'B', text: '4000' },
      // distractor: uses the 19 coefficient
      { id: 'C', text: '19' },
      // distractor: multiplies numerator by 19
      { id: 'D', text: '76000' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Logistic Carrying Capacity**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** As $t \\to \\infty$, $e^{-0.3t} \\to 0$, so denominator $\\to 1$ and $P \\to 4000$.\n\n**The Full Solution:**\nThis is a logistic growth model. As $t \\to \\infty$:\n$e^{-0.3t} \\to 0$, so $1 + 19e^{-0.3t} \\to 1$.\n$P(t) \\to \\frac{4000}{1} = 4000$.\n\nThe long-term limit (carrying capacity) is the numerator divided by $1$: $4000$.\n\nVerification: $P(0) = \\frac{4000}{1 + 19} = \\frac{4000}{20} = 200$. $P(100) \\approx \\frac{4000}{1 + 19 \\cdot 0} = 4000$. Population grows from $200$ to $4000$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — evaluates at $t = 0$ (initial population, not carrying capacity).\n* Choice C: "wrong base" — uses the $19$ coefficient.\n* Choice D: "wrong formula" — multiplies numerator by $19$.\n\n**Test Day Takeaway:** Logistic model $\\frac{K}{1 + Ae^{-rt}}$: carrying capacity is $K$ (the numerator). As $t \\to \\infty$, the exponential decays to zero and $P \\to K$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'logistic-carrying-capacity',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },

  // ── exponential-y-intercept (3 questions) ─────────────────────────
  {
    id: 'bank-am-053',
    domain: 'advanced-math',
    skills: ['exponential-y-intercept'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'What is the $y$-intercept of the function $f(x) = 250(1.08)^x$?',
    correctAnswer: '250',
    explanation: '**SAT Pattern: y-intercept of Exponential**\n\n**The correct answer is $250$.**\n\n**The Fast Way (~5s):** $f(0) = 250(1.08)^0 = 250 \\cdot 1 = 250$.\n\n**The Full Solution:**\n$y$-intercept is the value at $x = 0$:\n$f(0) = 250(1.08)^0 = 250 \\cdot 1 = 250$.\nIn the form $f(x) = a \\cdot b^x$, the $y$-intercept is always $a$ (the coefficient).\n\nVerification: $b^0 = 1$ for any nonzero base \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting $1.08$ (the growth factor, not the intercept).\n* Reporting $0$ (mistakenly thinking $f(0) = 0$).\n* Computing $250 \\cdot 1.08$ for $f(0)$.\n\n**Test Day Takeaway:** For $a \\cdot b^x$, the $y$-intercept is $a$. Always: $b^0 = 1$ for any $b \\neq 0$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'y-intercept-eval',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-054',
    domain: 'advanced-math',
    skills: ['exponential-y-intercept'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'The number of subscribers to a newsletter is modeled by $S(t) = 150(1.2)^t$, where $t$ is the number of months since January. What does the value 150 represent?',
    choices: [
      // distractor: confuses coefficient with rate
      { id: 'A', text: 'The monthly growth rate' },
      { id: 'B', text: 'The number of subscribers in January' },
      // distractor: would require evaluation at t = 12
      { id: 'C', text: 'The total subscribers after one year' },
      // distractor: rate not absolute count
      { id: 'D', text: 'The number of new subscribers per month' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Interpret Initial Value in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Coefficient $a$ in $a \\cdot b^t$ is the value at $t = 0$. Here $t = 0$ is January, so $150 = $ subscribers in January.\n\n**The Full Solution:**\nIn an exponential model $S(t) = a \\cdot b^t$:\n* $a$ is the value at $t = 0$ (the $y$-intercept), representing the initial quantity.\n* $b$ is the growth factor per unit time.\n\nHere $a = 150$, which is $S(0) =$ subscribers in January (since $t = 0$ corresponds to January).\n\nVerification: $S(0) = 150 \\cdot (1.2)^0 = 150$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — confuses coefficient with growth rate (which is $1.2$).\n* Choice C: "wrong formula" — would require $S(12) = 150(1.2)^{12} \\approx 1338$, not $150$.\n* Choice D: "wrong formula" — $150$ is the initial count, not a per-month rate.\n\n**Test Day Takeaway:** In $a \\cdot b^t$ contextual problems: $a$ is the INITIAL value, $b$ is the growth/decay factor (multiplier), $t$ is time elapsed. Read the units of $t$ to identify what "initial" means in context.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'interpret-initial-value',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-055',
    domain: 'advanced-math',
    skills: ['exponential-y-intercept'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'The value of a collectible is $V(t) = a \\cdot b^t$. If $V(0) = 320$ and $V(2) = 500$, what is the approximate value of $b$?',
    choices: [
      { id: 'A', text: '$1.25$' },
      // distractor: gives b² instead of b
      { id: 'B', text: '$1.56$' },
      // distractor: reciprocal of correct value
      { id: 'C', text: '$0.80$' },
      // distractor: wrong base
      { id: 'D', text: '$1.80$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Find Base from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** $V(0) = a = 320$. $V(2) = 320 b^2 = 500 \\Rightarrow b^2 = 1.5625 \\Rightarrow b = 1.25$.\n\n**The Full Solution:**\nFrom $V(0) = a \\cdot b^0 = a = 320$.\nFrom $V(2) = 320 \\cdot b^2 = 500$:\n$b^2 = \\frac{500}{320} = 1.5625$\n$b = \\sqrt{1.5625} = 1.25$.\n\nVerification: $V(2) = 320(1.25)^2 = 320 \\cdot 1.5625 = 500$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "stops one step early" — uses $b^2 = 1.5625$ as $b$, forgetting the square root.\n* Choice C: "applies the inverse operation" — gives the reciprocal $0.80$ (= $1/1.25$).\n* Choice D: "wrong base" — random value.\n\n**Test Day Takeaway:** Two points pin down both $a$ and $b$. $V(0)$ gives $a$ directly; the second point gives $b^t$ (or $b^{t-t_0}$ if $V(0)$ unknown). Always take the appropriate root.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'find-base-from-points',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },

  // ── distributive-property (4 questions) ───────────────────────────
  {
    id: 'bank-am-056',
    domain: 'advanced-math',
    skills: ['distributive-property'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'Which expression is equivalent to $-4(3x - 7)$?',
    choices: [
      { id: 'A', text: '$-12x + 28$' },
      // distractor: sign error on constant
      { id: 'B', text: '$-12x - 28$' },
      // distractor: drops the negative on the first term
      { id: 'C', text: '$12x + 28$' },
      // distractor: doesn\'t multiply the constant
      { id: 'D', text: '$-12x - 7$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Distribute a Negative**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $-4 \\cdot 3x = -12x$; $-4 \\cdot (-7) = +28$. Result: $-12x + 28$.\n\n**The Full Solution:**\nDistribute $-4$ to both terms:\n* $-4 \\cdot 3x = -12x$\n* $-4 \\cdot (-7) = +28$ (negative times negative is positive)\nResult: $-12x + 28$.\n\nVerification: factor back: $-4(3x - 7) = -12x + 28$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "sign error" — $(-4)(-7) = +28$, not $-28$. Two negatives multiply to a positive.\n* Choice C: "sign error" — drops the negative on the first term too.\n* Choice D: "stops one step early" — doesn\'t multiply the $-7$ by $-4$.\n\n**Test Day Takeaway:** Distribute the negative coefficient to EVERY term, applying sign rules carefully. Negative × Negative = Positive.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'distribute-monomial',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-057',
    domain: 'advanced-math',
    skills: ['distributive-property'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'Expand and simplify $(2x + 3)(4x - 5)$.',
    choices: [
      { id: 'A', text: '$8x^2 + 2x - 15$' },
      // distractor: combines middle terms wrong (-10 + 12 ≠ -2)
      { id: 'B', text: '$8x^2 - 2x - 15$' },
      // distractor: adds magnitudes (10 + 12) instead of signed sum
      { id: 'C', text: '$8x^2 + 22x - 15$' },
      // distractor: 2×4 = 6 (wrong arithmetic)
      { id: 'D', text: '$6x^2 + 2x - 15$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: FOIL Two Binomials**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** FOIL: $(2x)(4x) + (2x)(-5) + (3)(4x) + (3)(-5) = 8x^2 - 10x + 12x - 15 = 8x^2 + 2x - 15$.\n\n**The Full Solution:**\nFOIL (First, Outer, Inner, Last):\n* First: $(2x)(4x) = 8x^2$\n* Outer: $(2x)(-5) = -10x$\n* Inner: $(3)(4x) = 12x$\n* Last: $(3)(-5) = -15$\nSum: $8x^2 - 10x + 12x - 15 = 8x^2 + 2x - 15$.\n\nVerification: at $x = 1$: $(2 + 3)(4 - 5) = 5 \\cdot (-1) = -5$. Standard: $8 + 2 - 15 = -5$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "sign error" — combines $-10x + 12x$ as $-2x$ instead of $+2x$.\n* Choice C: "wrong formula" — adds magnitudes ($10 + 12 = 22$) instead of signed sum.\n* Choice D: "wrong base" — multiplies $2 \\cdot 4$ as $6$.\n\n**Test Day Takeaway:** FOIL produces FOUR terms, of which the two middle terms combine. Watch the signs carefully when summing the Outer and Inner products.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'foil-binomials',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-058',
    domain: 'advanced-math',
    skills: ['distributive-property'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'What value of $c$ satisfies the equation $(x + 4)(x - 6) = x^2 + bx + c$?',
    correctAnswer: '-24',
    explanation: '**SAT Pattern: Constant Term from Factored Form**\n\n**The correct answer is $-24$.**\n\n**The Fast Way (~10s):** Constant of product = product of constants: $4 \\cdot (-6) = -24$.\n\n**The Full Solution:**\nExpand $(x + 4)(x - 6)$:\n* First: $x \\cdot x = x^2$\n* Outer: $x \\cdot (-6) = -6x$\n* Inner: $4 \\cdot x = 4x$\n* Last: $4 \\cdot (-6) = -24$\nResult: $x^2 - 6x + 4x - 24 = x^2 - 2x - 24$.\nSo $c = -24$.\n\nVerification (Vieta\'s): product of roots $= c/a = -24/1$. Roots $-4$ and $6$ multiply to $-24$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting $24$ (sign error).\n* Reporting $-2$ (gives $b$, not $c$).\n* Reporting $4$ or $-6$ (one of the factors).\n\n**Test Day Takeaway:** Constant term of $(x + p)(x + q)$ is $pq$ (product of constants). Middle coefficient is $p + q$ (sum). Vieta\'s formulas in disguise.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'foil-identify-constant',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  { id: 'bank-am-059', domain: 'advanced-math', skills: ['distributive-property'], difficulty: 'hard', type: 'multiple-choice',
    question: 'For all values of $x$, the equation $(x + 2)^3 = ax^3 + bx^2 + cx + d$ is true, where $a$, $b$, $c$, and $d$ are constants. What is the value of $a - b + c - d$?',
    choices: [{ id: 'A', text: '$-27$' }, { id: 'B', text: '$-1$' }, { id: 'C', text: '$1$' }, { id: 'D', text: '$27$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Alternating-Sign Coefficient Sum via $f(-1)$**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Let $f(x) = ax^3 + bx^2 + cx + d$. Then $f(-1) = a(-1)^3 + b(-1)^2 + c(-1) + d = -a + b - c + d$, so $a - b + c - d = -f(-1)$. Since $f(x) = (x + 2)^3$, $f(-1) = (-1 + 2)^3 = 1$, and $a - b + c - d = -1$.\n\n**The Full Solution:**\nMethod 1 (substitution shortcut):\n$f(-1) = -a + b - c + d$, so $-f(-1) = a - b + c - d$.\nCompute directly: $f(-1) = (-1 + 2)^3 = 1^3 = 1$.\nTherefore $a - b + c - d = -1$.\n\nMethod 2 (full expansion):\n$(x + 2)^3 = x^3 + 6x^2 + 12x + 8$, so $a = 1$, $b = 6$, $c = 12$, $d = 8$.\n$a - b + c - d = 1 - 6 + 12 - 8 = -1$.\n\nVerification: $-1 = -(1)^3 = -f(-1)$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-27$): computes $-(1 + 2)^3 = -27$ — substitutes $x = 1$ (gives $a + b + c + d$, not the alternating sign) and then sign-flips.\n* Choice B ($-1$): correct.\n* Choice C ($1$): correctly identifies $f(-1) = 1$ but forgets to negate ($f(-1)$ gives $-a + b - c + d$, not $a - b + c - d$).\n* Choice D ($27$): computes $(1 + 2)^3 = 27$ — substitutes $x = 1$, gives $a + b + c + d$ instead.\n\n**Test Day Takeaway:** For 'sum of coefficients' style questions, plug in $x = 1$ to get $a + b + c + d = f(1)$. For 'alternating-sign sum', plug in $x = -1$ to get $-a + b - c + d = f(-1)$. Watch the sign relationship between $f(-1)$ and the specific alternating combination the question asks for.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'cube-of-binomial', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-am-060', domain: 'advanced-math', skills: ['combining-like-terms'], difficulty: 'easy', type: 'multiple-choice',
    question: 'Which of the following expressions is equivalent to $7x^2 - 3x + 4x^2 + 9x - 2$?',
    choices: [{ id: 'A', text: '$3x^2 + 6x - 2$' }, { id: 'B', text: '$11x^2 - 12x - 2$' }, { id: 'C', text: '$11x^2 + 6x - 2$' }, { id: 'D', text: '$11x^4 + 6x - 2$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Combine Like Terms**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $x^2$ terms: $7 + 4 = 11$. $x$ terms: $-3 + 9 = 6$. Constant: $-2$. Result: $11x^2 + 6x - 2$.\n\n**The Full Solution:**\nGroup like terms (terms with the same variable and exponent):\n* $x^2$ terms: $7x^2 + 4x^2 = 11x^2$\n* $x$ terms: $-3x + 9x = 6x$\n* Constant: $-2$\nCombined: $11x^2 + 6x - 2$.\n\nVerification: at $x = 1$, original $= 7 - 3 + 4 + 9 - 2 = 15$. Simplified: $11 + 6 - 2 = 15$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3x^2 + 6x - 2$): subtracts the $x^2$ coefficients ($7 - 4 = 3$) instead of adding. Mis-tracks the signs on like terms.\n* Choice B ($11x^2 - 12x - 2$): correctly combines $x^2$ but subtracts the $x$ coefficients ($-3 - 9 = -12$) instead of adding them ($-3 + 9 = 6$).\n* Choice D ($11x^4 + 6x - 2$): correctly combines coefficients, but adds the exponents on $x^2 + x^2$ to get $x^4$. Like-term combination keeps the exponent unchanged.\n\n**Test Day Takeaway:** Like terms share the SAME variable and exponent. Add their coefficients only; the exponent stays the same. $7x^2 + 4x^2 = 11x^2$, not $11x^4$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'combine-polynomial', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  {
    id: 'bank-am-061',
    domain: 'advanced-math',
    skills: ['combining-like-terms'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'Simplify $5a - 2b + 3a + 8b$. What is the coefficient of $b$ in the result?',
    correctAnswer: '6',
    explanation: '**SAT Pattern: Coefficient After Combining**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~5s):** $b$ terms: $-2b + 8b = 6b$. Coefficient: $6$.\n\n**The Full Solution:**\nCombine like terms separately:\n* $a$: $5a + 3a = 8a$\n* $b$: $-2b + 8b = 6b$\nResult: $8a + 6b$.\nCoefficient of $b$ is $6$.\n\nVerification: $-2 + 8 = 6$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting $8$ (the coefficient of $a$).\n* Reporting $-2$ or $8$ (one of the original coefficients).\n* Reporting $10$ (adding without considering sign).\n\n**Test Day Takeaway:** When asked for ONE specific coefficient, focus only on those terms. Ignore the others.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'combine-terms',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-062',
    domain: 'advanced-math',
    skills: ['combining-like-terms'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'Simplify $(3x^2 + 5x - 2) - (x^2 - 4x + 7)$.',
    choices: [
      { id: 'A', text: '$2x^2 + 9x - 9$' },
      // distractor: forgets to flip -4x to +4x
      { id: 'B', text: '$2x^2 + x - 9$' },
      // distractor: adds instead of subtracting throughout
      { id: 'C', text: '$4x^2 + x + 5$' },
      // distractor: forgets to flip +7 to -7
      { id: 'D', text: '$2x^2 + 9x + 5$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Subtract Polynomials**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Distribute the minus: $3x^2 + 5x - 2 - x^2 + 4x - 7 = 2x^2 + 9x - 9$.\n\n**The Full Solution:**\nDistribute the negative sign across the second polynomial:\n$(3x^2 + 5x - 2) - (x^2 - 4x + 7) = 3x^2 + 5x - 2 - x^2 + 4x - 7$.\nCombine like terms:\n* $x^2$: $3 - 1 = 2$\n* $x$: $5 + 4 = 9$\n* constant: $-2 - 7 = -9$\nResult: $2x^2 + 9x - 9$.\n\nVerification: at $x = 1$: $(3 + 5 - 2) - (1 - 4 + 7) = 6 - 4 = 2$. Standard: $2 + 9 - 9 = 2$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "sign error" — forgets to flip $-4x$ to $+4x$ when distributing the minus.\n* Choice C: "applies the inverse operation" — adds instead of subtracting.\n* Choice D: "sign error" — forgets to flip $+7$ to $-7$.\n\n**Test Day Takeaway:** When subtracting a polynomial, FLIP THE SIGN OF EVERY TERM in the second polynomial, then add. The minus sign distributes to all terms inside the parentheses.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'subtract-polynomials',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  { id: 'bank-am-063', domain: 'advanced-math', skills: ['combining-like-terms', 'distributive-property'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The expression $3(2x^2 + ax) - 2(x^2 + x - b)$ is equivalent to $4x^2 + 16x + 6$ for all values of $x$, where $a$ and $b$ are constants. What is the value of $a + b$?',
    choices: [{ id: 'A', text: '$3$' }, { id: 'B', text: '$6$' }, { id: 'C', text: '$9$' }, { id: 'D', text: '$12$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Match Coefficients of Equivalent Polynomials**\n\n**Choice C is correct.**\n\n**The Fast Way (~45s):** Expand: $6x^2 + 3ax - 2x^2 - 2x + 2b = 4x^2 + (3a - 2)x + 2b$. Match: $3a - 2 = 16 \\Rightarrow a = 6$. $2b = 6 \\Rightarrow b = 3$. So $a + b = 9$.\n\n**The Full Solution:**\nStep 1: Expand each product.\n$\\quad 3(2x^2 + ax) = 6x^2 + 3ax$\n$\\quad -2(x^2 + x - b) = -2x^2 - 2x + 2b$\nStep 2: Combine: $(6 - 2)x^2 + (3a - 2)x + 2b = 4x^2 + (3a - 2)x + 2b$.\nStep 3: Match coefficient of $x$ with the target $4x^2 + 16x + 6$: $3a - 2 = 16 \\Rightarrow 3a = 18 \\Rightarrow a = 6$.\nStep 4: Match constant: $2b = 6 \\Rightarrow b = 3$.\nStep 5: $a + b = 6 + 3 = 9$.\n\nVerification: with $a = 6$, $b = 3$: $3(2x^2 + 6x) - 2(x^2 + x - 3) = 6x^2 + 18x - 2x^2 - 2x + 6 = 4x^2 + 16x + 6$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): sign-flips the $-b$ when distributing, treats $-2(x^2 + x - b) = -2x^2 - 2x - 2b$ (correct sign) but then matches $-2b = 6$ to get $b = -3$, summing with $a = 6$ to get $a + b = 3$.\n* Choice B ($6$): reports $a$ alone. Stops one step early after solving the $x$-coefficient equation.\n* Choice C ($9$): correct.\n* Choice D ($12$): forgets that the constant in the expansion is $2b$, not $b$, so reads $b = 6$ directly. Then $a + b = 6 + 6 = 12$.\n\n**Test Day Takeaway:** Equivalent polynomials means the two sides are identical as polynomials — match each coefficient column separately ($x^2$, $x$, constant). Track sign distribution carefully; pay attention to factors that multiply the unknown after distribution.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'multi-distribute-combine', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  {
    id: 'bank-am-064',
    domain: 'advanced-math',
    skills: ['difference-of-squares'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'Which of the following is a factorization of $x^2 - 49$?',
    choices: [
      { id: 'A', text: '$(x + 7)(x - 7)$' },
      // distractor: squares the factor instead
      { id: 'B', text: '$(x - 7)^2$' },
      // distractor: wrong factor pair
      { id: 'C', text: '$(x + 49)(x - 1)$' },
      // distractor: squares with wrong sign
      { id: 'D', text: '$(x + 7)^2$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Difference of Squares**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $49 = 7^2$. $a^2 - b^2 = (a + b)(a - b)$. So $x^2 - 49 = (x + 7)(x - 7)$.\n\n**The Full Solution:**\nDifference of squares formula: $a^2 - b^2 = (a + b)(a - b)$.\nApplied: $x^2 - 49 = x^2 - 7^2 = (x + 7)(x - 7)$.\n\nVerification: expand $(x + 7)(x - 7) = x^2 - 7x + 7x - 49 = x^2 - 49$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong formula" — uses $(x - 7)^2 = x^2 - 14x + 49$, which has a middle term.\n* Choice C: "wrong factoring" — uses $49 \\cdot 1 = 49$ but $49 - 1 \\neq 0$ (constant doesn\'t match).\n* Choice D: "wrong formula" — $(x + 7)^2 = x^2 + 14x + 49$, has a middle term.\n\n**Test Day Takeaway:** Difference of squares $a^2 - b^2 = (a + b)(a - b)$ — TWO different factors. NOT $(a - b)^2$ which is a square (perfect square trinomial).',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'difference-of-squares',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  { id: 'bank-am-065', domain: 'advanced-math', skills: ['difference-of-squares'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Which of the following is the complete factorization of $x^4 - 16y^4$ over the integers?',
    choices: [{ id: 'A', text: '$(x^2 - 4y^2)(x^2 + 4y^2)$' }, { id: 'B', text: '$(x - 2y)(x + 2y)(x^2 + 4y^2)$' }, { id: 'C', text: '$(x - 4y)(x + 4y)(x^2 + 4y^2)$' }, { id: 'D', text: '$(x - 2y)^2(x + 2y)^2$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Two-Step Difference of Squares**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $x^4 - 16y^4 = (x^2)^2 - (4y^2)^2 = (x^2 - 4y^2)(x^2 + 4y^2)$. Then $x^2 - 4y^2 = (x - 2y)(x + 2y)$. Full: $(x - 2y)(x + 2y)(x^2 + 4y^2)$.\n\n**The Full Solution:**\nStep 1: Apply difference of squares to $x^4 - 16y^4$. Write each term as a square: $x^4 = (x^2)^2$ and $16y^4 = (4y^2)^2$. So $x^4 - 16y^4 = (x^2 - 4y^2)(x^2 + 4y^2)$.\nStep 2: $x^2 - 4y^2$ is itself a difference of squares: $x^2 - (2y)^2 = (x - 2y)(x + 2y)$.\nStep 3: $x^2 + 4y^2$ is a SUM of squares and does not factor over the integers.\nStep 4: Combine: $(x - 2y)(x + 2y)(x^2 + 4y^2)$.\n\nVerification: $(x - 2y)(x + 2y) = x^2 - 4y^2$, then $(x^2 - 4y^2)(x^2 + 4y^2) = x^4 - 16y^4$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: stops one step early after the FIRST difference-of-squares application. $(x^2 - 4y^2)$ still factors further.\n* Choice C: takes $\\sqrt{16y^4}$ incorrectly as $4y$ instead of $4y^2$, treating $x^4 - 16y^4$ as $(x^2)^2 - (4y)^2$, which is wrong.\n* Choice D: applies difference-of-squares incorrectly to the SUM factor $(x^2 + 4y^2)$. Sum of squares does not factor over the integers.\n\n**Test Day Takeaway:** When you see $x^4$ or higher even powers, keep applying difference of squares until each factor is either a sum-of-squares (irreducible) or linear. Always check $\\sqrt{\\text{coefficient}}$ AND $\\sqrt{\\text{power}}$ — $\\sqrt{16y^4} = 4y^2$, not $4y$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'difference-of-squares', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  {
    id: 'bank-am-066',
    domain: 'advanced-math',
    skills: ['difference-of-squares'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'If $a^2 - b^2 = 77$ and $a + b = 11$, what is the value of $a - b$?',
    correctAnswer: '7',
    explanation: '**SAT Pattern: Difference of Squares Application**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~10s):** $a^2 - b^2 = (a + b)(a - b)$. $11 \\cdot (a - b) = 77 \\Rightarrow a - b = 7$.\n\n**The Full Solution:**\nUse the factorization $a^2 - b^2 = (a + b)(a - b)$:\n$(a + b)(a - b) = 77$\n$11 \\cdot (a - b) = 77$\n$a - b = 7$.\n\nVerification: solving system $a + b = 11$ and $a - b = 7$ gives $a = 9$, $b = 2$. Check: $81 - 4 = 77$ ✓ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Squaring to set up a quadratic (overcomplicates).\n* Reporting $11$ or $77$ as the answer.\n* Failing to recognize the factorization.\n\n**Test Day Takeaway:** When the SAT gives you BOTH $a^2 - b^2$ and $a + b$ (or $a - b$), divide to find the other quantity. The difference of squares factorization is a shortcut.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'difference-of-squares-application',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-067',
    domain: 'advanced-math',
    skills: ['difference-of-squares'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'Factor completely: $x^4 - 16$.',
    choices: [
      { id: 'A', text: '$(x^2 + 4)(x + 2)(x - 2)$' },
      // distractor: correct first step but not fully factored
      { id: 'B', text: '$(x^2 + 4)(x^2 - 4)$' },
      // distractor: wrong factorization
      { id: 'C', text: '$(x + 2)^2(x - 2)^2$' },
      // distractor: squares the difference
      { id: 'D', text: '$(x^2 - 4)^2$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Nested Difference of Squares**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** $x^4 - 16 = (x^2)^2 - 4^2 = (x^2 + 4)(x^2 - 4) = (x^2 + 4)(x + 2)(x - 2)$.\n\n**The Full Solution:**\nApply difference of squares twice:\nStep 1: $x^4 - 16 = (x^2)^2 - 4^2 = (x^2 + 4)(x^2 - 4)$.\nStep 2: $x^2 - 4$ is ANOTHER difference of squares: $(x + 2)(x - 2)$.\n($x^2 + 4$ does NOT factor over real numbers since $a^2 + b^2$ has no real factorization.)\nFinal: $(x^2 + 4)(x + 2)(x - 2)$.\n\nVerification: expand at $x = 1$: $(1 + 4)(1 + 2)(1 - 2) = 5 \\cdot 3 \\cdot (-1) = -15$. Original: $1 - 16 = -15$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "stops one step early" — correctly does first step but doesn\'t factor $x^2 - 4$ further.\n* Choice C: "wrong factoring" — expands to a different polynomial.\n* Choice D: "wrong formula" — squares the difference, giving a different polynomial.\n\n**Test Day Takeaway:** "Factor COMPLETELY" means keep factoring until no factor can be reduced further. Check each factor for additional difference-of-squares opportunities. $a^2 + b^2$ is IRREDUCIBLE over reals.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'nested-difference-of-squares',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },

  // ── perfect-square-trinomial (4 questions) ────────────────────────
  {
    id: 'bank-am-068',
    domain: 'advanced-math',
    skills: ['perfect-square-trinomial'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'Which expression is equivalent to $(x + 9)^2$?',
    choices: [
      // distractor: omits the middle term
      { id: 'A', text: '$x^2 + 81$' },
      { id: 'B', text: '$x^2 + 18x + 81$' },
      // distractor: uses 9x instead of 18x
      { id: 'C', text: '$x^2 + 9x + 81$' },
      // distractor: squares the wrong constant
      { id: 'D', text: '$x^2 + 18x + 9$' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Expand Perfect Square**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $(a + b)^2 = a^2 + 2ab + b^2$. So $(x + 9)^2 = x^2 + 18x + 81$.\n\n**The Full Solution:**\nPerfect-square trinomial: $(a + b)^2 = a^2 + 2ab + b^2$.\nWith $a = x$, $b = 9$:\n$(x + 9)^2 = x^2 + 2(x)(9) + 9^2 = x^2 + 18x + 81$.\n\nVerification: $(x + 9)^2$ at $x = 0$ is $81$. Standard: $0 + 0 + 81 = 81$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "stops one step early" — omits the $2ab$ middle term.\n* Choice C: "off-by-one" — uses $9x$ instead of $18x$ (forgets the factor of $2$).\n* Choice D: "wrong base" — squares $9$ as $9$ instead of $81$.\n\n**Test Day Takeaway:** $(a + b)^2 \\neq a^2 + b^2$. The middle term $2ab$ is essential. Always: $(a + b)^2 = a^2 + 2ab + b^2$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'expand-perfect-square',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-069',
    domain: 'advanced-math',
    skills: ['perfect-square-trinomial'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'Which of the following is a factorization of $9x^2 - 30x + 25$?',
    choices: [
      { id: 'A', text: '$(3x - 5)^2$' },
      // distractor: incorrect factoring
      { id: 'B', text: '$(9x - 5)(x - 5)$' },
      // distractor: wrong sign in middle
      { id: 'C', text: '$(3x + 5)^2$' },
      // distractor: difference of squares (wrong middle term)
      { id: 'D', text: '$(3x - 5)(3x + 5)$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Factor Perfect Square Trinomial**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $9x^2 = (3x)^2$, $25 = 5^2$, $30x = 2(3x)(5)$. Middle term negative $\\Rightarrow (3x - 5)^2$.\n\n**The Full Solution:**\nCheck whether $9x^2 - 30x + 25$ is a perfect-square trinomial $(a - b)^2 = a^2 - 2ab + b^2$:\n* First term: $9x^2 = (3x)^2$, so $a = 3x$.\n* Last term: $25 = 5^2$, so $b = 5$.\n* Middle: $-2ab = -2(3x)(5) = -30x$ ✓.\nSince the middle is negative: $9x^2 - 30x + 25 = (3x - 5)^2$.\n\nVerification: expand $(3x - 5)^2 = 9x^2 - 30x + 25$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong factoring" — incorrect coefficients.\n* Choice C: "sign error" — would expand to $9x^2 + 30x + 25$.\n* Choice D: "wrong formula" — difference of squares gives $9x^2 - 25$ (no middle term).\n\n**Test Day Takeaway:** Recognize perfect-square trinomials by checking the pattern $a^2 \\pm 2ab + b^2$. Both end terms are perfect squares, and the middle is $2ab$ (sign depends on the binomial sign).',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'factor-perfect-square',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-070',
    domain: 'advanced-math',
    skills: ['perfect-square-trinomial'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'What value of $k$ makes $x^2 + 20x + k$ a perfect-square trinomial?',
    correctAnswer: '100',
    explanation: '**SAT Pattern: Complete the Square (Find Constant)**\n\n**The correct answer is $100$.**\n\n**The Fast Way (~10s):** Half of $20$ is $10$. $10^2 = 100$. So $k = 100$.\n\n**The Full Solution:**\nFor $x^2 + 2bx + b^2$ to be a perfect-square trinomial $(x + b)^2$, we need $2b = 20$, so $b = 10$. Then $k = b^2 = 100$.\n\nVerification: $x^2 + 20x + 100 = (x + 10)^2$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting $20$ (the middle coefficient).\n* Reporting $10$ (half the coefficient, but $k$ is its square).\n* Reporting $400$ ($20^2$ — squaring the wrong thing).\n\n**Test Day Takeaway:** To make $x^2 + bx + k$ a perfect square, set $k = (b/2)^2$. Half the linear coefficient, squared.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'complete-perfect-square',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-071',
    domain: 'advanced-math',
    skills: ['perfect-square-trinomial'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'If $4x^2 + kx + 49$ is a perfect-square trinomial, what are the possible values of $k$?',
    choices: [
      // distractor: misses the negative case
      { id: 'A', text: '$28$ only' },
      // distractor: misses the positive case
      { id: 'B', text: '$-28$ only' },
      { id: 'C', text: '$28$ or $-28$' },
      // distractor: half the correct value (forgets the factor of 2)
      { id: 'D', text: '$14$ or $-14$' },
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Find k for Perfect Square Trinomial (Both Signs)**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $(2x \\pm 7)^2 = 4x^2 \\pm 28x + 49$. So $k = \\pm 28$.\n\n**The Full Solution:**\nFor $4x^2 + kx + 49 = (2x + a)^2$ for some $a$: $a^2 = 49 \\Rightarrow a = \\pm 7$.\nThen $k = 2 \\cdot 2 \\cdot a = 4a$.\n* If $a = 7$: $k = 28$\n* If $a = -7$: $k = -28$\n\nBoth values produce a perfect-square trinomial.\n\nVerification: $(2x + 7)^2 = 4x^2 + 28x + 49$; $(2x - 7)^2 = 4x^2 - 28x + 49$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "stops one step early" — only considers positive $a$.\n* Choice B: "stops one step early" — only considers negative $a$.\n* Choice D: "off-by-one" — forgets the factor of $2$ in $2ab$.\n\n**Test Day Takeaway:** Perfect-square trinomial $a^2 \\pm 2ab + b^2$: middle coefficient can be POSITIVE or NEGATIVE. Both signs are valid unless the problem constrains otherwise.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'pst-parameter',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },

  // ── simplifying-rational-expressions (4 questions) ────────────────
  {
    id: 'bank-am-072',
    domain: 'advanced-math',
    skills: ['simplifying-rational-expressions'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'Simplify $\\frac{x^2 - 4}{x^2 + 5x + 6}$ for $x \\neq -2, -3$.',
    choices: [
      { id: 'A', text: '$\\frac{x - 2}{x + 3}$' },
      // distractor: cancels (x - 2) instead of (x + 2)
      { id: 'B', text: '$\\frac{x + 2}{x + 3}$' },
      // distractor: sign error in denominator
      { id: 'C', text: '$\\frac{x - 2}{x - 3}$' },
      // distractor: only factors denominator
      { id: 'D', text: '$\\frac{x^2 - 4}{x + 3}$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Simplify Rational Expression (Cancel Common Factor)**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Factor both: $\\frac{(x - 2)(x + 2)}{(x + 2)(x + 3)} = \\frac{x - 2}{x + 3}$ (cancel $(x + 2)$).\n\n**The Full Solution:**\nFactor numerator: $x^2 - 4 = (x - 2)(x + 2)$ (difference of squares).\nFactor denominator: $x^2 + 5x + 6 = (x + 2)(x + 3)$.\n$\\frac{(x - 2)(x + 2)}{(x + 2)(x + 3)}$. Cancel the common $(x + 2)$:\nResult: $\\frac{x - 2}{x + 3}$.\n\nVerification: at $x = 0$: original $= \\frac{-4}{6} = -\\frac{2}{3}$. Simplified: $\\frac{-2}{3} = -\\frac{2}{3}$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong base" — cancels $(x - 2)$ instead of $(x + 2)$.\n* Choice C: "sign error" — uses $(x - 3)$ in denominator.\n* Choice D: "stops one step early" — only factors denominator.\n\n**Test Day Takeaway:** Always FACTOR both numerator and denominator before canceling. Only cancel IDENTICAL factors. Note the domain restrictions where the original was undefined.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'simplify-rational',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-073',
    domain: 'advanced-math',
    skills: ['simplifying-rational-expressions'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'Simplify $\\frac{3x^2 - 12}{6x + 12}$ for $x \\neq -2$.',
    choices: [
      { id: 'A', text: '$\\frac{x - 2}{2}$' },
      // distractor: sign error in canceling
      { id: 'B', text: '$\\frac{x + 2}{2}$' },
      // distractor: doesn\'t reduce 3/6
      { id: 'C', text: '$\\frac{3(x - 2)}{6}$' },
      // distractor: stops before canceling
      { id: 'D', text: '$\\frac{x^2 - 4}{2(x + 2)}$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Factor Out GCF then Cancel**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** $\\frac{3(x^2 - 4)}{6(x + 2)} = \\frac{3(x + 2)(x - 2)}{6(x + 2)} = \\frac{x - 2}{2}$.\n\n**The Full Solution:**\nFactor GCF from numerator and denominator:\n* Numerator: $3x^2 - 12 = 3(x^2 - 4) = 3(x - 2)(x + 2)$\n* Denominator: $6x + 12 = 6(x + 2)$\n$\\frac{3(x - 2)(x + 2)}{6(x + 2)} = \\frac{3(x - 2)}{6} = \\frac{x - 2}{2}$.\n\nVerification: at $x = 4$: original $= \\frac{36}{36} = 1$. Simplified: $\\frac{2}{2} = 1$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "sign error" — uses $(x + 2)$ instead of $(x - 2)$.\n* Choice C: "stops one step early" — doesn\'t reduce $3/6$ to $1/2$.\n* Choice D: "stops one step early" — doesn\'t cancel $(x + 2)$.\n\n**Test Day Takeaway:** Always factor out GCF FIRST, then look for further factorizations (like difference of squares). Reduce numeric fractions to lowest terms.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'simplify-rational',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-074',
    domain: 'advanced-math',
    skills: ['simplifying-rational-expressions'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'Simplify $\\frac{x^2 - x - 6}{x^2 - 9} \\cdot \\frac{x + 3}{x^2 - 4}$ for all valid $x$.',
    choices: [
      { id: 'A', text: '$\\frac{1}{x - 2}$' },
      // distractor: stops with partial cancellation
      { id: 'B', text: '$\\frac{x + 2}{x - 3}$' },
      // distractor: sign error in denominator
      { id: 'C', text: '$\\frac{1}{x + 2}$' },
      // distractor: doesn\'t cancel (x + 2) completely
      { id: 'D', text: '$\\frac{x - 2}{x + 2}$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Multiply Rational Expressions (Factor + Cancel)**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** Factor everything, cancel:\n$\\frac{(x - 3)(x + 2)}{(x - 3)(x + 3)} \\cdot \\frac{(x + 3)}{(x - 2)(x + 2)}$\nCancel $(x - 3)$, $(x + 3)$, $(x + 2)$ across the product. Left: $\\frac{1}{x - 2}$.\n\n**The Full Solution:**\nFactor each polynomial:\n* $x^2 - x - 6 = (x - 3)(x + 2)$\n* $x^2 - 9 = (x - 3)(x + 3)$\n* $x^2 - 4 = (x - 2)(x + 2)$\n\nProduct:\n$\\frac{(x - 3)(x + 2)}{(x - 3)(x + 3)} \\cdot \\frac{x + 3}{(x - 2)(x + 2)}$.\n\nCancel common factors across the product: $(x - 3)$, $(x + 3)$, $(x + 2)$ all cancel. Left:\n$\\frac{1}{x - 2}$.\n\nVerification: at $x = 5$: numerators $= 14 \\cdot 8 = 112$; denominators $= 16 \\cdot 21 = 336$. Ratio: $1/3$. Simplified: $1/3$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "stops one step early" — partial cancellation.\n* Choice C: "sign error" — uses $(x + 2)$ in denominator instead of $(x - 2)$.\n* Choice D: "stops one step early" — doesn\'t fully cancel.\n\n**Test Day Takeaway:** For products of rational expressions: factor EVERYTHING first, then cancel any factor that appears in any numerator and any denominator. The order does not matter.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'multiply-rational',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-075',
    domain: 'advanced-math',
    skills: ['simplifying-rational-expressions'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'For $x \\neq 0$ and $x \\neq 3$, simplify $\\frac{\\frac{1}{x} - \\frac{1}{3}}{\\frac{x - 3}{9}}$.',
    choices: [
      { id: 'A', text: '$\\frac{-3}{x}$' },
      // distractor: misses the sign flip from (3 - x) → -(x - 3)
      { id: 'B', text: '$\\frac{3}{x}$' },
      // distractor: doesn\'t reduce 9/(3x) properly
      { id: 'C', text: '$\\frac{-9}{x}$' },
      // distractor: inverts everything
      { id: 'D', text: '$\\frac{x}{3}$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Complex Fraction Simplification**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Numerator: $\\frac{1}{x} - \\frac{1}{3} = \\frac{3 - x}{3x}$. Divide by $\\frac{x - 3}{9}$ = multiply by $\\frac{9}{x - 3}$. $\\frac{3 - x}{3x} \\cdot \\frac{9}{x - 3} = \\frac{-(x - 3)}{3x} \\cdot \\frac{9}{x - 3} = \\frac{-9}{3x} = \\frac{-3}{x}$.\n\n**The Full Solution:**\nCombine the numerator:\n$\\frac{1}{x} - \\frac{1}{3} = \\frac{3}{3x} - \\frac{x}{3x} = \\frac{3 - x}{3x}$.\n\nDivide by $\\frac{x - 3}{9}$ (= multiply by $\\frac{9}{x - 3}$):\n$\\frac{3 - x}{3x} \\cdot \\frac{9}{x - 3}$.\n\nNote $3 - x = -(x - 3)$:\n$= \\frac{-(x - 3)}{3x} \\cdot \\frac{9}{x - 3} = \\frac{-9(x - 3)}{3x(x - 3)} = \\frac{-9}{3x} = \\frac{-3}{x}$.\n\nVerification: at $x = 1$: numerator $= 1 - 1/3 = 2/3$; denominator $= (1 - 3)/9 = -2/9$. Ratio: $(2/3) / (-2/9) = (2/3) \\cdot (-9/2) = -3$. Simplified: $-3/1 = -3$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "sign error" — misses the sign flip from $3 - x = -(x - 3)$.\n* Choice C: "stops one step early" — doesn\'t reduce $\\frac{9}{3} = 3$.\n* Choice D: "wrong formula" — inverts everything.\n\n**Test Day Takeaway:** Complex fractions: combine numerator/denominator first, then divide by multiplying by the reciprocal. Watch out for $(a - b)$ vs $(b - a) = -(a - b)$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'complex-fraction',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },

  // === EXPONENTIAL GROWTH/DECAY (8 questions) — Phase 2 priority pattern ===
  // 19x in 12 tests = 3.6% of test items. Covers: model construction from
  // doubling/halving language, factor interpretation, percent-change extraction,
  // period mismatch, and compounded-to-annual rate conversion.
  {
    id: 'bank-am-076',
    domain: 'advanced-math',
    skills: ['exponential-growth-decay'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A colony of bacteria triples every $2$ hours. If the initial population is $60$, which of the following functions $P$ models the population $t$ hours after the initial measurement?',
    choices: [
      // distractor: linear growth instead of exponential
      { id: 'A', text: '$P(t) = 60 + 3t$' },
      { id: 'B', text: '$P(t) = 60 \\cdot 3^{\\frac{t}{2}}$' },
      // distractor: uses 2t instead of t/2 (triples every half-hour)
      { id: 'C', text: '$P(t) = 60 \\cdot 3^{2t}$' },
      // distractor: confuses initial value with the growth factor
      { id: 'D', text: '$P(t) = 3 \\cdot 60^{\\frac{t}{2}}$' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Exponential Growth/Decay**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** "Triples every $2$ hours" means base $= 3$ and the exponent must equal $1$ when $t = 2$, so the exponent is $\\dfrac{t}{2}$. Initial value $60$ goes out front.\n\n**The Full Solution:**\nGeneral periodic-multiplier model: $P(t) = P_0 \\cdot b^{\\frac{t}{d}}$, where $P_0 = 60$, $b = 3$ (tripling factor), $d = 2$ (hours per tripling).\nSo $P(t) = 60 \\cdot 3^{\\frac{t}{2}}$.\n\nCheck: $P(0) = 60$ \\checkmark. $P(2) = 60 \\cdot 3 = 180$ (tripled once) \\checkmark. $P(4) = 60 \\cdot 9 = 540$ (tripled twice) \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong formula" — uses linear growth ($+3t$) instead of exponential multiplication.\n* Choice C: "applies the inverse operation" — uses $2t$ instead of $\\dfrac{t}{2}$, which would mean tripling every half-hour.\n* Choice D: "wrong base" — swaps the initial value $60$ and the growth factor $3$.\n\n**Test Day Takeaway:** "Triples every $d$ units" $\\Rightarrow$ base $3$, exponent $\\dfrac{t}{d}$. Initial value sits OUT FRONT as a multiplier; growth factor is the BASE.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'exponential-growth-decay',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-077',
    domain: 'advanced-math',
    skills: ['exponential-growth-decay'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A function $g$ is defined by $g(t) = 4{,}500(1.07)^t$, where $t$ is the number of years since 2020. The expression $1.07$ in the definition of $g$ best represents which of the following?',
    choices: [
      // distractor: reads 1.07 as the rate without subtracting 1
      { id: 'A', text: 'The annual growth rate of $107\\%$.' },
      { id: 'B', text: 'The annual growth rate of $7\\%$.' },
      // distractor: confuses growth factor with initial value
      { id: 'C', text: 'The initial value of $g$.' },
      // distractor: reads 1.07 as a dollar amount
      { id: 'D', text: 'The annual growth of $\\$1.07$.' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Exponential Growth/Decay**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Growth factor $1.07 = 1 + 0.07$. The "extra" $0.07$ above the $1$ is the growth rate: $7\\%$ per year.\n\n**The Full Solution:**\nIn the model $g(t) = P_0(1 + r)^t$, the base $(1 + r)$ represents the growth factor per period:\n* The $1$ keeps the previous value.\n* The $+r$ adds the growth.\n\nHere $1.07 = 1 + 0.07$, so $r = 0.07 = 7\\%$ per year.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — reads $1.07$ as $107\\%$ directly, missing that the $1$ represents the existing value (not new growth).\n* Choice C: "wrong formula" — confuses the growth factor with the initial value. The initial value is $4{,}500$ (the coefficient out front).\n* Choice D: "wrong formula" — interprets $1.07$ as a fixed dollar amount, which would be linear growth, not exponential.\n\n**Test Day Takeaway:** In $P_0(1 + r)^t$, the growth rate is $r = (\\text{base}) - 1$. Subtract $1$, then read as a percent.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'exponential-growth-decay',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-078',
    domain: 'advanced-math',
    skills: ['exponential-growth-decay', 'percent-change'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'The number of customers at a store is modeled by $C(t) = 12{,}000(0.82)^{\\frac{t}{5}}$, where $t$ is the number of years since the store opened. By what percent does the customer count decrease every $5$ years?',
    correctAnswer: '18',
    explanation: '**SAT Pattern: Exponential Growth/Decay**\n\n**The correct answer is $18$.**\n\n**The Fast Way (~10s):** Every $5$ years the multiplier is $0.82$. Percent decrease $= 1 - 0.82 = 0.18 = 18\\%$.\n\n**The Full Solution:**\nWhen $t$ increases by $5$:\n$C(t + 5) = 12{,}000(0.82)^{\\frac{t + 5}{5}} = 12{,}000(0.82)^{\\frac{t}{5}} \\cdot 0.82 = 0.82 \\cdot C(t)$.\n\nThe customer count is multiplied by $0.82$ every $5$ years. Percent decrease $= 1 - 0.82 = 0.18 = 18\\%$.\n\nVerification: at $t = 0$, $C = 12{,}000$. At $t = 5$, $C = 12{,}000 \\cdot 0.82 = 9{,}840$. Decrease: $\\dfrac{12{,}000 - 9{,}840}{12{,}000} = \\dfrac{2{,}160}{12{,}000} = 0.18 = 18\\%$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Answering $82$ (the retention multiplier, not the decay rate).\n* Computing an annual rate by dividing $18\\%$ by $5$ — exponential decay does NOT scale linearly across periods.\n\n**Test Day Takeaway:** For a decay multiplier $b < 1$ over period $d$, the percent decrease PER PERIOD is $(1 - b) \\times 100\\%$. Don\'t scale linearly to a different period.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'exponential-growth-decay',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-079',
    domain: 'advanced-math',
    skills: ['exponential-growth-decay'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A medication concentration in the bloodstream halves every $8$ hours. If the initial dose results in a concentration of $240$ mg/L, which of the following functions $C$ models the concentration $t$ hours after the dose?',
    choices: [
      // distractor: linear decay instead of exponential
      { id: 'A', text: '$C(t) = 240 - 30t$' },
      // distractor: uses 8t instead of t/8 (halves every 1/8 hour)
      { id: 'B', text: '$C(t) = 240 \\left(\\dfrac{1}{2}\\right)^{8t}$' },
      { id: 'C', text: '$C(t) = 240 \\left(\\dfrac{1}{2}\\right)^{\\frac{t}{8}}$' },
      // distractor: wrong base (uses 2 instead of 1/2 - growth not decay)
      { id: 'D', text: '$C(t) = 240 \\cdot 2^{\\frac{t}{8}}$' }
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Exponential Growth/Decay**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** "Halves every $8$ hours" means base $= \\dfrac{1}{2}$ and exponent $= \\dfrac{t}{8}$ (so the exponent equals $1$ at $t = 8$).\n\n**The Full Solution:**\nHalving-period decay model: $C(t) = C_0 \\cdot \\left(\\dfrac{1}{2}\\right)^{\\frac{t}{h}}$, where $C_0 = 240$ is the initial concentration and $h = 8$ is the half-life.\nSo $C(t) = 240 \\left(\\dfrac{1}{2}\\right)^{\\frac{t}{8}}$.\n\nCheck: $C(0) = 240$ \\checkmark. $C(8) = 240 \\cdot \\tfrac{1}{2} = 120$ (halved) \\checkmark. $C(16) = 240 \\cdot \\tfrac{1}{4} = 60$ (halved again) \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong formula" — uses linear decay ($-30$ per hour). This would predict $C = 0$ at $t = 8$, missing the asymptotic decay.\n* Choice B: "applies the inverse operation" — uses $8t$ instead of $\\dfrac{t}{8}$, which would halve every $\\dfrac{1}{8}$ of an hour (way too fast).\n* Choice D: "wrong base" — uses $2$ instead of $\\dfrac{1}{2}$, which would model DOUBLING every $8$ hours — the opposite of decay.\n\n**Test Day Takeaway:** "Halves every $h$ units" $\\Rightarrow$ base $\\dfrac{1}{2}$, exponent $\\dfrac{t}{h}$. The exponent must equal $1$ when $t = h$ (one half-life has elapsed).',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'exponential-growth-decay',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-080',
    domain: 'advanced-math',
    skills: ['exponential-growth-decay'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A social media platform\'s active user count grows by $5\\%$ every $4$ months. If the platform has $80{,}000$ active users at the start of the year, which of the following expressions gives the number of active users $y$ years later?',
    choices: [
      // distractor: uses y/4 (growth every 4 years) instead of 3y (3 four-month periods per year)
      { id: 'A', text: '$80{,}000(1.05)^{\\frac{y}{4}}$' },
      { id: 'B', text: '$80{,}000(1.05)^{3y}$' },
      // distractor: scales the rate instead of the exponent (3 × 5% = 15%)
      { id: 'C', text: '$80{,}000(1.15)^y$' },
      // distractor: misses that 4 months × 3 = 1 year (uses 4y)
      { id: 'D', text: '$80{,}000(1.05)^{4y}$' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Exponential Growth/Decay**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Growth factor per $4$-month period $= 1.05$. There are $\\dfrac{12}{4} = 3$ periods per year, so in $y$ years there are $3y$ periods: $80{,}000(1.05)^{3y}$.\n\n**The Full Solution:**\nGrowth factor per $4$-month period: $1 + 0.05 = 1.05$.\nNumber of $4$-month periods in $y$ years: $\\dfrac{12 \\text{ months}}{4 \\text{ months/period}} \\cdot y = 3y$.\nUsers after $y$ years: $80{,}000(1.05)^{3y}$.\n\nVerification: at $y = 1$, $(1.05)^3 = 1.157625$, so users $\\approx 80{,}000 \\cdot 1.158 = 92{,}610$. This matches three consecutive $5\\%$ increases: $80{,}000 \\cdot 1.05 \\cdot 1.05 \\cdot 1.05 = 92{,}610$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "applies the inverse operation" — uses $\\dfrac{y}{4}$ instead of $3y$, treating "every $4$ months" as "every $4$ years".\n* Choice C: "wrong formula" — multiplies the percent rate by $3$ to get an annual rate of $15\\%$, but compounding doesn\'t scale linearly ($1.05^3 \\neq 1.15$).\n* Choice D: "off-by-one" — uses $4y$ instead of $3y$, perhaps because the period is "$4$ months."\n\n**Test Day Takeaway:** Count growth periods carefully. If growth happens every $d$ months and time is in years, there are $\\dfrac{12}{d} \\cdot y$ periods. Match the units before raising to a power.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'exponential-growth-decay',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-081',
    domain: 'advanced-math',
    skills: ['exponential-growth-decay'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A car\'s value is modeled by $V(t) = 28{,}000(0.88)^t$, where $V(t)$ is in dollars and $t$ is the number of years since purchase. Which of the following best describes the role of $0.88$ in this model?',
    choices: [
      // distractor: confuses retention with loss
      { id: 'A', text: 'The car loses $88\\%$ of its value each year.' },
      { id: 'B', text: 'The car retains $88\\%$ of its value each year.' },
      // distractor: treats 0.88 as a dollar amount
      { id: 'C', text: 'The car loses $\\$0.88$ in value each year.' },
      // distractor: confuses base with initial value
      { id: 'D', text: 'The car is worth $\\$0.88$ initially.' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Exponential Growth/Decay**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Base $0.88 < 1$ means decay. Each year, the car keeps $88\\%$ of its value (and therefore loses $12\\%$).\n\n**The Full Solution:**\nIn $V(t) = V_0 \\cdot b^t$, the base $b$ is the per-period multiplier:\n* If $b < 1$: the quantity decays. Each period it RETAINS $b \\cdot 100\\%$ and LOSES $(1 - b) \\cdot 100\\%$.\n* If $b > 1$: the quantity grows.\n\nHere $b = 0.88$, so the car retains $88\\%$ each year (losing $1 - 0.88 = 12\\%$).\n\n**Why the wrong answers are tempting:**\n* Choice A: "applies the inverse operation" — confuses retention with loss. Losing $88\\%$ would mean keeping $12\\%$, so the multiplier would be $0.12$, not $0.88$.\n* Choice C: "wrong formula" — treats $0.88$ as a dollar amount (linear), but this is an exponential decay multiplier.\n* Choice D: "wrong base" — confuses the decay multiplier with the initial value $V_0 = 28{,}000$.\n\n**Test Day Takeaway:** A multiplier $b < 1$ means the quantity KEEPS $b \\cdot 100\\%$ each period and LOSES $(1-b) \\cdot 100\\%$. Always check whether you\'re reporting the retention or the loss.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'exponential-growth-decay',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-082',
    domain: 'advanced-math',
    skills: ['exponential-growth-decay', 'percent-change'],
    difficulty: 'hard',
    type: 'fill-in',
    question: 'A savings account is modeled by $S(t) = 15{,}000(1.004)^{12t}$, where $t$ is the number of years since the account was opened. What is the annual percent increase in $S$, to the nearest tenth of a percent?',
    correctAnswer: '4.9',
    explanation: '**SAT Pattern: Exponential Growth/Decay**\n\n**The correct answer is $4.9$.**\n\n**The Fast Way (~30s):** Annual factor $= (1.004)^{12} \\approx 1.0490$. Annual increase $= 1.0490 - 1 = 0.0490 = 4.9\\%$.\n\n**The Full Solution:**\nThe expression $(1.004)^{12t}$ compounds at $0.4\\%$ per month. To find the annual rate, evaluate the growth over $t = 1$ year:\n\nAnnual factor $= (1.004)^{12} \\approx 1.04907$.\n\nAnnual percent increase $\\approx 1.04907 - 1 = 0.04907 \\approx 4.9\\%$.\n\nVerification: at $t = 1$ year, $S = 15{,}000 \\cdot 1.04907 \\approx 15{,}736.07$. This matches $15{,}000$ at $0.4\\%$ growth compounded monthly for $12$ months: $15{,}000 \\cdot (1.004)^{12} = 15{,}736.07$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting $0.4$ (the monthly rate, not annual).\n* Reporting $4.8$ (multiplying $0.4\\% \\times 12$, treating compounding as linear).\n\n**Test Day Takeaway:** Effective annual rate = (growth factor over $1$ year) $- 1$, expressed as a percent. Compounding produces slightly MORE than the simple multiple ($12 \\times 0.4\\% = 4.8\\%$ vs actual $\\approx 4.9\\%$).',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'exponential-growth-decay',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-083',
    domain: 'advanced-math',
    skills: ['exponential-growth-decay', 'percent-change'],
    difficulty: 'hard',
    type: 'fill-in',
    question: 'A radioactive isotope decays according to $A(t) = 320 \\cdot (0.5)^{\\frac{t}{24}}$, where $A(t)$ is the mass in grams and $t$ is the time in days. To the nearest hundredth of a percent, by what percent does the mass decrease in one day?',
    correctAnswer: '2.85',
    explanation: '**SAT Pattern: Exponential Growth/Decay**\n\n**The correct answer is $2.85$ (also accept $2.86$).**\n\n**The Fast Way (~30s):** Per-day multiplier $= (0.5)^{\\frac{1}{24}} \\approx 0.97149$. Per-day decrease $= 1 - 0.97149 \\approx 0.02851 \\approx 2.85\\%$.\n\n**The Full Solution:**\nRewrite $A(t) = 320 \\cdot (0.5)^{\\frac{t}{24}} = 320 \\cdot \\left[(0.5)^{\\frac{1}{24}}\\right]^t$.\n\nThe per-day multiplier is $(0.5)^{\\frac{1}{24}}$. Compute:\n$(0.5)^{\\frac{1}{24}} = e^{\\frac{\\ln(0.5)}{24}} = e^{-\\frac{0.6931}{24}} \\approx e^{-0.02888} \\approx 0.97149$.\n\nPer-day decrease $= 1 - 0.97149 \\approx 0.02851 \\approx 2.85\\%$.\n\nVerification: after $24$ days, $A \\to 320 \\cdot 0.97149^{24} \\approx 320 \\cdot 0.5 = 160$ — half the original \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Computing $\\dfrac{50\\%}{24} \\approx 2.08\\%$ — exponential decay does NOT scale linearly across periods.\n* Reporting $50\\%$ or $24\\%$ (mistaking the half-life period for the daily rate).\n\n**Test Day Takeaway:** Per-period rate from a half-life: $(0.5)^{\\frac{1}{n}}$ where $n$ = number of periods in one half-life. The decrease is $1 - (0.5)^{\\frac{1}{n}}$, NOT $\\dfrac{50\\%}{n}$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'exponential-growth-decay',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },

  // === EXPONENT RULES WITH RADICALS (8 questions) — Phase 2 priority pattern ===
  // 15x in 12 tests = 2.8% of test items. Covers: multiply same-base radicals,
  // divide same-base radicals, nested radical with outer power, negative
  // exponent, p+q from rational form, identity-based value computation.
  {
    id: 'bank-am-084',
    domain: 'advanced-math',
    skills: ['exponent-laws'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'If $\\sqrt{x} \\cdot x^3 = x^k$ for $x > 0$, what is the value of $k$? Express your answer as a fraction.',
    correctAnswer: '7/2',
    explanation: '**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $\\dfrac{7}{2}$.**\n\n**The Fast Way (~10s):** $\\sqrt{x} = x^{\\frac{1}{2}}$. Multiply: $x^{\\frac{1}{2}} \\cdot x^3 = x^{\\frac{1}{2} + 3} = x^{\\frac{7}{2}}$. So $k = \\dfrac{7}{2}$.\n\n**The Full Solution:**\nConvert the radical: $\\sqrt{x} = x^{\\frac{1}{2}}$.\nMultiply same-base powers by adding exponents:\n$x^{\\frac{1}{2}} \\cdot x^3 = x^{\\frac{1}{2} + 3} = x^{\\frac{1}{2} + \\frac{6}{2}} = x^{\\frac{7}{2}}$.\nSo $k = \\dfrac{7}{2}$.\n\nVerification: at $x = 4$, $\\sqrt{4} \\cdot 4^3 = 2 \\cdot 64 = 128$, and $4^{\\frac{7}{2}} = (4^{\\frac{1}{2}})^7 = 2^7 = 128$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Writing $\\sqrt{x} = x^2$ instead of $x^{\\frac{1}{2}}$ (confusing square root with squaring).\n* Multiplying the exponents ($\\dfrac{1}{2} \\cdot 3 = \\dfrac{3}{2}$) instead of adding them.\n\n**Test Day Takeaway:** $\\sqrt{x} = x^{\\frac{1}{2}}$. When multiplying same-base powers, ADD exponents. Convert all radicals to fractional exponents first.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'exponent-rules-with-radicals',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-085',
    domain: 'advanced-math',
    skills: ['exponent-laws'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'If $2^x = 16$, what is the value of $2^{x + 1}$?',
    correctAnswer: '32',
    explanation: '**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $32$.**\n\n**The Fast Way (~5s):** $2^{x + 1} = 2^x \\cdot 2 = 16 \\cdot 2 = 32$.\n\n**The Full Solution:**\nUse the product rule: $2^{x + 1} = 2^x \\cdot 2^1 = 2^x \\cdot 2$.\nSubstitute $2^x = 16$: $16 \\cdot 2 = 32$.\n\nVerification: $2^x = 16 \\Rightarrow x = 4$. Then $2^{4 + 1} = 2^5 = 32$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Adding $1$ to the value of $2^x$ to get $17$ (treats the exponent like a coefficient).\n* Computing $2^{x \\cdot 1}$ instead of $2^{x + 1}$, which would leave $16$ unchanged.\n\n**Test Day Takeaway:** $a^{m + n} = a^m \\cdot a^n$. To shift the exponent by $+1$, multiply by the base; no need to find $x$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'exponent-rules-with-radicals',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-086',
    domain: 'advanced-math',
    skills: ['exponent-laws'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'If $\\sqrt[3]{x^2} \\cdot \\sqrt{x^5} = x^{\\frac{p}{q}}$ for $x > 0$, where $\\dfrac{p}{q}$ is in lowest terms, what is the value of $p + q$?',
    choices: [
      // distractor: gives just p (numerator)
      { id: 'A', text: '$19$' },
      { id: 'B', text: '$25$' },
      // distractor: gives the original numerators added (2+5)
      { id: 'C', text: '$7$' },
      // distractor: multiplies p and q (19 × 6 / something)
      { id: 'D', text: '$30$' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Exponent Rules with Radicals**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $\\sqrt[3]{x^2} = x^{\\frac{2}{3}}$, $\\sqrt{x^5} = x^{\\frac{5}{2}}$. Sum: $\\dfrac{2}{3} + \\dfrac{5}{2} = \\dfrac{4}{6} + \\dfrac{15}{6} = \\dfrac{19}{6}$. $\\gcd(19, 6) = 1$, so $p = 19$, $q = 6$, $p + q = 25$.\n\n**The Full Solution:**\nConvert each radical:\n$\\sqrt[3]{x^2} = x^{\\frac{2}{3}}, \\quad \\sqrt{x^5} = x^{\\frac{5}{2}}$.\n\nMultiplying same-base powers, add exponents:\n$x^{\\frac{2}{3}} \\cdot x^{\\frac{5}{2}} = x^{\\frac{2}{3} + \\frac{5}{2}}$.\n\nCommon denominator $6$: $\\dfrac{2}{3} = \\dfrac{4}{6}$ and $\\dfrac{5}{2} = \\dfrac{15}{6}$.\nSum: $\\dfrac{4 + 15}{6} = \\dfrac{19}{6}$.\n\nCheck that $\\dfrac{19}{6}$ is in lowest terms: $\\gcd(19, 6) = 1$, yes.\nSo $p = 19$, $q = 6$, and $p + q = 25$.\n\n**Why the wrong answers are tempting:**\n* Choice A: "stops one step early" — gives $p = 19$ (the numerator) and forgets to add $q$.\n* Choice C: "wrong base" — adds the radical numerators directly ($2 + 5 = 7$) without converting to fractional exponents.\n* Choice D: "wrong formula" — confuses sum with another combination.\n\n**Test Day Takeaway:** $\\sqrt[n]{x^m} = x^{\\frac{m}{n}}$ — power on top, root on the bottom. After adding fractional exponents, verify the result is in lowest terms before reading off $p$ and $q$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'exponent-rules-with-radicals',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-087',
    domain: 'advanced-math',
    skills: ['exponent-laws'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'If $\\dfrac{x^{\\frac{5}{2}}}{x^{\\frac{1}{6}}} = x^k$ for $x > 0$, what is the value of $k$? Express your answer as a fraction.',
    correctAnswer: '7/3',
    explanation: '**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $\\dfrac{7}{3}$.**\n\n**The Fast Way (~15s):** Division of same base: subtract exponents. $\\dfrac{5}{2} - \\dfrac{1}{6} = \\dfrac{15}{6} - \\dfrac{1}{6} = \\dfrac{14}{6} = \\dfrac{7}{3}$.\n\n**The Full Solution:**\nDivision with the same base: subtract exponents.\n$\\dfrac{x^{\\frac{5}{2}}}{x^{\\frac{1}{6}}} = x^{\\frac{5}{2} - \\frac{1}{6}}$.\n\nCommon denominator $6$:\n$\\dfrac{5}{2} = \\dfrac{15}{6}, \\quad \\dfrac{15}{6} - \\dfrac{1}{6} = \\dfrac{14}{6} = \\dfrac{7}{3}$.\n\nSo $k = \\dfrac{7}{3}$.\n\nVerification: at $x = 64$, $\\dfrac{64^{\\frac{5}{2}}}{64^{\\frac{1}{6}}} = \\dfrac{32768}{2} = 16384$. And $64^{\\frac{7}{3}} = (64^{\\frac{1}{3}})^7 = 4^7 = 16384$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Adding the exponents instead of subtracting when dividing.\n* Forgetting to reduce $\\dfrac{14}{6}$ to $\\dfrac{7}{3}$.\n\n**Test Day Takeaway:** Divide same-base powers $\\Rightarrow$ subtract exponents. Always reduce the resulting fraction.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'exponent-rules-with-radicals',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-088',
    domain: 'advanced-math',
    skills: ['exponent-laws'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'If $(\\sqrt{x} \\cdot x^2)^3 = x^k$ for $x > 0$, what is the value of $k$? Express your answer as a fraction.',
    correctAnswer: '15/2',
    explanation: '**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $\\dfrac{15}{2}$.**\n\n**The Fast Way (~20s):** Inside: $\\sqrt{x} \\cdot x^2 = x^{\\frac{1}{2} + 2} = x^{\\frac{5}{2}}$. Outer cube: $(x^{\\frac{5}{2}})^3 = x^{\\frac{15}{2}}$.\n\n**The Full Solution:**\nStep 1 — simplify inside the parentheses:\n$\\sqrt{x} \\cdot x^2 = x^{\\frac{1}{2}} \\cdot x^2 = x^{\\frac{1}{2} + 2} = x^{\\frac{5}{2}}$.\n\nStep 2 — apply the outer power (multiply exponents):\n$(x^{\\frac{5}{2}})^3 = x^{\\frac{5}{2} \\cdot 3} = x^{\\frac{15}{2}}$.\n\nSo $k = \\dfrac{15}{2}$.\n\nVerification: at $x = 4$, $(\\sqrt{4} \\cdot 16)^3 = (2 \\cdot 16)^3 = 32^3 = 32768$. And $4^{\\frac{15}{2}} = (4^{\\frac{1}{2}})^{15} = 2^{15} = 32768$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Distributing the outer cube to each factor separately, forgetting that the simplification must come first.\n* Adding the outer exponent instead of multiplying.\n* Writing $\\sqrt{x} = x^2$ instead of $x^{\\frac{1}{2}}$.\n\n**Test Day Takeaway:** Nested exponents: simplify INSIDE the parentheses first (using multiplication of same bases $\\to$ add exponents), then apply the OUTER power (multiply exponents).',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'exponent-rules-with-radicals',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-089',
    domain: 'advanced-math',
    skills: ['exponent-laws'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'If $\\dfrac{x^{\\frac{7}{2}} \\cdot x^{-\\frac{2}{3}}}{x^{\\frac{1}{6}}} = x^k$ for $x > 0$, what is the value of $k$? Express your answer as a fraction.',
    correctAnswer: '8/3',
    explanation: '**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $\\dfrac{8}{3}$.**\n\n**The Fast Way (~25s):** Combine: $\\dfrac{7}{2} - \\dfrac{2}{3} - \\dfrac{1}{6} = \\dfrac{21}{6} - \\dfrac{4}{6} - \\dfrac{1}{6} = \\dfrac{16}{6} = \\dfrac{8}{3}$.\n\n**The Full Solution:**\nApply the product and quotient rules together. Numerator: $x^{\\frac{7}{2}} \\cdot x^{-\\frac{2}{3}} = x^{\\frac{7}{2} - \\frac{2}{3}}$. Then divide by $x^{\\frac{1}{6}}$: subtract $\\dfrac{1}{6}$.\n\nNet exponent: $\\dfrac{7}{2} - \\dfrac{2}{3} - \\dfrac{1}{6}$.\n\nCommon denominator $6$:\n$\\dfrac{7}{2} = \\dfrac{21}{6}, \\quad \\dfrac{2}{3} = \\dfrac{4}{6}, \\quad \\dfrac{1}{6} = \\dfrac{1}{6}$.\n\nCompute: $\\dfrac{21}{6} - \\dfrac{4}{6} - \\dfrac{1}{6} = \\dfrac{21 - 4 - 1}{6} = \\dfrac{16}{6} = \\dfrac{8}{3}$.\n\nSo $k = \\dfrac{8}{3}$.\n\nVerification: at $x = 8$, $\\dfrac{8^{\\frac{7}{2}} \\cdot 8^{-\\frac{2}{3}}}{8^{\\frac{1}{6}}} = \\dfrac{(2\\sqrt{2})^7 \\cdot 4^{-1}}{\\sqrt[6]{8}}$. Easier: $8^{\\frac{8}{3}} = (8^{\\frac{1}{3}})^8 = 2^8 = 256$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Treating the negative exponent as a sign on the base: $x^{-\\frac{2}{3}}$ is in the numerator but contributes a SUBTRACTION to the exponent sum.\n* Adding the denominator\'s exponent instead of subtracting.\n* Combining $\\dfrac{21 - 4 - 1}{6}$ as $\\dfrac{18}{6} = 3$ (off-by-one error).\n\n**Test Day Takeaway:** Sign discipline: positive exponents add when bases multiply, denominator exponents subtract, and a negative exponent contributes a subtraction. Track all three signs in one expression.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'exponent-rules-with-radicals',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-090',
    domain: 'advanced-math',
    skills: ['exponent-laws'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'If $a^{\\frac{2}{5}} = 9$ for $a > 0$, what is the value of $a^{\\frac{6}{5}}$?',
    choices: [
      // distractor: multiplies 9 by 3 (the exponent ratio 6/5 ÷ 2/5)
      { id: 'A', text: '$27$' },
      // distractor: triples 9
      { id: 'B', text: '$72$' },
      { id: 'C', text: '$729$' },
      // distractor: solves for a (243) and reports it
      { id: 'D', text: '$243$' }
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Exponent Rules with Radicals**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $\\dfrac{6}{5} = 3 \\cdot \\dfrac{2}{5}$, so $a^{\\frac{6}{5}} = (a^{\\frac{2}{5}})^3 = 9^3 = 729$.\n\n**The Full Solution:**\nGiven $a^{\\frac{2}{5}} = 9$, we want $a^{\\frac{6}{5}}$.\nObserve that $\\dfrac{6}{5} = 3 \\cdot \\dfrac{2}{5}$.\nBy the power-of-a-power rule:\n$a^{\\frac{6}{5}} = a^{3 \\cdot \\frac{2}{5}} = (a^{\\frac{2}{5}})^3 = 9^3 = 729$.\n\nVerification: solve for $a$: $a^{\\frac{2}{5}} = 9 \\Rightarrow a = 9^{\\frac{5}{2}} = (9^{\\frac{1}{2}})^5 = 3^5 = 243$. Then $a^{\\frac{6}{5}} = 243^{\\frac{6}{5}} = (243^{\\frac{1}{5}})^6 = 3^6 = 729$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong formula" — multiplies $9 \\cdot 3 = 27$, treating exponent ratio as a multiplier.\n* Choice B: "off-by-one" — gives $9 \\cdot 8$ or similar arithmetic slip.\n* Choice D: "stops one step early" — solves for $a = 243$ and reports $a$ instead of $a^{\\frac{6}{5}}$.\n\n**Test Day Takeaway:** When you know $a^n$ and need $a^m$, write $m = k \\cdot n$ so $a^m = (a^n)^k$. Avoid solving for $a$ directly — it costs more steps.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'exponent-rules-with-radicals',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-091',
    domain: 'advanced-math',
    skills: ['exponent-laws'],
    difficulty: 'hard',
    type: 'fill-in',
    question: 'If $\\dfrac{\\sqrt[3]{x^4}}{\\sqrt[5]{x^2}} = x^{\\frac{p}{q}}$ for $x > 0$, where $\\dfrac{p}{q}$ is in lowest terms, what is the value of $p + q$?',
    correctAnswer: '29',
    explanation: '**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $29$.**\n\n**The Fast Way (~30s):** $\\sqrt[3]{x^4} = x^{\\frac{4}{3}}$, $\\sqrt[5]{x^2} = x^{\\frac{2}{5}}$. Subtract: $\\dfrac{4}{3} - \\dfrac{2}{5} = \\dfrac{20}{15} - \\dfrac{6}{15} = \\dfrac{14}{15}$. $\\gcd(14, 15) = 1$, so $p = 14$, $q = 15$, $p + q = 29$.\n\n**The Full Solution:**\nConvert each radical to fractional exponents:\n$\\sqrt[3]{x^4} = x^{\\frac{4}{3}}, \\quad \\sqrt[5]{x^2} = x^{\\frac{2}{5}}$.\n\nDivision rule: subtract exponents.\n$\\dfrac{x^{\\frac{4}{3}}}{x^{\\frac{2}{5}}} = x^{\\frac{4}{3} - \\frac{2}{5}}$.\n\nCommon denominator $15$:\n$\\dfrac{4}{3} = \\dfrac{20}{15}, \\quad \\dfrac{2}{5} = \\dfrac{6}{15}, \\quad \\dfrac{20}{15} - \\dfrac{6}{15} = \\dfrac{14}{15}$.\n\nCheck lowest terms: $\\gcd(14, 15) = 1$, so $\\dfrac{14}{15}$ is reduced.\n$p = 14$, $q = 15$, $p + q = 29$.\n\n**Common Mistakes to Avoid:**\n* Writing $\\sqrt[5]{x^2} = x^{\\frac{5}{2}}$ (inverting numerator and index).\n* Adding the exponents instead of subtracting when dividing.\n* Reporting just $p$ ($14$) and forgetting to add $q$.\n* Failing to reduce a non-reduced fraction before reading off $p$ and $q$.\n\n**Test Day Takeaway:** $\\sqrt[n]{x^m} = x^{\\frac{m}{n}}$ — power UP, root DOWN. Divide $\\Rightarrow$ subtract exponents. Always reduce before reading $p$ and $q$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'exponent-rules-with-radicals',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },

  // === VERTEX FORM FROM TWO CONDITIONS (8 questions) — Phase 2 batch 2 ===
  // 12x in 12 tests. Covers: solve-for-a from vertex+point, h+k/h-k/a+k
  // recovery from given form, y-intercept from vertex+point, function shift +
  // minimum, minimum-condition + point. SAT Pattern kebab matches:
  // 'vertex-form-from-two-conditions'.
  {
    id: 'bank-am-092',
    domain: 'advanced-math',
    skills: ['vertex-form', 'function-evaluation'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'In the $xy$-plane, a parabola with equation $y = a(x - 4)^2 + 3$ passes through the point $(5, 7)$. What is the value of $a$?',
    correctAnswer: '4',
    explanation: '**SAT Pattern: Vertex Form from Two Conditions**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~10s):** Plug in: $7 = a(5 - 4)^2 + 3 = a + 3$. So $a = 4$.\n\n**The Full Solution:**\nSubstitute $(x, y) = (5, 7)$ into $y = a(x - 4)^2 + 3$:\n$7 = a(5 - 4)^2 + 3$\n$7 = a(1)^2 + 3$\n$7 = a + 3$\n$a = 4$.\n\nVerification: $y = 4(x - 4)^2 + 3$. At $x = 5$: $4(1) + 3 = 7$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Forgetting to square the $(5 - 4)$ factor (in this case it equals $1$ either way, but in similar problems with $(5 - 3)^2 = 4 \\neq 2$ it matters).\n* Subtracting $3$ from $7$ in the wrong direction.\n\n**Test Day Takeaway:** To solve for $a$ in vertex form $y = a(x - h)^2 + k$, plug in a known point, isolate $a$, divide by the squared factor.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'vertex-form-from-two-conditions',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-093',
    domain: 'advanced-math',
    skills: ['vertex-form', 'function-evaluation'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'The graph of $y = (x - 2)^2 - 3$ is a parabola in the $xy$-plane. What is the $y$-intercept of the parabola?',
    choices: [
      // distractor: gives vertex y-coordinate
      { id: 'A', text: '$-3$' },
      // distractor: gives -2 (vertex x with sign issue)
      { id: 'B', text: '$-2$' },
      { id: 'C', text: '$1$' },
      // distractor: gives 4 (forgot to subtract 3)
      { id: 'D', text: '$4$' }
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $y$-intercept means $x = 0$: $y = (0 - 2)^2 - 3 = 4 - 3 = 1$.\n\n**The Full Solution:**\nThe $y$-intercept of a graph is its $y$-value when $x = 0$.\n\nSubstitute $x = 0$ into $y = (x - 2)^2 - 3$:\n$y = (0 - 2)^2 - 3 = (-2)^2 - 3 = 4 - 3 = 1$.\n\nVerification: the vertex is at $(2, -3)$. Moving $2$ units LEFT from the vertex (to $x = 0$) and applying the squared term lifts $y$ by $4$, giving $-3 + 4 = 1$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — gives the vertex $y$-coordinate ($-3$) instead of evaluating at $x = 0$.\n* Choice B: "wrong base" — gives $-2$ (sign-flipped vertex $x$).\n* Choice D: "stops one step early" — computes $(0 - 2)^2 = 4$ and forgets to subtract $3$.\n\n**Test Day Takeaway:** $y$-intercept: substitute $x = 0$ and compute. Don\'t conflate $y$-intercept with vertex $y$ unless the vertex happens to be on the $y$-axis.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'vertex-form-from-two-conditions',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-094',
    domain: 'advanced-math',
    skills: ['vertex-form'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'The parabola defined by $y = 3(x - h)^2 + k$ has its vertex at $(2, -5)$ and passes through the point $(4, 7)$. What is the value of $h + k$?',
    correctAnswer: '-3',
    explanation: '**SAT Pattern: Vertex Form from Two Conditions**\n\n**The correct answer is $-3$.**\n\n**The Fast Way (~10s):** Vertex form $y = a(x - h)^2 + k$ has vertex at $(h, k)$. So $h = 2$, $k = -5$. $h + k = 2 + (-5) = -3$.\n\n**The Full Solution:**\nThe vertex form $y = a(x - h)^2 + k$ has its vertex at the point $(h, k)$. The given vertex $(2, -5)$ tells us directly:\n$h = 2, \\quad k = -5$.\n\nVerify against the passing point: $y = 3(4 - 2)^2 + (-5) = 3(4) - 5 = 12 - 5 = 7$ \\checkmark (matches the given $(4, 7)$).\n\n$h + k = 2 + (-5) = -3$.\n\n**Common Mistakes to Avoid:**\n* Reading the vertex as $(h, k) = (-2, 5)$ because the form has $(x - h)$ — but the sign in the form is already accounted for: if the vertex is at $x = 2$, then $h = 2$, not $-2$.\n* Confusing $h$ and $k$ (using the $y$-coord as $h$).\n* Adding rather than reporting the asked combination (e.g., reporting $-7$ from $h - k$).\n\n**Test Day Takeaway:** In $y = a(x - h)^2 + k$, the vertex is at $(h, k)$ — same sign convention as the form suggests. Read $(h, k)$ directly off the vertex coordinates.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'vertex-form-from-two-conditions',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-095',
    domain: 'advanced-math',
    skills: ['vertex-form'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'The parabola defined by $y = -2(x - h)^2 + k$ has its vertex at $(3, 8)$ and passes through the point $(5, 0)$. What is the value of $h - k$?',
    correctAnswer: '-5',
    explanation: '**SAT Pattern: Vertex Form from Two Conditions**\n\n**The correct answer is $-5$.**\n\n**The Fast Way (~10s):** Vertex $(h, k) = (3, 8)$, so $h - k = 3 - 8 = -5$.\n\n**The Full Solution:**\nIn vertex form $y = a(x - h)^2 + k$, the vertex is $(h, k)$. Given vertex $(3, 8)$:\n$h = 3, \\quad k = 8$.\n\nVerify with the passing point $(5, 0)$:\n$y = -2(5 - 3)^2 + 8 = -2(4) + 8 = -8 + 8 = 0$ \\checkmark (matches the given $y = 0$).\n\n$h - k = 3 - 8 = -5$.\n\n**Common Mistakes to Avoid:**\n* Reporting $11$ ($h + k$) instead of $h - k$.\n* Reporting $5$ ($k - h$, sign flip).\n* Confusing the negative coefficient $a = -2$ with the values of $h$ or $k$.\n\n**Test Day Takeaway:** Re-read the LAST sentence: it asks for a specific combination ($h - k$, $h + k$, $a + k$, etc.). Identify $(h, k)$ first, then compute the asked combination.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'vertex-form-from-two-conditions',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-096',
    domain: 'advanced-math',
    skills: ['vertex-form', 'function-evaluation'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'In the $xy$-plane, a parabola has vertex $(3, -4)$ and passes through the point $(5, 8)$. What is the $y$-intercept of this parabola?',
    choices: [
      // distractor: gives the vertex y-coord
      { id: 'A', text: '$-4$' },
      // distractor: just plugs x=0 without solving for a (uses a=1)
      { id: 'B', text: '$5$' },
      { id: 'C', text: '$23$' },
      // distractor: y-intercept calculated with wrong sign on (0-3)^2
      { id: 'D', text: '$-23$' }
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** $y = a(x - 3)^2 - 4$. From $(5, 8)$: $8 = a(4) - 4 \\Rightarrow a = 3$. $y$-intercept: $y(0) = 3(9) - 4 = 23$.\n\n**The Full Solution:**\nStep 1 — write the vertex form using the given vertex:\n$y = a(x - 3)^2 + (-4) = a(x - 3)^2 - 4$.\n\nStep 2 — solve for $a$ using the passing point $(5, 8)$:\n$8 = a(5 - 3)^2 - 4$\n$8 = 4a - 4$\n$4a = 12$\n$a = 3$.\n\nStep 3 — evaluate at $x = 0$ to find the $y$-intercept:\n$y = 3(0 - 3)^2 - 4 = 3 \\cdot 9 - 4 = 27 - 4 = 23$.\n\nVerification: at $x = 5$, $y = 3(2)^2 - 4 = 12 - 4 = 8$ \\checkmark. At $x = 0$, $y = 23$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "stops one step early" — reports the vertex $y$-coord without computing the $y$-intercept.\n* Choice B: "wrong base" — assumes $a = 1$ and skips Step 2: $(0 - 3)^2 - 4 = 9 - 4 = 5$.\n* Choice D: "sign error" — sign mistake on $(0 - 3)^2$, getting $-9$ instead of $+9$.\n\n**Test Day Takeaway:** Three steps for parabolas with vertex + point: (1) write vertex form using $(h, k)$, (2) solve for $a$ using the second condition, (3) evaluate at $x = 0$ (or wherever asked).',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'vertex-form-from-two-conditions',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-097',
    domain: 'advanced-math',
    skills: ['vertex-form', 'function-transformations'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = (x - 2)^2 + 3$. The function $g$ is defined by $g(x) = f(x + 4) - 5$. For what value of $x$ does $g$ attain its minimum value?',
    choices: [
      // distractor: subtracts 4 from wrong baseline (uses vertex y)
      { id: 'A', text: '$-1$' },
      { id: 'B', text: '$-2$' },
      // distractor: adds 4 instead of subtracting
      { id: 'C', text: '$6$' },
      // distractor: uses 4 without combining with original vertex
      { id: 'D', text: '$2$' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $f$ has min at $x = 2$. $g(x) = f(x + 4) - 5$ shifts $f$ LEFT by $4$, so $g$\'s min is at $x = 2 - 4 = -2$.\n\n**The Full Solution:**\n$f(x) = (x - 2)^2 + 3$ has vertex at $(2, 3)$ — a minimum (parabola opens upward).\n\n$g(x) = f(x + 4) - 5$ applies two transformations to $f$:\n1. Replacing $x$ with $x + 4$ shifts the graph LEFT by $4$ units.\n2. Subtracting $5$ shifts the graph DOWN by $5$ units.\n\nThe shift left moves the vertex $x$-coordinate from $2$ to $2 - 4 = -2$. The shift down moves the vertex $y$-coordinate from $3$ to $3 - 5 = -2$.\n\n$g$ attains its minimum at $x = -2$ (with $g(-2) = -2$).\n\nVerification: $g(-2) = f(-2 + 4) - 5 = f(2) - 5 = (0)^2 + 3 - 5 = -2$ \\checkmark. For any other $x$, $g(x) > -2$.\n\n**Why the wrong answers are tempting:**\n* Choice A: "off-by-one" — subtracts $4$ from the vertex $y$ instead of vertex $x$, giving $3 - 4 = -1$.\n* Choice C: "applies the inverse operation" — adds $4$ instead of subtracting (treats $f(x + 4)$ as a RIGHT shift).\n* Choice D: "stops one step early" — reports $f$\'s original vertex $x$ without applying the shift.\n\n**Test Day Takeaway:** $f(x + c)$ shifts LEFT by $c$ (not right). The trick: setting the inside expression $x + c$ to equal the original min argument $x_0$ gives $x = x_0 - c$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'vertex-form-from-two-conditions',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-098',
    domain: 'advanced-math',
    skills: ['vertex-form', 'function-evaluation'],
    difficulty: 'hard',
    type: 'fill-in',
    question: 'The function $f$ is defined by $f(x) = a(x - h)^2 + k$, where $a$, $h$, and $k$ are constants. $f$ has a minimum value of $-5$ at $x = 3$ and $f(7) = 27$. What is the value of $f(0)$?',
    correctAnswer: '13',
    explanation: '**SAT Pattern: Vertex Form from Two Conditions**\n\n**The correct answer is $13$.**\n\n**The Fast Way (~25s):** Min $-5$ at $x = 3$ $\\Rightarrow$ vertex $(3, -5)$, so $h = 3$, $k = -5$. From $f(7) = 27$: $27 = a(16) - 5 \\Rightarrow a = 2$. $f(0) = 2(9) - 5 = 13$.\n\n**The Full Solution:**\nStep 1 — the minimum value of $f$ tells us $(h, k)$:\n* Minimum value $-5$ $\\Rightarrow$ $k = -5$.\n* Achieved at $x = 3$ $\\Rightarrow$ $h = 3$.\n* (Since $f$ has a minimum, $a > 0$.)\n\nSo $f(x) = a(x - 3)^2 - 5$.\n\nStep 2 — use $f(7) = 27$ to solve for $a$:\n$27 = a(7 - 3)^2 - 5$\n$27 = 16a - 5$\n$16a = 32$\n$a = 2$.\n\nFull form: $f(x) = 2(x - 3)^2 - 5$.\n\nStep 3 — evaluate at $x = 0$:\n$f(0) = 2(0 - 3)^2 - 5 = 2 \\cdot 9 - 5 = 18 - 5 = 13$.\n\nVerification: $f(3) = 0 - 5 = -5$ (the minimum) \\checkmark. $f(7) = 2(16) - 5 = 27$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reading "minimum value $-5$" as $h = -5$ instead of $k = -5$ (the value is the $y$-coordinate, the location is the $x$-coordinate).\n* Forgetting to square $(7 - 3) = 4$ before solving for $a$.\n* Computing $f(0)$ with the wrong $a$.\n\n**Test Day Takeaway:** "Minimum/maximum value of $f$ at $x = x_0$" gives the vertex directly: $(x_0, $ min/max value$)$. Build the form, then use the second condition to find $a$, then evaluate wherever asked.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'vertex-form-from-two-conditions',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-099',
    domain: 'advanced-math',
    skills: ['vertex-form'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'The parabola defined by $y = -2(x - h)^2 + k$ has its vertex at $(5, 16)$ and passes through the point $(3, 8)$. What is the value of $h - k$?',
    choices: [
      { id: 'A', text: '$-11$' },
      // distractor: h+k instead of h-k
      { id: 'B', text: '$21$' },
      // distractor: sign-flip on h-k
      { id: 'C', text: '$11$' },
      // distractor: -h-k
      { id: 'D', text: '$-21$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Vertex $(h, k) = (5, 16)$, so $h - k = 5 - 16 = -11$. The passing point is a CONSISTENCY CHECK, not needed to find $h$ and $k$.\n\n**The Full Solution:**\nThe vertex form $y = a(x - h)^2 + k$ has vertex at $(h, k)$. Given vertex $(5, 16)$:\n$h = 5, \\quad k = 16$.\n\nVerify with the passing point $(3, 8)$ — the value of $a$ is already given as $-2$:\n$y = -2(3 - 5)^2 + 16 = -2(4) + 16 = -8 + 16 = 8$ \\checkmark.\n\nThe equation is consistent. Compute the requested combination:\n$h - k = 5 - 16 = -11$.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong formula" — reports $h + k = 5 + 16 = 21$ instead of $h - k$.\n* Choice C: "sign error" — gives $|h - k|$ or computes $k - h = 16 - 5 = 11$ (sign flip).\n* Choice D: "applies the inverse operation" — gives $-(h + k) = -21$.\n\n**Test Day Takeaway:** When the question asks for $h - k$ (or any specific combination), the passing point is often a CONSISTENCY CHECK rather than a constraint to solve. Read the vertex directly, verify the math, then compute the asked combination.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'vertex-form-from-two-conditions',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },

  // === RATIONAL EXPRESSION SIMPLIFICATION (8 questions) — Phase 2 batch 3 ===
  // 10x in 12 tests. Covers: simplify single fraction by factoring,
  // multiply two rationals, add rationals, solve rational equation,
  // identify equivalent factored form.
  // SAT Pattern kebab matches test bundle: 'rational-expression-simplification'.
  {
    id: 'bank-am-100',
    domain: 'advanced-math',
    skills: ['simplifying-rational-expressions', 'difference-of-squares'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'Which expression is equivalent to $\\dfrac{x^2 - 9}{x - 3}$ for all values of $x$ where the expression is defined?',
    choices: [
      // distractor: subtracts incorrectly
      { id: 'A', text: '$x - 3$' },
      { id: 'B', text: '$x + 3$' },
      // distractor: divides each term separately
      { id: 'C', text: '$x^2 - 3$' },
      // distractor: cancels wrong
      { id: 'D', text: '$3$' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Rational Expression Simplification**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Factor numerator: $x^2 - 9 = (x - 3)(x + 3)$. Cancel $(x - 3)$ with denominator: result is $x + 3$.\n\n**The Full Solution:**\nFactor the numerator using the difference of squares:\n$x^2 - 9 = (x - 3)(x + 3)$.\n\n$\\dfrac{x^2 - 9}{x - 3} = \\dfrac{(x - 3)(x + 3)}{x - 3} = x + 3$ (for $x \\neq 3$).\n\nVerification: at $x = 5$, $\\dfrac{25 - 9}{5 - 3} = \\dfrac{16}{2} = 8 = 5 + 3$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "sign error" — pairs the $-3$ but uses the wrong factor of the difference of squares.\n* Choice C: "wrong formula" — divides $x^2 / x$ and $-9/-3$ separately as if the expression splits term-by-term (it does not — the denominator divides the WHOLE numerator).\n* Choice D: "wrong base" — cancels the $x$ terms and the constants separately.\n\n**Test Day Takeaway:** Factor first, then cancel matching factors. $a^2 - b^2 = (a - b)(a + b)$ is the difference-of-squares pattern.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'rational-expression-simplification',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-101',
    domain: 'advanced-math',
    skills: ['simplifying-rational-expressions', 'difference-of-squares'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'Which expression is equivalent to $\\dfrac{x^2 - 25}{x^2 + 5x}$ for all values of $x$ where the expression is defined?',
    choices: [
      // distractor: cancels x²/x² = 1 wrongly
      { id: 'A', text: '$\\dfrac{-25}{5x}$' },
      { id: 'B', text: '$\\dfrac{x - 5}{x}$' },
      // distractor: cancels (x+5)/x instead of cancelling fully
      { id: 'C', text: '$\\dfrac{x - 5}{5}$' },
      // distractor: factors incorrectly
      { id: 'D', text: '$\\dfrac{x + 5}{x}$' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Rational Expression Simplification**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Factor: $(x-5)(x+5) / [x(x+5)]$. Cancel $(x+5)$: $\\dfrac{x - 5}{x}$.\n\n**The Full Solution:**\nFactor numerator and denominator:\n* Numerator: $x^2 - 25 = (x - 5)(x + 5)$.\n* Denominator: $x^2 + 5x = x(x + 5)$.\n\n$\\dfrac{(x - 5)(x + 5)}{x(x + 5)} = \\dfrac{x - 5}{x}$ (cancel the common factor $(x + 5)$, valid for $x \\neq -5$ and $x \\neq 0$).\n\nVerification: at $x = 10$, $\\dfrac{100 - 25}{100 + 50} = \\dfrac{75}{150} = \\dfrac{1}{2}$. And $\\dfrac{10 - 5}{10} = \\dfrac{5}{10} = \\dfrac{1}{2}$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong formula" — cancels $x^2 / x^2 = 1$ leaving $-25 / 5x$, but you can\'t cancel partial sums like that.\n* Choice C: "wrong base" — cancels the wrong factor; leaves $5$ in denominator instead of $x$.\n* Choice D: "sign error" — picks the wrong factor of the difference of squares.\n\n**Test Day Takeaway:** Always factor BOTH numerator and denominator FULLY before cancelling. Cancel only WHOLE common factors, never individual terms within a sum.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'rational-expression-simplification',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-102',
    domain: 'advanced-math',
    skills: ['simplifying-rational-expressions', 'perfect-square-trinomial', 'difference-of-squares'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'Which expression is equivalent to $\\dfrac{x^2 + 8x + 16}{x^2 - 16}$ for all values of $x$ where the expression is defined?',
    choices: [
      // distractor: ignores sign in difference of squares
      { id: 'A', text: '$\\dfrac{x + 4}{x + 4}$' },
      { id: 'B', text: '$\\dfrac{x + 4}{x - 4}$' },
      // distractor: doesn't square (x+4)^2
      { id: 'C', text: '$\\dfrac{1}{x - 4}$' },
      // distractor: factors trinomial wrong
      { id: 'D', text: '$\\dfrac{x - 4}{x + 4}$' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Rational Expression Simplification**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Factor: $(x + 4)^2 / [(x - 4)(x + 4)]$. Cancel ONE $(x + 4)$: $\\dfrac{x + 4}{x - 4}$.\n\n**The Full Solution:**\nFactor numerator and denominator:\n* Numerator: $x^2 + 8x + 16 = (x + 4)^2 = (x + 4)(x + 4)$ (perfect square).\n* Denominator: $x^2 - 16 = (x - 4)(x + 4)$ (difference of squares).\n\n$\\dfrac{(x + 4)(x + 4)}{(x - 4)(x + 4)} = \\dfrac{x + 4}{x - 4}$ (cancel ONE $(x + 4)$, valid for $x \\neq -4$ and $x \\neq 4$).\n\nVerification: at $x = 5$, $\\dfrac{25 + 40 + 16}{25 - 16} = \\dfrac{81}{9} = 9$. And $\\dfrac{5 + 4}{5 - 4} = \\dfrac{9}{1} = 9$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "stops one step early" — doesn\'t recognize the difference of squares; treats the denominator as $(x + 4)$ alone.\n* Choice C: "wrong formula" — cancels BOTH $(x + 4)$ factors, leaving only $1 / (x - 4)$.\n* Choice D: "sign error" — swaps which factor is cancelled, putting $(x - 4)$ on top.\n\n**Test Day Takeaway:** Perfect square trinomial: $a^2 + 2ab + b^2 = (a + b)^2$. Difference of squares: $a^2 - b^2 = (a - b)(a + b)$. With a $(a + b)^2$ on top and $(a - b)(a + b)$ on bottom, only ONE factor cancels.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'rational-expression-simplification',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-103',
    domain: 'advanced-math',
    skills: ['simplifying-rational-expressions', 'difference-of-squares'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'Which expression is equivalent to $\\dfrac{x^2 - 4}{x + 3} \\cdot \\dfrac{x + 3}{x - 2}$ for all values of $x$ where the expression is defined?',
    choices: [
      // distractor: forgets to cancel (x-2)
      { id: 'A', text: '$\\dfrac{(x + 2)(x + 3)}{x - 2}$' },
      { id: 'B', text: '$x + 2$' },
      // distractor: doesn't factor (x²-4)
      { id: 'C', text: '$\\dfrac{x^2 - 4}{x - 2}$' },
      // distractor: sign error: x-2 instead of x+2
      { id: 'D', text: '$x - 2$' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Rational Expression Simplification**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Factor $x^2 - 4 = (x - 2)(x + 2)$. The product is $\\dfrac{(x - 2)(x + 2)(x + 3)}{(x + 3)(x - 2)} = x + 2$ (after canceling $(x + 3)$ and $(x - 2)$).\n\n**The Full Solution:**\nFactor the numerator of the first fraction: $x^2 - 4 = (x - 2)(x + 2)$.\n\nWrite the product:\n$\\dfrac{(x - 2)(x + 2)}{x + 3} \\cdot \\dfrac{x + 3}{x - 2} = \\dfrac{(x - 2)(x + 2)(x + 3)}{(x + 3)(x - 2)}$.\n\nCancel the common factors $(x + 3)$ and $(x - 2)$ (valid for $x \\neq -3$ and $x \\neq 2$):\n$= x + 2$.\n\nVerification: at $x = 5$, $\\dfrac{25 - 4}{5 + 3} \\cdot \\dfrac{5 + 3}{5 - 2} = \\dfrac{21}{8} \\cdot \\dfrac{8}{3} = \\dfrac{168}{24} = 7 = 5 + 2$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "stops one step early" — cancels $(x + 3)$ but forgets to cancel $(x - 2)$.\n* Choice C: "stops one step early" — never factors $(x^2 - 4)$, so $(x - 2)$ never cancels.\n* Choice D: "sign error" — picks the wrong factor of the difference of squares.\n\n**Test Day Takeaway:** Before multiplying rational expressions, FACTOR everything first. Then cancel matching factors before computing the product.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'rational-expression-simplification',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-104',
    domain: 'advanced-math',
    skills: ['simplifying-rational-expressions', 'difference-of-squares'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'Which expression is equivalent to $\\dfrac{4x^2 - 9}{2x^2 - x - 3}$ for all values of $x$ where the expression is defined?',
    choices: [
      // distractor: factors numerator wrong
      { id: 'A', text: '$\\dfrac{2x - 3}{x - 1}$' },
      { id: 'B', text: '$\\dfrac{2x + 3}{x + 1}$' },
      // distractor: doesn't factor (4x²-9)
      { id: 'C', text: '$\\dfrac{4x^2 - 9}{x + 1}$' },
      // distractor: factors denominator wrong
      { id: 'D', text: '$\\dfrac{2x + 3}{x - 1}$' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Rational Expression Simplification**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $4x^2 - 9 = (2x - 3)(2x + 3)$. Factor denominator: $2x^2 - x - 3 = (2x - 3)(x + 1)$. Cancel $(2x - 3)$: $\\dfrac{2x + 3}{x + 1}$.\n\n**The Full Solution:**\nFactor numerator (difference of squares with $2x$ and $3$):\n$4x^2 - 9 = (2x)^2 - 3^2 = (2x - 3)(2x + 3)$.\n\nFactor denominator (search for two numbers multiplying to $2 \\cdot (-3) = -6$ and summing to $-1$ — the coefficient of $x$): $-3$ and $2$ work.\n$2x^2 - x - 3 = 2x^2 - 3x + 2x - 3 = x(2x - 3) + (2x - 3) = (2x - 3)(x + 1)$.\n\nSimplify:\n$\\dfrac{(2x - 3)(2x + 3)}{(2x - 3)(x + 1)} = \\dfrac{2x + 3}{x + 1}$ (cancel $(2x - 3)$, valid for $x \\neq 3/2$ and $x \\neq -1$).\n\nVerification: at $x = 2$, $\\dfrac{16 - 9}{8 - 2 - 3} = \\dfrac{7}{3}$. And $\\dfrac{4 + 3}{2 + 1} = \\dfrac{7}{3}$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "sign error" — keeps $(2x - 3)$ as the remaining numerator factor (it should be $(2x + 3)$).\n* Choice C: "stops one step early" — doesn\'t factor the numerator.\n* Choice D: "sign error" — produces $(x - 1)$ in the denominator instead of $(x + 1)$ via wrong factoring.\n\n**Test Day Takeaway:** $a^2 - b^2 = (a - b)(a + b)$ works even with composite "$a$" like $2x$. For trinomials $ax^2 + bx + c$, find two numbers multiplying to $ac$ and summing to $b$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'rational-expression-simplification',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-105',
    domain: 'advanced-math',
    skills: ['simplifying-rational-expressions'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'Which expression is equivalent to $\\dfrac{3}{x - 1} + \\dfrac{2}{x + 2}$ for all values of $x$ where the expression is defined?',
    choices: [
      // distractor: adds numerators and denominators separately
      { id: 'A', text: '$\\dfrac{5}{2x + 1}$' },
      { id: 'B', text: '$\\dfrac{5x + 4}{(x - 1)(x + 2)}$' },
      // distractor: forgets to distribute when combining
      { id: 'C', text: '$\\dfrac{5}{(x - 1)(x + 2)}$' },
      // distractor: sign error on numerator
      { id: 'D', text: '$\\dfrac{5x - 4}{(x - 1)(x + 2)}$' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Rational Expression Simplification**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** LCD $= (x - 1)(x + 2)$. Numerator: $3(x + 2) + 2(x - 1) = 3x + 6 + 2x - 2 = 5x + 4$.\n\n**The Full Solution:**\nFind a common denominator: $(x - 1)(x + 2)$.\n\nRewrite each fraction:\n$\\dfrac{3}{x - 1} = \\dfrac{3(x + 2)}{(x - 1)(x + 2)}$\n$\\dfrac{2}{x + 2} = \\dfrac{2(x - 1)}{(x - 1)(x + 2)}$\n\nAdd:\n$\\dfrac{3(x + 2) + 2(x - 1)}{(x - 1)(x + 2)} = \\dfrac{3x + 6 + 2x - 2}{(x - 1)(x + 2)} = \\dfrac{5x + 4}{(x - 1)(x + 2)}$.\n\nVerification: at $x = 2$, $\\dfrac{3}{1} + \\dfrac{2}{4} = 3 + 0.5 = 3.5$. And $\\dfrac{14}{(1)(4)} = \\dfrac{14}{4} = 3.5$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong formula" — adds the numerators ($3 + 2 = 5$) AND the denominators ($x - 1 + x + 2 = 2x + 1$) as if you can add fractions term-by-term.\n* Choice C: "stops one step early" — finds the common denominator but forgets to multiply each numerator by the OTHER fraction\'s denominator.\n* Choice D: "sign error" — gets $5x - 4$ instead of $5x + 4$ by mistakenly distributing $2(x - 1)$ as $2x - 2$ then sign-flipping.\n\n**Test Day Takeaway:** Adding rational expressions: find the LCD first, multiply each numerator by what\'s missing from its denominator, then add. Never add term-by-term.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'rational-expression-simplification',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-106',
    domain: 'advanced-math',
    skills: ['simplifying-rational-expressions'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'How many real solutions does the equation $\\dfrac{3}{x - 2} + \\dfrac{4}{x + 2} = \\dfrac{14}{x^2 - 4}$ have?',
    choices: [
      // distractor: claims no solutions (mistakenly identifies x=2 or -2 as extraneous when it's not)
      { id: 'A', text: '$0$' },
      { id: 'B', text: '$1$' },
      // distractor: counts both solutions of expanded quadratic
      { id: 'C', text: '$2$' },
      // distractor: claims infinitely many (linear → no solution)
      { id: 'D', text: 'Infinitely many' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Rational Expression Simplification**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Multiply by LCD $(x - 2)(x + 2)$: $3(x + 2) + 4(x - 2) = 14 \\Rightarrow 7x - 2 = 14 \\Rightarrow x = \\dfrac{16}{7}$. Check: $x = 16/7$ is neither $2$ nor $-2$, so it\'s a valid solution. ONE real solution.\n\n**The Full Solution:**\nMultiply both sides by the LCD $(x - 2)(x + 2) = x^2 - 4$:\n$3(x + 2) + 4(x - 2) = 14$\n$3x + 6 + 4x - 8 = 14$\n$7x - 2 = 14$\n$7x = 16$\n$x = \\dfrac{16}{7}$.\n\nCheck for extraneous solutions: the original equation excludes $x = 2$ and $x = -2$ (denominators zero). Since $\\dfrac{16}{7} \\neq 2$ and $\\dfrac{16}{7} \\neq -2$, the solution is valid.\n\nNumber of real solutions: **$1$**.\n\nVerification: at $x = 16/7$, $\\dfrac{3}{16/7 - 2} + \\dfrac{4}{16/7 + 2} = \\dfrac{3}{2/7} + \\dfrac{4}{30/7} = \\dfrac{21}{2} + \\dfrac{28}{30} = 10.5 + 0.933 \\approx 11.43$. And $\\dfrac{14}{(16/7)^2 - 4} = \\dfrac{14}{256/49 - 196/49} = \\dfrac{14}{60/49} = \\dfrac{14 \\cdot 49}{60} = \\dfrac{686}{60} \\approx 11.43$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — flags the only solution as extraneous despite it being valid.\n* Choice C: "wrong formula" — expects a quadratic structure and counts two solutions, but the equation simplifies to a LINEAR one.\n* Choice D: "wrong base" — would only happen if both sides reduced to an identity, which they don\'t.\n\n**Test Day Takeaway:** Rational equations: multiply by LCD, solve the resulting polynomial, then CHECK against the original denominator restrictions. Only count solutions that don\'t zero a denominator.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'rational-expression-simplification',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-107',
    domain: 'advanced-math',
    skills: ['simplifying-rational-expressions', 'finding-roots-factoring'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'Which expression is equivalent to $\\dfrac{x^2 - 9}{x^2 + 5x + 6} \\cdot \\dfrac{x^2 + 4x + 4}{x^2 - x - 6}$ for all values of $x$ where the expression is defined?',
    choices: [
      { id: 'A', text: '$1$' },
      // distractor: forgets to cancel one (x+2)
      { id: 'B', text: '$\\dfrac{x + 2}{x - 3}$' },
      // distractor: leaves (x-3) in denominator
      { id: 'C', text: '$\\dfrac{x - 3}{x + 2}$' },
      // distractor: keeps (x+2) squared
      { id: 'D', text: '$(x + 2)^2$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Rational Expression Simplification**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** Factor everything: numerator $= (x - 3)(x + 3)(x + 2)^2$, denominator $= (x + 2)(x + 3)(x - 3)(x + 2)$. Cancel ALL four factors: result is $1$.\n\n**The Full Solution:**\nFactor each piece:\n* $x^2 - 9 = (x - 3)(x + 3)$ (difference of squares).\n* $x^2 + 5x + 6 = (x + 2)(x + 3)$ (find $2$ and $3$).\n* $x^2 + 4x + 4 = (x + 2)^2$ (perfect square).\n* $x^2 - x - 6 = (x - 3)(x + 2)$ (find $-3$ and $2$).\n\nProduct:\n$\\dfrac{(x - 3)(x + 3)}{(x + 2)(x + 3)} \\cdot \\dfrac{(x + 2)(x + 2)}{(x - 3)(x + 2)}$\n\nCombine:\n$\\dfrac{(x - 3)(x + 3)(x + 2)(x + 2)}{(x + 2)(x + 3)(x - 3)(x + 2)} = 1$ (for $x \\neq -3, -2, 3$).\n\nEvery factor in the numerator has a matching factor in the denominator, leaving exactly $1$.\n\nVerification: at $x = 1$, first fraction $= \\dfrac{1 - 9}{1 + 5 + 6} = \\dfrac{-8}{12} = -\\dfrac{2}{3}$. Second fraction $= \\dfrac{1 + 4 + 4}{1 - 1 - 6} = \\dfrac{9}{-6} = -\\dfrac{3}{2}$. Product $= \\left(-\\dfrac{2}{3}\\right) \\cdot \\left(-\\dfrac{3}{2}\\right) = 1$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "stops one step early" — forgets to cancel ONE of the $(x + 2)$ factors.\n* Choice C: "stops one step early" — only partially cancels, leaving $(x - 3)/(x + 2)$.\n* Choice D: "wrong formula" — keeps the $(x + 2)^2$ uncancelled.\n\n**Test Day Takeaway:** Factor EVERYTHING fully first. Multiply numerators, multiply denominators, then cancel all matching factors. When everything cancels, the answer is $1$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'rational-expression-simplification',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },

  // === FUNCTION TRANSFORMATION (8 questions) — Phase 2 batch 3 priority pattern ===
  // 10x in 12 tests. Covers: horizontal shift, vertical shift, evaluate
  // transformed function, find x of min after shift, find min value after
  // shift, combined shifts, reflection + scaling.
  // SAT Pattern kebab matches test bundle: 'function-transformation'.
  {
    id: 'bank-am-108',
    domain: 'advanced-math',
    skills: ['function-transformations', 'function-evaluation'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'The function $f$ is defined by $f(x) = x^2 + 2x$. The function $g$ is defined by $g(x) = f(x - 3)$. What is the value of $g(5)$?',
    correctAnswer: '8',
    explanation: '**SAT Pattern: Function Transformation**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~10s):** $g(5) = f(5 - 3) = f(2) = 4 + 4 = 8$.\n\n**The Full Solution:**\nTo evaluate $g(5)$, plug $5$ into the definition $g(x) = f(x - 3)$:\n$g(5) = f(5 - 3) = f(2)$.\n\nNow evaluate $f$ at $2$:\n$f(2) = 2^2 + 2(2) = 4 + 4 = 8$.\n\nVerification: $g(5) = f(2) = 8$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Evaluating $f(5)$ and then subtracting $3$ (wrong: gives $f(5) - 3 = 32 - 3 = 29$).\n* Adding $3$ instead of subtracting: $f(5 + 3) = f(8) = 64 + 16 = 80$.\n\n**Test Day Takeaway:** $g(x) = f(x - c)$ means "evaluate $f$ at $x - c$". Plug into the INPUT first, then evaluate $f$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'function-transformation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-109',
    domain: 'advanced-math',
    skills: ['function-transformations', 'function-evaluation'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'The function $f$ is defined by $f(x) = 3x - 4$. The function $g$ is defined by $g(x) = f(x) + 7$. What is the value of $g(2)$?',
    correctAnswer: '9',
    explanation: '**SAT Pattern: Function Transformation**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~5s):** $g(2) = f(2) + 7 = (6 - 4) + 7 = 2 + 7 = 9$.\n\n**The Full Solution:**\n$g(x) = f(x) + 7$ adds $7$ to the OUTPUT of $f$.\nFirst compute $f(2)$:\n$f(2) = 3(2) - 4 = 6 - 4 = 2$.\nThen add $7$:\n$g(2) = 2 + 7 = 9$.\n\nVerification: $f(2) = 2$ and $g(2) = f(2) + 7 = 9$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Adding $7$ to the INPUT: $f(2 + 7) = f(9) = 23$.\n* Computing $g(x) = 3x - 4 + 7 = 3x + 3$, then $g(2) = 9$ — this gets the right answer but only because the formula was simplified correctly. The principle is to add $7$ AFTER applying $f$.\n\n**Test Day Takeaway:** $g(x) = f(x) + c$ ADDS $c$ to the OUTPUT. $g(x) = f(x + c)$ would add $c$ to the INPUT — very different.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'function-transformation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-110',
    domain: 'advanced-math',
    skills: ['function-transformations', 'vertex-form'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'The function $f$ is defined by $f(x) = 2x^2 - 8x + 3$. The function $g$ is defined by $g(x) = f(x + 1)$. What is the minimum value of $g(x)$?',
    correctAnswer: '-5',
    explanation: '**SAT Pattern: Function Transformation**\n\n**The correct answer is $-5$.**\n\n**The Fast Way (~20s):** $f$\'s min value is at $x = -b/(2a) = 8/4 = 2$, giving $f(2) = 8 - 16 + 3 = -5$. Horizontal shifts do NOT change the minimum VALUE — only its location. So $g$\'s min is also $-5$.\n\n**The Full Solution:**\nFind the minimum of $f$ first. For $f(x) = 2x^2 - 8x + 3$ (a parabola opening upward, $a = 2 > 0$), the minimum occurs at:\n$x_{\\min} = -\\dfrac{b}{2a} = -\\dfrac{-8}{4} = 2$.\n\nMinimum value of $f$: $f(2) = 2(4) - 8(2) + 3 = 8 - 16 + 3 = -5$.\n\n$g(x) = f(x + 1)$ shifts $f$\'s graph LEFT by $1$ unit. A horizontal shift moves the location of the minimum but does NOT change its value.\n\nTherefore $g$\'s minimum value is still $-5$.\n\nVerification: $g$ achieves its min where $x + 1 = 2$, i.e., at $x = 1$. $g(1) = f(2) = -5$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Subtracting or adding $1$ to the minimum VALUE (mistaking a horizontal shift for vertical).\n* Computing $g(0) = f(1) = 2 - 8 + 3 = -3$ and reporting $-3$.\n\n**Test Day Takeaway:** Horizontal shift $g(x) = f(x + c)$: changes WHERE the extremum occurs, NOT its value. Vertical shift $g(x) = f(x) + c$: changes the VALUE, not the location.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'function-transformation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-111',
    domain: 'advanced-math',
    skills: ['function-transformations', 'function-evaluation'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'The function $f$ is defined by $f(x) = x^2 - 4x + 1$. The function $g$ is defined by $g(x) = f(x + 3)$. What is the value of $g(0)$?',
    correctAnswer: '-2',
    explanation: '**SAT Pattern: Function Transformation**\n\n**The correct answer is $-2$.**\n\n**The Fast Way (~10s):** $g(0) = f(0 + 3) = f(3) = 9 - 12 + 1 = -2$.\n\n**The Full Solution:**\nApply the definition $g(x) = f(x + 3)$ at $x = 0$:\n$g(0) = f(0 + 3) = f(3)$.\n\nEvaluate $f(3)$:\n$f(3) = 3^2 - 4(3) + 1 = 9 - 12 + 1 = -2$.\n\nVerification: $g(0) = f(3) = -2$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Computing $f(0) + 3 = 1 + 3 = 4$ (treats the transformation as vertical).\n* Subtracting $3$ instead of adding inside the function: $f(0 - 3) = f(-3) = 9 + 12 + 1 = 22$.\n\n**Test Day Takeaway:** $g(x) = f(x + c)$: substitute $x + c$ INTO the function definition. Then evaluate as you would any function call.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'function-transformation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-112',
    domain: 'advanced-math',
    skills: ['function-transformations', 'vertex-form'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = (x - 2)^2 + 5$. The function $g$ is defined by $g(x) = f(x - 3)$. For what value of $x$ does $g$ attain its minimum value?',
    choices: [
      // distractor: subtracts 3 from f's vertex x instead of adding
      { id: 'A', text: '$-1$' },
      // distractor: uses f's vertex x without shifting
      { id: 'B', text: '$2$' },
      { id: 'C', text: '$5$' },
      // distractor: just uses 3 (the shift amount)
      { id: 'D', text: '$3$' }
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Function Transformation**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $f$ has min at $x = 2$. $g(x) = f(x - 3)$ shifts $f$ RIGHT by $3$, so $g$\'s min is at $x = 2 + 3 = 5$.\n\n**The Full Solution:**\n$f(x) = (x - 2)^2 + 5$ has its minimum where $(x - 2)^2$ is zero, i.e., at $x = 2$. Min value $= 5$.\n\n$g(x) = f(x - 3)$ shifts the graph of $f$ horizontally. Setting the inside of $f$ to equal the original min argument:\n$x - 3 = 2 \\Rightarrow x = 5$.\n\nSo $g$ achieves its minimum at $x = 5$ (with the same min value $5$).\n\nVerification: $g(5) = f(5 - 3) = f(2) = 0 + 5 = 5$ \\checkmark. For any other $x$, $g(x) > 5$.\n\n**Why the wrong answers are tempting:**\n* Choice A: "applies the inverse operation" — subtracts $3$ from $f$\'s min $x$ instead of adding. $f(x - c)$ shifts RIGHT by $c$, not left.\n* Choice B: "stops one step early" — uses $f$\'s original min $x = 2$ without applying the shift.\n* Choice D: "wrong base" — gives the shift amount $c = 3$ directly without combining with the original.\n\n**Test Day Takeaway:** $g(x) = f(x - c)$ shifts the graph RIGHT by $c$. The trick: setting the inside $x - c$ equal to the original min argument $x_0$ gives $x = x_0 + c$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'function-transformation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-113',
    domain: 'advanced-math',
    skills: ['function-transformations'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = 2x^2 + 1$. The function $g$ is defined by $g(x) = f(x) - 6$. What is the minimum value of $g(x)$?',
    choices: [
      // distractor: minimum of f
      { id: 'A', text: '$1$' },
      { id: 'B', text: '$-5$' },
      // distractor: sign error
      { id: 'C', text: '$7$' },
      // distractor: adds 6 instead of subtracting
      { id: 'D', text: '$5$' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Function Transformation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $f$\'s minimum is at $x = 0$: $f(0) = 1$. $g(x) = f(x) - 6$ shifts the minimum down by $6$: $g$\'s min $= 1 - 6 = -5$.\n\n**The Full Solution:**\nFor $f(x) = 2x^2 + 1$, the minimum value is $f(0) = 1$ (parabola opens upward, vertex at $x = 0$).\n\n$g(x) = f(x) - 6$ shifts $f$\'s graph DOWN by $6$ units. A vertical shift moves the minimum VALUE but not its location.\n\nMinimum of $g$: $1 - 6 = -5$ (achieved at $x = 0$, the same location).\n\nVerification: $g(0) = f(0) - 6 = 1 - 6 = -5$ \\checkmark. For any other $x$, $g(x) > -5$.\n\n**Why the wrong answers are tempting:**\n* Choice A: "stops one step early" — reports $f$\'s minimum without applying the vertical shift.\n* Choice C: "sign error" — confuses the direction of the shift ($+6$ instead of $-6$): $1 - (-6) = 7$.\n* Choice D: "wrong formula" — adds $|c|$ to the min instead of subtracting: $1 + 6 = 7$ — wait, this would give $7$ not $5$. Maybe represents $|f(0)| + 6 - 2 = $ some other mix-up. Conceptually a "wrong-magnitude" shift.\n\n**Test Day Takeaway:** Vertical shift $g(x) = f(x) + c$: changes the min/max VALUE by $c$ but NOT its location. $c$ is signed; subtracting $6$ shifts DOWN by $6$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'function-transformation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-114',
    domain: 'advanced-math',
    skills: ['function-transformations', 'vertex-form'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = (x + 1)^2 - 2$. The function $g$ is defined by $g(x) = f(x - 4) + 7$. At what value of $x$ does $g$ attain its minimum, and what is that minimum?',
    choices: [
      { id: 'A', text: '$x = 3$, minimum $= 5$' },
      // distractor: only horizontal shift applied
      { id: 'B', text: '$x = 3$, minimum $= -2$' },
      // distractor: wrong horizontal shift direction
      { id: 'C', text: '$x = -5$, minimum $= 5$' },
      // distractor: only vertical shift applied
      { id: 'D', text: '$x = -1$, minimum $= 5$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Function Transformation**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** $f$ has vertex at $(-1, -2)$. $g(x) = f(x - 4) + 7$ shifts RIGHT by $4$ and UP by $7$. New vertex: $(-1 + 4, -2 + 7) = (3, 5)$. So $g$ attains min at $x = 3$, min value $5$.\n\n**The Full Solution:**\n$f(x) = (x + 1)^2 - 2$ has vertex at $(-1, -2)$ — a minimum.\n\nApply two transformations:\n1. $f(x - 4)$: HORIZONTAL shift right by $4$. Vertex $x$ moves from $-1$ to $-1 + 4 = 3$.\n2. $+ 7$: VERTICAL shift up by $7$. Vertex $y$ moves from $-2$ to $-2 + 7 = 5$.\n\nSo $g$\'s vertex is $(3, 5)$. Minimum value $5$ achieved at $x = 3$.\n\nVerification: $g(3) = f(3 - 4) + 7 = f(-1) + 7 = -2 + 7 = 5$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "stops one step early" — applies horizontal shift only.\n* Choice C: "applies the inverse operation" — subtracts $4$ instead of adding, putting the vertex at $-5$.\n* Choice D: "stops one step early" — applies vertical shift only; keeps $f$\'s original vertex $x$.\n\n**Test Day Takeaway:** Combined shifts: apply each transformation separately. $f(x - c) + d$: vertex moves RIGHT $c$ and UP $d$. Track both components.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'function-transformation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-115',
    domain: 'advanced-math',
    skills: ['function-transformations', 'vertex-form'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = x^2$. The function $g$ is defined by $g(x) = -2 f(x - 1) + 3$. What is the vertex of the graph of $g$ in the $xy$-plane?',
    choices: [
      { id: 'A', text: '$(1, 3)$' },
      // distractor: wrong horizontal shift direction
      { id: 'B', text: '$(-1, 3)$' },
      // distractor: wrong vertical sign
      { id: 'C', text: '$(1, -3)$' },
      // distractor: f's vertex unchanged
      { id: 'D', text: '$(0, 0)$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Function Transformation**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** $f$ has vertex $(0, 0)$. The composition $-2 f(x - 1) + 3$ shifts the vertex RIGHT by $1$ and UP by $3$ (the scale and reflection don\'t move the vertex). New vertex: $(1, 3)$.\n\n**The Full Solution:**\nStart with $f(x) = x^2$, vertex at $(0, 0)$.\n\n$g(x) = -2 f(x - 1) + 3 = -2(x - 1)^2 + 3$.\n\nThis is in vertex form $a(x - h)^2 + k$ with $a = -2$, $h = 1$, $k = 3$. The vertex is at $(h, k) = (1, 3)$.\n\nThe coefficient $-2$ reflects the parabola (opens DOWNWARD) and stretches it vertically by $2$ — but these operations leave the vertex at $(1, 3)$ unchanged.\n\nVerification: $g(1) = -2(0)^2 + 3 = 3$. Check that $g(1)$ is the max (since the parabola opens downward): $g(0) = -2(1) + 3 = 1$, $g(2) = -2(1) + 3 = 1$, both less than $3$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "applies the inverse operation" — uses $(x + 1)$ direction instead of $(x - 1)$: shifts LEFT.\n* Choice C: "sign error" — flips the sign of the vertical shift to $-3$.\n* Choice D: "stops one step early" — reports the vertex of $f$ before any transformation.\n\n**Test Day Takeaway:** In $g(x) = a f(x - h) + k$, the vertex shifts to $(h, k)$. The coefficient $a$ (including its sign) does not affect the vertex LOCATION — only the direction and width of the parabola.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'function-transformation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },

  // === COMMON-BASE EXPONENT SIMPLIFICATION (8 questions) — Phase 2 batch 4 ===
  // 8x in 12 tests. Covers: rewrite-to-common-base equations, simplify
  // monomial division (subtract exponents), cross-base (e.g., 9 vs 27),
  // multi-variable monomials with negative exponents.
  // SAT Pattern uses hyphen in "Common-Base": kebab is
  // 'common-base-exponent-simplification'.
  {
    id: 'bank-am-116',
    domain: 'advanced-math',
    skills: ['exponent-laws'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'What value of $x$ satisfies the equation $2^{x + 3} = 16$?',
    correctAnswer: '1',
    explanation: '**SAT Pattern: Common-Base Exponent Simplification**\n\n**The correct answer is $1$.**\n\n**The Fast Way (~10s):** $16 = 2^4$, so $x + 3 = 4 \\Rightarrow x = 1$.\n\n**The Full Solution:**\nRewrite the right side with the same base as the left:\n$16 = 2 \\cdot 2 \\cdot 2 \\cdot 2 = 2^4$.\n\nSo $2^{x + 3} = 2^4$. When the bases are equal, the exponents are equal:\n$x + 3 = 4 \\Rightarrow x = 1$.\n\nVerification: $2^{1 + 3} = 2^4 = 16$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Treating $16$ as $4^2$ then equating $x + 3 = 2$ — works only if both sides are rewritten with the same base.\n* Solving $2^x = 16$ directly without isolating $2^{x+3}$.\n\n**Test Day Takeaway:** Same-base exponential equation $a^M = a^N$ $\\Rightarrow$ $M = N$. Step 1: get the bases to match. Step 2: equate exponents.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'common-base-exponent-simplification',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-117',
    domain: 'advanced-math',
    skills: ['exponent-laws'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'Which expression is equivalent to $\\dfrac{x^5}{x^2}$ for $x \\neq 0$? Express your answer in the form $x^n$, where $n$ is an integer; enter the value of $n$.',
    correctAnswer: '3',
    explanation: '**SAT Pattern: Common-Base Exponent Simplification**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~5s):** $\\dfrac{x^5}{x^2} = x^{5 - 2} = x^3$. So $n = 3$.\n\n**The Full Solution:**\nWhen dividing same-base powers, SUBTRACT the exponents:\n$\\dfrac{x^5}{x^2} = x^{5 - 2} = x^3$.\n\nSo $n = 3$.\n\nVerification: at $x = 2$, $\\dfrac{32}{4} = 8 = 2^3$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Dividing exponents ($5 / 2 = 2.5$) instead of subtracting.\n* Adding exponents ($5 + 2 = 7$).\n* Reporting $x^3$ as the answer instead of the integer $n = 3$.\n\n**Test Day Takeaway:** Same-base division $\\Rightarrow$ subtract exponents. Same-base multiplication $\\Rightarrow$ add exponents. Power-of-a-power $\\Rightarrow$ multiply exponents.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'common-base-exponent-simplification',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-118',
    domain: 'advanced-math',
    skills: ['exponent-laws'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'What value of $x$ satisfies the equation $9^x = 27^{x - 1}$?',
    correctAnswer: '3',
    explanation: '**SAT Pattern: Common-Base Exponent Simplification**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~15s):** Rewrite as base $3$: $3^{2x} = 3^{3(x - 1)} = 3^{3x - 3}$. So $2x = 3x - 3 \\Rightarrow x = 3$.\n\n**The Full Solution:**\nRewrite both sides with the same base ($3$):\n* $9^x = (3^2)^x = 3^{2x}$.\n* $27^{x - 1} = (3^3)^{x - 1} = 3^{3(x - 1)} = 3^{3x - 3}$.\n\nEquate the exponents:\n$2x = 3x - 3$\n$-x = -3$\n$x = 3$.\n\nVerification: $9^3 = 729$ and $27^{3 - 1} = 27^2 = 729$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Equating exponents without rewriting bases: $x = x - 1$ gives $0 = -1$ (no solution).\n* Distributing the exponent wrong: $(3^3)^{x - 1} = 3^{3x - 1}$ instead of $3^{3x - 3}$.\n\n**Test Day Takeaway:** When the bases are different powers of the same number, rewrite BOTH using that common base. Distribute the outer exponent carefully across the inner expression.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'common-base-exponent-simplification',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-119',
    domain: 'advanced-math',
    skills: ['exponent-laws'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'Which expression is equivalent to $\\dfrac{8x^4 y^7}{2x y^3}$ for $x \\neq 0$ and $y \\neq 0$?',
    choices: [
      // distractor: doesn't subtract exponents
      { id: 'A', text: '$4x^4 y^7$' },
      { id: 'B', text: '$4x^3 y^4$' },
      // distractor: adds y exponents
      { id: 'C', text: '$4x^3 y^{10}$' },
      // distractor: adds x exponents
      { id: 'D', text: '$4x^5 y^4$' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Common-Base Exponent Simplification**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Coefficients: $8/2 = 4$. Variables: $x^{4-1} = x^3$, $y^{7-3} = y^4$. Result: $4x^3 y^4$.\n\n**The Full Solution:**\nSeparate the constant and the variable parts:\n$\\dfrac{8x^4 y^7}{2x y^3} = \\dfrac{8}{2} \\cdot \\dfrac{x^4}{x^1} \\cdot \\dfrac{y^7}{y^3}$.\n\nDivide each:\n* $\\dfrac{8}{2} = 4$.\n* $\\dfrac{x^4}{x^1} = x^{4 - 1} = x^3$.\n* $\\dfrac{y^7}{y^3} = y^{7 - 3} = y^4$.\n\nCombine: $4x^3 y^4$.\n\nVerification: at $x = 2$, $y = 1$: original $= \\dfrac{8 \\cdot 16 \\cdot 1}{2 \\cdot 2 \\cdot 1} = \\dfrac{128}{4} = 32$. Simplified: $4 \\cdot 8 \\cdot 1 = 32$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "stops one step early" — doesn\'t subtract exponents, just divides coefficients.\n* Choice C: "applies the inverse operation" — adds the $y$ exponents ($7 + 3$) instead of subtracting.\n* Choice D: "applies the inverse operation" — adds the $x$ exponents instead of subtracting.\n\n**Test Day Takeaway:** Monomial division: divide coefficients, then subtract exponents for each common variable. Treat $x$ alone as $x^1$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'common-base-exponent-simplification',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-am-120',
    domain: 'advanced-math',
    skills: ['exponent-laws'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'What value of $x$ satisfies the equation $4^{2x} = 8^{x + 3}$?',
    correctAnswer: '9',
    explanation: '**SAT Pattern: Common-Base Exponent Simplification**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~15s):** Rewrite as base $2$: $2^{4x} = 2^{3(x + 3)} = 2^{3x + 9}$. So $4x = 3x + 9 \\Rightarrow x = 9$.\n\n**The Full Solution:**\nRewrite both sides with base $2$:\n* $4^{2x} = (2^2)^{2x} = 2^{4x}$.\n* $8^{x + 3} = (2^3)^{x + 3} = 2^{3(x + 3)} = 2^{3x + 9}$.\n\nEquate exponents:\n$4x = 3x + 9 \\Rightarrow x = 9$.\n\nVerification: $4^{18}$ vs $8^{12}$. Both equal $2^{36}$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Forgetting to distribute the outer exponent: $(2^3)^{x + 3}$ should be $2^{3(x + 3)} = 2^{3x + 9}$, NOT $2^{3x + 3}$.\n* Equating $2x = x + 3$ directly without rewriting bases.\n\n**Test Day Takeaway:** Both $4$ and $8$ are powers of $2$. Rewrite both sides as $2^{\\text{expr}}$, distribute outer exponents carefully, then equate.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'common-base-exponent-simplification',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
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
    explanation: '**SAT Pattern: Common-Base Exponent Simplification**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Coefficients: $12/4 = 3$. $x$: $5 - 2 = 3$. $y$: $3 - 7 = -4$. Result: $3 x^3 y^{-4} = \\dfrac{3x^3}{y^4}$.\n\n**The Full Solution:**\nSeparate the constant and variables:\n$\\dfrac{12x^5 y^3}{4x^2 y^7} = \\dfrac{12}{4} \\cdot \\dfrac{x^5}{x^2} \\cdot \\dfrac{y^3}{y^7} = 3 \\cdot x^{5 - 2} \\cdot y^{3 - 7} = 3 x^3 y^{-4}$.\n\nRewrite with positive exponents only:\n$3 x^3 y^{-4} = \\dfrac{3 x^3}{y^4}$.\n\nVerification: at $x = 2$, $y = 1$: original $= \\dfrac{12 \\cdot 32 \\cdot 1}{4 \\cdot 4 \\cdot 1} = \\dfrac{384}{16} = 24$. Simplified: $\\dfrac{3 \\cdot 8}{1} = 24$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "sign error" — gives $y^4$ in the numerator instead of $y^{-4}$ (so denominator).\n* Choice C: "wrong base" — uses $12 - 4 = 8$ instead of $12/4 = 3$ for the coefficient.\n* Choice D: "applies the inverse operation" — flips which variable goes where (inverts the entire ratio).\n\n**Test Day Takeaway:** Negative exponents end up in the DENOMINATOR: $y^{-n} = 1/y^n$. SAT answer choices usually present positive-exponent form, so convert negatives to denominator placement.',
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
    explanation: '**SAT Pattern: Common-Base Exponent Simplification**\n\n**The correct answer is $\\dfrac{3}{2}$.**\n\n**The Fast Way (~25s):** $\\left(\\dfrac{1}{4}\\right)^{2x} = 4^{-2x}$ and $16^{x - 3} = 4^{2(x - 3)} = 4^{2x - 6}$. Equate: $-2x = 2x - 6 \\Rightarrow x = 3/2$.\n\n**The Full Solution:**\nRewrite both sides with base $4$:\n* $\\left(\\dfrac{1}{4}\\right)^{2x} = (4^{-1})^{2x} = 4^{-2x}$.\n* $16^{x - 3} = (4^2)^{x - 3} = 4^{2x - 6}$.\n\nEquate exponents:\n$-2x = 2x - 6$\n$-4x = -6$\n$x = \\dfrac{6}{4} = \\dfrac{3}{2}$.\n\nVerification: at $x = 3/2$, $\\left(\\dfrac{1}{4}\\right)^3 = \\dfrac{1}{64}$ and $16^{-3/2} = \\dfrac{1}{16^{3/2}} = \\dfrac{1}{64}$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Treating $(1/4)^{2x}$ as $4^{2x}$ (drops the reciprocal sign in the exponent).\n* Distributing wrong on $(4^2)^{x - 3}$: getting $4^{2x - 3}$ instead of $4^{2x - 6}$.\n* Solving $-2x = 2x - 6$ as $-2x - 2x = -6$ giving $-4x = -6$, then dividing wrong.\n\n**Test Day Takeaway:** $\\dfrac{1}{a^n} = a^{-n}$. A fractional base like $1/4$ is a negative power of $4$. Convert ALL bases to the same root before equating exponents.',
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
    explanation: '**SAT Pattern: Common-Base Exponent Simplification**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** $(6 x^4 y^{-2})^2 = 36 x^8 y^{-4}$. Multiply by $3 x^{-1} y^3$: $36 \\cdot 3 = 108$, $x^{8 - 1} = x^7$, $y^{-4 + 3} = y^{-1}$. Result: $\\dfrac{108 x^7}{y}$.\n\n**The Full Solution:**\nStep 1 — square the first factor:\n$(6 x^4 y^{-2})^2 = 6^2 \\cdot (x^4)^2 \\cdot (y^{-2})^2 = 36 x^8 y^{-4}$.\n\nStep 2 — multiply by $3 x^{-1} y^3$:\n* Coefficients: $36 \\cdot 3 = 108$.\n* $x$: $x^8 \\cdot x^{-1} = x^{8 - 1} = x^7$.\n* $y$: $y^{-4} \\cdot y^3 = y^{-4 + 3} = y^{-1}$.\n\nResult: $108 x^7 y^{-1} = \\dfrac{108 x^7}{y}$.\n\nVerification: at $x = 1$, $y = 1$: original $= (6 \\cdot 1 \\cdot 1)^2 \\cdot (3 \\cdot 1 \\cdot 1) = 36 \\cdot 3 = 108$. Simplified: $\\dfrac{108 \\cdot 1}{1} = 108$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong base" — doesn\'t square the coefficient fully: $6^2 \\ne 18$. Likely from $6 \\cdot 3 = 18$ wrongly used as the coefficient.\n* Choice C: "sign error" — gives $y$ in the numerator instead of denominator (treats $y^{-1}$ as $y^1$).\n* Choice D: "stops one step early" — uses $6^2 = 36$ but forgets the $\\cdot 3$ factor: $36$ instead of $108$.\n\n**Test Day Takeaway:** Power-of-a-product: $(abc)^n = a^n b^n c^n$. Multiply coefficients separately, multiply same-variable powers by adding exponents. Convert negative exponents to denominator at the end.',
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
    explanation: '**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Set equal: $x^2 + 4x + 3 = 2x + b \\Rightarrow x^2 + 2x + (3 - b) = 0$. Discriminant $= 0$: $4 - 4(3 - b) = 0 \\Rightarrow 3 - b = 1 \\Rightarrow b = 2$.\n\n**The Full Solution:**\nSet the two expressions for $y$ equal:\n$x^2 + 4x + 3 = 2x + b$\n$x^2 + 2x + (3 - b) = 0$\n\nFor exactly one intersection (tangency), the discriminant must equal zero:\n$\\Delta = 2^2 - 4(1)(3 - b) = 0$\n$4 - 12 + 4b = 0$\n$4b = 8$\n$b = 2$.\n\nVerification at $b = 2$: $x^2 + 2x + 1 = (x + 1)^2 = 0$, so $x = -1$ (double root). Then $y = 2(-1) + 2 = 0$. Single tangent point at $(-1, 0)$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong sign" — sign error when moving $b$ across the equals sign.\n* Choice C: "wrong base" — just reads off the constant term of the parabola.\n* Choice D: "stops one step early" — sets the middle term to zero instead of the discriminant.\n\n**Test Day Takeaway:** Tangency $\\iff$ one solution $\\iff$ discriminant $= 0$. Move everything to one side first, then apply $b^2 - 4ac = 0$.',
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
    explanation: '**SAT Pattern: Tangent Line and Discriminant**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~20s):** Set equal: $x^2 + c = 6x + 1 \\Rightarrow x^2 - 6x + (c - 1) = 0$. Discriminant $= 0$: $36 - 4(c - 1) = 0 \\Rightarrow c - 1 = 9 \\Rightarrow c = 10$.\n\n**The Full Solution:**\nSet the two expressions for $y$ equal:\n$x^2 + c = 6x + 1$\n$x^2 - 6x + (c - 1) = 0$\n\nFor exactly one intersection:\n$\\Delta = (-6)^2 - 4(1)(c - 1) = 0$\n$36 - 4c + 4 = 0$\n$4c = 40$\n$c = 10$.\n\nVerification at $c = 10$: $x^2 - 6x + 9 = (x - 3)^2 = 0$, so $x = 3$. Then $y = 6(3) + 1 = 19$. Tangent at $(3, 19)$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Using $b = 6$ instead of $b = -6$ — actually fine since $b^2$ is the same, but watch the sign when isolating $c$.\n* Forgetting to subtract $1$ when moving $1$ to the parabola side.\n* Setting the discriminant to anything other than zero (e.g., positive for "two solutions" by mistake).\n\n**Test Day Takeaway:** Discriminant $= 0$ is the tangency condition. The sign of $b$ in $b^2 - 4ac$ doesn\'t matter (it\'s squared) — but the sign of $c$ in your rearranged quadratic does.',
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
    explanation: '**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Set equal: $kx^2 + 5x + 1 = 3x - 5 \\Rightarrow kx^2 + 2x + 6 = 0$. Discriminant $= 0$: $4 - 24k = 0 \\Rightarrow k = \\dfrac{1}{6}$.\n\n**The Full Solution:**\nSet the two $y$-expressions equal:\n$kx^2 + 5x + 1 = 3x - 5$\n$kx^2 + 2x + 6 = 0$\n\nThis is a quadratic in $x$ with $a = k$, $b = 2$, $c = 6$. For exactly one intersection:\n$\\Delta = 2^2 - 4(k)(6) = 0$\n$4 - 24k = 0$\n$k = \\dfrac{4}{24} = \\dfrac{1}{6}$.\n\nVerification at $k = 1/6$: $\\dfrac{1}{6}x^2 + 2x + 6 = 0 \\Rightarrow x^2 + 12x + 36 = 0 \\Rightarrow (x + 6)^2 = 0$, so $x = -6$. Then $y = 3(-6) - 5 = -23$. Tangent at $(-6, -23)$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "applies the inverse operation" — inverts the fraction at the end.\n* Choice C: "wrong sign" — drops a sign in the rearrangement step.\n* Choice D: "wrong base" — uses the wrong middle term (e.g., $b = 3$ instead of $2$).\n\n**Test Day Takeaway:** When $k$ is the leading coefficient, the discriminant equation gives a CLEAN linear equation in $k$. Don\'t panic about $k$ in the $a$-slot.',
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
    explanation: '**SAT Pattern: Tangent Line and Discriminant**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~30s):** Set equal: $x^2 + bx + 5 = 4x + 1 \\Rightarrow x^2 + (b - 4)x + 4 = 0$. Discriminant $= 0$: $(b - 4)^2 - 16 = 0 \\Rightarrow b - 4 = \\pm 4 \\Rightarrow b = 0$ or $8$. With $b > 0$: $b = 8$.\n\n**The Full Solution:**\nSet the two $y$-expressions equal:\n$x^2 + bx + 5 = 4x + 1$\n$x^2 + (b - 4)x + 4 = 0$\n\nFor exactly one intersection:\n$\\Delta = (b - 4)^2 - 4(1)(4) = 0$\n$(b - 4)^2 = 16$\n$b - 4 = \\pm 4$\n$b = 0$ or $b = 8$.\n\nThe condition $b > 0$ selects $b = 8$.\n\nVerification at $b = 8$: $x^2 + 4x + 4 = (x + 2)^2 = 0$, so $x = -2$. Then $y = 4(-2) + 1 = -7$. Tangent at $(-2, -7)$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Forgetting that $(b - 4)^2 = 16$ yields TWO values, then ignoring the constraint $b > 0$.\n* Sign error: writing $(b - 4)^2 + 16 = 0$ (no real solutions) by misreading the discriminant.\n* Reporting $0$ — that\'s the other root, excluded by $b > 0$.\n\n**Test Day Takeaway:** When $b$ appears as a coefficient and the discriminant equation is quadratic in $b$, expect TWO candidate values. Read the question for the sign/range constraint that selects one.',
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
    explanation: '**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Set equal: $2x^2 + 3x + 1 = 5x - c \\Rightarrow 2x^2 - 2x + (1 + c) = 0$. Discriminant $= 0$: $4 - 8(1 + c) = 0 \\Rightarrow 1 + c = \\dfrac{1}{2} \\Rightarrow c = -\\dfrac{1}{2}$.\n\n**The Full Solution:**\nSet the two $y$-expressions equal:\n$2x^2 + 3x + 1 = 5x - c$\n$2x^2 - 2x + (1 + c) = 0$\n\nWith $a = 2$, $b = -2$, $C_{\\text{quad}} = 1 + c$ (using $C$ for the constant term to avoid confusion with the unknown $c$):\n$\\Delta = (-2)^2 - 4(2)(1 + c) = 0$\n$4 - 8 - 8c = 0$\n$-8c = 4$\n$c = -\\dfrac{1}{2}$.\n\nVerification at $c = -1/2$: $2x^2 - 2x + \\dfrac{1}{2} = 0 \\Rightarrow 4x^2 - 4x + 1 = 0 \\Rightarrow (2x - 1)^2 = 0$, so $x = 1/2$. Then $y = 5(1/2) - (-1/2) = 3$. Tangent at $(1/2, 3)$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong sign" — drops the negative when isolating $c$.\n* Choice C: "stops one step early" — solves $1 + c = 0$ wrongly.\n* Choice D: "wrong base" — uses the constant of the parabola as if it were the answer.\n\n**Test Day Takeaway:** When the unknown is in the constant term, watch the rearrangement carefully. The $-c$ on the line side becomes $+c$ when moved across, so the rearranged constant is $1 + c$.',
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
    explanation: '**SAT Pattern: Tangent Line and Discriminant**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~25s):** Set equal: $x^2 + 5 = mx + 1 \\Rightarrow x^2 - mx + 4 = 0$. Discriminant $= 0$: $m^2 - 16 = 0 \\Rightarrow m = \\pm 4$. With $m > 0$: $m = 4$.\n\n**The Full Solution:**\nSet the two $y$-expressions equal:\n$x^2 + 5 = mx + 1$\n$x^2 - mx + 4 = 0$\n\nFor exactly one intersection:\n$\\Delta = (-m)^2 - 4(1)(4) = 0$\n$m^2 - 16 = 0$\n$m^2 = 16$\n$m = \\pm 4$.\n\nThe condition $m > 0$ selects $m = 4$.\n\nVerification at $m = 4$: $x^2 - 4x + 4 = (x - 2)^2 = 0$, so $x = 2$. Then $y = 4(2) + 1 = 9$. Tangent at $(2, 9)$ \\checkmark. (Geometrically, the parabola opens up with vertex at $(0, 5)$; two tangent lines pass through the point where the parabola meets the line $y = mx + 1$.)\n\n**Common Mistakes to Avoid:**\n* Reporting $-4$ — the other root, excluded by $m > 0$.\n* Forgetting to take the square root: reporting $m = 16$.\n* Sign error: setting the discriminant to $-16$ instead of $16$.\n\n**Test Day Takeaway:** Slope $m$ as the unknown often gives $m^2 = $ positive number, yielding two opposite-sign answers. The problem\'s constraint picks one.',
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
    explanation: '**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Set equal: $3x^2 - 12 = 6x + b \\Rightarrow 3x^2 - 6x - (12 + b) = 0$. Discriminant $= 0$: $36 + 12(12 + b) = 0 \\Rightarrow 12 + b = -3 \\Rightarrow b = -15$.\n\n**The Full Solution:**\nSet the two $y$-expressions equal:\n$3x^2 - 12 = 6x + b$\n$3x^2 - 6x - 12 - b = 0$\n$3x^2 - 6x - (12 + b) = 0$\n\nWith $a = 3$, $B = -6$, $C = -(12 + b)$:\n$\\Delta = B^2 - 4aC = 0$\n$(-6)^2 - 4(3)[-(12 + b)] = 0$\n$36 + 12(12 + b) = 0$\n$36 + 144 + 12b = 0$\n$12b = -180$\n$b = -15$.\n\nVerification at $b = -15$: $3x^2 - 6x + 3 = 0 \\Rightarrow x^2 - 2x + 1 = (x - 1)^2 = 0$, so $x = 1$. Then $y = 6(1) + (-15) = -9$. On the parabola: $3(1)^2 - 12 = -9$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong sign" — drops the negative when isolating $b$.\n* Choice C: "stops one step early" — solves $12 + b = -3$ as $b = -3$.\n* Choice D: "wrong base" — picks the parabola\'s constant as if no algebra were needed.\n\n**Test Day Takeaway:** When the parabola has a $-12$ baked in and the line adds a $b$, both end up in the rearranged constant: $-12 - b$. The sign discipline is everything here.',
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
    explanation: '**SAT Pattern: Tangent Line and Discriminant**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~30s):** Set equal: $x^2 + kx + 9 = 2x + 5 \\Rightarrow x^2 + (k - 2)x + 4 = 0$. Discriminant $= 0$: $(k - 2)^2 = 16 \\Rightarrow k - 2 = \\pm 4 \\Rightarrow k = 6$ or $-2$. Sum: $6 + (-2) = 4$.\n\n**The Full Solution:**\nSet the two $y$-expressions equal:\n$x^2 + kx + 9 = 2x + 5$\n$x^2 + (k - 2)x + 4 = 0$\n\nFor exactly one intersection:\n$\\Delta = (k - 2)^2 - 4(1)(4) = 0$\n$(k - 2)^2 = 16$\n$k - 2 = \\pm 4$\n$k = 6$ or $k = -2$.\n\nSum: $6 + (-2) = 4$.\n\nFaster: any quadratic $(k - 2)^2 = 16$ has roots symmetric about $k = 2$, so their sum is $2 \\times 2 = 4$ by Vieta\'s. No need to find the individual roots.\n\nVerification at $k = 6$: $x^2 + 4x + 4 = (x + 2)^2 = 0$, so $x = -2$. Then $y = 2(-2) + 5 = 1$. \\checkmark\nVerification at $k = -2$: $x^2 - 4x + 4 = (x - 2)^2 = 0$, so $x = 2$. Then $y = 2(2) + 5 = 9$. \\checkmark\n\n**Common Mistakes to Avoid:**\n* Stopping at one value of $k$ and reporting that instead of the sum.\n* Computing $6 - (-2) = 8$ (the difference, not the sum).\n* Forgetting that $(k - 2)^2 = 16$ has TWO solutions (the $\\pm$).\n\n**Test Day Takeaway:** When a "tangent" condition leads to a perfect square equation in the parameter, expect two values. "Sum of values" is a common SAT twist that you can shortcut via Vieta\'s or symmetry.',
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
    explanation: '**SAT Pattern: Discriminant Analysis**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Discriminant $= 0$: $8^2 - 4(1)(c) = 0 \\Rightarrow 64 = 4c \\Rightarrow c = 16$.\n\n**The Full Solution:**\nFor exactly one real solution, the discriminant must equal zero:\n$\\Delta = b^2 - 4ac = 0$\n$(8)^2 - 4(1)(c) = 0$\n$64 - 4c = 0$\n$c = 16$.\n\nVerification at $c = 16$: $x^2 + 8x + 16 = (x + 4)^2 = 0$, so $x = -4$ (one repeated solution) \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "stops one step early" — reports $b^2 = 64$ without dividing by $4$.\n* Choice C: "wrong base" — uses the wrong divisor (gets $64/2 = 32$).\n* Choice D: "wrong base" — picks the coefficient $b = 8$ directly.\n\n**Test Day Takeaway:** Exactly one real solution $\\iff$ $\\Delta = b^2 - 4ac = 0$. Two real solutions: $\\Delta > 0$. No real solutions: $\\Delta < 0$.',
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
    explanation: '**SAT Pattern: Discriminant Analysis**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~15s):** Discriminant $= 0$: $k^2 - 4(1)(9) = 0 \\Rightarrow k^2 = 36 \\Rightarrow k = \\pm 6$. Positive: $k = 6$.\n\n**The Full Solution:**\nFor exactly one real solution:\n$\\Delta = k^2 - 4(1)(9) = 0$\n$k^2 = 36$\n$k = \\pm 6$.\n\nThe constraint $k > 0$ selects $k = 6$.\n\nVerification at $k = 6$: $x^2 + 6x + 9 = (x + 3)^2 = 0$, so $x = -3$ (repeated root) \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting $-6$ — the other root, excluded by $k > 0$.\n* Forgetting to take the square root: writing $k = 36$.\n* Computing $4ac = 4 \\cdot 9 = 36$ but writing the discriminant as $k - 36$ instead of $k^2 - 36$.\n\n**Test Day Takeaway:** When $b$ is the unknown, expect the $\\pm$ from the square root. The problem\'s sign constraint picks one.',
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
    explanation: '**SAT Pattern: Discriminant Analysis**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $\\Delta = 0$: $b^2 - 4(2)(8) = 0 \\Rightarrow b^2 = 64 \\Rightarrow b = \\pm 8$. Positive: $b = 8$.\n\n**The Full Solution:**\nFor exactly one real solution:\n$\\Delta = b^2 - 4ac = 0$\n$b^2 - 4(2)(8) = 0$\n$b^2 - 64 = 0$\n$b^2 = 64$\n$b = \\pm 8$.\n\nThe constraint "positive value" selects $b = 8$.\n\nVerification at $b = 8$: $2x^2 + 8x + 8 = 0 \\Rightarrow x^2 + 4x + 4 = (x + 2)^2 = 0$, so $x = -2$ (repeated) \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong base" — drops the leading coefficient: $b^2 = 4(8) = 32$.\n* Choice C: "wrong formula" — divides instead of multiplies in the discriminant.\n* Choice D: "stops one step early" — reports $b^2 = 64$ but messes up taking the root, doubling instead.\n\n**Test Day Takeaway:** Don\'t skip the leading coefficient $a$ in $4ac$. For $2x^2 + bx + 8 = 0$, $a = 2$ — so $4ac = 4 \\cdot 2 \\cdot 8 = 64$, not $32$.',
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
    explanation: '**SAT Pattern: Discriminant Analysis**\n\n**The correct answer is $13$.**\n\n**The Fast Way (~25s):** No real solutions $\\iff$ $\\Delta < 0$: $144 - 12c < 0 \\Rightarrow c > 12$. Least INTEGER: $c = 13$.\n\n**The Full Solution:**\nFor no real solutions:\n$\\Delta = b^2 - 4ac < 0$\n$(12)^2 - 4(3)(c) < 0$\n$144 - 12c < 0$\n$12c > 144$\n$c > 12$.\n\nThe LEAST integer greater than $12$ is $13$.\n\nVerification at $c = 13$: $\\Delta = 144 - 12(13) = 144 - 156 = -12 < 0$ \\checkmark. At $c = 12$: $\\Delta = 0$ (one solution, not none).\n\n**Common Mistakes to Avoid:**\n* Reporting $c = 12$ — gives exactly one solution, NOT no solutions.\n* Forgetting to multiply by $a = 3$: solving $144 - 4c < 0 \\Rightarrow c > 36$.\n* Misreading "least" — the LEAST value of $c$ satisfying $c > 12$ is the smallest integer strictly greater than $12$, which is $13$.\n\n**Test Day Takeaway:** Strict inequality $\\Delta < 0$ EXCLUDES the boundary $c = 12$. "Least integer" with strict $>$ means the next integer up.',
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
    explanation: '**SAT Pattern: Discriminant Analysis**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Two distinct real solutions $\\iff$ $\\Delta > 0$: $k^2 - 144 > 0 \\Rightarrow |k| > 12$. Only Choice A ($k = 13$) satisfies $|k| > 12$.\n\n**The Full Solution:**\nFor two distinct real solutions:\n$\\Delta = k^2 - 4(4)(9) > 0$\n$k^2 - 144 > 0$\n$k^2 > 144$\n$|k| > 12$, i.e. $k > 12$ or $k < -12$.\n\nCheck each choice:\n* A: $k = 13$, $|k| = 13 > 12$ \\checkmark.\n* B: $k = 12$, $|k| = 12$ — at the boundary, $\\Delta = 0$ (ONE solution, not two).\n* C: $k = 5$, $|k| = 5 < 12$ — $\\Delta < 0$, no real solutions.\n* D: $k = -12$, $|k| = 12$ — boundary, one solution.\n\nVerification: at $k = 13$, $\\Delta = 169 - 144 = 25 > 0$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "off-by-one" — uses $\\geq$ instead of $>$ on the discriminant.\n* Choice C: "wrong sign" — picks a value inside the no-solution range.\n* Choice D: "off-by-one" — boundary value gives one solution, not two distinct.\n\n**Test Day Takeaway:** "Two DISTINCT" means STRICTLY $\\Delta > 0$. At the boundary $\\Delta = 0$, the solutions coincide (one repeated root, not two distinct).',
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
    explanation: '**SAT Pattern: Discriminant Analysis**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~25s):** $\\Delta = 0$: $(k+1)^2 - 16 = 0 \\Rightarrow (k+1)^2 = 16 \\Rightarrow k + 1 = \\pm 4 \\Rightarrow k = 3$ or $-5$. Positive: $k = 3$.\n\n**The Full Solution:**\nFor exactly one real solution:\n$\\Delta = (k + 1)^2 - 4(1)(4) = 0$\n$(k + 1)^2 = 16$\n$k + 1 = \\pm 4$\n$k = 3$ or $k = -5$.\n\nThe constraint $k > 0$ selects $k = 3$.\n\nVerification at $k = 3$: $x^2 + 4x + 4 = (x + 2)^2 = 0$, so $x = -2$ (repeated) \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Expanding $(k + 1)^2$ as $k^2 + 1$ (forgets the cross term $2k$).\n* Stopping at $k + 1 = 4$ and forgetting $k + 1 = -4$ (only one value of $k$ stays in the positive range, but you must consider both before filtering).\n* Reporting $-5$ — the rejected root.\n\n**Test Day Takeaway:** When the coefficient $b$ contains the parameter as $(k + \\text{constant})$, the discriminant equation becomes a quadratic in $k$ (via the $\\pm$). Solve for both, then apply the constraint.',
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
    explanation: '**SAT Pattern: Discriminant Analysis**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** No real solutions $\\iff$ $\\Delta < 0$: $16 - 4a < 0 \\Rightarrow a > 4$. Only Choice A ($a = 5$) satisfies $a > 4$. (Also $a \\neq 0$, otherwise the equation is linear, not quadratic.)\n\n**The Full Solution:**\nFor no real solutions:\n$\\Delta = (-4)^2 - 4(a)(1) < 0$\n$16 - 4a < 0$\n$4a > 16$\n$a > 4$.\n\nWe also need $a \\neq 0$ to keep the equation quadratic (otherwise it becomes $-4x + 1 = 0$, a linear equation with the unique solution $x = 1/4$, NOT "no real solutions").\n\nCheck each choice:\n* A: $a = 5$, $\\Delta = 16 - 20 = -4 < 0$ \\checkmark.\n* B: $a = 4$, $\\Delta = 0$ — one real solution.\n* C: $a = 3$, $\\Delta = 4 > 0$ — two real solutions.\n* D: $a = 0$ — equation becomes $-4x + 1 = 0$, linear with $x = 1/4$.\n\n**Why the wrong answers are tempting:**\n* Choice B: "off-by-one" — boundary gives ONE solution, not zero.\n* Choice C: "wrong sign" — value gives two solutions.\n* Choice D: "edge case" — $a = 0$ kills the quadratic; equation becomes linear with one solution.\n\n**Test Day Takeaway:** When the leading coefficient is the parameter, also require $a \\neq 0$ to keep the equation quadratic. Otherwise the question is asking the wrong thing.',
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
    explanation: '**SAT Pattern: Discriminant Analysis**\n\n**The correct answer is $0$.**\n\n**The Fast Way (~15s):** $\\Delta = 0$: $b^2 - 100 = 0 \\Rightarrow b = \\pm 10$. Sum: $10 + (-10) = 0$.\n\n**The Full Solution:**\nFor exactly one real solution:\n$\\Delta = b^2 - 4(1)(25) = 0$\n$b^2 - 100 = 0$\n$b^2 = 100$\n$b = \\pm 10$.\n\nSum of values: $10 + (-10) = 0$.\n\nFaster: equation $b^2 = 100$ has roots symmetric about $b = 0$, so by symmetry the sum is $0$.\n\nVerification at $b = 10$: $x^2 + 10x + 25 = (x + 5)^2 = 0$, $x = -5$ \\checkmark.\nVerification at $b = -10$: $x^2 - 10x + 25 = (x - 5)^2 = 0$, $x = 5$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting only $10$ (one of the values, not the sum).\n* Computing $10 - (-10) = 20$ (the difference, not the sum).\n* Forgetting that $b^2 = 100$ has TWO roots (just taking the positive).\n\n**Test Day Takeaway:** "Sum of all possible values" of a parameter whose square equals a constant is $0$ — the roots are $\\pm$-pairs that cancel. Vieta\'s confirms it instantly.',
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
    explanation: '**SAT Pattern: Quadratic via Factoring**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Two numbers with product $12$ and sum $7$: $3$ and $4$. Factor: $(x + 3)(x + 4) = 0$. Roots: $x = -3, -4$.\n\n**The Full Solution:**\n$x^2 + 7x + 12 = 0$. Factor: find two numbers whose product is $12$ and sum is $7$.\n\n$3 \\times 4 = 12$ and $3 + 4 = 7$ \\checkmark.\n\nSo $x^2 + 7x + 12 = (x + 3)(x + 4) = 0$, giving $x = -3$ or $x = -4$.\n\nVerification: $(-3)^2 + 7(-3) + 12 = 9 - 21 + 12 = 0$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong sign" — gives the factor numbers themselves (forgets to negate for roots).\n* Choice C: "wrong base" — picks the original coefficients as roots.\n* Choice D: "wrong base" — negates the coefficients (still wrong).\n\n**Test Day Takeaway:** Factor $x^2 + bx + c$: find numbers with product $c$, sum $b$. The roots are the OPPOSITES of those numbers.',
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
    explanation: '**SAT Pattern: Quadratic via Factoring**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~5s):** Zero-product: $x - 6 = 0 \\Rightarrow x = 6$, or $x + 2 = 0 \\Rightarrow x = -2$. With $x > 0$: $x = 6$.\n\n**The Full Solution:**\nBy the zero-product property, at least one factor must equal $0$:\n* $x - 6 = 0 \\Rightarrow x = 6$.\n* $x + 2 = 0 \\Rightarrow x = -2$.\n\nThe constraint $x > 0$ selects $x = 6$.\n\nVerification: $(6 - 6)(6 + 2) = 0 \\cdot 8 = 0$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting $-2$ (the other root, excluded).\n* Reporting $-6$ or $2$ (drops the sign correctly per factor).\n* Reporting $12$ ($6 \\cdot 2$) — that\'s the product of the factor constants, irrelevant.\n\n**Test Day Takeaway:** Already-factored quadratic: the roots are the OPPOSITES of the constants inside each factor. $(x - 6)$ gives root $6$; $(x + 2)$ gives root $-2$.',
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
    explanation: '**SAT Pattern: Quadratic via Factoring**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Numbers with product $-14$ and sum $-5$: $-7$ and $2$. Factor: $(x - 7)(x + 2) = 0$. Roots: $x = 7$ or $x = -2$. Positive: $x = 7$.\n\n**The Full Solution:**\nFactor $x^2 - 5x - 14$ by finding numbers with product $-14$ and sum $-5$.\nBecause the product is NEGATIVE, the two numbers have opposite signs.\nTrying $-7$ and $2$: $-7 \\cdot 2 = -14$ \\checkmark and $-7 + 2 = -5$ \\checkmark.\n\n$x^2 - 5x - 14 = (x - 7)(x + 2) = 0$, so $x = 7$ or $x = -2$. Positive: $x = 7$.\n\nVerification: $7^2 - 5(7) - 14 = 49 - 35 - 14 = 0$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong sign" — picks the negative root, ignoring "positive" constraint.\n* Choice C: "wrong sign" — gives the factor number $-7$ instead of its opposite $7$.\n* Choice D: "wrong base" — uses constant term $14$ directly.\n\n**Test Day Takeaway:** When $c < 0$, the two factor numbers have OPPOSITE signs. The larger-magnitude one carries the sign of $b$.',
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
    explanation: '**SAT Pattern: Quadratic via Factoring**\n\n**The correct answer is $-4$.**\n\n**The Fast Way (~10s):** By Vieta\'s: sum of roots $= -b/a = -4/1 = -4$. (No need to factor!)\n\n**The Full Solution:**\nFor $ax^2 + bx + c = 0$, sum of roots $= -b/a$. Here $a = 1$, $b = 4$: sum $= -4$.\n\nVerification by factoring: numbers with product $-21$, sum $4$: $-3$ and $7$. Roots: $x = 3$ and $x = -7$. Sum: $3 + (-7) = -4$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting $4$ (forgets the negative sign in Vieta\'s).\n* Reporting $21$ or $-21$ (the constant, related to PRODUCT not sum).\n* Computing one root only.\n\n**Test Day Takeaway:** Vieta\'s formulas: for $x^2 + bx + c = 0$, sum of roots $= -b$, product of roots $= c$. Don\'t factor if you only need the sum or product.',
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
    explanation: '**SAT Pattern: Quadratic via Factoring**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Numbers with product $-30$ and sum $-1$: $-6$ and $5$. Factor: $(x - 6)(x + 5) = 0$. Roots: $x = 6$ or $x = -5$. Only Choice A ($6$) is a valid root.\n\n**The Full Solution:**\nFactor $x^2 - x - 30$: find numbers with product $-30$ and sum $-1$.\nTrying $-6$ and $5$: $-6 \\cdot 5 = -30$ \\checkmark and $-6 + 5 = -1$ \\checkmark.\n\n$x^2 - x - 30 = (x - 6)(x + 5) = 0$. Roots: $x = 6$ or $x = -5$.\n\nVerification: $6^2 - 6 - 30 = 36 - 6 - 30 = 0$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong sign" — uses the factor number $-6$ directly (root is $+6$).\n* Choice C: "wrong sign" — drops the sign on $-5$ (the actual other root).\n* Choice D: "wrong base" — picks constant $30$ as a root.\n\n**Test Day Takeaway:** When asked "which is A solution" (not all solutions), check the choices against the factored form. The roots are opposites of the factor constants.',
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
    explanation: '**SAT Pattern: Quadratic via Factoring**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~15s):** Numbers with product $24$, sum $-11$: $-3$ and $-8$. Factor: $(x - 3)(x - 8) = 0$. Roots $x = 3$ or $x = 8$. Greater: $8$.\n\n**The Full Solution:**\nFactor: find numbers with product $24$ and sum $-11$. Both negative since the product is positive and the sum is negative: $-3$ and $-8$.\n\n$x^2 - 11x + 24 = (x - 3)(x - 8) = 0$. Roots: $x = 3$ or $x = 8$.\n\nThe greater solution is $8$.\n\nVerification: $8^2 - 11(8) + 24 = 64 - 88 + 24 = 0$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting $3$ (the smaller root).\n* Reporting $-8$ (sign error on the factor).\n* Computing $11/2 = 5.5$ (vertex $x$-coordinate, not a root).\n\n**Test Day Takeaway:** When BOTH the constant ($c$) is positive AND the middle coefficient ($b$) is negative, BOTH roots are positive. Pick the one the question asks for (greater / lesser / sum).',
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
    explanation: '**SAT Pattern: Quadratic via Factoring**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** AC method: $a \\cdot c = 2 \\cdot (-4) = -8$. Need numbers with product $-8$, sum $7$: $-1$ and $8$. Rewrite: $2x^2 - x + 8x - 4 = x(2x - 1) + 4(2x - 1) = (2x - 1)(x + 4) = 0$. Roots: $x = 1/2$ or $x = -4$. Positive: $x = 1/2$.\n\n**The Full Solution:**\nFor $2x^2 + 7x - 4$, use the AC method:\n$a \\cdot c = 2 \\cdot (-4) = -8$. Find two numbers with product $-8$ and sum $7$: try $-1$ and $8$ — yes ($-1 \\cdot 8 = -8$ and $-1 + 8 = 7$).\n\nSplit the middle term:\n$2x^2 + 7x - 4 = 2x^2 - x + 8x - 4$\n$= x(2x - 1) + 4(2x - 1)$\n$= (2x - 1)(x + 4)$\n\nSet each factor to zero: $2x - 1 = 0 \\Rightarrow x = 1/2$, or $x + 4 = 0 \\Rightarrow x = -4$.\n\nPositive: $x = 1/2$.\n\nVerification: $2(1/2)^2 + 7(1/2) - 4 = 1/2 + 7/2 - 4 = 8/2 - 4 = 0$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong sign" — picks negative root, ignores "positive" constraint.\n* Choice C: "wrong sign" — gives factor number $-4$\'s opposite without recognizing the other factor.\n* Choice D: "wrong base" — picks the leading coefficient.\n\n**Test Day Takeaway:** Non-monic quadratic (leading coefficient $\\ne 1$): use the AC method. Multiply $a \\cdot c$ to find the product target; the sum is still $b$.',
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
    explanation: '**SAT Pattern: Quadratic via Factoring**\n\n**The correct answer is $15$.**\n\n**The Fast Way (~15s):** Substitute $x = -3$: $9 - 24 + k = 0 \\Rightarrow k = 15$.\n\n**The Full Solution:**\nIf $-3$ is a solution, it must satisfy the equation:\n$(-3)^2 + 8(-3) + k = 0$\n$9 - 24 + k = 0$\n$-15 + k = 0$\n$k = 15$.\n\nVerification by factoring: at $k = 15$, $x^2 + 8x + 15 = (x + 3)(x + 5) = 0$, so $x = -3$ or $x = -5$ \\checkmark — $-3$ is a root.\n\n**Common Mistakes to Avoid:**\n* Sign error on $(-3)^2$: writing $-9$ instead of $9$.\n* Sign error on $8(-3)$: writing $+24$ instead of $-24$.\n* Forgetting to substitute — trying to factor without using the given root.\n\n**Test Day Takeaway:** Given a root, SUBSTITUTE rather than factor. Plug the root value into the equation and solve for the unknown coefficient.',
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
    explanation: '**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice A is correct.**\n\n**The Fast Way:** $f(-2) = 3(-2) + 4 = -6 + 4 = -2$.\n\n**Why the wrong answers are tempting:** B drops the sign; C subtracts $4$; D drops the input sign entirely.\n\n**Test Day Takeaway:** Negative inputs: keep the sign through multiplication. $3 \\cdot (-2) = -6$, not $+6$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-evaluation-with-negative-input', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-149', domain: 'advanced-math', skills: ['function-evaluation'], difficulty: 'easy', type: 'fill-in',
    question: 'The function $g$ is defined by $g(x) = -2x + 5$. What is the value of $g(-3)$?',
    correctAnswer: '11',
    explanation: '**SAT Pattern: Function Evaluation with Negative Input**\n\n**The correct answer is $11$.**\n\n**The Fast Way:** $g(-3) = -2(-3) + 5 = 6 + 5 = 11$.\n\n**Common Mistakes:** Reporting $-1$ (sign error on $-2(-3)$); reporting $-11$.\n\n**Test Day Takeaway:** Two negatives multiply to positive: $-2 \\cdot -3 = +6$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-evaluation-with-negative-input', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-150', domain: 'advanced-math', skills: ['function-evaluation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = x^2 - 4x + 7$. What is the value of $f(-2)$?',
    choices: [{ id: 'A', text: '$19$' }, { id: 'B', text: '$3$' }, { id: 'C', text: '$15$' }, { id: 'D', text: '$11$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice A is correct.**\n\n**The Fast Way:** $f(-2) = (-2)^2 - 4(-2) + 7 = 4 + 8 + 7 = 19$.\n\n**The Full Solution:** $(-2)^2 = 4$ (squaring removes sign). $-4 \\cdot -2 = +8$. Sum: $4 + 8 + 7 = 19$ \\checkmark.\n\n**Why the wrong answers are tempting:** B substitutes $+2$; C drops the $-4(-2)$ sign; D forgets to square or add.\n\n**Test Day Takeaway:** $(-a)^2 = a^2$ and $-b(-a) = +ba$. Two sign flips per negative input.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-evaluation-with-negative-input', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-151', domain: 'advanced-math', skills: ['function-evaluation'], difficulty: 'medium', type: 'fill-in',
    question: 'The function $h$ is defined by $h(x) = 2x^2 + 5x - 1$. What is the value of $h(-4)$?',
    correctAnswer: '11',
    explanation: '**SAT Pattern: Function Evaluation with Negative Input**\n\n**The correct answer is $11$.**\n\n**The Fast Way:** $h(-4) = 2(16) + 5(-4) - 1 = 32 - 20 - 1 = 11$.\n\n**Common Mistakes:** Treating $(-4)^2$ as $-16$; sign error on $5(-4)$.\n\n**Test Day Takeaway:** Square the negative FIRST, then apply the leading coefficient. $2(-4)^2 = 2(16) = 32$, NOT $-32$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-evaluation-with-negative-input', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-152', domain: 'advanced-math', skills: ['function-evaluation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = -x^2 + 3x + 5$. What is the value of $f(-3)$?',
    choices: [{ id: 'A', text: '$-13$' }, { id: 'B', text: '$5$' }, { id: 'C', text: '$13$' }, { id: 'D', text: '$-5$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice A is correct.**\n\n**The Fast Way:** $f(-3) = -(-3)^2 + 3(-3) + 5 = -9 - 9 + 5 = -13$.\n\n**The Full Solution:** $-(-3)^2 = -(9) = -9$. $3(-3) = -9$. Sum: $-9 - 9 + 5 = -13$ \\checkmark.\n\n**Why the wrong answers are tempting:** B forgets one term; C drops the leading negative ($+9 + (-9) + 5 = 5$, wait...); D arithmetic slip.\n\n**Test Day Takeaway:** Leading $-x^2$: square FIRST, then negate. $-(-3)^2 = -9$, NOT $+9$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-evaluation-with-negative-input', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-153', domain: 'advanced-math', skills: ['function-evaluation'], difficulty: 'medium', type: 'fill-in',
    question: 'The function $f$ is defined by $f(x) = (x + 2)^2 - 5$. What is the value of $f(-5)$?',
    correctAnswer: '4',
    explanation: '**SAT Pattern: Function Evaluation with Negative Input**\n\n**The correct answer is $4$.**\n\n**The Fast Way:** $f(-5) = (-5 + 2)^2 - 5 = (-3)^2 - 5 = 9 - 5 = 4$.\n\n**Common Mistakes:** Treating $(-3)^2$ as $-9$; computing $(-5 - 2)^2 = 49$.\n\n**Test Day Takeaway:** PEMDAS — inside parens first, then exponent.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-evaluation-with-negative-input', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-154', domain: 'advanced-math', skills: ['function-evaluation'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The functions $f$ and $g$ are defined by $f(x) = 3x^2 - 2x - 1$ and $g(x) = -x + 1$. What is the value of $f(-1) + g(-1)$?',
    choices: [{ id: 'A', text: '$6$' }, { id: 'B', text: '$4$' }, { id: 'C', text: '$2$' }, { id: 'D', text: '$0$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice A is correct.**\n\n**The Fast Way:** $f(-1) = 3 + 2 - 1 = 4$. $g(-1) = 1 + 1 = 2$. Sum: $6$.\n\n**The Full Solution:** $f(-1) = 3(-1)^2 - 2(-1) - 1 = 3 + 2 - 1 = 4$. $g(-1) = -(-1) + 1 = 2$. $f + g = 6$ \\checkmark.\n\n**Why the wrong answers are tempting:** B gives $f$ only; C gives $g$ only; D drops the squaring.\n\n**Test Day Takeaway:** Two functions at the same input: evaluate each separately, then combine.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-evaluation-with-negative-input', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-155', domain: 'advanced-math', skills: ['function-evaluation'], difficulty: 'hard', type: 'fill-in',
    question: 'The function $f$ is defined by $f(x) = x^3 + 2x$. What is the value of $f(-3)$?',
    correctAnswer: '-33',
    explanation: '**SAT Pattern: Function Evaluation with Negative Input**\n\n**The correct answer is $-33$.**\n\n**The Fast Way:** $f(-3) = (-3)^3 + 2(-3) = -27 - 6 = -33$.\n\n**Common Mistakes:** Treating $(-3)^3$ as $+27$ (only EVEN powers cancel signs); arithmetic on $-27 - 6$.\n\n**Test Day Takeaway:** $(-a)^3 = -a^3$ (ODD power keeps the sign). Only EVEN powers neutralize the negative.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'function-evaluation-with-negative-input', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  // ===== Phase 2 batch 8/4: discriminant-with-integer-bound (8 items) =====
  // Pattern: solve b² − 4ac < 0 (or > 0) and find the greatest/least integer
  // satisfying the bound. 7 test occurrences across PT2/3 + M2Easy. Title:
  // 'Discriminant with Integer Bound'.
  { id: 'bank-am-156', domain: 'advanced-math', skills: ['discriminant-analysis'], difficulty: 'easy', type: 'multiple-choice',
    question: 'If $x^2 + bx + 16 = 0$ has no real solutions and $b > 0$, which value of $b$ is possible?',
    choices: [{ id: 'A', text: '$7$' }, { id: 'B', text: '$8$' }, { id: 'C', text: '$9$' }, { id: 'D', text: '$10$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice A is correct.**\n\n**The Fast Way:** $b^2 - 64 < 0 \\Rightarrow |b| < 8$. With $b > 0$: $0 < b < 8$. Only $b = 7$ works.\n\n**The Full Solution:** No real solutions ⇔ Δ < 0: $b^2 - 4(1)(16) < 0 ⇒ b^2 < 64 ⇒ -8 < b < 8$. Positive integer < 8 from the options: $7$.\n\n**Why the wrong answers are tempting:** B is at the boundary (Δ = 0, one solution); C/D give Δ > 0.\n\n**Test Day Takeaway:** Strict inequality EXCLUDES the boundary.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'discriminant-with-integer-bound', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-157', domain: 'advanced-math', skills: ['discriminant-analysis'], difficulty: 'easy', type: 'fill-in',
    question: 'For $x^2 + bx + 25 = 0$ to have no real solutions and $b > 0$, what is the greatest positive integer value $b$ can take?',
    correctAnswer: '9',
    explanation: '**SAT Pattern: Discriminant with Integer Bound**\n\n**The correct answer is $9$.**\n\n**The Fast Way:** $b^2 - 100 < 0 ⇒ |b| < 10$. Greatest integer < 10: $9$.\n\n**Common Mistakes:** Reporting $10$ (boundary gives Δ = 0).\n\n**Test Day Takeaway:** "Greatest integer LESS than $n$" is $n - 1$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'discriminant-with-integer-bound', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-158', domain: 'advanced-math', skills: ['discriminant-analysis'], difficulty: 'medium', type: 'multiple-choice',
    question: 'For $5x^2 + bx + 45 = 0$ to have no real solutions, what is the greatest positive integer value of $b$?',
    choices: [{ id: 'A', text: '$29$' }, { id: 'B', text: '$30$' }, { id: 'C', text: '$28$' }, { id: 'D', text: '$900$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice A is correct.**\n\n**The Fast Way:** $b^2 - 4(5)(45) < 0 ⇒ b^2 < 900 ⇒ |b| < 30$. Greatest integer < 30: $29$.\n\n**Why the wrong answers are tempting:** B at boundary; C off-by-one twice; D gives $b^2$ bound.\n\n**Test Day Takeaway:** Don\'t skip leading coefficient $a$ in $4ac$. $4(5)(45) = 900$, not $180$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'discriminant-with-integer-bound', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-159', domain: 'advanced-math', skills: ['discriminant-analysis'], difficulty: 'medium', type: 'fill-in',
    question: 'For $2x^2 - kx + 8 = 0$ to have two distinct real solutions where $k > 0$, what is the least positive integer value of $k$?',
    correctAnswer: '9',
    explanation: '**SAT Pattern: Discriminant with Integer Bound**\n\n**The correct answer is $9$.**\n\n**The Fast Way:** Δ > 0: $k^2 - 64 > 0 ⇒ |k| > 8$. Least integer > 8: $9$.\n\n**Common Mistakes:** Reporting $8$ (boundary); reporting $7$ (wrong inequality direction).\n\n**Test Day Takeaway:** "Two distinct" ⇔ Δ STRICTLY > 0. Boundary excluded.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'discriminant-with-integer-bound', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-160', domain: 'advanced-math', skills: ['discriminant-analysis'], difficulty: 'medium', type: 'multiple-choice',
    question: 'For $x^2 + bx + 9 = 0$ to have no real solutions, the integer $b$ satisfies which of the following?',
    choices: [{ id: 'A', text: '$-5 \\leq b \\leq 5$' }, { id: 'B', text: '$-6 \\leq b \\leq 6$' }, { id: 'C', text: '$b > 6$' }, { id: 'D', text: '$b < -6$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice A is correct.**\n\n**The Fast Way:** $b^2 - 36 < 0 ⇒ |b| < 6 ⇒ -6 < b < 6$. Integer values: $-5, -4, \\ldots, 5$, i.e., $-5 \\leq b \\leq 5$.\n\n**Why the wrong answers are tempting:** B includes boundaries (Δ = 0 at $\\pm 6$); C/D give Δ > 0.\n\n**Test Day Takeaway:** STRICT $|b| < 6$ + integer constraint = $|b| \\leq 5$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'discriminant-with-integer-bound', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-161', domain: 'advanced-math', skills: ['discriminant-analysis'], difficulty: 'medium', type: 'fill-in',
    question: 'For $3x^2 + 12x + c = 0$ to have no real solutions, what is the least integer value of $c$?',
    correctAnswer: '13',
    explanation: '**SAT Pattern: Discriminant with Integer Bound**\n\n**The correct answer is $13$.**\n\n**The Fast Way:** Δ < 0: $144 - 12c < 0 ⇒ c > 12$. Least integer > 12: $13$.\n\n**Common Mistakes:** Reporting $12$ (boundary).\n\n**Test Day Takeaway:** "Least integer GREATER than $n$" is $n + 1$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'discriminant-with-integer-bound', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-162', domain: 'advanced-math', skills: ['discriminant-analysis'], difficulty: 'hard', type: 'multiple-choice',
    question: 'How many integer values of $b$ result in $x^2 + bx + 12 = 0$ having no real solutions?',
    choices: [{ id: 'A', text: '$13$' }, { id: 'B', text: '$12$' }, { id: 'C', text: '$11$' }, { id: 'D', text: '$15$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice A is correct.**\n\n**The Fast Way:** $b^2 - 48 < 0 ⇒ b^2 < 48 ⇒ |b| < \\sqrt{48} \\approx 6.93$. Integers: $-6, -5, \\ldots, 6$. Count: $6 - (-6) + 1 = 13$.\n\n**The Full Solution:** Δ < 0: $b^2 < 48$. $\\sqrt{48} \\approx 6.93$. Integer $b$ with $|b| \\leq 6$: $-6, -5, \\ldots, 0, \\ldots, 6$. That\'s $13$ integers.\n\n**Why the wrong answers are tempting:** B forgets to include $0$ or count one end; C off-by-one; D extends bounds wrongly.\n\n**Test Day Takeaway:** Count integers in $[-n, n]$: $2n + 1$ (don\'t forget $0$).',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'discriminant-with-integer-bound', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-163', domain: 'advanced-math', skills: ['discriminant-analysis'], difficulty: 'hard', type: 'fill-in',
    question: 'For $x^2 + bx + 50 = 0$ to have no real solutions and $b$ a positive integer, what is the greatest possible value of $b$?',
    correctAnswer: '14',
    explanation: '**SAT Pattern: Discriminant with Integer Bound**\n\n**The correct answer is $14$.**\n\n**The Fast Way:** Δ < 0: $b^2 < 200$. $\\sqrt{200} \\approx 14.14$. Greatest positive integer $\\leq 14$: $14$.\n\n**Common Mistakes:** Reporting $15$ ($15^2 = 225 > 200$, no solution exists with two roots); reporting $13$ off-by-one.\n\n**Test Day Takeaway:** Take square root to find the bound, then take floor for the greatest integer.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'discriminant-with-integer-bound', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  // ===== Phase 2 batch 8/5: vertex-form-maximum (8 items) =====
  // Pattern: find the maximum/minimum value (or x-coordinate of vertex) of a
  // quadratic by completing the square or using x = -b/(2a). 6 test occurrences
  // across PT3, PT7 etc. Title: 'Vertex Form Maximum'.
  { id: 'bank-am-164', domain: 'advanced-math', skills: ['converting-quadratic-forms'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = (x - 3)^2 + 4$. What is the minimum value of $f(x)$?',
    choices: [{ id: 'A', text: '$4$' }, { id: 'B', text: '$3$' }, { id: 'C', text: '$-4$' }, { id: 'D', text: '$13$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Vertex Form Maximum**\n\n**Choice A is correct.**\n\n**The Fast Way:** Vertex form $(x - h)^2 + k$: minimum value is $k = 4$.\n\n**The Full Solution:** $(x - 3)^2 \\geq 0$ for all $x$, with equality at $x = 3$. So minimum of $f$ is $0 + 4 = 4$.\n\n**Why the wrong answers are tempting:** B gives $h$; C sign flip; D adds $9 + 4 = 13$.\n\n**Test Day Takeaway:** Vertex form $f(x) = (x - h)^2 + k$: minimum value is $k$. Vertex is $(h, k)$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-maximum', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-165', domain: 'advanced-math', skills: ['converting-quadratic-forms'], difficulty: 'easy', type: 'fill-in',
    question: 'What is the maximum value of $f(x) = -(x + 2)^2 + 7$?',
    correctAnswer: '7',
    explanation: '**SAT Pattern: Vertex Form Maximum**\n\n**The correct answer is $7$.**\n\n**The Fast Way:** Negative leading coefficient $\\Rightarrow$ parabola opens DOWN $\\Rightarrow$ maximum at vertex. Value: $k = 7$.\n\n**Common Mistakes:** Reporting $-2$ ($h$); reporting $-7$.\n\n**Test Day Takeaway:** $f(x) = -(x - h)^2 + k$: maximum value is $k$ (parabola opens DOWN).',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-maximum', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-166', domain: 'advanced-math', skills: ['converting-quadratic-forms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What is the minimum value of $g(x) = 2x^2 - 8x + 11$?',
    choices: [{ id: 'A', text: '$3$' }, { id: 'B', text: '$11$' }, { id: 'C', text: '$2$' }, { id: 'D', text: '$-3$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Vertex Form Maximum**\n\n**Choice A is correct.**\n\n**The Fast Way:** $x_{\\text{vertex}} = -b/(2a) = 8/4 = 2$. $g(2) = 8 - 16 + 11 = 3$.\n\n**The Full Solution:** Complete the square: $g(x) = 2(x^2 - 4x) + 11 = 2(x - 2)^2 - 8 + 11 = 2(x - 2)^2 + 3$. Minimum: $3$.\n\n**Why the wrong answers are tempting:** B is $g(0)$; C is leading coefficient; D sign error.\n\n**Test Day Takeaway:** Minimum of $ax^2 + bx + c$ with $a > 0$: use $x = -b/(2a)$, then evaluate.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-maximum', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-167', domain: 'advanced-math', skills: ['converting-quadratic-forms'], difficulty: 'medium', type: 'fill-in',
    question: 'The function $h(t) = -16t^2 + 64t + 5$ models the height in feet of a ball $t$ seconds after being thrown upward. At what time, in seconds, does the ball reach its maximum height?',
    correctAnswer: '2',
    explanation: '**SAT Pattern: Vertex Form Maximum**\n\n**The correct answer is $2$.**\n\n**The Fast Way:** $t = -b/(2a) = -64/(-32) = 2$.\n\n**The Full Solution:** $a = -16$, $b = 64$. Max at $t = -64/(2 \\cdot -16) = 2$ seconds.\n\n**Common Mistakes:** Solving $h(t) = 0$ (gives when ball lands, not max).\n\n**Test Day Takeaway:** Projectile motion: time at MAX height is $t = -b/(2a)$, not where $h = 0$.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'vertex-form-maximum', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-168', domain: 'advanced-math', skills: ['converting-quadratic-forms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What is the maximum value of $f(x) = -x^2 + 6x - 4$?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$-4$' }, { id: 'C', text: '$3$' }, { id: 'D', text: '$9$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Vertex Form Maximum**\n\n**Choice A is correct.**\n\n**The Fast Way:** $x_v = -6/(-2) = 3$. $f(3) = -9 + 18 - 4 = 5$.\n\n**Why the wrong answers are tempting:** B is $f(0)$; C is $x_v$; D forgets to subtract $4$.\n\n**Test Day Takeaway:** Negative leading coefficient ⇒ parabola opens DOWN ⇒ vertex is the MAXIMUM.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-maximum', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-169', domain: 'advanced-math', skills: ['converting-quadratic-forms'], difficulty: 'medium', type: 'fill-in',
    question: 'What is the $x$-coordinate of the vertex of the parabola $y = x^2 + 10x + 21$?',
    correctAnswer: '-5',
    explanation: '**SAT Pattern: Vertex Form Maximum**\n\n**The correct answer is $-5$.**\n\n**The Fast Way:** $x = -b/(2a) = -10/2 = -5$.\n\n**Common Mistakes:** Reporting $5$ (sign error); reporting $-21$ (uses $c$).\n\n**Test Day Takeaway:** Vertex $x$-coordinate formula: $-b/(2a)$. The sign of $b$ flips going into the formula.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-maximum', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-170', domain: 'advanced-math', skills: ['converting-quadratic-forms'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The function $f(x) = 3x^2 - 12x + 17$ has its minimum value at $x = a$. What is the minimum value of $f(x)$?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$2$' }, { id: 'C', text: '$17$' }, { id: 'D', text: '$-5$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Vertex Form Maximum**\n\n**Choice A is correct.**\n\n**The Fast Way:** $x_v = -(-12)/(2 \\cdot 3) = 12/6 = 2$. $f(2) = 12 - 24 + 17 = 5$.\n\n**The Full Solution:** $f(2) = 3(4) - 12(2) + 17 = 12 - 24 + 17 = 5$.\n\n**Why the wrong answers are tempting:** B is $a$; C is $f(0)$; D sign error.\n\n**Test Day Takeaway:** Two-step: find $x_v$, then EVALUATE.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'vertex-form-maximum', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-171', domain: 'advanced-math', skills: ['converting-quadratic-forms'], difficulty: 'hard', type: 'fill-in',
    question: 'The function $f$ is defined by $f(x) = -2x^2 + 8x + k$. If the maximum value of $f$ is $15$, what is the value of $k$?',
    correctAnswer: '7',
    explanation: '**SAT Pattern: Vertex Form Maximum**\n\n**The correct answer is $7$.**\n\n**The Fast Way:** $x_v = -8/(-4) = 2$. $f(2) = -8 + 16 + k = 8 + k$. Max = $15 ⇒ k = 7$.\n\n**The Full Solution:** Vertex at $x = 2$. $f(2) = -2(4) + 8(2) + k = -8 + 16 + k = 8 + k$. Set equal to max: $8 + k = 15 ⇒ k = 7$.\n\n**Common Mistakes:** Setting $k = 15$ (treats $k$ as max directly); sign error on $-2(4)$.\n\n**Test Day Takeaway:** When the max/min VALUE is given, evaluate at the vertex and solve for the unknown coefficient.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'vertex-form-maximum', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  // ===== Phase 2 batch 9/2: function-composition (8 items) =====
  // 6 test occurrences. Title verbatim: 'Function Composition'.
  { id: 'bank-am-172', domain: 'advanced-math', skills: ['function-composition'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The functions $f$ and $g$ are defined by $f(x) = 2x + 1$ and $g(x) = x - 3$. What is the value of $f(g(5))$?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$8$' }, { id: 'C', text: '$11$' }, { id: 'D', text: '$2$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Function Composition**\n\n**Choice A is correct.**\n\n**The Fast Way:** $g(5) = 2$. $f(2) = 5$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($8$): swaps the composition order — computes $g(f(5)) = g(11) = 8$ instead of $f(g(5))$.\n* Choice C ($11$): stops at $f(5) = 11$ — forgets to apply $g$ first.\n* Choice D ($2$): reports $g(5) = 2$ alone — forgets to apply $f$ at the end.\n\n**Test Day Takeaway:** $f(g(x))$: inner FIRST, then outer.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-composition', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-173', domain: 'advanced-math', skills: ['function-composition'], difficulty: 'easy', type: 'fill-in',
    question: 'The functions $f$ and $g$ are defined by $f(x) = x^2$ and $g(x) = x + 1$. What is the value of $f(g(2))$?',
    correctAnswer: '9',
    explanation: '**SAT Pattern: Function Composition**\n\n**The correct answer is $9$.**\n\n**The Fast Way:** $g(2) = 3$. $f(3) = 9$.\n\n**Test Day Takeaway:** Inner function first.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-composition', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-174', domain: 'advanced-math', skills: ['function-composition'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The functions $f$ and $g$ are defined by $f(x) = 3x + 4$ and $g(x) = x - 1$. What is the value of $g(f(2))$?',
    choices: [{ id: 'A', text: '$9$' }, { id: 'B', text: '$10$' }, { id: 'C', text: '$2$' }, { id: 'D', text: '$7$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Function Composition**\n\n**Choice A is correct.**\n\n**The Fast Way:** $f(2) = 10$. $g(10) = 9$.\n\n**Why the wrong answers are tempting:** B is $f(2)$; C is input; D is $f(g(2))$ (reverse order).\n\n**Test Day Takeaway:** $g(f(x))$ vs $f(g(x))$: ORDER MATTERS.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-composition', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-175', domain: 'advanced-math', skills: ['function-composition'], difficulty: 'medium', type: 'fill-in',
    question: 'The functions $f$ and $g$ are defined by $f(x) = 2x^2 - 3x + 4$ and $g(x) = x + 1$. What is the value of $f(g(2))$?',
    correctAnswer: '13',
    explanation: '**SAT Pattern: Function Composition**\n\n**The correct answer is $13$.**\n\n**The Fast Way:** $g(2) = 3$. $f(3) = 18 - 9 + 4 = 13$.\n\n**Test Day Takeaway:** Inner function gives the input to the outer.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-composition', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-176', domain: 'advanced-math', skills: ['function-composition'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The functions $f$ and $g$ are defined by $f(x) = x^2 + 1$ and $g(x) = 2x - 3$, and the function $h$ is defined by $h(x) = f(g(x))$. What is the value of $h(2)$?',
    choices: [{ id: 'A', text: '$2$' }, { id: 'B', text: '$5$' }, { id: 'C', text: '$3$' }, { id: 'D', text: '$1$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Function Composition**\n\n**Choice A is correct.**\n\n**The Fast Way:** $g(2) = 1$. $f(1) = 2$.\n\n**Why the wrong answers are tempting:** B is $f(2)$; C arbitrary; D is $g(2)$ off-by-one.\n\n**Test Day Takeaway:** $h(x) = f(g(x))$ — evaluate $g$ first.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-composition', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-177', domain: 'advanced-math', skills: ['function-composition'], difficulty: 'medium', type: 'fill-in',
    question: 'The functions $f$ and $g$ are defined by $f(x) = x + 4$ and $g(x) = 3x$. What is the value of $f(g(2)) - g(f(2))$?',
    correctAnswer: '-8',
    explanation: '**SAT Pattern: Function Composition**\n\n**The correct answer is $-8$.**\n\n**The Fast Way:** $f(g(2)) = f(6) = 10$. $g(f(2)) = g(6) = 18$. $10 - 18 = -8$.\n\n**Test Day Takeaway:** Composition order matters; the same $g(2) = f(2) = 6$ can give different results when reused.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-composition', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-178', domain: 'advanced-math', skills: ['function-composition'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = 2x + 5$. If $f(g(3)) = 13$, what is the value of $g(3)$?',
    choices: [{ id: 'A', text: '$4$' }, { id: 'B', text: '$3$' }, { id: 'C', text: '$13$' }, { id: 'D', text: '$11$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Function Composition**\n\n**Choice A is correct.**\n\n**The Fast Way:** $f(\\text{something}) = 13 \\Rightarrow 2 \\cdot (\\text{something}) + 5 = 13 \\Rightarrow \\text{something} = 4$. So $g(3) = 4$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($3$): treats $f(g(3)) = 13$ as the question — reports the inner input, not the inner output.\n* Choice C ($13$): copies the right-hand side back as the answer — formula confusion.\n* Choice D ($11$): forward-solves $f(3) = 11$ — applies $f$ to $3$ directly, ignoring $g$.\n\n**Test Day Takeaway:** Work BACKWARD from $f$\'s output to find $f$\'s input, which is $g(3)$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-composition', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-179', domain: 'advanced-math', skills: ['function-composition'], difficulty: 'hard', type: 'fill-in',
    question: 'The functions $f$ and $g$ are defined by $f(x) = x^2 + 2$ and $g(x) = ax - 1$, where $a$ is a positive constant. If $f(g(2)) = 11$, what is the value of $a$?',
    correctAnswer: '2',
    explanation: '**SAT Pattern: Function Composition**\n\n**The correct answer is $2$.**\n\n**The Fast Way:** $f(g(2)) = 11 \\Rightarrow (g(2))^2 + 2 = 11 \\Rightarrow (g(2))^2 = 9 \\Rightarrow g(2) = \\pm 3$. With $a > 0$: $g(2) = 2a - 1$ positive, choose $g(2) = 3$, so $2a - 1 = 3 \\Rightarrow a = 2$.\n\n**Test Day Takeaway:** Backward composition with TWO unknowns and a constraint: solve in two stages.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'function-composition', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  // ===== Phase 2 batch 13/5: exponential-growth-model (8 items) =====
  { id: 'bank-am-180', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A bacteria culture begins with $50$ bacteria, and the number of bacteria in the culture doubles every $2$ hours. What is the number of bacteria in the culture after $8$ hours?',
    choices: [{ id: 'A', text: '$800$' }, { id: 'B', text: '$200$' }, { id: 'C', text: '$400$' }, { id: 'D', text: '$1{,}600$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** In $8$ hours there are $8/2 = 4$ doubling periods. $50 \\cdot 2^4 = 50 \\cdot 16 = 800$.\n\n**The Full Solution:**\nThe doubling period is $2$ hours, so in $8$ hours the population doubles $8/2 = 4$ times.\n$P(8) = 50 \\cdot 2^4 = 50 \\cdot 16 = 800$.\n\nVerification: at $t = 2$, $P = 100$. At $t = 4$, $P = 200$. At $t = 6$, $P = 400$. At $t = 8$, $P = 800$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B ($200$): assumes the doubling period is $1$ hour and stops at $t = 2$ — uses $50 \\cdot 2^2$, or equivalently treats \"every $2$ hours\" as the elapsed time.\n* Choice C ($400$): off-by-one — counts $3$ doublings instead of $4$ ($50 \\cdot 2^3$).\n* Choice D ($1{,}600$): off-by-one in the other direction — counts $5$ doublings instead of $4$, or treats $8$ hours as the exponent: $50 \\cdot 2^5$.\n\n**Test Day Takeaway:** When the doubling period is not $1$ unit, the exponent is (elapsed time) / (doubling period), not the elapsed time itself.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-growth-model', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-am-181', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'easy', type: 'fill-in',
    question: 'A population grows according to $P(t) = 100 \\cdot 3^t$ where $t$ is years. What is the population at $t = 2$?',
    correctAnswer: '900',
    explanation: '**SAT Pattern: Exponential Growth Model**\n\n**The correct answer is $900$.**\n\n**The Fast Way:** $100 \\cdot 9 = 900$.\n\n**Test Day Takeaway:** $P(t) = P_0 b^t$. Plug in $t$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-growth-model', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-182', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'medium', type: 'multiple-choice',
    question: 'An investment grows according to $V(t) = 1000(1.05)^t$. By what factor does the investment grow each year?',
    choices: [{ id: 'A', text: '$1.05$' }, { id: 'B', text: '$0.05$' }, { id: 'C', text: '$1000$' }, { id: 'D', text: '$5\\%$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Exponential Growth Model**\n\n**Choice A is correct.**\n\n**The Fast Way:** Base of exponent = annual growth FACTOR = $1.05$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($0.05$): reports the RATE (not the factor) — the rate is $r = 0.05$ but the FACTOR is $1 + r = 1.05$.\n* Choice C ($1000$): reports the initial value as the growth factor — value vs. multiplier confusion.\n* Choice D ($5\\%$): reports the rate in percent form — close to right but mis-labels factor as rate.\n\n**Test Day Takeaway:** "Factor" includes the principal; "rate" or "percent" is just $0.05$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-growth-model', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-183', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'medium', type: 'fill-in',
    question: 'A population of $200$ animals grows by $8\\%$ each year. Which formula gives the population after $t$ years? (Express as a decimal multiplier.)',
    correctAnswer: '1.08',
    explanation: '**SAT Pattern: Exponential Growth Model**\n\n**The correct answer is $1.08$.**\n\n**The Fast Way:** $8\\%$ growth ⇒ multiplier $1 + 0.08 = 1.08$ per year. $P(t) = 200(1.08)^t$. (Asking specifically for the multiplier: $1.08$.)\n\n**Test Day Takeaway:** Growth rate $r$ ⇒ multiplier $1 + r$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-growth-model', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-184', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'medium', type: 'multiple-choice',
    question: 'An exponential decay function is $f(t) = 500(0.85)^t$. By what percent does the function decrease each year?',
    choices: [{ id: 'A', text: '$15\\%$' }, { id: 'B', text: '$85\\%$' }, { id: 'C', text: '$50\\%$' }, { id: 'D', text: '$5\\%$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Exponential Growth Model**\n\n**Choice A is correct.**\n\n**The Fast Way:** Decay factor $0.85 = 1 - 0.15$ ⇒ $15\\%$ decrease.\n\n**Why the wrong answers are tempting:**\n* Choice B ($85\\%$): reports the multiplier $0.85$ in percent form — confuses MULTIPLIER with DECAY rate.\n* Choice C ($50\\%$): halves the answer — no clear derivation, distractor.\n* Choice D ($5\\%$): reads the decimal digits ($0.85 \\to 5$) — surface misread.\n\n**Test Day Takeaway:** Decay multiplier $1 - r$ ⇒ $r$ is the decay percent.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-growth-model', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-185', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'medium', type: 'fill-in',
    question: 'A car worth $\\$20{,}000$ depreciates at $10\\%$ per year. What is its value, in dollars, after $2$ years?',
    correctAnswer: '16200',
    explanation: '**SAT Pattern: Exponential Growth Model**\n\n**The correct answer is $16200$.**\n\n**The Fast Way:** $20000 \\cdot (0.9)^2 = 20000 \\cdot 0.81 = 16200$.\n\n**Test Day Takeaway:** Depreciation = exponential decay with $(1 - r)^t$.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'exponential-growth-model', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-186', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A population is modeled by $P(t) = 1000 \\cdot 2^{t/4}$ where $t$ is years. After how many years will the population reach $4000$?',
    choices: [{ id: 'A', text: '$8$' }, { id: 'B', text: '$4$' }, { id: 'C', text: '$2$' }, { id: 'D', text: '$16$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Exponential Growth Model**\n\n**Choice A is correct.**\n\n**The Fast Way:** $4000/1000 = 4 = 2^2$. So $t/4 = 2 ⇒ t = 8$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($4$): solves $2^t = 4$ ignoring the $/4$ in the exponent — drops the period scaling.\n* Choice C ($2$): mis-reads the doubling period as $2$ years — coefficient confusion.\n* Choice D ($16$): doubles the answer — applies the doubling period wrong direction.\n\n**Test Day Takeaway:** When doubling rate is given (e.g., every $4$ years), solve $2^k = $ ratio.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-growth-model', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-am-187', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'hard', type: 'fill-in',
    question: 'A radioactive substance has a half-life of $10$ years. If the initial amount is $80$ grams, how many grams remain after $30$ years?',
    correctAnswer: '10',
    explanation: '**SAT Pattern: Exponential Growth Model**\n\n**The correct answer is $10$.**\n\n**The Fast Way:** $30/10 = 3$ half-lives. $80 \\cdot (1/2)^3 = 80/8 = 10$.\n\n**Test Day Takeaway:** Half-life $h$: amount = $A_0 (1/2)^{t/h}$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-growth-model', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },

  // ─── VIETA'S SUM/PRODUCT OF ROOTS (bank-am-188..195) ──────────────────────
  // Granularity principle (2026-05-12): Vieta's (sum=-b/a, product=c/a) is a
  // DISTINCT method from factoring. Items pin direct-Vieta's approach.
  { id: 'bank-am-188', domain: 'advanced-math', skills: ['quadratic-factoring'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The quadratic equation $2x^2 - 10x + 7 = 0$ has two real solutions. What is the sum of these solutions?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$-5$' }, { id: 'C', text: '$10$' }, { id: 'D', text: '$3.5$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Sum/Product of Roots — Vieta's**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Sum of roots $= -b/a = -(-10)/2 = 5$. No need to solve the quadratic.\n\n**The Full Solution:**\nVieta's: if $ax^2 + bx + c = 0$ has roots $r_1, r_2$, then $r_1 + r_2 = -b/a$.\nHere $a = 2$, $b = -10$: sum $= -(-10)/2 = 5$.\n\nVerification: roots are $x = \\frac{10 \\pm \\sqrt{44}}{4}$. Sum $= \\frac{10 + \\sqrt{44}}{4} + \\frac{10 - \\sqrt{44}}{4} = \\frac{20}{4} = 5$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* B: sign error — uses $b/a$.\n* C: drops the $/a$ entirely.\n* D: confuses with $c/a$ (the product).\n\n**Test Day Takeaway:** Sum $= -b/a$, product $= c/a$. Faster than solving the quadratic, especially for irrational roots.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vieta-sum-product-of-roots', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-am-189', domain: 'advanced-math', skills: ['quadratic-factoring'], difficulty: 'easy', type: 'fill-in',
    question: 'The quadratic equation $3x^2 + 12x + 9 = 0$ has two real solutions. What is the product of these solutions?',
    correctAnswer: '3',
    explanation: "**SAT Pattern: Sum/Product of Roots — Vieta's**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~5s):** Product of roots $= c/a = 9/3 = 3$.\n\n**The Full Solution:**\nVieta's: $r_1 \\cdot r_2 = c/a$. Here $a = 3$, $c = 9$: product $= 9/3 = 3$.\n\nVerification: factor $3(x^2 + 4x + 3) = 3(x+1)(x+3)$. Roots are $-1$ and $-3$. Product $= (-1)(-3) = 3$ \\checkmark.\n\n**Common Mistakes:** Reporting $9$ (forgets $/a$); reporting $-3$ (wrong sign — two negative roots multiply to positive); reporting $12$ (uses $b$ instead of $c$).\n\n**Test Day Takeaway:** Product of roots $= c/a$, regardless of the sign of $b$. The sign of $a$ and $c$ together determines the product's sign.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vieta-sum-product-of-roots', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-am-190', domain: 'advanced-math', skills: ['quadratic-factoring'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The equation $x^2 - 8x + k = 0$ has two roots. One of the roots is $5$. What is the other root?',
    choices: [{ id: 'A', text: '$3$' }, { id: 'B', text: '$-3$' }, { id: 'C', text: '$13$' }, { id: 'D', text: '$-13$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Sum/Product of Roots — Vieta's**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Sum of roots $= -b/a = 8$. Other root $= 8 - 5 = 3$. (Don't bother finding $k$.)\n\n**The Full Solution:**\nVieta's sum: $r_1 + r_2 = 8$. Given $r_1 = 5$: $r_2 = 3$.\n\nVerification: with roots $3$ and $5$, quadratic is $(x-3)(x-5) = x^2 - 8x + 15$, so $k = 15$. Check $x = 3$: $9 - 24 + 15 = 0$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* B ($-3$): negates the correct answer — applies the sign rule incorrectly during the final subtraction $8 - 5 = 3 \\to -3$.\n* C ($13$): adds the given root to the sum of roots ($5 + 8 = 13$) — wrong operation, addition instead of subtraction.\n* D ($-13$): negated Choice C — both directional errors stacked.\n\n**Test Day Takeaway:** When one root is given, Vieta's sum gives the other in one subtraction. The parameter $k$ is irrelevant to the question.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vieta-sum-product-of-roots', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-am-191', domain: 'advanced-math', skills: ['quadratic-factoring'], difficulty: 'medium', type: 'fill-in',
    question: 'The equation $2x^2 + bx - 18 = 0$ has $x = 3$ as one of its roots. What is the other root?',
    correctAnswer: '-3',
    explanation: "**SAT Pattern: Sum/Product of Roots — Vieta's**\n\n**The correct answer is $-3$.**\n\n**The Fast Way (~10s):** Product $= c/a = -18/2 = -9$. With one root $= 3$: other root $= -9/3 = -3$.\n\n**The Full Solution:**\nVieta's product: $r_1 \\cdot r_2 = -9$. Given $r_1 = 3$: $r_2 = -3$.\n\nVerification: roots $3$ and $-3$ give $2(x-3)(x+3) = 2(x^2 - 9) = 2x^2 - 18$, so $b = 0$. At $x = 3$: $18 + 0 - 18 = 0$ \\checkmark.\n\n**Common Mistakes:** Reporting $-9$ (product, not the other root); reporting $3$ (the given root); ignoring the $/a$ when $a \\neq 1$.\n\n**Test Day Takeaway:** Product-of-roots is fastest when $a \\neq 1$ AND a root is given. It works even when $b$ is unknown.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vieta-sum-product-of-roots', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-am-192', domain: 'advanced-math', skills: ['quadratic-factoring'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A quadratic equation $x^2 + bx + c = 0$ has two real solutions whose sum is $7$ and whose product is $12$. What is the value of $b + c$?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$-5$' }, { id: 'C', text: '$19$' }, { id: 'D', text: '$-19$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Sum/Product of Roots — Vieta's**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** With $a = 1$: $b = -(\\text{sum}) = -7$, $c = \\text{product} = 12$. So $b + c = 5$.\n\n**The Full Solution:**\nFor monic quadratics ($a = 1$): sum of roots $= -b$, product $= c$.\nSum $= 7 \\Rightarrow b = -7$. Product $= 12 \\Rightarrow c = 12$. $b + c = 5$.\n\nVerification: $x^2 - 7x + 12 = (x-3)(x-4)$. Roots $3, 4$. Sum $= 7$ \\checkmark, product $= 12$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* B: flips the result's sign.\n* C: uses $b = +7$ (forgets the negation).\n* D: combines both sign errors.\n\n**Test Day Takeaway:** For monic ($a = 1$) quadratics, sum maps to $-b$ and product maps to $c$. Forgetting the negative on $b$ is the #1 trap.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vieta-sum-product-of-roots', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-am-193', domain: 'advanced-math', skills: ['quadratic-factoring'], difficulty: 'medium', type: 'fill-in',
    question: 'The roots of $5x^2 + 25x + c = 0$ have a product equal to $6$. What is the value of $c$?',
    correctAnswer: '30',
    explanation: "**SAT Pattern: Sum/Product of Roots — Vieta's**\n\n**The correct answer is $30$.**\n\n**The Fast Way (~5s):** Product $= c/a = c/5 = 6 \\Rightarrow c = 30$.\n\n**The Full Solution:**\nVieta's: $c/a = $ product. $c/5 = 6 \\Rightarrow c = 30$.\n\nVerification: $5x^2 + 25x + 30 = 5(x+2)(x+3)$. Roots $-2, -3$. Product $= 6$ \\checkmark.\n\n**Common Mistakes:** Reporting $6$ (uses the product as $c$ — forgets to scale by $a$); reporting $1.2$ (divides instead of multiplies); reporting $-30$ (sign confusion).\n\n**Test Day Takeaway:** $c = a \\cdot \\text{product}$. When $a \\neq 1$, scale up; never just copy the product into $c$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vieta-sum-product-of-roots', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-am-194', domain: 'advanced-math', skills: ['quadratic-factoring'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The roots of $x^2 - 6x + 4 = 0$ are $r$ and $s$. What is the value of $r^2 + s^2$?',
    choices: [{ id: 'A', text: '$28$' }, { id: 'B', text: '$32$' }, { id: 'C', text: '$24$' }, { id: 'D', text: '$40$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Sum/Product of Roots — Vieta's**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Identity: $r^2 + s^2 = (r+s)^2 - 2rs$. From Vieta's, $r + s = 6$ and $rs = 4$. So $r^2 + s^2 = 36 - 8 = 28$.\n\n**The Full Solution:**\nDon't solve for $r$ and $s$ separately. Use the algebraic identity:\n$$r^2 + s^2 = (r+s)^2 - 2rs.$$\nFrom Vieta's: $r + s = -b/a = 6$, $rs = c/a = 4$.\nResult: $r^2 + s^2 = 6^2 - 2(4) = 36 - 8 = 28$.\n\nVerification: actual roots are $3 \\pm \\sqrt{5}$. $(3+\\sqrt{5})^2 + (3-\\sqrt{5})^2 = (14 + 6\\sqrt{5}) + (14 - 6\\sqrt{5}) = 28$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* B: arithmetic slip after the right setup.\n* C: drops the factor of $2$ in $2rs$.\n* D: adds $2rs$ instead of subtracting.\n\n**Test Day Takeaway:** Symmetric expressions in roots ($r^2 + s^2$, $r^3 + s^3$, $1/r + 1/s$) reduce to Vieta's via identities. Key one: $r^2 + s^2 = (r+s)^2 - 2rs$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vieta-sum-product-of-roots', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-am-195', domain: 'advanced-math', skills: ['quadratic-factoring'], difficulty: 'hard', type: 'fill-in',
    question: 'The equation $3x^2 + bx - 24 = 0$ has $x = 2$ as one of its roots. What is the value of $b$?',
    correctAnswer: '6',
    explanation: "**SAT Pattern: Sum/Product of Roots — Vieta's**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~15s):** Product $= -24/3 = -8$. Other root $= -8/2 = -4$. Sum $= 2 + (-4) = -2 = -b/3 \\Rightarrow b = 6$.\n\n**The Full Solution:**\nChain Vieta's: product to find the other root, then sum to find $b$.\n\nStep 1: Product $= c/a = -8$. Given $r_1 = 2$: $r_2 = -8/2 = -4$.\nStep 2: Sum $= -b/a$. With both roots: $2 + (-4) = -2 = -b/3 \\Rightarrow b = 6$.\n\nVerification: plug $x = 2$ into $3x^2 + 6x - 24$: $12 + 12 - 24 = 0$ \\checkmark.\n\n**Common Mistakes:** Reporting $-6$ (sign error on $-b/a$); reporting $-2$ (gives sum, not $b$); reporting $2$ (the given root).\n\n**Test Day Takeaway:** When $a \\neq 1$ AND a root is given, chain Vieta's: product → other root, sum → missing coefficient. Two formulas, no factoring needed.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vieta-sum-product-of-roots', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  // ─── INTERPRET EXPONENTIAL PARAMETERS (bank-am-196..203) ──────────────────
  // Granularity principle: interpreting a, b, exponent-denominator in
  // a·b^(t/k) is a DISTINCT method from building the model from words.
  { id: 'bank-am-196', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The function $f(t) = 800(1.04)^t$ models the value of an investment $t$ years after it was opened. Which of the following best describes the meaning of $1.04$ in this context?',
    choices: [{ id: 'A', text: 'The investment increases by $4\\%$ each year.' }, { id: 'B', text: 'The investment increases by $104\\%$ each year.' }, { id: 'C', text: 'The investment is worth $\\$1.04$ initially.' }, { id: 'D', text: 'The investment increases by $\\$1.04$ each year.' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Base $1.04 = 1 + 0.04$. The $0.04$ is the per-year growth rate, i.e., $4\\%$ per year.\n\n**The Full Solution:**\nFor exponential model $a \\cdot b^t$:\n* $a = 800$ is the initial value.\n* $b = 1.04$ is the per-period MULTIPLIER, not the per-period change.\nGrowth rate: $b - 1 = 0.04 = 4\\%$ per year.\n\nVerification: at $t = 1$: $f(1) = 800 \\cdot 1.04 = 832$, which is $4\\%$ more than $800$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* B: misreads the base as the percent itself ($1.04$ as $104\\%$).\n* C: confuses base with initial value.\n* D: treats it as additive growth, not multiplicative.\n\n**Test Day Takeaway:** Exponential growth: base $b$ means \"multiplied by $b$ each period.\" Growth rate = $b - 1$ (in decimal) = $(b - 1) \\cdot 100\\%$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-growth-interpretation', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-am-197', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'easy', type: 'fill-in',
    question: 'A population is modeled by $P(t) = 5000(0.92)^t$ where $t$ is years. By what percent does the population decrease each year?',
    correctAnswer: '8',
    explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~5s):** Base $0.92 = 1 - 0.08$. Decay rate: $8\\%$ per year.\n\n**The Full Solution:**\nFor decay model $a \\cdot b^t$ with $b < 1$:\nDecay rate $= 1 - b = 1 - 0.92 = 0.08 = 8\\%$.\n\nVerification: at $t = 1$: $P = 5000 \\cdot 0.92 = 4600$, which is $8\\%$ less than $5000$ \\checkmark.\n\n**Common Mistakes:** Reporting $92$ (base as a percent); reporting $108$ (treats it as growth, not decay); reporting $0.08$ (decimal instead of percent).\n\n**Test Day Takeaway:** Decay rate $= 1 - b$. Growth rate $= b - 1$. Either way, it's the deviation from $1$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-growth-interpretation', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-am-198', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The function $V(t) = 12000(0.85)^{t/5}$ models the value (in dollars) of a piece of equipment $t$ years after purchase. By what percent does the equipment\'s value decrease every $5$ years?',
    choices: [{ id: 'A', text: '$15\\%$' }, { id: 'B', text: '$85\\%$' }, { id: 'C', text: '$5\\%$' }, { id: 'D', text: '$3\\%$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The exponent denominator $5$ matches the question's \"$5$ years.\" Base $0.85$ over each $5$-year period: decay rate $1 - 0.85 = 0.15 = 15\\%$.\n\n**The Full Solution:**\nThe model is $V(t) = 12000 \\cdot 0.85^{t/5}$. The exponent's denominator ($5$) says: \"the base is applied once every $5$ years.\"\nEvery $5$ years, value is multiplied by $0.85$ → decreases by $1 - 0.85 = 15\\%$.\n\nVerification: $V(5) = 12000 \\cdot 0.85^1 = 10200$ (a $15\\%$ drop). $V(0) = 12000$, $V(5) = 10200$. Drop: $1800$, which is $15\\%$ of $12000$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* B ($85\\%$): reports the multiplier $0.85$ in percent form — confuses MULTIPLIER (what remains) with DECAY rate (what is lost).\n* C ($5\\%$): copies the exponent denominator ($5$, in years) as if it were a percent — number vs percent confusion.\n* D ($3\\%$): estimates per-year rate by dividing $15\\%/5 = 3\\%$ — answers the per-year question instead of the per-$5$-year question that was asked.\n\n**Test Day Takeaway:** When the exponent has a denominator $k$ (i.e., $b^{t/k}$), $b$ describes the change over $k$ time units, NOT per single time unit. Match the question's stated period to the denominator.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-growth-interpretation', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-am-199', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'medium', type: 'fill-in',
    question: 'A bacteria population is modeled by $B(t) = 200(2)^{t/3}$ where $t$ is hours. By what factor does the population grow every $3$ hours?',
    correctAnswer: '2',
    explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~5s):** The base $2$ applies once per $3$-hour period (the denominator of the exponent). Factor per $3$ hours: $2$ (doubles).\n\n**The Full Solution:**\nIn $B(t) = 200 \\cdot 2^{t/3}$:\nWhen $t = 3$: $B = 200 \\cdot 2^1 = 400$. Factor: $400/200 = 2$.\nThe denominator $3$ tells us the base describes change over $3$ hours.\n\nVerification: at $t = 6$: $B = 200 \\cdot 2^2 = 800 = 4 \\cdot 200$ (two doublings) \\checkmark.\n\n**Common Mistakes:** Reporting $3$ (the denominator); reporting $200$ (initial); reporting $100$ ($200\\%$).\n\n**Test Day Takeaway:** \"$b^{t/k}$ over $k$ units\" → factor is $b$. \"$b^{t/k}$ over $1$ unit\" → factor is $b^{1/k}$. Read the denominator.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-growth-interpretation', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-am-200', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The function $A(t) = 1000(1.05)^t$ models a savings account, where $A$ is the balance after $t$ years. Which statement is best supported by this model?',
    choices: [{ id: 'A', text: 'The initial balance is $\\$1000$ and the account grows by $5\\%$ each year.' }, { id: 'B', text: 'The initial balance is $\\$5\\%$ and the account grows by $\\$1000$ each year.' }, { id: 'C', text: 'The account grows by $\\$1.05$ each year.' }, { id: 'D', text: 'The account grows by $50\\%$ each year.' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $a = 1000$ → initial value. $b = 1.05 \\to b - 1 = 0.05 = 5\\%$ → growth rate.\n\n**The Full Solution:**\nIn $a \\cdot b^t$:\n* $a = 1000$ is the value at $t = 0$ (initial balance).\n* $b = 1.05$ is the per-year multiplier. Growth rate: $5\\%$.\n\nVerification: $A(0) = 1000$ \\checkmark. $A(1) = 1050$ — a $5\\%$ increase \\checkmark.\n\n**Why the wrong answers are tempting:**\n* B: swaps $a$ and $b$ roles.\n* C: treats growth as additive.\n* D: misreads $1.05$ as $1 + 0.5$.\n\n**Test Day Takeaway:** Two parameters to interpret: $a$ (initial value, at $t = 0$) and $b$ (multiplier). Convert $b$ to a rate via $b - 1$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-growth-interpretation', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-am-201', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'medium', type: 'fill-in',
    question: 'A car\'s value is modeled by $V(t) = 25000(0.88)^t$, where $V$ is in dollars and $t$ is years since purchase. What is the initial value of the car, in dollars?',
    correctAnswer: '25000',
    explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**The correct answer is $25000$.**\n\n**The Fast Way (~3s):** At $t = 0$: $V(0) = 25000 \\cdot 0.88^0 = 25000 \\cdot 1 = 25000$. Initial value $= a$.\n\n**The Full Solution:**\nIn $a \\cdot b^t$, the initial value is $a$ (because $b^0 = 1$).\nHere $a = 25000$, so initial value is $\\$25{,}000$.\n\n**Common Mistakes:** Reporting $0.88$ (the base); reporting $22000$ ($0.88 \\times 25000$ — value after 1 year, not initial); reporting $12$ ($1 - 0.88$ as percent).\n\n**Test Day Takeaway:** Initial value is always the coefficient $a$ in front of $b^t$. Just look — no computation needed.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-growth-interpretation', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-am-202', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A population is modeled by $P(t) = a(1.03)^t$, where $t$ is years. If the population is $1545$ at $t = 0$, what is the meaning of $a$ and what is its value?',
    choices: [{ id: 'A', text: '$a$ is the initial population, equal to $1545$.' }, { id: 'B', text: '$a$ is the growth rate, equal to $1545$.' }, { id: 'C', text: '$a$ is the growth factor, equal to $1.03$.' }, { id: 'D', text: '$a$ is the population in $1$ year, equal to $1545$.' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $P(0) = a \\cdot 1 = a$. Given $P(0) = 1545$: $a = 1545$, the initial population.\n\n**The Full Solution:**\nIn $a \\cdot b^t$, evaluating at $t = 0$: $P(0) = a \\cdot b^0 = a \\cdot 1 = a$.\nThe problem states $P(0) = 1545$, so $a = 1545$. This is the initial population.\n\nVerification: at $t = 1$: $P = 1545 \\cdot 1.03 = 1591.35$, a $3\\%$ increase \\checkmark.\n\n**Why the wrong answers are tempting:**\n* B: confuses initial value with growth rate (different concepts).\n* C: confuses $a$ with $b$.\n* D: confuses $P(0)$ with $P(1)$.\n\n**Test Day Takeaway:** In $a \\cdot b^t$, $a$ is always the value at $t = 0$. Re-derive this if confused: $a \\cdot b^0 = a$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-growth-interpretation', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-am-203', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'hard', type: 'fill-in',
    question: 'The function $f$ defined by $f(t) = 50 \\cdot 4^{t/3}$ models a quantity that grows over time $t$, where $t$ is measured in days. By what factor does the quantity grow over a period of $9$ days?',
    correctAnswer: '64',
    explanation: "**SAT Pattern: Exponential Growth Factor over a Period**\n\n**The correct answer is $64$.**\n\n**The Fast Way (~15s):** $\\dfrac{f(9)}{f(0)} = \\dfrac{50 \\cdot 4^{9/3}}{50 \\cdot 4^0} = 4^{3} = 64$.\n\n**The Full Solution:**\nThe 'factor by which the quantity grows' over a period from $t_1$ to $t_2$ is $f(t_2)/f(t_1)$. The leading constant $50$ cancels.\n$\\quad \\dfrac{f(9)}{f(0)} = \\dfrac{50 \\cdot 4^{9/3}}{50 \\cdot 4^{0/3}} = 4^{9/3 - 0} = 4^3 = 64$.\n\nVerification: $f(0) = 50$, $f(9) = 50 \\cdot 4^3 = 50 \\cdot 64 = 3{,}200$. Ratio: $3{,}200 / 50 = 64$ \\checkmark.\n\n**Common Mistakes:** Reporting $9$ (the time interval, not the growth factor); reporting $4$ (the base of the exponential, not the factor over $9$ days); reporting $12$ (incorrectly computes $4 \\cdot 9/3$ instead of $4^{9/3}$); reporting $3$ (reports the divisor in the exponent).\n\n**Test Day Takeaway:** For $f(t) = a \\cdot b^{t/k}$, the growth factor over a period of $n$ time units is $b^{n/k}$. The leading constant $a$ never affects the growth factor — it scales the absolute values, not their ratio. The key step is reducing the exponent: $9/3 = 3$, so $4^{9/3} = 4^3 = 64$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-growth-interpretation', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  // ── classify-physical-motion-model (5 questions, batch 2026-05-13) ────────
  // Pattern: given a verbal description of how something changes over time,
  // identify whether the relationship is linear, exponential, or quadratic.
  // Aligns to Bluebook M2-Hard Q1 (airplane descending at constant rate).
  { id: 'bank-am-204', domain: 'advanced-math', skills: ['function-interpretation', 'linear-functions'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A swimming pool initially holds $8{,}000$ gallons of water and drains at a constant rate of $25$ gallons per minute. What type of function best models the relationship between the amount of water remaining in the pool and time?',
    choices: [{ id: 'A', text: 'Decreasing exponential' }, { id: 'B', text: 'Decreasing linear' }, { id: 'C', text: 'Increasing linear' }, { id: 'D', text: 'Increasing exponential' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Classify Physical Motion Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** \"Constant rate\" + \"drains\" $\\Rightarrow$ decreasing linear. Each minute removes the same $25$ gallons, so the change per unit time is constant.\n\n**The Full Solution:**\nThe defining feature of a LINEAR function is constant rate of change. \"Drains at a constant rate of $25$ gallons per minute\" describes exactly that. The water amount drops, so the slope is negative — decreasing linear.\n\nA model would be $W(t) = 8000 - 25t$.\n\nVerification: at $t = 0$, $W = 8000$; at $t = 1$, $W = 7975$; at $t = 2$, $W = 7950$. Differences: $-25, -25$ — constant \\checkmark.\n\n**Why the wrong answers are tempting:**\n* A: \"wrong formula\" — exponential decay has a percent (not absolute) rate. The amount removed each minute would shrink over time, not stay at $25$.\n* C: \"sign error\" — \"drains\" means the water decreases, so the slope is negative.\n* D: \"wrong direction AND wrong type\" — combines both errors.\n\n**Test Day Takeaway:** \"Constant rate of X per unit\" = LINEAR. The sign (increasing or decreasing) comes from the verb (\"gains\" or \"drains/loses\"). Reserve EXPONENTIAL for \"each minute the amount is multiplied by\" or \"grows by X percent\" language.",
    calculatorAllowed: true, tags: ['model-classification'], sourceStyleRef: 'model-classification', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-am-205', domain: 'advanced-math', skills: ['function-interpretation', 'exponential-growth-decay'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A biologist places $200$ bacteria in a petri dish. The number of bacteria doubles every $30$ minutes. What type of function best models the number of bacteria over time?',
    choices: [{ id: 'A', text: 'Increasing linear' }, { id: 'B', text: 'Decreasing exponential' }, { id: 'C', text: 'Increasing exponential' }, { id: 'D', text: 'Quadratic' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Classify Physical Motion Model**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** \"Doubles every $30$ minutes\" = multiplied by a fixed factor every fixed period $\\Rightarrow$ exponential growth.\n\n**The Full Solution:**\nWhen a quantity is multiplied by a constant factor (here, $2$) every constant time interval (here, $30$ minutes), the model is EXPONENTIAL. The factor is $> 1$, so the function increases.\n\nA model would be $N(t) = 200 \\cdot 2^{t/30}$ where $t$ is minutes.\n\nVerification: at $t = 0$, $N = 200$; at $t = 30$, $N = 400$; at $t = 60$, $N = 800$. Each interval doubles the previous, not adds a fixed amount \\checkmark.\n\n**Why the wrong answers are tempting:**\n* A: \"wrong formula\" — linear would mean adding the same number every $30$ minutes (e.g., $+200$). Doubling adds increasing amounts ($+200, +400, +800$), not a fixed amount.\n* B: \"sign error\" — doubling means GROWTH, not decay. Decay would say \"halves every $30$ minutes.\"\n* D: \"wrong formula\" — quadratic relationships have a constant SECOND difference (acceleration), not a constant multiplicative factor.\n\n**Test Day Takeaway:** \"Doubles / triples / grows by X percent every [period]\" = EXPONENTIAL. \"Adds X every [period]\" = LINEAR. The distinction is multiplicative vs additive.",
    calculatorAllowed: true, tags: ['model-classification'], sourceStyleRef: 'model-classification', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-am-206', domain: 'advanced-math', skills: ['function-interpretation', 'exponential-growth-decay'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A small town\'s population is currently $12{,}500$ and is projected to increase by $4\\%$ each year for the next decade. Which type of function best models the projected population as a function of time?',
    choices: [{ id: 'A', text: 'Increasing linear, because the percent change is constant.' }, { id: 'B', text: 'Increasing exponential, because the amount added each year grows over time.' }, { id: 'C', text: 'Decreasing linear, because $4\\%$ is small.' }, { id: 'D', text: 'Quadratic, because compound growth is curved.' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Classify Physical Motion Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** \"Increases by $4\\%$ each year\" means each year's population is $1.04$ times the previous year's $\\Rightarrow$ exponential growth.\n\n**The Full Solution:**\n\"By $4\\%$ each year\" is a percent of the CURRENT value, not a fixed amount. Year 1 adds $0.04 \\cdot 12{,}500 = 500$. Year 2 adds $0.04 \\cdot 13{,}000 = 520$. The amount added grows each year — the hallmark of exponential growth.\n\nA model would be $P(t) = 12{,}500 \\cdot (1.04)^t$.\n\nVerification: $P(0) = 12{,}500$, $P(1) = 13{,}000$, $P(2) = 13{,}520$. Year-over-year ratios: $1.04, 1.04$ — constant. Year-over-year differences: $500, 520$ — not constant. Confirms exponential, not linear \\checkmark.\n\n**Why the wrong answers are tempting:**\n* A: \"wrong base\" — confuses \"constant percent\" with \"constant amount.\" Constant amount $\\Rightarrow$ linear; constant percent $\\Rightarrow$ exponential.\n* C: \"sign error\" — \"increases\" means growth, regardless of the percent's size.\n* D: \"wrong formula\" — exponential curves are NOT quadratic; the second differences of an exponential are not constant.\n\n**Test Day Takeaway:** \"Increases by X percent each [period]\" $\\Rightarrow$ EXPONENTIAL growth. \"Increases by X units each [period]\" $\\Rightarrow$ LINEAR. The word \"percent\" is the giveaway — it scales with the current value.",
    calculatorAllowed: true, tags: ['model-classification'], sourceStyleRef: 'model-classification', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-am-207', domain: 'advanced-math', skills: ['function-interpretation', 'identify-quadratic'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A ball is dropped from the top of a cliff and falls under gravity (with negligible air resistance). Which type of function best models the ball\'s height above the ground as a function of the time elapsed since release?',
    choices: [{ id: 'A', text: 'Decreasing linear' }, { id: 'B', text: 'Decreasing exponential' }, { id: 'C', text: 'Decreasing quadratic' }, { id: 'D', text: 'Increasing quadratic' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Classify Physical Motion Model**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Free fall under constant gravity gives a $-\\frac{g}{2}t^2$ term $\\Rightarrow$ quadratic with negative leading coefficient $\\Rightarrow$ decreasing quadratic.\n\n**The Full Solution:**\nUnder constant gravitational acceleration $g$, an object's height obeys $h(t) = h_0 - \\frac{1}{2}gt^2$. The $t^2$ term makes the model quadratic. Because the coefficient on $t^2$ is negative, the parabola opens DOWNWARD and the height decreases.\n\nVerification: at $t = 0$, height = $h_0$ (top); at $t = 1$, drop is $\\approx 4.9$ m; at $t = 2$, drop is $\\approx 19.6$ m (4 times, not 2 times) — that quadrupling-per-doubling is the signature of $t^2$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* A: \"wrong formula\" — a constant rate of fall would require zero acceleration, which contradicts the gravity setup. The ball speeds up as it falls.\n* B: \"wrong formula\" — exponential decay would mean the ball never quite reaches the ground (asymptotic). Free fall reaches the ground in finite time.\n* D: \"sign error\" — the ball's height DECREASES from the cliff top, so the parabola opens downward (negative leading coefficient).\n\n**Test Day Takeaway:** Projectile / free-fall problems under constant gravity are ALWAYS quadratic: $h(t) = h_0 + v_0 t - \\frac{1}{2}g t^2$. The $-\\frac{1}{2}g$ coefficient on $t^2$ makes the parabola open downward.",
    calculatorAllowed: true, tags: ['model-classification'], sourceStyleRef: 'model-classification', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-am-208', domain: 'advanced-math', skills: ['function-interpretation', 'exponential-growth-decay'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A patient receives a single dose of a medication. The amount of medication in the patient\'s bloodstream is reduced by half every $6$ hours as the body metabolizes it. Which type of function best models the amount of medication remaining as a function of time since the dose?',
    choices: [{ id: 'A', text: 'Decreasing linear, because the same fraction is removed each interval.' }, { id: 'B', text: 'Decreasing exponential, because the amount is multiplied by a fixed factor each interval.' }, { id: 'C', text: 'Increasing exponential, because metabolism speeds up over time.' }, { id: 'D', text: 'Quadratic, because the rate of reduction changes.' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Classify Physical Motion Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** \"Half every $6$ hours\" = multiplied by $\\frac{1}{2}$ every fixed period $\\Rightarrow$ exponential decay.\n\n**The Full Solution:**\n\"Reduced by half\" means multiplied by $\\frac{1}{2}$ — a multiplicative factor applied at a fixed time interval. That's the definition of exponential decay. The base is $\\frac{1}{2} < 1$, so the function decreases.\n\nA model would be $A(t) = A_0 \\cdot (\\frac{1}{2})^{t/6}$ where $t$ is hours.\n\nVerification: at $t = 0$, full dose; at $t = 6$, half; at $t = 12$, quarter; at $t = 18$, eighth. Each successive interval removes LESS in absolute terms — the signature of exponential decay (vs linear, which would remove the same absolute amount each interval) \\checkmark.\n\n**Why the wrong answers are tempting:**\n* A: \"wrong base\" — \"same fraction\" is exactly what makes it exponential, not linear. Linear would need \"the same NUMBER of milligrams\" each interval.\n* C: \"wrong direction\" — \"reduced\" means the amount goes DOWN, so this is decay, not growth.\n* D: \"wrong formula\" — the rate of reduction does change in absolute terms, but in a multiplicative way (factor $\\frac{1}{2}$ each interval), not the quadratic way (constant second difference).\n\n**Test Day Takeaway:** \"Halves / loses X percent\" every fixed period $\\Rightarrow$ exponential DECAY (base between $0$ and $1$). Half-life problems are exponential, never linear.",
    calculatorAllowed: true, tags: ['model-classification'], sourceStyleRef: 'model-classification', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  // ── interpret-initial-value-in-context (5 questions, batch 2026-05-13) ────
  // Pattern: given f(x) modeling a real scenario, interpret the y-intercept
  // (or initial value) in plain language. Aligns to Bluebook M2-Hard Q3
  // (popsicles, juice remaining y-intercept).
  { id: 'bank-am-209', domain: 'advanced-math', skills: ['function-interpretation', 'linear-functions'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A delivery truck started its route with a full tank of gas. The function $g(t) = -2.5t + 80$ approximates the number of gallons of gas remaining in the tank after the truck has been driving for $t$ hours. Which statement is the best interpretation of the $y$-intercept of the graph of $y = g(t)$ in the $ty$-plane in this context?',
    choices: [{ id: 'A', text: 'The truck used approximately $2.5$ gallons of gas each hour.' }, { id: 'B', text: 'The truck started the route with approximately $80$ gallons of gas in the tank.' }, { id: 'C', text: 'The truck started the route with approximately $2.5$ gallons of gas in the tank.' }, { id: 'D', text: 'The truck used approximately $80$ gallons of gas each hour.' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Interpret Initial Value in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $y$-intercept of $g(t) = -2.5t + 80$ is $g(0) = 80$. At $t = 0$ (start of route), gallons remaining $= 80$.\n\n**The Full Solution:**\nThe $y$-intercept of a linear function $g(t) = mt + b$ is $b$, the value at $t = 0$. Here $b = 80$, and the context tells us $t$ is hours since the truck started driving. So at $t = 0$ (when the truck started) the tank held about $80$ gallons.\n\nVerification: the slope $m = -2.5$ separately tells us the truck uses $2.5$ gallons each hour, which matches the units of $g$ (gallons) over $t$ (hours) \\checkmark.\n\n**Why the wrong answers are tempting:**\n* A: \"wrong base\" — confuses slope (per-hour rate) with $y$-intercept (initial value). $2.5$ is the per-hour consumption.\n* C: \"swaps coefficients\" — uses the slope's magnitude as the starting tank size.\n* D: \"wrong base AND wrong unit\" — combines the slope/intercept confusion with the rate confusion.\n\n**Test Day Takeaway:** In $f(x) = mx + b$ for a real-world context: $b$ (the $y$-intercept) is the INITIAL value at $x = 0$. $m$ (the slope) is the per-unit RATE OF CHANGE. The question \"interpret the $y$-intercept\" always asks about the starting value, never the rate.",
    calculatorAllowed: true, tags: ['interpret-parameter'], sourceStyleRef: 'interpret-y-intercept', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-am-210', domain: 'advanced-math', skills: ['function-interpretation', 'linear-functions'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A library held a one-time book sale. The function $B(d) = -45d + 2{,}700$ approximates the number of books remaining at the end of day $d$ of the sale. Which statement is the best interpretation of the $y$-intercept of the graph of $y = B(d)$ in the $dy$-plane in this context?',
    choices: [{ id: 'A', text: 'The library sold approximately $45$ books each day.' }, { id: 'B', text: 'The sale ended after approximately $45$ days.' }, { id: 'C', text: 'The library started the sale with approximately $2{,}700$ books available.' }, { id: 'D', text: 'The library sold approximately $2{,}700$ books each day.' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Interpret Initial Value in Context**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $y$-intercept of $B(d) = -45d + 2{,}700$ is $B(0) = 2{,}700$. At $d = 0$ (before the sale started), books remaining $= 2{,}700$.\n\n**The Full Solution:**\nThe $y$-intercept of $B(d) = -45d + 2{,}700$ is $2{,}700$, the value of $B$ at $d = 0$. Because $d$ counts days into the sale, $d = 0$ corresponds to the moment the sale began. So the library started with about $2{,}700$ books available.\n\nVerification: the slope $-45$ separately tells us about $45$ books are sold per day. Sale duration would be the $d$-intercept ($2{,}700 / 45 = 60$ days), not the $y$-intercept \\checkmark.\n\n**Why the wrong answers are tempting:**\n* A: \"wrong base\" — confuses slope (books per day) with $y$-intercept (initial inventory).\n* B: \"wrong axis\" — describes when $B = 0$ (the $d$-intercept), not when $d = 0$.\n* D: \"wrong base AND wrong unit\" — treats the initial inventory as a daily rate.\n\n**Test Day Takeaway:** \"Interpret the $y$-intercept\" $\\Rightarrow$ the value at the start (input = $0$). \"Interpret the $x$-intercept\" $\\Rightarrow$ when the output hits $0$. Don't mix them.",
    calculatorAllowed: true, tags: ['interpret-parameter'], sourceStyleRef: 'interpret-y-intercept', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-am-211', domain: 'advanced-math', skills: ['function-interpretation', 'exponential-growth-decay'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A magazine\'s print subscriber count is decreasing over time. The function $L(t) = 1{,}200 \\cdot (0.97)^t$ approximates the number of print subscribers $t$ years after $2020$. Which statement is the best interpretation of the value $1{,}200$ in this context?',
    choices: [{ id: 'A', text: 'The magazine loses approximately $1{,}200$ subscribers each year.' }, { id: 'B', text: 'The magazine had approximately $1{,}200$ print subscribers in $2020$.' }, { id: 'C', text: 'The magazine\'s subscriber count is decreasing by approximately $1{,}200\\%$ each year.' }, { id: 'D', text: 'The magazine will have approximately $1{,}200$ print subscribers in $2021$.' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Interpret Initial Value in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $L(0) = 1{,}200 \\cdot (0.97)^0 = 1{,}200$. With $t$ measured in years after $2020$, $t = 0$ is $2020$.\n\n**The Full Solution:**\nIn an exponential model $a \\cdot b^t$, the coefficient $a$ is the value at $t = 0$ (because $b^0 = 1$). The problem states $t$ is years after $2020$, so $t = 0$ corresponds to $2020$. The initial value $1{,}200$ is the subscriber count in $2020$.\n\nVerification: the base $0.97$ separately tells us subscribers decrease by $3\\%$ per year ($1 - 0.97 = 0.03$). At $t = 1$ (year $2021$), $L = 1{,}200 \\cdot 0.97 = 1{,}164$, not $1{,}200$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* A: \"wrong base\" — confuses the initial value with the annual loss (which would be a per-year subtraction, but this is multiplicative decay).\n* C: \"wrong formula\" — confuses the coefficient $a$ with a percentage rate. The decay rate is $3\\%$, derived from $0.97$.\n* D: \"off-by-one\" — places the initial value at $t = 1$ instead of $t = 0$.\n\n**Test Day Takeaway:** In $a \\cdot b^t$: the coefficient $a$ is the INITIAL value at $t = 0$. Always identify what $t = 0$ refers to in the context (\"after $2020$\" $\\Rightarrow$ $t = 0$ is $2020$).",
    calculatorAllowed: true, tags: ['interpret-parameter'], sourceStyleRef: 'interpret-y-intercept', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-am-212', domain: 'advanced-math', skills: ['function-interpretation', 'linear-functions'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A pet shelter began the year with several dogs already in foster care and continued to take in new dogs at a steady rate. The function $f(w) = 4w + 28$ approximates the number of dogs in foster care after $w$ weeks into the year. Which statement is the best interpretation of the $y$-intercept of the graph of $y = f(w)$ in this context?',
    choices: [{ id: 'A', text: 'The shelter had approximately $28$ dogs in foster care at the start of the year.' }, { id: 'B', text: 'The shelter took in approximately $28$ new dogs each week.' }, { id: 'C', text: 'The shelter took in approximately $4$ new dogs each week, starting from zero.' }, { id: 'D', text: 'The shelter had approximately $4$ dogs in foster care at the start of the year.' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Interpret Initial Value in Context**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $y$-intercept of $f(w) = 4w + 28$ is $f(0) = 28$. At $w = 0$ (start of the year), dogs in foster care $= 28$.\n\n**The Full Solution:**\n$f(w) = 4w + 28$ is linear in $w$, so the $y$-intercept is $28$ (the value when $w = 0$). Context: $w$ counts weeks into the year, so $w = 0$ is the start of the year. The shelter began the year with about $28$ dogs in foster care.\n\nVerification: at $w = 1$, $f = 32 = 28 + 4$ — confirms $28$ at start and $4$ per week increase \\checkmark.\n\n**Why the wrong answers are tempting:**\n* B: \"wrong base\" — uses the $y$-intercept as a weekly rate. The weekly rate is the slope, $4$.\n* C: \"sign error AND wrong base\" — ignores the $+28$ and treats start as zero.\n* D: \"swaps coefficients\" — uses the slope as the initial value.\n\n**Test Day Takeaway:** $y$-intercept = value at input $0$ = starting point in the story. Slope = rate of change per unit. Don't swap them.",
    calculatorAllowed: true, tags: ['interpret-parameter'], sourceStyleRef: 'interpret-y-intercept', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-am-213', domain: 'advanced-math', skills: ['function-interpretation', 'exponential-growth-decay'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A bowl of hot soup is left on a counter to cool. The temperature of the soup, in degrees Fahrenheit, after $t$ minutes is modeled by $T(t) = 70 + 110 \\cdot (0.85)^t$. Which statement is the best interpretation of the value $180$ that appears at $t = 0$ (i.e., the value of $T(0)$)?',
    choices: [{ id: 'A', text: 'The room temperature is approximately $180^\\circ \\text{F}$.' }, { id: 'B', text: 'The initial temperature of the soup is approximately $180^\\circ \\text{F}$.' }, { id: 'C', text: 'The soup cools by approximately $180^\\circ \\text{F}$ each minute.' }, { id: 'D', text: 'The soup will reach approximately $180^\\circ \\text{F}$ after a long time.' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Interpret Initial Value in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $T(0) = 70 + 110 \\cdot (0.85)^0 = 70 + 110 = 180$. At $t = 0$, the soup is at $180^\\circ \\text{F}$ — the initial temperature.\n\n**The Full Solution:**\nThe model is $T(t) = 70 + 110 \\cdot (0.85)^t$. This is a shifted exponential decay: the term $110 \\cdot (0.85)^t$ shrinks toward $0$, leaving the soup approaching $70^\\circ \\text{F}$ (the room temperature, the asymptote). At $t = 0$, the decaying term is at its maximum value of $110$, so the soup starts at $70 + 110 = 180^\\circ \\text{F}$.\n\nVerification: at $t = 0$, $T = 180$ ✓. As $t \\to \\infty$, $T \\to 70$ — room temperature, not $180$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* A: \"swaps roles\" — confuses the initial value ($T(0) = 180$) with the asymptote (room temperature, $70$). Both numbers appear in the formula, but in different roles.\n* C: \"wrong base\" — confuses $T(0)$ with a per-minute rate. The cooling rate is multiplicative ($0.85$), not $180$.\n* D: \"wrong direction\" — $180$ is where the soup STARTS, not where it ends up. The end value is the asymptote, $70$.\n\n**Test Day Takeaway:** In a shifted exponential $T(t) = A + B \\cdot b^t$ with $0 < b < 1$: $A$ is the long-run asymptote (final value); $A + B$ is the value at $t = 0$ (initial value). Don't confuse the two — the question's wording tells you which it wants.",
    calculatorAllowed: true, tags: ['interpret-parameter'], sourceStyleRef: 'interpret-y-intercept', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  // ── interpret-vertex-form (5 questions, batch 2026-05-13) ─────────────────
  // Pattern: given a quadratic in vertex form modeling a scenario, interpret
  // the vertex (h, k) as a real-world max/min and its time. Aligns to Bluebook
  // M2-Hard Q4 (toy rocket vertex interpretation).
  { id: 'bank-am-214', domain: 'advanced-math', skills: ['function-interpretation', 'quadratic-equations'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A physics class is studying the trajectory of a pumpkin launched from a rooftop. The equation $y = -16(t - 1.25)^2 + 45$ gives the estimated height $y$, in feet, of the pumpkin $t$ seconds after it is launched. Which of the following is the best interpretation of the vertex of the graph of the equation in the $ty$-plane?',
    choices: [{ id: 'A', text: 'The pumpkin reaches an estimated maximum height of $45$ feet $1.25$ seconds after launch.' }, { id: 'B', text: 'The pumpkin reaches an estimated maximum height of $1.25$ feet $45$ seconds after launch.' }, { id: 'C', text: 'The pumpkin reaches an estimated maximum height of $45$ feet $16$ seconds after launch.' }, { id: 'D', text: 'The pumpkin starts at a height of $45$ feet, $1.25$ seconds before it is launched.' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Interpret Vertex Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Vertex of $a(t - h)^2 + k$ is $(h, k) = (1.25, 45)$. $a = -16 < 0$, so vertex is a MAX. Max height $= 45$ ft at $t = 1.25$ s.\n\n**The Full Solution:**\nVertex form $y = a(t - h)^2 + k$ has vertex $(h, k) = (1.25, 45)$. Because the leading coefficient $a = -16 < 0$, the parabola opens downward and the vertex is the MAXIMUM. The $t$-coordinate ($1.25$) is the time when the maximum occurs; the $y$-coordinate ($45$) is the maximum height.\n\nVerification: at $t = 1.25$, $y = -16(0)^2 + 45 = 45$ (max). At $t = 0$ (launch), $y = -16(1.5625) + 45 = -25 + 45 = 20$ ft. At $t = 2.5$, $y = -16(1.5625) + 45 = 20$ ft — symmetric about $t = 1.25$, confirming the vertex \\checkmark.\n\n**Why the wrong answers are tempting:**\n* B: \"swaps coordinates\" — swaps the $t$ and $y$ values of the vertex.\n* C: \"wrong base\" — uses the leading coefficient $-16$ (which is related to gravity, not time at max) as the time.\n* D: \"wrong direction\" — describes a moment $1.25$ seconds BEFORE launch, which has no physical meaning in this context (the model starts at $t = 0$).\n\n**Test Day Takeaway:** Vertex form $a(t - h)^2 + k$: vertex is $(h, k)$, where $h$ is the input (time, $x$-value) and $k$ is the output (height, $y$-value). If $a < 0$, vertex is a MAX; if $a > 0$, vertex is a MIN.",
    calculatorAllowed: true, tags: ['interpret-parameter'], sourceStyleRef: 'interpret-vertex', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-am-215', domain: 'advanced-math', skills: ['function-interpretation', 'quadratic-equations'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A restaurant\'s daily profit, in dollars, from a special menu item is modeled by $P(x) = -5(x - 14)^2 + 980$, where $x$ is the price (in dollars) charged for the item. Which of the following is the best interpretation of the vertex of the graph of $y = P(x)$ in the $xy$-plane?',
    choices: [{ id: 'A', text: 'The restaurant\'s maximum daily profit is $\\$14$, achieved at a price of $\\$980$.' }, { id: 'B', text: 'The restaurant\'s maximum daily profit is $\\$980$, achieved at a price of $\\$14$.' }, { id: 'C', text: 'The restaurant\'s daily profit is $\\$980$ regardless of the price charged.' }, { id: 'D', text: 'The restaurant\'s daily profit is maximized at a price of $\\$5$ per item.' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Interpret Vertex Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Vertex of $P(x) = -5(x - 14)^2 + 980$ is $(14, 980)$. $a = -5 < 0$, so it's a MAX. At price $x = \\$14$, max daily profit $= \\$980$.\n\n**The Full Solution:**\nVertex form gives vertex $(h, k) = (14, 980)$. $h$ is the price that maximizes profit; $k$ is that maximum profit. Because $a = -5 < 0$, the parabola opens down and the vertex is the max.\n\nVerification: $P(14) = 0 + 980 = 980$. $P(13) = -5 + 980 = 975 < 980$. $P(15) = -5 + 980 = 975 < 980$ — both lower than $980$, confirming it's a max \\checkmark.\n\n**Why the wrong answers are tempting:**\n* A: \"swaps coordinates\" — swaps the $x$ (price) and $y$ (profit) values of the vertex.\n* C: \"wrong formula\" — interprets the vertex value as a constant function. Profit varies with price ($P$ depends on $x$).\n* D: \"wrong base\" — uses the leading coefficient $-5$ as the price.\n\n**Test Day Takeaway:** For revenue/profit models $a(x - h)^2 + k$ with $a < 0$: $h$ = price (or input) that maximizes; $k$ = the max value itself. Be careful which is being asked — the question's units help you decide.",
    calculatorAllowed: true, tags: ['interpret-parameter'], sourceStyleRef: 'interpret-vertex', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-am-216', domain: 'advanced-math', skills: ['function-interpretation', 'quadratic-equations'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A scuba diver descends to a particular depth and then ascends back toward the surface. Their depth below sea level, in meters, is modeled by $d(t) = (t - 8)^2 - 36$, where $t$ is minutes after the dive begins. (Negative values of $d$ indicate the diver is below sea level.) Which of the following is the best interpretation of the vertex of the graph of $y = d(t)$ in the $ty$-plane?',
    choices: [{ id: 'A', text: 'The diver reaches a deepest point of $36$ meters below sea level $8$ minutes after the dive begins.' }, { id: 'B', text: 'The diver reaches a deepest point of $8$ meters below sea level $36$ minutes after the dive begins.' }, { id: 'C', text: 'The diver returns to sea level $8$ minutes after the dive begins.' }, { id: 'D', text: 'The diver descends $36$ meters per minute starting at $t = 8$.' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Interpret Vertex Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Vertex of $d(t) = (t - 8)^2 - 36$ is $(8, -36)$. $a = 1 > 0$, so vertex is a MIN of $d$. Lowest $d$ = $-36$, i.e., $36$ meters BELOW sea level, at $t = 8$ minutes.\n\n**The Full Solution:**\nVertex form gives vertex $(h, k) = (8, -36)$. The leading coefficient $a = 1 > 0$ means the parabola opens UPWARD and the vertex is a minimum of $d$. The convention (problem statement) says negative $d$ means below sea level. So the most-negative value of $d$ corresponds to the GREATEST depth below sea level.\n\nMinimum $d = -36$ at $t = 8$, meaning the diver is $36$ m below sea level at $8$ minutes — their deepest point.\n\nVerification: at $t = 0$, $d(0) = 64 - 36 = 28$ — would mean $28$ m above sea level, which is fine as a model starting position (or could be re-checked depending on the domain). At $t = 8$, $d = -36$ (deepest). At $t = 16$, $d = 64 - 36 = 28$ (back to start) — symmetric about $t = 8$, confirming vertex \\checkmark.\n\n**Why the wrong answers are tempting:**\n* B: \"swaps coordinates\" — swaps the depth ($-36$) and the time ($8$).\n* C: \"wrong base\" — confuses the vertex's $t$-coordinate with the time the diver returns to the surface (which would be where $d = 0$, NOT the vertex).\n* D: \"wrong formula\" — treats $-36$ as a rate per minute. Rates of change are derivatives, not vertex coordinates.\n\n**Test Day Takeaway:** Watch the sign of $a$. $a > 0$: vertex is a MINIMUM. $a < 0$: vertex is a MAXIMUM. Also watch the sign convention in the context — \"deepest below sea level\" maps to the most-negative depth, which is the MIN if the model's positive direction is upward.",
    calculatorAllowed: true, tags: ['interpret-parameter'], sourceStyleRef: 'interpret-vertex', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-am-217', domain: 'advanced-math', skills: ['function-interpretation', 'quadratic-equations'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A drone is launched from a platform. The drone\'s altitude above the ground, in meters, is modeled by $a(t) = -3(t - 6)^2 + 110$, where $t$ is seconds after launch. Which of the following is the best interpretation of the vertex of the graph of $y = a(t)$ in the $ty$-plane?',
    choices: [{ id: 'A', text: 'The drone\'s maximum altitude is $110$ meters, reached $6$ seconds after launch.' }, { id: 'B', text: 'The drone\'s maximum altitude is $6$ meters, reached $110$ seconds after launch.' }, { id: 'C', text: 'The drone is launched from an altitude of $110$ meters.' }, { id: 'D', text: 'The drone reaches the ground after $6$ seconds.' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Interpret Vertex Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Vertex of $a(t) = -3(t - 6)^2 + 110$ is $(6, 110)$. $a = -3 < 0$, so vertex is a MAX. Max altitude $= 110$ m at $t = 6$ s.\n\n**The Full Solution:**\nVertex form $a(t) = -3(t - 6)^2 + 110$ has vertex $(h, k) = (6, 110)$. Since $-3 < 0$, the parabola opens down and the vertex is the maximum value of $a(t)$. Max altitude is $110$ m at $t = 6$ s.\n\nVerification: $a(6) = 0 + 110 = 110$. $a(0) = -3(36) + 110 = -108 + 110 = 2$ (launched from $2$ m above ground). $a(7) = -3 + 110 = 107 < 110$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* B: \"swaps coordinates\" — swaps the $t$ and $y$ values of the vertex.\n* C: \"wrong base\" — confuses the vertex's $y$-value (max altitude) with the launch altitude ($a(0) = 2$, not $110$).\n* D: \"wrong axis\" — describes when $a = 0$ (the $t$-intercept), not the vertex.\n\n**Test Day Takeaway:** Vertex form $a(t - h)^2 + k$: $(h, k)$ is the vertex. Don't confuse the vertex with the $y$-intercept (launch height) or the $t$-intercepts (when the drone reaches the ground).",
    calculatorAllowed: true, tags: ['interpret-parameter'], sourceStyleRef: 'interpret-vertex', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-am-218', domain: 'advanced-math', skills: ['function-interpretation', 'quadratic-equations'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A factory\'s daily production cost, in thousands of dollars, depends on the number of units produced. The cost is modeled by $C(u) = 0.2(u - 90)^2 + 4$, where $u$ is the number of units produced per day. Which of the following is the best interpretation of the vertex of the graph of $y = C(u)$ in the $uy$-plane?',
    choices: [{ id: 'A', text: 'The factory\'s lowest daily cost is approximately $\\$90{,}000$, achieved when producing $4$ units per day.' }, { id: 'B', text: 'The factory\'s lowest daily cost is approximately $\\$4{,}000$, achieved when producing $90$ units per day.' }, { id: 'C', text: 'The factory\'s highest daily cost is approximately $\\$4{,}000$, achieved when producing $90$ units per day.' }, { id: 'D', text: 'The factory cannot operate below a cost of $\\$0.2$.' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Interpret Vertex Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Vertex of $C(u) = 0.2(u - 90)^2 + 4$ is $(90, 4)$. $a = 0.2 > 0$, so vertex is a MIN. Min cost $= 4$ thousand $= \\$4{,}000$, at $u = 90$ units/day.\n\n**The Full Solution:**\nVertex form gives vertex $(h, k) = (90, 4)$. Since $a = 0.2 > 0$, the parabola opens UP and the vertex is the MINIMUM. The unit of $C$ is thousands of dollars, so $C = 4$ means $\\$4{,}000$. The minimum cost is $\\$4{,}000$, achieved when the factory produces $90$ units per day.\n\nVerification: $C(90) = 0 + 4 = 4$. $C(80) = 0.2(100) + 4 = 24$ thousand $= \\$24{,}000$ — much higher, confirming $90$ is the optimum \\checkmark.\n\n**Why the wrong answers are tempting:**\n* A: \"swaps coordinates AND wrong units\" — swaps $u$ and $C$ and treats $90$ as dollars.\n* C: \"wrong direction\" — since $a > 0$ the vertex is a MIN, not a max. Calls it a max instead.\n* D: \"wrong base\" — uses the leading coefficient $0.2$ as a dollar amount.\n\n**Test Day Takeaway:** Cost minimization: the leading coefficient $a > 0$ means cost has a MIN at the vertex (not a max). Always read the units of the dependent variable ($C$ in thousands here) before reporting an answer.",
    calculatorAllowed: true, tags: ['interpret-parameter'], sourceStyleRef: 'interpret-vertex', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  // ─── REVERSE EXPONENTIAL BACK IN TIME (bank-am-219..226) ──────────────────
  // Given current value + growth/decay rate, find a PAST value (divide by b^n,
  // not multiply). Distinct from forward `build-exponential-model`. See
  // audit §B4. CB precedent: PT11-M1-Q14, PT11-M2-Q11.
  { id: 'bank-am-219', domain: 'advanced-math', skills: ['exponential-functions', 'exponential-growth-decay'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A bacteria culture doubles in size every $3$ hours. The current count is $640$ bacteria. What was the count $3$ hours ago?',
    choices: [{ id: 'A', text: '$160$' }, { id: 'B', text: '$320$' }, { id: 'C', text: '$637$' }, { id: 'D', text: '$1{,}280$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Reverse Exponential Back in Time**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Doubles every $3$ hours $\\Rightarrow$ HALVES every $3$ hours when going BACKWARD. $640 / 2 = 320$.\n\n**The Full Solution:**\nLet $P(t)$ be the count $t$ hours from now, with $P(0) = 640$ and the doubling rule $P(t) = P(0) \\cdot 2^{t/3}$. Then $3$ hours ago corresponds to $t = -3$:\n$\\quad P(-3) = 640 \\cdot 2^{-1} = 640 \\cdot \\dfrac{1}{2} = 320$.\n\nVerification: starting from $320$, after $3$ hours: $320 \\cdot 2 = 640$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A ($160$): halves twice ($640 / 4$) — uses $6$ hours back instead of $3$.\n* Choice C ($637$): subtracts $3$ from $640$ — confuses 'hours' with 'count'.\n* Choice D ($1{,}280$): doubles forward instead of backward — uses '$3$ hours from now' instead of '$3$ hours ago'.\n\n**Test Day Takeaway:** Forward in exponential time: multiply by the base. Backward: DIVIDE by the base (or equivalently, multiply by its reciprocal). Direction matters.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'reverse-exponential-back-in-time', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-220', domain: 'advanced-math', skills: ['exponential-functions', 'exponential-growth-decay'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A population grows by $20\\%$ each year. The current population is $720$. What was the population one year ago?',
    choices: [{ id: 'A', text: '$576$' }, { id: 'B', text: '$600$' }, { id: 'C', text: '$700$' }, { id: 'D', text: '$864$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Reverse Exponential Back in Time**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Current $= 1.20 \\cdot$ (one year ago). So one year ago $= 720 / 1.20 = 600$.\n\n**The Full Solution:**\nIf $P_{\\text{now}} = 1.20 \\cdot P_{\\text{prev}}$, then $P_{\\text{prev}} = P_{\\text{now}} / 1.20 = 720 / 1.20 = 600$.\n\nVerification: $600 \\cdot 1.20 = 720$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A ($576$): subtracts $20\\%$ from $720$ ($720 \\cdot 0.80 = 576$). This computes 'one year FORWARD from $720$ if it decayed by $20\\%$,' not 'one year BACK with $20\\%$ growth.'\n* Choice C ($700$): subtracts the literal number $20$ from $720$.\n* Choice D ($864$): adds $20\\%$ to $720$ ($720 \\cdot 1.20$) — moves FORWARD in time, not backward.\n\n**Test Day Takeaway:** To reverse a $X\\%$ INCREASE, DIVIDE by $(1 + X/100)$ — NOT subtract $X\\%$. The two operations are NOT inverses: $720 \\cdot 0.80 \\ne 720 / 1.20$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'reverse-exponential-back-in-time', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-221', domain: 'advanced-math', skills: ['exponential-functions', 'exponential-growth-decay'], difficulty: 'medium', type: 'multiple-choice',
    question: 'An investment grows at a constant rate of $5\\%$ per year, compounded annually. After $3$ years, the investment is worth $\\$11{,}576.25$. What was the initial value of the investment?',
    choices: [{ id: 'A', text: '$\\$8{,}000$' }, { id: 'B', text: '$\\$10{,}000$' }, { id: 'C', text: '$\\$10{,}500$' }, { id: 'D', text: '$\\$13{,}400$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Reverse Exponential Back in Time**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** After $3$ years: $V_{\\text{now}} = V_0 \\cdot 1.05^3$. So $V_0 = V_{\\text{now}} / 1.05^3 = 11{,}576.25 / 1.157625 = 10{,}000$.\n\n**The Full Solution:**\nCompound growth: $V_3 = V_0 \\cdot 1.05^3$. Compute $1.05^3 = 1.157625$. Then:\n$\\quad V_0 = 11{,}576.25 / 1.157625 = 10{,}000$.\n\nVerification: $10{,}000 \\cdot 1.05^3 = 10{,}000 \\cdot 1.157625 = 11{,}576.25$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A ($8{,}000$): divides by $1.05 \\cdot 3 = 3.15$ instead of $1.05^3$ — treats compound growth as linear.\n* Choice C ($10{,}500$): reverses one year only ($11{,}576.25 / 1.05 \\approx 11{,}025$) and rounds wrongly — stops short of three years back.\n* Choice D ($13{,}400$): goes FORWARD instead of backward — multiplies by $1.05^3$ instead of dividing.\n\n**Test Day Takeaway:** Reversing $n$ years of compound growth: divide by $(1 + r)^n$, NOT by $1 + nr$. Compound and simple growth diverge — the difference grows with $n$.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'reverse-exponential-back-in-time', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-222', domain: 'advanced-math', skills: ['exponential-functions', 'exponential-growth-decay'], difficulty: 'medium', type: 'fill-in',
    question: 'A radioactive sample decays so that its mass halves every $24$ years. The sample currently has a mass of $5$ grams. What was the mass, in grams, of the sample $48$ years ago?',
    correctAnswer: '20',
    explanation: "**SAT Pattern: Reverse Exponential Back in Time**\n\n**The correct answer is $20$.**\n\n**The Fast Way (~10s):** $48$ years $= 2$ half-lives. Going BACKWARD, each half-life multiplies mass by $2$. So past mass $= 5 \\cdot 2^2 = 20$ g.\n\n**The Full Solution:**\nLet $M(t)$ be the mass $t$ years from now, with $M(0) = 5$ and $M(t) = 5 \\cdot (1/2)^{t/24}$. Then $48$ years ago is $t = -48$:\n$\\quad M(-48) = 5 \\cdot (1/2)^{-48/24} = 5 \\cdot (1/2)^{-2} = 5 \\cdot 4 = 20$ g.\n\nVerification: from $20$ g, after $24$ years $\\to 10$ g, after another $24$ years $\\to 5$ g. \\checkmark.\n\n**Common Mistakes:**\n* Reporting $10$ — only goes back one half-life instead of two.\n* Reporting $1.25$ — goes forward instead of backward ($5 / 4 = 1.25$).\n* Reporting $48$ — confuses the time (years) with the mass.\n\n**Test Day Takeaway:** Half-life problems: count the number of half-lives in the time window, then either MULTIPLY by $2^n$ going backward or DIVIDE by $2^n$ going forward.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'reverse-exponential-back-in-time', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-223', domain: 'advanced-math', skills: ['exponential-functions', 'exponential-growth-decay'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A car loses $15\\%$ of its value each year due to depreciation. The car is currently worth $\\$8{,}500$. What was the car worth one year ago?',
    choices: [{ id: 'A', text: '$\\$7{,}225$' }, { id: 'B', text: '$\\$9{,}775$' }, { id: 'C', text: '$\\$10{,}000$' }, { id: 'D', text: '$\\$11{,}333$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Reverse Exponential Back in Time**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Loses $15\\%$ each year $\\Rightarrow$ retains $85\\%$. So $V_{\\text{now}} = 0.85 \\cdot V_{\\text{prev}}$, meaning $V_{\\text{prev}} = 8{,}500 / 0.85 = 10{,}000$.\n\n**The Full Solution:**\nDepreciation rule: $V_{\\text{now}} = (1 - 0.15) \\cdot V_{\\text{prev}} = 0.85 \\cdot V_{\\text{prev}}$. To reverse one year of depreciation, divide by the surviving multiplier:\n$\\quad V_{\\text{prev}} = 8{,}500 / 0.85 = 10{,}000$.\n\nVerification: $10{,}000 \\cdot 0.85 = 8{,}500$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A ($7{,}225$): subtracts ANOTHER $15\\%$ from $8{,}500$ ($8{,}500 \\cdot 0.85 = 7{,}225$) — moves FORWARD in time, doubly mistaking direction.\n* Choice B ($9{,}775$): adds $15\\%$ ($8{,}500 \\cdot 1.15$) — uses the wrong inverse. The correct inverse of 'lose $15\\%$' is DIVIDE by $0.85$, not multiply by $1.15$.\n* Choice D ($11{,}333$): divides by the wrong number ($8{,}500 / 0.75$) — uses $25\\%$ instead of $15\\%$.\n\n**Test Day Takeaway:** Multiplying by $1.15$ is NOT the inverse of multiplying by $0.85$. The inverse of multiplying by $0.85$ is DIVIDING by $0.85$ (or multiplying by $1/0.85 \\approx 1.176$).",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'reverse-exponential-back-in-time', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-224', domain: 'advanced-math', skills: ['exponential-functions', 'exponential-growth-decay'], difficulty: 'medium', type: 'multiple-choice',
    question: "A small town's population is modeled by $P(t) = 200 \\cdot (1.10)^t$, where $t$ is the number of years from now (with $t = 0$ corresponding to today). Which of the following is closest to the population of the town two years ago?",
    choices: [{ id: 'A', text: '$160$' }, { id: 'B', text: '$165$' }, { id: 'C', text: '$180$' }, { id: 'D', text: '$242$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Reverse Exponential Back in Time**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Evaluate at $t = -2$: $P(-2) = 200 \\cdot (1.10)^{-2} = 200 / 1.21 \\approx 165.29$.\n\n**The Full Solution:**\n$P(-2) = 200 \\cdot (1.10)^{-2} = \\dfrac{200}{1.10^2} = \\dfrac{200}{1.21} \\approx 165.29$, which rounds to $165$.\n\nVerification: $165.29 \\cdot 1.10^2 = 165.29 \\cdot 1.21 \\approx 200$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A ($160$): subtracts $20\\%$ from $200$ — treats two years of $10\\%$ growth as $20\\%$ total, then incorrectly reverses.\n* Choice C ($180$): one year back only ($200 / 1.10 \\approx 182$) — forgets to apply the reverse twice.\n* Choice D ($242$): goes FORWARD two years instead of backward ($200 \\cdot 1.21$).\n\n**Test Day Takeaway:** Negative exponents in growth models mean PAST values. $b^{-n} = 1/b^n$. Don't confuse direction (sign of $t$) with rate (the base $b$).",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'reverse-exponential-back-in-time', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-225', domain: 'advanced-math', skills: ['exponential-functions', 'exponential-growth-decay'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The number of users on a platform grew at a constant rate of $25\\%$ per year for the past four years. There are currently $3{,}125$ users. How many users were there four years ago?',
    choices: [{ id: 'A', text: '$625$' }, { id: 'B', text: '$1{,}024$' }, { id: 'C', text: '$1{,}280$' }, { id: 'D', text: '$2{,}500$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Reverse Exponential Back in Time**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $U_{\\text{now}} = U_{-4} \\cdot 1.25^4$. So $U_{-4} = 3{,}125 / 1.25^4 = 3{,}125 / 2.44140625 = 1{,}280$.\n\n**The Full Solution:**\nFour years of $25\\%$ growth: total multiplier $1.25^4$. Compute: $1.25^2 = 1.5625$, so $1.25^4 = 1.5625^2 = 2.44140625$.\n\n$\\quad U_{-4} = \\dfrac{3{,}125}{2.44140625} = 1{,}280$.\n\nVerification: $1{,}280 \\cdot 1.25^4 = 1{,}280 \\cdot 2.44140625 = 3{,}125$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A ($625$): divides by $5$ ($3{,}125 / 5$) — treats compound growth as scaling by a single factor.\n* Choice B ($1{,}024$): divides $3{,}125$ by some incorrect compound base, perhaps treating $1.25^4$ as roughly $3$.\n* Choice D ($2{,}500$): reverses one year only ($3{,}125 / 1.25 = 2{,}500$) — stops short of four years back.\n\n**Test Day Takeaway:** Multi-year reversal: raise the multiplier to the FULL power, then divide. $1.25^4 \\ne 1.25 \\cdot 4$ and $\\ne 1 + 4 \\cdot 0.25$.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'reverse-exponential-back-in-time', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-226', domain: 'advanced-math', skills: ['exponential-functions', 'exponential-growth-decay'], difficulty: 'hard', type: 'fill-in',
    question: 'A medication concentration in the bloodstream decays exponentially with a half-life of $8$ hours. The current concentration is $4$ mg/L. How many hours ago was the concentration $32$ mg/L?',
    correctAnswer: '24',
    explanation: "**SAT Pattern: Reverse Exponential Back in Time**\n\n**The correct answer is $24$.**\n\n**The Fast Way (~15s):** $32 / 4 = 8 = 2^3$, so $3$ half-lives ago. $3 \\cdot 8 = 24$ hours.\n\n**The Full Solution:**\nDecay: $C(t) = 4 \\cdot (1/2)^{t/8}$. Past values use negative $t$. Going backward, the concentration was HIGHER by factors of $2$. We need to find how many hours ago $C = 32$:\n$\\quad 32 = 4 \\cdot 2^n$ (going backward $n$ half-lives)\n$\\quad 8 = 2^n$\n$\\quad n = 3$ half-lives.\nEach half-life is $8$ hours, so $24$ hours ago.\n\nVerification: $32 \\to 16 \\to 8 \\to 4$ across $3$ half-lives = $24$ hours \\checkmark.\n\n**Common Mistakes:**\n* Reporting $8$ — only one half-life back ($32 \\to 16$, not $32 \\to 4$).\n* Reporting $3$ — reports the NUMBER of half-lives without converting to hours.\n* Reporting $16$ — half-life count $\\cdot 2$? confused arithmetic.\n\n**Test Day Takeaway:** Half-life questions: factor the ratio $\\dfrac{C_{\\text{past}}}{C_{\\text{now}}}$ into powers of $2$. The exponent is the number of half-lives; multiply by the half-life duration to get the time.",
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
    explanation: "**SAT Pattern: Function from Shifted Graph**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** If $y = f(x + 4)$ passes through $(0, 5)$, then plugging $x = 0$: $f(0 + 4) = f(4) = 5$. Check each choice for $f(4) = 5$: $f(x) = x + 1 \\Rightarrow f(4) = 5$ \\checkmark.\n\n**The Full Solution:**\nThe transformation $y = f(x + 4)$ shifts $f$ left by $4$. The new graph passes through $(0, 5)$, so $f(0 + 4) = 5$. Test each choice:\n* A: $f(4) = 4 + 5 = 9 \\ne 5$.\n* B: $f(4) = 4 + 1 = 5$ \\checkmark.\n* C: $f(4) = 4 - 5 = -1 \\ne 5$.\n* D: $f(4) = 4 \\cdot 4 + 5 = 21 \\ne 5$.\n\n**Why the wrong answers are tempting:**\n* Choice A: applies the $+5$ from the point $(0, 5)$ directly as an intercept — confuses point coordinates with function definition.\n* Choice C: subtracts instead of adds the shift.\n* Choice D: introduces a slope factor that doesn't match.\n\n**Test Day Takeaway:** $y = f(x + h)$ passing through $(a, b)$ means $f(a + h) = b$. To check candidate $f$'s, evaluate at the SHIFTED $x$-value, not the original.",
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
    explanation: "**SAT Pattern: Function from Shifted Graph**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Lowest point of $y = g(x) + 3$ is $(0, 3)$ $\\Rightarrow$ lowest point of $g$ is $(0, 0)$. So $g$ has a minimum at $x = 0$ with value $0$. $g(x) = x^2$ matches.\n\n**The Full Solution:**\nThe transformation $y = g(x) + 3$ shifts $g$ UP by $3$. If the new graph has its lowest point at $(0, 3)$, then $g$ has its lowest point at $(0, 0)$: $g$ has a minimum value of $0$ at $x = 0$. $g(x) = x^2$ satisfies this.\n\n**Why the wrong answers are tempting:**\n* Choice B: $g(x) = x^2 + 3$ has minimum $(0, 3)$, so $g + 3$ would have minimum $(0, 6)$ — too high.\n* Choice C: $g(x) = (x - 2)^2$ has minimum at $x = 2$, not $x = 0$.\n* Choice D: opens downward — has a MAXIMUM at $(0, 0)$, not a minimum.\n\n**Test Day Takeaway:** Vertical shifts move the entire graph up or down. To undo a +k shift, subtract k from the y-coordinate of each point.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-from-shifted-graph', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-229', domain: 'advanced-math', skills: ['function-transformations', 'function-interpretation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'In the $xy$-plane, the graph of $y = h(x - 5)$ passes through the point $(0, 12)$. What is the value of $h(-5)$?',
    choices: [{ id: 'A', text: '$-12$' }, { id: 'B', text: '$-5$' }, { id: 'C', text: '$0$' }, { id: 'D', text: '$12$' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Function from Shifted Graph**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Plug $x = 0$ into $y = h(x - 5)$: $y = h(0 - 5) = h(-5)$. We're told $y = 12$, so $h(-5) = 12$.\n\n**The Full Solution:**\nThe statement '$y = h(x - 5)$ passes through $(0, 12)$' means substituting $x = 0$ gives $y = 12$:\n$\\quad 12 = h(0 - 5) = h(-5)$.\n\nVerification: directly reads off the definition — no algebraic manipulation needed.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-12$): negates the $y$-value.\n* Choice B ($-5$): reports the SHIFTED $x$-value as the answer.\n* Choice C ($0$): reports the original $x$-coordinate.\n* Choice D ($12$): correct.\n\n**Test Day Takeaway:** When $y = f(x \\pm h)$ passes through $(a, b)$, plug in $a$ for $x$ on the right side: $b = f(a \\pm h)$. The input to $f$ is the SHIFTED value, not the original.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-from-shifted-graph', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-230', domain: 'advanced-math', skills: ['function-transformations', 'function-interpretation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The function $g$ is defined by $g(x) = f(x - 2) + 7$. If the graph of $y = g(x)$ has its vertex at $(5, 11)$, then the graph of $y = f(x)$ has its vertex at which point?',
    choices: [{ id: 'A', text: '$(3, 4)$' }, { id: 'B', text: '$(3, 18)$' }, { id: 'C', text: '$(7, 4)$' }, { id: 'D', text: '$(7, 18)$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Function from Shifted Graph**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $g(x) = f(x - 2) + 7$ shifts $f$ RIGHT by $2$ and UP by $7$. To recover $f$'s vertex from $g$'s vertex, undo both shifts: left $2$ and down $7$. $(5, 11) \\to (5 - 2, 11 - 7) = (3, 4)$.\n\n**The Full Solution:**\nThe transformation $g(x) = f(x - 2) + 7$ maps every point $(a, b)$ on $y = f(x)$ to $(a + 2, b + 7)$ on $y = g(x)$:\n* $(a + 2) - 2 = a$: the input to $f$ at $x = a + 2$ for $g$ is $f(a)$.\n* $+ 7$: $g(a + 2) = f(a) + 7 = b + 7$.\nSo $f$'s vertex $(a, b)$ becomes $g$'s vertex $(a + 2, b + 7)$. Reverse: $g$'s vertex $(5, 11)$ becomes $f$'s vertex $(5 - 2, 11 - 7) = (3, 4)$.\n\nVerification: if $f$'s vertex is $(3, 4)$, then $g(3 + 2) = g(5) = f(3) + 7 = 4 + 7 = 11$. So $g(5) = 11$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B ($3, 18$): subtracts $x$-shift correctly but ADDS the $y$-shift instead of subtracting.\n* Choice C ($7, 4$): adds the $x$-shift (wrong direction) but subtracts $y$-shift correctly.\n* Choice D ($7, 18$): wrong direction on BOTH shifts.\n\n**Test Day Takeaway:** $f(x - h) + k$: shifts $f$ RIGHT by $h$ and UP by $k$. To go from $g$ back to $f$, subtract $h$ from $x$ and subtract $k$ from $y$. The signs in the formula vs the geometric direction are easy to confuse.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-from-shifted-graph', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-231', domain: 'advanced-math', skills: ['function-transformations', 'function-interpretation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The graph of $y = f(x)$ in the $xy$-plane is a V-shape with vertex at the origin. The graph of $y = f(x + 6)$ has its vertex at which point?',
    choices: [{ id: 'A', text: '$(-6, 0)$' }, { id: 'B', text: '$(0, -6)$' }, { id: 'C', text: '$(0, 6)$' }, { id: 'D', text: '$(6, 0)$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Function from Shifted Graph**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $y = f(x + 6)$ shifts the graph of $f$ to the LEFT by $6$. The vertex moves from $(0, 0)$ to $(-6, 0)$.\n\n**The Full Solution:**\nReplacing $x$ with $x + 6$ in the function shifts the graph $6$ units LEFT (opposite of the sign inside). The vertex of $y = f(x)$ at $(0, 0)$ moves to $(-6, 0)$ for $y = f(x + 6)$.\n\nVerification: at $x = -6$, $f(x + 6) = f(0) = 0$. So $(-6, 0)$ is on the shifted graph — and it's the vertex by the same reasoning that $(0, 0)$ is the vertex of $f$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($0, -6$): treats the $+6$ as a VERTICAL shift down — confuses inside-vs-outside.\n* Choice C ($0, 6$): treats the $+6$ as a VERTICAL shift up.\n* Choice D ($6, 0$): shifts in the WRONG horizontal direction. $f(x + 6)$ moves LEFT, not right.\n\n**Test Day Takeaway:** Inside the function: $f(x + h)$ shifts LEFT (counter-intuitive sign). Outside: $f(x) + k$ shifts UP. Memorize this pair — it's the most common transformation question type.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-from-shifted-graph', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-232', domain: 'advanced-math', skills: ['function-transformations', 'function-interpretation'], difficulty: 'medium', type: 'fill-in',
    question: 'The function $g$ is defined by $g(x) = f(x) - 4$. The graph of $y = g(x)$ in the $xy$-plane passes through the point $(2, 10)$. What is the value of $f(2)$?',
    correctAnswer: '14',
    explanation: "**SAT Pattern: Function from Shifted Graph**\n\n**The correct answer is $14$.**\n\n**The Fast Way (~5s):** $g(2) = f(2) - 4 = 10 \\Rightarrow f(2) = 14$.\n\n**The Full Solution:**\n$g(x) = f(x) - 4$ shifts $f$ down by $4$. To recover $f$'s value at $x = 2$, take $g$'s value and add $4$ back:\n$\\quad f(2) = g(2) + 4 = 10 + 4 = 14$.\n\nVerification: $g(2) = f(2) - 4 = 14 - 4 = 10$ \\checkmark.\n\n**Common Mistakes:**\n* Reporting $6$ — subtracts again ($10 - 4 = 6$) instead of reversing the shift.\n* Reporting $-4$ — reports the shift amount instead of $f(2)$.\n* Reporting $10$ — confuses $g(2)$ with $f(2)$.\n\n**Test Day Takeaway:** Reversing a vertical shift: if $g = f + k$, then $f = g - k$. The signs flip when going in the opposite direction.",
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
    explanation: "**SAT Pattern: Function from Shifted Graph**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** V-shape with vertex at $(h, k)$ and slopes $\\pm 1$ is $f(x) = |x - h| + k$. Here $(h, k) = (3, 0)$, so $f(x) = |x - 3|$.\n\n**The Full Solution:**\nStandard form for an absolute-value V is $f(x) = |x - h| + k$ with vertex at $(h, k)$. Vertex $(3, 0)$ $\\Rightarrow h = 3, k = 0$ $\\Rightarrow f(x) = |x - 3|$.\n\nVerification: $f(3) = 0$ (vertex on the $x$-axis); $f(0) = 3, f(6) = 3$ — symmetric about $x = 3$, slopes $\\pm 1$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: vertex at $x = -3$, not $x = 3$ — wrong shift direction.\n* Choice C: vertex at $(0, -3)$, not $(3, 0)$ — shifts the wrong axis.\n* Choice D: extra $+3$ shifts the vertex up to $(3, 3)$.\n\n**Test Day Takeaway:** Inside the absolute value: $|x - h|$ shifts vertex to $x = h$ (subtraction inside). Outside: $+ k$ shifts vertex up to $y = k$ (addition outside, same direction).",
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
    explanation: "**SAT Pattern: Function from Shifted Graph**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Reverse the transformations on $g$: shift RIGHT $4$ (substitute $x \\to x - 4$) and UP $2$ (add $2$): $f(x) = (x - 4 + 4)^2 - 2 + 2 = x^2$.\n\n**The Full Solution:**\nIf $g$ is obtained from $f$ by shifting left $4$ and down $2$:\n$\\quad g(x) = f(x + 4) - 2$\n$\\quad (x + 4)^2 - 2 = f(x + 4) - 2$\n$\\quad f(x + 4) = (x + 4)^2$\n$\\quad f(u) = u^2$ (set $u = x + 4$).\nSo $f(x) = x^2$.\n\nVerification: shift $f(x) = x^2$ left $4$ and down $2$: $g(x) = (x + 4)^2 - 2$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: keeps the $-2$ shift in $f$ — fails to reverse it.\n* Choice C: applies the SHIFT INCORRECTLY — uses $(x - 4)^2$ as if undoing a $+4$ in the input.\n* Choice D: reverses one transformation but keeps the other.\n\n**Test Day Takeaway:** To recover $f$ from $g$ when $g$ is $f$ shifted left $h$ and down $k$: shift $g$ RIGHT $h$ and UP $k$. The reverse of any transformation negates both components.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-from-shifted-graph', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── TANGENT LINE WITH PARAMETER — FIND X (bank-am-235..238) ──────────────
  // CB PT4-M1-Q24 variant: asks for the x-COORDINATE at the tangent point
  // (not the parameter). Same SAT Pattern as `tangent-line-and-discriminant`,
  // adding 4 items to ensure both directions of the question are covered.
  // See audit §B7.
  { id: 'bank-am-235', domain: 'advanced-math', skills: ['tangent-lines', 'discriminant-analysis'], difficulty: 'medium', type: 'fill-in',
    question: 'In the $xy$-plane, the line $y = 3x + a$ is tangent to the parabola $y = 2x^2 - 21x + 64$ at the point $(x_0, y_0)$, where $a$ is a constant. What is the value of $x_0$?',
    correctAnswer: '6',
    explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~25s):** Set the two $y$-expressions equal and gather: $2x^2 - 24x + (64 - a) = 0$. For tangency, this perfect square has a DOUBLE root at $x_0 = -B/(2A) = 24/4 = 6$.\n\n**The Full Solution:**\nSet equal: $2x^2 - 21x + 64 = 3x + a$, i.e., $2x^2 - 24x + (64 - a) = 0$. Tangency means this quadratic has a double root. The double root is the AXIS of the resulting parabola: $x_0 = -B/(2A) = -(-24)/(2 \\cdot 2) = 6$.\n\nVerification: the value of $a$ does not affect $x_0$, only the constant term. So $x_0 = 6$ for any tangent value of $a$. (Solving for $a$: $\\Delta = 24^2 - 8(64 - a) = 0 \\Rightarrow 576 - 512 + 8a = 0 \\Rightarrow a = -8$.) Then $y = 3(6) + (-8) = 10 = 2(36) - 21(6) + 64 = 72 - 126 + 64 = 10$ \\checkmark.\n\n**Common Mistakes:**\n* Reporting $-8$ — finds $a$ instead of $x_0$. The question asks for the tangent x-coordinate.\n* Reporting $12$ — uses $-B/A$ instead of $-B/(2A)$.\n* Reporting $21$ — pulls a coefficient from the parabola's middle term.\n\n**Test Day Takeaway:** When the parameter is in the LINE'S CONSTANT term, the x-coordinate of the tangent point is INDEPENDENT of the parameter — it's $x_0 = -B/(2A)$ of the rearranged quadratic. This is faster than solving for the parameter first.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'tangent-line-and-discriminant', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-236', domain: 'advanced-math', skills: ['tangent-lines', 'discriminant-analysis'], difficulty: 'medium', type: 'multiple-choice',
    question: 'In the $xy$-plane, the line $y = 4x + c$ is tangent to the parabola $y = x^2 - 8x + 11$ at the point $(x_0, y_0)$, where $c$ is a constant. What is the value of $x_0$?',
    choices: [{ id: 'A', text: '$-6$' }, { id: 'B', text: '$4$' }, { id: 'C', text: '$6$' }, { id: 'D', text: '$8$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Set equal and gather: $x^2 - 12x + (11 - c) = 0$. Double root at $x_0 = -B/(2A) = 12/2 = 6$.\n\n**The Full Solution:**\n$x^2 - 8x + 11 = 4x + c \\Rightarrow x^2 - 12x + (11 - c) = 0$.\nFor tangency, this has a double root $x_0$:\n$\\quad x_0 = -(-12)/(2 \\cdot 1) = 6$.\n\nVerification: from the discriminant $144 - 4(11 - c) = 0$, we get $c = -25$. Then $y = 4(6) - 25 = -1$ and $y = 36 - 48 + 11 = -1$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): sign flip in $-B/(2A)$.\n* Choice B ($4$): uses the slope of the line ($4$) as $x_0$.\n* Choice D ($8$): uses $-B$ alone (forgets to divide by $2A$).\n\n**Test Day Takeaway:** Tangent x-coordinate from a parameterized line: the constant $c$ slides the line vertically and doesn't change WHERE the tangency occurs (only WHEN). Use $-B/(2A)$ of the rearranged quadratic.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'tangent-line-and-discriminant', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-237', domain: 'advanced-math', skills: ['tangent-lines', 'discriminant-analysis'], difficulty: 'hard', type: 'multiple-choice',
    question: 'In the $xy$-plane, the line $y = mx + 1$ is tangent to the parabola $y = x^2 + 2x + 5$, where $m$ is a positive constant. What is the $x$-coordinate of the point of tangency?',
    choices: [{ id: 'A', text: '$-2$' }, { id: 'B', text: '$2$' }, { id: 'C', text: '$3$' }, { id: 'D', text: '$6$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Set equal: $x^2 + 2x + 5 = mx + 1 \\Rightarrow x^2 + (2 - m)x + 4 = 0$. Tangency: $(2 - m)^2 = 16 \\Rightarrow m = 2 \\pm 4 \\Rightarrow m = 6$ (positive root). Double root: $x_0 = -(2 - m)/(2) = (m - 2)/2 = 4/2 = 2$.\n\n**The Full Solution:**\nSet the two expressions equal:\n$\\quad x^2 + 2x + 5 = mx + 1$\n$\\quad x^2 + (2 - m)x + 4 = 0$\nFor tangency, the discriminant equals zero:\n$\\quad (2 - m)^2 - 4(1)(4) = 0$\n$\\quad (2 - m)^2 = 16$\n$\\quad 2 - m = \\pm 4$\n$\\quad m = -2$ or $m = 6$.\nWith $m > 0$, $m = 6$.\nDouble root: $x_0 = -(2 - 6)/2 = 4/2 = 2$.\n\nVerification at $m = 6$: $x^2 + 2x + 5 = 6x + 1 \\Rightarrow x^2 - 4x + 4 = (x - 2)^2 = 0$, so $x = 2$. Then $y = 6(2) + 1 = 13 = 4 + 4 + 5$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$): sign flip in $-B/(2A)$.\n* Choice C ($3$): half of $m$ ($6/2 = 3$) — confuses $m/2$ with $x_0$.\n* Choice D ($6$): reports $m$ (the slope) instead of $x_0$. Easy slip when both are integers in the problem.\n\n**Test Day Takeaway:** When the SLOPE is the parameter, expect TWO tangent lines (one for each sign of the slope difference). The constraint $m > 0$ selects one. $x_0 = -(B - m)/(2A)$ once you know $m$.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'tangent-line-and-discriminant', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-238', domain: 'advanced-math', skills: ['tangent-lines', 'discriminant-analysis'], difficulty: 'hard', type: 'fill-in',
    question: 'In the $xy$-plane, the line $y = 7x + a$ is tangent to the parabola $y = x^2 + 5x + 11$, where $a$ is a constant. What is the $x$-coordinate of the point of tangency?',
    correctAnswer: '1',
    explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**The correct answer is $1$.**\n\n**The Fast Way (~25s):** Set equal: $x^2 + 5x + 11 = 7x + a \\Rightarrow x^2 - 2x + (11 - a) = 0$. Double root at $x_0 = -(-2)/2 = 1$.\n\n**The Full Solution:**\n$x^2 + 5x + 11 = 7x + a$\n$x^2 - 2x + (11 - a) = 0$.\nTangency: $\\Delta = 4 - 4(11 - a) = 0 \\Rightarrow 11 - a = 1 \\Rightarrow a = 10$.\nDouble root: $x_0 = -(-2)/(2 \\cdot 1) = 1$.\n\nVerification at $a = 10$: $x^2 - 2x + 1 = (x - 1)^2 = 0$, so $x = 1$. Then $y = 7(1) + 10 = 17$ and $y = 1 + 5 + 11 = 17$ \\checkmark.\n\n**Common Mistakes:**\n* Reporting $10$ — solves for $a$ instead of $x_0$. The question asks for the x-coordinate.\n* Reporting $2$ — uses $-B$ without dividing by $2A$.\n* Reporting $-1$ — sign flip on $-B/(2A)$.\n\n**Test Day Takeaway:** When the line has a parameter $a$ in the CONSTANT term, the tangent x-coordinate is fully determined by the LEADING and MIDDLE coefficients after rearrangement. $a$ controls vertical position, not horizontal.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'tangent-line-and-discriminant', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── VERTICAL SHIFT (bank-am-239..246) ───────────────────────────────────
  // y = f(x) + k shifts vertically. Distinct from horizontal shift,
  // reflection, and vertical stretch in METHOD (you add/subtract k from y).
  { id: 'bank-am-239', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The function $g$ is defined by $g(x) = f(x) + 3$. If $f(2) = 5$, what is the value of $g(2)$?',
    choices: [{ id: 'A', text: '$2$' }, { id: 'B', text: '$5$' }, { id: 'C', text: '$8$' }, { id: 'D', text: '$15$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Vertical Shift**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** $g(2) = f(2) + 3 = 5 + 3 = 8$.\n\n**The Full Solution:**\nVertical shift adds $3$ to every $y$-value of $f$: $g(2) = f(2) + 3 = 5 + 3 = 8$.\n\nVerification: the rule $g = f + 3$ means each point on $g$ is $3$ units above the corresponding point on $f$.\n\n**Why the wrong answers are tempting:**\n* A ($2$): reports the input ($x = 2$).\n* B ($5$): reports $f(2)$ unchanged — forgets the $+3$ shift.\n* D ($15$): multiplies by $3$ instead of adding.\n\n**Test Day Takeaway:** $f(x) + k$ shifts the graph $k$ units UP (or DOWN if $k < 0$). Applied pointwise to the $y$-values.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertical-shift', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-240', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The graph of $y = f(x) + 7$ in the $xy$-plane is the graph of $y = f(x)$ shifted in which direction?',
    choices: [{ id: 'A', text: '$7$ units up' }, { id: 'B', text: '$7$ units down' }, { id: 'C', text: '$7$ units right' }, { id: 'D', text: '$7$ units left' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Vertical Shift**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Adding outside the function ($+ 7$) shifts the graph UP $7$ units.\n\n**The Full Solution:**\nThe transformation $y = f(x) + k$ adds $k$ to every $y$-value. Positive $k$ moves the graph UP; negative $k$ moves it DOWN. Horizontal shifts come from changes INSIDE the function, like $f(x - h)$.\n\n**Why the wrong answers are tempting:**\n* B: opposite vertical direction.\n* C: confuses outside-shift with inside-shift; horizontal shifts are $f(x \\pm h)$, not $f(x) \\pm k$.\n* D: same confusion as C, opposite horizontal direction.\n\n**Test Day Takeaway:** OUTSIDE the function = VERTICAL shift, intuitive direction (+ is up). INSIDE the function = HORIZONTAL shift, opposite direction (subtract = right).",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertical-shift', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-241', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The function $f$ satisfies $f(0) = 4$. If $g(x) = f(x) - 5$, what is the value of $g(0)$?',
    choices: [{ id: 'A', text: '$-9$' }, { id: 'B', text: '$-1$' }, { id: 'C', text: '$4$' }, { id: 'D', text: '$9$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Vertical Shift**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $g(0) = f(0) - 5 = 4 - 5 = -1$.\n\n**The Full Solution:**\nVertical shift down by $5$: $g(0) = f(0) - 5 = -1$.\n\n**Why the wrong answers are tempting:**\n* A ($-9$): adds $-5 - 4 = -9$ instead of $4 - 5 = -1$.\n* C ($4$): reports $f(0)$ unchanged.\n* D ($9$): adds instead of subtracts.\n\n**Test Day Takeaway:** Vertical shift down by $k$: subtract $k$ from $f(x)$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertical-shift', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-242', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'medium', type: 'fill-in',
    question: 'The graph of $y = f(x)$ in the $xy$-plane has a maximum value of $8$. What is the maximum value of $y = f(x) + 2$?',
    correctAnswer: '10',
    explanation: "**SAT Pattern: Vertical Shift**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~5s):** Shift up by $2$: new maximum $= 8 + 2 = 10$.\n\n**The Full Solution:**\nVertical shift adds the same constant to EVERY $y$-value, including the maximum. So the new maximum is $8 + 2 = 10$. The $x$-coordinate of the maximum stays the same.\n\n**Test Day Takeaway:** Vertical shift preserves $x$-coordinates of extrema and shifts $y$-coordinates by $k$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertical-shift', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-243', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'medium', type: 'multiple-choice',
    question: 'If $h(x) = x^2$, which of the following functions represents the graph of $h$ shifted DOWN by $5$ units?',
    choices: [{ id: 'A', text: '$h(x) = (x - 5)^2$' }, { id: 'B', text: '$h(x) = (x + 5)^2$' }, { id: 'C', text: '$h(x) = x^2 - 5$' }, { id: 'D', text: '$h(x) = x^2 + 5$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Vertical Shift**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Shift DOWN $5$ = subtract $5$ on the OUTSIDE: $x^2 - 5$.\n\n**The Full Solution:**\nOutside changes affect $y$-values: $h(x) - 5$ moves the graph down $5$ units. Inside changes affect $x$-values (horizontal shifts).\n\n**Why the wrong answers are tempting:**\n* A: $(x - 5)^2$ shifts the graph RIGHT $5$, not down.\n* B: $(x + 5)^2$ shifts the graph LEFT $5$.\n* D: $x^2 + 5$ shifts the graph UP $5$, not down.\n\n**Test Day Takeaway:** To shift down by $k$, subtract $k$ OUTSIDE the function. Don't move the subtraction inside the squared term.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertical-shift', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-244', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The graph of $y = g(x)$ in the $xy$-plane passes through the point $(3, 7)$. Which of the following points must lie on the graph of $y = g(x) - 4$?',
    choices: [{ id: 'A', text: '$(-1, 7)$' }, { id: 'B', text: '$(3, 3)$' }, { id: 'C', text: '$(3, 11)$' }, { id: 'D', text: '$(7, 3)$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Vertical Shift**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Vertical shift down $4$: $x$ stays at $3$, $y$ drops from $7$ to $7 - 4 = 3$.\n\n**The Full Solution:**\n$y = g(x) - 4$ takes every point $(a, b)$ on $g$ and maps it to $(a, b - 4)$. So $(3, 7)$ becomes $(3, 3)$.\n\n**Why the wrong answers are tempting:**\n* A: subtracts from $x$-coordinate — confuses vertical and horizontal shifts.\n* C: adds $4$ to $y$ — wrong direction.\n* D: swaps coordinates.\n\n**Test Day Takeaway:** Vertical shift moves $y$-coordinate only. $x$ is preserved.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertical-shift', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-245', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The graph of $y = (x - 3)^2 + 5$ is the graph of $y = (x - 3)^2 + 2$ transformed in which way?',
    choices: [{ id: 'A', text: 'shifted $3$ units up' }, { id: 'B', text: 'shifted $3$ units down' }, { id: 'C', text: 'shifted $5$ units up' }, { id: 'D', text: 'shifted $2$ units up' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Vertical Shift**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Both share $(x - 3)^2$. Constants differ by $5 - 2 = 3$. So the new graph is $3$ units up.\n\n**The Full Solution:**\nThe parts inside (i.e., $(x - 3)^2$) are identical, so the horizontal shape is the same. The constants (vertex $y$-values) differ by $5 - 2 = 3$, so the new graph is $3$ units higher than the old.\n\n**Why the wrong answers are tempting:**\n* B: opposite direction.\n* C ($5$): reports the new constant alone.\n* D ($2$): reports the old constant alone.\n\n**Test Day Takeaway:** When two vertex-form graphs have the same $(x - h)^2$ part but different constants $k_1, k_2$, the difference $k_2 - k_1$ is the vertical shift between them.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertical-shift', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-246', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'hard', type: 'fill-in',
    question: 'The graph of $y = f(x) + k$ in the $xy$-plane passes through the point $(0, 10)$. If $f(0) = -2$, what is the value of $k$?',
    correctAnswer: '12',
    explanation: "**SAT Pattern: Vertical Shift**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~10s):** $y = f(0) + k = -2 + k = 10 \\Rightarrow k = 12$.\n\n**The Full Solution:**\nAt $x = 0$: $y = f(0) + k = -2 + k$. The graph passes through $(0, 10)$, so $-2 + k = 10$, giving $k = 12$.\n\nVerification: $y = f(0) + 12 = -2 + 12 = 10$ \\checkmark.\n\n**Test Day Takeaway:** To find an unknown shift constant, plug in a known point and solve.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertical-shift', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── HORIZONTAL SHIFT (bank-am-247..254) ─────────────────────────────────
  // y = f(x ± h). Counter-intuitive sign: f(x - h) shifts RIGHT, f(x + h) LEFT.
  { id: 'bank-am-247', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'easy', type: 'multiple-choice',
    question: 'If $g(x) = f(x - 4)$ and $f(3) = 7$, what is the value of $g(7)$?',
    choices: [{ id: 'A', text: '$3$' }, { id: 'B', text: '$4$' }, { id: 'C', text: '$7$' }, { id: 'D', text: '$11$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Horizontal Shift**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** $g(7) = f(7 - 4) = f(3) = 7$.\n\n**The Full Solution:**\nApply the rule: $g(x) = f(x - 4)$, so $g(7) = f(7 - 4) = f(3) = 7$.\n\n**Why the wrong answers are tempting:**\n* A ($3$): reports the shifted input.\n* B ($4$): reports the shift amount.\n* D ($11$): adds $7 + 4$ — uses $+ 4$ instead of $- 4$ in the substitution.\n\n**Test Day Takeaway:** For $g(x) = f(x - h)$, the input to $f$ at any $x$ is $x - h$. The shift is on the INPUT, not the output.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'horizontal-shift', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-248', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'easy', type: 'multiple-choice',
    question: 'In the $xy$-plane, the graph of $y = f(x + 5)$ is the graph of $y = f(x)$ shifted in which direction?',
    choices: [{ id: 'A', text: '$5$ units up' }, { id: 'B', text: '$5$ units down' }, { id: 'C', text: '$5$ units left' }, { id: 'D', text: '$5$ units right' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Horizontal Shift**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** $f(x + 5)$ shifts the graph $5$ units LEFT (opposite of the sign inside).\n\n**The Full Solution:**\nInside-function shifts go OPPOSITE the apparent direction: $f(x + h)$ shifts LEFT by $h$; $f(x - h)$ shifts RIGHT by $h$. The intuition: to get the same output as $f$ once had at $x = 5$, you now feed in $x = 0$ (since $0 + 5 = 5$). The graph 'arrives' at $x = 0$ that used to be at $x = 5$ — it moved left.\n\n**Why the wrong answers are tempting:**\n* A/B: vertical shifts come from OUTSIDE the function, not inside.\n* D: wrong direction; positive inside means LEFT, not right.\n\n**Test Day Takeaway:** Inside-function sign FLIPS the direction. Memorize: $f(x + h) =$ LEFT, $f(x - h) =$ RIGHT.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'horizontal-shift', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-249', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'medium', type: 'multiple-choice',
    question: 'If $h(x) = x^2$, which of the following functions represents the graph of $h$ shifted to the RIGHT by $3$ units?',
    choices: [{ id: 'A', text: '$h(x) = (x - 3)^2$' }, { id: 'B', text: '$h(x) = (x + 3)^2$' }, { id: 'C', text: '$h(x) = x^2 - 3$' }, { id: 'D', text: '$h(x) = x^2 + 3$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Horizontal Shift**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Shift RIGHT $3$ = SUBTRACT $3$ inside: $(x - 3)^2$.\n\n**The Full Solution:**\nInside-function shift: $f(x - h)$ moves the graph RIGHT by $h$. So shifting $x^2$ right by $3$ gives $(x - 3)^2$.\n\n**Why the wrong answers are tempting:**\n* B: $(x + 3)^2$ shifts LEFT, not right.\n* C: $x^2 - 3$ shifts DOWN, not right.\n* D: $x^2 + 3$ shifts UP, not right.\n\n**Test Day Takeaway:** Right = subtract inside. Left = add inside. Up = add outside. Down = subtract outside.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'horizontal-shift', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-250', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'medium', type: 'fill-in',
    question: 'The graph of $y = f(x)$ in the $xy$-plane has its vertex at $(2, -1)$. The graph of $y = f(x + 6)$ has its vertex at $(a, -1)$. What is the value of $a$?',
    correctAnswer: '-4',
    explanation: "**SAT Pattern: Horizontal Shift**\n\n**The correct answer is $-4$.**\n\n**The Fast Way (~5s):** $f(x + 6)$ shifts the graph LEFT $6$ units. New vertex $x = 2 - 6 = -4$.\n\n**The Full Solution:**\nThe vertex of $y = f(x + 6)$ is the vertex of $y = f(x)$ shifted left by $6$: $(2, -1) \\to (2 - 6, -1) = (-4, -1)$.\n\nVerification: if the original vertex is where $f(2)$ takes its extreme value, then the shifted vertex is where $f(x + 6) = f(2)$, i.e., where $x + 6 = 2 \\Rightarrow x = -4$ \\checkmark.\n\n**Test Day Takeaway:** Vertex shifts the same way the graph does. $f(x + h)$ moves the vertex LEFT by $h$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'horizontal-shift', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-251', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The graph of $y = g(x)$ in the $xy$-plane passes through the point $(5, 12)$. Which of the following points must lie on the graph of $y = g(x - 3)$?',
    choices: [{ id: 'A', text: '$(2, 12)$' }, { id: 'B', text: '$(5, 9)$' }, { id: 'C', text: '$(5, 15)$' }, { id: 'D', text: '$(8, 12)$' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Horizontal Shift**\n\n**Choice D is correct.**\n\n**The Fast Way (~5s):** $g(x - 3)$ shifts RIGHT $3$. So $(5, 12) \\to (8, 12)$.\n\n**The Full Solution:**\nThe rule: any point $(a, b)$ on $y = g(x)$ becomes $(a + 3, b)$ on $y = g(x - 3)$ — verify by checking $g((a + 3) - 3) = g(a) = b$. So $(5, 12) \\to (8, 12)$.\n\n**Why the wrong answers are tempting:**\n* A: subtracts from $x$ — wrong direction.\n* B: subtracts from $y$ — confuses vertical/horizontal.\n* C: adds to $y$ — same confusion as B.\n\n**Test Day Takeaway:** $g(x - h)$: every point's $x$-coordinate goes UP by $h$, $y$ stays. Counter-intuitive sign, but the LOGIC is clear: feed in a value $h$ higher to recover the same output.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'horizontal-shift', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-252', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'medium', type: 'multiple-choice',
    question: 'If $g(x) = f(x + 2)$ and $g(0) = 5$, what is the value of $f(2)$?',
    choices: [{ id: 'A', text: '$-3$' }, { id: 'B', text: '$0$' }, { id: 'C', text: '$2$' }, { id: 'D', text: '$5$' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Horizontal Shift**\n\n**Choice D is correct.**\n\n**The Fast Way (~5s):** $g(0) = f(0 + 2) = f(2)$, and $g(0) = 5$, so $f(2) = 5$.\n\n**The Full Solution:**\nApply the definition: $g(x) = f(x + 2)$, so $g(0) = f(2)$. Given $g(0) = 5$, we get $f(2) = 5$.\n\n**Why the wrong answers are tempting:**\n* A ($-3$): adds $0$ and $2$ negatively, or some other sign-mix-up.\n* B ($0$): reports the input $x = 0$.\n* C ($2$): reports the shift amount.\n\n**Test Day Takeaway:** When asked to evaluate $f$ at a specific input given $g$ values, find the $x$ where $x + h$ equals that input.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'horizontal-shift', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-253', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The function $f$ has its minimum at $x = 4$. At what value of $x$ does the function defined by $f(x - 6)$ attain its minimum?',
    choices: [{ id: 'A', text: '$-10$' }, { id: 'B', text: '$-2$' }, { id: 'C', text: '$2$' }, { id: 'D', text: '$10$' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Horizontal Shift**\n\n**Choice D is correct.**\n\n**The Fast Way (~5s):** $f(x - 6)$ shifts RIGHT $6$. Min moves from $x = 4$ to $x = 4 + 6 = 10$.\n\n**The Full Solution:**\n$f(x - 6)$ attains its minimum where $x - 6 = 4$ (i.e., where $f$'s argument is $4$, $f$'s minimum location). Solving: $x = 10$.\n\nVerification: at $x = 10$, $f(10 - 6) = f(4) = $ min of $f$. At any other $x$, $f$'s argument is not $4$, so $f$ is greater than its min \\checkmark.\n\n**Test Day Takeaway:** Extremes shift the same way the graph does. $f(x - h)$: every special $x$-value goes UP by $h$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'horizontal-shift', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-254', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'hard', type: 'fill-in',
    question: 'The graph of $y = f(x)$ in the $xy$-plane has an $x$-intercept at $x = -3$. The graph of $y = f(x - 7)$ has an $x$-intercept at $x = a$. What is the value of $a$?',
    correctAnswer: '4',
    explanation: "**SAT Pattern: Horizontal Shift**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~5s):** $f(x - 7)$ shifts RIGHT $7$. $x$-intercept moves from $-3$ to $-3 + 7 = 4$.\n\n**The Full Solution:**\nAn $x$-intercept of $y = f(x - 7)$ is a value of $x$ where $f(x - 7) = 0$. Since $f(-3) = 0$, set $x - 7 = -3$, giving $x = 4$.\n\nVerification: at $x = 4$, $f(4 - 7) = f(-3) = 0$ \\checkmark.\n\n**Test Day Takeaway:** $x$-intercepts (zeros) shift the same way every other $x$-coordinate shifts. They follow the graph.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'horizontal-shift', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── REFLECTION OF GRAPH (bank-am-255..262) ──────────────────────────────
  // y = -f(x) reflects over x-axis. y = f(-x) reflects over y-axis. EVEN
  // functions are unchanged by f(-x); ODD functions become -f(x).
  { id: 'bank-am-255', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The graph of $y = -f(x)$ in the $xy$-plane is the graph of $y = f(x)$ reflected over which axis?',
    choices: [{ id: 'A', text: 'the $x$-axis' }, { id: 'B', text: 'the $y$-axis' }, { id: 'C', text: 'the line $y = x$' }, { id: 'D', text: 'no reflection — it is a vertical stretch' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Reflection of Graph**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Negating the OUTPUT ($-f(x)$) reflects over the $x$-axis.\n\n**The Full Solution:**\n$y = -f(x)$ takes every point $(a, b)$ on $y = f(x)$ and maps it to $(a, -b)$ — the same $x$, opposite $y$. That's a reflection over the $x$-axis.\n\n**Why the wrong answers are tempting:**\n* B: reflection over the $y$-axis is $f(-x)$ (negating INPUT), not $-f(x)$.\n* C: reflection over $y = x$ swaps $x$ and $y$ (this is the inverse function).\n* D: a vertical stretch is multiplication by a constant other than $-1$. $-1$ specifically is reflection.\n\n**Test Day Takeaway:** Negate the OUTPUT $\\Rightarrow$ reflect over $x$-axis. Negate the INPUT $\\Rightarrow$ reflect over $y$-axis.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'reflection-of-graph', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-256', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'easy', type: 'multiple-choice',
    question: 'If $g(x) = f(-x)$ and $f(3) = 8$, what is the value of $g(-3)$?',
    choices: [{ id: 'A', text: '$-8$' }, { id: 'B', text: '$-3$' }, { id: 'C', text: '$3$' }, { id: 'D', text: '$8$' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Reflection of Graph**\n\n**Choice D is correct.**\n\n**The Fast Way (~5s):** $g(-3) = f(-(-3)) = f(3) = 8$.\n\n**The Full Solution:**\nApply the definition: $g(x) = f(-x)$, so $g(-3) = f(-(-3)) = f(3) = 8$.\n\n**Why the wrong answers are tempting:**\n* A ($-8$): confuses $f(-x)$ (reflect over $y$-axis) with $-f(x)$ (reflect over $x$-axis).\n* B ($-3$): reports the input.\n* C ($3$): reports the simplified input.\n\n**Test Day Takeaway:** $f(-x)$: negate input only, output is unchanged. The function VALUE doesn't change sign; only the input does.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'reflection-of-graph', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-257', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The graph of $y = f(x)$ in the $xy$-plane passes through the point $(2, 5)$. Which of the following points must lie on the graph of $y = -f(x)$?',
    choices: [{ id: 'A', text: '$(-2, 5)$' }, { id: 'B', text: '$(-2, -5)$' }, { id: 'C', text: '$(2, -5)$' }, { id: 'D', text: '$(5, 2)$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Reflection of Graph**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** $-f(x)$ flips the $y$-coordinate. $(2, 5) \\to (2, -5)$.\n\n**The Full Solution:**\n$y = -f(x)$ reflects over the $x$-axis: $x$ stays, $y$ negates. $(2, 5) \\to (2, -5)$.\n\n**Why the wrong answers are tempting:**\n* A: negates only $x$ — reflection over $y$-axis, not $x$-axis.\n* B: negates BOTH — combines two reflections.\n* D: swaps $x$ and $y$.\n\n**Test Day Takeaway:** $-f(x)$ flips $y$, keeps $x$. The fixed points are on the $x$-axis (where $y = 0$).",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'reflection-of-graph', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-258', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'medium', type: 'multiple-choice',
    question: 'If $h(x) = x^2 + 3x$, which of the following defines a function whose graph is the reflection of $y = h(x)$ over the $x$-axis?',
    choices: [{ id: 'A', text: '$h(-x) = x^2 - 3x$' }, { id: 'B', text: '$-h(x) = -x^2 - 3x$' }, { id: 'C', text: '$h(x) + 1 = x^2 + 3x + 1$' }, { id: 'D', text: '$-h(-x) = -x^2 + 3x$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Reflection of Graph**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Reflection over $x$-axis $\\Rightarrow$ negate OUTPUT: $-h(x) = -(x^2 + 3x) = -x^2 - 3x$.\n\n**The Full Solution:**\n$-h(x) = -(x^2 + 3x) = -x^2 - 3x$. Every $y$-value flips sign.\n\n**Why the wrong answers are tempting:**\n* A: $h(-x)$ negates INPUT — reflection over $y$-axis, not $x$-axis.\n* C: vertical shift, not reflection.\n* D: $-h(-x)$ is reflection over BOTH axes (origin symmetry).\n\n**Test Day Takeaway:** Reflection over $x$-axis $\\equiv$ negate OUTPUT (entire expression). Don't distribute the negative sign onto only some terms.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'reflection-of-graph', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-259', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'medium', type: 'fill-in',
    question: 'The graph of $y = f(x)$ in the $xy$-plane has a maximum value of $12$. What is the minimum value of $y = -f(x)$?',
    correctAnswer: '-12',
    explanation: "**SAT Pattern: Reflection of Graph**\n\n**The correct answer is $-12$.**\n\n**The Fast Way (~5s):** Reflection over $x$-axis turns the maximum into a minimum and flips its sign: $\\max = 12 \\to \\min = -12$.\n\n**The Full Solution:**\nThe graph of $y = -f(x)$ is the graph of $y = f(x)$ flipped over the $x$-axis. The MAXIMUM $y$-value of $f$ (which was $12$) becomes the MINIMUM $y$-value of $-f$ (which is $-12$). The corresponding $x$-coordinate is unchanged.\n\n**Test Day Takeaway:** Reflection over the $x$-axis turns max into min (and vice versa), with the $y$-value sign flipped.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'reflection-of-graph', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-260', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Which of the following transformations produces the graph of $y = f(-x)$ from the graph of $y = f(x)$?',
    choices: [{ id: 'A', text: 'reflection over the $x$-axis' }, { id: 'B', text: 'reflection over the $y$-axis' }, { id: 'C', text: 'reflection over the line $y = x$' }, { id: 'D', text: 'rotation by $90°$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Reflection of Graph**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Negating the INPUT ($f(-x)$) reflects over the $y$-axis.\n\n**The Full Solution:**\n$y = f(-x)$ maps every point $(a, b)$ on $f$ to $(-a, b)$ — same $y$, opposite $x$. That's a reflection over the $y$-axis.\n\n**Why the wrong answers are tempting:**\n* A: $-f(x)$ is reflection over $x$-axis. $f(-x)$ is different.\n* C: reflection over $y = x$ is the INVERSE function — swaps $x$ and $y$.\n* D: rotation is not a standard function transformation in this form.\n\n**Test Day Takeaway:** Reflection over $y$-axis $\\equiv$ negate INPUT only. The output value is unchanged.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'reflection-of-graph', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-261', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The graph of $y = g(x)$ in the $xy$-plane passes through the point $(-4, 6)$. Which of the following points must lie on the graph of $y = g(-x)$?',
    choices: [{ id: 'A', text: '$(-4, -6)$' }, { id: 'B', text: '$(4, -6)$' }, { id: 'C', text: '$(4, 6)$' }, { id: 'D', text: '$(6, -4)$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Reflection of Graph**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Reflection over $y$-axis: negate $x$. $(-4, 6) \\to (4, 6)$.\n\n**The Full Solution:**\n$y = g(-x)$ takes every $(a, b)$ on $g$ to $(-a, b)$: $(-4, 6) \\to (4, 6)$.\n\n**Why the wrong answers are tempting:**\n* A: negates only $y$.\n* B: negates BOTH.\n* D: swaps coordinates.\n\n**Test Day Takeaway:** $g(-x)$: $x$ flips sign; $y$ stays. Fixed points on the $y$-axis (where $x = 0$).",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'reflection-of-graph', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-262', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'hard', type: 'fill-in',
    question: 'A function $f$ is EVEN, meaning $f(-x) = f(x)$ for every $x$ in its domain. If $f(5) = 7$, what is the value of $f(-5)$?',
    correctAnswer: '7',
    explanation: "**SAT Pattern: Reflection of Graph**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~5s):** Definition of even: $f(-x) = f(x)$. So $f(-5) = f(5) = 7$.\n\n**The Full Solution:**\nAn even function has $f(-x) = f(x)$ for all $x$. Apply with $x = 5$: $f(-5) = f(5) = 7$.\n\nVerification: an even function's graph is symmetric over the $y$-axis. $(5, 7)$ and $(-5, 7)$ are mirror images.\n\n**Common Mistakes:**\n* Reporting $-7$: confuses 'even' with 'odd' ($f(-x) = -f(x)$, which would give $-7$).\n* Reporting $5$ or $-5$: reports an $x$-value.\n\n**Test Day Takeaway:** EVEN = symmetric over $y$-axis (input sign doesn't matter). ODD = symmetric over origin ($f(-x) = -f(x)$).",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'reflection-of-graph', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── VERTICAL STRETCH (bank-am-263..270) ─────────────────────────────────
  // y = a·f(x) stretches vertically by factor a. a > 1: stretch; 0 < a < 1:
  // compression. Negative a combines reflection over x-axis.
  { id: 'bank-am-263', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'easy', type: 'multiple-choice',
    question: 'If $g(x) = 3 \\cdot f(x)$ and $f(2) = 4$, what is the value of $g(2)$?',
    choices: [{ id: 'A', text: '$3$' }, { id: 'B', text: '$7$' }, { id: 'C', text: '$12$' }, { id: 'D', text: '$24$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Vertical Stretch**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** $g(2) = 3 \\cdot f(2) = 3 \\cdot 4 = 12$.\n\n**The Full Solution:**\nVertical stretch by factor $3$: multiply $f$'s output by $3$. $g(2) = 3 \\cdot 4 = 12$.\n\n**Why the wrong answers are tempting:**\n* A: reports the stretch factor.\n* B: ADDS instead of multiplies ($3 + 4 = 7$).\n* D: multiplies the input by $3$ before evaluating — wrong order.\n\n**Test Day Takeaway:** $a \\cdot f(x)$ scales the OUTPUT by $a$. Multiply, don't add.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertical-stretch', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-264', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The graph of $y = 2 f(x)$ in the $xy$-plane is the graph of $y = f(x)$ stretched vertically by a factor of:',
    choices: [{ id: 'A', text: '$0.5$' }, { id: 'B', text: '$2$' }, { id: 'C', text: '$4$' }, { id: 'D', text: '$-2$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Vertical Stretch**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** The coefficient $2$ in $2 f(x)$ is the vertical stretch factor.\n\n**The Full Solution:**\nMultiplying $f(x)$ by $2$ doubles every $y$-value, stretching the graph vertically by factor $2$.\n\n**Why the wrong answers are tempting:**\n* A: reciprocal — would be a compression.\n* C: squares the factor.\n* D: would also reflect over $x$-axis, which isn't here.\n\n**Test Day Takeaway:** For $a \\cdot f(x)$ with $a > 1$: stretch by $a$. With $0 < a < 1$: compress by $a$. With $a < 0$: stretch by $|a|$ AND reflect over $x$-axis.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertical-stretch', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-265', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'medium', type: 'multiple-choice',
    question: 'If $h(x) = x^2$, which of the following functions stretches $h$ vertically by a factor of $5$?',
    choices: [{ id: 'A', text: '$h(x) = (5x)^2$' }, { id: 'B', text: '$h(x) = 5x^2$' }, { id: 'C', text: '$h(x) = x^2 + 5$' }, { id: 'D', text: '$h(x) = x^{10}$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Vertical Stretch**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Vertical stretch by $5$ = multiply OUTSIDE: $5 \\cdot x^2 = 5x^2$.\n\n**The Full Solution:**\n$5 \\cdot h(x) = 5x^2$. Multiplies $h$'s output by $5$.\n\n**Why the wrong answers are tempting:**\n* A: $(5x)^2 = 25x^2$ — INSIDE multiplication = HORIZONTAL compression by $1/5$, equivalent to a vertical stretch by $25$ (factor of $5^2$). Wrong factor.\n* C: vertical SHIFT by $5$, not stretch.\n* D: changes the exponent — not a stretch.\n\n**Test Day Takeaway:** OUTSIDE multiplication = vertical stretch (intuitive direction). INSIDE multiplication = horizontal compression (counter-intuitive).",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertical-stretch', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-266', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'medium', type: 'fill-in',
    question: 'The graph of $y = f(x)$ in the $xy$-plane has a maximum value of $10$. What is the maximum value of $y = 4 f(x)$?',
    correctAnswer: '40',
    explanation: "**SAT Pattern: Vertical Stretch**\n\n**The correct answer is $40$.**\n\n**The Fast Way (~5s):** Vertical stretch by $4$: max $\\to 4 \\cdot 10 = 40$.\n\n**The Full Solution:**\nMultiplying $f$ by $4$ multiplies every $y$-value by $4$, including the max. So max $= 4 \\cdot 10 = 40$.\n\n**Test Day Takeaway:** Vertical stretch by $a > 0$ multiplies extrema's $y$-values by $a$. $x$-coordinates of extrema are unchanged.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertical-stretch', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-267', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The graph of $y = g(x)$ in the $xy$-plane passes through the point $(1, 6)$. Which of the following points must lie on the graph of $y = \\dfrac{1}{2} g(x)$?',
    choices: [{ id: 'A', text: '$(0.5, 6)$' }, { id: 'B', text: '$(1, 3)$' }, { id: 'C', text: '$(1, 12)$' }, { id: 'D', text: '$(2, 6)$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Vertical Stretch**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Compress vertically by $1/2$: $(1, 6) \\to (1, 3)$.\n\n**The Full Solution:**\n$\\dfrac{1}{2} g(x)$ halves every $y$-value: $(1, 6) \\to (1, 6/2) = (1, 3)$.\n\n**Why the wrong answers are tempting:**\n* A: halves $x$ — applies to wrong axis.\n* C: doubles $y$ instead of halving.\n* D: doubles $x$ — wrong.\n\n**Test Day Takeaway:** $a \\cdot g(x)$ scales $y$ only. $x$ stays.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertical-stretch', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-268', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Which of the following transformations produces the graph of $y = 0.5 f(x)$ from the graph of $y = f(x)$?',
    choices: [{ id: 'A', text: 'vertical stretch by a factor of $2$' }, { id: 'B', text: 'vertical compression by a factor of $\\dfrac{1}{2}$' }, { id: 'C', text: 'horizontal stretch by a factor of $2$' }, { id: 'D', text: 'reflection over the $x$-axis' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Vertical Stretch**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Multiplying by $0.5 < 1$ COMPRESSES vertically (toward the $x$-axis).\n\n**The Full Solution:**\nFor $a \\cdot f(x)$: $a > 1$ stretches; $0 < a < 1$ compresses. Here $a = 0.5$, so it's a compression by factor $1/2$.\n\n**Why the wrong answers are tempting:**\n* A: would require multiplying by $2$, not $0.5$.\n* C: horizontal scaling is INSIDE the function, not outside.\n* D: requires a NEGATIVE multiplier.\n\n**Test Day Takeaway:** 'Compression' and 'stretch' are opposite descriptions of the same idea. $a > 1 \\Rightarrow$ stretch by $a$. $a < 1 \\Rightarrow$ compress by $1/a$ (or equivalently, stretch by $a$). Choose the description the problem asks for.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertical-stretch', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-269', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'hard', type: 'multiple-choice',
    question: 'If $f(x) = x^2 - 4$ and $g(x) = 3 f(x)$, what is the minimum value of $g(x)$?',
    choices: [{ id: 'A', text: '$-12$' }, { id: 'B', text: '$-4$' }, { id: 'C', text: '$-1$' }, { id: 'D', text: '$0$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Vertical Stretch**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $f$ has min $-4$ at $x = 0$. $g(x) = 3 f(x)$ stretches vertically by $3$: new min $= 3 \\cdot (-4) = -12$.\n\n**The Full Solution:**\n$f(x) = x^2 - 4$ has minimum $f(0) = -4$. $g(x) = 3 f(x) = 3(x^2 - 4) = 3x^2 - 12$. Minimum at $x = 0$: $g(0) = -12$.\n\nVerification: $g'(x) = 6x = 0 \\Rightarrow x = 0$; $g(0) = -12$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* B: reports $f$'s min unchanged — forgets to stretch.\n* C: forgets the stretch entirely.\n* D: confuses with the $x$-axis crossings.\n\n**Test Day Takeaway:** Vertical stretch by $a > 0$ multiplies the MIN VALUE by $a$ too. Negative minima become MORE negative, not less.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertical-stretch', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-270', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'hard', type: 'fill-in',
    question: 'The function $h$ has an $x$-intercept at $x = 5$. The function $k$ is defined by $k(x) = 4 h(x)$. What is an $x$-intercept of $k$?',
    correctAnswer: '5',
    explanation: "**SAT Pattern: Vertical Stretch**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~5s):** Vertical stretch preserves $x$-intercepts: $4 \\cdot 0 = 0$, so where $h = 0$, $k = 0$ too.\n\n**The Full Solution:**\nAt $x = 5$, $h(5) = 0$. Then $k(5) = 4 \\cdot h(5) = 4 \\cdot 0 = 0$. So $k$ also has an $x$-intercept at $x = 5$.\n\n**Common Mistakes:**\n* Reporting $20$ — multiplies the $x$-value by $4$ instead of the $y$-value.\n* Reporting $1.25$ — divides the $x$-value by $4$.\n* Reporting $0$ — confuses $x$-intercept with $y$-intercept.\n\n**Test Day Takeaway:** Vertical scaling DOES NOT MOVE $x$-intercepts. Why? $a \\cdot 0 = 0$ for any $a$. The zeros of $f$ are the zeros of $a \\cdot f$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertical-stretch', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── COMPOUND INTEREST (bank-am-271..278) ────────────────────────────────
  // Formula: A = P(1 + r/n)^(nt). SAT typically uses annual compounding (n=1).
  // Distinct from generic exponential growth via the financial framing and
  // standard $A = P(1+r)^t$ form.
  { id: 'bank-am-271', domain: 'advanced-math', skills: ['exponential-functions'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A savings account opens with $\\$1{,}000$ and earns $5\\%$ annual interest, compounded annually. What is the balance, in dollars, after $1$ year?',
    choices: [{ id: 'A', text: '$\\$50$' }, { id: 'B', text: '$\\$1{,}005$' }, { id: 'C', text: '$\\$1{,}050$' }, { id: 'D', text: '$\\$5{,}000$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Compound Interest**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** $1000 \\cdot 1.05 = 1050$.\n\n**The Full Solution:**\nAfter one year, the balance is the principal plus the interest earned: $1000 + 1000(0.05) = 1000(1.05) = 1050$.\n\n**Why the wrong answers are tempting:**\n* A ($50$): reports the INTEREST earned, not the balance.\n* B ($1005$): treats $5\\%$ as $0.005$ instead of $0.05$.\n* D ($5000$): multiplies by $5$ instead of $1.05$.\n\n**Test Day Takeaway:** Balance after 1 year = principal × (1 + rate). The '1' keeps the original; the 'rate' adds the new interest.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'compound-interest', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-272', domain: 'advanced-math', skills: ['exponential-functions'], difficulty: 'easy', type: 'multiple-choice',
    question: 'An investment of $\\$2{,}000$ earns $4\\%$ annual interest, compounded annually. Which of the following functions gives the balance $B(t)$, in dollars, after $t$ years?',
    choices: [{ id: 'A', text: '$B(t) = 2000 + 0.04 t$' }, { id: 'B', text: '$B(t) = 2000(1.04)^t$' }, { id: 'C', text: '$B(t) = 2000(4)^t$' }, { id: 'D', text: '$B(t) = 2000 \\cdot 1.04 \\cdot t$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Compound Interest**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Compound interest: $A = P(1 + r)^t$. Here $P = 2000, r = 0.04$, so $B(t) = 2000(1.04)^t$.\n\n**The Full Solution:**\nCompound interest formula (annual compounding): $A = P(1 + r)^t$. Each year multiplies by the SAME factor $(1 + r)$, so the balance grows EXPONENTIALLY, not linearly.\n\n**Why the wrong answers are tempting:**\n* A: SIMPLE interest formula, not compound. Simple interest is linear.\n* C: uses $4$ instead of $1.04$ — the rate, not the multiplier.\n* D: treats compound as a single multiplication times $t$ — confuses with simple interest.\n\n**Test Day Takeaway:** Compound interest is EXPONENTIAL in time: $P(1 + r)^t$. The $1$ inside the parentheses is what keeps the principal; the $r$ adds new interest each period.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'compound-interest', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-273', domain: 'advanced-math', skills: ['exponential-functions'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A principal of $\\$500$ is invested at $6\\%$ annual interest, compounded annually. What is the balance, in dollars, after $3$ years? (Round to the nearest cent.)',
    choices: [{ id: 'A', text: '$\\$518$' }, { id: 'B', text: '$\\$540$' }, { id: 'C', text: '$\\$590$' }, { id: 'D', text: '$\\$595.51$' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Compound Interest**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** $500 \\cdot 1.06^3 = 500 \\cdot 1.191016 = 595.508$, rounded to $\\$595.51$.\n\n**The Full Solution:**\n$A = 500(1.06)^3$. Compute $1.06^3$: $1.06^2 = 1.1236$; $1.06^3 = 1.06 \\cdot 1.1236 = 1.191016$. Then $500 \\cdot 1.191016 = 595.508$.\n\n**Why the wrong answers are tempting:**\n* A ($518$): treats it as SIMPLE interest year-by-year incorrectly, or one year only.\n* B ($540$): uses simple interest: $500 + 500 \\cdot 0.06 \\cdot 3 = 540$.\n* C ($590$): rough estimate, low.\n\n**Test Day Takeaway:** Compound interest > Simple interest at the same rate (for $t > 1$). The growth COMPOUNDS each year on the new balance.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'compound-interest', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-274', domain: 'advanced-math', skills: ['exponential-functions'], difficulty: 'medium', type: 'fill-in',
    question: 'An account earns $8\\%$ annual interest, compounded annually. How much, in dollars, must be deposited today to have $\\$10{,}000$ after $2$ years? Round to the nearest dollar.',
    correctAnswer: '8573',
    explanation: "**SAT Pattern: Compound Interest**\n\n**The correct answer is $8573$.**\n\n**The Fast Way (~15s):** $P \\cdot 1.08^2 = 10000 \\Rightarrow P = 10000 / 1.1664 \\approx 8573.39$. Round to $8573$.\n\n**The Full Solution:**\nPresent value: $P = A / (1 + r)^t = 10000 / (1.08)^2 = 10000 / 1.1664 \\approx 8573.39$. Rounded: $\\$8573$.\n\nVerification: $8573 \\cdot 1.08^2 \\approx 8573 \\cdot 1.1664 \\approx 9999.99 \\approx 10000$ \\checkmark.\n\n**Common Mistakes:**\n* Reporting $9259$: divides by $1.08$ once ($10000/1.08$) — reverses one year only.\n* Reporting $9200$: subtracts $8\\%$ once $(10000 \\cdot 0.92)$ — wrong inverse.\n* Reporting $8000$: subtracts $20\\%$ ($10000 \\cdot 0.8$).\n\n**Test Day Takeaway:** Present-value problems: divide the future amount by $(1 + r)^t$, NOT by $(1 + rt)$ or by $r$ alone.",
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
    explanation: "**SAT Pattern: Compound Interest**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $1.03 = 1 + 0.03$ is the annual GROWTH FACTOR, i.e., $3\\%$ annual interest.\n\n**The Full Solution:**\nIn $A(t) = P(1 + r)^t$ form: $1.03 = (1 + 0.03)$ means $r = 0.03$, i.e., $3\\%$ annual interest. Each year the balance MULTIPLIES by $1.03$ — that's the meaning of the base.\n\n**Why the wrong answers are tempting:**\n* A: reports $1.03\\%$ — confuses the multiplier with the percent rate.\n* C: treats $1.03$ as an ADDITIVE constant in dollars, not a multiplier.\n* D: nothing to do with the $5{,}000$ principal.\n\n**Test Day Takeaway:** In $A = P(1 + r)^t$, the base is $1 + r$. To extract the percent rate: $r = $ base $- 1$, then multiply by $100$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'compound-interest', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-276', domain: 'advanced-math', skills: ['exponential-functions'], difficulty: 'medium', type: 'multiple-choice',
    question: 'An investment of $\\$1{,}500$ doubles after $10$ years at a constant annual compound interest rate. Which of the following is closest to the annual interest rate?',
    choices: [{ id: 'A', text: '$5\\%$' }, { id: 'B', text: '$7.2\\%$' }, { id: 'C', text: '$10\\%$' }, { id: 'D', text: '$20\\%$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Compound Interest**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $1500 \\cdot (1 + r)^{10} = 3000 \\Rightarrow (1 + r)^{10} = 2 \\Rightarrow 1 + r = 2^{1/10} \\approx 1.0718$. So $r \\approx 7.18\\%$, closest to $7.2\\%$.\n\n**The Full Solution:**\nSet up the equation: $1500(1 + r)^{10} = 3000$, simplify: $(1 + r)^{10} = 2$. Take the 10th root: $1 + r = 2^{0.1} \\approx 1.07177$. So $r \\approx 0.072 = 7.2\\%$.\n\nVerification: $1500 \\cdot (1.072)^{10} \\approx 1500 \\cdot 2.004 \\approx 3006 \\approx 3000$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* A ($5\\%$): pull-out from intuition ('around 5%') without computing.\n* C ($10\\%$): uses simple-interest doubling logic: $r \\cdot 10 = 100\\%$.\n* D ($20\\%$): too high.\n\n**Test Day Takeaway:** Rule of 72: time to double $\\approx 72/r$ (with $r$ as percent). $72/10 \\approx 7.2\\%$ matches doubling in $10$ years.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'compound-interest', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-277', domain: 'advanced-math', skills: ['exponential-functions'], difficulty: 'hard', type: 'multiple-choice',
    question: 'An investment grows by $5\\%$ per year, compounded annually. Approximately how many years does it take for the investment to double in value?',
    choices: [{ id: 'A', text: '$5$ years' }, { id: 'B', text: '$10$ years' }, { id: 'C', text: '$14.2$ years' }, { id: 'D', text: '$20$ years' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Compound Interest**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Rule of 72: time to double $\\approx 72/r = 72/5 = 14.4$ years, closest to $14.2$.\n\n**The Full Solution:**\nSet $1.05^t = 2$. Take logs: $t \\cdot \\ln(1.05) = \\ln 2 \\Rightarrow t = \\ln 2 / \\ln 1.05 \\approx 0.6931 / 0.04879 \\approx 14.21$ years.\n\n**Why the wrong answers are tempting:**\n* A: simple-interest doubling: $r \\cdot t = 100\\% \\Rightarrow t = 100/5 = 20$. But that's even longer than the simple version's wrong answer.\n* B ($10$): half of $20$, no derivation.\n* D ($20$): simple-interest doubling. Compound is always faster than simple.\n\n**Test Day Takeaway:** Rule of 72: $t_{\\text{double}} \\approx 72/r$ (with $r$ as percent). Gives a quick estimate without logs.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'compound-interest', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-278', domain: 'advanced-math', skills: ['exponential-functions'], difficulty: 'hard', type: 'fill-in',
    question: 'An investment of $\\$2{,}000$ grows to $\\$2{,}205$ after $2$ years at a constant compound interest rate $r$, expressed as a percent. What is the value of $r$?',
    correctAnswer: '5',
    explanation: "**SAT Pattern: Compound Interest**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~15s):** $2205/2000 = 1.1025 = (1 + r/100)^2 \\Rightarrow 1 + r/100 = 1.05 \\Rightarrow r = 5$.\n\n**The Full Solution:**\nSet up: $2000(1 + r/100)^2 = 2205$.\n$(1 + r/100)^2 = 2205/2000 = 1.1025$.\nTake square root: $1 + r/100 = \\sqrt{1.1025} = 1.05$.\n$r/100 = 0.05 \\Rightarrow r = 5$.\n\nVerification: $2000 \\cdot 1.05^2 = 2000 \\cdot 1.1025 = 2205$ \\checkmark.\n\n**Common Mistakes:**\n* Reporting $10$: uses $(1 + r/100)^2 = 1.1$ instead of $1.1025$ — drops the squared term.\n* Reporting $0.05$: forgets to multiply by $100$ to express as percent.\n* Reporting $5.13$: doesn't simplify $\\sqrt{1.1025}$ to exactly $1.05$.\n\n**Test Day Takeaway:** When the time period is $2$ years, take a SQUARE ROOT, not a log. Look for clean perfect squares like $1.1025 = 1.05^2$.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'compound-interest', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── RATIONAL EQUATION WITH EXTRANEOUS SOLUTION (bank-am-279..286) ───────
  // Solving a rational equation can produce candidates that fail the original
  // (denominator-zero). The pattern: solve, check, identify extraneous roots.
  { id: 'bank-am-279', domain: 'advanced-math', skills: ['rational-expressions'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What is the solution to the equation $\\dfrac{x^2 - 9}{x - 3} = 6$?',
    choices: [{ id: 'A', text: '$x = -3$' }, { id: 'B', text: '$x = 3$' }, { id: 'C', text: '$x = 6$' }, { id: 'D', text: 'No solution' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Rational Equation with Extraneous Solution**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Factor: $(x + 3)(x - 3)/(x - 3) = 6$. For $x \\ne 3$: $x + 3 = 6 \\Rightarrow x = 3$. But $x = 3$ is EXCLUDED (makes denominator $0$). No solution.\n\n**The Full Solution:**\nThe rational expression $\\dfrac{x^2 - 9}{x - 3}$ has a domain restriction: $x \\ne 3$. Factor numerator: $\\dfrac{(x + 3)(x - 3)}{x - 3} = x + 3$ for $x \\ne 3$. Set $x + 3 = 6$: $x = 3$. But $x = 3$ is the excluded value. Therefore no valid solution exists.\n\nVerification: at $x = 3$, the original expression is $\\dfrac{0}{0}$ — undefined.\n\n**Why the wrong answers are tempting:**\n* A ($-3$): makes the numerator zero, but the original is $0/(-6) = 0 \\ne 6$.\n* B ($3$): the EXTRANEOUS solution — algebra suggests this but the domain excludes it.\n* C ($6$): plugs in unrelated value.\n\n**Test Day Takeaway:** Always check that the solution doesn't make any denominator zero in the ORIGINAL equation. The simplified form may hide the restriction.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'rational-equation-with-extraneous-solution', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-280', domain: 'advanced-math', skills: ['rational-expressions'], difficulty: 'easy', type: 'multiple-choice',
    question: 'How many solutions does the equation $\\dfrac{x + 5}{x - 2} = \\dfrac{7}{x - 2}$ have?',
    choices: [{ id: 'A', text: '$0$' }, { id: 'B', text: '$1$' }, { id: 'C', text: '$2$' }, { id: 'D', text: 'infinitely many' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Rational Equation with Extraneous Solution**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Multiply both sides by $(x - 2)$: $x + 5 = 7 \\Rightarrow x = 2$. But $x = 2$ makes the denominator $0$ — EXTRANEOUS. Zero valid solutions.\n\n**The Full Solution:**\nDomain restriction: $x \\ne 2$. Multiplying both sides by $(x - 2)$: $x + 5 = 7$, so $x = 2$. This is the excluded value, so no valid solution.\n\n**Why the wrong answers are tempting:**\n* B ($1$): forgets to check the domain restriction.\n* C ($2$): confuses 'solutions' with 'the value $2$'.\n* D: not how this works — both sides simplified to a linear, not an identity.\n\n**Test Day Takeaway:** When the only algebraic root coincides with a domain restriction, the equation has zero solutions.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'rational-equation-with-extraneous-solution', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-281', domain: 'advanced-math', skills: ['rational-expressions'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What is the solution set of the equation $\\dfrac{1}{x - 3} + \\dfrac{2}{x + 3} = \\dfrac{6}{x^2 - 9}$?',
    choices: [{ id: 'A', text: '$\\{3\\}$' }, { id: 'B', text: '$\\{-3\\}$' }, { id: 'C', text: '$\\{3, -3\\}$' }, { id: 'D', text: 'No solution' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Rational Equation with Extraneous Solution**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Multiply by $x^2 - 9 = (x - 3)(x + 3)$: $(x + 3) + 2(x - 3) = 6 \\Rightarrow 3x - 3 = 6 \\Rightarrow x = 3$. But $x = 3$ makes $x - 3 = 0$ — EXTRANEOUS. No solution.\n\n**The Full Solution:**\nDomain restrictions: $x \\ne 3$ and $x \\ne -3$. Multiply through by $(x - 3)(x + 3) = x^2 - 9$:\n$\\quad (x + 3) + 2(x - 3) = 6$\n$\\quad x + 3 + 2x - 6 = 6$\n$\\quad 3x - 3 = 6$\n$\\quad 3x = 9$\n$\\quad x = 3$\nBut $x = 3$ is one of the excluded values. So no valid solution exists.\n\n**Why the wrong answers are tempting:**\n* A: reports the extraneous root.\n* B: makes one denominator zero but doesn't satisfy.\n* C: includes both excluded values.\n\n**Test Day Takeaway:** Always identify domain restrictions BEFORE solving. When the algebraic solution lands in the excluded set, the answer is 'no solution.'",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'rational-equation-with-extraneous-solution', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-282', domain: 'advanced-math', skills: ['rational-expressions'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Solve for $x$: $\\dfrac{x + 4}{x - 1} = \\dfrac{5}{x - 1}$',
    choices: [{ id: 'A', text: '$x = -1$' }, { id: 'B', text: '$x = 1$' }, { id: 'C', text: '$x = 5$' }, { id: 'D', text: 'No solution' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Rational Equation with Extraneous Solution**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Multiply by $(x - 1)$: $x + 4 = 5 \\Rightarrow x = 1$. But $x = 1$ makes denominator $0$ — extraneous. No solution.\n\n**The Full Solution:**\nDomain: $x \\ne 1$. From $x + 4 = 5$: $x = 1$. This is the excluded value, so no valid solution.\n\n**Why the wrong answers are tempting:**\n* A: sign mistake on $4$.\n* B: the extraneous algebraic solution.\n* C: copies the right-hand-side numerator.\n\n**Test Day Takeaway:** When both sides have the same denominator, you can equate the numerators — but the domain restriction still applies.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'rational-equation-with-extraneous-solution', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-283', domain: 'advanced-math', skills: ['rational-expressions'], difficulty: 'medium', type: 'fill-in',
    question: 'What is the value of $x$ that satisfies the equation $\\dfrac{x}{x - 4} + \\dfrac{4}{x - 4} = 3$, provided that $x$ is in the domain of the original expression?',
    correctAnswer: '8',
    explanation: "**SAT Pattern: Rational Equation with Extraneous Solution**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~10s):** Combine: $\\dfrac{x + 4}{x - 4} = 3 \\Rightarrow x + 4 = 3(x - 4) \\Rightarrow x + 4 = 3x - 12 \\Rightarrow 16 = 2x \\Rightarrow x = 8$.\n\n**The Full Solution:**\nDomain: $x \\ne 4$. Combine the fractions: $\\dfrac{x + 4}{x - 4} = 3$. Cross-multiply: $x + 4 = 3(x - 4)$, expand: $x + 4 = 3x - 12$, solve: $16 = 2x \\Rightarrow x = 8$. Since $8 \\ne 4$, this is a VALID solution.\n\nVerification: $\\dfrac{8 + 4}{8 - 4} = \\dfrac{12}{4} = 3$ \\checkmark.\n\n**Common Mistakes:**\n* Reporting $4$: extraneous — makes the denominator zero.\n* Reporting $-8$: sign error in cross-multiplication.\n\n**Test Day Takeaway:** Not every rational equation has an extraneous solution — but ALWAYS check the answer against the domain. Here $8 \\ne 4$, so the solution is valid.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'rational-equation-with-extraneous-solution', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-284', domain: 'advanced-math', skills: ['rational-expressions'], difficulty: 'medium', type: 'multiple-choice',
    question: 'For which value of $x$ is the equation $\\dfrac{2x}{x - 5} = \\dfrac{10}{x - 5}$ undefined?',
    choices: [{ id: 'A', text: '$x = 0$' }, { id: 'B', text: '$x = 2$' }, { id: 'C', text: '$x = 5$' }, { id: 'D', text: '$x = 10$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Rational Equation with Extraneous Solution**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** The denominator $(x - 5)$ is zero at $x = 5$.\n\n**The Full Solution:**\nA rational expression is undefined where the denominator equals zero. $x - 5 = 0 \\Rightarrow x = 5$. At $x = 5$, both fractions are undefined.\n\nNote: algebraically, $\\dfrac{2x}{x-5} = \\dfrac{10}{x-5}$ implies $2x = 10$, i.e., $x = 5$. So the only candidate algebraic solution is exactly the excluded value — meaning the equation has NO valid solution. The question asks specifically about where it's undefined.\n\n**Why the wrong answers are tempting:**\n* A ($0$): a value that makes the numerator zero (LHS), not the denominator.\n* B ($2$): unrelated value.\n* D ($10$): unrelated.\n\n**Test Day Takeaway:** 'Undefined' for a rational expression = denominator-zero values. The numerator can be zero without making the expression undefined.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'rational-equation-with-extraneous-solution', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-285', domain: 'advanced-math', skills: ['rational-expressions'], difficulty: 'hard', type: 'multiple-choice',
    question: 'What is the solution to the equation $\\dfrac{3}{x - 2} - \\dfrac{2}{x + 2} = \\dfrac{20}{x^2 - 4}$?',
    choices: [{ id: 'A', text: '$x = -2$' }, { id: 'B', text: '$x = 2$' }, { id: 'C', text: '$x = 10$' }, { id: 'D', text: 'No solution' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Rational Equation with Extraneous Solution**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Multiply by $(x - 2)(x + 2) = x^2 - 4$: $3(x + 2) - 2(x - 2) = 20 \\Rightarrow 3x + 6 - 2x + 4 = 20 \\Rightarrow x + 10 = 20 \\Rightarrow x = 10$. Check: $10 \\ne \\pm 2$, so valid.\n\n**The Full Solution:**\nDomain restrictions: $x \\ne 2$ and $x \\ne -2$ (both denominators must be nonzero, and $x^2 - 4 = (x-2)(x+2)$).\n\nMultiply both sides by $(x-2)(x+2)$:\n$\\quad 3(x + 2) - 2(x - 2) = 20$\n$\\quad 3x + 6 - 2x + 4 = 20$\n$\\quad x + 10 = 20$\n$\\quad x = 10$.\n\nSince $x = 10$ is not in the excluded set, it's a valid solution.\n\nVerification at $x = 10$: $\\dfrac{3}{8} - \\dfrac{2}{12} = \\dfrac{9}{24} - \\dfrac{4}{24} = \\dfrac{5}{24}$. And $\\dfrac{20}{100 - 4} = \\dfrac{20}{96} = \\dfrac{5}{24}$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* A ($-2$): one of the EXCLUDED values — would make a denominator zero.\n* B ($2$): the OTHER excluded value.\n* D ('No solution'): tempting because two domain restrictions appear in the stem, but the algebraic root $x = 10$ avoids both.\n\n**Test Day Takeaway:** After solving, ALWAYS check whether the candidate root is in the domain. Domain restrictions don't always invalidate the solution — only when the root coincides with an excluded value.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'rational-equation-with-extraneous-solution', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-286', domain: 'advanced-math', skills: ['rational-expressions'], difficulty: 'hard', type: 'fill-in',
    question: "Which value of $x$, if any, is an EXTRANEOUS solution to the equation $\\dfrac{x^2 - 25}{x - 5} = 10$? (Report the value of $x$; if none, report $0$.)",
    correctAnswer: '5',
    explanation: "**SAT Pattern: Rational Equation with Extraneous Solution**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~10s):** Factor: $\\dfrac{(x + 5)(x - 5)}{x - 5} = 10 \\Rightarrow x + 5 = 10 \\Rightarrow x = 5$. But $x = 5$ is excluded — EXTRANEOUS.\n\n**The Full Solution:**\nDomain: $x \\ne 5$. Algebra gives $x = 5$, which is excluded from the domain. So $x = 5$ is the extraneous solution — the only candidate generated by the algebra, but invalid.\n\n**Test Day Takeaway:** Extraneous solutions are EXACTLY the values produced by algebra that violate the original domain restriction. Always factor and cancel BEFORE forgetting the restriction.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'rational-equation-with-extraneous-solution', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── P.A. FACTOR BY GROUPING (bank-am-287..290) ──────────────────────────
  // Group terms to extract common factors; technique for factoring polynomials
  // that have no overall GCF.
  { id: 'bank-am-287', domain: 'advanced-math', skills: ['factoring'], difficulty: 'easy', type: 'multiple-choice',
    question: 'Which of the following is the factored form of $x^3 + 2x^2 + 3x + 6$?',
    choices: [{ id: 'A', text: '$(x + 2)(x^2 + 3)$' }, { id: 'B', text: '$(x + 3)(x^2 + 2)$' }, { id: 'C', text: '$x(x^2 + 2x + 3) + 6$' }, { id: 'D', text: '$(x + 1)(x^2 + 6)$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Factor by Grouping**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Group: $(x^3 + 2x^2) + (3x + 6) = x^2(x + 2) + 3(x + 2) = (x + 2)(x^2 + 3)$.\n\n**The Full Solution:**\nStep 1: Group terms in pairs: $(x^3 + 2x^2) + (3x + 6)$.\nStep 2: Factor each pair: $x^2(x + 2) + 3(x + 2)$.\nStep 3: Factor out the common binomial $(x + 2)$: $(x + 2)(x^2 + 3)$.\n\nVerification: $(x + 2)(x^2 + 3) = x^3 + 3x + 2x^2 + 6 = x^3 + 2x^2 + 3x + 6$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* B: wrong grouping.\n* C: incomplete factoring.\n* D: wrong factors.\n\n**Test Day Takeaway:** For 4-term polynomials, try factor-by-grouping: pair up, factor each pair, then extract the common binomial.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'factor-by-grouping', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-288', domain: 'advanced-math', skills: ['factoring'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Which expression is equivalent to $2x^3 - 3x^2 + 8x - 12$?',
    choices: [{ id: 'A', text: '$(x - 3)(2x^2 + 4)$' }, { id: 'B', text: '$(2x - 3)(x^2 + 4)$' }, { id: 'C', text: '$(x + 4)(2x^2 - 3)$' }, { id: 'D', text: '$(2x + 3)(x^2 - 4)$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Factor by Grouping**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Group: $(2x^3 - 3x^2) + (8x - 12) = x^2(2x - 3) + 4(2x - 3) = (2x - 3)(x^2 + 4)$.\n\nVerification: $(2x - 3)(x^2 + 4) = 2x^3 + 8x - 3x^2 - 12 = 2x^3 - 3x^2 + 8x - 12$ \\checkmark.\n\n**Test Day Takeaway:** When factoring out a common factor of $a$ from a pair, look for matching binomials in both pairs.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'factor-by-grouping', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-289', domain: 'advanced-math', skills: ['factoring'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Which is a factor of $x^3 - 5x^2 + 4x - 20$?',
    choices: [{ id: 'A', text: '$x + 5$' }, { id: 'B', text: '$x - 5$' }, { id: 'C', text: '$x + 4$' }, { id: 'D', text: '$x - 4$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Factor by Grouping**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Group: $(x^3 - 5x^2) + (4x - 20) = x^2(x - 5) + 4(x - 5) = (x - 5)(x^2 + 4)$. Factor: $x - 5$.\n\nVerification: $(x - 5)(x^2 + 4) = x^3 + 4x - 5x^2 - 20 = x^3 - 5x^2 + 4x - 20$ \\checkmark.\n\n**Test Day Takeaway:** Once factored, the binomial factor from grouping is a divisor (factor) of the original polynomial.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'factor-by-grouping', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-am-290', domain: 'advanced-math', skills: ['factoring'], difficulty: 'hard', type: 'multiple-choice',
    question: 'Which of the following is equivalent to $6x^3 + 9x^2 - 4x - 6$?',
    choices: [{ id: 'A', text: '$(3x - 2)(2x^2 + 3)$' }, { id: 'B', text: '$(2x + 3)(3x^2 - 2)$' }, { id: 'C', text: '$(3x + 2)(2x^2 - 3)$' }, { id: 'D', text: '$(2x - 3)(3x^2 + 2)$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Factor by Grouping**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Group: $(6x^3 + 9x^2) + (-4x - 6) = 3x^2(2x + 3) - 2(2x + 3) = (2x + 3)(3x^2 - 2)$.\n\nVerification: $(2x + 3)(3x^2 - 2) = 6x^3 - 4x + 9x^2 - 6 = 6x^3 + 9x^2 - 4x - 6$ \\checkmark.\n\n**Test Day Takeaway:** When the last pair is negative, factoring $-2$ (or $-1$) flips the binomial sign cleanly: $-4x - 6 = -2(2x + 3)$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'factor-by-grouping', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── P.A. COMPLETING THE SQUARE (bank-am-291..298) — new canonical ────────
  // Forward direction: ax² + bx + c → a(x − h)² + k. Distinct from
  // vertex-form-to-standard-form (reverse direction; we already have that).
  { id: 'bank-am-291', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'easy', type: 'multiple-choice',
    question: 'Which expression is equivalent to $x^2 + 6x + 5$ in vertex form?',
    choices: [{ id: 'A', text: '$(x + 3)^2 - 4$' }, { id: 'B', text: '$(x + 3)^2 + 4$' }, { id: 'C', text: '$(x + 6)^2 - 31$' }, { id: 'D', text: '$(x - 3)^2 - 4$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Completing the Square**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Take half of $6$, square it: $(6/2)^2 = 9$. Write $x^2 + 6x + 9 - 9 + 5 = (x + 3)^2 - 4$.\n\n**Why the wrong answers are tempting:**\n* B: wrong sign on the constant.\n* C: doesn't halve the coefficient.\n* D: wrong sign inside the binomial.\n\n**Test Day Takeaway:** Complete the square: $(b/2)^2$ goes inside the binomial, then SUBTRACT what you added so the value stays the same.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'completing-the-square', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-292', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'easy', type: 'multiple-choice',
    question: 'Which of the following is equivalent to $x^2 - 8x + 10$?',
    choices: [{ id: 'A', text: '$(x - 4)^2 + 26$' }, { id: 'B', text: '$(x - 4)^2 - 6$' }, { id: 'C', text: '$(x - 8)^2 - 54$' }, { id: 'D', text: '$(x + 4)^2 - 6$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Completing the Square**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $(-8/2)^2 = 16$. $x^2 - 8x + 16 - 16 + 10 = (x - 4)^2 - 6$.\n\n**Why the wrong answers are tempting:**\n* A: adds instead of subtracting.\n* C: doesn't halve $-8$.\n* D: wrong sign on the linear term.\n\n**Test Day Takeaway:** For $x^2 + bx$, the perfect square is $(x + b/2)^2$. Sign of $b$ carries through.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'completing-the-square', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-293', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'medium', type: 'fill-in',
    question: 'When $f(x) = x^2 + 12x - 4$ is written in the form $(x + a)^2 + b$, what is the value of $b$?',
    correctAnswer: '-40',
    explanation: "**SAT Pattern: Completing the Square**\n\n**The correct answer is $-40$.**\n\n**The Fast Way (~15s):** $(12/2)^2 = 36$. $x^2 + 12x + 36 - 36 - 4 = (x + 6)^2 - 40$. So $b = -40$.\n\n**Test Day Takeaway:** $b = c - (b_{linear}/2)^2$ when written as $(x + b_{linear}/2)^2 + b$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'completing-the-square', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-294', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Which expression is equivalent to $2x^2 - 12x + 5$?',
    choices: [{ id: 'A', text: '$2(x - 3)^2 - 13$' }, { id: 'B', text: '$2(x - 3)^2 + 5$' }, { id: 'C', text: '$(x - 6)^2 + 5$' }, { id: 'D', text: '$2(x - 6)^2 - 67$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Completing the Square**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Factor $2$ from $x$ terms: $2(x^2 - 6x) + 5$. Inside, $(-6/2)^2 = 9$: $2(x^2 - 6x + 9 - 9) + 5 = 2(x - 3)^2 - 18 + 5 = 2(x - 3)^2 - 13$.\n\n**Why the wrong answers are tempting:**\n* B: forgets to subtract $2 \\cdot 9$.\n* C: doesn't factor the $2$.\n* D: doesn't halve $-6$.\n\n**Test Day Takeaway:** When leading coefficient $\\neq 1$: factor $a$ from the $x$ terms FIRST, then complete the square. Account for $a$ when subtracting back.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'completing-the-square', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-295', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = x^2 - 10x + 21$. What is the minimum value of $f(x)$?',
    choices: [{ id: 'A', text: '$-25$' }, { id: 'B', text: '$-4$' }, { id: 'C', text: '$0$' }, { id: 'D', text: '$21$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Completing the Square**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Complete the square: $(x - 5)^2 - 25 + 21 = (x - 5)^2 - 4$. Minimum is the $k$ value: $-4$ (at $x = 5$).\n\n**Why the wrong answers are tempting:**\n* A: forgets to add $21$.\n* C: thinks min of any square is $0$.\n* D: reports $c$.\n\n**Test Day Takeaway:** Vertex form $f(x) = (x - h)^2 + k$ gives the min ($k$) at $x = h$ for parabolas opening UP.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'completing-the-square', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-296', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'hard', type: 'fill-in',
    question: 'The function $g(x) = -3x^2 + 12x - 7$ has its maximum value at $x = c$. What is the value of $c$?',
    correctAnswer: '2',
    explanation: "**SAT Pattern: Completing the Square**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~15s):** Factor $-3$ from $x$ terms: $-3(x^2 - 4x) - 7$. Complete: $-3(x^2 - 4x + 4 - 4) - 7 = -3(x - 2)^2 + 12 - 7 = -3(x - 2)^2 + 5$. Maximum at $x = 2$ (vertex).\n\n**Test Day Takeaway:** Negative leading coefficient ⇒ parabola opens DOWN ⇒ vertex is the MAX. Same completing-the-square procedure; just watch the sign when factoring.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'completing-the-square', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-297', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'hard', type: 'multiple-choice',
    question: 'When $4x^2 + 24x + 7$ is rewritten in the form $a(x + b)^2 + c$, what is the value of $a + b + c$?',
    choices: [{ id: 'A', text: '$-22$' }, { id: 'B', text: '$-15$' }, { id: 'C', text: '$-19$' }, { id: 'D', text: '$33$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Completing the Square**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Factor $4$ from $x$ terms: $4(x^2 + 6x) + 7$. Complete: $4(x^2 + 6x + 9 - 9) + 7 = 4(x + 3)^2 - 4(9) + 7 = 4(x + 3)^2 - 29$. So $a = 4$, $b = 3$, $c = -29$. Sum $= 4 + 3 + (-29) = -22$.\n\n**Why the wrong answers are tempting:**\n* B: forgets to multiply the constant by $a$ when subtracting back.\n* C: arithmetic slip in the constant.\n* D: forgets to subtract the completion constant.\n\n**Test Day Takeaway:** When $a \\neq 1$, the subtracted constant is $a \\cdot (b_{linear}/2)^2$, not just $(b_{linear}/2)^2$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'completing-the-square', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-298', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The graph of $y = x^2 + bx + c$ has its vertex at $(4, -7)$. What is the value of $b$?',
    choices: [{ id: 'A', text: '$-8$' }, { id: 'B', text: '$-4$' }, { id: 'C', text: '$4$' }, { id: 'D', text: '$8$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Completing the Square**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Vertex form is $(x - 4)^2 - 7$. Expand: $x^2 - 8x + 16 - 7 = x^2 - 8x + 9$. So $b = -8$.\n\n**Why the wrong answers are tempting:**\n* B: forgets to double the vertex $x$.\n* C: forgets the sign on $b$.\n* D: forgets sign.\n\n**Test Day Takeaway:** Vertex at $(h, k)$ ⇒ $b = -2h$ when $a = 1$ (since $(x - h)^2 = x^2 - 2hx + h^2$).",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'completing-the-square', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  // ─── P.B. POLYNOMIAL REMAINDER THEOREM (bank-am-299..306) — new canonical ─
  // p(a) = remainder when p(x) is divided by (x − a).
  { id: 'bank-am-299', domain: 'advanced-math', skills: ['polynomials'], difficulty: 'easy', type: 'multiple-choice',
    question: 'When the polynomial $p(x) = x^3 - 4x + 5$ is divided by $(x - 2)$, what is the remainder?',
    choices: [{ id: 'A', text: '$-5$' }, { id: 'B', text: '$0$' }, { id: 'C', text: '$5$' }, { id: 'D', text: '$13$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Polynomial Remainder Theorem**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** By the Remainder Theorem, the remainder is $p(2) = 8 - 8 + 5 = 5$.\n\n**Why the wrong answers are tempting:**\n* A: sign flip.\n* B: thinks it must be zero.\n* D: evaluates $p(-2)$ but adds incorrectly.\n\n**Test Day Takeaway:** Remainder of $p(x)$ divided by $(x - a)$ equals $p(a)$. No long division needed.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'polynomial-remainder-theorem', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-300', domain: 'advanced-math', skills: ['polynomials'], difficulty: 'easy', type: 'fill-in',
    question: 'What is the remainder when $f(x) = 2x^3 + x^2 - 7$ is divided by $(x - 1)$?',
    correctAnswer: '-4',
    explanation: "**SAT Pattern: Polynomial Remainder Theorem**\n\n**The correct answer is $-4$.**\n\n**The Fast Way (~10s):** $f(1) = 2 + 1 - 7 = -4$.\n\n**Test Day Takeaway:** Plug $a$ into $f(x)$; that's the remainder.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'polynomial-remainder-theorem', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-301', domain: 'advanced-math', skills: ['polynomials'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The polynomial $p(x) = x^3 + kx + 6$ has a remainder of $0$ when divided by $(x - 2)$. What is the value of $k$?',
    choices: [{ id: 'A', text: '$-7$' }, { id: 'B', text: '$-3$' }, { id: 'C', text: '$3$' }, { id: 'D', text: '$7$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Polynomial Remainder Theorem**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $p(2) = 0 \\Rightarrow 8 + 2k + 6 = 0 \\Rightarrow 2k = -14 \\Rightarrow k = -7$.\n\n**Why the wrong answers are tempting:**\n* B: forgets to add $6$.\n* C: sign flip.\n* D: arithmetic slip.\n\n**Test Day Takeaway:** Remainder $= 0$ means $(x - a)$ is a FACTOR. Set $p(a) = 0$ and solve for the unknown.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'polynomial-remainder-theorem', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-302', domain: 'advanced-math', skills: ['polynomials'], difficulty: 'medium', type: 'multiple-choice',
    question: 'When $p(x) = x^3 + ax^2 + bx + 10$ is divided by $(x + 1)$, the remainder is $20$. Which equation must $a$ and $b$ satisfy?',
    choices: [{ id: 'A', text: '$a + b = 9$' }, { id: 'B', text: '$a - b = 11$' }, { id: 'C', text: '$a + b = 11$' }, { id: 'D', text: '$-a + b = 11$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Polynomial Remainder Theorem**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Divisor $(x + 1)$ corresponds to plugging in $x = -1$. $p(-1) = -1 + a - b + 10 = a - b + 9 = 20 \\Rightarrow a - b = 11$.\n\n**Why the wrong answers are tempting:**\n* A: forgets the constant term ($+10$ vs $-1$).\n* C: confuses subtraction with addition of $b$.\n* D: sign flip on $a$.\n\n**Test Day Takeaway:** For divisor $(x + k)$, the Remainder Theorem value is $p(-k)$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'polynomial-remainder-theorem', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-303', domain: 'advanced-math', skills: ['polynomials'], difficulty: 'medium', type: 'fill-in',
    question: 'If $f(x) = x^4 - 3x^3 + 2x - 1$, what is the remainder when $f(x)$ is divided by $(x - 3)$?',
    correctAnswer: '5',
    explanation: "**SAT Pattern: Polynomial Remainder Theorem**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~15s):** $f(3) = 81 - 81 + 6 - 1 = 5$.\n\n**Test Day Takeaway:** Plug in $3$; arithmetic with higher powers — be careful.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'polynomial-remainder-theorem', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-304', domain: 'advanced-math', skills: ['polynomials'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A polynomial $p(x)$ leaves a remainder of $4$ when divided by $(x - 2)$ and a remainder of $-2$ when divided by $(x + 1)$. Which of the following is equal to $p(2) - p(-1)$?',
    choices: [{ id: 'A', text: '$-6$' }, { id: 'B', text: '$-2$' }, { id: 'C', text: '$2$' }, { id: 'D', text: '$6$' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Polynomial Remainder Theorem**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** $p(2) = 4$ and $p(-1) = -2$. Difference: $4 - (-2) = 6$.\n\n**Test Day Takeaway:** Two divisor conditions give two function values via Remainder Theorem.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'polynomial-remainder-theorem', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-305', domain: 'advanced-math', skills: ['polynomials'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The polynomial $p(x) = x^3 + ax^2 + bx - 12$ has $(x - 2)$ and $(x + 3)$ as factors. What is the value of $a$?',
    choices: [{ id: 'A', text: '$-3$' }, { id: 'B', text: '$-1$' }, { id: 'C', text: '$1$' }, { id: 'D', text: '$3$' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Polynomial Remainder Theorem**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** $p(2) = 0$: $8 + 4a + 2b - 12 = 0 \\Rightarrow 2a + b = 2$ (eq 1). $p(-3) = 0$: $-27 + 9a - 3b - 12 = 0 \\Rightarrow 3a - b = 13$ (eq 2). Add: $5a = 15 \\Rightarrow a = 3$.\n\n**Why the wrong answers are tempting:**\n* A: solves with sign error on $a$.\n* B: solves for $b$ instead of $a$.\n* C: arithmetic slip when combining equations.\n\n**Test Day Takeaway:** Two factors ⇒ two equations in $a$ and $b$. Add or subtract to eliminate one variable.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'polynomial-remainder-theorem', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-306', domain: 'advanced-math', skills: ['polynomials'], difficulty: 'hard', type: 'fill-in',
    question: 'The polynomial $f(x) = 2x^3 - 5x^2 + ax + 6$ has $(x - 3)$ as a factor. What is the value of $a$?',
    correctAnswer: '-5',
    explanation: "**SAT Pattern: Polynomial Remainder Theorem**\n\n**The correct answer is $-5$.**\n\n**The Fast Way (~20s):** $f(3) = 0 \\Rightarrow 2(27) - 5(9) + 3a + 6 = 0 \\Rightarrow 54 - 45 + 3a + 6 = 0 \\Rightarrow 15 + 3a = 0 \\Rightarrow a = -5$.\n\n**Test Day Takeaway:** $(x - r)$ is a factor $\\iff f(r) = 0$. Set up and solve.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'polynomial-remainder-theorem', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  // ─── P.B. QUADRATIC INEQUALITY FROM CONTEXT (bank-am-307..314) ─────────────
  // From a real-world story → set up ax² + bx + c ≷ 0 → solve.
  { id: 'bank-am-307', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The height of a ball thrown vertically upward is modeled by $h(t) = -16t^2 + 64t + 6$, where $h$ is in feet and $t$ is in seconds. For which values of $t$ is the ball more than $54$ feet above the ground?',
    choices: [{ id: 'A', text: '$t < 1$' }, { id: 'B', text: '$1 < t < 3$' }, { id: 'C', text: '$0 < t < 4$' }, { id: 'D', text: '$t > 3$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Quadratic Inequality from Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Set up $-16t^2 + 64t + 6 > 54 \\Rightarrow -16t^2 + 64t - 48 > 0 \\Rightarrow$ (divide by $-16$, flip): $t^2 - 4t + 3 < 0 \\Rightarrow (t - 1)(t - 3) < 0$. Solution: $1 < t < 3$.\n\n**Why the wrong answers are tempting:**\n* A, D: each one root only.\n* C: full time-in-air interval (not the $>54$ portion).\n\n**Test Day Takeaway:** Factor the quadratic, find roots — the inequality is negative BETWEEN the roots (when leading coefficient is positive after dividing).",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'quadratic-inequality-from-context', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-308', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A rectangular garden has length $(x + 4)$ meters and width $x$ meters. For which values of $x$ is the area of the garden more than $32$ square meters?',
    choices: [{ id: 'A', text: '$x > 4$' }, { id: 'B', text: '$x > 8$' }, { id: 'C', text: '$x < 4$' }, { id: 'D', text: '$-8 < x < 4$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Quadratic Inequality from Context**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Area $= x(x + 4) > 32 \\Rightarrow x^2 + 4x - 32 > 0 \\Rightarrow (x + 8)(x - 4) > 0$. Solution: $x < -8$ or $x > 4$. In context, $x > 0$, so $x > 4$.\n\n**Test Day Takeaway:** Real-world setting requires CONTEXT FILTERING — negative lengths excluded.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'quadratic-inequality-from-context', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-309', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'medium', type: 'fill-in',
    question: 'A projectile\'s height is given by $h(t) = -5t^2 + 30t + 10$, where $h$ is in meters and $t$ in seconds. What is the greatest integer value of $t$ for which $h(t) \\geq 50$?',
    correctAnswer: '4',
    explanation: "**SAT Pattern: Quadratic Inequality from Context**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~30s):** $-5t^2 + 30t + 10 \\geq 50 \\Rightarrow -5t^2 + 30t - 40 \\geq 0 \\Rightarrow t^2 - 6t + 8 \\leq 0 \\Rightarrow (t - 2)(t - 4) \\leq 0 \\Rightarrow 2 \\leq t \\leq 4$. Greatest integer: $4$.\n\n**Test Day Takeaway:** Strict inequalities exclude endpoints; weak inequalities ($\\leq$) include them.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'quadratic-inequality-from-context', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-310', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The profit, in dollars, from selling $x$ items is $P(x) = -x^2 + 50x - 400$. For which values of $x$ is the profit positive?',
    choices: [{ id: 'A', text: '$x < 10$' }, { id: 'B', text: '$10 < x < 40$' }, { id: 'C', text: '$x > 40$' }, { id: 'D', text: '$0 < x < 50$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Quadratic Inequality from Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $-x^2 + 50x - 400 > 0 \\Rightarrow x^2 - 50x + 400 < 0 \\Rightarrow (x - 10)(x - 40) < 0 \\Rightarrow 10 < x < 40$.\n\n**Test Day Takeaway:** Downward parabola positive BETWEEN its roots (after flipping sign on the inequality).",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'quadratic-inequality-from-context', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-311', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A landscaper plans a rectangular plot where the length is $5$ meters more than twice the width. For what widths $w$ (in meters) is the area at least $50$ square meters?',
    choices: [{ id: 'A', text: '$w \\geq 2.5$' }, { id: 'B', text: '$w \\geq 5$' }, { id: 'C', text: '$w \\geq 10$' }, { id: 'D', text: '$w \\leq 5$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Quadratic Inequality from Context**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Area $= w(2w + 5) \\geq 50 \\Rightarrow 2w^2 + 5w - 50 \\geq 0$. Factor: $(2w - 5)(w + 10) \\geq 0 \\Rightarrow w \\leq -10$ or $w \\geq 5/2$. Context requires $w > 0$, so $w \\geq 2.5$.\n\n**Why the wrong answers are tempting:**\n* B: uses $w = 5$ as if it's the root (forgets the leading coefficient).\n* C: arithmetic slip.\n* D: flips the inequality direction.\n\n**Test Day Takeaway:** Upward parabola is positive OUTSIDE the roots; downward parabola is positive BETWEEN them. Filter by context (width > 0).",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'quadratic-inequality-from-context', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-312', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A ball is dropped from a building. Its height, in meters, $t$ seconds after release is $h(t) = 80 - 5t^2$. For what value of $t$ does the ball first reach the ground?',
    choices: [{ id: 'A', text: '$2$' }, { id: 'B', text: '$4$' }, { id: 'C', text: '$8$' }, { id: 'D', text: '$16$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Quadratic Inequality from Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Ground means $h(t) = 0$: $80 - 5t^2 = 0 \\Rightarrow t^2 = 16 \\Rightarrow t = 4$ (positive root, since time is non-negative).\n\n**Test Day Takeaway:** \"First reaches\" or \"strikes the ground\" $\\Rightarrow$ solve $h(t) = 0$ and take the POSITIVE root.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'quadratic-inequality-from-context', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-313', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A company\'s daily revenue is modeled by $R(p) = -2p^2 + 80p$, where $p$ is the price per item in dollars. What is the range of prices for which revenue exceeds $\\$600$?',
    choices: [{ id: 'A', text: '$p < 10$' }, { id: 'B', text: '$10 < p < 30$' }, { id: 'C', text: '$p > 30$' }, { id: 'D', text: '$0 < p < 40$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Quadratic Inequality from Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $-2p^2 + 80p > 600 \\Rightarrow -2p^2 + 80p - 600 > 0 \\Rightarrow p^2 - 40p + 300 < 0 \\Rightarrow (p - 10)(p - 30) < 0 \\Rightarrow 10 < p < 30$.\n\n**Test Day Takeaway:** Real revenue problems: factor and recognize the BETWEEN-roots region for a downward parabola.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'quadratic-inequality-from-context', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-314', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'medium', type: 'fill-in',
    question: 'A rectangle has width $x$ and length $(x + 6)$. For what integer values of $x$ is the area between $40$ and $112$ square units, inclusive?',
    correctAnswer: '5',
    explanation: "**SAT Pattern: Quadratic Inequality from Context**\n\n**The correct answer is $5$, $6$, $7$, or $8$ (any integer in the range works; one is required).**\n\n**The Fast Way (~30s):** $40 \\leq x(x + 6) \\leq 112$. Lower: $x^2 + 6x - 40 \\geq 0 \\Rightarrow (x + 10)(x - 4) \\geq 0 \\Rightarrow x \\geq 4$ (in context). Upper: $x^2 + 6x - 112 \\leq 0 \\Rightarrow (x + 14)(x - 8) \\leq 0 \\Rightarrow x \\leq 8$. So $4 \\leq x \\leq 8$. Integers: $4, 5, 6, 7, 8$. Any one acceptable; intended answer $5$.\n\n**Test Day Takeaway:** Compound inequalities: solve each side, intersect the solution sets.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'quadratic-inequality-from-context', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  // ─── P.B. RADICAL EQUATION (bank-am-315..322) — sqrt(...) = x ──────────────
  // Isolate the radical, square, check for extraneous solutions.
  { id: 'bank-am-315', domain: 'advanced-math', skills: ['radical-equations'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What value of $x$ satisfies the equation $\\sqrt{x + 5} = 4$?',
    choices: [{ id: 'A', text: '$-1$' }, { id: 'B', text: '$1$' }, { id: 'C', text: '$11$' }, { id: 'D', text: '$21$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Radical Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Square both sides: $x + 5 = 16 \\Rightarrow x = 11$. Check: $\\sqrt{16} = 4$ ✓.\n\n**Why the wrong answers are tempting:**\n* A: $4 - 5$ (subtracts before squaring).\n* B: random small value.\n* D: squares the RHS but adds rather than subtracts $5$.\n\n**Test Day Takeaway:** Isolate the radical, then SQUARE both sides. Always verify the answer in the original (squaring can introduce extraneous solutions).",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'radical-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-316', domain: 'advanced-math', skills: ['radical-equations'], difficulty: 'easy', type: 'fill-in',
    question: 'What is the solution to $\\sqrt{2x - 3} = 5$?',
    correctAnswer: '14',
    explanation: "**SAT Pattern: Radical Equation**\n\n**The correct answer is $14$.**\n\n**The Fast Way (~10s):** Square: $2x - 3 = 25 \\Rightarrow 2x = 28 \\Rightarrow x = 14$. Check: $\\sqrt{25} = 5$ ✓.\n\n**Test Day Takeaway:** Square first, then solve the resulting linear equation.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'radical-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-317', domain: 'advanced-math', skills: ['radical-equations'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Which value(s) of $x$ satisfy the equation $\\sqrt{x + 7} = x + 1$?',
    choices: [{ id: 'A', text: '$-3$ only' }, { id: 'B', text: '$2$ only' }, { id: 'C', text: '$-3$ and $2$' }, { id: 'D', text: 'No solution' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Radical Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Square both sides: $x + 7 = (x + 1)^2 = x^2 + 2x + 1 \\Rightarrow x^2 + x - 6 = 0 \\Rightarrow (x + 3)(x - 2) = 0 \\Rightarrow x = -3$ or $x = 2$. Check each in original: $x = -3$ gives $\\sqrt{4} = -2$? No — $\\sqrt{4} = 2 \\neq -2$. Extraneous. $x = 2$ gives $\\sqrt{9} = 3 = 2 + 1$ ✓. Only $x = 2$.\n\n**Test Day Takeaway:** Always CHECK both candidate solutions in the original equation. Square root returns the principal (non-negative) value; if the RHS becomes negative, it's extraneous.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'radical-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-318', domain: 'advanced-math', skills: ['radical-equations'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What is the solution to $\\sqrt{3x - 5} - 2 = 5$?',
    choices: [{ id: 'A', text: '$3$' }, { id: 'B', text: '$10$' }, { id: 'C', text: '$18$' }, { id: 'D', text: '$28$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Radical Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Isolate: $\\sqrt{3x - 5} = 7$. Square: $3x - 5 = 49 \\Rightarrow 3x = 54 \\Rightarrow x = 18$.\n\n**Why the wrong answers are tempting:**\n* A: squares before isolating.\n* B: $5 + 5$ (forgets the radical).\n* D: doesn't divide by $3$.\n\n**Test Day Takeaway:** ISOLATE the radical FIRST. Only after the radical stands alone do you square.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'radical-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-319', domain: 'advanced-math', skills: ['radical-equations'], difficulty: 'medium', type: 'fill-in',
    question: 'If $\\sqrt{x} + 3 = 8$, what is the value of $x$?',
    correctAnswer: '25',
    explanation: "**SAT Pattern: Radical Equation**\n\n**The correct answer is $25$.**\n\n**The Fast Way (~10s):** $\\sqrt{x} = 5 \\Rightarrow x = 25$.\n\n**Test Day Takeaway:** Isolate the radical first.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'radical-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-320', domain: 'advanced-math', skills: ['radical-equations'], difficulty: 'hard', type: 'multiple-choice',
    question: 'Which value(s) of $x$ satisfy $\\sqrt{2x + 5} = x + 1$?',
    choices: [{ id: 'A', text: '$-2$ only' }, { id: 'B', text: '$2$ only' }, { id: 'C', text: '$-2$ and $2$' }, { id: 'D', text: 'No solution' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Radical Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Square both sides: $2x + 5 = (x + 1)^2 = x^2 + 2x + 1 \\Rightarrow x^2 - 4 = 0 \\Rightarrow x = \\pm 2$. Check $x = 2$: $\\sqrt{9} = 3 = 2 + 1$ ✓. Check $x = -2$: $\\sqrt{1} = 1$ vs $-2 + 1 = -1$ ✗ (extraneous). Only $x = 2$.\n\n**Test Day Takeaway:** Squaring can introduce extraneous roots. Always verify each candidate in the ORIGINAL equation; the RHS must equal the principal (non-negative) square root.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'radical-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-321', domain: 'advanced-math', skills: ['radical-equations'], difficulty: 'hard', type: 'multiple-choice',
    question: 'What is the solution to $\\sqrt{x + 6} + x = 6$?',
    choices: [{ id: 'A', text: '$3$' }, { id: 'B', text: '$5$' }, { id: 'C', text: '$10$' }, { id: 'D', text: 'No solution' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Radical Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Isolate radical: $\\sqrt{x + 6} = 6 - x$. Square: $x + 6 = x^2 - 12x + 36 \\Rightarrow x^2 - 13x + 30 = 0 \\Rightarrow (x - 3)(x - 10) = 0 \\Rightarrow x = 3$ or $x = 10$. Check: $x = 3$: $\\sqrt{9} + 3 = 6$ ✓. $x = 10$: $\\sqrt{16} + 10 = 14 \\neq 6$, extraneous.\n\n**Test Day Takeaway:** Always check both candidates; the larger root often becomes extraneous when squaring.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'radical-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-322', domain: 'advanced-math', skills: ['radical-equations'], difficulty: 'medium', type: 'multiple-choice',
    question: 'If $\\sqrt{x - 3} = 2\\sqrt{x - 9}$, what is the value of $x$?',
    choices: [{ id: 'A', text: '$10$' }, { id: 'B', text: '$11$' }, { id: 'C', text: '$12$' }, { id: 'D', text: '$15$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Radical Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Square both sides: $x - 3 = 4(x - 9) \\Rightarrow x - 3 = 4x - 36 \\Rightarrow 33 = 3x \\Rightarrow x = 11$. Check: $\\sqrt{8} = 2\\sqrt{2}$ vs $2\\sqrt{2}$ ✓.\n\n**Test Day Takeaway:** Two radicals: square both sides ONCE; the coefficient on the right squares to $4$. Verify domain (both expressions under radicals must be $\\geq 0$).",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'radical-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  // ─── P.B. EXPONENTIAL EQ WITH COMMON BASE (bank-am-323..330) ──────────────
  // Rewrite both sides as same base, set exponents equal.
  { id: 'bank-am-323', domain: 'advanced-math', skills: ['exponential-functions'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What value of $x$ satisfies $2^x = 32$?',
    choices: [{ id: 'A', text: '$3$' }, { id: 'B', text: '$4$' }, { id: 'C', text: '$5$' }, { id: 'D', text: '$16$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** $32 = 2^5$, so $x = 5$.\n\n**Why the wrong answers are tempting:**\n* A, B: lower powers of $2$.\n* D: $32/2$.\n\n**Test Day Takeaway:** Rewrite RHS as a power of the LHS base; equate exponents.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-equation-with-common-base', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-324', domain: 'advanced-math', skills: ['exponential-functions'], difficulty: 'easy', type: 'fill-in',
    question: 'If $3^x = 81$, what is the value of $x$?',
    correctAnswer: '4',
    explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~5s):** $81 = 3^4$, so $x = 4$.\n\n**Test Day Takeaway:** Match the base, then equate exponents.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-equation-with-common-base', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-325', domain: 'advanced-math', skills: ['exponential-functions'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What value of $x$ satisfies $2^{3x} = 64$?',
    choices: [{ id: 'A', text: '$2$' }, { id: 'B', text: '$6$' }, { id: 'C', text: '$8$' }, { id: 'D', text: '$18$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $64 = 2^6$, so $3x = 6 \\Rightarrow x = 2$.\n\n**Why the wrong answers are tempting:**\n* B: reads exponent as $x$ rather than $3x$.\n* C: $2 \\cdot 4$.\n* D: doesn't divide by $3$.\n\n**Test Day Takeaway:** Equate the EXPONENT EXPRESSIONS, not just the values: $3x = 6$ ⇒ $x = 2$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-equation-with-common-base', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-326', domain: 'advanced-math', skills: ['exponential-functions'], difficulty: 'medium', type: 'multiple-choice',
    question: 'If $5^{x + 2} = 125$, what is the value of $x$?',
    choices: [{ id: 'A', text: '$1$' }, { id: 'B', text: '$3$' }, { id: 'C', text: '$5$' }, { id: 'D', text: '$25$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $125 = 5^3$, so $x + 2 = 3 \\Rightarrow x = 1$.\n\n**Test Day Takeaway:** Solve the exponent equation as if it were a regular linear equation.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-equation-with-common-base', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-327', domain: 'advanced-math', skills: ['exponential-functions'], difficulty: 'medium', type: 'fill-in',
    question: 'If $9^x = 27$, what is the value of $x$?',
    correctAnswer: '1.5',
    explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**The correct answer is $1.5$ (or $3/2$).**\n\n**The Fast Way (~15s):** $9 = 3^2$, $27 = 3^3$. Rewrite: $(3^2)^x = 3^3 \\Rightarrow 3^{2x} = 3^3 \\Rightarrow 2x = 3 \\Rightarrow x = 3/2$.\n\n**Test Day Takeaway:** Find a COMMON underlying base (here $3$). Rewrite both sides as powers of that base.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-equation-with-common-base', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-328', domain: 'advanced-math', skills: ['exponential-functions'], difficulty: 'hard', type: 'multiple-choice',
    question: 'What is the solution to $4^{x + 1} = 8^{x - 2}$?',
    choices: [{ id: 'A', text: '$2$' }, { id: 'B', text: '$4$' }, { id: 'C', text: '$8$' }, { id: 'D', text: '$10$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Common base $2$: $4 = 2^2$, $8 = 2^3$. LHS $= 2^{2(x+1)} = 2^{2x + 2}$. RHS $= 2^{3(x-2)} = 2^{3x - 6}$. Equate exponents: $2x + 2 = 3x - 6 \\Rightarrow x = 8$.\n\n**Why the wrong answers are tempting:**\n* A: sign error in algebra.\n* B: drops one term.\n* D: small arithmetic slip.\n\n**Test Day Takeaway:** Different bases: find a common UNDERLYING base, then distribute exponents.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-equation-with-common-base', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-329', domain: 'advanced-math', skills: ['exponential-functions'], difficulty: 'hard', type: 'multiple-choice',
    question: 'If $2^{x^2 - 4} = 1$, which of the following is a possible value of $x$?',
    choices: [{ id: 'A', text: '$0$' }, { id: 'B', text: '$1$' }, { id: 'C', text: '$2$' }, { id: 'D', text: '$4$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $1 = 2^0$, so $x^2 - 4 = 0 \\Rightarrow x = \\pm 2$. Only $2$ is in the choices.\n\n**Test Day Takeaway:** Any nonzero base to the $0$ power equals $1$. Equate the exponent to $0$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-equation-with-common-base', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-330', domain: 'advanced-math', skills: ['exponential-functions'], difficulty: 'medium', type: 'multiple-choice',
    question: 'If $\\left(\\dfrac{1}{2}\\right)^x = 8$, what is the value of $x$?',
    choices: [{ id: 'A', text: '$-3$' }, { id: 'B', text: '$-1/3$' }, { id: 'C', text: '$1/3$' }, { id: 'D', text: '$3$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $1/2 = 2^{-1}$, $8 = 2^3$. $(2^{-1})^x = 2^3 \\Rightarrow 2^{-x} = 2^3 \\Rightarrow -x = 3 \\Rightarrow x = -3$.\n\n**Test Day Takeaway:** Reciprocal bases convert to negative exponents.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-equation-with-common-base', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  // ─── P.B. DISTANCE BETWEEN X-INTERCEPTS (bank-am-331..338) ─────────────────
  // |root_a − root_b| for a parabola. Often via Vieta's: |a − b| = √((a+b)² − 4ab).
  { id: 'bank-am-331', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The graph of $y = x^2 - 5x + 6$ crosses the $x$-axis at two points. What is the distance between these two $x$-intercepts?',
    choices: [{ id: 'A', text: '$1$' }, { id: 'B', text: '$2$' }, { id: 'C', text: '$5$' }, { id: 'D', text: '$6$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Factor: $(x - 2)(x - 3) = 0 \\Rightarrow x = 2, 3$. Distance $= |3 - 2| = 1$.\n\n**Why the wrong answers are tempting:**\n* B: copies the smaller root.\n* C: sum of roots ($-b/a$).\n* D: product of roots ($c/a$).\n\n**Test Day Takeaway:** Factor or use formula to find roots; distance is the ABSOLUTE DIFFERENCE.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'distance-between-x-intercepts', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-332', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'easy', type: 'fill-in',
    question: 'The function $f(x) = x^2 - 9$ has two $x$-intercepts. What is the distance between them?',
    correctAnswer: '6',
    explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~5s):** $x^2 = 9 \\Rightarrow x = \\pm 3$. Distance $= 3 - (-3) = 6$.\n\n**Test Day Takeaway:** Difference of squares: roots are $\\pm\\sqrt{c}$, distance is $2\\sqrt{c}$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'distance-between-x-intercepts', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-333', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The parabola $y = x^2 - 6x + 5$ intersects the $x$-axis at points $P$ and $Q$. What is the length of segment $PQ$?',
    choices: [{ id: 'A', text: '$1$' }, { id: 'B', text: '$4$' }, { id: 'C', text: '$5$' }, { id: 'D', text: '$6$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Factor: $(x - 1)(x - 5) = 0 \\Rightarrow x = 1, 5$. $|PQ| = 4$.\n\n**Test Day Takeaway:** Visualize: the parabola crosses $x$-axis at two points. PQ = distance between those $x$-values.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'distance-between-x-intercepts', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-334', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The function $g(x) = 2x^2 + 4x - 6$ has two $x$-intercepts. What is the distance between them?',
    choices: [{ id: 'A', text: '$2$' }, { id: 'B', text: '$4$' }, { id: 'C', text: '$6$' }, { id: 'D', text: '$8$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Divide by $2$: $x^2 + 2x - 3 = 0 \\Rightarrow (x + 3)(x - 1) = 0 \\Rightarrow x = -3, 1$. Distance $= 4$.\n\n**Test Day Takeaway:** Dividing by the leading coefficient doesn't change the roots — only simplifies the algebra.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'distance-between-x-intercepts', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-335', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'medium', type: 'fill-in',
    question: 'The parabola defined by $y = -(x + 2)(x - 8)$ crosses the $x$-axis at two points. What is the distance between them?',
    correctAnswer: '10',
    explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~5s):** Roots from factored form: $x = -2, 8$. Distance $= |8 - (-2)| = 10$.\n\n**Test Day Takeaway:** Factored form ⇒ roots are immediate; subtract.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'distance-between-x-intercepts', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-336', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The graph of $y = x^2 - 4x + k$ intersects the $x$-axis at two points $A$ and $B$. If $|AB| = 6$, what is the value of $k$?',
    choices: [{ id: 'A', text: '$-5$' }, { id: 'B', text: '$-3$' }, { id: 'C', text: '$1$' }, { id: 'D', text: '$3$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Roots are $a, b$ with $a + b = 4$ and $ab = k$. Distance $= |a - b| = \\sqrt{(a+b)^2 - 4ab} = \\sqrt{16 - 4k} = 6 \\Rightarrow 16 - 4k = 36 \\Rightarrow k = -5$.\n\n**Test Day Takeaway:** $(a - b)^2 = (a + b)^2 - 4ab$ — a Vieta's-style identity for the distance squared.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'distance-between-x-intercepts', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-337', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A parabola has vertex at $(3, -8)$ and passes through the origin. What is the distance between its two $x$-intercepts?',
    choices: [{ id: 'A', text: '$3$' }, { id: 'B', text: '$4\\sqrt{3}$' }, { id: 'C', text: '$6$' }, { id: 'D', text: '$8$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Vertex at $x = 3$ means the parabola is symmetric about $x = 3$. One root is at $x = 0$ (origin). By symmetry, the other root is at $x = 6$. Distance $= 6$.\n\n**Test Day Takeaway:** Axis of symmetry is the MIDPOINT of the two roots. If you know one root and the axis, the other root is the reflection.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'distance-between-x-intercepts', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-am-338', domain: 'advanced-math', skills: ['quadratics'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A parabola is symmetric about the line $x = 4$ and has one $x$-intercept at $x = 1$. What is the location of its other $x$-intercept?',
    choices: [{ id: 'A', text: '$x = -1$' }, { id: 'B', text: '$x = 3$' }, { id: 'C', text: '$x = 5$' }, { id: 'D', text: '$x = 7$' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Distance from root to axis: $|4 - 1| = 3$. Other root is $3$ units past the axis on the other side: $4 + 3 = 7$.\n\n**Test Day Takeaway:** Roots are reflections of each other across the axis of symmetry. Equidistant.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'distance-between-x-intercepts', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  // === TIER 0 BANK GROWTH (2026-05-21): common-base-exponent-simplification 3 → 5 items ===

  { id: 'bank-am-339', domain: 'advanced-math', skills: ['exponent-laws'], difficulty: 'easy', type: 'multiple-choice',
    question: 'Which expression is equivalent to $\\dfrac{12 x^6 y^4}{3 x^2 y}$ for $x \\neq 0$ and $y \\neq 0$?',
    choices: [{ id: 'A', text: '$4 x^4 y^3$' }, { id: 'B', text: '$4 x^3 y^4$' }, { id: 'C', text: '$9 x^4 y^3$' }, { id: 'D', text: '$4 x^8 y^5$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Common-Base Exponent Simplification**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $12/3 = 4$; $x^6/x^2 = x^{6-2} = x^4$; $y^4/y^1 = y^{4-1} = y^3$. Combined: $4 x^4 y^3$.\n\n**The Full Solution:**\nDivide the coefficients: $12/3 = 4$.\nApply the quotient rule to each variable: $x^{6-2} = x^4$, $y^{4-1} = y^3$.\nResult: $4 x^4 y^3$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* B ($4 x^3 y^4$): swaps the exponents — incorrectly assigns $x^3$ and $y^4$.\n* C ($9 x^4 y^3$): subtracts coefficients ($12 - 3$) instead of dividing.\n* D ($4 x^8 y^5$): ADDS exponents instead of subtracting (mixing up product/quotient rules).\n\n**Test Day Takeaway:** When DIVIDING same-base powers, SUBTRACT exponents. When multiplying, ADD. Coefficients are divided/multiplied normally (not exponentiated).',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'common-base-exponent-simplification', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-340', domain: 'advanced-math', skills: ['exponent-laws'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Which expression is equivalent to $\\dfrac{(2 x^3)^2 \\cdot 5 x^4}{4 x^5}$ for $x \\neq 0$?',
    choices: [{ id: 'A', text: '$5 x^5$' }, { id: 'B', text: '$\\dfrac{5 x^5}{2}$' }, { id: 'C', text: '$5 x^7$' }, { id: 'D', text: '$10 x^5$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Common-Base Exponent Simplification**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Expand $(2 x^3)^2 = 4 x^6$. Numerator: $4 x^6 \\cdot 5 x^4 = 20 x^{10}$. Divide: $20 x^{10} / (4 x^5) = 5 x^5$.\n\n**The Full Solution:**\nStep 1: distribute the power. $(2 x^3)^2 = 2^2 \\cdot x^{3 \\cdot 2} = 4 x^6$.\nStep 2: multiply in the numerator. $4 x^6 \\cdot 5 x^4 = 20 x^{6+4} = 20 x^{10}$.\nStep 3: divide. $20/4 = 5$ and $x^{10}/x^5 = x^5$. Result: $5 x^5$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* B ($5x^5/2$): keeps the original $4$ in the denominator without canceling against the $20$.\n* C ($5x^7$): adds exponents when dividing (should subtract).\n* D ($10x^5$): drops the squaring on the coefficient — uses $2$ instead of $4$ for $(2x^3)^2$.\n\n**Test Day Takeaway:** Distribute the exponent over EVERY factor inside parentheses (coefficient AND variable). Then apply product rule (add exponents) for multiplication and quotient rule (subtract exponents) for division.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'common-base-exponent-simplification', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // === TIER 1 BANK GROWTH (2026-05-21): advanced math patterns @ 4 items → @ 10 items ===

  // --- build-exponential-model (4 → 10) ---
  { id: 'bank-am-341', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A colony of bacteria doubles in size every hour. If the initial population is $50$ bacteria, which function $P$ gives the population $t$ hours later?',
    choices: [{ id: 'A', text: '$P(t) = 50 \\cdot 2^t$' }, { id: 'B', text: '$P(t) = 50 + 2t$' }, { id: 'C', text: '$P(t) = 50t \\cdot 2$' }, { id: 'D', text: '$P(t) = 2 \\cdot 50^t$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Build Exponential Model**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Initial value $\\times$ (growth factor)$^t$. Doubling means $b = 2$, so $P = 50 \\cdot 2^t$.\n\n**Why the wrong answers are tempting:**\n* B: linear model (constant addition), not exponential.\n* C: linear with a factor of $2$.\n* D: swaps base and initial value.\n\n**Test Day Takeaway:** "Doubles" → $b = 2$. Initial population is the COEFFICIENT, not the base.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'build-exponential-model', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-342', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'easy', type: 'multiple-choice',
    question: 'An investment of $\\$1{,}000$ grows by $5\\%$ each year. Which function $B$ gives the balance, in dollars, after $t$ years?',
    choices: [{ id: 'A', text: '$B(t) = 1000 \\cdot (1.05)^t$' }, { id: 'B', text: '$B(t) = 1000 + 0.05t$' }, { id: 'C', text: '$B(t) = 1000 \\cdot (0.05)^t$' }, { id: 'D', text: '$B(t) = 1000 \\cdot (1.5)^t$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Build Exponential Model**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Growth: $b = 1 + r = 1.05$. $B = 1000 \\cdot (1.05)^t$.\n\n**Why the wrong answers are tempting:**\n* B: linear (simple interest, not compound).\n* C: uses just the rate $0.05$ as the base — gives decay.\n* D: misreads $5\\%$ as $50\\%$.\n\n**Test Day Takeaway:** Growth by $r$ (as a decimal) → base $= 1 + r$. Decay by $r$ → base $= 1 - r$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'build-exponential-model', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-343', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A car depreciates by $12\\%$ each year. If its initial value is $\\$24{,}000$, which function $V$ gives its value, in dollars, after $t$ years?',
    choices: [{ id: 'A', text: '$V(t) = 24000 \\cdot (0.88)^t$' }, { id: 'B', text: '$V(t) = 24000 \\cdot (1.12)^t$' }, { id: 'C', text: '$V(t) = 24000 - 0.12t$' }, { id: 'D', text: '$V(t) = 24000 \\cdot (0.12)^t$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Build Exponential Model**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Decay: $b = 1 - 0.12 = 0.88$.\n\n**Why the wrong answers are tempting:**\n* B: $1.12$ would model growth, not depreciation.\n* C: linear depreciation, not exponential.\n* D: uses just the rate.\n\n**Test Day Takeaway:** Depreciation/decay by $r$ → multiply by $(1 - r)$ each period.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'build-exponential-model', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-344', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A radioactive substance has a half-life of $5$ years. If the initial amount is $80$ grams, which function $A$ gives the amount, in grams, remaining after $t$ years?',
    choices: [{ id: 'A', text: '$A(t) = 80 \\cdot \\left(\\dfrac{1}{2}\\right)^{t/5}$' }, { id: 'B', text: '$A(t) = 80 \\cdot \\left(\\dfrac{1}{2}\\right)^t$' }, { id: 'C', text: '$A(t) = 80 \\cdot 2^{t/5}$' }, { id: 'D', text: '$A(t) = 80 \\cdot 0.5t$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Build Exponential Model**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Half-life $5$ years means the exponent is $t/5$ (number of half-lives elapsed). $A = 80 \\cdot (1/2)^{t/5}$.\n\n**Why the wrong answers are tempting:**\n* B: halves EVERY year, not every $5$ years.\n* C: $2^{t/5}$ is doubling, not halving.\n* D: linear decay.\n\n**Test Day Takeaway:** For "period $T$" growth/decay, the exponent is $t/T$.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'build-exponential-model', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-345', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The population of a town was $1{,}200$ in 2020 and $1{,}452$ in 2022. Assuming exponential growth, which function $P$ gives the population $t$ years after 2020?',
    choices: [{ id: 'A', text: '$P(t) = 1200 \\cdot (1.1)^t$' }, { id: 'B', text: '$P(t) = 1200 + 126t$' }, { id: 'C', text: '$P(t) = 1200 \\cdot (1.21)^t$' }, { id: 'D', text: '$P(t) = 1200 \\cdot (1.252)^{t/2}$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Build Exponential Model**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Two-year growth factor: $1452/1200 = 1.21$. One-year factor: $\\sqrt{1.21} = 1.1$.\n\n**Why the wrong answers are tempting:**\n* B: linear (slope $126$/year).\n* C: uses the TWO-year factor as the annual factor.\n* D: mis-arranges the exponent.\n\n**Test Day Takeaway:** When given two data points, find the per-period factor by taking the $N$-th root of the ratio (where $N$ is the time between points).',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'build-exponential-model', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-346', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'hard', type: 'multiple-choice',
    question: 'An account is compounded monthly. Its balance, in dollars, after $0$, $1$, and $2$ months is $800$, $840$, and $882$. Which function $B$ gives the balance after $t$ months?',
    choices: [{ id: 'A', text: '$B(t) = 800 \\cdot (1.05)^t$' }, { id: 'B', text: '$B(t) = 800 + 40t$' }, { id: 'C', text: '$B(t) = 800 \\cdot (1.04)^t$' }, { id: 'D', text: '$B(t) = 800 \\cdot (1.10)^t$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Build Exponential Model**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Ratio: $840/800 = 1.05$. Verify: $840 \\cdot 1.05 = 882$ ✓.\n\n**Why the wrong answers are tempting:**\n* B: linear (constant $40$ per month — but $40, 42$ are different).\n* C: uses the rate from $40/1000$ slip.\n* D: doubles the monthly rate.\n\n**Test Day Takeaway:** Confirm exponential vs linear by checking ratios — constant ratio means exponential, constant difference means linear.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'build-exponential-model', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- discriminant-analysis (4 → 10) ---
  { id: 'bank-am-347', domain: 'advanced-math', skills: ['discriminant-analysis'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What is the value of the discriminant of the equation $2x^2 + 5x + 3 = 0$?',
    choices: [{ id: 'A', text: '$1$' }, { id: 'B', text: '$-1$' }, { id: 'C', text: '$49$' }, { id: 'D', text: '$25$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Discriminant Analysis**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $D = b^2 - 4ac = 5^2 - 4(2)(3) = 25 - 24 = 1$.\n\n**Why the wrong answers are tempting:**\n* B: sign error.\n* C: $b^2 + 4ac$ (wrong sign).\n* D: returns $b^2$ without the $4ac$ term.\n\n**Test Day Takeaway:** $D = b^2 - 4ac$. Identify $a$, $b$, $c$ from $ax^2 + bx + c$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'discriminant-analysis', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-348', domain: 'advanced-math', skills: ['discriminant-analysis'], difficulty: 'easy', type: 'multiple-choice',
    question: 'How many real solutions does the equation $x^2 - 4x + 7 = 0$ have?',
    choices: [{ id: 'A', text: 'Zero' }, { id: 'B', text: 'One' }, { id: 'C', text: 'Two' }, { id: 'D', text: 'Infinitely many' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Discriminant Analysis**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $D = 16 - 28 = -12 < 0$, so no real solutions.\n\n**Why the wrong answers are tempting:**\n* B: would need $D = 0$.\n* C: would need $D > 0$.\n* D: quadratics have at most two solutions.\n\n**Test Day Takeaway:** $D < 0$ → no real roots. $D = 0$ → one repeated root. $D > 0$ → two distinct roots.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'discriminant-analysis', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-349', domain: 'advanced-math', skills: ['discriminant-analysis'], difficulty: 'easy', type: 'multiple-choice',
    question: 'How many real solutions does the equation $x^2 + 6x + 9 = 0$ have?',
    choices: [{ id: 'A', text: 'Exactly one' }, { id: 'B', text: 'Zero' }, { id: 'C', text: 'Two' }, { id: 'D', text: 'Three' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Discriminant Analysis**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $D = 36 - 36 = 0$, so exactly one (repeated) root.\n\n**Why the wrong answers are tempting:**\n* B: $D < 0$ would give zero solutions.\n* C: $D > 0$ would give two.\n* D: quadratics have at most two real roots.\n\n**Test Day Takeaway:** A perfect-square trinomial like $(x + 3)^2$ has discriminant $0$ — one repeated root.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'discriminant-analysis', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-350', domain: 'advanced-math', skills: ['discriminant-analysis'], difficulty: 'medium', type: 'multiple-choice',
    question: 'For what value of $k$ does the equation $x^2 + 8x + k = 0$ have exactly one real solution?',
    choices: [{ id: 'A', text: '$16$' }, { id: 'B', text: '$8$' }, { id: 'C', text: '$4$' }, { id: 'D', text: '$-16$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Discriminant Analysis**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $D = 0$ ⇒ $64 - 4k = 0 \\Rightarrow k = 16$.\n\n**Why the wrong answers are tempting:**\n* B ($8$): copies the middle coefficient.\n* C ($4$): half of $b$.\n* D ($-16$): sign error.\n\n**Test Day Takeaway:** Set $D = 0$ for "one solution" and solve for the parameter.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'discriminant-analysis', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-351', domain: 'advanced-math', skills: ['discriminant-analysis'], difficulty: 'medium', type: 'multiple-choice',
    question: 'For which value of $c$ does the equation $2x^2 + cx + 8 = 0$ have no real solutions?',
    choices: [{ id: 'A', text: '$4$' }, { id: 'B', text: '$8$' }, { id: 'C', text: '$10$' }, { id: 'D', text: '$12$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Discriminant Analysis**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** No real solutions ⇒ $D < 0$ ⇒ $c^2 - 64 < 0 \\Rightarrow |c| < 8$. Only $c = 4$ qualifies.\n\n**Why the wrong answers are tempting:**\n* B ($8$): boundary value (gives $D = 0$, one solution).\n* C/D ($10$, $12$): give two real solutions.\n\n**Test Day Takeaway:** Solve the discriminant inequality first; then test each answer.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'discriminant-analysis', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-352', domain: 'advanced-math', skills: ['discriminant-analysis'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The equation $x^2 - px + 12 = 0$ has two equal real roots. What is the value of $|p|$?',
    choices: [{ id: 'A', text: '$4\\sqrt{3}$' }, { id: 'B', text: '$12$' }, { id: 'C', text: '$\\sqrt{12}$' }, { id: 'D', text: '$48$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Discriminant Analysis**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Equal roots ⇒ $D = 0$ ⇒ $p^2 - 48 = 0 \\Rightarrow p^2 = 48 \\Rightarrow |p| = \\sqrt{48} = 4\\sqrt{3}$.\n\n**Why the wrong answers are tempting:**\n* B ($12$): copies the constant.\n* C ($\\sqrt{12}$): forgets to multiply by $4$ in $4ac$.\n* D ($48$): returns $p^2$.\n\n**Test Day Takeaway:** $\\sqrt{48} = \\sqrt{16 \\cdot 3} = 4\\sqrt{3}$. Simplify radicals.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'discriminant-analysis', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- discriminant-with-integer-bound (4 → 10) ---
  { id: 'bank-am-353', domain: 'advanced-math', skills: ['discriminant-analysis'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What is the largest integer value of $k$ such that the equation $x^2 - 5x + k = 0$ has two distinct real solutions?',
    choices: [{ id: 'A', text: '$6$' }, { id: 'B', text: '$5$' }, { id: 'C', text: '$7$' }, { id: 'D', text: '$25$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $D > 0$ ⇒ $25 - 4k > 0 \\Rightarrow k < 6.25$. Largest integer: $6$.\n\n**Why the wrong answers are tempting:**\n* B ($5$): off-by-one below the bound.\n* C ($7$): exceeds the bound.\n* D ($25$): copies $b^2$.\n\n**Test Day Takeaway:** Strict inequalities exclude the boundary; integer answer is the floor of the bound minus one if the bound is not an integer.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'discriminant-with-integer-bound', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-354', domain: 'advanced-math', skills: ['discriminant-analysis'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What is the smallest integer value of $k$ such that the equation $2x^2 + 6x + k = 0$ has no real solutions?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$4$' }, { id: 'C', text: '$6$' }, { id: 'D', text: '$3$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $D < 0$ ⇒ $36 - 8k < 0 \\Rightarrow k > 4.5$. Smallest integer: $5$.\n\n**Why the wrong answers are tempting:**\n* B ($4$): equals the bound — would give $D > 0$.\n* C ($6$): not smallest.\n* D ($3$): below the bound.\n\n**Test Day Takeaway:** For "no real solutions" use $D < 0$ strictly.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'discriminant-with-integer-bound', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-355', domain: 'advanced-math', skills: ['discriminant-analysis'], difficulty: 'hard', type: 'multiple-choice',
    question: 'What is the greatest integer value of $m$ such that the equation $mx^2 + 12x + 9 = 0$ has two distinct real solutions?',
    choices: [{ id: 'A', text: '$3$' }, { id: 'B', text: '$4$' }, { id: 'C', text: '$2$' }, { id: 'D', text: '$5$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $D > 0$ ⇒ $144 - 36m > 0 \\Rightarrow m < 4$. Also $m \\neq 0$ (else linear). Largest integer: $3$.\n\n**Why the wrong answers are tempting:**\n* B ($4$): boundary value, $D = 0$ (one solution).\n* C ($2$): not greatest.\n* D ($5$): exceeds the bound.\n\n**Test Day Takeaway:** When the variable is the leading coefficient, also exclude $m = 0$ (degenerates the equation).',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'discriminant-with-integer-bound', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-356', domain: 'advanced-math', skills: ['discriminant-analysis'], difficulty: 'medium', type: 'multiple-choice',
    question: 'For how many integer values of $k$ in the range $-10 \\leq k \\leq 10$ does the equation $3x^2 + kx + 3 = 0$ have NO real solutions?',
    choices: [{ id: 'A', text: '$11$' }, { id: 'B', text: '$12$' }, { id: 'C', text: '$10$' }, { id: 'D', text: '$9$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $D < 0$ ⇒ $k^2 - 36 < 0 \\Rightarrow -6 < k < 6$. Integers $k = -5, -4, ..., 5$ — that\'s $11$ values.\n\n**Why the wrong answers are tempting:**\n* B ($12$): includes endpoints $\\pm 6$ (where $D = 0$, one solution).\n* C ($10$): off-by-one.\n* D ($9$): undercount.\n\n**Test Day Takeaway:** Count integers in an open interval as (upper $-$ lower $-1$); strict bounds exclude endpoints.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'discriminant-with-integer-bound', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-357', domain: 'advanced-math', skills: ['discriminant-analysis'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What is the smallest positive integer $p$ such that the equation $x^2 + px + 9 = 0$ has at least one real solution?',
    choices: [{ id: 'A', text: '$6$' }, { id: 'B', text: '$5$' }, { id: 'C', text: '$3$' }, { id: 'D', text: '$9$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $D \\geq 0$ ⇒ $p^2 - 36 \\geq 0 \\Rightarrow p \\geq 6$ (for positive $p$). Smallest: $6$.\n\n**Why the wrong answers are tempting:**\n* B ($5$): below the bound.\n* C ($3$): $9/3$.\n* D ($9$): copies the constant.\n\n**Test Day Takeaway:** "At least one real solution" uses $D \\geq 0$ (boundary included).',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'discriminant-with-integer-bound', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-358', domain: 'advanced-math', skills: ['discriminant-analysis'], difficulty: 'hard', type: 'multiple-choice',
    question: 'For what range of values of $c$ does the equation $x^2 + cx + 25 = 0$ have no real solutions?',
    choices: [{ id: 'A', text: '$-10 < c < 10$' }, { id: 'B', text: '$c < -10$ or $c > 10$' }, { id: 'C', text: '$c < 25$' }, { id: 'D', text: '$c > 0$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $D < 0$ ⇒ $c^2 - 100 < 0 \\Rightarrow |c| < 10$ ⇒ $-10 < c < 10$.\n\n**Why the wrong answers are tempting:**\n* B: gives $D > 0$ (two real solutions).\n* C: random comparison.\n* D: ignores the discriminant entirely.\n\n**Test Day Takeaway:** $c^2 < k$ ⇔ $-\\sqrt{k} < c < \\sqrt{k}$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'discriminant-with-integer-bound', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- factor-by-grouping (4 → 10) ---
  { id: 'bank-am-359', domain: 'advanced-math', skills: ['factoring'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Which of the following is equivalent to $x^3 + 2x^2 + 3x + 6$?',
    choices: [{ id: 'A', text: '$(x + 2)(x^2 + 3)$' }, { id: 'B', text: '$(x + 3)(x^2 + 2)$' }, { id: 'C', text: '$(x^2 + 2)(x + 3)$' }, { id: 'D', text: '$(x + 2)(x^2 - 3)$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Factor by Grouping**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Group: $x^2(x + 2) + 3(x + 2) = (x + 2)(x^2 + 3)$.\n\n**Why the wrong answers are tempting:**\n* B: mixes the constants — $(x + 3)(x^2 + 2)$ expands to $x^3 + 2x + 3x^2 + 6 = x^3 + 3x^2 + 2x + 6$, not original.\n* C: same as B with reordered factors.\n* D: sign error on the constant.\n\n**Test Day Takeaway:** Group the first two and last two terms, factor each, then combine the common binomial factor.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'factor-by-grouping', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-360', domain: 'advanced-math', skills: ['factoring'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Which of the following is equivalent to $2x^3 - x^2 + 8x - 4$?',
    choices: [{ id: 'A', text: '$(2x - 1)(x^2 + 4)$' }, { id: 'B', text: '$(x - 4)(2x^2 + 1)$' }, { id: 'C', text: '$(2x + 1)(x^2 - 4)$' }, { id: 'D', text: '$(2x - 1)(x^2 - 4)$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Factor by Grouping**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $x^2(2x - 1) + 4(2x - 1) = (2x - 1)(x^2 + 4)$.\n\n**Why the wrong answers are tempting:**\n* B: misidentifies factors.\n* C: sign errors.\n* D: sign error on the constant.\n\n**Test Day Takeaway:** When grouping, the two binomials produced after factoring each group MUST be identical for grouping to succeed.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'factor-by-grouping', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-361', domain: 'advanced-math', skills: ['factoring'], difficulty: 'easy', type: 'multiple-choice',
    question: 'Which of the following is equivalent to $6x^2 - 9x + 10x - 15$?',
    choices: [{ id: 'A', text: '$(2x - 3)(3x + 5)$' }, { id: 'B', text: '$(3x - 5)(2x + 3)$' }, { id: 'C', text: '$(2x + 3)(3x - 5)$' }, { id: 'D', text: '$(2x - 3)(3x - 5)$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Factor by Grouping**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $3x(2x - 3) + 5(2x - 3) = (2x - 3)(3x + 5)$.\n\n**Why the wrong answers are tempting:**\n* B/C: factors are swapped or have sign errors.\n* D: both factors have wrong signs.\n\n**Test Day Takeaway:** After grouping, multiply out to verify.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'factor-by-grouping', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-362', domain: 'advanced-math', skills: ['factoring'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Which of the following is equivalent to $x^3 - 3x^2 + 5x - 15$?',
    choices: [{ id: 'A', text: '$(x - 3)(x^2 + 5)$' }, { id: 'B', text: '$(x + 3)(x^2 - 5)$' }, { id: 'C', text: '$(x - 5)(x^2 + 3)$' }, { id: 'D', text: '$(x - 3)(x^2 - 5)$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Factor by Grouping**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $x^2(x - 3) + 5(x - 3) = (x - 3)(x^2 + 5)$.\n\n**Why the wrong answers are tempting:**\n* B/C/D: sign errors or swapped constants.\n\n**Test Day Takeaway:** The binomial factor matches the negative sign of the first group; the second group also yields the same binomial.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'factor-by-grouping', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-363', domain: 'advanced-math', skills: ['factoring'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Which of the following is equivalent to $4ab + 6a + 10b + 15$?',
    choices: [{ id: 'A', text: '$(2b + 3)(2a + 5)$' }, { id: 'B', text: '$(2a + 3)(2b + 5)$' }, { id: 'C', text: '$(2b + 5)(2a + 3)$' }, { id: 'D', text: '$(2a - 3)(2b - 5)$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Factor by Grouping**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $2a(2b + 3) + 5(2b + 3) = (2b + 3)(2a + 5)$.\n\n**Why the wrong answers are tempting:**\n* B/C: swaps factor constants.\n* D: sign errors.\n\n**Test Day Takeaway:** Group along the variables; factor out the GCF from each pair.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'factor-by-grouping', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-364', domain: 'advanced-math', skills: ['factoring'], difficulty: 'hard', type: 'multiple-choice',
    question: 'Which of the following is equivalent to $2x^3 + 5x^2 - 2x - 5$?',
    choices: [{ id: 'A', text: '$(2x + 5)(x - 1)(x + 1)$' }, { id: 'B', text: '$(2x + 5)(x^2 - 1)$' }, { id: 'C', text: '$(2x - 5)(x + 1)(x - 1)$' }, { id: 'D', text: '$(2x + 5)(x^2 + 1)$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Factor by Grouping**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Group: $x^2(2x + 5) - (2x + 5) = (2x + 5)(x^2 - 1) = (2x + 5)(x - 1)(x + 1)$.\n\n**Why the wrong answers are tempting:**\n* B: incomplete factoring (stops at the difference of squares).\n* C: sign error.\n* D: sign error on the squared factor.\n\n**Test Day Takeaway:** After grouping, look for further factorability — difference of squares is a common second step.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'factor-by-grouping', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- function-composition (4 → 10) ---
  { id: 'bank-am-365', domain: 'advanced-math', skills: ['function-composition'], difficulty: 'easy', type: 'multiple-choice',
    question: 'Functions $f$ and $g$ are defined by $f(x) = 2x + 3$ and $g(x) = x - 1$. What is the value of $f(g(4))$?',
    choices: [{ id: 'A', text: '$9$' }, { id: 'B', text: '$10$' }, { id: 'C', text: '$8$' }, { id: 'D', text: '$11$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Function Composition**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $g(4) = 3$. $f(3) = 2(3) + 3 = 9$.\n\n**Why the wrong answers are tempting:**\n* B ($10$): swaps the order — computes $g(f(4))$.\n* C ($8$): forgets the constant in $f$.\n* D ($11$): mis-arithmetic.\n\n**Test Day Takeaway:** Evaluate the INNER function first, then plug its output into the outer function.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-composition', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-366', domain: 'advanced-math', skills: ['function-composition'], difficulty: 'easy', type: 'multiple-choice',
    question: 'Functions $f$ and $g$ are defined by $f(x) = x^2$ and $g(x) = x + 5$. What is the value of $f(g(2))$?',
    choices: [{ id: 'A', text: '$49$' }, { id: 'B', text: '$9$' }, { id: 'C', text: '$27$' }, { id: 'D', text: '$25$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Function Composition**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $g(2) = 7$. $f(7) = 49$.\n\n**Why the wrong answers are tempting:**\n* B ($9$): swaps order — $g(f(2)) = g(4) = 9$.\n* C ($27$): computes $g(2)^2 + g(2) = 49 + ...$? not a clean trap; could be $3^3$.\n* D ($25$): squares only the original input.\n\n**Test Day Takeaway:** Order of composition matters: $f(g(x)) \\neq g(f(x))$ in general.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-composition', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-367', domain: 'advanced-math', skills: ['function-composition'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Functions $f$ and $g$ are defined by $f(x) = 3x - 1$ and $g(x) = x^2$. What is the value of $g(f(2))$?',
    choices: [{ id: 'A', text: '$25$' }, { id: 'B', text: '$5$' }, { id: 'C', text: '$11$' }, { id: 'D', text: '$10$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Function Composition**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $f(2) = 5$. $g(5) = 25$.\n\n**Why the wrong answers are tempting:**\n* B ($5$): returns $f(2)$.\n* C ($11$): swaps order — $f(g(2)) = f(4) = 11$.\n* D ($10$): mis-arithmetic.\n\n**Test Day Takeaway:** $g(f(x))$ means: compute $f(x)$ first, then plug into $g$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-composition', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-368', domain: 'advanced-math', skills: ['function-composition'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Functions $f$ and $g$ are defined by $f(x) = x + 4$ and $g(x) = 2x$. Which of the following is an expression for $f(g(x))$?',
    choices: [{ id: 'A', text: '$2x + 4$' }, { id: 'B', text: '$2x + 8$' }, { id: 'C', text: '$x + 8$' }, { id: 'D', text: '$2(x + 4)$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Function Composition**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Replace $x$ in $f$ with $g(x) = 2x$: $f(g(x)) = 2x + 4$.\n\n**Why the wrong answers are tempting:**\n* B ($2x + 8$): doubles the constant unnecessarily.\n* C ($x + 8$): mis-applies the multiplication.\n* D ($2(x + 4)$): swaps the order — gives $g(f(x))$.\n\n**Test Day Takeaway:** Compositional substitution: wherever $x$ appears in the outer function, write the inner function in its place.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-composition', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-369', domain: 'advanced-math', skills: ['function-composition'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Functions $f$ and $g$ are defined by $f(x) = x^2 - 3$ and $g(x) = x + 1$. Which of the following is an expression for $f(g(x))$?',
    choices: [{ id: 'A', text: '$x^2 + 2x - 2$' }, { id: 'B', text: '$x^2 - 2$' }, { id: 'C', text: '$x^2 + 1$' }, { id: 'D', text: '$x^2 + 2x + 1$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Function Composition**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $f(g(x)) = (x + 1)^2 - 3 = x^2 + 2x + 1 - 3 = x^2 + 2x - 2$.\n\n**Why the wrong answers are tempting:**\n* B: forgets the cross term when squaring.\n* C: drops the $-3$.\n* D: forgets to subtract $3$.\n\n**Test Day Takeaway:** Expand the inner expression\'s square in full: $(x + 1)^2 = x^2 + 2x + 1$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-composition', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-370', domain: 'advanced-math', skills: ['function-composition'], difficulty: 'hard', type: 'multiple-choice',
    question: 'Function $f$ is defined by $f(x) = 2x - 5$. If $f(g(x)) = 6x + 1$ for all values of $x$, which of the following is an expression for $g(x)$?',
    choices: [{ id: 'A', text: '$3x + 3$' }, { id: 'B', text: '$3x - 3$' }, { id: 'C', text: '$6x - 4$' }, { id: 'D', text: '$3x + 6$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Function Composition**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $f(g(x)) = 2g(x) - 5 = 6x + 1 \\Rightarrow 2g(x) = 6x + 6 \\Rightarrow g(x) = 3x + 3$.\n\n**Why the wrong answers are tempting:**\n* B: sign error on the constant.\n* C: doesn\'t divide by $2$.\n* D: adds the constants in the wrong order.\n\n**Test Day Takeaway:** Set $f(g(x))$ equal to the given target and solve for $g(x)$ algebraically.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-composition', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- function-evaluation-with-negative-input (4 → 10) ---
  { id: 'bank-am-371', domain: 'advanced-math', skills: ['function-evaluation'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = x^2 + 2x - 1$. What is the value of $f(-3)$?',
    choices: [{ id: 'A', text: '$2$' }, { id: 'B', text: '$14$' }, { id: 'C', text: '$-4$' }, { id: 'D', text: '$-2$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $f(-3) = 9 + (-6) + (-1) = 2$.\n\n**Why the wrong answers are tempting:**\n* B ($14$): treats $(-3)^2$ as $-9$ then adjusts.\n* C ($-4$): sign error on $2x$.\n* D ($-2$): wrong combination of terms.\n\n**Test Day Takeaway:** $(-3)^2 = +9$ (even power flips sign back to positive). Then track each term\'s sign.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-evaluation-with-negative-input', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-372', domain: 'advanced-math', skills: ['function-evaluation'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The function $g$ is defined by $g(x) = 2x^2 - 5x + 3$. What is the value of $g(-2)$?',
    choices: [{ id: 'A', text: '$21$' }, { id: 'B', text: '$1$' }, { id: 'C', text: '$-3$' }, { id: 'D', text: '$13$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $g(-2) = 2(4) - 5(-2) + 3 = 8 + 10 + 3 = 21$.\n\n**Why the wrong answers are tempting:**\n* B ($1$): drops the $-(-2) = +2$ to $-2$.\n* C ($-3$): drops the quadratic term.\n* D ($13$): misses the $+10$ contribution.\n\n**Test Day Takeaway:** $-5 \\cdot -2 = +10$. Sign tracking through every term.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-evaluation-with-negative-input', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-373', domain: 'advanced-math', skills: ['function-evaluation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The function $h$ is defined by $h(x) = -x^3 + 4$. What is the value of $h(-1)$?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$3$' }, { id: 'C', text: '$-3$' }, { id: 'D', text: '$-5$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $h(-1) = -(-1)^3 + 4 = -(-1) + 4 = 1 + 4 = 5$.\n\n**Why the wrong answers are tempting:**\n* B ($3$): treats $(-1)^3$ as $+1$.\n* C ($-3$): forgets the negation step.\n* D ($-5$): swaps sign on the constant.\n\n**Test Day Takeaway:** $(-1)^3 = -1$ (odd power keeps sign). Then negate gives $+1$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-evaluation-with-negative-input', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-374', domain: 'advanced-math', skills: ['function-evaluation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = 3x^2 - x - 7$. What is the value of $f(-4)$?',
    choices: [{ id: 'A', text: '$45$' }, { id: 'B', text: '$-43$' }, { id: 'C', text: '$53$' }, { id: 'D', text: '$37$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $f(-4) = 3(16) - (-4) - 7 = 48 + 4 - 7 = 45$.\n\n**Why the wrong answers are tempting:**\n* B ($-43$): drops both sign flips.\n* C ($53$): forgets the $-7$.\n* D ($37$): forgets the $+4$ contribution.\n\n**Test Day Takeaway:** $-x$ at $x = -4$ becomes $-(-4) = +4$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-evaluation-with-negative-input', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-375', domain: 'advanced-math', skills: ['function-evaluation'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = 2 - x^2$. What is the value of $f(-5)$?',
    choices: [{ id: 'A', text: '$-23$' }, { id: 'B', text: '$27$' }, { id: 'C', text: '$-27$' }, { id: 'D', text: '$23$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $f(-5) = 2 - 25 = -23$.\n\n**Why the wrong answers are tempting:**\n* B ($27$): treats $(-5)^2$ as $-25$, gets $2 - (-25) = 27$.\n* C ($-27$): adds the wrong sign.\n* D ($23$): drops the negative.\n\n**Test Day Takeaway:** $(-5)^2 = +25$ first, then $f = 2 - 25 = -23$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-evaluation-with-negative-input', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-376', domain: 'advanced-math', skills: ['function-evaluation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = x^2 + 2x + c$. If $f(-3) = 4$, what is the value of $c$?',
    choices: [{ id: 'A', text: '$1$' }, { id: 'B', text: '$7$' }, { id: 'C', text: '$-5$' }, { id: 'D', text: '$13$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $f(-3) = 9 - 6 + c = 3 + c = 4 \\Rightarrow c = 1$.\n\n**Why the wrong answers are tempting:**\n* B ($7$): sign error on $2x$.\n* C ($-5$): mis-substitutes.\n* D ($13$): adds instead of subtracts.\n\n**Test Day Takeaway:** Plug in, set equal to the target, solve for the unknown parameter.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-evaluation-with-negative-input', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- function-transformation (4 → 10) ---
  { id: 'bank-am-377', domain: 'advanced-math', skills: ['function-transformations', 'vertex-form'], difficulty: 'easy', type: 'multiple-choice',
    question: 'If $f(x) = x^2$, the graph of $y = f(x) - 3$ in the $xy$-plane is the graph of $f$ shifted in which direction?',
    choices: [{ id: 'A', text: 'Down $3$ units' }, { id: 'B', text: 'Up $3$ units' }, { id: 'C', text: 'Left $3$ units' }, { id: 'D', text: 'Right $3$ units' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Function Transformation**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $y = f(x) - 3$: subtract from the OUTPUT ⇒ shift DOWN by $3$.\n\n**Why the wrong answers are tempting:**\n* B: would be $f(x) + 3$.\n* C: would be $f(x + 3)$ (left, because the input shifts opposite).\n* D: would be $f(x - 3)$.\n\n**Test Day Takeaway:** Outside the function ⇒ vertical shift. Inside the function ⇒ horizontal shift (opposite direction).',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-transformation', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-378', domain: 'advanced-math', skills: ['function-transformations', 'vertex-form'], difficulty: 'easy', type: 'multiple-choice',
    question: 'If $f(x) = x^2$, the graph of $y = f(x + 2)$ in the $xy$-plane is the graph of $f$ shifted in which direction?',
    choices: [{ id: 'A', text: 'Left $2$ units' }, { id: 'B', text: 'Right $2$ units' }, { id: 'C', text: 'Up $2$ units' }, { id: 'D', text: 'Down $2$ units' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Function Transformation**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $f(x + 2)$: input shift is OPPOSITE its sign ⇒ LEFT.\n\n**Why the wrong answers are tempting:**\n* B: tempted to read $+2$ as "right" — but inside-the-function shifts go opposite.\n* C/D: that would be a vertical shift.\n\n**Test Day Takeaway:** Inside-function shifts: $f(x - h)$ moves RIGHT by $h$; $f(x + h)$ moves LEFT by $h$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-transformation', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-379', domain: 'advanced-math', skills: ['function-transformations', 'vertex-form'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The function $g$ is defined by $g(x) = (x - 4)^2 + 1$. What is the vertex of the graph of $y = g(x)$ in the $xy$-plane?',
    choices: [{ id: 'A', text: '$(4, 1)$' }, { id: 'B', text: '$(-4, 1)$' }, { id: 'C', text: '$(4, -1)$' }, { id: 'D', text: '$(-4, -1)$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Function Transformation**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Vertex form $a(x - h)^2 + k$: vertex at $(h, k) = (4, 1)$.\n\n**Why the wrong answers are tempting:**\n* B/C/D: sign errors on $h$ or $k$.\n\n**Test Day Takeaway:** $h$ is the value that makes the squared term zero (read with opposite sign of what appears).',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-transformation', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-380', domain: 'advanced-math', skills: ['function-transformations', 'vertex-form'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The graph of $y = f(x)$ is shown in the $xy$-plane. The graph of $y = -f(x) + 5$ is obtained from the graph of $f$ by which sequence of transformations?',
    choices: [{ id: 'A', text: 'Reflection across the $x$-axis, then shift up $5$ units' }, { id: 'B', text: 'Reflection across the $y$-axis, then shift up $5$ units' }, { id: 'C', text: 'Reflection across the $x$-axis, then shift down $5$ units' }, { id: 'D', text: 'Shift up $5$ units, then reflection across the $x$-axis' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Function Transformation**\n\n**Choice A is correct.**\n\n**The Fast Way:** $-f(x)$ negates the output ⇒ reflection across $x$-axis. $+5$ shifts up.\n\n**Why the wrong answers are tempting:**\n* B: $f(-x)$ would be reflection across $y$-axis.\n* C: wrong direction of shift.\n* D: order matters — reflection first, then shift; the OTHER order would give "shift then reflect" = "$-f(x) - 5$".\n\n**Test Day Takeaway:** $-f(x)$: x-axis flip. $f(-x)$: y-axis flip. $f(x) + k$: vertical shift. $f(x + h)$: horizontal shift.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-transformation', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-381', domain: 'advanced-math', skills: ['function-transformations', 'vertex-form'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Function $f$ has zeros at $x = -1$ and $x = 3$. What are the zeros of $g(x) = f(x - 2)$?',
    choices: [{ id: 'A', text: '$x = 1$ and $x = 5$' }, { id: 'B', text: '$x = -3$ and $x = 1$' }, { id: 'C', text: '$x = -1$ and $x = 3$' }, { id: 'D', text: '$x = 1$ and $x = -5$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Function Transformation**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $g(x) = f(x - 2)$ shifts the graph RIGHT by $2$, so each zero shifts right by $2$: $-1 + 2 = 1$, $3 + 2 = 5$.\n\n**Why the wrong answers are tempting:**\n* B: shifts left instead of right.\n* C: doesn\'t shift the zeros.\n* D: wrong direction on one zero.\n\n**Test Day Takeaway:** Horizontal transformations move ZEROS the same way they move the graph.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-transformation', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-382', domain: 'advanced-math', skills: ['function-transformations', 'vertex-form'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = x^2 - 4x + 7$. Which of the following describes the graph of $f$ as a transformation of the graph of $y = x^2$?',
    choices: [{ id: 'A', text: 'Shift right $2$ units and up $3$ units' }, { id: 'B', text: 'Shift left $2$ units and up $3$ units' }, { id: 'C', text: 'Shift right $2$ units and up $7$ units' }, { id: 'D', text: 'Shift left $4$ units and up $7$ units' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Function Transformation**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Complete the square: $x^2 - 4x + 7 = (x - 2)^2 - 4 + 7 = (x - 2)^2 + 3$. So shift right $2$, up $3$.\n\n**Why the wrong answers are tempting:**\n* B: wrong direction on horizontal shift.\n* C: forgets to subtract $4$ when completing the square.\n* D: uses the original coefficient and constant directly.\n\n**Test Day Takeaway:** Convert to vertex form $a(x - h)^2 + k$. $h > 0$ is right, $k > 0$ is up.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-transformation', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- interpret-exponential-parameters (4 → 10) ---
  { id: 'bank-am-383', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'easy', type: 'multiple-choice',
    question: 'An account balance, in dollars, is modeled by $B(t) = 5000 \\cdot (1.04)^t$, where $t$ is the time in years. Which of the following is the BEST interpretation of the value $1.04$ in this model?',
    choices: [{ id: 'A', text: 'The balance grows by $4\\%$ each year.' }, { id: 'B', text: 'The balance grows by $104\\%$ each year.' }, { id: 'C', text: 'The initial balance is $\\$1.04$.' }, { id: 'D', text: 'The balance is $\\$1.04$ after $1$ year.' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Interpret Exponential Parameters**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Base $1.04 = 1 + 0.04$ ⇒ $4\\%$ growth per period.\n\n**Why the wrong answers are tempting:**\n* B: misreads $1.04$ as "$104\\%$ growth" instead of "$104\\%$ of previous" = $4\\%$ growth.\n* C: confuses base with initial value.\n* D: nonsensical.\n\n**Test Day Takeaway:** Growth rate = base $-1$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'interpret-exponential-parameters', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-384', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A population, $P$, is modeled by $P(t) = 200 \\cdot (0.85)^t$, where $t$ is years. Which of the following is the BEST interpretation of $0.85$?',
    choices: [{ id: 'A', text: 'The population decreases by $15\\%$ each year.' }, { id: 'B', text: 'The population is $85$ each year.' }, { id: 'C', text: 'The population decreases by $85\\%$ each year.' }, { id: 'D', text: 'The initial population is $0.85$.' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Interpret Exponential Parameters**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Base $0.85 = 1 - 0.15$ ⇒ $15\\%$ decay.\n\n**Why the wrong answers are tempting:**\n* B: misreads base as a count.\n* C: misreads base $0.85$ as "$85\\%$ decay" instead of "retains $85\\%$ = loses $15\\%$".\n* D: confuses base with initial value.\n\n**Test Day Takeaway:** For decay, the rate is $1 - $ base.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'interpret-exponential-parameters', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-385', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A bacterial population, $N$, is modeled by $N(t) = 80 \\cdot 2^{t/5}$, where $t$ is time in hours. Which of the following is the BEST interpretation of the $5$ in the exponent?',
    choices: [{ id: 'A', text: 'The population doubles every $5$ hours.' }, { id: 'B', text: 'The population is $5$ at $t = 0$.' }, { id: 'C', text: 'The population grows by $5\\%$ each hour.' }, { id: 'D', text: 'It takes $5$ hours for the population to grow by $80$.' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Interpret Exponential Parameters**\n\n**Choice A is correct.**\n\n**The Fast Way:** Base $2$ ⇒ doubling. Exponent $t/5$ ⇒ doubling period is $5$ hours.\n\n**Why the wrong answers are tempting:**\n* B: confuses with the initial population ($80$).\n* C: confuses exponent period with growth rate.\n* D: nonsensical re-arrangement.\n\n**Test Day Takeaway:** In $a \\cdot b^{t/T}$, $T$ is the period for ONE full multiplication by $b$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'interpret-exponential-parameters', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-386', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A function is given by $y = 120 \\cdot (0.5)^{t/10}$, where $t$ is measured in years. What is the half-life, in years, of the quantity modeled by $y$?',
    choices: [{ id: 'A', text: '$10$' }, { id: 'B', text: '$5$' }, { id: 'C', text: '$120$' }, { id: 'D', text: '$0.5$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Interpret Exponential Parameters**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Base $0.5$ is the half-factor; exponent $t/10$ means one half-life every $10$ years.\n\n**Why the wrong answers are tempting:**\n* B ($5$): half of the exponent denominator.\n* C ($120$): copies the initial value.\n* D ($0.5$): copies the base.\n\n**Test Day Takeaway:** Half-life ⇔ time for the exponent\'s coefficient to multiply $t$ by enough to give $1$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'interpret-exponential-parameters', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-387', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'easy', type: 'multiple-choice',
    question: 'An investment account is modeled by $A(t) = 2000 \\cdot (1.06)^t$, where $t$ is years since the account was opened. Which of the following is the BEST interpretation of $2000$?',
    choices: [{ id: 'A', text: 'The initial investment, in dollars.' }, { id: 'B', text: 'The annual growth rate, as a percent.' }, { id: 'C', text: 'The balance after $1$ year.' }, { id: 'D', text: 'The number of years the account has been open.' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Interpret Exponential Parameters**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $A(0) = 2000 \\cdot (1.06)^0 = 2000$. So $2000$ is the value at $t = 0$ — the initial investment.\n\n**Why the wrong answers are tempting:**\n* B: that\'s the base ($1.06$).\n* C: that would be $A(1) = 2120$.\n* D: $t$, not the initial value.\n\n**Test Day Takeaway:** In $a \\cdot b^t$, $a$ is the value when $t = 0$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'interpret-exponential-parameters', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-388', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The town of Greenfield, with current population $40{,}000$, is growing at an annual rate of $8\\%$. Which function $P$ gives the predicted population $t$ years from now?',
    choices: [{ id: 'A', text: '$P(t) = 40000 \\cdot (1.08)^t$' }, { id: 'B', text: '$P(t) = 40000 \\cdot (0.08)^t$' }, { id: 'C', text: '$P(t) = 40000 + 0.08t$' }, { id: 'D', text: '$P(t) = 40000 \\cdot (8)^t$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Interpret Exponential Parameters**\n\n**Choice A is correct.**\n\n**The Fast Way:** $8\\%$ annual growth ⇒ base $1 + 0.08 = 1.08$.\n\n**Why the wrong answers are tempting:**\n* B: uses the rate alone as the base — that would be decay.\n* C: linear model.\n* D: misreads $8\\%$ as $8$.\n\n**Test Day Takeaway:** Growth rate $r$ as a decimal ⇒ base $= 1 + r$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'interpret-exponential-parameters', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- vertex-form-from-two-conditions (4 → 10) ---
  { id: 'bank-am-389', domain: 'advanced-math', skills: ['vertex-form', 'function-evaluation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A parabola with vertex $(3, 5)$ passes through the point $(5, 9)$. The parabola can be written as $y = a(x - 3)^2 + 5$. What is the value of $a$?',
    choices: [{ id: 'A', text: '$1$' }, { id: 'B', text: '$2$' }, { id: 'C', text: '$\\dfrac{1}{2}$' }, { id: 'D', text: '$4$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Plug $(5, 9)$ into $a(x - 3)^2 + 5$: $9 = 4a + 5 \\Rightarrow a = 1$.\n\n**Why the wrong answers are tempting:**\n* B ($2$): mis-arithmetic.\n* C ($1/2$): divides incorrectly.\n* D ($4$): copies $(5 - 3)^2$.\n\n**Test Day Takeaway:** Substitute the given point into the vertex-form expression and solve for the missing $a$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-from-two-conditions', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-390', domain: 'advanced-math', skills: ['vertex-form', 'function-evaluation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A parabola $f(x) = a(x - h)^2$ has $f(2) = 0$ and $f(4) = 8$. What is the value of $a$?',
    choices: [{ id: 'A', text: '$2$' }, { id: 'B', text: '$4$' }, { id: 'C', text: '$\\dfrac{1}{2}$' }, { id: 'D', text: '$1$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $f(2) = 0$ ⇒ vertex on $x = 2$, so $h = 2$. Plug $(4, 8)$: $8 = a(4 - 2)^2 = 4a \\Rightarrow a = 2$.\n\n**Why the wrong answers are tempting:**\n* B ($4$): forgets to square the difference.\n* C ($1/2$): inverts.\n* D ($1$): mis-arithmetic.\n\n**Test Day Takeaway:** $f(x) = 0$ in vertex form with no constant means $x = h$ is the vertex.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-from-two-conditions', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-391', domain: 'advanced-math', skills: ['vertex-form', 'function-evaluation'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The graph of $y = (x - h)^2 + k$ in the $xy$-plane has vertex $(4, -1)$. What is the value of $h + k$?',
    choices: [{ id: 'A', text: '$3$' }, { id: 'B', text: '$5$' }, { id: 'C', text: '$-5$' }, { id: 'D', text: '$-3$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $h = 4$, $k = -1$. $h + k = 3$.\n\n**Why the wrong answers are tempting:**\n* B/C/D: sign errors.\n\n**Test Day Takeaway:** Vertex $(h, k)$ reads off directly from $a(x - h)^2 + k$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-from-two-conditions', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-392', domain: 'advanced-math', skills: ['vertex-form', 'function-evaluation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The graph of $y = a(x + 1)^2 + 7$ passes through $(2, 16)$. What is the value of $a$?',
    choices: [{ id: 'A', text: '$1$' }, { id: 'B', text: '$3$' }, { id: 'C', text: '$\\dfrac{9}{16}$' }, { id: 'D', text: '$\\dfrac{7}{9}$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $16 = a(3)^2 + 7 \\Rightarrow 9a = 9 \\Rightarrow a = 1$.\n\n**Why the wrong answers are tempting:**\n* B ($3$): forgets to square the binomial.\n* C ($9/16$): inverts.\n* D ($7/9$): random fraction.\n\n**Test Day Takeaway:** Substitute the known point\'s $x$ and $y$ into the equation; solve for the parameter.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-from-two-conditions', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-393', domain: 'advanced-math', skills: ['vertex-form', 'function-evaluation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The graph of $y = (x - h)^2$ has its only zero at $x = 4$. What is the value of $h$?',
    choices: [{ id: 'A', text: '$4$' }, { id: 'B', text: '$-4$' }, { id: 'C', text: '$2$' }, { id: 'D', text: '$0$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $(x - h)^2 = 0$ exactly when $x = h$. So $h = 4$.\n\n**Why the wrong answers are tempting:**\n* B ($-4$): sign error.\n* C ($2$): square root slip.\n* D ($0$): copies $y$-value.\n\n**Test Day Takeaway:** $(x - h)^2 = 0$ ⇔ $x = h$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-from-two-conditions', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-394', domain: 'advanced-math', skills: ['vertex-form', 'function-evaluation'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A parabola can be written as $y = a(x - h)^2 + k$. The parabola has vertex $(-3, 8)$ and passes through the point $(0, -1)$. What is the value of $a$?',
    choices: [{ id: 'A', text: '$-1$' }, { id: 'B', text: '$1$' }, { id: 'C', text: '$-3$' }, { id: 'D', text: '$\\dfrac{1}{3}$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** With $h = -3$, $k = 8$: $-1 = a(0 - (-3))^2 + 8 = 9a + 8 \\Rightarrow a = -1$.\n\n**Why the wrong answers are tempting:**\n* B: drops the negative.\n* C: mis-handles the squaring.\n* D: inverts.\n\n**Test Day Takeaway:** Vertex form pre-fills $h$ and $k$; one extra point determines $a$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-from-two-conditions', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- vertex-form-maximum (4 → 10) ---
  { id: 'bank-am-395', domain: 'advanced-math', skills: ['converting-quadratic-forms'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What is the maximum value of $f(x) = -(x - 3)^2 + 8$?',
    choices: [{ id: 'A', text: '$8$' }, { id: 'B', text: '$3$' }, { id: 'C', text: '$-8$' }, { id: 'D', text: '$11$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Vertex Form Maximum**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Leading coefficient $-1 < 0$ ⇒ downward parabola, vertex is the MAX. Max value $= k = 8$.\n\n**Why the wrong answers are tempting:**\n* B ($3$): returns $h$ instead of $k$.\n* C ($-8$): sign error.\n* D ($11$): adds $h + k$.\n\n**Test Day Takeaway:** Max/min of $a(x - h)^2 + k$ is $k$ (max if $a < 0$, min if $a > 0$).',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-maximum', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-396', domain: 'advanced-math', skills: ['converting-quadratic-forms'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What is the maximum value of $g(x) = -2(x + 1)^2 + 12$?',
    choices: [{ id: 'A', text: '$12$' }, { id: 'B', text: '$-2$' }, { id: 'C', text: '$1$' }, { id: 'D', text: '$10$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Vertex Form Maximum**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Downward parabola; max $= k = 12$.\n\n**Why the wrong answers are tempting:**\n* B/C: copies $a$ or $h$.\n* D: subtracts $a$ from $k$.\n\n**Test Day Takeaway:** The constant on the OUTSIDE of the squared term is the max/min value.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-maximum', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-397', domain: 'advanced-math', skills: ['converting-quadratic-forms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What is the maximum value of $y = -x^2 + 4x + 5$?',
    choices: [{ id: 'A', text: '$9$' }, { id: 'B', text: '$5$' }, { id: 'C', text: '$4$' }, { id: 'D', text: '$8$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Vertex Form Maximum**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Complete the square: $-(x^2 - 4x) + 5 = -(x - 2)^2 + 4 + 5 = -(x - 2)^2 + 9$. Max $= 9$.\n\n**Why the wrong answers are tempting:**\n* B ($5$): returns the constant from the original.\n* C ($4$): partial completion of the square.\n* D ($8$): mis-arithmetic.\n\n**Test Day Takeaway:** Convert to vertex form first when the equation is in standard form.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-maximum', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-398', domain: 'advanced-math', skills: ['converting-quadratic-forms'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = 10 - 3(x - 2)^2$. At what value of $x$ does $f$ attain its maximum?',
    choices: [{ id: 'A', text: '$2$' }, { id: 'B', text: '$10$' }, { id: 'C', text: '$-3$' }, { id: 'D', text: '$0$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Vertex Form Maximum**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Maximum at $x = h = 2$.\n\n**Why the wrong answers are tempting:**\n* B ($10$): returns the max value, not the location.\n* C ($-3$): the leading coefficient.\n* D ($0$): default.\n\n**Test Day Takeaway:** Max/min OCCURS at $x = h$; max/min VALUE is $k$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-maximum', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-399', domain: 'advanced-math', skills: ['converting-quadratic-forms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What is the maximum value of $y = -2x^2 + 8x - 3$?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$3$' }, { id: 'C', text: '$8$' }, { id: 'D', text: '$-3$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Vertex Form Maximum**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Vertex $x = -b/(2a) = -8/(-4) = 2$. $y = -2(4) + 16 - 3 = 5$.\n\n**Why the wrong answers are tempting:**\n* B ($3$): negates the constant.\n* C ($8$): copies $b$.\n* D ($-3$): copies the original constant.\n\n**Test Day Takeaway:** Use $x = -b/(2a)$ to find the vertex $x$, then plug back to get the max $y$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-maximum', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-400', domain: 'advanced-math', skills: ['converting-quadratic-forms'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The function $f(x) = a(x - 4)^2 + 11$ has maximum value $11$. If $f(0) = 2$, what is the value of $a$?',
    choices: [{ id: 'A', text: '$-\\dfrac{9}{16}$' }, { id: 'B', text: '$\\dfrac{9}{16}$' }, { id: 'C', text: '$-1$' }, { id: 'D', text: '$\\dfrac{2}{11}$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Vertex Form Maximum**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $f(0) = 16a + 11 = 2 \\Rightarrow 16a = -9 \\Rightarrow a = -9/16$.\n\n**Why the wrong answers are tempting:**\n* B: drops the negative sign.\n* C: rounds to $-1$.\n* D: random fraction.\n\n**Test Day Takeaway:** For a parabola with a maximum, $a < 0$; checking the sign is a useful sanity check.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-maximum', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- vieta-sum-product-of-roots (4 → 10) ---
  { id: 'bank-am-401', domain: 'advanced-math', skills: ['quadratic-factoring'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What is the sum of the solutions of the equation $x^2 - 7x + 12 = 0$?',
    choices: [{ id: 'A', text: '$7$' }, { id: 'B', text: '$12$' }, { id: 'C', text: '$-7$' }, { id: 'D', text: '$-12$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Vieta Sum & Product of Roots**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Sum of roots of $x^2 + bx + c = 0$ is $-b$. Here $-(-7) = 7$.\n\n**Why the wrong answers are tempting:**\n* B ($12$): product instead of sum.\n* C ($-7$): forgets to negate.\n* D ($-12$): negates the product.\n\n**Test Day Takeaway:** $x^2 + bx + c = 0$: sum $= -b$, product $= c$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vieta-sum-product-of-roots', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-402', domain: 'advanced-math', skills: ['quadratic-factoring'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What is the product of the solutions of the equation $x^2 - 3x - 10 = 0$?',
    choices: [{ id: 'A', text: '$-10$' }, { id: 'B', text: '$10$' }, { id: 'C', text: '$3$' }, { id: 'D', text: '$-3$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Vieta Sum & Product of Roots**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Product $= c = -10$.\n\n**Why the wrong answers are tempting:**\n* B: drops the sign.\n* C/D: sum (or its negative).\n\n**Test Day Takeaway:** For $x^2 + bx + c = 0$, product of roots equals the constant $c$ (with sign).',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vieta-sum-product-of-roots', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-403', domain: 'advanced-math', skills: ['quadratic-factoring'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What is the sum of the solutions of $2x^2 - 10x + 8 = 0$?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$10$' }, { id: 'C', text: '$4$' }, { id: 'D', text: '$-5$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Vieta Sum & Product of Roots**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Sum $= -b/a = -(-10)/2 = 5$.\n\n**Why the wrong answers are tempting:**\n* B ($10$): forgets to divide by $a$.\n* C ($4$): product instead.\n* D ($-5$): sign error.\n\n**Test Day Takeaway:** For $ax^2 + bx + c$: sum $= -b/a$, product $= c/a$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vieta-sum-product-of-roots', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-404', domain: 'advanced-math', skills: ['quadratic-factoring'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What is the product of the solutions of $3x^2 + 6x - 15 = 0$?',
    choices: [{ id: 'A', text: '$-5$' }, { id: 'B', text: '$-15$' }, { id: 'C', text: '$5$' }, { id: 'D', text: '$15$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Vieta Sum & Product of Roots**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Product $= c/a = -15/3 = -5$.\n\n**Why the wrong answers are tempting:**\n* B ($-15$): forgets to divide by $a$.\n* C ($5$): drops the sign.\n* D ($15$): drops the sign AND forgets to divide.\n\n**Test Day Takeaway:** Always divide by $a$ (leading coefficient) when $a \\neq 1$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vieta-sum-product-of-roots', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-405', domain: 'advanced-math', skills: ['quadratic-factoring'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The equation $x^2 + kx + 12 = 0$ has solutions $r$ and $s$ with $r + s = -7$. What is the value of $k$?',
    choices: [{ id: 'A', text: '$7$' }, { id: 'B', text: '$-7$' }, { id: 'C', text: '$12$' }, { id: 'D', text: '$-12$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Vieta Sum & Product of Roots**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Sum $= -k = -7 \\Rightarrow k = 7$.\n\n**Why the wrong answers are tempting:**\n* B: copies the sum without negating.\n* C/D: copies the constant.\n\n**Test Day Takeaway:** Negate the sum to find $k$ (the middle coefficient).',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vieta-sum-product-of-roots', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-am-406', domain: 'advanced-math', skills: ['quadratic-factoring'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The solutions of the equation $x^2 - bx + c = 0$ are $4$ and $9$. What is the value of $b + c$?',
    choices: [{ id: 'A', text: '$49$' }, { id: 'B', text: '$13$' }, { id: 'C', text: '$36$' }, { id: 'D', text: '$45$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Vieta Sum & Product of Roots**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Sum $= 4 + 9 = 13 = b$. Product $= 4 \\cdot 9 = 36 = c$. $b + c = 49$.\n\n**Why the wrong answers are tempting:**\n* B ($13$): returns just $b$.\n* C ($36$): returns just $c$.\n* D ($45$): mis-arithmetic.\n\n**Test Day Takeaway:** Sum of roots = $b$ (with sign flip from $-b$), product = $c$. Add them for $b + c$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vieta-sum-product-of-roots', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // === DIFFICULT-QUESTIONS PDF BATCH (2026-05-22) — 18 advanced-math items reskinned ===

  { id: 'bank-am-407', domain: 'advanced-math', skills: ['vertex-form', 'discriminant-analysis'], difficulty: 'hard', type: 'multiple-choice',
    question: 'In the $xy$-plane, the graph of the equation $y=-x^2+7x-80$ intersects the line $y=c$ at exactly one point. What is the value of $c$?',
    choices: [{ id: 'A', text: '$-\\dfrac{271}{4}$' }, { id: 'B', text: '$-80$' }, { id: 'C', text: '$-\\dfrac{49}{4}$' }, { id: 'D', text: '$-\\dfrac{7}{2}$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Horizontal Tangent to a Parabola (Max/Min)**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The line $y=c$ meets the parabola at one point exactly when $c$ equals the vertex $y$-value. Vertex $x=\\dfrac{7}{2}$; $y=-\\left(\\dfrac{7}{2}\\right)^2+7\\cdot\\dfrac{7}{2}-80=-\\dfrac{49}{4}+\\dfrac{49}{2}-80=-\\dfrac{271}{4}$.\n\n**Why the wrong answers are tempting:**\n* B: copies the constant from the equation.\n* C: gives $\\dfrac{b^2}{4a}$ without the constant term.\n* D: returns the $x$-coordinate of the vertex.\n\n**Test Day Takeaway:** "Intersects at exactly one point" with a horizontal line $\\Leftrightarrow$ $y=$ max/min of the parabola.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-maximum', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-am-408', domain: 'advanced-math', skills: ['exponential-growth-decay', 'exponential-y-intercept'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A model estimates that at the end of each year from $2017$ to $2022$, the number of deer in a population was $150\\%$ more than the number of deer in the population at the end of the previous year. The model estimates that at the end of $2018$, there were $200$ deer in the population. Which of the following equations represents this model, where $n$ is the estimated number of deer in the population $t$ years after the end of $2017$ and $t\\le 5$?',
    choices: [{ id: 'A', text: '$n = 80(1.5)^t$' }, { id: 'B', text: '$n = 80(2.5)^t$' }, { id: 'C', text: '$n = 200(1.5)^t$' }, { id: 'D', text: '$n = 200(2.5)^t$' }],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Build Exponential Growth Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** "$150\\%$ more" $=$ factor $2.5$. Starting point ($t=0$, end of $2017$): $n_0=\\dfrac{200}{2.5}=80$. So $n=80(2.5)^t$.\n\n**Why the wrong answers are tempting:**\n* A: uses $1.5$ (the $150\\%$ alone, not "$150\\%$ MORE").\n* C/D: uses $200$ as the initial value, ignoring that $200$ is the $t=1$ value.\n\n**Test Day Takeaway:** "$p\\%$ more" $=$ factor $1+p/100$. Anchor the initial value at the stated $t=0$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'build-exponential-model', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-am-409', domain: 'advanced-math', skills: ['discriminant-analysis', 'identify-quadratic'], difficulty: 'hard', type: 'fill-in',
    question: '$$y = -2.5$$\n$$y = x^2 + 10x + a$$\n\nIn the given system of equations, $a$ is a positive constant. The system has exactly one distinct real solution. What is the value of $a$?',
    correctAnswer: '22.5',
    explanation: '**SAT Pattern: Discriminant Equals Zero (System of Quadratic and Horizontal Line)**\n\n**The correct answer is $22.5$.**\n\n**The Fast Way (~30s):** Set $x^2+10x+a=-2.5\\Rightarrow x^2+10x+(a+2.5)=0$. Discriminant $=0$: $100-4(a+2.5)=0\\Rightarrow a+2.5=25\\Rightarrow a=22.5$.\n\n**Common Mistakes to Avoid:**\n* Forgetting to move the $-2.5$ to the left side before applying the discriminant.\n* Confusing the discriminant with the quadratic formula numerator.\n\n**Test Day Takeaway:** A parabola meets a horizontal line at exactly one point iff the merged quadratic has discriminant zero.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'discriminant-analysis', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-am-410', domain: 'advanced-math', skills: ['function-transformations'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x)=(x+8)(x+3)(x-5)$. Which of the following must be true about the values of $y=f(x)-4$ at $x=-8,\\,-3,\\,5$?',
    choices: [{ id: 'A', text: 'All three $y$-values equal $-12$.' }, { id: 'B', text: 'All three $y$-values equal $-4$.' }, { id: 'C', text: 'All three $y$-values equal $4$.' }, { id: 'D', text: 'The three $y$-values equal $-4$, $-3$, and $5$ respectively.' }],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Vertical Shift of a Polynomial**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** At each root of $f$ ($-8$, $-3$, $5$), $f(x)=0$, so $y=f(x)-4=-4$. All three values are $-4$.\n\n**Why the wrong answers are tempting:**\n* A: confuses the shift with separate adjustments per root.\n* C: shifts up instead of down.\n* D: reads off the root values themselves as $y$.\n\n**Test Day Takeaway:** A vertical shift $y=f(x)+k$ moves every output by exactly $k$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertical-shift', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-am-411', domain: 'advanced-math', skills: ['exponential-growth-decay', 'exponential-y-intercept'], difficulty: 'hard', type: 'multiple-choice',
    question: 'For the function $q$, the value of $q(x)$ decreases by $35\\%$ for every increase in the value of $x$ by $1$. If $q(0)=22$, which equation defines $q$?',
    choices: [{ id: 'A', text: '$q(x) = 0.65(22)^x$' }, { id: 'B', text: '$q(x) = 1.35(22)^x$' }, { id: 'C', text: '$q(x) = 22(0.65)^x$' }, { id: 'D', text: '$q(x) = 22(1.35)^x$' }],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Exponential Decay — Standard Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** "$35\\%$ decrease per unit" $=$ multiply by $0.65$ each step. With $q(0)=22$: $q(x)=22(0.65)^x$.\n\n**Why the wrong answers are tempting:**\n* A: swaps base and initial value.\n* B: uses $1.35$ as if growth.\n* D: uses growth factor for a decay model.\n\n**Test Day Takeaway:** Decay factor $=1-p/100$. Standard form: $a(b)^x$ with $a$ = initial, $b$ = ratio per step.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-decay-expression', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-am-412', domain: 'advanced-math', skills: ['exponent-laws', 'zero-negative-exponents'], difficulty: 'hard', type: 'fill-in',
    question: 'The expression $5\\sqrt[4]{2^4 x^{20}}\\cdot\\sqrt[6]{3^6 x}$ is equivalent to $ax^b$, where $a$ and $b$ are positive constants and $x>1$. What is the value of $a+b$?',
    correctAnswer: '211/6',
    explanation: '**SAT Pattern: Radical with Rational Exponents**\n\n**The correct answer is $\\dfrac{211}{6}$ (or $35.166$ as a decimal approximation).**\n\n**The Fast Way (~40s):** $\\sqrt[4]{2^4 x^{20}}=2x^5$ and $\\sqrt[6]{3^6 x}=3x^{1/6}$. Product: $5\\cdot 2\\cdot 3\\cdot x^{5+1/6}=30x^{31/6}$. So $a=30$, $b=\\dfrac{31}{6}$, $a+b=\\dfrac{180+31}{6}=\\dfrac{211}{6}$.\n\n**Common Mistakes to Avoid:**\n* Forgetting to pull out the integer coefficient out of the radical.\n* Adding the indices instead of combining exponents.\n\n**Test Day Takeaway:** $\\sqrt[n]{k^n\\cdot x^m}=k\\cdot x^{m/n}$. Convert to fractional exponents and add.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'exponent-rules-with-radicals', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-am-413', domain: 'advanced-math', skills: ['vertex-form', 'parabola-direction'], difficulty: 'hard', type: 'multiple-choice',
    question: 'In the $xy$-plane, a parabola has vertex $(8,\\,-20)$ and intersects the $x$-axis at two points. If the equation of the parabola is written in the form $y=ax^2+bx+c$, where $a$, $b$, and $c$ are constants, which of the following could be the value of $a+b+c$?',
    choices: [{ id: 'A', text: '$-25$' }, { id: 'B', text: '$-22$' }, { id: 'C', text: '$-20$' }, { id: 'D', text: '$-18$' }],
    correctAnswer: 'D',
    explanation: '**SAT Pattern: Vertex + Sign-of-Coefficient Reasoning**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** Vertex below the $x$-axis $+$ two $x$-intercepts $\\Rightarrow$ parabola opens upward $\\Rightarrow a>0$. Then $a+b+c=y(1)=a(1-8)^2-20=49a-20>-20$. Only $-18$ is greater than $-20$.\n\n**Why the wrong answers are tempting:**\n* A: forgets the inequality direction.\n* B: treats the bound as soft (uses $-20$ as if exact).\n* C: copies the vertex $y$-value directly.\n\n**Test Day Takeaway:** Vertex form + sign of $a$ + a single evaluation $y(1)$ gives $a+b+c$. The two-$x$-intercept constraint fixes the sign of $a$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-application', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-am-414', domain: 'advanced-math', skills: ['exponential-growth-decay', 'exponential-y-intercept'], difficulty: 'hard', type: 'fill-in',
    question: 'The function $f$ is defined by $f(x)=-a^x+b$, where $a$ and $b$ are constants. In the $xy$-plane, the graph of $y=f(x)-10$ has a $y$-intercept at $\\left(0,\\,-\\dfrac{59}{6}\\right)$. The product of $a$ and $b$ is $7$. What is the value of $a$?',
    correctAnswer: '6',
    explanation: '**SAT Pattern: Exponential Shifted Form — Recover Base**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~50s):** $y$-intercept at $-\\dfrac{59}{6}$: $f(0)-10=-\\dfrac{59}{6}\\Rightarrow f(0)=-\\dfrac{59}{6}+\\dfrac{60}{6}=\\dfrac{1}{6}$. But $f(0)=-1+b$, so $b=\\dfrac{7}{6}$. With $ab=7$: $a=\\dfrac{7}{7/6}=6$.\n\n**Common Mistakes to Avoid:**\n* Forgetting that $a^0=1$ (not $0$) inside $-a^x+b$.\n* Sign error when adding $10$ to $-\\dfrac{59}{6}$.\n\n**Test Day Takeaway:** Plug $x=0$ to recover one constant, then use the product to recover the other.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'interpret-exponential-parameters', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-am-415', domain: 'advanced-math', skills: ['finding-roots-factoring', 'roots-from-factors'], difficulty: 'hard', type: 'fill-in',
    question: 'The function $g$ is defined by $g(x)=x(x-3)(x+5)^2$. The value of $g(9-w)$ is $0$, where $w$ is a constant. What is the sum of all possible values of $w$?',
    correctAnswer: '29',
    explanation: '**SAT Pattern: Sum of Roots via Input Shift**\n\n**The correct answer is $29$.**\n\n**The Fast Way (~30s):** $g$ has roots $0$, $3$, $-5$. Set $9-w\\in\\{0,3,-5\\}\\Rightarrow w\\in\\{9,6,14\\}$. Sum $=9+6+14=29$.\n\n**Common Mistakes to Avoid:**\n* Forgetting the $-5$ root from the squared factor (it still counts once as a distinct value of $w$).\n* Solving $9-w=...$ with sign errors.\n\n**Test Day Takeaway:** For $g(c-w)=0$, find the roots of $g$ and back-solve $c-w$ to each root. Multiplicity does not create new $w$-values.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'roots-from-factors', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-am-416', domain: 'advanced-math', skills: ['percent-change', 'percent-word-problems'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The result of increasing the quantity $x$ by $350\\%$ is $90$. What is the value of $x$?',
    choices: [{ id: 'A', text: '$20$' }, { id: 'B', text: '$25.7$' }, { id: 'C', text: '$315$' }, { id: 'D', text: '$405$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Reverse Percent Increase**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $4.5x=90\\Rightarrow x=20$.\n\n**Why the wrong answers are tempting:**\n* B: divides by $3.5$ (forgets the $+1$).\n* C: $90\\cdot 3.5$.\n* D: $90\\cdot 4.5$.\n\n**Test Day Takeaway:** "Increase by $p\\%$" $=$ multiply by $1+p/100$. Reverse: divide.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'reverse-percent', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-am-417', domain: 'advanced-math', skills: ['exponential-growth-decay', 'exponent-laws'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The function $P$ is defined by $P(t)=380(1.05)^{(8/6)t}$ and models the population, in thousands, of a certain city $t$ years after $2005$. According to the model, the population is predicted to increase by $5\\%$ every $n$ months. What is the value of $n$?',
    choices: [{ id: 'A', text: '$9$' }, { id: 'B', text: '$12$' }, { id: 'C', text: '$16$' }, { id: 'D', text: '$72$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Period of Exponential Growth — Months Interpretation**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The exponent $\\dfrac{8t}{6}$ increases by $1$ when $t$ increases by $\\dfrac{6}{8}=\\dfrac{3}{4}$ year $=9$ months.\n\n**Why the wrong answers are tempting:**\n* B: forgets the fractional exponent (uses $1$ year $=12$ months).\n* C/D: misreads $6/8$ as $8/6$ or as a count of years.\n\n**Test Day Takeaway:** In $(1+r)^{kt}$, one full multiplication by $(1+r)$ happens whenever $kt$ advances by $1$, i.e., $t$ advances by $1/k$.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'interpret-exponential-parameters', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-am-418', domain: 'advanced-math', skills: ['vertex-form', 'converting-quadratic-forms'], difficulty: 'hard', type: 'fill-in',
    question: 'The graph of $y=3x^2+bx+c$ has a vertex at $(-2,\\,-10)$, where $b$ and $c$ are constants. What is the value of $bc$?',
    correctAnswer: '24',
    explanation: '**SAT Pattern: Vertex Form to Standard Form — Recover Coefficients**\n\n**The correct answer is $24$.**\n\n**The Fast Way (~40s):** $y=3(x+2)^2-10=3x^2+12x+12-10=3x^2+12x+2$. So $b=12$, $c=2$, $bc=24$.\n\n**Common Mistakes to Avoid:**\n* Forgetting to multiply the perfect-square expansion by the leading $3$.\n* Sign error: $(x-(-2))^2$ vs $(x+2)^2$.\n\n**Test Day Takeaway:** Vertex form to standard: expand $(x-h)^2$, distribute $a$, then add $k$ to the constant.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-to-standard-form', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-am-419', domain: 'advanced-math', skills: ['exponential-growth-decay', 'exponential-y-intercept'], difficulty: 'hard', type: 'multiple-choice',
    question: 'At the time that an article was first featured on the home page of a news website, there were $60$ reviews on the article. An exponential model estimates that at the end of each hour after the article was first featured on the home page, the number of reviews on the article had increased by $220\\%$ of the number of reviews on the article at the end of the previous hour. Which of the following equations best represents this model, where $C$ is the estimated number of reviews on the article $t$ hours after the article was first featured on the home page and $t\\le 4$?',
    choices: [{ id: 'A', text: '$C = 60(1.22)^t$' }, { id: 'B', text: '$C = 60(2.2)^t$' }, { id: 'C', text: '$C = 60(22)^t$' }, { id: 'D', text: '$C = 60(3.2)^t$' }],
    correctAnswer: 'D',
    explanation: '**SAT Pattern: Build Exponential Growth — "$p\\%$ More" Trap**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** "$220\\%$ more" $=$ factor $1+2.2=3.2$. With $C_0=60$: $C=60(3.2)^t$.\n\n**Why the wrong answers are tempting:**\n* A: misreads "$220\\%$" as "$22\\%$".\n* B: uses $2.2$ (the percent alone, not "$220\\%$ MORE").\n* C: confuses the percent with the base.\n\n**Test Day Takeaway:** "$p\\%$ more" $=1+p/100$. Read the percent carefully — a percent above $100$ still adds $1$ to the factor.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'build-exponential-model', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-am-420', domain: 'advanced-math', skills: ['exponent-laws', 'exponential-growth-decay'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x)=(1.62)^{x/3}$. The equation can be rewritten as $f(x)=\\left(1+\\dfrac{p}{100}\\right)^x$, where $p$ is a constant. Which of the following is closest to the value of $p$?',
    choices: [{ id: 'A', text: '$17$' }, { id: 'B', text: '$21$' }, { id: 'C', text: '$54$' }, { id: 'D', text: '$62$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Rewriting Exponential Form — Equivalent Rate**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** $(1.62)^{x/3}=\\left((1.62)^{1/3}\\right)^x$. $(1.62)^{1/3}\\approx 1.174$, so $1+p/100\\approx 1.174\\Rightarrow p\\approx 17$.\n\n**Why the wrong answers are tempting:**\n* B: estimates cube root too high.\n* C: divides $62$ by some wrong factor.\n* D: forgets the $/3$ in the exponent.\n\n**Test Day Takeaway:** $a^{x/k}=(a^{1/k})^x$. Use a calculator for the $k$-th root.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'interpret-exponential-parameters', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-am-421', domain: 'advanced-math', skills: ['discriminant-analysis', 'identify-quadratic'], difficulty: 'hard', type: 'fill-in',
    question: '$$3x^2 - 10x - 6 = 0$$\n\nOne solution to the given equation can be written as $\\dfrac{10-\\sqrt{k}}{6}$, where $k$ is a constant. What is the value of $k$?',
    correctAnswer: '172',
    explanation: '**SAT Pattern: Quadratic Formula — Discriminant Recovery**\n\n**The correct answer is $172$.**\n\n**The Fast Way (~25s):** Quadratic formula: $x=\\dfrac{10\\pm\\sqrt{100-4(3)(-6)}}{6}=\\dfrac{10\\pm\\sqrt{172}}{6}$. So $k=172$.\n\n**Common Mistakes to Avoid:**\n* Sign error in $-4ac$ when $c$ is negative.\n* Using $2a=3$ instead of $6$ in the denominator.\n\n**Test Day Takeaway:** Quadratic formula $\\Rightarrow$ the radicand is the discriminant $b^2-4ac$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'discriminant-compute', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-am-422', domain: 'advanced-math', skills: ['simplifying-rational-expressions'], difficulty: 'hard', type: 'multiple-choice',
    question: '$$\\dfrac{x^2}{\\sqrt{x^2-c^2}}=\\dfrac{c^2}{\\sqrt{x^2-c^2}}+42$$\n\nIn the given equation, $c$ is a positive constant. Which of the following is one of the solutions to the given equation?',
    choices: [{ id: 'A', text: '$-c$' }, { id: 'B', text: '$-c^2 - 42^2$' }, { id: 'C', text: '$-\\sqrt{42^2 - c^2}$' }, { id: 'D', text: '$-\\sqrt{c^2 + 42^2}$' }],
    correctAnswer: 'D',
    explanation: '**SAT Pattern: Radical Equation — Extraneous Filter**\n\n**Choice D is correct.**\n\n**The Fast Way (~50s):** Multiply both sides by $\\sqrt{x^2-c^2}$: $x^2-c^2=42\\sqrt{x^2-c^2}$. Let $u=\\sqrt{x^2-c^2}\\ge 0$: $u^2=42u\\Rightarrow u(u-42)=0$. Discard $u=0$ (denominator blows up). So $u=42\\Rightarrow x^2-c^2=42^2\\Rightarrow x=\\pm\\sqrt{c^2+42^2}$.\n\n**Why the wrong answers are tempting:**\n* A: would force $x^2-c^2=0$, breaking the domain.\n* B: confuses $x^2$ with $x$.\n* C: sign error inside the radical.\n\n**Test Day Takeaway:** Substitute $u=\\sqrt{\\cdot}$ to linearize; then domain-filter $u\\ge 0$ and the denominator constraint.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'rational-equation-with-extraneous-solution', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-am-423', domain: 'advanced-math', skills: ['finding-roots-factoring', 'roots-from-factors'], difficulty: 'hard', type: 'multiple-choice',
    question: 'Which of the following expressions has a factor of $x+3b$, where $b$ is a positive integer constant?',
    choices: [{ id: 'A', text: '$4x^2 + 14x + 12b$' }, { id: 'B', text: '$4x^2 + 22x + 12b$' }, { id: 'C', text: '$4x^2 + 30x + 12b$' }, { id: 'D', text: '$4x^2 + 40x + 12b$' }],
    correctAnswer: 'D',
    explanation: '**SAT Pattern: Factor with Parameter — Integer Constraint**\n\n**Choice D is correct.**\n\n**The Fast Way (~45s):** If $(x+3b)$ is a factor of $4x^2+Mx+12b$, the other factor must be $(4x+4)$ to give constant $12b$, giving middle term $(4+12b)x$. Match: $4+12b=M\\Rightarrow b=\\dfrac{M-4}{12}$. Only $M=40$ gives an integer: $b=3$.\n\n**Why the wrong answers are tempting:**\n* A: $b=10/12$ (not integer).\n* B: $b=18/12=3/2$ (not integer).\n* C: $b=26/12=13/6$ (not integer).\n\n**Test Day Takeaway:** Use the structure $(x+3b)(\\text{linear})$ to match constant and middle, then enforce the integer constraint on $b$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'polynomial-remainder-theorem', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-am-424', domain: 'advanced-math', skills: ['vertex-form', 'finding-function-from-conditions'], difficulty: 'hard', type: 'fill-in',
    question: 'The quadratic function $g$ models the depth, in meters, below the surface of the water of a seal $t$ minutes after the seal entered the water during a dive. The function estimates that the seal reached its maximum depth of $384$ meters $8$ minutes after it entered the water and then reached the surface of the water $16$ minutes after it entered the water. Based on the function, what was the estimated depth, to the nearest meter, of the seal $12$ minutes after it entered the water?',
    correctAnswer: '288',
    explanation: '**SAT Pattern: Quadratic Model from Vertex + Zero**\n\n**The correct answer is $288$.**\n\n**The Fast Way (~50s):** $g(t)=a(t-8)^2+384$. Surface ($g=0$) at $t=16$: $a(64)+384=0\\Rightarrow a=-6$. So $g(12)=-6(4)^2+384=-96+384=288$.\n\n**Common Mistakes to Avoid:**\n* Picking $a$ positive (the parabola models depth INCREASING then decreasing — coefficient is negative when $g=$ depth below surface).\n* Mis-computing $(12-8)^2=16$ as $8$.\n\n**Test Day Takeaway:** Vertex form $a(t-h)^2+k$; use the second condition (zero) to solve for $a$.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'vertex-form-from-two-conditions', authoredBy: 'performsat-engine', createdAt: '2026-05-22' }
];
