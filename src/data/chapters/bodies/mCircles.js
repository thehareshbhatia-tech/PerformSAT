/**
 * Learn lesson body — Circles (geometry: circle equation, distance/midpoint
 * formulas, circumference/area, arcs and sectors, central angles and
 * tangents, inscribed angles, chords and radii).
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

  { type: 'heading', content: 'Building the equation from points' },
  {
    type: 'text',
    content: "Some problems supply no equation at all — only points — and two coordinate tools build one from scratch. The **distance formula** measures the segment between $(x_1, y_1)$ and $(x_2, y_2)$; it is the Pythagorean theorem applied to the horizontal and vertical differences between the points. The **midpoint formula** locates the point halfway between them by averaging the coordinates. Neither formula appears on the reference sheet, and both recur throughout coordinate geometry.",
  },
  {
    type: 'formulaGrid',
    items: [
      { label: 'Distance', formula: '$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$', note: 'The Pythagorean theorem on the coordinate differences.' },
      { label: 'Midpoint', formula: '$\\left(\\dfrac{x_1 + x_2}{2},\\ \\dfrac{y_1 + y_2}{2}\\right)$', note: 'Average the $x$-coordinates; average the $y$-coordinates.' },
    ],
  },
  {
    type: 'text',
    content: "When the two given points are the **endpoints of a diameter**, these two tools produce the entire equation: the center is the midpoint of the diameter, and the radius is **half** the distance between the endpoints. Using the full diameter as $r$ — skipping the halving — is the standard error in this setup, and it inflates $r^2$ by a factor of four.",
  },
  {
    type: 'text',
    content: "Two further reads come straight from the completed equation. A circle **tangent to an axis** touches it at exactly one point, so the distance from the center to that axis equals the radius: tangent to the $x$-axis means $r = |k|$, and tangent to the $y$-axis means $r = |h|$. And to place a point relative to a circle, compare its squared distance from the center with $r^2$: less than $r^2$ puts the point inside, equal puts it on the circle, greater puts it outside. Comparing squared distances avoids computing any square root.",
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'The points $(-2, 3)$ and $(6, -3)$ are the endpoints of a diameter of a circle. Write the equation of the circle, and determine whether the point $(5, 3)$ lies inside, on, or outside it.',
    steps: [
      { label: 'Center = midpoint of the diameter', content: 'Average the coordinates: $\\left(\\dfrac{-2 + 6}{2},\\ \\dfrac{3 + (-3)}{2}\\right) = (2, 0)$.' },
      { label: 'Radius = half the distance', content: 'The diameter is $\\sqrt{(6 - (-2))^2 + (-3 - 3)^2} = \\sqrt{8^2 + (-6)^2} = \\sqrt{100} = 10$, so $r = 5$. Using $10$ as the radius is the standard error in this setup.' },
      { label: 'Write the equation', content: '$(x - 2)^2 + (y - 0)^2 = 5^2$, that is, $(x - 2)^2 + y^2 = 25$.' },
      { label: 'Test the point against r²', content: 'Squared distance from $(5, 3)$ to the center $(2, 0)$: $(5 - 2)^2 + (3 - 0)^2 = 9 + 9 = 18$. Since $18 < 25$, the point lies inside the circle.' },
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

  { type: 'heading', content: 'Inscribed angles' },
  {
    type: 'text',
    content: "An **inscribed angle** has its vertex on the circle itself rather than at the center, and it measures exactly **half** of the central angle intercepting the same arc — equivalently, half the arc's degree measure. The center's view of an arc is always twice as wide as the view from the boundary. Two consequences follow directly. First, all inscribed angles intercepting the same arc are equal, no matter where on the circle their vertices sit. Second, an angle inscribed in a **semicircle** — one intercepting a $180°$ arc — is a right angle, since half of $180°$ is $90°$; a triangle with one side lying along a diameter is therefore automatically a right triangle, a fact harder circle problems quietly depend on.",
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Points $A$, $B$, and $C$ lie on a circle centered at $O$. The central angle $\\angle AOB$ measures $84°$, and the inscribed angle $\\angle ACB$ intercepts the same arc $AB$. What is the measure of $\\angle ACB$?',
    steps: [
      { label: 'Relate angle to arc', content: 'A central angle equals its intercepted arc, so arc $AB = 84°$.' },
      { label: 'Halve for the inscribed angle', content: 'An inscribed angle on the same arc is half of it: $\\angle ACB = \\tfrac{1}{2}(84°) = 42°$.' },
      { label: 'Confirm the direction', content: 'The inscribed angle is always the smaller of the pair. An answer of $168°$ comes from doubling instead of halving — the reversed relationship is the standard wrong answer.' },
    ],
  },

  { type: 'heading', content: 'Chords and radii' },
  {
    type: 'text',
    content: "A **chord** is a segment whose endpoints both lie on the circle; the diameter is the longest chord. A radius drawn perpendicular to a chord **bisects** it — cuts it into two equal halves — and that perpendicular creates the right triangle in which nearly every chord problem is solved: the hypotenuse is a radius $r$ drawn to an endpoint of the chord, one leg is half the chord, and the other leg is the distance from the center to the chord. The Pythagorean theorem ties the three together, so any two of the quantities determine the third.",
  },
  {
    type: 'text',
    content: "When a circle figure offers no visible right triangle, draw radii to every marked point on the circle. All radii are equal, so any two of them form an **isosceles** triangle with the chord joining their endpoints — equal sides, and therefore equal base angles. Most chord-and-arc figures surrender their unknown angle once these isosceles triangles are marked.",
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A circle has radius $10$, and a chord lies $6$ units from the center. What is the length of the chord?',
    steps: [
      { label: 'Build the right triangle', content: 'Draw the perpendicular from the center to the chord and a radius to one endpoint of the chord. The perpendicular bisects the chord, so the triangle has hypotenuse $10$, one leg $6$, and one leg equal to half the chord.' },
      { label: 'Solve for the half-chord', content: '$\\left(\\tfrac{\\text{chord}}{2}\\right)^2 = 10^2 - 6^2 = 100 - 36 = 64$, so the half-chord is $8$ — the $6\\text{-}8\\text{-}10$ triple, recognizable on sight.' },
      { label: 'Double it', content: 'The chord is $2 \\times 8 = 16$. Reporting $8$ — the half-chord — is the standard incomplete answer.' },
    ],
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
    type: 'checkpointQuestion',
    question: 'A circle has center $(3, -4)$ and is tangent to the $x$-axis. What are its radius and equation?',
    answer: "**Radius $4$; equation $(x - 3)^2 + (y + 4)^2 = 16$.** Tangent to the $x$-axis means the circle touches that axis at exactly one point, so the radius equals the center's distance from the axis: $r = |-4| = 4$. Only the $y$-coordinate matters for tangency to the $x$-axis; the touch point is $(3, 0)$, directly above the center.",
  },

  {
    type: 'text',
    content: "**In summary:** identify the center and radius first — read them from standard form, complete the square to recover it, or build them from the endpoints of a diameter with the midpoint and distance formulas — then answer whatever is asked (circumference, arc, sector) as a fraction of the whole circle. The two recurring errors do not change: the sign reverses in $(x - h)$, and the right side of the equation is $r^2$, not $r$.",
  },
];
