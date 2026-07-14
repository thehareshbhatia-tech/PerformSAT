/**
 * Learn lesson body — Right-Triangle Trigonometry (Geometry & Trigonometry).
 *
 * TUTOR VOICE (adopted 2026-07-14, user-approved exemplar =
 * mLinearEquations.js): coaching direct-address — talks TO the student,
 * anticipates the mistake before it happens, everyday anchor first and
 * formula second, concrete decision rules ("see sin = cos, jump straight
 * to angles-add-to-90"). Lean structure unchanged; gated by bodies.test.js.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const mRightTriangleTrigBlocks = [
  {
    type: 'text',
    content: "Here's the secret about SAT trig: it isn't really about sine and cosine. It's a labeling test. One acronym — **SOH-CAH-TOA** — plus one shortcut for the classic $\\sin(x°) = \\cos(y°)$ question covers nearly all of it, with almost no calculator. Get the side labels right for your angle, and the ratios pick themselves.",
  },

  { type: 'heading', content: 'The three ratios' },
  {
    type: 'text',
    content: "Pick one acute angle and look at the triangle from its corner. The side across from your angle is the **opposite**. The side touching your angle that isn't the longest one is the **adjacent**. And the longest side — always across from the right angle — is the **hypotenuse**, no matter which angle you picked. That labeling is the entire game, because each ratio is nothing but a fixed pairing of two of these names. Labels down, and sine, cosine, or tangent chooses itself.",
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
    content: "The very same leg is \"opposite\" for one acute angle and \"adjacent\" for the other — so label from **your** angle's corner, never from how the picture happens to be turned. And notice what a trig value ignores: size. Every right triangle with a $30°$ angle has $\\sin 30° = \\tfrac{1}{2}$, whether it fits on a stamp or covers a football field. The angle alone decides.",
  },

  { type: 'heading', content: 'Finding a missing side' },
  {
    type: 'text',
    content: "One question unlocks every missing-side problem: which ratio connects the side you **have** to the side you **want**? Say it, set it equal to its fraction, solve. And don't rush to a decimal — the answer choices are usually **expressions**, so $12\\sin(40°)$ isn't an unfinished answer. It IS the answer.",
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
    content: "The two acute angles of a right triangle split $90°$ between them — complementary, always. Now stand in each corner in turn: the leg that's **opposite** from one corner is **adjacent** from the other. Same leg, two viewpoints. That swap is the whole reason one angle's sine equals the other angle's cosine — which is the identity $\\sin\\theta = \\cos(90° - \\theta)$.",
  },
  {
    type: 'tip',
    content: "The moment a problem says $\\sin(x°) = \\cos(y°)$, stop hunting for a triangle — there isn't one to find. The angles are complementary, so **$x + y = 90$.** Write that equation and the classic version of this question is already over.",
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'In a right triangle, the angle $\\theta$ has an opposite side of length $6$ and a hypotenuse of length $10$. What is $\\sin\\theta$?',
    steps: [
      { label: 'Pick the ratio', content: "You're holding opposite and hypotenuse — that pairing is the **S** in SOH: $\\sin\\theta = \\dfrac{\\text{opp}}{\\text{hyp}}$." },
      { label: 'Plug in', content: '$\\sin\\theta = \\dfrac{6}{10} = \\dfrac{3}{5}$.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A ramp rises at an angle of $18°$ from the ground. If the ramp is $12$ feet long (the hypotenuse), which expression gives its height $h$?\n\n(A) $12\\sin(18°)$\n(B) $12\\cos(18°)$\n(C) $\\dfrac{12}{\\sin(18°)}$',
    steps: [
      { label: 'Name the sides', content: 'The height stands **opposite** the $18°$ angle; the ramp itself is the **hypotenuse**.' },
      { label: 'Choose the ratio', content: 'Opposite paired with hypotenuse is sine: $\\sin(18°) = \\dfrac{h}{12}$.' },
      { label: 'Solve for h', content: 'Multiply both sides by $12$: $h = 12\\sin(18°)$ → **(A)**. Choice (B) is what mislabeling the height as \"adjacent\" produces — the label slip is the whole trap.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'From a point $30$ feet from the base of a tree, the angle of elevation to the top is $40°$. Which expression gives the tree\'s height $h$?\n\n(A) $30\\tan(40°)$\n(B) $30\\sin(40°)$\n(C) $\\dfrac{30}{\\tan(40°)}$',
    steps: [
      { label: 'Name the sides', content: "The tree's height is **opposite** the $40°$ angle; the $30$-foot ground distance touches the angle, so it's **adjacent**." },
      { label: 'Choose the ratio', content: 'Opposite paired with adjacent is tangent — no hypotenuse in sight, so sine was never an option: $\\tan(40°) = \\dfrac{h}{30}$.' },
      { label: 'Solve for h', content: 'Multiply both sides by $30$: $h = 30\\tan(40°)$ → **(A)**.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'For acute angles, $\\sin(2x + 10)° = \\cos(3x - 5)°$. What is the value of $x$?',
    steps: [
      { label: 'Recognize cofunctions', content: "$\\sin = \\cos$ with acute angles — that's the shortcut's cue. The two angles are complementary, so their sum is $90$." },
      { label: 'Write the equation', content: '$(2x + 10) + (3x - 5) = 90$.' },
      { label: 'Combine', content: '$5x + 5 = 90$, so $5x = 85$.' },
      { label: 'Solve', content: '$x = 17$.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'In a right triangle, angle $\\theta$ has an adjacent side of $8$ and a hypotenuse of $17$. What is $\\cos\\theta$?',
    answer: "**$\\dfrac{8}{17}$.** Adjacent paired with hypotenuse is the **CAH** ratio: $\\cos\\theta = \\dfrac{\\text{adj}}{\\text{hyp}} = \\dfrac{8}{17}$. The labels did all the work — the ratio just reports them.",
  },
  {
    type: 'checkpointQuestion',
    question: 'If $\\sin(x°) = \\cos(y°)$ and both angles are acute, what is $x + y$?',
    answer: "**$90$.** Complementary angles — that's the entire cofunction shortcut. No triangle to draw, nothing to compute: see $\\sin = \\cos$, write $x + y = 90$, done.",
  },
  {
    type: 'checkpointQuestion',
    question: 'In a right triangle, angle $\\theta$ has opposite side $7$ and adjacent side $24$. What is $\\tan\\theta$, and what is the hypotenuse?',
    answer: "$\\tan\\theta = \\dfrac{\\text{opp}}{\\text{adj}} = \\dfrac{7}{24}$. For the hypotenuse, spot the $7\\text{-}24\\text{-}25$ triple — or grind it out with $\\sqrt{7^2 + 24^2} = \\sqrt{625} = 25$. Either road lands on $25$.",
  },

  {
    type: 'text',
    content: "**The move, every time:** mark your angle, name opposite / adjacent / hypotenuse from that corner, then pick the one ratio linking what you have to what you want. And the instant you see $\\sin = \\cos$, skip the triangle — the angles add to $90$.",
  },
];
