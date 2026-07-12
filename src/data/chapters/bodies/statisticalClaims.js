/**
 * Learn lesson body — Studies, Samples & Statistical Claims (Math · PSDA).
 *
 * NEW lean "review / cheat-sheet" style: one SAT skill, plain language, one idea
 * per short section, then a few worked "what can they conclude?" examples and a
 * couple of check-yourself questions. Gated by bodies.test.js (lean contract).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via the
 * chapter-bodies index — never static-import this from the chapter index.
 */

export const statisticalClaimsBlocks = [
  {
    type: 'text',
    content: 'These questions hand you a short study — who was measured, how they were chosen, what was found — and four possible conclusions. There is usually no math. The whole skill is one question: **what is this study actually allowed to claim?** Two design choices decide it.',
  },

  { type: 'heading', content: 'The two dials' },
  {
    type: 'text',
    content: 'Every study has two independent switches, and each one unlocks a different kind of claim. **Random sampling** (how people got *into* the study) lets you generalize to the whole population. **Random assignment** (how people got *sorted into groups*) lets you claim cause. Check them separately, in that order, before you read a single answer choice.',
  },

  { type: 'heading', content: 'Dial 1 — random sampling lets you generalize' },
  {
    type: 'text',
    content: 'If the sample was drawn *at random* from a population, the results speak for that population — **exactly** that population, no wider and no narrower. The group actually drawn from is the **frame**. A random sample of one school\'s juniors tells you about that school\'s juniors: not all teenagers, not the whole school, not the seniors. If selection was not random (volunteers, whoever replied to an email, whoever walked by), you can only describe the people who showed up.',
  },

  { type: 'heading', content: 'Dial 2 — random assignment lets you claim cause' },
  {
    type: 'text',
    content: 'When a study compares groups, only *randomly assigning* who gets which treatment lets you say one thing **caused** another. Random assignment spreads every hidden trait evenly across the groups, so the treatment is the only real difference left. If people picked their own group (chose to garden, chose to join chess), some hidden trait travels with that choice — a **confounding variable** — and the most you can claim is an **association**: the two things move together, cause unknown.',
  },
  {
    type: 'keyInsight',
    content: 'Match the verb to the design. No random assignment means no causal verb — *causes, improves, reduces* are illegal, and the strongest legal claim is *is associated with*. An observational study (people chose their own behavior) can never support cause, no matter how big or how random the sample.',
  },

  { type: 'heading', content: 'A biased sample supports nothing' },
  {
    type: 'text',
    content: 'A self-selected or convenience sample cannot be scaled up to any population, and **size does not fix it**. Ten thousand people who chose to answer an online poll is still ten thousand people who chose to answer — a giant pile of biased data. A small *random* sample beats a huge *biased* one every time. On flaw questions, the answer is almost always the non-random selection, not "the sample was too small."',
  },

  { type: 'heading', content: 'Estimating a population count' },
  {
    type: 'text',
    content: 'When a sample *is* random, you can project a count onto the whole population: find the fraction of the sample with the trait, then multiply by the population size $N$. If 30% of a random sample studies late and the school has 1,200 students, the estimate is $0.30 \\times 1200 = 360$. A **margin of error** turns that single estimate into a plausible range (estimate minus margin to estimate plus margin) — and a larger random sample makes that range tighter.',
  },
  {
    type: 'tip',
    content: 'The margin-of-error band is about the *population value*, not individuals and not the sample. And "outside the band" means unlikely, never impossible — reject any option that says "cannot" or "exactly."',
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'A researcher selects 200 students at random from the full roster of juniors at Brookfield High and finds 62% carry a reusable water bottle. The results can be generalized to which group?\n\n(A) All high school students in the state\n(B) All students at Brookfield High\n(C) All juniors at Brookfield High\n(D) Only the 200 students selected',
    steps: [
      { label: 'Pin the frame', content: 'The sample was drawn from one pool: the *juniors at Brookfield High*. That pool is the frame.' },
      { label: 'Check dial 1', content: 'Selection was random, so the results reach the whole frame — not just the 200 sampled, so (D) is too narrow.' },
      { label: 'Reject the stretches', content: '(A) and (B) include people never in the pool — other schools, other grades. Answer: **(C)**, exactly the frame.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A random sample of 500 households in Rivertown finds that 24% own an electric vehicle. Rivertown has 15,000 households. About how many households in the town are estimated to own an electric vehicle?\n\n(A) 120\n(B) 1,200\n(C) 3,600\n(D) 24,000',
    steps: [
      { label: 'Confirm scaling is legal', content: 'The sample is random and drawn from the town, so its proportion may stand in for the whole town.' },
      { label: 'Scale the proportion up', content: 'Multiply the sample fraction by the population size: $0.24 \\times 15000 = 3600$.' },
      { label: 'Answer', content: '**(C) 3,600**. Watch the base — 24% of the 500 sampled (120) is choice (A), a decoy for scaling to the wrong number.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Researchers randomly selected 500 adults from a city\'s voter roll and asked about gardening and stress. Adults who gardened weekly reported lower stress. Which conclusion is most appropriate?\n\n(A) Gardening reduces stress for adults in the city.\n(B) Gardening reduces stress for adults everywhere.\n(C) Among adults in the city, weekly gardening is associated with lower reported stress.\n(D) Any adult in the city who starts gardening will report lower stress.',
    steps: [
      { label: 'Run both dials', content: 'Dial 1: selection was random from the city\'s adults, so a claim about that group is allowed. Dial 2: nobody assigned gardening — people chose it — so this is observational and no causal verb is legal.' },
      { label: 'Kill the causal verbs', content: '(A) and (B) say "reduces," a cause claim with dial 2 off — both dead on wording. Calm or free-time-rich adults may both garden more and feel less stress.' },
      { label: 'Check scope and quantifier', content: '(B) also leaves the frame ("everywhere"); (D) turns a group tendency into a per-person guarantee. Answer: **(C)** — associative, frame-bounded, no arrow of cause.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'A streaming service emails a survey to all subscribers; 8,400 reply and report watching 3.1 hours a day. Can the service conclude its subscribers average about 3.1 hours?',
    answer: 'No. Dial 1 is off — the 8,400 selected themselves by replying, and heavy viewers are likelier to answer a viewing survey. The figure describes the *respondents only*; 8,400 is a big number, but size is precision, randomness is validity.',
  },
  {
    type: 'checkpointQuestion',
    question: 'Sixty volunteers are randomly assigned to two groups; one uses a new stretching routine and later shows greater flexibility gains. Can you say the routine *causes* the gains, and for whom?',
    answer: 'Yes, a causal claim is legal — random assignment (dial 2 on) spread hidden traits evenly, so the routine earns the credit. But dial 1 is off (volunteers, not a random draw from any population), so the cause holds only **for people like the sixty volunteers**, not the general public.',
  },

  {
    type: 'text',
    content: '**The move, every time:** pin who was sampled, check dial 1 (random sample means generalize to the frame), check dial 2 (random assignment means you can say cause), and pick the most modest conclusion the design actually pays for.',
  },
];
