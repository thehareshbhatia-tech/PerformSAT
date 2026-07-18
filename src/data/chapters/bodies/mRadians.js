/**
 * Learn lesson body — Radians, Degrees & the Unit Circle (Geometry & Trig).
 *
 * VOICE v3 (adopted 2026-07-17, exemplar: bodies/centralIdeas.js): scannable
 * instructional register — direct address, contractions, 1-3 sentence text
 * blocks, list blocks for criteria, steps blocks for procedures; no
 * analogies, no pep-talk, no emojis. All substance of the v2 textbook
 * version preserved. Gated by bodies.test.js.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const mRadiansBlocks = [
  {
    type: 'text',
    content: "The circle we just studied supplies a second, more natural way to measure angles: by the arc an angle cuts from a circle rather than by degrees. A radian is simply another unit for the same quantity a degree measures — the size of an angle — just as feet and meters are alternative units for length.",
  },
  {
    type: 'text',
    content: "One equivalence organizes the entire topic: **a half-turn is $180°$, and that same half-turn is $\\pi$ radians.** Every conversion and every unit-circle value below follows from that single fact.",
  },

  { type: 'heading', content: 'The equivalence $180° = \\pi$ radians' },
  {
    type: 'text',
    content: "The symbol $\\pi$ denotes a number, approximately $3.14$, so $\\pi$ radians is slightly more than $3$ radians — and that measure is exactly a half-circle, $180°$.",
  },
  {
    type: 'list',
    title: 'Everything scales from the one anchor:',
    items: [
      'Half circle: $180° = \\pi$ radians.',
      'Full circle (doubling): $360° = 2\\pi$.',
      'Right angle (halving): $90° = \\frac{\\pi}{2}$.',
    ],
  },
  {
    type: 'text',
    content: "Anchor every conversion and every unit-circle value on this one equivalence, and there's nothing further to memorize.",
  },
  {
    type: 'diagramRef',
    visualType: 'radianArcDiagram',
    description: "A circle in which an arc exactly one radius long spans an angle of $1$ radian, anchored by $180° = \\pi$ radians with the conversion factors $\\times \\frac{\\pi}{180}$ to radians and $\\times \\frac{180}{\\pi}$ to degrees.",
  },

  { type: 'heading', content: 'Converting between degrees and radians' },
  {
    type: 'text',
    content: "Skip memorizing whether to multiply or divide by $\\frac{\\pi}{180}$ — a rule that flips easily under time pressure. Instead, choose the fraction that **cancels the unit you're leaving behind**.",
  },
  {
    type: 'list',
    items: [
      'To radians: multiply by $\\frac{\\pi}{180}$ — the degrees cancel.',
      'To degrees: multiply by $\\frac{180}{\\pi}$ — the radians cancel.',
    ],
  },
  {
    type: 'text',
    content: "The units themselves pick the correct factor.",
  },
  {
    type: 'keyInsight',
    content: 'Check the magnitude of the result. $45°$ should convert to a small value — $\\frac{\\pi}{4}\\approx 0.79$ — not a large one. A result far too large means the conversion fraction was inverted.',
  },

  { type: 'heading', content: 'Arc length and sector area' },
  {
    type: 'text',
    content: "When the angle $\\theta$ is **in radians**, arc length is $s = r\\theta$ — radius times angle, no conversion required. That simplicity is the reason radians exist: a radian angle measures its arc directly in radius-lengths.",
  },
  {
    type: 'text',
    content: "A sector occupies that same fraction of the circle, so its area is $A = \\tfrac{1}{2}r^2\\theta$.",
  },
  {
    type: 'text',
    content: "The standard error is dropping a *degree* angle straight into $r\\theta$. Given degrees, convert to radians first — or take the fraction $\\frac{\\theta}{360}$ of the whole circle instead.",
  },
  {
    type: 'tip',
    content: 'If a problem gives the angle in radians and asks for arc length, compute $r\\theta$ directly. Converting to degrees first adds an unnecessary step and another chance to slip.',
  },

  { type: 'heading', content: 'The unit circle: $(\\cos\\theta,\\ \\sin\\theta)$' },
  {
    type: 'text',
    content: "The unit circle has radius $1$ and is centered at the origin. A point on it at angle $\\theta$, measured from the positive $x$-axis, has coordinates $(\\cos\\theta,\\ \\sin\\theta)$.",
  },
  {
    type: 'text',
    content: "So the $x$-coordinate **is** the cosine and the $y$-coordinate **is** the sine. You read these values straight off the point's position — no computing.",
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

  { type: 'heading', content: 'Which sign? Check the quadrant' },
  {
    type: 'text',
    content: "The table supplies the magnitude; the quadrant supplies the sign.",
  },
  {
    type: 'list',
    items: [
      'Cosine takes the sign of $x$ — without exception.',
      'Sine takes the sign of $y$ — without exception.',
    ],
  },
  {
    type: 'text',
    content: "In Quadrant II, where $x$ is negative and $y$ is positive, cosine is negative and sine is positive. No sign chart to memorize: work out whether $x$ and $y$ are positive or negative in the given quadrant, and the signs follow.",
  },

  { type: 'heading', content: 'Coterminal angles and points off the unit circle' },
  {
    type: 'text',
    content: "Two extensions complete the picture.",
  },
  {
    type: 'text',
    content: "First, an angle of $2\\pi$ or more has wrapped past a full turn, and a negative angle has wrapped backward — but full revolutions leave the terminal point unchanged. Subtract $2\\pi$ (or add it, for negative angles) until the result lands in $[0, 2\\pi)$.",
  },
  {
    type: 'text',
    content: "The reduced angle is **coterminal** with the original — same terminal point, same cosine, same sine. So $\\frac{9\\pi}{4} - 2\\pi = \\frac{\\pi}{4}$, and $\\cos\\frac{9\\pi}{4} = \\cos\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}$.",
  },
  {
    type: 'text',
    content: "Second, a point $(x, y)$ on a circle whose radius isn't $1$ still yields its angle's cosine and sine: divide each coordinate by the point's distance from the origin, $r = \\sqrt{x^2 + y^2}$, so that $\\cos\\theta = \\frac{x}{r}$ and $\\sin\\theta = \\frac{y}{r}$.",
  },
  {
    type: 'text',
    content: "The unit circle is simply the case $r = 1$, where the division changes nothing and the coordinates are the values themselves.",
  },

  {
    type: 'steps',
    title: 'How to approach these questions',
    items: [
      "**Anchor on $180° = \\pi$.** Every conversion and every unit-circle value traces back to this one equivalence.",
      "**Convert by canceling.** Multiply by the fraction that cancels the unit you're leaving — $\\frac{\\pi}{180}$ to radians, $\\frac{180}{\\pi}$ to degrees — then check the size of the result.",
      "**Match the formula to the unit.** $s = r\\theta$ and $A = \\tfrac{1}{2}r^2\\theta$ take radians only; for degrees, use the $\\frac{\\theta}{360}$ fraction or convert first.",
      "**Read the unit circle.** Magnitude from the reference angle in the table, sign from the quadrant — cosine follows $x$, sine follows $y$.",
      "**Reduce oversized angles.** Strip full turns of $2\\pi$ to reach the coterminal angle, and divide coordinates by $r = \\sqrt{x^2 + y^2}$ when the point sits on a larger circle.",
    ],
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Convert $135°$ to radians.',
    steps: [
      { label: 'Choose the factor', content: "The conversion leaves degrees, so multiply by $\\frac{\\pi}{180}$ — that way the degrees cancel." },
      { label: 'Multiply', content: '$135 \\cdot \\frac{\\pi}{180} = \\frac{135\\pi}{180}$.' },
      { label: 'Simplify', content: 'Divide numerator and denominator by $45$: $\\frac{3\\pi}{4}$. As a check, the result is slightly more than $\\frac{\\pi}{2}$, consistent with an angle just past $90°$.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A circle has radius $6$. Find the length of the arc cut off by a central angle of $\\frac{\\pi}{3}$ radians.',
    steps: [
      { label: 'Choose the formula', content: 'The angle is already in radians, so $s = r\\theta$ applies directly with no conversion.' },
      { label: 'Substitute', content: '$s = 6 \\cdot \\frac{\\pi}{3}$.' },
      { label: 'Compute', content: '$\\frac{6\\pi}{3} = 2\\pi$. The arc is $2\\pi$ units long; no further conversion is needed.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A circle has radius $4$. Find the area of a sector with central angle $\\frac{\\pi}{6}$ radians.',
    steps: [
      { label: 'Choose the formula', content: 'The angle is in radians, so $A = \\tfrac{1}{2}r^2\\theta$ applies directly.' },
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
      { label: 'Find the magnitude', content: 'Its reference angle is $60° = \\frac{\\pi}{3}$, and $\\cos\\frac{\\pi}{3} = \\frac{1}{2}$.' },
      { label: 'Attach the sign', content: 'In Quadrant II the $x$-coordinate is negative, and cosine takes the sign of $x$, so $\\cos\\left(\\frac{2\\pi}{3}\\right) = -\\frac{1}{2}$. The table supplies the magnitude; the quadrant supplies the sign.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'Convert $\\frac{5\\pi}{6}$ radians to degrees.',
    answer: "**$150°$.** The conversion leaves radians, so multiply by $\\frac{180}{\\pi}$ so that the factors of $\\pi$ cancel: $\\frac{5\\pi}{6}\\cdot\\frac{180}{\\pi} = \\frac{5\\cdot 180}{6} = 150$.",
  },
  {
    type: 'checkpointQuestion',
    question: 'What is $\\sin\\left(\\frac{\\pi}{2}\\right)$, and how can you read it off the unit circle?',
    answer: "**$1$.** At $\\frac{\\pi}{2}$ ($90°$) the point on the unit circle is $(0, 1)$. Sine is the $y$-coordinate, so $\\sin\\frac{\\pi}{2} = 1$ is read directly from the point, with no computation.",
  },
  {
    type: 'checkpointQuestion',
    question: 'What is $\\sin\\left(\\frac{7\\pi}{6}\\right)$?',
    answer: "**$-\\frac{1}{2}$.** $\\frac{7\\pi}{6} = 210°$ lies in Quadrant III, where $y$ is negative, and sine takes the sign of $y$. The reference angle is $30° = \\frac{\\pi}{6}$ with $\\sin = \\frac{1}{2}$, so the signed value is $-\\frac{1}{2}$.",
  },
  {
    type: 'checkpointQuestion',
    question: 'The point $(-6, 8)$ lies on a circle centered at the origin, on the terminal side of an angle $\\theta$. What are $\\cos\\theta$ and $\\sin\\theta$?',
    answer: "**$\\cos\\theta = -\\frac{3}{5}$ and $\\sin\\theta = \\frac{4}{5}$.** The point's distance from the origin is $r = \\sqrt{(-6)^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$. Dividing each coordinate by $r$: $\\cos\\theta = \\frac{-6}{10} = -\\frac{3}{5}$ and $\\sin\\theta = \\frac{8}{10} = \\frac{4}{5}$. The signs check against the quadrant: $(-6, 8)$ lies in Quadrant II, where cosine is negative and sine is positive.",
  },

  {
    type: 'text',
    content: "**The whole topic in one anchor:** $180° = \\pi$. Convert with the factor that cancels the departing unit, apply $s = r\\theta$ only when the angle is in radians, and read $\\cos$ and $\\sin$ as the $x$- and $y$-coordinates of the unit-circle point — magnitude from the reference angle, sign from the quadrant. Strip full turns of $2\\pi$ from an oversized angle first, and divide by $r = \\sqrt{x^2 + y^2}$ when the point sits on a larger circle.",
  },
];
