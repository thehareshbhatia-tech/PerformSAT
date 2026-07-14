/**
 * Learn lesson body — Quadratic Functions & Equations (Advanced Math).
 *
 * TUTOR VOICE (adopted 2026-07-14, exemplar: ./mLinearEquations.js): coaching
 * direct-address — talks TO the student, anticipates the mistake before it
 * happens, everyday anchor first and formula second, concrete decision rules
 * ("let the answer choices pick your method"). Lean structure unchanged:
 * short headed sections, 4 worked examples, 3 checkpoints. Gated by
 * bodies.test.js.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const mQuadraticsBlocks = [
  {
    type: 'text',
    content: "Here's the habit that burns the most time on quadratics: marrying one method. Always factor, or always run the formula — then grinding on a problem that was begging for a quicker route. The fast route is usually printed right on the page. Two moves carry this whole topic: **let the answer choices pick your method**, then read the parabola instead of wrestling it.",
  },

  { type: 'heading', content: 'Pick the method before you write anything' },
  {
    type: 'text',
    content: "Before your pencil moves, glance at the answer choices — they tell you which tool to grab. **Whole numbers → it factors.** **Radicals like $3\\pm\\sqrt5$ → factoring will fail, run the formula.** **Asked for the sum or product of the solutions → don't solve at all; Vieta reads it off the coefficients.** **Hostile decimals or a coordinate → graph it in Desmos.** That five-second read is worth more points than any single method.",
  },

  { type: 'heading', content: 'Zeros = roots = x-intercepts = factors' },
  {
    type: 'text',
    content: "Zeros, roots, x-intercepts, solutions — four words for one thing: an input that makes the quadratic equal $0$. The test swaps them mid-question — the stem asks for \"zeros\" while the graph is labeled with \"x-intercepts\" — and if you treat them as four different ideas, you freeze. Treat them as synonyms and keep moving. If $(x-3)(x+2)=0$, one factor has to be $0$, so $x=3$ or $x=-2$. Watch that sign flip: the root is the value that *kills* the factor, so $(x+2)$ dies at $x=-2$, not $+2$.",
  },
  {
    type: 'keyInsight',
    content: "A product equals $0$ only when a factor equals $0$. That's the whole reason you move everything to one side first — $0$ is the only number that forces a factor to confess.",
  },

  { type: 'heading', content: 'Factoring: the workhorse' },
  {
    type: 'text',
    content: "For $x^2+bx+c=0$, hunt for two numbers that **add to $b$** and **multiply to $c$**. Flip their signs and you're holding the roots. Cut the search in half before you start: if $c$ is positive, both numbers share $b$'s sign; if $c$ is negative, you want one of each.",
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Solve $x^2 - x - 6 = 0$.',
    steps: [
      { label: 'Sum and product', content: 'You want two numbers that add to $-1$ and multiply to $-6$.' },
      { label: 'Find them', content: '$-3$ and $2$: $(-3)+2=-1$ and $(-3)(2)=-6$.' },
      { label: 'Write the factors', content: '$(x-3)(x+2)=0$.' },
      { label: 'Flip the signs', content: 'Each factor dies at its root: $x=3$ and $x=-2$.' },
    ],
  },

  { type: 'heading', content: 'Read the parabola from its form' },
  {
    type: 'text',
    content: "A parabola is a mirror-symmetric U, and the same quadratic wears three different outfits. Each one hands you a different feature for free — so match the outfit to what the question wants instead of converting on autopilot. Grinding out the vertex from standard form when the problem handed you factored form is pure wasted motion.",
  },
  {
    type: 'table',
    headers: ['Form', 'Looks like', 'What it hands you'],
    rows: [
      ['Standard', '$y=ax^2+bx+c$', 'Direction (sign of $a$) and the y-intercept $c$'],
      ['Factored', '$y=a(x-r_1)(x-r_2)$', 'The roots $r_1$ and $r_2$ (the x-intercepts)'],
      ['Vertex', '$y=a(x-h)^2+k$', 'The vertex $(h,\\,k)$ directly'],
    ],
  },
  {
    type: 'text',
    content: "The vertex sits on the axis of symmetry — exactly **halfway between the roots**. Know the roots? Average them and you have the vertex's x-coordinate. No formula, no conversion.",
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The graph of $y=(x-1)(x-5)$ is a parabola. Find its vertex.',
    steps: [
      { label: 'Read the roots', content: 'Factored form gives them away: $x=1$ and $x=5$.' },
      { label: 'Average them', content: 'The vertex x sits halfway between: $\\frac{1+5}{2}=3$.' },
      { label: 'Plug back in', content: '$y=(3-1)(3-5)=(2)(-2)=-4$.' },
      { label: 'State it', content: 'The vertex is $(3,\\,-4)$.' },
    ],
  },

  { type: 'heading', content: 'When it will not factor: the discriminant' },
  {
    type: 'text',
    content: "The discriminant $b^2-4ac$ — the part living under the radical in the quadratic formula — counts your real solutions from its sign alone: **positive → two**, **zero → one** (a repeated root; the parabola just kisses the axis), **negative → none**. Here's the part people overthink: the size means nothing. If you compute $-24$, there's no message hiding in the $24$ — only the sign talks.",
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'For what value of $k$ does $x^2 + kx + 9 = 0$ have exactly one real solution?',
    steps: [
      { label: 'Translate the ask', content: '"Exactly one solution" is code for: the discriminant equals $0$.' },
      { label: 'Set up $b^2-4ac=0$', content: 'Here $a=1$, $b=k$, $c=9$, so $k^2-4(1)(9)=0$.' },
      { label: 'Solve', content: '$k^2-36=0 \\Rightarrow k^2=36 \\Rightarrow k=\\pm 6$.' },
    ],
  },

  { type: 'heading', content: 'Sum and product without solving' },
  {
    type: 'text',
    content: "When a question asks only for the **sum** or **product** of the solutions, it's really testing whether you'll waste a minute finding roots nobody asked for. Don't. For $ax^2+bx+c=0$: the roots sum to $-\\dfrac{b}{a}$ and multiply to $\\dfrac{c}{a}$ — read straight off the coefficients. This is the one spot where plain algebra beats both factoring and Desmos.",
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'What is the product of the solutions of $3x^2 - 12x + 5 = 0$? (Do not solve for the roots.)',
    steps: [
      { label: 'Read the coefficients', content: 'In standard form, $a=3$, $b=-12$, $c=5$.' },
      { label: 'Use the product rule', content: "The product of the roots is $\\dfrac{c}{a}=\\dfrac{5}{3}$ — read straight off, no solving. And don't skip the $\\div a$: it matters here because $a=3$, not $1$." },
    ],
  },
  {
    type: 'tip',
    content: "Two spots where this leaks points: the leading minus on the sum ($-b/a$, not $b/a$), and the $\\div a$ when the leading coefficient isn't $1$. Get the equation into standard form before you read off $a$, $b$, $c$.",
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'For $2x^2 - 8x + 6 = 0$, what is the sum of the solutions? (Do not solve for the roots.)',
    answer: "**$4$.** Sum $=-\\dfrac{b}{a}=-\\dfrac{-8}{2}=4$. Notice the $\\div a$ pulled its weight — $a=2$ here, not $1$, and skipping it hands you $8$ instead.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A parabola crosses the x-axis at $x=-4$ and $x=2$. Write a factored equation, and give the x-coordinate of its vertex.',
    answer: "**$y=a(x+4)(x-2)$**, vertex x $=\\dfrac{-4+2}{2}=-1$. Each factor dies at its root — that's why $x=-4$ pairs with $(x+4)$ — and the vertex sits halfway between them.",
  },
  {
    type: 'checkpointQuestion',
    question: 'Without solving, how many real solutions does $2x^2 - 4x + 5 = 0$ have?',
    answer: "**None.** The discriminant is $b^2-4ac=(-4)^2-4(2)(5)=16-40=-24$ — negative, so no real solutions. You never solve anything: the sign already answered the question.",
  },

  {
    type: 'text',
    content: "**The move, every time:** read the choices to pick the method → zeros are where each factor dies → the vertex is halfway between the roots → the discriminant's sign counts the real solutions.",
  },
];
