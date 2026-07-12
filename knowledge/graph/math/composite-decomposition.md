---
id: composite-decomposition
section: math
domain: cross-cutting
skill: cross.composite_decomposition (meta-skill; hard-band items composing 2+ topic skills)
difficulty_span: [hard, hard]
prereqs: [answer-the-asked-question, expression-as-unit, engineered-shortcut-recognition]
unlocks: []
related: [vieta-root-aggregates, line-parabola-intersections, mean-as-total, method-selection-by-answer-form, desmos-decision-framework]
---

# Decomposing multi-concept composites (find the seam)

> **Provenance note (keep):** No reference source we studied teaches composite decomposition
> as its own skill — the one chapter positioned as a capstone turned out to cover engineered
> shortcuts instead, and other sources stay single-topic per chapter. This node is built from
> our own expert analysis plus the handful of genuine two-concept seams the sources do exhibit.
> Treat its structural claims about real-exam composite frequency and construction as
> **unverified-claim** until audited against official-style material and our bank; the
> pedagogy (seam-finding, intermediate-unknown bookkeeping) stands on its own.

## What it is
A composite item chains two or more topics so that the OUTPUT of one becomes the INPUT of the next: a geometry fact produces a length that seeds a quadratic; a function definition wraps a percent model; a line-meets-parabola setup resolves into a sum-of-roots read. No single topic skill answers the item — the tested ability is routing between skills and carrying an intermediate quantity across the boundary. We call that boundary the *seam*.

## Why it exists / why the SAT tests it
Single-topic mastery is cheap to fake with drilling; composition is not. Composites are the College Board's instrument for separating "knows each chapter" from "has a connected map." They live almost exclusively in the hard band (late Module 2 Hard) — and critically, **they are hard in LATENCY, not accuracy**: a student who knows both component topics will usually get the item right eventually. The cost of weak decomposition is 2–3 minutes on a 95-second budget. This is load-bearing for our Module 2 Hard calibration: *right-but-slow on composites is a diagnostic signal in its own right*, invisible to accuracy-only scoring.

## Mental model
**A composite is two easy problems wearing one trench coat.** The item is never "hard math" — it is ordinary math with a hidden hand-off. The expert's job is to find the seam (where topic A's output feeds topic B's input), split the item at the seam, and solve two small problems with one named courier between them. Panic comes from trying to see the whole item as one problem of an unknown type.

## Expert reasoning process
1. **Name the target's home topic first.** What kind of quantity is asked (a root sum? an area? a rate?) — that tells you the LAST link of the chain (and see [[answer-the-asked-question]]: composites are where target-drift is deadliest).
2. **Name the givens' home topics.** If they differ from the target's, a seam exists by construction.
3. **Find the seam: the quantity both topics can talk about.** It's usually a length, a coordinate, a solution-set property, or a total. Known load-bearing seams (from source evidence — a limited list, extend from bank analysis):
   - *line-meets-parabola → quadratic structure:* set the two expressions for y equal; "sum of intersection x-coordinates" becomes [[vieta-root-aggregates]] on the merged quadratic. Strip the graph language; see the quadratic immediately.
   - *geometry → quadratic:* a figure constraint (area, Pythagorean relation) produces the equation; the positive root survives ([[pythagorean-theorem-and-triples]], [[extraneous-solutions-non-reversible-moves]] discipline).
   - *function notation wrapping a percent/linear model:* f(t) = (initial)(multiplier)^t questions where the seam is translating notation into the model's anatomy ([[percent-as-multiplier]], [[interpret-linear-parameters]]).
   - *statistics → algebra:* an unknown value constrained by a stated mean; the seam is mean × count = total, or faster, the balance-point read ([[mean-as-total]]).
