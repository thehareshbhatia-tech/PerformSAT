/**
 * Learn lesson body — Studies, Samples & Statistical Claims (Math · PSDA).
 *
 * TUTOR VOICE (adopted 2026-07-14, user-approved exemplar mLinearEquations.js):
 * coaching direct-address — talks TO the student, everyday anchor first,
 * anticipates the trap answer before the student picks it, memorable decision
 * rules ("size is precision, randomness is validity"). Lean structure
 * unchanged; gated by bodies.test.js (lean contract).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via the
 * chapter-bodies index — never static-import this from the chapter index.
 */

export const statisticalClaimsBlocks = [
  {
    type: 'text',
    content: "You'll get a short study — who was measured, how they were chosen, what was found — and four possible conclusions. Notice what's missing: math. The wrong choices aren't wrong arithmetic; they're wrong because they claim *more than the study earned*. So you're only ever answering one question: **what is this study actually allowed to claim?** Two design choices decide it. Find them before you weigh a single option.",
  },

  { type: 'heading', content: 'The two dials' },
  {
    type: 'text',
    content: "Every study has two dials, and each one unlocks a different kind of claim. **Random sampling** — how people got *into* the study — unlocks generalizing to the whole population. **Random assignment** — how people got *sorted into groups* — unlocks claiming cause. The dials are independent: a study can have one on, both on, or neither, and each buys exactly one power, never the other's. Check them separately, sampling first, before you read any answer choice.",
  },

  { type: 'heading', content: 'Dial 1 — random sampling lets you generalize' },
  {
    type: 'text',
    content: "Drawn *at random* from a population? Then the results speak for that population — **exactly** that population, not one person wider or narrower. The pool actually drawn from is called the **frame**, and treat it like a fence: a random sample of one school's juniors tells you about that school's juniors. Not all teenagers. Not the whole school. Not the seniors down the hall. And if selection wasn't random — volunteers, whoever replied to an email, whoever walked by — you can describe the people who showed up, and nobody else.",
  },

  { type: 'heading', content: 'Dial 2 — random assignment lets you claim cause' },
  {
    type: 'text',
    content: "When a study compares groups, you can only say one thing **caused** another if someone *randomly assigned* who got which treatment. Random assignment scatters every hidden trait evenly across the groups, so the treatment ends up as the only real difference between them. When people picked their own group — chose to garden, chose to join chess — some hidden trait rode along with the choice. That's a **confounding variable**, and it caps your claim at an **association**: the two things move together, cause unknown.",
  },
  {
    type: 'keyInsight',
    content: "Match the verb to the design. No random assignment, no causal verb — *causes, improves, reduces* are off the table, and the strongest legal wording is *is associated with*. An observational study (people chose their own behavior) can never back a cause claim, no matter how huge or how random the sample.",
  },

  { type: 'heading', content: 'A biased sample supports nothing' },
  {
    type: 'text',
    content: "Here's the decoy these questions bait you with: \"the sample was too small.\" Size is almost never the flaw — **selection** is. Ten thousand people who chose to answer an online poll are still ten thousand self-selected people: a giant pile of biased data. Size buys precision; only randomness buys validity. A small *random* sample beats a huge *biased* one every time, and no sample size on earth repairs a broken selection.",
  },

  { type: 'heading', content: 'Estimating a population count' },
  {
    type: 'text',
    content: "When the sample *is* random, scaling up is legal: take the sample's fraction with the trait, multiply by the population size $N$. If 30% of a random sample studies late and the school has 1,200 students, the estimate is $0.30 \\times 1200 = 360$. A **margin of error** then turns that single number into a plausible band — estimate minus margin up to estimate plus margin — and a larger random sample squeezes the band tighter.",
  },
  {
    type: 'tip',
    content: "The band is about the *population value* — not any individual, and not the sample itself. And \"outside the band\" means unlikely, never impossible. Any option that says \"cannot\" or \"exactly\" has already lost.",
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'A researcher selects 200 students at random from the full roster of juniors at Brookfield High and finds 62% carry a reusable water bottle. The results can be generalized to which group?\n\n(A) All high school students in the state\n(B) All students at Brookfield High\n(C) All juniors at Brookfield High\n(D) Only the 200 students selected',
    steps: [
      { label: 'Pin the frame', content: "One pool was drawn from: the *juniors at Brookfield High*. That pool is the frame — the fence around any conclusion." },
      { label: 'Check dial 1', content: "Selection was random, so the result reaches the whole frame, not just the 200 who happened to be asked — (D) sells the study short." },
      { label: 'Reject the stretches', content: "(A) and (B) jump the fence — other schools, other grades, people never in the pool. Answer: **(C)**, exactly the frame, no wider and no narrower." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A random sample of 500 households in Rivertown finds that 24% own an electric vehicle. Rivertown has 15,000 households. About how many households in the town are estimated to own an electric vehicle?\n\n(A) 120\n(B) 1,200\n(C) 3,600\n(D) 24,000',
    steps: [
      { label: 'Confirm scaling is legal', content: "Random draw from the town itself, so the sample's proportion may stand in for the whole town." },
      { label: 'Scale the proportion up', content: 'Sample fraction times population size: $0.24 \\times 15000 = 3600$.' },
      { label: 'Answer', content: "**(C) 3,600.** Watch the base: choice (A), 120, is 24% of the *500 sampled* — the decoy built for anyone who scaled the wrong number." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A morning radio host invites listeners to call in whether the city should build a new stadium; of 4,000 callers, 72% say yes. The host concludes most residents support the stadium. What is the primary flaw in this conclusion?\n\n(A) The sample of 4,000 is too small to represent the city.\n(B) The callers chose to respond, so the sample is self-selected rather than random.\n(C) The result should have been reported with a margin of error.\n(D) The survey asked about only one proposed stadium.',
    steps: [
      { label: 'Check dial 1', content: "Nobody drew these callers — they drew themselves. Self-selected, and people with strong stadium opinions dial in at many times the rate of everyone else." },
      { label: 'Rule out "too small"', content: "4,000 is plenty big, and that's the point: size never repairs bias. A big biased sample is just a big biased sample, so (A) misdiagnoses it." },
      { label: 'Answer', content: "**(B)** — the non-random, self-selected sampling is the flaw. The 72% describes the callers, and nobody else in the city." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Researchers randomly selected 500 adults from a city\'s voter roll and asked about gardening and stress. Adults who gardened weekly reported lower stress. Which conclusion is most appropriate?\n\n(A) Gardening reduces stress for adults in the city.\n(B) Gardening reduces stress for adults everywhere.\n(C) Among adults in the city, weekly gardening is associated with lower reported stress.\n(D) Any adult in the city who starts gardening will report lower stress.',
    steps: [
      { label: 'Run both dials', content: "Dial 1 on: random draw from the city's adults, so a claim about that group is legal. Dial 2 off: nobody assigned gardening — people chose it. Observational, so no causal verb survives." },
      { label: 'Kill the causal verbs', content: "(A) and (B) both say \"reduces\" — a cause claim with dial 2 off. Dead on wording alone. Maybe calm, free-time-rich adults both garden more *and* stress less; this design can't untangle that." },
      { label: 'Check scope and quantifier', content: "(B) also jumps the frame (\"everywhere\"), and (D) turns a group tendency into a per-person guarantee. Answer: **(C)** — associative, frame-bounded, no arrow of cause." },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'A streaming service emails a survey to all subscribers; 8,400 reply and report watching 3.1 hours a day. Can the service conclude its subscribers average about 3.1 hours?',
    answer: "No. Dial 1 is off — the 8,400 picked themselves by replying, and heavy viewers answer a viewing survey at a higher rate. The 3.1 hours describes the *respondents*, full stop. Yes, 8,400 is a big number — but size is precision, and randomness is validity.",
  },
  {
    type: 'checkpointQuestion',
    question: 'Sixty volunteers are randomly assigned to two groups; one uses a new stretching routine and later shows greater flexibility gains. Can you say the routine *causes* the gains, and for whom?',
    answer: "Yes to cause — random assignment (dial 2 on) spread the hidden traits evenly, so the routine earns the credit. But watch the frame: dial 1 is off (volunteers, not a random draw from any population), so the claim holds **for people like those sixty volunteers**, not the general public.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A researcher randomly samples 300 employees at one company and finds 40% bike to work; the company has 2,400 employees. Estimate the number of bike commuters, and can that be generalized to all workers in the city?',
    answer: "Scaling is legal inside the frame: $0.40 \\times 2400 = 960$ bike commuters at that company. And that's exactly where it stops — one company's employees. The rest of the city was never in the pool, so no citywide claim survives.",
  },

  {
    type: 'text',
    content: "**The move, every time:** pin down who was actually sampled, check dial 1 (random sample means you may generalize to the frame), check dial 2 (random assignment means you may say cause), then pick the most modest conclusion the design actually pays for.",
  },
];
