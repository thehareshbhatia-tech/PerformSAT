# Raw notes — College Panda SAT Math, Ch 21 "Trigonometry" (Geometry & Trigonometry)

Source scope: p0124 – p0129. p0124 left half opens the chapter; p0129 ends with exercise set 2 (chapter 22 begins on p0130).

## Concepts taught

- `right-triangle-trig-ratios` — sine, cosine, tangent defined as side-length ratios in a right triangle (opposite/hypotenuse, adjacent/hypotenuse, opposite/adjacent), always relative to a chosen acute angle.
- `trig-outputs-are-numbers` — sin x is an ordinary number, not a mystical object; the notation is a function of the whole angle, and the ratio is what matters.
- `why-trig-ratios-are-constant` — all right triangles sharing an acute angle are similar, so the side ratios are fixed; this is WHY sin 30° is the same in every triangle and the deep reason trig works at all.
- `trig-side-solving` — given one acute angle and one side, pick the ratio that links the known side to the wanted side and solve; answers often stay in symbolic form (side × trig-of-angle or side ÷ trig-of-angle).
- `cofunction-identity` — sine of an angle equals cosine of its complement (and vice versa); in radians the complement is π/2 − θ. Falls out of the two acute angles of one right triangle sharing the same pair of legs with roles swapped.
- `convenient-lengths-technique` (our name) — when only a ratio is given (e.g., sin of an angle as a fraction), assign the simplest side lengths consistent with it, complete the triangle with the Pythagorean theorem, and read off any other ratio; legitimate because only ratios are asked.
- `similar-triangle-trig-transfer` — corresponding angles of similar triangles are equal, so their trig values are equal; a ratio computed in one triangle answers a question about the other, no scaling needed.
- `unit-circle-definitions` — for angles outside (0°, 90°): place the angle in standard position on a unit circle; cos = x-coordinate, sin = y-coordinate, tan = y/x of the terminal point.
- `reference-angle-evaluation` — find the acute angle between the terminal side and the x-axis, build the special right triangle with hypotenuse 1, then attach signs from the quadrant.
- `coterminal-reduction` — subtract full turns (360° / 2π) until the angle lands within one revolution; needed for large radian angles.
- `quadrant-sign-rules` — which trig functions are positive in each quadrant (all / sine / tangent / cosine going I→IV).
- `desmos-first-trig-evaluation` — practical exam strategy: evaluate any trig value numerically with the calculator and compare decimals against decimalized answer choices; hand unit-circle work is for special angles and for understanding only.

## Teaching philosophy observed

- Concrete before abstract: a specific Pythagorean-triple triangle carries the definitions; the acronym (memorization aid) arrives only after the ratios are motivated.
- The similarity argument is presented as the payoff insight — the book explicitly answers "why is sin 30° ALWAYS ½" with two nested similar triangles, and returns to the same idea later to justify trig transfer across similar triangles. Similarity is the chapter's connective tissue.
- Misconception-first framing: before any problem, the author names the notation error students make (splitting a trig expression from its argument as if it were multiplication) and links it to the same error with function notation generally.
- Honest scoping of the unit circle: taught for conceptual depth, then explicitly demoted for exam execution — "use the calculator for actual values." This is a deliberate understand-deep/execute-fast split.
- Dual solutions shown (identity-based vs. construct-the-triangle) for the cofunction example, teaching that a memorized identity and a first-principles rebuild reach the same place — insurance for students who forget identities.

## Expert reasoning patterns (generalized)

1. **Label from the angle's perspective.** Opposite/adjacent are relative to the chosen angle; the first move on any right-triangle item is to re-derive which side is which for THAT angle, never from memory of a picture orientation.
2. **Pick the ratio containing exactly (known, wanted).** Side-solving is a lookup: which of the three ratios involves the side I have and the side I want? Set up, solve, and be comfortable leaving answers symbolic (the exam often wants the expression, not the decimal).
3. **Complement swap on sight.** When a problem pairs an angle's sine with the complement's cosine (the two acute angles of any right triangle), transfer the value instantly — recognizing that A + B = 90° in a right triangle is the trigger.
4. **Invent the cleanest triangle.** Given only a trig ratio, instantiate it: assign the two named sides the fraction's values, Pythagorean-complete the third, then compute anything else. Experts know actual sizes are irrelevant because everything asked is a ratio.
5. **Memorized Pythagorean triples as speed fuel.** The exercises lean hard on 3-4-5, 5-12-13, 8-15-17, 7-24-25, 20-21-29, and even 65-72-97 / 119-120-169 — an expert recognizes the third side without computing.
6. **Similarity = angle equality = trig equality.** For two similar triangles, map corresponding vertices, conclude corresponding angles equal, and move any trig value across for free — then compute it in whichever triangle has concrete numbers.
7. **Unit-circle evaluation loop:** reduce coterminally to one turn → identify quadrant → form reference angle → special-triangle coordinates → attach quadrant signs. Convert unwieldy radian angles to degrees first if that's more comfortable.
8. **Desmos discipline (product-relevant).** Evaluate trig numerically in Desmos and decimal-compare with choices even when choices are exact radicals. CRITICAL mode hazard: an expression in π is radians; a degree-marked angle is degrees. Our Desmos teaching must include setting/checking the angle mode (or typing the degree symbol) because mode mismatch silently produces a wrong-but-plausible decimal — the book asserts radian-assumption-when-π-appears but never warns about calculator mode; we should.

