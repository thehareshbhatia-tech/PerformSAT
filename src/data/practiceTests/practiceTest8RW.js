// Practice Test 8 — SAT Reading & Writing (R&W)
// 2 Modules, 27 questions each (54 total) in 32 minutes per module.
// Distribution per module follows the official digital SAT R&W blueprint:
//   * Information and Ideas: ~10
//   * Craft and Structure: ~7
//   * Standard English Conventions: ~6
//   * Expression of Ideas: ~4
// All passages are ORIGINAL prose written for this practice test.

export const practiceTest8RW = {
  id: "practice-test-8-rw",
  title: "Practice Test 8 — Reading & Writing",
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
  passage: "When the conservation biologist Indah Suryanto returned from her three-week field season in the Leuser Ecosystem of northern Sumatra, she carried two memory cards stuffed with camera-trap footage. She spent the next several weeks carefully ________ each clip into a tagged database, noting time stamps, individual tigers when identifiable, and weather conditions for every visible frame.",
  question: "Which choice completes the text with the most logical and precise word or phrase?",
  choices: [
    { id: "A", text: "deleting" },
    { id: "B", text: "cataloging" },
    { id: "C", text: "ignoring" },
    { id: "D", text: "translating" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Words in Context (Fill-in)**\n\n**Choice B is correct.**\n\nThe sentence describes Suryanto sorting clips into a tagged database with time stamps and notes — that is the act of *cataloging*: organizing items into a labeled collection.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"deleting\" contradicts building a database from the footage.\n* Choice C: \"ignoring\" contradicts careful tagging and notation.\n* Choice D: \"translating\" implies converting between languages, not classifying records."
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 2,
  domain: "Craft and Structure",
  skill: "words-in-context",
  passage: "The Tunisian mosaic restorer Salma Bouazizi was known for keeping her interventions ________; rather than replacing damaged tesserae with bright modern stones, she preferred to leave small voids visible, trusting that future restorers would have better materials and methods than she did.",
  question: "Which choice completes the text with the most logical and precise word or phrase?",
  choices: [
    { id: "A", text: "lavish" },
    { id: "B", text: "minimal" },
    { id: "C", text: "secretive" },
    { id: "D", text: "decorative" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Words in Context (Fill-in)**\n\n**Choice B is correct.**\n\nThe semicolon explains the missing word: Bouazizi *preferred to leave voids* rather than replace stones — she did less, not more. \"Minimal\" matches that restraint.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"lavish\" is the opposite of leaving voids.\n* Choice C: \"secretive\" doesn't fit — her restraint is *visible*, not hidden.\n* Choice D: \"decorative\" describes added ornament, but she avoided adding."
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  domain: "Craft and Structure",
  skill: "words-in-context",
  passage: "Although the Bavarian glass painter Lukas Hofer is often celebrated for his swift, confident brushwork, his planning sessions were anything but swift. His preparatory sketchbooks reveal an artist who would ________ a single curve of a saint's robe across many drafts, adjusting the angle by fractions of a degree until the painted line would carry the weight he wanted.",
  question: "Which choice completes the text with the most logical and precise word or phrase?",
  choices: [
    { id: "A", text: "ignore" },
    { id: "B", text: "discard" },
    { id: "C", text: "refine" },
    { id: "D", text: "trace" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Words in Context (Fill-in)**\n\n**Choice C is correct.**\n\nHofer returned to one curve repeatedly, adjusting it in tiny increments — that is *refining*: improving by gradual adjustment.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"ignore\" contradicts spending many drafts on the line.\n* Choice B: \"discard\" implies removal, but he keeps reworking the line.\n* Choice D: \"trace\" suggests copying without changes — but he is *adjusting*, not duplicating."
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  domain: "Craft and Structure",
  skill: "text-structure-and-purpose",
  passage: "For decades, marine biologists assumed that the slow, open-mouthed swimming of the basking shark was a passive feeding strategy in which plankton drifted into a stationary filter. A 2022 study by oceanographer Caitríona Doyle complicates that picture. __After analyzing high-frequency tag data from twelve sharks off the west coast of Ireland, Doyle's team found that the animals consistently adjusted their swimming speed to match the local density of plankton patches, slowing in dense water and accelerating through thinner water — a pattern more consistent with active foraging than passive drift.__",
  question: "Which choice best describes the function of the underlined sentence in the text as a whole?",
  choices: [
    { id: "A", text: "It introduces a counterexample that complicates Doyle's challenge to the older view." },
    { id: "B", text: "It presents the observational evidence that supports the new explanation Doyle offers." },
    { id: "C", text: "It contrasts two competing methods for measuring plankton density." },
    { id: "D", text: "It raises doubts about whether the older assumption was ever truly held." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Text Structure and Purpose**\n\n**Choice B is correct.**\n\nThe first two sentences set up: old view (passive drift) → Doyle complicates it. The underlined sentence then provides the *evidence* (tag data) and the *new explanation* (active foraging) that grounds the challenge.\n\n**Why the wrong answers are tempting:**\n* Choice A: there's no counterexample — the underlined sentence supports Doyle.\n* Choice C: only one method (high-frequency tag data) is described.\n* Choice D: the passage accepts that the older view was held."
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 4,
  domain: "Craft and Structure",
  skill: "text-structure-and-purpose",
  passage: "The following text is adapted from Aoife Brennan's 2021 short story \"The Long Lane.\" Niamh, a sheep farmer, is finishing the evening rounds with her dog.\n\nNiamh latched the last gate behind the ewes and walked the long lane home in the blue half-light, her dog Téa a step ahead and never looking back. The hedgerows had begun to lose their leaves, and the wind from the bog smelled of wet stone. __She stopped halfway up the rise, her hand on the gate post, and listened to the small sounds the land made when she stood still.__ It was, she sometimes thought, the part of the day that belonged only to her.",
  question: "Which choice best describes the function of the underlined sentence in the text?",
  choices: [
    { id: "A", text: "It marks a shift from physical action to a moment of stillness and reflection." },
    { id: "B", text: "It establishes a contrast between Niamh's farm and her neighbors' farms." },
    { id: "C", text: "It contradicts the calm tone established earlier in the passage." },
    { id: "D", text: "It signals that Niamh is about to leave the farm permanently." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Text Structure and Purpose (Literary)**\n\n**Choice A is correct.**\n\nThe sentences before describe Niamh's *actions* (latching the gate, walking the lane). The underlined sentence shifts to her stopping, listening, and the next sentence is *what she thinks*. The underlined sentence is the pivot from doing to reflecting.\n\n**Why the wrong answers are tempting:**\n* Choice B: no neighbors are mentioned.\n* Choice C: the tone stays calm and reflective.\n* Choice D: nothing in the passage suggests departure."
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
      text: "Recent enthusiasm for community-managed coastal fisheries has been propelled by marine economists who emphasize the resilience and stewardship benefits of giving local cooperatives long-term harvest rights. The model promises stable incomes for small boat captains, lower bycatch, and stronger compliance with seasonal closures."
    },
    {
      label: "Text 2",
      text: "Maritime sociologist Reidar Halvorsen is sympathetic to community-managed fisheries but cautions that \"local control\" alone is not the same as equitable access. His studies of cooperatives along the coast of Maine show that without explicit entry rules for new and younger fishers, harvest rights tend to consolidate in a small number of established families, narrowing the very community the model is meant to broaden."
    }
  ],
  question: "Based on the texts, how would Halvorsen (Text 2) most likely respond to the claim made by the economists in Text 1?",
  choices: [
    { id: "A", text: "By rejecting the resilience and stewardship benefits as overstated." },
    { id: "B", text: "By acknowledging the benefits but warning that achieving equitable access depends on rules the economists do not address." },
    { id: "C", text: "By arguing that community-managed fisheries are technically impossible to maintain along the coast of Maine." },
    { id: "D", text: "By insisting that the model has already been disproven by the Maine record." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Cross-Text Connections**\n\n**Choice B is correct.**\n\nHalvorsen is *sympathetic* — he agrees with the goals. But he adds a *condition*: without entry rules, harvest rights consolidate. That is exactly choice B: acknowledge benefits, warn about preconditions.\n\n**Why the wrong answers are tempting:**\n* Choice A: he doesn't reject the benefits.\n* Choice C: he never claims technical impossibility.\n* Choice D: \"already disproven\" is too strong — he warns about a *risk*."
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
      text: "The poet Cordelia Vance, in a 1958 essay on her craft, argued that the strongest line breaks are those the reader does not consciously notice — a small hesitation, a shift in stress — so that the breath of the poem feels continuous even as the eye moves across stanzas. The trick, she said, is to plant the break so quietly that the reader registers only the change in feeling, not the white space."
    },
    {
      label: "Text 2",
      text: "In a recent essay rereading Vance's third collection, the critic Mateusz Kowalski notes that several of Vance's contemporary reviewers complained that her line breaks felt arbitrary. Kowalski argues that those complaints reveal a generational reading habit: reviewers in the 1950s expected line breaks that announced themselves with strong end-stops, and Vance's quieter shifts read to them as no breaks at all."
    }
  ],
  question: "Based on the texts, how would Kowalski (Text 2) most likely characterize the 1950s reviewers' complaints?",
  choices: [
    { id: "A", text: "a flaw in Vance's craft that the reviewers correctly identified." },
    { id: "B", text: "a misunderstanding rooted in the reviewers' expectations rather than in the poems themselves." },
    { id: "C", text: "a deliberate provocation by Vance aimed at her contemporaries." },
    { id: "D", text: "a breakdown in communication between editors and reviewers of the period." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Cross-Text Connections (Inference)**\n\n**Choice B is correct.**\n\nKowalski says the complaints \"reveal a generational reading habit\" — the *reviewers* expected loud end-stops, so Vance's quieter breaks registered as none. The flaw is in the reviewers' habits, not Vance's craft.\n\n**Why the wrong answers are tempting:**\n* Choice A: Kowalski is defending Vance.\n* Choice C: Kowalski doesn't claim provocation.\n* Choice D: no editor/reviewer issue appears."
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  domain: "Information and Ideas",
  skill: "central-ideas-and-details",
  passage: "Contrary to a long-standing assumption, the curling cedar-bark strips used in West Greenlandic kayak frames were not chosen primarily for buoyancy. Each builder selected strips for the way the grain bent under steady pressure, often rejecting wider or thicker pieces in favor of narrower ones whose fibers ran cleanly along the curve. Recent surveys of nineteenth-century kayaks held in Nuuk and Copenhagen have shown that the strongest hulls share a tight, almost uniform grain pattern, suggesting that flexibility under load — not flotation — was the key trait.",
  question: "Which choice best states the main idea of the text?",
  choices: [
    { id: "A", text: "West Greenlandic kayak builders chose cedar-bark strips primarily for buoyancy." },
    { id: "B", text: "The cedar-bark strips in West Greenlandic kayak frames were chosen mainly for the way their grain flexed under load, not for flotation." },
    { id: "C", text: "Cedar bark cannot be used in kayak frames built outside West Greenland." },
    { id: "D", text: "Surveys of museum kayaks in Nuuk and Copenhagen prove that flotation is irrelevant in kayak design." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Central Ideas and Details**\n\n**Choice B is correct.**\n\nThe passage corrects an old view: builders cared about how grain bent under load, not buoyancy. Surveys are evidence for that point.\n\n**Why the wrong answers are tempting:**\n* Choice A: this is the *old* view the passage corrects.\n* Choice C: the passage doesn't make that geographic claim.\n* Choice D: \"irrelevant\" is too strong — flotation just isn't the *key* trait."
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  domain: "Information and Ideas",
  skill: "central-ideas-and-details",
  passage: "In a 1962 letter to a former student, the printer Wendy Holcombe described the moment she decided to leave commercial typesetting and devote her press to reprinting forgotten regional plays. \"I have been setting type for books that already had publishers,\" she wrote, \"and I begin to suspect the only useful work left for a small press is to bring back the books that no one will reprint at all.\" The shift would, within a decade, produce one of the most cited series of mid-century North American regional drama.",
  question: "Which choice best states the main idea of the text?",
  choices: [
    { id: "A", text: "Holcombe abandoned printing in 1962 to pursue teaching full time." },
    { id: "B", text: "Holcombe's move from commercial typesetting to reprinting forgotten plays was driven by a sense that small presses are most useful when filling gaps the larger trade leaves." },
    { id: "C", text: "Holcombe's letter was the most influential of her career." },
    { id: "D", text: "Mid-century regional drama could only be printed on small presses." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Central Ideas and Details**\n\n**Choice B is correct.**\n\nThe passage explains *why* Holcombe changed her work: she felt small presses should print what no one else would. The cited series is the result.\n\n**Why the wrong answers are tempting:**\n* Choice A: she didn't abandon printing — she changed *what* she printed.\n* Choice C: the passage doesn't claim influence for the letter.\n* Choice D: the passage doesn't generalize about regional drama at large."
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Information and Ideas",
  skill: "central-ideas-and-details",
  passage: "The Andean cock-of-the-rock (*Rupicola peruvianus*) was once thought to occupy a continuous band of cloud forest along the eastern slope of the Peruvian Andes. By the late twentieth century, deforestation and road-building had reduced the species to fragmented patches scattered across several drainages. Conservation biologists initially focused on protecting the largest remaining patch in the Cordillera Vilcanota, on the assumption that a single thriving lek could eventually repopulate the historic range. More recent acoustic and genetic work has complicated that hope: birds in different drainages display measurably different call structures and carry distinct lineages, and recolonization from a single source would erase variation that took millennia to accumulate.",
  question: "Which choice best states the main idea of the text?",
  choices: [
    { id: "A", text: "The Andean cock-of-the-rock has been reduced from a continuous band to a single thriving lek." },
    { id: "B", text: "Conservation strategies that worked for other endangered birds cannot be applied to cocks-of-the-rock." },
    { id: "C", text: "The early conservation strategy of relying on a single source patch is in tension with new acoustic and genetic findings about the species' diversity." },
    { id: "D", text: "Acoustic and genetic research has shown that the cock-of-the-rock is in fact several different species." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Central Ideas and Details**\n\n**Choice C is correct.**\n\nThe passage sets up the early plan (rely on Vilcanota) and then says new findings \"complicated that hope\" — different drainages carry distinct calls and lineages. The main idea is that exact tension.\n\n**Why the wrong answers are tempting:**\n* Choice A: distorts the facts — patches are fragmented, not collapsed to one lek.\n* Choice B: the passage doesn't generalize about other birds.\n* Choice D: \"distinct lineages\" is not the same as \"different species.\""
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  domain: "Information and Ideas",
  skill: "inferences",
  passage: "The Korean papermaker Soo-Jin Han spent two decades teaching herself to reproduce the long, lustrous fibers of nineteenth-century *hanji* sheets without using any modern bleaching agents. Although younger papermakers in Jeonju had moved to faster, chemically assisted methods, Han argued that her hand-rinsed sheets retained an elasticity her colleagues' work could not match. After years of demonstrations, several of those younger papermakers eventually returned to her cold-water rinsing technique, suggesting that ________",
  question: "Which choice most logically completes the text?",
  choices: [
    { id: "A", text: "modern bleaching agents are illegal in Jeonju." },
    { id: "B", text: "older techniques can sometimes outperform newer ones on traits the newer methods do not optimize for." },
    { id: "C", text: "younger papermakers had never been trained in any traditional method." },
    { id: "D", text: "elasticity is the only trait that matters in evaluating hanji." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Inferences (Logical Completion)**\n\n**Choice B is correct.**\n\nHan's older method beat the newer methods on a specific trait (elasticity), and younger papermakers came back to it. The natural inference is that older techniques can sometimes win on traits modern methods don't target.\n\n**Why the wrong answers are tempting:**\n* Choice A: nothing in the passage discusses legality.\n* Choice C: the passage says younger makers used chemical methods, not that they had no training.\n* Choice D: \"only trait that matters\" is too strong; the passage says elasticity was *one* trait Han preserved."
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Information and Ideas",
  skill: "inferences",
  passage: "The volcanologist Giuseppe Romano spent a career studying the slow lava flows of Mount Etna in Sicily. Although nearby populations have generally treated the mountain's frequent eruptions as a routine inconvenience, Romano argued that the very predictability of Etna's basaltic flows had made the surrounding farmland unusually fertile, since each cooled flow weathered into mineral-rich soil within a few generations. His later writings, addressed mostly to local officials, urged that future zoning rules ________",
  question: "Which choice most logically completes the text?",
  choices: [
    { id: "A", text: "treat the mountain solely as a hazard to be avoided." },
    { id: "B", text: "ban all agriculture within sight of the cone." },
    { id: "C", text: "recognize that the same flows residents fear are also the source of the soils that have sustained their agriculture." },
    { id: "D", text: "encourage residents to relocate immediately to the western coast." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Inferences (Logical Completion)**\n\n**Choice C is correct.**\n\nRomano's argument is that the *same* flows that look dangerous also produced the rich soils. A zoning policy consistent with that view would *recognize both sides*. That is choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A: would ignore Romano's whole point about fertility.\n* Choice B: contradicts the soil benefit Romano emphasizes.\n* Choice D: relocation isn't supported anywhere in the passage."
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Information and Ideas",
  skill: "inferences",
  passage: "In the early 1900s, the Carthaginian-language Punic inscriptions found at North African sites such as Hadrumetum and Leptis Magna were typically read as evidence that Punic had survived as a written language for several centuries after the fall of Carthage. The historian Lina Mansouri has recently argued, however, that the dating of many of these inscriptions rests on assumptions about formula stability — the idea that a fixed Punic dedicatory formula could only have been used during a narrow window — that no longer hold. Once a wider window is admitted, several inscriptions previously dated to the early Roman period may in fact be ________",
  question: "Which choice most logically completes the text?",
  choices: [
    { id: "A", text: "older than scholars had assumed, predating the fall of Carthage." },
    { id: "B", text: "younger than scholars had assumed, possibly composed long after the formula's traditional date range." },
    { id: "C", text: "the work of forgers from a much later period." },
    { id: "D", text: "untranslatable without help from Greek inscriptions at the same sites." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Inferences (Logical Completion)**\n\n**Choice B is correct.**\n\nMansouri's argument is that the dating *narrowed* the possible window unjustifiably. Once the window is widened, the inscriptions could have been written *later* than scholars assumed — extending the survival of Punic as a written language. That supports choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A: pushing the dates *earlier* would shorten Punic's post-Carthage survival, the opposite of what's at stake.\n* Choice C: forgery isn't what Mansouri is arguing.\n* Choice D: the passage doesn't raise translation issues."
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Information and Ideas",
  skill: "command-of-evidence-quantitative",
  passage: "A team of forest ecologists working in the cloud forests of the eastern Andes wanted to know whether the local mountain tapir (*Tapirus pinchaque*) preferred to forage in older, mature stands or in younger regenerating stands. Over six months, the team recorded the number of tapir foraging events in plots assigned to four stand-age categories. The researchers concluded that mature stands were the most heavily used.",
  questionTable: {
    type: "table",
    caption: "Tapir foraging events by stand age (six-month total).",
    headers: ["Stand age category", "Foraging events recorded"],
    rows: [
      ["Younger than 20 years", "12"],
      ["20–50 years", "31"],
      ["50–100 years", "47"],
      ["Older than 100 years", "92"]
    ]
  },
  question: "Which choice most effectively uses data from the table to support the researchers' conclusion?",
  choices: [
    { id: "A", text: "Stands younger than 20 years recorded only 12 foraging events." },
    { id: "B", text: "Stands aged 20–50 years recorded fewer events than stands aged 50–100 years." },
    { id: "C", text: "Stands older than 100 years recorded 92 foraging events — more than any other category and roughly twice as many as the next-highest category." },
    { id: "D", text: "Stands aged 50–100 years recorded 47 foraging events." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Command of Evidence (Quantitative)**\n\n**Choice C is correct.**\n\nThe conclusion is that mature stands were the most heavily used. Choice C cites the *highest* category (older than 100 years, 92 events) and contrasts it with the next-highest, directly supporting that the oldest stands led foraging.\n\n**Why the wrong answers are tempting:**\n* Choice A: cites the *lowest* number, which says nothing about which category was most used.\n* Choice B: compares two middle categories without naming the leader.\n* Choice D: cites a single middle value without comparison."
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Information and Ideas",
  skill: "command-of-evidence-textual",
  passage: "In her 2020 study of the early printing histories of *Romeo and Juliet*, the textual scholar Adaeze Okeke argues that the differences between the 1597 and 1599 quartos are best explained not by deliberate authorial revision but by the working conditions of the two printing shops involved. Okeke traces patterns of compositorial spelling habits and find that many lines previously cited as Shakespeare's revisions correspond instead to the preferences of individual typesetters.",
  question: "Which finding, if true, would most directly support Okeke's argument?",
  choices: [
    { id: "A", text: "Some passages in the 1599 quarto contain plot details absent from the 1597 quarto." },
    { id: "B", text: "Lines in the 1599 quarto whose spellings depart most strongly from the 1597 version match the documented preferences of compositors employed by the second shop." },
    { id: "C", text: "The 1597 quarto was reprinted in several later editions before the 1599 quarto appeared." },
    { id: "D", text: "Shakespeare is known to have revised other plays heavily during this period." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Command of Evidence (Textual)**\n\n**Choice B is correct.**\n\nOkeke's claim is that *compositors*, not Shakespeare's revisions, account for many differences. Evidence that the most divergent lines line up with documented compositor preferences directly supports that mechanism.\n\n**Why the wrong answers are tempting:**\n* Choice A: new plot content suggests authorial revision — the *opposite* of Okeke's claim.\n* Choice C: reprint history doesn't address whether the changes were authorial.\n* Choice D: revising other plays doesn't speak to *Romeo and Juliet* compositors."
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Information and Ideas",
  skill: "command-of-evidence-quantitative",
  passage: "A team of soil scientists studying terraced rice paddies in the highlands of northern Luzon wanted to test whether organic mulching with locally available *kogon* grass increased nitrogen retention compared to standard practice. They measured residual nitrogen (in kilograms per hectare) in four plots at the end of the growing season. The team concluded that mulched plots retained more residual nitrogen than unmulched plots.",
  questionTable: {
    type: "table",
    caption: "Residual nitrogen at end of season (kg/ha) by mulching treatment.",
    headers: ["Plot", "Treatment", "Residual N (kg/ha)"],
    rows: [
      ["1", "Unmulched", "18"],
      ["2", "Unmulched", "21"],
      ["3", "Mulched", "37"],
      ["4", "Mulched", "41"]
    ]
  },
  question: "Which choice most effectively uses data from the table to support the team's conclusion?",
  choices: [
    { id: "A", text: "Plot 1 retained 18 kg/ha of residual nitrogen." },
    { id: "B", text: "The two unmulched plots retained 18 and 21 kg/ha, while the two mulched plots retained 37 and 41 kg/ha — substantially more in both cases." },
    { id: "C", text: "Plot 2 retained more residual nitrogen than Plot 1." },
    { id: "D", text: "Plot 4 retained more residual nitrogen than Plot 3." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Command of Evidence (Quantitative)**\n\n**Choice B is correct.**\n\nThe conclusion compares mulched against unmulched plots overall. Choice B reports both unmulched values (18, 21) and both mulched values (37, 41), showing that *both* mulched plots retained substantially more nitrogen than *both* unmulched plots.\n\n**Why the wrong answers are tempting:**\n* Choice A: a single unmulched value alone doesn't establish the comparison.\n* Choice C: compares two unmulched plots — same treatment, no contrast.\n* Choice D: compares two mulched plots — same treatment, no contrast."
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Information and Ideas",
  skill: "command-of-evidence-textual",
  passage: "The geomorphologist Theodora Vassiliou argues that the gentle, terraced slopes around the Aegean island of Naxos are not, as long supposed, the cumulative product of centuries of agricultural construction. Instead, she contends, many of the lower terraces simply trace older shorelines exposed by long-term tectonic uplift, and farmers later built on top of forms the landscape itself had laid down.",
  question: "Which finding, if true, would most directly support Vassiliou's argument?",
  choices: [
    { id: "A", text: "Several Aegean islands record similar agricultural construction methods in their oral traditions." },
    { id: "B", text: "Marine fossils characteristic of ancient Aegean shorelines are found embedded in the lower terrace surfaces of Naxos at consistent elevations." },
    { id: "C", text: "Modern engineering surveys show that the upper terraces of Naxos are stable enough to support new construction." },
    { id: "D", text: "Aerial photographs reveal that some upper terraces have been rebuilt as recently as the twentieth century." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Command of Evidence (Textual)**\n\n**Choice B is correct.**\n\nVassiliou claims the *lower* terraces follow uplifted shorelines. Marine fossils of the right age embedded *in* those lower terraces, at consistent elevations, would directly evidence ancient shorelines under the farmed surface — exactly her claim.\n\n**Why the wrong answers are tempting:**\n* Choice A: oral traditions about construction methods support the *old* view (human-built terraces), not Vassiliou's.\n* Choice C: stability of upper terraces doesn't address origin.\n* Choice D: twentieth-century rebuilding doesn't establish how the lower terraces formed."
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  domain: "Standard English Conventions",
  skill: "boundaries",
  passage: "The Iznik tile workshops of sixteenth-century Anatolia produced ceramics whose deep cobalt blues and tomato reds remain difficult to reproduce ________ chemists today still debate exactly how the slip and glaze chemistry interacted at the high firing temperatures used.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "today, in fact" },
    { id: "B", text: "today; in fact," },
    { id: "C", text: "today, in fact," },
    { id: "D", text: "today in fact" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Boundaries (Sentence Joining)**\n\n**Choice B is correct.**\n\nThe text contains two independent clauses (\"the workshops... reproduce today\" and \"chemists today still debate...\"). They must be separated by a period or a semicolon. Choice B uses a semicolon and then sets off the parenthetical \"in fact\" with commas.\n\n**Why the wrong answers are tempting:**\n* Choice A: a comma between two independent clauses is a comma splice.\n* Choice C: same comma-splice problem.\n* Choice D: no punctuation between independent clauses is a run-on, and \"in fact\" is unset off."
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  domain: "Standard English Conventions",
  skill: "form-structure-and-sense",
  passage: "Although the Maine lobster fishery is often described as if it had a single quota system, in practice each cooperative ________ its own seasonal rules in addition to the state-level limits.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "set" },
    { id: "B", text: "sets" },
    { id: "C", text: "have set" },
    { id: "D", text: "are setting" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Form, Structure, and Sense (Subject-Verb Agreement)**\n\n**Choice B is correct.**\n\nThe subject \"each cooperative\" is singular (\"each\" + singular noun), so it takes a singular verb in the simple present: \"sets.\"\n\n**Why the wrong answers are tempting:**\n* Choice A: \"set\" is plural-present or past-tense form, and the sentence requires a singular present verb.\n* Choice C: \"have set\" is plural; doesn't agree with \"each cooperative.\"\n* Choice D: \"are setting\" is plural and shifts to progressive aspect unnecessarily."
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  domain: "Standard English Conventions",
  skill: "boundaries",
  passage: "The Andean potato curator Mariela Quispe maintains a collection of more than four hundred named varieties at her highland farm ________ each year, she invites farmers from neighboring valleys to exchange seed tubers in a planned barter that has continued for decades.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "farm:" },
    { id: "B", text: "farm," },
    { id: "C", text: "farm." },
    { id: "D", text: "farm" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Boundaries (Sentence Joining)**\n\n**Choice C is correct.**\n\n\"Mariela Quispe maintains a collection... at her highland farm\" and \"each year, she invites farmers...\" are both independent clauses. A period correctly separates them.\n\n**Why the wrong answers are tempting:**\n* Choice A: a colon expects a list or explanation directly tied to the first clause; \"each year\" is a new sentence in time, not an explanation.\n* Choice B: a comma between two independent clauses is a comma splice.\n* Choice D: no punctuation creates a run-on."
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  domain: "Standard English Conventions",
  skill: "form-structure-and-sense",
  passage: "________ collection of folio-edition Shakespeare prints is unusually complete, the Folger Library in Washington remains the most cited destination for textual scholars working on the early printing record.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "Despite the British Library's" },
    { id: "B", text: "Despite the British Librarys" },
    { id: "C", text: "Despite the British Libraries'" },
    { id: "D", text: "Despite the British Library's'" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Form, Structure, and Sense (Possessives)**\n\n**Choice A is correct.**\n\nThe sentence needs the singular possessive of \"the British Library\" — that is \"the British Library's\" (apostrophe + s).\n\n**Why the wrong answers are tempting:**\n* Choice B: \"Librarys\" is missing the apostrophe and isn't a real word.\n* Choice C: \"Libraries'\" is the plural possessive — there is only one British Library here.\n* Choice D: a stray extra apostrophe."
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Standard English Conventions",
  skill: "boundaries",
  passage: "The Sicilian beekeeper Dario Lo Bianco, who has worked with the dark-bee subspecies *Apis mellifera siciliana* for more than thirty ________ that the local population's tolerance for hot, dry summers should be carefully preserved as climate conditions on the island change.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "years argues" },
    { id: "B", text: "years, argues" },
    { id: "C", text: "years; argues" },
    { id: "D", text: "years, argues," }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Boundaries (Nonrestrictive Clauses)**\n\n**Choice B is correct.**\n\nThe nonrestrictive clause \"who has worked... for more than thirty years\" must close with a comma before the main verb \"argues.\"\n\n**Why the wrong answers are tempting:**\n* Choice A: missing the closing comma after the nonrestrictive clause.\n* Choice C: a semicolon would require an independent clause on each side; \"argues that...\" is not independent here.\n* Choice D: the extra comma after \"argues\" wrongly separates the verb from its object clause."
},
{
  id: 23,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Standard English Conventions",
  skill: "form-structure-and-sense",
  passage: "Linguists studying the Ainu language of northern Japan, which has only a small number of fluent first-language speakers ________ archival recordings made in the mid-twentieth century to document grammatical structures that newer learners no longer hear modeled in daily life.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "rely on" },
    { id: "B", text: "relies on" },
    { id: "C", text: "is relying on" },
    { id: "D", text: "to rely on" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Form, Structure, and Sense (Subject-Verb Agreement)**\n\n**Choice A is correct.**\n\nThe subject of the main clause is \"Linguists\" (plural). The relative clause \"which has only a small number...\" is a non-essential modifier of \"the Ainu language\" and doesn't change the main verb. The plural verb \"rely on\" agrees with \"Linguists.\"\n\n**Why the wrong answers are tempting:**\n* Choice B: \"relies\" is singular and doesn't agree with \"Linguists.\"\n* Choice C: same agreement problem and an unnecessary tense shift.\n* Choice D: \"to rely on\" is an infinitive — it leaves the sentence without a main verb."
},
{
  id: 24,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Expression of Ideas",
  skill: "transitions",
  passage: "Most accounts of the early steamboat era emphasize the dramatic Mississippi races between rival captains. ________ historians of the same period have begun to point out that more than two-thirds of steamboat traffic in the 1850s consisted of slow, scheduled freight runs along secondary tributaries — a pattern that the racing narrative obscures.",
  question: "Which choice completes the text with the most logical transition?",
  choices: [
    { id: "A", text: "For example," },
    { id: "B", text: "Therefore," },
    { id: "C", text: "However," },
    { id: "D", text: "Similarly," }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Transitions**\n\n**Choice C is correct.**\n\nThe first sentence reports the dominant story (dramatic races). The second pushes back: most traffic was slow, scheduled freight. That contrast calls for \"However,\".\n\n**Why the wrong answers are tempting:**\n* Choice A: \"For example\" expects an instance of the previous claim, not a contradiction.\n* Choice B: \"Therefore\" expects a consequence, not a contrast.\n* Choice D: \"Similarly\" expects a parallel claim, not a counterclaim."
},
{
  id: 25,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Expression of Ideas",
  skill: "transitions",
  passage: "The botanist Hae-Won Lim spent five seasons mapping the distribution of high-elevation gentians on the slopes of Hallasan in South Korea. ________ she also recorded the time each plant first opened in the morning, a finer-grained measurement than the regional flora had ever included.",
  question: "Which choice completes the text with the most logical transition?",
  choices: [
    { id: "A", text: "Nevertheless," },
    { id: "B", text: "In addition," },
    { id: "C", text: "Otherwise," },
    { id: "D", text: "By contrast," }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Transitions**\n\n**Choice B is correct.**\n\nThe first sentence describes Lim's mapping work. The second sentence adds *another* thing she did (recorded daily opening times). That is addition.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"Nevertheless\" expects contrast.\n* Choice C: \"Otherwise\" expects an alternative outcome.\n* Choice D: \"By contrast\" expects a difference."
},
{
  id: 26,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Expression of Ideas",
  skill: "rhetorical-synthesis",
  studentNotes: {
    intro: "While researching for a presentation, a student took the following notes about the Faroese chain dance.",
    bullets: [
      "The Faroese chain dance is a circle dance performed in the Faroe Islands.",
      "Dancers join hands and move in a steady step while a lead singer chants long ballads.",
      "Many ballads run for hundreds of stanzas and are sung from memory.",
      "The form has been continuously practiced since the medieval period.",
      "Folklorists credit the dance with preserving Faroese language and oral history."
    ],
    goal: "The student wants to emphasize the dance's role in cultural preservation."
  },
  question: "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  choices: [
    { id: "A", text: "The Faroese chain dance is a circle dance performed in the Faroe Islands." },
    { id: "B", text: "Dancers in the Faroese chain dance join hands and move in a steady step." },
    { id: "C", text: "Continuously practiced since the medieval period, the Faroese chain dance has, according to folklorists, helped preserve the islands' language and oral history through ballads sung from memory." },
    { id: "D", text: "Many Faroese ballads run for hundreds of stanzas." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Rhetorical Synthesis (Notes)**\n\n**Choice C is correct.**\n\nThe goal is to emphasize cultural preservation. Choice C names the long history, the folklorists' credit, and the language/oral history, hitting the preservation point directly.\n\n**Why the wrong answers are tempting:**\n* Choice A: definitional only — doesn't address preservation.\n* Choice B: describes mechanics, not preservation.\n* Choice D: a length detail that doesn't connect to preservation."
},
{
  id: 27,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Expression of Ideas",
  skill: "rhetorical-synthesis",
  studentNotes: {
    intro: "While researching for a science article, a student took the following notes about the Bornean orangutan.",
    bullets: [
      "Bornean orangutans (Pongo pygmaeus) build a fresh sleeping nest in the canopy each evening.",
      "Field studies show pups carefully watch their mothers select branches and weave them.",
      "Pups display recognizable individual nest-building styles by their fourth year.",
      "Comparative work suggests these styles correlate with the mother's technique, not just available trees.",
      "Researchers describe nest-building as one of the clearest examples of socially transmitted behavior in great apes."
    ],
    goal: "The student wants to emphasize that orangutan nest-building is a learned, socially transmitted skill."
  },
  question: "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  choices: [
    { id: "A", text: "Bornean orangutans build a fresh sleeping nest in the canopy each evening." },
    { id: "B", text: "Pups raised by Bornean orangutan mothers develop individual nest-building styles that correlate with their mothers' techniques, supporting the view that nest-building is a socially transmitted skill rather than a purely instinctive one." },
    { id: "C", text: "Comparative work has been conducted on Bornean orangutan nest-building." },
    { id: "D", text: "By their fourth year, orangutan pups display recognizable nest-building styles." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Rhetorical Synthesis (Notes)**\n\n**Choice B is correct.**\n\nThe goal is to emphasize that nest-building is *learned and socially transmitted*. Choice B names the pups, the correlation with the mother's technique, and the framing as social transmission rather than instinct — directly hitting the goal.\n\n**Why the wrong answers are tempting:**\n* Choice A: gives behavior but not the learning angle.\n* Choice C: vague — doesn't communicate the finding.\n* Choice D: shows individual styles develop but doesn't tie them to the mother."
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
  passage: "The Tunisian mosaic conservator Ines Ben Ali argues that earlier restorers, working with limited evidence, often ________ the chromatic intentions of the original artisans — replacing weathered stones with brighter modern equivalents until the surface read as if it had always looked that way.",
  question: "Which choice completes the text with the most logical and precise word or phrase?",
  choices: [
    { id: "A", text: "preserved" },
    { id: "B", text: "documented" },
    { id: "C", text: "overstated" },
    { id: "D", text: "ignored" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Words in Context (Fill-in)**\n\n**Choice C is correct.**\n\nThe restorers replaced weathered stones with brighter ones, making the surface look more vivid than the original would have. They *amplified* the colors beyond their actual hues — that is *overstating*.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"preserved\" is the opposite — they changed the surface.\n* Choice B: \"documented\" doesn't fit replacement with brighter stones.\n* Choice D: \"ignored\" misses that they *acted on* color, just inaccurately."
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Craft and Structure",
  skill: "words-in-context",
  passage: "Although the early reception of Hjørdis Madsen's first novel was largely admiring, several reviewers found her dialogue ________; characters spoke in long, intricate sentences that shifted register repeatedly within the same paragraph, demanding more attention than many readers expected to give.",
  question: "Which choice completes the text with the most logical and precise word or phrase?",
  choices: [
    { id: "A", text: "vacant" },
    { id: "B", text: "demanding" },
    { id: "C", text: "soothing" },
    { id: "D", text: "predictable" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Words in Context (Fill-in)**\n\n**Choice B is correct.**\n\nThe semicolon explains the missing word: the sentences \"shifted register repeatedly\" and \"demand more attention\" — that is *demanding* prose.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"vacant\" suggests empty content; the dialogue is dense, not empty.\n* Choice C: \"soothing\" contradicts demanding more attention.\n* Choice D: \"predictable\" contradicts shifts in register."
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Craft and Structure",
  skill: "words-in-context",
  passage: "The historian Devesh Iyer is careful to note that the regional records of the Kakatiya dynasty's irrigation tanks should not be ________ as straightforward administrative documents. Many of the surviving inscriptions, he argues, were composed in praise registers and contain figures that more resemble panegyric than ledger.",
  question: "Which choice completes the text with the most logical and precise word or phrase?",
  choices: [
    { id: "A", text: "discarded" },
    { id: "B", text: "venerated" },
    { id: "C", text: "translated" },
    { id: "D", text: "treated" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Words in Context (Fill-in)**\n\n**Choice D is correct.**\n\nIyer warns against *handling* the records as if they were neutral administrative documents — he wants them to be read with awareness of the praise register. \"Treated as\" matches that interpretive sense exactly.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"discarded\" goes too far — Iyer wants the records read carefully, not thrown away.\n* Choice B: \"venerated\" doesn't match the warning context.\n* Choice C: \"translated\" addresses language transfer, not interpretive framing."
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Craft and Structure",
  skill: "text-structure-and-purpose",
  passage: "For most of the twentieth century, archaeologists treated the lower courses of stonework at the Carthaginian port of Utica as evidence of an early Punic harbor. A 2018 reanalysis by Lina Mansouri reframes the picture. __After comparing the stone-cutting marks on the lower courses with cataloged marks from later Roman sites, Mansouri's team found that several of the lowest courses match Roman-era patterns precisely, suggesting that the supposed early Punic harbor was substantially rebuilt during the Roman period.__",
  question: "Which choice best describes the function of the underlined sentence in the text as a whole?",
  choices: [
    { id: "A", text: "It introduces a counterexample that complicates Mansouri's reframing." },
    { id: "B", text: "It presents the technical evidence that supports the reframing Mansouri offers." },
    { id: "C", text: "It contrasts two competing theories of Roman harbor construction." },
    { id: "D", text: "It questions whether the lower courses are stonework at all." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Text Structure and Purpose**\n\n**Choice B is correct.**\n\nFirst sentence: old view (early Punic harbor). Second: Mansouri reframes it. Underlined: stone-cutting marks match Roman-era patterns — that's the *evidence* that grounds the reframing.\n\n**Why the wrong answers are tempting:**\n* Choice A: not a counterexample; it supports Mansouri.\n* Choice C: only one harbor is in question.\n* Choice D: stonework is not in dispute."
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Craft and Structure",
  skill: "text-structure-and-purpose",
  passage: "The following text is adapted from Marcin Sokolowski's 2022 short story \"The Forge.\" Borys, a retired blacksmith, is sweeping out the shop he has not used in two years.\n\nBorys swept the floor in long, even strokes, the way he had every morning for forty years before the shop closed. The hammer rack, the anvil, the bench by the south window — all of them were where he had left them, and the cold air from the open back door smelled exactly as it always had. __He set the broom against the wall and stood for a moment in the middle of the room, his palms turned up, listening to a quiet that did not belong to a working forge.__ It was, he thought, almost the harder thing to bear.",
  question: "Which choice best describes the function of the underlined sentence in the text?",
  choices: [
    { id: "A", text: "It marks a shift from physical action to interior reflection." },
    { id: "B", text: "It establishes a contrast between Borys's forge and a neighboring shop." },
    { id: "C", text: "It contradicts the calm tone established earlier in the passage." },
    { id: "D", text: "It signals that Borys is about to reopen the forge that day." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Text Structure and Purpose (Literary)**\n\n**Choice A is correct.**\n\nThe sentences before describe Borys's *actions* (sweeping, looking around). The underlined sentence shifts to him standing still and *listening*; the next sentence reports what he *thinks*. The pivot is from action to reflection.\n\n**Why the wrong answers are tempting:**\n* Choice B: there's no neighboring shop.\n* Choice C: the tone stays meditative.\n* Choice D: nothing in the passage suggests reopening."
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
      text: "Recent enthusiasm for installing perovskite-silicon tandem solar cells in residential markets has been propelled by materials scientists who emphasize the dramatic efficiency gains the tandem architecture has demonstrated in laboratory tests. The model promises higher per-panel output, faster payback periods for homeowners, and a sharper drop in residential carbon emissions."
    },
    {
      label: "Text 2",
      text: "Energy economist Camille Mercier shares the goals of the perovskite-silicon movement but cautions that \"laboratory efficiency\" alone is not the same as field reliability. Her studies of multi-year residential deployments in northern France show that without robust encapsulation standards, perovskite layers can degrade rapidly under humidity and thermal cycling, and the predicted gains over standard silicon shrink within two to three years."
    }
  ],
  question: "Based on the texts, how would Mercier (Text 2) most likely respond to the claim made by the materials scientists in Text 1?",
  choices: [
    { id: "A", text: "By rejecting the laboratory efficiency findings as overstated." },
    { id: "B", text: "By acknowledging the laboratory gains but warning that real-world performance depends on durability standards the scientists do not address." },
    { id: "C", text: "By arguing that perovskite-silicon tandems are technically impossible to manufacture for residential markets." },
    { id: "D", text: "By insisting that the tandem model has already been disproven by the French residential record." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Cross-Text Connections**\n\n**Choice B is correct.**\n\nMercier *shares the goals* — she agrees with the lab gains. But she warns about *durability* in real deployments. That is choice B exactly.\n\n**Why the wrong answers are tempting:**\n* Choice A: she doesn't reject the lab numbers.\n* Choice C: she never claims technical impossibility.\n* Choice D: \"already disproven\" is too strong — she warns about a *risk*."
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
      text: "The architect Reinhard Stadler, in a 1977 lecture on his civic projects, argued that the most successful public buildings are those whose entrances do not announce themselves — a slight recess, a low overhang — so that visitors register that they have arrived only after they are inside. The trick, he said, is to plant the welcome quietly, in geometry rather than ornament."
    },
    {
      label: "Text 2",
      text: "In a recent essay rereading Stadler's 1974 city library, the critic Beata Nowakowska notes that several of Stadler's contemporary reviewers complained that the library's entrance felt accidental, as if the visitor had stumbled into the building rather than entered it. Nowakowska argues that those complaints reveal a generational expectation: reviewers in the 1970s were trained to read civic entrances that were marked by columns or signage, and Stadler's quieter geometry read to them as no entrance at all."
    }
  ],
  question: "Based on the texts, how would Nowakowska (Text 2) most likely characterize the 1970s reviewers' complaints?",
  choices: [
    { id: "A", text: "a flaw in Stadler's design that the reviewers correctly identified." },
    { id: "B", text: "a misunderstanding rooted in the reviewers' expectations rather than in the library itself." },
    { id: "C", text: "a deliberate provocation by Stadler aimed at his contemporaries." },
    { id: "D", text: "a breakdown in communication between architects and reviewers of the period." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Cross-Text Connections (Inference)**\n\n**Choice B is correct.**\n\nNowakowska says the complaints \"reveal a generational expectation\" — the *reviewers* expected columns/signage, so quieter geometry registered as none. The flaw is in the reviewers' habits, not in Stadler.\n\n**Why the wrong answers are tempting:**\n* Choice A: she defends Stadler.\n* Choice C: she doesn't claim provocation.\n* Choice D: no architect/reviewer rift is described."
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Information and Ideas",
  skill: "central-ideas-and-details",
  passage: "Contrary to a long-standing assumption, the migration routes followed by basking sharks in the eastern Atlantic are not transmitted purely through fixed genetic programs. Each younger shark appears to learn productive feeding corridors by following older individuals during its first long-distance trip, and tagging studies show that solitary juveniles often select much less efficient routes than juveniles that have traveled with adults. Recent acoustic-tag work along the Irish shelf suggests that route transmission across generations is unusually social for a species long described as a passive drifter.",
  question: "Which choice best states the main idea of the text?",
  choices: [
    { id: "A", text: "Basking sharks acquire migration routes purely through genetic programs." },
    { id: "B", text: "Basking shark migration routes are shaped substantially by social learning from older individuals, not only by genetic factors." },
    { id: "C", text: "Solitary juvenile basking sharks cannot survive in the eastern Atlantic." },
    { id: "D", text: "Tagging studies have proven that basking sharks do not have any genetic predispositions for migration." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Central Ideas and Details**\n\n**Choice B is correct.**\n\nThe whole passage corrects an old view: routes are learned socially from older sharks, not only inherited.\n\n**Why the wrong answers are tempting:**\n* Choice A: this is the *old* view.\n* Choice C: the passage discusses route quality, not survival.\n* Choice D: the passage doesn't deny genetic factors entirely — only that they aren't the whole story."
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Information and Ideas",
  skill: "central-ideas-and-details",
  passage: "In a 1953 letter to a colleague, the photographer Tomás Esquivel described the moment he decided to abandon his planned book on northern Mexican train stations and turn instead to the smaller market towns whose stations had been left off the main lines. \"I had been making pictures of the places the timetables remembered,\" he wrote, \"and I begin to suspect the only honest photographs left to make are of the places the timetables forgot.\" The shift would, within four years, produce one of the most widely reproduced studies of post-rail rural decline in the region.",
  question: "Which choice best states the main idea of the text?",
  choices: [
    { id: "A", text: "Esquivel gave up photography in 1953 to pursue rail engineering full time." },
    { id: "B", text: "Esquivel's move from photographing main-line stations to photographing bypassed market towns was driven by a sense that the truer subject was the places infrastructure had left behind." },
    { id: "C", text: "Esquivel's letter was the most influential of his career." },
    { id: "D", text: "All northern Mexican train stations were abandoned by 1953." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Central Ideas and Details**\n\n**Choice B is correct.**\n\nThe passage is about *why* Esquivel changed his subject: the truer story was the bypassed towns. The book series is the result.\n\n**Why the wrong answers are tempting:**\n* Choice A: he changed *what* he photographed, not what he did.\n* Choice C: the passage doesn't claim the letter itself was influential.\n* Choice D: the passage doesn't claim wholesale abandonment of stations."
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  domain: "Information and Ideas",
  skill: "central-ideas-and-details",
  passage: "The Slovenian autochthonous bee subspecies *Apis mellifera carnica* was once thought to be a uniform population sharing similar foraging behavior across the country's three principal climatic zones. By the early twenty-first century, careful long-term monitoring at apiaries in Gorenjska, Notranjska, and Prekmurje had reduced the species' apparent uniformity to a more uneven picture: bees from each zone showed measurably different responses to early-season cold spells. Conservation breeders initially favored centralized queen-rearing programs from a single Gorenjska stock, on the assumption that one robust line could eventually supply hives nationwide. More recent comparative work has complicated that hope: distinct local lineages perform differently under their native climate conditions, and a single source line could erase regional adaptations that took many generations to develop.",
  question: "Which choice best states the main idea of the text?",
  choices: [
    { id: "A", text: "The Carniolan honeybee has been reduced from three populations to a single Gorenjska line." },
    { id: "B", text: "Conservation breeding methods used in Slovenia cannot be applied elsewhere in Europe." },
    { id: "C", text: "The early breeding strategy of relying on a single source line is in tension with new comparative findings about regional adaptation in Slovenian Carniolan honeybees." },
    { id: "D", text: "Recent comparative research has shown that the Carniolan honeybee is in fact several different species." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Central Ideas and Details**\n\n**Choice C is correct.**\n\nThe passage sets up the early plan (single Gorenjska stock) and then says new findings \"complicated that hope\" — distinct local lineages perform better in their native conditions. The main idea is that exact tension.\n\n**Why the wrong answers are tempting:**\n* Choice A: distorts the facts — the lineages haven't been reduced to one line; the *plan* would have done so.\n* Choice B: the passage doesn't generalize beyond Slovenia.\n* Choice D: \"different lineages\" is not \"different species.\""
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Information and Ideas",
  skill: "inferences",
  passage: "Although the small but persistent peat-cutting trade of the Faroe Islands is sometimes treated as a fading folk practice, the writer and folklorist Sigrid Joensen has documented unusually steady seasonal participation among households in the village of Eiði. Joensen suggests that what looks from the outside like cultural inertia is in fact a working economic relationship: the peat that families cut in summer continues to ________",
  question: "Which choice most logically completes the text?",
  choices: [
    { id: "A", text: "be reserved for sale to tourists who visit the islands in late summer." },
    { id: "B", text: "supply households with usable winter heating fuel that would otherwise be costly to import." },
    { id: "C", text: "be banned by the islands' local councils." },
    { id: "D", text: "fall short of the volumes legally required for export." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Inferences (Logical Completion)**\n\n**Choice B is correct.**\n\nJoensen says the practice is \"a working economic relationship\" — peat must serve some economic purpose. The most natural fit is *usable winter heating fuel*, which would otherwise be expensive to import. That makes the steady participation sensible.\n\n**Why the wrong answers are tempting:**\n* Choice A: tourism isn't mentioned in the passage.\n* Choice C: a ban would contradict the steady participation.\n* Choice D: legal export volumes aren't supported by the passage."
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Information and Ideas",
  skill: "inferences",
  passage: "The economist Idris Abubakar argues that the most common single-village models of microcredit failure overlook a subtler dynamic. In several West African case studies he reviews, repayment rates appear strong inside any given lending cohort, but newly formed cohorts in the same village often perform worse than their predecessors. Abubakar suggests that this pattern is not a problem of borrower discipline but a sign that ________",
  question: "Which choice most logically completes the text?",
  choices: [
    { id: "A", text: "borrowers in West Africa are systematically less reliable than borrowers elsewhere." },
    { id: "B", text: "earlier cohorts may have absorbed the limited local lending opportunities, leaving later cohorts with thinner project pipelines." },
    { id: "C", text: "lenders should require borrowers to relocate before joining a cohort." },
    { id: "D", text: "single-village models are the most accurate way to measure microcredit success." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Inferences (Logical Completion)**\n\n**Choice B is correct.**\n\nAbubakar says it's *not* a discipline problem. The remaining mechanism that fits the cohort-by-cohort decline within the *same* village is *saturation*: earlier cohorts use up the strong project opportunities, so later cohorts face thinner pipelines.\n\n**Why the wrong answers are tempting:**\n* Choice A: stereotyping; contradicts \"not a problem of borrower discipline.\"\n* Choice C: relocation isn't supported by the passage.\n* Choice D: contradicts Abubakar's whole point."
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  domain: "Information and Ideas",
  skill: "inferences",
  passage: "Until the late 2010s, the spore prints used to date archaeological birch-bark documents from northern Eurasia were treated by most paleobotanists as if their composition reflected only the local flora at the time of the document's production. The paleobotanist Aino Lehtinen has recently argued, however, that the spore composition can also be skewed by the storage environment in which the bark sat for centuries — caves with persistent updrafts, for example, can introduce later spores that mimic original deposition. Once such storage effects are admitted, several documents previously dated to the early medieval period may in fact be ________",
  question: "Which choice most logically completes the text?",
  choices: [
    { id: "A", text: "older than scholars had assumed, predating the storage environment entirely." },
    { id: "B", text: "younger than scholars had assumed, since their dated spores may reflect post-production deposition rather than the moment of writing." },
    { id: "C", text: "the work of forgers from a later period." },
    { id: "D", text: "untranslatable without help from spore samples taken from soil layers in unrelated sites." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Inferences (Logical Completion)**\n\n**Choice B is correct.**\n\nLehtinen's argument is that storage environments can *add* later spores. If the spore composition has been mixed with material deposited *after* writing, then spore-based dates may actually correspond to the *storage* period, not the writing period — making the documents potentially *older than the spore date*. Wait — careful: if later spores are added, then the apparent date based on spores is shifted *toward later flora*, so documents previously read as early medieval would actually be earlier than... no: the apparent date would skew *later* than the true writing date if newer spores are mixed in. So documents \"dated to the early medieval period\" may in fact be *younger* than that — i.e. their apparent early-medieval date is too early, and the true writing was even later. Choice B captures the logic: spores reflect post-production deposition rather than the moment of writing, so documents previously assigned an early-medieval date may be younger than that.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"older\" reverses the direction implied by added later spores.\n* Choice C: forgery isn't what Lehtinen is arguing.\n* Choice D: translation isn't the issue."
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Information and Ideas",
  skill: "command-of-evidence-quantitative",
  passage: "A team of education researchers studying small rural elementary schools in central Portugal wanted to know whether structured weekly outdoor reading sessions affected end-of-year reading-comprehension scores. Schools were assigned to one of two groups, with end-of-year mean scores reported on a 0–100 scale. The team concluded that schools with structured outdoor reading sessions had higher end-of-year mean scores than schools without them.",
  questionTable: {
    type: "table",
    caption: "End-of-year mean reading-comprehension score by group.",
    headers: ["Group", "Number of schools", "Mean score (0–100)"],
    rows: [
      ["No outdoor reading sessions", "12", "63"],
      ["Structured outdoor reading sessions", "12", "78"]
    ]
  },
  question: "Which choice most effectively uses data from the table to support the team's conclusion?",
  choices: [
    { id: "A", text: "There were 12 schools in each group." },
    { id: "B", text: "The mean score for schools without outdoor reading sessions was 63." },
    { id: "C", text: "Schools with structured outdoor reading sessions had a mean score of 78, compared to 63 for schools without — a difference of 15 points on the 0–100 scale." },
    { id: "D", text: "The mean score for schools with structured outdoor reading sessions was 78." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Command of Evidence (Quantitative)**\n\n**Choice C is correct.**\n\nThe conclusion compares the two groups. Choice C reports both means (78 vs. 63) and the 15-point difference, directly supporting the comparison.\n\n**Why the wrong answers are tempting:**\n* Choice A: school counts don't establish a score comparison.\n* Choice B: only one mean — no comparison.\n* Choice D: only one mean — no comparison."
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Information and Ideas",
  skill: "command-of-evidence-textual",
  passage: "In her 2021 study of early Tuscan dialect drama, the textual scholar Costanza Marchetti argues that the differences between the two surviving manuscripts of *La Pastorella di Volterra* are best explained not by deliberate authorial revision but by the working conditions of the two scribes involved. Marchetti traces patterns of orthographic habits and finds that many lines previously cited as the playwright's revisions correspond instead to the preferences of individual copyists.",
  question: "Which finding, if true, would most directly support Marchetti's argument?",
  choices: [
    { id: "A", text: "Some passages in the second manuscript contain plot details absent from the first manuscript." },
    { id: "B", text: "Lines in the second manuscript whose orthographic habits depart most strongly from the first match the documented preferences of the second scribe in unrelated documents." },
    { id: "C", text: "The first manuscript was copied several times before the second manuscript appeared." },
    { id: "D", text: "The playwright is known to have revised other plays heavily during this period." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Command of Evidence (Textual)**\n\n**Choice B is correct.**\n\nMarchetti's claim is that *scribes*, not authorial revision, explain many differences. Evidence that the most divergent lines line up with documented scribal preferences directly supports that mechanism.\n\n**Why the wrong answers are tempting:**\n* Choice A: new plot content suggests authorial revision — opposite of Marchetti's claim.\n* Choice C: copy history doesn't address whether the changes were authorial.\n* Choice D: revising other plays doesn't speak to *La Pastorella* scribes."
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  domain: "Information and Ideas",
  skill: "command-of-evidence-quantitative",
  passage: "A team of climate ecologists wanted to test whether the Andean cloud-forest tree species *Cinchona pubescens* shifts its peak flowering time in response to multi-decade warming. They reviewed long-term phenology records from four high-elevation transects, comparing mean peak flowering day-of-year across two thirty-year periods. The team concluded that *Cinchona pubescens* peak flowering has shifted earlier in the year across all four transects.",
  questionTable: {
    type: "table",
    caption: "Mean peak flowering day-of-year for Cinchona pubescens by transect and period.",
    headers: ["Transect", "1955–1984 mean DOY", "1985–2014 mean DOY"],
    rows: [
      ["Norte", "238", "229"],
      ["Centro-Norte", "242", "232"],
      ["Centro-Sur", "244", "236"],
      ["Sur", "247", "238"]
    ]
  },
  question: "Which choice most effectively uses data from the table to support the team's conclusion?",
  choices: [
    { id: "A", text: "The 1985–2014 mean for the Sur transect was 238." },
    { id: "B", text: "On every transect, the 1985–2014 mean peak flowering day-of-year is earlier than the 1955–1984 mean — by 9, 10, 8, and 9 days respectively from north to south." },
    { id: "C", text: "The Norte transect had a 1955–1984 mean of 238." },
    { id: "D", text: "The Centro-Sur transect's 1985–2014 mean was 236." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Command of Evidence (Quantitative)**\n\n**Choice B is correct.**\n\nThe conclusion is a *cross-transect* claim. Choice B notes that all four transects show an earlier mean and gives the size of each shift, which is the most complete and pointed support.\n\n**Why the wrong answers are tempting:**\n* Choice A: a single value gives no comparison.\n* Choice C: a single value gives no comparison.\n* Choice D: a single value gives no comparison."
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  domain: "Information and Ideas",
  skill: "command-of-evidence-textual",
  passage: "The historian of technology Onyinye Eze argues that the small artisanal foundries of late-nineteenth-century western Nigeria were not, as long supposed, gradually displaced by imported industrial-scale ironwork. Instead, she contends, many foundries were temporarily eclipsed by colonial purchasing patterns and then revived at smaller scales when those patterns shifted in the early twentieth century, with skilled smiths returning to forms of work they had only briefly set aside.",
  question: "Which finding, if true, would most directly support Eze's argument?",
  choices: [
    { id: "A", text: "Several West African coastal cities began importing English iron tools in the 1880s." },
    { id: "B", text: "Trade ledgers from western Nigerian markets in the 1910s and 1920s show a measurable rise in the sale of locally smithed implements that closely match nineteenth-century forms, sold by smiths whose names appear in late-nineteenth-century records." },
    { id: "C", text: "Modern surveys show that very few imported iron tools from the period have survived in usable condition." },
    { id: "D", text: "Colonial officials in the 1890s wrote frequently about the scale of imported tool trade." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Command of Evidence (Textual)**\n\n**Choice B is correct.**\n\nEze's claim has two parts: (1) foundries weren't displaced, only eclipsed; (2) smiths *returned* to old forms. Trade ledgers showing rising sales of locally smithed implements matching nineteenth-century forms — *by the same smiths* — supports both parts directly.\n\n**Why the wrong answers are tempting:**\n* Choice A: imports in the 1880s support the *eclipse*, but not the *return*.\n* Choice C: a survival rate doesn't speak to whether smiths revived their work.\n* Choice D: official commentary on imports doesn't establish the revival."
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Standard English Conventions",
  skill: "boundaries",
  passage: "The cataloging of medieval Hebrew manuscripts at Cairo's Ben Ezra synagogue began in earnest in the late nineteenth century ________ scholars are still revising attributions today as new digital comparison tools allow finer paleographic analysis.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "century, in fact" },
    { id: "B", text: "century; in fact," },
    { id: "C", text: "century, in fact," },
    { id: "D", text: "century in fact" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Boundaries (Sentence Joining)**\n\n**Choice B is correct.**\n\nThe text contains two independent clauses (\"The cataloging... began... century\" and \"scholars are still revising...\"). They must be separated by a period or a semicolon. Choice B uses a semicolon and sets off \"in fact\" with commas.\n\n**Why the wrong answers are tempting:**\n* Choice A: comma between independent clauses is a comma splice.\n* Choice C: same comma-splice problem.\n* Choice D: no punctuation between independent clauses is a run-on."
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Standard English Conventions",
  skill: "form-structure-and-sense",
  passage: "Although the historic Korean *hanji*-making villages near Jeonju are often described as if they shared a single technique, in practice each village ________ its own variations on rinsing and beating in addition to the broadly recognized national methods.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "maintain" },
    { id: "B", text: "maintains" },
    { id: "C", text: "have maintained" },
    { id: "D", text: "are maintaining" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Form, Structure, and Sense (Subject-Verb Agreement)**\n\n**Choice B is correct.**\n\nThe subject \"each village\" is singular, so it takes a singular verb in the simple present: \"maintains.\"\n\n**Why the wrong answers are tempting:**\n* Choice A: \"maintain\" is plural-present.\n* Choice C: \"have maintained\" is plural.\n* Choice D: \"are maintaining\" is plural and shifts aspect unnecessarily."
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Standard English Conventions",
  skill: "boundaries",
  passage: "The Sumatran tiger biologist Indah Suryanto coordinates camera-trap surveys across thirty plots in the Leuser Ecosystem ________ each year, she also runs a training week in which younger field staff are introduced to the careful protocols her team has developed.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "Ecosystem:" },
    { id: "B", text: "Ecosystem," },
    { id: "C", text: "Ecosystem." },
    { id: "D", text: "Ecosystem" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Boundaries (Sentence Joining)**\n\n**Choice C is correct.**\n\nThe two clauses on either side of the blank are both independent. A period correctly separates them.\n\n**Why the wrong answers are tempting:**\n* Choice A: a colon expects an explanation that flows from the first clause.\n* Choice B: a comma between two independent clauses is a comma splice.\n* Choice D: no punctuation is a run-on."
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Standard English Conventions",
  skill: "form-structure-and-sense",
  passage: "________ collection of nineteenth-century West Greenlandic kayak frames is unusually complete, the National Museum of Denmark in Copenhagen remains the most cited destination for researchers reconstructing traditional Arctic boatbuilding methods.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "Despite the National Museum of Denmark's" },
    { id: "B", text: "Despite the National Museum of Denmarks" },
    { id: "C", text: "Despite the National Museums of Denmark's" },
    { id: "D", text: "Despite the National Museum of Denmark's'" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Form, Structure, and Sense (Possessives)**\n\n**Choice A is correct.**\n\nThe sentence needs the singular possessive of \"the National Museum of Denmark\" — that is \"the National Museum of Denmark's.\"\n\n**Why the wrong answers are tempting:**\n* Choice B: missing apostrophe.\n* Choice C: pluralizes \"Museum\" when only one museum is meant.\n* Choice D: stray extra apostrophe."
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  domain: "Standard English Conventions",
  skill: "boundaries",
  passage: "The Iznik tile historian Selma Yıldız, who has spent more than two decades cataloging fragments held in collections across Anatolia and Western ________ that the cobalt-rich underglaze used in the second half of the sixteenth century should be understood as a regional rather than a court-monopolized resource.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "Europe argues" },
    { id: "B", text: "Europe, argues" },
    { id: "C", text: "Europe; argues" },
    { id: "D", text: "Europe, argues," }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Boundaries (Nonrestrictive Clauses)**\n\n**Choice B is correct.**\n\nThe nonrestrictive clause \"who has spent more than two decades cataloging fragments held in collections across Anatolia and Western Europe\" must close with a comma before the main verb \"argues.\"\n\n**Why the wrong answers are tempting:**\n* Choice A: missing the closing comma.\n* Choice C: a semicolon would require independent clauses on each side.\n* Choice D: extra comma after \"argues\" wrongly separates the verb from its object clause."
},
{
  id: 23,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  domain: "Standard English Conventions",
  skill: "form-structure-and-sense",
  passage: "Linguists studying the Mansi language of western Siberia, which has only a small number of fluent first-language speakers ________ archival recordings made in the mid-twentieth century to document grammatical structures that newer learners no longer hear modeled in daily life.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "rely on" },
    { id: "B", text: "relies on" },
    { id: "C", text: "is relying on" },
    { id: "D", text: "to rely on" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Form, Structure, and Sense (Subject-Verb Agreement)**\n\n**Choice A is correct.**\n\nThe subject of the main clause is \"Linguists\" (plural). The non-essential clause \"which has only a small number...\" modifies \"the Mansi language\" and doesn't change the main verb. The plural \"rely on\" agrees with \"Linguists.\"\n\n**Why the wrong answers are tempting:**\n* Choice B: \"relies\" is singular.\n* Choice C: \"is relying\" is singular and tense-shifts unnecessarily.\n* Choice D: an infinitive leaves no main verb."
},
{
  id: 24,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Expression of Ideas",
  skill: "transitions",
  passage: "Most accounts of the early career of the architect Ailbhe Donovan emphasize the dramatic civic commissions she won during the 1990s. ________ historians of the same period have begun to point out that more than two-thirds of her built work in those years consisted of small-scale residential commissions for clients in suburban Galway — a pattern that the civic narrative obscures.",
  question: "Which choice completes the text with the most logical transition?",
  choices: [
    { id: "A", text: "For example," },
    { id: "B", text: "Therefore," },
    { id: "C", text: "However," },
    { id: "D", text: "Similarly," }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Transitions**\n\n**Choice C is correct.**\n\nThe first sentence reports the dominant story (civic commissions). The second pushes back with new historical work showing most of her output was small-scale residential. That contrast calls for \"However,\".\n\n**Why the wrong answers are tempting:**\n* Choice A: \"For example\" expects an instance of the previous claim.\n* Choice B: \"Therefore\" expects a consequence.\n* Choice D: \"Similarly\" expects a parallel claim."
},
{
  id: 25,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  domain: "Expression of Ideas",
  skill: "transitions",
  passage: "The marine geologist Mateusz Kowalczyk spent four field seasons mapping submarine canyons off the coast of northern Poland. ________ he also collaborated with sediment ecologists to record sediment-grain size distributions at sampling stations along each canyon, a finer-grained measurement than the regional surveys had ever included.",
  question: "Which choice completes the text with the most logical transition?",
  choices: [
    { id: "A", text: "Nevertheless," },
    { id: "B", text: "In addition," },
    { id: "C", text: "Otherwise," },
    { id: "D", text: "By contrast," }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Transitions**\n\n**Choice B is correct.**\n\nThe first sentence describes Kowalczyk's mapping work. The second adds *another* thing he did (collaborated to record sediment-grain size distributions). That is addition.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"Nevertheless\" expects contrast.\n* Choice C: \"Otherwise\" expects an alternative outcome.\n* Choice D: \"By contrast\" expects a difference."
},
{
  id: 26,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Expression of Ideas",
  skill: "rhetorical-synthesis",
  studentNotes: {
    intro: "While researching for a presentation, a student took the following notes about the Welsh language broadcaster S4C.",
    bullets: [
      "S4C is the Welsh-language television channel established in 1982.",
      "It broadcasts a mix of news, drama, sport, and children's programming entirely in Welsh.",
      "Welsh-medium schools rely on S4C content for in-class language exposure.",
      "Audience research shows higher intergenerational Welsh use in households where S4C is regularly viewed.",
      "Cultural commentators credit S4C with stabilizing Welsh-language transmission since the 1980s."
    ],
    goal: "The student wants to emphasize S4C's role in supporting Welsh-language transmission."
  },
  question: "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  choices: [
    { id: "A", text: "S4C is the Welsh-language television channel established in 1982." },
    { id: "B", text: "S4C broadcasts a mix of news, drama, sport, and children's programming entirely in Welsh." },
    { id: "C", text: "Audience research shows higher intergenerational Welsh use in households that regularly watch S4C, and cultural commentators credit the channel with stabilizing Welsh-language transmission since the 1980s." },
    { id: "D", text: "S4C provides children's programming in Welsh." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Rhetorical Synthesis (Notes)**\n\n**Choice C is correct.**\n\nThe goal is to emphasize S4C's role in supporting *Welsh-language transmission*. Choice C cites the household audience evidence and the commentator credit, hitting the transmission point directly.\n\n**Why the wrong answers are tempting:**\n* Choice A: definitional only.\n* Choice B: programming description, not transmission.\n* Choice D: a programming detail without transmission framing."
},
{
  id: 27,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  domain: "Expression of Ideas",
  skill: "rhetorical-synthesis",
  studentNotes: {
    intro: "While researching for a science article, a student took the following notes about the Bornean clouded leopard.",
    bullets: [
      "Bornean clouded leopards (Neofelis diardi borneensis) are highly arboreal mid-sized cats.",
      "Field studies show juveniles practice fine-grained branch-walking maneuvers under their mothers' eye for several months.",
      "By their second year, juveniles develop recognizable individual climbing styles.",
      "Comparative work suggests these styles correlate with the mother's technique, not just available canopy structure.",
      "Researchers describe arboreal locomotion as one of the clearer examples of socially transmitted behavior in mid-sized cats."
    ],
    goal: "The student wants to emphasize that Bornean clouded leopard climbing technique is a learned, socially transmitted skill."
  },
  question: "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  choices: [
    { id: "A", text: "Bornean clouded leopards are highly arboreal cats." },
    { id: "B", text: "Juveniles raised by Bornean clouded leopard mothers develop individual climbing styles that correlate with their mothers' techniques, supporting the view that arboreal locomotion in this subspecies is a socially transmitted skill rather than a purely instinctive one." },
    { id: "C", text: "Comparative work has been conducted on Bornean clouded leopard climbing." },
    { id: "D", text: "By their second year, juveniles display recognizable climbing styles." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Rhetorical Synthesis (Notes)**\n\n**Choice B is correct.**\n\nThe goal is to emphasize that climbing is *learned and socially transmitted*. Choice B names the juveniles, the correlation with the mother's technique, and the framing as social transmission rather than instinct — directly hitting the goal.\n\n**Why the wrong answers are tempting:**\n* Choice A: gives behavior but not the learning angle.\n* Choice C: vague — doesn't communicate the finding.\n* Choice D: shows individual styles develop but doesn't tie them to the mother."
}
      ]
    }
  ]
};
