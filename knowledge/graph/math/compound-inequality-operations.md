---
id: compound-inequality-operations
section: math
domain: algebra
skill: algebra.compound-inequality
difficulty_span: [medium, hard]
prereqs: [inequality-direction-logic]
unlocks: [absolute-value-as-distance]
related: [inequality-translation-and-integer-bounds]
---

# Three-part inequalities: one object, two conditions

## What it is
A chain like 2 < 3x − 1 ≤ 11 is a single statement packing two conditions on one quantity: the middle expression is above the left bound AND at or below the right bound. Solving means applying every operation to ALL THREE parts simultaneously until the variable stands alone in the middle. If any step scales by a negative, BOTH signs flip — and the chain then reads large-to-small, so it must be rewritten in conventional small-to-large orientation. Crucially, notation order is not mathematical order: c ≥ x ≥ d and d ≤ x ≤ c are the same statement.

## Why it exists / why the SAT tests it
The chain form tests whether inequality mechanics generalize — the flip rule, applied twice at once, plus the discipline of reading a chain as two conditions rather than as left-to-right prose. It also underlies two bigger structures: the collapsed form of "within a band" absolute-value inequalities ([[absolute-value-as-distance]]) and estimate-within-a-range items. unverified-claim: compound items are frequently engineered around exactly two pressure points — a negative divide across all three parts, and answer choices that write the same interval in both orientations plus a reversed-direction fake.

## Mental model
**A chain is a sandwich: whatever you do to the filling, you do to both slices of bread.** The middle expression is being squeezed between two bounds; every legal move (add, subtract, scale) hits all three layers at once so the squeeze stays honest. A negative scaling mirrors the whole sandwich across zero — both signs flip AND the bounds trade ends. After solving, always re-plate small-on-the-left before matching answer choices.

## Expert reasoning process
1. Confirm the chain is genuinely one squeeze (both conditions on the same middle expression). If the two halves need DIFFERENT moves, split into two inequalities, solve separately, and intersect — splitting is legal, just usually unnecessary.
2. Strip the middle expression layer by layer, mirroring each operation on both outer parts: subtract the constant from all three, then divide all three by the coefficient.
3. If that divisor is negative: flip BOTH signs in the same stroke, then immediately rewrite the chain in ascending orientation. Never leave a big-to-small chain on the page — it is where re-reading errors breed.
4. Read the result as two facts, not as a picture: "x is more than a AND at most b." Check each fact against the original with one test value if anything feels off.
5. When matching to answer choices, compare CONTENT (the two bounds and their strictness), not surface orientation — the same interval written both ways is a standard choice pair.
6. If the question asks for integers in the interval, or a count of them, hand off to boundary-inclusion discipline ([[inequality-translation-and-integer-bounds]]): strict ends exclude their bound, inclusive ends keep it.

## Desmos vs algebra
Algebra is primary — a chain solve is three short lines. Desmos verifies elegantly: enter the whole compound statement (Desmos accepts `2 < 3x - 1 <= 11` directly and shades the solution interval on the x-axis), or plot the middle expression as a line between two horizontal bound lines and read the x-window where it stays inside. Use the Desmos check whenever a negative divide occurred or the answer will be gridded. Decision rule: **solve by hand; negative scaling or a gridded answer → ten-second Desmos confirmation of the interval's endpoints and direction.**

## Misconceptions
- **misc-single-flip-in-chain** — Scaling all three parts by a negative but flipping only one of the two signs, producing an impossible chain (e.g., 5 < x < −2). Forms because the student processes the chain as two sequential steps and the second flip has no habit slot. The impossible chain often goes unnoticed because it isn't re-read.
- **misc-chain-read-as-written** — Reading 7 ≥ x ≥ 2 and reporting "x is between 7 and 2" or matching it to a 7-to-2 answer choice as if orientation carried meaning; or rejecting the correct ascending-order choice as "different." Forms from treating notation order as mathematical content. Distractor set: same interval both orientations + a reversed-direction fake (direction-swap archetype).
- **misc-operate-on-two-parts** — Adding or dividing only the middle and one bound (usually the one visually adjacent to the operation's motivation), skewing one endpoint. Forms because equation habits update "both sides" and a chain has three. Produces intervals with exactly one wrong endpoint — and matching near-miss choices.
- **misc-split-and-lose-a-condition** — Splitting the chain into two inequalities, solving one, and forgetting the second — reporting a ray instead of a segment. Forms because splitting doubles bookkeeping; the AND gets dropped under time pressure.

## Diagnostic indicators
- misc-single-flip-in-chain: submits impossible or reversed chains specifically on negative-divide items; doesn't flag 5 < x < −2 as nonsense when asked to re-read it.
- misc-chain-read-as-written: picks orientation-based distractors; hesitates or errs on items presented big-to-small even when no algebra is needed.
- misc-operate-on-two-parts: one endpoint right, one wrong; wrong endpoint matches a skipped-operation reconstruction.
- misc-split-and-lose-a-condition: answers are rays (single-bound intervals) on band questions; work shows only one solved inequality.

## Remediation pathways
- misc-single-flip-in-chain: mirror demonstration on a full chain — take 1 < 2 < 3, multiply by −1, watch all order reverse to −1 > −2 > −3; then rule: "the mirror hits the whole sandwich." If the flip itself is unstable, revisit [[inequality-direction-logic]].
- misc-chain-read-as-written: translation drill — rewrite five chains as two ANDed facts each, then re-assemble in ascending order; the round trip breaks the prose-reading habit.
- misc-operate-on-two-parts: require a written three-column layout (left | middle | right) where every row applies one operation across all columns; the empty cell becomes visually impossible.
- misc-split-and-lose-a-condition: teach a landing check — a band question must end with TWO numbers; a one-number answer to a "between" question is auto-suspect.

## Mastery criteria
Student solves chains including negative scaling with both flips and correct final orientation, translates freely between chain form and two-condition form, and matches intervals by content regardless of written orientation. Evidence: clean runs on negative-divide chain items where both-orientation and reversed distractors are present, plus correct integer-counting off solved chains.

## Difficulty ladder
- **Medium**: positive-coefficient chains, two operations; interpret a given chain (which integers satisfy it).
- **Hard**: negative divide across three parts with re-orientation; chains delivered big-to-small; strict/inclusive mixed ends feeding count-the-integers asks.
- **Hardest**: chains as the OUTPUT of another concept — unpacking |estimate − actual| ≤ tolerance into a band ([[absolute-value-as-distance]]), or a context that must first be translated into a chain and then solved with a flip ([[inequality-translation-and-integer-bounds]]).

## Teaching notes
- **Struggling**: physicalize the sandwich — three number cards on a table, operations applied to all three at once, with the mirror (negation) acted out as physically reversing the cards' positions. No symbolic chains until this is comfortable.
- **Average**: three-column written discipline plus the ascending-rewrite habit; drill big-to-small presentations early so orientation-independence is built in, not patched later.
- **Advanced**: negative-divide chains under time; mixed-strictness ends with integer counts; introduce the compound form as the future home of absolute-value bands so the connection is pre-wired.
- **1500+**: the mechanics are safe; the residual risks are the both-orientation answer trap and chains embedded in tolerance/estimation contexts — drill those two shapes specifically, with the Desmos endpoint check as the final safety net.
