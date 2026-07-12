---
id: function-composition-chains
section: math
domain: advanced-math
skill: function-composition
difficulty_span: [medium, hard]
prereqs: [function-as-io-machine]
unlocks: [shifts-input-vs-output-edits]
related: [graph-as-io-pairs, exponential-model-anatomy]
---

# Composition: machines chained output-to-input

## What it is
Composition feeds one function's output into another function's input slot: g(f(2)) means "run f on 2, then run g on whatever came out." Nesting is sequential machine-chaining, and the same logic covers recursive setups where a rule is applied repeatedly to its own previous output.

## Why it exists / why the SAT tests it
Composition tests whether function notation is understood structurally rather than typographically — a student who parses f(g(2)) as multiplication or works outside-in has no model, only symbols. It appears mid-band as numeric nested evaluation, and at the hard end as solve-for-the-inner-value items, table/graph hybrids (find k = the input where f is smallest, then evaluate g(k)), and iterated real-world recurrences. unverified-claim: pure recursion items are rare on released material — cheap to teach, but don't overweight in drills; verify frequency against our bank before the tutor deprioritizes.

## Mental model
**Inside-out, always.** The innermost expression is a VALUE waiting to be computed; resolve it first and pass the result outward. Never try to build one combined formula unless the question explicitly demands a formula — evaluating stepwise is faster and safer. For repeated application (this year's output is next year's input), the model is a conveyor belt: one clean application per stage, no skipping.

## Expert reasoning process
1. Locate the innermost call and compute its value completely.
2. Treat that value as the entire input to the next layer out — parenthesize and fill every slot per [[function-as-io-machine]].
3. If the composition is symbolic (find g(f(x)) as an expression), substitute the inner definition into the outer skeleton, then simplify — the empty-parentheses ritual scales up unchanged.
4. For "solve for the inner function" variants (given g(f(x)) and g, recover f), work the outer layer backward first: what input must g have received to produce this output?
5. For recurrences: label the stages (start, after-1, after-2), write one application per stage, carry full precision, round only at the end.
6. **Desmos decision:** for numeric composition, define both functions and type g(f(2)) directly — Desmos evaluates nested calls natively, making this a fast check. For iterated recurrences, a table built stepwise beats graphing. Symbolic-composition items ("which expression is g(f(x))") must be matched structurally; Desmos can only spot-check candidates at a point.

## Misconceptions
- **outside-in evaluation** — Computing the outer function at the literal inner expression's visible number (g(f(2)) → g(2) first). Forms because reading order is left-to-right and the outer letter comes first. Produces the distractor built from the swapped order — nearly always offered.
- **composition-as-multiplication** — f(g(2)) treated as f · g · 2. Forms from juxtaposition-means-multiply habits (same root as f-times-x reading, one level up). Produces attempts to factor or cancel function names.
- **iteration-shortcut** — Plugging the number of rounds into the rule once to get the after-n-rounds value. Forms because notation training says one input → one evaluation; the student maps "2 years" onto "input 2." Produces the one-application distractor on recurrence items.
- **order-blindness in symbolic composition** — Believing f(g(x)) = g(f(x)). Forms because addition/multiplication commute and nothing in the notation looks ordered. Punished by items offering both compositions as choices.

## Diagnostic indicators
- **outside-in evaluation**: wrong answer reproducible by swapping evaluation order; quick response time (the error is confident).
- **composition-as-multiplication**: scratch work shows function names multiplied/canceled; tutor-chat asks "can I divide by f?"
- **iteration-shortcut**: recurrence answers land exactly at one application of the rule; fast solve time on items designed to take three steps.
- **order-blindness**: misses only on items where both orders appear as choices; correct when only one order is offered.

## Remediation pathways
- outside-in: annotate the expression with numbered arrows (innermost = step 1) for five items; the visual ordering becomes automatic. If evaluation itself is shaky, revisit [[function-as-io-machine]].
- composition-as-multiplication: same fix as the notation-literacy error — f names a rule, not a number; contrast 3(x+1) vs f(x+1).
- iteration-shortcut: run one recurrence BOTH ways (shortcut vs stepwise) on a rule where they disagree wildly; the concrete gap does the teaching.
- order-blindness: contrast pair — compute f(g(2)) and g(f(2)) for simple f, g and observe they differ; then ask which the stem asked for.

## Mastery criteria
The student evaluates a three-layer numeric composition and a two-stage recurrence without notes, produces symbolic compositions in both orders correctly, and can solve a hard-band "recover the inner value" item by working the outer layer backward. Proof: hard-band composition accuracy consistent across two sessions, including table/graph hybrid formats.

## Difficulty ladder
- **Easy** (rare at this band): two-layer numeric composition with simple rules.
- **Medium**: three layers; compositions read off tables or graphs; symbolic composition with cleanup algebra.
- **Hard**: hybrid items (extract a value from a graph feature, feed it to a second rule); backward composition solves; real-world recurrences with rounding discipline; composition with [[shifts-input-vs-output-edits]] where g(x) = f(x − k) moves a known feature.

## Teaching notes
- **Struggling**: numeric only, two layers, with the arrow-numbering ritual. Composition is just evaluation done twice — say so explicitly to deflate it.
- **Average**: add table/graph sources for the inner value; introduce symbolic composition once numeric is flawless.
- **Advanced**: backward solves and hybrids; teach the Desmos nested-call check as standard verification.
- **1500+**: recognize composition hiding inside transformation items (f(x − k) is composition with a shift) and inside exponential stacking; the skill is spotting the chain, not executing it.