4. **Name the courier.** Give the intermediate quantity an explicit label on scratch paper ("r = radius = ?"). One written word buys back the working memory the second half of the problem needs. Unlabeled intermediates are how right-method students lose the thread.
5. **Solve stage A completely before opening stage B.** Interleaving the stages is the main latency sink — each context switch re-loads both problems.
6. **At the finish, climb back up the chain** to the originally asked quantity (composites double-plant the wrong-target trap: BOTH the stage-A output and the raw stage-B variable appear among the choices — **unverified-claim** on frequency, matches our bank's design guide).

## Misconceptions
- **monolith reading** — the belief that every problem has a single topic and this one is of a type "we never learned." Formed because school units are siloed, so cross-topic items literally have no home in the student's index. Produces blank-outs and skips on items whose components the student would each solve easily.
- **interleaved solving** — working both stages at once (starting the quadratic while still deriving the geometric constraint). Formed from the habit that one problem = one continuous computation. Doesn't usually produce wrong answers — it produces the 3-minute item, plus dropped-intermediate errors under load.
- **unlabeled-courier drift** — computing the intermediate correctly, then feeding the WRONG quantity into stage B (the diameter into a radius slot; a root into an x + something slot). Formed because the intermediate was held mentally rather than written; overlaps [[answer-the-asked-question]]'s target-drift but fires mid-problem.
- **seam-blindness on notation wrappers** — treating function notation as its own hard topic instead of a wrapper: f(x) = (a percent model) reads as "functions question, I'm bad at functions." Formed because notation anxiety masks the familiar model inside.

## Diagnostic indicators
- **Right answer, 2–3× median time, on items tagged as composites → the primary signal.** This student knows both topics and lacks decomposition; accuracy stats will say "no weakness," and only timing catches it. Our tutor should treat right-but-slow-on-composite as its own coachable event class.
- Wrong via stage-A output picked as the final answer, or raw stage-B variable picked → unlabeled-courier drift / wrong-target (distinguish by which intermediate was picked).
- Skipped or blank on composites while the same student is accurate on both component skills in isolation → monolith reading. Detectable from our per-skill accuracy vs composite-item performance split.
- Scratch work (or tutor conversation) shows both stages' algebra intermixed → interleaved solving.
- Says "we never learned this type" about an item whose components they've mastered → monolith reading, verbal form.

## Remediation pathways
- **monolith reading:** the trench-coat reveal — take one composite, draw a literal line at the seam, and have the student solve the two halves as separate items (they will). Then re-show the original. Repeat with 3–4 seams from the list above; the goal is transferring "find the seam" as a first move, not memorizing seam types.
- **interleaved solving:** enforce staged solving explicitly: "finish and box stage A's output before writing anything for stage B." A drill format that reveals the item one stage at a time trains the discipline mechanically.
- **unlabeled-courier drift:** the one-word-label habit (name the intermediate on paper). If drift persists, the load is upstream — check [[expression-as-unit]] (can they hold a compound as one object?) and shorten the chain before lengthening it.
- **seam-blindness on wrappers:** strip-the-wrapper drills: rewrite f(3) = … items without function notation, show they're percent/linear items, then re-dress them. Revisit [[function-as-io-machine]] only if the notation itself (input→output mapping) is broken.

## Mastery criteria
On a composite set at hard band: ≥80% accuracy AND median time within 1.5× the student's own hard-band single-topic median. Both conditions are required — accuracy alone certifies topic knowledge, not this skill. On explanation, the student can name the seam ("the area equation gives me the side, the side feeds the perimeter") before doing algebra.

## Difficulty ladder
Composite difficulty scales on three dials (our own construction model — **unverified-claim** as a description of official-exam engineering until audited):
- **Entry:** two topics, seam explicitly signposted in the stem ("use your answer to find…"; rare on real exams, common in teaching).
- **Mid:** two topics, seam unsignposted but the courier is a familiar quantity (a length, a total); wrapper composites (function notation over a model).
- **Hard:** seam quantity is itself abstract (a solution-set property, a coefficient); three-link chains; the wrong-target trap double-planted; hostile numbers pushing the [[desmos-decision-framework]] judgment call on whether to graph one stage.

## Teaching notes
- **Struggling:** don't teach this yet if either component topic is below mastery — composites remediate NOTHING upstream. Where components are solid, use only entry-level signposted composites and the trench-coat framing.
- **Average:** seam-finding as a taught first move (steps 1–3), the courier-labeling habit, staged-solving drills. Keep chains to two links.
- **Advanced:** unsignposted seams across all four seam families; introduce timing awareness ("this took you 160 seconds — where was the seam, and when did you find it?").
- **1500+:** pure latency coaching. Review their correct composites by clock; train the 15-second seam-scan as a deliberate opening act, and the strategic option of graphing one stage ([[desmos-decision-framework]]) when the seam is visual (intersections, vertices). This cohort's composite losses are pacing losses that cascade into rushed errors elsewhere in the module — frame it that way.
