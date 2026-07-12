---
id: box-plot-reading
section: math
domain: problem-solving-data-analysis
skill: box-plot-interpretation
difficulty_span: [easy, medium]
prereqs: [median-as-position, data-display-decoding]
unlocks: []
related: [spread-range-and-sd, distribution-shape-and-outlier-effects]
---

# Box plots: five numbers, four quarters, and what the picture cannot say

## What it is
A box plot is a five-number picture of a data set: minimum, first quartile (Q1), median, third quartile (Q3), maximum. The quartiles are the 25th/75th-percentile cut values — structurally, the medians of the lower and upper halves, so quartiles are nested medians. Each of the four segments (whisker, box-half, box-half, whisker) holds roughly 25% of the data *by construction*, no matter how wide or narrow it's drawn: a segment's width encodes the *spread* of that quarter, never its count. On this exam you read box plots; you never construct them from raw data. unverified-claim: quartiles are read-only on the SAT — never computed from raw values.

## Why it exists / why the SAT tests it
Box plots are the exam's compactest display, and the items are engineered around what the display does and doesn't determine. It *does* show: the five numbers, the range (max − min), the interquartile spread, and skew (whichever quarter is stretched). It does *not* show: the mean, the count, or any individual value. Comparison items ("which class has the greater mean?") exist precisely to reward students who know the second list — "cannot be determined" is sometimes the genuinely correct answer here. unverified-claim: "not enough information" is correct on box-plot mean comparisons and bait on frequency displays that do determine both statistics.

## Mental model
**Four rooms, equal occupancy, different sizes.** The data is split into four quarters of equal *count*; the drawing shows how much *value-space* each quarter needs. A stretched room means its 25% of the data is spread out; a cramped room means its 25% is packed tight. Then keep a hard boundary in mind between the two lists: what a box plot shows (five numbers, range, skew) and what it hides (mean, count, individual values).

## Expert reasoning process
1. Label the five numbers first — read them against the axis like any display ([[data-display-decoding]] axis discipline applies).
2. Translate the question into five-number arithmetic where possible: range = max − min; middle 50% lives between Q1 and Q3; median-vs-extreme gaps are direct subtractions.
3. For proportion questions ("what fraction of the data is above Q1?") answer from construction: each segment ≈ 25%, so above Q1 ≈ 75% — never from segment widths.
4. For skew/shape: the stretched side is the tail side; connect to [[distribution-shape-and-outlier-effects]] if mean-vs-median direction is asked (stretched right tail suggests mean above median — but note the plot doesn't *show* the mean).
5. For any question about mean, count, or a specific value: check whether the plot can answer at all before working. If it can't, "cannot be determined" is a legitimate answer, not a trap — here.

## Misconceptions
- **box-width-equals-count** — reading a wide quarter as containing more data. Forms by analogy with histograms, where area genuinely encodes count; it's the single most common box-plot misread. Produces proportion answers scaled by drawn widths.
- **box-plot-shows-mean** — assuming the middle line is the mean, or that the mean is somehow inferable. Forms because "the line in the middle" pattern-matches to "average" in students' vocabulary, and school often blurs mean/median. Produces confident answers on mean-comparison items whose correct answer is "cannot be determined."
- **whisker-gap-means-no-data** — believing an empty-looking whisker stretch contains no observations. Forms because whiskers are drawn as bare lines with no marks; but whiskers span data by definition — that quarter is just spread out.
- **quartiles-as-values-not-cuts** — treating Q1/Q3 as data members rather than cut points, e.g., "Q3 is the third-largest value." Forms because the notation reads like a ranking. Produces off-by-a-layer answers on percentage-above/below questions.

## Diagnostic indicators
- Proportion answers proportional to drawn segment widths → **box-width-equals-count**. Verbal tell: "most of the data is in the long part."
- Computes or compares means from box plots without hesitation → **box-plot-shows-mean**; picking a definite answer where "cannot be determined" is correct is the cleanest signature the tutor can key on.
- Claims a region of the plot is "empty" or excludes whisker spans from data statements → **whisker-gap-means-no-data**.
- Misplaces percentile statements by one layer (says 25% when 75% is right, etc.) → **quartiles-as-values-not-cuts**.

## Remediation pathways
- **box-width-equals-count**: build a box plot together from 8 known values, then stretch one quarter by moving values apart *without changing membership* — same counts, different widths. The construction, done once, inoculates (even though the exam never asks for it).
- **box-plot-shows-mean**: two small sets with the same five-number summary but different means; the plot literally cannot distinguish them. Then teach the shows/hides two-list boundary explicitly. Route to [[median-as-position]] if mean/median identity confusion runs deeper.
- **whisker-gap-means-no-data**: same 8-value construction — point at the values living inside the "empty" whisker.
- **quartiles-as-values-not-cuts**: percentile-ladder sketch: min→Q1 holds a quarter, Q1→median another, etc.; quiz "what fraction lies between X and Y" until instant.

## Mastery criteria
Reads all five numbers and derives range/IQR-style gaps instantly; answers proportion questions from the 25%-per-segment construction regardless of drawn widths; correctly refuses questions the display can't answer (mean, count, individual values) and correctly *answers* when "cannot be determined" is bait. Proof: clean accuracy on paired-box-plot comparison items including at least one whose right answer is "cannot be determined."

## Difficulty ladder
easy: read one of the five numbers; compute the range. → medium: median-vs-extreme gaps; middle-50% statements; compare two box plots on medians, ranges, or spreads; percent-above/below a quartile. → hard end: box plot reconciled against another representation of the same data (histogram of the same survey), and determinability judgments — which claims about mean/count the display supports — feeding [[statistical-claim-legality]]-style reasoning and the shows/hides discipline that [[statistical-claim-legality]] generalizes.

## Teaching notes
- **Struggling**: build one box plot from 8 real numbers before any reading. The five-number anatomy plus "each piece holds a quarter" is the entire lesson; skip skew initially.
- **Average**: the shows/hides two-list boundary, drilled with quick-fire "can this plot answer this?" questions; then paired-plot comparisons.
- **Advanced**: width-vs-count discrimination under adversarial drawings (huge box, tiny whiskers and vice versa); multi-representation reconciliation with histograms.
- **1500+**: determinability as the actual skill — before solving anything, classify each answer choice as answerable/unanswerable from the display. This is the same legality reflex the inference items reward, practiced on a picture.
