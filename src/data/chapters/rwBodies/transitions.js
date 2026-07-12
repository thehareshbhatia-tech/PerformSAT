/**
 * Learn chapter body — Transitions (Expression of Ideas).
 *
 * Teach-from-zero textbook chapter following the locked template
 * (docs/LEARN_TEXTBOOK_OVERHAUL_PLAN.md): roadmap → Stage 1 foundations →
 * Stage 2 numbered method (step → right → wrong → why) → Stage 3 on-the-test
 * (decision flow, traps, worked examples, checkpoints, one-page summary).
 * Voice reference: src/data/chapters/rwBodies/boundaries.js.
 * Concept source: knowledge/graph/rw (transition-relationship-families,
 * transition-backward-anchoring, transition-predict-then-match,
 * connector-logic-families, writing-choice-set-classification,
 * writing-module-economics, window-widening).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * rwBodies/index.js — never import this from the chapter index.
 */

export const transitionsBlocks = [
  {
    type: 'text',
    content: 'A Transitions question hands you a short passage with a blank where a connecting word belongs, plus four choices — words like *however*, *therefore*, *for example*, *meanwhile*. The stem asks for the "most logical transition." Here is the fact that turns these from vocabulary guesses into fast, provable points: **a transition can do only three logical jobs**, and the two sentences around the blank tell you which job is needed *before you read a single choice*. The relationship is already printed on the page; the blank just asks you to name it.',
  },
  {
    type: 'steps',
    title: 'How this chapter is built',
    items: [
      '**Stage 1 · Foundations.** The three jobs a transition can do, which two sentences it actually connects, and why words in the same family are still not interchangeable.',
      '**Stage 2 · The method.** Six numbered steps that produce the answer before the choices get a vote — predict first, match second.',
      '**Stage 3 · On the test.** A decision flow, the traps built into the choice sets, worked examples, and a one-page summary.',
    ],
  },

  // ── Stage 1 · Foundations ──────────────────────────────────────────────
  { type: 'heading', content: 'Stage 1 · The three jobs a transition can do' },
  {
    type: 'text',
    content: 'A **transition** is a word or short phrase whose only cargo is logic: it carries no facts, only a signal about how two statements relate. And there are exactly **three** signals it can send. The next statement can **continue** the current line of thought, it can mark **cause and result** (one statement follows from the other), or it can **pivot** — push against what was just said. There is no fourth family. Every transition word on the test belongs to one of these three, so classifying the relationship between the two sentences instantly eliminates whole groups of choices at once.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'CONTINUE — keep going', content: '*The reef sheltered hundreds of fish species. Moreover, it buffered the coast from storm waves.* The second sentence adds another point in the same direction — the road keeps going.', variant: 'right' },
      { label: 'CAUSE/RESULT — this road leads here', content: '*The reef buffered the coast from storm waves. As a result, the towns behind it flooded less often.* The second sentence happens *because of* the first.', variant: 'right' },
      { label: 'CONTRAST/PIVOT — turn', content: '*The reef once sheltered hundreds of fish species. However, warming water has bleached most of it.* The second sentence pushes against the first — the road turns.', variant: 'right' },
    ],
  },
  {
    type: 'text',
    content: '**CONTINUE** is the biggest family because "keep going" comes in flavors: *adding* a point (*moreover, in addition, furthermore*), *illustrating* with an instance (*for example, for instance*), *restating* in new words (*in other words, that is*), *emphasizing* (*indeed, in fact*), *likening* (*similarly, likewise*), and *sequencing* in time (*then, later, today, eventually, subsequently*). All of them agree with the previous sentence; they differ in *how* they extend it. Those flavors — call them **sub-jobs** — are what separate the hard items from the easy ones.',
  },
  {
    type: 'text',
    content: '**CAUSE/RESULT** words carry an internal arrow, and the arrow has a direction. Most announce that *the result is coming*: *therefore, thus, as a result, consequently, accordingly*. A few announce that *the reason is coming*: *after all* says "here is why the last sentence is true." Same family, opposite arrows — and the test builds distractors out of exactly that difference, offering a reason-announcer where a result-announcer belongs.',
  },
  {
    type: 'text',
    content: '**CONTRAST/PIVOT** words also split in two. Plain contrast says the statements simply differ: *however, by contrast, on the other hand, instead, conversely*. **Concession** adds a shrug — "despite that fact, this is still true": *nevertheless, nonetheless, still, even so*. When two contrast words survive to the end of an item, that concession shade is usually the tiebreaker: ask whether the second sentence holds *in spite of* the first, or merely *differs from* it.',
  },
  {
    type: 'tip',
    content: 'Time-flavored phrases are not automatically sequence words. *Meanwhile* and *at the same time* often do contrast work — two things pulling in different directions at once — and true sequence words demand real chronology between the events. Classify a word by the job it is doing in the passage, not by what it literally mentions.',
  },
  {
    type: 'diagramRef',
    visualType: 'transitionMapDiagram',
    description: 'The transition families and their signal words — name the relationship between the two sentences, then pick from its family.',
  },

  { type: 'heading', content: 'A transition points backward' },
  {
    type: 'text',
    content: 'Which two statements does the transition connect? The answer is a fixed rule, and it is the invariant the hard items are built on: a transition connects its host sentence **backward to the previous sentence** — no matter where it physically sits. Sentence-initial with a comma, buried mid-sentence between two commas, or trailing at the end: all three placements mean exactly the same thing. Position is seating, not meaning. The one genuine exception: a transition preceded by exactly **one** comma may be joining its own sentence’s two halves — and only when the part before the comma stands alone as a complete statement. Otherwise, the hook is thrown backward.',
  },
  {
    type: 'strategyCard',
    title: 'The delete-and-compare test',
    content: 'Strike the transition out entirely, then state the two bare statements — the previous sentence and the host sentence — each in a few plain words. Name their relationship from content alone: keep going, result, or turn. If the two little fragments physically touching a mid-sentence transition make no sense on their own, that is your proof the word reaches back to the previous sentence rather than gluing its neighbors. Every step in Stage 2 leans on this one move.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — mid-sentence, still pointing back', content: '*The old map showed the river running straight. Surveyors, however, found three bends the mapmaker had ignored.* *However* contrasts the surveyors’ finding with the previous sentence’s straight-river claim. The commas are just where the word sits.', variant: 'right' },
      { label: 'Wrong — the local read', content: 'Treating *however* as connecting the words it touches — *Surveyors* and *found three bends* — as if the contrast lived inside one sentence. Those fragments are not statements at all. Delete the word: the two full sentences still state the contrast without it.', variant: 'wrong' },
    ],
  },
  {
    type: 'checkpointQuestion',
    number: 1,
    question: 'In the passage *"The vaccine was hailed as a breakthrough. Clinics in remote regions, however, struggled to store it at the required temperature,"* which two statements does *however* connect?',
    answer: 'The full second sentence and the full first sentence — the breakthrough praise versus the storage struggle. **Why:** a transition hooks backward to the previous sentence no matter where it sits; the mid-sentence commas change its seating, not its scope. Reading it as a link between *clinics* and *struggled* compares two fragments that are not statements.',
  },

  { type: 'heading', content: 'Within a family, words are not interchangeable' },
  {
    type: 'text',
    content: 'Naming the family is the first cut, not the last. *For example*, *in other words*, and *similarly* are all CONTINUE words — and they are not swappable. An example word demands that the next sentence *be an instance* of the previous claim. A restating word demands the same idea in new clothing. A likening word demands a second, comparable thing. The word states a precise claim about what the next sentence is; if the sentence is not that thing, the word is wrong even though its family is right.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — the sentence is an instance', content: '*Some desert plants store water in swollen stems. For example, the saguaro cactus can hold hundreds of liters after a single rain.* The saguaro *is* a desert plant storing water in a swollen stem — a true instance, so the example word fits.', variant: 'right' },
      { label: 'Wrong — same family, wrong job', content: '*Some desert plants store water in swollen stems. For example, others survive by shedding their leaves.* Shedding leaves is a *different* strategy, not an instance of stem storage. The relationship is addition, so the slot wanted an adder like *moreover* — the example word makes a false promise.', variant: 'wrong' },
    ],
  },

  // ── Stage 2 · The method ───────────────────────────────────────────────
  { type: 'heading', content: 'Stage 2 · The method' },
  {
    type: 'text',
    content: 'The expert move is to **write the answer before you shop for it**: decide what relationship the two sentences have, turn it into an order — "I need a result word" — and only then open the choices. The anti-method is plugging each choice into the blank and judging by feel. The distractors are engineered against exactly that habit: near-family options that *sound* fine in isolation get a fair hearing they do not deserve. A prediction never lets them audition. Six steps, in order.',
  },

  { type: 'heading', content: 'Step 1 — Read the two sentences in scope' },
  {
    type: 'text',
    content: 'Read the sentence *before* the blank and the *entire* host sentence — from its true start to its final period, even when the blank sits mid-sentence. The evidence that decides a transition never lives in the three words around the blank; it lives in the two complete statements, and one of them is always upstream of where your eye landed. Widen the window across the sentence boundary before any judgment happens.',
  },

  { type: 'heading', content: 'Step 2 — State each sentence in a few plain words' },
  {
    type: 'text',
    content: 'Compress each sentence to a one-clause gist in your own words. The passage’s technical dressing — enzyme names, treaty dates, orbital mechanics — is noise: no transition item requires knowing the science or history it is wrapped in. The relationship is read off the gists, never off the surface wording. If your paraphrase still contains the jargon, it is not a gist yet.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — a usable gist', content: '*Passage sentence:* "The enzyme lost nearly all catalytic activity when researchers raised the solution above 40 degrees." *Gist:* heat broke it. Short, plain, and ready to compare.', variant: 'right' },
      { label: 'Wrong — jargon mush', content: '*Gist attempt:* "something about catalytic activity and a 40-degree solution threshold." Half-understood detail is carried along instead of translated, so the relationship call that follows is built on mush.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Step 3 — Name the relationship before the choices' },
  {
    type: 'text',
    content: 'Ask of the two gists: does the second **keep going**, is it a **result** (or a reason), or does it **turn**? Say the family out loud in your head, and sharpen it into a shopping order when you can — "I need an example word," "I need a result word." That prediction is the answer key. The choices exist only to be checked against it.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — predict, then match', content: '*Gists:* quolls died when they ate the toxic toads / trained quolls left the toads alone. Second statement defies the first — a pivot. Order placed: one contrast word, please. The scan takes seconds and the near-misses never get a hearing.', variant: 'right' },
      { label: 'Wrong — plug and listen', content: 'Reading the blank four times, once per choice: "*however* sounds fine… *indeed* also sounds fine…" Each candidate gets auditioned by ear, a story gets invented to make a near-miss plausible, and the item takes triple the time with worse odds.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Step 4 — Eliminate everything in the wrong family' },
  {
    type: 'text',
    content: 'Strike choices in groups, not one by one. If the prediction says *pivot*, every CONTINUE word and every CAUSE/RESULT word dies in a single sweep, whatever its exact shade. Most items lose two or three choices at this step. And if no choice matches your precise prediction, this is the fallback that replaces panic: eliminate at the family level and decide among whatever survives.',
  },

  { type: 'heading', content: 'Step 5 — Pick within the family by precision' },
  {
    type: 'text',
    content: 'When two survivors share a family, the sub-job decides. Is the next sentence an *instance* (example word), a *rewording* (restater), a *second like thing* (likener), or just *more* (adder)? For a cause pick, run the arrow check: label each statement **C** (cause) or **R** (result), then confirm the word announces the correct side — *therefore* introduces the result, *after all* introduces the reason. For two contrast survivors, ask whether the meaning is "despite that" (concession) or plain difference.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — arrow points the right way', content: '*The dye fades quickly in sunlight. Therefore, the museum displays the tapestries in near-darkness.* Cause: fading. Result: dark display. *Therefore* announces a result, and a result follows.', variant: 'right' },
      { label: 'Wrong — reversed arrow', content: '*The museum displays the tapestries in near-darkness. Therefore, the dye fades quickly in sunlight.* The darkness does not cause the fading — the logic runs backward. The family was right; the direction was not. The C/R labels catch what the ear misses.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Step 6 — Re-read with the winner installed' },
  {
    type: 'text',
    content: 'Drop the surviving word into the blank and read the full two-sentence span once. This is the only moment in the whole method where "does it read smoothly?" gets a vote — and only as a final confirmation of a decision the logic already made. If the re-read grinds, the usual culprit is scope: recheck *which* two statements the blank connects (Step 1), not your family call.',
  },

  // ── Stage 3 · On the test ──────────────────────────────────────────────
  { type: 'heading', content: 'Stage 3 · On the test' },
  {
    type: 'text',
    content: 'The stem is always a version of *"Which choice completes the text with the most logical transition?"* — but you do not even need it, because **the choice set is the label**: four connective words means a logic question, and all four choices are presumed grammatically fine. Nothing about the passage’s topic, length, or difficulty of vocabulary changes the task. A classified transition item resolves in one pass of the method, and the seconds it does not consume are seconds banked for the reading questions that need them.',
  },
  {
    type: 'steps',
    title: 'The decision flow',
    items: [
      'Choices are connective words → logic question. Presume all four are grammatical; the passage topic is noise.',
      'Fix the scope: host sentence ↔ previous sentence, wherever the blank sits. One comma only? Check whether the pre-comma chunk stands alone before switching scope inside the sentence.',
      'Gist both statements in plain words, then name the family — continue, cause/result, or pivot — before looking down at the choices.',
      'Sweep away the wrong families, and cancel any same-family twins among the remaining choices.',
      'If survivors share a family, pick by sub-job; for a cause word, run the C/R arrow check.',
      'Re-insert the winner and read the full span once. Smooth read = done; a grinding read means recheck scope, not the family.',
    ],
  },
  {
    type: 'keyInsight',
    content: '**Choices from the same family cancel each other.** A multiple-choice item has one right answer, so two choices doing the identical logical job cannot both be it — two plain-contrast twins like *however* and *by contrast* die together, whichever one sounds better. On many items this check alone deletes half the choices before any real work. The exception that proves the rule: when *all four* choices share a family, the item is testing sub-jobs, and precision — instance vs. addition vs. restatement — is the whole question.',
  },
  {
    type: 'trapCard',
    title: 'The sounds-formal pick',
    wrong: '**The sounds-formal pick.** Two choices share a family, and you take the one that sounds more academic — *nevertheless* over *for example* — because a formal register feels like the safer bet on a test.',
    correction: 'Words in the same family are separated by job, not by formality. An example word demands an instance; a concession word demands "despite that"; no amount of polish substitutes for doing the right job. Ask what the next sentence *is* — an instance, a restatement, a result — and pick the word whose claim matches. Register never decides a transition item.',
  },
  {
    type: 'trapCard',
    title: 'The forward read',
    wrong: '**The forward read.** You justify a choice by what comes *after* the host sentence — "it’s setting up the next paragraph" — and pick the word that fits that forward story.',
    correction: 'The hook is thrown backward: a transition relates its host sentence to the *previous* sentence, and the following sentence is out of scope. Cover everything after the host sentence with your hand — the item still resolves. If your explanation quotes the next sentence as evidence, you are answering a question the test did not ask.',
  },
  {
    type: 'trapCard',
    title: 'The safe add-on',
    wrong: '**The safe add-on.** Unsure of the relationship, you reach for *in addition* or *moreover* because adders fit loosely almost anywhere and feel impossible to get wrong.',
    correction: 'An adder is not neutral — it asserts that the second sentence piles on a new point in the same direction. If the sentences actually clash, or one causes the other, the adder papers over the real relationship and is flatly wrong. The loose fit is the trap: name the relationship first (Step 3), and the default urge disappears because an order has already been placed.',
  },
  {
    type: 'trapCard',
    title: 'The reversed arrow',
    wrong: '**The reversed arrow.** You correctly smell cause-and-effect between the sentences, so any causal word looks right — and you grab one that announces the wrong side, a reason-word like *after all* in a slot that needed the result-word *therefore*.',
    correction: 'Detecting causality is half the job; the arrow’s direction is the other half. Label the two statements C (cause) and R (result) before touching the choices, then check which side the candidate word announces: *therefore/thus/as a result* introduce the result, *after all* introduces the reason. A reversed arrow reads almost right — the labels catch it, the ear rarely does.',
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Marisol spent two summers testing drought-resistant grasses on her family’s ranch, logging which varieties survived on the least water. ______ she enrolled in an agronomy program to study the science behind what she had observed.\n\nWhich choice completes the text with the most logical transition?\n(A) However,\n(B) Eventually,\n(C) By contrast,\n(D) In other words,',
    steps: [
      { label: 'Scope and gist', content: 'Previous sentence: she ran her own field experiments for two summers. Host sentence: she enrolled in a formal program. Two events on one line of thought, in time order.' },
      { label: 'Name the family', content: 'The second statement neither opposes the first nor results from it in a strict cause sense — it continues the story, later in time. Order placed: a CONTINUE word with the sequence sub-job.' },
      { label: 'Sweep the families', content: '(A) *However* and (C) *By contrast* are both plain-contrast words — same family, same job, so they cancel each other on sight. (D) *In other words* promises a restatement, but enrolling in a program does not reword the summers of testing.' },
      { label: 'Answer', content: '**(B) Eventually** — a sequence word for the next event on the same line. The twin-cancellation check alone halved the choices before any fine reading.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'In the 1960s, most weather forecasts relied on human analysts sketching pressure maps by hand from scattered station reports. ______ nearly every national forecast is generated by supercomputers running physics-based models that ingest millions of observations an hour.\n\nWhich choice completes the text with the most logical transition?\n(A) In addition,\n(B) Therefore,\n(C) Today,\n(D) For example,',
    steps: [
      { label: 'Scope and gist', content: 'Previous sentence: in the 1960s, forecasting was done by hand — note the past tense. Host sentence: forecasts *are generated* by supercomputers — present tense. The gists are "back then, by hand" and "now, by machine."' },
      { label: 'Name the family', content: 'The passage walks one topic from a past state to a present state: CONTINUE, sequence sub-job. There is a quiet then-versus-now flavor, but the sentences narrate a progression rather than argue an opposition.' },
      { label: 'Screen the survivors', content: '(A) *In addition* claims a second same-direction point and misses the time shift entirely. (B) *Therefore* claims the supercomputers exist *because* analysts once sketched maps — no such cause. (D) *For example* claims the second sentence is an instance of the first; it is a replacement, not an instance.' },
      { label: 'Answer', content: '**(C) Today** — the sequence word that carries the passage from the past practice to the present one. The tense clash between the two verbs was the whole signal.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Ecologist Rafaela Duarte argues that restored wetlands repay their cost many times over in ways that flood-control budgets never capture. ______ her team’s surveys found that a single restored marsh in the delta now supports 40 percent more nesting bird species than it did a decade ago.\n\nWhich choice completes the text with the most logical transition?\n(A) In addition,\n(B) For example,\n(C) Similarly,\n(D) In other words,',
    steps: [
      { label: 'Read the choice set first', content: 'All four choices are CONTINUE words. Family-level elimination is dead on arrival — the item is testing sub-jobs, and the prediction has to be precise: *what exactly is the second sentence doing to the first?*' },
      { label: 'Scope and gist', content: 'Previous sentence: Duarte claims restored wetlands deliver uncounted benefits. Host sentence: one specific marsh, one specific measured gain — 40 percent more nesting species. A general claim, then one concrete case of it.' },
      { label: 'Name the sub-job', content: 'The survey result *is an instance* of the uncounted benefits Duarte describes — evidence offered for the claim. (A) *In addition* would make it a separate new point rather than support. (C) *Similarly* needs a second, parallel thing being likened; there is only one claim here. (D) *In other words* promises the same idea restated, but a specific measurement is not a rewording of a general argument.' },
      { label: 'Answer', content: '**(B) For example** — the only choice whose precise promise (an instance is coming) matches what the second sentence actually is. On all-same-family items, the family gets you nothing; the sub-job is the entire question.' },
    ],
  },
  {
    type: 'checkpointQuestion',
    number: 2,
    question: 'Sentence 1: *"The bridge was expected to take five years to build."* Sentence 2: *"______ it opened in under three."* Which family does the blank need, and how do you know before seeing any choices?',
    answer: 'CONTRAST/PIVOT — the outcome defies the stated expectation. **Why:** the gists are "expected: five years" and "actual: under three." The second statement pushes against the first rather than extending it or resulting from it, so every CONTINUE and CAUSE/RESULT choice dies before the fine reading starts.',
  },
  {
    type: 'checkpointQuestion',
    number: 3,
    question: 'When is *therefore* the correct pick — and what extra check does it need even after you have confirmed the sentences are cause-and-effect?',
    answer: '*Therefore* is right only when the host sentence is the **result** of the previous one — and the extra check is the arrow: label the statements C and R and confirm the result is the one arriving. **Why:** cause-family words split by direction. *Therefore* announces a result; *after all* announces a reason. Detecting causality without checking the arrow is how the reversed-arrow distractor gets picked.',
  },
  {
    type: 'checkpointQuestion',
    number: 4,
    question: 'Scanning a choice set, you spot both *however* and *by contrast* among the four options. Before reading the passage closely, what do you know?',
    answer: '**Both are almost certainly wrong.** They are plain-contrast twins doing the identical logical job, and only one choice can be correct — so they cancel, and the answer lives in the other two options. **Why:** one right answer is a structural guarantee of the format; two logically interchangeable choices cannot share it. The only caution: confirm they truly are twins — a concession word like *nevertheless* is not the same job as plain *by contrast*.',
  },
  {
    type: 'checkpointQuestion',
    number: 5,
    question: 'A blank sits mid-sentence, between two commas, halfway through the second sentence of the passage. Which two statements decide the answer?',
    answer: 'The full second sentence and the full first sentence — exactly as if the transition sat at the front. **Why:** placement is seating, not meaning; the hook is thrown backward regardless. The single exception is a transition preceded by exactly *one* comma where the pre-comma chunk stands alone as a complete statement — only then does the comparison move inside the sentence.',
  },
  { type: 'heading', content: 'One-page summary' },
  {
    type: 'table',
    title: 'The whole chapter in one place',
    headers: ['Family', 'The job it does', 'Members'],
    rows: [
      ['Continue · add', 'A new point in the same direction', 'moreover, in addition, furthermore, also'],
      ['Continue · illustrate', 'A specific instance of the previous claim', 'for example, for instance, specifically'],
      ['Continue · restate', 'The same idea in new words', 'in other words, that is'],
      ['Continue · emphasize', 'The same idea, turned up', 'indeed, in fact'],
      ['Continue · liken', 'A second, comparable thing', 'similarly, likewise'],
      ['Continue · sequence', 'The next event in real time order', 'then, later, today, eventually, subsequently'],
      ['Cause/Result · result ahead', 'The host sentence follows from the previous one', 'therefore, thus, as a result, consequently, accordingly'],
      ['Cause/Result · reason ahead', 'The host sentence explains why the previous one is true', 'after all'],
      ['Contrast · plain pivot', 'The statements pull in different directions', 'however, by contrast, on the other hand, instead, conversely'],
      ['Contrast · concession', 'True despite the previous fact', 'nevertheless, nonetheless, still, even so'],
    ],
  },
  {
    type: 'text',
    content: 'That is the entire skill: scope backward to the right two sentences, gist them in plain words, name the job before the choices get a vote, sweep the wrong families, settle ties by sub-job and arrow direction, and confirm with one re-read. Three jobs, six steps, no ear required.',
  },
];
