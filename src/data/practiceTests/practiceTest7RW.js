// Practice Test 7 — SAT Reading & Writing (R&W)
// 2 Modules, 27 questions each (54 total) in 32 minutes per module.
// Distribution per module follows the official digital SAT R&W blueprint:
//   * Information and Ideas: ~10 (Central Ideas/Details, Inferences,
//     Command of Evidence — Textual, Command of Evidence — Quantitative)
//   * Craft and Structure: ~7 (Words in Context, Text Structure & Purpose,
//     Cross-Text Connections)
//   * Standard English Conventions: ~6 (Boundaries, Form/Structure/Sense)
//   * Expression of Ideas: ~4 (Transitions, Rhetorical Synthesis / Notes)
//
// All passages are ORIGINAL prose written for this practice test.

export const practiceTest7RW = {
  id: "practice-test-7-rw",
  title: "Practice Test 7 — Reading & Writing",
  description: "Full-length SAT Reading & Writing practice test with 2 modules",
  section: "reading-writing",
  totalQuestions: 54,
  timePerModule: 32,
  modules: [
    {
      id: "module-1",
      title: "Module 1",
      timeLimit: 32,
      questions: [
{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 2,
  domain: "Craft and Structure",
  skill: "words-in-context",
  passage: "When the ethnomusicologist Tuyaa Bayar returned from a season recording Mongolian throat singers in the Khangai Mountains, she carried a hard drive full of audio that her university's lab could not yet process. She spent the next several months carefully ________ each track, labeling the two simultaneous tones produced by every singer so that later researchers could study them apart.",
  question: "Which choice completes the text with the most logical and precise word or phrase?",
  choices: [
    { id: "A", text: "discarding" },
    { id: "B", text: "annotating" },
    { id: "C", text: "doubting" },
    { id: "D", text: "ignoring" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Words in Context (Fill-in)**\n\n**Choice B is correct.**\n\nThe sentence describes Bayar carefully working through each track, \"labeling the two simultaneous tones\" so others can study them. \"Annotating\" means adding explanatory notes or labels — exactly what she's doing.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"discarding\" contradicts the act of preserving the recordings for later researchers.\n* Choice C: \"doubting\" doesn't fit the practical labeling task described.\n* Choice D: \"ignoring\" is the opposite of careful, deliberate labeling."
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 2,
  domain: "Craft and Structure",
  skill: "words-in-context",
  passage: "The kantele player Aino Virtanen was known for keeping her concert programs ________; rather than padding her sets with showy arrangements, she preferred to play just a handful of traditional Finnish runic melodies, trusting that the small instrument's quiet voice would hold an audience without ornament.",
  question: "Which choice completes the text with the most logical and precise word or phrase?",
  choices: [
    { id: "A", text: "elaborate" },
    { id: "B", text: "spare" },
    { id: "C", text: "raucous" },
    { id: "D", text: "lengthy" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Words in Context (Fill-in)**\n\n**Choice B is correct.**\n\nThe semicolon explains the missing word: Virtanen \"preferred\" to play \"just a handful\" of melodies without \"showy arrangements.\" That is the definition of *spare* — minimal, stripped down.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"elaborate\" is the opposite of what the rest of the sentence describes.\n* Choice C: \"raucous\" describes loud disorder, not a quiet kantele set.\n* Choice D: \"lengthy\" contradicts the small handful of melodies."
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  domain: "Craft and Structure",
  skill: "words-in-context",
  passage: "Although the Quechua weaver Imelda Quispe is often celebrated for her ambitious large-scale tapestries, her working method was anything but rushed. Her studio notebooks reveal a craftsperson who would ________ a single border motif for many sittings, returning to it across many days to adjust a strand here, retie a knot there, until the small repeating pattern matched what she remembered from her grandmother's loom.",
  question: "Which choice completes the text with the most logical and precise word or phrase?",
  choices: [
    { id: "A", text: "skip" },
    { id: "B", text: "memorize" },
    { id: "C", text: "refine" },
    { id: "D", text: "abandon" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Words in Context (Fill-in)**\n\n**Choice C is correct.**\n\nThe sentence describes Quispe returning to a single motif repeatedly — adjusting a strand, retying a knot — until the pattern is right. That is *refining*: improving by gradual adjustment.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"skip\" contradicts spending many sittings on the motif.\n* Choice B: \"memorize\" doesn't fit — she's *changing* the motif, not committing it to memory unchanged.\n* Choice D: \"abandon\" implies giving up, but she keeps reworking the motif."
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  domain: "Craft and Structure",
  skill: "text-structure-and-purpose",
  passage: "For decades, freshwater ecologists assumed that beaver dams primarily benefited the beavers themselves by creating safe pond habitats. A 2022 study by hydrologist Marcus Kettering challenges that narrow framing. __After installing flow gauges above and below thirty active dams in northern Wyoming, Kettering's team measured that summertime streamflows downstream of the dams remained between forty and sixty percent higher than streamflows on otherwise identical undammed creeks, suggesting that the dams act as slow-release reservoirs that buffer downstream ecosystems through dry months.__",
  question: "Which choice best describes the function of the underlined sentence in the text as a whole?",
  choices: [
    { id: "A", text: "It introduces a counterexample that complicates Kettering's challenge to the older view." },
    { id: "B", text: "It presents the measurement evidence that supports the broader explanation Kettering offers." },
    { id: "C", text: "It contrasts two competing methods for measuring beaver dam volume." },
    { id: "D", text: "It raises doubts about whether the older assumption was ever genuinely held." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Text Structure and Purpose**\n\n**Choice B is correct.**\n\nThe first two sentences set up: old view (dams help only beavers) → Kettering challenges that narrow framing. The underlined sentence then provides the *measurement evidence* (flow gauges, percent increases) and the *broader explanation* (slow-release reservoirs that buffer downstream ecosystems).\n\n**Why the wrong answers are tempting:**\n* Choice A: there's no counterexample — the data support Kettering, not against him.\n* Choice C: only one measurement method (flow gauges) is described.\n* Choice D: the passage accepts that the older view was held."
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 4,
  domain: "Craft and Structure",
  skill: "text-structure-and-purpose",
  passage: "The following text is adapted from Eun-Hye Choi's 2021 short story \"Paper Mountain.\" Sangwoo, a hanji papermaker, is working alone in the workshop before sunrise.\n\nSangwoo lifted the bamboo screen from the vat, watching a thin sheet of pulped mulberry settle into place across the mesh. The workshop was cold — the boiler had only just been lit — and the only sound was the slow drip of water returning to the basin. __He paused before couching the sheet onto the felt, watching the first lamplight catch the wet fibers, and he thought of all the winter mornings his father had stood at this same vat doing this same thing.__ The thought did not slow him. It steadied his hands.",
  question: "Which choice best describes the function of the underlined sentence in the text?",
  choices: [
    { id: "A", text: "It marks a shift from physical action to interior memory and reflection." },
    { id: "B", text: "It establishes a contrast between Sangwoo's workshop and his father's." },
    { id: "C", text: "It contradicts the calm tone established earlier in the passage." },
    { id: "D", text: "It signals that Sangwoo is about to close the workshop permanently." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Text Structure and Purpose (Literary)**\n\n**Choice A is correct.**\n\nThe sentences before describe Sangwoo's *actions* (lifting the screen, watching pulp settle). The underlined sentence shifts to him pausing and *thinking of* his father — interior memory. The next sentence then reports the *feeling* the memory produces. The underlined sentence is the pivot from action to reflection.\n\n**Why the wrong answers are tempting:**\n* Choice B: only one workshop is in the passage; no contrast is established.\n* Choice C: the tone stays calm — the memory steadies his hands.\n* Choice D: nothing in the passage suggests closure or ending."
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Craft and Structure",
  skill: "cross-text-connections",
  passages: [
    {
      label: "Text 1",
      text: "Recent enthusiasm for restoring Estonian song festival traditions to smaller regional towns has been propelled by cultural policy researchers who emphasize the civic, linguistic, and intergenerational benefits of large amateur choral gatherings. The model promises stronger local identity, vibrant minority-language use, and renewed bonds between rural elders and urban youth choir members."
    },
    {
      label: "Text 2",
      text: "Cultural sociologist Triin Kask is sympathetic to the goals of the regional song festival movement but cautions that \"festival programming\" alone is not the same as a sustainable choral economy. Her surveys of mid-sized Estonian towns show that without paid conductor positions and rehearsal-space subsidies, regional choirs frequently rely on volunteer burnout and disband within five years of a festival's launch. Without such supports, she argues, the model risks recreating exactly the cultural decline it was meant to reverse."
    }
  ],
  question: "Based on the texts, how would Kask (Text 2) most likely respond to the claim made by the researchers in Text 1?",
  choices: [
    { id: "A", text: "By rejecting the civic and linguistic benefits as overstated." },
    { id: "B", text: "By acknowledging the benefits but warning that achieving a sustainable choral economy depends on policy choices the researchers do not address." },
    { id: "C", text: "By arguing that regional song festivals are technically impossible to organize outside Tallinn." },
    { id: "D", text: "By insisting that the festival model has already been disproven by the regional Estonian record." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Cross-Text Connections**\n\n**Choice B is correct.**\n\nText 2 says Kask is \"sympathetic to the goals\" — so she agrees with the benefits in spirit. But she adds a *condition*: without paid conductor positions and subsidies, the model risks bad outcomes. That is exactly choice B: acknowledge the benefits, warn about preconditions.\n\n**Why the wrong answers are tempting:**\n* Choice A: Kask doesn't reject the benefits; she's sympathetic to the goals.\n* Choice C: she never claims technical impossibility.\n* Choice D: \"already been disproven\" is too strong — she warns about a *risk*."
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Craft and Structure",
  skill: "cross-text-connections",
  passages: [
    {
      label: "Text 1",
      text: "The icon painter Yelena Borisova, in a 1987 lecture on her workshop's craft, argued that the strongest devotional images are those whose technical surface the viewer does not consciously notice — a slight thinning of the gold-leaf halo, a softening of the underpainting — so that recognition arrives only as a quiet gravity, never as a display of skill. The trick, she said, is to plant the technique so unobtrusively that the worshipper registers only the saint's presence, not the brushwork."
    },
    {
      label: "Text 2",
      text: "In a recent essay rereading Borisova's late-1980s panel works, the art historian Mihai Lupescu notes that several of Borisova's contemporary critics complained that her surfaces felt undercooked and unfinished. Lupescu argues that those complaints reveal a generational viewing habit: critics in the late 1980s were trained to expect bravura passages of pigment that announced themselves, and Borisova's quieter craftsmanship read to them as no craftsmanship at all."
    }
  ],
  question: "Based on the texts, how would Lupescu (Text 2) most likely characterize the late-1980s critics' complaints?",
  choices: [
    { id: "A", text: "a flaw in Borisova's craft that the critics correctly identified." },
    { id: "B", text: "a misunderstanding rooted in the critics' expectations rather than in the panels themselves." },
    { id: "C", text: "a deliberate provocation by Borisova aimed at her contemporaries." },
    { id: "D", text: "a breakdown in communication between gallerists and reviewers of the period." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Cross-Text Connections (Inference)**\n\n**Choice B is correct.**\n\nLupescu argues the critics' complaints \"reveal a generational viewing habit\" — that is, the *critics* were trained to expect bravura passages, so Borisova's quieter craftsmanship registered as none at all. The flaw is in the critics' habits, not in Borisova's craft.\n\n**Why the wrong answers are tempting:**\n* Choice A: Lupescu is *defending* Borisova, not validating the critics.\n* Choice C: Lupescu doesn't claim Borisova was provoking anyone.\n* Choice D: there's no gallerist/reviewer communication issue in the text."
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  domain: "Information and Ideas",
  skill: "central-ideas-and-details",
  passage: "Contrary to a long-standing assumption, deep-sea hydrothermal vent communities do not depend exclusively on chemicals from the rising plume of superheated water. Many species — including certain tubeworms and limpets — also draw nutrients from cooler, slower fluids that seep through cracks in the surrounding basalt at temperatures only a few degrees above the ambient seawater. Recent observations near the East Pacific Rise have shown that these \"diffuse flow\" zones support distinct microbial mats whose chemistry differs from the high-temperature plumes, suggesting that vent ecosystems are organized along a much finer thermal gradient than earlier accounts proposed.",
  question: "Which choice best states the main idea of the text?",
  choices: [
    { id: "A", text: "Deep-sea vent species feed only on chemicals in the high-temperature plumes." },
    { id: "B", text: "Vent ecosystems include cooler diffuse-flow zones that support their own distinct microbial communities, complicating earlier accounts." },
    { id: "C", text: "Tubeworms and limpets cannot survive without high temperatures." },
    { id: "D", text: "Researchers near the East Pacific Rise have proven that vent plumes are colder than previously believed." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Central Ideas and Details**\n\n**Choice B is correct.**\n\nThe whole passage is making one point: cooler diffuse-flow zones host their own microbial life, so vent ecosystems are organized along a finer thermal gradient than was thought. The East Pacific Rise observations are evidence for that point.\n\n**Why the wrong answers are tempting:**\n* Choice A: this is the *old* assumption the passage is correcting.\n* Choice C: the passage doesn't claim the species require high temperatures.\n* Choice D: the passage describes diffuse flow as cooler than the plume, not the plume as cold."
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  domain: "Information and Ideas",
  skill: "central-ideas-and-details",
  passage: "In a 1953 letter to her department chair, the archaeologist Salwa Mahdi described the moment she decided to abandon her planned excavation of a Nubian royal tomb and turn instead to surveying the small craftsmen's quarters that surrounded it. \"I had been writing about kings,\" she wrote, \"and I begin to suspect that the only honest record left to make is of the workshops where the things buried with kings were actually shaped.\" The shift would, within four years, produce one of the foundational catalogs of Nubian metalworking practice.",
  question: "Which choice best states the main idea of the text?",
  choices: [
    { id: "A", text: "Mahdi gave up archaeology in 1953 to pursue metalworking professionally." },
    { id: "B", text: "Mahdi's decision to redirect her work from royal tombs to artisans' quarters was driven by a search for a more honest record of Nubian production." },
    { id: "C", text: "Mahdi's letter to her chair was the most influential publication of her career." },
    { id: "D", text: "Nubian royal tombs are less archaeologically significant than the surrounding workshops." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Central Ideas and Details**\n\n**Choice B is correct.**\n\nThe passage is about *why* Mahdi changed her work: she wanted an \"honest record\" of where things were actually made. The result was a catalog of metalworking practice.\n\n**Why the wrong answers are tempting:**\n* Choice A: she didn't abandon archaeology — she changed *what* she studied.\n* Choice C: the passage doesn't claim the letter was her most influential anything.\n* Choice D: the passage doesn't compare significance — it describes a personal redirection."
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Information and Ideas",
  skill: "central-ideas-and-details",
  passage: "The Caribbean steel pan was once present in nearly every neighborhood orchestra across Trinidad and Tobago, with hundreds of community-based \"yards\" producing hand-tuned instruments after World War II. By the late twentieth century, factory imitation pans and shifting youth interests had reduced the number of full-time tuners on the islands to fewer than fifty. Cultural ministers initially focused on subsidizing the largest remaining tuning workshop in Port of Spain, on the assumption that a single thriving shop could eventually train apprentices for the entire islands. More recent fieldwork has complicated that hope: the surviving rural tuners use distinct hammering techniques, and centralized training would erase variation that took generations to accumulate.",
  question: "Which choice best states the main idea of the text?",
  choices: [
    { id: "A", text: "The Caribbean steel pan has been reduced to a single thriving workshop in Port of Spain." },
    { id: "B", text: "Conservation strategies that worked for other crafts cannot be applied to steel pan tuning." },
    { id: "C", text: "The early ministry strategy of relying on a single source workshop is in tension with new fieldwork on the diversity of regional tuning techniques." },
    { id: "D", text: "Fieldwork has shown that steel pans made by rural tuners are technically inferior to those from Port of Spain." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Central Ideas and Details**\n\n**Choice C is correct.**\n\nThe passage sets up the early plan (subsidize one big workshop) and then says new fieldwork \"has complicated that hope\" — rural tuners use distinct hammering techniques that centralized training would erase. The main idea is exactly that tension.\n\n**Why the wrong answers are tempting:**\n* Choice A: distorts the facts — multiple rural tuners still work, not just Port of Spain.\n* Choice B: the passage doesn't generalize about other crafts.\n* Choice D: the passage doesn't claim rural pans are inferior — only that they differ."
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  domain: "Information and Ideas",
  skill: "inferences",
  passage: "Although the Eurasian beaver was reintroduced to Scotland's River Tay in the early 2000s with the explicit goal of restoring native riparian biodiversity, ecologists have come to credit the beavers with a far broader role. As ponds backed up behind their dams, downstream water tables rose, sedges and willows returned along the banks, and salmon parr were observed using the new slow pools as nurseries. The relationship is now used as a textbook example of a _______",
  question: "Which choice most logically completes the text?",
  choices: [
    { id: "A", text: "single-species recovery effort." },
    { id: "B", text: "ecosystem-engineering effect." },
    { id: "C", text: "failure of reintroduction, since the beavers did not achieve their stated goal." },
    { id: "D", text: "competitive exclusion between aquatic mammals." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Inferences (Logical Completion)**\n\n**Choice B is correct.**\n\nThe passage describes one species (beavers) physically reshaping the habitat — backing up ponds, raising water tables, creating salmon nurseries. \"Ecosystem engineering\" is the standard term for an organism that changes physical habitat for many other species.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"single-species recovery\" misses the wider effects, which are the whole point.\n* Choice C: the passage frames the outcome as a success, not a failure.\n* Choice D: there's no second mammal in the text — competitive exclusion doesn't fit."
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Information and Ideas",
  skill: "inferences",
  passage: "Bhutanese traditional builders work without architectural drawings; instead, the master carpenter, or zowo, holds the entire proportional system of a dzong fortress in memory and conveys measurements to apprentices through a small set of cubit-based hand signals. Recent ethnographic work suggests that this oral-gestural transmission is not a limitation but a feature: because no fixed plan exists, each new dzong can adapt to the slope, light, and prevailing winds of its specific site without the master ever needing to revise a written drawing. The persistence of the system into the twenty-first century therefore suggests that ________",
  question: "Which choice most logically completes the text?",
  choices: [
    { id: "A", text: "Bhutanese builders are unable to read or produce architectural drawings even when given the opportunity." },
    { id: "B", text: "the absence of fixed drawings allows site-by-site adaptation that a drawing-based system would constrain." },
    { id: "C", text: "the cubit-based hand signals are a recent innovation borrowed from neighboring countries." },
    { id: "D", text: "dzongs built from memory are structurally less stable than those built from drawings." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Inferences (Logical Completion)**\n\n**Choice B is correct.**\n\nThe passage explicitly says the system is \"not a limitation but a feature\" because, with no fixed plan, each dzong can adapt to its site. The completion has to follow that logic: the *absence* of fixed drawings *enables* adaptation.\n\n**Why the wrong answers are tempting:**\n* Choice A: the passage doesn't claim builders are illiterate in drawings — only that they don't use them.\n* Choice C: \"recent innovation\" contradicts \"persistence into the twenty-first century.\"\n* Choice D: the passage offers no claim about structural stability — and frames the system positively."
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Information and Ideas",
  skill: "inferences",
  passage: "The Australian wattle (genus *Acacia*) has long been associated with rapid recolonization of recently burned eucalypt forest, but field surveys after the 2019–2020 fires complicated that picture. While wattle seedlings appeared abundantly in the first post-fire spring, three-year follow-ups showed that wattle stands established on south-facing slopes thinned dramatically as overstory eucalypts recovered, while wattle on north-facing slopes persisted. Soil moisture measurements suggest that prolonged dry summers on north-facing slopes prevent the eucalypts from closing the canopy quickly enough to shade out the wattle. These findings imply that ________",
  question: "Which choice most logically completes the text?",
  choices: [
    { id: "A", text: "wattle's role as a post-fire colonizer is uniform across slope orientation in eucalypt forests." },
    { id: "B", text: "wattle persistence after fire depends on slope-driven differences in canopy recovery rates rather than on wattle traits alone." },
    { id: "C", text: "north-facing eucalypt stands recover their canopy faster than south-facing stands." },
    { id: "D", text: "wattle is unable to germinate in eucalypt forest unless a fire has recently occurred." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Inferences (Logical Completion)**\n\n**Choice B is correct.**\n\nThe passage shows that wattle persists or thins depending on whether eucalypts close the canopy fast — and that depends on slope-driven moisture. So persistence depends on slope and canopy recovery, not on wattle alone.\n\n**Why the wrong answers are tempting:**\n* Choice A: the data show *non-uniform* outcomes by slope orientation — the opposite.\n* Choice C: the passage states north-facing stands recover *more slowly* (drier).\n* Choice D: the passage doesn't address germination outside post-fire conditions."
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Information and Ideas",
  skill: "command-of-evidence-quantitative",
  passage: "A team of conservation biologists studied the long-term success of community-managed mangrove restoration plots along the coast of southeastern Bangladesh. The researchers compared the survival rate (the percentage of planted seedlings still alive after five years) for plots managed under three different governance models. They argued that the rotating-stewardship model produces higher survival than either the single-leader or the open-access model.",
  questionTable: {
    type: "table",
    caption: "Five-year mangrove seedling survival by governance model (%)",
    headers: ["Governance model", "Survival rate (%)"],
    rows: [
      ["Single-leader", "41"],
      ["Open-access", "29"],
      ["Rotating-stewardship", "67"]
    ]
  },
  question: "Which choice most effectively uses data from the table to support the team's argument?",
  choices: [
    { id: "A", text: "The rotating-stewardship plots had a survival rate of 67%, more than 25 percentage points higher than either the single-leader (41%) or open-access (29%) plots." },
    { id: "B", text: "Single-leader and open-access plots both fell below 50% survival, suggesting that mangrove restoration in Bangladesh is generally unsuccessful." },
    { id: "C", text: "Open-access plots had the lowest survival rate, at 29%." },
    { id: "D", text: "Rotating-stewardship plots had a survival rate of 67%, higher than the open-access plots (29%)." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Command of Evidence (Quantitative)**\n\n**Choice A is correct.**\n\nThe team's argument is that rotating-stewardship beats *both* of the other two. Choice A makes both comparisons (vs. single-leader 41%, vs. open-access 29%) and quantifies the gap (more than 25 points), giving the strongest direct support.\n\n**Why the wrong answers are tempting:**\n* Choice B: contradicts the team's argument — they're highlighting a successful model.\n* Choice C: only describes open-access; doesn't show rotating-stewardship is best.\n* Choice D: only one of the two comparisons; weaker than A."
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Information and Ideas",
  skill: "command-of-evidence-textual",
  passage: "In her 2022 book *The Listening Workshop*, the music historian Aiyana Chen argues that the Kazakh dombra (a two-stringed long-necked lute) survived twentieth-century cultural pressures not because it was preserved as a museum object but because rural music teachers continued to use it as a working instrument in everyday teaching, adapting its repertoire to whatever students wanted to learn — including, by the 1980s, Soviet pop melodies and Beatles tunes.",
  question: "Which finding, if true, would most directly support Chen's argument?",
  choices: [
    { id: "A", text: "Surveys of Kazakh village music teachers from 1965 to 1985 show that the dombra was the most commonly used instrument for teaching new students contemporary popular songs." },
    { id: "B", text: "Several Soviet-era museum exhibits in Almaty featured antique dombras displayed behind glass." },
    { id: "C", text: "A 1972 government decree formally classified the dombra as a protected national instrument." },
    { id: "D", text: "Late-twentieth-century recordings of dombra concerts focused on traditional epic poetry rather than popular music." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Command of Evidence (Textual)**\n\n**Choice A is correct.**\n\nChen's argument has two parts: (1) the dombra survived because rural teachers used it as a *working* instrument, and (2) they adapted its repertoire to whatever students wanted, including Soviet pop and Beatles tunes. Choice A directly supports both: surveys of village teachers show heavy use *in everyday teaching* of *contemporary popular songs*.\n\n**Why the wrong answers are tempting:**\n* Choice B: museum display contradicts Chen's claim — she says preservation as a museum object was *not* the cause.\n* Choice C: a government decree describes top-down protection, not bottom-up everyday use.\n* Choice D: focusing on traditional epic poetry undercuts Chen's claim about popular adaptation."
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Information and Ideas",
  skill: "command-of-evidence-quantitative",
  passage: "In a 2021 paper, the sleep researcher Daniela Restrepo investigated whether short structured naps improve afternoon performance on a working-memory task in undergraduate participants. Restrepo argued that the *type* of nap matters: a brief slow-wave-only nap (about 20 minutes) and a longer nap reaching REM sleep (about 90 minutes) would both help, but a partial nap of intermediate length (about 50 minutes), interrupted in mid-stage, would actually hurt performance compared to no nap at all.",
  questionTable: {
    type: "table",
    caption: "Mean accuracy on afternoon working-memory task (%) by nap condition",
    headers: ["Nap condition", "Mean accuracy (%)"],
    rows: [
      ["No nap", "71"],
      ["20-minute nap", "78"],
      ["50-minute nap", "62"],
      ["90-minute nap", "80"]
    ]
  },
  question: "Which choice most effectively uses data from the table to support Restrepo's argument?",
  choices: [
    { id: "A", text: "The 20-minute nap (78%) and 90-minute nap (80%) both yielded higher accuracy than the no-nap condition (71%), while the 50-minute nap yielded the lowest accuracy of any condition (62%)." },
    { id: "B", text: "The 90-minute nap (80%) yielded the highest accuracy of any condition." },
    { id: "C", text: "All four conditions yielded mean accuracy above 60%." },
    { id: "D", text: "The 50-minute nap (62%) yielded lower accuracy than the no-nap condition (71%), supporting Restrepo's claim that intermediate naps hurt performance." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Command of Evidence (Quantitative)**\n\n**Choice A is correct.**\n\nRestrepo's argument has *three* claims: (1) short slow-wave nap helps, (2) long REM nap helps, (3) intermediate interrupted nap hurts. Choice A addresses *all three* — the 20- and 90-minute naps both beat no nap, and the 50-minute nap yielded the lowest accuracy of any condition.\n\n**Why the wrong answers are tempting:**\n* Choice B: only supports claim 2 — silent on the intermediate nap and the short nap.\n* Choice C: a generic minimum statement that doesn't speak to the argument.\n* Choice D: only supports claim 3, not claims 1 and 2 — incomplete."
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Information and Ideas",
  skill: "command-of-evidence-textual",
  passage: "In her 2023 monograph on Quechua textile economies, the anthropologist Elena Cárdenas argues that highland weaving cooperatives that retain ownership of their dye recipes earn substantially more per finished piece than cooperatives that share recipes with outside textile brokers. She frames recipe ownership as a form of community-controlled intellectual property whose value lies not in legal enforcement but in collective consensus.",
  question: "Which finding, if true, would most directly support Cárdenas's argument?",
  choices: [
    { id: "A", text: "A multi-year price audit of forty highland cooperatives showed that those that did not share dye recipes with brokers earned a per-piece premium of 35–60 percent over those that did." },
    { id: "B", text: "Several outside brokers reported difficulty obtaining dye recipes from highland cooperatives." },
    { id: "C", text: "A few highland cooperatives have begun applying for formal trademark protection for their dye recipes." },
    { id: "D", text: "Cooperatives that share dye recipes are more likely to expand into export markets." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Command of Evidence (Textual)**\n\n**Choice A is correct.**\n\nCárdenas's central claim is *quantitative*: cooperatives that retain dye recipes earn substantially more per piece. Choice A is exactly that comparison, with hard numbers (35–60% premium across forty cooperatives).\n\n**Why the wrong answers are tempting:**\n* Choice B: speaks to broker frustration, not earnings.\n* Choice C: trademark protection contradicts her claim that value comes from \"collective consensus,\" not legal enforcement.\n* Choice D: undermines the argument — it suggests recipe sharing aids growth."
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  domain: "Standard English Conventions",
  skill: "boundaries",
  passage: "The mountain hare of the Scottish Highlands turns white in winter to blend with snow ________ in years with little snowfall, the white coat actually makes the hare more visible to predators against a brown landscape.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "cover, however," },
    { id: "B", text: "cover. However," },
    { id: "C", text: "cover however," },
    { id: "D", text: "cover; however" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Boundaries (Sentence Boundaries)**\n\n**Choice B is correct.**\n\nThe passage has two independent clauses: \"The mountain hare ... turns white ... to blend with snow cover\" and \"in years with little snowfall, the white coat actually makes the hare more visible.\" The cleanest fix is a period after \"cover,\" then \"However,\" with a comma, starting a new sentence.\n\n**Why the wrong answers are tempting:**\n* Choice A: comma + however + comma creates a comma splice between two independent clauses.\n* Choice C: missing punctuation around \"however\" creates a run-on.\n* Choice D: needs a comma after \"however\" when it begins a sentence-like clause."
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  domain: "Standard English Conventions",
  skill: "form-structure-and-sense",
  passage: "Among the foods recently added to UNESCO's Intangible Cultural Heritage list ________ Korean kimchi-making, Mexican mole, and Belgian beer culture.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "is" },
    { id: "B", text: "are" },
    { id: "C", text: "was" },
    { id: "D", text: "has been" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Form, Structure, and Sense (Subject-Verb Agreement)**\n\n**Choice B is correct.**\n\nThe sentence has an inverted structure: the *subject* is the plural list \"Korean kimchi-making, Mexican mole, and Belgian beer culture.\" Plural subject takes the plural verb \"are.\" The opening prepositional phrase \"Among the foods...\" is not the subject.\n\n**Why the wrong answers are tempting:**\n* Choices A, C, D: all singular forms; do not agree with the plural subject."
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  domain: "Standard English Conventions",
  skill: "boundaries",
  passage: "The Finnish folk poet Larin Paraske, who lived from 1833 to 1904, is credited with dictating more than 32,000 lines of oral verse to the linguist Adolf Neovius ________ collection of these recordings remains an essential source for scholars of Karelian poetic tradition.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "his" },
    { id: "B", text: ". His" },
    { id: "C", text: ", his" },
    { id: "D", text: "; his" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Boundaries (Sentence Boundaries)**\n\n**Choice B is correct.**\n\nThere are two independent clauses: \"The Finnish folk poet ... is credited with dictating more than 32,000 lines of oral verse to the linguist Adolf Neovius\" and \"His collection of these recordings remains an essential source.\" A period correctly separates them, and \"His\" is then capitalized.\n\n**Why the wrong answers are tempting:**\n* Choice A: no punctuation creates a run-on.\n* Choice C: comma splice between two independent clauses.\n* Choice D: a semicolon would need lowercase \"his,\" not capitalized."
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  domain: "Standard English Conventions",
  skill: "form-structure-and-sense",
  passage: "By the time researchers arrived at the Mongolian field site in late October, the herders ________ the summer pastures three weeks earlier and were already settled at their winter camp.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "leave" },
    { id: "B", text: "have left" },
    { id: "C", text: "had left" },
    { id: "D", text: "are leaving" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Form, Structure, and Sense (Verb Tense)**\n\n**Choice C is correct.**\n\nThe sentence describes two past events. The arrival happened in late October (simple past, implied by \"arrived\"). The herders' departure happened *earlier* than the arrival — three weeks earlier. To mark a past event that precedes another past event, English uses the past perfect: \"had left.\"\n\n**Why the wrong answers are tempting:**\n* Choice A: simple present doesn't fit the narrative past.\n* Choice B: present perfect places the event in a span continuing to now, not before another past event.\n* Choice D: present progressive doesn't match the past frame."
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  domain: "Standard English Conventions",
  skill: "boundaries",
  passage: "Before founding her own studio, the Estonian textile artist Maarja Kuusk apprenticed in three workshops ________ a tapestry studio in Tallinn, a wool dye-house in Tartu, and a knitwear cooperative in Pärnu.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: ", that included" },
    { id: "B", text: ": " },
    { id: "C", text: "; namely" },
    { id: "D", text: ", " }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Boundaries (Colon for Lists)**\n\n**Choice B is correct.**\n\nThe first part of the sentence — \"Before founding her own studio, the Estonian textile artist Maarja Kuusk apprenticed in three workshops\" — is a complete independent clause. What follows is a list elaborating *which three workshops*. A colon correctly introduces such a list after a complete clause.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"that included\" introduces a restrictive clause but does not punctuate correctly with the list that follows.\n* Choice C: \"; namely\" requires \", \" or another mark before \"a tapestry studio\" and is awkward stylistically.\n* Choice D: a comma alone is too weak to introduce the elaborating list and creates a run-on feel."
},
{
  id: 23,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Standard English Conventions",
  skill: "form-structure-and-sense",
  passage: "Each of the apprentice icon painters who studied under Borisova in the late 1980s ________ trained for at least two years in mineral pigment preparation before being allowed to apply paint to a panel.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "were" },
    { id: "B", text: "have been" },
    { id: "C", text: "was" },
    { id: "D", text: "are" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Form, Structure, and Sense (Subject-Verb Agreement)**\n\n**Choice C is correct.**\n\nThe subject is \"Each\" — singular — modified by the prepositional phrase \"of the apprentice icon painters who studied under Borisova in the late 1980s.\" \"Each\" takes a singular verb, and because the events are in the late 1980s (a closed past), \"was\" is the right form.\n\n**Why the wrong answers are tempting:**\n* Choice A: plural \"were\" disagrees with singular \"each.\"\n* Choice B: present perfect doesn't fit a closed past frame (\"in the late 1980s\").\n* Choice D: present-tense plural \"are\" wrongly matches the plural prepositional phrase."
},
{
  id: 24,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  domain: "Expression of Ideas",
  skill: "transitions",
  passage: "Most domesticated honey bees in North America belong to a single subspecies originally imported from Europe. ________ the wild bee fauna of the continent includes more than 4,000 native species, many of them solitary and ground-nesting rather than colony-dwelling.",
  question: "Which choice completes the text with the most logical transition?",
  choices: [
    { id: "A", text: "Furthermore," },
    { id: "B", text: "By contrast," },
    { id: "C", text: "As a result," },
    { id: "D", text: "For instance," }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Transitions**\n\n**Choice B is correct.**\n\nFirst sentence: domesticated honey bees are a *single, imported, colony-dwelling* subspecies. Second sentence: native bees number 4,000+ species, *many solitary and ground-nesting*. The two facts are set up against each other — \"By contrast\" signals exactly that opposition.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"Furthermore\" implies adding a similar fact, not contrasting.\n* Choice C: there's no cause-effect relationship between the two sentences.\n* Choice D: \"For instance\" introduces an example, but the second sentence is a contrasting claim, not an instance."
},
{
  id: 25,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Expression of Ideas",
  skill: "transitions",
  passage: "Early twentieth-century industrial designers tended to assume that a chair's success was determined almost entirely by its silhouette. ________ recent eye-tracking studies of museum-goers suggest that what holds visitors at a chair display is the texture of its arm and seat surfaces, not its profile from across the room.",
  question: "Which choice completes the text with the most logical transition?",
  choices: [
    { id: "A", text: "Likewise," },
    { id: "B", text: "However," },
    { id: "C", text: "Therefore," },
    { id: "D", text: "Specifically," }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Transitions**\n\n**Choice B is correct.**\n\nFirst sentence: designers assumed silhouette mattered most. Second sentence: recent studies suggest *texture* matters, not silhouette. The second sentence overturns the first — \"However\" signals exactly that reversal.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"Likewise\" implies adding a similar finding, but the studies *contradict* the older assumption.\n* Choice C: \"Therefore\" claims causation; the second sentence is a counterfinding, not a consequence.\n* Choice D: \"Specifically\" introduces a more precise version of the same claim, but the studies are a different claim."
},
{
  id: 26,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Expression of Ideas",
  skill: "rhetorical-synthesis",
  studentNotes: {
    intro: "While researching for a presentation, a student took the following notes:",
    bullets: [
      "Larin Paraske (1833–1904) was a Karelian-language oral poet from Ingria, near the Finnish border.",
      "Between 1887 and 1893, the linguist Adolf Neovius recorded more than 32,000 lines of her sung verse.",
      "Paraske did not read or write; the entire repertoire existed in her memory.",
      "The Neovius collection is now considered foundational for the study of Karelian rune-song.",
      "Paraske's verse uses the four-beat trochaic tetrameter shared with much Finnish folk poetry."
    ],
    goal: "The student wants to emphasize the scholarly importance of the Neovius–Paraske collaboration."
  },
  question: "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  choices: [
    { id: "A", text: "Larin Paraske, a Karelian-language oral poet who lived from 1833 to 1904, used the four-beat trochaic tetrameter shared with much Finnish folk poetry." },
    { id: "B", text: "Between 1887 and 1893, the linguist Adolf Neovius recorded more than 32,000 lines of Larin Paraske's sung verse — a collection now considered foundational for the study of Karelian rune-song." },
    { id: "C", text: "Larin Paraske did not read or write; her entire repertoire existed in her memory." },
    { id: "D", text: "Larin Paraske was a Karelian-language oral poet from Ingria, near the Finnish border, and the four-beat trochaic tetrameter she used is shared with much Finnish folk poetry." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Rhetorical Synthesis**\n\n**Choice B is correct.**\n\nThe student wants to emphasize the *scholarly importance of the Neovius–Paraske collaboration*. Choice B does exactly that: it names the collaboration (\"Neovius recorded ... Paraske's sung verse\"), gives the scope (32,000 lines), and labels the scholarly importance directly (\"foundational for the study of Karelian rune-song\").\n\n**Why the wrong answers are tempting:**\n* Choice A: focuses on meter, not the collaboration's importance.\n* Choice C: highlights Paraske's illiteracy without naming Neovius or the collection's scholarly value.\n* Choice D: focuses on geographic and metrical context, not the collaboration's scholarly importance."
},
{
  id: 27,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Expression of Ideas",
  skill: "rhetorical-synthesis",
  studentNotes: {
    intro: "While researching for an essay, a student took the following notes:",
    bullets: [
      "Beaver dams in Wyoming creeks raise upstream water tables.",
      "After dam removal, downstream summer flows have been measured to drop 40–60 percent.",
      "Beaver dams support sedge and willow regrowth along formerly bare banks.",
      "Salmon parr have been observed using slow pools behind dams as nurseries.",
      "Hydrologist Marcus Kettering describes beaver dams as \"slow-release reservoirs.\""
    ],
    goal: "The student wants to emphasize that beaver dams provide measurable hydrological benefits to downstream ecosystems."
  },
  question: "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  choices: [
    { id: "A", text: "Beaver dams support sedge and willow regrowth along formerly bare banks, and salmon parr have been observed using the slow pools behind the dams as nurseries." },
    { id: "B", text: "Hydrologist Marcus Kettering describes beaver dams as \"slow-release reservoirs.\"" },
    { id: "C", text: "After dam removal, downstream summer flows have been measured to drop 40 to 60 percent — quantitative evidence that beaver dams act, in Marcus Kettering's words, as \"slow-release reservoirs\" supporting downstream ecosystems." },
    { id: "D", text: "Beaver dams in Wyoming creeks raise upstream water tables, and salmon parr have been observed using the slow pools behind dams as nurseries." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Rhetorical Synthesis**\n\n**Choice C is correct.**\n\nThe goal asks for *measurable hydrological benefits to downstream ecosystems*. Choice C combines (1) the *measurement* (40–60% flow drop after removal), (2) the *hydrological framing* (\"slow-release reservoirs\"), and (3) the *downstream beneficiary* (\"supporting downstream ecosystems\"). It hits all three pieces of the goal.\n\n**Why the wrong answers are tempting:**\n* Choice A: ecological details (sedge, salmon) but no measurable hydrology.\n* Choice B: gives only the metaphor with no measurable evidence.\n* Choice D: mixes upstream water tables and salmon — neither shows measurable downstream hydrology."
}
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 32,
      questions: [
{
  id: 1,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Craft and Structure",
  skill: "words-in-context",
  passage: "The architectural historian Tashi Wangchuk argues that the apparent uniformity of Bhutanese dzong design is misleading. His comparative survey of fifteen valley fortresses shows that masters within the same lineage will deliberately ________ subtle proportional differences — a slightly steeper roof pitch here, a narrower courtyard there — that local communities can read at a glance, even when outside observers cannot.",
  question: "Which choice completes the text with the most logical and precise word or phrase?",
  choices: [
    { id: "A", text: "conceal" },
    { id: "B", text: "introduce" },
    { id: "C", text: "deny" },
    { id: "D", text: "outlaw" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Words in Context (Fill-in)**\n\n**Choice B is correct.**\n\nWangchuk's claim is that masters *put* subtle differences into their dzongs that locals can read. The verb has to mean *adding* or *building in* — \"introduce\" fits exactly.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"conceal\" contradicts the point that locals can read the differences.\n* Choice C: \"deny\" doesn't fit physical features built into stone and wood.\n* Choice D: \"outlaw\" is far too strong and doesn't fit a master-builder context."
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Craft and Structure",
  skill: "words-in-context",
  passage: "The dombra player Aibek Kuanysh once described his teacher's pedagogy as relentlessly ________: rather than telling students what a phrase should sound like, the older musician would play the same opening four bars again and again, faster and slower, louder and softer, leaving each student to deduce on their own which version best fit the song's argument.",
  question: "Which choice completes the text with the most logical and precise word or phrase?",
  choices: [
    { id: "A", text: "prescriptive" },
    { id: "B", text: "indirect" },
    { id: "C", text: "lazy" },
    { id: "D", text: "joyless" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Words in Context (Fill-in)**\n\n**Choice B is correct.**\n\nThe colon explains the missing word: the teacher does *not* tell students what the phrase should sound like; instead he plays variants and lets them figure it out. That is the textbook definition of *indirect* teaching.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"prescriptive\" is the opposite — it would mean telling them what to do.\n* Choice C: \"lazy\" misreads patient demonstration as slack.\n* Choice D: \"joyless\" describes mood, not pedagogical method."
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Craft and Structure",
  skill: "words-in-context",
  passage: "Although Soviet-era ethnographers often treated traditional Estonian song festivals as a fixed body of repertoire to be ________, more recent fieldwork suggests that participating choirs continually shifted their selections in response to political weather, school curricula, and conductor preference, treating the canon as a living negotiation rather than as a closed list.",
  question: "Which choice completes the text with the most logical and precise word or phrase?",
  choices: [
    { id: "A", text: "preserved" },
    { id: "B", text: "abandoned" },
    { id: "C", text: "questioned" },
    { id: "D", text: "translated" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Words in Context (Fill-in)**\n\n**Choice A is correct.**\n\nThe contrast structure (\"Although ... more recent fieldwork suggests ... a living negotiation rather than as a closed list\") tells us the older view treated the repertoire as a *fixed* thing to be *kept* unchanged. \"Preserved\" matches that — keeping a body of repertoire intact.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"abandoned\" is the opposite of treating the repertoire as a fixed body.\n* Choice C: \"questioned\" doesn't match \"a fixed body to be...\"; the older ethnographers treated it as settled.\n* Choice D: \"translated\" doesn't fit a living-language tradition's own repertoire."
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Craft and Structure",
  skill: "text-structure-and-purpose",
  passage: "For most of the twentieth century, geomorphologists treated soil erosion in agricultural landscapes as a uniformly slow and gradual process. A 2020 study by soil scientist Naledi Khumalo argues for a sharper revision. __By coring 120 maize fields across three South African provinces and dating distinct sediment layers with cesium-137 fallout signatures, Khumalo's team showed that more than half of the post-1960 topsoil loss in those fields occurred during fewer than ten extreme rainfall events per decade — meaning the average rate masks an episodic, storm-driven reality.__",
  question: "Which choice best describes the function of the underlined sentence in the text as a whole?",
  choices: [
    { id: "A", text: "It introduces a counterexample that complicates Khumalo's revision." },
    { id: "B", text: "It presents the dating evidence and inferred mechanism that ground Khumalo's revision." },
    { id: "C", text: "It contrasts two competing soil-dating methods without endorsing either one." },
    { id: "D", text: "It questions whether twentieth-century geomorphologists actually held the older view." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Text Structure and Purpose**\n\n**Choice B is correct.**\n\nThe first two sentences set up: old view (slow, gradual erosion) → Khumalo argues for a sharper revision. The underlined sentence then provides the *dating evidence* (coring, cesium-137 signatures) and the *inferred mechanism* (episodic, storm-driven loss in fewer than ten events per decade) that grounds the revision.\n\n**Why the wrong answers are tempting:**\n* Choice A: there's no counterexample — the data support Khumalo.\n* Choice C: only one dating method (cesium-137) is named.\n* Choice D: the passage accepts that the older view was held."
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Craft and Structure",
  skill: "text-structure-and-purpose",
  passage: "The following text is adapted from Brigitta Tamm's 2022 short story \"The Lighthouse on Saaremaa.\" Reet, a lighthouse keeper, is on the last shift of her summer assignment.\n\nReet wound the clockwork that drove the rotating lens for the final time, climbing down the iron stairs in the slow practiced way that her shoulder, since the long winter, had forced her to keep. The chamber went quiet behind her — only the soft tick of the gear train, audible now that the bulb was steady on the horizon. __She paused at the bottom landing, her hand on the cool wall, and listened to the building hold its breath against the wind from the Baltic.__ It was the kind of quiet that, she sometimes told visitors, the mainland never offered.",
  question: "Which choice best describes the function of the underlined sentence in the text?",
  choices: [
    { id: "A", text: "It marks a shift from physical action to interior reflection." },
    { id: "B", text: "It establishes a contrast between the lighthouse's interior and the wider Baltic landscape." },
    { id: "C", text: "It contradicts the calm tone established earlier in the passage." },
    { id: "D", text: "It signals that Reet is about to lose her job permanently." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Text Structure and Purpose (Literary)**\n\n**Choice A is correct.**\n\nThe sentences before describe Reet's *actions* (winding the clockwork, descending the stairs). The underlined sentence shifts to her standing still, listening, and the next sentence is *what she thinks* about that quiet. The underlined sentence is the pivot from doing to reflecting.\n\n**Why the wrong answers are tempting:**\n* Choice B: there's no real contrast between interior and landscape — both are part of the same calm.\n* Choice C: the tone stays calm and reflective.\n* Choice D: nothing in the passage suggests job loss."
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Craft and Structure",
  skill: "cross-text-connections",
  passages: [
    {
      label: "Text 1",
      text: "Recent calls for restoring small-scale hanji (Korean mulberry-paper) workshops in rural counties have been propelled by craft-policy researchers who emphasize the cultural, ecological, and small-business benefits of locally rooted papermaking. The model promises domestic supply for restoration of historic documents, low-impact mulberry cultivation, and the steady employment of skilled artisans in shrinking rural towns."
    },
    {
      label: "Text 2",
      text: "Material culture historian Yu-Jin Han is sympathetic to the goals of the hanji revival movement but cautions that \"workshop reopening\" alone is not the same as a sustainable craft economy. Her studies of mid-2010s pilot programs in two Korean provinces show that without long-term contracts from museums and archives, restored workshops frequently take losses on each batch and close within seven years. Without such guaranteed demand, she argues, the model risks recreating exactly the rural decline it was meant to reverse."
    }
  ],
  question: "Based on the texts, how would Han (Text 2) most likely respond to the claim made by the researchers in Text 1?",
  choices: [
    { id: "A", text: "By rejecting the cultural and ecological benefits as overstated." },
    { id: "B", text: "By acknowledging the benefits but warning that achieving a sustainable craft economy depends on demand-side policy choices the researchers do not address." },
    { id: "C", text: "By arguing that small-scale hanji workshops are technically impossible to operate outside Seoul." },
    { id: "D", text: "By insisting that the hanji revival model has already been disproven by the pilot record." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Cross-Text Connections**\n\n**Choice B is correct.**\n\nText 2 says Han is \"sympathetic to the goals\" — so she agrees with the benefits in spirit. But she adds a *condition*: without long-term contracts (a demand-side policy), the model risks bad outcomes. That is exactly choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A: Han doesn't reject the benefits.\n* Choice C: she never claims technical impossibility.\n* Choice D: \"already been disproven\" is too strong — she warns about a *risk*."
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  domain: "Craft and Structure",
  skill: "cross-text-connections",
  passages: [
    {
      label: "Text 1",
      text: "The novelist Helga Reinhardt, in a 1979 essay on her craft, argued that the strongest novel openings are those whose central tension the reader does not consciously recognize until the second chapter — a phrase glimpsed once, an image returned to later — so that recognition arrives quietly rather than as fanfare. The trick, she said, is to plant the tension so unobtrusively that the reader registers only the world of the book, not its load-bearing first sentence."
    },
    {
      label: "Text 2",
      text: "In a recent essay rereading Reinhardt's third novel, the critic Olu Adebayo notes that several of Reinhardt's contemporary reviewers complained that the opening chapter \"failed to establish stakes\" and \"introduced characters without consequence.\" Adebayo argues that those complaints reveal a generational reading habit: reviewers in the late 1970s expected openings that announced their stakes, and Reinhardt's quieter setup read to them as no setup at all."
    }
  ],
  question: "Based on the texts, how would Adebayo (Text 2) most likely characterize the late-1970s reviewers' complaints?",
  choices: [
    { id: "A", text: "a flaw in Reinhardt's craft that the reviewers correctly identified." },
    { id: "B", text: "a misunderstanding rooted in the reviewers' expectations rather than in the novel itself." },
    { id: "C", text: "a deliberate provocation by Reinhardt aimed at her contemporaries." },
    { id: "D", text: "a breakdown in communication between editors and reviewers of the period." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Cross-Text Connections (Inference)**\n\n**Choice B is correct.**\n\nAdebayo argues the complaints \"reveal a generational reading habit\" — that is, the *reviewers* were trained to expect loud stakes-setting, so Reinhardt's quieter setup registered as none at all. The flaw is in the reviewers' habits, not in Reinhardt's craft.\n\n**Why the wrong answers are tempting:**\n* Choice A: Adebayo is *defending* Reinhardt, not validating reviewers.\n* Choice C: Adebayo doesn't claim Reinhardt was provoking anyone.\n* Choice D: there's no editor/reviewer communication issue in the text."
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Information and Ideas",
  skill: "central-ideas-and-details",
  passage: "Contrary to a long-standing assumption, the Caribbean steel pan is not a single homogeneous instrument shaped uniformly across Trinidad and Tobago. Each of the surviving rural \"yards\" (community workshops) maintains its own preferred hammering rhythm, oil-tempering schedule, and note-layout convention, producing pans that experienced players can identify by touch alone. Recent comparative work by ethnomusicologists in San Fernando has shown that two pans tuned to the same key by different yards can differ measurably in overtone profile, suggesting that the steel pan tradition is organized along a finer regional grain than earlier accounts proposed.",
  question: "Which choice best states the main idea of the text?",
  choices: [
    { id: "A", text: "Caribbean steel pans are made identically across all rural yards." },
    { id: "B", text: "The steel pan tradition is regionally differentiated by yard, with measurable acoustic differences, complicating earlier accounts." },
    { id: "C", text: "Players can no longer identify pans by touch alone." },
    { id: "D", text: "Researchers in San Fernando have proven that all steel pans are out of tune with one another." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Central Ideas and Details**\n\n**Choice B is correct.**\n\nThe whole passage is making one point: each yard has its own techniques, the resulting pans differ measurably (overtone profile), and the tradition is finer-grained than earlier accounts suggested. The San Fernando work is evidence for that point.\n\n**Why the wrong answers are tempting:**\n* Choice A: this is the *old* assumption the passage is correcting.\n* Choice C: the passage actually says experienced players *can* identify pans by touch.\n* Choice D: \"out of tune\" misreads \"differ in overtone profile\" — the passage is about timbre differences, not tuning errors."
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Information and Ideas",
  skill: "central-ideas-and-details",
  passage: "In a 1968 letter to her former teacher, the geneticist Suheir Khalili described the moment she decided to abandon her planned dissertation on cytoplasmic inheritance in maize and turn instead to studying the heritability of dye-yield in cotton plants raised by smallholder farmers in the Nile Delta. \"I had been writing about cells that no farmer would ever ask about,\" she wrote, \"and I begin to suspect that the only honest genetics left to do is the genetics of plants whose cultivators care which trait wins.\" The shift would, within five years, produce one of the foundational case studies of farmer-engaged plant breeding.",
  question: "Which choice best states the main idea of the text?",
  choices: [
    { id: "A", text: "Khalili abandoned genetics in 1968 to pursue cotton farming as a livelihood." },
    { id: "B", text: "Khalili's redirection from cytoplasmic inheritance to dye-yield genetics in farmer-raised cotton was driven by a search for genetics that mattered to its cultivators." },
    { id: "C", text: "Khalili's letter to her former teacher was the most influential publication of her career." },
    { id: "D", text: "Cytoplasmic inheritance in maize is less genetically interesting than dye-yield in cotton." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Central Ideas and Details**\n\n**Choice B is correct.**\n\nThe passage is about *why* Khalili changed her work: she wanted genetics that the cultivators themselves cared about. The result was a foundational case study of farmer-engaged plant breeding.\n\n**Why the wrong answers are tempting:**\n* Choice A: she didn't abandon genetics — she changed *which* genetics.\n* Choice C: the passage doesn't claim the letter was her most influential anything.\n* Choice D: the passage doesn't compare scientific interestingness — it describes a personal redirection."
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Information and Ideas",
  skill: "central-ideas-and-details",
  passage: "The Nubian pyramid sites of present-day Sudan were once described by nineteenth-century European travelers as a degraded provincial echo of Egyptian funerary architecture. By the late twentieth century, however, careful re-excavation showed that the smaller, steeper Nubian pyramids predate many of their supposed Egyptian \"models\" by at least four hundred years and use construction methods — cribbed-stone interiors, mudbrick filler — that have no clear Egyptian precedent. Conservation strategies in the 1990s assumed that what mattered was reinforcing the visible exterior masonry. More recent structural studies have complicated that assumption: the surviving pyramids depend on the integrity of their internal cribbing, and exterior-only reinforcement risks accelerating collapse of the very interiors it was meant to protect.",
  question: "Which choice best states the main idea of the text?",
  choices: [
    { id: "A", text: "Nubian pyramids are smaller and steeper than Egyptian pyramids." },
    { id: "B", text: "Conservation strategies that worked for Egyptian pyramids cannot be applied to Nubian pyramids." },
    { id: "C", text: "The 1990s exterior-only conservation approach is in tension with new structural findings about the Nubian pyramids' interior cribbing." },
    { id: "D", text: "Nineteenth-century European travelers were correct that Nubian pyramids were a degraded echo of Egyptian designs." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Central Ideas and Details**\n\n**Choice C is correct.**\n\nThe passage moves through historical reframing and then lands on a tension: the 1990s assumed exterior reinforcement was what mattered, but new structural studies show the *interior cribbing* is load-bearing — so exterior-only work risks accelerating collapse. That tension is the central idea.\n\n**Why the wrong answers are tempting:**\n* Choice A: a true detail, not the central idea — and silent on conservation.\n* Choice B: too broad a generalization not actually made by the passage.\n* Choice D: the passage *rebuts* the European travelers' view, not endorses it."
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Information and Ideas",
  skill: "inferences",
  passage: "Although the bowhead whale of the Bering Sea was hunted to commercial collapse by the early twentieth century, ecologists have come to credit the species with a far broader role than its now-modest population suggests. Bowhead carcasses that fall to the seafloor support distinct communities of bone-eating worms, scavenging fish, and microbial mats for decades — sometimes more than a century — after death, slowly cycling carbon into the deep-sea food web. The relationship is now used as a textbook example of a _______",
  question: "Which choice most logically completes the text?",
  choices: [
    { id: "A", text: "single-species recovery effort." },
    { id: "B", text: "whale-fall ecosystem." },
    { id: "C", text: "failure of conservation, since the bowhead never recovered." },
    { id: "D", text: "competitive exclusion between large filter feeders." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Inferences (Logical Completion)**\n\n**Choice B is correct.**\n\nThe passage describes a sunken whale carcass supporting communities of organisms for decades. \"Whale-fall ecosystem\" is the textbook term for exactly that.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"single-species recovery\" misses the point about post-death ecological function.\n* Choice C: the passage frames the bowhead's broader ecological role positively, not as a failure narrative.\n* Choice D: there's no second filter feeder in the text."
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Information and Ideas",
  skill: "inferences",
  passage: "Estonian song festivals draw choirs of as many as 30,000 singers performing in unison, but ethnomusicologist Kati Mets has shown that the experience of mass synchrony does not depend on perfect alignment. Recordings from the 2014 festival reveal that pitch and onset spread across the chorus by as much as forty milliseconds, yet listeners — both inside the chorus and on the field — describe the result as \"a single voice.\" Mets interprets this as a perceptual phenomenon: when a sufficient number of voices fall within a narrow window, the human ear collapses the spread into a single fused tone. The argument therefore implies that ________",
  question: "Which choice most logically completes the text?",
  choices: [
    { id: "A", text: "even significant dispersion in onset and pitch can register as unison if enough voices remain inside a perceptual window." },
    { id: "B", text: "Estonian choirs are physically capable of perfectly synchronized onsets when properly trained." },
    { id: "C", text: "small ensembles of three or four singers will always sound more unified than a 30,000-voice chorus." },
    { id: "D", text: "song festivals would be more successful if the choirs were reduced in size." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Inferences (Logical Completion)**\n\n**Choice A is correct.**\n\nMets's argument: pitch and onset can spread by 40 ms, yet listeners hear a fused tone — because the ear collapses the spread when enough voices fall in a narrow window. The implication is exactly that *significant dispersion* can still *register as unison* given the perceptual window.\n\n**Why the wrong answers are tempting:**\n* Choice B: the passage says perfect synchrony is *not necessary* — and doesn't claim it's achievable either.\n* Choice C: the passage offers no comparison with small ensembles.\n* Choice D: the passage explains why large festivals work, not why they should shrink."
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  domain: "Information and Ideas",
  skill: "inferences",
  passage: "Hydrothermal vent fields on the East Pacific Rise host two adjacent kinds of habitat: high-temperature \"black smoker\" plumes (above 300°C) and lower-temperature \"diffuse flow\" zones (often below 50°C). Recent metagenomic sampling shows that the microbial communities in these two habitats share fewer than fifteen percent of their species, and that diffuse-flow microbes can metabolize sulfide compounds that the plume microbes cannot, while the reverse is true for hydrogen-rich substrates. These findings imply that ________",
  question: "Which choice most logically completes the text?",
  choices: [
    { id: "A", text: "vent fields are dominated by a single broad microbial community that operates uniformly across both habitats." },
    { id: "B", text: "the two adjacent vent habitats support functionally distinct microbial communities specialized for different chemistries." },
    { id: "C", text: "diffuse-flow zones lack any microbial life that can be cultured in the laboratory." },
    { id: "D", text: "high-temperature plumes are likely to disappear as deep-sea conditions stabilize." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Inferences (Logical Completion)**\n\n**Choice B is correct.**\n\nThe passage gives two facts: low species overlap (<15%) and complementary metabolic specializations (sulfide vs. hydrogen). Both facts point in the same direction: the two habitats support *functionally distinct* microbial communities specialized for different chemistries.\n\n**Why the wrong answers are tempting:**\n* Choice A: contradicts both the species and metabolic data.\n* Choice C: the passage describes diffuse-flow microbes — it doesn't claim they can't be cultured.\n* Choice D: the passage offers no claim about plume disappearance."
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Information and Ideas",
  skill: "command-of-evidence-quantitative",
  passage: "An interdisciplinary team studied whether the orientation of a Bhutanese dzong (whether its long axis faces the morning or afternoon sun) affects the energy demand of its interior chapels through the Himalayan winter. They argued that morning-oriented dzongs require less wintertime supplementary heating than afternoon-oriented dzongs, despite identical floor areas, because morning solar gain coincides with the chapels' liturgical use.",
  questionTable: {
    type: "table",
    caption: "Mean wintertime supplementary heating demand by dzong orientation (kWh/m²/season)",
    headers: ["Orientation", "Heating demand (kWh/m²/season)"],
    rows: [
      ["Morning-oriented", "84"],
      ["South-oriented (control)", "97"],
      ["Afternoon-oriented", "131"]
    ]
  },
  question: "Which choice most effectively uses data from the table to support the team's argument?",
  choices: [
    { id: "A", text: "Morning-oriented dzongs required 84 kWh/m²/season — 47 kWh/m²/season less than afternoon-oriented dzongs (131 kWh/m²/season), supporting the claim that orientation toward morning sun reduces wintertime heating demand." },
    { id: "B", text: "South-oriented dzongs required 97 kWh/m²/season, less than afternoon-oriented dzongs." },
    { id: "C", text: "All three orientations exceeded 80 kWh/m²/season, suggesting that orientation has little effect on heating demand." },
    { id: "D", text: "Afternoon-oriented dzongs had the highest heating demand at 131 kWh/m²/season." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Command of Evidence (Quantitative)**\n\n**Choice A is correct.**\n\nThe team's argument is that morning-oriented dzongs require *less* heating than afternoon-oriented dzongs. Choice A directly compares those two orientations (84 vs. 131 kWh/m²/season) and quantifies the gap (47 kWh/m²/season).\n\n**Why the wrong answers are tempting:**\n* Choice B: doesn't compare morning vs. afternoon — the relevant pair.\n* Choice C: contradicts the argument — orientation clearly matters.\n* Choice D: only describes afternoon-oriented; doesn't show that morning-oriented is lower."
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Information and Ideas",
  skill: "command-of-evidence-textual",
  passage: "In her 2023 study of Mongolian throat-singing pedagogy, the ethnomusicologist Dolgorsuren Erdene argues that the apparent uniformity of Khöömei vocal technique across the Khangai Mountains conceals a finer regional differentiation: each river valley's lineage of teachers favors a slightly different tongue-and-soft-palate position, and these differences are passed down through hands-on instruction rather than through any written description.",
  question: "Which finding, if true, would most directly support Erdene's argument?",
  choices: [
    { id: "A", text: "An ultrasound study of forty Khöömei singers from four Khangai river valleys identified statistically distinct tongue-shape clusters that aligned cleanly with each singer's reported teacher lineage." },
    { id: "B", text: "Several historical Mongolian texts on Khöömei have been translated into English." },
    { id: "C", text: "Khöömei singers from outside the Khangai Mountains can imitate Khangai singers convincingly after one semester of instruction." },
    { id: "D", text: "Some Khangai teachers teach more advanced students than others." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Command of Evidence (Textual)**\n\n**Choice A is correct.**\n\nErdene's claim has two parts: (1) regional differences exist in tongue-and-soft-palate position, and (2) those differences track teacher lineage. Choice A is exactly that — ultrasound data on tongue shape, clustered by river valley *and aligning with teacher lineage*.\n\n**Why the wrong answers are tempting:**\n* Choice B: translation of texts says nothing about regional vocal differences.\n* Choice C: easy imitation contradicts Erdene's claim that lineage produces durable differences.\n* Choice D: differences in advanced-student count don't speak to vocal technique at all."
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  domain: "Information and Ideas",
  skill: "command-of-evidence-quantitative",
  passage: "In a 2022 paper, the agroforestry researcher Jovita Aguilar tested whether interplanting Australian wattle (genus *Acacia*) with regenerating eucalypts on post-fire south-facing slopes improves the survival of eucalypt seedlings during the second post-fire summer. Aguilar argued that interplanting reliably improves eucalypt survival on south-facing slopes but offers no benefit — and possibly harm — on north-facing slopes, where wattle competes too aggressively for limited soil moisture.",
  questionTable: {
    type: "table",
    caption: "Eucalypt seedling survival in second post-fire summer (%) by slope orientation and treatment",
    headers: ["Slope orientation", "No interplant", "Wattle interplant"],
    rows: [
      ["South-facing", "44", "71"],
      ["North-facing", "38", "29"]
    ]
  },
  question: "Which choice most effectively uses data from the table to support Aguilar's argument?",
  choices: [
    { id: "A", text: "On south-facing slopes, wattle interplanting raised eucalypt survival from 44% to 71%, while on north-facing slopes survival fell from 38% to 29% — supporting the claim that the treatment helps on south-facing slopes but not on north-facing ones." },
    { id: "B", text: "Wattle interplanting raised eucalypt survival on south-facing slopes from 44% to 71%." },
    { id: "C", text: "North-facing slopes always had lower eucalypt survival than south-facing slopes." },
    { id: "D", text: "On north-facing slopes, eucalypt survival fell from 38% to 29% with wattle interplanting." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Command of Evidence (Quantitative)**\n\n**Choice A is correct.**\n\nAguilar's argument has *two* claims that point in opposite directions: (1) interplanting helps on south-facing slopes, and (2) interplanting hurts on north-facing slopes. Choice A reports *both* shifts — 44→71% on south-facing and 38→29% on north-facing — and ties them to the directional claim.\n\n**Why the wrong answers are tempting:**\n* Choice B: only supports claim 1.\n* Choice C: a generic between-slope comparison; doesn't speak to the *treatment* effect.\n* Choice D: only supports claim 2."
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Information and Ideas",
  skill: "command-of-evidence-textual",
  passage: "In her 2024 monograph on Russian icon workshops, the art historian Polina Sokolova argues that pre-Revolutionary monastery workshops kept their pigment recipes circulating among themselves through formal exchange agreements, and that this exchange — not any one workshop's secrecy — was the structural reason that the icon-painting tradition retained both technical excellence and broad regional reach into the early twentieth century.",
  question: "Which finding, if true, would most directly support Sokolova's argument?",
  choices: [
    { id: "A", text: "Surviving correspondence among twenty-four pre-Revolutionary monastery workshops documents formal exchange of pigment recipes among them, with technical quality scores from contemporary critics consistently higher in workshops with more exchange partners." },
    { id: "B", text: "Several pre-Revolutionary monasteries are known to have employed icon painters." },
    { id: "C", text: "One particularly secretive workshop is widely regarded as the technical pinnacle of the tradition." },
    { id: "D", text: "Pigment recipes from before the Revolution have been partially reconstructed by modern conservators." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Command of Evidence (Textual)**\n\n**Choice A is correct.**\n\nSokolova's claim has two parts: (1) workshops formally *exchanged* pigment recipes, and (2) that exchange — not secrecy — explains both *technical quality* and *regional reach*. Choice A is exactly that: documented exchange among twenty-four workshops *and* a positive relationship between exchange partners and quality scores.\n\n**Why the wrong answers are tempting:**\n* Choice B: trivial — doesn't speak to exchange.\n* Choice C: a single secretive workshop *contradicts* her structural argument.\n* Choice D: modern reconstruction is tangential."
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Standard English Conventions",
  skill: "boundaries",
  passage: "The Mongolian dombra — sometimes confused with the Kazakh instrument of the same family — uses two strings rather than three ________ this difference profoundly shapes the kinds of melodic ornament a player can produce.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "and" },
    { id: "B", text: ", and" },
    { id: "C", text: "; and" },
    { id: "D", text: ", " }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Boundaries (Compound Sentence)**\n\n**Choice B is correct.**\n\nThe sentence has two independent clauses joined by \"and\": \"The Mongolian dombra ... uses two strings rather than three\" and \"this difference profoundly shapes the kinds of melodic ornament a player can produce.\" The standard pattern is *comma + coordinating conjunction*: \", and.\"\n\n**Why the wrong answers are tempting:**\n* Choice A: \"and\" alone joins two independent clauses without the required comma.\n* Choice C: a semicolon should join independent clauses *without* a coordinating conjunction.\n* Choice D: comma alone creates a comma splice."
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Standard English Conventions",
  skill: "form-structure-and-sense",
  passage: "Among the practices recently documented in UNESCO's working files on Estonian intangible heritage ________ village swing-set traditions, regional song festival repertoires, and household sauna rituals.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "is" },
    { id: "B", text: "are" },
    { id: "C", text: "was" },
    { id: "D", text: "has been" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Form, Structure, and Sense (Subject-Verb Agreement, Inverted Sentence)**\n\n**Choice B is correct.**\n\nThe sentence is inverted: the *subject* is the plural list \"village swing-set traditions, regional song festival repertoires, and household sauna rituals.\" The plural subject takes \"are.\"\n\n**Why the wrong answers are tempting:**\n* Choices A, C, D: all singular forms that don't agree with the plural subject."
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Standard English Conventions",
  skill: "boundaries",
  passage: "The Kazakh dombra master Aikyn Tolegen, who lived from 1924 to 2007, transmitted his repertoire to more than three hundred students through informal apprenticeships ________ recordings made at his home in Almaty are now archived at the Kazakh National Conservatory.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "his" },
    { id: "B", text: ". His" },
    { id: "C", text: ", his" },
    { id: "D", text: "; his" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Boundaries (Sentence Boundaries)**\n\n**Choice B is correct.**\n\nThere are two independent clauses: \"The Kazakh dombra master ... transmitted his repertoire to more than three hundred students through informal apprenticeships\" and \"His recordings made at his home in Almaty are now archived at the Kazakh National Conservatory.\" A period correctly separates them, and \"His\" is then capitalized.\n\n**Why the wrong answers are tempting:**\n* Choice A: no punctuation creates a run-on.\n* Choice C: comma splice between independent clauses.\n* Choice D: a semicolon would need lowercase \"his.\""
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Standard English Conventions",
  skill: "form-structure-and-sense",
  passage: "By the time the soil scientists returned to the South African maize fields in 2019, several of the most extreme rainfall events of the previous decade ________ already, leaving distinct sediment layers that the team would later date with cesium-137 fallout signatures.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "occur" },
    { id: "B", text: "have occurred" },
    { id: "C", text: "had occurred" },
    { id: "D", text: "are occurring" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Form, Structure, and Sense (Verb Tense)**\n\n**Choice C is correct.**\n\nTwo past events are described. The scientists' return happened in 2019 (simple past, implied by \"returned\"). The rainfall events happened *during the previous decade* — earlier than the return. Past perfect (\"had occurred\") marks a past event preceding another past event.\n\n**Why the wrong answers are tempting:**\n* Choice A: simple present doesn't fit the narrative past.\n* Choice B: present perfect places the event in a span continuing to now.\n* Choice D: present progressive doesn't match the past frame."
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Standard English Conventions",
  skill: "boundaries",
  passage: "Before opening her atelier in Lima, the Quechua weaver Imelda Quispe trained in three regional traditions ________ a backstrap-loom workshop in Chinchero, a mineral-dye operation in Pisac, and an alpaca-spinning collective near Ayacucho.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: ", that included" },
    { id: "B", text: ": " },
    { id: "C", text: "; namely" },
    { id: "D", text: ", " }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Boundaries (Colon for Lists)**\n\n**Choice B is correct.**\n\nThe first part of the sentence — \"Before opening her atelier in Lima, the Quechua weaver Imelda Quispe trained in three regional traditions\" — is a complete independent clause. What follows is a list elaborating *which three traditions*. A colon correctly introduces such a list after a complete clause.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"that included\" introduces a restrictive clause, but the punctuation pattern doesn't fit the elaborating list that follows.\n* Choice C: \"; namely\" is awkward and stylistically clumsy here.\n* Choice D: a comma alone is too weak to introduce the elaborating list."
},
{
  id: 23,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Standard English Conventions",
  skill: "form-structure-and-sense",
  passage: "Each of the choirs that performed at the 2014 Estonian song festival ________ rehearsed for at least eighteen months in advance, often traveling to weekly sectional rehearsals from villages several hours away from the festival grounds.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "were" },
    { id: "B", text: "have been" },
    { id: "C", text: "had" },
    { id: "D", text: "are" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Form, Structure, and Sense (Subject-Verb Agreement and Tense)**\n\n**Choice C is correct.**\n\nThe subject is singular \"Each\" — modified by \"of the choirs that performed at the 2014 Estonian song festival.\" The festival is in 2014 (a closed past). The rehearsal happened *before* the festival. Past perfect singular (\"had rehearsed\") marks rehearsal as preceding the closed past festival.\n\n**Why the wrong answers are tempting:**\n* Choice A: plural \"were\" disagrees with singular \"each.\"\n* Choice B: present perfect doesn't fit a closed past frame.\n* Choice D: present-tense plural \"are\" wrongly matches the plural prepositional phrase."
},
{
  id: 24,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Expression of Ideas",
  skill: "transitions",
  passage: "Most museum-grade conservation labs in Western Europe rely on synthetic adhesives developed in the late twentieth century. ________ a small but growing number of conservators working with East Asian paper artifacts have begun returning to wheat-starch paste prepared in their own labs, arguing that its long-term reversibility better matches the materials they are trying to protect.",
  question: "Which choice completes the text with the most logical transition?",
  choices: [
    { id: "A", text: "Furthermore," },
    { id: "B", text: "By contrast," },
    { id: "C", text: "As a result," },
    { id: "D", text: "For instance," }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Transitions**\n\n**Choice B is correct.**\n\nFirst sentence: most labs rely on *synthetic* adhesives. Second sentence: a small group has *returned to wheat-starch paste*, arguing it better matches their materials. The two are set up against each other — \"By contrast\" signals exactly that opposition.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"Furthermore\" implies adding a similar fact.\n* Choice C: there's no causal link between the two practices.\n* Choice D: the second sentence is a contrasting trend, not an example."
},
{
  id: 25,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  domain: "Expression of Ideas",
  skill: "transitions",
  passage: "Early studies of dombra performance assumed that improvisation in the genre was rare and minor — small ornamental flourishes around a fixed melodic skeleton. ________ recent acoustic analyses of festival recordings show that experienced players regularly recompose entire phrases on the fly, sometimes substituting whole modal passages between verses while maintaining what listeners hear as a single \"correct\" version of the song.",
  question: "Which choice completes the text with the most logical transition?",
  choices: [
    { id: "A", text: "Likewise," },
    { id: "B", text: "However," },
    { id: "C", text: "Therefore," },
    { id: "D", text: "Specifically," }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Transitions**\n\n**Choice B is correct.**\n\nFirst sentence: improvisation was thought to be rare and ornamental. Second sentence: recent analyses show players *recompose entire phrases* and *substitute whole modal passages*. The second sentence overturns the first — \"However\" signals exactly that reversal.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"Likewise\" implies adding a similar finding, but the analyses *contradict* the older assumption.\n* Choice C: \"Therefore\" claims causation; the second sentence is a counterfinding.\n* Choice D: \"Specifically\" introduces a more precise version of the same claim."
},
{
  id: 26,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  domain: "Expression of Ideas",
  skill: "rhetorical-synthesis",
  studentNotes: {
    intro: "While researching for a presentation, a student took the following notes:",
    bullets: [
      "Bhutanese dzongs are large fortress-monasteries built without architectural drawings.",
      "Master carpenters (zowo) hold proportional systems in memory and signal apprentices using cubit-based hand gestures.",
      "Ethnographic study by Tashi Wangchuk found that this oral-gestural transmission lets each dzong adapt to its specific site.",
      "Wangchuk argues that the absence of fixed plans is a feature, not a limitation.",
      "Some dzongs have stood for more than 350 years."
    ],
    goal: "The student wants to emphasize Wangchuk's central argument about the role of oral-gestural transmission in dzong design."
  },
  question: "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  choices: [
    { id: "A", text: "Bhutanese dzongs are large fortress-monasteries, some of which have stood for more than 350 years." },
    { id: "B", text: "Ethnographic study by Tashi Wangchuk found that the oral-gestural transmission of proportions through cubit-based hand gestures lets each dzong adapt to its specific site — and Wangchuk argues that this absence of fixed plans is a feature of the tradition, not a limitation." },
    { id: "C", text: "Master carpenters in Bhutan signal apprentices using cubit-based hand gestures." },
    { id: "D", text: "Bhutanese dzongs are built without architectural drawings, and some have stood for more than 350 years." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Rhetorical Synthesis**\n\n**Choice B is correct.**\n\nThe goal asks for *Wangchuk's central argument* about *oral-gestural transmission*. Choice B does exactly that: it names Wangchuk, describes the transmission mechanism (cubit-based hand gestures), states the consequence (site adaptation), and attributes the central argument to him (\"absence of fixed plans is a feature, not a limitation\").\n\n**Why the wrong answers are tempting:**\n* Choice A: gives only a generic background fact, no Wangchuk argument.\n* Choice C: describes the mechanism but not the argument.\n* Choice D: gives background facts without naming Wangchuk's argument."
},
{
  id: 27,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  domain: "Expression of Ideas",
  skill: "rhetorical-synthesis",
  studentNotes: {
    intro: "While researching for a paper, a student took the following notes:",
    bullets: [
      "Hydrothermal vent fields on the East Pacific Rise host both high-temperature plumes (>300°C) and lower-temperature diffuse-flow zones (<50°C).",
      "Microbial communities in the two habitats share fewer than 15% of their species.",
      "Diffuse-flow microbes can metabolize sulfide compounds that plume microbes cannot.",
      "Plume microbes can metabolize hydrogen-rich substrates that diffuse-flow microbes cannot.",
      "Recent metagenomic sampling supports both observations."
    ],
    goal: "The student wants to emphasize that adjacent vent habitats support functionally distinct microbial communities."
  },
  question: "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  choices: [
    { id: "A", text: "On the East Pacific Rise, high-temperature plumes and lower-temperature diffuse-flow zones host microbial communities that share fewer than 15% of their species and metabolize complementary sets of substrates — diffuse-flow microbes processing sulfides and plume microbes processing hydrogen-rich substrates — indicating that the adjacent habitats support functionally distinct communities." },
    { id: "B", text: "High-temperature plumes on the East Pacific Rise exceed 300°C, while diffuse-flow zones remain below 50°C." },
    { id: "C", text: "Recent metagenomic sampling has been used to study microbial communities in vent fields." },
    { id: "D", text: "Plume microbes metabolize hydrogen-rich substrates, while diffuse-flow microbes do not." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Rhetorical Synthesis**\n\n**Choice A is correct.**\n\nThe goal is to show that *adjacent vent habitats support functionally distinct microbial communities*. Choice A combines (1) the *adjacency* of two habitats, (2) the *species-level* distinctness (<15% overlap), (3) the *complementary metabolisms* (sulfides vs. hydrogen-rich substrates), and (4) the explicit *functional-distinctness* conclusion.\n\n**Why the wrong answers are tempting:**\n* Choice B: only gives temperatures.\n* Choice C: methodological note only.\n* Choice D: only describes one half of the metabolic complementarity."
}
      ]
    }
  ]
};
