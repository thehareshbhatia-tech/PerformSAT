# Raw notes — Math source A, Ch. 12: Ratios, Probability, and Proportions

Source: math-orange (study source A), ch. 12 (three sections: ratios+probability, proportions, ratio word problems; embedded examples, per-section practice, end-of-chapter mixed set + answer key). Domain: Problem-Solving & Data Analysis. All notes are our synthesis — no source expression retained.

## Concepts taught

- **ratio-representations** — one relative-size relationship can be written as a fraction, colon notation, "a to b" phrasing, "a in b" phrasing (the probability register), or a decimal; fluency means seeing all five as the same object. Colon notation extends to 3+ terms where fractions can't.
- **ratio-reduction** — ratios simplify exactly like fractions, including multi-term ratios (divide every term by the common factor).
- **part-part-vs-part-whole** — the core setup decision for every ratio question: is the comparison between two components, or between one component and the sum of all components? A ratio a:b implies whole a+b; the part-of-whole fractions are a/(a+b) and b/(a+b), not a/b.
- **probability-as-ratio** — probability is just a ratio: (count of qualifying outcomes)/(count of possible outcomes under the stated selection). No formal probability machinery needed at this level; it's careful counting plus fraction sense.
- **two-way-table-probability** — reading joint/marginal cells from a rows×columns count table; the row/column intersection discipline for finding the numerator; the totals row/column for denominators.
- **denominator-first-discipline** — expert setup order: identify the reference group (denominator) BEFORE hunting for the numerator. The reference group is named by the selection clause ("if a [subset noun] is chosen at random", "what fraction of the [subset noun]").
- **restricted-reference-group** — when the selection clause names a subset (one row, one column, one category), the denominator is that subset's total, not the grand total. This is the single highest-yield idea in the section.
- **graph-estimation-tolerance** — bar charts without fine gridlines are meant to be estimated: judge by interval position (just above halfway, etc.). "Closest to" phrasing licenses rounding your estimate toward a cleaner reducible ratio; if uncomfortable, convert everything to decimals and compare.
- **proportion-equation** — two equal ratios form an equation solvable for any one missing quantity. Which quantity goes in which slot is mathematically free, as long as correspondence matches across both sides.
- **unknown-numerator-setup** — setup discipline: place the unknown in the numerator of the LEFT ratio. Then one algebraic move isolates it and the whole right side becomes a single chain calculation (nice mental math or one calculator pass); the variable never migrates around the equation.
- **proportion-transposability** — a valid proportion stays valid when you swap which axis is "across" vs "down" (time/time = distance/distance is equivalent to time/distance = time/distance). Choose the arrangement that feels most natural per problem.
- **scale-factor-problems** — scale models and maps: the scale IS a ratio (representation : real thing). Mixed units in the scale (inches per mile) are fine inside a proportion — no unit conversion needed as long as each side of the proportion keeps its own unit role consistently.
- **constant-of-proportionality** — y = kx (and y = k/x) situations: a rate with no offset. One known (x, y) pair pins down k; then the equation answers any second scenario. Equivalent to a proportion but often given in function-ish clothing.
- **squared-relationship-ratios** — when a quantity depends on the SQUARE of another (area vs. radius, kinetic energy vs. speed), ratios of the dependent quantity go as the square of the ratio of the independent one. Doubling the input quadruples the output — linear intuition fails.
- **subscript-variable-method** — for "quantity in situation 1 vs. situation 2" ratio questions, write both formulas with subscripted variables, substitute the stated relationship (r₂ = 2r₁), and cancel symbolically. Beats plugging dummy numbers because nothing needs reconciling at the end.
- **direct-vs-inverse-square** — whether the squared term sits in the numerator or denominator of the governing formula decides whether the output ratio is s² : 1 or 1 : s². Fast solvers use the shortcut; the book insists you verify direction (subscripts protect you).
- **piecewise-translation** — ratio word problems: convert each sentence into a small equation as you read, even before a solution plan exists; then substitute equations into each other to shrink the unknown count.
- **fraction-of-total-cascade** — an alternative to equations for "fractions of a group, then half the remainder..." problems: track the remaining fraction of the whole at each step (1 − 1/6 − 1/4 = 7/12, half of that is 7/24, then multiply by the total).
- **table-plus-ratio-systems** — hardest section-3 shape: a partially known two-way table plus verbal multipliers ("4 times as many X as Y") → fill cells with subscripted expressions (4f, f; 2m, m), sum columns to build a 2-equation system, solve by elimination, then assemble the asked-for probability with its own restricted denominator.

## Teaching philosophy observed

- **Setup before arithmetic.** Both big skills (table probability, proportions) are taught as setup disciplines — decide the denominator / place the unknown — with the arithmetic treated as trivial afterward.
- **Verbalize to de-randomize.** Students fail table problems by "grabbing numbers"; the fix taught is converting fragments of the prompt into full sentences about which number is needed. Feels dumb, works.
- **Calculator minimalism.** Explicit stance: the only genuine calculator need in this chapter is decimal answer choices. Fractions are promoted over decimals everywhere (reduce early, keep numbers small). For our product: reframe as "reason first, then let Desmos do one chain computation" — Desmos is built into the exam and our app, so the chain-calculation payoff of the unknown-numerator setup is directly actionable (type the whole right side in one line).
- **Symbols over dummy numbers.** Repeated preference for subscripted variables over plugging in convenient values — not because dummy values are wrong, but because they create a reconciliation step where errors live.
- **Multiple solution registers.** Worked examples often carry 2–3 solutions (formal equation chain, informal arithmetic, fraction-cascade), explicitly ranking them: equations are "safer," informal is "no less valid." Good model for our struggling/advanced entry points.
- **Order within chapter:** representations → reduction → part/whole decision → table probability → graph reading → proportions → scale → k-of-proportionality → squared ratios → word problems. Probability is deliberately taught as a ratio application, not a separate theory.

