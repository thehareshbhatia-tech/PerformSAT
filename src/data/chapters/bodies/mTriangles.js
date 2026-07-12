/**
 * Learn lesson body — Triangles (geometry half of the triangle skill).
 *
 * Lean "review / cheat-sheet" style (see gSubjectVerbAgreement.js for the
 * VOICE + SHAPE exemplar): one idea per short headed section, plain language,
 * a couple of scannable tables, then worked examples and check-yourself
 * questions. Right-triangle TRIG (sine/cosine/tangent) is a SEPARATE lesson
 * and is deliberately NOT taught here.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const mTrianglesBlocks = [
  {
    type: 'text',
    content: 'Almost every triangle question is really one of four small tools: the **angle sum**, the **area formula**, the **Pythagorean theorem** (plus the triples that skip the arithmetic), and **similar triangles**. Learn to spot which one the figure is asking for and the rest is quick.',
  },

  { type: 'heading', content: 'The three facts every triangle obeys' },
  {
    type: 'table',
    headers: ['Fact', 'What it says', 'Use it when'],
    rows: [
      ['Angles sum to $180°$', 'The three interior angles always add to $180°$', 'You know two angles and need the third'],
      ['Area $= \\tfrac{1}{2}bh$', 'Any side is the base; $h$ is the perpendicular height to it', 'You need area, or a missing base/height'],
      ['Big angle, big side', 'The longest side sits opposite the largest angle', 'You must rank sides or angles'],
    ],
  },
  {
    type: 'keyInsight',
    content: 'For area, $h$ is the **perpendicular** distance to the base — never a slanted side. If the height is not drawn, the test usually wants you to find it (often with the Pythagorean theorem or a special triangle).',
  },

  { type: 'heading', content: 'The Pythagorean theorem' },
  {
    type: 'text',
    content: 'In a **right** triangle, the two legs $a$ and $b$ and the hypotenuse $c$ (the side opposite the right angle, always the longest) satisfy $a^2 + b^2 = c^2$. Solving for a leg? Subtract: $b^2 = c^2 - a^2$. A leg can never be longer than the hypotenuse, so use that as your sanity check.',
  },
  {
    type: 'formula',
    content: 'a^2 + b^2 = c^2',
  },

  { type: 'heading', content: 'Memorize the two triples' },
  {
    type: 'text',
    content: 'Some right triangles have whole-number sides. Recognizing them lets you skip $a^2+b^2=c^2$ entirely. Any multiple counts too — a $6\\text{-}8\\text{-}10$ triangle is just $3\\text{-}4\\text{-}5$ doubled.',
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
    content: 'Match by RATIO, not raw numbers. And check roles first: legs $3$ and $4$ give hypotenuse $5$, but a leg of $3$ with hypotenuse $4$ gives $\\sqrt{4^2-3^2}=\\sqrt7$, not $5$.',
  },

  { type: 'heading', content: 'The two special right triangles' },
  {
    type: 'text',
    content: 'When you see a $45°$ or a $30°/60°$ angle, you know all three sides from one of them. Assign the roles **from the angles** — smallest angle faces the shortest side — then scale.',
  },
  {
    type: 'table',
    headers: ['Triangle', 'Side ratio', 'Where it hides'],
    rows: [
      ['$45\\text{-}45\\text{-}90$', 'legs $1 : 1$, hypotenuse $\\sqrt2$', 'A square cut along its diagonal'],
      ['$30\\text{-}60\\text{-}90$', '$1 : \\sqrt3 : 2$ (opposite $30°, 60°, 90°$)', 'An equilateral triangle cut by its height'],
    ],
  },
  {
    type: 'keyInsight',
    content: 'The side opposite $60°$ is $\\sqrt3$ (about $1.7$) times the short side, **not** double it. Only the hypotenuse — opposite the $90°$ — is twice the short side.',
  },

  { type: 'heading', content: 'Similar triangles: same shape, new size' },
  {
    type: 'text',
    content: 'Two triangles are **similar** when their angles match; then their sides are all in the same ratio. Matching just **two** angles is enough (the third is forced). The usual SAT setup is a shared angle plus a parallel line, which creates equal angles. To find a missing side, line up matching sides and set up a proportion.',
  },
  {
    type: 'tip',
    content: 'Write the proportion with matching sides in matching spots: $\\dfrac{\\text{small side}}{\\text{big side}} = \\dfrac{\\text{small side}}{\\text{big side}}$, then cross-multiply.',
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'A right triangle has legs of length $9$ and $12$. What is the length of the hypotenuse?',
    steps: [
      { label: 'Spot the triple', content: 'Divide by the common factor $3$: the legs are $3$ and $4$ scaled by $3$. That is a $3\\text{-}4\\text{-}5$ triangle.' },
      { label: 'Scale the last side', content: 'The hypotenuse is $5 \\times 3 = 15$. (Check: $9^2 + 12^2 = 81 + 144 = 225 = 15^2$.)' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A square has a diagonal of length $8$. What is the side length of the square?',
    steps: [
      { label: 'See the special triangle', content: 'A diagonal cuts the square into two $45\\text{-}45\\text{-}90$ triangles, with the side lengths as legs and the diagonal as hypotenuse.' },
      { label: 'Use the ratio', content: 'For $45\\text{-}45\\text{-}90$, hypotenuse $=$ leg $\\times \\sqrt2$. So $8 = s\\sqrt2$.' },
      { label: 'Solve', content: '$s = \\dfrac{8}{\\sqrt2} = \\dfrac{8\\sqrt2}{2} = 4\\sqrt2$.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'In a triangle, a line parallel to the base cuts the two other sides, forming a small triangle on top. The small triangle has a base of $6$ and the full triangle has a base of $10$. If the left side of the small triangle is $9$, how long is the left side of the full triangle?',
    steps: [
      { label: 'Certify similarity', content: 'The parallel line makes matching angles equal, so the small triangle and the full triangle are similar.' },
      { label: 'Set up the proportion', content: 'Match base to base and left side to left side: $\\dfrac{6}{10} = \\dfrac{9}{x}$.' },
      { label: 'Solve', content: 'Cross-multiply: $6x = 90$, so $x = 15$.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'A right triangle has one leg of length $5$ and a hypotenuse of length $13$. How long is the other leg?',
    answer: '**$12$.** This is a $5\\text{-}12\\text{-}13$ triple. Or subtract: $b^2 = 13^2 - 5^2 = 169 - 25 = 144$, so $b = 12$. (Don\'t add — a leg is always shorter than the hypotenuse.)',
  },
  {
    type: 'checkpointQuestion',
    question: 'In a $30\\text{-}60\\text{-}90$ triangle, the shortest side is $4$. What are the other two sides?',
    answer: 'The ratio is $1 : \\sqrt3 : 2$, so scale by $4$: the side opposite $60°$ is $4\\sqrt3$ and the hypotenuse is $8$.',
  },

  {
    type: 'text',
    content: '**The move, every time:** name what the figure gives you (angles? a right angle? a shared angle with a parallel line?), pick the matching tool, and check that your answer makes sense — biggest side opposite biggest angle, leg shorter than hypotenuse.',
  },
];
