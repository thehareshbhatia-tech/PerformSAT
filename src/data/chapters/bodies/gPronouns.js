/**
 * Learn lesson body — Pronouns (Standard English Conventions).
 *
 * VOICE v3 (adopted 2026-07-17, exemplar: bodies/centralIdeas.js): scannable
 * instructional register — direct address, contractions, 1-3 sentence text
 * blocks, list blocks for criteria, steps blocks for procedures; no analogies,
 * no pep-talk, no emojis. All substance of the v2 textbook version preserved.
 *
 * Rendered by SectionContent; loaded lazily via bodies/index.js.
 */

export const gPronounsBlocks = [
  {
    type: 'text',
    content: "Agreement doesn't end with the verb — the same matching discipline extends to pronouns. A pronoun stands in for a noun named elsewhere in the sentence: *it, they, this,* and *who* all refer back to something already stated.",
  },
  {
    type: 'text',
    content: "The reference works only under two conditions: the pronoun refers to exactly **one** noun, and it **matches** that noun in number. Nearly every pronoun question tests one of the two.",
  },

  { type: 'heading', content: "What's actually tested" },
  {
    type: 'text',
    content: "Simple pairings — *the dog… it*, *the dogs… they* — are automatic, so the tested versions are never simple.",
  },
  {
    type: 'text',
    content: "Either the true noun sits behind other nouns so your ear settles on the wrong one, or the sentence is built so *it* could refer to two things at once.",
  },
  {
    type: 'text',
    content: "Both designs exploit the same weakness: a pronoun *sounds* right whenever any nearby noun could plausibly be its referent — and that impression is unreliable. The method doesn't change: **identify the actual noun on the page** and check it, rather than judging by sound.",
  },

  { type: 'heading', content: 'Job 1 — Match the number' },
  {
    type: 'text',
    content: "A pronoun copies the number of the noun it stands for: singular noun → *it / its*, plural noun → *they / their*.",
  },
  {
    type: 'text',
    content: "Identify the true noun and read its form. The noun must be **printed in the sentence** — a plural idea that's merely implied doesn't qualify.",
  },
  {
    type: 'text',
    content: "The construction mirrors the one in agreement questions: a noun of the wrong number sits immediately before the pronoun as a distractor. In *The **shipment** of new phones arrived, but ______ was damaged*, the noun is *shipment*, so the pronoun is *it*, not *they* — *phones* is the distractor.",
  },
  {
    type: 'keyInsight',
    content: "Match the pronoun to the noun it truly stands for, never to the nearest noun. Collective nouns (*team, company, committee, jury*) are grammatically **singular** — *the team lost its lead* — even though a team consists of many people.",
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
    content: "A pronoun must have exactly one possible referent. If *it, they,* or *this* could refer to two different nouns, the pronoun is incorrect — even when the sentence sounds entirely natural.",
  },
  {
    type: 'text',
    content: "Take *The report criticized the study because **it** was rushed*. Whether the report or the study was rushed can't be determined, so the pronoun fails.",
  },
  {
    type: 'text',
    content: "The repair names the noun outright: *…because **the study** was rushed.* When the choices offer both a pronoun and a specific noun, and the pronoun is ambiguous, **the specific noun is correct.**",
  },
  {
    type: 'tip',
    content: 'A bare *this* or *that* frequently lacks a clear referent. Test it by asking "this *what*?" — if the sentence can\'t supply the noun, add one: not *This shows growth,* but *This **increase** shows growth.*',
  },

  { type: 'heading', content: 'Job 3 — who / whom / that / which / whose' },
  {
    type: 'text',
    content: "These five words introduce the same clause type and sound interchangeable. They're not — and sound won't distinguish them; the decision is made on the page, as with apostrophe questions.",
  },
  {
    type: 'list',
    title: 'Apply two sorts, in order:',
    items: [
      '**What kind of thing** does the word refer to — a person, or a thing?',
      '**What role** does it play in its clause (for *who / whom*) — doing the action, or receiving it?',
    ],
  },
  {
    type: 'text',
    content: "Only one word survives both sorts.",
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
    content: "The quickest *who / whom* check looks at the neighboring word. A **verb** right after → *who* (*who **called***). A **preposition** right before → *whom* (*with **whom***).",
  },
  {
    type: 'text',
    content: "*Whom* directly in front of a verb is the signature error of this question type — the combination is incorrect wherever it appears.",
  },

  { type: 'heading', content: 'Where, when, and preposition + which' },
  {
    type: 'text',
    content: "*Where* stands in for a **physical place** — somewhere a person could actually stand: *the lab where the tests ran* means *the lab in which the tests ran*.",
  },
  {
    type: 'text',
    content: "*When* does the same work for a **time**: *the year when the dam failed*.",
  },
  {
    type: 'text',
    content: "For anything that's neither a real place nor a time — a study, a novel, a policy, a situation — *where* and *when* are unavailable. The formal substitute **preposition + which** does the work: *the study in which participants kept sleep diaries*, not *the study where participants kept sleep diaries* — a study can't be stood in.",
  },
  {
    type: 'text',
    content: "The substitute reads stiffly, and the stiffness isn't an error. An awkward-sounding *in which* is correct wherever the antecedent is abstract; the smoother *where* is wrong there.",
  },
  {
    type: 'table',
    headers: ['The antecedent is…', 'Use', 'Example'],
    rows: [
      ['a physical place', '*where* (or *in / at which*)', '*the harbor where the ferry docks*'],
      ['a time', '*when* (or *in / during which*)', '*the decade when the dam was built*'],
      ['anything abstract — a study, a book, a theory', '*preposition + which* only', '*the study in which the effect appeared*'],
    ],
  },
  {
    type: 'text',
    content: "One further check: **one preposition per relation.** Once *in which* is written, the preposition is spent — *the house in which she grew up in* uses it twice. Either form alone is correct: *the house in which she grew up*, or *the house she grew up in*.",
  },

  { type: 'heading', content: 'Pronoun case in compounds' },
  {
    type: 'text',
    content: "Case survives compounding: adding *and* plus another person changes nothing about which pronoun form a position requires.",
  },
  {
    type: 'text',
    content: "A subject position takes subject forms — *He and I went to the archive*, never *Him and me went*. An object position, after a verb or a preposition, takes object forms: *The curator gave the keys to him and me.*",
  },
  {
    type: 'text',
    content: "*Between* is a preposition, so the phrase is *between you and me* — *between you and I* is always incorrect, however formal it sounds.",
  },
  {
    type: 'text',
    content: "The reliable check is the **drop-the-other-person test**: remove the other person and read what remains. *I went* survives; *me went* doesn't. *Gave the keys to me* survives; *gave the keys to I* doesn't.",
  },
  {
    type: 'text',
    content: "The error runs on politeness — *and I* is learned early as the courteous form and then invades object positions, where courtesy doesn't change the case.",
  },

  { type: 'heading', content: 'How to approach these questions' },
  {
    type: 'steps',
    items: [
      "**Find the noun the pronoun stands for.** The actual noun printed on the page — not the nearest one, not an implied idea.",
      '**Match its number.** Singular → *it / its*; plural → *they / their*; collectives like *team* and *jury* count as singular.',
      '**Check for a second candidate.** If the pronoun could point to two nouns, it fails — take the choice that names the noun outright.',
      '**For *who / whom*, check the neighbors.** A verb right after → *who*; a preposition right before → *whom*.',
    ],
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
    type: 'checkpointQuestion',
    question: 'The panel invited my adviser and (I / me) to present the findings. Which form, and how do you check?',
    answer: '**me.** Drop the other person: *The panel invited me to present the findings* survives, while *invited I* fails. The pronoun is the object of *invited*, and object positions take object forms no matter how many people share them — the same logic that makes *between you and me* correct and *between you and I* wrong.',
  },

  {
    type: 'text',
    content: "**The whole skill in three checks:** identify the true noun and match its number; when the pronoun could point to more than one noun, name the noun outright; and for *who / whom*, sort person versus thing, then check the neighboring word — a verb after → *who*, a preposition before → *whom*.",
  },
];
