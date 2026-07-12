# Raw extraction — Math source A, Ch. 5: Linear Inequalities and Absolute Value

Source scope: chapter covering inequality signs and solving, graphing/shading in
the plane, compound inequalities, systems of inequalities (incl. max/min at the
boundary intersection), and absolute value equations/inequalities, plus recap,
~24 additional problems, and answer key. All notes are our own synthesis; no
source expression retained.

## Concepts taught (candidate nodes)

- `inequality-signs-and-boundary-inclusion` — The four signs; which side is
  bigger (open side faces the larger quantity, point faces the smaller); the
  underline means the boundary value itself is allowed. "At most/no more than" ⇒
  ≤; "at least/no less than" ⇒ ≥; "more/fewer than" ⇒ strict.
- `inequality-solving-mirrors-equations` — All equation-preserving moves
  (add/subtract anything, multiply/divide by positives) preserve an inequality;
  the number-line picture is points shifting or stretching without changing
  order.
- `flip-on-negative-scaling` — Multiplying or dividing both sides by a negative
  mirrors every point across zero, which reverses order, so the sign must flip.
  Multiplying by zero destroys the statement entirely. Taught via the mirror
  image on a number line, then re-derived without any flip by moving terms with
  addition/subtraction instead (the flip is revealed as optional bookkeeping,
  not magic).
- `inequality-as-boundary-plus-region` (2-var) — y ≤ mx + b means the line
  itself (if inclusive) plus everything below it; ≥ means above. Solid line for
  inclusive signs, dashed for strict. Any single point can be tested by plugging
  in to decide/verify a region.
- `point-testing-inequalities` — Substituting a candidate (x, y) into every
  inequality is a complete, always-available solution method for "which point /
  which region / which graph" items; simplify the inequality once first (e.g.
  divide out a common positive factor) to make repeated plugging cheap.
- `compound-inequality-three-part-operations` — a < expr < b is one object:
  apply every operation to all three parts at once; if you scale by a negative,
  BOTH signs flip, then rewrite in the conventional small-to-large orientation.
- `inequality-word-problems-boundary-language` — Translating context to an
  inequality is the same as writing the equation, plus one decision: which
  direction, and is the boundary included. The classic slope-intercept context
  (rate × amount + flat fee vs a cap/floor) reappears here with a sign.
- `integer-constraint-after-solving` — The algebraic boundary (e.g. x > 8.5 or
  b ≤ 3.75) is not the answer when the quantity is discrete: round to the
  nearest legal integer in the feasible direction. Maximization of one variable
  in a two-variable budget = minimize the other variable first.
- `system-of-inequalities-overlap-region` — A system's solution set is where the
  individually shaded regions overlap; a point must satisfy EVERY inequality.
  Points on dashed borders fail; points on solid borders pass. No solutions only
  when boundary lines are parallel/identical with shading that never meets.
- `extreme-value-at-boundary-intersection` — If a bounded overlap region has a
  max/min x or y, that extreme is attained AT the intersection of the two
  boundary lines; so convert the system of inequalities into a system of
  equations and solve for the intersection. Which coordinate is extremal (and
  whether max or min) depends on the inequality directions; sketching the region
  roughly is enough to see it.
- `absolute-value-as-distance-from-zero` — |v| is v's distance from zero, hence
  never negative; every positive distance is shared by exactly two numbers (the
  value and its opposite). |x| = k thus splits into x = k and x = −k; |x| = negative
  has zero solutions by definition.
- `absolute-value-equation-splitting` — For |expr| = k: write expr = k and
  expr = −k, solve each. Two solutions normally; one when k = 0; none when k < 0.
- `absolute-value-inequality-two-branches` — |expr| > k means expr > k OR
  expr < −k (two disconnected rays: far from zero on either side); |expr| < k
  means expr < k AND expr > −k, which collapses into the compound
  −k < expr < k (one contiguous band: close to zero). The direction of the sign
  decides split-apart vs collapse-together.

## Teaching philosophy observed

- Number-line-first: every inequality rule is derived from watching points move
  under operations, so the flip rule arrives as geometry (mirroring), not decree.
- The flip rule is deliberately demystified twice: once as mirroring, once by
  showing you can avoid the flip entirely by transposing terms — students who
  see the flip as optional bookkeeping stop forgetting it.
- Plugging in candidate points is elevated to a first-class method (not a
  cheat): taught with explicit efficiency refinements (simplify once up front;
  reuse the shared x-value across choices; stop at first failed inequality).
- Real-world boundaries get a dedicated integer-answer warning block; fractional
  answers to discrete questions are called out as a designed trap.
