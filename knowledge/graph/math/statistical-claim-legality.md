---
id: statistical-claim-legality
section: math
domain: problem-solving-data-analysis
skill: statistical-conclusion-selection, data-collection-conclusions
difficulty_span: [hard, hard]
prereqs: [sampling-validity-two-dials, margin-of-error-interpretation, sample-to-population-estimation]
unlocks: []
related: [statistical-claim-legality, data-display-decoding]
---

# The claim-strength ladder: which conclusion is legal

## What it is
The unifying skill behind every "most appropriate conclusion" item: statistical results license only claims of a certain *strength*, and exactly one answer option is phrased at the legal strength. The ladder runs from illegal to legal: definitive/absolute claims ("is exactly," "proves," "cannot be") at the top — always wrong; causal claims — legal only with random assignment; broad generalizations — legal only to the sampling frame; individual-member claims — essentially never legal from summary statistics; down to the modest, hedged association-or-estimate claim about the sampled population — which is what wins. These items are answered by phrasing legality more than by mathematics. unverified-claim: exactly one option is inferentially legal on conclusion items, and the wrong-option taxonomy is stable across contexts.

## Why it exists / why the SAT tests it
This is the hard band's replacement for arithmetic in this domain: every hard inference item swaps computation for a legality judgment. The College Board is probing whether a student understands what data *can and cannot say* — the core of statistical literacy. The wrong options are manufactured from a fixed taxonomy: (a) exact-value claim, (b) impossibility claim, (c) individual-member claim, (d) out-of-frame generalization, (e) causal upgrade. That taxonomy maps one-to-one onto the misconceptions of this cluster's prerequisite nodes — which is precisely why these items diagnose so cleanly.

## Mental model
**Scan for legality, not truth.** The expert never asks "which of these is true?" — truth isn't assessable from a summary. They ask "which of these is *allowed to be said*?" and eliminate on form: any option asserting exactness, impossibility, individual-level facts, universal member behavior, out-of-frame populations, or causation-without-random-assignment dies on its wording alone, often before its numbers are read. What remains — hedged, parameter-level, frame-bounded, association-strength-matched — is the answer. Prefer the modest claim.

## Expert reasoning process
1. Establish what the design licenses, using the two dials ([[sampling-validity-two-dials]]): random selection? → frame-level generalization allowed. Random assignment? → causal language allowed. Note the frame verbatim.
2. If a margin of error is present, compute the band ([[margin-of-error-interpretation]]).
3. Read each option and tag its strength: exact? impossible? about individuals? universal ("any student who…")? out of frame? causal? directional-association-only? hedged-estimate?
4. Eliminate every tag the design doesn't license. This usually kills three options structurally.
5. Verify the survivor: hedged verb ("plausible," "likely"), correct parameter (mean/proportion, not members), correct population (the frame, exactly), claim strength matching the design (association for observational, cause only for randomized experiments), and — if a band exists — a statement inside it.
6. Watch the direction subtlety: even a licensed causal reading doesn't fix which way the arrow points; both causal directions are offered as separate traps around the one association-only answer.

## Misconceptions
- **truth-evaluation-reflex** — evaluating options for plausibility ("that sounds right about exercise") instead of legality. Forms because every other math item rewards computing the true answer; here truth is inaccessible and form is everything. Produces topic-plausible but overreaching picks.
- **absolutism-comfort** — gravitating to confident phrasings because hedged claims feel weak or evasive. Forms from schooling that rewards certainty; the exam inverts the reward. Produces exact-value and impossibility picks (archetypes a and b).
- **universal-quantification-slip** — converting a statistical tendency into a per-member rule ("any student who exercises more will improve"). The individual-member archetype (c) in causal/association dress; related to the MoE-on-individuals error but appears without any band present.
- **causal-leap** — accepting "X improves Y" from observational co-movement (archetype e). Carried in from [[sampling-validity-two-dials]]; the mind's default compression of correlation is a causal story.
- **frame-drift** — accepting conclusions about a wider (or narrower) population than was sampled (archetype d). Carried in from [[sampling-validity-two-dials]]; triggered by topic-matching instead of frame-matching.

## Diagnostic indicators
Each wrong option IS the indicator — the taxonomy maps picks to root causes directly:
- Picks exact-value or impossibility phrasings → **absolutism-comfort** (or unremediated estimate-is-exact / outside-band-impossible from the MoE node).
- Picks "any/every/all member" phrasings → **universal-quantification-slip**.
- Picks causal/prescriptive verbs from observational designs → **causal-leap**.
- Picks the wider topic-matched population → **frame-drift**.
- Explains a pick by real-world plausibility rather than by what the study can support → **truth-evaluation-reflex**; this verbal tell is the master signal that the legality frame is missing entirely.

## Remediation pathways
- **truth-evaluation-reflex**: teach the scan explicitly as a *different game* — grade all four options with strength tags before choosing; correctness emerges from elimination, not selection. This single reframe fixes most of the genre.
- **absolutism-comfort**: the claim-strength ladder drawn once, with the exam's reward inverted from school's: on this test, the modest claim wins. Contrast pair: same finding, five phrasings from "proves" to "suggests an association for [frame]."
- **universal-quantification-slip**: tendency-vs-rule contrast — a group trend with a visible counterexample member inside it.
- **causal-leap** and **frame-drift**: route back to [[sampling-validity-two-dials]]; the fixes live there (confound generation; frame underlining).
- If band statements are misjudged, route to [[margin-of-error-interpretation]].

## Mastery criteria
Tags all four options by claim strength quickly; eliminates on form without needing the numbers; states *why* each rejected option is illegal (names the archetype); survives items where the two closest options differ by a single quantifier or verb. Proof: high consistency across conclusion items in different cover stories — the skill is context-independent by design, so inconsistency indicates topic-plausibility reasoning is still active.

## Difficulty ladder
This node is the hard band itself; its internal ladder: single-violation options (crude "proves" vs "suggests") → multi-clause options where strength, frame, and parameter must all be checked → items fusing band arithmetic, frame limits, and causal licensing at once, every option a full sentence → the meta-level where two options are both hedged and the discrimination is quantifier-level (parameter vs members) or direction-level (which way causation would point). Composes with [[data-display-decoding]] when the finding is an association read off bivariate data.

## Teaching notes
- **Struggling**: don't teach the ladder abstractly. One rejection type per session, with three items each ("today we hunt 'proves'"). The taxonomy is learnable as a spotting game long before it's understood as statistics.
- **Average**: the full five-archetype taxonomy as a checklist; students annotate every option with its violation (or "legal") before answering. Accuracy jumps when elimination replaces selection.
- **Advanced**: licensing logic — derive each rejection from the design (no random assignment → no causal verb) rather than from surface keywords, so novel phrasings can't sneak past.
- **1500+**: adversarial pairs — two hedged, frame-correct options differing in one word. Train word-level differencing and the honest question "what would the study have needed for THIS sentence to be legal?" At this band the item is jurisprudence, and they should experience it as such: fast, formal, and almost pleasurable.
