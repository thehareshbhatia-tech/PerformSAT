# Raw notes — Math source A, Ch. 1 "Linear Relationships" (Algebra domain entry point)

Source studied: math-orange, chapter 1 (book pp. 23–41): instruction with embedded
drills, per-section practice, recap, additional problems, answer key. Understanding-only
extraction; no wording, scenarios, or items retained.

## The chapter's core bet

Linearity is taught as a *lived intuition formalized*, not as y = mx + b. The authors
open by asserting most students already understand linear relationships from everyday
proportional experience (doubling hours doubles pay) and only lack the notation. Graphs,
the word "slope", and slope-intercept form are deliberately DEFERRED to the next chapter;
this chapter builds the quantity-relationship layer first. That inversion (relationship →
expression → equation → function notation → only then geometry) is the chapter's biggest
transferable design idea.

## Concepts taught (candidate nodes)

- `linear-relationship-intuition` — two quantities are linearly related when one changes
  by a fixed amount for each unit change in the other. First met as common sense, only
  later named.
- `linear-cost-anatomy` — one anchor scenario (three pricing schemes for the same kind
  of purchase) exposes the three structural cases: constant-only (flat fee, usage
  irrelevant), rate-only (pure per-unit), and rate + constant (per-unit atop an entry
  fee). Every linear model is one of these three; the general case is
  total = rate × count + starting amount. This "verbal slope-intercept" is stated as a
  words-formula BEFORE any symbols, and the chapter recap still leads with it.
- `linear-expression-building` — translate a start-plus-repeated-change situation into
  start + rate·n (or rate·n alone). Taught via pattern tables: rows show count 0, 1, 2,
  …, n with the computation left unevaluated (e.g., start + rate·(2)) so the shape of
  the pattern is visible and the nth row generalizes itself. Powerful visual: the
  variable row is just "the pattern with n where the count goes".
- `term-order-irrelevance` — start + rate·n and rate·n + start are the same expression
  (commutativity); convention puts the variable term first but meaning is unchanged.
  Explicitly taught because form-mismatch with answer choices scares students.
- `meaningful-variable-letters` — when authoring your own equation, pick letters that
  echo the quantities (s for a speed, w for weeks); reserving x/y for real-world models
  invites losing track of what each letter denotes. Small habit, real error reduction.
- `expression-to-equation` — an equation is an expression pinned to a total via "=".
  Phrase-to-symbol translation rule: the equals sign goes where the "is/results
  in/total" phrase sits; everything after that phrase becomes the other side.
- `solve-forward-vs-solve-backward` — same model, two question directions: given the
  input, evaluate (plug into the expression); given the total, substitute it for the
  output variable and solve for the input. The backward direction is framed as
  substitution into a *different* slot, reusing ch. 0 skills unchanged.
- `negative-rate-modeling` — decreasing quantities (descent, drainage, depreciation)
  subtract the change: start − rate·t. Decision aid: sanity-check the direction of
  change in the story, not the words ("loses", "empties", "depreciates" ⇒ the total must
  shrink as t grows).
- `four-slot-schema` — a linear equation in output = rate·input + constant form has four
  slots (output value, input value, rate, constant); any single unknown slot is
  recoverable from the other three. Generalizes "solve for x" into "solve for whichever
  slot is missing" — including the rate or the constant (parameter-finding), which is
  where the SAT actually lives.
- `function-notation-io` — functions as the input→output rephrasing of the same
  equations: name(input) = expression. The notation names the output's dependence;
  evaluating means replacing EVERY instance of the input placeholder. Key readings:
  f(a) is "the output when input is a"; later tied to "the y-value at x = a" as the
  bridge to graphs (next chapter).
- `function-value-as-equation` — being told f(a) = v is information about BOTH slots:
  substitute a for the input and v for the whole function expression, then solve for
  whatever parameter remains. Two-stage items (use f(a)=v to find a constant, then
  evaluate f elsewhere) are the natural hard version.
- `find-input-from-output` — inverse evaluation: set the defining expression equal to
  the given output and solve. Same backward-solving muscle as
  solve-forward-vs-solve-backward, now in function clothes.

## Teaching philosophy observed

- **Concrete anchor → words-formula → symbols → table check → test items.** Each new
  layer re-derives the previous one; nothing is introduced as notation-first.
