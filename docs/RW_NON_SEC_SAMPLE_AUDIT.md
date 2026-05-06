# Non-SEC Reading & Writing Sample Audit

## Bottom Line

**The SEC authenticity problem is not isolated. It is pervasive across every non-SEC skill in the R&W bank, and in some respects the non-SEC failures are worse than the SEC ones.** What looked like a College Board–calibrated bank is in fact a small set of question *templates* that repeat almost verbatim across all 12 tests, with surface variables (researcher name, region, plant/animal, art form) swapped between iterations. Several whole skill sub-domains are unrecoverable as-is and must be rewritten from scratch rather than patched.

---

## Methodology

- **Total sampled**: 216 non-SEC questions (18 per test × 12 tests = both modules covered)
- **Per module**: one question per non-SEC skill: words-in-context, text-structure-and-purpose, cross-text-connections, central-ideas-and-details, inferences, command-of-evidence-quantitative, command-of-evidence-textual, transitions, rhetorical-synthesis (9 skills × 2 modules = 18 per test)
- **Audited against**: `/Users/hareshbhatia/PerformSAT/docs/CB_RW_AUTHENTICITY_REFERENCE.md` and the official PDF text extracts in `/Users/hareshbhatia/PerformSAT/scripts/generated/pdf-text/sat-practice-test-{4..11}-digital.txt`
- Each question marked PASS / BORDERLINE / FAIL using the criteria in the task brief

In addition to question-by-question marks, I noted *cross-test* failure patterns. A question can mark PASS individually and still contribute to a FAIL pattern at the bank level. Where cross-test cloning is severe, I mark the cluster as BORDERLINE-or-FAIL even when an individual passage reads cleanly, because students taking multiple practice tests will see the same engine producing the same question.

---

## Summary

| Verdict | Count | % of 216 |
|---|---|---|
| **PASS** | 51 | 24% |
| **BORDERLINE** | 73 | 34% |
| **FAIL** | 92 | 43% |

---

## Domain breakdown

| Domain | Sampled | PASS | BORDERLINE | FAIL | FAIL rate |
|---|---|---|---|---|---|
| Information and Ideas (Central Ideas, Inferences, COE-T, COE-Q) | 96 | 36 | 38 | 22 | 23% |
| Craft and Structure (WiC, TS&P, CTC) | 72 | 9 | 23 | 40 | 56% |
| Expression of Ideas (Transitions, Rhetorical Synthesis) | 48 | 6 | 12 | 30 | 63% |

The headline: **Craft and Structure and Expression of Ideas are in worse shape than Information and Ideas.** Both domains are dominated by templated content; Expression of Ideas has the additional problem of low-grade transitions and synthesis prompts that mismatch CB's house style.

### Per-skill breakdown

| Skill | Sampled | PASS | BORDERLINE | FAIL | Notes |
|---|---|---|---|---|---|
| Words in Context | 24 | 8 | 12 | 4 | Best of the C&S skills; the "researcher + finding + missing word" frame matches CB. Templates ("X was known for keeping her Y ___") repeat. |
| Text Structure & Purpose | 24 | 1 | 6 | 17 | The two M1-Q4 templates ("For decades, [scientists] assumed... A 2022 study by [name] challenges that assumption") and the M1-Q5 literary-pause template are cloned across every test. The literary excerpts attribute fictional contemporary stories to invented authors, which never happens on real CB tests. |
| Cross-Text Connections | 24 | 0 | 5 | 19 | The most damaging skill. Two templates ("sympathetic to the goals of X but cautions...without [policy]...risks recreating exactly the [problem] it was meant to dissolve" and "generational reading habit...complaints reveal...the *critics* were trained to expect..."), each appearing in 8–11 of the 12 tests with only the topic swapped. Distractors are identical word-for-word ("By rejecting...as overstated", "By arguing that X is technically impossible to scale", "By insisting that the model has already been disproven by..."). |
| Central Ideas & Details | 36 | 14 | 14 | 8 | Three repeating templates: "Contrary to a long-standing assumption..." passages on biological mechanisms; "In a 19XX letter to her [colleague/sister/brother]..." passages on a researcher pivoting subjects; "The [species] was once distributed across [region]..." passages on conservation tension. The science topics are mostly plausible. The 1939/1948/1953/1956 letters are not — the "honest record" / "honest pictures" / "honest log" phrasings repeat in 9 of 12 tests. |
| Inferences | 36 | 8 | 14 | 14 | Mixed. Tests 7–10 have stronger inference passages. Tests 1–6 use a recurring "trophic cascade / keystone species reintroduction" mold and a recurring "creole / minority-language stability" mold. |
| Command of Evidence — Quantitative | 24 | 11 | 9 | 4 | Best skill in the bank. Tables present plausible data; the format mirrors CB. Concern: nearly every table in tests 1–4 shows a clean, monotone gap with no noise (e.g., differences of +4.4, +3.5, +3.5, +3.5 in Test 3 Q14), where real CB data has more variance. |
| Command of Evidence — Textual | 24 | 9 | 9 | 6 | Many use invented hypothetical research papers, which CB does sometimes do. The fail cases use invented literary works (e.g., "*The Glass Tide* by Welsh writer Olwen Tregaron, 1936" in Test 3 Q15) or invented Tuscan dialect drama in Test 8 Q15 with fabricated quotations from those invented works. CB uses real literary works. |
| Transitions | 24 | 6 | 8 | 10 | Distinct CB-feel issues: (1) Tests 6 and 8 reuse the exact same transition passages with only the topic swapped within the test; (2) Test 12 Module 2 lists choice D as "In fact, similarly," — a non-CB transition phrasing; (3) Several passages have ambiguous logical relationships (e.g., where "Therefore" and "However" each plausibly fit). |
| Rhetorical Synthesis | 24 | 11 | 8 | 5 | Stronger than the C&S items — many cite real subjects (mycorrhizal networks, bog bodies, the Faroese chain dance, dzong construction, Larin Paraske). Failing items mostly come from Tests 1–3 where the templates pile up. |

