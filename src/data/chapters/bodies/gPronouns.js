/**
 * Learn lesson body — Pronouns (Standard English Conventions).
 *
 * VOICE (adopted 2026-07-15, exemplar: mLinearEquations.js): professional
 * textbook narrative — teaches directly in flowing prose (concept, why it
 * works, how to apply, common errors) in the measured register of a
 * well-edited textbook. Concrete contexts framed plainly as examples;
 * extended metaphors, cute headings, and pep-talk are out. Headings name
 * the concept. Gated by bodies.test.js.
 *
 * Rendered by SectionContent; loaded lazily via bodies/index.js.
 */

export const gPronounsBlocks = [
  {
    type: 'text',
    content: 'A pronoun stands in for a noun named elsewhere in the sentence: *it, they, this,* and *who* all refer back to something already stated. The reference works only under two conditions — the pronoun refers to exactly **one** noun, and it **matches** that noun in number. Nearly every pronoun question tests one of the two.',
  },

  { type: 'heading', content: 'What is actually tested' },
  {
    type: 'text',
    content: 'Simple pairings — *the dog… it*, *the dogs… they* — are automatic, so the tested versions are never simple. Either the true noun is placed behind other nouns so that the ear settles on the wrong one, or the sentence is constructed so that *it* could refer to two things at once. Both designs exploit the same weakness: a pronoun *sounds* correct whenever any nearby noun could plausibly be its referent, and that impression is unreliable. The method does not change: **identify the actual noun on the page** and check it, rather than judging by sound.',
  },

  { type: 'heading', content: 'Job 1 — Match the number' },
  {
    type: 'text',
    content: 'A pronoun copies the number of the noun it stands for: singular noun → *it / its*, plural noun → *they / their*. Identify the true noun and read its form — and the noun must be **printed in the sentence**; a plural idea that is merely implied does not qualify. The construction mirrors the one used in agreement questions: a noun of the wrong number sits immediately before the pronoun as a distractor. In *The **shipment** of new phones arrived, but ______ was damaged*, the noun is *shipment*, so the pronoun is *it*, not *they* — *phones* is the distractor.',
  },
  {
    type: 'keyInsight',
    content: 'Match the pronoun to the noun it truly stands for, never to the nearest noun. Collective nouns (*team, company, committee, jury*) are grammatically **singular** — *the team lost its lead* — even though a team consists of many people.',
  },

  { type: 'heading', content: 'The number rules' },
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

  { type: 'heading', content: 'Job 2 — Refer to one noun only' },
  {
    type: 'text',
    content: 'A pronoun must have exactly one possible referent. If *it, they,* or *this* could refer to two different nouns, the pronoun is incorrect — even when the sentence sounds entirely natural. Consider *The report criticized the study because **it** was rushed*: whether the report or the study was rushed cannot be determined, so the pronoun fails. The repair names the noun outright: *…because **the study** was rushed.* When the choices offer both a pronoun and a specific noun, and the pronoun is ambiguous, **the specific noun is correct.**',
  },
  {
    type: 'tip',
    content: 'A bare *this* or *that* frequently lacks a clear referent. Test it by asking "this *what*?" — if the sentence cannot supply the noun, add one: not *This shows growth,* but *This **increase** shows growth.*',
  },

  { type: 'heading', content: 'Job 3 — who / whom / that / which / whose' },
  {
    type: 'text',
    content: 'These five words introduce the same clause type and sound interchangeable, which is why they are frequently confused. They are not interchangeable, and sound will not distinguish them; the decision is made on the page, as with apostrophe questions. Apply two sorts in order: first, determine **what kind of thing** the word refers to; then, for *who / whom*, determine **what role** it plays in its clause. Only one word survives both sorts.',
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
    content: 'The quickest *who / whom* check examines the neighboring word. A **verb** immediately after → *who* (*who **called***). A **preposition** immediately before → *whom* (*with **whom***). *Whom* directly in front of a verb is the signature error of this question type — the combination is incorrect wherever it appears.',
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The collection of fossils, gathered over decades, finally found ______ permanent home in the museum.\n\n(A) its\n(B) their',
    steps: [
      { label: 'Identify the true noun', content: 'What found a home is the **collection** — singular. *Of fossils* is the interrupting phrase.' },
      { label: 'Match the number', content: '*Collection* is singular → singular pronoun.' },
      { label: 'Select the answer', content: '**(A) its.** *Their* draws on *fossils*, which sits immediately before the blank — the standard distractor placement.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'The novelist praised her editor\'s revision, saying ______ made the ending far stronger.\n\n(A) it\n(B) the change\n(C) they\n(D) this',
    steps: [
      { label: 'Test each pronoun', content: '*It / this* could refer to the revision, the praise, or the ending — three candidates, so the reference fails. *They* has no plural noun anywhere to match.' },
      { label: 'Compare with the specific noun', content: 'Only **the change** refers to one clear thing.' },
      { label: 'Select the answer', content: '**(B) the change.** When a pronoun could refer to more than one noun, the named noun is correct.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'She is the researcher ______ first mapped the migration route.\n\n(A) who\n(B) whom\n(C) which\n(D) whose',
    steps: [
      { label: 'Sort by referent type', content: 'A **person** (the researcher) → *which* is eliminated.' },
      { label: 'Sort by role', content: 'The word after the blank is *mapped* — a verb. The researcher performs the action → subject form.' },
      { label: 'Select the answer', content: '**(A) who.** *Whom* in front of a verb is the signature error; *whose* would require something possessed.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The orchestra tuned ______ instruments before the concert began.\n\n(A) its\n(B) their',
    steps: [
      { label: 'Identify the true noun', content: 'What owns the instruments is the **orchestra** — a collective noun naming one group.' },
      { label: 'Match the number', content: 'Collectives (*orchestra, team, jury*) are singular → **(A) its**. *Their* appeals to the image of many individual players, but the noun on the page is one orchestra.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'The company announced that ______ would relocate its headquarters. Fill the blank and say why.',
    answer: '**it.** *Company* is a collective — one group, grammatically singular — so it takes *it / its*, not *they / their*, however many people the company employs.',
  },
  {
    type: 'checkpointQuestion',
    question: 'A friend to ______ I owe a great deal is visiting. Is it *who* or *whom* — and how do you know?',
    answer: '**whom.** It follows the preposition *to*, so the object form is required. The substitution test confirms it: *I owe a great deal to her* — *her*, not *she* — which corresponds to *whom*.',
  },
  {
    type: 'checkpointQuestion',
    question: 'Each of the paintings has lost ______ original frame over the years. Fill the blank and explain.',
    answer: '**its.** *Each* is singular regardless of how many paintings follow it. *Of the paintings* is the interrupting of-phrase — the true noun is *each*, so the pronoun is singular.',
  },

  {
    type: 'text',
    content: '**In summary:** identify the true noun and match its number; when the pronoun could refer to more than one noun, name the noun outright; and for *who / whom*, sort person versus thing, then check the neighboring word — a verb after → *who*, a preposition before → *whom*.',
  },
];
