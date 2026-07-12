/**
 * Learn chapter body — Boundaries (Standard English Conventions).
 *
 * Teach-from-zero textbook chapter following the locked template
 * (docs/LEARN_TEXTBOOK_OVERHAUL_PLAN.md): roadmap → Stage 1 foundations →
 * Stage 2 numbered rulebook (rule → right → wrong → why) → Stage 3 on-the-test
 * (decision flow, traps, worked examples, checkpoints, one-page summary).
 * Voice reference: docs/learn-textbook/sample-chapter-boundaries.html.
 * Concept source: knowledge/graph/rw (clause-counting, three-legal-joins,
 * sentence-fragment-connectors, punctuating-by-ear, window-widening,
 * boundary-equivalence-cancellation, essential-vs-nonessential,
 * pair-completeness, comma-splice, delete-and-reread).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * rwBodies/index.js — never import this from the chapter index.
 */

export const boundariesBlocks = [
  {
    type: 'text',
    content: 'A Boundaries question hands you a sentence with a gap and four choices that differ only by one punctuation mark — a period, a semicolon, a comma, a colon, or a dash. The good news most students never hear: **you do not need a good ear for these.** Every one is decided by a short, fixed set of rules. Learn them once and you can *prove* the answer instead of guessing at what sounds right.',
  },
  {
    type: 'steps',
    title: 'How this chapter is built',
    items: [
      '**Stage 1 · Foundations.** What a clause is, complete vs. incomplete, and the one test you will reuse on every question.',
      '**Stage 2 · The rulebook.** Seven numbered rules, each in the same shape: the rule, a right example, a wrong example, and the why.',
      '**Stage 3 · On the test.** A decision flow that routes you to the right rule, the traps the test sets, worked examples, and a one-page summary.',
    ],
  },

  // ── Stage 1 · Foundations ──────────────────────────────────────────────
  { type: 'heading', content: 'Stage 1 · The clause: complete vs. incomplete' },
  {
    type: 'text',
    content: 'Almost every punctuation rule comes down to one question: *is this piece a complete thought, or not?* So we start there. A **clause** is a group of words with a subject (who or what it is about) and a verb (what they do or are). There are only two kinds, and telling them apart is the whole game.',
  },
  {
    type: 'text',
    content: 'An **independent clause** can stand alone as a sentence. It has a subject and a verb, and it feels finished. A **dependent clause** also has a subject and a verb, but it opens with a word — *because, although, when, if, since, while, after, before* — that leaves it hanging. Grammarians call these openers **subordinators**: they demote a complete thought into a fragment that has to lean on a real sentence to finish.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Complete — stands alone', content: '*The lab ran overnight.* Subject (*lab*), verb (*ran*), finished thought.', variant: 'right' },
      { label: 'Not complete — leaves you waiting', content: '*Because the lab ran overnight…* Subject and verb are there, but *because* makes you wait: because the lab ran overnight… what?', variant: 'wrong' },
    ],
  },
  {
    type: 'strategyCard',
    title: 'The stand-alone test',
    content: 'Cover a piece of the sentence and ask: **could this stand on its own as a sentence?** If yes, it is complete (independent). If it leaves you waiting, it is incomplete (dependent, or a fragment with no subject or no working verb). Every rule in Stage 2 is just this test applied to each side of the gap — master it and the rest is lookup.',
  },
  {
    type: 'checkpointQuestion',
    number: 1,
    question: 'Which of these can stand alone? (a) *The bridge opened in 1932.* (b) *When the bridge opened in 1932.* (c) *Carrying traffic for decades.*',
    answer: 'Only **(a)** — subject (*bridge*), verb (*opened*), finished thought. (b) adds *When*, which leaves it hanging. (c) has no subject at all, so it is a fragment. **Why this matters:** every Boundaries rule starts by classifying each side of the gap exactly this way.',
  },
  { type: 'heading', content: 'Count the clauses, then look up the mark' },
  {
    type: 'text',
    content: 'Here is the mindset shift that turns Boundaries from guesswork into lookup: a Boundaries item is never really asking *"which mark sounds right?"* It is asking *"one sentence here, or two?"* **Count first, punctuate second.** Once you know how many complete thoughts touch the gap, the legal marks come from a small, closed menu — and everything off the menu is wrong, no matter how natural it sounds.',
  },
  {
    type: 'steps',
    title: 'The counting routine',
    items: [
      'Read from the *true start* of the sentence to its final period — never judge from the few words around the gap.',
      'Find every working verb, and attach each verb to its subject.',
      'Demote captured clauses: a subject–verb pair that opens with a subordinator (*because, although, when…*) or a relative word (*which, who, that*) is dependent — it does not count.',
      'Count the complete thoughts touching the gap: two, one plus a fragment, or one decorated sentence. That count picks the rule.',
    ],
  },

  // ── Stage 2 · The rulebook ─────────────────────────────────────────────
  { type: 'heading', content: 'Stage 2 · The rulebook' },
  {
    type: 'text',
    content: 'Seven rules cover every Boundaries question. Each follows the same shape: the **rule**, a **right** example, a **wrong** example, and the **why**.',
  },

  { type: 'heading', content: 'Rule 1 — Two complete thoughts take a strong join' },
  {
    type: 'text',
    content: 'When both sides of the gap are complete sentences, exactly three joins are legal: a **period**, a **semicolon**, or a **comma plus a joining word** (*and, but, or, so, for, nor, yet* — the **FANBOYS**). A useful collapse: a period and a semicolon are the same mark in two costumes — both say "a complete thought just ended." And because a period or semicolon already ends the thought, a choice shaped *"semicolon + and"* is doing two jobs where one is allowed — off the menu.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right', content: '*The telescope was old; it still worked.* Also right: *The telescope was old, but it still worked.*', variant: 'right' },
      { label: 'Wrong — the comma splice', content: '*The telescope was old, it still worked.* A comma alone cannot hold two complete sentences.', variant: 'wrong' },
    ],
  },
  {
    type: 'diagramRef',
    visualType: 'sentenceBoundaryDiagram',
    description: 'Two independent clauses join with a period, semicolon, or comma + FANBOYS; a comma alone is a comma splice.',
  },
  {
    type: 'text',
    content: 'There are exactly two illegal joins, and both have names. A comma alone between two complete thoughts is a **comma splice**. Nothing at all between them is a **fused run-on**. Both fail for the same reason: two strong ideas need a strong link, and a bare comma — or empty space — is too weak to hold them. The fix is always an upgrade: period, semicolon, or comma + FANBOYS.',
  },

  { type: 'heading', content: 'Rule 2 — An incomplete opener attaches with a comma' },
  {
    type: 'text',
    content: 'When a dependent clause comes **first**, put a comma at the seam where it meets the complete sentence. When the complete part comes first and the dependent clause trails, there is usually no comma. One more law hides here: between two clauses, **exactly one connector may do the job**. *Although the vote failed, but the coalition held* stacks two connectors — *although* demotes the first clause and *but* demotes the second, leaving no main clause standing. The test hides the first connector at the start of a long sentence and hopes you never look back.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right', content: '*Although the data was noisy, the trend was clear.* Incomplete opener, comma at the seam.', variant: 'right' },
      { label: 'Wrong', content: '*Although the data was noisy, but the trend was clear.* Two connectors, no main clause left.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Rule 3 — A colon needs a complete launch' },
  {
    type: 'text',
    content: 'A **colon** is a spotlight: it introduces a list, a definition, or an explanation. What comes *before* the colon must pass the stand-alone test; what comes after does not have to. Two consequences do most of the work on test day. First, a colon right after *such as*, *including*, or *for example* is almost always wrong — those words leave the launch incomplete. Second, a colon has to earn its job: what follows must *unpack* what came before (explain it, name it, give its result), not merely add more on the same topic.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right', content: '*She had one goal: finish the map.* The launch stands alone; the payoff names the goal.', variant: 'right' },
      { label: 'Wrong', content: '*Her one goal was to: finish the map.* "Her one goal was to" cannot stand alone, so nothing may follow with a colon.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Rule 4 — A mid-sentence aside takes a matching pair' },
  {
    type: 'text',
    content: 'To drop extra information into the middle of a sentence, wrap it in a **pair** of commas, a **pair** of dashes, or a **pair** of parentheses — both ends the *same* mark. Punctuation brackets are a two-part enclosure: the opening mark is a promise, and the closing mark keeps it. Open with a dash, close with a dash.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right', content: '*The bridge — built in 1932 — still carries traffic.* Dash opens, dash closes.', variant: 'right' },
      { label: 'Wrong', content: '*The bridge — built in 1932, still carries traffic.* Opened with a dash, closed with a comma. It looks balanced; it is not.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Rule 5 — Extra info gets commas; essential info gets none' },
  {
    type: 'text',
    content: 'Whether a mid-sentence phrase gets commas is a claim about **meaning**, not decoration. Run the **remove-it test**: mentally delete the phrase and re-read what is left. If the sentence still points at the right thing, the phrase was *extra* — wrap it in commas. If deleting it changes who or what you are talking about, the phrase is *essential* — no commas. This delete-and-reread move also settles where an aside begins and ends: the sentence must read cleanly with the whole bracketed span gone.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Extra — commas', content: '*My sister, who lives in Denver, is visiting.* Remove the phrase and "my sister is visiting" still names the same person.', variant: 'right' },
      { label: 'Essential — no commas', content: '*The runner who finished first set a record.* Remove "who finished first" and you no longer know which runner.', variant: 'right' },
    ],
  },

  { type: 'heading', content: 'Rule 6 — Semicolons separate list items that contain commas' },
  {
    type: 'text',
    content: 'Inside a list, upgrade the separating commas to **semicolons** only when the items themselves already contain commas. The semicolons keep the internal pairs from blurring together. If no item has an internal comma, plain commas are correct.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right', content: '*The tour visits Lima, Peru; Quito, Ecuador; and Bogotá, Colombia.* Each city–country pair stays intact.', variant: 'right' },
      { label: 'Plain list — plain commas', content: '*The tour visits Lima, Quito, and Bogotá.* No internal commas, so no semicolons.', variant: 'right' },
    ],
  },

  { type: 'heading', content: 'Rule 7 — Every comma must name its job' },
  {
    type: 'text',
    content: 'Rules 1 through 6 tell you where marks belong. Rule 7 is the reverse filter, and it kills more wrong answers than any other: **a comma in an answer choice is guilty until proven employed.** A comma survives only by naming one of five jobs — separating items in a list of three or more, separating two adjectives that each independently describe the noun (test: swap them, or insert *and* — if it still reads naturally, the comma stays), closing a sentence-opening transition word, serving as half of a matching pair around extra info (Rule 4), or sitting before the joining word between two complete thoughts (Rule 1). No job, no comma.',
  },
  {
    type: 'text',
    content: 'And some positions are **forbidden zones** — a comma there kills the choice on sight: between a subject and its verb, *no matter how long the subject runs* (only a full two-comma aside may sit between them — a lone comma after a long subject either needs a partner or needs to disappear); touching a preposition on either side; between the final adjective and its noun; after the joining word that closes a list; and inside a compound pair, where two verbs share one subject — *She wrote the report and filed it* takes no comma, because the second half cannot stand alone (swap in a period to check: if you do not get two complete sentences, the comma was illegal).',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Employed commas', content: '*The kit includes a map, a compass, and rope.* List job. *After the storm, crews cleared the roads.* Opener job.', variant: 'right' },
      { label: 'Unemployed commas', content: '*The results of the four-year survey of coastal farms, were published in May.* A lone comma between subject and verb — the pause feels natural after a long subject, and it is always wrong.', variant: 'wrong' },
    ],
  },
  {
    type: 'checkpointQuestion',
    number: 6,
    question: '*The engineer who designed the bridge and later inspected it, kept detailed notes.* The comma feels natural. What job is it doing, and does it survive?',
    answer: 'It has no job — delete it. It is a lone comma between the subject (*the engineer who designed the bridge and later inspected it*) and its verb (*kept*). **Why:** a long subject invites a spoken pause, but a single comma may never separate subject from verb; only a complete two-comma aside can sit there.',
  },

  // ── Stage 3 · On the test ──────────────────────────────────────────────
  { type: 'heading', content: 'Stage 3 · On the test' },
  {
    type: 'text',
    content: 'The stem is always a version of *"Which choice completes the text so that it conforms to the conventions of Standard English?"* — it never tells you what is being tested. **The choices do.** Before solving, read the four choices as a set: if they differ by punctuation strength, you are on this chapter; if they differ by verb form or pronoun, you are on Form, Structure, and Sense. The choice set is the label.',
  },
  {
    type: 'steps',
    title: 'The decision flow',
    items: [
      'Run the counting routine on the whole sentence. State the count: "complete + complete," "complete + fragment," or "one decorated sentence."',
      'Complete + complete → the strong-join menu: period, semicolon, or comma + FANBOYS (Rule 1). If what follows unpacks what came before, a colon or dash is also legal (Rule 3).',
      'Incomplete opener + complete → comma at the seam (Rule 2). Complete + trailing dependent clause → usually no comma.',
      'One sentence with a mid-sentence phrase → is the phrase extra or essential? Extra takes a matching pair of commas or dashes (Rules 4 and 5); essential takes nothing.',
      'Re-read the whole sentence with the surviving mark installed. It must close every boundary it opens.',
    ],
  },
  {
    type: 'keyInsight',
    content: '**Twin choices cancel each other.** A multiple-choice item can have only one right answer, so two choices that are grammatically identical must both be wrong. A period, a semicolon, and a comma + *and* are the same join in three costumes — if two of them appear, strike both and look harder at what is left. If the survivor is a bare comma, the seam is probably sentence + fragment, not sentence + sentence: recount.',
  },
  {
    type: 'text',
    content: 'One more habit separates the top scorers: **widen the window.** The evidence that decides the mark almost never sits in the few words around the gap. The subordinator hiding at the start of the sentence, the dash that opened an aside, the verb waiting on the far side — all of it lives outside the blank’s neighborhood. If you decided without moving your eyes, assume you fell for the local read.',
  },
  {
    type: 'trapCard',
    title: 'The comfortable pause',
    wrong: '**The comfortable pause.** Both sides are complete, and the bare-comma choice *reads* smoothly because you would pause there out loud. You pick it because it sounds natural.',
    correction: 'Sounding right is not the test — punctuation is structural notation, not a musical score. On hard items the smooth-sounding choice and the correct choice are engineered to disagree. Two complete thoughts can never take a comma alone (Rule 1). Demand a named job for every mark; a mark that cannot name the boundary it closes is wrong no matter how natural it sounds.',
  },
  {
    type: 'trapCard',
    title: 'The half-open aside',
    wrong: '**The half-open aside.** A mid-sentence aside opens with a dash but closes with a comma. The sentence looks balanced at a glance, so you accept it.',
    correction: 'Find the opening mark and make the closing mark match it exactly (Rule 4). Run the remove-it test to find the true span of the aside — the sentence must read cleanly with the whole span deleted — then check that both ends of that span wear the same mark.',
  },
  {
    type: 'trapCard',
    title: 'The local read',
    wrong: '**The local read.** You judge the gap from the four or five words around it, because reading the whole sentence feels slow. The nearby words endorse a choice, and you take it.',
    correction: 'These items are engineered so the local read endorses the wrong option — the decisive connector or clause boundary sits far from the blank. Always read from the sentence’s true start to its final period before counting. Slower on purpose, faster in practice: one full read beats three re-reads after doubt sets in.',
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The observatory kept a single standing rule for every visiting astronomer ______ log each exposure before opening the dome.\n\n(A) astronomer: log\n(B) astronomer; log\n(C) astronomer, log\n(D) astronomer log',
    steps: [
      { label: 'Count the clauses', content: 'Left side: *The observatory kept a single standing rule for every visiting astronomer* — subject (*observatory*), verb (*kept*), stands alone. Right side: *log each exposure before opening the dome* — a command-style fragment naming the rule, not a complete thought about the observatory.' },
      { label: 'Match the count to the menu', content: 'Complete launch + a payoff that names the rule → the spotlight mark. A semicolon (B) demands complete thoughts on both sides. A comma (C) has no license here, and (D) fuses the seam with nothing.' },
      { label: 'Answer', content: '**(A)** — the colon: complete sentence in front, the rule it promised after (Rule 3).' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Although the recipe called for saffron, a spice far too costly for most medieval households ______ cooks often substituted marigold petals to get a similar golden color.\n\n(A) households, cooks\n(B) households cooks\n(C) households; cooks\n(D) households: cooks',
    steps: [
      { label: 'Classify the left side', content: '*Although the recipe called for saffron, a spice far too costly for most medieval households* — the whole thing opens with *Although*, so it is an incomplete opener, with an extra description of saffron riding inside it.' },
      { label: 'Classify the right side', content: '*cooks often substituted marigold petals…* — subject (*cooks*), verb (*substituted*), complete.' },
      { label: 'Follow the flow', content: 'Incomplete opener + complete sentence → comma at the seam (Rule 2). The semicolon (C) needs two complete sides (Rule 1); the colon (D) needs a complete launch (Rule 3); (B) fuses the seam.' },
      { label: 'Answer', content: '**(A) households, cooks.** Note the trap: the left side is long enough that it *feels* like a full sentence — the stand-alone test, not length, is what decides.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'The engineers had rehearsed the docking sequence for months ______ the maneuver, when it finally came, took less than four minutes.\n\n(A) months, so\n(B) months;\n(C) months, and\n(D) months, the',
    steps: [
      { label: 'Read the choice set first', content: 'Three choices join with real connectors or a full stop; one (D) offers a bare comma. The set says this is a two-thoughts seam question.' },
      { label: 'Count', content: 'Left: *The engineers had rehearsed the docking sequence for months* — complete. Right: *the maneuver, when it finally came, took less than four minutes* — complete, with an extra aside (*when it finally came*) legally wrapped in a comma pair.' },
      { label: 'Apply twin cancellation', content: 'Complete + complete: (A) comma + *so*, (B) semicolon, and (C) comma + *and* are ALL legal joins from Rule 1 — three costumes of the same mark. A question can only have one right answer, so the three twins cannot all be it… and indeed only one of them appears in a real item. Here the set is built to distract you from (D): the bare comma is the only *structurally distinct* choice, and it is a comma splice.' },
      { label: 'Answer', content: 'This item as written is a trap-spotting drill: (D) is the one guaranteed-wrong shape. On the real test the set would contain one legal join and three illegal shapes — your job is to strike splices, fused seams, and half-launches until one survivor remains, then verify it by re-reading.' },
    ],
  },
  {
    type: 'checkpointQuestion',
    number: 2,
    question: 'Both sides of a gap are complete sentences. Which of these are valid: a period, a semicolon, a comma alone, a comma with *and*?',
    answer: 'Period, semicolon, and comma-with-*and* are all valid (Rule 1). The **comma alone is a splice** — the one join that count can never license between two complete thoughts.',
  },
  {
    type: 'checkpointQuestion',
    number: 3,
    question: '*The museum has one rule ______ no flash photography.* The left side stands alone; a specification follows. Which mark, and why not a semicolon?',
    answer: 'A **colon** (Rule 3) — complete launch in front, the promised rule after. A semicolon fails because *no flash photography* is a fragment, and a semicolon demands complete thoughts on both sides.',
  },
  {
    type: 'checkpointQuestion',
    number: 4,
    question: '*My uncle ______ a retired firefighter ______ volunteers at the museum.* How do you set off the aside, and what test finds its edges?',
    answer: 'A **matching pair** — two commas or two dashes, never one of each (Rule 4). The remove-it test finds the edges: *My uncle volunteers at the museum* must read cleanly with the whole aside deleted (Rule 5).',
  },
  {
    type: 'checkpointQuestion',
    number: 5,
    question: 'Scanning a choice set, you spot both *"trail; the"* and *"trail. The"* among the four options. Before doing any grammar at all, what do you know?',
    answer: '**Both are wrong.** A semicolon and a period are the same join in two costumes, and only one choice can be correct — twins cancel (the equivalence check). The answer is one of the other two choices; recount the clauses to pick between them.',
  },
  { type: 'heading', content: 'One-page summary' },
  {
    type: 'table',
    title: 'The whole chapter in one place',
    headers: ['Rule', 'Situation', 'Correct mark'],
    rows: [
      ['R1', 'Complete + complete', 'Period, semicolon, or comma + FANBOYS — never a comma alone'],
      ['R2', 'Incomplete opener + complete', 'Comma at the seam (trailing dependent clause: usually no comma)'],
      ['R3', 'Complete launch + list or explanation', 'Colon (the launch must stand alone; the payoff must unpack it)'],
      ['R4', 'Mid-sentence aside', 'Matching pair — comma…comma or dash…dash, never mixed'],
      ['R5', 'Removable extra info', 'Commas around it; essential info takes none (remove-it test)'],
      ['R6', 'List items containing commas', 'Semicolons between items'],
      ['R7', 'Any other comma in a choice', 'Guilty until employed — no nameable job means delete it (never between subject and verb, never touching a preposition, never in a shared-subject pair)'],
    ],
  },
  {
    type: 'text',
    content: 'That is the entire skill: classify each side with the stand-alone test, count the complete thoughts, look up the legal marks, cancel the twins, and verify the survivor by re-reading the whole sentence. No ear required.',
  },
];
