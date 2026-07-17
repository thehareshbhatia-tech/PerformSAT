/**
 * Learn lesson body — Apostrophes & Possessives (Standard English Conventions).
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

export const gApostrophesBlocks = [
  {
    type: 'text',
    content: "After rules that operate at the level of clauses and phrases, the conventions close with the smallest mark on the page. Spoken aloud, *dogs*, *dog's*, and *dogs'* are indistinguishable — which is why the ear cannot resolve apostrophe questions. The decision is made on the page, with two questions: **how many, and does someone own something?**",
  },

  { type: 'heading', content: 'What is actually tested' },
  {
    type: 'text',
    content: "The question is never about pronunciation; it is about which spelling the sentence requires, and two checks settle every item: **how many?** (one versus more than one) and **whose?** (whether something is being owned). Because every choice sounds identical when read aloud, the decision must be made visually — students who sound out the choices are guessing without realizing it. Answering the two questions places the apostrophe.",
  },

  { type: 'heading', content: 'The four noun cases' },
  {
    type: 'table',
    headers: ['Intended meaning', 'Form', 'Example'],
    rows: [
      ['More than one (no ownership)', 'plain -s, no apostrophe', '*The **dogs** ran across the yard.*'],
      ['One thing owns something', "add **'s**", '*The **dog\'s** leash snapped.*'],
      ['Many owners (already ends in s)', "add **s\'**", '*The **dogs\'** leashes were tangled.*'],
      ['Irregular plural (no s)', "add **'s**", '*The **children\'s** coats are here.*'],
    ],
  },
  {
    type: 'keyInsight',
    content: "Forming a plural **never** requires an apostrophe. If nothing is being owned, the apostrophe is wrong — however long or unfamiliar the word appears. Length does not affect punctuation.",
  },

  { type: 'heading', content: 'The next-word test (for nouns)' },
  {
    type: 'text',
    content: "Examine the word immediately to the right of the noun. If another **noun** follows, something is being owned and an apostrophe belongs. If a verb, a preposition, or the end of the sentence follows, no apostrophe is needed. Compare *The **teacher's** desk* (the noun *desk* follows → possession) with *The **teachers** met* (the verb *met* follows → plain plural). Apply the test even when the noun is long and technical — those are the nouns most often given an apostrophe they have not earned.",
  },

  { type: 'heading', content: 'The "is/has" test (for its, it\'s, and other pronouns)' },
  {
    type: 'text',
    content: "Pronouns reverse the noun rule, and the reversal accounts for most errors on these items: **possessive pronouns take no apostrophe** (*its, their, whose, your*), and a pronoun *with* an apostrophe is always a contraction. Expand the apostrophe to **\"is\" or \"has\"**: if the sentence still makes sense, the apostrophe form is correct; if the expansion produces nonsense, the no-apostrophe possessive is required.",
  },
  {
    type: 'table',
    headers: ['With apostrophe (= is/has)', 'No apostrophe (possessive)'],
    rows: [
      ["**it\'s** = it is / it has", '**its** = belonging to it'],
      ["**they\'re** = they are", '**their** = belonging to them'],
      ["**who\'s** = who is / who has", '**whose** = belonging to whom'],
      ["**you\'re** = you are", '**your** = belonging to you'],
    ],
  },
  {
    type: 'tip',
    content: '*There* is a third look-alike, and it is neither a possessive nor a contraction — it indicates a **place** or states existence: *The books are over **there**.* Check for a location meaning before weighing the other two forms.',
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The committee released ______ findings on Friday.\n\n(A) its\n(B) it\'s',
    steps: [
      { label: 'Run the is/has test', content: 'Expand (B) to *it is*: "The committee released **it is** findings" — the sentence does not parse, so the apostrophe form fails.' },
      { label: 'Choose', content: 'The committee owns the findings, so the possessive is required — **(A) its**, no apostrophe.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'After the storm, the two ______ roofs both needed repair.\n\n(A) house\'s\n(B) houses\'\n(C) houses',
    steps: [
      { label: 'Count the owners', content: "*Two* houses — plural. The singular possessive **(A) house's** is eliminated immediately." },
      { label: 'Check for ownership', content: 'A noun (*roofs*) follows, and the roofs belong to the houses → something is owned, so the plain plural **(C) houses** is also eliminated.' },
      { label: 'Place the mark', content: "Many owners already ending in *s* take **s'** → **(B) houses'**." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'The researchers announced that ______ going to publish the survey\'s results next month.\n\n(A) their\n(B) there\n(C) they\'re',
    steps: [
      { label: 'Test the contraction', content: 'Expand (C) to *they are*: "announced that **they are** going to publish" — the sentence parses cleanly.' },
      { label: 'Rule out the look-alikes', content: "(A) *their* would need to own a following noun, but *going* follows; (B) *there* indicates a place, and no location is involved." },
      { label: 'Choose', content: "**(C) they're**. Note that *survey's results* is correct as written — one survey owns the results." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The scientist ______ theory reshaped the field went on to win the prize.\n\n(A) who\'s\n(B) whose',
    steps: [
      { label: 'Run the is/has test', content: 'Expand (A) *who\'s* to *who is*: "the scientist **who is** theory reshaped the field" — the expansion fails.' },
      { label: 'Choose', content: 'The theory belongs to the scientist, so the possessive is required — **(B) whose**, no apostrophe. A noun (*theory*) follows, confirming ownership.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'The band recorded three albums, but only one of ______ songs became a hit. Fill the blank: *its*, *it\'s*, or *their*?',
    answer: '**its.** *Band* is a collective noun treated as a single unit, so its possessive is *its*. The test confirms it: *it\'s* = *it is* yields "one of **it is** songs," which fails, eliminating the apostrophe form. *Their* requires a plural owner, but *band* is singular.',
  },
  {
    type: 'checkpointQuestion',
    question: 'Choose the right spelling: *The two witness\'s / witnesses\' / witnesses accounts matched.* Why?',
    answer: "**witnesses'.** *Two* witnesses → plural, and a noun (*accounts*) follows → the accounts are owned. Multiple owners already ending in *s* take **s'**. The plain plural *witnesses* would assert that nothing is owned, but the accounts belong to the witnesses.",
  },
  {
    type: 'checkpointQuestion',
    question: 'Fill each blank: *The company redesigned ______ logo, and now ______ everywhere.* Use *its* or *it\'s* for each.',
    answer: 'First blank **its** — the company owns the logo, so the no-apostrophe possessive applies. Second blank **it\'s** — the meaning is *it is* everywhere, a contraction. The expansion confirms both: "redesigned **it is** logo" fails → *its*; "now **it is** everywhere" succeeds → *it\'s*.',
  },

  {
    type: 'text',
    content: "**In summary:** ask *how many?* and *whose?* For pronouns, expand the apostrophe to *is/has* and test whether the sentence still makes sense. Where nothing is owned, no apostrophe belongs.",
  },
];
