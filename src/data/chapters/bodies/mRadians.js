/**
 * Learn lesson body — Radians, Degrees & the Unit Circle (Geometry & Trig).
 *
 * Lean "review / cheat-sheet" style — one SAT skill, plain language, one idea
 * per short section, then worked examples and a couple of check-yourself
 * questions. Shape + voice exemplar: bodies/gSubjectVerbAgreement.js.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const mRadiansBlocks = [
  {
    type: 'text',
    content: 'Radians and degrees are just two units for the same thing — the size of an angle — the way feet and meters both measure length. Almost everything here comes from one fact: **a half-turn is $180°$, and a half-turn is also $\\pi$ radians.**',
  },

  { type: 'heading', content: 'The one anchor: $180° = \\pi$' },
  {
    type: 'text',
    content: 'Remember $\\pi$ is just a number, about $3.14$. So $\\pi$ radians is a bit more than $3$ radians — and that is exactly a half-circle, $180°$. Double it and a full circle is $360° = 2\\pi$ radians; halve it and a right angle is $90° = \\frac{\\pi}{2}$. Anchor every conversion and every unit-circle value to this one equivalence and you never have to memorize the rest.',
  },

  { type: 'heading', content: 'Converting: multiply so the unit cancels' },
  {
    type: 'text',
    content: 'Do not memorize "multiply or divide by $\\frac{\\pi}{180}$." Instead pick the fraction that **cancels the unit you are leaving**. Going to radians, multiply by $\\frac{\\pi}{180}$ (degrees cancel). Going to degrees, multiply by $\\frac{180}{\\pi}$ (radians cancel).',
  },
  {
    type: 'keyInsight',
    content: 'Sanity-check the size. $45°$ should become a small number like $\\frac{\\pi}{4}\\approx 0.79$, not something huge. A giant answer means you flipped the fraction.',
  },

  { type: 'heading', content: 'Arc length and sector area' },
  {
    type: 'text',
    content: 'When the angle $\\theta$ is **in radians**, arc length is just $s = r\\theta$ — radius times angle, no conversion. This clean formula is the main reason radians exist: the angle measures the arc directly in radius-lengths. A sector (pie slice) is that same fraction of the circle, so its area is $A = \\tfrac{1}{2}r^2\\theta$. If the angle is given in degrees, convert to radians first or take the fraction $\\frac{\\theta}{360}$ of the whole circle — dropping a degree angle straight into $r\\theta$ is the trap.',
  },
  {
    type: 'tip',
    content: 'If a problem gives the angle in radians and asks for arc length, multiply $r\\theta$ and stop. Converting to degrees first just adds an error step.',
  },

  { type: 'heading', content: 'The unit circle: $(\\cos\\theta,\\ \\sin\\theta)$' },
  {
    type: 'text',
    content: 'The unit circle has radius $1$, centered at the origin. A point on it at angle $\\theta$ (measured from the positive $x$-axis) has coordinates $(\\cos\\theta,\\ \\sin\\theta)$. So the $x$-coordinate **is** the cosine and the $y$-coordinate **is** the sine — you can just read them off.',
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
    content: 'The table gives the size; the quadrant gives the sign. Cosine follows $x$ and sine follows $y$. In Quadrant II, $x$ is negative and $y$ is positive, so $\\cos$ is negative and $\\sin$ is positive. Just ask: in this quadrant, is $x$ negative? is $y$ negative?',
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Convert $135°$ to radians.',
    steps: [
      { label: 'Pick the factor', content: 'Going to radians, multiply by $\\frac{\\pi}{180}$ so degrees cancel.' },
      { label: 'Multiply', content: '$135 \\cdot \\frac{\\pi}{180} = \\frac{135\\pi}{180}$.' },
      { label: 'Simplify', content: 'Divide top and bottom by $45$: $\\frac{3\\pi}{4}$. Sanity check: a bit more than $\\frac{\\pi}{2}$, which fits an angle past $90°$.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A circle has radius $6$. Find the length of the arc cut off by a central angle of $\\frac{\\pi}{3}$ radians.',
    steps: [
      { label: 'Choose the formula', content: 'The angle is already in radians, so use $s = r\\theta$ directly.' },
      { label: 'Substitute', content: '$s = 6 \\cdot \\frac{\\pi}{3}$.' },
      { label: 'Compute', content: '$\\frac{6\\pi}{3} = 2\\pi$. The arc is $2\\pi$ units long — no conversion needed.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A circle has radius $4$. Find the area of a sector with central angle $\\frac{\\pi}{6}$ radians.',
    steps: [
      { label: 'Choose the formula', content: 'The angle is in radians, so use $A = \\tfrac{1}{2}r^2\\theta$ directly.' },
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
      { label: 'Attach the sign', content: 'In Quadrant II the $x$-coordinate is negative, and cosine follows $x$. So $\\cos\\left(\\frac{2\\pi}{3}\\right) = -\\frac{1}{2}$.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'Convert $\\frac{5\\pi}{6}$ radians to degrees.',
    answer: '**$150°$.** Multiply by $\\frac{180}{\\pi}$ so radians cancel: $\\frac{5\\pi}{6}\\cdot\\frac{180}{\\pi} = \\frac{5\\cdot 180}{6} = 150$.',
  },
  {
    type: 'checkpointQuestion',
    question: 'What is $\\sin\\left(\\frac{\\pi}{2}\\right)$, and how can you read it off the unit circle?',
    answer: '**$1$.** At $\\frac{\\pi}{2}$ ($90°$) the point on the unit circle is $(0, 1)$; sine is the $y$-coordinate, so $\\sin\\frac{\\pi}{2} = 1$.',
  },
  {
    type: 'checkpointQuestion',
    question: 'What is $\\sin\\left(\\frac{7\\pi}{6}\\right)$?',
    answer: '**$-\\frac{1}{2}$.** $\\frac{7\\pi}{6} = 210°$ lands in Quadrant III, where $y$ is negative and sine follows $y$. The reference angle is $30° = \\frac{\\pi}{6}$ with $\\sin = \\frac{1}{2}$, so the signed value is $-\\frac{1}{2}$.',
  },

  {
    type: 'text',
    content: '**The move, every time:** anchor on $180° = \\pi$, convert by cancelling units, use $s = r\\theta$ when the angle is in radians, and read $\\cos$ and $\\sin$ as the $x$ and $y$ of the unit-circle point — size from the angle, sign from the quadrant.',
  },
];
