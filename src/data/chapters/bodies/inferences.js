/**
 * Learn lesson body — Inferences (Information and Ideas).
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

export const inferencesBlocks = [
  {
    type: 'chapterOpener',
    lede: "Central Ideas & Details located what a passage states. Inference questions — *\"which choice most logically completes the text\"* or *\"the passage implies\"* — ask for the one conclusion those stated facts **force**. Despite the name, the task isn't reading between the lines, and that's worth saying plainly, because the word *infer* invites outside reasoning — and wrong choices are routinely built to reward exactly the student who supplies it. What the question requires is the conclusion the facts on the page compel: no more, no less.",
  },

  { type: 'heading', content: 'What counts as an inference here' },
  {
    type: 'text',
    content: "In a classroom, an inference is an informed guess — you add what the author probably meant, and the richest reading earns the credit. On the test the relationship flips: the answer is already **contained in the facts on the page**, determined entirely by the statements around it. So treat the passage as a self-contained body of evidence. Nothing from outside it counts — including plausible ideas of your own, because plausibility is precisely the quality wrong answers are engineered to have.",
  },
  {
    type: 'aside',
    kind: 'remember',
    content: "The forcing test: if every stated fact can be true while a choice is false, that choice isn't forced. Eliminate it.",
  },

  { type: 'heading', content: 'Predict before you read the choices' },
  {
    type: 'text',
    content: "Complete the passage in your own words *before* reading the answers — ten words or fewer, and a rough phrasing is enough — then pick the choice that matches your prediction. The order is the point. Reading the choices cold lets them set the standard, and wrong choices are written to sound reasonable in isolation; predicting first reverses that, so each choice gets graded against your prediction instead of against your general sense of what sounds sensible.",
  },
  {
    type: 'text',
    content: "One setup move is worth building into the routine. When the sentence holding the blank leans on a compressed reference — *this discrepancy*, *such an approach* — restate that referent in full before predicting, because you can't complete a sentence whose subject you're still holding as an unresolved label. The Central Ideas & Details chapter covers the method under *When the text says \"this\"*.",
  },
  {
    type: 'aside',
    kind: 'watch',
    content: "The right answer usually reads as small, even obvious. That's by design, not a warning sign — the choice that sounds cleverest is very often wrong.",
  },

  { type: 'heading', content: 'The right answer stays inside the text' },
  {
    type: 'text',
    content: "The proof lies in the passage, but the credited answer rarely uses the passage's words — it's a **paraphrase**, the forced idea stated in fresh language. That flips how recycled wording deserves to be read: a choice that echoes the passage exactly is a standard distractor construction, borrowing familiar phrases to buy a trust it hasn't earned. And grade every choice by its weakest word, because a single unsupported word disqualifies the whole choice — the credited answer has to hold all the way through, not just in its general drift.",
  },

  { type: 'heading', content: 'Four patterns in wrong choices' },
  {
    type: 'text',
    content: "Wrong choices on these items aren't written at random — they follow four recognizable patterns, each aimed at a reader doing something that feels reasonable in the moment:",
  },
  {
    type: 'table',
    headers: ['Pattern', 'What it does', 'Identifying feature'],
    rows: [
      ['Adds new information', 'Introduces a fact the passage never supplies', 'Selecting it requires an *assumption*'],
      ['Overstates', 'Widens a modest claim into a rule', '*all, never, always, best, only, every*'],
      ['Outside logic', 'Sounds reasonable but is not required by the facts', 'A motive, a *should*, a prediction about the future'],
      ['Recycled wording', 'Reuses passage words with the relationships altered', 'Familiar phrases, but who-did-what is reversed'],
    ],
  },

  { type: 'heading', content: 'The word before the blank' },
  {
    type: 'text',
    content: "A single word immediately before the blank decides what **kind** of statement belongs there, and kind gets decided before content because it's the fastest elimination the question offers. A choice can be entirely true and still be the wrong *kind* of statement for the slot — after *however*, a smooth continuation dies no matter how accurate it is — and you can cut it without checking a single fact. Settle the kind first; then judge which surviving choice carries the right content.",
  },
  {
    type: 'table',
    headers: ['Word before the blank', 'What must follow'],
    rows: [
      ['*therefore, thus, this suggests*', 'the conclusion the facts force'],
      ['*however, but, by contrast*', 'the opposite of what was just said'],
      ['*for example, for instance*', 'a specific case of the idea just stated'],
      ['(blank ends a list)', 'another item with the same property as the others'],
    ],
  },

  { type: 'heading', content: 'How to approach these questions' },
  {
    type: 'steps',
    items: [
      "**Read the facts as a closed set.** The passage is the entire body of evidence — nothing outside it counts.",
      "**Check the word before the blank.** *Therefore*, *however*, *for example* — it fixes the kind of statement the slot takes, and wrong-kind choices go first.",
      "**Predict the completion in your own words.** Ten words or fewer, before reading a single choice.",
      "**Match, grading each choice by its weakest word.** Keep the paraphrase that stays inside the facts; cut anything that adds, overstates, or reaches outside them.",
    ],
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A café doubled its coffee prices, and it sold the same number of cups as before. The owner concluded that her regular customers ______\n\n(A) had been getting a bargain for years.\n(B) were not choosing the café based on price.\n(C) should be charged even more.',
    steps: [
      { label: 'Predict first', content: "Prices doubled and sales didn't move, so price isn't what brings these customers in. A working prediction: *they don't decide based on price.*" },
      { label: 'Match', content: "**(B)** states the prediction in new words." },
      { label: 'Eliminate the rest', content: "(A) adds a fact the passage never supplies (that the old price was a bargain). (C) is a *should* — a recommendation the facts don't force. Both reach outside the stated evidence." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Of the town\'s forty firefighters, only three are trained to pilot the rescue helicopter. This means that ______\n\n(A) most of the firefighters cannot pilot the helicopter.\n(B) the town should train more pilots.',
    steps: [
      { label: 'Compute what the numbers force', content: "Three of forty can fly it, so thirty-seven of forty can't — and thirty-seven of forty is *most*. The arithmetic itself is the inference." },
      { label: 'Match', content: "**(A)** — a straight restatement of the numbers. (B) is a recommendation the facts never make." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Early collectors transcribed the mountain ballads\' melodies with great care. However, ______\n\n(A) the melodies were preserved with remarkable accuracy.\n(B) they rewrote the lyrics freely to suit their own taste.',
    steps: [
      { label: 'Read the transition', content: "The blank follows *however*, which fixes its job before any content gets weighed: it must **contrast** with the careful preservation just described." },
      { label: 'Test each choice', content: "(A) continues the same idea (still careful, still accurate) — the wrong *kind* of statement after *however*. Cut it without checking a single fact." },
      { label: 'Select the answer', content: "**(B)** delivers the contrast: careful with the melodies, free with the lyrics. The transition word does most of the work." },
    ],
  },

  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The museum hangs its rarest paintings in a room with no windows, and it keeps the lights there dimmer than in any other gallery. This arrangement suggests that the paintings ______\n\n(A) are the most valuable works the museum owns.\n(B) are especially sensitive to light.\n(C) were painted more recently than the works in the other galleries.',
    steps: [
      { label: 'Predict first', content: "No windows and the dimmest lights in the building mean the room exists to keep light off these paintings. Prediction: *light must damage them.*" },
      { label: 'Match', content: "**(B)** states exactly that in new words — protecting the paintings from light is warranted only if light harms them." },
      { label: 'Eliminate the rest', content: "(A) adds a fact the passage never supplies: rare and carefully protected isn't the same as *most valuable*. (C) invents an age the passage never mentions. Both reach outside the stated facts." },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'A passage says a lab used radiocarbon dating to age a set of bones. A choice completes it with *radiocarbon dating is the best method for dating bone.* Keep it or cut it?',
    answer: "**Cut it.** Using a method establishes nothing about whether it's the *best* method — that's an overstatement the facts never force. That a tool was used shows only that it can be used, not that it beats every alternative. The most the text supports is that radiocarbon dating *can* be used on bone.",
  },
  {
    type: 'checkpointQuestion',
    question: 'The blank follows *for example, ______.* One choice accurately restates the passage\'s overall conclusion. Keep it or cut it?',
    answer: "**Cut it.** *For example* demands a specific instance of the idea just stated. A conclusion — even an entirely accurate one — is the wrong *kind* of statement for that slot. The transition word settles the kind before content is ever weighed.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A choice completing an inference reads *this method never fails.* The passage gave three separate cases where the method worked. Keep it or cut it?',
    answer: "**Cut it.** Three successes can't force *never fails* — nothing in three favorable cases rules out a fourth that fails. The most the facts support is that the method *has worked before*. When two conclusions are both available, the smaller claim is the defensible one.",
  },

  {
    type: 'summary',
    title: 'The whole skill in four moves',
    points: [
      'Treat the passage as a **closed set** of facts — nothing outside it counts.',
      'Let the **word before the blank** fix the kind of statement the slot requires.',
      'Predict the completion in your **own words**, before reading a single choice.',
      'Keep the **paraphrase** that stays inside the facts, cutting any choice that adds, overstates, or reaches outside them — the evidence chapters ahead ask what would *prove* a claim, rewarding the same on-the-page discipline.',
    ],
  },
];
