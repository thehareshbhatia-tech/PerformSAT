---
id: congruence-criteria-and-correspondence
section: math
domain: geometry-trigonometry
skill: geometry.similar-triangles-proportion
difficulty_span: [medium, hard]
prereqs: [triangle-angle-sum-and-exterior-shortcut, triangle-properties-toolkit]
unlocks: [similarity-as-scaling]
related: [angle-chasing-ritual]
---

# Congruence criteria and correspondence as letter-order reading

## What it is
Two skills that always travel together. (1) **Congruence criteria as minimum information sets**: SSS, SAS, and "two angles + any side" (ASA and AAS collapse into this) each lock a triangle's shape AND size; SSA does not (with a non-included acute angle, two different triangles can satisfy it). Tick marks on a figure assert equality — matching ticks mean congruent segments, matching arc counts mean congruent angles — and marks assert equality ONLY (unmarked things may still be equal). (2) **Correspondence as a reading skill**: in a statement like △ABC ≅ △DEF (or ∼ for similarity), the k-th letters correspond — A↔D, B↔E, C↔F — so corresponding sides and angles can be read off the *names alone*, with no figure.

## Why it exists / why the SAT tests it
The digital SAT's house style for this topic is the sufficiency item: "which additional piece of information would be enough to prove the triangles congruent/similar?" That tests criteria as minimum information sets, not proof-writing. Meanwhile, most congruence/similarity errors students make are bookkeeping errors — pairing the wrong sides — not concept errors (a source's bet we can check against our distractor stats; unverified-claim). Letter-order reading is the cheap, mechanical defense.

## Mental model
**A criterion is a minimum purchase; letter order is the receipt.** Each criterion is the smallest bundle of facts that leaves a triangle no freedom to be anything else. And once a correspondence statement is written, all pairing questions are answered by position in the name — never by size, orientation, or where things sit in the picture.

## Expert reasoning process
1. On sufficiency items, inventory what's already known (shared sides, vertical angles, marked equalities), then ask which criterion each answer choice *completes*. Reject choices that complete only SSA.
2. A shared side is a free "S" (it equals itself); vertical angles at a shared vertex are a free "A." Experts bank these before reading the choices.
3. To find a corresponding part: locate the letters in the statement, take the same positions in the other name. Side AB ↔ side DE because A, B occupy positions 1, 2. Do this even when a figure is present — especially when the triangles are flipped or rotated.
4. When only a figure is given (no statement), *build* the correspondence via the tick-mark ritual: mark equal angles with matching arc counts, then name each triangle by walking the tick pattern in the same order. The correct statement writes itself.
5. Remember the asymmetry: congruence = same shape and size; similarity = same shape, any size. Every congruence criterion has a similarity sibling (SSS→SSS-proportional, SAS→SAS-proportional, two angles → AA).

## Misconceptions
- **ssa-counts** — assuming two sides + a non-included angle lock a triangle, because SSA "feels like" SAS (same letters, different order). The swinging-door picture is missing: the second side can swing to meet the base at two different points when the angle is acute. Trap format: SSA offered as a sufficiency distractor. (Scope note: the exam does not probe the ≥90°-angle nuance where SSA does determine the triangle — unverified-claim, don't over-teach.)
- **name-order-blindness** — matching sides by size, position, or visual salience instead of by letter order. Forms because school figures show same-orientation pairs where position-matching accidentally works. Produces ratio equations mixing non-corresponding sides — a *correct computation on wrongly paired sides* — and the test supplies exactly that answer as a distractor.
- **marks-imply-inequality** — believing differently-marked or unmarked parts must be unequal. Marks assert equality only. Trips must-be-true items.
- **congruence-similarity-blur** — offering a similarity criterion (AA) as proof of congruence, or demanding side equality for similarity. Forms because both live in the same lesson and share the "same shape" idea; the size dimension gets dropped.

## Diagnostic indicators
- Picks the SSA choice on sufficiency items → **ssa-counts**.
- Wrong answer is arithmetically correct for a swapped side pairing (e.g., inverted ratio, or the value you'd get pairing the two "top" sides of flipped triangles) → **name-order-blindness**.
- Chooses AA as sufficient for *congruence* → **congruence-similarity-blur**.
- Asserts two parts unequal because their marks differ → **marks-imply-inequality**.
- Solves fine with figures but fails figure-free statement-only items → correspondence reading not yet mechanical.

## Remediation pathways
- **ssa-counts**: the swinging-door construction — fix one side and the angle at its end, swing the second side like a door and show it landing on the base twice. One drawing kills the misconception.
- **name-order-blindness**: statement-only drills (no figures at all): "△PQR ∼ △XYZ; which side corresponds to QR?" — five of these make letter-position reading automatic. Then one flipped-figure item to transfer the habit.
- **congruence-similarity-blur**: contrast pair — two triangles with equal angles but visibly different sizes; ask which of ≅/∼ applies and what extra fact would upgrade ∼ to ≅ (one matching side).
- **marks-imply-inequality**: counterexample figure where two unmarked segments are provably equal via a chase.
- If sufficiency logic itself is the blocker, back up to [[triangle-properties-toolkit]] (what facts a triangle's shape actually pins down).

## Mastery criteria
Student answers sufficiency items by naming which criterion each choice completes (not by intuition), reads corresponding parts from statements alone without a figure, and rejects SSA with a reason. Proof: correct on 3+ sufficiency-format items and 3+ statement-only correspondence reads, including at least one flipped/rotated figure.

## Difficulty ladder
- **Easy**: read a corresponding side/angle from a congruence statement.
- **Medium**: sufficiency items with one free fact banked (shared side or vertical angles); tick-mark figures needing a correspondence to be built.
- **Hard**: overlapping triangles sharing parts, where correspondence must be built under the tick-mark ritual before any criterion applies; sufficiency items mixing congruence and similarity choices; feeds directly into [[similarity-as-scaling]] ratio setups where a wrong pairing poisons the proportion.

## Teaching notes
- **Struggling**: start with correspondence as pure symbol-reading (no geometry): names are zipped together position by position. Only then add figures.
- **Average**: teach criteria as "minimum shopping lists," bank-the-free-facts first (shared side, vertical angles), and run the swinging-door demo once.
- **Advanced**: overlapping-triangle figures and flipped pairs; require them to write the correspondence statement before any equation, every time.
- **1500+**: speed on sufficiency items — pre-reading the figure for free facts so each choice is a one-second criterion check; adversarial items where the tempting pairing is positional and wrong.
