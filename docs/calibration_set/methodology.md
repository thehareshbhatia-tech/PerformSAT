# Authenticity Calibration — Methodology

This is the rating playbook for the round-6 exit gate defined in `docs/MODULE_RECALIBRATION_PLAN.md`. The gate is: **≥80% of revised PerformSAT items rated ≥4 with ≤0.5-pt average gap to CB items on Overall CB-grade.**

The calibration set lives at `docs/calibration_set/items.json` (the 40 anonymized items) and `docs/calibration_set/baseline_ratings.md` (per-item ratings). The set is shuffled and assigned opaque IDs (`item-001` … `item-040`) so a rater cannot tell from the file order which items are CB and which are PerformSAT.

The CB-vs-PerformSAT mapping lives in a private answer key (`.answer_key.json`, gitignored — see `.gitignore` at the calibration_set level). Do not look at the answer key before completing the rating pass.

---

## 1. The five rating dimensions

Each item is rated on five 1-5 scales. All five are required. The ratings live in `baseline_ratings.md`.

### Stem clarity — does the question read crisply?

The question should parse on first read with no ambiguity about what is being asked.

| 1 | The stem is unparseable on first read; you have to re-read multiple times to figure out what it wants. |
| 2 | Comprehensible but awkward — pronoun reference unclear, units omitted, or the asked-quantity is ambiguous (e.g., "what is the value?" without naming the variable). |
| 3 | Clear intent, but a phrase is verbose or non-idiomatic for SAT style. |
| 4 | Reads well; matches CB style with at most a minor stylistic quibble. |
| 5 | Indistinguishable from a CB stem — economical, unambiguous, period-precise. |

### Distractor quality — do distractors map to misconceptions?

See the four-misconception rule in `docs/CB_AUTHENTICITY_RUBRIC.md` §2. Each distractor must be reachable from a specific named student error.

| 1 | Two or more distractors are random/nonsense numbers with no plausible derivation. |
| 2 | One distractor is plausible; the other two are noise. |
| 3 | All three distractors map to plausible errors but two map to the same misconception (a redundant trap). |
| 4 | All three distractors map to distinct misconceptions, each with a clear derivation. |
| 5 | Distractors are surgically precise — each one nails a different real-world student error pattern (stops-early / inverse-op / off-by-one). |

### Notation polish — LaTeX correctness, units, spacing

Mechanical compliance with the rubric §3.

| 1 | Mixed delimiters (`\(...\)` and `$...$`), bare HTML entities (`&#x02212;`), or MathSpeak residue. |
| 2 | One notation problem (e.g., units in math mode that should be roman, or `25%` not in math mode). |
| 3 | Mostly correct; minor inconsistencies (no thin space between number and unit, or single-letter variables not in math mode). |
| 4 | Notation is correct; minor typographical preferences differ (e.g., spacing inside parentheses). |
| 5 | Pixel-perfect — variables auto-italic via `$x$`, units roman via `\text{cm}`, currency `$\$24{,}000$`, no entity leaks. |

### Difficulty calibration — does it feel like its claimed band?

Rate against the claimed difficulty (`easy`/`medium`/`hard`) shown next to the item. The CB authoring target is top-of-band (band 3 / 5 / 7); a perfect easy item should feel like band 3, not band 1.

| 1 | Off by two bands (an "easy" item that feels hard, or a "hard" item that is a one-liner). |
| 2 | Off by one band in the wrong direction (e.g., a "medium" item that feels easy). |
| 3 | In the right bucket but bottom-of-band (an "easy" item at band 1-2, a "medium" at band 4, etc.). |
| 4 | Solidly mid-bucket. Acceptable. |
| 5 | Top-of-band — easy at band 3, medium at band 5, hard at band 7. The recalibration target. |

### Overall CB-grade — would this fit unobtrusively in PT 4-11?

A holistic rating. The question to ask: if this item were dropped into a real CB digital practice test, would a careful student notice anything off?

