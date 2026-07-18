/**
 * Learn lesson body — Pronouns (Standard English Conventions).
 *
 * VOICE v4 (adopted 2026-07-18, exemplar: bodies/centralIdeas.js): practiced-tutor
 * register — developed 2-5 sentence paragraphs with connective tissue; every rule
 * earns its "because"; student-psychology named concretely; math teaching is
 * example-led; varied rhythm, no aphorism-per-block. Bans carried from v3: no
 * analogies, no pep talk, no exclamation marks, no emojis, no test-personification.
 * All v3 teaching claims preserved.
 *
 * Rendered by SectionContent; loaded lazily via bodies/index.js.
 */

export const gPronounsBlocks = [
  {
    type: 'text',
    content: "Agreement doesn't end with the verb. The same matching discipline extends to pronouns — the words that stand in for a noun named elsewhere in the sentence: *it, they, this,* and *who* all point back at something already stated. The pointing works only under two conditions: the pronoun refers to exactly **one** noun, and it **matches** that noun in number. Nearly every pronoun question breaks one of the two and asks whether you noticed.",
  },

  { type: 'heading', content: "What's actually tested" },
  {
    type: 'text',
    content: "Simple pairings — *the dog… it*, *the dogs… they* — are automatic, so the tested versions are never simple. Either the true noun sits behind other nouns so your ear settles on the wrong one, or the sentence is built so *it* could point at two things at once. Both designs exploit the same weakness: a pronoun *sounds* right whenever any nearby noun could plausibly be its referent, so a sentence can be wrong while sounding entirely natural. The method is the one the agreement chapter already taught — **identify the actual noun on the page** and check it, rather than trusting the impression.",
  },

  { type: 'heading', content: 'Job 1 — Match the number' },
  {
    type: 'text',
    content: "A pronoun copies the number of the noun it stands for — singular noun, *it / its*; plural noun, *they / their*. So identify the true noun and read its form off the page. It has to be **printed in the sentence**, because a pronoun can only inherit number from a noun that's actually there; a plural idea that's merely implied doesn't qualify. And the construction mirrors the one in agreement questions: a noun of the wrong number sits immediately before the pronoun as bait. In *The **shipment** of new phones arrived, but ______ was damaged*, what arrived and was damaged is the *shipment*, so the pronoun is *it* — *phones*, parked right beside the blank, exists to sell *they*.",
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
    content: "A pronoun must have exactly one possible referent, and this rule bites even when the sentence sounds completely natural. Take *The report criticized the study because **it** was rushed.* Every reader supplies a referent for *it* — and different readers supply different ones, because nothing in the sentence settles whether the report or the study was rushed. That's why the pronoun fails: not because it sounds wrong, but because it leaves the sentence undecidable.",
  },
  {
    type: 'text',
    content: "The repair names the noun outright: *…because **the study** was rushed.* So when the choices offer both a pronoun and a specific noun, and the pronoun could point two ways, **the specific noun is correct** — precision wins whenever the reference is contested.",
  },
  {
    type: 'tip',
    content: 'A bare *this* or *that* frequently lacks a clear referent. Test it by asking "this *what*?" — if the sentence can\'t supply the noun, add one: not *This shows growth,* but *This **increase** shows growth.*',
  },

  { type: 'heading', content: 'Job 3 — who / whom / that / which / whose' },
  {
    type: 'text',
    content: "These five words introduce the same clause type and sound interchangeable, which is precisely why sound can't distinguish them — the decision gets made on the page, as with apostrophe questions. Two sorts, applied in order, leave exactly one word standing:",
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
    content: "For *who / whom*, the quickest check reads the neighboring word. A **verb** right after means the person performs the action — *who* (*who **called***). A **preposition** right before means the person receives it — *whom* (*with **whom***). And *whom* directly in front of a verb is the signature error of this question type, because the object form can't perform an action — the combination is incorrect wherever it appears.",
  },

  { type: 'heading', content: 'Where, when, and preposition + which' },
  {
    type: 'text',
    content: "*Where* stands in for a **physical place** — somewhere a person could actually stand: *the lab where the tests ran* means *the lab in which the tests ran*. *When* does the same work for a **time**: *the year when the dam failed*.",
  },
  {
    type: 'text',
    content: "For anything that's neither a real place nor a time — a study, a novel, a policy, a situation — *where* and *when* are unavailable, and the formal substitute **preposition + which** does the work: *the study in which participants kept sleep diaries*, not *the study where participants kept sleep diaries*. Why is the smoother version wrong? Because a study can't be stood in — *where* asserts a location the antecedent doesn't have. The substitute reads stiffly, and the stiffness isn't an error: an awkward-sounding *in which* is correct wherever the antecedent is abstract, and the friendlier *where* is wrong there — students who edit by ear make the swap at exactly the moment the question is checking whether they will.",
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
    content: "One further check: **one preposition per relation.** Once *in which* is written, the preposition is spent, so *the house in which she grew up in* pays twice for a single relation. Either form alone is correct — *the house in which she grew up*, or *the house she grew up in*.",
  },

  { type: 'heading', content: 'Pronoun case in compounds' },
  {
    type: 'text',
    content: "Case survives compounding: adding *and* plus another person changes nothing about which pronoun form a position requires. A subject position takes subject forms — *He and I went to the archive*, never *Him and me went* — and an object position, after a verb or a preposition, takes object forms: *The curator gave the keys to him and me.* *Between* is a preposition, so the phrase is *between you and me*; *between you and I* is always incorrect, however formal it sounds.",
  },
  {
    type: 'text',
    content: "The reliable check is the **drop-the-other-person test**: remove the other person and read what remains. *I went* survives; *me went* doesn't. *Gave the keys to me* survives; *gave the keys to I* doesn't. There's a reason this error runs on politeness — *and I* is drilled early as the courteous correction, and the courtesy then invades object positions, where it changes nothing about the case. A student who writes *between you and I* isn't being careless; they're being polite in a spot where grammar doesn't credit it.",
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
