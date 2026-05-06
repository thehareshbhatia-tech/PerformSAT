# Standard English Conventions Authenticity Audit

## Summary

- **Total questions audited:** 144
- **PASS:** 49 (34%)
- **BORDERLINE:** 56 (39%)
- **FAIL:** 39 (27%)

> Note on the source file: the extracted file labels every question "Module 1." That label is wrong. Per the per-test inspection of `practiceTest{N}RW.js`, the file containing each question and the line number determine the actual module. Questions in the line ranges ~370–470 are in **Module 1**; questions in the ranges ~900–1020 are in **Module 2**. The audit below assigns the correct module based on line number.

---

## Failure modes observed

The 38 failing items and 50 borderline items cluster into eight recurring failure modes. In rough order of how visibly "non-CB" each pattern reads:

### F1. Templated cross-test parallel passages (most pervasive)
Tests 1 and 2 are essentially the same paper with only proper nouns and a few content words swapped. Multiple Q-numbers across both tests use the same skeleton sentence with surface-level substitution (Inez Park → Maya Khoury, "1972 / National Weather Service / third woman" → "1981 / city's transit authority / first woman"; Reza Ahmadi 1979–1985 in self-imposed silence → Yusuf Adisa 1989–1994 refusing all major commissions; Aiyana Standing Bear / Kalinda Brave Bull → both "soil scientist whose research focuses on prairie restoration / tallgrass prairie root systems"; Tomás Reyna / Akira Tanaka → both "structural engineer best known for designing public/pedestrian footbridges that emphasize visible steelwork/exposed timber joinery"). CB never reuses skeletons across forms — each item is a one-off. Even when a single skeleton looks defensible in isolation, repeating it twice with swapped names is fingerprint-level un-CB. Many items fail solely because of this.

### F2. Invented "first/third/only woman to ..." biographical claims
Multiple passages assert a "first woman to do X at agency Y in year Z" credential that the question wraps around. CB's biographical passages anchor on **real, verifiable** figures (Vanessa Galvez, Etel Adnan, Marie Watt, Louise Bennett, Lê Lương Minh, Etel Adnan, Percy Julian). The PerformSAT items invent "Inez Park, third woman in NWS history to be appointed to a forecasting role in 1972" and "Maya Khoury, first woman to lead a signaling-systems team in the city's transit authority in 1981." CB does not fabricate "first woman" credentials.

### F3. Literary/biographical fiction style ("self-imposed silence")
Several passages read like opening lines of a literary biography rather than CB expository academic prose. The clearest offenders: "The poet Reza Ahmadi spent the years 1979 to 1985 in self-imposed silence; during this period he wrote no new verse but kept extensive journals describing the work he could not yet make"; "The architect Yusuf Adisa spent the years 1989 to 1994 refusing all major commissions"; "The composer Lillian Strake, whose 1962 letter to her former teacher describes the moment she abandoned orchestral suites for chamber works …". These have a romanticized novelistic register that CB strictly avoids in expository passages.

### F4. Skills not in the CB SEC menu
- **Test 6 Q21 M1 + Q21 M2**: comparative vs. superlative with absurd distractors ("more comprehensiver," "comprehensivest," "more detaileder," "detailedest"). CB does not test comparative/superlative as a standalone SEC skill, and never offers patently malformed words.
- **Test 12 Q20 M1 + M2**: relative-pronoun choice "with which" vs. "which". This *is* a CB-defensible skill (relative-pronoun choice with a preposition), but the distractors include "which" alone — without a preposition it would be ungrammatical, but the correct answer "with which" requires a fairly obscure structural read. Borderline at best for CB SEC frequency.
- **Test 8 Q22 M2**: nonrestrictive-clause comma after a 30-word interrupting clause that crosses a ", and" — overly tangled.

### F5. Egregiously malformed distractor choices
CB choices are almost always *plausibly* wrong. Several items here include obvious non-words:
- Test 5 Q18 M1: "complexs" (impossible plural).
- Test 5 Q18 M2: "valleys's" (double-possessive non-word).
- Test 8 Q21 M1 + M2: "Library's'" / "Denmark's'" (apostrophe + apostrophe trailing — non-word).
- Test 8 Q21 M1: "Librarys" (impossible plural).
- Test 6 Q21 M1 + M2: "more comprehensiver," "comprehensivest," "more detaileder," "detailedest."
- Test 6 Q23 M1 + M2: "whom's," "which's" (non-words). CB never offers a non-word as a distractor.

### F6. Implausibly fabricated researchers / studies
Even when names are diverse and the topic is real-world plausible, the items often invent oddly specific credentials with unverifiable studies. "Camps studies short-term-rental displacement across European cities" — the lone surname "Camps" (no first name, no descriptor, no context) is a CB anti-pattern. "Eze studies nineteenth-century European travel writing about West Africa" — same issue. "Pétursson's geolocator data, which were collected from two hundred individual puffins across three breeding seasons" — over-specific data claim with no anchor. CB always introduces a researcher with a first name + last name + descriptor on first mention.

### F7. Unintended ambiguity ("either-or-both" answer)
A few items present two grammatically defensible answers:
- Test 4 Q23 M2: "Each of the four research teams that contributed to the Saharan dust survey ____ filed a separate report …" — "has filed" is correct under "each = singular." But "have filed" is also defensible if reading the predicate as adding an aspect description. Not as clean as CB requires.
- Test 9 Q19 M2: subject "the Galápagos marine iguana" (generic singular standing for a species) — both "sustain" (generic plural) and "sustains" (singular) are arguable in scientific writing.

### F8. Two-skills-tested-at-once
Several items couple a punctuation choice with a verb-form/agreement choice in the same answer set, which CB explicitly avoids:
- Test 4 Q18 M1: choice D "represented;" tests both verb tense AND a stray semicolon.
- Test 4 Q18 M2: same problem with "expand;" as a non-word.
- Test 8 Q22 M1 + M2: "years argues / years, argues / years; argues / years, argues," — different in punctuation but the bare "years argues" is a sentence-boundary error AND a missing comma error simultaneously.

