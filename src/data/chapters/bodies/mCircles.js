/**
 * Learn lesson body — Circles (geometry: circle equation, circumference/area,
 * arcs and sectors, central angles and tangents).
 *
 * TUTOR VOICE (adopted 2026-07-14, user-approved exemplar mLinearEquations.js):
 * coaching direct-address — talks TO the student, anticipates the two circle
 * traps (sign flip, $r^2$ vs $r$) before they happen, memorable decision rules
 * ("route through $r$", "tangent → draw the radius"). Lean structure
 * unchanged. All math is wrapped in $...$ KaTeX delimiters, including
 * `formula`/`formulaGrid` blocks. Gated by bodies.test.js.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const mCirclesBlocks = [
  {
    type: 'text',
    content: "Every circle question is really asking for two numbers: **where's the center, and how long is the radius?** Get those two and everything else — the equation, the circumference, an arc, a sector — is a one-line follow-up. So treat this whole topic as a single skill: pulling the center and radius out of whatever disguise the problem picked.",
  },

  { type: 'heading', content: 'The circle equation' },
  {
    type: 'text',
    content: "A circle centered at $(h, k)$ with radius $r$ is every point $(x, y)$ sitting exactly $r$ away from the center — and the equation is just that sentence written as the Pythagorean theorem. The horizontal gap $(x-h)$ and the vertical gap $(y-k)$ are the legs; the radius is the hypotenuse.",
  },
  {
    type: 'formula',
    content: '$(x - h)^2 + (y - k)^2 = r^2$',
  },
  {
    type: 'keyInsight',
    content: "Standard form isn't solved — it's *read*. For each parenthesis ask \"what makes this zero?\": $(x + 5)^2$ dies at $x = -5$, so the center coordinate is $-5$ — the sign flips, every time. Then the right side is $r^2$, not $r$: $= 100$ means $r = \\sqrt{100} = 10$. Those two reads are also the two traps.",
  },

  { type: 'heading', content: 'When the equation is expanded: complete the square' },
  {
    type: 'text',
    content: "An expanded equation — like $x^2 + y^2 - 6x + 4y - 12 = 0$ — is the same circle with the parentheses smashed open, so there's nothing to read yet. Completing the square rebuilds them: fold the loose $-6x$ and $+4y$ back into perfect squares, and you're back to the one-line read. The entire job is getting back to standard form.",
  },
  {
    type: 'steps',
    items: [
      'Group the $x$-terms, group the $y$-terms, and ship the loose constant to the right side.',
      'For each variable: take half of its linear coefficient, square it, and add that to **both** sides — add to one side only and you\'ve changed the circle.',
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
    content: "$r$, diameter $d = 2r$, $C$, and $A$ are four handles on the same circle. Given any one and asked for another, route through $r$: find the radius first, then walk out to whatever's asked. There's no direct road between $C$ and $A$.",
  },

  { type: 'heading', content: 'Arcs and sectors: just a slice of the whole' },
  {
    type: 'text',
    content: "An **arc** is a piece of the rim; a **sector** is the pizza slice. Both obey one idea: the slice is the same fraction of the whole circle that its central angle is of a full turn — $\\frac{\\theta}{360}$ in degrees, $\\frac{\\theta}{2\\pi}$ in radians (which cleans up to the tidy radian formulas below). One catch: $s = r\\theta$ and $\\tfrac{1}{2}r^2\\theta$ only work when $\\theta$ is in **radians** — feed them a degree angle and they lie. For degrees, use the $\\frac{\\theta}{360}$ fraction or convert first ($180° = \\pi$ radians).",
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
    content: "Two figure-unlockers. A **central angle** (vertex at the center) equals the degree measure of the arc it opens — literally the same number, so you can hop freely between an angle and its arc. And a **tangent line** touches the circle at exactly one point, meeting the radius drawn to that point at a perfect $90°$. The instant a problem says \"tangent,\" draw that radius — the right angle it creates is usually the whole solution hiding in plain sight.",
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'A circle has equation $(x + 1)^2 + (y - 4)^2 = 36$. What are its center and radius?',
    steps: [
      { label: 'Zero out each parenthesis', content: '$x + 1 = 0$ gives $x = -1$; $y - 4 = 0$ gives $y = 4$. Center $(-1, 4)$ — the signs flipped, as always.' },
      { label: 'Square-root the right side', content: "$r^2 = 36$, so $r = \\sqrt{36} = 6$. The choice built on $r = 36$ is sitting right there — don't feed it." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Find the center and radius of the circle $x^2 + y^2 - 6x + 4y - 12 = 0$.',
    steps: [
      { label: 'Group and move the constant', content: 'Rearrange to $(x^2 - 6x) + (y^2 + 4y) = 12$.' },
      { label: 'Complete the square in $x$', content: 'Half of $-6$ is $-3$; squared, $9$. Add $9$ to both sides: $(x - 3)^2 + (y^2 + 4y) = 21$.' },
      { label: 'Complete the square in $y$', content: 'Half of $4$ is $2$; squared, $4$. Both sides again: $(x - 3)^2 + (y + 2)^2 = 25$.' },
      { label: 'Read it off', content: 'Center $(3, -2)$, radius $\\sqrt{25} = 5$.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A circle has radius $9$. A sector has a central angle of $40°$. What is the length of the sector\'s arc?',
    steps: [
      { label: 'Find the fraction of the circle', content: '$\\frac{40}{360} = \\frac{1}{9}$ of a full turn — so the arc is $\\frac{1}{9}$ of the rim.' },
      { label: 'Get the full circumference', content: '$C = 2\\pi r = 2\\pi(9) = 18\\pi$.' },
      { label: 'Take the slice', content: 'Arc length $= \\frac{1}{9}\\cdot 18\\pi = 2\\pi$.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A circle has circumference $10\\pi$. What is its area?',
    steps: [
      { label: 'Find the radius first', content: '$C = 2\\pi r$, so $10\\pi = 2\\pi r$ gives $r = 5$. Route through the radius.' },
      { label: 'Go out to area', content: "$A = \\pi r^2 = \\pi (5)^2 = 25\\pi$. There's no jump from $C$ straight to $A$ — every path goes through $r$." },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'A circle is given by $(x - 2)^2 + (y + 5)^2 = 20$. What is its center, and what is its radius?',
    answer: "Center $(2, -5)$ — zero out each parenthesis ($x = 2$, $y = -5$), signs flipped. Radius $= \\sqrt{20} = 2\\sqrt{5}$, **not** $20$: the right side is always $r^2$. Same two traps, every time.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A circle has radius $6$. What is the area of a sector whose central angle is $90°$?',
    answer: "$90°$ is $\\frac{90}{360} = \\frac{1}{4}$ of the circle. Whole area $= \\pi r^2 = 36\\pi$, so the slice takes $\\frac{1}{4}\\cdot 36\\pi = 9\\pi$.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A circle has area $49\\pi$. What is its circumference?',
    answer: "Route through $r$: $\\pi r^2 = 49\\pi$ gives $r^2 = 49$, so $r = 7$. Then $C = 2\\pi r = 2\\pi(7) = 14\\pi$. Radius first, destination second.",
  },

  {
    type: 'text',
    content: "**The move, every time:** dig out the center and radius first — read them from standard form, or complete the square to get back there — then answer whatever's asked (circumference, arc, sector) as a fraction of the whole circle. The two traps never change: the sign flips in $(x - h)$, and the right side is $r^2$, not $r$.",
  },
];
