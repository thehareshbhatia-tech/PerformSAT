/**
 * Learn lesson body — Commas & Nonessential Elements (Standard English Conventions).
 *
 * VOICE v3 (adopted 2026-07-17, exemplar: bodies/centralIdeas.js): scannable
 * instructional register — direct address, contractions, 1-3 sentence text
 * blocks, list blocks for criteria, steps blocks for procedures; no analogies,
 * no pep-talk, no emojis. All substance of the v2 textbook version preserved.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const gCommasBlocks = [
  {
    type: 'text',
    content: "Sentence boundaries settled which marks can stand between two complete sentences. The comma — the one mark that can't stand there alone — has jobs of its own inside the sentence.",
  },
  {
    type: 'text',
    content: "Nearly every comma question reduces to one distinction: is the phrase extra information, or identifying information? **Extra information takes commas; identifying information takes none.**",
  },
  {
    type: 'text',
    content: "The pause-for-breath comma taught informally is never the basis of a correct answer. Run the extra-or-identifying test first, and most comma decisions follow from it.",
  },

  { type: 'heading', content: 'The removal test' },
  {
    type: 'text',
    content: "Cover the phrase and read the sentence without it. Then sort:",
  },
  {
    type: 'list',
    items: [
      'The sentence still makes sense and still refers to the same thing → the phrase is **extra**. Set it off with a comma or a matching pair.',
      'Removing it leaves the question *which one?* unanswered → the phrase is **essential**. No commas.',
    ],
  },
  {
    type: 'text',
    content: "In *My brother, who lives in Denver, is visiting*, covering *who lives in Denver* leaves the referent perfectly clear — the clause is extra, so it takes commas.",
  },

  { type: 'heading', content: 'Essential elements take no commas' },
  {
    type: 'text',
    content: "When a phrase identifies *which one*, deleting it removes information the sentence depends on — so it takes no commas.",
  },
  {
    type: 'text',
    content: "In *The student who scored highest won a prize*, removing *who scored highest* loses which student is meant. The clause is essential, and it's written without commas.",
  },
  {
    type: 'keyInsight',
    content: "Commas around a phrase assert that the phrase is removable — **the sentence loses nothing without it.** If deleting the phrase changes the meaning, the commas make a false claim and are incorrect.",
  },

  { type: 'heading', content: 'That vs. which / who' },
  {
    type: 'text',
    content: "A clause beginning with *that* is **always** essential, so a comma never comes before it: *the report that changed everything*.",
  },
  {
    type: 'text',
    content: "Commas around a *which* or *who* clause mark it as extra, incidental information: *the report, which changed everything, ...*. The words are identical; the commas alone decide which claim the sentence makes.",
  },
  {
    type: 'tip',
    content: "An answer choice containing *, that* can be eliminated on sight.",
  },

  { type: 'heading', content: 'Names: essential or extra?' },
  {
    type: 'text',
    content: "To punctuate a name, ask whether the noun before it **already identifies one unique person**.",
  },
  {
    type: 'list',
    items: [
      'Only one such person exists → the name is extra and takes commas.',
      'Several exist → the name does the identifying and takes none.',
    ],
  },
  {
    type: 'table',
    headers: ['Sentence', 'Commas?', 'Why'],
    rows: [
      ['*Her only sister, Maren, called.*', 'Yes', 'Only one sister — the name is extra'],
      ['*The poet Maren Vale spoke.*', 'No', 'One poet among many — the name identifies which'],
      ['*microbiologist Ana Reyes*', 'No', 'A title before a name never takes a comma'],
    ],
  },

  { type: 'heading', content: 'Matching marks around interruptions' },
  {
    type: 'text',
    content: "An interrupting phrase takes a matched set of marks: comma…comma or dash…dash — never one of each.",
  },
  {
    type: 'text',
    content: "*The results — surprising to everyone, were published.* opens with a dash and closes with a comma. Mismatches like this are easy to miss, because a reader verifies the first mark and skims past the second.",
  },
  {
    type: 'text',
    content: "Check both ends: *The results — surprising to everyone — were published.*",
  },

  { type: 'heading', content: 'Every comma must serve a function' },
  {
    type: 'text',
    content: "A comma is justified only by a function you can name. If no function can be named, delete the comma. The recognized functions:",
  },
  {
    type: 'table',
    headers: ['Function', 'Example'],
    rows: [
      ['Separate items in a list', '*red, white, and blue*'],
      ['After an introductory phrase', '*After the storm, we left.*'],
      ['One half of a matched pair around extra information', '*Ravi, our captain, agreed.*'],
      ['Before a FANBOYS conjunction joining two full sentences', '*She ran, and he walked.*'],
      ['Between coordinate adjectives that each modify the noun', '*a long, tedious meeting*'],
    ],
  },
  {
    type: 'callout',
    content: "One placement is never correct: a comma **never separates a subject from its verb**, however long the subject runs. *The students who studied all week, passed.* is wrong — the comma serves no function. Long subjects invite an intuitive pause-comma; the convention doesn't permit one.",
  },

  { type: 'heading', content: 'Coordinate adjectives' },
  {
    type: 'text',
    content: "When two adjectives each modify the noun independently, they're **coordinate**, and a comma separates them: *a long, tedious meeting*.",
  },
  {
    type: 'list',
    title: 'Two tests confirm the relationship — both must pass:',
    items: [
      '**Swap the adjectives.** *a tedious, long meeting* — still natural.',
      '**Insert *and*.** *a long and tedious meeting* — still natural.',
    ],
  },
  {
    type: 'text',
    content: "When either test fails, the adjectives are **cumulative** — the first modifies the adjective-noun unit as a whole — and no comma appears: *an old stone wall*, never *an old, stone wall*, because *a stone old wall* and *an old and stone wall* both fail.",
  },
  {
    type: 'text',
    content: "And one placement is wrong in every case: no comma ever separates the final adjective from its noun. *a long, tedious, meeting* is incorrect regardless of how the adjectives relate.",
  },

  { type: 'heading', content: 'Compound predicates' },
  {
    type: 'text',
    content: "One subject performing two actions is a **compound predicate**, and no comma comes before the *and* that joins the two verbs: *She wrote the report and filed it.*",
  },
  {
    type: 'text',
    content: "The comma-before-FANBOYS function applies only when a complete sentence stands on each side — and here the subject isn't restated. *filed it* has no subject of its own.",
  },
  {
    type: 'text',
    content: "The **period-substitution test** decides these instantly. Replace the comma + conjunction with a period and demand two complete sentences: *She wrote the report. Filed it.* fails — the second piece isn't a sentence — so *She wrote the report, and filed it* is incorrect.",
  },
  {
    type: 'text',
    content: "A long second verb phrase invites the comma by feel; the test is what rules it out.",
  },

  { type: 'heading', content: 'Semicolons in lists' },
  {
    type: 'text',
    content: "When list items contain commas of their own, commas alone can't show where one item ends and the next begins — so **semicolons take over as the list separators**: *The symposium drew scholars from Lima, Peru; Accra, Ghana; and Hanoi, Vietnam.*",
  },
  {
    type: 'text',
    content: "Written with commas throughout, the sentence appears to list six places rather than three.",
  },
  {
    type: 'text',
    content: "One requirement comes with the upgrade: separators must be uniform. Either every boundary in the list takes a semicolon or none does — a list that alternates commas and semicolons as separators is wrong on its face.",
  },
  {
    type: 'tip',
    content: "An embedded question ends with a **period**, not a question mark: *She asked whether it worked.* The sentence reports information rather than posing a question — the word *whether* signals the embedded form.",
  },

  { type: 'heading', content: 'Direct vs. embedded questions' },
  {
    type: 'text',
    content: "A **direct question** asks. It inverts the word order — verb before subject — and ends with a question mark: *Did the trial succeed?*",
  },
  {
    type: 'text',
    content: "An **embedded question** folds the questioning content inside a statement, typically after *whether, if, what, why,* or *how*. It keeps statement order, subject before verb, and ends with a period — the sentence as a whole asserts rather than asks: *The reviewers asked whether the trial had succeeded.*",
  },
  {
    type: 'text',
    content: "The two signals must agree. *She wondered why the results varied?* pairs statement order with a question mark; *asked whether had the trial succeeded* forces inverted order into an embedded clause. Both fail on internal inconsistency alone — the end mark punctuates what the sentence does, not whether its topic is uncertain.",
  },
  {
    type: 'table',
    headers: ['Form', 'Word order', 'End mark'],
    rows: [
      ['Direct question', 'inverted — verb before subject: *Did the trial succeed*', 'question mark'],
      ['Embedded question', 'statement order — subject before verb: *whether the trial succeeded*', 'period'],
    ],
  },

  { type: 'heading', content: 'How to approach these questions' },
  {
    type: 'steps',
    items: [
      '**Cover the phrase and reread.** Still clear which one is meant? The phrase is extra — commas. Left asking *which one?* — essential, no commas.',
      '**Check the pair.** An interruption closes with the same mark that opened it: comma…comma or dash…dash, never one of each.',
      "**Name the comma's function.** List separator, introductory phrase, matched pair, FANBOYS join between two full sentences, or coordinate adjectives — a comma with no nameable function gets deleted.",
      '**Watch the two never-placements.** No comma before *that*, and no comma between a subject and its verb.',
    ],
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The novel ______ won every major award that year, sold millions of copies.\n\n(A) , which\n(B) that\n(C) which\n(D) , that',
    steps: [
      { label: 'Classify the phrase', content: 'The phrase adds a fact about the novel, but the novel is already identified — the phrase is **extra**.' },
      { label: 'Apply the that/which rule', content: "*That* marks an essential clause and never follows a comma — that eliminates (B) and (D). Bare *which* in (C) would present the phrase as essential, and it isn't." },
      { label: 'Answer', content: '**(A) , which** — the comma with *which* correctly marks the extra information.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Choose the correct version:\n\n(A) The chemist, Rosa Lind, discovered the compound.\n(B) The chemist Rosa Lind discovered the compound.',
    steps: [
      { label: 'Test for uniqueness', content: "*The chemist* doesn't identify one unique person by itself — the name specifies **which** chemist." },
      { label: 'Apply the rule', content: "The name is identifying, so it's essential. Commas here would wrongly assert that only one chemist is under discussion." },
      { label: 'Answer', content: '**(B)** — no commas. Compare *microbiologist Ana Reyes*: a title before a name never takes a comma.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'The bridge, a marvel of engineering ______ reopened last spring.\n\n(A) ,\n(B) —\n(C) (no mark)\n(D) ;',
    steps: [
      { label: 'Identify the opened pair', content: 'A comma has already opened an interruption after *bridge*: *, a marvel of engineering*. An opened interruption has to close.' },
      { label: 'Match the opening mark', content: 'The interruption opened with a comma, so it closes with a **comma** — the two marks must match. The dash in (B) would create a mismatched pair.' },
      { label: 'Answer', content: '**(A) ,** — the pair is comma…comma. A semicolon in (D) would leave a fragment on one side.' },
    ],
  },

  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The students who studied together every night ______ the hardest exam of the term.\n\n(A) , passed\n(B) passed\n(C) passed,',
    steps: [
      { label: 'Find the subject and verb', content: "The subject is *The students who studied together every night* — the *who* clause identifies **which** students, so it's essential and takes no commas. The verb is *passed*." },
      { label: 'Apply the subject-verb rule', content: 'A comma between a subject and its verb serves no function, however long the subject runs → **(B)**.' },
      { label: 'Eliminate the alternatives', content: '(A) places a lone comma directly before the verb; (C) places one between *passed* and its object *the hardest exam*. Neither comma has a nameable job.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'The lab, that we toured on Friday, has since expanded. What is wrong here?',
    answer: '**Two errors.** *That* never follows a comma — an immediate flag. The correction depends on the intended meaning: if the tour detail is extra information, write *, which we toured on Friday,*; if it identifies **which** lab, write *The lab that we toured on Friday has expanded* — no commas and no *which*. The sentence has to commit to one claim and punctuate it consistently.',
  },
  {
    type: 'checkpointQuestion',
    question: 'The researchers wondered whether the effect was real. Question mark or period?',
    answer: '**Period.** This is an embedded question — the sentence reports that they wondered; it does not itself pose a question. The word *whether* signals the embedded form.',
  },
  {
    type: 'checkpointQuestion',
    question: 'For the school play, the lead role went to Ana, and the understudy was Theo. Does the comma before "and" have a job?',
    answer: '**Yes.** *The lead role went to Ana* and *the understudy was Theo* each stand alone as complete sentences, so the comma before the FANBOYS conjunction *and* performs its recognized function of joining two full sentences. Without the *and*, the same comma would create a comma splice — the conjunction is what makes the join grammatical.',
  },
  {
    type: 'checkpointQuestion',
    question: 'She proofread the essay, and submitted it before the deadline. Does that comma have a job?',
    answer: "**No — delete it.** Run period-substitution: *She proofread the essay. Submitted it before the deadline.* The second piece isn't a sentence, so this is one subject with two verbs — a compound predicate — not two sentences joined by *and*. The comma-before-FANBOYS function requires a complete sentence on each side: *She proofread the essay and submitted it before the deadline.*",
  },

  {
    type: 'text',
    content: "**The whole skill in three checks:** cover the phrase and reread — extra information takes commas, identifying information takes none; an interruption closes with the same mark that opened it; and a comma with no nameable function gets deleted.",
  },
];
