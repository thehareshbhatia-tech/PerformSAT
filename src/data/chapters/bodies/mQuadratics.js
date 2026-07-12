/**
 * Learn lesson body — Quadratic Functions & Equations (Advanced Math).
 *
 * Lean "review / cheat-sheet" style (voice + shape exemplar:
 * ./gSubjectVerbAgreement.js): one SAT skill per lesson, plain language, one
 * idea per short section, a method, then 2-3 worked examples and a couple of
 * check-yourself questions. Gated by __tests__/bodies.test.js (lean contract).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const mQuadraticsBlocks = [
  {
    type: 'text',
    content: 'Every quadratic can be cracked by more than one method, and the fast route is usually printed on the page. Most students default to a single method for everything — always factor, or always run the formula — and burn time on problems that were begging for a quicker route. The whole skill is two moves: **let the answer choices pick your method**, then read the parabola instead of grinding it.',
  },

  { type: 'heading', content: 'Pick the method before you write anything' },
  {
    type: 'text',
    content: 'Any quadratic can be solved three ways — factoring, the quadratic formula, or Desmos — but they cost wildly different amounts of time. Glance at the answer choices first: **whole numbers → it factors**; **radicals like $3\\pm\\sqrt5$ → skip factoring and run the formula**; **an ask about the sum or product of the solutions → use Vieta, never solve**; **hostile decimals or a coordinate → graph it in Desmos**. That five-second read is worth more points than any single method.',
  },

  { type: 'heading', content: 'Zeros = roots = x-intercepts = factors' },
  {
    type: 'text',
    content: 'These four words all name the same thing: an input that makes the quadratic equal $0$. The SAT swaps them freely inside one question — an item may ask for "zeros" while the graph is labeled with "x-intercepts" — so treating them as synonyms keeps you from freezing. If $(x-3)(x+2)=0$, then one factor must be $0$, so $x=3$ or $x=-2$. Notice the sign flip — the root is the value that *kills* the factor, so $(x+2)$ is zero at $x=-2$, not $+2$.',
  },
  {
    type: 'keyInsight',
    content: 'A product equals $0$ only when a factor equals $0$. That is why you move everything to one side first: $0$ is the only number that forces a factor to confess.',
  },

  { type: 'heading', content: 'Factoring: the workhorse' },
  {
    type: 'text',
    content: 'For $x^2+bx+c=0$, find two numbers that **add to $b$** and **multiply to $c$**. Those two numbers, with their signs flipped, are the roots. Prune the search by sign: if $c$ is positive, both numbers share $b$’s sign; if $c$ is negative, they have opposite signs.',
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Solve $x^2 - x - 6 = 0$.',
    steps: [
      { label: 'Sum and product', content: 'Need two numbers that add to $-1$ and multiply to $-6$.' },
      { label: 'Find them', content: '$-3$ and $2$: $(-3)+2=-1$ and $(-3)(2)=-6$.' },
      { label: 'Write the factors', content: '$(x-3)(x+2)=0$.' },
      { label: 'Flip the signs', content: 'Each factor is $0$ at $x=3$ and $x=-2$.' },
    ],
  },

  { type: 'heading', content: 'Read the parabola from its form' },
  {
    type: 'text',
    content: 'A parabola is a mirror-symmetric U. The same quadratic can be written three ways, and each form hands you a different feature for free. Choosing the form is itself the strategy: the feature a question wants — roots, vertex, or y-intercept — sits in plain view in exactly one of them, so match the form to the ask instead of converting blindly.',
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
    content: 'The vertex sits on the axis of symmetry, exactly **halfway between the roots**. So if you know the roots, the vertex’s x-coordinate is just their average — no formula needed.',
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The graph of $y=(x-1)(x-5)$ is a parabola. Find its vertex.',
    steps: [
      { label: 'Read the roots', content: 'Factored form gives $x=1$ and $x=5$.' },
      { label: 'Average them', content: 'Vertex x is halfway between: $\\frac{1+5}{2}=3$.' },
      { label: 'Plug back in', content: '$y=(3-1)(3-5)=(2)(-2)=-4$.' },
      { label: 'State it', content: 'The vertex is $(3,\\,-4)$.' },
    ],
  },

  { type: 'heading', content: 'When it will not factor: the discriminant' },
  {
    type: 'text',
    content: 'The discriminant $b^2-4ac$ (the part under the radical in the quadratic formula) tells you **how many real solutions** exist, from its sign alone: **positive → two**, **zero → one** (a repeated root, the parabola just touches the axis), **negative → none**. Its size carries no extra meaning — only the sign matters.',
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'For what value of $k$ does $x^2 + kx + 9 = 0$ have exactly one real solution?',
    steps: [
      { label: 'Translate the ask', content: 'Exactly one solution means the discriminant equals $0$.' },
      { label: 'Set up $b^2-4ac=0$', content: 'Here $a=1$, $b=k$, $c=9$, so $k^2-4(1)(9)=0$.' },
      { label: 'Solve', content: '$k^2-36=0 \\Rightarrow k^2=36 \\Rightarrow k=\\pm 6$.' },
    ],
  },

  { type: 'heading', content: 'Sum and product without solving' },
  {
    type: 'text',
    content: 'When the question asks only for the **sum** or **product** of the solutions, you never need the roots themselves. For $ax^2+bx+c=0$: the roots sum to $-\\dfrac{b}{a}$ and multiply to $\\dfrac{c}{a}$ — read straight off the coefficients. This is the one situation where algebra beats both factoring and Desmos.',
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'What is the product of the solutions of $3x^2 - 12x + 5 = 0$? (Do not solve for the roots.)',
    steps: [
      { label: 'Read the coefficients', content: 'In standard form, $a=3$, $b=-12$, $c=5$.' },
      { label: 'Use the product rule', content: 'The product of the roots is $\\dfrac{c}{a}=\\dfrac{5}{3}$ — read straight off, no solving. The $\\div a$ matters here since $a=3$, not $1$.' },
    ],
  },
  {
    type: 'tip',
    content: 'Two fragile spots: the leading minus on the sum ($-b/a$, not $b/a$), and the $\\div a$ when the leading coefficient is not $1$. Get the equation into standard form before reading $a$, $b$, $c$.',
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'For $2x^2 - 8x + 6 = 0$, what is the sum of the solutions? (Do not solve for the roots.)',
    answer: '**$4$.** Sum $=-\\dfrac{b}{a}=-\\dfrac{-8}{2}=4$. The $\\div a$ matters here since $a=2$, not $1$.',
  },
  {
    type: 'checkpointQuestion',
    question: 'A parabola crosses the x-axis at $x=-4$ and $x=2$. Write a factored equation, and give the x-coordinate of its vertex.',
    answer: '**$y=a(x+4)(x-2)$**, vertex x $=\\dfrac{-4+2}{2}=-1$. Each factor is $0$ at a root, and the vertex sits halfway between them.',
  },
  {
    type: 'checkpointQuestion',
    question: 'Without solving, how many real solutions does $2x^2 - 4x + 5 = 0$ have?',
    answer: '**None.** The discriminant is $b^2-4ac=(-4)^2-4(2)(5)=16-40=-24$, which is negative — a negative discriminant means no real solutions. Only the sign matters, so you never actually solve.',
  },

  {
    type: 'text',
    content: '**The move, every time:** read the choices to pick the method → zeros are where each factor is $0$ → the vertex is halfway between the roots → the discriminant’s sign counts the real solutions.',
  },
];
