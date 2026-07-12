---
id: fit-line-vs-data-points
section: math
domain: problem-solving-data-analysis
skill: two-variable-data
difficulty_span: [easy, hard]
prereqs: []
unlocks: []
related: [data-display-decoding, interpret-linear-parameters, statistical-claim-legality, slope-as-rate-of-change]
---

# Dots are data, the line is a model

## What it is
A scatterplot holds two different kinds of object. The dots are DATA — each one an observed entity carrying two measured values. The fit line is a MODEL — a separate summary object drawn through the cloud, balancing points above and below, owing no allegiance to any individual dot. Every fit-line question lives in the relationship between the two: **predicted** = the line's y-value at a given x; **actual** = the dot's y-value at that x; **prediction error** = the VERTICAL gap between them. A dot above the line means the actual exceeded the prediction — the model UNDERestimates there; a dot below means the model OVERestimates.

## Why it exists / why the SAT tests it
School statistics rarely separates data from model, so the exam probes exactly that boundary: predict y at an x; count the points the model over- or underestimates; compute a predicted-minus-actual difference; select the fit line's equation from the picture; interpret its slope and intercept with predicted-vs-actual wording discrimination. unverified-claim: fit-line items recur heavily and sit mostly in the easy-to-medium band, escalating not through harder displays but through which object — model, data, or the gap — each sub-question interrogates.

## Mental model
**Two transparent sheets.** Sheet one holds the dots (what happened); sheet two holds the line (what the model expects). Every question addresses exactly one sheet, or the vertical gap between them — decide which BEFORE reading anything off the figure. "Predicted," "expected," "the model estimates" → line sheet. "Actual," "observed," "the data" → dot sheet. "Error," "difference," "over/underestimate" → the vertical gap at one x.

## Expert reasoning process
1. Classify the question's object first: the line, the dots, or the gap.
2. Predicted value at x = k: ride the LINE, not the nearest dot, and read its y at k (between gridlines, estimate by interval position — "closest to" phrasing licenses estimation).
3. Error at x = k: locate the dot, travel vertically to the line, subtract y-values. The gap is vertical — never horizontal, never along the line, never perpendicular to it.
4. "For how many points does the model underestimate/overestimate": count dots strictly above (under) or strictly below (over) the line.
5. Slope of the fit line: pick two points ON THE LINE — gridline crossings, far apart — never two data dots; dot-pair slopes are engineered near-misses. If the intercept is needed and the visible axis doesn't start at 0, COMPUTE it from a line point — the plot's left edge is not the y-axis.
6. Equation selection: intercept sign first, rough slope estimate second — that order usually eliminates all but one choice before any arithmetic ([[data-display-decoding]] for the axes-first discipline).
7. Slope interpretation: the sign is the association's direction; the magnitude is the predicted change in y per ONE unit of x *as x is defined* — per year even when the dots sit four years apart. Wording discipline: fit-line parameters support only "predicted, on average" claims ([[interpret-linear-parameters]], [[statistical-claim-legality]]).
8. Strength vs direction are independent axes: strength = how tightly the cloud hugs the line; direction = slope sign. A steep, loose cloud is a WEAK association.
9. Data-transformation items: add the same constant to every y-value and the intercept shifts by that constant while the slope is unchanged — the whole cloud slides vertically, rigid.

## Misconceptions
- **data-points-for-slope** — computing the fit slope from two scatter dots. Forms because "pick two points" was learned on clean lines, and the dots are the only concrete marked objects in the figure — the line carries no labeled points. Produces near-miss slopes that match a planted distractor.
- **over-under-inversion** — reading a dot above the line as "the model overestimates." Forms because "above/over" verbally attaches to the wrong object: the DATA sits over the prediction, so the MODEL came in under. Produces flipped over/under counts and sign-flipped differences.
- **non-vertical-gap-read** — measuring actual-vs-predicted along x, along the line, or perpendicular to it. Forms because geometry class installs "distance from a point to a line" as perpendicular distance, contaminating a purely vertical construct.
- **strength-equals-steepness** — calling a steep, scattered cloud a "strong" association. Forms because slope is the perceptually salient feature; strength is tightness of fit, a different quantity entirely.
- **sampling-interval-slope** — reading slope as change per data-collection gap (per 4-year interval) instead of per one x-unit. Forms because the dots are spaced by the sampling interval and students anchor on dot-to-dot movement.
- **model-speaks-as-fact** — treating the line's outputs as actual values: its intercept as a real event, its slope as the actual year-over-year change, its extension far beyond the data as licensed. Forms because school problems rarely draw the data/model boundary at all. Distractors say "actual" where "predicted" is correct and speak definitively where only hedged claims are legal ([[statistical-claim-legality]]).

