/**
 * Learn lesson body — Linear Equations & Lines (Math).
 *
 * TUTOR VOICE (adopted 2026-07-14, user-approved exemplar): coaching
 * direct-address — talks TO the student, anticipates the mistake before it
 * happens, everyday anchor first and formula second, concrete decision rules
 * ("the word 'per' IS the slope"). Lean structure unchanged: short headed
 * sections, 4 worked examples, 3 checkpoints. Gated by bodies.test.js.
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
    content: "Here's the only thing a line ever does: it starts somewhere and climbs at one steady rate. That's the whole equation — $y = mx + b$, where $b$ is where you start and $m$ is how fast you climb. Nearly every line question, no matter how wordy, is secretly asking one of two things: what's the rate, or what's the start?",
  },

  { type: 'heading', content: 'Read a line like a taxi meter' },
  {
    type: 'text',
    content: "Picture a taxi: a $\\$3$ flat fee the moment you sit down, then $\\$2$ per mile. The $3$ is $b$ — you pay it once, at the start. The $2$ is $m$ — it repeats every mile. Fare $= 2x + 3$. Every line in existence works like that meter: one fixed amount, one repeating amount. When a problem hands you a rate and a starting value, don't set anything up — you already have the line.",
  },
  {
    type: 'text',
    content: "One catch: the equation only shows you $m$ and $b$ after it's solved for $y$. If you're staring at $3x + 2y = 8$, the $3$ is **not** the slope — solve for $y$ first, then read. Reading numbers off an unsolved equation is the single easiest wrong answer to hand in on this topic.",
  },
  {
    type: 'keyInsight',
    content: 'A rate plus a starting amount IS the line: the rate is $m$, the start is $b$. The word "per" — per mile, per month, per ticket — is your slope signal, every time.',
  },

  { type: 'heading', content: 'Slope from two points' },
  {
    type: 'text',
    content: "Two points give you the slope: $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$ — how much $y$ changed, over how much $x$ changed. Before you touch the numbers, decide which point is \"first,\" and keep it first on top **and** bottom. Swap the order in just one place and the sign flips with it — that's the classic slope mistake, and it turns a falling line into a rising one. Cheap insurance: glance at the two points. If $y$ drops as $x$ grows, your slope had better come out negative.",
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Find the slope of the line through $(-2,\\ 5)$ and $(4,\\ -7)$.',
    steps: [
      { label: 'Pick an order and stick to it', content: 'Call $(-2, 5)$ the first point in both places: $m = \\dfrac{-7 - 5}{4 - (-2)}$.' },
      { label: 'Simplify', content: '$= \\dfrac{-12}{6} = -2$.' },
      { label: 'Sanity-check the sign', content: 'As $x$ climbs from $-2$ to $4$, $y$ falls from $5$ to $-7$. Falling line, negative slope — the $-2$ checks out.' },
    ],
  },

  { type: 'heading', content: 'Build the line from what you have' },
  {
    type: 'text',
    content: "Once you know $m$ and any single point, the whole line is yours — the slope fixes the tilt, and one point pins that tilt in place. Drop the point into $y = mx + b$ and solve for $b$. Any known point works and they all give the same answer, so pick the one with the friendliest numbers. (Point-slope form $y - y_1 = m(x - x_1)$ does the same job in one move, if you like it better.)",
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A line passes through $(2, 3)$ and $(6, 11)$. Write its equation.',
    steps: [
      { label: 'Slope first', content: '$m = \\dfrac{11 - 3}{6 - 2} = \\dfrac{8}{4} = 2$.' },
      { label: 'Pin down b', content: 'Use $(2, 3)$: $3 = 2(2) + b$, so $b = -1$.' },
      { label: 'Write it and test it', content: '$y = 2x - 1$. Feed it the other point: $2(6) - 1 = 11$. It reproduces both points, so it is the line.' },
    ],
  },

  { type: 'heading', content: 'What m and b mean in a story' },
  {
    type: 'text',
    content: "This is the test's favorite disguise: hand you $C = 5x + 30$ for a gym plan and ask what the $30$ \"represents.\" Ask one question of each number: does it happen **once**, or **every time**? Once = $b$ (the join fee, the deposit, the starting amount). Every time = $m$ (the per-class charge, the monthly rate). Sort those two roles and the question is finished — there's nothing else to compute.",
  },
  {
    type: 'table',
    headers: ['In the equation', 'What it means in words'],
    rows: [
      ['$b$ (the constant)', 'Happens once: starting value, base fee, the $y$ when $x = 0$'],
      ['$m$ (coefficient of $x$)', 'Happens every time: per hour, per item, per year'],
      ['sign of $m$', 'Positive = growing, negative = shrinking'],
    ],
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'A tank holds $y = 200 - 8x$ liters after $x$ minutes. What do $200$ and $-8$ mean?',
    steps: [
      { label: 'The once number', content: '$200$ is $b$ — the liters in the tank before any time passes.' },
      { label: 'The every-time number', content: '$-8$ is $m$ — the tank loses $8$ liters each minute. Negative slope, draining tank.' },
    ],
  },

  { type: 'heading', content: 'Parallel and perpendicular' },
  {
    type: 'text',
    content: "**Parallel** lines never meet because they climb at the same rate — same $m$, different $b$. **Perpendicular** slopes take two moves: flip the fraction, then switch the sign. $\\frac{2}{3}$ becomes $-\\frac{3}{2}$. Here's where points get dropped: almost everyone does one move and stops. Flip without negating (or negate without flipping) and the answer looks plausible — the test builds a wrong choice out of exactly that half-step.",
  },
  {
    type: 'callout',
    content: 'Perpendicular check: the two slopes must multiply to $-1$. If yours don\'t, you skipped a move — go back and find whether it was the flip or the sign.',
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Line $\\ell$ is perpendicular to $y = \\dfrac{3}{4}x + 5$ and passes through $(4, 1)$. Write its equation.',
    steps: [
      { label: 'Both moves', content: 'Given slope $\\frac{3}{4}$: flip to $\\frac{4}{3}$, negate to $-\\frac{4}{3}$. Check: $\\frac{3}{4} \\cdot \\left(-\\frac{4}{3}\\right) = -1$.' },
      { label: 'Pin down b', content: 'Use $(4, 1)$: $1 = -\\frac{4}{3}(4) + b = -\\frac{16}{3} + b$, so $b = \\frac{19}{3}$.' },
      { label: 'Write it', content: '$y = -\\dfrac{4}{3}x + \\dfrac{19}{3}$.' },
    ],
  },

  { type: 'heading', content: 'Intercepts are free points' },
  {
    type: 'text',
    content: "Need a point on the line fast? Take an intercept — each one zeroes out a variable and leaves a one-step solve. Set $x = 0$ and you get the y-intercept; set $y = 0$ and you get the x-intercept. When a question shows a graph and asks which equation matches, check where the line crosses the axes before you test any full $(x, y)$ point — it's faster and much harder to fumble.",
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'A line passes through $(0, 4)$ and $(3, 10)$. What are its slope and y-intercept?',
    answer: '**Slope $= 2$, y-intercept $= 4$.** $m = \\frac{10 - 4}{3 - 0} = 2$ — and notice $(0, 4)$ already sits at $x = 0$, so $b = 4$ is free. No solving needed: the line is $y = 2x + 4$.',
  },
  {
    type: 'checkpointQuestion',
    question: 'A line is parallel to $y = -5x + 1$ and passes through $(0, -2)$. What is its equation?',
    answer: '**$y = -5x - 2$.** Parallel means copy the slope: $-5$. And $(0, -2)$ hands you $b = -2$ directly — both numbers were free.',
  },
  {
    type: 'checkpointQuestion',
    question: 'A rental costs $C = 0.20m + 45$ dollars for $m$ miles driven. What do $0.20$ and $45$ mean, and what does 100 miles cost?',
    answer: '**$0.20$ happens every mile — the rate (slope). $45$ happens once — the base fee (intercept). 100 miles costs $\\$65$:** $0.20(100) + 45 = 65$. The words "per mile" flagged the slope before you did any math.',
  },

  {
    type: 'text',
    content: "**The move, every time:** find the once number ($b$) and the every-time number ($m$). Two points give $m$; one point plus $m$ gives $b$; parallel copies $m$; perpendicular flips it *and* negates it.",
  },
];
