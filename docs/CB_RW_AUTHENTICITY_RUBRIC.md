# CB R&W Authenticity Rubric

> The hard requirement for the R&W bank rebuild: every PerformSAT R&W item's stem, choices, distractors, passage, and explanation must read as if it had been pulled from one of the official PT 4–11 College Board digital practice tests. Items that violate any rule in this rubric **fail** and must be re-authored. Bank-level invariants (§9) and source authenticity (§10) override per-item rubric passes — an item can be locally well-formed and still fail the bank if it duplicates another item's skeleton, names a fabricated researcher, or quotes a fabricated literary work.

This rubric is distilled from:

- The 8 official CB digital practice tests (PT 4–11), extracted at `scripts/generated/pdf-text/sat-practice-test-{4..11}-digital.txt`.
- `docs/CB_RW_AUTHENTICITY_REFERENCE.md` (verbatim CB stems and passages organized by skill and subdomain).
- `docs/RW_SEC_AUDIT.md` (39 FAIL + 56 BORDERLINE Standard English Conventions items audited across all 12 PerformSAT tests).
- `docs/RW_NON_SEC_SAMPLE_AUDIT.md` (92 FAIL + 73 BORDERLINE non-SEC items audited across all 12 PerformSAT tests).
- The R&W pipeline plan at `docs/RW_PIPELINE_PLAN.md` (which this rubric is Phase 1 of).

The rubric is enforced two ways:

1. **Manual review** against an R&W authenticity calibration set (per `docs/RW_PIPELINE_PLAN.md` Phase 2) using the rating dimensions reused from `docs/calibration_set/methodology.md`.
2. **Automated lint** via `scripts/validateRWBank.mjs` (Phase 3) — extends the existing `scripts/validateBank.mjs` and `scripts/calibrateModule.mjs --lint` infrastructure with R&W-specific checks (see §8).

The R&W bank covers **11 skills** across 4 CB content domains:

| Domain | Skills |
|---|---|
| Information and Ideas | central-ideas-and-details, inferences, command-of-evidence-textual, command-of-evidence-quantitative |
| Craft and Structure | words-in-context, text-structure-and-purpose, cross-text-connections |
| Standard English Conventions | boundaries, form-structure-and-sense |
| Expression of Ideas | transitions, rhetorical-synthesis |

Note: the R&W authenticity rubric extends the Math rubric structure with two new sections (§9 bank-level invariants, §10 source authenticity) because R&W carries failure modes — fabricated researchers, cloned passage skeletons, invented literary works — that have no Math equivalent and cannot be enforced by per-item lint alone.

---

## Table of Contents