## Misconceptions targeted (and why students hold them)

- **trig-notation-splitting** — treating "sin 2x" as sin × 2x, so dividing by x seems to leave "sin 2." Held because years of algebra train juxtaposition-as-multiplication; function notation is the exception. Produces algebra that feels legal and answers that match a distractor. Same root as f(x) → f·x errors.
- **sides-absolute-not-relative** — believing "opposite" and "adjacent" are properties of the triangle drawing rather than of the chosen angle; produces swapped ratios (cos given, sin computed) — distractors bank on the swap (e.g., answer sets containing both a/c and b/c).
- **ratio-requires-real-lengths** — refusing to reason from a bare ratio ("but we don't know the sides!"), because school problems always supply concrete lengths. Blocks the convenient-lengths technique; students who hold it grind to a halt on find-the-other-ratio items.
- **similar-triangles-need-scaling** — computing a scale factor to move trig values between similar triangles (harmless but slow), or worse, multiplying the trig value by the scale factor (fatal). Root: over-generalizing "similar means multiply by k" from side lengths to ratios.
- **acute-only-trig** — panic or refusal when the angle exceeds 90° (or is negative), because the right-triangle definition literally cannot draw it. The unit-circle definitions are framed as the completion of an intentionally incomplete first definition.
- **sign-blindness-by-quadrant** — evaluating the reference angle correctly but keeping everything positive; produces the sign-flipped distractor (answer sets routinely contain ±same-value pairs).
- **degree-radian-mode-confusion** — assuming a bare number is degrees; on the SAT, π in the expression signals radians. In calculator work this becomes a mode error (ours to teach; see pattern 8).

## SAT patterns claimed (unverified-claim — verify vs. official + bank)

- "Represent the length" items: give an angle and one side, answer choices are the four combinations {side·sin, side·cos, side·tan, side/sin, side/cos, side/tan} — testing ratio selection, not arithmetic.
- Cofunction items in two costumes: numeric (sin B given, cos A asked, right angle at C) and abstract (cos(90°−x°) given, cos x° asked → needs convenient-triangle completion).
- Similar-triangle trig transfer, often with Pythagorean-triple sides and sometimes chained with "which angle is the right angle" deductions (longest side = hypotenuse).
- Sufficiency-style item (which additional info determines a side) — rare format on SAT; verify.
- Unit-circle evaluation with large radian angles (multiple turns) at the hard end.
- Circle-composite: triangle inscribed with one side a diameter (right angle implied), area expressed in trig of an angle — trig meets Thales at the hard end.
- Claim: any trig expression containing π is in radians on the SAT.

## Prerequisite edges implied

- `right-triangle-trig-ratios` ← Pythagorean theorem; triangle similarity (AA); fraction/ratio fluency.
- `cofunction-identity` ← angle sum of a triangle (acute angles of a right triangle are complementary).
- `unit-circle-definitions` ← coordinate plane; special right triangles (30-60-90, 45-45-90); `pi-radians-equals-180` (Ch 20) for coterminal work in radians.
- `similar-triangle-trig-transfer` ← similarity correspondence notation (which vertex maps to which).
- `desmos-first-trig-evaluation` ← degree-radian conversion; decimal comparison habits.

## Difficulty escalation observed

Easy: read a ratio straight off a labeled triangle. Medium: pick-the-ratio side solving with symbolic answers; cofunction swaps; convenient-lengths completion. Hard: similarity transfer with correspondence bookkeeping and triple recognition; unit-circle evaluation of large/negative radian angles; trig composed with circle theorems (diameter → right angle) yielding expression answers. Escalation = more layers of identification before any trig is computed.

## What this source does well / poorly

- **Well:** the similarity justification for why ratios are constant (most books skip it); naming the notation-splitting misconception explicitly; the convenient-lengths technique taught as a legitimate general move; honest calculator-first execution advice with the unit circle repositioned as understanding-only; dual solutions building redundancy.
- **Poorly:** no calculator mode (deg/rad) warning despite advising calculator-first — a real hazard our Desmos-embedded product must close; unit-circle section evaluates specific angles but never builds the sine/cosine-as-coordinates intuition into a graph or wave connection; ASTC-style sign mnemonics are taught as acronym-memory where a quick "which coordinate is negative here" check is more robust; sufficiency-format exercise may overfit an item type the digital SAT doesn't really use (verify).
