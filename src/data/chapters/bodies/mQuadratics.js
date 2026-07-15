/**
 * Learn lesson body — Quadratic Functions & Equations (Advanced Math).
 *
 * VOICE (adopted 2026-07-15, exemplar: mLinearEquations.js): professional
 * textbook narrative — teaches directly in flowing prose (concept, why it
 * works, how to apply, common errors) in the measured register of a
 * well-edited textbook. Concrete contexts framed plainly as examples;
 * extended metaphors, cute headings, and pep-talk are out. Headings name
 * the concept. Gated by bodies.test.js.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const mQuadraticsBlocks = [
  {
    type: 'text',
    content: "The costliest habit on quadratics is committing to a single method — always factoring, or always applying the quadratic formula — and grinding through a problem that a quicker route would settle in seconds. The efficient route is usually visible on the page itself. Two principles organize this topic: **let the answer choices determine the method**, and read the parabola's features directly from whichever form the equation is given in.",
  },

  { type: 'heading', content: 'Choosing a method' },
  {
    type: 'text',
    content: "Before any algebra, inspect the answer choices — they indicate which method applies. **Whole-number choices → the quadratic factors.** **Radicals such as $3\\pm\\sqrt5$ → factoring will fail; use the quadratic formula.** **A question asking for the sum or product of the solutions → do not solve at all; the coefficient relations read the answer directly.** **Awkward decimals or a coordinate → graph the equation in Desmos.** This brief inspection saves more time than any individual technique.",
  },

  { type: 'heading', content: 'Zeros = roots = x-intercepts = factors' },
  {
    type: 'text',
    content: "Zeros, roots, x-intercepts, solutions — four terms for one object: an input that makes the quadratic equal $0$. Questions routinely mix the vocabulary — a stem may ask for \"zeros\" while the graph is labeled with \"x-intercepts\" — and treating the words as four separate ideas creates hesitation where none is needed. They are synonyms. If $(x-3)(x+2)=0$, one factor must equal $0$, so $x=3$ or $x=-2$. Note the sign reversal: the root is the value that makes its factor zero, so $(x+2)$ vanishes at $x=-2$, not $+2$.",
  },
  {
    type: 'keyInsight',
    content: "A product equals $0$ only when one of its factors equals $0$. This is why every term is moved to one side before factoring — $0$ is the only value that forces a conclusion about an individual factor.",
  },

  { type: 'heading', content: 'Solving by factoring' },
  {
    type: 'text',
    content: "For $x^2+bx+c=0$, find two numbers that **add to $b$** and **multiply to $c$**. Reversing their signs gives the roots. The signs narrow the search before it begins: if $c$ is positive, both numbers share the sign of $b$; if $c$ is negative, one is positive and one is negative.",
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Solve $x^2 - x - 6 = 0$.',
    steps: [
      { label: 'Identify the sum and product', content: 'Two numbers are needed that add to $-1$ and multiply to $-6$.' },
      { label: 'Find the pair', content: '$-3$ and $2$: $(-3)+2=-1$ and $(-3)(2)=-6$.' },
      { label: 'Write the factors', content: '$(x-3)(x+2)=0$.' },
      { label: 'Reverse the signs', content: 'Each factor is zero at its root: $x=3$ and $x=-2$.' },
    ],
  },

  { type: 'heading', content: 'Reading the parabola from its form' },
  {
    type: 'text',
    content: "A parabola is symmetric about a vertical axis, and the same quadratic can be written in three forms. Each form displays a different feature directly — so match the form to the feature the question asks for rather than converting by default. Deriving the vertex from standard form when the problem supplies factored form is unnecessary work.",
  },
  {
    type: 'table',
    headers: ['Form', 'Written as', 'What it displays directly'],
    rows: [
      ['Standard', '$y=ax^2+bx+c$', 'Direction (sign of $a$) and the y-intercept $c$'],
      ['Factored', '$y=a(x-r_1)(x-r_2)$', 'The roots $r_1$ and $r_2$ (the x-intercepts)'],
      ['Vertex', '$y=a(x-h)^2+k$', 'The vertex $(h,\\,k)$ directly'],
    ],
  },
  {
    type: 'text',
    content: "The vertex lies on the axis of symmetry — exactly **halfway between the roots**. When the roots are known, their average gives the x-coordinate of the vertex; no formula or conversion is required.",
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The graph of $y=(x-1)(x-5)$ is a parabola. Find its vertex.',
    steps: [
      { label: 'Read the roots', content: 'Factored form displays them directly: $x=1$ and $x=5$.' },
      { label: 'Average the roots', content: 'The vertex x-coordinate lies halfway between them: $\\frac{1+5}{2}=3$.' },
      { label: 'Substitute back', content: '$y=(3-1)(3-5)=(2)(-2)=-4$.' },
      { label: 'State the vertex', content: 'The vertex is $(3,\\,-4)$.' },
    ],
  },

  { type: 'heading', content: 'The discriminant' },
  {
    type: 'text',
    content: "The discriminant $b^2-4ac$ — the expression under the radical in the quadratic formula — counts the real solutions by its sign alone: **positive → two**, **zero → one** (a repeated root; the parabola touches the axis at a single point), **negative → none**. One point is often overanalyzed: the magnitude carries no information. A discriminant of $-24$ says nothing more than a discriminant of $-1$ — only the sign matters.",
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'For what value of $k$ does $x^2 + kx + 9 = 0$ have exactly one real solution?',
    steps: [
      { label: 'Translate the condition', content: '"Exactly one real solution" means the discriminant equals $0$.' },
      { label: 'Set up $b^2-4ac=0$', content: 'Here $a=1$, $b=k$, $c=9$, so $k^2-4(1)(9)=0$.' },
      { label: 'Solve', content: '$k^2-36=0 \\Rightarrow k^2=36 \\Rightarrow k=\\pm 6$.' },
    ],
  },

  { type: 'heading', content: 'Sum and product without solving' },
  {
    type: 'text',
    content: "When a question asks only for the **sum** or **product** of the solutions, computing the individual roots is wasted effort. For $ax^2+bx+c=0$: the roots sum to $-\\dfrac{b}{a}$ and multiply to $\\dfrac{c}{a}$ — both values read directly from the coefficients. On these questions the coefficient relations are faster than either factoring or graphing in Desmos.",
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'What is the product of the solutions of $3x^2 - 12x + 5 = 0$? (Do not solve for the roots.)',
    steps: [
      { label: 'Read the coefficients', content: 'In standard form, $a=3$, $b=-12$, $c=5$.' },
      { label: 'Apply the product relation', content: "The product of the roots is $\\dfrac{c}{a}=\\dfrac{5}{3}$ — read directly, with no solving. The division by $a$ matters here because $a=3$, not $1$." },
    ],
  },
  {
    type: 'tip',
    content: "Two details account for most errors here: the leading negative in the sum ($-b/a$, not $b/a$), and the division by $a$ when the leading coefficient is not $1$. Put the equation in standard form before reading off $a$, $b$, and $c$.",
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'For $2x^2 - 8x + 6 = 0$, what is the sum of the solutions? (Do not solve for the roots.)',
    answer: "**$4$.** Sum $=-\\dfrac{b}{a}=-\\dfrac{-8}{2}=4$. The division by $a$ is essential — $a=2$ here, not $1$, and omitting it gives $8$ instead.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A parabola crosses the x-axis at $x=-4$ and $x=2$. Write a factored equation, and give the x-coordinate of its vertex.',
    answer: "**$y=a(x+4)(x-2)$**, vertex x $=\\dfrac{-4+2}{2}=-1$. Each factor is zero at its root — the root $x=-4$ corresponds to the factor $(x+4)$ — and the vertex lies halfway between the roots.",
  },
  {
    type: 'checkpointQuestion',
    question: 'Without solving, how many real solutions does $2x^2 - 4x + 5 = 0$ have?',
    answer: "**None.** The discriminant is $b^2-4ac=(-4)^2-4(2)(5)=16-40=-24$ — negative, so there are no real solutions. No solving is required; the sign of the discriminant settles the question.",
  },

  {
    type: 'text',
    content: "**In summary:** the answer choices indicate the method; the zeros are the values that make each factor zero; the vertex lies halfway between the roots; and the sign of the discriminant counts the real solutions.",
  },
];
