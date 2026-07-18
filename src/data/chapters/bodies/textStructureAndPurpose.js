/**
 * Learn lesson body — Text Structure & Purpose (Craft & Structure).
 *
 * VOICE v4 (adopted 2026-07-18, exemplar: bodies/centralIdeas.js):
 * practiced-tutor register — developed 2-5 sentence paragraphs with
 * connective tissue; every rule earns its "because"; student-psychology
 * named concretely; math teaching is example-led; varied rhythm, no
 * aphorism-per-block. Bans carried from v3: no analogies, no pep talk,
 * no exclamation marks, no emojis, no test-personification. All v3
 * teaching claims preserved.
 *
 * COMPOSED MODE (2026-07-18): chapterOpener lede + auto-numbered
 * sections/examples/figures + aside margin-notes + summary close
 * (exemplar: bodies/mPercents.js).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const textStructureAndPurposeBlocks = [
  {
    type: 'chapterOpener',
    lede: "We've been working at the scale of a single word. Now we widen out to the architecture of the whole passage — why a sentence or paragraph is there at all. Purpose and function questions ask **why** something appears on the page — the job it does — not **what** it says, and that one-level difference is where nearly every miss on these items comes from.",
  },
  {
    type: 'text',
    content: "The classic mistake is retelling the content, and it's an understandable one, because a summary and a purpose sound nearly identical. They work on different levels, though: one reports the words, the other reports the work those words do. The fix is grammatical — frame your answer as a *verb*, *to introduce, to qualify, to give an example*, and you land on the right level automatically, because a verb can only ever name a job.",
  },

  { type: 'heading', content: 'Three stems, one question' },
  {
    type: 'text',
    content: "Three stems recur: *\"main purpose of the text,\"* *\"overall structure of the text,\"* and *\"function of the underlined sentence.\"* All three ask the same underlying question — **why did the author write this?** — so the credited answer names what the passage *does*, not what it *says*. That shared root is convenient, because one method then serves every version: name the job, lead with a verb, and check that your answer covers the span the stem asks about.",
  },

  { type: 'heading', content: 'Answer with a verb' },
  {
    type: 'text',
    content: "Purpose answers start with an infinitive — *to explain, to challenge, to illustrate* — and there's a quick self-test for whether you've actually produced one. If your answer is a claim somebody could argue with, it's still describing the *point*, not the *job*, and you've stopped one level too low: \"trees save cities money\" is a point, while *to argue that trees save cities money* is a job. The answer choices themselves are built from a small set of recurring verbs, each with conditions the passage has to meet before the verb is earned:",
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
    content: "A sentence's function exists only in relation to its neighbors, so judging it in isolation isn't just risky — there's nothing there to judge. Read one sentence above and one below, and work out what job the underlined sentence does for the sentences **around** it: setting up a contrast, giving evidence for the claim before it, defining a term, conceding a point. One directional pattern is reliable enough to lean on — support points *upward*, because the claim a detail serves almost always sits just before it.",
  },
  {
    type: 'aside',
    kind: 'watch',
    content: "The standard trap on a function question is the choice that merely **restates what the sentence says** — attractive precisely because every word of it is true. A summary names no job. The credited answer carries a verb — *supports, introduces, qualifies* — plus the claim it serves.",
  },

  { type: 'heading', content: 'Scope: the whole passage, not the best sentence' },
  {
    type: 'text',
    content: "For *\"main purpose of the text,\"* compress the whole passage into one line that leads with a verb — *to correct a widespread belief about X* — and then check the scope, because scope is where these items are actually lost. The right answer covers the **whole** passage, not its most memorable sentence. The passage's most vivid detail supplies the most attractive wrong answer, written for the reader who remembers that detail best: true in every word, and too narrow to be the purpose of the text. Those choices fail on scope, not on facts, which is why checking facts alone never catches them.",
  },

  { type: 'heading', content: "Tone: the author's stance" },
  {
    type: 'text',
    content: "Tone is how the *author* regards the topic, and that's a separate question from whether the subject itself is somber or cheerful — a passage about a shipwreck can be written with cool detachment, and a passage about gravel can glow with admiration. Read the stance from the **evaluative words**, the small judgments the author drops in: *striking*, *dubious*, *so-called*, *elegant*. Those words are the only places the author's own attitude touches the page, so they outrank any impression the subject matter leaves.",
  },
  {
    type: 'aside',
    kind: 'remember',
    content: "Test passages are written in a measured register, and that fact does elimination work for you: extreme stances (*mocks, ridicules, proves*) are almost always wrong because the prose never runs that hot. When two verbs point the same direction, take the calmer one — *questions* over *ridicules*, *suggests* over *proves.*",
  },
  {
    type: 'tip',
    content: 'State the answer in your own words before reading any choice. Then eliminate by **verb first** — cut any verb with the wrong direction or too much force — and only then check the noun. Many choices die on their first word.',
  },

  { type: 'heading', content: 'Poetry: find the turn' },
  {
    type: 'text',
    content: "A poem's structure yields to the same analysis as prose once you identify its units. **Treat stanzas as paragraphs** — each one advances, develops, or reverses what came before — and read line breaks as pauses rather than stops, because a poem's sentences routinely run across several lines and the meaning lives in the sentence, not the line.",
  },
  {
    type: 'text',
    content: "The structural hinge of most tested poems is the **turn**: the point where something shifts — the speaker's stance, the time frame, the addressee, or the governing image. That hinge is why a structure answer for a poem almost always names the two sides of the turn and the relation between them: *a memory is recounted, then its meaning is reconsidered*; *a scene is described, then the speaker addresses the person absent from it.*",
  },
  {
    type: 'table',
    headers: ['Device', 'What it looks like', 'The job it typically performs'],
    rows: [
      ['direct address', 'the speaker turns to speak *to* a person or thing (*O river...*, *you who come after*)', 'shifts description into appeal; often marks the turn itself'],
      ['extended comparison', 'one comparison sustained across stanzas (memory treated as a locked house throughout)', 'organizes the whole poem — the framework for the subject, not a description of real objects'],
      ['concrete image', 'a single physical detail set amid abstract statement', 'grounds or sharpens the abstract claim beside it — judged by what it does *for* that claim'],
    ],
  },
  {
    type: 'text',
    content: "Function questions on these devices follow the prose standard exactly: the credited answer names the **job**, not the content. So when a poem sustains one comparison for four stanzas, that comparison is the poem's organizing framework, and its function is to structure the treatment of the subject. A choice that reads the image literally — as though the poem were about the house rather than about memory — has mistaken the device for the topic.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A poem describes a coastline in the past tense for three stanzas; the final stanza shifts to the present and addresses the sea directly. A structure choice says the poem *"catalogs the physical features of a shoreline."* Keep or cut?',
    answer: "**Cut, on the scope.** The final stanza is the turn — tense and addressee both shift — and a structure answer covers both sides of it. A catalog-of-features choice describes only the first three stanzas and misses the shift that organizes the poem. Scope fails here exactly as it does on a prose main-purpose item.",
  },

  { type: 'heading', content: 'How to approach these questions' },
  {
    type: 'steps',
    items: [
      "**Name the span.** One underlined sentence, the overall structure, or the whole passage? The stem tells you which.",
      "**Ask why, not what.** For an underlined sentence, read one sentence above and one below; for a main purpose, compress the whole passage into one line.",
      "**Lead with a verb.** State the job in your own words — *to introduce, to support, to qualify* — before reading any choice.",
      "**Eliminate verb-first.** Cut wrong direction and excessive force, then check the noun.",
      "**Check the scope.** The credited answer covers the full span the stem asks about — not just the most vivid detail.",
    ],
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'For decades the cave paintings were dismissed as idle decoration. But when researchers mapped their placement, a pattern emerged: the images cluster exactly where the cave amplifies sound. The paintings, it seems, marked the chamber\'s best spots for song.\n\nWhich choice best states the main purpose of the text?\n\n(A) To describe how researchers measure sound inside caves\n(B) To explain how a new finding revised an old assumption\n(C) To criticize the scholars who first studied the paintings',
    steps: [
      { label: 'Find the point', content: 'The passage\'s one arguable sentence: *the paintings marked good spots for sound, not mere decoration.* The arc runs old view, new evidence (*but*), revised conclusion.' },
      { label: 'State it as a verb', content: 'The passage updates a belief with evidence — an *explain / revise* job. Prediction: *to explain how a finding changed what people thought.*' },
      { label: 'Eliminate', content: "(A) *describe the method* — the job of one sentence, so the scope is too narrow. (C) *criticize* — too much force; the old view is corrected, not attacked." },
      { label: 'Answer', content: '**(B).** It covers all three stages — old assumption, new finding, revision — at the right scope.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'City planners often treat street trees as decoration, cut first when budgets tighten. A mature oak, though, soaks up thousands of gallons of stormwater a year. **One study valued a single city\'s trees at millions of dollars annually.** Numbers like that are quietly moving trees onto the infrastructure budget.\n\nWhich choice best describes the function of the underlined sentence?\n\n(A) It concedes that a tree\'s value is hard to measure.\n(B) It gives a figure that supports the claim that trees do real work.\n(C) It explains the method the study used.',
    steps: [
      { label: 'Read the surrounding sentences', content: "Read one sentence above and one below. Before: the oak's tangible benefit (stormwater). After: those numbers change how cities budget. The sentence sits between a claim and its consequence." },
      { label: 'Name the job', content: 'It attaches a dollar figure to the benefit just stated — *gives evidence supporting the claim that trees are more than decoration.* Support points upward: the claim it serves comes first.' },
      { label: 'Eliminate', content: '(A) *concedes* — nothing is granted to the other side. (C) *explains the method* — no method appears anywhere; the choice is built from content the passage never provides.' },
      { label: 'Answer', content: '**(B).** The only choice written as a job: a verb (*supports*) plus the claim it serves.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'The comet was, admittedly, a modest sight — no blazing tail, just a smudge low on the horizon. And yet the townspeople gathered nightly to watch it, tracing its slow creep against the fixed stars with a patience the author plainly admires.\n\nWhich choice best describes the author\'s attitude toward the townspeople?\n\n(A) Gently approving of their devoted attention\n(B) Dismissive of their fascination with a dull object\n(C) Alarmed by their superstition',
    steps: [
      { label: 'Separate topic from stance', content: "The comet is unremarkable — that's the topic. The author's stance is a separate question; read it from the evaluative words, not from how plain the comet is." },
      { label: 'Collect the evaluative words', content: '*and yet, patience, plainly admires.* The concession (*modest sight*) is granted only to set up the admiration that follows.' },
      { label: 'Match the strength', content: '(B) *dismissive* — wrong direction; the author admires them. (C) *alarmed by superstition* — invented; no fear or superstition appears on the page. (A) *gently approving* — right direction, calm force.' },
      { label: 'Answer', content: '**(A).** *Admires* supports approval, and nothing on the page justifies a stronger stance.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'For years, engineers blamed the footbridge\'s alarming sway on gusts of wind. But new sensors traced most of the motion to the crowd itself: pedestrians unconsciously fell into step with the bridge\'s wobble, feeding it. The finding is now reshaping how busy walkways are designed.\n\nWhich choice best describes the overall structure of the text?\n\n(A) A long-accepted explanation is presented and then replaced by a better-supported one.\n(B) A problem is described, and several competing solutions are weighed against each other.\n(C) A general claim is stated and then supported with a series of examples.',
    steps: [
      { label: 'Trace the shape, not the topic', content: 'First stage: the old belief (wind). Second, at *but*: sensor evidence points to the crowd instead. Third: the finding changes design. An old view, then a replacement.' },
      { label: 'State it as a structure', content: 'Prediction: *an accepted explanation is overturned by new evidence.* Lead with the shape, not any single detail.' },
      { label: 'Eliminate', content: "(B) *competing solutions weighed* — the passage weighs two causes, not solutions, and never compares rival fixes. (C) *a series of examples* — there's one cause and one study, not a list." },
      { label: 'Answer', content: '**(A).** It names the whole three-stage shape — old explanation, better-supported replacement — at the right scope.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'A function choice reads: *"It states that the glacier retreated two miles."* The underlined sentence does say exactly that. Keep or cut, and why?',
    answer: "**Cut.** Every word of it is accurate, and it still names no job — the standard summary distractor. The stem asks what the sentence *does* for the argument (giving evidence, setting up a contrast), and the credited answer will carry a verb plus the claim it serves.",
  },
  {
    type: 'checkpointQuestion',
    question: 'On a main-purpose item, a choice says the passage *"mocks the early theorists."* The passage calls their conclusion reasonable for its time, then presents newer data. Keep or cut?',
    answer: "**Cut, on the verb.** *Mocks* points in the wrong direction and carries far too much force — the passage corrects respectfully; it never ridicules. A verb the wording doesn't support eliminates the choice even when the topic is exactly right. Check force as well as direction.",
  },
  {
    type: 'checkpointQuestion',
    question: 'On a *main purpose of the text* item, a choice accurately describes the passage\'s single most vivid example. Keep or cut, and why?',
    answer: "**Cut, on the scope.** A main-purpose answer covers the *whole* passage, and one example — however vivid — is only a piece of it: true, but far too narrow. The credited choice names the job the entire text performs; a choice confined to one memorable detail operates at the wrong level.",
  },

  {
    type: 'summary',
    title: 'The whole skill in four checks',
    points: [
      'Ask **why** the sentence or passage is there — the job it does, not what it says.',
      'Answer with a **verb** — an infinitive that names a job, not a claim someone could argue with.',
      "Test the verb's **direction and force**; when two verbs survive, take the calmer one.",
      'Confirm the answer covers the full **span** the stem asks about — not just the most vivid detail.',
    ],
  },
];
