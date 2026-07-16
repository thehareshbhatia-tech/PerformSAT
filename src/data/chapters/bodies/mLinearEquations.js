/**
 * Learn lesson body — Linear Equations & Lines (Math).
 *
 * VOICE (adopted 2026-07-15, user-directed revision; this file is the
 * exemplar): professional textbook narrative. Teaches directly in flowing
 * prose — concept, why it works, how to apply it, where students commonly
 * err — in the measured register of a well-edited textbook. Concrete
 * real-world contexts are allowed when framed plainly as examples
 * ("Consider a taxi fare of..."); extended metaphors, cute headings,
 * pep-talk, and test-personification are out. Headings name the concept.
 * Lean structure unchanged: short headed sections, 4 worked examples,
 * 4 checkpoints. Gated by bodies.test.js.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 *
 * Scope: what a line means, slope from two points, horizontal and vertical
 * lines, writing a line, converting among the three forms, reading $m$ and
 * $b$ in context, parallel/perpendicular, and intercepts as anchors.
 * Solving/rearranging equations is a SEPARATE lesson — not re-taught here.
 */

export const mLinearEquationsBlocks = [
  {
    type: 'text',
    content: "Every linear equation describes the same underlying situation: a quantity that begins at some starting value and changes at a constant rate. The slope-intercept form $y = mx + b$ names both numbers directly — $b$ is the starting value and $m$ is the rate of change. Most questions about lines, however they are worded, reduce to identifying one of these two quantities.",
  },

  { type: 'heading', content: 'Rate and starting value' },
  {
    type: 'text',
    content: "A linear relationship combines one fixed quantity with one repeating quantity. Consider a taxi fare consisting of a $\\$3$ base charge plus $\\$2$ per mile: the $3$ is paid once, at the start, so it is $b$; the $2$ recurs with every mile, so it is $m$. The fare after $x$ miles is $2x + 3$. Any situation built from a one-time amount and a per-unit amount has this same structure, and when a problem states a rate and a starting value, the equation of the line follows immediately — no setup is required.",
  },
  {
    type: 'text',
    content: "One caution: the equation displays $m$ and $b$ only once it is solved for $y$. In $3x + 2y = 8$, the coefficient $3$ is **not** the slope. Rewrite the equation in slope-intercept form first, then read off the values. Reading coefficients from an unsolved equation is the most frequent error on this topic.",
  },
  {
    type: 'keyInsight',
    content: 'A constant rate together with a starting amount defines a line: the rate is $m$ and the starting amount is $b$. The word "per" — per mile, per month, per ticket — identifies the rate, and therefore the slope.',
  },

  { type: 'heading', content: 'Slope from two points' },
  {
    type: 'text',
    content: "Two points determine the slope: $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$ — the change in $y$ divided by the change in $x$. Subtract the coordinates in the same order in the numerator and the denominator. Reversing the order in only one place flips the sign of the result, turning a falling line into a rising one; this sign error is the standard mistake in slope calculations. A quick inspection guards against it: if $y$ decreases as $x$ increases, the slope must come out negative.",
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Find the slope of the line through $(-2,\\ 5)$ and $(4,\\ -7)$.',
    steps: [
      { label: 'Subtract in a consistent order', content: 'Treat $(-2, 5)$ as the first point in both the numerator and the denominator: $m = \\dfrac{-7 - 5}{4 - (-2)}$.' },
      { label: 'Simplify', content: '$= \\dfrac{-12}{6} = -2$.' },
      { label: 'Check the sign', content: 'As $x$ increases from $-2$ to $4$, $y$ decreases from $5$ to $-7$. A falling line has a negative slope, so $-2$ is consistent.' },
    ],
  },

  { type: 'heading', content: 'Horizontal and vertical lines' },
  {
    type: 'text',
    content: "Two special cases sit at the extremes of slope. A **horizontal line** has slope $0$: the $y$-value never changes, so the rise is zero and the equation is simply $y = c$, where $c$ is the $y$-coordinate shared by every point on the line. A **vertical line** has an **undefined** slope: the run is zero, and the slope formula would divide by zero. Its equation is $x = c$, and it is the one kind of line that is not a function — the single input $x = c$ is paired with every $y$-value at once. In both cases the equation names the coordinate that stays fixed: the horizontal line through $(3, 5)$ is $y = 5$, and the vertical line through $(3, 5)$ is $x = 3$. Writing $x = 3$ for the horizontal line — attaching the equation to the coordinate that varies rather than the one that is constant — is the standard reversal on these items.",
  },

  { type: 'heading', content: 'Writing the equation of a line' },
  {
    type: 'text',
    content: "A slope and any single point determine a line completely: the slope fixes the direction, and the point anchors the line in place. Substitute the known point into $y = mx + b$ and solve for $b$. Every point on the line produces the same value of $b$, so choose whichever point has the simplest coordinates. Point-slope form, $y - y_1 = m(x - x_1)$, accomplishes the same task in a single step and is worth using when the arithmetic is awkward.",
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A line passes through $(2, 3)$ and $(6, 11)$. Write its equation.',
    steps: [
      { label: 'Find the slope', content: '$m = \\dfrac{11 - 3}{6 - 2} = \\dfrac{8}{4} = 2$.' },
      { label: 'Solve for b', content: 'Substitute $(2, 3)$: $3 = 2(2) + b$, so $b = -1$.' },
      { label: 'Write and verify', content: '$y = 2x - 1$. The second point confirms it: $2(6) - 1 = 11$. The equation reproduces both points, so it is correct.' },
    ],
  },

  { type: 'heading', content: 'Converting among the three forms' },
  {
    type: 'text',
    content: "The same line can be written in three standard ways, and each form makes a different piece of information immediate. Slope-intercept form $y = mx + b$ displays the slope and the y-intercept, so it is fastest for graphing and for comparing two lines. Point-slope form $y - y_1 = m(x - x_1)$ is built directly from a slope and one known point, so it is fastest for *writing* a line from that data — no solving for $b$ is required. Standard form $Ax + By = C$ arises naturally from combined-total situations and yields both intercepts quickly, since setting either variable to $0$ leaves a one-step equation. Converting among the forms uses only algebra already in hand: distributing and collecting terms turns point-slope into slope-intercept, and moving the $x$-term across the equals sign turns slope-intercept into standard form. The efficient habit is to work in whichever form matches the given information, converting only when the question requests a particular form.",
  },

  { type: 'heading', content: 'Interpreting m and b in context' },
  {
    type: 'text',
    content: "Applied questions present an equation such as $C = 5x + 30$ for a gym membership and ask what the $30$ represents. Classify each number by asking whether it occurs **once** or **with every unit**. A one-time quantity — a joining fee, a deposit, an initial amount — is the constant term $b$. A quantity that recurs with each unit — a per-class charge, a monthly rate — is the coefficient $m$. Assigning these two roles answers the question completely; no computation is involved.",
  },
  {
    type: 'table',
    headers: ['In the equation', 'What it means in words'],
    rows: [
      ['$b$ (the constant term)', 'Occurs once: the starting value, the base fee, the value of $y$ when $x = 0$'],
      ['$m$ (the coefficient of $x$)', 'Occurs with every unit: per hour, per item, per year'],
      ['the sign of $m$', 'Positive means the quantity grows; negative means it shrinks'],
    ],
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'A tank holds $y = 200 - 8x$ liters after $x$ minutes. What do $200$ and $-8$ mean?',
    steps: [
      { label: 'The one-time number', content: '$200$ is $b$ — the amount in the tank before any time has passed.' },
      { label: 'The per-unit number', content: '$-8$ is $m$ — the tank loses $8$ liters each minute. The negative slope indicates a draining tank.' },
    ],
  },

  { type: 'heading', content: 'Parallel and perpendicular lines' },
  {
    type: 'text',
    content: "**Parallel** lines never intersect because they change at the same rate — same $m$, different $b$. The slope of a **perpendicular** line is the negative reciprocal of the original: invert the fraction, then change the sign, so $\\frac{2}{3}$ becomes $-\\frac{3}{2}$. Both operations are required. Performing only one — inverting without negating, or negating without inverting — produces a plausible-looking result, and wrong answer choices are routinely constructed from exactly that half-step.",
  },
  {
    type: 'callout',
    content: 'To verify a perpendicular slope, multiply the two slopes: the product must equal $-1$. If it does not, one of the two operations — the inversion or the sign change — was skipped.',
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Line $\\ell$ is perpendicular to $y = \\dfrac{3}{4}x + 5$ and passes through $(4, 1)$. Write its equation.',
    steps: [
      { label: 'Apply both operations', content: 'Starting from $\\frac{3}{4}$: invert to $\\frac{4}{3}$, then negate to $-\\frac{4}{3}$. Verify: $\\frac{3}{4} \\cdot \\left(-\\frac{4}{3}\\right) = -1$.' },
      { label: 'Solve for b', content: 'Substitute $(4, 1)$: $1 = -\\frac{4}{3}(4) + b = -\\frac{16}{3} + b$, so $b = \\frac{19}{3}$.' },
      { label: 'Write the equation', content: '$y = -\\dfrac{4}{3}x + \\dfrac{19}{3}$.' },
    ],
  },

  { type: 'heading', content: 'Finding intercepts' },
  {
    type: 'text',
    content: "The intercepts are the fastest points to find on any line, because each one sets a variable to zero and leaves a one-step calculation. Setting $x = 0$ gives the y-intercept; setting $y = 0$ gives the x-intercept. When a question shows a graph and asks which equation matches it, compare where the line crosses the axes before testing any full $(x, y)$ point — the intercept check is quicker and less error-prone.",
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'A line passes through $(0, 4)$ and $(3, 10)$. What are its slope and y-intercept?',
    answer: '**Slope $= 2$, y-intercept $= 4$.** $m = \\frac{10 - 4}{3 - 0} = 2$. Because $(0, 4)$ lies on the y-axis, it is itself the y-intercept, so $b = 4$ requires no solving. The line is $y = 2x + 4$.',
  },
  {
    type: 'checkpointQuestion',
    question: 'A line is parallel to $y = -5x + 1$ and passes through $(0, -2)$. What is its equation?',
    answer: '**$y = -5x - 2$.** Parallel lines share a slope, so $m = -5$. The point $(0, -2)$ lies on the y-axis, which gives $b = -2$ directly.',
  },
  {
    type: 'checkpointQuestion',
    question: 'A rental costs $C = 0.20m + 45$ dollars for $m$ miles driven. What do $0.20$ and $45$ mean, and what does 100 miles cost?',
    answer: '**$0.20$ is the per-mile rate — the slope. $45$ is the one-time base fee — the intercept. Driving 100 miles costs $\\$65$:** $0.20(100) + 45 = 65$. The phrase "per mile" identifies the slope before any calculation.',
  },

  {
    type: 'checkpointQuestion',
    question: 'Write the equations of the horizontal line and the vertical line through $(-2, 7)$. Which of the two is not a function?',
    answer: '**Horizontal: $y = 7$. Vertical: $x = -2$. The vertical line is not a function.** Each equation names the coordinate that stays fixed: every point on the horizontal line has $y = 7$, and every point on the vertical line has $x = -2$. The vertical line pairs the single input $x = -2$ with every $y$-value, so it fails the definition of a function; the horizontal line is a function with slope $0$.',
  },

  {
    type: 'text',
    content: "**In summary:** identify the one-time quantity ($b$) and the per-unit quantity ($m$). Two points determine $m$; one point together with $m$ determines $b$; a parallel line copies $m$; a perpendicular line inverts $m$ and changes its sign. A horizontal line is $y = c$ with slope $0$; a vertical line is $x = c$ with undefined slope.",
  },
];
