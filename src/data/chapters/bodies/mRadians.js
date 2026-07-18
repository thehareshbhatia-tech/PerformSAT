/**
 * Learn lesson body — Radians, Degrees & the Unit Circle (Geometry & Trig).
 *
 * VOICE v4 (adopted 2026-07-18, exemplar: bodies/centralIdeas.js):
 * practiced-tutor register — developed 2-5 sentence paragraphs with
 * connective tissue; every rule earns its "because"; student-psychology
 * named concretely; math teaching is example-led; varied rhythm, no
 * aphorism-per-block. Bans carried from v3: no analogies, no pep talk, no
 * exclamation marks, no emojis, no test-personification. All v3 teaching
 * claims preserved. Gated by bodies.test.js.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const mRadiansBlocks = [
  {
    type: 'text',
    content: "The circle we just studied handed every angle its measure in degrees. This chapter re-measures the same angles in a second, more natural unit that comes from the circle itself: a **radian** sizes an angle by the arc it cuts off — by how many radius-lengths that arc contains — rather than by splitting a turn into $360$ equal parts. A radian is simply another unit for the same quantity a degree measures, the size of an angle, just as feet and meters are alternative units for the same length.",
  },
  {
    type: 'text',
    content: "One equivalence organizes the entire topic: **a half-turn is $180°$, and that same half-turn is $\\pi$ radians.** Every conversion and every unit-circle value below follows from that single fact — which is why a chapter that looks formula-heavy asks surprisingly little of your memory.",
  },

  { type: 'heading', content: 'The equivalence $180° = \\pi$ radians' },
  {
    type: 'text',
    content: "Start with what the statement actually says, because $\\pi$ radians sounds more exotic than it is. The symbol $\\pi$ denotes a number, approximately $3.14$, so $\\pi$ radians is slightly more than $3$ radians — and that measure is exactly a half-circle, $180°$. From there the landmarks scale on their own: double the anchor and a full circle is $360° = 2\\pi$; halve it and a right angle is $90° = \\frac{\\pi}{2}$. Anchor every conversion and every unit-circle value on this one equivalence, and there is nothing further to memorize.",
  },
  {
    type: 'diagramRef',
    visualType: 'radianArcDiagram',
    description: "A circle in which an arc exactly one radius long spans an angle of $1$ radian, anchored by $180° = \\pi$ radians with the conversion factors $\\times \\frac{\\pi}{180}$ to radians and $\\times \\frac{180}{\\pi}$ to degrees.",
  },

  { type: 'heading', content: 'Converting between degrees and radians' },
  {
    type: 'text',
    content: "Convert $60°$ to radians and the whole method is visible in one line. The school move is to memorize which operation applies — multiply by $\\frac{\\pi}{180}$, or was it divide? — and a memorized rule with no reason behind it is exactly the kind that flips under time pressure. So store the reason instead: read $\\frac{\\pi}{180}$ as $\\pi$ radians per $180$ degrees, and multiplying $60°$ by it cancels the degrees, leaving $\\frac{60\\pi}{180} = \\frac{\\pi}{3}$ — a pure radian measure. The correct factor is always the fraction that **cancels the unit you're leaving behind**.",
  },
  {
    type: 'list',
    title: 'Both directions run on that one principle:',
    items: [
      'To radians: multiply by $\\frac{\\pi}{180}$ — the degrees cancel.',
      'To degrees: multiply by $\\frac{180}{\\pi}$ — the radians cancel.',
    ],
  },
  {
    type: 'keyInsight',
    content: 'Check the magnitude of the result. $45°$ is a smallish angle, so it should convert to a smallish number — $\\frac{\\pi}{4}\\approx 0.79$ — and a result that comes out far too large means the conversion fraction was inverted. The check takes two seconds and catches the standard error before it costs anything.',
  },

  { type: 'heading', content: 'Arc length and sector area' },
  {
    type: 'text',
    content: "A circle has radius $5$, and a central angle of $2$ radians cuts an arc from it. With the angle in radians, the arc's length is a single multiplication: $s = r\\theta = 5 \\cdot 2 = 10$. There is a reason it collapses like that — a radian angle measures its arc directly in radius-lengths, so an angle of $2$ radians spans an arc exactly two radii long. That simplicity is why radians exist at all, and it is why no conversion belongs anywhere in the formula.",
  },
  {
    type: 'text',
    content: "A sector occupies the same fraction of the circle's interior that its arc occupies of the boundary, so its area follows the same radian rule: $A = \\tfrac{1}{2}r^2\\theta$. The error that actually costs points here is dropping a *degree* angle straight into either formula. Walk that wrong path once with numbers: $60°$ on the radius-$5$ circle would give $r\\theta = 5 \\cdot 60 = 300$, an arc nearly ten times the circle's entire circumference of $10\\pi \\approx 31.4$. Given degrees, convert to radians first — or take the fraction $\\frac{\\theta}{360}$ of the whole circle instead.",
  },
  {
    type: 'tip',
    content: 'If a problem gives the angle in radians and asks for arc length, compute $r\\theta$ directly. Converting to degrees first adds an unnecessary step and another chance to slip — the formula was built for the unit you were handed.',
  },

  { type: 'heading', content: 'The unit circle: $(\\cos\\theta,\\ \\sin\\theta)$' },
  {
    type: 'text',
    content: "The unit circle — radius $1$, centered at the origin — turns cosine and sine from calculations into coordinates. A point on it at angle $\\theta$, measured from the positive $x$-axis, sits at $(\\cos\\theta,\\ \\sin\\theta)$: the $x$-coordinate **is** the cosine and the $y$-coordinate **is** the sine. So at $\\theta = 0$ the point is $(1, 0)$, and that position is the entire computation of $\\cos 0 = 1$ and $\\sin 0 = 0$. The values are read off the point, not worked out.",
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
    content: "The table supplies the magnitude; the quadrant supplies the sign. Why does the split work? Because cosine and sine *are* the point's coordinates, cosine takes the sign of $x$ and sine takes the sign of $y$ — without exception, in every quadrant. In Quadrant II, for instance, $x$ is negative and $y$ is positive, so cosine is negative and sine is positive. No sign chart earns its memorization here: work out whether $x$ and $y$ are positive or negative where the angle lands, and the signs follow.",
  },

  { type: 'heading', content: 'Coterminal angles and points off the unit circle' },
  {
    type: 'text',
    content: "What is $\\cos\\frac{9\\pi}{4}$? The angle is larger than $2\\pi$, which means it has wrapped past a full turn — and a full revolution returns the terminal point to exactly where it started, so the wrap changes nothing that cosine or sine can detect. Subtract $2\\pi$: $\\frac{9\\pi}{4} - 2\\pi = \\frac{\\pi}{4}$. The reduced angle is **coterminal** with the original — same terminal point, same cosine, same sine — so $\\cos\\frac{9\\pi}{4} = \\cos\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}$. A negative angle has wrapped backward and unwinds the same way: add $2\\pi$ instead, repeating either move until the result lands in $[0, 2\\pi)$.",
  },
  {
    type: 'text',
    content: "The other extension handles points that sit on some larger circle. Take $(3, 4)$: its distance from the origin is $r = \\sqrt{3^2 + 4^2} = 5$, so it lies on a circle of radius $5$, not $1$. Dividing each coordinate by that distance — in general, $r = \\sqrt{x^2 + y^2}$ — rescales the point onto the unit circle without moving its angle, which is why $\\cos\\theta = \\frac{x}{r} = \\frac{3}{5}$ and $\\sin\\theta = \\frac{y}{r} = \\frac{4}{5}$. The unit circle is simply the case $r = 1$, where the division changes nothing and the coordinates are the values themselves.",
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
      { label: 'Choose the factor', content: "The conversion leaves degrees behind, so multiply by $\\frac{\\pi}{180}$ — the fraction that cancels them." },
      { label: 'Multiply', content: '$135 \\cdot \\frac{\\pi}{180} = \\frac{135\\pi}{180}$.' },
      { label: 'Simplify', content: 'Divide numerator and denominator by $45$ to get $\\frac{3\\pi}{4}$. As a check, the result is slightly more than $\\frac{\\pi}{2}$ — consistent with an angle just past $90°$.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A circle has radius $6$. Find the length of the arc cut off by a central angle of $\\frac{\\pi}{3}$ radians.',
    steps: [
      { label: 'Choose the formula', content: 'The angle is already in radians, so $s = r\\theta$ applies directly with no conversion.' },
      { label: 'Substitute', content: '$s = 6 \\cdot \\frac{\\pi}{3}$.' },
      { label: 'Compute', content: '$\\frac{6\\pi}{3} = 2\\pi$. The arc is $2\\pi$ units long, and no conversion was ever needed — the angle arrived in the unit the formula was built for.' },
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
