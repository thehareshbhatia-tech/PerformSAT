# R&W Topic Allowlist & Denylist

This document lists the topic categories the PerformSAT R&W authoring pipeline draws from (✅ allowed), avoids (❌ denied), and handles carefully (⚠️ sensitive).

The allowlist is enforced by manual review; the denylist is enforced by both lint (keyword scan) and manual review.

References: `docs/CB_RW_AUTHENTICITY_REFERENCE.md` §5 (stylistic fingerprints, §5.6 explicit avoidances), `docs/RW_AUTHENTICITY_AUDIT.md`, `docs/RW_NON_SEC_SAMPLE_AUDIT.md`, `docs/CB_RW_AUTHENTICITY_RUBRIC.md` §10.

---

## ✅ Topics CB favors (with PT4-11 examples)

The College Board's Reading & Writing bank repeatedly draws from a defined set of academically grounded subject areas. Each category below lists the specific PT4-11 evidence and notes how to use it in PerformSAT authoring.

### 1. Indigenous scholars and Indigenous knowledge systems (real scholars only)

- **PT6 Q28** — Dr. Lani Tsinnajinnie, hydrologist, Navajo Nation Department of Water Resources, Chuska Mountains snowpack analysis.
- **PT4 Q9** — L. Sebastian Purcell on Aztec (Nahua) philosophy.
- **PT4 Q27** — Sociologist Alton Okinaka on the Hawai'i Register of Historic Places.

**Why strong:** anchors on documented scholarship rather than romanticized "Indigenous wisdom" framing. Treats Indigenous knowledge as living scholarship (a hydrology paper, a philosophy text), not as folklore.

**How to use:** every Indigenous-knowledge passage must cite a real Indigenous scholar with a verifiable publication. Never coin Indigenous-coded names (the audit caught fabricated "Aiyana Standing Bear," "Kalinda Brave Bull," "Margaret Wabasha"). Pull from the `researchers-humanities.json` and `researchers-stem.json` registries.

### 2. Marine biology and oceanography

- **PT6 ecology series** — piezophiles / deep-sea adaptation.
- **PT5/PT7** — wood frog freeze-thaw, marine iguana cold-water tolerance.
- **PT8** — Mariana Trench / hydrothermal vent microbial communities.

**Why strong:** rich in counterintuitive findings, plausible inference structures, named real research groups (e.g., the Schmidt Ocean Institute, Scripps, WHOI).

**How to use:** pair real species + real institution + a paraphrased finding from a 2018-2024 paper. Avoid the "trophic cascade / keystone species reintroduction" cliché — the audit found that template repeated 6+ times across PerformSAT.

### 3. Archaeology / paleoanthropology / paleontology

- **PT4 Q33** — Noel Hidalgo Tan, Angkor Wat plaster-wall imaging via decorrelation stretch analysis.
- **PT5** — Paleolithic cave lighting research.
- **PT6 Q1** — hedgehog tenrecs of Madagascar (paleobiology / convergent evolution).

**Why strong:** combines technical method (imaging, dating, isotope analysis) with cultural-historical subject — perfect for Words in Context and TS&P passages.

**How to use:** every archaeology passage must name the dig site, the lead investigator (real person), and one specific technique. Avoid catastrophe-adjacent sites (see denylist).

### 4. Art history (especially women artists, Black artists, Indigenous artists, recent recoveries)

- **PT5 Q6** — William H. Johnson (Black American painter, 1938 stylistic transformation).
- **PT4 Q22** — Etel Adnan (Lebanese American landscape painter, Mount Tamalpais).
- **PT4 Q23** — Marie Watt (Seneca sculptor, blanket art).
- **PT4 Q32** — Soo Sunny Park (Korean American light artist, *Unwoven Light* 2013).

**Why strong:** CB's house pattern is to recover historically underrepresented artists with documented work. Art history items naturally support TS&P, function-of-sentence, and rhetorical-synthesis questions.

