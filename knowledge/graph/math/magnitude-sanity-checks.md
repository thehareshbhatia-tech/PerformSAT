---
id: magnitude-sanity-checks
section: math
domain: cross-cutting
skill: cross.number_sense (meta-skill; filter habits applied across all domains, heaviest in problem-solving/data and word problems)
difficulty_span: [easy, hard]
prereqs: [fraction-fluency, percent-as-multiplier]
unlocks: []
related: [distractor-forensics-study-skill, desmos-decision-framework, answer-the-asked-question, extraneous-solutions-non-reversible-moves]
---

# Number-sense filters and magnitude sanity checks

## What it is
A small set of always-on plausibility filters that reject answers (and answer choices) without solving: structural bounds (a probability can't exceed 1; working together must beat the faster worker alone), sign and non-negativity constraints (a principal square root is never negative; a length can't be negative), magnitude reads (a fraction with a fixed numerator exceeds 1 exactly when its denominator is smaller), and direction checks (a discount can't raise the price). Experts run these filters continuously — before solving to prune, after solving to audit.

## Why it exists / why the SAT tests it
Two ways. Directly: some items are ANSWERABLE by filter alone — a nonnegativity constraint eliminates every solution set but one; a structural bound kills three choices; a special given point (x = 0 pins the intercept) adjudicates equation choices with zero computation. Indirectly: distractors are built to fail filters (the joint-work time slower than the solo time; the concentration above 100%; the extraneous root below the radical's feasible range), so filter-blind students have no last line of defense against their own slips. Filters are also the grind-path's insurance: fewer checks are needed when structure already bounds the answer.

## Mental model
**Every quantity wears a straitjacket — know it before you compute.** The reflex is one question, asked at read-time and again at answer-time: *what values are even possible here?* The core filter kit:
- **Range straitjackets:** probabilities and concentrations live in [0, 1]; percents of a whole in [0, 100]; a mean sits between the min and max; counts are nonnegative integers.
- **Structural bounds:** joint work beats the fastest solo time; adding a value above the mean raises the mean; a hypotenuse is the longest side; a subset count can't exceed its set.
- **Sign/domain filters:** principal roots are ≥ 0 (this alone answers some radical-equation items — see [[extraneous-solutions-non-reversible-moves]]); squares are ≥ 0; lengths, times, and populations are positive — when a quadratic models one, the negative root dies on arrival.
- **Magnitude/direction reads:** which way does the output move as an input grows (bigger denominator → smaller fraction; multiplier below 1 → decay); is the answer's SIZE consistent with the inputs (a 15% tip on $40 can't be $60)?
- **Anchor points:** special coordinates in the givens (x = 0, x = 1) pin intercepts and constants instantly, adjudicating answer choices without solving.

## Expert reasoning process
1. **At read-time, tag the target's straitjacket** (type + range + sign) in the same breath as tagging the target itself ([[answer-the-asked-question]]).
2. **Scan the choices against the straitjacket before solving.** Any choice outside it is dead; sometimes only one survives and the item is over.
3. **Look for an anchor point** in the givens that decides the answer's easiest feature (intercept, initial value, endpoint behavior).
4. Solve by whatever route (or hand off to [[method-selection-by-answer-form]] / [[desmos-decision-framework]]).
5. **At answer-time, run the filter once more on your own result** — two seconds: right sign? inside the range? plausible size? survives the constraint stated in the stem? This catches sign slips, dropped constraints, and calculator typos that no amount of careful algebra prevents.
6. On grid-ins, step 5 is the ONLY defense — there are no choices to warn you.

## Misconceptions
- **answers-come-from-algebra-only** — the belief that the only way to evaluate an answer is to re-derive it. Formed because school rewards shown work, never plausibility argument. Produces both slowness (full re-solves as the only check) and helplessness against slips (a wrong answer with correct-looking work feels confirmed).
- **filter-amnesia under load** — the student KNOWS probabilities can't exceed 1, but under time pressure submits 1.2 anyway. Not a knowledge gap: the filter exists but isn't wired into the answering ritual. The distinction matters because re-teaching the fact does nothing.
- **plausible-story acceptance** — judging an answer by whether the NARRATIVE feels okay rather than by quantitative constraints ("$60 tip sounds like a lot but maybe it's a fancy restaurant"). Formed by reading habits that treat numbers as texture. The quantitative straitjacket, not the story's mood, is the test.
- **overtrusting the filter (rare overcorrection)** — eliminating a choice on a misremembered "bound" (e.g., believing standard deviation can't exceed the mean, or a correlation "should" be positive). Formed when filter-thinking outruns the actual mathematics. Filters must themselves be theorems, not vibes.

## Diagnostic indicators
- Submitted answers violating hard bounds (probability > 1, joint time > solo time, negative length) → filter-amnesia if the student can state the bound when asked afterward; a genuine content gap if they can't. **The post-hoc question splits the two root causes — the tutor should ask it.**
- Picked the extraneous root, or a solution-set choice containing infeasible values → sign/domain filter not running (cross-check [[extraneous-solutions-non-reversible-moves]] mastery).
- Never eliminates any choice before solving, even on items with one-survivor choice sets (observable in tutor conversation / think-alouds) → answers-come-from-algebra-only.
- Wrong by an order of magnitude with otherwise-correct method (unit slip, calculator typo) and no self-catch → step-5 audit absent.
- Eliminated the correct answer citing a false bound → overtrusting-the-filter (rare; log it, don't over-remediate).

## Remediation pathways
- **answers-come-from-algebra-only:** demonstrate one item ANSWERED by filter alone (nonnegativity kills three solution sets), then one where the filter catches a planted slip. Then make filter-first a scored drill act: "eliminate before you solve."
- **filter-amnesia:** ritual installation, not re-teaching — bind the two-second audit to the act of answering (our drill UI can prompt "range-check?" on submission for a training period). Habits attach to actions, not to knowledge.
- **plausible-story acceptance:** contrast pairs where the story feels fine but the number is impossible, and vice versa; train "check the number against the math, not the mood."
- **overtrusting-the-filter:** require the student to state WHY a bound holds before using it to eliminate; a filter they can't prove is a hypothesis, demoted to tiebreaker.

## Mastery criteria
Across a timed set: zero submitted answers violating hard bounds; at least occasional observable pre-solve elimination (the choice-scan happens); self-caught slips appear in behavior (answer changed after a magnitude re-read). On explanation, the student can state the straitjacket for any target quantity on request. Longitudinal proof: order-of-magnitude and constraint-violation errors vanish from their fault histogram ([[distractor-forensics-study-skill]]).

## Difficulty ladder
- **Easy:** explicit-range targets (probability, percent) and single-filter eliminations.
- **Medium:** structural bounds (joint work, mean-between-extremes), anchor-point adjudication of equation choices, the post-solve audit as routine.
- **Hard:** filters as the ONLY practical route (solution-set items with a nonnegativity kill; symbolic-answer items where direction-of-change is the sole discriminator); composing with [[engineered-shortcut-recognition]] (structure replacing verification work) and grid-in self-defense; knowing which "bounds" are theorems versus folklore.

## Teaching notes
- **Struggling:** start with the three loudest straitjackets (probability ≤ 1, lengths positive, together-beats-alone) as memorable one-liners; drill spot-the-impossible-choice as a game before any solving is involved. This cohort gains the most points per hour here of any meta-skill — filters rescue items their algebra can't finish.
- **Average:** the full filter kit plus the two-checkpoint ritual (read-time tag, answer-time audit); anchor-point reads on equation-choice items.
- **Advanced:** direction-of-change reasoning on symbolic answers; filter-based pruning integrated with method selection; proving their filters.
- **1500+:** the audit as slip insurance — this cohort's rare misses are mostly mechanical slips their filters should have caught; review every miss with "which filter would have flagged this?", and tune the two-second audit into their pacing budget rather than treating it as optional polish.
