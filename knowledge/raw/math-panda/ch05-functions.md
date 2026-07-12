# Raw notes — Source B (panda), Ch. 5: Functions

Source scope: pages p0030 (right half) – p0036.
Section/domain: Math — Advanced Math (function notation, graphs, intercepts, zeros),
with Problem-Solving crossover on interpretation-in-context items.
Understanding-only notes; all phrasing, names, and examples are ours.

## Concepts taught

- **function-as-io-machine** — A function is a rule that transforms an input into one
  output. Notation f(x) names the rule and its placeholder; the letter x carries no
  meaning of its own.
- **substitute-the-whole-input** — Anything can go in the input slot: numbers, other
  variables, expressions, even other functions. The one discipline is to wrap the
  entire input in parentheses before applying the rule, which prevents the
  (2x)² vs 2x² class of errors.
- **evaluate-backward** — "For what input does the function output k?" means set the
  rule equal to k and solve for the input. Forward evaluation and backward solving are
  the two directions of one relationship.
- **function-arithmetic** — New functions can be built by adding/subtracting/
  multiplying/dividing existing ones; combine the rules first, then evaluate.
- **composition-inside-out** — For nested functions, evaluate the innermost call
  first and feed its output outward. Composition is sequential machine-chaining.
- **shifted-argument-reading** — A definition like "f(x − 1) = (rule in x)" defines f
  by what it does to the expression x − 1, not multiplication and not f at x. To get
  f at a target, choose x so the argument equals the target.
- **graph-equals-io-pairs** — Every point on the graph of y = f(x) is (input, output).
  f(x) and y are interchangeable in graph contexts; a claim like "f(x) > 0 on an
  interval" is a claim about y-values (graph above the x-axis) there.
- **intercepts-by-zeroing-the-other-coordinate** — y-intercept: input 0, read output.
  x-intercept: set output to 0, solve for input. Both are mechanical once
  graph-equals-io-pairs is internalized.
- **zeros-roots-intercepts-are-one-idea** — "Zero," "root," and "x-intercept" all name
  inputs that make the output 0; graphically, x-axis crossings.
- **factor-intercept-link** — An x-intercept at input n forces (x − n) to be a factor,
  and conversely. Counting x-axis crossings counts linear factors' roots.
- **point-on-graph-pins-parameters** — If a graph with unknown constants passes
  through a known point, substitute both coordinates to get an equation in the
  constants.
- **undefined-inputs** — A function is undefined where its rule demands an illegal
  operation; division by zero is the canonical case (denominator = 0).
- **output-interpretation-in-context** — In modeling items, f(a) = b is a sentence:
  "when [input quantity] is a, [output quantity] is b." Mapping units to positions is
  the whole skill.

## Teaching philosophy observed

- Machine metaphor first, then immediately attacks the deepest notation misconception:
  the input letter is arbitrary. Demonstrates the same rule applied to 2x, a, b + 1,
  g(x), and even a nonsense word — the point being that the rule acts on whatever
  occupies the slot. (The nonsense-input demo is a memorable teaching move: apply the
  rule to something absurd to prove the placeholder is contentless.)
- Explicit micro-habit prescribed: always parenthesize the substituted input. Cheap
  insurance sold as a rule-of-thumb.
- The chapter's central pedagogical move for graphs: **reword the question**. "For what
  x does f reach its maximum" becomes "which point has the largest y"; "how many x
  satisfy h(x) = 0" becomes "how many x-intercepts." Translating function-language into
  graph-language (and back) is treated as THE skill, ahead of any computation.
- Terminology consolidation is explicit (zeros = roots = x-intercepts), boxed as a
  takeaway — the author anticipates vocabulary fragmentation from school.
- Sequencing: evaluate → invert → combine → compose → graphs → intercepts →
  zeros/factors → undefined inputs. Symbolic fluency fully precedes graph work.

## Expert reasoning patterns (generalized)

1. **Inside-out for anything nested.** Composite evaluation starts at the innermost
   expression; no attempt to build a combined formula unless the question demands it.
2. **Points are equations.** Any "graph passes through (p, q)" clause is immediately
   cashed in as f(p) = q, one equation per point, used to pin unknown constants.
3. **Reword graph questions as io questions** (and vice versa) before doing anything.
   The translation usually reveals the answer is read-off, not computed.
4. **Intercept reflexes.** x = 0 for y-intercepts, output = 0 for x-intercepts —
   executed without deliberation, including on exponential and rational rules where the
   arithmetic (anything^0 = 1) does the rest.
5. **From crossings to factors.** Seeing a graph's x-axis crossings, the expert
   reconstructs the factor list (with an unknown leading constant) — enabling
   which-equation-matches-this-graph items to be answered by matching roots and end
   behavior rather than plotting candidates.
