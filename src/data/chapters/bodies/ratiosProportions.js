/**
 * Learn lesson body — Ratios, Rates & Proportions (Problem-Solving & Data Analysis).
 *
 * TUTOR VOICE (adopted 2026-07-14, exemplar: ./mLinearEquations.js): coaching
 * direct-address — talks TO the student, anticipates the mistake before it
 * happens, everyday anchor first and formula second, concrete decision rules
 * ("name the units first"). Lean structure unchanged. Gated by bodies.test.js.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const ratiosProportionsBlocks = [
  {
    type: 'text',
    content: "These questions hand you a relationship — miles per gallon, two parts sand to five parts cement, a job one worker finishes in six hours — and ask you to scale it, split it, convert it, or combine it. The arithmetic is never the hard part. The **setup** is the whole game: name the units first, and the answer writes itself.",
  },

  { type: 'heading', content: 'A proportion is two equal ratios' },
  {
    type: 'text',
    content: "When two ratios describe the *same* fixed relationship — a map scale, a unit price, a constant rate — set them equal and cross-multiply. One rule keeps you honest: **line the units up.** Miles over miles on both sides, inches over inches on both sides. Match the roles and you physically cannot set it up backward.",
  },
  {
    type: 'formula',
    label: 'Set equal, cross-multiply',
    content: '$\\dfrac{a}{b} = \\dfrac{c}{d} \\;\\Rightarrow\\; a\\,d = b\\,c$',
    note: 'Keep the same quantity on top of both fractions (miles over miles). And whenever you can, put the unknown on top — one multiplication isolates it, and there is no second step to slip on.',
  },
  {
    type: 'keyInsight',
    content: 'Swap the roles across the two sides and the answer comes out as the reciprocal — built from all the right numbers, so it survives a lazy glance. Say both top quantities out loud; they have to be the same kind of thing.',
  },

  { type: 'heading', content: 'A ratio is part-to-part — build the whole' },
  {
    type: 'text',
    content: "A ratio like $2:3$ compares two parts to each other — not a part to the whole. Before you can find anyone's share, **build the whole**: $2 + 3 = 5$ parts. Now the shares are $\\frac{2}{5}$ and $\\frac{3}{5}$ — never $\\frac{2}{3}$. Name the denominator out loud (\"out of the whole class\") before you reach for a numerator, and this trap can't touch you.",
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
    content: 'A share above $1$ is impossible — that is your flag that you skipped building the whole. And scan for a hidden third category before you decide the whole is just $a+b$.',
  },

  { type: 'heading', content: 'Unit conversion: multiply by fractions equal to 1' },
  {
    type: 'text',
    content: "A conversion factor like $\\frac{1\\text{ hr}}{60\\text{ min}}$ equals $1$, so multiplying by it changes the units without changing the amount. Never memorize which way up it goes — write each factor **with the unit you want to kill on the bottom**, so it cancels, and chain as many factors as you need. When only the target unit survives, the arithmetic is right by construction.",
  },
  {
    type: 'formula',
    label: 'Orient each factor to cancel',
    content: '$120\\ \\cancel{\\text{min}} \\times \\dfrac{1\\ \\text{hr}}{60\\ \\cancel{\\text{min}}} = 2\\ \\text{hr}$',
    note: 'Put the unwanted unit on the bottom so it cancels diagonally. For area, square the factor ($\\times 100^2$ for m² to cm²); for volume, cube it. And not every given number gets used — an off-route number is a decoy.',
  },

  { type: 'heading', content: "Working together: rates add, times don't" },
  {
    type: 'text',
    content: "When two pipes or workers run *together*, the thing that adds is the **rate**, not the time. Feel why: while one worker finishes, the other is working the same clock — adding the times double-counts it, and worse, it says the job takes *longer* with help. Nonsense. Rates stack cleanly: in one hour, worker A does his fraction of the job and worker B does hers, and the fractions pile up. So turn each solo time into a rate ($\\frac{1}{\\text{time}}$), add the rates, then flip back to a time.",
  },
  {
    type: 'formula',
    label: 'Add the rates, flip back to time',
    content: '$\\dfrac{1}{t_1} + \\dfrac{1}{t_2} = \\dfrac{1}{t}$',
    note: 'The sum is a rate; the question wants a time, so one final flip converts back. Sanity bound: a helper can only speed things up, so the combined time has to beat the faster solo time — that alone kills the "average the times" and "add the times" answer choices.',
  },

  { type: 'heading', content: 'Size check: smaller unit, bigger number' },
  {
    type: 'text',
    content: "Here's a two-second audit that catches an upside-down conversion: a **smaller** unit gives a **bigger** number, and a bigger unit gives a smaller one. *Smaller ruler, more pieces.* If your $2.5$ hours came out as $0.04$ minutes, the factor is flipped — no algebra review needed. Commit to the direction *before* you compute, so the check can actually veto a wrong answer instead of rubber-stamping whatever you got.",
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'A recipe that serves $4$ people uses $6$ cups of flour. At the same ratio, how many cups serve $10$ people?',
    steps: [
      { label: 'Set up, units lined up', content: 'Cups over people on both sides, unknown on top: $\\frac{x\\text{ cups}}{10\\text{ people}} = \\frac{6\\text{ cups}}{4\\text{ people}}$.' },
      { label: 'One multiplication', content: 'Multiply both sides by $10$: $x = 10 \\cdot \\frac{6}{4} = 15$ cups.' },
      { label: 'Size check', content: 'More people than the recipe serves, so you want more than $6$ cups. **$15$ cups** passes.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A class of $30$ has boys to girls in the ratio $2:3$. How many girls are in the class?',
    steps: [
      { label: 'Build the whole', content: 'The ratio is part-to-part, so build the whole first: $2 + 3 = 5$ parts.' },
      { label: 'Take the share', content: 'Girls are $\\frac{3}{5}$ of the class: $\\frac{3}{5} \\cdot 30 = 18$ girls.' },
      { label: 'Reject the trap', content: 'Read $\\frac{3}{2}$ as the share and you get $45$ girls — more than the whole class, impossible. Building the whole first is what saves you.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A car travels at $90$ kilometers per hour. How many meters does it travel per minute? ($1\\text{ km} = 1000\\text{ m}$, $1\\text{ hr} = 60\\text{ min}$.)',
    steps: [
      { label: 'Chain factors to cancel', content: 'Start from the given rate and multiply by factors equal to $1$: $\\dfrac{90\\ \\text{km}}{1\\ \\text{hr}} \\times \\dfrac{1000\\ \\text{m}}{1\\ \\text{km}} \\times \\dfrac{1\\ \\text{hr}}{60\\ \\text{min}}$.' },
      { label: 'Cancel and compute', content: 'Kilometers and hours cancel, leaving meters per minute: $\\dfrac{90 \\times 1000}{60} = 1500\\ \\text{m/min}$.' },
      { label: 'Size check', content: 'Meters and minutes are both smaller units than km and hours, so expect a sizeable number — $1500$ passes. A flipped factor would have handed you something tiny.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'One pump fills a tank in $6$ hours, another in $3$ hours. Working together, how long to fill the tank?',
    steps: [
      { label: 'Convert times to rates', content: 'Rates add, not times. Per hour: $\\frac{1}{6} + \\frac{1}{3} = \\frac{1}{6} + \\frac{2}{6} = \\frac{3}{6} = \\frac{1}{2}$ tank per hour.' },
      { label: 'Flip back to a time', content: 'The combined time is the reciprocal of the combined rate: $t = \\frac{1}{\\,1/2\\,} = 2$ hours.' },
      { label: 'Bound check', content: "A helper can only speed things up, so your answer has to beat the faster pump's $3$ hours — **$2$ hours** does. Averaging ($4.5$ h) or adding ($9$ h) both exceed $3$ h, so both are impossible." },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'A trail mix is $2$ parts raisins to $3$ parts nuts. What fraction of the mix is raisins — and why is it not $\\frac{2}{3}$?',
    answer: "It's $\\frac{2}{5}$. The ratio $2:3$ is part-to-part — the whole never appears in it, so build it: $2 + 3 = 5$ parts. Raisins are $\\frac{\\text{raisins}}{\\text{whole}} = \\frac{2}{5}$. The number $\\frac{2}{3}$ answers a different question — raisins compared to nuts.",
  },
  {
    type: 'checkpointQuestion',
    question: 'You need the cost of $200$ grams at $\\$8$ per pound, with $1$ pound $= 454$ grams. Sketch the chain — which way does each factor go?',
    answer: "Route grams → pounds → dollars: $200\\ \\text{g} \\times \\frac{1\\ \\text{lb}}{454\\ \\text{g}} \\times \\frac{\\$8}{1\\ \\text{lb}} \\approx \\$3.52$. Grams goes on the bottom of the first factor because grams has to die; pounds on the bottom of the second because pounds dies next. You orient each factor by what unit it kills — never by memory.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A printer produces $8$ pages every $20$ seconds. At that rate, how long does it take to print $30$ pages?',
    answer: "**$75$ seconds.** Line the units up — seconds over pages on both sides: $\\frac{t}{30} = \\frac{20}{8}$, so $t = 30 \\times \\frac{20}{8} = 75$ seconds. (Or find the unit rate first: $20 \\div 8 = 2.5$ seconds per page, then $2.5 \\times 30 = 75$.)",
  },

  {
    type: 'text',
    content: "**The move, every time:** name the units first, set proportions with the roles lined up, build the whole before reading a share, orient each conversion factor to kill a unit, add rates instead of times, and gate your answer with a two-second size check. The setup is the only hard part — do it on purpose.",
  },
];
