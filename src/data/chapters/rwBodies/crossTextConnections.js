/**
 * Learn chapter body — Cross-Text Connections (Craft and Structure).
 *
 * Teach-from-zero textbook chapter following the locked template
 * (docs/LEARN_TEXTBOOK_OVERHAUL_PLAN.md): roadmap → Stage 1 foundations →
 * Stage 2 numbered method (step → right → wrong → why) → Stage 3 on-the-test
 * (decision flow, traps, worked examples, checkpoints, one-page summary).
 * Voice reference: rwBodies/boundaries.js.
 * Concept source: knowledge/graph/rw (two-voice-separation,
 * cross-text-relationship-taxonomy, cross-text-response-prediction,
 * belief-revision-template, shorthand-note-discipline,
 * polarity-first-elimination).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * rwBodies/index.js — never import this from the chapter index.
 */

export const crossTextConnectionsBlocks = [
  {
    type: 'text',
    content: 'A Cross-Text Connections question gives you **two short passages on the same topic**, labeled Text 1 and Text 2, and asks one question about how they relate — most often, *"How would the author of Text 2 most likely respond to the claim in Text 1?"* It looks like a mind-reading exercise. It is not. The response is sitting in the second author\'s own words before you ever see the choices, and there is a repeatable protocol for finding it: pin each author\'s position separately, name the relationship between them precisely, and derive the response from what the author actually committed to on the page.',
  },
  {
    type: 'steps',
    title: 'How this chapter is built',
    items: [
      '**Stage 1 · Foundations.** Keeping two voices separate, the vocabulary for how two texts can relate, and the old-view-then-challenge shape most pairs are built on.',
      '**Stage 2 · The method.** Six numbered steps, each in the same shape: the step, a right example, a wrong example, and the why.',
      '**Stage 3 · On the test.** A decision flow, the traps built for this question type, worked examples across difficulties, and a one-page summary.',
    ],
  },

  // ── Stage 1 · Foundations ──────────────────────────────────────────────
  { type: 'heading', content: 'Stage 1 · Two voices, one topic' },
  {
    type: 'text',
    content: 'School trains you to treat a reading as a single source of truth, so two texts on one topic feel like two paragraphs of one essay. That instinct is the first thing to unlearn. The whole question type rests on **two-voice separation**: holding each author\'s position as its own labeled entry — *Author 1 claims X; Author 2 claims Y* — never as one blended impression of "what the passages say about the topic." A reader who blends the voices cannot compute any relationship between them, and the test builds a distractor specifically for that reader: a choice that paraphrases a real detail from one text and offers it as the *other* author\'s view. It feels supported because you genuinely read it. Only checking which text a detail lives in exposes it.',
  },
  {
    type: 'text',
    content: 'The working tool is a **two-line ledger**: after reading each text, compress its main point into one short labeled line. A good ledger line is a *claim* — something another person could dispute — not a topic. "Both texts discuss coral reefs" is a topic; nothing can agree or disagree with it. "Text 1: reef restoration works; Text 2: it works but cannot scale" is a pair of claims, and the relationship between them is already half-visible.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Two labeled claims — usable', content: '*T1: street trees cool neighborhoods enough to cut summer energy use. T2: the cooling is real but only where canopies connect.* Two positions in their own slots — the relationship is already taking shape.', variant: 'right' },
      { label: 'One blended impression — unusable', content: '*Both texts are about trees and city heat, and trees seem good.* A merged summary. Ask "how would Author 2 respond?" and this reader has to start over from scratch.', variant: 'wrong' },
    ],
  },
  {
    type: 'strategyCard',
    title: 'The two-line ledger',
    content: 'Before reading any choice, fill two labeled slots: Text 1\'s main point in a few words, then Text 2\'s. Each line gets its own verb and its own position — a claim someone could dispute, not a topic. Every later move in this chapter — naming the relationship, predicting the response, checking a detail — reads from the ledger instead of re-reading the passages. Two dense texts overflow memory; two short labeled lines do not.',
  },
  {
    type: 'checkpointQuestion',
    number: 1,
    question: 'Which ledger entry is usable? (a) *Both texts discuss sleep and memory.* (b) *T1: sleep consolidates memory. T2: consolidation is real but strongest for emotional memories.*',
    answer: 'Only **(b)**. **Why:** a ledger line has to be a claim someone could dispute. (a) names a topic — no one can agree or disagree with "sleep and memory" — so no relationship can be computed from it. (b) holds two separate positions, and the relationship (agreement with a limit) is already visible.',
  },
  { type: 'heading', content: 'Beyond agree and disagree' },
  {
    type: 'text',
    content: 'Most students walk in with a two-word vocabulary for paired texts: the authors *agree* or they *disagree*. The real menu is richer, and naming the relationship at the right resolution is what pre-answers the question. Two texts can be **fully opposed** — the claims cannot both be true. One can raise a **narrower objection** — accepting the main point but disputing the method behind it or the scope it claims. Both can accept the **same finding but explain it differently** — identical data, two competing stories about why. Both can hold the **same claim with different confidence** — one author asserts what the other only suspects. And very often **one text qualifies the other**: it grants part of the ground and pushes back on the rest. For that last shape, the precise name includes a boundary: not just "they partly agree" but *where the agreement ends*. "Both accept that the transplants survive; they split on whether the method can scale" is a relationship. "They sort of disagree" is a shrug.',
  },
  {
    type: 'text',
    content: 'One more piece of architecture pays for itself: the **belief-revision shape**. Science and social-science passages are very often built as *an established view, then a challenge to it* — an old idea flagged with distance language ("it was long thought," "researchers assumed"), then newer evidence that revises it. Paired texts frequently split this skeleton between them: Text 1 presents or defends the established account; Text 2 carries the revision. Spotting the shape early tells you what to expect — the second author will grant the old view its territory and then take some of it away — and it warns you that distance language like *"many believed"* signals a view the author is holding at arm\'s length, not endorsing.',
  },

  // ── Stage 2 · The method ───────────────────────────────────────────────
  { type: 'heading', content: 'Stage 2 · The method' },
  {
    type: 'text',
    content: 'Six steps cover every cross-text question, in order, every time. Each follows the same shape: the **step**, a **right** example, a **wrong** example, and the **why**.',
  },

  { type: 'heading', content: 'Step 1 — Read Text 1 and jot its point' },
  {
    type: 'text',
    content: 'Read Text 1 for its single main point and compress it to a few words with its label: *T1: tidal turbines can reliably power coastal towns.* Skip the supporting detail on this first pass — reading everything at detail grain overflows memory before the main point is secured, which is why careful readers sometimes do *worse* here than quick ones. A good jot is short (about five words), has its own verb, and states a position. Detail can wait; the question will tell you which detail matters.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'A claim in five words', content: '*T1: tidal turbines can power coastal towns reliably.* A verb, a position, done. This line can agree or disagree with whatever Text 2 says.', variant: 'right' },
      { label: 'A topic inventory', content: '*T1 is about tidal turbines, how they work, where they are installed, and their costs.* Everything felt equally important, so nothing got compressed. No claim, no verb, no position — nothing here can respond to anything.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Step 2 — Read Text 2 and jot its point the same way' },
  {
    type: 'text',
    content: 'Same move, second slot — with one extra requirement: Text 2\'s line has to be a **standalone claim**, one that would still make sense if Text 1 did not exist. The subtle failure here is filling the second slot with a reaction — *T2: disagrees with Text 1* — which turns Author 2 into a mere echo of Author 1. Then the question asks what Author 2 actually holds (their own scope, their own evidence), and the slot is empty. Also note, explicitly, whether Text 2 ever mentions or targets Text 1\'s territory; sometimes it engages the first text head-on, and sometimes it never acknowledges it at all.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'A standalone position', content: '*T2: turbine noise disrupts migratory fish routes.* This claim stands on its own — you could state it to someone who never read Text 1.', variant: 'right' },
      { label: 'A reaction, not a position', content: '*T2: disagrees with Text 1.* A direction with no content. When the stem asks about Author 2\'s own commitments — what she measured, what she grants — this slot has nothing to offer.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Step 3 — Name the relationship precisely' },
  {
    type: 'text',
    content: 'Now read the two ledger lines against each other and name the relationship from the Stage 1 menu — in two parts. The **type**: fully opposed, narrower objection, same finding differently explained, same claim different confidence, or one qualifies the other. And the **hinge**: the specific sub-question the texts actually split on. Map the agreement zone first — what would *both* authors sign? — then mark exactly where the overlap ends. "They disagree" is a direction without a hinge; it predicts a negative response but says nothing about its content. "Both accept the decline is real; they split on whether the cause is predation or food supply" contains the answer to almost any question the test can ask.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Type plus hinge', content: '*Both accept that the cave paintings are fading; they split on the cause — T1 blames humidity, T2 blames chemicals from an earlier restoration.* Agreement marked, split located. A response question is already half answered.', variant: 'right' },
      { label: 'Direction only', content: '*They disagree about the paintings.* True and useless. It cannot tell you whether Author 2 would object to T1\'s facts, its cause, or its fix — so every negative-sounding choice survives.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Step 4 — Find exactly what the stem targets' },
  {
    type: 'text',
    content: 'Re-read the stem and pin two things: **who is responding**, and **to which element**. The target is not always the other text\'s main claim. It can be one specific example, one piece of evidence, or a researcher quoted *inside* the other text — and the response happens at that target, not at the passage in general. If the stem quotes a phrase, locate that phrase in the text before doing anything else; it fixes what is being responded to and the sentences around it usually supply the material for the response.',
  },
  {
    type: 'tip',
    content: 'Check the direction of the question before predicting. *"How would the author of Text 2 respond to Text 1"* wants Author 2\'s reaction — a choice that accurately describes **Author 1\'s** view is wrong even though every word of it matches the passages. Answering for the wrong author is a quiet, complete miss.',
  },

  { type: 'heading', content: 'Step 5 — Predict the response before the choices' },
  {
    type: 'text',
    content: 'This is the load-bearing step. Using the relationship and the target, write or say the response in one sentence — **before reading any choice**. The rule that keeps the prediction honest: the author is a **witness under oath**. They may only say what their own text commits them to — their claim, their evidence, their stated scope. A response a reasonable person *might* give, on a matter the text never touches, is inadmissible no matter how sensible it sounds. If you cannot point to the sentence that licenses the response, it is not the author\'s response; it is yours. Predicting first feels slow. It is the fast path: one prediction is checked against four choices, while a reader with no prediction re-reads the passages once per choice.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Licensed by the text', content: 'Text 2\'s botanist argues that seed vaults preserve seeds while pests and climates keep evolving. Prediction: *she would respond that a stored seed stops adapting while the world it must grow in keeps changing.* Every word traces to her stated point.', variant: 'right' },
      { label: 'Plausible but unlicensed', content: '*She would probably worry about the cost of maintaining the vaults.* A sensible real-world concern — that her text never raises. Plausible is not testimony; the witness never said it.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Step 6 — Match by polarity first, then precision' },
  {
    type: 'text',
    content: 'Now, and only now, read the choices — cheapest test first. The named relationship already fixes the response\'s **polarity**: would this author *approve*, *object*, or *qualify* ("yes, but...")? Sweep the choices by their opening words — *concedes that, challenges the, welcomes the, denies that* — and kill everything on the wrong side of that line without reading further. Second cheap pass: **degree**. Choices that overshoot the author\'s actual intensity — *entirely, never, worthless, abandon* — die unless the text explicitly earns that strength. Spend full attention only on the survivors: check any concrete detail against its source text, and check the scope against what the author committed to. One calibration rule: a kill requires a named failure (wrong polarity, wrong source, wrong scope). A choice you merely find confusing gets **parked, not killed** — on this question type, the credited answer often looks uncertain at first because it hinges on a detail you skimmed.',
  },

  // ── Stage 3 · On the test ──────────────────────────────────────────────
  { type: 'heading', content: 'Stage 3 · On the test' },
  {
    type: 'text',
    content: 'The stem almost always takes one of a few forms: *"Based on the texts, how would the author of Text 2 most likely respond to [a claim / an argument / the findings] presented in Text 1?"*, or *"How would the two authors most likely characterize their views of each other?"*, or a description question — *"Which choice best describes the relationship between the texts?"* All of them are the same task underneath: ledger, relationship, prediction, match. The response variant just adds Steps 4 and 5.',
  },
  {
    type: 'steps',
    title: 'The decision flow',
    items: [
      'Read Text 1; jot its claim with a label. Read Text 2; jot its own standalone claim (Steps 1–2).',
      'Name the relationship: type plus hinge, and mark where the agreement ends (Step 3).',
      'Re-read the stem: who is responding, and to which exact element of the other text (Step 4).',
      'Predict the response in one sentence, licensed only by the author\'s stated commitments (Step 5).',
      'Sweep choices by polarity, then degree; verify the source text of any concrete detail; give full scrutiny only to survivors (Step 6).',
      'If two choices survive, return to the texts for the one deciding fact. Park unsure choices; never kill without a named failed test.',
    ],
  },
  {
    type: 'keyInsight',
    content: '**The response must be derivable from what the author actually said** — their claim, their evidence, their stated scope — never from what a person like them might plausibly think. Before selecting, point (literally, on screen) to the sentence that licenses the response. No licensing sentence, no answer: the most sophisticated-sounding choice on these items is routinely the one addressing a matter neither text touches.',
  },
  {
    type: 'trapCard',
    title: 'The blended voices',
    wrong: '**The blended voices.** You read the pair as one essay and come away with a single impression of the topic. A choice paraphrases a real detail — one you genuinely remember reading — and you accept it as Author 2\'s view. The detail was real; it just came from Text 1.',
    correction: 'The two-line ledger is the vaccine: two labeled claims before any choice, every pair, no exceptions. Then run the source check on every detail-bearing choice: *which text does this detail actually live in?* Familiarity is not attribution — a detail from the wrong author\'s mouth is a wrong answer no matter how accurately it is quoted.',
  },
  {
    type: 'trapCard',
    title: 'The total-war reading',
    wrong: '**The total-war reading.** The authors disagree, so you assume Author 2 rejects everything in Text 1 — and you eliminate the choice that has her *granting* a point, saying it is "too positive" to be a disagreement. You pick the most hostile option on the page.',
    correction: 'Disagreeing authors almost always share ground, and the credited answer respects it. Map the agreement zone before judging any choice: if Author 2 accepts that the technique works but doubts it scales, her response targets the scaling and grants the working. The grants-then-cautions choice is often the right one, and the purely hostile choice sits next to it precisely to catch total-war readers. Match the author\'s real intensity — a measured skeptic does not call for abandoning anything.',
  },
  {
    type: 'trapCard',
    title: 'The reasonable-person response',
    wrong: '**The reasonable-person response.** A choice raises a smart, sophisticated point — funding motives, an obvious follow-up study, a practical cost — and it feels like insight, so you pick it. Neither text ever mentions it.',
    correction: 'The author is a witness under oath: only what their text commits them to is admissible. Your own common-sense reaction arrives first and feels like the author\'s — that is exactly the reflex the distractor is built on. Demand the licensing sentence. If no sentence in the author\'s text supports the response, the choice is wrong even when it is the most intelligent remark in the set.',
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Text 1: Science journalist Priya Raman argues that skipping breakfast measurably harms students\' morning concentration, pointing to surveys in which students who ate breakfast reported feeling more alert in class.\n\nText 2: Physiologist Owen Cole ran controlled trials in which students were randomly assigned to eat or skip breakfast before identical attention tests. Across every trial, the two groups\' scores were statistically indistinguishable.\n\nBased on the texts, how would Cole (Text 2) most likely respond to Raman\'s claim?\n\n(A) By objecting that direct tests of attention show no difference between students who eat breakfast and those who skip it\n(B) By agreeing that concentration suffers but attributing the harm to poor sleep instead\n(C) By noting that breakfast improves students\' mood even when attention is unchanged\n(D) By arguing that no dietary habit has any effect on learning',
    steps: [
      { label: 'Ledger', content: 'T1: skipping breakfast hurts students\' concentration (evidence: self-report surveys). T2: controlled trials found no attention difference at all.' },
      { label: 'Name the relationship', content: 'Fully opposed — both claims cannot be true. The hinge: does skipping breakfast actually reduce measured attention? Raman says yes from surveys; Cole\'s trials say no.' },
      { label: 'Predict', content: 'Cole\'s testimony: *my direct measurements found no difference, so the claim does not hold.* An objection, aimed at the hinge, licensed by his trials.' },
      { label: 'Match by polarity, then precision', content: 'The prediction is an objection. (B) opens by agreeing that concentration suffers — wrong polarity at the hinge, and it imports sleep, which neither text mentions. (C) concedes a mood benefit no text discusses. (D) overshoots wildly: Cole tested breakfast and attention, not every dietary habit and all of learning.' },
      { label: 'Answer', content: '**(A).** It is the prediction almost verbatim: an objection grounded in exactly the evidence Cole\'s text commits him to.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Text 1: Urban planner Diego Fuentes argues that green roofs are a proven tool against city heat: in the case studies he compiles, buildings planted with rooftop vegetation ran cooler and used less energy in summer.\n\nText 2: Climate researcher Anna Lindqvist agrees that rooftop vegetation lowers surface temperatures. But her measurements across dozens of cities show the cooling effect shrinking as air humidity rises — in the most humid cities, it nearly vanishes. Regional climate, she concludes, decides how much green roofs can deliver.\n\nBased on the texts, how would Lindqvist (Text 2) most likely respond to the case studies discussed in Text 1?\n\n(A) They are likely drawn from drier climates, so their results should not be generalized to cities everywhere\n(B) They were poorly designed and their cooling measurements cannot be trusted\n(C) They confirm that green roofs deliver the same benefit in any climate\n(D) They understate how much energy rooftop vegetation actually saves',
    steps: [
      { label: 'Ledger', content: 'T1: green roofs are a proven cooling tool (evidence: case studies). T2: the cooling is real, but humidity shrinks it — regional climate decides the payoff.' },
      { label: 'Name the relationship', content: 'One qualifies the other. Agreement zone: rooftop vegetation does lower temperatures — Lindqvist grants that outright. The agreement ends at scope: Fuentes treats the benefit as general; Lindqvist\'s data says it depends on climate. The hinge: do the case-study results hold everywhere?' },
      { label: 'Find the target and predict', content: 'The stem targets the *case studies* specifically, not the whole argument. Prediction: *the studies show real cooling, but they cannot speak for humid cities — their results are climate-limited.* A yes-but response: grant the finding, shrink its reach.' },
      { label: 'Match by polarity, then precision', content: 'The prediction is a qualified acceptance. (B) is pure attack — it denies measurements Lindqvist herself agrees with, wrong polarity in the agreement zone. (C) is pure endorsement — it erases her stated limit. (D) points the wrong way entirely: she thinks the benefit is *smaller* in some places, not understated.' },
      { label: 'Answer', content: '**(A).** It grants what she grants and objects exactly where her data licenses an objection: the generalization. Note that the correct choice is the *least* combative one — the total-war reflex would have killed it.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Text 1: For decades, engineers credited the extraordinary durability of ancient harbor concrete to its volcanic-ash mortar, which reacts with seawater to form interlocking minerals. Historian of engineering Marta Voss\'s recent account endorses this explanation and treats the ash recipe as the full story of the concrete\'s endurance.\n\nText 2: Materials scientist Tomas Reyes examined the same structures and found that their mortar also contains small lime fragments, or "clasts," which dissolve when cracks let in water — resealing the cracks from within. Earlier accounts, Reyes notes, never tested the clasts, dismissing them as leftover evidence of sloppy mixing.\n\nBased on the texts, how would Reyes (Text 2) most likely respond to Voss\'s account?\n\n(A) It rightly identifies one source of the concrete\'s strength but overlooks a second, self-repairing ingredient that earlier work wrote off as a mixing flaw\n(B) It is mistaken in claiming that volcanic ash reacts with seawater to form binding minerals\n(C) It relies on harbor structures too well preserved to represent ancient concrete generally\n(D) It should be discarded, since the lime clasts alone account for the concrete\'s durability',
    steps: [
      { label: 'Ledger', content: 'T1 (Voss): the ash mortar is the whole story of the concrete\'s durability. T2 (Reyes): the same structures also contain crack-healing lime clasts that earlier accounts never tested. Note the belief-revision shape split across the pair: Text 1 defends the established account; Text 2 carries the revision.' },
      { label: 'Name the relationship', content: 'Same finding, differently explained — both authors accept the same durable structures and even the same ash chemistry. The agreement ends at completeness: the hinge is whether ash is the *whole* story. Reyes says a second mechanism was missed; he never denies the first.' },
      { label: 'Find the target and predict', content: 'The stem targets Voss\'s account — specifically its claim of being the full story. Reyes\'s testimony, licensed by his text: *the ash explanation is right as far as it goes, but it missed the clasts — the very feature it dismissed as sloppy mixing.* An incompleteness objection, not a refutation.' },
      { label: 'Match by polarity, then precision', content: '(B) denies shared ground — Reyes never disputes the ash chemistry, and having him do so puts words in his mouth that his text contradicts. (C) raises a sampling worry neither text touches: a reasonable-person response with no licensing sentence. (D) overshoots his stated position — his text says the mortar *also* contains clasts, which keeps the ash mechanism in the story; "discarded" and "alone" push a both-factors author into a one-factor extreme.' },
      { label: 'Answer', content: '**(A).** Grants exactly what Reyes grants, objects exactly where his evidence licenses it, and even carries his specific detail — the clasts dismissed as a flaw — attributed to the right text.' },
    ],
  },
  {
    type: 'checkpointQuestion',
    number: 2,
    question: 'Text 2\'s author accepts that a reef-restoration method produces healthy coral transplants but doubts it can work at the scale reefs need. A choice says she would "deny that the transplants survive." Valid?',
    answer: 'No. **Why:** her own text grants that the transplants survive — the choice has her rejecting a fact she accepts, which is denying shared ground. Her licensed response targets the scale, not the survival. Map where agreement ends before judging any choice.',
  },
  {
    type: 'checkpointQuestion',
    number: 3,
    question: 'Text 2\'s author is a measured skeptic of a teaching method — she questions its evidence but calls it "promising." A choice has her demanding the method "be abandoned entirely." What kills the choice?',
    answer: 'Degree. **Why:** the response can only be as strong as the author\'s stated position, and "promising" is not the vocabulary of someone demanding abandonment. Intensity overshoots — *entirely, never, worthless* — fail the cheap degree screen before any meaning comparison is needed.',
  },
  {
    type: 'checkpointQuestion',
    number: 4,
    question: 'Why does the method demand a predicted response *before* reading the choices, instead of evaluating the four choices directly?',
    answer: 'Because a prediction is checked once, while an impression is re-built four times. **Why:** without a prediction, every choice must be evaluated against a vague memory of two dense texts — a full re-read per choice — and every well-written distractor gets a hearing. With a prediction derived from the author\'s commitments, the choices become a lineup to match, and three of them fail on polarity or scope in seconds.',
  },
  {
    type: 'checkpointQuestion',
    number: 5,
    question: 'Your relationship line says Text 2\'s author would *qualify* Text 1\'s claim. Two choices open with "denies that..." and "welcomes the..." What do you know before reading either one in full?',
    answer: 'Both are dead. **Why:** the named relationship fixes the response\'s polarity, and a qualifier answers "yes, but" — neither pure denial nor pure welcome. Polarity is the cheapest reliable test, so it gets spent first; full reading is reserved for choices that survive it. One caution: a kill requires this named failure — a choice that is merely confusing gets parked, not killed.',
  },
  { type: 'heading', content: 'One-page summary' },
  {
    type: 'table',
    title: 'The relationship menu',
    headers: ['Relationship', 'One-line definition', 'Response it predicts'],
    rows: [
      ['Fully opposed', 'The claims cannot both be true; accepting one rejects the other', 'A direct objection at the hinge'],
      ['One qualifies the other', 'Grants part of the ground, pushes back on the rest — name where agreement ends', '"Yes, but..." — accept the shared part, dispute the split'],
      ['Narrower objection', 'Accepts the conclusion\'s territory but disputes the method, evidence, or scope behind it', 'Challenge the support, not the whole claim'],
      ['Same finding, differently explained', 'Both accept the same data; each tells a different story about why', 'Point at what the rival explanation overlooks'],
      ['Same claim, different confidence', 'One author asserts what the other only suspects', 'Call the claim premature — or better supported than stated'],
      ['One adds to the other', 'No conflict; the second text supplies a piece the first left out', 'Welcome the claim and extend it'],
    ],
  },
  {
    type: 'text',
    content: 'That is the entire skill: two labeled claims in the ledger, a relationship named with its type and hinge, the stem\'s exact target located, a response predicted under oath from the author\'s own commitments, and choices swept by polarity and degree before precision. No mind reading required — the author already told you what they would say.',
  },
];
