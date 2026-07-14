/**
 * Learn lesson body — Radians, Degrees & the Unit Circle (Geometry & Trig).
 *
 * TUTOR VOICE (adopted 2026-07-14, exemplar: ./mLinearEquations.js): coaching
 * direct-address — talks TO the student, anticipates the mistake before it
 * happens, everyday anchor first ("feet and meters") and formulas second.
 * Lean structure unchanged. Gated by bodies.test.js.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const mRadiansBlocks = [
  {
    type: 'text',
    content: "Radians look scarier than they are. A radian is just another unit for the same thing a degree measures — the size of an angle — the way feet and meters both measure length. One fact runs this entire topic: **a half-turn is $180°$, and that same half-turn is $\\pi$ radians.** Everything below is that fact wearing different clothes.",
  },

  { type: 'heading', content: 'The one anchor: $180° = \\pi$' },
  {
    type: 'text',
    content: "First, defuse the symbol: $\\pi$ is just a number, about $3.14$. So $\\pi$ radians is a bit more than $3$ radians — and that's exactly a half-circle, $180°$. Double it: a full circle is $360° = 2\\pi$. Halve it: a right angle is $90° = \\frac{\\pi}{2}$. Hang every conversion and every unit-circle value on that one equivalence and there's nothing left to memorize.",
  },

  { type: 'heading', content: 'Converting: multiply so the unit cancels' },
  {
    type: 'text',
    content: "Don't memorize \"multiply or divide by $\\frac{\\pi}{180}$\" — that's exactly the kind of rule that flips itself under time pressure. Pick the fraction that **cancels the unit you're leaving**. Going to radians? Multiply by $\\frac{\\pi}{180}$ so the degrees cancel. Going to degrees? Multiply by $\\frac{180}{\\pi}$ so the radians cancel. The units make the decision for you.",
  },
  {
    type: 'keyInsight',
    content: 'Sanity-check the size. $45°$ should come out small — $\\frac{\\pi}{4}\\approx 0.79$ — not something huge. A giant answer means you flipped the fraction.',
  },

  { type: 'heading', content: 'Arc length and sector area' },
  {
    type: 'text',
    content: "When the angle $\\theta$ is **in radians**, arc length is just $s = r\\theta$ — radius times angle, no conversion, done. That clean formula is the whole reason radians exist: the angle measures the arc directly in radius-lengths. A sector (pie slice) is that same fraction of the circle, so its area is $A = \\tfrac{1}{2}r^2\\theta$. Here's where the points leak: dropping a *degree* angle straight into $r\\theta$. If the angle arrives in degrees, convert to radians first — or take the fraction $\\frac{\\theta}{360}$ of the whole circle instead.",
  },
  {
    type: 'tip',
    content: 'If a problem gives the angle in radians and asks for arc length, multiply $r\\theta$ and stop. Converting to degrees first just adds a place to slip.',
  },

  { type: 'heading', content: 'The unit circle: $(\\cos\\theta,\\ \\sin\\theta)$' },
  {
    type: 'text',
    content: "The unit circle has radius $1$, centered at the origin. A point on it at angle $\\theta$ (measured from the positive $x$-axis) has coordinates $(\\cos\\theta,\\ \\sin\\theta)$. Read that again — the $x$-coordinate **is** the cosine and the $y$-coordinate **is** the sine. You don't compute them; you read them off.",
  },
  {
    type: 'table',
    headers: ['$\\theta$', 'Degrees', '$\\cos\\theta$ (x)', '$\\sin\\theta$ (y)'],
    rows: [
      ['$0$', '$0°$', '$1$', '$0$'],
      ['$\\frac{\\pi}{6}$', '$30°$', '$\\frac{\\sqrt{3}}{2}$', '$\\frac{1}{2}$'],
      ['$\\frac{\\pi}{4}$', '$45°$', '$\\frac{\\sqrt{2}}{2}$', '$\\frac{\\sqrt{2}}{2}$'],
      ['$\\frac{\\pi}{3}$', '$60°$', '$\\frac{1}{2}$', '$\\frac{\\sqrt{3}}{2}$'],
      ['$\\frac{\\pi}{2}$', '$90°$', '$0$', '$1$'],
    ],
  },

  { type: 'heading', content: 'The sign comes from the quadrant' },
  {
    type: 'text',
    content: "The table hands you the size; the quadrant hands you the sign. Cosine follows $x$ and sine follows $y$ — always. So in Quadrant II, where $x$ is negative and $y$ is positive, cosine is negative and sine is positive. You never memorize a sign chart. You just ask: in this quadrant, is $x$ negative? Is $y$ negative?",
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Convert $135°$ to radians.',
    steps: [
      { label: 'Pick the factor', content: "You're leaving degrees, so multiply by $\\frac{\\pi}{180}$ — the degrees cancel." },
      { label: 'Multiply', content: '$135 \\cdot \\frac{\\pi}{180} = \\frac{135\\pi}{180}$.' },
      { label: 'Simplify', content: 'Divide top and bottom by $45$: $\\frac{3\\pi}{4}$. Sanity check: a bit more than $\\frac{\\pi}{2}$, which fits an angle just past $90°$.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A circle has radius $6$. Find the length of the arc cut off by a central angle of $\\frac{\\pi}{3}$ radians.',
    steps: [
      { label: 'Choose the formula', content: 'The angle is already in radians, so $s = r\\theta$ works as-is — no conversion.' },
      { label: 'Substitute', content: '$s = 6 \\cdot \\frac{\\pi}{3}$.' },
      { label: 'Compute', content: '$\\frac{6\\pi}{3} = 2\\pi$. The arc is $2\\pi$ units long. Multiply and stop.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A circle has radius $4$. Find the area of a sector with central angle $\\frac{\\pi}{6}$ radians.',
    steps: [
      { label: 'Choose the formula', content: 'Radians again, so $A = \\tfrac{1}{2}r^2\\theta$ goes straight to work.' },
      { label: 'Substitute', content: '$A = \\tfrac{1}{2}(4)^2\\left(\\frac{\\pi}{6}\\right) = \\tfrac{1}{2}\\cdot 16 \\cdot \\frac{\\pi}{6}$.' },
      { label: 'Compute', content: '$8 \\cdot \\frac{\\pi}{6} = \\frac{8\\pi}{6} = \\frac{4\\pi}{3}$.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'What is $\\cos\\left(\\frac{2\\pi}{3}\\right)$?',
    steps: [
      { label: 'Locate the angle', content: '$\\frac{2\\pi}{3} = 120°$, which lands in Quadrant II (between $90°$ and $180°$).' },
      { label: 'Get the size', content: 'Its reference angle is $60° = \\frac{\\pi}{3}$, and $\\cos\\frac{\\pi}{3} = \\frac{1}{2}$.' },
      { label: 'Attach the sign', content: 'In Quadrant II the $x$-coordinate is negative, and cosine follows $x$. So $\\cos\\left(\\frac{2\\pi}{3}\\right) = -\\frac{1}{2}$. Size from the table, sign from the quadrant.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'Convert $\\frac{5\\pi}{6}$ radians to degrees.',
    answer: "**$150°$.** You're leaving radians, so multiply by $\\frac{180}{\\pi}$ and let the $\\pi$'s cancel: $\\frac{5\\pi}{6}\\cdot\\frac{180}{\\pi} = \\frac{5\\cdot 180}{6} = 150$.",
  },
  {
    type: 'checkpointQuestion',
    question: 'What is $\\sin\\left(\\frac{\\pi}{2}\\right)$, and how can you read it off the unit circle?',
    answer: "**$1$.** At $\\frac{\\pi}{2}$ ($90°$) the point on the unit circle is $(0, 1)$. Sine is the $y$-coordinate — so you read $\\sin\\frac{\\pi}{2} = 1$ straight off the point, no computing.",
  },
  {
    type: 'checkpointQuestion',
    question: 'What is $\\sin\\left(\\frac{7\\pi}{6}\\right)$?',
    answer: "**$-\\frac{1}{2}$.** $\\frac{7\\pi}{6} = 210°$ lands in Quadrant III, where $y$ is negative — and sine follows $y$. The reference angle is $30° = \\frac{\\pi}{6}$ with $\\sin = \\frac{1}{2}$, so the signed value is $-\\frac{1}{2}$.",
  },

  {
    type: 'text',
    content: "**The move, every time:** anchor on $180° = \\pi$, convert by cancelling units, use $s = r\\theta$ when the angle is in radians, and read $\\cos$ and $\\sin$ as the $x$ and $y$ of the unit-circle point — size from the angle, sign from the quadrant.",
  },
];
