# Raw extraction — Math source A ("orange"), Ch. 11: Zero Count / Imaginary & Complex Numbers

Source scope: how many x-intercepts a quadratic has and how to know without graphing;
the discriminant; imaginary unit arithmetic; complex add/subtract/multiply; conjugates
and clearing i from denominators. Section: math. Domain: Advanced Math.
All wording ours; problems described by design only.

## Concepts taught (candidate nodes)

- `quadratic-zero-count-trichotomy` — Every quadratic lands in exactly one of three
  buckets: two distinct real zeros (graph crosses the x-axis twice), one repeated real
  zero (graph kisses the axis once — perfect square), or no real zeros (graph floats
  clear of the axis; the two roots are complex). "How many solutions" = "how many
  x-axis contacts."
- `discriminant-zero-count` — For ax² + bx + c, the expression under the quadratic
  formula's radical, b² − 4ac, decides the bucket: positive → two real; zero → one real
  (double); negative → two complex. Reason it works: the ± radical is what splits one
  answer into two; a radical of 0 splits nothing; a radical of a negative goes imaginary.
- `discriminant-as-last-resort` — Decision hierarchy for zero-count questions: (1) if it
  factors easily, two different factors = two real zeros, a squared factor = one;
  (2) if vertex form is available or cheap, visualize: vertex height + opening direction
  tells you the crossing count with zero computation; (3) only then compute b² − 4ac.
  The discriminant is a fallback tool, not a reflex.
- `vertex-position-zero-count` — Vertex above the x-axis + opens down → two real zeros;
  vertex below + opens up → two; vertex on the axis → one; vertex and opening on the
  same side → none. This is the geometric twin of the discriminant.
- `system-solution-count-via-collapse` — For a quadratic-line (or two-curve) system,
  substitute to collapse into one quadratic; that quadratic's zero count IS the system's
  intersection count. Discriminant conditions on the collapsed equation answer "for what
  parameter does the system have exactly one / two / no solutions."
- `imaginary-unit` — i is defined as √(−1), so i² = −1. Square roots of negative numbers
  factor into (real coefficient)·i, e.g. √(−4) = 2i. Convention: write the real
  coefficient first.
- `i-power-cycle` — Powers of i repeat with period 4: i, −1, −i, 1. To evaluate a big
  power, find the nearest multiple of 4 (that power is 1) and step from there.
- `complex-number-form` — a + bi with real a, b. Real and imaginary parts are
  unmergeable — like unlike terms. A "simplified" complex expression is exactly one real
  term plus one imaginary term.
- `complex-add-subtract` — Combine real parts together and imaginary parts together,
  treating i like a variable; distribute subtraction signs across BOTH parts.
- `complex-multiply` — Expand like any binomial product, and only THEN replace i² with −1.
  Sequencing matters: substitute-while-expanding is the error factory.
- `complex-conjugate` — a + bi pairs with a − bi. Their product is a² + b² (difference of
  squares with the middle terms canceling and the i² sign flip turning minus into plus) —
  always a plain real number.
- `complex-denominator-clearing` — To rewrite a fraction with a complex denominator in
  a + bi form, multiply top and bottom by the denominator's conjugate; then split the
  fraction into real and imaginary pieces. (Same move as rationalizing a radical
  denominator — the conjugate kills the offending term.)
- `complex-roots-conjugate-pair` — When a real-coefficient quadratic has no real zeros,
  its two roots are conjugates of each other: if a + bi is a root, a − bi is the other.

## Teaching philosophy observed

- Motivates imaginary numbers by CRISIS, not decree: takes a visibly no-solution
  quadratic, runs the trusted solving machinery (complete the square AND quadratic
  formula side by side), and lets the negative radical fall out. i is introduced as the
  name for what the machinery produced. Strong move — the student watches the number
  system get extended out of necessity.
- Two-column parallel derivation (two methods, same answer) doubles as a consistency
  proof and a review of both solving techniques.
- Names the discriminant only AFTER the student has seen the radicand do the
  discriminating. Terminology follows experience.
- Explicitly anti-formula: a boxed hierarchy says to prefer factoring or vertex
  visualization and reach for b² − 4ac last. Rare and valuable — most prep sources teach
  discriminant-first.
- Pedantic-but-useful terminology care: distinguishes "two complex roots" from the
  sloppier "two imaginary roots"; notes reals are complex with b = 0; flags that "zero"
  and "root" are used interchangeably on purpose.
- The i-powers table is built by computation (i³ = i²·i, etc.), then compressed into the
  cycle rule; the recap re-derives rather than just restates.

## Expert reasoning patterns (generalized)

