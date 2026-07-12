---
id: successive-percent-rebasing
section: math
domain: problem-solving-data-analysis
skill: chained-percent-relationship, percent-greater-than-less-than
difficulty_span: [medium, hard]
prereqs: [percent-as-multiplier]
unlocks: [reverse-percent-recovery, exponential-model-anatomy]
related: [linear-vs-exponential-classification]
---

# Successive changes rebase: chain the factors, never add the percents

## What it is
Sequential percent changes cannot be added, because each change acts on the value
the previous one left behind — the base moves. The correct composition is
multiplication of the factors in one product: original × f₁ × f₂ × f₃, with
intermediate values never computed. The canonical illusion: +40% then −40% does NOT
return to start. The two operations look like inverses (same number, opposite signs
— which for ADDITION would cancel), but ×1.4 and ×0.6 are not reciprocals; the
decrease acts on the enlarged base, so it removes more than the increase added.
Net: ×0.84, a 16% loss.

## Why it exists / why the SAT tests it
This is the single most reliable percent misconception on the exam, and the test
farms it in several skins: discount-then-tax pricing, year-over-year population
chains, "25% fewer then 40% more" across three dates, and expression-form answers
like (0.87)(1.11)(5400) that test whether the student builds the product at all
(unverified-claim on expression-form frequency — matches our M2 style memory,
verify). The items are engineered so stepwise computation is tedious but factor
chaining is fast: speed itself is part of the intended discrimination. This node is
also the conceptual hinge of the whole cluster — repeated multiplication by the SAME
factor is precisely what an exponential model is, so this is the last stop before
[[exponential-model-anatomy]].

## Mental model
**Percents don't stack; factors do.** Each change is an operator applied to whatever
the previous operator produced. Convert every change clause to its factor as you
read, multiply them all onto the starting quantity in ONE product, and interpret
only the composite against 1 at the end (0.9 × 1.05 = 0.945 → net 5.5% decrease).
Order never matters (multiplication commutes) — but the base shifts under every
step, which is exactly why addition fails. The one legal exception: percents of the
SAME fixed reference add fine (25% of the pizza + 50% of the SAME pizza = 75% of
it). The real question is always "same base, or shifted base?"

## Expert reasoning process
1. Read clause by clause; write the factor for each change as you encounter it.
2. Ask the addability question once: do these percents apply to one fixed base
   (addable) or does each apply to the running result (multiply)?
3. Write the entire product before evaluating anything: start × f₁ × f₂ × ...
4. If choices are expressions, STOP — match the product's structure and skip
   arithmetic entirely.
5. If a number is needed: one Desmos line, full precision, round only at the end.
6. Interpret the composite factor against 1 for net-change questions; the net
   percent is |composite − 1|, and it will not equal the naive sum.
7. Sanity anchor: an up-then-down (or down-then-up) pair of equal percents always
   lands BELOW the start — if your result says otherwise, the chain is wrong.

## Misconceptions
- **additive-successive-changes** — student adds sequential percents (+5% then −10%
  = "net −5%"). Forms because percentages present as absolute quantities, and in the
  one familiar case (fixed base) adding genuinely works; the student overgeneralizes
  from the case where it succeeded. Trap answers: the naive net-percent value, and
  the start value itself on equal-up-down items.
- **plus-minus-cancellation (the ±40% illusion)** — the strongest version of the
  above: equal and opposite percents "must cancel." Extra pull because +40/−40 has
  the visual form of additive inverses. The student's belief is not stupid — it is
  the correct additive schema applied to a multiplicative situation. Distractor: the
  original value; second-order distractor: a net change of 0%.
- **stepwise-base-drift** — student computes step by step (correctly in principle)
  but takes some percent of the wrong intermediate, or rounds intermediates and
  drifts. Not conceptual — procedural exposure: stepwise is how percents were first
  taught, and every extra computed value is a place to err.
