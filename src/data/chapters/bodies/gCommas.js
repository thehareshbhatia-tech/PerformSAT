/**
 * Learn lesson body — Commas & Nonessential Elements (Standard English Conventions).
 *
 * TUTOR VOICE (adopted 2026-07-14, user-approved exemplar mLinearEquations.js):
 * coaching direct-address — talks TO the student, anticipates the mistake
 * before it happens, everyday anchor first and rule second, concrete decision
 * rules ("cover the phrase and reread"). Lean structure unchanged; gated by
 * chapters/__tests__/bodies.test.js (lean contract).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const gCommasBlocks = [
  {
    type: 'text',
    content: 'Every comma question is secretly the same question: **if I covered this phrase, would you still know which one I mean?** Extra info gets commas. Identifying info gets none. Forget the pause-for-breath comma you learned in school — the test never rewards it. Ask the extra-or-needed question first, every time, and the rest of this lesson falls out of it.',
  },

  { type: 'heading', content: 'The remove-it test' },
  {
    type: 'text',
    content: 'Cover the phrase and read the sentence without it. Still makes sense, still points at the same thing? The phrase is **extra** — wall it off with a comma (or a matching pair). Does removing it leave you asking *which one?* Then the phrase is **essential** — no commas anywhere near it. *My brother, who lives in Denver, is visiting* → cover *who lives in Denver* and you still know exactly who\'s visiting → extra → commas.',
  },

  { type: 'heading', content: 'Essential info gets NO commas' },
  {
    type: 'text',
    content: 'When a phrase is doing the job of telling you *which one*, deleting it breaks the sentence — so it rides comma-free. *The student who scored highest won a prize* — take out *who scored highest* and you\'ve lost which student we\'re talking about. Essential. No commas.',
  },
  {
    type: 'keyInsight',
    content: 'Commas around a phrase make a promise: **"delete this and you lose nothing."** If deleting it loses the meaning, the commas are lying — and lying commas are wrong.',
  },

  { type: 'heading', content: 'That vs which / who' },
  {
    type: 'text',
    content: '*That* is **always** essential, so a comma never sits in front of it: *the report that changed everything*. Put commas around a *which* or *who* clause and you\'ve flipped its meaning to "extra, by the way": *the report, which changed everything, ...*. Same words, different claim — the commas alone decide it. When you spot *, that* in an answer choice, cross it out on sight.',
  },

  { type: 'heading', content: 'Names: one of many, or the only one?' },
  {
    type: 'text',
    content: 'Before you comma a name, ask one question: does the noun in front of it **already point to one person**? Only one exists → the name is extra → commas. Several exist → the name is doing the identifying → no commas.',
  },
  {
    type: 'table',
    headers: ['Sentence', 'Commas?', 'Why'],
    rows: [
      ['*Her only sister, Maren, called.*', 'Yes', 'Only one sister — the name is extra'],
      ['*The poet Maren Vale spoke.*', 'No', 'One poet of many — the name says which'],
      ['*microbiologist Ana Reyes*', 'No', 'A title before a name never takes a comma'],
    ],
  },

  { type: 'heading', content: 'A mid-sentence aside needs a matching pair' },
  {
    type: 'text',
    content: 'Interrupt a sentence and you owe it a matched set: comma…comma or dash…dash — never one of each. *The results — surprising to everyone, were published.* opens with a dash and tries to close with a comma. That mismatch is easy to sail past, because your eye checks the first mark and coasts. Check both ends: *The results — surprising to everyone — were published.*',
  },

  { type: 'heading', content: 'Every comma needs a job' },
  {
    type: 'text',
    content: 'Treat every comma as guilty until it names its job. If you can\'t say what a comma is doing, delete it. The legal jobs:',
  },
  {
    type: 'table',
    headers: ['Job', 'Example'],
    rows: [
      ['Separate items in a list', '*red, white, and blue*'],
      ['After an opener', '*After the storm, we left.*'],
      ['One half of a matching aside pair', '*Ravi, our captain, agreed.*'],
      ['Before a FANBOYS joining two full sentences', '*She ran, and he walked.*'],
    ],
  },
  {
    type: 'callout',
    content: 'The forbidden one: a comma **never splits a subject from its verb**, no matter how long the subject runs. *The students who studied all week, passed.* is wrong — that comma has no job. Long subjects beg for a breath-comma; don\'t give them one.',
  },
  {
    type: 'tip',
    content: 'An embedded question ends with a **period**, not a question mark: *She asked whether it worked.* The sentence is telling you something, not asking you anything — *whether* is your tell.',
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The novel ______ won every major award that year, sold millions of copies.\n\n(A) , which\n(B) that\n(C) which\n(D) , that',
    steps: [
      { label: 'Read the claim', content: 'The phrase adds a fact about the novel, but you already know which novel — so it\'s **extra**.' },
      { label: 'Extra means comma + which', content: '*That* never takes a comma, which kills (B) and (D) on sight. Bare *which* (C) would claim the phrase is essential — it isn\'t.' },
      { label: 'Answer', content: '**(A) , which** — the comma\'d *which* marks the aside correctly.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Choose the correct version:\n\n(A) The chemist, Rosa Lind, discovered the compound.\n(B) The chemist Rosa Lind discovered the compound.',
    steps: [
      { label: 'One of many, or the only one?', content: '*The chemist* doesn\'t point to one person by itself — the name is telling you **which** chemist.' },
      { label: 'Identifying = no commas', content: 'The name identifies, so it\'s essential. Commas here would falsely promise there\'s only one chemist in play.' },
      { label: 'Answer', content: '**(B)** — no commas. (Compare *microbiologist Ana Reyes*: a title in front of a name never takes one.)' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'The bridge, a marvel of engineering ______ reopened last spring.\n\n(A) ,\n(B) —\n(C) (no mark)\n(D) ;',
    steps: [
      { label: 'Spot the open bracket', content: 'A comma already opened an aside after *bridge*: *, a marvel of engineering*. An open aside has to close.' },
      { label: 'Match the mark', content: 'It opened with a comma, so it closes with a **comma** — like closes like. The dash in (B) would make a mismatched pair.' },
      { label: 'Answer', content: '**(A) ,** — the pair is comma…comma. A semicolon (D) would strand a fragment on one side.' },
    ],
  },

  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The students who studied together every night ______ the hardest exam of the term.\n\n(A) , passed\n(B) passed\n(C) passed,',
    steps: [
      { label: 'Find the subject and verb', content: 'The subject is *The students who studied together every night* — that *who* clause tells you **which** students, so it\'s essential and rides comma-free. The verb is *passed*.' },
      { label: 'No comma splits them', content: 'A comma between a subject and its verb has no legal job, however long the subject runs → **(B)**.' },
      { label: 'Reject the rest', content: '(A) drops a lone comma right in front of the verb; (C) strands one between *passed* and its object *the hardest exam*. Ask either comma its job — silence.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'The lab, that we toured on Friday, has since expanded. What is wrong here?',
    answer: '**Two things.** *That* never takes a comma — that\'s an instant flag. Then decide what the sentence means: if the tour detail is just an aside, write *, which we toured on Friday,*; if it identifies **which** lab, write *The lab that we toured on Friday has expanded* — no commas, no *which*. Pick one claim and punctuate it honestly.',
  },
  {
    type: 'checkpointQuestion',
    question: 'The researchers wondered whether the effect was real. Question mark or period?',
    answer: '**Period.** It\'s an embedded question — the sentence reports that they wondered; it doesn\'t ask you anything. *Whether* is the tell.',
  },
  {
    type: 'checkpointQuestion',
    question: 'For the school play, the lead role went to Ana, and the understudy was Theo. Does the comma before "and" have a job?',
    answer: '**Yes.** *The lead role went to Ana* and *the understudy was Theo* both stand alone, so the comma before the FANBOYS word *and* is doing its legal join-two-sentences job. (Cover the *and* and that same comma becomes a splice — the FANBOYS word is what keeps it legal.)',
  },

  {
    type: 'text',
    content: '**The move, every time:** cover the phrase and reread → extra gets commas, identifying gets none → an aside closes with the same mark that opened it → and any comma that can\'t name its job gets deleted.',
  },
];
