# Raw notes — Source B (math-panda), Ch. 25: Statistics I
Section: math · Domain: Problem-Solving & Data Analysis · Pages studied: p0144–p0151 (left half of p0151 = end of this chapter's exercises)

## Concepts taught

- **mean-as-balanced-total** — mean = sum ÷ count; the operationally important inverse is sum = mean × count. Nearly every hard mean item is a "think in totals" item.
- **median-position-rule** — the median is a *position* in the ordered list, not a computation on values. The book's technique (our name: **halve-and-step-up**): divide the count by 2; if you get a whole number k, the median is the average of the k-th and (k+1)-th ordered values; if you get a half number, step up to the next whole number and that position is the median. Works uniformly for odd and even counts, which removes the case-split students trip on.
- **median-from-frequency-table** — find the median position, then walk cumulative frequencies until the running count crosses that position; the value-row entry there is the median. No listing out.
- **mode / range** — value appearing most often; max − min. Presented as vocabulary, not skills.
- **standard-deviation-as-spread** — SD measures how far values sit from their mean, comparatively. Two load-bearing sub-ideas: (1) the SAT never asks you to compute SD, only to compare; (2) only the *spacing* of values relative to each other matters, never their absolute size (a set of large tightly-packed numbers has smaller SD than a set of small spread-out numbers).
- **new-value-pulls-mean** — appending a value above the current mean raises the mean; below it lowers it; the mean moves toward the newcomer. Enables compare-without-computing.
- **mean-median-from-shape** — from a dot plot/histogram/frequency bar chart: symmetric ⇒ mean ≈ median; values piled low with a tail high ⇒ mean dragged above median (and mirror case); clustering tightness ⇒ SD comparison.
- **outlier-effect-asymmetry** — an outlier (extreme value far from the rest) moves the mean and the range strongly, the median weakly or not at all. Removing/enlarging an outlier is a standard manipulation; effect analysis is by measure: mean tracks the sum, median tracks position, range tracks the extremes.
- **frequency-table-total-trick** — sum of a frequency table = Σ(value × frequency); count = Σ(frequencies). Mean falls out without expansion.
- **histogram-interval-ambiguity** — histograms bucket values into intervals, so exact values are unrecoverable; questions therefore ask what the median *could* be, or bound a quantity (max/min possible), not exact statistics.
- **box-plot-five-number-read** — box plot encodes min, first quartile, median, third quartile, max; quartiles are the 25th/75th percentile cut values ("25% of the data is below Q1"); SAT requires reading, never constructing from raw data.
- **combined-group-mean-weighting** — merging groups of different sizes: combined mean = weighted by counts (via totals), never the midpoint of the two means unless sizes are equal.

## Teaching philosophy observed

- Sequence: define center measures on a tiny concrete set → immediately give the position-based median technique (with a self-verification on 3- and 4-element sets, teaching students to *test a technique on a case where they know the answer*) → spread (SD conceptual only) → shape displays (dot plot → histogram → box plot), each introduced by a worked example that *is* the display's canonical SAT use.
- The dominant meta-message: statistics on the SAT is comparison and logic, not calculation. Every worked example after the first computes as little as possible (e.g., deciding a mean comparison by spotting that the appended value sits below the old mean).
- Deliberate demystification of SD: states outright that computing it is out of scope, cutting off wasted study effort.
- Definitions are always followed by the exam's twist on them within a page (e.g., median defined → immediately confronted with even counts and 100-element sets where listing fails).

## Expert reasoning patterns (generalized)

- **Totals thinking for means.** Any stem coupling means with a changing roster (member joins/leaves, sets merge, one value corrected) is translated to sums: old sum = mean×n; adjust the sum; divide by new count. Unknown roster sizes become one linear equation in n. Experts never reason about means directly — only about sums.
- **Median without listing.** Compute the target position (halve-and-step-up), then reason about *where that position falls* — in a frequency table, walk cumulative counts; in a dot plot, count dots from one end; in a histogram, identify which interval contains the position (that's the best you can do). The expert never writes the data out.
- **Compare, don't compute.** For "which is greater, mean or median?" on a displayed distribution: check symmetry first (equal ⇒ done); otherwise locate the tail — the mean chases the tail, the median stays with the pile. For SD comparisons: same spacing pattern ⇒ same SD regardless of value size; tighter clustering around the center ⇒ smaller SD.
- **Effect-of-change audit by measure.** When a value is added/removed/altered, run the three-measure checklist independently: sum changed? (mean) — position structure changed? (median) — extremes changed? (range). The measures decouple; experts resist the intuition that they move together.
- **Must-be-true discipline.** For logical items ("median leaf length is 5 ⇒ which must be true"), the expert tests each claim against an adversarial concrete counterexample rather than against the intuitive prototype of the data.
- **Bounding under ambiguity.** With histograms, place the hidden values at interval endpoints to extremize (largest possible mean, smallest possible median, max difference), i.e., treat every bucketed item as a free variable pinned only by its interval.

## Misconceptions targeted (and why students hold them)

- **median-needs-full-list** — belief that finding a median requires writing all values in order. Formed because school examples are 5–9 values where listing works. Breaks on frequency tables of 28+ values; the position-walk fixes it. Diagnostic signature: correct on short lists, slow/wrong on tables.
- **even-count-median-confusion** — for 100 values, is it the 50th? 50.5th? average of 49th and 50th? Formed because the odd case is learned as "the middle one" without a positional rule. The halve-and-step-up rule was designed specifically to erase this case-split.
- **sd-tracks-magnitude** — believing {100,101,102,103} has larger SD than {5,10,15,20} because its numbers are bigger. Formed from conflating "deviation" with "size." Fixed by the spacing-only principle.
- **measures-move-together** — assuming that whatever raises the mean raises the median and range too. Formed from experience with small symmetric edits. Exploited by every I/II/III "which will increase?" item; the outlier-correction design (only mean and range move, median frozen) is the canonical trap.
- **combined-mean-is-midpoint** — averaging two group means ignoring group sizes. Formed because it's correct in the equal-size special case students see first. Distractor sets always include the unweighted midpoint.
- **histogram-values-are-knowable** — reading a histogram as if exact values were recoverable, e.g., computing "the" median instead of the possible range. Formed because bar charts of exact frequencies look identical to histograms of binned data.
- **mean-must-be-a-data-value** — discomfort when a mean (or the "go up" median of an even set) isn't in the list; can cause students to snap answers to listed values.
- **range-median-conflation** — treating the median as the midpoint of min and max ("(max+min)/2") rather than the middle of the ordered *count*. Surfaces on skewed sets where the two differ dramatically.

## SAT patterns claimed (mark: unverified-claim)

- SD is compare-only on the SAT; quartiles are read-only (never computed from raw data). (unverified-claim)
- Recurring design templates from the exercise set: median difference between two listed sets; range from a frequency table; median from a dot plot of ~27 values (position-walk enforced); box-plot median-vs-extreme gap; combining two classes' means (weighted); shelf-life must-be-true logic on range; find-x given a mean relation between two symbolic sets; mean-vs-median pick from a frequency table; which-frequency-table-has-greater-mean (frequency-shift reasoning, no computing); histogram could-be-median; mean&range from a frequency bar chart; add-100-to-the-set effect on mean vs median; paired frequency tables comparing both mean and SD (values shifted by a constant ⇒ same SD, different mean); I/II/III mode/median/range claims on a small quiz-score list; max possible |median(Y) − mean(X)| from two histograms (endpoint extremization); adding a value equal to a group boundary and asking the mean effect with the answer "not enough information" being wrong/right by design; removing a value pinned at the current extreme (mean and median move predictably); appended-group means where one group dominates by size. (unverified-claim)
- "Not enough information" appears as a real answer option in comparison items and is sometimes correct (box-plot mean comparisons — box plots don't determine means) and sometimes bait (frequency displays that DO determine both statistics). (unverified-claim)

## Prerequisite edges implied

- mean-as-balanced-total ← linear-equation-solving (for roster items), fraction arithmetic
- median-position-rule ← ordering/counting only (deliberately low-prereq)
- median-from-frequency-table ← median-position-rule + frequency-table-total-trick
- mean-median-from-shape ← mean-as-balanced-total + median-position-rule + dot-plot/histogram reading (ch23 chart literacy)
- standard-deviation-as-spread ← mean-as-balanced-total (conceptually anchored on distance-from-mean)
- box-plot-five-number-read ← median-position-rule (quartiles as medians of halves is implicit)
- combined-group-mean-weighting ← mean-as-balanced-total
- outlier-effect-asymmetry ← all three center/spread measures

## Difficulty escalation observed

1. Compute mean/median/range on a short explicit list.
2. Same statistics but the data wears a display costume (frequency table, dot plot, box plot) — position-walk replaces listing.
3. Compare statistics between two sets without computing (shape/spacing reasoning; SD enters here, always comparatively).
4. Effect-of-change items (add/remove/correct a value; outlier surgery) — decoupled-measures checklist; I/II/III formats.
5. Reverse/roster algebra (unknown counts from mean relations; missing-integer bounded by range and mean constraints) and adversarial bounding (histogram extremization, must-be-true with counterexamples) — statistics fused with algebra and logic.

## What this source does well / poorly

- **Well:** the positional median rule is the chapter's crown jewel — one uniform rule that scales from 4 values to 400 and transfers to every display type; the compare-don't-compute doctrine matches actual exam demands; the spacing-not-magnitude SD principle is stated crisply; exercise set systematically covers the add/remove/outlier effect space with I/II/III items that isolate the measures-move-together misconception.
- **Poorly:** quartiles get no positional treatment parallel to the median (students are told to read, not understand, Q1/Q3); no explicit connection between "mean chases the tail" and *why* (sum sensitivity) — it's demonstrated but the causal link to totals-thinking is left implicit; weighted mean never gets a named principle, only worked instances; nothing on when mean vs median is the *appropriate* summary (the exam occasionally probes this via outlier-context). Our node should unify: median = position, mean = total, range = extremes — one slogan per measure — and derive all effect-of-change behavior from those three anchors.
