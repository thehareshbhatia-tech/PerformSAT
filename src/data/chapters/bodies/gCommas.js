/**
 * Learn lesson body — Commas & Nonessential Elements (Standard English Conventions).
 *
 * NEW lean "review / cheat-sheet" style (matches gSubjectVerbAgreement.js — the
 * VOICE + SHAPE exemplar): one SAT skill per lesson, plain language, one idea per
 * short section, a scannable cheat-list/table, then 2-3 worked examples and a
 * couple of check-yourself questions. Gated by bodies.test.js (lean contract).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const gCommasBlocks = [
  {
    type: 'text',
    content: 'Most comma questions are one question in disguise: **is this information extra, or is it needed to tell you which one?** Extra info gets commas. Needed info gets none.',
  },

  { type: 'heading', content: 'The remove-it test' },
  {
    type: 'text',
    content: 'Cover the phrase and reread the sentence. If it still makes sense and still points to the same thing, the phrase is **extra** — set it off with a comma (or a pair of commas). If removing it leaves you asking *which one?*, the phrase is **essential** — no commas. *My brother, who lives in Denver, is visiting* → drop *who lives in Denver* and you still know who is visiting → extra → commas.',
  },

  { type: 'heading', content: 'Essential info gets NO commas' },
  {
    type: 'text',
    content: 'When the phrase is doing the work of *identifying which one*, taking it out breaks the sentence — so it stays comma-free. *The student who scored highest won a prize* — remove *who scored highest* and you no longer know which student. It is essential, so no commas.',
  },
  {
    type: 'keyInsight',
    content: 'Commas around a phrase are a claim: **"you can delete this and lose nothing."** If deleting it loses the meaning, the commas are wrong.',
  },

  { type: 'heading', content: 'That vs which / who' },
  {
    type: 'text',
    content: '*That* is **always** essential — never put a comma before it: *the report that changed everything*. A comma’d *which* or *who* flips the meaning to "extra, by the way": *the report, which changed everything, ...*. Same words, different claim — the commas decide it.',
  },

  { type: 'heading', content: 'Names: one of many, or the only one?' },
  {
    type: 'text',
    content: 'A name takes commas only when the noun before it **already points to one thing**. Ask: is there just one, or several?',
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
    content: 'When you interrupt a sentence with an aside, both ends must use the **same** mark: comma…comma or dash…dash — never one of each. *The results — surprising to everyone, were published.* is wrong (dash then comma). Fix it to match: *The results — surprising to everyone — were published.*',
  },

  { type: 'heading', content: 'Every comma needs a job' },
  {
    type: 'text',
    content: 'A comma is guilty until it can name a job. If you can’t say what job a comma is doing, delete it. The legal jobs:',
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
    content: 'The forbidden one: a comma **never splits a subject from its verb**, no matter how long the subject gets. *The students who studied all week, passed.* is wrong — that lone comma has no job.',
  },
  {
    type: 'tip',
    content: 'An embedded question ends with a **period**, not a question mark: *She asked whether it worked.* The sentence is telling you something, not asking you.',
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The novel ______ won every major award that year, sold millions of copies.\n\n(A) , which\n(B) that\n(C) which\n(D) , that',
    steps: [
      { label: 'Read the claim', content: 'The phrase adds a fact about the novel but the sentence already knows which novel — so it is **extra**.' },
      { label: 'Extra means comma + which', content: '*That* can never take a comma, which kills (B) and (D). Bare *which* (C) would signal essential, wrong here.' },
      { label: 'Answer', content: '**(A) , which** — a comma’d *which* correctly marks the aside.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Choose the correct version:\n\n(A) The chemist, Rosa Lind, discovered the compound.\n(B) The chemist Rosa Lind discovered the compound.',
    steps: [
      { label: 'One of many, or the only one?', content: '*The chemist* does not point to a single person on its own — the name is telling us **which** chemist.' },
      { label: 'Identifying = no commas', content: 'Because the name identifies, it is essential. Commas would falsely claim there is only one chemist in play.' },
      { label: 'Answer', content: '**(B)** — no commas. (Compare *microbiologist Ana Reyes*: a title before a name never gets one.)' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'The bridge, a marvel of engineering ______ reopened last spring.\n\n(A) ,\n(B) —\n(C) (no mark)\n(D) ;',
    steps: [
      { label: 'Spot the open bracket', content: 'A comma already opened an aside after *bridge*: *, a marvel of engineering*. The aside must close.' },
      { label: 'Match the mark', content: 'It opened with a comma, so it closes with a **comma** — like closes like. A dash (B) would be a mismatched pair.' },
      { label: 'Answer', content: '**(A) ,** — the pair is comma…comma. A semicolon (D) would leave a fragment on one side.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'The lab, that we toured on Friday, has since expanded. What is wrong here?',
    answer: '**Two things.** *That* can never take a comma. And "which we toured on Friday" is the aside intended — but if the sentence needs to identify *which* lab, it should be *The lab that we toured on Friday has expanded* (no commas, no *which*). Pick one: extra info uses *, which ,*; identifying info uses bare *that*.',
  },
  {
    type: 'checkpointQuestion',
    question: 'The researchers wondered whether the effect was real. Question mark or period?',
    answer: '**Period.** This is an embedded question — the sentence reports that they wondered; it does not ask you anything. *whether* is the tell.',
  },

  {
    type: 'text',
    content: '**The move, every time:** run the remove-it test → extra gets commas, essential gets none → make asides a matching pair → and if a comma can’t name its job, cut it.',
  },
];
