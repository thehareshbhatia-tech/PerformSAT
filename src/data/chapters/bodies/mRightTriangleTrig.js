/**
 * Learn lesson body — Right-Triangle Trigonometry (Geometry & Trigonometry).
 *
 * Lean "review / cheat-sheet" style: one SAT skill, plain language, one idea per
 * short section, a method, a scannable table, then worked examples and a couple
 * of check-yourself questions. Same VOICE + SHAPE as gSubjectVerbAgreement.js.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const mRightTriangleTrigBlocks = [
  {
    type: 'text',
    content: 'Trig on the SAT is mostly one acronym — **SOH-CAH-TOA** — plus one shortcut for the classic $\\sin(x°) = \\cos(y°)$ question. Almost no calculator work. The real skill is **labeling the sides correctly for the angle you are using.**',
  },

  { type: 'heading', content: 'The three ratios' },
  {
    type: 'text',
    content: 'Pick one acute angle to work from. Every side is named **relative to that angle**: the side across from it is the **opposite**, the side touching it (that is not the hypotenuse) is the **adjacent**, and the longest side — across from the right angle — is always the **hypotenuse**. This naming is the whole game, because each ratio is just a fixed pairing of two of these sides. Get the labels right for your chosen angle and picking sine, cosine, or tangent becomes automatic.',
  },
  {
    type: 'formulaGrid',
    items: [
      { label: 'SOH', formula: '$\\sin\\theta = \\dfrac{\\text{opposite}}{\\text{hypotenuse}}$', note: 'sine = opposite over hypotenuse.' },
      { label: 'CAH', formula: '$\\cos\\theta = \\dfrac{\\text{adjacent}}{\\text{hypotenuse}}$', note: 'cosine = adjacent over hypotenuse.' },
      { label: 'TOA', formula: '$\\tan\\theta = \\dfrac{\\text{opposite}}{\\text{adjacent}}$', note: 'tangent = opposite over adjacent.' },
    ],
  },

  { type: 'heading', content: 'Label from the angle, every time' },
  {
    type: 'keyInsight',
    content: 'The same leg can be "opposite" for one angle and "adjacent" for the other, so name the sides from **your** angle\'s point of view — never from how the picture is turned. And a trig value depends only on the **angle**, not the triangle\'s size: every right triangle with a $30°$ angle has $\\sin 30° = \\tfrac{1}{2}$.',
  },

  { type: 'heading', content: 'Finding a missing side' },
  {
    type: 'text',
    content: 'Ask: which ratio connects the side I **have** to the side I **want**? Set that ratio equal to its fraction and solve. The SAT often wants the **expression**, not a decimal — so leaving the answer as $12\\sin(40°)$ is fine.',
  },
  {
    type: 'table',
    headers: ['You know…', 'You want…', 'Use'],
    rows: [
      ['hypotenuse + angle', 'opposite side', '$\\sin$'],
      ['hypotenuse + angle', 'adjacent side', '$\\cos$'],
      ['adjacent side + angle', 'opposite side', '$\\tan$'],
    ],
  },

  { type: 'heading', content: 'The cofunction shortcut' },
  {
    type: 'text',
    content: 'The two acute angles of a right triangle add to $90°$, so they are complementary. Now notice that one angle\'s **opposite** side is the other angle\'s **adjacent** side — the very same leg, just seen from the other corner. That swap is exactly why the sine of one angle equals the cosine of the other, which gives the identity $\\sin\\theta = \\cos(90° - \\theta)$.',
  },
  {
    type: 'tip',
    content: 'When a problem says $\\sin(x°) = \\cos(y°)$, you do **not** need the triangle. The angles are complementary, so **$x + y = 90$.** That is the whole answer to the classic version of this item.',
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'In a right triangle, the angle $\\theta$ has an opposite side of length $6$ and a hypotenuse of length $10$. What is $\\sin\\theta$?',
    steps: [
      { label: 'Pick the ratio', content: 'Opposite and hypotenuse → that is the **S** in SOH: $\\sin\\theta = \\dfrac{\\text{opp}}{\\text{hyp}}$.' },
      { label: 'Plug in', content: '$\\sin\\theta = \\dfrac{6}{10} = \\dfrac{3}{5}$.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A ramp rises at an angle of $18°$ from the ground. If the ramp is $12$ feet long (the hypotenuse), which expression gives its height $h$?\n\n(A) $12\\sin(18°)$\n(B) $12\\cos(18°)$\n(C) $\\dfrac{12}{\\sin(18°)}$',
    steps: [
      { label: 'Name the sides', content: 'The height is **opposite** the $18°$ angle; the ramp is the **hypotenuse**.' },
      { label: 'Choose the ratio', content: 'Opposite over hypotenuse is $\\sin$: $\\sin(18°) = \\dfrac{h}{12}$.' },
      { label: 'Solve for h', content: 'Multiply both sides by $12$: $h = 12\\sin(18°)$ → **(A)**.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'From a point $30$ feet from the base of a tree, the angle of elevation to the top is $40°$. Which expression gives the tree\'s height $h$?\n\n(A) $30\\tan(40°)$\n(B) $30\\sin(40°)$\n(C) $\\dfrac{30}{\\tan(40°)}$',
    steps: [
      { label: 'Name the sides', content: 'The height is **opposite** the $40°$ angle; the $30$-foot ground distance is **adjacent** to it.' },
      { label: 'Choose the ratio', content: 'Opposite over adjacent is tangent: $\\tan(40°) = \\dfrac{h}{30}$.' },
      { label: 'Solve for h', content: 'Multiply both sides by $30$: $h = 30\\tan(40°)$ → **(A)**.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'For acute angles, $\\sin(2x + 10)° = \\cos(3x - 5)°$. What is the value of $x$?',
    steps: [
      { label: 'Recognize cofunctions', content: 'Since $\\sin A = \\cos B$ for acute angles means the angles are complementary, set their sum to $90$.' },
      { label: 'Write the equation', content: '$(2x + 10) + (3x - 5) = 90$.' },
      { label: 'Combine', content: '$5x + 5 = 90$, so $5x = 85$.' },
      { label: 'Solve', content: '$x = 17$.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'In a right triangle, angle $\\theta$ has an adjacent side of $8$ and a hypotenuse of $17$. What is $\\cos\\theta$?',
    answer: '**$\\dfrac{8}{17}$.** Adjacent over hypotenuse is the **CAH** ratio: $\\cos\\theta = \\dfrac{\\text{adj}}{\\text{hyp}} = \\dfrac{8}{17}$.',
  },
  {
    type: 'checkpointQuestion',
    question: 'If $\\sin(x°) = \\cos(y°)$ and both angles are acute, what is $x + y$?',
    answer: '**$90$.** By the cofunction identity the two angles are complementary, so they add to $90$ — no triangle or calculator needed.',
  },
  {
    type: 'checkpointQuestion',
    question: 'In a right triangle, angle $\\theta$ has opposite side $7$ and adjacent side $24$. What is $\\tan\\theta$, and what is the hypotenuse?',
    answer: '$\\tan\\theta = \\dfrac{\\text{opp}}{\\text{adj}} = \\dfrac{7}{24}$. The hypotenuse is the $7\\text{-}24\\text{-}25$ triple (or $\\sqrt{7^2 + 24^2} = \\sqrt{625} = 25$), so it is $25$.',
  },

  {
    type: 'text',
    content: '**The move, every time:** mark your angle → name opposite / adjacent / hypotenuse from that angle → pick the ratio linking known to wanted. And when you see $\\sin = \\cos$, jump straight to angles-add-to-$90$.',
  },
];
