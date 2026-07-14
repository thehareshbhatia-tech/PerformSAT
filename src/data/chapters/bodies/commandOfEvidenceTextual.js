/**
 * Learn lesson body — Command of Evidence, Textual (Information and Ideas).
 *
 * TUTOR VOICE (adopted 2026-07-14, user-approved exemplar:
 * bodies/mLinearEquations.js): coaching direct-address — talks TO the student,
 * everyday anchor first (choices as courtroom witnesses), anticipates the trap
 * before it fires ("read to the last clause"), concrete decision rules
 * ("direction, not topic"). Invented claims, findings, and quotations inside
 * example blocks stay authentic test material. Lean structure unchanged;
 * gated by bodies.test.js.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const commandOfEvidenceTextualBlocks = [
  {
    type: 'text',
    content: "You get a claim and four candidates for backing it up — and all four sit on the claim's *topic*, on purpose, so topic can't tell them apart. Think of the choices as witnesses: a witness can be honest, on-topic, and still leave the verdict exactly where it was. You're hunting the one that actually pushes the claim — the right claim, the right way. **Direction, not topic.**",
  },

  { type: 'heading', content: 'The two shapes' },
  {
    type: 'text',
    content: "You'll see one of two stems. **Support / weaken:** a passage builds to a finding or hypothesis and asks *which finding, if true, would most directly strengthen (or weaken) it?* **Illustrate:** a passage states a point about a poem or story and asks which quotation best *illustrates* it. Same discipline runs both.",
  },

  { type: 'heading', content: 'Step 1 — Say the claim in your own words' },
  {
    type: 'text',
    content: "Before you touch the choices, find the sentence being tested and say it plainly — keeping every qualifier (*only in winter*, *because of the coating*, *this species*). The qualifiers are where right and wrong split: drop *only in winter* from the claim and a summer finding suddenly looks relevant when it shouldn't. And when a passage carries two views — a common belief and a new proposal — check **whose** claim the stem names before you judge anything. Every choice gets measured against that one claim.",
  },

  { type: 'heading', content: 'Step 2 — Decide the direction you need' },
  {
    type: 'text',
    content: "Now read the task verb. **Support** = a finding pointing the *same* way as the claim. **Weaken** = a finding pointing the *opposite* way, showing *no relationship*, or handing you a counterexample. Weaken never means \"prove false\" — just \"most inconsistent.\" A flat \"no difference was found\" *does* weaken a claim that asserts a difference.",
  },
  {
    type: 'keyInsight',
    content: "A choice can be **true, on-topic, and still do nothing** to the claim. Ask of each one: *if this is true, does the claim get more likely, less likely, or stay unchanged?* Unchanged means garnish, however accurate.",
  },

  { type: 'heading', content: 'Step 3 — Match the choice to THAT claim' },
  {
    type: 'text',
    content: "Sort each choice: right direction, wrong direction, or no bearing. Two traps are waiting for you: (1) the **on-topic bystander** — a true fact about the subject that never moves the claim; (2) the **wrong condition** — the right effect pinned to a component or group the claim didn't name. If the claim says *ingredient X causes the benefit*, a result about the *whole product* doesn't isolate X.",
  },
  {
    type: 'tip',
    content: "Read every choice to its last clause. A favorite trap opens with exactly the finding you want, then a final clause quietly kills it (\"...at a site where it never froze anyway\"). And if you catch yourself building a story to connect a choice to the claim, that effort IS the verdict: it's wrong.",
  },

  { type: 'heading', content: 'For "illustrate" questions: enact, do not echo' },
  {
    type: 'text',
    content: "The right quotation has to actually *perform* the claim, not just share its mood. Translate each line into flat prose, then check the act: if the claim says the speaker *urges*, the line has to tell someone to do something; if it names a *contrast*, two things have to actually be contrasted — the right two. A gorgeous line in the right mood that performs the wrong act is the classic bait.",
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Claim: A town’s new shielded streetlights reduced its light pollution.\n\nWhich finding, if true, most directly supports the claim?\n\n(A) The shielded lights cost less to maintain than the old ones.\n(B) Sky-brightness readings taken after installation fell by a third.',
    steps: [
      { label: 'State the claim', content: "Shielded lights → *less light pollution*. To support it, you want a finding showing pollution actually dropped." },
      { label: 'Test each choice', content: "(A) is true and about the streetlights, but cost says nothing about pollution — your on-topic bystander. (B) is a direct measurement of pollution going down." },
      { label: 'Answer', content: "**(B).** It moves the exact claim. (A) sits in the right building but turns no lock." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Claim: The new canal caused Marlow’s population to double in the following decade.\n\nWhich finding, if true, most directly weakens the claim?\n\n(A) Marlow’s mills shipped more cloth by canal in 1851 than in 1841.\n(B) Three nearby towns with no canal also doubled in the same decade.\n(C) The canal took six years and heavy local labor to build.',
    steps: [
      { label: 'State the claim + direction', content: "Nobody disputes the doubling — what's on trial is the *canal's role in causing it*. To weaken a causal claim, look for the effect showing up **without** the cause." },
      { label: 'Test each choice', content: "(A) points the same way as the claim — that supports. (C) is an on-topic fact about the canal that never touches the causal link. (B) is your counterexample: the growth happened where there was no canal at all." },
      { label: 'Answer', content: "**(B).** It doesn't prove the canal did nothing — it just makes \"the canal caused it\" the least likely story. Most inconsistent wins." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Claim: In the poem, the speaker *urges a companion* to come see the orchard before its blossoms fall.\n\nWhich quotation best illustrates the claim?\n\n(A) "How brief the blossom’s reign, how grey the bough that held it!"\n(B) "Come, walk with me among the rows while all the white is falling."\n(C) "What eye could watch such color go, and never once look up?"',
    steps: [
      { label: 'Pin what must be performed', content: "The verb is *urges*; the cast is the speaker plus a companion; the subject is a vanishing sight. So the winning line has to literally ask someone to come." },
      { label: 'Filter, then translate', content: "(C) is a question — it can mourn, but it can't urge. (A) is a lament aimed at no one. (B) in flat prose: *come walk with me while the petals are still falling* — an imperative, aimed at a companion, about a beauty disappearing." },
      { label: 'Answer', content: "**(B).** The bait is (C) — the most striking line in the set, performing the wrong act. Enactment beats mood, every time." },
    ],
  },

  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Claim: A researcher argues that it is the clay lining, *not the depth*, that keeps the old reservoir from leaking.\n\nWhich finding, if true, most directly supports the claim?\n\n(A) A nearby reservoir of the same depth, but with no clay lining, loses its water quickly.\n(B) The old reservoir is one of the deepest in the region.\n(C) The clay for the lining was carried in from a riverbed miles away.',
    steps: [
      { label: 'State the claim', content: "The claim isolates one cause: *the clay* seals the reservoir, *not the depth*. To support it, you want evidence pointing at clay specifically and away from depth." },
      { label: 'Test each choice', content: "(B) is about depth — the very factor the claim dismisses, so it can't support this claim. (C) is a true fact about where the clay came from, but it says nothing about clay stopping leaks — bystander again. (A) holds depth constant and removes only the clay: without clay, it leaks." },
      { label: 'Answer', content: "**(A).** Same depth, no clay, fast leak — that isolates the clay as what does the sealing, which is exactly the direction the claim needs." },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'A report claims a new breakwater made a harbor’s water calmer. Which moves that claim: (a) *wave heights inside the harbor fell by half after it was built*, or (b) *it took ten thousand tons of granite to build*?',
    answer: "**(a).** If it's true, the claim gets more likely — calmer water is exactly what it reports. (b) is entirely about the breakwater and still leaves the claim exactly as unproven as before: on-topic, zero bearing.",
  },
  {
    type: 'checkpointQuestion',
    question: 'On a weaken item, a student eliminates a choice because "the passage never mentions this experiment." Sound reasoning?',
    answer: "No. *If true* stamps every choice as a brand-new fact — none of them is supposed to appear in the passage. The only question worth asking is which way the finding pushes the named claim. Demanding passage-verification imports a rule from a different question type.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A support item\'s claim: a new vaccine reduced infections in the treated village. A choice reads *"Infections there dropped by half — the same drop seen that year in every untreated village nearby."* Does it support the claim?',
    answer: "No. The opening looks like support — infections fell — but the final clause shows the identical drop everywhere, treated or not, so the vaccine can't be what caused it. Read every choice to its last clause: the ending can quietly reverse the opening.",
  },

  {
    type: 'text',
    content: "**The move, every time:** say the claim plainly → decide the direction (support or weaken) → keep the one choice that pushes *that* claim that way, reading to the last clause. Topic proves nothing; direction decides everything.",
  },
];
