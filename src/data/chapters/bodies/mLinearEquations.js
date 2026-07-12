/**
 * Learn lesson body — Linear Equations & Lines (Math).
 *
 * NEW lean "review / cheat-sheet" style (not the old dense textbook template):
 * one SAT skill per lesson, plain language, one idea per short section, a
 * method, a scannable cheat-list/table, then 2-3 worked examples and a couple
 * of check-yourself questions. Gated by bodies.test.js (lean contract).
 * Voice + shape exemplar: gSubjectVerbAgreement.js.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 *
 * Scope: what a line means, slope from two points, writing a line, reading
 * $m$ and $b$ in context, parallel/perpendicular, and intercepts as anchors.
 * Solving/rearranging equations is a SEPARATE lesson — not re-taught here.
 */

export const mLinearEquationsBlocks = [
  {
    type: 'text',
    content: 'A line is one steady rate of change. Almost every line question comes down to two numbers: **how fast it climbs ($m$)** and **where it starts ($b$)**. Steady is the key word — a line never speeds up or slows down, so the moment you have those two numbers you can predict every point on it. That is why so many word problems, whatever the story, quietly reduce to finding $m$ and $b$.',
  },

  { type: 'heading', content: 'What a line tells you' },
  {
    type: 'text',
    content: 'Write a line as $y = mx + b$. Here $m$ is the **slope** — the rate of change, how much $y$ moves for every $+1$ in $x$ (rise over run). And $b$ is the **y-intercept** — the value of $y$ when $x = 0$, the starting point. Those two numbers are all a line carries, which is exactly why the $y = mx + b$ form is worth solving everything into: once an equation sits in that shape, the slope and starting value are just there to read off. Most slip-ups come from reading them off an equation that is not solved for $y$ yet.',
  },
  {
    type: 'keyInsight',
    content: 'If a question gives you a rate and a starting amount, you already have the line: the rate is $m$, the start is $b$.',
  },

  { type: 'heading', content: 'Slope from two points' },
  {
    type: 'text',
    content: 'Given two points, slope is $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$ — the change in $y$ divided by the change in $x$. Subtract in the **same order** on top and bottom. The order is the one thing that trips people: whichever point you call "first" on top you must call "first" on the bottom too, or the sign flips and the line tilts the wrong way. A positive $m$ rises left to right, a negative $m$ falls, and a horizontal line has $m = 0$ — so a quick sketch of the two points catches a wrong sign before it costs you the question.',
  },

  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Find the slope of the line through $(-2,\\ 5)$ and $(4,\\ -7)$.',
    steps: [
      { label: 'Set up in the same order', content: 'Take $(-2, 5)$ as the first point: $m = \\dfrac{y_2 - y_1}{x_2 - x_1} = \\dfrac{-7 - 5}{4 - (-2)}$.' },
      { label: 'Simplify', content: '$= \\dfrac{-12}{6} = -2$.' },
      { label: 'Sanity-check the sign', content: 'As $x$ moves from $-2$ up to $4$, $y$ drops from $5$ to $-7$, so the line falls — a negative slope is right.' },
    ],
  },

  { type: 'heading', content: 'Write a line from a point and a slope' },
  {
    type: 'text',
    content: 'Once you know $m$ and any one point, you have the whole line. This works because the slope fixes the *tilt* and a single point pins that tilt in place — together they leave exactly one line possible. Plug the point and slope into $y = mx + b$ and solve for $b$; whichever known point you use gives the same equation, so pick the one with the friendliest numbers. (Point-slope form $y - y_1 = m(x - x_1)$ does the same job in one step.)',
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A line passes through $(2, 3)$ and $(6, 11)$. Write its equation.',
    steps: [
      { label: 'Slope', content: '$m = \\dfrac{11 - 3}{6 - 2} = \\dfrac{8}{4} = 2$.' },
      { label: 'Find b', content: 'Use $(2, 3)$: $3 = 2(2) + b$, so $3 = 4 + b$ and $b = -1$.' },
      { label: 'Write it', content: '$y = 2x - 1$. Check the other point: $2(6) - 1 = 11$. Correct.' },
    ],
  },

  { type: 'heading', content: 'Reading m and b in a real context' },
  {
    type: 'text',
    content: 'In a word problem, $b$ is the **fixed starting amount** and $m$ is the **per-unit rate**. A plan that costs a $\\$30$ base fee plus $\\$5$ per class is $C = 5x + 30$: the $30$ is $b$ (cost of zero classes), the $5$ is $m$ (added per class). The signal to watch for is the word "per" — "per class," "per hour," "per year" almost always marks the slope, while a one-time or fixed amount marks the intercept. Sorting those two roles out is usually the entire question, since the test loves to ask what a specific number "represents" in the situation.',
  },
  {
    type: 'table',
    headers: ['In the equation', 'What it means in words'],
    rows: [
      ['$b$ (the constant)', 'Starting value, base fee, value when $x = 0$'],
      ['$m$ (coefficient of $x$)', 'Rate per unit — per hour, per item, per year'],
      ['sign of $m$', 'Positive = growing, negative = shrinking'],
    ],
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'A tank holds $y = 200 - 8x$ liters after $x$ minutes. What do $200$ and $-8$ mean?',
    steps: [
      { label: 'b = 200', content: 'The value at $x = 0$: the tank starts with $200$ liters.' },
      { label: 'm = -8', content: 'The rate: it loses $8$ liters each minute (negative = draining).' },
    ],
  },

  { type: 'heading', content: 'Parallel and perpendicular' },
  {
    type: 'text',
    content: '**Parallel** lines never meet, so they have **equal slopes** — equal tilt is exactly what keeps two lines from ever crossing. **Perpendicular** lines cross at a right angle, so their slopes are **negative reciprocals** — flip the fraction and change the sign. If one slope is $\\frac{2}{3}$, a perpendicular slope is $-\\frac{3}{2}$ (the two multiply to $-1$). The perpendicular rule has two parts and people usually remember only one: you must both flip the fraction *and* switch the sign, because doing just one of the two leaves the lines meeting at the wrong angle.',
  },
  {
    type: 'callout',
    content: 'Fast check: two slopes are perpendicular exactly when their product is $-1$.',
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Line $\\ell$ is perpendicular to $y = \\dfrac{3}{4}x + 5$ and passes through $(4, 1)$. Write its equation.',
    steps: [
      { label: 'Flip and negate', content: 'The given slope is $\\frac{3}{4}$, so $\\ell$ has slope $-\\frac{4}{3}$.' },
      { label: 'Find b', content: 'Use $(4, 1)$: $1 = -\\frac{4}{3}(4) + b = -\\frac{16}{3} + b$, so $b = 1 + \\frac{16}{3} = \\frac{19}{3}$.' },
      { label: 'Write it', content: '$y = -\\dfrac{4}{3}x + \\dfrac{19}{3}$.' },
    ],
  },

  { type: 'heading', content: 'Intercepts as anchors' },
  {
    type: 'text',
    content: 'The two intercepts are easy anchor points. For the **y-intercept**, set $x = 0$ and solve for $y$. For the **x-intercept**, set $y = 0$ and solve for $x$. They make good anchors because each one zeroes out a variable, leaving a one-step solve — the least error-prone points on the whole line to compute. When a question shows a graph and asks you to match an equation, checking where the line crosses each axis is usually faster and safer than testing full $(x, y)$ points.',
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'A line passes through $(0, 4)$ and $(3, 10)$. What are its slope and y-intercept?',
    answer: '**Slope $= 2$, y-intercept $= 4$.** $m = \\frac{10 - 4}{3 - 0} = \\frac{6}{3} = 2$, and $(0, 4)$ already sits at $x = 0$ so $b = 4$. The line is $y = 2x + 4$.',
  },
  {
    type: 'checkpointQuestion',
    question: 'A line is parallel to $y = -5x + 1$ and passes through $(0, -2)$. What is its equation?',
    answer: '**$y = -5x - 2$.** Parallel means the same slope, $-5$. The point $(0, -2)$ gives $b = -2$ directly.',
  },
  {
    type: 'checkpointQuestion',
    question: 'A rental costs $C = 0.20m + 45$ dollars for $m$ miles driven. What do $0.20$ and $45$ mean, and what does 100 miles cost?',
    answer: '**$0.20$ is the per-mile rate (slope $m$); $45$ is the fixed base fee (the y-intercept $b$, the cost at $0$ miles). For 100 miles: $\\$65$.** The word "per mile" flags the slope; the flat fee is the intercept. Cost $= 0.20(100) + 45 = 20 + 45 = 65$.',
  },

  {
    type: 'text',
    content: '**The move, every time:** pull out the slope ($m$) and the starting value ($b$). Two points give $m$; one point plus $m$ gives $b$; parallel copies $m$, perpendicular flips-and-negates it.',
  },
];
