/**
 * Learn chapter body — Text Structure & Purpose (Craft & Structure).
 *
 * Teach-from-zero textbook chapter following the locked template
 * (docs/LEARN_TEXTBOOK_OVERHAUL_PLAN.md): roadmap → Stage 1 foundations →
 * Stage 2 numbered method (step → right → wrong → why) → Stage 3 on-the-test
 * (decision flow, traps, worked examples, checkpoints, one-page summary).
 * Voice reference: rwBodies/boundaries.js.
 * Concept source: knowledge/graph/rw (point-vs-purpose-abstraction,
 * rhetorical-role-identification, tone-attitude-reading, emphasis-signal-map,
 * context-window-discipline, connector-logic-families,
 * stem-family-recognition, distractor-species-taxonomy).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * rwBodies/index.js — never import this from the chapter index.
 */

export const textStructureAndPurposeBlocks = [
  {
    type: 'text',
    content: 'Three stems live in this chapter: *"Which choice best states the main purpose of the text?"*, *"Which choice best describes the overall structure of the text?"*, and *"Which choice best describes the function of the underlined sentence?"* All three ask the same underlying question — **why did the author write this, not what does it say?** That distinction feels slippery the first time, but it is completely learnable: a text\'s *doing* is computed from a short list of signals, the answer choices are built from a small vocabulary of verbs, and every wrong answer fails one of two checks you can run on purpose.',
  },
  {
    type: 'steps',
    title: 'How this chapter is built',
    items: [
      '**Stage 1 · Foundations.** The difference between a text\'s *point* and its *purpose*, the verb vocabulary the answer choices are written in, and the author\'s attitude as a separate, readable layer.',
      '**Stage 2 · The method.** Five numbered steps, each in the same shape: the step, a right move, a wrong move, and the why.',
      '**Stage 3 · On the test.** A decision flow that routes each stem to its steps, the traps the test sets, worked examples, and a one-page summary.',
    ],
  },

  // ── Stage 1 · Foundations ──────────────────────────────────────────────
  { type: 'heading', content: 'Stage 1 · What a text says vs. what it does' },
  {
    type: 'text',
    content: 'Every passage has two layers. The **point** is the claim it makes — a statement you could agree or disagree with, like *"urban gardens cool their neighborhoods less than early studies suggested."* The **purpose** is what the passage is *doing* with that claim — an action, and actions are named by verbs: *introduce* an idea, *explain* a process, *criticize* a method, *compare* two accounts. That is why purpose answers are written as *"to [verb] [something]"* — they describe an act, not a claim. Students who hunt for their main-point sentence among the choices come up empty, because the choices live one layer up.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'The point — a claim you could dispute', content: '*Urban gardens cool their neighborhoods less than early studies suggested.* This is what the passage argues. You could argue back.', variant: 'right' },
      { label: 'The purpose — an act, led by a verb', content: '*To challenge an earlier finding about a city-planning tool.* This is what the passage is doing. Notice the move: the specific nouns (*urban gardens, cooling*) became general categories (*a city-planning tool*), and the passage\'s move became a verb (*challenge*).', variant: 'right' },
    ],
  },
  {
    type: 'text',
    content: 'Because purpose answers are built from verbs, the verbs themselves are vocabulary — and the set is small enough to learn outright. Each verb names a different job a text (or a single sentence) can perform. A student who reads *qualify* as "be eligible" or *concede* as a blank cannot match anything to the choices, no matter how well they read the passage. Learn the lexicon first; it unblocks everything else.',
  },
  {
    type: 'table',
    title: 'The rhetorical verb lexicon',
    headers: ['Verb', 'The job it names', 'What the passage must actually contain'],
    rows: [
      ['introduce', 'bring up an idea for the first time', 'the idea appears and the text goes on to develop it'],
      ['illustrate', 'give a concrete example of a general claim', 'a general claim nearby that the example serves'],
      ['define', 'say what a term means', 'a term plus its meaning, often after a colon or dash'],
      ['explain', 'lay out how or why something works or happened', 'a mechanism, cause, or account — not just a description'],
      ['qualify', 'limit a claim — true, but only under conditions', 'hedging language: *in some cases, only when, to a degree*'],
      ['concede', 'admit a point that cuts against the author\'s side', 'an opposing point granted before or after a pivot'],
      ['emphasize', 'mark an idea as especially significant', 'repetition, intensifiers, or importance words near the idea'],
      ['criticize / challenge', 'push against a view, method, or finding', 'an actual target on the page, and words that push against it'],
      ['compare / contrast', 'set two things side by side', 'two things genuinely on the page — not one thing plus a mention'],
      ['speculate', 'offer a possibility without asserting it', 'may, might, perhaps, could — possibility language'],
    ],
  },
  { type: 'heading', content: 'The attitude layer: two dials, not one' },
  {
    type: 'text',
    content: 'Purpose verbs carry attitude, so the author\'s attitude is something you compute, not something you feel. Picture two separate dials. The **topic dial** is what the passage discusses — which can be grim, delightful, or dry. The **stance dial** is how the author regards it — *admiring, skeptical, neutral-descriptive, cautiously optimistic, critical but conceding a point*. The dials move independently: an author can write neutrally about a catastrophe or skeptically about something charming. Only the stance dial answers test questions, and it is read from **evaluative words** — the words that would change if the author\'s opinion changed (*striking, dubious, elegant, so-called*) — never from topic words.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Grim topic, neutral stance', content: '*The 1815 eruption of Mount Tambora killed tens of thousands and disrupted harvests worldwide.* Terrible subject — but every word is factual reporting. Delete the facts and no opinion residue remains. Stance: neutral.', variant: 'right' },
      { label: 'Same topic, skeptical stance', content: '*Popular accounts blame the 1815 eruption for nearly every hardship of the following decade — a tidy story that the harvest records only partly support.* The facts are similar, but *blame, tidy story, only partly support* are opinion carriers. Stance: skeptical of the popular account.', variant: 'right' },
    ],
  },
  {
    type: 'keyInsight',
    content: '**The verb of an answer choice matters as much as its content.** A choice can name exactly the right topic and still be wrong because its verb misdescribes the act — *"criticizes early researchers"* when the passage merely *describes* their view, *"proves"* when the passage only *suggests*. Verbs have direction (for, against, neutral) and strength (*notes* < *suggests* < *argues* < *proves*), and the right verb is the one the passage\'s actual wording earns. Measured, evidence-weighing prose rarely earns the extreme end of the ladder.',
  },
  {
    type: 'checkpointQuestion',
    number: 1,
    question: 'Is this a point or a purpose? *"Bats\' wing membranes heal faster than scientists once believed."* And what would the other layer look like?',
    answer: 'A **point** — it is a claim you could dispute. The purpose version lives one layer up and starts with a verb: *to explain a revised understanding of an animal\'s anatomy* or *to describe a surprising research finding*. **Why:** point = the claim made; purpose = the act performed with it. Purpose answers generalize the nouns and lead with a verb, so the two layers never look alike on the page.',
  },

  // ── Stage 2 · The method ───────────────────────────────────────────────
  { type: 'heading', content: 'Stage 2 · The method' },
  {
    type: 'text',
    content: 'Five steps cover every question in this family. Steps 1 sorts the stem; Steps 2 and 3 handle whole-text stems; Step 4 handles part-function stems; Step 5 is the finishing move for all of them. Each step follows the same shape: the **step**, a **right** move, a **wrong** move, and the **why**.',
  },

  { type: 'heading', content: 'Step 1 — Sort the stem: whole text, or one piece?' },
  {
    type: 'text',
    content: 'These items come in two grains. **Whole-text stems** — *main purpose*, *overall structure* — ask about the entire passage\'s act or arc. **Part-function stems** — *function of the underlined sentence* (or phrase) — ask about one piece\'s job inside the passage. Sorting the grain first matters because the two grains run different procedures, and because the test\'s favorite wrong answer is a **true statement at the wrong grain**: a choice that accurately describes one sentence\'s job, offered on a whole-text stem — or the reverse.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — answer at the stem\'s grain', content: 'Stem: *main purpose of the text.* The passage describes a belief, new evidence, and a revision. A whole-text answer covers all three beats: *to explain how new evidence changed a long-standing view.*', variant: 'right' },
      { label: 'Wrong — true, but at the wrong grain', content: 'Same stem, and the choice reads: *to describe the sensor experiment in detail.* The experiment is really in the passage — but it is one beat\'s job, not the whole passage\'s act. Accurate about the wrong grain is still wrong.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Step 2 — Whole-text purpose: find the point, then verb it' },
  {
    type: 'text',
    content: 'Purpose cannot be computed before point. So: first state the passage\'s point in your own words, as one disputable sentence. Then climb **one abstraction level**: swap the specific nouns for their categories (*a beekeeping study* becomes *recent research*; *a poet\'s dashes* becomes *a stylistic choice*) and name the passage\'s dominant move with a verb from the lexicon. The credited answer will be recognizably your point wearing general clothes and led by an infinitive verb. The first sentence usually telegraphs the purpose in short passages — check it, then confirm with a quick skim rather than a reread.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — one level up', content: 'Point: *a fungus, not frost, killed the town\'s elm trees.* Purpose, one click up: *to correct a mistaken explanation for an environmental change.* Nouns generalized, move named.', variant: 'right' },
      { label: 'Wrong — restated point, or two levels up', content: '*To argue that a fungus killed the elm trees* merely restates the point with "to argue" stapled on — no abstraction. *To discuss trees* floats two levels up, so general it fits a thousand passages. The right altitude is one click, not zero and not three.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Step 3 — Whole-text structure: sketch the beats' },
  {
    type: 'text',
    content: 'A **structure** answer describes the passage\'s moves *in order*, like stage directions: *a belief is stated, evidence against it is presented, a revised conclusion is drawn.* So sketch the passage in beats — one short label per move, first to last. Two signals do most of the work. **Turn words** (*but, however, though, yet, instead*) mark where the argument changes direction; a reversal beat nearly always sits right after one. And **emphasis machinery** — a colon promising a payoff, a dash pair cradling a definition, the first and last sentences — marks the load-bearing beats. The right answer matches your beat list in content *and* in order; a choice that gets the beats right but the sequence wrong is wrong.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — beats, in order', content: 'Passage: a chef\'s technique is described, food scientists test it, the tests confirm it works but not for the reason the chef gave. Beat sketch: *practice described → tested → confirmed with a corrected mechanism.* Matching answer: *describes a technique, then presents research that validates it while revising the explanation for it.*', variant: 'right' },
      { label: 'Wrong — a beat the passage never performs', content: '*The text contrasts two chefs\' competing techniques.* Only one chef appears. A structure answer must be checkable move by move against the page: no second chef, no contrast beat, no match — however plausible it sounds.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Step 4 — Part-function: name the sentence\'s job' },
  {
    type: 'text',
    content: 'A function question asks what one sentence was *hired to do* for the argument around it — not what it says. Content is the employee\'s words; function is the job title. To find the job, **widen the window**: read the sentence before the target and the sentence after it. The underline tells you where to stand, not where the evidence is — and the claim a sentence serves usually sits *before* it, because support points upward at the claim it props up. Then name the job in your own words as **verb + served claim**: *gives an example that supports the opening claim*, *concedes a weakness before the pivot*, *defines the term the argument depends on*. If the choices ever feel unrelated to the underlined lines, that is the tell that you answered *what* when the stem asked *why*.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — a job title', content: 'Target sentence: *A single bee colony can visit several million flowers in one summer.* Sentence before it claims pollinators do outsized agricultural work. Job: *provides a striking figure that supports the previous sentence\'s claim.* Verb + the claim it serves.', variant: 'right' },
      { label: 'Wrong — an accurate summary', content: '*The sentence states that bee colonies visit millions of flowers.* Perfectly true — and not a function. It repeats the content and names no job. On function items, the accurate-summary choice is the engineered trap for readers who answered *what*.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Step 5 — Predict first, then eliminate verb-first' },
  {
    type: 'text',
    content: 'Before reading any choice, say the answer in your own words — the purpose as *to [verb] [object]*, the structure as your beat list, the function as *verb + served claim*. Now each choice is compared against **your standard**, not against the other choices. Then eliminate in two passes. **Pass one, verbs only:** cut every choice whose verb has the wrong direction (*criticizes* on a neutral passage) or the wrong strength (*proves* on a hedged one). This is fast because you are reading one word per choice. **Pass two, content:** for the survivors, verify the object word by word against the passage — *challenge a widely held view* fails if the passage challenges a brand-new proposal, because one wrong noun kills an otherwise perfect choice.',
  },
  {
    type: 'strategyCard',
    title: 'The two kill switches',
    content: 'Every choice in this family has exactly two parts you can check: the **verb** (does the passage perform this act, at this strength?) and the **object** (is this what the act is done *to*?). A choice survives only if both pass. Working verb-first is the efficient order — wrong verbs are visible in a single word, while wrong objects take a passage check. Most items lose two or three choices in the verb pass alone.',
  },

  // ── Stage 3 · On the test ──────────────────────────────────────────────
  { type: 'heading', content: 'Stage 3 · On the test' },
  {
    type: 'text',
    content: 'Unlike grammar items, these stems label themselves: *main purpose*, *overall structure*, and *function of the underlined sentence* announce exactly which procedure to run. Read the stem before the passage, so the first read is already collecting the right things — the point and its altitude for purpose, the beat list for structure, the neighboring sentences for function. The choices, meanwhile, are written in abstract language (*"presents a hypothesis and then tests it"*), so the final act on every item is translation: turn each surviving choice back into the concrete passage and check that the passage actually does that.',
  },
  {
    type: 'steps',
    title: 'The decision flow',
    items: [
      'Read the stem and sort the grain: whole-text (purpose, structure) or part-function (underlined sentence or phrase). (Step 1)',
      'Purpose stem → state the point, then climb one level: generalize the nouns, verb the move. (Step 2)',
      'Structure stem → sketch the beats in order, watching turn words and emphasis marks. (Step 3)',
      'Function stem → read one sentence up and one down, then name the job as verb + served claim — support usually points upward. (Step 4)',
      'Predict in your own words, then eliminate: verbs first (direction, then strength), content second (verify the object word by word). (Step 5)',
      'Translate the survivor back into the passage and confirm each thing it claims actually happens on the page.',
    ],
  },
  {
    type: 'keyInsight',
    content: '**"True" is not the bar — "true at the right grain, in the right order, with an earned verb" is.** The hardest wrong answers in this family contain nothing false: they describe a real detail (wrong grain), a real move (wrong position in the arc), or the right target (wrong verb strength). That is why prediction comes before the choices — a reader comparing choices against each other picks the one that *sounds* most complete, and the most complete-sounding choice is where the trap lives.',
  },
  {
    type: 'trapCard',
    title: 'The right topic, wrong verb',
    wrong: '**The right topic, wrong verb.** The choice names exactly what the passage is about, so it feels loyal — but its verb misdescribes the act: *criticizes* a study the passage merely summarizes, *proves* a link the passage only suggests, *celebrates* a finding the author reports neutrally.',
    correction: 'Run the verb pass before the content pass (Step 5). Ask two questions of the verb alone: right direction (for, against, or neutral)? right strength for the passage\'s hedging level? A passage full of *may* and *appears* earns *suggest*-class verbs, not *prove*-class verbs. The topic being right is exactly what makes this trap work — so check the verb first, while you are still immune to the topic\'s pull.',
  },
  {
    type: 'trapCard',
    title: 'The one-detail costume',
    wrong: '**The one-detail costume.** On a purpose or structure stem, you pick a choice that accurately describes the passage\'s most vivid sentence — the striking statistic, the memorable example — because it is the part you remember best. Salience masquerades as centrality.',
    correction: 'Run the coverage test: does this choice account for *every* beat of the passage, or just the vivid one? A whole-text answer has to fit the whole text — an example is a supporting move inside the arc, never the arc itself (Steps 2 and 3). If a choice describes something one sentence does, it is a function answer wearing a purpose costume.',
  },
  {
    type: 'trapCard',
    title: 'The accurate summary',
    wrong: '**The accurate summary.** On a function stem, you pick the choice that correctly restates what the underlined sentence *says*. Every prior reading test rewarded restatement, so the summary choice feels like the safe one — and it is built precisely for readers running that old habit.',
    correction: 'Function is a second layer computed over content: the stem asks what the sentence was hired to *do*, not what it says (Step 4). Name the job as verb + served claim *before* reading choices, and demand a function verb in the answer — a choice with no job in it cannot answer a job question, no matter how accurate its summary is.',
  },
  {
    type: 'trapCard',
    title: 'The invented move',
    wrong: '**The invented move.** The choice describes an act the passage never performs — *weighs two competing theories* when only one theory appears, *proposes a solution* when the passage only diagnoses a problem, *predicts* when nothing about the future is said. It sounds like something a passage on this topic would plausibly do.',
    correction: 'Every move named in a choice must be checkable against the page: a *compare* needs two things actually present, a *concede* needs a granted opposing point, a *propose* needs a recommendation in the text. Plausible-in-the-world is not the test — performed-on-the-page is. Point to the sentences that perform the move, or cut the choice.',
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The narwhal\'s spiral tusk was long dismissed as ornament — a showpiece for courtship displays. In 2014, however, researchers recorded nerve responses in the tusks of captive narwhals as water salinity changed. The tusk, it turns out, is a sense organ: a three-meter instrument for reading the ocean.\n\nWhich choice best states the main purpose of the text?\n\n(A) To describe the procedure researchers use to monitor captive narwhals\n(B) To explain how new evidence revised the understanding of an animal feature\n(C) To criticize scientists who dismissed the tusk as mere ornament\n(D) To compare the narwhal\'s tusk with the sense organs of other whales',
    steps: [
      { label: 'Get the point', content: 'One disputable sentence: *the tusk is a sense organ, not just an ornament.* The arc: old view, new evidence (the *however* marks the turn), revised conclusion.' },
      { label: 'Verb it, one level up', content: 'The passage\'s move is updating a belief with evidence — an *explain / revise* class act. Prediction: *to explain how a finding changed what we thought a body part does.*' },
      { label: 'Verb pass', content: '(C) *criticize* — the old view is called dismissive, but no one is attacked; wrong direction. (D) *compare* — no second whale ever appears; invented move. (A) *describe the procedure* — a verb the passage only earns for one sentence; wrong grain.' },
      { label: 'Answer', content: '**(B).** It covers all three beats at the right altitude: *new evidence* (the 2014 recordings), *revised understanding* (ornament to sense organ), *an animal feature* (the tusk, generalized). Verb and object both survive.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'City planners often treat street trees as decoration — pleasant, but optional when budgets tighten. A mature oak, though, intercepts thousands of gallons of stormwater a year and casts shade that measurably cools the pavement below. **One study of a mid-sized city put the yearly value of these services in the millions of dollars.** Figures like that are quietly moving trees from the parks budget to the infrastructure budget.\n\nWhich choice best describes the function of the underlined sentence?\n\n(A) It concedes that the value of street trees is difficult to measure precisely.\n(B) It describes the method the study\'s authors used to calculate their estimate.\n(C) It quantifies the benefits named in the previous sentence, supporting the idea that trees do infrastructure work.\n(D) It introduces the text\'s new topic: the politics of municipal budgeting.',
    steps: [
      { label: 'Widen the window', content: 'Sentence before: the oak\'s concrete benefits (stormwater, shade) — pushing back on "decoration." Sentence after: those figures are changing how cities budget. The target sits between a claim and its consequence.' },
      { label: 'Name the job before the choices', content: 'The sentence attaches a dollar figure to the benefits just listed. Job, as verb + served claim: *quantifies the previous sentence\'s benefits to back the claim that trees are more than decoration.* Support points upward — the served claim came first.' },
      { label: 'Eliminate verb-first, then verify content', content: '(A) *concedes* — nothing is granted to the other side; wrong verb. (D) *introduces a new topic* — the budget line grows out of the argument; nothing new starts here. (B) *describes the method* — no method appears anywhere; the choice is built from content the passage never gives.' },
      { label: 'Answer', content: '**(C).** It is the only choice written as a job — a function verb (*quantifies… supporting*) plus the claim it serves — and both the verb and the object check out against the window.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Handwriting instruction has been fading from elementary classrooms, and the case for retiring it seems strong: adults type nearly everything, and classroom hours are scarce. Some cognitive scientists, though, have complicated the picture. In several experiments, children who learned letters by writing them recognized those letters faster — and read sooner — than children who learned the same letters by typing. Forming a letter by hand, these researchers argue, builds a motor memory that pressing a key does not. The case against handwriting may rest on a mistaken premise: that producing text was ever its only point.\n\nWhich choice best describes the overall structure of the text?\n\n(A) The text argues that schools abandoned handwriting too hastily and proposes restoring it to the curriculum.\n(B) The text presents a practice\'s decline and the reasoning behind it, then introduces research that undermines that reasoning.\n(C) The text describes several experiments on how children learn letters and evaluates the reliability of their methods.\n(D) The text explains why handwriting instruction declined and predicts that typing instruction will eventually follow it.',
    steps: [
      { label: 'Sketch the beats', content: 'Beat 1: a practice is fading, and the case for retiring it is laid out — sympathetically. Beat 2: *though* — the turn word — introduces scientists who complicate that case. Beat 3: their experiments and interpretation. Beat 4: the closing sentence reframes the original case as resting on a mistaken premise.' },
      { label: 'Note what makes this hard', content: 'The passage opens by presenting the side it will push against, and presents it fairly — a reader who anchors on the first two sentences mislabels the whole arc. The colon in the last sentence flags the load-bearing idea: the premise under attack.' },
      { label: 'Screen the choices against the beats', content: '(C) is the one-detail costume: true of the middle beats only, and *evaluates the reliability of their methods* never happens — a second invented move inside the wrong grain. (D) invents a prediction; nothing about typing\'s future is on the page. (A) fails the verb pass twice: the passage *complicates* the case (note *may rest*), it never *argues* the schools were hasty, and no *proposal* appears anywhere.' },
      { label: 'Answer', content: '**(B).** Decline plus its reasoning (beat 1), then research that undermines the reasoning (beats 2–4) — every move named in the choice is performed on the page, in that order, and *undermines* matches the hedged strength of *may rest on a mistaken premise*.' },
    ],
  },
  {
    type: 'checkpointQuestion',
    number: 2,
    question: 'On a main-purpose item, a choice says the passage *"mocks early researchers."* The passage notes their conclusion was reasonable given the tools of the era, then presents the newer finding. Keep or cut?',
    answer: 'Cut — on the verb pass, before reading anything else in the choice. **Why:** *mocks* has the wrong direction and the wrong strength. Calling the old conclusion *reasonable given the tools of the era* is respectful framing; the passage corrects, it does not ridicule. A verb the passage\'s wording does not earn kills the choice even if its topic is perfect.',
  },
  {
    type: 'checkpointQuestion',
    number: 3,
    question: 'On a function item, a choice accurately restates everything the underlined sentence says. Why is that not enough to pick it?',
    answer: 'Because the stem asked what the sentence *does*, not what it says — and a summary names no job. **Why:** function is a second layer over content: the same sentence could be an example, a concession, or a definition depending on its neighbors. The accurate-summary choice is an engineered distractor for readers who answer *what* when the test asks *why*; the credited answer will contain a function verb plus the claim being served.',
  },
  {
    type: 'checkpointQuestion',
    number: 4,
    question: 'A structure choice reads: *"The text presents a vivid case study of one coral reef\'s recovery."* The passage does contain that case study — in its middle third. Keep or cut, and what is the test you ran?',
    answer: 'Cut, by the coverage test. **Why:** a structure answer must account for the passage first sentence to last, and this choice covers one beat. The case study is a supporting move inside the arc — a true statement at the wrong grain. Ask of every whole-text choice: does this fit *everything*, or just the part I remember best?',
  },
  {
    type: 'checkpointQuestion',
    number: 5,
    question: 'An underlined sentence gives a specific statistic. Where do you look first for the claim it serves, and why there?',
    answer: 'One sentence *up* — then one down if that fails. **Why:** support points upward: details are hired to prop up claims, and the claim usually precedes its evidence, often at the paragraph\'s start. The underline is a location, not a boundary — the evidence that decides a function question routinely sits just outside the underlined lines, and choices are sometimes built from the material *after* the target to punish forward-only reading.',
  },
  { type: 'heading', content: 'One-page summary' },
  {
    type: 'table',
    title: 'The whole chapter in one place',
    headers: ['Stem family', 'What to compute', 'What kills a choice'],
    rows: [
      ['Main purpose ("main purpose of the text")', 'The point as one disputable sentence, then one level up: *to [verb] [generalized object]*', 'A verb with the wrong direction or unearned strength; an object the passage never targets; coverage of one detail instead of the whole text'],
      ['Overall structure ("overall structure of the text")', 'The beat list — one label per move, in order, using turn words and emphasis marks as markers', 'A move the passage never performs; beats out of order; a description that fits only part of the arc'],
      ['Function ("function of the underlined sentence/phrase")', 'The job as verb + served claim, computed from one sentence up and one down — support points upward', 'An accurate summary with no job in it; a job serving the wrong claim; content the window never contains'],
    ],
  },
  {
    type: 'text',
    content: 'That is the entire skill: sort the stem\'s grain, compute the point-then-verb (or the beat list, or the local job) before touching the choices, then run the two kill switches — verb first, object second — and translate the survivor back into the passage. The choices are abstract; the passage is concrete; the right answer is the only one that survives the trip between them.',
  },
];
