/**
 * Learn lesson body — Circles (geometry: circle equation, distance/midpoint
 * formulas, circumference/area, arcs and sectors, central angles and
 * tangents, inscribed angles, chords and radii).
 *
 * VOICE v4 (adopted 2026-07-18, exemplar: bodies/centralIdeas.js):
 * practiced-tutor register — developed 2-5 sentence paragraphs with
 * connective tissue; every rule earns its "because"; student-psychology
 * named concretely; math teaching is example-led; varied rhythm, no
 * aphorism-per-block. Bans carried from v3: no analogies, no pep talk, no
 * exclamation marks, no emojis, no test-personification. All v3 teaching
 * claims preserved. Gated by bodies.test.js.
 * All math is wrapped in $...$ KaTeX delimiters, including
 * `formula`/`formulaGrid` blocks.
 *
 * COMPOSED MODE (2026-07-18): chapterOpener lede + auto-numbered
 * sections/examples/figures + aside margin-notes + summary close (exemplar:
 * bodies/mPercents.js).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const mCirclesBlocks = [
  {
    type: 'chapterOpener',
    lede: "The last few chapters worked with figures built from straight segments. The circle runs on a single condition instead — every point lies the same distance from one center — and that definition is why nearly every circle question reduces to two quantities, the **center** and the **radius**. Once you hold both, the equation, the circumference, an arc length, or a sector area is one step away.",
  },
  {
    type: 'diagramRef',
    visualType: 'circlePartsDiagram',
    description: "The parts of a circle: the radius runs from the center to the boundary, the diameter passes through the center at twice the radius, and the circumference is the distance around.",
  },
  {
    type: 'text',
    content: "Figure 1 names the parts every circle question leans on — radius, diameter, circumference. So the skill this topic rewards is extraction: pulling the center and radius out of whatever form the problem supplies — standard form, an expanded equation, or a stated circumference or area. Each section below is one of those forms and the move that recovers the two quantities from it.",
  },

  { type: 'heading', content: 'The circle equation' },
  {
    type: 'text',
    content: "A circle centered at $(h, k)$ with radius $r$ is every point $(x, y)$ whose distance from the center is exactly $r$, and the equation is that condition written through the Pythagorean theorem. The horizontal difference $(x-h)$ and the vertical difference $(y-k)$ are the legs of a right triangle; the radius is its hypotenuse. Nothing in the form is arbitrary — it is a distance calculation with the distance pinned at $r$.",
  },
  {
    type: 'formula',
    content: '$(x - h)^2 + (y - k)^2 = r^2$',
  },
  {
    type: 'diagramRef',
    visualType: 'circleEquationDiagram',
    description: "A circle on the coordinate plane with center $(h, k)$ and radius $r$: every point satisfies $(x - h)^2 + (y - k)^2 = r^2$, so the center and radius are read directly from standard form.",
  },
  {
    type: 'text',
    content: "Figure 2 shows the center and radius encoded directly in standard form. Reading the form takes more care than it looks like it should. Give a class $(x + 5)^2 + (y - 3)^2 = 100$ and a large share will report a center of $(5, 3)$, a radius of $100$, or both — and each of those misreads sits among the answer choices whenever this equation appears. The parenthesis $(x + 5)^2$ equals zero at $x = -5$, so that center coordinate is $-5$, the **opposite of the printed sign**. And the right side is $r^2$, not $r$: $= 100$ means $r = \\sqrt{100} = 10$.",
  },
  {
    type: 'aside',
    kind: 'watch',
    content: "Standard form is read, not solved: flip the printed sign for each center coordinate, and square-root the right side for the radius. Those two reads are also the two standard errors on this topic.",
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'A circle has equation $(x + 1)^2 + (y - 4)^2 = 36$. What are its center and radius?',
    steps: [
      { label: 'Set each parenthesis to zero', content: '$x + 1 = 0$ gives $x = -1$; $y - 4 = 0$ gives $y = 4$. The center is $(-1, 4)$ — each coordinate has the opposite sign from the one printed.' },
      { label: 'Take the square root', content: "$r^2 = 36$, so $r = \\sqrt{36} = 6$. The right side is $r^2$, not the radius itself; reading it as $r = 36$ produces a standard wrong answer." },
    ],
  },

  { type: 'heading', content: 'Completing the square' },
  {
    type: 'text',
    content: "Not every circle arrives readable. An expanded equation — say $x^2 + y^2 - 6x + 4y - 12 = 0$ — is the same circle with the squared parentheses multiplied out, and that is exactly why no center or radius is visible in it: the expansion scattered them into the linear terms. Completing the square runs the expansion in reverse, folding $-6x$ and $+4y$ back into perfect squares until the equation returns to standard form. Whatever the problem's wording, the entire task is recovering that form.",
  },
  {
    type: 'steps',
    items: [
      '**Group and move.** Group the $x$-terms, group the $y$-terms, and move the constant to the right side.',
      '**Complete each square.** For each variable, take half of its linear coefficient, square it, and add that to **both** sides — adding to one side only changes the circle.',
      '**Read off the answer.** Rewrite each group as a squared parenthesis, then read the center and radius from standard form.',
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

  { type: 'heading', content: 'Building the equation from points' },
  {
    type: 'text',
    content: "Some problems supply no equation at all — only points — and two coordinate tools build one from scratch. The **distance formula** measures the segment between $(x_1, y_1)$ and $(x_2, y_2)$; it is the Pythagorean theorem applied to the coordinate differences, the same right-triangle idea the circle equation itself is built on. The **midpoint formula** locates the point halfway between them by averaging the coordinates. Neither appears on the reference sheet, and both recur throughout coordinate geometry.",
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
    content: "When the two points are the **endpoints of a diameter**, those tools produce the whole equation: the center is the midpoint of the diameter, and the radius is **half** the distance between the endpoints. The halving is where the points are lost. Students compute the distance between the endpoints, get the diameter, and drop it into the equation as if it were $r$ — and because the equation squares the radius, that one skipped step inflates $r^2$ by a factor of four.",
  },
  {
    type: 'text',
    content: "Two further reads come straight from the completed equation. A circle **tangent to an axis** touches it at exactly one point, which forces the distance from the center to that axis to equal the radius exactly — any closer and the circle would cross the axis twice, any farther and it would never reach it. So tangent to the $x$-axis means $r = |k|$, and tangent to the $y$-axis means $r = |h|$.",
  },
  {
    type: 'list',
    title: "Placing a point — compare its **squared** distance from the center with $r^2$, which skips the square root entirely:",
    items: [
      'Less than $r^2$: the point lies inside the circle.',
      'Equal to $r^2$: it lies on the circle.',
      'Greater than $r^2$: it lies outside.',
    ],
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
    type: 'aside',
    kind: 'remember',
    content: "The radius $r$, the diameter $d = 2r$, the circumference $C$, and the area $A$ each determine the others. Given any one and asked for another, go through the radius: solve for $r$ first, then compute what's asked. No formula connects $C$ and $A$ directly.",
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

  { type: 'heading', content: 'Arcs and sectors' },
  {
    type: 'text',
    content: "An **arc** is a portion of the circle's boundary; a **sector** is the region between two radii and the arc they cut off. Both obey one principle: each takes the same fraction of the whole circle that its central angle takes of a full turn — $\\frac{\\theta}{360}$ in degrees, $\\frac{\\theta}{2\\pi}$ in radians. Why does one fraction govern both? Because the central angle alone decides how much of the circle is claimed; arc length applies that share to the circumference $2\\pi r$, and sector area applies the same share to $\\pi r^2$. In radians the fraction simplifies into the compact formulas in the table below.",
  },
  {
    type: 'diagramRef',
    visualType: 'arcLengthDiagram',
    description: "A central angle cuts an arc from the boundary and a sector from the interior: each takes the same fraction of the whole circle that the angle is of a full turn.",
  },
  {
    type: 'text',
    content: "Figure 3 shows one central angle making both cuts at once — the arc from the boundary, the sector from the interior. One restriction guards those compact forms: $s = r\\theta$ and $\\tfrac{1}{2}r^2\\theta$ are valid only when $\\theta$ is in **radians**, and they return incorrect results for degree inputs — a degree number is $\\frac{180}{\\pi}$ times too large for formulas built on radius-lengths. Given degrees, use the $\\frac{\\theta}{360}$ fraction or convert first ($180° = \\pi$ radians).",
  },
  {
    type: 'table',
    headers: ['Quantity', 'In degrees', 'In radians'],
    rows: [
      ['Arc length', '$\\dfrac{\\theta}{360}\\cdot 2\\pi r$', '$s = r\\theta$'],
      ['Sector area', '$\\dfrac{\\theta}{360}\\cdot \\pi r^2$', '$\\dfrac{1}{2}r^2\\theta$'],
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

  { type: 'heading', content: 'Central angles and tangent lines' },
  {
    type: 'list',
    title: 'Two facts resolve most circle figures:',
    items: [
      "**A central angle equals its arc.** An angle with its vertex at the center has the same degree measure as the arc it intercepts, so the two are interchangeable — a fact about one is a fact about the other.",
      "**A tangent meets its radius at $90°$.** A tangent line touches the circle at exactly one point and is perpendicular to the radius drawn to that point.",
    ],
  },
  {
    type: 'text',
    content: "When a problem mentions a tangent, draw the radius to the point of tangency before doing anything else. The right angle it creates is usually the entire reason the figure was drawn — it sets up the right triangle or the perpendicular relationship the solution runs through.",
  },

  { type: 'heading', content: 'Inscribed angles' },
  {
    type: 'text',
    content: "An **inscribed angle** has its vertex on the circle itself rather than at the center, and moving the vertex out to the boundary costs half the measure: an inscribed angle is exactly **half** the central angle intercepting the same arc — equivalently, half the arc's degree measure. The center's view of an arc is always twice as wide as the view from the boundary.",
  },
  {
    type: 'list',
    title: 'Two consequences follow directly:',
    items: [
      'All inscribed angles intercepting the same arc are equal, no matter where on the circle their vertices sit.',
      "An angle inscribed in a **semicircle** — one intercepting a $180°$ arc — is a right angle, since half of $180°$ is $90°$. So a triangle with one side along a diameter is automatically a right triangle, a fact harder circle problems quietly depend on.",
    ],
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
    content: "A **chord** is a segment whose endpoints both lie on the circle — the diameter is the longest chord — and nearly every chord problem is solved inside one specific right triangle. It appears the moment a radius is drawn perpendicular to the chord, because that perpendicular **bisects** the chord, cutting it into two equal halves.",
  },
  {
    type: 'list',
    title: 'The triangle the perpendicular creates:',
    items: [
      'Hypotenuse: a radius $r$ drawn to an endpoint of the chord.',
      'One leg: half the chord.',
      'Other leg: the distance from the center to the chord.',
    ],
  },
  {
    type: 'text',
    content: "The Pythagorean theorem ties the three together, so any two of the quantities determine the third. And when a circle figure offers no visible right triangle at all, draw radii to every marked point on the circle — the move keeps paying because all radii are equal, so any two of them form an **isosceles** triangle with the chord joining their endpoints: equal sides, therefore equal base angles. Most chord-and-arc figures surrender their unknown angle once those isosceles triangles are marked.",
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
    type: 'summary',
    title: 'The whole topic in four moves',
    points: [
      'Find the **center and radius** first — every circle question reduces to those two quantities.',
      "Recover them by reading **standard form**, **completing the square**, or building from a diameter's endpoints with the midpoint and distance formulas.",
      'Answer circumference, arc, or sector as a **fraction of the whole circle** — $\\frac{\\theta}{360}$ in degrees, $\\frac{\\theta}{2\\pi}$ in radians.',
      'The two recurring errors never change: the **sign flips** in $(x - h)$, and the right side is $r^2$, **not $r$**.',
    ],
  },
];
