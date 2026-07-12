/**
 * Learn lesson body — Central Ideas & Details (Information and Ideas).
 *
 * NEW lean "review / cheat-sheet" style (matches the gSubjectVerbAgreement
 * exemplar): one-sentence lede, a few short one-idea sections in plain
 * language, then worked examples and a couple of check-yourself questions.
 * ~1-2 minute read — NOT the old dense teach-from-zero textbook chapter.
 * Gated by the lean bodies contract.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const centralIdeasBlocks = [
  {
    type: 'text',
    content: 'These questions give you a short paragraph and ask one of two things: *what is the main idea?* or *what does the text say about X?* Both are open-book — the answer is on the screen. The whole skill is **reading for the one point, then matching it to the choice that says the same thing in different words.**',
  },

  { type: 'heading', content: 'Topic vs. point' },
  {
    type: 'text',
    content: 'The **topic** is the subject the paragraph keeps circling back to. The **point** is the topic plus the answer to *"so what?"* — a full claim with a verb and a direction. *"This is about street trees"* is a topic. *"Street trees pay a city back several times over"* is a point. A main-idea question always wants the **point**, never a bare subject label — no matter how accurate the label is.',
  },
  {
    type: 'keyInsight',
    content: 'The **so-what test:** if your summary could start with *"it is about…"*, it is a topic, not a point. Keep asking "so what?" until you have a claim with a verb (*pays back, spreads faster, was misread*).',
  },

  { type: 'heading', content: 'The right answer is a paraphrase' },
  {
    type: 'text',
    content: 'The credited choice says the passage\'s idea in **different words** — usually one step more general. The test does this on purpose: if the answer echoed the passage word for word, you could match it by sight without ever understanding the point, so the real answer is almost always a translation. The passage says *"the tool they built caught fainter signals"*; the answer says *"their new instrument improved measurements."* Same claim, new words.',
  },
  {
    type: 'tip',
    content: '**Same words: suspect. Same meaning, different words: promising.** A choice that repeats the passage\'s exact phrases is usually a trap built around a twisted relationship. Slow down when a choice sounds *exactly* like the text.',
  },
  {
    type: 'text',
    content: 'The other trap is going **too far.** If a choice adds a comparison, a cause, or a superlative the passage never states — or turns *one researcher* into *researchers* — it is over-reading. The rule is **supported, not stated:** every word of the answer has to be backed by the text. One unsupported word sinks the whole choice.',
  },

  { type: 'heading', content: 'Detail questions: go back and read' },
  {
    type: 'text',
    content: 'For *"according to the text, why did X happen?"*, do not answer from memory. Memory blurs the details into a vague gist, and the wrong choices are built to match that gist — close enough to feel right, off on the one word that matters. Find the sentence that actually discusses X and **read it from its first word** — the qualifier that decides the answer often sits in the front half, before the spot a keyword scan lands on. There is nothing to figure out; only something to find and match.',
  },

  { type: 'heading', content: 'Literary passages' },
  {
    type: 'text',
    content: 'A story or poem does not argue — read it **literally.** Track who is present, what they want, and what changes from the first line to the last. Find the **turn** (a shift in image, tense, or who is spoken to — usually the point lives there). Then pick the **most modest reading** that still fits the whole passage, not the most dramatic or symbolic one. Most students miss these by over-reading, not by reading too shallowly.',
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Planners once treated rooftop gardens as decoration. But recent city studies tell another story: the gardens cool the buildings below, soak up storm runoff, and cut energy bills enough to repay their cost within a few years.\n\nWhich choice best states the main idea of the text?\n\n(A) Planners once viewed rooftop gardens as mere decoration.\n(B) Rooftop gardens are a practical investment that pays a building back, not just decoration.\n(C) Rooftop gardens are the most effective way to cool a city.',
    steps: [
      { label: 'Find the point', content: 'The word *But* is the pivot — the point lives after it. The paragraph lists ways the gardens save money and repay their cost.' },
      { label: 'Say it in your own words', content: '*"The gardens are useful, not just decorative — they pay off."*' },
      { label: 'Match', content: '**(B)** restates that in new words. (A) is a true detail, but it crowns the old idea the passage exists to correct. (C) over-reaches: *most effective* is a ranking the text never makes.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The lighthouse was automated in 1968, but the keeper stayed on for another twenty years: the harbor still relied on his handwritten log of passing ships, a record the new equipment could not produce.\n\nAccording to the text, why did the keeper stay after the lighthouse was automated?\n\n(A) The automated light broke often and needed repairs.\n(B) The harbor still needed his handwritten log of passing ships.',
    steps: [
      { label: 'Name what is asked', content: 'A *reason* the keeper stayed — go find the sentence that owns it.' },
      { label: 'Read the whole sentence', content: 'The colon delivers the reason: the harbor *relied on his handwritten log*, which the new gear could not make.' },
      { label: 'Match', content: '**(B)** restates that fact in different words. (A) invents a breakdown the text never mentions.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'At dawn she oiled the hinges one by one, counted the empty pegs along the wall, and set two cups, from habit, in the sun — then, catching herself, put one back and left the other where it stood.\n\nWhich choice best states the main idea of the text?\n\n(A) The woman is preparing to welcome an expected visitor.\n(B) The woman\'s morning routine still carries the shape of a companionship that is gone.\n(C) The woman resents the chores of her solitary mornings.',
    steps: [
      { label: 'Find the turn', content: 'The turn is *then, catching herself* — before it she moves on autopilot; after it she corrects herself. The *empty* pegs and *two* cups *from habit* are the clues.' },
      { label: 'Take the most modest reading', content: 'The smallest claim that fits both halves: her routine is still built for two, and she catches it. That is **(B)**.' },
      { label: 'Reject the traps', content: '(A) invents a visitor — the cups are *habit*, not preparation. (C) adds *resentment* the words never show — an inflated tone. Pick the modest reading, not the dramatic one.' },
    ],
  },

  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'For decades, curators stored the oldest manuscripts in cool, perfectly still vaults, sure that stillness preserved them best. Newer conservation work points the other way: pages kept in motionless air trap the faint acids they give off, while gentle, filtered air circulation carries those acids away and slows the paper\'s decay.\n\nWhich choice best states the main idea of the text?\n\n(A) Curators have long stored old manuscripts in cool, still vaults.\n(B) Gentle air circulation can preserve old manuscripts better than perfectly still storage.\n(C) Still air is the single greatest threat facing every historical document.',
    steps: [
      { label: 'Find the point', content: 'The pivot is *points the other way* — the point lives after it. The passage says still air traps the acids and moving air clears them, so circulation preserves the pages better.' },
      { label: 'Say it in your own words', content: '*"Gentle airflow beats still air for keeping old paper."*' },
      { label: 'Match', content: '**(B)** restates that in new words. (A) is a true detail, but it states the old belief the passage exists to correct. (C) over-reads: *single greatest threat* and *every document* are rankings the text never makes.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'A friend asks what a passage was about and you say *"urban beekeeping."* Is that a topic or a point — and how would you fix it?',
    answer: 'A **topic.** Add the "so what?" to make it a point — a claim with a verb, like *"urban beekeeping is changing how cities plant their parks."* A label with no verb cannot cover the passage or eliminate any choice.',
  },
  {
    type: 'checkpointQuestion',
    question: 'On a main-idea question, two choices both use exact phrases from the passage. One names a single statistic; the other restates the whole argument. Which is more likely right, and why?',
    answer: 'The one restating the **whole argument.** The statistic covers only one sentence, so it fails the point test — it is a detail, not the main idea. And matching the passage\'s exact words is a lure, not proof.',
  },
  {
    type: 'checkpointQuestion',
    question: 'A choice restates the passage\'s main claim perfectly but adds the word *always* — where the passage said the method *often* works. Keep it or cut it?',
    answer: '**Cut it.** *Always* is one unsupported word: the passage said *often*, not *always*, and going from "often" to "always" is a claim the text never makes. Supported, not stated — a single overreaching word sinks an otherwise perfect choice.',
  },

  {
    type: 'text',
    content: '**The move, every time:** find the point (topic + so-what), expect the answer to paraphrase it, and reject any choice that repeats exact words, adds a claim, or answers from memory instead of the sentence. That is the whole skill.',
  },
];
