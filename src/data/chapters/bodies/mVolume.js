/**
 * Learn lesson body — Area & Volume (Geometry & Trigonometry).
 *
 * TUTOR VOICE (adopted 2026-07-14, user-approved exemplar mLinearEquations.js):
 * coaching direct-address — talks TO the student, everyday anchor first
 * ("it's an open-book question"), anticipates the diameter-in-the-radius-slot
 * mistake before it happens, memorable decision rules. Lean structure
 * unchanged; gated by bodies.test.js (lean contract).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const mVolumeBlocks = [
  {
    type: 'text',
    content: "Here's what the test never advertises: **every volume formula you could want is printed on the reference sheet**, one click away, on every math question. So this skill was never memorization. It's three quieter things — pick the right formula, drop each number into the right slot, and, for odd shapes, cut the figure into pieces you already know.",
  },

  { type: 'heading', content: 'The formulas are handed to you' },
  {
    type: 'text',
    content: "Open the sheet once now, so each shape is a face you recognize on sight — then the work is pure plug-in. And notice the family resemblance while you're there: a box and a cylinder are both **base area times height**, and a cone or pyramid is exactly **one-third** of the straight solid that would enclose it. That pattern turns five formulas into one idea.",
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
    content: "Three steps, every shape: match the solid to a formula, put each given length into the slot that names it, compute. Now here's where these actually go wrong — almost never at the formula. It's the slotting. A **diameter dropped into a radius slot** is the most farmed error in this whole family, with rounding $\\pi$ too early a close second. Slow down at the labels and the arithmetic behaves itself.",
  },
  {
    type: 'steps',
    items: [
      'Name the solid and pull its formula off the reference sheet.',
      'Slot each given length: radius, height, side? A diameter gets halved before it enters a radius slot.',
      'Compute. If the answer choices keep $\\pi$, you keep $\\pi$ — never round early.',
    ],
  },
  {
    type: 'keyInsight',
    content: "Volume **given**, length missing? Same formula, run **backward**: plug in everything you know and solve for the stranger. A tank of volume $90\\pi$ and radius $3$ gives $90\\pi = \\pi(3)^2 h$, so $h = 10$.",
  },

  { type: 'heading', content: 'Odd shapes: cut, then add or subtract' },
  {
    type: 'text',
    content: "No formula matches the figure? Stop hunting for one — **cut it into shapes that have formulas** and combine. An L-shaped floor is two rectangles **added**, or one big rectangle **minus** the missing corner. Same idea in 3-D: a block with a hole drilled through it is the block **minus** the cylinder. You already know every piece; the skill is seeing the cut.",
  },
  {
    type: 'tip',
    content: "Any \"leftover\" solid — space not filled, material remaining after a hole — is almost always **big volume minus small volume**. Compute each piece on its own, then subtract.",
  },

  { type: 'heading', content: 'Density links mass to volume' },
  {
    type: 'text',
    content: "Density scares people, and it shouldn't — it's just a rate tying stuff to the space it fills, and the unit spells out its own instructions. $\\text{g/cm}^3$ literally reads \"grams **per** cubic centimeter,\" so multiplying by a volume in $\\text{cm}^3$ cancels the $\\text{cm}^3$ and leaves grams. Stuck on multiply-or-divide? Let the units cancel — they point to the right operation every time.",
  },
  {
    type: 'formula',
    content: '$\\text{mass} = \\text{density} \\times \\text{volume}$',
  },
  {
    type: 'text',
    content: "These items usually chain: get the **volume** from the dimensions first, then density turns it into mass (or divide to recover a missing slot). \"How many fit\" and \"how much fills it\" run on the exact same thinking.",
  },
  {
    type: 'callout',
    variant: 'warning',
    title: 'Scaling shortcut',
    content: "Scale every length by a factor $k$ and **area** grows by $k^2$, **volume** by $k^3$. Double the radius of a sphere and it holds $2^3 = 8$ times as much — not twice as much. If you answered \"twice,\" there was a choice waiting for you.",
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A cylindrical water tank has radius $4$ ft and height $9$ ft. What is its volume, in cubic feet?',
    steps: [
      { label: 'Name the solid', content: 'Cylinder: $V = \\pi r^2 h$, straight off the sheet.' },
      { label: 'Slot the lengths', content: '$r = 4$ — a radius, no halving needed — and $h = 9$: $V = \\pi (4)^2 (9)$.' },
      { label: 'Compute', content: "$\\pi \\cdot 16 \\cdot 9 = 144\\pi \\approx 452$ cubic feet. If the choices keep $\\pi$, your answer is $144\\pi$." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A spherical ball has radius $3$ cm. What is its volume, in terms of $\\pi$?',
    steps: [
      { label: 'Name the solid', content: 'Sphere: $V = \\tfrac{4}{3}\\pi r^3$ — only the radius matters.' },
      { label: 'Slot and cube', content: 'With $r = 3$: $r^3 = 3^3 = 27$, so $V = \\tfrac{4}{3}\\pi (27)$.' },
      { label: 'Compute', content: '$\\tfrac{4}{3}\\cdot 27 = 36$, so $V = 36\\pi$ cubic centimeters.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A solid metal cube has edges of length $5$ cm. The metal has a density of $8$ g/cm$^3$. What is the mass of the cube, in grams?',
    steps: [
      { label: 'Volume first', content: 'A cube is a box with equal edges: $V = 5 \\times 5 \\times 5 = 125$ cm$^3$.' },
      { label: 'Apply density', content: '$\\text{mass} = \\text{density} \\times \\text{volume} = 8 \\times 125$.' },
      { label: 'Compute', content: '$8 \\times 125 = 1000$ grams — and the units agree: $\\tfrac{\\text{g}}{\\text{cm}^3} \\times \\text{cm}^3 = \\text{g}$.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'A rectangular wooden block measures $6$ cm by $4$ cm by $10$ cm. A cylindrical hole of radius $1$ cm is drilled straight through the $10$ cm length. What volume of wood remains? (Use $\\pi \\approx 3.14$.)',
    steps: [
      { label: 'Whole minus hole', content: 'Leftover wood = block volume $-$ cylinder volume. Two clean solids, one subtraction.' },
      { label: 'Block', content: '$V_{\\text{block}} = 6 \\times 4 \\times 10 = 240$ cm$^3$.' },
      { label: 'Hole', content: 'The drill ran the full $10$ cm length: $V_{\\text{hole}} = \\pi (1)^2 (10) = 10\\pi \\approx 31.4$ cm$^3$.' },
      { label: 'Subtract', content: '$240 - 31.4 = 208.6$ cm$^3$ of wood remains.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'An L-shaped patio is a $12$ m by $8$ m rectangle with a $5$ m by $3$ m rectangle removed from one corner. What is its area?',
    answer: '**$81$ m$^2$.** Big rectangle minus the missing corner: $12 \\times 8 - 5 \\times 3 = 96 - 15 = 81$. Cut, then subtract.',
  },
  {
    type: 'checkpointQuestion',
    question: 'A cone and a cylinder have the same radius and the same height. The cylinder holds $60$ cm$^3$. How much does the cone hold?',
    answer: "**$20$ cm$^3$.** A cone is exactly one-third of the cylinder that surrounds it: $\\tfrac{1}{3} \\times 60 = 20$. No radius, no height — the one-third relationship does all the work.",
  },
  {
    type: 'checkpointQuestion',
    question: 'If every edge of a cube is tripled, how many times larger is its volume?',
    answer: "**$27$ times.** Volume scales by the cube of the length factor: $3^3 = 27$. Not $3$, and not $9$ — the $9$ is how the *surface area* grows, and it's sitting among the answer choices for exactly that reason.",
  },

  {
    type: 'text',
    content: "**The move, every time:** name the shape, pull its formula off the reference sheet, slot each length (halve any diameter), compute. Odd figure? Cut it into known pieces and add or subtract. Density? Volume first, then let the units point to multiply or divide.",
  },
];
