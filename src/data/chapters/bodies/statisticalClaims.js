/**
 * Learn lesson body — Studies, Samples & Statistical Claims (Math · PSDA).
 *
 * VOICE v3 (adopted 2026-07-17, exemplar: bodies/centralIdeas.js): scannable
 * instructional register — direct address, contractions, 1-3 sentence text
 * blocks, list blocks for criteria, steps blocks for procedures; no analogies,
 * no pep-talk, no emojis. All substance of the v2 textbook version preserved.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via the
 * chapter-bodies index — never static-import this from the chapter index.
 */

export const statisticalClaimsBlocks = [
  {
    type: 'text',
    content: "You now have the whole toolkit for reading data — ratios, percents, probabilities, summaries, models. This closing chapter asks the question standing behind all of it: **what is a study entitled to claim?**",
  },
  {
    type: 'text',
    content: "Each question presents a short study — who was measured, how they were chosen, what was found — and four possible conclusions. Little arithmetic is involved: the wrong choices fail not on computation but because they claim *more than the study supports*.",
  },
  {
    type: 'text',
    content: "Two design features decide the issue. Identify both before weighing any option.",
  },

  { type: 'heading', content: 'Two design features, two kinds of claims' },
  {
    type: 'list',
    items: [
      "**Random sampling** — how participants *entered* the study. It licenses generalizing to the whole population.",
      "**Random assignment** — how participants were *sorted into groups*. It licenses claiming cause.",
    ],
  },
  {
    type: 'text',
    content: "The two features are independent: a study can have either, both, or neither. Each supports exactly one kind of claim, never the other's.",
  },
  {
    type: 'text',
    content: "Check them separately, sampling first, before reading any answer choice.",
  },

  { type: 'heading', content: 'Random sampling permits generalization' },
  {
    type: 'text',
    content: "When participants are drawn *at random* from a population, the results generalize to that population — **exactly** that population, no wider and no narrower.",
  },
  {
    type: 'text',
    content: "The pool actually drawn from is called the **frame**, and it bounds every conclusion. A random sample of one school's juniors supports claims about that school's juniors — not all teenagers, not the whole school, not the seniors in the next hallway.",
  },
  {
    type: 'text',
    content: "And when selection wasn't random — volunteers, whoever replied to an email, whoever walked by — the results describe the people who participated, and no one else.",
  },

  { type: 'heading', content: 'Random assignment permits causal claims' },
  {
    type: 'text',
    content: "When a study compares groups, a claim that one thing **caused** another holds only if participants were *randomly assigned* to treatments. Random assignment spreads every hidden trait evenly across the groups, leaving the treatment as the only systematic difference between them.",
  },
  {
    type: 'text',
    content: "When participants chose their own group — chose to garden, chose to join chess — some hidden trait came along with the choice. That trait is a **confounding variable**, and it limits the claim to an **association**: the two quantities move together, cause undetermined.",
  },
  {
    type: 'keyInsight',
    content: "Match the verb to the design. Without random assignment, causal verbs — *causes, improves, reduces* — aren't supported; the strongest defensible wording is *is associated with*. An observational study, where participants chose their own behavior, can't support a causal claim no matter how large or how random the sample is.",
  },

  { type: 'heading', content: 'A biased sample supports nothing' },
  {
    type: 'text',
    content: "A recurring wrong answer in this family reads \"the sample was too small.\" Size is almost never the flaw — **selection** is.",
  },
  {
    type: 'text',
    content: "Ten thousand people who chose to answer an online poll are still ten thousand self-selected people: a large quantity of biased data.",
  },
  {
    type: 'text',
    content: "Size buys precision; only randomness buys validity. A small *random* sample beats an enormous *biased* one, and no sample size repairs a flawed selection method.",
  },

  { type: 'heading', content: 'Estimating a population count' },
  {
    type: 'text',
    content: "When the sample *is* random, scaling up is fair: take the sample's fraction with the trait and multiply by the population size $N$. If 30% of a random sample studies late and the school has 1,200 students, the estimate is $0.30 \\times 1200 = 360$.",
  },
  {
    type: 'text',
    content: "A **margin of error** then converts that single number into a plausible interval — from the estimate minus the margin to the estimate plus the margin. A larger random sample narrows the interval.",
  },
  {
    type: 'tip',
    content: "The interval describes the *population value* — not any individual, and not the sample itself. A value outside the interval is unlikely, not impossible. Answer options that say \"cannot\" or \"exactly\" overstate what the interval supports and can be eliminated.",
  },

  { type: 'heading', content: 'How to approach these questions' },
  {
    type: 'steps',
    items: [
      "**Pin the frame.** Who was actually in the pool being drawn from? No conclusion reaches past that group.",
      "**Check the sampling.** A random draw generalizes to the whole frame; a self-selected one describes only the participants.",
      "**Check the assignment.** Only random assignment to groups supports a causal verb — otherwise the ceiling is *is associated with*.",
      "**Take the most modest conclusion the design supports.** Overreach — a wider group, a stronger verb, a per-person guarantee — is what makes a choice wrong.",
    ],
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'A researcher selects 200 students at random from the full roster of juniors at Brookfield High and finds 62% carry a reusable water bottle. The results can be generalized to which group?\n\n(A) All high school students in the state\n(B) All students at Brookfield High\n(C) All juniors at Brookfield High\n(D) Only the 200 students selected',
    steps: [
      { label: 'Identify the frame', content: "The pool drawn from is the *juniors at Brookfield High*. That pool is the frame, and it bounds any conclusion." },
      { label: 'Check the sampling', content: "Selection was random, so the result generalizes to the whole frame, not just the 200 students asked — (D) understates what the study supports." },
      { label: 'Eliminate the overreaches', content: "(A) and (B) extend beyond the frame — other schools, other grades, people never in the pool. Answer: **(C)**, exactly the frame, no wider and no narrower." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A random sample of 500 households in Rivertown finds that 24% own an electric vehicle. Rivertown has 15,000 households. About how many households in the town are estimated to own an electric vehicle?\n\n(A) 120\n(B) 1,200\n(C) 3,600\n(D) 24,000',
    steps: [
      { label: 'Confirm scaling is justified', content: "The draw was random from the town itself, so the sample's proportion may stand in for the whole town." },
      { label: 'Scale the proportion up', content: 'Sample fraction times population size: $0.24 \\times 15000 = 3600$.' },
      { label: 'Answer', content: "**(C) 3,600.** Note the base: choice (A), 120, is 24% of the *500 sampled* — a wrong answer built by scaling the wrong number." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A morning radio host invites listeners to call in whether the city should build a new stadium; of 4,000 callers, 72% say yes. The host concludes most residents support the stadium. What is the primary flaw in this conclusion?\n\n(A) The sample of 4,000 is too small to represent the city.\n(B) The callers chose to respond, so the sample is self-selected rather than random.\n(C) The result should have been reported with a margin of error.\n(D) The survey asked about only one proposed stadium.',
    steps: [
      { label: 'Check the sampling', content: "No one selected these callers — they selected themselves. The sample is self-selected, and people with strong stadium opinions call in at many times the rate of everyone else." },
      { label: 'Rule out "too small"', content: "The sample of 4,000 is large, which is precisely the point: size doesn't repair bias. A large biased sample is still a biased sample, so (A) misdiagnoses the flaw." },
      { label: 'Answer', content: "**(B)** — the non-random, self-selected sampling is the flaw. The 72% describes the callers and no one else in the city." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Researchers randomly selected 500 adults from a city\'s voter roll and asked about gardening and stress. Adults who gardened weekly reported lower stress. Which conclusion is most appropriate?\n\n(A) Gardening reduces stress for adults in the city.\n(B) Gardening reduces stress for adults everywhere.\n(C) Among adults in the city, weekly gardening is associated with lower reported stress.\n(D) Any adult in the city who starts gardening will report lower stress.',
    steps: [
      { label: 'Check both design features', content: "Sampling was random — a draw from the city's adults — so a claim about that group is supported. Assignment was not random: no one assigned gardening; people chose it. The study is observational, so no causal verb is defensible." },
      { label: 'Eliminate the causal verbs', content: "(A) and (B) both say \"reduces\" — a causal claim without random assignment, eliminated on wording alone. Calm adults with ample free time may both garden more *and* report less stress; this design can't separate those possibilities." },
      { label: 'Check scope and quantifier', content: "(B) also exceeds the frame (\"everywhere\"), and (D) converts a group tendency into a per-person guarantee. Answer: **(C)** — associative, bounded by the frame, with no claim of cause." },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'A streaming service emails a survey to all subscribers; 8,400 reply and report watching 3.1 hours a day. Can the service conclude its subscribers average about 3.1 hours?',
    answer: "**No.** The sample is not random — the 8,400 selected themselves by replying, and heavy viewers answer a viewing survey at a higher rate. The 3.1 hours describes the *respondents* only. The large count doesn't help: size buys precision, while only randomness buys validity.",
  },
  {
    type: 'checkpointQuestion',
    question: 'Sixty volunteers are randomly assigned to two groups; one uses a new stretching routine and later shows greater flexibility gains. Can you say the routine *causes* the gains, and for whom?',
    answer: "**Yes to cause, but only for a narrow group.** Random assignment distributed hidden traits evenly across the groups, so the routine can be credited with the gains. The frame, however, is limited: the participants were volunteers, not a random draw from any population, so the claim holds **for people like those sixty volunteers**, not the general public.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A researcher randomly samples 300 employees at one company and finds 40% bike to work; the company has 2,400 employees. Estimate the number of bike commuters, and can that be generalized to all workers in the city?',
    answer: "**About $960$ at that company; no citywide claim.** Scaling is justified inside the frame: $0.40 \\times 2400 = 960$ bike commuters at that company. The conclusion stops there — one company's employees. The rest of the city was never in the pool, so the result doesn't generalize citywide.",
  },

  {
    type: 'text',
    content: "**In summary:** establish who was actually sampled, check the sampling (a random sample generalizes to the frame), check the assignment (random assignment supports a claim of cause), and take the most modest conclusion the design supports.",
  },
];
