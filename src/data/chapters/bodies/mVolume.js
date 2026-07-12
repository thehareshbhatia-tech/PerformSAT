/**
 * Learn lesson body — Area & Volume (Geometry & Trigonometry).
 *
 * Lean "review / cheat-sheet" style (see gSubjectVerbAgreement.js for the
 * voice + shape exemplar): one SAT skill per lesson, plain language, one idea
 * per short section, a method, a scannable formula grid, then worked examples
 * and check-yourself questions. Gated by bodies.test.js (lean contract).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const mVolumeBlocks = [
  {
    type: 'text',
    content: 'Here is the good news the exam never says out loud: **every volume formula you need is printed at the start of the section.** So this skill is not memorizing formulas — it is picking the right one, dropping your numbers into the right slots, and (for odd shapes) cutting the figure into pieces you already know.',
  },

  { type: 'heading', content: 'The formulas are handed to you' },
  {
    type: 'text',
    content: 'The reference sheet sits one click away on every math question. Read it once so you recognize each shape on sight — then the work is pure plug-in. Notice the shared idea: a box and a cylinder are both **base area times height**, and a cone or pyramid is just **one-third** of the matching straight solid.',
  },
  {
    type: 'formulaGrid',
    items: [
      { label: 'Rectangular box', formula: '$V = \\ell w h$', note: 'length $\\times$ width $\\times$ height.' },
      { label: 'Cylinder', formula: '$V = \\pi r^2 h$', note: 'circle base $\\pi r^2$, swept up by $h$.' },
      { label: 'Sphere', formula: '$V = \\tfrac{4}{3}\\pi r^3$', note: 'only $r$ matters.' },
      { label: 'Cone', formula: '$V = \\tfrac{1}{3}\\pi r^2 h$', note: 'a third of the cylinder around it.' },
      { label: 'Pyramid', formula: '$V = \\tfrac{1}{3}(\\text{base area})\\,h$', note: 'a third of the box around it.' },
    ],
  },

  { type: 'heading', content: 'The move: name the base, then plug in' },
  {
    type: 'text',
    content: 'Almost every volume item is the same three steps. Match the shape to a formula, put each length in the slot that names it, and compute — leaving $\\pi$ in the answer if the choices do.',
  },
  {
    type: 'steps',
    items: [
      'Name the solid and grab its formula from the reference sheet.',
      'Slot each given length: is it a radius, a height, a side? Put it where the formula names it.',
      'Compute. If the answer choices keep $\\pi$, you keep $\\pi$ — don\'t round early.',
    ],
  },
  {
    type: 'keyInsight',
    content: 'When the volume is **given** and a length is missing, run the same formula **backward**: plug in what you know and solve for the unknown. A tank of volume $90\\pi$ and radius $3$ gives $90\\pi = \\pi(3)^2 h$, so $h = 10$.',
  },

  { type: 'heading', content: 'Odd shapes: cut, then add or subtract' },
  {
    type: 'text',
    content: 'When a region or solid is not a clean shape, **break it into shapes you know** and combine. Split an L-shaped floor into two rectangles and **add**, or take the big rectangle and **subtract** the missing corner. Same idea in 3-D: a block with a hole drilled through it is just the block **minus** the cylinder.',
  },
  {
    type: 'tip',
    content: 'For a "leftover" solid — space not filled, material remaining after a hole — the answer is almost always **big volume minus small volume**. Compute each piece on its own, then subtract.',
  },

  { type: 'heading', content: 'Density links mass to volume' },
  {
    type: 'text',
    content: 'Density is not a new formula to fear — it is just a rate that ties a physical amount to how much space it takes up. The unit tells you the relationship: $\\text{g/cm}^3$ literally reads "grams **per** cubic centimeter."',
  },
  {
    type: 'formula',
    content: '$\\text{mass} = \\text{density} \\times \\text{volume}$',
  },
  {
    type: 'text',
    content: 'These items usually chain: find the **volume** from the dimensions first, then multiply by density for mass (or divide to recover a missing slot). The same shape of thinking answers "how many fit" and "how much fills it" questions.',
  },
  {
    type: 'callout',
    variant: 'warning',
    title: 'Scaling shortcut',
    content: 'Scale every length by a factor $k$ and **area** grows by $k^2$, **volume** by $k^3$. Double the radius of a sphere and it holds $2^3 = 8$ times as much — not twice as much.',
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A cylindrical water tank has radius $4$ ft and height $9$ ft. What is its volume, in cubic feet?',
    steps: [
      { label: 'Name the solid', content: 'It is a cylinder, so $V = \\pi r^2 h$.' },
      { label: 'Slot the lengths', content: 'Radius $r = 4$, height $h = 9$: $V = \\pi (4)^2 (9)$.' },
      { label: 'Compute', content: '$\\pi \\cdot 16 \\cdot 9 = 144\\pi \\approx 452$ cubic feet. Leave it as $144\\pi$ if the choices keep $\\pi$.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A solid metal cube has edges of length $5$ cm. The metal has a density of $8$ g/cm$^3$. What is the mass of the cube, in grams?',
    steps: [
      { label: 'Volume first', content: 'A cube is a box with equal sides: $V = 5 \\times 5 \\times 5 = 125$ cm$^3$.' },
      { label: 'Apply density', content: '$\\text{mass} = \\text{density} \\times \\text{volume} = 8 \\times 125$.' },
      { label: 'Compute', content: '$8 \\times 125 = 1000$ grams. The units check: $\\tfrac{\\text{g}}{\\text{cm}^3} \\times \\text{cm}^3 = \\text{g}$.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'A rectangular wooden block measures $6$ cm by $4$ cm by $10$ cm. A cylindrical hole of radius $1$ cm is drilled straight through the $10$ cm length. What volume of wood remains? (Use $\\pi \\approx 3.14$.)',
    steps: [
      { label: 'Whole minus hole', content: 'Remaining wood = block volume $-$ cylinder volume.' },
      { label: 'Block', content: '$V_{\\text{block}} = 6 \\times 4 \\times 10 = 240$ cm$^3$.' },
      { label: 'Hole', content: 'The hole runs the full $10$ cm length: $V_{\\text{hole}} = \\pi (1)^2 (10) = 10\\pi \\approx 31.4$ cm$^3$.' },
      { label: 'Subtract', content: '$240 - 31.4 = 208.6$ cm$^3$ of wood remains.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'An L-shaped patio is a $12$ m by $8$ m rectangle with a $5$ m by $3$ m rectangle removed from one corner. What is its area?',
    answer: '**$81$ m$^2$.** Take the full rectangle and subtract the missing corner: $12 \\times 8 - 5 \\times 3 = 96 - 15 = 81$.',
  },
  {
    type: 'checkpointQuestion',
    question: 'A cone and a cylinder have the same radius and the same height. The cylinder holds $60$ cm$^3$. How much does the cone hold?',
    answer: '**$20$ cm$^3$.** A cone is exactly one-third of the cylinder that surrounds it: $\\tfrac{1}{3} \\times 60 = 20$.',
  },

  {
    type: 'text',
    content: '**The move, every time:** name the shape, pull its formula off the reference sheet, slot each length, and compute. Odd shape? Cut it into known pieces and add or subtract. Density? Get the volume first, then multiply.',
  },
];
