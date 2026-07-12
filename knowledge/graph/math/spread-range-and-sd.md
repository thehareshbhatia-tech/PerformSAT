---
id: spread-range-and-sd
section: math
domain: problem-solving-data-analysis
skill: standard-deviation-comparison, range-of-a-data-set
difficulty_span: [medium, hard]
prereqs: [mean-as-total]
unlocks: [distribution-shape-and-outlier-effects, margin-of-error-interpretation]
related: [median-as-position, box-plot-reading]
---

# Spread: range reads the extremes, SD reads the spacing

## What it is
Two spread measures with one anchor each. **Range = max − min**: a one-number spread measure that depends *only* on the two extremes and is always ≥ 0. **Standard deviation = how tightly the data hugs its mean**: clustered near the mean → small SD; mass far from the mean or heavy tails → large SD. On this exam SD is a purely comparative concept — you are never asked to compute it, only to compare or order it. unverified-claim: SD is never computed on the SAT, only compared; "cannot be determined without calculating" is a deliberately planted wrong choice.

## Why it exists / why the SAT tests it
SD items probe whether the student has the *concept* independent of the formula — exactly the opposite of how school teaches it. The exam constructs paired data sets sharing mean, median, range, and count that still differ in SD, forcing a judgment no memorized procedure covers. Range items check that the student knows which values matter (the extremes, nothing else). Both feed the effect-of-change checklist in [[distribution-shape-and-outlier-effects]] and the variability driver of [[margin-of-error-interpretation]].

## Mental model
**Compare spacing, never compute.** For SD, only the spacing of values relative to each other matters — never their absolute size. {100, 101, 102, 103} is *tighter* than {5, 10, 15, 20} despite bigger numbers. Two corollaries do most of the work: (1) shifting every value by the same constant moves the mean but leaves range and SD unchanged — spread is shift-invariant; (2) in frequency displays, flat/equal-frequency shapes read as spread-out, peaked shapes read as clustered. For range, ignore everything but the two ends.

## Expert reasoning process
1. Identify which spread measure is asked; run its anchor: range → extremes only; SD → spacing around the mean.
2. For SD comparisons, never reach for a formula: ask which set has more of its mass far from *its own* mean. Sketch or eyeball; done.
3. Check for a pure shift first: if one set is the other plus a constant, SD and range are equal regardless of appearance — same SD, different mean.
4. On frequency tables/histograms: peaked-at-center → smaller SD; flat or bimodal-at-the-ends → larger SD.
5. For range from a frequency table, read the smallest and largest *values with nonzero frequency*; every other row is noise.
6. Treat "cannot be determined" with suspicion on SD comparisons — the display usually does determine the order.

## Misconceptions
- **sd-requires-formula** — refusing SD comparisons because the computation was never taught, and taking the "cannot be determined" bait. Forms because school presents SD as a formula ritual; students without the formula assume they lack the tool. The fix is the meta-fact: SD questions are always qualitative here.
- **sd-tracks-magnitude** — believing sets with bigger numbers have bigger SD. Forms from conflating "deviation" with "size"; killed by the spacing-only principle and the shift-invariance corollary.
- **range-includes-middle** — thinking interior values influence the range, or recomputing the whole set when one middle value changes. Forms from treating all statistics as whole-data computations; range's two-value dependency is the point.
- **spread-moves-with-center** — assuming that whatever raises the mean also raises the spread. Forms from experience with small edits where things happened to move together; a constant shift is the clean counterexample (center moves, spread frozen).

## Diagnostic indicators
- Picks "cannot be determined" on a visually decidable SD comparison → **sd-requires-formula**. Verbal tell: "we'd need to calculate it."
- Ranks the large-valued set as higher-SD despite tighter spacing → **sd-tracks-magnitude**.
- Recomputes or hesitates on range when only interior values changed → **range-includes-middle**.
- On shifted-by-a-constant paired tables, claims the SDs differ → **spread-moves-with-center** (or magnitude confusion); the paired-frequency-table item with values shifted by a constant is the canonical probe.

## Remediation pathways
- **sd-requires-formula**: state the scope fact outright (compare-only, never compute), then hand them the spacing question as the *replacement tool*. Practice on paired sets with identical summary stats but different clustering, then the same pairs re-rendered as histograms to transfer the intuition.
- **sd-tracks-magnitude**: the {100,101,102,103} vs {5,10,15,20} contrast; then shift a set by +100 and ask what changed. If the distance-from-mean framing itself is shaky, revisit [[mean-as-total]] (balance-point picture).
- **range-includes-middle**: edit-the-middle drill — change interior values five ways, watch the range not move; then touch an extreme.
- **spread-moves-with-center**: the shift-invariance demonstration, then decouple fully via the checklist in [[distribution-shape-and-outlier-effects]].

## Mastery criteria
Orders SDs across displayed distributions by clustering alone; recognizes constant shifts instantly (same spread, different center); reads range off any display touching only the extremes; rejects the compute-it bait. Proof: correct on paired-display SD comparisons and shifted-set items without any computation attempts.

## Difficulty ladder
medium: compare SD of two lists or dot plots; range from a list or frequency table. → harder: SD comparison where mean/median/range/count all match and only clustering differs; frequency-table pairs shifted by a constant (same SD, different mean); range questions embedded in must-be-true logic. → hard end: spread reasoning fused into effect-of-change audits and I/II/III items ([[distribution-shape-and-outlier-effects]], [[statistical-claim-legality]]), and the homogeneity reasoning behind which-group-gives-a-smaller-margin-of-error ([[margin-of-error-interpretation]]).

## Teaching notes
- **Struggling**: skip the word "deviation" at first. Ask "which pile is more squished together?" on dot plots; attach the SD label only after the judgment is reliable. Range = far end minus near end, nothing else.
- **Average**: the two corollaries (shift invariance; flat vs peaked) plus the meta-fact that SD is never computed — this alone converts their "can't do SD" into a strength.
- **Advanced**: same-summary-stats/different-SD pairs; train the discipline of measuring spread around each set's *own* mean, not around a shared reference.
- **1500+**: spread as a *driver* in composed items — SD's role in margin-of-error direction reasoning, and spotting when a distractor exploits the spread-moves-with-center reflex inside a multi-statement item. At this band the SD content is trivial; the test is noticing which measure a claim actually constrains.
