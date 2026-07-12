/**
 * Learn chapter body — Radicals, Rationals & Hidden Quadratics (Advanced Math).
 *
 * Teach-from-zero textbook chapter following the locked template
 * (docs/LEARN_TEXTBOOK_OVERHAUL_PLAN.md): roadmap → Stage 1 foundations →
 * Stage 2 numbered techniques (technique → right → wrong → why) → Stage 3
 * on-the-test (decision flow, traps, worked examples, checkpoints, summary).
 * Voice reference: bodies/boundaries.js (the approved template exemplar).
 * Concept source: knowledge/graph/math (extraneous-solutions-non-reversible-moves,
 * radical-simplification-principal-root, negative-fractional-exponents,
 * chunking-repeated-structure, remainder-as-evaluation,
 * line-parabola-intersections, cancellation-legality, desmos-decision-framework).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const nonlinearEquationsBlocks = [
  {
    type: 'text',
    content: 'Past the straight quadratics, the digital SAT poses equations with a square root over the variable, a fraction with the variable in the denominator, a quartic that is secretly a quadratic, or a polynomial handed to you through a division. They look like four different problems. They are four techniques plus **one habit** — checking your answer in the original equation — because the moves that solve them can quietly invent fake solutions or erase real ones.',
  },
  {
    type: 'steps',
    title: 'How this chapter is built',
    items: [
      '**Stage 1 · Foundations.** What a radical really means, how fractional and negative exponents read, and when cancelling in a fraction is legal.',
      '**Stage 2 · The techniques.** Six numbered techniques, each in the same shape: the technique, a right example, a wrong example, and the why.',
      '**Stage 3 · On the test.** A decision flow, the traps the test sets, worked examples, and a one-page summary.',
    ],
  },

  // ── Stage 1 · Foundations ──────────────────────────────────────────────
  { type: 'heading', content: 'Stage 1 · Radicals, exponents, and legal cancelling' },
  {
    type: 'text',
    content: 'A square root is a **one-way arrow to the non-negative value**. $\\sqrt{9}$ is $3$, never $\\pm 3$ — the symbol itself points one direction. The $\\pm$ that students remember belongs to the *solving* step, where undoing a square produces two candidates; it never lives inside the symbol. Keeping those apart is what stops half the errors in this chapter.',
  },
  {
    type: 'text',
    content: 'To **simplify** a radical, pull out factors in pairs: $\\sqrt{50} = \\sqrt{25 \\cdot 2} = 5\\sqrt{2}$, because the pair of $5$s under the root walks out as a single $5$. Find the largest perfect-square factor and lift its root out front.',
  },
  {
    type: 'formula',
    label: 'Fractional and negative exponents',
    content: 'x^{1/2} = \\sqrt{x}, \\qquad x^{m/n} = \\sqrt[n]{x^{m}}, \\qquad x^{-n} = \\frac{1}{x^{n}}',
    note: 'A fractional exponent is radical notation; a negative exponent is reciprocal notation. Neither changes the sign of the base.',
  },
  {
    type: 'text',
    content: 'Last foundation: cancelling in a fraction is legal only for **factors**, never for **terms**. $\\dfrac{(x+2)(x-3)}{(x-3)}$ cancels the $(x-3)$ *factor* to leave $x+2$ — but $x = 3$ is quietly excluded from the domain, because it made the original denominator zero. You can never cancel across a plus or minus: $\\dfrac{x+2}{x}$ does not become $\\dfrac{2}{1}$. A cancelled variable factor always carries a domain exclusion with it.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Legal — cancel a shared factor', content: '$\\dfrac{(x+5)(x-1)}{(x+5)} = x - 1$, provided $x \\ne -5$. The factor leaves; the exclusion stays.', variant: 'right' },
      { label: 'Illegal — cancel across a sum', content: '$\\dfrac{x + 5}{5} = x + 1$ is wrong. The $5$ is a *term*, not a factor, so nothing cancels.', variant: 'wrong' },
    ],
  },
  {
    type: 'checkpointQuestion',
    number: 1,
    question: 'Simplify $\\sqrt{72}$, and state what $\\sqrt{72}$ equals — one value or two?',
    answer: 'One value: $\\sqrt{72} = \\sqrt{36 \\cdot 2} = 6\\sqrt{2}$. **Why:** the radical symbol points only to the non-negative root, so $\\sqrt{72}$ is a single number; the $\\pm$ appears only when you *solve* an equation by taking a root.',
  },

  // ── Stage 2 · The techniques ───────────────────────────────────────────
  { type: 'heading', content: 'Stage 2 · The techniques' },
  {
    type: 'text',
    content: 'Six techniques cover every nonlinear equation on the test. Each follows the same shape: the **technique**, a **right** example, a **wrong** example, and the **why**.',
  },

  { type: 'heading', content: 'Technique 1 — Radical equations: isolate, square, then CHECK' },
  {
    type: 'text',
    content: 'To solve an equation with a square root over the variable, get the radical alone on one side, then square both sides to remove it, then solve. Squaring is a **one-way move**: it can photocopy a second solution onto your answer set that was never really there (it secretly also solves $\\sqrt{A} = -B$). So every candidate must be tested in the *original* equation, and any that fails is an **extraneous solution** — discard it.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — check catches the fake', content: '$\\sqrt{x + 6} = x$ squares to $x + 6 = x^2$, so $x^2 - x - 6 = 0$, giving $x = 3$ or $x = -2$. Test both: $x = 3$ works; $x = -2$ gives $\\sqrt{4} = -2$, false. Answer: $x = 3$ only.', variant: 'right' },
      { label: 'Wrong — both kept', content: 'Reporting $x = 3$ and $x = -2$ skips the check and keeps the extraneous root that squaring invented.', variant: 'wrong' },
    ],
  },
  {
    type: 'strategyCard',
    title: 'Never divide by the unknown',
    content: 'Dividing both sides by a variable expression is the one dangerous move nothing downstream warns you about: it silently deletes the solution that makes that expression zero. From $x^2 = 5x$, dividing by $x$ gives only $x = 5$ and loses $x = 0$. Instead move everything to one side and factor: $x^2 - 5x = 0 \\Rightarrow x(x - 5) = 0 \\Rightarrow x = 0 \\text{ or } x = 5$. Both roots survive.',
  },

  { type: 'heading', content: 'Technique 2 — Rational equations: clear, solve, reject zero-makers' },
  {
    type: 'text',
    content: 'When the variable sits in a denominator, multiply both sides by the denominator (or the common denominator) to clear the fraction, then solve the equation that remains. Clearing a variable denominator *erases* the domain restriction, so a candidate that makes any original denominator zero is not a real solution — strike it. Read the original equation, not the cleared one, to decide what is allowed.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — reject the zero-maker', content: '$\\dfrac{x^2}{x - 2} = \\dfrac{4}{x - 2}$ clears to $x^2 = 4$, so $x = 2$ or $x = -2$. But $x = 2$ zeroes the denominator, so it is rejected. Answer: $x = -2$.', variant: 'right' },
      { label: 'Wrong — zero-maker kept', content: 'Keeping $x = 2$ ignores that the original fraction is undefined there — it was never a legal input.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Technique 3 — Hidden quadratics: rename the repeated chunk' },
  {
    type: 'text',
    content: 'When the same compound expression repeats, the quadratic machinery still applies — it never cared that the variable was $x$. In $x^4 - 5x^2 + 4 = 0$, let $u = x^2$; the equation becomes $u^2 - 5u + 4 = 0$, an ordinary quadratic. Solve for $u$, then honor the contract: **un-rename**. Solving for $u$ buys a middle step, not an answer — you must translate back to $x$. The same trick handles $(x-3)^2 + 5(x-3) + 6 = 0$ (let $u = x - 3$) and exponential patterns like $e^{2t} - 3e^{t} + 2 = 0$ (let $u = e^{t}$).',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — translate back to x', content: '$x^4 - 5x^2 + 4 = 0$ with $u = x^2$: $u^2 - 5u + 4 = 0 \\Rightarrow u = 1$ or $u = 4$. Then $x^2 = 1 \\Rightarrow x = \\pm 1$ and $x^2 = 4 \\Rightarrow x = \\pm 2$. Four solutions.', variant: 'right' },
      { label: 'Wrong — stopped at u', content: 'Reporting $u = 1, 4$ as the answer leaves the problem half-solved; $u$ was a costume for $x^2$, not the variable asked about.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Technique 4 — Remainders: evaluate, do not divide' },
  {
    type: 'text',
    content: 'A polynomial $P(x)$ divided by $(x - r)$ obeys the identity $P(x) = (x - r)\\,Q(x) + R$, true at every $x$. Choose the $x$ that kills the unknown block: at $x = r$, the entire $(x - r)\\,Q(x)$ term is zero, and the identity hands over $R = P(r)$. So the remainder on division by $(x - r)$ is just $P(r)$ — one evaluation, no long division. For $(ax - r)$, evaluate at $x = r/a$. And a remainder of $0$ means $(x - r)$ is a factor. The trap runs the other way: $P(6) = 4$ tells you the remainder is $4$, **not** that $(x - 6)$ is a factor.',
  },
  {
    type: 'formula',
    label: 'Remainder theorem',
    content: 'P(x) = (x - r)\\,Q(x) + R \\;\\Rightarrow\\; R = P(r); \\qquad R = 0 \\iff (x - r)\\ \\text{is a factor}',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — one evaluation', content: 'Remainder of $P(x) = x^3 - 2x + 5$ divided by $(x - 2)$: compute $P(2) = 8 - 4 + 5 = 9$. Done — no division.', variant: 'right' },
      { label: 'Wrong — value read as factor', content: 'From $P(2) = 9$, concluding "$(x-2)$ is a factor" is backwards; a factor needs remainder $0$, and $9 \\ne 0$.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Technique 5 — Line meets parabola: one quadratic, the discriminant referees' },
  {
    type: 'text',
    content: 'To find where a line and a parabola meet, substitute the line into the parabola so the system collapses to a single quadratic $ax^2 + bx + c = 0$. The **discriminant** $b^2 - 4ac$ then reports the count without any coordinates: positive means two intersection points, zero means the line is tangent (one point), negative means they never meet. Many items ask only for the count, or for the parameter value that makes the line tangent — set $b^2 - 4ac = 0$ and solve.',
  },
  {
    type: 'formula',
    label: 'The discriminant as referee',
    content: 'b^2 - 4ac > 0 \\Rightarrow \\text{two}, \\qquad b^2 - 4ac = 0 \\Rightarrow \\text{tangent (one)}, \\qquad b^2 - 4ac < 0 \\Rightarrow \\text{none}',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — set discriminant to zero for tangency', content: 'For $y = x^2$ and $y = 4x + k$ to be tangent: $x^2 = 4x + k \\Rightarrow x^2 - 4x - k = 0$; tangent needs $16 + 4k = 0 \\Rightarrow k = -4$.', variant: 'right' },
      { label: 'Wrong — solving for points unnecessarily', content: 'Grinding out both intersection coordinates to answer "how many times do they meet" wastes time the discriminant answers in one line.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Technique 6 — When to hand it to Desmos' },
  {
    type: 'text',
    content: 'The built-in Desmos calculator graphs both sides of an equation as two curves and marks where they cross — every intersection is a solution. It wins outright when the ask is "how many real solutions," when the numbers are ugly, or when you are unsure a candidate is extraneous (a real intersection is a real solution, so graphing sidesteps the extraneous-root check entirely). Reach for algebra when the answer must be an exact symbolic form, or when a single clean move (one evaluation for a remainder, one discriminant for a count) is faster than typing.',
  },
  {
    type: 'keyInsight',
    content: 'Every technique here rests on one habit: the moves that clear radicals and fractions — squaring, multiplying by an expression, dividing by an expression — are not fully reversible, so the **original equation is the only authority** on which candidates are real and which were invented or erased. Check there, always.',
  },

  // ── Stage 3 · On the test ──────────────────────────────────────────────
  { type: 'heading', content: 'Stage 3 · On the test' },
  {
    type: 'steps',
    title: 'The decision flow',
    items: [
      'Square root over the variable? Isolate it, square, solve, then test every candidate in the original — discard extraneous roots.',
      'Variable in a denominator? Multiply to clear, solve, then reject any candidate that zeroes an original denominator.',
      'Same chunk repeating? Rename it $u$, solve the quadratic in $u$, then translate back to $x$.',
      'A remainder or "is this a factor" question? Evaluate $P(r)$ — no long division. Remainder $0$ means factor.',
      'Line and parabola? Substitute to one quadratic and read the discriminant for the count (or set it to $0$ for tangency).',
      'Ugly numbers or "how many solutions"? Graph both sides in Desmos and count the crossings.',
    ],
  },
  {
    type: 'trapCard',
    title: 'The unchecked square',
    wrong: '**The unchecked square.** You isolate the radical, square both sides, solve the resulting quadratic, and report both roots — because you did the algebra correctly.',
    correction: 'Squaring is a one-way move that can mint a solution the original equation never had. Substitute every candidate back into the *original* equation; a root that fails (often a negative that makes a square root equal a negative) is extraneous and must be dropped.',
  },
  {
    type: 'trapCard',
    title: 'The vanished root',
    wrong: '**The vanished root.** Facing $x^2 = 5x$, you divide both sides by $x$ to get $x = 5$, cleanly and confidently.',
    correction: 'Dividing by the variable erases the solution that makes it zero, and nothing downstream flags the loss. Move everything to one side and factor instead: $x(x - 5) = 0$ keeps both $x = 0$ and $x = 5$.',
  },
  {
    type: 'trapCard',
    title: 'The u that never came back',
    wrong: '**The u that never came back.** You substitute $u$ for the repeated chunk, solve the quadratic, and grid in the values of $u$.',
    correction: 'The renamed letter is a costume, not the answer. After solving for $u$, translate each value back through the substitution to the original variable — $u = x^2 = 4$ becomes $x = \\pm 2$, not $x = 4$.',
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'What is the remainder when $P(x) = 2x^3 - 3x^2 + x - 7$ is divided by $(x - 1)$?',
    steps: [
      { label: 'Recognize the shape', content: 'A remainder on division by $(x - r)$ is $P(r)$ — here $r = 1$. No long division needed.' },
      { label: 'Evaluate', content: '$P(1) = 2(1) - 3(1) + 1 - 7 = 2 - 3 + 1 - 7 = -7$.' },
      { label: 'Answer', content: '**The remainder is $-7$.** Since it is not $0$, $(x - 1)$ is not a factor of $P(x)$.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'What is the solution set of $\\;x = \\sqrt{2x + 3}\\;$?',
    steps: [
      { label: 'Square to clear the radical', content: 'The radical is already isolated. Square both sides: $x^2 = 2x + 3$.' },
      { label: 'Solve the quadratic', content: '$x^2 - 2x - 3 = 0 \\Rightarrow (x - 3)(x + 1) = 0 \\Rightarrow x = 3$ or $x = -1$.' },
      { label: 'Check both in the original', content: '$x = 3$: $\\sqrt{2(3)+3} = \\sqrt{9} = 3$, which holds. $x = -1$: $\\sqrt{2(-1)+3} = \\sqrt{1} = 1 \\ne -1$, extraneous.' },
      { label: 'Answer', content: '**$x = 3$ only.** Squaring invented $x = -1$; the check removes it.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'For what value of $c$ is the line $y = 6x + c$ tangent to the parabola $y = x^2 + 2$?',
    steps: [
      { label: 'Collapse to one quadratic', content: 'Set equal: $x^2 + 2 = 6x + c \\Rightarrow x^2 - 6x + (2 - c) = 0$.' },
      { label: 'Tangent means discriminant zero', content: 'Tangency is exactly one intersection, so $b^2 - 4ac = 0$: $(-6)^2 - 4(1)(2 - c) = 0 \\Rightarrow 36 - 8 + 4c = 0$.' },
      { label: 'Solve for c', content: '$28 + 4c = 0 \\Rightarrow c = -7$.' },
      { label: 'Answer', content: '**$c = -7$.** Setting the discriminant to zero found the single line in the family that just touches the parabola.' },
    ],
  },
  {
    type: 'checkpointQuestion',
    number: 2,
    question: 'Solving $\\dfrac{6}{x - 1} = \\dfrac{6}{x - 1} + x$ gives a candidate $x = 0$ and a candidate $x = 1$. Which are real solutions?',
    answer: 'Only $x = 0$. Clearing gives $0 = x$, so $x = 0$; but $x = 1$ zeroes the original denominator $(x - 1)$ and is rejected. **Why:** a rational equation forbids any value that makes an original denominator zero, no matter what the cleared equation says.',
  },
  {
    type: 'checkpointQuestion',
    number: 3,
    question: 'You let $u = x^2$ to solve $x^4 - 13x^2 + 36 = 0$ and find $u = 4$ and $u = 9$. How many solutions for $x$, and what are they?',
    answer: 'Four: $x^2 = 4 \\Rightarrow x = \\pm 2$ and $x^2 = 9 \\Rightarrow x = \\pm 3$. **Why:** each positive value of $u = x^2$ yields two values of $x$, so you must translate every $u$ back before counting.',
  },
  {
    type: 'checkpointQuestion',
    number: 4,
    question: 'A quadratic formed by substituting a line into a parabola has discriminant $-12$. How many times do the line and parabola intersect?',
    answer: 'Zero times. **Why:** a negative discriminant means the quadratic has no real solutions, so the line and parabola never meet — the discriminant is the referee for the count without finding any coordinates.',
  },
  {
    type: 'checkpointQuestion',
    number: 5,
    question: 'If $P(x)$ is a polynomial and $P(-3) = 0$, what does that tell you about the factors of $P(x)$?',
    answer: '$(x + 3)$ is a factor of $P(x)$. **Why:** a remainder of $0$ on division by $(x - r)$ means $(x - r)$ is a factor; here $r = -3$, so the factor is $(x - (-3)) = (x + 3)$.',
  },
  { type: 'heading', content: 'One-page summary' },
  {
    type: 'table',
    title: 'The whole chapter in one place',
    headers: ['Equation shape', 'Technique', 'The mandatory check'],
    rows: [
      ['Square root over the variable', 'Isolate, square, solve', 'Test every candidate in the original; drop extraneous roots'],
      ['Variable in a denominator', 'Multiply to clear, solve', 'Reject any candidate that zeroes an original denominator'],
      ['Same chunk repeats', 'Let $u$ = chunk, solve, un-rename', 'Translate every $u$ back to $x$ before counting'],
      ['Remainder / factor question', 'Evaluate $P(r)$', 'Remainder $0$ means factor; a nonzero value is not a factor'],
      ['Line meets parabola', 'Substitute to one quadratic', 'Discriminant sign gives the count; $= 0$ is tangent'],
      ['Ugly or "how many"', 'Graph both sides in Desmos', 'Count the crossings — real intersections are real solutions'],
    ],
  },
  {
    type: 'text',
    content: 'That is the whole chapter: four solving techniques, a remainder shortcut, and a discriminant count — all guarded by the single habit of checking candidates against the original equation, because squaring, clearing, and dividing are moves that do not fully reverse.',
  },
];
