/**
 * Learn lesson body — Pronouns (Standard English Conventions).
 *
 * Lean "review / cheat-sheet" style — voice + shape follow the exemplar
 * gSubjectVerbAgreement.js. Gated by bodies.test.js (lean contract).
 * Rendered by SectionContent; loaded lazily via bodies/index.js.
 */

export const gPronounsBlocks = [
  {
    type: 'text',
    content: 'A pronoun is a stand-in for a noun — *it, they, this, who.* It has to do two things: **match the noun it replaces**, and **point clearly at one noun.** Almost every pronoun question is one of those two checks.',
  },

  { type: 'heading', content: 'What is actually tested' },
  {
    type: 'text',
    content: 'You already say *the dog… it* and *the dogs… they* without thinking, so the SAT never tests the easy version. Instead it hides the real noun behind other nouns so your ear grabs the wrong one, or it leaves the noun so vague that *it* could point at two things at once. Both traps work because a pronoun feels right as long as *something* nearby could be its noun — and that feel is exactly what fails you. The fix is always the same move: **find the actual noun on the page** and check it, instead of trusting how the sentence sounds.',
  },

  { type: 'heading', content: 'Job 1 — Match the number' },
  {
    type: 'text',
    content: 'A pronoun copies the number of the noun it stands for: singular noun → *it / its,* plural noun → *they / their.* Point at the real noun and read its ending; don\'t go by feel, and the noun must be **printed in the sentence** — a plural idea that is only implied doesn\'t count. The trap is the one used on verbs: a wrong-number noun sits right before the pronoun as a decoy. *The **shipment** of new phones arrived, but ______ was damaged* → the noun is *shipment,* so *it,* not *they* (*phones* is the decoy).',
  },
  {
    type: 'keyInsight',
    content: 'Match the pronoun to the noun it truly stands for, never to the nearest noun. Collective nouns (*team, company, committee, jury*) count as **singular** — *the team lost its lead.*',
  },

  { type: 'heading', content: 'Number cheat-sheet' },
  {
    type: 'table',
    headers: ['The real noun is…', 'Use', 'Example'],
    rows: [
      ['a singular thing', '*it / its*', '*The **data set** lost **its** labels.*'],
      ['a plural thing', '*they / their*', '*The **files** kept **their** names.*'],
      ['a collective (team, jury)', '*it / its*', '*The **jury** reached **its** verdict.*'],
      ['each, every, either, neither', '*it / its* (singular)', '*Each of the tools has **its** case.*'],
      ['a generic single person', '*they / their* is fine', '*Every **student** brought **their** ID.*'],
    ],
  },

  { type: 'heading', content: 'Job 2 — Point at ONE noun' },
  {
    type: 'text',
    content: 'A pronoun must have exactly one noun it could mean. If *it, they,* or *this* could point at two nouns, it is wrong — even if it sounds fine. Vague: *The report criticized the study because **it** was rushed.* What was rushed, the report or the study? Fix by naming it: *…because **the study** was rushed.* When a choice set mixes a pronoun with a specific noun and the pronoun is ambiguous, **take the noun.**',
  },
  {
    type: 'tip',
    content: 'Bare *this* / *that* is usually too vague on its own. Prefer *this* + a noun: not *This shows growth,* but *This **increase** shows growth.* Ask "this what?" — if the sentence can\'t answer, add the noun.',
  },

  { type: 'heading', content: 'Job 3 — who / whom / that / which / whose' },
  {
    type: 'text',
    content: 'Two quick sorts pick the word: first **what kind of thing** it refers to, then — for *who / whom* — **what slot** it fills. This family trips people up because all five words can open the same kind of clause, so they sound interchangeable. They are not: picking wrong here is a pure paper decision, like the apostrophe questions. Run the two sorts in order and only one word survives.',
  },
  {
    type: 'table',
    headers: ['Word', 'Use it for', 'Test'],
    rows: [
      ['who', 'a person, doing the action', 'a verb comes right after → *the doctor **who** treated me*'],
      ['whom', 'a person, receiving the action', 'follows a preposition → *the doctor **to whom** I spoke*'],
      ['which / that', 'a thing', '*the theory **that** failed* (never *who* for a thing)'],
      ['whose', 'possession (person OR thing)', '*a theory **whose** claims held up*'],
    ],
  },
  {
    type: 'text',
    content: 'Quick *who / whom* check: if the next word is a **verb**, use *who* (*who **called***). If a **preposition** comes just before, use *whom* (*with **whom***). *Whom* directly in front of a verb is the error signature.',
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The collection of fossils, gathered over decades, finally found ______ permanent home in the museum.\n\n(A) its\n(B) their',
    steps: [
      { label: 'Find the real noun', content: 'What found a home? The **collection** — singular. *of fossils* is a decoy phrase.' },
      { label: 'Match number', content: '*Collection* is singular → singular pronoun.' },
      { label: 'Answer', content: '**(A) its.** *Their* is baited by *fossils* sitting right before the blank.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'The novelist praised her editor\'s revision, saying ______ made the ending far stronger.\n\n(A) it\n(B) the change\n(C) they\n(D) this',
    steps: [
      { label: 'Check the pronouns', content: '*It / this* could mean the revision, the praise, or the ending — ambiguous. *They* has no plural noun to match.' },
      { label: 'Prefer the specific noun', content: 'Only **the change** names one clear thing.' },
      { label: 'Answer', content: '**(B) the change.** When a pronoun could point two ways, the named noun wins.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'She is the researcher ______ first mapped the migration route.\n\n(A) who\n(B) whom\n(C) which\n(D) whose',
    steps: [
      { label: 'What kind of thing?', content: 'A **person** (the researcher) → rules out *which.*' },
      { label: 'Who or whom?', content: 'The next word is a verb, *mapped* — the researcher is doing the action → subject form.' },
      { label: 'Answer', content: '**(A) who.** *Whom* before a verb is the classic wrong answer; *whose* would need a possession.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The orchestra tuned ______ instruments before the concert began.\n\n(A) its\n(B) their',
    steps: [
      { label: 'Find the real noun', content: 'What owns the instruments? The **orchestra** — a collective noun naming one group.' },
      { label: 'Match number', content: 'Collectives (*orchestra, team, jury*) count as singular → singular pronoun. **(A) its.** *Their* is baited by picturing the many individual players.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'The company announced that ______ would relocate its headquarters. Fill the blank and say why.',
    answer: '**it.** *Company* is a collective noun — treated as singular — so it takes *it / its,* not *they / their.*',
  },
  {
    type: 'checkpointQuestion',
    question: 'A friend to ______ I owe a great deal is visiting. Is it *who* or *whom* — and how do you know?',
    answer: '**whom.** It follows the preposition *to,* so use the object form. Flip it around: *I owe a great deal to her* (not *she*), which confirms *whom.*',
  },
  {
    type: 'checkpointQuestion',
    question: 'Each of the paintings has lost ______ original frame over the years. Fill the blank and explain.',
    answer: '**its.** *Each* is singular no matter how many paintings follow it, so it takes the singular *its*; *of the paintings* is a decoy of-phrase, not the real noun.',
  },

  {
    type: 'text',
    content: '**The move, every time:** find the real noun on the page → match its number, or name it if the pronoun is vague → for *who / whom,* sort person-vs-thing, then verb-after (*who*) vs preposition-before (*whom*).',
  },
];
