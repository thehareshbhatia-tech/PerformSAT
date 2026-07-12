---
id: probability-as-pool-share
section: math
domain: problem-solving-data-analysis
skill: basic-probability
difficulty_span: [easy, medium]
prereqs: []
unlocks: [two-way-table-probability, sample-to-population-estimation]
related: [ratio-part-whole-discipline, radians-and-arc-length]
---

# Probability as a share of a pool

## What it is
SAT probability is a fraction, not a theory: (count of outcomes you want) ÷ (count of outcomes in the pool you're drawing from). There is no sample-space formalism, no independence machinery, no compound-event algebra to memorize — just careful counting on top of fraction sense. The two numbers are two *independent decisions*: what do I want (numerator), and from where am I drawing (denominator).

## Why it exists / why the SAT tests it
It probes whether a student can translate a selection scenario into a part-over-whole fraction with both parts counted correctly. It appears from the easy band (one count over another) through medium (unions, complements, reverse-engineering a count from a given probability). unverified-claim: most SAT probability lives in two-way tables (see [[two-way-table-probability]]); pure spinner/dice/marble probability is marginal, and the exam states the required answer format (fraction/decimal) when it matters.

## Mental model
**Want over pool — chosen separately.** Assemble the numerator by asking "what qualifies?" and the denominator by asking "what could I have drawn?" Keeping the two decisions separate is the whole skill: "either A or B" changes what you *want* (add disjoint counts, pool unchanged); a condition changes where you *draw* (pool shrinks, want unchanged). And since the want is a subset of the pool, the fraction can never exceed 1 — a free sanity check.

## Expert reasoning process
1. Name the pool from the selection sentence: who or what is being drawn from? Count it.
2. Name the qualifying condition. Count only qualifiers *inside that pool*.
3. For "either/or" over non-overlapping categories: add the category counts; keep the full pool.
4. For "not X": subtract X's count from the pool, or sum the non-X counts — same number, pick the cheaper one.
5. Reverse items are one multiplication, not a proportion setup: count = P × pool; pool = count ÷ P.
6. Sanity bounds: numerator < denominator; probabilities live in [0, 1]; a conditional-flavored answer that looks suspiciously small usually means the pool was too big.

## Misconceptions
- **union-vs-condition-conflation** — treating "or" as if it narrowed the pool (or, the mirror error, adding overlapping counts). Forms because both "or" and "given" feel like restrictions in English; the fix is the want/pool separation — union edits the numerator, conditioning edits the denominator.
- **memory-in-randomness** — believing a second roll is less likely to repeat the first ("it has to balance out"). Classic gambler's fallacy from everyday intuition; produces answers that discount or inflate a repeat outcome, with the joint probability of both events offered as bait.
- **complement-slippage** — for "not X," complementing the wrong thing (building the complement of the pool instead of the target), or leaving an algebraic complement half-formed when counts are symbolic (n items, g qualifiers → P(not qualifier) = 1 − g/n; distractor sets include every malformed variant like (n−g)/g or 1 − n/g).
- **probability-over-one-blindness** — accepting a fraction whose numerator exceeds its denominator without flinching. Forms because students grab two salient numbers rather than counting a subset of a group.
- **percent-format-transfer** — writing 40 instead of 0.4 or 2/5 on a student-produced response. A pure interface error, not a concept error, but it scores identically wrong.

## Diagnostic indicators
- Correct counts but a shrunken denominator on an "or" item → **union-vs-condition-conflation**.
- On repeated-trial items, any answer that differs across identical independent trials, or picks the joint probability when one trial is asked → **memory-in-randomness**.
- With symbolic counts, an expression with the right pieces in the wrong slots → **complement-slippage**. Verbal tell: "1 minus... something."
- An answer greater than 1, or a numerator drawn from outside the stated pool → **probability-over-one-blindness**.
- Concept-correct work, gridded as a percent number → **percent-format-transfer**.

## Remediation pathways
- **union-vs-condition-conflation**: one table, two questions side by side — "P(A or B)" vs "P(A given B)" — and have the student mark which number each phrase changes. If it doesn't land, revisit part-vs-whole ratio setup ([[ratio-part-whole-discipline]]).
- **memory-in-randomness**: re-derive from the pool: the second roll's pool is the same six faces; nothing about the die changed. Contrast "probability both rolls are 4" vs "probability the second roll is 4."
- **complement-slippage**: write the complement as pool-minus-want *before* dividing; verify on a tiny concrete set (10 fish, 3 guppies).
- **probability-over-one-blindness**: install the subset check as a written habit — circle the pool, confirm the want-count lives inside it.
- **percent-format-transfer**: interface drill only; no concept work needed.

## Mastery criteria
Sets up want/pool correctly across phrasings (or, not, given, at least); solves reverse items with one multiplication; handles symbolic counts; never produces a probability outside [0, 1]. Proof: clean runs on medium-band union/complement/reverse items, including at least one algebraic-count item.

## Difficulty ladder
easy: one count over an obvious total. → medium: unions of disjoint categories; complements; reverse-engineering counts or totals from a given probability; geometric probability (region area ÷ total area — the same want/pool fraction with areas as counts, composing with [[radians-and-arc-length]]). → hard: the pool itself must be *constructed* from prose (production rates, stacked collections) before any probability exists, or counts are variables forcing an expression answer — the fraction is trivial, building its two numbers is the item. Hardest table variants live in [[two-way-table-probability]].

## Teaching notes
- **Struggling**: strip all vocabulary. Everything is "how many do you want, out of how many could you grab?" Count on concrete small sets; delay symbols.
- **Average**: drill the two-decision separation with mixed or/not/given sets where the *same* table generates all three answers — make the student say which number each word changes.
- **Advanced**: symbolic counts and reverse items; insist on the one-multiplication solve rather than proportion machinery.
- **1500+**: construct-the-pool items — the give-away that this band's difficulty is modeling, not probability. Also geometric probability with composite regions (annulus, shaded-vs-unshaded differences), where the only new content is the area computation.
