# Raw extraction — Math source A, Ch. 4: Systems of Linear Equations

Source scope: chapter covering what a system is, substitution, elimination, and the
two "number of solutions" treatments (slope-intercept view, then standard-form
coefficient-ratio view), plus recap, ~23 additional problems, and answer key.
All notes below are our own synthesis; no source expression retained.

## Concepts taught (candidate nodes)

- `linear-system-solution-as-intersection` — A solution to a two-equation linear
  system is the (x, y) pair that makes BOTH equations true; graphically it is the
  one point sitting on both lines. Each line is the picture of that equation's
  entire solution set, so the overlap of the pictures is the shared solution.
- `linear-systems-solve-by-substitution` — When at least one equation already
  expresses one variable in terms of the other (or can be trivially made to),
  replace that variable in the other equation to collapse the system to one
  equation in one unknown. Solve, then back-substitute for the second coordinate.
- `linear-systems-solve-by-elimination` — Add (or subtract) whole equations,
  possibly after scaling one or both by constants, so one variable's coefficients
  cancel. Legitimacy rests on two prior facts: equal quantities added to equal
  quantities stay equal, and scaling both sides of an equation preserves it.
- `linear-systems-solution-count` — Exactly three cases for two lines: different
  slopes → one solution; same slope + different intercepts (parallel) → none;
  same line twice (coincident) → infinitely many. This is the single organizing
  idea behind every "for what value of the constant..." question.
- `disguised-system-single-equation` — An equation with one variable and an
  unknown coefficient claimed to have "no solution" or "infinitely many
  solutions" (e.g. ax + c = bx + d shapes) is secretly a system: each side is a
  line's y-expression, and substitution has already been done for you. No
  solution ⇒ match the x-coefficients, mismatch the constants. Infinite ⇒ match
  both.
- `standard-form-solution-count-by-ratios` — For A₁x + B₁y = C₁ vs
  A₂x + B₂y = C₂: compare the A:B ratios (slope proxy) and the C:B ratios
  (intercept proxy). A:B differs → one solution; A:B same but C:B differs →
  none; all corresponding ratios same → infinite. Avoids converting to
  slope-intercept form.
- `cross-scaling-coefficients` — Technique for comparing two standard-form
  equations: multiply each equation by the other's leading coefficient so the
  chosen terms match exactly, then inspect whether the remaining terms also
  match. (Source coins a proprietary name for this; ours: "cross-scaling.")
  Equivalent shortcut: set up a proportion between known corresponding pairs and
  solve for the unknown coefficient/constant.
- `system-from-context-two-constraints` — Word problems that pair a count
  equation (items sum to a total) with a value equation (price × count sums to a
  money/weight/calorie total). The test's most common systems wrapper.
- `combined-expression-target` — Questions asking for an expression like
  x + y, 6x + 6y, or 7x + 7y rather than either variable: adding or subtracting
  the given equations as-is usually produces the target directly. Solving for
  each variable separately is the slow, error-prone path the question is
  designed to punish.

## Teaching philosophy observed

- Graph-first, algebra-second: the intersection picture is established before any
  algebraic method, so "solution" always MEANS a point, not a procedure output.
- Each solution-count case is taught twice at increasing abstraction: first via
  slopes/intercepts (slope-intercept form), later via coefficient ratios
  (standard form). The second pass explicitly builds on the first.
- Methods are ranked by test realism, not neutrality: substitution is framed as
  the right tool only when a variable is already isolated; elimination is
  declared the workhorse because real test systems arrive in standard form.
  Hand-graphing to find intersections is explicitly forbidden as a strategy.
- Every worked example is followed by a "notes" afterthought that names the
  faster alternative or the conceptual checkpoint — the book teaches method
  selection, not just methods.
