/**
 * Learn lesson body — Inferences (Information and Ideas).
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

export const inferencesBlocks = [
  {
    type: 'text',
    content: "An inference question — *\"which choice most logically completes the text\"* or *\"the passage implies\"* — does not ask for reading between the lines. The word *infer* invites outside reasoning, and incorrect choices are routinely constructed to reward exactly that. What the question requires is the one conclusion the passage's facts **force**: no more, no less.",
  },

  { type: 'heading', content: 'What is actually tested' },
  {
    type: 'text',
    content: "In a classroom, an inference is an informed guess that adds what the author probably meant. On the test the relationship is reversed: the answer is already **contained in the facts on the page**, determined entirely by the statements around it. Apply this test to any choice: if every stated fact can be true while the choice is false, the choice is not forced — eliminate it. Treat the passage as a self-contained body of evidence; nothing from outside it counts, including plausible ideas of your own.",
  },

  { type: 'heading', content: 'Predicting before reading the choices' },
  {
    type: 'text',
    content: "Complete the passage in your own words *before* reading the answers — ten words or fewer, and a rough phrasing is sufficient. Then select the choice that matches the prediction. Reading the choices cold allows them to set the standard, and incorrect choices are written to sound reasonable in isolation. Predicting first reverses the arrangement: the prediction sets the standard, and each choice is graded against it. When the sentence holding the blank leans on a compressed reference — *this discrepancy*, *such an approach* — restate that referent in full before predicting; the method is covered in the Central Ideas & Details chapter under *Tracking what \"this\" points to*.",
  },
  {
    type: 'keyInsight',
    content: "The correct answer usually reads as small, even obvious. That is by design, not a warning sign. The choice that sounds cleverest is very often incorrect.",
  },

  { type: 'heading', content: 'The right answer stays inside the text' },
  {
    type: 'text',
    content: "The proof lies in the passage, but the credited answer rarely uses the passage's words — it is a **paraphrase** that states the forced idea in fresh language. Recycled wording therefore deserves suspicion: a choice that echoes the passage exactly is a standard distractor construction. Grade every choice by its weakest word — a single unsupported word disqualifies the entire choice.",
  },

  { type: 'heading', content: 'Patterns in incorrect choices' },
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

  { type: 'heading', content: 'Transition words before the blank' },
  {
    type: 'text',
    content: "A single word immediately before the blank determines what **kind** of statement belongs there, and kind is decided before content. This yields the fastest elimination available on the question: a choice can be entirely true and still be the wrong *kind* of statement for the slot, in which case it can be eliminated without checking a single fact. Settle the kind first, then judge which surviving choice carries the right content.",
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

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A café doubled its coffee prices, and it sold the same number of cups as before. The owner concluded that her regular customers ______\n\n(A) had been getting a bargain for years.\n(B) were not choosing the café based on price.\n(C) should be charged even more.',
    steps: [
      { label: 'Predict first', content: "Prices doubled and sales did not move, so price is not what brings these customers in. A working prediction: *they do not decide based on price.*" },
      { label: 'Match', content: "**(B)** states the prediction in new words." },
      { label: 'Eliminate the rest', content: "(A) adds a fact the passage never supplies (that the old price was a bargain). (C) is a *should* — a recommendation the facts do not force. Both reach outside the stated evidence." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Of the town\'s forty firefighters, only three are trained to pilot the rescue helicopter. This means that ______\n\n(A) most of the firefighters cannot pilot the helicopter.\n(B) the town should train more pilots.',
    steps: [
      { label: 'Compute what the numbers force', content: "Three of forty can fly it, so thirty-seven of forty cannot — and thirty-seven of forty is *most*. The arithmetic itself is the inference." },
      { label: 'Match', content: "**(A)** — a straight restatement of the numbers. (B) is a recommendation the facts never make." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Early collectors transcribed the mountain ballads\' melodies with great care. However, ______\n\n(A) the melodies were preserved with remarkable accuracy.\n(B) they rewrote the lyrics freely to suit their own taste.',
    steps: [
      { label: 'Read the transition', content: "The blank follows *however*, which fixes its job before any content is weighed: it must **contrast** with the careful preservation just described." },
      { label: 'Test each choice', content: "(A) continues the same idea (still careful, still accurate) — the wrong *kind* of statement after *however*. It can be eliminated without checking a single fact." },
      { label: 'Select the answer', content: "**(B)** delivers the contrast: careful with the melodies, free with the lyrics. The transition word does most of the work." },
    ],
  },

  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The museum hangs its rarest paintings in a room with no windows, and it keeps the lights there dimmer than in any other gallery. This arrangement suggests that the paintings ______\n\n(A) are the most valuable works the museum owns.\n(B) are especially sensitive to light.\n(C) were painted more recently than the works in the other galleries.',
    steps: [
      { label: 'Predict first', content: "No windows and the dimmest lights in the building indicate that the room exists to keep light off these paintings. Prediction: *light must damage them.*" },
      { label: 'Match', content: "**(B)** states exactly that in new words — protecting the paintings from light is warranted only if light harms them." },
      { label: 'Eliminate the rest', content: "(A) adds a fact the passage never supplies: rare and carefully protected is not the same as *most valuable*. (C) invents an age the passage never mentions. Both reach outside the stated facts." },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'A passage says a lab used radiocarbon dating to age a set of bones. A choice completes it with *radiocarbon dating is the best method for dating bone.* Keep it or cut it?',
    answer: "**Cut it.** Using a method establishes nothing about whether it is the *best* method — that is an overstatement the facts never force. That a tool was used shows only that it can be used, not that it outperforms every alternative. The most the text supports is that radiocarbon dating *can* be used on bone.",
  },
  {
    type: 'checkpointQuestion',
    question: 'The blank follows *for example, ______.* One choice accurately restates the passage\'s overall conclusion. Keep it or cut it?',
    answer: "**Cut it.** *For example* requires a specific instance of the idea just stated. A conclusion — even an entirely accurate one — is the wrong *kind* of statement for that slot. The transition word settles the kind before content is ever considered.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A choice completing an inference reads *this method never fails.* The passage gave three separate cases where the method worked. Keep it or cut it?',
    answer: "**Cut it.** Three successes cannot force *never fails* — nothing in three favorable cases rules out a fourth that fails. The most the facts support is that the method *has worked before*. When two conclusions are both available, the smaller claim is the defensible one.",
  },

  {
    type: 'text',
    content: "**In summary:** treat the passage as a self-contained set of facts; predict the completion in your own words; let the transition word determine the *kind* of statement required; then select the paraphrase that stays inside the facts, eliminating any choice that adds, overstates, or reaches outside them.",
  },
];
