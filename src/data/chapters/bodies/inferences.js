/**
 * Learn lesson body — Inferences (Information and Ideas).
 *
 * NEW lean "review / cheat-sheet" style (voice + shape exemplar:
 * bodies/gSubjectVerbAgreement.js): one SAT skill per lesson, plain language,
 * one idea per short section, a method, a scannable cheat-list, then 2-3 worked
 * examples and a couple of check-yourself questions. Gated by bodies.test.js.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const inferencesBlocks = [
  {
    type: 'text',
    content: 'An inference question — *"which choice most logically completes the text"* or *"the passage implies"* — is not asking you to read between the lines. The word *infer* tricks people into supplying their own reasoning, and that outside reasoning is exactly what the wrong answers are built to reward. What the question actually wants is the one conclusion the passage\'s facts **force** you to reach: no more, no less.',
  },

  { type: 'heading', content: 'What is actually tested' },
  {
    type: 'text',
    content: 'In English class an inference is a smart guess — you add what the author probably meant. On the SAT it is the opposite: the answer is already **contained in the facts on the page**. If the stated facts can all be true while your answer is false, it is not forced, so it is wrong. Treat the passage as a closed room: nothing from outside gets to come in.',
  },

  { type: 'heading', content: 'Predict before you read the choices' },
  {
    type: 'text',
    content: 'Finish the passage in your own words *before* you look at the answers — ten words or fewer, rough is fine. Then find the choice that matches your prediction. If you read the choices cold, they are built to make wrong answers sound reasonable; a prediction lets you grade them against **your** standard instead.',
  },
  {
    type: 'keyInsight',
    content: 'The right answer usually feels small, even obvious. That is the design, not a warning sign. The clever-sounding choice is almost always the trap.',
  },

  { type: 'heading', content: 'The right answer stays inside the text' },
  {
    type: 'text',
    content: 'The proof is in the passage, but the answer is a **paraphrase** — it says the forced idea in fresh words, not the passage\'s words. Be suspicious of a choice that echoes the passage exactly; recycled wording is cheap bait. Grade a choice by its weakest word: one unsupported word sinks the whole thing.',
  },

  { type: 'heading', content: 'How wrong answers cheat' },
  {
    type: 'table',
    headers: ['The trap', 'What it does', 'Tell'],
    rows: [
      ['Adds new info', 'Brings in a fact the passage never gave you', 'You have to *assume* something to pick it'],
      ['Overstates', 'Widens a modest claim into a rule', 'Watch for *all, never, always, best, only, every*'],
      ['Outside logic', 'Sounds smart but the facts don\'t require it', 'A motive, a *should*, a prediction about the future'],
      ['Word recycler', 'Reuses passage words with the meaning scrambled', 'Familiar phrases, but who-did-what is flipped'],
    ],
  },

  { type: 'heading', content: 'Let the transition word steer you' },
  {
    type: 'text',
    content: 'A word right before the blank tells you what **kind** of statement belongs there — decide the kind before you weigh the content. This is the fastest elimination on the whole question: a choice can be perfectly true and still be the wrong *kind* of statement for the slot, and you can cut it without checking a single fact. Settle the kind first, then judge which remaining choice has the right content.',
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
      { label: 'Predict first', content: 'Prices doubled, sales held steady — so price is not what brings these customers in. Jot: *they don\'t decide on price.*' },
      { label: 'Match', content: '**(B)** says exactly that, in new words.' },
      { label: 'Kill the rest', content: '(A) adds a fact never stated (that the old price was a bargain). (C) is a *should* — advice the facts do not force. Both leave the closed room.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Of the town\'s forty firefighters, only three are trained to pilot the rescue helicopter. This means that ______\n\n(A) most of the firefighters cannot pilot the helicopter.\n(B) the town should train more pilots.',
    steps: [
      { label: 'What do the numbers force?', content: 'Three of forty can fly it, so thirty-seven of forty cannot — and thirty-seven of forty is *most*.' },
      { label: 'Match', content: '**(A)** — a direct restatement of the numbers. (B) is a recommendation the facts never make.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Early collectors transcribed the mountain ballads\' melodies with great care. However, ______\n\n(A) the melodies were preserved with remarkable accuracy.\n(B) they rewrote the lyrics freely to suit their own taste.',
    steps: [
      { label: 'Read the transition', content: 'The blank follows *however* — it must **contrast** with the careful preservation just described.' },
      { label: 'Test each choice', content: '(A) continues the same idea (still careful, still accurate) — wrong *kind* of statement after *however*.' },
      { label: 'Answer', content: '**(B)** supplies the contrast: careful with melodies, loose with lyrics. It obeys the transition word.' },
    ],
  },

  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The museum hangs its rarest paintings in a room with no windows, and it keeps the lights there dimmer than in any other gallery. This arrangement suggests that the paintings ______\n\n(A) are the most valuable works the museum owns.\n(B) are especially sensitive to light.\n(C) were painted more recently than the works in the other galleries.',
    steps: [
      { label: 'Predict first', content: 'No windows plus the dimmest lights means the room is built to keep light off these paintings. Jot: *they must be easily damaged by light.*' },
      { label: 'Match', content: '**(B)** says exactly that, in new words — protecting them from light is only worth doing if light harms them.' },
      { label: 'Kill the rest', content: '(A) adds a fact never given: rare and carefully protected is not the same as *most valuable*. (C) invents an age the passage never mentions. Both step outside the closed room.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'A passage says a lab used radiocarbon dating to age a set of bones. A choice completes it with *radiocarbon dating is the best method for dating bone.* Keep it or cut it?',
    answer: '**Cut it.** Using a method proves nothing about whether it is the *best* one — that is an overstatement the facts never force. A note written with a pen doesn\'t make pens the best pen. The most the text supports is that radiocarbon dating *can* be used on bone.',
  },
  {
    type: 'checkpointQuestion',
    question: 'The blank follows *for example, ______.* One choice accurately restates the passage\'s overall conclusion. Keep it or cut it?',
    answer: '**Cut it.** *For example* demands a specific instance of the idea just stated. A conclusion — even a correct one — is the wrong kind of statement in that slot. The transition word decides the kind before content matters.',
  },
  {
    type: 'checkpointQuestion',
    question: 'A choice completing an inference reads *this method never fails.* The passage gave three separate cases where the method worked. Keep it or cut it?',
    answer: '**Cut it.** Three successes cannot force *never fails* — *never* is an overstatement, and nothing in the three cases rules out a fourth case that fails. The most the facts support is that the method *has worked before*, so the smaller claim is the safe one.',
  },

  {
    type: 'text',
    content: '**The move, every time:** read the passage as facts in a closed room → predict the ending in your own words → check the transition word for the *kind* of statement → pick the paraphrase that stays inside the facts and drop anything that adds, overstates, or reaches outside.',
  },
];
