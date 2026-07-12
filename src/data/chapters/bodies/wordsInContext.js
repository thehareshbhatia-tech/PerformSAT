/**
 * Learn lesson body — Words in Context (Craft and Structure).
 *
 * NEW lean "review / cheat-sheet" style (not the old dense textbook template):
 * one-sentence lede, a few short headed sections, a method, a scannable table,
 * then 2-3 worked examples and a couple of check-yourself questions. ~1-2 min.
 * Voice + shape exemplar: bodies/gSubjectVerbAgreement.js. Gated by the lean
 * bodies contract.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const wordsInContextBlocks = [
  {
    type: 'text',
    content: 'The blank (or the underlined word) is a **variable** — the sentence around it defines it. This is not a vocabulary quiz; it is a reading question in disguise. **The evidence in the sentence decides the meaning, not the dictionary.**',
  },

  { type: 'heading', content: 'What is actually tested' },
  {
    type: 'text',
    content: 'A big word list barely helps. Every item plants **evidence** — a few nearby words that pin the blank to exactly one meaning. Your job is to find that evidence and read what it forces, the same way you would solve for an unknown in an equation.',
  },

  { type: 'heading', content: 'The method: predict, then match' },
  {
    type: 'steps',
    title: 'Do this every time',
    items: [
      '**Cover the choices.** Do not let four options talk you into anything before you have thought.',
      '**Predict your own word** from the evidence in the sentence — even a rough one like "something like *cautious*."',
      '**Uncover and match** the choice closest to your predicted word. Then read it back into the sentence to confirm.',
    ],
  },
  {
    type: 'keyInsight',
    content: 'Predicting first flips the power. You set the target, and the choices get graded against it — instead of the cleverest distractor talking you into it.',
  },

  { type: 'heading', content: 'Charge points the direction' },
  {
    type: 'text',
    content: 'Before defining anything, tag the **charge** the blank needs: positive, negative, or neutral. The sentence almost always tips it through its own praise or damage words. A choice on the wrong side of the charge line dies instantly — no fine meaning work needed. *Critics called the plan reckless, and its ______ soon showed* — negative, so *flaws* or *costs*, never *benefits*.',
  },

  { type: 'heading', content: 'Watch the connector' },
  {
    type: 'text',
    content: 'A **connector** tells you how the evidence aims at the blank. Only three families — and the same evidence with a different connector flips the answer.',
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
    content: 'Read every colon as *namely* or *because*. *The design had one flaw: the hinge* → "one flaw, namely the hinge." A colon or dash is a silent explainer — that is where students say "there were no clue words."',
  },

  { type: 'heading', content: 'The second-sense trap' },
  {
    type: 'text',
    content: 'The tested word is often a **common word used in a second, less-common sense.** Do not assume the everyday meaning — the test picks these words precisely because the familiar sense fails, then prints the familiar sense as bait.',
  },
  {
    type: 'callout',
    content: 'One word, three meanings: *She checked the math* (verified). *Sandbags checked the flood* (held back). *A check on power* (restraint). Same letters; the surroundings decide every time.',
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The new coating made the engine far quieter, ______ the rattle that had annoyed drivers for years.\n\n(A) eliminating\n(B) amplifying\n(C) predicting',
    steps: [
      { label: 'Cover and read evidence', content: 'The coating made the engine *quieter* — that is a positive fix. The blank names what it did to the *rattle*.' },
      { label: 'Predict', content: 'Something like *removing*. Charge: getting rid of a bad thing.' },
      { label: 'Match', content: '*Amplifying* is the wrong direction; *predicting* does the wrong job. **(A) eliminating** matches the prediction and reads cleanly.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Early reviewers praised the memoir\'s candor, but a few readers found the same frankness ______.\n\n(A) refreshing\n(B) off-putting\n(C) accurate',
    steps: [
      { label: 'Find the connector', content: '*but* is a reverser — it opposes the *praised* from the first half.' },
      { label: 'Predict', content: 'If reviewers admired it and these readers went the other way, the blank is negative: "something like *distasteful*."' },
      { label: 'Match', content: '*Refreshing* is positive — wrong side of the charge line. *Accurate* is neutral and misses the contrast. **(B) off-putting** is the un-admiring word the reverser demands.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'The dam never stopped flooding entirely, but it checked the worst surges, which rarely rose above the walls afterward.\n\nAs used here, "checked" most nearly means:\n\n(A) verified\n(B) restrained\n(C) examined',
    steps: [
      { label: 'Presume the familiar sense is wrong', content: '*Checked* usually means *verified* or *examined* — both are printed here as bait. On a second-sense item, distrust the everyday meaning first.' },
      { label: 'Read the evidence', content: 'The dam did something to the *surges* so they *rarely rose above the walls* — it held them back, short of stopping them.' },
      { label: 'Substitute', content: '"It *verified* the surges" and "it *examined* the surges" make no sense. **(B) restrained** — the *hold back* sense — is the one the evidence pays for.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'The renovation did little to ______ the theater\'s echo. The sentence reports a failure — so what charge does the blank *word* carry?',
    answer: '**Positive** — a fixing word like *remedy* or *reduce*. The negative lives in *did little to*, a flipper standing before the blank. The sentence\'s idea and the word\'s own charge are two separate things.',
  },
  {
    type: 'checkpointQuestion',
    question: 'Two surviving choices both have the right charge. What decides between them?',
    answer: '**Precision.** Hold each full meaning against the evidence and keep the one whose every implication is paid for. Wrong answers that pass the charge screen usually overshoot — extra intensity or a claim the sentence never makes.',
  },

  {
    type: 'text',
    content: '**The move, every time:** cover the choices → predict from the evidence → check charge and connector → match the closest word → read it back. The words change on every test; the routine never does.',
  },
];
