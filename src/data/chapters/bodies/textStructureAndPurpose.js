/**
 * Learn lesson body — Text Structure & Purpose (Craft & Structure).
 *
 * TUTOR VOICE (adopted 2026-07-14, user-approved exemplar:
 * bodies/mLinearEquations.js): coaching direct-address — talks TO the student,
 * anticipates the mistake before it happens, everyday anchor first and method
 * second, concrete decision rules. Lean structure unchanged: short headed
 * sections, a verb table, 4 worked examples, 3 checkpoints. Invented
 * passages/choices inside examples stay authentic test material. Gated by
 * bodies.test.js.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const textStructureAndPurposeBlocks = [
  {
    type: 'text',
    content: "Ask what a sentence does for a living. That's the whole skill: purpose and function questions ask **why** something is on the page — the job it does — not **what** it says. Here's where these get lost: you retell the content. A summary and a purpose sound almost identical, but they live on different levels — one reports the words, the other reports the work those words do. Answer with a *verb* — *to introduce, to qualify, to give an example* — and you land on the right level automatically.",
  },

  { type: 'heading', content: 'The one question behind three stems' },
  {
    type: 'text',
    content: "You'll see *\"main purpose of the text,\"* *\"overall structure of the text,\"* and *\"function of the underlined sentence.\"* Three costumes, one question: **why did the author write this?** So don't summarize what the passage *says* — the credited answer names what it *does*. Once you hear that shared question under all three stems, one move solves every version: name the job, lead with a verb, and check that it covers the grain the stem asks about.",
  },

  { type: 'heading', content: 'Answer with a verb' },
  {
    type: 'text',
    content: "Purpose answers start with an infinitive: *to explain, to challenge, to illustrate.* Quick self-test: if your answer is a claim somebody could argue with, you're still describing the *point* — climb one level up to the *job*. \"Trees save cities money\" is a point; *to argue that trees save cities money* is a job. These are the verbs the choices are built from:",
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
    content: "Don't judge the sentence in isolation — a function only exists in company. Ask what job it does for the sentences **around** it: does it set up a contrast, give evidence for the claim before it, define a term, concede a point? Read one sentence up and one sentence down. And here's a directional habit worth building: support points *upward* — the claim a detail serves almost always sits just before it.",
  },
  {
    type: 'keyInsight',
    content: "On a function question, the choice that merely **restates what the sentence says** is the trap — and it tempts you precisely because every word of it is true. A summary names no job. The credited answer carries a verb — *supports, introduces, qualifies* — plus the claim it serves.",
  },

  { type: 'heading', content: 'Main purpose = the whole shape in one line' },
  {
    type: 'text',
    content: "For *\"main purpose of the text,\"* compress the whole passage into one line and lead with a verb: *to correct a common belief about X.* Then check the zoom. The right answer covers the **whole** passage, not its most memorable sentence — and the passage's most vivid detail makes the most seductive wrong answer. True, but too small. Wrong grain, not wrong facts.",
  },

  { type: 'heading', content: "Tone = the author's stance" },
  {
    type: 'text',
    content: "Tone is how the *author* regards the topic — a separate dial from whether the subject itself is sad or cheerful. Read it off the **evaluative words**: *striking, dubious, so-called, elegant.* And learn the house style: SAT prose is measured, so extreme stances (*mocks, ridicules, proves*) are almost always wrong. When two verbs point the same direction, take the calmer one: *questions* over *ridicules*, *suggests* over *proves.*",
  },
  {
    type: 'tip',
    content: 'Say the answer in your own words before you read a single choice. Then eliminate **verbs first** — cut any verb with the wrong direction or too much force — and only then check the noun. Half the choices die on their first word.',
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'For decades the cave paintings were dismissed as idle decoration. But when researchers mapped their placement, a pattern emerged: the images cluster exactly where the cave amplifies sound. The paintings, it seems, marked the chamber\'s best spots for song.\n\nWhich choice best states the main purpose of the text?\n\n(A) To describe how researchers measure sound inside caves\n(B) To explain how a new finding revised an old assumption\n(C) To criticize the scholars who first studied the paintings',
    steps: [
      { label: 'Find the point', content: 'One arguable sentence: *the paintings marked good spots for sound, not mere decoration.* Trace the arc: old view, new evidence (*but*), revised conclusion.' },
      { label: 'Say it as a verb', content: 'The passage updates a belief with evidence — an *explain / revise* job. Your prediction: *to explain how a finding changed what people thought.*' },
      { label: 'Eliminate', content: "(A) *describe the method* — that's one sentence's job, wrong grain. (C) *criticize* — too much force; the old view gets corrected, not attacked." },
      { label: 'Answer', content: '**(B).** It covers all three beats — old assumption, new finding, revision — at the right altitude.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'City planners often treat street trees as decoration, cut first when budgets tighten. A mature oak, though, soaks up thousands of gallons of stormwater a year. **One study valued a single city\'s trees at millions of dollars annually.** Numbers like that are quietly moving trees onto the infrastructure budget.\n\nWhich choice best describes the function of the underlined sentence?\n\n(A) It concedes that a tree\'s value is hard to measure.\n(B) It gives a figure that supports the claim that trees do real work.\n(C) It explains the method the study used.',
    steps: [
      { label: 'Widen the window', content: "Read one up, one down. Before: the oak's concrete benefit (stormwater). After: those numbers change how cities budget. The sentence sits between a claim and its consequence." },
      { label: 'Name the job', content: 'It attaches a dollar figure to the benefit just stated — *gives evidence supporting the claim that trees are more than decoration.* Support points up: the claim it serves came first.' },
      { label: 'Eliminate', content: '(A) *concedes* — nothing gets granted to the other side. (C) *explains the method* — no method appears anywhere; that choice is built from content the passage never gives.' },
      { label: 'Answer', content: '**(B).** The only choice written as a job: a verb (*supports*) plus the claim it serves.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'The comet was, admittedly, a modest sight — no blazing tail, just a smudge low on the horizon. And yet the townspeople gathered nightly to watch it, tracing its slow creep against the fixed stars with a patience the author plainly admires.\n\nWhich choice best describes the author\'s attitude toward the townspeople?\n\n(A) Gently approving of their devoted attention\n(B) Dismissive of their fascination with a dull object\n(C) Alarmed by their superstition',
    steps: [
      { label: 'Split topic from stance', content: "The comet is unremarkable — that's the topic. The author's stance is a separate dial; read it from evaluative words, not from how plain the comet is." },
      { label: 'Collect stance carriers', content: '*and yet, patience, plainly admires.* The concession (*modest sight*) gets granted only to set up the admiration that follows.' },
      { label: 'Match the strength', content: '(B) *dismissive* — wrong direction; the author admires them. (C) *alarmed by superstition* — invented; no fear or superstition on the page. (A) *gently approving* — right direction, calm force.' },
      { label: 'Answer', content: '**(A).** *Admires* earns approval, and nothing on the page pushes it any louder.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'For years, engineers blamed the footbridge\'s alarming sway on gusts of wind. But new sensors traced most of the motion to the crowd itself: pedestrians unconsciously fell into step with the bridge\'s wobble, feeding it. The finding is now reshaping how busy walkways are designed.\n\nWhich choice best describes the overall structure of the text?\n\n(A) A long-accepted explanation is presented and then replaced by a better-supported one.\n(B) A problem is described, and several competing solutions are weighed against each other.\n(C) A general claim is stated and then supported with a series of examples.',
    steps: [
      { label: 'Trace the shape, not the topic', content: 'Beat one: the old belief (wind). Beat two, at *but*: sensor evidence points to the crowd instead. Beat three: the finding changes design. Old view, then a replacement.' },
      { label: 'Say it as a structure', content: 'Your prediction: *an accepted explanation gets overturned by new evidence.* Lead with the shape, not any single detail.' },
      { label: 'Eliminate', content: "(B) *competing solutions weighed* — the passage weighs two causes, not solutions, and never lines up rival fixes. (C) *a series of examples* — there's one cause and one study, not a list." },
      { label: 'Answer', content: '**(A).** It names the whole three-beat shape — old explanation, better-supported replacement — at the right altitude.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'A function choice reads: *"It states that the glacier retreated two miles."* The underlined sentence does say exactly that. Keep or cut, and why?',
    answer: "**Cut.** Every word of it is accurate — and it still names no job. That's the summary trap doing exactly what it was built to do. The stem asks what the sentence *does* for the argument (gives evidence? sets up a contrast?), and the credited answer will carry a verb plus the claim it serves.",
  },
  {
    type: 'checkpointQuestion',
    question: 'On a main-purpose item, a choice says the passage *"mocks the early theorists."* The passage calls their conclusion reasonable for its time, then presents newer data. Keep or cut?',
    answer: '**Cut, on the verb.** *Mocks* points the wrong direction and swings far too hard — the passage corrects respectfully; it never ridicules. A verb the wording doesn\'t earn kills the choice even when the topic is dead right. Check force as well as direction.',
  },
  {
    type: 'checkpointQuestion',
    question: 'On a *main purpose of the text* item, a choice accurately describes the passage\'s single most vivid example. Keep or cut, and why?',
    answer: "**Cut, on the grain.** A main-purpose answer covers the *whole* passage, and one example — however vivid — is only a piece of it. True, but far too small. The credited choice names the job the entire text does; a choice zoomed in on one memorable detail is at the wrong altitude.",
  },

  {
    type: 'text',
    content: "**The move, every time:** ask *why is this here,* answer with a verb, check the verb's direction and force, check it covers the whole grain the stem asks about — and when two verbs survive, take the calmer one.",
  },
];
