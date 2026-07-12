# Raw notes — Math source A ("orange"), Ch. 17: Statistics
Section: math · Domain: Problem-Solving & Data Analysis (center/spread, distributions,
sampling, inference)
Covers source pp. 567–605 (instruction, skill drills, examples, recap, extra problems,
answer key). Extraction is understanding-only; no source expression retained.

## Concepts taught (candidate nodes)

- `mean-as-balance` — mean = total ÷ count; equivalently the balance point of the data.
  A new value drags the mean toward itself, and the farther it sits from the old mean,
  the harder it pulls.
- `sum-recovery` — the workhorse identity: total = mean × count. Lets you reason about
  data you never see individually (averages of groups, merged groups, unknown members).
- `median-position-rule` — the median is defined by POSITION in the sorted list: odd n →
  entry at (n+1)/2; even n → average of the two entries straddling n/2. Sorting first is
  the safety step.
- `mode-basics` — most frequent value; deliberately minor (near-absent from the exam).
- `range-spread` — max − min; a one-number spread measure, always ≥ 0.
- `frequency-table-literacy` — value column × frequency column; mean via products-sum ÷
  total count; median via cumulative stepping until the target position is reached; mode
  read directly off the largest frequency; the stated total (often in the title) is a
  gift, not decoration.
- `standard-deviation-conceptual` — SD is never computed on the exam; it is "how tightly
  the data hugs the mean." Clustered → small SD, spread/heavy-tailed → large SD. Two sets
  can share mean, median, range, and count yet differ in SD.
- `distribution-shape-to-stats` — from a histogram/dot plot, infer the ORDER of mean,
  median, mode without computing: a long tail pulls the mean toward it; median resists
  outliers; mode sits at the peak.
- `outlier-sensitivity` — mean (and range) are outlier-fragile; median is robust.
  Removing or correcting an extreme value moves the mean most, the median little or not
  at all.
- `shift-invariance-of-spread` — adding/subtracting a constant to every value (or to
  values on both sides of the median symmetrically) moves center measures but leaves
  spread measures (range, SD) unchanged.
- `box-plot-anatomy` — five-number picture: min, Q1, median, Q3, max; quartiles are
  medians of the lower/upper halves; each of the four segments holds ~25% of the data
  regardless of its drawn width; width encodes spread of that quarter, not count.
- `box-plot-limits` — a box plot does NOT show the mean, the count, or individual
  values; it does show skew (which quarter is stretched).
- `sample-to-population-inference` — a random sample's proportion/mean can be scaled to
  the population (proportion × population size); the survey answers only questions about
  the population the sample was actually drawn from.
- `sampling-bias-shared-trait` — the moment sample members share any trait beyond
  membership in the target population (same location, same day, volunteers, buyers of a
  product), conclusions shrink to the sub-population with that trait. Randomness of
  selection is THE design criterion; sample size is almost never the flaw offered.
- `causation-requires-random-assignment` — only a controlled experiment with random
  ASSIGNMENT to treatment supports "causes"; observational surveys support only
  association, and only within the group actually studied. Prefer the modest claim.
- `margin-of-error-meaning` — MoE describes uncertainty about the POPULATION value
  inferred from a sample: the true population figure most likely lies within estimate ±
  MoE. It says nothing about individual data points and nothing about the sample itself
  (the sample was measured exactly). Bigger random samples → smaller MoE.

## Teaching philosophy observed

- Opening stance: the math here is easy; the difficulty is verbal. Prescribes processing
  long stems one phrase at a time instead of one intimidated skim.
- Procedure-first for center measures (sort, position formulas) with the WHY attached to
  each formula, then immediately stress-tests with tables whose ENTRIES are themselves
  statistics (a table of medians whose range is asked) to force reading precision.
- Explicitly ranks concepts by exam relevance (mode barely exists; SD is concept-only;
  sample-size distractors are decoys) so effort tracks payoff.
- Inference is taught as claim-discipline: a ladder from "definitive/absolute" (wrong)
  down to "modest association within the sampled group" (right).
- Uses paired data sets with identical summary stats but different SD to make spread
  visible; then re-renders the same pair as histograms to transfer the intuition.

## Expert reasoning patterns (generalized)

1. Sort first (or verify sortedness) before any median/range work; for big frequency
   tables, don't expand — locate the median POSITION and step cumulative counts until
   you cross it.
2. Convert every average statement to a sum immediately (`sum-recovery`); solve
   constraint problems ("least possible 9th score…") by pushing all free values to their
   allowed extremes and writing one inequality for the remaining unknown.
3. For "which statement about mean vs median" questions, sketch the tail: identify
   where the extreme mass sits, drag the mean that way mentally, done — no arithmetic.
4. For SD comparisons, ignore formulas entirely: ask which set has more of its mass far
   from its mean. Equal-frequency (flat) tables read as spread; peaked tables read as
   clustered.
5. For inference items, first sentence of work = "who exactly was sampled, and how were
   they chosen?" Then match the conclusion's population to the sampled population and
   strike every choice that overreaches (stronger verb, wider group, or causal language).
6. For MoE items, rewrite the finding as an interval around the estimate and ask each
   choice: "does this claim stay inside the interval AND talk about the population
   parameter (not individuals, not the sample)?"
7. Desmos-first alternative (our product ships Desmos; this source is calculator-agnostic
   and computes by hand): paste lists and use mean(), median(), stdev() to kill
   arithmetic; use a quick dot-drawing or table to see shape. Still learn the positional
   median rule for frequency tables too large to type.

## Misconceptions targeted (and why students hold them)

- **mean-median-conflation** — treating them as interchangeable "averages." Forms
  because school mostly presents symmetric data where they coincide. The exam exploits
  it with skewed sets, outlier-add/remove items, and "which changes most?" items.
