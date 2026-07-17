/**
 * Learn lesson body — Triangles (geometry half of the triangle skill).
 *
 * VOICE v3 (adopted 2026-07-17, exemplar: bodies/centralIdeas.js): scannable
 * instructional register — direct address, contractions, 1-3 sentence text
 * blocks, list blocks for criteria, steps blocks for procedures; no analogies,
 * no pep-talk, no emojis. All substance of the v2 textbook version preserved.
 * Right-triangle TRIG (sine/cosine/tangent) is a SEPARATE lesson and is
 * deliberately NOT taught here.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const mTrianglesBlocks = [
  {
    type: 'text',
    content: "The angle relationships from the last chapter concentrate in one figure: the triangle, where most geometry questions on this test actually live.",
  },
  {
    type: 'list',
    title: 'Triangle questions draw on a short list of tools:',
    items: [
      'the **angle sum**, plus the isosceles and side-length facts that follow from it',
      'the **area formula**',
      'the **Pythagorean theorem**, plus the integer triples that bypass its arithmetic',
      '**similar triangles**',
    ],
  },
  {
    type: 'text',
    content: "Your first move is identification, not computation — decide which tool the figure calls for. Once the tool is named, the remaining work is brief.",
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
    content: "In the area formula, $h$ is the **perpendicular** distance to the base — a slanted side never serves as the height. When the height isn't drawn, finding it is usually the real work of the problem, typically through the Pythagorean theorem or a special right triangle.",
  },

  { type: 'heading', content: 'Isosceles triangles' },
  {
    type: 'text',
    content: "An **isosceles** triangle has two equal sides, and the base angles — the angles opposite those sides — are equal as well.",
  },
  {
    type: 'text',
    content: "The relationship runs in both directions: equal sides force equal opposite angles, and equal angles force equal opposite sides. Either mark alone unlocks the other.",
  },
  {
    type: 'text',
    content: "When a problem names an isosceles triangle without saying which angle repeats, the stated angle plays one of two roles:",
  },
  {
    type: 'list',
    items: [
      "It's a **base angle**, and it repeats.",
      "It's the **apex angle**, and the other two split the remainder equally.",
    ],
  },
  {
    type: 'text',
    content: "Enumerate both cases, then check each against the $180°$ sum — the sum eliminates impossible ones. A $100°$ angle can't repeat, since $100° + 100°$ already exceeds $180°$; it has to be the apex, leaving base angles of $40°$ each.",
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'An isosceles triangle has angles measuring $50°$ and $x°$. What are all possible values of $x$?',
    steps: [
      { label: 'Case: the 50° angle repeats', content: 'If $50°$ is a base angle, the angles are $50°$, $50°$, and $180° - 100° = 80°$ — the sum checks. The other two angles are $50°$ and $80°$, so $x$ can be $50$ or $80$.' },
      { label: 'Case: the 50° angle is the apex', content: 'The two base angles share $180° - 50° = 130°$ equally, so each is $65°$ — the sum checks again. Here $x = 65$.' },
      { label: 'Collect the values', content: '$x$ can be $50$, $65$, or $80$. Stopping after the first case is the classic incomplete answer — the case split is the whole point of the question.' },
    ],
  },

  { type: 'heading', content: 'The triangle inequality' },
  {
    type: 'text',
    content: "Three lengths form a triangle only when every side is shorter than the sum of the other two.",
  },
  {
    type: 'text',
    content: "With two sides $a$ and $b$ known, that compresses to a single interval: the third side lies **strictly between** $|a - b|$ and $a + b$. The endpoints fail — at either extreme the triangle flattens into a straight segment — so neither bound is ever attainable.",
  },
  {
    type: 'list',
    title: 'The two question forms:',
    items: [
      'Can three given lengths form a triangle?',
      'How many integer lengths can the third side take? List the integers strictly inside the interval.',
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Two sides of a triangle have lengths $5$ and $9$. How many integer values are possible for the length of the third side?',
    steps: [
      { label: 'Bound the third side', content: 'The third side lies strictly between $|9 - 5| = 4$ and $9 + 5 = 14$, so $4 < c < 14$.' },
      { label: 'Count the integers', content: 'The integers strictly between $4$ and $14$ run from $5$ through $13$: that is $13 - 5 + 1 = 9$ values.' },
      { label: 'Exclude the endpoints', content: 'Neither $4$ nor $14$ qualifies — sides of $4, 5, 9$ or $5, 9, 14$ collapse flat, because one length exactly equals the sum of the other two. Counting an endpoint produces $10$ or $11$, the standard off-by-one wrong answers.' },
    ],
  },

  { type: 'heading', content: 'The Pythagorean theorem' },
  {
    type: 'text',
    content: "In a **right** triangle, the two legs $a$ and $b$ and the hypotenuse $c$ — the side opposite the right angle, always the longest — satisfy one equation:",
  },
  {
    type: 'formula',
    content: 'a^2 + b^2 = c^2',
  },
  {
    type: 'text',
    content: "When the unknown is a leg rather than the hypotenuse, subtract rather than add: $b^2 = c^2 - a^2$.",
  },
  {
    type: 'tip',
    content: "One check catches the add-instead-of-subtract error instantly: a leg can never exceed the hypotenuse. A computed leg longer than $c$ means the squares were added.",
  },

  { type: 'heading', content: 'The two Pythagorean triples' },
  {
    type: 'text',
    content: "Certain right triangles have whole-number sides, and recognizing one supplies the third side — no squaring, no square roots.",
  },
  {
    type: 'text',
    content: "Any scaled copy qualifies: a $6\\text{-}8\\text{-}10$ triangle is $3\\text{-}4\\text{-}5$ doubled, so match the RATIO, not the raw numbers. A triple spotted on sight replaces a full Pythagorean calculation that was never necessary.",
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
    content: "Confirm the roles before applying a triple. Legs of $3$ and $4$ give a hypotenuse of $5$ — but a leg of $3$ with a *hypotenuse* of $4$ gives $\\sqrt{4^2-3^2}=\\sqrt7$, and the triple never applied. Same numbers, different roles, different answer.",
  },

  { type: 'heading', content: 'The two special right triangles' },
  {
    type: 'text',
    content: "A right triangle containing a $45°$ angle, or a $30°/60°$ pair, has all three sides locked to a fixed ratio — one template for each case, no Pythagorean work required.",
  },
  {
    type: 'text',
    content: "Assign the roles **from the angles**: the smallest angle faces the shortest side, and the $90°$ angle faces the hypotenuse. Then scale the whole template to fit the one side you're given.",
  },
  {
    type: 'text',
    content: "The standard error is reading the ratio in the order the triangle happens to be drawn. Figures rotate and reflect, but the angles fix each side's role regardless of orientation — anchor on the angles.",
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
    content: "Two triangles whose angles match are **similar** — one is a scaled copy of the other, so every pair of corresponding sides shares the same ratio.",
  },
  {
    type: 'text',
    content: "Matching **two** angles is enough, since the angle sum forces the third to match. Once similarity is established, a missing side follows from a single proportion.",
  },
  {
    type: 'tip',
    content: "Arrange the proportion so corresponding sides occupy corresponding positions — $\\dfrac{\\text{small side}}{\\text{big side}} = \\dfrac{\\text{small side}}{\\text{big side}}$ — then cross-multiply. Putting a small-triangle side in a large-triangle position is the usual source of error.",
  },
  {
    type: 'text',
    content: "Three configurations account for nearly every similarity question:",
  },
  {
    type: 'list',
    items: [
      '**The parallel cut.** A line parallel to one side of a triangle crosses the other two sides and slices off a smaller triangle similar to the whole — the final worked example below is this figure.',
      '**The bowtie.** Two segments cross, with a triangle on each side of the crossing. The vertical angles at the crossing are equal, so one more equal pair — usually from marked parallel segments — completes the similarity.',
      '**The altitude to the hypotenuse.** The altitude from the right angle of a right triangle to its hypotenuse splits the figure into two smaller right triangles, each similar to the original and to each other — three similar triangles in one figure.',
    ],
  },
  {
    type: 'keyInsight',
    content: "The parallel cut carries a hazard: each side of the small triangle corresponds to the **whole** side of the large triangle, never to the leftover piece below the cut. If the cut splits a side into $9$ above and $6$ below, the similarity ratio is $\\dfrac{9}{9 + 6} = \\dfrac{9}{15}$ — piece to whole — not $\\dfrac{9}{6}$. Equating a small-triangle side to the leftover piece is the dominant error in this configuration.",
  },

  {
    type: 'steps',
    title: 'How to approach these questions',
    items: [
      "**Name the tool.** Read the figure's marks: two equal sides or angles mean isosceles, a right angle means Pythagorean work, a shared angle with a parallel line means similarity.",
      '**Reach for a template first.** A Pythagorean triple or a special-triangle ratio replaces the whole calculation.',
      '**Write the one relation the tool gives.** The $180°$ sum, the area formula, or a proportion with corresponding sides in corresponding positions.',
      '**Check the ordering facts.** The longest side faces the largest angle, no leg exceeds the hypotenuse, and no side reaches the sum of the other two.',
    ],
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
      { label: 'Draw the height', content: "The height from a vertex to the midpoint of the base divides the equilateral triangle into two $30\\text{-}60\\text{-}90$ triangles — the standard route to an equilateral triangle's height." },
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
    answer: "**The side opposite the $70°$ angle.** The third angle is $180° - 50° - 60° = 70°$ — the largest of the three, and the longest side lies opposite the largest angle. No side length needs computing; the ordering fact alone answers the question.",
  },
  {
    type: 'checkpointQuestion',
    question: 'Can side lengths $3$, $4$, and $8$ form a triangle? What about $3$, $4$, and $6$?',
    answer: "**$3, 4, 8$ cannot; $3, 4, 6$ can.** The quick test compares the two shorter sides against the longest: $3 + 4 = 7 < 8$, so the first set can't close into a triangle. In the second, $3 + 4 = 7 > 6$, and indeed $6$ lies strictly between $4 - 3 = 1$ and $4 + 3 = 7$.",
  },

  {
    type: 'text',
    content: "**The whole skill in three moves:** read what the figure provides — two angles, a pair of equal sides, a right angle, a shared angle with a parallel line — pick the one tool that configuration calls for, then check the answer against the ordering facts: the longest side lies opposite the largest angle, no leg exceeds the hypotenuse, and no side reaches the sum of the other two.",
  },
];
