/**
 * Learn lesson body — Words in Context (Craft and Structure).
 *
 * VOICE v3 (adopted 2026-07-17, exemplar: bodies/centralIdeas.js): scannable
 * instructional register — direct address, contractions, 1-3 sentence text
 * blocks, list blocks for criteria, steps blocks for procedures; no analogies,
 * no pep-talk, no emojis. All substance of the v2 textbook version preserved.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const wordsInContextBlocks = [
  {
    type: 'text',
    content: "So far we've worked with what a passage states, implies, and can prove. Now we turn to how a passage is built — starting at the smallest scale, the single word.",
  },
  {
    type: 'text',
    content: "A words-in-context question doesn't test whether you already know a word. The sentence itself decides which word belongs in the blank.",
  },
  {
    type: 'text',
    content: "So despite its looks, this isn't a vocabulary quiz — it's a reading question, and the sentence contains everything you need. **The evidence in the sentence decides the meaning — a dictionary definition on its own decides nothing.**",
  },

  { type: 'heading', content: "What's actually tested" },
  {
    type: 'text',
    content: "Memorized word lists won't carry you far here. Every item plants **evidence** — a few nearby words that pin the blank to exactly one meaning — and your job is to find that evidence and read what it forces.",
  },
  {
    type: 'text',
    content: "The predictable mistake: skipping straight to the choices and picking whatever sounds most sophisticated. That word is routinely included precisely because it sounds impressive while failing the sentence.",
  },
  {
    type: 'text',
    content: "The right word is the one the sentence selects. So read the evidence before weighing any choice.",
  },

  { type: 'heading', content: 'The method: predict, then match' },
  {
    type: 'steps',
    title: 'The three-step routine',
    items: [
      "**Cover the choices.** Read them first and the plausible-sounding options start shaping your judgment before the sentence has defined the target.",
      "**Predict your own word** from the evidence in the sentence. Rough is fine — \"something like *cautious*\" is a workable prediction.",
      "**Uncover and match.** Pick the choice closest to your prediction, then read it back into the sentence to confirm the surrounding words support it.",
    ],
  },
  {
    type: 'keyInsight',
    content: "Predicting first flips the dynamic: your prediction sets the target, and the choices get graded against it — instead of the most persuasive distractor setting the target itself.",
  },

  { type: 'heading', content: 'Check the charge first' },
  {
    type: 'text',
    content: "Before defining anything precisely, decide the **charge** the blank requires:",
  },
  {
    type: 'list',
    items: [
      "**Positive** — the sentence's own words praise",
      '**Negative** — they criticize',
      '**Neutral** — they simply report',
    ],
  },
  {
    type: 'text',
    content: "The sentence almost always signals the charge, and a choice on the wrong side of it is out immediately — no finer meaning work required. In *Critics called the plan reckless, and its ______ soon showed*, the blank is negative: *flaws* or *costs*, never *benefits*.",
  },

  { type: 'heading', content: 'Connectors: which way does the evidence point?' },
  {
    type: 'text',
    content: "The **connector** links the evidence to the blank and tells you whether the blank echoes the nearby idea or reverses it. Same evidence, different connector, opposite answer: *praised, and its ______* wants a positive word; *praised, but its ______* wants a negative one.",
  },
  {
    type: 'text',
    content: "Read the connector before you predict — it decides which direction the evidence points. Connectors come in three families:",
  },
  {
    type: 'table',
    headers: ['Connector', 'It means the blank…', 'Signals'],
    rows: [
      ['Continuer', 'echoes the nearby idea', '*and, also, indeed, likewise*'],
      ['Explainer', 'gives a reason or result', '*because, so, thus* — and colons and dashes'],
      ['Reverser', 'opposes the nearby idea', '*but, however, although, despite*'],
    ],
  },
  {
    type: 'tip',
    content: "Read every colon as *namely* or *because*. *The design had one flaw: the hinge* — one flaw, namely the hinge. A colon or dash is an unmarked explainer, and it sits exactly where students report finding no clue words — in those sentences, the clue is the punctuation itself.",
  },

  { type: 'heading', content: 'When the word looks easy' },
  {
    type: 'text',
    content: "An easy, everyday word in the question calls for extra care, not relief.",
  },
  {
    type: 'text',
    content: "The tested word is often a **common word used in a second, less-common sense** — chosen precisely because the familiar meaning fails in that particular sentence. The familiar meaning then shows up among the choices.",
  },
  {
    type: 'text',
    content: "Its familiarity makes it feel safe, which is exactly the property wrong choices are built on. Substitute each choice back into the sentence and keep only the one the surrounding words actually support.",
  },
  {
    type: 'callout',
    content: 'One word, three meanings: *She checked the math* (verified). *Sandbags checked the flood* (held back). *A check on power* (restraint). The word is identical each time; the surrounding words pick the sense.',
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The new coating made the engine far quieter, ______ the rattle that had annoyed drivers for years.\n\n(A) eliminating\n(B) amplifying\n(C) predicting',
    steps: [
      { label: 'Read the evidence first', content: 'Keep the choices covered and read the sentence: the coating made the engine *quieter* — an improvement. The blank names what that improvement did to the *rattle*.' },
      { label: 'Predict', content: "Something like *removing* — the sentence describes getting rid of an unwanted noise." },
      { label: 'Match', content: '*Amplifying* runs the wrong direction; *predicting* does the wrong job entirely. **(A) eliminating** matches the prediction and reads back cleanly.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Early reviewers praised the memoir\'s candor, but a few readers found the same frankness ______.\n\n(A) refreshing\n(B) off-putting\n(C) accurate',
    steps: [
      { label: 'Find the connector', content: '*but* is a reverser — whatever the first half praised, the second half pushes against.' },
      { label: 'Predict', content: 'Reviewers admired the candor; these readers went the opposite way. The word is negative: "something like *distasteful*."' },
      { label: 'Match', content: '*Refreshing* carries the wrong charge — that alone eliminates it. *Accurate* is neutral and dodges the contrast. **(B) off-putting** is the negative word the reverser demands.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'The dam never stopped flooding entirely, but it checked the worst surges, which rarely rose above the walls afterward.\n\nAs used here, "checked" most nearly means:\n\n(A) verified\n(B) restrained\n(C) examined',
    steps: [
      { label: 'Distrust the familiar sense', content: "The familiar senses of *checked* — *verified* and *examined* — both sit among the choices. On a second-sense item, the everyday meaning is the first one to test skeptically, not the default answer." },
      { label: 'Read the evidence', content: 'The dam did something to the *surges* so they *rarely rose above the walls* — it held them back, short of stopping them.' },
      { label: 'Substitute', content: 'Read each sense back into the sentence: "verified the surges" and "examined the surges" both fail. **(B) restrained** — the *hold back* sense — is the one the evidence supports.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The professor\'s lectures were famously ______: she raced through three centuries of history in a single hour, rarely pausing to take a breath.\n\n(A) meandering\n(B) brisk\n(C) muddled',
    steps: [
      { label: 'Read the colon as evidence', content: 'The colon works as an explainer — read it as *namely*. Everything after it defines the blank: she *raced through* the material and *rarely paused*.' },
      { label: 'Predict', content: 'The evidence describes speed, so predict "something like *fast-paced*." The charge is neutral-to-positive — the sentence reports a reputation, not a flaw.' },
      { label: 'Match', content: "*Meandering* is the exact opposite — slow and wandering. *Muddled* means confused, and racing through material in order isn't disorganized; the evidence never supports it. **(B) brisk** is the only word the \"raced through, rarely paused\" evidence justifies." },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'The renovation did little to ______ the theater\'s echo. The sentence reports a failure — so what charge does the blank *word* carry?',
    answer: "**Positive** — a fixing word like *remedy* or *reduce*. The negative charge lives in *did little to*, the reversing phrase right before the blank. The sentence's bad news doesn't transfer to the word itself: the sentence's overall meaning and the blank word's own charge are two separate judgments.",
  },
  {
    type: 'checkpointQuestion',
    question: 'Two surviving choices both have the right charge. What decides between them?',
    answer: "**Precision.** Hold each word's full meaning against the evidence and keep the one whose every implication is supported. The wrong choice that survives the charge screen usually overshoots — added intensity, or a claim the sentence never makes. A choice earns credit only when specific words in the sentence support it.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A colon sits right before the blank, and the sentence has no *because* or *so* anywhere. Is there still a connector doing work?',
    answer: "**Yes.** A colon (or a dash) is an unmarked explainer — read it as *namely* or *because*. The clause after it defines the blank, so the evidence lives right there. A sentence that seems to have no clue words usually carries one in its punctuation, and the colon is the most often overlooked case.",
  },

  {
    type: 'text',
    content: "**The routine in one line:** cover the choices, predict from the evidence, check the charge and the connector, match the closest word, and read it back into the sentence. The tested words change from test to test; the routine doesn't.",
  },
];
