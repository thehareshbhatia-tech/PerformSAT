/**
 * Learn lesson body — Sentence Boundaries (joining, run-ons, fragments).
 *
 * VOICE v3 (adopted 2026-07-17, exemplar: bodies/centralIdeas.js): scannable
 * instructional register — direct address, contractions, 1-3 sentence text
 * blocks, list blocks for criteria, steps blocks for procedures; no analogies,
 * no pep-talk, no emojis. All substance of the v2 textbook version preserved.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const gSentenceBoundariesBlocks = [
  {
    type: 'text',
    content: "The reading chapters analyzed finished passages. Now we take the editor's seat — and editing starts with the sentence itself, with where one sentence ends and the next begins.",
  },
  {
    type: 'text',
    content: "Every boundary question reduces to a single count: **how many complete sentences touch the punctuation mark — one, or two?** That count determines the answer.",
  },
  {
    type: 'text',
    content: "Don't judge by sound. Listening for a pause — or picking whichever option reads most smoothly — is unreliable here, because incorrect joins routinely sound natural. Count the complete sentences instead.",
  },

  { type: 'heading', content: 'What counts as a complete sentence?' },
  {
    type: 'text',
    content: "A complete sentence has a subject and a verb, and it doesn't open with a subordinating word. *The reef recovered.* expresses a finished thought and stands alone.",
  },
  {
    type: 'text',
    content: "*Because the reef recovered*, by contrast, leaves the thought unresolved — the reader is still waiting for the consequence.",
  },
  {
    type: 'list',
    title: 'Subordinating words that create that dependence:',
    items: ['*because*', '*although*', '*when*', '*since*', '*if*', '*while*'],
  },
  {
    type: 'text',
    content: "A clause that opens with one of these can't stand alone, however many words follow it.",
  },
  {
    type: 'callout',
    content: "An *-ing* form or a *to* form **never fills the verb slot by itself**. *The committee reviewing the proposal.* and *To qualify for the grant.* are fragments, however long they run — *reviewing* needs a helping verb before it counts (*is reviewing, was reviewing, has been reviewing*), and a *to* form is never the sentence's verb. A word group whose only verb candidate is a bare *-ing* or *to* form has no verb at all, and no punctuation choice can rescue it.",
  },

  { type: 'heading', content: 'Joining two complete sentences' },
  {
    type: 'text',
    content: "When a complete sentence sits on **each** side of the boundary, exactly three joins are grammatical:",
  },
  {
    type: 'list',
    items: [
      'a **period**',
      'a **semicolon**',
      'a **comma + a FANBOYS word** — *and, but, or, so, for, nor, yet*',
    ],
  },
  {
    type: 'text',
    content: "The classic error comes from meaning: the two ideas are closely related, so a bare comma feels right. Relatedness doesn't license a comma.",
  },
  {
    type: 'text',
    content: "When two sentences belong together, the semicolon exists for exactly that purpose — and comma + FANBOYS makes the same join while stating the relationship outright. A lone comma is never among the grammatical options.",
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
    content: 'A period and a semicolon do the **same grammatical job** — a full stop between two complete sentences. When two answer choices offer only "period" and "semicolon," eliminate **both**: a question has one correct answer, and two equivalent choices can\'t both be it. That\'s two eliminations before the sentence is even parsed.',
  },

  { type: 'heading', content: 'The two illegal joins' },
  {
    type: 'list',
    title: 'Two complete sentences joined by:',
    items: [
      'a lone **comma** → a *comma splice*',
      'no mark at all → a *run-on*',
    ],
  },
  {
    type: 'text',
    content: "Both are always incorrect — no matter how short the sentences are or how closely the ideas relate. *The reef recovered, it now supports hundreds of species* is a splice.",
  },
  {
    type: 'text',
    content: "The repair replaces the comma with a period, a semicolon, or comma + *and*.",
  },

  { type: 'heading', content: 'Attaching an incomplete piece' },
  {
    type: 'text',
    content: "An incomplete piece — a *because* / *although* clause, a list, a description with no verb — attaches to a complete sentence with a plain **comma**.",
  },
  {
    type: 'text',
    content: "When the left side is itself a complete sentence, a **colon** or a **dash** can also introduce what follows. *Although the survey found damage, the reef held.* — *The reef held: the coral had adapted.*",
  },

  { type: 'heading', content: 'One join, one connector' },
  {
    type: 'text',
    content: "Joining two clauses takes **exactly one connector** — the subordinator or the coordinator, never both.",
  },
  {
    type: 'text',
    content: "*Although the survey found damage, but the reef held.* doubles up. *Although* demotes the first clause to a dependent piece, and *but* demands a complete sentence before it — with both installed, no clause is left standing as the main assertion.",
  },
  {
    type: 'text',
    content: "Either word alone repairs the sentence: *Although the survey found damage, the reef held.* or *The survey found damage, but the reef held.*",
  },
  {
    type: 'text',
    content: "The doubled version survives casual reading because each half sounds fine on its own — and the first connector often sits at the very start of a long sentence, far from the choices.",
  },
  {
    type: 'tip',
    content: "**Sweep the whole sentence for connectors before you choose.** When one is already there, any choice that adds a second is wrong — and the punctuation-only choice usually wins.",
  },

  { type: 'heading', content: 'Participial tails' },
  {
    type: 'text',
    content: "A comma followed by an *-ing* phrase at the end of a sentence modifies the **whole preceding clause**, and it creates no splice: *The company expanded rapidly, opening six offices in two years.*",
  },
  {
    type: 'text',
    content: "The tail *opening six offices in two years* has no subject and can't stand alone. It's an incomplete piece legally attached by the comma — and the comma is what marks the phrase as describing the clause's action rather than gluing to the nearest word.",
  },
  {
    type: 'text',
    content: "The construction turns illegal the moment a subject appears: *The company expanded rapidly, it opened six offices in two years* upgrades the tail to a complete sentence — and the comma to a splice.",
  },
  {
    type: 'text',
    content: "Choices that differ only by that inserted pronoun are testing exactly this line.",
  },

  { type: 'heading', content: 'How to approach these questions' },
  {
    type: 'steps',
    items: [
      "**Read the whole sentence.** Not just the words around the punctuation — a connector already present can sit far from the blank.",
      '**Classify each side.** Complete sentence, or incomplete piece?',
      '**Two complete sentences?** Period, semicolon, or comma + FANBOYS — no other join is grammatical.',
      '**One side incomplete?** A comma (a colon or dash also works when the left side is complete).',
    ],
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The museum’s new wing opened last spring ______ already draws record crowds.\n\n(A) spring, it\n(B) spring; it\n(C) spring it\n(D) spring, however it',
    steps: [
      { label: 'Classify each side', content: '*The museum’s new wing opened last spring* stands alone; *it already draws record crowds* stands alone too — the pronoun *it* is a full subject.' },
      { label: 'Identify the grammatical joins', content: 'Two complete sentences allow a period, a semicolon, or a comma + FANBOYS at the boundary — nothing else qualifies.' },
      { label: 'Eliminate the illegal joins', content: '(A) is a comma alone — a splice. (C) is nothing — a run-on. (D) inserts *however*, but *however* is an adverb with no joining power; comma + *however* is still a splice.' },
      { label: 'Select the answer', content: '**(B)** — the semicolon is one of the three grammatical joins.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'The team had one goal ______ a finished bridge before the first snow.\n\n(A) goal; a\n(B) goal. A\n(C) goal: a\n(D) goal a',
    steps: [
      { label: 'Classify each side', content: '*The team had one goal* stands alone. *a finished bridge before the first snow* has no verb — it is **incomplete**.' },
      { label: 'Eliminate the full stops', content: 'A period and a semicolon each demand a complete sentence on both sides, so (A) and (B) fail on the fragment.' },
      { label: 'Apply the colon rule', content: 'A colon works when the left side is complete and what follows explains it — the bridge is exactly what the goal was → **(C)**.' },
      { label: 'Reject the run-on', content: '(D) joins the two pieces with no mark at all.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The rehearsal ran late ______ actors stayed to finish the scene.\n\n(A) late, the\n(B) late, so the\n(C) late the',
    steps: [
      { label: 'Classify each side', content: '*The rehearsal ran late* stands alone; *the actors stayed to finish the scene* stands alone.' },
      { label: 'Choose the grammatical join', content: 'Two complete sentences take a comma **only with** a FANBOYS word → **(B)** comma + *so*. (A), a comma alone, is a splice; (C), with no mark, is a run-on.' },
    ],
  },

  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Although the recipe looked complicated ______ took only twenty minutes to prepare.\n\n(A) , it\n(B) ; it\n(C) it',
    steps: [
      { label: 'Classify each side', content: "*Although the recipe looked complicated* opens with *although*, so it can't stand alone — it's **incomplete**. *it took only twenty minutes to prepare* stands alone." },
      { label: 'Apply the comma rule', content: 'An opening dependent clause attaches to the complete sentence after it with a **comma** → **(A)**.' },
      { label: 'Eliminate the rest', content: "(B) fails because a semicolon demands a complete sentence on its *left*, and the *Although* clause isn't one. (C) joins the two pieces with no mark at all." },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'The lecture ended early, the students lingered to ask questions. Legal, or a comma splice? How would you fix it?',
    answer: "**Comma splice.** Both sides stand alone, so a lone comma can't join them. Three repairs are available: a period (*early. The*), a semicolon (*early; the*), or comma + FANBOYS (*early, and the*) — any of the three works.",
  },
  {
    type: 'checkpointQuestion',
    question: 'Two of the four answer choices are "word. Next" and "word; next." Can either one be correct? Why?',
    answer: '**No — eliminate both.** A period and a semicolon do the same job: a full stop between two complete sentences. If one were correct, the other would be too, and a question has only one answer. Equivalent choices eliminate each other.',
  },
  {
    type: 'checkpointQuestion',
    question: 'Because the trail was icy, the rangers closed it for the weekend. Is that comma legal, or a splice?',
    answer: "**Legal.** *Because the trail was icy* opens with *because*, so it's an incomplete piece — and an opening dependent clause takes a comma before the complete sentence that follows. A splice requires a *complete* sentence on both sides of the comma; here the left side can't stand alone, so this is the ordinary incomplete + complete → comma pattern.",
  },
  {
    type: 'checkpointQuestion',
    question: 'Although the storm delayed every flight, but the passengers stayed calm. What is wrong, and what are the repairs?',
    answer: '**A doubled connector.** One join takes exactly one connector, and this sentence installs two — *although* and *but* — leaving no clause standing as the main assertion. Delete either one: *Although the storm delayed every flight, the passengers stayed calm.* or *The storm delayed every flight, but the passengers stayed calm.*',
  },

  {
    type: 'text',
    content: '**The whole skill in one count:** how many complete sentences touch the mark. Two → period, semicolon, or comma + FANBOYS. One side incomplete → a comma (or a colon / dash after a complete left side). A lone comma between two complete sentences is always wrong, however natural it sounds.',
  },
];
