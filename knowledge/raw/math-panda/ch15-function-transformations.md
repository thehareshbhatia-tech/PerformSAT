# Raw notes — College Panda SAT Math (Digital ed.), Ch. 15: Function Transformations

Source scope: right half of p0089 through left half of p0092 (theory ~1.5 pages, then an
18-item exercise set). Extraction is understanding-only; no source expression retained.

## Concepts taught (candidate nodes)

- `function-shift-vertical` — Adding a constant OUTSIDE the function moves every point of
  the graph straight up by that amount (subtracting moves it down). The output is changed
  after the function runs, so the y-values shift and nothing else does.
- `function-shift-horizontal` — Replacing the input x with x+a slides the graph a units
  LEFT; x−a slides it a units RIGHT. The change happens before the function runs, so it is
  the x-axis behavior that moves.
- `horizontal-shift-direction-paradox` — The single hardest fact in the chapter: inside
  changes move the graph in the direction OPPOSITE the visible sign. Candidate node for
  the "why it feels backwards" explanation (see gaps below — this source doesn't actually
  explain the why).
- `inside-zero-anchor` (our name for the source's coined trick) — To decode any inside
  modification, ask what input value makes the entire inside expression equal zero; that
  value is where the graph's old "origin behavior" now lives, so it reads out the shift
  direction and magnitude directly. Handles fractional shifts too (an inside expression
  like bx−c zeroes at c/b, giving a c/b rightward displacement).
- `shift-composition-order` — A vertical and a horizontal translation commute: apply them
  in either order and the final graph is identical. Lets students decompose a combined
  translation into two independent edits to the formula.
- `translation-across-function-families` — Translation rules are family-agnostic: the same
  input/output edits work on lines, exponentials, rational expressions, cubics, and
  factored quadratics. The skill being tested is often really "apply the substitution to
  EVERY occurrence of x, then simplify back to the answer-choice format."
- `inverse-transformation-reading` — Given the graph of an already-shifted function, recover
  the original by undoing the shift (running it in reverse). A distinct cognitive act from
  applying a shift forward; the exam tests both directions.

## Teaching philosophy observed

- Begins with a single concrete parabola-like graph and shows every rule as a before/after
  picture pair with a directional arrow — the rule is introduced visually before it is
  stated symbolically. Vertical shifts first (intuitive), horizontal second (counter-
  intuitive), then the anchor trick as damage control for the horizontal case.
- Scope discipline: the source explicitly limits the Digital SAT's transformation menu to
  vertical and horizontal translations. Reflections and stretches are NOT taught as a
  named topic in this chapter (a reflection appears only incidentally inside quadratic
  items via a negative leading coefficient). Mark as **unverified-claim**: "shifts are the
  only transformation type the Digital SAT tests." Worth checking against our bank/officials
  before we prune stretch/reflection from our own ladder — recent official items do probe
  vertical stretch understanding occasionally.
- One fully worked multi-step example (combined down-and-left translation of a vertex-form
  quadratic) before the exercise set, with the point made that decomposing into two
  independent edits is safe because order doesn't matter.
- Rules are recapped as a compact symbolic summary box right before exercises — behavior
  pairs stated as output-edit → vertical, input-edit → horizontal.

## Expert reasoning patterns (generalized)

1. **Classify the edit first.** Is the constant attached outside the function (output) or
   inside the input slot? Outside → vertical, same direction as sign. Inside → horizontal,
   opposite direction. This binary classification precedes any computation.
2. **Anchor-point tracking.** Instead of memorizing "plus means left," find the input that
   annihilates the inside expression; that input is the new home of the old x=0 behavior.
   Generalizes cleanly to fractional and compound insides.
3. **Substitute everywhere, then re-simplify.** For rational/factored/multi-term rules,
   a shift means editing every occurrence of x, then doing algebra to match the answer
   format (e.g., folding a +k vertical shift over a /2 denominator into a single fraction).
4. **Reverse reading.** When the displayed graph is the transformed one, invert the
   operation (shown down-2? add 2 back) to recover the parent — never re-apply forward.
5. **Reduce graph translation problems to point translation.** For lines and exponentials,
   track one convenient point (usually the y-intercept) through the shift, then rebuild or
   test equations against it. A translated line keeps its slope — only the intercept moves.
6. **Desmos note:** this chapter teaches no explicit calculator strategy (the neighboring
   quadratics chapter does). For our product: every item in this family is trivially
   checkable in the built-in Desmos by plotting parent and candidate side-by-side; the
   tutor should offer that as a verification layer, not a first-line method, since many
   items are "which equation" formats that are faster by anchor-point reasoning.

## Misconceptions targeted (and why students hold them)

- **inside-sign-inversion** — Students read f(x+a) as "moves right" because everywhere else
  in math, +a means increase/rightward. The misconception is a correct heuristic imported
  into the one context where the sign acts on the INPUT, which must compensate rather than
  add. Every multiple-choice set in this family carries the mirror-sign distractor.
  The source fights it with the anchor trick (procedural) — it never explains the
  compensation logic (to reproduce the old output at a new input, the inside must be
  restored to its old value), which is the piece our node should add.
- **axis-confusion** — Applying a vertical shift to the x-coordinate or a horizontal shift
  to the y-coordinate of a known point. Forms because students memorize "shift by 8"
  without binding the shift to an axis. Distractor design: a point answer with the shift
  amount applied to the wrong coordinate, plus a sign-flipped variant.
- **partial-substitution** — In multi-occurrence formulas (factored form, rational form),
  editing only the first x. Forms because students treat the rule as "edit the x you see."
  Distractors show exactly one factor shifted.
- **numerator-blind vertical shift** — Adding the vertical constant to a numerator over a
  denominator without multiplying through (adding 7 to f = (expr)/2 by writing (expr+7)/2).
  Forms from treating "+k" as string concatenation rather than arithmetic on the whole
  output. Distractor: the un-scaled numerator sum.
- **forward-reapplication** — Given "the graph of f(x)−2 is shown," students find the shown
  graph's formula and stop, or shift DOWN again, instead of shifting up to recover f.
  Forms because forward application is the drilled habit and the question's direction word
  ("defines f") is easy to skim past.
- **slope-mutation** — Believing a translation of a line changes its slope; a distractor
  multiplies the slope by the shift amount. Forms from a vague sense that "big shift =
  big change to the equation."

## SAT patterns claimed (verify before asserting)

- Only translations (no stretch/reflection) appear on the Digital SAT — **unverified-claim**,
  check against officials and our bank.
- Recurring item shapes observed in the exercise set (treat as design templates, all
  plausible vs. our bank): (a) vocabulary items — which translation converts equation A to
  equation B, where the pair differs by a constant that must be seen through equivalent
  forms (e.g., recognizing a net +6 as "6 up"); (b) apply-a-shift-to-a-formula with
  family-specific algebra (linear, exponential, rational, factored quadratic); (c) shifted
  graph shown → identify parent equation (reverse reading); (d) shift then evaluate at a
  point (find new y-intercept or a zero — hybridizes with linear/exponential evaluation);
  (e) two equations both in vertex-like form → shift distance between them (find k);
  (f) translate a line given by standard form or by two points, then find an intercept —
  really a linear-functions item wearing transformation clothes.
- One exercise endorses labeling a compound inside edit (b·x − c) as a pure translation of
  f by c/b. That is mathematically a shift of the compressed function, not of f itself —
  see "does poorly."

## Prerequisite edges implied

- function notation and evaluation (f(x+a) requires substitution fluency) → hard prereq.
- vertex form of a quadratic (used as the running example before Ch16 formally teaches it —
  note the sequencing quirk: transformations are taught BEFORE quadratic functions, using
  a quadratic as the demo object).
- slope-intercept and standard form of lines; exponential parent shape and y-intercept;
  simplifying rational expressions — each needed by specific exercise items, not by the
  core concept.
- Feeds forward: Ch16 uses shift-reading inside vertex-form (same anchor trick re-used for
  reading h from (x−h)²), and composed items (translate a quadratic, then locate its max).

## Difficulty escalation observed

Rule recall → apply to one family with algebra cleanup → reverse direction → fractional
and compound shifts → unknown-constant compositions (find a+b from a shifted cubic graph;
find where a translated two-point line crosses zero). The top of the ladder is always
translation PLUS another skill (linear modeling, exponential evaluation, symmetry), never
translation alone.

## What this source does well / poorly

**Well:**
- The anchor trick is genuinely effective and transfers to vertex-form reading in Ch16 —
  one heuristic serving two chapters.
- Before/after graph pairs with arrows for every rule; rules never stated without picture.
- Exercise set spans many function families, forcing the rule to be held abstractly rather
  than as "the parabola thing."
- Honest scope-narrowing keeps the chapter short and focused.

**Poorly:**
- Never explains WHY horizontal shifts invert — pure procedure. Our node must supply the
  compensation argument (the input must be "paid back" before the function sees it) or a
  table-of-values demonstration, because the trick alone decays under exam stress.
- The anchor trick silently overreaches on compound insides: labeling f(bx−c) a translation
  of f by c/b conflates "shift of the compressed graph" with "shift of the original." Works
  on the SAT-style items presented (and for the linear cases they chose) but plants a wrong
  general belief; our treatment should either exclude compound insides or teach them
  correctly as compress-then-shift.
- No stretch/reflection coverage at all — fine if the scope claim verifies, a hole if not.
- Zero conceptual link to transformations of data/context (e.g., shifting a time variable);
  everything is bare-graph manipulation.
