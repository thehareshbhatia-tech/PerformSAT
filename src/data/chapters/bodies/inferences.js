/**
 * Learn lesson body — Inferences (Information and Ideas).
 *
 * TUTOR VOICE (adopted 2026-07-14, user-approved exemplar:
 * bodies/mLinearEquations.js): coaching direct-address — talks TO the student,
 * everyday anchor first ("closed room", "puzzle piece"), anticipates the trap
 * before it fires, concrete decision rules ("predict before you peek").
 * Invented passages and answer choices inside example blocks stay authentic
 * test material. Lean structure unchanged; gated by bodies.test.js.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const inferencesBlocks = [
  {
    type: 'text',
    content: "An inference question — *\"which choice most logically completes the text\"* or *\"the passage implies\"* — isn't asking you to read between the lines. The word *infer* baits you into supplying your own reasoning, and that outside reasoning is exactly what the wrong answers are built to reward. What the question actually wants is the one conclusion the passage's facts **force** you to reach: no more, no less.",
  },

  { type: 'heading', content: 'What is actually tested' },
  {
    type: 'text',
    content: "In English class an inference is a smart guess — you add what the author probably meant. On the SAT it's the reverse: the answer is already **contained in the facts on the page**, like the last puzzle piece whose shape is cut by the pieces around it. Run this test on any choice: if every stated fact can be true while the choice is false, it isn't forced — cut it. Treat the passage as a closed room. Nothing from outside gets in, including your own good ideas.",
  },

  { type: 'heading', content: 'Predict before you read the choices' },
  {
    type: 'text',
    content: "Finish the passage in your own words *before* you peek at the answers — ten words or fewer, rough is fine. Then shop for the choice that matches your prediction. Read the choices cold and *they* set the standard, and they're written to make wrong sound reasonable. Predict first and **you** set the standard — the choices just get graded against it.",
  },
  {
    type: 'keyInsight',
    content: "The right answer usually feels small, even obvious. That's the design, not a warning sign. The clever-sounding choice is almost always the trap.",
  },

  { type: 'heading', content: 'The right answer stays inside the text' },
  {
    type: 'text',
    content: "The proof lives in the passage, but the answer won't use the passage's words — it's a **paraphrase** that says the forced idea in fresh words. So treat recycled wording as a red flag: a choice that echoes the passage exactly is cheap bait. And grade every choice by its weakest word — one unsupported word sinks the whole thing.",
  },

  { type: 'heading', content: 'How wrong answers cheat' },
  {
    type: 'table',
    headers: ['The trap', 'What it does', 'Tell'],
    rows: [
      ['Adds new info', 'Brings in a fact the passage never gave you', 'You have to *assume* something to pick it'],
      ['Overstates', 'Widens a modest claim into a rule', 'Watch for *all, never, always, best, only, every*'],
      ['Outside logic', "Sounds smart but the facts don't require it", 'A motive, a *should*, a prediction about the future'],
      ['Word recycler', 'Reuses passage words with the meaning scrambled', 'Familiar phrases, but who-did-what is flipped'],
    ],
  },

  { type: 'heading', content: 'Let the transition word steer you' },
  {
    type: 'text',
    content: "One word right before the blank tells you what **kind** of statement belongs there — and kind gets decided before content. This is the fastest elimination you'll make on the whole question: a choice can be perfectly true and still be the wrong *kind* of statement for the slot, and you get to cut it without checking a single fact. Settle the kind first, then judge which surviving choice has the right content.",
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
      { label: 'Predict first', content: "Prices doubled and sales didn't move — so price isn't what brings these customers in. Jot it: *they don't decide on price.*" },
      { label: 'Match', content: "**(B)** says your prediction back to you in new words." },
      { label: 'Kill the rest', content: "(A) adds a fact you were never given (that the old price was a bargain). (C) is a *should* — advice the facts don't force. Both walk out of the closed room." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Of the town\'s forty firefighters, only three are trained to pilot the rescue helicopter. This means that ______\n\n(A) most of the firefighters cannot pilot the helicopter.\n(B) the town should train more pilots.',
    steps: [
      { label: 'What do the numbers force?', content: "Three of forty can fly it, so thirty-seven of forty can't — and thirty-seven of forty is *most*. The arithmetic IS the inference." },
      { label: 'Match', content: "**(A)** — a straight restatement of the numbers. (B) is a recommendation the facts never make." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Early collectors transcribed the mountain ballads\' melodies with great care. However, ______\n\n(A) the melodies were preserved with remarkable accuracy.\n(B) they rewrote the lyrics freely to suit their own taste.',
    steps: [
      { label: 'Read the transition', content: "The blank follows *however* — so before you weigh any content, you know its job: **contrast** with the careful preservation just described." },
      { label: 'Test each choice', content: "(A) keeps the same idea going (still careful, still accurate) — wrong *kind* of statement after *however*. Cut it without checking a single fact." },
      { label: 'Answer', content: "**(B)** delivers the contrast: careful with melodies, loose with lyrics. The transition word did most of the work for you." },
    ],
  },

  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The museum hangs its rarest paintings in a room with no windows, and it keeps the lights there dimmer than in any other gallery. This arrangement suggests that the paintings ______\n\n(A) are the most valuable works the museum owns.\n(B) are especially sensitive to light.\n(C) were painted more recently than the works in the other galleries.',
    steps: [
      { label: 'Predict first', content: "No windows plus the dimmest lights in the building — the room exists to keep light off these paintings. Jot: *light must damage them.*" },
      { label: 'Match', content: "**(B)** says exactly that, in new words — protecting them from light is only worth doing if light harms them." },
      { label: 'Kill the rest', content: "(A) adds a fact you were never given: rare and carefully protected isn't the same as *most valuable*. (C) invents an age the passage never mentions. Both step outside the closed room." },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'A passage says a lab used radiocarbon dating to age a set of bones. A choice completes it with *radiocarbon dating is the best method for dating bone.* Keep it or cut it?',
    answer: "**Cut it.** Using a method proves nothing about whether it's the *best* one — that's an overstatement the facts never force. Writing a note with a pen doesn't make pens the best pen. The most the text supports is that radiocarbon dating *can* be used on bone.",
  },
  {
    type: 'checkpointQuestion',
    question: 'The blank follows *for example, ______.* One choice accurately restates the passage\'s overall conclusion. Keep it or cut it?',
    answer: "**Cut it.** *For example* demands a specific instance of the idea just stated. A conclusion — even a perfectly correct one — is the wrong *kind* of statement for that slot. The transition word decides the kind before content ever gets a vote.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A choice completing an inference reads *this method never fails.* The passage gave three separate cases where the method worked. Keep it or cut it?',
    answer: "**Cut it.** Three successes can't force *never fails* — nothing in three good cases rules out a fourth that flops. The most the facts support is that the method *has worked before*. When two readings are on the table, the smaller claim is the safe one.",
  },

  {
    type: 'text',
    content: "**The move, every time:** treat the passage as facts in a closed room → predict the ending in your own words → let the transition word set the *kind* of statement → pick the paraphrase that stays inside the facts, and drop anything that adds, overstates, or reaches outside.",
  },
];
