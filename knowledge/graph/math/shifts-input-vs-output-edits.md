---
id: shifts-input-vs-output-edits
section: math
domain: advanced-math
skill: function-transformations, graph-translation
difficulty_span: [easy, hard]
prereqs: [function-as-io-machine, graph-as-io-pairs]
unlocks: [inside-zero-anchor]
related: [quadratic-form-conversion-triangle, vertex-by-symmetry, function-composition-chains]
---

# Transformations: every shift is an edit to the input or the output

## What it is
Graph translations are formula edits classified by WHERE the edit lands. An edit OUTSIDE the function (f(x) + k) changes the output after the rule runs → the graph moves vertically, in the direction the sign says. An edit INSIDE the input slot (f(x + a)) changes what the rule receives before it runs → the graph moves horizontally, in the direction OPPOSITE the visible sign: x + a slides left, x − a slides right. Vertical and horizontal translations commute — apply them in either order, same final graph — so a combined move decomposes into two independent edits. The rules are family-agnostic: the same edits translate lines, exponentials, rationals, cubics, and quadratics identically.

## Why it exists / why the SAT tests it
Transformation items test whether the student can see through notation to the io structure — exactly the parentheses-boundary blindness that produces most function errors. The Digital SAT's menu here is translations; reflections appear mainly incidentally through negative leading coefficients. unverified-claim: shifts are the only transformation type tested and vertical shifts appear more often than horizontal — plausible but verify against officials and our bank before pruning stretch/reflection from the ladder, since occasional official items do probe vertical stretch. Item shapes: which-translation-converts-A-to-B vocabulary items (sometimes needing an equivalent-form step to see the net constant), apply-a-shift-with-family-specific-algebra, shifted-graph-shown → recover the parent (reverse reading), shift-then-evaluate (new intercept or zero), and vertical-distance-between-two-vertex-form-curves.

## Mental model
**Classify the edit first: outside → output → vertical, sign-literal; inside → input → horizontal, sign-inverted.** The WHY of the inversion is the delayed-input model: in f(x − 2), the machine receives a lagged copy of x — every input arrives 2 short, so every behavior of f happens 2 later, i.e., 2 units to the RIGHT. Adding inside makes the input run ahead, so features appear sooner (left). Equivalent compensation phrasing: to reproduce f's old output at a new location, the inside must be restored to its old value — the input has to be "paid back" before the function sees it. This is a derivation, not a mnemonic; mnemonics decay under exam stress, the model doesn't.

## Expert reasoning process
1. Binary classification before any computation: is the constant attached to the output (outside) or the input (inside)?
2. Outside → vertical, same direction as the sign. Inside → horizontal, opposite direction — or skip the rule entirely and use the inside-zero anchor ([[inside-zero-anchor]]).
3. Applying a shift to a formula: substitute into EVERY occurrence of x (empty-parentheses discipline from [[function-as-io-machine]]), then simplify to match the answer-choice format — e.g., a +k over a denominator must be folded in by multiplying through, not concatenated onto the numerator.
4. Reverse reading: if the DISPLAYED graph is the transformed one ("the graph of f(x) − 2 is shown; which equation defines f?"), invert the operation — shown down 2 means add 2 back. Never re-apply forward.
5. Reduce graph translation to point translation: track one convenient point (usually the y-intercept) through the shift and rebuild. A translated line keeps its slope; only the intercept moves.
6. Order-free decomposition: split a combined translation into its vertical and horizontal edits and apply them separately — commutativity makes this safe.
7. **Desmos decision:** every concrete item in this family is trivially checkable — plot the parent and the candidate side by side and look. Use it as a verification layer, not the first line: many items are which-equation formats where anchor reasoning is faster than typing four candidates, and parameterized items (shift by an unknown k) give Desmos nothing without sliders. Sliders on k, though, make the delayed-input model VISIBLE — a strong teaching demo.

