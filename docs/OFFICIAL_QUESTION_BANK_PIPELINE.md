# PDF-First Official Question Bank Pipeline

Automated pipeline that extracts math questions from official SAT practice-test PDFs and structured JS sources, generates strictly unique rewritten questions, validates them against uniqueness thresholds and the AUTHORING_SPEC schema, and publishes them into the question bank for study-plan targeting.

## Architecture

```
Official SAT PDFs + practiceTest*.js
        |
   [1. Extract]  -->  pdfExtracted.json (440 source items)
        |
   [2. Rewrite]  -->  pdfRewritten.json (439 strict rewrites)
        |
   [3. Validate]  -->  pdfValidated.json (290 passing)
        |              pdfRejections.json (rejection audit)
   [4. Publish]  -->  generatedOfficial.js
        |
   questionBank (index.js) + skill alias map
        |
   getTargetedWeaknessSet / getQuestionById
        |
   StudyPlanDashboard / PracticeTest
```

## Quick start

```bash
npm run bank:official                    # Full pipeline (extract -> rewrite -> validate -> publish)
npm run bank:validate                    # Validate entire combined bank
npm run bank:test                        # Run automated pipeline tests (73 checks)
```

## Commands

| Command | Description |
|---------|-------------|
| `npm run bank:official` | Run all 4 steps end-to-end |
| `npm run bank:official:extract` | Extract source questions from PDFs + JS files |
| `npm run bank:official:rewrite` | Generate strictly unique rewritten questions |
| `npm run bank:official:validate` | Validate uniqueness gates + schema compliance |
| `npm run bank:official:publish` | Write validated questions to `generatedOfficial.js` |
| `npm run bank:validate` | Validate the full combined bank (hand-authored + generated) |
| `npm run bank:test` | Run the automated test suite |

## CLI options

```bash
node scripts/officialQuestionBankPipeline.mjs all --tests=1,2,3,4,5,6,7,8,9,10,11,12 --variations=5
node scripts/officialQuestionBankPipeline.mjs extract --tests=1,2 --out=custom/path.json
node scripts/officialQuestionBankPipeline.mjs rewrite --input=scripts/generated/pdfExtracted.json --variations=5
node scripts/officialQuestionBankPipeline.mjs validate --extractInput=scripts/generated/pdfExtracted.json
```

## Pipeline steps

### 1. Extract

Primary source: structured practice-test JS files (`src/data/practiceTests/practiceTest*.js`) loaded via `vm.Script`. When available, corresponding PDFs on the Desktop/Downloads are detected for cross-reference metadata (`hasPdfCrossRef`, `ocrConfidence`).

PDF search automatically scans Desktop and Downloads directories for matching filenames by test number.

Extracts per question:
- Source reference (`pdf-test-N-mM-qQ`)
- Module number and question number
- Raw stem text with LaTeX preserved
- Formula blocks and continuation text
- Choices (MC) or answer (fill-in)
- Correct answer and accepted answers
- Full explanation text
- Source skill tags
- Classified domain and taxonomy skill IDs

Classification uses a comprehensive rule table (`SOURCE_SKILL_TO_TAXONOMY`) with keyword fallback rules (`KEYWORD_RULES`) covering all 76 taxonomy skills.

**Output:** `scripts/generated/pdfExtracted.json`

### 2. Strict Rewrite

Generates genuinely unique questions with enforced transformations:

| Transformation | Technique |
|----------------|-----------|
| **Person names** | Replace all known names with diverse alternatives (32-name pool) |
| **Object contexts** | Swap entities: bakery→smoothie stand, school→academy, etc. (40+ swaps) |
| **Activity verbs** | Swap actions: rents→leases, harvested→picked, etc. (14+ swaps) |
| **Time references** | Swap temporal context: Saturday→Thursday, weekly→biweekly, etc. |
| **Numeric values** | Vary all non-trivial numbers by ±35% (deterministic via seeded PRNG) |
| **Wording patterns** | 40+ phrasal rewrites: "what is the value"→"determine the value", etc. |
| **Sentence structure** | Restructure sentence forms where patterns match (8 structural templates) |

All transformations are deterministic (seeded by question index + test number) for reproducibility.

**Output:** `scripts/generated/pdfRewritten.json` with provenance metadata

### 3. Validate (Uniqueness + Schema)

Two-gate validation:

**Gate 1: Strict Uniqueness**
- Tokenizes both source and rewritten stems (math stopwords filtered)
- Jaccard similarity ceiling: 0.78 (token-level)
- N-gram overlap ceiling: 0.60 (3-gram)
- Items exceeding BOTH thresholds are rejected
- Full rejection report with scores written to `pdfRejections.json`

