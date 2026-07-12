---
id: linear-model-four-slots
section: math
domain: algebra
skill: solve-for-input-from-output, linear-cost-model
difficulty_span: [easy, hard]
prereqs: [linearity-constant-rate-model, linear-equation-balance-peeling]
unlocks: [line-from-known-facts, interpret-linear-parameters]
related: [function-as-io-machine, solve-for-the-asked-quantity]
---

# The four slots: any one unknown is recoverable from the other three

## What it is
A linear model output = rate × input + start has four slots: the output value, the input value, the rate, and the start. Every linear-model question — evaluate, invert, find the rate, find the start — is the same task: three slots are known, one is missing, and balance moves recover it. "Solve for x" generalizes to "solve for whichever slot is empty," and the parameter slots (rate, start) are where the exam actually lives.

## Why it exists / why the SAT tests it
School drills only two of the four directions (evaluate forward; solve for the input). The exam systematically asks the other two — find the rate from a known point, find the start from a known point — because those directions reveal whether the student understands the model as a relationship rather than a computation recipe. Two-stage designs (use one known input-output pair to pin a parameter, then evaluate elsewhere) are a standard hard-band shape. (unverified-claim on official frequency; consistent with our bank.)

## Mental model
**A machine with four labeled dials.** Rate and start are the machine's settings; input and output are one transaction through it. Any question hands you three dial readings and hides the fourth. The entire decision is: *which dial is hidden?* Once named, the algebra is uniform — substitute the three knowns, solve for the one unknown. Being told a specific input-output pair (including in function clothes, f(a) = v) is TWO dial readings at once: a goes in the input slot, v replaces the whole output side.

## Expert reasoning process
1. Write or identify the model (from [[linearity-constant-rate-model]] if it's prose, or given directly).
2. Name the hidden slot before computing anything. Classify the item: evaluate-forward (output hidden), solve-backward (input hidden), or parameter-find (rate or start hidden).
3. Substitute every known simultaneously. In function notation, replace EVERY instance of the input placeholder; f(a) = v means both "input = a" and "the whole expression equals v."
4. Solve with balance moves. For two-stage items: pin the parameter first, rewrite the completed model, then run the second transaction.
5. Answer-check the recovered slot against the story's scale (a per-item price shouldn't be 4,000; a starting amount shouldn't be negative in a count context).

**Desmos vs. algebra:** forward evaluation is instant in Desmos (define the function, read the value) and backward-solving is one plot (graph both sides, read the intersection) — teach students to use it freely for those two directions when numbers are messy. Parameter-finding is different: with a slider or by algebra, the algebraic route is usually faster and is REQUIRED when the answer is symbolic. Rule of thumb to teach: hidden input/output → Desmos is legitimate; hidden rate/start → algebra first.

## Misconceptions
- **forward-only-fluency** — the student can evaluate but freezes when the output is given, not seeing that the total substitutes into the other side. Forms because school practice overwhelmingly runs the machine forward; the backward direction was never framed as the same substitution into a different slot.
- **function-notation-as-multiplication** — reading f(3) as f × 3. Forms because parentheses have meant multiplication for the student's entire prior math life; this is their first postfix-operator syntax. A top-tier diagnostic: it poisons every function-clothed item at once.
- **one-datum-blindness** — given f(a) = v, substituting a but not knowing what to do with v (or worse, using v as the input). Forms because "the value of the function" is an abstract object on first contact; the student hasn't internalized that v equals the entire expression.
- **parameter-find-as-special-topic** — treating find-the-rate items as an unfamiliar question type requiring a new method, rather than the same four-slot solve. Forms because parameters "feel like" part of the equation's identity, not like unknowns; produces skipped items despite adequate algebra.

## Diagnostic indicators
- forward-only-fluency: accuracy gap between evaluate items and given-the-total items on the same models; scratch work on backward items shows the model written but nothing substituted.
- function-notation-as-multiplication: answers consistent with multiplying by the input; explain-back says "f times three."
- one-datum-blindness: substitutes a correctly then stalls; or computes f(v) instead — picks the choice matching input/output swapped.
- parameter-find-as-special-topic: skips find-k items; timing spikes on them relative to structurally identical solve-for-x items.

## Remediation pathways
- forward-only-fluency: mirrored pair drill — same model, one item each direction, solved in adjacent columns; the only difference is which slot got the given. Name the four slots explicitly.
- function-notation-as-multiplication: notation contrast — evaluate f(x) = 2x + 1 at 3 next to the expression f · 3 with f = 5; then re-teach f(3) as "the output when the input is 3." Revisit [[function-as-io-machine]] if the confusion is deeper than lines.
- one-datum-blindness: teach the double-substitution as a stamp: a goes inside, v replaces the whole left side — two writes, always both.
- parameter-find-as-special-topic: run one item four times, hiding a different slot each time; the sameness of the algebra is the lesson.

## Mastery criteria
Given items hiding each of the four slots (mixed, including function notation and two-stage designs), the student classifies the hidden slot correctly on sight and recovers it. Evidence: no direction-based accuracy gap; two-stage hard items completed without prompting on the "pin the parameter first" step.

## Difficulty ladder
- **Easy:** evaluate forward with friendly numbers.
- **Medium:** backward-solve from a given total; find the start given rate and one point; function-notation dressing.
- **Hard:** two-stage (find parameter from f(a) = v, then evaluate elsewhere); f(p) − f(q) designs (two transactions, subtraction order); parameters as letters with symbolic answers; negative inputs (sign handling). Module 2 Hard escalates by stacking stages and parameterizing slots — composes with [[solve-for-the-asked-quantity]] when the ask is a combination of parameters.

## Teaching notes
- **Struggling:** the machine-with-dials story, physically pointing at slots; drill slot-naming with no solving ("which dial is hidden?") before any algebra.
- **Average:** the mirrored-pair drill until direction ceases to matter; introduce function notation as a renaming of the same machine.
- **Advanced:** two-stage items and f(p) − f(q); train writing the completed model after stage one (a concrete artifact prevents stage-two confusion).
- **1500+:** symbolic parameter answers and composed designs; coach recognizing four-slot structure inside unfamiliar-looking items (a table row, a graph point, and a sentence can each be a "dial reading" — see [[line-from-known-facts]]).