## Misconceptions
- **inside-sign-inversion (f(x+a) moves right)** — The mirrored-direction belief. Forms because everywhere else in math +a means increase/rightward; the student imports a correct heuristic into the one context where the sign acts on the INPUT, which must compensate rather than add. Every multiple-choice set carries the mirror-sign distractor. Procedural tricks alone don't hold under stress — the delayed-input/compensation model is the durable fix.
- **operate-on-output-instead-of-input** — Reading f(x + 2) as f(x) + 2. Forms because outside-the-parentheses arithmetic is what students do all day; the parentheses boundary is invisible. Produces vertical-shift answers on horizontal items and vice versa — the axis-swapped distractor.
- **partial-substitution** — Editing only the first x in multi-occurrence formulas (factored, rational). Same text-editing root as in [[function-as-io-machine]]; distractors show exactly one factor shifted.
- **numerator-blind vertical shift** — Adding k to a fraction-defined function by appending +k to the numerator without multiplying through. Forms from treating +k as string concatenation rather than arithmetic on the whole output. Distractor: the un-scaled numerator sum.
- **forward-reapplication** — On reverse-reading items, shifting the shown graph the same direction again (or stopping at the shown graph's formula) instead of undoing. Forms because forward application is the drilled habit and the direction word ("defines f") is skimmed. Distractor: the double-shifted or unshifted formula.
- **slope-mutation** — Believing translating a line changes its slope. Forms from a vague "big shift = big change to the equation." Distractor multiplies slope by the shift amount.

## Diagnostic indicators
- **inside-sign-inversion**: consistently picks the mirror-direction choice on horizontal items; vertical items fine. The single most reliable distractor-to-misconception mapping in this cluster.
- **operate-on-output**: axis-swapped answers (vertical amount applied horizontally or vice versa); table items show the shift applied to the wrong column.
- **partial-substitution**: chooses the one-factor-shifted formula; errors only on multi-occurrence rules.
- **numerator-blind**: picks the concatenated-numerator choice on rational-rule items.
- **forward-reapplication**: on "defines f" items, answers the double-shift; direction words absent from their restatement of the problem.
- **slope-mutation**: changed-slope choices on translated-line items.

## Remediation pathways
- inside-sign-inversion: teach the delayed-input story, then CONFIRM with a table of values — compute f(x − 2) rows next to f(x) rows and watch every feature arrive 2 later. A Desmos slider on f(x − k) makes it kinetic. If it still won't stick, install [[inside-zero-anchor]] as the working procedure with the model as backup.
- operate-on-output: color the parentheses boundary — everything inside is "before the machine," everything outside "after." One annotated example per family.
- partial-substitution: empty-parentheses skeleton ritual (revisit [[function-as-io-machine]]).
- numerator-blind: compute one concrete value both ways and watch the concatenated version give the wrong number; arithmetic beats argument here.
- forward-reapplication: restate-the-direction ritual — before solving, say which graph is the parent and which is shown. Contrast pair: same picture, two stems (one forward, one reverse).
- slope-mutation: slide a drawn line vertically on a grid and observe the slope triangle is untouched; one picture suffices.

## Mastery criteria
The student classifies any edit as input/output in under five seconds, states direction correctly both ways (apply and undo), executes family-specific algebra cleanup, and explains WHY horizontal shifts invert using the delayed-input or compensation argument. Explanation is part of the criterion — students who can only state the rule regress under pressure. Proof: mixed forward/reverse items across ≥3 function families at hard band.

## Difficulty ladder
- **Easy**: name the translation converting f(x) to f(x) + 3 or f(x − 2); apply to a simple rule.
- **Medium**: combined shifts; family-specific cleanup (rational, exponential, factored quadratic); shift-then-evaluate (new y-intercept — which must be computed by evaluation, not read off, after a horizontal shift).
- **Hard**: reverse reading from a graph; equivalent-form recognition before the shift is visible (net +6 disguised across terms); unknown-constant compositions (find a + b from a shifted cubic's graph); translation composed with optimization ([[vertex-by-symmetry]]: g(x) = f(x − k) moves the max by k) or with linear modeling — the top of the ladder is always translation PLUS another skill.

## Teaching notes
- **Struggling**: vertical shifts only until solid (they're sign-literal and build confidence); introduce horizontal with the before/after picture pair AND the table demonstration, never the bare rule.
- **Average**: the classify-first ritual; delayed-input model taught explicitly; forward and reverse items interleaved early so reverse reading isn't a novelty.
- **Advanced**: family-agnostic drilling (same shift across five families), algebra-cleanup variants, and the Desmos side-by-side verification habit.
- **1500+**: equivalent-form-disguised shifts, compound edits (which hand off to [[inside-zero-anchor]]'s caveat), and speed: anchor reasoning over plotting on which-equation formats, plotting over algebra on concrete verify-my-answer moments.
