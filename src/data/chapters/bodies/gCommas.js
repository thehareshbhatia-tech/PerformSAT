/**
 * Learn lesson body — Commas & Nonessential Elements (Standard English Conventions).
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

export const gCommasBlocks = [
  {
    type: 'text',
    content: 'Nearly every comma question reduces to one distinction: does the phrase supply extra information or identifying information? **Extra information takes commas; identifying information takes none.** The pause-for-breath comma taught informally is never the basis of a correct answer. Apply the extra-or-identifying test first, and most comma decisions follow from it.',
  },

  { type: 'heading', content: 'The removal test' },
  {
    type: 'text',
    content: 'Cover the phrase and read the sentence without it. If the sentence still makes sense and still refers to the same thing, the phrase is **extra** — set it off with a comma or a matching pair. If removing it leaves the question *which one?* unanswered, the phrase is **essential** and takes no commas. In *My brother, who lives in Denver, is visiting*, covering *who lives in Denver* leaves the referent perfectly clear — the clause is extra, so it takes commas.',
  },

  { type: 'heading', content: 'Essential elements take no commas' },
  {
    type: 'text',
    content: 'When a phrase identifies *which one*, deleting it removes information the sentence depends on, so it takes no commas. In *The student who scored highest won a prize*, removing *who scored highest* loses which student is meant. The clause is essential, and it is written without commas.',
  },
  {
    type: 'keyInsight',
    content: 'Commas around a phrase assert that the phrase is removable — **the sentence loses nothing without it.** If deleting the phrase changes the meaning, the commas make a false claim and are incorrect.',
  },

  { type: 'heading', content: 'That vs which / who' },
  {
    type: 'text',
    content: 'A clause beginning with *that* is **always** essential, so a comma never precedes it: *the report that changed everything*. Commas around a *which* or *who* clause mark it as extra, incidental information: *the report, which changed everything, ...*. The words are identical; the commas alone determine which claim the sentence makes. An answer choice containing *, that* can be eliminated immediately.',
  },

  { type: 'heading', content: 'Names as essential or extra information' },
  {
    type: 'text',
    content: 'To punctuate a name, ask whether the noun before it **already identifies one unique person**. If only one such person exists, the name is extra and takes commas. If several exist, the name performs the identification and takes none.',
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

  { type: 'heading', content: 'Matching punctuation around interruptions' },
  {
    type: 'text',
    content: 'An interrupting phrase requires a matched set of marks: comma…comma or dash…dash — never one of each. *The results — surprising to everyone, were published.* opens with a dash and closes with a comma. Mismatches of this kind are easy to overlook, because a reader verifies the first mark and skims past the second. Check both ends: *The results — surprising to everyone — were published.*',
  },

  { type: 'heading', content: 'Every comma must serve a function' },
  {
    type: 'text',
    content: 'A comma is justified only by an identifiable function; a comma whose function cannot be named should be deleted. The recognized functions:',
  },
  {
    type: 'table',
    headers: ['Function', 'Example'],
    rows: [
      ['Separate items in a list', '*red, white, and blue*'],
      ['After an introductory phrase', '*After the storm, we left.*'],
      ['One half of a matched pair around extra information', '*Ravi, our captain, agreed.*'],
      ['Before a FANBOYS conjunction joining two full sentences', '*She ran, and he walked.*'],
    ],
  },
  {
    type: 'callout',
    content: 'One placement is never correct: a comma **never separates a subject from its verb**, however long the subject runs. *The students who studied all week, passed.* is wrong — the comma serves no function. Long subjects invite an intuitive pause-comma; the convention does not permit one.',
  },
  {
    type: 'tip',
    content: 'An embedded question ends with a **period**, not a question mark: *She asked whether it worked.* The sentence reports information rather than posing a question — the word *whether* signals the embedded form.',
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The novel ______ won every major award that year, sold millions of copies.\n\n(A) , which\n(B) that\n(C) which\n(D) , that',
    steps: [
      { label: 'Classify the phrase', content: 'The phrase adds a fact about the novel, but the novel is already identified — the phrase is **extra**.' },
      { label: 'Apply the that/which rule', content: '*That* marks an essential clause and never follows a comma, which eliminates (B) and (D). Bare *which* in (C) would present the phrase as essential — it is not.' },
      { label: 'Answer', content: '**(A) , which** — the comma with *which* correctly marks the extra information.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Choose the correct version:\n\n(A) The chemist, Rosa Lind, discovered the compound.\n(B) The chemist Rosa Lind discovered the compound.',
    steps: [
      { label: 'Test for uniqueness', content: '*The chemist* does not identify one unique person by itself — the name specifies **which** chemist.' },
      { label: 'Apply the rule', content: 'The name is identifying, so it is essential. Commas here would incorrectly assert that only one chemist is under discussion.' },
      { label: 'Answer', content: '**(B)** — no commas. Compare *microbiologist Ana Reyes*: a title before a name never takes a comma.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'The bridge, a marvel of engineering ______ reopened last spring.\n\n(A) ,\n(B) —\n(C) (no mark)\n(D) ;',
    steps: [
      { label: 'Identify the opened pair', content: 'A comma has already opened an interruption after *bridge*: *, a marvel of engineering*. An opened interruption must close.' },
      { label: 'Match the opening mark', content: 'The interruption opened with a comma, so it closes with a **comma** — the two marks must match. The dash in (B) would create a mismatched pair.' },
      { label: 'Answer', content: '**(A) ,** — the pair is comma…comma. A semicolon in (D) would leave a fragment on one side.' },
    ],
  },

  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The students who studied together every night ______ the hardest exam of the term.\n\n(A) , passed\n(B) passed\n(C) passed,',
    steps: [
      { label: 'Find the subject and verb', content: 'The subject is *The students who studied together every night* — the *who* clause identifies **which** students, so it is essential and takes no commas. The verb is *passed*.' },
      { label: 'Apply the subject-verb rule', content: 'A comma between a subject and its verb serves no function, however long the subject runs → **(B)**.' },
      { label: 'Eliminate the alternatives', content: '(A) places a lone comma directly before the verb; (C) places one between *passed* and its object *the hardest exam*. Neither comma serves any identifiable function.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'The lab, that we toured on Friday, has since expanded. What is wrong here?',
    answer: '**Two errors.** *That* never follows a comma — an immediate flag. The correction depends on the intended meaning: if the tour detail is extra information, write *, which we toured on Friday,*; if it identifies **which** lab, write *The lab that we toured on Friday has expanded* — no commas and no *which*. The sentence must commit to one claim and punctuate it consistently.',
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
    type: 'text',
    content: '**In summary:** cover the phrase and reread — extra information takes commas, identifying information takes none; an interruption closes with the same mark that opened it; and a comma with no identifiable function should be deleted.',
  },
];