- **median-needs-computation** — recomputing summary statistics that the table already
  gives (finding the median OF medians instead of the asked range of them). Forms from
  pattern-matching "table + statistics word = compute that statistic."
- **middle-of-values-not-positions** — taking the midpoint of min and max, or picking
  the middle of the unsorted list, as the median. Forms because "middle" reads spatially,
  not positionally.
- **sd-requires-formula** — refusing SD comparisons because the computation was never
  taught ("cannot be determined"). The test offers that as a distractor; the fix is
  knowing SD questions are always qualitative.
- **box-width-equals-count** — reading a wide box-plot quarter as containing more data.
  Forms by analogy with histograms, where area does encode count. Each quarter is ~25%
  by construction; width = spread.
- **box-plot-shows-mean** — assuming the middle line is the mean, or that the mean is
  inferable from a box plot at all.
- **whisker-gap-means-no-data** — believing an empty-looking whisker stretch contains
  no observations; whiskers span data by definition.
- **sample-size-suspicion** — flagging "only 249 people" as the design flaw. Forms from
  everyday intuition that small = unreliable; on this exam the flaw offered/rewarded is
  essentially always non-random selection or a shared extra trait, not size.
- **overreach-generalization** — applying results to a broader group than sampled
  (mall shoppers → whole town; product buyers → all users). Forms because the stem's
  narrative frame IS the broader group, and students answer the narrative.
- **survey-proves-cause** — reading an association in observational data as causal.
  Forms from news-headline conditioning; fixed by the random-assignment test.
- **moe-covers-individuals** — reading estimate ± MoE as "all/most members lie in this
  window" (an interval about beaver weights vs. the MEAN beaver weight). Forms because
  the interval looks like a data range. The trap pair: "all values in sample lie in
  range" and "any individual value is plausible" vs. the correct "the population mean
  plausibly lies in range."
- **moe-is-about-the-sample** — thinking MoE expresses doubt about the sample
  measurement; the sample statistic is exact, the uncertainty is in projecting it.
- **percent-of-wrong-base** — applying a sample percentage to the sample when the
  question scales to the population, or to the wrong subgroup (complement percentage
  ignored). Forms from rushing the "of what?" step.

## SAT patterns claimed (verify against bank/official before asserting)

- unverified-claim: mode has essentially no presence in the spec and one known
  appearance; multi-modal edge cases will not be tested.
- unverified-claim: SD is never computed, only compared/ordered; "can't be determined
  without calculating" is a deliberate wrong choice.
- unverified-claim: frequency tables on the exam arrive pre-sorted by value.
- unverified-claim: when a survey-flaw question appears, the answer is (nearly) always
  "selection wasn't random / sample shares an extra trait"; sample-size answers are
  decoys, and no released item has hinged on a too-small sample.
- unverified-claim: MoE items reward the choice phrased as "plausible window for the
  population parameter" and punish individual-level or sample-level phrasings.
- unverified-claim: expected-count items (proportion × other population) accept the
  closest choice; exact matches may be absent by design (rounding noise).
- unverified-claim: grouped/binned tables (score ranges) get median-bin questions where
  only the bin, not the value, is determinable.
- unverified-claim: paired-survey comparisons (same population, different sample sizes)
  test that larger n → smaller MoE and that median/box-plot vs histogram
  representations must be reconciled.

## Prerequisite edges implied

- `mean-as-balance`, `sum-recovery` ← fraction/decimal arithmetic, percent-of
  computation, basic algebraic equation setup.
- `median-position-rule` ← ordering, integer position counting (off-by-one care).
- `frequency-table-literacy` ← `mean-as-balance` + `median-position-rule` (it is both,
  under compression).
- `standard-deviation-conceptual` ← `mean-as-balance` (distance-from-mean framing).
- `box-plot-anatomy` ← `median-position-rule` (quartiles are nested medians).
- Constraint min/max items ← linear inequality manipulation.
- `sample-to-population-inference`, `margin-of-error-meaning` ← proportion/percent
  scaling; `sampling-bias-shared-trait` is prerequisite to trusting any scaling.

## What this source does well / poorly

- Well: the read-slowly-in-phrases framing correctly diagnoses this domain as a reading
  problem wearing a math costume; matches our long-stem PSDA item data.
- Well: same-stats/different-SD paired sets, re-shown as histograms, is the cleanest
  spread-intuition builder in the book; steal the PRINCIPLE (hold center fixed, vary
  clustering) for our interactive.
- Well: inference is taught as a claim-strength ladder with named failure modes
  (overreach, absolutism, causal leap) — maps directly onto distractor taxonomy for our
  tutor's diagnosis.
- Well: the MoE section explicitly states what MoE is NOT about (individuals, the
  sample), which is exactly the misconception pair our bank's distractors exploit.
- Poorly: quartile computation conventions are hand-waved ("methods differ") — fine for
  the exam, but our node should state our convention crisply.
- Poorly: no scatterplots/lines of best fit here (separate chapter in this source);
  synthesis must stitch bivariate data onto this univariate spine.
- Poorly: little Desmos/tech leverage (hand arithmetic throughout); our lessons should
  wire list functions in from the start.
- Poorly: dot plots appear in problems before being formally introduced.

## Difficulty escalation observed

easy: single-statistic reads off a short list or pre-sorted table. → medium: frequency
tables requiring cumulative-position work; add/remove-a-value effects; order mean vs
median vs mode from a shape; box-plot reads. → hard: constraint optimization via sums
and inequalities (min/max a member under an average bound); statements-I/II/III
inference items; MoE interpretation with tight distractor phrasing; multi-
representation reconciliation (box plot vs histogram of same survey, paired towns with
different population sizes). Hard-end composition partners: linear inequalities,
percent-of-base discipline, and proportional scaling.