- Drills isolate one micro-skill each (e.g., "all of these have no solution;
  find the coefficient") so the student rehearses the case logic, not just
  equation pushing.
- Boxed "challenge" drill items extend the same idea one abstraction level up
  (e.g., two unknown constants at once).

## Expert reasoning patterns (generalized)

1. **Read the coefficients before choosing a method.** One variable isolated (or
   coefficient ±1) → substitution. Both equations standard form → elimination.
   Coefficients of one variable already negatives of each other → add
   immediately.
2. **Solve for the variable you want by eliminating the one you don't.** Choose
   scaling so the unwanted variable cancels; you then never touch the wrong
   unknown — a structural guard against the classic solved-for-x-answered-y slip.
3. **Prefer whole-number scaling.** Scale both equations up (LCM-style) rather
   than multiplying by fractions; fraction-free arithmetic is faster and safer.
   Same-sign coefficient pairs get a −1 folded into one multiplier, or subtract
   instead of add (with a warning that subtraction is where sign errors breed).
4. **Expression-target scan.** Before solving any system, compare the asked-for
   expression to the sum and difference of the given equations; on the SAT the
   combination frequently IS the answer (coefficients line up by design). Only
   solve for individual variables if that scan fails.
5. **Unknown-coefficient questions are ratio questions.** No solution → set the
   two variable-coefficient ratios equal (and verify constants differ). Infinite
   → set all three ratios equal. Solve the resulting proportion; put the unknown
   in a numerator to make the algebra one step. This turns a "hard" question
   into a 15-second proportion.
6. **Sanity-check the excluded ratio.** After finding the coefficient that makes
   slopes match for a "no solution" item, confirm the constant ratio does NOT
   match — otherwise you accidentally built coincident lines.
7. **One-variable disguised forms: match coefficients mentally.** For
   ax + b = cx + d claimed unsolvable, jump straight to a = c (and b ≠ d)
   without transposing anything.
8. **Desmos strategy (our product context; source is calculator-agnostic to
   calculator-averse).** Since our platform embeds Desmos: (a) any system given
   with concrete numbers — type both equations verbatim, click the intersection,
   done; this beats algebra whenever both equations are concrete, especially for
   ugly decimals (ferry/ticket-style contexts). (b) Solution-count items with an
   unknown constant: add a slider for the constant and watch when lines become
   parallel/coincident — works, but the ratio method is faster and should be the
   taught primary; Desmos is the verification layer. (c) Expression-target items:
   Desmos gives x and y; evaluating the target expression from them is fine, but
   the add-the-equations shortcut is still faster. Teach: "concrete system →
   Desmos first; parameterized system → ratios first, Desmos to verify."

## Misconceptions targeted (with why they form)

- **`misc-graph-read-imprecision`** — Believing a hand-sketched or eyeballed
  graph can identify an intersection. Forms because early schooling grades
  graph-drawing as a solution method. Test exploits it with intersections at
  non-lattice points and answer choices that swap coordinates, e.g. (2,1) vs
  (1,2) style distractor pairs.
- **`misc-swapped-coordinate-pair`** — Reporting (y, x) instead of (x, y), or
  picking the choice with the right numbers in the wrong order. Forms from
  reading the intersection off axes carelessly. Choice sets deliberately include
  the transposed pair.
- **`misc-solved-wrong-variable`** — Producing x when the question asked for y
  (or asked for an expression). Forms because the student's procedure ends when
  "an answer" appears. Choice sets include the other variable's value. The
  elimination framing ("eliminate the one you don't want") is the structural fix.
- **`misc-setting-equations-not-expressions-equal`** — Thinking substitution
  means "the two equations are equal." They're not; the two expressions each
  equal to y are equal. Sloppy version causes errors when equations aren't both
  solved for y. Forms from the casual phrase "set them equal."
- **`misc-parallel-vs-coincident-confusion`** — Matching slopes and stopping,
  concluding "no solution" when the lines are actually the same line (or vice
  versa). Forms because school drills often only vary slope. Trap design: pick
  the coefficient that ALSO matches constants, or offer both candidate values as
  separate choices.
- **`misc-constant-mismatch-panic`** — On infinite-solution items in standard
  form, seeing constants that differ numerically (e.g. 4 vs 60) and concluding
  the lines can't be identical, missing that only RATIOS must match. Forms from
  treating "same line" as "same digits" instead of "same equation up to
  scaling."
- **`misc-count-vs-value-equation-swap`** — In build-the-system word problems,
  attaching the money/weight total to the count equation and the item total to
  the value equation. Forms from pattern-matching numbers to positions rather
  than units. Answer choices always include the exact swap.
- **`misc-sign-loss-in-subtraction`** — Subtracting equations and dropping a
  sign on the second equation's terms. Forms because subtraction distributes
  over three+ terms and students only negate the first. The add-after-negating
  discipline is the fix.
- **`misc-combining-unknown-constant-terms`** — When matching coefficients, e.g.
  with ax and 3x on the same side, folding them into (a+3)x and getting lost.
  Not wrong mathematically but cognitively hazardous; the taught discipline is
  to keep symbolic constants on one side, numeric on the other, before matching.

## SAT patterns claimed (mark unverified-claim until checked vs bank/official)

- unverified-claim: A count-equation + value-equation "which system represents"
  item appears on essentially every test.
- unverified-claim: Most test systems are presented in standard form, making
  elimination the majority method; pure substitution items usually pre-isolate a
  variable.
- unverified-claim: No-solution/infinite-solution items are usually disguised as
  ONE equation in one variable with an unknown coefficient, rather than shown as
  two equations.
- unverified-claim: "Value of an expression" (x+y, ax+by combos) items almost
  always resolve by adding/subtracting the equations once, by construction.
- unverified-claim: Answer choices for these items systematically include: the
  other variable, the transposed pair, the count/value swap, and the
  sign-flipped coefficient.
- unverified-claim: Boundary-line intersection questions (max/min) are rare but
  recurring across administrations.

## Prerequisite edges implied

- `linear-equation-solution-set-as-line` (a line = all solutions of one
  equation) → prerequisite for `linear-system-solution-as-intersection`.
- `slope-intercept-form` and `slope-from-equation` → prerequisite for
  `linear-systems-solution-count`.
- `standard-form-slope-and-intercept-as-ratios` (slope = −A/B, intercept = C/B)
  → prerequisite for `standard-form-solution-count-by-ratios`.
- `equation-preserving-operations` (scale both sides; add equals to equals) →
  prerequisite for `linear-systems-solve-by-elimination`.
- `proportion-solving` (cross-multiplication) → prerequisite for
  `cross-scaling-coefficients`.
- `translate-context-to-linear-equation` → prerequisite for
  `system-from-context-two-constraints`.

## Difficulty escalation observed

Easy: concrete system, intersection at lattice point or one variable isolated.
Medium: elimination needing one scaling; build-the-system word problems; find x
AND then y. Harder: scaling both equations; expression targets; one-variable
disguised solution-count items with an unknown coefficient. Hardest: two unknown
constants at once (a and b), ratio-of-constants targets (a/b), fractional
coefficients everywhere, and constraints stacked with the I/II/III "must be
true" wrapper. Escalation levers: number ugliness, how deeply the system is
disguised, whether the unknown is a coefficient rather than x/y, and whether the
target is a combination rather than a variable.

## What this source does well / poorly

Well: crystal-clear three-case taxonomy taught twice at two abstraction levels;
honest method ranking (elimination as default); the "the combination IS the
answer" insight; ratio/proportion shortcut for unknown coefficients; misconception
warnings embedded in solutions (which variable to solve for, sign discipline);
answer keys expose trap-shaped distractors.
Poorly: essentially no calculator/Desmos strategy — on the digital SAT a typed
system is a solved system, and this book's hand-algebra-only stance leaves the
fastest tool untaught (our nodes must add it); three-or-more-variable or
mixed-inequality hybrids absent; no timing guidance per method; the coined name
for cross-scaling is proprietary jargon we must not reuse; word-problem variety
is narrow (mostly commerce/count contexts).
