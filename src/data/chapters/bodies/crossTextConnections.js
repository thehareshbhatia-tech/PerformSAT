/**
 * Learn lesson body — Cross-Text Connections (Craft and Structure).
 *
 * VOICE v3 (adopted 2026-07-17, exemplar: bodies/centralIdeas.js): scannable
 * instructional register — direct address, contractions, 1-3 sentence text
 * blocks, list blocks for criteria, steps blocks for procedures; no analogies,
 * no pep-talk, no emojis. All substance of the v2 textbook version preserved.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const crossTextConnectionsBlocks = [
  {
    type: 'text',
    content: "Every reading skill so far — tracing ideas, drawing inferences, weighing evidence, parsing structure — has worked inside a single passage. This chapter completes the reading toolkit by setting two passages in conversation.",
  },
  {
    type: 'text',
    content: "Cross-text questions give you two short passages on one topic — Text 1 and Text 2 — then ask something like *\"How would the author of Text 2 respond to Text 1?\"*",
  },
  {
    type: 'text',
    content: "The stem sounds like a call for speculation. It isn't: everything each author believes is already stated in that author's own words. What these questions measure is **keeping the two positions straight**.",
  },

  { type: 'heading', content: "What's actually tested" },
  {
    type: 'text',
    content: "These items check whether you can hold **two separate positions** without blending them into one impression of \"what the passages say.\"",
  },
  {
    type: 'text',
    content: "The most frequent error is mixing the voices — attributing a detail from Text 1 to Text 2. It happens naturally: the texts share a topic, so after one read their claims blur together.",
  },
  {
    type: 'text',
    content: "The fix is procedural, not interpretive: label whose claim is whose before evaluating any answer choice.",
  },

  { type: 'heading', content: 'Step 1: state each claim separately' },
  {
    type: 'text',
    content: "After finishing Text 1, state its point in one short labeled phrase: *T1: street trees cut summer energy use.* Then do the same for Text 2: *T2: only where the canopies connect.*",
  },
  {
    type: 'text',
    content: "The standard for a good restatement: it's a **claim someone could dispute**, not a topic. \"Both are about trees and heat\" is a topic — nothing can agree or disagree with it, so it gives you no traction on the question.",
  },
  {
    type: 'text',
    content: "Refine each label until it's a sentence one author would defend and the other might challenge.",
  },
  {
    type: 'keyInsight',
    content: "Write two labeled lines before reading any choice. Every detail carries a source — ask of each one, *which text did this come from?*",
  },

  { type: 'heading', content: 'Step 2: name the relationship' },
  {
    type: 'text',
    content: "Read your two lines against each other and name **how** they relate — precisely, not just \"they agree\" or \"they disagree.\"",
  },
  {
    type: 'text',
    content: "State *where* the agreement ends: \"Both accept the transplants survive; they split on whether the method scales.\" That boundary is the hinge of the question, and finding it usually decides the answer.",
  },
  {
    type: 'table',
    headers: ['Relationship', 'What it means', 'Response it predicts'],
    rows: [
      ['Fully opposed', 'Both claims cannot be true', 'A direct objection at the split'],
      ['One qualifies the other', 'Grants part, pushes back on the rest', '"Yes, but..." — accept the shared part, dispute the rest'],
      ['Narrower objection', 'Accepts the point, disputes the method or scope', 'Challenge the support, not the whole claim'],
      ['Same data, different why', 'Both accept the finding, explain it differently', 'Point at what the rival explanation missed'],
      ['One adds to the other', 'No conflict; T2 supplies a missing piece', 'Welcome the claim and extend it'],
    ],
  },

  { type: 'heading', content: 'Step 3: predict, then match' },
  {
    type: 'text',
    content: "Before reading the choices, state Author 2's likely response in one sentence — limited to what the text actually **commits the author to**.",
  },
  {
    type: 'text',
    content: "However reasonable a real-world objection sounds, if no sentence licenses it, it isn't that author's response.",
  },
  {
    type: 'text',
    content: "Then sort the choices by direction — approve, object, qualify — and cut the ones pointing the wrong way before weighing any wording.",
  },
  {
    type: 'tip',
    content: "Confirm *whose* response the stem requests. \"How would Author 2 respond?\" asks about Author 2 — a choice that accurately describes **Author 1's** view is wrong even if every word of it matches the passage. Accurate wording in the wrong voice earns no credit.",
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Text 1: A survey found that students who ate breakfast reported feeling more alert, so skipping breakfast likely harms morning concentration.\n\nText 2: In controlled trials, students randomly assigned to eat or skip breakfast scored the same on identical attention tests, every time.\n\nHow would the author of Text 2 most likely respond to Text 1?\n\n(A) Direct attention tests show no difference, so the claim does not hold\n(B) Concentration does suffer, but poor sleep is the real cause\n(C) Breakfast still improves mood even when attention is unchanged',
    steps: [
      { label: 'State each claim', content: 'T1: skipping breakfast hurts concentration (from surveys). T2: direct trials found no difference at all.' },
      { label: 'Name the relationship', content: "Fully opposed — both can't be true. The hinge: whether skipping breakfast actually lowers measured attention." },
      { label: 'Predict', content: 'Author 2 objects: *my direct tests found no difference, so the claim fails.*' },
      { label: 'Match', content: "**(A)** restates the prediction almost verbatim. (B) starts by agreeing — the wrong direction — and adds sleep, which neither text mentions. (C) concedes a mood benefit no text raises. A response the text doesn't license can't be the author's response." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Text 1: Case studies show buildings with rooftop gardens ran cooler and used less summer energy, so green roofs are a proven cooling tool.\n\nText 2: Rooftop plants do lower surface temperatures — but measurements across many cities show the cooling shrinking as humidity rises, nearly vanishing in the most humid places.\n\nHow would the author of Text 2 most likely respond to the case studies in Text 1?\n\n(A) They likely come from drier climates and should not be generalized everywhere\n(B) They were poorly designed and their measurements cannot be trusted\n(C) They confirm green roofs deliver the same benefit in any climate',
    steps: [
      { label: 'State each claim', content: 'T1: green roofs are a proven cooling tool. T2: the cooling is real, but humidity shrinks it — climate decides the payoff.' },
      { label: 'Name the relationship', content: 'One qualifies the other. Shared ground: rooftop plants do cool. The split: whether the benefit holds everywhere.' },
      { label: 'Predict', content: "A yes-but response: *the cooling is real, but those studies can't speak for humid cities.*" },
      { label: 'Match', content: "**(A)** grants the finding and objects exactly at the scope. (B) is a wholesale attack — it denies cooling the author accepts, putting it on the wrong side of the shared ground. (C) erases the author's stated limit. The right answer here is the *least* combative choice offered — a frequent feature of qualifying relationships." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Text 1: The durability of ancient harbor concrete comes from its volcanic-ash mortar, which reacts with seawater to form interlocking minerals — the full explanation for its endurance.\n\nText 2: The same mortar also holds tiny lime fragments that dissolve when cracks let water in, resealing the cracks from within. Earlier accounts dismissed these fragments as sloppy mixing and never tested them.\n\nHow would the author of Text 2 most likely respond to Text 1?\n\n(A) It rightly names one source of strength but overlooks a second, self-repairing ingredient earlier work wrote off\n(B) It is wrong that volcanic ash reacts with seawater to form binding minerals\n(C) It should be discarded, since the lime fragments alone explain the durability',
    steps: [
      { label: 'State each claim', content: 'T1: the ash mortar is the whole story. T2: the same mortar also carries crack-healing lime fragments earlier accounts wrote off.' },
      { label: 'Name the relationship', content: 'Same data, different completeness. Both accept the ash chemistry; the split is whether ash is the *whole* story.' },
      { label: 'Predict', content: 'An incompleteness objection: *the ash explanation is right as far as it goes, but it missed the fragments it dismissed as a flaw.*' },
      { label: 'Match', content: "**(A)** grants the ash point and objects only where the text licenses it. (B) denies shared ground the author never disputes. (C) overshoots — the text says the mortar *also* has fragments, keeping ash in the account; *alone* and *discarded* push the author to an extreme position the text never takes. Choices that convert a both-and author into an only author are a recurring wrong-answer type." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Text 1: A biologist argues that the songbird\'s elaborate melodies evolved mainly to attract mates, since males with the richest songs pair off earliest each spring.\n\nText 2: Richer songs do help males win mates. But field recordings show males singing those same complex songs to drive rivals off a territory, long after mating season ends — the melodies clearly do more than one job.\n\nHow would the author of Text 2 most likely respond to Text 1?\n\n(A) The mating explanation is right as far as it goes, but the same songs also serve a second purpose it leaves out\n(B) Elaborate songs have nothing to do with attracting mates and are purely territorial warnings\n(C) Complex songs give males no real advantage of any kind',
    steps: [
      { label: 'State each claim', content: 'T1: elaborate songs evolved *mainly* to attract mates. T2: songs help win mates *and also* warn off rivals — they do more than one job.' },
      { label: 'Name the relationship', content: "One adds to the other. There's no conflict at the shared point: T2 explicitly agrees that richer songs help win mates and supplies a second function T1 left out." },
      { label: 'Predict', content: 'A welcome-and-extend response: *the mate-attraction claim is correct but incomplete — the songs do another job too.*' },
      { label: 'Match', content: "**(A)** accepts the shared claim and adds the missing piece — exactly what the text licenses. (B) denies the mate-attraction point T2 openly grants: the wrong side of the shared ground. (C) contradicts both texts. Here again the additive answer is the least combative choice offered." },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'Text 2\'s author accepts that a reef-restoration method grows healthy coral but doubts it can work at scale. A choice says she would "deny that the transplants survive." Valid?',
    answer: "**No.** Her own text grants that the transplants survive, so that choice has her denying a fact she accepts. Her licensed response targets the *scale*, not the survival. Map where the agreement ends before judging any choice — the objection lives at the split, not inside the shared ground.",
  },
  {
    type: 'checkpointQuestion',
    question: 'Why predict Author 2\'s response *before* reading the four choices instead of just weighing them directly?',
    answer: "**A prediction is checked once; an unformed impression has to be rebuilt four times** — one full rereading per choice. A prediction drawn from the author's actual commitments eliminates most choices quickly on direction or scope, and it anchors your evaluation to the text rather than to the distractors' framing.",
  },
  {
    type: 'checkpointQuestion',
    question: 'The stem asks how the author of Text 2 would respond, and one choice is a flawless summary of Text 1\'s own argument. Keep or cut?',
    answer: "**Cut.** Accurate wording in the wrong voice — it describes Author 1, not Author 2's response. Mixing the two voices is the most frequent error on these items, and this summary choice is built to attract readers who lost track of whose claim is whose. Before crediting any choice, confirm it speaks for the exact author the stem names.",
  },

  {
    type: 'text',
    content: "**In summary:** state each claim under its own label, name the relationship and its hinge, predict Author 2's response from what the text commits the author to, and match by direction first. Once the two positions stay separate, there's no speculation left in the question.",
  },
];
