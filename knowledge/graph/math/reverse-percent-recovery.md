---
id: reverse-percent-recovery
section: math
domain: problem-solving-data-analysis
skill: reverse-percent
difficulty_span: [medium, hard]
prereqs: [percent-as-multiplier, successive-percent-rebasing]
unlocks: []
related: [exponential-model-anatomy, growth-factor-vs-rate]
---

# Recovering the original: divide by the multiplier

## What it is
When a final value is known and the change that produced it is known, the original
is recovered by DIVIDING by the change's factor — never by applying the opposite
percent. A price that became $76.30 after a 30% discount and 9% tax satisfies
original × 0.70 × 1.09 = 76.30, so original = 76.30 / (0.70 × 1.09). The multiplier
is an operator with an inverse, and its inverse is division by the same factor — not
multiplication by the complementary factor.

## Why it exists / why the SAT tests it
Reverse-percent is a recurring medium-hard family (unverified-claim on frequency —
verify against bank) because it distinguishes students who hold the multiplier as an
invertible operator from those who hold it as a one-way recipe. The trap is vicious
by design: for a tax situation, final × (1 − p) and final ÷ (1 + p) are BOTH slightly
below the final value, so the wrong move produces an answer that feels exactly right
and sits adjacent to the key. Variable versions ("in terms of p") appear at the hard
end, and the same recovery move recurs inside growth contexts ("this year's value is
p% more than last year's — find last year's").

## Mental model
**Write the forward story with an unknown start, then invert it.** Name the unknown
original, multiply it forward through every stated change (that's just
[[percent-as-multiplier]] and [[successive-percent-rebasing]]), set the product
equal to the known final, and solve — which means dividing by the factor(s). The
reflex to install: "p% more/less than [an unknown earlier value]" ⇒ the unknown gets
the multiplier, the known is the result. Never operate backwards on the final value
with a fresh percent; the percent you were given was never a percent OF the final.

## Expert reasoning process
1. Spot the direction: is the unknown BEFORE the change (reverse) or after
   (forward)? The phrase "was p% more/less than [unknown]" or "after a discount,
   the price was..." marks reverse.
2. Name the original x. Write the forward equation: x × f₁ × f₂ = final, with each
   factor built by the multiplier rule.
3. Solve by dividing: x = final / (f₁ f₂). One Desmos line, full precision — never
   round intermediates (dividing by 0.763 with a rounded 0.76 lands on a distractor).
4. Sanity gates: undoing a decrease must give a LARGER original; undoing an increase
   a smaller one. Check direction before accepting.
5. For stacked changes, divide by the whole composite in one step; order doesn't
   matter.
6. Variable form: same equation, symbolic — x = F/(1 + p/100); recognize the choice
   set will offer F(1 − p/100) as the trap twin.

## Misconceptions
- **opposite-percent-reversal** — to undo +8%, the student takes 8% off the final
  (final × 0.92) instead of final ÷ 1.08. Forms because the multiplier was learned
  forward-only, and "8% tax" reflexively cues "take 8% of whatever number I'm
  holding." It is also the ±40% illusion wearing new clothes: the student believes
  equal opposite percents cancel. Distractor: final × complement, placed adjacent to
  the key and on the same side of the final value.
- **percent-of-final-base-swap** — deeper version: the student genuinely believes
  the stated percent is a percent of the final value, because the final is the only
  concrete number on the page. The base ("than"-anchor) was never located.
- **forward-reverse-misclassification** — the student solves a forward problem with
  division (or vice versa) because they pattern-match on "discount ⇒ divide" rules
  instead of locating which quantity is unknown. Rules-based teaching creates this;
  direction must come from the story, not the keyword.
- **rounded-intermediate-division** — dividing by a rounded composite factor;
  division amplifies rounding error more than multiplication, so reverse items
  punish intermediate rounding harder than forward ones.

## Diagnostic indicators
- Picks final × (1 ∓ p) on recover-the-original items (opposite-percent): the
  chosen value is on the correct SIDE of the final but wrong by the second-order
  term — flag choices at final×complement specifically.
- Explains with "so I just took the discount back off" (verbal signature of
  operator-inversion absence).
- On variable-form items, picks F(1 − p/100) where F/(1 + p/100) is keyed.
- Gets forward items right but reverse items wrong at the same percent values —
  the cleanest split proving the multiplier is one-directional in their head.
- Near-miss numeric answers on stacked-change reversals (rounded intermediates).

## Remediation pathways
- **opposite-percent-reversal**: numeric self-demolition — apply +25% to 80 (→100),
  then take 25% off (→75 ≠ 80). Then reframe: the multiplier is a machine; to go
  backward you run the SAME machine in reverse (divide), you don't build a new
  machine. If the confusion persists, the gap is upstream in
  [[successive-percent-rebasing]] (base-shift blindness) — revisit it.
- **base-swap**: circle the "than"-anchor; rewrite the stem as "final IS (1+p/100)
  OF original" — the [[percent-three-slots]] canonical sentence makes the base
  unambiguous.
- **misclassification**: drill classification only: ten stems, label each
  forward/reverse, no solving. Direction-spotting is the skill; division is the
  afterthought.
- **rounding**: enforce the one-line Desmos habit: final ÷ (0.70 × 1.09) typed as
  one expression.

## Mastery criteria
Student classifies forward vs reverse instantly, writes the forward equation with
the unknown start unprompted, divides by composite factors in one step, and handles
the variable form. Proof: one two-stack numeric reversal (discount + tax) and one
in-terms-of-p item correct in the same session, with no opposite-percent picks.

## Difficulty ladder
- **medium**: single-change reversal with a clean percent ("after a 20% increase,
  the value is 360 — find the original").
- **hard**: two stacked changes (discount then tax) reversed in one division;
  reversal embedded in growth language ("p% more than the previous year" —
  recurs in [[exponential-model-anatomy]] as walking a growth table backward);
  variable/in-terms-of-p forms with the full permutation choice set.
- **hardest (composed)**: reversal chained with a forward leg (find an intermediate
  value mid-chain); reversal inside exponential contexts (divide by the factor k
  times — the backwards-table method).

## Teaching notes
- **Struggling**: forward first, always — have them build the forward story with a
  made-up original until the structure is solid, then reveal that the reverse
  problem is the same story read from the other end. Avoid the word "reverse" until
  the equation habit exists.
- **Average**: install the name-the-unknown reflex and the two sanity gates
  (undoing a decrease → bigger). Show the trap pair (final×0.92 vs final÷1.08)
  numerically so they see how close and how wrong the trap is.
- **Advanced**: stacked reversals as one composite division; variable forms;
  mid-chain recoveries.
- **1500+**: connect to exponentials — recovering an initial population from a
  later one is this node with the factor applied t times; the backwards table
  (repeated division) beats formal algebra for small t. Everything evaluates as one
  unrounded Desmos line.
