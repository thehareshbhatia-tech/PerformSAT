/**
 * Learn lesson body — Transitions (Expression of Ideas).
 *
 * VOICE v3 (adopted 2026-07-17, exemplar: bodies/centralIdeas.js): scannable
 * instructional register — direct address, contractions, 1-3 sentence text
 * blocks, list blocks for criteria, steps blocks for procedures; no analogies,
 * no pep-talk, no emojis. All substance of the v2 textbook version preserved.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const gTransitionsBlocks = [
  {
    type: 'text',
    content: "The Conventions chapters handled the correct sentence — its boundaries, its agreement, its punctuation. Expression of Ideas questions ask what those chapters didn't: do the sentences connect logically to one another?",
  },
  {
    type: 'text',
    content: "A transition word sits exactly on that boundary between two sentences. It carries no information of its own — its one job is to **name the relationship** between the idea before it and the idea after it: continuation, cause and effect, or contrast.",
  },
  {
    type: 'text',
    content: "So the choice starts with the relationship, not the word. Name the relationship correctly, and the word follows.",
  },

  { type: 'heading', content: "What's actually tested" },
  {
    type: 'text',
    content: "These items look like vocabulary questions, which invites a plug-in-and-listen approach — but they aren't vocabulary questions. All four choices are genuine transition words, and every one fits grammatically; the choices are built that way.",
  },
  {
    type: 'text',
    content: "What's actually assessed is whether you've tracked the *logic* between two sentences. The effective method isn't knowing what *nevertheless* means — it's deciding what kind of word the sentence requires before reading any choice.",
  },

  { type: 'heading', content: 'A transition points backward' },
  {
    type: 'text',
    content: "Wherever the blank sits — start of the sentence, middle, or end — the transition connects its sentence to the one **immediately before it**.",
  },
  {
    type: 'text',
    content: "So cover the answers, read the sentence before the blank and the sentence containing it, and decide what the second does to the first. The choices come last.",
  },
  {
    type: 'keyInsight',
    content: "Cover the choices first. Testing words one at a time is unreliable — wrong choices are routinely built to sound plausible in isolation. Decide the relationship on your own, then select the word that matches it.",
  },

  { type: 'heading', content: 'Predict, then match' },
  {
    type: 'text',
    content: "Reduce each sentence to a short gist. Then say, in plain words, what the second does to the first: *continues it*, *results from it*, or *pushes against it*.",
  },
  {
    type: 'text',
    content: "That prediction — *a contrast word is needed* — defines the target. Scan the choices for the one that fits it. Now you're matching a word to a decision already made, not weighing four candidates in turn.",
  },

  { type: 'heading', content: 'The three transition families' },
  {
    type: 'text',
    content: "Every transition does one of exactly three jobs. Once you've named the required job, you only have to recognize the family — the words within a family sit close enough in meaning that fine distinctions among them rarely matter.",
  },
  {
    type: 'text',
    content: "That's why naming the relationship first beats memorizing a long word list: the choice is a *direction*, and any word pointing in that direction will serve.",
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
    type: 'list',
    title: 'Two narrower jobs sit inside the continue family and show up often:',
    items: [
      '**Example** (*for instance, for example*) — the second sentence is a specific case of the first.',
      '**Sequence** (*first, next, finally, meanwhile*) — genuine time order is present.',
    ],
  },
  {
    type: 'text',
    content: "When every available choice is a continuer, decide which of these sub-jobs the sentence requires.",
  },
  {
    type: 'diagramRef',
    visualType: 'transitionMapDiagram',
    description: "The five transition families — Contrast, Cause/Result, Addition, Example, and Time — each with its signal words: name the relationship between the two sentences first, and the family hands you the word.",
  },

  { type: 'heading', content: 'Check the direction on cause and contrast' },
  {
    type: 'text',
    content: "Cause-and-effect words are directional. *Therefore* introduces the **result**; *because* introduces the **reason**.",
  },
  {
    type: 'text',
    content: "Place a result word where a reason belongs and the logic runs backward — wrong choices are routinely built from exactly that reversal.",
  },
  {
    type: 'text',
    content: "Contrast carries a distinction of its own: plain difference takes *however*, while a concession — *despite that* — calls for *nevertheless* or *still*. Same family, different shade.",
  },

  { type: 'heading', content: 'How to approach these questions' },
  {
    type: 'steps',
    items: [
      "**Cover the choices.** Read the sentence before the blank and the sentence containing it — nothing else yet.",
      "**Gist both sentences.** Reduce each to a few plain words.",
      "**Name the relationship.** What does the second sentence do to the first — continue it, result from it, or push against it?",
      "**Check the direction.** On cause/effect, decide whether the blank introduces the reason or the result; on contrast, decide plain difference or concession.",
      "**Match.** Scan the choices for the one word that fits the relationship you named.",
    ],
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The museum had planned an outdoor exhibit. ______, a storm forced the whole show indoors.\n\n(A) Similarly\n(B) However\n(C) For example',
    steps: [
      { label: 'Gist each sentence', content: 'Before: the exhibit was planned *outside*. After: it ended up *inside*.' },
      { label: 'Name the relationship', content: "The second idea reverses the plan — **contrast**." },
      { label: 'Match', content: 'Only **(B) However** signals a reversal. *Similarly* continues; *For example* introduces an instance — both belong to the wrong family.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The bridge had gone unrepaired for decades. ______, engineers closed it before it could collapse.\n\n(A) Nevertheless\n(B) Therefore\n(C) In addition',
    steps: [
      { label: 'Gist each sentence', content: 'Before: the bridge sat neglected for decades. After: engineers closed it.' },
      { label: 'Name the relationship', content: 'The closing happened *because of* the neglect — **cause and effect**.' },
      { label: 'Check the direction', content: 'The blank needs a word that introduces a result → **(B) Therefore**. *Nevertheless* signals a reversal; *In addition* merely adds.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Solar panels are often praised as maintenance-free. Their surfaces, ______, collect dust that can cut output by a fifth if never cleaned.\n\n(A) for example\n(B) as a result\n(C) however',
    steps: [
      { label: 'Note the mid-sentence blank', content: "The position doesn't change the method — the transition still points backward. Compare this sentence to the one before it, not to the words next to the blank." },
      { label: 'Gist each sentence', content: 'Before: the panels are described as *maintenance-free*. After: they in fact require cleaning.' },
      { label: 'Name the relationship', content: 'The second sentence contradicts the "maintenance-free" claim → **contrast**.' },
      { label: 'Match', content: "**(C) however.** *As a result* runs the logic in the wrong direction; *for example* would require the second sentence to be an instance of \"maintenance-free,\" when it's the opposite." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The city planted thousands of trees downtown. ______, it added rooftop gardens to dozens of public buildings.\n\n(A) However\n(B) In addition\n(C) For example',
    steps: [
      { label: 'Gist each sentence', content: 'Before: the city planted trees. After: it added rooftop gardens — a further green measure.' },
      { label: 'Name the relationship', content: 'The second idea adds a further step in the same direction → **continue / add**.' },
      { label: 'Match', content: "**(B) In addition.** *However* signals a reversal that never happens; *For example* would require the rooftop gardens to be an *instance* of tree-planting, and they're a separate measure." },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'The new policy cut commute times sharply. ______, air quality downtown improved within months. Continue, cause/effect, or contrast — and which word: (also / therefore / however)?',
    answer: "**Cause and effect → therefore.** Cleaner air is the *result* of shorter commutes. *However* would announce a reversal that isn't there; *also* would merely append an unrelated point.",
  },
  {
    type: 'checkpointQuestion',
    question: 'The recipe calls for fresh basil. ______, dried basil works fine if that is all you have. Which family, and would you pick "moreover" or "that said"?',
    answer: '**Contrast (a concession) → that said.** The second sentence walks back the fresh-basil requirement, so a "despite that" word is needed. *Moreover* would reinforce the requirement — the opposite of what the sentence does.',
  },
  {
    type: 'checkpointQuestion',
    question: 'The prototype passed every lab test. ______, it failed the moment real customers used it. Which family, and pick (moreover / therefore / however)?',
    answer: "**Contrast → however.** The second sentence reverses the lab-test success. *Moreover* would add another success, and *therefore* would present the failure as a *result* of passing the tests — the logic run backward, a reversal these items lean on again and again.",
  },

  {
    type: 'text',
    content: "**The whole skill in one pass:** cover the choices, gist the sentence before the blank and the sentence containing it, name the relationship — continue, cause/effect, or contrast — and match one word to it. You're never testing choices one by one.",
  },
];
