# Raw notes — Math source A, Ch. 0 "Foundations" (prerequisite bedrock)

Source studied: math-orange, chapter 0 (book pp. 1–21). Extraction is understanding-only;
no wording, examples, or tables retained.

## Why this chapter exists (authors' framing)

The authors front-load an arithmetic/algebra bedrock chapter because their entire
instructional method depends on students being able to follow every algebraic line of a
worked solution. Their solutions show *every* manipulation (including cancellations), so a
student who can't fluently reduce a fraction or peel an operation off an equation can't
consume the rest of the book. They explicitly split the chapter's skills into two tiers:
skills that get re-taught in depth later (roots, ratio, percent) vs. skills **assumed at
all points forward** (fraction manipulation, isolating variables, simple factoring). That
tiering is a useful signal for our prereq edges: the "assumed forever" tier is the true
root of the math knowledge graph.

## Concepts taught (candidate nodes)

- `expression-vs-equation` — an expression is a computation recipe (terms combined by
  operations); an equation asserts two expressions have the same value. Sides of an
  equation are interchangeable because equality is symmetric. (Re-taught again in the
  linear chapter; the authors treat this distinction as load-bearing vocabulary.)
- `equation-balance-principle` — because both sides of an equation denote the same value,
  applying one operation to both sides preserves truth. Taught with a physical
  balance-scale image. The authors call this the single most essential principle and
  insist on student buy-in before proceeding — it is the license for every solving move.
- `math-symbol-literacy` — reading fluency for =, ≠, ≈, ∞, inequality symbols (with the
  small-side/large-side orientation intuition), absolute value as distance-from-zero,
  nth roots, set braces, ±, ratio colon, percent, segment/parallel/perpendicular/angle/arc
  notation, π, θ. Presented as a lookup primer, deferring depth to later chapters.
