---
id: scaling-laws-k-k2-k3
section: math
domain: geometry-trigonometry
skill: geometry.similar-figures-area-ratio
difficulty_span: [medium, hard]
prereqs: [similarity-as-scaling]
unlocks: [scaling-laws-k-k2-k3]
related: [triangle-properties-toolkit, percent-as-multiplier]
---

# Scaling laws: lengths ×k, areas ×k², volumes ×k³

## What it is
When every linear dimension of a figure scales by a factor k, lengths and perimeters scale by k, areas scale by k², and volumes scale by k³. The law runs in reverse through roots: an area ratio of 16 means a side ratio of 4; a volume ratio of 216 means a linear ratio of 6. When dimensions scale by *different* factors, each factor enters with the exponent its dimension carries in the formula (a cylinder with radius halved and height tripled changes volume by (1/2)² × 3 = 3/4).

**Why k² (the proof both sources skip, filled here):** area is counted in unit squares. Scale a figure by k and every unit square becomes a k-by-k square containing k² original units — so ANY area, being a sum of (limits of) unit squares, picks up k². Equivalently: a k-scaled rectangle has area (k·l)(k·w) = k²·lw, and every straight-edged figure decomposes into rectangles and right triangles that each do this. The same argument in three dimensions, with unit cubes, gives k³. That is why the law is shape-independent: it's about the *dimension* of the quantity, not the figure.

## Why it exists / why the SAT tests it
This family is a high-frequency hard-question engine (unverified-claim, but consistent with our M2 calibration): the same law arrives costumed as squares (perimeter↔area), polygons (side ratio → area ratio), prisms and cylinders (edge ratio → volume ratio), spheres (radius % change → volume % change), and triangles (area ratio → side ratio). It probes whether proportional reasoning is dimension-aware — the single deepest transfer failure in the domain.

## Mental model
**Exponent bookkeeping.** Every quantity has a dimension: length¹, area², volume³. A scale factor k enters a quantity raised to that quantity's dimension. Ratios travel between dimensions only via powers and roots — never linearly.

## Expert reasoning process
1. Extract the linear factor first. "30% longer radius" → k = 1.30 (factor, not percent). "Perimeter doubles" → k = 2 (perimeter is linear).
2. Raise k to the target's dimension: area factor k², volume factor k³.
3. Reverse direction = root first: given an area or volume ratio, take the square/cube root to recover k *before* touching any specific length.
4. Mixed factors: write the formula, substitute each dimension as (factor × original) WITH parentheses — π(1.3r)²h, not π·1.3r²·h — then collect the numeric coefficient. The parentheses step is the entire game.
5. Translate factor ↔ percent only as the final step: factor 1.69 → 69% greater (subtract 1); "169% of" and "69% greater" are the same statement. Keep the two representations separate until the end.
6. Sanity-check by magnitude: doubling a radius should QUADRUPLE a circle's area; if your answer merely doubled something, a dimension got dropped.
7. Know when NOT to use the shortcut: it requires *similar* figures (all dimensions sharing one k). Figures sharing one dimension but not others aren't similar — use the formula route.

## Misconceptions
- **linear-scaling-transfer** — "sides ×5 ⇒ area ×5," or "radius +30% ⇒ area +30%." The deepest misconception in the domain: proportional reasoning is drilled for years on linear relationships and gets over-applied to squared/cubed quantities. Distractor sets are built around it — the 30 answer sits waiting on every 30%-radius item, and compare-two-cylinders choice ladders (8/16/32/64) map each partial-reasoning state to a choice.
- **dropped-parentheses-substitution** — substituting a scaled dimension without parentheses (π·1.30r² instead of π(1.30r)²), so the factor never gets squared. Root cause is symbolic hygiene, not geometry; it produces the same wrong answers as linear-scaling-transfer via a different path (visible in written work).
- **factor-percent-conflation** — reporting a 1.69× result as "169% greater," or "69% greater" as "69 times." Forms because everyday speech blurs "times more" and "percent more." Distractors include 169 alongside 69.
- **perimeter-area-ratio-mixing** — assuming perimeter ratios behave like area ratios (or vice versa). Perimeter is a length-sum: it scales by k exactly. Items deliberately alternate perimeter-asks and area-asks to force the distinction.
- **root-skipping in reverse** — given "area is 16 times larger, how do the sides compare," answering 16 (or 8). Forms because the reverse direction is drilled less; the student pattern-matches forward.