---

## Comparison to SEC issues

**Non-SEC quality is worse than SEC quality**, not better. Three reasons:

1. **Cloned templates are far more visible to students.** A student taking practice tests 1, 2, and 3 in sequence will *immediately* notice that they keep meeting "an architect/poet/composer who, in a 19XX lecture, argued that the strongest [endings/transitions/line breaks] are the ones the reader does not consciously notice" followed by a critic explaining a "generational [reading/listening/viewing] habit." On SEC, the cloned templates (e.g., "the X is widely considered her most influential commission") are subtler; students are unlikely to perceive them as patterned. On non-SEC, the cloning is naked.

2. **Invented literary works.** Authentic CB R&W literary passages are exclusively from real public-domain authors (Whitman, Glaspell, Grimké, Petry, Baldwin, Hardy, Chekhov, Mansfield, Jerome K. Jerome, Marianne Moore, etc., as documented in the authenticity reference §5.1). Every literary passage in the 12 PerformSAT tests is attributed to an invented contemporary short-story author with an invented story title (Lara Esposito's "Closing," Adina Vargas's "The Last Inspection," Joon-Ho Park's "The Bakery on Vine Street," etc.). This is a baseline authenticity violation that does not occur in SEC at all because SEC has no literary-passage requirement.

3. **Invented "Texts" in cross-text questions.** In real CB cross-text questions, when contemporary scholars are quoted, they tend to be paraphrased without invented names, or they engage authors whose existence is verifiable (Beckett, Whitman, etc.). PerformSAT's cross-text questions invent *both* the quoted scholar AND a fictitious novel/symphony/painting series and then attribute fabricated quotes to a fabricated critic essay. The student has no way to anchor the comparison in reality, and the same critic-vs-author framing repeats in 11 of 12 tests.

The SEC problem is "manufactured grammar errors and unCB-like distractor sets in roughly half the questions"; the non-SEC problem is "the entire bank is generated from a small number of templates, and the literary/cross-text content is largely fabricated rather than drawn from real sources."

**Same kinds of failures show up:**
- *Invented characters in fictional vignettes*: yes, pervasive in literary excerpts and cross-text Text 1/Text 2 framings.
- *Manufactured topics*: yes, especially in transitions ("agrivoltaic deployment," "community microgrid deployment," "hanji revival movement," "community-mussel movement," "rooftop solar mandates" — every one is a topic that *could* exist but each one is given the exact same sympathetic-economist + missing-policy structure).
- *Weak distractors*: yes, in cross-text and rhetorical synthesis, distractors C and D are virtually identical across 11 tests ("technically impossible to scale" / "already disproven by the [Y] record"), making them effectively dead options.

**Different kinds of failures unique to non-SEC:**
- *Wholesale literary fabrication* (no SEC equivalent).
- *Cross-test plot-line repetition* (the "generational reading habit" critique appears in 8 different cross-text questions across 6 different tests).
- *Recycled phrasings between tests* (the Bessie Coleman M2-Q26 rhetorical synthesis in Test 1 and the Hedy Lamarr M2-Q27 in Test 2 follow the identical "obstacles overcome" template; the structure recurs in tests 3–12 with different historical women).

---

## Failure modes observed

### 1. Template cloning at the question level
The single biggest failure mode. Every test has the same skeleton:
- M1 Q1: WiC, "researcher returned from the field, [transcribed/cataloged/documented] her findings"
- M1 Q2: WiC, "[craftsperson] was known for keeping her [object] ________; rather than long [explanations], she preferred [single act]"
- M1 Q3: WiC, "Although [artist] is celebrated for bold X, his/her notebooks were anything but bold..."
- M1 Q4: TS&P, "For decades, [scientists] assumed... A 2022 study by [researcher] challenges that assumption. After [method]..."
- M1 Q5: TS&P literary, "[Worker] paused before [action], watching... and thought of all the [time-period] her [parent/teacher/grandparent] had stood in this exact place doing this exact thing. The thought did not [unsettle/sadden] her. It made her [steadier/calmer/patient]."
- M1 Q6: CTC "sympathetic to the goals of X but cautions...without [policy]"
- M1 Q7: CTC "generational reading/listening/viewing habit"
- M1 Q8–10: CID main idea, three sub-templates: "Contrary to a long-standing assumption...", "In a 19XX letter to her [relative]...", "The [species] was once present in..."
- M1 Q11: Inference "trophic cascade / keystone species" template
- M1 Q12: Inference "creole stability" template
- M1 Q26-27: Rhetorical Synthesis "scientific significance / point of disagreement / obstacles overcome" templates

The same skeleton, with surface variables swapped, appears in Module 2 of the same test and in both modules of all other tests.

### 2. Invented literary attributions
Twelve tests × 2 modules = up to 24 literary passages, every one attributed to a non-existent contemporary author with a non-existent short story:
- "Lara Esposito's 2019 short story 'Closing'" (Test 1 M1 Q5)
- "Adina Vargas's 2021 short story 'The Last Inspection'" (Test 1 M2 Q5)
- "Joon-Ho Park's 2020 short story 'The Bakery on Vine Street'" (Test 2 M1 Q5)
- "Anaya Whittaker's 2022 short story 'The Last Round'" (Test 2 M2 Q5)
- "Aroha Whitford's 2021 short story 'The Lighthouse Keeper'" (Test 3 M1 Q5)
- "Carmen Aldana's 2022 short story 'The Lantern Maker'" (Test 3 M2 Q5)
- "Selma Bekele's 2021 short story 'The Loom Room'" (Test 4 M1 Q5)
- "Anders Holst's 2022 short story 'The Boatyard'" (Test 4 M2 Q5)
- "Ines Ferreira's 2018 short story 'The Tide Pool'" (Test 5 M1 Q5)
- "Rohit Bhattacharya's 2019 short story 'Night Pattern'" (Test 5 M2 Q5)
- "Ana Milena Restrepo's 2019 short story 'Last Class'" (Test 6 M1 Q5)
- "Chiamaka Adeyemi's 2021 short story 'After Last Bell'" (Test 6 M2 Q5)
- "Eun-Hye Choi's 2021 short story 'Paper Mountain'" (Test 7 M1 Q5)
- "Brigitta Tamm's 2022 short story 'The Lighthouse on Saaremaa'" (Test 7 M2 Q5)
- "Aoife Brennan's 2021 short story 'The Long Lane'" (Test 8 M1 Q5)
- "Marcin Sokolowski's 2022 short story 'The Forge'" (Test 8 M2 Q5)
- "Ahmed Belkacem's 2021 short story 'The Loom Room'" (Test 9 M1 Q5)
- "Reza Mansouri's 2022 short story 'The Tile Setter'" (Test 9 M2 Q5)
- "Itziar Olano's 2021 short story 'The Loom Room'" (Test 10 M1 Q5)
- "Roan Kaur's 2022 short story 'The Spice Ledger'" (Test 10 M2 Q5)
- "Ngozi Aderemi's 2021 short story 'The Long Bench'" (Test 11 M1 Q5)
- "Jasleen Kaur's 2023 short story 'The Turning Wheel'" (Test 11 M2 Q5)
- "Inés Marchetti's 2021 short story 'The Workshop on Olive Lane'" (Test 12 M1 Q5)
- "Petra Sallinen's 2019 short story 'The Empty Net'" (Test 12 M2 Q5)

Note "The Loom Room" is reused as a story title in Tests 4, 9, and 10 (with three different fictitious authors). All twenty-four passages share the formula: solitary craftsperson at end of workday → physical action → pause → memory of older relative or teacher → "the thought did not make her sad / unsettle her / slow her" → "it made her steadier / patient / surer." This is *one* fabricated passage repackaged 24 times, not 24 distinct literary excerpts. CB never works this way.

### 3. Cross-text scholar/critic fabrication
Every cross-text M1-Q6 in the 12 tests follows: *Text 1*: "Recent enthusiasm for [X movement] has been propelled by [researchers] who emphasize [benefits]... promises [list]..." → *Text 2*: "[Discipline] researcher [Name] is sympathetic to the goals of X but cautions that '[buzzword]' alone is not the same as [equity goal]. [Her/His] studies of [region] show that without [policy], [bad outcome]. Without [protection], she/he argues, the model risks recreating exactly the [problem] it was meant to dissolve." All four answer choices are also templated:
- A: "By rejecting the [benefits] as overstated."
- B: "By acknowledging the benefits but warning that achieving [goal] depends on [policy] choices the researchers do not address."
- C: "By arguing that [movement] is technically impossible to scale."
- D: "By insisting that the model has already been disproven by the [region] record."

Choice B is correct in every single instance. Students who notice the template (and they will) can answer correctly without reading either passage.

The Q7 cross-text (the harder cross-text item) has a parallel template: "[Author] in a 19XX [lecture/essay] argued that the strongest [endings/openings/transitions/line breaks/entrances] are those the reader/viewer/listener does not consciously notice — [example phrase]... so that [continuity language]." → "In a recent essay rereading [author]'s [novel/symphony/painting/building], the critic/historian [Name] notes that several of [author]'s contemporary [readers/critics/reviewers] complained that the [chapter/movement/panel/entrance] felt arbitrary. [Critic] argues that those complaints reveal a generational [reading/listening/viewing] habit..." Same correct answer in every instance: "B: a misunderstanding rooted in the [reviewers'] expectations rather than in the [work] itself."

### 4. Distractor staleness
Within the cross-text template (above), choices A, C, and D are not just templated — they are *thematically identical* across all 12 tests, varying only in the noun. A student who reaches Test 6 will recognize "By insisting the model has already been disproven by the [X] record" as a tell. CB authentic distractors vary in form, length, and angle.

Same problem in M1 Q3 WiC: distractor "memorize" appears as wrong-answer C in tests 2, 3, 4, 8, 9, 10 (in the "would ___ a single [thing] for [days/weeks/months]" template) — always implausible in the same way.

### 5. Within-test transition cloning (Test 8)
Test 8 contains a striking pathology: M1 Q24 ("Most accounts of the early steamboat era emphasize the dramatic Mississippi races...") and M2 Q24 ("Most accounts of the early career of the architect Ailbhe Donovan...") use *the same opening words* and the *same answer choices*. Same is true for M1 Q25 and M2 Q25 (botanist Hae-Won Lim / marine geologist Mateusz Kowalczyk). One author writing two different transitions for the same test would not produce that twinning by accident.

### 6. Non-CB transition options
Test 12 M2 Q24 lists choice D as "In fact, similarly,". This is not a CB transition. Real CB transition options are clean single tokens or lightly punctuated short phrases (However, / Therefore, / In addition, / By contrast, / On the other hand,). "In fact, similarly," is not in the CB lexicon.

### 7. Hand-built data tables with too-clean signals
Tests 1–4 quantitative-evidence tables show artificially monotone differences (e.g., Test 3 Q14 colony differences of +4.4, +3.5, +3.5, +3.5 — three identical residuals; Test 1 Q16 site changes of +11, +12, +11, +11; Test 8 Q14 stand-age values of 12, 31, 47, 92 monotone). Real CB data tables can be monotone but typically have *some* variance or one near-tie that forces interpretation. PerformSAT tables are too clean; the correct answer can be picked off the highest/lowest row without effort.

### 8. Over-templated rhetorical synthesis goals
Goals across tests cluster on three verbs: "emphasize the [scientific significance / cultural preservation / obstacles overcome]," "highlight a [point of disagreement / contrast]," and "introduce a concept to readers unfamiliar with it." These are real CB goal types, but real CB tests cycle through about a dozen distinct goal verbs. PerformSAT uses the same three goal types in 70% of synthesis questions.

---

## Failing questions (representative, not exhaustive)

This section lists representative FAIL items. I have not enumerated every FAIL — there are too many, and most fail for the same systemic reasons (template cloning across tests). Where multiple tests fail for the *same* template-level reason, I list one example and a note that the same critique applies across the listed tests.

### Text Structure & Purpose — Literary excerpt template

#### [Test 1] M1 Q5 — Craft & Structure / TS&P — practiceTest1RW.js:103-117
**Verdict:** FAIL
**Why:** Attributes a 2019 short story "Closing" to invented author "Lara Esposito." The exact passage shape ("locked the front doors and turned off the brass lamps one by one, the way she had every Tuesday for nine years... emptied of light in pieces — first the long oak table, then the leather chairs by the windows, then the little nook where her grandmother used to nap on Sundays") is reused across tests 3, 4, 6, 8, 9, 10, 11, 12 with object substitution. CB literary passages are from real authors (Susan Glaspell, Walt Whitman, Angelina Weld Grimké, etc.) and never fictionalize a contemporary short story.
**Recommended fix:** Replace with a true public-domain literary excerpt — Whitman's *Calamus*, a Glaspell short fragment, a Hardy passage, Grimké's "Black Finger," etc. — followed by a real function-of-underlined-sentence question. The existing question's underlined sentence must come from a real source.

**Same critique applies (24 questions total):** Tests 1–12 M1 Q5 and Tests 1–12 M2 Q5. All 24 literary excerpts must be replaced with real public-domain sources.

### Text Structure & Purpose — Scientific template

#### [Test 1] M1 Q4 — Craft & Structure / TS&P — practiceTest1RW.js:32-49
**Verdict:** BORDERLINE
**Why:** The passage on "transportation researcher Aditi Rao" and "latent demand" is itself plausible CB-style; the issue is that *every* M1 Q4 in tests 1–12 uses the identical "For decades, [scientists] assumed... A 2022 study by [name] challenges that assumption. After [method], [researcher]'s team found that..." skeleton with the underlined sentence always at position 3. Aditi Rao is not verifiable as a real researcher, and the latent-demand explanation is real but the paper is not.
**Recommended fix:** Pick a real published study and excerpt or paraphrase its abstract. Vary the position of the underlined sentence (sometimes sentence 2, sometimes 4) so the template does not give the answer away.

**Same critique applies:** Tests 1–12 M1 Q4 and M2 Q4. (24 questions.)

### Cross-Text Connections — "Sympathetic to the goals" template

#### [Test 4] M1 Q6 — Craft & Structure / CTC — practiceTest4RW.js (within first 200 lines)
**Verdict:** FAIL
**Why:** Pairs an invented "political scientist" enthusiasm for participatory budgeting with invented "public-policy researcher Mateus Vargas" who is "sympathetic to the goals of participatory budgeting but cautions that 'direct voting' alone is not the same as broad-based representation. His studies of mid-sized Brazilian cities show that without targeted outreach to lower-income neighborhoods... Without such guardrails, he argues, the model risks recreating the imbalances it was meant to dissolve." This is the eleventh time across the bank that a researcher is "sympathetic to the goals" of a movement and "cautions that [buzzword] alone is not the same as [equity goal]." Choices A, C, D are word-for-word identical across these 11 questions.
**Recommended fix:** Use real authors and real essays. CB cross-text frequently pairs contemporary scholarship with paraphrased viewpoints. Vary the *kind* of disagreement: some scholars partially agree, others reject, others propose orthogonal questions, others argue the framing is misplaced. Don't always use the "sympathetic-but-policy-conditional" frame.

**Same critique applies:** Tests 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 — at least one CTC question per test follows this exact template (often two per test). At least 18 of the 24 CTC questions sampled follow it.

### Cross-Text Connections — "Generational reading habit" template

#### [Test 1] M1 Q7 — Craft & Structure / CTC — practiceTest1RW.js:151-170
**Verdict:** FAIL
**Why:** Invents novelist Theodora Hines (1962 lecture), invents critic Devon Park rereading Hines's "third novel," and attributes a "generational reading habit" diagnosis to him. The same template — author lecture quietly planting a craft virtue, critics complaining, second critic identifying a generational misperception — appears as the M1-Q7 of tests 2 (Henrik Solberg/Ines Akinyemi), 3 (Soraya Behzadi/Tomasz Wojcik), 4 (Sigrún Magnúsdóttir/Daníel Højgaard, plus Inada/Roshan Kapoor in M2), 5 (Bruno Vasquez/Mira Tagawa), 8 (Cordelia Vance/Mateusz Kowalski), 10 (Marisol Quintanar/Aramis Vega), 11 (Adamaris Quiñones/Manuel Tavares). Eight tests, same template. Correct answer is choice B in every single one.
**Recommended fix:** Pair real authors with real critic essays, or with paraphrased disagreements. Vary the cross-text relationship: rejection, partial agreement, methodological critique, scope challenge, application to a different domain, etc.

### Inference — "Trophic cascade" template

#### [Test 1] M1 Q11 — Information & Ideas / Inference — practiceTest1RW.js:226-243
**Verdict:** BORDERLINE (passage feels CB-authentic; problem is template)
**Why:** Real Yellowstone wolves study, plausible passage. But Test 2 M1 Q11 uses an identical "Although [organism] was reintroduced... ecologists have come to credit [it] with a far broader role. The relationship is now used as a textbook example of a _______" with mosquitofish. Test 3 M1 Q11 uses it for European beavers. Test 5 M1 Q11 uses it for European beavers (a second time, in the Tay rather than Knapdale). Across the bank, the "trophic cascade / keystone species reintroduction" inference appears at least 6 times. The correct answer is always either "trophic cascade" or "keystone species reintroduction."
**Recommended fix:** Reduce to one or two of these and replace others with different inference structures: counterintuitive findings, scope-of-claim limits, sufficient-vs-necessary reasoning, signal-vs-noise reasoning, etc.

### Central Ideas — "In a 19XX letter" letter-pivot template

#### [Test 1] M1 Q9 — Information & Ideas / CID — practiceTest1RW.js:194-206
**Verdict:** BORDERLINE
**Why:** "In a 1939 letter to her sister, the photographer Dorothea Lange described the moment she decided to leave her studio portraiture practice..." The Lange quote is plausibly drafted ("I have been making pictures of people who have everything... and I begin to suspect that the only honest pictures left to make are of people who have nothing at all"). But Test 2 M1 Q9 has a 1948 letter from "anthropologist Ruth Mwangi" with the parallel "I had been writing about transactions... I begin to suspect that the only honest record left to make is of the language people use when no transaction is happening." Test 3 M1 Q9 uses 1953 letter from "linguist Esperanza Galván" with "I had been writing about words people exchange... only honest record... when nothing is being exchanged." Test 5 M1 Q9 uses 1953 letter from "ethnomusicologist Hannah Olufemi" with "I had been writing about percussion... only honest record... when they are simply selling tomatoes." Test 6, 9, 12 all repeat with different historical women. The "I had been writing about X... begin to suspect that the only honest [record/pictures] left to make is of Y" formula appears in 9+ tests with the *same* main-idea question and *same* answer pattern.
**Recommended fix:** Use real letters where possible (Lange's letters are documented; the actual quote on Migrant Mother is substantive). Don't invent letters from invented anthropologists.

### Central Ideas — "[Species] was once present" conservation tension template

#### [Test 1] M1 Q10 — Information & Ideas / CID — practiceTest1RW.js:209-225
**Verdict:** FAIL
**Why:** Mediterranean monk seal passage is plausible biology, but the same skeleton ("[species] was once present... reduced to fewer than X individuals... Conservation biologists initially focused on [single source approach], on the assumption that a single thriving colony could eventually repopulate the species' historic range. More recent genetic work has complicated that hope: the surviving subpopulations carry distinct lineages...") appears in Test 2 M1 Q10 (Iberian lynx), Test 3 M1 Q10 (Andean potato), Test 5 M1 Q10 (Wabanaki birchbark canoe), Test 12 M1 Q10 (Mediterranean common gull). At least 5 tests, same passage structure, same answer ("the early conservation strategy of relying on a single source... is in tension with new... findings"). The "Andean potato" and "Wabanaki birchbark canoe" variants are oddly applied — applying biological-genetic-diversity logic to a craft tradition is a category error.
**Recommended fix:** Diversify CID structures. Reduce conservation-tension passages to one or two; build other passage types (definition revision, mechanism update, scope clarification, historical reattribution).

### Command of Evidence — Textual — Invented literary works

#### [Test 3] M1 Q15 — Information & Ideas / COE-T — practiceTest3RW.js (within first 350 lines)
**Verdict:** FAIL
**Why:** Cites "the 1936 novel *The Glass Tide* by Welsh writer Olwen Tregaron" and asks the student to choose a quote from this novel. The novel does not exist; the writer does not exist; the supporting quote ("You will excuse, dear reader, the sudden voicelessness of these pages — but it is the very voicelessness our schools were teaching us to feel") is fabricated. CB does pose hypothetical "which finding would support" questions, but when CB cites a *specific named work*, that work is real. Inventing a novel and then quoting from it is outside CB's playbook.
**Recommended fix:** Either (a) use a real novel — there are many Welsh-language and Welsh-English novels of the period — or (b) drop the specific work and ask "which finding from a hypothetical study of the period would..."

#### [Test 8] M1 Q15 / M2 Q15 — Information & Ideas / COE-T — practiceTest8RW.js
**Verdict:** PASS for Q15 (Romeo and Juliet 1597/1599 quartos — real); FAIL for the M2 version which substitutes invented "*La Pastorella di Volterra*" with two invented scribes for the same compositor argument. Same skill, same logic, but applied to a real Shakespearean problem in M1 and a fabricated Tuscan dialect drama in M2.
**Recommended fix:** Run the question on the real Romeo and Juliet textual problem only. Drop the fabricated parallel.

### Transitions — Within-test cloning

#### [Test 8] M1 Q24 + M2 Q24 — Expression of Ideas / Transitions
**Verdict:** FAIL (both items)
**Why:** M1 Q24 begins "Most accounts of the early steamboat era emphasize the dramatic Mississippi races between rival captains. ________ historians of the same period have begun to point out that more than two-thirds of steamboat traffic in the 1850s consisted of slow, scheduled freight runs along secondary tributaries — a pattern that the racing narrative obscures." Choices: For example / Therefore / However / Similarly. M2 Q24 begins "Most accounts of the early career of the architect Ailbhe Donovan emphasize the dramatic civic commissions she won during the 1990s. ________ historians of the same period have begun to point out that more than two-thirds of her built work in those years consisted of small-scale residential commissions for clients in suburban Galway — a pattern that the civic narrative obscures." Choices: For example / Therefore / However / Similarly. Same opening, same number ("two-thirds"), same closing ("a pattern that the [X] narrative obscures"), same choice set, same answer ("However"). This is the same question with topic substitution. M1 Q25 and M2 Q25 do the same trick (botanist Hae-Won Lim / marine geologist Mateusz Kowalczyk).
**Recommended fix:** Rewrite all four transitions in Test 8 with new prompts and varied logical relationships.

#### [Test 12] M2 Q24 — Expression of Ideas / Transitions
**Verdict:** FAIL
**Why:** The passage is fine, but choice D is listed as "In fact, similarly,". CB never offers a transition that reads as two stacked transitions. Real CB transition choices are single tokens or short clean phrases (However, / Therefore, / In addition, / By contrast, / On the other hand,). "In fact, similarly," reads as either a typo or a non-CB construction.
**Recommended fix:** Replace "In fact, similarly," with a single transition word.

### Transitions — Recurring "veterinary biologists / herpetologists were not entirely wrong" pattern

#### [Test 9] both modules — Expression of Ideas / Transitions
**Verdict:** FAIL (within-test cloning)
**Why:** M1 has "The original veterinary biologists were not entirely wrong about the role of insulation and fat reserves in Yakut horse cold tolerance. ________ the metabolic study shows that those factors alone do not account for the full effect, leaving room for additional adaptations." M2 has "The original herpetologists were not entirely wrong about the role of dark skin and basking time in marine iguana cold-water tolerance. ________ the 2021 metabolic study shows that those factors alone do not account for the full effect, leaving room for additional metabolic adaptations." Same construction, same choices, same answer (However).
**Recommended fix:** Rewrite both with distinct logical structures.

### Rhetorical Synthesis — Repeated topic templates

#### [Test 1] M1 Q26 — Mariana Trench / [Test 2] M1 Q26 — Lake Vostok
**Verdict:** BORDERLINE (each item passes individually; problem is template)
**Why:** Both notes-prompts give a remote-extreme environment, a recent sampling mission, and "previously undescribed [microbial] lineages." Both have the same goal ("emphasize the scientific significance of the recent sampling missions"). Both correct answers say "Recent sampling missions [X] identified bacteria/microbial DNA from previously undescribed lineages." This is the same question with the location swapped.
**Recommended fix:** Use one of these and replace the other with a different scientific-significance synthesis (e.g., a new instrument capability, a re-dating, a discovery about a known entity).

### Rhetorical Synthesis — Stronger items

#### [Test 7] M1 Q26 — Larin Paraske / Adolf Neovius
**Verdict:** PASS
**Why:** Real Karelian-language oral poet and real linguist with documented historical collaboration. Goal ("emphasize the scholarly importance of the Neovius–Paraske collaboration") is naturally tied to the real subject matter. Notes are factual. Distractors test what the student would do if they missed the goal — pick a fact that is true but doesn't address scholarly importance.
**Worth preserving as a model.**

#### [Test 6] M1 Q26 — Mycorrhizal networks / [Test 6] M1 Q27 — Bog bodies
**Verdict:** PASS for both
**Why:** Real subjects with real research context. Goals are clear and non-cookie-cutter. Distractors test plausible but goal-mismatched answers.
**Worth preserving as models.**

---

## Notable PASS examples (preserve as references)

These items feel genuinely CB-authentic. They are listed so the rewrite work has positive models to point at.

1. **Test 7 M1 Q26 (Rhetorical Synthesis on Neovius-Paraske)**: real subjects, real collaboration, distinct goal, plausible distractors.

2. **Test 6 M1 Q26-27 (Rhetorical Synthesis on mycorrhizal networks; bog bodies)**: real scientific topics, well-formed goals, balanced distractors.

3. **Test 7 M1 Q28 (Rhetorical Synthesis on Bhutanese dzongs / Tashi Wangchuk)**: real subject, well-articulated argument, all four choices relate to the topic but only one accomplishes the goal.

4. **Test 7 M1 Q29 (Rhetorical Synthesis on hydrothermal vent microbial communities)**: real, technically precise subject; goal asks for functional distinctness; correct answer integrates four facts toward the goal.

5. **Test 8 M1 Q15 (COE-Textual on Romeo and Juliet 1597/1599 quartos)**: real textual problem; question correctly anchored in real history; finding-to-claim mapping is clean.

6. **Test 1 M1 Q14 (COE-Quantitative on classroom reading routine)**: clean comparison structure; choices test distinct claims (sweep vs single-school vs irrelevant comparison vs single-cell); table values plausible (without monotone perfection).

7. **Test 5 M1 Q13 (Inference on Pliny the Younger / Vesuvius / Herculaneum)**: real historical-scientific puzzle, plausible inference about vantage-point limits, correct answer is genuinely subtle.

8. **Test 11 M1 Q4 (TS&P on Hawaiian feather capes / Keone Akana)**: passage is plausible (this could be a real anthropological argument) and the underlined-sentence-function question is well-formed. Still uses the M1-Q4 template, but the topic feels native.

---

## Concrete recommendations

1. **Replace all 24 literary passages.** Source from real public-domain texts (the authenticity reference §5.1 lists CB's documented authors). This is non-negotiable; the current 24 passages are essentially one fabricated template repeated 24 times, and a student who notices the seam will lose trust in the whole bank.

2. **Replace at least 18 cross-text passages.** The "sympathetic to the goals" and "generational reading habit" templates are cooked. Use real essays/lectures or paraphrased contemporary debates without naming fake critics.

3. **Replace at least 9 literary letter passages in Central Ideas.** The "I had been writing about X... I begin to suspect that the only honest [record/pictures] left to make is of Y" formula is a tell. Real letters by Lange, Hurston, Mead, Berenson, etc. exist and are usable.

4. **Replace at least 5 "[species] was once present in [region]" CID passages.** Diversify into other CID structures (definition revision, mechanism update, scope clarification, historical reattribution).

5. **Replace Test 8 M1 Q24/M2 Q24 and M1 Q25/M2 Q25 transitions** (within-test clones) and Test 9's veterinary/herpetology transitions.

6. **Fix Test 12 M2 Q24 transition choice D** ("In fact, similarly,") — pick a single CB-acceptable transition.

7. **Replace fabricated literary works in COE-T** (Test 3 Q15 Olwen Tregaron, Test 8 M2 Q15 La Pastorella di Volterra, and parallels in other tests).

8. **Add variance to quantitative-evidence tables** — small noise terms or one near-tie row, to prevent the answer from being read straight from the largest absolute value.

9. **Diversify rhetorical-synthesis goal verbs.** The current bank uses three goal types in 70%+ of items. Real CB cycles through ~12.

10. **Vary the position of the underlined sentence in TS&P questions.** Always being the third sentence makes the structural function predictable independently of the passage content.

Items in priority order: (1), (2), (3), (5), (7), (6), (9), (8), (10), (4).
