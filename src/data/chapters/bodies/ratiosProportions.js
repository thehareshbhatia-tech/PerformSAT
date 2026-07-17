/**
 * Learn lesson body — Ratios, Rates & Proportions (Problem-Solving & Data Analysis).
 *
 * VOICE v3 (adopted 2026-07-17, exemplar: bodies/centralIdeas.js): scannable
 * instructional register — direct address, contractions, 1-3 sentence text
 * blocks, list blocks for criteria, steps blocks for procedures; no analogies,
 * no pep-talk, no emojis. All substance of the v2 textbook version preserved.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const ratiosProportionsBlocks = [
  {
    type: 'text',
    content: "This unit trades equation-solving for reasoning about real quantities, and proportional thinking is its spine. A question hands you a relationship — miles per gallon, two parts sand to five parts cement, a job one worker finishes in six hours — and asks you to scale it, split it, convert it, or combine it.",
  },
  {
    type: 'text',
    content: "The arithmetic is rarely the hard part. The **setup** carries nearly all of it — name the units first, and the remaining steps follow directly.",
  },

  { type: 'heading', content: 'A proportion is two equal ratios' },
  {
    type: 'text',
    content: 'When two ratios describe the *same* fixed relationship — a map scale, a unit price, a constant rate — set them equal and cross-multiply.',
  },
  {
    type: 'text',
    content: "One rule prevents the standard setup error: **align the units.** Miles over miles on both sides, inches over inches on both sides. With the roles matched, the proportion can't be written backward.",
  },
  {
    type: 'formula',
    label: 'Set equal, cross-multiply',
    content: '$\\dfrac{a}{b} = \\dfrac{c}{d} \\;\\Rightarrow\\; a\\,d = b\\,c$',
    note: 'Keep the same quantity on top of both fractions (miles over miles). Where you can, place the unknown in a numerator — a single multiplication then isolates it, leaving no second step to slip on.',
  },
  {
    type: 'keyInsight',
    content: 'A proportion set up with the roles swapped produces the reciprocal of the correct answer — built from all the right numbers, so it survives a casual glance. Confirm that both numerators name the same kind of quantity before solving.',
  },

  { type: 'heading', content: 'Part-to-part ratios and the whole' },
  {
    type: 'text',
    content: 'A ratio like $2:3$ compares two parts to each other — not a part to the whole. Before you can compute any share, **build the whole**: $2 + 3 = 5$ parts.',
  },
  {
    type: 'text',
    content: "The shares are then $\\frac{2}{5}$ and $\\frac{3}{5}$ — never $\\frac{2}{3}$. Name the denominator explicitly (\"out of the whole class\") before writing a numerator; that single check blocks the part-for-whole error.",
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
    content: 'A share above $1$ is impossible — it signals the whole was never built. Check for an unstated third category before concluding that the whole is $a+b$.',
  },

  { type: 'heading', content: 'Three-term ratios and shares of a remainder' },
  {
    type: 'text',
    content: 'A three-term ratio like $2:3:5$ works exactly like a two-term one. The whole is $2 + 3 + 5 = 10$ parts, and each share is its own term over that sum — $\\frac{2}{10}$, $\\frac{3}{10}$, $\\frac{5}{10}$.',
  },
  {
    type: 'text',
    content: 'Any pair inside it can also be read on its own: the second and third quantities stand in the ratio $3:5$.',
  },
  {
    type: 'text',
    content: "A related construction hands out fractions in sequence: a student spends $\\frac{1}{3}$ of $\\$120$, then $\\frac{1}{4}$ *of the remainder*. Each new fraction acts on whatever's left, not on the original amount.",
  },
  {
    type: 'text',
    content: "Follow it through: $\\frac{1}{3}$ of $120$ is $40$, leaving $80$; then $\\frac{1}{4}$ of $80$ is $20$, leaving $60$. Applying both fractions to the original $120$ misreads the base — the phrase \"of the remainder\" resets it at every step.",
  },

  { type: 'heading', content: 'Unit conversion: multiply by fractions equal to 1' },
  {
    type: 'text',
    content: 'A conversion factor like $\\frac{1\\text{ hr}}{60\\text{ min}}$ equals $1$, so multiplying by it changes the units without changing the quantity.',
  },
  {
    type: 'text',
    content: "There's no orientation to memorize. Write each factor **with the unit you want to eliminate on the bottom**, so it cancels, and chain as many factors as the conversion requires. When only the target unit survives, the arithmetic is correct by construction.",
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
    content: 'When two pipes or two workers operate *together*, the quantity that adds is the **rate**, not the time.',
  },
  {
    type: 'text',
    content: "The reason: both work over the same interval, so adding the times counts that interval twice — and it implies the job takes *longer* with help, which can't be true.",
  },
  {
    type: 'steps',
    title: 'Combining two solo times',
    items: [
      '**Convert each time to a rate.** A job finished solo in $t$ hours means $\\frac{1}{t}$ of the job per hour.',
      '**Add the rates.** In one hour, each worker completes a fraction of the job, and those fractions accumulate cleanly.',
      '**Flip back to a time.** The sum is a rate; one final reciprocal returns the combined time.',
    ],
  },
  {
    type: 'formula',
    label: 'Add the rates, flip back to time',
    content: '$\\dfrac{1}{t_1} + \\dfrac{1}{t_2} = \\dfrac{1}{t}$',
    note: 'A useful bound: a helper can only shorten the job, so the combined time must be less than the faster solo time — a check that alone eliminates the "average the times" and "add the times" answer choices.',
  },

  { type: 'heading', content: 'Average speed over a whole trip' },
  {
    type: 'text',
    content: 'Average speed is defined by one fraction — $\\text{average speed} = \\dfrac{\\text{total distance}}{\\text{total time}}$ — and by nothing else.',
  },
  {
    type: 'text',
    content: 'When a trip has legs at different speeds, averaging the speeds themselves fails whenever the legs take different amounts of time, because the slower leg occupies a larger share of the trip.',
  },
  {
    type: 'text',
    content: "So compute each leg's time, add the distances, add the times, and divide once at the end. The mean of the two speeds is routinely offered among the answer choices; it's correct only in the special case of equal *times*, not equal distances.",
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A driver travels $60$ miles to a city at $30$ miles per hour and returns along the same $60$-mile route at $60$ miles per hour. What is the average speed for the round trip?',
    steps: [
      { label: "Find each leg's time", content: 'Going: $60 \\div 30 = 2$ hours. Returning: $60 \\div 60 = 1$ hour.' },
      { label: 'Divide total distance by total time', content: 'Total distance $= 120$ miles; total time $= 3$ hours. Average speed $= 120 \\div 3 = 40$ miles per hour.' },
      { label: 'Rule out the mean of the speeds', content: 'Averaging $30$ and $60$ gives $45$, which overweights the faster leg: the trip spends two hours at $30$ mph and only one at $60$ mph. On any equal-distance round trip, the true average lands *below* the midpoint of the two speeds.' },
    ],
  },

  { type: 'heading', content: 'Direct and inverse variation' },
  {
    type: 'list',
    title: 'Classify the relationship from the wording',
    items: [
      '"$y$ varies **directly** with $x$" means $y = kx$ for some constant $k$: doubling $x$ doubles $y$, and the graph is a line through the origin.',
      '"$y$ varies **inversely** with $x$" means $y = \\dfrac{k}{x}$: doubling $x$ halves $y$, and the *product* $xy$ stays fixed at $k$.',
    ],
  },
  {
    type: 'text',
    content: 'Either way the procedure is the same — substitute the given pair of values to find $k$ first, then answer from the completed equation.',
  },
  {
    type: 'text',
    content: 'The trap runs in both directions: setting up a proportion for an inverse relationship, or holding $xy$ constant for a direct one, produces a clean-looking wrong number. Classify the relationship before any arithmetic.',
  },

  { type: 'heading', content: 'Size check: smaller unit, bigger number' },
  {
    type: 'text',
    content: 'A brief audit catches an inverted conversion: a **smaller** unit produces a **larger** number, and a larger unit a smaller one, because a smaller unit divides the same quantity into more pieces.',
  },
  {
    type: 'text',
    content: 'If $2.5$ hours converts to $0.04$ minutes, the factor was inverted — no further review required. Decide the expected direction *before* computing, so the check can genuinely veto a wrong answer rather than confirm whatever appeared.',
  },

  {
    type: 'steps',
    title: 'How to approach these questions',
    items: [
      '**Name the units.** Write down what each number measures before touching any of them.',
      '**Identify the structure.** The same fixed relationship stated twice is a proportion; a part-to-part ratio needs its whole built; a unit change is a chain of factors; working together adds rates.',
      '**Set up with the roles aligned.** Same quantity on top of both fractions, the unit to eliminate on the bottom of each factor, the unknown in a numerator where possible.',
      '**Solve, then size-check.** Decide the expected direction first — more people means more cups, a smaller unit means a bigger number, a helper shortens the job.',
    ],
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'A recipe that serves $4$ people uses $6$ cups of flour. At the same ratio, how many cups serve $10$ people?',
    steps: [
      { label: 'Align the units', content: 'Cups over people on both sides, unknown on top: $\\frac{x\\text{ cups}}{10\\text{ people}} = \\frac{6\\text{ cups}}{4\\text{ people}}$.' },
      { label: 'Solve with one multiplication', content: 'Multiply both sides by $10$: $x = 10 \\cdot \\frac{6}{4} = 15$ cups.' },
      { label: 'Check the size', content: 'Ten people is more than the four the recipe serves, so the answer has to exceed $6$ cups. **$15$ cups** fits.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A class of $30$ has boys to girls in the ratio $2:3$. How many girls are in the class?',
    steps: [
      { label: 'Build the whole', content: 'The ratio is part-to-part, so build the whole first: $2 + 3 = 5$ parts.' },
      { label: 'Take the share', content: 'Girls are $\\frac{3}{5}$ of the class: $\\frac{3}{5} \\cdot 30 = 18$ girls.' },
      { label: 'Rule out the misread', content: 'Reading $\\frac{3}{2}$ as the share gives $45$ girls — more than the whole class, which is impossible. Building the whole first blocks that misreading.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A car travels at $90$ kilometers per hour. How many meters does it travel per minute? ($1\\text{ km} = 1000\\text{ m}$, $1\\text{ hr} = 60\\text{ min}$.)',
    steps: [
      { label: 'Chain factors to cancel', content: 'Start from the given rate and multiply by factors equal to $1$: $\\dfrac{90\\ \\text{km}}{1\\ \\text{hr}} \\times \\dfrac{1000\\ \\text{m}}{1\\ \\text{km}} \\times \\dfrac{1\\ \\text{hr}}{60\\ \\text{min}}$.' },
      { label: 'Cancel and compute', content: 'Kilometers and hours cancel, leaving meters per minute: $\\dfrac{90 \\times 1000}{60} = 1500\\ \\text{m/min}$.' },
      { label: 'Check the size', content: 'Meters and minutes are both smaller units than kilometers and hours, so expect a large number — $1500$ fits. An inverted factor would have produced a very small result.' },
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
    answer: "**About $\\$3.52$.** Route grams → pounds → dollars: $200\\ \\text{g} \\times \\frac{1\\ \\text{lb}}{454\\ \\text{g}} \\times \\frac{\\$8}{1\\ \\text{lb}} \\approx \\$3.52$. Grams sits on the bottom of the first factor so grams cancels first; pounds sits on the bottom of the second so pounds cancels next. Each factor is oriented by the unit it eliminates, not from memory.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A printer produces $8$ pages every $20$ seconds. At that rate, how long does it take to print $30$ pages?',
    answer: '**$75$ seconds.** Align the units — seconds over pages on both sides: $\\frac{t}{30} = \\frac{20}{8}$, so $t = 30 \\times \\frac{20}{8} = 75$ seconds. (Alternatively, find the unit rate first: $20 \\div 8 = 2.5$ seconds per page, then $2.5 \\times 30 = 75$.)',
  },

  {
    type: 'text',
    content: '**The whole topic in one habit:** name the units first. Set proportions with the roles aligned, build the whole before reading a share, orient each conversion factor to cancel a unit, add rates rather than times — then finish with a size check on the result.',
  },
];
