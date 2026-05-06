# Authenticity Calibration — R&W Methodology

This is the rating playbook for the Reading & Writing recalibration round. The gate is: **≥80% of revised PerformSAT items rated ≥4 with ≤0.5-pt average gap to CB items on Overall CB-grade.**

The R&W calibration set lives at `docs/calibration_set/rw/items.json` (the 40 anonymized items) and `docs/calibration_set/rw/baseline_ratings.md` (per-item ratings). The set is shuffled and assigned opaque IDs (`rw-item-001` … `rw-item-040`) so a rater cannot tell from the file order which items are CB and which are PerformSAT.

The CB-vs-PerformSAT mapping lives in a private answer key (`.answer_key.json`, gitignored — see `docs/calibration_set/.gitignore`). Do not look at the answer key before completing the rating pass.

This file mirrors the Math methodology in `docs/calibration_set/methodology.md` and adapts the rubric for Reading & Writing items, where the unit is a passage + stem + four answer choices (not a math stem with four numerical/symbolic choices).

---

## 1. The five rating dimensions

Each item is rated on five 1-5 scales. All five are required. The ratings live in `baseline_ratings.md`.

### Stem clarity — does the question read crisply?

The question (the part after the passage) should parse on first read with no ambiguity about what is being asked. CB stems are economical and use a small set of canonical phrasings (see `CB_RW_AUTHENTICITY_REFERENCE.md` §7).

| 1 | The stem is unparseable on first read; the question must be re-read multiple times to figure out what it wants, or the stem invents a phrasing CB never uses (e.g., "Which option below would complete this passage in the way that is most appropriate stylistically?"). |
| 2 | Comprehensible but awkward — pronoun reference unclear, the asked-for relationship is fuzzy, or the stem is unnecessarily verbose for SAT style. |
| 3 | Clear intent, but the stem is slightly off-pattern from CB canonical phrasings (e.g., "What is the main point?" instead of "Which choice best states the main idea of the text?"). |
| 4 | Reads well; matches one of the CB canonical stems (Words in Context, Main Purpose, Function, Transition, Synthesis, Standard English Conventions) with at most a minor word-choice quibble. |
| 5 | Indistinguishable from a CB stem — uses the exact CB canonical phrasing, no extra words, period-precise. |

### Passage authenticity — does the source feel real and CB-anchored?

CB passages are anchored on **real, verifiable** people, places, studies, and texts. Researchers are introduced with first name + last name + descriptor on first mention. Literary excerpts cite a real author and a real (often canonical) work. Made-up names, fabricated studies, and unverifiable round-number statistics are CB anti-patterns. See `RW_SEC_AUDIT.md` failure modes F2, F3, F6 for the catalog of fabrication patterns to look for.

