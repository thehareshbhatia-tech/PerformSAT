---
id: angle-chasing-ritual
section: math
domain: geometry-trigonometry
skill: geometry.triangle-angle-sum, geometry.angles-with-parallel-lines-and-transversals
difficulty_span: [medium, hard]
prereqs: [parallel-lines-two-angle-families, triangle-angle-sum-and-exterior-shortcut]
unlocks: [similarity-configurations, triangle-properties-toolkit]
related: [triangle-properties-toolkit]
---

# The angle-chasing ritual: fire generators, annotate, repeat

## What it is
A disciplined loop for multi-step angle problems: scan the figure for any of the local "generators" that produce a new angle value — straight line = 180°, full turn = 360°, right angle = 90°, vertical angles equal, triangle sum = 180° (plus the exterior shortcut), isosceles symmetry, parallel-line families — fire whichever applies, write the new number ON the figure, and repeat until the target falls out. The chase is graphical: the figure is re-annotated after every inference.

## Why it exists / why the SAT tests it
Hard geometry items rarely introduce new facts; they require 4–6 *sequential* deductions from easy facts. The College Board is probing working-memory management and persistence, not knowledge. These items live at the hard end of a module, often with overlapping triangles and a "figure not drawn to scale" note.

## Mental model
**You don't need to see the path — each new fact unlocks the next.** An expert never plans the whole route before starting. They deduce anything derivable, annotate it, and let the figure tell them the next move. Freezing ("I don't see how to get the answer") is the failure mode; the antidote is "what CAN I compute right now?"

## Expert reasoning process
1. **Redraw or heavily annotate.** Copy the figure if it's cramped. Mark equal angles with matching arc counts and equal sides with matching tick marks — both as *given* and as *deduced*. Marks are the working memory.
2. **Extend segments into full lines** where parallels are involved, to expose the transversal picture. For zig-zags, add a parallel through the bend.
3. **Loop the generators**: straight line 180 / vertical angles / right angle 90 / triangle 180 + exterior shortcut / isosceles base angles / parallel families / angles around a point 360. Fire any that applies to *any* part of the figure, not just near the target.
4. In dense multi-triangle figures, chase **triangle by triangle**, harvesting 180-sums and vertical angles at each intersection — never try to grasp the whole figure at once.
5. **Write every result on the figure immediately.** Unwritten deductions are lost deductions.
6. Stop when the target has a value; sanity-check it against the figure ONLY if the figure is drawn to scale.

## Misconceptions
- **plan-first-paralysis** — the student believes they must see the full solution path before writing anything, so they freeze on chains longer than two steps. Forms because school problems are usually 1–2 steps, so "see it, then do it" works until it suddenly doesn't. Produces skips and time bleeds, not wrong answers.
- **scale-trust** — reading relative sizes or apparent equalities off a figure labeled "not drawn to scale." Forms because most printed figures ARE to scale; the habit of eyeballing gets rewarded for years. Test writers deliberately draw a 20° angle to look like 60° and place the eyeball answer among the choices.
- **mental-only-chasing** — refusing to annotate, holding 3+ intermediate angles in the head. Forms from a "writing is for weak students" self-image or from cramped test figures. Produces mid-chain errors: correct method, one dropped or swapped intermediate value, answer matches a near-miss distractor.
- **generator-tunnel-vision** — hunting only near the target angle, missing that a deduction on the far side of the figure is the unlocking move. Forms from goal-gradient intuition ("work near the answer").

## Diagnostic indicators
- Long dwell then skip/guess on multi-step angle items, while one-step angle items are fine → **plan-first-paralysis**.
- Picks the answer that "looks right" on not-to-scale figures; misses items where the drawn angle is deliberately misleading → **scale-trust**.
- Wrong answers that are one supplement/vertical-swap away from correct (off by 180 − x or a swapped intermediate) → **mental-only-chasing**.
- When asked to explain, says "I didn't know where to start" despite knowing every individual fact → **plan-first-paralysis** or **generator-tunnel-vision**.

## Remediation pathways
- **plan-first-paralysis**: explicitly teach the ritual as permission — "compute anything, anywhere, now." Model one hard chase aloud, narrating each generator check, deliberately including one dead-end deduction to show that useless facts cost nothing.
- **scale-trust**: contrast pair — same problem, figure drawn to scale vs. deliberately distorted; the student who eyeballs gets punished once, memorably. Then install the rule: values come from labels and deductions, never from the picture's geometry.
- **mental-only-chasing**: require full annotation on 5 items in a row (arc counts, ticks, every derived number). Compare error rates with their unannotated attempts — the data usually convinces.
- **generator-tunnel-vision**: drill "farthest-first" — give figures where the first productive deduction is far from the target.
- If chains still break, the gap is in the generators themselves: revisit [[triangle-angle-sum-and-exterior-shortcut]] and [[parallel-lines-two-angle-families]].

## Mastery criteria
Student completes 4–6-step chases on overlapping-triangle figures with full annotation and ≥80% accuracy, starts writing within 20 seconds (no freeze), and never cites the figure's appearance as justification on not-to-scale items. Proof: consistency on hard angle items across 2+ sessions, plus a verbalized chase that names each generator used.

## Difficulty ladder
- **Easy**: (not really tested at easy — two-generator chains at most: vertical angle + triangle sum).
- **Medium**: three-generator chains; isosceles + straight line + triangle sum; parallel families feeding a triangle.
- **Hard**: 4–6 sequential deductions through overlapping triangles; not-to-scale distortion; chains that pass through [[triangle-properties-toolkit]] (isosceles symmetry) and end in a similarity or circle setup. On circles, the same ritual runs with radii-equal as the extra generator ([[triangle-properties-toolkit]]).

## Teaching notes
- **Struggling**: reduce the generator list to three (straight line, vertical, triangle sum) and drill two-step chains until the annotate-then-look loop is automatic. Celebrate written intermediate values, not just answers.
- **Average**: teach the full generator checklist as a literal scan order; enforce the redraw-and-label discipline; introduce not-to-scale traps early.
- **Advanced**: dense figures where the first move is a construction (extend a line, add a parallel); ask them to narrate which generator they're checking to expose tunnel vision.
- **1500+**: speed and selectivity — recognizing which single deduction unlocks the chain, and when an exterior-angle shortcut or a similarity observation replaces three chase steps entirely.
