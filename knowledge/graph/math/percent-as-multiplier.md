---
id: percent-as-multiplier
section: math
domain: problem-solving-data-analysis
skill: percent-greater-than-less-than, percent-decrease, percent-complement
difficulty_span: [easy, hard]
prereqs: [percent-three-slots]
unlocks: [successive-percent-rebasing, reverse-percent-recovery, growth-factor-vs-rate]
related: [unit-magnitude-sanity-check]
---

# Percent change is one multiplication

## What it is
Applying a percent change means multiplying by a single factor: increase by p% →
×(1 + p/100); decrease by p% → ×(1 − p/100). The decrease multiplier IS the fraction
that remains — a 30% cut leaves 70%, so ×0.70. Every change verb (grows, loses,
discounted, raised, shrinks) maps straight to one factor, and the vocabulary runs
both directions: seeing 1.15x means "15% greater than x"; 0.85x means "15% less."
This is the load-bearing mental model of the entire percent-and-growth cluster.

## Why it exists / why the SAT tests it
The multiplier is what separates students who can compose changes from students who
recompute intermediate values step by step. The SAT tests it directly (write the
expression for a changed quantity; back-translate a multiplier into a percent
statement) and indirectly — it is the prerequisite the exam silently assumes in
successive-change, reverse-percent, and exponential items. Answer sets are built to
X-ray whether the student forms multipliers at all: edge-case changes (+120%, −100%,
+0.4%) have no memorized pattern to lean on and expose raw understanding.

## Mental model
**A percent change is an operator, not an amount: one factor, applied once.** The
original is 100% of itself; a change either keeps-all-plus-extra (1 + p/100) or
keeps-part (1 − p/100). Hold the edge cases as calibration anchors: +200% → ×3;
+120% → ×2.2; −100% → ×0; +0.4% → ×1.004; "80% less" → ×0.20. The factor can hit an
entire algebraic expression, not just a number — half of (30h + 200) is one
multiplication. And the anchor of any comparison is the quantity after "than"/"of":
percent change = (new − old)/old is just the multiplier minus 1, read against the
old value.

## Expert reasoning process
1. Translate every percent clause into its factor as you read, before any other
   move. Increase → (1 + p/100); decrease → (1 − p/100); "of" → ×(p/100).
2. Decide what the question wants: the amount removed, or the amount remaining?
   Most reduction stems want the remaining (complementary) amount
   (unverified-claim on "most" — verify frequency against bank), so the factor is
   the kept fraction.
3. Identify the base: the quantity after "than" (or "of") anchors the comparison.
   From "x is 80% of y" you may NOT conclude y = 1.2x; correct is y = x/0.8 = 1.25x.
4. For percent-change-between-two-values questions: compute new = p·old and read p
   against 1 — p = 1.2 means 20% growth, p = 0.85 means 15% decline. One computation
   yields size and direction; the (new−old)/old formula is the same object.
5. Distinguish "percent greater" from "times": 200 vs 50 is 4 times but 300%
   greater — the excess over the original, not the whole.
6. Variable percents enter as p/100, never bare p: (1 − p) with p ≈ 25 goes negative
   — an instant absurdity check.
7. Sanity gate before committing: should the result be above or below the original?
   Above or below 100%?

## Misconceptions
- **multiplier-off-by-one** — writing ×0.2 for "decrease by 20%" (computing the
  removed part when the remaining part is wanted) or ×1.2 for "+120%." Forms because
  "percent OF" and "percent CHANGE" use identical words with different referents,
  and because changes past 100% break the memorized 1± pattern. The drill cases
  +120% → 2.2 and −100% → 0 are the acid test.
- **big-percent-literalism** — "80% less" → ×0.80; "250% greater" → ×2.5. The
  student grabs the raw number when the percent is uncommon. The SAT is claimed to
  use uncommon percents deliberately for this (unverified-claim).
- **percent-more-less-symmetry** — "x is 20% less than y, so y is 20% more than x."
  Forms because additive more/less by an AMOUNT genuinely is symmetric; students
  port that symmetry to relative change, where the base swaps. Produces y = 1.2x
  from x = 0.8y; the ÷0.8 = ×1.25 answer sits beside the ×1.2 trap.
- **excess-vs-multiple confusion** — reading "what percent greater" as the ratio
  ("400%") instead of the excess ("300%"). School usage blurs "times" and "percent
  greater"; both readings always appear as choices.
