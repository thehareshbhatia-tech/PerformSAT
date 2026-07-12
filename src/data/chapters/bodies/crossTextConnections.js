/**
 * Learn lesson body — Cross-Text Connections (Craft and Structure).
 *
 * NEW lean "review / cheat-sheet" style (not the old dense textbook template):
 * one SAT skill per lesson, plain language, one idea per short section, a
 * method, a scannable table, then 2-3 worked examples and a couple of
 * check-yourself questions. Gated by bodies.test.js (lean contract).
 * Voice + shape exemplar: bodies/gSubjectVerbAgreement.js.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const crossTextConnectionsBlocks = [
  {
    type: 'text',
    content: 'You get **two short passages on one topic** — Text 1 and Text 2 — and a question about how they relate, usually *"How would the author of Text 2 respond to Text 1?"* It feels like mind-reading. It is not: the answer is already in each author\'s own words. The whole skill is **keeping the two voices straight**.',
  },

  { type: 'heading', content: 'What is actually tested' },
  {
    type: 'text',
    content: 'The test wants to know if you can hold **two separate positions** without blending them into one mushy "what the passages say." The #1 error is mixing the voices — grabbing a detail from Text 1 and calling it Text 2\'s view. So the real skill is bookkeeping: whose claim is whose.',
  },

  { type: 'heading', content: 'Step 1 — Pin each claim separately' },
  {
    type: 'text',
    content: 'After Text 1, say its point in one short phrase with a label: *T1: street trees cut summer energy use.* Do the same for Text 2: *T2: only where the canopies connect.* A good line is a **claim someone could dispute**, not a topic. "Both are about trees and heat" is a topic — nothing can agree or disagree with it.',
  },
  {
    type: 'keyInsight',
    content: 'Two labeled lines before you read any choice. A detail with no label is useless — always ask *which text did this come from?*',
  },

  { type: 'heading', content: 'Step 2 — Name the relationship' },
  {
    type: 'text',
    content: 'Read the two lines against each other and name **how** they relate — precisely. Not just "they agree / disagree," and not just a direction. Say *where* the agreement ends: "Both accept the transplants survive; they split on whether the method scales." That hinge already contains the answer.',
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
    content: 'Before reading the choices, say Author 2\'s likely response in one sentence — but **only what their text actually commits them to**. Treat the author like a witness under oath: no matter how smart a real-world objection sounds, if no sentence licenses it, it is not their response. Then sweep the choices by direction (approve / object / qualify) and kill the wrong-side ones fast.',
  },
  {
    type: 'tip',
    content: 'Check *who* is responding. "How would Author 2 respond?" wants Author 2 — a choice that perfectly describes **Author 1\'s** view is wrong, every word of it matching the passage or not.',
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Text 1: A survey found that students who ate breakfast reported feeling more alert, so skipping breakfast likely harms morning concentration.\n\nText 2: In controlled trials, students randomly assigned to eat or skip breakfast scored the same on identical attention tests, every time.\n\nHow would the author of Text 2 most likely respond to Text 1?\n\n(A) Direct attention tests show no difference, so the claim does not hold\n(B) Concentration does suffer, but poor sleep is the real cause\n(C) Breakfast still improves mood even when attention is unchanged',
    steps: [
      { label: 'Pin each claim', content: 'T1: skipping breakfast hurts concentration (from surveys). T2: direct trials found no difference at all.' },
      { label: 'Name the relationship', content: 'Fully opposed — both cannot be true. The hinge: does skipping breakfast actually lower measured attention?' },
      { label: 'Predict', content: 'T2 would object: *my direct tests found no difference, so the claim fails.*' },
      { label: 'Match', content: '**(A)** is the prediction almost verbatim. (B) agrees first (wrong side) and adds sleep, which no text mentions. (C) concedes a mood benefit no text raises.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Text 1: Case studies show buildings with rooftop gardens ran cooler and used less summer energy, so green roofs are a proven cooling tool.\n\nText 2: Rooftop plants do lower surface temperatures — but measurements across many cities show the cooling shrinking as humidity rises, nearly vanishing in the most humid places.\n\nHow would the author of Text 2 most likely respond to the case studies in Text 1?\n\n(A) They likely come from drier climates and should not be generalized everywhere\n(B) They were poorly designed and their measurements cannot be trusted\n(C) They confirm green roofs deliver the same benefit in any climate',
    steps: [
      { label: 'Pin each claim', content: 'T1: green roofs are a proven cooling tool. T2: the cooling is real, but humidity shrinks it — climate decides the payoff.' },
      { label: 'Name the relationship', content: 'One qualifies the other. Shared ground: rooftop plants do cool. The split: does the benefit hold everywhere?' },
      { label: 'Predict', content: 'A yes-but: *the cooling is real, but those studies cannot speak for humid cities.*' },
      { label: 'Match', content: '**(A)** grants the finding and objects exactly at the scope. (B) is pure attack — it denies cooling she accepts (wrong side). (C) erases her stated limit. Note the right answer is the *least* combative one.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Text 1: The durability of ancient harbor concrete comes from its volcanic-ash mortar, which reacts with seawater to form interlocking minerals — the full explanation for its endurance.\n\nText 2: The same mortar also holds tiny lime fragments that dissolve when cracks let water in, resealing the cracks from within. Earlier accounts dismissed these fragments as sloppy mixing and never tested them.\n\nHow would the author of Text 2 most likely respond to Text 1?\n\n(A) It rightly names one source of strength but overlooks a second, self-repairing ingredient earlier work wrote off\n(B) It is wrong that volcanic ash reacts with seawater to form binding minerals\n(C) It should be discarded, since the lime fragments alone explain the durability',
    steps: [
      { label: 'Pin each claim', content: 'T1: the ash mortar is the whole story. T2: the same mortar also has crack-healing lime fragments earlier accounts ignored.' },
      { label: 'Name the relationship', content: 'Same data, different completeness. Both accept the ash chemistry; the split is whether ash is the *whole* story.' },
      { label: 'Predict', content: 'An incompleteness objection: *the ash explanation is right as far as it goes, but it missed the fragments it dismissed as a flaw.*' },
      { label: 'Match', content: '**(A)** grants the ash point and objects only where licensed. (B) denies shared ground he never disputes. (C) overshoots — his text says the mortar *also* has fragments, keeping ash in the story; "alone" and "discarded" push him to an extreme he never took.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'Text 2\'s author accepts that a reef-restoration method grows healthy coral but doubts it can work at scale. A choice says she would "deny that the transplants survive." Valid?',
    answer: '**No.** Her own text grants that the transplants survive — the choice has her rejecting a fact she accepts. Her licensed response targets the *scale*, not the survival. Map where the agreement ends before judging any choice.',
  },
  {
    type: 'checkpointQuestion',
    question: 'Why predict Author 2\'s response *before* reading the four choices instead of just weighing them directly?',
    answer: 'Because a prediction is checked once, while a blank impression gets rebuilt four times — one full re-read per choice. With a prediction from the author\'s actual commitments, three choices fail on direction or scope in seconds.',
  },

  {
    type: 'text',
    content: '**The move, every time:** pin each claim separately → name the relationship and its hinge → predict Author 2\'s response from what the text actually says → match by direction first. Keep the two voices straight and there is no mind-reading left.',
  },
];