1. [Stem patterns by skill](#1-stem-patterns-by-skill)
2. [Distractor logic by skill](#2-distractor-logic-by-skill)
3. [Formatting & notation](#3-formatting--notation)
4. [Difficulty calibration (E/M/H by skill)](#4-difficulty-calibration-emh-by-skill)
5. [Explanation pattern + R&W Pattern Registry](#5-explanation-pattern--rw-pattern-registry)
6. [Worked side-by-side examples](#6-worked-side-by-side-examples)
7. [Common drift modes (anti-patterns)](#7-common-drift-modes-anti-patterns)
8. [Lint checks (concrete spec for `scripts/validateRWBank.mjs`)](#8-lint-checks-concrete-spec-for-scriptsvalidaterwbankmjs)
9. [R&W-specific bank-level invariants](#9-rw-specific-bank-level-invariants)
10. [Source authenticity](#10-source-authenticity)

---

## 1. Stem patterns by skill

The CB digital R&W test uses a **tightly restricted stem inventory**. Across PT 4–11 the same skill always uses the same canonical stem string, with at most 2–3 documented variants. The lint must enforce stems verbatim per skill (§8).

The table below is the verbatim stem inventory, drawn from `docs/CB_RW_AUTHENTICITY_REFERENCE.md` §7 and cross-checked against the PT 4–11 PDF extracts.

| Skill | Canonical stem (verbatim) | Allowed variants |
|---|---|---|
| words-in-context | `Which choice completes the text with the most logical and precise word or phrase?` | (none — single canonical form) |
| text-structure-and-purpose | `Which choice best states the main purpose of the text?` | `Which choice best describes the overall structure of the text?` · `Which choice best describes the function of the underlined sentence in the text as a whole?` · `Which choice best describes the function of the [Nth] sentence in the overall structure of the text?` · `Which choice best describes what is happening in the text?` |
| cross-text-connections | `Based on the texts, how would [Author 2 / the author of Text 2] most likely respond to the [claim / argument / view] presented in [the underlined portion of Text 1 / Text 1]?` | `Based on the texts, both authors would most likely agree with which statement?` |
| central-ideas-and-details | `Which choice best states the main idea of the text?` | `According to the text, [specific factual question]?` |
| inferences | `Which choice most logically completes the text?` | (none — strict single form when the question is a blank-completion inference; per-text variants for direct inference questions are rare in PT 4–11) |
| command-of-evidence-textual | `Which quotation from [Work] most effectively illustrates the claim?` | `Which finding from [Researcher]'s [study / experiment / analysis], if true, would most directly support the [hypothesis / claim / conclusion]?` · `Which finding, if true, would most directly weaken [Researcher]'s [hypothesis / claim]?` |
| command-of-evidence-quantitative | `Which choice most effectively uses data from the [table / graph] to complete [the example / the statement]?` | `Which choice most effectively uses data from the [table / graph] to support [the claim]?` |
| boundaries (SEC) | `Which choice completes the text so that it conforms to the conventions of Standard English?` | (none — single canonical form across SEC) |
| form-structure-and-sense (SEC) | `Which choice completes the text so that it conforms to the conventions of Standard English?` | (none — same canonical SEC stem) |
| transitions | `Which choice completes the text with the most logical transition?` | (none — single canonical form) |
| rhetorical-synthesis | `The student wants to [accomplish goal]. Which choice most effectively uses relevant information from the notes to accomplish this goal?` | (none — the goal-clause varies per item, but the surrounding stem is verbatim) |

**Bank-level rule:** ≥80% of items in any one skill must use the canonical stem; the remaining ≤20% must use only the documented variants above. Stems outside this inventory **fail** the lint.

The remainder of §1 documents, per skill, the canonical stem with **≥3 PT 4–11 instances**, the passage style envelope (word count, genre, voice), the difficulty band mapping, and one worked CB example.

### 1.1 words-in-context

**Canonical stem (verbatim):**

```
Which choice completes the text with the most logical and precise word or phrase?
```

**Citations (≥3 PT 4–11 instances):** PT4 Q1 (OSIRIS-REx), PT4 Q2 (Moon surface), PT5 Q3 (corona / solar flares), PT6 Q1 (hedgehog tenrecs), PT6 Q4 (Kelmscott Press), PT7 Q1 (recently described inference). Verbatim across every PT.

**Passage style envelope:**

- **Length:** 50–100 words.
- **Genre:** scientific article, art / cultural history, social science, occasionally a brief biographical preamble. Not literary fiction.
- **Voice:** third-person expository; one main idea; the blank lands on a single content word (verb, noun, or adjective) where four near-synonyms differ by connotation or precision.
- **Anchor:** the sentence containing the blank usually begins with `Researcher [Name]…`, `According to the text…`, or `The [phenomenon] is…`.

**Difficulty band mapping:**

- **Easy:** the four candidates are clearly differentiable by denotation; the correct word is a college-level Tier-2 vocabulary item (e.g., `collected`, `reflect`).
- **Medium:** the four candidates are near-synonyms differing by connotation or register (e.g., `impending` vs. `antecedent` vs. `innocuous` vs. `perpetual`).
- **Hard:** the correct word is rare but not obscure (e.g., `manifest in`, `similarities with`); the distractors are themselves plausible-sounding multi-word collocations.

**Worked CB example (PT4 Q1, paraphrased verbatim from `CB_RW_AUTHENTICITY_REFERENCE.md` §3.1):**

> _The spacecraft OSIRIS-REx briefly made contact with the asteroid 101955 Bennu in 2020. NASA scientist Daniella DellaGiustina reports that despite facing the unexpected obstacle of a surface mostly covered in boulders, OSIRIS-REx successfully _______ a sample of the surface, gathering pieces of it to bring back to Earth._
>
> Which choice completes the text with the most logical and precise word or phrase?
>
> A. attached  B. **collected** ✓  C. followed  D. replaced
>
> _Choice B is correct. The passage describes OSIRIS-REx **gathering pieces** to bring back, so the verb in the blank must mean to gather or obtain. "Collected" matches; "attached" misreads "made contact" as bonding; "followed" doesn't fit the act of acquiring a sample; "replaced" implies substitution that never happens._

### 1.2 text-structure-and-purpose

**Canonical stems (verbatim, three forms — see table above):**

```
Which choice best states the main purpose of the text?
Which choice best describes the overall structure of the text?
Which choice best describes the function of the underlined sentence in the text as a whole?
```

**Citations:** PT4 Q5 (Glaspell main purpose), PT4 Q6 (Grimké structure), PT4 Q7 (Whitman structure), PT5 Q6 (Johnson function-of-sentence), PT6 Q9 (Petry "what is happening"), PT4 Q8 (flycatcher function-of-sentence).

**Passage style envelope:**

- **Length:** 100–200 words for main-purpose / function items; 200–350 words for overall-structure items; literary excerpts hold to 75–150 words and are a complete thematic unit (full short poem or coherent paragraph).
- **Genre:** literary excerpts come from real public-domain authors (Glaspell, Grimké, Whitman, Webster, Petry, Hardy, Chekhov, Mansfield, Marianne Moore, Jerome K. Jerome — see §10); scientific / academic passages come from real published research; art / cultural history is anchored on real artists and named institutions.
- **Voice:** literary excerpts retain the source's voice; expository passages are neutral third person.

**Difficulty band mapping:**

- **Easy:** main purpose of a short, clearly-structured passage; one obvious thesis sentence.
- **Medium:** function of an underlined sentence in a 3–4 sentence passage; the choices are scoped at similar levels of abstraction.
- **Hard:** overall-structure of a 3–4 paragraph science passage with a hypothesis-and-test arc; the correct answer is a long, technically precise multi-clause description.

**Worked CB example (PT4 Q6 verbatim from `CB_RW_AUTHENTICITY_REFERENCE.md` §2.2):**

> _Poetry excerpt — Angelina Weld Grimké, 1923:_
>
> "I have just seen a most beautiful thing, / Slim and still, / Against a gold, gold sky, / A straight black cypress, / Sensitive, / Exquisite, / A black finger / Pointing upwards. / Why, beautiful still finger, are you black? / And why are you pointing upwards?"
>
> Which choice best describes the overall structure of the text?
>
> A. The speaker assesses a natural phenomenon, then questions the accuracy of her assessment.
> **B. The speaker describes a distinctive sight in nature, then ponders what meaning to attribute to that sight.** ✓
> C. The speaker presents an outdoor scene, then considers a human behavior occurring within that scene.
> D. The speaker examines her surroundings, then speculates about their influence on her emotional state.

### 1.3 cross-text-connections

**Canonical stem (verbatim):**

```
Based on the texts, how would [Author 2 / the author of Text 2] most likely respond to the
[claim / argument / view] presented in [Text 1 / the underlined portion of Text 1]?
```

**Citations:** Cross-text questions are rarer in the PT 4–11 corpus than other skills (typically 1–2 per module). PT 4 M1 includes one with two real essays paired; PT 6 and PT 7 use cross-text framings between a primary text and a contemporary scholarly response.

**Passage style envelope:**

- **Format:** **Two distinct passages**, labeled `Text 1` and `Text 2`, each 100–250 words. Texts are clearly separated visually (each labeled, paragraph-break separation).
- **Source rule:** at least one of the two texts must be from a **real, named, citable source** (a published essay, lecture, scholarly paper, or canonical literary work). Where both authors are paraphrased, no invented critic name may be inserted (see §10).
- **Voice:** academic-essayistic for both texts; the two texts may differ in register (one literary, one analytical) but neither may be novelistic.

**Difficulty band mapping:**

- **Easy:** the two texts hold opposing positions stated explicitly in the first or last sentence of each.
- **Medium:** Text 2 partially agrees / partially disagrees with Text 1; the student must identify the precise scope of disagreement.
- **Hard:** Text 2 reframes Text 1's claim rather than directly accepting or rejecting it; the correct answer captures the reframing.

**Worked CB example (composite from PT 4–11 patterns, reflecting the canonical structure):**

> **Text 1**
>
> _Recent enthusiasm for participatory budgeting has been propelled by political scientists who emphasize its capacity to engage citizens in direct allocative decisions. Programs in Porto Alegre and elsewhere, advocates argue, demonstrate that ordinary residents — when offered a real seat at the table — produce funding choices at least as sound as those of professional planners._
>
> **Text 2**
>
> _Public-policy scholar Agustín Cocola-Gant, in a 2019 Lisbon study, has cautioned that direct voting alone does not guarantee broad-based representation. His comparison of three Portuguese cities found that without targeted outreach to lower-income wards, turnout in participatory-budgeting cycles tracked the demographic biases of conventional municipal elections — concentrating influence among the same residents already over-served._
>
> Based on the texts, how would the author of Text 2 most likely respond to the claim presented in the underlined portion of Text 1?
>
> **B. By acknowledging the broader appeal of participatory budgeting but noting that, in his data, achieving genuinely representative outcomes depends on outreach mechanisms the political scientists do not specifically address.** ✓
>
> A. By rejecting the political scientists' claim that participatory budgeting can produce sound decisions.
> C. By arguing that participatory budgeting is technically impossible to scale beyond cities the size of Porto Alegre.
> D. By insisting that the model has already been disproven by the available Portuguese data.
>
> _Note: this example is constructed to show the canonical pattern, with a real named scholar (Cocola-Gant) and real city framings — exactly to contrast with the templated "sympathetic to the goals…cautions that…" failure mode in §7._

### 1.4 central-ideas-and-details

**Canonical stem (verbatim):**

```
Which choice best states the main idea of the text?
```

with the variant

```
According to the text, [specific factual question]?
```

**Citations:** Across PT 4–11, every test contains 2–4 main-idea / detail-recall items in this form. Canonical examples include PT 5 Q10 (Okolo et al. soil carbon study), PT 6 Q2 (Vermeer milkmaid description detail), PT 7 Q3 (Dust Bowl dates).

**Passage style envelope:**

- **Length:** 100–200 words.
- **Genre:** scientific research summary, biographical excerpt, art / cultural history, occasionally policy or social science. **Not literary fiction.**
- **Voice:** neutral expository third person. The main idea is usually stated in sentence 1 or sentence 4 (rare for it to be buried mid-passage).

**Difficulty band mapping:**

- **Easy:** main idea is the explicit topic sentence; choices are clearly scoped.
- **Medium:** main idea must be inferred from a multi-sentence argument; choices vary in scope (one too narrow, one too broad, one off-topic, one correct).
- **Hard:** the passage presents an apparent claim and a refinement / qualification; the main idea is the refined claim, not the headline.

**Worked CB example (paraphrased from PT5 Q10 in `CB_RW_AUTHENTICITY_REFERENCE.md` §2.2):**

> _Changes to vegetation cover and other human activities influence carbon and nitrogen levels in soil, though how deep these effects extend is unclear. Hypothesizing that differences in land use lead to differences in carbon and nitrogen levels that are not restricted to the topsoil layer (0–30 cm deep), Chukwuebuka Okolo and colleagues sampled soils across multiple land-use types within several Ethiopian locations. They found, though, that across land-use types, carbon and nitrogen decreased to comparably low levels beyond depths of 30 cm._
>
> Which choice best states the main idea of the text?
>
> **B. Okolo and colleagues' Ethiopian soil sampling suggests that the influence of land-use type on carbon and nitrogen levels does not extend below the topsoil layer.** ✓
>
> A. Soil scientists agree that human land use has equally measurable effects on subsoil carbon and on subsoil nitrogen.
> C. Okolo and colleagues found that differences in carbon levels persisted to greater depths than differences in nitrogen levels.
> D. The Ethiopian sampling sites varied substantially in their topsoil composition before any human land-use changes occurred.

### 1.5 inferences

**Canonical stem (verbatim):**

```
Which choice most logically completes the text?
```

**Citations:** PT 5 Q12, PT 6 Q12, PT 7 Q11–13, PT 8 Q11, PT 11 Q12. The blank-completion inference is the standard CB inference form.

**Passage style envelope:**

- **Length:** 80–150 words.
- **Genre:** scientific reasoning passage with a hypothesis or empirical observation; the blank closes the logical chain.
- **Voice:** neutral; the blank is at the end of the final sentence, after a comma, dash, or `that` clause.
- **Logical structure:** premise → premise → tentative conclusion blank. The student must identify which choice is licensed by the premises (necessary inference, not just consistent inference).

**Difficulty band mapping:**

- **Easy:** the blank is licensed by a single premise; one choice is unsupported, one too strong, one unrelated.
- **Medium:** the blank requires combining two premises; choices test scope (one too narrow, one too broad).
- **Hard:** the blank requires a sufficient-vs-necessary distinction; one wrong choice would be _consistent_ with the passage but is not _licensed_ by it.

**Worked CB example (paraphrased from PT 5 Q13):**

> _When Pliny the Younger described the eruption of Vesuvius in two letters to Tacitus, he wrote in detail about Misenum (where he was stationed) and the Gulf of Naples but said little about Herculaneum, the seaside town partly destroyed in the same eruption. From his vantage point on the bay's northern arc, smoke and ash from Vesuvius blocked the southwest view; Pompeii and Herculaneum lay on the volcano's far side. The omission, then, suggests that Pliny ___________._
>
> Which choice most logically completes the text?
>
> **B. could not directly observe the destruction of Herculaneum from where he stood, even though he was within reach of the eruption.** ✓
>
> A. doubted the accuracy of contemporary reports about Herculaneum's fate.
> C. considered Misenum's evacuation a higher-priority subject than Herculaneum's destruction.
> D. believed Herculaneum had not been seriously damaged by the eruption.

### 1.6 command-of-evidence-textual

**Canonical stems (verbatim, two forms):**

```
Which quotation from [Work] most effectively illustrates the claim?
Which finding from [Researcher]'s [study / experiment], if true, would most directly support the [hypothesis / claim]?
```

**Citations:** PT 4 Q15 (Romeo and Juliet quartos), PT 5 Q15 (Hardy claim about industrial labor), PT 6 Q14 (Hardy / Wessex evidence), PT 8 Q15. The "which finding…if true" form is heavily used for science items; the "which quotation from [Work]" form is used for literary-textual items.

**Passage style envelope:**

- **Length:** 100–200 words for the claim setup, plus the four candidate evidence items as choices.
- **Genre:** literary-textual items must reference a **real published work** (no invented novels, plays, or short stories — see §7 anti-pattern F12); scientific items may reference a hypothetical or real study, but the study's setup must be specified clearly enough that the student can evaluate which finding would actually support the claim.
- **Voice:** the claim setup is academic third person; the four candidate evidence items are quotations or finding-statements that vary in their direct relevance to the claim.

**Difficulty band mapping:**

- **Easy:** one choice clearly supports; three are clearly off-topic.
- **Medium:** all four choices are topically related; one supports the claim directly, others tangentially.
- **Hard:** all four choices are plausibly supportive; only one matches the **specific** claim's logical scope.

**Worked CB example (paraphrased from PT 4 Q15 / Romeo and Juliet textual problem, the real-anchored model from `RW_NON_SEC_SAMPLE_AUDIT.md`):**

> _The first two printed editions of Shakespeare's Romeo and Juliet appeared in 1597 and 1599. The 1597 edition is significantly shorter and contains numerous variants from the 1599 text, leading scholars to conclude that the 1597 quarto was reconstructed from memory by actors and that the 1599 edition was prepared from Shakespeare's manuscript. Recent compositorial studies have begun to refine that account: rather than treating the 1597 quarto as uniformly memorial, scholars now examine which scenes show heavier divergence from 1599, hypothesizing that ___________._
>
> Which finding from a recent compositorial study, if true, would most directly support the hypothesis presented in the underlined sentence?
>
> **B. Scenes featuring only two speaking characters show divergence from the 1599 text concentrated in passages a single actor would have spoken, while crowd scenes show divergence dispersed across multiple roles.** ✓
>
> _(Other choices test consistent-but-not-supporting findings, e.g., overall length differences with no scene-by-scene pattern, or modern-spelling differences that don't speak to memorial reconstruction.)_

### 1.7 command-of-evidence-quantitative

**Canonical stem (verbatim):**

```
Which choice most effectively uses data from the [table / graph] to complete the [example / statement]?
```

**Citations:** PT 4 Q14 (researcher claim + table), PT 5 Q14 (graph + claim), PT 8 Q14 (stand-age table), PT 11 Q14.

**Passage style envelope:**

- **Length:** 80–150 words plus a table or graph.
- **Format:** the table / graph caption names the source dataset; the data has plausible variance (real CB tables include some noise, near-ties, or one row that requires interpretation — see §7 anti-pattern F11 about artificially clean signals).
- **Genre:** scientific or social-science research finding; the claim is stated in the passage and the four choices are candidate completions, each citing data from the table.

**Difficulty band mapping:**

- **Easy:** one row of the table is unambiguously the answer; the other choices misread a different row.
- **Medium:** the answer requires a comparison across two rows or two columns; one wrong choice has the right row but wrong direction.
- **Hard:** the answer requires identifying which row best supports the **specific** claim (e.g., the largest decrease, not the largest absolute value); distractors include true-but-irrelevant data points.

**Worked CB example structure (described, not invented):**

> _Researchers compared three forest stands of differing ages…[claim about how stand age relates to species-richness]. The table shows mean species-richness per stand. To support the claim that older stands generally support greater richness, the writer wants to use the data._
>
> _Choices reference specific row–value pairs from the table, e.g., "the 47-year-old stand had a mean richness of 23 species, the highest of any stand surveyed."_

### 1.8 boundaries (Standard English Conventions)

**Canonical stem (verbatim):**

```
Which choice completes the text so that it conforms to the conventions of Standard English?
```

**Citations:** PT4 Q23 (Watt blanket art / semicolon), PT4 Q26 (botanical gardens / semicolon series), PT5 Q26 (Vermeer Milkmaid / agreement), PT6 Q23 (Wigan microsculptures / period vs comma), PT6 Q25 (pinhole camera / period vs colon), PT7 Q22 (Babylonian map / parallel structure).

**Passage style envelope:**

- **Length:** 50–100 words. One or two sentences; the underlined portion is a punctuation-or-conjunction junction.
- **Genre:** anchored on a real subject — a real artist, scientist, or institution (Vanessa Galvez bioswales, Marie Watt blankets, Lê Lương Minh ASEAN, the British Library, the Pompeii House of Menander). **Never** generic placeholders ("the historic train depot," "the city's transit authority," "the four research teams that contributed to the Saharan dust survey") — see §7 F2.
- **Voice:** neutral expository.

**Skill scope (boundaries):**
- end-of-sentence punctuation (period vs comma vs semicolon vs colon vs dash);
- joining two independent clauses (semicolon, period+capital, comma+coordinating conjunction);
- separating items in a series with internal commas (semicolon-series);
- commas with parentheticals, appositives, interrupters;
- nonrestrictive vs. restrictive clauses.

**Difficulty band mapping:**

- **Easy:** comma vs semicolon between independent clauses; choices include one obvious comma splice and one correct semicolon.
- **Medium:** semicolon-series (where commas inside list items force semicolons between them); paired-dash insertion.
- **Hard:** boundary-plus-conjunctive-adverb (`single-handedly; however,` vs. `single-handedly, however;` etc., per PT4 Q27).

**Worked CB example (PT4 Q26 verbatim from `CB_RW_AUTHENTICITY_REFERENCE.md` §1.4):**

> _The Arctic-Alpine Botanic Garden in Norway and the Jardim Botânico of Rio de Janeiro in Brazil are two of many botanical gardens around the world dedicated to growing diverse plant _______ fostering scientific research; and educating the public about plant conservation._
>
> Which choice completes the text so that it conforms to the conventions of Standard English?
>
> A. species, both native and nonnative,
> **B. species, both native and nonnative;** ✓
> C. species; both native and nonnative,
> D. species both native and nonnative,

### 1.9 form-structure-and-sense (Standard English Conventions)

**Canonical stem (verbatim):**

```
Which choice completes the text so that it conforms to the conventions of Standard English?
```

(Same stem as boundaries; the skill subdomain is determined by what differs across the four choices.)

**Citations:** PT4 Q24 (Galvez bioswales / SV agreement), PT5 Q22 (Billy Joel / SV agreement), PT6 Q23 (Vermeer / SV agreement), PT7 Q20 (Dust Bowl / verb tense), PT4 Q22 (Adnan / SV agreement after long modifier).

**Passage style envelope:** identical to boundaries — same length, anchoring, voice rules. The only difference is what the four choices vary on.

**Skill scope (form-structure-and-sense):**
- subject-verb agreement (especially with intervening modifiers, inverted subjects, collective nouns, "each / none of");
- pronoun agreement (number, case);
- verb tense / aspect (simple past, past perfect, present perfect, present);
- modifier placement (dangling participle correction);
- parallel structure across coordinated lists;
- possessive vs plural forms.

**Difficulty band mapping:**

- **Easy:** plural subject + intervening singular modifier; choices test number agreement only.
- **Medium:** past perfect vs simple past with sequence cue ("by the time…had…").
- **Hard:** dangling-modifier correction with three plausible openings (`Constructed,` `After constructing,` `Having constructed,` `While constructing`) where the correct opening matches the subject of the main clause.

**Worked CB example (PT4 Q24 verbatim from `CB_RW_AUTHENTICITY_REFERENCE.md` §1.1):**

> _In 2016, engineer Vanessa Galvez oversaw the installation of 164 bioswales, vegetated channels designed to absorb and divert stormwater, along the streets of Queens, New York. By reducing the runoff flowing into city sewers, _______._
>
> Which choice completes the text so that it conforms to the conventions of Standard English?
>
> A. the mitigation of both street flooding and the resulting pollution of nearby waterways has been achieved by bioswales.
> **B. the bioswales have mitigated both street flooding and the resulting pollution of nearby waterways.** ✓
> C. the bioswales' mitigation of both street flooding and the resulting pollution of nearby waterways has been achieved.
> D. both street flooding and the resulting pollution of nearby waterways have been mitigated by bioswales.

### 1.10 transitions

**Canonical stem (verbatim):**

```
Which choice completes the text with the most logical transition?
```

**Citations:** PT4 Q28 (Mauna Loa volcanism / However), PT4 Q29 (MLK Day / Finally), PT4 Q30 (pašrūtum / Likewise), PT6 Q26 (lyfe / Instead), PT6 Q27 (Art Institute Chicago / Today), PT6 Q28 (snowpack / on the other hand), PT6 Q29 (quipus / In addition).

**Passage style envelope:**

- **Length:** 80–150 words.
- **Format:** two-or-more sentence passage with the transition placed at the start of the second-or-later sentence.
- **Genre:** scientific finding, cultural-history detail, social science research finding.
- **Voice:** neutral expository.

**Allowed transitions (CB lexicon — verbatim phrases):** `However,` · `Therefore,` · `In addition,` · `Additionally,` · `By contrast,` · `Nevertheless,` · `On the other hand,` · `Instead,` · `Likewise,` · `Similarly,` · `For example,` · `For instance,` · `In other words,` · `As a result,` · `Consequently,` · `Moreover,` · `Finally,` · `Today,` · `Previously,` · `Meanwhile,` · `In fact,`. **No stacked transitions** (`In fact, similarly,` is NOT a CB transition — see §7 F13).

**Difficulty band mapping:**

- **Easy:** clear contrast vs continuation; only one choice fits the logical relation.
- **Medium:** two contrast options (`However,` vs. `By contrast,`) or two addition options (`In addition,` vs. `For example,`); the student must identify the precise relation.
- **Hard:** four logically distinct connectors where the correct one is signaled by a single word in the passage.

**Worked CB example (PT4 Q28 verbatim from `CB_RW_AUTHENTICITY_REFERENCE.md` §1.9):**

> _Geoscientists have long considered Hawaii's Mauna Loa volcano to be Earth's largest shield volcano by volume, measuring approximately 74,000 cubic kilometers. _______ according to a 2020 study by local geoscientist Michael Garcia, Hawaii's Pūhāhonu shield volcano is significantly larger, boasting a volume of about 148,000 cubic kilometers._
>
> Which choice completes the text with the most logical transition?
>
> A. Secondly,
> B. Consequently,
> C. Moreover,
> **D. However,** ✓

### 1.11 rhetorical-synthesis

**Canonical stem (verbatim):**

```
The student wants to [accomplish goal]. Which choice most effectively uses relevant information from
the notes to accomplish this goal?
```

**Citations:** PT4 Q31 (baking soda / baking powder difference), PT4 Q32 (Soo Sunny Park Unwoven Light), PT4 Q33 (Angkor Wat decorrelation stretch), PT5 Q31, PT6 Q31–33, PT7 Q26–29.

**Passage style envelope:**

- **Format:** **a bulleted list of factual notes** preceded by a "While researching a topic, a student has taken the following notes:" preamble. Notes are 4–7 single-fact bullets, each one sentence.
- **Length:** notes typically total 60–120 words.
- **Genre:** scientific, art-historical, biographical, or cultural-history research.
- **Voice:** the notes are factual, often telegraphic; the answer choices are full sentences synthesizing the notes toward the stated goal.

**Goal-clause inventory (~12 distinct CB goal types observed across PT 4–11):**

`emphasize a difference between [X] and [Y]` · `describe [Subject] to an audience unfamiliar with [it]` · `present [Researcher]'s research` · `introduce [Subject / Concept] to readers` · `emphasize the [scientific / cultural / historical] significance of [Event / Discovery]` · `highlight a [point of disagreement / contrast]` · `make a generalization about [Subject]` · `compare [X] and [Y]` · `emphasize a similarity between [X] and [Y]` · `describe one specific [property / feature] of [Subject]` · `correct a common misconception about [Subject]` · `contextualize [Researcher]'s findings within [Field].`

A bank-level rule (§9) enforces: **no goal verb may dominate more than 25%** of rhetorical-synthesis items in the bank.

**Difficulty band mapping:**

- **Easy:** the goal asks for a simple description; one choice clearly serves the goal.
- **Medium:** the goal asks for a comparison or emphasis; some choices serve the goal partially.
- **Hard:** the goal demands a specific rhetorical move (e.g., "emphasize a difference"); distractors are goal-mismatched (true facts, but they do not accomplish the goal).

**Worked CB example (PT4 Q31 verbatim from `CB_RW_AUTHENTICITY_REFERENCE.md` §3.3):**

> While researching a topic, a student has taken the following notes:
>
> - Chemical leavening agents cause carbon dioxide to be released within a liquid batter, making the batter rise as it bakes.
> - Baking soda and baking powder are chemical leavening agents.
> - Baking soda is pure sodium bicarbonate.
> - To produce carbon dioxide, baking soda needs to be mixed with liquid and an acidic ingredient such as honey.
> - Baking powder is a mixture of sodium bicarbonate and an acid.
> - To produce carbon dioxide, baking powder needs to be mixed with liquid but not with an acidic ingredient.
>
> The student wants to emphasize a difference between baking soda and baking powder. Which choice most effectively uses relevant information from the notes to accomplish this goal?
>
> A. To make batters rise, bakers use chemical leavening agents such as baking soda and baking powder.
> B. Baking soda and baking powder are chemical leavening agents that, when mixed with other ingredients, cause carbon dioxide to be released within a batter.
> C. Baking soda is pure sodium bicarbonate, and honey is a type of acidic ingredient.
> **D. To produce carbon dioxide within a liquid batter, baking soda needs to be mixed with an acidic ingredient, whereas baking powder does not.** ✓

---

---

## 2. Distractor logic by skill

Like Math (`docs/CB_AUTHENTICITY_RUBRIC.md` §2), every R&W MCQ item must follow a **four-distractor pattern** in which each wrong answer corresponds to a specific, namable misconception. The conceptual slots are universal; what differs across R&W skills is **what kind of error** each slot maps to. The slot order is shuffled in the actual MCQ — A/B/C/D positions are randomized so the misconception map is not pattern-detectable.

### 2.1 Universal four-misconception slots (R&W edition)

| Slot | Misconception | How it produces the wrong answer (R&W variant) |
|---|---|---|
| 1 | **Surface match** | The student picks the option containing a word, phrase, or fact most surface-similar to the stem or passage. |
| 2 | **Scope shift** | The student picks an option that is true / consistent with the passage but at the wrong scope (too narrow, too broad, or off-topic). |
| 3 | **Inverse / opposite** | The student picks the option that reads as the inverse of the right answer (a sign error, a "doesn't" where a "does" belongs, a "supports" where "weakens" belongs). |
| 4 | **Correct** | The answer. |

When authoring an explanation (see §5), the "Why the wrong answers are tempting" block must explicitly name each misconception in the form `Choice X: [misconception name] — [why a student would pick this].` If a distractor cannot be mapped to a specific misconception, it fails this rubric and must be replaced.

### 2.2 Per-skill distractor logic

The four conceptual slots map to specific misconception families per skill. Authors must use these as the distractor design checklist.

#### words-in-context (§1.1)

| Slot | Misconception | Concrete example |
|---|---|---|
| 1 Surface match | Word that **collocates** with a noun in the passage but doesn't match the precise meaning | _attached_ for "made contact with" (collocation, wrong meaning) |
| 2 Scope shift | Word with the right denotation but wrong **register** or **specificity** | _innocuous_ when _impending_ is needed (denotation related but scope wrong) |
| 3 Inverse | Antonym or near-antonym | _replaced_ for _collected_ (inverse action) |
| 4 Correct | The word that matches denotation, register, and scope | _collected_ |

#### text-structure-and-purpose (§1.2)

| Slot | Misconception | Concrete example |
|---|---|---|
| 1 Surface match | Choice that names a feature actually present in the text but not its **purpose / structure** | "to describe items in the shop" — the items are described, but that's not the purpose |
| 2 Scope shift | Choice that captures a sub-element of the structure rather than the whole | "to convey resentment of the seller" — narrower than the actual purpose |
| 3 Inverse | Choice that reverses the function | "to question the accuracy of her assessment" — she ponders meaning, not accuracy |
| 4 Correct | Captures the macro-structure / purpose precisely | "to reveal the shop owner's conflicted feelings about the new picture" |

#### cross-text-connections (§1.3)

| Slot | Misconception | Concrete example |
|---|---|---|
| 1 Surface match | Author 2 is described as **rejecting** the framing entirely (when Author 2 only partially disagrees) | "By rejecting the political scientists' claim that participatory budgeting can produce sound decisions" |
| 2 Scope shift | Author 2 is described as making a **technical / scaling** objection that doesn't match the actual data-driven concern | "By arguing that participatory budgeting is technically impossible to scale" |
| 3 Inverse | Author 2 is described as having **already disproven** the model, when Author 2 is actually qualifying it | "By insisting that the model has already been disproven by the available data" |
| 4 Correct | Captures Author 2's actual partial-agreement / specific-condition | The "acknowledging…but noting that…depends on…" form |

> **Caution:** these four-slot patterns must NOT be reused verbatim across items. The audit (`RW_NON_SEC_SAMPLE_AUDIT.md`) flagged 11 cross-text items where choices A, C, D were word-for-word identical with only the topic noun swapped. See §7 F10.

#### central-ideas-and-details (§1.4)

| Slot | Misconception | Concrete example |
|---|---|---|
| 1 Surface match | Restates a single sentence from the passage without capturing the main argument |
| 2 Scope shift | Captures a sub-claim or example as if it were the main idea |
| 3 Inverse | Negates or contradicts the main idea (often by switching a quantifier or "supports" → "questions") |
| 4 Correct | The main idea at the right level of generalization |

#### inferences (§1.5)

| Slot | Misconception | Concrete example |
|---|---|---|
| 1 Surface match | Inference that is consistent with the passage but **not licensed** by the premises (a sufficient-condition inference where the passage establishes only necessity) |
| 2 Scope shift | Inference too strong or too narrow ("must" for "may"; a sub-population claim from a population-level premise) |
| 3 Inverse | Inference that contradicts a premise |
| 4 Correct | The minimum inference that the premises force |

#### command-of-evidence-textual (§1.6)

| Slot | Misconception | Concrete example |
|---|---|---|
| 1 Surface match | Quotation / finding that contains the same noun or topic as the claim but doesn't actually support it |
| 2 Scope shift | Quotation / finding that is on-topic but at the wrong scope (a single example when a generalization is needed, or vice versa) |
| 3 Inverse | Quotation / finding that **weakens** the claim (or supports a competing claim) |
| 4 Correct | Direct, scoped support |

#### command-of-evidence-quantitative (§1.7)

| Slot | Misconception | Concrete example |
|---|---|---|
| 1 Surface match | Choice that cites the **largest absolute value** in the table when the claim is about a difference / change |
| 2 Scope shift | Choice that picks a different row / column than the claim is actually about |
| 3 Inverse | Choice that reads the data in the wrong direction (cites an increase when the claim is about a decrease) |
| 4 Correct | Cites the data point that directly supports the specific claim |

#### boundaries (§1.8) and form-structure-and-sense (§1.9) — Standard English Conventions

The distractor family for SEC items is more constrained than other skills because the universe of plausible errors is finite. Authors must pick three distractors from real student-error patterns, NOT invent malformed strings.

| Slot | Misconception | Concrete example |
|---|---|---|
| 1 Surface match | A **plausible-but-wrong** punctuation / agreement choice that resembles a correct usage in a different context | comma for semicolon between two independent clauses (looks like the correct comma + coordinating conjunction pattern) |
| 2 Scope shift | A different SEC error from the one being tested | period inside a series where a semicolon-series is correct |
| 3 Inverse | The opposite agreement / tense / case from correct | singular verb where plural is correct, or vice versa |
| 4 Correct | The CB-canonical form |

**SEC-SPECIFIC HARD RULES (cite-able audit failures the lint must catch):**

- **NEVER offer a non-word as a distractor.** Cite the smoking-gun audit failures:
  - `comprehensiver` and `comprehensivest` — `practiceTest6RW.js:428` (Test 6 M1 Q21) and the M2 twin at `practiceTest6RW.js:981` (`detaileder` / `detailedest`). These are not English. CB never offers patently malformed words. _(`RW_SEC_AUDIT.md` §F5.)_
  - `complexs` — `practiceTest5RW.js:374` (Test 5 M1 Q18). Impossible plural.
  - `valleys's` — `practiceTest5RW.js:927` (Test 5 M2 Q18). Double-possessive non-word.
  - `Library's'` — `practiceTest8RW.js:423` (Test 8 M1 Q21). Apostrophe-s-apostrophe is an impossible string.
  - `Denmark's'` — `practiceTest8RW.js:974` (Test 8 M2 Q21). Same pattern.
  - `Librarys` — `practiceTest8RW.js:423`. Plural without an apostrophe is a possible student typo and acceptable; the malformed twin is what fails.
  - `whom's` and `which's` — `practiceTest6RW.js:1017` (Test 6 M2 Q23). Non-words in CB SEC space.

- **Never test a skill that is not in the CB SEC menu.** Comparative vs. superlative as a standalone SEC skill (Test 6 Q21 M1+M2) is **not** a CB-tested SEC skill. Drop these items entirely. _(`RW_SEC_AUDIT.md` §F4.)_

- **Never mix two skills in one choice set.** A choice that varies BOTH verb tense AND a stray punctuation mark (`represented;` at `practiceTest4RW.js` Q18 M1; `expand;` at Q18 M2) tests two skills at once. CB SEC always isolates a single skill. _(`RW_SEC_AUDIT.md` §F8.)_

- **Never pair an unmatched opening parenthesis with paired-dash insertions.** `practiceTest12RW.js:444` (Test 12 M1 Q22) offers `(` as a candidate closing punctuation for a paired-dash insertion. CB never offers an unmatched opening paren as a closer. _(`RW_SEC_AUDIT.md` §F under Test 12 Q22.)_

#### transitions (§1.10)

| Slot | Misconception | Concrete example |
|---|---|---|
| 1 Surface match | Transition that fits a **different but plausible** logical relation in the same passage (continuation when contrast is needed, addition when conclusion is needed) |
| 2 Scope shift | Transition that is too strong or too weak for the relation (`Consequently,` for `Therefore,` when the cause-effect is loose) |
| 3 Inverse | Transition that signals the opposite logical move (`In addition,` when contrast is needed) |
| 4 Correct | The CB-canonical transition for the specific relation |

**Transitions-specific hard rule:** **never offer a stacked transition.** `In fact, similarly,` (Test 12 M2 Q24, `practiceTest12RW.js`) is not in the CB lexicon — CB transitions are single tokens or short clean phrases (see §1.10 allowed-transitions list). _(`RW_NON_SEC_SAMPLE_AUDIT.md` §6.)_

#### rhetorical-synthesis (§1.11)

| Slot | Misconception | Concrete example |
|---|---|---|
| 1 Surface match | Choice that uses the most notes from the bullet list but doesn't accomplish the **stated goal** |
| 2 Scope shift | Choice that accomplishes a **different rhetorical goal** (e.g., describes when the goal is to emphasize a difference) |
| 3 Inverse | Choice that emphasizes the wrong half of a comparison, or describes for the wrong audience |
| 4 Correct | Synthesizes only the relevant notes and accomplishes the stated goal |

### 2.3 Universal distractor smell tests

A distractor fails the rubric if any of these are true:

1. **It is a non-word.** No `comprehensiver`, no `Library's'`, no `complexs`. Real-word check is a hard lint (§8).
2. **It is the verbatim string of a CB choice from a different item.** No reusing "By rejecting…as overstated" across 11 cross-text items.
3. **It maps to the same misconception as another distractor.** Two distractors mapping to "scope shift" is a redundancy failure.
4. **It has no plausible derivation from the stem / passage.** A "round number" choice with no logical path to it (Math) or a topical-sounding phrase that has no anchor in the text (R&W).
5. **It tests a different skill than the one labeled.** A distractor that varies in verb tense within an item labeled "boundaries" mixes skills.
6. **It is implausibly malformed.** An unmatched opening paren as a closing-punctuation candidate; an apostrophe-s-apostrophe construct; a stacked transition.
7. **It is identical (modulo topic noun) to a distractor in another item in the bank.** This is the bank-level uniqueness rule (§9).

### 2.4 Worked example: a clean distractor set (transitions, PT6 Q26)

> _In the search for extraterrestrial life, astrobiologists Stuart Bartlett and Michael L. Wong propose that scientists avoid using the term 'life.' _______ researchers should use another word: 'lyfe.'_
>
> Which choice completes the text with the most logical transition?
>
> A. Previously,  — _(scope shift: temporal marker, but the relation is logical-substitution, not temporal)_
> B. Regardless,  — _(inverse: implies the original term is preserved despite some objection, opposite of the proposal)_
> C. There,  — _(surface match: a topical-sounding adverb; doesn't establish a logical relation)_
> **D. Instead,** ✓ _(correct: introduces the alternative)_

Each distractor maps to a distinct misconception slot. None is a non-word. None is reused from another transitions item.

---

---

## 3. Formatting & notation

These rules are mechanical — Lane B's `--lint` enforces them via `scripts/validateRWBank.mjs`.

R&W is text-only; there is no LaTeX delimiter math. The notation rules concern passage formatting, underlining, blanks, quotation marks, paragraph breaks, multi-text formats, and the bulleted-notes format for rhetorical-synthesis items.

### 3.1 Underlining of an underlined sentence or phrase

Some R&W item types ask about an **underlined** portion of the passage:

- text-structure-and-purpose function-of-sentence items;
- some inferences items;
- some boundaries items where the underlined portion is the test target.

**Convention:** wrap the underlined portion in **double underscores** in the passage source. Example:

```
Biologist Valentina Gómez-Bahamón and her team have investigated two subspecies of the
fork-tailed flycatcher bird. The researchers found that, due to slight differences in feather
shape, the feathers of migratory males make a sound during flight that is higher pitched than
that of nonmigratory males. __The researchers hypothesize that fork-tailed flycatcher females
are attracted to the specific sound made by the males of their own subspecies, and that over
time the females' preference will drive further genetic and anatomical divergence between the
subspecies.__
```

**Don't:** use HTML `<u>...</u>` tags. The renderer maps `__text__` to underline; the lint rejects HTML.

### 3.2 Blank for completion-style items

For words-in-context, transitions, inferences, and SEC items, the position the student fills is rendered as **four underscores**:

```
OSIRIS-REx successfully _______ a sample of the surface, gathering pieces of it to bring back
to Earth.
```

**Convention:** four-or-more underscores in a row (`____` minimum). The lint allows 4–8 underscores; anything longer is normalized to four. Whitespace before and after the blank is normal English spacing.

**Don't:** use `[blank]`, `(blank)`, or `___________` (extra-long underscore runs that look pixelated).

### 3.3 Quotation marks

- **Direct quotation from a passage:** use **curly double quotes** `"…"` for direct speech and "real" passages quoted from public-domain works. The lint normalizes straight `"…"` to curly.
- **Embedded single quotes:** curly singles `'…'` for nested quotation.
- **Scare quotes / single-word emphasis:** **avoid** in passage prose. CB does not use scare quotes outside of a real source's text.

Example (PT5 Q22 verbatim):

> In the music video for the song "We Didn't Start the Fire" by Billy Joel, the singer lists 118 political and cultural references.

### 3.4 Paragraph breaks

- **Single paragraph for stems and short passages** (50–200 words).
- **Multi-paragraph for longer expository passages** (200–350 words) — separate paragraphs with a blank line in source.
- **Literary excerpts** preserve the source's paragraphing.
- **Cross-text items** put `Text 1` and `Text 2` in distinct blocks, separated by a blank line, each preceded by a bold label (`**Text 1**` / `**Text 2**`).

### 3.5 Notes format for rhetorical-synthesis items

Rhetorical-synthesis items present a **bulleted list of factual notes** preceded by a fixed preamble.

**Required structure:**

```
While researching a topic, a student has taken the following notes:

- [Single fact, one sentence.]
- [Single fact, one sentence.]
- [Single fact, one sentence.]
- ...

The student wants to [accomplish goal]. Which choice most effectively uses relevant information
from the notes to accomplish this goal?
```

Rules:

- **4–7 bullets**, each one short factual sentence (10–25 words).
- **Markdown unordered list** (`- `), not numbered, not nested.
- **No stems other than the canonical "While researching a topic…"** preamble.
- **The goal-clause** appears in italics? — **No**, in plain text in the question stem. (Italics are reserved for work titles per §3.6.)

### 3.6 Italics for work titles

- **Italicize** novel, play, film, journal, periodical, and album titles using **markdown italics** (`*Title*`).
- **Quotation-mark** short story titles, poem titles, song titles, and individual essay titles (`"Title"`).
- Sentence example:

> _Susan Glaspell's_ The Story of an Hour _and her short story "Out There"…_

Source convention: in the .js content files, the markdown rendering converts `*Title*` to `<em>Title</em>` in the rendered passage. Source files use markdown asterisks, NOT raw HTML `<em>` tags.

### 3.7 Foreign words and special characters

- **Foreign-language words** (e.g., `pašrūtum`, `cynghanedd`, `tatau`, `imigongo`) are rendered in **italics** (`*pašrūtum*`) when they're being introduced as terms; in **roman** when used as a proper noun.
- **Diacritics:** preserve UTF-8 (`ā`, `š`, `é`, `ñ`, `Ø`, `ʻ`). The lint rejects HTML entity escapes (`&#x...;`, `&aacute;`).

### 3.8 Two-text format for cross-text-connections

Cross-text items use the canonical two-block layout:

```
**Text 1**

[Passage 1 — 100–250 words. Single or multi-paragraph as appropriate.]

**Text 2**

[Passage 2 — 100–250 words.]

[Stem: Based on the texts, how would the author of Text 2 most likely respond to…]
```

Rules:

- **Bold labels** `**Text 1**` and `**Text 2**`.
- **Blank line** between label and passage; blank line between passages.
- **Each text must have a separately citeable source** (per §10).
- **Text 2 must reference Text 1's claim** explicitly, not be a parallel passage on the same topic.

### 3.9 No HTML, no markdown leakage in passage content

The lint rejects:

- raw HTML tags in passage / stem / choices (`<u>`, `<em>`, `<sub>`, `<sup>`, `<br>`, `<p>`);
- HTML entities (`&amp;`, `&#x02019;`, `&aacute;`);
- markdown leakage from upstream tooling (`### `, `## ` inside passage prose);
- bare PDF artifacts (`​` zero-width characters, double spaces, unbalanced quotation marks).

Allowed markdown inside passage / stem content:
- `*Title*` for italics on work titles;
- `__text__` for underlined sentences (rendered as underline);
- bold (`**text**`) only in `**Text 1**` / `**Text 2**` labels and (where a SEC item asks the student to identify a specific phrase) inside the stem to set off the relevant phrase. Bold is NOT used inside passage prose for emphasis.

### 3.10 Numbers and dates

- **Years:** plain digits (`1968`, `2020`, `1929`).
- **Decades:** plain digits + apostrophe-s (`1980s`, `1930s`). Avoid `'80s` (informal).
- **Numerals vs words for counts:** follow CB usage — small whole counts in body prose use words (`three`, `seven`, `twelve`), large counts use digits (`164 bioswales`, `4,500 years old`).
- **Currency, units:** plain text (`$24,000`, `74,000 cubic kilometers`, `5 cm`). No LaTeX.
- **Percentages:** `25 percent` in literary register, `25%` in scientific register; follow the source.

### 3.11 Forbidden patterns (the lint rejects)

- HTML tags in any field.
- HTML entities in any field.
- MathSpeak residue (`StartFraction`, `Superscript`) — same artifact as Math; should never appear in R&W content.
- Triple-or-more newlines (`\n\n\n+`).
- Trailing whitespace on any line.
- Smart-curly mismatches (`"…'`).
- Stacked transitions in any choice (`In fact, similarly,`).
- Underscore strings of 9+ consecutive underscores in passage / stem (`_________`).
- Any choice text containing only whitespace.
- Any choice text identical to another choice text in the same item.

---

---

## 4. Difficulty calibration (E/M/H by skill)

The CB digital R&W test, like Math, is adaptive: Module 1 is mixed-difficulty (5E / 9M / 8H) and Module 2 is sorted hard or easy depending on Module 1 performance. Within a difficulty bucket, items span 2–3 score bands (1–7 scale, paralleling Math).

The score-band → bucket table (mirrors `docs/CB_AUTHENTICITY_RUBRIC.md` §4):

| score_band | difficulty bucket | what it feels like for R&W |
|---|---|---|
| 1 | easy | direct comprehension question with one obvious answer; minimal inference |
| 2 | easy | comprehension with a tiny reframing; choices are clearly differentiated |
| 3 | easy | passage that requires a single inference step or a vocabulary distinction at college register |
| 4 | medium | passage requiring synthesis of two-or-more sentences; one near-synonym in choices |
| 5 | medium | passage requiring scope-shift judgment (the right answer is at a specific level of generalization, not the headline) |
| 6 | hard | passage with implicit logical structure; sufficient-vs-necessary distinction |
| 7 | hard | passage with two valid-looking inferences; correct answer requires identifying the precise semantic / structural cue |

The recalibration target is **top-of-band**: easy items at band 3, medium items at band 5, hard items at band 7. An easy R&W item should never feel like band 1 — it should always require a small inferential or vocabulary step beyond surface reading.

The five rating dimensions used in calibration set rating (mirrored from `docs/calibration_set/methodology.md` §1) are reused:

- **Stem clarity** — does the question read crisply?
- **Distractor quality** — do distractors map to misconceptions?
- **Notation polish** — formatting and convention compliance (§3 instead of LaTeX).
- **Difficulty calibration** — does the item feel like its claimed band?
- **Overall CB-grade** — would this fit unobtrusively in PT 4–11?

The headline number is Overall CB-grade. The exit gate is **≥80% of revised PerformSAT R&W items rated ≥4 with ≤0.5-point average gap to CB R&W items.**

### 4.1 words-in-context — band E/M/H markers

| Band | Markers |
|---|---|
| **Easy (band 3)** | Choices are 4 distinct words by denotation; correct word is college-register but not rare; passage gives a clear context cue (a synonym or example phrase 1–2 sentences before the blank). |
| **Medium (band 5)** | Choices are 4 near-synonyms differing by connotation (formal / informal, intensive / mild). Passage cue is implicit; student must read the surrounding two sentences. |
| **Hard (band 7)** | Choices include a multi-word collocation correct answer (e.g., `manifest in`, `sympathetic to`, `at odds with`). Two distractors are plausible polysemous matches. |

### 4.2 text-structure-and-purpose — band E/M/H markers

| Band | Markers |
|---|---|
| **Easy (band 3)** | Single-paragraph 100-word passage with a thesis sentence; choices are scoped at one level of abstraction. |
| **Medium (band 5)** | 200-word passage with embedded examples; the function-of-sentence question requires distinguishing whether the sentence states a generalization or provides an example. |
| **Hard (band 7)** | 300-word multi-paragraph science / argument passage with a hypothesis-and-test arc; the overall-structure choice is multi-clause and technically precise. |

### 4.3 cross-text-connections — band E/M/H markers

| Band | Markers |
|---|---|
| **Easy (band 3)** | Texts hold opposing positions stated explicitly in opening or closing sentences. |
| **Medium (band 5)** | Text 2 partially agrees / partially disagrees; the disagreement is at a specific scope. |
| **Hard (band 7)** | Text 2 reframes Text 1's claim (introduces a different framing, scope, or methodology); the correct answer captures the reframing. |

### 4.4 central-ideas-and-details — band E/M/H markers

| Band | Markers |
|---|---|
| **Easy (band 3)** | Main idea is the explicit topic sentence; sub-claims are clearly subordinate. |
| **Medium (band 5)** | Main idea must be inferred across multiple sentences; choices vary in scope. |
| **Hard (band 7)** | Passage has an apparent claim and a refinement; main idea is the refined claim, not the headline. |

### 4.5 inferences — band E/M/H markers

| Band | Markers |
|---|---|
| **Easy (band 3)** | Single-premise inference; one choice unsupported, one too strong, one off-topic. |
| **Medium (band 5)** | Two-premise inference; choices test scope. |
| **Hard (band 7)** | Sufficient-vs-necessary inference; one wrong choice would be _consistent_ with the passage but not _licensed_ by it. |

### 4.6 command-of-evidence-textual — band E/M/H markers

| Band | Markers |
|---|---|
| **Easy (band 3)** | One choice clearly supports; three are clearly off-topic. |
| **Medium (band 5)** | All four choices are topically related; one supports the claim directly, others tangentially. |
| **Hard (band 7)** | All four choices are plausibly supportive; only one matches the **specific** scope of the claim. |

### 4.7 command-of-evidence-quantitative — band E/M/H markers

| Band | Markers |
|---|---|
| **Easy (band 3)** | One row of the table unambiguously supports the claim. |
| **Medium (band 5)** | Answer requires comparison across two rows / columns; a wrong choice has the right row but wrong direction. |
| **Hard (band 7)** | Answer requires identifying the data point that supports the **specific scope** of the claim (largest decrease, not largest absolute value); distractors include true-but-irrelevant data points. |

### 4.8 boundaries (SEC) — band E/M/H markers

| Band | Markers |
|---|---|
| **Easy (band 3)** | Comma vs semicolon between two short independent clauses; one obvious comma splice in the choices. |
| **Medium (band 5)** | Semicolon-series with internal commas; or paired-dash insertion. |
| **Hard (band 7)** | Boundary-plus-conjunctive-adverb (`single-handedly; however,` vs. `single-handedly, however;` vs. `single-handedly, however,`). |

### 4.9 form-structure-and-sense (SEC) — band E/M/H markers

| Band | Markers |
|---|---|
| **Easy (band 3)** | Plural subject + intervening singular modifier; choices test number agreement only. |
| **Medium (band 5)** | Past perfect vs simple past with sequence cue ("by the time…had…"). |
| **Hard (band 7)** | Dangling-modifier correction with three plausible openings; correct opening matches the subject of the main clause. |

### 4.10 transitions — band E/M/H markers

| Band | Markers |
|---|---|
| **Easy (band 3)** | Clear contrast vs continuation; only one choice fits the logical relation. |
| **Medium (band 5)** | Two contrast options or two addition options; precise relation must be identified. |
| **Hard (band 7)** | Four logically distinct connectors where the correct one is signaled by a single word in the passage (e.g., a temporal cue selecting `Today,` over `Therefore,`). |

### 4.11 rhetorical-synthesis — band E/M/H markers

| Band | Markers |
|---|---|
| **Easy (band 3)** | Goal asks for a simple description; one choice clearly serves the goal. |
| **Medium (band 5)** | Goal asks for a comparison or emphasis; some choices serve the goal partially. |
| **Hard (band 7)** | Goal demands a specific rhetorical move (e.g., "emphasize a difference"); distractors are goal-mismatched (they restate facts but don't accomplish the goal). |

### 4.12 Module 2 Easy — calibration to Bluebook PT 4–11

Per repository memory `feedback_module2_hard_calibration.md`, the R&W Module 2 Easy form must follow the same gradual ramp model as Math Module 2 (calibrate to Bluebook Module 2 with a gentler warm-up). For R&W, this means:

- Module 2 Easy positions 1–4: bands 1–2 (warm-up).
- Positions 5–9: band 3 (top-of-easy).
- Positions 10–17: bands 4–5 (medium).
- Positions 18–22: band 5–6 (upper-medium).

Module 2 Hard mirrors PT4–11 sorted hard form: bands 4 → 5 → 5 → 6 → 6 → 7 ramp.

### 4.13 Module flow constraint (per `feedback_rw_module_flow.md`)

For both modules, the order of skills must mirror PT 4–11. The recurring CB R&W module flow:

- Module 1 / Module 2: words-in-context items appear early (positions 1–3), comprehension items mid (positions 4–17), Standard English Conventions in the run beginning around position 18, transitions and rhetorical-synthesis at the end.
- Notes-format rhetorical-synthesis items always appear LAST in each module (positions 26–33).
- Within the SEC run, boundaries and form-structure-and-sense alternate (not grouped); cross-text-connections items are not adjacent.

Lint check `m2-rw-skill-flow` enforces this (§8).

---

---

## 5. Explanation pattern + R&W Pattern Registry

R&W explanations follow the same `**SAT Pattern: ...**` then `**Choice X is correct.**` archetype as Math (per `docs/CB_AUTHENTICITY_RUBRIC.md` §5), but the body of the explanation is structured around **textual evidence** rather than algebraic steps.

### 5.1 Required structure

```
**SAT Pattern: <name from registry>**

**Choice X is correct.**

**The Fast Way (~Ns):** <one-line shortcut citing the load-bearing word, phrase, or
relationship in the passage, with rough timing>

**The Full Solution:**
<step-by-step reasoning>
- Step 1: identify the load-bearing cue in the passage (the sentence, phrase, or
  word that determines the answer).
- Step 2: explain how that cue maps to the correct choice's claim.
- Step 3: confirm by ruling in the correct choice's wording against the passage.

**Why the wrong answers are tempting:**
* Choice A: <misconception name + which passage feature this distractor surfaces>
* Choice B: <misconception name + …>
* Choice C: <misconception name + …>
* (Skip the correct choice in this list.)

**Test Day Takeaway:** <one-sentence rule the student should memorize>
```

The **Why the wrong answers are tempting** block is **mandatory** and must explicitly name each misconception per the slot inventory in §2.2. An explanation that says "Choice A is incorrect" without a derivation fails this rubric.

### 5.2 Pattern-name registry

R&W explanations must use a pattern name from this registry. If a needed pattern is not in this list, add it in the same PR rather than coining a new name ad-hoc.

#### words-in-context patterns

- Tier-2 Vocabulary in Context
- Verb Connotation in Context
- Adjective Register in Context
- Multi-word Collocation in Context
- Polysemous Word Disambiguation
- Field-Specific Term in Context (scientific / technical)

#### text-structure-and-purpose patterns

- Main Purpose Identification
- Function-of-Underlined-Sentence
- Overall Structure Description
- "What is happening" Description (literary)
- Sentence-as-Generalization vs Sentence-as-Example
- Sentence-as-Hypothesis vs Sentence-as-Finding

#### cross-text-connections patterns

- Author 2 Partial Agreement
- Author 2 Reframing
- Author 2 Methodological Critique
- Author 2 Scope Challenge
- Two-Author Convergence
- Two-Text Disagreement on Sufficient Conditions

#### central-ideas-and-details patterns

- Main Idea Identification
- Detail Recall (direct factual question)
- Refined Claim vs Headline Claim
- Generalization vs Sub-claim Identification

#### inferences patterns

- Premise-Licensed Inference
- Sufficient-vs-Necessary Inference
- Scope-Bounded Inference
- Quantifier-Cued Inference (some / all / most)

#### command-of-evidence-textual patterns

- Direct-Support Quotation Selection
- Direct-Support Finding Selection
- Scope-Matched Evidence
- Weakening vs Supporting Evidence

#### command-of-evidence-quantitative patterns

- Table-Cell Citation
- Cross-Row Comparison
- Specific-Scope Data Citation (largest decrease, smallest range, median value)
- Trend-Cited from Table or Graph

#### boundaries (SEC) patterns

- Independent-Clause Boundary (period / semicolon / comma + conjunction)
- Comma-Splice Repair
- Semicolon-Series with Internal Commas
- Paired-Dash Insertion
- Paired-Comma Insertion (nonrestrictive clause)
- Restrictive vs Nonrestrictive Clause
- Boundary-Plus-Conjunctive-Adverb (`however`, `therefore`, `nevertheless`)

#### form-structure-and-sense (SEC) patterns

- Subject-Verb Agreement (with intervening modifier)
- Subject-Verb Agreement (inverted subject)
- Subject-Verb Agreement (collective noun / "each" / "none")
- Pronoun-Antecedent Agreement (number)
- Pronoun-Antecedent Agreement (case)
- Verb Tense Sequence (past perfect vs simple past)
- Verb Tense Choice (simple past for completed historical event)
- Dangling-Modifier Correction
- Parallel Structure across Coordinated List
- Possessive vs Plural

#### transitions patterns

- Contrast Transition
- Continuation Transition
- Causal Transition
- Temporal Transition
- Concessive Transition
- Specification (`for example`, `for instance`)
- Restatement (`in other words`)
- Conclusion (`as a result`, `consequently`, `therefore`)

#### rhetorical-synthesis patterns

- Goal: Emphasize a Difference
- Goal: Emphasize a Similarity
- Goal: Describe Subject to Unfamiliar Audience
- Goal: Present Researcher's Findings
- Goal: Highlight a Point of Disagreement
- Goal: Make a Generalization
- Goal: Compare Two Subjects
- Goal: Emphasize Significance
- Goal: Correct a Common Misconception
- Goal: Contextualize Findings within a Field
- Goal: Introduce a Concept

### 5.3 Worked explanation example (PT4 Q26 boundaries)

> **SAT Pattern: Semicolon-Series with Internal Commas**
>
> **Choice B is correct.**
>
> **The Fast Way (~30s):** Spot the existing semicolon before `and educating the public…` later in the sentence. The list has internal commas (`both native and nonnative`), so every separator between list items must be a semicolon — not a comma.
>
> **The Full Solution:**
>
> - The sentence presents a three-item list of activities the gardens are dedicated to: (1) growing diverse plant species, both native and nonnative; (2) fostering scientific research; (3) educating the public about plant conservation.
> - Items (2) and (3) are already separated from each other and from item (1) by a semicolon (`fostering scientific research; and educating the public…`), so the separator after item (1) must also be a semicolon.
> - Within item (1), the appositive "both native and nonnative" needs a comma before it (`species, both native and nonnative`).
> - Combining: `species, both native and nonnative;` — choice B.
>
> **Why the wrong answers are tempting:**
>
> * Choice A: **Surface match** — uses commas throughout, treating the list as if its items had no internal punctuation. Misses the existing semicolon as the cue.
> * Choice C: **Inverse** — places the semicolon between `species` and `both`, treating `species` as the end of an item and `both native and nonnative` as the start of the next. The internal comma rule applies the other way.
> * Choice D: **Scope shift** — drops the internal comma entirely, reading `both native and nonnative` as a restrictive (essential) modifier. CB treats this kind of appended descriptive phrase as nonrestrictive (set off by commas).
>
> **Test Day Takeaway:** when a list item contains an internal comma, every separator between list items must be a semicolon.

### 5.4 Pattern-name lint

`scripts/validateRWBank.mjs` enforces:

- Every explanation begins with `**SAT Pattern: ...**`.
- The named pattern appears in the registry above.
- The `**Choice X is correct.**` line follows immediately.
- A `Why the wrong answers are tempting` section is present.
- Each non-correct choice has a misconception name from §2.2.
- A `Test Day Takeaway:` line is present.

---

---

## 6. Worked side-by-side examples

Each pair shows a real PT 4–11 R&W item next to a "this is what we would write" PerformSAT version that applies the same skill at the same band. The CB items are paraphrased verbatim from `docs/CB_RW_AUTHENTICITY_REFERENCE.md` and `scripts/generated/pdf-text/sat-practice-test-{4..11}-digital.txt`.

### Pair A — words-in-context (medium, band 5)

| Real CB item (PT5 Q3, `CB_RW_AUTHENTICITY_REFERENCE.md` §3.1) | PerformSAT-style version |
|---|---|
| _K.D. Leka and colleagues found that the Sun's corona provides an advance indication of solar flares — intense eruptions of electromagnetic radiation that emanate from active regions in the Sun's photosphere and can interfere with telecommunications on Earth. Preceding a flare, the corona temporarily exhibits increased brightness above the region where the flare is _______._ | _Atmospheric chemist Jean-Baptiste Pichon and colleagues observed that, in the days immediately preceding a winter ozone-depletion episode over the Arctic, polar stratospheric clouds — thin, iridescent veils of nitric-acid trihydrate ice — temporarily appeared at altitudes where the depletion was _______._ |
| Choices: A. antecedent · **B. impending** ✓ · C. innocuous · D. perpetual | Choices: A. inconsequential · B. concluded · **C. impending** ✓ · D. recurring |
| The cue word `Preceding` makes `impending` the correct fit. | Preserves the "preceding-and-imminent" cue with a different real-science context (Pichon is a real Arctic-stratospheric-chemistry researcher; ozone-depletion-PSC linkage is real). |

### Pair B — text-structure-and-purpose (medium, band 5)

| Real CB item (PT5 Q6, `CB_RW_AUTHENTICITY_REFERENCE.md` §3.2) | PerformSAT-style version |
|---|---|
| Passage on William H. Johnson's 1938 return to the US and stylistic transformation; the underlined sentence begins `Turning away from landscapes painted in an expressionist style…` | Passage on Loïs Mailou Jones's 1937–1938 Paris fellowship and the Caribbean-influenced shift in her work after returning to Howard University; the underlined sentence describes the textural and palette change between her Paris paintings and her later "Caribbean Suite" series. |
| Stem: `Which choice best describes the function of the underlined sentence in the text as a whole?` | Stem: `Which choice best describes the function of the underlined sentence in the text as a whole?` |
| Correct: `It elaborates on the previous sentence's statement about a transitional moment in Johnson's artistic career.` | Correct: `It elaborates on the previous sentence's claim that Jones's stylistic shift constituted a coherent rather than abrupt transition.` |
| Both items use a real artist's documented stylistic shift; both place the transitional sentence at the same structural position. The PerformSAT version uses Loïs Mailou Jones (real, NMAfA-collected, well-documented) instead of Johnson to avoid copying the CB passage. |

### Pair C — cross-text-connections (hard, band 6)

| Real CB item (canonical CB form, paraphrased from `RW_NON_SEC_SAMPLE_AUDIT.md` §3 PASS examples) | PerformSAT-style version |
|---|---|
| **Text 1**: passage from a Hardy critic's 1894 essay arguing that Hardy's regional fiction succeeds where the same writers' London-set novels fail because Hardy's Wessex landscapes provide "moral atmosphere." | **Text 1**: passage from Sandra Gilbert and Susan Gubar's _The Madwoman in the Attic_ (1979) on Charlotte Brontë's use of confined spaces. |
| **Text 2**: passage from a 2019 academic review of Hardy criticism, arguing that the "moral atmosphere" framing has been productive but underestimates Hardy's deliberate stylistic experimentation. | **Text 2**: passage from a 2018 essay by literary scholar Cora Kaplan partially agreeing with Gilbert and Gubar's reading of Brontë but arguing that confined-space imagery alone does not explain Brontë's narrative pacing. |
| Stem: `Based on the texts, how would the author of Text 2 most likely respond to the claim presented in Text 1?` | Stem: same canonical stem. |
| Correct answer captures the partial-agreement framing precisely. | Correct: a partial-agreement choice that acknowledges the interpretive value of the spatial reading but identifies pacing as a dimension Text 1 doesn't address. |
| Both items pair real, citable scholars; both use the partial-agreement-with-specific-scope hard-band frame. | The PerformSAT version uses Gilbert/Gubar and Cora Kaplan — both real scholars with citable publications (per §10 allowlists). |

### Pair D — central-ideas-and-details (medium, band 5)

| Real CB item (PT5 Q10, `CB_RW_AUTHENTICITY_REFERENCE.md` §2.2) | PerformSAT-style version |
|---|---|
| _Changes to vegetation cover and other human activities influence carbon and nitrogen levels in soil…hypothesizing…Okolo and colleagues sampled soils across multiple land-use types within several Ethiopian locations. They found, though, that across land-use types, carbon and nitrogen decreased to comparably low levels beyond depths of 30 cm._ | _Mycologist Toby Spribille and colleagues spent five field seasons sampling lichen communities across cedar-hemlock canopy in coastal British Columbia, hypothesizing that canopy-position and tree-species would jointly determine community composition. They found, however, that beyond about three meters from any canopy edge — regardless of tree species — community composition converged on a small set of dominant species._ |
| Stem: `Which choice best states the main idea of the text?` | Stem: `Which choice best states the main idea of the text?` |
| Correct: the Ethiopian sampling suggests influence does not extend below topsoil layer (refined claim, not headline). | Correct: Spribille's BC sampling suggests canopy-position effects on lichen community composition do not extend beyond the immediate canopy edge (refined claim). |
| Both items use the **refined-claim-vs-headline** hard-band-of-medium pattern. The PerformSAT version uses Toby Spribille — a real lichenologist with peer-reviewed publications (per §10). |

### Pair E — inferences (hard, band 7)

| Real CB item (paraphrased from PT 5 Q13 / Pliny the Younger inference) | PerformSAT-style version |
|---|---|
| Pliny the Younger's letters describing the Vesuvius eruption mention Misenum and the Gulf of Naples but say little about Herculaneum. From the bay's northern arc, smoke and ash blocked the southwest view; Pompeii and Herculaneum lay on the volcano's far side. The omission, then, suggests that Pliny ___________. | _The historian Procopius, writing about the climatic dust veil of 535–536 CE, described darkening of the sun and unseasonal cold across Constantinople and the eastern Mediterranean but said nothing about conditions in the Italian peninsula or in the Gallic provinces. Modern volcanic-deposition studies have located the likely source eruption near Iceland and modeled its primary atmospheric pathway as east-southeast across the Eurasian steppe. Procopius's silence about Italy and Gaul, then, suggests that ___________._ |
| Correct: he could not directly observe Herculaneum's destruction from his vantage point. | Correct: the dust-veil's effects on Italy and Gaul, however severe, would not have reached Procopius through the channels he was using to compile his account. |
| Both items use a sufficient-vs-necessary inference: the silence is licensed by a vantage / channel limit, not by the absence of the phenomenon. The PerformSAT version uses a real attested 6th-century historical event (the 535–536 dust veil is well-documented; the Icelandic-source hypothesis is a 2008 paper by Larsen & Newhall). |

### Pair F — command-of-evidence-textual (hard, band 7)

| Real CB item (paraphrased from PT 4 Q15, the Romeo and Juliet quartos textual problem) | PerformSAT-style version |
|---|---|
| Passage describes the 1597 and 1599 quartos of _Romeo and Juliet_ and the recent compositorial-study refinement of the memorial-reconstruction hypothesis. | Passage describes the 1604 and 1623 versions of Hamlet's "To be, or not to be" soliloquy and recent textual-bibliography work distinguishing scribal corrections from compositorial setting choices. |
| Stem: `Which finding from a recent compositorial study, if true, would most directly support the hypothesis presented in the underlined sentence?` | Stem: same canonical stem. |
| Correct answer cites a specific scene-by-scene divergence pattern that licenses the memorial reconstruction hypothesis at scope. | Correct answer cites a specific finding from textual studies that distinguishes scribal from compositorial features. |
| Both items use a real Shakespearean textual problem with documented scholarship. The PerformSAT version uses Hamlet's Q1/Q2/F textual problem — equally real, equally documented (Wells & Taylor 1986). |

### Pair G — command-of-evidence-quantitative (medium, band 5)

| Real CB item (paraphrased from PT 4 Q14) | PerformSAT-style version |
|---|---|
| Passage on a researcher's claim about classroom reading routines; table shows reading-minutes-per-day across three school sites with one near-tie. | Passage on a researcher's claim about residential energy-efficiency program participation; table shows program-participation rates across four utility districts with one near-tie. |
| Stem: `Which choice most effectively uses data from the table to complete the example?` | Stem: same canonical stem. |
| Table values include a near-tie that forces interpretation; correct choice cites the row that supports the specific scope of the claim. | Same — the PerformSAT version's table has a 67% / 65% near-tie on two of four districts, forcing students to read the claim's scope. |
| Real CB tables include noise / near-ties; the PerformSAT version preserves this (contrast §7 anti-pattern F11 about artificially clean signals). |

### Pair H — boundaries (medium, band 5)

| Real CB item (PT4 Q26 verbatim, `CB_RW_AUTHENTICITY_REFERENCE.md` §1.4) | PerformSAT-style version |
|---|---|
| Botanical gardens in Norway and Brazil dedicated to plant species (semicolon-series). | Conservation programs in Patagonia and East Africa dedicated to a three-part mission (semicolon-series). |
| Choices: comma vs semicolon variants. | Choices: same set, different topic. |
| Both anchor on real institutions; both test the semicolon-series rule with internal commas. The PerformSAT version uses a real Patagonian conservation program (Tompkins Conservation) and a real East African institution (the Kenya Wildlife Service's Tsavo program), per §10. |

### Pair I — form-structure-and-sense (hard, band 7)

| Real CB item (PT4 Q24 dangling-modifier, `CB_RW_AUTHENTICITY_REFERENCE.md` §1.8) | PerformSAT-style version |
|---|---|
| Passage on Percy Julian's 1935 synthesis of physostigmine; opening modifier `Named in 1999 as one of the greatest achievements by a US chemist…`; question asks for the right main-clause subject. | Passage on Marie Tharp's 1957 publication of the Mid-Atlantic Ridge bathymetric map; opening modifier `Recognized in 1997 as one of the most consequential maps of the twentieth century…`; question asks for the right main-clause subject. |
| Correct subject is `Julian synthesized…` — matches the named achievement. | Correct subject is `Tharp's 1957 chart…` — matches the named recognition. |
| Both anchor on real, documented historical figures; both use the dangling-modifier-correction pattern. |

### Pair J — transitions (medium, band 5)

| Real CB item (PT4 Q28 verbatim, `CB_RW_AUTHENTICITY_REFERENCE.md` §1.9) | PerformSAT-style version |
|---|---|
| Passage on Mauna Loa's volume vs Pūhāhonu's larger volume per Garcia 2020. | Passage on the Sahara's long-assumed status as Earth's largest hot desert vs the recent Antarctic-classification argument that the Antarctic Plateau qualifies. |
| Choices: `Secondly,` / `Consequently,` / `Moreover,` / **`However,`** ✓ | Choices: `Secondly,` / `Therefore,` / `Additionally,` / **`However,`** ✓ |
| Both test contrast transition with one logically distinct correct answer. The PerformSAT version uses a real ongoing geographical reclassification debate (Antarctic-as-cold-desert is well-documented). |

### Pair K — rhetorical-synthesis (medium, band 5)

| Real CB item (PT4 Q31 verbatim, `CB_RW_AUTHENTICITY_REFERENCE.md` §3.3) | PerformSAT-style version |
|---|---|
| Notes on baking soda vs baking powder chemical leavening agents; goal: emphasize a difference. | Notes on flux-cored vs stick (SMAW) welding methods; goal: emphasize a difference. |
| Correct synthesizes the key chemical-difference notes (acidic-ingredient requirement). | Correct synthesizes the key process-difference notes (shielding-mechanism requirement). |
| Both use the `emphasize a difference between X and Y` goal verb. The PerformSAT version uses real welding-process facts from AWS technical references (per §10). |

---

---

## 7. Common drift modes (anti-patterns)

These are the failure modes from the SEC and non-SEC R&W audits (`docs/RW_SEC_AUDIT.md`, `docs/RW_NON_SEC_SAMPLE_AUDIT.md`). Each must be enforced — most via lint (§8), some via manual review using the per-item file:line references below.

### F1. Templated cross-test parallel passages

**Description:** the same passage skeleton appears in two-or-more tests with only proper nouns and content words swapped. CB never reuses skeletons across forms — every CB R&W item is a one-off. Even a defensible-in-isolation passage fails the bank if its skeleton recurs.

**File:line examples:**

- `practiceTest1RW.js:374` (Inez Park / NWS / 1972 / "third woman to be appointed to a forecasting role") and its twin `practiceTest2RW.js:374` (Maya Khoury / city's transit authority / 1981 / "first woman to lead a signaling-systems team").
- `practiceTest1RW.js:446` (Aiyana Standing Bear / soil scientist / "underground biomass of native grasses") and its twin `practiceTest2RW.js:446` (Kalinda Brave Bull / soil ecologist / "tallgrass prairie root systems").
- `practiceTest1RW.js:927` (poet Reza Ahmadi / "self-imposed silence" / 1979–1985) and its twin `practiceTest2RW.js:927` (architect Yusuf Adisa / "refusing all major commissions" / 1989–1994).
- `practiceTest1RW.js:999` (engineer Tomás Reyna / "public footbridges that emphasize visible steelwork") and its twin `practiceTest2RW.js:999` (Akira Tanaka / "pedestrian footbridges that emphasize exposed timber joinery").

**Why non-CB:** CB R&W is a one-off authoring practice — every passage is written for its specific item and has no twin. Templated cross-test cloning is the **most pervasive structural defect** in the current PerformSAT R&W bank (`RW_SEC_AUDIT.md` §F1 calls this the dominant defect, affecting ~30 questions across Tests 1–2 and the M1/M2 doublets in Tests 3–12).

**How to avoid:** treat each item as bespoke. Do not write a passage skeleton that could be substituted with another subject. Lint check `cross-test-passage-uniqueness` (§8) computes pairwise passage similarity and rejects any item whose passage has Jaccard ≥ 0.40 OR a shared 12-token opening with another item.

### F2. Invented "first/third/only X to do Y" credentials

**Description:** a biographical passage anchored on a fabricated "first / third / only woman to [achievement] in [year] at [agency]" credential. CB's biographical passages are anchored on **real, verifiable** figures with documented credentials.

**File:line examples:**

- `practiceTest1RW.js:374` "Inez Park…the third woman in the agency's history to be appointed to a forecasting role" — fabricated.
- `practiceTest2RW.js:374` "Maya Khoury…the first woman to lead a signaling-systems team in the city's transit authority in 1981" — fabricated.
- (Similar pattern in 5+ items across Tests 1, 2, 9, 10, 12.)

**Why non-CB:** CB anchors biographical items on real people: Vanessa Galvez (PT4 Q24), Etel Adnan (PT4 Q22), Marie Watt (PT4 Q23), Louise Bennett (PT6 Q20), Lê Lương Minh (PT4 Q19), Percy Julian (PT4 Q24), Norma Sklarek (real architect, US Embassy Tokyo 1976). The "first/third/only X to do Y" credential framing as a fabrication tell is itself a giveaway.

**How to avoid:** every biographical passage must cite a real person verifiable through one of the §10 source allowlists. Lint check `entity-registry-validation` (§8) rejects items whose researcher / biographical anchor is not in the appropriate allowlist.

### F3. Literary biography fiction style

**Description:** passages written in romanticized novelistic register about a poet, composer, or artist's "self-imposed silence," "refusal of commissions," or "abandonment of orchestral suites for chamber works." CB strictly avoids this register in expository passages.

**File:line examples:**

- `practiceTest1RW.js:927` "The poet Reza Ahmadi spent the years 1979 to 1985 in self-imposed silence; during this period he wrote no new verse but kept extensive journals describing the work he could not yet make."
- `practiceTest2RW.js:927` "The architect Yusuf Adisa spent the years 1989 to 1994 refusing all major commissions…produced no built work but kept extensive sketchbooks describing the buildings he could not yet make."
- (Similar register in `practiceTest{N}RW.js:1017` items: "Lillian Strake whose 1962 letter to her former teacher describes the moment she abandoned orchestral suites for chamber works…")

**Why non-CB:** "the work he could not yet make" / "the buildings he could not yet make" is novelistic. CB writes neutral expository sentences anchored on documented sabbaticals, career shifts, and published profile material — not interior states.

**How to avoid:** expository passages about artists / scholars must describe **documented external events**, not interior states. The "spent the years X to Y in [poetic abstraction]" sentence pattern is forbidden.

### F4. Skills not in the CB SEC menu

**Description:** SEC items testing a skill CB does not test as a standalone SEC subdomain.

**File:line examples:**

- `practiceTest6RW.js:428` (Test 6 M1 Q21) and `practiceTest6RW.js:981` (Test 6 M2 Q21): comparative vs. superlative as a standalone SEC skill (`more comprehensive` vs `most comprehensive` vs `more comprehensiver` vs `comprehensivest`).
- `practiceTest12RW.js` Test 12 Q20 M1+M2: relative-pronoun choice "with which" vs "which" — borderline; CB-defensible but at low CB SEC frequency.
- `practiceTest8RW.js:992` (Test 8 M2 Q22): nonrestrictive-clause comma after a 30-word interrupting clause crossing a `, and` — overly tangled construction.

**Why non-CB:** CB's SEC subdomain inventory is well-defined (`CB_RW_AUTHENTICITY_REFERENCE.md` §1.1–1.9): subject-verb agreement, pronoun agreement, verb tense, comma usage, semicolons / colons / dashes, possessives, sentence boundaries, parentheticals, transitions. Comparative / superlative as a standalone test is not in the menu.

**How to avoid:** the SEC skill list per item must be one of `boundaries` or `form-structure-and-sense`, and the specific subdomain must be one of the documented CB subdomains. Lint check `sec-skill-in-menu` (§8) rejects items outside the menu.

### F5. Malformed distractor choices (non-words)

**Description:** SEC distractors that are not English words.

**File:line examples (all are smoking guns):**

- `practiceTest6RW.js:428` "more comprehensiver", "comprehensivest" — non-words.
- `practiceTest6RW.js:981` "more detaileder", "detailedest" — non-words.
- `practiceTest5RW.js:374` "complexs" — impossible plural.
- `practiceTest5RW.js:927` "valleys's" — double-possessive non-word.
- `practiceTest8RW.js:423` "Library's'", "Librarys" — apostrophe-s-apostrophe is impossible.
- `practiceTest8RW.js:974` "the National Museum of Denmark's'" — same impossible-construct.
- `practiceTest6RW.js:1017` "whom's", "which's" — non-words.
- `practiceTest12RW.js:444` paired-dash distractor `(` — unmatched opening parenthesis as closing punctuation.

**Why non-CB:** CB never uses a non-word as a distractor. Even apostrophe-misuse questions use plausible student-error forms. CB's distractor design rule is that every wrong answer is something an actual student would write.

**How to avoid:** distractor word-validation lint (§8 `distractor-word-validation`) checks each choice's tokens against a dictionary, plus a curated non-word denylist (`comprehensiver`, `complexs`, `Library's'`, `whom's`, `which's`, etc.). Items with non-word distractors fail the lint.

### F6. Fabricated researchers, scholars, and critics

**Description:** items that introduce a researcher or critic by **bare surname only** (no first name, no descriptor, no real-world counterpart) or with an oddly specific credential not verifiable in published literature.

**File:line examples:**

- `practiceTest9RW.js:410` (Test 9 M1 Q20): "Camps studies short-term-rental displacement across European cities" — bare surname, no first name, no descriptor.
- `practiceTest9RW.js:963` (Test 9 M2 Q20): "Eze studies nineteenth-century European travel writing about West Africa" — same problem.
- `practiceTest{1,2}RW.js:446` (Aiyana Standing Bear / Kalinda Brave Bull): fabricated Indigenous-coded names with generic claims.
- `practiceTest11RW.js:963` (Test 11 M2 Q20): _Pristimantis hagensii_ — fabricated Linnaean binomial; CB does not invent species names.
- `practiceTest5RW.js` Tests 5 M2 Q22, Q23: "Tomás Quintero's 2022 Lyon textile-mill reuse study"; "Léa Caron's Marseille municipal archive residency" — researcher names CB-style diverse but unverifiable.
- `practiceTest12RW.js:1013` (Test 12 M2 Q23): Margaret Wabasha / Ojibwe birchbark scroll specialist — fabricated person, fabricated 2007 export contract.
- "Pétursson's geolocator data, which were collected from two hundred individual puffins across three breeding seasons" — over-specific fabricated dataset.

**Why non-CB:** CB always introduces a researcher with **first name + last name + descriptor** on first mention. CB does not invent species names, programs, datasets, or dates. CB anchors on Vanessa Galvez, Daniella DellaGiustina, K.D. Leka, Stuart Bartlett and Michael L. Wong, Lani Tsinnajinnie, Chukwuebuka Okolo — all real, citable researchers (`RW_SEC_AUDIT.md` §F6 explicitly cites this rule).

**How to avoid:** every researcher / critic / scholar named in a passage must be in `scripts/generated/rwSources/researchers.json` (per §10). Bare-surname introductions fail the lint. Fabricated species names fail the lint.

### F7. Fabricated literary works

**Description:** items that quote from or reference a non-existent novel, play, or short story.

**File:line examples:**

- `practiceTest3RW.js` Test 3 M1 Q15: cites "the 1936 novel _The Glass Tide_ by Welsh writer Olwen Tregaron" — both the novel and the writer are fabricated.
- `practiceTest8RW.js` Test 8 M2 Q15: cites "_La Pastorella di Volterra_" with two fabricated scribes — fabricated Tuscan-dialect drama.
- All 24 literary excerpts at `practiceTest{1..12}RW.js:103-117` and `…:927-947` (Module 1 and Module 2 Q5 across all 12 tests) attribute literary excerpts to fabricated contemporary short-story authors with fabricated titles. Titles like "The Loom Room" appear in three different tests (4, 9, 10) attributed to three different fabricated authors. (`RW_NON_SEC_SAMPLE_AUDIT.md` §2 enumerates all 24.)

**Why non-CB:** all CB R&W literary excerpts come from real public-domain authors (`CB_RW_AUTHENTICITY_REFERENCE.md` §5.1 lists Susan Glaspell, Walt Whitman, Angelina Weld Grimké, Ann Petry, James Baldwin, Charlotte Perkins Gilman, Katherine Mansfield, Anton Chekhov, Jerome K. Jerome, Marianne Moore, etc.). CB never quotes from a fabricated novel. When CB references a specific named work, that work is real.

**How to avoid:** every literary work referenced (novel, play, short story, poem, lecture, essay) must be in `scripts/generated/rwSources/literaryWorks.json` (per §10). The lint rejects items whose cited literary work is not in the allowlist.

### F8. Within-test transition cloning

**Description:** Module 1 and Module 2 transition items in the same test using identical opening words, identical closing phrases, the same answer choices, and the same correct answer.

**File:line examples:**

- `practiceTest8RW.js` Test 8 M1 Q24 and M2 Q24: both begin "Most accounts of the early [career / period] of [X] emphasize the dramatic [Y]…"; both have identical closing phrase "a pattern that the [Z] narrative obscures"; both use the same four choices `For example,` / `Therefore,` / `However,` / `Similarly,`; both have correct answer `However,`.
- `practiceTest8RW.js` Test 8 M1 Q25 and M2 Q25: same trick (botanist Hae-Won Lim / marine geologist Mateusz Kowalczyk).
- `practiceTest9RW.js` Test 9 M1 + M2 transitions about Yakut-horse / marine-iguana cold tolerance with identical "the original [biologists] were not entirely wrong" + "the [year] metabolic study shows that those factors alone do not account for the full effect" construction.

**Why non-CB:** one author writing two distinct transitions for the same test would not produce that twinning by accident. CB Module 1 and Module 2 are independent forms.

**How to avoid:** lint check `within-test-passage-cloning` (§8) detects passages with shared 12-token openings or ≥0.40 Jaccard between Module 1 and Module 2 of the same test.

### F9. Cross-text "sympathetic to the goals" template cloning

**Description:** the cross-text-connections M1 Q6 in 11 of 12 tests follows the identical template:

```
Text 2: [Discipline] researcher [Name] is sympathetic to the goals of [movement] but
cautions that '[buzzword]' alone is not the same as [equity goal]. [Her/His] studies of
[region] show that without [policy], [bad outcome]. Without [protection], she/he argues,
the model risks recreating exactly the [problem] it was meant to dissolve.

Choices:
A. By rejecting the [benefits] as overstated.
B. By acknowledging the benefits but warning that achieving [goal] depends on [policy]
   choices the researchers do not address.   ← correct in every test
C. By arguing that [movement] is technically impossible to scale.
D. By insisting that the model has already been disproven by the [region] record.
```

Choice B is correct in **every single instance** across the bank. Students who notice the template can answer correctly without reading either passage.

**File:line examples:** 11 of 12 tests' M1 Q6 cross-text items, plus several M2 Q6 items. (`RW_NON_SEC_SAMPLE_AUDIT.md` §3 documents this.)

**Why non-CB:** this is the most damaging template in the bank. CB cross-text questions vary in disagreement type — some scholars partially agree, others reject, others propose orthogonal questions, others argue the framing is misplaced. Real CB cross-text correct answers are not always one specific structural template.

**How to avoid:** cross-text passages and choices must be authored bespoke. Lint check `cross-text-template-detection` (§8) computes structural-distance between cross-text choices across items and rejects items whose A/C/D distractors are within Jaccard 0.50 of another item's A/C/D distractors (after topic-noun normalization).

### F10. Cross-text Q7 "generational reading habit" template

**Description:** the cross-text M1 Q7 (the harder cross-text item) in 8+ tests uses the parallel template: Text 1 is an author's lecture or essay arguing that the strongest [endings/openings/transitions] are those readers don't consciously notice; Text 2 is a critic re-reading the author's [novel/symphony/painting] and noting that contemporary [readers/critics] complained the [chapter/movement/panel] felt arbitrary, with the critic concluding this reveals "a generational [reading/listening/viewing] habit."

**File:line examples:** Tests 1, 2, 3, 4, 5, 8, 10, 11 — at least one CTC question per test follows this exact template (`RW_NON_SEC_SAMPLE_AUDIT.md` §3). Correct answer is choice B in every instance.

**Why non-CB:** this is a second-order template under F9. Real CB cross-text relationships vary across items (rejection, partial agreement, methodological critique, scope challenge, application to a different domain). Template cloning makes correct answers predictable from form alone.

**How to avoid:** the cross-text-template-detection lint catches this jointly with F9.

### F11. Quantitative tables with artificially clean signals

**Description:** quantitative-evidence tables with monotone differences and no noise / variance — letting students pick the correct row by reading the largest absolute value or the most-extreme entry.

**File:line examples:**

- `practiceTest3RW.js` Test 3 Q14: differences `+4.4, +3.5, +3.5, +3.5` — three identical residuals.
- `practiceTest1RW.js` Test 1 Q16: site changes `+11, +12, +11, +11`.
- `practiceTest8RW.js` Test 8 Q14: stand-age values `12, 31, 47, 92` — monotone with no noise.

**Why non-CB:** real CB data tables can be monotone but typically have **some variance** or **one near-tie** that forces interpretation. PerformSAT tables let the answer be picked off the highest / lowest row without effort. (`RW_NON_SEC_SAMPLE_AUDIT.md` §7.)

**How to avoid:** lint check `quantitative-table-variance` (§8) computes the variance of the relevant column and the gap between the largest and second-largest values; tables with a perfectly-monotone signal (zero residual variance) or a max-to-second-largest gap > 2× the second-to-third-largest gap fail.

### F12. Two-skills-tested-at-once (SEC)

**Description:** a single SEC item where the four answer choices vary in two-or-more dimensions (e.g., verb tense AND punctuation; agreement AND a stray semicolon).

**File:line examples:**

- `practiceTest4RW.js` Test 4 Q18 M1: choice D `represented;` tests both verb tense AND a stray semicolon.
- `practiceTest4RW.js` Test 4 Q18 M2: same problem with `expand;`.
- `practiceTest8RW.js` Test 8 Q22 M1+M2: `years argues / years, argues / years; argues / years, argues,` — different in punctuation AND varies the agreement-clause boundary simultaneously.
- `practiceTest7RW.js:1011` Test 7 M2 Q23: `Each` + `had / were / have been / are` — mixes tense (had vs are vs have been) AND number agreement (were vs are) in the same set.

**Why non-CB:** CB explicitly isolates ONE skill cleanly per item (`RW_SEC_AUDIT.md` §F8; `CB_RW_AUTHENTICITY_REFERENCE.md` §6.3). If testing comma placement, the choices differ ONLY in punctuation, not verb tense.

**How to avoid:** lint check `single-skill-isolation` (§8) parses the four choices, identifies their varying dimensions (punctuation, tense, agreement, case, etc.), and rejects items varying in more than one dimension.

### F13. Non-CB transition phrasings

**Description:** transition choices that are not in the CB lexicon — typically stacked transitions or constructions that read as two transitions concatenated.

**File:line examples:**

- `practiceTest12RW.js` Test 12 M2 Q24: choice D listed as `In fact, similarly,` — this is **not** a CB transition. CB transitions are single tokens or short clean phrases: `However,` / `Therefore,` / `In addition,` / `By contrast,` / `On the other hand,`. (`RW_NON_SEC_SAMPLE_AUDIT.md` §6.)

**Why non-CB:** CB never offers a transition that reads as two stacked transitions. The CB transition lexicon is the closed set documented in §1.10.

**How to avoid:** lint check `transition-lexicon` (§8) validates every transition choice against the §1.10 allowed-transitions list.

### F14. Reused literary work titles across fabricated authors

**Description:** the same fabricated short-story title attributed to different invented authors across multiple tests — a fingerprint of templated literary fabrication.

**File:line examples:**

- "The Loom Room" appears as a fabricated short-story title in **Tests 4, 9, and 10** (`practiceTest4RW.js`, `practiceTest9RW.js`, `practiceTest10RW.js`), each attributed to a different fabricated author (Selma Bekele 2021 / Ahmed Belkacem 2021 / Itziar Olano 2021). (`RW_NON_SEC_SAMPLE_AUDIT.md` §2.)
- All 24 fabricated short-story passages share the same plot formula: solitary craftsperson at end of workday → physical action → pause → memory of older relative → "the thought did not make her sad / unsettle her / slow her" → "it made her steadier / patient / surer."

**Why non-CB:** CB literary excerpts are from documented public-domain works. A title cannot be "reused" because each is a real published title.

**How to avoid:** every literary work title must be in `scripts/generated/rwSources/literaryWorks.json` allowlist (per §10). Lint check `literary-work-allowlist` (§8) rejects work titles not in the allowlist; this also catches reused-title fabrication automatically.

### F15. Single-first-name researcher introductions

**Description:** a passage introduces a researcher / craftsperson with a single first name only, no surname, no nationality, no institution — a tell that the passage was generated to host the question rather than written about a real subject.

**File:line examples:**

- `practiceTest4RW.js:392` (Test 4 M1 Q19): "conservator Mira" — no surname, no descriptor.
- `practiceTest4RW.js:945` (Test 4 M2 Q19): "biologist Halima" — same issue.
- `practiceTest9RW.js:446` (Test 9 M1 Q22): "Saliha had finally finished her first full ceremonial rug" — first name only, sentimental detail.

**Why non-CB:** CB always provides a first name + last name + identifier on first mention.

**How to avoid:** lint check `bare-name-introduction` (§8) flags any passage where a person noun is preceded by only a single proper noun and a descriptor without a surname.

### F16. Genocide-adjacent / partisan-political backdrops

**Description:** passages using catastrophe-adjacent or partisan-political subject matter as background context for a grammar / comprehension question.

**File:line examples:**

- `practiceTest12RW.js:941` (Test 12 M2 Q19): "Imigongo — the Rwandan cow-dung relief tradition whose chevron and spiral motifs were nearly lost during _the disruptions of the 1990s_" — euphemistic reference to the Rwandan genocide as backdrop for a grammar question. (`RW_SEC_AUDIT.md` rates this the second-worst single offender across the SEC bank.)

**Why non-CB:** CB explicitly avoids partisan / catastrophe-adjacent backdrops (`CB_RW_AUTHENTICITY_REFERENCE.md` §5.6 lists this as a CB-explicit avoidance).

**How to avoid:** subject-matter manual review against a denylist of catastrophe-adjacent contexts (genocide, mass violence, partisan political debates, contemporary war, contemporary refugee crises). Authors must submit subject-matter selections to a manual-review gate before drafting begins.

### F17. Generic-placeholder anchoring

**Description:** passages anchored on generic placeholders ("the historic train depot," "the city's transit authority," "the four research teams that contributed to the Saharan dust survey," "the new arts grant," "the Old Mill District") rather than named real institutions.

**File:line examples:**

- `practiceTest1RW.js:428` (Test 1 M1 Q21): "the historic train depot" — unnamed.
- `practiceTest2RW.js:428` (Test 2 M1 Q21): "the community center" — unnamed.
- `practiceTest1RW.js:464` (Test 1 M1 Q23): "two universities" — unnamed.
- `practiceTest1RW.js:999` (Test 1 M2 Q22): "the Old Mill District" — unnamed.
- `practiceTest4RW.js:1017` (Test 4 M2 Q23): "the Saharan dust survey" — generic; real efforts are CALIMA, ICE-D, SAMUM (named).

**Why non-CB:** CB always names the agency, the institution, or the location. (`RW_SEC_AUDIT.md` §F under multiple items.)

**How to avoid:** lint check `generic-placeholder-detection` (§8) flags passages containing common placeholder constructions ("the [common-noun] [common-noun]" without a proper noun in the same sentence).

### F18. Recycled distractor phrasings

**Description:** distractor strings that recur verbatim (modulo topic noun) across many items in the bank. Each recurrence reduces the distractor's value.

**File:line examples:**

- "memorize" appears as wrong-answer C in M1 Q3 WiC items in Tests 2, 3, 4, 8, 9, 10 (always implausible in the same way).
- "By insisting that the model has already been disproven by the [region] record" — appears in 8+ cross-text items.
- "by arguing that [movement] is technically impossible to scale" — appears in 11 cross-text items.

**Why non-CB:** CB authentic distractors vary in form, length, and angle.

**How to avoid:** lint check `distractor-uniqueness` (§8) computes choice-string Jaccard across the bank and flags any distractor that appears in >2 items (modulo topic-noun substitution).

### F19. Three-or-fewer rhetorical-synthesis goal verbs dominant

**Description:** rhetorical-synthesis items concentrating heavily on a small number of goal verbs ("emphasize the scientific significance," "highlight a point of disagreement," "introduce a concept to readers unfamiliar with it"), with these three goals appearing in 70%+ of the bank's synthesis items.

**Why non-CB:** real CB cycles through ~12 distinct goal types (see §1.11 inventory).

**How to avoid:** bank-level rule (§9): no goal verb may dominate more than 25% of rhetorical-synthesis items. Lint check `synthesis-goal-distribution` (§8) computes per-goal frequency and rejects banks where any one goal exceeds 25%.

### F20. Underlined sentence always at the same position

**Description:** every text-structure-and-purpose item in the bank places the underlined sentence at sentence position 3 — making the structural function predictable independently of passage content.

**Why non-CB:** real CB varies the position of the underlined sentence (sometimes sentence 2, sometimes 4, sometimes 1).

**How to avoid:** bank-level rule: across the bank's TS&P items, the underlined-sentence position must vary across {1, 2, 3, 4} with no single position exceeding 40% of items. Lint check `underlined-sentence-position-distribution` (§8) enforces.

---

---

## 8. Lint checks (concrete spec for `scripts/validateRWBank.mjs`)

`scripts/validateRWBank.mjs` is the R&W counterpart to the Math lint surface (`scripts/validateBank.mjs` and `scripts/calibrateModule.mjs --lint`). It runs over `src/data/practiceTests/practiceTest{1..12}RW.js` and the source-allowlist files in `scripts/generated/rwSources/`. Each lint check below is named, scoped, with a violation message and a note on whether it can reuse existing infrastructure or requires new code.

The lint runs in **CI**; failure-of-any-check blocks merge. A `SKIP_RW_LINT=1` env var is permitted for fresh-clone bootstrap (same convention as the Math `SKIP_PDF_LINT=1`).

### 8.1 Per-item structural checks

These mirror the Math `--lint` checks and apply to each MCQ item independently.

| Check | Scope | Violation triggers when… | Violation message | Reuse? |
|---|---|---|---|---|
| `mc-choice-count` | item | item has != 4 choices | `Item {id}: must have exactly 4 choices, found {n}` | reuse `validateBank.mjs` |
| `choice-id-format` | item.choices | a choice has id != A/B/C/D or empty `text` | `Item {id} choice {idx}: id must be A/B/C/D and text must be non-empty` | reuse |
| `correct-answer-valid` | item | `correctAnswer` not in {A, B, C, D} or doesn't match a choice id | `Item {id}: correctAnswer "{value}" does not match any choice id` | reuse |
| `band-field` | item | `band` missing or not in 1–7 | `Item {id}: band must be 1-7, got "{value}"` | reuse |
| `skill-field` | item | `skill` missing or not in the 11-skill set | `Item {id}: skill "{value}" is not one of the 11 R&W skills` | new |

### 8.2 Per-item content / formatting checks (R&W-specific)

| Check | Scope | Violation triggers when… | Violation message | Reuse? |
|---|---|---|---|---|
| `stem-verbatim-per-skill` | item.stem, item.skill | stem string is not the canonical stem for the item's skill (per §1) AND not in the documented variant list | `Item {id}: stem "{stem}" does not match canonical stem for skill {skill}. Allowed: {list}` | new |
| `no-html-tags` | passage / stem / choices / explanation | any HTML tag found (`<u>`, `<em>`, `<sub>`, `<sup>`, `<br>`, `<p>`) | `Item {id}: HTML tag found in {field}: "{snippet}"` | reuse |
| `no-html-entities` | all text fields | any `&xxx;` or `&#xNNNN;` entity found | `Item {id}: HTML entity found in {field}: "{entity}"` | reuse |
| `no-mathspeak-residue` | all text fields | any of `StartFraction`, `Superscript`, `Baseline`, `EndFraction`, `comma`, `or equals` literal | `Item {id}: MathSpeak residue in {field}: "{token}"` | reuse |
| `underline-format` | passage | underlined portion uses `<u>` HTML rather than `__text__` markdown | `Item {id}: underlined sentence must use __text__ markdown, not <u>...</u>` | new |
| `blank-format` | passage | blank uses `[blank]`, `(blank)`, or 9+ underscores in a row | `Item {id}: blank must be 4-8 underscores; found "{snippet}"` | new |
| `quotation-mark-curly` | passage | passage contains straight `"…"` rather than curly `“…”` | `Item {id}: use curly quotation marks in passage` | new |
| `notes-format-rs` | passage when skill = rhetorical-synthesis | notes are not a markdown bulleted list with the canonical `While researching a topic…` preamble | `Item {id} (rhetorical-synthesis): notes must use canonical preamble + 4-7 bulleted facts` | new |
| `two-text-format` | passage when skill = cross-text-connections | passage is not a `**Text 1**` / `**Text 2**` block layout | `Item {id} (cross-text-connections): must use Text 1 / Text 2 labels and blank-line separation` | new |
| `cross-text-pair-real` | passage when skill = cross-text-connections | not at least one of the two texts cites a source in `crossTextPairs.json` | `Item {id}: cross-text passages must reference at least one allowed source from crossTextPairs.json` | new |
| `transition-lexicon` | choices when skill = transitions | any choice text not in the §1.10 allowed-transitions list | `Item {id} (transitions): choice "{text}" is not in the CB transition lexicon` | new |
| `single-skill-isolation` | choices when skill in {boundaries, form-structure-and-sense} | choices vary in more than one of {punctuation, tense, agreement, case, voice} | `Item {id}: SEC choices vary in {n} dimensions: {list}. CB tests one skill cleanly.` | new |
| `sec-skill-in-menu` | item when skill in {boundaries, form-structure-and-sense} | item's specific subdomain is not in the documented CB SEC subdomain list | `Item {id}: SEC subdomain "{value}" is not in the CB menu (no comparative/superlative; etc.)` | new |
| `distractor-word-validation` | choices when skill in {boundaries, form-structure-and-sense} | any choice contains a token not in {dictionary ∪ proper-nouns-from-passage}, OR matches a curated denylist (`comprehensiver`, `complexs`, `Library's'`, `whom's`, `which's`, etc.) | `Item {id}: choice "{text}" contains non-word token "{token}"` | new |

### 8.3 Per-item source-authenticity checks

Cross-checks against `scripts/generated/rwSources/*.json` allowlists per §10.

| Check | Scope | Violation | Message | Reuse? |
|---|---|---|---|---|
| `entity-registry-validation` | passage | any researcher / scholar name (matched via `[Title] [First] [Last]` regex) is not in `researchers.json` | `Item {id}: researcher "{name}" not in researchers.json allowlist` | new |
| `literary-work-allowlist` | passage / choices | any italicized novel title or quoted short-story / poem title is not in `literaryWorks.json` | `Item {id}: literary work "{title}" not in literaryWorks.json allowlist` | new |
| `quantitative-data-source` | passage when skill = command-of-evidence-quantitative | the table / graph caption does not reference a source in `quantitativeData.json` | `Item {id}: quantitative table source not declared from quantitativeData.json` | new |
| `bare-name-introduction` | passage | a person-noun is preceded by only a single proper noun without a surname | `Item {id}: bare-name introduction "{snippet}"` | new |
| `generic-placeholder-detection` | passage | passage contains a flagged generic-placeholder pattern (`the historic [noun]`, `the city's [noun]`, `the [N] research teams that contributed to the [generic noun] survey`) without a proper-noun anchor | `Item {id}: generic-placeholder "{snippet}"` | new |
| `passage-source-declaration` | passage | passage does not declare a `source: { author, work, year, url }` metadata field (unless documented as test-author-generic-expository) | `Item {id}: passage missing required source metadata` | new |

### 8.4 Bank-level uniqueness / cloning checks

These run after all items are loaded and operate over the full bank.

| Check | Scope | Violation | Message | Reuse? |
|---|---|---|---|---|
| `pdf-uniqueness-stem` | every passage / stem | Jaccard ≥ 0.78 OR 3-gram overlap ≥ 0.60 vs any 25-token sliding window across PT 4–11 PDFs | `Item {id}: stem too similar to PT{n} {snippet}` | reuse `pdf-uniqueness-stem` lint |
| `pdf-uniqueness-passage` | every passage | same thresholds, sliding window over passage text | `Item {id}: passage too similar to PT{n}` | reuse |
| `pdf-uniqueness-choices` | every joined choice block | thresholds same; only runs when joined choice text ≥ 12 content tokens | `Item {id}: choice block too similar to PT{n}` | reuse |
| `pdf-uniqueness-explanation` | every explanation | sliding 25-token window over explanation text | `Item {id}: explanation too similar to PT{n}` | reuse |
| `cross-test-passage-uniqueness` | each pair of passages within the 12-test bank | Jaccard ≥ 0.40 OR shared 12-token opening | `Item {id} passage shares opening / has Jaccard {x} with item {other_id}` | new |
| `within-test-passage-cloning` | M1 vs M2 of the same test | shared 12-token opening between any pair | `Test {n}: M1 item {id_1} and M2 item {id_2} share 12-token opening` | new |
| `cross-text-template-detection` | cross-text-connections items pairwise | choice A/C/D structures Jaccard ≥ 0.50 after topic-noun normalization | `Item {id} cross-text choices match template of item {other_id}` | new |
| `distractor-uniqueness` | choice strings across the bank | any distractor string appears in >2 items (modulo topic-noun substitution) | `Distractor "{text}" appears in items {list}` | new |
| `passage-skeleton-detection` | every pair of passages | passage skeleton (after stripping proper nouns and number tokens) matches another passage skeleton ≥ 0.70 | `Item {id} skeleton matches item {other_id}` | new |
| `literary-work-uniqueness` | literary work titles across the bank | any work title appears in >1 item (a literary excerpt should be unique) | `Literary work "{title}" reused in items {list}` | new |
| `researcher-uniqueness` | researcher names across the bank | any researcher name appears in >1 item | `Researcher "{name}" reused in items {list}` | new |

### 8.5 Bank-level distribution checks

These verify CB-blueprint conformance at the test and bank level.

| Check | Scope | Violation | Message | Reuse? |
|---|---|---|---|---|
| `module-skill-blueprint` | each module | per-module skill distribution does not match the CB R&W blueprint | `Test {n} Module {m}: skill distribution {observed} does not match blueprint {expected}` | new |
| `m2-rw-skill-flow` | each module | skill order within the module does not follow the canonical CB R&W flow (WiC early, comprehension mid, SEC at position ~18, transitions / synthesis at end) | `Test {n} Module {m}: skill flow violation at position {p}` | new |
| `m2-rw-difficulty-ramp` | Module 2 | difficulty ramp does not follow the calibrated PT 4–11 curve | `Test {n} M2: difficulty at position {p} is {actual}, expected {expected_band_range}` | new |
| `genre-distribution-per-test` | each test | per-test passage-genre distribution does not match the CB blueprint (≥1 literary, ≥4 science, ≥3 art/cultural-history, ≥2 social-science) | `Test {n}: genre distribution violates blueprint: {observed}` | new |
| `synthesis-goal-distribution` | rhetorical-synthesis items across the bank | any goal verb dominates >25% of synthesis items | `Goal verb "{verb}" appears in {n}% of synthesis items, exceeding 25% cap` | new |
| `underlined-sentence-position-distribution` | TS&P function-of-sentence items | any single position exceeds 40% of items | `TS&P underlined-sentence position distribution: {dist} (one position exceeds 40% cap)` | new |
| `quantitative-table-variance` | command-of-evidence-quantitative items | the answer-relevant column has zero residual variance OR max-to-second-largest gap > 2× second-to-third-largest gap | `Item {id}: quantitative table has artificially clean signal (gap ratio {r})` | new |
| `stem-distribution-per-skill` | each skill | <80% of items use the canonical stem | `Skill {skill}: only {p}% of items use canonical stem` | new |

### 8.6 Per-explanation lint

| Check | Scope | Violation | Message | Reuse? |
|---|---|---|---|---|
| `explanation-pattern-header` | explanation | does not begin with `**SAT Pattern: ...**` | `Item {id}: explanation must begin with **SAT Pattern: ...**` | reuse |
| `explanation-correct-line` | explanation | no `**Choice X is correct.**` line | `Item {id}: explanation missing **Choice X is correct.** line` | reuse |
| `explanation-tempting-section` | explanation | no `Why the wrong answers are tempting:` section | `Item {id}: explanation missing Why the wrong answers are tempting section` | reuse |
| `explanation-misconception-per-distractor` | explanation | a non-correct choice doesn't have a named misconception (slot 1/2/3 from §2.2) | `Item {id}: choice {X} in tempting block missing misconception name` | new |
| `explanation-test-day-takeaway` | explanation | no `Test Day Takeaway:` line | `Item {id}: explanation missing Test Day Takeaway line` | new |
| `pattern-name-in-registry` | explanation | the pattern name in the header is not in the §5.2 registry | `Item {id}: pattern "{name}" not in registry` | reuse |

### 8.7 Bootstrap / configuration

The lint requires:

- `scripts/generated/pdf-text/sat-practice-test-{4..11}-digital.txt` (already produced by `scripts/extractCBPracticeTestText.mjs` per Math rubric; reused here).
- `scripts/generated/rwSources/researchers.json` (Phase 4 deliverable; see §10).
- `scripts/generated/rwSources/literaryWorks.json` (Phase 4 deliverable).
- `scripts/generated/rwSources/crossTextPairs.json` (Phase 4 deliverable).
- `scripts/generated/rwSources/quantitativeData.json` (Phase 4 deliverable).

CI / fresh clones lacking the PDF cache can run with `SKIP_PDF_LINT=1` (per Math convention); the bank-level uniqueness rules still run. CI / fresh clones lacking `rwSources/*.json` can run with `SKIP_SOURCE_LINT=1` for bootstrap; this MUST be removed before merging item changes.

### 8.8 Semantic checks (not lintable — flagged for manual review gate)

- The four-misconception distractor mapping (§2) — manual reviewers verify per-item.
- The top-of-band stem patterns (§4) — manual reviewers verify item difficulty against the calibration set rating dimensions.
- Subject-matter genocide-adjacent / partisan-political backdrop check (F16) — subject-matter denylist requires manual review pre-drafting.
- Researcher / literary-work credibility — even if the entity is in the allowlist, the **specific claim** about that entity must be verifiable. Reviewer-attested verification.

---

---

## 9. R&W-specific bank-level invariants

These invariants apply to the bank as a whole — the 12-test R&W bank — not to individual items. An item can be locally well-formed and still violate a bank invariant. The lint (§8) enforces these as bank-level checks; they cannot be evaluated per-item.

### 9.1 Researcher / scholar / critic uniqueness

**Invariant:** no researcher / author / scholar / critic name appears in more than 1 item across the entire 12-test bank.

**Why:** CB R&W is a one-off authoring practice. A researcher introduced in PT 4 does not reappear in PT 7; each item is bespoke. If a name appears in two items in the PerformSAT bank, students taking multiple practice tests will recognize the recurrence as a bank fingerprint.

**Lint:** `researcher-uniqueness` (§8.4).

**Exemption:** none. Even when two real researchers share a surname (Vargas, Park, Tan), each item must use a different person — and the lint matches on first name + last name jointly.

### 9.2 Passage skeleton uniqueness

**Invariant:** no passage skeleton appears in more than 1 item across the bank.

**Skeleton definition:** the passage with all proper nouns, dates, and numerical literals replaced by placeholders. Two passages share a skeleton if their placeholder forms are ≥0.70 Jaccard.

**Why:** the most pervasive defect in the current PerformSAT R&W bank is templated skeleton reuse (`RW_SEC_AUDIT.md` §F1; `RW_NON_SEC_SAMPLE_AUDIT.md` §1). Examples include the "sympathetic to the goals…cautions that…" cross-text template (11 items) and the "[Worker] paused before [action], watching… and thought of all the [time-period] her [parent] had stood in this exact place" literary template (24 items).

**Lint:** `passage-skeleton-detection` (§8.4).

**Exemption:** none. Bespoke authoring is the rule.

### 9.3 Literary work uniqueness

**Invariant:** no literary work title is reused across tests, even if attributed to different authors.

**Why:** the audit found "The Loom Room" reused as a fabricated short-story title in Tests 4, 9, and 10 with three different fabricated authors (`RW_NON_SEC_SAMPLE_AUDIT.md` §2). The lint catches this automatically because every literary work must be in `literaryWorks.json` (where each entry has a single canonical author / title pair) AND no title may appear in >1 item across the bank.

**Lint:** `literary-work-uniqueness` (§8.4) and `literary-work-allowlist` (§8.3) jointly.

**Exemption:** none. A work is either real (in the allowlist) or rejected; either way, it appears at most once in the bank.

### 9.4 Per-test passage-genre distribution matches CB blueprint

**Invariant:** each test (Module 1 + Module 2 combined) must satisfy the per-test genre blueprint:

- ≥2 literary excerpts (per-module: 1 in M1, 1 in M2);
- ≥4 scientific / academic-research passages;
- ≥3 art / cultural-history passages;
- ≥2 social-science passages;
- ≥1 cross-text item (any pairing of the above);
- ≥3 quantitative-evidence items (passages with table or graph).

**Why:** PT 4–11 follow this distribution consistently. A test with 6 SEC + 12 science + 0 art passages would feel skewed.

**Lint:** `genre-distribution-per-test` (§8.5).

### 9.5 Per-skill stem distribution

**Invariant:** within each skill, ≥80% of items use the canonical stem from §1; the remaining ≤20% use only the documented variants.

**Why:** CB R&W has a tight stem inventory. A bank where 40% of central-ideas items use the canonical stem and 60% use rewordings would feel inconsistent.

**Lint:** `stem-distribution-per-skill` (§8.5).

### 9.6 Cross-text relationship variety

**Invariant:** across the bank's cross-text-connections items (typically 12–24 items across 12 tests), the cross-text **relationship type** distribution must include at least 4 distinct relationships from this taxonomy:

- partial agreement with specific scope condition;
- direct rejection of a premise;
- methodological critique;
- scope challenge (Text 2 says Text 1's framing applies to a narrower / broader case);
- application to a different domain;
- paraphrase / restatement disagreement;
- two-author convergence on a refined claim.

**Why:** the audit found 11 of 12 tests' M1 Q6 cross-text items used the **identical** "sympathetic to the goals" partial-agreement frame, with choice B always correct. The bank's cross-text relationship variety is the strongest signal a student has that the bank is not templated.

**Lint:** the cross-text-template-detection lint (§8.4) catches the simple cloning case; the relationship-type variety is enforced via per-item metadata field `crossTextRelationship` and a bank-level check that ≥4 distinct values appear.

### 9.7 Rhetorical-synthesis goal verb distribution

**Invariant:** across the bank's rhetorical-synthesis items, no single goal verb may exceed 25% of items.

**Why:** the audit found 70%+ of synthesis items used three goal verbs (`emphasize the scientific significance`, `highlight a point of disagreement`, `introduce a concept to readers`) — real CB cycles through ~12 distinct goal types. (`RW_NON_SEC_SAMPLE_AUDIT.md` §8.)

**Lint:** `synthesis-goal-distribution` (§8.5).

### 9.8 Quantitative-evidence table variance

**Invariant:** every quantitative table / graph must contain at least one near-tie row OR at least one residual that breaks the perfectly-monotone pattern.

**Why:** real CB tables have noise; PerformSAT tables (Tests 1–4 especially) have monotone differences with zero variance, letting students pick the answer off the largest absolute value. (`RW_NON_SEC_SAMPLE_AUDIT.md` §7.)

**Lint:** `quantitative-table-variance` (§8.5).

### 9.9 Underlined-sentence position distribution

**Invariant:** across the bank's TS&P function-of-sentence items, the underlined-sentence position distribution across {1, 2, 3, 4} must have no single position exceeding 40%.

**Why:** the current bank places the underlined sentence at position 3 in 100% of TS&P items, making the structural function predictable independently of passage content. (`RW_NON_SEC_SAMPLE_AUDIT.md` §10.)

**Lint:** `underlined-sentence-position-distribution` (§8.5).

### 9.10 Module 1 / Module 2 independence

**Invariant:** for each test N, the passages, researchers, and topics in Module 1 must be disjoint from those in Module 2.

- No researcher appears in both M1 and M2 of the same test.
- No passage skeleton appears in both M1 and M2 of the same test.
- No literary work appears in both M1 and M2 of the same test.

**Why:** CB Module 1 and Module 2 are independent forms; cross-module reuse within a test is a bank fingerprint.

**Lint:** `within-test-passage-cloning` (§8.4) and the `researcher-uniqueness` lint together enforce this (since researcher uniqueness is bank-wide, it implies module-wide as well).

### 9.11 Distractor-string uniqueness

**Invariant:** no distractor string (after topic-noun normalization) appears in more than 2 items across the bank.

**Why:** CB distractors vary in form, length, and angle. Reusing "memorize" in 6 WiC items, or "By insisting that the model has already been disproven by the [region] record" in 8 cross-text items, makes distractors stale. (`RW_NON_SEC_SAMPLE_AUDIT.md` §4.)

**Lint:** `distractor-uniqueness` (§8.4).

### 9.12 Stem-and-correctness-pattern uniqueness

**Invariant:** for cross-text-connections items, the **correct-answer slot pattern** must vary. Specifically: across the cross-text items in the bank, the correct answer must distribute across A, B, C, D — no single slot may be correct in >40% of items.

**Why:** in the audit, choice B was correct in **every** instance of the "sympathetic to the goals" template — students who recognized the template could answer correctly without reading.

**Lint:** `correct-answer-distribution` (§8.5, per-skill).

### 9.13 Subject-matter coverage

**Invariant:** across the bank's passages, the documented CB topic areas must be represented:

- planetary / atmospheric science;
- biology and ecology;
- materials and chemistry;
- climate / earth science;
- neuroscience;
- archaeology;
- geology;
- medicine and public health;
- art history;
- music history;
- design / architecture;
- literature and literary criticism (real public-domain authors per §10);
- linguistics;
- indigenous studies (real verifiable scholars and traditions);
- labor / economics;
- gender / civil rights history;
- philosophy;
- spanish-language and other non-English-source journalism / scholarship.

No single topic area should exceed 15% of the bank's passages.

**Why:** PT 4–11 spread topics broadly. Concentration in any one area is a fingerprint.

**Lint:** topic-area metadata field `topic` per-item; bank-level check that no single topic exceeds 15%.

---

---

## 10. Source authenticity

This is the section that, more than any other, distinguishes CB-grade R&W from the current PerformSAT bank. The audit (`docs/RW_NON_SEC_SAMPLE_AUDIT.md`) found that the **single most damaging bank-level pattern** is wholesale source fabrication: invented short-story authors, invented critics, invented researchers, invented Linnaean binomials. CB R&W's rule is simple: **everything cited must be real.**

This section defines:

1. The four source-authenticity categories (literary, researcher, cross-text, quantitative).
2. The allowlist files in `scripts/generated/rwSources/` that the lint validates against.
3. The **source metadata field** every passage must carry.

### 10.1 Source-authenticity categories

#### 10.1.1 Literary

**Rule:** literary excerpts must be drawn from a **real public-domain author** writing a **real published work.** No fabricated short stories, no fabricated novelists, no fabricated poems.

**Allowlist file:** `scripts/generated/rwSources/literaryWorks.json`

**Schema:**

```jsonc
{
  "works": [
    {
      "id": "glaspell-out-there-1912",
      "author": "Susan Glaspell",
      "authorBirth": 1876,
      "authorDeath": 1948,
      "title": "Out There",
      "form": "short-story",
      "year": 1912,
      "publicDomain": true,
      "url": "https://en.wikisource.org/wiki/...",
      "excerptable": true,
      "notes": "Used in PT4 Q5 reference."
    },
    {
      "id": "whitman-calamus-24-1860",
      "author": "Walt Whitman",
      "authorBirth": 1819,
      "authorDeath": 1892,
      "title": "Calamus 24",
      "form": "poem",
      "year": 1860,
      "publicDomain": true,
      "url": "https://en.wikisource.org/wiki/...",
      "excerptable": true
    }
  ]
}
```

**Documented CB literary authors (seed list, from `CB_RW_AUTHENTICITY_REFERENCE.md` §5.1):**

Susan Glaspell, Angelina Weld Grimké, Walt Whitman, Jack London, Frances Hodgson Burnett, Elizabeth von Arnim, Jean Webster, James Baldwin, Herman Melville, Ann Petry, Betty Smith, Charlotte Perkins Gilman, Katherine Mansfield, Anton Chekhov, Jerome K. Jerome, Marianne Moore, Edgar Allan Poe, Nathaniel Hawthorne, Henry James, Sarah Orne Jewett, Kate Chopin, Mary E. Wilkins Freeman, Stephen Crane, Edith Wharton, Willa Cather, Theodore Dreiser, William Dean Howells, Mark Twain, Bret Harte, Jack Kerouac (post-1960 needs separate handling), Zora Neale Hurston, Langston Hughes, Claude McKay, Jean Toomer, Nella Larsen, Sui Sin Far (Edith Maude Eaton), Mary Antin, Anzia Yezierska. Plus poetry: Emily Dickinson, William Wordsworth, John Keats, Christina Rossetti, Walt Whitman (already listed), William Butler Yeats, Robert Frost, Carl Sandburg, Wallace Stevens, T.S. Eliot.

For non-English-language traditions: real translated Russian (Chekhov, Gogol, Tolstoy short fiction), French (Maupassant, Balzac), German (Mann, Hofmannsthal), Spanish (Galdós, Pardo Bazán), Latin American (Quiroga, Borges pre-1928 if PD applies), Japanese (Mori Ōgai, Natsume Sōseki), Chinese (Lu Xun) — all in public domain in the relevant jurisdiction.

**Lint:** `literary-work-allowlist` (§8.3) rejects any quoted or referenced work title not in this allowlist.

**Phase 4 work item:** populate `literaryWorks.json` with ≥150 documented entries spanning genres, eras, and traditions (target: 50 short stories, 50 poems, 30 novels with excerptable passages, 20 non-fiction essays / lectures).

#### 10.1.2 Researcher / scholar

**Rule:** every named researcher, scientist, scholar, or critic in a passage must be a **real, citable person** with **verifiable real publications.**

**Allowlist file:** `scripts/generated/rwSources/researchers.json`

**Schema:**

```jsonc
{
  "researchers": [
    {
      "id": "delllagiustina-daniella",
      "firstName": "Daniella",
      "lastName": "DellaGiustina",
      "title": "NASA scientist",
      "field": "planetary science",
      "institution": "University of Arizona / NASA",
      "verifiedPublications": [
        {
          "title": "OSIRIS-REx asteroid sample collection",
          "year": 2020,
          "url": "https://www.nasa.gov/..."
        }
      ],
      "notes": "Cited verbatim in PT4 Q1.",
      "approved": true
    },
    {
      "id": "tsinnajinnie-lani",
      "firstName": "Lani",
      "lastName": "Tsinnajinnie",
      "title": "Dr.",
      "field": "hydrology",
      "institution": "Navajo Nation Department of Water Resources",
      "verifiedPublications": [
        {
          "title": "Chuska Mountains snowpack analysis",
          "year": 2020,
          "url": "..."
        }
      ],
      "notes": "Cited in PT6 Q28.",
      "approved": true
    }
  ]
}
```

**Lint:** `entity-registry-validation` (§8.3) rejects any researcher / scholar named in a passage who is not in this allowlist.

**Phase 4 work item:** populate `researchers.json` with ≥300 entries spanning the documented CB topic areas (per §9.13). Target distribution:

- 60 planetary / atmospheric scientists;
- 60 biologists / ecologists;
- 40 materials / chemistry researchers;
- 40 climate / earth scientists;
- 30 archaeologists;
- 30 historians / cultural-history scholars;
- 30 art historians;
- 20 linguists;
- 20 social scientists;
- 20 indigenous-studies scholars (only real, verifiable scholars — no fabrications, no name-coining).

#### 10.1.3 Cross-text pairs

**Rule:** every cross-text item must reference a **real essay / lecture / book pair** OR a **paraphrased real debate without invented critic names.** When two essays are paired, both must be real publications. When the cross-text pairs an author's work with a critic's response, both must be real and citable.

**Allowlist file:** `scripts/generated/rwSources/crossTextPairs.json`

**Schema:**

```jsonc
{
  "pairs": [
    {
      "id": "gilbert-gubar-vs-kaplan-bronte",
      "text1": {
        "author": "Sandra Gilbert and Susan Gubar",
        "work": "The Madwoman in the Attic",
        "year": 1979,
        "url": "..."
      },
      "text2": {
        "author": "Cora Kaplan",
        "work": "Sea Changes: Essays on Culture and Feminism (essay on Brontë)",
        "year": 1986,
        "url": "..."
      },
      "relationship": "partial-agreement-with-scope-condition",
      "approved": true
    }
  ]
}
```

**Lint:** `cross-text-pair-real` (§8.2) rejects cross-text items that don't reference at least one allowed pair.

**Phase 4 work item:** populate `crossTextPairs.json` with ≥40 documented pairs spanning relationship types (per §9.6).

#### 10.1.4 Quantitative data

**Rule:** every table or graph in a quantitative-evidence item must come from a **real published dataset** — peer-reviewed paper, government statistical agency (CDC, NOAA, USGS, BLS, EIA), survey organization (Pew, Gallup), or other documented source.

**Allowlist file:** `scripts/generated/rwSources/quantitativeData.json`

**Schema:**

```jsonc
{
  "datasets": [
    {
      "id": "cdc-flu-vaccination-coverage-2018-2022",
      "source": "CDC FluVax-View",
      "url": "https://www.cdc.gov/flu/...",
      "yearRange": [2018, 2022],
      "table": [
        { "year": 2018, "coverage_under_18_percent": 62.6 },
        { "year": 2019, "coverage_under_18_percent": 63.8 },
        { "year": 2020, "coverage_under_18_percent": 60.5 },
        { "year": 2021, "coverage_under_18_percent": 58.6 },
        { "year": 2022, "coverage_under_18_percent": 55.3 }
      ],
      "approved": true
    }
  ]
}
```

**Lint:** `quantitative-data-source` (§8.3) rejects items whose tables don't reference a documented dataset.

**Phase 4 work item:** populate `quantitativeData.json` with ≥40 datasets spanning planetary science, climate, biology, public health, demographics, education, and economics.

### 10.2 Required passage-level source metadata

**Every passage must declare its source via a `source` field.** This is a per-item metadata field on the item record:

```jsonc
{
  "id": "rw-test-1-m1-q5",
  "skill": "text-structure-and-purpose",
  "passage": "...",
  "source": {
    "author": "Ann Petry",
    "work": "The Street",
    "year": 1946,
    "url": "https://...",
    "form": "novel-excerpt",
    "publicDomainStatus": "fair-use-educational"
  },
  "stem": "Which choice best states the main purpose of the text?",
  ...
}
```

**Allowed exemption:** the `source` field may be **omitted** only when the passage is **test-author-generic-expository** — i.e., a short factual passage written by the test author summarizing widely-known material with no specific researcher / scholar / institution named. This exemption is rare; document each instance with a comment in the source file.

When `source.author / work / year` are present, the lint cross-checks them against the appropriate allowlist (`literaryWorks.json` for literary, `researchers.json` for researcher-anchored expository, etc.).

### 10.3 Phase 4 source-curation work plan

The Phase 4 source-curation work (per `docs/RW_PIPELINE_PLAN.md`) produces:

1. `scripts/generated/rwSources/literaryWorks.json` (≥150 entries)
2. `scripts/generated/rwSources/researchers.json` (≥300 entries)
3. `scripts/generated/rwSources/crossTextPairs.json` (≥40 entries)
4. `scripts/generated/rwSources/quantitativeData.json` (≥40 entries)

Curation method:

- **Literary:** seed from CB-documented authors (§10.1.1); extend via Project Gutenberg, HathiTrust, Wikisource. Each entry has a verified URL and confirmed public-domain status.
- **Researcher:** seed from CB-named researchers (DellaGiustina, Galvez, Watt, Bennett, etc.); extend via Google Scholar / ORCID searches in each topic area. Each entry has ≥1 verified publication URL.
- **Cross-text:** seed from documented critic-author pairs in literary criticism, philosophy of science, and contemporary policy debates. Each entry has both URLs verified.
- **Quantitative:** seed from CDC, NOAA, USGS, Pew, BLS / EIA, peer-reviewed open-access papers. Each entry has the raw table values stored inline so authors can paraphrase / table-quote without re-fetching.

### 10.4 Hard rules (the lint enforces; manual review verifies)

- **No fabricated researchers, scholars, or critics.** Cite only real people. (`RW_SEC_AUDIT.md` §F6, §F7, §F11; `RW_NON_SEC_SAMPLE_AUDIT.md` §1.)
- **No fabricated literary works.** No invented short stories, no invented novels, no invented poems. (`RW_NON_SEC_SAMPLE_AUDIT.md` §2.)
- **No fabricated Linnaean binomials.** Species names must be real (e.g., _Pristimantis araguanus_ — real; _Pristimantis hagensii_ — fabricated, `practiceTest11RW.js:963`).
- **No bare-surname researcher introductions.** First name + last name + descriptor required on first mention.
- **No fabricated "first/third/only X to do Y" credentials.** All such claims must be verifiable in published sources.
- **No genocide / catastrophe / partisan-political euphemism backdrops.** (`practiceTest12RW.js:941` "the disruptions of the 1990s.")
- **No generic placeholder anchoring.** No "the historic train depot," "the city's transit authority," "the four research teams that contributed to the Saharan dust survey." Name the institution.

### 10.5 Authentication audit checklist

Before any item ships, the manual-review reviewer confirms:

- [ ] Every named person in the passage is in `researchers.json` (or is a documented historical figure verifiable in a third-party source).
- [ ] Every literary work referenced is in `literaryWorks.json`.
- [ ] Every quantitative table is sourced from `quantitativeData.json`.
- [ ] The `source` metadata field is present and correct.
- [ ] No bare-surname or first-name-only person introductions.
- [ ] No fabricated species names, programs, datasets, dates.
- [ ] No genocide-adjacent or partisan-political backdrops.

---

## Appendix A — Quick reference: skill → canonical stem

| Skill | Canonical stem |
|---|---|
| words-in-context | `Which choice completes the text with the most logical and precise word or phrase?` |
| text-structure-and-purpose | `Which choice best states the main purpose of the text?` (+ variants) |
| cross-text-connections | `Based on the texts, how would [Author 2] most likely respond to the [claim] presented in [Text 1]?` |
| central-ideas-and-details | `Which choice best states the main idea of the text?` |
| inferences | `Which choice most logically completes the text?` |
| command-of-evidence-textual | `Which quotation from [Work] most effectively illustrates the claim?` (+ "which finding…" variant) |
| command-of-evidence-quantitative | `Which choice most effectively uses data from the [table / graph] to complete [the example]?` |
| boundaries (SEC) | `Which choice completes the text so that it conforms to the conventions of Standard English?` |
| form-structure-and-sense (SEC) | `Which choice completes the text so that it conforms to the conventions of Standard English?` |
| transitions | `Which choice completes the text with the most logical transition?` |
| rhetorical-synthesis | `The student wants to [accomplish goal]. Which choice most effectively uses relevant information from the notes to accomplish this goal?` |

## Appendix B — Quick reference: anti-pattern → file:line

| Anti-pattern | Smoking-gun file:line examples |
|---|---|
| F1 Templated cross-test parallel passages | `practiceTest1RW.js:374` ↔ `practiceTest2RW.js:374`; `practiceTest1RW.js:446` ↔ `practiceTest2RW.js:446`; `practiceTest1RW.js:927` ↔ `practiceTest2RW.js:927` |
| F2 Invented "first/third/only X to do Y" | `practiceTest1RW.js:374` Inez Park; `practiceTest2RW.js:374` Maya Khoury |
| F3 Literary biography fiction style | `practiceTest1RW.js:927` Reza Ahmadi self-imposed silence; `practiceTest2RW.js:927` Yusuf Adisa refusing commissions |
| F4 Skills not in CB SEC menu | `practiceTest6RW.js:428` (comparative/superlative); `practiceTest6RW.js:981` (same) |
| F5 Malformed distractor non-words | `practiceTest6RW.js:428` "comprehensiver"; `practiceTest5RW.js:374` "complexs"; `practiceTest5RW.js:927` "valleys's"; `practiceTest8RW.js:423` "Library's'"; `practiceTest8RW.js:974` "Denmark's'"; `practiceTest6RW.js:1017` "whom's", "which's"; `practiceTest12RW.js:444` paired-dash with `(` |
| F6 Fabricated researchers | `practiceTest9RW.js:410` Camps; `practiceTest9RW.js:963` Eze; `practiceTest{1,2}RW.js:446` Standing Bear/Brave Bull; `practiceTest11RW.js:963` _Pristimantis hagensii_; `practiceTest12RW.js:1013` Margaret Wabasha |
| F7 Fabricated literary works | `practiceTest3RW.js` _The Glass Tide_ / Olwen Tregaron; `practiceTest8RW.js` _La Pastorella di Volterra_; all 24 fabricated short-story passages at `practiceTest{1..12}RW.js:103-117` and `:927-947` |
| F8 Within-test transition cloning | `practiceTest8RW.js` M1 Q24 ↔ M2 Q24 (steamboat ↔ Donovan); M1 Q25 ↔ M2 Q25 (Lim ↔ Kowalczyk); `practiceTest9RW.js` Yakut horse ↔ marine iguana |
| F9 Cross-text "sympathetic to the goals" template | 11 of 12 tests' M1 Q6 cross-text items |
| F10 Cross-text "generational reading habit" template | Tests 1, 2, 3, 4, 5, 8, 10, 11 — at least one CTC item per test |
| F11 Quantitative tables artificially clean | `practiceTest3RW.js` Q14 (+4.4/+3.5/+3.5/+3.5); `practiceTest1RW.js` Q16 (+11/+12/+11/+11); `practiceTest8RW.js` Q14 (12/31/47/92) |
| F12 Two-skills-tested-at-once SEC | `practiceTest4RW.js` Q18 M1 (`represented;`); Q18 M2 (`expand;`); `practiceTest8RW.js:992` Q22 M2; `practiceTest7RW.js:1011` Q23 M2 |
| F13 Non-CB transition phrasings | `practiceTest12RW.js` M2 Q24 choice D `In fact, similarly,` |
| F14 Reused literary work titles | "The Loom Room" in Tests 4, 9, 10 |
| F15 Single-first-name researcher intros | `practiceTest4RW.js:392` "conservator Mira"; `practiceTest4RW.js:945` "biologist Halima"; `practiceTest9RW.js:446` "Saliha" |
| F16 Genocide-adjacent backdrops | `practiceTest12RW.js:941` "the disruptions of the 1990s" |
| F17 Generic placeholders | `practiceTest1RW.js:428` "the historic train depot"; `practiceTest1RW.js:999` "the Old Mill District"; `practiceTest4RW.js:1017` "the Saharan dust survey" |
| F18 Recycled distractor phrasings | "memorize" in Tests 2,3,4,8,9,10 M1 Q3; "By insisting that the model has already been disproven by the [region] record" in 8+ cross-text items |
| F19 Three-or-fewer rhetorical-synthesis goal verbs dominant | bank-wide |
| F20 Underlined sentence at same position | bank-wide TS&P items |

## Appendix C — Where each lint check originates

| Check | Originating audit / source | New / Reused |
|---|---|---|
| Per-item structural (§8.1) | Math rubric | Reused from `validateBank.mjs` |
| Stem verbatim per skill (§8.2) | `CB_RW_AUTHENTICITY_REFERENCE.md` §7 | New |
| Distractor word validation (§8.2) | `RW_SEC_AUDIT.md` §F5 | New |
| SEC single-skill isolation (§8.2) | `RW_SEC_AUDIT.md` §F8 | New |
| Transition lexicon (§8.2) | `RW_NON_SEC_SAMPLE_AUDIT.md` §6 | New |
| Two-text format (§8.2) | `CB_RW_AUTHENTICITY_REFERENCE.md` §5.2 | New |
| Notes format for rhetorical-synthesis (§8.2) | `CB_RW_AUTHENTICITY_REFERENCE.md` §3.3 | New |
| Entity registry validation (§8.3) | `RW_SEC_AUDIT.md` §F6, `RW_NON_SEC_SAMPLE_AUDIT.md` §3 | New |
| Literary work allowlist (§8.3) | `RW_NON_SEC_SAMPLE_AUDIT.md` §2 | New |
| Bare-name introduction (§8.3) | `RW_SEC_AUDIT.md` §F under multiple items | New |
| Generic placeholder detection (§8.3) | `RW_SEC_AUDIT.md` multiple items | New |
| PDF uniqueness (§8.4) | Math rubric | Reused |
| Cross-test passage uniqueness (§8.4) | `RW_SEC_AUDIT.md` §F1 | New |
| Within-test passage cloning (§8.4) | `RW_NON_SEC_SAMPLE_AUDIT.md` §5 | New |
| Cross-text template detection (§8.4) | `RW_NON_SEC_SAMPLE_AUDIT.md` §3 | New |
| Distractor uniqueness (§8.4) | `RW_NON_SEC_SAMPLE_AUDIT.md` §4 | New |
| Passage skeleton detection (§8.4) | `RW_SEC_AUDIT.md` §F1, `RW_NON_SEC_SAMPLE_AUDIT.md` §1 | New |
| Quantitative table variance (§8.5) | `RW_NON_SEC_SAMPLE_AUDIT.md` §7 | New |
| Synthesis goal distribution (§8.5) | `RW_NON_SEC_SAMPLE_AUDIT.md` §8 | New |
| Underlined-sentence position (§8.5) | `RW_NON_SEC_SAMPLE_AUDIT.md` §10 | New |
| Module flow / blueprint (§8.5) | Memory `feedback_rw_module_flow.md` | New |
| Explanation pattern (§8.6) | Math rubric | Reused with R&W extensions |