**How to use:** name the artist, year, work title, and one specific stylistic feature. Cross-check against the Smithsonian American Art Museum, MoMA, and Tate online collections.

### 5. Ecology / biology (especially mycorrhizal networks, keystone species, phenology shifts)

- **PT4 Q8** — Valentina Gómez-Bahamón, fork-tailed flycatcher subspecies acoustics, Colombia.
- **PT5 Q10** — Chukwuebuka Okolo, soil carbon/nitrogen across Ethiopian land-use types.
- **PT6 mycorrhizal-fungi passage** — Suzanne Simard's research framework (real, citable).

**Why strong:** real ecologists working on real systems with measurable outcomes. CB favors biology that includes a hypothesis-conflict structure (the team hypothesized X, but found Y).

**How to use:** ground every ecology passage in a real 2015-2024 paper. Don't invent species or invent regional extinctions.

### 6. Lesser-known historical biographies (women scientists, POC scientists, civil rights figures)

- **PT4 Q24** — Percy Julian (African American chemist, 1935 physostigmine synthesis).
- **PT4 Q19** — Lê Lương Minh (ASEAN secretary-general, 2013).
- **PT6 Q20** — Louise Bennett "Miss Lou" (Jamaican poet and folklorist).
- **PT4 Q33** — Vanessa Galvez (engineer, Queens bioswales).

**Why strong:** every documented figure has a verifiable institutional record. CB never invents the credential ("first/third/only X to do Y" with no source).

**How to use:** anchor on Wikipedia + at least one academic source. The audit caught fabrications: "Inez Park, third woman in NWS history, 1972"; "Maya Khoury, first woman to lead signaling-systems team, 1981" — both invented. Use real figures: Dorothy Vaughan, Chien-Shiung Wu, Mae Jemison, Marie Maynard Daly, Roger Arliner Young.

### 7. Cultural traditions (textile arts, dance, music, foodways) treated academically

- **PT5 jazz history passage** — early jazz ensemble formation.
- **PT6 quipus passage** — Inca knotted-string recording devices.
- **PT7 Faroese chain dance / Larin Paraske / Bhutanese dzong construction** — all rhetorical-synthesis bright spots in the audit.

**Why strong:** treats living craft traditions as scholarly subjects (linguistic structure, material analysis, performance ethnography), never as exotic spectacle.

**How to use:** cite the documenting scholar (Adolf Neovius for Larin Paraske; Tashi Wangchuk for dzongs). Never anchor on the practitioner alone without an academic context.

### 8. Linguistics / language preservation

- **PT4 Q9** — Aztec / Nahua philosophy translation.
- **Documented CB pattern** — creole stability, code-switching research, language-revitalization linguists.

**Why strong:** linguistics passages naturally test inference, structure, and definition revision. Avoid the "creole stability" cliché the audit found repeated in PerformSAT Tests 1-6.

**How to use:** anchor on real fieldwork linguists (e.g., K. David Harrison, Salikoko Mufwene, Mary Bucholtz, Nicholas Evans). Always include the language family and the speaker community.

### 9. Architecture (vernacular, traditional, sustainable)

- **PT7 Bhutanese dzong** passage.
- **PT4 bioswales** (Vanessa Galvez, Queens).
- **PT6 Kelmscott Press** (William Morris, design history).
- Real architect Norma Sklarek (US Embassy Tokyo, 1976) cited in the rubric as a model.

**Why strong:** combines technical material (structural systems, material science) with cultural-historical context. Strong for both Words in Context and Rhetorical Synthesis.

**How to use:** name the building, the architect, the year. Avoid invented architects ("Ailbhe Donovan" with "1990s civic commissions" — both fabricated, audit Test 8 M2 Q24).

### 10. Geology / atmospheric science

