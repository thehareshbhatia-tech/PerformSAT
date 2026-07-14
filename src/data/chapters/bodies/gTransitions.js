/**
 * Learn lesson body — Transitions (Expression of Ideas).
 *
 * TUTOR VOICE (adopted 2026-07-14, mLinearEquations.js is the user-approved
 * exemplar): coaching direct-address — talks TO the student, everyday anchor
 * first, anticipates the trap before it lands, concrete decision rules
 * ("cover the choices, then go shopping"). Lean structure unchanged: short
 * headed sections, a method, a scannable table, 4 worked examples, 3
 * checkpoints. Example problems stay authentic test material. Gated by
 * bodies.test.js (lean contract).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const gTransitionsBlocks = [
  {
    type: 'text',
    content: "Picture a road sign between two sentences: keep going, turn here, here's why. That's all a transition is. It carries no information of its own — its one job is to **name the relationship between the idea before it and the idea after it.** Get the relationship right and the word picks itself.",
  },

  { type: 'heading', content: 'What is actually tested' },
  {
    type: 'text',
    content: "Here's the trap you're walking into if you're not careful: this looks like a vocabulary question, so you plug in each word and listen. It isn't one. All four choices are real transition words, and every one fits grammatically — that's by design. What's actually being graded is whether you tracked the *logic* between two sentences. So the winning move isn't knowing what \"nevertheless\" means; it's deciding what kind of word the sentence needs before you read a single choice.",
  },

  { type: 'heading', content: 'Step 1 — A transition points backward' },
  {
    type: 'text',
    content: "Wherever the blank sits — opening the sentence, tucked in the middle, hanging off the end — the transition connects its sentence to the one **right before it**. So cover the answers, read the sentence before the blank and the sentence with the blank, and ask: what does the second one do to the first? The choices come last, every time.",
  },
  {
    type: 'keyInsight',
    content: "Cover the choices first. Plug words in one at a time and you're playing the test's game — the trap answers are built to sound right. Decide the relationship yourself, then go shopping for the word that matches.",
  },

  { type: 'heading', content: 'Step 2 — Predict, then match' },
  {
    type: 'text',
    content: "Boil each sentence down to a five-word gist. Then say what the second one does to the first, in plain words: *keeps going*, *is the result*, or *pushes back*. That prediction is your shopping order — \"I need a contrast word.\" Now scan the choices for the one that fills the order. You're matching a word to a decision you already made, not auditioning four words.",
  },

  { type: 'heading', content: 'The three families' },
  {
    type: 'text',
    content: "Every transition does one of exactly three jobs. Once you've named the job the sentence needs, you only have to recognize the family — the words inside a family are close enough that you'll rarely have to split hairs between them. That's why naming the relationship first beats memorizing a giant word list: you're choosing a *direction*, and any word pointing that way will do.",
  },
  {
    type: 'table',
    headers: ['Family', 'The job', 'Common words'],
    rows: [
      ['Continue / add', 'Second idea keeps the first one going', 'also, moreover, furthermore, in addition'],
      ['Cause / effect', 'Second idea is the result of the first', 'therefore, thus, so, as a result, consequently'],
      ['Contrast / reverse', 'Second idea pushes against the first', 'however, but, nevertheless, on the other hand, yet'],
    ],
  },
  {
    type: 'text',
    content: "Two smaller jobs hide inside \"continue\" and show up often: **example** (*for instance, for example*) when the second sentence is a specific case of the first, and **sequence** (*first, next, finally, meanwhile*) when there's real time order. If every choice on your screen is a continuer, ask which of these sub-jobs the sentence actually wants.",
  },

  { type: 'heading', content: 'Check the direction on cause and contrast' },
  {
    type: 'text',
    content: "Cause-and-effect words carry an arrow, and the arrow matters. *Therefore* announces \"here comes the **result**\"; *because* announces \"here comes the **reason**.\" Put a result word where a reason belongs and you've run the logic backward — the test builds a wrong choice out of exactly that flip. Contrast has fine print too: plain difference takes *however*, but a concession — \"despite that\" — wants *nevertheless* or *still*. Same family, different fine print.",
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The museum had planned an outdoor exhibit. ______, a storm forced the whole show indoors.\n\n(A) Similarly\n(B) However\n(C) For example',
    steps: [
      { label: 'Gist each sentence', content: 'Before: they planned it *outside*. After: it ended up *inside*.' },
      { label: 'Name the relationship', content: "The second idea reverses the plan — that's **contrast**." },
      { label: 'Match', content: 'Only **(B) However** pushes back. *Similarly* keeps going, *For example* gives an instance — wrong families, easy cuts.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The bridge had gone unrepaired for decades. ______, engineers closed it before it could collapse.\n\n(A) Nevertheless\n(B) Therefore\n(C) In addition',
    steps: [
      { label: 'Gist each sentence', content: 'Before: the bridge sat neglected for decades. After: engineers closed it.' },
      { label: 'Name the relationship', content: 'The closing happened *because of* the neglect — **cause and effect**.' },
      { label: 'Check the arrow', content: 'You want a "here comes the result" word → **(B) Therefore**. *Nevertheless* pushes back; *In addition* just piles on.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Solar panels are often praised as maintenance-free. Their surfaces, ______, collect dust that can cut output by a fifth if never cleaned.\n\n(A) for example\n(B) as a result\n(C) however',
    steps: [
      { label: 'Notice the blank is mid-sentence', content: "Doesn't matter — it still points backward. Compare this sentence to the one before it, not to the words sitting next to the blank." },
      { label: 'Gist each sentence', content: 'Before: panels get called *maintenance-free*. After: they actually *do* need cleaning.' },
      { label: 'Name the relationship', content: 'The second sentence contradicts the "maintenance-free" claim → **contrast**.' },
      { label: 'Match', content: "**(C) however.** *As a result* runs the logic the wrong way; *for example* would need the second sentence to be an instance of \"maintenance-free,\" and it's the opposite." },
    ],
  },

  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The city planted thousands of trees downtown. ______, it added rooftop gardens to dozens of public buildings.\n\n(A) However\n(B) In addition\n(C) For example',
    steps: [
      { label: 'Gist each sentence', content: 'Before: the city planted trees. After: it added rooftop gardens — another green move.' },
      { label: 'Name the relationship', content: 'The second idea stacks a further step in the same direction → **continue / add**.' },
      { label: 'Match', content: "**(B) In addition.** *However* signals a reversal that never happens; *For example* would need rooftop gardens to be an *instance* of tree-planting, and it's a separate measure." },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'The new policy cut commute times sharply. ______, air quality downtown improved within months. Continue, cause/effect, or contrast — and which word: (also / therefore / however)?',
    answer: "**Cause and effect → therefore.** Cleaner air is the *result* of shorter commutes. Pick *however* and you've announced a reversal that isn't there; *also* would just tack on an unrelated point.",
  },
  {
    type: 'checkpointQuestion',
    question: 'The recipe calls for fresh basil. ______, dried basil works fine if that is all you have. Which family, and would you pick "moreover" or "that said"?',
    answer: '**Contrast (a concession) → that said.** The second sentence walks back the fresh-basil requirement, so you want a "despite that" word. *Moreover* would pile onto the requirement — the exact opposite of what the sentence does.',
  },
  {
    type: 'checkpointQuestion',
    question: 'The prototype passed every lab test. ______, it failed the moment real customers used it. Which family, and pick (moreover / therefore / however)?',
    answer: "**Contrast → however.** The second sentence reverses the lab-test success. *Moreover* would add another success, and *therefore* would make the failure a *result* of passing the tests — backward logic, and a trap you'll meet again.",
  },

  {
    type: 'text',
    content: '**The move, every time:** cover the choices → read the sentence before and the sentence with the blank → name the relationship (continue, cause/effect, or contrast) → then match a word to it. Never audition words one by one.',
  },
];
