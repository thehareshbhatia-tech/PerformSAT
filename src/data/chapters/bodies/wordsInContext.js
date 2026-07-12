/**
 * Learn chapter body — Words in Context (Craft and Structure).
 *
 * Teach-from-zero textbook chapter following the locked template
 * (docs/LEARN_TEXTBOOK_OVERHAUL_PLAN.md): roadmap → Stage 1 foundations →
 * Stage 2 numbered method (step → right → wrong → why) → Stage 3 on-the-test
 * (decision flow, traps, worked examples, checkpoints, one-page summary).
 * Voice reference: rwBodies/boundaries.js (approved exemplar).
 * Concept source: knowledge/graph/rw (evidence-forced-word-meaning,
 * charge-composition-under-modifiers, second-sense-vocabulary,
 * polarity-first-elimination, context-window-discipline,
 * connector-logic-families, predict-then-verify).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * rwBodies/index.js — never import this from the chapter index.
 */

export const wordsInContextBlocks = [
  {
    type: 'text',
    content: 'Words in Context questions come in two shapes. In the first, a blank sits inside a short passage and the stem asks for the *most logical and precise word or phrase* to fill it. In the second, a word is already printed and the stem asks what it *most nearly means* as used in the text. Both look like vocabulary tests. Neither is. **The passage forces the meaning**: every item plants evidence that pins down exactly what the blank or the printed word has to mean. These are evidence questions in disguise — and a reader who follows the evidence beats a reader with a bigger word list.',
  },
  {
    type: 'steps',
    title: 'How this chapter is built',
    items: [
      '**Stage 1 · Foundations.** The governing rule — a word means what the evidence forces it to mean — plus the three cheapest clues: charge, second senses, and connectors.',
      '**Stage 2 · The method.** Five numbered steps that turn every Words in Context item into the same short routine, each with a right and a wrong example.',
      '**Stage 3 · On the test.** A decision flow, the traps built for this question family, three worked examples, and a one-page summary.',
    ],
  },

  // ── Stage 1 · Foundations ──────────────────────────────────────────────
  { type: 'heading', content: 'Stage 1 · A word means what the evidence forces it to mean' },
  {
    type: 'text',
    content: 'Outside a test, a word can mean several things at once. *Conservative* can describe a politician, an estimate, or a suit. Inside a Words in Context item, that freedom disappears: the passage supplies **evidence** — specific nearby words — that locks the target into exactly one meaning. Treat the blank (or the printed word) as an unknown in an equation. The passage is the equation, the evidence supplies the given values, and your job is to solve for the unknown — not to recall a definition.',
  },
  {
    type: 'text',
    content: 'This design has a comforting consequence: no item turns on outside knowledge of the topic, and no item is decided purely by knowing a rare word. The **evidence phrase** — the handful of words that constrain the target — is printed on the page every time. Finding it is the skill this chapter teaches.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Evidence-forced reading', content: '*The engineer’s estimate proved conservative: the town ended up needing nearly triple the budgeted amount.* The colon and the tripled figure force *conservative* to mean **cautiously low** — nothing about politics survives the sentence.', variant: 'right' },
      { label: 'Dictionary-first reading', content: 'Taking *conservative* as "traditional in politics" because that is the meaning you met first. The familiar sense is a starting guess at best; here it produces nonsense, and on test items it is usually planted as bait.', variant: 'wrong' },
    ],
  },
  {
    type: 'checkpointQuestion',
    number: 1,
    question: '*The witness’s account of the crash was flatly contradicted by the traffic camera.* Does *account* here mean a bank record, a story told, or a login? What decides?',
    answer: 'A story told — a report. **Why:** the word alone allows all three meanings; the evidence (*witness*, *contradicted by the traffic camera*) forces the report sense, because only a report can be contradicted by footage. The surroundings decide, never the word by itself.',
  },

  { type: 'heading', content: 'Charge: the cheapest reliable clue' },
  {
    type: 'text',
    content: 'Every candidate word carries a **charge**: positive (praise, growth, success), negative (damage, doubt, loss), or neutral (description with no verdict). Charge is the cheapest feature you can compute — tagging a word plus, minus, or zero takes a second, long before you could define it — and the passage almost always tips the required charge through its own praise or damage words. Wrong answers are routinely planted on the wrong side of the charge line, so a charge check converts many four-way decisions into two-way decisions at almost no cost. A second cheap screen is **degree**: measured academic prose rarely earns extremes, so a choice that overshoots the evidence’s intensity — *demolishes* where the passage merely questions — dies before any fine meaning work begins.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Charge first', content: '*Critics called the policy shortsighted, and its ______ soon became obvious.* *Shortsighted* is negative, and *and* keeps the direction — so the blank is negative. *Flaws*, *costs*, and *drawbacks* survive the screen in a second.', variant: 'right' },
      { label: 'Topic first', content: 'Picking *benefits* because policies have benefits. Right topic, wrong charge — the evidence already chose the sign, and a same-topic word pointing the wrong way fails no matter how natural it sounds.', variant: 'wrong' },
    ],
  },
  {
    type: 'strategyCard',
    title: 'The charge tag',
    content: 'Before reading any choices, mark the charge the blank needs: plus, minus, or zero. Writing it down protects the judgment from persuasive wrong answers. Two calibration rules travel with the tag. First, if a word’s charge is unclear to you, **keep the word** — cheap tests are for confident kills only, and forced kills are how right answers die early. Second, if the slot itself is genuinely neutral (a technical description with no verdict anywhere), skip the tag and test by substitution instead; forcing a charge onto a neutral slot eliminates correct neutral answers.',
  },

  { type: 'heading', content: 'Second senses: familiar words in formal clothes' },
  {
    type: 'text',
    content: 'Academic prose constantly uses everyday words in their formal second senses, and the test builds items around them: the correct answer is often a word you know, working in a sense you did not expect. So familiarity cuts both ways. An unfamiliar word at least triggers caution; a familiar word arrives with a confident — and often wrong — first meaning attached. One structural fact turns this hazard into a signal: **all four choices in a set share one part of speech.** A choice that looks like the wrong part of speech — a noun where the blank clearly wants an adjective — is guaranteed to be operating in a second sense. That look is a reason to examine the word more closely, never a reason to eliminate it.',
  },
  {
    type: 'callout',
    content: 'One word, three forced meanings. *She checked the arithmetic before submitting* (verified). *Vaccination checked the spread of the disease* (halted). *The courts act as a check on executive power* (restraint). Same letters every time; the surroundings do all the deciding. Meaning is location-dependent — which is exactly why the evidence, not the dictionary, settles every item in this family.',
  },

  { type: 'heading', content: 'Where to read: the window and the arrows' },
  {
    type: 'text',
    content: 'The sentence containing the blank only *locates* the question; the evidence that decides it often sits one sentence away. The working window is the target sentence **plus one sentence on each side** — and if the target sits within the first two sentences, read from the top. Once the window is open, **connectors** tell you how the evidence aims at the blank. A connector is a word or mark that fixes the logical relationship between two ideas, and there are only three families: **continuers** (*and, also, indeed, likewise*) say the blank echoes the nearby idea; **explainers** (*because, therefore, thus* — and, silently, colons and dashes) say the blank gives a reason or a result; **reversers** (*but, however, although, despite*) say the blank pushes against the nearby idea. Same evidence, different connector, opposite answer.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Continuer — echo the evidence', content: '*The trail was steep and poorly marked, and by dusk the hikers were ______.* *And* keeps the direction: the blank echoes the hardship — *exhausted*, *discouraged*.', variant: 'right' },
      { label: 'Reverser — oppose the evidence', content: '*The trail was steep and poorly marked, but by dusk the hikers were ______.* One word changed, and the whole answer flips: *but* demands the opposite of the hardship — *cheerful*, *undaunted*.', variant: 'right' },
    ],
  },

  // ── Stage 2 · The method ───────────────────────────────────────────────
  { type: 'heading', content: 'Stage 2 · The method' },
  {
    type: 'text',
    content: 'Five steps, always in the same order. Each step below gets its own unit: what to do, a right example, a wrong example, and the why. On easy items the routine takes seconds; on hard items it is the difference between solving and guessing.',
  },
  {
    type: 'steps',
    title: 'The five-step routine',
    items: [
      'Read the full context window — the blank’s sentence plus one sentence on each side.',
      'Find the forcing evidence and the connector that aims it: continue, explain, or reverse.',
      'Predict your own word for the blank before reading any choices — when the evidence makes you confident. Otherwise, tag the required charge and move on.',
      'Eliminate by charge first, then match precision among the survivors — counting any negation or downgrader between the evidence and the blank.',
      'Substitute the survivor and re-read the sentence. On *most nearly means* items, substitution is the whole game: replace the word with each choice and re-read.',
    ],
  },

  { type: 'heading', content: 'Step 1 — Read the full window' },
  {
    type: 'text',
    content: 'Tunnel vision on the blank’s sentence is the most tempting time-saver in this family, and items are engineered to punish it: the decisive contrast is placed one sentence away, so a reader who stays local picks the *exact opposite* of the answer — not a random miss, a mirror-image one. Widen by ritual, not by judgment: one sentence up, one sentence down, every time. The window is also bounded. Widening means one or two sentences, not rereading the whole passage; if two sentences on each side have not produced the evidence, it is not hiding farther away — re-read the window more carefully.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Tunnel read', content: '*At first, the results seemed ______.* Read alone, this sentence accepts nearly any adjective — a local reader grabs whichever choice sounds most scientific.', variant: 'wrong' },
      { label: 'Widened read', content: '*At first, the results seemed ______. A second, larger trial, however, showed that the effect was real.* *However* plus *real* forces the blank to mean the opposite of real: *spurious*, *illusory*. The deciding sentence was the next one.', variant: 'right' },
    ],
  },

  { type: 'heading', content: 'Step 2 — Find the evidence and the arrow' },
  {
    type: 'text',
    content: 'Inside the window, two finds settle the item: the **evidence phrase** — the specific words that constrain the blank — and the **connector** linking it to the blank. Name the connector’s family: continue, explain, or reverse. Then name *what exactly* it connects, because a reverser reverses something particular, and flipping the wrong thing produces answers that are negative in the right general area but aimed at the wrong target. Watch for the silent connectors: a colon or a dash imposes an explanation relationship without printing a word, and items built on them are exactly where students report "there were no clue words."',
  },
  {
    type: 'tip',
    content: 'Read every colon as *namely* or *because*. *The design had one flaw: the hinge* survives as "one flaw, namely the hinge." If the paraphrase still makes sense, you have classified the arrow correctly — what follows a colon explains or specifies what precedes it.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Reverse the right target', content: '*Most reviewers admired the memoir’s candor, but a few found the same frankness ______.* The reverser targets *admired* specifically, so the blank is an un-admiring verdict on the frankness: *off-putting*, *excessive*.', variant: 'right' },
      { label: 'Reverse the topic instead', content: 'Deciding the blank must mean *dishonest* because *but* appeared and dishonesty is the opposite of candor. The contrast is with the reviewers’ admiration, not with the candor itself — the flip landed on the wrong target.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Step 3 — Predict your own word' },
  {
    type: 'text',
    content: 'Distractors are engineered to sound plausible to a mind with no prior commitment. Prediction reverses the power dynamic: you set the standard first, and the choices get graded against it instead of seducing you. The prediction can be rough — "something like *spread*" — and approximate is fine. One caution keeps the tool honest: **predict only when the evidence makes you confident.** A half-sure guess is worse than none, because a planted anchor primes you to reject the right answer for the crime of not matching your wrong one. When unsure, skip straight to the charge tag from Stage 1. And if no choice matches a confident prediction, distrust the prediction before distrusting the test: re-read the stem, widen the window once, and revise.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Predict, then match', content: '*Printers helped ______ the new spelling rules, repeating them in every edition until they became standard.* Prediction: "spread." Among the choices, *disseminate* matches — and it wins even if it is the least familiar word on the list, because it is the only one doing the predicted job.', variant: 'right' },
      { label: 'Shop the choices', content: 'Reading the four options first and picking *invent* because printers and spelling rules feel inventive together. Without a prediction, the most associable word wins instead of the most precise one — which is exactly what the wrong answers were built to exploit.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Step 4 — Eliminate by charge, then match precision' },
  {
    type: 'text',
    content: 'Sweep the choices in order and kill on cheap features first: wrong charge, then overshot degree. Do not define anything yet. Spend precision only on the survivors: hold each full definition against the evidence and demand that every implication be paid for. A choice that smuggles in extra content the passage never states — newness, agency, a first-of-its-kind role — loses to a plainer word that claims only what the evidence supports. Two disciplines protect the sweep. **Quarantine unknowns:** a word you cannot define gets parked, not killed; prove the known words in or out first, and pick an unknown only when everything known has failed. **Count the flippers:** any negation or downgrader standing between the evidence and the blank — *not, less, hardly, fails to, without* — flips the charge the word itself carries. Two flippers cancel. Count each exactly once.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Signs composed', content: '*The new lining made the machinery far less ______ to workers on the floor below.* The sentence reports an improvement — but *less* flips the sign, so the blank word itself is negative: *disruptive*. Sentence positive, word negative.', variant: 'right' },
      { label: 'Mood matched', content: 'Picking *agreeable* because the sentence feels like good news. "Less agreeable" turns the improvement into a complaint. The sentence’s charge and the word’s charge are two different numbers, related by the flipper between them.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Step 5 — Substitute and re-read' },
  {
    type: 'text',
    content: 'The final gate for every item: install the survivor and read the whole sentence again, checking that the logic and the grammar both hold. On *most nearly means* items, substitution is the entire method — **replace the printed word with each choice and re-read.** Three of the four replacements will bend the sentence; one will preserve it exactly. A presumption speeds this up: on word-probe items, the everyday sense of the printed word is presumed wrong until nothing else fits, because the test picks words precisely when their familiar meaning does not operate in that sentence — and then prints the familiar meaning among the choices as bait. One warning about the ear: "sounds odd to me" is not evidence against a choice; slot-logic failure is. Formal second senses often sound stilted, and stilted-but-verified beats fluent-but-wrong.',
  },

  // ── Stage 3 · On the test ──────────────────────────────────────────────
  { type: 'heading', content: 'Stage 3 · On the test' },
  {
    type: 'text',
    content: 'Both stems in this family are fixed: *"Which choice completes the text with the most logical and precise word or phrase?"* and *"As used in the text, what does ______ most nearly mean?"* The first hands you a blank to fill; the second hands you a word whose printed familiarity is the hazard. Either way, the choices are single words or short phrases, all sharing one part of speech — the choice set itself confirms you are on this chapter, and the routine is identical for both shapes.',
  },
  {
    type: 'steps',
    title: 'The decision flow',
    items: [
      'Open the window: the target sentence plus one on each side — from the top if the target sits in the first two sentences.',
      'Name the evidence phrase and the connector family: continue, explain, or reverse. Colons and dashes count as explainers.',
      'Confident about the required idea? Predict a word. Not confident? Tag the required charge — counting every flipper between evidence and blank exactly once.',
      'Sweep in order: kill wrong-charge and overshot-degree choices, quarantine unknowns, then give the survivors the full definition-versus-evidence check.',
      'Substitute and re-read the whole sentence. On *most nearly means* items, run the substitution on every remaining choice — the winner reads as if the word had always been there.',
    ],
  },
  {
    type: 'keyInsight',
    content: '**You never have to define the wrong answers.** An unknown word in the choices cannot block a verifiable right answer, and nothing requires you to explain why every loser loses. Work from the words you know toward the words you do not: prove the knowns in or out, and reach for an unknown only by exhaustion. Items carrying two exotic distractors are routinely solved by students who never learn what those words mean.',
  },
  {
    type: 'trapCard',
    title: 'The dictionary-first definition',
    wrong: '**The dictionary-first definition.** On a *most nearly means* item, you spot a word you know — *checked*, *conservative*, *novel* — and pick the choice matching the meaning you learned first. It feels like the one question you can answer from memory.',
    correction: 'The test selects these words *because* the familiar sense fails in that sentence, then prints the familiar sense among the choices as bait. Presume the everyday meaning wrong until nothing else fits, and let substitution decide: replace the word with each choice and keep the one that preserves the sentence’s logic.',
  },
  {
    type: 'trapCard',
    title: 'The flipped charge',
    wrong: '**The flipped charge.** The sentence is plainly good news — an improvement, a success — so you pick a positive word, never registering the *less* or *fails to* standing between the evidence and the blank. Your pick has the right subject matter and the wrong sign.',
    correction: 'The sentence’s charge and the required word’s charge are separate quantities, related by the flippers between them. Scan the span between evidence and blank for *not, less, hardly, scarcely, fails to, without*; each flips the sign once, and two cancel. Write the resulting word-sign down before reading any choices — the arithmetic is trivial on paper and error-prone in the head.',
  },
  {
    type: 'trapCard',
    title: 'The same-topic imposter',
    wrong: '**The same-topic imposter.** A choice belongs to the passage’s subject — *orbit* in an astronomy passage, *harvest* in a farming one — and its topical fit reads as textual support. You pick it because you literally saw its cousins on the page.',
    correction: 'Topic membership is zero evidence. The blank’s job is set by the evidence phrase and the connector, and the imposter’s definition breaks that job even while its subject matter matches. Treat topical attraction as a red flag: the more a choice merely *belongs*, the harder you check what it actually claims.',
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Community gardens do more than supply vegetables: by giving neighbors a shared project to tend, they ______ connections among people who might otherwise never speak.\n\nWhich choice completes the text with the most logical and precise word or phrase?\n(A) foster\n(B) sever\n(C) predict\n(D) imitate',
    steps: [
      { label: 'Open the window and find the arrow', content: 'The colon after *vegetables* is a silent explainer: what follows spells out the *more* that gardens do. The evidence phrase is *a shared project to tend* plus *people who might otherwise never speak* — the blank names what a shared project does to connections.' },
      { label: 'Predict and tag the charge', content: 'Something like *build* or *create*. The charge is positive — the sentence is crediting the gardens with a good effect.' },
      { label: 'Sweep the choices', content: '*Sever* is negative — killed on charge alone. *Predict* and *imitate* are neutral and do the wrong job: a garden does not forecast or copy friendships. *Foster* means to encourage the growth of — the predicted word.' },
      { label: 'Answer', content: '**(A) foster.** Substituted back, "they foster connections among people" reads cleanly and keeps the colon’s promise.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Early reviewers dismissed the composer’s only symphony as derivative — a pale copy of older masters. Recent scholarship, however, has ______ that verdict: measure by measure, the score uses harmonic turns no earlier composer had attempted.\n\nWhich choice completes the text with the most logical and precise word or phrase?\n(A) echoed\n(B) anticipated\n(C) overturned\n(D) clarified',
    steps: [
      { label: 'Open the window', content: 'The blank’s sentence alone does not say which way scholarship went. The previous sentence holds the evidence: reviewers dismissed the symphony as *derivative*.' },
      { label: 'Find the arrow', content: '*However* is a reverser aimed at that verdict, and the colon afterward explains with proof of originality — *harmonic turns no earlier composer had attempted*. The blank must mean *reversed*.' },
      { label: 'Sweep the choices', content: '*Echoed* continues the old verdict — the exact opposite of what *however* demands, and the choice built for readers who never left the blank’s sentence. *Anticipated* points the wrong way in time. *Clarified* is neutral: it polishes the verdict instead of opposing it.' },
      { label: 'Answer', content: '**(C) overturned.** Substitute and re-read: scholarship overturned the verdict, and the colon’s evidence of originality pays for the reversal.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'The canal network never eliminated flooding in the delta, but it checked the worst of it: in the decades after construction, the seasonal surges that had once submerged whole villages rarely rose above the retaining walls.\n\nAs used in the text, what does "checked" most nearly mean?\n(A) verified\n(B) restrained\n(C) examined\n(D) marked',
    steps: [
      { label: 'Presume the familiar sense wrong', content: '*Checked* usually means *verified* or *examined* — and both sit in the choice set. On a *most nearly means* item, that familiarity is the trap, not the answer: begin by presuming the everyday senses fail.' },
      { label: 'Find the evidence and compose the signs', content: 'The frame is *never eliminated ... but ... the worst of it*, and the colon explains: surges *rarely rose above the retaining walls*. The canals did something weaker than eliminating but in the same direction — they held the flooding back. The required idea is *restrain*, at partial strength.' },
      { label: 'Substitute every choice', content: '"It *verified* the worst of the flooding" — the canals were not fact-checking water. "It *examined* the worst of it" fails the same way. "It *marked* the worst of it" turns canals into labels. "It *restrained* the worst of it" preserves the sentence: held back, short of eliminated.' },
      { label: 'Answer', content: '**(B) restrained.** Both everyday senses were printed as bait; the second sense — *check* as in *hold back* — is the one the evidence pays for.' },
    ],
  },
  {
    type: 'checkpointQuestion',
    number: 2,
    question: '*The renovation did little to ______ the theater’s persistent echo.* The sentence reports a failure. What charge does the blank word itself carry?',
    answer: 'Positive — a fixing word such as *remedy* or *correct*. **Why:** the negative lives in *did little to*, a flipper standing before the blank. The sentence’s idea is negative, but the word’s own charge is positive — the two are separate numbers, related by the flipper between them.',
  },
  {
    type: 'checkpointQuestion',
    number: 3,
    question: 'Two surviving choices both carry the right charge. What decides between them?',
    answer: 'Precision: hold each choice’s full definition against the evidence and keep the one whose every implication is paid for by the passage. **Why:** wrong answers that survive the charge screen usually overshoot — extra intensity, extra agency, claims the text never makes. The plainer word that asserts exactly what the evidence supports wins.',
  },
  {
    type: 'checkpointQuestion',
    number: 4,
    question: 'A choice looks like the wrong part of speech for the blank. Cross it out?',
    answer: 'No — examine it harder. **Why:** all four choices in a set share one part of speech, so a choice that looks wrong is guaranteed to be operating in a second sense you have not retrieved yet. The wrong-part-of-speech look marks the choice most worth a second look, and eliminating it on sight is the exact reflex the item was built to punish.',
  },
  {
    type: 'checkpointQuestion',
    number: 5,
    question: 'On a *most nearly means* item, the familiar meaning of the printed word fits the sentence grammatically. Finished?',
    answer: 'Not yet. **Why:** the familiar sense usually fits *grammatically* — only the evidence check rejects it. Substitute every choice and demand logical fit: the credited answer is frequently a second sense, and the familiar sense is printed among the choices precisely because it reads smoothly while meaning the wrong thing.',
  },
  { type: 'heading', content: 'One-page summary' },
  {
    type: 'table',
    title: 'The whole method in one place',
    headers: ['Step', 'Move', 'Watch for'],
    rows: [
      ['1', 'Read the full window — the target sentence plus one on each side', 'Target in the first two sentences: read from the top. Widen once more at most, then stop'],
      ['2', 'Name the evidence phrase and the connector family', 'Continue, explain, or reverse — colons and dashes explain silently'],
      ['3', 'Predict your own word, or tag the required charge', 'Predict only when confident; a planted half-guess rejects right answers'],
      ['4', 'Eliminate by charge and degree, then match precision', 'Count each flipper (*not, less, hardly, fails to*) exactly once; unsure means keep; unknowns get quarantined, never killed'],
      ['5', 'Substitute and re-read', 'Word-probe items: everyday sense presumed wrong; the winner reads as if the word had always been there'],
    ],
  },
  {
    type: 'text',
    content: 'That is the entire skill: open the window, find the evidence and the arrow, commit to a prediction or a charge, spend the cheap tests before the expensive ones, and let substitution deliver the verdict. The words change on every test; the routine never does.',
  },
];
