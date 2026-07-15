/**
 * Learn lesson body — Transitions (Expression of Ideas).
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

export const gTransitionsBlocks = [
  {
    type: 'text',
    content: "A transition carries no information of its own — its single function is to **name the relationship between the idea before it and the idea after it**: continuation, cause and effect, or contrast. Identify the relationship correctly, and the word follows directly.",
  },

  { type: 'heading', content: 'What is actually tested' },
  {
    type: 'text',
    content: "These items resemble vocabulary questions, which invites a plug-in-and-listen approach — but they are not vocabulary questions. All four choices are genuine transition words, and every one fits grammatically; the choices are constructed that way. What is actually assessed is whether the *logic* between two sentences has been tracked. The effective method is therefore not knowing what \"nevertheless\" means but deciding what kind of word the sentence requires before reading any choice.",
  },

  { type: 'heading', content: 'Step 1 — A transition points backward' },
  {
    type: 'text',
    content: "Wherever the blank sits — at the start of the sentence, in the middle, or at the end — the transition connects its sentence to the one **immediately before it**. Cover the answers, read the sentence before the blank and the sentence containing it, and determine what the second does to the first. The choices are consulted last.",
  },
  {
    type: 'keyInsight',
    content: "Cover the choices first. Testing words one at a time is unreliable because incorrect choices are routinely constructed to sound plausible in isolation. Determine the relationship independently, then select the word that matches it.",
  },

  { type: 'heading', content: 'Step 2 — Predict, then match' },
  {
    type: 'text',
    content: "Reduce each sentence to a short gist. Then state, in plain words, what the second does to the first: *continues it*, *results from it*, or *pushes against it*. That prediction — \"a contrast word is needed\" — defines the target. Scan the choices for the one that fits the prediction. The task becomes matching a word to a decision already made, not evaluating four candidates in turn.",
  },

  { type: 'heading', content: 'The three transition families' },
  {
    type: 'text',
    content: "Every transition performs one of exactly three jobs. Once the required job is named, only the family has to be recognized — the words within a family are close enough in meaning that fine distinctions among them are rarely required. Naming the relationship first is therefore more efficient than memorizing a long word list: the choice is a *direction*, and any word pointing in that direction will serve.",
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
    content: "Two narrower jobs sit inside the continue family and appear frequently: **example** (*for instance, for example*) when the second sentence is a specific case of the first, and **sequence** (*first, next, finally, meanwhile*) when genuine time order is present. When every available choice is a continuer, determine which of these sub-jobs the sentence requires.",
  },

  { type: 'heading', content: 'Check the direction on cause and contrast' },
  {
    type: 'text',
    content: "Cause-and-effect words are directional. *Therefore* introduces the **result**; *because* introduces the **reason**. Placing a result word where a reason belongs runs the logic backward, and incorrect choices are routinely built from exactly that reversal. Contrast carries a distinction of its own: plain difference takes *however*, while a concession — \"despite that\" — calls for *nevertheless* or *still*. The words share a family but differ in this respect.",
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
      { label: 'Note the mid-sentence blank', content: "The position does not change the method — the transition still points backward. Compare this sentence to the one before it, not to the words adjacent to the blank." },
      { label: 'Gist each sentence', content: 'Before: the panels are described as *maintenance-free*. After: they in fact require cleaning.' },
      { label: 'Name the relationship', content: 'The second sentence contradicts the "maintenance-free" claim → **contrast**.' },
      { label: 'Match', content: "**(C) however.** *As a result* runs the logic in the wrong direction; *for example* would require the second sentence to be an instance of \"maintenance-free,\" when it is the opposite." },
    ],
  },

  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The city planted thousands of trees downtown. ______, it added rooftop gardens to dozens of public buildings.\n\n(A) However\n(B) In addition\n(C) For example',
    steps: [
      { label: 'Gist each sentence', content: 'Before: the city planted trees. After: it added rooftop gardens — a further green measure.' },
      { label: 'Name the relationship', content: 'The second idea adds a further step in the same direction → **continue / add**.' },
      { label: 'Match', content: "**(B) In addition.** *However* signals a reversal that does not occur; *For example* would require the rooftop gardens to be an *instance* of tree-planting, and they are a separate measure." },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'The new policy cut commute times sharply. ______, air quality downtown improved within months. Continue, cause/effect, or contrast — and which word: (also / therefore / however)?',
    answer: "**Cause and effect → therefore.** Cleaner air is the *result* of shorter commutes. *However* would announce a reversal that is not present; *also* would merely append an unrelated point.",
  },
  {
    type: 'checkpointQuestion',
    question: 'The recipe calls for fresh basil. ______, dried basil works fine if that is all you have. Which family, and would you pick "moreover" or "that said"?',
    answer: '**Contrast (a concession) → that said.** The second sentence walks back the fresh-basil requirement, so a "despite that" word is needed. *Moreover* would reinforce the requirement — the opposite of what the sentence does.',
  },
  {
    type: 'checkpointQuestion',
    question: 'The prototype passed every lab test. ______, it failed the moment real customers used it. Which family, and pick (moreover / therefore / however)?',
    answer: "**Contrast → however.** The second sentence reverses the lab-test success. *Moreover* would add another success, and *therefore* would present the failure as a *result* of passing the tests — the logic run backward, a reversal that recurs across these items.",
  },

  {
    type: 'text',
    content: '**In summary:** cover the choices, read the sentence before the blank and the sentence containing it, name the relationship (continue, cause/effect, or contrast), and then match a word to that relationship — rather than testing choices one by one.',
  },
];
