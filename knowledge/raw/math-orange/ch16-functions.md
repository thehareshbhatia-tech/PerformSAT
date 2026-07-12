# Raw notes — Math source A ("orange"), Ch. 16: Functions
Section: math · Domain: Advanced Math (function notation/evaluation/transformation)
Covers source pp. 543–566 (instruction, embedded examples, recap, extra problems, answer key).
Extraction is understanding-only; no source expression retained.

## Concepts taught (candidate nodes)

- `function-as-machine` — a function is a rule that turns an input into exactly one
  output; the letter inside the parentheses is a placeholder slot, not a quantity with
  independent meaning.
- `function-evaluation-substitution` — evaluating f(k) means replacing EVERY occurrence
  of the placeholder with k, respecting order of operations (exponentiate the substituted
  value before applying coefficients).
- `formal-parameter-vs-argument` — the variable in a definition f(x)=... is a local dummy
  name; the thing plugged in (number OR expression) simply occupies that slot everywhere.
  The definition written with w or t is the same function.
- `expression-into-function` — substituting a whole expression (2x, x+a) into a
  definition; intermediate move: rewrite the definition with empty parentheses in every
  slot, then fill each with the expression.
- `composite-function-evaluation` — for nested functions, resolve the inside function
  first, then feed its value to the outside one; alternatively substitute the inner
  definition symbolically and simplify.
- `recursive-iteration` — when the output of one round becomes the input of the next
  (population/growth recurrences), you must iterate stepwise; there is no shortcut of
  plugging in the number of rounds.
- `coefficient-matching` — if the same function is given in two forms with the same
  input, expand both to standard form and equate coefficients term-by-term to solve for
  unknown constants.
- `graph-shift-rules` — g(x)=f(x−h)+k is f's graph moved h right and k up; vertical
  shifts read exactly as written; horizontal shifts carry the counterintuitive sign.
- `shift-delay-model` — mental model for the horizontal sign: subtracting from x makes
  the input "lag," so every feature of the graph happens later (farther right); adding
  to x makes the input run ahead, so features appear sooner (left).
- `absolute-value-of-function-graph` — |f(x)| reflects only the below-axis portions of
  f up across the x-axis; everything already non-negative is unchanged.
- `point-checking-unknown-graphs` — to match an unfamiliar graph with its equation (or
  vice versa), test a few easily-read points (y-intercept first, then lattice/gridline
  points) against each choice and eliminate; this is principled use of GIVEN values, not
  guess-and-check with invented numbers.
- `asymptote-reading` — a vertical asymptote at x=a signals a denominator factor
  vanishing at a; a horizontal asymptote at y=c signals a constant c added to a fraction
  that decays toward 0 for large |x|. Fast elimination tool for rational-graph items.

## Teaching philosophy observed

- Sequencing: numeric evaluation → composite (numeric) → recursive → expression inputs →
  coefficient matching → shifts → exotic graphs. Each step re-uses the single invariant
  "the input occupies every slot," so the chapter is one idea escalating, not eight ideas.
- Names the psychological block directly (students accept x=4 but panic at x = an
  expression containing x) and dissolves it with the parameter/argument distinction
  rather than a drill-only fix.
- Repeatedly legitimizes point-testing on graph items while separating it from the
  "plug in random numbers to dodge algebra" habit it elsewhere discourages.
- Notes deliberately teach test-craft alongside math: extraneous givens exist; a rare
  question type (recursion) is still covered "to cover the bases."
- Recap is a checklist of the actionable moves, not a re-derivation.

## Expert reasoning patterns (generalized)

1. Before computing, ask "what is the input, and what slots does it fill?" — for f(g(8)),
   the input to f is the VALUE g(8), so resolve that first.
2. Empty-parentheses rewriting: strip the definition to its skeleton with blank slots,
   then paste the input into every slot. Mechanically prevents the classic
   partial-substitution error.
3. For unknown constants across two forms of one function: expand → align like terms →
   match coefficients; verify with the constant term, and be suspicious when an
   even power makes two candidate values both look plausible (check a linear term,
   which preserves sign).
4. For any graph-vs-equation item: harvest the cheapest points (y-intercept, marked
   lattice points), test choices, eliminate; read gridline spacing off the axes before
   trusting coordinates.
5. For recurrences: label the generations (start, after-1, after-2), write one clean
   application per generation, and carry full precision between steps (round only at
   the end).
6. Desmos-first alternative (our product has Desmos built in; this source barely uses
   it): define the function literally in Desmos, then evaluate f(−2), plot y=f(x) next
   to a candidate to compare shifts, or graph both sides of an equation and read the
   intersection. Transformation items become "type both, look." Recursion is the one
   place a table/iteration still beats graphing.

