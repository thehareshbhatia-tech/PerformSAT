---
id: percent-three-slots
section: math
domain: problem-solving-data-analysis
skill: percent-of-a-whole, percent-of-a-number
difficulty_span: [easy, medium]
prereqs: []
unlocks: [percent-as-multiplier]
related: [ratio-part-whole-discipline]
---

# One percent sentence, three unknowns

## What it is
Every static percent situation contains exactly three quantities: a base (the
reference amount — whatever follows "of"), a percent (the relative share), and an
amount (the actual quantity, in the base's units). They are bound by one relation:
amount = (percent as a decimal) × base. Know any two, compute the third — so there
are exactly three question shapes, not thirty. A percent itself is just a fraction
whose denominator has been normalized to 100; the % sign behaves like "×0.01."

## Why it exists / why the SAT tests it
Percent stems appear constantly in PSDA, usually wrapped in tables, surveys, and
price contexts, in the easy-to-medium band. The exam's real probe is base
identification: two of the three shapes feel natural ("what is 30% of 80?", "12 is
what percent of 60?"), but the third — "12 is 30% of what?" — feels backwards, like
being handed an answer and asked for its question. Students with three separate
memorized procedures break on that shape; students with one relation don't.

## Mental model
**Normalize every percent clause into the canonical sentence: "[amount] is [P]
percent of [base]," then transcribe: amount = p·base.** "Of" marks the base; "is"
marks the amount; solve for whichever letter is missing. One equation, three
scenarios. The proportion form P/100 = part/whole is a legitimate slower alternative
for students who prefer it — consistency of method beats optimality.

## Expert reasoning process
1. Find the "of"-anchor: the quantity after "of" (or the group a percentage is
   quoted against) is the base. This is the whole decision.
2. Rewrite the stem as the canonical sentence, leaving a blank for the unknown slot.
3. Transcribe to amount = p·base with p in decimal form (÷100, point left two
   places — including awkward cases: 0.6% → 0.006, 210% → 2.1).
4. Solve for the missing letter; for find-the-base, that's one division.
5. Plausibility gate: should the answer exceed the base / exceed 100%? A part
   smaller than its base must give a percent under 100. Catches inverted setups in
   seconds.
6. In tables: the quoted percentage's base may be a row or column subset — the same
   restricted-reference-group discipline as [[ratio-part-whole-discipline]].

## Misconceptions
- **find-the-base-inversion** — on "12 is 30% of what?" the student computes
  0.30 × 12 because the only drilled move is "multiply the two numbers you see."
  Forms because school percent work overwhelmingly presents the forward shape;
  the backward shape has no procedure, so the forward one fires. Distractor: the
  product where the quotient belongs (and vice versa on forward shapes).
- **decimal-point-slips** — 0.6% → 0.06, or 210% → 0.21. Purely mechanical
  conversion habit ("move the point twice") applied without noticing sub-1% or
  over-100% cases. The test deliberately uses fractional and over-100 percents to
  exploit it.
- **base-misidentification** — the percent is applied to the wrong quantity because
  the student never locates the "of"-anchor; especially in tables where the base is
  a subset ("of the students who said yes...") rather than the grand total.
- **percent-of-percent-flattening** — for nested shares (40% of the class, 20% of
  those), adding or averaging the percents instead of multiplying the shares. Forms
  from treating percents as counts rather than as proportions of stated bases.

## Diagnostic indicators
- On find-the-base items, answer = product of the two given numbers
  (find-the-base-inversion) — the signature is an answer SMALLER than the given
  amount when the percent is under 100.
- Answers off by exactly ×10 or ×100 (decimal slips), concentrated on stems with
  sub-1% or over-100% values.
- Table items: right percent arithmetic against the wrong total
  (base-misidentification) — same evidence pattern as the grand-total-denominator
  error in [[ratio-part-whole-discipline]].
- Nested-share items: answer equals the sum or average of the two percents
  (flattening).

## Remediation pathways
- **find-the-base-inversion**: teach the canonical-sentence rewrite until it's
  reflex; the backward shape becomes routine when it's the same equation with a
  different blank. Contrast pair: "what is 30% of 40?" vs "12 is 30% of what?" —
  same numbers, different blanks.
- **decimal-slips**: short conversion micro-drill including exactly the trap cases
  (0.4%, 125%, 100%); automate before word problems.
- **base-misidentification**: circle-the-"of" ritual; for tables, revisit
  [[ratio-part-whole-discipline]] restricted-denominator work — it's the same skill.
- **flattening**: pick-100 concretization — assume 100 people, walk the nested
  shares as actual counts (40 people, then 8 people); the multiplication becomes
  visible.

## Mastery criteria
Student solves all three shapes — including find-the-base — with one method and can
say which quantity is the base and why; converts awkward percents (sub-1%,
over-100%) without slips; runs the over/under-100% plausibility gate unprompted.
Proof: clean sweep across a mixed set of the three shapes at medium difficulty,
including one table-based restricted-base item.

## Difficulty ladder
- **easy**: forward percent-of with clean numbers; percent from two counts.
- **medium**: find-the-base; awkward percents; percentages quoted against subsets in
  two-way tables; nested shares.
- **hard end (composed)**: the static relation is rarely hard alone — hardness comes
  from feeding it into change over time ([[percent-as-multiplier]] and beyond) or
  wrapping it in multi-step table logic. This node is the floor of the percent
  spine: multiplier → rebasing → exponential models all stand on it.

## Teaching notes
- **Struggling**: percent as "out of 100" with a 10×10 grid picture; build the three
  shapes from counting shaded squares before any equation. Pick-100 is the universal
  fallback tool — legitimize it.
- **Average**: install the canonical sentence and drill slot-identification (which
  quantity is the base?) as its own exercise, separate from solving.
- **Advanced**: fraction shortcuts (25% → 1/4, 80% → 4/5) for mental speed, with the
  note that Desmos makes the decimal path equally safe — teach both, let speed
  decide; nested shares and subset bases.
- **1500+**: this node should be invisible — verify it's automatic, then move up the
  spine. The only 1500+ content here is the plausibility gate as a two-second
  audit that survives into every harder percent context.