## Diagnostic indicators
- Slope answer reconstructable from a dot pair; scratch work shows circled dots → **data-points-for-slope**.
- Over/under count exactly complementary to correct, or difference with flipped sign → **over-under-inversion**.
- Error answer matching an x-difference or a diagonal estimate → **non-vertical-gap-read**.
- Strong/weak judgments wrong only when steepness and tightness disagree → **strength-equals-steepness**.
- Slope off by exactly the sampling-interval factor (for example ×4 on 4-year-spaced data) → **sampling-interval-slope**.
- Picks "actual"-worded or definitive choices on interpretation items → **model-speaks-as-fact**.

## Remediation pathways
- **data-points-for-slope**: make "mark two gridline crossings ON the line" a written first step; compute the dot-pair slope once alongside the line slope so the trap is seen, not just prohibited.
- **over-under-inversion**: rebuild the sentence from the subtraction — error = actual − predicted; above the line ⇒ positive ⇒ the model came in LOW. One worked contrast pair fixes the verbal mapping.
- **non-vertical-gap-read**: the two-sheets image — comparing sheets means comparing y-values at the SAME x; anything non-vertical compares different x's. Reconnect to [[data-display-decoding]] if coordinate discipline itself is shaky.
- **strength-equals-steepness**: a 2×2 of clouds (steep/shallow × tight/loose); the student labels direction and strength separately for each cell.
- **sampling-interval-slope**: recompute one slope with the formula — the run is measured in x-units, so the "per" is in x-units regardless of dot spacing. Revisit [[slope-as-rate-of-change]] if per-unit normalization is the deeper gap.
- **model-speaks-as-fact**: teach the wording sort (predicted/expected vs actual/observed) as an elimination pass; route to [[statistical-claim-legality]] for the full legal-claim taxonomy.

## Mastery criteria
States which object a question interrogates before touching the figure; reads predictions off the line and errors as vertical gaps with correct direction language; extracts fit-line slope from line points only and computes intercepts under axis truncation; selects equations by intercept-sign-then-slope; interprets slope per one x-unit in hedged language. Proof: clean runs on mixed sets pairing an over/under count, a predicted-minus-actual difference, and an interpretation item on the same display.

## Difficulty ladder
easy: predicted-value readoff at an x; association direction (positive/negative). → medium: equation selection with a truncated axis; predicted-minus-actual at a point; over/underestimate counts; slope interpretation with predicted/actual wording discrimination. → hard: slope-of-fit-line closest-value items with dot-pair distractors; add-a-constant transformation items (intercept moves, slope fixed); strength-vs-steepness discriminations; extrapolation-legality reads composing [[statistical-claim-legality]]; nonlinear fit curves where the same model-vs-data logic rides a quadratic or exponential.

## Teaching notes
- **Struggling**: teach only the two-object distinction and the vertical gap; every drill begins with "circle the object the question asks about."
- **Average**: the full loop — object classification, line-points-only slope, computed intercepts under truncation, over/under counting with the direction language derived from actual − predicted.
- **Advanced**: interpretation wording discipline (predicted, per one x-unit, hedged); transformation items; strength and direction as independent reads.
- **1500+**: the display as costume — these are [[slope-as-rate-of-change]] and claim-legality items wearing dots. Train the wording sort as a pre-read elimination and reserve arithmetic for the one surviving choice.