| 1 | Obviously not CB-grade — a student would flag this as out of place. |
| 2 | Perceptibly different — feels like a textbook problem, a state-test item, or an algebra workbook question. |
| 3 | Plausible but tonally off — e.g., the wrong "voice" (too verbose, too casual, or too clinical) or the math feels too clean / too messy. |
| 4 | Reads as CB-grade. A careful reviewer might quibble but a student would not notice. |
| 5 | Indistinguishable from a real CB item. |

This is the **headline number** — the gap between the average Overall CB-grade for CB items and PerformSAT items is the single most important calibration signal.

---

## 2. How items were selected

40 items total: 20 from the College Board Educator QBank, 20 from existing PerformSAT practice tests.

### CB items (20)

Source: `scripts/generated/cbEducatorQBank.json` (1,756 items, ~945 with cached MCQ stems and answer options). Filtered to items with:

- `type === "mcq"` (not student-produced response).
- Cached `stemHtml`, `stemPlain`, and `answerOptions` (no `null — _(stem not yet fetched)_` items).
- `stemPlain` length 30-400 characters (rejects image-heavy items and trivially-short fragments).
- Top-level math delimiters `[...]` present in `stemPlain` (rejects items where MathML extraction failed).
- No raw HTML entities (`&#x...;`, `&amp;`, etc.) in the plain stem.
- After MathSpeak→LaTeX conversion: no leftover MathSpeak tokens (`StartFraction`, `Superscript`, `comma`, `or equals`, etc.) in the rendered text.

Spread:
- 4 domains × {2 easy + 2 medium + 1 hard} for two domains, {1 easy + 2 medium + 2 hard} for the other two = 5 items per domain.
- Within each (domain, difficulty) cell, items were ordered by stem length (shorter preferred, on the theory that crisp stems are more authentic) with a skill-diversity rule (avoid two items at the same `skill_desc + difficulty`).

The 20 CB items span all 4 SAT Math domains and all 3 difficulty buckets — the cell counts are a 5/5/5/5 domain split with a 6 easy / 8 medium / 6 hard difficulty split.

### PerformSAT items (20)

Source: `src/data/practiceTests/practiceTest{1,2,3}.js` (the M1+M2 banks for the first three tests, ~132 MCQ items). Items were:

- Filtered to `type === "multiple-choice"` only.
- Bucketed by inferred domain (via skill→domain map in the build script) and difficulty.
- Selected with a deterministic shuffle (seed = 42) so the picks are reproducible.

When PT 1-3 didn't have enough items in a (domain, difficulty) cell — specifically, there are no `Geometry and Trigonometry|easy` items in PT 1-3 — the builder fell back to PT 4-12 to fill the cell. This is documented in the build log; the PT-4-12 fallback affected 1 item out of 20.

Like the CB picks, the PerformSAT picks are 5/5/5/5 across domains and 6 easy / 8 medium / 6 hard.

### Anonymization

After the 40-item pool was assembled, it was shuffled with a deterministic seed (12345) and items were assigned opaque IDs `item-001` through `item-040`. The fields written to `items.json`:

```jsonc
{
  "id": "item-NNN",
  "stem": "...",
  "choices": [{ "id": "A", "text": "..." }, ... ],
  "correctAnswer": "B",
  "claimedDifficulty": "easy" | "medium" | "hard",
  "claimedDomain": "Algebra" | "Advanced Math" | "Problem-Solving and Data Analysis" | "Geometry and Trigonometry"
}
```

Fields explicitly **not** written: `source` (CB vs PerformSAT), `qbankId`, `band`, `cbSkill`, `perfTest`, `perfModule`, `perfQid`, `perfSkills`. The mapping back to source is in `.answer_key.json` (gitignored at the calibration_set level — see `.gitignore`).

---

## 3. The exit gate

Round 6 is **not done** until both conditions hold for revised PerformSAT items (i.e., re-rate after the recalibration round, not the baseline):

