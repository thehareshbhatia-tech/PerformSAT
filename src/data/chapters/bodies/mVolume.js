/**
 * Learn lesson body — Area & Volume (Geometry & Trigonometry).
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

export const mVolumeBlocks = [
  {
    type: 'text',
    content: "**Every volume formula needed on the test is printed on the reference sheet**, available on every math question. Volume questions therefore do not test memorization; they test three separate skills — selecting the correct formula, substituting each given length into the correct position, and, for irregular figures, decomposing the solid into familiar pieces.",
  },

  { type: 'heading', content: 'The reference-sheet formulas' },
  {
    type: 'text',
    content: "Review the reference sheet until each solid is recognizable on sight; once the formula is identified, the remaining work is substitution. The formulas also share a structure worth noticing: a box and a cylinder are both **base area times height**, and a cone or pyramid is exactly **one-third** of the straight solid that would enclose it. That pattern reduces five formulas to one idea.",
  },
  {
    type: 'formulaGrid',
    items: [
      { label: 'Rectangular box', formula: '$V = \\ell w h$', note: 'length $\\times$ width $\\times$ height.' },
      { label: 'Cylinder', formula: '$V = \\pi r^2 h$', note: 'circular base $\\pi r^2$ times height $h$.' },
      { label: 'Sphere', formula: '$V = \\tfrac{4}{3}\\pi r^3$', note: 'depends only on $r$.' },
      { label: 'Cone', formula: '$V = \\tfrac{1}{3}\\pi r^2 h$', note: 'one-third of the enclosing cylinder.' },
      { label: 'Pyramid', formula: '$V = \\tfrac{1}{3}(\\text{base area})\\,h$', note: 'one-third of the enclosing box.' },
    ],
  },

  { type: 'heading', content: 'Selecting the formula and substituting' },
  {
    type: 'text',
    content: "The procedure is the same for every solid: match the figure to a formula, place each given length in the position that names it, and compute. Errors rarely occur at the formula stage; they occur in the substitution. A **diameter placed in a radius position** is the most frequent error in this family, with premature rounding of $\\pi$ a close second. Careful attention to the labels on the given lengths prevents both.",
  },
  {
    type: 'steps',
    items: [
      'Identify the solid and take its formula from the reference sheet.',
      'Place each given length in its named position — radius, height, or side. Halve any diameter before it enters a radius position.',
      'Compute. If the answer choices are expressed in terms of $\\pi$, leave $\\pi$ in the result rather than rounding early.',
    ],
  },
  {
    type: 'keyInsight',
    content: "When the volume is **given** and a length is missing, the same formula runs **backward**: substitute every known value and solve for the unknown. A tank of volume $90\\pi$ and radius $3$ gives $90\\pi = \\pi(3)^2 h$, so $h = 10$.",
  },

  { type: 'heading', content: 'Composite figures: add or subtract known pieces' },
  {
    type: 'text',
    content: "When no single formula matches the figure, **decompose it into shapes that have formulas** and combine the results. An L-shaped floor is two rectangles **added**, or one large rectangle **minus** the missing corner. The same idea applies in three dimensions: a block with a hole drilled through it is the block **minus** the cylinder. Every piece is a familiar solid; the skill lies in choosing the decomposition.",
  },
  {
    type: 'tip',
    content: "Any \"leftover\" solid — space not filled, material remaining after a hole — is almost always **the larger volume minus the smaller volume**. Compute each piece separately, then subtract.",
  },

  { type: 'heading', content: 'Density relates mass to volume' },
  {
    type: 'text',
    content: "Density is a rate relating mass to the space it occupies, and the unit states its own instructions. $\\text{g/cm}^3$ reads \"grams **per** cubic centimeter,\" so multiplying by a volume in $\\text{cm}^3$ cancels the $\\text{cm}^3$ and leaves grams. When it is unclear whether to multiply or divide, track the units: the operation that cancels them correctly is the right one.",
  },
  {
    type: 'formula',
    content: '$\\text{mass} = \\text{density} \\times \\text{volume}$',
  },
  {
    type: 'text',
    content: "Density items usually chain two steps: compute the **volume** from the dimensions first, then apply the density to convert it to mass (or divide to recover a missing quantity). Questions asking \"how many fit\" or \"how much fills it\" follow the same two-step structure.",
  },
  {
    type: 'callout',
    variant: 'warning',
    title: 'How scaling affects area and volume',
    content: "Scaling every length by a factor $k$ multiplies **area** by $k^2$ and **volume** by $k^3$. Doubling the radius of a sphere multiplies its volume by $2^3 = 8$, not by $2$ — and wrong answer choices are routinely constructed from the un-cubed factor.",
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A cylindrical water tank has radius $4$ ft and height $9$ ft. What is its volume, in cubic feet?',
    steps: [
      { label: 'Identify the solid', content: 'Cylinder: $V = \\pi r^2 h$, taken directly from the reference sheet.' },
      { label: 'Substitute the lengths', content: '$r = 4$ is given as a radius, so no halving is needed, and $h = 9$: $V = \\pi (4)^2 (9)$.' },
      { label: 'Compute', content: "$\\pi \\cdot 16 \\cdot 9 = 144\\pi \\approx 452$ cubic feet. If the answer choices are expressed in terms of $\\pi$, report $144\\pi$." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A spherical ball has radius $3$ cm. What is its volume, in terms of $\\pi$?',
    steps: [
      { label: 'Identify the solid', content: 'Sphere: $V = \\tfrac{4}{3}\\pi r^3$; the radius is the only dimension required.' },
      { label: 'Substitute and cube', content: 'With $r = 3$: $r^3 = 3^3 = 27$, so $V = \\tfrac{4}{3}\\pi (27)$.' },
      { label: 'Compute', content: '$\\tfrac{4}{3}\\cdot 27 = 36$, so $V = 36\\pi$ cubic centimeters.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A solid metal cube has edges of length $5$ cm. The metal has a density of $8$ g/cm$^3$. What is the mass of the cube, in grams?',
    steps: [
      { label: 'Compute the volume', content: 'A cube is a box with equal edges: $V = 5 \\times 5 \\times 5 = 125$ cm$^3$.' },
      { label: 'Apply the density', content: '$\\text{mass} = \\text{density} \\times \\text{volume} = 8 \\times 125$.' },
      { label: 'Compute', content: '$8 \\times 125 = 1000$ grams. The units confirm the operation: $\\tfrac{\\text{g}}{\\text{cm}^3} \\times \\text{cm}^3 = \\text{g}$.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'A rectangular wooden block measures $6$ cm by $4$ cm by $10$ cm. A cylindrical hole of radius $1$ cm is drilled straight through the $10$ cm length. What volume of wood remains? (Use $\\pi \\approx 3.14$.)',
    steps: [
      { label: 'Set up the subtraction', content: 'The remaining wood equals the block volume minus the cylinder volume — two familiar solids and one subtraction.' },
      { label: 'Compute the block', content: '$V_{\\text{block}} = 6 \\times 4 \\times 10 = 240$ cm$^3$.' },
      { label: 'Compute the hole', content: 'The hole runs the full $10$ cm length: $V_{\\text{hole}} = \\pi (1)^2 (10) = 10\\pi \\approx 31.4$ cm$^3$.' },
      { label: 'Subtract', content: '$240 - 31.4 = 208.6$ cm$^3$ of wood remains.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'An L-shaped patio is a $12$ m by $8$ m rectangle with a $5$ m by $3$ m rectangle removed from one corner. What is its area?',
    answer: '**$81$ m$^2$.** The large rectangle minus the missing corner: $12 \\times 8 - 5 \\times 3 = 96 - 15 = 81$. Decomposing the figure reduces it to two known areas and one subtraction.',
  },
  {
    type: 'checkpointQuestion',
    question: 'A cone and a cylinder have the same radius and the same height. The cylinder holds $60$ cm$^3$. How much does the cone hold?',
    answer: "**$20$ cm$^3$.** A cone occupies exactly one-third of the cylinder with the same radius and height: $\\tfrac{1}{3} \\times 60 = 20$. Neither the radius nor the height is needed; the one-third relationship resolves the question directly.",
  },
  {
    type: 'checkpointQuestion',
    question: 'If every edge of a cube is tripled, how many times larger is its volume?',
    answer: "**$27$ times.** Volume scales by the cube of the length factor: $3^3 = 27$. The answer is neither $3$ nor $9$ — the $9$ is how the *surface area* grows ($3^2$), and wrong answer choices are routinely constructed from that squared factor.",
  },

  {
    type: 'text',
    content: "**In summary:** identify the solid, take its formula from the reference sheet, substitute each length (halving any diameter), and compute. Decompose an irregular figure into known pieces and add or subtract. For density, compute the volume first, then let the units determine whether to multiply or divide.",
  },
];
