/**
 * Learn lesson body — Sentence Boundaries (joining, run-ons, fragments).
 *
 * TUTOR VOICE (adopted 2026-07-14, user-approved exemplar mLinearEquations.js):
 * coaching direct-address — talks TO the student, anticipates the mistake
 * before it happens, everyday anchor first and rule second, concrete decision
 * rules ("count the complete sentences, then pick"). Lean structure unchanged;
 * gated by chapters/__tests__/bodies.test.js (lean contract).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const gSentenceBoundariesBlocks = [
  {
    type: 'text',
    content: "Here's the whole game in one question: **how many complete sentences are touching that punctuation mark — one, or two?** Count them and the answer picks itself. Don't listen for a pause, and don't ask which choice sounds smoothest — your ear will lie to you all day on this one. Count.",
  },

  { type: 'heading', content: 'What counts as a complete sentence' },
  {
    type: 'text',
    content: "A complete sentence has a subject, a verb, and no hanging opener. Say *The reef recovered.* out loud — done, finished, it stands alone. Now say *Because the reef recovered* and stop. Feel that? You're left waiting for the payoff. Words like *because, although, when, since, if,* and *while* create that wait — a clause that opens with one of them can't stand alone, no matter how many words follow it.",
  },

  { type: 'heading', content: 'Joining two complete sentences: three legal moves' },
  {
    type: 'text',
    content: "When a complete sentence sits on **each** side of the seam, you have exactly three ways to join them, and only three: a **period**, a **semicolon**, or a **comma + a FANBOYS word** (*and, but, or, so, for, nor, yet*). Here's where your ear betrays you: the two ideas feel connected, so a bare comma feels friendly and right. Connection is not a license. If the sentences belong together, that's exactly what the semicolon was built for — and comma + FANBOYS does the same job while naming the relationship out loud. A lone comma is not on the list, ever.",
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
    content: 'A period and a semicolon do the **exact same job** — a full stop between two complete sentences. So when two answer choices are just "period" and "semicolon," cross out **both**: a question has one answer, and twins can\'t both be it. That\'s two eliminations before you\'ve even parsed the sentence.',
  },

  { type: 'heading', content: 'The two illegal joins' },
  {
    type: 'text',
    content: "Two complete sentences held together by a lone **comma** is a *comma splice*. Held together by **nothing** is a *run-on*. Both are wrong every single time — no matter how short the sentences are or how tightly the ideas hug each other. *The reef recovered, it now supports hundreds of species* is a splice. Upgrade that comma: period, semicolon, or comma + *and*.",
  },

  { type: 'heading', content: 'Attaching an incomplete piece' },
  {
    type: 'text',
    content: "An incomplete piece — a *because* / *although* clause, a list, a description with no verb — hangs onto a complete sentence with a plain **comma**. And once the left side is a complete sentence, a **colon** or a **dash** can also introduce what follows. *Although the survey found damage, the reef held.* — *The reef held: the coral had adapted.*",
  },

  { type: 'heading', content: 'The fast method: count, then pick' },
  {
    type: 'steps',
    items: [
      'Read the whole sentence — not just the four words hugging the punctuation.',
      'Count each side: complete sentence, or incomplete piece?',
      'Two complete sentences → period, semicolon, or comma + FANBOYS. Nothing else.',
      'One side incomplete → a comma (a colon or dash also works when the left side is complete).',
    ],
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The museum’s new wing opened last spring ______ already draws record crowds.\n\n(A) spring, it\n(B) spring; it\n(C) spring it\n(D) spring, however it',
    steps: [
      { label: 'Count the sides', content: '*The museum’s new wing opened last spring* stands alone; *it already draws record crowds* stands alone too — the pronoun *it* is a real subject.' },
      { label: 'Two sentences → three legal moves', content: 'You want a period, a semicolon, or a comma + FANBOYS at that seam. Nothing else qualifies.' },
      { label: 'Kill the illegal joins', content: '(A) is a comma alone — splice. (C) is nothing — run-on. (D) sneaks in *however*, but *however* has no gluing power; comma + *however* is still a splice.' },
      { label: 'Answer', content: '**(B)** — the semicolon is one of your three legal moves.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'The team had one goal ______ a finished bridge before the first snow.\n\n(A) goal; a\n(B) goal. A\n(C) goal: a\n(D) goal a',
    steps: [
      { label: 'Count the sides', content: '*The team had one goal* stands alone. *a finished bridge before the first snow* has no verb — it\'s **incomplete**.' },
      { label: 'Full stops need two sentences', content: 'A period and a semicolon each demand a complete sentence on both sides, so (A) and (B) die on the fragment.' },
      { label: 'Colon fits', content: 'A colon is legal when the left side is complete and what follows unpacks it — and the bridge is exactly what the goal was → **(C)**.' },
      { label: 'Reject the run-on', content: '(D) jams the two pieces together with no mark at all.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The rehearsal ran late ______ actors stayed to finish the scene.\n\n(A) late, the\n(B) late, so the\n(C) late the',
    steps: [
      { label: 'Count the sides', content: '*The rehearsal ran late* stands alone; *the actors stayed to finish the scene* stands alone.' },
      { label: 'Pick the legal move', content: 'Two complete sentences take a comma **only with** a FANBOYS word → **(B)** comma + *so*. (A) comma alone is a splice; (C) nothing is a run-on.' },
    ],
  },

  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Although the recipe looked complicated ______ took only twenty minutes to prepare.\n\n(A) , it\n(B) ; it\n(C) it',
    steps: [
      { label: 'Count the sides', content: '*Although the recipe looked complicated* opens with *although* — say it and stop, and you\'re left hanging. **Incomplete.** *it took only twenty minutes to prepare* stands alone.' },
      { label: 'One side incomplete → comma', content: 'An opening dependent clause hangs onto the complete sentence after it with a **comma** → **(A)**.' },
      { label: 'Kill the rest', content: '(B) a semicolon demands a complete sentence on its *left*, and the *Although* clause isn\'t one. (C) glues the two pieces together with no mark at all.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'The lecture ended early, the students lingered to ask questions. Legal, or a comma splice? How would you fix it?',
    answer: '**Comma splice.** Both sides stand alone, so a lone comma can\'t hold them. You have three fixes: a period (*early. The*), a semicolon (*early; the*), or comma + FANBOYS (*early, and the*) — any of the three is legal.',
  },
  {
    type: 'checkpointQuestion',
    question: 'Two of the four answer choices are "word. Next" and "word; next." Can either one be correct? Why?',
    answer: '**No — cross out both.** A period and a semicolon are the same move: a full stop between two complete sentences. If one worked, the other would too, and a question only gets one answer. Twin choices eliminate each other — that\'s two down for free.',
  },
  {
    type: 'checkpointQuestion',
    question: 'Because the trail was icy, the rangers closed it for the weekend. Is that comma legal, or a splice?',
    answer: '**Legal.** *Because the trail was icy* opens with *because*, so it\'s an incomplete piece — and an opening dependent clause takes a comma before the complete sentence that follows. A splice needs a *complete* sentence on both sides of the comma; here the left side can\'t stand alone, so this is the ordinary "incomplete + complete → comma" rule doing its job.',
  },

  {
    type: 'text',
    content: '**The move, every time:** count the complete sentences touching the mark. Two → period, semicolon, or comma + FANBOYS. One side incomplete → a comma (or a colon / dash after a complete left side). A lone comma between two complete sentences is always wrong — no matter how good it sounds.',
  },
];