- **expression-blindness** — on expression-form items, student evaluates everything
  and hunts for a matching decimal instead of recognizing (0.87)(1.11)(5400) as the
  direct transcript of the story. Forms because answers were always numbers in
  school; expressions-as-answers is test-native literacy.
- **same-base-blanket-ban** — after learning "never add percents," student refuses
  legal addition on same-base items (shares of one fixed total). Overcorrection
  caused by teaching the rule as a ban instead of as the base-question.

## Diagnostic indicators
- Picks the naive-sum answer on chained items (additive): e.g., net "−5%" for
  +5%/−10%.
- Picks the original value on equal-up-down stems (±40% illusion) — the single most
  diagnostic distractor in this cluster; pair it with the correct ×0.84-style value
  and the naive 0%-change reading.
- Long time-on-task with correct answer (stepwise): the student got there by
  computing every intermediate — accuracy without the model; will fail under module
  time pressure and on expression-form items.
- On expression-form items, picks a partially evaluated or additive-form expression
  like (1.38)(1.37x) vs the correct factor pair, or (0.38)(1.37x) — these test
  whether multipliers are built at all.
- Refuses to add same-base shares (blanket-ban): wrong on "25% of the budget plus
  50% of the SAME budget" style reads.

## Remediation pathways
- **additive / ±40% illusion**: have the student compute the counterexample
  themselves with 100 as the start (100 → 140 → 84). Then the visual: the −40%
  shrinks the LARGER bar, so it removes a bigger slice than the +40% added. The
  bar-shrinking image lands the rebasing insight faster than prose. If it doesn't
  hold, rebuild [[percent-as-multiplier]] first — chaining can't survive on a shaky
  factor concept.
- **stepwise-drift**: don't outlaw stepwise (it's valid); teach the one-product
  transcription and the one-line Desmos evaluation as strictly less work. Speed
  contrast on one timed item usually converts the student.
- **expression-blindness**: reps where the task is ONLY to write the product from
  the story, never evaluate. Then show the answer choices — the product is sitting
  there verbatim.
- **blanket-ban**: teach the base-question ("same pizza?") with one addable and one
  non-addable item side by side; the contrast pair inoculates better than a rule.

## Mastery criteria
Student writes the full factor product from a multi-change story without computing
intermediates; predicts BEFORE computing that equal up-down lands below start;
answers expression-form items by structure; and correctly adds same-base shares when
legal. Proof: one hard chained item (3+ changes, expression answer) plus one
±p%-illusion item plus one same-base item — all correct, with the chain visible in
scratch work or explanation.

## Difficulty ladder
- **easy** (rare alone): two-step chain with clean numbers, numeric answer.
- **medium**: discount + tax; three-date chains ("25% fewer, then 40% more");
  back-translation of a composite (given net factor 1.84, find the description).
- **hard**: expression-form answers; chains in terms of variables (p% then q%);
  chains wrapped around a base-switching story (wholesale/retail); recovery of
  earlier values through the chain — hands off to [[reverse-percent-recovery]].
- **hardest**: the chain becomes infinite — the same factor applied t times — and
  the node graduates into [[exponential-model-anatomy]]; also composes with
  [[scaling-laws-k-k2-k3]] on two-dimensional rescale items (0.8 × (1+p) = 1.2).

## Teaching notes
- **Struggling**: everything through 100-start numeric walks; do +40/−40 physically
  with play money or a drawn bar before any symbolic chain. One story, computed both
  ways (stepwise vs one product), same answer — the product is just the stepwise
  story written smarter.
- **Average**: the transcription drill — story in, product out, no evaluation; then
  interpret-composite-against-1 reps. Make the addability question ("same base?") an
  explicit checkpoint.
- **Advanced**: variable chains, back-translation of composites, and the commuting
  insight (reordering changes never matters — useful for checking).
- **1500+**: frame this node as proto-exponential: "what if the same factor applied
  every year for t years?" writes a·bᵗ on the spot. Expression-form items become
  free points; everything numeric is one unrounded Desmos line.
