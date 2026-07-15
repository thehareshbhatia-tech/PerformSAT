/**
 * Learn lesson body — Circles (geometry: circle equation, circumference/area,
 * arcs and sectors, central angles and tangents).
 *
 * VOICE (adopted 2026-07-15, exemplar: mLinearEquations.js): professional
 * textbook narrative — teaches directly in flowing prose (concept, why it
 * works, how to apply, common errors) in the measured register of a
 * well-edited textbook. Concrete contexts framed plainly as examples;
 * extended metaphors, cute headings, and pep-talk are out. Headings name
 * the concept. Gated by bodies.test.js.
 * All math is wrapped in $...$ KaTeX delimiters, including
 * `formula`/`formulaGrid` blocks.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const mCirclesBlocks = [
  {
    type: 'text',
    content: "Nearly every circle question reduces to identifying two quantities: the **center** and the **radius**. Once both are known, the equation, the circumference, an arc length, or a sector area follows in a single further step. The skill this topic rewards is extracting the center and radius from whatever form the problem supplies — standard form, an expanded equation, or a stated circumference or area.",
  },

  { type: 'heading', content: 'The circle equation' },
  {
    type: 'text',
    content: "A circle centered at $(h, k)$ with radius $r$ consists of every point $(x, y)$ whose distance from the center is exactly $r$ — and the equation states that condition through the Pythagorean theorem. The horizontal difference $(x-h)$ and the vertical difference $(y-k)$ are the legs of a right triangle; the radius is the hypotenuse.",
  },
  {
    type: 'formula',
    content: '$(x - h)^2 + (y - k)^2 = r^2$',
  },
  {
    type: 'keyInsight',
    content: "Standard form is read, not solved. Each parenthesis equals zero at the corresponding center coordinate: $(x + 5)^2$ is zero at $x = -5$, so that center coordinate is $-5$ — the sign is the opposite of the one printed. The right side is $r^2$, not $r$: $= 100$ means $r = \\sqrt{100} = 10$. These two reads are also the two standard errors on this topic.",
  },

  { type: 'heading', content: 'Completing the square' },
  {
    type: 'text',
    content: "An expanded equation — such as $x^2 + y^2 - 6x + 4y - 12 = 0$ — describes the same circle with the squared parentheses multiplied out, so the center and radius are not yet visible. Completing the square restores them: the linear terms $-6x$ and $+4y$ are folded back into perfect squares, which returns the equation to standard form. The entire task is recovering standard form.",
  },
  {
    type: 'steps',
    items: [
      'Group the $x$-terms, group the $y$-terms, and move the constant to the right side.',
      'For each variable: take half of its linear coefficient, square it, and add that to **both** sides — adding to one side only changes the circle.',
      'Rewrite each group as a squared parenthesis, then read the center and radius from standard form.',
    ],
  },

  { type: 'heading', content: 'Circumference and area' },
  {
    type: 'formulaGrid',
    items: [
      { label: 'Circumference', formula: '$C = 2\\pi r$', note: 'The distance around the circle.' },
      { label: 'Area', formula: '$A = \\pi r^2$', note: 'The region enclosed by the circle.' },
    ],
  },
  {
    type: 'tip',
    content: "The radius $r$, the diameter $d = 2r$, the circumference $C$, and the area $A$ each determine the others. Given any one and asked for another, work through the radius: solve for $r$ first, then compute the requested quantity. No formula connects $C$ and $A$ directly.",
  },

  { type: 'heading', content: 'Arcs and sectors' },
  {
    type: 'text',
    content: "An **arc** is a portion of the circle's boundary; a **sector** is the region between two radii and the arc they cut off. Both follow one principle: each is the same fraction of the whole circle that its central angle is of a full turn — $\\frac{\\theta}{360}$ in degrees, $\\frac{\\theta}{2\\pi}$ in radians, which simplifies to the compact radian formulas below. One restriction applies: $s = r\\theta$ and $\\tfrac{1}{2}r^2\\theta$ are valid only when $\\theta$ is in **radians** and give incorrect results for degree inputs. For degrees, use the $\\frac{\\theta}{360}$ fraction or convert first ($180° = \\pi$ radians).",
  },
  {
    type: 'table',
    headers: ['Quantity', 'In degrees', 'In radians'],
    rows: [
      ['Arc length', '$\\dfrac{\\theta}{360}\\cdot 2\\pi r$', '$s = r\\theta$'],
      ['Sector area', '$\\dfrac{\\theta}{360}\\cdot \\pi r^2$', '$\\dfrac{1}{2}r^2\\theta$'],
    ],
  },

  { type: 'heading', content: 'Central angles and tangent lines' },
  {
    type: 'text',
    content: "Two facts resolve most circle figures. A **central angle** — one with its vertex at the center — equals the degree measure of the arc it intercepts; the two measures are the same number, so an angle and its arc are interchangeable. A **tangent line** touches the circle at exactly one point and meets the radius drawn to that point at $90°$. When a problem mentions a tangent, draw that radius: the right angle it creates usually supplies the relationship the solution requires.",
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'A circle has equation $(x + 1)^2 + (y - 4)^2 = 36$. What are its center and radius?',
    steps: [
      { label: 'Set each parenthesis to zero', content: '$x + 1 = 0$ gives $x = -1$; $y - 4 = 0$ gives $y = 4$. The center is $(-1, 4)$ — each coordinate has the opposite sign from the one printed.' },
      { label: 'Take the square root', content: "$r^2 = 36$, so $r = \\sqrt{36} = 6$. The right side is $r^2$, not the radius itself; reading it as $r = 36$ produces a standard wrong answer." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Find the center and radius of the circle $x^2 + y^2 - 6x + 4y - 12 = 0$.',
    steps: [
      { label: 'Group and move the constant', content: 'Rearrange to $(x^2 - 6x) + (y^2 + 4y) = 12$.' },
      { label: 'Complete the square in $x$', content: 'Half of $-6$ is $-3$; squared, $9$. Add $9$ to both sides: $(x - 3)^2 + (y^2 + 4y) = 21$.' },
      { label: 'Complete the square in $y$', content: 'Half of $4$ is $2$; squared, $4$. Add $4$ to both sides: $(x - 3)^2 + (y + 2)^2 = 25$.' },
      { label: 'Read the result', content: 'Center $(3, -2)$, radius $\\sqrt{25} = 5$.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A circle has radius $9$. A sector has a central angle of $40°$. What is the length of the sector\'s arc?',
    steps: [
      { label: 'Find the fraction of the circle', content: '$\\frac{40}{360} = \\frac{1}{9}$ of a full turn, so the arc is $\\frac{1}{9}$ of the circumference.' },
      { label: 'Compute the full circumference', content: '$C = 2\\pi r = 2\\pi(9) = 18\\pi$.' },
      { label: 'Take the fraction', content: 'Arc length $= \\frac{1}{9}\\cdot 18\\pi = 2\\pi$.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A circle has circumference $10\\pi$. What is its area?',
    steps: [
      { label: 'Find the radius first', content: '$C = 2\\pi r$, so $10\\pi = 2\\pi r$ gives $r = 5$. The radius links the two formulas.' },
      { label: 'Compute the area', content: "$A = \\pi r^2 = \\pi (5)^2 = 25\\pi$. No formula converts $C$ to $A$ directly; the calculation passes through $r$." },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'A circle is given by $(x - 2)^2 + (y + 5)^2 = 20$. What is its center, and what is its radius?',
    answer: "**Center $(2, -5)$; radius $2\\sqrt{5}$.** Each parenthesis is zero at the center coordinate ($x = 2$, $y = -5$), so the signs are the opposite of those printed. The right side is $r^2$, so $r = \\sqrt{20} = 2\\sqrt{5}$, **not** $20$.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A circle has radius $6$. What is the area of a sector whose central angle is $90°$?',
    answer: "**$9\\pi$.** A $90°$ angle is $\\frac{90}{360} = \\frac{1}{4}$ of the circle. The whole area is $\\pi r^2 = 36\\pi$, and the sector takes $\\frac{1}{4}\\cdot 36\\pi = 9\\pi$.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A circle has area $49\\pi$. What is its circumference?',
    answer: "**$14\\pi$.** Solve for the radius first: $\\pi r^2 = 49\\pi$ gives $r^2 = 49$, so $r = 7$. Then $C = 2\\pi r = 2\\pi(7) = 14\\pi$. The radius is the intermediate step between the two formulas.",
  },

  {
    type: 'text',
    content: "**In summary:** identify the center and radius first — read them from standard form, or complete the square to recover it — then answer whatever is asked (circumference, arc, sector) as a fraction of the whole circle. The two recurring errors do not change: the sign reverses in $(x - h)$, and the right side of the equation is $r^2$, not $r$.",
  },
];
