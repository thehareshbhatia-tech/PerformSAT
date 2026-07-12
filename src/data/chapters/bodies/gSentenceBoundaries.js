/**
 * Learn lesson body — Sentence Boundaries (joining, run-ons, fragments).
 *
 * NEW lean "review / cheat-sheet" style — one SAT skill per lesson, plain
 * language, one idea per short section, a method, a scannable table, then a
 * couple of worked examples and check-yourself questions. Voice + shape follow
 * gSubjectVerbAgreement.js (the exemplar). Gated by
 * chapters/__tests__/bodies.test.js (lean contract).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const gSentenceBoundariesBlocks = [
  {
    type: 'text',
    content: 'A complete sentence can stand on its own. Almost every boundary question comes down to one thing: **how many complete sentences sit on each side of the punctuation — one, or two?** The mark is decided by that count, not by how the sentence sounds.',
  },

  { type: 'heading', content: 'What counts as a complete sentence' },
  {
    type: 'text',
    content: 'A complete sentence has a subject and a verb, and it does **not** open with a word like *because, although, when, since, if,* or *while*. *The reef recovered.* is complete. *Because the reef recovered* is **not** — the *because* leaves you hanging, waiting for the rest.',
  },

  { type: 'heading', content: 'Joining two complete sentences: three legal moves' },
  {
    type: 'text',
    content: 'When there is a complete sentence on **each** side of the seam, you have exactly three ways to join them, and only three: a **period**, a **semicolon**, or a **comma + a FANBOYS word** (*and, but, or, so, for, nor, yet*). Your ear resists the period because the two ideas feel connected — but connection is never a license to use a lone comma. The semicolon exists for exactly this case (two complete sentences that belong together), and the comma + FANBOYS does the same job while naming the relationship out loud. A comma by itself is not on that list.',
  },
  {
    type: 'table',
    headers: ['What is on each side', 'Legal way to join'],
    rows: [
      ['complete sentence + complete sentence', 'period, or semicolon, or comma + FANBOYS (*and / but / or / so / for / nor / yet*)'],
      ['complete sentence + incomplete piece', 'comma (or a colon / dash, since the left side is complete)'],
      ['incomplete piece + complete sentence', 'comma after the incomplete piece'],
    ],
  },
  {
    type: 'keyInsight',
    content: 'A period and a semicolon do the **exact same job** — a full stop between two complete sentences. So if two answer choices are just "period" and "semicolon," **both are wrong**: a question has one answer, and those two are twins.',
  },

  { type: 'heading', content: 'The two illegal joins' },
  {
    type: 'text',
    content: 'Two complete sentences with only a **comma** between them is a *comma splice*. Two complete sentences with **nothing** between them is a *run-on*. Both are always wrong — no matter how short the sentences are or how closely related. *The reef recovered, it now supports hundreds of species* is a splice; upgrade that comma to a period, a semicolon, or a comma + *and*.',
  },

  { type: 'heading', content: 'Attaching an incomplete piece' },
  {
    type: 'text',
    content: 'An incomplete piece — a *because* / *although* clause, a list, a description with no verb — attaches to a complete sentence with a **comma**. When the left side is already a complete sentence, a **colon** or a **dash** can also introduce what follows. *Although the survey found damage, the reef held.* — *The reef held: the coral had adapted.*',
  },

  { type: 'heading', content: 'The fast method: count, then pick' },
  {
    type: 'steps',
    items: [
      'Read the whole sentence, not just the words next to the punctuation.',
      'Count each side: is it a complete sentence, or is one side incomplete?',
      'Two complete sentences → period, semicolon, or comma + FANBOYS.',
      'One side incomplete → a comma (a colon or dash if the left side is complete).',
    ],
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The museum’s new wing opened last spring ______ already draws record crowds.\n\n(A) spring, it\n(B) spring; it\n(C) spring it\n(D) spring, however it',
    steps: [
      { label: 'Count the sides', content: '*The museum’s new wing opened last spring* is complete; *it already draws record crowds* is complete too (the pronoun *it* is a real subject).' },
      { label: 'Two sentences → three legal moves', content: 'The seam needs a period, a semicolon, or a comma + FANBOYS.' },
      { label: 'Kill the illegal joins', content: '(A) comma alone = splice. (C) nothing = run-on. (D) *however* has no gluing power, so comma + *however* is still a splice.' },
      { label: 'Answer', content: '**(B)** — a semicolon is one of the three legal moves.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'The team had one goal ______ a finished bridge before the first snow.\n\n(A) goal; a\n(B) goal. A\n(C) goal: a\n(D) goal a',
    steps: [
      { label: 'Count the sides', content: '*The team had one goal* is a complete sentence. *a finished bridge before the first snow* has no verb, so it is **incomplete**.' },
      { label: 'Full stops need two sentences', content: 'A period and a semicolon each demand a complete sentence on both sides, so (A) and (B) die on the fragment.' },
      { label: 'Colon fits', content: 'A colon is legal when the left side is complete and what follows unpacks it. The bridge is what the goal was → **(C)**.' },
      { label: 'Reject the run-on', content: '(D) jams the two pieces together with no mark at all.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The rehearsal ran late ______ actors stayed to finish the scene.\n\n(A) late, the\n(B) late, so the\n(C) late the',
    steps: [
      { label: 'Count the sides', content: '*The rehearsal ran late* is complete; *the actors stayed to finish the scene* is complete.' },
      { label: 'Pick the legal move', content: 'Two complete sentences take a comma **only with** a FANBOYS word → **(B)** comma + *so*. (A) comma alone is a splice; (C) nothing is a run-on.' },
    ],
  },

  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Although the recipe looked complicated ______ took only twenty minutes to prepare.\n\n(A) , it\n(B) ; it\n(C) it',
    steps: [
      { label: 'Count the sides', content: '*Although the recipe looked complicated* opens with *although*, so it is **incomplete**. *it took only twenty minutes to prepare* is a complete sentence.' },
      { label: 'One side incomplete → comma', content: 'An opening dependent clause attaches to the complete sentence that follows with a **comma** → **(A)**.' },
      { label: 'Kill the rest', content: '(B) a semicolon demands a complete sentence on its *left*, but the *Although* clause is a fragment. (C) glues the two pieces with no mark at all.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'The lecture ended early, the students lingered to ask questions. Legal, or a comma splice? How would you fix it?',
    answer: '**Comma splice.** Both sides are complete sentences, so a comma alone is illegal. Three legal fixes: a period (*early. The*), a semicolon (*early; the*), or comma + FANBOYS (*early, and the*).',
  },
  {
    type: 'checkpointQuestion',
    question: 'Two of the four answer choices are "word. Next" and "word; next." Can either one be correct? Why?',
    answer: '**No — both are wrong.** A period and a semicolon are the same move (a full stop between two complete sentences), so if one worked the other would too. A question has a single answer, so twin choices cancel each other out.',
  },
  {
    type: 'checkpointQuestion',
    question: 'Because the trail was icy, the rangers closed it for the weekend. Is that comma legal, or a splice?',
    answer: '**Legal.** *Because the trail was icy* is an incomplete piece (it opens with *because*), and an opening dependent clause attaches to the complete sentence that follows with a comma. A splice needs a *complete* sentence on both sides of the comma; here the left side is a fragment, so this is the ordinary "incomplete + complete → comma" rule.',
  },

  {
    type: 'text',
    content: '**The move, every time:** count the complete sentences on each side. Two of them → period, semicolon, or comma + FANBOYS. One side incomplete → a comma (or a colon / dash after a complete left side). A comma alone between two sentences is always wrong.',
  },
];
