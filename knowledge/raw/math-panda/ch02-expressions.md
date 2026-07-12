# Raw notes — College Panda SAT Math, Ch. 2: Expressions

Source: math-panda (College Panda, Digital SAT ed.), pages p0012–p0016 scans.
Section: Advanced Math (expression equivalence: simplifying, factoring, combining).
Understanding-only notes; no source expression retained.

## Concepts taught

- **like-terms-matching** — Terms merge under addition/subtraction only when their
  variable parts match exactly (same variables, same powers). A sum of unlike terms
  is already fully simplified.
- **legal-fraction-cancellation** — Cancellation across a fraction bar is legal only
  when the whole numerator and whole denominator are expressed as products (or one
  IS the shared factor). You may never cancel a term out of a sum. Corollary move:
  a denominator that looks like a sum may become cancellable after factoring it
  into a product.
- **gcf-factoring** — Pull the greatest shared monomial factor out of a polynomial;
  the primary tool for making cancellation or comparison possible.
- **binomial-expansion-foil** — Systematic four-product expansion of a binomial
  pair; framed as nothing more than double distribution. When a constant multiplies
  a binomial product, it merges into exactly one of the two binomials, never both.
- **three-core-identities** — Square of a sum, square of a difference, and
  difference of squares, to be recognized in BOTH directions (expanded ↔ factored)
  on sight. The author flags these as high-frequency and worth overlearning.
- **layered-difference-of-squares** — A difference of squares can hide another one
  inside its factors; factor, then re-scan each factor. Also appears in disguise
  where the "squares" are themselves squared monomials (e.g., a = a quadratic
  monomial, b = a squared variable).
- **chunk-substitution** — Naming a repeated compound expression with a single
  placeholder letter to reveal structure (a repeated binomial becomes an ordinary
  common factor). Our plain name: "chunking." (The source doesn't name it; it
  demonstrates it as a re-seeing aid.)
- **fraction-combination-lcd** — Adding expression fractions mirrors numeric
  fraction addition: build the least common denominator, which is often just the
  product of the two denominators — but NOT when one denominator already contains
  a factor of the other; then multiply only by the missing factor.
- **nested-fraction-position** — A three-level fraction means different things
  depending on where the long (main) bar sits: value-over-fraction flips the lower
  fraction's parts up; fraction-over-value tucks the value into the denominator.
  Decide by rewriting as an explicit division.
- **fraction-splitting-one-way** — A fraction with a sum in the NUMERATOR splits
  into separate fractions (reverse of addition); a sum in the DENOMINATOR can
  never be split. This asymmetry is stated as a hard rule.
- **fractional-exponent-on-binomial** — A binomial raised to a fractional power is
  the root of the binomial's integer power; expanding the inner power uses the
  core identities. (Bridges Ch. 1 into expression work.)

## Teaching philosophy observed

- Organization is by *operation on expressions* (combine, simplify, expand/factor,
  add, divide, split) — a toolbox sequence, not a topic sequence. Each tool gets
  a one-paragraph rule, a legal/illegal contrast list, then exam-format examples.
- The legality contrasts are the distinctive teaching device: several near-identical
  fractions shown side by side, some simplifiable and some not, with the failing
  manipulation explicitly displayed as the thing you must not do. Teaching by
  adjacent counterexample.
- Explicit meta-instruction appears once: memorizing the identities is worthless
  without recognition practice across disguised variants — pattern recognition is
  the actual skill being trained.
- Author repeatedly warns against premature expansion: look for shared structure
  (common binomial, chunkable repeat) BEFORE multiplying things out. Economy of
  computation is treated as a correctness strategy, not just speed.
- Omitted: polynomial long division, rational-expression domain analysis,
  completing the square (deferred), any graphing tie-in. No calculator/Desmos
  mention at all — this chapter is pure symbolic craft. In our product, note that
  equivalence items CAN be Desmos-verified by plotting both forms, but the manual
  skill remains necessary for speed and for items with parameters.

## Expert reasoning patterns (generalized)

1. **Scan for shared structure first.** Before any expansion, ask: do multiple
   terms share a monomial factor? a whole binomial? a repeated chunk? Factoring
   the shared piece is almost always shorter than expanding.
2. **Chunk repeated compounds.** Rename a repeated parenthesized expression with
   one letter; the problem collapses to a one-variable pattern (common factor,
   difference of squares); then un-substitute.
3. **Identity radar in both directions.** Keep the three core identities active as
   *recognition templates*: any 3-term quadratic-looking expression gets tested
   against perfect-square shape; any 2-term difference gets tested against
   difference of squares — including when the pieces are themselves powers.
4. **After factoring, re-scan factors.** One factoring pass may expose a second
   (nested difference of squares). Done only when no factor matches a template.
5. **Denominator triage for cancellation:** classify numerator and denominator as
   product / sum / single term. Sum → try factoring it; if it won't factor into
   something sharing a factor, stop — the expression is already simplest.
6. **LCD minimalism:** multiply each fraction only by the factors it lacks;
   over-building the denominator creates avoidable expansion work.
