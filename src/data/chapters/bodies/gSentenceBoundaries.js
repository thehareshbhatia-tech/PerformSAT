/**
 * Learn lesson body — Sentence Boundaries (joining, run-ons, fragments).
 *
 * VOICE v4 (adopted 2026-07-18, exemplar: bodies/centralIdeas.js): practiced-tutor
 * register — developed 2-5 sentence paragraphs with connective tissue; every rule
 * earns its "because"; student-psychology named concretely; math teaching is
 * example-led; varied rhythm, no aphorism-per-block. Bans carried from v3: no
 * analogies, no pep talk, no exclamation marks, no emojis, no test-personification.
 * All v3 teaching claims preserved.
 *
 * COMPOSED MODE (2026-07-18): chapterOpener lede + auto-numbered
 * sections/examples/figures + aside margin-notes + summary close
 * (exemplar: bodies/mPercents.js).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const gSentenceBoundariesBlocks = [
  {
    type: 'chapterOpener',
    lede: "The reading chapters analyzed finished passages; the conventions chapters put you in the editor's seat, and editing starts with the sentence itself — with where one sentence ends and the next begins. Every boundary question reduces to a single count: **how many complete sentences touch the punctuation mark — one, or two?** Settle that count and the grammatical options settle themselves.",
  },
  {
    type: 'text',
    content: "The one method that fails here is the one most students trust: sound. Reading each option aloud and picking whichever flows most smoothly feels like judgment, but incorrect joins routinely sound natural — a comma splice reads as a graceful pause, and the wrong answers are built out of exactly that grace. So don't listen. Count the complete sentences instead; everything in this chapter feeds that count.",
  },

  { type: 'heading', content: 'What counts as a complete sentence?' },
  {
    type: 'text',
    content: "A complete sentence has a subject and a verb, and it doesn't open with a subordinating word. *The reef recovered.* qualifies — something is named, something happens, and the thought closes. *Because the reef recovered* contains the same subject and the same verb, yet it no longer stands alone: the word *because* promises a consequence, and until that consequence arrives, the reader is left waiting. That's what a subordinating word does — it turns a finished thought into half of one, and no amount of added length turns it back.",
  },
  {
    type: 'list',
    title: 'Subordinating words that create that dependence:',
    items: ['*because*', '*although*', '*when*', '*since*', '*if*', '*while*'],
  },
  {
    type: 'callout',
    content: "An *-ing* form or a *to* form **never fills the verb slot by itself**. *The committee reviewing the proposal.* and *To qualify for the grant.* are fragments however long they run, because *reviewing* needs a helping verb before it counts (*is reviewing, was reviewing, has been reviewing*) and a *to* form is never the sentence's verb. A word group whose only verb candidate is a bare *-ing* or *to* form has no verb at all — and no punctuation choice can rescue it.",
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
    type: 'diagramRef',
    visualType: 'sentenceBoundaryDiagram',
    description: "Two complete sentences with the three legal joins — a period, a semicolon, and a comma + FANBOYS — while the lone comma between them is marked wrong: a comma splice.",
  },
  {
    type: 'text',
    content: "Figure 1 sets the three legal joins against the lone comma that is never one of them. The classic error comes from meaning. A student who accepts a bare comma between two complete sentences has noticed, correctly, that the two ideas belong together — and has let that closeness license the comma. It doesn't, because relatedness is exactly what the semicolon exists to signal, and comma + FANBOYS makes the same join while stating the relationship outright. A lone comma is never among the grammatical options, however tightly the ideas connect.",
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
    type: 'aside',
    kind: 'remember',
    content: 'A period and a semicolon do the **same grammatical job** — a full stop between two complete sentences. When two answer choices offer only "period" and "semicolon," eliminate **both**: a question has one correct answer, and two equivalent choices can\'t both be it. That\'s two eliminations before the sentence is even parsed.',
  },

  { type: 'heading', content: 'The two illegal joins' },
  {
    type: 'text',
    content: "That leaves the two joins that are never legal. Two complete sentences fused by a lone comma make a *comma splice*; fused with no mark at all, they make a *run-on*. Both are always incorrect — no matter how short the sentences are or how closely the ideas relate. *The reef recovered, it now supports hundreds of species* is a splice even though it's short, natural-sounding, and true, and the repair is any of the three legal joins: replace the comma with a period, a semicolon, or comma + *and*.",
  },

  { type: 'heading', content: 'Attaching an incomplete piece' },
  {
    type: 'text',
    content: "Not every boundary has a complete sentence on both sides, and the rules relax when one side can't stand alone. An incomplete piece — a *because* / *although* clause, a list, a description with no verb — attaches to a complete sentence with a plain **comma**: *Although the survey found damage, the reef held.* When the left side is itself a complete sentence, a **colon** or a **dash** can also introduce what follows: *The reef held: the coral had adapted.* Why does the colon need a complete left side? Because a colon announces that what came before is about to be explained — and a fragment hasn't finished saying anything to explain.",
  },

  { type: 'heading', content: 'One join, one connector' },
  {
    type: 'text',
    content: "Joining two clauses takes **exactly one connector** — the subordinator or the coordinator, never both. *Although the survey found damage, but the reef held.* installs two, and the doubling quietly dismantles the sentence: *although* demotes the first clause to a dependent piece, *but* demands a complete sentence before it, and with both in place no clause is left standing as the main assertion. Either word alone repairs it — *Although the survey found damage, the reef held.* or *The survey found damage, but the reef held.*",
  },
  {
    type: 'text',
    content: "The doubled version survives casual reading for two reasons: each half sounds fine on its own, and the first connector often sits at the very start of a long sentence, far from the choices. A student who reads only the words around the blank never sees the *although* — which is precisely the reading the sentence was built for.",
  },
  {
    type: 'aside',
    kind: 'watch',
    content: "**Sweep the whole sentence for connectors before you choose.** When one is already present, any choice that adds a second is wrong — and the punctuation-only choice usually wins.",
  },

  { type: 'heading', content: 'Participial tails' },
  {
    type: 'text',
    content: "One legal construction looks enough like a splice to cost points in the other direction. A comma followed by an *-ing* phrase at the end of a sentence — *The company expanded rapidly, opening six offices in two years* — modifies the **whole preceding clause**, and it creates no splice. The tail *opening six offices in two years* has no subject and can't stand alone, so it's an incomplete piece legally attached by the comma; the comma is also what marks the phrase as describing the clause's action rather than gluing to the nearest word.",
  },
  {
    type: 'text',
    content: "The construction turns illegal the moment a subject appears. *The company expanded rapidly, it opened six offices in two years* upgrades the tail to a complete sentence — and the comma to a splice. Choices that differ only by that inserted pronoun are testing exactly this line, so when two options match word for word except for an *it* after the comma, the count is the whole question.",
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
    type: 'summary',
    title: 'The whole skill in one count',
    points: [
      'Every boundary reduces to one question: **how many complete sentences** touch the mark — one, or two?',
      'Two complete sentences take a **period, a semicolon, or a comma + FANBOYS**, and nothing else.',
      'When one side is incomplete, a **comma** joins them — or a colon or dash after a complete left side.',
      'A **lone comma** between two complete sentences is always wrong, however natural it sounds.',
    ],
  },
];