| 1 | The passage is built on a fabricated researcher / artist / writer / institution that does not exist (e.g., "the poet Reza Ahmadi spent the years 1979 to 1985 in self-imposed silence"; "the recently described frog *Pristimantis hagensii*"; "the 1936 novel *The Glass Tide* by Welsh writer Olwen Tregaron"). The whole passage exists only to host the test item. |
| 2 | Real topic, but the named individual is unverifiable and reads as fabricated; or the passage uses a CB-style topic register but contains a euphemism / contemporary politics / catastrophe-adjacent backdrop CB explicitly avoids. |
| 3 | The named individual is plausibly real but uncited; the passage works in isolation but a careful reader would notice the absence of the kind of anchoring detail (institution, year, location, citation) CB always provides. |
| 4 | Real or plausibly real subject, fully anchored to a verifiable institution / location / publication; only minor stylistic differences from CB tone (slightly more novelistic, slightly more first-person reflection than CB's neutral expository default). |
| 5 | Indistinguishable from a real CB passage — verifiable subject, full anchoring, neutral expository tone, no fabrication, no euphemism, the kind of passage that could be a verbatim quote from PT 4-11. |

### Distractor quality — do wrong answers map to specific misreadings?

Each distractor must map to a real, defensible misreading or partial reading of the passage. CB distractors are *plausibly* wrong, never *implausibly* wrong (see `RW_SEC_AUDIT.md` F5 — non-words, impossible plurals, "( " as a closing bracket are all CB anti-patterns).

| 1 | One or more distractors are non-words, malformed forms, or grammatically impossible strings (e.g., "more comprehensiver," "Library's'," "valleys's"). CB never uses these. |
| 2 | Distractors are real words but two or more are essentially the same misreading (a redundant trap), or one is so far off that no student would pick it. |
| 3 | All three distractors map to plausible misreadings, but the mapping is loose — e.g., one distractor changes a *different* dimension of the passage than the question is testing. |
| 4 | All three distractors map to distinct misreadings, each clearly anchored in a passage detail; one of them is the trap a careful student might take. |
| 5 | Distractors are surgically precise — each one nails a different real-world reading error (skim-too-fast, partial-sentence-only, complement-vs-claim flip, transition-direction-flip). |

### Difficulty calibration — does it feel like its claimed band?

Rate against the claimed difficulty (`easy` / `medium` / `hard`) shown next to the item. The CB authoring target is top-of-band; a perfect easy item should feel like band 3, not band 1.

| 1 | Off by two bands (an "easy" item that requires inferring across three sentences and a counter-claim, or a "hard" item that is a one-step substitution). |
| 2 | Off by one band in the wrong direction (e.g., a "medium" item that feels easy because the passage is short and the answer is near-verbatim from the passage). |
| 3 | In the right bucket but bottom-of-band (an "easy" item at band 1-2 difficulty, a "medium" at band 4, etc.). |
| 4 | Solidly mid-bucket. Acceptable. |
| 5 | Top-of-band — easy at band 3 (still requires reading carefully), medium at band 5, hard at band 7. The recalibration target. |

### Overall CB-grade — would this fit unobtrusively in PT 4-11?

A holistic rating. The question to ask: if this item were dropped into a real CB digital practice test, would a careful student or a CB-trained reviewer notice anything off?

| 1 | Obviously not CB-grade — a student would flag this as out of place (e.g., novelistic phrasing in an SEC item, fabricated species name, non-word distractor, comparative/superlative as a standalone SEC skill). |
| 2 | Perceptibly different — feels like a tutoring-bank item, a state-test item, or a sample question from an SAT prep book. |
| 3 | Plausible but tonally off — e.g., the passage is more first-person reflective than CB's neutral expository default; a researcher is named but uncited; a transition tests a stylistic preference (comma-vs-no-comma) more than a rule. |
| 4 | Reads as CB-grade. A careful reviewer might quibble (e.g., "this researcher's name doesn't ring a bell — would have to check") but a student would not notice. |
| 5 | Indistinguishable from a real CB item — if shown alongside PT 4-11 items, a CB-trained reviewer would not be able to identify it as PerformSAT-authored. |

This is the **headline number** — the gap between the average Overall CB-grade for CB items and PerformSAT items is the single most important calibration signal.

---

## 2. How items were selected

40 items total: 20 from the College Board PT 4-11 official PDFs (extracted via `docs/CB_RW_AUTHENTICITY_REFERENCE.md` and corroborated against `scripts/generated/pdf-text/sat-practice-test-{4..11}-digital.txt`), 20 from existing PerformSAT R&W practice tests.

### CB items (20)

20 items drawn from PT 4-11, balanced as 5/5/5/5 across the four R&W skill domains:

- **Information and Ideas (5):** central-ideas, inferences, command-of-evidence-textual, varied across PT 4 / 5 / 6 with 1-2 items per subdomain.
- **Craft and Structure (5):** words-in-context, text-structure-and-purpose, cross-text-connections — 2 / 2 / 1 split.
- **Standard English Conventions (5):** boundaries, form-structure-and-sense — 3 / 2 split, drawn from across PT 4 / 5 / 6 / 7.
- **Expression of Ideas (5):** transitions, rhetorical-synthesis — 3 / 2 split, drawn from PT 4 and PT 6.

CB items skew toward the items in the CB authenticity reference doc (`CB_RW_AUTHENTICITY_REFERENCE.md`) because those are already verbatim-cited and verified against the PT 4-11 PDFs. Difficulty is preserved as it was on the original test (easy / medium / hard inferred from item position and answer-rate cohort context).

### PerformSAT items (20)

20 items drawn from `practiceTest{1-12}RW.js` (active R&W bank), balanced 5/5/5/5 across the same four skill domains. Within those 20 items, the rough distribution is:

- **6 PASSes** — items the audit (`RW_SEC_AUDIT.md`) flagged as PASS or items in non-SEC domains that match CB authenticity rubrics (real anchored topics, verifiable references, neutral tone).
- **8 BORDERLINEs** — items with subtle authenticity issues: unverifiable but plausibly-real researcher names, faintly literary tone where CB would be neutral, or templating fingerprints that recur across two tests.
- **6 FAILs** — a representative cross-section of failure modes:
  - 1 literary-biography fabrication (e.g., a fabricated poet whose "self-imposed silence" is a novelistic flourish, repeated across two tests as a templated cross-test FAIL),
  - 1 cross-test-templated cross-text-connections passage (fabricated novelist + fabricated critic),
  - 1 cross-test-templated transitions item (fabricated musician),
  - 1 SEC non-word distractor ("British Library's'" — impossible apostrophe form),
  - 1 fabricated Linnaean binomial (a frog species name that does not exist in current taxonomy),
  - 1 SEC item with a genocide-euphemistic backdrop ("Imigongo … the disruptions of the 1990s") and a fabricated cooperative,
  - 1 FAIL on a non-SEC item: COE-T support claim referencing a fabricated novel and fabricated Welsh writer.

PerformSAT items are pulled from across the 12-test bank (not concentrated in any one test) so that the FAIL fingerprints associated with PT 1-2 (templated cross-test passages, fabricated researchers in pairs) are represented but not over-represented. The audit doc identified PT 7 / 11 / 12 as the strongest tests; some of the PASSes are drawn from those tests to give the rater a fair shot at confusing them with CB items.

### Anonymization

After the 40-item pool was assembled, it was shuffled with a deterministic seed (54321) and items were assigned opaque IDs `rw-item-001` through `rw-item-040`. The fields written to `items.json`:

```jsonc
{
  "id": "rw-item-NNN",
  "type": "multiple-choice",
  "skill": "<canonical CB R&W skill: words-in-context, central-ideas-and-details, etc.>",
  "domain": "Information and Ideas | Craft and Structure | Standard English Conventions | Expression of Ideas",
  "difficulty": "easy | medium | hard",
  "passage": "...",
  "question": "...",
  "choices": [{ "id": "A", "text": "..." }, { "id": "B", "text": "..." }, ... ],
  "correctAnswer": "A" | "B" | "C" | "D"
}
```

Fields explicitly **not** written: `source` (CB vs PerformSAT), `test`, `module`, `qNum`, `qid`, `file`, `band`, `tag` (PASS/BORDERLINE/FAIL), `failMode`, `explanation`. The mapping back to source is in `.answer_key.json` (gitignored at the calibration_set level). PerformSAT-specific fields like `band` and the audit `tag` are stripped at build time so the rater cannot infer source from the field shape.

CB literary excerpt attribution (e.g., "The following text is adapted from Jean Webster's 1912 novel Daddy-Long-Legs.") is **kept** because it is part of the authentic CB stem framing, not a leak. The same applies to PerformSAT items that imitate this framing (e.g., "The following text is adapted from Aroha Whitford's 2021 short story 'The Lighthouse Keeper.'") — keeping the framing on both sides is necessary to test authenticity rather than typography.

---

## 3. The exit gate

The recalibration round is **not done** until both conditions hold for revised PerformSAT items (i.e., re-rate after the recalibration round, not the baseline):

1. **≥80% of revised PerformSAT items rated ≥4 on Overall CB-grade.** (16/20 or better.)
2. **≤0.5-point average gap** between revised-PerformSAT and CB items on Overall CB-grade.

If either condition fails, the round goes back into authoring. The five sub-dimensions help diagnose *why* an item failed:

- Stem clarity ≤3 → re-author the stem to a CB canonical phrasing.
- Passage authenticity ≤3 → replace fabricated researcher/study/work with a verifiable real one; remove euphemisms; anchor to a named institution or location.
- Distractor quality ≤3 → re-design the distractor map; replace any non-word distractors; ensure each wrong answer maps to a distinct misreading.
- Difficulty calibration ≤3 → swap to a top-of-band item or adjust the cognitive demand (more inferential leap, more sentences to integrate, etc.).
- Overall ≤3 with all four sub-dimensions ≥4 → tonal/voice problem; usually a re-write of the surrounding prose toward neutral expository.

---

## 4. Workflow for a re-rate

1. **Open `items.json`.** Read each item without consulting `.answer_key.json`. Cover up `claimedDifficulty` / `domain` if you can; ideally rate on the merits before considering the claim.

2. **Solve each item.** Yes, actually solve it — checking the correct answer is a sanity check. R&W items typically take 30-60 seconds per item; allot ~45 minutes for the full set.

3. **Score the five dimensions.** Use the rubrics in §1. Note one-line reasoning per item if any rating is ≤3 (the "why" matters more than the "what" for re-author decisions). For passage authenticity ≤3, name the specific fabrication or anti-pattern (e.g., "fabricated researcher 'Camps' — bare surname, no first name").

4. **Compute aggregates.** After all 40 items are rated:
   - Average Overall CB-grade for CB items (these are `id`s where the answer key shows `source: "CB"`).
   - Average Overall CB-grade for PerformSAT items.
   - Gap = PerformSAT avg − CB avg. (A negative gap means PerformSAT items rate worse, which is the expected baseline.)
   - Percentage of PerformSAT items with Overall ≥4.

5. **De-anonymize and audit.** Open `.answer_key.json` and inspect the items where your rating diverges from the source — e.g., a CB item rated 2 on Overall (suggesting our extraction or the CB item itself has issues), or a PerformSAT FAIL item rated 5 (suggesting the FAIL is actually borderline or PASS — a positive signal that the audit was conservative).

6. **Decide.** If the exit gate passes (≥80% PerformSAT items ≥4, gap ≤0.5), the round ships. If not, the diagnostic per-item ratings are the input to the next authoring pass.

---

## 5. Re-rate cadence

When a new authoring round ships, **re-rate all 20 PerformSAT items** (the CB items stay the same as the control). The CB items in this calibration set act as a fixed reference point: their average Overall CB-grade should be roughly stable across raters and across rounds (modulo rater noise of ±0.3-0.5 per item). The PerformSAT items move with each authoring round; rating only the changed half halves the total rating burden while keeping the gap measurement honest.

If the CB control average shifts by more than 0.3 between rounds, that is a signal of **rater drift** (the same rater rating differently than they did last round, or a new rater whose calibration differs from the original). In that case, recompute the gap using the current round's CB average rather than the prior round's — i.e., the gap is always re-anchored to the current rater's reading of the CB control.

---

## 6. Worked example

Two illustrative ratings — one CB item, one PerformSAT FAIL item.

### CB item (worked example)

A PT 7 Module 1 SEC item:

> The Dust Bowl was a period of severe drought that plagued the Great Plains of the US during the 1930s. During this time, dust storms _______ over 100 million acres of land.
>
> Which choice completes the text so that it conforms to the conventions of Standard English?
>
> A) are affecting   B) will have affected   C) will affect   D) affected

