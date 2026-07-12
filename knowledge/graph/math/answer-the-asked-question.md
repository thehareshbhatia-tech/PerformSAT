---
id: answer-the-asked-question
section: math
domain: cross-cutting
skill: cross.target_discipline (meta-skill; the wrong-target distractor is planted across every domain's items)
difficulty_span: [easy, hard]
prereqs: [linear-equation-balance-peeling, variable-definition-discipline]
unlocks: [engineered-shortcut-recognition, composite-decomposition]
related: [method-selection-by-answer-form, distractor-forensics-study-skill, expression-as-unit]
---

# Answer the question that was asked (the premature-answer trap)

## What it is
The single most common way to lose a point with correct math: solving for a variable when the question asks for a derived quantity — the other variable, x + 2, the area (you found the radius), the larger of the two numbers, the future age, the converted unit. The solved intermediate value is planted among the choices, so stopping early feels like finishing.

## Why it exists / why the SAT tests it
This is, by a wide margin, the most frequently planted distractor design across every math domain — both of our deep source-analyses independently rank it #1, and worked solutions in professional materials end with an explicit "convert to the asked quantity" beat *because* of it. The College Board is probing reading discipline under time pressure: can you keep the target in working memory through a multi-step solve? Cheap to write, brutally effective, present from easy through hard band.

## Mental model
**The solve ends at the question, not at x.** Picture every problem as having two finish lines: the algebra finish line (x = 4) and the question finish line ("so the larger number is 12"). The trap is that crossing the first one produces the full neurological sensation of being done — and a matching answer choice to confirm it. Train a mandatory final beat: *re-read the target, then convert.*

## Expert reasoning process
1. **On first read, extract and mark the target** — the exact quantity requested, with its units and time reference. Experts often restate it mentally in three words ("perimeter, in cm").
2. Choose the variable to MINIMIZE the conversion distance when practical: let x be the asked quantity itself (see [[variable-definition-discipline]]); then the algebra finish line and the question finish line coincide.
3. Solve.
4. **Before touching an answer choice, re-read the last sentence of the stem.** This is a fixed ritual, not a when-suspicious check — the trap works precisely because you don't feel suspicious.
5. Convert: solved value → asked quantity (evaluate the expression, take the other variable, apply the unit change, pick the root that survives the constraint).
6. Treat a choice matching your raw intermediate as a WARNING, not a confirmation: on multi-step items, seeing your intermediate among the choices is evidence the item was built around this trap.

## Misconceptions
- **premature-answer reflex** — the deep belief that "solve for x" IS the task. Formed by years of homework where it literally was; the question-finish-line concept never had to exist. This is not carelessness — it is a trained habit executing correctly in the wrong game. Produces the intermediate-value pick on MC and the intermediate value entered on grid-ins (where the trap moves upstream since there are no choices).
- **match-equals-confirm** — the belief that finding your computed number among the choices validates the work. Formed because on one-step items it genuinely does. On multi-step items the test manufactures matches for every partial result (one-step-early termination: the slope when the intercept was asked, the radius when the area was asked).
- **target-drift on long items** — the student read the target correctly but lost it across a 60-second solve; they answer whatever quantity the final equation produced. A working-memory failure, not a reading failure — distinguishable because it appears only on long/multi-step items and disappears when they annotate the target. Overlaps [[composite-decomposition]]'s bookkeeping load.
- **salience-answering** — on interpretation/modeling items, answering about the noun most emphasized in the story rather than the quantity the variable actually measures. Formed by narrative reading habits imported into math.

## Diagnostic indicators
- Picked the choice equal to the raw solved variable when a derived quantity was asked → premature-answer reflex. The cleanest single-distractor diagnostic in the entire bank; our items deliberately seed the intermediate value as a choice, so this pick maps to root cause with high confidence.
- Same error class on grid-ins: entered value equals the expected intermediate (worth storing expected-wrong-values per grid-in item to detect this).
- Errors concentrated on items with ≥3 solution steps but absent on short items of the same skill → target-drift, not reflex.
- Fast wrong answers (well under their median time) with intermediate-value picks → reflex; slow wrong answers with the same pick → drift. **Timing splits the two root causes.**
- On interpretation items, picks the distractor naming the story's headline noun → salience-answering.

## Remediation pathways
- **premature-answer reflex:** install the final-beat ritual ("last sentence, then answer") and drill it on a set where EVERY item asks for a derived quantity — the reflex must fail repeatedly in practice to be rebuilt. Cheap habit, high yield; this is behavior training, not content review.
- **match-equals-confirm:** show them one item's full distractor set annotated: every partial result appears. Once they see that matching is manufactured, the false confirmation loses its power (pairs with [[distractor-forensics-study-skill]]).
- **target-drift:** teach target-annotation (write the asked quantity at the top of scratch work) and re-test; if drift persists on composites, the issue is working-memory management — route to [[composite-decomposition]].
- **salience-answering:** the "what does the output variable measure?" say-it-aloud check; revisit [[interpret-linear-parameters]] if variable-meaning mapping is itself weak.

## Mastery criteria
Zero intermediate-value picks across 20 consecutive multi-step items spanning at least three domains, INCLUDING under time pressure (a full timed module) — the reflex only counts as rebuilt if it holds when rushed. On explanation, the student spontaneously names the target before naming the method.

## Difficulty ladder
- **Easy:** one conversion step, loudly signposted ("what is the value of 2x?").
- **Medium:** the conversion is a second quantity in the story (the other variable, the larger number, the future age); units change once.
- **Hard:** the target is an expression the solve never isolates directly (hand-off to [[expression-as-unit]]); constraint-filtered roots (both roots found, one survives x > 0); composites where the target belongs to a different topic than the equation (see [[composite-decomposition]]); grid-ins where no choice-matching feedback exists at all.

## Teaching notes
- **Struggling:** make the trap visceral once — give an easy item they'll get "right" with x, reveal the miss, name the two finish lines. Then the ritual, drilled on easy items only, so the habit forms without content load.
- **Average:** ritual plus the annotated-distractor reveal; mixed drill where half the items ask for the variable and half for a derived quantity, so they can't autopilot either way.
- **Advanced:** constraint-filtered and expression-target variants; grid-in discipline (no choices to warn you).
- **1500+:** this cohort still leaks points here — almost exclusively via target-drift on composites under time. Coach the scratch-work annotation as a pacing-compatible micro-habit, and review their rare wrong answers specifically for intermediate-value signatures before assuming a content gap.
