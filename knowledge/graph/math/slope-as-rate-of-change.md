---
id: slope-as-rate-of-change
section: math
domain: algebra
skill: slope-from-two-points, slope-as-rate-of-change-in-context
difficulty_span: [easy, hard]
prereqs: [linearity-constant-rate-model, coordinate-plane-literacy, fraction-operations]
unlocks: [line-from-known-facts, parallel-perpendicular-slopes, slope-as-rate-of-change, interpret-linear-parameters]
related: [data-display-decoding]
---

# Slope: the constant per-unit change, seen or computed

## What it is
Slope is how much y changes per one-unit change in x — the geometric name for the rate in a constant-rate relationship. On a line it is the same everywhere: any two points give the same Δy/Δx regardless of which pair you sample. A slope of m means m units of vertical change per 1 unit right; a fractional slope p/q means y changes by p whenever x changes by q — and any equal rescaling of that ratio describes the same line.

## Why it exists / why the SAT tests it
Nearly every line item requires the slope somewhere — from a graph, two points, a table, an equation, or a story. The exam probes it three ways: compute it (mechanics), read it (per-unit meaning in context), and reason about it without computing (sign and size class). It is also the gateway concept: parallel/perpendicular logic, model interpretation, and best-fit reasoning all sit on it.

## Mental model
**A staircase with identical steps.** Walking the line left-to-right, every step over by one goes up (or down) by the same amount — that amount is the slope. Two equivalent access routes, chosen by what's in front of you:
- **Count it** (picture available): draw a small right-triangle step between two lattice points and count legs. Less error-prone when the graph is clean.
- **Compute it** (no picture, or points far apart): m = (y₂ − y₁)/(x₂ − x₁), with one non-negotiable rule — subtract in the SAME order in numerator and denominator.

The sign convention that kills most errors: always traverse left-to-right, so Δx > 0 and only Δy carries sign. And the proportional shortcut: because the ratio is constant, Δy = m·Δx for ANY interval — change questions never require solving the equation twice.

## Expert reasoning process
1. On any line item, get the slope first — almost nothing about a line is answerable without it. (unverified-claim as a universal rule; near-universal in our bank.)
2. Choose the route: clean drawn graph → count a step between two gridline crossings (never estimate fractional coordinates; anchor only where the line crosses lattice intersections). Numeric points or a table → formula with consistent order.
3. A table is just a point list: subtract adjacent rows for Δx and Δy; the ratio must be constant (that constancy is also the test for "is this linear?"); non-adjacent rows scale the same ratio.
4. Normalize before comparing to answers: reduce p/q, or convert to per-1-unit form. Distractors are rescalings and reciprocals of the truth.
5. For "how much does y change when x changes by k": Δy = m·k, one multiplication. For an unknown coordinate on a known-slope line: set the slope expression between the points equal to the slope value and solve — one template covers the whole item family.
6. Sanity-check the sign against the picture or story: rising left-to-right ⇒ positive; falling ⇒ negative.

**Desmos vs. algebra:** counting a drawn lattice step beats any tool. For two numeric points, mental/paper formula is faster than typing — but when coordinates are ugly (decimals, large numbers), plotting both points and eyeballing direction is a cheap sign-check, and a Desmos table with the two rows makes the subtraction typo-proof. For unknown-coordinate items, Desmos can verify by plotting the finished line through the known point. Teach: slope extraction is a by-hand skill; Desmos is the checker for sign and messy arithmetic.

## Misconceptions
- **run-over-rise-inversion** — computing Δx/Δy. Forms because nothing in the words "rise" and "run" pins which goes on top, and plotting habits (over-then-up) train horizontal-first thinking. Distractors are reciprocals of the correct slope.
- **mismatched-subtraction-order** — (y₂ − y₁)/(x₁ − x₂): treating the two subtractions as independent instead of one consistent traversal. Produces exactly a sign flip; sign-variant distractors harvest it.
- **fraction-sign-scatter** — treating (−p)/q, p/(−q), and −(p/q) as different numbers. Forms from weak fraction-sign fluency; distractors present the true slope in an unfamiliar sign arrangement.
- **scale-mismatch acceptance** — accepting "0.1 per 248" when the truth is "1 per 248" (or "10 per 2,480"). Forms from never testing choices against the Δy/Δx ratio; distractors are correct-looking rescalings off by a factor of ten.
- **steepness-equals-value** — ranking negative slopes by visual steepness, so a steep downhill is called "greater." Forms because steepness is the salient percept; signed value is the mathematical order. Steep-downhill is the SMALLEST.

## Diagnostic indicators
- run-over-rise-inversion: picks the reciprocal distractor; explain-back walks horizontal-first.
- mismatched-subtraction-order: picks the sign-flipped distractor; scratch work shows points labeled inconsistently.
- fraction-sign-scatter: hesitates between equivalent sign forms; wrong on items whose choices differ only in sign placement.
- scale-mismatch: wrong only on items with rescaled-rate distractors; explains the rate without stating "per one."
- steepness-equals-value: errs specifically on compare-negative-slopes items while computing single slopes fine.

## Remediation pathways
- run-over-rise-inversion: re-anchor on meaning, not mnemonic — slope answers "how much does y change per x," so the y-change must be on top; check with a slope-2 line counted aloud.
- mismatched-subtraction-order: teach traversal, not formula — pick the leftmost point, walk right; or physically draw the arrow between points and subtract head-minus-tail in both coordinates.
- fraction-sign-scatter: three-forms-one-number drill with numeric verification (−6/2, 6/(−2), −(6/2) all evaluate to −3). Prereq to revisit: [[fraction-operations]].
- scale-mismatch: install the per-1-unit normalization habit before reading choices.
- steepness-equals-value: number-line placement of several slopes including negatives; steepness = |m|, order = m. Naming the two different questions dissolves the conflict.

## Mastery criteria
Student extracts the correct signed slope from a graph, a point pair, and a table, normalizes rate forms, and uses Δy = m·Δx for interval questions — with no reciprocal or sign-variant distractor picks over recent sessions. The real proof: solving an unknown-coordinate item by setting a slope expression equal to a slope value unprompted.

## Difficulty ladder
- **Easy:** slope between two plotted lattice points; read m from y = mx + b.
- **Medium:** two numeric points with negatives; slope from a table; slope needed as step one of an equation build.
- **Hard:** unknown-coordinate items (slope-expression = value); slope in terms of abstract constants; fractional-slope proportional questions; multi-line comparisons; slope hidden behind function notation or context so the item never says "slope." Module 2 Hard hides the skill's name and parameterizes the points — the arithmetic stays tame.

## Teaching notes
- **Struggling:** staircase imagery and step-counting on clean graphs ONLY until sign and direction are automatic; delay the formula — it's a fallback, not the foundation.
- **Average:** formula with the consistent-order rule taught as traversal; tables as point lists; the Δy = m·Δx shortcut.
- **Advanced:** unknown-coordinate template; normalization against rescaled distractors; slope through function notation (f(b) − f(a) over b − a).
- **1500+:** parameterized and composed items — slope of one function defined via another, ratio-of-coordinates through the origin; coach recognizing slope questions that never mention slope.
