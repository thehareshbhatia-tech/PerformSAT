/**
 * Learn lesson body — Quadratic Functions & Equations (Advanced Math).
 *
 * VOICE v4 (adopted 2026-07-18, exemplar: bodies/centralIdeas.js): practiced-tutor
 * register — developed 2-5 sentence paragraphs with connective tissue; every rule
 * earns its "because"; student-psychology named concretely; math teaching is
 * example-led; varied rhythm, no aphorism-per-block. Bans carried from v3: no
 * analogies, no pep talk, no exclamation marks, no emojis, no
 * test-personification. All v3 teaching claims preserved.
 * Gated by bodies.test.js.
 *
 * COMPOSED MODE (2026-07-18): chapterOpener lede + auto-numbered sections/examples/figures +
 * aside margin-notes + summary close (exemplar: bodies/mPercents.js).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const mQuadraticsBlocks = [
  {
    type: 'chapterOpener',
    lede: "The factoring templates you just built pay off immediately, because a quadratic equation is where rewriting becomes solving: a factored quadratic set equal to zero reads its solutions off directly. The costliest habit on these questions isn't a wrong technique — it's committing to a single one. Students who always factor, or always reach for the quadratic formula, grind through problems a quicker route would settle in seconds, and the efficient route is usually visible on the page itself. Two principles organize the whole topic: **let the answer choices pick the method**, and read the parabola's features straight from whichever form the equation is given in.",
  },

  { type: 'heading', content: 'Choosing a method' },
  {
    type: 'text',
    content: "Before any algebra, look at the answer choices. The form of the answers is the fingerprint of the technique that produced them — whole numbers come out of factoring, radicals come out of the formula — so the choices tell you which method applies before you commit to one.",
  },
  {
    type: 'list',
    title: 'What the choices signal:',
    items: [
      '**Whole-number choices** — the quadratic factors.',
      '**Radicals such as $3\\pm\\sqrt5$** — factoring will fail; use the quadratic formula.',
      "**A question asking for the sum or product of the solutions** — don't solve at all; the coefficient relations read the answer directly.",
      '**Awkward decimals or a coordinate** — graph the equation in Desmos.',
    ],
  },
  {
    type: 'text',
    content: "This inspection takes a few seconds and saves more time than any individual technique.",
  },

  { type: 'heading', content: 'Zeros = roots = x-intercepts = factors' },
  {
    type: 'text',
    content: "Zeros, roots, x-intercepts, solutions — four names for one object: an input that makes the quadratic equal $0$. Questions mix the vocabulary freely, so a stem may ask for \"zeros\" while the graph is labeled with \"x-intercepts.\" They're synonyms, and students who treat them as four separate ideas hesitate at exactly the moments the question was built to be immediate.",
  },
  {
    type: 'text',
    content: "If $(x-3)(x+2)=0$, one factor must equal $0$, so $x=3$ or $x=-2$. Watch the sign reversal: the root is the value that makes its factor zero, so $(x+2)$ vanishes at $x=-2$, not $+2$.",
  },
  {
    type: 'keyInsight',
    content: "A product equals $0$ only when one of its factors equals $0$. That's why every term moves to one side before factoring — $0$ is the only value that forces a conclusion about an individual factor.",
  },

  { type: 'heading', content: 'Solving by factoring' },
  {
    type: 'text',
    content: "For $x^2+bx+c=0$, find two numbers that **add to $b$** and **multiply to $c$**; reversing their signs gives the roots. Why sum and product? Because expanding $(x+p)(x+q)$ produces $x^2 + (p+q)x + pq$ — the middle coefficient is the pair's sum and the constant is its product, so factoring is just running that expansion backward. The signs narrow the search before it starts: if $c$ is positive, both numbers share the sign of $b$; if $c$ is negative, one is positive and one is negative.",
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Solve $x^2 - x - 6 = 0$.',
    steps: [
      { label: 'Identify the sum and product', content: 'We need two numbers that add to $-1$ and multiply to $-6$.' },
      { label: 'Find the pair', content: '$-3$ and $2$: $(-3)+2=-1$ and $(-3)(2)=-6$.' },
      { label: 'Write the factors', content: '$(x-3)(x+2)=0$.' },
      { label: 'Reverse the signs', content: 'Each factor is zero at its root: $x=3$ and $x=-2$.' },
    ],
  },
  {
    type: 'steps',
    title: "When the leading coefficient isn't 1",
    items: [
      "**Multiply $a \\cdot c$.** The search runs through that product rather than $c$ alone: find two numbers that multiply to $a \\cdot c$ and add to $b$.",
      '**Split the middle term** into those two pieces.',
      '**Factor by grouping.**',
    ],
  },
  {
    type: 'text',
    content: "One caution carries over from the $a=1$ case with a twist — the number pair no longer reverses signs into the roots directly. The roots come from the finished factors, not from the pair.",
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Solve $2x^2 + 7x - 4 = 0$.',
    steps: [
      { label: 'Multiply a and c', content: '$a \\cdot c = 2(-4) = -8$. We need two numbers that multiply to $-8$ and add to $7$.' },
      { label: 'Find the pair and split the middle term', content: '$8$ and $-1$: rewrite $7x$ as $8x - x$, giving $2x^2 + 8x - x - 4 = 0$.' },
      { label: 'Factor by grouping', content: '$2x(x+4) - 1(x+4) = 0$, and the shared factor collects: $(x+4)(2x-1) = 0$.' },
      { label: 'Solve each factor', content: '$x = -4$ or $x = \\dfrac{1}{2}$. The root $\\frac{1}{2}$ is not the reversed pair-number $-1$ — with $a \\ne 1$, each root is the value that makes its factor zero, and nothing shorter.' },
    ],
  },
  {
    type: 'text',
    content: "When the constant term is missing, $x$ itself is a common factor and the equation factors immediately: $3x^2 - 12x = 0$ becomes $3x(x - 4) = 0$, so $x = 0$ or $x = 4$.",
  },
  {
    type: 'aside',
    kind: 'watch',
    content: "The tempting shortcut — dividing both sides by $x$ — looks like harmless simplifying, but the division is invalid at exactly one value, $x = 0$, and that value is one of the solutions. Dividing discards it silently; factoring the $x$ out keeps it as an ordinary root.",
  },

  { type: 'heading', content: 'The quadratic formula' },
  {
    type: 'text',
    content: "When no integer pair fits — the sum-and-product search comes up empty, or the answer choices carry radicals such as $3\\pm\\sqrt5$ — the quadratic formula solves any quadratic straight from its coefficients. Radical choices are the clearest signal of the two, because irrational roots mean the quadratic doesn't factor over the integers, and every minute spent hunting for a pair is wasted. Put the equation in standard form $ax^2+bx+c=0$ first: the formula reads $a$, $b$, and $c$ from that form and no other.",
  },
  {
    type: 'formula',
    label: 'The quadratic formula',
    content: '$x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$',
    note: "The expression under the radical is the discriminant, the same $b^2 - 4ac$ that counts the solutions. When it's a perfect square the roots are rational and the quadratic would also have factored; when it isn't, the formula is the only algebraic route.",
  },
  {
    type: 'list',
    title: 'Two substitution errors account for most wrong answers:',
    items: [
      'The leading $-b$ negates the coefficient **with its sign**: when $b = -6$, the numerator starts $-(-6) = 6$, not $-6$.',
      'The denominator $2a$ divides the **entire numerator** — the $-b$ term and the radical together, not the radical alone.',
    ],
  },
  {
    type: 'text',
    content: "Writing the whole numerator over one fraction bar before simplifying keeps that structure visible.",
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Solve $x^2 - 6x + 4 = 0$.',
    steps: [
      { label: 'Confirm that factoring fails', content: "We'd need a pair multiplying to $4$ and adding to $-6$: $(-1)(-4)$ sums to $-5$, $(-2)(-2)$ sums to $-4$. No integer pair works, so apply the formula with $a=1$, $b=-6$, $c=4$." },
      { label: 'Substitute with signs intact', content: '$x = \\dfrac{-(-6) \\pm \\sqrt{(-6)^2 - 4(1)(4)}}{2(1)} = \\dfrac{6 \\pm \\sqrt{36 - 16}}{2} = \\dfrac{6 \\pm \\sqrt{20}}{2}$. The leading term is $+6$ because $b$ is negative.' },
      { label: 'Simplify the radical', content: '$\\sqrt{20} = \\sqrt{4 \\cdot 5} = 2\\sqrt5$, so $x = \\dfrac{6 \\pm 2\\sqrt5}{2}$.' },
      { label: 'Divide every term by 2', content: 'Both the $6$ and the $2\\sqrt5$ get divided: $x = 3 \\pm \\sqrt5$. Dividing only the $6$ gives $3 \\pm 2\\sqrt5$ — a standard wrong answer choice built from exactly that slip.' },
    ],
  },

  { type: 'heading', content: 'Completing the square' },
  {
    type: 'text',
    content: "Completing the square rewrites $x^2 + bx$ as a perfect square plus a correction, and it rests on one identity: $\\left(x + \\frac{b}{2}\\right)^2 = x^2 + bx + \\frac{b^2}{4}$.",
  },
  {
    type: 'steps',
    title: 'The move is mechanical',
    items: [
      '**Halve the coefficient of $x$, then square the result.**',
      "**Add and subtract that square.** The expression's value doesn't change: $x^2 + bx = \\left(x + \\frac{b}{2}\\right)^2 - \\frac{b^2}{4}$.",
    ],
  },
  {
    type: 'text',
    content: "Applied to a full quadratic, the technique converts standard form to vertex form — which displays the vertex directly.",
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Write $y = x^2 - 8x + 3$ in vertex form and state the vertex.',
    steps: [
      { label: 'Halve and square', content: 'Half of $-8$ is $-4$; squaring gives $16$.' },
      { label: 'Add and subtract 16', content: '$y = (x^2 - 8x + 16) - 16 + 3 = (x - 4)^2 - 13$. The added $16$ completes the square; the subtracted $16$ keeps the equation true.' },
      { label: 'Read the vertex', content: 'Vertex form $y = (x - h)^2 + k$ gives $(4, -13)$. Note the sign: $(x - 4)^2$ places the vertex at $x = +4$, not $-4$.' },
      { label: 'Verify by expanding', content: '$(x-4)^2 - 13 = x^2 - 8x + 16 - 13 = x^2 - 8x + 3$ — the original quadratic, so the conversion is correct.' },
    ],
  },
  {
    type: 'text',
    content: "The same halve-and-square move reads a circle's equation. A circle given as $x^2 + y^2 - 6x + 4y = 3$ hides its center and radius; completing the square in $x$ and in $y$ separately gives $(x - 3)^2 + (y + 2)^2 = 16$ — center $(3,\\,-2)$, radius $\\sqrt{16} = 4$. One technique serves both question types.",
  },

  { type: 'heading', content: 'Reading the parabola from its form' },
  {
    type: 'text',
    content: "A parabola is symmetric about a vertical axis, and the same quadratic can be written in three forms, each displaying a different feature directly. So match the form to the feature the question asks about, rather than converting by default — deriving the vertex from standard form when the problem hands you factored form is unnecessary work, and the timer collects for it.",
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
    content: "The vertex sits on the axis of symmetry — exactly **halfway between the roots**, because the two roots are mirror images across that axis. When you know the roots, their average gives the x-coordinate of the vertex; no formula, no conversion.",
  },
  {
    type: 'diagramRef',
    visualType: 'parabolaFromGraphDiagram',
    description: "The graph of $y=2(x-2)^2-3$: the vertex $(2,\\,-3)$ sits on the axis of symmetry, and the y-intercept $(0,\\,5)$ reflects across that axis to the mirror point $(4,\\,5)$ — one known point off the axis always gives you a second.",
  },
  {
    type: 'text',
    content: "Figure 1 makes that symmetry concrete: the axis of symmetry runs vertically through the vertex, and every point on the parabola has a mirror twin at the same height on the far side — so one known point off the axis hands you a second for free.",
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The graph of $y=(x-1)(x-5)$ is a parabola. Find its vertex.',
    steps: [
      { label: 'Read the roots', content: 'Factored form displays them directly: $x=1$ and $x=5$.' },
      { label: 'Average the roots', content: 'The vertex x-coordinate sits halfway between them: $\\frac{1+5}{2}=3$.' },
      { label: 'Substitute back', content: '$y=(3-1)(3-5)=(2)(-2)=-4$.' },
      { label: 'State the vertex', content: 'The vertex is $(3,\\,-4)$.' },
    ],
  },

  { type: 'heading', content: 'The discriminant' },
  {
    type: 'text',
    content: "The discriminant $b^2-4ac$ — the expression under the radical in the quadratic formula — counts the real solutions by its sign alone, because the radical is where a solution can fail to exist: a positive number has two square roots, zero has one, and a negative number has none that are real.",
  },
  {
    type: 'list',
    items: [
      '**Positive** — two real solutions.',
      '**Zero** — one (a repeated root; the parabola touches the axis at a single point).',
      '**Negative** — none.',
    ],
  },
  {
    type: 'aside',
    kind: 'note',
    content: "One point gets overanalyzed: the magnitude carries no information. A discriminant of $-24$ says nothing more than a discriminant of $-1$ — only the sign matters.",
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
    content: "When a question asks only for the **sum** or **product** of the solutions, computing the individual roots is wasted effort — the coefficients already carry both values.",
  },
  {
    type: 'list',
    title: 'For $ax^2+bx+c=0$:',
    items: [
      'The roots **sum** to $-\\dfrac{b}{a}$.',
      'The roots **multiply** to $\\dfrac{c}{a}$.',
    ],
  },
  {
    type: 'text',
    content: "Both values read straight off the coefficients. On these questions the relations are faster than either factoring or graphing in Desmos.",
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
    type: 'aside',
    kind: 'remember',
    content: "Two details account for most errors here: the leading negative in the sum ($-b/a$, not $b/a$), and the division by $a$ when the leading coefficient isn't $1$. Put the equation in standard form before reading off $a$, $b$, and $c$.",
  },

  { type: 'heading', content: 'Polynomial graphs beyond the parabola' },
  {
    type: 'text',
    content: "The factor-zero identity isn't limited to quadratics: for any polynomial, $(x - r)$ is a factor exactly when the graph meets the x-axis at $r$. What a higher-degree graph adds is **multiplicity** — the power on each factor — and the power controls what the graph does at its zero. An **odd** power **crosses** the axis. An **even** power **touches** the axis and turns back without crossing, because a squared factor such as $(x - r)^2$ is never negative and so can't change the sign of the output there.",
  },
  {
    type: 'text',
    content: "Run that logic in reverse and it becomes an elimination tool: a graph that bounces off the axis at $x = r$ forces an even power of $(x - r)$ in the equation, a fact that rules out answer choices without any computation.",
  },
  {
    type: 'text',
    content: "The two ends of the graph are governed by the leading term alone, because for large $|x|$ it dwarfs every other term.",
  },
  {
    type: 'list',
    title: 'End behavior:',
    items: [
      "**Odd degree** sends the ends in opposite directions — down on the left and up on the right when the leading coefficient is positive, the reverse when it's negative.",
      '**Even degree** sends both ends the same way — both up for a positive leading coefficient, both down for a negative one.',
    ],
  },
  {
    type: 'text',
    content: "Degree parity and the sign of the leading term settle every end-behavior question. The middle terms never participate.",
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The graph of $f(x) = (x-3)^2(x+1)$ meets the x-axis at two points. Describe the graph at each point, and describe its end behavior.',
    steps: [
      { label: 'Read the zeros and their multiplicities', content: 'The factors give zeros at $x = 3$ (power $2$) and $x = -1$ (power $1$).' },
      { label: 'Apply the parity rule at each zero', content: 'At $x = -1$ the odd power crosses the axis. At $x = 3$ the even power touches and turns back: $(x-3)^2 \\ge 0$ on both sides of $3$, so the sign of $f$ does not change there.' },
      { label: 'Read the leading term', content: 'Multiplying only the highest powers, $x^2 \\cdot x = x^3$: degree $3$, positive coefficient. The graph falls to the left and rises to the right.' },
    ],
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
    answer: "**$y=a(x+4)(x-2)$**, vertex x $=\\dfrac{-4+2}{2}=-1$. Each factor is zero at its root — the root $x=-4$ corresponds to the factor $(x+4)$ — and the vertex sits halfway between the roots.",
  },
  {
    type: 'checkpointQuestion',
    question: 'Without solving, how many real solutions does $2x^2 - 4x + 5 = 0$ have?',
    answer: "**None.** The discriminant is $b^2-4ac=(-4)^2-4(2)(5)=16-40=-24$ — negative, so there are no real solutions. No solving required; the sign of the discriminant settles it.",
  },
  {
    type: 'checkpointQuestion',
    question: 'Solve $x^2 + 4x - 1 = 0$.',
    answer: "**$x = -2 \\pm \\sqrt5$.** No integer pair multiplies to $-1$ and adds to $4$, so factoring fails and the formula applies: $x = \\dfrac{-4 \\pm \\sqrt{16 - 4(1)(-1)}}{2} = \\dfrac{-4 \\pm \\sqrt{20}}{2} = \\dfrac{-4 \\pm 2\\sqrt5}{2} = -2 \\pm \\sqrt5$. Two details carry the calculation: subtracting $4ac$ with $c = -1$ **adds** $4$ under the radical, and the final $2$ divides both terms of the numerator.",
  },
  {
    type: 'checkpointQuestion',
    question: "A polynomial's graph crosses the x-axis at $x = -2$ and touches it without crossing at $x = 1$. What is the smallest-degree factored form consistent with the graph?",
    answer: "**$f(x) = a(x+2)(x-1)^2$ for some nonzero $a$.** The touch at $x = 1$ forces an even power on $(x - 1)$ — at minimum $2$ — while the crossing at $x = -2$ takes a single factor. The smallest total degree is therefore $3$.",
  },

  {
    type: 'summary',
    title: 'The whole topic in one pass',
    points: [
      'The **answer choices name the method** — whole numbers point to factoring, radicals to the formula, a sum-or-product question to the coefficient relations.',
      'A zero is the value that makes its **factor zero**, so move every term to one side before factoring.',
      "The **quadratic formula** solves what factoring can't once the equation is in standard form, and completing the square converts standard form to **vertex form**.",
      'The **vertex sits halfway between the roots**, and the sign of the **discriminant** counts the real solutions.',
      'On higher-degree graphs, **even powers touch** the axis, **odd powers cross**, and the leading term sets the end behavior.',
    ],
  },
];
