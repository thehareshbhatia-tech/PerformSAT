/**
 * Learn chapter body — Command of Evidence, Textual (Information and Ideas).
 *
 * Teach-from-zero textbook chapter following the locked template
 * (docs/LEARN_TEXTBOOK_OVERHAUL_PLAN.md): roadmap → Stage 1 foundations →
 * Stage 2 numbered method (step → right → wrong → why) → Stage 3 on-the-test
 * (decision flow, traps, worked examples, checkpoints, one-page summary).
 * Voice reference: src/data/chapters/rwBodies/boundaries.js.
 * Concept source: knowledge/graph/rw (support-and-weaken-textual,
 * illustrate-with-quotation, directional-evidence-prediction,
 * argument-spine-decomposition, topical-vs-logical-relevance,
 * premise-completion-vs-new-evidence, predict-then-verify,
 * test-writer-mental-model, emphasis-signal-map).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * rwBodies/index.js — never import this from the chapter index.
 */

export const commandOfEvidenceTextualBlocks = [
  {
    type: 'text',
    content: 'A textual Command of Evidence question hands you a claim and four candidates for the job of backing it up. The stem comes in two shapes. In the first, a passage builds toward a researcher’s hypothesis and asks: *Which finding, if true, would most directly support the hypothesis?* — or *weaken* it. In the second, a passage states a claim about a poem or a story and asks which quotation best *illustrates* that claim. Both shapes reward the same discipline, and it is not the one school rewarded: **the winning choice is not the one about the right topic — it is the one pushing in the right direction on the exact claim.** Direction-matching, not topic-matching, is the whole skill, and it runs as a fixed routine you can learn once.',
  },
  {
    type: 'steps',
    title: 'How this chapter is built',
    items: [
      '**Stage 1 · Foundations.** What a claim is, what evidence is, and the two distinctions — on-claim vs. on-topic, given premises vs. new findings — that everything else stands on.',
      '**Stage 2 · The method.** Five numbered steps, each in the same shape: the step, a right move, a wrong move, and the why.',
      '**Stage 3 · On the test.** A decision flow that routes you through the steps, the traps the choices are built from, worked examples, and a one-page summary.',
    ],
  },

  // ── Stage 1 · Foundations ──────────────────────────────────────────────
  { type: 'heading', content: 'Stage 1 · Foundations: the anatomy of an argument' },
  {
    type: 'text',
    content: 'Every evidence passage is a miniature argument with three separable parts. The **claim** is what someone asserts is true — a hypothesis, a theory, a conclusion. The **evidence** is the set of observations offered for it. The **mechanism** is the specific story connecting the two: not just *the additive helps plants grow* but *the additive helps plants grow because it feeds root bacteria*. Everything else in the passage — names, dates, credentials, scenery — is packaging. Think of the passage as a skeleton wearing a coat: the skeleton is one claim, a piece or two of evidence, and the mechanism bolting them together, and the coat is what wrong answers are sewn from.',
  },
  {
    type: 'text',
    content: 'Two habits find the skeleton fast. First, expect the claim **late** — often in the final sentence, flagged by verbs like *hypothesize, propose, conclude, suggest*, while the opening sentences supply background. Second, when a passage carries two positions — a common view and a researcher’s new proposal — the stem names whose claim is on trial. Judge every choice against that one claim and no other.',
  },
  { type: 'heading', content: 'On-topic is not on-claim' },
  {
    type: 'text',
    content: 'Here is the distinction the whole question type is built to test. A statement is **topically relevant** when it mentions the passage’s subject — the same species, the same study, the same town. It is **logically relevant** only when its truth changes the status of the claim: makes it more likely, or less. Picture the claim as a locked door and every candidate statement as a key. Topical relevance means the key is in the right building; logical relevance means it turns *this* lock. The test fills the building with keys. For years, quoting anything about the topic earned credit in class — the test breaks that contract on purpose.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Moves the claim', content: 'Claim: *the town’s new shielded streetlights reduce light pollution.* Finding: *sky-brightness readings taken after the installation fell by a third.* If that is true, the claim is now more likely — the key turns.', variant: 'right' },
      { label: 'On-topic, does nothing', content: 'Finding: *the shielded streetlights cost less to maintain than the old models.* True, and unmistakably about the streetlights — yet the claim about light pollution is exactly as unproven as before. Right building, wrong lock.', variant: 'wrong' },
    ],
  },
  {
    type: 'strategyCard',
    title: 'The one-question test',
    content: 'Ask of any tempting choice: **“If this statement is true, what happens to the claim?”** If the honest answer is “it becomes more likely,” the choice supports. “Less likely” — it weakens. “Nothing” — it is garnish, no matter how accurate, vivid, or on-topic it is. Every step in Stage 2 is a way of asking this one question with more precision.',
  },
  { type: 'heading', content: 'Two rooms: given premises vs. new findings' },
  {
    type: 'text',
    content: 'Evidence-style stems split into two tasks with opposite rules, and mixing up the rulebooks is a silent point-loser. A stem that says *logically completes the text* locks you in a **closed room**: the answer is already implied by the passage, and bringing in outside facts is contamination. That shape belongs to the Inferences chapter. The stems in *this* chapter open the door: the words **“if true” stamp every choice as fact.** Each choice is a visitor bringing news from outside the passage, and your only question is whether the news helps or hurts the claim — never whether the passage already said it, and never whether the news sounds believable.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Open door, played right', content: 'On a weaken item, the correct finding flatly contradicts the passage’s conclusion — and that is fine. You grant its truth, ask which way it pushes, and pick it.', variant: 'right' },
      { label: 'Closed-room rule smuggled in', content: 'You eliminate the correct weakener with “the passage never mentions a second survey.” On an *if true* item that is not an objection: none of the choices is supposed to appear in the passage. New information is the point.', variant: 'wrong' },
    ],
  },
  {
    type: 'checkpointQuestion',
    number: 1,
    question: 'A report claims that a harbor’s new breakwater has made the water inside calmer. Which statement, if true, moves that claim: (a) *wave heights measured inside the harbor fell by half after the breakwater was finished*, or (b) *the breakwater required ten thousand tons of granite to build*?',
    answer: 'Only **(a)**. **Why:** its truth makes the claim more likely — calmer water is exactly what it reports. (b) is entirely about the breakwater, yet the claim is exactly as unproven after reading it as before: topical relevance, zero logical relevance.',
  },

  // ── Stage 2 · The method ───────────────────────────────────────────────
  { type: 'heading', content: 'Stage 2 · The method' },
  {
    type: 'text',
    content: 'Five steps cover both item shapes. Each follows the same pattern: the **step**, a **right** move, a **wrong** move, and the **why**. Steps 1 through 4 run on every support-or-weaken item; Step 5 handles the quotation shape.',
  },

  { type: 'heading', content: 'Step 1 — Isolate the exact claim on trial' },
  {
    type: 'text',
    content: 'Read the stem before the passage and grab two things: the **task verb** (*support*, *weaken*, *illustrate*) and the **claim-holder** (“the researchers’ hypothesis,” “Tanaka’s conclusion”). Then scan the passage for the sentence where that holder asserts something, and restate it plainly in your own words — under ten words if you can, keeping every qualifier: *only in winter*, *far greater*, *this species*. Shear off a qualifier and you turn a specific claim into a loose one that several wrong answers satisfy.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'The named claim', content: 'Passage: *Some geologists attribute the valley’s parallel ridges to glacial scraping. Geologist Ana Ruiz proposes instead that the ridges are the remains of ancient shorelines.* Stem: support **Ruiz’s** proposal. Restatement: *ridges = old beach lines.* Every choice is judged for its push on that sentence alone.', variant: 'right' },
      { label: 'The neighboring claim', content: 'You pick a finding that beautifully supports the glacial-scraping view. It is logically relevant — to the wrong claim. Passages with two positions exist to punish readers who never checked whose claim the stem named.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Step 2 — Convert the claim into a direction' },
  {
    type: 'text',
    content: 'An empirical claim — one relating a cause or condition to an outcome — compresses into arrow form: **more X → more Y**, or *more shade → fewer beetles*. Write it down; polarity errors are working-memory failures, and paper does not fumble a negation. Keep the **mechanism qualifier** in the arrow line too: not just *mulch → fewer weeds* but *mulch → fewer weeds, because it blocks light*. A claim that names its mechanism is a claim about that mechanism — praise of the whole package cannot confirm the one component doing the claimed work.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Compression that keeps the machinery', content: 'Claim: *shredded-bark mulch suppresses weeds because it blocks the light their seeds need.* Arrow line: *mulch → fewer weeds, via blocked light.* A qualifying finding has to touch the light story — say, weeds sprouting freely under a mulch of clear glass beads that lets light through.', variant: 'right' },
      { label: 'Gist compression', content: 'You jot *mulch is good for gardens*. Now a finding about mulch holding soil moisture feels supportive — and it is bait, because the claim never mentioned moisture. The qualifier you dropped was the part being tested.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Step 3 — Predict the qualifying finding before reading a single choice' },
  {
    type: 'text',
    content: 'Next to the arrows, write the **target**: what shape of finding would qualify. Support = a finding pointing the *same* way as the claim. Weaken = a finding pointing the *opposite* way — or showing **no relationship at all**, or supplying a counterexample. The null case deserves its own sentence, because it feels wrong the first time: “no difference was found between the groups” sounds like nothing happened, but a claim asserting a relationship is damaged by evidence of none. Prediction is what flips the power dynamic: the ideal answer for *“the songbirds treat a neighbor species’ alarm call as a hawk warning”* is a trial where the call plays from a hidden speaker, no hawk is anywhere in sight, and the birds still flee. Hold that picture and the right choice jumps out; read the choices cold and the test frames your options for you.',
  },
  {
    type: 'callout',
    content: '**The weaken menu.** A finding weakens a claim in any of three shapes: it points the opposite way; it shows no relationship where the claim asserts one; or it supplies a counterexample — the claimed cause present, the promised effect absent. None of these proves the claim false, and none has to. The winning weakener only has to be *most inconsistent* with the claim.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Target written first', content: 'Arrow line: *shade up → beetles down.* Target: *support = same arrows; weaken = flipped arrows or a flat line.* Each choice is now a five-second comparison against a written standard instead of a fresh act of reasoning.', variant: 'right' },
      { label: 'Shopping the choices cold', content: 'You skip the target and read the four choices as a menu, waiting for one to feel right. The most attractive-sounding wrong answer was engineered to out-feel the correct one — reading cold hands it the advantage it was built for.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Step 4 — Audit every choice to its final clause' },
  {
    type: 'text',
    content: 'Now sweep the choices against the written target and sort each into a bin: **right direction**, **wrong direction**, **no bearing** (on-topic garnish), **right topic but wrong condition** (the effect attached to a component or group the claim did not name), or **right until the tail**. That last bin is a manufactured trap: a choice whose opening clause matches your target perfectly and whose final clause quietly destroys it. It exists to punish front-loaded reading, so the audit rule is absolute — every choice, to its period. One more discipline: if you catch yourself building a little story to connect a choice to the claim, stop. **The effort itself is the verdict.** Qualifying evidence connects on its own; a choice that needs your help is wrong.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Read to the period', content: 'Claim: *the polymer coating keeps steel bridge decks ice-free.* Choice: *Coated test panels stayed ice-free all winter — at a facility where air temperatures never dropped below freezing.* The tail deletes the finding’s force: nothing would have iced over there anyway. Bin: broken tail, out.', variant: 'right' },
      { label: 'Committed at the comma', content: 'The opening clause — *coated test panels stayed ice-free all winter* — matches the target, so you mark it and move on. You answered the first half of a choice whose second half was the actual test.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Step 5 — Quotation items: translate, then check enactment' },
  {
    type: 'text',
    content: 'The quotation shape states a claim about a literary work — its speaker’s attitude, a contrast it draws, a character’s situation — and offers four quotations from that work. The routine changes in two ways. First, **translate**: render each candidate line into flat, boring modern prose before judging it. The unpoetic paraphrase is not a failure of appreciation; it is the tool. Untranslated lines get judged by mood, and the wrong answers are tuned to win mood contests. Second, **check enactment**: treat the claim as a stage direction the line must literally perform. If the claim says the speaker *urges*, the line must actually tell someone to do something. If the claim says a *contrast* is drawn, two things must actually be contrasted — and they must be the two things the claim names. Cheap structural filters run first: a question cannot urge or assert; a line about “we” is not one speaker addressing another; a neutral description cannot praise or criticize. Then check participants — the right act aimed at the wrong person is a near-miss, not a match.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Enactment', content: 'Claim: *the speaker praises the lighthouse keeper’s steadiness.* Line: *“Through every squall he kept the lamp; the harbor never doubted him.”* Flat prose: he did the job in every storm, and people trusted him. The line performs praise, and it aims that praise at the keeper. Match.', variant: 'right' },
      { label: 'Mood-match', content: 'Line: *“O lonely tower, how the grey sea leans upon your light!”* Gorgeous, sea-soaked, exactly the right register — and it praises no one. It describes the tower, not the keeper’s steadiness. Beautiful lines that perform the wrong act are the shape’s signature bait.', variant: 'wrong' },
    ],
  },

  // ── Stage 3 · On the test ──────────────────────────────────────────────
  { type: 'heading', content: 'Stage 3 · On the test' },
  {
    type: 'text',
    content: 'Recognition is instant if you read the stem first. *“Which finding, if true, would most directly support the researchers’ hypothesis?”* and *“Which finding, if true, would most directly weaken the conclusion?”* are this chapter’s main shape; *“Which quotation most effectively illustrates the claim?”* routes to Step 5. Support and weaken items are word-for-word identical except for the task verb, so that single word carries the whole question.',
  },
  {
    type: 'tip',
    content: 'Underline the stem’s task verb — *support*, *weaken*, *undermine*, *illustrate* — before touching the choices, and glance at it once more before you commit. Answering the opposite task after wading through several same-direction distractors is a pure attention failure, and the underline is the cheap anchor that prevents it.',
  },
  {
    type: 'steps',
    title: 'The decision flow',
    items: [
      'Read the stem: grab the task verb and the claim-holder (Step 1). Underline the verb.',
      'Find the claim — expect it late — and restate it plainly, keeping every qualifier (Step 1).',
      'Quotation item? Go to enactment: pin the claim’s verb and participants, run the structural filters, translate the survivors (Step 5). Finding item? Compress the claim to arrows with its mechanism qualifier (Step 2).',
      'Write the target: support = same direction; weaken = flipped, null, or counterexample (Step 3). Only then read the choices.',
      'Audit each choice to its final clause and bin it: right direction, wrong direction, no bearing, wrong condition, broken tail (Step 4).',
      'Before committing, put the survivor through the one-question test: *if this is true, what happens to the claim?* The answer must name a direct push in the stem’s direction — no story-building allowed.',
    ],
  },
  {
    type: 'keyInsight',
    content: '**If a choice needs your help, it is wrong.** The correct finding connects to the claim on its own; you read it and feel the claim move. The moment you notice yourself constructing a scenario in which a choice *could* bear on the claim — “well, if the mills hired workers, and the workers had families…” — treat that construction work as the elimination. This rule most protects diligent students, because building charitable bridges to weak choices is exactly what careful readers are trained to do.',
  },
  {
    type: 'trapCard',
    title: 'The on-topic bystander',
    wrong: '**The on-topic bystander.** The choice is accurate, interesting, and unmistakably about the passage’s subject — same species, same study, same town. It feels connected, so you credit it.',
    correction: 'On-topic is not on-claim. Run the one-question test: if this statement is true, what happens to the claim? When the honest answer is “nothing,” the choice is garnish, however vivid. Expect the correct answer to sometimes look drab next to it — a plain little finding that actually turns the lock beats a rich fact that sits in the hallway.',
  },
  {
    type: 'trapCard',
    title: 'The mirror image',
    wrong: '**The mirror image.** The choice is perfectly relevant to the claim — and points exactly the wrong way. You verified relevance, felt the click of connection, and never checked polarity, so you picked a strengthener on a weaken stem.',
    correction: 'Direction is a separate check from relevance, and it is the one that degrades under time pressure and negation. Write the arrow line and the target before reading choices (Steps 2–3), resolve any negation to positive form — “did *not* decline” points up — and compare each choice against the written target, not against a feeling of connectedness.',
  },
  {
    type: 'trapCard',
    title: 'The broken tail',
    wrong: '**The broken tail.** The choice opens with exactly the finding you predicted, so you commit at the comma — and never read the final clause that removes the comparison group, restricts the conditions, or reverses the force of everything before it.',
    correction: 'Audit every choice to its period (Step 4). On the final two, check tails first: read each choice’s last clause before re-reading its opening. A choice’s end is where its disqualification is hidden, precisely because most readers spend their attention at the start.',
  },
  {
    type: 'trapCard',
    title: 'The beautiful line',
    wrong: '**The beautiful line.** On a quotation item, one choice is lyrical, emotionally loaded, and pitched in exactly the claim’s register — mournful for a mournful claim, celebratory for a celebration. You pick the resonance.',
    correction: 'Mood-matching is not performing. Translate the line into flat prose and check enactment: does it *do* the claim’s verb, to the claim’s participants (Step 5)? The correct quotation is often plainer-sounding than the bait — the test counts on readers rewarding poetry over proof.',
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'A city ecologist hypothesizes that pale lichens vanished from downtown trees because of car exhaust: the more traffic a street carries, the fewer lichens its trees support.\n\nWhich finding, if true, would most directly support the ecologist’s hypothesis?\n\n(A) Lichens on downtown trees grow more slowly in winter than in summer.\n(B) After the city closed one downtown street to cars, lichens returned to its trees within three years.\n(C) Pale lichens are also scarce in a forest far from any road.\n(D) Downtown trees are pruned more often than trees in residential neighborhoods.',
    steps: [
      { label: 'Isolate and convert the claim', content: 'The claim is directional and names its mechanism: *more traffic → fewer lichens, because of exhaust.* Arrow line written.' },
      { label: 'Write the target', content: 'Support = a finding with the same arrows: traffic goes up and lichens fall, or traffic goes away and lichens recover.' },
      { label: 'Audit the choices', content: '(A) is seasonal — no bearing on traffic. (C) points the wrong way: lichens scarce where there are no cars at all suggests exhaust is not the driver. (D) offers a rival cause, which would weaken, not support. (B) is the target’s shape exactly: traffic removed, lichens returned.' },
      { label: 'Answer', content: '**(B).** Cars leave, lichens come back — the finding pushes the claim in precisely the direction it asserts.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A historian argues that the completion of the Calder Canal in 1841 caused the town of Marlow’s population to double over the following decade, since the canal gave local mills cheap access to coastal markets.\n\nWhich finding, if true, would most directly weaken the historian’s argument?\n\n(A) Marlow’s mills shipped more cloth by canal in 1851 than in 1841.\n(B) During the same decade, three nearby mill towns with no canal access also doubled in population.\n(C) The Calder Canal took six years and considerable local labor to build.\n(D) Several Marlow residents petitioned against the canal during its construction.',
    steps: [
      { label: 'Isolate the claim', content: 'The holder is the historian; the claim is causal: *canal → population boom.* The doubling itself is not in dispute — the canal’s role in causing it is.' },
      { label: 'Write the weaken target', content: 'Weaken = flipped direction, no relationship, or a counterexample. For a causal claim, the classic counterexample is the effect appearing *without* the claimed cause — the boom happening where there is no canal.' },
      { label: 'Audit to the tails', content: '(A) points the same way as the claim — it supports. (C) and (D) are on-topic bystanders: true facts about the canal that leave the causal claim untouched. (B) is the counterexample: towns with no canal boomed identically, so something region-wide, not the canal, likely drove the growth.' },
      { label: 'Answer', content: '**(B).** Note what it does not do: it does not prove the canal contributed nothing. It does not have to. It is the finding most inconsistent with “the canal caused the boom,” and *most inconsistent* is the whole assignment.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: '“The Gardener’s Year” is an 1888 poem by Alice Thorne. In the poem, the speaker urges a companion to come see the orchard’s beauty before it disappears: ______\n\nWhich quotation from “The Gardener’s Year” most effectively illustrates the claim?\n\n(A) “How brief the blossom’s reign, how grey the bough that held it!”\n(B) “Come, walk with me among the rows while all the white is falling.”\n(C) “I have kept a ledger of my springs, and every page is fading.”\n(D) “What eye could watch such color go, and never once look up?”',
    steps: [
      { label: 'Pin the enactment conditions', content: 'The claim’s verb is *urges*; the participants are the speaker and a companion; the object is beauty on its way out. The winning line must literally tell someone to do something, about a vanishing sight.' },
      { label: 'Run the functional filters', content: '(D) is a question — a question can mourn or accuse, but it cannot urge; strike it, however haunting. (A) is an exclamation of lament: it grieves the blossom, urges no one. (C) is the speaker describing her own memory — no companion is addressed at all.' },
      { label: 'Translate the survivor', content: '(B) in flat prose: *come walk with me through the orchard while the petals are still falling.* An imperative (*come, walk*), aimed at a companion (*with me*), about a beauty in the act of disappearing (*while all the white is falling*). Every element of the claim is performed, not merely evoked.' },
      { label: 'Answer', content: '**(B).** The register bait was (D) — the most beautiful, most mournful line on the page, performing the wrong act. Enactment beats atmosphere every time.' },
    ],
  },
  {
    type: 'checkpointQuestion',
    number: 2,
    question: 'A researcher claims that a town’s nighttime lights-off curfew reduced collisions between migrating birds and buildings. On a weaken item, which finding shapes qualify: (a) collisions rose after the curfew began, (b) collisions stayed exactly the same after the curfew began, (c) both?',
    answer: '**(c) — both.** **Why:** a claim asserting a relationship is contradicted by evidence of no relationship, so the null result in (b) damages the claim just as the reversal in (a) does. Weakening means being most inconsistent with the claim, not proving it false.',
  },
  {
    type: 'checkpointQuestion',
    number: 3,
    question: 'On a *which finding, if true* item, a student eliminates a choice with the reasoning “the passage never mentions this experiment.” Sound or not?',
    answer: 'Not sound. **Why:** *if true* stamps every choice as fact and opens the door to new information — none of the four findings is supposed to appear in the passage. The only live question is which way the finding pushes the named claim. Demanding passage verification here imports the closed-room rule into the open-door task.',
  },
  {
    type: 'checkpointQuestion',
    number: 4,
    question: 'A claim states that a poem’s speaker urges her neighbors to save the village elm. One choice is the poem’s most haunting line — a question: “Who among us will speak for the old tree?” Can it be the answer?',
    answer: 'No. **Why:** the claim’s verb is a condition the line must literally perform, and a question can wonder, accuse, or mourn — it does not tell anyone to do anything. Right mood, wrong act: the beautiful-line trap in miniature. The winning quotation will contain an actual appeal, even if it is plainer.',
  },
  {
    type: 'checkpointQuestion',
    number: 5,
    question: 'A passage claims a sports drink improves endurance *because of one ingredient, beet extract*. A choice reports that runners who drank the full formula ran longer than runners who drank water. Does it support the claim?',
    answer: 'Not directly. **Why:** the claim binds the effect to one component, and a whole-formula result cannot isolate that component — any of the drink’s ingredients could explain it. The qualifying finding isolates the mechanism: the extract alone produces the effect, or the formula *without* the extract fails to.',
  },
  { type: 'heading', content: 'One-page summary' },
  {
    type: 'table',
    title: 'The whole chapter in one place',
    headers: ['Step', 'The move', 'The trap it defeats'],
    rows: [
      ['1', 'Isolate the exact claim: stem verb + claim-holder, restated with every qualifier', 'The neighboring claim; qualifier-dropping'],
      ['2', 'Convert to a direction: more X → more Y, *because of Z*', 'Mechanism blindness — whole-package praise for a one-component claim'],
      ['3', 'Write the target before the choices: support = same arrows; weaken = flipped, null, or counterexample', 'The mirror image; choices-first shopping; rejecting the null'],
      ['4', 'Audit each choice to its final clause and bin it', 'The broken tail; the on-topic bystander'],
      ['5', 'Quotations: translate to flat prose, then check the claim’s verb and participants are performed', 'The beautiful line; right act, wrong subject'],
      ['Gate', 'One-question test on the survivor: if true, what happens to the claim?', 'Charitable story-building — if it needs your help, it is wrong'],
    ],
  },
  {
    type: 'text',
    content: 'That is the entire skill: isolate the one claim on trial, turn it into arrows, predict the shape of qualifying evidence before the choices can talk, audit every candidate to its last clause, and — on quotation items — demand that the line perform the claim instead of merely matching its mood. Topic proves nothing. Direction decides everything.',
  },
];