1. **≥80% of revised PerformSAT items rated ≥4 on Overall CB-grade.** (16/20 or better.)
2. **≤0.5-point average gap** between revised-PerformSAT and CB items on Overall CB-grade.

If either condition fails, the round goes back into authoring. The five sub-dimensions help diagnose *why* an item failed:

- Stem clarity ≤3 → re-author the stem.
- Distractor quality ≤3 → re-design the four-misconception slot mapping.
- Notation polish ≤3 → fix LaTeX/units (mostly mechanical; lint should catch).
- Difficulty calibration ≤3 → swap to a top-of-band item or add the missing twist.
- Overall ≤3 with all four sub-dimensions ≥4 → tonal/voice problem; usually a re-write of the surrounding prose.

---

## 4. Workflow for a re-rate

1. **Open `items.json`.** Read each item without consulting `.answer_key.json`. Cover up `claimedDifficulty` and `claimedDomain` if you can; ideally rate on the merits before considering the claim.

2. **Solve each item.** Yes, actually solve it — checking the correct answer is a sanity check. If you cannot solve an item without referring to outside resources, the difficulty rating is probably "hard" (band 7), but verify after solving.

3. **Score the five dimensions.** Use the rubrics in §1. Note one-line reasoning per item if any rating is ≤3 (the "why" matters more than the "what" for re-author decisions).

4. **Compute aggregates.** After all 40 items are rated:
   - Average Overall CB-grade for CB items (these are `id`s where the answer key shows `source: "CB"`).
   - Average Overall CB-grade for PerformSAT items.
   - Gap = PerformSAT avg − CB avg. (A negative gap means PerformSAT items rate worse, which is the expected baseline.)
   - Percentage of PerformSAT items with Overall ≥4.

5. **De-anonymize and audit.** Open `.answer_key.json` and inspect the items where your rating diverges from the source — e.g., a CB item rated 2 on Overall (suggesting our data extraction or the CB item itself has issues), or a PerformSAT item rated 5 on Overall (suggesting we already have items at CB-grade, which is a positive signal).

6. **Decide.** If the exit gate passes (≥80% PerformSAT items ≥4, gap ≤0.5), round 6 ships. If not, the diagnostic per-item ratings are the input to the next authoring pass.

---

## 5. Known limitations

- **The 5-point scale is coarse.** Inter-rater reliability across two independent raters is roughly ±0.5 points per dimension, so the 0.5-point gap criterion is intentionally tight — it forces re-authoring even when the gap "feels small."
- **AI baseline ratings are a stress test, not ground truth.** The baseline ratings in `baseline_ratings.md` are AI-produced as a starting point; the human re-rate is what counts for the exit gate. The AI baseline is conservative — it tends to rate PerformSAT items higher than a CB-trained human reviewer would, because the AI rater has seen the PerformSAT bank during authoring.
- **Anonymization is imperfect.** Some CB items have a recognizable "voice" (e.g., specific phrasings like "the given equation" or "the line $\ell$") that a SAT-experienced rater will spot. This is OK — the rubric is designed for raters who *can* tell the difference; we just don't want them to *use* that knowledge before scoring.
- **The set is small (40 items).** A single mis-rate moves the average by 0.025 on the Overall dimension. Larger gaps (>0.5) are robust to rater noise; smaller gaps require a second rater for confirmation.

---

## 6. File map

| File | Purpose |
|---|---|
| `docs/calibration_set/items.json` | 40 anonymized items, the rating input. |
| `docs/calibration_set/baseline_ratings.md` | AI baseline ratings + computed gap. |
| `docs/calibration_set/methodology.md` | This file. |
| `docs/calibration_set/.answer_key.json` | Source mapping (gitignored or marked private). |
| `docs/calibration_set/.gitignore` | Hides the answer key from version control. |
| `docs/calibration_set/_build.mjs` | Builder script — kept for reproducibility, can be re-run after authoring updates. |
| `docs/CB_AUTHENTICITY_RUBRIC.md` | The authoring rubric the items are rated against. |
