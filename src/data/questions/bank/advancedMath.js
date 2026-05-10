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
];
