---
id: solve-for-the-asked-quantity
section: math
domain: algebra
skill: solve-for-a-combination
difficulty_span: [easy, hard]
prereqs: [linear-equation-balance-peeling]
unlocks: [formula-rearrangement]
related: [linear-system-solution-count, variable-definition-discipline]
---

# Answer the ask: isolate the quantity requested, not the variable

## What it is
Many items ask for the value of a *combination* — a sum like x + y, a scaled variable like 6p, a chunk like (a − b) — rather than any single variable. The move is to treat the requested combination as one opaque object and isolate *it* directly: divide the whole equation by a factor, notice the chunk appears verbatim, flip a ratio. Frequently the individual variables are deliberately unrecoverable (one equation, two unknowns), so the direct route is the only route.

## Why it exists / why the SAT tests it
This is a test of reading and structural sight, disguised as algebra. School trains "solve for x" thousands of times; the exam probes whether a student reads what is actually requested and whether they can see an expression as a unit. It appears at every difficulty: easy items ask for 2x after handing you x + 3 = 10; hard items give one equation in two variables and ask for a combination, punishing anyone who tries to extract individuals. The lone variable's value is reliably seeded among the choices. (unverified-claim for official frequency, consistent with our bank.)

## Mental model
**Ride the whole equation to the target.** Before touching anything, put the asked-for expression in a mental box. Then ask: what single transformation of the ENTIRE equation makes the box appear alone? Scan the coefficient ratio first — if the target's coefficients are a uniform multiple or divisor of the given equation's, one factor-out-and-divide finishes it. The box never gets dismantled; dismantling it is the trap.

## Expert reasoning process
1. Read the question stem LAST-line-first: name the exact object requested (a variable? a chunk? a scaled chunk?). This is the single highest-leverage second on the item.
2. Compare the target's coefficients to the given equation's. Uniform scalar apart → factor the constant out (or divide both sides) so the leftover factor IS the target; done in one line.
3. If the chunk appears verbatim inside the equation, isolate it as if it were a single letter — peel everything else off it with balance moves.
4. If the target is a flipped ratio (told a/b-shaped, asked b/a-shaped), reciprocate both sides — equal nonzero fractions have equal reciprocals.
5. Only if no whole-equation transformation lands the target: solve for individuals, then assemble. Check first that individuals are even recoverable (count equations vs. unknowns).
6. Before answering, confirm the value in hand is the requested object, not an intermediate.

**Desmos vs. algebra:** algebra wins almost always here — these items are engineered to be one structural move, and Desmos cannot isolate a combination symbolically. When the item is numeric and the student is stuck, Desmos can rescue via brute force (solve for x graphically, compute the combination), but that's the slow lane and fails entirely when individuals are unrecoverable. Teach: combination-target items are an *algebra-first* pattern; Desmos is the fallback for numeric single-variable versions only.

## Misconceptions
- **solve-for-x-reflex** — grinding out individual values when the target is one transformation away. Forms because ~95% of school practice asks for the variable; the reflex is trained, not reasoned. Costs time and arithmetic exposure even when it works; produces abandonment when individuals are unrecoverable.
- **answer-the-variable-autopilot** — solving correctly for x, then bubbling x's value although 2x + 1 was asked. Same trained reflex at the final step. Test writers seed x's value among the choices (unverified-claim on official frequency; matches our bank's distractor style).
- **chunk-dismantling** — expanding/distributing the asked-for group because "simplify everything" feels like progress. Forms from equating algebra with expansion; destroys the one structure the item rewarded noticing.
- **underdetermined-panic** — seeing two unknowns and one equation and concluding "not enough information." Forms from the school rule "n unknowns need n equations"; the exam subverts it by making only the combination recoverable.

## Diagnostic indicators
- solve-for-x-reflex: long time-on-question with correct final answer, or timeout; scratch work shows full isolation of individuals.
- answer-the-variable-autopilot: picks the distractor equal to the lone variable's value; fast and confident; on explain-back says "x is 4" as if that were the question.
- chunk-dismantling: scratch work shows the target group expanded then laboriously reassembled; errors mid-reassembly.
- underdetermined-panic: skips or guesses quickly on one-equation-two-unknowns items while doing fine on standard solves; says "you can't solve it."

## Remediation pathways
- solve-for-x-reflex / chunk-dismantling: contrast pair — same item solved both ways side by side, counting the moves (one vs. seven). The move count sells the habit better than exhortation. Install the coefficient-ratio scan as the pre-solve ritual.
- answer-the-variable-autopilot: retraining ritual — before bubbling, re-read the question's final clause. Cheap, mechanical, effective; track its use.
- underdetermined-panic: one worked demonstration where x and y are individually unknowable but x + y falls out; name the principle "the test can ask for exactly what IS determined."
- If fixes don't land: revisit [[linear-equation-balance-peeling]] — treating a group as a single object requires trusting whole-side operations.

## Mastery criteria
Given a mix of items where the target is sometimes the variable and sometimes a combination, the student routes correctly on sight (no false starts in scratch work), including recognizing unrecoverable-individual designs. Evidence: medium/hard combination items solved in under half the time of their own earlier attempts, no lone-variable distractor picks across recent sessions.

## Difficulty ladder
- **Easy:** x + 3 = 10, what is x + 5? (one add away).
- **Medium:** scaled targets (given 3x + 3y = 12, find x + y); chunk appears verbatim; flipped-ratio asks.
- **Hard:** the scaling is disguised (factor out a non-obvious constant); the chunk is a side of the equation post-substitution; combination targets inside systems ([[linear-system-solution-count]] composes in: add the equations to produce the target directly). Module 2 Hard escalates by burying the ratio relationship, never by bigger numbers.

## Teaching notes
- **Struggling:** start with the reading discipline alone — ten stems, no solving, just "what object is requested?" Then introduce the one-move divide on friendly numbers.
- **Average:** teach the coefficient-ratio scan as a named pre-flight check; drill both routes on the same item so the direct route's speed is felt.
- **Advanced:** unrecoverable-individual designs and reciprocal moves; train the instinct that an "impossible-looking" linear item is usually a combination item in disguise.
- **1500+:** speed and transfer — combination sight inside systems and function items; the skill becomes "notice what the equation is one move away from saying."