## Expert reasoning patterns (generalized)

1. **Table probability:** read the selection clause → name the reference group aloud → find its total (denominator) → re-read the qualifying condition → find the intersection cell (numerator) → sanity-check numerator < denominator.
2. **Proportion:** identify the two corresponding quantity pairs → write left ratio with the unknown on top → mirror the correspondence on the right → cross-multiply once → evaluate the chain.
3. **Squared-relationship:** write the formula twice with subscripts → substitute the stated multiplier relationship → cancel common symbols → read the ratio. Shortcut (square the multiplier) only after confirming numerator-vs-denominator position.
4. **Word problem:** translate sentence-by-sentence into equations with meaningful variable names → substitute to one unknown → solve → re-read question to confirm WHICH quantity was asked (they solve for the convenient one, then convert).

## Misconceptions targeted (with the why)

- **grand-total-denominator** — students always divide by the table's grand total because school probability drilled "favorable over TOTAL," and the grand total is the most visually salient cell. Every table item ships a distractor built from the grand-total (and from the wrong marginal). Diagnostic: the chosen wrong fraction has the right numerator, wrong denominator.
- **part-part-as-part-whole** — given ratio a:b, students use a/b where a/(a+b) is needed (and vice versa), because ratio notation LOOKS like a fraction so they treat the two terms as numerator/denominator by reflex. Answer sets are built as {a/b, b/a, a/(a+b), b/(a+b)}.
- **numerator-larger-than-denominator blindness** — students accept probabilities > 1 without flinching; taught guard: the numerator counts a subset of the denominator's group, so it must be smaller.
- **linear-intuition-on-squares** — "radius doubles so area doubles." Proportional reasoning generalizes from the linear cases where it always worked; the square is invisible in the verbal statement. Trap answers: the un-squared multiplier.
- **direct-inverse-swap** — for y = k/x or inversely-related quantities (gear teeth vs. rpm), students carry the direct-proportion template and scale both quantities the same direction. Distractors: the direct-proportion answer.
- **cross-correspondence proportion errors** — mismatching which quantity corresponds to which slot (mixing up model/real or old/new across the two sides). The book's fixed left-numerator template exists mostly to prevent this.

## SAT patterns claimed (unverified-claim; check against official material + our bank)

- Two-way-table probability is claimed as a major recurring question type; restricted-denominator via an "If a [subset] is selected at random..." clause is claimed as the standard difficulty lever. (unverified-claim)
- Bar-graph ratio items are claimed to always tolerate estimation — "closest to" phrasing, no fine gridlines needed. (unverified-claim)
- Proportionality items claimed to appear pre-packaged as y = kx or y = k/x with a plug-in pair. (unverified-claim)
- Claimed that answer choices in table items systematically mirror the wrong-cell/wrong-margin picks. (matches our bank's distractor conventions; still verify)
- Chapter's real-test cross-reference lists imply high frequency for 12.1/12.2, lower for 12.3. (unverified-claim)

## Prerequisite edges implied

- fraction arithmetic + reduction → ratio-representations, ratio-reduction
- ratio-representations → probability-as-ratio → two-way-table-probability
- part-part-vs-part-whole → two-way-table-probability, table-plus-ratio-systems
- one-variable linear solving → proportion-equation → scale-factor-problems, constant-of-proportionality
- slope/y=mx (no-intercept linear) ↔ constant-of-proportionality (explicitly bridged)
- linear systems + elimination → table-plus-ratio-systems
- exponent basics → squared-relationship-ratios
- squared-relationship-ratios → (unlocks) circle-area/volume scaling questions in geometry

## Difficulty escalation observed

easy: read one cell / one marginal from a table; reduce a ratio. → medium: restricted denominator; bar-graph estimation; single proportion with scale or rate. → harder: k-of-proportionality with a second scenario; squared/inverse-squared ratios. → hardest: multi-sentence word problems combining fractions-of-remainder, verbal multipliers filling a table, a linear system, AND a restricted-denominator probability at the end. Escalation = composition depth, not harder arithmetic.

## What this source does well / poorly

- **Well:** denominator-first discipline is crisply teachable; honest about WHY students flail on table problems (number-grabbing); subscript method genuinely reduces error; the unknown-numerator template converts proportions into one-move solves; multi-register solutions.
- **Poorly:** probability never goes past counting (no independence, complements barely, no compound events — fine for SAT but leaves the concept thin); the probability/ratio merge means students who need probability-as-a-concept get no standalone treatment; graph-reading advice is brief; calculator-averse framing wastes the fact that the real exam has Desmos always available (our treatment should actively teach the one-line chain evaluation and decimal-comparison workflows in Desmos); some worked solutions are long-winded relative to the insight.