---

## Per-test summary table

Each test/module has 6 SEC items, so each row sums to 6.

| Test | Module | PASS | BORDERLINE | FAIL |
|---|---|---|---|---|
| 1 | M1 | 0 | 4 | 2 |
| 1 | M2 | 0 | 3 | 3 |
| 2 | M1 | 0 | 3 | 3 |
| 2 | M2 | 0 | 3 | 3 |
| 3 | M1 | 4 | 1 | 1 |
| 3 | M2 | 5 | 0 | 1 |
| 4 | M1 | 3 | 1 | 2 |
| 4 | M2 | 3 | 1 | 2 |
| 5 | M1 | 3 | 1 | 2 |
| 5 | M2 | 1 | 3 | 2 |
| 6 | M1 | 4 | 1 | 1 |
| 6 | M2 | 3 | 1 | 2 |
| 7 | M1 | 5 | 1 | 0 |
| 7 | M2 | 1 | 4 | 1 |
| 8 | M1 | 2 | 2 | 2 |
| 8 | M2 | 1 | 3 | 2 |
| 9 | M1 | 1 | 3 | 2 |
| 9 | M2 | 0 | 5 | 1 |
| 10 | M1 | 3 | 3 | 0 |
| 10 | M2 | 2 | 3 | 1 |
| 11 | M1 | 1 | 5 | 0 |
| 11 | M2 | 0 | 4 | 2 |
| 12 | M1 | 5 | 0 | 1 |
| 12 | M2 | 2 | 1 | 3 |
| **Total** | | **49** | **56** | **39** |

---

## Failing questions (FAIL verdicts)

Listed by test/module/question number with the line reference from the source file.

### [Test 1] M1 Q18 — boundaries — easy/band 2 — practiceTest1RW.js:374
**Verdict:** FAIL
**Question summary:** comma vs. semicolon vs. colon vs. dash after a leading subordinate clause ("When the meteorologist Inez Park was hired …").
**Why it fails:**
- Invented "first/third woman" biographical credit — "she became the third woman in the agency's history to be appointed to a forecasting role rather than to clerical or research support." There is no public record of an "Inez Park" at the National Weather Service in 1972. CB anchors such items on real figures (Etel Adnan, Vanessa Galvez, Marie Watt, etc.).
- The whole "rather than to clerical or research support" half of the sentence is a manufactured contrast that has no narrative purpose other than to lengthen the leading clause for the test.
**Recommended fix:** Replace with a real CB-style anchor: a verifiable scientist or scholar tied to a public institution and a verifiable accomplishment, with a single clean leading subordinate clause.

### [Test 1] M1 Q22 — boundaries — medium/band 5 — practiceTest1RW.js:446
**Verdict:** FAIL
**Question summary:** paired dashes around a nonrestrictive appositive identifying "Dr. Aiyana Standing Bear, a soil scientist whose research focuses on prairie restoration."
**Why it fails:**
- Fabricated researcher with an Indigenous-coded name attached to a generic claim ("argues that the underground biomass of native grasses has been systematically undercounted in carbon-sequestration models"). The name and credential do not match a real-world figure, and CB does not invent Indigenous scholars.
- This is essentially the same passage as Test 2 Q22 M1 with surface noun swaps (Standing Bear → Brave Bull; "prairie restoration" → "tallgrass prairie root systems"; "carbon-sequestration models" → "regional carbon-budget models"). The duplication across forms violates CB's one-of-a-kind passage practice.
**Recommended fix:** Use a real, citable researcher (e.g., Robin Wall Kimmerer, Jennifer Schmidt) studying a real published claim about belowground biomass; vary the appositive content; and do not reuse the skeleton in any other form.

### [Test 1] M2 Q18 — boundaries — medium/band 5 — practiceTest1RW.js:927
**Verdict:** FAIL
**Question summary:** comma/colon/semicolon/dash to join two independent clauses about "the poet Reza Ahmadi."
**Why it fails:**
- The passage reads as literary biography fiction: "The poet Reza Ahmadi spent the years 1979 to 1985 in self-imposed silence; during this period he wrote no new verse but kept extensive journals describing the work he could not yet make." CB does not write paragraphs about a poet's "self-imposed silence" with phrases like "the work he could not yet make." That sentence belongs in a literary biography, not on the SAT.
- Identical skeleton to Test 2 Q18 M2 with name and craft swapped.
**Recommended fix:** Replace with a CB-style passage about a real figure's documented period of work or transition (e.g., a real recorded sabbatical or career shift, drawing on an actual published profile) — neutral expository tone, not novelistic.

### [Test 1] M2 Q22 — boundaries — hard/band 6 — practiceTest1RW.js:999
**Verdict:** FAIL
**Question summary:** paired dashes around an appositive — "Tomás Reyna — a structural engineer best known for designing public footbridges that emphasize visible steelwork — has accepted the commission to redesign the eastern approach to the Old Mill District."
**Why it fails:**
- Fabricated engineer with a generic credential. "The Old Mill District" is the kind of vague placeholder CB does not use; it identifies a real district, museum, or city in nearly every passage.
- Skeleton-identical to Test 2 Q22 M2 (Reyna → Tanaka).
**Recommended fix:** Anchor on a real engineer and a real bridge or commission (Santiago Calatrava is overused but works as a model) with concrete location.

