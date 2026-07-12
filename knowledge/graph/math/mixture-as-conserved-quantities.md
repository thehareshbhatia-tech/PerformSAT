---
id: mixture-as-conserved-quantities
section: math
domain: algebra
skill: systems-of-linear-equations
difficulty_span: [medium, hard]
prereqs: [percent-three-slots, linear-equation-balance-peeling]
unlocks: []
related: [system-from-two-constraints, percent-as-multiplier, magnitude-sanity-checks]
---

# Mixtures as conserved quantities: the substance adds, and so does the total

## What it is
Every concentration scenario rests on one product: **amount of pure substance = concentration × total quantity** (a 40% solution of 200 mL holds 0.40 × 200 = 80 mL of the substance). When two solutions are combined, two separate things are conserved — the pure substance and the total volume — and each conserved thing contributes its own addition: substance amounts add AND totals add. That yields one equation per conserved quantity, the canonical shape being 0.1A + 0.2B = 0.15(A + B): the substance carried in by each input equals the substance in the output, whose total is the sum of the input totals. The whole family is linear equations wearing a lab coat.

## Why it exists / why the SAT tests it
The item probes whether a student can track TWO simultaneous bookkeeping ledgers through one physical action — pouring. Most students track only the ledger the story spotlights (the substance) and let the other (the total) silently freeze, which is the single planted trap of the family. unverified-claim: mixture items are relatively infrequent but disproportionately missed by unprepared students, and some administrations soften them by supplying the mixing equation and asking only for a substitution.

## Mental model
**Two ledgers, one pour.** Any add, mix, or remove action posts to both ledgers at once: the pure-substance ledger and the total-quantity ledger. Concentration is never a ledger of its own — it is the RATIO of the two ledgers, recomputed after every action. Three standing entries:
- A pure additive (pure acid, pure juice) posts its full amount to both ledgers — its concentration coefficient is 1.
- A pure diluent (water) posts zero to the substance ledger and its full amount to the total ledger — coefficient 0.
- The **add-to-target invariant**: (old pure + added pure) / (old total + added total) = target concentration. Both the numerator and the denominator move; setting that fraction equal to the target and solving is the entire problem.

