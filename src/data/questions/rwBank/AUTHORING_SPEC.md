# R&W Drill Bank Specification

This bank serves as the question pool for **Reading & Writing focus area drills** in the Study Plan. It is *flattened* from the 12 R&W practice test bundles in `src/data/practiceTests/practiceTest{N}RW.js` — items are authored test-side via `scripts/authorRWItem.mjs` + `scripts/assembleRWTest.mjs`, then surfaced here as a skill-indexed drill pool.

There is no separate authoring step for the R&W drill bank. New R&W content lands in test bundles; the flattener picks it up automatically.

## The 11 canonical skills

R&W has exactly 11 distinct skill IDs across all 12 practice tests. These are stable — adding a new skill requires both bank work and diagnostic-engine work, not a copy-paste.

| Skill ID | Domain | Description |
|---|---|---|
| `central-ideas-and-details` | `information-and-ideas` | Identify main idea / supporting detail in a passage |
| `inferences` | `information-and-ideas` | Infer logical conclusions from passage evidence |
| `command-of-evidence-textual` | `information-and-ideas` | Choose the textual evidence that best supports a claim |
| `command-of-evidence-quantitative` | `information-and-ideas` | Choose data from a table/graph that supports a claim |
| `words-in-context` | `craft-and-structure` | Pick the most precise word for a passage blank |
| `text-structure-and-purpose` | `craft-and-structure` | Identify the function or purpose of a passage element |
| `cross-text-connections` | `craft-and-structure` | Compare/contrast across paired passages |
| `boundaries` | `standard-english-conventions` | Apply punctuation rules at sentence boundaries |
| `form-structure-and-sense` | `standard-english-conventions` | Apply grammar rules within a sentence |
| `transitions` | `expression-of-ideas` | Choose the transition that best fits a logical relationship |
| `rhetorical-synthesis` | `expression-of-ideas` | Synthesize student notes into a sentence achieving a goal |

## The 4 domains

R&W maps to 4 College-Board canonical domains:

- `information-and-ideas`
- `craft-and-structure`
- `standard-english-conventions`
- `expression-of-ideas`

The plan-level dispatcher (`practiceAssignmentService.js` `getCanonicalDomains('rw')`) returns this list in canonical order.

## Item shape (post-flatten)

Every drilled R&W item has these fields. The flattener (`flattenRWBank` in `index.js`) preserves the source test-bundle fields and adds the indexed-bank standardizations.

| Field | Type | Source / Notes |
|---|---|---|
| `id` | `string` | Namespaced: `rw-test{N}-{moduleId}-{originalId}` (e.g., `rw-test1-module-1-101`). Globally unique across the bank. |
| `sourceTest` | `number` | Test number this item came from (1-12) |
| `sourceModuleId` | `string` | Module ID within the source test (e.g., `'module-1'`) |
| `sourceQuestionId` | `number` | Original integer ID within the source module |
| `domain` | `string` | One of the 4 R&W domains (above) |
| `skill` | `string` | One of the 11 canonical skills (above) — preserved from source as singular |
| `skills` | `string[]` | `[skill]` — array form for compatibility with the math bank's `getQuestionsBySkillIds` API |
| `section` | `string` | Always `'rw'` — section-tag contract (see `services/selectors/weaknesses.js`) |
| `difficulty` | `'easy' \| 'medium' \| 'hard'` | Calibration level |
| `band` | `number` | Calibration band (numeric, 1-7-ish) |
| `type` | `'multiple-choice'` | All R&W items are MCQ. `questionTable` (when present) is supplemental data, not a separate type. |
| `passage?` | `string` | Single reading passage. Present on all items EXCEPT `cross-text-connections` and `rhetorical-synthesis` (see below). |
| `passages?` | `Array<{label, text}>` | Used by `cross-text-connections`: paired passages labelled "Text 1" / "Text 2". |
| `studentNotes?` | `{intro, bullets, goal}` | Used by `rhetorical-synthesis`: student research notes the question asks the test-taker to synthesize into a sentence. |
| `questionTable?` | `object` | Optional embedded table data: `{ type: 'table', caption, headers: string[], rows: string[][] }`. Present on ~48 items (4 per test, all `command-of-evidence-quantitative`). |
| `question` | `string` | The prompt the student answers |
| `choices` | `Array<{id, text}>` | Always 4 choices, labelled A/B/C/D |
| `correctAnswer` | `'A' \| 'B' \| 'C' \| 'D'` | The correct choice ID |
| `explanation` | `string` | Multi-paragraph rationale + trap analysis for distractors |
| `authoredBy` | `string` | `'performsat-rw-pipeline'` |
| `calculatorAllowed` | `false` | R&W never allows calculator |

## Bank API

The flattened bank exports a math-bank-shaped API:

```js
import {
  rwQuestionBank,           // flat array of all R&W drill items
  RW_CANONICAL_SKILLS,      // 11-element array
  RW_DOMAINS,               // 4-element array
  RW_SKILL_ALIAS_MAP,       // alias variants → canonical skill IDs
  getQuestionById,
  getQuestionsBySkillIds,
  getQuestionsByDomain,
  getTargetedWeaknessSet,
  getBankStats,
} from '@/data/questions/rwBank';
```

`getTargetedWeaknessSet` honors the same options as the math bank: `weakSkills`, `errorTypes`, `difficultyMix`, `count`, `excludeIds`. `excludeIds` is the primary way callers prevent test-already-seen items from leaking into drills (Phase 1 M5 of /autoplan).

## Drill-content authoring

When a new R&W test ships (currently 12; if/when test 13+ lands), the flattener picks up the new items at module-import time. No code change needed unless:

- A new canonical skill is introduced (rare). Add it to `RW_CANONICAL_SKILLS` and to the diagnostic engine's R&W skill enumeration.
- A new question type beyond MCQ is introduced (currently no plan to do so).

## Module flow constraint

Per `feedback_rw_module_flow.md` (user memory) and the R&W test pipeline, the official-test ordering is **vocab first, notes last; CoE and Conventions alternate, not grouped**. This applies to **test-mode rendering**, not to drills. A drill flow that surfaces 15 `transitions` questions in a row is a different cognitive load than a 32-minute timed module — drills don't need to honor module ordering.

## Validation

Run `node scripts/validateRWDrillSample.mjs` to pull 20 random drill items via the dispatcher and assert each has non-empty passage/question/choices and a valid `correctAnswer`. CI invokes this before merge.
