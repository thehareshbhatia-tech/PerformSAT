/**
 * Learn lesson body — Words in Context (Craft and Structure).
 *
 * VOICE (adopted 2026-07-15, exemplar: mLinearEquations.js): professional
 * textbook narrative — teaches directly in flowing prose (concept, why it
 * works, how to apply, common errors) in the measured register of a
 * well-edited textbook. Concrete contexts framed plainly as examples;
 * extended metaphors, cute headings, and pep-talk are out. Headings name
 * the concept. Gated by bodies.test.js.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const wordsInContextBlocks = [
  {
    type: 'text',
    content: "The previous chapters worked with what a passage states, implies, and can prove; attention now turns to how a passage is built, beginning at the smallest scale — the single word. A words-in-context question does not test whether a word is already known: the sentence itself determines which word belongs in the blank. Despite its appearance, this question type is not a vocabulary quiz; it is a reading question, and the sentence contains everything required to answer it. **The evidence in the sentence decides the meaning — a dictionary definition on its own decides nothing.**",
  },

  { type: 'heading', content: 'What is actually tested' },
  {
    type: 'text',
    content: "Memorized word lists offer limited help on these items. Every item plants **evidence** — a few nearby words that pin the blank to exactly one meaning — and the task is to find that evidence and read what it forces. The predictable error is skipping straight to the choices and selecting whatever sounds most sophisticated; the most sophisticated-sounding word is routinely included precisely because it sounds impressive while failing the sentence. The correct word is the one the sentence selects, so read the evidence before weighing any choice.",
  },

  { type: 'heading', content: 'The method: predict, then match' },
  {
    type: 'steps',
    title: 'The three-step routine',
    items: [
      "**Cover the choices.** Reading them first allows plausible-sounding options to shape judgment before the sentence has defined the target.",
      '**Predict your own word** from the evidence in the sentence. A rough approximation is sufficient: "something like *cautious*" is a workable prediction.',
      '**Uncover and match** the choice closest to the predicted word, then read it back into the sentence to confirm that the surrounding words support it.',
    ],
  },
  {
    type: 'keyInsight',
    content: 'Predicting first reverses the dynamic: the prediction sets the target and the choices are graded against it, rather than the most persuasive distractor setting the target itself.',
  },

  { type: 'heading', content: 'The charge of the blank' },
  {
    type: 'text',
    content: "Before defining anything precisely, identify the **charge** the blank requires — positive, negative, or neutral. The sentence almost always signals it through its own words of praise or criticism, and a choice on the wrong side of the charge can be eliminated immediately, with no finer meaning work required. In *Critics called the plan reckless, and its ______ soon showed*, the blank is negative: *flaws* or *costs*, never *benefits*.",
  },

  { type: 'heading', content: 'The connector between evidence and blank' },
  {
    type: 'text',
    content: "The **connector** links the evidence to the blank and indicates whether the blank echoes the nearby idea or reverses it. The same evidence with a different connector yields the opposite answer: *praised, and its ______* calls for a positive word; *praised, but its ______* calls for a negative one. Read the connector before predicting, because it determines which direction the evidence points. Connectors fall into three families:",
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
    content: 'Read every colon as *namely* or *because*. *The design had one flaw: the hinge* — one flaw, namely the hinge. A colon or dash is an unmarked explainer, and it sits precisely where students report finding no clue words. In those sentences, the clue is the punctuation itself.',
  },

  { type: 'heading', content: 'Common words in secondary senses' },
  {
    type: 'text',
    content: "An easy, everyday word in the question calls for extra care rather than relief. The tested word is often a **common word used in a second, less-common sense**, selected precisely because the familiar meaning fails in that particular sentence — and the familiar meaning then appears among the choices. Its familiarity makes it feel safe, which is exactly the property incorrect choices are built on. Substitute each choice back into the sentence and keep only the one the surrounding words actually support.",
  },
  {
    type: 'callout',
    content: 'One word, three meanings: *She checked the math* (verified). *Sandbags checked the flood* (held back). *A check on power* (restraint). The word is identical in each case; the surrounding words determine the sense.',
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The new coating made the engine far quieter, ______ the rattle that had annoyed drivers for years.\n\n(A) eliminating\n(B) amplifying\n(C) predicting',
    steps: [
      { label: 'Read the evidence first', content: 'With the choices covered, read the sentence: the coating made the engine *quieter* — an improvement. The blank names what that improvement did to the *rattle*.' },
      { label: 'Predict', content: "Something like *removing* — the sentence describes getting rid of an unwanted noise." },
      { label: 'Match', content: '*Amplifying* runs in the wrong direction; *predicting* performs the wrong task entirely. **(A) eliminating** matches the prediction and reads back cleanly.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Early reviewers praised the memoir\'s candor, but a few readers found the same frankness ______.\n\n(A) refreshing\n(B) off-putting\n(C) accurate',
    steps: [
      { label: 'Find the connector', content: '*but* is a reverser — whatever the first half praised, the second half pushes against.' },
      { label: 'Predict', content: 'Reviewers admired the candor; these readers responded in the opposite way. The word is negative: "something like *distasteful*."' },
      { label: 'Match', content: '*Refreshing* carries the wrong charge and can be eliminated on that basis alone. *Accurate* is neutral and avoids the contrast. **(B) off-putting** is the negative word the reverser requires.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'The dam never stopped flooding entirely, but it checked the worst surges, which rarely rose above the walls afterward.\n\nAs used here, "checked" most nearly means:\n\n(A) verified\n(B) restrained\n(C) examined',
    steps: [
      { label: 'Distrust the familiar sense', content: "The familiar senses of *checked* — *verified* and *examined* — both appear among the choices. On a second-sense item, the everyday meaning is the first sense to test skeptically, not the default answer." },
      { label: 'Read the evidence', content: 'The dam did something to the *surges* so they *rarely rose above the walls* — it held them back, short of stopping them.' },
      { label: 'Substitute', content: 'Reading each sense back into the sentence, "verified the surges" and "examined the surges" both fail. **(B) restrained** — the *hold back* sense — is the one the evidence supports.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The professor\'s lectures were famously ______: she raced through three centuries of history in a single hour, rarely pausing to take a breath.\n\n(A) meandering\n(B) brisk\n(C) muddled',
    steps: [
      { label: 'Read the colon as evidence', content: 'The colon functions as an explainer — read it as *namely*. Everything after it defines the blank: she *raced through* the material and *rarely paused*.' },
      { label: 'Predict', content: 'The evidence describes speed, so predict "something like *fast-paced*." The charge is neutral-to-positive — the sentence reports a reputation, not a flaw.' },
      { label: 'Match', content: "*Meandering* is the exact opposite — slow and wandering. *Muddled* means confused, and racing through material in order is not disorganized; the evidence never supports it. **(B) brisk** is the only word the \"raced through, rarely paused\" evidence justifies." },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'The renovation did little to ______ the theater\'s echo. The sentence reports a failure — so what charge does the blank *word* carry?',
    answer: "**Positive** — a fixing word such as *remedy* or *reduce*. The negative charge lives in *did little to*, the reversing phrase directly before the blank. The sentence's bad news does not transfer to the word itself: the sentence's overall meaning and the blank word's own charge are two separate judgments.",
  },
  {
    type: 'checkpointQuestion',
    question: 'Two surviving choices both have the right charge. What decides between them?',
    answer: "**Precision.** Hold each word's full meaning against the evidence and keep the one whose every implication is supported. The incorrect choice that survives the charge screen usually overshoots — added intensity, or a claim the sentence never makes. A choice earns credit only when specific words in the sentence support it.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A colon sits right before the blank, and the sentence has no *because* or *so* anywhere. Is there still a connector doing work?',
    answer: '**Yes.** A colon (or a dash) is an unmarked explainer — read it as *namely* or *because*. The clause after it defines the blank, so the evidence lives exactly there. A sentence that appears to contain no clue words usually carries one in its punctuation, and the colon is the most commonly overlooked case.',
  },

  {
    type: 'text',
    content: '**In summary:** cover the choices, predict from the evidence, check the charge and the connector, match the closest word, and read it back into the sentence. The tested words change from test to test; the routine does not.',
  },
];