## Misconceptions targeted (and why students hold them)

- **shift-direction-inversion** — belief that f(x−2) moves LEFT because "minus means
  left." Forms because vertical shifts (and the number line) reward sign-literal
  reading. Reality: the −2 acts on the input, so each output happens 2 later. Distractor
  design: the mirrored-direction choice is always offered.
- **operate-on-output-instead-of-input** — reading f(x+2) as f(x)+2 ("add 2 to the
  result"). Forms because outside-the-parentheses arithmetic is what students do all
  day; the parentheses boundary is invisible to them. Produces vertical-shift answers
  on horizontal-shift questions and vice versa.
- **partial-substitution** — replacing only the first/obvious occurrence of the
  variable (e.g., in h(x)=3−g(x), forgetting the inner slot). Forms from treating
  substitution as text-editing rather than slot-filling.
- **solve-the-argument** — seeing f(2x) and trying to solve x=2x (impossible), because
  school treats "=" as an equation to solve; students don't have the parameter/argument
  frame. Freezes them entirely rather than producing a specific wrong answer.
- **exponent-before-sign error** — evaluating f(−2) with powers: squaring/cubing the 2
  but dropping the negative, or multiplying by the coefficient before exponentiating.
  Produces predictable near-miss distractors (sign-flipped constants).
- **must-use-everything** — assuming every given value must appear in the solution;
  test writers occasionally supply decoys, and students who "haven't used g(1)=3 yet"
  will force it in.
- **gridline-equals-one** — reading graph coordinates assuming unit gridlines when the
  axes are scaled by 2s or 5s. Forms from years of unit-grid textbook figures.
- **iteration-shortcut** — plugging "2" into a recurrence to get the 2-years-later
  value in one step, because function notation trained them that one input → one
  evaluation.

## SAT patterns claimed (verify against bank/official before asserting)

- unverified-claim: simple plug-in evaluation appears routinely across difficulty bands,
  including with rational and exponential definitions.
- unverified-claim: recursive/self-referential function values appeared on released
  material essentially once; low-frequency but cheap to teach.
- unverified-claim: vertical shifts are tested more often than horizontal shifts.
- unverified-claim: function-shift questions concentrate around vertex-form quadratics;
  other families (absolute value, cubic, rational) appear mainly as graph-recognition.
- unverified-claim: rational-graph (hyperbola-shaped) identification appears rarely
  (roughly once per released cohort) and is solvable purely by point-testing.
- unverified-claim: coefficient-matching with a symbolic input (f(x+a)) is a hard-slot
  item; answer choices include both the true constant and its sign-mirror.

## Prerequisite edges implied

- `function-evaluation-substitution` ← integer/negative-number arithmetic, order of
  operations, exponent rules.
- `expression-into-function` and `coefficient-matching` ← binomial expansion, standard
  form of polynomials.
- `graph-shift-rules` ← vertex form of quadratics (taught earlier as the anchor case),
  coordinate-plane literacy.
- `asymptote-reading` ← rational-expression zeros/undefined values; exponential
  leveling-off intuition helps.
- `point-checking-unknown-graphs` ← reading axes/scales; y-intercept concept.

## What this source does well / poorly

- Well: one invariant carried through the whole chapter; the parameter/argument
  explanation is the deepest fix for the most common panic; the "delayed input" story
  gives horizontal shifts a WHY, not a mnemonic; solutions model elimination hygiene
  (check the cheapest point first).
- Well: honest frequency guidance (what's rare vs core) keeps prep effort proportional.
- Poorly: almost no calculator/Desmos integration (recursion advice is calculator-"Ans"
  era); our lessons should teach the Desmos route as a first-class solution path.
- Poorly: function domain/range language, increasing/decreasing, and interpreting
  f-notation in applied contexts get little treatment here (may live in other chapters;
  flag for synthesis so the graph-behavior node isn't orphaned).
- Poorly: transformations beyond translation (stretch, reflection over axes with
  coefficient changes) are not covered in this chapter — check other sources.

## Difficulty escalation observed

easy: evaluate f(k) for a number, one slot. → medium: multi-slot definitions, composite
values, tables+graphs combined (find k = min of f, then g(k)). → hard: symbolic inputs
with coefficient matching; shift identification stated abstractly (translation of one
named graph to another); unfamiliar graph families where the solver must invent the
point-testing strategy; recursion under a real-world model with rounding discipline.
Hard-end composition partners: vertex form (`quadratic-vertex-form`), exponential decay
shape intuition, and rational-function undefined points.