- `fraction-fluency` — the cluster the authors most fear is missing:
  - reduce by common factors; "lowest terms"; (they deliberately distinguish *reducing*
    a fraction from *simplifying* an expression — sloppy vocabulary breeds sloppy moves)
  - multiply fractions (numerators together, denominators together); a whole number
    times a fraction only scales the numerator
  - dividing by a fraction = multiplying by its reciprocal; nested/stacked fractions
    resolve the same way
  - add/subtract ONLY with a common denominator; build one by multiplying by a
    disguised 1 (n/n); least common multiple beats product-of-denominators only because
    it keeps numbers small — both are valid
  - mixed numbers: convert to a single fraction immediately; mixed-number form is
    useless on this test (can't be gridded, ambiguous in algebra)
- `clear-fractions-from-equations` — when fractions live inside an equation (not a lone
  expression), skip common denominators entirely: multiply both sides by the
  denominator(s) to eliminate all fractions up front. This is an equation-only privilege
  (you have a second side to absorb the multiplication) and the authors push it as the
  default because it converts fraction problems into integer problems.
- `inverse-operation-peeling` — solving = undoing operations in reverse order of
  precedence: cancel the outermost add/subtract first, then the multiply/divide bound to
  the variable, coefficient last. Add/subtract are inverses; multiply/divide are
  inverses; exponent/root are inverses (deferred).
- `reciprocal-coefficient-shortcut` — when the coefficient is a fraction, multiply both
  sides by its reciprocal once instead of doing a divide-then-multiply dance. One move
  instead of two; the authors show both routes side by side and let the cleaner one win.
- `substitution-basic` — replacing a variable/constant with its known value, then
  solving what remains. Taught as its own micro-skill before anything composite.
- `solve-for-expression` — many SAT items ask for the value of a *combination* (e.g., a
  sum or a scaled variable), often when the individual unknowns are unrecoverable (one
  equation, two unknowns). The move: treat the target combination as a single object and
  isolate *it* — divide by the factor multiplying the group, don't dismantle the group.
- `factor-to-match-target` — the expert version of solve-for-expression: factor a
  constant out of the given equation so that the leftover factor IS the requested
  expression, then divide once. The trigger cue: the target expression's coefficients
  are a uniform multiple/divisor of the given equation's coefficients. This is the
  seed of the book's later "route directly to the asked-for quantity" philosophy.
- `distribute-constant` — multiplying a constant across a parenthesized sum multiplies
  EVERY term; same for dividing an expression by a constant (division distributes too —
  visualize splitting the numerator into separate fractions). Negative constants must
  carry their sign to every term.
- `factoring-inverse-of-distributing` — factoring a common constant out is literally
  running distribution backwards; the authors draw the two as one reversible arrow, a
  compact mental model we should keep.
- `combine-like-terms` — same-variable terms merge by adding coefficients; constants
  merge with constants; identical parenthesized groups merge like variables. Unlike
  terms (x-terms with y-terms, variables with constants) can NEVER merge.
- `unknown-in-denominator` — a variable denominator is eliminated the same way a numeric
  one is: multiply both sides by it. With two different denominators, multiply by both
  (sequentially). Extraneous-solution risk exists in principle (denominator hitting 0)
  but is deferred; at this level multiplying through just works.
- `fraction-splitting-asymmetry` — a fraction with a SUM IN THE NUMERATOR splits into
  separate fractions; a sum in the DENOMINATOR does not split. One-directional rule.
- `reciprocal-both-sides` — if two fractions are equal, their reciprocals are equal.
  Lets you flip an equation to get the asked-for fraction directly (e.g., told the value
  of a/b-shaped thing, asked for the b/a-shaped thing).

## Teaching philosophy observed

- **Vocabulary before mechanics, mechanics before problems.** Definitions (0.1) →
  solving single equations (0.2) → substitution (0.3) → solve-for-expression +
  distribute/factor (0.4) → combine like terms (0.5) → variable denominators (0.6).
  Each section is strictly consumable using only earlier sections — a clean linear
  prereq chain we can copy for graph edges.
- **Justify the license, then drill the moves.** The balance principle is sold FIRST as
  the reason all solving works; the authors say confidence in everything downstream
  depends on accepting it. Good instinct: students who see solving as arbitrary ritual
  can't adapt when a problem is nonstandard.
- **Every solution is a numbered micro-step list** with the reason for each move stated
  ("to cancel the outermost operation", "to combine terms on one side"). No skipped
  algebra. Multiple named solutions (two full routes) appear whenever there's a genuine
  method choice, implicitly teaching method selection rather than one true way.
- **Worked examples are SAT-formatted from page one** (4-choice MC with realistic
  distractors), so even the arithmetic warm-up chapter trains test-shaped pattern
  recognition. Each section ends with pointers into a large indexed set of real released
  test items — the authors lean on official material for volume instead of authoring
  drills here (chapter 0 has no drills/recap/answer key of its own; that apparatus
  starts in chapter 1).
- Positive-coefficient hygiene: when combining variable terms across sides, they steer
  students to keep the solved-for variable's coefficient positive (fewer sign errors),
  while noting the other direction is equally valid.

## Expert reasoning patterns (generalized)

1. **Read the ask before solving.** Their loudest rule: never assume the lone variable's
   value is the answer — re-check what object the question requests, because answer
   choices are built to punish autopilot.
2. **Choose the elimination order by structure:** outermost operation first; grouped
   expressions stay grouped if the group itself is the target.
3. **Kill fractions early in equations** (multiply through) rather than managing common
   denominators; but when the coefficient is a lone fraction, one reciprocal
   multiplication finishes it.
4. **Coefficient-ratio scan:** before isolating variables in a solve-for-expression
   item, compare the given equation's coefficients to the target's — if they're a
   uniform scalar apart, factor/divide directly and skip finding any variable.
5. **Verification by tabulation:** when unsure an expression models a situation, list a
   few small input values and confirm the pattern (this habit is introduced in ch. 0–1
   and recurs; it maps directly onto Desmos's table feature in our product).
6. Calculator stance in this chapter: none needed and none invoked — the authors treat
   all of ch. 0 as below-calculator fluency, and later explicitly reassure students that
   "ugly" decimals (money-like values) are mentally manageable. For our product: these
   skills should be trained calculator-free, BUT our Desmos build-in makes the
   multiply-through and reciprocal moves checkable (type both sides, confirm same
   solution); tutor should offer Desmos only as verification here, never as the method.

## Misconceptions targeted (and why students hold them)

- **misconception: splitting a sum-denominator** — students overgeneralize the legal
  numerator split (a+b)/c = a/c + b/c to c/(a+b). Forms because the two look
  symmetric and schooling rarely shows the failure case. Produces predictable wrong
  algebra on any variable-denominator item. The book pre-empts it with an explicit
  "one direction only" contrast.
- **misconception: answer-the-variable autopilot** — students solve for x and pick the
  choice equal to x when the question asked for an expression in x. Forms because 95%
  of school practice asks for the variable. Test writers reliably seed the lone
  variable's value among the choices (the book's examples model this distractor design;
  mark **unverified-claim** for frequency, though it matches our bank's pattern).
- **misconception: dropped negative in distribution** — distributing a negative constant
  to only the first term. Forms because the minus sign is visually attached to the
  parenthesis, not to each term. The book's counter-habit: wrap negative terms in
  parentheses while distributing.
- **misconception: partial distribution under division** — dividing only one term of a
  sum by the constant. Same root cause as above but for division; the fix is the
  split-the-numerator visualization.
- **misconception: combining unlike terms** — merging x-terms with y-terms or constants
  (any "just mash them together" move). Forms from treating algebra as symbol soup
  rather than quantities; the book's blunt "incompatible things can't merge" framing is
  effective and worth keeping in plainer product language.
- **misconception: reduce/simplify conflation** — students think of both as "make it
  smaller" and then apply reduction-like moves where they're illegal. The vocabulary
  precision here is a deliberate misconception vaccine.
- **misconception: mixed-number comfort** — students keep quantities as
  whole-plus-fraction and then botch multiplication with them. Forms from elementary
  school notation habits. Fix: immediate conversion to a single fraction; also
  test-pragmatic (gridded answers reject mixed forms).

## SAT patterns claimed (verify before trusting)

- Solve-for-expression items frequently make the direct route (factor/divide to the
  target) much faster than finding variables, and sometimes make individual variables
  unrecoverable on purpose. **unverified-claim** (consistent with our bank).
- Variable-in-denominator items at this level never hinge on the extraneous-zero case;
  that trap belongs to a later (rational/quadratic) tier. **unverified-claim**.
- Real-test cross-reference lists per section are long for combining-like-terms and
  solve-for-expression — the authors' implied frequency ranking within basics.
  **unverified-claim** but useful as a weighting hint.

## Prerequisite edges implied

- fraction-fluency → clear-fractions-from-equations → unknown-in-denominator
- equation-balance-principle → inverse-operation-peeling → substitution-basic →
  solve-for-expression
- distribute-constant ↔ factoring-inverse-of-distributing (one node, two directions) →
  factor-to-match-target
- combine-like-terms requires expression-vs-equation + distribute-constant
- Everything here is a prereq of the linear-relationships cluster (source's ch. 1).

## Difficulty escalation within the chapter

Integers → fractional coefficients → fractions on both sides → grouped-expression
targets → two unknowns with an unrecoverable split (expression-only solvable) →
variable denominators → both numerator and denominator unknown (reciprocal reasoning).
The escalation axis is "how indirect is the path from given to asked-for", not bigger
numbers — worth preserving as our difficulty dial for foundation drills.

## What this source does well / poorly

- **Well:** ruthless completeness of algebra steps (nothing "clearly follows");
  method-choice modeling via dual solutions; misconception pre-emption stated as
  explicit contrasts; early installation of the "answer the ask" discipline; treating
  vocabulary precision as error prevention.
- **Poorly:** text-dense and visually monotonous (walls of prose between examples); no
  self-check drills, recap, or answer key in this chapter (unlike ch. 1+), so a student
  can't verify their own fluency before moving on; no diagnostic guidance ("how do you
  know if YOU need this chapter"); zero calculator/Desmos discussion even where a
  verification habit would help weaker students. Our Learn version should add a
  self-placement check and interleave micro-checks per concept.
