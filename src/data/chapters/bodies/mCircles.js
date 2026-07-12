/**
 * Learn lesson body — Circles (geometry: circle equation, circumference/area,
 * arcs and sectors, central angles and tangents).
 *
 * Lean "review / cheat-sheet" style (see gSubjectVerbAgreement.js for the
 * VOICE + SHAPE exemplar): one idea per short headed section, plain language,
 * then a couple of worked examples and check-yourself questions. All math is
 * wrapped in $...$ KaTeX delimiters, including `formula`/`formulaGrid` blocks.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const mCirclesBlocks = [
  {
    type: 'text',
    content: 'Every circle question comes down to two numbers: **where the center is** and **how long the radius is**. Get those, and everything else — the equation, the circumference, an arc, a sector — is a quick follow-up. This lesson is really about pulling that center and radius out of whatever the problem hands you.',
  },

  { type: 'heading', content: 'The circle equation' },
  {
    type: 'text',
    content: 'A circle centered at $(h, k)$ with radius $r$ is the set of all points $(x, y)$ that are exactly $r$ away from the center. Written out, that distance rule becomes the standard form. It is really just the Pythagorean theorem: the horizontal gap $(x-h)$ and vertical gap $(y-k)$ are the legs, and the radius is the hypotenuse.',
  },
  {
    type: 'formula',
    content: '$(x - h)^2 + (y - k)^2 = r^2$',
  },
  {
    type: 'keyInsight',
    content: 'To read a standard-form circle, do not solve — just read. For each parenthesis ask "what makes this zero?": $(x + 5)^2$ zeroes at $x = -5$, so the center coordinate is $-5$ (the sign flips). Then the radius is the **square root** of the right side: $= 100$ means $r = \\sqrt{100} = 10$, not $100$.',
  },

  { type: 'heading', content: 'When the equation is expanded: complete the square' },
  {
    type: 'text',
    content: 'If the equation is multiplied out — like $x^2 + y^2 - 6x + 4y - 12 = 0$ — you cannot read anything yet. Rebuild the two squares to get back to standard form.',
  },
  {
    type: 'steps',
    items: [
      'Group the $x$-terms together and the $y$-terms together; move the loose constant to the right side.',
      'For each variable: take half of its linear coefficient, square it, and add that to **both** sides (adding to only the left changes the equation).',
      'Rewrite each group as a squared parenthesis. Now read the center and radius as usual.',
    ],
  },

  { type: 'heading', content: 'Circumference and area' },
  {
    type: 'formulaGrid',
    items: [
      { label: 'Circumference', formula: '$C = 2\\pi r$', note: 'Distance all the way around the rim.' },
      { label: 'Area', formula: '$A = \\pi r^2$', note: 'Space enclosed inside.' },
    ],
  },
  {
    type: 'tip',
    content: 'The four handles $r$, diameter $d = 2r$, $C$, and $A$ all convert to one another. Given one and asked for another, find $r$ first, then go out to whatever is asked.',
  },

  { type: 'heading', content: 'Arcs and sectors: just a slice of the whole' },
  {
    type: 'text',
    content: 'An **arc** is part of the circumference; a **sector** is a pizza-slice piece of the area. Each is the same fraction of the whole circle as its central angle is of a full turn: $\\frac{\\theta}{360}$ in degrees, or $\\frac{\\theta}{2\\pi}$ in radians (which cleans up to the tidy radian formulas below). The radian formulas $s = r\\theta$ and $\\tfrac{1}{2}r^2\\theta$ only work when $\\theta$ is in **radians** — for a degree angle, use the $\\frac{\\theta}{360}$ fraction or convert first ($180° = \\pi$ radians).',
  },
  {
    type: 'table',
    headers: ['Quantity', 'In degrees', 'In radians'],
    rows: [
      ['Arc length', '$\\dfrac{\\theta}{360}\\cdot 2\\pi r$', '$s = r\\theta$'],
      ['Sector area', '$\\dfrac{\\theta}{360}\\cdot \\pi r^2$', '$\\dfrac{1}{2}r^2\\theta$'],
    ],
  },

  { type: 'heading', content: 'Two facts that unlock figures' },
  {
    type: 'text',
    content: 'A **central angle** (vertex at the center) equals the degree measure of the arc it opens up — they are the same number. And a **tangent line** touches the circle at exactly one point and meets the radius drawn to that point at a perfect $90°$. When a problem says "tangent," draw that radius and look for the right angle.',
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'A circle has equation $(x + 1)^2 + (y - 4)^2 = 36$. What are its center and radius?',
    steps: [
      { label: 'Zero out each parenthesis', content: '$x + 1 = 0$ gives $x = -1$; $y - 4 = 0$ gives $y = 4$. Center is $(-1, 4)$.' },
      { label: 'Square-root the right side', content: 'The right side is $r^2 = 36$, so $r = \\sqrt{36} = 6$. Not $36$ — that is the mistake the problem is fishing for.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Find the center and radius of the circle $x^2 + y^2 - 6x + 4y - 12 = 0$.',
    steps: [
      { label: 'Group and move the constant', content: 'Rearrange to $(x^2 - 6x) + (y^2 + 4y) = 12$.' },
      { label: 'Complete the square in $x$', content: 'Half of $-6$ is $-3$; squared is $9$. Add $9$ to both sides: $(x - 3)^2 + (y^2 + 4y) = 21$.' },
      { label: 'Complete the square in $y$', content: 'Half of $4$ is $2$; squared is $4$. Add $4$ to both sides: $(x - 3)^2 + (y + 2)^2 = 25$.' },
      { label: 'Read it off', content: 'Center $(3, -2)$, radius $\\sqrt{25} = 5$.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A circle has radius $9$. A sector has a central angle of $40°$. What is the length of the sector\'s arc?',
    steps: [
      { label: 'Find the fraction of the circle', content: 'The angle is $\\frac{40}{360} = \\frac{1}{9}$ of a full turn, so the arc is $\\frac{1}{9}$ of the circumference.' },
      { label: 'Get the full circumference', content: '$C = 2\\pi r = 2\\pi(9) = 18\\pi$.' },
      { label: 'Take the slice', content: 'Arc length $= \\frac{1}{9}\\cdot 18\\pi = 2\\pi$.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'A circle is given by $(x - 2)^2 + (y + 5)^2 = 20$. What is its center, and what is its radius?',
    answer: 'Center $(2, -5)$ — zero out each parenthesis ($x = 2$, $y = -5$). Radius $= \\sqrt{20} = 2\\sqrt{5}$, **not** $20$. The right side is always $r^2$.',
  },
  {
    type: 'checkpointQuestion',
    question: 'A circle has radius $6$. What is the area of a sector whose central angle is $90°$?',
    answer: 'A $90°$ angle is $\\frac{90}{360} = \\frac{1}{4}$ of the circle. The full area is $\\pi r^2 = 36\\pi$, so the sector is $\\frac{1}{4}\\cdot 36\\pi = 9\\pi$.',
  },

  {
    type: 'text',
    content: '**The move, every time:** get the center and radius first (read them from standard form, or complete the square to get there), then answer whatever is asked — a circumference, an arc, a sector — as a fraction of the whole circle. Watch the two traps: the sign flip in $(x - h)$, and $r^2$ on the right side is not $r$.',
  },
];
