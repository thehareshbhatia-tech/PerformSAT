/**
 * Learn lesson body — Modifiers & Parallelism (Standard English Conventions).
 *
 * TUTOR VOICE (adopted 2026-07-14, mLinearEquations.js is the user-approved
 * exemplar): coaching direct-address — talks TO the student, everyday anchor
 * first (the absurd literal reading, the team photo, the two-pan scale),
 * anticipates the trap before it lands, concrete decision rules. Lean
 * structure unchanged: three short "matching" sections, a pairing-word table,
 * 4 worked examples, 3 checkpoints. Example problems stay authentic test
 * material. Gated by bodies.test.js (lean contract).
 *
 * This lesson covers three related "matching" ideas — a modifier must touch
 * what it describes, listed items must share a form, and comparisons must
 * weigh like things — one short section each.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const gModifiersParallelismBlocks = [
  {
    type: 'text',
    content: "Three question types, one lesson — because they're all the same instinct: **does this word touch, match, or weigh the right thing?** A describing phrase has to sit next to what it describes, a list has to keep one shape, and a comparison has to weigh like against like. Three checks, one reflex.",
  },

  { type: 'heading', content: '1. Modifiers — the describer must touch what it describes' },
  {
    type: 'text',
    content: "Read this literally: *Walking to school, the rain started.* That sentence claims the rain went for a walk. Behind the laugh is the rule: an opening phrase before a comma describes **whatever noun comes right after the comma** — no exceptions, no mind-reading. The fix puts the real doer at the comma: *Walking to school, **I** got caught in the rain.*",
  },
  {
    type: 'keyInsight',
    content: 'The move: cover the choices, read the opening phrase, and ask **"who or what is doing this?"** The answer has to be the very next noun. Name it before you look at a single choice.',
  },
  {
    type: 'text',
    content: "Two traps to see coming. A **possessive** still dangles — *Curie's discovery* is a discovery, not Curie, so *Studying radioactivity, Curie's discovery…* parks the wrong noun at the comma. And don't wait for an *-ing* word to go on alert: *A patient researcher, Curie…* and *In her lab, Curie…* trigger the same who-question.",
  },

  { type: 'heading', content: '2. Parallelism — items in a list share one form' },
  {
    type: 'text',
    content: "Picture a list as a team photo: everyone wears the same uniform. Ideas that are joined — in a series, or across a pairing word — have to share one grammatical shape: all *-ing*, all plain nouns, all *to ___*. *She likes **hiking**, **swimming**, and **to bike*** breaks the uniform; it wants *hiking, swimming, and **biking***. Here's why it matters: a list asks the reader to hold several items on equal footing, and a shape change quietly signals the items aren't really equal. On test questions the mismatched item is almost always the last one, sitting right in or beside the underline.",
  },
  {
    type: 'text',
    content: "Your shortcut: one item is always locked in the fixed, non-underlined text — call it the **anchor**. You can't change the anchor, which means it quietly dictates the answer. Find it, name its form, and keep only the choice that matches. Pairing words play the same game: whatever follows the second half must match whatever followed the first.",
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
    content: "A repeated shared word (a second *to*, another *the*) is optional — *to teach and inspire* is exactly as parallel as *to teach and to inspire*. Don't cut a choice just because it dropped the echo word; **form** is what has to match.",
  },

  { type: 'heading', content: '3. Comparisons — weigh like against like' },
  {
    type: 'text',
    content: "A comparison is a two-pan scale, and a scale only works when both pans hold the same kind of thing. *Her novels are longer than **Dickens*** puts novels in one pan and a man in the other. Fix it so both sides are works: *…longer than **Dickens's*** (Dickens's novels) or *…than **those of Dickens***. Before you judge any choice, say out loud what's sitting in each pan — novels vs. a person will never balance.",
  },
  {
    type: 'text',
    content: "One quick cousin: **fewer/many** go with things you can count, **less/much** with things you can't. *Fewer **cars**, less **traffic**. Many **species**, less **biodiversity**.* Ask \"can I count individual units — one, two, three?\" Yes → *fewer*. No → *less*.",
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Rushing to catch the train, ______ was left on the platform.\n\n(A) the ticket\n(B) Maria realized her ticket\n(C) her ticket',
    steps: [
      { label: 'Read the opener', content: '*Rushing to catch the train* — so ask it: who was rushing?' },
      { label: 'Name the doer', content: 'A person was rushing, not a ticket. The noun right after the comma has to be that person.' },
      { label: 'Check the boundary noun', content: "(A) and (C) both park *ticket* at the comma — and a ticket can't rush. Only **(B)** starts with *Maria*, the actual doer." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The internship taught her to analyze data, to write reports, and ______.\n\n(A) presenting to clients\n(B) to present to clients\n(C) she presented to clients',
    steps: [
      { label: 'Find the anchor', content: 'The fixed list reads *to analyze… , to write… , and ______*. The anchor form is **"to ___"** (infinitive).' },
      { label: 'Match the form', content: '(A) is an *-ing* phrase, (C) is a whole clause — both break the uniform. Only **(B) to present** matches *to analyze / to write*.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: "The population of the coastal city grew faster than ______ the inland one.\n\n(A) than\n(B) that of\n(C) than that of",
    steps: [
      { label: 'Weigh the two sides', content: "One pan holds a **population** (coastal); the other holds… the inland *city* itself. A city isn't a population — the pans don't match." },
      { label: 'Balance with a stand-in', content: '*That of* stands in for "the population of," turning the inland side into a population too. **(B) that of**. (C) doubles *than*, which the stem already provides.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The revised checkpoint policy created ______ delays for travelers.\n\n(A) fewer\n(B) less',
    steps: [
      { label: 'Can you count it?', content: 'Delays come in separate units — one delay, two delays, three delays. Countable.' },
      { label: 'Match', content: "Countable takes *fewer* → **(A) fewer**. Save *less* for amounts you can't count, like *less traffic*." },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'Fix the modifier: *Covered in dust, the archivist opened the old ledger.* What is wrong, and how do you fix it?',
    answer: "The opener *Covered in dust* lands on *the archivist*, so the sentence claims the archivist was dusty. It's the **ledger** that's dusty. Fix it by putting the dusty thing at the comma — *Covered in dust, the old ledger was opened by the archivist* — or move the describer: *The archivist opened the old ledger, which was covered in dust.*",
  },
  {
    type: 'checkpointQuestion',
    question: 'Which is parallel — *The coach valued discipline, teamwork, and being on time* or *…discipline, teamwork, and punctuality*? Why?',
    answer: "The second. *Discipline* and *teamwork* are plain nouns — that's your anchor form — so the third item has to be a noun too: **punctuality**, not the *-ing* phrase *being on time*.",
  },
  {
    type: 'checkpointQuestion',
    question: 'Is this comparison balanced — *The salary of a nurse is often higher than a teacher*? If not, fix it.',
    answer: 'Not balanced — one pan holds a *salary*, the other a *teacher* (a person). Put salaries in both pans: *…higher than **that of a teacher*** or *…higher than **a teacher\'s***.',
  },

  {
    type: 'text',
    content: "**The move, every time:** modifier → who's doing it? (name it before the comma). List → what form is the anchor? (match it). Comparison → what's in each pan of the scale? (make them the same kind).",
  },
];
