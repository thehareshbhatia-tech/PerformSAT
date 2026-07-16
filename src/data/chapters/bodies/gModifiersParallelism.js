/**
 * Learn lesson body — Modifiers & Parallelism (Standard English Conventions).
 *
 * VOICE (adopted 2026-07-15, exemplar: mLinearEquations.js): professional
 * textbook narrative — teaches directly in flowing prose (concept, why it
 * works, how to apply, common errors) in the measured register of a
 * well-edited textbook. Concrete contexts framed plainly as examples;
 * extended metaphors, cute headings, and pep-talk are out. Headings name
 * the concept. Gated by bodies.test.js.
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
    content: "Three question types share a single underlying principle: **each element must connect to, match, or be measured against the right thing.** A modifying phrase must sit beside what it describes, items in a list must share one grammatical form, and a comparison must set like against like. The same three checks resolve all of them.",
  },

  { type: 'heading', content: '1. Modifiers — a modifier must sit beside what it describes' },
  {
    type: 'text',
    content: "Read literally, *Walking to school, the rain started* claims that the rain went for a walk. The absurdity illustrates the rule: an opening phrase before a comma describes **whatever noun comes immediately after the comma** — with no exceptions and no appeal to intended meaning. The correction places the true agent at the comma: *Walking to school, **I** got caught in the rain.*",
  },
  {
    type: 'keyInsight',
    content: 'The method: cover the choices, read the opening phrase, and ask **"who or what is performing this action?"** The answer must be the very next noun. Identify it before examining any choice.',
  },
  {
    type: 'text',
    content: "Two constructions deserve particular attention. A **possessive** still dangles — *Curie's discovery* names a discovery, not Curie, so *Studying radioactivity, Curie's discovery…* places the wrong noun at the comma. And the rule is not limited to *-ing* openers: *A patient researcher, Curie…* and *In her lab, Curie…* raise the same who-or-what question.",
  },

  { type: 'heading', content: '2. Parallelism — items in a list share one form' },
  {
    type: 'text',
    content: "Ideas that are joined — in a series, or across a pairing construction — must share one grammatical form: all *-ing*, all plain nouns, all *to ___*. *She likes **hiking**, **swimming**, and **to bike*** breaks the pattern; the parallel version is *hiking, swimming, and **biking***. The requirement is not arbitrary: a list presents several items on equal footing, and a change of form quietly signals that the items are not truly equivalent. On test questions the mismatched item is almost always the last one, positioned in or beside the underlined portion.",
  },
  {
    type: 'text',
    content: "One item always appears in the fixed, non-underlined text — the **anchor**. Because the anchor cannot be changed, it dictates the answer. Locate it, name its grammatical form, and keep only the choice that matches. Pairing constructions follow the same principle: whatever follows the second half must match whatever followed the first.",
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
    content: "A repeated shared word (a second *to*, another *the*) is optional — *to teach and inspire* is exactly as parallel as *to teach and to inspire*. A choice should not be eliminated merely for dropping the repeated word; **form** is what must match.",
  },

  { type: 'heading', content: 'Correlative pairs are fixed templates' },
  {
    type: 'text',
    content: "The pairing words are **fixed two-part templates**: the moment the first half appears, the second half is already determined, and no near-synonym may substitute for it. *Neither* mandates *nor* — *neither efficient **or** attractive* is wrong however natural it reads; the sentence requires *neither efficient **nor** attractive*. *Not only* mandates *but also*, *both* mandates *and*, and *as* pairs with a second *as*: *as durable **as** steel*, never *as durable than steel*. The two range templates — *between… and* and *from… to* — may not trade halves: *between 1990 **to** 2000* and *from May **and** October* each weld half of one template to half of the other; the correct forms are *between 1990 and 2000* and *from May to October*.",
  },
  {
    type: 'table',
    headers: ['First half', 'Mandated partner', 'Wrong partner to reject'],
    rows: [
      ['neither…', 'nor', '*or*'],
      ['either…', 'or', '*nor*'],
      ['not only…', 'but also', '*and*'],
      ['both…', 'and', '*as well as*'],
      ['as (durable)…', 'as', '*than*'],
      ['between… / from…', 'and / to', 'the halves swapped: *between… to*, *from… and*'],
    ],
  },
  {
    type: 'text',
    content: 'The template supplies the words; parallelism still governs **what follows them**. Whatever grammatical form trails the first half must trail the second: *The playwright not only **wrote the script** but also **directed the premiere*** balances two verb phrases. *not only wrote the script but also the premiere* breaks — a verb phrase after the first half, a bare noun after the second. A correlative is checked twice: right partner, then matching forms.',
  },

  { type: 'heading', content: '3. Comparisons — like must be compared with like' },
  {
    type: 'text',
    content: "A comparison is valid only when both sides hold the same kind of thing. *Her novels are longer than **Dickens*** compares novels with a person. The correction makes both sides works: *…longer than **Dickens's*** (Dickens's novels) or *…than **those of Dickens***. Before judging any choice, state explicitly what stands on each side of the comparison — novels set against a person can never be equivalent.",
  },
  {
    type: 'text',
    content: "A related distinction: **fewer/many** pair with countable things, **less/much** with uncountable ones. *Fewer **cars**, less **traffic**. Many **species**, less **biodiversity**.* The test is whether individual units can be counted — one, two, three. Countable → *fewer*. Not countable → *less*.",
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Rushing to catch the train, ______ was left on the platform.\n\n(A) the ticket\n(B) Maria realized her ticket\n(C) her ticket',
    steps: [
      { label: 'Read the opener', content: '*Rushing to catch the train* — the question is who was rushing.' },
      { label: 'Name the doer', content: 'A person was rushing, not a ticket. The noun immediately after the comma must be that person.' },
      { label: 'Check the boundary noun', content: "(A) and (C) both place *ticket* at the comma, and a ticket cannot rush. Only **(B)** begins with *Maria*, the actual agent." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The internship taught her to analyze data, to write reports, and ______.\n\n(A) presenting to clients\n(B) to present to clients\n(C) she presented to clients',
    steps: [
      { label: 'Find the anchor', content: 'The fixed list reads *to analyze… , to write… , and ______*. The anchor form is **"to ___"** (infinitive).' },
      { label: 'Match the form', content: '(A) is an *-ing* phrase and (C) is a full clause — both break the pattern. Only **(B) to present** matches *to analyze / to write*.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The restoration both stabilized the mural ______ revealed pigments hidden for centuries.\n\n(A) and\n(B) but also\n(C) as well as\n(D) or',
    steps: [
      { label: 'Identify the template', content: 'The fixed text contains *both* — the first half of *both… and*. The partner is determined the moment *both* appears.' },
      { label: 'Reject the wrong partners', content: '(B) *but also* completes *not only*, and (D) *or* completes *either* — each belongs to a different template. (C) *as well as* is the near-synonym swap: natural-sounding, but not the mandated partner.' },
      { label: 'Confirm the parallel halves', content: '*stabilized the mural* and *revealed pigments hidden for centuries* are both verb phrases, so the halves match → **(A) and**.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: "The population of the coastal city grew faster than ______ the inland one.\n\n(A) than\n(B) that of\n(C) than that of",
    steps: [
      { label: 'Compare the two sides', content: "One side holds a **population** (coastal); the other holds the inland *city* itself. A city is not a population — the two sides do not match." },
      { label: 'Insert a stand-in', content: '*That of* stands in for "the population of," making the inland side a population as well. **(B) that of**. (C) repeats *than*, which the stem already provides.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The revised checkpoint policy created ______ delays for travelers.\n\n(A) fewer\n(B) less',
    steps: [
      { label: 'Test countability', content: 'Delays come in separate units — one delay, two delays, three delays. Countable.' },
      { label: 'Match', content: "Countable quantities take *fewer* → **(A) fewer**. Reserve *less* for uncountable amounts, such as *less traffic*." },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'Fix the modifier: *Covered in dust, the archivist opened the old ledger.* What is wrong, and how do you fix it?',
    answer: "The opener *Covered in dust* attaches to *the archivist*, so the sentence claims the archivist was dusty. It is the **ledger** that is dusty. Correct it by placing the dusty noun at the comma — *Covered in dust, the old ledger was opened by the archivist* — or by moving the modifier: *The archivist opened the old ledger, which was covered in dust.*",
  },
  {
    type: 'checkpointQuestion',
    question: 'Which is parallel — *The coach valued discipline, teamwork, and being on time* or *…discipline, teamwork, and punctuality*? Why?',
    answer: "**The second.** *Discipline* and *teamwork* are plain nouns — the anchor form — so the third item must also be a noun: **punctuality**, not the *-ing* phrase *being on time*.",
  },
  {
    type: 'checkpointQuestion',
    question: 'Is this comparison balanced — *The salary of a nurse is often higher than a teacher*? If not, fix it.',
    answer: '**Not balanced** — one side holds a *salary*, the other a *teacher* (a person). Make both sides salaries: *…higher than **that of a teacher*** or *…higher than **a teacher\'s***.',
  },

  {
    type: 'text',
    content: "**In summary:** for a modifier, identify who or what performs the action and confirm it is the noun at the comma. For a list, name the anchor's form and match it. For a comparison, state what stands on each side and confirm both are the same kind of thing.",
  },
];