- **Narrative continuity:** one running cast/scenario carries across sections (the same
  person's speed model becomes the equation example, then the function example), so
  each abstraction visibly re-describes a known situation instead of resetting context.
- **Embedded SkillDrills** (quick 5–24 item fluency bursts with directions like "write
  the expression" / "evaluate these functions") appear mid-instruction at the moment the
  micro-skill lands, distinct from end-of-section SAT-style practice problems. Two-tier
  practice: fluency reps first, test-shaped application second, mixed
  "additional problems" at chapter end, all keyed. The drill sets even reuse the SAME
  scenario stems across sections with the question upgraded (write the expression →
  now write the equation and solve), making the expression→equation progression felt.
- **Notes blocks after solutions** carry the misconception talk (why the tempting
  reading is wrong, what irrelevant info was included, why form differences don't
  matter) — separating "how to do it" from "how not to be fooled". Good structural
  separation for our tutor: solution steps vs. trap commentary are different content
  types.
- **Recap = compressed re-teach** (the words-formula, expression vs equation, letter
  choice, the four-slot schema, function notation semantics incl. the times-x warning),
  not a formula sheet. Reads as "what must survive in memory".
- Answer keys give bare answers (letter/value only) — reflection is pushed back into
  the worked-solution culture, not the key.

## Expert reasoning patterns (generalized)

1. **Identify the two coupled quantities and the direction of change first** — before
   any algebra, ask: what's the starting amount, what changes per unit, does it grow or
   shrink. Those three answers ARE the model.
2. **Build, don't retrieve:** experts construct the expression from the pattern (start,
   then repeated change) instead of pattern-matching to memorized forms; the table trick
   (leave rows uncomputed) is the self-teaching version.
3. **Slot diagnosis for any linear item:** name the four slots, mark which are given,
   solve for the missing one. Parameter-finding items stop feeling special.
4. **Function notation triage:** on seeing name(number), first decide evaluate-forward,
   solve-backward, or parameter-find — the three shapes cover the whole item class.
   Replace *every* instance of the input variable when substituting.
5. **Expect and ignore decoy information:** word problems sometimes include quantities
   the model never uses; using every number is NOT a validity check. (The authors state
   this happens on real word problems but rarely on symbolic ones — mark
   **unverified-claim** for frequency.)
6. **Units/timeframe reconciliation:** when two rates act at once (inflow and outflow,
   or a rate given per week over a months-long window), net them into one rate on one
   time unit before writing the model. The hard chapter-end items live here.
7. Calculator stance: the authors' only note here is "don't fear decimals — money-like
   divisions are mental" and that such items can appear with or without calculator
   access. No graphing strategy yet (graphs don't exist until ch. 2). For our product:
   Desmos makes forward-evaluation trivial (define the function, read the value) and
   backward-solving one-line (plot both sides or use a table), so the tutor should teach
   the MODELING as the skill and position Desmos as the arithmetic executor + the
   pattern-table verifier; a student who can't write the model gets no help from Desmos.

## Misconceptions targeted (and why students hold them)

- **misconception: function-notation-as-multiplication** — reading name(3) as name × 3.
  Forms because parentheses have meant multiplication for the student's entire prior
  math life; this is their first postfix-operator syntax. The book flags it repeatedly
  (first exposure, solution notes, recap) — treat as a top-tier diagnostic. Cue for the
  test's benefit-of-doubt: the word "function" in the stem signals the notation.
- **misconception: rate/constant slot-swap** — writing rate as the constant and vice
  versa when both are given as letters (which-letter-multiplies-the-variable
  confusion). Exploited by answer sets that enumerate all slot arrangements. Forms
  because students memorize "mx + b" as shapes rather than meanings (per-unit change vs
  amount at zero).
- **misconception: term-order anxiety** — believing constant-first vs variable-first
  changes the relationship, so the "right" answer looks wrong. Forms from
  pattern-matching to the memorized form; cured by commutativity + meaning.
- **misconception: sign-of-change flip** — adding the change for a decreasing quantity
  (or subtracting for increasing). Forms because story verbs ("gains altitude",
  "empties") get skimmed; the fix is a direction sanity-check against the story.
- **misconception: must-use-every-number** — treating an unused given as proof of error,
  or force-fitting the decoy into the model. Forms because school problems are
  minimally specified; real test items sometimes aren't.
- **misconception: f(a)=v read as one datum** — students substitute a but don't know
  what to do with v (or set v as the input). Forms because "the value of the function"
  is an abstract object the first time; fix is the equals-the-whole-expression framing.
- **misconception: rate-per-wrong-unit** — applying a weekly rate to a month count or
  netting two opposing rates incorrectly. Forms from skipping unit reconciliation; this
  is the book's implicit hard-tier trap in inventory/net-change items.

## SAT patterns claimed (verify before trusting)

- Linear-model items appear in both calculator and no-calculator contexts; decimals
  (money) are common and intended to be non-scary. **unverified-claim** (also note:
  current Digital SAT has Desmos throughout, so the calc/no-calc split is legacy —
  adjust when synthesizing).
- Word problems occasionally include deliberately unused information; symbolic problems
  almost never do. **unverified-claim**.
- Answer choices for write-the-model items systematically enumerate slot-swaps and sign
  flips (rate↔constant, +rate↔−rate, rate·(n±1) off-by-one variants). Seen throughout
  this chapter's practice sets; matches our bank's distractor style. **unverified-claim**
  as an official-design rule.
- Parameter-finding via one known input/output pair (find b, then evaluate elsewhere) is
  presented as a standard real-test two-stepper. **unverified-claim**.
- Grid-in (student-produced response) answers can't be negative — used to justify why
  drill sets allow negatives but the real grid-ins won't. **unverified-claim**; worth
  encoding as an answer-sanity heuristic.

## Trap taxonomy evidence from drills/problems (design patterns only)

- Distractor = value of an intermediate quantity (the lone variable when a composite was
  asked; the per-unit rate when the total was asked).
- Distractor = correct structure with swapped slots or flipped sign (see misconceptions).
- Distractor = rate applied to the wrong count (n vs n−1 boundary in "each successive
  floor/step" stems; off-by-one in staged growth).
- Two-rate stems (simultaneous add/remove per period) where the trap is modeling only
  one of the rates; correct answer nets them.
- Linear-interpolation stems (two data points imply the constant per-period change;
  extrapolate to a third point) — linearity assumed by the story ("increases by the same
  amount each year"), not stated as an equation.
- Depreciation stems: total lifespan + end value force the student to derive the
  negative rate before evaluating at an intermediate time.
- Function abstraction escalators: evaluate f at a negative input (sign handling);
  compute f(p) − f(q) (two evaluations, subtraction order); nested constants
  (f(x) = c·x + k with c or k unknown).

## Prerequisite edges implied

- ch. 0 cluster (balance principle, peeling, substitution, combine-like-terms) →
  every node here.
- linear-relationship-intuition → linear-cost-anatomy → linear-expression-building →
  expression-to-equation → solve-forward-vs-solve-backward → four-slot-schema
- four-slot-schema + expression-to-equation → function-notation-io →
  function-value-as-equation, find-input-from-output
- This chapter (esp. linear-cost-anatomy, four-slot-schema) → slope-intercept-form
  chapter (source ch. 2), which finally geometrizes rate as slope and constant as
  y-intercept. Function-notation-io → graphs-of-functions ("f(a) is the y-value at
  x = a" is planted here as the forward pointer).

## Difficulty escalation within the topic

pure-rate one-step evaluate → rate+constant write-the-expression (choices enumerate
structures) → write-the-equation and evaluate forward → given total, solve backward →
negative rates → parameter-finding from one (input, output) pair → two-stage
(find parameter, then evaluate elsewhere) → composite/net rates with unit
reconciliation → data-implied linearity (interpolate/extrapolate from two points).
The dial is (a) how many slots are unknown, (b) whether direction/units need
reconciliation, and (c) how deeply the linearity is buried in prose vs handed as an
equation. Matches our M2-hard calibration instinct: hard ≠ uglier numbers, hard =
more inference before the model exists.

## What this source does well / poorly

- **Well:** intuition-first sequencing with graphs deferred (removes the "I'm bad at
  lines" identity threat); the words-formula anchor; uncomputed pattern tables as a
  self-generalizing visual; two-tier practice (fluency drills vs test-shaped) with
  scenario reuse across tiers; Notes blocks that isolate trap commentary; recap that
  compresses meaning rather than formulas.
- **Poorly:** long prose runs before the first check-in; no graphical preview at all
  (a single sketch of "why it's called linear" could coexist with the deferral); no
  explicit strategy for the modern Desmos-everywhere test (their calc/no-calc framing
  is dated); drill answer keys are bare values with no misconception feedback loop —
  our product can attach distractor→misconception mapping there; scenario humor
  occasionally adds reading load for ESL students. For synthesis: pair this chapter's
  relationship-first approach with a graph-early source to test which entry point fixes
  slope misconceptions better.