- **decimal-point-slips-in-factors** — 0.4% → ×1.04 instead of ×1.004. Mechanical
  conversion under pressure; this is the same slip that later becomes the 1.024 vs
  1.24 exponential trap ([[growth-factor-vs-rate]]).
- **missing-hundredth-on-variables** — writing 240(1 − p) for "p% less than 240."
  With numeric percents the /100 is silently absorbed into the decimal, so it was
  never internalized as a required step; it resurfaces the moment p is a letter.

## Diagnostic indicators
- Picks the removed-part answer on remaining-amount stems (off-by-one): answer =
  p% of original rather than (100−p)%.
- On +120% / −100% / sub-1% drill items, picks 1.2 / a nonzero value / 1.04
  (literalism + decimal slips) — edge-case multipliers ×2.2, ×0, ×1.004 are the
  cleanest single-item diagnostics in the cluster.
- Picks the symmetric-percent answer (1.2x for the inverse of ×0.8): symmetry
  misconception; the student's explanation says "just reverse it."
- Answers 400% where 300% is keyed (excess-vs-multiple).
- Variable-expression items: picks (1 − p) over (1 − p/100) — the permutation set
  {(1−p), (p−1), (1−p/100), (p/100 −1)} is designed to isolate exactly this.
- Timing signature: students WITHOUT the multiplier compute intermediate values and
  run long on chained items; students WITH it answer expression-form items fast.

## Remediation pathways
- **off-by-one / literalism**: rebuild the factor from the 100% baseline every time
  ("you start with all of it; what fraction is left / what multiple do you have
  now?"). Then the edge-case drill (+200%, +120%, −100%, −80%, +0.4%) until anchors
  are owned. If shaky, revisit [[percent-three-slots]] conversion fluency.
- **symmetry**: numeric counterexample the student computes themselves: 100 → −20%
  → 80 → +20% → 96 ≠ 100. Then the rule: reversing a change means DIVIDING by its
  factor ([[reverse-percent-recovery]]).
- **excess-vs-multiple**: contrast pair on one number line — "4 times 50" and "300%
  greater than 50" landing on the same point.
- **missing-hundredth**: dimensional absurdity check — plug p = 25 into (1 − p) and
  watch it go negative; the student self-corrects permanently once they see it.

## Mastery criteria
Student translates any change clause — including uncommon and variable percents —
into its factor in one step, both directions (factor → percent statement too);
identifies the "than"-anchor correctly; and REFUSES the symmetric-reverse move.
Proof: clean edge-case drill (×2.2, ×0, ×1.004, ×0.20) plus one medium in-context
item and one variable-percent expression item, all correct in one session.

## Difficulty ladder
- **easy**: single increase/decrease with a common percent; back-translation of a
  clean multiplier (1.3 → "30% greater").
- **medium**: complementary readings (remaining vs removed); percent change between
  two given values; multiplier applied to an algebraic expression; "times" vs
  "percent greater" discrimination.
- **hard**: uncommon percents (80% less, 390% of); variable-percent expression
  selection; multi-variable percent relations (p is 60% of q and 390% of r — each
  clause a factor, the answer a factor quotient); base-switching stories (wholesale
  vs retail, tax after discount) feeding [[successive-percent-rebasing]].
- Composes at the hard end with: [[successive-percent-rebasing]],
  [[reverse-percent-recovery]], [[growth-factor-vs-rate]], geometry rescaling via
  [[scaling-laws-k-k2-k3]] (0.8(1+p) = 1.2 across two dimensions).

## Teaching notes
- **Struggling**: pick-100 everything — start at 100, apply the change, look at
  where you land; the factor is just "where you landed ÷ 100." Build the translation
  table (percent clause → factor) WITH the student rather than handing it over.
- **Average**: drill translate-only reps (no solving): ten clauses → ten factors,
  edge cases included; then back-translation the other way. Multiplier fluency is a
  vocabulary, and vocabularies are drilled bidirectionally.
- **Advanced**: multipliers on expressions, variable percents with the p/100
  discipline, factor-quotient relations between multiple variables.
- **1500+**: this model IS the speed play: expression-form answers ((0.87)(1.11)(5400))
  are readable without evaluation, and any chain evaluates as one Desmos line —
  reason first, one-line chain second, never round intermediates.
