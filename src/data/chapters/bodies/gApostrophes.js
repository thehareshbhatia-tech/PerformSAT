/**
 * Learn lesson body — Apostrophes & Possessives (Standard English Conventions).
 *
 * Lean "review / cheat-sheet" style — one SAT skill, plain language, one idea
 * per short section, two quick tests, a compact 4-case table, then worked
 * examples and check-yourself questions. Shape + voice mirror
 * gSubjectVerbAgreement.js (the exemplar). Gated by bodies.test.js.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const gApostrophesBlocks = [
  {
    type: 'text',
    content: 'Every competing choice sounds identical, so your ear is useless here — the whole skill is deciding on paper: **how many, and does someone own something?**',
  },

  { type: 'heading', content: 'What is actually tested' },
  {
    type: 'text',
    content: 'The SAT never asks whether *dogs* rhymes with *dog\'s* — it asks which spelling the sentence needs. Two questions settle every item: **how many?** (one vs more than one) and **whose?** (is something being owned). Because every choice sounds identical read aloud, this is a spelling decision you make with your eyes, not your ear — students who "sound it out" miss these every time. Answer the two questions and the apostrophe places itself.',
  },

  { type: 'heading', content: 'The four noun cases' },
  {
    type: 'table',
    headers: ['You mean…', 'Shape', 'Example'],
    rows: [
      ['More than one (no owning)', 'plain -s, no apostrophe', '*The **dogs** ran across the yard.*'],
      ['One thing owns something', "add **'s**", '*The **dog\'s** leash snapped.*'],
      ['Many owners (already ends in s)', "add **s\'**", '*The **dogs\'** leashes were tangled.*'],
      ['Irregular plural (no s)', "add **'s**", '*The **children\'s** coats are here.*'],
    ],
  },
  {
    type: 'keyInsight',
    content: 'Making a word plural **never** needs an apostrophe. If nothing is being owned, the apostrophe is wrong — no matter how long or unfamiliar the word looks.',
  },

  { type: 'heading', content: 'The next-word test (for nouns)' },
  {
    type: 'text',
    content: 'Look at the word right after the noun. Another **noun** follows → something is being owned → an apostrophe belongs. A verb, a preposition, or the end of the sentence follows → no apostrophe. *The **teacher\'s** desk* (noun *desk* follows → owning) vs *The **teachers** met* (verb *met* follows → just plural). The next word decides even when the noun is long or unfamiliar — length never earns an apostrophe.',
  },

  { type: 'heading', content: 'The "is/has" test (for its, it\'s, and friends)' },
  {
    type: 'text',
    content: 'Pronouns flip the rule: **possessive pronouns take no apostrophe** (*its, their, whose, your*), and a pronoun *with* an apostrophe is always a contraction. So read the apostrophe aloud as **"is" or "has"**: if the sentence still makes sense, keep the apostrophe; if not, use the no-apostrophe possessive.',
  },
  {
    type: 'table',
    headers: ['With apostrophe (= is/has)', 'No apostrophe (owns)'],
    rows: [
      ["**it\'s** = it is / it has", '**its** = belonging to it'],
      ["**they\'re** = they are", '**their** = belonging to them'],
      ["**who\'s** = who is / who has", '**whose** = belonging to whom'],
      ["**you\'re** = you are", '**your** = belonging to you'],
    ],
  },
  {
    type: 'tip',
    content: '*There* is a third look-alike that is neither owning nor a contraction — it points at a **place** or states existence: *The books are over **there**.* Ask "is this about a location?"',
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The committee released ______ findings on Friday.\n\n(A) its\n(B) it\'s',
    steps: [
      { label: 'Run the is/has test', content: 'Read (B) as *it is*: "The committee released **it is** findings" — that does not parse.' },
      { label: 'Choose', content: 'The committee owns the findings, so use the possessive **(A) its** — no apostrophe.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'After the storm, the two ______ roofs both needed repair.\n\n(A) house\'s\n(B) houses\'\n(C) houses',
    steps: [
      { label: 'How many?', content: '*Two* houses — plural. That kills the singular possessive **(A) house\'s**.' },
      { label: 'Whose?', content: 'A noun (*roofs*) follows, and the roofs belong to the houses → something is owned, so plain plural **(C) houses** is out.' },
      { label: 'Place the mark', content: 'Many owners already ending in *s* take **s\'** → **(B) houses\'**.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'The researchers announced that ______ going to publish the survey\'s results next month.\n\n(A) their\n(B) there\n(C) they\'re',
    steps: [
      { label: 'Test the contraction', content: 'Expand (C) to *they are*: "announced that **they are** going to publish" — that parses cleanly.' },
      { label: 'Rule out the look-alikes', content: '(A) *their* would need a noun to own, but *going* follows; (B) *there* is a place word and there is no location here.' },
      { label: 'Choose', content: '**(C) they\'re**. (Note *survey\'s results* is correct as written — one survey owns the results.)' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The scientist ______ theory reshaped the field went on to win the prize.\n\n(A) who\'s\n(B) whose',
    steps: [
      { label: 'Run the is/has test', content: 'Read (A) *who\'s* as *who is*: "the scientist **who is** theory reshaped the field" — nonsense.' },
      { label: 'Choose', content: 'The theory belongs to the scientist, so use the possessive **(B) whose** — no apostrophe. A noun (*theory*) follows, confirming ownership.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'The band recorded three albums, but only one of ______ songs became a hit. Fill the blank: *its*, *it\'s*, or *their*?',
    answer: '**its.** *Band* is a collective noun — treated as singular on the SAT — so its possessive is *its*. Test *it\'s* = *it is*: "one of **it is** songs" fails, so the apostrophe form is out; and *their* would need a plural owner, but *band* is singular.',
  },
  {
    type: 'checkpointQuestion',
    question: 'Choose the right spelling: *The two witness\'s / witnesses\' / witnesses accounts matched.* Why?',
    answer: '**witnesses\'.** *Two* witnesses = plural, and a noun (*accounts*) follows, so the accounts are owned by many owners already ending in s → **s\'**. Plain *witnesses* would wrongly say nothing is owned.',
  },
  {
    type: 'checkpointQuestion',
    question: 'Fill each blank: *The company redesigned ______ logo, and now ______ everywhere.* Use *its* or *it\'s* for each.',
    answer: 'First blank **its** — the company owns the logo, so the no-apostrophe possessive. Second blank **it\'s** — it means *it is* everywhere, a contraction. Test by expanding: "redesigned **it is** logo" fails → *its*; "now **it is** everywhere" works → *it\'s*.',
  },

  {
    type: 'text',
    content: '**The move, every time:** ask *how many?* and *whose?* For pronouns, read the apostrophe as *is/has*. No owning → no apostrophe. That is the whole skill.',
  },
];