Correct answer: D.

| SC | PA | DQ | DC | CB |
|----|----|----|----|----|
| 5  | 5  | 4  | 5  | 5  |

- **Stem clarity = 5.** Canonical CB phrasing — "Which choice completes the text so that it conforms to the conventions of Standard English?" verbatim.
- **Passage authenticity = 5.** The Dust Bowl is real, the date range is correct, the acreage is the conventional figure. No fabricated detail; no named researcher to fabricate.
- **Distractor quality = 4.** A is the present-progressive trap (wrong tense for a completed historical event); B is the future-perfect (over-specifying tense); C is the future (ignoring "during this time"); D is the simple past (correct). Distractor C is the weakest because no student writing about the Dust Bowl would actually pick simple future. The other three are well-mapped. Hence DQ=4, not 5.
- **Difficulty calibration = 5.** This is a band-3 easy item — visible as easy because the temporal cue ("during this time") points cleanly at simple past. Top-of-band-3.
- **Overall CB-grade = 5.** Indistinguishable from CB.

### PerformSAT FAIL item (worked example)

The Reza Ahmadi item from `practiceTest1RW.js:927`:

> The poet Reza Ahmadi spent the years 1979 to 1985 in self-imposed silence ____ during this period he wrote no new verse but kept extensive journals describing the work he could not yet make.
>
> Which choice completes the text so that it conforms to the conventions of Standard English?
>
> A) silence, during   B) silence: during   C) silence; during   D) silence—during