The remove variant runs the same invariant with subtraction: removing items or liquid shrinks BOTH ledgers (by the removed batch's substance content and its full amount respectively), and the target ratio is asserted on what remains.

Sanity bound: a blend's concentration must land strictly between the two input concentrations — nearer the input contributing more. Any answer outside that band is dead before verification ([[magnitude-sanity-checks]]).

## Expert reasoning process
1. Inventory the containers: for each input and the output, note total quantity and concentration; convert every percent to a decimal on sight.
2. Assign coefficients including the silent ones — water is 0, a pure substance is 1. The stem never states these; you supply them.
3. Write one equation per conserved thing. Two unknown inputs hitting a known output → a totals equation A + B = T and a substance equation cA·A + cB·B = cT·T (a two-constraint system — the setup discipline of [[system-from-two-constraints]] applies unchanged). One unknown addition x → skip the system and write the invariant directly: (old pure + cx·x)/(old total + x) = target.
4. Confirm BOTH sides of the substance equation count the same stuff in the same units (mL of acid = mL of acid), and that the output total is the SUM of input totals, never a copy of one of them.
5. Solve linearly; clear the fraction of the invariant by multiplying through by the new total.
6. Gate the answer: between the two input concentrations, nearer the bigger contributor, and physically nonnegative.

## Desmos vs algebra
The setup — coefficients, ledgers, which quantities are conserved — is untooled and is where every point is won or lost. Once the invariant is written, Desmos solves it instantly (type the equation, read the intersection), which matters when the target percent is ugly. Decision rule: **ledgers by hand, fraction-solving by Desmos when decimals get hostile.** A which-equation-represents item is 100% setup; Desmos contributes nothing.

## Misconceptions
- **frozen-denominator** — when pure substance is added to hit a target percent, the student grows the numerator but keeps the OLD total in the denominator: (old pure + x)/(old total) = target. Forms because the story frames the addition as "the thing that fixes the substance"; its simultaneous effect on the total is invisible in the narrative. Produces a characteristic undershoot answer that the choice set carries.
- **unweighted-concentration-average** — the blend's percent computed as the plain mean of the two input percents regardless of amounts (100 mL of 10% + 300 mL of 30% reported as 20%). Forms because "mix" cues the add-and-halve averaging schema, which happens to be correct in the equal-amounts special case and gets overgeneralized from it. The unweighted mean is a standing distractor.
- **pure-additive-coefficient-blank** — stalling on (or mis-assigning) the concentration of water or of a pure substance, e.g. treating added water as if it removes substance, or giving pure acid the target's percent. Forms because every other container arrived with an explicit percent, so a container without one doesn't fit the template. Produces equations with a missing or invented coefficient.
- **one-sided-removal-update** — on remove-to-hit-a-target-percent items, shrinking only the category counted in the numerator or only the total (removing 5 red marbles but keeping the group size fixed, or vice versa). Same root as frozen-denominator, mirrored: one action, one ledger updated. The distractor is the answer produced by the single-ledger equation.

## Diagnostic indicators
- frozen-denominator: their invariant has an unchanged denominator; answers systematically undershoot the needed addition; asked "does the total change when you pour more in?", they pause.
- unweighted-concentration-average: instant answers on mix items equal to the midpoint of the two percents; errors vanish exactly when the amounts are equal.
- pure-additive-coefficient-blank: long stalls or skips specifically on stems involving water or a pure ingredient; scratch work shows a container with no coefficient.
- one-sided-removal-update: removal items missed while addition items are fine, or the reverse; their equation subtracts from only one side of the fraction.

## Remediation pathways
- frozen-denominator: the wrong-solution-first demonstration — work the item WITH the frozen total, get the planted answer, then re-pour with both ledgers and watch the answers diverge. Naming the false assumption out loud ("the total stayed put") is the fix; revisit [[percent-three-slots]] if the concentration-as-ratio idea itself is shaky.
- unweighted-concentration-average: one concrete counterexample with wildly unequal amounts (a drop of 100% into a bathtub of 1%); then reframe the correct result as a weighted lean toward the bigger contributor, which upgrades their sanity bound at the same time.
- pure-additive-coefficient-blank: teach the two standing coefficients (water 0, pure substance 1) as permanent inventory entries; two reps writing the invariant for a pure-water dilution and a pure-acid spike.
- one-sided-removal-update: run one removal item on physical counts (marbles), tallying both ledgers on paper per removal; the two-ledger habit transfers back to the algebra.

## Mastery criteria
Student writes the correct conservation equation(s) unprompted across all three action types — combine two solutions, add a pure additive or diluent, remove to a target — supplies the 0 and 1 coefficients without being told, and rejects answers outside the two-input concentration band. Evidence: clean setups on which-equation items (where the frozen-denominator and unweighted-average corruptions sit among the choices) plus solve-through accuracy on at least one remove-variant item.

## Difficulty ladder
- **Medium**: two knowns mixed, find the blend's concentration; or the mixing equation is supplied and one value substitutes through.
- **Hard**: add-pure-to-hit-target (the invariant with x in both numerator and denominator); two unknown input amounts → full two-equation system; percents arriving as decimals and fractions in one stem.
- **Hardest**: remove-to-hit-target variants; multi-stage pours (mix, then dilute) where the first blend's ledgers seed the second equation; symbolic-answer forms where the invariant must be rearranged for x in terms of letters.

## Teaching notes
- **Struggling**: start with counts, not percents — marbles in a bag, "what fraction are red, now add 5 red" — so both ledgers are physically countable before any decimal appears. Introduce the word "concentration" only after the ratio-of-two-ledgers idea is solid.
- **Average**: install the two-ledger frame and the three standing coefficients; drill the add-to-target invariant until writing it is one motion; always finish with the between-the-inputs gate.
- **Advanced**: removal variants and two-unknown systems; practice converting a which-equation choice set back into ledger language to spot the corrupted ledger instantly.
- **1500+**: speed and trap-prediction — before viewing choices, name the frozen-denominator answer the writer will offer; multi-stage pours and symbolic forms; Desmos finishes any hostile arithmetic.
