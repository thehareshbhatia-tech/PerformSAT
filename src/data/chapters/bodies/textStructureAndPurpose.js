/**
 * Learn lesson body — Text Structure & Purpose (Craft & Structure).
 *
 * NEW lean "review / cheat-sheet" style (voice + shape exemplar:
 * bodies/gSubjectVerbAgreement.js): one-sentence lede, a few short headed
 * sections, a scannable verb table, then worked examples and check-yourself
 * questions. Gated by bodies.test.js (lean contract).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const textStructureAndPurposeBlocks = [
  {
    type: 'text',
    content: 'Purpose and function questions ask **why** something is on the page — the job it does — not **what** it says. The trick is to answer with a *verb*: *to introduce, to qualify, to give an example.*',
  },

  { type: 'heading', content: 'The one question behind three stems' },
  {
    type: 'text',
    content: 'You will see *"main purpose of the text,"* *"overall structure of the text,"* and *"function of the underlined sentence."* All three ask the same thing: **why did the author write this?** So stop summarizing what the passage *says* — the right answer names what it *does*.',
  },

  { type: 'heading', content: 'Answer with a verb' },
  {
    type: 'text',
    content: 'Purpose answers start with an infinitive: *to explain, to challenge, to illustrate.* If your answer is a claim you could argue with, you are still describing the *point* — climb one level up to the *job.* These are the verbs the choices are built from.',
  },
  {
    type: 'table',
    headers: ['Verb', 'The job it names', 'What the passage must contain'],
    rows: [
      ['introduce', 'bring up an idea for the first time', 'the idea appears, then gets developed'],
      ['illustrate', 'give a concrete example of a claim', 'a general claim the example serves'],
      ['qualify', 'limit a claim — true, but only sometimes', '*in some cases, only when, to a degree*'],
      ['concede', 'grant a point that cuts against the author', 'an opposing point admitted, usually before a pivot'],
      ['challenge / criticize', 'push against a view or finding', 'a real target plus words pushing against it'],
      ['contrast', 'set two things side by side', 'two things genuinely on the page'],
    ],
  },

  { type: 'heading', content: 'Function of an underlined sentence' },
  {
    type: 'text',
    content: 'Do not describe the sentence in isolation. Ask what job it does for the sentences **around** it: does it set up a contrast, give evidence for the claim before it, define a term, concede a point? Read one sentence up and one down. Support usually points *upward* — the claim a detail serves almost always sits just before it.',
  },
  {
    type: 'keyInsight',
    content: 'On a function question, the choice that merely **restates what the sentence says** is the trap. A summary names no job. The right answer contains a verb — *supports, introduces, qualifies* — plus the claim it serves.',
  },

  { type: 'heading', content: 'Main purpose = the whole shape in one line' },
  {
    type: 'text',
    content: 'For *"main purpose of the text,"* compress the whole passage to one sentence and lead with a verb: *to correct a common belief about X.* The right answer covers the **whole** passage, not its most memorable sentence. A choice that describes one vivid detail is at the wrong grain — true, but too small.',
  },

  { type: 'heading', content: "Tone = the author's stance" },
  {
    type: 'text',
    content: 'Tone is *how the author regards the topic,* read from the **evaluative words** (*striking, dubious, so-called, elegant*) — not from whether the subject is sad or cheerful. SAT prose is measured, so extreme stances (*mocks, ridicules, proves*) are almost always wrong. Pick the calmer verb: *questions* over *ridicules*, *suggests* over *proves.*',
  },
  {
    type: 'tip',
    content: 'Before reading the choices, say the answer in your own words. Then eliminate **verbs first** — cut any verb with the wrong direction or too much force — and only then check the noun.',
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'For decades the cave paintings were dismissed as idle decoration. But when researchers mapped their placement, a pattern emerged: the images cluster exactly where the cave amplifies sound. The paintings, it seems, marked the chamber\'s best spots for song.\n\nWhich choice best states the main purpose of the text?\n\n(A) To describe how researchers measure sound inside caves\n(B) To explain how a new finding revised an old assumption\n(C) To criticize the scholars who first studied the paintings',
    steps: [
      { label: 'Find the point', content: 'One arguable sentence: *the paintings marked good spots for sound, not mere decoration.* The arc: old view, new evidence (*but*), revised conclusion.' },
      { label: 'Say it as a verb', content: 'The passage updates a belief with evidence — an *explain / revise* act. Prediction: *to explain how a finding changed what people thought.*' },
      { label: 'Eliminate', content: '(A) *describe the method* — one sentence\'s job, wrong grain. (C) *criticize* — the old view is corrected, not attacked; wrong direction.' },
      { label: 'Answer', content: '**(B).** It covers all three beats — old assumption, new finding, revision — at the right altitude.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'City planners often treat street trees as decoration, cut first when budgets tighten. A mature oak, though, soaks up thousands of gallons of stormwater a year. **One study valued a single city\'s trees at millions of dollars annually.** Numbers like that are quietly moving trees onto the infrastructure budget.\n\nWhich choice best describes the function of the underlined sentence?\n\n(A) It concedes that a tree\'s value is hard to measure.\n(B) It gives a figure that supports the claim that trees do real work.\n(C) It explains the method the study used.',
    steps: [
      { label: 'Widen the window', content: 'Before: the oak\'s concrete benefit (stormwater). After: those numbers change how cities budget. The sentence sits between a claim and its consequence.' },
      { label: 'Name the job', content: 'It attaches a dollar figure to the benefit just stated — *gives evidence supporting the claim that trees are more than decoration.* Support points up: the served claim came first.' },
      { label: 'Eliminate', content: '(A) *concedes* — nothing is granted to the other side. (C) *explains the method* — no method appears; built from content the passage never gives.' },
      { label: 'Answer', content: '**(B).** The only choice written as a job: a verb (*supports*) plus the claim it serves.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'The comet was, admittedly, a modest sight — no blazing tail, just a smudge low on the horizon. And yet the townspeople gathered nightly to watch it, tracing its slow creep against the fixed stars with a patience the author plainly admires.\n\nWhich choice best describes the author\'s attitude toward the townspeople?\n\n(A) Gently approving of their devoted attention\n(B) Dismissive of their fascination with a dull object\n(C) Alarmed by their superstition',
    steps: [
      { label: 'Split topic from stance', content: 'Topic: an unremarkable comet. Stance is a separate dial — read it from evaluative words, not from how plain the comet is.' },
      { label: 'Collect stance carriers', content: '*and yet, patience, plainly admires.* The concession (*modest sight*) is granted only to set up the admiration that follows.' },
      { label: 'Match the strength', content: '(B) *dismissive* — wrong direction; the author admires them. (C) *alarmed by superstition* — invented; no fear or superstition on the page. (A) *gently approving* — right direction, calm strength.' },
      { label: 'Answer', content: '**(A).** *Admires* earns approval, and nothing pushes it to a stronger word.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'A function choice reads: *"It states that the glacier retreated two miles."* The underlined sentence does say exactly that. Keep or cut, and why?',
    answer: '**Cut.** That is an accurate summary, not a function — it names no job. The stem asks what the sentence *does* for the argument (gives evidence? sets up a contrast?), and the credited answer will contain a verb plus the claim it serves.',
  },
  {
    type: 'checkpointQuestion',
    question: 'On a main-purpose item, a choice says the passage *"mocks the early theorists."* The passage calls their conclusion reasonable for its time, then presents newer data. Keep or cut?',
    answer: '**Cut, on the verb.** *Mocks* has the wrong direction and far too much force — the passage corrects respectfully, it does not ridicule. A verb the wording does not earn kills the choice even when the topic is right.',
  },

  {
    type: 'text',
    content: '**The move, every time:** ask *why is this here,* answer with a verb, check it covers the whole grain the stem asks about, and pick the calmer verb over the louder one.',
  },
];