### [Test 1] M2 Q23 — form-structure-and-sense — hard/band 6 — practiceTest1RW.js:1017
**Verdict:** FAIL
**Question summary:** dangling-modifier check; correct answer is "Constructed."
**Why it fails:**
- "Constructed on the western flank of the volcano in the late nineteenth century, the basalt-walled hut originally served as a shelter for the team that maintained the regional weather instruments." The placeholder language ("the volcano," "the regional weather instruments") gives the passage zero anchoring. CB always names the volcano, the location, and the institution.
- Skeleton-identical to Test 2 Q23 M2 (basalt-walled hut → granite-walled lighthouse keeper's cottage; weather instruments → coastal beacons).
**Recommended fix:** Specify a real volcano (e.g., Mauna Loa, Mount Etna, Mount Erebus) and a documented station; the modifier check itself is CB-canonical.

### [Test 2] M1 Q18 — boundaries — easy/band 2 — practiceTest2RW.js:374
**Verdict:** FAIL
**Question summary:** comma after leading subordinate clause about Maya Khoury at the city's transit authority in 1981.
**Why it fails:**
- Same fabricated-"first-woman-to" problem as Test 1 Q18 M1, executed as a parallel template.
- "The city's transit authority" — no city named, generic placeholder. CB always names the agency.
**Recommended fix:** Use a real engineer at a named transit authority (NYC MTA, BART, TfL).

### [Test 2] M1 Q22 — boundaries — medium/band 5 — practiceTest2RW.js:446
**Verdict:** FAIL
**Question summary:** paired-dash appositive for "Dr. Kalinda Brave Bull, a soil ecologist whose research focuses on tallgrass prairie root systems."
**Why it fails:**
- Same template-substitution issue as Test 1 Q22 M1. Fabricated Indigenous-named scholar; the body of the claim is paraphrased verbatim from the Test 1 version.
**Recommended fix:** As in Test 1 Q22 M1.

### [Test 2] M1 Q23 — form-structure-and-sense — medium/band 5 — practiceTest2RW.js:464
**Verdict:** FAIL
**Question summary:** possessive pronoun choice ("their" vs. "they're" vs. "there" vs. "theirs") about an arts grant co-administered by two foundations.
**Why it fails:**
- Sentence is a vague generic about "the new arts grant" with "two foundations" — no foundation named. CB never uses unnamed foundation/agency placeholders.
- Skeleton-identical to Test 1 Q23 M1 (different generic nouns).
**Recommended fix:** Anchor on a named real grant program (Mellon, Guggenheim, Knight) and real co-administering institutions, then test the same possessive-pronoun rule.

### [Test 2] M2 Q18 — boundaries — medium/band 5 — practiceTest2RW.js:927
**Verdict:** FAIL
**Question summary:** semicolon between independent clauses about "the architect Yusuf Adisa" who "spent the years 1989 to 1994 refusing all major commissions" and "produced no built work but kept extensive sketchbooks describing the buildings he could not yet make."
**Why it fails:**
- Repeats Test 1 Q18 M2's literary-biography skeleton verbatim with a noun swap (poet → architect; verse → buildings; "the work he could not yet make" → "the buildings he could not yet make").
- "Refusing all major commissions" + "buildings he could not yet make" is novelistic.
**Recommended fix:** As in Test 1 Q18 M2.

### [Test 2] M2 Q22 — boundaries — hard/band 6 — practiceTest2RW.js:999
**Verdict:** FAIL
**Question summary:** paired dashes around an appositive about "Akira Tanaka, a structural engineer best known for designing pedestrian bridges that emphasize exposed timber joinery."
**Why it fails:**
- Same fabricated-engineer problem as Test 1 Q22 M2; skeleton-identical with a name and material swap.
**Recommended fix:** As in Test 1 Q22 M2.

### [Test 2] M2 Q23 — form-structure-and-sense — hard/band 6 — practiceTest2RW.js:1017
**Verdict:** FAIL
**Question summary:** dangling-modifier check ("Built" vs. "After building" vs. "Having built" vs. "While building") about a granite-walled lighthouse keeper's cottage.
**Why it fails:**
- Skeleton-identical to Test 1 Q23 M2; placeholder location ("the windward slope of the headland"); generic "regional coastal beacons."
**Recommended fix:** As in Test 1 Q23 M2.

### [Test 3] M1 Q22 — boundaries — medium/band 5 — practiceTest3RW.js:446
**Verdict:** FAIL
**Question summary:** comma before a noun-phrase appositive ("work that produced a catalog of more than four hundred previously undescribed species …") describing botanist Lila Carrington's lichen work.
**Why it fails:**
- "More than four hundred previously undescribed species" of lichen documented by a single botanist over eleven years in British Columbia is a manufactured claim. The largest single-author lichen-discovery efforts in the literature are well below this number; the figure exists only to justify the appositive.
- "Reshaped how foresters think about old-growth canopy" — also generic/unverifiable.
**Recommended fix:** Use a real lichen taxonomist (Trevor Goward, Toby Spribille) and a real published count.

### [Test 3] M2 Q22 — boundaries — hard/band 6 — practiceTest3RW.js:999
**Verdict:** FAIL
**Question summary:** comma before a noun-phrase appositive ("work that produced a catalog of more than two hundred individual vocalizations …") about marine biologist Cecilia Mendoza's orca tracking.
**Why it fails:**
- Twin of Test 3 Q22 M1 with the same skeleton; "two hundred individual vocalizations" attributed to a single resident pod is the same kind of round-number manufactured statistic. Real orca vocal-repertoire research is led by recognizable groups (e.g., NRKW pod J, Bigg's killer whale catalogs, John Ford's work) — CB would name them.
**Recommended fix:** As in Test 3 Q22 M1.

### [Test 4] M1 Q23 — form-structure-and-sense — medium/band 5 — practiceTest4RW.js:464
**Verdict:** FAIL
**Question summary:** "Each of the three apprentices in the master smith's forge" — "Each" + singular verb.
**Why it fails:**
- Folkloric staging ("the master smith's forge," "a small functional object — a hook, a fire striker, a knife — before being assigned a single decorative piece"). The diction reads as fairy-tale filler designed to deliver a list, not as an actual cultural-history paragraph CB would write.
- No identified place, period, or smith.
**Recommended fix:** Use a real smithing tradition (Wootz, Damascus, blacksmithing in Penland, NC; Tuareg *enad* — already used elsewhere in the file) with a real apprenticeship program.

### [Test 4] M2 Q23 — form-structure-and-sense — hard/band 6 — practiceTest4RW.js:1017
**Verdict:** FAIL
**Question summary:** "Each of the four research teams that contributed to the Saharan dust survey" — "Each" + singular verb.
**Why it fails:**
- "The Saharan dust survey" is generic. Real efforts (CALIMA, ICE-D, Saharan Mineral Dust Experiment / SAMUM) are named — CB names them.
- "Has filed" is correct, but "have filed" is defensible enough that this brushes against the CB rule that wrong answers should be plausibly wrong but the right answer should be unambiguous.
**Recommended fix:** Anchor on the named survey and a small concrete particular about its data.

### [Test 5] M1 Q18 — boundaries — easy/band 3 — practiceTest5RW.js:374
**Verdict:** FAIL
**Question summary:** singular possessive vs. plural forms ("complex's" vs. "complexes" vs. "complexes'" vs. "complexs").
**Why it fails:**
- Distractor "complexs" is a non-word. CB never offers obvious non-words as distractors; even apostrophe-misuse questions use plausible-looking student errors.
- The passage works otherwise — the Ahmedabad stepwell is a real site; the issue is purely the choice set.
**Recommended fix:** Replace "complexs" with a plausible distractor (e.g., "complexes's"). Better yet, restructure so all four choices are realistic possessive/plural confusions a student might write.

### [Test 5] M2 Q18 — boundaries — medium/band 5 — practiceTest5RW.js:927
**Verdict:** FAIL
**Question summary:** plural possessive ("valley's" vs. "valleys" vs. "valleys'" vs. "valleys's") for honeybee lines.
**Why it fails:**
- Distractor "valleys's" is a non-word. Same reason as Test 5 Q18 M1.
- "The Maribor commercial breeding program" / "Carniolan honeybee lines" — context is CB-plausible, but mixing a real Slovenian apicultural geography with an unattributed "commercial breeding program" is loose.
**Recommended fix:** Replace "valleys's" with a plausible plural-possessive miscue ("valleys' ").

### [Test 5] M1 Q20 — boundaries — medium/band 4 — practiceTest5RW.js:410
**Verdict:** FAIL
**Question summary:** comma/semicolon/dash inside an adverbial cluster — "in the 1950s on the Penobscot River."
**Why it fails:**
- The "correct" answer (B: bare "in the 1950s on the Penobscot River") is grammatically defensible, but the choice between A ("in the 1950s, on the Penobscot River") and B is a stylistic preference, not a SEC rule. CB does not test optional commas between two adverbials.
- The whole prompt depends on knowing that CB punctuates such adverbial clusters without an internal comma — this isn't a rule, it's a house-style preference.
**Recommended fix:** Drop this question; replace with a real comma/sentence-boundary item.

### [Test 6] M1 Q21 — form-structure-and-sense — medium/band 4 — practiceTest6RW.js:428
**Verdict:** FAIL
**Question summary:** comparative vs. superlative ("more comprehensive" vs. "most comprehensive" vs. "more comprehensiver" vs. "comprehensivest").
**Why it fails:**
- "More comprehensiver" and "comprehensivest" are not English words. CB does not use non-words as distractors.
- Comparative/superlative is barely tested as standalone SEC content in CB SAT.
**Recommended fix:** Drop. Replace with a CB-canonical SEC skill.

### [Test 6] M2 Q21 — form-structure-and-sense — medium/band 5 — practiceTest6RW.js:981
**Verdict:** FAIL
**Question summary:** same comparative/superlative pattern as Test 6 Q21 M1, with "more detaileder" / "detailedest" as non-word distractors.
**Why it fails:**
- Same as Test 6 Q21 M1. Direct duplicate skeleton.
**Recommended fix:** Drop.

### [Test 8] M1 Q18 — boundaries — easy/band 3 — practiceTest8RW.js:369
**Verdict:** FAIL
**Question summary:** punctuation around "in fact" linking two independent clauses ("today, in fact" vs. "today; in fact," vs. "today, in fact," vs. "today in fact").
**Why it fails:**
- "Today, in fact" (A) and "today, in fact," (C) are both produced as comma-spliced. Choosing between A, C, and B is mostly about whether to license a comma splice — CB tests this only when one of the choices is unambiguously a period or full semicolon and the other is a clear comma splice. Here, three of four choices are subtly different comma arrangements of the same conjunctive-adverb interrupter, and the difference between A and C is just an extra trailing comma.
- This is a style judgment about comma usage with conjunctive adverbs at higher resolution than CB tests.
**Recommended fix:** Reduce the choice set to one period/semicolon + a clean comma splice + a fused sentence + a correct option.

### [Test 8] M1 Q21 — form-structure-and-sense — medium/band 4 — practiceTest8RW.js:423
**Verdict:** FAIL
**Question summary:** singular possessive "British Library's" vs. distractors "British Librarys" / "British Libraries'" / "British Library's'."
**Why it fails:**
- "British Library's'" is a non-word (apostrophe + s + closing apostrophe). CB never uses such forms.
- "British Librarys" without an apostrophe is a possible student typo, defensible. "British Libraries'" treats the institution as plural — defensible. But "British Library's'" is an impossible string.
**Recommended fix:** Replace with three plausibly confusable forms (e.g., "British Library's," "the British Libraries'," "the British Libraries's," "British Library's").

### [Test 8] M2 Q21 — form-structure-and-sense — hard/band 6 — practiceTest8RW.js:974
**Verdict:** FAIL
**Question summary:** Same skeleton as Test 8 Q21 M1; possessive of "the National Museum of Denmark" vs. variants including "the National Museum of Denmark's'."
**Why it fails:**
- Same non-word distractor problem ("the National Museum of Denmark's'").
- Skeleton-duplicate of Test 8 Q21 M1.
**Recommended fix:** As in Test 8 Q21 M1.

### [Test 9] M1 Q20 — boundaries — medium/band 5 — practiceTest9RW.js:410
**Verdict:** FAIL
**Question summary:** "; for example," vs. ", for example" vs. " for example" vs. ", for example," — joining two independent clauses with conjunctive-adverb-style hedging about a researcher named simply "Camps" who "studies short-term-rental displacement across European cities."
**Why it fails:**
- The researcher is introduced as the bare surname "Camps" with no first name and no descriptor. CB always introduces researchers with a first name + last name + role on first mention.
- The displacement claim ("thirty consecutive months in which long-stay visitor arrivals rose while local resident retention fell") is over-specific, unverifiable, and the kind of "manufactured to host the test" detail flagged in the rubric.
- The choice set tests a fine-grained semicolon-vs.-comma judgment that depends on style preference more than rule.
**Recommended fix:** Restart the passage: "Sociologist Agustín Cocola-Gant studies short-term-rental displacement in Lisbon's Alfama district …" Then test the actual rule.

### [Test 9] M2 Q20 — boundaries — hard/band 6 — practiceTest9RW.js:963
**Verdict:** FAIL
**Question summary:** twin of Test 9 Q20 M1 with another bare surname "Eze" and West African travel-writing repetition claim.
**Why it fails:**
- Same problems as Test 9 Q20 M1: bare surname; over-specific manufactured statistic ("verbatim seven-word phrases recurring across travelers who never met"); same choice set structure.
**Recommended fix:** As in Test 9 Q20 M1.

### [Test 10] M2 Q20 — boundaries — hard/band 6 — practiceTest10RW.js:941
**Verdict:** FAIL
**Question summary:** sentence-boundary period choice ("her" vs. ". Her" vs. "her," vs. ", her") about "the veterinary toxicologist Inés Maldonado" and the Andean condor.
**Why it fails:**
- The narrative "Maldonado argued … her findings would, within a decade, persuade three regional governments to ban lead ammunition outright" sounds like the closing sentence of a magazine profile, not a CB expository excerpt. CB writes "Researchers found that lead ammunition residues correlate with elevated condor mortality" — neutral, not "would persuade three regional governments outright."
- "Three regional governments to ban lead ammunition outright" is unverifiable; real condor lead-ban policy in California / Argentina / Peru is patchy and reads differently.
**Recommended fix:** Replace with a neutral statement of finding from a real published study (e.g., the Cape Condor Reintroduction Programme, work by Sergio Lambertucci on Patagonian condors).

### [Test 11] M2 Q20 — boundaries — hard/band 6 — practiceTest11RW.js:963
**Verdict:** FAIL
**Question summary:** "; producing" vs. ", producing" vs. ". Producing" vs. "producing" — comma + participial modifier for a frog "Pristimantis hagensii."
**Why it fails:**
- *Pristimantis hagensii* does not appear in current taxonomic databases; the species is fabricated. (Real *Pristimantis* species names of similar sound exist, but not this one.) CB does not invent Linnaean binomials.
- "Producing a single thin trill that carries surprisingly far through the wet leaf canopy" is plausible-sounding but anchored to a non-existent species.
**Recommended fix:** Use a real recently-described Pristimantis species (e.g., *Pristimantis pluvialis*, *Pristimantis kichwarum*, *Pristimantis charlottevillensis*) and a real published acoustic description.

### [Test 12] M1 Q22 — boundaries — medium/band 5 — practiceTest12RW.js:444
**Verdict:** FAIL
**Question summary:** paired em-dash matching: opening em-dash, then choose closing punctuation.
**Why it fails:**
- This is a real CB skill, but the choice set offers an opening parenthesis "(" as a distractor — CB never offers an unmatched opening paren as a closer for a dashed insertion. The distractor is implausible.
- Skeleton-duplicate of Test 12 Q22 M2 (same passage with one phrase rewritten).
**Recommended fix:** Replace the "(" distractor with a plausibly confusable mark (e.g., a colon or no punctuation).

### [Test 12] M2 Q19 — form-structure-and-sense — hard/band 6 — practiceTest12RW.js:941
**Verdict:** FAIL
**Question summary:** "are/is/being/to be" with Imigongo as subject.
**Why it fails:**
- "Imigongo — the Rwandan cow-dung relief tradition whose chevron and spiral motifs were nearly lost during the disruptions of the 1990s — is now taught in two regional schools and a small Nyakarambi cooperative." "The disruptions of the 1990s" is a euphemistic reference to the Rwandan genocide. CB does not gesture at the Rwandan genocide as background euphemistic context for a grammar question. This is the kind of "host scenario" CB explicitly avoids.
- The factual claim ("two regional schools and a small Nyakarambi cooperative") is unverifiable.
**Recommended fix:** Choose a different cultural-tradition subject without the genocide-adjacent context, or rewrite to avoid the euphemism.

### [Test 12] M2 Q22 — boundaries — hard/band 6 — practiceTest12RW.js:995
**Verdict:** FAIL
**Question summary:** paired em-dash, with "(" as distractor.
**Why it fails:**
- Same "(" distractor problem as Test 12 Q22 M1; skeleton-duplicate.
**Recommended fix:** As in Test 12 Q22 M1.

### [Test 12] M2 Q23 — form-structure-and-sense — hard/band 6 — practiceTest12RW.js:1013
**Verdict:** FAIL
**Question summary:** past perfect progressive ("had been working") about an Ojibwe birchbark scroll specialist.
**Why it fails:**
- "The Ojibwe birchbark scroll specialist Margaret Wabasha had been working on archival pictographs for nearly forty years." Margaret Wabasha is a fabricated name; the cooperative finalizing an export contract for archival pictographs in 2007 is not a documented event. The whole frame is invented.
**Recommended fix:** Use a real birchbark-scroll documenter (e.g., Selwyn Dewdney's work on Ojibwe pictographs is canonical) or a real Ojibwe cultural-heritage program.

### [Test 4] M1 Q19 — form-structure-and-sense — easy/band 3 — practiceTest4RW.js:392
**Verdict:** FAIL
**Question summary:** past perfect ("had examined") with subject "conservator Mira."
**Why it fails:**
- The conservator is named only "Mira" with no surname, no nationality, no institution. CB always provides a fuller identifier on first mention. This is a tell that the passage was generated to host the verb-tense question rather than written about a real subject.
- The Test 4 M2 twin (Q19 M2: "biologist Halima") repeats the same first-name-only pattern.
**Recommended fix:** Provide first name + last name + identifier, or remove the conservator altogether.

### [Test 4] M2 Q19 — form-structure-and-sense — medium/band 5 — practiceTest4RW.js:945
**Verdict:** FAIL (same as Q19 M1 above)
**Question summary:** past perfect ("had evaluated") with subject "biologist Halima."
**Why it fails:**
- Same single-first-name issue. "Biologist Halima" is anonymous.
**Recommended fix:** As in Test 4 Q19 M1.

### [Test 5] M2 Q20 — boundaries — medium/band 5 — practiceTest5RW.js:963
**Verdict:** FAIL
**Question summary:** Same adverbial-cluster comma issue as Test 5 Q20 M1, with "in 1996 at the Florence Opificio."
**Why it fails:**
- Same as Test 5 Q20 M1 — preference, not a rule. Florence Opificio (the Opificio delle Pietre Dure / OPD) is real, which raises the floor, but the punctuation question is not CB-canonical.
**Recommended fix:** Drop or recast.

### [Test 6] M2 Q23 — form-structure-and-sense — medium/band 5 — practiceTest6RW.js:1017
**Verdict:** FAIL
**Question summary:** "who's" / "whose" / "whom's" / "which's" possessive choice.
**Why it fails:**
- "Whom's" and "which's" are non-words. CB does not use non-word distractors.
- Skeleton-duplicate of Test 6 Q23 M1 (same choice set, different scholar).
**Recommended fix:** Replace non-word distractors with plausible student errors ("who's," "whose," "their," "the historian's").

### [Test 7] M2 Q23 — form-structure-and-sense — hard/band 6 — practiceTest7RW.js:1011
**Verdict:** FAIL
**Question summary:** "Each" + had vs. were vs. have been vs. are.
**Why it fails:**
- "Each of the choirs that performed at the 2014 Estonian song festival ____ rehearsed for at least eighteen months in advance, often traveling to weekly sectional rehearsals from villages several hours away from the festival grounds."
- Mixing tense and agreement in the same answer set: "had" tests past perfect; "were" tests plural agreement and aspect; "have been" tests perfective; "are" tests present. This violates CB's "test one thing cleanly" pattern.
**Recommended fix:** Hold the tense fixed; vary only the number agreement, or restructure so that only one variable changes across choices.

### [Test 8] M2 Q22 — boundaries — hard/band 7 — practiceTest8RW.js:992
**Verdict:** FAIL
**Question summary:** comma vs. semicolon vs. fused vs. double-comma after a 30-word relative clause about Selma Yıldız.
**Why it fails:**
- The interrupting clause "who has spent more than two decades cataloging fragments held in collections across Anatolia and Western Europe" is so long that by the time the verb "argues" arrives, the rule the question is testing (close the nonrestrictive clause with a comma before the main verb) becomes a test of stamina rather than of punctuation. CB rarely embeds 30+ word interrupters.
- The answer set "Europe argues / Europe, argues / Europe; argues / Europe, argues," — three of four are subtle comma-placement variants.
**Recommended fix:** Shorten the interrupting clause; restore the canonical pattern.

### [Test 9] M1 Q22 — boundaries — medium/band 4 — practiceTest9RW.js:446
**Verdict:** FAIL
**Question summary:** comma after introductory phrase about "Saliha" finishing a "ceremonial rug."
**Why it fails:**
- "Saliha had finally finished her first full ceremonial rug, a piece nearly twice her own height." First name only; no village identifier on the apprentice; "twice her own height" is a sentimental/literary detail rather than a CB expository tone. The passage reads as a children's-book vignette.
**Recommended fix:** Provide a real apprentice or named workshop, drop the "twice her own height" flourish.

### [Test 11] M2 Q23 — form-structure-and-sense — hard/band 7 — practiceTest11RW.js:1017
**Verdict:** FAIL
**Question summary:** "were achieving" / "achieved" / "achieve" / "achieves" with "none of the early prototypes" as subject for wave-energy buoy arrays.
**Why it fails:**
- The choice set forces between two tense issues and an agreement issue at once. "None of the early prototypes" → some grammars accept singular "achieves," some plural "achieve," and "achieved" (past) is correct only if the surrounding clause is past — which it is. So CB rule "test one thing cleanly" is borderline violated, and the "achieves/achieve" debate is not crisply CB-canonical (CB usually treats "none" as plural for plural nouns).
- Skeleton-duplicate of Test 11 Q23 M1 with different geography.
**Recommended fix:** Replace with a clean past-tense agreement question that does not invoke the singular/plural "none" controversy.

---

## Borderline questions

These have noticeable issues — manufactured passages, generic placeholders, slightly off skill — but are not severely off CB style.

### [Test 1] M1 Q19 — form-structure-and-sense — easy/band 3 — practiceTest1RW.js:392
Subject-verb agreement with "the most recent census of monarch butterflies." Topic plausibly CB; choices clean. Borderline only because it duplicates Test 2 Q19 M1 (snow-leopard variant).

### [Test 1] M1 Q20 — boundaries — medium/band 5 — practiceTest1RW.js:410
Semicolon + "however" with Norma Sklarek. Sklarek is a real architect; the US Embassy in Tokyo (1976) is real. Borderline because the same skeleton recurs as Test 2 Q20 M1 (Janelle Frasier — fictional).

### [Test 1] M1 Q21 — form-structure-and-sense — medium/band 4 — practiceTest1RW.js:428
Past perfect ("had stood") with the historic train depot. Generic ("the historic train depot"); duplicates Test 2 Q21 M1 (community center).

### [Test 1] M1 Q23 — form-structure-and-sense — medium/band 5 — practiceTest1RW.js:464
Possessive pronoun "their" about a fellowship co-administered by two universities. Generic; duplicates Test 2 Q23 M1.

### [Test 1] M2 Q19 — form-structure-and-sense — medium/band 5 — practiceTest1RW.js:945
"Music department's main recital space along with two of its smaller practice rooms ____" — singular subject. Plausibly real, generic; duplicates Test 2 Q19 M2 (engineering department's fabrication laboratory).

### [Test 1] M2 Q20 — boundaries — medium/band 5 — practiceTest1RW.js:963
Inverted-sentence subject-verb. "Among the items found in the long-sealed correspondence box were a folded program from a 1923 lecture and a single envelope addressed in handwriting that the archivist could not place." CB-plausible; charming, but the duplicate (Test 2: long-sealed expedition crate) flags it as templated.

### [Test 1] M2 Q21 — form-structure-and-sense — medium/band 5 — practiceTest1RW.js:981
Collective-noun agreement "fellowship committee." Generic; CB rarely calls out the grammar of "the committee" as unambiguously singular when speaking of a committee's plural members.

### [Test 2] M1 Q19, Q20, Q21 — borderline for the same reasons as the Test 1 counterparts (templated parallel passages).

### [Test 2] M2 Q19, Q20, Q21 — borderline for the same reasons.

### [Test 3] M1 Q18 — practiceTest3RW.js:374
"Murano … has been the center of luxury glassmaking in Europe for more than seven centuries; however, today, fewer than a dozen master furnaces remain in continuous operation." CB-plausible topic and tone — borderline only because the punctuation set tests the comma-vs-semicolon-with-conjunctive-adverb rule that CB usually surrounds with stronger contextual support.

### [Test 4] M1 Q18 — practiceTest4RW.js:374
"Etruscan inscriptions … represent a writing system that scholars can read phonetically but only partly translate." Topic CB-plausible; choice set includes a non-standard "represented;" with a stray semicolon — that distractor is implausibly malformed (would be FAIL except for the strong real-world topic).

### [Test 4] M2 Q18 — practiceTest4RW.js:927
"Tuareg blacksmith's role" — topic real and CB-plausible. Choice "expand;" is an unrelated semicolon-on-verb that no student would write — borderline distractor problem.

### [Test 5] M1 Q19, M2 Q19, Q21, Q23 — past perfect, "Each of," inverted "Among" patterns — CB-canonical skills with mostly real-world topics (Pompeii House of Menander, Roman maritime concrete cores at Portus Cosanus, French archive ledgers, fox-emergence logs in London). Borderline only because the doubled-up M1/M2 mirroring (e.g., Pompeii frescoes ↔ Pompeiian fresco conservator) is a templating fingerprint.

### [Test 5] M2 Q22, Q23 — Tomás Quintero's 2022 Lyon textile-mill reuse study; Léa Caron's Marseille municipal archive residency — researcher names are CB-style diverse but appear unverifiable. Borderline.

### [Test 6] M1 Q22, M2 Q22 — bog bodies in Denmark / Bronze Age kurgans in Kazakhstan — CB-plausible topics, clean rule (semicolon between independent clauses). Borderline only because both questions are essentially the same skeleton.

### [Test 7] M2 Q19, Q20, Q21, Q22 — Estonian song festival / Kazakh dombra / Mongolian field site / Quechua weaver — all CB-plausible cultural-history topics. Borderline because of the "first-name-only after first introduction" issue and the M1/M2 mirroring.

### [Test 8] M1 Q19 — Maine lobster fishery; M1 Q22 — Sicilian beekeeper Dario Lo Bianco. Real subspecies (*Apis mellifera siciliana*) — CB-plausible. Borderline because the questions stray from canonical SEC patterns into stylistic-comma territory.

### [Test 8] M2 Q18, Q19, Q20, Q23 — Cairo Genizah cataloging / Korean *hanji* / Sumatran tiger / Mansi language. All CB-plausible cultural / linguistic topics with real anchors. Borderline because the M1/M2 doublets and unverifiable specifics.

### [Test 9] M1 Q18, Q19, Q21, Q23 — Patagonian petrified forest / Galápagos marine iguana / qanat hydrology / chemistry-scaffolding research team. Borderline because of bare-name introductions and unverifiable studies, but topic register is closer to CB than the FAIL items.

### [Test 9] M2 Q18, Q19, Q21, Q22, Q23 — Patagonian stratigraphy / Galápagos iguana / Sosa's data / Saliha's ceremonial rug / chemistry-scaffolding team. Borderline same reasons.

### [Test 10] M1 Q18, Q21, Q22; M2 Q18, Q19 — Maria van Os (real Dutch botanist) / Vassily Kornilov sumerologist / Andean potato curator Mariela Quispe / 18th-century Welsh harp. CB-plausible topics with cleaner choice sets than most FAILs. Borderline because of M1/M2 mirroring.

### [Test 10] M2 Q21, Q22 — neither/nor agreement; colon for lists with "Petra Kovač" choreographer. Borderline: "Petra Kovač" is plausibly real-sounding, but the "three habits — careful early planting of small gestures, ruthless trimming of any motif that doesn't recur, and a willingness to leave the climax unannounced until the final phrase" reads more like a craft-essay quote than a CB neutral-expository sentence. The three-habits skeleton is a CB-known structure for colon-introducing-list questions.

### [Test 11] M1 Q18, M1 Q19, M1 Q20, M1 Q21, M1 Q22 — orchard apple-variety experiment / Cornwall tin-mine recovery / *Pristimantis araguanus* (a real Venezuelan species) / restored harpsichord pitch standards (real Bach-era practice) / urban tree-canopy ecology. M1 set is the strongest in the file: generally real subjects, defensible distractors, CB-canonical skills. Borderline only because of M2 mirrors below.

### [Test 11] M2 Q18, Q19, Q21, Q22 — Mount Aconcagua lichens / Glasgow tram tunnel / Kütahya tile gallery / urban canopy ginkgo. CB-plausible.

### [Test 12] M1 Q18, Q19, Q20, Q21, Q23 — Pakistani truck art (Karachi/Rawalpindi) / Wayang kulit / Ojibwe birchbark scrolls / Slovenian beekeeper Jurij Hren / Tongan tapa-cloth specialist Lupe Vaka. M1 stronger than M2; topic register CB-plausible. Borderline because researcher specificity is invented.

### [Test 12] M2 Q18, Q21 — Algerian rai music tradition (Oran), Ottoman tile historian Ayça Demirci. Borderline: real cultural traditions with invented researcher names.

---

## Pass examples (representative)

A handful of items that are genuinely CB-feeling and would not look out of place on a real digital SAT R&W form:

- **Test 7 M1 Q18 — practiceTest7RW.js:371.** Mountain hare seasonal coat color. Real ecology, real predator-prey detail; correct answer ". However," with clean distractors. CB-canonical sentence-boundary skill.
- **Test 7 M1 Q19 — practiceTest7RW.js:389.** Inverted subject-verb agreement, UNESCO Intangible Cultural Heritage list (kimchi-making, mole, Belgian beer culture). Real, citable subjects; clean choice set.
- **Test 10 M1 Q22 — practiceTest10RW.js:429.** Galápagos finch researcher Soledad Mariscal — colon introducing a list of three habits. The colon-for-list rule is canonical CB; the three-habits structure is exactly the form CB uses (PT4 Q31 baking soda/baking powder).
- **Test 11 M1 Q19 — practiceTest11RW.js:392.** Past perfect in a Cornwall tin-mine recovery context. Plausible real-world setting; clean past-perfect-vs-simple-past distractor set; CB-canonical verb-tense skill.
- **Test 11 M1 Q20 — practiceTest11RW.js:410.** Comma + participial modifier with *Pristimantis araguanus*, a real cloud-forest frog. Genuinely CB.
- **Test 11 M1 Q22 — practiceTest11RW.js:446.** Paired em-dashes with a real urban-ecology subject (the London plane). The "(" distractor is the same problem flagged for Test 12 Q22 M1, but the rest of the choice set is solid; topic register CB-plausible.
- **Test 12 M1 Q18 — practiceTest12RW.js:372.** Pakistani truck-art tradition; subject-verb agreement after a long modifying phrase. Plausible real cultural-history topic; canonical SEC skill.
- **Test 6 M1 Q19 — practiceTest6RW.js:392.** Cuneiform tablets from a temple archive; "Each" + singular verb. Plausible archaeology context; CB-canonical agreement.
- **Test 3 M1 Q23 — practiceTest3RW.js:464.** *Cynghanedd* in the Welsh literary movement; subject-verb agreement. Real historical topic, canonical agreement skill.
- **Test 4 M1 Q22 — practiceTest4RW.js:446.** Samoan *tatau* with a paired em-dash insertion; revival in diaspora communities. CB-plausible cultural-history topic with the canonical paired-dash rule and a clean choice set.

---

## Summary of worst offenders (top failure modes ranked)

1. **Templated cross-test parallel passages** (the dominant structural defect — affects ~30 questions across Tests 1–2 and the M1/M2 doublets in Tests 3–12).
2. **Invented researchers / studies / "first-woman-to" credentials** (~20 questions, concentrated in Tests 1–2, 9, 10, 12).
3. **Non-word or implausible distractor choices** (~10 questions: Test 5 Q18 M1+M2, Test 6 Q21 M1+M2, Test 6 Q23 M1+M2, Test 8 Q21 M1+M2, Test 12 Q22 M1+M2).

The five single worst offending questions, in order:

1. **Test 1 M2 Q18 — Reza Ahmadi self-imposed silence.** Literary-biography fiction skeleton; reused verbatim as Test 2 M2 Q18 (Yusuf Adisa); single most non-CB passage in the file.
2. **Test 12 M2 Q19 — Imigongo + "the disruptions of the 1990s."** Genocide-euphemistic context for a grammar question; CB explicitly avoids partisan / catastrophe-adjacent backdrops.
3. **Test 6 M1 Q21 — comparative/superlative with "more comprehensiver / comprehensivest."** Non-words as distractors; not a CB SEC skill in the first place.
4. **Test 11 M2 Q20 — fabricated Linnaean binomial *Pristimantis hagensii*.** CB does not invent species names; the test fails the basic real-world-anchoring rubric.
5. **Test 1 M1 Q22 / Test 2 M1 Q22 — Aiyana Standing Bear / Kalinda Brave Bull soil scientist.** Fabricated Indigenous-named scholars; templated across two tests with paraphrased claims about "underground biomass of native grasses … carbon-sequestration / carbon-budget models." CB does not invent Indigenous scholars.

---

## Note on the test file's "module" labels

The extraction file (`docs/sec_questions_extracted.md`) labels every question "Module 1," but the source files (`practiceTest{N}RW.js`) place six SEC items in Module 1 (Q18–Q23 in line ranges ~370–470) and six in Module 2 (Q18–Q23 in line ranges ~900–1020). The audit above uses the line ranges to assign the correct module. This relabel is worth fixing in the extraction script — every Module 2 question is currently mislabeled as Module 1 in the extracted markdown.
