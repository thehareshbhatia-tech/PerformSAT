---
id: ratio-part-whole-discipline
section: math
domain: problem-solving-data-analysis
skill: proportion-ratio
difficulty_span: [easy, hard]
prereqs: []
unlocks: [proportion-setup-template, scaling-laws-k-k2-k3]
related: [two-way-table-probability, percent-three-slots]
---

# Part-to-part vs. part-to-whole: the ratio setup decision

## What it is
A ratio a:b states the relative size of two quantities, and it can be read two
incompatible ways: as a comparison between two components (part:part) or as one
component's share of everything (part:whole). Before any arithmetic, you must decide
which comparison the question is actually making. A part:part ratio a:b implies a
whole of a+b (when those two parts exhaust the group), so the share fractions are
a/(a+b) and b/(a+b) — never a/b.

## Why it exists / why the SAT tests it
The SAT probes whether a student builds the reference group deliberately or grabs the
two visible numbers. Ratio items appear across the easy-to-medium band of both modules,
usually as one-step word problems, two-way-table reads, or "what fraction of the
total" stems. The four-way answer set {a/b, b/a, a/(a+b), b/(a+b)} is the standard
distractor architecture: every wrong reading has a seat waiting for it.

## Mental model
**Name the denominator before you touch the numerator.** Every ratio/fraction/
probability question is secretly a question about a reference group. Ask "out of
WHAT?" first; the answer is whatever group the question's selection or "of" clause
names — which may be a subset, the whole, or one of the two parts. Only after the
reference group is fixed do you go hunting for the count on top. A ratio written a:b
is two parts sitting side by side; the whole is offstage and must be constructed
(a+b) before any "of the total" question can be answered.

## Expert reasoning process
1. Read the question tail first: "what fraction of ___" / "if a ___ is chosen at
   random" — the noun in that clause IS the denominator.
2. Decide whether that noun is the whole group, one category, or one part of the
   ratio. If it's a subset, the denominator is the subset's total, not the grand total.
3. Construct the whole if needed: parts a and b exhaust the group → whole = a+b.
   Check the exhaustiveness assumption explicitly (three-part ratios exist).
4. Now place the numerator: the count satisfying the asked condition *within* the
   reference group.
5. Sanity gate: numerator counts a subset of the denominator's group, so it must be
   smaller. A "probability" above 1 means the setup is inverted.
6. Scale to real counts only at the end; keep the ratio reduced while reasoning.

## Misconceptions
- **ratio-read-as-fraction** — student uses a/b where a/(a+b) is needed (or vice
  versa) because colon notation LOOKS like a fraction, so the two visible numbers get
  slotted into numerator/denominator by reflex. Produces the a/b pick on share-of-whole
  stems. Test writers place a/b, b/a, a/(a+b), b/(a+b) as the four choices.
- **grand-total-denominator** — student always divides by the largest/most visible
  total because school probability drilled "favorable over TOTAL." When the selection
  clause restricts to a row, column, or category, this yields right-numerator/
  wrong-denominator fractions — the exact distractors two-way-table items carry.
- **parts-dont-exhaust-blindness** — student computes a/(a+b) shares when a third
  unmentioned category exists, or treats a 3-term ratio a:b:c as if only two parts
  mattered. Forms because the two-part template is over-practiced.
- **probability-over-one-acceptance** — student reports a fraction >1 without
  flinching; the numerator/denominator roles were never semantically anchored, so
  impossibility raises no alarm.

## Diagnostic indicators
- Picks a/b on a share-of-whole item (ratio-read-as-fraction): the chosen fraction's
  denominator equals the *other part*, not the whole.
- Picks the grand-total fraction on a restricted-selection item
  (grand-total-denominator): numerator correct, denominator = table grand total.
- Explains their answer starting with the numerator ("there are 12 red ones, so...")
  rather than the group — verbal signature of denominator-last processing.
- Fast wrong answers on easy ratio items but correct on explicit-fraction items:
  the notation, not the arithmetic, is the gap.

## Remediation pathways
- **ratio-read-as-fraction**: contrast pair — same stem asked twice, "red to blue"
  vs. "red out of all marbles," answers side by side. The moment of "these are
  different questions" is the fix. If it doesn't land, rebuild fraction meaning
  (part-of-a-group) before ratios.
- **grand-total-denominator**: have the student read the selection clause aloud and
  literally circle the group it names before looking at any number. Verbalizing
  de-randomizes number-grabbing.
- **parts-dont-exhaust-blindness**: one counterexample with a third category
  ("adults : children = 2:3 ... among the 60 attendees, 10 are staff") breaks the
  auto-sum habit.
- **probability-over-one-acceptance**: install the sanity gate as a mandatory final
  step; it costs two seconds and is self-explanatory once demonstrated.

## Mastery criteria
Student can (a) convert fluently among a:b, a/(a+b), and "a out of every a+b";
(b) state the denominator group in words before computing on any table/selection
item; (c) reject an impossible >1 setup unprompted. Evidence: consistent accuracy on
medium restricted-denominator table items plus at least one hard multi-category item,
with no a/b-for-share errors across a session.

## Difficulty ladder
- **easy**: reduce a ratio; read one part's share given a two-part ratio and a total.
- **medium**: restricted reference group ("of the students who chose X..."); ratio
  given, real count of one part given, find the other; three-term ratios.
- **hard**: partially known two-way table plus verbal multipliers ("4 times as many
  X as Y") requiring a small linear system, ending in a restricted-denominator
  probability — composes with [[two-way-table-probability]] and linear-systems
  machinery. Escalation is composition depth, not harder arithmetic.

## Teaching notes
- **Struggling**: physical framing — bags of marbles, literally two piles plus "the
  table they sit on" as the whole. Never introduce colon notation until "out of what?"
  is automatic with concrete counts.
- **Average**: drill the four-way answer-set pattern itself; show them the test's
  distractor architecture so wrong readings become recognizable objects.
- **Advanced**: three-term ratios, non-exhaustive parts, and ratio-bridging (two
  ratios sharing a middle quantity — rescale so the shared term matches, then read a
  combined three-term ratio).
- **1500+**: speed via denominator-first reading order — the question tail names the
  denominator, so start there; also train the "closest to" license: bar-graph ratio
  items without fine gridlines are meant to be estimated toward a clean reducible
  ratio (unverified-claim that estimation always suffices — verify against bank).
