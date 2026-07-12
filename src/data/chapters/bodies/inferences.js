/**
 * Learn chapter body — Inferences (Information and Ideas).
 *
 * Teach-from-zero textbook chapter following the locked template
 * (docs/LEARN_TEXTBOOK_OVERHAUL_PLAN.md): roadmap → Stage 1 foundations →
 * Stage 2 numbered method (step → right → wrong → why) → Stage 3 on-the-test
 * (decision flow, traps, worked examples, checkpoints, one-page summary).
 * Voice reference: rwBodies/boundaries.js (the approved exemplar).
 * Concept source: knowledge/graph/rw (entailment-moves-and-boundaries,
 * logical-text-completion, premise-completion-vs-new-evidence,
 * topical-vs-logical-relevance, supported-not-stated,
 * argument-spine-decomposition, reference-compression-tracking,
 * predict-then-verify, distractor-species-taxonomy).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * rwBodies/index.js — never import this from the chapter index.
 */

export const inferencesBlocks = [
  {
    type: 'text',
    content: 'An Inferences question ends the passage mid-thought, at a blank, and asks: *"Which choice most logically completes the text?"* The name misleads. In school, an inference is a thoughtful guess — reading between the lines, adding what the author probably meant. On this test, an inference is the opposite: **the conclusion the stated facts force.** Nothing between the lines counts. Every fact needed for the answer is already on the page, and the right choice is the smallest possible step those facts leave you no room to refuse.',
  },
  {
    type: 'steps',
    title: 'How this chapter is built',
    items: [
      '**Stage 1 · Foundations.** What "inference" actually means here, the claim–evidence–logic anatomy of the mini-passage, and why the right answer is never a quote.',
      '**Stage 2 · The method.** Four numbered steps, each in the same shape: the step, a right example, a wrong example, and the why.',
      '**Stage 3 · On the test.** A decision flow, the traps the choices are built from, worked examples, checkpoints, and a one-page summary.',
    ],
  },

  // ── Stage 1 · Foundations ──────────────────────────────────────────────
  { type: 'heading', content: 'Stage 1 · What counts as an inference here' },
  {
    type: 'text',
    content: 'Think of the passage as a **closed room**. Everything you may use is inside it, and nothing may come in from outside — not world knowledge, not plausibility, not what a reasonable person would add. A statement is a valid inference only if it is **entailed**: the facts in the room cannot all be true while the statement is false. Logicians call this relationship entailment; the test calls it "most logically completes." A statement the facts merely *allow* — one that could be true, fits the vibe, sounds smart — is not an inference. It is a guess wearing one.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Forced — a real inference', content: '*Only two of the museum’s twelve galleries are climate-controlled, and the loan agreement requires climate control for every borrowed painting.* Forced: borrowed paintings can hang in at most two of the galleries. Deny that, and one of the stated facts breaks.', variant: 'right' },
      { label: 'Allowed — not an inference', content: 'From the same facts: *the museum should renovate its other galleries.* Reasonable? Sure. But every stated fact can be true while this is false — maybe renovation is impossible, maybe the museum never borrows again. The facts permit it; they do not force it.', variant: 'wrong' },
    ],
  },
  {
    type: 'text',
    content: 'A short list of moves is always licensed inside the room, because each one is just a stated fact viewed from the other side. A superlative entails its complement: *the most effective method* means every other method is less effective. A restriction entails its outside: *only when wet* means not when dry. A percentage entails its remainder: *14 percent are native species* means 86 percent are not. And negations resolve: *not impossible* means possible; *not younger than* means at least as old. Just as fixed is the **fence** — what stated facts can never yield: someone’s *motive*, what anyone *should* do, that a method someone used is the *best* or *only* method (using a thing proves nothing about its merit), or any claim about other times, places, or groups than the ones the passage names.',
  },
  {
    type: 'strategyCard',
    title: 'The forced-or-merely-allowed test',
    content: 'Read a candidate ending back into the blank and ask one question: **could every stated fact be true while this sentence is false?** If yes, the facts do not force it — cut it, however sensible it sounds. If no — if denying the sentence breaks something the passage said — it is entailed. One warning about how the right answer feels: because it is the *smallest* licensed step, it often feels obvious, even boring. That feeling is the design, not a red flag.',
  },
  {
    type: 'checkpointQuestion',
    number: 1,
    question: 'A passage states: *Of the forty applicants, only three held a commercial pilot license.* Which is a valid inference: (a) most of the applicants lacked a commercial pilot license, (b) the job required a pilot license, (c) the three licensed applicants were the strongest candidates?',
    answer: 'Only **(a)**. Thirty-seven of forty lacked the license, and thirty-seven of forty is most — that is the percentage-complement move, forced by the numbers. **Why:** (b) invents a requirement the passage never states, and (c) jumps from *holding a license* to *being strongest* — merit the facts never assign. Both sit outside the fence.',
  },

  { type: 'heading', content: 'The passage is a tiny argument' },
  {
    type: 'text',
    content: 'Every one of these passages is a miniature argument with three working parts. The **claim** is what someone asserts is true — it often arrives late, even in the final sentence, flagged by verbs like *proposes*, *concludes*, or *suggests*. The **evidence** is the observation offered for the claim. The **logic** (the mechanism) is the specific story connecting them — *which* factor is said to carry the effect. Everything else — names, dates, credentials, scenery — is a coat the argument wears. Wrong answers are sewn almost entirely from the coat, so the entry move is to strip it off and hold only the skeleton.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Spine reading', content: '*Marine biologist Ana Ferreira spent three seasons cataloging sponges in the Azores. Her team found that sponges near thermal vents filtered water twice as fast as those in cooler zones, and she proposes that the vents’ mineral output supplies the extra energy.* Spine: claim = minerals drive faster filtering (last sentence); evidence = the twice-as-fast finding; background = who, where, three seasons.', variant: 'right' },
      { label: 'Coat reading', content: 'A reader who anchors on the opening — *a biologist spent three seasons in the Azores* — judges every choice against scenery. A choice about fieldwork duration or the Azores now feels supported, and the actual claim about minerals goes unguarded.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Supported, not stated' },
  {
    type: 'text',
    content: 'The proof for the right answer is always in the passage — but the answer itself almost never reuses the passage’s words. The credited choice **restates** the forced idea in fresh, often more general language, and linking the two phrasings is part of what is being tested. Two consequences follow. First, treat a choice that echoes the passage verbatim with suspicion, not comfort: recycled wording is cheap bait, and the distortion hides in the *relationship* between the recycled pieces. Second, grade every choice by its weakest word. A choice is a bundle of small claims — a subject at a scope, a verb with a direction, a modifier at an intensity — and a single unsupported word sinks the whole thing.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — same meaning, new words', content: 'Passage: *The committee approved the design only after the architect agreed to preserve the theater’s original facade.* Credited paraphrase: *approval was conditional on keeping part of the existing structure.* Not one content word survives, but every claim is backed.', variant: 'right' },
      { label: 'Wrong — same words, scrambled meaning', content: '*The architect approved the committee’s design for the original facade.* Every noun is recycled from the passage — and who approved what has been quietly swapped. Familiar vocabulary is doing the work the logic cannot.', variant: 'wrong' },
    ],
  },

  // ── Stage 2 · The method ───────────────────────────────────────────────
  { type: 'heading', content: 'Stage 2 · The method' },
  {
    type: 'text',
    content: 'Four steps handle every completion item, and they run in a fixed order for a reason: the passage is trustworthy and the choices are adversarial, so the work happens *before* the choices get to speak. Each step follows the same shape: the **step**, a **right** example, a **wrong** example, and the **why**.',
  },

  { type: 'heading', content: 'Step 1 — Read the passage as an argument' },
  {
    type: 'text',
    content: 'Find the claim, the evidence, and the logic; demote everything else to background. Compress the claim into a few words of your own — for an empirical claim, an arrow works: *shade up, yield down*. One more chore belongs to this step: **redeem the pointer phrases.** Words like *this discrepancy*, *such a strategy*, or *that possibility* are baggage-claim tickets — one phrase standing in for a whole earlier idea, and the luggage is always behind you. Back up to the earlier sentence and restate the idea in full; hard passages make the final sentence unreadable until you do.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — the ticket is redeemed', content: '*Tree-ring records put the drought at four years; settlement records show the village was abandoned after two. This discrepancy has led some archaeologists to suspect that ______.* A spine reader unpacks *this discrepancy* first: the village emptied two years before the drought ended — so something other than the drought’s full length drove the abandonment. Now the blank is workable.', variant: 'right' },
      { label: 'Wrong — the ticket is stared at', content: 'A rushed reader hits *this discrepancy*, does not back up, and treats the blank as free-standing: "archaeologists suspect... something about droughts?" Every choice mentioning droughts now looks plausible, because the actual gap — the two-year mismatch — was never loaded into the question.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Step 2 — Name the gap the blank must fill' },
  {
    type: 'text',
    content: 'The words touching the blank dictate what *kind* of statement belongs in it, before any content is considered. A consequence marker — *therefore, thus, this suggests that* — demands the argument’s conclusion. A contrast marker — *however, but, by contrast* — demands the opposite pole of what was just set up. An illustration marker — *for example, for instance* — demands a specific instance of the idea just stated, not another conclusion. And when the blank ends a list, the demand is a fourth kind: another item sharing the *exact property* the listed items share, not something merely on the same theme. Naming the gap type first eliminates whole choices without reading them closely.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — the marker is obeyed', content: '*Early transcriptions of Appalachian ballads preserved the melodies with care; however, ______.* The semicolon-plus-*however* demands a contrast with careful preservation. A completion like *the lyrics were freely rewritten to suit the collectors’ tastes* delivers it: care on one side, liberties on the other.', variant: 'right' },
      { label: 'Wrong — the marker is ignored', content: '*...however, the melodies were documented with remarkable accuracy.* As a sentence, unobjectionable. As a completion, impossible: it continues the pre-pivot idea in the slot that *however* reserved for its opposite. Wrong kind of statement, regardless of content.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Step 3 — Predict before you read the choices' },
  {
    type: 'text',
    content: 'Derive the completion yourself — ten words or fewer, rough is fine — before a single choice gets read. The order matters because distractors are engineered to sound plausible to a mind with no prior commitment; reading them cold hands the test the power to frame what seems possible. With a prediction in hand, the choices are graded against *your* standard instead of against each other. A prediction is a compass, not a thesis: if nothing matches it, distrust the prediction before the test — re-read the stem, widen the window, revise.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — predict, then shop', content: '*A bakery doubled its prices and sold the same number of loaves; the owner concluded that her regular customers ______.* Prediction, jotted in five words: *aren’t deciding based on price.* Now the choice *valued the bread over its cost* announces itself as the meaning-match, and the rest can be dismissed in seconds.', variant: 'right' },
      { label: 'Wrong — shop the menu cold', content: 'The same reader, skipping the prediction, meets four polished sentences: one says the owner *had underpriced her bread for years* (plausible, never established), another that she *ought to raise prices again* (a should-claim — outside the fence). Each gets separately rationalized against the passage, and one derivation has become four verification jobs run under time pressure.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Step 4 — Verify the survivor word by word' },
  {
    type: 'text',
    content: 'The finalist earns a closing audit: does the passage support **this subject**, at **this scope**, with the verb pointing in **this direction**, at **this intensity**? Grade the choice by its weakest word. The audit exists because the hardest distractors are hybrids — several familiar, correct pieces welded to one false element — and gist-level checking waves them through. When two choices survive, find the one thing each claims that the other does not, and check *that difference* against the passage; never resolve a tie by re-reading the two choices until one feels better.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — every word binds', content: 'Passage: *in the trial, patients who walked thirty minutes daily reported better sleep than those who did not.* Choice: *daily walking was associated with improved sleep reports among the trial’s patients.* Subject, scope, direction, intensity — each word traces back to a passage word.', variant: 'right' },
      { label: 'Wrong — one word sinks it', content: '*Daily walking improves sleep for adults of every age.* Three of the four claims are fine; *every age* is supported by nothing, and *improves* upgrades "reported better" from self-report to proven effect. The weakest words lose, so the choice loses.', variant: 'wrong' },
    ],
  },

  // ── Stage 3 · On the test ──────────────────────────────────────────────
  { type: 'heading', content: 'Stage 3 · On the test' },
  {
    type: 'text',
    content: 'One classification comes before everything else. The stem *"Which choice most logically completes the text?"* locks the closed room: every needed fact is on the page, and bringing in outside information is the fatal error. A different stem — *"Which finding, if true, would most directly support..."* — opens the door: there the choices bring **new** facts whose truth is granted, and rejecting one because "the passage never says that" is the fatal error. Same passage anatomy, opposite rulebooks. This chapter’s rules govern the closed room; the if-true stems belong to Command of Evidence.',
  },
  {
    type: 'steps',
    title: 'The decision flow',
    items: [
      'Confirm the stem: *most logically completes* → closed room. Nothing enters from outside; nothing needed is missing.',
      'Strip the passage to its spine — claim, evidence, logic — and redeem every pointer phrase near the blank (Step 1).',
      'Name the gap: does the marker at the blank demand a conclusion, a contrast, an instance, or another list item (Step 2)?',
      'Predict the completion in ten words or fewer before reading any choice (Step 3).',
      'Shop for the meaning-match, then audit its weakest word — subject, scope, direction, intensity — and run the fence checklist (no motives, no *should*, no *best/only* from mere use, no new times, places, or groups) on whatever survives (Step 4).',
    ],
  },
  {
    type: 'keyInsight',
    content: '**About the topic is not about the argument.** A choice is *topically* relevant when it mentions the passage’s people, findings, or theme; it is *logically* relevant only when its truth changes the status of the claim at the blank. The most reliable distractor on these items has full topical relevance and zero logical relevance — a vivid, accurate, on-topic statement the argument never needed. One gate defeats it: ask of any tempting choice, *if this is true, what happens to the argument?* If the honest answer is "nothing," it is garnish, no matter how good it looks.',
  },
  {
    type: 'trapCard',
    title: 'The reasonable-but-unlicensed leap',
    wrong: '**The reasonable-but-unlicensed leap.** The correct completion feels too small — too obvious to be worth four choices — so you reach for the insightful-sounding option instead: a motive, a prediction, a recommendation, a real-world consequence. It reads like what a good student would write.',
    correction: 'That instinct is imported from English class, where adding to the text earns credit; here it is the engineered miss. Run the forced-or-merely-allowed test: if the facts can all be true while the choice is false, the choice is out. The credited answer is allowed to feel boring — it is the smallest licensed step past the evidence, by design.',
  },
  {
    type: 'trapCard',
    title: 'The word recycler',
    wrong: '**The word recycler.** A choice reuses two or three exact phrases from the passage, and the familiarity registers as proof — "it says that right here." You pick it without noticing that the recycled pieces have been rewired: cause swapped with effect, one actor’s result credited to another, the direction of a comparison flipped.',
    correction: 'Recycled vocabulary is the cheapest thing a question writer can plant. When a choice sounds like the passage, slow down and audit the *relationship* between the echoed pieces — who did what, which way the effect runs. Expect the credited answer to paraphrase: same meaning, different words. Same words, different meaning is the signature of the trap.',
  },
  {
    type: 'trapCard',
    title: 'The scope stretcher',
    wrong: '**The scope stretcher.** The passage established something about one study, one species, one town, one decade — and a choice quietly widens it: *every*, *always*, *all such cases*, *people in general*. Because the direction of the claim is right, the stretch slips past a gist-level check.',
    correction: 'Match the choice’s scope against the passage’s stated population and time window, word for word. Evidence about *this* case licenses a conclusion about *this* case; a universal needs universal support, which a five-sentence passage never provides. Underline the widening word and demand the passage words that earned it — silence means cut.',
  },
  {
    type: 'trapCard',
    title: 'The entity halo',
    wrong: '**The entity halo.** A choice names the passage’s researcher, cites its study, mentions its species — and that glow of on-topicness reads as support. Under time pressure, *mentioned in the passage* becomes a stand-in for *follows from the passage*, and the vivid detail wins.',
    correction: 'Mention is not bearing. Run the one-question gate: if this choice is true, what happens to the argument at the blank? A statement that leaves the argument exactly where it stood is garnish, however accurate. Expect the credited answer to sometimes be the topically drab one — plain words, no famous names — while the bait glitters.',
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Some botanists assumed that the saguaro cactus’s shallow roots left it vulnerable in high winds. But surveys conducted after a severe windstorm in the Sonoran Desert found that the saguaros with the widest, shallowest root networks were largely still standing, while many deeper-rooted plants nearby had toppled. The surveys suggest that ______\n\n(A) a wide, shallow root network can anchor a saguaro at least as effectively as deeper roots anchor other plants.\n(B) saguaros are unable to survive outside the Sonoran Desert.\n(C) the windstorm was the strongest ever recorded in the region.\n(D) deep roots provide desert plants with no advantages of any kind.',
    steps: [
      { label: 'Strip to the spine', content: 'Old assumption: shallow roots = vulnerable. Evidence: after a real storm, the shallow-wide-rooted saguaros stood; deeper-rooted neighbors fell. The *But* flags that the evidence pushes against the assumption.' },
      { label: 'Name the gap', content: '*The surveys suggest that* is a consequence marker — the blank takes the conclusion the survey evidence forces, nothing more.' },
      { label: 'Predict', content: 'Roughly: *shallow-wide roots hold up fine in wind — maybe better than deep ones.* Small, hedged, tied to the storm evidence.' },
      { label: 'Answer', content: '**(A)** matches the prediction with careful scope (*can anchor... at least as effectively*). (B) invents a claim about survival elsewhere — outside the room. (C) adds a superlative about the storm no fact supports. (D) stretches one storm’s result into *no advantages of any kind* — the scope stretcher in full costume.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A common assumption holds that adding streetlights to a park always lowers crime. But when the city of Halveston installed bright lighting along its central greenway, reported thefts there did not fall — and during the newly lit hours, they slightly rose. Researchers noted that the lighting also drew far more late-night visitors to the greenway than before. This suggests that the rise in reported thefts may have had less to do with the lighting itself than with ______\n\n(A) the growing number of people using the greenway during the newly lit hours.\n(B) the city’s failure to install enough lights along the greenway.\n(C) a citywide increase in theft unrelated to the greenway.\n(D) the tendency of bright lighting to encourage crime in public parks generally.',
    steps: [
      { label: 'Strip to the spine', content: 'Facts: lights went in; thefts did not fall and slightly rose in the lit hours; the lit hours also drew far more visitors. The *But* marks the result defying the assumption.' },
      { label: 'Name the gap', content: 'The frame *less to do with the lighting itself than with ______* demands the alternative driver — some factor other than the lights that the passage itself supplies.' },
      { label: 'Predict', content: 'The only other factor on the page is the crowd: *all the extra people out there at night.* More visitors means more targets, more pockets, more opportunity.' },
      { label: 'Answer', content: '**(A)** — the one completion built from a stated fact. (B) reverses the setup: the lighting was *bright*, and insufficiency is never mentioned. (C) is plausible in the world but supported by nothing in the room — the thefts rose *there*, in *those hours*. (D) turns one greenway’s result into a rule about parks *generally*, and reads the passage’s own hedge (*less to do with the lighting itself*) backwards.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Historians long treated the ledgers of Venice’s glassmakers’ guild as records of sales alone. Yet the ledgers also list fines assessed against members who shared furnace techniques with outsiders — and these entries grow denser in precisely the decades when workshops in Bohemia began producing comparable glass. Some scholars caution against reading this pattern as proof of successful espionage: a rise in fines shows that the guild grew more anxious about leaks, not that leaks occurred. Even so, the pattern makes one conclusion difficult to avoid: the guild itself believed that ______\n\n(A) its furnace techniques had already been stolen by Bohemian workshops.\n(B) its technical secrets were increasingly at risk of reaching competitors.\n(C) fines were the most effective available means of protecting trade secrets.\n(D) Bohemian glass had become superior to its own.',
    steps: [
      { label: 'Redeem the pointer phrase', content: '*This pattern* is a baggage-claim ticket. Back up: the pattern = fines for sharing techniques grow denser exactly when Bohemian rivals start producing comparable glass. The blank cannot be judged until that is spelled out.' },
      { label: 'Respect the stated fence', content: 'The scholars’ caution is itself a premise: rising fines prove growing *anxiety* about leaks, not that leaks *occurred*. Any completion asserting actual theft has been ruled out by the passage’s own words.' },
      { label: 'Predict', content: 'The stem asks what the guild *believed*. Anxiety plus escalating punishment, timed to a rival’s rise: the guild believed its secrets were in growing danger of getting out.' },
      { label: 'Audit the finalists', content: '(A) claims theft *had already* happened — precisely the step the caution forbids. (C) leaps from *the guild used fines* to *fines were the most effective means*: use proves nothing about merit. (D) upgrades *comparable* to *superior*, an intensity the passage never earns.' },
      { label: 'Answer', content: '**(B)** — it stays inside the anxiety the fines demonstrate, matches the timing evidence, and claims nothing about whether any leak succeeded. The smallest step wins.' },
    ],
  },
  {
    type: 'checkpointQuestion',
    number: 2,
    question: 'A passage describes a lab that used radiocarbon dating to age a set of bones. A choice completes the text with *radiocarbon dating is the most reliable method available for dating bone.* Keep it or cut it?',
    answer: 'Cut it. **Why:** using a method proves nothing about its merit — the fence blocks *best/only* claims built from mere use. A note written with a pen does not make pens the best writing tool. The licensed version would be modest: radiocarbon dating *can* be used on bone.',
  },
  {
    type: 'checkpointQuestion',
    number: 3,
    question: 'The blank follows *for example, ______.* One choice accurately restates the passage’s overall conclusion. Keep it or cut it?',
    answer: 'Cut it. **Why:** the marker fixes the *kind* of statement the blank takes before content matters. *For example* reserves the slot for a specific instance of the idea just stated; a conclusion — even a correct one — is the wrong kind of statement in that slot.',
  },
  {
    type: 'checkpointQuestion',
    number: 4,
    question: 'Two finalists remain. One reuses four exact phrases from the passage; the other says the same idea in completely different words. Which deserves suspicion first, and what do you check?',
    answer: 'The word recycler. **Why:** correct answers are supported, not stated — they paraphrase, they almost never quote. Recycled phrases are cheap bait, and the distortion hides in the relationship between them: check who did what, and which way the cause runs, in the echoing choice before trusting it.',
  },
  {
    type: 'checkpointQuestion',
    number: 5,
    question: 'A choice names the study’s lead researcher and adds a vivid, accurate detail about her earlier career. It is unquestionably on-topic. What single question decides whether it can complete the text?',
    answer: '*If this is true, what happens to the argument at the blank?* **Why:** topical relevance — mentioning the passage’s people and findings — is not logical relevance. A statement that leaves the argument exactly where it stood is garnish, and an argument-inert choice is wrong no matter how accurate or vivid it is.',
  },
  {
    type: 'checkpointQuestion',
    number: 6,
    question: 'A passage reports that *participants in the 1998 study slept longer on weekends.* A choice concludes that *people sleep longer on weekends.* What exactly went wrong?',
    answer: 'Scope drift — a claim about one study’s participants was silently widened to *people*. **Why:** evidence licenses conclusions only about its stated population and time window; the completion must keep the passage’s qualifiers, and a choice that drops them claims support it never received.',
  },
  { type: 'heading', content: 'One-page summary' },
  {
    type: 'table',
    title: 'The whole chapter in one place',
    headers: ['Move', 'What it means', 'The check'],
    rows: [
      ['Closed room', 'Every needed fact is on the page; nothing enters from outside', 'A choice needing world knowledge or charity is out'],
      ['Spine first', 'Claim + evidence + logic; names and scenery are the coat', 'Distractors are sewn from the coat — judge choices against the claim'],
      ['Redeem pointers', '*This pattern / such a strategy* stands in for an earlier idea', 'Back up and restate the referent in full before touching the blank'],
      ['Name the gap', 'The marker at the blank fixes the kind of statement required', 'Therefore → conclusion; however → contrast; for example → instance; list → same-property item'],
      ['Predict, then shop', 'Derive the completion before the choices can frame you', 'Ten words or fewer; obvious is fine; no match → revise the prediction'],
      ['Weakest word', 'A choice is a bundle of claims; one unsupported word sinks it', 'Audit subject, scope, direction, intensity against passage words'],
      ['The fence', 'Facts never yield motives, advice, merit, or wider scopes', 'Any *should*, *best*, *only*, *every*, or new group demands passage words that earn it'],
    ],
  },
  {
    type: 'text',
    content: 'That is the entire skill: lock the room, strip the passage to its spine, name the kind of statement the blank demands, predict the smallest forced step in your own words, and audit the survivor until every word of it points back at something the passage said. The right answer will rarely feel clever. It will feel inevitable — and inevitable is exactly what the question was asking for.',
  },
];
