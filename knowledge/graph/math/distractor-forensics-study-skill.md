---
id: distractor-forensics-study-skill
section: math
domain: cross-cutting
skill: cross.distractor_literacy (meta-skill; a study/review skill and an in-test reading skill across all MC items)
difficulty_span: [medium, hard]
prereqs: [answer-the-asked-question]
unlocks: [method-selection-by-answer-form]
related: [engineered-shortcut-recognition, magnitude-sanity-checks, composite-decomposition]
---

# Reading wrong answers as designed objects (distractor forensics)

## What it is
SAT wrong answers are not random plausible numbers — nearly every distractor is the correct solution path with exactly ONE localized fault injected: a flipped sign, a wrong base, a skipped final step, the neighboring formula, the wrong denominator. Distractor forensics is the skill of reading choices as engineered objects: during review, to diagnose precisely what went wrong; during the test, to infer what concept is being tested and which mistakes the writer expects.

## Why it exists / why the SAT tests it
The exam doesn't test this skill directly — it's a lever we teach because the test's own construction makes it powerful. Standardized items must make each wrong choice attractive to a REAL error population, so each distractor encodes a specific mistake. Consequences: (1) the choice a student picks is evidence, not noise — it identifies their fault with near-surgical precision; (2) a choice set read as a family reveals the tested concept and its trap before any solving; (3) a student's own computed answer landing on a "designed" wrong value is a self-check trigger.

## Mental model
**Every wrong choice is a confession the test writer planted for somebody else.** The four choices are typically: the answer, and three one-fault mutants of the answer's solution path. Recurring mutant archetypes to know by name:
- *Wrong target* — the intermediate value (the #1 archetype exam-wide; see [[answer-the-asked-question]]).
- *One-step-early* — the result after n−1 of n operations (radius when area was asked).
- *Sign mutant* — same magnitude, one sign flipped (dropped ±, mis-distributed minus, vertex-form h read as −h).
- *Formula neighbor* — the adjacent formula from the same family (circumference for area, median for mean, reciprocal slope).
- *Wrong base/denominator* — percent computed on the new total; the two-way-table choice set that is literally the four candidate denominators.
- *Grammar corruption* — on translation items, the equation with one relation reversed (3A = B for "A is 3 times B", k − B for "k less than B").
The strongest items make each wrong choice a DIFFERENT root cause — which is exactly what makes the picked choice diagnostic.

## Expert reasoning process
**In review (the study skill — where most of the value lives):**
1. For every missed item, don't stop at "the right answer is C." Reconstruct the one-fault path that manufactures YOUR pick: which single step, mutated, lands on it?
2. Name the fault in transferable words ("I conditioned on the column total instead of the row total"), not item-specific ones ("I should have used 40").
3. Log the fault class. Three misses sharing a fault class = one weakness, not three — this collapses a scary error list into a short fix list.
4. For items answered correctly but slowly, still scan the distractors: which trap was set? Did you wobble toward it?

**In test (the reading skill — used sparingly):**
5. When stuck, read the choice set as a family: what one quantity do they differ in? That difference names the decision the item hinges on (and often prunes to two — see [[method-selection-by-answer-form]]).
6. When your computed value matches a choice, ask the one-fault question in reverse: is my value the answer, or a mutant? (An intermediate-looking match is a warning.)
7. Never let forensics replace solving on a clean item — it is a tiebreaker and a self-check, not a primary method.

## Misconceptions
- **wrong-equals-random** — the belief that distractors are arbitrary, so a miss means "I'm bad at this topic" rather than "I made fault X." Formed because school tests often DO use casual distractors. Produces topic-level re-studying when a single-habit fix was needed — the most wasteful remediation pattern in SAT prep.
- **review-as-verdict-checking** — reviewing by reading the correct solution and nodding. Formed because it feels like studying. The student learns the item, not their fault; the same fault fires next week on new numbers.
- **forensics-as-oracle (overcorrection)** — trying to deduce answers from choice patterns alone ("C looks like the designed answer") instead of solving. Formed after the skill first pays off. The exam's writers are aware of meta-gaming; choice-position and choice-shape hunches are noise. The legitimate in-test uses are pruning, self-checking, and concept identification only.
- **one-fault-blindness on grid-ins** — assuming no-choices means no-traps. Grid-in traps move upstream into the work itself (extraneous roots, wrong targets, off-by-one time origins); the forensic habit still applies to one's own answer ("is this value a known mutant of the true answer?").

## Diagnostic indicators
- (For the tutor's own inference engine:) the picked distractor maps to a fault class — our items store per-choice fault tags precisely so choice → root-cause lookup precedes explanation generation. A student's fault-class HISTOGRAM across sessions is the deep diagnostic: sign mutants clustering says mechanical hygiene; wrong-target clustering says reading discipline; formula neighbors say retrieval-by-association.
- Student re-misses the same fault class on fresh items after "reviewing" → review-as-verdict-checking.
- Student describes misses only in topic words ("I'm bad at circles") never in fault words → wrong-equals-random.
- Answer-changing toward distractors on items they'd solved correctly, or talk of "which choice looks designed" → forensics-as-oracle.

## Remediation pathways
- **wrong-equals-random:** the reveal — take one of THEIR missed items and derive all three distractors from the solution path live, one fault each. Once they see wrong answers being manufactured, the belief dies in one session.
- **review-as-verdict-checking:** replace their review protocol with the fault-naming ritual (steps 1–3 above); require the transferable-words formulation. Our review UI should ask "which step produced the choice you picked?" before showing the explanation.
- **forensics-as-oracle:** boundary-setting: list the three legitimate in-test uses; show one item where the "designed-looking" choice is wrong. If pruning judgment is weak, route to [[method-selection-by-answer-form]].
- **one-fault-blindness on grid-ins:** teach the self-audit question on grid-ins ("is my value an intermediate? a sign mutant?") — pairs with [[magnitude-sanity-checks]] as a final-beat habit.

## Mastery criteria
Given any missed item, the student can name the injected fault behind their pick in transferable words within a minute, unaided, for 9 of 10 misses; their review notes show fault classes, not topic labels; and longitudinally, repeat rates within a fault class decline (the entire point). In-test: demonstrable pruning on ≥2 items per module without any oracle-style guessing.

## Difficulty ladder
- **Medium:** single-fault archetypes on single-topic items (sign mutants, one-step-early, wrong base); naming faults with the archetype list in hand.
- **Hard:** items where every choice is a distinct root cause (table-denominator sets, partial-rule sets like the perpendicular-slope family); composites where the fault could live in either stage ([[composite-decomposition]]); shortcut-residue distractors (the unsquared coefficient, the flipped Vieta sign — see [[engineered-shortcut-recognition]]); grid-in self-forensics with no choice set at all.

## Teaching notes
- **Struggling:** don't teach the full archetype taxonomy — it overwhelms. Teach ONE archetype (wrong target) until they spot it reliably, then add sign mutants. Review ritual in its simplest form: "which step made your answer?"
- **Average:** the six-archetype list as a nameable toolkit; the fault-histogram view of their own history ("your last 10 misses: 6 sign mutants") as motivation for hygiene habits.
- **Advanced:** in-test uses (pruning, self-check triggers) with the oracle boundary; grid-in self-audit.
- **1500+:** their misses are rare, so every one is precious — full forensic autopsy per miss, plus wobble-analysis on slow-but-correct items (which distractor cost them 20 seconds of doubt, and why was it built to?). At this level the skill inverts into item-writer empathy: predicting the trap from the stem before seeing the choices.
