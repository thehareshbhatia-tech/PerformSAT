// Practice Test 4 — SAT Reading & Writing (R&W)
// 2 Modules, 27 questions each (54 total) in 32 minutes per module.
// Distribution per module follows the official digital SAT R&W blueprint:
//   * Information and Ideas: ~10 (Central Ideas/Details, Inferences,
//     Command of Evidence — Textual, Command of Evidence — Quantitative)
//   * Craft and Structure: ~7 (Words in Context, Text Structure & Purpose,
//     Cross-Text Connections)
//   * Standard English Conventions: ~6 (Boundaries, Form/Structure/Sense)
//   * Expression of Ideas: ~4 (Transitions, Rhetorical Synthesis / Notes)
//
// All passages are ORIGINAL prose written for this practice test. No
// passages are taken or paraphrased from College Board materials, prep
// books, or other copyrighted sources.

export const practiceTest4RW = {
  id: "practice-test-4-rw",
  title: "Practice Test 4 — Reading & Writing",
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
  passage: "When the meteorologist Joaquín Reyes finished his analysis of Saharan dust transport across the Atlantic, he found that even modest plumes could ________ rainfall patterns in the Caribbean for weeks. Reyes had spent two seasons aboard a research vessel collecting samples to confirm what satellite imagery had only suggested.",
  question: "Which choice completes the text with the most logical and precise word or phrase?",
  choices: [
    { id: "A", text: "ignore" },
    { id: "B", text: "alter" },
    { id: "C", text: "imitate" },
    { id: "D", text: "delay" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Words in Context (Fill-in)**\n\n**Choice B is correct.**\n\nThe sentence describes dust plumes affecting rainfall \"for weeks.\" \"Alter\" means to change or modify, which fits the idea that the dust changes the rainfall patterns over time.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"ignore\" makes no sense — dust isn't an actor that can ignore weather.\n* Choice C: \"imitate\" doesn't match — dust doesn't copy rainfall, it changes it.\n* Choice D: \"delay\" is too narrow — the passage says \"alter,\" implying multiple kinds of change, not only timing."
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 2,
  domain: "Craft and Structure",
  skill: "words-in-context",
  passage: "The luthier Hina Tanaka was known for keeping her workshop notes ________; rather than long written explanations, she preferred to sketch a single cross-section of a violin's interior, trusting that the drawing would capture what paragraphs of prose could not.",
  question: "Which choice completes the text with the most logical and precise word or phrase?",
  choices: [
    { id: "A", text: "verbose" },
    { id: "B", text: "spare" },
    { id: "C", text: "ambiguous" },
    { id: "D", text: "decorative" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Words in Context (Fill-in)**\n\n**Choice B is correct.**\n\nThe semicolon explains the missing word: Tanaka \"preferred\" a \"single\" sketch over \"long written explanations.\" \"Spare\" means minimal or stripped down, which matches.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"verbose\" is the opposite — long-winded, not minimal.\n* Choice C: \"ambiguous\" describes unclarity, but the passage praises a sketch that clearly captures what prose cannot.\n* Choice D: \"decorative\" misses the functional, minimalist point of the description."
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  domain: "Craft and Structure",
  skill: "words-in-context",
  passage: "Although the urban beekeeper Sefa Owusu is often praised for the productivity of his rooftop hives, his record-keeping is anything but rushed. His logs reveal a beekeeper who would ________ a single hive's behavior across an entire season, returning to the same colony week after week to note minor shifts in temperament and brood pattern.",
  question: "Which choice completes the text with the most logical and precise word or phrase?",
  choices: [
    { id: "A", text: "dismiss" },
    { id: "B", text: "study" },
    { id: "C", text: "relocate" },
    { id: "D", text: "abandon" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Words in Context (Fill-in)**\n\n**Choice B is correct.**\n\nThe sentence describes Owusu \"returning to the same colony week after week to note\" small shifts. That sustained attention is *studying*.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"dismiss\" contradicts careful repeated observation.\n* Choice C: \"relocate\" doesn't fit — the colony stays in one place; he returns to it.\n* Choice D: \"abandon\" contradicts sustained engagement."
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  domain: "Craft and Structure",
  skill: "text-structure-and-purpose",
  passage: "For decades, evolutionary biologists assumed that the unusual color vision of mantis shrimp — with up to sixteen photoreceptor types — must produce extraordinarily fine color discrimination. A 2014 study by neuroethologist Hanne Thoen challenges that assumption. __After training shrimp to discriminate between paired light wavelengths, Thoen's team found that the animals performed worse than humans at distinguishing closely spaced colors, suggesting that the eye's many channels serve rapid, low-resolution recognition rather than fine-grained color analysis.__",
  question: "Which choice best describes the function of the underlined sentence in the text as a whole?",
  choices: [
    { id: "A", text: "It introduces a counterexample that complicates Thoen's challenge to the older view." },
    { id: "B", text: "It presents the experimental evidence and the new explanation that grounds Thoen's challenge." },
    { id: "C", text: "It contrasts two competing methods for measuring color vision." },
    { id: "D", text: "It questions whether the older assumption was ever genuinely held." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Text Structure and Purpose**\n\n**Choice B is correct.**\n\nThe first two sentences set up: old view (many photoreceptors = fine discrimination) → Thoen challenges it. The underlined sentence then provides the *evidence* (training experiments) and the *new explanation* (rapid low-resolution recognition) supporting the challenge.\n\n**Why the wrong answers are tempting:**\n* Choice A: there's no counterexample — the sentence supports Thoen.\n* Choice C: only one method is described.\n* Choice D: the passage accepts that the older view was held."
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 4,
  domain: "Craft and Structure",
  skill: "text-structure-and-purpose",
  passage: "The following text is adapted from Selma Bekele's 2021 short story \"The Loom Room.\" Adina, a weaver, is finishing her work just before nightfall.\n\nAdina tied off the last weft thread and stepped back from the loom that her mother had built from olive wood. The room was dim — the single window faced east, and the late sun had already moved past it — and the only sound was the click of the heddles settling against the warp. __She lingered there a moment, her hand still resting on the beam, and listened to the loom go quiet.__ It was, she sometimes thought, a comfort she could not name.",
  question: "Which choice best describes the function of the underlined sentence in the text?",
  choices: [
    { id: "A", text: "It marks a shift from physical action to interior reflection." },
    { id: "B", text: "It establishes a contrast between Adina's work and her mother's." },
    { id: "C", text: "It contradicts the calm tone established earlier in the passage." },
    { id: "D", text: "It signals that Adina is about to leave weaving for good." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Text Structure and Purpose (Literary)**\n\n**Choice A is correct.**\n\nThe sentences before describe Adina's *actions* (tying off, stepping back). The underlined sentence shifts to her standing still and listening, and the next sentence reports her *thought*. The underlined sentence is the pivot from doing to reflecting.\n\n**Why the wrong answers are tempting:**\n* Choice B: there is only one loom in the passage; no contrast is set up.\n* Choice C: the tone stays calm and reflective.\n* Choice D: nothing in the passage suggests she's quitting."
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
      text: "Recent enthusiasm for participatory budgeting — programs that let residents directly vote on how a slice of city funds is spent — has been propelled by political scientists who emphasize the civic-engagement and accountability benefits of giving citizens a direct hand in spending decisions. The model promises higher voter turnout, more responsive projects, and stronger trust in local government."
    },
    {
      label: "Text 2",
      text: "Public-policy researcher Mateus Vargas is sympathetic to the goals of participatory budgeting but cautions that \"direct voting\" alone is not the same as broad-based representation. His studies of mid-sized Brazilian cities show that without targeted outreach to lower-income neighborhoods, the citizens who actually show up tend to be wealthier and better networked, producing project lists that mirror existing inequalities. Without such guardrails, he argues, the model risks recreating the imbalances it was meant to dissolve."
    }
  ],
  question: "Based on the texts, how would Vargas (Text 2) most likely respond to the claim made by the political scientists in Text 1?",
  choices: [
    { id: "A", text: "By rejecting the civic-engagement and accountability benefits as overstated." },
    { id: "B", text: "By acknowledging the benefits but warning that achieving them depends on outreach choices the political scientists do not address." },
    { id: "C", text: "By arguing that participatory budgeting cannot be implemented in mid-sized cities." },
    { id: "D", text: "By insisting that the model has already been disproven by the Brazilian record." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Cross-Text Connections**\n\n**Choice B is correct.**\n\nText 2 says Vargas is \"sympathetic to the goals\" — so he agrees in spirit. But he adds a *condition*: without targeted outreach, the model risks bad outcomes. That is exactly choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A: Vargas doesn't reject the benefits.\n* Choice C: he never claims technical impossibility.\n* Choice D: \"already been disproven\" is too strong — he warns about a *risk*."
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
      text: "The poet Sigrún Magnúsdóttir, in a 1979 essay on her Faroese-language verse, argued that the strongest line breaks are those a reader does not consciously notice — a small caesura, a thinning of stress — so that one line seems to spill naturally into the next. The trick, she said, is to plant the connection so quietly that the reader registers only the new image, not the fracture."
    },
    {
      label: "Text 2",
      text: "In a recent essay rereading Magnúsdóttir's third collection, the critic Daníel Højgaard notes that several of her contemporary reviewers complained that her line endings felt arbitrary. Højgaard argues that those complaints reveal a generational reading habit: critics in the late 1970s expected line breaks that announced themselves with strong end-stops, and Magnúsdóttir's quieter caesuras read to them as no breaks at all."
    }
  ],
  question: "Based on the texts, how would Højgaard (Text 2) most likely characterize the late-1970s reviewers' complaints?",
  choices: [
    { id: "A", text: "a flaw in Magnúsdóttir's craft that the reviewers correctly identified." },
    { id: "B", text: "a misunderstanding rooted in the reviewers' expectations rather than in the poems themselves." },
    { id: "C", text: "a deliberate provocation by Magnúsdóttir aimed at her contemporaries." },
    { id: "D", text: "a breakdown in communication between editors and translators of the period." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Cross-Text Connections (Inference)**\n\n**Choice B is correct.**\n\nHøjgaard argues that the reviewers' complaints \"reveal a generational reading habit\" — the *reviewers* were trained to expect strong end-stops, so Magnúsdóttir's quieter caesuras registered as none at all. The flaw is in the reviewers' habits, not in the poems.\n\n**Why the wrong answers are tempting:**\n* Choice A: Højgaard is *defending* Magnúsdóttir.\n* Choice C: there's no claim of provocation.\n* Choice D: no editor/translator issue is mentioned."
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  domain: "Information and Ideas",
  skill: "central-ideas-and-details",
  passage: "Contrary to a long-standing assumption, the rubber industry of the ancient Mesoamerican world was not a late or marginal craft. Archaeologists working at sites in the Olmec heartland have shown that as early as 1600 BCE, communities were combining latex from rubber trees with morning-glory sap to produce a flexible, durable material used in ritual balls, sandals, and bindings. Recent analysis of preserved samples from El Manatí indicates that the technique required precise control of plant ratios, suggesting that rubber processing was a refined practice with deep roots, not a simple natural extraction.",
  question: "Which choice best states the main idea of the text?",
  choices: [
    { id: "A", text: "Mesoamerican rubber was a late or marginal craft." },
    { id: "B", text: "Mesoamerican rubber processing was an early, technically refined practice rather than a simple extraction." },
    { id: "C", text: "Rubber was used only for ritual balls in the Olmec heartland." },
    { id: "D", text: "Researchers at El Manatí have proven that morning-glory sap was the only ingredient in ancient rubber." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Central Ideas and Details**\n\n**Choice B is correct.**\n\nThe whole passage corrects the old view (\"late or marginal\") and argues the practice was \"refined\" and went back to 1600 BCE. The El Manatí evidence is offered to support that point.\n\n**Why the wrong answers are tempting:**\n* Choice A: this is the *old* assumption the passage is correcting.\n* Choice C: the passage lists multiple uses — balls, sandals, bindings.\n* Choice D: the passage says rubber was *combined with* morning-glory sap — not that sap was the only ingredient."
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  domain: "Information and Ideas",
  skill: "central-ideas-and-details",
  passage: "In a 1936 letter to a former teacher, the painter Iida Saari described the moment she decided to abandon her planned series of harbor scenes and turn instead to the small interiors of her family's farmhouse in Karelia. \"I had been painting the places people pass through,\" she wrote, \"and I begin to suspect that the only honest paintings left to make are of the rooms people return to.\" The shift would, within four years, produce one of the most quietly admired bodies of mid-century Finnish interior painting.",
  question: "Which choice best states the main idea of the text?",
  choices: [
    { id: "A", text: "Saari abandoned painting in 1936 to manage her family's farm." },
    { id: "B", text: "Saari's turn from harbor scenes to domestic interiors was driven by a search for honesty in her subject matter." },
    { id: "C", text: "Saari's letter to her teacher was the most influential of her career." },
    { id: "D", text: "Mid-century Finnish painters generally preferred interiors to landscapes." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Central Ideas and Details**\n\n**Choice B is correct.**\n\nThe passage explains *why* Saari shifted: she felt harbor scenes weren't \"honest\" anymore and turned to domestic rooms. The shift produced her admired interior work.\n\n**Why the wrong answers are tempting:**\n* Choice A: she didn't abandon painting; she changed *what* she painted.\n* Choice C: the passage doesn't claim the letter was her most influential.\n* Choice D: the passage describes Saari, not Finnish painters generally."
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Information and Ideas",
  skill: "central-ideas-and-details",
  passage: "The black-footed ferret (*Mustela nigripes*) was once distributed across the prairies of central North America, where it preyed almost exclusively on prairie dogs. By the late twentieth century, plague outbreaks and the conversion of grassland to row crops had reduced the species to a single relict colony in Wyoming. Conservation biologists initially focused on captive breeding from that colony, on the assumption that a single founder population, scaled up, could eventually re-seed the species' historic range. More recent genetic work has complicated that hope: the surviving Wyoming animals carry a narrow slice of the species' historic variation, and reintroduction from a single source may leave the recovered population unusually vulnerable to future plague waves.",
  question: "Which choice best states the main idea of the text?",
  choices: [
    { id: "A", text: "Black-footed ferrets have been reduced from a continent-wide species to a single thriving colony in Wyoming." },
    { id: "B", text: "Conservation strategies that worked for other endangered species cannot be applied to ferrets." },
    { id: "C", text: "The early conservation strategy of relying on a single source colony is in tension with new genetic findings about the species' narrow variation." },
    { id: "D", text: "Genetic research has shown that black-footed ferrets are in fact several different species." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Central Ideas and Details**\n\n**Choice C is correct.**\n\nThe passage sets up the early plan (rely on the Wyoming colony) and then says new genetic work \"has complicated that hope\" — narrow variation may leave the recovered population vulnerable. That tension is the main idea.\n\n**Why the wrong answers are tempting:**\n* Choice A: distorts the facts — the colony is described as a relict, not thriving.\n* Choice B: the passage doesn't generalize about other species.\n* Choice D: \"narrow variation\" is not the same as different species — that's an over-reading."
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  domain: "Information and Ideas",
  skill: "inferences",
  passage: "Although the wolverine was reintroduced to Sweden's Sarek region in the 1990s with the explicit goal of stabilizing reindeer-calf mortality at sustainable levels, ecologists now credit the wolverines with a far broader role. The presence of the predator has been linked to changes in fox movement, raven distribution, and even snow-pack scavenger communities. The relationship is now used as a textbook example of a _______",
  question: "Which choice most logically completes the text?",
  choices: [
    { id: "A", text: "single-species recovery program." },
    { id: "B", text: "trophic cascade." },
    { id: "C", text: "failure of reintroduction, since the wolverines did not achieve their stated goal." },
    { id: "D", text: "competitive exclusion between predators." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Inferences (Logical Completion)**\n\n**Choice B is correct.**\n\nThe passage describes one species (wolverine) having effects on reindeer, then foxes, ravens, and scavenger communities — that is, *cascading* through the ecosystem. \"Trophic cascade\" is the standard term.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"single-species recovery\" misses the wider cascading effects.\n* Choice C: the passage frames the outcome as a success, not a failure.\n* Choice D: there's no second predator competing — competitive exclusion doesn't fit."
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Information and Ideas",
  skill: "inferences",
  passage: "Coptic textile weavers of late-antique Egypt regularly worked motifs and inscriptions from earlier Greco-Roman traditions into otherwise local Christian designs. Art historian Nadia El-Halabi argues that this combination was not stylistic carelessness but a deliberate strategy: weavers used familiar pagan ornament as a visual scaffolding to make new religious imagery legible to viewers who were still _______",
  question: "Which choice most logically completes the text?",
  choices: [
    { id: "A", text: "fluent in older visual conventions." },
    { id: "B", text: "uninterested in any kind of decorative weaving." },
    { id: "C", text: "unable to weave complex patterns." },
    { id: "D", text: "actively hostile to Christianity." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Inferences (Logical Completion)**\n\n**Choice A is correct.**\n\nEl-Halabi's claim is that weavers used pagan ornament as \"visual scaffolding\" to make new Christian imagery legible. Scaffolding only works if the audience already *knows* the older conventions. So the viewers must still be \"fluent in older visual conventions.\"\n\n**Why the wrong answers are tempting:**\n* Choice B: contradicts the premise of an audience for the textiles.\n* Choice C: the text is about viewers' visual literacy, not weaving skill.\n* Choice D: hostility wouldn't make pagan motifs an effective scaffolding for Christian imagery."
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Information and Ideas",
  skill: "inferences",
  passage: "Linguist Aila Hämäläinen argues that the apparent grammatical \"simplicity\" of pidgin languages is a misreading. Speakers of stable, long-established pidgins, she notes, develop subtle conventions for marking time, evidentiality, and politeness — conventions that lie outside the categories outsiders typically check for. Her conclusion implies that earlier descriptions of pidgins as grammatically impoverished said less about the languages themselves than about the _______",
  question: "Which choice most logically completes the text?",
  choices: [
    { id: "A", text: "geographic regions in which the languages were spoken." },
    { id: "B", text: "narrow grammatical categories the original observers were trained to look for." },
    { id: "C", text: "willingness of pidgin speakers to be observed at all." },
    { id: "D", text: "size of the speaker communities involved." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Inferences (Logical Completion)**\n\n**Choice B is correct.**\n\nHämäläinen's point is that subtle pidgin conventions lie *outside* what outsiders check for. So the older \"impoverished\" verdict reveals more about the *categories observers were trained to look for* than about the languages.\n\n**Why the wrong answers are tempting:**\n* Choice A: the passage doesn't focus on geography.\n* Choice C: it's about observation methods, not speaker willingness.\n* Choice D: speaker community size is never raised."
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  domain: "Information and Ideas",
  skill: "command-of-evidence-quantitative",
  passage: "A team of urban ecologists tracked four mid-sized European cities that introduced rooftop beekeeping incentive programs in 2018. After five years, the team measured average annual honey yield (kg per hive) and the share of urban green-roof area planted with bee-friendly flowering species.",
  questionTable: {
    type: "table",
    caption: "Five-year outcomes of rooftop beekeeping programs (2018–2023)",
    headers: ["City", "Avg. honey yield (kg/hive)", "Bee-friendly green-roof area (%)"],
    rows: [
      ["Antwerp", "21", "44"],
      ["Lyon", "18", "39"],
      ["Porto", "12", "21"],
      ["Tallinn", "9", "17"]
    ]
  },
  question: "The team hypothesized that cities with a higher share of bee-friendly green-roof area would also show higher average honey yields per hive. Which choice best uses the data in the table to support this hypothesis?",
  choices: [
    { id: "A", text: "Antwerp had a higher honey yield per hive than Tallinn and a higher share of bee-friendly green-roof area." },
    { id: "B", text: "Porto had a higher honey yield per hive than Lyon despite a smaller share of bee-friendly green-roof area." },
    { id: "C", text: "All four cities had honey yields above 15 kg per hive." },
    { id: "D", text: "Antwerp and Tallinn had the same share of bee-friendly green-roof area." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Command of Evidence — Quantitative**\n\n**Choice A is correct.**\n\nThe hypothesis predicts that *higher* bee-friendly area aligns with *higher* yield. Antwerp (44%, 21 kg) vs. Tallinn (17%, 9 kg) shows exactly that — both higher on bee-friendly area and higher on yield. That supports the hypothesis.\n\n**Why the wrong answers are tempting:**\n* Choice B: misreads the table — Porto's yield (12) is *lower* than Lyon's (18), not higher.\n* Choice C: factually wrong (Porto and Tallinn are below 15) and doesn't speak to the relationship.\n* Choice D: factually wrong — the cities have different shares (44% vs. 17%)."
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Information and Ideas",
  skill: "command-of-evidence-textual",
  passage: "In *On the Education of an Architect* (1881), the architect Henrietta Voss argued that a young designer should not begin by sketching grand façades but by drawing, repeatedly, the simplest brick wall in their own neighborhood. \"The eye that has not learned to see the ordinary,\" she wrote, \"will reach for the spectacular long before it has earned the right to.\"",
  question: "Which quotation from Voss's text most directly supports the claim that a designer's training should begin with humble, familiar subjects?",
  choices: [
    { id: "A", text: "\"The young architect must one day master grand façades and public squares alike.\"" },
    { id: "B", text: "\"Begin not with what is striking but with the brick wall on your own street, drawn until you no longer need to look up.\"" },
    { id: "C", text: "\"The drawing board is the only true classroom of our profession.\"" },
    { id: "D", text: "\"There is no shame in admitting that genius alone cannot be taught.\"" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Command of Evidence — Textual**\n\n**Choice B is correct.**\n\nThe claim is that training should begin with *humble, familiar* subjects. Choice B literally says \"begin... with the brick wall on your own street\" — humble and familiar — and emphasizes prolonged, repeated drawing. Direct support.\n\n**Why the wrong answers are tempting:**\n* Choice A: talks about *eventually* mastering grand façades — not where to *begin*.\n* Choice C: says drawing matters but doesn't address humble vs. spectacular subjects.\n* Choice D: a remark about genius — unrelated to the order of training."
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Information and Ideas",
  skill: "command-of-evidence-quantitative",
  passage: "Public-health researchers tracked four pilot programs that delivered free, lockable bicycle parking at suburban transit stations. After two years, they recorded the change in average weekday transit ridership (riders per day) and the change in reported bicycle theft (incidents per month).",
  questionTable: {
    type: "table",
    caption: "Two-year outcomes of secure bike-parking pilots",
    headers: ["Station", "Change in ridership (riders/day)", "Change in theft (incidents/month)"],
    rows: [
      ["Edgewood", "+260", "-9"],
      ["Marlboro", "+220", "-6"],
      ["Crescent", "+90", "-2"],
      ["Pinegate", "+30", "-1"]
    ]
  },
  question: "A researcher claims that, across the four pilots, larger gains in ridership were accompanied by larger reductions in bicycle theft. Which choice best uses the data in the table to support this claim?",
  choices: [
    { id: "A", text: "Edgewood, the station with the largest ridership gain, also had the largest reduction in theft, while Pinegate, with the smallest ridership gain, had the smallest reduction in theft." },
    { id: "B", text: "Marlboro had a larger ridership gain than Crescent and Pinegate combined." },
    { id: "C", text: "Theft decreased at every station in the table, but ridership only rose at three of them." },
    { id: "D", text: "Pinegate had a larger ridership gain than Crescent." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Command of Evidence — Quantitative**\n\n**Choice A is correct.**\n\nThe claim links *larger ridership gain* with *larger theft reduction*. Choice A pairs the extremes: Edgewood (largest ridership gain, +260; largest theft drop, -9) and Pinegate (smallest gain, +30; smallest drop, -1). That ranking matches the claim across the spectrum, which is the strongest single piece of support.\n\n**Why the wrong answers are tempting:**\n* Choice B: only compares ridership numbers; ignores theft.\n* Choice C: factually wrong — ridership rose at *all four* stations.\n* Choice D: factually wrong — Pinegate's gain (+30) is smaller than Crescent's (+90)."
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Information and Ideas",
  skill: "command-of-evidence-textual",
  passage: "Yoik is the traditional vocal art of the Saami people of northern Scandinavia. Ethnomusicologist Berit Eira has argued that yoik should not be described as a song *about* its subject — a person, a place, an animal — but as a song that *is* its subject, an attempt to evoke the thing itself rather than to comment on it.",
  question: "Which quotation from Eira's writing would, if authentic, most directly support her claim about yoik?",
  choices: [
    { id: "A", text: "\"A yoik names what it summons; the form does not stand outside its subject but rises into it.\"" },
    { id: "B", text: "\"Yoik has been recorded by ethnographers since the early twentieth century.\"" },
    { id: "C", text: "\"Many yoik traditions have been disrupted by language-policy decisions made in the nineteenth century.\"" },
    { id: "D", text: "\"Saami singers often perform yoik unaccompanied or with the simplest of drums.\"" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Command of Evidence — Textual**\n\n**Choice A is correct.**\n\nThe claim is that yoik *is* its subject rather than commenting on it. Choice A captures exactly that: the form \"does not stand outside its subject but rises into it.\" Direct support.\n\n**Why the wrong answers are tempting:**\n* Choice B: about recording history — irrelevant to the philosophical claim.\n* Choice C: about disruption of the tradition — also irrelevant.\n* Choice D: about performance practice — doesn't speak to the subject-vs-comment claim."
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  domain: "Standard English Conventions",
  skill: "boundaries",
  passage: "Etruscan inscriptions, scratched into bronze mirrors and tomb walls between the seventh and first centuries BCE, ________ a writing system that scholars can read phonetically but only partly translate.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "represents" },
    { id: "B", text: "represent" },
    { id: "C", text: "is representing" },
    { id: "D", text: "represented;" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Boundaries (Subject-Verb Agreement)**\n\n**Choice B is correct.**\n\nThe subject is the plural noun \"inscriptions,\" so the verb must be plural: \"represent.\"\n\n**Why the wrong answers are tempting:**\n* Choice A: \"represents\" is singular; mismatches the plural subject.\n* Choice C: \"is representing\" is also singular and awkward.\n* Choice D: a stray semicolon mid-sentence is ungrammatical here."
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  domain: "Standard English Conventions",
  skill: "form-structure-and-sense",
  passage: "By the time the museum's textile lab finished cataloging the donated Coptic fragments, conservator Mira ________ each piece three separate times under raking light.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "examines" },
    { id: "B", text: "is examining" },
    { id: "C", text: "had examined" },
    { id: "D", text: "examine" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Form, Structure, and Sense (Verb Tense)**\n\n**Choice C is correct.**\n\nThe sentence opens with \"By the time the museum's textile lab finished\" — describing an event already complete in the past. The action of examining must have been completed *before* the cataloging finished, so the past perfect (\"had examined\") is correct.\n\n**Why the wrong answers are tempting:**\n* Choice A: present tense doesn't fit a past frame.\n* Choice B: present progressive doesn't fit a past frame.\n* Choice D: present plural is ungrammatical with the singular subject \"Mira\" anyway."
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  domain: "Standard English Conventions",
  skill: "boundaries",
  passage: "The Tuareg blacksmith — known in many communities as an *enad* — works at the intersection of practical and symbolic ________ he forges saddle fittings and amulets, and he is also entrusted with mediating disputes between families.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "labor," },
    { id: "B", text: "labor:" },
    { id: "C", text: "labor and" },
    { id: "D", text: "labor" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Boundaries (Colon Use)**\n\n**Choice B is correct.**\n\nWhat follows the blank is an *explanation* of \"practical and symbolic labor\" — the elaboration uses two coordinated independent clauses. A colon correctly introduces an explanation that follows an independent clause.\n\n**Why the wrong answers are tempting:**\n* Choice A: a comma alone before two independent clauses joined by \"and... and...\" creates a comma splice / run-on.\n* Choice C: \"labor and he forges...\" makes a long, ungrammatical chain.\n* Choice D: with no punctuation, the result is a run-on."
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  domain: "Standard English Conventions",
  skill: "form-structure-and-sense",
  passage: "Among the most distinctive features of Ainu woodworking ________ the inclusion of carved spirit guards, called *inau*, on otherwise utilitarian household objects.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "are" },
    { id: "B", text: "is" },
    { id: "C", text: "be" },
    { id: "D", text: "being" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Form, Structure, and Sense (Subject-Verb Agreement, Inversion)**\n\n**Choice B is correct.**\n\nThe sentence is inverted: the subject is \"the inclusion\" (singular), not \"features\" or \"woodworking.\" A singular subject takes the singular verb \"is.\"\n\n**Why the wrong answers are tempting:**\n* Choice A: \"are\" matches the plural \"features\" only if you misread the subject.\n* Choice C: bare \"be\" is ungrammatical as a main verb here.\n* Choice D: \"being\" is a participle, not a main verb."
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Standard English Conventions",
  skill: "boundaries",
  passage: "Samoan tatau — full-body tattoo work performed with hand-tapped tools rather than electric needles ________ undergone a notable revival among diaspora communities since the late 1990s.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: ", has" },
    { id: "B", text: "has" },
    { id: "C", text: "—has" },
    { id: "D", text: "; has" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Boundaries (Paired Dashes)**\n\n**Choice C is correct.**\n\nThe phrase \"full-body tattoo work performed with hand-tapped tools rather than electric needles\" is a parenthetical insertion. It must be set off by a *matching pair* of punctuation marks. The sentence already opens the parenthesis with an em dash after \"tatau,\" so it must close with another em dash. \"—has\" provides that closing dash.\n\n**Why the wrong answers are tempting:**\n* Choice A: a comma can't close a dashed insertion.\n* Choice B: no closing punctuation leaves the parenthesis open.\n* Choice D: a semicolon can't close a dashed insertion either."
},
{
  id: 23,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Standard English Conventions",
  skill: "form-structure-and-sense",
  passage: "Each of the three apprentices in the master smith's forge ________ expected to complete a small functional object — a hook, a fire striker, a knife — before being assigned a single decorative piece.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "are" },
    { id: "B", text: "were" },
    { id: "C", text: "is" },
    { id: "D", text: "have been" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Form, Structure, and Sense (Subject-Verb Agreement)**\n\n**Choice C is correct.**\n\nThe subject is \"Each\" — always singular — not \"apprentices.\" \"Each... is expected\" is correct.\n\n**Why the wrong answers are tempting:**\n* Choice A: plural \"are\" mismatches the singular \"Each.\"\n* Choice B: plural past \"were\" same problem and shifts tense.\n* Choice D: plural perfect mismatches \"Each.\""
},
{
  id: 24,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Expression of Ideas",
  skill: "transitions",
  passage: "Saharan dust plumes can carry phosphorus across thousands of kilometers, fertilizing the Amazon basin during the boreal winter. ________ the same plumes can also depress rainfall in the Caribbean during their passage, exposing local communities to drought even as nutrients flow inland.",
  question: "Which choice completes the text with the most logical transition?",
  choices: [
    { id: "A", text: "For example," },
    { id: "B", text: "However," },
    { id: "C", text: "Similarly," },
    { id: "D", text: "In conclusion," }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Transitions (Contrast)**\n\n**Choice B is correct.**\n\nThe first sentence is positive (fertilization of the Amazon). The second is negative (drought, exposure). That's a contrast — \"However\" fits.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"For example\" would signal an instance of the same idea.\n* Choice C: \"Similarly\" would say the second sentence is *like* the first; here it's the opposite.\n* Choice D: \"In conclusion\" signals a summary, not a contrast."
},
{
  id: 25,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Expression of Ideas",
  skill: "transitions",
  passage: "Critics of the early black-footed ferret recovery program argued that captive breeding would inevitably narrow the species' genetic base. ________ subsequent monitoring of reintroduced populations has shown exactly that pattern: heterozygosity at neutral loci has fallen with each generation, even as census numbers have grown.",
  question: "Which choice completes the text with the most logical transition?",
  choices: [
    { id: "A", text: "Nevertheless," },
    { id: "B", text: "Indeed," },
    { id: "C", text: "By contrast," },
    { id: "D", text: "On the other hand," }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Transitions (Confirmation/Reinforcement)**\n\n**Choice B is correct.**\n\nThe second sentence *confirms* the critics' prediction (\"shown exactly that pattern\"). \"Indeed\" signals confirmation or emphatic agreement.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"Nevertheless\" introduces a contrast; here, the data agree.\n* Choice C: \"By contrast\" also signals opposition.\n* Choice D: \"On the other hand\" likewise signals contrast."
},
{
  id: 26,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Expression of Ideas",
  skill: "rhetorical-synthesis",
  studentNotes: {
    intro: "While researching a topic, a student has taken the following notes:",
    bullets: [
      "Yoik is a traditional vocal genre of the Saami people of northern Scandinavia.",
      "Ethnomusicologist Berit Eira describes yoik as a song that *is* its subject rather than about it.",
      "Many yoik traditions were disrupted by 19th-century language-policy decisions in Norway, Sweden, and Finland.",
      "Since the 1970s, Saami cultural movements have led a sustained revival of yoik.",
      "Younger Saami singers now combine traditional yoik with contemporary genres such as electronic and jazz."
    ],
    goal: "The student wants to emphasize the contemporary revival of yoik."
  },
  question: "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  choices: [
    { id: "A", text: "Yoik, the traditional vocal genre of the Saami people, was once disrupted by 19th-century language policies in Scandinavia." },
    { id: "B", text: "Ethnomusicologist Berit Eira describes yoik as a song that is, rather than is about, its subject." },
    { id: "C", text: "Disrupted by 19th-century language policies, yoik has, since the 1970s, undergone a sustained revival in which younger Saami singers blend traditional forms with electronic and jazz idioms." },
    { id: "D", text: "Yoik is performed by Saami singers across Norway, Sweden, and Finland." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Rhetorical Synthesis**\n\n**Choice C is correct.**\n\nThe student's goal is to *emphasize the contemporary revival*. Choice C does that explicitly: \"since the 1970s, undergone a sustained revival\" plus the contemporary blending detail. It also frames the historical disruption only as background.\n\n**Why the wrong answers are tempting:**\n* Choice A: emphasizes the disruption, not the revival.\n* Choice B: emphasizes Eira's philosophical claim, not the revival.\n* Choice D: a neutral geographic fact — doesn't emphasize revival."
},
{
  id: 27,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Expression of Ideas",
  skill: "rhetorical-synthesis",
  studentNotes: {
    intro: "While researching a topic, a student has taken the following notes:",
    bullets: [
      "Mantis shrimp eyes contain up to sixteen photoreceptor types, far more than the three of typical primates.",
      "Earlier biologists assumed this implied extraordinarily fine color discrimination.",
      "A 2014 study by Hanne Thoen tested mantis shrimp on paired wavelengths and found surprisingly poor fine-color discrimination.",
      "Thoen suggests the many channels may serve fast, low-resolution recognition rather than fine discrimination.",
      "The result has been used to caution against assuming neural complexity always implies higher perceptual resolution."
    ],
    goal: "The student wants to introduce Thoen's 2014 study to a reader unfamiliar with mantis shrimp vision and explain its main finding."
  },
  question: "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  choices: [
    { id: "A", text: "Mantis shrimp have many photoreceptor types." },
    { id: "B", text: "A 2014 study by Hanne Thoen tested mantis shrimp — whose eyes contain up to sixteen photoreceptor types — on paired wavelengths and found that, contrary to earlier assumptions, the animals discriminated colors only coarsely." },
    { id: "C", text: "Thoen's findings have been used to caution against assumptions about neural complexity." },
    { id: "D", text: "Earlier biologists assumed mantis shrimp had unusually fine color vision." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Rhetorical Synthesis**\n\n**Choice B is correct.**\n\nThe goal asks for two things: (1) *introduce the study* to an unfamiliar reader, and (2) *explain its main finding*. Choice B names Thoen and the year, gives the necessary background (sixteen photoreceptor types), and states the main finding (\"discriminated colors only coarsely\") relative to earlier assumptions. That hits both targets.\n\n**Why the wrong answers are tempting:**\n* Choice A: gives only background, no study or finding.\n* Choice C: jumps to downstream uses of the finding, not the finding itself.\n* Choice D: only the earlier assumption, not the new finding."
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
  passage: "The historian Oluwasegun Adebayo argued that the standard chronology of Yoruba bronze casting was ________ by an over-reliance on stylistic dating; only with new thermoluminescence results, he wrote, could the assumed sequence of workshops be honestly reassessed.",
  question: "Which choice completes the text with the most logical and precise word or phrase?",
  choices: [
    { id: "A", text: "ratified" },
    { id: "B", text: "distorted" },
    { id: "C", text: "celebrated" },
    { id: "D", text: "preserved" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Words in Context (Fill-in)**\n\n**Choice B is correct.**\n\nAdebayo says the chronology rested on a flawed method (\"over-reliance on stylistic dating\") and that new evidence forces reassessment. \"Distorted\" — bent away from the truth — fits.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"ratified\" means confirmed; the opposite of needing reassessment.\n* Choice C: \"celebrated\" doesn't match the critical tone.\n* Choice D: \"preserved\" suggests intact, not biased."
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Craft and Structure",
  skill: "words-in-context",
  passage: "Despite the prevailing belief that mid-century Soviet documentary photographers were uniformly constrained by official directives, the surviving contact sheets of Lev Akinshin reveal a far more ________ practice: dozens of unpublished frames experiment with composition, exposure, and subject in ways the published images carefully suppress.",
  question: "Which choice completes the text with the most logical and precise word or phrase?",
  choices: [
    { id: "A", text: "uniform" },
    { id: "B", text: "exploratory" },
    { id: "C", text: "transparent" },
    { id: "D", text: "predictable" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Words in Context (Fill-in)**\n\n**Choice B is correct.**\n\nThe colon explains the missing word: \"experiment with composition, exposure, and subject.\" Experimentation is *exploratory*.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"uniform\" matches the prevailing belief the passage corrects.\n* Choice C: \"transparent\" doesn't fit experimentation.\n* Choice D: \"predictable\" is the opposite of experimental."
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Craft and Structure",
  skill: "words-in-context",
  passage: "The architect Ngozi Mwangi insists that the surface ornament of the Great Mosque of Djenné is not an afterthought but ________ to its structural logic: the projecting palm-wood beams, often read as decorative, are also the scaffolding by which the mud-brick walls are seasonally re-rendered.",
  question: "Which choice completes the text with the most logical and precise word or phrase?",
  choices: [
    { id: "A", text: "subordinate" },
    { id: "B", text: "external" },
    { id: "C", text: "integral" },
    { id: "D", text: "indifferent" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Words in Context (Fill-in)**\n\n**Choice C is correct.**\n\nMwangi argues that the ornament is *not* secondary — it is *also* the scaffolding for re-rendering, i.e., part of the building's working logic. \"Integral\" means essential and inseparable, which captures the claim.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"subordinate\" is the opposite of what Mwangi argues.\n* Choice B: \"external\" suggests outside the structural logic — also opposite.\n* Choice D: \"indifferent\" suggests no relationship at all."
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Craft and Structure",
  skill: "text-structure-and-purpose",
  passage: "In a 2020 review of regional climate models, atmospheric scientist Yusuf Onaolapo identified a recurring failure: the models systematically underestimate dust deposition over the eastern Atlantic during boreal summer. __Onaolapo argues that the failure stems not from inadequate satellite inputs but from the way the models parameterize sub-grid-scale convection, which suppresses the very updrafts that loft Saharan dust to altitudes from which it can be transported across the basin.__",
  question: "Which choice best describes the function of the underlined sentence in the text as a whole?",
  choices: [
    { id: "A", text: "It introduces a counterexample that complicates the failure described earlier." },
    { id: "B", text: "It explains the mechanism Onaolapo uses to account for the failure introduced earlier." },
    { id: "C", text: "It contrasts two competing models without endorsing either one." },
    { id: "D", text: "It questions whether the failure described earlier is real." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Text Structure and Purpose**\n\n**Choice B is correct.**\n\nThe first sentence *names* the failure (under-prediction of dust). The underlined sentence *explains why* — the convection parameterization suppresses the updrafts that loft dust. That is the mechanism.\n\n**Why the wrong answers are tempting:**\n* Choice A: there's no counterexample.\n* Choice C: only Onaolapo's view is presented.\n* Choice D: he accepts the failure; he doesn't doubt it."
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Craft and Structure",
  skill: "text-structure-and-purpose",
  passage: "The following text is adapted from Anders Holst's 2022 short story \"The Boatyard.\" Birgit, a third-generation boatbuilder, is sweeping the workshop after the last apprentice has left for the day.\n\nBirgit pushed the broom along the long line of plank shavings that ran from the bench to the door, the way she had every Friday for twenty-two years. The shop was empty — the apprentices had gone, the kettle had cooled — and the only sound was the broom against the wide pine boards. __She paused at the threshold, looked back into the shop, and saw it for a moment as her grandfather must have seen it at the same hour in 1958.__ The thought did not slow her. It made her finish the sweep with care.",
  question: "Which choice best describes the function of the underlined sentence in the text?",
  choices: [
    { id: "A", text: "It marks a shift from physical action to interior memory and reflection." },
    { id: "B", text: "It establishes a contrast between Birgit's shop and her grandfather's." },
    { id: "C", text: "It contradicts the calm tone established earlier." },
    { id: "D", text: "It signals that Birgit is about to retire." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Text Structure and Purpose (Literary)**\n\n**Choice A is correct.**\n\nThe earlier sentences describe Birgit's *actions*. The underlined sentence shifts to her pausing, looking back, and *imagining* the same shop in 1958 — interior memory. The next sentence reports the *effect* of that memory.\n\n**Why the wrong answers are tempting:**\n* Choice B: only one shop, no contrast.\n* Choice C: the tone stays steady.\n* Choice D: nothing in the text signals retirement."
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
      text: "Recent enthusiasm for hydrogen-fueled regional rail networks has been propelled by transportation engineers who emphasize the lower greenhouse-gas footprint, modular fueling infrastructure, and operational flexibility of hydrogen trains relative to diesel. The model promises cleaner air along rail corridors, simpler conversion of existing tracks, and an easier transition than full electrification."
    },
    {
      label: "Text 2",
      text: "Energy economist Daniela Kowalski is sympathetic to the goals of hydrogen rail but cautions that \"low operational emissions\" alone are not the same as a low-carbon system. Her studies of European pilot lines show that, when hydrogen is sourced from natural-gas reforming rather than from renewables, the lifecycle emissions of a hydrogen train can exceed those of the diesel locomotive it replaces. Without such guardrails on hydrogen sourcing, she argues, the model risks recreating the carbon footprint it was meant to dissolve."
    }
  ],
  question: "Based on the texts, how would Kowalski (Text 2) most likely respond to the claim made by the engineers in Text 1?",
  choices: [
    { id: "A", text: "By rejecting the operational and infrastructure benefits as overstated." },
    { id: "B", text: "By acknowledging the benefits but warning that achieving low lifecycle emissions depends on sourcing choices the engineers do not address." },
    { id: "C", text: "By arguing that hydrogen rail is technically impossible at regional scale." },
    { id: "D", text: "By insisting that hydrogen rail has already been disproven by the European pilots." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Cross-Text Connections**\n\n**Choice B is correct.**\n\nText 2 says Kowalski is \"sympathetic to the goals\" — agrees in spirit. But she adds a *condition*: low lifecycle emissions depend on hydrogen sourcing. That's exactly the acknowledge-but-condition pattern in choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A: she doesn't reject the operational benefits.\n* Choice C: no claim of technical impossibility.\n* Choice D: \"already been disproven\" is too strong."
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
      text: "The translator Hisako Inada, in a 1985 lecture on her practice, argued that the strongest translations are those that the reader of the new language does not perceive as translations at all — a small adjustment of word order, a chosen English idiom — so that the foreign feels native. The trick, she said, is to remove the seams of the original so quietly that the reader registers only the new voice, not the act of carrying across."
    },
    {
      label: "Text 2",
      text: "In a recent essay rereading Inada's English version of a Japanese novel of 1971, the critic Roshan Kapoor notes that several of Inada's contemporary reviewers complained that her translation \"read like an American novel.\" Kapoor argues that those complaints reveal a generational reading habit: critics in the 1980s expected translations to retain visible markers of foreignness, and Inada's invisible seams read to them as evidence of distortion rather than craft."
    }
  ],
  question: "Based on the texts, how would Kapoor (Text 2) most likely characterize the 1980s reviewers' complaints?",
  choices: [
    { id: "A", text: "a flaw in Inada's translation that the reviewers correctly diagnosed." },
    { id: "B", text: "a misunderstanding rooted in the reviewers' expectations about visible foreignness rather than in the translation itself." },
    { id: "C", text: "a deliberate provocation by Inada aimed at her contemporaries." },
    { id: "D", text: "a breakdown in communication between editors and translators of the period." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Cross-Text Connections (Inference)**\n\n**Choice B is correct.**\n\nKapoor argues the reviewers' complaints \"reveal a generational reading habit\" — they expected visible foreignness, so Inada's smoothness read as distortion. The flaw is in the reviewers' habits, not in the translation.\n\n**Why the wrong answers are tempting:**\n* Choice A: Kapoor is *defending* Inada.\n* Choice C: no claim of provocation.\n* Choice D: no editor/translator communication issue."
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Information and Ideas",
  skill: "central-ideas-and-details",
  passage: "Contrary to the long-standing view that the surface decoration of the Great Mosque of Djenné is purely ornamental, recent surveys by architectural historians have shown that the projecting bundles of palm wood, called *toron*, serve a working role: they form the permanent scaffolding from which the building's mud-brick walls are seasonally re-rendered. Without the *toron*, the annual community plastering ritual that has preserved the structure for generations would not be physically possible. The pattern that visitors see, in other words, is also the pattern that keeps the building standing.",
  question: "Which choice best states the main idea of the text?",
  choices: [
    { id: "A", text: "The Great Mosque of Djenné is decorated with palm-wood bundles called *toron*." },
    { id: "B", text: "The *toron* of the Great Mosque are not merely decorative but functional, serving as permanent scaffolding for seasonal re-rendering." },
    { id: "C", text: "The annual plastering of the mosque is performed by professional contractors." },
    { id: "D", text: "Architectural historians no longer view the Great Mosque of Djenné as historically significant." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Central Ideas and Details**\n\n**Choice B is correct.**\n\nThe passage corrects the old view (\"purely ornamental\") and argues the *toron* are functional, enabling the seasonal re-rendering. The closing line restates the point.\n\n**Why the wrong answers are tempting:**\n* Choice A: just identifies the *toron* without the central claim.\n* Choice C: misreads — the passage emphasizes \"community plastering ritual,\" not professionals.\n* Choice D: the passage doesn't dismiss historical significance; it adds to it."
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Information and Ideas",
  skill: "central-ideas-and-details",
  passage: "In a 1953 letter to a colleague, the linguist Cypriana Bayo described her decision to abandon her planned grammar of formal court Yoruba and write instead about the conversational speech she heard in the night markets of Ibadan. \"I had been recording the language people use to be heard,\" she wrote, \"and I begin to suspect that the only honest grammar left to write is of the language people use when no one is officially listening.\" The shift would, within five years, produce one of the foundational descriptions of conversational Yoruba syntax.",
  question: "Which choice best states the main idea of the text?",
  choices: [
    { id: "A", text: "Bayo gave up linguistic research in 1953 to manage a market stall." },
    { id: "B", text: "Bayo's turn from formal court Yoruba to conversational market speech was driven by a search for honesty in her subject matter." },
    { id: "C", text: "Bayo's letter was the most influential publication of her career." },
    { id: "D", text: "Conversational Yoruba is grammatically simpler than formal court Yoruba." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Central Ideas and Details**\n\n**Choice B is correct.**\n\nThe passage explains *why* Bayo shifted — she felt formal court speech wasn't \"honest\" anymore — and that the shift produced foundational work on conversational Yoruba.\n\n**Why the wrong answers are tempting:**\n* Choice A: she didn't abandon linguistics.\n* Choice C: the passage doesn't claim the letter was her most influential.\n* Choice D: the passage doesn't compare grammatical complexity."
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Information and Ideas",
  skill: "central-ideas-and-details",
  passage: "The Iberian lynx (*Lynx pardinus*) was once widespread in the cork-oak woodlands of southern Spain and Portugal, where it preyed almost exclusively on European rabbits. By the early 2000s, viral epidemics in rabbit populations and the conversion of woodland to pine plantation had reduced the species to two relict pockets in Andalusia. Conservation biologists initially focused on captive breeding and reintroduction within those two pockets, on the assumption that maintaining the original ranges would be the most efficient route to recovery. More recent disease-modeling work has complicated that hope: the same rabbit-virus exposure that triggered the original collapse remains endemic in those landscapes, and concentrating reintroduced lynx within them may leave the recovered population unusually vulnerable to recurring viral waves.",
  question: "Which choice best states the main idea of the text?",
  choices: [
    { id: "A", text: "The Iberian lynx has been reduced from a widespread species to two relict pockets in Andalusia." },
    { id: "B", text: "Conservation strategies that worked for other endangered species cannot be applied to the Iberian lynx." },
    { id: "C", text: "The early conservation strategy of concentrating reintroduction within the original Andalusian pockets is in tension with new disease-modeling findings." },
    { id: "D", text: "Disease modeling has shown that the Iberian lynx is in fact several different species." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Central Ideas and Details**\n\n**Choice C is correct.**\n\nThe passage sets up the early plan (concentrate reintroduction in the two pockets) and then says new disease-modeling \"complicated that hope\" — endemic virus may leave the population vulnerable. That tension is the main idea.\n\n**Why the wrong answers are tempting:**\n* Choice A: a fact in the setup, not the main argument.\n* Choice B: the passage doesn't generalize about other species.\n* Choice D: vulnerability isn't speciation."
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Information and Ideas",
  skill: "inferences",
  passage: "Although the European bison was reintroduced to the Białowieża Forest in the mid-twentieth century with the explicit goal of preventing the species' extinction, ecologists now credit the bison with a far broader role. Their year-round movements through wooded glades have been linked to changes in plant diversity, the redistribution of dung-beetle populations, and the maintenance of open habitats used by ground-nesting birds. The relationship is now used as a textbook example of a _______",
  question: "Which choice most logically completes the text?",
  choices: [
    { id: "A", text: "single-species recovery program." },
    { id: "B", text: "trophic cascade." },
    { id: "C", text: "failure of reintroduction, since the bison did not achieve their stated goal." },
    { id: "D", text: "competitive exclusion between large herbivores." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Inferences (Logical Completion)**\n\n**Choice B is correct.**\n\nThe passage describes one species (bison) producing effects on plants, then dung beetles, then ground-nesting birds — that is, *cascading* through the ecosystem. \"Trophic cascade\" is the standard term.\n\n**Why the wrong answers are tempting:**\n* Choice A: misses the wider effects.\n* Choice C: framed as a success, not a failure.\n* Choice D: no second herbivore competing."
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Information and Ideas",
  skill: "inferences",
  passage: "Faroese poet Sigrún Magnúsdóttir often wrote alongside the singers who performed her work in informal evening gatherings. Critic Daníel Højgaard argues that this proximity was not incidental: many of her line breaks make sense only when read aloud at performance tempo, and several of her shorter poems lose their rhythmic tension when typeset on the page in standard prose layout. His conclusion implies that readers who encounter her poems only in printed anthologies may be missing _______",
  question: "Which choice most logically completes the text?",
  choices: [
    { id: "A", text: "the poems' translations into other Scandinavian languages." },
    { id: "B", text: "the rhythmic and performance-oriented design that informs her line breaks." },
    { id: "C", text: "the biographical context of the singers she worked with." },
    { id: "D", text: "the political pressures Faroese writers faced in the late twentieth century." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Inferences (Logical Completion)**\n\n**Choice B is correct.**\n\nHøjgaard's claim is specifically about *performance tempo* and *rhythmic tension* shaping the line breaks. Readers limited to print miss exactly that performance-oriented design.\n\n**Why the wrong answers are tempting:**\n* Choice A: translations aren't mentioned.\n* Choice C: biographical detail isn't the inference Højgaard sets up.\n* Choice D: political pressure isn't discussed."
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  domain: "Information and Ideas",
  skill: "inferences",
  passage: "Archaeologist Kelechi Ofor argues that the apparent uniformity of Etruscan funerary inscriptions is partly an artifact of selective preservation: bronze and stone survive, but the wax tablets and wooden plaques that may have carried more idiosyncratic family records did not. His conclusion implies that earlier scholars who described Etruscan epitaph practice as \"strikingly formulaic\" were saying less about Etruscan literacy than about the _______",
  question: "Which choice most logically completes the text?",
  choices: [
    { id: "A", text: "geographical reach of Etruscan trade networks." },
    { id: "B", text: "narrow range of materials that happened to survive into the modern era." },
    { id: "C", text: "willingness of Etruscan families to commission inscriptions at all." },
    { id: "D", text: "size of the literate population in Etruscan cities." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Inferences (Logical Completion)**\n\n**Choice B is correct.**\n\nOfor's claim is about *selective preservation*: durable materials survived, perishable ones did not. The \"formulaic\" verdict therefore reflects what *survived*, not what was actually written. That maps to the narrow range of surviving materials.\n\n**Why the wrong answers are tempting:**\n* Choice A: trade networks aren't the focus.\n* Choice C: commissioning rates aren't raised.\n* Choice D: literate population size isn't the inference."
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Information and Ideas",
  skill: "command-of-evidence-quantitative",
  passage: "A team of conservation biologists tracked four reintroduction sites for the black-footed ferret over a decade. After ten years, the team measured the number of established breeding burrows and the share of pre-release prairie-dog habitat that remained intact at each site.",
  questionTable: {
    type: "table",
    caption: "Ten-year outcomes of black-footed ferret reintroductions",
    headers: ["Site", "Established breeding burrows", "Intact prairie-dog habitat (%)"],
    rows: [
      ["Conata Basin", "62", "78"],
      ["Aubrey Valley", "48", "61"],
      ["Espee Ranch", "21", "33"],
      ["Walker Basin", "9", "19"]
    ]
  },
  question: "The team hypothesized that sites with a higher share of intact prairie-dog habitat would also support more established breeding burrows. Which choice best uses the data in the table to support this hypothesis?",
  choices: [
    { id: "A", text: "Conata Basin had more established breeding burrows than Walker Basin and a higher share of intact prairie-dog habitat." },
    { id: "B", text: "Espee Ranch had more established breeding burrows than Aubrey Valley despite a smaller habitat share." },
    { id: "C", text: "All four sites had at least 50 established breeding burrows." },
    { id: "D", text: "Conata Basin and Walker Basin had the same share of intact prairie-dog habitat." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Command of Evidence — Quantitative**\n\n**Choice A is correct.**\n\nThe hypothesis links *higher* habitat share with *more* burrows. Conata (78%, 62 burrows) vs. Walker Basin (19%, 9 burrows) shows exactly that — both higher on habitat and higher on burrows.\n\n**Why the wrong answers are tempting:**\n* Choice B: factually wrong — Espee (21) has fewer burrows than Aubrey (48).\n* Choice C: factually wrong — Espee and Walker are below 50, and the claim ignores the relationship anyway.\n* Choice D: factually wrong — 78% vs. 19%."
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Information and Ideas",
  skill: "command-of-evidence-textual",
  passage: "In *On the Apprenticeship of a Smith* (1894), the metalworker Jirair Hovsepian argued that a young smith should not begin by attempting to forge ornamental work but by hammering, repeatedly, the simplest unornamented hook that the household could use. \"The hand that has not learned to make the useful,\" he wrote, \"will reach for the beautiful long before it has earned the right to.\"",
  question: "Which quotation from Hovsepian's text most directly supports the claim that a smith's training should begin with humble, useful objects?",
  choices: [
    { id: "A", text: "\"The young smith must one day master ornamental work and presentation pieces alike.\"" },
    { id: "B", text: "\"Begin not with what is admired but with the plain hook for the household, hammered until you no longer need to glance at the form.\"" },
    { id: "C", text: "\"The anvil is the only true classroom of our trade.\"" },
    { id: "D", text: "\"There is no shame in admitting that talent alone cannot be taught.\"" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Command of Evidence — Textual**\n\n**Choice B is correct.**\n\nThe claim is that training should begin with *humble, useful* objects. Choice B literally says \"begin... with the plain hook for the household\" — humble and useful — and emphasizes prolonged practice.\n\n**Why the wrong answers are tempting:**\n* Choice A: speaks to *eventual* mastery, not the start.\n* Choice C: praises the anvil but doesn't address subject matter.\n* Choice D: about talent — unrelated to the order of training."
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Information and Ideas",
  skill: "command-of-evidence-quantitative",
  passage: "Public-health researchers tracked four mid-sized cities that introduced subsidized produce vouchers at neighborhood corner stores. After eighteen months, the team measured the change in average daily fruit-and-vegetable purchases (servings per household) and the change in reported corner-store revenue (% change vs. baseline).",
  questionTable: {
    type: "table",
    caption: "Eighteen-month outcomes of corner-store voucher pilots",
    headers: ["City", "Change in F&V purchases (servings/household/day)", "Change in store revenue (%)"],
    rows: [
      ["Northbrook", "+1.8", "+12"],
      ["Cedarwood", "+1.4", "+9"],
      ["Riverton", "+0.5", "+3"],
      ["Glenport", "+0.2", "+1"]
    ]
  },
  question: "A researcher claims that, across the four pilots, larger gains in fruit-and-vegetable purchases were accompanied by larger gains in corner-store revenue. Which choice best uses the data in the table to support this claim?",
  choices: [
    { id: "A", text: "Northbrook, the city with the largest gain in F&V purchases, also had the largest revenue gain, while Glenport, with the smallest gain in F&V purchases, had the smallest revenue gain." },
    { id: "B", text: "Cedarwood had a larger gain in F&V purchases than Riverton and Glenport combined." },
    { id: "C", text: "Revenue rose at every store in the table, but F&V purchases only rose in three cities." },
    { id: "D", text: "Glenport had a larger gain in F&V purchases than Riverton." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Command of Evidence — Quantitative**\n\n**Choice A is correct.**\n\nThe claim links *larger F&V gain* with *larger revenue gain*. Choice A pairs the extremes: Northbrook (largest, +1.8 / +12%) and Glenport (smallest, +0.2 / +1%). That ranking of extremes supports the claim across the spectrum.\n\n**Why the wrong answers are tempting:**\n* Choice B: only compares F&V numbers; ignores revenue.\n* Choice C: factually wrong — F&V purchases rose in *all four*.\n* Choice D: factually wrong — Glenport's gain (+0.2) is smaller than Riverton's (+0.5)."
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "medium",
  band: 6,
  domain: "Information and Ideas",
  skill: "command-of-evidence-textual",
  passage: "Tatau is the traditional tattoo art of Samoa, performed with hand-tapped tools rather than electric needles. Cultural anthropologist Faleolo Asoau has argued that tatau should not be described as ornament that decorates the body but as practice that *binds* the bearer to a particular set of social obligations — the design and the obligations are inseparable.",
  question: "Which quotation from Asoau's writing would, if authentic, most directly support her claim about tatau?",
  choices: [
    { id: "A", text: "\"To carry the tatau is to carry, in the same skin, the duties owed to one's village; the mark is not separable from what it commits the wearer to.\"" },
    { id: "B", text: "\"Tatau has been documented by visiting ethnographers since the eighteenth century.\"" },
    { id: "C", text: "\"Many tatau practitioners have moved abroad as part of the wider Samoan diaspora.\"" },
    { id: "D", text: "\"The tools used in tatau are typically made from boar tusk and turtle shell.\"" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Command of Evidence — Textual**\n\n**Choice A is correct.**\n\nThe claim is that tatau *binds* the bearer to social obligations and that mark and obligation are inseparable. Choice A says exactly that: \"the mark is not separable from what it commits the wearer to.\" Direct support.\n\n**Why the wrong answers are tempting:**\n* Choice B: about documentation history — irrelevant.\n* Choice C: about diaspora — also irrelevant.\n* Choice D: about tools — doesn't support the social-binding claim."
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Standard English Conventions",
  skill: "boundaries",
  passage: "The Tuareg blacksmith's role in many communities ________ in some surprising ways: in addition to forging metalwork, the *enad* often serves as a mediator in disputes between families.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "expand" },
    { id: "B", text: "expands" },
    { id: "C", text: "expanding" },
    { id: "D", text: "expand;" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Boundaries / Subject-Verb Agreement**\n\n**Choice B is correct.**\n\nThe subject is the singular noun \"role\" (not \"communities\"), so the verb must be singular: \"expands.\"\n\n**Why the wrong answers are tempting:**\n* Choice A: \"expand\" is plural and mismatches \"role.\"\n* Choice C: \"expanding\" is a participle, not a main verb.\n* Choice D: a stray semicolon mid-sentence is ungrammatical."
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Standard English Conventions",
  skill: "form-structure-and-sense",
  passage: "By the time the conservation team finished tagging the released ferrets, biologist Halima ________ each animal twice for body condition and tooth wear.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "evaluates" },
    { id: "B", text: "is evaluating" },
    { id: "C", text: "had evaluated" },
    { id: "D", text: "evaluate" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Form, Structure, and Sense (Verb Tense)**\n\n**Choice C is correct.**\n\n\"By the time... finished\" sets a past frame; the evaluation must have completed *before* the tagging finished, so the past perfect (\"had evaluated\") is correct.\n\n**Why the wrong answers are tempting:**\n* Choice A: present tense doesn't fit a past frame.\n* Choice B: present progressive doesn't fit either.\n* Choice D: a bare plural verb mismatches the singular subject \"Halima.\""
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Standard English Conventions",
  skill: "boundaries",
  passage: "The Coptic textile fragments now in the museum's collection date to the fifth and sixth centuries CE ________ they include tunics, hoods, and decorative bands woven in linen and dyed wool.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "and they" },
    { id: "B", text: ", they" },
    { id: "C", text: "; they" },
    { id: "D", text: "they" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Boundaries (Joining Independent Clauses)**\n\n**Choice C is correct.**\n\nTwo independent clauses (\"date to the fifth and sixth centuries CE\" / \"they include tunics...\") must be joined by a semicolon, a period, or a comma + coordinating conjunction. \"; they\" correctly joins them with a semicolon.\n\n**Why the wrong answers are tempting:**\n* Choice A: a coordinating conjunction without a comma before it doesn't conventionally join two independent clauses.\n* Choice B: just a comma between two independent clauses creates a comma splice.\n* Choice D: no punctuation between independent clauses creates a run-on."
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Standard English Conventions",
  skill: "form-structure-and-sense",
  passage: "Among the most distinctive features of Saami yoik singing ________ the use of vocables — non-lexical syllables that allow the singer to evoke a person, animal, or landscape without explicit reference.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "are" },
    { id: "B", text: "is" },
    { id: "C", text: "be" },
    { id: "D", text: "being" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Form, Structure, and Sense (Subject-Verb Agreement, Inversion)**\n\n**Choice B is correct.**\n\nThe inverted sentence's subject is \"the use\" (singular), not \"features\" or \"singing.\" Singular subject takes singular verb \"is.\"\n\n**Why the wrong answers are tempting:**\n* Choice A: \"are\" matches \"features\" only if you misidentify the subject.\n* Choice C: bare \"be\" is ungrammatical as a main verb here.\n* Choice D: \"being\" is a participle, not a main verb."
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Standard English Conventions",
  skill: "boundaries",
  passage: "Faroese verse — written in a language with fewer than fifty thousand native speakers ________ enjoyed a remarkable run of international translation since the early 2000s.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: ", has" },
    { id: "B", text: "has" },
    { id: "C", text: "—has" },
    { id: "D", text: "; has" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Boundaries (Paired Dashes)**\n\n**Choice C is correct.**\n\nThe phrase \"written in a language with fewer than fifty thousand native speakers\" is a parenthetical insertion. The opening em dash after \"verse\" must be matched by a closing em dash before the verb. \"—has\" supplies that close.\n\n**Why the wrong answers are tempting:**\n* Choice A: a comma can't close a dashed insertion.\n* Choice B: leaves the parenthesis open.\n* Choice D: a semicolon can't close a dashed insertion."
},
{
  id: 23,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Standard English Conventions",
  skill: "form-structure-and-sense",
  passage: "Each of the four research teams that contributed to the Saharan dust survey ________ filed a separate report describing its instrument calibration and quality-control procedures.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "have" },
    { id: "B", text: "are" },
    { id: "C", text: "has" },
    { id: "D", text: "were" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Form, Structure, and Sense (Subject-Verb Agreement)**\n\n**Choice C is correct.**\n\n\"Each\" is always singular, regardless of the plural noun in the prepositional phrase that follows. \"Each... has filed\" is correct.\n\n**Why the wrong answers are tempting:**\n* Choice A: plural \"have\" mismatches \"Each.\"\n* Choice B: \"are\" plural and a wrong verb (\"are filed\" wouldn't fit).\n* Choice D: plural past \"were\" mismatches \"Each\" and shifts tense."
},
{
  id: 24,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Expression of Ideas",
  skill: "transitions",
  passage: "Critics of early hydrogen-rail projects argued that the lifecycle emissions of hydrogen trains would depend more on hydrogen sourcing than on the trains themselves. ________ subsequent audits of European pilot lines have shown exactly that pattern: lifecycle emissions vary by an order of magnitude depending on whether the hydrogen comes from natural-gas reforming or from renewable electrolysis.",
  question: "Which choice completes the text with the most logical transition?",
  choices: [
    { id: "A", text: "Nevertheless," },
    { id: "B", text: "Indeed," },
    { id: "C", text: "By contrast," },
    { id: "D", text: "On the other hand," }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Transitions (Confirmation)**\n\n**Choice B is correct.**\n\nThe second sentence *confirms* the critics' prediction (\"shown exactly that pattern\"). \"Indeed\" signals confirmation.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"Nevertheless\" suggests contrast; here the data agree.\n* Choice C: \"By contrast\" also signals contrast.\n* Choice D: \"On the other hand\" likewise signals contrast."
},
{
  id: 25,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Expression of Ideas",
  skill: "transitions",
  passage: "Mantis shrimp possess up to sixteen photoreceptor types and were long assumed to discriminate colors with extraordinary precision. ________ behavioral experiments have shown that they actually distinguish closely spaced wavelengths less accurately than humans, suggesting their eyes are tuned for fast recognition rather than fine discrimination.",
  question: "Which choice completes the text with the most logical transition?",
  choices: [
    { id: "A", text: "For example," },
    { id: "B", text: "However," },
    { id: "C", text: "Similarly," },
    { id: "D", text: "In conclusion," }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Transitions (Contrast)**\n\n**Choice B is correct.**\n\nThe first sentence states an *assumption* (extraordinary discrimination); the second sentence *contradicts* it (less accurate than humans). That's a contrast — \"However\" fits.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"For example\" signals an instance of the same idea.\n* Choice C: \"Similarly\" signals likeness — the second sentence reverses the first.\n* Choice D: \"In conclusion\" signals a wrap-up summary."
},
{
  id: 26,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Expression of Ideas",
  skill: "rhetorical-synthesis",
  studentNotes: {
    intro: "While researching a topic, a student has taken the following notes:",
    bullets: [
      "Etruscan inscriptions, dating from the seventh to first centuries BCE, are scratched on bronze, stone, and tomb walls.",
      "The Etruscan alphabet can be read phonetically, but the language remains only partly translated.",
      "Many surviving inscriptions are funerary epitaphs and are highly formulaic.",
      "Archaeologist Kelechi Ofor argues that the apparent uniformity is a preservation artifact: perishable wax tablets and wooden plaques have not survived.",
      "Ofor's argument has prompted scholars to reconsider claims about Etruscan literacy."
    ],
    goal: "The student wants to introduce Ofor's argument and explain its implication for earlier claims about Etruscan literacy."
  },
  question: "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  choices: [
    { id: "A", text: "Etruscan inscriptions are scratched on bronze, stone, and tomb walls." },
    { id: "B", text: "The Etruscan alphabet can be read phonetically." },
    { id: "C", text: "Archaeologist Kelechi Ofor argues that the apparent uniformity of surviving Etruscan inscriptions reflects preservation rather than literacy itself, prompting scholars to reconsider earlier claims that Etruscan epitaph practice was \"strikingly formulaic.\"" },
    { id: "D", text: "Many surviving Etruscan inscriptions are funerary epitaphs." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Rhetorical Synthesis**\n\n**Choice C is correct.**\n\nThe goal is two-part: (1) introduce *Ofor's argument*, and (2) explain its implication for earlier *literacy* claims. Choice C names Ofor, states his argument (uniformity is a preservation artifact), and connects it to reconsidering earlier claims. That hits both targets.\n\n**Why the wrong answers are tempting:**\n* Choice A: just background, no argument.\n* Choice B: a fact about the script, not Ofor.\n* Choice D: just a fact about the corpus, not Ofor's argument."
},
{
  id: 27,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  domain: "Expression of Ideas",
  skill: "rhetorical-synthesis",
  studentNotes: {
    intro: "While researching a topic, a student has taken the following notes:",
    bullets: [
      "The black-footed ferret was reduced to a single relict colony in Wyoming by the late twentieth century.",
      "Initial recovery efforts focused on captive breeding from that single colony.",
      "Ten-year monitoring has shown population growth at several reintroduction sites, including Conata Basin and Aubrey Valley.",
      "Genetic surveys reveal that heterozygosity at neutral loci has continued to fall across reintroduced populations.",
      "Some biologists argue that genetic rescue — the controlled introduction of variation from related populations — may be needed to stabilize the species' long-term outlook."
    ],
    goal: "The student wants to emphasize the long-term genetic challenge facing recovery efforts."
  },
  question: "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  choices: [
    { id: "A", text: "The black-footed ferret was reduced to a single relict colony in Wyoming by the late twentieth century." },
    { id: "B", text: "Ten-year monitoring has shown population growth at several reintroduction sites, including Conata Basin and Aubrey Valley." },
    { id: "C", text: "Although ten-year monitoring has shown population growth at several reintroduction sites, heterozygosity has continued to fall across reintroduced populations, leading some biologists to argue that genetic rescue may be needed to stabilize the species' long-term outlook." },
    { id: "D", text: "Initial recovery efforts focused on captive breeding from a single colony." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Rhetorical Synthesis**\n\n**Choice C is correct.**\n\nThe goal is to *emphasize the long-term genetic challenge*. Choice C concedes the short-term success (population growth) only as a backdrop and foregrounds the genetic problem (falling heterozygosity) plus the proposed long-term response (genetic rescue). That centers the genetic challenge.\n\n**Why the wrong answers are tempting:**\n* Choice A: emphasizes the historical bottleneck, not the long-term challenge.\n* Choice B: emphasizes the success, not the challenge.\n* Choice D: emphasizes early strategy, not the long-term genetic concern."
}
      ]
    }
  ]
};
