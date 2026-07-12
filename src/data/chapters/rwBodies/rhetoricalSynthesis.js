/**
 * Learn chapter body — Rhetorical Synthesis (Expression of Ideas).
 *
 * Teach-from-zero textbook chapter following the locked template
 * (docs/LEARN_TEXTBOOK_OVERHAUL_PLAN.md): roadmap → Stage 1 foundations
 * (anatomy of the goal sentence, goal-answer signatures) → Stage 2 numbered
 * method (decompose the goal → write the signature → strike by feature →
 * fact-check the survivor) → Stage 3 on-the-test (decision flow, traps,
 * worked examples, checkpoints, one-page summary).
 * Voice reference: src/data/chapters/rwBodies/boundaries.js.
 * Concept source: knowledge/graph/rw (notes-question-goal-first,
 * goal-decomposition-checklist, goal-answer-signatures,
 * writing-choice-set-classification, writing-module-economics).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * rwBodies/index.js — never import this from the chapter index.
 */

export const rhetoricalSynthesisBlocks = [
  {
    type: 'text',
    content: 'A Rhetorical Synthesis question hands you a short list of bulleted research notes, then one sentence — *"The student wants to [goal]"* — then four choices that are all full sentences built from the notes. Most students read the notes first, top to bottom, and drown in facts that all reappear in the choices. The method in this chapter runs the other way: **the goal sentence, not the notes, decides the answer.** Read the goal first, work out what the right answer has to contain, and the notes become scenery you barely glance at. Once the habit flips, these are among the fastest questions on the exam.',
  },
  {
    type: 'steps',
    title: 'How this chapter is built',
    items: [
      '**Stage 1 · Foundations.** The anatomy of the goal sentence — its verb, its focus, its audience — and what each goal type forces the right answer to look like.',
      '**Stage 2 · The method.** Four numbered steps, each in the same shape: the step, a right example, a wrong example, and the why.',
      '**Stage 3 · On the test.** A decision flow, the traps the test sets, worked examples across the difficulty range, and a one-page summary.',
    ],
  },

  // ── Stage 1 · Foundations ──────────────────────────────────────────────
  { type: 'heading', content: 'Stage 1 · The anatomy of the goal sentence' },
  {
    type: 'text',
    content: 'Every one of these items ends the same way: *"Which choice most effectively uses relevant information from the notes to accomplish this goal?"* The word doing all the work is **goal**. The goal sentence is a task specification — a tiny job description for the correct answer — and it always has the same three parts. The **verb** names the job. The **focus** names the exact thing the job is about. The **audience** (when present) names who the sentence is written for.',
  },
  {
    type: 'text',
    content: 'The verb is a command, and each command demands something different. **Introduce** means present the thing for the first time — name it plainly and say what it is. **Emphasize** means put the spotlight on one specific point and state that point outright. **Compare** or **contrast** means put two things side by side and assert a likeness or a difference. **Explain** means show how or why something works. **Specify** means give the exact detail asked for, not a general statement about the topic. A choice that talks about the right subject while performing the wrong verb is wrong — no matter how accurate it is.',
  },
  {
    type: 'text',
    content: 'The **focus** is the noun phrase after the verb, and it must be matched at exactly the right level. If the goal asks about *the materials a sculptor uses*, a choice about the sculptor\'s awards is a neighbor, and a choice about "her artistic process" in general is a superset — both wrong. The **audience clause** flips what background is allowed. *"To an audience unfamiliar with X"* makes background mandatory: the answer must say who or what X is, usually with a full name and a role. *"To an audience already familiar with X"* makes that same background dead weight: a choice that re-explains the basics is signaling its own wrongness.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Decomposed — verb, focus, audience', content: 'Goal: *emphasize how quickly the flooded library was rebuilt.* Verb: **emphasize**. Focus: **the speed of the rebuilding** — not the library, not the flood. The right answer must state the speed itself (*reopened just eleven weeks after the flood*).', variant: 'right' },
      { label: 'Read as a topic — the loose read', content: 'The student reads the same goal as "something about the library" and picks a choice describing the library\'s new reading room. True, drawn from the notes, on-topic — and it never mentions speed, so it fails the one job the verb named.', variant: 'wrong' },
    ],
  },
  {
    type: 'strategyCard',
    title: 'The question contains its own answer key',
    content: 'The correct answer is, at heart, the goal sentence restated in new words. That has a liberating consequence: the item is solvable from the goal and the choices alone, before the notes are read at all. Treat the goal as a lock and the four choices as keys — the bulleted notes are only the box the keys came in. Inspect the lock first; open the box last.',
  },
  {
    type: 'checkpointQuestion',
    number: 1,
    question: 'Goal: *"The student wants to describe the telescope\'s mirror to an audience unfamiliar with observatory equipment."* Name the verb, the focus, and the audience — and one thing the audience clause forces the answer to include.',
    answer: 'Verb: **describe**. Focus: **the telescope\'s mirror** — not the telescope in general. Audience: **readers unfamiliar with observatory equipment**, which forces the answer to include plain background (what the mirror is and does) rather than assuming technical knowledge. **Why:** the three parts together are the full checklist the right answer must satisfy — miss one part and a designed distractor is waiting.',
  },

  { type: 'heading', content: 'Goal-answer signatures: what the right choice has to look like' },
  {
    type: 'text',
    content: 'Each goal type forces visible, physical features onto its correct answer — a **signature** you can predict before reading a single choice. An *introduce-to-an-unfamiliar-audience* answer must name the subject plainly (full name, not surname alone) and say what it is. A *compare* or *contrast* answer must contain **both** items plus an explicit likeness or difference word — *like, similarly, unlike, whereas, while, than*. Merely mentioning both items is not comparing them. An *emphasize-a-difference* answer must state the difference itself, not just facts about each side. A *state-the-aim-of-a-study* answer must use intent framing — *set out to, in order to determine, to test whether* — not results framing. An *emphasize-variety* answer must list or characterize several kinds; one vivid example fails.',
  },
  {
    type: 'callout',
    content: '**Every goal type has a uniform.** Comparison answers wear a comparison word; new-audience answers wear a background clause; study-aim answers wear intent verbs. Distractors are the same body in the wrong uniform — check the uniform before you check the body, and half the choice set falls to a one-second scan.',
  },

  // ── Stage 2 · The method ───────────────────────────────────────────────
  { type: 'heading', content: 'Stage 2 · The method' },
  {
    type: 'text',
    content: 'Four steps cover every Rhetorical Synthesis question, and they run in a fixed order. Each follows the same shape: the **step**, a **right** example, a **wrong** example, and the **why**.',
  },

  { type: 'heading', content: 'Step 1 — Skip the notes; decompose the goal' },
  {
    type: 'text',
    content: 'Go straight past the bullets to the sentence beginning *"The student wants to…"* and split it into its parts: **verb + focus + audience or relation**. Count the parts. A one-part goal (*emphasize the mural\'s size*) needs one thing checked. A two-part goal (*introduce the mural AND explain its technique*, or any goal carrying an audience clause) becomes a two-item checklist, and the right answer must satisfy **every** item. Half-satisfying a multi-part goal is the anatomy of the classic near-miss.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — parts counted before choices', content: 'Goal: *present the survey\'s main finding to an audience unfamiliar with the researcher.* Two parts: (1) state the main finding, (2) say who the researcher is. The student writes the checklist first, then reads choices against it.', variant: 'right' },
      { label: 'Wrong — bullets first', content: 'The student reads all five bullets carefully, holds a dozen facts in mind, then reads the choices — and every choice feels supported, because every choice *is* supported. The bullets cannot separate the choices; only the goal can.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Step 2 — Predict the signature before reading any choice' },
  {
    type: 'text',
    content: 'From the decomposed goal, write (mentally) the physical features the right answer must display. This turns a judgment call into a feature hunt: instead of weighing four sentences against each other, you scan for the presence or absence of a comparison word, a background clause, an intent verb, a plural list. Prediction first, choices second — the same predict-then-match discipline that beats transition questions works here on whole sentences.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — signature written first', content: 'Goal: *emphasize a difference between the two greenhouses.* Predicted signature: the answer must contain **both** greenhouses and a difference word (*unlike, whereas, while, but*). Now the scan is mechanical.', variant: 'right' },
      { label: 'Wrong — no prediction, so co-mention passes', content: 'Without the predicted signature, this choice survives: *"The north greenhouse grows tomatoes, and the south greenhouse was built in 2028."* It names both greenhouses — but asserts no difference between them on any shared point. Two facts side by side are not a contrast.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Step 3 — Strike every choice missing a required feature' },
  {
    type: 'text',
    content: 'Scan the choices against the signature and eliminate on the first missing feature — cheapest checks first. No comparison word where one is required: gone. Surname only, where the audience has never met the person: gone. A result (*the trial cut infections by half*) where the goal asked for an aim: gone. Wrong focus — right topic, different noun: gone. Elimination here is by named feature, never by feel. Do not finish reading a choice once it has failed a required item.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — struck on a named feature', content: 'Goal: *introduce the festival to readers unfamiliar with it.* Choice: *"The festival\'s third night draws its largest crowds."* Struck instantly — it assumes the reader already knows the festival exists. An introduction cannot begin mid-story.', variant: 'right' },
      { label: 'Wrong — kept because it is accurate', content: 'The student keeps that same choice because every word of it appears in the notes and nothing is false. Accuracy was never in question — all four choices are faithful to the notes. Fit to the goal is the only live test, and this choice fails it.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Step 4 — Fact-check the survivor against the notes' },
  {
    type: 'text',
    content: 'Only now do the notes earn a look — as a **fact-check, not a starting point**. Read the surviving choice once in full and confirm each of its claims against the bullets: no invented numbers, no stitched-together cause-and-effect the notes never state, no superlative the notes never award. If two choices genuinely survive Step 3 — rare when the signature was written properly — the notes break the tie: the choice that uses them accurately wins. Then commit. A goal-derived answer is not re-litigated by feel.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — survivor verified, committed', content: 'Notes say the bakery *opened in 2021* and *supplies three local schools*. Survivor: *"Opened in 2021, the bakery now supplies three local schools."* Both claims check against the bullets. Done — mark it and move on.', variant: 'right' },
      { label: 'Wrong — an invented fact slips through', content: 'Choice: *"The bakery, the town\'s most popular, supplies three local schools."* The notes never rank the bakery\'s popularity. A choice may only recombine what the notes actually say — an added superlative or an invented link is an automatic strike, however small it looks.', variant: 'wrong' },
    ],
  },

  // ── Stage 3 · On the test ──────────────────────────────────────────────
  { type: 'heading', content: 'Stage 3 · On the test' },
  {
    type: 'text',
    content: 'You will recognize the item before reading a word of it: bulleted notes above, *"The student wants to…"* below, four full-sentence choices. These questions sit at the **end of each Reading and Writing module**, which is exactly backwards for an unpaced student — the most mechanical, fastest items on the page arrive when the clock is shortest. Treat them as banked points: reach them with time to run the method calmly, because a notes question forfeited to the clock is the cheapest point lost on the section.',
  },
  {
    type: 'steps',
    title: 'The decision flow',
    items: [
      'Skip the bullets. Read the goal sentence and split it: verb + focus + audience or relation. Count the parts (Step 1).',
      'Predict the signature — the visible features the right answer must carry: a comparison word, a background clause, intent framing, a plural list (Step 2).',
      'Scan the choices feature-first. Strike each on its first missing feature, cheapest check first (Step 3).',
      'One survivor: fact-check it against the notes and commit (Step 4). Two survivors: re-check every part of a multi-part goal — one of them satisfies only a subset.',
      'Do not re-read the bullets after committing. Verification theater costs time and changes nothing.',
    ],
  },
  {
    type: 'keyInsight',
    content: '**Truth does not separate the choices — goal-fit does.** Every fact in every choice is drawn faithfully from the notes; all four are true by design. A test that made distractors false would be testing fact-checking. This one tests whether you can pick the sentence that performs a stated job, so the only question worth asking of a choice is: *does it do exactly what the goal sentence says?*',
  },
  {
    type: 'trapCard',
    title: 'The true-but-off-goal choice',
    wrong: '**The true-but-off-goal choice.** You pick a choice because every fact in it appears in the notes, it reads smoothly, and it is the most interesting sentence of the four. It is accurate, relevant, well-written — and it performs a different job than the one the goal named.',
    correction: 'Accuracy is the price of admission, not the test. Re-read the goal verb and demand that the choice perform it: an *emphasize-a-difference* goal is not satisfied by an informative description, however good. Elimination must cite the missing feature ("no difference word," "wrong focus"), never the sentence\'s overall quality.',
  },
  {
    type: 'trapCard',
    title: 'The expert-audience answer',
    wrong: '**The expert-audience answer.** The goal says *"to an audience unfamiliar with…"* and you pick the tightest, most polished choice — the one that opens with a surname and dives straight into the specifics. It feels sharp precisely because it skips the introductions.',
    correction: 'An audience clause makes background load-bearing, not optional. For an unfamiliar audience the answer must carry the introduction — full name, who or what the subject is — even if that makes it the longest choice on screen. Concision is a virtue only when the audience already has the context; here, the "wordy" choice is wearing the required uniform.',
  },
  {
    type: 'trapCard',
    title: 'The half-goal answer',
    wrong: '**The half-goal answer.** The goal has two parts — state the old belief AND the discovery that overturned it, or introduce the researcher AND give her finding — and you commit at the first satisfied part. The choice nails the focus, feels complete, and is missing the second requirement entirely.',
    correction: 'Count the goal\'s parts before scanning, and tick every part on the choice you pick. Distractors on multi-part goals are engineered to each satisfy a proper subset — one carries the background without the finding, another the finding without the background. Only the correct answer welds all the parts into one sentence.',
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Notes:\n- Tamsin Okafor is a Nigerian-British textile artist.\n- She weaves large wall hangings from recycled fishing nets.\n- Her 2031 series "Tidelines" was shown at a gallery in Lagos.\n\nThe student wants to introduce Okafor\'s work to an audience unfamiliar with her.\n\n(A) Okafor\'s "Tidelines" series, shown in Lagos in 2031, extended her work with recycled fishing nets.\n(B) Tamsin Okafor, a Nigerian-British textile artist, weaves large wall hangings from recycled fishing nets.\n(C) Recycled fishing nets can be woven into large wall hangings.\n(D) In 2031, a gallery in Lagos mounted an exhibition called "Tidelines."',
    steps: [
      { label: 'Decompose the goal', content: 'Verb: *introduce*. Focus: *Okafor\'s work*. Audience: *unfamiliar with her*. Signature: the answer must name her in full, say who she is, and say what she makes.' },
      { label: 'Strike by feature', content: '(A) opens with a bare surname and treats "Tidelines" as old news — it assumes the very familiarity the goal rules out. (C) drops the artist entirely; the focus is her work, not the material. (D) introduces an exhibition, not the artist or her work.' },
      { label: 'Answer', content: '**(B)** — full name, identity (*a Nigerian-British textile artist*), and what she makes. The complete introduce-to-a-newcomer uniform, all in one sentence.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Notes:\n- The Halvern Dam, completed in 1936, generates electricity for about 40,000 homes.\n- The Roska Dam, completed in 2019, generates electricity for about 300,000 homes.\n- Both dams sit on the Vell River.\n- The Roska Dam includes a fish ladder for migrating salmon; the Halvern Dam does not.\n\nThe student wants to emphasize a difference between the two dams.\n\n(A) The Halvern Dam and the Roska Dam were both built on the Vell River.\n(B) The Halvern Dam was completed in 1936 and generates electricity for about 40,000 homes.\n(C) Unlike the older Halvern Dam, the Roska Dam includes a fish ladder for migrating salmon.\n(D) The Roska Dam, completed in 2019, includes a fish ladder for migrating salmon.',
    steps: [
      { label: 'Decompose the goal', content: 'Verb: *emphasize*. Focus: *a difference*. Relation: between **both** dams. Signature: the answer must contain both dams and an explicit difference word, and must state the difference itself.' },
      { label: 'Strike by feature', content: '(A) contains both dams but asserts a *similarity* — the opposite relation, killable on the marker alone. (B) and (D) each describe one dam only; a sentence about one thing cannot state a difference between two.' },
      { label: 'Fact-check the survivor', content: '(C): both dams present, difference word (*Unlike*), and the stated difference — the fish ladder — matches the fourth bullet exactly. No invented facts.' },
      { label: 'Answer', content: '**(C)**. Note what was never needed: the electricity figures, the completion dates. The goal, not the notes, decided which facts mattered.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Notes:\n- Marine biologist Ines Falk studies bioluminescent plankton, tiny organisms that produce their own light.\n- In 2033 she began a five-year survey to determine whether warming water shifts the timing of the plankton\'s nightly glow.\n- Early data show glow times drifting about twenty minutes later per decade of warming.\n- The survey uses underwater cameras at twelve fixed stations in the Baltic Sea.\n\nThe student wants to explain the aim of Falk\'s survey to an audience unfamiliar with her research.\n\n(A) Falk\'s early data show glow times drifting about twenty minutes later per decade of warming.\n(B) In 2033, Falk began a five-year survey to determine whether warming water shifts the timing of the plankton\'s nightly glow.\n(C) Marine biologist Ines Falk studies bioluminescent plankton, tiny organisms that produce their own light.\n(D) In 2033, marine biologist Ines Falk began a survey to determine whether warming water shifts when bioluminescent plankton, tiny organisms that produce their own light, give off their nightly glow.',
    steps: [
      { label: 'Decompose the goal', content: 'Two parts welded together: (1) the **aim** of the survey — intent framing, what Falk set out to learn, not what she found; (2) an **unfamiliar audience** — the answer must say who Falk is and what the plankton are.' },
      { label: 'Predict the signature', content: 'The right answer needs an intent verb (*to determine whether*) AND a background clause (her role, the organisms defined). Each distractor on a two-part goal will carry exactly one of these.' },
      { label: 'Strike by feature', content: '(A) is results framing — the interesting finding, offered where the aim was asked — and it opens with a bare surname. (B) has the aim but no background: surname only, plankton undefined. (C) has the background but no aim at all: it never mentions the survey. Three subsets, three strikes.' },
      { label: 'Answer', content: '**(D)** — the only choice that welds both parts: full name and role, the plankton defined in passing, and the survey\'s purpose in intent framing. It is also the longest choice, which is what carrying every required feature tends to produce. Fact-check against the bullets: every claim is there. **Answer: (D).**' },
    ],
  },
  {
    type: 'checkpointQuestion',
    number: 2,
    question: 'Every answer choice contains only facts that appear in the notes, and none is false. How do you still eliminate three of them?',
    answer: 'By checking each against the decomposed goal: verb performed, focus matched at the right level, audience or relation honored. **Why:** the choices are all true by design, so truth has zero separating power — the rhetorical job named by the goal is the only variable that differs across the four.',
  },
  {
    type: 'checkpointQuestion',
    number: 3,
    question: 'The goal asks you to emphasize a similarity between two ceramicists. A choice describes both of them — one\'s training, the other\'s studio. Does mentioning both satisfy the goal?',
    answer: 'No. A comparison answer must **assert** the likeness with an explicit marker — *like, similarly, both…share* — on a common point. **Why:** two facts placed side by side state no relation; the both-subjects-no-relation choice is a designed distractor, and the missing likeness word is the feature that kills it.',
  },
  {
    type: 'checkpointQuestion',
    number: 4,
    question: 'The goal says *"to an audience already familiar with the novelist\'s work."* One choice opens by explaining who the novelist is and naming her best-known book. Fit or not?',
    answer: 'Not a fit. **Why:** the audience clause cuts both ways — an unfamiliar audience makes background mandatory, and a familiar one makes it disqualifying. Re-explaining what the stated audience already knows is the mirror-image trap of the expert-audience answer.',
  },
  {
    type: 'checkpointQuestion',
    number: 5,
    question: 'At what point in the method do you finally read the bulleted notes closely, and for what single purpose?',
    answer: 'Last — Step 4 — and only to fact-check the surviving choice (or break a tie between two survivors): no invented facts, no unearned superlatives, no cause-and-effect the notes never state. **Why:** the notes are a verification tool, not a starting point; reading them first floods working memory with facts that make every choice feel supported.',
  },

  { type: 'heading', content: 'One-page summary' },
  {
    type: 'table',
    title: 'Goal verb, answer signature',
    headers: ['Goal verb', 'What the right answer must contain'],
    rows: [
      ['Introduce X (unfamiliar audience)', 'X named plainly — full name, who or what X is — plus the focus itself; background is mandatory'],
      ['Present X (familiar audience)', 'The focus with no re-explained basics — background here marks a choice wrong'],
      ['Compare / contrast A and B', 'Both A and B plus an explicit likeness or difference word; co-mention is not comparison'],
      ['Emphasize a difference (or similarity)', 'The difference or likeness itself, stated outright on a shared point'],
      ['State the aim of a study', 'Intent framing — *set out to, to determine whether* — never the findings'],
      ['Emphasize variety / range', 'Several kinds listed or characterized; one vivid example fails'],
      ['Specify a detail', 'The exact detail at the exact category level — neighbors and supersets are wrong'],
    ],
  },
  {
    type: 'text',
    content: 'That is the entire skill: skip the bullets, decompose the goal into verb + focus + audience, predict the signature, strike every choice missing a required feature, and fact-check the one survivor. The question contains its own answer key — the goal sentence is the lock, and only one key fits.',
  },
];
