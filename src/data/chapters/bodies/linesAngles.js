/**
 * Learn lesson body — Lines, Angles & Congruence (Geometry).
 *
 * NEW lean "review / cheat-sheet" style (matches bodies/gSubjectVerbAgreement.js):
 * one SAT skill per lesson, plain language, one idea per short section, a couple
 * of worked examples, then check-yourself questions. ~1-2 min read.
 * Gated by bodies.test.js (lean contract).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const linesAnglesBlocks = [
  {
    type: 'text',
    content: 'Geometry on the SAT is not about memorizing vocabulary. It runs on a few fixed **angle budgets** and one habit: write every angle you can figure out onto the figure, then keep going until the answer falls out. Warning up front: many figures say *"not drawn to scale"* — never eyeball, only use labels and deductions.',
  },

  { type: 'heading', content: 'The two budgets' },
  {
    type: 'text',
    content: 'Angles along a **straight line** add to $180^\\circ$. Angles filling a full turn **around a point** add to $360^\\circ$. A right angle is exactly half a line, $90^\\circ$, and a full turn is just two straight lines back to back. Almost every angle you are ever asked for is a share of one of these two budgets, so the habit is: spot which budget the angles sit in, subtract the ones you already know, and the leftover is the answer.',
  },
  {
    type: 'keyInsight',
    content: 'When two lines cross, the angles **directly across** from each other are equal (vertical angles), and each neighbor along the line is the supplement. So a crossing holds only two values: $x$ and $180^\\circ - x$.',
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Four rays from a single point split the full turn around it into angles of $x$, $2x$, $3x$, and $120^\\circ$. Find $x$.',
    steps: [
      { label: 'Pick the budget', content: 'The four angles go all the way around one point, so they spend the full-turn budget and add to $360^\\circ$.' },
      { label: 'Set up and solve', content: '$x + 2x + 3x + 120^\\circ = 360^\\circ$, so $6x = 240^\\circ$ and $x = 40^\\circ$.' },
      { label: 'Check', content: 'The four angles are $40^\\circ, 80^\\circ, 120^\\circ, 120^\\circ$, which sum to $360^\\circ$. Balances.' },
    ],
  },
  {
    type: 'checkpointQuestion',
    question: 'Two straight lines cross, and one of the four angles measures $115^\\circ$. What are the other three angles?',
    answer: 'The angle **directly across** is vertical to it, so it is also $115^\\circ$. Each of the two **neighbors** along a line is the supplement, $180^\\circ - 115^\\circ = 65^\\circ$. So the four angles are $115^\\circ, 115^\\circ, 65^\\circ, 65^\\circ$.',
  },

  { type: 'heading', content: 'Parallel lines make just two angle sizes' },
  {
    type: 'text',
    content: 'When a line cuts across two **parallel** lines, every angle in the picture is one of only two sizes. Call the small one $x$; then every angle is either $x$ or $180^\\circ - x$. Same size means equal; different sizes add to $180^\\circ$. Forget "corresponding" and "alternate interior" — they are all just this one fact. (Only valid if the lines are actually marked parallel.)',
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Parallel lines are crossed by a transversal. One angle measures $47^\\circ$. What is the obtuse angle the transversal makes with the other parallel line?\n\n(A) $43^\\circ$\n(B) $47^\\circ$\n(C) $133^\\circ$',
    steps: [
      { label: 'Two families apply', content: 'The lines are parallel, so every angle is $47^\\circ$ or $180^\\circ - 47^\\circ$.' },
      { label: 'Classify the target', content: 'We want the *obtuse* angle → the big family: $180^\\circ - 47^\\circ = 133^\\circ$.' },
      { label: 'Answer', content: '**(C) $133^\\circ$.** (B) is the trap — that is the *same* family as the given angle.' },
    ],
  },

  { type: 'heading', content: 'Triangle angles and the exterior shortcut' },
  {
    type: 'text',
    content: 'The three angles of **any** triangle add to $180^\\circ$. Bonus shortcut: when a side is extended, the **exterior angle** equals the sum of the two *far* interior angles — the two it does not touch. So you can read it off directly without finding the third angle first.',
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'In $\\triangle ABC$, angle $A = 42^\\circ$. Side $BC$ is extended past $C$, and the exterior angle there measures $118^\\circ$. Find angle $B$.',
    steps: [
      { label: 'Use the shortcut', content: 'The exterior angle equals the sum of the two remote interiors, $A$ and $B$.' },
      { label: 'Set up and solve', content: '$118^\\circ = 42^\\circ + B$, so $B = 118^\\circ - 42^\\circ = 76^\\circ$.' },
      { label: 'Check', content: 'Interior angle at $C$ is $180^\\circ - 118^\\circ = 62^\\circ$, and $42 + 76 + 62 = 180$. Balances. Trap answer: $62^\\circ$.' },
    ],
  },
  {
    type: 'checkpointQuestion',
    question: 'A triangle has angles $x$, $2x$, and $3x$. Find $x$. Then find the exterior angle at the $x$ vertex.',
    answer: '$x + 2x + 3x = 6x = 180^\\circ$, so $x = 30^\\circ$. The exterior angle at the $x$ vertex is its supplement, $180^\\circ - 30^\\circ = 150^\\circ$ — which also equals the two far angles $2x + 3x = 60^\\circ + 90^\\circ = 150^\\circ$.',
  },

  { type: 'heading', content: 'Congruence: the minimum you need' },
  {
    type: 'text',
    content: 'Two triangles are **congruent** (same shape and size) when they share one of these bundles: **SSS** (three sides), **SAS** (two sides and the angle *between* them), or **two angles plus any one side** (ASA and AAS — once two angles are fixed, the third is too). Two combinations are NOT enough: **SSA** (the loose side can swing two ways) and **AAA** (same shape, but any size).',
  },
  {
    type: 'table',
    headers: ['Given', 'Congruent?', 'Why'],
    rows: [
      ['SSS, SAS, ASA, AAS', 'Yes', 'Each locks shape and size.'],
      ['SSA', 'No', 'The non-included side can swing to two positions.'],
      ['AAA', 'No', 'Fixes shape only — the size is still free (that is *similar*).'],
    ],
  },
  {
    type: 'tip',
    content: 'Read corresponding parts by **letter order**, never by position on the page. In $\\triangle ABC \\cong \\triangle DEF$, side $AB$ matches $DE$ and angle $C$ matches $F$ — even when the triangles are flipped or rotated.',
  },

  { type: 'heading', content: 'Area by cutting, and scaling by k' },
  {
    type: 'text',
    content: 'For a strange shaded region, do not hunt for a special formula — **cut** it into rectangles and right triangles you already know, or enclose it in a rectangle and **subtract the hole**. A triangle is $A = \\tfrac{1}{2} b h$, where $h$ is the *perpendicular* height to the base, never a slanted side. Reaching for a slant length is the most common area mistake here, because the figure usually draws that slanted side right on the region and leaves the true perpendicular height off the picture.',
  },
  {
    type: 'formula',
    label: 'Scaling laws',
    content: '$\\text{lengths} \\times k \\qquad \\text{areas} \\times k^2 \\qquad \\text{volumes} \\times k^3$',
    note: 'Scale every dimension by $k$: lengths and perimeters grow by $k$, areas by $k^2$, volumes by $k^3$. Going backward from a ratio, take the root FIRST.',
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Two similar triangles have areas $20$ and $45$. The shortest side of the smaller is $8$. Find the corresponding side of the larger.',
    steps: [
      { label: 'Area ratio is k squared', content: 'Areas are 2-D, so $\\dfrac{45}{20} = \\dfrac{9}{4} = k^2$.' },
      { label: 'Root first', content: 'Recover the linear factor: $k = \\sqrt{\\tfrac{9}{4}} = \\dfrac{3}{2}$.' },
      { label: 'Scale the length', content: '$8 \\times \\dfrac{3}{2} = 12$. Trap answer: $18$ (using $\\tfrac{9}{4}$ on the length without rooting).' },
    ],
  },
  {
    type: 'checkpointQuestion',
    question: 'Square A has $9$ times the area of square B. How do their side lengths compare, and their perimeters?',
    answer: 'Side ratio $= \\sqrt{9} = 3$ (root the area ratio first). Perimeter is a length, so it also scales by $3$. The trap is answering $9$ for either — that skips the square root.',
  },

  {
    type: 'text',
    content: '**The move, every time:** never trust the drawing — derive each value from a label or a budget, write it on the figure, and let the next deduction unlock the one after it.',
  },
];
