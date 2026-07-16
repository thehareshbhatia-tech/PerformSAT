/**
 * Learn lesson body — Lines, Angles & Congruence (Geometry).
 *
 * VOICE (adopted 2026-07-15, exemplar: mLinearEquations.js): professional
 * textbook narrative — teaches directly in flowing prose (concept, why it
 * works, how to apply, common errors) in the measured register of a
 * well-edited textbook. Concrete contexts framed plainly as examples;
 * extended metaphors, cute headings, and pep-talk are out. Headings name
 * the concept. Gated by bodies.test.js.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const linesAnglesBlocks = [
  {
    type: 'text',
    content: "One working habit organizes this entire topic: each time an angle's measure is determined, write it on the figure. Every recorded angle exposes the next one, and the target angle typically emerges after a short chain of such steps. Underneath, everything rests on two fixed **angle totals** — with one caution before using them: when a figure says *\"not drawn to scale,\"* take the statement literally. The drawing's proportions are unreliable; the printed labels are not.",
  },

  { type: 'heading', content: 'Angles on a line and around a point' },
  {
    type: 'text',
    content: "Angles along a **straight line** total $180^\\circ$. Angles filling a full turn **around a point** total $360^\\circ$. These two totals are the entire inventory — a right angle is half a line, $90^\\circ$, and a full turn is two straight lines back to back. When a question asks for an unknown angle, the productive question is not which named rule applies but which total the angle belongs to: identify the line or the full turn it sits in, subtract the known angles, and the remainder is the answer.",
  },
  {
    type: 'keyInsight',
    content: "When two lines cross, the angle **directly across** from any angle equals it (vertical angles), and each neighbor along the line is its supplement. A crossing therefore holds only two values: $x$ and $180^\\circ - x$. Finding one angle determines all four.",
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Four rays from a single point split the full turn around it into angles of $x$, $2x$, $3x$, and $120^\\circ$. Find $x$.',
    steps: [
      { label: 'Identify the total', content: "The four angles fill the full turn around one point, so they sum to $360^\\circ$." },
      { label: 'Set up and solve', content: '$x + 2x + 3x + 120^\\circ = 360^\\circ$, so $6x = 240^\\circ$ and $x = 40^\\circ$.' },
      { label: 'Check', content: "Adding them back: $40^\\circ + 80^\\circ + 120^\\circ + 120^\\circ = 360^\\circ$. The total is accounted for, which confirms the solution." },
    ],
  },
  {
    type: 'checkpointQuestion',
    question: 'Two straight lines cross, and one of the four angles measures $115^\\circ$. What are the other three angles?',
    answer: "**$115^\\circ, 115^\\circ, 65^\\circ, 65^\\circ$.** The angle **directly across** is the vertical angle, $115^\\circ$. Each **neighbor** along a line is the supplement, $180^\\circ - 115^\\circ = 65^\\circ$. Four angles, two values — a crossing never holds more than two.",
  },

  { type: 'heading', content: 'Parallel lines cut by a transversal' },
  {
    type: 'text',
    content: "A line crossing two **parallel** lines appears to create eight different angles, but only two sizes occur. Call the acute one $x$: every angle in the figure is either $x$ or $180^\\circ - x$. Angles of the same size are equal; angles of different sizes are supplementary. The names \"corresponding\" and \"alternate interior\" all label special cases of this single fact. One condition applies: the lines must actually be *marked* parallel — appearing parallel in the drawing is not sufficient.",
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Parallel lines are crossed by a transversal. One angle measures $47^\\circ$. What is the obtuse angle the transversal makes with the other parallel line?\n\n(A) $43^\\circ$\n(B) $47^\\circ$\n(C) $133^\\circ$',
    steps: [
      { label: 'Identify the two sizes', content: 'The lines are parallel, so only two angle sizes occur in the entire figure: $47^\\circ$ and $180^\\circ - 47^\\circ$.' },
      { label: 'Classify the target', content: "The question asks for the *obtuse* angle — the larger of the two sizes: $180^\\circ - 47^\\circ = 133^\\circ$." },
      { label: 'Answer', content: '**(C) $133^\\circ$.** Choice (B) repeats the given angle, which belongs to the acute size rather than the obtuse one.' },
    ],
  },

  { type: 'heading', content: 'Triangle angle sum and the exterior angle' },
  {
    type: 'text',
    content: "The three angles of any triangle sum to exactly $180^\\circ$, without exception. A useful shortcut follows from extending a side: the **exterior angle** created equals the sum of the two *remote* interior angles — the two it does not touch. The exterior angle can therefore be read directly, without stopping to find the third interior angle first.",
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'In $\\triangle ABC$, angle $A = 42^\\circ$. Side $BC$ is extended past $C$, and the exterior angle there measures $118^\\circ$. Find angle $B$.',
    steps: [
      { label: 'Apply the exterior-angle relation', content: 'The exterior angle equals the sum of the two remote interior angles — here, $A$ plus $B$.' },
      { label: 'Set up and solve', content: '$118^\\circ = 42^\\circ + B$, so $B = 118^\\circ - 42^\\circ = 76^\\circ$.' },
      { label: 'Check', content: "The interior angle at $C$ is $180^\\circ - 118^\\circ = 62^\\circ$, and $42 + 76 + 62 = 180$, which confirms the solution. Note that $62^\\circ$ commonly appears among the answer choices — it is the result of finding the interior angle and stopping there." },
    ],
  },
  {
    type: 'checkpointQuestion',
    question: 'A triangle has angles $x$, $2x$, and $3x$. Find $x$. Then find the exterior angle at the $x$ vertex.',
    answer: "**$x = 30^\\circ$; the exterior angle is $150^\\circ$.** $x + 2x + 3x = 6x = 180^\\circ$, so $x = 30^\\circ$. Two routes give the exterior angle, and they agree: the supplement, $180^\\circ - 30^\\circ = 150^\\circ$, or the sum of the two remote angles, $2x + 3x = 60^\\circ + 90^\\circ = 150^\\circ$. Agreement between the two routes confirms the result.",
  },

  { type: 'heading', content: 'Polygon angle sums' },
  {
    type: 'text',
    content: "The triangle total extends to every polygon. Drawing all diagonals from one vertex splits an $n$-sided polygon into $n - 2$ triangles, so the interior angles sum to $180^\\circ(n - 2)$: $360^\\circ$ for a quadrilateral, $540^\\circ$ for a pentagon, $720^\\circ$ for a hexagon. In a **regular** polygon — all sides and all angles equal — each interior angle is that sum divided by $n$. The **exterior** angles behave more simply still: taking one at each vertex, they total $360^\\circ$ for *every* polygon, regardless of $n$, because walking once around the perimeter turns through exactly one full revolution. Each exterior angle of a regular polygon is therefore $\\dfrac{360^\\circ}{n}$, and interior $+$ exterior $= 180^\\circ$ at every vertex — frequently the fastest route to an interior angle.",
  },
  {
    type: 'formula',
    label: 'Polygon angle facts',
    content: '$\\text{interior sum} = 180^\\circ(n - 2) \\qquad \\text{exterior sum} = 360^\\circ$',
    note: 'The interior sum grows with $n$; the exterior sum never does.',
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'What is the measure of one interior angle of a regular octagon?',
    steps: [
      { label: 'Route 1: divide the interior sum', content: 'With $n = 8$, the interior angles total $180^\\circ(8 - 2) = 1080^\\circ$. Regular means equal shares: $1080^\\circ \\div 8 = 135^\\circ$.' },
      { label: 'Route 2: through the exterior angle', content: 'The eight exterior angles total $360^\\circ$, so each is $360^\\circ \\div 8 = 45^\\circ$, and the interior angle is its supplement: $180^\\circ - 45^\\circ = 135^\\circ$.' },
      { label: 'Compare the routes', content: 'Both give $135^\\circ$. The exterior route runs on smaller numbers and is usually faster for regular polygons.' },
    ],
  },
  {
    type: 'checkpointQuestion',
    question: 'Each exterior angle of a regular polygon measures $24^\\circ$. How many sides does the polygon have, and what is the measure of each interior angle?',
    answer: "**$15$ sides; each interior angle is $156^\\circ$.** Exterior angles always total $360^\\circ$, so $n = 360^\\circ \\div 24^\\circ = 15$. Each interior angle is the supplement of its exterior angle: $180^\\circ - 24^\\circ = 156^\\circ$. The long route agrees: $180^\\circ(15 - 2) \\div 15 = 2340^\\circ \\div 15 = 156^\\circ$.",
  },

  { type: 'heading', content: 'Congruence criteria' },
  {
    type: 'text',
    content: "Congruent means same shape *and* same size — an exact copy. Proving congruence does not require checking all six parts; any one of these sets is enough: **SSS** (three sides), **SAS** (two sides and the angle *between* them), or **two angles plus any one side** (ASA and AAS — two known angles determine the third). Two plausible-looking criteria fail: **SSA**, because the unconstrained side can swing into two different triangles, and **AAA**, because it fixes the shape while placing no constraint on the size.",
  },
  {
    type: 'table',
    headers: ['Given', 'Congruent?', 'Why'],
    rows: [
      ['SSS, SAS, ASA, AAS', 'Yes', 'Each set determines both shape and size.'],
      ['SSA', 'No', 'The unconstrained side can swing into two different triangles.'],
      ['AAA', 'No', 'The shape is fixed but the size is not — that is *similar*, not congruent.'],
    ],
  },
  {
    type: 'tip',
    content: "Match parts by **letter order**, never by position on the page. In $\\triangle ABC \\cong \\triangle DEF$, side $AB$ corresponds to $DE$ and angle $C$ corresponds to $F$ — even when one triangle is reflected or rotated. The drawing can mislead; the letter correspondence cannot.",
  },

  { type: 'heading', content: 'Composite area and the scaling laws' },
  {
    type: 'text',
    content: "An irregular shaded region has no dedicated formula, and none is expected. **Divide** it into rectangles and right triangles with known formulas, or enclose it in a rectangle and **subtract the unshaded part**. For triangles, $A = \\tfrac{1}{2} b h$ — and $h$ is the *perpendicular* height to the base, never a slanted side. The error arises in a predictable way: the figure draws the slanted side prominently on the region while leaving the true height out of the drawing entirely, and the drawn length becomes the tempting but incorrect choice.",
  },
  {
    type: 'formula',
    label: 'Scaling laws',
    content: '$\\text{lengths} \\times k \\qquad \\text{areas} \\times k^2 \\qquad \\text{volumes} \\times k^3$',
    note: 'Scale every dimension by $k$ and each measurement grows by its own power: lengths and perimeters by $k$, areas by $k^2$, volumes by $k^3$. When working backward from an area or volume ratio, take the root FIRST, then apply the resulting factor to lengths.',
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Two similar triangles have areas $20$ and $45$. The shortest side of the smaller is $8$. Find the corresponding side of the larger.',
    steps: [
      { label: 'Area ratio is k squared', content: "Areas are two-dimensional, so the given ratio is $k^2$, not $k$: $\\dfrac{45}{20} = \\dfrac{9}{4} = k^2$." },
      { label: 'Take the root first', content: 'Return to the linear scale before working with any side: $k = \\sqrt{\\tfrac{9}{4}} = \\dfrac{3}{2}$.' },
      { label: 'Scale the length', content: 'Now scale: $8 \\times \\dfrac{3}{2} = 12$. An answer of $18$ results from scaling a length by the *area* ratio — the skipped square root that wrong answer choices are built around.' },
    ],
  },
  {
    type: 'checkpointQuestion',
    question: 'Square A has $9$ times the area of square B. How do their side lengths compare, and their perimeters?',
    answer: "**Side lengths are $3$ times as long, and perimeters also triple.** Take the root of the area ratio first: side ratio $= \\sqrt{9} = 3$. Perimeter is a length, so it scales by the same factor. An answer of $9$ for either quantity indicates the square root was skipped — a wrong answer routinely present among the choices.",
  },

  {
    type: 'text',
    content: "**In summary:** do not rely on the drawing. Take each value from a printed label or from one of the two fixed totals — $180^\\circ$ along a line, $360^\\circ$ around a point — write it on the figure, and let each recorded angle supply the next one.",
  },
];
