/**
 * Learn chapter body — Central Ideas & Details (Information and Ideas).
 *
 * Teach-from-zero textbook chapter following the locked template
 * (docs/LEARN_TEXTBOOK_OVERHAUL_PLAN.md): roadmap → Stage 1 foundations →
 * Stage 2 numbered method (step → right → wrong → why) → Stage 3 on-the-test
 * (decision flow, traps, worked examples, checkpoints, one-page summary).
 * Voice reference: rwBodies/boundaries.js (the approved exemplar).
 * Concept source: knowledge/graph/rw (topic-point-attitude-reading,
 * supported-not-stated, detail-lookup-protocol, abstraction-ladder-paraphrase,
 * belief-revision-template, fiction-poetry-literal-reading,
 * reference-compression-tracking, emphasis-signal-map,
 * question-first-reading-protocol, predict-then-verify,
 * distractor-species-taxonomy, stem-family-recognition).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * rwBodies/index.js — never import this from the chapter index.
 */

export const centralIdeasBlocks = [
  {
    type: 'text',
    content: 'A Central Ideas and Details question shows you a single short paragraph — 25 to 150 words on science, history, art, or a scene from a story — and one of two stems. The **main-idea flavor** asks *"Which choice best states the main idea of the text?"* The **detail flavor** asks *"According to the text, what does [the researcher] argue?"* or *"Based on the text, why did [the event] happen?"* Expect roughly 6 of these across a full test. Neither flavor rewards deep interpretation or outside knowledge: everything required is on the screen, and there is a fixed method for finding it. This chapter builds that method from zero.',
  },
  {
    type: 'steps',
    title: 'How this chapter is built',
    items: [
      '**Stage 1 · Foundations.** What a main idea actually is (topic vs. point), why the right answer never uses the passage’s words, and where authors park their biggest claim.',
      '**Stage 2 · The method.** Five numbered steps, each in the same shape: the move, a right example, a wrong example, and the why.',
      '**Stage 3 · On the test.** A decision flow, the trap catalog, three worked examples, checkpoints, and a one-page summary.',
    ],
  },

  // ── Stage 1 · Foundations ──────────────────────────────────────────────
  { type: 'heading', content: 'Stage 1 · What a main idea actually is' },
  {
    type: 'text',
    content: 'Start with the structural definition, because everything else hangs on it. The **main idea** of a passage is the one claim the rest of the passage exists to support. Every other sentence — the dates, the measurements, the examples, the quotations — is scaffolding around that claim. A **detail** is one piece of the scaffolding. The two question flavors split along exactly this line: a main-idea question asks for the claim; a detail question asks you to retrieve one stated piece of scaffolding without bending it.',
  },
  {
    type: 'text',
    content: 'Three terms, defined from zero. The **topic** is the subject the passage keeps coming back to — count the repeats, including pronouns like *it* and *they*. The **point** is the topic plus the answer to *"so what?"* — a full claim with a verb and a direction. The **attitude** is how the author feels about that claim — enthusiastic, cautious, skeptical — and at what temperature. *"This passage is about street trees"* names a topic. *"Street trees pay a city back several times over"* states a point. Main-idea questions always ask for the point; a subject label is never enough, no matter how accurate.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Point — a claim with a verb', content: '*For decades, planners treated street trees as decoration. Recent budget studies tell a different story: mature trees cut summer cooling costs, absorb stormwater, and raise nearby property values enough to repay their planting cost several times over.* The point: **street trees are an investment that pays the city back, not decoration.** It has a verb, a direction, and it covers every sentence.', variant: 'right' },
      { label: 'Topic — a label with no claim', content: '*"The passage is about street trees and city budgets."* True, and useless. A label cannot be right or wrong about anything, so it cannot help you eliminate a single choice. School rewards naming topics; this question type never does.', variant: 'wrong' },
    ],
  },
  {
    type: 'strategyCard',
    title: 'The so-what test',
    content: 'To turn a topic into the point, ask **"so what?"** — what does the passage want me to believe about this subject? The answer must contain a verb with a direction (*pays back, spreads faster, was misread, protects*). If your summary of a passage could be prefixed with "it is about," it is a topic, not a point. The test takes five seconds, and it is the engine behind every elimination in this chapter.',
  },
  {
    type: 'text',
    content: 'The second foundation is what the right answer will *look like*. For a **detail** question, the fact is **stated** in the passage — but the credited choice almost never repeats the passage’s words. It says the same thing in different words. For a **main-idea** question, the credited choice restates the point one step more general: the passage says *"the spectrometer they built detected fainter signals,"* the answer says *"their new instrument improved measurements."* Picture an **abstraction ladder**: the passage sits on a low, concrete rung; the credited answer usually stands one rung up — more general, same claim, same scope, same intensity. Climbing higher than that (*one researcher* becomes *researchers*, one study becomes *the whole field*) adds claims the passage never made — and an added claim is an unsupported claim.',
  },
  {
    type: 'tip',
    content: 'Same words: suspect. Same meaning, different words: promising. Choices that recycle the passage’s exact phrases are frequently traps built around a twisted relationship, while credited answers hide behind synonyms. Treat word-for-word familiarity as a reason to slow down, not a reason to relax.',
  },
  {
    type: 'checkpointQuestion',
    number: 1,
    question: 'A friend asks what a passage was about and you say, *"urban beekeeping."* Is that a topic or a point — and what would you add to make it the other one?',
    answer: 'A **topic**. To make it a point, add the "so what?" — a claim with a verb and a direction, such as *"urban beekeeping is reshaping how cities plant their parks."* **Why:** a main-idea answer must state what the passage argues about its subject; a label with no verb cannot cover the passage, contradict it, or eliminate anything.',
  },
  { type: 'heading', content: 'Where the point likes to sit' },
  {
    type: 'text',
    content: 'Authors mark their own treasure. A short passage flags its biggest claim with a small, learnable set of signals: **position** (the first sentence and the final sentence carry disproportionate weight), **punctuation payloads** (what follows a colon or sits between dashes usually explains or delivers the claim), **importance words** (*crucial, notably, especially, what this shows*), and **pivot words** (*but, however, yet, in fact*). One opening shape deserves its own alarm bell: a first sentence built on *"it was long thought," "many assumed,"* or *"conventional wisdom held."* Those hedges announce that the author is presenting **someone else’s belief in order to revise it** — a pivot is coming, and the point lives *after* the pivot, not in the opening claim. Long stretches of unmarked description, meanwhile, are scenery: read them fast.',
  },

  // ── Stage 2 · The method ───────────────────────────────────────────────
  { type: 'heading', content: 'Stage 2 · The method' },
  {
    type: 'text',
    content: 'Five steps, run in the same order on every question of this type. Each step comes in the same shape: the move, a right example, a wrong example, and the why.',
  },

  { type: 'heading', content: 'Step 1 — Read the question before the passage' },
  {
    type: 'text',
    content: 'The stem is a work order: it tells you what to hunt before you enter the text. *"Which choice best states the main idea"* → read for the point, letting the flags from Stage 1 set your speed. *"According to the text, why did X happen"* → name the exact relation being asked (*why X happened*, not just *X*), then hunt the sentence that owns it. Reading the passage cold and then discovering what it is being used for wastes the read — and passages often front-load a vivid but untested detail precisely so a cold reader will latch onto it.',
  },

  { type: 'heading', content: 'Step 2 — Find the point at the flags' },
  {
    type: 'text',
    content: 'For a main-idea stem, check the flagged sentences in order: the first sentence, the last sentence, then any colon or dash payload and any sentence wearing an importance word. If the opener is hedged (*"it was long thought…"*), jot both sides in shorthand — *old: X / new: Y* — because the favorite wrong answer on these passages crowns the old idea as the point. The jot is polarity insurance: fluent readers who keep both ideas in their heads are exactly the ones who swap them under time pressure.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — the point sits after the pivot', content: '*Historians long assumed the medieval spice trade existed to mask spoiled meat. Kitchen ledgers complicate that picture: spices cost far more than any household with spoiled meat could afford, and they appear most often in recipes for fresh fish and newly slaughtered game. The seasoning was a display of wealth, not a cover for decay.* Point: **the spoilage story does not hold — spices signaled wealth.** The hedge *long assumed* marked the opener as someone else’s belief.', variant: 'right' },
      { label: 'Wrong — crowning the old idea', content: '*"The spice trade was driven by the need to mask spoiled meat."* This is the belief the passage exists to knock down. It is right there in the text — stated, familiar, first — and it is the opposite of the point.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Step 3 — Read whole sentences, and unpack the shorthand' },
  {
    type: 'text',
    content: 'For a detail stem, find where the entity is actually *discussed* — not merely where its name last appears — and then **back up to the first word of that sentence** before reading. The qualifier that decides the answer often sits in the front half, before the spot a keyword scan lands on. And when the passage leans on a pronoun (*it, they, this*) or a **compression-noun** — a noun that names an idea rather than an object (*this discrepancy, that assumption, the finding*) — treat it like a baggage-claim ticket: the luggage is behind you. Back up, restate the earlier idea in plain words, and carry the unpacked idea forward, not the pronoun.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — back up to the sentence’s first word', content: '*Except during the coldest weeks, when the entire colony clusters for warmth, honeybee foragers leave the hive at first light.* Asked when the foragers head out, start reading at *Except* — the schedule has a stated exception, and the credited answer will respect it.', variant: 'right' },
      { label: 'Wrong — the keyword scan', content: 'Scanning for *foragers* and reading forward yields *"foragers leave the hive at first light"* — and a confident, wrong pick of a choice saying they do so year-round. The front half of the sentence was amputated, and the front half held the answer.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Step 4 — Say the answer in your own words first' },
  {
    type: 'text',
    content: 'Before reading a single choice, state your answer roughly — ten words or fewer, in your own words: *"spices showed off wealth,"* or *"they still needed the handwritten log."* Wrong answers are engineered to sound plausible to a mind with no prior commitment; a prediction inverts the power dynamic, because now the choices are graded against your standard instead of seducing you. If no choice matches your prediction, distrust the prediction before distrusting the test: re-read the stem, widen your reading window by one sentence in each direction, and revise.',
  },
  {
    type: 'tip',
    content: 'The prediction is a compass, not a thesis — direction is enough, so do not polish it. And never eliminate a choice just because its wording confuses you: confusion is not wrongness, and credited answers are sometimes written in deliberately academic language to scare off students who grade by comfort.',
  },

  { type: 'heading', content: 'Step 5 — Grade each choice by its weakest word' },
  {
    type: 'text',
    content: 'A choice is a chain of claims, and it is only as strong as its weakest link. Audit the finalists word by word: does the passage support this subject at this **scope** (one researcher, or researchers in general?), this verb in this **direction** (improved, or merely changed?), this modifier at this **intensity** (*nearly the same* is not *better*; *widely read* is not *the most widely read*)? One unsupported word sinks an otherwise perfect choice. When two choices survive, return to the passage and check one concrete claim of each — staring at the two choices until one feels right is how the engineered trap wins.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — new words, same claim, same size', content: '*In her survey of 41 community orchards, botanist Ines Farrell found that trees grafted by volunteers survived transplanting at nearly the same rate as trees grafted by professionals.* Credited restatement: *"amateur grafting can rival professional work, at least for transplant survival."* Different vocabulary, one rung up the ladder, scope and intensity intact.', variant: 'right' },
      { label: 'Wrong — familiar words, bent claim', content: '*"Volunteers graft trees better than professionals."* It recycles the passage’s own words — *volunteers, graft, professionals* — and quietly upgrades *nearly the same rate* into *better*. The echo is the lure; the bent verb is the flaw.', variant: 'wrong' },
    ],
  },

  // ── Stage 3 · On the test ──────────────────────────────────────────────
  { type: 'heading', content: 'Stage 3 · On the test' },
  {
    type: 'text',
    content: 'On a real module the question types arrive shuffled and unlabeled, so the stem itself is your routing signal: *"main idea"* → point hunt; *"according to the text" / "based on the text"* → lookup. One special case: literary passages. An excerpt from a novel or a poem does not argue — its "point" is the foregrounded human fact: what a character wants, what changes between the first line and the last. The rule there is aggressive literalism. Track who is involved and what actually happens, and grade every choice against the words on the page: choices that import symbolism, morals, or unstated backstory die no matter how literary they sound. Most students fail these passages by being insufficiently literal, not insufficiently deep.',
  },
  {
    type: 'steps',
    title: 'The decision flow',
    items: [
      'Read the stem and pick the flavor: main idea → point hunt; "according to the text" → lookup. Name the exact relation a lookup stem asks for.',
      'Main idea: read for the point at the flags — first sentence, last sentence, colon and dash payloads, pivots. Hedged opener → the point lives after the pivot; jot *old vs. new*.',
      'Detail: find the sentence that owns the asked-about fact, back up to its first word, and read the whole thing — plus the sentence before, if a pronoun or an idea-noun points backward.',
      'Say the answer in your own words — ten words or fewer — before reading any choice.',
      'Match on meaning, not vocabulary. Grade survivors by their weakest word (scope, direction, intensity); if two remain, verify one concrete claim of each against the text.',
    ],
  },
  {
    type: 'keyInsight',
    content: '**The size test decides main-idea questions.** A credited answer is *big enough* to cover every sentence and *small enough* to stay inside the passage. If only one sentence supports a choice, it is a detail wearing a main idea’s clothes. If a choice adds a comparison, a cause, or a superlative the passage never states, it has outgrown the text. The credited answer is the only choice that passes both checks.',
  },
  {
    type: 'trapCard',
    title: 'The true-but-too-narrow detail',
    wrong: '**The true-but-too-narrow detail.** You pick a choice that is factually correct — it restates a real supporting detail, like how a fossil was preserved or what year a study ran. It matches the passage, so it feels safe.',
    correction: 'A detail can be true and still be the wrong answer to a main-idea question. Run the coverage half of the size test: *does the rest of the passage exist to support this?* If only one line backs it up, it is scaffolding, not the claim. The choice fails the *big enough* check no matter how accurate it is.',
  },
  {
    type: 'trapCard',
    title: 'The overreach',
    wrong: '**The overreach.** You pick a choice that sounds authoritative because it makes a strong claim — a comparison (*more reliable than*), a cause, a superlative (*the most significant*). The topic is right, so you go with it.',
    correction: 'Scan the choice word by word against the passage (Step 5). A comparison, ranking, or cause the text never states is an added claim, and an added claim is an unsupported one — one rung too high on the ladder. One researcher stays one researcher; *nearly the same rate* never becomes *better*. The right answer never knows more than the passage does.',
  },
  {
    type: 'trapCard',
    title: 'The word-for-word echo',
    wrong: '**The word-for-word echo.** A choice recycles exact phrases from the passage, and the familiarity feels like proof. You pick it because "the passage literally says this."',
    correction: 'The passage says those *words* — check whether it says that *relationship*. Echo traps weld real passage vocabulary onto a distorted connection: a swapped subject, a flipped direction, an upgraded verb. Meanwhile the credited answer hides behind synonyms one rung up the ladder. When a choice sounds exactly like the text, slow down and audit how the echoed pieces are joined (Steps 4 and 5).',
  },
  {
    type: 'trapCard',
    title: 'The opposite in costume',
    wrong: '**The opposite in costume.** On an old-idea/new-idea passage, a choice states the discarded belief — or reverses the finding — using enough of the passage’s vocabulary to feel familiar. Strong readers who held both ideas in their heads are the likeliest to grab it.',
    correction: 'Check the claim’s *direction* before its vocabulary. On any hedged-opener passage, the two-sided jot from Step 2 (*old: X / new: Y*) is the antidote: compare the choice against the jot, and any option crowning the old idea or flipping the polarity dies instantly. Familiar wording is exactly what this trap is built from.',
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The lighthouse at Pointe Verte was automated in 1968, but the keeper’s cottage remained occupied for another two decades: the harbor authority relied on the resident keeper to log passing ships by hand, a record the new equipment could not produce.\n\nAccording to the text, why did the keeper’s cottage remain occupied after the lighthouse was automated?\n\n(A) The automated light failed frequently and required a resident to repair it.\n(B) The harbor authority still needed the keeper’s handwritten record of passing ships.\n(C) The keeper had been granted lifetime residence in the cottage.\n(D) The cottage housed equipment that the new system depended on.',
    steps: [
      { label: 'Name the relation', content: 'The stem asks *why the cottage stayed occupied* — a reason, not a fact about the lighthouse or the keeper. Hunt the sentence that owns that reason.' },
      { label: 'Find the owner sentence', content: 'The colon is a flag: its payload delivers the reason the sentence promised. Reading the whole sentence from its first word: the authority *relied on the resident keeper to log passing ships by hand*, something the new equipment could not do.' },
      { label: 'Predict, then match', content: 'Prediction: *"they still needed the hand log."* (B) restates it in new words. (A) invents failures, (C) invents a residence grant, and (D) moves the dependency from the keeper’s log to the building — right feel, wrong owner.' },
      { label: 'Answer', content: '**(B).** The fact was stated; only the wording moved. Nothing had to be figured out — only found and matched.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'When marine biologist Priya Nandakumar began tagging reef sharks off the Andaman coast in 2011, she expected the animals to roam widely in search of food. Instead, her tracking data showed that most individuals returned to the same half-kilometer stretch of reef night after night for years. Nandakumar argues that this loyalty to a home range makes the sharks unusually vulnerable: protect one small reef, and you protect nearly the whole local population; damage it, and there is nowhere for them to go.\n\nWhich choice best states the main idea of the text?\n\n(A) Nandakumar began tagging reef sharks off the Andaman coast in 2011.\n(B) Reef sharks roam widely in search of food, so protecting any single reef has little effect.\n(C) Nandakumar’s tracking showed that reef sharks stay loyal to a small home range, which makes the fate of a single reef unusually decisive for the local population.\n(D) Reef sharks are the most endangered animals on the Andaman coast.',
    steps: [
      { label: 'Find the point at the flags', content: 'The opener states an expectation; *Instead* is the pivot, so the point lives after it. The final sentence — with its colon payload — carries the weight: the sharks stick to one small home range, and that changes what protecting or damaging one reef means. Jot: *expected roaming / found homebodies, so one reef matters*.' },
      { label: 'Predict', content: '*"Sharks stay put, so one reef decides everything."* Now grade the choices against that.' },
      { label: 'Grade the choices', content: '(A) is a true detail — one sentence of scaffolding promoted to headline; it fails the *big enough* check. (B) is the opposite in costume: it crowns the discarded expectation. (D) overreaches — the passage never ranks the sharks against other animals. (C) matches the jot, covers every sentence, and adds nothing.' },
      { label: 'Answer', content: '**(C).** It restates the post-pivot claim one rung up the ladder — new words, same claim, same size.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Nineteenth-century naturalists catalogued the glasswing butterfly’s transparent wings as a simple case of camouflage, and the explanation held for over a century. Flight-tunnel experiments now suggest the transparency does subtler work: the wings scatter almost no light even at angles at which glass produces glare, so a hunting bird tracking the flicker of movement loses the insect against any background, moving or still. The wings, in other words, do not merely match the butterfly’s surroundings — they withhold the optical cues predators use to track motion.\n\nWhich choice best states the main idea of the text?\n\n(A) The glasswing butterfly’s transparent wings are a simple case of camouflage that helps the insect match its surroundings.\n(B) Flight-tunnel experiments show that glass produces glare at angles at which butterfly wings do not.\n(C) Research suggests that the glasswing’s transparency protects it in a subtler way than the long-standing camouflage explanation allowed.\n(D) Transparent wings make the glasswing butterfly impossible for any predator to catch.',
    steps: [
      { label: 'Spot the skeleton', content: 'The opener is hedged history: naturalists *catalogued* the wings as camouflage, and the explanation *held* — someone else’s belief, set up to be revised. *Now suggest* is the pivot. Jot: *old: simple camouflage / new: hides motion cues*.' },
      { label: 'Predict', content: '*"The transparency does something subtler than camouflage — it hides movement."* The final dash-flagged sentence confirms the direction: not merely matching surroundings, but withholding motion cues.' },
      { label: 'Grade by the weakest word', content: '(A) crowns the old idea — dead on the jot alone. (B) promotes one experimental detail, and bends it: the passage compares scattering, not which surface avoids glare at which angles. (D) fails at *impossible* and *any* — intensity the text never licenses. (C) survives the audit: *suggests* matches the hedged verb, *subtler* matches the passage’s own framing, and its scope stays on this butterfly.' },
      { label: 'Answer', content: '**(C).** Notice its costume: abstract wording, no vivid passage vocabulary. The echo-heavy choices were the traps; the quiet paraphrase was the answer.' },
    ],
  },
  {
    type: 'checkpointQuestion',
    number: 2,
    question: 'A passage spends four sentences describing a new telescope, then ends: *"What makes the instrument revolutionary is not its size but its ability to record a full sky survey in a single night."* Which sentence is the point built around, and which flags told you?',
    answer: 'The last sentence. **Why:** three flags stack on it — final position, the importance word *revolutionary*, and a contrast (*not its size but…*). The four descriptive sentences are scaffolding that exists to set up that claim.',
  },
  {
    type: 'checkpointQuestion',
    number: 3,
    question: 'On a main-idea question, two choices both use phrases lifted straight from the passage. One names a single statistic; the other restates the passage’s overall argument. Which wins, and what does the familiarity of both tell you?',
    answer: 'The one restating the overall argument — the statistic covers one sentence, so it fails the *big enough* half of the size test. **Why:** appearing in the passage is not evidence of anything; word-for-word familiarity is the lure, and coverage is what a main-idea answer is actually graded on.',
  },
  {
    type: 'checkpointQuestion',
    number: 4,
    question: 'A detail stem asks why a workshop closed. You scan the passage for the word *closed*, land mid-sentence, and read forward to the period. What risk did you just take, and what is the fix?',
    answer: 'The front half of the sentence — everything before your landing spot — may hold the qualifier or the stated reason that decides the answer, and you never read it. **Why:** deciding qualifiers sit early in the sentence by design. The fix is mechanical: back up to the sentence’s first word, and to the sentence before if a pronoun or an idea-noun points backward, then read the whole thing.',
  },
  {
    type: 'checkpointQuestion',
    number: 5,
    question: 'A choice describes a researcher’s method as *"more accurate than any earlier technique."* The passage praises the method but never compares it to older ones. Keep or cut — and which word made the decision?',
    answer: 'Cut. **Why:** the weakest-word audit fails at *more* — the comparison is a claim the passage never makes, so the choice is unsupported no matter how well the rest of it matches. One unsupported word sinks the whole choice.',
  },
  { type: 'heading', content: 'One-page summary' },
  {
    type: 'table',
    title: 'The whole chapter in one place',
    headers: ['Step', 'The move', 'What it blocks'],
    rows: [
      ['1', 'Read the stem first: main idea → point hunt; "according to the text" → lookup', 'Unfocused cold reads that latch onto a vivid, untested detail'],
      ['2', 'Check the flags — first and last sentence, colon/dash payloads, pivots; jot old vs. new on hedged openers', 'Crowning the old idea; polarity flips'],
      ['3', 'Back up to the sentence’s first word; unpack pronouns and idea-nouns before moving on', 'Missed front-half qualifiers; right fact, wrong referent'],
      ['4', 'Say the answer in your own words (ten or fewer) before any choice', 'Choice-shopping among engineered traps'],
      ['5', 'Grade finalists by their weakest word: scope, direction, intensity', 'Echoes, overreach, and details dressed as main ideas'],
    ],
  },
  {
    type: 'text',
    content: 'That is the entire skill: let the stem pick the read, find the point at the flags or the fact in its whole sentence, answer in your own words, and grade the survivors by their weakest word. The passage always holds the proof — the credited answer just refuses to borrow the passage’s wording, and now you know why.',
  },
];
