/**
 * Learn lesson body — Transitions (Expression of Ideas).
 *
 * NEW lean "review / cheat-sheet" style — matches gSubjectVerbAgreement.js in
 * voice, shape, and length: one skill, plain language, one idea per short
 * section, a method, a scannable table, then a few worked examples and a
 * couple of check-yourself questions. Gated by bodies.test.js (lean contract).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const gTransitionsBlocks = [
  {
    type: 'text',
    content: 'A transition is a road sign between two sentences. It has only one job: **name the relationship between the idea before it and the idea after it.** Get the relationship right and the word picks itself.',
  },

  { type: 'heading', content: 'What is actually tested' },
  {
    type: 'text',
    content: 'These questions never test vocabulary — all four choices are real transition words that fit grammatically. They test whether you tracked the *logic* between two sentences. That means the winning move is not knowing what "nevertheless" means; it is knowing what kind of word the sentence needs before you read any choice.',
  },

  { type: 'heading', content: 'Step 1 — A transition points backward' },
  {
    type: 'text',
    content: 'A transition connects its sentence to the one **right before it** — no matter where the blank sits (start of the sentence, middle, or end). So cover the answers, read the sentence before the blank and the sentence with the blank, and figure out how they relate. The choices come last.',
  },
  {
    type: 'keyInsight',
    content: 'Cover the choices first. If you plug words in one at a time and pick what "sounds right," the trap answers are built to sound right. Decide the relationship yourself, then go shopping.',
  },

  { type: 'heading', content: 'Step 2 — Predict, then match' },
  {
    type: 'text',
    content: 'Boil each sentence down to a short gist. Then say what the second one does to the first in plain words: *keeps going*, *is the result*, or *pushes back*. That prediction is your shopping order — "I need a contrast word." Now scan the choices for the one that fills the order. You are matching a word to a decision you already made, not testing four words.',
  },

  { type: 'heading', content: 'The three families' },
  {
    type: 'text',
    content: 'Every transition does one of three jobs. Learn the families, not a giant word list.',
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
    content: 'Two smaller jobs live inside "continue" and show up often: **example** (*for instance, for example*) when the second sentence is a specific case of the first, and **sequence** (*first, next, finally, meanwhile*) when there is real time order. If the choices are all continuers, ask which of these sub-jobs the sentence actually needs.',
  },

  { type: 'heading', content: 'Check the direction on cause and contrast' },
  {
    type: 'text',
    content: 'Cause-and-effect words carry an arrow. *Therefore* means "here comes the **result**"; *because* means "here comes the **reason**." Picking a result word where a reason belongs flips the logic backward — a favorite trap. And for contrast, decide whether you mean plain difference (*however*) or a concession, "despite that" (*nevertheless, still*). Same family, different fine print.',
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The museum had planned an outdoor exhibit. ______, a storm forced the whole show indoors.\n\n(A) Similarly\n(B) However\n(C) For example',
    steps: [
      { label: 'Gist each sentence', content: 'Before: they planned it *outside*. After: it ended up *inside*.' },
      { label: 'Name the relationship', content: 'The second idea reverses the plan — that is **contrast**.' },
      { label: 'Match', content: 'Only **(B) However** is a contrast word. *Similarly* continues, *For example* gives an instance — wrong families.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The bridge had gone unrepaired for decades. ______, engineers closed it before it could collapse.\n\n(A) Nevertheless\n(B) Therefore\n(C) In addition',
    steps: [
      { label: 'Gist each sentence', content: 'Before: the bridge was dangerously neglected. After: they closed it.' },
      { label: 'Name the relationship', content: 'The closing is the *result* of the neglect — this is **cause and effect**.' },
      { label: 'Check the arrow', content: 'I need a "here comes the result" word → **(B) Therefore**. *Nevertheless* is contrast; *In addition* just adds.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Solar panels are often praised as maintenance-free. Their surfaces, ______, collect dust that can cut output by a fifth if never cleaned.\n\n(A) for example\n(B) as a result\n(C) however',
    steps: [
      { label: 'Notice the blank is mid-sentence', content: 'It still points backward. Compare this sentence to the one before it — not to nearby words.' },
      { label: 'Gist each sentence', content: 'Before: panels are called *maintenance-free*. After: they actually *do* need cleaning.' },
      { label: 'Name the relationship', content: 'The second idea contradicts the "maintenance-free" claim → **contrast**.' },
      { label: 'Match', content: '**(C) however.** *As a result* reverses the logic; *for example* would need the second sentence to be an instance of "maintenance-free," which it is not.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'The new policy cut commute times sharply. ______, air quality downtown improved within months. Continue, cause/effect, or contrast — and which word: (also / therefore / however)?',
    answer: '**Cause and effect → therefore.** Cleaner air is the *result* of shorter commutes. *However* would (wrongly) signal a reversal; *also* would just tack on an unrelated point.',
  },
  {
    type: 'checkpointQuestion',
    question: 'The recipe calls for fresh basil. ______, dried basil works fine if that is all you have. Which family, and would you pick "moreover" or "that said"?',
    answer: '**Contrast (a concession) → that said.** The second sentence walks back the "fresh basil" requirement, so you need a "despite that" word. *Moreover* would add to the requirement, the opposite of what the sentence does.',
  },

  {
    type: 'text',
    content: '**The move, every time:** cover the choices → read the sentence before and the sentence with the blank → name the relationship (continue, cause/effect, or contrast) → then match a word to it. Never test words one by one.',
  },
];
