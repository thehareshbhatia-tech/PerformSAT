/**
 * Learn lesson body — Pronouns (Standard English Conventions).
 *
 * TUTOR VOICE (adopted 2026-07-14, user-approved exemplar mLinearEquations.js):
 * coaching direct-address — talks TO the student, anticipates the mistake
 * before it happens, everyday anchor first and rule second, concrete decision
 * rules ("put your finger on the actual noun"). Gated by bodies.test.js
 * (lean contract). Rendered by SectionContent; loaded lazily via
 * bodies/index.js.
 */

export const gPronounsBlocks = [
  {
    type: 'text',
    content: 'A pronoun is you pointing across a room: *it, they, this, who* all mean "that one over there." Pointing only works when two things are true — you\'re pointing at exactly **one** thing, and your point **matches** what it lands on. Nearly every pronoun question is just checking one of those two.',
  },

  { type: 'heading', content: 'What is actually tested' },
  {
    type: 'text',
    content: 'You already say *the dog… it* and *the dogs… they* without thinking, so the easy version never shows up. Instead, the real noun hides behind other nouns so your ear grabs the wrong one — or the sentence is built so *it* could point at two things at once. Both traps run on the same weakness: a pronoun *feels* right as long as *something* nearby could be its noun. That feeling is exactly what fails you. The fix never changes: **put your finger on the actual noun on the page** and check it, instead of trusting how the sentence sounds.',
  },

  { type: 'heading', content: 'Job 1 — Match the number' },
  {
    type: 'text',
    content: 'A pronoun copies the number of the noun it stands for: singular noun → *it / its*, plural noun → *they / their*. Point at the real noun and read its ending — and the noun has to be **printed in the sentence**; a plural idea that\'s only implied doesn\'t count. The trap here is the same one used against verbs: a wrong-number noun parked right before the pronoun as a decoy. *The **shipment** of new phones arrived, but ______ was damaged* → the noun is *shipment*, so *it*, not *they* — *phones* is the decoy.',
  },
  {
    type: 'keyInsight',
    content: 'Match the pronoun to the noun it truly stands for, never to the nearest noun. And collective nouns (*team, company, committee, jury*) count as **singular** — *the team lost its lead*, even though a team is full of people.',
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
    content: 'A pronoun gets exactly one noun it could mean. If *it, they,* or *this* could land on two different nouns, it\'s wrong — even when it sounds perfectly natural. *The report criticized the study because **it** was rushed.* Which was rushed — the report or the study? You can\'t tell, so the pronoun fails. Fix it by naming the thing: *…because **the study** was rushed.* When the choices offer a pronoun and a specific noun, and the pronoun could point two ways, **take the noun.**',
  },
  {
    type: 'tip',
    content: 'Bare *this* or *that* is usually pointing at fog. Ask "this *what*?" — if the sentence can\'t answer, add the noun: not *This shows growth,* but *This **increase** shows growth.*',
  },

  { type: 'heading', content: 'Job 3 — who / whom / that / which / whose' },
  {
    type: 'text',
    content: 'Five words, one clause type — and they all sound interchangeable, which is exactly why people miss these. They\'re not interchangeable, and your ear won\'t sort them; this is a paper decision, like the apostrophe questions. Run two sorts in order: first, **what kind of thing** does it refer to? Then, for *who / whom*, **what slot** does it fill? Only one word survives both sorts.',
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
    content: 'The fastest *who / whom* check you\'ll ever use: look at the neighboring word. A **verb** right after → *who* (*who **called***). A **preposition** just before → *whom* (*with **whom***). And *whom* sitting directly in front of a verb is the error signature — spot it and it\'s wrong.',
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The collection of fossils, gathered over decades, finally found ______ permanent home in the museum.\n\n(A) its\n(B) their',
    steps: [
      { label: 'Find the real noun', content: 'What found a home? The **collection** — singular. *Of fossils* is the decoy phrase.' },
      { label: 'Match number', content: '*Collection* is singular → singular pronoun.' },
      { label: 'Answer', content: '**(A) its.** *Their* is bait — *fossils* sits right before the blank so your ear grabs the plural.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'The novelist praised her editor\'s revision, saying ______ made the ending far stronger.\n\n(A) it\n(B) the change\n(C) they\n(D) this',
    steps: [
      { label: 'Check the pronouns', content: '*It / this* could mean the revision, the praise, or the ending — three candidates, so the point fails. *They* has no plural noun anywhere to match.' },
      { label: 'Prefer the specific noun', content: 'Only **the change** points at one clear thing.' },
      { label: 'Answer', content: '**(B) the change.** When a pronoun could land two places, the named noun wins.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'She is the researcher ______ first mapped the migration route.\n\n(A) who\n(B) whom\n(C) which\n(D) whose',
    steps: [
      { label: 'What kind of thing?', content: 'A **person** (the researcher) → *which* is out.' },
      { label: 'Who or whom?', content: 'Look right after the blank: *mapped* — a verb. The researcher is doing the action → subject form.' },
      { label: 'Answer', content: '**(A) who.** *Whom* in front of a verb is the classic bait; *whose* would need something possessed.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The orchestra tuned ______ instruments before the concert began.\n\n(A) its\n(B) their',
    steps: [
      { label: 'Find the real noun', content: 'What owns the instruments? The **orchestra** — a collective noun naming one group.' },
      { label: 'Match number', content: 'Collectives (*orchestra, team, jury*) count as singular → **(A) its**. *Their* baits you into picturing all those individual players — but the noun on the page is one orchestra.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'The company announced that ______ would relocate its headquarters. Fill the blank and say why.',
    answer: '**it.** *Company* is a collective — one group, treated as singular — so it takes *it / its*, not *they / their*. Picture one building, not the many people inside it.',
  },
  {
    type: 'checkpointQuestion',
    question: 'A friend to ______ I owe a great deal is visiting. Is it *who* or *whom* — and how do you know?',
    answer: '**whom.** It follows the preposition *to*, so you want the object form. Prove it by flipping the clause around: *I owe a great deal to her* — *her*, not *she* — which confirms *whom*.',
  },
  {
    type: 'checkpointQuestion',
    question: 'Each of the paintings has lost ______ original frame over the years. Fill the blank and explain.',
    answer: '**its.** *Each* is singular no matter how many paintings line up after it. *Of the paintings* is the decoy of-phrase — the real noun is *each*, so the pronoun is singular.',
  },

  {
    type: 'text',
    content: '**The move, every time:** put your finger on the real noun → match its number, or name the thing outright if the pronoun could point two ways → and for *who / whom*, sort person-vs-thing, then check the neighboring word: verb after → *who*, preposition before → *whom*.',
  },
];
