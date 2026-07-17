/**
 * Learn lesson body — Modifiers & Parallelism (Standard English Conventions).
 *
 * VOICE v3 (adopted 2026-07-17, exemplar: bodies/centralIdeas.js): scannable
 * instructional register — direct address, contractions, 1-3 sentence text
 * blocks, list blocks for criteria, steps blocks for procedures; no
 * analogies, no pep-talk, no emojis. All substance of the v2 textbook
 * version preserved. Gated by bodies.test.js.
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
    content: "Verb to subject, pronoun to antecedent, tense to timeline — the whole unit so far has been matching. That matching now stretches past single words to phrases, lists, and comparisons.",
  },
  {
    type: 'text',
    content: "Three question types share one principle: **each element has to connect to, match, or be measured against the right thing.**",
  },
  {
    type: 'list',
    items: [
      'A modifying phrase must sit beside what it describes.',
      'Items in a list must share one grammatical form.',
      'A comparison must set like against like.',
    ],
  },

  { type: 'heading', content: '1. Modifiers: the noun after the comma' },
  {
    type: 'text',
    content: "Read literally, *Walking to school, the rain started* claims the rain went for a walk. That absurdity is the rule at work: an opening phrase before a comma describes **whatever noun comes right after the comma** — no exceptions, no appeal to what the writer meant.",
  },
  {
    type: 'text',
    content: "The fix puts the true agent at the comma: *Walking to school, **I** got caught in the rain.*",
  },
  {
    type: 'keyInsight',
    content: 'Cover the choices, read the opening phrase, and ask **"who or what is doing this?"** The answer has to be the very next noun — name it before you look at a single choice.',
  },
  {
    type: 'list',
    title: 'Two setups that still dangle:',
    items: [
      "**A possessive.** *Curie's discovery* names a discovery, not Curie — so *Studying radioactivity, Curie's discovery…* puts the wrong noun at the comma.",
      '**A non-*-ing* opener.** *A patient researcher, Curie…* and *In her lab, Curie…* raise the same who-or-what question.',
    ],
  },

  { type: 'heading', content: '2. Parallelism: one list, one form' },
  {
    type: 'text',
    content: "Ideas that are joined — in a series, or across a pairing construction — share one grammatical form: all *-ing*, all plain nouns, all *to ___*. *She likes **hiking**, **swimming**, and **to bike*** breaks the pattern; the parallel version is *hiking, swimming, and **biking***.",
  },
  {
    type: 'text',
    content: "The requirement isn't arbitrary. A list presents its items on equal footing, and a change of form quietly signals that the items aren't truly equivalent.",
  },
  {
    type: 'text',
    content: "On test questions, the mismatched item is almost always the last one, sitting in or beside the underlined portion.",
  },
  {
    type: 'text',
    content: "One item always lives in the fixed, non-underlined text — the **anchor**. It can't change, so it dictates the answer: find it, name its grammatical form, and keep only the choice that matches.",
  },
  {
    type: 'text',
    content: "Pairing constructions follow the same principle — whatever follows the second half matches whatever followed the first.",
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
    content: "A repeated shared word (a second *to*, another *the*) is optional — *to teach and inspire* is exactly as parallel as *to teach and to inspire*. Don't cut a choice just for dropping the repeated word; **form** is what has to match.",
  },

  { type: 'heading', content: 'Correlative pairs are fixed templates' },
  {
    type: 'text',
    content: "The pairing words are **fixed two-part templates**: the moment the first half appears, the second half is already decided, and no near-synonym can stand in for it.",
  },
  {
    type: 'text',
    content: "*Neither* mandates *nor* — *neither efficient **or** attractive* is wrong however natural it reads; the sentence requires *neither efficient **nor** attractive*. Likewise *not only* mandates *but also*, *both* mandates *and*, and *as* pairs with a second *as*: *as durable **as** steel*, never *as durable than steel*.",
  },
  {
    type: 'text',
    content: "The two range templates can't trade halves either. *Between 1990 **to** 2000* and *from May **and** October* each weld half of one template to half of the other; the correct forms are *between 1990 and 2000* and *from May to October*.",
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
    content: 'The template supplies the words; parallelism still governs **what follows them**. *The playwright not only **wrote the script** but also **directed the premiere*** balances two verb phrases — *not only wrote the script but also the premiere* breaks, a verb phrase against a bare noun.',
  },
  {
    type: 'text',
    content: 'So a correlative gets checked twice: right partner first, then matching forms.',
  },

  { type: 'heading', content: '3. Comparisons: like against like' },
  {
    type: 'text',
    content: "A comparison holds up only when both sides carry the same kind of thing. *Her novels are longer than **Dickens*** compares novels with a person.",
  },
  {
    type: 'text',
    content: "The fix makes both sides works: *…longer than **Dickens's*** (Dickens's novels) or *…than **those of Dickens***. Before judging any choice, state what stands on each side — novels set against a person can never balance.",
  },
  {
    type: 'text',
    content: "A related distinction rides along with comparisons: countable versus uncountable amounts.",
  },
  {
    type: 'list',
    title: 'Fewer or less?',
    items: [
      '**Fewer / many** pair with countable things: *fewer **cars**, many **species**.*',
      '**Less / much** pair with uncountable ones: *less **traffic**, less **biodiversity**.*',
      'The test: can you count individual units — one, two, three? Countable → *fewer*. Not countable → *less*.',
    ],
  },

  { type: 'heading', content: 'How to approach these questions' },
  {
    type: 'steps',
    items: [
      '**Name the pattern.** An opening phrase before a comma → modifier. A series or a pairing word → parallelism. *Than* or *as* → comparison.',
      '**Modifier: find the doer.** Ask who or what performs the opening phrase; that noun belongs right after the comma.',
      '**List: find the anchor.** The item in the fixed text names the form; keep only the choice that matches it.',
      '**Pairing word: check twice.** Right partner first (*neither… nor*, *not only… but also*), then matching forms after each half.',
      "**Comparison: name both sides.** State what each side holds and confirm they're the same kind of thing.",
    ],
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Rushing to catch the train, ______ was left on the platform.\n\n(A) the ticket\n(B) Maria realized her ticket\n(C) her ticket',
    steps: [
      { label: 'Read the opener', content: '*Rushing to catch the train* — so who was rushing?' },
      { label: 'Name the doer', content: 'A person was rushing, not a ticket. The noun right after the comma has to be that person.' },
      { label: 'Check the boundary noun', content: "(A) and (C) both put *ticket* at the comma, and a ticket can't rush. Only **(B)** starts with *Maria*, the actual doer." },
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
      { label: 'Identify the template', content: 'The fixed text contains *both* — the first half of *both… and*. The partner is decided the moment *both* appears.' },
      { label: 'Reject the wrong partners', content: '(B) *but also* completes *not only*, and (D) *or* completes *either* — each belongs to a different template. (C) *as well as* is the near-synonym swap: natural-sounding, but not the mandated partner.' },
      { label: 'Confirm the parallel halves', content: '*stabilized the mural* and *revealed pigments hidden for centuries* are both verb phrases, so the halves match → **(A) and**.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: "The population of the coastal city grew faster than ______ the inland one.\n\n(A) than\n(B) that of\n(C) than that of",
    steps: [
      { label: 'Compare the two sides', content: "One side holds a **population** (coastal); the other holds the inland *city* itself. A city isn't a population — the sides don't match." },
      { label: 'Insert a stand-in', content: '*That of* stands in for "the population of," making the inland side a population too. **(B) that of**. (C) repeats *than*, which the stem already provides.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The revised checkpoint policy created ______ delays for travelers.\n\n(A) fewer\n(B) less',
    steps: [
      { label: 'Test countability', content: 'Delays come in separate units — one delay, two delays, three. Countable.' },
      { label: 'Match', content: 'Countable quantities take *fewer* → **(A) fewer**. Save *less* for uncountable amounts, such as *less traffic*.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'Fix the modifier: *Covered in dust, the archivist opened the old ledger.* What is wrong, and how do you fix it?',
    answer: "The opener *Covered in dust* attaches to *the archivist*, so the sentence claims the archivist was dusty. It's the **ledger** that's dusty. Fix it by putting the dusty noun at the comma — *Covered in dust, the old ledger was opened by the archivist* — or by moving the modifier: *The archivist opened the old ledger, which was covered in dust.*",
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
    content: "**Three checks, one habit:** for a modifier, name who or what performs the action and confirm it's the noun at the comma. For a list, name the anchor's form and match it. For a comparison, state what stands on each side and confirm both are the same kind of thing.",
  },
];
