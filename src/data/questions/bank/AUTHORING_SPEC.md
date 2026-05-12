# SAT-Style Question Authoring Specification

## Granularity Principle (2026-05-12)

**A pattern is the correct granularity when a student who has mastered one cannot, on test day, apply that mastery to a question of a different pattern without applying a different method.**

This rule is the difference between drilling that actually targets a student's weakness vs drilling that vaguely covers the topic. Author at the level of *specific test-day skill*, not at the level of *textbook section*.

### Examples of correct granularity

| Too broad ❌ | Correct ✅ |
|---|---|
| `linear-equations` | `parallel-line-through-a-point`, `perpendicular-from-standard-form`, `parallel-lines-no-solution` |
| `pythagorean-theorem` | `right-triangle-pythagorean` (generic) + `pythagorean-triple-recognition` (5-12-13, 3-4-5 shortcut) |
| `function-evaluation` | `function-evaluation` (direct: compute f(3)) + `solve-for-input-from-output` (inverse: given f(a)=c find a) |
| `quadratic-via-factoring` | `quadratic-via-factoring` (factor and use zero-product) + `vieta-sum-product-of-roots` (Vieta's directly) |
| `tangent-lines` | `tangent-line-and-discriminant` (parabola) + `line-tangent-to-circle` (circle, distance-from-center) |

### Tests when proposing a new pattern OR a new alias

Before authoring items for a slug, ask:

1. **Does this require a different method on test day** than any existing pattern? If yes → new pattern, author items.
2. **Is this the same method but renamed** (e.g., "Solving a Proportion" vs "Proportion-Ratio")? If yes → add an entry in `src/data/questions/extractSatPattern.js` PATTERN_ALIASES.
3. **Does this name suggest a textbook unit** (e.g., "Linear Equations," "Functions," "Statistics")? If yes → it's too broad, split into specific methods.

When in doubt, **prefer splitting over aliasing**. Aliasing collapses skills; splitting preserves them. The bank getting bigger is cheap; sending students to the wrong drill is expensive.

### Anti-patterns to avoid

- Aliasing `solve-f-x-c` → `function-evaluation`. Inverse evaluation IS a different skill from direct evaluation.
- Aliasing `pythagorean-theorem-5-12-13` → `right-triangle-pythagorean`. Triple recognition is a memorization shortcut, not generic Pythagorean computation.
- Aliasing `sum-product-of-roots-vieta-s` → `quadratic-via-factoring`. Vieta's is the alternative to factoring, not a synonym for it.
- Aliasing across geometric contexts (line tangent to parabola vs line tangent to circle): different setups.

See `docs/SAT_PATTERN_GRANULARITY_PROPOSAL.md` for the full audit and rationale.

---

## Copyright-Safety Rules

1. **No direct copying.** Every stem, data set, answer set, and explanation must be original.
2. **Transform contexts.** If a reference uses "rental car miles", use a different scenario (e.g., streaming bandwidth, bakery output). Change all numbers.
3. **Original distractors.** Each wrong answer must have a documented rationale (common mistake it tests), not replicated from any source.
4. **Provenance tracking.** Every question carries `sourceStyleRef` (which pattern type inspired it, not a specific source question) and `authoredBy`.

## Required Fields

| Field | Type | Description |
|---|---|---|
| `id` | `string` | Globally unique: `bank-{domain_abbr}-{seq}` (e.g., `bank-alg-001`) |
| `domain` | `string` | One of: `algebra`, `problem-solving`, `advanced-math`, `geometry` |
| `skills` | `string[]` | 1-3 skill IDs from `skillTaxonomy.js` |
| `difficulty` | `string` | `easy`, `medium`, or `hard` |
| `type` | `string` | `multiple-choice` or `fill-in` |
| `question` | `string` | Stem text (supports LaTeX via `$...$`) |
| `choices` | `array` | For MC: `[{ id: "A"|"B"|"C"|"D", text: string }]` |
| `correctAnswer` | `string` | Choice ID or numeric value for fill-in |
| `explanation` | `string` | Short reasoning + trap explanation |
| `calculatorAllowed` | `boolean` | Whether calculator is permitted |
| `tags` | `string[]` | Optional freeform tags for filtering |
| `sourceStyleRef` | `string` | Pattern type (e.g., "word-problem-to-equation") |
| `authoredBy` | `string` | `"performsat-engine"` |
| `createdAt` | `string` | ISO date |

## Difficulty Guidelines

- **Easy (30%):** Single-step, direct application, no traps.
- **Medium (45%):** 2-3 steps, one common-mistake distractor.
- **Hard (25%):** Multi-step reasoning, subtle traps, context interpretation.

## Distribution Targets (~300 total)

| Domain | Count | Approx % |
|---|---|---|
| Algebra | 90 | 30% |
| Problem Solving & Data | 75 | 25% |
| Advanced Math | 75 | 25% |
| Geometry & Trig | 60 | 20% |
