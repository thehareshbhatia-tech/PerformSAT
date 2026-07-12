/**
 * Learn lesson body — Modifiers & Parallelism (Standard English Conventions).
 *
 * NEW lean "review / cheat-sheet" style (see gSubjectVerbAgreement.js for the
 * VOICE + SHAPE exemplar): one SAT skill area per lesson, plain language, one
 * idea per short section, a scannable cheat-list/table, then a couple of worked
 * examples and check-yourself questions. Gated by bodies.test.js (lean contract).
 *
 * This lesson covers three related "matching" ideas — a modifier must touch what
 * it describes, listed items must share a form, and comparisons must weigh like
 * things — one short section each.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const gModifiersParallelismBlocks = [
  {
    type: 'text',
    content: 'Three questions in one lesson, all the same move — **does this word touch, match, or weigh the right thing?** A describing phrase must sit next to what it describes, a list must keep one shape, and a comparison must weigh like against like.',
  },

  { type: 'heading', content: '1. Modifiers — the describer must touch what it describes' },
  {
    type: 'text',
    content: 'An opening phrase before a comma describes **whatever noun comes right after the comma**. If that noun is the wrong thing, the sentence literally says something absurd: *Walking to school, the rain started* claims the rain was walking. The fix names the real doer right after the comma: *Walking to school, **I** got caught in the rain.*',
  },
  {
    type: 'keyInsight',
    content: 'The move: cover the choices, read the opening phrase, and ask **"who or what is doing this?"** The answer must be the very next noun. Name it before you look at a single choice.',
  },
  {
    type: 'text',
    content: 'Watch two traps. A **possessive** still dangles — *Curie\'s discovery* is a discovery, not Curie, so *Studying radioactivity, Curie\'s discovery…* is wrong. And the opener need not be an *-ing* word: *A patient researcher, Curie…* and *In her lab, Curie…* trigger the same who-question.',
  },

  { type: 'heading', content: '2. Parallelism — items in a list share one form' },
  {
    type: 'text',
    content: 'When ideas are joined — in a series, or across a pairing word — they must share the same grammatical shape: all *-ing*, all plain nouns, all *to ___*. Mixing shapes breaks it: *She likes **hiking**, **swimming**, and **to bike*** should read *hiking, swimming, and **biking***. The reason is that a list asks the reader to hold several items on equal footing, and a shape change quietly signals the items are not really equal. On the SAT the mismatched item is almost always the last one, sitting right in or beside the underline.',
  },
  {
    type: 'text',
    content: 'One item is always locked in the fixed (non-underlined) text — the **anchor**. Find it, name its form, and keep only the choice that matches; you never get to change the anchor, so it quietly dictates the answer. Pairing words work the same way: what follows the second half must match what follows the first.',
  },
  {
    type: 'table',
    headers: ['Pairing word', 'Balance', 'Example'],
    rows: [
      ['not only… but also…', 'match both halves', '*not only **cheaper** but also **faster***'],
      ['both… and…', 'match both halves', '*both **to teach** and **to inspire***'],
      ['either… or… / neither… nor…', 'match both halves', '*neither **the plan** nor **the budget***'],
      ['prefer X to Y', 'X and Y same form', '*prefer **reading** to **watching***'],
    ],
  },
  {
    type: 'tip',
    content: 'Repeating a shared word (a second *to*, a repeated *the*) is optional — *to teach and inspire* is just as parallel as *to teach and to inspire*. Don\'t eliminate a choice only because it dropped the echo word; **form** is what must match.',
  },

  { type: 'heading', content: '3. Comparisons — weigh like against like' },
  {
    type: 'text',
    content: 'A comparison is only fair when both sides are the same kind of thing. *Her novels are longer than **Dickens*** compares novels to a person; fix it so both sides are works: *…longer than **Dickens\'s*** (Dickens\'s novels) or *…than **those of Dickens***. Put each side on a scale and name it: novels vs. a man does not balance.',
  },
  {
    type: 'text',
    content: 'A quick related choice: **fewer/many** go with things you can count, **less/much** with things you cannot. *Fewer **cars**, less **traffic**. Many **species**, less **biodiversity**.* Ask "can I count individual units?" — if yes, *fewer*; if no, *less*.',
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Rushing to catch the train, ______ was left on the platform.\n\n(A) the ticket\n(B) Maria realized her ticket\n(C) her ticket',
    steps: [
      { label: 'Read the opener', content: '*Rushing to catch the train* — ask: who was rushing?' },
      { label: 'Name the doer', content: 'A person was rushing, not a ticket. So the noun right after the comma must be that person.' },
      { label: 'Check the boundary noun', content: '(A) and (C) both put *ticket* right after the comma — a ticket cannot rush. Only **(B)** starts with *Maria*, the actual doer.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The internship taught her to analyze data, to write reports, and ______.\n\n(A) presenting to clients\n(B) to present to clients\n(C) she presented to clients',
    steps: [
      { label: 'Find the anchor', content: 'The fixed list is *to analyze… , to write… , and ______*. The form is **"to ___"** (infinitive).' },
      { label: 'Match the form', content: '(A) is an *-ing* phrase, (C) is a full clause — both break the pattern. Only **(B) to present** matches *to analyze / to write*.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: "The population of the coastal city grew faster than ______ the inland one.\n\n(A) than\n(B) that of\n(C) than that of",
    steps: [
      { label: 'Weigh the two sides', content: 'The sentence compares a **population** (coastal) to… the inland *city* itself — a city is not a population. The sides must both be populations.' },
      { label: 'Balance with a stand-in', content: '*That of* stands in for "the population of," making the inland side a population too. **(B) that of**. (C) doubles *than*, which the stem already provides.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The revised checkpoint policy created ______ delays for travelers.\n\n(A) fewer\n(B) less',
    steps: [
      { label: 'Can you count it?', content: 'Delays come in separate units you can count — one delay, two delays, three delays.' },
      { label: 'Match', content: 'Countable things take *fewer*, not *less* → **(A) fewer**. Save *less* for amounts you cannot count, like *less traffic*.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'Fix the modifier: *Covered in dust, the archivist opened the old ledger.* What is wrong, and how do you fix it?',
    answer: 'The opener *Covered in dust* touches *the archivist*, so it says the archivist was dusty. The **ledger** is what\'s dusty. Fix: *Covered in dust, the old ledger was opened by the archivist*, or *The archivist opened the old ledger, which was covered in dust.*',
  },
  {
    type: 'checkpointQuestion',
    question: 'Which is parallel — *The coach valued discipline, teamwork, and being on time* or *…discipline, teamwork, and punctuality*? Why?',
    answer: 'The second. *Discipline* and *teamwork* are plain nouns, so the third item must be a noun too — **punctuality**, not the *-ing* phrase *being on time*.',
  },
  {
    type: 'checkpointQuestion',
    question: 'Is this comparison balanced — *The salary of a nurse is often higher than a teacher*? If not, fix it.',
    answer: 'Not balanced — it compares a *salary* to a *teacher* (a person). Make both sides salaries: *…higher than **that of a teacher*** or *…higher than **a teacher\'s***.',
  },

  {
    type: 'text',
    content: '**The move, every time:** modifier → who is doing it? (name it before the comma). List → what form is the anchor? (match it). Comparison → what two things are on the scale? (make them the same kind).',
  },
];
