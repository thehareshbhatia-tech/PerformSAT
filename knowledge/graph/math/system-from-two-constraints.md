---
id: system-from-two-constraints
section: math
domain: algebra
skill: algebra.two-equation-system-from-a-word-problem
difficulty_span: [easy, hard]
prereqs: [variable-definition-discipline, linear-system-method-selection]
unlocks: [inequality-translation-and-integer-bounds]
related: [inequality-translation-and-integer-bounds]
---

# Building a system from two independent constraints

## What it is
A scenario describes two unknown quantities constrained in two independent ways, and each constraint becomes one equation. The dominant template pairs a **count equation** (the quantities themselves sum to a total: x + y = 40) with a **value equation** (each quantity times its unit value sums to a second total: 5x + 8y = 260). Money, weight, calories, points, and time all play the "value" role. Variants replace one equation with a comparison ("one exceeds the other by 12" → x = y + 12) or split a journey across two rates (time equation + distance equation).

## Why it exists / why the SAT tests it
It tests modeling: binding each number in the prose to the correct mathematical role. Two question forms exist — "which system represents the situation" (setup only, no solving) and "how many of X" (setup plus solve). unverified-claim: the count+value template is among the most frequent system items across administrations, and its multiple-choice distractors are built almost entirely from role-swaps rather than arithmetic variations.

## Mental model
**Every number in the story has a job: it is a count, a unit value, or a total — and totals of different units live in different equations.** Build one equation per unit: the item-count equation collects counts (coefficients of 1), the value equation attaches each unit value to ITS OWN quantity and equals the value total. The safety check is dimensional: each equation must be unit-consistent (items + items = items; dollars + dollars = dollars). A mixed-unit equation is always wrong.

## Expert reasoning process
1. Define variables as counts of concrete things, written down explicitly ("a = number of adult tickets"). Vague variables cause every downstream swap.
2. Sort the given numbers by job: unit values (attach to a variable as coefficients), totals (sit alone on the right side), comparisons (become a relation between the variables).
3. Write the count equation first (it's the easy one), then the value equation, binding each price/rate to its own noun's variable — the price of A multiplies the count of A, full stop.
4. Unit-check each equation before proceeding. This one move catches the count/value swap and the coefficient-attachment swap.
5. For comparison clauses ("3 times as many f as w"), do NOT pattern-match word order. Test with a concrete instance: if there is 1 w, there are 3 f — so f = 3w, the multiplier lands on the SMALLER quantity's variable. Sentence order and multiplier placement are unrelated.
6. If solving is required: the count equation usually has coefficient-1 variables → substitution is natural; or subtract the equations after scaling ([[linear-system-method-selection]]). Answer the count actually asked for, not the first variable solved.
7. Comparative-total twists ("revenue from A exceeded revenue from B by $90") are subtraction relations: 5x − 8y = 90 — watch which side is bigger; the mis-signed version is a standard distractor.

## Desmos vs algebra
Once the system is BUILT, and the item asks for actual counts, Desmos is excellent: type both equations, click the intersection — particularly attractive with decimal prices where hand elimination invites arithmetic slips. But Desmos contributes nothing to the setup, and "which system represents" items (a large share of this family) are entirely about setup — pure translation, no tool. Decision rule: **setup is always yours; if numbers are ugly and a count is asked, hand the built system to Desmos.** One caution: real-world counts must be whole; if an intersection reads as non-integer on a which-count item, the model (not Desmos) is wrong — recheck the setup.

## Misconceptions
- **misc-count-value-swap** — Attaching the money/weight total to the count equation and the item total to the value equation (x + y = 260, 5x + 8y = 40). Forms from pattern-matching numbers to positions in the sentence instead of tracking units. The exact swap is virtually always among the choices.
- **misc-coefficient-attachment** — Multiplying A's price by B's count (5y + 8x instead of 5x + 8y). Forms when variables are defined vaguely, so nothing anchors each rate to its noun. The swapped version is a standard distractor (transposed-pair archetype at the equation level).
- **misc-order-of-mention-multiplier** — Writing "3 times as many f as w" as 3f = w because the 3 sits next to f in the sentence. Forms from surface-order pattern matching rather than quantity visualization. This single error accounts for an outsized share of misses on comparison-clause items; both versions appear as choices.
- **misc-comparison-sign-direction** — In "A exceeds B by 90," subtracting in the wrong direction (B − A = 90). Forms because "by 90" registers but "which is larger" doesn't. Distractor: the sign-reversed relation.
- **misc-answer-first-solved-variable** — Solving cleanly but reporting the other quantity ("how many student tickets" answered with the adult count). Wrong-variable distractor is always present.

## Diagnostic indicators
- misc-count-value-swap: picks the swapped-totals system on which-system items; unit-check question ("what are the units of each side here?") stalls them.
- misc-coefficient-attachment: picks the crossed-coefficients choice; their scratch variables are unlabeled letters.
- misc-order-of-mention-multiplier: reliably inverts multiplier placement; reads the sentence aloud in original order as justification.
- misc-comparison-sign-direction: errors cluster on exceeds/less-than comparative items; both subtraction orders in the choices split their picks.
- misc-answer-first-solved-variable: correct system, correct algebra, adjacent-variable final answer.

## Remediation pathways
- misc-count-value-swap: teach the unit-check as a mandatory gate; one deliberate demonstration of a mixed-unit equation failing the check usually lands it. If translation itself is weak, revisit [[variable-definition-discipline]].
- misc-coefficient-attachment: enforce written variable definitions with nouns; then "each price shakes hands with its own noun."
- misc-order-of-mention-multiplier: two independent fixes — (a) concrete-instance test (plug 1 into the smaller side), (b) rewrite the clause as a ratio f:w = 3:1 and cross-multiply. Give both; students keep the one that sticks.
- misc-comparison-sign-direction: ask "which pile is taller?" before writing; larger minus smaller equals the gap.
- misc-answer-first-solved-variable: same written-target discipline as [[system-combination-target]].

## Mastery criteria
Student translates a two-constraint scenario into a correct system in under a minute with variables defined in writing, passes the unit-check on demand, handles comparison clauses in both directions, and reports the asked-for quantity. Evidence: consistent accuracy on both which-system items (where all four swap-distractors lurk) and solve-through items, across money, mixture, and rate/time contexts.

## Difficulty ladder
- **Easy**: two quantities, clean count+value template, integer prices, "which system represents."
- **Medium**: solve-through required; comparison clause replaces one equation; unit conversions (minutes↔hours) planted.
- **Hard**: comparative-total twists (revenue gap), rate/time split journeys, multipliers in comparison clauses, decimal unit values.
- **Hardest**: composed with inequality caps → the constraint-optimization family ([[inequality-translation-and-integer-bounds]]); or three quantities where one must be expressed via the others before a 2×2 system emerges.

## Teaching notes
- **Struggling**: start with one constraint at a time and physical imagery (two boxes of tickets, a cash pile). Have them write the count equation for several scenarios before ever introducing the value equation.
- **Average**: teach the number-job sort (count / unit value / total) as an explicit pre-writing step and the unit-check as the finishing step; drill which-system items where all distractors are swaps.
- **Advanced**: comparison clauses and comparative totals; introduce the concrete-instance test as the universal disambiguator; add rate/time contexts.
- **1500+**: speed and trap-prediction: before looking at choices, write the correct system AND name the two swaps the writer will offer. Setup should take 30 seconds; Desmos finishes ugly solves.
