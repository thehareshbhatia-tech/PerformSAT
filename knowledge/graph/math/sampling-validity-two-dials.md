---
id: sampling-validity-two-dials
section: math
domain: problem-solving-data-analysis
skill: survey-design-validity, data-collection-conclusions
difficulty_span: [medium, hard]
prereqs: [sample-to-population-estimation]
unlocks: [statistical-claim-legality, margin-of-error-interpretation]
related: [data-display-decoding]
---

# Study design: two independent randomization dials

## What it is
Every study has two separate randomization decisions, and they license two separate things. **Random selection** (who got into the study) controls *whom the results generalize to*: conclusions extend exactly to the population that was randomly sampled — no further and no narrower. **Random assignment** (how participants got sorted into treatment groups) controls *whether "causes" may be spoken*: only random assignment spreads hidden traits (confounding variables) evenly across groups, eliminating rival explanations. The two dials are independent — a study can have either, both, or neither, and each combination licenses a different conclusion strength.

## Why it exists / why the SAT tests it
These items probe inference discipline, not computation — there is often no arithmetic at all. The exam asks: what's the largest population these results generalize to; what's wrong with this survey's method; how should the experiment be changed to support a causal claim. The moment sample members share *any* trait beyond membership in the target population (same mall, same day, volunteers, buyers of one product), conclusions shrink to the sub-population with that trait. unverified-claim: when a survey-flaw question appears, the rewarded answer is essentially always non-random selection / a shared extra trait; sample-size answers are decoys, and released items have not hinged on a sample being too small.

## Mental model
**Two dials, two licenses.** Dial 1 — selection: random? → generalize to the sampling frame; not random? → generalize to nobody. Dial 2 — assignment: random? → causal language allowed; not random (self-selected groups, pre-existing differences)? → association only. Check the dials independently, in that order, before evaluating any conclusion. The sampling frame is whoever was *actually* randomly drawn from — not the story's headline group, and not merely the respondents.

## Expert reasoning process
1. First written line of work: who exactly was sampled, and how were they chosen? Pin the sampling frame precisely (pilots over 45, houses in one town, customers of one store).
2. Dial 1: was selection random from that frame? If yes, results speak about the frame — exactly the frame. If no, no generalization at all.
3. Dial 2: were subjects randomly *assigned* to conditions? If yes (and only then), causal claims are on the table. Self-selected behavior groups (students who chose to exercise) or proximity-based grouping = confounded = association only.
4. For "largest population generalizable" items: the answer names the frame — reject both the wider group (topic-matched but out of frame) and the narrower one (just the respondents/sample).
5. For method-flaw items: hunt the shared extra trait or the non-random response mechanism (volunteer mail-backs); deliberately ignore sample size.
6. For "how should the study be changed" items: the fix is introducing the missing randomization — usually random assignment — never bigger claims, harder tests, or more of the same.

## Misconceptions
- **sample-size-suspicion** — flagging "only 249 people" as the design flaw. Forms from everyday intuition that small = unreliable; on this exam size affects precision (margin of error), never validity, and the flaw offered is essentially always non-random selection. Maps to a stable decoy archetype.
- **overreach-generalization** — extending results to a broader group than the frame (mall shoppers → the whole town). Forms because the stem's narrative frame IS the broader group, and students answer the narrative instead of the frame; stated once mid-stem, the frame is easy to skim past. This is the overreach distractor archetype.
- **survey-proves-cause** — reading association in observational data as causal. Forms from news-headline conditioning where correlation is narrated causally; the fix is the dial-2 test. The causal-leap distractor archetype.
- **bigger-sample-beats-right-frame** — preferring a large sample from the *wrong* population over a smaller random sample from the right one. Root cause: "more data is better" absorbed without the "…from the target population" clause; engineered traps offer a big out-of-frame sample as the tempting choice.
- **volunteer-blindness** — treating a mail-back/opt-in survey with a large respondent count as representative. Forms because the visible n is big; the selection mechanism, not the count, is what broke.

## Diagnostic indicators
- Picks the "sample too small" option on flaw items → **sample-size-suspicion**. Verbal tell: "you can't conclude anything from only N people."
- On largest-population items, picks the widest topic-matched group → **overreach-generalization**; picks the respondents-only option → the under-generalization mirror (same root: frame not pinned).
- Chooses causal or prescriptive phrasings from observational designs → **survey-proves-cause**; keyed to options containing "causes," "improves," "should."
- On repeat-study design choices, prefers big-wrong-frame over small-right-frame → **bigger-sample-beats-right-frame**.
- Accepts opt-in surveys when n is large → **volunteer-blindness**.

## Remediation pathways
- **sample-size-suspicion**: teach the precision/validity split — size tunes the error band ([[margin-of-error-interpretation]]); randomness decides whether there's anything to band at all. One contrast item: small random sample (fine) vs huge convenience sample (broken).
- **overreach-generalization**: frame-underlining drill — physically mark who was sampled in ten stems; then answer only with the marked group. If it persists, the issue is stem-reading, not statistics.
- **survey-proves-cause**: the confound story — give a rival explanation for the correlation (exercisers also sleep more); once students can generate confounds themselves, causal bait stops landing. Then formalize dial 2.
- **bigger-sample-beats-right-frame**: "a million measurements of the wrong thing" framing; wrong-frame data doesn't average into right-frame truth.
- **volunteer-blindness**: ask who *didn't* respond and whether they'd differ; the non-response mechanism becomes visible immediately.

## Mastery criteria
Pins the sampling frame verbatim from any stem; runs both dials independently and states what each licenses; identifies the actual flaw in flawed designs while explicitly rejecting size decoys; selects the correct design fix. Proof: consistent hard-band accuracy on flaw-identification, largest-population, and experiment-fix items across varied cover stories.

## Difficulty ladder
medium: identify whether a described sample is random; pick the population a clean random sample generalizes to. → harder: four nested-population options (frame discrimination under temptation); flaw identification with size decoys; repeat-study choices trading frame against size. → hard: full inferential jurisprudence — confound spotting, selection-vs-assignment discrimination with every option a full sentence, design-fix selection — composing directly into [[statistical-claim-legality]], with edge cases like cluster-style sampling judged acceptable as random (unverified-claim: a floors-of-a-building cluster sample is treated as valid random selection).

## Teaching notes
- **Struggling**: one dial at a time. Weeks of "who was sampled? then that's who we know about" before assignment/causation even appears. Concrete absurd examples (surveying a gym about exercise habits) build the reflex.
- **Average**: introduce the two-dial table (2×2: selection × assignment) and have students classify studies into its cells and state what each cell licenses.
- **Advanced**: confound generation as an active skill — for any observational claim, produce the rival explanation in one sentence; plus the precision/validity split to kill size decoys permanently.
- **1500+**: the items become pure phrasing discrimination; train reading each option for its *license requirements* (does this sentence need dial 1? dial 2? both?) and matching against what the design actually provides. This is the same legality scan as [[statistical-claim-legality]], applied to design.
