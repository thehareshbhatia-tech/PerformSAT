# Math Distractor Forensics — wrong-answer archetypes reverse-engineered from worked solutions

Provenance: inferred from the answer-key corpus of math study source B (same sample
as solution-writing-craft.md). The author repeatedly warns about, or explicitly
refutes, specific wrong answers; from those refutations plus the structure of the
final "conversion" steps, the recurring distractor DESIGNS below can be
reverse-engineered. All archetypes are described generically in our own words —
no source items, numbers, or answer sets are reproduced. Each archetype should be
verified against official-style material and our own bank stats before the tutor
asserts it as fact (SCHEMA rule 7), then folded into graph misconception nodes.

Format per archetype:
- **Design** — how the test manufactures the wrong answer.
- **Signal** — what a student picking it most likely believes / did (diagnostic value).

## Cross-topic archetypes (appear in every domain)

### A1. Wrong-target (the intermediate-value trap)
- **Design:** the stem asks for a derived quantity (an expression's value, a sum of
  roots, a constant's product, a converted unit, "the OTHER variable"), and one
  distractor is exactly the solved-for intermediate variable. The most common
  distractor design in the corpus; worked solutions almost always end with an explicit
  conversion step because of it.
- **Signal:** math is intact; question-reading discipline is not. Student stops at the
  first satisfying number. Remediate with a "re-read the target before answering"
  habit, not content review.

### A2. Sign slip on a known rule
- **Design:** distractors are the correct value with one sign flipped: dropping the ±
  when square-rooting (often only the negative root appears among the choices),
  mis-distributing a minus across parentheses, sign of a vertex coordinate, sign in
  sum/product-of-roots formulas.
- **Signal:** procedural fluency with a mechanical fault, not a conceptual gap. High
  accuracy on same skill at easy band + this miss at medium band confirms it.

### A3. One-step-early termination
- **Design:** the choice equals the result after n−1 of the n required operations
  (e.g., found the slope but not the intercept, found the radius but the question
  wants area, found one leg but not the hypotenuse).
- **Signal:** student holds the method but loses the thread on multi-step items —
  usually a working-memory/pacing issue; drill multi-step chains, not the concept.

### A4. Formula neighbor
- **Design:** the choice is what you get by applying the adjacent formula from the
  same family: circumference vs area, diameter vs radius, mean vs median, slope vs
  its reciprocal, factor vs root (sign flip), midpoint vs distance.
- **Signal:** the student's retrieval is by surface association, not meaning.
  Remediate by re-deriving/visualizing the formula, not re-memorizing.

## Algebra & linear

### L1. Parallel/perpendicular swap
- **Design:** for a perpendicular-line item, one distractor uses the SAME slope, one
  uses the reciprocal WITHOUT negation, one the negation WITHOUT reciprocal. The
  full negative-reciprocal answer hides among its three partial applications.
- **Signal:** which partial the student picks tells you exactly which half of the
  rule they hold.

### L2. Rate-direction inversion
- **Design:** stems asking "change in x per change in y" (the inverse of slope) or
  defining y as cost-per-item rather than total-cost reward the student who answers
  with the ordinary slope/coefficient reading. Distractor = un-inverted rate.
- **Signal:** the student pattern-matches "coefficient = rate" without checking which
  variable is the per-unit axis. Interpretation gap, not computation.

### L3. Intercept misattribution
- **Design:** in modeling items, the y-intercept's meaning is tied to the function's
  OUTPUT variable; a distractor re-labels it as the more salient noun in the story
  (or the x-intercept's meaning). Also: intercept read from an equation not yet in
  isolated form.
- **Signal:** student maps numbers to story slots by salience, not by variable
  definitions. Ask them to say aloud what the output variable measures.

### L4. Systems solution-count confusion
- **Design:** no-solution requires matched coefficients with DIFFERENT constants;
  infinitely-many requires everything matched. Distractors give the constant that
  makes the system have infinitely many when no-solution was asked, and vice versa;
  or the answer choice where coefficients merely CAN'T be matched.
- **Signal:** student memorized "make them look alike" without the constants clause.
  A contrast-pair (same coefficients, different vs equal constants) fixes it.

### L5. Deleted/phantom root
- **Design:** dividing both sides by a variable expression silently discards a root
  (distractor: "one fewer solutions than truth"); squaring both sides manufactures an
  extraneous one (distractor: the extraneous root, or "both roots" when only one
  survives a positivity constraint).
- **Signal:** picking the extraneous root = never checks against the original
  equation/domain; picking the reduced count = solves by cancellation reflexively.

## Percent & exponential

### P1. Wrong percent base
- **Design:** percent-change items offer the value computed against the NEW total
  instead of the original (or vice versa); successive-percent items offer the sum of
  the percents instead of the compounded factor.
- **Signal:** student treats percent as an absolute quantity, not an operator on a
  stated base. Ask "percent OF WHAT?" — if they can't answer instantly, it's this.

### P2. Factor/percent conflation
- **Design:** a multiplier like 0.88 is offered as "88% decrease"; "increased by k%"
  is rendered as factor k instead of 1 + k/100; "X% more than" rendered as X% OF.
- **Signal:** the student's mental model of percent lacks the 1± bridge between
  factors and changes. High-yield single fix: teach the multiplier line (decrease ↔
  factor below 1, increase ↔ factor above 1).

### E1. Time-origin off-by-one
- **Design:** exponential models where the sequence starts at period 1 vs period 0,
  or where the given data point is one period AFTER the model's initial value.
  Distractor = the model anchored on the wrong year/step (initial value one growth
  factor off).
- **Signal:** student anchors on the first number seen rather than asking "what is
  t = 0?" — a set-up discipline issue specific to modeling.

### E2. Growth-rate per wrong interval
- **Design:** models of form base^(t/k) where k rescales the time unit; distractors
  use the per-1-unit rate as the per-k-unit rate or invert k.
- **Signal:** student reads the exponent structurally ("there's a divide by k") but
  can't verbalize "the factor applies once every k units." Verbalization is the fix.

## Quadratics & functions

### Q1. Discriminant condition mismatch
- **Design:** the three conditions (two real / exactly one / none) are permuted:
  asked for exactly-one, a distractor satisfies greater-than-zero, etc. Also boundary
  values included/excluded wrongly when a strict inequality is involved.
- **Signal:** student memorized "b²−4ac" but not the mapping to root counts; picks
  by half-remembered direction. Contrast triple (same equation, three constants)
  remediates.

### Q2. Vertex-form sign inversion
- **Design:** vertex of (x − h)² form read as −h; horizontal translation of
  f(x + c) taken as rightward; the "find the x that zeroes the inside" trick
  inverted.
- **Signal:** universal inside-the-function sign confusion — the single most
  predictable function-transformation miss. Student applies outside-the-function
  intuition inside the argument.

### Q3. Root/factor sign flip
- **Design:** factored form offers roots with the signs of the factors' constants
  (x + a → root a). Also sum-of-roots offered with wrong sign (−b/a vs b/a).
- **Signal:** mechanical transcription error class; distinguishable from Q1/Q2
  because it appears even on one-step items.

### F1. f(g) composition/order inversion
- **Design:** nested evaluation offers the value computed in the reverse order, or
  f(a) confused with solving f(x) = a (input↔output swap).
- **Signal:** input/output arrow direction is unstable. Students who miss these
  often also misread function tables/graphs in the same direction.

## Geometry & trig

### G1. Special-right-triangle side misassignment
- **Design:** 45–45–90 and 30–60–90 items where the GIVEN side is the hypotenuse but
  the distractor multiplies as if it were a leg (or vice versa) — i.e., √2/√3 factors
  applied in the wrong direction.
- **Signal:** ratio memorized as "multiply by √2" without which-side anchoring.
  Diagnose by asking which side is longest; remediate with the ratio triangle drawn.

### G2. Similarity correspondence scramble
- **Design:** ratio set up with vertices out of correspondence order (long/short vs
  short/long, or sides from the two triangles mixed), producing a reciprocal or
  mismatched ratio among the choices. Also: congruence claimed from AA (which only
  gives similarity) — choices exploit similar-vs-congruent criteria confusion.
- **Signal:** which wrong ratio was picked reveals whether the student tracks
  correspondence by letter order, by size intuition, or not at all.

### G3. Radius/diameter and half/double slips
- **Design:** circle items give a diameter where the formula needs a radius (or the
  equation's r² is offered un-square-rooted); inscribed-vs-central angle items offer
  the un-halved or un-doubled angle.
- **Signal:** one-step conversion habitually skipped under load — a checklist habit
  fix, not a knowledge fix.

### G4. Double-counted overlap
- **Design:** composite lengths/areas where two measured pieces share a segment or
  region; the distractor is the plain sum (overlap counted twice) or the
  over-subtracted variant.
- **Signal:** student computes on pieces without drawing; picking the plain sum means
  the figure was never sketched. Remediation: force the sketch.

### T1. Complement/quadrant trig confusion
- **Design:** cofunction items (sine of an angle = cosine of its complement) offer
  the uncomplemented angle; unit-circle items with an obtuse/reflex angle offer the
  reference-angle value with the wrong sign.
- **Signal:** picking wrong-sign values = no quadrant image; picking uncomplemented
  angle = identity memorized without the right-triangle picture.

## Probability, statistics & sampling

### S1. Wrong denominator (conditional-probability table trap)
- **Design:** two-way-table items where the four answer choices are literally the
  four possible denominators (row total, column total, other row/column, grand
  total). The choice picked is a direct readout of which population the student
  conditioned on.
- **Signal:** the highest-diagnostic-value distractor family in the corpus: the
  picked choice tells you exactly the conditioning error. Remediate with "out of
  WHICH group?" restating before computing.

### S2. Mean/median coupling fallacy
- **Design:** must-be-true items offering "higher mean → higher median" (or → higher
  max, or box-plot → mean claims). Also: adding an extreme value claimed to move the
  median, or scaling claimed to break relative order.
- **Signal:** student treats center measures as interchangeable summaries. Fix with a
  two-dataset counterexample pair, which is exactly the reasoning these solutions model.

### S3. Spread-by-values instead of spread-by-shape
- **Design:** standard-deviation comparison items where a distractor rewards ranking
  by the SIZE of the values instead of their dispersion, or by range when clustering
  differs.
- **Signal:** "SD = how big the numbers are" misconception; visual clustering
  comparison remediates.

### S4. Over-generalization of a sample
- **Design:** survey items where distractors extend conclusions to a broader
  population than was sampled (all employees vs the sampled subgroup, a town vs
  self-selected mail-in respondents), or claim the sample statistic IS the population
  parameter ("must be true" instead of "plausible").
- **Signal:** picking the broadest population = no concept that generalization is
  bounded by the sampling frame; picking the "is exactly" option = no concept of
  estimate vs parameter. These two picks separate cleanly.

### S5. Margin-of-error and method misreads
- **Design:** distractors claim a bigger margin means more respondents (inverted:
  larger samples shrink margins), that the interval bounds are certain, or that a
  small-but-random sample invalidates estimation (vs a flawed method, which does).
- **Signal:** the student's pick separates "MoE = sample size" confusion from
  "interval = certainty" confusion from "small = biased" confusion — three distinct
  root causes worth distinct remediation nodes.

### S6. Causation/assignment leap
- **Design:** experiment-design items where distractors allow self-selected groups or
  convenience assignment to support causal claims; correlational designs offered as
  proof of causation.
- **Signal:** student evaluates conclusions by plausibility of the story, not by the
  randomization structure. Teach the two-question gate (random selection? random
  assignment?) as a mechanical check.

## Word problems / modeling

### W1. Variable-role swap
- **Design:** two-variable stories (two item types, two rates, length vs width)
  where a distractor solves with the roles exchanged, or answers with the OTHER
  variable (overlaps A1). Choices often include both variables' values.
- **Signal:** student skips the "define x = " step; presence of both values among
  choices makes this cheaply detectable.

### W2. Rate-combination error
- **Design:** work-rate/mixing items where the distractor adds TIMES instead of rates
  (or averages rates), or concentration items ignoring that adding pure solution
  changes the total volume too.
- **Signal:** additive intuition applied to non-additive quantities — a deep
  proportional-reasoning gap, worth a prereq-node visit rather than a quick tip.

### W3. Per-unit vs total confusion
- **Design:** stems where a coefficient times a variable is a TOTAL and a distractor
  interprets the coefficient as the per-unit amount of the wrong unit (or vice
  versa); unit-mismatch distractors (minutes vs hours) computed correctly in the
  wrong unit.
- **Signal:** dimensional bookkeeping absent. Students who miss these benefit from
  a units-annotation habit more than from re-teaching the topic.

## Meta-observations for our misconception index

1. **Distractor = one legal-looking step away.** Nearly every archetype is the
   correct procedure with exactly one localized fault (a sign, a base, a
   denominator, a direction). Our item authoring should generate distractors by
   fault-injection into the correct solution path, one fault per distractor, so
   each wrong choice stays diagnostic.
2. **The picked distractor is evidence, not noise.** The strongest designs (S1
   denominators, L1 partial-rules, S4/S5 statements) make each wrong choice
   correspond to a DIFFERENT root cause. Our tutor should exploit this: choice →
   misconception-id lookup before generating an explanation.
3. **Grid-ins can't use distractors, so their traps move upstream** — into deleted
   roots, wrong targets, and off-by-one time origins. Diagnosis there must rely on
   the student's numeric answer pattern (e.g., answer equals the intermediate value,
   or the negated value) — worth storing expected-wrong-values with each grid-in item.
4. **"Must be true" stems are misconception farms.** Statement-evaluation items are
   where belief-level errors (S2, S4, S5) surface most cleanly; they deserve
   disproportionate representation in our diagnostic pool.
