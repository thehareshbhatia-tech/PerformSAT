/**
 * Learn lesson body — Command of Evidence, Textual (Information and Ideas).
 *
 * NEW lean "review / cheat-sheet" style (not the old dense textbook chapter):
 * one-sentence lede, a handful of short one-idea sections in plain language,
 * a couple of worked examples, and a check-yourself pair. ~1-2 min.
 * Voice + shape exemplar: bodies/gSubjectVerbAgreement.js.
 * Gated by bodies.test.js (lean contract).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const commandOfEvidenceTextualBlocks = [
  {
    type: 'text',
    content: 'These questions hand you a claim and four candidates for backing it up. Your job is not to find the choice on the right *topic* — it is to find the one that pushes in the right *direction* on that exact claim. **Direction, not topic.**',
  },

  { type: 'heading', content: 'The two shapes' },
  {
    type: 'text',
    content: 'You will see one of two stems. **Support / weaken:** a passage builds to a finding or hypothesis and asks *which finding, if true, would most directly strengthen (or weaken) it?* **Illustrate:** a passage states a point about a poem or story and asks which quotation best *illustrates* it. Same discipline runs both.',
  },

  { type: 'heading', content: 'Step 1 — Say the claim in your own words' },
  {
    type: 'text',
    content: 'Before the choices, find the sentence being tested and restate it plainly, keeping every qualifier (*only in winter*, *because of the coating*, *this species*). Passages often carry two views — a common one and a new proposal — so check **whose** claim the stem names. Judge every choice against that one claim.',
  },

  { type: 'heading', content: 'Step 2 — Decide the direction you need' },
  {
    type: 'text',
    content: 'Read the task verb. **Support** = a finding pointing the *same* way as the claim. **Weaken** = a finding pointing the *opposite* way, showing *no relationship*, or giving a counterexample. Weaken never means "prove false" — just "most inconsistent." A flat "no difference was found" *does* weaken a claim that asserts a difference.',
  },
  {
    type: 'keyInsight',
    content: 'A choice can be **true and on-topic and still do nothing** to the claim. Ask of each one: *if this is true, does the claim become more likely, less likely, or unchanged?* "Unchanged" means it is garnish, however accurate.',
  },

  { type: 'heading', content: 'Step 3 — Match the choice to THAT claim' },
  {
    type: 'text',
    content: 'Sort each choice: right direction, wrong direction, or no bearing. Two traps to watch: (1) the **on-topic bystander** — a true fact about the subject that never moves the claim; (2) the **wrong condition** — the right effect pinned to a component or group the claim did not name. If the claim says *ingredient X causes the benefit*, a result about the *whole product* does not isolate X.',
  },
  {
    type: 'tip',
    content: 'Read every choice to its last clause. A common trap opens with exactly the finding you want, then a final clause quietly kills it ("...at a site where it never froze anyway"). And if a choice needs *you* to build a story connecting it to the claim, that effort is the answer: it is wrong.',
  },

  { type: 'heading', content: 'For "illustrate" questions: enact, do not echo' },
  {
    type: 'text',
    content: 'The right quotation must actually *perform* the claim, not just share its mood. Translate each line into flat prose, then check: if the claim says the speaker *urges*, the line must tell someone to do something; if it names a *contrast*, two things must actually be contrasted — the right two. A gorgeous line in the right mood that performs the wrong act is the classic bait.',
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Claim: A town’s new shielded streetlights reduced its light pollution.\n\nWhich finding, if true, most directly supports the claim?\n\n(A) The shielded lights cost less to maintain than the old ones.\n(B) Sky-brightness readings taken after installation fell by a third.',
    steps: [
      { label: 'State the claim', content: 'Shielded lights → *less light pollution*. Direction I need for support: a finding showing pollution actually dropped.' },
      { label: 'Test each choice', content: '(A) is true and about the streetlights, but cost says nothing about pollution — on-topic bystander. (B) is a direct measure of pollution going down.' },
      { label: 'Answer', content: '**(B).** It moves the exact claim; (A) sits in the right building but turns no lock.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Claim: The new canal caused Marlow’s population to double in the following decade.\n\nWhich finding, if true, most directly weakens the claim?\n\n(A) Marlow’s mills shipped more cloth by canal in 1851 than in 1841.\n(B) Three nearby towns with no canal also doubled in the same decade.\n(C) The canal took six years and heavy local labor to build.',
    steps: [
      { label: 'State the claim + direction', content: 'The doubling is not in dispute — the *canal’s role in causing it* is. To weaken, I want the effect appearing **without** the cause (a counterexample).' },
      { label: 'Test each choice', content: '(A) points the same way — it supports. (C) is an on-topic fact about the canal that leaves the causal link untouched. (B) is the counterexample: growth happened where there was no canal.' },
      { label: 'Answer', content: '**(B).** It does not prove the canal did nothing — it just makes "the canal caused it" the least likely story. Most inconsistent wins.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Claim: In the poem, the speaker *urges a companion* to come see the orchard before its blossoms fall.\n\nWhich quotation best illustrates the claim?\n\n(A) "How brief the blossom’s reign, how grey the bough that held it!"\n(B) "Come, walk with me among the rows while all the white is falling."\n(C) "What eye could watch such color go, and never once look up?"',
    steps: [
      { label: 'Pin what must be performed', content: 'The verb is *urges*; the participants are the speaker and a companion; the subject is a vanishing sight. The line must literally ask someone to come.' },
      { label: 'Filter, then translate', content: '(C) is a question — it can mourn but cannot urge. (A) is a lament that addresses no one. (B) in flat prose: *come walk with me while the petals are still falling* — an imperative aimed at a companion, about a beauty disappearing.' },
      { label: 'Answer', content: '**(B).** The bait is (C): the most striking line, performing the wrong act. Enactment beats mood.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'A report claims a new breakwater made a harbor’s water calmer. Which moves that claim: (a) *wave heights inside the harbor fell by half after it was built*, or (b) *it took ten thousand tons of granite to build*?',
    answer: '**(a).** Its truth makes the claim more likely — calmer water is exactly what it reports. (b) is entirely about the breakwater yet leaves the claim as unproven as before: on-topic, zero bearing.',
  },
  {
    type: 'checkpointQuestion',
    question: 'On a weaken item, a student eliminates a choice because "the passage never mentions this experiment." Sound reasoning?',
    answer: 'No. *If true* stamps every choice as a new fact — none of them is supposed to appear in the passage. The only question is which way the finding pushes the named claim. Demanding passage-verification imports a rule from a different question type.',
  },

  {
    type: 'text',
    content: '**The move, every time:** say the claim plainly → decide the direction (support or weaken) → pick the choice that pushes *that* claim that way, reading to the last clause. Topic proves nothing; direction decides everything.',
  },
];
