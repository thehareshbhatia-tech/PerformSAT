---
id: soh-cah-toa-and-cofunction
section: math
domain: geometry-trigonometry
skill: geometry.right-triangle-trig-ratios, geometry.trig-ratio-with-known-triple
difficulty_span: [easy, hard]
prereqs: [similarity-as-scaling, pythagorean-theorem-and-triples]
unlocks: [soh-cah-toa-and-cofunction]
related: [special-right-triangles, similarity-configurations]
---

# Trig ratios and the cofunction identity: similarity, packaged

## What it is
For a chosen acute angle in a RIGHT triangle: sin = opposite/hypotenuse, cos = adjacent/hypotenuse, tan = opposite/adjacent. "Opposite" and "adjacent" are relative to the chosen angle — the other acute angle swaps them; the hypotenuse is fixed by the right angle. A trig value is an ordinary number, and it depends only on the angle's measure, never the triangle's size — because all right triangles sharing an acute angle are similar, so their side ratios are identical. **Cofunction identity**: sin x° = cos(90 − x)° and vice versa, because the two acute angles of a right triangle are complementary and each one's opposite side is the other's adjacent side. Corollary: if sin x = cos y for acute angles, then x + y = 90.

## Why it exists / why the SAT tests it
The exam tests trig as *ratio selection and transfer*, not computation: "represent the length" items where the choices are the six combinations {side·sin, side·cos, side·tan, side/sin, side/cos, side/tan}; cofunction items numeric and algebraic; trig transfer across similar triangles. The vast majority of sine+cosine items reduce to the complement identity (unverified-claim — check bank). Because ratios are size-free, a given trig value plus one length resolves an entire triangle — a trig value IS a similarity class ("tan = 12/5" means "this triangle is 5-12-13-shaped").

## Mental model
**A trig value is a similarity class with a name.** sin 30° = 1/2 names the entire family of right triangles containing a 30° angle. Given a ratio, you hold the family; given one real length, you know the scale; together they resolve everything. And within any single right triangle, the two acute angles look at the same two legs from opposite ends — that IS the cofunction identity.

## Expert reasoning process
1. **Label from the angle's perspective, every time.** First move on any right-triangle trig item: re-derive which side is opposite and which is adjacent for THAT angle. Never from the picture's orientation or memory.
2. **Pick the ratio containing exactly (known, wanted).** Side-solving is a lookup: which of the three ratios links the side I have to the side I want? Set up, solve, and be comfortable leaving the answer symbolic — the exam often wants the expression, not a decimal.
3. **Complement swap on sight.** Right angle at C means A + B = 90, so sin A = cos B instantly. Algebraic costumes — sin(2x)° = cos(3x − 10)° — become the linear equation 2x + 3x − 10 = 90.
4. **Convenient-lengths completion.** Given only a ratio (sin θ = 3/5), instantiate the cleanest triangle: opposite 3, hypotenuse 5, Pythagorean-complete the third side (4 — spot the triple), then read off any other ratio. Legitimate because only ratios are ever asked.
5. **Similarity transfer.** Corresponding angles of similar triangles are equal, so their trig values are equal — move the value across for free (NO scale factor), computing it in whichever triangle has concrete numbers. Verify correspondence by letter order first.
6. **Ratio-first economy.** When the answer is itself a ratio, actual lengths are irrelevant; work in lowest-terms units and skip the calculator. When a numeric evaluation IS needed, the calculator does it — but see the mode hazard in [[soh-cah-toa-and-cofunction]] and [[radians-and-arc-length]].
7. **Right triangle or no trig.** An angle in an oblique triangle still has a sine, but you may not compute it from that triangle's sides. Build or find a right triangle first (drop an altitude).

