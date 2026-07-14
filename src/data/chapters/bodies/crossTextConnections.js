/**
 * Learn lesson body — Cross-Text Connections (Craft and Structure).
 *
 * TUTOR VOICE (adopted 2026-07-14, user-approved exemplar:
 * bodies/mLinearEquations.js): coaching direct-address — talks TO the student,
 * anticipates the mistake before it happens, everyday anchor first and method
 * second, concrete decision rules. Lean structure unchanged: short headed
 * sections, a 3-step method, a relationship table, 4 worked examples,
 * 3 checkpoints. Invented passages/choices inside examples stay authentic
 * test material. Gated by bodies.test.js.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const crossTextConnectionsBlocks = [
  {
    type: 'text',
    content: "Two short passages, one topic — Text 1 and Text 2 — and a question like *\"How would the author of Text 2 respond to Text 1?\"* It reads like a mind-reading request. It isn't. You're the referee in a debate between two people who never met: everything each one believes is already down in their own words, and your whole job is **keeping the two voices straight**.",
  },

  { type: 'heading', content: 'What is actually tested' },
  {
    type: 'text',
    content: "Can you hold **two separate positions** without blending them into one mushy \"what the passages say\"? That's the entire skill being measured. The #1 error is mixing the voices — grabbing a detail from Text 1 and crediting it to Text 2 — and it happens for an innocent reason: both texts share a topic, so after one read their claims blur together. The fix is bookkeeping, not brilliance: label whose claim is whose before any answer choice gets a chance to tempt you.",
  },

  { type: 'heading', content: 'Step 1 — Pin each claim separately' },
  {
    type: 'text',
    content: "Finish Text 1, then say its point in one short labeled phrase: *T1: street trees cut summer energy use.* Do the same for Text 2: *T2: only where the canopies connect.* Here's the quality bar: a good line is a **claim someone could dispute**, not a topic. \"Both are about trees and heat\" is a topic — nothing can agree or disagree with it, so it gives you zero traction on the question. Push each label until it's a sentence one author would defend and the other might challenge.",
  },
  {
    type: 'keyInsight',
    content: 'Two labeled lines before you read any choice. An unlabeled detail is a loose wire — always ask *which text did this come from?*',
  },

  { type: 'heading', content: 'Step 2 — Name the relationship' },
  {
    type: 'text',
    content: "Now read your two lines against each other and name **how** they relate — precisely. Not just \"they agree / disagree,\" and not just a direction. Say *where* the agreement ends: \"Both accept the transplants survive; they split on whether the method scales.\" Find that hinge and you're most of the way home — the hinge already contains the answer.",
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

  { type: 'heading', content: 'Step 3 — Predict, then match' },
  {
    type: 'text',
    content: "Before you read the choices, say Author 2's likely response in one sentence — but only what their text actually **commits them to**. Treat the author like a witness under oath: no matter how smart a real-world objection sounds, if no sentence licenses it, it isn't their response. Then sweep the choices by direction (approve / object / qualify) and kill the wrong-side ones fast.",
  },
  {
    type: 'tip',
    content: 'Check *who\'s* responding. "How would Author 2 respond?" wants Author 2 — a choice that perfectly describes **Author 1\'s** view is wrong even if every word of it matches the passage. Right words, wrong voice, zero points.',
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Text 1: A survey found that students who ate breakfast reported feeling more alert, so skipping breakfast likely harms morning concentration.\n\nText 2: In controlled trials, students randomly assigned to eat or skip breakfast scored the same on identical attention tests, every time.\n\nHow would the author of Text 2 most likely respond to Text 1?\n\n(A) Direct attention tests show no difference, so the claim does not hold\n(B) Concentration does suffer, but poor sleep is the real cause\n(C) Breakfast still improves mood even when attention is unchanged',
    steps: [
      { label: 'Pin each claim', content: 'T1: skipping breakfast hurts concentration (from surveys). T2: direct trials found no difference at all.' },
      { label: 'Name the relationship', content: "Fully opposed — both can't be true. The hinge: does skipping breakfast actually lower measured attention?" },
      { label: 'Predict', content: 'Author 2 objects: *my direct tests found no difference, so the claim fails.*' },
      { label: 'Match', content: "**(A)** is your prediction almost verbatim. (B) agrees first — wrong side — and adds sleep, which neither text mentions. (C) concedes a mood benefit no text raises. If it isn't on the page, it isn't their response." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Text 1: Case studies show buildings with rooftop gardens ran cooler and used less summer energy, so green roofs are a proven cooling tool.\n\nText 2: Rooftop plants do lower surface temperatures — but measurements across many cities show the cooling shrinking as humidity rises, nearly vanishing in the most humid places.\n\nHow would the author of Text 2 most likely respond to the case studies in Text 1?\n\n(A) They likely come from drier climates and should not be generalized everywhere\n(B) They were poorly designed and their measurements cannot be trusted\n(C) They confirm green roofs deliver the same benefit in any climate',
    steps: [
      { label: 'Pin each claim', content: 'T1: green roofs are a proven cooling tool. T2: the cooling is real, but humidity shrinks it — climate decides the payoff.' },
      { label: 'Name the relationship', content: 'One qualifies the other. Shared ground: rooftop plants do cool. The split: does the benefit hold everywhere?' },
      { label: 'Predict', content: "A yes-but: *the cooling is real, but those studies can't speak for humid cities.*" },
      { label: 'Match', content: "**(A)** grants the finding and objects exactly at the scope. (B) is pure attack — it denies cooling she accepts, so it sits on the wrong side of the shared ground. (C) erases her stated limit. Notice the right answer is the *least* combative one on offer — that happens a lot here." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Text 1: The durability of ancient harbor concrete comes from its volcanic-ash mortar, which reacts with seawater to form interlocking minerals — the full explanation for its endurance.\n\nText 2: The same mortar also holds tiny lime fragments that dissolve when cracks let water in, resealing the cracks from within. Earlier accounts dismissed these fragments as sloppy mixing and never tested them.\n\nHow would the author of Text 2 most likely respond to Text 1?\n\n(A) It rightly names one source of strength but overlooks a second, self-repairing ingredient earlier work wrote off\n(B) It is wrong that volcanic ash reacts with seawater to form binding minerals\n(C) It should be discarded, since the lime fragments alone explain the durability',
    steps: [
      { label: 'Pin each claim', content: 'T1: the ash mortar is the whole story. T2: the same mortar also carries crack-healing lime fragments earlier accounts wrote off.' },
      { label: 'Name the relationship', content: 'Same data, different completeness. Both accept the ash chemistry; the split is whether ash is the *whole* story.' },
      { label: 'Predict', content: 'An incompleteness objection: *the ash explanation is right as far as it goes, but it missed the fragments it dismissed as a flaw.*' },
      { label: 'Match', content: '**(A)** grants the ash point and objects only where his text licenses it. (B) denies shared ground he never disputes. (C) overshoots — his text says the mortar *also* has fragments, keeping ash in the story; *alone* and *discarded* push him to an extreme he never took. Watch for choices that turn a both-and author into an only author.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Text 1: A biologist argues that the songbird\'s elaborate melodies evolved mainly to attract mates, since males with the richest songs pair off earliest each spring.\n\nText 2: Richer songs do help males win mates. But field recordings show males singing those same complex songs to drive rivals off a territory, long after mating season ends — the melodies clearly do more than one job.\n\nHow would the author of Text 2 most likely respond to Text 1?\n\n(A) The mating explanation is right as far as it goes, but the same songs also serve a second purpose it leaves out\n(B) Elaborate songs have nothing to do with attracting mates and are purely territorial warnings\n(C) Complex songs give males no real advantage of any kind',
    steps: [
      { label: 'Pin each claim', content: 'T1: elaborate songs evolved *mainly* to attract mates. T2: songs help win mates *and also* warn off rivals — they do more than one job.' },
      { label: 'Name the relationship', content: 'One adds to the other. No conflict at the shared point: T2 explicitly agrees richer songs help win mates. T2 just supplies a second function T1 left out.' },
      { label: 'Predict', content: 'A welcome-and-extend response: *the mate-attraction claim is correct but incomplete — the songs do another job too.*' },
      { label: 'Match', content: '**(A)** accepts the shared claim and adds the missing piece — exactly what the text licenses. (B) denies the mate-attraction point T2 openly grants: wrong side of the shared ground. (C) contradicts both texts. Once again the additive answer is the least combative one on offer.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'Text 2\'s author accepts that a reef-restoration method grows healthy coral but doubts it can work at scale. A choice says she would "deny that the transplants survive." Valid?',
    answer: '**No.** Her own text grants that the transplants survive — that choice has her denying a fact she accepts. Her licensed response targets the *scale*, not the survival. Map where the agreement ends before you judge a single choice; the objection lives at the split, never inside the shared ground.',
  },
  {
    type: 'checkpointQuestion',
    question: 'Why predict Author 2\'s response *before* reading the four choices instead of just weighing them directly?',
    answer: "Because a prediction gets checked once, while a blank impression gets rebuilt four times — one full re-read per choice. Predict from the author's actual commitments and three choices die on direction or scope in seconds. You do the thinking once, on your terms, instead of four times on the distractors' terms.",
  },
  {
    type: 'checkpointQuestion',
    question: 'The stem asks how the author of Text 2 would respond, and one choice is a flawless summary of Text 1\'s own argument. Keep or cut?',
    answer: "**Cut.** Right words, wrong voice — it describes Author 1, not Author 2's response. Mixing the two voices is the single most frequent error on these items, and that flawless summary was written to catch students who lost track of whose line is whose. Before you credit any choice, confirm it speaks for the exact author the stem names.",
  },

  {
    type: 'text',
    content: "**The move, every time:** pin each claim under its own label → name the relationship and its hinge → predict Author 2's response from what their text actually commits to → match by direction first. Keep the two voices straight and there's no mind-reading left.",
  },
];
