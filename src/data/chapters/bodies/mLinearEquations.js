/**
 * Learn lesson body — Linear Equations & Lines (Math).
 *
 * VOICE v3 (adopted 2026-07-17, exemplar: bodies/centralIdeas.js): scannable
 * instructional register — direct address, contractions, 1-3 sentence text
 * blocks, list blocks for criteria, steps blocks for procedures; no
 * analogies, no pep-talk, no emojis. All substance of the v2 textbook
 * version preserved.
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
    content: "Every equation so far — the inequalities and absolute values included — held a single unknown. A linear equation in two variables describes something new: two quantities moving together, one starting at some value and changing at a constant rate as the other advances.",
  },
  {
    type: 'text',
    content: "Drawn in the coordinate plane, that relationship is a line. Slope-intercept form $y = mx + b$ names both defining numbers directly: $b$ is the starting value and $m$ is the rate of change.",
  },
  {
    type: 'text',
    content: "Most questions about lines, however they're worded, reduce to identifying one of these two quantities.",
  },

  { type: 'heading', content: 'Rate and starting value' },
  {
    type: 'text',
    content: "A linear relationship combines one fixed quantity with one repeating quantity. Consider a taxi fare: a $\\$3$ base charge plus $\\$2$ per mile.",
  },
  {
    type: 'text',
    content: "The $3$ is paid once, at the start — so it's $b$. The $2$ recurs with every mile — so it's $m$. The fare after $x$ miles is $2x + 3$.",
  },
  {
    type: 'text',
    content: "Any situation built from a one-time amount and a per-unit amount has this same structure. When a problem states a rate and a starting value, the equation of the line follows immediately — no setup required.",
  },
  {
    type: 'callout',
    content: "One caution: the equation displays $m$ and $b$ only once it's solved for $y$. In $3x + 2y = 8$, the coefficient $3$ is **not** the slope — rewrite in slope-intercept form first, then read off the values. Reading coefficients from an unsolved equation is the most frequent error on this topic.",
  },
  {
    type: 'keyInsight',
    content: 'A constant rate plus a starting amount defines a line: the rate is $m$ and the starting amount is $b$. The word "per" — per mile, per month, per ticket — flags the rate, and therefore the slope.',
  },

  { type: 'heading', content: 'Slope from two points' },
  {
    type: 'text',
    content: "Two points determine the slope: $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$ — the change in $y$ divided by the change in $x$.",
  },
  {
    type: 'text',
    content: "Subtract the coordinates in the same order in the numerator and the denominator. Reversing the order in only one place flips the sign of the result, turning a falling line into a rising one — the standard mistake in slope calculations.",
  },
  {
    type: 'tip',
    content: "A quick inspection guards against the sign error: if $y$ decreases as $x$ increases, the slope has to come out negative.",
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
    content: "Two special cases sit at the extremes of slope.",
  },
  {
    type: 'list',
    items: [
      '**Horizontal line** — slope $0$. The $y$-value never changes, so the rise is zero and the equation is simply $y = c$, where $c$ is the $y$-coordinate shared by every point on the line.',
      '**Vertical line** — **undefined** slope. The run is zero, so the slope formula would divide by zero, and the equation is $x = c$.',
    ],
  },
  {
    type: 'text',
    content: "The vertical line is also the one kind of line that isn't a function: the single input $x = c$ is paired with every $y$-value at once.",
  },
  {
    type: 'text',
    content: "In both cases the equation names the coordinate that stays fixed. The horizontal line through $(3, 5)$ is $y = 5$; the vertical line through $(3, 5)$ is $x = 3$.",
  },
  {
    type: 'callout',
    content: "The standard reversal on these items: writing $x = 3$ for the horizontal line — attaching the equation to the coordinate that varies rather than the one that stays constant.",
  },

  { type: 'heading', content: 'Writing the equation of a line' },
  {
    type: 'text',
    content: "A slope and any single point determine a line completely: the slope fixes the direction, and the point anchors the line in place.",
  },
  {
    type: 'steps',
    title: 'From a slope and a point to an equation',
    items: [
      '**Start from $y = mx + b$** with the known slope in place of $m$.',
      '**Substitute the point and solve for $b$.** Every point on the line produces the same value of $b$, so pick whichever point has the simplest coordinates.',
      '**Write the equation** — and when a second point is available, verify against it.',
    ],
  },
  {
    type: 'tip',
    content: "Point-slope form, $y - y_1 = m(x - x_1)$, does the same job in a single step — worth using when the arithmetic turns awkward.",
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A line passes through $(2, 3)$ and $(6, 11)$. Write its equation.',
    steps: [
      { label: 'Find the slope', content: '$m = \\dfrac{11 - 3}{6 - 2} = \\dfrac{8}{4} = 2$.' },
      { label: 'Solve for b', content: 'Substitute $(2, 3)$: $3 = 2(2) + b$, so $b = -1$.' },
      { label: 'Write and verify', content: "$y = 2x - 1$. The second point confirms it: $2(6) - 1 = 11$. The equation reproduces both points, so it's correct." },
    ],
  },

  { type: 'heading', content: 'The three forms of a line' },
  {
    type: 'text',
    content: "The same line can be written in three standard ways, and each form makes a different piece of information immediate.",
  },
  {
    type: 'list',
    items: [
      '**Slope-intercept, $y = mx + b$** — displays the slope and the y-intercept. Fastest for graphing and for comparing two lines.',
      '**Point-slope, $y - y_1 = m(x - x_1)$** — built directly from a slope and one known point, so it is fastest for *writing* a line from that data. No solving for $b$ required.',
      '**Standard, $Ax + By = C$** — arises naturally from combined-total situations and yields both intercepts quickly, since setting either variable to $0$ leaves a one-step equation.',
    ],
  },
  {
    type: 'text',
    content: "Converting uses only algebra already in hand. Distributing and collecting terms turns point-slope into slope-intercept; moving the $x$-term across the equals sign turns slope-intercept into standard form.",
  },
  {
    type: 'text',
    content: "The efficient habit: work in whichever form matches the given information, and convert only when the question requests a particular form.",
  },

  { type: 'heading', content: 'What do m and b mean in context?' },
  {
    type: 'text',
    content: "Applied questions present an equation such as $C = 5x + 30$ for a gym membership and ask what the $30$ represents. Classify each number by asking whether it occurs **once** or **with every unit**.",
  },
  {
    type: 'list',
    items: [
      'A one-time quantity — a joining fee, a deposit, an initial amount — is the constant term $b$.',
      'A quantity that recurs with each unit — a per-class charge, a monthly rate — is the coefficient $m$.',
    ],
  },
  {
    type: 'text',
    content: "Assigning these two roles answers the question completely — no computation involved.",
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
    content: "**Parallel** lines never intersect because they change at the same rate — same $m$, different $b$.",
  },
  {
    type: 'text',
    content: "The slope of a **perpendicular** line is the negative reciprocal of the original: invert the fraction, then change the sign, so $\\frac{2}{3}$ becomes $-\\frac{3}{2}$.",
  },
  {
    type: 'text',
    content: "Both operations are required. Doing only one — inverting without negating, or negating without inverting — produces a plausible-looking result, and wrong answer choices are routinely built from exactly that half-step.",
  },
  {
    type: 'callout',
    content: "To verify a perpendicular slope, multiply the two slopes: the product must equal $-1$. If it doesn't, one of the two operations — the inversion or the sign change — got skipped.",
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
    content: "The intercepts are the fastest points to find on any line, because each one sets a variable to zero and leaves a one-step calculation.",
  },
  {
    type: 'list',
    items: [
      'Set $x = 0$ → the y-intercept.',
      'Set $y = 0$ → the x-intercept.',
    ],
  },
  {
    type: 'tip',
    content: "When a question shows a graph and asks which equation matches it, compare where the line crosses the axes before testing any full $(x, y)$ point — the intercept check is quicker and less error-prone.",
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'A line passes through $(0, 4)$ and $(3, 10)$. What are its slope and y-intercept?',
    answer: '**Slope $= 2$, y-intercept $= 4$.** $m = \\frac{10 - 4}{3 - 0} = 2$. And $(0, 4)$ sits on the y-axis, so it *is* the y-intercept — $b = 4$ with no solving. The line is $y = 2x + 4$.',
  },
  {
    type: 'checkpointQuestion',
    question: 'A line is parallel to $y = -5x + 1$ and passes through $(0, -2)$. What is its equation?',
    answer: '**$y = -5x - 2$.** Parallel lines share a slope, so $m = -5$. The point $(0, -2)$ sits on the y-axis, which hands you $b = -2$ directly.',
  },
  {
    type: 'checkpointQuestion',
    question: 'A rental costs $C = 0.20m + 45$ dollars for $m$ miles driven. What do $0.20$ and $45$ mean, and what does 100 miles cost?',
    answer: '**$0.20$ is the per-mile rate — the slope. $45$ is the one-time base fee — the intercept. Driving 100 miles costs $\\$65$:** $0.20(100) + 45 = 65$. The phrase "per mile" flags the slope before any calculation.',
  },

  {
    type: 'checkpointQuestion',
    question: 'Write the equations of the horizontal line and the vertical line through $(-2, 7)$. Which of the two is not a function?',
    answer: '**Horizontal: $y = 7$. Vertical: $x = -2$. The vertical line is not a function.** Each equation names the coordinate that stays fixed: every point on the horizontal line has $y = 7$, and every point on the vertical line has $x = -2$. The vertical line pairs the single input $x = -2$ with every $y$-value, so it fails the definition of a function; the horizontal line is a function with slope $0$.',
  },

  {
    type: 'text',
    content: "**The whole chapter in one pass:** find the one-time quantity ($b$) and the per-unit quantity ($m$). Two points give $m$; one point plus $m$ gives $b$; a parallel line copies $m$; a perpendicular line inverts $m$ and changes its sign. A horizontal line is $y = c$ with slope $0$; a vertical line is $x = c$ with undefined slope.",
  },
];