- Graphing systems is downplayed as rare; the ONE graphing payoff emphasized is
  locating extreme values at the boundary intersection — an insight promoted to
  a bolded principle.
- Absolute value is defined semantically (distance) before proceduraly
  (splitting), so the "no negative absolute value" and "two solutions" facts
  fall out of the definition instead of being memorized.
- Same drill scaffolding as elsewhere: micro-drills after each idea, boxed
  challenge variants (e.g. |expr| > 0 as an edge case), recap bullets that
  compress the chapter into testable invariants.

## Expert reasoning patterns (generalized)

1. **Translate sign language first.** Circle the boundary phrase ("at least",
   "no more than", "fewer than") and commit to the sign+inclusion before writing
   any algebra; the expression side is just equation-writing.
2. **Avoid the flip when stakes are high.** If a negative coefficient appears,
   either (a) divide by the negative and flip deliberately, or (b) add the
   variable term to the other side so all scaling is positive. Knowing both
   routes means the flip is never an unforced error.
3. **Compound: operate on all three parts simultaneously,** then normalize
   orientation. Never split unless the two halves genuinely need different
   moves.
4. **Which-point/which-graph items: test points, don't graph.** Simplify the
   inequality once (divide out common positive factors), then plug choices.
   Order the work: eliminate a choice at the first failed inequality; if all
   remaining choices share an x-value, substitute it once and only vary y.
5. **Region identification without plotting:** isolate y; ≥ shades up, ≤ shades
   down; strictness dictates dashed vs solid. For a system, find the region
   satisfying both directions relative to the two lines.
6. **Max/min in a system = intersection of boundaries.** Treat inequalities as
   equations, solve the 2×2 system (substitution or elimination), report the
   asked coordinate. Rough-sketch only to confirm which coordinate is bounded
   and in which direction.
7. **Budget/count maximization:** to maximize one quantity under a shared cap,
   push the other quantity to its own minimum allowed value first, then solve;
   apply the integer floor/ceiling last.
8. **Absolute value equations: split, solve, then answer the actual question**
   (often |a − b| or a product of solutions, not a solution itself). For
   |a − b|-type targets, subtracting the two branch equations can give the
   difference directly without finding a and b separately.
9. **Absolute value inequalities: decide band vs rays from the sign** before any
   algebra. < k ⇒ single band around the center; > k ⇒ two outward rays. Then
   solve one branch and mirror the other.
10. **Desmos strategy (our product context; the source barely engages the
    calculator).** (a) Which-point-satisfies items: type the inequalities into
    Desmos — it shades regions natively; the correct choice is visibly inside
    the overlap. Faster and safer than four rounds of arithmetic when
    coefficients are ugly. (b) Max/min-coordinate items: graph both inequalities
    and click the boundary intersection; that's the answer point. (c) Absolute
    value: plot y = |expr| and y = k and read intersections/regions. (d) When an
    answer must be an integer count, still do the final rounding step yourself —
    Desmos gives the continuous boundary. Teach: "shading and intersections are
    free in Desmos; the sign-flip and integer-rounding judgment remain on you."

## Misconceptions targeted (with why they form)

- **`misc-forgotten-flip`** — Dividing by a negative without reversing the sign.
  Forms because the flip is taught as an arbitrary rule bolted onto otherwise
  equation-identical mechanics, so under time pressure the equation habit wins.
  The mirror-on-number-line derivation and the transpose-instead workaround are
  the fixes. Trap design: negative leading coefficient with answer choices for
  both directions.
- **`misc-double-flip-compound`** — In three-part inequalities, flipping only
  one of the two signs (or forgetting to reorient the chain), yielding
  impossible chains. Forms because students process the compound as two separate
  steps.
- **`misc-boundary-inclusion-blur`** — Treating "more than" as ≥ or "at least"
  as >. Forms because everyday speech is sloppy about inclusion. Trap design:
  min/max integer answers that differ by exactly 1 depending on inclusion, and
  solid-vs-dashed graph choices.
- **`misc-strict-boundary-point-accepted`** — Accepting a point that lies ON a
  dashed boundary as a solution to the system. Forms because "on the line" feels
  like belonging. Test writers place a distractor point exactly on the strict
  boundary.
- **`misc-order-of-mention-translation`** — Writing "3 times as many f as w" as
  3f ≥ w (multiplier attached to whichever variable sits nearer the number in
  the sentence) instead of f ≥ 3w. Forms from surface-order pattern matching
  rather than unit/quantity visualization. Named by the source as the single
  most common mistake in system-of-inequalities word problems. Fixes taught:
  visualize one concrete instance (1 of the smaller ⇒ 3 of the larger), or set
  up the ratio as a proportion.
