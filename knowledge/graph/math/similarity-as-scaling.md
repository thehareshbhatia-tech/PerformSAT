---
id: similarity-as-scaling
section: math
domain: geometry-trigonometry
skill: geometry.similar-triangles-proportion
difficulty_span: [medium, hard]
prereqs: [triangle-angle-sum-and-exterior-shortcut, congruence-criteria-and-correspondence]
unlocks: [similarity-configurations, scaling-laws-k-k2-k3, soh-cah-toa-and-cofunction]
related: [parallel-lines-two-angle-families]
---

# Similarity: same shape at a new size — the connective spine of geometry

## What it is
Two figures are similar when they have the same shape at possibly different sizes: all corresponding angles equal, all corresponding side pairs sharing ONE common ratio (the scale factor k). For triangles, matching just two angles forces the third (they all spend the same 180° budget), so **AA is a complete similarity certificate**. Two ratio facts follow: corresponding sides across the triangles share the scale factor, AND internal ratios *within* one triangle (side a over side b) equal the matching internal ratio in the other. Angles are scale-invariant: no dilation ever changes an angle.

## Why it exists / why the SAT tests it
Similarity is the connective spine of the whole geometry domain: constant trig ratios exist *because* all right triangles sharing an acute angle are similar; the k/k²/k³ scaling laws are similarity applied to area and volume; slope is the shared leg-ratio of similar axis-triangles; shadow/pole word problems are similar triangles in costume (unverified-claim that these still appear). AA is by far the most-tested criterion (unverified-claim — plausible; check bank distribution). Direct items give one triangle's sides and one side of a similar triangle; deeper items test whether the student recognizes similarity as the tool at all.

## Mental model
**A photocopier with a zoom knob.** A similar figure is the original run through a copier at k×: every length is multiplied by k, every angle comes out untouched, and every ratio *within* the picture is preserved exactly. Any question about the copy can be answered from the original plus the single number k.

## Expert reasoning process
1. **Certify first, compute second.** Find two angle matches (shared angle, vertical angles, parallel-line families, two right angles) — that's the AA certificate. Transitivity extends it: two triangles each similar to a third are similar to each other.
2. **Write the correspondence** (letter order or tick-walking, per [[congruence-criteria-and-correspondence]]) before any ratio. The ratio equation then writes itself: side-opposite-one-tick over side-opposite-one-tick equals side-opposite-two-ticks over side-opposite-two-ticks.
3. **Find k** from the one fully-known side pair; multiply or divide every other length by k. Perimeter also scales by k (it's a sum of lengths).
4. When only a *relationship* between similar figures is known ("AB is twice DE"), name lengths with a shared multiplier — d and 2d — never invent concrete numbers; invented values can silently contradict later givens.
5. Choose the faster of the two ratio facts: across-triangle (with k) when one figure is fully known; within-triangle (a/b = a′/b′) when each triangle has partial information.
6. On the coordinate plane, recognize slope as similarity: parallel lines cut similar right triangles against the axes, and the slope IS the shared leg ratio. Pick similarity when the givens are lengths, slope algebra when the givens are equations.

## Misconceptions
- **similar-by-eyeball** — certifying similarity from visual resemblance, and *denying* it for rotated or flipped pairs. Forms because school exposure is same-orientation pairs. The test exploits both directions: flipped similar pairs (student says "not similar") and lookalike triangles sharing no two angles (student says "similar"). Distractor: the answer computed from a false similarity.
- **concrete-numbers-for-ratios** — instantiating "AB = 2·DE" as AB = 2, DE = 1. Forms because students distrust variables and want numbers to push. The invented values contradict later givens and the error surfaces far from its cause. Fix is the shared-multiplier discipline (d, 2d).
- **angles-scale-too** — believing a k = 4 dilation multiplies angles by 4. Forms from over-applying "everything scales." Tested via NOT-true selection items about dilations.
- **perimeter-scales-like-area** — expecting perimeter to pick up k² (or area to stay at k — the deeper version lives in [[scaling-laws-k-k2-k3]]). Perimeter is a length-sum, so it scales by k exactly.
- **within-across-blur** — equating a within-triangle ratio to an across-triangle ratio (a/b set equal to a/a′). Forms because both are "ratios from similar triangles." Produces answers off by a factor of k or its square.

## Diagnostic indicators
- Rejects similarity on flipped/rotated pairs, or asserts it on angle-mismatched lookalikes → **similar-by-eyeball**.
- Work shows invented side lengths (AB = 2, DE = 1) that clash with a later given → **concrete-numbers-for-ratios**.
- On dilation NOT-true items, picks the angle statement as true-scaling → **angles-scale-too**.
- Perimeter answers multiplied by k² → **perimeter-scales-like-area**.
- Ratio equations mixing one within-pair and one across-pair → **within-across-blur** (often co-occurs with name-order-blindness — check correspondence first).

## Remediation pathways
- **similar-by-eyeball**: re-anchor on the certificate — "similar means I found two angle matches, not that it looks alike." Drill: five pairs, some flipped-similar, some lookalike-dissimilar; the student must name the two matched angles or refuse the claim.
- **concrete-numbers-for-ratios**: show the contradiction — one problem where AB = 2, DE = 1 breaks a later given, then re-solve with d/2d. The burn teaches the discipline.
- **angles-scale-too**: photocopier image — zoom a triangle on a screen; the corners don't "open up."
- **perimeter-scales-like-area**: compute a 3×-scaled triangle's perimeter by summing sides; it's visibly 3×, not 9×.
- **within-across-blur**: color-code — one color for the small triangle's sides, another for the large; a legal ratio equation is either same-color/same-color = same-color/same-color (within) or two mixed-color fractions with matching positions (across).
- If certification keeps failing, revisit [[parallel-lines-two-angle-families]] and [[triangle-angle-sum-and-exterior-shortcut]] (where the angle matches come from).

## Mastery criteria
Student certifies similarity by naming the two angle matches, writes correspondence before ratios, solves for unknown sides via k without inventing lengths, and states what does/doesn't scale (lengths and perimeter by k; angles unchanged). Proof: medium similar-triangle items ≥90% plus at least one correct shared-multiplier setup and one correct dilation NOT-true item.

## Difficulty ladder
- **Easy**: two separated, same-orientation triangles; find one side given the rest.
- **Medium**: certify AA yourself (shared angle + right angles, or parallel cut); flipped/rotated pairs; perimeter-ratio questions; shadow/pole word costumes.
- **Hard**: overlapping figures where similarity must be *noticed* ([[similarity-configurations]]); transitive chains through a third triangle; coordinate-plane similarity vs. slope route choice; composition with [[scaling-laws-k-k2-k3]] (area ratios) and [[soh-cah-toa-and-cofunction]] (trig transfer).

## Teaching notes
- **Struggling**: the photocopier metaphor plus one physical demo (zoomed shapes on screen). Keep triangles separated and same-orientation until ratios are reliable, then introduce one flip.
- **Average**: push certification discipline — "no ratio until you've named two angle matches and written the correspondence." Teach the shared-multiplier (d, kd) technique explicitly; students won't invent it.
- **Advanced**: within-triangle vs. across-triangle ratio choice as a speed decision; transitivity chains; coordinate-plane items solvable both by slopes and by similarity, solved both ways once.
- **1500+**: similarity as the *recognition* layer — items where nothing says "similar" and the whole task is seeing the AA certificate inside a busy figure, then handing off to trig or scaling laws.
