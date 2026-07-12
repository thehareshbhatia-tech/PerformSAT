/**
 * Learn chapter body — Studies, Samples & Statistical Claims (Math · PSDA).
 *
 * Teach-from-zero textbook chapter following the locked template
 * (docs/LEARN_TEXTBOOK_OVERHAUL_PLAN.md): roadmap → Stage 1 foundations →
 * Stage 2 numbered method (step → right → wrong → why) → Stage 3 on-the-test
 * (decision flow, traps, worked examples, checkpoints, one-page summary).
 * Covers CB skills statistical-claims + inference-margin-of-error:
 * observational studies vs experiments, sampling validity, margin of error,
 * and "most appropriate conclusion" items.
 * Concept source: knowledge/graph/math (statistical-claim-legality,
 * sampling-validity-two-dials, margin-of-error-interpretation,
 * sample-to-population-estimation, spread-range-and-sd).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via the
 * chapter-bodies index — never static-import this from the chapter index.
 */

export const statisticalClaimsBlocks = [
  {
    type: 'text',
    content: 'A statistical-claims item hands you a short paragraph describing a study — who was surveyed or measured, how they were chosen, what was found — and four conclusions. The question: *which is the most appropriate conclusion?* There is no equation to solve and often no arithmetic at all. The secret most students never hear: **these are logic items wearing a statistics costume.** Two yes-or-no questions about how the study was built decide every one, and once you can read those two dials, the wrong answers eliminate themselves by their wording alone.',
  },
  {
    type: 'steps',
    title: 'How this chapter is built',
    items: [
      '**Stage 1 · Foundations.** What a population and a sample are, why studies sample at all, and the two dials — random *selection* and random *assignment* — that license every conclusion.',
      '**Stage 2 · The method.** Five numbered steps, each in the same shape: the step, a right example, a wrong example, and the why.',
      '**Stage 3 · On the test.** A decision flow that routes design to verdict, the traps built into the answer choices, worked examples, and a one-page summary.',
    ],
  },

  // ── Stage 1 · Foundations ──────────────────────────────────────────────
  { type: 'heading', content: 'Stage 1 · Populations, samples, and the two dials' },
  {
    type: 'text',
    content: 'A **population** is the entire group a study wants a fact about — every voter in a city, every battery a factory produced, every junior at a school. Measuring all of them is almost never possible, so researchers measure a **sample**: a smaller group drawn from the population. The number computed from the sample — a mean, a percentage — is called a **sample statistic**, and it stands in for the number the study really wants, the **population value**. A statistic is an **estimate** of the population value, never the population value itself. Draw a second sample and the statistic shifts a little; the population value never moved.',
  },
  {
    type: 'text',
    content: 'Whether that estimate is allowed to say anything beyond the people actually measured depends on two separate design decisions — two dials, each either on or off. They sound similar and control completely different things, and the entire chapter runs on telling them apart.',
  },
  { type: 'heading', content: 'Dial 1 · Random selection — who got into the study' },
  {
    type: 'text',
    content: '**Random selection** means every member of the population had an equal chance of being picked for the sample — names drawn from a hat, a roster shuffled by computer. This dial controls **generalization**: whether the sample statistic may speak for the population. With random selection, the sample is a fair miniature of the population it was drawn from, and results extend to that population — *exactly* that population, no further and no narrower. Without it — volunteers, whoever walked by, whoever replied to an email — the people in the sample share an extra trait (they volunteered, they were at that place, they cared enough to reply), and the results describe only people like them: the participants themselves.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Dial 1 on — generalizes', content: 'A city picks 300 households at random from its water-billing records and finds a mean usage of 410 liters per day. The 300 are a fair miniature of the city\'s billed households, so the estimate speaks for all of them.', variant: 'right' },
      { label: 'Dial 1 off — participants only', content: 'A fitness app asks users to opt in to a sleep survey and 9,000 respond. Nine thousand sounds impressive, but every respondent chose to answer — the results describe app users who opt into surveys, not app users, and certainly not adults in general.', variant: 'wrong' },
    ],
  },
  { type: 'heading', content: 'Dial 2 · Random assignment — who got which treatment' },
  {
    type: 'text',
    content: '**Random assignment** applies when a study compares groups: it means a coin flip (or its computerized equivalent) decided which participant got which condition — fertilizer or no fertilizer, new app or old app. This dial controls **causation**: whether the study may say one thing *caused* another. Random assignment spreads every hidden trait — age, habits, health, motivation — evenly across the groups, so the treatment becomes the only systematic difference between them. If the groups then differ in outcome, the treatment gets the credit. Without random assignment, the groups formed themselves (people who chose to garden vs people who did not), and any hidden trait that travels with that choice is a rival explanation — a **confounding variable**. The study can then report only an **association**: the two things move together, cause unknown.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Dial 2 on — cause may be claimed', content: 'Sixty tomato seedlings are randomly split into two groups; one group gets a new plant food. The fed group grows taller. The coin flip made the groups alike in everything else, so the plant food earns the causal credit.', variant: 'right' },
      { label: 'Dial 2 off — association only', content: 'Researchers observe that students who chose to join the chess club have higher grades. Joining was the students\' own choice — the same discipline or free time that led them to chess could also drive the grades. Chess and grades are *associated*; nothing here shows chess *causes* grades.', variant: 'wrong' },
    ],
  },
  {
    type: 'text',
    content: 'The two designs have names. An **observational study** watches people who chose their own behavior — dial 2 is off by definition, so an observational study can never support a causal claim, no matter how large or how random the sample. An **experiment** assigns treatments; a **randomized experiment** assigns them by chance, turning dial 2 on. The dials are independent: a study can have either one, both, or neither, and each combination licenses a different strength of conclusion — that four-cell grid is the one-page summary at the end of this chapter.',
  },
  {
    type: 'strategyCard',
    title: 'The two-dial check',
    content: 'Before reading a single answer choice, write two one-word answers in the margin: **Selected at random?** (yes/no) and **Assigned at random?** (yes/no). Dial 1 decides *whom* the conclusion may be about; dial 2 decides *how strong its verb* may be. Every step in Stage 2 is one of these checks applied in order — run them first and most options die before you evaluate a single number.',
  },
  {
    type: 'checkpointQuestion',
    number: 1,
    question: 'A hospital studies its records and finds that patients who walked daily after surgery left the hospital sooner than patients who did not. Which dials are on, and what kind of study is this?',
    answer: 'Both dials are off. The patients were not randomly selected from any larger population (they are one hospital\'s records), and nobody assigned walking — patients chose it themselves. It is an **observational study**. **Why:** walking and shorter stays are associated among these patients, but healthier patients may both walk more and recover faster — a confounding variable random assignment would have eliminated.',
  },

  // ── Stage 2 · The method ───────────────────────────────────────────────
  { type: 'heading', content: 'Stage 2 · The method' },
  {
    type: 'text',
    content: 'Five steps decide every studies-and-claims item, run in the same order every time. Each follows the same shape: the **step**, a **right** example, a **wrong** example, and the **why**.',
  },

  { type: 'heading', content: 'Step 1 — Pin down who was actually sampled' },
  {
    type: 'text',
    content: 'The first written line of work: *who exactly got measured, and where did they come from?* That group — the pool the sample was drawn from — is the **sampling frame**, and a conclusion may reach the frame at most, never past it. The stem states the frame once, mid-paragraph, and then talks about a bigger, more interesting group in the question: the survey samples juniors at one high school, and the tempting answer choice talks about *all teenagers*. Topic-matching is not frame-matching. A survey of one school\'s juniors says nothing about all teenagers, all students, or even that school\'s seniors.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Frame-bounded — legal', content: 'A random sample of 250 juniors from Ridgeline High\'s roster finds 40% ride the bus. Legal conclusion: about 40% of *Ridgeline High juniors* ride the bus.', variant: 'right' },
      { label: 'Frame-stretched — illegal', content: 'Same study, tempting conclusion: "about 40% of high school students ride the bus." The sample was drawn from one school\'s juniors — students at other schools, and even this school\'s other grades, were never in the pool.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Step 2 — Check dial 1: was selection random?' },
  {
    type: 'text',
    content: 'With the frame pinned, ask whether the sample was drawn from it *at random*. If yes, the results generalize to the frame. If no — volunteers, mail-backs, mall intercepts, one convenient classroom — generalization dies entirely, and the conclusion may describe only the participants. Two decoys guard this step. First, **sample size cannot repair broken selection**: a huge opt-in survey is a huge pile of self-selected people, while a modest random sample is trustworthy. Size tunes *precision* (Step 4); randomness decides *validity*. Second, a big sample from the wrong frame does not beat a small random sample from the right one — a million measurements of the wrong group do not average into the truth about the right group.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Small and random — valid', content: 'A bookstore draws 80 names at random from its full membership list and asks about weekend hours. Eighty is modest, but every member had an equal chance of being asked — the results speak for the membership.', variant: 'right' },
      { label: 'Huge and self-selected — broken', content: 'The same bookstore posts a link on its social feed and 5,200 followers respond. The respondents chose themselves: people with strong opinions and free time answer links. No number of extra responses fixes who was missing.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Step 3 — Check dial 2: was assignment random?' },
  {
    type: 'text',
    content: 'Now grade the **verb** each conclusion is allowed to use. Verbs like *causes, improves, reduces, leads to, results in* are causal — legal only when treatments were randomly assigned. If the groups formed themselves, the strongest legal verb is associative: *is associated with, tends to accompany, is linked to.* This step is a wording scan, not a math check: a conclusion drawn from an observational study dies the moment it says "improves," before any of its numbers get read. And one subtlety survives even a legal association: association has no arrow. If gardeners report less stress, it fits equally well that gardening calms people, that calm people take up gardening, or that a third trait drives both.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Verb matches the design', content: 'From an observational finding: "adults in the sample who gardened *tended to report* lower stress." Associative verb, no arrow claimed — exactly what the design supports.', variant: 'right' },
      { label: 'Causal upgrade — illegal', content: 'Same data: "gardening *reduces* stress." Nobody assigned gardening; the calm-people-garden explanation was never ruled out, so the causal verb overdraws the evidence.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Step 4 — Read the margin of error as a band, not a promise' },
  {
    type: 'text',
    content: 'Some items attach a **margin of error** to the estimate — always supplied, never computed. It converts the single-number estimate into an interval: from estimate minus the margin to estimate plus the margin. That band is the set of **plausible values for the population value** — the population mean or percentage the sample is trying to pin down. A reported mean of 21.4 hours with a margin of error of 0.6 says: the *population mean* plausibly sits between 20.8 and 22.0. The band is driven mostly by **sample size** — a larger random sample gives a smaller margin — and secondarily by how spread out the measured quantity is: a more uniform group yields a tighter band.',
  },
  {
    type: 'text',
    content: 'Three things the band does **not** say, each of which is a manufactured wrong answer. It is not about **individuals**: a mean battery life of 21.4 ± 0.6 hours says nothing about any single battery, which can happily die at 14 hours while the band stays correct. It is not **measurement sloppiness**: the sample was measured exactly; the uncertainty lives entirely in projecting the sample onto the population. And outside the band means **implausible, not impossible**: the true value very probably sits inside, but "cannot" and "impossible" claim more than any sample can deliver.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Band read correctly', content: 'Estimate 64%, margin of error 3%. Legal reading: "the *percentage of the population* with the trait is plausibly between 61% and 67%."', variant: 'right' },
      { label: 'Band misread', content: '"Between 61% and 67% *of the individuals sampled* have the trait" (the band is not about individuals or the sample), or "the population percentage *cannot* exceed 67%" (outside the band is implausible, never impossible).', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Step 5 — Pick the most modest claim that still says something' },
  {
    type: 'text',
    content: 'Conclusions come in strengths, and the study\'s design fixes the maximum strength it can pay for. From strongest to weakest: **absolute** claims ("is exactly," "proves," "cannot be") — never legal from a sample, full stop; **causal** claims — legal only with random assignment; **generalizations** — legal only to the frame, and only with random selection; **individual-member** claims ("any student who exercises will improve") — a group tendency never becomes a per-person rule; and finally the **hedged association or estimate** ("suggests," "is associated with," "plausibly between"), which almost no design fails to support. School rewards confident answers; this item type inverts that reward. Scan the four options and ask not *which is true* — truth is unknowable from a summary — but *which is allowed to be said.* The winner is the most modest option that still makes a claim.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Modest and legal', content: '"The results *suggest* that, among the store\'s members, interest in weekend hours *is associated with* living nearby." Hedged verb, frame-bounded, association-strength — every clause inside what the design licenses.', variant: 'right' },
      { label: 'Confident and illegal', content: '"The results *prove* that customers everywhere *want* weekend hours." "Prove" is absolute, "customers everywhere" leaves the frame, and a survey of interest measures association with the people asked, not a universal desire.', variant: 'wrong' },
    ],
  },

  // ── Stage 3 · On the test ──────────────────────────────────────────────
  { type: 'heading', content: 'Stage 3 · On the test' },
  {
    type: 'text',
    content: 'The stem describes a study in three or four sentences and asks a version of *"Which of the following is the most appropriate conclusion?"*, *"To which population can the results be generalized?"*, or *"Which is the best interpretation of the margin of error?"* The four options are full sentences that differ in verb strength, scope, and quantifiers — not in numbers. Read the design first, grade the sentences second.',
  },
  {
    type: 'steps',
    title: 'The decision flow',
    items: [
      'Pin the frame: write down exactly who was sampled and from what pool (Step 1).',
      'Run dial 1 — random selection? Yes: conclusions may reach the frame. No: participants only (Step 2).',
      'Run dial 2 — random assignment? Yes: causal verbs allowed. No: association verbs only (Step 3).',
      'If a margin of error appears, compute the band — estimate minus margin to estimate plus margin — before reading any option (Step 4).',
      'Grade each option\'s wording against the licenses: strike absolute claims, causal verbs without dial 2, scopes beyond the frame, and per-individual promises. Pick the most modest survivor (Step 5).',
    ],
  },
  {
    type: 'keyInsight',
    content: '**Match the verb to the design.** Random selection *and* random assignment: a causal claim, valid within the population sampled. Random selection only: generalize to the frame, but no cause. Random assignment only: a causal claim, but only about the participants. Neither: an association among the participants, nothing more. Every wrong option violates this grid in exactly one visible way — a verb too strong, a scope too wide, or a hedge missing — so the fastest solvers read options for their *license requirements* and never ask whether the sentence sounds true.',
  },
  {
    type: 'trapCard',
    title: 'The scope stretch',
    wrong: '**The scope stretch.** The stem samples juniors at one school, shoppers at one store, listeners of one podcast — and the tempting option concludes something about all teenagers, all consumers, everyone. It feels right because the wider group is what the study was *about*.',
    correction: 'A conclusion may reach the sampling frame and not one person past it. Underline who was actually drawn, then demand that the correct option name that group — and reject the too-narrow twin ("only the 250 students surveyed") when selection was random, since a random sample earns the whole frame, not just itself.',
  },
  {
    type: 'trapCard',
    title: 'The causal upgrade',
    wrong: '**The causal upgrade.** An observational study finds that people who do X score better on Y, and an option says X *improves* Y. It lands because everyday headlines narrate every correlation as a cause, so the causal sentence reads as a neutral summary.',
    correction: 'Causal verbs are paid for by random assignment and nothing else. If participants chose their own behavior, generate the rival explanation in one sentence — "maybe the kind of person who does X was already different" — and the upgrade collapses. The legal option says *is associated with*, and it claims no direction.',
  },
  {
    type: 'trapCard',
    title: 'The margin-of-error misread',
    wrong: '**The margin-of-error misread.** Options translate "estimate 34%, margin of error 2%" into sentences about the wrong target: "between 32% and 36% of the *people surveyed*…", "*every* member of the population is within…", "the true value *cannot* be above 36%."',
    correction: 'The band bounds exactly one number — the population mean or percentage — and nothing else. Run the three-part scan on each option: about the population value (not individuals, not the sample)? hedged ("plausible," "likely" — not "is exactly," not "cannot")? inside the computed band? Any miss kills the option on wording alone.',
  },
  {
    type: 'trapCard',
    title: 'The sample-size decoy',
    wrong: '**The sample-size decoy.** A flaw-identification item offers "the sample was too small" next to a design where 60 people were chosen at random — or praises a survey because 10,000 people responded to an open link. Small numbers feel untrustworthy and big numbers feel rigorous.',
    correction: 'Size and validity are different axes. Randomness decides whether the results mean anything; size only tunes the width of the error band. A small random sample is valid with a wider margin; a giant self-selected sample is invalid at any size. On flaw items, hunt the non-random selection mechanism or the shared extra trait, and treat the size option as the decoy it is.',
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'A researcher selects 200 students at random from the complete roster of juniors at Brookfield High School and finds that 62% of those selected carry a reusable water bottle. Based on the design of the study, the results can be generalized to which of the following groups?\n\n(A) All high school students in the state\n(B) All students at Brookfield High School\n(C) All juniors at Brookfield High School\n(D) Only the 200 students who were selected',
    steps: [
      { label: 'Pin the frame', content: 'The sample was drawn from one specific pool: the roster of *juniors at Brookfield High School*. That pool is the frame.' },
      { label: 'Run dial 1', content: 'Selection was random from that roster — every junior had an equal chance. Random selection means the results reach the entire frame, so (D) is too narrow: a random sample earns more than itself.' },
      { label: 'Reject the stretches', content: '(A) and (B) include students who were never in the pool — other schools, other grades. Topic-adjacent is not frame-included.' },
      { label: 'Answer', content: '**(C)** — exactly the frame: all juniors at Brookfield High School, no further and no narrower.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A quality engineer takes a random sample of 400 batteries from one day\'s production at a factory. The sample has a mean life of 21.4 hours, with an associated margin of error of 0.6 hours. Which of the following is the most appropriate interpretation?\n\n(A) Every battery produced that day has a life between 20.8 and 22.0 hours.\n(B) It is not possible that the mean life of all batteries produced that day exceeds 22.0 hours.\n(C) The mean life of all batteries produced that day is plausibly between 20.8 and 22.0 hours.\n(D) The sample mean of 21.4 hours may be inaccurate by up to 0.6 hours because of measurement error.',
    steps: [
      { label: 'Compute the band first', content: '21.4 − 0.6 = 20.8 and 21.4 + 0.6 = 22.0. The band is 20.8 to 22.0 hours — written down before reading any option.' },
      { label: 'Scan each option for its target', content: '(A) is about *individual batteries* — the band bounds the population mean, and a single battery can sit far outside it. (D) is about *the sample* — the sample was measured exactly; the uncertainty is in projecting to the day\'s full production.' },
      { label: 'Scan for absolute language', content: '(B) says "not possible." Outside the band means implausible, never impossible — absolute claims overdraw what any sample can pay.' },
      { label: 'Answer', content: '**(C)** — population mean, hedged ("plausibly"), inside the computed band. All three checks pass; it is the only option about the right number at the right strength.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Researchers randomly selected 500 adults from a city\'s voter roll and asked each about gardening habits and perceived stress. Adults who gardened at least weekly reported a lower mean stress score than those who did not. Which of the following is the most appropriate conclusion?\n\n(A) Gardening reduces stress for adults in the city.\n(B) Gardening reduces stress for adults in general.\n(C) Among adults in the city, gardening at least weekly is associated with lower reported stress.\n(D) Any adult in the city who takes up weekly gardening will report lower stress.',
    steps: [
      { label: 'Run both dials', content: 'Dial 1: selection was random from the city\'s voter roll — generalization to adults on that roll is licensed. Dial 2: nobody assigned gardening; participants chose their own habits — this is observational, so causal verbs are off the table.' },
      { label: 'Grade the verbs', content: '(A) and (B) say "reduces" — a causal verb with dial 2 off. Both die on wording, whatever their scope. Motivated, healthy, or retired adults may both garden more and report less stress; that rival explanation was never eliminated.' },
      { label: 'Grade scope and quantifiers', content: '(B) also stretches past the frame to "adults in general." (D) converts a group tendency into a per-person guarantee — "any adult… will" — which no summary statistic supports even in a randomized experiment.' },
      { label: 'Answer', content: '**(C)** — associative verb, frame-bounded ("among adults in the city"), no arrow of cause, no promise about individuals. The most modest option that still says something is the only legal one.' },
    ],
  },
  {
    type: 'checkpointQuestion',
    number: 2,
    question: 'A streaming service emails a survey to all subscribers; 8,400 reply, reporting a mean of 3.1 viewing hours per day. Can the service conclude its subscribers average about 3.1 hours?',
    answer: 'No. **Why:** dial 1 is off — the 8,400 selected themselves by replying, and heavy viewers are plausibly more inclined to answer a viewing survey. The 3.1-hour figure describes the respondents only, and no response count repairs non-random selection; size is precision, randomness is validity.',
  },
  {
    type: 'checkpointQuestion',
    number: 3,
    question: 'Sixty volunteer participants are randomly assigned to two groups; one group uses a new stretching routine, and that group later shows greater flexibility gains. Which claim is legal: the routine *causes* greater gains, and for whom?',
    answer: 'A causal claim is legal — random assignment spread hidden traits evenly, so the routine earns the credit — but only **for participants like the sixty volunteers**. **Why:** dial 2 (assignment) is on, licensing "causes"; dial 1 (selection) is off, because volunteers were not randomly drawn from any wider population, so the causal finding does not generalize beyond them.',
  },
  {
    type: 'checkpointQuestion',
    number: 4,
    question: 'Two random samples are drawn from the same population: one of 100 people, one of 900. Which sample\'s estimate carries the smaller margin of error, and does the larger sample also have the larger mean?',
    answer: 'The 900-person sample has the smaller margin of error — larger random samples tighten the band. **Why:** sample size is the main driver of the band\'s width. But nothing orders the two *means*: sample size says nothing about which estimate is bigger, only about which band is narrower — an inference the wrong options invite and the design never licenses.',
  },
  {
    type: 'checkpointQuestion',
    number: 5,
    question: 'Scanning four conclusion options, you spot one saying the population mean "is exactly 46.2" and another saying it "cannot be greater than 48." Before checking any numbers, what do you know?',
    answer: 'Both are dead. **Why:** absolute claims — exactness and impossibility — sit above the ceiling of what any sample can support, regardless of design or arithmetic. A sample yields an estimate with a plausible band around it; "exactly" and "cannot" are struck on wording alone, and the answer lives among the hedged options that remain.',
  },
  { type: 'heading', content: 'One-page summary' },
  {
    type: 'table',
    title: 'The two dials and the strongest legal claim',
    headers: ['Random selection?', 'Random assignment?', 'Strongest legal claim'],
    rows: [
      ['Yes', 'Yes', 'Cause and effect, generalizable to the population sampled from'],
      ['Yes', 'No', 'Association only, but generalizable to the population sampled from — no causal verbs'],
      ['No', 'Yes', 'Cause and effect, but only for participants like those in the study'],
      ['No', 'No', 'Association among the participants only — the weakest cell, and the home of most observational traps'],
    ],
  },
  {
    type: 'text',
    content: 'That is the entire skill: pin the frame, run the two dials, compute the band when one is given, and grade each option\'s wording against what the design licenses — striking absolutes, unearned causal verbs, stretched scopes, and per-person promises until the most modest survivor remains. No formula, no computation beyond one addition and one subtraction: pure inference discipline, and every point of it is learnable from the wording alone.',
  },
];
