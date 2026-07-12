/**
 * Learn chapter body — Ratios, Rates & Proportions (Problem-Solving & Data Analysis).
 *
 * Teach-from-zero textbook chapter following the locked template
 * (docs/LEARN_TEXTBOOK_OVERHAUL_PLAN.md): roadmap → Stage 1 foundations →
 * Stage 2 numbered techniques (method → right → wrong → why) → Stage 3
 * on-the-test (decision flow, traps, worked examples, checkpoints,
 * one-page summary). Voice reference: bodies/boundaries.js and
 * bodies/inequalities.js. Replaces a thin unit-conversion-only module.
 * Concept source: knowledge/graph/math (proportion-setup-template,
 * ratio-part-whole-discipline, rates-add-times-dont, unit-cancellation-chain,
 * unit-magnitude-sanity-check).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const ratiosProportionsBlocks = [
  {
    type: 'text',
    content: 'A ratio-and-rate item hands you a relationship — three miles per gallon, two parts sand to five parts cement, a job one worker finishes in six hours — and asks you to scale it, split it, combine it, or convert it. These sit across the easy-to-medium band of both math modules, and students who feel shaky on them are almost never bad at the arithmetic; they are guessing at the **setup**. The whole topic runs on a small set of decisions made *before* any number is touched: which two quantities correspond, whether a ratio is a part or the whole, whether the thing that adds is a rate or a time, and which way up each conversion factor goes. Make those decisions on purpose and every answer becomes provable — and a two-second size check catches the rest.',
  },
  {
    type: 'steps',
    title: 'How this chapter is built',
    items: [
      '**Stage 1 · Foundations.** The three words the topic is built from — *ratio*, *rate*, *proportion* — and the one habit that decides most items: name the units before you compute.',
      '**Stage 2 · The techniques.** Five numbered techniques, each in the same shape: the move, a right example, a wrong example, and the why.',
      '**Stage 3 · On the test.** A decision flow that routes each item to its technique, the traps the test sets, worked examples, and a one-page summary.',
    ],
  },

  // ── Stage 1 · Foundations ──────────────────────────────────────────────
  { type: 'heading', content: 'Stage 1 · Ratio, rate, proportion' },
  {
    type: 'text',
    content: 'A **ratio** compares two quantities by division: $3$ cups of flour to $2$ cups of sugar is written $3 : 2$ or $\\frac{3}{2}$. A **rate** is a ratio comparing quantities measured in *different* units — miles per hour, dollars per pound, pages per minute — and the word *per* is its signature. A **unit rate** collapses a rate to a per-*one* value: $\\$6$ for $3$ pounds is a unit rate of $\\$2$ per pound. A **proportion** is simply the statement that two ratios are equal, $\\frac{a}{b} = \\frac{c}{d}$, and it is the single most useful equation in the entire topic.',
  },
  {
    type: 'formula',
    label: 'A rate is a "per" statement',
    content: '$\\text{rate} = \\dfrac{\\text{quantity of one kind}}{\\text{quantity of another kind}}$',
    note: 'Carry the units with the number. "$45$ miles per hour" is $\\frac{45\\text{ mi}}{1\\text{ hr}}$ — a fraction of two units, not a bare number. Storing the units is what makes every later technique self-checking.',
  },
  {
    type: 'text',
    content: 'The one habit worth installing before anything else: **name the units out loud and keep them attached to the numbers.** A rate held as a bare "$45$" forgets whether it is miles per hour or hours per mile, and that forgetting is the source of most upside-down setups. A ratio held as a bare "$3$ to $2$" forgets whether the whole is $5$ or something larger. Nearly every trap in this chapter is a units question in disguise — so read the units first, and the setup writes itself.',
  },
  {
    type: 'strategyCard',
    title: 'Name the denominator first',
    content: 'Before hunting for the number on top, ask the question tail one question: *out of what?* The noun in "what fraction of ___" or "how many ___ per ___" names the denominator — the reference group or the per-unit. Fix the bottom of the fraction first, then find the top. Half of ratio errors come from grabbing two visible numbers and slotting them in without ever deciding what the whole actually is.',
  },
  {
    type: 'checkpointQuestion',
    number: 1,
    question: 'A trail mix is $2$ parts raisins to $3$ parts nuts. What fraction of the mix is raisins — and why is it not $\\frac{2}{3}$?',
    answer: 'Raisins are $\\frac{2}{5}$ of the mix. **Why:** $2 : 3$ is a *part-to-part* comparison, so the whole is offstage and must be built — $2 + 3 = 5$ parts total. The share of raisins is $\\frac{\\text{raisins}}{\\text{whole}} = \\frac{2}{5}$. The figure $\\frac{2}{3}$ is raisins-to-nuts, a different question. Deciding "out of what" before writing the fraction is the entire move.',
  },

  // ── Stage 2 · The techniques ───────────────────────────────────────────
  { type: 'heading', content: 'Stage 2 · The techniques' },
  {
    type: 'text',
    content: 'Five techniques cover every ratio, rate, and proportion item. Each follows the same shape: the **move**, a **right** example, a **wrong** example, and the **why**.',
  },

  { type: 'heading', content: 'Technique 1 — Set up the proportion: unknown on top, correspondence locked' },
  {
    type: 'text',
    content: 'When two ratios describe the *same fixed relationship* — a map scale, a unit price, a constant rate — set them equal and solve for the missing piece. The entire skill is setup, and two rules make the solve trivial. **Put the unknown in the top-left slot.** **Mirror the correspondence exactly:** whatever role sits on top of the left ratio must sit on top of the right (miles over miles, model over model, new over new). With the unknown on top-left, one multiplication isolates it — no cross-multiply, no two-step algebra where slips hide.',
  },
  {
    type: 'formula',
    label: 'One move, unknown isolated',
    content: '$\\dfrac{x}{d} = \\dfrac{c}{b} \\;\\Rightarrow\\; x = d \\cdot \\dfrac{c}{b}$',
    note: 'The whole right side is one chain — type it in one pass and never round a middle step. Mixed units across a scale (inches per mile) are fine, as long as each side keeps the same role on top.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — roles aligned on both sides', content: 'A map uses $2$ inches for every $15$ miles; how many miles is $5$ inches? Keep *miles on top, inches on bottom* on both sides: $\\frac{x \\text{ mi}}{5 \\text{ in}} = \\frac{15 \\text{ mi}}{2 \\text{ in}}$, so $x = 5 \\cdot \\frac{15}{2} = 37.5$ miles.', variant: 'right' },
      { label: 'Wrong — correspondence swapped', content: '$\\frac{x}{5} = \\frac{2}{15}$ puts inches over miles on the right while miles sits over inches on the left. The roles no longer match, and the answer comes out the reciprocal, $\\approx 0.67$ — a value that uses all the right numbers and passes a lazy glance.', variant: 'wrong' },
    ],
  },
  {
    type: 'text',
    content: 'Two extensions cover the harder disguises. First, **$y = kx$ is a proportion in function clothing**: one given $(x, y)$ pair pins the constant $k = \\frac{y}{x}$, and then the equation answers any second scenario — same skill, new costume. Second, watch for **inverse** relationships, where more of one means *less* of the other (more workers, fewer hours; more gears, slower spin). The direct template scales both the same direction and lands on the planted distractor. Before writing anything, ask: *as this goes up, does that go up or down?* If down, it is inverse — hold the product constant ($x_1 y_1 = x_2 y_2$) instead of the ratio.',
  },
  {
    type: 'checkpointQuestion',
    number: 2,
    question: 'You set up a scale problem as $\\frac{3}{x} = \\frac{12}{20}$, with the unknown on the bottom. Is anything wrong, and what is the low-risk fix?',
    answer: 'Nothing is mathematically *wrong*, but the unknown sitting in a denominator forces the fragile two-step solve (cross-multiply, then divide) where a factor gets dropped. The fix is structural, not algebraic: flip *both* sides to $\\frac{x}{3} = \\frac{20}{12}$, and now one multiplication gives $x = 3 \\cdot \\frac{20}{12} = 5$. **Why:** a valid proportion survives flipping both sides, so pay two seconds up front to move the unknown on top and the solve collapses to a single clean move.',
  },

  { type: 'heading', content: 'Technique 2 — Part-to-part vs part-to-whole: build the whole' },
  {
    type: 'text',
    content: 'A ratio $a : b$ can be read two incompatible ways, and the item is built to catch the wrong read. As **part-to-part**, it compares two components ($a$ reds for every $b$ blues). As **part-to-whole**, it names one component\'s share of everything. When the two parts exhaust the group, the whole is $a + b$, so the share fractions are $\\frac{a}{a+b}$ and $\\frac{b}{a+b}$ — *never* $\\frac{a}{b}$. The standard four-choice trap lays out $\\frac{a}{b}$, $\\frac{b}{a}$, $\\frac{a}{a+b}$, $\\frac{b}{a+b}$ so every misread has a seat waiting.',
  },
  {
    type: 'formulaGrid',
    items: [
      { label: 'The two parts (part-to-part)', formula: '$a : b$', note: 'A side-by-side comparison. The whole is not written down — you must build it.' },
      { label: 'Build the whole', formula: '$\\text{whole} = a + b$', note: 'Only when the two parts exhaust the group. Check for a hidden third category before summing.' },
      { label: "One part's share (part-to-whole)", formula: '$\\dfrac{a}{a+b} \\quad\\text{and}\\quad \\dfrac{b}{a+b}$', note: 'Multiply a share by the real total to get an actual count.' },
    ],
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — build the whole, then the count', content: 'A class of $30$ has boys to girls $2 : 3$. How many girls? The whole is $2 + 3 = 5$ parts, girls are $\\frac{3}{5}$ of it, so $\\frac{3}{5} \\cdot 30 = 18$ girls. Denominator ($5$ parts) fixed first, numerator second.', variant: 'right' },
      { label: 'Wrong — treat the ratio as the fraction', content: 'Reading "girls are $\\frac{3}{2}$ of the class" because the colon looks like a fraction gives $\\frac{3}{2} \\cdot 30 = 45$ girls — more girls than students. A share above $1$ is impossible; the setup never built the whole.', variant: 'wrong' },
    ],
  },
  {
    type: 'text',
    content: 'Two refinements finish the technique. First, a **restricted reference group**: "of the students who chose art…" resets the denominator to that subgroup, not the grand total — read the selection clause and circle the group it names before touching a number. Second, the **fraction-of-the-remainder cascade**, where a story hands out shares in sequence ($\\frac{1}{6}$ of a fund to A, then $\\frac{1}{4}$ of *the rest* to B). No equation is needed: track the fraction of the *original* whole still remaining. After the first gift $\\frac{5}{6}$ remains; giving $\\frac{1}{4}$ of that leaves $\\frac{3}{4} \\cdot \\frac{5}{6} = \\frac{5}{8}$ of the original. Re-express back to original-whole terms at every step, and multiply by the real total only once, at the very end.',
  },

  { type: 'heading', content: 'Technique 3 — The unit-cancellation chain: units as checkable algebra' },
  {
    type: 'text',
    content: 'Units behave like algebra: identical units on top and bottom cancel, and repeated units exponentiate. So any conversion — one hop or five — is the starting quantity times a chain of fractions, each equal to $1$ in disguise (a known equivalence written *new-unit-over-old-unit*), oriented so each factor kills exactly one unwanted unit. When only the target unit survives, the arithmetic is correct by construction. **Plan the unit route before touching a number:** read the question tail for the target unit, write the itinerary of units from start to finish, and give each leg one conversion factor.',
  },
  {
    type: 'formula',
    label: 'Each factor equals 1; orient it to cancel',
    content: '$120\\ \\cancel{\\text{min}} \\times \\dfrac{1\\ \\text{hr}}{60\\ \\cancel{\\text{min}}} = 2\\ \\text{hr}$',
    note: 'The factor $\\frac{1\\text{ hr}}{60\\text{ min}}$ equals $1$, so it changes the units without changing the amount. Orientation is never memorized — write each factor whichever way up cancels the unit you are trying to kill.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — orient each factor to cancel', content: 'Convert $90$ km to miles given $1$ mi $= 1.6$ km. To kill km, put km on the bottom: $90\\ \\text{km} \\times \\frac{1\\ \\text{mi}}{1.6\\ \\text{km}} = 56.25$ mi. The km units cancel diagonally; only miles survive.', variant: 'right' },
      { label: 'Wrong — guess the operation', content: '$90 \\times 1.6 = 144$. With the factor upside down ($\\frac{1.6\\ \\text{km}}{1\\ \\text{mi}}$), the units read km²/mi — nonsense that never gets checked. The right and wrong answers sit a factor of $1.6^2$ apart, and both appear in the choices.', variant: 'wrong' },
    ],
  },
  {
    type: 'text',
    content: 'Three high-value facts ride on the same machine. A **compound unit is its own formula** — density in $\\text{g}/\\text{cm}^3$ literally says grams divided by cubic centimeters, so a $54$ g object of volume $20\\ \\text{cm}^3$ has density $\\frac{54}{20} = 2.7\\ \\text{g}/\\text{cm}^3$ with nothing memorized. For **squared or cubed units**, apply the linear factor once per dimension: converting m² to cm² squares the factor ($\\times 100^2 = \\times 10{,}000$), not $\\times 100$. And **not every given is used** — a number that is not a leg on your route is a decoy, so route first, then pick the facts you need. One more discipline: evaluate the whole chain in a single pass and never round a middle step, since chained rounding drifts onto the near-miss distractor.',
  },
  {
    type: 'checkpointQuestion',
    number: 3,
    question: 'A rate is given as "$8$ dollars per pound." You need the cost of $200$ grams, with $1$ pound $= 454$ grams. Sketch the unit route — which way does each factor go?',
    answer: 'Route: grams → pounds → dollars. Write $200\\ \\text{g} \\times \\frac{1\\ \\text{lb}}{454\\ \\text{g}} \\times \\frac{8\\ \\text{dollars}}{1\\ \\text{lb}} \\approx \\$3.52$. **Why:** to kill grams, pounds sits on the bottom of the first factor; to kill pounds, it sits on the bottom of the second. Each factor is oriented by *what unit must die*, never memorized. The units cancel diagonally down to dollars, which confirms the arithmetic before you even read the number.',
  },

  { type: 'heading', content: 'Technique 4 — Combined rates: rates add, times never do' },
  {
    type: 'text',
    content: 'When two workers, machines, or pipes run *together*, the quantity that adds is the **rate**, not the time. Convert each solo time to a rate first — $\\text{rate} = \\frac{1}{\\text{solo time}}$, in jobs per unit time — then add the rates. The combined time is the reciprocal of the combined rate. The stem only ever mentions *times*, so the whole test is whether you convert to the quantity that actually combines before combining anything.',
  },
  {
    type: 'formula',
    label: 'Add the rates, then flip back to time',
    content: '$\\dfrac{1}{a} + \\dfrac{1}{b} = \\dfrac{1}{t}$',
    note: 'Read as a sentence: "in $t$ hours the two rates together finish one whole job." The final reciprocal is part of the model — the sum is a *rate*, the question asks a *time*, so one flip converts back.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — convert to per-hour, then add', content: 'One pump fills a tank in $6$ h, another in $3$ h. Per hour they do $\\frac{1}{6} + \\frac{1}{3} = \\frac{1}{2}$ of the tank, so together the tank fills in $2$ hours. Sane check: $2$ h beats the faster pump\'s $3$ h — a helper can only speed things up.', variant: 'right' },
      { label: 'Wrong — average or add the times', content: 'Averaging the times gives $\\frac{6 + 3}{2} = 4.5$ h; adding them gives $9$ h. Both are *slower* than the $3$-hour pump working alone, which is impossible with a second pump helping. Both wrong values are planted in the choices.', variant: 'wrong' },
    ],
  },
  {
    type: 'text',
    content: 'The structural bound does heavy lifting: **the combined time must beat the faster solo time**, because a second worker can only help. That single check kills the averaged-times and summed-times distractors before any computation. When the solo times are hostile ($7$ and $11$, or rates given as decimals), the setup is still yours but the arithmetic is not worth grinding — evaluate $\\frac{1}{\\,1/7 + 1/11\\,}$ in one pass. Partial-participation stems (one worker starts late or leaves early) break the timeline into intervals of constant crew: accumulate work per interval and require the total to reach one whole job.',
  },
  {
    type: 'checkpointQuestion',
    number: 4,
    question: 'Two crews finish a job in $4$ hours and $6$ hours alone. Before any arithmetic, what is the tightest thing you can say about their combined time, and which two answer choices does it eliminate?',
    answer: 'The combined time must be **less than $4$ hours** — the faster solo time — because a second crew can only speed the job up. That instantly eliminates any choice of $5$ h (the average) or $10$ h (the sum), both of which exceed a solo time. **Why:** the additive quantity is the rate, not the time; times that meet or exceed the faster worker violate the helper bound. (The true answer is $\\frac{1}{\\,1/4 + 1/6\\,} = 2.4$ hours.)',
  },

  { type: 'heading', content: 'Technique 5 — The magnitude sanity check' },
  {
    type: 'text',
    content: 'After — or better, *before* — any conversion or rate computation, run a two-second audit: measured in a **smaller** unit, the number must get **bigger**; in a bigger unit, smaller. *Smaller ruler, more pieces.* If $3$ hours came out as $0.05$ minutes, no algebra review is needed — the setup is inverted. This is the only defense that catches the flipped-conversion-factor error, because an upside-down proportion still "checks out" symbolically. Commit to a direction *and* a rough factor first ("minutes should be about $60\\times$ the hours"), then compute and compare.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — direction committed first', content: 'Converting $2.5$ hours to minutes: minutes are smaller units, so the count must *grow*, by about $\\times 60$. Result $2.5 \\times 60 = 150$ min — bigger, right ballpark. The pre-committed expectation confirms it.', variant: 'right' },
      { label: 'Wrong — accept whatever pops out', content: 'Dividing by $60$ gives $2.5 \\div 60 \\approx 0.042$ "minutes." With no magnitude expectation, this reciprocal error sails through — yet fewer minutes than hours is impossible. The wrong value sits $60^2$ away from the right one, squarely on a listed choice.', variant: 'wrong' },
    ],
  },
  {
    type: 'text',
    content: 'The check has two levels, and both earn their keep. **Direction** catches the upside-down factor (bigger vs smaller). **Rough scale** catches the double-application — an error of $\\times 3600$ instead of $\\times 60$ passes the direction check but fails the factor check. The trick that makes it free: on multiple choice, run the check *before* computing. Conversion distractors are spread across orders of magnitude, so a committed magnitude expectation routinely eliminates two choices outright, leaving a two-way decision the arithmetic finishes.',
  },
  {
    type: 'tip',
    content: 'Write the expectation before you compute, even as shorthand — "$\\uparrow$ ~$60\\times$" in the margin. The pre-commitment is what defeats anchoring: a check run *after* you have an answer silently confirms whatever you already got, while a check committed *first* actually vetoes the inverted chain.',
  },

  // ── Stage 3 · On the test ──────────────────────────────────────────────
  { type: 'heading', content: 'Stage 3 · On the test' },
  {
    type: 'text',
    content: 'Read the four choices as a set before solving — they name what is being tested. A fraction and its reciprocal both present ($\\frac{a}{b}$ next to $\\frac{b}{a}$) means the item is hunting a correspondence swap (Technique 1) or a part-vs-whole misread (Technique 2). The average and the sum of two times both present means a combined-rate item where the additive quantity is the rate, not the time (Technique 4). Choices spread across orders of magnitude means a conversion where a magnitude check will cut the field in half (Technique 5). The choice set is the label.',
  },
  {
    type: 'steps',
    title: 'The decision flow',
    items: [
      'Read the question tail and name the target: a scaled value, one part\'s count or share, a combined time, or a converted quantity. Fix the units and the denominator group *first*.',
      'Two ratios describing one fixed relationship → set up a proportion with the unknown top-left and correspondence mirrored (Technique 1). First ask: is the relationship direct or inverse?',
      'A ratio plus a "what fraction / how many" tail → decide part-to-part vs part-to-whole, build the whole as $a+b$, watch for a restricted reference group (Technique 2).',
      'A unit change or a "per" quantity → plan the unit route and write the cancellation chain, orienting each factor to kill one unit; square the factor for area, cube it for volume (Technique 3).',
      'Two things working together → convert each solo time to a rate, add the rates, flip back to a time; the answer must beat the faster solo time (Technique 4).',
      'Before submitting: run the magnitude check (Technique 5) — commit to a direction and rough factor, and confirm your number agrees in both.',
    ],
  },
  {
    type: 'keyInsight',
    content: '**Every technique here reduces to naming the units before you compute.** Correspondence in a proportion, part-vs-whole in a ratio, rate-vs-time in combined work, factor orientation in a chain, direction in a magnitude check — each one is answered by reading what quantity sits where, in what unit. A student who attaches units to every number and asks "out of what?" and "which way up?" is immune to the reciprocal-and-average distractor family that this whole topic is built from.',
  },
  {
    type: 'trapCard',
    title: 'The averaged times',
    wrong: '**The averaged times.** A combined-work stem gives two solo times — $6$ hours and $3$ hours — and the phrase "working together" cues the add-and-halve reflex, so $4.5$ hours goes down as the answer. It sits right there in the choices looking reasonable.',
    correction: 'Times never add or average — rates do. Re-say each solo time as a per-hour rate before combining anything: $\\frac{1}{6} + \\frac{1}{3} = \\frac{1}{2}$ of the job per hour, so $2$ hours. Then run the bound: a helper can only speed things up, so the combined time must *beat the faster solo time* ($3$ h). Any candidate at or above $3$ hours — including the $4.5$-hour average — is impossible on sight.',
  },
  {
    type: 'trapCard',
    title: 'The ratio read as the share',
    wrong: '**The ratio read as the share.** A stem gives boys to girls $2 : 3$ and asks what fraction are girls; the colon looks like a fraction, so $\\frac{3}{2}$ (or $\\frac{2}{3}$) gets written straight down. The whole was never built.',
    correction: 'A part-to-part ratio hides the whole — construct it first: $2 + 3 = 5$ parts. Girls are $\\frac{3}{5}$ of the class, not $\\frac{3}{2}$ of it. Name the denominator ("out of the whole class") before the numerator, and sanity-gate the result: a share above $1$ is impossible, so $\\frac{3}{2}$ flags itself. Check too for a hidden third category that would make $a + b$ the wrong whole.',
  },
  {
    type: 'trapCard',
    title: 'The upside-down conversion factor',
    wrong: '**The upside-down conversion factor.** Converting between units, the given equivalence gets written the wrong way up — multiplying where you should divide — and the answer lands a squared factor away from correct. The substitution "checks out" symbolically, so nothing feels wrong.',
    correction: 'Orient every factor so the unwanted unit cancels, and confirm the surviving unit is the one asked — the cancellation audit *is* the correctness check. Then run the magnitude gate with a pre-committed direction: smaller unit means a bigger number. A result that moved the wrong way, or moved by the factor squared, is the inverted-factor signature, and it is the one error class that only the size check can catch.',
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'A recipe that serves $4$ people calls for $6$ cups of flour. Keeping the same ratio, how many cups of flour are needed to serve $10$ people?\n\n(A) $12$\n(B) $15$\n(C) $18$\n(D) $24$',
    steps: [
      { label: 'Set up with the unknown on top', content: 'Cups correspond to people on both sides, cups on top: $\\frac{x \\text{ cups}}{10 \\text{ people}} = \\frac{6 \\text{ cups}}{4 \\text{ people}}$ (Technique 1).' },
      { label: 'One multiplication', content: 'Multiply both sides by $10$: $x = 10 \\cdot \\frac{6}{4} = 15$ cups. No cross-multiply needed — the unknown was already isolated.' },
      { label: 'Answer', content: '**(B) $15$.** Magnitude check: more people than the recipe serves, so more flour than $6$ cups — $15$ passes.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A landscaping crew of two mowers can each mow a field alone in $5$ hours and $4$ hours respectively. Working together at their constant rates, how long will they take to mow one field?\n\n(A) $\\frac{9}{2}$ hours\n(B) $\\frac{20}{9}$ hours\n(C) $\\frac{9}{20}$ hour\n(D) $9$ hours',
    steps: [
      { label: 'Convert times to rates', content: 'Rates add, times do not (Technique 4). Per hour: $\\frac{1}{5} + \\frac{1}{4} = \\frac{4}{20} + \\frac{5}{20} = \\frac{9}{20}$ of the field per hour.' },
      { label: 'Flip back to a time', content: 'The combined *time* is the reciprocal of the combined *rate*: $t = \\frac{1}{\\,9/20\\,} = \\frac{20}{9} \\approx 2.2$ hours.' },
      { label: 'Bound-check the survivor', content: 'A helper can only speed things up, so the answer must beat the faster solo time of $4$ h — and $\\frac{20}{9} \\approx 2.2$ h does. Choice (A) is the averaged-times trap; (C) is the un-flipped rate $\\frac{9}{20}$.' },
      { label: 'Answer', content: '**(B) $\\frac{20}{9}$ hours.**' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'A machine sprays a protective coating at a rate of $0.5$ grams per square centimeter. A rectangular panel measures $0.8$ meters by $1.2$ meters. To the nearest tenth, how many kilograms of coating does one panel require? ($1$ m $= 100$ cm, $1$ kg $= 1000$ g.)',
    steps: [
      { label: 'Plan the route and find the area', content: 'Target unit: kilograms. Route: area in m² → area in cm² → grams → kilograms (Technique 3). Area $= 0.8 \\times 1.2 = 0.96\\ \\text{m}^2$.' },
      { label: 'Square the factor for area', content: 'Converting m² to cm² squares the linear factor: $\\times 100^2 = \\times 10{,}000$. So $0.96\\ \\text{m}^2 = 9{,}600\\ \\text{cm}^2$. Using $\\times 100$ instead is the planted error.' },
      { label: 'Chain to grams, then kilograms', content: '$9{,}600\\ \\text{cm}^2 \\times \\frac{0.5\\ \\text{g}}{1\\ \\text{cm}^2} = 4{,}800\\ \\text{g}$, then $\\times \\frac{1\\ \\text{kg}}{1000\\ \\text{g}} = 4.8\\ \\text{kg}$. Units cancel diagonally down to kg.' },
      { label: 'Answer', content: '**$4.8$ kg.** Magnitude check (Technique 5): a panel just under a square meter, coated at half a gram per cm², is thousands of grams — a few kilograms is the right order. Forgetting to square the factor gives $0.048$ kg, off by exactly $100$ — a size the check rejects.' },
    ],
  },
  {
    type: 'checkpointQuestion',
    number: 5,
    question: 'A stem asks you to convert a speed from kilometers per hour to meters per second, and the four choices are roughly $0.28$, $2.8$, $28$, and $280$ for an input near $10$ km/h. Before any arithmetic, how do you narrow it?',
    answer: 'Reason the two conversions in opposite directions (Technique 5). Kilometers → meters makes the number *bigger* ($\\times 1000$); hours → seconds makes it *smaller* ($\\div 3600$). The net is roughly $\\div 3.6$, so $10$ km/h should land near $2.8$ m/s — knocking out $0.28$, $28$, and $280$ as off by orders of magnitude. **Why:** conversion distractors are spread across powers of ten precisely so a committed magnitude expectation, run before computing, cuts the field to one.',
  },
  { type: 'heading', content: 'One-page summary' },
  {
    type: 'table',
    title: 'The whole chapter in one place',
    headers: ['Technique', 'Situation', 'The move'],
    rows: [
      ['T1', 'Two ratios, one fixed relationship', 'Set $\\frac{x}{d} = \\frac{c}{b}$ with the unknown top-left and correspondence mirrored (same role on top both sides); one multiplication solves it. Ask direct vs inverse first; $y = kx$ is a proportion in disguise'],
      ['T2', 'Ratio plus a "fraction / how many" tail', 'Decide part-to-part vs part-to-whole; build the whole $a + b$, so a share is $\\frac{a}{a+b}$, never $\\frac{a}{b}$. Watch for a restricted reference group and hidden third categories; a share above $1$ is impossible'],
      ['T3', 'Unit change or a "per" quantity', 'Plan the unit route, write the cancellation chain, orient each factor to kill one unit; a compound unit is its own formula; square the factor for area, cube it for volume; ignore decoy givens; never round a middle step'],
      ['T4', 'Two things working together', 'Convert each solo time to a rate ($\\frac{1}{a}$), add the rates, flip back: $\\frac{1}{a} + \\frac{1}{b} = \\frac{1}{t}$. Times never add or average; the combined time must beat the faster solo time'],
      ['T5', 'After any conversion or rate', 'Smaller unit → bigger number. Commit to a direction and rough factor before computing; a result off by the factor squared is the inverted-factor signature. On multiple choice, the check often halves the field for free'],
    ],
  },
  {
    type: 'text',
    content: 'That is the entire skill: read the units and the denominator group before you compute, set proportions with the unknown on top and correspondence locked, build the whole before reading a share, convert with a cancellation chain oriented to kill units, combine rates rather than times, and gate every answer with a two-second size check. Name the units first, and the setup — the only hard part — writes itself.',
  },
];
