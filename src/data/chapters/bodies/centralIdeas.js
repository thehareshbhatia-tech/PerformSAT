/**
 * Learn lesson body — Central Ideas & Details (Information and Ideas).
 *
 * TUTOR VOICE (adopted 2026-07-14, user-approved exemplar:
 * bodies/mLinearEquations.js): coaching direct-address — talks TO the student,
 * everyday anchor first and method second, anticipates the trap before it
 * fires ("same words: suspect"), concrete decision rules. Invented passages
 * and answer choices inside example blocks stay authentic test material.
 * Lean structure unchanged; gated by bodies.test.js.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const centralIdeasBlocks = [
  {
    type: 'text',
    content: "You get a short paragraph and one of two questions: *what's the main idea?* or *what does the text say about X?* Here's the good news — both are open-book. The answer is sitting on the screen. Your whole job is to read for the one point, then find the choice that says that point in different words.",
  },

  { type: 'heading', content: 'Topic vs. point' },
  {
    type: 'text',
    content: "A friend asks about the movie you saw last night. *\"It's about a heist\"* — that's a **topic**. *\"The crew pulls off the heist but falls apart doing it\"* — that's a **point**. The difference is the verb. Same with a passage: *\"this is about street trees\"* is a topic; *\"street trees pay a city back several times over\"* is a point — the topic plus the answer to *so what?* A main-idea question always wants the point, never a bare subject label, no matter how accurate the label is.",
  },
  {
    type: 'keyInsight',
    content: "The **so-what test:** if your summary starts with *\"it's about…\"*, you're holding a topic, not a point. Keep asking *so what?* until you have a claim with a verb (*pays back, spreads faster, was misread*).",
  },

  { type: 'heading', content: 'The right answer is a paraphrase' },
  {
    type: 'text',
    content: "The credited choice says the passage's idea in **different words** — usually one step more general. That's deliberate: if the answer echoed the passage word for word, you could match it by sight without understanding a thing, so the test almost never lets it. The passage says *\"the tool they built caught fainter signals\"*; the answer says *\"their new instrument improved measurements.\"* Same claim, new words.",
  },
  {
    type: 'tip',
    content: "**Same words: suspect. Same meaning, different words: promising.** The trap choice repeats the passage's exact phrases — it feels safe precisely because it's familiar, and it's usually built around a twisted relationship. When a choice sounds *exactly* like the text, slow down.",
  },
  {
    type: 'text',
    content: "The other way to lose is by adding. If a choice smuggles in a comparison, a cause, or a superlative the passage never states — or quietly turns *one researcher* into *researchers* — that's over-reading. Hold every choice to **supported, not stated:** each word has to be backed by the text, and one unsupported word sinks the whole choice.",
  },

  { type: 'heading', content: 'Detail questions: go back and read' },
  {
    type: 'text',
    content: "For *\"according to the text, why did X happen?\"*, your memory will offer an answer instantly. Don't take it. Memory stores a blurry gist, and the wrong choices are built to match that gist — close enough to feel right, off on the one word that decides it. Go find the sentence that actually discusses X and **read it from its first word** — the qualifier that settles the answer usually sits in the front half, right where a keyword scan skips past. There's nothing to figure out here; only something to find and match.",
  },

  { type: 'heading', content: 'Literary passages' },
  {
    type: 'text',
    content: "A story or poem doesn't argue, so don't hunt for a thesis — read it **literally.** Track who's present, what they want, and what changes from the first line to the last. Find the **turn** (a shift in image, tense, or who's spoken to — the point usually lives there). Then take the **most modest reading** that still fits the whole passage, not the most dramatic or symbolic one. When students miss these, it's almost never from reading too shallowly — it's from reading in drama that isn't on the page.",
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Planners once treated rooftop gardens as decoration. But recent city studies tell another story: the gardens cool the buildings below, soak up storm runoff, and cut energy bills enough to repay their cost within a few years.\n\nWhich choice best states the main idea of the text?\n\n(A) Planners once viewed rooftop gardens as mere decoration.\n(B) Rooftop gardens are a practical investment that pays a building back, not just decoration.\n(C) Rooftop gardens are the most effective way to cool a city.',
    steps: [
      { label: 'Find the point', content: "*But* is your pivot — the point lives after it. Everything past that word is a list of ways the gardens save money and repay their cost." },
      { label: 'Say it in your own words', content: '*"The gardens are useful, not just decorative — they pay off."*' },
      { label: 'Match', content: "**(B)** restates that in new words. (A) tempts you because it's true — but it crowns the old idea the passage exists to correct. (C) over-reaches: *most effective* is a ranking the text never makes." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The lighthouse was automated in 1968, but the keeper stayed on for another twenty years: the harbor still relied on his handwritten log of passing ships, a record the new equipment could not produce.\n\nAccording to the text, why did the keeper stay after the lighthouse was automated?\n\n(A) The automated light broke often and needed repairs.\n(B) The harbor still needed his handwritten log of passing ships.',
    steps: [
      { label: "Name what's asked", content: "A *reason* the keeper stayed — so go find the sentence that owns that reason." },
      { label: 'Read the whole sentence', content: "The colon hands it to you: the harbor *relied on his handwritten log*, which the new gear couldn't produce." },
      { label: 'Match', content: "**(B)** says that fact in different words. (A) invents a breakdown the text never mentions — that's the memory-gist trap in the wild." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'At dawn she oiled the hinges one by one, counted the empty pegs along the wall, and set two cups, from habit, in the sun — then, catching herself, put one back and left the other where it stood.\n\nWhich choice best states the main idea of the text?\n\n(A) The woman is preparing to welcome an expected visitor.\n(B) The woman\'s morning routine still carries the shape of a companionship that is gone.\n(C) The woman resents the chores of her solitary mornings.',
    steps: [
      { label: 'Find the turn', content: "*then, catching herself* is the hinge — before it she's on autopilot; after it she corrects course. The *empty* pegs and the *two* cups set *from habit* are doing the quiet work." },
      { label: 'Take the most modest reading', content: "The smallest claim that covers both halves: her routine is still built for two, and she notices. That's **(B)**." },
      { label: 'Reject the traps', content: "(A) invents a visitor — the cups are *habit*, not preparation. (C) reads in *resentment* the words never show. When two readings both fit, modest beats dramatic." },
    ],
  },

  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'For decades, curators stored the oldest manuscripts in cool, perfectly still vaults, sure that stillness preserved them best. Newer conservation work points the other way: pages kept in motionless air trap the faint acids they give off, while gentle, filtered air circulation carries those acids away and slows the paper\'s decay.\n\nWhich choice best states the main idea of the text?\n\n(A) Curators have long stored old manuscripts in cool, still vaults.\n(B) Gentle air circulation can preserve old manuscripts better than perfectly still storage.\n(C) Still air is the single greatest threat facing every historical document.',
    steps: [
      { label: 'Find the point', content: "*points the other way* is your pivot — the point lives after it: still air traps the acids, moving air clears them, so circulation preserves the pages better." },
      { label: 'Say it in your own words', content: '*"Gentle airflow beats still air for keeping old paper."*' },
      { label: 'Match', content: "**(B)** restates that in new words. (A) is true, but it states the old belief the passage exists to correct. (C) over-reads: *single greatest threat* and *every document* are rankings the text never makes." },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'A friend asks what a passage was about and you say *"urban beekeeping."* Is that a topic or a point — and how would you fix it?',
    answer: "A **topic.** Add the so-what to turn it into a point — a claim with a verb, like *\"urban beekeeping is changing how cities plant their parks.\"* A label with no verb can't cover the passage, and it can't eliminate a single choice for you.",
  },
  {
    type: 'checkpointQuestion',
    question: 'On a main-idea question, two choices both use exact phrases from the passage. One names a single statistic; the other restates the whole argument. Which is more likely right, and why?',
    answer: "The one restating the **whole argument.** The statistic covers one sentence, so it fails the so-what test — it's a detail wearing a main-idea costume. And matching the passage's exact words is a lure, not proof.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A choice restates the passage\'s main claim perfectly but adds the word *always* — where the passage said the method *often* works. Keep it or cut it?',
    answer: "**Cut it.** *Always* is one unsupported word: the passage said *often*, and stretching *often* into *always* makes a claim the text never does. Supported, not stated — a single overreaching word sinks an otherwise perfect choice.",
  },

  {
    type: 'text',
    content: "**The move, every time:** find the point (topic plus so-what), expect the answer to paraphrase it, and drop any choice that echoes exact words, adds a claim, or comes from your memory instead of the sentence. That's the whole skill.",
  },
];