- **`misc-fractional-count-answer`** — Reporting the algebraic boundary (e.g.
  3.75) or rounding the wrong way when the quantity is discrete. Forms because
  the algebra "finishes" before the modeling does.
- **`misc-abs-value-single-solution`** — Solving |expr| = k with only the
  positive branch. Forms because school exposure emphasizes |x| stripping signs,
  not the two-preimage structure. Trap design: asks for the OTHER solution, the
  sum/difference of solutions, or |a − b|.
- **`misc-abs-value-negative-target`** — Believing |expr| = −k or |expr| < 0 can
  be solved, or conversely missing that |expr| > 0 excludes only the single
  point where expr = 0 (boxed challenge case). Forms from mechanical splitting
  without the distance meaning.
- **`misc-abs-inequality-wrong-topology`** — Producing a band for > k or rays
  for < k (wrong branch logic), often by splitting mechanically and mishandling
  the negated branch's sign. Forms because the second branch's flip is exactly
  the forgotten-flip error wearing absolute value clothing.
- **`misc-shade-side-by-guess`** — Shading above/below by visual instinct
  instead of the y-isolated sign or a test point; goes wrong especially after
  rearranging from standard form with a negative y-coefficient (flip changes the
  shading side).

## SAT patterns claimed (mark unverified-claim until checked vs bank/official)

- unverified-claim: Systems-of-inequalities graphing questions are rare; most
  inequality items are translate-the-context or test-a-point shapes.
- unverified-claim: Max/min-coordinate-in-a-region items appear only
  occasionally, but when they do the extreme is always at the boundary
  intersection — the question never leaves the extremum's existence in doubt.
- unverified-claim: "Which system represents" choice sets are built around the
  multiplier-on-the-wrong-variable swap and the ≤/≥ direction swap.
- unverified-claim: Discrete-context inequality items regularly engineer
  fractional algebraic boundaries so integer-rounding discipline is what's
  actually tested.
- unverified-claim: Absolute value items commonly ask for the second solution,
  a combination of both solutions, or embed an added condition (like a > b)
  that forces assigning branches.

## Prerequisite edges implied

- `number-line-order-and-distance` → prerequisite for
  `flip-on-negative-scaling` and `absolute-value-as-distance-from-zero`.
- `linear-equation-solving` → prerequisite for
  `inequality-solving-mirrors-equations`.
- `slope-intercept-form` + `linear-graphing` → prerequisite for
  `inequality-as-boundary-plus-region` and `system-of-inequalities-overlap-region`.
- `translate-context-to-linear-equation` → prerequisite for
  `inequality-word-problems-boundary-language`.
- `linear-systems-solve-by-substitution` / `-elimination` (Ch. 4 nodes) →
  prerequisite for `extreme-value-at-boundary-intersection`.
- `compound-inequality-three-part-operations` → prerequisite for the collapse
  case of `absolute-value-inequality-two-branches`.

## Difficulty escalation observed

Easy: one-variable solve with sign discipline; direct translation with one
boundary phrase. Medium: compound inequalities with negative scaling;
which-point items over a two-inequality system; rate + flat-fee contexts asking
for a min/max whole number. Harder: build a full system from a wordy context
with a comparative multiplier; identify the shaded region graph; maximize one
variable under a joint cap (minimize-the-other logic + integer constraint).
Hardest: extreme-value-at-intersection items (inequalities → equations
conversion); absolute value with added ordering conditions or combined targets
(|a − b|, |xy|); reasoning-about-quadrants and no-solution topology questions;
edge cases like |expr| > 0. Escalation levers: number of constraints stacked,
distance of the question from a plug-and-check shape, discreteness constraints,
and whether the student must convert between inequality and equation worlds.

## What this source does well / poorly

Well: the flip rule is DERIVED (mirroring) and then made avoidable (transpose
instead), which directly attacks why students forget it; distance-first
definition of absolute value makes solution counts (2/1/0) self-evident; the
band-vs-rays topology of absolute value inequalities is made explicit; the
order-of-mention translation trap gets a dedicated, emphatic treatment with two
independent fixes (visualization, proportion); the extreme-value-at-intersection
principle is compressed into one reusable invariant; integer-constraint
discipline is repeatedly rehearsed; plugging-in is legitimized with real
efficiency technique.
Poorly: near-zero calculator strategy — Desmos shades inequality regions and
finds boundary intersections natively, which collapses several of this
chapter's hardest item types, and the book never says so (our nodes must);
graphing practice is thin relative to how much the digital test rewards
graph-reading fluency; no treatment of absolute value as distance from a center
point |x − c| = r (only distance from zero, though one practice item quietly
requires the center-point view); compound-inequality word contexts are few; no
timing guidance on plug-vs-solve method choice.
