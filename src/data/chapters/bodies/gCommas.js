/**
 * Learn lesson body — Commas & Nonessential Elements (Standard English Conventions).
 *
 * VOICE v4 (adopted 2026-07-18, exemplar: bodies/centralIdeas.js): practiced-tutor
 * register — developed 2-5 sentence paragraphs with connective tissue; every rule
 * earns its "because"; student-psychology named concretely; math teaching is
 * example-led; varied rhythm, no aphorism-per-block. Bans carried from v3: no
 * analogies, no pep talk, no exclamation marks, no emojis, no test-personification.
 * All v3 teaching claims preserved.
 *
 * COMPOSED MODE (2026-07-18): chapterOpener lede + auto-numbered
 * sections/examples/figures + aside margin-notes + summary close
 * (exemplar: bodies/mPercents.js).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const gCommasBlocks = [
  {
    type: 'chapterOpener',
    lede: "Sentence boundaries settled which marks can stand between two complete sentences, and the comma was the notable exclusion — the one mark that can't hold that position alone. Inside the sentence, though, the comma has real jobs of its own, and nearly every comma question reduces to one distinction: is the phrase extra information, or identifying information? **Extra information takes commas; identifying information takes none.**",
  },
  {
    type: 'text',
    content: "Notice what that rule never mentions: pausing. Most students carry an informal rule from somewhere in middle school — put a comma where you'd take a breath — and these questions punish it, because a long sentence invites a breath in places no comma belongs. The pause-for-breath comma is never the basis of a correct answer. Run the extra-or-identifying test first, and most comma decisions follow from it.",
  },

  { type: 'heading', content: 'The removal test' },
  {
    type: 'text',
    content: "The test for extra versus identifying is physical: cover the phrase and read the sentence without it. What remains tells you which kind of phrase you're holding.",
  },
  {
    type: 'list',
    items: [
      'The sentence still makes sense and still refers to the same thing → the phrase is **extra**. Set it off with a comma or a matching pair.',
      'Removing it leaves the question *which one?* unanswered → the phrase is **essential**. No commas.',
    ],
  },
  {
    type: 'text',
    content: "Try it on *My brother, who lives in Denver, is visiting*. Cover *who lives in Denver* and the sentence still points at the same person — you know exactly who's visiting, Denver or no Denver. The clause is extra, so it takes commas.",
  },

  { type: 'heading', content: 'Essential elements take no commas' },
  {
    type: 'text',
    content: "Now run the same test where it lands the other way. In *The student who scored highest won a prize*, covering *who scored highest* collapses the sentence to *the student won a prize* — and immediately you're asking *which student?* The clause was carrying the identification, so the sentence depends on it, and a phrase the sentence depends on is written without commas.",
  },
  {
    type: 'keyInsight',
    content: "Commas around a phrase are a claim: they assert the phrase is removable — **the sentence loses nothing without it.** If deleting the phrase changes the meaning, the commas are making a false claim, and a false claim about the sentence's own structure is a wrong answer.",
  },

  { type: 'heading', content: 'That vs. which / who' },
  {
    type: 'text',
    content: "One pair of words carries this distinction on its surface. A clause beginning with *that* is **always** essential — *the report that changed everything* — so a comma never comes before *that*. Commas around a *which* or *who* clause mark it as extra, incidental information: *the report, which changed everything, ...*. Read those two versions side by side, because the words inside the clauses are identical; the commas alone decide which claim the sentence makes.",
  },
  {
    type: 'aside',
    kind: 'remember',
    content: "An answer choice containing *, that* can be eliminated on sight — no rereading of the rest of the sentence required.",
  },

  { type: 'heading', content: 'Names: essential or extra?' },
  {
    type: 'text',
    content: "Names trip students up because both punctuations look reasonable on the page. The deciding question is whether the noun before the name **already identifies one unique person**. If it does — *her only sister* can be exactly one person — the name adds nothing the sentence needs in order to point at her, so it's extra and takes commas. If it doesn't — *the chemist* could be any of thousands — then the name is doing the identifying, and identifying information takes none.",
  },
  {
    type: 'table',
    headers: ['Sentence', 'Commas?', 'Why'],
    rows: [
      ['*Her only sister, Maren, called.*', 'Yes', 'Only one sister — the name is extra'],
      ['*The poet Maren Vale spoke.*', 'No', 'One poet among many — the name identifies which'],
      ['*microbiologist Ana Reyes*', 'No', 'A title before a name never takes a comma'],
    ],
  },

  { type: 'heading', content: 'Matching marks around interruptions' },
  {
    type: 'text',
    content: "An interruption that opens has to close, and it closes with the same mark that opened it: comma…comma or dash…dash, never one of each. *The results — surprising to everyone, were published.* opens with a dash and closes with a comma, and plenty of careful readers sail right past it. There's a reason the mismatch survives: a reader verifies the first mark, decides the interruption is legal, and skims the second — and wrong answers are built around exactly that half-check.",
  },
  {
    type: 'text',
    content: "So check both ends every time. The corrected pair reads *The results — surprising to everyone — were published.*",
  },

  { type: 'heading', content: 'Every comma must serve a function' },
  {
    type: 'text',
    content: "Behind all of these cases sits one accounting principle: a comma is justified only by a function you can name — not a feeling that the sentence wants a break, but a job from a short, closed list. If no function can be named, the comma gets deleted. The recognized functions:",
  },
  {
    type: 'table',
    headers: ['Function', 'Example'],
    rows: [
      ['Separate items in a list', '*red, white, and blue*'],
      ['After an introductory phrase', '*After the storm, we left.*'],
      ['One half of a matched pair around extra information', '*Ravi, our captain, agreed.*'],
      ['Before a FANBOYS conjunction joining two full sentences', '*She ran, and he walked.*'],
      ['Between coordinate adjectives that each modify the noun', '*a long, tedious meeting*'],
    ],
  },
  {
    type: 'aside',
    kind: 'watch',
    content: "One placement is never correct: a comma **never separates a subject from its verb**, however long the subject runs. *The students who studied all week, passed.* is wrong because that comma serves no nameable function — and long subjects are where the error thrives, because by the time you finally reach the verb, the sentence feels overdue for a pause. The convention doesn't permit one.",
  },

  { type: 'heading', content: 'Coordinate adjectives' },
  {
    type: 'text',
    content: "When two adjectives each modify the noun independently — *a long, tedious meeting*, where the meeting is long and the meeting is also tedious — they're **coordinate**, and a comma separates them.",
  },
  {
    type: 'list',
    title: 'Two tests confirm the relationship — both must pass:',
    items: [
      '**Swap the adjectives.** *a tedious, long meeting* — still natural.',
      '**Insert *and*.** *a long and tedious meeting* — still natural.',
    ],
  },
  {
    type: 'text',
    content: "When either test fails, the adjectives are **cumulative**: the first modifies the adjective-noun unit as a whole, not the noun alone. That's why *an old stone wall* takes no comma — it describes an old [stone wall], and both tests break: *a stone old wall* and *an old and stone wall* are equally unnatural. And one placement is wrong no matter how the adjectives relate: no comma ever separates the final adjective from its noun, so *a long, tedious, meeting* is incorrect in every case.",
  },

  { type: 'heading', content: 'Compound predicates' },
  {
    type: 'text',
    content: "One subject performing two actions is a **compound predicate**, and no comma comes before the *and* that joins the two verbs: *She wrote the report and filed it.* Why no comma, when comma-before-FANBOYS is on the approved list? Because that function requires a complete sentence on each side of the conjunction, and here the subject is never restated — *filed it* has no subject of its own.",
  },
  {
    type: 'text',
    content: "The **period-substitution test** decides these instantly. Replace the comma and conjunction with a period and demand two complete sentences: *She wrote the report. Filed it.* The second piece fails, so *She wrote the report, and filed it* is incorrect. The versions that trip students almost always carry a long second verb phrase — length invites the comma by feel, which is precisely the feel these items exploit — so let the mechanical verdict overrule your ear.",
  },

  { type: 'heading', content: 'Semicolons in lists' },
  {
    type: 'text',
    content: "When list items contain commas of their own, commas alone can't show where one item ends and the next begins — written comma-only, *scholars from Lima, Peru, Accra, Ghana, and Hanoi, Vietnam* appears to list six places rather than three. So **semicolons take over as the list separators**: *The symposium drew scholars from Lima, Peru; Accra, Ghana; and Hanoi, Vietnam.* The stronger mark carves the item boundaries, and the commas keep doing their local work inside each item.",
  },
  {
    type: 'text',
    content: "One requirement comes with the upgrade: the separators must be uniform. Either every boundary in the list takes a semicolon or none does — a list that alternates commas and semicolons as separators is wrong on its face.",
  },

  { type: 'heading', content: 'Direct vs. embedded questions' },
  {
    type: 'text',
    content: "A **direct question** asks. It inverts the word order — verb before subject — and ends with a question mark: *Did the trial succeed?* An **embedded question** folds that questioning content inside a statement, typically after *whether, if, what, why,* or *how*: *The reviewers asked whether the trial had succeeded.* It keeps statement order, subject before verb, and it ends with a period, because the sentence as a whole asserts something — that the reviewers asked — rather than asking anything itself.",
  },
  {
    type: 'text',
    content: "The two signals must agree, and that agreement is what gets tested. *She wondered why the results varied?* pairs statement order with a question mark; *asked whether had the trial succeeded* forces inverted order into an embedded clause. Both fail on internal inconsistency alone. Students reach for the question mark whenever the topic feels uncertain — but the end mark punctuates what the sentence does, not whether its subject matter is in doubt.",
  },
  {
    type: 'tip',
    content: "An embedded question ends with a **period**, not a question mark: *She asked whether it worked.* The sentence reports information rather than posing a question — the word *whether* is the signal of the embedded form.",
  },
  {
    type: 'table',
    headers: ['Form', 'Word order', 'End mark'],
    rows: [
      ['Direct question', 'inverted — verb before subject: *Did the trial succeed*', 'question mark'],
      ['Embedded question', 'statement order — subject before verb: *whether the trial succeeded*', 'period'],
    ],
  },

  { type: 'heading', content: 'How to approach these questions' },
  {
    type: 'steps',
    items: [
      '**Cover the phrase and reread.** Still clear which one is meant? The phrase is extra — commas. Left asking *which one?* — essential, no commas.',
      '**Check the pair.** An interruption closes with the same mark that opened it: comma…comma or dash…dash, never one of each.',
      "**Name the comma's function.** List separator, introductory phrase, matched pair, FANBOYS join between two full sentences, or coordinate adjectives — a comma with no nameable function gets deleted.",
      '**Watch the two never-placements.** No comma before *that*, and no comma between a subject and its verb.',
    ],
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The novel ______ won every major award that year, sold millions of copies.\n\n(A) , which\n(B) that\n(C) which\n(D) , that',
    steps: [
      { label: 'Classify the phrase', content: 'The phrase adds a fact about the novel, but the novel is already identified — the phrase is **extra**.' },
      { label: 'Apply the that/which rule', content: "*That* marks an essential clause and never follows a comma — that eliminates (B) and (D). Bare *which* in (C) would present the phrase as essential, and it isn't." },
      { label: 'Answer', content: '**(A) , which** — the comma with *which* correctly marks the extra information.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Choose the correct version:\n\n(A) The chemist, Rosa Lind, discovered the compound.\n(B) The chemist Rosa Lind discovered the compound.',
    steps: [
      { label: 'Test for uniqueness', content: "*The chemist* doesn't identify one unique person by itself — the name specifies **which** chemist." },
      { label: 'Apply the rule', content: "The name is identifying, so it's essential. Commas here would wrongly assert that only one chemist is under discussion." },
      { label: 'Answer', content: '**(B)** — no commas. Compare *microbiologist Ana Reyes*: a title before a name never takes a comma.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'The bridge, a marvel of engineering ______ reopened last spring.\n\n(A) ,\n(B) —\n(C) (no mark)\n(D) ;',
    steps: [
      { label: 'Identify the opened pair', content: 'A comma has already opened an interruption after *bridge*: *, a marvel of engineering*. An opened interruption has to close.' },
      { label: 'Match the opening mark', content: 'The interruption opened with a comma, so it closes with a **comma** — the two marks must match. The dash in (B) would create a mismatched pair.' },
      { label: 'Answer', content: '**(A) ,** — the pair is comma…comma. A semicolon in (D) would leave a fragment on one side.' },
    ],
  },

  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The students who studied together every night ______ the hardest exam of the term.\n\n(A) , passed\n(B) passed\n(C) passed,',
    steps: [
      { label: 'Find the subject and verb', content: "The subject is *The students who studied together every night* — the *who* clause identifies **which** students, so it's essential and takes no commas. The verb is *passed*." },
      { label: 'Apply the subject-verb rule', content: 'A comma between a subject and its verb serves no function, however long the subject runs → **(B)**.' },
      { label: 'Eliminate the alternatives', content: '(A) places a lone comma directly before the verb; (C) places one between *passed* and its object *the hardest exam*. Neither comma has a nameable job.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'The lab, that we toured on Friday, has since expanded. What is wrong here?',
    answer: '**Two errors.** *That* never follows a comma — an immediate flag. The correction depends on the intended meaning: if the tour detail is extra information, write *, which we toured on Friday,*; if it identifies **which** lab, write *The lab that we toured on Friday has expanded* — no commas and no *which*. The sentence has to commit to one claim and punctuate it consistently.',
  },
  {
    type: 'checkpointQuestion',
    question: 'The researchers wondered whether the effect was real. Question mark or period?',
    answer: '**Period.** This is an embedded question — the sentence reports that they wondered; it does not itself pose a question. The word *whether* signals the embedded form.',
  },
  {
    type: 'checkpointQuestion',
    question: 'For the school play, the lead role went to Ana, and the understudy was Theo. Does the comma before "and" have a job?',
    answer: '**Yes.** *The lead role went to Ana* and *the understudy was Theo* each stand alone as complete sentences, so the comma before the FANBOYS conjunction *and* performs its recognized function of joining two full sentences. Without the *and*, the same comma would create a comma splice — the conjunction is what makes the join grammatical.',
  },
  {
    type: 'checkpointQuestion',
    question: 'She proofread the essay, and submitted it before the deadline. Does that comma have a job?',
    answer: "**No — delete it.** Run period-substitution: *She proofread the essay. Submitted it before the deadline.* The second piece isn't a sentence, so this is one subject with two verbs — a compound predicate — not two sentences joined by *and*. The comma-before-FANBOYS function requires a complete sentence on each side: *She proofread the essay and submitted it before the deadline.*",
  },

  {
    type: 'summary',
    title: 'The whole skill in three checks',
    points: [
      'Cover the phrase and reread: **extra information takes commas**, identifying information takes none.',
      'An interruption closes with the **same mark that opened it** — never a comma paired with a dash.',
      'A comma survives only with a **nameable function**; one that serves none gets deleted.',
      'Two placements are never legal — no comma before **that**, and none between a subject and its verb.',
    ],
  },
];
