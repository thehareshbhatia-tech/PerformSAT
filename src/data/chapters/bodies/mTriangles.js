/**
 * Learn lesson body — Triangles (geometry half of the triangle skill).
 *
 * VOICE (adopted 2026-07-15, exemplar: mLinearEquations.js): professional
 * textbook narrative — teaches directly in flowing prose (concept, why it
 * works, how to apply, common errors) in the measured register of a
 * well-edited textbook. Concrete contexts framed plainly as examples;
 * extended metaphors, cute headings, and pep-talk are out. Headings name
 * the concept. Gated by bodies.test.js.
 * Right-triangle TRIG (sine/cosine/tangent) is a SEPARATE lesson and is
 * deliberately NOT taught here.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const mTrianglesBlocks = [
  {
    type: 'text',
    content: "Triangle questions draw on four tools: the **angle sum**, the **area formula**, the **Pythagorean theorem** (together with the integer triples that bypass its arithmetic), and **similar triangles**. The productive first step is identification rather than computation — determining which tool the figure calls for. Once the tool is named, the remaining work is brief.",
  },

  { type: 'heading', content: 'Three facts every triangle obeys' },
  {
    type: 'table',
    headers: ['Fact', 'What it says', 'Use it when'],
    rows: [
      ['Angles sum to $180°$', 'The three interior angles total exactly $180°$', 'Two angles are known and the third is required'],
      ['Area $= \\tfrac{1}{2}bh$', 'Any side can be the base; $h$ is the perpendicular height to it', 'The question asks for area, or for a missing base or height'],
      ['Big angle, big side', 'The longest side lies opposite the largest angle', 'The question asks to rank sides or angles'],
    ],
  },
  {
    type: 'keyInsight',
    content: "In the area formula, $h$ is the **perpendicular** distance to the base — a slanted side never serves as the height. When the height is not drawn, finding it is usually the substance of the problem, typically through the Pythagorean theorem or a special right triangle.",
  },

  { type: 'heading', content: 'The Pythagorean theorem' },
  {
    type: 'text',
    content: "In a **right** triangle, the two legs $a$ and $b$ and the hypotenuse $c$ — the side opposite the right angle, always the longest — satisfy $a^2 + b^2 = c^2$. When the unknown is a leg rather than the hypotenuse, subtract rather than add: $b^2 = c^2 - a^2$. One check catches the add-instead-of-subtract error immediately: a leg can never exceed the hypotenuse, so a computed leg longer than $c$ indicates that the squares were added.",
  },
  {
    type: 'formula',
    content: 'a^2 + b^2 = c^2',
  },

  { type: 'heading', content: 'The two Pythagorean triples' },
  {
    type: 'text',
    content: "Certain right triangles have whole-number sides, and recognizing one supplies the third side with no squaring and no square roots. Any scaled copy qualifies: a $6\\text{-}8\\text{-}10$ triangle is $3\\text{-}4\\text{-}5$ doubled, so match the RATIO, not the raw numbers. The recognition saves substantial time on test questions — a triple identified on sight replaces a full Pythagorean calculation that was never necessary.",
  },
  {
    type: 'table',
    headers: ['Triple', 'Scaled examples'],
    rows: [
      ['$3\\text{-}4\\text{-}5$', '$6\\text{-}8\\text{-}10$, $9\\text{-}12\\text{-}15$, $15\\text{-}20\\text{-}25$'],
      ['$5\\text{-}12\\text{-}13$', '$10\\text{-}24\\text{-}26$, $15\\text{-}36\\text{-}39$'],
    ],
  },
  {
    type: 'tip',
    content: "Confirm the roles before applying a triple. Legs of $3$ and $4$ give a hypotenuse of $5$ — but a leg of $3$ with a *hypotenuse* of $4$ gives $\\sqrt{4^2-3^2}=\\sqrt7$, and the triple never applied. The same numbers in different roles produce a different answer.",
  },

  { type: 'heading', content: 'The two special right triangles' },
  {
    type: 'text',
    content: "A right triangle containing a $45°$ angle, or a $30°/60°$ pair, has all three sides determined by a fixed ratio — one template for each case, with no Pythagorean work required. Assign the roles **from the angles**: the smallest angle faces the shortest side, and the $90°$ angle faces the hypotenuse. Then scale the whole template to fit the one side that is given. The standard error is reading the ratio in the order the triangle happens to be drawn; figures rotate and reflect, but the angles fix each side's role regardless of orientation. Anchor on the angles.",
  },
  {
    type: 'table',
    headers: ['Triangle', 'Side ratio', 'Where it appears'],
    rows: [
      ['$45\\text{-}45\\text{-}90$', 'legs $1 : 1$, hypotenuse $\\sqrt2$', 'A square cut along its diagonal'],
      ['$30\\text{-}60\\text{-}90$', '$1 : \\sqrt3 : 2$ (opposite $30°, 60°, 90°$)', 'An equilateral triangle cut by its height'],
    ],
  },
  {
    type: 'keyInsight',
    content: "The side opposite $60°$ is $\\sqrt3$ times the short side — about $1.7$ times, **not** double. Doubling applies to exactly one side: the hypotenuse, opposite the $90°$ angle.",
  },

  { type: 'heading', content: 'Similar triangles' },
  {
    type: 'text',
    content: "Two triangles whose angles match are **similar** — one is a scaled copy of the other, so every pair of corresponding sides shares the same ratio. Matching **two** angles is sufficient, since the angle sum forces the third to match as well. The configuration to recognize is a shared angle combined with a parallel line, which produces the equal angles automatically. Once similarity is established, a missing side follows from a single proportion.",
  },
  {
    type: 'tip',
    content: "Arrange the proportion so corresponding sides occupy corresponding positions — $\\dfrac{\\text{small side}}{\\text{big side}} = \\dfrac{\\text{small side}}{\\text{big side}}$ — then cross-multiply. Placing a small-triangle side in a large-triangle position is the usual source of error.",
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'A right triangle has legs of length $9$ and $12$. What is the length of the hypotenuse?',
    steps: [
      { label: 'Identify the triple', content: "Before squaring anything, divide out the common factor $3$: legs $9$ and $12$ are $3$ and $4$ scaled up — a $3\\text{-}4\\text{-}5$ triangle." },
      { label: 'Scale the third side', content: 'The hypotenuse is $5 \\times 3 = 15$. The Pythagorean theorem confirms it: $9^2 + 12^2 = 81 + 144 = 225 = 15^2$ — the same answer by a slower route.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A square has a diagonal of length $8$. What is the side length of the square?',
    steps: [
      { label: 'Identify the special triangle', content: "A square's diagonal divides it into two $45\\text{-}45\\text{-}90$ triangles — the sides are the legs, the diagonal is the hypotenuse — so the fixed ratio applies in place of the Pythagorean theorem." },
      { label: 'Apply the ratio', content: 'For $45\\text{-}45\\text{-}90$, hypotenuse $=$ leg $\\times \\sqrt2$. So $8 = s\\sqrt2$.' },
      { label: 'Solve', content: '$s = \\dfrac{8}{\\sqrt2} = \\dfrac{8\\sqrt2}{2} = 4\\sqrt2$.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'An equilateral triangle has side length $6$. What is its height?',
    steps: [
      { label: 'Draw the height', content: 'The height from a vertex to the midpoint of the base divides the equilateral triangle into two $30\\text{-}60\\text{-}90$ triangles; this construction is the standard approach to the height of an equilateral triangle.' },
      { label: 'Assign the sides', content: 'The short side (opposite $30°$) is half the base, $3$; the hypotenuse (opposite $90°$) is the full side, $6$; the height is opposite $60°$.' },
      { label: 'Scale the ratio', content: 'The side opposite $60°$ is the short side $\\times \\sqrt3$, so the height is $3\\sqrt3$.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'In a triangle, a line parallel to the base cuts the two other sides, forming a small triangle on top. The small triangle has a base of $6$ and the full triangle has a base of $10$. If the left side of the small triangle is $9$, how long is the left side of the full triangle?',
    steps: [
      { label: 'Establish similarity', content: "The parallel line reproduces the base's angles at the cut, so the small top triangle and the full triangle match angle for angle — similar. Establish this first; the proportion depends on it." },
      { label: 'Set up the proportion', content: 'Corresponding sides in corresponding positions — base with base, left side with left side: $\\dfrac{6}{10} = \\dfrac{9}{x}$.' },
      { label: 'Solve', content: 'Cross-multiply: $6x = 90$, so $x = 15$.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'A right triangle has one leg of length $5$ and a hypotenuse of length $13$. How long is the other leg?',
    answer: "**$12$.** The sides form the $5\\text{-}12\\text{-}13$ triple. Without the triple, subtract: $b^2 = 13^2 - 5^2 = 169 - 25 = 144$, so $b = 12$. Adding instead produces a \"leg\" longer than the hypotenuse — the check that flags the error.",
  },
  {
    type: 'checkpointQuestion',
    question: 'In a $30\\text{-}60\\text{-}90$ triangle, the shortest side is $4$. What are the other two sides?',
    answer: "**$4\\sqrt3$ and $8$.** Scale the $1 : \\sqrt3 : 2$ template by $4$: the side opposite $60°$ is $4\\sqrt3$, and the hypotenuse is $8$. The angles assign every role — the shortest side is opposite the $30°$ angle regardless of how the figure is oriented.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A triangle has angles measuring $50°$ and $60°$. Which side is the longest?',
    answer: "**The side opposite the $70°$ angle.** The third angle is $180° - 50° - 60° = 70°$ — the largest of the three, and the longest side lies opposite the largest angle. No side length needs to be computed; the ordering fact alone answers the question.",
  },

  {
    type: 'text',
    content: "**In summary:** identify what the figure provides — two angles, a right angle, a shared angle with a parallel line — select the one tool that configuration calls for, then check the answer against the ordering facts: the longest side lies opposite the largest angle, and no leg exceeds the hypotenuse.",
  },
];
