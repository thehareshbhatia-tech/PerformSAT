# Raw notes — Math source B, Ch. 7: Interpreting Linear Equations & Models

Source scope: chapter opener + 7 worked examples + 2 exercise sets (~19 + ~18 items), pages p0043–p0048 scans.
Section/domain: Math — Algebra (Linear equations in context). One of the highest-frequency digital-SAT question shapes.

## Concepts taught (candidate nodes)

- `linear-model-constant-interpretation` — Given a contextual linear equation, identify what role a specific number plays (slope, y-intercept, x-intercept, whole term, or function value) and translate that role into the story's units. The role, not the number, determines the meaning.
- `slope-as-unit-rate` — The coefficient on the input variable is always "change in output per ONE unit of input," with sign giving direction. Everything about its meaning is forced by the two variables' definitions.
- `intercept-as-baseline` — The constant term is the output when the input is zero; in time-based models this is the value at the model's defined time origin (e.g., "t = years after 2006" makes the intercept the 2006 value, not some generic "start").
- `unit-anchored-term-analysis` — For standard-form equations `ax + by = c`: every additive term must carry the same units as `c`, so each coefficient's units are (units of c) ÷ (units of its variable). This mechanically derives what a coefficient must mean (e.g., dollars-per-cup) even when intuition stalls. The book introduces this on an easy item explicitly so it's rehearsed before hard items need it.
- `combination-model-intercepts` — When a line models feasible combinations of two quantities under a shared budget/limit, the intercepts are the all-of-one-quantity extremes; per-unit costs/rates fall out by dividing the total by an intercept.
- `inverse-rate-reading` — Questions can ask the reverse direction: "how much input for one unit of output?" Solve the equation for the input variable, or take the reciprocal of the slope. Recognizing which direction is being asked is the whole skill.
- `rate-rescaling` — A per-unit slope scales linearly to any interval: change over n units = n × slope (e.g., per-minute rate → per-5-minutes by multiplying by 5; per-hour rate halved for per-30-minutes).
- `point-and-value-interpretation` — Interpreting an ordered pair on the model, or a statement like f(8) = 20, requires binding each number to the correct variable definition (input vs output) before writing a sentence.
- `expression-interpretation` — Sometimes the target is a compound expression (a sum like `x + 11`, or a product term like `21n` or `6p`), whose meaning comes from what the pieces mean composed together, not from any single constant.

## Teaching philosophy observed

- Positioned as a direct extension of prior line/word-problem chapters — the author assumes slope-intercept mechanics and only adds the translation-to-context layer. Implies a clean prereq chain.
- Method taught on trivially easy items first, explicitly so the technique (unit analysis) is available later "on more difficult questions." Deliberate skill-before-need sequencing.
- Repeated drumbeat: read the variable definitions before touching the numbers. The chapter's core discipline is definitional, not computational.
- Answer-choice-aware teaching: the author dissects why each wrong choice fails the variable definitions, modeling elimination as definition-checking.

## Expert reasoning patterns (generalized)

1. **Classify the target number's structural role first.** Before interpreting anything, decide: is this the slope, the intercept, a whole term, a function output, or a coordinate? The role dictates the sentence template; the context only fills in nouns.
2. **Let units force the meaning.** Write the units each term must have for the equation to be dimensionally coherent. In `ax + by = c` (total-style models), `a` must be c-units per x-unit. This converts interpretation from a judgment call into an algorithm — the strongest transferable move in the chapter. (Our product should teach this as the primary method; it also generalizes to slope: slope's units are output-units per input-unit, so any answer choice whose units don't match is dead on arrival.)
3. **Anchor "initial value" to the variable's defined zero,** not to the story's first-mentioned year or the word "start."
4. **For reverse-direction rate questions, re-solve for the other variable** (or reciprocal the slope). Check whether the question's "per" clause matches the equation's natural direction before answering.
5. **Scale rates deliberately:** identify the per-one-unit rate, then multiply by the requested interval. Never let the interval sneak into the slope itself.
6. **Eliminate by definition-mismatch:** most distractors name a quantity that isn't either variable (a per-square-foot figure, a count of items never modeled). A fast scan of "is this quantity even one of the defined variables?" kills 1–2 choices.

