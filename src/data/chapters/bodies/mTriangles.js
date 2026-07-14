/**
 * Learn lesson body — Triangles (geometry half of the triangle skill).
 *
 * TUTOR VOICE (adopted 2026-07-14, user-approved exemplar =
 * mLinearEquations.js): coaching direct-address — talks TO the student,
 * anticipates the mistake before it happens, everyday anchor first and
 * formula second, concrete decision rules ("match the ratio, not the raw
 * numbers"). Right-triangle TRIG (sine/cosine/tangent) is a SEPARATE
 * lesson and is deliberately NOT taught here. Gated by bodies.test.js.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const mTrianglesBlocks = [
  {
    type: 'text',
    content: "Every triangle question you'll meet is one of four tools in disguise: the **angle sum**, the **area formula**, the **Pythagorean theorem** (plus the triples that let you skip its arithmetic), or **similar triangles**. Your job isn't to compute harder — it's to name which tool the figure is asking for. Do that, and the rest takes seconds.",
  },

  { type: 'heading', content: 'The three facts every triangle obeys' },
  {
    type: 'table',
    headers: ['Fact', 'What it says', 'Use it when'],
    rows: [
      ['Angles sum to $180°$', 'The three interior angles always spend exactly $180°$', 'You have two angles and want the third'],
      ['Area $= \\tfrac{1}{2}bh$', 'Any side can be the base; $h$ is the perpendicular height to it', 'You want area, or a missing base or height'],
      ['Big angle, big side', 'The longest side always sits opposite the largest angle', 'You have to rank sides or angles'],
    ],
  },
  {
    type: 'keyInsight',
    content: "For area, $h$ means the **perpendicular** distance to the base — a slanted side never counts. And when the height isn't drawn, that's not an accident: finding it IS the problem, usually through the Pythagorean theorem or a special triangle.",
  },

  { type: 'heading', content: 'The Pythagorean theorem' },
  {
    type: 'text',
    content: "In a **right** triangle, the two legs $a$ and $b$ and the hypotenuse $c$ — the side across from the right angle, always the longest — obey $a^2 + b^2 = c^2$. Hunting a leg instead of the hypotenuse? Subtract, don't add: $b^2 = c^2 - a^2$. Then run the one check that catches the add-instead-of-subtract slip instantly: a leg can never beat the hypotenuse. If yours does, you added.",
  },
  {
    type: 'formula',
    content: 'a^2 + b^2 = c^2',
  },

  { type: 'heading', content: 'Memorize the two triples' },
  {
    type: 'text',
    content: "Certain right triangles come with whole-number sides, and spotting one means the third side is instant — no squaring, no square roots. Any scaled copy counts: a $6\\text{-}8\\text{-}10$ triangle is just $3\\text{-}4\\text{-}5$ doubled, so match the RATIO, not the raw numbers. This one recognition is worth a full minute per question — spot the pattern and you write the answer down; miss it and you grind through arithmetic that was never necessary.",
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
    content: "Check the roles before you trust the pattern. Legs of $3$ and $4$ give a hypotenuse of $5$ — but a leg of $3$ with a *hypotenuse* of $4$ gives $\\sqrt{4^2-3^2}=\\sqrt7$, and the triple never applied. Same numbers, different roles, different answer.",
  },

  { type: 'heading', content: 'The two special right triangles' },
  {
    type: 'text',
    content: "Spot a $45°$ angle, or a $30°/60°$ pair, in a right triangle and you already own all three sides — one template each, zero Pythagorean work. Assign the roles **from the angles**: the smallest angle always faces the shortest side, and the $90°$ faces the hypotenuse. Then scale the whole template to fit the one side you were given. Here's where these go wrong: grabbing the ratio in the order the triangle happens to be drawn. Drawings rotate and flip; the angles never lie. Anchor on the angles, always.",
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
    content: "The side opposite $60°$ is $\\sqrt3$ times the short side — about $1.7$ times, **not** double. Doubling belongs to exactly one side: the hypotenuse, opposite the $90°$.",
  },

  { type: 'heading', content: 'Similar triangles: same shape, new size' },
  {
    type: 'text',
    content: "When two triangles' angles match, the triangles are **similar** — one is a photocopy of the other at a new size, so every pair of matching sides shares the same ratio. And you only have to match **two** angles; the third has no choice. The setup to watch for: a shared angle plus a parallel line, which quietly manufactures the equal angles for you. From there, a missing side is one proportion away.",
  },
  {
    type: 'tip',
    content: "Line the proportion up so matching sides sit in matching spots — $\\dfrac{\\text{small side}}{\\text{big side}} = \\dfrac{\\text{small side}}{\\text{big side}}$ — then cross-multiply. Dropping a small-triangle side into a big-triangle slot is where these break.",
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'A right triangle has legs of length $9$ and $12$. What is the length of the hypotenuse?',
    steps: [
      { label: 'Spot the triple', content: "Before squaring anything, divide out the common factor $3$: legs $9$ and $12$ are $3$ and $4$ scaled up. That's a $3\\text{-}4\\text{-}5$ triangle." },
      { label: 'Scale the last side', content: 'The hypotenuse is $5 \\times 3 = 15$. (Doubt the shortcut? $9^2 + 12^2 = 81 + 144 = 225 = 15^2$ — same answer, slower road.)' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A square has a diagonal of length $8$. What is the side length of the square?',
    steps: [
      { label: 'See the special triangle', content: "A square's diagonal cuts it into two $45\\text{-}45\\text{-}90$ triangles — the sides are the legs, the diagonal is the hypotenuse. That diagonal is your cue to reach for the template, not the Pythagorean theorem." },
      { label: 'Use the ratio', content: 'For $45\\text{-}45\\text{-}90$, hypotenuse $=$ leg $\\times \\sqrt2$. So $8 = s\\sqrt2$.' },
      { label: 'Solve', content: '$s = \\dfrac{8}{\\sqrt2} = \\dfrac{8\\sqrt2}{2} = 4\\sqrt2$.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'An equilateral triangle has side length $6$. What is its height?',
    steps: [
      { label: 'Cut it in half', content: 'Drop the height from a vertex to the midpoint of the base — it slices the equilateral triangle into two $30\\text{-}60\\text{-}90$ triangles. Height-of-an-equilateral is always this move.' },
      { label: 'Name the sides', content: 'The short side (opposite $30°$) is half the base, $3$; the hypotenuse (opposite $90°$) is the full side, $6$; the height sits opposite $60°$.' },
      { label: 'Scale the ratio', content: 'Opposite-$60°$ means short side $\\times \\sqrt3$, so the height is $3\\sqrt3$.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'In a triangle, a line parallel to the base cuts the two other sides, forming a small triangle on top. The small triangle has a base of $6$ and the full triangle has a base of $10$. If the left side of the small triangle is $9$, how long is the left side of the full triangle?',
    steps: [
      { label: 'Certify similarity', content: "The parallel line copies the base's angles onto the cut, so the small top triangle and the full triangle match angle for angle — similar. Certify this first; the proportion is worthless without it." },
      { label: 'Set up the proportion', content: 'Matching sides in matching spots — base with base, left side with left side: $\\dfrac{6}{10} = \\dfrac{9}{x}$.' },
      { label: 'Solve', content: 'Cross-multiply: $6x = 90$, so $x = 15$.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'A right triangle has one leg of length $5$ and a hypotenuse of length $13$. How long is the other leg?',
    answer: "**$12$.** That's the $5\\text{-}12\\text{-}13$ triple. No triple in sight? Subtract: $b^2 = 13^2 - 5^2 = 169 - 25 = 144$, so $b = 12$. If you added instead, your \"leg\" came out longer than the hypotenuse — the sanity check that flags it.",
  },
  {
    type: 'checkpointQuestion',
    question: 'In a $30\\text{-}60\\text{-}90$ triangle, the shortest side is $4$. What are the other two sides?',
    answer: "Scale the $1 : \\sqrt3 : 2$ template by $4$: the side opposite $60°$ is $4\\sqrt3$, and the hypotenuse is $8$. The angles assign every role — the shortest side belongs to the $30°$, no matter how the picture is turned.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A triangle has angles measuring $50°$ and $60°$. Which side is the longest?',
    answer: "The third angle is $180° - 50° - 60° = 70°$ — the biggest of the three. Big angle, big side: the longest side sits **opposite the $70°$**. Notice you never compute a single side length; the ranking rule does all the work.",
  },

  {
    type: 'text',
    content: "**The move, every time:** ask what the figure hands you — two angles? a right angle? a shared angle with a parallel line? — pick the one tool that setup calls for, then sanity-check the answer: biggest side opposite biggest angle, legs shorter than the hypotenuse.",
  },
];
