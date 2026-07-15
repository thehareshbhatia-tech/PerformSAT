/**
 * Learn lesson body — Ratios, Rates & Proportions (Problem-Solving & Data Analysis).
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

export const ratiosProportionsBlocks = [
  {
    type: 'text',
    content: "These questions present a relationship — miles per gallon, two parts sand to five parts cement, a job one worker finishes in six hours — and ask that it be scaled, split, converted, or combined. The arithmetic is rarely the difficulty; the **setup** carries nearly all of it. Name the units first, and the remaining steps follow directly.",
  },

  { type: 'heading', content: 'A proportion is two equal ratios' },
  {
    type: 'text',
    content: "When two ratios describe the *same* fixed relationship — a map scale, a unit price, a constant rate — set them equal and cross-multiply. One rule prevents the standard setup error: **align the units.** Miles over miles on both sides, inches over inches on both sides. With the roles matched, the proportion cannot be written backward.",
  },
  {
    type: 'formula',
    label: 'Set equal, cross-multiply',
    content: '$\\dfrac{a}{b} = \\dfrac{c}{d} \\;\\Rightarrow\\; a\\,d = b\\,c$',
    note: 'Keep the same quantity on top of both fractions (miles over miles). Where possible, place the unknown in a numerator — a single multiplication then isolates it, leaving no second step in which to err.',
  },
  {
    type: 'keyInsight',
    content: 'A proportion set up with the roles swapped produces the reciprocal of the correct answer — built from all the right numbers, so it survives a casual inspection. Confirm that both numerators name the same kind of quantity before solving.',
  },

  { type: 'heading', content: 'Part-to-part ratios and the whole' },
  {
    type: 'text',
    content: "A ratio such as $2:3$ compares two parts to each other — not a part to the whole. Before any share can be computed, **build the whole**: $2 + 3 = 5$ parts. The shares are then $\\frac{2}{5}$ and $\\frac{3}{5}$ — never $\\frac{2}{3}$. Identify the denominator explicitly (\"out of the whole class\") before writing a numerator; this single check prevents the part-for-whole error.",
  },
  {
    type: 'table',
    headers: ['The ratio $a:b$ asks for…', 'Use', 'Trap answer'],
    rows: [
      ['this part vs that part', '$\\dfrac{a}{b}$', '—'],
      ["this part's share of the whole", '$\\dfrac{a}{a+b}$', '$\\dfrac{a}{b}$'],
      ['an actual count', 'share $\\times$ real total', 'ratio $\\times$ total'],
    ],
  },
  {
    type: 'tip',
    content: 'A share above $1$ is impossible and signals that the whole was never built. Check for an unstated third category before concluding that the whole is $a+b$.',
  },

  { type: 'heading', content: 'Unit conversion: multiply by fractions equal to 1' },
  {
    type: 'text',
    content: "A conversion factor such as $\\frac{1\\text{ hr}}{60\\text{ min}}$ equals $1$, so multiplying by it changes the units without changing the quantity. There is no need to memorize its orientation — write each factor **with the unit to be eliminated on the bottom**, so that it cancels, and chain as many factors as the conversion requires. When only the target unit survives, the arithmetic is correct by construction.",
  },
  {
    type: 'formula',
    label: 'Orient each factor to cancel',
    content: '$120\\ \\cancel{\\text{min}} \\times \\dfrac{1\\ \\text{hr}}{60\\ \\cancel{\\text{min}}} = 2\\ \\text{hr}$',
    note: 'Place the unwanted unit on the bottom so it cancels diagonally. For area, square the factor ($\\times 100^2$ for m² to cm²); for volume, cube it. Not every given number is needed — a value off the conversion route is a distractor.',
  },

  { type: 'heading', content: 'Combined work: rates add, times do not' },
  {
    type: 'text',
    content: "When two pipes or two workers operate *together*, the quantity that adds is the **rate**, not the time. The reason: both work over the same interval, so adding the times counts that interval twice — and it implies the job takes *longer* with help, which cannot be true. Rates combine cleanly: in one hour, each worker completes a fraction of the job, and those fractions accumulate. Convert each solo time to a rate ($\\frac{1}{\\text{time}}$), add the rates, then take the reciprocal to return to a time.",
  },
  {
    type: 'formula',
    label: 'Add the rates, flip back to time',
    content: '$\\dfrac{1}{t_1} + \\dfrac{1}{t_2} = \\dfrac{1}{t}$',
    note: 'The sum is a rate; the question asks for a time, so one final reciprocal converts back. A useful bound: a helper can only shorten the job, so the combined time must be less than the faster solo time — a check that alone eliminates the "average the times" and "add the times" answer choices.',
  },

  { type: 'heading', content: 'Size check: smaller unit, bigger number' },
  {
    type: 'text',
    content: "A brief audit catches an inverted conversion: a **smaller** unit produces a **larger** number, and a larger unit produces a smaller one, because a smaller unit divides the same quantity into more pieces. If $2.5$ hours converts to $0.04$ minutes, the factor was inverted — no further review is required to know it. Decide the expected direction *before* computing, so the check can genuinely veto a wrong answer rather than confirm whatever appeared.",
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'A recipe that serves $4$ people uses $6$ cups of flour. At the same ratio, how many cups serve $10$ people?',
    steps: [
      { label: 'Align the units', content: 'Cups over people on both sides, unknown on top: $\\frac{x\\text{ cups}}{10\\text{ people}} = \\frac{6\\text{ cups}}{4\\text{ people}}$.' },
      { label: 'Solve with one multiplication', content: 'Multiply both sides by $10$: $x = 10 \\cdot \\frac{6}{4} = 15$ cups.' },
      { label: 'Check the size', content: 'Ten people exceed the four the recipe serves, so the answer must exceed $6$ cups. **$15$ cups** is consistent.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A class of $30$ has boys to girls in the ratio $2:3$. How many girls are in the class?',
    steps: [
      { label: 'Build the whole', content: 'The ratio is part-to-part, so build the whole first: $2 + 3 = 5$ parts.' },
      { label: 'Take the share', content: 'Girls are $\\frac{3}{5}$ of the class: $\\frac{3}{5} \\cdot 30 = 18$ girls.' },
      { label: 'Rule out the misread', content: 'Reading $\\frac{3}{2}$ as the share gives $45$ girls — more than the whole class, which is impossible. Building the whole first prevents this misreading.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A car travels at $90$ kilometers per hour. How many meters does it travel per minute? ($1\\text{ km} = 1000\\text{ m}$, $1\\text{ hr} = 60\\text{ min}$.)',
    steps: [
      { label: 'Chain factors to cancel', content: 'Start from the given rate and multiply by factors equal to $1$: $\\dfrac{90\\ \\text{km}}{1\\ \\text{hr}} \\times \\dfrac{1000\\ \\text{m}}{1\\ \\text{km}} \\times \\dfrac{1\\ \\text{hr}}{60\\ \\text{min}}$.' },
      { label: 'Cancel and compute', content: 'Kilometers and hours cancel, leaving meters per minute: $\\dfrac{90 \\times 1000}{60} = 1500\\ \\text{m/min}$.' },
      { label: 'Check the size', content: 'Meters and minutes are both smaller units than kilometers and hours, so a large number is expected — $1500$ is consistent. An inverted factor would have produced a very small result.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'One pump fills a tank in $6$ hours, another in $3$ hours. Working together, how long to fill the tank?',
    steps: [
      { label: 'Convert times to rates', content: 'Rates add, not times. Per hour: $\\frac{1}{6} + \\frac{1}{3} = \\frac{1}{6} + \\frac{2}{6} = \\frac{3}{6} = \\frac{1}{2}$ tank per hour.' },
      { label: 'Take the reciprocal', content: 'The combined time is the reciprocal of the combined rate: $t = \\frac{1}{\\,1/2\\,} = 2$ hours.' },
      { label: 'Check the bound', content: "A second pump can only shorten the job, so the answer must be less than the faster pump's $3$ hours — **$2$ hours** is. Averaging ($4.5$ h) or adding ($9$ h) both exceed $3$ h, so both are impossible." },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'A trail mix is $2$ parts raisins to $3$ parts nuts. What fraction of the mix is raisins — and why is it not $\\frac{2}{3}$?',
    answer: "**$\\frac{2}{5}$.** The ratio $2:3$ is part-to-part — the whole never appears in it, so build it: $2 + 3 = 5$ parts. Raisins are $\\frac{\\text{raisins}}{\\text{whole}} = \\frac{2}{5}$. The value $\\frac{2}{3}$ answers a different question: raisins compared with nuts.",
  },
  {
    type: 'checkpointQuestion',
    question: 'You need the cost of $200$ grams at $\\$8$ per pound, with $1$ pound $= 454$ grams. Sketch the chain — which way does each factor go?',
    answer: "**About $\\$3.52$.** Route grams → pounds → dollars: $200\\ \\text{g} \\times \\frac{1\\ \\text{lb}}{454\\ \\text{g}} \\times \\frac{\\$8}{1\\ \\text{lb}} \\approx \\$3.52$. Grams sits on the bottom of the first factor so that grams cancels first; pounds sits on the bottom of the second so that pounds cancels next. Each factor is oriented by the unit it eliminates, not from memory.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A printer produces $8$ pages every $20$ seconds. At that rate, how long does it take to print $30$ pages?',
    answer: "**$75$ seconds.** Align the units — seconds over pages on both sides: $\\frac{t}{30} = \\frac{20}{8}$, so $t = 30 \\times \\frac{20}{8} = 75$ seconds. (Alternatively, find the unit rate first: $20 \\div 8 = 2.5$ seconds per page, then $2.5 \\times 30 = 75$.)",
  },

  {
    type: 'text',
    content: "**In summary:** name the units first, set proportions with the roles aligned, build the whole before reading a share, orient each conversion factor to cancel a unit, add rates rather than times, and finish with a size check on the result. The setup carries the difficulty; carry it out deliberately.",
  },
];