Desmos: not used or mentioned in this chapter — the method is purely analytic. (For our product: these items are fast enough analytically that graphing is overhead, except combination-graph intercept items where plotting the line makes the extremes visible.)

## Misconceptions targeted (and why students hold them)

- **plausible-rate-lure** — Students pick an interpretation that "sounds like a rate" without checking it against the variable definitions. Forms because school word problems rarely offer competing rate-sounding options, so students never built the definition-checking habit. Trap: distractors quantify the wrong noun (number sold vs value; per-square-foot vs per-year).
- **slope-intercept-role-swap** — Students attach the intercept's meaning (a total/starting amount) to the slope or vice versa. Forms because both are "the numbers in the equation" and students memorize y=mx+b positionally without semantic labels. Trap: the same sentence offered twice, once as "total" and once as "per unit."
- **per-unit-vs-total confusion** — Reading a coefficient as the total change over the whole scenario rather than per one unit of input. Forms from arithmetic habits where numbers are endpoints, not rates.
- **zero-anchor drift** — Interpreting the intercept as the value in the wrong year/at the wrong moment because the student didn't note what input = 0 means in this model. Forms because the time origin is stated once, in the variable definition, which weak readers skip.
- **direction-of-solve blindness** — Answering "output change per input" when asked "input change per output." Forms because the natural reading direction of y = f(x) is input→output and students don't notice the question inverted it. Trap: the un-reciprocaled slope always appears as a choice.
- **input-output binding errors** — For f(8)=20 or (5, 387) interpretations, swapping which number is the input. Trap: the same sentence with 8 and 20 exchanged is always among the choices.

## SAT patterns claimed (unverified-claim; check against bank/official)

- "Best interpretation of [constant]" items overwhelmingly hinge on slope-vs-intercept role identification plus variable-definition matching (unverified-claim, but consistent with our bank's interpretation items).
- Standard-form `ax + by = c` interpretation items are a recurring sub-family where unit analysis is the intended method (unverified-claim).
- Distractor sets are built by permuting {right role, wrong variable} × {wrong role, right variable} × direction swaps (observed consistently across both exercise sets here; verify frequency on official material).

## Prerequisite edges implied

- `slope-as-unit-rate`, `intercept-as-baseline` ← slope-intercept form mechanics; rate-of-change concept.
- `unit-anchored-term-analysis` ← dimensional/unit reasoning; linear standard form.
- `inverse-rate-reading` ← literal-equation solving (isolate a variable).
- This chapter unlocks: exponential-model interpretation (ch. 9 reuses "role of the constant" thinking), scatterplot/line-of-best-fit interpretation.

## Difficulty escalation observed

easy: single constant, friendly y=mx+b, one obviously-defined variable pair → medium: standard-form equations needing unit analysis; expression targets (sums, products); point interpretations → hard: inverse rates requiring re-solving; rescaled intervals (per-30-min from per-hour); non-slope-intercept presentations (nested/factored forms like a linear function wrapped in parentheses or with a shifted input) where the student must first algebraically normalize before interpreting; combination graphs where the needed number is an intercept read off a plot.

## What this source does well / poorly

- Well: the unit-analysis technique is genuinely algorithmic and transfers; explicit warnings about definition-checking; exercises systematically enumerate the distractor space (both exercise sets read like a trap taxonomy).
- Well: escalates into the odd presentation forms (shifted-input, factored) that most prep skips.
- Poorly: no graphical/visual intuition for slope beyond one budget-line example; no Desmos or plotting strategy at all; doesn't explicitly generalize the distractor taxonomy for the student (it's implicit in the exercises); little narrative about WHY the SAT loves this shape (probing modeling literacy, not algebra).