6. **Answer the asked coordinate.** Graph/intercept items constantly ask for one
   coordinate of a point, or a point vs a value ((0, −5) vs −5), or f(3) rather than
   the x where the max occurs. Experts re-read the ask before committing.

## Misconceptions targeted (and why students hold them)

- **naked-substitution** — Students substitute 2x into a squaring rule as 2x² because
  in school practice inputs were single numbers where parentheses never mattered. The
  error is invisible until inputs become expressions; distractors are built from the
  unparenthesized result.
- **f-times-x-reading** — f(g(2)) or f(x − 1) parsed as multiplication, because
  juxtaposition means multiplication everywhere else in algebra. Produces attempts to
  "distribute" f or to divide both sides by f.
- **need-the-formula-first** — Given f(x − 1) = (rule), students believe they must
  recover f(x) itself before evaluating anywhere, when choosing the input that makes
  the argument equal the target is one step. They hold this because school taught
  functions as formula objects, not as io relations.
- **fx-is-about-x-not-y** — Statements like f(x) > 0 are read as constraints on x.
  Root cause: the notation f(x) visually contains x, so students anchor on the wrong
  axis. The graph-equals-io-pairs framing is the fix.
- **same-output-means-same-input** — Given f(a) = f(3), students conclude a = 3,
  assuming injectivity because linear examples dominate their experience. Curved
  graphs with repeated outputs (exercise design) punish this.
- **intercept-axis-swap** — x- and y-intercept procedures interchanged; answer choices
  systematically include the mirrored point ((0, k) vs (k, 0)) to harvest the swap.
- **transformation-direction-flip** — f(x − 2) believed to shift left (the minus sign
  "points" left). Table-based items (which table represents f shifted?) and
  shifted-max items exploit it.

## SAT patterns claimed (unverified-claim)

- unverified-claim: Graph-of-function items on the Digital SAT signal "output as
  y-coordinate" with the stock phrase "the graph of y = f(x) in the xy-plane."
- unverified-claim: Interpretation items ("best interpretation of f(3) = 6") hinge
  entirely on which quantity is input vs output; all four choices permute the two
  numbers across the two roles.
- unverified-claim: Which-equation-defines-this-graph items are solvable by
  root-matching plus a single extra point (or leading-coefficient/stretch check),
  never by full plotting.
- unverified-claim: Table-based function items (choose the rule fitting 3 rows) are a
  recurring format; single-row checking is the intended trap (only one row fits a
  distractor).
- unverified-claim: Hard-band function items combine exponentials with transformations
  (f(x + 2) of b·aˣ) or ask range/bound reasoning (e.g., a decaying term plus a
  constant bounds the output strictly above the constant).

## Prerequisite edges implied

- order-of-operations + exponent-basics → substitute-the-whole-input
- solving-linear-equations → evaluate-backward
- substitute-the-whole-input → composition-inside-out → shifted-argument-reading
- coordinate-plane-basics → graph-equals-io-pairs → intercepts-by-zeroing →
  zeros-roots-intercepts-are-one-idea → factor-intercept-link
- factor-intercept-link → quadratic/polynomial factored form (forward edge to later
  chapters)
- graph-equals-io-pairs is the load-bearing prerequisite for Ch. 6 (lines) and all
  later graph chapters.

## Difficulty escalation observed

Plug in a number → plug in an expression / combine two functions → compose; recover a
parameter from one point → pure-graph readoffs (max, intercept count) → parameterized
families (unknown a, b with two points → solve the pair) → transformation items
(f(2x) − 1, f(x + 2), shifted tables, shifted maxima) → constraint/bound reasoning
(inequalities about outputs, "NOT a possible value," same-output-different-input) →
composed exotic rules (rational-with-linear-inside, exponential families through two
points).

## Desmos / calculator strategy

Not mentioned anywhere in the chapter — everything is by hand. (Our product note:
half these item shapes — intercepts, f(c) < c comparisons, which-equation-matches-graph,
solution counts — are one-line Desmos checks. Our Learn/tutor layer should teach the
symbolic reasoning THEN the Desmos verification habit, which this source never does.)

## What this source does well / poorly here

- Well: the placeholder-input demonstration is the best single fix for function-notation
  confusion; the "reword graph questions as io questions" move generalizes across the
  whole exam; terminology consolidation (zeros/roots/intercepts) is explicit; exercise
  sets systematically cover every trap listed above.
- Poorly: no domain/range vocabulary at all; transformations are exercised but never
  taught as a rule set (students meet f(x + k) shifts only inside problems); no
  interpretation-items methodology beyond one example (units-to-roles mapping deserves
  a procedure); zero calculator/Desmos guidance; the factor-intercept link is asserted
  quickly and could use a why (remainder/zero-product reasoning).
