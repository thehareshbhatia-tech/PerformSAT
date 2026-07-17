/**
 * Learn lesson body — Command of Evidence, Textual (Information and Ideas).
 *
 * VOICE v3 (adopted 2026-07-17, exemplar: bodies/centralIdeas.js): scannable
 * instructional register — direct address, contractions, 1-3 sentence text
 * blocks, list blocks for criteria, steps blocks for procedures; no
 * analogies, no pep-talk, no emojis. All substance of the v2 textbook
 * version preserved.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const commandOfEvidenceTextualBlocks = [
  {
    type: 'text',
    content: "Inference questions move forward — from stated facts to the conclusion they force. Textual command-of-evidence questions run the same operation in reverse: the claim comes first, and four candidate findings get tested against it.",
  },
  {
    type: 'text',
    content: "All four choices address the claim's topic, so topic alone can't separate them. A choice can be accurate, on-topic, and still leave the claim exactly where it stood.",
  },
  {
    type: 'keyInsight',
    content: "The credited answer is the one that moves the specific claim named in the question, in the direction the question requires. **Direction, not topic.**",
  },

  { type: 'heading', content: 'The two question formats' },
  {
    type: 'list',
    items: [
      "**Support / weaken** — a passage builds to a finding or hypothesis and asks *which finding, if true, would most directly strengthen (or weaken) it?*",
      "**Illustrate** — a passage states a point about a poem or story and asks which quotation best *illustrates* it.",
    ],
  },
  {
    type: 'text',
    content: "The same method handles both.",
  },

  { type: 'heading', content: 'Step 1: restate the claim precisely' },
  {
    type: 'text',
    content: "Before reading the choices, find the sentence being tested and restate it plainly — keeping every qualifier (*only in winter*, *because of the coating*, *this species*).",
  },
  {
    type: 'text',
    content: "The qualifiers are where right and wrong answers separate. A restatement that drops *only in winter* makes a summer finding look relevant when it isn't.",
  },
  {
    type: 'text',
    content: "When a passage presents two views — a common belief and a new proposal — confirm **whose** claim the stem names before evaluating anything. Every choice gets measured against that one claim.",
  },

  { type: 'heading', content: 'Step 2: identify the required direction' },
  {
    type: 'text',
    content: "The task verb sets the direction:",
  },
  {
    type: 'list',
    items: [
      "**Support** — a finding pointing the *same* way as the claim.",
      "**Weaken** — a finding pointing the *opposite* way, showing *no relationship*, or supplying a counterexample.",
    ],
  },
  {
    type: 'text',
    content: "Weakening doesn't require proving the claim false — only being the finding *most inconsistent* with it. A flat \"no difference was found\" does weaken a claim that asserts a difference.",
  },
  {
    type: 'keyInsight',
    content: "A choice can be **true, on-topic, and still have no effect** on the claim. Ask of each one: *if this is true, does the claim become more likely, less likely, or stay unchanged?* Unchanged means wrong, however accurate the choice is.",
  },

  { type: 'heading', content: 'Step 3: test each choice against the exact claim' },
  {
    type: 'text',
    content: "Sort each choice into one of three bins: right direction, wrong direction, or no bearing.",
  },
  {
    type: 'list',
    title: 'Two error patterns account for most misses:',
    items: [
      "**The on-topic bystander** — a true fact about the subject that never moves the claim.",
      "**The wrong condition** — the right effect attached to a component or group the claim didn't name. If the claim says *ingredient X causes the benefit*, a result about the *whole product* doesn't isolate X.",
    ],
  },
  {
    type: 'tip',
    content: "Read every choice to its final clause. Wrong choices routinely open with exactly the finding the claim needs, then undercut it in a closing clause (\"...at a site where it never froze anyway\").",
  },
  {
    type: 'text',
    content: "A related signal: if connecting a choice to the claim requires building an extra story, that effort is itself the verdict — the choice is wrong.",
  },

  { type: 'heading', content: 'Illustration questions: performing the claim' },
  {
    type: 'text',
    content: "The correct quotation must actually *perform* the claim, not just share its mood.",
  },
  {
    type: 'text',
    content: "Translate each line into flat prose, then check the act. If the claim says the speaker *urges*, the line must tell someone to do something; if the claim names a *contrast*, two things must actually be contrasted — the right two.",
  },
  {
    type: 'text',
    content: "The classic miss is a striking line in the right mood that performs the wrong act.",
  },

  { type: 'heading', content: 'How to approach these questions' },
  {
    type: 'steps',
    items: [
      "**Restate the claim, qualifiers intact.** Find the sentence being tested, put it in plain words, and confirm whose claim it is.",
      "**Set the direction.** Support means same way as the claim; weaken means opposite way, no relationship, or a counterexample.",
      "**Sort the choices.** Right direction, wrong direction, or no bearing — reading each one to its final clause.",
      "**On illustrate items, check the act.** Translate the line into flat prose and confirm it performs the claim's verb.",
    ],
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Claim: A town’s new shielded streetlights reduced its light pollution.\n\nWhich finding, if true, most directly supports the claim?\n\n(A) The shielded lights cost less to maintain than the old ones.\n(B) Sky-brightness readings taken after installation fell by a third.',
    steps: [
      { label: 'State the claim', content: "Shielded lights → *less light pollution*. Supporting it takes a finding that pollution actually dropped." },
      { label: 'Test each choice', content: "(A) is true and concerns the streetlights, but cost says nothing about pollution — an on-topic bystander. (B) is a direct measurement of pollution falling." },
      { label: 'Answer', content: "**(B).** It moves the exact claim; (A) is accurate but has no bearing on it." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Claim: The new canal caused Marlow’s population to double in the following decade.\n\nWhich finding, if true, most directly weakens the claim?\n\n(A) Marlow’s mills shipped more cloth by canal in 1851 than in 1841.\n(B) Three nearby towns with no canal also doubled in the same decade.\n(C) The canal took six years and heavy local labor to build.',
    steps: [
      { label: 'State the claim and direction', content: "The doubling itself isn't in dispute — the claim under test is the *canal's causal role*. To weaken a causal claim, look for the effect occurring **without** the cause." },
      { label: 'Test each choice', content: "(A) points the same way as the claim — it supports rather than weakens. (C) is an on-topic fact about the canal that never touches the causal link. (B) is the counterexample: the same growth happened where there was no canal at all." },
      { label: 'Answer', content: "**(B).** It doesn't prove the canal had no effect — it makes \"the canal caused it\" the explanation least consistent with the evidence, which is all weakening requires." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Claim: In the poem, the speaker *urges a companion* to come see the orchard before its blossoms fall.\n\nWhich quotation best illustrates the claim?\n\n(A) "How brief the blossom’s reign, how grey the bough that held it!"\n(B) "Come, walk with me among the rows while all the white is falling."\n(C) "What eye could watch such color go, and never once look up?"',
    steps: [
      { label: 'Identify what must be performed', content: "The verb is *urges*; the participants are the speaker and a companion; the subject is a vanishing sight. The correct line must literally ask someone to come." },
      { label: 'Translate and filter', content: "(C) is a question — it can mourn, but it can't urge. (A) is a lament addressed to no one. (B) in flat prose: *come walk with me while the petals are still falling* — an imperative, addressed to a companion, about a disappearing sight." },
      { label: 'Answer', content: "**(B).** The intended distractor is (C) — the most striking line in the set, performing the wrong act. Enactment, not mood, decides the answer." },
    ],
  },

  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Claim: A researcher argues that it is the clay lining, *not the depth*, that keeps the old reservoir from leaking.\n\nWhich finding, if true, most directly supports the claim?\n\n(A) A nearby reservoir of the same depth, but with no clay lining, loses its water quickly.\n(B) The old reservoir is one of the deepest in the region.\n(C) The clay for the lining was carried in from a riverbed miles away.',
    steps: [
      { label: 'State the claim', content: "The claim isolates one cause: *the clay* seals the reservoir, *not the depth*. Supporting it takes evidence pointing at the clay specifically and away from depth." },
      { label: 'Test each choice', content: "(B) concerns depth — the factor the claim dismisses — so it can't support this claim. (C) is a true fact about the clay's origin that says nothing about the clay stopping leaks: an on-topic bystander. (A) holds depth constant and removes only the clay: without the clay, the reservoir leaks." },
      { label: 'Answer', content: "**(A).** Same depth, no clay, rapid leak — the comparison isolates the clay as the sealing agent, exactly the direction the claim requires." },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'A report claims a new breakwater made a harbor’s water calmer. Which moves that claim: (a) *wave heights inside the harbor fell by half after it was built*, or (b) *it took ten thousand tons of granite to build*?',
    answer: "**(a).** If it's true, the claim becomes more likely — calmer water is exactly what the claim reports. (b) is entirely about the breakwater yet leaves the claim exactly as unproven as before: on-topic, with no bearing.",
  },
  {
    type: 'checkpointQuestion',
    question: 'On a weaken item, a student eliminates a choice because "the passage never mentions this experiment." Sound reasoning?',
    answer: "**No.** The phrase *if true* stipulates that every choice is a new fact — none is expected to appear in the passage. The only question that matters is which way the finding pushes the named claim. Requiring passage verification imports a rule from a different question type.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A support item\'s claim: a new vaccine reduced infections in the treated village. A choice reads *"Infections there dropped by half — the same drop seen that year in every untreated village nearby."* Does it support the claim?',
    answer: "**No.** The opening reads as support — infections fell — but the final clause shows the identical drop everywhere, treated or not, so the vaccine can't be the cause. Read every choice to its final clause: the ending can quietly reverse the opening.",
  },

  {
    type: 'text',
    content: "**The whole skill in three checks:** restate the claim plainly, set the required direction (support or weaken), and keep the one choice that pushes *that* claim in that direction — reading each choice to its final clause. Topic proves nothing; direction decides the answer.",
  },
];
