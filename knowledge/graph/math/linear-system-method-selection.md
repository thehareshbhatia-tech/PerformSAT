---
id: linear-system-method-selection
section: math
domain: algebra
skill: [algebra.system-of-equations-substitution, algebra.system-of-equations-elimination]
difficulty_span: [easy, hard]
prereqs: [linear-equation-balance-peeling, linear-system-solution-as-intersection]
unlocks: [system-combination-target, system-from-two-constraints, system-parameter-tuning, inequality-regions-and-point-testing]
related: [linear-system-method-selection]
---

# Choosing the solver: substitution, elimination, or Desmos

## What it is
Three routes solve a concrete 2×2 linear system: substitution (replace one variable with an expression for it, collapsing to one equation in one unknown), elimination (scale and add whole equations so one variable cancels), and Desmos (plot both, click the intersection). The tested skill is not executing any one method — it is reading the system's FORM in a few seconds and picking the cheapest route.

## Why it exists / why the SAT tests it
Systems items are rarely conceptually hard; they are time traps for students who default to one memorized method. The exam presents systems in forms that make one route dramatically cheaper: a pre-isolated variable begs for substitution, matched standard-form coefficients beg for elimination, ugly decimals beg for Desmos. Appears across the difficulty range; on hard items method choice is the difference between 20 seconds and 3 minutes.

## Mental model
**Let the coefficients choose the method.** One decision scan, in order: (1) Both equations concrete numbers and the target is the solution point? → Desmos, done. (2) A variable standing alone (coefficient ±1) anywhere? → substitution. (3) Standard form on both lines? → elimination, scaling toward whole numbers. (4) Target is a combination like x + y? → don't solve at all; see [[system-combination-target]]. The method is a read, not a preference.

## Expert reasoning process
1. Read the ASK before touching the system: full point, one coordinate, or a combination expression. This alone can eliminate all solving.
2. Scan coefficients. A bare variable (y = …, or x + 3y = 7) → substitute that expression; you are substituting equal *expressions*, not "setting the equations equal."
3. Standard form both rows → elimination. Choose which variable to cancel by targeting the one you DON'T want — then the surviving variable is automatically the one asked for, structurally preventing the answered-the-wrong-variable slip.
4. Scale with whole numbers (LCM of the target coefficients), never fractions. If coefficients share a sign, fold a −1 into one multiplier and ADD, rather than subtracting — subtraction across multiple terms is where signs die.
5. If a shared multi-term block appears in both equations (e.g., the same 3x + 2y chunk), treat the block as a single unknown and substitute its value whole; expanding it is unforced work.
6. Back-substitute for the second coordinate only if it is actually asked for.

## Desmos vs algebra
Desmos is the default for any fully concrete system, and its advantage grows with number ugliness — decimal prices, fraction coefficients, three-digit constants. Type both equations verbatim (no rearranging needed; Desmos plots standard form directly), click the intersection. Algebra retains the edge when: (a) the target is a combination (adding the equations beats reading x and y then computing), (b) an unknown constant sits in a coefficient (Desmos can't plot a symbol — see [[system-parameter-tuning]]), or (c) the arithmetic is one obvious step. Decision rule: **concrete + point-target → Desmos; symbolic or combination-target → algebra.**

## Misconceptions
- **misc-one-true-method** — Believing one memorized method (usually substitution) must handle every system. Forms because school units teach methods sequentially and test them separately, never forcing a choice. Produces long fraction-ridden solutions of elimination-shaped systems and timing collapse on later questions.
- **misc-setting-equations-equal** — Saying substitution means "set the two equations equal to each other." True only when both are solved for the same variable; applied blindly it equates non-comparable expressions. Forms from the casual classroom phrase "set them equal." Produces equations that are simply false, and answers that match no choice — followed by panic re-work.
- **misc-sign-loss-in-subtraction** — Subtracting equations but negating only the first term of the subtracted row. Forms because distributing a minus across three terms is a working-memory task, not a concept. Produces sign-flipped coordinates; choice sets include exactly those.
- **misc-solved-wrong-variable** — Reporting x when y was asked. Forms because the procedure "ends" when any number appears and relief takes over. The other variable's value is reliably among the choices.
- **misc-fraction-scaling** — Multiplying one equation by a fraction like 3/2 to force a match, then drowning in fraction arithmetic. Forms from treating the smallest multiplier as the best. Whole-number LCM scaling of BOTH rows is the fix.

## Diagnostic indicators
- misc-solved-wrong-variable: picks the distractor equal to the un-asked variable; work is otherwise correct. Distractor archetype: wrong-variable answer.
- misc-sign-loss-in-subtraction: answer differs from key by a sign in one coordinate; scratch work shows subtraction of stacked equations.
- misc-one-true-method: correct but slow — systems items take 2–3× median time; explains "I always substitute."
- misc-setting-equations-equal: writes `equation1 = equation2` verbatim in work; describes substitution as "make them equal."
- misc-fraction-scaling: scratch work full of fraction arithmetic on integer-coefficient systems.

## Remediation pathways
- misc-one-true-method: give three systems, each shaped for a different route, timed; debrief on how form dictated method. If they can't see the form cues, revisit [[linear-equation-balance-peeling]] fluency first.
- misc-setting-equations-equal: contrast pair — two equations both solved for y (setting expressions equal works) vs one solved for x (it doesn't); name the rule "equal expressions, not equal equations."
- misc-sign-loss-in-subtraction: retrain to negate-then-add: rewrite the second row with every sign flipped, then add columns. One habit, zero subtraction.
- misc-solved-wrong-variable: install the targeting rule "eliminate the variable you don't want" plus a final read-the-question checkpoint.
- misc-fraction-scaling: demonstrate LCM scaling on the same system they fractioned through; compare line counts.

## Mastery criteria
Student can name the intended method (or Desmos) within ~10 seconds of seeing a system, execute any of the three cleanly, and articulate WHY that route was cheapest. Evidence: medium systems items solved in under a minute with consistent accuracy, no wrong-variable or sign-flip distractor picks across multiple sessions.

## Difficulty ladder
- **Easy**: variable already isolated; one substitution and done. Or coefficients already opposite; add and done.
- **Medium**: one scaling before elimination; back-substitution required; systems delivered inside a short word context.
- **Hard**: both rows need scaling; shared-chunk substitution; combination targets ([[system-combination-target]]); a linear equation paired with a quadratic where the linear must be substituted into the nonlinear ([[linear-system-method-selection]]).
- **Hardest**: coefficients that are themselves expressions in another constant, forcing the student to run elimination symbolically.

## Teaching notes
- **Struggling**: teach ONE method to reliability first (substitution with a pre-isolated variable), then add elimination as "adding two true things gives a true thing." Introduce the decision scan only after both routes feel safe.
- **Average**: lead with the decision scan as the actual skill; run method-mixed sets where the grade is "did you pick the cheap route," not just the answer.
- **Advanced**: add the chunk-substitution and negate-then-add refinements; race algebra against Desmos on the same items to calibrate personal crossover points.
- **1500+**: focus on the read-the-ask discipline (step 1) — at this level the residual errors are wrong-variable and sign slips under speed, so rehearse endgame checkpoints, not mechanics.