Correct answer: C.

| SC | PA | DQ | DC | CB |
|----|----|----|----|----|
| 5  | 1  | 4  | 4  | 1  |

- **Stem clarity = 5.** Canonical CB phrasing.
- **Passage authenticity = 1.** "Reza Ahmadi" is not a documented poet matching this biography; the phrase "self-imposed silence" + "the work he could not yet make" reads as literary biography fiction, not CB neutral exposition. Same skeleton recurs in `practiceTest2RW.js:927` with the architect Yusuf Adisa swapped in for the poet — a templated cross-test FAIL fingerprint. CB never invents poets and never uses novelistic flourishes ("the work he could not yet make") in expository SEC passages.
- **Distractor quality = 4.** A is comma splice; B is colon (introduces explanation, not a coordinate clause); C is correct semicolon; D is dash (CB doesn't use dash to join two independent clauses in this construction). Each distractor maps cleanly to a real punctuation rule. The only reason DQ isn't 5 is that the underlying SEC rule the question is testing is correctly executed despite the fabricated passage — i.e., DQ measures the choice set in isolation, not the passage.
- **Difficulty calibration = 4.** Semicolon-vs-comma-splice is a band-5 medium SEC skill; this item executes that skill at band 5. Solidly mid-medium.
- **Overall CB-grade = 1.** The fabricated researcher and novelistic register together place this firmly outside CB-grade. Even though the SEC mechanic is correctly executed, the surrounding passage is a flag a CB-trained reviewer would catch on first read. The Overall score is the headline number; it integrates the **passage authenticity** failure decisively.

This split — DQ=4 but Overall=1 — is the canonical FAIL profile: the item *almost* tests a real CB skill correctly, but the host passage is fabricated. The fix is not to re-author the choice set; the fix is to replace the passage with a real anchored subject and rerun the same SEC mechanic.

---

## 7. Known limitations

- **The 5-point scale is coarse.** Inter-rater reliability across two independent raters is roughly ±0.5 points per dimension, so the 0.5-point gap criterion is intentionally tight — it forces re-authoring even when the gap "feels small."
- **AI baseline ratings are a stress test, not ground truth.** The baseline ratings in `baseline_ratings.md` are AI-produced as a starting point; the human re-rate is what counts for the exit gate. The AI baseline is conservative — it tends to rate PerformSAT items higher than a CB-trained human reviewer would, because the AI rater has seen the PerformSAT bank during authoring.
- **Anonymization is imperfect.** Some CB literary excerpts have a recognizable "voice" (Jerome K. Jerome's late-Victorian comic register, Petry's mid-century social realism) that a SAT-experienced rater will spot. Similarly, the PerformSAT FAIL fingerprints (templated cross-test passages, "Reza Ahmadi" / "Yusuf Adisa" / "Aiyana Standing Bear" patterns) are recognizable to anyone who has read `RW_SEC_AUDIT.md`. This is OK — the rubric is designed for raters who *can* tell the difference; we just don't want them to *use* that knowledge before scoring.
- **The set is small (40 items).** A single mis-rate moves the average by 0.025 on the Overall dimension. Larger gaps (>0.5) are robust to rater noise; smaller gaps require a second rater for confirmation.
- **Difficulty inheritance.** PerformSAT items carry their authored difficulty (`easy`/`medium`/`hard`); CB items carry the difficulty inferred from their PT position. The two scales are not perfectly aligned — a CB "medium" can feel slightly harder than a PerformSAT "medium" because CB calibrates against the actual SAT student population. This is part of what the DC dimension is rating; it is not noise.

---

## 8. File map

| File | Purpose |
|---|---|
| `docs/calibration_set/rw/items.json` | 40 anonymized R&W items, the rating input. |
| `docs/calibration_set/rw/baseline_ratings.md` | AI baseline ratings + computed gap. |
| `docs/calibration_set/rw/methodology.md` | This file. |
| `docs/calibration_set/rw/.answer_key.json` | Source mapping (gitignored — see `docs/calibration_set/.gitignore`). |
| `docs/calibration_set/rw/_build.mjs` | Builder script; run `node docs/calibration_set/rw/_build.mjs` to re-derive `items.json` and `.answer_key.json` from the source pointers. Idempotent given the same source list. |
| `docs/CB_RW_AUTHENTICITY_REFERENCE.md` | The CB R&W authenticity rubric / reference catalog the items are rated against. |
| `docs/RW_SEC_AUDIT.md` | The SEC audit doc with the FAIL list (file:line refs); the source of the PerformSAT FAIL picks. |
