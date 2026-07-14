/**
 * Learn lesson body — Lines, Angles & Congruence (Geometry).
 *
 * TUTOR VOICE (adopted 2026-07-14, user-approved exemplar =
 * mLinearEquations.js): coaching direct-address — talks TO the student,
 * anticipates the mistake before it happens, everyday anchor first and
 * formula second, concrete decision rules ("which budget is it sitting
 * in?"). Lean structure unchanged; gated by bodies.test.js.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const linesAnglesBlocks = [
  {
    type: 'text',
    content: "Here's the habit that wins geometry: every time you figure out an angle, write it on the figure. Each filled-in angle unlocks the next one, and the answer falls out before it feels like you solved anything. Underneath, it all runs on two fixed **angle budgets** — and one warning before we spend them: when a figure says *\"not drawn to scale,\"* believe it. Your eyes will lie to you. The labels won't.",
  },

  { type: 'heading', content: 'The two budgets' },
  {
    type: 'text',
    content: "Angles along a **straight line** spend a $180^\\circ$ budget. Angles filling a full turn **around a point** spend $360^\\circ$. That's the whole inventory — a right angle is just half a line, $90^\\circ$, and a full turn is two straight lines back to back. So when a question asks for an angle, don't ask \"which rule is this?\" Ask \"which budget is it sitting in?\" Subtract the angles you already know, and the leftover is your answer.",
  },
  {
    type: 'keyInsight',
    content: "When two lines cross, the angle **directly across** from any angle is its twin — equal, every time (vertical angles). Each neighbor along the line is the supplement. So a crossing only ever holds two values: $x$ and $180^\\circ - x$. Find one angle and you've found all four.",
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Four rays from a single point split the full turn around it into angles of $x$, $2x$, $3x$, and $120^\\circ$. Find $x$.',
    steps: [
      { label: 'Pick the budget', content: "The four angles wrap all the way around one point — that's the full-turn budget, so they add to $360^\\circ$." },
      { label: 'Set up and solve', content: '$x + 2x + 3x + 120^\\circ = 360^\\circ$, so $6x = 240^\\circ$ and $x = 40^\\circ$.' },
      { label: 'Check', content: "Add them back: $40^\\circ + 80^\\circ + 120^\\circ + 120^\\circ = 360^\\circ$. The budget balances, so you're done." },
    ],
  },
  {
    type: 'checkpointQuestion',
    question: 'Two straight lines cross, and one of the four angles measures $115^\\circ$. What are the other three angles?',
    answer: "The angle **directly across** is the vertical twin: $115^\\circ$. Each **neighbor** along a line is the supplement: $180^\\circ - 115^\\circ = 65^\\circ$. Four angles, two values — $115^\\circ, 115^\\circ, 65^\\circ, 65^\\circ$. A crossing never holds more than two.",
  },

  { type: 'heading', content: 'Parallel lines make just two angle sizes' },
  {
    type: 'text',
    content: "A line cutting across two **parallel** lines looks like eight different angles. It's two. Call the small one $x$ — every angle in the picture is either $x$ or $180^\\circ - x$. Same size means equal; different sizes add to $180^\\circ$. You can let go of \"corresponding\" and \"alternate interior\" — every one of those names is this single fact wearing a costume. One condition: the lines have to actually be *marked* parallel. Looking parallel doesn't count.",
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Parallel lines are crossed by a transversal. One angle measures $47^\\circ$. What is the obtuse angle the transversal makes with the other parallel line?\n\n(A) $43^\\circ$\n(B) $47^\\circ$\n(C) $133^\\circ$',
    steps: [
      { label: 'Two families apply', content: 'Parallel lines, so there are only two sizes in the whole picture: $47^\\circ$ and $180^\\circ - 47^\\circ$.' },
      { label: 'Classify the target', content: "You're asked for the *obtuse* angle — that's the big family: $180^\\circ - 47^\\circ = 133^\\circ$." },
      { label: 'Answer', content: '**(C) $133^\\circ$.** (B) is bait — $47^\\circ$ is the *same* family as the angle they handed you.' },
    ],
  },

  { type: 'heading', content: 'Triangle angles and the exterior shortcut' },
  {
    type: 'text',
    content: "Any triangle spends exactly $180^\\circ$ across its three angles — no exceptions, ever. And here's a shortcut worth owning: extend a side, and the **exterior angle** you create equals the sum of the two *far* interior angles — the two it doesn't touch. That means you can read it off directly, without stopping to find the third angle first.",
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'In $\\triangle ABC$, angle $A = 42^\\circ$. Side $BC$ is extended past $C$, and the exterior angle there measures $118^\\circ$. Find angle $B$.',
    steps: [
      { label: 'Use the shortcut', content: 'The exterior angle equals the two remote interiors added together — here, $A$ plus $B$.' },
      { label: 'Set up and solve', content: '$118^\\circ = 42^\\circ + B$, so $B = 118^\\circ - 42^\\circ = 76^\\circ$.' },
      { label: 'Check', content: "The interior angle at $C$ is $180^\\circ - 118^\\circ = 62^\\circ$, and $42 + 76 + 62 = 180$. It balances. Watch for $62^\\circ$ in the choices — that's the trap for anyone who found the interior angle and stopped there." },
    ],
  },
  {
    type: 'checkpointQuestion',
    question: 'A triangle has angles $x$, $2x$, and $3x$. Find $x$. Then find the exterior angle at the $x$ vertex.',
    answer: "$x + 2x + 3x = 6x = 180^\\circ$, so $x = 30^\\circ$. For the exterior angle you have two roads, and they agree: the supplement, $180^\\circ - 30^\\circ = 150^\\circ$, or the two far angles, $2x + 3x = 60^\\circ + 90^\\circ = 150^\\circ$. When both roads land on the same number, you know you're right.",
  },

  { type: 'heading', content: 'Congruence: the minimum you need' },
  {
    type: 'text',
    content: "Congruent means same shape *and* same size — a perfect copy. You don't check all six parts to prove it; one of these bundles is enough: **SSS** (three sides), **SAS** (two sides and the angle *between* them), or **two angles plus any one side** (ASA and AAS — lock two angles and the third comes free). Two lookalikes fail: **SSA**, because the loose side can swing into two different triangles, and **AAA**, because it copies the shape but lets the size run wild.",
  },
  {
    type: 'table',
    headers: ['Given', 'Congruent?', 'Why'],
    rows: [
      ['SSS, SAS, ASA, AAS', 'Yes', 'Each one locks both shape and size.'],
      ['SSA', 'No', 'The loose side can swing into two different triangles.'],
      ['AAA', 'No', 'Shape locks, size stays free — that is *similar*, not congruent.'],
    ],
  },
  {
    type: 'tip',
    content: "Match parts by **letter order**, never by where they sit on the page. In $\\triangle ABC \\cong \\triangle DEF$, side $AB$ pairs with $DE$ and angle $C$ pairs with $F$ — even when one triangle is flipped or spun. The drawing is allowed to mislead you; the letters aren't.",
  },

  { type: 'heading', content: 'Area by cutting, and scaling by k' },
  {
    type: 'text',
    content: "See a strange shaded region? There's no secret formula, and you're not supposed to find one. **Cut** it into rectangles and right triangles you already know, or box it in and **subtract the hole**. For triangles, $A = \\tfrac{1}{2} b h$ — and $h$ is the *perpendicular* height to the base, never a slanted side. Here's how that mistake happens: the figure draws the slant right on the region, big and tempting, and leaves the true height off the picture entirely. Grabbing the drawn length feels natural. It's wrong.",
  },
  {
    type: 'formula',
    label: 'Scaling laws',
    content: '$\\text{lengths} \\times k \\qquad \\text{areas} \\times k^2 \\qquad \\text{volumes} \\times k^3$',
    note: 'Scale every dimension by $k$ and each measurement grows by its own power: lengths and perimeters by $k$, areas by $k^2$, volumes by $k^3$. Going backward from an area or volume ratio? Take the root FIRST, then touch the lengths.',
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Two similar triangles have areas $20$ and $45$. The shortest side of the smaller is $8$. Find the corresponding side of the larger.',
    steps: [
      { label: 'Area ratio is k squared', content: "Areas are 2-D, so the ratio you're handed is $k^2$, not $k$: $\\dfrac{45}{20} = \\dfrac{9}{4} = k^2$." },
      { label: 'Root first', content: 'Drop back to the linear world before touching any side: $k = \\sqrt{\\tfrac{9}{4}} = \\dfrac{3}{2}$.' },
      { label: 'Scale the length', content: 'Now scale: $8 \\times \\dfrac{3}{2} = 12$. If you got $18$, you scaled a length by the *area* ratio — the exact skipped-root move this problem is built to catch.' },
    ],
  },
  {
    type: 'checkpointQuestion',
    question: 'Square A has $9$ times the area of square B. How do their side lengths compare, and their perimeters?',
    answer: "Root the area ratio first: side ratio $= \\sqrt{9} = 3$. Perimeter is a length too, so it also triples. Answering $9$ for either one means the square root got skipped — and that wrong answer is waiting in the choices every single time.",
  },

  {
    type: 'text',
    content: "**The move, every time:** never trust the drawing. Pull each value from a label or a budget, write it on the figure, and let every angle you fill in hand you the next one.",
  },
];