- **Bucket first, compute second.** For any "how many solutions" prompt: try the
  10-second reads (does it factor? is it a perfect square? is it in vertex form —
  where's the vertex, which way does it open?) before any discriminant arithmetic.
- **Parameter questions = discriminant inequalities.** "For which t does ... have no real
  solutions" → put in standard form (parameter lands inside c or b), set b² − 4ac in the
  required relation to 0, solve the linear inequality in the parameter. The quadratic
  question is secretly a linear-inequality question.
- **Sign bookkeeping is the whole game in complex arithmetic.** Expand fully with i as a
  letter; substitute i² = −1 in a separate, dedicated step; distribute negatives across
  both parts on subtraction. Most errors are premature substitution or a dropped minus.
- **Selective computation.** If a question asks only for the real part (or only b of
  a + bi), compute only the terms that land there: in a product, real part = (real·real)
  + (i-term·i-term after the −1 flip). Faster, but the source rightly warns it's an
  experts-only optimization — attention cost is real.
- **Mod-4 exponent reduction.** Any iⁿ: subtract the nearest multiple of 4 and read the
  cycle. Also usable inside expressions before any other arithmetic.
- **Desmos note (our product; absent from source):** Desmos plots make zero-count
  questions near-instant — type the quadratic, count x-crossings; for parameter versions,
  add a slider for the constant and watch when crossings appear/vanish, then verify the
  boundary algebraically. Complex ARITHMETIC, by contrast, is where Desmos does not help
  (no i support in the graphing view students use) — flag complex-number items as
  must-do-by-hand, which raises the value of the sign-bookkeeping drills.

## Misconceptions targeted (and why students hold them)

- **premature-i-squared-substitution** — While expanding (a + bi)(c + di), students swap
  i² → −1 mid-FOIL and mangle a sign. Why: "simplify as you go" is drilled in school
  algebra; here interleaving two operations overloads working memory. Trap design:
  distractors differ from the key only by the sign of one part.
- **real-imaginary-merging** — Students add 2 + 3i into 5 or 5i. Why: an "answer" is
  expected to be a single number; two-part answers feel unfinished. Trap design: offer
  the merged single number as a choice on add/subtract items.
- **subtraction-half-distribution** — (a + bi) − (c + di) → a − c + di (minus applied to
  the real part only). Why: the same partial-distribution slip as with polynomials, but
  the i makes the second term feel "already different" and thus skippable.
- **discriminant-positive-means-factorable** — Students believe two real zeros implies
  integer/nice zeros. Why: classroom quadratics almost always factor. Matters in reverse:
  an unfactorable quadratic may still have two real zeros.
- **zero-radical-two-answers** — At discriminant = 0 students still count two solutions
  ("plus AND minus"). Why: the ± symbol is read as "two things" even when the radical is
  0. Source's counter: ±0 is one value.
- **conjugate-sign-confusion** — Multiplying by the conjugate but writing the product of
  the imaginary terms with the wrong sign (forgetting i² = −1 turns −b²i² into +b²).
  Why: difference-of-squares habit says the last term is subtracted.
- **imaginary-vs-complex-mislabel** — Calling non-real roots "imaginary roots." Why:
  loose everyday usage; matters when an item distinguishes pure-imaginary from complex.

## SAT patterns claimed (unverified-claim; verify against official + bank)

- "For what value(s) of a constant does the equation/system have no / exactly one /
  exactly two real solutions" is the dominant discriminant question shape; the constant
  usually sits in c, sometimes in b. (unverified-claim)
- Complex-number items always restate i = √(−1) in the stem. (unverified-claim; matches
  our authoring convention)
- Complex arithmetic tested: add/subtract, multiply, evaluate iⁿ for large n, and
  fraction-with-complex-denominator → a + bi (asked as "what is a" or "what is b" at the
  hard end). Division items are the rarest/hardest of the family. (unverified-claim)
- Zero-count problems are LOW-frequency on the real test overall — worth teaching depth
  but not overweighting drills. (source's own frequency remark; unverified-claim)
- Line y = constant intersecting a parabola at exactly one point → constant equals the
  vertex y; solvable without the discriminant via vertex reasoning. (unverified-claim)

## Prerequisite edges implied

- `discriminant-zero-count` ← quadratic formula fluency; `quadratic-zero-count-trichotomy`.
- `quadratic-zero-count-trichotomy` ← factored-form zero reading; perfect-square
  recognition (ch10 `double-zero-bounce`).
- `vertex-position-zero-count` ← ch10 `vertex-form-feature-read` +
  `complete-square-to-vertex-form`.
- `system-solution-count-via-collapse` ← substitution in systems; ch10
  `intersections-equal-solutions`.
- `imaginary-unit` ← radical simplification (√(ab) = √a·√b); real-number taxonomy
  (integer / rational / irrational).
- `complex-multiply` ← binomial expansion (FOIL); `imaginary-unit`.
- `complex-denominator-clearing` ← `complex-conjugate` ← difference-of-squares identity;
  radical-denominator rationalizing (same schema).

## Difficulty escalation observed

Easy: evaluate iⁿ or add two complex numbers; count zeros of an already-factored or
vertex-form quadratic. Medium: multiply complex numbers and extract one part; count
zeros needing one conversion; discriminant with numeric coefficients. Hard: parameter
inside the discriminant with an inequality answer ("possible value of b such that exactly
one solution" — perfect-square recognition shortcut: b = ±(2√(ac))); system-intersection
counts where the parameter shifts a curve (slider-visualizable); complex division split
into a + bi with fraction answers. The chapter's hardest items compose ch10 vertex
geometry with zero-count logic (e.g., which k gives a horizontal line three crossings of
a cubic).

## What this source does well / poorly

Well: the crisis-driven introduction of i (machinery forces the new number into
existence) is the best version of this lesson we've seen; the anti-discriminant hierarchy
teaches judgment, not formula reflex; explicit warnings about the exact steps where sign
errors happen, tied to WHY (working-memory overload); conjugate treatment cleanly reuses
the difference-of-squares schema instead of teaching a new trick.

Poorly: no complex-plane picture at all (roots as points, conjugates as reflections would
help visual learners); no calculator/Desmos strategy for the zero-count family, which is
where it shines; complex-number motivation stops at "the test asks it" — no forward hook
(e.g., that non-real roots still shape the graph's minimum height); frequency guidance
("this family is rare") is asserted without data — we should verify against our bank
before letting the tutor deprioritize it.
