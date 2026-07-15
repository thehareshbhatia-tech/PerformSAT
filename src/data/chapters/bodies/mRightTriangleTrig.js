/**
 * Learn lesson body — Right-Triangle Trigonometry (Geometry & Trigonometry).
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

export const mRightTriangleTrigBlocks = [
  {
    type: 'text',
    content: "Right-triangle trigonometry rests less on sine and cosine themselves than on labeling the sides correctly. One acronym — **SOH-CAH-TOA** — together with one shortcut for the recurring $\\sin(x°) = \\cos(y°)$ question covers nearly all of it, with little calculator work involved. Once the side labels are assigned correctly for the chosen angle, the ratios follow automatically.",
  },

  { type: 'heading', content: 'The three ratios' },
  {
    type: 'text',
    content: "Choose one acute angle and describe the triangle from that vertex. The side across from the chosen angle is the **opposite**. The side touching the angle that is not the longest side is the **adjacent**. The longest side — always across from the right angle — is the **hypotenuse**, regardless of which angle was chosen. This labeling carries the entire method, because each ratio is nothing more than a fixed pairing of two of these names. Once the labels are assigned, the choice of sine, cosine, or tangent is determined.",
  },
  {
    type: 'formulaGrid',
    items: [
      { label: 'SOH', formula: '$\\sin\\theta = \\dfrac{\\text{opposite}}{\\text{hypotenuse}}$', note: 'sine = opposite over hypotenuse.' },
      { label: 'CAH', formula: '$\\cos\\theta = \\dfrac{\\text{adjacent}}{\\text{hypotenuse}}$', note: 'cosine = adjacent over hypotenuse.' },
      { label: 'TOA', formula: '$\\tan\\theta = \\dfrac{\\text{opposite}}{\\text{adjacent}}$', note: 'tangent = opposite over adjacent.' },
    ],
  },

  { type: 'heading', content: 'Labeling from the chosen angle' },
  {
    type: 'keyInsight',
    content: "The same leg is \"opposite\" for one acute angle and \"adjacent\" for the other — so labels come from the chosen angle's vertex, never from how the figure happens to be turned. A trigonometric value is also independent of size: every right triangle with a $30°$ angle has $\\sin 30° = \\tfrac{1}{2}$, whatever its dimensions. The angle alone determines the ratio.",
  },

  { type: 'heading', content: 'Finding a missing side' },
  {
    type: 'text',
    content: "Every missing-side problem turns on one selection: the ratio that connects the side that is **given** to the side that is **required**. Name that ratio, set it equal to its fraction, and solve. Resist converting to a decimal — the answer choices are usually **expressions**, so $12\\sin(40°)$ is not an unfinished answer. It is the answer in its expected form.",
  },
  {
    type: 'table',
    headers: ['Given', 'Required', 'Use'],
    rows: [
      ['hypotenuse + angle', 'opposite side', '$\\sin$'],
      ['hypotenuse + angle', 'adjacent side', '$\\cos$'],
      ['adjacent side + angle', 'opposite side', '$\\tan$'],
    ],
  },

  { type: 'heading', content: 'The cofunction identity' },
  {
    type: 'text',
    content: "The two acute angles of a right triangle are complementary — together they account for $90°$. Viewed from one acute angle, a given leg is **opposite**; viewed from the other, the same leg is **adjacent**. This exchange of roles is the reason one angle's sine equals the other angle's cosine — the identity $\\sin\\theta = \\cos(90° - \\theta)$.",
  },
  {
    type: 'tip',
    content: "When a problem states $\\sin(x°) = \\cos(y°)$ for acute angles, no triangle needs to be constructed. The angles are complementary, so **$x + y = 90$.** Writing that single equation resolves the standard version of this question directly.",
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'In a right triangle, the angle $\\theta$ has an opposite side of length $6$ and a hypotenuse of length $10$. What is $\\sin\\theta$?',
    steps: [
      { label: 'Select the ratio', content: "The given sides are the opposite and the hypotenuse — the pairing in **SOH**: $\\sin\\theta = \\dfrac{\\text{opp}}{\\text{hyp}}$." },
      { label: 'Substitute', content: '$\\sin\\theta = \\dfrac{6}{10} = \\dfrac{3}{5}$.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A ramp rises at an angle of $18°$ from the ground. If the ramp is $12$ feet long (the hypotenuse), which expression gives its height $h$?\n\n(A) $12\\sin(18°)$\n(B) $12\\cos(18°)$\n(C) $\\dfrac{12}{\\sin(18°)}$',
    steps: [
      { label: 'Name the sides', content: 'The height is **opposite** the $18°$ angle; the ramp itself is the **hypotenuse**.' },
      { label: 'Choose the ratio', content: 'Opposite paired with hypotenuse is sine: $\\sin(18°) = \\dfrac{h}{12}$.' },
      { label: 'Solve for h', content: 'Multiply both sides by $12$: $h = 12\\sin(18°)$ → **(A)**. Choice (B) results from mislabeling the height as \"adjacent\" — the incorrect label is the entire source of the error.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'From a point $30$ feet from the base of a tree, the angle of elevation to the top is $40°$. Which expression gives the tree\'s height $h$?\n\n(A) $30\\tan(40°)$\n(B) $30\\sin(40°)$\n(C) $\\dfrac{30}{\\tan(40°)}$',
    steps: [
      { label: 'Name the sides', content: "The tree's height is **opposite** the $40°$ angle; the $30$-foot ground distance touches the angle, so it is **adjacent**." },
      { label: 'Choose the ratio', content: 'Opposite paired with adjacent is tangent — the hypotenuse is not involved, so sine does not apply: $\\tan(40°) = \\dfrac{h}{30}$.' },
      { label: 'Solve for h', content: 'Multiply both sides by $30$: $h = 30\\tan(40°)$ → **(A)**.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'For acute angles, $\\sin(2x + 10)° = \\cos(3x - 5)°$. What is the value of $x$?',
    steps: [
      { label: 'Recognize cofunctions', content: "$\\sin = \\cos$ with acute angles signals the cofunction identity: the two angles are complementary, so their sum is $90$." },
      { label: 'Write the equation', content: '$(2x + 10) + (3x - 5) = 90$.' },
      { label: 'Combine', content: '$5x + 5 = 90$, so $5x = 85$.' },
      { label: 'Solve', content: '$x = 17$.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'In a right triangle, angle $\\theta$ has an adjacent side of $8$ and a hypotenuse of $17$. What is $\\cos\\theta$?',
    answer: "**$\\dfrac{8}{17}$.** Adjacent paired with hypotenuse is the **CAH** ratio: $\\cos\\theta = \\dfrac{\\text{adj}}{\\text{hyp}} = \\dfrac{8}{17}$. Once the labels are assigned, the ratio follows immediately.",
  },
  {
    type: 'checkpointQuestion',
    question: 'If $\\sin(x°) = \\cos(y°)$ and both angles are acute, what is $x + y$?',
    answer: "**$90$.** For acute angles, $\\sin(x°) = \\cos(y°)$ means the two angles are complementary — the cofunction identity. No triangle is required; the equation $x + y = 90$ is the complete answer.",
  },
  {
    type: 'checkpointQuestion',
    question: 'In a right triangle, angle $\\theta$ has opposite side $7$ and adjacent side $24$. What is $\\tan\\theta$, and what is the hypotenuse?',
    answer: "**$\\tan\\theta = \\dfrac{7}{24}$; the hypotenuse is $25$.** Opposite over adjacent gives $\\tan\\theta = \\dfrac{\\text{opp}}{\\text{adj}} = \\dfrac{7}{24}$. The sides form the $7\\text{-}24\\text{-}25$ Pythagorean triple, and the theorem confirms it: $\\sqrt{7^2 + 24^2} = \\sqrt{625} = 25$.",
  },

  {
    type: 'text',
    content: "**In summary:** mark the angle in use, label opposite, adjacent, and hypotenuse from that vertex, then select the one ratio linking the given side to the required side. When a problem states $\\sin = \\cos$ for acute angles, no triangle is needed — the two angles sum to $90$.",
  },
];
