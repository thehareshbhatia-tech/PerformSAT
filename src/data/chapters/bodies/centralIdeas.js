/**
 * Learn lesson body — Central Ideas & Details (Information and Ideas).
 *
 * VOICE (adopted 2026-07-15, exemplar: mLinearEquations.js): professional
 * textbook narrative — teaches directly in flowing prose (concept, why it
 * works, how to apply, common errors) in the measured register of a
 * well-edited textbook. Concrete contexts framed plainly as examples;
 * extended metaphors, cute headings, and pep-talk are out. Headings name
 * the concept. Gated by bodies.test.js.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const centralIdeasBlocks = [
  {
    type: 'text',
    content: "Reading on this test progresses from what a text states, to what it implies, to what would prove it — and it begins with finding the point. Central ideas and details questions present a short paragraph and one of two tasks: identify the main idea, or report what the text says about a particular subject. Both tasks are open-book — the answer is present on the screen. The work consists of reading for the passage's one point, then finding the choice that states that point in different words.",
  },

  { type: 'heading', content: 'Topic vs. point' },
  {
    type: 'text',
    content: "A **topic** names a subject; a **point** makes a claim about that subject. Consider a passage on city street trees: *\"the text is about street trees\"* is a topic — an accurate label, but a label with no verb. *\"Street trees pay a city back several times over\"* is a point — the topic plus an answer to the question *so what?* The difference between the two is the verb. A main-idea question always asks for the point, never a bare subject label, no matter how accurate the label is.",
  },
  {
    type: 'keyInsight',
    content: "The **so-what test:** a summary that begins *\"it's about…\"* is a topic, not a point. Apply the question *so what?* to the topic until the summary becomes a claim with a verb (*pays back, spreads faster, was misread*).",
  },

  { type: 'heading', content: 'The right answer is a paraphrase' },
  {
    type: 'text',
    content: "The credited choice states the passage's idea in **different words** — usually one step more general. The design reason is straightforward: an answer that echoed the passage word for word could be matched by sight without any comprehension, so credited answers are almost never phrased that way. Where the passage says *\"the tool they built caught fainter signals,\"* the answer says *\"their new instrument improved measurements\"* — the same claim in new words.",
  },
  {
    type: 'tip',
    content: "**Same words: suspect. Same meaning, different words: promising.** Distractors frequently repeat the passage's exact phrases — the familiarity makes them sound safe while the relationship between the borrowed terms has been altered. A choice that sounds exactly like the text warrants a second, slower reading.",
  },
  {
    type: 'text',
    content: "The second failure mode is addition. A choice that introduces a comparison, a cause, or a superlative the passage never states — or that quietly turns *one researcher* into *researchers* — over-reads the text. Hold every choice to the standard **supported, not stated:** every word must be backed by the text, and a single unsupported word disqualifies the entire choice.",
  },

  { type: 'heading', content: 'Detail questions: locating the source sentence' },
  {
    type: 'text',
    content: "For a question of the form *\"according to the text, why did X happen?\"*, memory supplies an answer instantly, and that answer is unreliable. Memory stores an approximate gist, and incorrect choices are routinely written to match that gist — close enough to sound right, wrong on the one word that decides the question. Locate the sentence that actually discusses X and **read it from its first word**: the qualifier that settles the answer usually sits in the front half of the sentence, exactly where a keyword scan passes over it. Nothing on these questions requires deduction; the task is to find and match.",
  },

  { type: 'heading', content: 'Tracking what "this" points to' },
  {
    type: 'text',
    content: "Academic prose rarely repeats an idea in full. Once a claim has been stated, the next sentence compresses it into a short phrase — *this phenomenon*, *this discrepancy*, *such an approach*, sometimes a bare *this* — and builds on the compressed version. These phrases name **ideas, not objects:** the referent of *this discrepancy* is usually an entire prior sentence, occasionally two. A question that turns on one of these phrases is really testing whether the compressed idea has been unpacked, so hunting for a single nearby noun to serve as the referent misses the point of the construction.",
  },
  {
    type: 'text',
    content: "The method is mechanical. The referent sits **behind** the phrase, so rereading the phrase itself — or reading onward from it — never resolves it. Back up to the previous sentence, read forward from its beginning, and **restate the referent in full** before looking at any choice: *the surveys found far fewer birds than the recordings implied*, not a one-word label. Two refinements complete the method. First, referents do not carry over: the same *this* can point to a new idea one paragraph later, so each occurrence is resolved fresh. Second, *the former* and *the latter* index into the **original** pair — *former* names the item listed first, *latter* the item listed second — regardless of which one the follow-up sentence happens to discuss first.",
  },
  {
    type: 'tip',
    content: "**Test a referent by substitution.** Replace *this discrepancy* with the restated idea and reread the sentence. If the sentence still makes sense, the referent holds; if it turns strange, the phrase was pointing somewhere else.",
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
    content: "Many informational passages open with a belief the author does not hold. The set-up is marked by **distance language**: *it was long thought*, *conventional wisdom held*, *many assumed*, *scientists once believed*, or a bare *historically*. Each phrase attributes the belief to other people rather than asserting it — and an author who attributes a belief instead of owning it is usually preparing to correct it. The hedge is therefore a forecast: expect a pivot (*but*, *however*, *yet*, *recent evidence suggests*), and expect the author's actual position in the sentences after the turn. On such a passage the most dependable wrong answer can be predicted before the choices appear: the one that crowns the **opening belief** as the main idea.",
  },
  {
    type: 'text',
    content: "The forecast is a prediction to verify, not a rule to impose. Some passages simply describe a topic, and some genuinely defend the established view; in those, no turn ever arrives, and the opening claim really is the point. A hedge raises the expectation of a pivot — only the pivot itself confirms it. A second calibration: the new idea does not always demolish the old one. Often it merely qualifies it, and the old view survives in limited form; choices announcing that the passage *disproves* or *rejects* the earlier belief overshoot a passage that only refines it.",
  },

  { type: 'heading', content: 'Literary passages' },
  {
    type: 'text',
    content: "A story or poem does not argue a thesis, so read it **literally** rather than searching for one. Track who is present, what they want, and what changes from the first line to the last. Locate the **turn** — a shift in image, tense, or addressee — because the point usually resides there. Then adopt the **most modest reading** that still fits the whole passage, not the most dramatic or symbolic one. When students miss literary questions, the cause is almost never reading too shallowly; it is reading in drama that does not appear on the page.",
  },
  {
    type: 'text',
    content: "Older fiction raises the difficulty through **language, not logic** — inverted word order, period vocabulary, formal address. When a word or phrase is opaque, read around it: the sentence's skeleton (who did what, who wants what) usually survives even when an adjective or a period term does not, and the question is answerable from the readable parts. Extract that ledger of persons and wants, and leave the ornament unresolved rather than guessing at it.",
  },
  {
    type: 'text',
    content: "Two further disciplines govern period settings. First, modern social assumptions stay out: what a formal visit, an inheritance, or a mode of address implies in the passage's era is whatever the passage itself establishes, nothing more. Second, match the temperature of the words. Wrong answers on literary items routinely inflate a mild observation into grand drama — wistfulness into despair, fondness into passion, a quiet difference of opinion into a bitter feud. The credited answer stays as calm as the words on the page.",
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
    answer: "**Cut it.** *Always* is a single unsupported word: the passage said *often*, and stretching *often* into *always* asserts a claim the text never makes. Under the supported-not-stated standard, one overreaching word disqualifies an otherwise accurate choice.",
  },

  {
    type: 'text',
    content: "**In summary:** find the point (the topic plus its so-what), expect the credited answer to paraphrase it, and eliminate any choice that echoes exact wording, adds an unstated claim, or rests on memory rather than the sentence itself. Those three checks cover the entire skill.",
  },
];
