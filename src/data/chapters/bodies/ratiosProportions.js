/**
 * Learn lesson body — Ratios, Rates & Proportions (Problem-Solving & Data Analysis).
 *
 * NEW lean "review / cheat-sheet" style (voice + shape exemplar:
 * bodies/gSubjectVerbAgreement.js): lede → short one-idea sections → a couple
 * of worked examples + check-yourself questions → one-line takeaway. Gated by
 * bodies.test.js (lean contract). Replaces the old dense teach-from-zero chapter.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const ratiosProportionsBlocks = [
  {
    type: 'text',
    content: 'These items hand you a relationship — miles per gallon, two parts sand to five parts cement, a job one worker finishes in six hours — and ask you to scale it, split it, convert it, or combine it. The arithmetic is easy. The whole skill is the **setup**: name the units first, and the answer writes itself.',
  },

  { type: 'heading', content: 'A proportion is two equal ratios' },
  {
    type: 'text',
    content: 'When two ratios describe the *same* fixed relationship — a map scale, a unit price, a constant rate — set them equal and cross-multiply. The one rule that keeps it clean: **line the units up.** Miles over miles on both sides, inches over inches on both sides. Match the roles and you cannot set it up backward.',
  },
  {
    type: 'formula',
    label: 'Set equal, cross-multiply',
    content: '$\\dfrac{a}{b} = \\dfrac{c}{d} \\;\\Rightarrow\\; a\\,d = b\\,c$',
    note: 'Keep the same quantity on top of both fractions (miles over miles). Whenever you can, put the unknown on top — then one multiplication isolates it and there is no second step to slip on.',
  },
  {
    type: 'keyInsight',
    content: 'If the roles get swapped across the two sides, the answer comes out the reciprocal — using all the right numbers, so it passes a lazy glance. Say both top quantities out loud; they must be the same kind of thing.',
  },

  { type: 'heading', content: 'A ratio is part-to-part — build the whole' },
  {
    type: 'text',
    content: 'A ratio like $2:3$ compares two parts, not a part to the whole. Before you can find a share, **build the whole**: $2 + 3 = 5$ parts. So the shares are $\\frac{2}{5}$ and $\\frac{3}{5}$ — never $\\frac{2}{3}$. Name the denominator ("out of the whole class") before you reach for the numerator.',
  },
  {
    type: 'table',
    headers: ['The ratio $a:b$ asks for…', 'Use', 'Trap answer'],
    rows: [
      ['this part vs that part', '$\\dfrac{a}{b}$', '—'],
      ['this part\'s share of the whole', '$\\dfrac{a}{a+b}$', '$\\dfrac{a}{b}$'],
      ['an actual count', 'share $\\times$ real total', 'ratio $\\times$ total'],
    ],
  },
  {
    type: 'tip',
    content: 'A share above $1$ is impossible — a red flag that you skipped building the whole. And check for a hidden third category before assuming the whole is just $a+b$.',
  },

  { type: 'heading', content: 'Unit conversion: multiply by fractions equal to 1' },
  {
    type: 'text',
    content: 'A conversion factor like $\\frac{1\\text{ hr}}{60\\text{ min}}$ equals $1$, so it changes the units without changing the amount. Write each factor **whichever way up cancels the unit you want to kill**, and chain as many as you need. When only the target unit survives, the arithmetic is right by construction.',
  },
  {
    type: 'formula',
    label: 'Orient each factor to cancel',
    content: '$120\\ \\cancel{\\text{min}} \\times \\dfrac{1\\ \\text{hr}}{60\\ \\cancel{\\text{min}}} = 2\\ \\text{hr}$',
    note: 'Never memorize which way up — put the unwanted unit on the bottom so it cancels diagonally. For area square the factor ($\\times 100^2$ for m² to cm²); for volume, cube it. Not every given number is used; an off-route number is a decoy.',
  },

  { type: 'heading', content: 'Working together: rates add, times don\'t' },
  {
    type: 'text',
    content: 'When two pipes or workers run *together*, the thing that adds is the **rate**, not the time. Turn each solo time into a rate ($\\frac{1}{\\text{time}}$), add the rates, then flip back to a time.',
  },
  {
    type: 'formula',
    label: 'Add the rates, flip back to time',
    content: '$\\dfrac{1}{t_1} + \\dfrac{1}{t_2} = \\dfrac{1}{t}$',
    note: 'The sum is a rate; the question asks a time, so one final flip converts back. Sanity bound: a helper can only speed things up, so the combined time must beat the faster solo time — that alone kills the "average the times" and "add the times" distractors.',
  },

  { type: 'heading', content: 'Size check: smaller unit, bigger number' },
  {
    type: 'text',
    content: 'A two-second audit that catches an upside-down conversion: a **smaller** unit gives a **bigger** number, and a bigger unit gives a smaller one. *Smaller ruler, more pieces.* If $2.5$ hours came out as $0.04$ minutes, the factor is flipped — no algebra review needed. Commit to the direction *before* you compute so the check can actually veto a wrong answer instead of rubber-stamping it.',
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'A recipe that serves $4$ people uses $6$ cups of flour. At the same ratio, how many cups serve $10$ people?',
    steps: [
      { label: 'Set up, units lined up', content: 'Cups over people on both sides, unknown on top: $\\frac{x\\text{ cups}}{10\\text{ people}} = \\frac{6\\text{ cups}}{4\\text{ people}}$.' },
      { label: 'One multiplication', content: 'Multiply both sides by $10$: $x = 10 \\cdot \\frac{6}{4} = 15$ cups.' },
      { label: 'Size check', content: 'More people than the recipe serves, so more than $6$ cups. **$15$ cups** passes.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A class of $30$ has boys to girls in the ratio $2:3$. How many girls are in the class?',
    steps: [
      { label: 'Build the whole', content: 'The ratio is part-to-part, so the whole is $2 + 3 = 5$ parts.' },
      { label: 'Take the share', content: 'Girls are $\\frac{3}{5}$ of the class: $\\frac{3}{5} \\cdot 30 = 18$ girls.' },
      { label: 'Reject the trap', content: 'Reading $\\frac{3}{2}$ as the share gives $45$ girls — more than the whole class, impossible. Building the whole first avoids it.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'One pump fills a tank in $6$ hours, another in $3$ hours. Working together, how long to fill the tank?',
    steps: [
      { label: 'Convert times to rates', content: 'Rates add, not times. Per hour: $\\frac{1}{6} + \\frac{1}{3} = \\frac{1}{6} + \\frac{2}{6} = \\frac{3}{6} = \\frac{1}{2}$ tank per hour.' },
      { label: 'Flip back to a time', content: 'The combined time is the reciprocal of the combined rate: $t = \\frac{1}{\\,1/2\\,} = 2$ hours.' },
      { label: 'Bound check', content: 'A helper can only speed things up, so the answer must beat the faster pump\'s $3$ hours — **$2$ hours** does. Averaging ($4.5$ h) or adding ($9$ h) both exceed $3$ h, so both are impossible.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'A trail mix is $2$ parts raisins to $3$ parts nuts. What fraction of the mix is raisins — and why is it not $\\frac{2}{3}$?',
    answer: 'It is $\\frac{2}{5}$. The ratio $2:3$ is part-to-part, so the whole is offstage — build it: $2 + 3 = 5$ parts. Raisins are $\\frac{\\text{raisins}}{\\text{whole}} = \\frac{2}{5}$. The figure $\\frac{2}{3}$ is raisins-to-nuts, a different question.',
  },
  {
    type: 'checkpointQuestion',
    question: 'You need the cost of $200$ grams at $\\$8$ per pound, with $1$ pound $= 454$ grams. Sketch the chain — which way does each factor go?',
    answer: 'Route grams → pounds → dollars: $200\\ \\text{g} \\times \\frac{1\\ \\text{lb}}{454\\ \\text{g}} \\times \\frac{\\$8}{1\\ \\text{lb}} \\approx \\$3.52$. Grams sits on the bottom of the first factor to cancel grams; pounds on the bottom of the second to cancel pounds. Each factor is oriented by *what unit must die*, never memorized.',
  },

  {
    type: 'text',
    content: '**The move, every time:** name the units first, set proportions with the roles lined up, build the whole before reading a share, orient each conversion factor to cancel, add rates instead of times, and gate the answer with a two-second size check. The setup is the only hard part — do it on purpose.',
  },
];
