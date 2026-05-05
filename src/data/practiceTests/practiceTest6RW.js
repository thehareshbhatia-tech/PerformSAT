// Practice Test 6 — SAT Reading & Writing (R&W)
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

export const practiceTest6RW = {
  id: "practice-test-6-rw",
  title: "Practice Test 6 — Reading & Writing",
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
  passage: "When the glaciologist Hannelore Stein returned from West Antarctica with a series of ice cores in 2008, the international team of researchers waiting in Bremerhaven was surprised by how cautious she was. She insisted on ________ each section of the cores against three independent dating methods before announcing any preliminary results to the press.",
  question: "Which choice completes the text with the most logical and precise word or phrase?",
  choices: [
    { id: "A", text: "discarding" },
    { id: "B", text: "verifying" },
    { id: "C", text: "shortening" },
    { id: "D", text: "translating" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Words in Context (Fill-in)**\n\n**Choice B is correct.**\n\nStein checks each section against three independent dating methods — that is the act of *verifying*: confirming that the dates are correct.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"discarding\" contradicts the careful work of dating the cores.\n* Choice C: \"shortening\" doesn't fit — she's checking, not cutting.\n* Choice D: \"translating\" describes language, not data verification."
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 2,
  domain: "Craft and Structure",
  skill: "words-in-context",
  passage: "The potter Estela Quezada is celebrated in the Mexican village of Mata Ortiz for keeping her decorative lines ________; instead of bold sweeping curves, she favors thin, evenly spaced strokes drawn with a brush made from a single child's hair, trusting the eye to read the patterns from a distance.",
  question: "Which choice completes the text with the most logical and precise word or phrase?",
  choices: [
    { id: "A", text: "thick" },
    { id: "B", text: "delicate" },
    { id: "C", text: "uneven" },
    { id: "D", text: "colorful" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Words in Context (Fill-in)**\n\n**Choice B is correct.**\n\nThe semicolon explains the missing word: Quezada favors \"thin, evenly spaced strokes\" drawn with a single hair. That is the definition of *delicate*: fine and intricate.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"thick\" contradicts \"thin\" strokes.\n* Choice C: \"uneven\" contradicts \"evenly spaced.\"\n* Choice D: \"colorful\" addresses color, not the line quality the sentence emphasizes."
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  domain: "Craft and Structure",
  skill: "words-in-context",
  passage: "Although the playwright Sholem Frenkel is often remembered for the rapid, emotionally charged dialogue of his Vilna productions, his manuscripts tell another story. His marginal notes show a writer who would ________ a single exchange for months, returning night after night to test whether one word's removal made the rhythm of a scene either sharper or more hollow.",
  question: "Which choice completes the text with the most logical and precise word or phrase?",
  choices: [
    { id: "A", text: "abandon" },
    { id: "B", text: "polish" },
    { id: "C", text: "memorize" },
    { id: "D", text: "translate" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Words in Context (Fill-in)**\n\n**Choice B is correct.**\n\nThe sentence describes Frenkel returning night after night to refine an exchange — testing whether removing a word improves the rhythm. That is *polishing*: improving by gradual adjustment.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"abandon\" contradicts spending months on the same exchange.\n* Choice C: \"memorize\" doesn't fit — he's *changing* the line, not committing it unchanged.\n* Choice D: \"translate\" describes converting between languages, not refining within one."
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  domain: "Craft and Structure",
  skill: "text-structure-and-purpose",
  passage: "For decades, marine ecologists assumed that sudden \"blooms\" of jellyfish in temperate seas were primarily triggered by warming surface waters. A 2022 study by oceanographer Priya Subramanian challenges that assumption. __After analyzing fifteen years of plankton-net data from the Sea of Japan, Subramanian's team found that bloom timing tracked the disappearance of small predatory fish far more closely than it tracked surface temperature, suggesting that overfishing — not warming alone — sets the conditions for outbreaks.__",
  question: "Which choice best describes the function of the underlined sentence in the text as a whole?",
  choices: [
    { id: "A", text: "It introduces a counterexample that complicates Subramanian's challenge to the older view." },
    { id: "B", text: "It presents the observational evidence that supports the new explanation Subramanian offers." },
    { id: "C", text: "It contrasts two competing methods for sampling jellyfish populations." },
    { id: "D", text: "It raises doubts about whether the older assumption was ever truly held." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Text Structure and Purpose**\n\n**Choice B is correct.**\n\nThe first two sentences set up the old view (warming triggers blooms) and Subramanian's challenge. The underlined sentence then provides the *evidence* (fifteen years of plankton-net data) and the *new explanation* (overfishing of predators) that grounds the challenge.\n\n**Why the wrong answers are tempting:**\n* Choice A: there is no counterexample — the underlined sentence supports Subramanian.\n* Choice C: only one data source (plankton-net data) is described.\n* Choice D: the passage accepts that the older view was held."
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 4,
  domain: "Craft and Structure",
  skill: "text-structure-and-purpose",
  passage: "The following text is adapted from Ana Milena Restrepo's 2019 short story \"Last Class.\" Sergio, a longtime tango instructor, is closing his rehearsal studio at the end of an evening.\n\nSergio set the chairs back along the wall and turned the floor lamps down one by one, the way he had every Thursday for twenty-three years. The studio emptied of light in pieces — first the wooden floor, then the long mirror, then the corner where his first partner had once practiced her ochos until midnight. __He stood there a moment, his fingers still on the dimmer, and listened to the old wooden floor settle into its quiet.__ It was, he had come to feel, the only stillness he could trust.",
  question: "Which choice best describes the function of the underlined sentence in the text?",
  choices: [
    { id: "A", text: "It marks a shift from physical action to interior reflection." },
    { id: "B", text: "It establishes a contrast between the studio and Sergio's home." },
    { id: "C", text: "It contradicts the calm tone established earlier in the passage." },
    { id: "D", text: "It signals that Sergio is closing the studio for the last time." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Text Structure and Purpose (Literary)**\n\n**Choice A is correct.**\n\nThe sentences before describe Sergio's *actions* (setting chairs, turning down lamps). The underlined sentence shifts to him standing still, listening, and the next sentence is *what he feels* (\"the only stillness he could trust\"). The underlined sentence is the pivot from doing to reflecting.\n\n**Why the wrong answers are tempting:**\n* Choice B: only the studio appears in the passage; no home is contrasted.\n* Choice C: the tone stays calm and reflective throughout.\n* Choice D: nothing in the passage suggests permanent closure."
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
      text: "Recent enthusiasm for \"agrivoltaic\" farming — installing solar panels above active cropland — has been driven by energy researchers who emphasize the dual benefits of clean power generation and reduced soil evaporation. The model promises lower water demand for crops, additional income for farmers, and decarbonized electricity without sacrificing food production."
    },
    {
      label: "Text 2",
      text: "Agronomist Yuki Tanabe is sympathetic to the goals of agrivoltaic deployment but cautions that \"shading benefits\" alone are not the same as agronomic gains. Her field studies of Japanese rice paddies show that without panel-spacing standards calibrated to specific crops, agrivoltaic installations frequently reduce yields by 12 to 20 percent. Without crop-specific design rules, she argues, the model risks recreating the trade-off it was meant to dissolve."
    }
  ],
  question: "Based on the texts, how would Tanabe (Text 2) most likely respond to the claim made by the researchers in Text 1?",
  choices: [
    { id: "A", text: "By rejecting the clean-power and water-savings benefits as overstated." },
    { id: "B", text: "By acknowledging the benefits but warning that achieving them depends on design choices the researchers do not address." },
    { id: "C", text: "By arguing that agrivoltaic systems are technically impossible to deploy at scale." },
    { id: "D", text: "By insisting that the model has already been disproven by the Japanese record." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Cross-Text Connections**\n\n**Choice B is correct.**\n\nText 2 says Tanabe is \"sympathetic to the goals\" — so she agrees with the benefits in spirit. But she adds a *condition*: without crop-specific design rules, yields drop. That is exactly choice B: acknowledge benefits, warn about preconditions.\n\n**Why the wrong answers are tempting:**\n* Choice A: Tanabe doesn't reject the benefits; she shares the goals.\n* Choice C: she never claims technical impossibility.\n* Choice D: \"already been disproven\" is too strong — she warns about a *risk*, not a proof."
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
      text: "The poet Bea Whitfield, in a 1974 lecture on her craft, argued that the most resonant poems are those whose central image the reader does not consciously notice on a first pass — a recurring color, an off-rhyme, a half-line that doubles as a refrain. The trick, she said, is to let the image accumulate so quietly that the reader feels the meaning land before recognizing what put it there."
    },
    {
      label: "Text 2",
      text: "In a recent essay rereading Whitfield's third collection, the critic Olamide Bakare notes that several of Whitfield's contemporary reviewers complained that the closing poem felt arbitrary. Bakare argues that those complaints reveal a generational reading habit: critics in the mid-1970s expected imagery that announced itself with declarative force, and Whitfield's accumulated, half-hidden patterns read to them as no patterning at all."
    }
  ],
  question: "Based on the texts, how would Bakare (Text 2) most likely characterize the mid-1970s critics' complaints?",
  choices: [
    { id: "A", text: "a flaw in Whitfield's craft that the critics correctly identified." },
    { id: "B", text: "a misunderstanding rooted in the critics' expectations rather than in the collection itself." },
    { id: "C", text: "a deliberate provocation by Whitfield aimed at her contemporaries." },
    { id: "D", text: "a breakdown in communication between editors and reviewers of the period." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Cross-Text Connections (Inference)**\n\n**Choice B is correct.**\n\nBakare argues the complaints \"reveal a generational reading habit\" — that is, the *critics* were trained to expect declarative imagery, so Whitfield's accumulated, half-hidden patterns registered as none at all. The flaw is in the critics' habits, not in Whitfield's craft.\n\n**Why the wrong answers are tempting:**\n* Choice A: Bakare is *defending* Whitfield, not validating the critics.\n* Choice C: Bakare doesn't claim Whitfield was provoking anyone — only that her quietness was misread.\n* Choice D: there's no editor/reviewer breakdown in the text."
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  domain: "Information and Ideas",
  skill: "central-ideas-and-details",
  passage: "Contrary to a long-standing assumption, mycorrhizal fungi do not simply feed off the roots of forest trees. The fine threads of these fungi extend through the soil and connect the root systems of many trees at once, allowing nutrients and even chemical signals about insect attacks to pass between distantly spaced individuals. Recent tracing studies in Douglas-fir stands have shown that older \"hub\" trees deliver substantial sugars to seedlings of their own species, suggesting an unusually cooperative system underground.",
  question: "Which choice best states the main idea of the text?",
  choices: [
    { id: "A", text: "Mycorrhizal fungi simply feed off the roots of forest trees without giving anything back." },
    { id: "B", text: "Mycorrhizal networks link trees underground and allow them to share resources and signals." },
    { id: "C", text: "Older Douglas-fir trees prevent seedlings of their own species from growing." },
    { id: "D", text: "Tracing studies have proven that mycorrhizal fungi are not actually fungi." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Central Ideas and Details**\n\n**Choice B is correct.**\n\nThe whole passage is making one point: fungi connect trees underground, letting them share nutrients and signals. The Douglas-fir study is offered as evidence for that point.\n\n**Why the wrong answers are tempting:**\n* Choice A: this is the *old* assumption the passage is correcting.\n* Choice C: the opposite — older trees *deliver* sugars to seedlings.\n* Choice D: the passage doesn't say fungi aren't fungi."
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  domain: "Information and Ideas",
  skill: "central-ideas-and-details",
  passage: "In a 1956 letter to her brother, the archaeologist Ingrid Halvorsen described the moment she decided to set aside her planned monograph on Iron Age pottery and write instead about the bog bodies recovered from Danish peatlands. \"I have been writing about the things people threw away,\" she wrote, \"and I begin to suspect that the only honest record left to make is of the people the bog itself decided to keep.\" The shift would, within four years, produce one of the foundational works of Northern European bog-body scholarship.",
  question: "Which choice best states the main idea of the text?",
  choices: [
    { id: "A", text: "Halvorsen quit archaeology in 1956 to pursue creative writing instead." },
    { id: "B", text: "Halvorsen's move from pottery monographs to bog-body scholarship was driven by a search for a more direct human record." },
    { id: "C", text: "Halvorsen's letter to her brother was the most influential of her career." },
    { id: "D", text: "Iron Age pottery was the most reliable record of Northern European life." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Central Ideas and Details**\n\n**Choice B is correct.**\n\nThe passage is about *why* Halvorsen changed her work: she felt pottery was about \"things people threw away\" while bog bodies were the people themselves — a more direct record. The result was bog-body scholarship.\n\n**Why the wrong answers are tempting:**\n* Choice A: she didn't quit archaeology — she shifted within it.\n* Choice C: the passage doesn't claim the letter was her most influential anything.\n* Choice D: the passage actually moves *away* from pottery; it doesn't praise it as the most reliable record."
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Information and Ideas",
  skill: "central-ideas-and-details",
  passage: "The Iberian wolf (*Canis lupus signatus*) was once present in packs across most of the Iberian Peninsula. By the late twentieth century, persecution and habitat loss had reduced the species to fewer than three hundred individuals concentrated in northwestern Spain and northern Portugal. Conservation biologists initially focused on protecting the largest remaining population in the Galician highlands, on the assumption that a single thriving stronghold could eventually repopulate the species' historic range. More recent genetic work has complicated that hope: the surviving subpopulations carry distinct lineages, and recolonization from a single source would erase variation that took millennia to accumulate.",
  question: "Which choice best states the main idea of the text?",
  choices: [
    { id: "A", text: "The Iberian wolf has been reduced from a peninsula-wide species to a single thriving stronghold." },
    { id: "B", text: "Conservation strategies that worked for other endangered species cannot be applied to Iberian wolves." },
    { id: "C", text: "The early conservation strategy of relying on a single source population is in tension with new genetic findings about the species' diversity." },
    { id: "D", text: "Genetic research has shown that the Iberian wolf is in fact several different species." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Central Ideas and Details**\n\n**Choice C is correct.**\n\nThe passage sets up the early plan (rely on the Galician stronghold) and then says new genetic work \"has complicated that hope\" — the surviving groups carry distinct lineages that would be lost. The main idea is exactly that tension.\n\n**Why the wrong answers are tempting:**\n* Choice A: distorts the facts — there are scattered groups, not one thriving stronghold.\n* Choice B: the passage doesn't generalize about other endangered species.\n* Choice D: \"distinct lineages\" within a species is not the same as \"different species\" — that's an over-reading."
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  domain: "Information and Ideas",
  skill: "inferences",
  passage: "Although the European beaver was reintroduced to a watershed in southern Scotland in 2009 with the explicit goal of reducing local flooding, ecologists have come to credit the beavers with a much wider role. The dams hold back sediment, the slowed pools support amphibians, and waterlogged margins now host insects and bird species that had not been recorded in the catchment for decades. The Scottish reintroduction is now used as a textbook example of a _______",
  question: "Which choice most logically completes the text?",
  choices: [
    { id: "A", text: "single-species recovery effort." },
    { id: "B", text: "keystone species effect." },
    { id: "C", text: "failure of reintroduction, since flooding still occurs occasionally." },
    { id: "D", text: "competitive exclusion between aquatic mammals." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Inferences (Logical Completion)**\n\n**Choice B is correct.**\n\nOne species (beavers) reshapes the watershed, sediment, amphibian habitat, and bird and insect populations — that is exactly what a *keystone species* does, by definition.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"single-species recovery\" misses the wider effects, which are the whole point.\n* Choice C: the passage frames the outcome as broadly successful.\n* Choice D: there is no second aquatic mammal in the text."
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Information and Ideas",
  skill: "inferences",
  passage: "Although early Italian musicologists assumed that the lavishly notated cadenzas in late-eighteenth-century concertos represented the soloist's own improvisations, recent archival work suggests this picture is incomplete. Surviving rehearsal copies frequently contain cadenzas in the composer's hand, often with corrections in a second hand belonging to the soloist who premiered the piece. This evidence suggests that many \"improvised\" cadenzas were actually _______",
  question: "Which choice most logically completes the text?",
  choices: [
    { id: "A", text: "performed without any preparation by either composer or soloist." },
    { id: "B", text: "the result of a collaborative drafting process between composer and soloist before performance." },
    { id: "C", text: "added by later editors after both the composer and the soloist had died." },
    { id: "D", text: "rejected by audiences who preferred fully composed movements." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Inferences (Logical Completion)**\n\n**Choice B is correct.**\n\nThe rehearsal copies have the *composer's* draft of a cadenza and the *soloist's* corrections — that is a collaboration before the performance, not a spontaneous improvisation by the soloist.\n\n**Why the wrong answers are tempting:**\n* Choice A: contradicts the existence of written drafts.\n* Choice C: the corrections are in the *soloist's* hand, not a later editor's.\n* Choice D: the passage doesn't address audience preference."
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Information and Ideas",
  skill: "inferences",
  passage: "Sociolinguists studying language attitudes in the Caribbean island of Dominica have noted a striking pattern. Although nearly all Dominicans speak both English and Kwéyòl, surveys conducted in the 1990s found that parents in many villages reported speaking only English to their children — yet recordings of those same households showed substantial Kwéyòl use during ordinary domestic activity. Researchers suggest that what parents reported reflected ________",
  question: "Which choice most logically completes the text?",
  choices: [
    { id: "A", text: "the actual proportion of English to Kwéyòl spoken in their homes." },
    { id: "B", text: "their belief about which language they ought to speak with children, rather than what they actually did." },
    { id: "C", text: "a deliberate effort to mislead the survey researchers about household practices." },
    { id: "D", text: "a regional variation in Kwéyòl that the researchers did not recognize." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Inferences (Logical Completion)**\n\n**Choice B is correct.**\n\nParents *reported* English-only, but recordings showed substantial Kwéyòl. The most natural explanation is that the reports reflected *what they believed they should do* (a norm or aspiration), not actual behavior.\n\n**Why the wrong answers are tempting:**\n* Choice A: directly contradicted by the recordings.\n* Choice C: \"deliberate effort to mislead\" is a much stronger claim than the data warrants.\n* Choice D: nothing in the passage points to a regional variation issue."
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Information and Ideas",
  skill: "command-of-evidence-quantitative",
  passage: "A research team studying mycorrhizal exchange in mixed temperate forests measured the percentage of carbon transferred from large \"hub\" trees to nearby seedlings during the first two months after seedling emergence. They found that hub trees transferred a higher percentage of carbon to seedlings of their own species than to seedlings of unrelated species, even when the unrelated seedlings were physically closer to the hub. The team concluded that mycorrhizal carbon transfer is shaped by species recognition rather than by physical distance alone.",
  questionTable: {
    type: "data-table",
    caption: "Carbon transfer from hub trees in a mixed temperate forest",
    headers: ["Seedling species relative to hub", "Mean distance to hub (m)", "Mean carbon received (% of hub uptake)"],
    rows: [
      ["Same species", "1.8", "12.3"],
      ["Unrelated species", "0.9", "4.7"],
      ["Same species", "3.2", "8.1"],
      ["Unrelated species", "2.4", "3.9"]
    ]
  },
  question: "Which choice best describes data from the table that support the team's conclusion?",
  choices: [
    { id: "A", text: "Same-species seedlings received a higher percentage of carbon than unrelated seedlings even when the unrelated seedlings were closer to the hub." },
    { id: "B", text: "Unrelated seedlings always received a higher percentage of carbon than same-species seedlings." },
    { id: "C", text: "Carbon transfer was identical for all seedlings regardless of relationship to the hub." },
    { id: "D", text: "Distance to the hub had a stronger effect on carbon transfer than species relationship did." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Command of Evidence — Quantitative**\n\n**Choice A is correct.**\n\nThe table shows same-species seedlings received 12.3% even though the unrelated seedling at 0.9 m (closer) received only 4.7%. That directly supports the conclusion that species recognition matters more than distance alone.\n\n**Why the wrong answers are tempting:**\n* Choice B: contradicts the table — same-species values are higher in every comparison.\n* Choice C: the values are clearly different.\n* Choice D: the table shows the opposite — closer unrelated seedlings still got less."
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Information and Ideas",
  skill: "command-of-evidence-textual",
  passage: "In her 2018 study of pre-Columbian agave cultivation in central Mexico, the archaeobotanist Lucía Rivas argues that the dense rows of agave terraces in the Tehuacán Valley were not, as long supposed, the byproduct of accidental drought adaptation. Rivas argues that the terraces were the result of a deliberate, multi-generational program of selective replanting — and that the surviving terrace geometry encodes the choices farmers made about water capture, slope, and inter-row spacing.",
  question: "Which finding, if true, would most directly support Rivas's argument?",
  choices: [
    { id: "A", text: "Soil cores from the terraces show no evidence of human modification beyond the natural slope of the valley." },
    { id: "B", text: "The terrace rows are oriented in patterns that consistently optimize water capture, with row-to-row spacing matching the spread of mature agave plants." },
    { id: "C", text: "Wild agave species in nearby valleys grow naturally in dense rows without human intervention." },
    { id: "D", text: "Sixteenth-century Spanish records describe the terraces as already abandoned at the time of European contact." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Command of Evidence — Textual**\n\n**Choice B is correct.**\n\nRivas's claim is that the terraces encode *deliberate choices* about water capture, slope, and spacing. Choice B is exactly that pattern: optimization of water capture and spacing matched to mature agave — direct evidence of design.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"no evidence of human modification\" would *undermine* her claim.\n* Choice C: if wild agave grow that way without humans, the terraces don't require deliberate planning.\n* Choice D: abandonment at contact says nothing about whether the original terraces were deliberate."
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Information and Ideas",
  skill: "command-of-evidence-quantitative",
  passage: "A regional study of agrivoltaic rice paddies in Japan compared three panel-spacing configurations against a control plot with no panels. The team measured both rice yield (in metric tons per hectare) and total electricity generated (in megawatt-hours per hectare per year). The researchers proposed that wider panel spacing produces a more favorable balance between energy generation and rice yield because it preserves enough mid-day sunlight for photosynthesis while still capturing useful solar energy.",
  questionTable: {
    type: "data-table",
    caption: "Yield and energy output by panel spacing in agrivoltaic rice paddies",
    headers: ["Configuration", "Rice yield (t/ha)", "Electricity generated (MWh/ha/yr)"],
    rows: [
      ["No panels (control)", "5.2", "0"],
      ["Narrow spacing", "3.6", "320"],
      ["Medium spacing", "4.4", "245"],
      ["Wide spacing", "4.9", "175"]
    ]
  },
  question: "Which choice best describes data from the table that support the researchers' proposal?",
  choices: [
    { id: "A", text: "Wide spacing keeps rice yield close to the no-panel control while still generating substantial electricity, whereas narrow spacing sharply reduces yield." },
    { id: "B", text: "Narrow spacing produces both the highest rice yield and the highest electricity output." },
    { id: "C", text: "Wide spacing eliminates rice yield entirely while generating the most electricity." },
    { id: "D", text: "All three spacings reduce rice yield to less than half of the no-panel control." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Command of Evidence — Quantitative**\n\n**Choice A is correct.**\n\nThe proposal is that wider spacing strikes a better balance — preserving yield while still producing useful energy. The table shows wide-spacing yield of 4.9 t/ha (close to the 5.2 control) and 175 MWh — exactly that balance — while narrow spacing drops yield to 3.6.\n\n**Why the wrong answers are tempting:**\n* Choice B: narrow has the highest electricity but the lowest rice yield.\n* Choice C: wide spacing yields 4.9 t/ha — far from \"eliminates.\"\n* Choice D: 4.9, 4.4, and 3.6 are not all less than half of 5.2."
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Information and Ideas",
  skill: "command-of-evidence-textual",
  passage: "In her 2020 study of Babylonian astronomical diaries from the late Achaemenid period, the historian of science Hira Anand argues that the surviving cuneiform tablets do not, as some earlier scholars assumed, record only celestial observations made on clear nights. Anand argues that the diaries were a continuous administrative record — entries on cloudy nights still report the date and the absence of observation, indicating that the record itself, not the observations alone, was the bureaucratic product.",
  question: "Which finding, if true, would most directly support Anand's argument?",
  choices: [
    { id: "A", text: "Most surviving tablets contain only entries describing visible celestial events on clear nights." },
    { id: "B", text: "Many tablets contain entries that record the date along with explicit notations such as \"clouds prevented observation,\" rather than skipping cloudy nights entirely." },
    { id: "C", text: "Surviving tablets show that astronomical observations were sometimes recorded years after they occurred." },
    { id: "D", text: "The Babylonian state employed only a single full-time astronomer at any given time." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Command of Evidence — Textual**\n\n**Choice B is correct.**\n\nAnand's claim is that the diaries are a *continuous administrative record* — even cloudy nights are logged, with the absence of observation noted. Choice B is exactly that: entries on cloudy nights with explicit \"clouds prevented observation\" notations.\n\n**Why the wrong answers are tempting:**\n* Choice A: this is the older view Anand is correcting.\n* Choice C: a delay between observation and recording doesn't speak to whether cloudy nights were logged.\n* Choice D: staffing levels don't bear on the continuity claim."
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  domain: "Standard English Conventions",
  skill: "boundaries",
  passage: "When the conservator Brigitte Dahl examined the seventeenth-century Dutch oil painting under raking light, she noticed something unusual ________ a faint underdrawing in chalk that the museum's earlier infrared scans had missed entirely.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "noticed; something" },
    { id: "B", text: "noticed something unusual:" },
    { id: "C", text: "noticed something, unusual" },
    { id: "D", text: "noticed something unusual," }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Boundaries (Colon)**\n\n**Choice B is correct.**\n\nThe second part of the sentence (\"a faint underdrawing in chalk...\") *names* the \"something unusual.\" A colon is the standard punctuation to introduce that elaboration after a complete clause.\n\n**Why the wrong answers are tempting:**\n* Choice A: a semicolon would require a full independent clause after it, which doesn't appear here.\n* Choice C: the comma between \"something\" and \"unusual\" breaks an adjective from its noun.\n* Choice D: a comma is not strong enough to introduce the named elaboration."
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  domain: "Standard English Conventions",
  skill: "form-structure-and-sense",
  passage: "Each of the seven cuneiform tablets recovered from the temple archive ________ a list of grain disbursements made during a single month of the regnal year.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "contain" },
    { id: "B", text: "contains" },
    { id: "C", text: "are containing" },
    { id: "D", text: "have contained" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Subject-Verb Agreement**\n\n**Choice B is correct.**\n\nThe subject is \"Each\" — singular — even though \"of the seven cuneiform tablets\" follows. \"Each\" takes a singular verb: *contains*.\n\n**Why the wrong answers are tempting:**\n* Choice A: plural \"contain\" doesn't agree with \"Each.\"\n* Choice C: \"are containing\" is also plural and uses an awkward continuous form.\n* Choice D: \"have contained\" is plural; this is also a static fact, so simple present is correct."
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  domain: "Standard English Conventions",
  skill: "boundaries",
  passage: "The agronomist Yuki Tanabe, whose 2017 paddy-spacing study transformed Japanese agrivoltaic ________ now consults with farmer cooperatives across Southeast Asia.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "policy" },
    { id: "B", text: "policy:" },
    { id: "C", text: "policy," },
    { id: "D", text: "policy;" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Boundaries (Nonrestrictive Clause)**\n\n**Choice C is correct.**\n\nThe phrase \"whose 2017 paddy-spacing study transformed Japanese agrivoltaic policy\" is a nonrestrictive relative clause. Such clauses are bounded by commas — one before \"whose\" and the matching closing comma after \"policy.\"\n\n**Why the wrong answers are tempting:**\n* Choice A: leaves the relative clause unclosed.\n* Choice B: a colon is for elaborating the previous clause, not closing a parenthetical.\n* Choice D: a semicolon would require an independent clause to follow."
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  domain: "Standard English Conventions",
  skill: "form-structure-and-sense",
  passage: "Of the three glaciologists invited to present at the Bremerhaven workshop, Hannelore Stein presented the ________ data set, drawing on five separate field seasons of West Antarctic drilling.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "more comprehensive" },
    { id: "B", text: "most comprehensive" },
    { id: "C", text: "more comprehensiver" },
    { id: "D", text: "comprehensivest" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Comparative vs. Superlative**\n\n**Choice B is correct.**\n\n\"Of the three glaciologists\" introduces a comparison among three or more — that requires the *superlative* form: *most comprehensive*.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"more comprehensive\" is for comparing exactly two.\n* Choice C: not a real form — and would still be comparative anyway.\n* Choice D: \"comprehensivest\" is not a standard English form."
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Standard English Conventions",
  skill: "boundaries",
  passage: "Most of the bog bodies recovered in twentieth-century Denmark are now displayed in regional ________ a few have been transferred to the Nationalmuseet in Copenhagen for long-term conservation.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "museums" },
    { id: "B", text: "museums," },
    { id: "C", text: "museums;" },
    { id: "D", text: "museums:" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Boundaries (Comma Splice)**\n\n**Choice C is correct.**\n\nTwo independent clauses sit on either side: \"Most of the bog bodies... are now displayed in regional museums\" and \"a few have been transferred to the Nationalmuseet....\" Joining them with only a comma would create a comma splice; a semicolon properly joins two independent clauses.\n\n**Why the wrong answers are tempting:**\n* Choice A: leaves a run-on.\n* Choice B: comma splice between two independent clauses.\n* Choice D: a colon is for elaboration, not for two independent clauses with a contrast (\"a few have...\")."
},
{
  id: 23,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Standard English Conventions",
  skill: "form-structure-and-sense",
  passage: "Estela Quezada is a potter ________ delicate brushwork, drawn with a brush made from a single child's hair, has become widely imitated in the Mata Ortiz region.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "who's" },
    { id: "B", text: "whose" },
    { id: "C", text: "whom's" },
    { id: "D", text: "which's" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Form, Structure, and Sense (Possessive Pronoun)**\n\n**Choice B is correct.**\n\nThe blank is followed by \"delicate brushwork\" — a noun owned by the potter. The possessive form is *whose*.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"who's\" is the contraction for \"who is\" — not possessive.\n* Choice C: \"whom's\" is not standard English.\n* Choice D: \"which\" can't refer to a person."
},
{
  id: 24,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Expression of Ideas",
  skill: "transitions",
  passage: "The earliest Babylonian astronomical diaries primarily recorded planetary positions and the dates of lunar eclipses. ________ later diaries from the Achaemenid period add weather notations, market prices for staple grains, and even the heights of the Euphrates — turning the documents into a more general record of daily life.",
  question: "Which choice completes the text with the most logical transition?",
  choices: [
    { id: "A", text: "For instance," },
    { id: "B", text: "However," },
    { id: "C", text: "Therefore," },
    { id: "D", text: "Likewise," }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Transitions**\n\n**Choice B is correct.**\n\nThe earlier diaries record only celestial information; the later ones include weather, prices, and river heights — a *contrast* in scope. \"However\" signals that contrast.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"For instance\" introduces an example of the same point, not a contrast.\n* Choice C: \"Therefore\" implies cause and effect, which doesn't apply here.\n* Choice D: \"Likewise\" implies similarity, the opposite of the contrast in scope."
},
{
  id: 25,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Expression of Ideas",
  skill: "transitions",
  passage: "The first agrivoltaic installations in Japanese rice paddies were designed by engineers who had no agricultural training and who optimized panel layouts purely for electrical output. ________ rice yields beneath those early installations dropped sharply, and farmer cooperatives quickly demanded crop-aware design standards.",
  question: "Which choice completes the text with the most logical transition?",
  choices: [
    { id: "A", text: "Nevertheless," },
    { id: "B", text: "Predictably," },
    { id: "C", text: "In contrast," },
    { id: "D", text: "By coincidence," }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Transitions**\n\n**Choice B is correct.**\n\nIf engineers with no agricultural training optimize only for electricity, dropping yields are exactly what one would expect. \"Predictably\" signals that the consequence followed naturally from the cause described.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"Nevertheless\" signals an unexpected outcome — but this outcome was *expected*.\n* Choice C: \"In contrast\" needs two contrasting facts about the same subject; here we have cause and effect.\n* Choice D: \"By coincidence\" denies the causal link the passage clearly draws."
},
{
  id: 26,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Expression of Ideas",
  skill: "rhetorical-synthesis",
  studentNotes: {
    intro: "While researching mycorrhizal networks for a class report, a student took the following notes:",
    bullets: [
      "Mycorrhizal fungi form fine threads called hyphae that connect tree root systems underground.",
      "In Douglas-fir stands, older \"hub\" trees deliver substantial sugars to seedlings of their own species.",
      "Hub trees can also transmit chemical signals about insect attacks to neighboring trees.",
      "Researchers describe these connections as \"common mycorrhizal networks\" or CMNs.",
      "Some critics argue that the role of CMNs has been overstated in popular accounts of forests."
    ],
    goal: "The student wants to introduce the concept of a common mycorrhizal network to readers unfamiliar with it."
  },
  question: "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  choices: [
    { id: "A", text: "Some critics argue that the role of CMNs has been overstated in popular accounts of forests." },
    { id: "B", text: "A common mycorrhizal network, or CMN, is an underground system of fungal threads called hyphae that connects the root systems of multiple trees." },
    { id: "C", text: "Older Douglas-fir trees can transmit chemical signals about insect attacks to neighboring trees." },
    { id: "D", text: "Researchers studying Douglas-fir stands have observed substantial sugar transfer between hub trees and same-species seedlings." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Rhetorical Synthesis**\n\n**Choice B is correct.**\n\nThe goal is to *introduce the concept* of a CMN to readers unfamiliar with it. Choice B does exactly that — it names the concept, gives the abbreviation, and defines it in plain terms.\n\n**Why the wrong answers are tempting:**\n* Choice A: critique of the concept assumes the reader already knows what it is.\n* Choice C: a specific behavior, not an introduction.\n* Choice D: a specific finding, not an introductory definition."
},
{
  id: 27,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Expression of Ideas",
  skill: "rhetorical-synthesis",
  studentNotes: {
    intro: "While researching the bog bodies of Northern Europe, a student took the following notes:",
    bullets: [
      "Bog bodies are human remains preserved in the acidic, oxygen-poor peatlands of Northern Europe.",
      "Tollund Man, recovered in Denmark in 1950, dates to roughly 400 BCE.",
      "Many bog bodies show signs of violent death — strangulation, throat cutting, or sharp blows.",
      "Some scholars interpret the deaths as ritual sacrifice; others suggest execution of criminals.",
      "Recent CT-scan and isotope analyses have allowed researchers to test these competing interpretations."
    ],
    goal: "The student wants to emphasize that recent scientific techniques are reshaping the interpretation of bog bodies."
  },
  question: "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  choices: [
    { id: "A", text: "Tollund Man, recovered in Denmark in 1950, dates to roughly 400 BCE." },
    { id: "B", text: "Bog bodies are human remains preserved in the acidic, oxygen-poor peatlands of Northern Europe." },
    { id: "C", text: "Many bog bodies show signs of violent death, including strangulation, throat cutting, and sharp blows." },
    { id: "D", text: "Although scholars long divided over whether bog-body deaths were ritual sacrifices or executions, recent CT-scan and isotope analyses now allow these competing interpretations to be tested directly." }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Rhetorical Synthesis**\n\n**Choice D is correct.**\n\nThe goal is to emphasize that *recent scientific techniques are reshaping the interpretation* of bog bodies. Choice D does exactly that — it names the older interpretive divide, then names the new techniques (CT-scans, isotope analysis) and their effect (testing the competing interpretations).\n\n**Why the wrong answers are tempting:**\n* Choice A: a single date, no mention of new techniques.\n* Choice B: a definition, no mention of recent science or interpretation.\n* Choice C: a description of injuries, with no mention of techniques."
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
  passage: "Although the prehistorian Camille Veyrenc is often celebrated for her bold reinterpretations of the Chauvet Cave paintings, her published method is anything but bold. Her notebooks reveal a researcher who would ________ a single panel of horse heads for an entire field season, returning to it across many visits to revise the angle of a single line and the inferred order of two pigment layers.",
  question: "Which choice completes the text with the most logical and precise word or phrase?",
  choices: [
    { id: "A", text: "ignore" },
    { id: "B", text: "scrutinize" },
    { id: "C", text: "memorize" },
    { id: "D", text: "duplicate" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Words in Context (Fill-in)**\n\n**Choice B is correct.**\n\nVeyrenc returns to one panel for a season, revising her reading of a single line and the order of pigment layers. That sustained, detailed examination is *scrutinizing*.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"ignore\" contradicts spending a season on one panel.\n* Choice C: \"memorize\" doesn't fit — she's *analyzing* the panel, not committing it to memory.\n* Choice D: \"duplicate\" suggests copying, but she's interpreting."
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Craft and Structure",
  skill: "words-in-context",
  passage: "When the labor historian Owain Llewelyn finished his oral history of the Penrhyn slate quarrymen in 2014, he was careful to ________ his interpretive claims to the recorded testimony. Where the men's words were ambiguous, he flagged the ambiguity rather than smoothing it into a tidy narrative.",
  question: "Which choice completes the text with the most logical and precise word or phrase?",
  choices: [
    { id: "A", text: "exaggerate" },
    { id: "B", text: "constrain" },
    { id: "C", text: "abandon" },
    { id: "D", text: "translate" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Words in Context (Fill-in)**\n\n**Choice B is correct.**\n\nThe second sentence explains the first: where the testimony is ambiguous, Llewelyn refuses to make tidy narrative claims — he limits what he says to what the testimony itself supports. That is *constraining* his claims to the evidence.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"exaggerate\" is the opposite — claims would extend beyond the testimony.\n* Choice C: \"abandon\" doesn't fit — he still makes claims, just disciplined ones.\n* Choice D: \"translate\" describes language conversion, not evidentiary discipline."
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Craft and Structure",
  skill: "words-in-context",
  passage: "The architectural historian Sergei Astrov has argued that the Trans-Siberian Railway's smaller station buildings, built between 1898 and 1903, were not generic engineering products but ________ designs whose decorative woodwork drew on the joinery traditions of each station's surrounding district — Tatar, Buryat, or Russian Old Believer — even as the platform layouts remained standardized.",
  question: "Which choice completes the text with the most logical and precise word or phrase?",
  choices: [
    { id: "A", text: "uniform" },
    { id: "B", text: "regionally inflected" },
    { id: "C", text: "purely utilitarian" },
    { id: "D", text: "copied" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Words in Context (Fill-in)**\n\n**Choice B is correct.**\n\nAstrov's claim is that platform layouts were standardized but the woodwork drew on the *local* district's traditions. \"Regionally inflected\" captures exactly that mix of standard frame and local variation.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"uniform\" contradicts the local variation Astrov stresses.\n* Choice C: \"purely utilitarian\" denies the decorative woodwork the sentence describes.\n* Choice D: \"copied\" doesn't fit — designs *drew on* local traditions; they weren't reproductions of one source."
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Craft and Structure",
  skill: "text-structure-and-purpose",
  passage: "For most of the twentieth century, archaeologists working on the Bronze Age kurgans of the Eurasian steppe assumed that the elaborate horse harnesses found in the burials reflected the high social rank of the deceased rider. A 2021 reanalysis by archaeologist Aigerim Beksultanova challenges that assumption. __After re-examining the wear patterns on bits and cheekpieces from twenty-three kurgan assemblages, Beksultanova's team observed that nearly all the harnesses showed identical, heavy use, suggesting that the burial gear was working equipment recently in use rather than ceremonial display, and that rank was indicated instead by ironwork on the rider's belt.__",
  question: "Which choice best describes the function of the underlined sentence in the text as a whole?",
  choices: [
    { id: "A", text: "It introduces a counterexample that complicates Beksultanova's challenge to the older view." },
    { id: "B", text: "It presents the observational evidence and offers an alternative reading that supports the new explanation Beksultanova proposes." },
    { id: "C", text: "It contrasts two competing methods for dating kurgan assemblages." },
    { id: "D", text: "It raises doubts about whether the older assumption was ever truly held." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Text Structure and Purpose**\n\n**Choice B is correct.**\n\nThe first two sentences set up the old view (harnesses = rider rank) and Beksultanova's challenge. The underlined sentence presents the *evidence* (heavy, identical wear patterns on bits and cheekpieces) and the *alternative reading* (working equipment, with rank shown by belt ironwork) — that is, what supports the new explanation.\n\n**Why the wrong answers are tempting:**\n* Choice A: there is no counterexample — the underlined sentence supports Beksultanova.\n* Choice C: only one method (wear-pattern analysis) is described.\n* Choice D: the passage accepts that the older view was held."
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Craft and Structure",
  skill: "text-structure-and-purpose",
  passage: "The following text is adapted from Chiamaka Adeyemi's 2021 short story \"After Last Bell.\" Mrs. Onyeka, a longtime secondary-school teacher, is locking her classroom at the end of an evening exam.\n\nMrs. Onyeka stacked the test booklets on the front desk and turned the long fluorescent lights off in pairs, the way she had every term-end Friday for thirty-one years. The classroom emptied of light in pieces — first the back row of desks, then the long blackboard, then the corner where her own daughter had once practiced her multiplication tables on Saturday afternoons. __She paused at the door, her hand still on the switch, and listened to the old building tick as it cooled.__ It was, she had come to feel, a quiet she had earned.",
  question: "Which choice best describes the function of the underlined sentence in the text?",
  choices: [
    { id: "A", text: "It marks a shift from physical action to interior reflection." },
    { id: "B", text: "It establishes a contrast between the classroom and Mrs. Onyeka's home." },
    { id: "C", text: "It contradicts the calm tone established earlier in the passage." },
    { id: "D", text: "It signals that Mrs. Onyeka is leaving teaching for the last time." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Text Structure and Purpose (Literary)**\n\n**Choice A is correct.**\n\nThe sentences before describe Mrs. Onyeka's *actions* (stacking booklets, turning off lights). The underlined sentence shifts to her standing still, listening, and the next sentence reports *what she feels* (\"a quiet she had earned\"). The underlined sentence is the pivot from action to reflection.\n\n**Why the wrong answers are tempting:**\n* Choice B: only the classroom appears in the passage; no home is contrasted.\n* Choice C: the tone stays calm and reflective throughout.\n* Choice D: nothing in the passage signals a final departure."
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
      text: "Recent enthusiasm for community microgrid projects in rural areas has been propelled by energy researchers who emphasize the resilience and emissions-reduction benefits of generating power locally and storing it in shared batteries. The model promises faster recovery from storms, lower transmission losses, and fewer emissions per kilowatt-hour delivered to homes."
    },
    {
      label: "Text 2",
      text: "Energy economist Dilnoza Karimova is sympathetic to the goals of community microgrid deployment but cautions that \"shared infrastructure\" alone is not the same as a fair tariff structure. Her studies of microgrid pilots in rural Central Asia show that without rate-design rules tied to household income, microgrids tend to deliver disproportionately low bills to wealthier early adopters and disproportionately high bills to lower-income late adopters. Without such protections, she argues, the model risks recreating the equity gap it was meant to dissolve."
    }
  ],
  question: "Based on the texts, how would Karimova (Text 2) most likely respond to the claim made by the researchers in Text 1?",
  choices: [
    { id: "A", text: "By rejecting the resilience and emissions-reduction benefits as overstated." },
    { id: "B", text: "By acknowledging the benefits but warning that achieving fair outcomes depends on rate-design choices the researchers do not address." },
    { id: "C", text: "By arguing that microgrid systems are technically impossible to deploy in rural areas." },
    { id: "D", text: "By insisting that the model has already been disproven by the Central Asian record." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Cross-Text Connections**\n\n**Choice B is correct.**\n\nText 2 says Karimova is \"sympathetic to the goals\" — she shares the benefits in spirit. But she adds a *condition*: without income-tied rate design, the model produces an equity gap. That is exactly choice B: acknowledge benefits, warn about preconditions.\n\n**Why the wrong answers are tempting:**\n* Choice A: she doesn't reject the benefits; she shares the goals.\n* Choice C: she never claims technical impossibility.\n* Choice D: \"already been disproven\" is too strong — she warns about a *risk*."
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
      text: "The architect Yelena Vasilenko, in a 1986 lecture on her urban housing projects, argued that the most successful courtyards are those whose design the resident does not consciously notice — a gentle slope of paving, a recessed bench, a tree shading exactly the spot where laundry is hung. The trick, she said, is to make the design choices invisible enough that the resident feels at home before recognizing what made the courtyard usable."
    },
    {
      label: "Text 2",
      text: "In a recent essay rereading Vasilenko's 1979 Kyiv housing block, the urban critic Mateusz Wójcik notes that several of Vasilenko's contemporary reviewers complained that the central courtyard felt undesigned. Wójcik argues that those complaints reveal a generational evaluation habit: critics in the late 1970s expected designed space to announce itself with sculptural fountains and patterned paving, and Vasilenko's quietly calibrated courtyards read to them as no design at all."
    }
  ],
  question: "Based on the texts, how would Wójcik (Text 2) most likely characterize the late-1970s critics' complaints?",
  choices: [
    { id: "A", text: "a flaw in Vasilenko's craft that the critics correctly identified." },
    { id: "B", text: "a misunderstanding rooted in the critics' expectations rather than in the courtyard itself." },
    { id: "C", text: "a deliberate provocation by Vasilenko aimed at her contemporaries." },
    { id: "D", text: "a breakdown in communication between municipal officials and reviewers of the period." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Cross-Text Connections (Inference)**\n\n**Choice B is correct.**\n\nWójcik argues the critics' complaints \"reveal a generational evaluation habit\" — that is, the *critics* expected sculptural fountains and patterned paving, so Vasilenko's quiet calibrations read as no design at all. The flaw is in the critics' habits, not in Vasilenko's craft.\n\n**Why the wrong answers are tempting:**\n* Choice A: Wójcik is *defending* Vasilenko, not validating the critics.\n* Choice C: Wójcik does not claim Vasilenko was provoking anyone.\n* Choice D: there is no official-to-reviewer communication breakdown in the text."
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Information and Ideas",
  skill: "central-ideas-and-details",
  passage: "Contrary to a long-standing assumption, hyenas in southern African ecosystems are not primarily scavengers that follow lions to abandoned kills. Long-term tracking studies in the Okavango Delta show that the spotted hyena (*Crocuta crocuta*) actively hunts up to seventy percent of its own prey, often in coordinated groups, and that lions in the same range frequently displace hyenas *from* fresh hyena kills rather than the other way around. The picture of the hyena as a passive scavenger appears to have been an artifact of older, daytime-only field observations.",
  question: "Which choice best states the main idea of the text?",
  choices: [
    { id: "A", text: "Hyenas in southern Africa are primarily scavengers that follow lions to abandoned kills." },
    { id: "B", text: "Long-term tracking has shown that spotted hyenas are mostly active hunters, often having their own kills displaced by lions." },
    { id: "C", text: "Lions in the Okavango Delta no longer hunt their own prey." },
    { id: "D", text: "Daytime field observations are the most reliable source of behavioral data for African carnivores." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Central Ideas and Details**\n\n**Choice B is correct.**\n\nThe whole passage makes one point: hyenas are mostly active hunters, and lions take *from* hyenas, not the other way around. The Okavango tracking is the evidence.\n\n**Why the wrong answers are tempting:**\n* Choice A: this is the *old* view the passage corrects.\n* Choice C: the passage doesn't say lions stopped hunting.\n* Choice D: the passage actually says daytime-only observations *misled* researchers."
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Information and Ideas",
  skill: "central-ideas-and-details",
  passage: "In a 1962 letter to her former teacher, the composer Lillian Strake described the moment she decided to stop writing the orchestral suites that had earned her early prizes and turn instead to small-ensemble chamber works. \"I have been writing for the loud rooms,\" she wrote, \"and I begin to suspect that the only honest music left to write is for the rooms where one can still hear someone breathe.\" The shift would, within five years, produce three of the most performed string quartets of the postwar American repertoire.",
  question: "Which choice best states the main idea of the text?",
  choices: [
    { id: "A", text: "Strake quit composition in 1962 to teach orchestration full time." },
    { id: "B", text: "Strake's move from orchestral suites to chamber works was driven by a desire for a more intimate musical setting." },
    { id: "C", text: "Strake's letter to her teacher was the most influential of her career." },
    { id: "D", text: "Postwar American audiences preferred orchestral music to chamber music." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Central Ideas and Details**\n\n**Choice B is correct.**\n\nThe passage explains *why* Strake changed her work: orchestral suites were for \"loud rooms,\" and she wanted music for rooms where one can hear someone breathe — that is, intimate rooms. The result was chamber works.\n\n**Why the wrong answers are tempting:**\n* Choice A: she didn't quit — she shifted *within* composition.\n* Choice C: the passage doesn't claim the letter was her most influential anything.\n* Choice D: the passage doesn't speak to audience preference."
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Information and Ideas",
  skill: "central-ideas-and-details",
  passage: "The Anatolian wild goat (*Capra aegagrus*) was once distributed across most of the rugged interior of Asia Minor. By the late twentieth century, hunting and habitat loss had reduced the species to fewer than two thousand individuals concentrated in a handful of mountain valleys in southern Turkey. Conservation biologists initially focused on protecting the largest remaining population in the Taurus highlands, on the assumption that a single thriving valley could eventually repopulate the species' historic range. More recent genetic work has complicated that hope: the surviving subpopulations carry distinct lineages, and recolonization from a single source would erase variation that took millennia to accumulate.",
  question: "Which choice best states the main idea of the text?",
  choices: [
    { id: "A", text: "The Anatolian wild goat has been reduced from an Asia-Minor-wide species to a single thriving valley." },
    { id: "B", text: "Conservation strategies that worked for other endangered species cannot be applied to wild goats." },
    { id: "C", text: "The early conservation strategy of relying on a single source population is in tension with new genetic findings about the species' diversity." },
    { id: "D", text: "Genetic research has shown that the Anatolian wild goat is in fact several different species." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Central Ideas and Details**\n\n**Choice C is correct.**\n\nThe passage sets up the early plan (rely on the Taurus highlands) and then says new genetic work \"has complicated that hope\" — distinct lineages would be lost. The main idea is that tension.\n\n**Why the wrong answers are tempting:**\n* Choice A: distorts the facts — there are scattered groups in a handful of valleys, not one.\n* Choice B: the passage doesn't generalize about other species.\n* Choice D: \"distinct lineages\" within a species is not the same as \"different species.\""
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Information and Ideas",
  skill: "inferences",
  passage: "Although the gray-headed flying fox was reintroduced to a coastal Australian forest in 2011 with the explicit goal of reestablishing pollination of long-flowering eucalypts, ecologists have come to credit the bats with a far broader role. Their nightly fruit-feeding deposits seeds at distances of up to forty kilometers from parent trees, supporting the regeneration not only of eucalypts but of dozens of rainforest species whose fruits no other native disperser can carry that far. The reintroduction is now used as a textbook example of a _______",
  question: "Which choice most logically completes the text?",
  choices: [
    { id: "A", text: "single-species recovery effort." },
    { id: "B", text: "long-distance seed-dispersal mutualism." },
    { id: "C", text: "failure of reintroduction, since the bats did not achieve their stated goal." },
    { id: "D", text: "competitive exclusion between fruit-eating mammals." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Inferences (Logical Completion)**\n\n**Choice B is correct.**\n\nThe passage describes the bats carrying seeds up to forty kilometers from parent trees and supporting many rainforest species. That is the textbook setup for a *long-distance seed-dispersal mutualism*.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"single-species recovery\" misses the wider effects on dozens of species.\n* Choice C: the passage frames the outcome as a success.\n* Choice D: there is no second fruit-eating mammal in the text."
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Information and Ideas",
  skill: "inferences",
  passage: "Although early historians of medieval Welsh literature assumed that the marginal sketches in monastic manuscripts represented untrained doodling by bored copyists, recent codicological work suggests this picture is incomplete. Several manuscripts contain marginal figures whose proportions, line weight, and compositional balance match drawings attributed to the principal scribe in the main text. This evidence suggests that many of the marginal figures were actually _______",
  question: "Which choice most logically completes the text?",
  choices: [
    { id: "A", text: "added by readers many centuries after the manuscripts were copied." },
    { id: "B", text: "the work of the principal scribe rather than untrained doodling." },
    { id: "C", text: "the result of damage to the parchment rather than intentional drawing." },
    { id: "D", text: "rejected by monastic authorities as unsuitable for liturgical use." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Inferences (Logical Completion)**\n\n**Choice B is correct.**\n\nThe sketches' proportions, line weight, and composition *match* drawings attributed to the principal scribe. That is direct evidence that the same hand made them.\n\n**Why the wrong answers are tempting:**\n* Choice A: later readers' work would not match the principal scribe's hand.\n* Choice C: parchment damage would not match line weight and composition.\n* Choice D: the passage doesn't discuss monastic authorities or rejection."
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  domain: "Information and Ideas",
  skill: "inferences",
  passage: "Sociolinguists studying language attitudes among Yiddish-speaking communities in interwar Vilna have noted a striking pattern. Although nearly all surveyed adults reported using only Polish in formal commercial transactions, transcripts of marketplace recordings made during the same period show frequent code-switching between Polish and Yiddish, often within a single sale. Researchers suggest that what speakers reported reflected ________",
  question: "Which choice most logically completes the text?",
  choices: [
    { id: "A", text: "the actual proportion of Polish to Yiddish spoken in marketplace transactions." },
    { id: "B", text: "their belief about which language was appropriate for formal commerce, rather than what they actually did." },
    { id: "C", text: "a deliberate effort to mislead the survey researchers about marketplace practices." },
    { id: "D", text: "a regional variation in Yiddish that the researchers did not recognize." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Inferences (Logical Completion)**\n\n**Choice B is correct.**\n\nSpeakers reported Polish-only, but recordings showed substantial Yiddish. The most natural explanation is that the reports reflected a *norm* (what speakers believed was appropriate), not actual behavior.\n\n**Why the wrong answers are tempting:**\n* Choice A: directly contradicted by the recordings.\n* Choice C: \"deliberate effort to mislead\" is much stronger than the data warrants.\n* Choice D: nothing in the passage points to a regional variation issue."
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Information and Ideas",
  skill: "command-of-evidence-quantitative",
  passage: "A research team studying long-distance seed dispersal by gray-headed flying foxes in coastal Australia tagged seeds from four rainforest tree species and tracked the distance each seed was carried before deposition. The team proposed that flying foxes provide especially valuable dispersal services for the trees whose seeds are too heavy for smaller birds to carry far, because for those species the median dispersal distance achieved by bats is much greater than what other native dispersers can match.",
  questionTable: {
    type: "data-table",
    caption: "Median seed dispersal distance by carrier and tree species",
    headers: ["Tree species", "Seed mass (g)", "Median distance — bats (km)", "Median distance — other native dispersers (km)"],
    rows: [
      ["Species A", "0.4", "8.2", "5.6"],
      ["Species B", "0.9", "12.1", "3.1"],
      ["Species C", "1.6", "18.5", "1.2"],
      ["Species D", "2.4", "21.3", "0.4"]
    ]
  },
  question: "Which choice best describes data from the table that support the team's proposal?",
  choices: [
    { id: "A", text: "For trees with heavier seeds, the median distance achieved by bats greatly exceeds the median distance achieved by other native dispersers." },
    { id: "B", text: "For trees with lighter seeds, other native dispersers carry seeds farther than bats do." },
    { id: "C", text: "Median dispersal distance is identical for bats and other native dispersers across all four tree species." },
    { id: "D", text: "Bats carry only the lightest seeds, leaving heavier seeds entirely to other native dispersers." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Command of Evidence — Quantitative**\n\n**Choice A is correct.**\n\nThe proposal is that bats are especially valuable for *heavy*-seeded trees. The table shows the bat-vs.-other gap widens as seed mass increases — by Species D (2.4 g), bats carry seeds 21.3 km while others manage only 0.4 km. That is the proposal exactly.\n\n**Why the wrong answers are tempting:**\n* Choice B: bats outperform others even on the lightest seed.\n* Choice C: the values are clearly not identical.\n* Choice D: the table shows bats dispersing the heaviest seeds the farthest."
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Information and Ideas",
  skill: "command-of-evidence-textual",
  passage: "In her 2019 study of pre-Columbian agave cultivation, the archaeobotanist Lucía Rivas argues that the dense rows of agave terraces in the Tehuacán Valley were not, as long supposed, the byproduct of accidental drought adaptation. Rivas argues that the terraces were the result of a deliberate, multi-generational program of selective replanting — and that the surviving terrace geometry encodes the choices farmers made about water capture, slope, and inter-row spacing.",
  question: "Which finding, if true, would most directly support Rivas's argument?",
  choices: [
    { id: "A", text: "Soil cores from the terraces show no evidence of human modification beyond the natural slope of the valley." },
    { id: "B", text: "Inter-row spacing across multiple terrace systems consistently matches the spread of mature agave plants and is oriented to optimize water capture along contour lines." },
    { id: "C", text: "Wild agave species in nearby valleys grow naturally in dense rows without any human intervention." },
    { id: "D", text: "Sixteenth-century Spanish records describe the terraces as already abandoned at the time of European contact." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Command of Evidence — Textual**\n\n**Choice B is correct.**\n\nRivas's claim is that the terraces *encode deliberate choices* about water capture, slope, and spacing. Choice B is exactly that pattern: spacing matched to mature agave plus orientation along contour lines for water capture.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"no evidence of human modification\" would *undermine* her claim.\n* Choice C: if wild agave grow that way without humans, deliberate planning isn't necessary.\n* Choice D: abandonment timing doesn't speak to whether the original construction was deliberate."
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  domain: "Information and Ideas",
  skill: "command-of-evidence-quantitative",
  passage: "A regional study of community microgrids in rural Central Asia compared three rate-design rules against a control configuration with no income-tied protections. For each configuration, the team measured average monthly bills (in local currency) for two household groups: early adopters (predominantly higher-income) and late adopters (predominantly lower-income). The researchers proposed that rate design B produces the most equitable balance, because it brings late-adopter bills below early-adopter bills only modestly while not penalizing early adopters severely.",
  questionTable: {
    type: "data-table",
    caption: "Mean monthly bills by rate design",
    headers: ["Rate design", "Early adopters", "Late adopters"],
    rows: [
      ["Control (no protection)", "780", "1,420"],
      ["Design A", "820", "1,080"],
      ["Design B", "910", "880"],
      ["Design C", "1,260", "560"]
    ]
  },
  question: "Which choice best describes data from the table that support the researchers' proposal?",
  choices: [
    { id: "A", text: "Under Design B, late-adopter bills (880) fall slightly below early-adopter bills (910), without imposing the steep early-adopter cost increase seen under Design C." },
    { id: "B", text: "Under Design A, early-adopter and late-adopter bills are identical." },
    { id: "C", text: "Under the control, late-adopter bills are lower than early-adopter bills." },
    { id: "D", text: "Under Design C, early-adopter bills fall while late-adopter bills rise sharply." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Command of Evidence — Quantitative**\n\n**Choice A is correct.**\n\nThe proposal is that Design B is the most equitable because late-adopter bills end up just below early-adopter bills *without* a steep penalty on early adopters. The table confirms: Design B produces 910 vs. 880 (modest reversal), and Design C produces a much steeper 1,260 early-adopter bill — i.e., the penalty Design B avoids.\n\n**Why the wrong answers are tempting:**\n* Choice B: Design A gives 820 vs. 1,080, which are not identical.\n* Choice C: control gives 780 vs. 1,420 — late-adopter bills are *higher*, not lower.\n* Choice D: under Design C early-adopter bills *rise* sharply (780 → 1,260), they don't fall."
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Information and Ideas",
  skill: "command-of-evidence-textual",
  passage: "In her 2022 study of late-Heian-period Japanese poetry anthologies, the literary historian Nozomi Akagi argues that the surviving manuscripts were not, as some earlier scholars assumed, faithful copies of a single \"correct\" master text. Akagi argues that the anthologies were the work of multiple regional courts whose scribes deliberately introduced and preserved local variants — and that the surviving textual differences encode the editorial choices of those courts rather than copyist errors.",
  question: "Which finding, if true, would most directly support Akagi's argument?",
  choices: [
    { id: "A", text: "Surviving manuscripts from different regions almost always agree on the wording of every poem." },
    { id: "B", text: "Manuscripts from different regional courts consistently preserve distinct word choices in the same poems, with each region's variants showing internal coherence rather than random differences." },
    { id: "C", text: "Surviving manuscripts show that the anthologies were copied a small number of times before falling out of use." },
    { id: "D", text: "The Heian court employed only a single full-time anthology copyist at any given time." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Command of Evidence — Textual**\n\n**Choice B is correct.**\n\nAkagi's claim is that variants reflect *deliberate editorial choices* by regional courts, not random copyist error. Choice B is exactly that: each region's variants are internally coherent — a fingerprint of choice rather than a scatter of errors.\n\n**Why the wrong answers are tempting:**\n* Choice A: agreement everywhere would undermine her claim.\n* Choice C: copy frequency says nothing about whether variants are deliberate.\n* Choice D: staffing levels don't bear on the claim about regional courts."
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Standard English Conventions",
  skill: "boundaries",
  passage: "When the labor historian Owain Llewelyn examined the wage ledgers from the Penrhyn slate quarry, he noticed something his predecessors had overlooked ________ a column for \"deductions for tools\" that consistently exceeded the deduction for housing.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "overlooked; a" },
    { id: "B", text: "overlooked: a" },
    { id: "C", text: "overlooked, a" },
    { id: "D", text: "overlooked a" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Boundaries (Colon)**\n\n**Choice B is correct.**\n\nThe second part (\"a column for 'deductions for tools'...\") *names* what Llewelyn noticed. A colon is the standard punctuation to introduce that elaboration after a complete clause.\n\n**Why the wrong answers are tempting:**\n* Choice A: a semicolon would require an independent clause after it, which doesn't appear here.\n* Choice C: a comma is too weak to introduce the named elaboration.\n* Choice D: no punctuation at all leaves the elaboration unmarked."
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Standard English Conventions",
  skill: "form-structure-and-sense",
  passage: "Each of the twelve marginal sketches recovered from the Welsh monastic manuscript ________ proportions and line weights matching the principal scribe's drawings in the main text.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "show" },
    { id: "B", text: "shows" },
    { id: "C", text: "are showing" },
    { id: "D", text: "have shown" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Subject-Verb Agreement**\n\n**Choice B is correct.**\n\nThe subject is \"Each\" — singular — even though \"of the twelve marginal sketches\" follows. \"Each\" takes a singular verb: *shows*.\n\n**Why the wrong answers are tempting:**\n* Choice A: plural \"show\" doesn't agree with \"Each.\"\n* Choice C: \"are showing\" is plural and uses an awkward continuous form.\n* Choice D: \"have shown\" is plural; this is a static fact, so simple present is correct."
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Standard English Conventions",
  skill: "boundaries",
  passage: "The composer Lillian Strake, whose 1962 letter to her former teacher describes the moment she abandoned orchestral suites for chamber ________ now considered one of the central figures of postwar American chamber music.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "works is" },
    { id: "B", text: "works, is" },
    { id: "C", text: "works: is" },
    { id: "D", text: "works; is" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Boundaries (Nonrestrictive Clause)**\n\n**Choice B is correct.**\n\nThe phrase \"whose 1962 letter to her former teacher describes the moment she abandoned orchestral suites for chamber works\" is a nonrestrictive relative clause. Such clauses are bounded by commas — one before \"whose\" and the matching closing comma after \"works.\"\n\n**Why the wrong answers are tempting:**\n* Choice A: leaves the relative clause unclosed, producing a run-on.\n* Choice C: a colon is for elaborating, not for closing a parenthetical.\n* Choice D: a semicolon would require an independent clause after it; \"is\" is a verb, not a clause."
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Standard English Conventions",
  skill: "form-structure-and-sense",
  passage: "Of the four prehistorians invited to the Chauvet symposium, Camille Veyrenc presented the ________ analysis, drawing on six separate field seasons of close panel reexamination.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "more detailed" },
    { id: "B", text: "most detailed" },
    { id: "C", text: "more detaileder" },
    { id: "D", text: "detailedest" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Comparative vs. Superlative**\n\n**Choice B is correct.**\n\n\"Of the four prehistorians\" introduces a comparison among three or more — the *superlative* form is required: *most detailed*.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"more detailed\" is for comparing exactly two.\n* Choice C: not a real form.\n* Choice D: \"detailedest\" is not a standard English form."
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Standard English Conventions",
  skill: "boundaries",
  passage: "Most of the Bronze Age kurgans excavated in twentieth-century Kazakhstan are now studied through their published assemblage ________ a small number of intact burial chambers have been preserved on site as protected archaeological reserves.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "catalogues" },
    { id: "B", text: "catalogues," },
    { id: "C", text: "catalogues;" },
    { id: "D", text: "catalogues:" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Boundaries (Comma Splice)**\n\n**Choice C is correct.**\n\nTwo independent clauses appear: \"Most of the Bronze Age kurgans... are now studied through their published assemblage catalogues\" and \"a small number of intact burial chambers have been preserved on site....\" Joining them with only a comma would create a comma splice; a semicolon properly joins two independent clauses.\n\n**Why the wrong answers are tempting:**\n* Choice A: leaves a run-on.\n* Choice B: comma splice between two independent clauses.\n* Choice D: a colon is for elaborating, not for joining contrasting independent clauses."
},
{
  id: 23,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Standard English Conventions",
  skill: "form-structure-and-sense",
  passage: "Sergei Astrov is a historian ________ work on small Trans-Siberian station buildings has reshaped how scholars read regional decoration into infrastructure projects.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "who's" },
    { id: "B", text: "whose" },
    { id: "C", text: "whom's" },
    { id: "D", text: "which's" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Form, Structure, and Sense (Possessive Pronoun)**\n\n**Choice B is correct.**\n\nThe blank is followed by \"work\" — a noun owned by the historian. The possessive form is *whose*.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"who's\" is the contraction for \"who is\" — not possessive.\n* Choice C: \"whom's\" is not standard English.\n* Choice D: \"which\" can't refer to a person."
},
{
  id: 24,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Expression of Ideas",
  skill: "transitions",
  passage: "The earliest twentieth-century studies of bog-body deaths interpreted nearly every case of strangulation, throat cutting, or sharp blow as evidence of ritual sacrifice. ________ recent CT-scan and isotope analyses have allowed researchers to test specific cases against the alternative interpretation that some deaths were judicial executions of community outsiders.",
  question: "Which choice completes the text with the most logical transition?",
  choices: [
    { id: "A", text: "For instance," },
    { id: "B", text: "However," },
    { id: "C", text: "Therefore," },
    { id: "D", text: "Likewise," }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Transitions**\n\n**Choice B is correct.**\n\nThe earlier studies treated injuries as ritual sacrifice. Recent CT-scan and isotope work *complicates* that single interpretation. \"However\" signals that contrast.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"For instance\" introduces an example of the same point, not a contrast.\n* Choice C: \"Therefore\" implies cause and effect, which doesn't fit.\n* Choice D: \"Likewise\" implies similarity, the opposite of the contrast in approach."
},
{
  id: 25,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Expression of Ideas",
  skill: "transitions",
  passage: "Early designers of community microgrids in rural Central Asia drafted rate structures that did not account for the difference between early and late adopters' household incomes. ________ late adopters frequently received bills nearly twice as high as those of their wealthier neighbors, and farmer cooperatives quickly demanded income-aware tariff rules.",
  question: "Which choice completes the text with the most logical transition?",
  choices: [
    { id: "A", text: "Nevertheless," },
    { id: "B", text: "Predictably," },
    { id: "C", text: "In contrast," },
    { id: "D", text: "By coincidence," }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Transitions**\n\n**Choice B is correct.**\n\nIf rate structures ignore income differences, higher bills falling on late (lower-income) adopters is exactly what one would expect. \"Predictably\" signals that the consequence follows naturally from the cause described.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"Nevertheless\" signals an unexpected outcome — but this outcome was expected.\n* Choice C: \"In contrast\" needs two contrasting facts about the same subject; here we have cause and effect.\n* Choice D: \"By coincidence\" denies the causal link the passage clearly draws."
},
{
  id: 26,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Expression of Ideas",
  skill: "rhetorical-synthesis",
  studentNotes: {
    intro: "While researching Bronze Age kurgans of the Eurasian steppe, a student took the following notes:",
    bullets: [
      "Kurgans are mounded burial structures built across the Eurasian steppe between roughly 3,000 and 1,000 BCE.",
      "Many kurgans contain horse harness components such as bits, cheekpieces, and bridle ornaments.",
      "Twentieth-century scholars often read elaborate harnesses as evidence of high social rank for the rider.",
      "A 2021 reanalysis by Beksultanova examined wear on bits and cheekpieces from twenty-three kurgan assemblages.",
      "Beksultanova found nearly identical heavy wear, suggesting the harnesses were working equipment, not ceremonial display."
    ],
    goal: "The student wants to introduce the concept of a kurgan to readers unfamiliar with it."
  },
  question: "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  choices: [
    { id: "A", text: "Beksultanova found nearly identical heavy wear on the bits, suggesting the harnesses were working equipment rather than ceremonial display." },
    { id: "B", text: "A kurgan is a mounded burial structure built across the Eurasian steppe between roughly 3,000 and 1,000 BCE." },
    { id: "C", text: "Twentieth-century scholars often read elaborate harnesses as evidence of high social rank for the rider." },
    { id: "D", text: "Many kurgans contain horse harness components such as bits, cheekpieces, and bridle ornaments." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Rhetorical Synthesis**\n\n**Choice B is correct.**\n\nThe goal is to *introduce* the concept of a kurgan to readers unfamiliar with it. Choice B does that — it names the object, explains what it is (a mounded burial structure), and gives its geographic and chronological range.\n\n**Why the wrong answers are tempting:**\n* Choice A: a specific finding, not an introduction.\n* Choice C: a scholarly interpretation that assumes the reader already knows what a kurgan is.\n* Choice D: a typical content list that assumes the reader already knows what kurgans are."
},
{
  id: 27,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  domain: "Expression of Ideas",
  skill: "rhetorical-synthesis",
  studentNotes: {
    intro: "While researching the Chauvet Cave paintings of southern France, a student took the following notes:",
    bullets: [
      "The Chauvet Cave, in the Ardèche region of France, contains paintings dated to roughly 36,000 years ago.",
      "Many panels show large mammals — horses, lions, rhinoceroses — drawn with overlapping outlines.",
      "Some scholars argue the overlaps were stylistic, suggesting motion across a single event.",
      "Other scholars interpret the overlaps as the result of distinct visits by different artists across centuries.",
      "Recent uranium-thorium dating of pigment crusts has begun to test these competing interpretations directly."
    ],
    goal: "The student wants to emphasize that recent dating techniques are reshaping how scholars interpret the overlapping figures at Chauvet."
  },
  question: "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  choices: [
    { id: "A", text: "The Chauvet Cave, in the Ardèche region of France, contains paintings dated to roughly 36,000 years ago." },
    { id: "B", text: "Many panels at Chauvet show large mammals such as horses, lions, and rhinoceroses." },
    { id: "C", text: "Some scholars argue that overlapping outlines on Chauvet panels were stylistic devices suggesting motion." },
    { id: "D", text: "Although scholars long divided over whether overlapping outlines at Chauvet represented motion within a single event or distinct visits across centuries, recent uranium-thorium dating of pigment crusts now allows these competing interpretations to be tested directly." }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Rhetorical Synthesis**\n\n**Choice D is correct.**\n\nThe goal is to emphasize that *recent dating techniques are reshaping interpretation* of Chauvet's overlapping figures. Choice D does exactly that — it names the older interpretive divide and the new dating technique (uranium-thorium of pigment crusts) and its effect (testing competing interpretations directly).\n\n**Why the wrong answers are tempting:**\n* Choice A: a date, no mention of new dating techniques or interpretation.\n* Choice B: a description of subjects, no mention of techniques.\n* Choice C: one side of the older debate, no mention of new techniques."
}
      ]
    }
  ]
};
