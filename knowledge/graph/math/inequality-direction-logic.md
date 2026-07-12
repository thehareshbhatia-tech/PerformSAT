---
id: inequality-direction-logic
section: math
domain: algebra
skill: algebra.one-variable-linear-inequality
difficulty_span: [easy, medium]
prereqs: [linear-equation-balance-peeling, inequality-direction-logic]
unlocks: [compound-inequality-operations, inequality-regions-and-point-testing, inequality-translation-and-integer-bounds, absolute-value-as-distance]
related: []
---

# Why the inequality sign flips — and how to never need the rule

## What it is
Inequalities obey every equation-solving move with exactly one exception: multiplying or dividing BOTH SIDES by a NEGATIVE number reverses the direction of the sign. Adding or subtracting anything, and scaling by positives, preserves order. The flip is not an arbitrary decree — it is geometry: scaling by a negative reflects every number across zero, and reflection reverses order (3 < 5, but −3 > −5). A second, equally important fact: the flip is OPTIONAL — any solve can be rearranged (move the variable term to the other side by addition) so that no negative scaling ever happens.

## Why it exists / why the SAT tests it
The exam checks whether inequality manipulation survives time pressure, and the flip is where it breaks. Items plant a negative leading coefficient and offer the same interval in both directions as answer choices. A related trap runs the other way: students who memorized "negatives flip signs" flip when they merely SEE a negative (subtracting one, having one on one side), corrupting correct work. Both failure directions are tested.

## Mental model
**A negative multiplier is a mirror at zero.** Picture the number line: multiplying everything by −1 swings the line 180° around zero, so whatever was rightmost becomes leftmost — order reverses, so the sign must reverse to keep the statement true. The trigger is precisely one thing: ×or÷ both sides by a negative. Nothing else — not negative constants appearing, not subtraction, not negative answers. And when stakes are high, take the mirror out of the room entirely: add the variable term across instead, keep all scaling positive, and the flip question never arises.

## Expert reasoning process
1. Solve exactly as if it were an equation, but at each step ask ONE question: "did I just multiply or divide both sides by a negative?" Yes → flip now, deliberately. No → proceed. All other moves are equation-identical.
2. When the variable's coefficient is negative (−3x < 12), choose a route consciously: (a) divide by −3 and flip in the same breath, or (b) add 3x to both sides, then isolate — no flip needed. Route (b) is the pressure-proof one.
3. The endgame −x < 4 counts as a real operation: multiplying by −1 flips to x > −4. Treat it as a step, not as cosmetic cleanup.
4. To combine two inequalities, ADD them only when their signs point the same way; never subtract inequalities. To "subtract," negate one (flipping its sign) and then add.
5. Verify cheaply: pick one number inside your final interval and one outside; both should behave correctly in the ORIGINAL inequality. Ten seconds, kills the reversed-direction distractor.

## Desmos vs algebra
One-variable inequality solving is fast algebra, and Desmos adds a step — but it is a bulletproof verifier: plot each side of the original inequality as a line (y = left side, y = right side) and read where one sits above the other; the x-interval you see IS the solution set, flip mistakes impossible. Use it when a negative coefficient plus answer-choice pressure creates doubt, or for gridded answers where a direction error is unrecoverable. Decision rule: **solve by hand; if the coefficient was negative, spend ten seconds confirming the direction in Desmos or by test-plugging.**

## Misconceptions
- **misc-forgotten-flip** — Dividing by a negative without reversing the sign. Forms because the flip was taught as an arbitrary bolt-on rule, so under time pressure the twelve-year equation habit wins. Produces the reversed interval; choice sets contain both directions (direction-swap archetype).
- **misc-reflexive-overflip** — Flipping whenever negatives appear anywhere: subtracting a negative, a negative constant on one side, a negative answer. Forms because the rule was memorized as "negatives flip signs" without the both-sides-operation condition. Also produces the reversed interval — from correct work corrupted at the end.
- **misc-cleanup-blindness** — Treating the final −x → x conversion as notation rather than an operation, dropping the flip exactly at the last step. Forms because the step "feels finished" already.
- **misc-inequality-subtraction** — Subtracting one inequality from another like equations in elimination. Forms because the addition rule generalizes visually from systems of equations; subtraction can silently yield a false statement. Fix is structural: negate-and-add only.

## Diagnostic indicators
- misc-forgotten-flip: picks the direction-swapped interval specifically on items with negative leading coefficients; work shows a clean divide with no flip.
- misc-reflexive-overflip: direction errors on items with NO negative scaling anywhere; when asked to state the rule, says "negatives flip the sign" with no operation condition.
- misc-cleanup-blindness: errors only on items ending in −x; everything before the last line is right.
- misc-inequality-subtraction: on paired-inequality items, work shows stacked subtraction; conclusions inconsistent with test values.
- Timing signal: near-zero deliberation on flip-relevant steps predicts both flip errors; a mastered student visibly pauses at negative-scaling steps.

## Remediation pathways
- misc-forgotten-flip: re-derive, don't re-tell — have the student multiply 2 < 5 by −1 and observe −2 > −5 on a drawn number line; then teach the no-flip transposition route so the rule becomes optional bookkeeping. If number-line order itself is shaky, revisit [[inequality-direction-logic]].
- misc-reflexive-overflip: sort exercise — a list of ten steps, student marks which trigger a flip (only ×/÷-both-sides-by-negative ones do). Naming the precise trigger extinguishes the superstition.
- misc-cleanup-blindness: reframe −x < 4 as (−1)·x < 4 explicitly once; then require the flip to be annotated whenever −1 is the divisor.
- misc-inequality-subtraction: one counterexample where subtracting two true inequalities yields a false statement, then install negate-then-add.

## Mastery criteria
Student solves one-variable inequalities with negative coefficients at equation speed with correct direction, can DERIVE the flip from the mirror picture on demand, can demonstrate the no-flip transposition route, and states the exact flip trigger. Evidence: no direction-swap distractor picks across a run of flip-relevant items, including over-flip bait items with negatives present but no negative scaling.

## Difficulty ladder
- **Easy**: one or two steps, positive coefficients — pure equation skills with a sign attached.
- **Medium**: negative leading coefficients; variables on both sides; the −x endgame; simple fraction clearing where the multiplier's sign matters.
- **Hard**: the flip embedded inside larger structures — three-part chains ([[compound-inequality-operations]]), the negated branch of absolute-value inequalities ([[absolute-value-as-distance]]), rearranging a two-variable inequality for graphing where the shading side inverts ([[inequality-regions-and-point-testing]]), and inequality addition setups requiring a deliberate negate-and-flip.

## Teaching notes
- **Struggling**: number line and mirror only — no rule statement until they've physically watched three pairs reverse order under negation. Then teach ONLY the transposition route first; introduce deliberate flipping later as the shortcut.
- **Average**: derive the mirror, name the exact trigger, then run mixed bait sets (negatives present vs negative scaling) so over- and under-flipping both get exercised.
- **Advanced**: pressure-proof the endgame (−x items), add the never-subtract-inequalities rule with its counterexample, and install the ten-second test-value verification as a habit.
- **1500+**: the concept is trivially held; what matters is where it hides — rehearse the flip inside compound chains, absolute-value branch two, and standard-form-to-slope-form rearrangements, where 1500+ students actually drop it.
