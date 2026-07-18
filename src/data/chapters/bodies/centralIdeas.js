/**
 * Learn lesson body — Central Ideas & Details (Information and Ideas).
 *
 * VOICE v4 (ADOPTED 2026-07-18 — THIS FILE IS THE EXEMPLAR; user-approved, rolled out corpus-wide): practiced-tutor
 * register. Developed paragraphs (2-5 sentences) with real connective tissue,
 * not aphoristic fragments; every rule earns its "because," sometimes
 * self-interrogated ("Why X? Because…"); the prose knows real students — it
 * names what they actually do and why the test profits from it; teaching
 * leads with or extracts from examples; bold lands mid-sentence on the
 * load-bearing claim, and box blocks (keyInsight / tip) are rationed to the
 * few genuinely load-bearing moves. Rhythm varies — a short sentence lands
 * only after long ones have earned it. Still OUT (carried from v3): extended
 * metaphors and analogy-coaching, pep talk, exclamation marks, emojis,
 * test-personification. All teaching claims of v3 preserved.
 * Narrative bridge to the previous chapter stays.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const centralIdeasBlocks = [
  {
    type: 'text',
    content: "Reading questions on this test build in layers — what a text says, what it implies, what would prove it. Central ideas and details questions are the first layer, and every test you take will include them. They are also the most honest questions on the exam: no outside knowledge helps, no deep analysis is required, and the answer is sitting on the screen. Each one hands you a short paragraph and one of two tasks — identify the main idea, or report what the text says about one specific thing.",
  },
  {
    type: 'text',
    content: "That sounds like the kind of question nobody should miss, and yet plenty of strong readers do. Almost every miss traces back to one of two habits: summarizing the passage as a subject instead of a claim, or answering from memory instead of from the sentence. This chapter is about replacing both.",
  },

  { type: 'heading', content: 'Topic vs. point' },
  {
    type: 'text',
    content: "A **topic** names a subject. A **point** makes a claim about that subject. Say a passage spends its six sentences on city street trees. *\"The text is about street trees\"* is a topic — accurate, but it's just a label, and no answer choice gets credited for being a label. *\"Street trees pay a city back several times over\"* is a point: the topic plus a commitment to saying something about it.",
  },
  {
    type: 'text',
    content: "Main-idea questions always want the point, and the distinction matters more than it looks. A student who summarizes a passage as *\"it's about X\"* has done the easy half of the work and stopped — and the test writes wrong answers specifically for that student: choices that name the right topic while making the wrong claim about it. If you arrive at the choices holding only a topic, those options all look equally plausible, and you're reduced to picking the one that sounds nicest.",
  },
  {
    type: 'keyInsight',
    content: "The **so-what test:** if your summary starts *\"it's about…\"*, you're holding a topic, not a point. Ask *so what?* until the summary becomes a claim with a verb — street trees *pay the city back*, the method *was misread*. Now you have something the choices can be checked against.",
  },

  { type: 'heading', content: 'What the right answer looks like' },
  {
    type: 'text',
    content: "The credited choice restates the passage's point in **different words**, usually one step more general. There's a reason it works this way: an answer that repeated the passage word for word could be matched by sight, without any comprehension, so the test almost never writes one. That produces a rule of thumb most students find backwards at first — the choice that sounds most like the passage is often a trap, and the choice that has rephrased everything is often the answer.",
  },
  {
    type: 'list',
    title: 'The main idea **should**:',
    items: [
      'cover most of the details the passage introduces',
      "restate the passage's point in new words",
      'stay within what the text actually says',
    ],
  },
  {
    type: 'list',
    title: 'The main idea should **not**:',
    items: [
      'zoom in on just one detail from the text',
      'add ideas the passage never mentions — a comparison, a cause, a superlative',
      'contradict the text',
    ],
  },
  {
    type: 'tip',
    content: "**Same words: suspect. Same meaning, different words: promising.** Distractors borrow the passage's exact phrases because familiar words feel safe. A choice that echoes the text verbatim hasn't earned your trust — it has earned a second, slower read to see what claim it's actually making.",
  },
  {
    type: 'text',
    content: "And be strict about scope, because one unsupported word is enough to sink a choice. If the passage says a method *often* works and a choice says it *always* does, that single word is the whole question. Every word of the credited answer has to be backed by the text — the test grades the whole sentence, not its general drift.",
  },

  { type: 'heading', content: 'Details questions: go back and read' },
  {
    type: 'text',
    content: "A details question asks something specific: *according to the text, why did X happen?* The tempting move is to answer from memory, because memory offers something instantly — and what it offers is exactly what the wrong answers are built to match. Memory stores the gist of a passage, not its qualifiers, and detail distractors are the gist with one word changed.",
  },
  {
    type: 'text',
    content: "So make going back to the text a reflex rather than a backup plan. The question's own wording tells you where to look. Find the sentence that actually discusses X and read it from its first word — the qualifier that settles the answer usually sits early in the sentence, right where a keyword scan skips past it. Nothing here requires deduction. It is, honestly, find and match; what's being tested is whether you'll actually look.",
  },

  { type: 'heading', content: 'When the text says "this"' },
  {
    type: 'text',
    content: "Academic prose almost never repeats an idea in full. Once a claim is on the page, the next sentence compresses it into a short phrase — *this phenomenon*, *this discrepancy*, *such an approach* — and builds on the compressed version. These phrases point at **ideas, not objects**: the referent of *this discrepancy* is usually an entire prior sentence, not any single noun inside it. Questions about these phrases reward one specific physical habit — moving your eyes backward.",
  },
  {
    type: 'steps',
    title: 'Resolving a "this" phrase',
    items: [
      "Back up. The referent sits **behind** the phrase, so rereading the phrase — or reading onward from it — never finds it.",
      'Read the previous sentence from its beginning.',
      "Restate the referent in full before checking any choice: *the surveys found far fewer birds than the recordings implied* — a whole idea, not a one-word label.",
    ],
  },
  {
    type: 'text',
    content: "Two refinements, because the test knows students learn the basic move. Referents don't carry over — the same *this* can point to a new idea a paragraph later, so resolve each one fresh. And *the former* / *the latter* index into the **original** pair in the order it was first listed: *former* is the item named first, *latter* the second, no matter which one the follow-up sentence happens to discuss first. Passages exploit exactly that reversal.",
  },
  {
    type: 'tip',
    content: "**Test a referent by substitution.** Swap your restated idea in for *this discrepancy* and reread the sentence. Still makes sense? The referent holds. Turns strange? The phrase was pointing somewhere else.",
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Ground surveys of the island recorded barely two hundred nesting pairs of shearwaters. Yet acoustic monitors, listening through the same seasons, logged call activity consistent with a colony several times that size. This discrepancy, researchers now argue, says less about the birds than about the counting: shearwaters return to their burrows only in full darkness, hours after survey teams have gone.\n\nAs used in the text, "this discrepancy" refers to the difference between\n\n(A) the colony size the surveys recorded and the larger size the acoustic monitors implied.\n(B) the counting methods favored by rival teams of researchers.\n(C) the hours the survey teams worked and the hours the shearwaters were active.',
    steps: [
      { label: 'Back up to the referent', content: "*This discrepancy* compresses the two sentences before it, so the answer lies behind the phrase. Return to the start of the first sentence and read forward: surveys counted about two hundred pairs; the monitors implied several times that number." },
      { label: 'Restate it in full', content: "The discrepancy is the mismatch between two measurements of colony size — a whole comparison, not any single noun in the passage." },
      { label: 'Match', content: "**(A)** states that comparison. (B) invents a rivalry — two instruments disagree, not two camps of researchers. (C) names the *explanation* for the discrepancy (the timing of the visits), not the discrepancy itself: a true fact from the passage attached to the wrong referent." },
    ],
  },
  {
    type: 'checkpointQuestion',
    question: 'A passage introduces two proposals — a tax first, a subsidy second — and a later paragraph says *"the latter proved cheaper,"* after discussing the subsidy first in that paragraph. Which proposal is *the latter*?',
    answer: "The **subsidy** — but not because the later paragraph mentions it first. *Former* and *latter* index into the original pair by original order: the tax was listed first (*former*), the subsidy second (*latter*). Order of mention in the follow-up sentence never changes the assignment; passages exploit exactly that reversal.",
  },

  { type: 'heading', content: 'Beliefs set up to be challenged' },
  {
    type: 'text',
    content: "Many passages open with a belief the author doesn't actually hold, and a large share of wrong answers on main-idea questions come from crowning that opening belief as the point. The giveaway is **distance language**:",
  },
  {
    type: 'list',
    items: [
      '*it was long thought…*',
      '*conventional wisdom held…*',
      '*many assumed…*',
      '*scientists once believed…*',
      'a bare *historically…*',
    ],
  },
  {
    type: 'text',
    content: "Each phrase pins the belief on other people, and an author who goes out of the way to attribute a belief instead of owning it is usually about to correct it. So when a passage opens at arm's length, expect a pivot — *but*, *however*, *yet* — and expect the author's real position right after the turn. You can often predict the classic wrong answer before reading a single choice: it will state the opening belief, accurately and in convincing detail.",
  },
  {
    type: 'text',
    content: "Two calibrations keep this from becoming a reflex that misfires. The hedge is a forecast, not a guarantee — some passages genuinely defend the old view, and if no pivot ever arrives, the opening claim really is the point. And the new idea doesn't always demolish the old one; often it only qualifies it, so a choice claiming the passage *disproves* the earlier belief overshoots a passage that merely refines it.",
  },

  { type: 'heading', content: 'Literary passages' },
  {
    type: 'text',
    content: "A story or poem doesn't argue a thesis, so don't hunt for one. Read it literally — who is present, what they want, what changes between the first line and the last — and then find the **turn**: a shift in image, tense, or addressee. The point of a literary passage usually lives at its turn.",
  },
  {
    type: 'text',
    content: "When you reach the choices, take the **most modest reading** that covers the whole passage. Students who miss literary questions almost never miss by reading too shallowly; they read in drama that isn't on the page — wistfulness inflated into despair, a quiet disagreement into a bitter feud. The credited answer stays as calm as the page itself.",
  },
  {
    type: 'text',
    content: "Older fiction is hard through **language, not logic** — inverted word order, period vocabulary, formal address. When a phrase goes opaque, read around it: the sentence's skeleton (who did what, who wants what) usually survives, and the question is answerable from the readable parts.",
  },
  {
    type: 'list',
    title: 'Two rules for period settings:',
    items: [
      'Leave modern social assumptions out. A formal visit or an inheritance means whatever the passage says it means — nothing more.',
      'Match the temperature of the words. Wrong answers run hotter than the text; the credited answer never does.',
    ],
  },

  { type: 'heading', content: 'How to approach these questions' },
  {
    type: 'steps',
    items: [
      "**Summarize as you read.** Don't skim. Read closely and put the ideas in your own words — by the end, you're holding the passage's point instead of hunting for it.",
      '**Name the task.** Main idea, or one specific detail? The question tells you which.',
      '**Revisit the text.** For a main idea, check your summary for the overarching claim. For a detail, go to the sentence that discusses it and read it from the start.',
      "**Predict, then match.** Answer in your own words before reading the choices, then find the choice that says the same thing. Stuck between two? Cut the one that echoes exact wording, adds something new, or contradicts the text.",
    ],
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Planners once treated rooftop gardens as decoration. But recent city studies tell another story: the gardens cool the buildings below, soak up storm runoff, and cut energy bills enough to repay their cost within a few years.\n\nWhich choice best states the main idea of the text?\n\n(A) Planners once viewed rooftop gardens as mere decoration.\n(B) Rooftop gardens are a practical investment that pays a building back, not just decoration.\n(C) Rooftop gardens are the most effective way to cool a city.',
    steps: [
      { label: 'Find the point', content: "*But* marks the pivot — the point follows it. Everything past that word lists ways the gardens save money and repay their cost." },
      { label: 'Restate it in new words', content: '*"The gardens are useful, not just decorative — they pay off."*' },
      { label: 'Match', content: "**(B)** restates that claim in new words. (A) is true, but it states the old view the passage exists to correct. (C) over-reaches: *most effective* is a ranking the text never makes." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The lighthouse was automated in 1968, but the keeper stayed on for another twenty years: the harbor still relied on his handwritten log of passing ships, a record the new equipment could not produce.\n\nAccording to the text, why did the keeper stay after the lighthouse was automated?\n\n(A) The automated light broke often and needed repairs.\n(B) The harbor still needed his handwritten log of passing ships.',
    steps: [
      { label: 'Name what is asked', content: "The question asks for a *reason* the keeper stayed, so locate the sentence that contains that reason." },
      { label: 'Read the whole sentence', content: "The clause after the colon supplies it: the harbor *relied on his handwritten log*, which the new equipment could not produce." },
      { label: 'Match', content: "**(B)** states that fact in different words. (A) invents a breakdown the text never mentions — a gist-plausible claim with no sentence behind it." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'At dawn she oiled the hinges one by one, counted the empty pegs along the wall, and set two cups, from habit, in the sun — then, catching herself, put one back and left the other where it stood.\n\nWhich choice best states the main idea of the text?\n\n(A) The woman is preparing to welcome an expected visitor.\n(B) The woman\'s morning routine still carries the shape of a companionship that is gone.\n(C) The woman resents the chores of her solitary mornings.',
    steps: [
      { label: 'Find the turn', content: "*then, catching herself* is the turn — before it she acts on habit; after it she corrects course. The *empty* pegs and the *two* cups set *from habit* carry the meaning." },
      { label: 'Take the most modest reading', content: "The smallest claim that covers both halves: her routine is still built for two, and she notices. That is **(B)**." },
      { label: 'Reject the alternatives', content: "(A) invents a visitor — the cups are set from *habit*, not in preparation. (C) reads in a *resentment* the words never show. When two readings both fit, the more modest one is credited." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'For decades, curators stored the oldest manuscripts in cool, perfectly still vaults, sure that stillness preserved them best. Newer conservation work points the other way: pages kept in motionless air trap the faint acids they give off, while gentle, filtered air circulation carries those acids away and slows the paper\'s decay.\n\nWhich choice best states the main idea of the text?\n\n(A) Curators have long stored old manuscripts in cool, still vaults.\n(B) Gentle air circulation can preserve old manuscripts better than perfectly still storage.\n(C) Still air is the single greatest threat facing every historical document.',
    steps: [
      { label: 'Find the point', content: "*points the other way* marks the pivot — the point follows it: still air traps the acids, moving air clears them, so circulation preserves the pages better." },
      { label: 'Restate it in new words', content: '*"Gentle airflow beats still air for keeping old paper."*' },
      { label: 'Match', content: "**(B)** restates that claim in new words. (A) is true, but it states the old belief the passage exists to correct. (C) over-reads: *single greatest threat* and *every document* are rankings the text never makes." },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'A friend asks what a passage was about and you say *"urban beekeeping."* Is that a topic or a point — and how would you fix it?',
    answer: "A **topic.** Applying the so-what test turns it into a point — a claim with a verb, such as *\"urban beekeeping is changing how cities plant their parks.\"* A label with no verb cannot summarize the passage, and it cannot eliminate a single answer choice.",
  },
  {
    type: 'checkpointQuestion',
    question: 'On a main-idea question, two choices both use exact phrases from the passage. One names a single statistic; the other restates the whole argument. Which is more likely right, and why?',
    answer: "The one restating the **whole argument.** The statistic covers only one sentence, so it fails the so-what test — a detail presented at main-idea scale. Matching the passage's exact words is not evidence of correctness; it is the standard surface of a distractor.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A choice restates the passage\'s main claim perfectly but adds the word *always* — where the passage said the method *often* works. Keep it or cut it?',
    answer: "**Cut it.** *Always* is a single unsupported word: the passage said *often*, and stretching *often* into *always* asserts a claim the text never makes. One overreaching word disqualifies an otherwise accurate choice.",
  },

  {
    type: 'text',
    content: "**The whole skill in three checks:** find the point (the topic plus its *so what*), expect the credited answer to paraphrase it, and cut any choice that echoes exact wording, adds an unstated claim, or leans on memory instead of the sentence itself. Everything the later reading chapters add — inference, evidence, comparison — is built on top of this one habit of reading for the point.",
  },
];
