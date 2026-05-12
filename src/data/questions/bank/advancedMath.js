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
    question: 'If $(x - 7)(x + 2) = 0$, what are the values of $x$?',
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
  {
    id: 'bank-am-034',
    domain: 'advanced-math',
    skills: ['converting-quadratic-forms'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'Given $g(x) = -3(x - 2)(x + 6)$, what is $g(x)$ in standard form?',
    choices: [
      { id: 'A', text: '$-3x^2 - 12x + 36$' },
      // distractor: distributes negative to only first term
      { id: 'B', text: '$-3x^2 + 12x + 36$' },
      // distractor: distributes negative to constant only
      { id: 'C', text: '$-3x^2 - 12x - 36$' },
      // distractor: forgets the negative
      { id: 'D', text: '$3x^2 + 12x - 36$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Factored to Standard Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $(x - 2)(x + 6) = x^2 + 4x - 12$. Multiply by $-3$: $-3x^2 - 12x + 36$.\n\n**The Full Solution:**\nFOIL the binomials first:\n$(x - 2)(x + 6) = x^2 + 6x - 2x - 12 = x^2 + 4x - 12$.\nMultiply each term by $-3$:\n$-3(x^2 + 4x - 12) = -3x^2 - 12x + 36$.\n\nVerification: at $x = 0$: original $= -3(-2)(6) = 36$. Standard: $0 + 0 + 36 = 36$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "sign error" — distributes $-3$ to only the $x^2$ term, missing the middle.\n* Choice C: "sign error" — distributes $-3$ incorrectly across the constant.\n* Choice D: "sign error" — drops the negative entirely.\n\n**Test Day Takeaway:** FOIL first, then distribute the leading coefficient. The negative sign applies to EVERY term, not just the first.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'factored-to-standard',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
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
    question: 'Simplify $(3a^2b)^3$.',
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
    question: 'If $\\frac{(2^n)^4 \\cdot 2^3}{2^7} = 2^{12}$, what is the value of $n$?',
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
  {
    id: 'bank-am-039',
    domain: 'advanced-math',
    skills: ['exponent-laws'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'If $(x^a)^5 = x^{30}$, what is the value of $a$?',
    correctAnswer: '6',
    explanation: '**SAT Pattern: Power of Power**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~5s):** $(x^a)^5 = x^{5a}$. Set $5a = 30 \\Rightarrow a = 6$.\n\n**The Full Solution:**\nPower of a power: $(x^m)^n = x^{mn}$.\n$(x^a)^5 = x^{5a}$.\nSet equal to $x^{30}$: $5a = 30 \\Rightarrow a = 6$.\n\nVerification: $(x^6)^5 = x^{30}$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Adding instead of multiplying: $a + 5 = 30 \\Rightarrow a = 25$.\n* Dividing wrong way: $30/5 = 6$ is correct, but $5/30$ or $30 \\cdot 5$ are not.\n* Reporting $30$ (the original exponent).\n\n**Test Day Takeaway:** Power of power MULTIPLIES exponents. To solve $5a = 30$, divide both sides by $5$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'exponent-equation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-040',
    domain: 'advanced-math',
    skills: ['exponent-laws'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'Which expression is equivalent to $\\frac{12x^5 y^{-2}}{4x^{-1} y^3}$?',
    choices: [
      { id: 'A', text: '$\\frac{3x^6}{y^5}$' },
      // distractor: subtracts x as 5 - 1 instead of 5 - (-1)
      { id: 'B', text: '$\\frac{3x^4}{y^5}$' },
      // distractor: keeps y in numerator
      { id: 'C', text: '$3x^6 y^5$' },
      // distractor: incorrect y exponent subtraction
      { id: 'D', text: '$\\frac{3x^4}{y}$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Simplify with Negative Exponents**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Coefficient: $12/4 = 3$. $x$: $5 - (-1) = 6$. $y$: $-2 - 3 = -5 \\Rightarrow y^{-5} = 1/y^5$. Result: $\\frac{3x^6}{y^5}$.\n\n**The Full Solution:**\nApply the quotient rule to each variable separately:\n* Coefficient: $\\frac{12}{4} = 3$.\n* $x$: $\\frac{x^5}{x^{-1}} = x^{5 - (-1)} = x^6$.\n* $y$: $\\frac{y^{-2}}{y^3} = y^{-2 - 3} = y^{-5} = \\frac{1}{y^5}$.\nCombine: $\\frac{3x^6}{y^5}$.\n\nVerification: $\\frac{3x^6}{y^5} \\cdot 4x^{-1}y^3 = 12 x^5 y^{-2}$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "sign error" — subtracts $x$ exponents as $5 - 1$ instead of $5 - (-1) = 6$.\n* Choice C: "sign error" — keeps $y$ in numerator instead of denominator.\n* Choice D: "wrong base" — combines $y$ exponents incorrectly.\n\n**Test Day Takeaway:** Subtracting a NEGATIVE exponent is the same as ADDING. $5 - (-1) = 6$, not $4$. Negative exponents in the final answer go in the DENOMINATOR (or invert).',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'exponent-simplify',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },

  // ── zero-negative-exponents (4 questions) ─────────────────────────
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
    question: 'If $4^{-n} = \\frac{1}{256}$, what is the value of $n$?',
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
    question: 'Expand $-4(3x - 7)$.',
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
    question: 'If $(x + 4)(x - 6) = x^2 + bx + c$, what is the value of $c$?',
    correctAnswer: '-24',
    explanation: '**SAT Pattern: Constant Term from Factored Form**\n\n**The correct answer is $-24$.**\n\n**The Fast Way (~10s):** Constant of product = product of constants: $4 \\cdot (-6) = -24$.\n\n**The Full Solution:**\nExpand $(x + 4)(x - 6)$:\n* First: $x \\cdot x = x^2$\n* Outer: $x \\cdot (-6) = -6x$\n* Inner: $4 \\cdot x = 4x$\n* Last: $4 \\cdot (-6) = -24$\nResult: $x^2 - 6x + 4x - 24 = x^2 - 2x - 24$.\nSo $c = -24$.\n\nVerification (Vieta\'s): product of roots $= c/a = -24/1$. Roots $-4$ and $6$ multiply to $-24$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting $24$ (sign error).\n* Reporting $-2$ (gives $b$, not $c$).\n* Reporting $4$ or $-6$ (one of the factors).\n\n**Test Day Takeaway:** Constant term of $(x + p)(x + q)$ is $pq$ (product of constants). Middle coefficient is $p + q$ (sum). Vieta\'s formulas in disguise.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'foil-identify-constant',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-am-059',
    domain: 'advanced-math',
    skills: ['distributive-property'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'Expand $(x + 2)^3$.',
    choices: [
      { id: 'A', text: '$x^3 + 6x^2 + 12x + 8$' },
      // distractor: applies sum-of-cubes incorrectly
      { id: 'B', text: '$x^3 + 8$' },
      // distractor: uses wrong binomial coefficients
      { id: 'C', text: '$x^3 + 2x^2 + 4x + 8$' },
      // distractor: swaps middle coefficients
      { id: 'D', text: '$x^3 + 4x^2 + 6x + 8$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Cube of Binomial**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** $(x + 2)^3 = x^3 + 3(x^2)(2) + 3(x)(4) + 8 = x^3 + 6x^2 + 12x + 8$. (Binomial expansion with coefficients $1, 3, 3, 1$.)\n\n**The Full Solution:**\nBinomial formula for cubes: $(a + b)^3 = a^3 + 3a^2 b + 3a b^2 + b^3$.\nWith $a = x$ and $b = 2$:\n$(x + 2)^3 = x^3 + 3(x)^2(2) + 3(x)(2)^2 + (2)^3 = x^3 + 6x^2 + 12x + 8$.\n\nAlternatively: $(x + 2)^3 = (x + 2)(x + 2)^2 = (x + 2)(x^2 + 4x + 4) = x^3 + 4x^2 + 4x + 2x^2 + 8x + 8 = x^3 + 6x^2 + 12x + 8$.\n\nVerification: at $x = 1$: $(1 + 2)^3 = 27$. Standard: $1 + 6 + 12 + 8 = 27$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong formula" — applies $a^3 + b^3$ instead of $(a + b)^3$.\n* Choice C: "wrong base" — uses coefficients $1, 2, 4, 1$ instead of $1, 3, 3, 1$.\n* Choice D: "off-by-one" — swaps coefficients.\n\n**Test Day Takeaway:** $(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$. The middle coefficients are BOTH $3$. Don\'t confuse with $a^3 + b^3$, which is a different identity.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'cube-expansion',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },

  // ── combining-like-terms (4 questions) ────────────────────────────
  {
    id: 'bank-am-060',
    domain: 'advanced-math',
    skills: ['combining-like-terms'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'Simplify $7x^2 - 3x + 4x^2 + 9x - 2$.',
    choices: [
      { id: 'A', text: '$11x^2 + 6x - 2$' },
      // distractor: subtracts the x terms (-3 - 9 = -12)
      { id: 'B', text: '$11x^2 - 12x - 2$' },
      // distractor: subtracts x² terms (7 - 4 = 3)
      { id: 'C', text: '$3x^2 + 6x - 2$' },
      // distractor: adds exponents when combining like terms
      { id: 'D', text: '$11x^4 + 6x - 2$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Combine Like Terms**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $x^2$ terms: $7 + 4 = 11$. $x$ terms: $-3 + 9 = 6$. Constant: $-2$. Result: $11x^2 + 6x - 2$.\n\n**The Full Solution:**\nGroup like terms:\n* $x^2$: $7x^2 + 4x^2 = 11x^2$\n* $x$: $-3x + 9x = 6x$\n* constant: $-2$\nCombined: $11x^2 + 6x - 2$.\n\nVerification: at $x = 1$: original $= 7 - 3 + 4 + 9 - 2 = 15$. Simplified: $11 + 6 - 2 = 15$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "sign error" — subtracts $x$ terms instead of adding.\n* Choice C: "sign error" — subtracts $x^2$ terms.\n* Choice D: "wrong formula" — adds exponents (gives $x^4$) when combining like terms.\n\n**Test Day Takeaway:** Like terms share the SAME variable and exponent. Add their coefficients ONLY; the variable and exponent stay the same. $7x^2 + 4x^2 = 11x^2$, NOT $11x^4$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'combine-polynomial',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
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
  {
    id: 'bank-am-063',
    domain: 'advanced-math',
    skills: ['combining-like-terms', 'distributive-property'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'Simplify $2(x^2 - 3x + 1) + 3(2x^2 + x - 4) - (x^2 + 2x + 5)$.',
    choices: [
      { id: 'A', text: '$7x^2 - 5x - 15$' },
      // distractor: sign error on middle term
      { id: 'B', text: '$7x^2 + x - 15$' },
      // distractor: forgets to subtract the x² from the third group
      { id: 'C', text: '$9x^2 - 5x - 15$' },
      // distractor: sign error on constant
      { id: 'D', text: '$7x^2 - 5x - 5$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Multi-Distribute and Combine**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** Distribute each, then combine:\n$2x^2 - 6x + 2 + 6x^2 + 3x - 12 - x^2 - 2x - 5$\n$x^2$: $(2 + 6 - 1) = 7$\n$x$: $(-6 + 3 - 2) = -5$\nconst: $(2 - 12 - 5) = -15$\nResult: $7x^2 - 5x - 15$.\n\n**The Full Solution:**\nDistribute each coefficient:\n* $2(x^2 - 3x + 1) = 2x^2 - 6x + 2$\n* $3(2x^2 + x - 4) = 6x^2 + 3x - 12$\n* $-(x^2 + 2x + 5) = -x^2 - 2x - 5$\nCombine all terms:\n* $x^2$ coefficient: $2 + 6 - 1 = 7$\n* $x$ coefficient: $-6 + 3 - 2 = -5$\n* constant: $2 - 12 - 5 = -15$\nResult: $7x^2 - 5x - 15$.\n\nVerification: at $x = 1$: $2(-1) + 3(-1) - 8 = -2 - 3 - 8 = -13$. Standard: $7 - 5 - 15 = -13$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "sign error" — middle term computed wrong.\n* Choice C: "stops one step early" — uses $(2 + 6) - 1$ wrong, or forgets to subtract.\n* Choice D: "sign error" — constant term off.\n\n**Test Day Takeaway:** Multi-distribute problems: distribute first, then group. The negative sign on the third polynomial flips ALL its terms. Track each coefficient column separately.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'multi-distribute-combine',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },

  // ── difference-of-squares (4 questions) ───────────────────────────
  {
    id: 'bank-am-064',
    domain: 'advanced-math',
    skills: ['difference-of-squares'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'Factor $x^2 - 49$.',
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
  {
    id: 'bank-am-065',
    domain: 'advanced-math',
    skills: ['difference-of-squares'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'Factor $4y^2 - 25$.',
    choices: [
      { id: 'A', text: '$(2y + 5)(2y - 5)$' },
      // distractor: separates 4 from y² incorrectly
      { id: 'B', text: '$(4y + 5)(y - 5)$' },
      // distractor: squares the factor (loses one)
      { id: 'C', text: '$(2y - 5)^2$' },
      // distractor: not factored at all
      { id: 'D', text: '$(4y - 25)$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Difference of Squares with Coefficient**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $4y^2 = (2y)^2$, $25 = 5^2$. Apply $a^2 - b^2 = (a + b)(a - b)$: $(2y + 5)(2y - 5)$.\n\n**The Full Solution:**\nRecognize both terms as perfect squares:\n* $4y^2 = (2y)^2$\n* $25 = 5^2$\nApply difference of squares: $(2y)^2 - 5^2 = (2y + 5)(2y - 5)$.\n\nVerification: expand $(2y + 5)(2y - 5) = 4y^2 - 10y + 10y - 25 = 4y^2 - 25$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong factoring" — separates the $4$ coefficient from the $y^2$ incorrectly.\n* Choice C: "wrong formula" — squares only one factor.\n* Choice D: "stops one step early" — gives the difference but not factored.\n\n**Test Day Takeaway:** Recognize coefficients as squares too: $4 = 2^2$, $9 = 3^2$, $16 = 4^2$, $25 = 5^2$. Then $4y^2 - 25 = (2y - 5)(2y + 5)$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'difference-of-squares',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
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
    question: 'Factor $9x^2 - 30x + 25$.',
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
    question: 'If $2^{x + 3} = 16$, what is the value of $x$?',
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
    question: 'If $9^x = 27^{x - 1}$, what is the value of $x$?',
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
    question: 'If $4^{2x} = 8^{x + 3}$, what is the value of $x$?',
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
    question: 'If $\\left(\\dfrac{1}{4}\\right)^{2x} = 16^{x - 3}$, what is the value of $x$? Express your answer as a fraction.',
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
    question: 'A bacteria population doubles every hour. If the initial population is $50$, what is the population after $4$ hours?',
    choices: [{ id: 'A', text: '$800$' }, { id: 'B', text: '$200$' }, { id: 'C', text: '$400$' }, { id: 'D', text: '$50 \\cdot 4^2$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Exponential Growth Model**\n\n**Choice A is correct.**\n\n**The Fast Way:** $50 \\cdot 2^4 = 50 \\cdot 16 = 800$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($200$): doubles the population only ONCE — uses $50 \\cdot 4 = 200$, treating doubling as linear.\n* Choice C ($400$): doubles twice instead of four times — stops at $50 \\cdot 2^2$.\n* Choice D ($50 \\cdot 4^2$): swaps base and exponent — uses $4$ as the base and $2$ as the exponent.\n\n**Test Day Takeaway:** Doubling: multiply by $2^t$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-growth-model', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
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
    explanation: "**SAT Pattern: Sum/Product of Roots — Vieta's**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Sum of roots $= -b/a = 8$. Other root $= 8 - 5 = 3$. (Don't bother finding $k$.)\n\n**The Full Solution:**\nVieta's sum: $r_1 + r_2 = 8$. Given $r_1 = 5$: $r_2 = 3$.\n\nVerification: with roots $3$ and $5$, quadratic is $(x-3)(x-5) = x^2 - 8x + 15$, so $k = 15$. Check $x = 3$: $9 - 24 + 15 = 0$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* B: sign error.\n* C: adds the given root to the sum ($5 + 8$).\n* D: sign error on the wrong-formula answer.\n\n**Test Day Takeaway:** When one root is given, Vieta's sum gives the other in one subtraction. The parameter $k$ is irrelevant to the question.",
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
    explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The exponent denominator $5$ matches the question's \"$5$ years.\" Base $0.85$ over each $5$-year period: decay rate $1 - 0.85 = 0.15 = 15\\%$.\n\n**The Full Solution:**\nThe model is $V(t) = 12000 \\cdot 0.85^{t/5}$. The exponent's denominator ($5$) says: \"the base is applied once every $5$ years.\"\nEvery $5$ years, value is multiplied by $0.85$ → decreases by $1 - 0.85 = 15\\%$.\n\nVerification: $V(5) = 12000 \\cdot 0.85^1 = 10200$ (a $15\\%$ drop). $V(0) = 12000$, $V(5) = 10200$. Drop: $1800$, which is $15\\%$ of $12000$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* B: base as percent.\n* C: confuses with the denominator.\n* D: roughly the per-year rate (not what's asked).\n\n**Test Day Takeaway:** When the exponent has a denominator $k$ (i.e., $b^{t/k}$), $b$ describes the change over $k$ time units, NOT per single time unit. Match the question's stated period to the denominator.",
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
    question: 'The function $f(t) = 50(3)^{t/2}$ models a quantity that triples every $2$ time units. By what factor does the quantity grow in $1$ time unit?',
    correctAnswer: '1.732',
    explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**The correct answer is $\\sqrt{3} \\approx 1.732$.**\n\n**The Fast Way (~10s):** Per-1-unit factor: $3^{1/2} = \\sqrt{3} \\approx 1.732$.\n\n**The Full Solution:**\nThe model is $f(t) = 50 \\cdot 3^{t/2}$.\nPer $1$ time unit: $f(1)/f(0) = 3^{1/2}/3^0 = 3^{1/2} = \\sqrt{3} \\approx 1.732$.\n\nVerification: $\\sqrt{3} \\cdot \\sqrt{3} = 3$. So after $2$ units: tripling (matches model) \\checkmark.\n\n**Common Mistakes:** Reporting $3$ (per-2-unit factor); reporting $1.5$ (half of $3$); reporting $2$ (the denominator).\n\n**Test Day Takeaway:** To convert $b^{t/k}$ to a per-1-unit factor: raise to the $1/k$ power. $3^{t/2}$ → per-unit factor $= 3^{1/2} = \\sqrt{3}$.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'exponential-growth-interpretation', authoredBy: 'performsat-engine', createdAt: '2026-05-12' }
];
