/**
 * Learn lesson body — Apostrophes & Possessives (Standard English Conventions).
 *
 * TUTOR VOICE (adopted 2026-07-14, mLinearEquations.js is the user-approved
 * exemplar): coaching direct-address — talks TO the student, everyday anchor
 * first (say dogs / dog's / dogs' out loud — identical), anticipates the
 * sound-it-out mistake before it happens, concrete decision rules (two
 * questions, the next-word test, the is/has test). Lean structure unchanged:
 * short headed sections, two compact tables, 4 worked examples, 3
 * checkpoints. Example problems stay authentic test material. Gated by
 * bodies.test.js (lean contract).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const gApostrophesBlocks = [
  {
    type: 'text',
    content: "Say *dogs*, *dog's*, and *dogs'* out loud. Identical — and that's the whole trick of these questions. Your ear is useless here, so stop consulting it. You decide on paper, with two questions: **how many, and does someone own something?**",
  },

  { type: 'heading', content: 'What is actually tested' },
  {
    type: 'text',
    content: "Nobody is quizzing you on whether *dogs* rhymes with *dog's* — the question is which spelling the sentence needs, and two checks settle every item: **how many?** (one vs more than one) and **whose?** (is something being owned). Because every choice sounds the same read aloud, this is a decision you make with your eyes, and students who sound it out are guessing without realizing it. Answer the two questions and the apostrophe places itself.",
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
    content: "Making a word plural **never** takes an apostrophe. If nothing is being owned, the apostrophe is wrong — no matter how long or unfamiliar the word looks. Length doesn't earn punctuation.",
  },

  { type: 'heading', content: 'The next-word test (for nouns)' },
  {
    type: 'text',
    content: "Look one word to the right of the noun. Another **noun** follows → something is being owned → an apostrophe belongs. A verb, a preposition, or the end of the sentence follows → no apostrophe. *The **teacher's** desk* (noun *desk* follows → owning) vs *The **teachers** met* (verb *met* follows → just plural). Run the test even when the noun is long and technical — that's exactly when a plain plural talks you into an apostrophe it never earned.",
  },

  { type: 'heading', content: 'The "is/has" test (for its, it\'s, and friends)' },
  {
    type: 'text',
    content: "Pronouns flip the rule, and the flip is where most of these points die: **possessive pronouns take no apostrophe** (*its, their, whose, your*), and a pronoun *with* an apostrophe is always a contraction. So read the apostrophe out loud as **\"is\" or \"has\"**: if the sentence still makes sense, keep the apostrophe; if it turns to nonsense, you want the no-apostrophe possessive.",
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
    content: '*There* is a third look-alike, and it is neither owning nor a contraction — it points at a **place** or states existence: *The books are over **there**.* Ask "is this about a location?" before you weigh the other two.',
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The committee released ______ findings on Friday.\n\n(A) its\n(B) it\'s',
    steps: [
      { label: 'Run the is/has test', content: 'Read (B) as *it is*: "The committee released **it is** findings" — that doesn\'t parse. The apostrophe fails its own test.' },
      { label: 'Choose', content: 'The committee owns the findings, so take the possessive — **(A) its**, no apostrophe.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'After the storm, the two ______ roofs both needed repair.\n\n(A) house\'s\n(B) houses\'\n(C) houses',
    steps: [
      { label: 'How many?', content: "*Two* houses — plural. That kills the singular possessive **(A) house's** on the spot." },
      { label: 'Whose?', content: 'A noun (*roofs*) follows, and the roofs belong to the houses → something is owned, so the plain plural **(C) houses** is out too.' },
      { label: 'Place the mark', content: "Many owners already ending in *s* take **s'** → **(B) houses'**." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'The researchers announced that ______ going to publish the survey\'s results next month.\n\n(A) their\n(B) there\n(C) they\'re',
    steps: [
      { label: 'Test the contraction', content: 'Expand (C) to *they are*: "announced that **they are** going to publish" — that parses cleanly.' },
      { label: 'Rule out the look-alikes', content: "(A) *their* would have to own a noun, but *going* follows; (B) *there* points at a place, and there's no location here." },
      { label: 'Choose', content: "**(C) they're**. (And notice *survey's results* is correct as written — one survey owns the results.)" },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The scientist ______ theory reshaped the field went on to win the prize.\n\n(A) who\'s\n(B) whose',
    steps: [
      { label: 'Run the is/has test', content: 'Read (A) *who\'s* as *who is*: "the scientist **who is** theory reshaped the field" — nonsense.' },
      { label: 'Choose', content: 'The theory belongs to the scientist, so take the possessive — **(B) whose**, no apostrophe. A noun (*theory*) follows, confirming ownership.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'The band recorded three albums, but only one of ______ songs became a hit. Fill the blank: *its*, *it\'s*, or *their*?',
    answer: '**its.** *Band* is a collective noun — treat it as one thing — so its possessive is *its*. Run the test: *it\'s* = *it is* gives "one of **it is** songs," which fails, so the apostrophe form is out. And *their* wants a plural owner, but *band* is singular.',
  },
  {
    type: 'checkpointQuestion',
    question: 'Choose the right spelling: *The two witness\'s / witnesses\' / witnesses accounts matched.* Why?',
    answer: "**witnesses'.** *Two* witnesses → plural, and a noun (*accounts*) follows → the accounts are owned. Many owners already ending in *s* take **s'**. Plain *witnesses* would claim nothing is owned — but the accounts clearly belong to them.",
  },
  {
    type: 'checkpointQuestion',
    question: 'Fill each blank: *The company redesigned ______ logo, and now ______ everywhere.* Use *its* or *it\'s* for each.',
    answer: 'First blank **its** — the company owns the logo, so the no-apostrophe possessive. Second blank **it\'s** — it means *it is* everywhere, a contraction. Prove both by expanding: "redesigned **it is** logo" fails → *its*; "now **it is** everywhere" works → *it\'s*.',
  },

  {
    type: 'text',
    content: "**The move, every time:** ask *how many?* and *whose?* For pronouns, read the apostrophe as *is/has* and listen for nonsense. No owning → no apostrophe. That's the whole skill.",
  },
];