## Misconceptions
- **sides-absolute-not-relative** — believing opposite/adjacent are properties of the drawing rather than of the chosen angle. Produces swapped ratios (asked for sin, computes cos); answer sets bank on it by listing both a/c and b/c. Forms because early examples fix one orientation.
- **oblique-trig** — computing a trig ratio from a non-right triangle's sides because an angle and two sides are visible. Forms because the ratio definitions get memorized without their right-triangle precondition. The distractor is the ratio of the visible sides.
- **trig-notation-splitting** — treating sin 2x as sin × 2x, so "dividing by x" seems to leave sin 2. Forms because years of algebra train juxtaposition-as-multiplication; function notation is the exception (same root as f(x) → f·x errors). Produces algebra that feels legal and lands on a distractor.
- **ratio-requires-real-lengths** — refusing to reason from a bare ratio ("but we don't know the sides!"). Forms because school problems always supply concrete lengths. Blocks the convenient-lengths technique entirely — the student stalls rather than errs.
- **similar-triangles-need-scaling** — computing a scale factor to move a trig value between similar triangles (slow but harmless), or multiplying the trig value BY the scale factor (fatal). Forms by over-generalizing "similar means multiply by k" from lengths to ratios.

## Diagnostic indicators
- Answer is the sibling ratio (cos where sin was asked; a/c vs b/c pairs) → **sides-absolute-not-relative**.
- Ratio computed from an oblique triangle's labeled sides → **oblique-trig**.
- Algebra steps that cancel through a trig argument → **trig-notation-splitting**.
- Long stall then skip on "sin θ = 3/5, find tan θ" items → **ratio-requires-real-lengths**.
- Trig-transfer answers off by exactly the scale factor k → **similar-triangles-need-scaling** (fatal form).
- On represent-the-length items, picks side/sin where side·sin is correct (or inverse) → ratio-selection confusion, usually **sides-absolute-not-relative** upstream.

## Remediation pathways
- **sides-absolute-not-relative**: one triangle, both angles — compute all six ratios from each acute angle side by side; the swap becomes visible. Install "label from the angle" as the mandatory first written step for five items.
- **oblique-trig**: re-derive the definitions to show the right angle is load-bearing; then one oblique item fixed by dropping an altitude, so the student learns the repair, not just the prohibition.
- **trig-notation-splitting**: connect to function notation — sin( ) is a machine like f( ); you can't cancel through a machine. Two burn examples from their own work.
- **ratio-requires-real-lengths**: legitimize the move — since all triangles with sin θ = 3/5 are similar, ANY of them answers a ratio question; pick the easiest. Then three convenient-lengths drills with triples (3/5, 5/13, 8/17).
- **similar-triangles-need-scaling**: contrast — sides scale by k, ratios of sides scale by k/k = 1. Compute one example both ways.
- If Pythagorean completion is the blocker, revisit [[pythagorean-theorem-and-triples]]; if similarity certification, [[similarity-as-scaling]].

## Mastery criteria
Student labels sides from the chosen angle unprompted, selects the correct ratio on represent-the-length items (symbolic answers), executes cofunction swaps in both numeric and algebraic costume, completes triangles from bare ratios via triples, and transfers trig values across similar triangles without scaling. Proof: mixed medium/hard set spanning all four item costumes at ≥85%, no sibling-ratio picks.

## Difficulty ladder
- **Easy**: read a ratio off a fully labeled right triangle.
- **Medium**: represent-the-length (symbolic answer choices); numeric cofunction (sin B given, cos A asked); convenient-lengths completion with a triple.
- **Hard**: algebraic cofunction (solve for the parameter); similarity transfer chained with which-angle-is-right deductions (longest side = hypotenuse); trig hidden in oblique/coordinate figures where the right triangle must be constructed; circle composites (inscribed triangle on a diameter — right angle implied — with area expressed in trig; unverified-claim as a recurring hard shape).

## Teaching notes
- **Struggling**: one concrete 3-4-5 triangle carries the definitions; the acronym arrives only after the ratios are motivated. Drill labeling-from-the-angle as a physical pointing exercise before any computation.
- **Average**: sell the similarity insight — WHY sin 30° is always 1/2 (nested similar triangles). Teach the cofunction identity from the shared-legs picture, not as a formula; drill ratio selection on represent-the-length items.
- **Advanced**: convenient-lengths as a general move; algebraic cofunction; trig transfer with correspondence bookkeeping under flipped figures.
- **1500+**: trig values as instant similarity classes (ratio → triple → whole triangle in one step); constructed right triangles inside oblique and circle figures; leave everything symbolic until the final keystroke.