- **PT4 Q28** — Michael Garcia, Pūhāhonu shield volcano (Hawai'i, 2020 study).
- **PT6 Q28** — Lani Tsinnajinnie, Chuska Mountains snowpack.
- **PT7 Dust Bowl** Q20 — historical climate event, real research base.

**Why strong:** quantitative tables fit naturally; real numbers (volcano volume, snowpack depth, precipitation totals) anchor COE-Quantitative items.

**How to use:** pull data from USGS, NOAA, NASA, NSF directly. Tables must include realistic variance — don't smooth differences to (+11, +12, +11, +11) the way PerformSAT Test 1 Q16 did.

### 11. Astronomy / cosmology (especially women astronomers, exoplanet research)

- **PT4 Q1** — Daniella DellaGiustina, OSIRIS-REx mission (NASA, real lead scientist).
- **PT4 Q2** — Katarina Miljkovic, Moon-surface impact research.
- **PT5 Q3** — K.D. Leka, solar corona / flare prediction.
- **PT6 Q26** — Stuart Bartlett & Michael L. Wong, "lyfe" terminology proposal.

**Why strong:** real-time science with public outputs (NASA press releases, ESA briefings, JWST results). Names are verifiable through institutional pages.

**How to use:** pull from NASA Astrophysics Data System (ADS), arXiv astro-ph, recent press releases. Maria Mitchell, Henrietta Swan Leavitt, Cecilia Payne-Gaposchkin, Vera Rubin, and contemporary figures (Sara Seager, Jocelyn Bell Burnell, Beth Brown) all sit comfortably here.

### 12. Anthropology / ethnography (when treating real communities respectfully)

- **PT4 Q33** — Cambodian Angkor Wat archaeology.
- **PT5 Indigenous-studies references** — pulled from real programs at UC Davis, UBC, ANU.

**Why strong:** ethnography overlaps with cultural traditions and linguistics; well-anchored items pass the rubric.

**How to use:** never speak FOR a community. Always anchor on the community member who is also a scholar (e.g., Robin Wall Kimmerer; Greg Cajete; Linda Tuhiwai Smith). Never use generic "Indigenous wisdom" framing.

### 13. Urban planning / public health

- **PT4 Q33** — Vanessa Galvez bioswales / stormwater management (Queens).
- CB pattern — bike-share equity, transit-deserts research, walkability indices.

**Why strong:** combines policy detail with measurable outcomes; supports COE-Quantitative naturally.

**How to use:** anchor on Brookings, Urban Institute, RAND, or peer-reviewed transportation/public-health journals. Avoid invented policy "movements" the audit flagged ("agrivoltaic deployment," "community microgrid deployment" — all fabricated topic shells).

### 14. History of science (recovery narratives, paradigm shifts)

- **PT4 Q24** — Percy Julian glaucoma treatment.
- **PT5 Q21** — Edwin Land, polarizing filter → Polaroid.
- **PT6 Q21** — Frederick Douglass antimetabole (writing-craft history).

**Why strong:** narrative arcs from "previously assumed" to "recent finding refines" — exactly the structure CB uses for TS&P questions.

**How to use:** pull from history-of-science journals (*Isis*, *History and Technology*, *British Journal for the History of Science*). Real 19th- and early-20th-century scientific recovery work is abundant and underused.

### 15. Conservation tradeoffs and environmental justice

- **PT5 ecology** passages — soil-carbon land-use research.
- **PT8 deep-sea / Mariana Trench** sampling missions.
- Documented CB pattern — habitat-restoration tradeoffs, single-source vs multi-source repopulation debates.

**Why strong:** naturally supports cross-text and inference questions because real conservation has real disagreements.

**How to use:** cite the actual debate participants. Reduce reliance on the "[species] was once present in [region]" template the audit flagged (5+ tests using identical structure for monk seal, lynx, potato, canoe).

### 16. Letters / journals / archival material from public-domain figures

- **CB seed authors** — Dorothea Lange's documented letters; Zora Neale Hurston's correspondence; Margaret Mead field notes; Bernard Berenson letters.

**Why strong:** authentic archival voices ground Central Ideas and Inference passages in real historical record.

**How to use:** verify via the Library of Congress digital collections, university archives (Yale Beinecke, UCLA), and online editorial projects (e.g., Margaret Mead Papers at LOC). Never invent letters from invented anthropologists — the audit caught 9+ tests using "I had been writing about X... I begin to suspect that the only honest [record/pictures] left to make is of Y" with fabricated authors.

### 17. Real labor history (agricultural, craft, factory)

- **PT5/PT6 jazz history**, **Vermeer / Dutch household labor (PT6 Q23)**, **Marie Watt blanket art**.
- CB pattern — guild histories, mutual-aid societies, women's labor unions.

**Why strong:** plausible historical material with documented archives.

**How to use:** anchor on the Smithsonian's National Museum of American History, the Tamiment Library, or peer-reviewed labor-history journals. Avoid romanticized craft-worker vignettes — the audit caught 24 of these literary fabrications.

### 18. Cognitive science / neuroscience

- **PT5/PT6 neuroscience** passages — brain regions and decision-making, cat vocal localization.

**Why strong:** rich in measurable findings; supports inference and TS&P questions.

**How to use:** pull from *Nature Neuroscience*, *Cognition*, *PNAS*, *Current Biology*. Real working researchers: Lisa Feldman Barrett, Earl K. Miller, Jennifer Groh, Daphna Buchsbaum.

### 19. Literary criticism and translation studies

- **CB seed pattern** — paired-text contemporary scholarship (the rubric's example: Gilbert/Gubar vs. Cora Kaplan on Brontë).

**Why strong:** anchors cross-text questions on real, verifiable academic disagreements rather than invented critic personas.

**How to use:** pull from *PMLA*, *Critical Inquiry*, *Translation Studies*. Real critics: Edward Said, Gayatri Spivak, Henry Louis Gates Jr., Eve Kosofsky Sedgwick, Kwame Anthony Appiah, Lawrence Venuti.

---

## ❌ Topics CB avoids (with reasoning)

The College Board explicitly avoids the categories below (see `CB_RW_AUTHENTICITY_REFERENCE.md` §5.6). Lint scans passage text for keyword markers; manual review confirms.

### 1. Catastrophe-adjacent backdrops (war, genocide, mass casualty events as backdrop)

- **Audit failure (Test 12 M2 Q19, `practiceTest12RW.js:941`):** "Imigongo — the Rwandan cow-dung relief tradition whose chevron and spiral motifs were nearly lost during *the disruptions of the 1990s*" — a euphemistic reference to the Rwandan genocide as backdrop for a grammar question. The SEC audit rates this the second-worst single offender across the entire SEC bank.
- **Why CB doesn't use it:** CB explicitly avoids partisan / catastrophe-adjacent backdrops (`CB_RW_AUTHENTICITY_REFERENCE.md` §5.6). Anchoring a SEC question on a genocide-adjacent backdrop forces the student to manage emotional content while answering a grammar question.
- **Substitute:** the Imigongo tradition itself is fine — recast the sentence so its endangerment is framed academically (e.g., reduced practitioner numbers, museum-collection efforts) without referencing the genocide.

### 2. Live partisan politics (specific elected officials in current contexts)

- **Why CB doesn't use it:** CB tests across multiple administrations and political cycles; partisan content dates the question and risks bias claims. The rubric includes `politics-as-faith` as a hard avoid.
- **Substitute:** historical political figures (John Conyers, Shirley Chisholm in PT4 Q29) are fair game when the context is documented historical record.

### 3. Religion-as-faith (different from religion-as-cultural-history)

- **Why CB doesn't use it:** doctrinal, devotional, or theological content can't be assessed neutrally.
- **Substitute:** religion as historical / cultural / archaeological subject (e.g., the architecture of Angkor Wat as both Hindu and Buddhist site, PT4 Q33) is fully allowed when anchored on documented religious-studies scholarship.

### 4. Contemporary celebrities / sports figures

- **Why CB doesn't use it:** CB explicitly avoids "celebrity gossip, viral videos, or trendy slang" (`CB_RW_AUTHENTICITY_REFERENCE.md` §5.6).
- **Substitute:** historical sports/entertainment figures with academic treatment — Bessie Coleman (aviator), Hedy Lamarr (inventor), Robert Johnson (musician via blues-history scholarship).

### 5. Sexual content, drug use, gambling, violence as primary subject

- **Why CB doesn't use it:** test takers include high-schoolers; subject matter must be school-board-defensible.
- **Substitute:** none — these subjects are out of scope. Adjacent academic treatments (e.g., addiction-research neuroscience, public-health policy on opioids) are also avoided in CB practice.

### 6. Hot-button social-issue framing without academic grounding

- **Audit pattern:** PerformSAT cross-text Q6 invented "sympathetic-but-policy-conditional" frame on participatory budgeting / agrivoltaics / community microgrids — none anchored on real scholars or real essays.
- **Why CB doesn't use it:** unanchored social-issue framing reads as opinion rather than scholarship.
- **Substitute:** every cross-text item must reference real essays or paraphrased real debates (per `crossTextPairs.json`).

### 7. Stock market / cryptocurrency / contemporary financial speculation

- **Why CB doesn't use it:** dates rapidly; reads as financial advice; correlates with partisan policy debates.
- **Substitute:** historical finance (the South Sea Bubble, the 1929 crash, the New Deal) treated as academic history.

### 8. True crime

- **Why CB doesn't use it:** sensationalized; not academically grounded; conflicts with violence-as-subject avoidance.
- **Substitute:** documented forensic-science research, criminology peer-reviewed work (anchored on real scholars: Patrick Sharkey, Bruce Western).

### 9. Conspiracy theories / pseudo-scientific topics

- **Why CB doesn't use it:** undermines the test's epistemic authority.
- **Substitute:** the *history* of pseudo-science (e.g., phrenology, alchemy, eugenics-as-historical-subject) treated as documented critical history is allowed.

### 10. Stacked / non-CB transition phrasings

- **Audit failure (Test 12 M2 Q24):** choice D listed as "In fact, similarly," — not a CB transition.
- **Why CB doesn't use it:** CB transitions are single tokens or short clean phrases (`However,` / `Therefore,` / `In addition,` / `By contrast,` / `On the other hand,`).
- **Substitute:** use only the CB-documented transition lexicon.

### 11. Non-word / non-existent grammatical-form distractors

- **Audit failures:** "more comprehensiver", "complexs", "valleys's", "Library's'", "whom's", "which's" (Tests 5, 6, 8).
- **Why CB doesn't use it:** CB never offers a non-word as a distractor; wrong answers are *plausible* errors educated writers might make.
- **Substitute:** use real grammatical errors only.

### 12. Fabricated literary works / scholars / Indigenous-coded names

- **Audit failures:** "*The Glass Tide* by Welsh writer Olwen Tregaron, 1936"; "*La Pastorella di Volterra*"; "Aiyana Standing Bear"; "Kalinda Brave Bull"; "Margaret Wabasha"; all 24 contemporary "short story" attributions.
- **Why CB doesn't use it:** every named work and person on a real CB test is verifiable.
- **Substitute:** every literary work must be in `literaryWorks.json`; every researcher in `researchers-stem.json` or `researchers-humanities.json`.

---

## ⚠️ Sensitive topics CB handles carefully (rules)

The categories below are allowed but require specific guardrails. Manual review is mandatory before drafting.

### 1. Indigenous knowledge

- **Rule:** always anchor on a real Indigenous scholar (e.g., Robin Wall Kimmerer, Linda Tuhiwai Smith, Greg Cajete, Daniel Wildcat).
- **Hard limit:** never speak FOR Indigenous communities. Never invent Indigenous-coded names. Never apply biological-genetic-diversity logic to a craft or oral-tradition context (the audit flagged this as a "category error" in PerformSAT Tests 3 and 5).
- **Verification:** the scholar must appear in `researchers-humanities.json` or `researchers-stem.json` with a verified publication.

### 2. Incarceration / criminal justice

- **Rule:** only via documented academic research (criminology, sociology, public health).
- **Hard limit:** never narrate the incarcerated person's experience. Never use a defendant's case as a backdrop for grammar.
- **Approved scholars:** Bruce Western, Heather Ann Thompson, Devah Pager, Michelle Alexander, Patrick Sharkey.

### 3. Colonial history

- **Rule:** always with critical / post-colonial framing; never neutral or celebratory.
- **Hard limit:** colonial figures must be contextualized as colonial actors, not as neutral protagonists.
- **Approved scholars / framings:** Edward Said, Gayatri Spivak, Frantz Fanon (historical), Achille Mbembe, Walter Mignolo, Ann Laura Stoler.

### 4. Religion as historical / cultural subject

- **Rule:** OK if anchored on documented religious-studies scholarship.
- **Hard limit:** never as faith-claim. Never imply truth-value of doctrinal positions.
- **Approved scholars:** Karen Armstrong, Diana Eck, Reza Aslan (academic-mode), Robert Orsi, Tomoko Masuzawa.

### 5. Race and racism

- **Rule:** anchor on real scholars; never sensationalize; treat as a documented academic subject.
- **Hard limit:** never use a racialized historical event as a grammar backdrop. Never reduce a racialized scholar to their identity (the rubric flags this).
- **Approved scholars:** Henry Louis Gates Jr., Imani Perry, Khalil Gibran Muhammad, Eduardo Bonilla-Silva, Karyn Lacy, Kwame Anthony Appiah.

### 6. Disability

- **Rule:** use the social model; cite real disability-studies scholars.
- **Hard limit:** never inspirational framing ("inspiration porn"). Never frame disability as something to be overcome.
- **Approved scholars:** Susan Wendell, Alison Kafer, Rosemarie Garland-Thomson, Lennard Davis, Tobin Siebers, Sami Schalk.

### 7. Mental illness

- **Rule:** only via documented research; never sensationalized.
- **Hard limit:** never use a named historical figure's mental illness as biographical color. Never frame mental illness as creative gift or moral failing.
- **Approved scholars:** Andrew Solomon (academic-mode), Richard McNally, Anne Harrington (history of psychiatry).

### 8. Slavery / forced labor

- **Rule:** treat as documented historical scholarship (Eric Foner, Ira Berlin, Annette Gordon-Reed, Walter Johnson).
- **Hard limit:** never narrate the enslaved person's experience as fictional vignette. Never use as a grammar-question backdrop. Always anchor on the historical record.

### 9. Refugee / migration narratives

- **Rule:** documented history (Ellis Island, Bracero Program, post-1965 migration patterns) anchored on demographic / historical research.
- **Hard limit:** never use contemporary refugee crises (Syrian, Afghan, Ukrainian, Rohingya) as backdrop. Never use individual refugee testimony as fictional source material.

### 10. LGBTQ+ history

- **Rule:** documented historical / cultural-studies scholarship (George Chauncey, John D'Emilio, Lillian Faderman, Susan Stryker).
- **Hard limit:** never frame as contested social issue. Treat as established academic subject. Public-domain figures (Whitman, Baldwin, Lorde) appear naturally in the literary allowlist.

---

## Enforcement

- **Allowlist categories (✅):** every R&W passage must align with one of the 19 categories above. The authoring pipeline samples weighted by category to maintain diversity (per `CB_RW_AUTHENTICITY_RUBRIC.md` §10.2).
- **Denylist categories (❌):** the keyword-scan lint (`scripts/validateRWBank.mjs --topic-denylist`) flags any passage containing trigger phrases; manual review confirms.
- **Sensitive categories (⚠️):** mandatory manual review pre-drafting (per `CB_RW_AUTHENTICITY_RUBRIC.md` §F16). Author submits subject + scholar anchor to the review gate; reviewer signs off before drafting begins.