## Diagnostic indicators
- Picks the linear-factor answer on an area/volume question (30 for a 30% radius increase; 2 when 8 is correct for a doubled cube) → **linear-scaling-transfer**.
- Written work shows unparenthesized substitution → **dropped-parentheses-substitution** (distinguish from the above by inspecting work: same answer, different cause, different fix).
- Answers 169 where 69 is correct (or reverse) → **factor-percent-conflation**.
- Applies k² to a perimeter question → **perimeter-area-ratio-mixing**.
- Given a ratio of areas/volumes, reports it (or halves it) as the side ratio → **root-skipping**.
- Fast-but-wrong on these items specifically, accurate when forced to substitute formally → shortcut adopted before it was earned.

## Remediation pathways
- **linear-scaling-transfer**: the unit-square proof above, made physical — draw a 1×1 square, scale by 3, count the 9 squares. Then the algebra route (substitute 3s into s²) to show the two agree. Requires BOTH the picture and the algebra; the picture alone doesn't transfer to volume.
- **dropped-parentheses-substitution**: pure symbolic drill — substitute (2x), (1.3r), (kh) into five formulas, expanding each. Flag the parentheses as the load-bearing keystroke.
- **factor-percent-conflation**: two-column translation table (factor | percent-greater) filled by the student: 1.3→30%, 1.69→69%, 2→100%, 3→200%. The 2→100% row does the teaching.
- **perimeter-area-ratio-mixing**: one figure, both questions — scale a rectangle by 3, compute perimeter ratio (3) and area ratio (9) side by side.
- **root-skipping**: reverse drills only, five in a row (area ratio given → side ratio; volume ratio given → radius ratio), including non-perfect powers to force explicit roots.
- If the substitution route itself fails, the gap is exponent rules ((kr)³ = k³r³) — revisit the algebra prereq, not geometry.

## Mastery criteria
Student states the dimension of the asked quantity before computing, applies k/k²/k³ in both directions (roots included), handles mixed factors via parenthesized substitution, and translates factor↔percent without conflation. Proof: hard scaling items across at least three costumes (2D, 3D, percent-language) correct consistently, plus one correct refusal to apply the shortcut to non-similar figures.

## Difficulty ladder
- **Easy**: (rare) doubled side → area comparison with clean integers.
- **Medium**: forward scaling with clean factors across shapes; perimeter-vs-area alternation; reverse with perfect squares/cubes.
- **Hard**: percent-language scaling (30% longer → 69% greater) and reversals via root extraction; mixed-factor scaling through a formula (radius halved, height tripled); composition with [[scaling-laws-k-k2-k3]] and with algebra-interpretation items where the factor must be read out of an expression.

## Teaching notes
- **Struggling**: unit-square counting only, in 2D, until "scale 3 → 9 squares" is automatic. Delay volume and percent language.
- **Average**: earn the shortcut — three problems by full substitution (with the parentheses hazard flagged), then compress to the k²/k³ rule. Teach the reverse direction the same day so forward doesn't monopolize the pattern.
- **Advanced**: mixed-factor items and percent-language reversals; drill the sanity-check habit (dimension of the answer vs. dimension of the given).
- **1500+**: the law as a 10-second tool inside composites — spheres with percent changes, similar-triangle area ratios feeding perimeter answers, and spotting the ONE non-similar setup in a set where the shortcut is illegal.
