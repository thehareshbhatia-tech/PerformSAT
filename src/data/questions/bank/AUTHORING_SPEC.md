# SAT-Style Question Authoring Specification

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
