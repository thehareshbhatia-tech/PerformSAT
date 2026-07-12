---
id: cancellation-legality
section: math
domain: advanced-math
skill: simplifying-rational-expressions
difficulty_span: [easy, hard]
prereqs: []
unlocks: [chunking-repeated-structure, extraneous-solutions-non-reversible-moves]
related: [exponent-rules-factor-counting, sum-product-factoring]
---

# Legal expression manipulation — cancellation discipline

## What it is
The rules that separate legal simplification from wishful crossing-out. Terms merge under addition only when their variable parts match exactly (same variables, same powers) — a sum of unlike terms is already fully simplified. Cancellation across a fraction bar is legal only when the whole numerator and whole denominator are expressed as products sharing a factor; you may never cancel a term out of a sum. A fraction with a sum in the NUMERATOR splits into separate fractions; a sum in the DENOMINATOR never splits. Subtracting a parenthesized polynomial negates every term inside.

## Why it exists / why the SAT tests it
Equivalence items are the SAT's cheapest way to separate structural manipulators from visual matchers. Distractor sets are literally the illegal moves performed: the partially-cancelled fraction, the denominator split, the half-flipped subtraction. The skill also gates everything downstream — a student who cancels across sums will corrupt rational equations, and one who can't factor-then-cancel can't simplify anything (unverified-claim on exact frequency; the design pattern is confirmed by both sources' exercise distractors).

## Mental model
**A fraction bar is a division, and cancelling is dividing BOTH parts by the same thing.** You can divide a product by a factor cleanly; you cannot divide one term of a sum and call it done — division distributes over every term or not at all. Corollary: a denominator (or numerator) that looks like a sum may become cancellable after factoring it into a product. So the discipline is: **classify before you cancel** — is each of numerator and denominator a product, a sum, or a single term? Sums must be converted to products (factored) before anything crosses the bar.

## Expert reasoning process
1. Classify numerator and denominator: product / sum / single term.
2. Sum anywhere → try to factor it (GCF first, then binomial templates). If it factors into something sharing a factor with the other side, cancel; if not, stop — already simplest.
3. Scan for shared structure BEFORE expanding anything: shared monomial factor, shared whole binomial, repeated chunk ([[chunking-repeated-structure]]). Factoring the shared piece is almost always shorter than expanding.
4. Subtraction of a parenthesized polynomial: rewrite with ALL interior signs flipped as a discrete written step — distractors are built from partial flips.
5. Adding fractions: build the LEAST common denominator — multiply each fraction only by the factors it lacks. When one denominator already contains the other as a factor, multiplying by the full product is legal but buys extra expansion work (and the slip distractor lives on that longer path).
6. Nested (three-level) fractions: rewrite as explicit division before touching anything; where the main bar sits changes the value.
7. Splitting: sum-over-single-term → split freely (reverse of addition). Anything-over-a-sum → never split.
8. Desmos: any equivalence claim between two one-variable forms is checkable by overlaying both (or plotting their difference and looking for a flat zero line). Useful for verifying a cancel you're unsure about; useless for choosing WHICH manipulation to do.

## Misconceptions
- **cancel-across-sum** — crossing off an x that is "visible" in one term upstairs and downstairs, e.g. (x + 6)/x → 6 or (x² + 3x)/x² → 3x. THE central trap of this node. Forms because cancellation is taught as visual matching, and the fraction bar hides that cancelling means dividing every term. Distractors are exactly the partially-cancelled forms.
- **split-denominator** — turning c/(a+b) into c/a + c/b, mirroring the legal numerator split. Forms by symmetry illusion — the legal rule looks like it should reflect. It doesn't; the asymmetry is a hard rule grounded in what division distributes over.
- **partial-sign-flip** — negating only the first term when subtracting a parenthesized polynomial. Forms because the minus visually attaches to the nearest term. Produces sign-scrambled distractors differing from the key only in one +/−.
- **merge-unlike-terms** — adding x to x² and writing 2x² (or merging a constant into a variable term) to force a shorter answer. Forms because "simplify" is heard as "make shorter" and students track letters, not full variable parts. Polynomials often don't get shorter.
- **constant-into-both-binomials** — distributing a leading constant into BOTH binomials of a product, doubling it: 3(x+1)(x+2) treated as (3x+3)(3x+6). Forms because distribution-over-addition (hits every term) is transferred to factors (hits exactly one).

## Diagnostic indicators
- **cancel-across-sum**: picks the partially-cancelled distractor; work shows crossed-out symbols inside sums; very fast timing (the illegal move feels like efficiency).
- **split-denominator**: picks the reflected-split choice; when probed, cites the numerator rule as justification.
- **partial-sign-flip**: sign-flip archetype — chosen answer differs from key only in the sign of interior terms; error rate rises with term count.
- **merge-unlike-terms**: picks the artificially short single-term choice; explains "I combined them."
- **constant-into-both-binomials**: distractor with squared leading coefficient (9x² where 3x² is right).

## Remediation pathways
- **cancel-across-sum** → ground the rule in division: (10+2)/2 crossed-out-style gives 10; actually 6. Then the classify-before-cancel routine. If it persists, the student lacks the fraction-as-division concept itself — go below this cluster to fraction arithmetic.
- **split-denominator** → numeric counterexample: 6/(2+1) = 2 vs 6/2 + 6/1 = 9. State the asymmetry as a one-line rule and have THEM explain why (division distributes over the top, not the bottom).
- **partial-sign-flip** → mechanize: rewrite −(…) as +(−1)(…) and distribute the −1 onto every term as its own written line.
- **merge-unlike-terms** → sorting drill: given eight terms, group the mergeable ones; articulate the match condition (same variable AND same power). Cross-check with exponent counting ([[exponent-rules-factor-counting]]).
- **constant-into-both-binomials** → expand 3·(2)(5) both ways numerically: 30, not 6·15 = 90.

## Mastery criteria
Classifies numerator/denominator instantly and either produces the factored-then-cancelled form or declares "already simplest" — both are passing answers; zero illegal-move distractor picks across a session; handles a subtraction sign-flip with three-plus interior terms without error. Proof: consistency on medium items plus one hard factor-both-parts rational simplification.

## Difficulty ladder
Easy: one GCF pull; combine like terms. Medium: factor-then-cancel with a binomial factor; LCD addition; subtraction sign traps. Hard: rational expressions requiring factoring BOTH numerator and denominator (composes [[sum-product-factoring]] and [[binomial-product-templates]]); shared factor is itself a binomial; three tools chained (split, factor, cancel); negative shared factors flipping a quotient's sign; parameter items (find k making two rational forms identical — composes [[coefficient-matching-identities]]).

## Teaching notes
- **Struggling**: everything through numeric counterexamples first — the illegal moves must FAIL in arithmetic they trust before symbols enter. One rule per session.
- **Average**: the classify-before-cancel routine as a checklist; legal/illegal contrast drills (show a manipulation, ask legal-or-not, demand the why) — this adjacent-counterexample format is the strongest teaching device for this node.
- **Advanced**: economy of computation as a correctness strategy — premature expansion multiplies slip opportunities; LCD minimalism; anti-expansion instinct (scan for shared structure first).
- **1500+**: hard-band composites and sign discipline (negative shared factors); domain awareness — why stems attach constraints like x ≠ 2 when a factor was cancelled (the cancelled factor's zero left the expression's domain), which foreshadows [[extraneous-solutions-non-reversible-moves]].
