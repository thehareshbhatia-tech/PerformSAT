/**
 * Learn lesson body — Words in Context (Craft and Structure).
 *
 * TUTOR VOICE (adopted 2026-07-14, user-approved exemplar:
 * bodies/mLinearEquations.js): coaching direct-address — talks TO the student,
 * anticipates the mistake before it happens, everyday anchor first and method
 * second, concrete decision rules. Lean structure unchanged: short headed
 * sections, a method, a connector table, 4 worked examples, 3 checkpoints.
 * Invented passages/choices inside examples stay authentic test material.
 * Gated by bodies.test.js.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const wordsInContextBlocks = [
  {
    type: 'text',
    content: "Here's the secret behind every one of these: the blank isn't testing whether you know a word — the sentence already told you which word belongs. Treat the blank like a **variable** and the sentence like the equation that defines it. This was never a vocabulary quiz; it's a reading question in a costume. **The evidence in the sentence decides the meaning — the dictionary never gets a vote.**",
  },

  { type: 'heading', content: 'What is actually tested' },
  {
    type: 'text',
    content: "A giant word list barely helps here, and that's good news. Every item plants **evidence** — a few nearby words that pin the blank to exactly one meaning — and your whole job is to find that evidence and read what it forces, the way you'd solve for an unknown. The test writers are betting you'll skip straight to the choices and grab whatever sounds smartest. That's the trap working as designed: the smartest-sounding word was picked to sound smart. The right word is picked by the sentence — so slow down and let the sentence cast the vote.",
  },

  { type: 'heading', content: 'The method: predict, then match' },
  {
    type: 'steps',
    title: 'Do this every time',
    items: [
      "**Cover the choices.** Four options are four salespeople — don't let them pitch you before you've decided what you're shopping for.",
      '**Predict your own word** from the evidence in the sentence. Rough is fine: "something like *cautious*" beats a blank stare.',
      '**Uncover and match** the choice closest to your predicted word. Then read it back into the sentence to confirm it earns its seat.',
    ],
  },
  {
    type: 'keyInsight',
    content: 'Predicting first flips the power. You set the target and the choices get graded against it — instead of the cleverest distractor setting the target for you.',
  },

  { type: 'heading', content: 'Charge points the direction' },
  {
    type: 'text',
    content: "Before you define anything, read the sign before the number: tag the **charge** the blank needs — positive, negative, or neutral. The sentence almost always tips it through its own praise or damage words, and a choice on the wrong side of the charge line dies instantly, no fine meaning work required. *Critics called the plan reckless, and its ______ soon showed* — that blank is negative territory: *flaws* or *costs*, never *benefits*.",
  },

  { type: 'heading', content: 'Watch the connector' },
  {
    type: 'text',
    content: "The **connector** is the hinge between the evidence and the blank — it tells you whether the blank echoes the nearby idea or reverses it. Same evidence, different hinge, opposite answer: *praised, and its ______* wants a positive word; *praised, but its ______* wants a negative one. Read the hinge before you predict, because it decides which way the evidence points. There are really only three families:",
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
    content: 'Read every colon as *namely* or *because*. *The design had one flaw: the hinge* — one flaw, namely the hinge. A colon or dash is a silent explainer, and it sits exactly where students swear "there were no clue words." There were. One of them was punctuation.',
  },

  { type: 'heading', content: 'The second-sense trap' },
  {
    type: 'text',
    content: "When an easy, everyday word gets asked about, slow down — that's not a gift, that's the trap. The tested word is often a **common word used in a second, less-common sense**, picked precisely because the familiar meaning fails in this sentence. Then the familiar meaning gets printed as a choice. It feels safe because you've known the word since third grade — and that comfort is exactly what the wrong answer is built from. Substitute each choice back into the sentence and keep only the one the surrounding words actually pay for.",
  },
  {
    type: 'callout',
    content: 'One word, three meanings: *She checked the math* (verified). *Sandbags checked the flood* (held back). *A check on power* (restraint). Same letters every time; the surroundings cast the deciding vote.',
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The new coating made the engine far quieter, ______ the rattle that had annoyed drivers for years.\n\n(A) eliminating\n(B) amplifying\n(C) predicting',
    steps: [
      { label: 'Cover and read evidence', content: 'Cover the choices first. The coating made the engine *quieter* — a positive fix. The blank names what that fix did to the *rattle*.' },
      { label: 'Predict', content: "Something like *removing*. You're getting rid of a bad thing." },
      { label: 'Match', content: '*Amplifying* runs the wrong direction; *predicting* does the wrong job entirely. **(A) eliminating** matches your prediction and reads back cleanly.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Early reviewers praised the memoir\'s candor, but a few readers found the same frankness ______.\n\n(A) refreshing\n(B) off-putting\n(C) accurate',
    steps: [
      { label: 'Find the hinge', content: '*but* is a reverser — whatever the first half praised, the second half pushes against.' },
      { label: 'Predict', content: 'Reviewers admired the candor; these readers went the other way. Your word is negative: "something like *distasteful*."' },
      { label: 'Match', content: '*Refreshing* sits on the wrong side of the charge line — cut it without a second read. *Accurate* is neutral and ducks the contrast. **(B) off-putting** is the un-admiring word the reverser demands.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'The dam never stopped flooding entirely, but it checked the worst surges, which rarely rose above the walls afterward.\n\nAs used here, "checked" most nearly means:\n\n(A) verified\n(B) restrained\n(C) examined',
    steps: [
      { label: 'Distrust the familiar sense', content: "You've read *checked* as *verified* or *examined* your whole life — and both are printed here as bait. On a second-sense item, the everyday meaning is your first suspect, not your first answer." },
      { label: 'Read the evidence', content: 'The dam did something to the *surges* so they *rarely rose above the walls* — it held them back, short of stopping them.' },
      { label: 'Substitute', content: '"It *verified* the surges"? "It *examined* the surges"? Neither survives being read aloud. **(B) restrained** — the *hold back* sense — is the one the evidence pays for.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The professor\'s lectures were famously ______: she raced through three centuries of history in a single hour, rarely pausing to take a breath.\n\n(A) meandering\n(B) brisk\n(C) muddled',
    steps: [
      { label: 'Read the colon as evidence', content: 'That colon is your silent explainer — read it as *namely*. Everything after it defines the blank: she *raced through* the material and *rarely paused*.' },
      { label: 'Predict', content: 'That describes speed. Predict "something like *fast-paced*." And notice the charge is neutral-to-positive — the sentence reports a fame, not a flaw.' },
      { label: 'Match', content: "*Meandering* is the exact opposite — slow and wandering. *Muddled* means confused, and racing through material in order isn't disorganized; the evidence never pays for it. **(B) brisk** is the only word the \"raced through, rarely paused\" evidence buys." },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'The renovation did little to ______ the theater\'s echo. The sentence reports a failure — so what charge does the blank *word* carry?',
    answer: "**Positive** — a fixing word like *remedy* or *reduce*. The negative lives in *did little to*, the flipper standing right before the blank. Don't hand the sentence's bad news to the word itself — the sentence's idea and the word's own charge are two separate readings.",
  },
  {
    type: 'checkpointQuestion',
    question: 'Two surviving choices both have the right charge. What decides between them?',
    answer: "**Precision.** Hold each full meaning against the evidence and keep the one whose every implication gets paid for. The wrong answer that survives the charge screen usually overshoots — extra intensity, or a claim the sentence never makes. If you can't point to the words that pay for it, it isn't your answer.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A colon sits right before the blank, and the sentence has no *because* or *so* anywhere. Is there still a connector doing work?',
    answer: '**Yes.** A colon (or a dash) is a silent explainer — read it as *namely* or *because*. The clause after it defines the blank, so that\'s exactly where your evidence lives. When you catch yourself thinking "there were no clue words," go back and check the punctuation — you almost certainly skipped a colon.',
  },

  {
    type: 'text',
    content: '**The move, every time:** cover the choices → predict from the evidence → check charge and hinge → match the closest word → read it back. The words change on every test; your routine never does.',
  },
];