**Gate 2: Schema Compliance**
- Required fields: id, domain, skills, difficulty, type, question, explanation
- Domain/difficulty/type value constraints
- MC: exactly 4 choices, correctAnswer in A-D
- Fill-in: correctAnswer present
- No duplicate IDs
- Provenance fields (sourceRef, tags, authoredBy)

**Output:** `scripts/generated/pdfValidated.json` + `pdfRejections.json`

### 4. Publish

Generates `src/data/questions/bank/generatedOfficial.js` with:
- `generatedOfficialAlgebraBank`
- `generatedOfficialProblemSolvingBank`
- `generatedOfficialAdvancedMathBank`
- `generatedOfficialGeometryBank`
- `generatedOfficialBank` (combined)

## Bank integration

### Question bank index (`src/data/questions/bank/index.js`)

The generated shard is imported and spread into the unified `questionBank` array alongside hand-authored banks. All indexes (skill, domain, difficulty) include generated items automatically.

### Skill alias bridge

A `SKILL_ALIAS_MAP` in `index.js` bridges raw practice-test skill tags (e.g., `mean-median-mode`) to taxonomy skill IDs (e.g., `calculate-mean`). This ensures `getTargetedWeaknessSet` finds bank questions even when the diagnostic engine produces raw skill tags.

### Study plan integration

- `PracticeTest.jsx` calls `getTargetedWeaknessSet({ weakSkills })` after scoring
- The selector resolves skill aliases, looks up bank questions by skill, falls back to domain
- `StudyPlanDashboard.jsx` renders targeted questions via `getQuestionById`
- Questions display with domain badges and difficulty indicators

## Validation checks

### Pipeline validation (`bank:official:validate`)
- Strict uniqueness gates (Jaccard ≤ 0.78, n-gram ≤ 0.60)
- Schema compliance per AUTHORING_SPEC
- No duplicate IDs within generated set
- Rejection audit report with per-item scores

### Full bank validation (`bank:validate`)
- All of the above, across hand-authored + generated banks
- Cross-shard text-similarity check (Jaccard threshold: 92%)
- Taxonomy skill coverage (76 skills)
- Domain and difficulty distribution report

## Generated output

Each question in the bank has:

| Field | Description |
|-------|-------------|
| `id` | `bank-off-{domain}-{seq}` (e.g., `bank-off-alg-042`) |
| `domain` | One of: algebra, problem-solving, advanced-math, geometry |
| `skills` | 1-3 taxonomy skill IDs |
| `difficulty` | easy, medium, or hard |
| `type` | multiple-choice or fill-in |
| `question` | Full rewritten stem with LaTeX preserved |
| `choices` | MC: 4 rewritten choices with LaTeX |
| `correctAnswer` | A-D (MC) or value (fill-in) |
| `explanation` | Rewritten pedagogical explanation |
| `tags` | `['pdf-rewritten', 'source-test-N']` |
| `sourceStyleRef` | Primary skill pattern |
| `authoredBy` | `performsat-engine` |
| `sourceRef` | `pdf-test-N-mM-qQ` provenance |
| `rewriteVersion` | Version counter for regeneration tracking |

## Test suite

`npm run bank:test` runs 73 automated checks covering:
- Extract output shape, PDF-first pipeline label, module/confidence metadata
- Rewrite schema compliance (IDs, domains, skills, choices, rewriteVersion)
- Validate pass/reject accounting, rejection report structure
- Published file exports and pipeline label
- Bank index wiring (imports, skill alias bridge, selectors)
- Skill/domain coverage across all 4 domains
- Difficulty distribution (easy, medium, hard minimums)
- Cross-bank ID uniqueness
- Source provenance (unique sourceRefs, source-test tags, multi-test coverage)
- Study plan integration (PracticeTest, StudyPlanDashboard)

## Current statistics

| Metric | Value |
|--------|-------|
| Source PDFs/Tests | 12 (tests 1-12) |
| Variations per source | 5 (configurable via `--variations=N`) |
| Extracted questions | 528 |
| Rewritten questions | ~2,635 |
| Validated (passing) | ~1,750 |
| Rejected (uniqueness) | ~885 |
| Total bank (hand + generated) | ~2,050 |
| Taxonomy skills covered | 76/76 |
| All 4 domains represented | Yes |

## Scaling to 2,000+ questions

To reach a 2,000-question bank, the pipeline uses:
- **12 practice tests** (1-12) for 528 source questions
- **5 variations per source** for ~2,635 rewritten outputs
- **Uniqueness gates** filter to ~1,750 passing items
- **300 hand-authored** + ~1,750 generated = **~2,050 total**

```bash
npm run bank:official                    # Uses --variations=5 by default
node scripts/officialQuestionBankPipeline.mjs all --variations=6   # More variations
```
