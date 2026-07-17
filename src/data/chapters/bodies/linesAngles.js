/**
 * Learn lesson body — Lines, Angles & Congruence (Geometry).
 *
 * VOICE v3 (adopted 2026-07-17, exemplar: bodies/centralIdeas.js): scannable
 * instructional register — direct address, contractions, 1-3 sentence text
 * blocks, list blocks for criteria, steps blocks for procedures; no analogies,
 * no pep-talk, no emojis. All substance of the v2 textbook version preserved.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const linesAnglesBlocks = [
  {
    type: 'text',
    content: "Geometry on this test is a chain of small deductions, not long computations. You find one angle, that angle exposes the next, and the target falls after a short chain.",
  },
  {
    type: 'text',
    content: "The habit that organizes the whole subject: every time you determine an angle's measure, write it on the figure. Underneath, everything rests on two fixed **angle totals**.",
  },
  {
    type: 'tip',
    content: "When a figure says *\"not drawn to scale,\"* take it literally. The drawing's proportions are unreliable — the printed labels are not.",
  },

  { type: 'heading', content: 'The two angle totals' },
  {
    type: 'list',
    title: 'Everything starts from two totals:',
    items: [
      'Angles along a **straight line** total $180^\\circ$.',
      'Angles filling a full turn **around a point** total $360^\\circ$.',
    ],
  },
  {
    type: 'text',
    content: "That's the entire inventory. A right angle is half a line, $90^\\circ$, and a full turn is two straight lines back to back.",
  },
  {
    type: 'text',
    content: "So the productive question isn't which named rule applies — it's which total the unknown angle belongs to.",
  },
  {
    type: 'steps',
    title: 'How to approach these questions',
    items: [
      '**Find the total.** Identify the straight line or the full turn the unknown angle sits in.',
      '**Subtract the known angles.** The remainder is your angle.',
      '**Write it on the figure.** Every recorded angle exposes the next one.',
      '**Repeat.** The target angle usually falls after a short chain of these steps.',
    ],
  },
  {
    type: 'keyInsight',
    content: "When two lines cross, the angle **directly across** from any angle equals it (vertical angles), and each neighbor along the line is its supplement. A crossing holds only two values — $x$ and $180^\\circ - x$ — so finding one angle determines all four.",
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Four rays from a single point split the full turn around it into angles of $x$, $2x$, $3x$, and $120^\\circ$. Find $x$.',
    steps: [
      { label: 'Identify the total', content: "The four angles fill the full turn around one point, so they sum to $360^\\circ$." },
      { label: 'Set up and solve', content: '$x + 2x + 3x + 120^\\circ = 360^\\circ$, so $6x = 240^\\circ$ and $x = 40^\\circ$.' },
      { label: 'Check', content: "Add them back: $40^\\circ + 80^\\circ + 120^\\circ + 120^\\circ = 360^\\circ$. The full turn is accounted for, so the solution holds." },
    ],
  },
  {
    type: 'checkpointQuestion',
    question: 'Two straight lines cross, and one of the four angles measures $115^\\circ$. What are the other three angles?',
    answer: "**$115^\\circ, 115^\\circ, 65^\\circ, 65^\\circ$.** The angle **directly across** is the vertical angle, $115^\\circ$. Each **neighbor** along a line is the supplement, $180^\\circ - 115^\\circ = 65^\\circ$. Four angles, two values — a crossing never holds more than two.",
  },

  { type: 'heading', content: 'Parallel lines: only two sizes' },
  {
    type: 'text',
    content: "A line crossing two **parallel** lines appears to create eight different angles. Only two sizes actually occur.",
  },
  {
    type: 'text',
    content: "Call the acute one $x$: every angle in the figure is either $x$ or $180^\\circ - x$. Angles of the same size are equal; angles of different sizes are supplementary.",
  },
  {
    type: 'text',
    content: "The names \"corresponding\" and \"alternate interior\" all label special cases of this single fact. One condition: the lines have to be *marked* parallel — appearing parallel in the drawing isn't enough.",
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Parallel lines are crossed by a transversal. One angle measures $47^\\circ$. What is the obtuse angle the transversal makes with the other parallel line?\n\n(A) $43^\\circ$\n(B) $47^\\circ$\n(C) $133^\\circ$',
    steps: [
      { label: 'Identify the two sizes', content: 'The lines are parallel, so only two angle sizes occur in the entire figure: $47^\\circ$ and $180^\\circ - 47^\\circ$.' },
      { label: 'Classify the target', content: "The question wants the *obtuse* angle — the larger of the two sizes: $180^\\circ - 47^\\circ = 133^\\circ$." },
      { label: 'Answer', content: '**(C) $133^\\circ$.** Choice (B) repeats the given angle, which belongs to the acute size, not the obtuse one.' },
    ],
  },

  { type: 'heading', content: 'Triangles and the exterior angle' },
  {
    type: 'text',
    content: "The three angles of any triangle sum to exactly $180^\\circ$ — no exceptions.",
  },
  {
    type: 'text',
    content: "Extending a side buys a shortcut: the **exterior angle** created equals the sum of the two *remote* interior angles — the two it doesn't touch. You can read it directly, without stopping to find the third interior angle first.",
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'In $\\triangle ABC$, angle $A = 42^\\circ$. Side $BC$ is extended past $C$, and the exterior angle there measures $118^\\circ$. Find angle $B$.',
    steps: [
      { label: 'Apply the exterior-angle relation', content: 'The exterior angle equals the sum of the two remote interior angles — here, $A$ plus $B$.' },
      { label: 'Set up and solve', content: '$118^\\circ = 42^\\circ + B$, so $B = 118^\\circ - 42^\\circ = 76^\\circ$.' },
      { label: 'Check', content: "The interior angle at $C$ is $180^\\circ - 118^\\circ = 62^\\circ$, and $42 + 76 + 62 = 180$. Watch for $62^\\circ$ among the choices — it's what finding the interior angle and stopping there produces." },
    ],
  },
  {
    type: 'checkpointQuestion',
    question: 'A triangle has angles $x$, $2x$, and $3x$. Find $x$. Then find the exterior angle at the $x$ vertex.',
    answer: "**$x = 30^\\circ$; the exterior angle is $150^\\circ$.** $x + 2x + 3x = 6x = 180^\\circ$, so $x = 30^\\circ$. Two routes give the exterior angle, and they agree: the supplement, $180^\\circ - 30^\\circ = 150^\\circ$, or the sum of the two remote angles, $2x + 3x = 60^\\circ + 90^\\circ = 150^\\circ$.",
  },

  { type: 'heading', content: 'Polygon angle sums' },
  {
    type: 'text',
    content: "The triangle total extends to every polygon. Draw all diagonals from one vertex and an $n$-sided polygon splits into $n - 2$ triangles, so the interior angles sum to $180^\\circ(n - 2)$.",
  },
  {
    type: 'list',
    title: 'Interior sums to recognize:',
    items: [
      'Quadrilateral: $360^\\circ$',
      'Pentagon: $540^\\circ$',
      'Hexagon: $720^\\circ$',
    ],
  },
  {
    type: 'text',
    content: "In a **regular** polygon — all sides and all angles equal — each interior angle is that sum divided by $n$.",
  },
  {
    type: 'text',
    content: "Exterior angles behave more simply. Take one at each vertex and they total $360^\\circ$ for *every* polygon, regardless of $n$ — walking once around the perimeter turns through exactly one full revolution.",
  },
  {
    type: 'text',
    content: "So each exterior angle of a regular polygon is $\\dfrac{360^\\circ}{n}$, and interior $+$ exterior $= 180^\\circ$ at every vertex — often the fastest route to an interior angle.",
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

  { type: 'heading', content: 'What proves two triangles congruent?' },
  {
    type: 'text',
    content: "Congruent means same shape *and* same size — an exact copy. Proving it doesn't require checking all six parts; any one of these sets is enough.",
  },
  {
    type: 'list',
    title: 'Enough to prove congruence:',
    items: [
      '**SSS** — three sides',
      '**SAS** — two sides and the angle *between* them',
      '**ASA / AAS** — two angles plus any one side (two known angles determine the third)',
    ],
  },
  {
    type: 'text',
    content: "Two plausible-looking criteria fail. **SSA** fails because the unconstrained side can swing into two different triangles; **AAA** fails because it fixes the shape while placing no constraint on the size.",
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
    content: "Match parts by **letter order**, never by position on the page. In $\\triangle ABC \\cong \\triangle DEF$, side $AB$ corresponds to $DE$ and angle $C$ corresponds to $F$ — even when one triangle is reflected or rotated. The drawing can mislead; the letter correspondence can't.",
  },

  { type: 'heading', content: 'Composite area and the scaling laws' },
  {
    type: 'text',
    content: "An irregular shaded region has no dedicated formula — and none is expected. **Divide** it into rectangles and right triangles you have formulas for, or enclose it in a rectangle and **subtract the unshaded part**.",
  },
  {
    type: 'text',
    content: "For triangles, $A = \\tfrac{1}{2} b h$ — and $h$ is the *perpendicular* height to the base, never a slanted side.",
  },
  {
    type: 'text',
    content: "The error arrives in a predictable way: the figure draws the slanted side prominently on the region while leaving the true height out of the drawing entirely. The drawn length becomes the tempting wrong choice.",
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
      { label: 'Take the root first', content: 'Return to the linear scale before touching any side: $k = \\sqrt{\\tfrac{9}{4}} = \\dfrac{3}{2}$.' },
      { label: 'Scale the length', content: 'Now scale: $8 \\times \\dfrac{3}{2} = 12$. An answer of $18$ comes from scaling a length by the *area* ratio — the skipped square root that wrong choices are built around.' },
    ],
  },
  {
    type: 'checkpointQuestion',
    question: 'Square A has $9$ times the area of square B. How do their side lengths compare, and their perimeters?',
    answer: "**Side lengths are $3$ times as long, and perimeters also triple.** Take the root of the area ratio first: side ratio $= \\sqrt{9} = 3$. Perimeter is a length, so it scales by the same factor. An answer of $9$ for either quantity means the square root was skipped — a wrong answer routinely sitting among the choices.",
  },

  {
    type: 'text',
    content: "**The whole subject in one habit:** don't trust the drawing. Take each value from a printed label or from one of the two fixed totals — $180^\\circ$ along a line, $360^\\circ$ around a point — write it on the figure, and let each recorded angle supply the next one.",
  },
];