7. **Nested fractions → explicit division** before doing anything else; then apply
   flip-multiply mechanically.
8. **Targeted-coefficient extraction:** when a question asks for one coefficient of
   an expanded product, compute only the products that land on that degree —
   never the full expansion.

## Misconceptions targeted (and why students hold them)

- **misc-merge-unlike-terms** — Adding a variable to its own square (or a variable
  to a product containing it) and merging them. Forms because addition of
  coefficients is overgeneralized: students track letters, not full variable
  parts. Distractors show merged pseudo-terms.
- **misc-cancel-across-sum** — Cancelling a factor that appears in one term of a
  sum (crossing off an x that's "visible" upstairs and downstairs). This is the
  chapter's central target. It forms because cancellation is taught as visual
  matching rather than as division of a product; the fraction bar hides that
  cancelling means dividing EVERY term. Exercise distractors are exactly the
  partially-cancelled forms.
- **misc-split-denominator** — Splitting a fraction across a sum in the denominator
  (mirroring the legal numerator split). Forms by symmetry illusion: the legal
  rule for numerators looks like it should reflect. The book states the asymmetry
  as a rule and builds items where the reflected move gives a listed choice.
- **misc-distribute-constant-into-both-binomials** — Multiplying a leading constant
  into BOTH binomials of a product (doubling it). Forms because distribution over
  addition applies the multiplier to every term, and students transfer that to
  factors. Trap: answer with doubled leading coefficient.
- **misc-foil-only-partial** — In binomial products, multiplying firsts and lasts
  only (skipping outer/inner). Classic incomplete-procedure error; middle-term
  distractors encode it.
- **misc-nested-fraction-ambiguity** — Treating value/(a/b) and (a/b)/value as the
  same. Forms because handwritten fractions rarely make the main bar's length
  meaningful; students collapse three-level fractions arbitrarily.
- **misc-identity-misexpansion** — Expanding a squared binomial as the sum of
  squares (dropping the cross term). Forms by distributing the exponent over
  addition, the additive cousin of the root-over-sum error. Perfect-square
  distractors without middle terms encode it.

## SAT patterns claimed (verify against bank — unverified-claim)

- unverified-claim: "Which expression is equivalent" items where the intended
  route is factor-and-cancel, and full expansion is a slow but viable decoy path.
- unverified-claim: Items provide an already-partially-factored rational
  expression where numerator terms share a binomial; the design rewards seeing
  the shared binomial rather than expanding.
- unverified-claim: Double difference-of-squares items (factor once, factor a
  factor again) with distractors at each intermediate stage — stopping early is
  the trap.
- unverified-claim: Find-one-coefficient items (expand a binomial product given
  in words/standard form and report a single coefficient) rewarding targeted
  extraction.
- unverified-claim: Add-two-expression-fractions items where one denominator is a
  factor of the other, punishing blind product-LCD with heavier algebra (still
  correct, but a distractor matches an algebra slip along the longer path).
- unverified-claim: Split-the-fraction items (sum over a constant) with the
  illegal denominator-split as a distractor.

## Prerequisite edges implied

- legal-fraction-cancellation ← gcf-factoring + like-terms-matching
- binomial-expansion-foil ← distributive property (assumed)
- three-core-identities ← binomial-expansion-foil (derivable, but expected memorized)
- layered-difference-of-squares ← three-core-identities + exponent-laws-core (Ch. 1)
- fraction-combination-lcd ← numeric fraction addition + gcf-factoring
- nested-fraction-position ← fraction-division semantics
- fractional-exponent-on-binomial ← fractional-exponent-bridge (Ch. 1) + three-core-identities
- chunk-substitution ← gcf-factoring (it reduces to it after renaming)

## Difficulty escalation observed

Single-tool items (combine terms; one GCF pull; one FOIL) → two-tool items
(factor then cancel; LCD then combine) → recognition-under-disguise (identities
with monomial-squared entries; repeated chunks to substitute; fractional-exponent
wrapper around an identity) → hard end: rational expressions requiring factoring
BOTH numerator and denominator, multi-variable fractions where the shared factor
is itself a binomial, combining three tools in sequence (split, factor, cancel),
and constant-parameter items (find k making two rational forms identical).
Hard items also exploit sign discipline (negative shared factors flipping a
quotient's sign).

## What this source does well / poorly

- Well: the legal/illegal contrast catalogue for cancellation is the best
  misconception-targeting device in the chapter — directly reusable as
  interactive check design (show a manipulation, ask legal-or-not, explain why).
- Well: chunking as a re-seeing tool; explicit anti-premature-expansion stance;
  "memorize identities both directions" framing.
- Poorly: no explanation of WHY cancellation requires product form (dividing
  numerator and denominator by the same quantity) — the rule is asserted; our
  node should ground it in "a fraction is a division, cancelling is dividing
  both parts."
- Poorly: domain caveats (excluded x-values when cancelling) are silently handled
  by problem constraints rather than taught; fine for the exam, thin for
  understanding — our tutor should at least flag why constraints like x ≠ 2
  appear in stems.
